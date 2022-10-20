import { Component, EventEmitter, Output } from '@angular/core';
import { locales } from '../../../i18n';
import * as i0 from "@angular/core";
import * as i1 from "../../../onboarding.service";
import * as i2 from "@angular/material/button";
import * as i3 from "@angular/material/icon";
export class NoDataComponent {
    constructor(service) {
        this.service = service;
        this.showPopup = new EventEmitter();
        this.locale = {};
        this.service._lang.subscribe((locale) => {
            this.locale = locales[locale].PROFILE;
        });
    }
    ngOnInit() {
    }
    onShowPopup() {
        this.showPopup.emit(true);
    }
}
NoDataComponent.ɵfac = function NoDataComponent_Factory(t) { return new (t || NoDataComponent)(i0.ɵɵdirectiveInject(i1.OnboardingService)); };
NoDataComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: NoDataComponent, selectors: [["lib-no-data"]], outputs: { showPopup: "showPopup" }, decls: 15, vars: 3, consts: [[1, "no-data-container"], [1, "no-data-spinner"], [1, "level-1"], [1, "level-2"], [1, "level-2-inner"], [1, "level-3"], [1, "level-3-inner"], ["role", "button", "mat-raised-button", "", "color", "primary", 1, "add-profil", 3, "click"]], template: function NoDataComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
        i0.ɵɵelement(4, "div", 4);
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(5, "div", 5);
        i0.ɵɵelement(6, "div", 6);
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(7, "h2");
        i0.ɵɵtext(8);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(9, "p");
        i0.ɵɵtext(10);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(11, "a", 7);
        i0.ɵɵlistener("click", function NoDataComponent_Template_a_click_11_listener() { return ctx.onShowPopup(); });
        i0.ɵɵtext(12);
        i0.ɵɵelementStart(13, "mat-icon");
        i0.ɵɵtext(14, "add");
        i0.ɵɵelementEnd()()();
    } if (rf & 2) {
        i0.ɵɵadvance(8);
        i0.ɵɵtextInterpolate1(" ", ctx.locale == null ? null : ctx.locale.YOU_DO_NOT_CURRENT, " ");
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate(ctx.locale == null ? null : ctx.locale.THANKS_TO_THE_STANDARD);
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate1(" ", ctx.locale == null ? null : ctx.locale.CREATE_PROFILE, " ");
    } }, dependencies: [i2.MatAnchor, i3.MatIcon], styles: [".no-data-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:20px;height:98vh;text-align:center}.no-data-container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-style:normal;font-weight:700;font-size:32px;line-height:120%}.no-data-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-style:normal;font-weight:400;font-size:16px;line-height:150%}.no-data-spinner[_ngcontent-%COMP%]{width:150px;height:150px;position:relative}.no-data-spinner[_ngcontent-%COMP%]   .level-1[_ngcontent-%COMP%]{width:100%;height:100%;border-radius:150px;background:#717373;filter:blur(5px)}.no-data-spinner[_ngcontent-%COMP%]   .level-2[_ngcontent-%COMP%]{width:100%;height:100%;display:flex;align-items:center;justify-content:center}.no-data-spinner[_ngcontent-%COMP%]   .level-2[_ngcontent-%COMP%]   .level-2-inner[_ngcontent-%COMP%]{width:112.5px;height:112.5px;border-radius:112.5px;background:#B8BABA;filter:blur(5px)}.no-data-spinner[_ngcontent-%COMP%]   .level-3[_ngcontent-%COMP%]{width:100%;height:100%;display:flex;align-items:center;justify-content:center;position:absolute;top:0}.no-data-spinner[_ngcontent-%COMP%]   .level-3[_ngcontent-%COMP%]   .level-3-inner[_ngcontent-%COMP%]{width:75px;height:75px;border-radius:75px;background:#FFFFFF}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NoDataComponent, [{
        type: Component,
        args: [{ selector: 'lib-no-data', template: "<div class=\"no-data-container\">\r\n  <div class=\"no-data-spinner\">\r\n    <div class=\"level-1\">\r\n      <div class=\"level-2\">\r\n        <div class=\"level-2-inner\">\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"level-3\">\r\n      <div class=\"level-3-inner\">\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <h2>\r\n    {{locale?.YOU_DO_NOT_CURRENT}}\r\n  </h2>\r\n  <p>{{locale?.THANKS_TO_THE_STANDARD}}</p>\r\n  <a role=\"button\" class=\"add-profil\" mat-raised-button color=\"primary\" (click)=\"onShowPopup()\">\r\n    {{locale?.CREATE_PROFILE}} <mat-icon>add</mat-icon>\r\n  </a>\r\n</div>", styles: [".no-data-container{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:20px;height:98vh;text-align:center}.no-data-container h2{font-style:normal;font-weight:700;font-size:32px;line-height:120%}.no-data-container p{font-style:normal;font-weight:400;font-size:16px;line-height:150%}.no-data-spinner{width:150px;height:150px;position:relative}.no-data-spinner .level-1{width:100%;height:100%;border-radius:150px;background:#717373;filter:blur(5px)}.no-data-spinner .level-2{width:100%;height:100%;display:flex;align-items:center;justify-content:center}.no-data-spinner .level-2 .level-2-inner{width:112.5px;height:112.5px;border-radius:112.5px;background:#B8BABA;filter:blur(5px)}.no-data-spinner .level-3{width:100%;height:100%;display:flex;align-items:center;justify-content:center;position:absolute;top:0}.no-data-spinner .level-3 .level-3-inner{width:75px;height:75px;border-radius:75px;background:#FFFFFF}\n"] }]
    }], function () { return [{ type: i1.OnboardingService }]; }, { showPopup: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm8tZGF0YS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9vbmJvYXJkaW5nL3NyYy9saWIvY29tcG9uZW50cy90ZW1wbGF0ZS9uby1kYXRhL25vLWRhdGEuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvb25ib2FyZGluZy9zcmMvbGliL2NvbXBvbmVudHMvdGVtcGxhdGUvbm8tZGF0YS9uby1kYXRhLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFVLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUd4RSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7OztBQU94QyxNQUFNLE9BQU8sZUFBZTtJQUcxQixZQUFtQixPQUEwQjtRQUExQixZQUFPLEdBQVAsT0FBTyxDQUFtQjtRQUZuQyxjQUFTLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQTtRQUM3QyxXQUFNLEdBQVEsRUFBRSxDQUFBO1FBRWQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsTUFBTSxFQUFFLEVBQUU7WUFDdEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBTyxDQUFDO1FBQ3hDLENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUVELFFBQVE7SUFDUixDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO0lBQzNCLENBQUM7OzhFQWRVLGVBQWU7a0VBQWYsZUFBZTtRQ1Y1Qiw4QkFBK0IsYUFBQSxhQUFBLGFBQUE7UUFJdkIseUJBQ007UUFDUixpQkFBTSxFQUFBO1FBRVIsOEJBQXFCO1FBQ25CLHlCQUNNO1FBQ1IsaUJBQU0sRUFBQTtRQUVSLDBCQUFJO1FBQ0YsWUFDRjtRQUFBLGlCQUFLO1FBQ0wseUJBQUc7UUFBQSxhQUFrQztRQUFBLGlCQUFJO1FBQ3pDLDZCQUE4RjtRQUF4Qix3RkFBUyxpQkFBYSxJQUFDO1FBQzNGLGFBQTJCO1FBQUEsaUNBQVU7UUFBQSxvQkFBRztRQUFBLGlCQUFXLEVBQUEsRUFBQTs7UUFKbkQsZUFDRjtRQURFLDBGQUNGO1FBQ0csZUFBa0M7UUFBbEMsbUZBQWtDO1FBRW5DLGVBQTJCO1FBQTNCLHNGQUEyQjs7dUZEUmxCLGVBQWU7Y0FMM0IsU0FBUzsyQkFDRSxhQUFhO29FQUtiLFNBQVM7a0JBQWxCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgT25Jbml0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IE9uYm9hcmRpbmdTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vb25ib2FyZGluZy5zZXJ2aWNlJztcclxuaW1wb3J0IHsgbG9jYWxlcyB9IGZyb20gJy4uLy4uLy4uL2kxOG4nO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdsaWItbm8tZGF0YScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL25vLWRhdGEuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL25vLWRhdGEuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTm9EYXRhQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBAT3V0cHV0KCkgc2hvd1BvcHVwID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KClcclxuICBsb2NhbGU6IGFueSA9IHt9XHJcbiAgY29uc3RydWN0b3IocHVibGljIHNlcnZpY2U6IE9uYm9hcmRpbmdTZXJ2aWNlKSB7XHJcbiAgICB0aGlzLnNlcnZpY2UuX2xhbmcuc3Vic2NyaWJlKChsb2NhbGUpID0+IHtcclxuICAgICAgdGhpcy5sb2NhbGUgPSBsb2NhbGVzW2xvY2FsZV0uUFJPRklMRTtcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICB9XHJcblxyXG4gIG9uU2hvd1BvcHVwKCkge1xyXG4gICAgdGhpcy5zaG93UG9wdXAuZW1pdCh0cnVlKVxyXG4gIH1cclxuXHJcbn1cclxuIiwiPGRpdiBjbGFzcz1cIm5vLWRhdGEtY29udGFpbmVyXCI+XHJcbiAgPGRpdiBjbGFzcz1cIm5vLWRhdGEtc3Bpbm5lclwiPlxyXG4gICAgPGRpdiBjbGFzcz1cImxldmVsLTFcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cImxldmVsLTJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwibGV2ZWwtMi1pbm5lclwiPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cImxldmVsLTNcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cImxldmVsLTMtaW5uZXJcIj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuICA8aDI+XHJcbiAgICB7e2xvY2FsZT8uWU9VX0RPX05PVF9DVVJSRU5UfX1cclxuICA8L2gyPlxyXG4gIDxwPnt7bG9jYWxlPy5USEFOS1NfVE9fVEhFX1NUQU5EQVJEfX08L3A+XHJcbiAgPGEgcm9sZT1cImJ1dHRvblwiIGNsYXNzPVwiYWRkLXByb2ZpbFwiIG1hdC1yYWlzZWQtYnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiIChjbGljayk9XCJvblNob3dQb3B1cCgpXCI+XHJcbiAgICB7e2xvY2FsZT8uQ1JFQVRFX1BST0ZJTEV9fSA8bWF0LWljb24+YWRkPC9tYXQtaWNvbj5cclxuICA8L2E+XHJcbjwvZGl2PiJdfQ==