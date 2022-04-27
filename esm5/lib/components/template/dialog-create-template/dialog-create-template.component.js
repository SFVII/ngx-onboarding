import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/dialog";
import * as i2 from "../../../onboarding.service";
import * as i3 from "@angular/material/form-field";
import * as i4 from "@angular/material/input";
import * as i5 from "@angular/forms";
import * as i6 from "ngx-intl-tel-input";
import * as i7 from "@angular/material/select";
import * as i8 from "@angular/common";
import * as i9 from "@angular/material/button";
import * as i10 from "@angular/material/core";
function DialogCreateTemplateComponent_mat_option_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 8);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var tag_r473 = ctx.$implicit;
    i0.ɵɵproperty("value", tag_r473);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(tag_r473);
} }
var DialogCreateTemplateComponent = /** @class */ (function () {
    function DialogCreateTemplateComponent(data, dialogRef, service) {
        this.data = data;
        this.dialogRef = dialogRef;
        this.service = service;
        this.tags = [];
        this.profil = {
            Name: '',
            Tags: ''
        };
    }
    DialogCreateTemplateComponent.prototype.ngOnInit = function () {
        var _a;
        this.tags = this.data.tags;
        this.profil = ((_a = this.data) === null || _a === void 0 ? void 0 : _a.profil) || this.profil;
    };
    DialogCreateTemplateComponent.prototype.onSelect = function (type) {
        this.dialogRef.close(type);
    };
    DialogCreateTemplateComponent.prototype.createProfil = function () {
        if (!this.disabled()) {
            this.dialogRef.close(this.profil);
        }
    };
    DialogCreateTemplateComponent.prototype.close = function () {
        this.dialogRef.close(false);
    };
    DialogCreateTemplateComponent.prototype.disabled = function () {
        return !(this.profil.Name !== "" && this.profil.Tags !== "");
    };
    DialogCreateTemplateComponent.ɵfac = function DialogCreateTemplateComponent_Factory(t) { return new (t || DialogCreateTemplateComponent)(i0.ɵɵdirectiveInject(MAT_DIALOG_DATA), i0.ɵɵdirectiveInject(i1.MatDialogRef), i0.ɵɵdirectiveInject(i2.OnboardingService)); };
    DialogCreateTemplateComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DialogCreateTemplateComponent, selectors: [["lib-dialog-create-template"]], decls: 17, vars: 4, consts: [[1, "title"], ["appearance", "outline", 1, "full-width"], ["type", "text", "matInput", "", "placeholder", "Ex. Manager", 3, "ngModel", "ngModelChange"], ["required", "", 3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], [1, "action-content"], ["mat-raised-button", "", 1, "create-profil", 3, "disabled", "click"], ["mat-raised-button", "", 1, "abandon-profil", 3, "click"], [3, "value"]], template: function DialogCreateTemplateComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "mat-dialog-content");
            i0.ɵɵelementStart(1, "h3", 0);
            i0.ɵɵtext(2, "Cr\u00E9ation d\u2019un nouveau profil");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "mat-form-field", 1);
            i0.ɵɵelementStart(4, "mat-label");
            i0.ɵɵtext(5, "Nom de votre nouveau profil");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "input", 2);
            i0.ɵɵlistener("ngModelChange", function DialogCreateTemplateComponent_Template_input_ngModelChange_6_listener($event) { return ctx.profil.Name = $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "mat-form-field", 1);
            i0.ɵɵelementStart(8, "mat-label");
            i0.ɵɵtext(9, "Tags");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(10, "mat-select", 3);
            i0.ɵɵlistener("ngModelChange", function DialogCreateTemplateComponent_Template_mat_select_ngModelChange_10_listener($event) { return ctx.profil.Tags = $event; });
            i0.ɵɵtemplate(11, DialogCreateTemplateComponent_mat_option_11_Template, 2, 2, "mat-option", 4);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(12, "div", 5);
            i0.ɵɵelementStart(13, "button", 6);
            i0.ɵɵlistener("click", function DialogCreateTemplateComponent_Template_button_click_13_listener() { return ctx.createProfil(); });
            i0.ɵɵtext(14, " Cr\u00E9er profil ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(15, "button", 7);
            i0.ɵɵlistener("click", function DialogCreateTemplateComponent_Template_button_click_15_listener() { return ctx.close(); });
            i0.ɵɵtext(16, " Abandonner ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(6);
            i0.ɵɵproperty("ngModel", ctx.profil.Name);
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("ngModel", ctx.profil.Tags);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngForOf", ctx.tags);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("disabled", ctx.disabled());
        } }, directives: [i1.MatDialogContent, i3.MatFormField, i3.MatLabel, i4.MatInput, i5.DefaultValueAccessor, i5.NgControlStatus, i5.NgModel, i6.NativeElementInjectorDirective, i7.MatSelect, i5.RequiredValidator, i8.NgForOf, i9.MatButton, i10.MatOption], styles: ["mat-dialog-content[_ngcontent-%COMP%]{display:flex!important;flex-direction:column;justify-content:flex-start;max-width:555px;min-width:555px}mat-dialog-content[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{margin-bottom:10px}mat-dialog-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-family:Nexa;font-style:normal;font-weight:700;font-size:20px;line-height:110%;display:flex;align-items:center;color:#242731}mat-dialog-content[_ngcontent-%COMP%]   .abandon-profil[_ngcontent-%COMP%]{background-color:transparent;border:1px solid #171f26;color:#171f26;margin-left:20px}mat-dialog-content[_ngcontent-%COMP%]   .create-profil[_ngcontent-%COMP%]{background-color:#171f26;border:1px solid #171f26;color:#fff}mat-dialog-content[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled, mat-dialog-content[_ngcontent-%COMP%]   button[disabled][_ngcontent-%COMP%]{opacity:.5}"] });
    return DialogCreateTemplateComponent;
}());
export { DialogCreateTemplateComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DialogCreateTemplateComponent, [{
        type: Component,
        args: [{
                selector: 'lib-dialog-create-template',
                templateUrl: './dialog-create-template.component.html',
                styleUrls: ['./dialog-create-template.component.scss']
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [MAT_DIALOG_DATA]
            }] }, { type: i1.MatDialogRef }, { type: i2.OnboardingService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLWNyZWF0ZS10ZW1wbGF0ZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9vbmJvYXJkaW5nLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvdGVtcGxhdGUvZGlhbG9nLWNyZWF0ZS10ZW1wbGF0ZS9kaWFsb2ctY3JlYXRlLXRlbXBsYXRlLmNvbXBvbmVudC50cyIsImxpYi9jb21wb25lbnRzL3RlbXBsYXRlL2RpYWxvZy1jcmVhdGUtdGVtcGxhdGUvZGlhbG9nLWNyZWF0ZS10ZW1wbGF0ZS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxRCxPQUFPLEVBQWdCLGVBQWUsRUFBRSxNQUFNLDBCQUEwQixDQUFDOzs7Ozs7Ozs7Ozs7O0lDWW5FLHFDQUFtRDtJQUFBLFlBQVM7SUFBQSxpQkFBYTs7O0lBQXBDLGdDQUFhO0lBQUMsZUFBUztJQUFULDhCQUFTOztBRFRsRTtJQU9FLHVDQUE2QyxJQUFTLEVBQzVDLFNBQXNELEVBQVUsT0FBMEI7UUFEdkQsU0FBSSxHQUFKLElBQUksQ0FBSztRQUM1QyxjQUFTLEdBQVQsU0FBUyxDQUE2QztRQUFVLFlBQU8sR0FBUCxPQUFPLENBQW1CO1FBR3BHLFNBQUksR0FBRyxFQUFFLENBQUM7UUFDVixXQUFNLEdBQUc7WUFDUCxJQUFJLEVBQUUsRUFBRTtZQUNSLElBQUksRUFBRSxFQUFFO1NBQ1QsQ0FBQTtJQUxELENBQUM7SUFNRCxnREFBUSxHQUFSOztRQUNFLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUE7UUFDMUIsSUFBSSxDQUFDLE1BQU0sR0FBRyxPQUFBLElBQUksQ0FBQyxJQUFJLDBDQUFFLE1BQU0sS0FBSSxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ2pELENBQUM7SUFFRCxnREFBUSxHQUFSLFVBQVMsSUFBSTtRQUNYLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFDRCxvREFBWSxHQUFaO1FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsRUFBRTtZQUNwQixJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUE7U0FDbEM7SUFDSCxDQUFDO0lBQ0QsNkNBQUssR0FBTDtRQUNFLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFBO0lBQzdCLENBQUM7SUFFRCxnREFBUSxHQUFSO1FBQ0UsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEtBQUssRUFBRSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxLQUFLLEVBQUUsQ0FBQyxDQUFBO0lBQzlELENBQUM7OEdBOUJVLDZCQUE2Qix1QkFFcEIsZUFBZTtzRUFGeEIsNkJBQTZCO1lDVDFDLDBDQUNFO1lBQUEsNkJBQWtCO1lBQUEsc0RBQTRCO1lBQUEsaUJBQUs7WUFDbkQseUNBQ0U7WUFBQSxpQ0FBVztZQUFBLDJDQUEyQjtZQUFBLGlCQUFZO1lBQ2xELGdDQUNGO1lBRDhCLDJKQUF5QjtZQUFyRCxpQkFDRjtZQUFBLGlCQUFpQjtZQUtqQix5Q0FDRTtZQUFBLGlDQUFXO1lBQUEsb0JBQUk7WUFBQSxpQkFBWTtZQUMzQixzQ0FDRTtZQURVLGlLQUF5QjtZQUNuQyw4RkFBbUQ7WUFDckQsaUJBQWE7WUFDZixpQkFBaUI7WUFDakIsK0JBQ0U7WUFBQSxrQ0FDRTtZQURvRCwyR0FBUyxrQkFBYyxJQUFDO1lBQzVFLG9DQUNGO1lBQUEsaUJBQVM7WUFDVCxrQ0FDRTtZQUQ2QiwyR0FBUyxXQUFPLElBQUM7WUFDOUMsNkJBQ0Y7WUFBQSxpQkFBUztZQUNYLGlCQUFNO1lBQ1IsaUJBQXFCOztZQXBCVyxlQUF5QjtZQUF6Qix5Q0FBeUI7WUFRekMsZUFBeUI7WUFBekIseUNBQXlCO1lBQ3ZCLGVBQXdCO1lBQXhCLGtDQUF3QjtZQUk5QixlQUF1QjtZQUF2Qix5Q0FBdUI7O3dDRGpCbkM7Q0F5Q0MsQUFyQ0QsSUFxQ0M7U0FoQ1ksNkJBQTZCO2tEQUE3Qiw2QkFBNkI7Y0FMekMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSw0QkFBNEI7Z0JBQ3RDLFdBQVcsRUFBRSx5Q0FBeUM7Z0JBQ3RELFNBQVMsRUFBRSxDQUFDLHlDQUF5QyxDQUFDO2FBQ3ZEOztzQkFHYyxNQUFNO3VCQUFDLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE1hdERpYWxvZ1JlZiwgTUFUX0RJQUxPR19EQVRBIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nJztcclxuaW1wb3J0IHsgT25ib2FyZGluZ1NlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9vbmJvYXJkaW5nLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdsaWItZGlhbG9nLWNyZWF0ZS10ZW1wbGF0ZScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2RpYWxvZy1jcmVhdGUtdGVtcGxhdGUuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2RpYWxvZy1jcmVhdGUtdGVtcGxhdGUuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRGlhbG9nQ3JlYXRlVGVtcGxhdGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBjb25zdHJ1Y3RvcihASW5qZWN0KE1BVF9ESUFMT0dfREFUQSkgcHJpdmF0ZSBkYXRhOiBhbnksXHJcbiAgICBwcml2YXRlIGRpYWxvZ1JlZjogTWF0RGlhbG9nUmVmPERpYWxvZ0NyZWF0ZVRlbXBsYXRlQ29tcG9uZW50PiwgcHJpdmF0ZSBzZXJ2aWNlOiBPbmJvYXJkaW5nU2VydmljZSkge1xyXG5cclxuICB9XHJcbiAgdGFncyA9IFtdO1xyXG4gIHByb2ZpbCA9IHtcclxuICAgIE5hbWU6ICcnLFxyXG4gICAgVGFnczogJydcclxuICB9XHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLnRhZ3MgPSB0aGlzLmRhdGEudGFnc1xyXG4gICAgdGhpcy5wcm9maWwgPSB0aGlzLmRhdGE/LnByb2ZpbCB8fCB0aGlzLnByb2ZpbDtcclxuICB9XHJcblxyXG4gIG9uU2VsZWN0KHR5cGUpOiB2b2lkIHtcclxuICAgIHRoaXMuZGlhbG9nUmVmLmNsb3NlKHR5cGUpO1xyXG4gIH1cclxuICBjcmVhdGVQcm9maWwoKSB7XHJcbiAgICBpZiAoIXRoaXMuZGlzYWJsZWQoKSkge1xyXG4gICAgICB0aGlzLmRpYWxvZ1JlZi5jbG9zZSh0aGlzLnByb2ZpbClcclxuICAgIH1cclxuICB9XHJcbiAgY2xvc2UoKSB7XHJcbiAgICB0aGlzLmRpYWxvZ1JlZi5jbG9zZShmYWxzZSlcclxuICB9XHJcblxyXG4gIGRpc2FibGVkKCkge1xyXG4gICAgcmV0dXJuICEodGhpcy5wcm9maWwuTmFtZSAhPT0gXCJcIiAmJiB0aGlzLnByb2ZpbC5UYWdzICE9PSBcIlwiKVxyXG4gIH1cclxuXHJcbn1cclxuIiwiPG1hdC1kaWFsb2ctY29udGVudD5cclxuICA8aDMgY2xhc3M9XCJ0aXRsZVwiPkNyw6lhdGlvbiBk4oCZdW4gbm91dmVhdSBwcm9maWw8L2gzPlxyXG4gIDxtYXQtZm9ybS1maWVsZCBjbGFzcz1cImZ1bGwtd2lkdGhcIiBhcHBlYXJhbmNlPVwib3V0bGluZVwiPlxyXG4gICAgPG1hdC1sYWJlbD5Ob20gZGUgdm90cmUgbm91dmVhdSBwcm9maWw8L21hdC1sYWJlbD5cclxuICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG1hdElucHV0IFsobmdNb2RlbCldPVwicHJvZmlsLk5hbWVcIiBwbGFjZWhvbGRlcj1cIkV4LiBNYW5hZ2VyXCIgLz5cclxuICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gIDwhLS0gPG1hdC1mb3JtLWZpZWxkIGNsYXNzPVwiZnVsbC13aWR0aFwiIGFwcGVhcmFuY2U9XCJvdXRsaW5lXCI+XHJcbiAgICA8bWF0LWxhYmVsPkRlc2NyaXB0aW9uPC9tYXQtbGFiZWw+XHJcbiAgICA8dGV4dGFyZWEgdHlwZT1cInRleHRcIiBtYXRJbnB1dCBbKG5nTW9kZWwpXT1cIkRlc2NyaXB0aW9uXCIgcm93cz1cIjRcIiBwbGFjZWhvbGRlcj1cIlwiPjwvdGV4dGFyZWE+XHJcbiAgPC9tYXQtZm9ybS1maWVsZD4gLS0+XHJcbiAgPG1hdC1mb3JtLWZpZWxkIGNsYXNzPVwiZnVsbC13aWR0aFwiIGFwcGVhcmFuY2U9XCJvdXRsaW5lXCI+XHJcbiAgICA8bWF0LWxhYmVsPlRhZ3M8L21hdC1sYWJlbD5cclxuICAgIDxtYXQtc2VsZWN0IFsobmdNb2RlbCldPVwicHJvZmlsLlRhZ3NcIiByZXF1aXJlZD5cclxuICAgICAgPG1hdC1vcHRpb24gKm5nRm9yPVwibGV0IHRhZyBvZiB0YWdzXCIgW3ZhbHVlXT1cInRhZ1wiPnt7IHRhZyB9fTwvbWF0LW9wdGlvbj5cclxuICAgIDwvbWF0LXNlbGVjdD5cclxuICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gIDxkaXYgY2xhc3M9XCJhY3Rpb24tY29udGVudFwiPlxyXG4gICAgPGJ1dHRvbiBbZGlzYWJsZWRdPVwiZGlzYWJsZWQoKVwiIGNsYXNzPVwiY3JlYXRlLXByb2ZpbFwiIChjbGljayk9XCJjcmVhdGVQcm9maWwoKVwiIG1hdC1yYWlzZWQtYnV0dG9uPlxyXG4gICAgICBDcsOpZXIgcHJvZmlsXHJcbiAgICA8L2J1dHRvbj5cclxuICAgIDxidXR0b24gY2xhc3M9XCJhYmFuZG9uLXByb2ZpbFwiIChjbGljayk9XCJjbG9zZSgpXCIgbWF0LXJhaXNlZC1idXR0b24+XHJcbiAgICAgIEFiYW5kb25uZXJcclxuICAgIDwvYnV0dG9uPlxyXG4gIDwvZGl2PlxyXG48L21hdC1kaWFsb2ctY29udGVudD4iXX0=