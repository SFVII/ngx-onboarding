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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Nyb2xsLXRvLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL29uYm9hcmRpbmcvc3JjL2xpYi9tb2R1bGUvc2Nyb2xsLXRvL3Njcm9sbC10by5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFpQixTQUFTLEVBQWMsS0FBSyxFQUFhLE1BQU0sZUFBZSxDQUFDO0FBQ3ZGLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLE1BQU0scUJBQXFCLENBQUM7OztBQVV2RCxNQUFNLE9BQU8saUJBQWlCO0lBc0I1QixZQUNVLFVBQXNCLEVBQ3RCLGVBQWdDLEVBQ2hDLFNBQW9CO1FBRnBCLGVBQVUsR0FBVixVQUFVLENBQVk7UUFDdEIsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ2hDLGNBQVMsR0FBVCxTQUFTLENBQVc7UUF0QjlCLGdCQUFXLEdBQW1CLFFBQVEsQ0FBQyxNQUFNLENBQUM7UUFHOUMscUJBQWdCLEdBQWtCLFFBQVEsQ0FBQyxNQUFNLENBQUM7UUFHbEQsd0JBQW1CLEdBQVcsUUFBUSxDQUFDLFFBQVEsQ0FBQztRQUdoRCxzQkFBaUIsR0FBNEIsUUFBUSxDQUFDLE1BQU0sQ0FBQztRQUc3RCxzQkFBaUIsR0FBVyxRQUFRLENBQUMsTUFBTSxDQUFDO1FBRzVDLHlCQUFvQixHQUFzQixRQUFRLENBQUMsU0FBUyxDQUFDO0lBUTdELENBQUM7SUFFRDs7Ozs7O09BTUc7SUFDSCxlQUFlO1FBRWIscUJBQXFCO1FBQ3JCLElBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRTtZQUNoRCxNQUFNLElBQUksS0FBSyxDQUFDLHNCQUFzQixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsQ0FBQyxDQUFDO1NBQ2pFO1FBRUQsNEJBQTRCO1FBQzVCLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxnQkFBZ0IsRUFDeEUsQ0FBQyxLQUFZLEVBQUUsRUFBRTtZQUVmLElBQUksQ0FBQyxPQUFPLEdBQUc7Z0JBQ2IsTUFBTSxFQUFFLElBQUksQ0FBQyxXQUFXO2dCQUN4QixRQUFRLEVBQUUsSUFBSSxDQUFDLG1CQUFtQjtnQkFDbEMsTUFBTSxFQUFFLElBQUksQ0FBQyxpQkFBaUI7Z0JBQzlCLE1BQU0sRUFBRSxJQUFJLENBQUMsaUJBQWlCO2dCQUM5QixTQUFTLEVBQUUsSUFBSSxDQUFDLG9CQUFvQjthQUNyQyxDQUFDO1lBRUYsSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzlDLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQzs7a0ZBeERVLGlCQUFpQjtvRUFBakIsaUJBQWlCO3VGQUFqQixpQkFBaUI7Y0FIN0IsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxlQUFlO2FBQzFCO21IQUlDLFdBQVc7a0JBRFYsS0FBSztZQUlOLGdCQUFnQjtrQkFEZixLQUFLO1lBSU4sbUJBQW1CO2tCQURsQixLQUFLO1lBSU4saUJBQWlCO2tCQURoQixLQUFLO1lBSU4saUJBQWlCO2tCQURoQixLQUFLO1lBSU4sb0JBQW9CO2tCQURuQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBJbnB1dCwgUmVuZGVyZXIyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IERFRkFVTFRTLCBFVkVOVFMgfSBmcm9tICcuL3Njcm9sbC10by1oZWxwZXJzJztcclxuaW1wb3J0IHsgU2Nyb2xsVG9Db25maWdPcHRpb25zLCBTY3JvbGxUb09mZnNldE1hcCwgU2Nyb2xsVG9UYXJnZXQgfSBmcm9tICcuL3Njcm9sbC10by1jb25maWcuaW50ZXJmYWNlJztcclxuXHJcbmltcG9ydCB7IFNjcm9sbFRvQW5pbWF0aW9uRWFzaW5nIH0gZnJvbSAnLi9zY3JvbGwtdG8tZWFzaW5nLmludGVyZmFjZSc7XHJcbmltcG9ydCB7IFNjcm9sbFRvRXZlbnQgfSBmcm9tICcuL3Njcm9sbC10by1ldmVudC5pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBTY3JvbGxUb1NlcnZpY2UgfSBmcm9tICcuL3Njcm9sbC10by5zZXJ2aWNlJztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW25neFNjcm9sbFRvXSdcclxufSlcclxuZXhwb3J0IGNsYXNzIFNjcm9sbFRvRGlyZWN0aXZlIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgbmd4U2Nyb2xsVG86IFNjcm9sbFRvVGFyZ2V0ID0gREVGQVVMVFMudGFyZ2V0O1xyXG5cclxuICBASW5wdXQoKVxyXG4gIG5neFNjcm9sbFRvRXZlbnQ6IFNjcm9sbFRvRXZlbnQgPSBERUZBVUxUUy5hY3Rpb247XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgbmd4U2Nyb2xsVG9EdXJhdGlvbjogbnVtYmVyID0gREVGQVVMVFMuZHVyYXRpb247XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgbmd4U2Nyb2xsVG9FYXNpbmc6IFNjcm9sbFRvQW5pbWF0aW9uRWFzaW5nID0gREVGQVVMVFMuZWFzaW5nO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIG5neFNjcm9sbFRvT2Zmc2V0OiBudW1iZXIgPSBERUZBVUxUUy5vZmZzZXQ7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgbmd4U2Nyb2xsVG9PZmZzZXRNYXA6IFNjcm9sbFRvT2Zmc2V0TWFwID0gREVGQVVMVFMub2Zmc2V0TWFwO1xyXG5cclxuICBwcml2YXRlIG9wdGlvbnM6IFNjcm9sbFRvQ29uZmlnT3B0aW9ucztcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXHJcbiAgICBwcml2YXRlIHNjcm9sbFRvU2VydmljZTogU2Nyb2xsVG9TZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSByZW5kZXJlcjI6IFJlbmRlcmVyMikge1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQW5ndWxhciBMaWZlY3ljbGUgSG9vayAtIEFmdGVyIFZpZXcgSW5pdFxyXG4gICAqXHJcbiAgICogQHRvZG8gSW1wbGVtZW50IFN1YnNjcmlwdGlvbiBmb3IgRXZlbnRzXHJcbiAgICpcclxuICAgKiBAcmV0dXJucyB2b2lkXHJcbiAgICovXHJcbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xyXG5cclxuICAgIC8vIFRlc3QgRXZlbnQgU3VwcG9ydFxyXG4gICAgaWYgKEVWRU5UUy5pbmRleE9mKHRoaXMubmd4U2Nyb2xsVG9FdmVudCkgPT09IC0xKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVW5zdXBwb3J0ZWQgRXZlbnQgJyR7dGhpcy5uZ3hTY3JvbGxUb0V2ZW50fSdgKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBMaXN0ZW4gZm9yIHRoZSB0cmlnZ2VyLi4uXHJcbiAgICB0aGlzLnJlbmRlcmVyMi5saXN0ZW4odGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHRoaXMubmd4U2Nyb2xsVG9FdmVudCxcclxuICAgICAgKGV2ZW50OiBFdmVudCkgPT4ge1xyXG5cclxuICAgICAgICB0aGlzLm9wdGlvbnMgPSB7XHJcbiAgICAgICAgICB0YXJnZXQ6IHRoaXMubmd4U2Nyb2xsVG8sXHJcbiAgICAgICAgICBkdXJhdGlvbjogdGhpcy5uZ3hTY3JvbGxUb0R1cmF0aW9uLFxyXG4gICAgICAgICAgZWFzaW5nOiB0aGlzLm5neFNjcm9sbFRvRWFzaW5nLFxyXG4gICAgICAgICAgb2Zmc2V0OiB0aGlzLm5neFNjcm9sbFRvT2Zmc2V0LFxyXG4gICAgICAgICAgb2Zmc2V0TWFwOiB0aGlzLm5neFNjcm9sbFRvT2Zmc2V0TWFwXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdGhpcy5zY3JvbGxUb1NlcnZpY2Uuc2Nyb2xsVG8odGhpcy5vcHRpb25zKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG59Il19