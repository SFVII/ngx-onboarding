import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { ScrollToAnimation } from './scroll-to-animation';
import { DEFAULTS, isElementRef, isNativeElement, isNumber, isString, isWindow, stripHash } from './scroll-to-helpers';
import { ReplaySubject, throwError } from 'rxjs';
import * as i0 from "@angular/core";
/**
 * The Scroll To Service handles starting, interrupting
 * and ending the actual Scroll Animation. It provides
 * some utilities to find the proper HTML Element on a
 * given page to setup Event Listeners and calculate
 * distances for the Animation.
 */
export class ScrollToService {
    /**
     * Construct and setup required paratemeters.
     *
     * @param document         A Reference to the Document
     * @param platformId       Angular Platform ID
     */
    constructor(document, platformId) {
        this.document = document;
        this.platformId = platformId;
        this.interruptiveEvents = ['mousewheel', 'DOMMouseScroll', 'touchstart'];
    }
    /**
     * Target an Element to scroll to. Notice that the `TimeOut` decorator
     * ensures the executing to take place in the next Angular lifecycle.
     * This allows for scrolling to elements that are e.g. initially hidden
     * by means of `*ngIf`, but ought to be scrolled to eventually.
     *
     * @todo type 'any' in Observable should become custom type like 'ScrollToEvent' (base class), see issue comment:
     *  - https://github.com/nicky-lenaers/ngx-scroll-to/issues/10#issuecomment-317198481
     *
     * @param options         Configuration Object
     * @returns               Observable
     */
    scrollTo(options) {
        if (!isPlatformBrowser(this.platformId)) {
            return new ReplaySubject().asObservable();
        }
        return this.start(options);
    }
    /**
     * Start a new Animation.
     *
     * @todo Emit proper events from subscription
     *
     * @param options         Configuration Object
     * @returns               Observable
     */
    start(options) {
        // Merge config with default values
        const mergedConfigOptions = {
            ...DEFAULTS,
            ...options
        };
        if (this.animation) {
            this.animation.stop();
        }
        const targetNode = this.getNode(mergedConfigOptions.target);
        if (mergedConfigOptions.target && !targetNode) {
            return throwError('Unable to find Target Element');
        }
        const container = this.getContainer(mergedConfigOptions, targetNode);
        if (mergedConfigOptions.container && !container) {
            return throwError('Unable to find Container Element');
        }
        const listenerTarget = this.getListenerTarget(container) || window;
        let to = container ? container.getBoundingClientRect().top : 0;
        if (targetNode) {
            to = isWindow(listenerTarget) ?
                window.scrollY + targetNode.getBoundingClientRect().top :
                targetNode.getBoundingClientRect().top;
        }
        // Create Animation
        this.animation = new ScrollToAnimation(container, listenerTarget, isWindow(listenerTarget), to, mergedConfigOptions, isPlatformBrowser(this.platformId));
        const onInterrupt = () => this.animation.stop();
        this.addInterruptiveEventListeners(listenerTarget, onInterrupt);
        // Start Animation
        const animation$ = this.animation.start();
        this.subscribeToAnimation(animation$, listenerTarget, onInterrupt);
        return animation$;
    }
    /**
     * Subscribe to the events emitted from the Scrolling
     * Animation. Events might be used for e.g. unsubscribing
     * once finished.
     *
     * @param animation$              The Animation Observable
     * @param listenerTarget          The Listener Target for events
     * @param onInterrupt             The handler for Interruptive Events
     * @returns                       Void
     */
    subscribeToAnimation(animation$, listenerTarget, onInterrupt) {
        const subscription = animation$
            .subscribe(() => {
        }, () => {
        }, () => {
            this.removeInterruptiveEventListeners(this.interruptiveEvents, listenerTarget, onInterrupt);
            subscription.unsubscribe();
        });
    }
    /**
     * Get the container HTML Element in which
     * the scrolling should happen.
     *
     * @param options         The Merged Configuration Object
     * @param targetNode    the targeted HTMLElement
     */
    getContainer(options, targetNode) {
        let container = null;
        if (options.container) {
            container = this.getNode(options.container, true);
        }
        else if (targetNode) {
            container = this.getFirstScrollableParent(targetNode);
        }
        return container;
    }
    /**
     * Add listeners for the Animation Interruptive Events
     * to the Listener Target.
     *
     * @param events            List of events to listen to
     * @param listenerTarget    Target to attach the listener on
     * @param handler           Handler for when the listener fires
     * @returns                 Void
     */
    addInterruptiveEventListeners(listenerTarget, handler) {
        if (!listenerTarget) {
            listenerTarget = window;
        }
        this.interruptiveEvents
            .forEach(event => listenerTarget
            .addEventListener(event, handler, this.supportPassive() ? { passive: true } : false));
    }
    /**
     * Feature-detect support for passive event listeners.
     *
     * @returns       Whether or not passive event listeners are supported
     */
    supportPassive() {
        let supportsPassive = false;
        try {
            const opts = Object.defineProperty({}, 'passive', {
                get: () => {
                    supportsPassive = true;
                }
            });
            window.addEventListener('testPassive', null, opts);
            window.removeEventListener('testPassive', null, opts);
        }
        catch (e) {
        }
        return supportsPassive;
    }
    /**
     * Remove listeners for the Animation Interrupt Event from
     * the Listener Target. Specifying the correct handler prevents
     * memory leaks and makes the allocated memory available for
     * Garbage Collection.
     *
     * @param events            List of Interruptive Events to remove
     * @param listenerTarget    Target to attach the listener on
     * @param handler           Handler for when the listener fires
     * @returns                 Void
     */
    removeInterruptiveEventListeners(events, listenerTarget, handler) {
        if (!listenerTarget) {
            listenerTarget = window;
        }
        events.forEach(event => listenerTarget.removeEventListener(event, handler));
    }
    /**
     * Find the first scrollable parent Node of a given
     * Element. The DOM Tree gets searched upwards
     * to find this first scrollable parent. Parents might
     * be ignored by CSS styles applied to the HTML Element.
     *
     * @param nativeElement     The Element to search the DOM Tree upwards from
     * @returns                 The first scrollable parent HTML Element
     */
    getFirstScrollableParent(nativeElement) {
        let style = window.getComputedStyle(nativeElement);
        const overflowRegex = /(auto|scroll|overlay)/;
        if (style.position === 'fixed') {
            return null;
        }
        let parent = nativeElement;
        while (parent.parentElement) {
            parent = parent.parentElement;
            style = window.getComputedStyle(parent);
            if (style.position === 'absolute'
                || style.overflow === 'hidden'
                || style.overflowY === 'hidden') {
                continue;
            }
            if (overflowRegex.test(style.overflow + style.overflowY)
                || parent.tagName === 'BODY') {
                return parent;
            }
        }
        return null;
    }
    /**
     * Get the Target Node to scroll to.
     *
     * @param id              The given ID of the node, either a string or
     *                        an element reference
     * @param allowBodyTag    Indicate whether or not the Document Body is
     *                        considered a valid Target Node
     * @returns               The Target Node to scroll to
     */
    getNode(id, allowBodyTag = false) {
        let targetNode;
        if (isString(id)) {
            if (allowBodyTag && (id === 'body' || id === 'BODY')) {
                targetNode = this.document.body;
            }
            else {
                targetNode = this.document.getElementById(stripHash(id));
            }
        }
        else if (isNumber(id)) {
            targetNode = this.document.getElementById(String(id));
        }
        else if (isElementRef(id)) {
            targetNode = id.nativeElement;
        }
        else if (isNativeElement(id)) {
            targetNode = id;
        }
        return targetNode;
    }
    /**
     * Retrieve the Listener target. This Listener Target is used
     * to attach Event Listeners on. In case of the target being
     * the Document Body, we need the actual `window` to listen
     * for events.
     *
     * @param container           The HTML Container element
     * @returns                   The Listener Target to attach events on
     */
    getListenerTarget(container) {
        if (!container) {
            return null;
        }
        return this.isDocumentBody(container) ? window : container;
    }
    /**
     * Test if a given HTML Element is the Document Body.
     *
     * @param element             The given HTML Element
     * @returns                   Whether or not the Element is the
     *                            Document Body Element
     */
    isDocumentBody(element) {
        return element.tagName.toUpperCase() === 'BODY';
    }
}
ScrollToService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.6", ngImport: i0, type: ScrollToService, deps: [{ token: DOCUMENT }, { token: PLATFORM_ID }], target: i0.ɵɵFactoryTarget.Injectable });
ScrollToService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.2.6", ngImport: i0, type: ScrollToService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.6", ngImport: i0, type: ScrollToService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: undefined, decorators: [{
                    type: Inject,
                    args: [DOCUMENT]
                }] }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [PLATFORM_ID]
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Nyb2xsLXRvLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9vbmJvYXJkaW5nL3NyYy9saWIvbW9kdWxlL3Njcm9sbC10by9zY3JvbGwtdG8uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDaEUsT0FBTyxFQUFFLFFBQVEsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRzlELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzFELE9BQU8sRUFBRSxRQUFRLEVBQUUsWUFBWSxFQUFFLGVBQWUsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN2SCxPQUFPLEVBQWMsYUFBYSxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7QUFFN0Q7Ozs7OztHQU1HO0FBSUgsTUFBTSxPQUFPLGVBQWU7SUFpQjFCOzs7OztPQUtHO0lBQ0gsWUFDNEIsUUFBYSxFQUNWLFVBQWU7UUFEbEIsYUFBUSxHQUFSLFFBQVEsQ0FBSztRQUNWLGVBQVUsR0FBVixVQUFVLENBQUs7UUFFNUMsSUFBSSxDQUFDLGtCQUFrQixHQUFHLENBQUMsWUFBWSxFQUFFLGdCQUFnQixFQUFFLFlBQVksQ0FBQyxDQUFDO0lBQzNFLENBQUM7SUFFRDs7Ozs7Ozs7Ozs7T0FXRztJQUNILFFBQVEsQ0FBQyxPQUE4QjtRQUVyQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFO1lBQ3ZDLE9BQU8sSUFBSSxhQUFhLEVBQUUsQ0FBQyxZQUFZLEVBQUUsQ0FBQztTQUMzQztRQUVELE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUM3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VTttQkFBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7OzBCQXlCSSxNQUFNOzJCQUFDLFFBQVE7OzBCQUNmLE1BQU07MkJBQUMsV0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSwgUExBVEZPUk1fSUQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERPQ1VNRU5ULCBpc1BsYXRmb3JtQnJvd3NlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IFNjcm9sbFRvQ29uZmlnT3B0aW9ucywgU2Nyb2xsVG9Db25maWdPcHRpb25zVGFyZ2V0LCBTY3JvbGxUb0xpc3RlbmVyVGFyZ2V0LCBTY3JvbGxUb1RhcmdldCB9IGZyb20gJy4vc2Nyb2xsLXRvLWNvbmZpZy5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgU2Nyb2xsVG9BbmltYXRpb24gfSBmcm9tICcuL3Njcm9sbC10by1hbmltYXRpb24nO1xuaW1wb3J0IHsgREVGQVVMVFMsIGlzRWxlbWVudFJlZiwgaXNOYXRpdmVFbGVtZW50LCBpc051bWJlciwgaXNTdHJpbmcsIGlzV2luZG93LCBzdHJpcEhhc2ggfSBmcm9tICcuL3Njcm9sbC10by1oZWxwZXJzJztcbmltcG9ydCB7IE9ic2VydmFibGUsIFJlcGxheVN1YmplY3QsIHRocm93RXJyb3IgfSBmcm9tICdyeGpzJztcblxuLyoqXG4gKiBUaGUgU2Nyb2xsIFRvIFNlcnZpY2UgaGFuZGxlcyBzdGFydGluZywgaW50ZXJydXB0aW5nXG4gKiBhbmQgZW5kaW5nIHRoZSBhY3R1YWwgU2Nyb2xsIEFuaW1hdGlvbi4gSXQgcHJvdmlkZXNcbiAqIHNvbWUgdXRpbGl0aWVzIHRvIGZpbmQgdGhlIHByb3BlciBIVE1MIEVsZW1lbnQgb24gYVxuICogZ2l2ZW4gcGFnZSB0byBzZXR1cCBFdmVudCBMaXN0ZW5lcnMgYW5kIGNhbGN1bGF0ZVxuICogZGlzdGFuY2VzIGZvciB0aGUgQW5pbWF0aW9uLlxuICovXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBTY3JvbGxUb1NlcnZpY2Uge1xuXG4gIC8qKlxuICAgKiBUaGUgYW5pbWF0aW9uIHRoYXQgcHJvdmlkZXMgdGhlIHNjcm9sbGluZ1xuICAgKiB0byBoYXBwZW4gc21vb3RobHkgb3ZlciB0aW1lLiBEZWZpbmluZyBpdCBoZXJlXG4gICAqIGFsbG93cyBmb3IgdXNhZ2Ugb2YgZS5nLiBgc3RhcnRgIGFuZCBgc3RvcGBcbiAgICogbWV0aG9kcyB3aXRoaW4gdGhpcyBBbmd1bGFyIFNlcnZpY2UuXG4gICAqL1xuICBwdWJsaWMgYW5pbWF0aW9uOiBTY3JvbGxUb0FuaW1hdGlvbjtcblxuICAvKipcbiAgICogSW50ZXJydXB0aXZlIEV2ZW50cyBhbGxvdyB0byBzY3JvbGxpbmcgYW5pbWF0aW9uXG4gICAqIHRvIGJlIGludGVycnVwdGVkIGJlZm9yZSBpdCBpcyBmaW5pc2hlZC4gVGhlIGxpc3RcbiAgICogb2YgSW50ZXJydXB0aXZlIEV2ZW50cyByZXByZXNlbnRzIHRob3NlLlxuICAgKi9cbiAgcHVibGljIGludGVycnVwdGl2ZUV2ZW50czogc3RyaW5nW107XG5cbiAgLyoqXG4gICAqIENvbnN0cnVjdCBhbmQgc2V0dXAgcmVxdWlyZWQgcGFyYXRlbWV0ZXJzLlxuICAgKlxuICAgKiBAcGFyYW0gZG9jdW1lbnQgICAgICAgICBBIFJlZmVyZW5jZSB0byB0aGUgRG9jdW1lbnRcbiAgICogQHBhcmFtIHBsYXRmb3JtSWQgICAgICAgQW5ndWxhciBQbGF0Zm9ybSBJRFxuICAgKi9cbiAgY29uc3RydWN0b3IoXG4gICAgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBkb2N1bWVudDogYW55LFxuICAgIEBJbmplY3QoUExBVEZPUk1fSUQpIHByaXZhdGUgcGxhdGZvcm1JZDogYW55XG4gICkge1xuICAgIHRoaXMuaW50ZXJydXB0aXZlRXZlbnRzID0gWydtb3VzZXdoZWVsJywgJ0RPTU1vdXNlU2Nyb2xsJywgJ3RvdWNoc3RhcnQnXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUYXJnZXQgYW4gRWxlbWVudCB0byBzY3JvbGwgdG8uIE5vdGljZSB0aGF0IHRoZSBgVGltZU91dGAgZGVjb3JhdG9yXG4gICAqIGVuc3VyZXMgdGhlIGV4ZWN1dGluZyB0byB0YWtlIHBsYWNlIGluIHRoZSBuZXh0IEFuZ3VsYXIgbGlmZWN5Y2xlLlxuICAgKiBUaGlzIGFsbG93cyBmb3Igc2Nyb2xsaW5nIHRvIGVsZW1lbnRzIHRoYXQgYXJlIGUuZy4gaW5pdGlhbGx5IGhpZGRlblxuICAgKiBieSBtZWFucyBvZiBgKm5nSWZgLCBidXQgb3VnaHQgdG8gYmUgc2Nyb2xsZWQgdG8gZXZlbnR1YWxseS5cbiAgICpcbiAgICogQHRvZG8gdHlwZSAnYW55JyBpbiBPYnNlcnZhYmxlIHNob3VsZCBiZWNvbWUgY3VzdG9tIHR5cGUgbGlrZSAnU2Nyb2xsVG9FdmVudCcgKGJhc2UgY2xhc3MpLCBzZWUgaXNzdWUgY29tbWVudDpcbiAgICogIC0gaHR0cHM6Ly9naXRodWIuY29tL25pY2t5LWxlbmFlcnMvbmd4LXNjcm9sbC10by9pc3N1ZXMvMTAjaXNzdWVjb21tZW50LTMxNzE5ODQ4MVxuICAgKlxuICAgKiBAcGFyYW0gb3B0aW9ucyAgICAgICAgIENvbmZpZ3VyYXRpb24gT2JqZWN0XG4gICAqIEByZXR1cm5zICAgICAgICAgICAgICAgT2JzZXJ2YWJsZVxuICAgKi9cbiAgc2Nyb2xsVG8ob3B0aW9uczogU2Nyb2xsVG9Db25maWdPcHRpb25zKTogT2JzZXJ2YWJsZTxhbnk+IHtcblxuICAgIGlmICghaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybUlkKSkge1xuICAgICAgcmV0dXJuIG5ldyBSZXBsYXlTdWJqZWN0KCkuYXNPYnNlcnZhYmxlKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuc3RhcnQob3B0aW9ucyk7XG4gIH1cblxuICAvKipcbiAgICogU3RhcnQgYSBuZXcgQW5pbWF0aW9uLlxuICAgKlxuICAgKiBAdG9kbyBFbWl0IHByb3BlciBldmVudHMgZnJvbSBzdWJzY3JpcHRpb25cbiAgICpcbiAgICogQHBhcmFtIG9wdGlvbnMgICAgICAgICBDb25maWd1cmF0aW9uIE9iamVjdFxuICAgKiBAcmV0dXJucyAgICAgICAgICAgICAgIE9ic2VydmFibGVcbiAgICovXG4gIHB1YmxpYyBzdGFydChvcHRpb25zOiBTY3JvbGxUb0NvbmZpZ09wdGlvbnMpOiBPYnNlcnZhYmxlPG51bWJlcj4ge1xuXG4gICAgLy8gTWVyZ2UgY29uZmlnIHdpdGggZGVmYXVsdCB2YWx1ZXNcbiAgICBjb25zdCBtZXJnZWRDb25maWdPcHRpb25zID0ge1xuICAgICAgLi4uREVGQVVMVFMgYXMgU2Nyb2xsVG9Db25maWdPcHRpb25zLFxuICAgICAgLi4ub3B0aW9uc1xuICAgIH0gYXMgU2Nyb2xsVG9Db25maWdPcHRpb25zVGFyZ2V0O1xuXG4gICAgaWYgKHRoaXMuYW5pbWF0aW9uKSB7XG4gICAgICB0aGlzLmFuaW1hdGlvbi5zdG9wKCk7XG4gICAgfVxuXG4gICAgY29uc3QgdGFyZ2V0Tm9kZSA9IHRoaXMuZ2V0Tm9kZShtZXJnZWRDb25maWdPcHRpb25zLnRhcmdldCk7XG4gICAgaWYgKG1lcmdlZENvbmZpZ09wdGlvbnMudGFyZ2V0ICYmICF0YXJnZXROb2RlKSB7XG4gICAgICByZXR1cm4gdGhyb3dFcnJvcignVW5hYmxlIHRvIGZpbmQgVGFyZ2V0IEVsZW1lbnQnKTtcbiAgICB9XG5cbiAgICBjb25zdCBjb250YWluZXI6IEhUTUxFbGVtZW50ID0gdGhpcy5nZXRDb250YWluZXIobWVyZ2VkQ29uZmlnT3B0aW9ucywgdGFyZ2V0Tm9kZSk7XG4gICAgaWYgKG1lcmdlZENvbmZpZ09wdGlvbnMuY29udGFpbmVyICYmICFjb250YWluZXIpIHtcbiAgICAgIHJldHVybiB0aHJvd0Vycm9yKCdVbmFibGUgdG8gZmluZCBDb250YWluZXIgRWxlbWVudCcpO1xuICAgIH1cblxuICAgIGNvbnN0IGxpc3RlbmVyVGFyZ2V0ID0gdGhpcy5nZXRMaXN0ZW5lclRhcmdldChjb250YWluZXIpIHx8IHdpbmRvdztcblxuICAgIGxldCB0byA9IGNvbnRhaW5lciA/IGNvbnRhaW5lci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgOiAwO1xuXG4gICAgaWYgKHRhcmdldE5vZGUpIHtcbiAgICAgIHRvID0gaXNXaW5kb3cobGlzdGVuZXJUYXJnZXQpID9cbiAgICAgICAgd2luZG93LnNjcm9sbFkgKyB0YXJnZXROb2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCA6XG4gICAgICAgIHRhcmdldE5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wO1xuICAgIH1cblxuICAgIC8vIENyZWF0ZSBBbmltYXRpb25cbiAgICB0aGlzLmFuaW1hdGlvbiA9IG5ldyBTY3JvbGxUb0FuaW1hdGlvbihcbiAgICAgIGNvbnRhaW5lcixcbiAgICAgIGxpc3RlbmVyVGFyZ2V0LFxuICAgICAgaXNXaW5kb3cobGlzdGVuZXJUYXJnZXQpLFxuICAgICAgdG8sXG4gICAgICBtZXJnZWRDb25maWdPcHRpb25zLFxuICAgICAgaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybUlkKVxuICAgICk7XG4gICAgY29uc3Qgb25JbnRlcnJ1cHQgPSAoKSA9PiB0aGlzLmFuaW1hdGlvbi5zdG9wKCk7XG4gICAgdGhpcy5hZGRJbnRlcnJ1cHRpdmVFdmVudExpc3RlbmVycyhsaXN0ZW5lclRhcmdldCwgb25JbnRlcnJ1cHQpO1xuXG4gICAgLy8gU3RhcnQgQW5pbWF0aW9uXG4gICAgY29uc3QgYW5pbWF0aW9uJCA9IHRoaXMuYW5pbWF0aW9uLnN0YXJ0KCk7XG4gICAgdGhpcy5zdWJzY3JpYmVUb0FuaW1hdGlvbihhbmltYXRpb24kLCBsaXN0ZW5lclRhcmdldCwgb25JbnRlcnJ1cHQpO1xuXG4gICAgcmV0dXJuIGFuaW1hdGlvbiQ7XG4gIH1cblxuICAvKipcbiAgICogU3Vic2NyaWJlIHRvIHRoZSBldmVudHMgZW1pdHRlZCBmcm9tIHRoZSBTY3JvbGxpbmdcbiAgICogQW5pbWF0aW9uLiBFdmVudHMgbWlnaHQgYmUgdXNlZCBmb3IgZS5nLiB1bnN1YnNjcmliaW5nXG4gICAqIG9uY2UgZmluaXNoZWQuXG4gICAqXG4gICAqIEBwYXJhbSBhbmltYXRpb24kICAgICAgICAgICAgICBUaGUgQW5pbWF0aW9uIE9ic2VydmFibGVcbiAgICogQHBhcmFtIGxpc3RlbmVyVGFyZ2V0ICAgICAgICAgIFRoZSBMaXN0ZW5lciBUYXJnZXQgZm9yIGV2ZW50c1xuICAgKiBAcGFyYW0gb25JbnRlcnJ1cHQgICAgICAgICAgICAgVGhlIGhhbmRsZXIgZm9yIEludGVycnVwdGl2ZSBFdmVudHNcbiAgICogQHJldHVybnMgICAgICAgICAgICAgICAgICAgICAgIFZvaWRcbiAgICovXG4gIHB1YmxpYyBzdWJzY3JpYmVUb0FuaW1hdGlvbihcbiAgICBhbmltYXRpb24kOiBPYnNlcnZhYmxlPGFueT4sXG4gICAgbGlzdGVuZXJUYXJnZXQ6IFNjcm9sbFRvTGlzdGVuZXJUYXJnZXQsXG4gICAgb25JbnRlcnJ1cHQ6IEV2ZW50TGlzdGVuZXJPckV2ZW50TGlzdGVuZXJPYmplY3RcbiAgKSB7XG4gICAgY29uc3Qgc3Vic2NyaXB0aW9uID0gYW5pbWF0aW9uJFxuICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgKCkgPT4ge1xuICAgICAgICB9LFxuICAgICAgICAoKSA9PiB7XG4gICAgICAgIH0sXG4gICAgICAgICgpID0+IHtcbiAgICAgICAgICB0aGlzLnJlbW92ZUludGVycnVwdGl2ZUV2ZW50TGlzdGVuZXJzKHRoaXMuaW50ZXJydXB0aXZlRXZlbnRzLCBsaXN0ZW5lclRhcmdldCwgb25JbnRlcnJ1cHQpO1xuICAgICAgICAgIHN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgICAgICB9XG4gICAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgY29udGFpbmVyIEhUTUwgRWxlbWVudCBpbiB3aGljaFxuICAgKiB0aGUgc2Nyb2xsaW5nIHNob3VsZCBoYXBwZW4uXG4gICAqXG4gICAqIEBwYXJhbSBvcHRpb25zICAgICAgICAgVGhlIE1lcmdlZCBDb25maWd1cmF0aW9uIE9iamVjdFxuICAgKiBAcGFyYW0gdGFyZ2V0Tm9kZSAgICB0aGUgdGFyZ2V0ZWQgSFRNTEVsZW1lbnRcbiAgICovXG4gIHByaXZhdGUgZ2V0Q29udGFpbmVyKG9wdGlvbnM6IFNjcm9sbFRvQ29uZmlnT3B0aW9ucywgdGFyZ2V0Tm9kZTogSFRNTEVsZW1lbnQpOiBIVE1MRWxlbWVudCB8IG51bGwge1xuXG4gICAgbGV0IGNvbnRhaW5lcjogSFRNTEVsZW1lbnQgfCBudWxsID0gbnVsbDtcblxuICAgIGlmIChvcHRpb25zLmNvbnRhaW5lcikge1xuICAgICAgY29udGFpbmVyID0gdGhpcy5nZXROb2RlKG9wdGlvbnMuY29udGFpbmVyLCB0cnVlKTtcbiAgICB9IGVsc2UgaWYgKHRhcmdldE5vZGUpIHtcbiAgICAgIGNvbnRhaW5lciA9IHRoaXMuZ2V0Rmlyc3RTY3JvbGxhYmxlUGFyZW50KHRhcmdldE5vZGUpO1xuICAgIH1cblxuICAgIHJldHVybiBjb250YWluZXI7XG4gIH1cblxuICAvKipcbiAgICogQWRkIGxpc3RlbmVycyBmb3IgdGhlIEFuaW1hdGlvbiBJbnRlcnJ1cHRpdmUgRXZlbnRzXG4gICAqIHRvIHRoZSBMaXN0ZW5lciBUYXJnZXQuXG4gICAqXG4gICAqIEBwYXJhbSBldmVudHMgICAgICAgICAgICBMaXN0IG9mIGV2ZW50cyB0byBsaXN0ZW4gdG9cbiAgICogQHBhcmFtIGxpc3RlbmVyVGFyZ2V0ICAgIFRhcmdldCB0byBhdHRhY2ggdGhlIGxpc3RlbmVyIG9uXG4gICAqIEBwYXJhbSBoYW5kbGVyICAgICAgICAgICBIYW5kbGVyIGZvciB3aGVuIHRoZSBsaXN0ZW5lciBmaXJlc1xuICAgKiBAcmV0dXJucyAgICAgICAgICAgICAgICAgVm9pZFxuICAgKi9cbiAgcHJpdmF0ZSBhZGRJbnRlcnJ1cHRpdmVFdmVudExpc3RlbmVycyhcbiAgICBsaXN0ZW5lclRhcmdldDogU2Nyb2xsVG9MaXN0ZW5lclRhcmdldCxcbiAgICBoYW5kbGVyOiBFdmVudExpc3RlbmVyT3JFdmVudExpc3RlbmVyT2JqZWN0KTogdm9pZCB7XG5cbiAgICBpZiAoIWxpc3RlbmVyVGFyZ2V0KSB7XG4gICAgICBsaXN0ZW5lclRhcmdldCA9IHdpbmRvdztcbiAgICB9XG5cbiAgICB0aGlzLmludGVycnVwdGl2ZUV2ZW50c1xuICAgICAgLmZvckVhY2goZXZlbnQgPT4gbGlzdGVuZXJUYXJnZXRcbiAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGhhbmRsZXIsIHRoaXMuc3VwcG9ydFBhc3NpdmUoKSA/IHsgcGFzc2l2ZTogdHJ1ZSB9IDogZmFsc2UpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGZWF0dXJlLWRldGVjdCBzdXBwb3J0IGZvciBwYXNzaXZlIGV2ZW50IGxpc3RlbmVycy5cbiAgICpcbiAgICogQHJldHVybnMgICAgICAgV2hldGhlciBvciBub3QgcGFzc2l2ZSBldmVudCBsaXN0ZW5lcnMgYXJlIHN1cHBvcnRlZFxuICAgKi9cbiAgcHJpdmF0ZSBzdXBwb3J0UGFzc2l2ZSgpOiBib29sZWFuIHtcblxuICAgIGxldCBzdXBwb3J0c1Bhc3NpdmUgPSBmYWxzZTtcblxuICAgIHRyeSB7XG4gICAgICBjb25zdCBvcHRzID0gT2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCAncGFzc2l2ZScsIHtcbiAgICAgICAgZ2V0OiAoKSA9PiB7XG4gICAgICAgICAgc3VwcG9ydHNQYXNzaXZlID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndGVzdFBhc3NpdmUnLCBudWxsLCBvcHRzKTtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCd0ZXN0UGFzc2l2ZScsIG51bGwsIG9wdHMpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICB9XG5cbiAgICByZXR1cm4gc3VwcG9ydHNQYXNzaXZlO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSBsaXN0ZW5lcnMgZm9yIHRoZSBBbmltYXRpb24gSW50ZXJydXB0IEV2ZW50IGZyb21cbiAgICogdGhlIExpc3RlbmVyIFRhcmdldC4gU3BlY2lmeWluZyB0aGUgY29ycmVjdCBoYW5kbGVyIHByZXZlbnRzXG4gICAqIG1lbW9yeSBsZWFrcyBhbmQgbWFrZXMgdGhlIGFsbG9jYXRlZCBtZW1vcnkgYXZhaWxhYmxlIGZvclxuICAgKiBHYXJiYWdlIENvbGxlY3Rpb24uXG4gICAqXG4gICAqIEBwYXJhbSBldmVudHMgICAgICAgICAgICBMaXN0IG9mIEludGVycnVwdGl2ZSBFdmVudHMgdG8gcmVtb3ZlXG4gICAqIEBwYXJhbSBsaXN0ZW5lclRhcmdldCAgICBUYXJnZXQgdG8gYXR0YWNoIHRoZSBsaXN0ZW5lciBvblxuICAgKiBAcGFyYW0gaGFuZGxlciAgICAgICAgICAgSGFuZGxlciBmb3Igd2hlbiB0aGUgbGlzdGVuZXIgZmlyZXNcbiAgICogQHJldHVybnMgICAgICAgICAgICAgICAgIFZvaWRcbiAgICovXG4gIHByaXZhdGUgcmVtb3ZlSW50ZXJydXB0aXZlRXZlbnRMaXN0ZW5lcnMoXG4gICAgZXZlbnRzOiBzdHJpbmdbXSxcbiAgICBsaXN0ZW5lclRhcmdldDogU2Nyb2xsVG9MaXN0ZW5lclRhcmdldCxcbiAgICBoYW5kbGVyOiBFdmVudExpc3RlbmVyT3JFdmVudExpc3RlbmVyT2JqZWN0KTogdm9pZCB7XG5cbiAgICBpZiAoIWxpc3RlbmVyVGFyZ2V0KSB7XG4gICAgICBsaXN0ZW5lclRhcmdldCA9IHdpbmRvdztcbiAgICB9XG4gICAgZXZlbnRzLmZvckVhY2goZXZlbnQgPT4gbGlzdGVuZXJUYXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudCwgaGFuZGxlcikpO1xuICB9XG5cbiAgLyoqXG4gICAqIEZpbmQgdGhlIGZpcnN0IHNjcm9sbGFibGUgcGFyZW50IE5vZGUgb2YgYSBnaXZlblxuICAgKiBFbGVtZW50LiBUaGUgRE9NIFRyZWUgZ2V0cyBzZWFyY2hlZCB1cHdhcmRzXG4gICAqIHRvIGZpbmQgdGhpcyBmaXJzdCBzY3JvbGxhYmxlIHBhcmVudC4gUGFyZW50cyBtaWdodFxuICAgKiBiZSBpZ25vcmVkIGJ5IENTUyBzdHlsZXMgYXBwbGllZCB0byB0aGUgSFRNTCBFbGVtZW50LlxuICAgKlxuICAgKiBAcGFyYW0gbmF0aXZlRWxlbWVudCAgICAgVGhlIEVsZW1lbnQgdG8gc2VhcmNoIHRoZSBET00gVHJlZSB1cHdhcmRzIGZyb21cbiAgICogQHJldHVybnMgICAgICAgICAgICAgICAgIFRoZSBmaXJzdCBzY3JvbGxhYmxlIHBhcmVudCBIVE1MIEVsZW1lbnRcbiAgICovXG4gIHByaXZhdGUgZ2V0Rmlyc3RTY3JvbGxhYmxlUGFyZW50KG5hdGl2ZUVsZW1lbnQ6IEhUTUxFbGVtZW50KTogSFRNTEVsZW1lbnQge1xuXG4gICAgbGV0IHN0eWxlOiBDU1NTdHlsZURlY2xhcmF0aW9uID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUobmF0aXZlRWxlbWVudCk7XG5cbiAgICBjb25zdCBvdmVyZmxvd1JlZ2V4OiBSZWdFeHAgPSAvKGF1dG98c2Nyb2xsfG92ZXJsYXkpLztcblxuICAgIGlmIChzdHlsZS5wb3NpdGlvbiA9PT0gJ2ZpeGVkJykge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgbGV0IHBhcmVudCA9IG5hdGl2ZUVsZW1lbnQ7XG4gICAgd2hpbGUgKHBhcmVudC5wYXJlbnRFbGVtZW50KSB7XG4gICAgICBwYXJlbnQgPSBwYXJlbnQucGFyZW50RWxlbWVudDtcbiAgICAgIHN0eWxlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUocGFyZW50KTtcblxuICAgICAgaWYgKHN0eWxlLnBvc2l0aW9uID09PSAnYWJzb2x1dGUnXG4gICAgICAgIHx8IHN0eWxlLm92ZXJmbG93ID09PSAnaGlkZGVuJ1xuICAgICAgICB8fCBzdHlsZS5vdmVyZmxvd1kgPT09ICdoaWRkZW4nKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAob3ZlcmZsb3dSZWdleC50ZXN0KHN0eWxlLm92ZXJmbG93ICsgc3R5bGUub3ZlcmZsb3dZKVxuICAgICAgICB8fCBwYXJlbnQudGFnTmFtZSA9PT0gJ0JPRFknKSB7XG4gICAgICAgIHJldHVybiBwYXJlbnQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBUYXJnZXQgTm9kZSB0byBzY3JvbGwgdG8uXG4gICAqXG4gICAqIEBwYXJhbSBpZCAgICAgICAgICAgICAgVGhlIGdpdmVuIElEIG9mIHRoZSBub2RlLCBlaXRoZXIgYSBzdHJpbmcgb3JcbiAgICogICAgICAgICAgICAgICAgICAgICAgICBhbiBlbGVtZW50IHJlZmVyZW5jZVxuICAgKiBAcGFyYW0gYWxsb3dCb2R5VGFnICAgIEluZGljYXRlIHdoZXRoZXIgb3Igbm90IHRoZSBEb2N1bWVudCBCb2R5IGlzXG4gICAqICAgICAgICAgICAgICAgICAgICAgICAgY29uc2lkZXJlZCBhIHZhbGlkIFRhcmdldCBOb2RlXG4gICAqIEByZXR1cm5zICAgICAgICAgICAgICAgVGhlIFRhcmdldCBOb2RlIHRvIHNjcm9sbCB0b1xuICAgKi9cbiAgcHJpdmF0ZSBnZXROb2RlKGlkOiBTY3JvbGxUb1RhcmdldCwgYWxsb3dCb2R5VGFnOiBib29sZWFuID0gZmFsc2UpOiBIVE1MRWxlbWVudCB7XG5cbiAgICBsZXQgdGFyZ2V0Tm9kZTogSFRNTEVsZW1lbnQ7XG5cbiAgICBpZiAoaXNTdHJpbmcoaWQpKSB7XG4gICAgICBpZiAoYWxsb3dCb2R5VGFnICYmIChpZCA9PT0gJ2JvZHknIHx8IGlkID09PSAnQk9EWScpKSB7XG4gICAgICAgIHRhcmdldE5vZGUgPSB0aGlzLmRvY3VtZW50LmJvZHk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0YXJnZXROb2RlID0gdGhpcy5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChzdHJpcEhhc2goaWQpKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGlzTnVtYmVyKGlkKSkge1xuICAgICAgdGFyZ2V0Tm9kZSA9IHRoaXMuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoU3RyaW5nKGlkKSk7XG4gICAgfSBlbHNlIGlmIChpc0VsZW1lbnRSZWYoaWQpKSB7XG4gICAgICB0YXJnZXROb2RlID0gaWQubmF0aXZlRWxlbWVudDtcbiAgICB9IGVsc2UgaWYgKGlzTmF0aXZlRWxlbWVudChpZCkpIHtcbiAgICAgIHRhcmdldE5vZGUgPSBpZDtcbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0Tm9kZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXRyaWV2ZSB0aGUgTGlzdGVuZXIgdGFyZ2V0LiBUaGlzIExpc3RlbmVyIFRhcmdldCBpcyB1c2VkXG4gICAqIHRvIGF0dGFjaCBFdmVudCBMaXN0ZW5lcnMgb24uIEluIGNhc2Ugb2YgdGhlIHRhcmdldCBiZWluZ1xuICAgKiB0aGUgRG9jdW1lbnQgQm9keSwgd2UgbmVlZCB0aGUgYWN0dWFsIGB3aW5kb3dgIHRvIGxpc3RlblxuICAgKiBmb3IgZXZlbnRzLlxuICAgKlxuICAgKiBAcGFyYW0gY29udGFpbmVyICAgICAgICAgICBUaGUgSFRNTCBDb250YWluZXIgZWxlbWVudFxuICAgKiBAcmV0dXJucyAgICAgICAgICAgICAgICAgICBUaGUgTGlzdGVuZXIgVGFyZ2V0IHRvIGF0dGFjaCBldmVudHMgb25cbiAgICovXG4gIHByaXZhdGUgZ2V0TGlzdGVuZXJUYXJnZXQoY29udGFpbmVyOiBIVE1MRWxlbWVudCk6IFNjcm9sbFRvTGlzdGVuZXJUYXJnZXQge1xuICAgIGlmICghY29udGFpbmVyKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuaXNEb2N1bWVudEJvZHkoY29udGFpbmVyKSA/IHdpbmRvdyA6IGNvbnRhaW5lcjtcbiAgfVxuXG4gIC8qKlxuICAgKiBUZXN0IGlmIGEgZ2l2ZW4gSFRNTCBFbGVtZW50IGlzIHRoZSBEb2N1bWVudCBCb2R5LlxuICAgKlxuICAgKiBAcGFyYW0gZWxlbWVudCAgICAgICAgICAgICBUaGUgZ2l2ZW4gSFRNTCBFbGVtZW50XG4gICAqIEByZXR1cm5zICAgICAgICAgICAgICAgICAgIFdoZXRoZXIgb3Igbm90IHRoZSBFbGVtZW50IGlzIHRoZVxuICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICBEb2N1bWVudCBCb2R5IEVsZW1lbnRcbiAgICovXG4gIHByaXZhdGUgaXNEb2N1bWVudEJvZHkoZWxlbWVudDogSFRNTEVsZW1lbnQpOiBlbGVtZW50IGlzIEhUTUxCb2R5RWxlbWVudCB7XG4gICAgcmV0dXJuIGVsZW1lbnQudGFnTmFtZS50b1VwcGVyQ2FzZSgpID09PSAnQk9EWSc7XG4gIH1cbn0iXX0=