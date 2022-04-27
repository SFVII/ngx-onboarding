import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/dialog";
import * as i2 from "@angular/material/button";
export class DialogConfirmation {
    constructor(data, dialogRef) {
        this.data = data;
        this.dialogRef = dialogRef;
        this.message = '';
    }
    ngOnInit() {
        this.message = this.data.message || '';
    }
    close(status) {
        this.dialogRef.close(status);
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLWNvbmZpcm1hdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9vbmJvYXJkaW5nLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvZGlhbG9nLWNvbmZpcm1hdGlvbi9kaWFsb2ctY29uZmlybWF0aW9uLmNvbXBvbmVudC50cyIsImxpYi9jb21wb25lbnRzL2RpYWxvZy1jb25maXJtYXRpb24vZGlhbG9nLWNvbmZpcm1hdGlvbi5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxRCxPQUFPLEVBQWdCLGVBQWUsRUFBRSxNQUFNLDBCQUEwQixDQUFDOzs7O0FBT3pFLE1BQU0sT0FBTyxrQkFBa0I7SUFFN0IsWUFBNkMsSUFBUyxFQUM1QyxTQUEyQztRQURSLFNBQUksR0FBSixJQUFJLENBQUs7UUFDNUMsY0FBUyxHQUFULFNBQVMsQ0FBa0M7UUFGckQsWUFBTyxHQUFHLEVBQUUsQ0FBQTtJQUlaLENBQUM7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sSUFBSSxFQUFFLENBQUE7SUFDeEMsQ0FBQztJQUNELEtBQUssQ0FBQyxNQUFNO1FBQ1YsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUE7SUFDOUIsQ0FBQzs7b0ZBWlUsa0JBQWtCLHVCQUVULGVBQWU7dURBRnhCLGtCQUFrQjtRQ1IvQiwwQ0FDRTtRQUFBLDZCQUFrQjtRQUFBLFlBQVc7UUFBQSxpQkFBSztRQUNsQyw4QkFDRTtRQUFBLGlDQUNFO1FBRHFCLCtGQUFTLFVBQU0sS0FBSyxDQUFDLElBQUM7UUFDM0MscUJBQ0Y7UUFBQSxpQkFBUztRQUNULGlDQUNFO1FBRHNCLCtGQUFTLFVBQU0sSUFBSSxDQUFDLElBQUM7UUFDM0MscUJBQ0Y7UUFBQSxpQkFBUztRQUNYLGlCQUFNO1FBQ1IsaUJBQXFCOztRQVRELGVBQVc7UUFBWCxpQ0FBVzs7a0RET2xCLGtCQUFrQjtjQUw5QixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLHlCQUF5QjtnQkFDbkMsV0FBVyxFQUFFLHNDQUFzQztnQkFDbkQsU0FBUyxFQUFFLENBQUMsc0NBQXNDLENBQUM7YUFDcEQ7O3NCQUdjLE1BQU07dUJBQUMsZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTWF0RGlhbG9nUmVmLCBNQVRfRElBTE9HX0RBVEEgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kaWFsb2cnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdsaWItZGlhbG9nLWNvbmZpcm1hdGlvbicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2RpYWxvZy1jb25maXJtYXRpb24uY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2RpYWxvZy1jb25maXJtYXRpb24uY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRGlhbG9nQ29uZmlybWF0aW9uIGltcGxlbWVudHMgT25Jbml0IHtcclxuICBtZXNzYWdlID0gJydcclxuICBjb25zdHJ1Y3RvcihASW5qZWN0KE1BVF9ESUFMT0dfREFUQSkgcHJpdmF0ZSBkYXRhOiBhbnksXHJcbiAgICBwcml2YXRlIGRpYWxvZ1JlZjogTWF0RGlhbG9nUmVmPERpYWxvZ0NvbmZpcm1hdGlvbj4pIHtcclxuXHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMubWVzc2FnZSA9IHRoaXMuZGF0YS5tZXNzYWdlIHx8ICcnXHJcbiAgfVxyXG4gIGNsb3NlKHN0YXR1cykge1xyXG4gICAgdGhpcy5kaWFsb2dSZWYuY2xvc2Uoc3RhdHVzKVxyXG4gIH1cclxuXHJcbn1cclxuIiwiPG1hdC1kaWFsb2ctY29udGVudD5cclxuICA8aDMgY2xhc3M9XCJ0aXRsZVwiPnt7bWVzc2FnZX19PC9oMz5cclxuICA8ZGl2IGNsYXNzPVwiYWN0aW9uLWNvbnRlbnRcIj5cclxuICAgIDxidXR0b24gY2xhc3M9XCJjYW5jZWxcIiAoY2xpY2spPVwiY2xvc2UoZmFsc2UpXCIgbWF0LXJhaXNlZC1idXR0b24+XHJcbiAgICAgIE5vblxyXG4gICAgPC9idXR0b24+XHJcbiAgICA8YnV0dG9uIGNsYXNzPVwiY29uZmlybVwiIChjbGljayk9XCJjbG9zZSh0cnVlKVwiIG1hdC1yYWlzZWQtYnV0dG9uPlxyXG4gICAgICBPdWlcclxuICAgIDwvYnV0dG9uPlxyXG4gIDwvZGl2PlxyXG48L21hdC1kaWFsb2ctY29udGVudD4iXX0=