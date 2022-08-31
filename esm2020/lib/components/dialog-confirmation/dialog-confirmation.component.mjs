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
DialogConfirmation.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DialogConfirmation, selectors: [["lib-dialog-confirmation"]], decls: 12, vars: 3, consts: [[1, "title"], [1, "message"], [1, "action-content"], ["mat-raised-button", "", 1, "confirm", 3, "click"], ["mat-raised-button", "", 1, "cancel", 3, "click"]], template: function DialogConfirmation_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-dialog-content")(1, "h3", 0)(2, "p")(3, "mat-icon");
        i0.ɵɵtext(4, "check_circle");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(5, "p", 1);
        i0.ɵɵtext(6);
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(7, "div", 2)(8, "button", 3);
        i0.ɵɵlistener("click", function DialogConfirmation_Template_button_click_8_listener() { return ctx.close(true); });
        i0.ɵɵtext(9);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(10, "button", 4);
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
        args: [{ selector: 'lib-dialog-confirmation', template: "<mat-dialog-content>\r\n  <h3 class=\"title\">\r\n    <p>\r\n      <mat-icon>check_circle</mat-icon>\r\n    </p>\r\n    <p class=\"message\">{{message}}</p>\r\n  </h3>\r\n  <div class=\"action-content\">\r\n    <button class=\"confirm\" (click)=\"close(true)\" mat-raised-button>\r\n      {{confirmText}}\r\n    </button>\r\n    <button class=\"cancel\" (click)=\"close(false)\" mat-raised-button>\r\n      {{cancelText}}\r\n    </button>\r\n\r\n  </div>\r\n</mat-dialog-content>", styles: ["mat-dialog-content{display:flex!important;flex-direction:column;justify-content:space-between;text-align:center;padding:12px 25px}mat-dialog-content mat-form-field{margin-bottom:10px}mat-dialog-content h3{font-style:normal;font-weight:700;font-size:20px;line-height:110%;display:flex;align-items:center;color:#242731}mat-dialog-content .action-content{display:flex;justify-content:space-around}mat-dialog-content .confirm{background-color:#242731;color:#fff;box-shadow:0 0 #0003;padding:10px!important;border-radius:7px}mat-dialog-content .cancel{box-shadow:none;border:1px solid #242731;border-radius:7px;padding:10px!important}mat-dialog-content .title{display:flex;flex-direction:column;align-items:center;justify-content:center}mat-dialog-content .title mat-icon{font-size:50px;color:#6fe8d7}mat-dialog-content .title .message{font-style:normal;font-weight:700;font-size:20px;line-height:110%;color:#242731}\n"] }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [MAT_DIALOG_DATA]
            }] }, { type: i1.MatDialogRef }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLWNvbmZpcm1hdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9vbmJvYXJkaW5nL3NyYy9saWIvY29tcG9uZW50cy9kaWFsb2ctY29uZmlybWF0aW9uL2RpYWxvZy1jb25maXJtYXRpb24uY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvb25ib2FyZGluZy9zcmMvbGliL2NvbXBvbmVudHMvZGlhbG9nLWNvbmZpcm1hdGlvbi9kaWFsb2ctY29uZmlybWF0aW9uLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFELE9BQU8sRUFBZ0IsZUFBZSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7Ozs7O0FBT3pFLE1BQU0sT0FBTyxrQkFBa0I7SUFLN0IsWUFBNkMsSUFBUyxFQUM1QyxTQUEyQztRQURSLFNBQUksR0FBSixJQUFJLENBQUs7UUFDNUMsY0FBUyxHQUFULFNBQVMsQ0FBa0M7UUFMckQsWUFBTyxHQUFHLEVBQUUsQ0FBQTtRQUNaLFNBQUksR0FBRyxFQUFFLENBQUE7UUFDVCxnQkFBVyxHQUFHLEVBQUUsQ0FBQTtRQUNoQixlQUFVLEdBQUcsRUFBRSxDQUFBO0lBSWYsQ0FBQztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxJQUFJLEVBQUUsQ0FBQTtRQUN0QyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLGNBQWMsQ0FBQTtRQUM1QyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxJQUFJLEtBQUssQ0FBQTtRQUNqRCxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxJQUFJLEtBQUssQ0FBQTtJQUNqRCxDQUFDO0lBQ0QsS0FBSyxDQUFDLE1BQU07UUFDVixJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQTtJQUM5QixDQUFDOztvRkFsQlUsa0JBQWtCLHVCQUtULGVBQWU7cUVBTHhCLGtCQUFrQjtRQ1IvQiwwQ0FBb0IsWUFBQSxRQUFBLGVBQUE7UUFHSiw0QkFBWTtRQUFBLGlCQUFXLEVBQUE7UUFFbkMsNEJBQW1CO1FBQUEsWUFBVztRQUFBLGlCQUFJLEVBQUE7UUFFcEMsOEJBQTRCLGdCQUFBO1FBQ0YsK0ZBQVMsVUFBTSxJQUFJLENBQUMsSUFBQztRQUMzQyxZQUNGO1FBQUEsaUJBQVM7UUFDVCxrQ0FBZ0U7UUFBekMsZ0dBQVMsVUFBTSxLQUFLLENBQUMsSUFBQztRQUMzQyxhQUNGO1FBQUEsaUJBQVMsRUFBQSxFQUFBOztRQVJVLGVBQVc7UUFBWCxpQ0FBVztRQUk1QixlQUNGO1FBREUsZ0RBQ0Y7UUFFRSxlQUNGO1FBREUsK0NBQ0Y7O3VGRExTLGtCQUFrQjtjQUw5QixTQUFTOzJCQUNFLHlCQUF5Qjs7c0JBU3RCLE1BQU07dUJBQUMsZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTWF0RGlhbG9nUmVmLCBNQVRfRElBTE9HX0RBVEEgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kaWFsb2cnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdsaWItZGlhbG9nLWNvbmZpcm1hdGlvbicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2RpYWxvZy1jb25maXJtYXRpb24uY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2RpYWxvZy1jb25maXJtYXRpb24uY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRGlhbG9nQ29uZmlybWF0aW9uIGltcGxlbWVudHMgT25Jbml0IHtcclxuICBtZXNzYWdlID0gJydcclxuICBpY29uID0gXCJcIlxyXG4gIGNvbmZpcm1UZXh0ID0gXCJcIlxyXG4gIGNhbmNlbFRleHQgPSBcIlwiXHJcbiAgY29uc3RydWN0b3IoQEluamVjdChNQVRfRElBTE9HX0RBVEEpIHByaXZhdGUgZGF0YTogYW55LFxyXG4gICAgcHJpdmF0ZSBkaWFsb2dSZWY6IE1hdERpYWxvZ1JlZjxEaWFsb2dDb25maXJtYXRpb24+KSB7XHJcblxyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLm1lc3NhZ2UgPSB0aGlzLmRhdGEubWVzc2FnZSB8fCAnJ1xyXG4gICAgdGhpcy5pY29uID0gdGhpcy5kYXRhLmljb24gfHwgJ2NoZWNrLWNpcmNsZSdcclxuICAgIHRoaXMuY29uZmlybVRleHQgPSB0aGlzLmRhdGEuY29uZmlybVRleHQgfHwgJ091aSdcclxuICAgIHRoaXMuY2FuY2VsVGV4dCA9IHRoaXMuZGF0YS5jYW5jZWxUZXh0IHx8ICdOb24nXHJcbiAgfVxyXG4gIGNsb3NlKHN0YXR1cykge1xyXG4gICAgdGhpcy5kaWFsb2dSZWYuY2xvc2Uoc3RhdHVzKVxyXG4gIH1cclxuXHJcbn1cclxuIiwiPG1hdC1kaWFsb2ctY29udGVudD5cclxuICA8aDMgY2xhc3M9XCJ0aXRsZVwiPlxyXG4gICAgPHA+XHJcbiAgICAgIDxtYXQtaWNvbj5jaGVja19jaXJjbGU8L21hdC1pY29uPlxyXG4gICAgPC9wPlxyXG4gICAgPHAgY2xhc3M9XCJtZXNzYWdlXCI+e3ttZXNzYWdlfX08L3A+XHJcbiAgPC9oMz5cclxuICA8ZGl2IGNsYXNzPVwiYWN0aW9uLWNvbnRlbnRcIj5cclxuICAgIDxidXR0b24gY2xhc3M9XCJjb25maXJtXCIgKGNsaWNrKT1cImNsb3NlKHRydWUpXCIgbWF0LXJhaXNlZC1idXR0b24+XHJcbiAgICAgIHt7Y29uZmlybVRleHR9fVxyXG4gICAgPC9idXR0b24+XHJcbiAgICA8YnV0dG9uIGNsYXNzPVwiY2FuY2VsXCIgKGNsaWNrKT1cImNsb3NlKGZhbHNlKVwiIG1hdC1yYWlzZWQtYnV0dG9uPlxyXG4gICAgICB7e2NhbmNlbFRleHR9fVxyXG4gICAgPC9idXR0b24+XHJcblxyXG4gIDwvZGl2PlxyXG48L21hdC1kaWFsb2ctY29udGVudD4iXX0=