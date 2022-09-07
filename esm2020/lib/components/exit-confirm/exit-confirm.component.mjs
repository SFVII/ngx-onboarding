import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/dialog";
import * as i2 from "../../onboarding.service";
import * as i3 from "@angular/material/button";
export class ExitConfirmComponent {
    constructor(data, dialogRef, service) {
        this.data = data;
        this.dialogRef = dialogRef;
        this.service = service;
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
ExitConfirmComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ExitConfirmComponent, selectors: [["lib-exit-confirm"]], decls: 9, vars: 0, consts: [[1, "ngx-onboarding-dialog"], [1, "header"], ["mat-button", "", 1, "nowboard-btn", 2, "margin-top", "10px", 3, "click"], ["mat-button", "", 1, "cancel_btn", 3, "click"]], template: function ExitConfirmComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-dialog-content", 0)(1, "div", 1);
        i0.ɵɵtext(2, " Attention ! ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "p");
        i0.ɵɵtext(4, "Toutes vos donn\u00E9es seront perdues, \u00EAtes-vous certain de vouloir continuer ?");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "button", 2);
        i0.ɵɵlistener("click", function ExitConfirmComponent_Template_button_click_5_listener() { return ctx.confirm(); });
        i0.ɵɵtext(6, " Confirmer ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(7, "button", 3);
        i0.ɵɵlistener("click", function ExitConfirmComponent_Template_button_click_7_listener() { return ctx.cancel(); });
        i0.ɵɵtext(8, " Annuler ");
        i0.ɵɵelementEnd()();
    } }, directives: [i1.MatDialogContent, i3.MatButton], styles: ["mat-dialog-content[_ngcontent-%COMP%]{display:flex!important;flex-direction:column!important;justify-content:center;align-items:center}mat-dialog-content[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]{color:#171f26;font: 900 28px/48px sans-serif;letter-spacing:0;margin-bottom:10px;margin-top:30px;padding:0 15px;text-align:center}mat-dialog-content[_ngcontent-%COMP%]   .nowboard-btn[_ngcontent-%COMP%]{background-color:transparent!important;background-image:linear-gradient(90deg,#9d107d,#8b3391,#7647a0,#5f56a8,#4862ab)!important;color:#fff}mat-dialog-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#171f26;letter-spacing:0;padding:0 50px;margin-bottom:2vh;text-align:center}mat-dialog-content[_ngcontent-%COMP%]   .cancel_btn[_ngcontent-%COMP%]{background-color:transparent!important;margin-top:10px}mat-dialog-content[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:50%}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ExitConfirmComponent, [{
        type: Component,
        args: [{ selector: 'lib-exit-confirm', template: "<mat-dialog-content class=\"ngx-onboarding-dialog\">\r\n    <div class=\"header\">\r\n        Attention !\r\n    </div>\r\n    <p>Toutes vos donn\u00E9es seront perdues, \u00EAtes-vous certain de vouloir continuer ?</p>\r\n    <button (click)=\"confirm()\" mat-button class=\"nowboard-btn\" style=\"margin-top: 10px\">\r\n        Confirmer\r\n    </button>\r\n\r\n    <button (click)=\"cancel()\" mat-button class=\"cancel_btn\">\r\n        Annuler\r\n    </button>\r\n</mat-dialog-content>", styles: ["mat-dialog-content{display:flex!important;flex-direction:column!important;justify-content:center;align-items:center}mat-dialog-content .header{color:#171f26;font: 900 28px/48px sans-serif;letter-spacing:0;margin-bottom:10px;margin-top:30px;padding:0 15px;text-align:center}mat-dialog-content .nowboard-btn{background-color:transparent!important;background-image:linear-gradient(90deg,#9d107d,#8b3391,#7647a0,#5f56a8,#4862ab)!important;color:#fff}mat-dialog-content p{color:#171f26;letter-spacing:0;padding:0 50px;margin-bottom:2vh;text-align:center}mat-dialog-content .cancel_btn{background-color:transparent!important;margin-top:10px}mat-dialog-content button{width:50%}\n"] }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [MAT_DIALOG_DATA]
            }] }, { type: i1.MatDialogRef }, { type: i2.OnboardingService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhpdC1jb25maXJtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL29uYm9hcmRpbmcvc3JjL2xpYi9jb21wb25lbnRzL2V4aXQtY29uZmlybS9leGl0LWNvbmZpcm0uY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvb25ib2FyZGluZy9zcmMvbGliL2NvbXBvbmVudHMvZXhpdC1jb25maXJtL2V4aXQtY29uZmlybS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxRCxPQUFPLEVBQWdCLGVBQWUsRUFBRSxNQUFNLDBCQUEwQixDQUFDOzs7OztBQVF6RSxNQUFNLE9BQU8sb0JBQW9CO0lBRS9CLFlBQTZDLElBQVMsRUFDNUMsU0FBNkMsRUFBVSxPQUEwQjtRQUQ5QyxTQUFJLEdBQUosSUFBSSxDQUFLO1FBQzVDLGNBQVMsR0FBVCxTQUFTLENBQW9DO1FBQVUsWUFBTyxHQUFQLE9BQU8sQ0FBbUI7SUFBSSxDQUFDO0lBRWhHLFFBQVE7SUFDUixDQUFDO0lBRUQsT0FBTztRQUNMLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzNCLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtJQUNsQyxDQUFDO0lBQ0QsTUFBTTtRQUNKLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzVCLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUNuQyxDQUFDOzt3RkFmVSxvQkFBb0IsdUJBRVgsZUFBZTt1RUFGeEIsb0JBQW9CO1FDVGpDLDZDQUFrRCxhQUFBO1FBRTFDLDZCQUNKO1FBQUEsaUJBQU07UUFDTix5QkFBRztRQUFBLHFHQUEyRTtRQUFBLGlCQUFJO1FBQ2xGLGlDQUFxRjtRQUE3RSxpR0FBUyxhQUFTLElBQUM7UUFDdkIsMkJBQ0o7UUFBQSxpQkFBUztRQUVULGlDQUF5RDtRQUFqRCxpR0FBUyxZQUFRLElBQUM7UUFDdEIseUJBQ0o7UUFBQSxpQkFBUyxFQUFBOzt1RkRGQSxvQkFBb0I7Y0FMaEMsU0FBUzsyQkFDRSxrQkFBa0I7O3NCQU1mLE1BQU07dUJBQUMsZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTWF0RGlhbG9nUmVmLCBNQVRfRElBTE9HX0RBVEEgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kaWFsb2cnO1xyXG5pbXBvcnQgeyBPbmJvYXJkaW5nU2VydmljZSB9IGZyb20gJy4uLy4uL29uYm9hcmRpbmcuc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2xpYi1leGl0LWNvbmZpcm0nLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9leGl0LWNvbmZpcm0uY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2V4aXQtY29uZmlybS5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBFeGl0Q29uZmlybUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoTUFUX0RJQUxPR19EQVRBKSBwcml2YXRlIGRhdGE6IGFueSxcclxuICAgIHByaXZhdGUgZGlhbG9nUmVmOiBNYXREaWFsb2dSZWY8RXhpdENvbmZpcm1Db21wb25lbnQ+LCBwcml2YXRlIHNlcnZpY2U6IE9uYm9hcmRpbmdTZXJ2aWNlKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgfVxyXG5cclxuICBjb25maXJtKCk6IHZvaWQge1xyXG4gICAgdGhpcy5kaWFsb2dSZWYuY2xvc2UodHJ1ZSk7XHJcbiAgICB0aGlzLnNlcnZpY2UuY2FuRXhpdCQubmV4dCh0cnVlKVxyXG4gIH1cclxuICBjYW5jZWwoKTogdm9pZCB7XHJcbiAgICB0aGlzLmRpYWxvZ1JlZi5jbG9zZShmYWxzZSk7XHJcbiAgICB0aGlzLnNlcnZpY2UuY2FuRXhpdCQubmV4dChmYWxzZSlcclxuICB9XHJcblxyXG59XHJcbiIsIjxtYXQtZGlhbG9nLWNvbnRlbnQgY2xhc3M9XCJuZ3gtb25ib2FyZGluZy1kaWFsb2dcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJoZWFkZXJcIj5cclxuICAgICAgICBBdHRlbnRpb24gIVxyXG4gICAgPC9kaXY+XHJcbiAgICA8cD5Ub3V0ZXMgdm9zIGRvbm7DqWVzIHNlcm9udCBwZXJkdWVzLCDDqnRlcy12b3VzIGNlcnRhaW4gZGUgdm91bG9pciBjb250aW51ZXIgPzwvcD5cclxuICAgIDxidXR0b24gKGNsaWNrKT1cImNvbmZpcm0oKVwiIG1hdC1idXR0b24gY2xhc3M9XCJub3dib2FyZC1idG5cIiBzdHlsZT1cIm1hcmdpbi10b3A6IDEwcHhcIj5cclxuICAgICAgICBDb25maXJtZXJcclxuICAgIDwvYnV0dG9uPlxyXG5cclxuICAgIDxidXR0b24gKGNsaWNrKT1cImNhbmNlbCgpXCIgbWF0LWJ1dHRvbiBjbGFzcz1cImNhbmNlbF9idG5cIj5cclxuICAgICAgICBBbm51bGVyXHJcbiAgICA8L2J1dHRvbj5cclxuPC9tYXQtZGlhbG9nLWNvbnRlbnQ+Il19