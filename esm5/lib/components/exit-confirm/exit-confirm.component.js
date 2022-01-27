import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/dialog";
import * as i2 from "../../onboarding.service";
import * as i3 from "@angular/material/button";
var ExitConfirmComponent = /** @class */ (function () {
    function ExitConfirmComponent(data, dialogRef, service) {
        this.data = data;
        this.dialogRef = dialogRef;
        this.service = service;
    }
    ExitConfirmComponent.prototype.ngOnInit = function () {
    };
    ExitConfirmComponent.prototype.confirm = function () {
        this.dialogRef.close(true);
        this.service.canExit$.next(true);
    };
    ExitConfirmComponent.prototype.cancel = function () {
        this.dialogRef.close(false);
        this.service.canExit$.next(false);
    };
    ExitConfirmComponent.ɵfac = function ExitConfirmComponent_Factory(t) { return new (t || ExitConfirmComponent)(i0.ɵɵdirectiveInject(MAT_DIALOG_DATA), i0.ɵɵdirectiveInject(i1.MatDialogRef), i0.ɵɵdirectiveInject(i2.OnboardingService)); };
    ExitConfirmComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ExitConfirmComponent, selectors: [["lib-exit-confirm"]], decls: 9, vars: 0, consts: [[1, "header"], ["mat-button", "", 1, "nowboard-btn", 2, "margin-top", "10px", 3, "click"], ["mat-button", "", 1, "cancel_btn", 3, "click"]], template: function ExitConfirmComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "mat-dialog-content");
            i0.ɵɵelementStart(1, "div", 0);
            i0.ɵɵtext(2, " Attention ! ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "p");
            i0.ɵɵtext(4, "Toutes vos donn\u00E9es seront perdues, \u00EAtes-vous certain de vouloir continuer ?");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "button", 1);
            i0.ɵɵlistener("click", function ExitConfirmComponent_Template_button_click_5_listener() { return ctx.confirm(); });
            i0.ɵɵtext(6, " Confirmer ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "button", 2);
            i0.ɵɵlistener("click", function ExitConfirmComponent_Template_button_click_7_listener() { return ctx.cancel(); });
            i0.ɵɵtext(8, " Annuler ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } }, directives: [i1.MatDialogContent, i3.MatButton], styles: ["mat-dialog-content[_ngcontent-%COMP%]{display:flex!important;flex-direction:column!important}mat-dialog-content[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]{color:#171f26;font:900 28px/48px sans-serif;letter-spacing:0;margin-bottom:10px;margin-top:30px;padding:0 15px;text-align:center}mat-dialog-content[_ngcontent-%COMP%]   .nowboard-btn[_ngcontent-%COMP%]{background-color:transparent!important;background-image:linear-gradient(90deg,#9d107d,#8b3391,#7647a0,#5f56a8,#4862ab)!important;color:#fff}mat-dialog-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#171f26;font:18px/24px nexa,Text;letter-spacing:0;padding:0 50px;margin-bottom:2vh;text-align:center}mat-dialog-content[_ngcontent-%COMP%]   .cancel_btn[_ngcontent-%COMP%]{background-color:transparent!important;margin-top:10px}mat-dialog-content[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:50%;margin:auto}"] });
    return ExitConfirmComponent;
}());
export { ExitConfirmComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ExitConfirmComponent, [{
        type: Component,
        args: [{
                selector: 'lib-exit-confirm',
                templateUrl: './exit-confirm.component.html',
                styleUrls: ['./exit-confirm.component.scss']
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [MAT_DIALOG_DATA]
            }] }, { type: i1.MatDialogRef }, { type: i2.OnboardingService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhpdC1jb25maXJtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL29uYm9hcmRpbmcvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9leGl0LWNvbmZpcm0vZXhpdC1jb25maXJtLmNvbXBvbmVudC50cyIsImxpYi9jb21wb25lbnRzL2V4aXQtY29uZmlybS9leGl0LWNvbmZpcm0uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUQsT0FBTyxFQUFnQixlQUFlLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQzs7Ozs7QUFHekU7SUFPRSw4QkFBK0MsSUFBUyxFQUNoRCxTQUE2QyxFQUFVLE9BQTBCO1FBRDFDLFNBQUksR0FBSixJQUFJLENBQUs7UUFDaEQsY0FBUyxHQUFULFNBQVMsQ0FBb0M7UUFBVSxZQUFPLEdBQVAsT0FBTyxDQUFtQjtJQUFLLENBQUM7SUFFL0YsdUNBQVEsR0FBUjtJQUNBLENBQUM7SUFFRCxzQ0FBTyxHQUFQO1FBQ0UsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDM0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO0lBQ2xDLENBQUM7SUFDRCxxQ0FBTSxHQUFOO1FBQ0UsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDNUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFBO0lBQ25DLENBQUM7NEZBZlUsb0JBQW9CLHVCQUVULGVBQWU7NkRBRjFCLG9CQUFvQjtZQ1RqQywwQ0FDSTtZQUFBLDhCQUNJO1lBQUEsNkJBQ0o7WUFBQSxpQkFBTTtZQUNOLHlCQUFHO1lBQUEscUdBQTJFO1lBQUEsaUJBQUk7WUFDbEYsaUNBQ0k7WUFESSxpR0FBUyxhQUFTLElBQUM7WUFDdkIsMkJBQ0o7WUFBQSxpQkFBUztZQUVULGlDQUNJO1lBREksaUdBQVMsWUFBUSxJQUFDO1lBQ3RCLHlCQUNKO1lBQUEsaUJBQVM7WUFDYixpQkFBcUI7OytCRFpyQjtDQTBCQyxBQXRCRCxJQXNCQztTQWpCWSxvQkFBb0I7a0RBQXBCLG9CQUFvQjtjQUxoQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtnQkFDNUIsV0FBVyxFQUFFLCtCQUErQjtnQkFDNUMsU0FBUyxFQUFFLENBQUMsK0JBQStCLENBQUM7YUFDN0M7O3NCQUdnQixNQUFNO3VCQUFDLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNYXREaWFsb2dSZWYsIE1BVF9ESUFMT0dfREFUQSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RpYWxvZyc7XG5pbXBvcnQgeyBPbmJvYXJkaW5nU2VydmljZSB9IGZyb20gJy4uLy4uL29uYm9hcmRpbmcuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1leGl0LWNvbmZpcm0nLFxuICB0ZW1wbGF0ZVVybDogJy4vZXhpdC1jb25maXJtLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZXhpdC1jb25maXJtLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgRXhpdENvbmZpcm1Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKCAgQEluamVjdChNQVRfRElBTE9HX0RBVEEpIHByaXZhdGUgZGF0YTogYW55LFxuICBwcml2YXRlIGRpYWxvZ1JlZjogTWF0RGlhbG9nUmVmPEV4aXRDb25maXJtQ29tcG9uZW50PiwgcHJpdmF0ZSBzZXJ2aWNlIDpPbmJvYXJkaW5nU2VydmljZSkgIHsgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICB9XG5cbiAgY29uZmlybSgpOiB2b2lkIHtcbiAgICB0aGlzLmRpYWxvZ1JlZi5jbG9zZSh0cnVlKTtcbiAgICB0aGlzLnNlcnZpY2UuY2FuRXhpdCQubmV4dCh0cnVlKVxuICB9IFxuICBjYW5jZWwoKTogdm9pZCB7XG4gICAgdGhpcy5kaWFsb2dSZWYuY2xvc2UoZmFsc2UpO1xuICAgIHRoaXMuc2VydmljZS5jYW5FeGl0JC5uZXh0KGZhbHNlKVxuICB9XG5cbn1cbiIsIjxtYXQtZGlhbG9nLWNvbnRlbnQ+XG4gICAgPGRpdiBjbGFzcz1cImhlYWRlclwiPlxuICAgICAgICBBdHRlbnRpb24gIVxuICAgIDwvZGl2PlxuICAgIDxwPlRvdXRlcyB2b3MgZG9ubsOpZXMgc2Vyb250IHBlcmR1ZXMsIMOqdGVzLXZvdXMgY2VydGFpbiBkZSB2b3Vsb2lyIGNvbnRpbnVlciA/PC9wPlxuICAgIDxidXR0b24gKGNsaWNrKT1cImNvbmZpcm0oKVwiIG1hdC1idXR0b24gY2xhc3M9XCJub3dib2FyZC1idG5cIiBzdHlsZT1cIm1hcmdpbi10b3A6IDEwcHhcIj5cbiAgICAgICAgQ29uZmlybWVyXG4gICAgPC9idXR0b24+XG5cbiAgICA8YnV0dG9uIChjbGljayk9XCJjYW5jZWwoKVwiIG1hdC1idXR0b24gY2xhc3M9XCJjYW5jZWxfYnRuXCI+XG4gICAgICAgIEFubnVsZXJcbiAgICA8L2J1dHRvbj5cbjwvbWF0LWRpYWxvZy1jb250ZW50PiJdfQ==