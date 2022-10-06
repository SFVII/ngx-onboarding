import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/dialog";
import * as i2 from "@angular/material/button";
import * as i3 from "@angular/material/icon";
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
    } }, dependencies: [i2.MatButton, i3.MatIcon, i1.MatDialogContent], styles: ["mat-dialog-content[_ngcontent-%COMP%]{display:flex!important;flex-direction:column;justify-content:space-between;text-align:center;padding:12px 25px}mat-dialog-content[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{margin-bottom:10px}mat-dialog-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-style:normal;font-weight:700;font-size:20px;line-height:110%;display:flex;align-items:center;color:#242731}mat-dialog-content[_ngcontent-%COMP%]   .action-content[_ngcontent-%COMP%]{display:flex;justify-content:space-around}mat-dialog-content[_ngcontent-%COMP%]   .confirm[_ngcontent-%COMP%]{background-color:#242731;color:#fff;box-shadow:0 0 #0003;padding:10px!important;border-radius:7px}mat-dialog-content[_ngcontent-%COMP%]   .cancel[_ngcontent-%COMP%]{box-shadow:none;border:1px solid #242731;border-radius:7px;padding:10px!important}mat-dialog-content[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center}mat-dialog-content[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:50px;color:#6fe8d7}mat-dialog-content[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]{font-style:normal;font-weight:700;font-size:20px;line-height:110%;color:#242731}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DialogConfirmation, [{
        type: Component,
        args: [{ selector: 'lib-dialog-confirmation', template: "<mat-dialog-content class=\"ngx-onboarding-dialog\">\n  <h3 class=\"title\">\n    <p>\n      <mat-icon>check_circle</mat-icon>\n    </p>\n    <p class=\"message\">{{message}}</p>\n  </h3>\n  <div class=\"action-content\">\n    <button class=\"confirm\" (click)=\"close(true)\" mat-raised-button>\n      {{confirmText}}\n    </button>\n    <button class=\"cancel\" (click)=\"close(false)\" mat-raised-button>\n      {{cancelText}}\n    </button>\n\n  </div>\n</mat-dialog-content>", styles: ["mat-dialog-content{display:flex!important;flex-direction:column;justify-content:space-between;text-align:center;padding:12px 25px}mat-dialog-content mat-form-field{margin-bottom:10px}mat-dialog-content h3{font-style:normal;font-weight:700;font-size:20px;line-height:110%;display:flex;align-items:center;color:#242731}mat-dialog-content .action-content{display:flex;justify-content:space-around}mat-dialog-content .confirm{background-color:#242731;color:#fff;box-shadow:0 0 #0003;padding:10px!important;border-radius:7px}mat-dialog-content .cancel{box-shadow:none;border:1px solid #242731;border-radius:7px;padding:10px!important}mat-dialog-content .title{display:flex;flex-direction:column;align-items:center;justify-content:center}mat-dialog-content .title mat-icon{font-size:50px;color:#6fe8d7}mat-dialog-content .title .message{font-style:normal;font-weight:700;font-size:20px;line-height:110%;color:#242731}\n"] }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [MAT_DIALOG_DATA]
            }] }, { type: i1.MatDialogRef }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLWNvbmZpcm1hdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9vbmJvYXJkaW5nL3NyYy9saWIvY29tcG9uZW50cy9kaWFsb2ctY29uZmlybWF0aW9uL2RpYWxvZy1jb25maXJtYXRpb24uY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvb25ib2FyZGluZy9zcmMvbGliL2NvbXBvbmVudHMvZGlhbG9nLWNvbmZpcm1hdGlvbi9kaWFsb2ctY29uZmlybWF0aW9uLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFELE9BQU8sRUFBZ0IsZUFBZSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7Ozs7O0FBT3pFLE1BQU0sT0FBTyxrQkFBa0I7SUFLN0IsWUFBNkMsSUFBUyxFQUM1QyxTQUEyQztRQURSLFNBQUksR0FBSixJQUFJLENBQUs7UUFDNUMsY0FBUyxHQUFULFNBQVMsQ0FBa0M7UUFMckQsWUFBTyxHQUFHLEVBQUUsQ0FBQTtRQUNaLFNBQUksR0FBRyxFQUFFLENBQUE7UUFDVCxnQkFBVyxHQUFHLEVBQUUsQ0FBQTtRQUNoQixlQUFVLEdBQUcsRUFBRSxDQUFBO0lBSWYsQ0FBQztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxJQUFJLEVBQUUsQ0FBQTtRQUN0QyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLGNBQWMsQ0FBQTtRQUM1QyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxJQUFJLEtBQUssQ0FBQTtRQUNqRCxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxJQUFJLEtBQUssQ0FBQTtJQUNqRCxDQUFDO0lBQ0QsS0FBSyxDQUFDLE1BQU07UUFDVixJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQTtJQUM5QixDQUFDOztvRkFsQlUsa0JBQWtCLHVCQUtULGVBQWU7cUVBTHhCLGtCQUFrQjtRQ1IvQiw2Q0FBa0QsWUFBQSxRQUFBLGVBQUE7UUFHbEMsNEJBQVk7UUFBQSxpQkFBVyxFQUFBO1FBRW5DLDRCQUFtQjtRQUFBLFlBQVc7UUFBQSxpQkFBSSxFQUFBO1FBRXBDLDhCQUE0QixnQkFBQTtRQUNGLCtGQUFTLFVBQU0sSUFBSSxDQUFDLElBQUM7UUFDM0MsWUFDRjtRQUFBLGlCQUFTO1FBQ1Qsa0NBQWdFO1FBQXpDLGdHQUFTLFVBQU0sS0FBSyxDQUFDLElBQUM7UUFDM0MsYUFDRjtRQUFBLGlCQUFTLEVBQUEsRUFBQTs7UUFSVSxlQUFXO1FBQVgsaUNBQVc7UUFJNUIsZUFDRjtRQURFLGdEQUNGO1FBRUUsZUFDRjtRQURFLCtDQUNGOzt1RkRMUyxrQkFBa0I7Y0FMOUIsU0FBUzsyQkFDRSx5QkFBeUI7O3NCQVN0QixNQUFNO3VCQUFDLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNYXREaWFsb2dSZWYsIE1BVF9ESUFMT0dfREFUQSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RpYWxvZyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1kaWFsb2ctY29uZmlybWF0aW9uJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2RpYWxvZy1jb25maXJtYXRpb24uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9kaWFsb2ctY29uZmlybWF0aW9uLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgRGlhbG9nQ29uZmlybWF0aW9uIGltcGxlbWVudHMgT25Jbml0IHtcbiAgbWVzc2FnZSA9ICcnXG4gIGljb24gPSBcIlwiXG4gIGNvbmZpcm1UZXh0ID0gXCJcIlxuICBjYW5jZWxUZXh0ID0gXCJcIlxuICBjb25zdHJ1Y3RvcihASW5qZWN0KE1BVF9ESUFMT0dfREFUQSkgcHJpdmF0ZSBkYXRhOiBhbnksXG4gICAgcHJpdmF0ZSBkaWFsb2dSZWY6IE1hdERpYWxvZ1JlZjxEaWFsb2dDb25maXJtYXRpb24+KSB7XG5cbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMubWVzc2FnZSA9IHRoaXMuZGF0YS5tZXNzYWdlIHx8ICcnXG4gICAgdGhpcy5pY29uID0gdGhpcy5kYXRhLmljb24gfHwgJ2NoZWNrLWNpcmNsZSdcbiAgICB0aGlzLmNvbmZpcm1UZXh0ID0gdGhpcy5kYXRhLmNvbmZpcm1UZXh0IHx8ICdPdWknXG4gICAgdGhpcy5jYW5jZWxUZXh0ID0gdGhpcy5kYXRhLmNhbmNlbFRleHQgfHwgJ05vbidcbiAgfVxuICBjbG9zZShzdGF0dXMpIHtcbiAgICB0aGlzLmRpYWxvZ1JlZi5jbG9zZShzdGF0dXMpXG4gIH1cblxufVxuIiwiPG1hdC1kaWFsb2ctY29udGVudCBjbGFzcz1cIm5neC1vbmJvYXJkaW5nLWRpYWxvZ1wiPlxuICA8aDMgY2xhc3M9XCJ0aXRsZVwiPlxuICAgIDxwPlxuICAgICAgPG1hdC1pY29uPmNoZWNrX2NpcmNsZTwvbWF0LWljb24+XG4gICAgPC9wPlxuICAgIDxwIGNsYXNzPVwibWVzc2FnZVwiPnt7bWVzc2FnZX19PC9wPlxuICA8L2gzPlxuICA8ZGl2IGNsYXNzPVwiYWN0aW9uLWNvbnRlbnRcIj5cbiAgICA8YnV0dG9uIGNsYXNzPVwiY29uZmlybVwiIChjbGljayk9XCJjbG9zZSh0cnVlKVwiIG1hdC1yYWlzZWQtYnV0dG9uPlxuICAgICAge3tjb25maXJtVGV4dH19XG4gICAgPC9idXR0b24+XG4gICAgPGJ1dHRvbiBjbGFzcz1cImNhbmNlbFwiIChjbGljayk9XCJjbG9zZShmYWxzZSlcIiBtYXQtcmFpc2VkLWJ1dHRvbj5cbiAgICAgIHt7Y2FuY2VsVGV4dH19XG4gICAgPC9idXR0b24+XG5cbiAgPC9kaXY+XG48L21hdC1kaWFsb2ctY29udGVudD4iXX0=