import { Component, EventEmitter, Output } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/button";
import * as i2 from "@angular/material/icon";
export class NoDataComponent {
    constructor() {
        this.showPopup = new EventEmitter();
    }
    ngOnInit() {
    }
    onShowPopup() {
        this.showPopup.emit(true);
    }
}
NoDataComponent.ɵfac = function NoDataComponent_Factory(t) { return new (t || NoDataComponent)(); };
NoDataComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: NoDataComponent, selectors: [["lib-no-data"]], outputs: { showPopup: "showPopup" }, decls: 15, vars: 0, consts: [[1, "no-data-container"], [1, "no-data-spinner"], [1, "level-1"], [1, "level-2"], [1, "level-2-inner"], [1, "level-3"], [1, "level-3-inner"], ["role", "button", "mat-raised-button", "", "color", "primary", 1, "add-profil", 3, "click"]], template: function NoDataComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
        i0.ɵɵelement(4, "div", 4);
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(5, "div", 5);
        i0.ɵɵelement(6, "div", 6);
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(7, "h2");
        i0.ɵɵtext(8, " Vous n\u2019avez actuellement aucun profil type ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(9, "p");
        i0.ɵɵtext(10, "Gr\u00E2ce aux profils types vous pourrez cr\u00E9er des mod\u00E8le de formulaire pour l\u2019arriv\u00E9e de vos salari\u00E9s.");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(11, "a", 7);
        i0.ɵɵlistener("click", function NoDataComponent_Template_a_click_11_listener() { return ctx.onShowPopup(); });
        i0.ɵɵtext(12, " Cr\u00E9er profil ");
        i0.ɵɵelementStart(13, "mat-icon");
        i0.ɵɵtext(14, "add");
        i0.ɵɵelementEnd()()();
    } }, directives: [i1.MatAnchor, i2.MatIcon], styles: [".no-data-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:20px;height:98vh;text-align:center}.no-data-container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-style:normal;font-weight:700;font-size:32px;line-height:120%}.no-data-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-style:normal;font-weight:400;font-size:16px;line-height:150%}.no-data-spinner[_ngcontent-%COMP%]{width:150px;height:150px;position:relative}.no-data-spinner[_ngcontent-%COMP%]   .level-1[_ngcontent-%COMP%]{width:100%;height:100%;border-radius:150px;background:#717373;filter:blur(5px)}.no-data-spinner[_ngcontent-%COMP%]   .level-2[_ngcontent-%COMP%]{width:100%;height:100%;display:flex;align-items:center;justify-content:center}.no-data-spinner[_ngcontent-%COMP%]   .level-2[_ngcontent-%COMP%]   .level-2-inner[_ngcontent-%COMP%]{width:112.5px;height:112.5px;border-radius:112.5px;background:#B8BABA;filter:blur(5px)}.no-data-spinner[_ngcontent-%COMP%]   .level-3[_ngcontent-%COMP%]{width:100%;height:100%;display:flex;align-items:center;justify-content:center;position:absolute;top:0}.no-data-spinner[_ngcontent-%COMP%]   .level-3[_ngcontent-%COMP%]   .level-3-inner[_ngcontent-%COMP%]{width:75px;height:75px;border-radius:75px;background:#FFFFFF}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NoDataComponent, [{
        type: Component,
        args: [{ selector: 'lib-no-data', template: "<div class=\"no-data-container\">\n  <div class=\"no-data-spinner\">\n    <div class=\"level-1\">\n      <div class=\"level-2\">\n        <div class=\"level-2-inner\">\n        </div>\n      </div>\n    </div>\n    <div class=\"level-3\">\n      <div class=\"level-3-inner\">\n      </div>\n    </div>\n  </div>\n  <h2>\n    Vous n\u2019avez actuellement aucun profil type\n  </h2>\n  <p>Gr\u00E2ce aux profils types vous pourrez cr\u00E9er des mod\u00E8le de formulaire pour l\u2019arriv\u00E9e de vos salari\u00E9s.</p>\n  <a role=\"button\" class=\"add-profil\" mat-raised-button color=\"primary\" (click)=\"onShowPopup()\">\n    Cr\u00E9er profil <mat-icon>add</mat-icon>\n  </a>\n</div>", styles: [".no-data-container{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:20px;height:98vh;text-align:center}.no-data-container h2{font-style:normal;font-weight:700;font-size:32px;line-height:120%}.no-data-container p{font-style:normal;font-weight:400;font-size:16px;line-height:150%}.no-data-spinner{width:150px;height:150px;position:relative}.no-data-spinner .level-1{width:100%;height:100%;border-radius:150px;background:#717373;filter:blur(5px)}.no-data-spinner .level-2{width:100%;height:100%;display:flex;align-items:center;justify-content:center}.no-data-spinner .level-2 .level-2-inner{width:112.5px;height:112.5px;border-radius:112.5px;background:#B8BABA;filter:blur(5px)}.no-data-spinner .level-3{width:100%;height:100%;display:flex;align-items:center;justify-content:center;position:absolute;top:0}.no-data-spinner .level-3 .level-3-inner{width:75px;height:75px;border-radius:75px;background:#FFFFFF}\n"] }]
    }], function () { return []; }, { showPopup: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm8tZGF0YS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9vbmJvYXJkaW5nL3NyYy9saWIvY29tcG9uZW50cy90ZW1wbGF0ZS9uby1kYXRhL25vLWRhdGEuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvb25ib2FyZGluZy9zcmMvbGliL2NvbXBvbmVudHMvdGVtcGxhdGUvbm8tZGF0YS9uby1kYXRhLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFVLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQzs7OztBQU94RSxNQUFNLE9BQU8sZUFBZTtJQUUxQjtRQURVLGNBQVMsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFBO0lBQzdCLENBQUM7SUFFakIsUUFBUTtJQUNSLENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7SUFDM0IsQ0FBQzs7OEVBVFUsZUFBZTtrRUFBZixlQUFlO1FDUDVCLDhCQUErQixhQUFBLGFBQUEsYUFBQTtRQUl2Qix5QkFDTTtRQUNSLGlCQUFNLEVBQUE7UUFFUiw4QkFBcUI7UUFDbkIseUJBQ007UUFDUixpQkFBTSxFQUFBO1FBRVIsMEJBQUk7UUFDRixpRUFDRjtRQUFBLGlCQUFLO1FBQ0wseUJBQUc7UUFBQSxrSkFBbUc7UUFBQSxpQkFBSTtRQUMxRyw2QkFBOEY7UUFBeEIsd0ZBQVMsaUJBQWEsSUFBQztRQUMzRixvQ0FBYTtRQUFBLGlDQUFVO1FBQUEsb0JBQUc7UUFBQSxpQkFBVyxFQUFBLEVBQUE7O3VGRFg1QixlQUFlO2NBTDNCLFNBQVM7MkJBQ0UsYUFBYTtzQ0FLYixTQUFTO2tCQUFsQixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIE9uSW5pdCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1uby1kYXRhJyxcbiAgdGVtcGxhdGVVcmw6ICcuL25vLWRhdGEuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9uby1kYXRhLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgTm9EYXRhQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQE91dHB1dCgpIHNob3dQb3B1cCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gIH1cblxuICBvblNob3dQb3B1cCgpIHtcbiAgICB0aGlzLnNob3dQb3B1cC5lbWl0KHRydWUpXG4gIH1cblxufVxuIiwiPGRpdiBjbGFzcz1cIm5vLWRhdGEtY29udGFpbmVyXCI+XG4gIDxkaXYgY2xhc3M9XCJuby1kYXRhLXNwaW5uZXJcIj5cbiAgICA8ZGl2IGNsYXNzPVwibGV2ZWwtMVwiPlxuICAgICAgPGRpdiBjbGFzcz1cImxldmVsLTJcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImxldmVsLTItaW5uZXJcIj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwibGV2ZWwtM1wiPlxuICAgICAgPGRpdiBjbGFzcz1cImxldmVsLTMtaW5uZXJcIj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbiAgPGgyPlxuICAgIFZvdXMgbuKAmWF2ZXogYWN0dWVsbGVtZW50IGF1Y3VuIHByb2ZpbCB0eXBlXG4gIDwvaDI+XG4gIDxwPkdyw6JjZSBhdXggcHJvZmlscyB0eXBlcyB2b3VzIHBvdXJyZXogY3LDqWVyIGRlcyBtb2TDqGxlIGRlIGZvcm11bGFpcmUgcG91ciBs4oCZYXJyaXbDqWUgZGUgdm9zIHNhbGFyacOpcy48L3A+XG4gIDxhIHJvbGU9XCJidXR0b25cIiBjbGFzcz1cImFkZC1wcm9maWxcIiBtYXQtcmFpc2VkLWJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIiAoY2xpY2spPVwib25TaG93UG9wdXAoKVwiPlxuICAgIENyw6llciBwcm9maWwgPG1hdC1pY29uPmFkZDwvbWF0LWljb24+XG4gIDwvYT5cbjwvZGl2PiJdfQ==