import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/dialog";
import * as i2 from "@angular/material/icon";
import * as i3 from "@angular/material/button";
export class DialogConfirmation {
    constructor(data, dialogRef) {
        this.data = data;
        this.dialogRef = dialogRef;
        this.message = '';
        this.icon = "";
        this.confirmText = "";
        this.cancelText = "";
    }
    ngOnInit() {
        this.message = this.data.message || '';
        this.icon = this.data.icon || 'check-circle';
        this.confirmText = this.data.confirmText || 'Oui';
        this.cancelText = this.data.cancelText || 'Non';
    }
    close(status) {
        this.dialogRef.close(status);
    }
}
DialogConfirmation.ɵfac = function DialogConfirmation_Factory(t) { return new (t || DialogConfirmation)(i0.ɵɵdirectiveInject(MAT_DIALOG_DATA), i0.ɵɵdirectiveInject(i1.MatDialogRef)); };
DialogConfirmation.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DialogConfirmation, selectors: [["lib-dialog-confirmation"]], decls: 12, vars: 3, consts: [[1, "ngx-onboarding-dialog"], [1, "title"], [1, "message"], [1, "action-content"], ["mat-raised-button", "", 1, "confirm", 3, "click"], ["mat-raised-button", "", 1, "cancel", 3, "click"]], template: function DialogConfirmation_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-dialog-content", 0)(1, "h3", 1)(2, "p")(3, "mat-icon");
        i0.ɵɵtext(4, "check_circle");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(5, "p", 2);
        i0.ɵɵtext(6);
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(7, "div", 3)(8, "button", 4);
        i0.ɵɵlistener("click", function DialogConfirmation_Template_button_click_8_listener() { return ctx.close(true); });
        i0.ɵɵtext(9);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(10, "button", 5);
        i0.ɵɵlistener("click", function DialogConfirmation_Template_button_click_10_listener() { return ctx.close(false); });
        i0.ɵɵtext(11);
        i0.ɵɵelementEnd()()();
    } if (rf & 2) {
        i0.ɵɵadvance(6);
        i0.ɵɵtextInterpolate(ctx.message);
        i0.ɵɵadvance(3);
        i0.ɵɵtextInterpolate1(" ", ctx.confirmText, " ");
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate1(" ", ctx.cancelText, " ");
    } }, directives: [i1.MatDialogContent, i2.MatIcon, i3.MatButton], styles: ["mat-dialog-content[_ngcontent-%COMP%]{display:flex!important;flex-direction:column;justify-content:space-between;text-align:center;padding:12px 25px}mat-dialog-content[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{margin-bottom:10px}mat-dialog-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-style:normal;font-weight:700;font-size:20px;line-height:110%;display:flex;align-items:center;color:#242731}mat-dialog-content[_ngcontent-%COMP%]   .action-content[_ngcontent-%COMP%]{display:flex;justify-content:space-around}mat-dialog-content[_ngcontent-%COMP%]   .confirm[_ngcontent-%COMP%]{background-color:#242731;color:#fff;box-shadow:0 0 #0003;padding:10px!important;border-radius:7px}mat-dialog-content[_ngcontent-%COMP%]   .cancel[_ngcontent-%COMP%]{box-shadow:none;border:1px solid #242731;border-radius:7px;padding:10px!important}mat-dialog-content[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center}mat-dialog-content[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:50px;color:#6fe8d7}mat-dialog-content[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]{font-style:normal;font-weight:700;font-size:20px;line-height:110%;color:#242731}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DialogConfirmation, [{
        type: Component,
        args: [{ selector: 'lib-dialog-confirmation', template: "<mat-dialog-content class=\"ngx-onboarding-dialog\">\r\n  <h3 class=\"title\">\r\n    <p>\r\n      <mat-icon>check_circle</mat-icon>\r\n    </p>\r\n    <p class=\"message\">{{message}}</p>\r\n  </h3>\r\n  <div class=\"action-content\">\r\n    <button class=\"confirm\" (click)=\"close(true)\" mat-raised-button>\r\n      {{confirmText}}\r\n    </button>\r\n    <button class=\"cancel\" (click)=\"close(false)\" mat-raised-button>\r\n      {{cancelText}}\r\n    </button>\r\n\r\n  </div>\r\n</mat-dialog-content>", styles: ["mat-dialog-content{display:flex!important;flex-direction:column;justify-content:space-between;text-align:center;padding:12px 25px}mat-dialog-content mat-form-field{margin-bottom:10px}mat-dialog-content h3{font-style:normal;font-weight:700;font-size:20px;line-height:110%;display:flex;align-items:center;color:#242731}mat-dialog-content .action-content{display:flex;justify-content:space-around}mat-dialog-content .confirm{background-color:#242731;color:#fff;box-shadow:0 0 #0003;padding:10px!important;border-radius:7px}mat-dialog-content .cancel{box-shadow:none;border:1px solid #242731;border-radius:7px;padding:10px!important}mat-dialog-content .title{display:flex;flex-direction:column;align-items:center;justify-content:center}mat-dialog-content .title mat-icon{font-size:50px;color:#6fe8d7}mat-dialog-content .title .message{font-style:normal;font-weight:700;font-size:20px;line-height:110%;color:#242731}\n"] }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [MAT_DIALOG_DATA]
            }] }, { type: i1.MatDialogRef }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLWNvbmZpcm1hdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9vbmJvYXJkaW5nL3NyYy9saWIvY29tcG9uZW50cy9kaWFsb2ctY29uZmlybWF0aW9uL2RpYWxvZy1jb25maXJtYXRpb24uY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvb25ib2FyZGluZy9zcmMvbGliL2NvbXBvbmVudHMvZGlhbG9nLWNvbmZpcm1hdGlvbi9kaWFsb2ctY29uZmlybWF0aW9uLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFELE9BQU8sRUFBZ0IsZUFBZSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7Ozs7O0FBT3pFLE1BQU0sT0FBTyxrQkFBa0I7SUFLN0IsWUFBNkMsSUFBUyxFQUM1QyxTQUEyQztRQURSLFNBQUksR0FBSixJQUFJLENBQUs7UUFDNUMsY0FBUyxHQUFULFNBQVMsQ0FBa0M7UUFMckQsWUFBTyxHQUFHLEVBQUUsQ0FBQTtRQUNaLFNBQUksR0FBRyxFQUFFLENBQUE7UUFDVCxnQkFBVyxHQUFHLEVBQUUsQ0FBQTtRQUNoQixlQUFVLEdBQUcsRUFBRSxDQUFBO0lBSWYsQ0FBQztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxJQUFJLEVBQUUsQ0FBQTtRQUN0QyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLGNBQWMsQ0FBQTtRQUM1QyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxJQUFJLEtBQUssQ0FBQTtRQUNqRCxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxJQUFJLEtBQUssQ0FBQTtJQUNqRCxDQUFDO0lBQ0QsS0FBSyxDQUFDLE1BQU07UUFDVixJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQTtJQUM5QixDQUFDOztvRkFsQlUsa0JBQWtCLHVCQUtULGVBQWU7cUVBTHhCLGtCQUFrQjtRQ1IvQiw2Q0FBa0QsWUFBQSxRQUFBLGVBQUE7UUFHbEMsNEJBQVk7UUFBQSxpQkFBVyxFQUFBO1FBRW5DLDRCQUFtQjtRQUFBLFlBQVc7UUFBQSxpQkFBSSxFQUFBO1FBRXBDLDhCQUE0QixnQkFBQTtRQUNGLCtGQUFTLFVBQU0sSUFBSSxDQUFDLElBQUM7UUFDM0MsWUFDRjtRQUFBLGlCQUFTO1FBQ1Qsa0NBQWdFO1FBQXpDLGdHQUFTLFVBQU0sS0FBSyxDQUFDLElBQUM7UUFDM0MsYUFDRjtRQUFBLGlCQUFTLEVBQUEsRUFBQTs7UUFSVSxlQUFXO1FBQVgsaUNBQVc7UUFJNUIsZUFDRjtRQURFLGdEQUNGO1FBRUUsZUFDRjtRQURFLCtDQUNGOzt1RkRMUyxrQkFBa0I7Y0FMOUIsU0FBUzsyQkFDRSx5QkFBeUI7O3NCQVN0QixNQUFNO3VCQUFDLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE1hdERpYWxvZ1JlZiwgTUFUX0RJQUxPR19EQVRBIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbGliLWRpYWxvZy1jb25maXJtYXRpb24nLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9kaWFsb2ctY29uZmlybWF0aW9uLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9kaWFsb2ctY29uZmlybWF0aW9uLmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIERpYWxvZ0NvbmZpcm1hdGlvbiBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgbWVzc2FnZSA9ICcnXHJcbiAgaWNvbiA9IFwiXCJcclxuICBjb25maXJtVGV4dCA9IFwiXCJcclxuICBjYW5jZWxUZXh0ID0gXCJcIlxyXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoTUFUX0RJQUxPR19EQVRBKSBwcml2YXRlIGRhdGE6IGFueSxcclxuICAgIHByaXZhdGUgZGlhbG9nUmVmOiBNYXREaWFsb2dSZWY8RGlhbG9nQ29uZmlybWF0aW9uPikge1xyXG5cclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5tZXNzYWdlID0gdGhpcy5kYXRhLm1lc3NhZ2UgfHwgJydcclxuICAgIHRoaXMuaWNvbiA9IHRoaXMuZGF0YS5pY29uIHx8ICdjaGVjay1jaXJjbGUnXHJcbiAgICB0aGlzLmNvbmZpcm1UZXh0ID0gdGhpcy5kYXRhLmNvbmZpcm1UZXh0IHx8ICdPdWknXHJcbiAgICB0aGlzLmNhbmNlbFRleHQgPSB0aGlzLmRhdGEuY2FuY2VsVGV4dCB8fCAnTm9uJ1xyXG4gIH1cclxuICBjbG9zZShzdGF0dXMpIHtcclxuICAgIHRoaXMuZGlhbG9nUmVmLmNsb3NlKHN0YXR1cylcclxuICB9XHJcblxyXG59XHJcbiIsIjxtYXQtZGlhbG9nLWNvbnRlbnQgY2xhc3M9XCJuZ3gtb25ib2FyZGluZy1kaWFsb2dcIj5cclxuICA8aDMgY2xhc3M9XCJ0aXRsZVwiPlxyXG4gICAgPHA+XHJcbiAgICAgIDxtYXQtaWNvbj5jaGVja19jaXJjbGU8L21hdC1pY29uPlxyXG4gICAgPC9wPlxyXG4gICAgPHAgY2xhc3M9XCJtZXNzYWdlXCI+e3ttZXNzYWdlfX08L3A+XHJcbiAgPC9oMz5cclxuICA8ZGl2IGNsYXNzPVwiYWN0aW9uLWNvbnRlbnRcIj5cclxuICAgIDxidXR0b24gY2xhc3M9XCJjb25maXJtXCIgKGNsaWNrKT1cImNsb3NlKHRydWUpXCIgbWF0LXJhaXNlZC1idXR0b24+XHJcbiAgICAgIHt7Y29uZmlybVRleHR9fVxyXG4gICAgPC9idXR0b24+XHJcbiAgICA8YnV0dG9uIGNsYXNzPVwiY2FuY2VsXCIgKGNsaWNrKT1cImNsb3NlKGZhbHNlKVwiIG1hdC1yYWlzZWQtYnV0dG9uPlxyXG4gICAgICB7e2NhbmNlbFRleHR9fVxyXG4gICAgPC9idXR0b24+XHJcblxyXG4gIDwvZGl2PlxyXG48L21hdC1kaWFsb2ctY29udGVudD4iXX0=