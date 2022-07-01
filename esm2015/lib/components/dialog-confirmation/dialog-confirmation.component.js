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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLWNvbmZpcm1hdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9vbmJvYXJkaW5nLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvZGlhbG9nLWNvbmZpcm1hdGlvbi9kaWFsb2ctY29uZmlybWF0aW9uLmNvbXBvbmVudC50cyIsImxpYi9jb21wb25lbnRzL2RpYWxvZy1jb25maXJtYXRpb24vZGlhbG9nLWNvbmZpcm1hdGlvbi5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxRCxPQUFPLEVBQWdCLGVBQWUsRUFBRSxNQUFNLDBCQUEwQixDQUFDOzs7OztBQU96RSxNQUFNLE9BQU8sa0JBQWtCO0lBSzdCLFlBQTZDLElBQVMsRUFDNUMsU0FBMkM7UUFEUixTQUFJLEdBQUosSUFBSSxDQUFLO1FBQzVDLGNBQVMsR0FBVCxTQUFTLENBQWtDO1FBTHJELFlBQU8sR0FBRyxFQUFFLENBQUE7UUFDWixTQUFJLEdBQUcsRUFBRSxDQUFBO1FBQ1QsZ0JBQVcsR0FBRyxFQUFFLENBQUE7UUFDaEIsZUFBVSxHQUFHLEVBQUUsQ0FBQTtJQUlmLENBQUM7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sSUFBSSxFQUFFLENBQUE7UUFDdEMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxjQUFjLENBQUE7UUFDNUMsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsSUFBSSxLQUFLLENBQUE7UUFDakQsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsSUFBSSxLQUFLLENBQUE7SUFDakQsQ0FBQztJQUNELEtBQUssQ0FBQyxNQUFNO1FBQ1YsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUE7SUFDOUIsQ0FBQzs7b0ZBbEJVLGtCQUFrQix1QkFLVCxlQUFlO3VEQUx4QixrQkFBa0I7UUNSL0IsMENBQ0U7UUFBQSw2QkFDRTtRQUFBLHlCQUNFO1FBQUEsZ0NBQVU7UUFBQSw0QkFBWTtRQUFBLGlCQUFXO1FBQ25DLGlCQUFJO1FBQ0osNEJBQW1CO1FBQUEsWUFBVztRQUFBLGlCQUFJO1FBQ3BDLGlCQUFLO1FBQ0wsOEJBQ0U7UUFBQSxpQ0FDRTtRQURzQiwrRkFBUyxVQUFNLElBQUksQ0FBQyxJQUFDO1FBQzNDLFlBQ0Y7UUFBQSxpQkFBUztRQUNULGtDQUNFO1FBRHFCLGdHQUFTLFVBQU0sS0FBSyxDQUFDLElBQUM7UUFDM0MsYUFDRjtRQUFBLGlCQUFTO1FBRVgsaUJBQU07UUFDUixpQkFBcUI7O1FBWEUsZUFBVztRQUFYLGlDQUFXO1FBSTVCLGVBQ0Y7UUFERSxnREFDRjtRQUVFLGVBQ0Y7UUFERSwrQ0FDRjs7a0RETFMsa0JBQWtCO2NBTDlCLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUseUJBQXlCO2dCQUNuQyxXQUFXLEVBQUUsc0NBQXNDO2dCQUNuRCxTQUFTLEVBQUUsQ0FBQyxzQ0FBc0MsQ0FBQzthQUNwRDs7c0JBTWMsTUFBTTt1QkFBQyxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBNYXREaWFsb2dSZWYsIE1BVF9ESUFMT0dfREFUQSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RpYWxvZyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2xpYi1kaWFsb2ctY29uZmlybWF0aW9uJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vZGlhbG9nLWNvbmZpcm1hdGlvbi5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vZGlhbG9nLWNvbmZpcm1hdGlvbi5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEaWFsb2dDb25maXJtYXRpb24gaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIG1lc3NhZ2UgPSAnJ1xyXG4gIGljb24gPSBcIlwiXHJcbiAgY29uZmlybVRleHQgPSBcIlwiXHJcbiAgY2FuY2VsVGV4dCA9IFwiXCJcclxuICBjb25zdHJ1Y3RvcihASW5qZWN0KE1BVF9ESUFMT0dfREFUQSkgcHJpdmF0ZSBkYXRhOiBhbnksXHJcbiAgICBwcml2YXRlIGRpYWxvZ1JlZjogTWF0RGlhbG9nUmVmPERpYWxvZ0NvbmZpcm1hdGlvbj4pIHtcclxuXHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMubWVzc2FnZSA9IHRoaXMuZGF0YS5tZXNzYWdlIHx8ICcnXHJcbiAgICB0aGlzLmljb24gPSB0aGlzLmRhdGEuaWNvbiB8fCAnY2hlY2stY2lyY2xlJ1xyXG4gICAgdGhpcy5jb25maXJtVGV4dCA9IHRoaXMuZGF0YS5jb25maXJtVGV4dCB8fCAnT3VpJ1xyXG4gICAgdGhpcy5jYW5jZWxUZXh0ID0gdGhpcy5kYXRhLmNhbmNlbFRleHQgfHwgJ05vbidcclxuICB9XHJcbiAgY2xvc2Uoc3RhdHVzKSB7XHJcbiAgICB0aGlzLmRpYWxvZ1JlZi5jbG9zZShzdGF0dXMpXHJcbiAgfVxyXG5cclxufVxyXG4iLCI8bWF0LWRpYWxvZy1jb250ZW50PlxyXG4gIDxoMyBjbGFzcz1cInRpdGxlXCI+XHJcbiAgICA8cD5cclxuICAgICAgPG1hdC1pY29uPmNoZWNrX2NpcmNsZTwvbWF0LWljb24+XHJcbiAgICA8L3A+XHJcbiAgICA8cCBjbGFzcz1cIm1lc3NhZ2VcIj57e21lc3NhZ2V9fTwvcD5cclxuICA8L2gzPlxyXG4gIDxkaXYgY2xhc3M9XCJhY3Rpb24tY29udGVudFwiPlxyXG4gICAgPGJ1dHRvbiBjbGFzcz1cImNvbmZpcm1cIiAoY2xpY2spPVwiY2xvc2UodHJ1ZSlcIiBtYXQtcmFpc2VkLWJ1dHRvbj5cclxuICAgICAge3tjb25maXJtVGV4dH19XHJcbiAgICA8L2J1dHRvbj5cclxuICAgIDxidXR0b24gY2xhc3M9XCJjYW5jZWxcIiAoY2xpY2spPVwiY2xvc2UoZmFsc2UpXCIgbWF0LXJhaXNlZC1idXR0b24+XHJcbiAgICAgIHt7Y2FuY2VsVGV4dH19XHJcbiAgICA8L2J1dHRvbj5cclxuXHJcbiAgPC9kaXY+XHJcbjwvbWF0LWRpYWxvZy1jb250ZW50PiJdfQ==