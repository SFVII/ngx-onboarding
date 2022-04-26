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
    } }, directives: [i1.MatDialogContent, i3.MatButton], styles: ["mat-dialog-content[_ngcontent-%COMP%]{display:flex!important;flex-direction:column!important;justify-content:center;align-items:center}mat-dialog-content[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]{color:#171f26;font:900 28px/48px sans-serif;letter-spacing:0;margin-bottom:10px;margin-top:30px;padding:0 15px;text-align:center}mat-dialog-content[_ngcontent-%COMP%]   .nowboard-btn[_ngcontent-%COMP%]{background-color:transparent!important;background-image:linear-gradient(90deg,#9d107d,#8b3391,#7647a0,#5f56a8,#4862ab)!important;color:#fff}mat-dialog-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#171f26;font:18px/24px nexa,Text;letter-spacing:0;padding:0 50px;margin-bottom:2vh;text-align:center}mat-dialog-content[_ngcontent-%COMP%]   .cancel_btn[_ngcontent-%COMP%]{background-color:transparent!important;margin-top:10px}mat-dialog-content[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:50%}"] });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhpdC1jb25maXJtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL29uYm9hcmRpbmcvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9leGl0LWNvbmZpcm0vZXhpdC1jb25maXJtLmNvbXBvbmVudC50cyIsImxpYi9jb21wb25lbnRzL2V4aXQtY29uZmlybS9leGl0LWNvbmZpcm0uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUQsT0FBTyxFQUFnQixlQUFlLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQzs7Ozs7QUFRekUsTUFBTSxPQUFPLG9CQUFvQjtJQUUvQixZQUE2QyxJQUFTLEVBQzVDLFNBQTZDLEVBQVUsT0FBMEI7UUFEOUMsU0FBSSxHQUFKLElBQUksQ0FBSztRQUM1QyxjQUFTLEdBQVQsU0FBUyxDQUFvQztRQUFVLFlBQU8sR0FBUCxPQUFPLENBQW1CO0lBQUksQ0FBQztJQUVoRyxRQUFRO0lBQ1IsQ0FBQztJQUVELE9BQU87UUFDTCxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMzQixJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7SUFDbEMsQ0FBQztJQUNELE1BQU07UUFDSixJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM1QixJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUE7SUFDbkMsQ0FBQzs7d0ZBZlUsb0JBQW9CLHVCQUVYLGVBQWU7eURBRnhCLG9CQUFvQjtRQ1RqQywwQ0FDSTtRQUFBLDhCQUNJO1FBQUEsNkJBQ0o7UUFBQSxpQkFBTTtRQUNOLHlCQUFHO1FBQUEscUdBQTJFO1FBQUEsaUJBQUk7UUFDbEYsaUNBQ0k7UUFESSxpR0FBUyxhQUFTLElBQUM7UUFDdkIsMkJBQ0o7UUFBQSxpQkFBUztRQUVULGlDQUNJO1FBREksaUdBQVMsWUFBUSxJQUFDO1FBQ3RCLHlCQUNKO1FBQUEsaUJBQVM7UUFDYixpQkFBcUI7O2tEREhSLG9CQUFvQjtjQUxoQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtnQkFDNUIsV0FBVyxFQUFFLCtCQUErQjtnQkFDNUMsU0FBUyxFQUFFLENBQUMsK0JBQStCLENBQUM7YUFDN0M7O3NCQUdjLE1BQU07dUJBQUMsZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTWF0RGlhbG9nUmVmLCBNQVRfRElBTE9HX0RBVEEgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kaWFsb2cnO1xyXG5pbXBvcnQgeyBPbmJvYXJkaW5nU2VydmljZSB9IGZyb20gJy4uLy4uL29uYm9hcmRpbmcuc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2xpYi1leGl0LWNvbmZpcm0nLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9leGl0LWNvbmZpcm0uY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2V4aXQtY29uZmlybS5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBFeGl0Q29uZmlybUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoTUFUX0RJQUxPR19EQVRBKSBwcml2YXRlIGRhdGE6IGFueSxcclxuICAgIHByaXZhdGUgZGlhbG9nUmVmOiBNYXREaWFsb2dSZWY8RXhpdENvbmZpcm1Db21wb25lbnQ+LCBwcml2YXRlIHNlcnZpY2U6IE9uYm9hcmRpbmdTZXJ2aWNlKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgfVxyXG5cclxuICBjb25maXJtKCk6IHZvaWQge1xyXG4gICAgdGhpcy5kaWFsb2dSZWYuY2xvc2UodHJ1ZSk7XHJcbiAgICB0aGlzLnNlcnZpY2UuY2FuRXhpdCQubmV4dCh0cnVlKVxyXG4gIH1cclxuICBjYW5jZWwoKTogdm9pZCB7XHJcbiAgICB0aGlzLmRpYWxvZ1JlZi5jbG9zZShmYWxzZSk7XHJcbiAgICB0aGlzLnNlcnZpY2UuY2FuRXhpdCQubmV4dChmYWxzZSlcclxuICB9XHJcblxyXG59XHJcbiIsIjxtYXQtZGlhbG9nLWNvbnRlbnQ+XHJcbiAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyXCI+XHJcbiAgICAgICAgQXR0ZW50aW9uICFcclxuICAgIDwvZGl2PlxyXG4gICAgPHA+VG91dGVzIHZvcyBkb25uw6llcyBzZXJvbnQgcGVyZHVlcywgw6p0ZXMtdm91cyBjZXJ0YWluIGRlIHZvdWxvaXIgY29udGludWVyID88L3A+XHJcbiAgICA8YnV0dG9uIChjbGljayk9XCJjb25maXJtKClcIiBtYXQtYnV0dG9uIGNsYXNzPVwibm93Ym9hcmQtYnRuXCIgc3R5bGU9XCJtYXJnaW4tdG9wOiAxMHB4XCI+XHJcbiAgICAgICAgQ29uZmlybWVyXHJcbiAgICA8L2J1dHRvbj5cclxuXHJcbiAgICA8YnV0dG9uIChjbGljayk9XCJjYW5jZWwoKVwiIG1hdC1idXR0b24gY2xhc3M9XCJjYW5jZWxfYnRuXCI+XHJcbiAgICAgICAgQW5udWxlclxyXG4gICAgPC9idXR0b24+XHJcbjwvbWF0LWRpYWxvZy1jb250ZW50PiJdfQ==