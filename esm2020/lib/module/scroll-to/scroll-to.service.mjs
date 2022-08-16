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
ScrollToService.ɵfac = function ScrollToService_Factory(t) { return new (t || ScrollToService)(i0.ɵɵinject(DOCUMENT), i0.ɵɵinject(PLATFORM_ID)); };
ScrollToService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: ScrollToService, factory: ScrollToService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ScrollToService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [DOCUMENT]
            }] }, { type: undefined, decorators: [{
                type: Inject,
                args: [PLATFORM_ID]
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Nyb2xsLXRvLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9vbmJvYXJkaW5nL3NyYy9saWIvbW9kdWxlL3Njcm9sbC10by9zY3JvbGwtdG8uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDaEUsT0FBTyxFQUFFLFFBQVEsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRzlELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzFELE9BQU8sRUFBRSxRQUFRLEVBQUUsWUFBWSxFQUFFLGVBQWUsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN2SCxPQUFPLEVBQWMsYUFBYSxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7QUFFN0Q7Ozs7OztHQU1HO0FBSUgsTUFBTSxPQUFPLGVBQWU7SUFpQjFCOzs7OztPQUtHO0lBQ0gsWUFDNEIsUUFBYSxFQUNWLFVBQWU7UUFEbEIsYUFBUSxHQUFSLFFBQVEsQ0FBSztRQUNWLGVBQVUsR0FBVixVQUFVLENBQUs7UUFFNUMsSUFBSSxDQUFDLGtCQUFrQixHQUFHLENBQUMsWUFBWSxFQUFFLGdCQUFnQixFQUFFLFlBQVksQ0FBQyxDQUFDO0lBQzNFLENBQUM7SUFFRDs7Ozs7Ozs7Ozs7T0FXRztJQUNILFFBQVEsQ0FBQyxPQUE4QjtRQUVyQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFO1lBQ3ZDLE9BQU8sSUFBSSxhQUFhLEVBQUUsQ0FBQyxZQUFZLEVBQUUsQ0FBQztTQUMzQztRQUVELE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUM3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Y0FIM0IsVUFBVTtlQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COztzQkF5QkksTUFBTTt1QkFBQyxRQUFROztzQkFDZixNQUFNO3VCQUFDLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUsIFBMQVRGT1JNX0lEIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBET0NVTUVOVCwgaXNQbGF0Zm9ybUJyb3dzZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBTY3JvbGxUb0NvbmZpZ09wdGlvbnMsIFNjcm9sbFRvQ29uZmlnT3B0aW9uc1RhcmdldCwgU2Nyb2xsVG9MaXN0ZW5lclRhcmdldCwgU2Nyb2xsVG9UYXJnZXQgfSBmcm9tICcuL3Njcm9sbC10by1jb25maWcuaW50ZXJmYWNlJztcbmltcG9ydCB7IFNjcm9sbFRvQW5pbWF0aW9uIH0gZnJvbSAnLi9zY3JvbGwtdG8tYW5pbWF0aW9uJztcbmltcG9ydCB7IERFRkFVTFRTLCBpc0VsZW1lbnRSZWYsIGlzTmF0aXZlRWxlbWVudCwgaXNOdW1iZXIsIGlzU3RyaW5nLCBpc1dpbmRvdywgc3RyaXBIYXNoIH0gZnJvbSAnLi9zY3JvbGwtdG8taGVscGVycyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBSZXBsYXlTdWJqZWN0LCB0aHJvd0Vycm9yIH0gZnJvbSAncnhqcyc7XG5cbi8qKlxuICogVGhlIFNjcm9sbCBUbyBTZXJ2aWNlIGhhbmRsZXMgc3RhcnRpbmcsIGludGVycnVwdGluZ1xuICogYW5kIGVuZGluZyB0aGUgYWN0dWFsIFNjcm9sbCBBbmltYXRpb24uIEl0IHByb3ZpZGVzXG4gKiBzb21lIHV0aWxpdGllcyB0byBmaW5kIHRoZSBwcm9wZXIgSFRNTCBFbGVtZW50IG9uIGFcbiAqIGdpdmVuIHBhZ2UgdG8gc2V0dXAgRXZlbnQgTGlzdGVuZXJzIGFuZCBjYWxjdWxhdGVcbiAqIGRpc3RhbmNlcyBmb3IgdGhlIEFuaW1hdGlvbi5cbiAqL1xuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgU2Nyb2xsVG9TZXJ2aWNlIHtcblxuICAvKipcbiAgICogVGhlIGFuaW1hdGlvbiB0aGF0IHByb3ZpZGVzIHRoZSBzY3JvbGxpbmdcbiAgICogdG8gaGFwcGVuIHNtb290aGx5IG92ZXIgdGltZS4gRGVmaW5pbmcgaXQgaGVyZVxuICAgKiBhbGxvd3MgZm9yIHVzYWdlIG9mIGUuZy4gYHN0YXJ0YCBhbmQgYHN0b3BgXG4gICAqIG1ldGhvZHMgd2l0aGluIHRoaXMgQW5ndWxhciBTZXJ2aWNlLlxuICAgKi9cbiAgcHVibGljIGFuaW1hdGlvbjogU2Nyb2xsVG9BbmltYXRpb247XG5cbiAgLyoqXG4gICAqIEludGVycnVwdGl2ZSBFdmVudHMgYWxsb3cgdG8gc2Nyb2xsaW5nIGFuaW1hdGlvblxuICAgKiB0byBiZSBpbnRlcnJ1cHRlZCBiZWZvcmUgaXQgaXMgZmluaXNoZWQuIFRoZSBsaXN0XG4gICAqIG9mIEludGVycnVwdGl2ZSBFdmVudHMgcmVwcmVzZW50cyB0aG9zZS5cbiAgICovXG4gIHB1YmxpYyBpbnRlcnJ1cHRpdmVFdmVudHM6IHN0cmluZ1tdO1xuXG4gIC8qKlxuICAgKiBDb25zdHJ1Y3QgYW5kIHNldHVwIHJlcXVpcmVkIHBhcmF0ZW1ldGVycy5cbiAgICpcbiAgICogQHBhcmFtIGRvY3VtZW50ICAgICAgICAgQSBSZWZlcmVuY2UgdG8gdGhlIERvY3VtZW50XG4gICAqIEBwYXJhbSBwbGF0Zm9ybUlkICAgICAgIEFuZ3VsYXIgUGxhdGZvcm0gSURcbiAgICovXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgZG9jdW1lbnQ6IGFueSxcbiAgICBASW5qZWN0KFBMQVRGT1JNX0lEKSBwcml2YXRlIHBsYXRmb3JtSWQ6IGFueVxuICApIHtcbiAgICB0aGlzLmludGVycnVwdGl2ZUV2ZW50cyA9IFsnbW91c2V3aGVlbCcsICdET01Nb3VzZVNjcm9sbCcsICd0b3VjaHN0YXJ0J107XG4gIH1cblxuICAvKipcbiAgICogVGFyZ2V0IGFuIEVsZW1lbnQgdG8gc2Nyb2xsIHRvLiBOb3RpY2UgdGhhdCB0aGUgYFRpbWVPdXRgIGRlY29yYXRvclxuICAgKiBlbnN1cmVzIHRoZSBleGVjdXRpbmcgdG8gdGFrZSBwbGFjZSBpbiB0aGUgbmV4dCBBbmd1bGFyIGxpZmVjeWNsZS5cbiAgICogVGhpcyBhbGxvd3MgZm9yIHNjcm9sbGluZyB0byBlbGVtZW50cyB0aGF0IGFyZSBlLmcuIGluaXRpYWxseSBoaWRkZW5cbiAgICogYnkgbWVhbnMgb2YgYCpuZ0lmYCwgYnV0IG91Z2h0IHRvIGJlIHNjcm9sbGVkIHRvIGV2ZW50dWFsbHkuXG4gICAqXG4gICAqIEB0b2RvIHR5cGUgJ2FueScgaW4gT2JzZXJ2YWJsZSBzaG91bGQgYmVjb21lIGN1c3RvbSB0eXBlIGxpa2UgJ1Njcm9sbFRvRXZlbnQnIChiYXNlIGNsYXNzKSwgc2VlIGlzc3VlIGNvbW1lbnQ6XG4gICAqICAtIGh0dHBzOi8vZ2l0aHViLmNvbS9uaWNreS1sZW5hZXJzL25neC1zY3JvbGwtdG8vaXNzdWVzLzEwI2lzc3VlY29tbWVudC0zMTcxOTg0ODFcbiAgICpcbiAgICogQHBhcmFtIG9wdGlvbnMgICAgICAgICBDb25maWd1cmF0aW9uIE9iamVjdFxuICAgKiBAcmV0dXJucyAgICAgICAgICAgICAgIE9ic2VydmFibGVcbiAgICovXG4gIHNjcm9sbFRvKG9wdGlvbnM6IFNjcm9sbFRvQ29uZmlnT3B0aW9ucyk6IE9ic2VydmFibGU8YW55PiB7XG5cbiAgICBpZiAoIWlzUGxhdGZvcm1Ccm93c2VyKHRoaXMucGxhdGZvcm1JZCkpIHtcbiAgICAgIHJldHVybiBuZXcgUmVwbGF5U3ViamVjdCgpLmFzT2JzZXJ2YWJsZSgpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLnN0YXJ0KG9wdGlvbnMpO1xuICB9XG5cbiAgLyoqXG4gICAqIFN0YXJ0IGEgbmV3IEFuaW1hdGlvbi5cbiAgICpcbiAgICogQHRvZG8gRW1pdCBwcm9wZXIgZXZlbnRzIGZyb20gc3Vic2NyaXB0aW9uXG4gICAqXG4gICAqIEBwYXJhbSBvcHRpb25zICAgICAgICAgQ29uZmlndXJhdGlvbiBPYmplY3RcbiAgICogQHJldHVybnMgICAgICAgICAgICAgICBPYnNlcnZhYmxlXG4gICAqL1xuICBwdWJsaWMgc3RhcnQob3B0aW9uczogU2Nyb2xsVG9Db25maWdPcHRpb25zKTogT2JzZXJ2YWJsZTxudW1iZXI+IHtcblxuICAgIC8vIE1lcmdlIGNvbmZpZyB3aXRoIGRlZmF1bHQgdmFsdWVzXG4gICAgY29uc3QgbWVyZ2VkQ29uZmlnT3B0aW9ucyA9IHtcbiAgICAgIC4uLkRFRkFVTFRTIGFzIFNjcm9sbFRvQ29uZmlnT3B0aW9ucyxcbiAgICAgIC4uLm9wdGlvbnNcbiAgICB9IGFzIFNjcm9sbFRvQ29uZmlnT3B0aW9uc1RhcmdldDtcblxuICAgIGlmICh0aGlzLmFuaW1hdGlvbikge1xuICAgICAgdGhpcy5hbmltYXRpb24uc3RvcCgpO1xuICAgIH1cblxuICAgIGNvbnN0IHRhcmdldE5vZGUgPSB0aGlzLmdldE5vZGUobWVyZ2VkQ29uZmlnT3B0aW9ucy50YXJnZXQpO1xuICAgIGlmIChtZXJnZWRDb25maWdPcHRpb25zLnRhcmdldCAmJiAhdGFyZ2V0Tm9kZSkge1xuICAgICAgcmV0dXJuIHRocm93RXJyb3IoJ1VuYWJsZSB0byBmaW5kIFRhcmdldCBFbGVtZW50Jyk7XG4gICAgfVxuXG4gICAgY29uc3QgY29udGFpbmVyOiBIVE1MRWxlbWVudCA9IHRoaXMuZ2V0Q29udGFpbmVyKG1lcmdlZENvbmZpZ09wdGlvbnMsIHRhcmdldE5vZGUpO1xuICAgIGlmIChtZXJnZWRDb25maWdPcHRpb25zLmNvbnRhaW5lciAmJiAhY29udGFpbmVyKSB7XG4gICAgICByZXR1cm4gdGhyb3dFcnJvcignVW5hYmxlIHRvIGZpbmQgQ29udGFpbmVyIEVsZW1lbnQnKTtcbiAgICB9XG5cbiAgICBjb25zdCBsaXN0ZW5lclRhcmdldCA9IHRoaXMuZ2V0TGlzdGVuZXJUYXJnZXQoY29udGFpbmVyKSB8fCB3aW5kb3c7XG5cbiAgICBsZXQgdG8gPSBjb250YWluZXIgPyBjb250YWluZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wIDogMDtcblxuICAgIGlmICh0YXJnZXROb2RlKSB7XG4gICAgICB0byA9IGlzV2luZG93KGxpc3RlbmVyVGFyZ2V0KSA/XG4gICAgICAgIHdpbmRvdy5zY3JvbGxZICsgdGFyZ2V0Tm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgOlxuICAgICAgICB0YXJnZXROb2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcDtcbiAgICB9XG5cbiAgICAvLyBDcmVhdGUgQW5pbWF0aW9uXG4gICAgdGhpcy5hbmltYXRpb24gPSBuZXcgU2Nyb2xsVG9BbmltYXRpb24oXG4gICAgICBjb250YWluZXIsXG4gICAgICBsaXN0ZW5lclRhcmdldCxcbiAgICAgIGlzV2luZG93KGxpc3RlbmVyVGFyZ2V0KSxcbiAgICAgIHRvLFxuICAgICAgbWVyZ2VkQ29uZmlnT3B0aW9ucyxcbiAgICAgIGlzUGxhdGZvcm1Ccm93c2VyKHRoaXMucGxhdGZvcm1JZClcbiAgICApO1xuICAgIGNvbnN0IG9uSW50ZXJydXB0ID0gKCkgPT4gdGhpcy5hbmltYXRpb24uc3RvcCgpO1xuICAgIHRoaXMuYWRkSW50ZXJydXB0aXZlRXZlbnRMaXN0ZW5lcnMobGlzdGVuZXJUYXJnZXQsIG9uSW50ZXJydXB0KTtcblxuICAgIC8vIFN0YXJ0IEFuaW1hdGlvblxuICAgIGNvbnN0IGFuaW1hdGlvbiQgPSB0aGlzLmFuaW1hdGlvbi5zdGFydCgpO1xuICAgIHRoaXMuc3Vic2NyaWJlVG9BbmltYXRpb24oYW5pbWF0aW9uJCwgbGlzdGVuZXJUYXJnZXQsIG9uSW50ZXJydXB0KTtcblxuICAgIHJldHVybiBhbmltYXRpb24kO1xuICB9XG5cbiAgLyoqXG4gICAqIFN1YnNjcmliZSB0byB0aGUgZXZlbnRzIGVtaXR0ZWQgZnJvbSB0aGUgU2Nyb2xsaW5nXG4gICAqIEFuaW1hdGlvbi4gRXZlbnRzIG1pZ2h0IGJlIHVzZWQgZm9yIGUuZy4gdW5zdWJzY3JpYmluZ1xuICAgKiBvbmNlIGZpbmlzaGVkLlxuICAgKlxuICAgKiBAcGFyYW0gYW5pbWF0aW9uJCAgICAgICAgICAgICAgVGhlIEFuaW1hdGlvbiBPYnNlcnZhYmxlXG4gICAqIEBwYXJhbSBsaXN0ZW5lclRhcmdldCAgICAgICAgICBUaGUgTGlzdGVuZXIgVGFyZ2V0IGZvciBldmVudHNcbiAgICogQHBhcmFtIG9uSW50ZXJydXB0ICAgICAgICAgICAgIFRoZSBoYW5kbGVyIGZvciBJbnRlcnJ1cHRpdmUgRXZlbnRzXG4gICAqIEByZXR1cm5zICAgICAgICAgICAgICAgICAgICAgICBWb2lkXG4gICAqL1xuICBwdWJsaWMgc3Vic2NyaWJlVG9BbmltYXRpb24oXG4gICAgYW5pbWF0aW9uJDogT2JzZXJ2YWJsZTxhbnk+LFxuICAgIGxpc3RlbmVyVGFyZ2V0OiBTY3JvbGxUb0xpc3RlbmVyVGFyZ2V0LFxuICAgIG9uSW50ZXJydXB0OiBFdmVudExpc3RlbmVyT3JFdmVudExpc3RlbmVyT2JqZWN0XG4gICkge1xuICAgIGNvbnN0IHN1YnNjcmlwdGlvbiA9IGFuaW1hdGlvbiRcbiAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICgpID0+IHtcbiAgICAgICAgfSxcbiAgICAgICAgKCkgPT4ge1xuICAgICAgICB9LFxuICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgdGhpcy5yZW1vdmVJbnRlcnJ1cHRpdmVFdmVudExpc3RlbmVycyh0aGlzLmludGVycnVwdGl2ZUV2ZW50cywgbGlzdGVuZXJUYXJnZXQsIG9uSW50ZXJydXB0KTtcbiAgICAgICAgICBzdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgICAgfVxuICAgICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIGNvbnRhaW5lciBIVE1MIEVsZW1lbnQgaW4gd2hpY2hcbiAgICogdGhlIHNjcm9sbGluZyBzaG91bGQgaGFwcGVuLlxuICAgKlxuICAgKiBAcGFyYW0gb3B0aW9ucyAgICAgICAgIFRoZSBNZXJnZWQgQ29uZmlndXJhdGlvbiBPYmplY3RcbiAgICogQHBhcmFtIHRhcmdldE5vZGUgICAgdGhlIHRhcmdldGVkIEhUTUxFbGVtZW50XG4gICAqL1xuICBwcml2YXRlIGdldENvbnRhaW5lcihvcHRpb25zOiBTY3JvbGxUb0NvbmZpZ09wdGlvbnMsIHRhcmdldE5vZGU6IEhUTUxFbGVtZW50KTogSFRNTEVsZW1lbnQgfCBudWxsIHtcblxuICAgIGxldCBjb250YWluZXI6IEhUTUxFbGVtZW50IHwgbnVsbCA9IG51bGw7XG5cbiAgICBpZiAob3B0aW9ucy5jb250YWluZXIpIHtcbiAgICAgIGNvbnRhaW5lciA9IHRoaXMuZ2V0Tm9kZShvcHRpb25zLmNvbnRhaW5lciwgdHJ1ZSk7XG4gICAgfSBlbHNlIGlmICh0YXJnZXROb2RlKSB7XG4gICAgICBjb250YWluZXIgPSB0aGlzLmdldEZpcnN0U2Nyb2xsYWJsZVBhcmVudCh0YXJnZXROb2RlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29udGFpbmVyO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZCBsaXN0ZW5lcnMgZm9yIHRoZSBBbmltYXRpb24gSW50ZXJydXB0aXZlIEV2ZW50c1xuICAgKiB0byB0aGUgTGlzdGVuZXIgVGFyZ2V0LlxuICAgKlxuICAgKiBAcGFyYW0gZXZlbnRzICAgICAgICAgICAgTGlzdCBvZiBldmVudHMgdG8gbGlzdGVuIHRvXG4gICAqIEBwYXJhbSBsaXN0ZW5lclRhcmdldCAgICBUYXJnZXQgdG8gYXR0YWNoIHRoZSBsaXN0ZW5lciBvblxuICAgKiBAcGFyYW0gaGFuZGxlciAgICAgICAgICAgSGFuZGxlciBmb3Igd2hlbiB0aGUgbGlzdGVuZXIgZmlyZXNcbiAgICogQHJldHVybnMgICAgICAgICAgICAgICAgIFZvaWRcbiAgICovXG4gIHByaXZhdGUgYWRkSW50ZXJydXB0aXZlRXZlbnRMaXN0ZW5lcnMoXG4gICAgbGlzdGVuZXJUYXJnZXQ6IFNjcm9sbFRvTGlzdGVuZXJUYXJnZXQsXG4gICAgaGFuZGxlcjogRXZlbnRMaXN0ZW5lck9yRXZlbnRMaXN0ZW5lck9iamVjdCk6IHZvaWQge1xuXG4gICAgaWYgKCFsaXN0ZW5lclRhcmdldCkge1xuICAgICAgbGlzdGVuZXJUYXJnZXQgPSB3aW5kb3c7XG4gICAgfVxuXG4gICAgdGhpcy5pbnRlcnJ1cHRpdmVFdmVudHNcbiAgICAgIC5mb3JFYWNoKGV2ZW50ID0+IGxpc3RlbmVyVGFyZ2V0XG4gICAgICAgIC5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBoYW5kbGVyLCB0aGlzLnN1cHBvcnRQYXNzaXZlKCkgPyB7IHBhc3NpdmU6IHRydWUgfSA6IGZhbHNlKSk7XG4gIH1cblxuICAvKipcbiAgICogRmVhdHVyZS1kZXRlY3Qgc3VwcG9ydCBmb3IgcGFzc2l2ZSBldmVudCBsaXN0ZW5lcnMuXG4gICAqXG4gICAqIEByZXR1cm5zICAgICAgIFdoZXRoZXIgb3Igbm90IHBhc3NpdmUgZXZlbnQgbGlzdGVuZXJzIGFyZSBzdXBwb3J0ZWRcbiAgICovXG4gIHByaXZhdGUgc3VwcG9ydFBhc3NpdmUoKTogYm9vbGVhbiB7XG5cbiAgICBsZXQgc3VwcG9ydHNQYXNzaXZlID0gZmFsc2U7XG5cbiAgICB0cnkge1xuICAgICAgY29uc3Qgb3B0cyA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7fSwgJ3Bhc3NpdmUnLCB7XG4gICAgICAgIGdldDogKCkgPT4ge1xuICAgICAgICAgIHN1cHBvcnRzUGFzc2l2ZSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Rlc3RQYXNzaXZlJywgbnVsbCwgb3B0cyk7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigndGVzdFBhc3NpdmUnLCBudWxsLCBvcHRzKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1cHBvcnRzUGFzc2l2ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgbGlzdGVuZXJzIGZvciB0aGUgQW5pbWF0aW9uIEludGVycnVwdCBFdmVudCBmcm9tXG4gICAqIHRoZSBMaXN0ZW5lciBUYXJnZXQuIFNwZWNpZnlpbmcgdGhlIGNvcnJlY3QgaGFuZGxlciBwcmV2ZW50c1xuICAgKiBtZW1vcnkgbGVha3MgYW5kIG1ha2VzIHRoZSBhbGxvY2F0ZWQgbWVtb3J5IGF2YWlsYWJsZSBmb3JcbiAgICogR2FyYmFnZSBDb2xsZWN0aW9uLlxuICAgKlxuICAgKiBAcGFyYW0gZXZlbnRzICAgICAgICAgICAgTGlzdCBvZiBJbnRlcnJ1cHRpdmUgRXZlbnRzIHRvIHJlbW92ZVxuICAgKiBAcGFyYW0gbGlzdGVuZXJUYXJnZXQgICAgVGFyZ2V0IHRvIGF0dGFjaCB0aGUgbGlzdGVuZXIgb25cbiAgICogQHBhcmFtIGhhbmRsZXIgICAgICAgICAgIEhhbmRsZXIgZm9yIHdoZW4gdGhlIGxpc3RlbmVyIGZpcmVzXG4gICAqIEByZXR1cm5zICAgICAgICAgICAgICAgICBWb2lkXG4gICAqL1xuICBwcml2YXRlIHJlbW92ZUludGVycnVwdGl2ZUV2ZW50TGlzdGVuZXJzKFxuICAgIGV2ZW50czogc3RyaW5nW10sXG4gICAgbGlzdGVuZXJUYXJnZXQ6IFNjcm9sbFRvTGlzdGVuZXJUYXJnZXQsXG4gICAgaGFuZGxlcjogRXZlbnRMaXN0ZW5lck9yRXZlbnRMaXN0ZW5lck9iamVjdCk6IHZvaWQge1xuXG4gICAgaWYgKCFsaXN0ZW5lclRhcmdldCkge1xuICAgICAgbGlzdGVuZXJUYXJnZXQgPSB3aW5kb3c7XG4gICAgfVxuICAgIGV2ZW50cy5mb3JFYWNoKGV2ZW50ID0+IGxpc3RlbmVyVGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQsIGhhbmRsZXIpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGaW5kIHRoZSBmaXJzdCBzY3JvbGxhYmxlIHBhcmVudCBOb2RlIG9mIGEgZ2l2ZW5cbiAgICogRWxlbWVudC4gVGhlIERPTSBUcmVlIGdldHMgc2VhcmNoZWQgdXB3YXJkc1xuICAgKiB0byBmaW5kIHRoaXMgZmlyc3Qgc2Nyb2xsYWJsZSBwYXJlbnQuIFBhcmVudHMgbWlnaHRcbiAgICogYmUgaWdub3JlZCBieSBDU1Mgc3R5bGVzIGFwcGxpZWQgdG8gdGhlIEhUTUwgRWxlbWVudC5cbiAgICpcbiAgICogQHBhcmFtIG5hdGl2ZUVsZW1lbnQgICAgIFRoZSBFbGVtZW50IHRvIHNlYXJjaCB0aGUgRE9NIFRyZWUgdXB3YXJkcyBmcm9tXG4gICAqIEByZXR1cm5zICAgICAgICAgICAgICAgICBUaGUgZmlyc3Qgc2Nyb2xsYWJsZSBwYXJlbnQgSFRNTCBFbGVtZW50XG4gICAqL1xuICBwcml2YXRlIGdldEZpcnN0U2Nyb2xsYWJsZVBhcmVudChuYXRpdmVFbGVtZW50OiBIVE1MRWxlbWVudCk6IEhUTUxFbGVtZW50IHtcblxuICAgIGxldCBzdHlsZTogQ1NTU3R5bGVEZWNsYXJhdGlvbiA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKG5hdGl2ZUVsZW1lbnQpO1xuXG4gICAgY29uc3Qgb3ZlcmZsb3dSZWdleDogUmVnRXhwID0gLyhhdXRvfHNjcm9sbHxvdmVybGF5KS87XG5cbiAgICBpZiAoc3R5bGUucG9zaXRpb24gPT09ICdmaXhlZCcpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGxldCBwYXJlbnQgPSBuYXRpdmVFbGVtZW50O1xuICAgIHdoaWxlIChwYXJlbnQucGFyZW50RWxlbWVudCkge1xuICAgICAgcGFyZW50ID0gcGFyZW50LnBhcmVudEVsZW1lbnQ7XG4gICAgICBzdHlsZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHBhcmVudCk7XG5cbiAgICAgIGlmIChzdHlsZS5wb3NpdGlvbiA9PT0gJ2Fic29sdXRlJ1xuICAgICAgICB8fCBzdHlsZS5vdmVyZmxvdyA9PT0gJ2hpZGRlbidcbiAgICAgICAgfHwgc3R5bGUub3ZlcmZsb3dZID09PSAnaGlkZGVuJykge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG92ZXJmbG93UmVnZXgudGVzdChzdHlsZS5vdmVyZmxvdyArIHN0eWxlLm92ZXJmbG93WSlcbiAgICAgICAgfHwgcGFyZW50LnRhZ05hbWUgPT09ICdCT0RZJykge1xuICAgICAgICByZXR1cm4gcGFyZW50O1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgVGFyZ2V0IE5vZGUgdG8gc2Nyb2xsIHRvLlxuICAgKlxuICAgKiBAcGFyYW0gaWQgICAgICAgICAgICAgIFRoZSBnaXZlbiBJRCBvZiB0aGUgbm9kZSwgZWl0aGVyIGEgc3RyaW5nIG9yXG4gICAqICAgICAgICAgICAgICAgICAgICAgICAgYW4gZWxlbWVudCByZWZlcmVuY2VcbiAgICogQHBhcmFtIGFsbG93Qm9keVRhZyAgICBJbmRpY2F0ZSB3aGV0aGVyIG9yIG5vdCB0aGUgRG9jdW1lbnQgQm9keSBpc1xuICAgKiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNpZGVyZWQgYSB2YWxpZCBUYXJnZXQgTm9kZVxuICAgKiBAcmV0dXJucyAgICAgICAgICAgICAgIFRoZSBUYXJnZXQgTm9kZSB0byBzY3JvbGwgdG9cbiAgICovXG4gIHByaXZhdGUgZ2V0Tm9kZShpZDogU2Nyb2xsVG9UYXJnZXQsIGFsbG93Qm9keVRhZzogYm9vbGVhbiA9IGZhbHNlKTogSFRNTEVsZW1lbnQge1xuXG4gICAgbGV0IHRhcmdldE5vZGU6IEhUTUxFbGVtZW50O1xuXG4gICAgaWYgKGlzU3RyaW5nKGlkKSkge1xuICAgICAgaWYgKGFsbG93Qm9keVRhZyAmJiAoaWQgPT09ICdib2R5JyB8fCBpZCA9PT0gJ0JPRFknKSkge1xuICAgICAgICB0YXJnZXROb2RlID0gdGhpcy5kb2N1bWVudC5ib2R5O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGFyZ2V0Tm9kZSA9IHRoaXMuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoc3RyaXBIYXNoKGlkKSk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChpc051bWJlcihpZCkpIHtcbiAgICAgIHRhcmdldE5vZGUgPSB0aGlzLmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFN0cmluZyhpZCkpO1xuICAgIH0gZWxzZSBpZiAoaXNFbGVtZW50UmVmKGlkKSkge1xuICAgICAgdGFyZ2V0Tm9kZSA9IGlkLm5hdGl2ZUVsZW1lbnQ7XG4gICAgfSBlbHNlIGlmIChpc05hdGl2ZUVsZW1lbnQoaWQpKSB7XG4gICAgICB0YXJnZXROb2RlID0gaWQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldE5vZGU7XG4gIH1cblxuICAvKipcbiAgICogUmV0cmlldmUgdGhlIExpc3RlbmVyIHRhcmdldC4gVGhpcyBMaXN0ZW5lciBUYXJnZXQgaXMgdXNlZFxuICAgKiB0byBhdHRhY2ggRXZlbnQgTGlzdGVuZXJzIG9uLiBJbiBjYXNlIG9mIHRoZSB0YXJnZXQgYmVpbmdcbiAgICogdGhlIERvY3VtZW50IEJvZHksIHdlIG5lZWQgdGhlIGFjdHVhbCBgd2luZG93YCB0byBsaXN0ZW5cbiAgICogZm9yIGV2ZW50cy5cbiAgICpcbiAgICogQHBhcmFtIGNvbnRhaW5lciAgICAgICAgICAgVGhlIEhUTUwgQ29udGFpbmVyIGVsZW1lbnRcbiAgICogQHJldHVybnMgICAgICAgICAgICAgICAgICAgVGhlIExpc3RlbmVyIFRhcmdldCB0byBhdHRhY2ggZXZlbnRzIG9uXG4gICAqL1xuICBwcml2YXRlIGdldExpc3RlbmVyVGFyZ2V0KGNvbnRhaW5lcjogSFRNTEVsZW1lbnQpOiBTY3JvbGxUb0xpc3RlbmVyVGFyZ2V0IHtcbiAgICBpZiAoIWNvbnRhaW5lcikge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmlzRG9jdW1lbnRCb2R5KGNvbnRhaW5lcikgPyB3aW5kb3cgOiBjb250YWluZXI7XG4gIH1cblxuICAvKipcbiAgICogVGVzdCBpZiBhIGdpdmVuIEhUTUwgRWxlbWVudCBpcyB0aGUgRG9jdW1lbnQgQm9keS5cbiAgICpcbiAgICogQHBhcmFtIGVsZW1lbnQgICAgICAgICAgICAgVGhlIGdpdmVuIEhUTUwgRWxlbWVudFxuICAgKiBAcmV0dXJucyAgICAgICAgICAgICAgICAgICBXaGV0aGVyIG9yIG5vdCB0aGUgRWxlbWVudCBpcyB0aGVcbiAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgRG9jdW1lbnQgQm9keSBFbGVtZW50XG4gICAqL1xuICBwcml2YXRlIGlzRG9jdW1lbnRCb2R5KGVsZW1lbnQ6IEhUTUxFbGVtZW50KTogZWxlbWVudCBpcyBIVE1MQm9keUVsZW1lbnQge1xuICAgIHJldHVybiBlbGVtZW50LnRhZ05hbWUudG9VcHBlckNhc2UoKSA9PT0gJ0JPRFknO1xuICB9XG59Il19