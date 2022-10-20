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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Nyb2xsLXRvLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9vbmJvYXJkaW5nL3NyYy9saWIvbW9kdWxlL3Njcm9sbC10by9zY3JvbGwtdG8uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDaEUsT0FBTyxFQUFFLFFBQVEsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRzlELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzFELE9BQU8sRUFBRSxRQUFRLEVBQUUsWUFBWSxFQUFFLGVBQWUsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN2SCxPQUFPLEVBQWMsYUFBYSxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7QUFFN0Q7Ozs7OztHQU1HO0FBSUgsTUFBTSxPQUFPLGVBQWU7SUFpQjFCOzs7OztPQUtHO0lBQ0gsWUFDNEIsUUFBYSxFQUNWLFVBQWU7UUFEbEIsYUFBUSxHQUFSLFFBQVEsQ0FBSztRQUNWLGVBQVUsR0FBVixVQUFVLENBQUs7UUFFNUMsSUFBSSxDQUFDLGtCQUFrQixHQUFHLENBQUMsWUFBWSxFQUFFLGdCQUFnQixFQUFFLFlBQVksQ0FBQyxDQUFDO0lBQzNFLENBQUM7SUFFRDs7Ozs7Ozs7Ozs7T0FXRztJQUNILFFBQVEsQ0FBQyxPQUE4QjtRQUVyQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFO1lBQ3ZDLE9BQU8sSUFBSSxhQUFhLEVBQUUsQ0FBQyxZQUFZLEVBQUUsQ0FBQztTQUMzQztRQUVELE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUM3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Y0FIM0IsVUFBVTtlQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COztzQkF5QkksTUFBTTt1QkFBQyxRQUFROztzQkFDZixNQUFNO3VCQUFDLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUsIFBMQVRGT1JNX0lEIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IERPQ1VNRU5ULCBpc1BsYXRmb3JtQnJvd3NlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcblxyXG5pbXBvcnQgeyBTY3JvbGxUb0NvbmZpZ09wdGlvbnMsIFNjcm9sbFRvQ29uZmlnT3B0aW9uc1RhcmdldCwgU2Nyb2xsVG9MaXN0ZW5lclRhcmdldCwgU2Nyb2xsVG9UYXJnZXQgfSBmcm9tICcuL3Njcm9sbC10by1jb25maWcuaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgU2Nyb2xsVG9BbmltYXRpb24gfSBmcm9tICcuL3Njcm9sbC10by1hbmltYXRpb24nO1xyXG5pbXBvcnQgeyBERUZBVUxUUywgaXNFbGVtZW50UmVmLCBpc05hdGl2ZUVsZW1lbnQsIGlzTnVtYmVyLCBpc1N0cmluZywgaXNXaW5kb3csIHN0cmlwSGFzaCB9IGZyb20gJy4vc2Nyb2xsLXRvLWhlbHBlcnMnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBSZXBsYXlTdWJqZWN0LCB0aHJvd0Vycm9yIH0gZnJvbSAncnhqcyc7XHJcblxyXG4vKipcclxuICogVGhlIFNjcm9sbCBUbyBTZXJ2aWNlIGhhbmRsZXMgc3RhcnRpbmcsIGludGVycnVwdGluZ1xyXG4gKiBhbmQgZW5kaW5nIHRoZSBhY3R1YWwgU2Nyb2xsIEFuaW1hdGlvbi4gSXQgcHJvdmlkZXNcclxuICogc29tZSB1dGlsaXRpZXMgdG8gZmluZCB0aGUgcHJvcGVyIEhUTUwgRWxlbWVudCBvbiBhXHJcbiAqIGdpdmVuIHBhZ2UgdG8gc2V0dXAgRXZlbnQgTGlzdGVuZXJzIGFuZCBjYWxjdWxhdGVcclxuICogZGlzdGFuY2VzIGZvciB0aGUgQW5pbWF0aW9uLlxyXG4gKi9cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgU2Nyb2xsVG9TZXJ2aWNlIHtcclxuXHJcbiAgLyoqXHJcbiAgICogVGhlIGFuaW1hdGlvbiB0aGF0IHByb3ZpZGVzIHRoZSBzY3JvbGxpbmdcclxuICAgKiB0byBoYXBwZW4gc21vb3RobHkgb3ZlciB0aW1lLiBEZWZpbmluZyBpdCBoZXJlXHJcbiAgICogYWxsb3dzIGZvciB1c2FnZSBvZiBlLmcuIGBzdGFydGAgYW5kIGBzdG9wYFxyXG4gICAqIG1ldGhvZHMgd2l0aGluIHRoaXMgQW5ndWxhciBTZXJ2aWNlLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBhbmltYXRpb246IFNjcm9sbFRvQW5pbWF0aW9uO1xyXG5cclxuICAvKipcclxuICAgKiBJbnRlcnJ1cHRpdmUgRXZlbnRzIGFsbG93IHRvIHNjcm9sbGluZyBhbmltYXRpb25cclxuICAgKiB0byBiZSBpbnRlcnJ1cHRlZCBiZWZvcmUgaXQgaXMgZmluaXNoZWQuIFRoZSBsaXN0XHJcbiAgICogb2YgSW50ZXJydXB0aXZlIEV2ZW50cyByZXByZXNlbnRzIHRob3NlLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBpbnRlcnJ1cHRpdmVFdmVudHM6IHN0cmluZ1tdO1xyXG5cclxuICAvKipcclxuICAgKiBDb25zdHJ1Y3QgYW5kIHNldHVwIHJlcXVpcmVkIHBhcmF0ZW1ldGVycy5cclxuICAgKlxyXG4gICAqIEBwYXJhbSBkb2N1bWVudCAgICAgICAgIEEgUmVmZXJlbmNlIHRvIHRoZSBEb2N1bWVudFxyXG4gICAqIEBwYXJhbSBwbGF0Zm9ybUlkICAgICAgIEFuZ3VsYXIgUGxhdGZvcm0gSURcclxuICAgKi9cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgZG9jdW1lbnQ6IGFueSxcclxuICAgIEBJbmplY3QoUExBVEZPUk1fSUQpIHByaXZhdGUgcGxhdGZvcm1JZDogYW55XHJcbiAgKSB7XHJcbiAgICB0aGlzLmludGVycnVwdGl2ZUV2ZW50cyA9IFsnbW91c2V3aGVlbCcsICdET01Nb3VzZVNjcm9sbCcsICd0b3VjaHN0YXJ0J107XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBUYXJnZXQgYW4gRWxlbWVudCB0byBzY3JvbGwgdG8uIE5vdGljZSB0aGF0IHRoZSBgVGltZU91dGAgZGVjb3JhdG9yXHJcbiAgICogZW5zdXJlcyB0aGUgZXhlY3V0aW5nIHRvIHRha2UgcGxhY2UgaW4gdGhlIG5leHQgQW5ndWxhciBsaWZlY3ljbGUuXHJcbiAgICogVGhpcyBhbGxvd3MgZm9yIHNjcm9sbGluZyB0byBlbGVtZW50cyB0aGF0IGFyZSBlLmcuIGluaXRpYWxseSBoaWRkZW5cclxuICAgKiBieSBtZWFucyBvZiBgKm5nSWZgLCBidXQgb3VnaHQgdG8gYmUgc2Nyb2xsZWQgdG8gZXZlbnR1YWxseS5cclxuICAgKlxyXG4gICAqIEB0b2RvIHR5cGUgJ2FueScgaW4gT2JzZXJ2YWJsZSBzaG91bGQgYmVjb21lIGN1c3RvbSB0eXBlIGxpa2UgJ1Njcm9sbFRvRXZlbnQnIChiYXNlIGNsYXNzKSwgc2VlIGlzc3VlIGNvbW1lbnQ6XHJcbiAgICogIC0gaHR0cHM6Ly9naXRodWIuY29tL25pY2t5LWxlbmFlcnMvbmd4LXNjcm9sbC10by9pc3N1ZXMvMTAjaXNzdWVjb21tZW50LTMxNzE5ODQ4MVxyXG4gICAqXHJcbiAgICogQHBhcmFtIG9wdGlvbnMgICAgICAgICBDb25maWd1cmF0aW9uIE9iamVjdFxyXG4gICAqIEByZXR1cm5zICAgICAgICAgICAgICAgT2JzZXJ2YWJsZVxyXG4gICAqL1xyXG4gIHNjcm9sbFRvKG9wdGlvbnM6IFNjcm9sbFRvQ29uZmlnT3B0aW9ucyk6IE9ic2VydmFibGU8YW55PiB7XHJcblxyXG4gICAgaWYgKCFpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpKSB7XHJcbiAgICAgIHJldHVybiBuZXcgUmVwbGF5U3ViamVjdCgpLmFzT2JzZXJ2YWJsZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aGlzLnN0YXJ0KG9wdGlvbnMpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU3RhcnQgYSBuZXcgQW5pbWF0aW9uLlxyXG4gICAqXHJcbiAgICogQHRvZG8gRW1pdCBwcm9wZXIgZXZlbnRzIGZyb20gc3Vic2NyaXB0aW9uXHJcbiAgICpcclxuICAgKiBAcGFyYW0gb3B0aW9ucyAgICAgICAgIENvbmZpZ3VyYXRpb24gT2JqZWN0XHJcbiAgICogQHJldHVybnMgICAgICAgICAgICAgICBPYnNlcnZhYmxlXHJcbiAgICovXHJcbiAgcHVibGljIHN0YXJ0KG9wdGlvbnM6IFNjcm9sbFRvQ29uZmlnT3B0aW9ucyk6IE9ic2VydmFibGU8bnVtYmVyPiB7XHJcblxyXG4gICAgLy8gTWVyZ2UgY29uZmlnIHdpdGggZGVmYXVsdCB2YWx1ZXNcclxuICAgIGNvbnN0IG1lcmdlZENvbmZpZ09wdGlvbnMgPSB7XHJcbiAgICAgIC4uLkRFRkFVTFRTIGFzIFNjcm9sbFRvQ29uZmlnT3B0aW9ucyxcclxuICAgICAgLi4ub3B0aW9uc1xyXG4gICAgfSBhcyBTY3JvbGxUb0NvbmZpZ09wdGlvbnNUYXJnZXQ7XHJcblxyXG4gICAgaWYgKHRoaXMuYW5pbWF0aW9uKSB7XHJcbiAgICAgIHRoaXMuYW5pbWF0aW9uLnN0b3AoKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB0YXJnZXROb2RlID0gdGhpcy5nZXROb2RlKG1lcmdlZENvbmZpZ09wdGlvbnMudGFyZ2V0KTtcclxuICAgIGlmIChtZXJnZWRDb25maWdPcHRpb25zLnRhcmdldCAmJiAhdGFyZ2V0Tm9kZSkge1xyXG4gICAgICByZXR1cm4gdGhyb3dFcnJvcignVW5hYmxlIHRvIGZpbmQgVGFyZ2V0IEVsZW1lbnQnKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjb250YWluZXI6IEhUTUxFbGVtZW50ID0gdGhpcy5nZXRDb250YWluZXIobWVyZ2VkQ29uZmlnT3B0aW9ucywgdGFyZ2V0Tm9kZSk7XHJcbiAgICBpZiAobWVyZ2VkQ29uZmlnT3B0aW9ucy5jb250YWluZXIgJiYgIWNvbnRhaW5lcikge1xyXG4gICAgICByZXR1cm4gdGhyb3dFcnJvcignVW5hYmxlIHRvIGZpbmQgQ29udGFpbmVyIEVsZW1lbnQnKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBsaXN0ZW5lclRhcmdldCA9IHRoaXMuZ2V0TGlzdGVuZXJUYXJnZXQoY29udGFpbmVyKSB8fCB3aW5kb3c7XHJcblxyXG4gICAgbGV0IHRvID0gY29udGFpbmVyID8gY29udGFpbmVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCA6IDA7XHJcblxyXG4gICAgaWYgKHRhcmdldE5vZGUpIHtcclxuICAgICAgdG8gPSBpc1dpbmRvdyhsaXN0ZW5lclRhcmdldCkgP1xyXG4gICAgICAgIHdpbmRvdy5zY3JvbGxZICsgdGFyZ2V0Tm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgOlxyXG4gICAgICAgIHRhcmdldE5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIENyZWF0ZSBBbmltYXRpb25cclxuICAgIHRoaXMuYW5pbWF0aW9uID0gbmV3IFNjcm9sbFRvQW5pbWF0aW9uKFxyXG4gICAgICBjb250YWluZXIsXHJcbiAgICAgIGxpc3RlbmVyVGFyZ2V0LFxyXG4gICAgICBpc1dpbmRvdyhsaXN0ZW5lclRhcmdldCksXHJcbiAgICAgIHRvLFxyXG4gICAgICBtZXJnZWRDb25maWdPcHRpb25zLFxyXG4gICAgICBpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpXHJcbiAgICApO1xyXG4gICAgY29uc3Qgb25JbnRlcnJ1cHQgPSAoKSA9PiB0aGlzLmFuaW1hdGlvbi5zdG9wKCk7XHJcbiAgICB0aGlzLmFkZEludGVycnVwdGl2ZUV2ZW50TGlzdGVuZXJzKGxpc3RlbmVyVGFyZ2V0LCBvbkludGVycnVwdCk7XHJcblxyXG4gICAgLy8gU3RhcnQgQW5pbWF0aW9uXHJcbiAgICBjb25zdCBhbmltYXRpb24kID0gdGhpcy5hbmltYXRpb24uc3RhcnQoKTtcclxuICAgIHRoaXMuc3Vic2NyaWJlVG9BbmltYXRpb24oYW5pbWF0aW9uJCwgbGlzdGVuZXJUYXJnZXQsIG9uSW50ZXJydXB0KTtcclxuXHJcbiAgICByZXR1cm4gYW5pbWF0aW9uJDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFN1YnNjcmliZSB0byB0aGUgZXZlbnRzIGVtaXR0ZWQgZnJvbSB0aGUgU2Nyb2xsaW5nXHJcbiAgICogQW5pbWF0aW9uLiBFdmVudHMgbWlnaHQgYmUgdXNlZCBmb3IgZS5nLiB1bnN1YnNjcmliaW5nXHJcbiAgICogb25jZSBmaW5pc2hlZC5cclxuICAgKlxyXG4gICAqIEBwYXJhbSBhbmltYXRpb24kICAgICAgICAgICAgICBUaGUgQW5pbWF0aW9uIE9ic2VydmFibGVcclxuICAgKiBAcGFyYW0gbGlzdGVuZXJUYXJnZXQgICAgICAgICAgVGhlIExpc3RlbmVyIFRhcmdldCBmb3IgZXZlbnRzXHJcbiAgICogQHBhcmFtIG9uSW50ZXJydXB0ICAgICAgICAgICAgIFRoZSBoYW5kbGVyIGZvciBJbnRlcnJ1cHRpdmUgRXZlbnRzXHJcbiAgICogQHJldHVybnMgICAgICAgICAgICAgICAgICAgICAgIFZvaWRcclxuICAgKi9cclxuICBwdWJsaWMgc3Vic2NyaWJlVG9BbmltYXRpb24oXHJcbiAgICBhbmltYXRpb24kOiBPYnNlcnZhYmxlPGFueT4sXHJcbiAgICBsaXN0ZW5lclRhcmdldDogU2Nyb2xsVG9MaXN0ZW5lclRhcmdldCxcclxuICAgIG9uSW50ZXJydXB0OiBFdmVudExpc3RlbmVyT3JFdmVudExpc3RlbmVyT2JqZWN0XHJcbiAgKSB7XHJcbiAgICBjb25zdCBzdWJzY3JpcHRpb24gPSBhbmltYXRpb24kXHJcbiAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5yZW1vdmVJbnRlcnJ1cHRpdmVFdmVudExpc3RlbmVycyh0aGlzLmludGVycnVwdGl2ZUV2ZW50cywgbGlzdGVuZXJUYXJnZXQsIG9uSW50ZXJydXB0KTtcclxuICAgICAgICAgIHN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEdldCB0aGUgY29udGFpbmVyIEhUTUwgRWxlbWVudCBpbiB3aGljaFxyXG4gICAqIHRoZSBzY3JvbGxpbmcgc2hvdWxkIGhhcHBlbi5cclxuICAgKlxyXG4gICAqIEBwYXJhbSBvcHRpb25zICAgICAgICAgVGhlIE1lcmdlZCBDb25maWd1cmF0aW9uIE9iamVjdFxyXG4gICAqIEBwYXJhbSB0YXJnZXROb2RlICAgIHRoZSB0YXJnZXRlZCBIVE1MRWxlbWVudFxyXG4gICAqL1xyXG4gIHByaXZhdGUgZ2V0Q29udGFpbmVyKG9wdGlvbnM6IFNjcm9sbFRvQ29uZmlnT3B0aW9ucywgdGFyZ2V0Tm9kZTogSFRNTEVsZW1lbnQpOiBIVE1MRWxlbWVudCB8IG51bGwge1xyXG5cclxuICAgIGxldCBjb250YWluZXI6IEhUTUxFbGVtZW50IHwgbnVsbCA9IG51bGw7XHJcblxyXG4gICAgaWYgKG9wdGlvbnMuY29udGFpbmVyKSB7XHJcbiAgICAgIGNvbnRhaW5lciA9IHRoaXMuZ2V0Tm9kZShvcHRpb25zLmNvbnRhaW5lciwgdHJ1ZSk7XHJcbiAgICB9IGVsc2UgaWYgKHRhcmdldE5vZGUpIHtcclxuICAgICAgY29udGFpbmVyID0gdGhpcy5nZXRGaXJzdFNjcm9sbGFibGVQYXJlbnQodGFyZ2V0Tm9kZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEFkZCBsaXN0ZW5lcnMgZm9yIHRoZSBBbmltYXRpb24gSW50ZXJydXB0aXZlIEV2ZW50c1xyXG4gICAqIHRvIHRoZSBMaXN0ZW5lciBUYXJnZXQuXHJcbiAgICpcclxuICAgKiBAcGFyYW0gZXZlbnRzICAgICAgICAgICAgTGlzdCBvZiBldmVudHMgdG8gbGlzdGVuIHRvXHJcbiAgICogQHBhcmFtIGxpc3RlbmVyVGFyZ2V0ICAgIFRhcmdldCB0byBhdHRhY2ggdGhlIGxpc3RlbmVyIG9uXHJcbiAgICogQHBhcmFtIGhhbmRsZXIgICAgICAgICAgIEhhbmRsZXIgZm9yIHdoZW4gdGhlIGxpc3RlbmVyIGZpcmVzXHJcbiAgICogQHJldHVybnMgICAgICAgICAgICAgICAgIFZvaWRcclxuICAgKi9cclxuICBwcml2YXRlIGFkZEludGVycnVwdGl2ZUV2ZW50TGlzdGVuZXJzKFxyXG4gICAgbGlzdGVuZXJUYXJnZXQ6IFNjcm9sbFRvTGlzdGVuZXJUYXJnZXQsXHJcbiAgICBoYW5kbGVyOiBFdmVudExpc3RlbmVyT3JFdmVudExpc3RlbmVyT2JqZWN0KTogdm9pZCB7XHJcblxyXG4gICAgaWYgKCFsaXN0ZW5lclRhcmdldCkge1xyXG4gICAgICBsaXN0ZW5lclRhcmdldCA9IHdpbmRvdztcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmludGVycnVwdGl2ZUV2ZW50c1xyXG4gICAgICAuZm9yRWFjaChldmVudCA9PiBsaXN0ZW5lclRhcmdldFxyXG4gICAgICAgIC5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBoYW5kbGVyLCB0aGlzLnN1cHBvcnRQYXNzaXZlKCkgPyB7IHBhc3NpdmU6IHRydWUgfSA6IGZhbHNlKSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBGZWF0dXJlLWRldGVjdCBzdXBwb3J0IGZvciBwYXNzaXZlIGV2ZW50IGxpc3RlbmVycy5cclxuICAgKlxyXG4gICAqIEByZXR1cm5zICAgICAgIFdoZXRoZXIgb3Igbm90IHBhc3NpdmUgZXZlbnQgbGlzdGVuZXJzIGFyZSBzdXBwb3J0ZWRcclxuICAgKi9cclxuICBwcml2YXRlIHN1cHBvcnRQYXNzaXZlKCk6IGJvb2xlYW4ge1xyXG5cclxuICAgIGxldCBzdXBwb3J0c1Bhc3NpdmUgPSBmYWxzZTtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBvcHRzID0gT2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCAncGFzc2l2ZScsIHtcclxuICAgICAgICBnZXQ6ICgpID0+IHtcclxuICAgICAgICAgIHN1cHBvcnRzUGFzc2l2ZSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Rlc3RQYXNzaXZlJywgbnVsbCwgb3B0cyk7XHJcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCd0ZXN0UGFzc2l2ZScsIG51bGwsIG9wdHMpO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBzdXBwb3J0c1Bhc3NpdmU7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZW1vdmUgbGlzdGVuZXJzIGZvciB0aGUgQW5pbWF0aW9uIEludGVycnVwdCBFdmVudCBmcm9tXHJcbiAgICogdGhlIExpc3RlbmVyIFRhcmdldC4gU3BlY2lmeWluZyB0aGUgY29ycmVjdCBoYW5kbGVyIHByZXZlbnRzXHJcbiAgICogbWVtb3J5IGxlYWtzIGFuZCBtYWtlcyB0aGUgYWxsb2NhdGVkIG1lbW9yeSBhdmFpbGFibGUgZm9yXHJcbiAgICogR2FyYmFnZSBDb2xsZWN0aW9uLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIGV2ZW50cyAgICAgICAgICAgIExpc3Qgb2YgSW50ZXJydXB0aXZlIEV2ZW50cyB0byByZW1vdmVcclxuICAgKiBAcGFyYW0gbGlzdGVuZXJUYXJnZXQgICAgVGFyZ2V0IHRvIGF0dGFjaCB0aGUgbGlzdGVuZXIgb25cclxuICAgKiBAcGFyYW0gaGFuZGxlciAgICAgICAgICAgSGFuZGxlciBmb3Igd2hlbiB0aGUgbGlzdGVuZXIgZmlyZXNcclxuICAgKiBAcmV0dXJucyAgICAgICAgICAgICAgICAgVm9pZFxyXG4gICAqL1xyXG4gIHByaXZhdGUgcmVtb3ZlSW50ZXJydXB0aXZlRXZlbnRMaXN0ZW5lcnMoXHJcbiAgICBldmVudHM6IHN0cmluZ1tdLFxyXG4gICAgbGlzdGVuZXJUYXJnZXQ6IFNjcm9sbFRvTGlzdGVuZXJUYXJnZXQsXHJcbiAgICBoYW5kbGVyOiBFdmVudExpc3RlbmVyT3JFdmVudExpc3RlbmVyT2JqZWN0KTogdm9pZCB7XHJcblxyXG4gICAgaWYgKCFsaXN0ZW5lclRhcmdldCkge1xyXG4gICAgICBsaXN0ZW5lclRhcmdldCA9IHdpbmRvdztcclxuICAgIH1cclxuICAgIGV2ZW50cy5mb3JFYWNoKGV2ZW50ID0+IGxpc3RlbmVyVGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQsIGhhbmRsZXIpKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEZpbmQgdGhlIGZpcnN0IHNjcm9sbGFibGUgcGFyZW50IE5vZGUgb2YgYSBnaXZlblxyXG4gICAqIEVsZW1lbnQuIFRoZSBET00gVHJlZSBnZXRzIHNlYXJjaGVkIHVwd2FyZHNcclxuICAgKiB0byBmaW5kIHRoaXMgZmlyc3Qgc2Nyb2xsYWJsZSBwYXJlbnQuIFBhcmVudHMgbWlnaHRcclxuICAgKiBiZSBpZ25vcmVkIGJ5IENTUyBzdHlsZXMgYXBwbGllZCB0byB0aGUgSFRNTCBFbGVtZW50LlxyXG4gICAqXHJcbiAgICogQHBhcmFtIG5hdGl2ZUVsZW1lbnQgICAgIFRoZSBFbGVtZW50IHRvIHNlYXJjaCB0aGUgRE9NIFRyZWUgdXB3YXJkcyBmcm9tXHJcbiAgICogQHJldHVybnMgICAgICAgICAgICAgICAgIFRoZSBmaXJzdCBzY3JvbGxhYmxlIHBhcmVudCBIVE1MIEVsZW1lbnRcclxuICAgKi9cclxuICBwcml2YXRlIGdldEZpcnN0U2Nyb2xsYWJsZVBhcmVudChuYXRpdmVFbGVtZW50OiBIVE1MRWxlbWVudCk6IEhUTUxFbGVtZW50IHtcclxuXHJcbiAgICBsZXQgc3R5bGU6IENTU1N0eWxlRGVjbGFyYXRpb24gPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShuYXRpdmVFbGVtZW50KTtcclxuXHJcbiAgICBjb25zdCBvdmVyZmxvd1JlZ2V4OiBSZWdFeHAgPSAvKGF1dG98c2Nyb2xsfG92ZXJsYXkpLztcclxuXHJcbiAgICBpZiAoc3R5bGUucG9zaXRpb24gPT09ICdmaXhlZCcpIHtcclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IHBhcmVudCA9IG5hdGl2ZUVsZW1lbnQ7XHJcbiAgICB3aGlsZSAocGFyZW50LnBhcmVudEVsZW1lbnQpIHtcclxuICAgICAgcGFyZW50ID0gcGFyZW50LnBhcmVudEVsZW1lbnQ7XHJcbiAgICAgIHN0eWxlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUocGFyZW50KTtcclxuXHJcbiAgICAgIGlmIChzdHlsZS5wb3NpdGlvbiA9PT0gJ2Fic29sdXRlJ1xyXG4gICAgICAgIHx8IHN0eWxlLm92ZXJmbG93ID09PSAnaGlkZGVuJ1xyXG4gICAgICAgIHx8IHN0eWxlLm92ZXJmbG93WSA9PT0gJ2hpZGRlbicpIHtcclxuICAgICAgICBjb250aW51ZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKG92ZXJmbG93UmVnZXgudGVzdChzdHlsZS5vdmVyZmxvdyArIHN0eWxlLm92ZXJmbG93WSlcclxuICAgICAgICB8fCBwYXJlbnQudGFnTmFtZSA9PT0gJ0JPRFknKSB7XHJcbiAgICAgICAgcmV0dXJuIHBhcmVudDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogR2V0IHRoZSBUYXJnZXQgTm9kZSB0byBzY3JvbGwgdG8uXHJcbiAgICpcclxuICAgKiBAcGFyYW0gaWQgICAgICAgICAgICAgIFRoZSBnaXZlbiBJRCBvZiB0aGUgbm9kZSwgZWl0aGVyIGEgc3RyaW5nIG9yXHJcbiAgICogICAgICAgICAgICAgICAgICAgICAgICBhbiBlbGVtZW50IHJlZmVyZW5jZVxyXG4gICAqIEBwYXJhbSBhbGxvd0JvZHlUYWcgICAgSW5kaWNhdGUgd2hldGhlciBvciBub3QgdGhlIERvY3VtZW50IEJvZHkgaXNcclxuICAgKiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNpZGVyZWQgYSB2YWxpZCBUYXJnZXQgTm9kZVxyXG4gICAqIEByZXR1cm5zICAgICAgICAgICAgICAgVGhlIFRhcmdldCBOb2RlIHRvIHNjcm9sbCB0b1xyXG4gICAqL1xyXG4gIHByaXZhdGUgZ2V0Tm9kZShpZDogU2Nyb2xsVG9UYXJnZXQsIGFsbG93Qm9keVRhZzogYm9vbGVhbiA9IGZhbHNlKTogSFRNTEVsZW1lbnQge1xyXG5cclxuICAgIGxldCB0YXJnZXROb2RlOiBIVE1MRWxlbWVudDtcclxuXHJcbiAgICBpZiAoaXNTdHJpbmcoaWQpKSB7XHJcbiAgICAgIGlmIChhbGxvd0JvZHlUYWcgJiYgKGlkID09PSAnYm9keScgfHwgaWQgPT09ICdCT0RZJykpIHtcclxuICAgICAgICB0YXJnZXROb2RlID0gdGhpcy5kb2N1bWVudC5ib2R5O1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRhcmdldE5vZGUgPSB0aGlzLmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHN0cmlwSGFzaChpZCkpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2UgaWYgKGlzTnVtYmVyKGlkKSkge1xyXG4gICAgICB0YXJnZXROb2RlID0gdGhpcy5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChTdHJpbmcoaWQpKTtcclxuICAgIH0gZWxzZSBpZiAoaXNFbGVtZW50UmVmKGlkKSkge1xyXG4gICAgICB0YXJnZXROb2RlID0gaWQubmF0aXZlRWxlbWVudDtcclxuICAgIH0gZWxzZSBpZiAoaXNOYXRpdmVFbGVtZW50KGlkKSkge1xyXG4gICAgICB0YXJnZXROb2RlID0gaWQ7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRhcmdldE5vZGU7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZXRyaWV2ZSB0aGUgTGlzdGVuZXIgdGFyZ2V0LiBUaGlzIExpc3RlbmVyIFRhcmdldCBpcyB1c2VkXHJcbiAgICogdG8gYXR0YWNoIEV2ZW50IExpc3RlbmVycyBvbi4gSW4gY2FzZSBvZiB0aGUgdGFyZ2V0IGJlaW5nXHJcbiAgICogdGhlIERvY3VtZW50IEJvZHksIHdlIG5lZWQgdGhlIGFjdHVhbCBgd2luZG93YCB0byBsaXN0ZW5cclxuICAgKiBmb3IgZXZlbnRzLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIGNvbnRhaW5lciAgICAgICAgICAgVGhlIEhUTUwgQ29udGFpbmVyIGVsZW1lbnRcclxuICAgKiBAcmV0dXJucyAgICAgICAgICAgICAgICAgICBUaGUgTGlzdGVuZXIgVGFyZ2V0IHRvIGF0dGFjaCBldmVudHMgb25cclxuICAgKi9cclxuICBwcml2YXRlIGdldExpc3RlbmVyVGFyZ2V0KGNvbnRhaW5lcjogSFRNTEVsZW1lbnQpOiBTY3JvbGxUb0xpc3RlbmVyVGFyZ2V0IHtcclxuICAgIGlmICghY29udGFpbmVyKSB7XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMuaXNEb2N1bWVudEJvZHkoY29udGFpbmVyKSA/IHdpbmRvdyA6IGNvbnRhaW5lcjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFRlc3QgaWYgYSBnaXZlbiBIVE1MIEVsZW1lbnQgaXMgdGhlIERvY3VtZW50IEJvZHkuXHJcbiAgICpcclxuICAgKiBAcGFyYW0gZWxlbWVudCAgICAgICAgICAgICBUaGUgZ2l2ZW4gSFRNTCBFbGVtZW50XHJcbiAgICogQHJldHVybnMgICAgICAgICAgICAgICAgICAgV2hldGhlciBvciBub3QgdGhlIEVsZW1lbnQgaXMgdGhlXHJcbiAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgRG9jdW1lbnQgQm9keSBFbGVtZW50XHJcbiAgICovXHJcbiAgcHJpdmF0ZSBpc0RvY3VtZW50Qm9keShlbGVtZW50OiBIVE1MRWxlbWVudCk6IGVsZW1lbnQgaXMgSFRNTEJvZHlFbGVtZW50IHtcclxuICAgIHJldHVybiBlbGVtZW50LnRhZ05hbWUudG9VcHBlckNhc2UoKSA9PT0gJ0JPRFknO1xyXG4gIH1cclxufSJdfQ==