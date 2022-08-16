import { Directive, Input } from '@angular/core';
import { DEFAULTS, EVENTS } from './scroll-to-helpers';
import * as i0 from "@angular/core";
import * as i1 from "./scroll-to.service";
export class ScrollToDirective {
    constructor(elementRef, scrollToService, renderer2) {
        this.elementRef = elementRef;
        this.scrollToService = scrollToService;
        this.renderer2 = renderer2;
        this.ngxScrollTo = DEFAULTS.target;
        this.ngxScrollToEvent = DEFAULTS.action;
        this.ngxScrollToDuration = DEFAULTS.duration;
        this.ngxScrollToEasing = DEFAULTS.easing;
        this.ngxScrollToOffset = DEFAULTS.offset;
        this.ngxScrollToOffsetMap = DEFAULTS.offsetMap;
    }
    /**
     * Angular Lifecycle Hook - After View Init
     *
     * @todo Implement Subscription for Events
     *
     * @returns void
     */
    ngAfterViewInit() {
        // Test Event Support
        if (EVENTS.indexOf(this.ngxScrollToEvent) === -1) {
            throw new Error(`Unsupported Event '${this.ngxScrollToEvent}'`);
        }
        // Listen for the trigger...
        this.renderer2.listen(this.elementRef.nativeElement, this.ngxScrollToEvent, (event) => {
            this.options = {
                target: this.ngxScrollTo,
                duration: this.ngxScrollToDuration,
                easing: this.ngxScrollToEasing,
                offset: this.ngxScrollToOffset,
                offsetMap: this.ngxScrollToOffsetMap
            };
            this.scrollToService.scrollTo(this.options);
        });
    }
}
ScrollToDirective.ɵfac = function ScrollToDirective_Factory(t) { return new (t || ScrollToDirective)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i1.ScrollToService), i0.ɵɵdirectiveInject(i0.Renderer2)); };
ScrollToDirective.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: ScrollToDirective, selectors: [["", "ngxScrollTo", ""]], inputs: { ngxScrollTo: "ngxScrollTo", ngxScrollToEvent: "ngxScrollToEvent", ngxScrollToDuration: "ngxScrollToDuration", ngxScrollToEasing: "ngxScrollToEasing", ngxScrollToOffset: "ngxScrollToOffset", ngxScrollToOffsetMap: "ngxScrollToOffsetMap" } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ScrollToDirective, [{
        type: Directive,
        args: [{
                selector: '[ngxScrollTo]'
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i1.ScrollToService }, { type: i0.Renderer2 }]; }, { ngxScrollTo: [{
            type: Input
        }], ngxScrollToEvent: [{
            type: Input
        }], ngxScrollToDuration: [{
            type: Input
        }], ngxScrollToEasing: [{
            type: Input
        }], ngxScrollToOffset: [{
            type: Input
        }], ngxScrollToOffsetMap: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Nyb2xsLXRvLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL29uYm9hcmRpbmcvc3JjL2xpYi9tb2R1bGUvc2Nyb2xsLXRvL3Njcm9sbC10by5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFpQixTQUFTLEVBQWMsS0FBSyxFQUFhLE1BQU0sZUFBZSxDQUFDO0FBQ3ZGLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLE1BQU0scUJBQXFCLENBQUM7OztBQVV2RCxNQUFNLE9BQU8saUJBQWlCO0lBc0I1QixZQUNVLFVBQXNCLEVBQ3RCLGVBQWdDLEVBQ2hDLFNBQW9CO1FBRnBCLGVBQVUsR0FBVixVQUFVLENBQVk7UUFDdEIsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ2hDLGNBQVMsR0FBVCxTQUFTLENBQVc7UUF0QjlCLGdCQUFXLEdBQW1CLFFBQVEsQ0FBQyxNQUFNLENBQUM7UUFHOUMscUJBQWdCLEdBQWtCLFFBQVEsQ0FBQyxNQUFNLENBQUM7UUFHbEQsd0JBQW1CLEdBQVcsUUFBUSxDQUFDLFFBQVEsQ0FBQztRQUdoRCxzQkFBaUIsR0FBNEIsUUFBUSxDQUFDLE1BQU0sQ0FBQztRQUc3RCxzQkFBaUIsR0FBVyxRQUFRLENBQUMsTUFBTSxDQUFDO1FBRzVDLHlCQUFvQixHQUFzQixRQUFRLENBQUMsU0FBUyxDQUFDO0lBUTdELENBQUM7SUFFRDs7Ozs7O09BTUc7SUFDSCxlQUFlO1FBRWIscUJBQXFCO1FBQ3JCLElBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRTtZQUNoRCxNQUFNLElBQUksS0FBSyxDQUFDLHNCQUFzQixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsQ0FBQyxDQUFDO1NBQ2pFO1FBRUQsNEJBQTRCO1FBQzVCLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxnQkFBZ0IsRUFDeEUsQ0FBQyxLQUFZLEVBQUUsRUFBRTtZQUVmLElBQUksQ0FBQyxPQUFPLEdBQUc7Z0JBQ2IsTUFBTSxFQUFFLElBQUksQ0FBQyxXQUFXO2dCQUN4QixRQUFRLEVBQUUsSUFBSSxDQUFDLG1CQUFtQjtnQkFDbEMsTUFBTSxFQUFFLElBQUksQ0FBQyxpQkFBaUI7Z0JBQzlCLE1BQU0sRUFBRSxJQUFJLENBQUMsaUJBQWlCO2dCQUM5QixTQUFTLEVBQUUsSUFBSSxDQUFDLG9CQUFvQjthQUNyQyxDQUFDO1lBRUYsSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzlDLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQzs7a0ZBeERVLGlCQUFpQjtvRUFBakIsaUJBQWlCO3VGQUFqQixpQkFBaUI7Y0FIN0IsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxlQUFlO2FBQzFCO21IQUlDLFdBQVc7a0JBRFYsS0FBSztZQUlOLGdCQUFnQjtrQkFEZixLQUFLO1lBSU4sbUJBQW1CO2tCQURsQixLQUFLO1lBSU4saUJBQWlCO2tCQURoQixLQUFLO1lBSU4saUJBQWlCO2tCQURoQixLQUFLO1lBSU4sb0JBQW9CO2tCQURuQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBJbnB1dCwgUmVuZGVyZXIyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBERUZBVUxUUywgRVZFTlRTIH0gZnJvbSAnLi9zY3JvbGwtdG8taGVscGVycyc7XG5pbXBvcnQgeyBTY3JvbGxUb0NvbmZpZ09wdGlvbnMsIFNjcm9sbFRvT2Zmc2V0TWFwLCBTY3JvbGxUb1RhcmdldCB9IGZyb20gJy4vc2Nyb2xsLXRvLWNvbmZpZy5pbnRlcmZhY2UnO1xuXG5pbXBvcnQgeyBTY3JvbGxUb0FuaW1hdGlvbkVhc2luZyB9IGZyb20gJy4vc2Nyb2xsLXRvLWVhc2luZy5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgU2Nyb2xsVG9FdmVudCB9IGZyb20gJy4vc2Nyb2xsLXRvLWV2ZW50LmludGVyZmFjZSc7XG5pbXBvcnQgeyBTY3JvbGxUb1NlcnZpY2UgfSBmcm9tICcuL3Njcm9sbC10by5zZXJ2aWNlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW25neFNjcm9sbFRvXSdcbn0pXG5leHBvcnQgY2xhc3MgU2Nyb2xsVG9EaXJlY3RpdmUgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcblxuICBASW5wdXQoKVxuICBuZ3hTY3JvbGxUbzogU2Nyb2xsVG9UYXJnZXQgPSBERUZBVUxUUy50YXJnZXQ7XG5cbiAgQElucHV0KClcbiAgbmd4U2Nyb2xsVG9FdmVudDogU2Nyb2xsVG9FdmVudCA9IERFRkFVTFRTLmFjdGlvbjtcblxuICBASW5wdXQoKVxuICBuZ3hTY3JvbGxUb0R1cmF0aW9uOiBudW1iZXIgPSBERUZBVUxUUy5kdXJhdGlvbjtcblxuICBASW5wdXQoKVxuICBuZ3hTY3JvbGxUb0Vhc2luZzogU2Nyb2xsVG9BbmltYXRpb25FYXNpbmcgPSBERUZBVUxUUy5lYXNpbmc7XG5cbiAgQElucHV0KClcbiAgbmd4U2Nyb2xsVG9PZmZzZXQ6IG51bWJlciA9IERFRkFVTFRTLm9mZnNldDtcblxuICBASW5wdXQoKVxuICBuZ3hTY3JvbGxUb09mZnNldE1hcDogU2Nyb2xsVG9PZmZzZXRNYXAgPSBERUZBVUxUUy5vZmZzZXRNYXA7XG5cbiAgcHJpdmF0ZSBvcHRpb25zOiBTY3JvbGxUb0NvbmZpZ09wdGlvbnM7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgc2Nyb2xsVG9TZXJ2aWNlOiBTY3JvbGxUb1NlcnZpY2UsXG4gICAgcHJpdmF0ZSByZW5kZXJlcjI6IFJlbmRlcmVyMikge1xuICB9XG5cbiAgLyoqXG4gICAqIEFuZ3VsYXIgTGlmZWN5Y2xlIEhvb2sgLSBBZnRlciBWaWV3IEluaXRcbiAgICpcbiAgICogQHRvZG8gSW1wbGVtZW50IFN1YnNjcmlwdGlvbiBmb3IgRXZlbnRzXG4gICAqXG4gICAqIEByZXR1cm5zIHZvaWRcbiAgICovXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcblxuICAgIC8vIFRlc3QgRXZlbnQgU3VwcG9ydFxuICAgIGlmIChFVkVOVFMuaW5kZXhPZih0aGlzLm5neFNjcm9sbFRvRXZlbnQpID09PSAtMSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbnN1cHBvcnRlZCBFdmVudCAnJHt0aGlzLm5neFNjcm9sbFRvRXZlbnR9J2ApO1xuICAgIH1cblxuICAgIC8vIExpc3RlbiBmb3IgdGhlIHRyaWdnZXIuLi5cbiAgICB0aGlzLnJlbmRlcmVyMi5saXN0ZW4odGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHRoaXMubmd4U2Nyb2xsVG9FdmVudCxcbiAgICAgIChldmVudDogRXZlbnQpID0+IHtcblxuICAgICAgICB0aGlzLm9wdGlvbnMgPSB7XG4gICAgICAgICAgdGFyZ2V0OiB0aGlzLm5neFNjcm9sbFRvLFxuICAgICAgICAgIGR1cmF0aW9uOiB0aGlzLm5neFNjcm9sbFRvRHVyYXRpb24sXG4gICAgICAgICAgZWFzaW5nOiB0aGlzLm5neFNjcm9sbFRvRWFzaW5nLFxuICAgICAgICAgIG9mZnNldDogdGhpcy5uZ3hTY3JvbGxUb09mZnNldCxcbiAgICAgICAgICBvZmZzZXRNYXA6IHRoaXMubmd4U2Nyb2xsVG9PZmZzZXRNYXBcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLnNjcm9sbFRvU2VydmljZS5zY3JvbGxUbyh0aGlzLm9wdGlvbnMpO1xuICAgICAgfSk7XG4gIH1cbn0iXX0=