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
NowboardLoaderComponent.ɵfac = function NowboardLoaderComponent_Factory(t) { return new (t || NowboardLoaderComponent)(); };
NowboardLoaderComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: NowboardLoaderComponent, selectors: [["nowboard-loader"]], inputs: { state: "state" }, features: [i0.ɵɵNgOnChangesFeature], decls: 2, vars: 2, consts: [[1, "nowboard-loader"], ["width", "400", 3, "options", "animationCreated"]], template: function NowboardLoaderComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0)(1, "ng-lottie", 1);
        i0.ɵɵlistener("animationCreated", function NowboardLoaderComponent_Template_ng_lottie_animationCreated_1_listener($event) { return ctx.animationCreated($event); });
        i0.ɵɵelementEnd()();
    } if (rf & 2) {
        i0.ɵɵproperty("@fadeInOut", ctx._state);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("options", ctx.options);
    } }, dependencies: [i1.LottieComponent], styles: [".loader[_ngcontent-%COMP%]{margin:0 auto;width:60px;height:50px;text-align:center;font-size:10px;position:absolute;top:50%;left:50%;-webkit-transform:translateY(-50%) translateX(-50%)}.loader[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{height:100%;width:8px;display:inline-block;float:left;margin-left:2px;animation:delay .8s infinite ease-in-out}.loader[_ngcontent-%COMP%]   .bar1[_ngcontent-%COMP%]{background-color:#754fa0}.loader[_ngcontent-%COMP%]   .bar2[_ngcontent-%COMP%]{background-color:#09b7bf;animation-delay:-.7s}.loader[_ngcontent-%COMP%]   .bar3[_ngcontent-%COMP%]{background-color:#90d36b;animation-delay:-.6s}.loader[_ngcontent-%COMP%]   .bar4[_ngcontent-%COMP%]{background-color:#f2d40d;animation-delay:-.5s}.loader[_ngcontent-%COMP%]   .bar5[_ngcontent-%COMP%]{background-color:#fcb12b;animation-delay:-.4s}.loader[_ngcontent-%COMP%]   .bar6[_ngcontent-%COMP%]{background-color:#ed1b72;animation-delay:-.3s}@keyframes delay{0%,40%,to{transform:scaleY(.05);-webkit-transform:scaleY(.05)}20%{transform:scaleY(1);-webkit-transform:scaleY(1)}}"], data: { animation: [
            FadeInOut
        ] } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NowboardLoaderComponent, [{
        type: Component,
        args: [{ selector: 'nowboard-loader', animations: [
                    FadeInOut
                ], template: "<div class=\"nowboard-loader\" [@fadeInOut]=\"_state\">\r\n  <ng-lottie [options]=\"options\" (animationCreated)=\"animationCreated($event)\" width=\"400\"></ng-lottie>\r\n</div>\r\n", styles: [".loader{margin:0 auto;width:60px;height:50px;text-align:center;font-size:10px;position:absolute;top:50%;left:50%;-webkit-transform:translateY(-50%) translateX(-50%)}.loader>div{height:100%;width:8px;display:inline-block;float:left;margin-left:2px;animation:delay .8s infinite ease-in-out}.loader .bar1{background-color:#754fa0}.loader .bar2{background-color:#09b7bf;animation-delay:-.7s}.loader .bar3{background-color:#90d36b;animation-delay:-.6s}.loader .bar4{background-color:#f2d40d;animation-delay:-.5s}.loader .bar5{background-color:#fcb12b;animation-delay:-.4s}.loader .bar6{background-color:#ed1b72;animation-delay:-.3s}@keyframes delay{0%,40%,to{transform:scaleY(.05);-webkit-transform:scaleY(.05)}20%{transform:scaleY(1);-webkit-transform:scaleY(1)}}\n"] }]
    }], function () { return []; }, { state: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm93Ym9hcmQtbG9hZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL29uYm9hcmRpbmcvc3JjL2xpYi9jb21tb24vbm93Ym9hcmQtbG9hZGVyL25vd2JvYXJkLWxvYWRlci5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9vbmJvYXJkaW5nL3NyYy9saWIvY29tbW9uL25vd2JvYXJkLWxvYWRlci9ub3dib2FyZC1sb2FkZXIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQW9DLE1BQU0sZUFBZSxDQUFDO0FBQ25GLE9BQU8sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLE1BQU0scUJBQXFCLENBQUM7OztBQUlqRixNQUFNLENBQUMsTUFBTSxTQUFTLEdBQUcsT0FBTyxDQUFDLFdBQVcsRUFBRTtJQUM1QyxLQUFLLENBQ0gsUUFBUSxFQUNSLEtBQUssQ0FBQztRQUNKLE9BQU8sRUFBRSxDQUFDO1FBQ1YsU0FBUyxFQUFFLENBQUMsQ0FBQztLQUNkLENBQUMsQ0FDSDtJQUNELEtBQUssQ0FDSCxTQUFTLEVBQ1QsS0FBSyxDQUFDO1FBQ0osT0FBTyxFQUFFLENBQUM7S0FDWCxDQUFDLENBQ0g7SUFDRCxVQUFVLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0NBQ2hELENBQUMsQ0FBQTtBQVVGLE1BQU0sT0FBTyx1QkFBdUI7SUFPbEM7UUFOUyxVQUFLLEdBQVksSUFBSSxDQUFDO1FBQ3hCLFdBQU0sR0FBeUIsU0FBUyxDQUFDO1FBQ2hELFlBQU8sR0FBcUI7WUFDMUIsSUFBSSxFQUFFLDJCQUEyQjtTQUNsQyxDQUFDO0lBR0YsQ0FBQztJQUVELElBQUksS0FBSyxDQUFDLEtBQTJCO1FBQ25DLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFBO0lBQ3JCLENBQUM7SUFFRCxnQkFBZ0IsQ0FBQyxhQUE0QjtJQUM3QyxDQUFDO0lBRUQsUUFBUTtJQUVSLENBQUM7SUFFRCxXQUFXLENBQUMsT0FBc0I7UUFDaEMsSUFBSSxPQUFPLElBQUksT0FBTyxDQUFDLEtBQUssS0FBSyxTQUFTLEVBQUU7WUFDMUMsSUFBSSxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUM7U0FDaEU7SUFDSCxDQUFDOzs4RkF6QlUsdUJBQXVCOzBFQUF2Qix1QkFBdUI7UUM5QnBDLDhCQUFtRCxtQkFBQTtRQUNsQixtSUFBb0IsNEJBQXdCLElBQUM7UUFBYSxpQkFBWSxFQUFBOztRQUQxRSx1Q0FBcUI7UUFDckMsZUFBbUI7UUFBbkIscUNBQW1CO2duQ0R5QmxCO1lBQ1YsU0FBUztTQUNWO3VGQUVVLHVCQUF1QjtjQVJuQyxTQUFTOzJCQUNFLGlCQUFpQixjQUdmO29CQUNWLFNBQVM7aUJBQ1Y7c0NBR1EsS0FBSztrQkFBYixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25DaGFuZ2VzLCBPbkluaXQsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgYW5pbWF0ZSwgc3RhdGUsIHN0eWxlLCB0cmFuc2l0aW9uLCB0cmlnZ2VyIH0gZnJvbSBcIkBhbmd1bGFyL2FuaW1hdGlvbnNcIjtcclxuaW1wb3J0IHsgQW5pbWF0aW9uSXRlbSB9IGZyb20gXCJuZ3gtbG90dGllL2xpYi9zeW1ib2xzXCI7XHJcbmltcG9ydCB7IEFuaW1hdGlvbk9wdGlvbnMgfSBmcm9tIFwibmd4LWxvdHRpZVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEZhZGVJbk91dCA9IHRyaWdnZXIoJ2ZhZGVJbk91dCcsIFtcclxuICBzdGF0ZShcclxuICAgICdsb2FkZWQnLFxyXG4gICAgc3R5bGUoe1xyXG4gICAgICBvcGFjaXR5OiAwLFxyXG4gICAgICAnei1pbmRleCc6IC0xXHJcbiAgICB9KVxyXG4gICksXHJcbiAgc3RhdGUoXHJcbiAgICAnbG9hZGluZycsXHJcbiAgICBzdHlsZSh7XHJcbiAgICAgIG9wYWNpdHk6IDEsXHJcbiAgICB9KVxyXG4gICksXHJcbiAgdHJhbnNpdGlvbignKiA9PiAqJywgYW5pbWF0ZSgnNTAwbXMgZWFzZS1vdXQnKSksXHJcbl0pXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ25vd2JvYXJkLWxvYWRlcicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL25vd2JvYXJkLWxvYWRlci5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vbm93Ym9hcmQtbG9hZGVyLmNvbXBvbmVudC5zY3NzJ10sXHJcbiAgYW5pbWF0aW9uczogW1xyXG4gICAgRmFkZUluT3V0XHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTm93Ym9hcmRMb2FkZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XHJcbiAgQElucHV0KCkgc3RhdGU6IGJvb2xlYW4gPSB0cnVlO1xyXG4gIHB1YmxpYyBfc3RhdGU6ICdsb2FkZWQnIHwgJ2xvYWRpbmcnID0gJ2xvYWRpbmcnO1xyXG4gIG9wdGlvbnM6IEFuaW1hdGlvbk9wdGlvbnMgPSB7XHJcbiAgICBwYXRoOiAnL2Fzc2V0cy9sb2FkZXIvbGlnaHQuanNvbicsXHJcbiAgfTtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgfVxyXG5cclxuICBzZXQgU3RhdGUodmFsdWU6ICdsb2FkZWQnIHwgJ2xvYWRpbmcnKSB7XHJcbiAgICB0aGlzLl9zdGF0ZSA9IHZhbHVlXHJcbiAgfVxyXG5cclxuICBhbmltYXRpb25DcmVhdGVkKGFuaW1hdGlvbkl0ZW06IEFuaW1hdGlvbkl0ZW0pOiB2b2lkIHtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG5cclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcclxuICAgIGlmIChjaGFuZ2VzICYmIGNoYW5nZXMuc3RhdGUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICB0aGlzLlN0YXRlID0gY2hhbmdlcy5zdGF0ZS5jdXJyZW50VmFsdWUgPyAnbG9hZGluZycgOiAnbG9hZGVkJztcclxuICAgIH1cclxuICB9XHJcblxyXG59XHJcbiIsIjxkaXYgY2xhc3M9XCJub3dib2FyZC1sb2FkZXJcIiBbQGZhZGVJbk91dF09XCJfc3RhdGVcIj5cclxuICA8bmctbG90dGllIFtvcHRpb25zXT1cIm9wdGlvbnNcIiAoYW5pbWF0aW9uQ3JlYXRlZCk9XCJhbmltYXRpb25DcmVhdGVkKCRldmVudClcIiB3aWR0aD1cIjQwMFwiPjwvbmctbG90dGllPlxyXG48L2Rpdj5cclxuIl19