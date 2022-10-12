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
MaterialElevationDirective.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: MaterialElevationDirective, selectors: [["", "appMaterialElevation", ""]], hostBindings: function MaterialElevationDirective_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("mouseenter", function MaterialElevationDirective_mouseenter_HostBindingHandler() { return ctx.onMouseEnter(); })("mouseleave", function MaterialElevationDirective_mouseleave_HostBindingHandler() { return ctx.onMouseLeave(); });
    } }, inputs: { defaultElevation: "defaultElevation", raisedElevation: "raisedElevation" }, features: [i0.ɵɵNgOnChangesFeature] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MaterialElevationDirective, [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWxldmF0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvb25ib2FyZGluZy9zcmMvbGliL2RpcmVjdGl2ZXMvZWxldmF0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQWMsWUFBWSxFQUFFLEtBQUssRUFBdUMsTUFBTSxlQUFlLENBQUM7O0FBS2hILE1BQU0sT0FBTywwQkFBMEI7SUFRbkMsWUFDWSxPQUFtQixFQUNuQixRQUFtQjtRQURuQixZQUFPLEdBQVAsT0FBTyxDQUFZO1FBQ25CLGFBQVEsR0FBUixRQUFRLENBQVc7UUFQL0IscUJBQWdCLEdBQUcsQ0FBQyxDQUFDO1FBR3JCLG9CQUFlLEdBQUcsQ0FBQyxDQUFDO1FBTWhCLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUVELFdBQVcsQ0FBQyxRQUF1QjtRQUMvQixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFHRCxZQUFZO1FBQ1IsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUdELFlBQVk7UUFDUixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFFRCxZQUFZLENBQUMsTUFBYztRQUN2QiwrQkFBK0I7UUFDL0IsTUFBTSxlQUFlLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBZSxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQztRQUNySSxlQUFlLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUU7WUFDMUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDN0QsQ0FBQyxDQUFDLENBQUM7UUFFSCxnQ0FBZ0M7UUFDaEMsTUFBTSxRQUFRLEdBQUcsa0JBQWtCLE1BQU0sRUFBRSxDQUFDO1FBQzVDLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQ2pFLENBQUM7O29HQXZDUSwwQkFBMEI7NkVBQTFCLDBCQUEwQjtpSEFBMUIsa0JBQWMsZ0dBQWQsa0JBQWM7O3VGQUFkLDBCQUEwQjtjQUh0QyxTQUFTO2VBQUM7Z0JBQ1AsUUFBUSxFQUFFLHdCQUF3QjthQUNyQztxRkFJRyxnQkFBZ0I7a0JBRGYsS0FBSztZQUlOLGVBQWU7a0JBRGQsS0FBSztZQWVOLFlBQVk7a0JBRFgsWUFBWTttQkFBQyxZQUFZO1lBTTFCLFlBQVk7a0JBRFgsWUFBWTttQkFBQyxZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBIb3N0TGlzdGVuZXIsIElucHV0LCBSZW5kZXJlcjIsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogJ1thcHBNYXRlcmlhbEVsZXZhdGlvbl0nXG59KVxuZXhwb3J0IGNsYXNzIE1hdGVyaWFsRWxldmF0aW9uRGlyZWN0aXZlIGltcGxlbWVudHMgT25DaGFuZ2VzIHtcblxuICAgIEBJbnB1dCgpXG4gICAgZGVmYXVsdEVsZXZhdGlvbiA9IDI7XG5cbiAgICBASW5wdXQoKVxuICAgIHJhaXNlZEVsZXZhdGlvbiA9IDg7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBlbGVtZW50OiBFbGVtZW50UmVmLFxuICAgICAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjJcbiAgICApIHtcbiAgICAgICAgdGhpcy5zZXRFbGV2YXRpb24odGhpcy5kZWZhdWx0RWxldmF0aW9uKTtcbiAgICB9XG5cbiAgICBuZ09uQ2hhbmdlcyhfY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgICAgICB0aGlzLnNldEVsZXZhdGlvbih0aGlzLmRlZmF1bHRFbGV2YXRpb24pO1xuICAgIH1cblxuICAgIEBIb3N0TGlzdGVuZXIoJ21vdXNlZW50ZXInKVxuICAgIG9uTW91c2VFbnRlcigpIHtcbiAgICAgICAgdGhpcy5zZXRFbGV2YXRpb24odGhpcy5yYWlzZWRFbGV2YXRpb24pO1xuICAgIH1cblxuICAgIEBIb3N0TGlzdGVuZXIoJ21vdXNlbGVhdmUnKVxuICAgIG9uTW91c2VMZWF2ZSgpIHtcbiAgICAgICAgdGhpcy5zZXRFbGV2YXRpb24odGhpcy5kZWZhdWx0RWxldmF0aW9uKTtcbiAgICB9XG5cbiAgICBzZXRFbGV2YXRpb24oYW1vdW50OiBudW1iZXIpIHtcbiAgICAgICAgLy8gcmVtb3ZlIGFsbCBlbGV2YXRpb24gY2xhc3Nlc1xuICAgICAgICBjb25zdCBjbGFzc2VzVG9SZW1vdmUgPSBBcnJheS5mcm9tKCg8SFRNTEVsZW1lbnQ+dGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQpLmNsYXNzTGlzdCkuZmlsdGVyKGMgPT4gYy5zdGFydHNXaXRoKCdtYXQtZWxldmF0aW9uLXonKSk7XG4gICAgICAgIGNsYXNzZXNUb1JlbW92ZS5mb3JFYWNoKChjKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LCBjKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gYWRkIHRoZSBnaXZlbiBlbGV2YXRpb24gY2xhc3NcbiAgICAgICAgY29uc3QgbmV3Q2xhc3MgPSBgbWF0LWVsZXZhdGlvbi16JHthbW91bnR9YDtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudCwgbmV3Q2xhc3MpO1xuICAgIH1cbn1cbiJdfQ==