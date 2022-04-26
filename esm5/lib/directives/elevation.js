import { Directive, HostListener, Input } from '@angular/core';
import * as i0 from "@angular/core";
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
    MaterialElevationDirective.ɵfac = function MaterialElevationDirective_Factory(t) { return new (t || MaterialElevationDirective)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.Renderer2)); };
    MaterialElevationDirective.ɵdir = i0.ɵɵdefineDirective({ type: MaterialElevationDirective, selectors: [["", "appMaterialElevation", ""]], hostBindings: function MaterialElevationDirective_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("mouseenter", function MaterialElevationDirective_mouseenter_HostBindingHandler() { return ctx.onMouseEnter(); })("mouseleave", function MaterialElevationDirective_mouseleave_HostBindingHandler() { return ctx.onMouseLeave(); });
        } }, inputs: { defaultElevation: "defaultElevation", raisedElevation: "raisedElevation" }, features: [i0.ɵɵNgOnChangesFeature] });
    return MaterialElevationDirective;
}());
export { MaterialElevationDirective };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWxldmF0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8vb25ib2FyZGluZy8iLCJzb3VyY2VzIjpbImxpYi9kaXJlY3RpdmVzL2VsZXZhdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFjLFlBQVksRUFBRSxLQUFLLEVBQXVDLE1BQU0sZUFBZSxDQUFDOztBQUVoSDtJQVdJLG9DQUNZLE9BQW1CLEVBQ25CLFFBQW1CO1FBRG5CLFlBQU8sR0FBUCxPQUFPLENBQVk7UUFDbkIsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQVAvQixxQkFBZ0IsR0FBRyxDQUFDLENBQUM7UUFHckIsb0JBQWUsR0FBRyxDQUFDLENBQUM7UUFNaEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBRUQsZ0RBQVcsR0FBWCxVQUFZLFFBQXVCO1FBQy9CLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUdELGlEQUFZLEdBRFo7UUFFSSxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBR0QsaURBQVksR0FEWjtRQUVJLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUVELGlEQUFZLEdBQVosVUFBYSxNQUFjO1FBQTNCLGlCQVVDO1FBVEcsK0JBQStCO1FBQy9CLElBQU0sZUFBZSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQWUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFjLENBQUMsU0FBUyxDQUFDLENBQUMsTUFBTSxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxpQkFBaUIsQ0FBQyxFQUEvQixDQUErQixDQUFDLENBQUM7UUFDckksZUFBZSxDQUFDLE9BQU8sQ0FBQyxVQUFDLENBQUM7WUFDdEIsS0FBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsS0FBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDN0QsQ0FBQyxDQUFDLENBQUM7UUFFSCxnQ0FBZ0M7UUFDaEMsSUFBTSxRQUFRLEdBQUcsb0JBQWtCLE1BQVEsQ0FBQztRQUM1QyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxRQUFRLENBQUMsQ0FBQztJQUNqRSxDQUFDO3dHQXZDUSwwQkFBMEI7bUVBQTFCLDBCQUEwQjs7O3FDQUx2QztDQTZDQyxBQTNDRCxJQTJDQztTQXhDWSwwQkFBMEI7a0RBQTFCLDBCQUEwQjtjQUh0QyxTQUFTO2VBQUM7Z0JBQ1AsUUFBUSxFQUFFLHdCQUF3QjthQUNyQzs7a0JBR0ksS0FBSzs7a0JBR0wsS0FBSzs7a0JBY0wsWUFBWTttQkFBQyxZQUFZOztrQkFLekIsWUFBWTttQkFBQyxZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBIb3N0TGlzdGVuZXIsIElucHV0LCBSZW5kZXJlcjIsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgICBzZWxlY3RvcjogJ1thcHBNYXRlcmlhbEVsZXZhdGlvbl0nXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNYXRlcmlhbEVsZXZhdGlvbkRpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIGRlZmF1bHRFbGV2YXRpb24gPSAyO1xyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICByYWlzZWRFbGV2YXRpb24gPSA4O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgZWxlbWVudDogRWxlbWVudFJlZixcclxuICAgICAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjJcclxuICAgICkge1xyXG4gICAgICAgIHRoaXMuc2V0RWxldmF0aW9uKHRoaXMuZGVmYXVsdEVsZXZhdGlvbik7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkNoYW5nZXMoX2NoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcclxuICAgICAgICB0aGlzLnNldEVsZXZhdGlvbih0aGlzLmRlZmF1bHRFbGV2YXRpb24pO1xyXG4gICAgfVxyXG5cclxuICAgIEBIb3N0TGlzdGVuZXIoJ21vdXNlZW50ZXInKVxyXG4gICAgb25Nb3VzZUVudGVyKCkge1xyXG4gICAgICAgIHRoaXMuc2V0RWxldmF0aW9uKHRoaXMucmFpc2VkRWxldmF0aW9uKTtcclxuICAgIH1cclxuXHJcbiAgICBASG9zdExpc3RlbmVyKCdtb3VzZWxlYXZlJylcclxuICAgIG9uTW91c2VMZWF2ZSgpIHtcclxuICAgICAgICB0aGlzLnNldEVsZXZhdGlvbih0aGlzLmRlZmF1bHRFbGV2YXRpb24pO1xyXG4gICAgfVxyXG5cclxuICAgIHNldEVsZXZhdGlvbihhbW91bnQ6IG51bWJlcikge1xyXG4gICAgICAgIC8vIHJlbW92ZSBhbGwgZWxldmF0aW9uIGNsYXNzZXNcclxuICAgICAgICBjb25zdCBjbGFzc2VzVG9SZW1vdmUgPSBBcnJheS5mcm9tKCg8SFRNTEVsZW1lbnQ+dGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQpLmNsYXNzTGlzdCkuZmlsdGVyKGMgPT4gYy5zdGFydHNXaXRoKCdtYXQtZWxldmF0aW9uLXonKSk7XHJcbiAgICAgICAgY2xhc3Nlc1RvUmVtb3ZlLmZvckVhY2goKGMpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudCwgYyk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIGFkZCB0aGUgZ2l2ZW4gZWxldmF0aW9uIGNsYXNzXHJcbiAgICAgICAgY29uc3QgbmV3Q2xhc3MgPSBgbWF0LWVsZXZhdGlvbi16JHthbW91bnR9YDtcclxuICAgICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LCBuZXdDbGFzcyk7XHJcbiAgICB9XHJcbn1cclxuIl19