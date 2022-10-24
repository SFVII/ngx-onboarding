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
MaterialElevationDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.6", ngImport: i0, type: MaterialElevationDirective, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }], target: i0.ɵɵFactoryTarget.Directive });
MaterialElevationDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.2.6", type: MaterialElevationDirective, selector: "[appMaterialElevation]", inputs: { defaultElevation: "defaultElevation", raisedElevation: "raisedElevation" }, host: { listeners: { "mouseenter": "onMouseEnter()", "mouseleave": "onMouseLeave()" } }, usesOnChanges: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.6", ngImport: i0, type: MaterialElevationDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[appMaterialElevation]'
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }]; }, propDecorators: { defaultElevation: [{
                type: Input
            }], raisedElevation: [{
                type: Input
            }], onMouseEnter: [{
                type: HostListener,
                args: ['mouseenter']
            }], onMouseLeave: [{
                type: HostListener,
                args: ['mouseleave']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWxldmF0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvb25ib2FyZGluZy9zcmMvbGliL2RpcmVjdGl2ZXMvZWxldmF0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQWMsWUFBWSxFQUFFLEtBQUssRUFBdUMsTUFBTSxlQUFlLENBQUM7O0FBS2hILE1BQU0sT0FBTywwQkFBMEI7SUFRbkMsWUFDWSxPQUFtQixFQUNuQixRQUFtQjtRQURuQixZQUFPLEdBQVAsT0FBTyxDQUFZO1FBQ25CLGFBQVEsR0FBUixRQUFRLENBQVc7UUFQL0IscUJBQWdCLEdBQUcsQ0FBQyxDQUFDO1FBR3JCLG9CQUFlLEdBQUcsQ0FBQyxDQUFDO1FBTWhCLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUVELFdBQVcsQ0FBQyxRQUF1QjtRQUMvQixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFHRCxZQUFZO1FBQ1IsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUdELFlBQVk7UUFDUixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFFRCxZQUFZLENBQUMsTUFBYztRQUN2QiwrQkFBK0I7UUFDL0IsTUFBTSxlQUFlLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBZSxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQztRQUNySSxlQUFlLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUU7WUFDMUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDN0QsQ0FBQyxDQUFDLENBQUM7UUFFSCxnQ0FBZ0M7UUFDaEMsTUFBTSxRQUFRLEdBQUcsa0JBQWtCLE1BQU0sRUFBRSxDQUFDO1FBQzVDLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQ2pFLENBQUM7O3VIQXZDUSwwQkFBMEI7MkdBQTFCLDBCQUEwQjsyRkFBMUIsMEJBQTBCO2tCQUh0QyxTQUFTO21CQUFDO29CQUNQLFFBQVEsRUFBRSx3QkFBd0I7aUJBQ3JDO3lIQUlHLGdCQUFnQjtzQkFEZixLQUFLO2dCQUlOLGVBQWU7c0JBRGQsS0FBSztnQkFlTixZQUFZO3NCQURYLFlBQVk7dUJBQUMsWUFBWTtnQkFNMUIsWUFBWTtzQkFEWCxZQUFZO3VCQUFDLFlBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIEhvc3RMaXN0ZW5lciwgSW5wdXQsIFJlbmRlcmVyMiwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICAgIHNlbGVjdG9yOiAnW2FwcE1hdGVyaWFsRWxldmF0aW9uXSdcclxufSlcclxuZXhwb3J0IGNsYXNzIE1hdGVyaWFsRWxldmF0aW9uRGlyZWN0aXZlIGltcGxlbWVudHMgT25DaGFuZ2VzIHtcclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZGVmYXVsdEVsZXZhdGlvbiA9IDI7XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIHJhaXNlZEVsZXZhdGlvbiA9IDg7XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSBlbGVtZW50OiBFbGVtZW50UmVmLFxyXG4gICAgICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMlxyXG4gICAgKSB7XHJcbiAgICAgICAgdGhpcy5zZXRFbGV2YXRpb24odGhpcy5kZWZhdWx0RWxldmF0aW9uKTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uQ2hhbmdlcyhfY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xyXG4gICAgICAgIHRoaXMuc2V0RWxldmF0aW9uKHRoaXMuZGVmYXVsdEVsZXZhdGlvbik7XHJcbiAgICB9XHJcblxyXG4gICAgQEhvc3RMaXN0ZW5lcignbW91c2VlbnRlcicpXHJcbiAgICBvbk1vdXNlRW50ZXIoKSB7XHJcbiAgICAgICAgdGhpcy5zZXRFbGV2YXRpb24odGhpcy5yYWlzZWRFbGV2YXRpb24pO1xyXG4gICAgfVxyXG5cclxuICAgIEBIb3N0TGlzdGVuZXIoJ21vdXNlbGVhdmUnKVxyXG4gICAgb25Nb3VzZUxlYXZlKCkge1xyXG4gICAgICAgIHRoaXMuc2V0RWxldmF0aW9uKHRoaXMuZGVmYXVsdEVsZXZhdGlvbik7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0RWxldmF0aW9uKGFtb3VudDogbnVtYmVyKSB7XHJcbiAgICAgICAgLy8gcmVtb3ZlIGFsbCBlbGV2YXRpb24gY2xhc3Nlc1xyXG4gICAgICAgIGNvbnN0IGNsYXNzZXNUb1JlbW92ZSA9IEFycmF5LmZyb20oKDxIVE1MRWxlbWVudD50aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudCkuY2xhc3NMaXN0KS5maWx0ZXIoYyA9PiBjLnN0YXJ0c1dpdGgoJ21hdC1lbGV2YXRpb24teicpKTtcclxuICAgICAgICBjbGFzc2VzVG9SZW1vdmUuZm9yRWFjaCgoYykgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LCBjKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gYWRkIHRoZSBnaXZlbiBlbGV2YXRpb24gY2xhc3NcclxuICAgICAgICBjb25zdCBuZXdDbGFzcyA9IGBtYXQtZWxldmF0aW9uLXoke2Ftb3VudH1gO1xyXG4gICAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsIG5ld0NsYXNzKTtcclxuICAgIH1cclxufVxyXG4iXX0=