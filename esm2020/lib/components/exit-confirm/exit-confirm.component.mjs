import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { locales } from '../../i18n';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/dialog";
import * as i2 from "../../onboarding.service";
import * as i3 from "@angular/material/button";
import * as i4 from "nowboard-icon";
export class ExitConfirmComponent {
    constructor(data, dialogRef, service) {
        this.data = data;
        this.dialogRef = dialogRef;
        this.service = service;
        this.locale = {};
        this.service._lang.subscribe((locale) => {
            this.locale = locales[locale].CONFIRM;
        });
    }
    ngOnInit() {
    }
    confirm() {
        this.dialogRef.close(true);
        this.service.canExit$.next(true);
    }
    cancel() {
        this.dialogRef.close(false);
        this.service.canExit$.next(false);
    }
}
ExitConfirmComponent.ɵfac = function ExitConfirmComponent_Factory(t) { return new (t || ExitConfirmComponent)(i0.ɵɵdirectiveInject(MAT_DIALOG_DATA), i0.ɵɵdirectiveInject(i1.MatDialogRef), i0.ɵɵdirectiveInject(i2.OnboardingService)); };
ExitConfirmComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ExitConfirmComponent, selectors: [["lib-exit-confirm"]], decls: 12, vars: 6, consts: [[1, "ngx-onboarding-dialog"], [1, "close-dialog-icon", "close-dialog-icon-10", 3, "click"], [3, "icon", "size"], [1, "header"], [1, "action-content"], ["mat-button", "", 1, "confirm-btn", 2, "margin-top", "10px", 3, "click"], ["mat-button", "", 1, "cancel-btn", 3, "click"]], template: function ExitConfirmComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-dialog-content", 0)(1, "div", 1);
        i0.ɵɵlistener("click", function ExitConfirmComponent_Template_div_click_1_listener() { return ctx.cancel(); });
        i0.ɵɵelement(2, "nb-icon", 2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "div", 3);
        i0.ɵɵtext(4);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "p");
        i0.ɵɵtext(6);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(7, "div", 4)(8, "button", 5);
        i0.ɵɵlistener("click", function ExitConfirmComponent_Template_button_click_8_listener() { return ctx.confirm(); });
        i0.ɵɵtext(9);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(10, "button", 6);
        i0.ɵɵlistener("click", function ExitConfirmComponent_Template_button_click_10_listener() { return ctx.cancel(); });
        i0.ɵɵtext(11);
        i0.ɵɵelementEnd()()();
    } if (rf & 2) {
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("icon", "close")("size", 1);
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate1(" ", ctx.locale == null ? null : ctx.locale.ATTENTION, " ");
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate(ctx.locale == null ? null : ctx.locale.TEXT);
        i0.ɵɵadvance(3);
        i0.ɵɵtextInterpolate1(" ", ctx.locale == null ? null : ctx.locale.CONFIRM, " ");
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate1(" ", ctx.locale == null ? null : ctx.locale.CANCEL, " ");
    } }, dependencies: [i3.MatButton, i1.MatDialogContent, i4.NowboardIconComponent], styles: ["mat-dialog-content[_ngcontent-%COMP%]{display:flex!important;flex-direction:column!important;justify-content:center;align-items:center}mat-dialog-content[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]{color:#171f26;font: 900 28px/48px sans-serif;letter-spacing:0;margin-bottom:10px;margin-top:30px;padding:0 15px;text-align:center}mat-dialog-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#171f26;letter-spacing:0;padding:0 50px;margin-bottom:2vh;text-align:center}mat-dialog-content[_ngcontent-%COMP%]   .cancel-btn[_ngcontent-%COMP%]{background-color:transparent!important;margin-top:10px}mat-dialog-content[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:50%}mat-dialog-content[_ngcontent-%COMP%]   .action-content[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;width:100%}mat-dialog-content[_ngcontent-%COMP%]   .action-content[_ngcontent-%COMP%]   .confirm-btn[_ngcontent-%COMP%]{background-color:rgba(128,128,128,.647) grey}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ExitConfirmComponent, [{
        type: Component,
        args: [{ selector: 'lib-exit-confirm', template: "<mat-dialog-content class=\"ngx-onboarding-dialog\">\r\n    <div class=\"close-dialog-icon close-dialog-icon-10\" (click)=\"cancel()\">\r\n        <nb-icon [icon]=\"'close'\" [size]=\"1\"></nb-icon>\r\n    </div>\t\t\r\n    <div class=\"header\">\r\n        {{locale?.ATTENTION}}\r\n    </div>\r\n    <p>{{locale?.TEXT}}</p>\r\n    <div class=\"action-content\">\r\n        <button (click)=\"confirm()\" mat-button class=\"confirm-btn\" style=\"margin-top: 10px\">\r\n            {{locale?.CONFIRM}}\r\n        </button>\r\n\r\n        <button (click)=\"cancel()\" mat-button class=\"cancel-btn\">\r\n            {{locale?.CANCEL}}\r\n        </button>\r\n    </div>\r\n</mat-dialog-content>", styles: ["mat-dialog-content{display:flex!important;flex-direction:column!important;justify-content:center;align-items:center}mat-dialog-content .header{color:#171f26;font: 900 28px/48px sans-serif;letter-spacing:0;margin-bottom:10px;margin-top:30px;padding:0 15px;text-align:center}mat-dialog-content p{color:#171f26;letter-spacing:0;padding:0 50px;margin-bottom:2vh;text-align:center}mat-dialog-content .cancel-btn{background-color:transparent!important;margin-top:10px}mat-dialog-content button{width:50%}mat-dialog-content .action-content{display:flex;align-items:center;justify-content:space-between;width:100%}mat-dialog-content .action-content .confirm-btn{background-color:rgba(128,128,128,.647) grey}\n"] }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [MAT_DIALOG_DATA]
            }] }, { type: i1.MatDialogRef }, { type: i2.OnboardingService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhpdC1jb25maXJtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL29uYm9hcmRpbmcvc3JjL2xpYi9jb21wb25lbnRzL2V4aXQtY29uZmlybS9leGl0LWNvbmZpcm0uY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvb25ib2FyZGluZy9zcmMvbGliL2NvbXBvbmVudHMvZXhpdC1jb25maXJtL2V4aXQtY29uZmlybS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxRCxPQUFPLEVBQWdCLGVBQWUsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ3pFLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxZQUFZLENBQUM7Ozs7OztBQVFyQyxNQUFNLE9BQU8sb0JBQW9CO0lBRS9CLFlBQTZDLElBQVMsRUFDNUMsU0FBNkMsRUFBVSxPQUEwQjtRQUQ5QyxTQUFJLEdBQUosSUFBSSxDQUFLO1FBQzVDLGNBQVMsR0FBVCxTQUFTLENBQW9DO1FBQVUsWUFBTyxHQUFQLE9BQU8sQ0FBbUI7UUFGM0YsV0FBTSxHQUFRLEVBQUUsQ0FBQTtRQUlkLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxFQUFFO1lBQ3RDLElBQUksQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sQ0FBQztRQUN4QyxDQUFDLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFFRCxRQUFRO0lBQ1IsQ0FBQztJQUVELE9BQU87UUFDTCxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMzQixJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7SUFDbEMsQ0FBQztJQUNELE1BQU07UUFDSixJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM1QixJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUE7SUFDbkMsQ0FBQzs7d0ZBcEJVLG9CQUFvQix1QkFFWCxlQUFlO3VFQUZ4QixvQkFBb0I7UUNWakMsNkNBQWtELGFBQUE7UUFDTSw4RkFBUyxZQUFRLElBQUM7UUFDbEUsNkJBQStDO1FBQ25ELGlCQUFNO1FBQ04sOEJBQW9CO1FBQ2hCLFlBQ0o7UUFBQSxpQkFBTTtRQUNOLHlCQUFHO1FBQUEsWUFBZ0I7UUFBQSxpQkFBSTtRQUN2Qiw4QkFBNEIsZ0JBQUE7UUFDaEIsaUdBQVMsYUFBUyxJQUFDO1FBQ3ZCLFlBQ0o7UUFBQSxpQkFBUztRQUVULGtDQUF5RDtRQUFqRCxrR0FBUyxZQUFRLElBQUM7UUFDdEIsYUFDSjtRQUFBLGlCQUFTLEVBQUEsRUFBQTs7UUFiQSxlQUFnQjtRQUFoQiw4QkFBZ0IsV0FBQTtRQUd6QixlQUNKO1FBREksaUZBQ0o7UUFDRyxlQUFnQjtRQUFoQixpRUFBZ0I7UUFHWCxlQUNKO1FBREksK0VBQ0o7UUFHSSxlQUNKO1FBREksOEVBQ0o7O3VGRExLLG9CQUFvQjtjQUxoQyxTQUFTOzJCQUNFLGtCQUFrQjs7c0JBTWYsTUFBTTt1QkFBQyxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBNYXREaWFsb2dSZWYsIE1BVF9ESUFMT0dfREFUQSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RpYWxvZyc7XHJcbmltcG9ydCB7IGxvY2FsZXMgfSBmcm9tICcuLi8uLi9pMThuJztcclxuaW1wb3J0IHsgT25ib2FyZGluZ1NlcnZpY2UgfSBmcm9tICcuLi8uLi9vbmJvYXJkaW5nLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdsaWItZXhpdC1jb25maXJtJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vZXhpdC1jb25maXJtLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9leGl0LWNvbmZpcm0uY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRXhpdENvbmZpcm1Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIGxvY2FsZTogYW55ID0ge31cclxuICBjb25zdHJ1Y3RvcihASW5qZWN0KE1BVF9ESUFMT0dfREFUQSkgcHJpdmF0ZSBkYXRhOiBhbnksXHJcbiAgICBwcml2YXRlIGRpYWxvZ1JlZjogTWF0RGlhbG9nUmVmPEV4aXRDb25maXJtQ29tcG9uZW50PiwgcHJpdmF0ZSBzZXJ2aWNlOiBPbmJvYXJkaW5nU2VydmljZSkge1xyXG5cclxuICAgIHRoaXMuc2VydmljZS5fbGFuZy5zdWJzY3JpYmUoKGxvY2FsZSkgPT4ge1xyXG4gICAgICB0aGlzLmxvY2FsZSA9IGxvY2FsZXNbbG9jYWxlXS5DT05GSVJNO1xyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gIH1cclxuXHJcbiAgY29uZmlybSgpOiB2b2lkIHtcclxuICAgIHRoaXMuZGlhbG9nUmVmLmNsb3NlKHRydWUpO1xyXG4gICAgdGhpcy5zZXJ2aWNlLmNhbkV4aXQkLm5leHQodHJ1ZSlcclxuICB9XHJcbiAgY2FuY2VsKCk6IHZvaWQge1xyXG4gICAgdGhpcy5kaWFsb2dSZWYuY2xvc2UoZmFsc2UpO1xyXG4gICAgdGhpcy5zZXJ2aWNlLmNhbkV4aXQkLm5leHQoZmFsc2UpXHJcbiAgfVxyXG5cclxufVxyXG4iLCI8bWF0LWRpYWxvZy1jb250ZW50IGNsYXNzPVwibmd4LW9uYm9hcmRpbmctZGlhbG9nXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY2xvc2UtZGlhbG9nLWljb24gY2xvc2UtZGlhbG9nLWljb24tMTBcIiAoY2xpY2spPVwiY2FuY2VsKClcIj5cclxuICAgICAgICA8bmItaWNvbiBbaWNvbl09XCInY2xvc2UnXCIgW3NpemVdPVwiMVwiPjwvbmItaWNvbj5cclxuICAgIDwvZGl2Plx0XHRcclxuICAgIDxkaXYgY2xhc3M9XCJoZWFkZXJcIj5cclxuICAgICAgICB7e2xvY2FsZT8uQVRURU5USU9OfX1cclxuICAgIDwvZGl2PlxyXG4gICAgPHA+e3tsb2NhbGU/LlRFWFR9fTwvcD5cclxuICAgIDxkaXYgY2xhc3M9XCJhY3Rpb24tY29udGVudFwiPlxyXG4gICAgICAgIDxidXR0b24gKGNsaWNrKT1cImNvbmZpcm0oKVwiIG1hdC1idXR0b24gY2xhc3M9XCJjb25maXJtLWJ0blwiIHN0eWxlPVwibWFyZ2luLXRvcDogMTBweFwiPlxyXG4gICAgICAgICAgICB7e2xvY2FsZT8uQ09ORklSTX19XHJcbiAgICAgICAgPC9idXR0b24+XHJcblxyXG4gICAgICAgIDxidXR0b24gKGNsaWNrKT1cImNhbmNlbCgpXCIgbWF0LWJ1dHRvbiBjbGFzcz1cImNhbmNlbC1idG5cIj5cclxuICAgICAgICAgICAge3tsb2NhbGU/LkNBTkNFTH19XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICA8L2Rpdj5cclxuPC9tYXQtZGlhbG9nLWNvbnRlbnQ+Il19