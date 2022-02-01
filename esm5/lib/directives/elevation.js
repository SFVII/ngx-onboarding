import { __decorate } from "tslib";
import { Directive, ElementRef, HostListener, Input, Renderer2, OnChanges, SimpleChanges } from '@angular/core';
var MaterialElevationDirective = /** @class */ (function () {
    function MaterialElevationDirective(element, renderer) {
        this.element = element;
        this.renderer = renderer;
        this.defaultElevation = 2;
        this.raisedElevation = 8;
        this.setElevation(this.defaultElevation);
    }
    MaterialElevationDirective.prototype.ngOnChanges = function (_changes) {
        this.setElevation(this.defaultElevation);
    };
    MaterialElevationDirective.prototype.onMouseEnter = function () {
        this.setElevation(this.raisedElevation);
    };
    MaterialElevationDirective.prototype.onMouseLeave = function () {
        this.setElevation(this.defaultElevation);
    };
    MaterialElevationDirective.prototype.setElevation = function (amount) {
        var _this = this;
        // remove all elevation classes
        var classesToRemove = Array.from(this.element.nativeElement.classList).filter(function (c) { return c.startsWith('mat-elevation-z'); });
        classesToRemove.forEach(function (c) {
            _this.renderer.removeClass(_this.element.nativeElement, c);
        });
        // add the given elevation class
        var newClass = "mat-elevation-z" + amount;
        this.renderer.addClass(this.element.nativeElement, newClass);
    };
    MaterialElevationDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
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
    return MaterialElevationDirective;
}());
export { MaterialElevationDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWxldmF0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8vb25ib2FyZGluZy8iLCJzb3VyY2VzIjpbImxpYi9kaXJlY3RpdmVzL2VsZXZhdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLGFBQWEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUtoSDtJQVFJLG9DQUNZLE9BQW1CLEVBQ25CLFFBQW1CO1FBRG5CLFlBQU8sR0FBUCxPQUFPLENBQVk7UUFDbkIsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQVAvQixxQkFBZ0IsR0FBRyxDQUFDLENBQUM7UUFHckIsb0JBQWUsR0FBRyxDQUFDLENBQUM7UUFNaEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBRUQsZ0RBQVcsR0FBWCxVQUFZLFFBQXVCO1FBQy9CLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUdELGlEQUFZLEdBQVo7UUFDSSxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBR0QsaURBQVksR0FBWjtRQUNJLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUVELGlEQUFZLEdBQVosVUFBYSxNQUFjO1FBQTNCLGlCQVVDO1FBVEcsK0JBQStCO1FBQy9CLElBQU0sZUFBZSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQWUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFjLENBQUMsU0FBUyxDQUFDLENBQUMsTUFBTSxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxpQkFBaUIsQ0FBQyxFQUEvQixDQUErQixDQUFDLENBQUM7UUFDckksZUFBZSxDQUFDLE9BQU8sQ0FBQyxVQUFDLENBQUM7WUFDdEIsS0FBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsS0FBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDN0QsQ0FBQyxDQUFDLENBQUM7UUFFSCxnQ0FBZ0M7UUFDaEMsSUFBTSxRQUFRLEdBQUcsb0JBQWtCLE1BQVEsQ0FBQztRQUM1QyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxRQUFRLENBQUMsQ0FBQztJQUNqRSxDQUFDOztnQkE5Qm9CLFVBQVU7Z0JBQ1QsU0FBUzs7SUFQL0I7UUFEQyxLQUFLLEVBQUU7d0VBQ2E7SUFHckI7UUFEQyxLQUFLLEVBQUU7dUVBQ1k7SUFjcEI7UUFEQyxZQUFZLENBQUMsWUFBWSxDQUFDO2tFQUcxQjtJQUdEO1FBREMsWUFBWSxDQUFDLFlBQVksQ0FBQztrRUFHMUI7SUEzQlEsMEJBQTBCO1FBSHRDLFNBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSx3QkFBd0I7U0FDckMsQ0FBQztPQUNXLDBCQUEwQixDQXdDdEM7SUFBRCxpQ0FBQztDQUFBLEFBeENELElBd0NDO1NBeENZLDBCQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSG9zdExpc3RlbmVyLCBJbnB1dCwgUmVuZGVyZXIyLCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6ICdbYXBwTWF0ZXJpYWxFbGV2YXRpb25dJ1xufSlcbmV4cG9ydCBjbGFzcyBNYXRlcmlhbEVsZXZhdGlvbkRpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG5cbiAgICBASW5wdXQoKVxuICAgIGRlZmF1bHRFbGV2YXRpb24gPSAyO1xuXG4gICAgQElucHV0KClcbiAgICByYWlzZWRFbGV2YXRpb24gPSA4O1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgZWxlbWVudDogRWxlbWVudFJlZixcbiAgICAgICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyXG4gICAgKSB7XG4gICAgICAgIHRoaXMuc2V0RWxldmF0aW9uKHRoaXMuZGVmYXVsdEVsZXZhdGlvbik7XG4gICAgfVxuXG4gICAgbmdPbkNoYW5nZXMoX2NoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICAgICAgdGhpcy5zZXRFbGV2YXRpb24odGhpcy5kZWZhdWx0RWxldmF0aW9uKTtcbiAgICB9XG5cbiAgICBASG9zdExpc3RlbmVyKCdtb3VzZWVudGVyJylcbiAgICBvbk1vdXNlRW50ZXIoKSB7XG4gICAgICAgIHRoaXMuc2V0RWxldmF0aW9uKHRoaXMucmFpc2VkRWxldmF0aW9uKTtcbiAgICB9XG5cbiAgICBASG9zdExpc3RlbmVyKCdtb3VzZWxlYXZlJylcbiAgICBvbk1vdXNlTGVhdmUoKSB7XG4gICAgICAgIHRoaXMuc2V0RWxldmF0aW9uKHRoaXMuZGVmYXVsdEVsZXZhdGlvbik7XG4gICAgfVxuXG4gICAgc2V0RWxldmF0aW9uKGFtb3VudDogbnVtYmVyKSB7XG4gICAgICAgIC8vIHJlbW92ZSBhbGwgZWxldmF0aW9uIGNsYXNzZXNcbiAgICAgICAgY29uc3QgY2xhc3Nlc1RvUmVtb3ZlID0gQXJyYXkuZnJvbSgoPEhUTUxFbGVtZW50PnRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50KS5jbGFzc0xpc3QpLmZpbHRlcihjID0+IGMuc3RhcnRzV2l0aCgnbWF0LWVsZXZhdGlvbi16JykpO1xuICAgICAgICBjbGFzc2VzVG9SZW1vdmUuZm9yRWFjaCgoYykgPT4ge1xuICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudCwgYyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIGFkZCB0aGUgZ2l2ZW4gZWxldmF0aW9uIGNsYXNzXG4gICAgICAgIGNvbnN0IG5ld0NsYXNzID0gYG1hdC1lbGV2YXRpb24teiR7YW1vdW50fWA7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsIG5ld0NsYXNzKTtcbiAgICB9XG59XG4iXX0=