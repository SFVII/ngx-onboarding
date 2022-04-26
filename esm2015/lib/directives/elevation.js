import { Directive, HostListener, Input } from '@angular/core';
import * as i0 from "@angular/core";
export class MaterialElevationDirective {
    constructor(element, renderer) {
        this.element = element;
        this.renderer = renderer;
        this.defaultElevation = 2;
        this.raisedElevation = 8;
        this.setElevation(this.defaultElevation);
    }
    ngOnChanges(_changes) {
        this.setElevation(this.defaultElevation);
    }
    onMouseEnter() {
        this.setElevation(this.raisedElevation);
    }
    onMouseLeave() {
        this.setElevation(this.defaultElevation);
    }
    setElevation(amount) {
        // remove all elevation classes
        const classesToRemove = Array.from(this.element.nativeElement.classList).filter(c => c.startsWith('mat-elevation-z'));
        classesToRemove.forEach((c) => {
            this.renderer.removeClass(this.element.nativeElement, c);
        });
        // add the given elevation class
        const newClass = `mat-elevation-z${amount}`;
        this.renderer.addClass(this.element.nativeElement, newClass);
    }
}
MaterialElevationDirective.ɵfac = function MaterialElevationDirective_Factory(t) { return new (t || MaterialElevationDirective)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.Renderer2)); };
MaterialElevationDirective.ɵdir = i0.ɵɵdefineDirective({ type: MaterialElevationDirective, selectors: [["", "appMaterialElevation", ""]], hostBindings: function MaterialElevationDirective_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("mouseenter", function MaterialElevationDirective_mouseenter_HostBindingHandler() { return ctx.onMouseEnter(); })("mouseleave", function MaterialElevationDirective_mouseleave_HostBindingHandler() { return ctx.onMouseLeave(); });
    } }, inputs: { defaultElevation: "defaultElevation", raisedElevation: "raisedElevation" }, features: [i0.ɵɵNgOnChangesFeature] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(MaterialElevationDirective, [{
        type: Directive,
        args: [{
                selector: '[appMaterialElevation]'
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }]; }, { defaultElevation: [{
            type: Input
        }], raisedElevation: [{
            type: Input
        }], onMouseEnter: [{
            type: HostListener,
            args: ['mouseenter']
        }], onMouseLeave: [{
            type: HostListener,
            args: ['mouseleave']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWxldmF0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8vb25ib2FyZGluZy8iLCJzb3VyY2VzIjpbImxpYi9kaXJlY3RpdmVzL2VsZXZhdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFjLFlBQVksRUFBRSxLQUFLLEVBQXVDLE1BQU0sZUFBZSxDQUFDOztBQUtoSCxNQUFNLE9BQU8sMEJBQTBCO0lBUW5DLFlBQ1ksT0FBbUIsRUFDbkIsUUFBbUI7UUFEbkIsWUFBTyxHQUFQLE9BQU8sQ0FBWTtRQUNuQixhQUFRLEdBQVIsUUFBUSxDQUFXO1FBUC9CLHFCQUFnQixHQUFHLENBQUMsQ0FBQztRQUdyQixvQkFBZSxHQUFHLENBQUMsQ0FBQztRQU1oQixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFFRCxXQUFXLENBQUMsUUFBdUI7UUFDL0IsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBR0QsWUFBWTtRQUNSLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFHRCxZQUFZO1FBQ1IsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBRUQsWUFBWSxDQUFDLE1BQWM7UUFDdkIsK0JBQStCO1FBQy9CLE1BQU0sZUFBZSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQWUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFjLENBQUMsU0FBUyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUM7UUFDckksZUFBZSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFO1lBQzFCLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzdELENBQUMsQ0FBQyxDQUFDO1FBRUgsZ0NBQWdDO1FBQ2hDLE1BQU0sUUFBUSxHQUFHLGtCQUFrQixNQUFNLEVBQUUsQ0FBQztRQUM1QyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxRQUFRLENBQUMsQ0FBQztJQUNqRSxDQUFDOztvR0F2Q1EsMEJBQTBCOytEQUExQiwwQkFBMEI7OztrREFBMUIsMEJBQTBCO2NBSHRDLFNBQVM7ZUFBQztnQkFDUCxRQUFRLEVBQUUsd0JBQXdCO2FBQ3JDOztrQkFHSSxLQUFLOztrQkFHTCxLQUFLOztrQkFjTCxZQUFZO21CQUFDLFlBQVk7O2tCQUt6QixZQUFZO21CQUFDLFlBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIEhvc3RMaXN0ZW5lciwgSW5wdXQsIFJlbmRlcmVyMiwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICAgIHNlbGVjdG9yOiAnW2FwcE1hdGVyaWFsRWxldmF0aW9uXSdcclxufSlcclxuZXhwb3J0IGNsYXNzIE1hdGVyaWFsRWxldmF0aW9uRGlyZWN0aXZlIGltcGxlbWVudHMgT25DaGFuZ2VzIHtcclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZGVmYXVsdEVsZXZhdGlvbiA9IDI7XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIHJhaXNlZEVsZXZhdGlvbiA9IDg7XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSBlbGVtZW50OiBFbGVtZW50UmVmLFxyXG4gICAgICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMlxyXG4gICAgKSB7XHJcbiAgICAgICAgdGhpcy5zZXRFbGV2YXRpb24odGhpcy5kZWZhdWx0RWxldmF0aW9uKTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uQ2hhbmdlcyhfY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xyXG4gICAgICAgIHRoaXMuc2V0RWxldmF0aW9uKHRoaXMuZGVmYXVsdEVsZXZhdGlvbik7XHJcbiAgICB9XHJcblxyXG4gICAgQEhvc3RMaXN0ZW5lcignbW91c2VlbnRlcicpXHJcbiAgICBvbk1vdXNlRW50ZXIoKSB7XHJcbiAgICAgICAgdGhpcy5zZXRFbGV2YXRpb24odGhpcy5yYWlzZWRFbGV2YXRpb24pO1xyXG4gICAgfVxyXG5cclxuICAgIEBIb3N0TGlzdGVuZXIoJ21vdXNlbGVhdmUnKVxyXG4gICAgb25Nb3VzZUxlYXZlKCkge1xyXG4gICAgICAgIHRoaXMuc2V0RWxldmF0aW9uKHRoaXMuZGVmYXVsdEVsZXZhdGlvbik7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0RWxldmF0aW9uKGFtb3VudDogbnVtYmVyKSB7XHJcbiAgICAgICAgLy8gcmVtb3ZlIGFsbCBlbGV2YXRpb24gY2xhc3Nlc1xyXG4gICAgICAgIGNvbnN0IGNsYXNzZXNUb1JlbW92ZSA9IEFycmF5LmZyb20oKDxIVE1MRWxlbWVudD50aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudCkuY2xhc3NMaXN0KS5maWx0ZXIoYyA9PiBjLnN0YXJ0c1dpdGgoJ21hdC1lbGV2YXRpb24teicpKTtcclxuICAgICAgICBjbGFzc2VzVG9SZW1vdmUuZm9yRWFjaCgoYykgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LCBjKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gYWRkIHRoZSBnaXZlbiBlbGV2YXRpb24gY2xhc3NcclxuICAgICAgICBjb25zdCBuZXdDbGFzcyA9IGBtYXQtZWxldmF0aW9uLXoke2Ftb3VudH1gO1xyXG4gICAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsIG5ld0NsYXNzKTtcclxuICAgIH1cclxufVxyXG4iXX0=