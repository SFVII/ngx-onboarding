import { __assign } from "tslib";
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/dialog";
import * as i2 from "../../../onboarding.service";
import * as i3 from "@angular/material/form-field";
import * as i4 from "@angular/material/select";
import * as i5 from "@angular/forms";
import * as i6 from "ngx-intl-tel-input";
import * as i7 from "@angular/common";
import * as i8 from "@angular/material/button";
import * as i9 from "@angular/material/core";
function DialogCreateOnboardingComponent_mat_option_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 7);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var template_r892 = ctx.$implicit;
    i0.ɵɵproperty("value", template_r892._id);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(template_r892.Name);
} }
var DialogCreateOnboardingComponent = /** @class */ (function () {
    function DialogCreateOnboardingComponent(data, dialogRef, service) {
        var _this = this;
        this.data = data;
        this.dialogRef = dialogRef;
        this.service = service;
        this.templates = [];
        this.onboarding = {
            TemplateId: 0,
        };
        this.service._templates.subscribe(function (data) {
            _this.templates = data;
        });
    }
    DialogCreateOnboardingComponent.prototype.ngOnInit = function () {
        this.templates = this.data.templates;
    };
    DialogCreateOnboardingComponent.prototype.createOnboarding = function () {
        var _this = this;
        if (!this.disabled()) {
            var template = this.templates.find(function (temp) { return temp._id === _this.onboarding.TemplateId; });
            this.dialogRef.close(__assign(__assign({}, this.onboarding), { categories: template.categories }));
        }
    };
    DialogCreateOnboardingComponent.prototype.close = function () {
        this.dialogRef.close(false);
    };
    DialogCreateOnboardingComponent.prototype.disabled = function () {
        return !(this.onboarding.TemplateId);
    };
    DialogCreateOnboardingComponent.ɵfac = function DialogCreateOnboardingComponent_Factory(t) { return new (t || DialogCreateOnboardingComponent)(i0.ɵɵdirectiveInject(MAT_DIALOG_DATA), i0.ɵɵdirectiveInject(i1.MatDialogRef), i0.ɵɵdirectiveInject(i2.OnboardingService)); };
    DialogCreateOnboardingComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DialogCreateOnboardingComponent, selectors: [["lib-dialog-create-onboarding"]], decls: 13, vars: 3, consts: [[1, "title"], ["appearance", "outline", 1, "full-width"], ["required", "", 3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], [1, "action-content"], ["mat-raised-button", "", 1, "create-profil", 3, "disabled", "click"], ["mat-raised-button", "", 1, "abandon-profil", 3, "click"], [3, "value"]], template: function DialogCreateOnboardingComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "mat-dialog-content");
            i0.ɵɵelementStart(1, "h3", 0);
            i0.ɵɵtext(2, "Cr\u00E9ation d\u2019une demande d'int\u00E9gration");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "mat-form-field", 1);
            i0.ɵɵelementStart(4, "mat-label");
            i0.ɵɵtext(5, "Type de profil");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "mat-select", 2);
            i0.ɵɵlistener("ngModelChange", function DialogCreateOnboardingComponent_Template_mat_select_ngModelChange_6_listener($event) { return ctx.onboarding.TemplateId = $event; });
            i0.ɵɵtemplate(7, DialogCreateOnboardingComponent_mat_option_7_Template, 2, 2, "mat-option", 3);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(8, "div", 4);
            i0.ɵɵelementStart(9, "button", 5);
            i0.ɵɵlistener("click", function DialogCreateOnboardingComponent_Template_button_click_9_listener() { return ctx.createOnboarding(); });
            i0.ɵɵtext(10, " Lancer la demande ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(11, "button", 6);
            i0.ɵɵlistener("click", function DialogCreateOnboardingComponent_Template_button_click_11_listener() { return ctx.close(); });
            i0.ɵɵtext(12, " Abandonner ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(6);
            i0.ɵɵproperty("ngModel", ctx.onboarding.TemplateId);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngForOf", ctx.templates);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("disabled", ctx.disabled());
        } }, directives: [i1.MatDialogContent, i3.MatFormField, i3.MatLabel, i4.MatSelect, i5.RequiredValidator, i5.NgControlStatus, i5.NgModel, i6.NativeElementInjectorDirective, i7.NgForOf, i8.MatButton, i9.MatOption], styles: ["mat-dialog-content[_ngcontent-%COMP%]{display:flex!important;flex-direction:column;justify-content:flex-start;max-width:400px;min-width:400px}mat-dialog-content[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{margin-bottom:10px}mat-dialog-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-family:Nexa;font-style:normal;font-weight:700;font-size:20px;line-height:110%;display:flex;align-items:center;color:#242731}mat-dialog-content[_ngcontent-%COMP%]   .abandon-profil[_ngcontent-%COMP%]{background-color:transparent;border:1px solid #171f26;color:#171f26;margin-left:20px}mat-dialog-content[_ngcontent-%COMP%]   .create-profil[_ngcontent-%COMP%]{background-color:#171f26;border:1px solid #171f26;color:#fff}mat-dialog-content[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled, mat-dialog-content[_ngcontent-%COMP%]   button[disabled][_ngcontent-%COMP%]{opacity:.5}"] });
    return DialogCreateOnboardingComponent;
}());
export { DialogCreateOnboardingComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DialogCreateOnboardingComponent, [{
        type: Component,
        args: [{
                selector: 'lib-dialog-create-onboarding',
                templateUrl: './dialog-create-onboarding.component.html',
                styleUrls: ['./dialog-create-onboarding.component.scss']
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [MAT_DIALOG_DATA]
            }] }, { type: i1.MatDialogRef }, { type: i2.OnboardingService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLWNyZWF0ZS1vbmJvYXJkaW5nLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL29uYm9hcmRpbmcvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9vbmJvYXJkaW5nL2RpYWxvZy1jcmVhdGUtb25ib2FyZGluZy9kaWFsb2ctY3JlYXRlLW9uYm9hcmRpbmcuY29tcG9uZW50LnRzIiwibGliL2NvbXBvbmVudHMvb25ib2FyZGluZy9kaWFsb2ctY3JlYXRlLW9uYm9hcmRpbmcvZGlhbG9nLWNyZWF0ZS1vbmJvYXJkaW5nLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxRCxPQUFPLEVBQWdCLGVBQWUsRUFBRSxNQUFNLDBCQUEwQixDQUFDOzs7Ozs7Ozs7Ozs7SUNJbkUscUNBQXNFO0lBQUEsWUFBbUI7SUFBQSxpQkFBYTs7O0lBQXZELHlDQUFzQjtJQUFDLGVBQW1CO0lBQW5CLHdDQUFtQjs7QUREL0Y7SUFVRSx5Q0FBNkMsSUFBUyxFQUM1QyxTQUF3RCxFQUFVLE9BQTBCO1FBRHRHLGlCQUtDO1FBTDRDLFNBQUksR0FBSixJQUFJLENBQUs7UUFDNUMsY0FBUyxHQUFULFNBQVMsQ0FBK0M7UUFBVSxZQUFPLEdBQVAsT0FBTyxDQUFtQjtRQUx0RyxjQUFTLEdBQUcsRUFBRSxDQUFDO1FBQ2YsZUFBVSxHQUFHO1lBQ1gsVUFBVSxFQUFFLENBQUM7U0FDZCxDQUFBO1FBR0MsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLFVBQUMsSUFBSTtZQUNyQyxLQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztRQUN4QixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxrREFBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUN2QyxDQUFDO0lBRUQsMERBQWdCLEdBQWhCO1FBQUEsaUJBT0M7UUFOQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxFQUFFO1lBQ3BCLElBQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFVBQUMsSUFBSSxJQUFLLE9BQUEsSUFBSSxDQUFDLEdBQUcsS0FBSyxLQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsRUFBdkMsQ0FBdUMsQ0FBQyxDQUFBO1lBQ3ZGLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyx1QkFDZixJQUFJLENBQUMsVUFBVSxLQUFFLFVBQVUsRUFBRSxRQUFRLENBQUMsVUFBVSxJQUNuRCxDQUFBO1NBQ0g7SUFDSCxDQUFDO0lBQ0QsK0NBQUssR0FBTDtRQUNFLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFBO0lBQzdCLENBQUM7SUFFRCxrREFBUSxHQUFSO1FBQ0UsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsQ0FBQTtJQUN0QyxDQUFDO2tIQTlCVSwrQkFBK0IsdUJBS3RCLGVBQWU7d0VBTHhCLCtCQUErQjtZQ1Q1QywwQ0FDRTtZQUFBLDZCQUFrQjtZQUFBLG1FQUFvQztZQUFBLGlCQUFLO1lBQzNELHlDQUNFO1lBQUEsaUNBQVc7WUFBQSw4QkFBYztZQUFBLGlCQUFZO1lBQ3JDLHFDQUNFO1lBRFUsNEtBQW1DO1lBQzdDLDhGQUFzRTtZQUN4RSxpQkFBYTtZQUNmLGlCQUFpQjtZQUNqQiw4QkFDRTtZQUFBLGlDQUNFO1lBRG9ELDRHQUFTLHNCQUFrQixJQUFDO1lBQ2hGLG9DQUNGO1lBQUEsaUJBQVM7WUFDVCxrQ0FDRTtZQUQ2Qiw2R0FBUyxXQUFPLElBQUM7WUFDOUMsNkJBQ0Y7WUFBQSxpQkFBUztZQUNYLGlCQUFNO1lBQ1IsaUJBQXFCOztZQVpMLGVBQW1DO1lBQW5DLG1EQUFtQztZQUNqQyxlQUFrQztZQUFsQyx1Q0FBa0M7WUFJeEMsZUFBdUI7WUFBdkIseUNBQXVCOzswQ0RUbkM7Q0F5Q0MsQUFyQ0QsSUFxQ0M7U0FoQ1ksK0JBQStCO2tEQUEvQiwrQkFBK0I7Y0FMM0MsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSw4QkFBOEI7Z0JBQ3hDLFdBQVcsRUFBRSwyQ0FBMkM7Z0JBQ3hELFNBQVMsRUFBRSxDQUFDLDJDQUEyQyxDQUFDO2FBQ3pEOztzQkFNYyxNQUFNO3VCQUFDLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE1hdERpYWxvZ1JlZiwgTUFUX0RJQUxPR19EQVRBIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nJztcclxuaW1wb3J0IHsgT25ib2FyZGluZ1NlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9vbmJvYXJkaW5nLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdsaWItZGlhbG9nLWNyZWF0ZS1vbmJvYXJkaW5nJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vZGlhbG9nLWNyZWF0ZS1vbmJvYXJkaW5nLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9kaWFsb2ctY3JlYXRlLW9uYm9hcmRpbmcuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRGlhbG9nQ3JlYXRlT25ib2FyZGluZ0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgdGVtcGxhdGVzID0gW107XHJcbiAgb25ib2FyZGluZyA9IHtcclxuICAgIFRlbXBsYXRlSWQ6IDAsXHJcbiAgfVxyXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoTUFUX0RJQUxPR19EQVRBKSBwcml2YXRlIGRhdGE6IGFueSxcclxuICAgIHByaXZhdGUgZGlhbG9nUmVmOiBNYXREaWFsb2dSZWY8RGlhbG9nQ3JlYXRlT25ib2FyZGluZ0NvbXBvbmVudD4sIHByaXZhdGUgc2VydmljZTogT25ib2FyZGluZ1NlcnZpY2UpIHtcclxuICAgIHRoaXMuc2VydmljZS5fdGVtcGxhdGVzLnN1YnNjcmliZSgoZGF0YSkgPT4ge1xyXG4gICAgICB0aGlzLnRlbXBsYXRlcyA9IGRhdGE7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy50ZW1wbGF0ZXMgPSB0aGlzLmRhdGEudGVtcGxhdGVzO1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlT25ib2FyZGluZygpIHtcclxuICAgIGlmICghdGhpcy5kaXNhYmxlZCgpKSB7XHJcbiAgICAgIGNvbnN0IHRlbXBsYXRlID0gdGhpcy50ZW1wbGF0ZXMuZmluZCgodGVtcCkgPT4gdGVtcC5faWQgPT09IHRoaXMub25ib2FyZGluZy5UZW1wbGF0ZUlkKVxyXG4gICAgICB0aGlzLmRpYWxvZ1JlZi5jbG9zZSh7XHJcbiAgICAgICAgLi4udGhpcy5vbmJvYXJkaW5nLCBjYXRlZ29yaWVzOiB0ZW1wbGF0ZS5jYXRlZ29yaWVzXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfVxyXG4gIGNsb3NlKCkge1xyXG4gICAgdGhpcy5kaWFsb2dSZWYuY2xvc2UoZmFsc2UpXHJcbiAgfVxyXG5cclxuICBkaXNhYmxlZCgpIHtcclxuICAgIHJldHVybiAhKHRoaXMub25ib2FyZGluZy5UZW1wbGF0ZUlkKVxyXG4gIH1cclxuXHJcbn1cclxuIiwiPG1hdC1kaWFsb2ctY29udGVudD5cclxuICA8aDMgY2xhc3M9XCJ0aXRsZVwiPkNyw6lhdGlvbiBk4oCZdW5lIGRlbWFuZGUgZCdpbnTDqWdyYXRpb248L2gzPlxyXG4gIDxtYXQtZm9ybS1maWVsZCBjbGFzcz1cImZ1bGwtd2lkdGhcIiBhcHBlYXJhbmNlPVwib3V0bGluZVwiPlxyXG4gICAgPG1hdC1sYWJlbD5UeXBlIGRlIHByb2ZpbDwvbWF0LWxhYmVsPlxyXG4gICAgPG1hdC1zZWxlY3QgWyhuZ01vZGVsKV09XCJvbmJvYXJkaW5nLlRlbXBsYXRlSWRcIiByZXF1aXJlZD5cclxuICAgICAgPG1hdC1vcHRpb24gKm5nRm9yPVwibGV0IHRlbXBsYXRlIG9mIHRlbXBsYXRlc1wiIFt2YWx1ZV09XCJ0ZW1wbGF0ZS5faWRcIj57eyB0ZW1wbGF0ZS5OYW1lIH19PC9tYXQtb3B0aW9uPlxyXG4gICAgPC9tYXQtc2VsZWN0PlxyXG4gIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgPGRpdiBjbGFzcz1cImFjdGlvbi1jb250ZW50XCI+XHJcbiAgICA8YnV0dG9uIFtkaXNhYmxlZF09XCJkaXNhYmxlZCgpXCIgY2xhc3M9XCJjcmVhdGUtcHJvZmlsXCIgKGNsaWNrKT1cImNyZWF0ZU9uYm9hcmRpbmcoKVwiIG1hdC1yYWlzZWQtYnV0dG9uPlxyXG4gICAgICBMYW5jZXIgbGEgZGVtYW5kZVxyXG4gICAgPC9idXR0b24+XHJcbiAgICA8YnV0dG9uIGNsYXNzPVwiYWJhbmRvbi1wcm9maWxcIiAoY2xpY2spPVwiY2xvc2UoKVwiIG1hdC1yYWlzZWQtYnV0dG9uPlxyXG4gICAgICBBYmFuZG9ubmVyXHJcbiAgICA8L2J1dHRvbj5cclxuICA8L2Rpdj5cclxuPC9tYXQtZGlhbG9nLWNvbnRlbnQ+Il19