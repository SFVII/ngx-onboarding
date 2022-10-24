import { Component, Input } from '@angular/core';
import { animate, state, style, transition, trigger } from "@angular/animations";
import * as i0 from "@angular/core";
import * as i1 from "ngx-lottie";
export const FadeInOut = trigger('fadeInOut', [
    state('loaded', style({
        opacity: 0,
        'z-index': -1
    })),
    state('loading', style({
        opacity: 1,
    })),
    transition('* => *', animate('500ms ease-out')),
]);
export class NowboardLoaderComponent {
    constructor() {
        this.state = true;
        this._state = 'loading';
        this.options = {
            path: '/assets/loader/light.json',
        };
    }
    set State(value) {
        this._state = value;
    }
    animationCreated(animationItem) {
    }
    ngOnInit() {
    }
    ngOnChanges(changes) {
        if (changes && changes.state !== undefined) {
            this.State = changes.state.currentValue ? 'loading' : 'loaded';
        }
    }
}
NowboardLoaderComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.6", ngImport: i0, type: NowboardLoaderComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
NowboardLoaderComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.6", type: NowboardLoaderComponent, selector: "nowboard-loader", inputs: { state: "state" }, usesOnChanges: true, ngImport: i0, template: "<div class=\"nowboard-loader\" [@fadeInOut]=\"_state\">\r\n  <ng-lottie [options]=\"options\" (animationCreated)=\"animationCreated($event)\" width=\"400\"></ng-lottie>\r\n</div>\r\n", styles: [".loader{margin:0 auto;width:60px;height:50px;text-align:center;font-size:10px;position:absolute;top:50%;left:50%;-webkit-transform:translateY(-50%) translateX(-50%)}.loader>div{height:100%;width:8px;display:inline-block;float:left;margin-left:2px;animation:delay .8s infinite ease-in-out}.loader .bar1{background-color:#754fa0}.loader .bar2{background-color:#09b7bf;animation-delay:-.7s}.loader .bar3{background-color:#90d36b;animation-delay:-.6s}.loader .bar4{background-color:#f2d40d;animation-delay:-.5s}.loader .bar5{background-color:#fcb12b;animation-delay:-.4s}.loader .bar6{background-color:#ed1b72;animation-delay:-.3s}@keyframes delay{0%,40%,to{transform:scaleY(.05);-webkit-transform:scaleY(.05)}20%{transform:scaleY(1);-webkit-transform:scaleY(1)}}\n"], dependencies: [{ kind: "component", type: i1.LottieComponent, selector: "ng-lottie", inputs: ["width", "height"] }], animations: [
        FadeInOut
    ] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.6", ngImport: i0, type: NowboardLoaderComponent, decorators: [{
            type: Component,
            args: [{ selector: 'nowboard-loader', animations: [
                        FadeInOut
                    ], template: "<div class=\"nowboard-loader\" [@fadeInOut]=\"_state\">\r\n  <ng-lottie [options]=\"options\" (animationCreated)=\"animationCreated($event)\" width=\"400\"></ng-lottie>\r\n</div>\r\n", styles: [".loader{margin:0 auto;width:60px;height:50px;text-align:center;font-size:10px;position:absolute;top:50%;left:50%;-webkit-transform:translateY(-50%) translateX(-50%)}.loader>div{height:100%;width:8px;display:inline-block;float:left;margin-left:2px;animation:delay .8s infinite ease-in-out}.loader .bar1{background-color:#754fa0}.loader .bar2{background-color:#09b7bf;animation-delay:-.7s}.loader .bar3{background-color:#90d36b;animation-delay:-.6s}.loader .bar4{background-color:#f2d40d;animation-delay:-.5s}.loader .bar5{background-color:#fcb12b;animation-delay:-.4s}.loader .bar6{background-color:#ed1b72;animation-delay:-.3s}@keyframes delay{0%,40%,to{transform:scaleY(.05);-webkit-transform:scaleY(.05)}20%{transform:scaleY(1);-webkit-transform:scaleY(1)}}\n"] }]
        }], ctorParameters: function () { return []; }, propDecorators: { state: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm93Ym9hcmQtbG9hZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL29uYm9hcmRpbmcvc3JjL2xpYi9jb21tb24vbm93Ym9hcmQtbG9hZGVyL25vd2JvYXJkLWxvYWRlci5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9vbmJvYXJkaW5nL3NyYy9saWIvY29tbW9uL25vd2JvYXJkLWxvYWRlci9ub3dib2FyZC1sb2FkZXIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQW9DLE1BQU0sZUFBZSxDQUFDO0FBQ25GLE9BQU8sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLE1BQU0scUJBQXFCLENBQUM7OztBQUlqRixNQUFNLENBQUMsTUFBTSxTQUFTLEdBQUcsT0FBTyxDQUFDLFdBQVcsRUFBRTtJQUM1QyxLQUFLLENBQ0gsUUFBUSxFQUNSLEtBQUssQ0FBQztRQUNKLE9BQU8sRUFBRSxDQUFDO1FBQ1YsU0FBUyxFQUFFLENBQUMsQ0FBQztLQUNkLENBQUMsQ0FDSDtJQUNELEtBQUssQ0FDSCxTQUFTLEVBQ1QsS0FBSyxDQUFDO1FBQ0osT0FBTyxFQUFFLENBQUM7S0FDWCxDQUFDLENBQ0g7SUFDRCxVQUFVLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0NBQ2hELENBQUMsQ0FBQTtBQVVGLE1BQU0sT0FBTyx1QkFBdUI7SUFPbEM7UUFOUyxVQUFLLEdBQVksSUFBSSxDQUFDO1FBQ3hCLFdBQU0sR0FBeUIsU0FBUyxDQUFDO1FBQ2hELFlBQU8sR0FBcUI7WUFDMUIsSUFBSSxFQUFFLDJCQUEyQjtTQUNsQyxDQUFDO0lBR0YsQ0FBQztJQUVELElBQUksS0FBSyxDQUFDLEtBQTJCO1FBQ25DLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFBO0lBQ3JCLENBQUM7SUFFRCxnQkFBZ0IsQ0FBQyxhQUE0QjtJQUM3QyxDQUFDO0lBRUQsUUFBUTtJQUVSLENBQUM7SUFFRCxXQUFXLENBQUMsT0FBc0I7UUFDaEMsSUFBSSxPQUFPLElBQUksT0FBTyxDQUFDLEtBQUssS0FBSyxTQUFTLEVBQUU7WUFDMUMsSUFBSSxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUM7U0FDaEU7SUFDSCxDQUFDOztvSEF6QlUsdUJBQXVCO3dHQUF2Qix1QkFBdUIsd0dDOUJwQyx3TEFHQSwwNEJEdUJjO1FBQ1YsU0FBUztLQUNWOzJGQUVVLHVCQUF1QjtrQkFSbkMsU0FBUzsrQkFDRSxpQkFBaUIsY0FHZjt3QkFDVixTQUFTO3FCQUNWOzBFQUdRLEtBQUs7c0JBQWIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uQ2hhbmdlcywgT25Jbml0LCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IGFuaW1hdGUsIHN0YXRlLCBzdHlsZSwgdHJhbnNpdGlvbiwgdHJpZ2dlciB9IGZyb20gXCJAYW5ndWxhci9hbmltYXRpb25zXCI7XHJcbmltcG9ydCB7IEFuaW1hdGlvbkl0ZW0gfSBmcm9tIFwibmd4LWxvdHRpZS9saWIvc3ltYm9sc1wiO1xyXG5pbXBvcnQgeyBBbmltYXRpb25PcHRpb25zIH0gZnJvbSBcIm5neC1sb3R0aWVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBGYWRlSW5PdXQgPSB0cmlnZ2VyKCdmYWRlSW5PdXQnLCBbXHJcbiAgc3RhdGUoXHJcbiAgICAnbG9hZGVkJyxcclxuICAgIHN0eWxlKHtcclxuICAgICAgb3BhY2l0eTogMCxcclxuICAgICAgJ3otaW5kZXgnOiAtMVxyXG4gICAgfSlcclxuICApLFxyXG4gIHN0YXRlKFxyXG4gICAgJ2xvYWRpbmcnLFxyXG4gICAgc3R5bGUoe1xyXG4gICAgICBvcGFjaXR5OiAxLFxyXG4gICAgfSlcclxuICApLFxyXG4gIHRyYW5zaXRpb24oJyogPT4gKicsIGFuaW1hdGUoJzUwMG1zIGVhc2Utb3V0JykpLFxyXG5dKVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdub3dib2FyZC1sb2FkZXInLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9ub3dib2FyZC1sb2FkZXIuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL25vd2JvYXJkLWxvYWRlci5jb21wb25lbnQuc2NzcyddLFxyXG4gIGFuaW1hdGlvbnM6IFtcclxuICAgIEZhZGVJbk91dFxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIE5vd2JvYXJkTG9hZGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xyXG4gIEBJbnB1dCgpIHN0YXRlOiBib29sZWFuID0gdHJ1ZTtcclxuICBwdWJsaWMgX3N0YXRlOiAnbG9hZGVkJyB8ICdsb2FkaW5nJyA9ICdsb2FkaW5nJztcclxuICBvcHRpb25zOiBBbmltYXRpb25PcHRpb25zID0ge1xyXG4gICAgcGF0aDogJy9hc3NldHMvbG9hZGVyL2xpZ2h0Lmpzb24nLFxyXG4gIH07XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gIH1cclxuXHJcbiAgc2V0IFN0YXRlKHZhbHVlOiAnbG9hZGVkJyB8ICdsb2FkaW5nJykge1xyXG4gICAgdGhpcy5fc3RhdGUgPSB2YWx1ZVxyXG4gIH1cclxuXHJcbiAgYW5pbWF0aW9uQ3JlYXRlZChhbmltYXRpb25JdGVtOiBBbmltYXRpb25JdGVtKTogdm9pZCB7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuXHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XHJcbiAgICBpZiAoY2hhbmdlcyAmJiBjaGFuZ2VzLnN0YXRlICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgdGhpcy5TdGF0ZSA9IGNoYW5nZXMuc3RhdGUuY3VycmVudFZhbHVlID8gJ2xvYWRpbmcnIDogJ2xvYWRlZCc7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufVxyXG4iLCI8ZGl2IGNsYXNzPVwibm93Ym9hcmQtbG9hZGVyXCIgW0BmYWRlSW5PdXRdPVwiX3N0YXRlXCI+XHJcbiAgPG5nLWxvdHRpZSBbb3B0aW9uc109XCJvcHRpb25zXCIgKGFuaW1hdGlvbkNyZWF0ZWQpPVwiYW5pbWF0aW9uQ3JlYXRlZCgkZXZlbnQpXCIgd2lkdGg9XCI0MDBcIj48L25nLWxvdHRpZT5cclxuPC9kaXY+XHJcbiJdfQ==