import { __decorate } from "tslib";
import { Directive, ElementRef, HostListener, Input, Renderer2, OnChanges, SimpleChanges } from '@angular/core';
let MaterialElevationDirective = class MaterialElevationDirective {
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
};
MaterialElevationDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
__decorate([
    Input()
], MaterialElevationDirective.prototype, "defaultElevation", void 0);
__decorate([
    Input()
], MaterialElevationDirective.prototype, "raisedElevation", void 0);
__decorate([
    HostListener('mouseenter')
], MaterialElevationDirective.prototype, "onMouseEnter", null);
__decorate([
    HostListener('mouseleave')
], MaterialElevationDirective.prototype, "onMouseLeave", null);
MaterialElevationDirective = __decorate([
    Directive({
        selector: '[appMaterialElevation]'
    })
], MaterialElevationDirective);
export { MaterialElevationDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWxldmF0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8vb25ib2FyZGluZy8iLCJzb3VyY2VzIjpbImxpYi9kaXJlY3RpdmVzL2VsZXZhdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLGFBQWEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUtoSCxJQUFhLDBCQUEwQixHQUF2QyxNQUFhLDBCQUEwQjtJQVFuQyxZQUNZLE9BQW1CLEVBQ25CLFFBQW1CO1FBRG5CLFlBQU8sR0FBUCxPQUFPLENBQVk7UUFDbkIsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQVAvQixxQkFBZ0IsR0FBRyxDQUFDLENBQUM7UUFHckIsb0JBQWUsR0FBRyxDQUFDLENBQUM7UUFNaEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBRUQsV0FBVyxDQUFDLFFBQXVCO1FBQy9CLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUdELFlBQVk7UUFDUixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBR0QsWUFBWTtRQUNSLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUVELFlBQVksQ0FBQyxNQUFjO1FBQ3ZCLCtCQUErQjtRQUMvQixNQUFNLGVBQWUsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFlLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDO1FBQ3JJLGVBQWUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRTtZQUMxQixJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUM3RCxDQUFDLENBQUMsQ0FBQztRQUVILGdDQUFnQztRQUNoQyxNQUFNLFFBQVEsR0FBRyxrQkFBa0IsTUFBTSxFQUFFLENBQUM7UUFDNUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDakUsQ0FBQztDQUNKLENBQUE7O1lBL0J3QixVQUFVO1lBQ1QsU0FBUzs7QUFQL0I7SUFEQyxLQUFLLEVBQUU7b0VBQ2E7QUFHckI7SUFEQyxLQUFLLEVBQUU7bUVBQ1k7QUFjcEI7SUFEQyxZQUFZLENBQUMsWUFBWSxDQUFDOzhEQUcxQjtBQUdEO0lBREMsWUFBWSxDQUFDLFlBQVksQ0FBQzs4REFHMUI7QUEzQlEsMEJBQTBCO0lBSHRDLFNBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSx3QkFBd0I7S0FDckMsQ0FBQztHQUNXLDBCQUEwQixDQXdDdEM7U0F4Q1ksMEJBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBIb3N0TGlzdGVuZXIsIElucHV0LCBSZW5kZXJlcjIsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogJ1thcHBNYXRlcmlhbEVsZXZhdGlvbl0nXG59KVxuZXhwb3J0IGNsYXNzIE1hdGVyaWFsRWxldmF0aW9uRGlyZWN0aXZlIGltcGxlbWVudHMgT25DaGFuZ2VzIHtcblxuICAgIEBJbnB1dCgpXG4gICAgZGVmYXVsdEVsZXZhdGlvbiA9IDI7XG5cbiAgICBASW5wdXQoKVxuICAgIHJhaXNlZEVsZXZhdGlvbiA9IDg7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBlbGVtZW50OiBFbGVtZW50UmVmLFxuICAgICAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjJcbiAgICApIHtcbiAgICAgICAgdGhpcy5zZXRFbGV2YXRpb24odGhpcy5kZWZhdWx0RWxldmF0aW9uKTtcbiAgICB9XG5cbiAgICBuZ09uQ2hhbmdlcyhfY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgICAgICB0aGlzLnNldEVsZXZhdGlvbih0aGlzLmRlZmF1bHRFbGV2YXRpb24pO1xuICAgIH1cblxuICAgIEBIb3N0TGlzdGVuZXIoJ21vdXNlZW50ZXInKVxuICAgIG9uTW91c2VFbnRlcigpIHtcbiAgICAgICAgdGhpcy5zZXRFbGV2YXRpb24odGhpcy5yYWlzZWRFbGV2YXRpb24pO1xuICAgIH1cblxuICAgIEBIb3N0TGlzdGVuZXIoJ21vdXNlbGVhdmUnKVxuICAgIG9uTW91c2VMZWF2ZSgpIHtcbiAgICAgICAgdGhpcy5zZXRFbGV2YXRpb24odGhpcy5kZWZhdWx0RWxldmF0aW9uKTtcbiAgICB9XG5cbiAgICBzZXRFbGV2YXRpb24oYW1vdW50OiBudW1iZXIpIHtcbiAgICAgICAgLy8gcmVtb3ZlIGFsbCBlbGV2YXRpb24gY2xhc3Nlc1xuICAgICAgICBjb25zdCBjbGFzc2VzVG9SZW1vdmUgPSBBcnJheS5mcm9tKCg8SFRNTEVsZW1lbnQ+dGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQpLmNsYXNzTGlzdCkuZmlsdGVyKGMgPT4gYy5zdGFydHNXaXRoKCdtYXQtZWxldmF0aW9uLXonKSk7XG4gICAgICAgIGNsYXNzZXNUb1JlbW92ZS5mb3JFYWNoKChjKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LCBjKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gYWRkIHRoZSBnaXZlbiBlbGV2YXRpb24gY2xhc3NcbiAgICAgICAgY29uc3QgbmV3Q2xhc3MgPSBgbWF0LWVsZXZhdGlvbi16JHthbW91bnR9YDtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudCwgbmV3Q2xhc3MpO1xuICAgIH1cbn1cbiJdfQ==