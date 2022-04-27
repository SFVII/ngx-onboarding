import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/dialog";
import * as i2 from "@angular/material/button";
var DialogConfirmation = /** @class */ (function () {
    function DialogConfirmation(data, dialogRef) {
        this.data = data;
        this.dialogRef = dialogRef;
        this.message = '';
    }
    DialogConfirmation.prototype.ngOnInit = function () {
        this.message = this.data.message || '';
    };
    DialogConfirmation.prototype.close = function (status) {
        this.dialogRef.close(status);
    };
    DialogConfirmation.ɵfac = function DialogConfirmation_Factory(t) { return new (t || DialogConfirmation)(i0.ɵɵdirectiveInject(MAT_DIALOG_DATA), i0.ɵɵdirectiveInject(i1.MatDialogRef)); };
    DialogConfirmation.ɵcmp = i0.ɵɵdefineComponent({ type: DialogConfirmation, selectors: [["lib-dialog-confirmation"]], decls: 8, vars: 1, consts: [[1, "title"], [1, "action-content"], ["mat-raised-button", "", 1, "cancel", 3, "click"], ["mat-raised-button", "", 1, "confirm", 3, "click"]], template: function DialogConfirmation_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "mat-dialog-content");
            i0.ɵɵelementStart(1, "h3", 0);
            i0.ɵɵtext(2);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "div", 1);
            i0.ɵɵelementStart(4, "button", 2);
            i0.ɵɵlistener("click", function DialogConfirmation_Template_button_click_4_listener() { return ctx.close(false); });
            i0.ɵɵtext(5, " Non ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "button", 3);
            i0.ɵɵlistener("click", function DialogConfirmation_Template_button_click_6_listener() { return ctx.close(true); });
            i0.ɵɵtext(7, " Oui ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.message);
        } }, directives: [i1.MatDialogContent, i2.MatButton], styles: ["mat-dialog-content[_ngcontent-%COMP%]{display:flex!important;flex-direction:column;justify-content:space-between;width:348px;height:204px;text-align:center;padding:12px 25px}mat-dialog-content[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{margin-bottom:10px}mat-dialog-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-family:Nexa;font-style:normal;font-weight:700;font-size:20px;line-height:110%;display:flex;align-items:center;color:#242731}mat-dialog-content[_ngcontent-%COMP%]   .action-content[_ngcontent-%COMP%]{display:flex;justify-content:space-around}mat-dialog-content[_ngcontent-%COMP%]   .confirm[_ngcontent-%COMP%]{background-color:#242731;color:#fff}mat-dialog-content[_ngcontent-%COMP%]   .cancel[_ngcontent-%COMP%]{box-shadow:none}"] });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLWNvbmZpcm1hdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9vbmJvYXJkaW5nLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvZGlhbG9nLWNvbmZpcm1hdGlvbi9kaWFsb2ctY29uZmlybWF0aW9uLmNvbXBvbmVudC50cyIsImxpYi9jb21wb25lbnRzL2RpYWxvZy1jb25maXJtYXRpb24vZGlhbG9nLWNvbmZpcm1hdGlvbi5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxRCxPQUFPLEVBQWdCLGVBQWUsRUFBRSxNQUFNLDBCQUEwQixDQUFDOzs7O0FBRXpFO0lBT0UsNEJBQTZDLElBQVMsRUFDNUMsU0FBMkM7UUFEUixTQUFJLEdBQUosSUFBSSxDQUFLO1FBQzVDLGNBQVMsR0FBVCxTQUFTLENBQWtDO1FBRnJELFlBQU8sR0FBRyxFQUFFLENBQUE7SUFJWixDQUFDO0lBRUQscUNBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLElBQUksRUFBRSxDQUFBO0lBQ3hDLENBQUM7SUFDRCxrQ0FBSyxHQUFMLFVBQU0sTUFBTTtRQUNWLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFBO0lBQzlCLENBQUM7d0ZBWlUsa0JBQWtCLHVCQUVULGVBQWU7MkRBRnhCLGtCQUFrQjtZQ1IvQiwwQ0FDRTtZQUFBLDZCQUFrQjtZQUFBLFlBQVc7WUFBQSxpQkFBSztZQUNsQyw4QkFDRTtZQUFBLGlDQUNFO1lBRHFCLCtGQUFTLFVBQU0sS0FBSyxDQUFDLElBQUM7WUFDM0MscUJBQ0Y7WUFBQSxpQkFBUztZQUNULGlDQUNFO1lBRHNCLCtGQUFTLFVBQU0sSUFBSSxDQUFDLElBQUM7WUFDM0MscUJBQ0Y7WUFBQSxpQkFBUztZQUNYLGlCQUFNO1lBQ1IsaUJBQXFCOztZQVRELGVBQVc7WUFBWCxpQ0FBVzs7NkJERC9CO0NBc0JDLEFBbkJELElBbUJDO1NBZFksa0JBQWtCO2tEQUFsQixrQkFBa0I7Y0FMOUIsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSx5QkFBeUI7Z0JBQ25DLFdBQVcsRUFBRSxzQ0FBc0M7Z0JBQ25ELFNBQVMsRUFBRSxDQUFDLHNDQUFzQyxDQUFDO2FBQ3BEOztzQkFHYyxNQUFNO3VCQUFDLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE1hdERpYWxvZ1JlZiwgTUFUX0RJQUxPR19EQVRBIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbGliLWRpYWxvZy1jb25maXJtYXRpb24nLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9kaWFsb2ctY29uZmlybWF0aW9uLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9kaWFsb2ctY29uZmlybWF0aW9uLmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIERpYWxvZ0NvbmZpcm1hdGlvbiBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgbWVzc2FnZSA9ICcnXHJcbiAgY29uc3RydWN0b3IoQEluamVjdChNQVRfRElBTE9HX0RBVEEpIHByaXZhdGUgZGF0YTogYW55LFxyXG4gICAgcHJpdmF0ZSBkaWFsb2dSZWY6IE1hdERpYWxvZ1JlZjxEaWFsb2dDb25maXJtYXRpb24+KSB7XHJcblxyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLm1lc3NhZ2UgPSB0aGlzLmRhdGEubWVzc2FnZSB8fCAnJ1xyXG4gIH1cclxuICBjbG9zZShzdGF0dXMpIHtcclxuICAgIHRoaXMuZGlhbG9nUmVmLmNsb3NlKHN0YXR1cylcclxuICB9XHJcblxyXG59XHJcbiIsIjxtYXQtZGlhbG9nLWNvbnRlbnQ+XHJcbiAgPGgzIGNsYXNzPVwidGl0bGVcIj57e21lc3NhZ2V9fTwvaDM+XHJcbiAgPGRpdiBjbGFzcz1cImFjdGlvbi1jb250ZW50XCI+XHJcbiAgICA8YnV0dG9uIGNsYXNzPVwiY2FuY2VsXCIgKGNsaWNrKT1cImNsb3NlKGZhbHNlKVwiIG1hdC1yYWlzZWQtYnV0dG9uPlxyXG4gICAgICBOb25cclxuICAgIDwvYnV0dG9uPlxyXG4gICAgPGJ1dHRvbiBjbGFzcz1cImNvbmZpcm1cIiAoY2xpY2spPVwiY2xvc2UodHJ1ZSlcIiBtYXQtcmFpc2VkLWJ1dHRvbj5cclxuICAgICAgT3VpXHJcbiAgICA8L2J1dHRvbj5cclxuICA8L2Rpdj5cclxuPC9tYXQtZGlhbG9nLWNvbnRlbnQ+Il19