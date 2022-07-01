import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/dialog";
import * as i2 from "@angular/material/icon";
import * as i3 from "@angular/material/button";
var DialogConfirmation = /** @class */ (function () {
    function DialogConfirmation(data, dialogRef) {
        this.data = data;
        this.dialogRef = dialogRef;
        this.message = '';
        this.icon = "";
        this.confirmText = "";
        this.cancelText = "";
    }
    DialogConfirmation.prototype.ngOnInit = function () {
        this.message = this.data.message || '';
        this.icon = this.data.icon || 'check-circle';
        this.confirmText = this.data.confirmText || 'Oui';
        this.cancelText = this.data.cancelText || 'Non';
    };
    DialogConfirmation.prototype.close = function (status) {
        this.dialogRef.close(status);
    };
    DialogConfirmation.ɵfac = function DialogConfirmation_Factory(t) { return new (t || DialogConfirmation)(i0.ɵɵdirectiveInject(MAT_DIALOG_DATA), i0.ɵɵdirectiveInject(i1.MatDialogRef)); };
    DialogConfirmation.ɵcmp = i0.ɵɵdefineComponent({ type: DialogConfirmation, selectors: [["lib-dialog-confirmation"]], decls: 12, vars: 3, consts: [[1, "title"], [1, "message"], [1, "action-content"], ["mat-raised-button", "", 1, "confirm", 3, "click"], ["mat-raised-button", "", 1, "cancel", 3, "click"]], template: function DialogConfirmation_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "mat-dialog-content");
            i0.ɵɵelementStart(1, "h3", 0);
            i0.ɵɵelementStart(2, "p");
            i0.ɵɵelementStart(3, "mat-icon");
            i0.ɵɵtext(4, "check_circle");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "p", 1);
            i0.ɵɵtext(6);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "div", 2);
            i0.ɵɵelementStart(8, "button", 3);
            i0.ɵɵlistener("click", function DialogConfirmation_Template_button_click_8_listener() { return ctx.close(true); });
            i0.ɵɵtext(9);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(10, "button", 4);
            i0.ɵɵlistener("click", function DialogConfirmation_Template_button_click_10_listener() { return ctx.close(false); });
            i0.ɵɵtext(11);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(6);
            i0.ɵɵtextInterpolate(ctx.message);
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate1(" ", ctx.confirmText, " ");
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1(" ", ctx.cancelText, " ");
        } }, directives: [i1.MatDialogContent, i2.MatIcon, i3.MatButton], styles: ["mat-dialog-content[_ngcontent-%COMP%]{display:flex!important;flex-direction:column;justify-content:space-between;width:348px;height:204px;text-align:center;padding:12px 25px}mat-dialog-content[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{margin-bottom:10px}mat-dialog-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-family:Nexa;font-style:normal;font-weight:700;font-size:20px;line-height:110%;display:flex;align-items:center;color:#242731}mat-dialog-content[_ngcontent-%COMP%]   .action-content[_ngcontent-%COMP%]{display:flex;justify-content:space-around}mat-dialog-content[_ngcontent-%COMP%]   .confirm[_ngcontent-%COMP%]{background-color:#242731;color:#fff;box-shadow:0 0 0 rgba(0,0,0,.2);border-radius:7px}mat-dialog-content[_ngcontent-%COMP%]   .cancel[_ngcontent-%COMP%]{box-shadow:none;border:1px solid #242731;border-radius:7px}mat-dialog-content[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center}mat-dialog-content[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:50px;color:#6fe8d7}mat-dialog-content[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]{font-family:Nexa;font-style:normal;font-weight:700;font-size:20px;line-height:110%;color:#242731}"] });
    return DialogConfirmation;
}());
export { DialogConfirmation };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DialogConfirmation, [{
        type: Component,
        args: [{
                selector: 'lib-dialog-confirmation',
                templateUrl: './dialog-confirmation.component.html',
                styleUrls: ['./dialog-confirmation.component.scss']
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [MAT_DIALOG_DATA]
            }] }, { type: i1.MatDialogRef }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLWNvbmZpcm1hdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9vbmJvYXJkaW5nLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvZGlhbG9nLWNvbmZpcm1hdGlvbi9kaWFsb2ctY29uZmlybWF0aW9uLmNvbXBvbmVudC50cyIsImxpYi9jb21wb25lbnRzL2RpYWxvZy1jb25maXJtYXRpb24vZGlhbG9nLWNvbmZpcm1hdGlvbi5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxRCxPQUFPLEVBQWdCLGVBQWUsRUFBRSxNQUFNLDBCQUEwQixDQUFDOzs7OztBQUV6RTtJQVVFLDRCQUE2QyxJQUFTLEVBQzVDLFNBQTJDO1FBRFIsU0FBSSxHQUFKLElBQUksQ0FBSztRQUM1QyxjQUFTLEdBQVQsU0FBUyxDQUFrQztRQUxyRCxZQUFPLEdBQUcsRUFBRSxDQUFBO1FBQ1osU0FBSSxHQUFHLEVBQUUsQ0FBQTtRQUNULGdCQUFXLEdBQUcsRUFBRSxDQUFBO1FBQ2hCLGVBQVUsR0FBRyxFQUFFLENBQUE7SUFJZixDQUFDO0lBRUQscUNBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLElBQUksRUFBRSxDQUFBO1FBQ3RDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksY0FBYyxDQUFBO1FBQzVDLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLElBQUksS0FBSyxDQUFBO1FBQ2pELElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLElBQUksS0FBSyxDQUFBO0lBQ2pELENBQUM7SUFDRCxrQ0FBSyxHQUFMLFVBQU0sTUFBTTtRQUNWLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFBO0lBQzlCLENBQUM7d0ZBbEJVLGtCQUFrQix1QkFLVCxlQUFlOzJEQUx4QixrQkFBa0I7WUNSL0IsMENBQ0U7WUFBQSw2QkFDRTtZQUFBLHlCQUNFO1lBQUEsZ0NBQVU7WUFBQSw0QkFBWTtZQUFBLGlCQUFXO1lBQ25DLGlCQUFJO1lBQ0osNEJBQW1CO1lBQUEsWUFBVztZQUFBLGlCQUFJO1lBQ3BDLGlCQUFLO1lBQ0wsOEJBQ0U7WUFBQSxpQ0FDRTtZQURzQiwrRkFBUyxVQUFNLElBQUksQ0FBQyxJQUFDO1lBQzNDLFlBQ0Y7WUFBQSxpQkFBUztZQUNULGtDQUNFO1lBRHFCLGdHQUFTLFVBQU0sS0FBSyxDQUFDLElBQUM7WUFDM0MsYUFDRjtZQUFBLGlCQUFTO1lBRVgsaUJBQU07WUFDUixpQkFBcUI7O1lBWEUsZUFBVztZQUFYLGlDQUFXO1lBSTVCLGVBQ0Y7WUFERSxnREFDRjtZQUVFLGVBQ0Y7WUFERSwrQ0FDRjs7NkJEYko7Q0E0QkMsQUF6QkQsSUF5QkM7U0FwQlksa0JBQWtCO2tEQUFsQixrQkFBa0I7Y0FMOUIsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSx5QkFBeUI7Z0JBQ25DLFdBQVcsRUFBRSxzQ0FBc0M7Z0JBQ25ELFNBQVMsRUFBRSxDQUFDLHNDQUFzQyxDQUFDO2FBQ3BEOztzQkFNYyxNQUFNO3VCQUFDLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE1hdERpYWxvZ1JlZiwgTUFUX0RJQUxPR19EQVRBIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbGliLWRpYWxvZy1jb25maXJtYXRpb24nLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9kaWFsb2ctY29uZmlybWF0aW9uLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9kaWFsb2ctY29uZmlybWF0aW9uLmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIERpYWxvZ0NvbmZpcm1hdGlvbiBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgbWVzc2FnZSA9ICcnXHJcbiAgaWNvbiA9IFwiXCJcclxuICBjb25maXJtVGV4dCA9IFwiXCJcclxuICBjYW5jZWxUZXh0ID0gXCJcIlxyXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoTUFUX0RJQUxPR19EQVRBKSBwcml2YXRlIGRhdGE6IGFueSxcclxuICAgIHByaXZhdGUgZGlhbG9nUmVmOiBNYXREaWFsb2dSZWY8RGlhbG9nQ29uZmlybWF0aW9uPikge1xyXG5cclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5tZXNzYWdlID0gdGhpcy5kYXRhLm1lc3NhZ2UgfHwgJydcclxuICAgIHRoaXMuaWNvbiA9IHRoaXMuZGF0YS5pY29uIHx8ICdjaGVjay1jaXJjbGUnXHJcbiAgICB0aGlzLmNvbmZpcm1UZXh0ID0gdGhpcy5kYXRhLmNvbmZpcm1UZXh0IHx8ICdPdWknXHJcbiAgICB0aGlzLmNhbmNlbFRleHQgPSB0aGlzLmRhdGEuY2FuY2VsVGV4dCB8fCAnTm9uJ1xyXG4gIH1cclxuICBjbG9zZShzdGF0dXMpIHtcclxuICAgIHRoaXMuZGlhbG9nUmVmLmNsb3NlKHN0YXR1cylcclxuICB9XHJcblxyXG59XHJcbiIsIjxtYXQtZGlhbG9nLWNvbnRlbnQ+XHJcbiAgPGgzIGNsYXNzPVwidGl0bGVcIj5cclxuICAgIDxwPlxyXG4gICAgICA8bWF0LWljb24+Y2hlY2tfY2lyY2xlPC9tYXQtaWNvbj5cclxuICAgIDwvcD5cclxuICAgIDxwIGNsYXNzPVwibWVzc2FnZVwiPnt7bWVzc2FnZX19PC9wPlxyXG4gIDwvaDM+XHJcbiAgPGRpdiBjbGFzcz1cImFjdGlvbi1jb250ZW50XCI+XHJcbiAgICA8YnV0dG9uIGNsYXNzPVwiY29uZmlybVwiIChjbGljayk9XCJjbG9zZSh0cnVlKVwiIG1hdC1yYWlzZWQtYnV0dG9uPlxyXG4gICAgICB7e2NvbmZpcm1UZXh0fX1cclxuICAgIDwvYnV0dG9uPlxyXG4gICAgPGJ1dHRvbiBjbGFzcz1cImNhbmNlbFwiIChjbGljayk9XCJjbG9zZShmYWxzZSlcIiBtYXQtcmFpc2VkLWJ1dHRvbj5cclxuICAgICAge3tjYW5jZWxUZXh0fX1cclxuICAgIDwvYnV0dG9uPlxyXG5cclxuICA8L2Rpdj5cclxuPC9tYXQtZGlhbG9nLWNvbnRlbnQ+Il19