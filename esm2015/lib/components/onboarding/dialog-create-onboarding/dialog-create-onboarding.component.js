import { __awaiter } from "tslib";
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
    const template_r420 = ctx.$implicit;
    i0.ɵɵproperty("value", template_r420._id);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(template_r420.Name);
} }
export class DialogCreateOnboardingComponent {
    constructor(data, dialogRef, service) {
        this.data = data;
        this.dialogRef = dialogRef;
        this.service = service;
        this.templates = [];
        this.onboarding = {
            TemplateId: 0,
        };
        this.service._templates.subscribe((data) => {
            this.templates = data;
        });
    }
    ngOnInit() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.service.getAllProfil();
        });
    }
    createOnboarding() {
        if (!this.disabled()) {
            const template = this.templates.find((temp) => temp._id === this.onboarding.TemplateId);
            this.dialogRef.close(Object.assign(Object.assign({}, this.onboarding), { categories: template.categories }));
        }
    }
    close() {
        this.dialogRef.close(false);
    }
    disabled() {
        return !(this.onboarding.TemplateId);
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLWNyZWF0ZS1vbmJvYXJkaW5nLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL29uYm9hcmRpbmcvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9vbmJvYXJkaW5nL2RpYWxvZy1jcmVhdGUtb25ib2FyZGluZy9kaWFsb2ctY3JlYXRlLW9uYm9hcmRpbmcuY29tcG9uZW50LnRzIiwibGliL2NvbXBvbmVudHMvb25ib2FyZGluZy9kaWFsb2ctY3JlYXRlLW9uYm9hcmRpbmcvZGlhbG9nLWNyZWF0ZS1vbmJvYXJkaW5nLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxRCxPQUFPLEVBQWdCLGVBQWUsRUFBRSxNQUFNLDBCQUEwQixDQUFDOzs7Ozs7Ozs7Ozs7SUNJbkUscUNBQXNFO0lBQUEsWUFBbUI7SUFBQSxpQkFBYTs7O0lBQXZELHlDQUFzQjtJQUFDLGVBQW1CO0lBQW5CLHdDQUFtQjs7QURJL0YsTUFBTSxPQUFPLCtCQUErQjtJQUsxQyxZQUE2QyxJQUFTLEVBQzVDLFNBQXdELEVBQVUsT0FBMEI7UUFEekQsU0FBSSxHQUFKLElBQUksQ0FBSztRQUM1QyxjQUFTLEdBQVQsU0FBUyxDQUErQztRQUFVLFlBQU8sR0FBUCxPQUFPLENBQW1CO1FBTHRHLGNBQVMsR0FBRyxFQUFFLENBQUM7UUFDZixlQUFVLEdBQUc7WUFDWCxVQUFVLEVBQUUsQ0FBQztTQUNkLENBQUE7UUFHQyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTtZQUN6QyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztRQUN4QixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFSyxRQUFROztZQUNaLE1BQU0sSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQyxDQUFDO0tBQUE7SUFFRCxnQkFBZ0I7UUFDZCxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxFQUFFO1lBQ3BCLE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxLQUFLLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUE7WUFDdkYsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLGlDQUNmLElBQUksQ0FBQyxVQUFVLEtBQUUsVUFBVSxFQUFFLFFBQVEsQ0FBQyxVQUFVLElBQ25ELENBQUE7U0FDSDtJQUNILENBQUM7SUFDRCxLQUFLO1FBQ0gsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUE7SUFDN0IsQ0FBQztJQUVELFFBQVE7UUFDTixPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFBO0lBQ3RDLENBQUM7OzhHQTlCVSwrQkFBK0IsdUJBS3RCLGVBQWU7b0VBTHhCLCtCQUErQjtRQ1Q1QywwQ0FDRTtRQUFBLDZCQUFrQjtRQUFBLG1FQUFvQztRQUFBLGlCQUFLO1FBQzNELHlDQUNFO1FBQUEsaUNBQVc7UUFBQSw4QkFBYztRQUFBLGlCQUFZO1FBQ3JDLHFDQUNFO1FBRFUsNEtBQW1DO1FBQzdDLDhGQUFzRTtRQUN4RSxpQkFBYTtRQUNmLGlCQUFpQjtRQUNqQiw4QkFDRTtRQUFBLGlDQUNFO1FBRG9ELDRHQUFTLHNCQUFrQixJQUFDO1FBQ2hGLG9DQUNGO1FBQUEsaUJBQVM7UUFDVCxrQ0FDRTtRQUQ2Qiw2R0FBUyxXQUFPLElBQUM7UUFDOUMsNkJBQ0Y7UUFBQSxpQkFBUztRQUNYLGlCQUFNO1FBQ1IsaUJBQXFCOztRQVpMLGVBQW1DO1FBQW5DLG1EQUFtQztRQUNqQyxlQUFrQztRQUFsQyx1Q0FBa0M7UUFJeEMsZUFBdUI7UUFBdkIseUNBQXVCOztrRERBdEIsK0JBQStCO2NBTDNDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsOEJBQThCO2dCQUN4QyxXQUFXLEVBQUUsMkNBQTJDO2dCQUN4RCxTQUFTLEVBQUUsQ0FBQywyQ0FBMkMsQ0FBQzthQUN6RDs7c0JBTWMsTUFBTTt1QkFBQyxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBNYXREaWFsb2dSZWYsIE1BVF9ESUFMT0dfREFUQSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RpYWxvZyc7XHJcbmltcG9ydCB7IE9uYm9hcmRpbmdTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vb25ib2FyZGluZy5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbGliLWRpYWxvZy1jcmVhdGUtb25ib2FyZGluZycsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2RpYWxvZy1jcmVhdGUtb25ib2FyZGluZy5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vZGlhbG9nLWNyZWF0ZS1vbmJvYXJkaW5nLmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIERpYWxvZ0NyZWF0ZU9uYm9hcmRpbmdDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIHRlbXBsYXRlcyA9IFtdO1xyXG4gIG9uYm9hcmRpbmcgPSB7XHJcbiAgICBUZW1wbGF0ZUlkOiAwLFxyXG4gIH1cclxuICBjb25zdHJ1Y3RvcihASW5qZWN0KE1BVF9ESUFMT0dfREFUQSkgcHJpdmF0ZSBkYXRhOiBhbnksXHJcbiAgICBwcml2YXRlIGRpYWxvZ1JlZjogTWF0RGlhbG9nUmVmPERpYWxvZ0NyZWF0ZU9uYm9hcmRpbmdDb21wb25lbnQ+LCBwcml2YXRlIHNlcnZpY2U6IE9uYm9hcmRpbmdTZXJ2aWNlKSB7XHJcbiAgICB0aGlzLnNlcnZpY2UuX3RlbXBsYXRlcy5zdWJzY3JpYmUoKGRhdGEpID0+IHtcclxuICAgICAgdGhpcy50ZW1wbGF0ZXMgPSBkYXRhO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBhc3luYyBuZ09uSW5pdCgpIHtcclxuICAgIGF3YWl0IHRoaXMuc2VydmljZS5nZXRBbGxQcm9maWwoKTtcclxuICB9XHJcblxyXG4gIGNyZWF0ZU9uYm9hcmRpbmcoKSB7XHJcbiAgICBpZiAoIXRoaXMuZGlzYWJsZWQoKSkge1xyXG4gICAgICBjb25zdCB0ZW1wbGF0ZSA9IHRoaXMudGVtcGxhdGVzLmZpbmQoKHRlbXApID0+IHRlbXAuX2lkID09PSB0aGlzLm9uYm9hcmRpbmcuVGVtcGxhdGVJZClcclxuICAgICAgdGhpcy5kaWFsb2dSZWYuY2xvc2Uoe1xyXG4gICAgICAgIC4uLnRoaXMub25ib2FyZGluZywgY2F0ZWdvcmllczogdGVtcGxhdGUuY2F0ZWdvcmllc1xyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH1cclxuICBjbG9zZSgpIHtcclxuICAgIHRoaXMuZGlhbG9nUmVmLmNsb3NlKGZhbHNlKVxyXG4gIH1cclxuXHJcbiAgZGlzYWJsZWQoKSB7XHJcbiAgICByZXR1cm4gISh0aGlzLm9uYm9hcmRpbmcuVGVtcGxhdGVJZClcclxuICB9XHJcblxyXG59XHJcbiIsIjxtYXQtZGlhbG9nLWNvbnRlbnQ+XHJcbiAgPGgzIGNsYXNzPVwidGl0bGVcIj5DcsOpYXRpb24gZOKAmXVuZSBkZW1hbmRlIGQnaW50w6lncmF0aW9uPC9oMz5cclxuICA8bWF0LWZvcm0tZmllbGQgY2xhc3M9XCJmdWxsLXdpZHRoXCIgYXBwZWFyYW5jZT1cIm91dGxpbmVcIj5cclxuICAgIDxtYXQtbGFiZWw+VHlwZSBkZSBwcm9maWw8L21hdC1sYWJlbD5cclxuICAgIDxtYXQtc2VsZWN0IFsobmdNb2RlbCldPVwib25ib2FyZGluZy5UZW1wbGF0ZUlkXCIgcmVxdWlyZWQ+XHJcbiAgICAgIDxtYXQtb3B0aW9uICpuZ0Zvcj1cImxldCB0ZW1wbGF0ZSBvZiB0ZW1wbGF0ZXNcIiBbdmFsdWVdPVwidGVtcGxhdGUuX2lkXCI+e3sgdGVtcGxhdGUuTmFtZSB9fTwvbWF0LW9wdGlvbj5cclxuICAgIDwvbWF0LXNlbGVjdD5cclxuICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gIDxkaXYgY2xhc3M9XCJhY3Rpb24tY29udGVudFwiPlxyXG4gICAgPGJ1dHRvbiBbZGlzYWJsZWRdPVwiZGlzYWJsZWQoKVwiIGNsYXNzPVwiY3JlYXRlLXByb2ZpbFwiIChjbGljayk9XCJjcmVhdGVPbmJvYXJkaW5nKClcIiBtYXQtcmFpc2VkLWJ1dHRvbj5cclxuICAgICAgTGFuY2VyIGxhIGRlbWFuZGVcclxuICAgIDwvYnV0dG9uPlxyXG4gICAgPGJ1dHRvbiBjbGFzcz1cImFiYW5kb24tcHJvZmlsXCIgKGNsaWNrKT1cImNsb3NlKClcIiBtYXQtcmFpc2VkLWJ1dHRvbj5cclxuICAgICAgQWJhbmRvbm5lclxyXG4gICAgPC9idXR0b24+XHJcbiAgPC9kaXY+XHJcbjwvbWF0LWRpYWxvZy1jb250ZW50PiJdfQ==