import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { locales } from '../../i18n';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/dialog";
import * as i2 from "../../onboarding.service";
import * as i3 from "@angular/material/button";
export class ExitConfirmComponent {
    constructor(data, dialogRef, service) {
        this.data = data;
        this.dialogRef = dialogRef;
        this.service = service;
        this.locale = {};
        this.service._lang.subscribe((locale) => {
            this.locale = locales[locale].REQUEST;
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
ExitConfirmComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ExitConfirmComponent, selectors: [["lib-exit-confirm"]], decls: 10, vars: 4, consts: [[1, "ngx-onboarding-dialog"], [1, "header"], [1, "action-content"], ["mat-button", "", 1, "confirm-btn", 2, "margin-top", "10px", 3, "click"], ["mat-button", "", 1, "cancel-btn", 3, "click"]], template: function ExitConfirmComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-dialog-content", 0)(1, "div", 1);
        i0.ɵɵtext(2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "p");
        i0.ɵɵtext(4);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "div", 2)(6, "button", 3);
        i0.ɵɵlistener("click", function ExitConfirmComponent_Template_button_click_6_listener() { return ctx.confirm(); });
        i0.ɵɵtext(7);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(8, "button", 4);
        i0.ɵɵlistener("click", function ExitConfirmComponent_Template_button_click_8_listener() { return ctx.cancel(); });
        i0.ɵɵtext(9);
        i0.ɵɵelementEnd()()();
    } if (rf & 2) {
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate1(" ", ctx.locale == null ? null : ctx.locale.ATTENTION, " ");
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate(ctx.locale == null ? null : ctx.locale.TEXT);
        i0.ɵɵadvance(3);
        i0.ɵɵtextInterpolate1(" ", ctx.locale == null ? null : ctx.locale.CONFIRM, " ");
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate1(" ", ctx.locale == null ? null : ctx.locale.CANCEL, " ");
    } }, dependencies: [i3.MatButton, i1.MatDialogContent], styles: ["mat-dialog-content[_ngcontent-%COMP%]{display:flex!important;flex-direction:column!important;justify-content:center;align-items:center}mat-dialog-content[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]{color:#171f26;font: 900 28px/48px sans-serif;letter-spacing:0;margin-bottom:10px;margin-top:30px;padding:0 15px;text-align:center}mat-dialog-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#171f26;letter-spacing:0;padding:0 50px;margin-bottom:2vh;text-align:center}mat-dialog-content[_ngcontent-%COMP%]   .cancel-btn[_ngcontent-%COMP%]{background-color:transparent!important;margin-top:10px}mat-dialog-content[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:50%}mat-dialog-content[_ngcontent-%COMP%]   .action-content[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;width:100%}mat-dialog-content[_ngcontent-%COMP%]   .action-content[_ngcontent-%COMP%]   .confirm-btn[_ngcontent-%COMP%]{background-color:rgba(128,128,128,.647) grey}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ExitConfirmComponent, [{
        type: Component,
        args: [{ selector: 'lib-exit-confirm', template: "<mat-dialog-content class=\"ngx-onboarding-dialog\">\n    <div class=\"header\">\n        {{locale?.ATTENTION}}\n    </div>\n    <p>{{locale?.TEXT}}</p>\n    <div class=\"action-content\">\n        <button (click)=\"confirm()\" mat-button class=\"confirm-btn\" style=\"margin-top: 10px\">\n            {{locale?.CONFIRM}}\n        </button>\n\n        <button (click)=\"cancel()\" mat-button class=\"cancel-btn\">\n            {{locale?.CANCEL}}\n        </button>\n    </div>\n</mat-dialog-content>", styles: ["mat-dialog-content{display:flex!important;flex-direction:column!important;justify-content:center;align-items:center}mat-dialog-content .header{color:#171f26;font: 900 28px/48px sans-serif;letter-spacing:0;margin-bottom:10px;margin-top:30px;padding:0 15px;text-align:center}mat-dialog-content p{color:#171f26;letter-spacing:0;padding:0 50px;margin-bottom:2vh;text-align:center}mat-dialog-content .cancel-btn{background-color:transparent!important;margin-top:10px}mat-dialog-content button{width:50%}mat-dialog-content .action-content{display:flex;align-items:center;justify-content:space-between;width:100%}mat-dialog-content .action-content .confirm-btn{background-color:rgba(128,128,128,.647) grey}\n"] }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [MAT_DIALOG_DATA]
            }] }, { type: i1.MatDialogRef }, { type: i2.OnboardingService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhpdC1jb25maXJtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL29uYm9hcmRpbmcvc3JjL2xpYi9jb21wb25lbnRzL2V4aXQtY29uZmlybS9leGl0LWNvbmZpcm0uY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvb25ib2FyZGluZy9zcmMvbGliL2NvbXBvbmVudHMvZXhpdC1jb25maXJtL2V4aXQtY29uZmlybS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxRCxPQUFPLEVBQWdCLGVBQWUsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ3pFLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxZQUFZLENBQUM7Ozs7O0FBUXJDLE1BQU0sT0FBTyxvQkFBb0I7SUFFL0IsWUFBNkMsSUFBUyxFQUM1QyxTQUE2QyxFQUFVLE9BQTBCO1FBRDlDLFNBQUksR0FBSixJQUFJLENBQUs7UUFDNUMsY0FBUyxHQUFULFNBQVMsQ0FBb0M7UUFBVSxZQUFPLEdBQVAsT0FBTyxDQUFtQjtRQUYzRixXQUFNLEdBQVEsRUFBRSxDQUFBO1FBSWQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsTUFBTSxFQUFFLEVBQUU7WUFDdEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBTyxDQUFDO1FBQ3hDLENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUVELFFBQVE7SUFDUixDQUFDO0lBRUQsT0FBTztRQUNMLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzNCLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtJQUNsQyxDQUFDO0lBQ0QsTUFBTTtRQUNKLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzVCLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUNuQyxDQUFDOzt3RkFwQlUsb0JBQW9CLHVCQUVYLGVBQWU7dUVBRnhCLG9CQUFvQjtRQ1ZqQyw2Q0FBa0QsYUFBQTtRQUUxQyxZQUNKO1FBQUEsaUJBQU07UUFDTix5QkFBRztRQUFBLFlBQWdCO1FBQUEsaUJBQUk7UUFDdkIsOEJBQTRCLGdCQUFBO1FBQ2hCLGlHQUFTLGFBQVMsSUFBQztRQUN2QixZQUNKO1FBQUEsaUJBQVM7UUFFVCxpQ0FBeUQ7UUFBakQsaUdBQVMsWUFBUSxJQUFDO1FBQ3RCLFlBQ0o7UUFBQSxpQkFBUyxFQUFBLEVBQUE7O1FBVlQsZUFDSjtRQURJLGlGQUNKO1FBQ0csZUFBZ0I7UUFBaEIsaUVBQWdCO1FBR1gsZUFDSjtRQURJLCtFQUNKO1FBR0ksZUFDSjtRQURJLDhFQUNKOzt1RkRGSyxvQkFBb0I7Y0FMaEMsU0FBUzsyQkFDRSxrQkFBa0I7O3NCQU1mLE1BQU07dUJBQUMsZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1hdERpYWxvZ1JlZiwgTUFUX0RJQUxPR19EQVRBIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nJztcbmltcG9ydCB7IGxvY2FsZXMgfSBmcm9tICcuLi8uLi9pMThuJztcbmltcG9ydCB7IE9uYm9hcmRpbmdTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vb25ib2FyZGluZy5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLWV4aXQtY29uZmlybScsXG4gIHRlbXBsYXRlVXJsOiAnLi9leGl0LWNvbmZpcm0uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9leGl0LWNvbmZpcm0uY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBFeGl0Q29uZmlybUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGxvY2FsZTogYW55ID0ge31cbiAgY29uc3RydWN0b3IoQEluamVjdChNQVRfRElBTE9HX0RBVEEpIHByaXZhdGUgZGF0YTogYW55LFxuICAgIHByaXZhdGUgZGlhbG9nUmVmOiBNYXREaWFsb2dSZWY8RXhpdENvbmZpcm1Db21wb25lbnQ+LCBwcml2YXRlIHNlcnZpY2U6IE9uYm9hcmRpbmdTZXJ2aWNlKSB7XG5cbiAgICB0aGlzLnNlcnZpY2UuX2xhbmcuc3Vic2NyaWJlKChsb2NhbGUpID0+IHtcbiAgICAgIHRoaXMubG9jYWxlID0gbG9jYWxlc1tsb2NhbGVdLlJFUVVFU1Q7XG4gICAgfSlcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICB9XG5cbiAgY29uZmlybSgpOiB2b2lkIHtcbiAgICB0aGlzLmRpYWxvZ1JlZi5jbG9zZSh0cnVlKTtcbiAgICB0aGlzLnNlcnZpY2UuY2FuRXhpdCQubmV4dCh0cnVlKVxuICB9XG4gIGNhbmNlbCgpOiB2b2lkIHtcbiAgICB0aGlzLmRpYWxvZ1JlZi5jbG9zZShmYWxzZSk7XG4gICAgdGhpcy5zZXJ2aWNlLmNhbkV4aXQkLm5leHQoZmFsc2UpXG4gIH1cblxufVxuIiwiPG1hdC1kaWFsb2ctY29udGVudCBjbGFzcz1cIm5neC1vbmJvYXJkaW5nLWRpYWxvZ1wiPlxuICAgIDxkaXYgY2xhc3M9XCJoZWFkZXJcIj5cbiAgICAgICAge3tsb2NhbGU/LkFUVEVOVElPTn19XG4gICAgPC9kaXY+XG4gICAgPHA+e3tsb2NhbGU/LlRFWFR9fTwvcD5cbiAgICA8ZGl2IGNsYXNzPVwiYWN0aW9uLWNvbnRlbnRcIj5cbiAgICAgICAgPGJ1dHRvbiAoY2xpY2spPVwiY29uZmlybSgpXCIgbWF0LWJ1dHRvbiBjbGFzcz1cImNvbmZpcm0tYnRuXCIgc3R5bGU9XCJtYXJnaW4tdG9wOiAxMHB4XCI+XG4gICAgICAgICAgICB7e2xvY2FsZT8uQ09ORklSTX19XG4gICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgIDxidXR0b24gKGNsaWNrKT1cImNhbmNlbCgpXCIgbWF0LWJ1dHRvbiBjbGFzcz1cImNhbmNlbC1idG5cIj5cbiAgICAgICAgICAgIHt7bG9jYWxlPy5DQU5DRUx9fVxuICAgICAgICA8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbjwvbWF0LWRpYWxvZy1jb250ZW50PiJdfQ==