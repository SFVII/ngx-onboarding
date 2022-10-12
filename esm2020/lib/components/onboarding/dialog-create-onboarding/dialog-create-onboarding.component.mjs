import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { locales } from '../../../i18n';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/dialog";
import * as i2 from "../../../onboarding.service";
import * as i3 from "@angular/forms";
import * as i4 from "@angular/material/form-field";
import * as i5 from "@angular/material/button";
import * as i6 from "@angular/common";
import * as i7 from "@angular/material/select";
import * as i8 from "@angular/material/core";
import * as i9 from "ngx-intl-tel-input";
function DialogCreateOnboardingComponent_mat_option_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 8);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const template_r1 = ctx.$implicit;
    i0.ɵɵproperty("value", template_r1._id);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(template_r1.Name);
} }
export class DialogCreateOnboardingComponent {
    constructor(data, dialogRef, service) {
        this.data = data;
        this.dialogRef = dialogRef;
        this.service = service;
        this.templates = [];
        this.defaultUserForm = [
            {
                label: "Civilité",
                key: "Salutation",
                expandOnboarding: true,
                defaultValue: [{ value: "M.", checked: false }, { value: "Mme", checked: false }],
                value: null,
                size: 10,
                isMandatory: true,
                otherValue: '',
                type: "select",
                editable: false,
                deleteable: false,
                subLevel: 1,
                expandMore: false,
            },
            {
                label: "Type de profil",
                key: "Type_de_profil_Nowboard__c",
                expandOnboarding: true,
                defaultValue: [{ value: "Manager", checked: false }, { value: "Utilisateur", checked: false }],
                value: null,
                size: 10,
                isMandatory: true,
                otherValue: '',
                type: "select",
                editable: false,
                deleteable: false,
                subLevel: 1,
                expandMore: false,
            },
            {
                label: "Nom",
                key: "LastName",
                expandOnboarding: true,
                defaultValue: null,
                value: null,
                size: 80,
                isMandatory: true,
                otherValue: '',
                type: "text",
                editable: false,
                deleteable: false,
                subLevel: 1,
                expandMore: false,
            },
            {
                label: "Prénom",
                key: "FirstName",
                expandOnboarding: true,
                defaultValue: null,
                value: null,
                size: 80,
                isMandatory: true,
                otherValue: '',
                type: "text",
                editable: false,
                deleteable: false,
                subLevel: 1,
                expandMore: false,
            },
            {
                label: "Email",
                key: "Email",
                expandOnboarding: true,
                defaultValue: null,
                value: null,
                size: 80,
                isMandatory: true,
                otherValue: '',
                type: "email",
                editable: false,
                deleteable: false,
                subLevel: 1,
                expandMore: false,
            },
            {
                label: "Téléphone fixe",
                key: "Phone",
                expandOnboarding: true,
                defaultValue: null,
                value: null,
                size: 20,
                isMandatory: false,
                otherValue: '',
                type: "tel",
                editable: false,
                deleteable: false,
                subLevel: 1,
                expandMore: false,
            },
            {
                label: "Téléphone portable",
                key: "MobilePhone",
                expandOnboarding: true,
                defaultValue: null,
                value: null,
                size: 20,
                isMandatory: false,
                otherValue: '',
                type: "tel",
                editable: false,
                deleteable: false,
                subLevel: 1,
                expandMore: false,
            },
            {
                label: "Fonction",
                key: "Title",
                expandOnboarding: true,
                defaultValue: null,
                value: null,
                size: 80,
                isMandatory: true,
                otherValue: '',
                type: "text",
                editable: false,
                deleteable: false,
                subLevel: 1,
                expandMore: false,
            },
            {
                label: "Etablissement / Site",
                key: "AccountName",
                expandOnboarding: true,
                defaultValue: null,
                value: null,
                size: 80,
                isMandatory: true,
                otherValue: '',
                type: "text",
                editable: false,
                deleteable: false,
                subLevel: 1,
                expandMore: false,
            },
            {
                label: "Accès au portail",
                key: "Acc_s_au_portail_client_NowBoard__c",
                expandOnboarding: true,
                defaultValue: [{ value: "Oui", checked: false }, { value: "Non", checked: false }],
                value: null,
                size: 10,
                isMandatory: true,
                otherValue: '',
                type: "select",
                editable: false,
                deleteable: false,
                subLevel: 1,
                expandMore: false,
            },
            {
                label: "Langue",
                key: "Langue_maternelle__c",
                expandOnboarding: true,
                defaultValue: [{ value: "Français", checked: false }, { value: "Anglais", checked: false }],
                value: null,
                size: 10,
                isMandatory: true,
                otherValue: '',
                type: "select",
                editable: false,
                deleteable: false,
                subLevel: 1,
                expandMore: false,
            },
            {
                label: "A quitté la société",
                key: "A_quitt_la_soci_t__c",
                expandOnboarding: true,
                defaultValue: [{ value: "Oui", checked: false }, { value: "Non", checked: false }],
                value: null,
                size: 10,
                isMandatory: true,
                otherValue: '',
                type: "select",
                editable: false,
                deleteable: false,
                subLevel: 1,
                expandMore: false,
            },
        ];
        this.userForm = [];
        this.locale = {};
        this.onboarding = {
            TemplateId: 0,
        };
        this.service._lang.subscribe((locale) => {
            this.locale = locales[locale].REQUEST;
        });
        this.service._templates.subscribe((data) => {
            if (data) {
                this.templates = data.filter((d) => d.Status);
            }
        });
    }
    async ngOnInit() {
        await this.service.getAllProfil();
    }
    createOnboarding() {
        if (!this.disabled()) {
            const template = this.templates.find((temp) => temp._id === this.onboarding.TemplateId);
            if (this.data.user) {
                this.userForm = this.defaultUserForm.map((data) => ({
                    ...data,
                    value: this.data.user[data.key]
                }));
                const index = template.categories.findIndex((cat) => cat.name === "Utilisateur");
                if (index !== -1) {
                    template.categories[index].forms = this.userForm;
                }
            }
            this.dialogRef.close({
                ...this.onboarding, categories: template.categories
            });
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
DialogCreateOnboardingComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DialogCreateOnboardingComponent, selectors: [["lib-dialog-create-onboarding"]], decls: 13, vars: 7, consts: [[1, "ngx-onboarding-dialog"], [1, "title"], ["appearance", "outline", 1, "full-width"], ["required", "", 3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], [1, "action-content"], ["mat-raised-button", "", 1, "create-profil", 3, "disabled", "click"], ["mat-raised-button", "", 1, "abandon-profil", 3, "click"], [3, "value"]], template: function DialogCreateOnboardingComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-dialog-content", 0)(1, "h3", 1);
        i0.ɵɵtext(2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "mat-form-field", 2)(4, "mat-label");
        i0.ɵɵtext(5);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(6, "mat-select", 3);
        i0.ɵɵlistener("ngModelChange", function DialogCreateOnboardingComponent_Template_mat_select_ngModelChange_6_listener($event) { return ctx.onboarding.TemplateId = $event; });
        i0.ɵɵtemplate(7, DialogCreateOnboardingComponent_mat_option_7_Template, 2, 2, "mat-option", 4);
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(8, "div", 5)(9, "button", 6);
        i0.ɵɵlistener("click", function DialogCreateOnboardingComponent_Template_button_click_9_listener() { return ctx.createOnboarding(); });
        i0.ɵɵtext(10);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(11, "button", 7);
        i0.ɵɵlistener("click", function DialogCreateOnboardingComponent_Template_button_click_11_listener() { return ctx.close(); });
        i0.ɵɵtext(12);
        i0.ɵɵelementEnd()()();
    } if (rf & 2) {
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate(ctx.locale == null ? null : ctx.locale.CREATION_AN_REQUEST);
        i0.ɵɵadvance(3);
        i0.ɵɵtextInterpolate(ctx.locale == null ? null : ctx.locale.TYPE_OF_PROFILE);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngModel", ctx.onboarding.TemplateId);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx.templates);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("disabled", ctx.disabled());
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", ctx.locale == null ? null : ctx.locale.START_REQUEST, " ");
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate1(" ", ctx.locale == null ? null : ctx.locale.LEAVE, " ");
    } }, dependencies: [i3.NgControlStatus, i3.RequiredValidator, i3.NgModel, i4.MatFormField, i4.MatLabel, i5.MatButton, i6.NgForOf, i7.MatSelect, i8.MatOption, i1.MatDialogContent, i9.NativeElementInjectorDirective], styles: ["mat-dialog-content[_ngcontent-%COMP%]{display:flex!important;flex-direction:column;justify-content:flex-start;max-width:400px;min-width:400px}mat-dialog-content[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{margin-bottom:10px}mat-dialog-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-style:normal;font-weight:700;font-size:20px;line-height:110%;display:flex;align-items:center;color:#242731}mat-dialog-content[_ngcontent-%COMP%]   .abandon-profil[_ngcontent-%COMP%]{background-color:transparent;border:1px solid #171f26;color:#171f26;margin-left:20px;padding:10px!important}mat-dialog-content[_ngcontent-%COMP%]   .create-profil[_ngcontent-%COMP%]{background-color:#171f26;border:1px solid #171f26;color:#fff;padding:10px!important}mat-dialog-content[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled, mat-dialog-content[_ngcontent-%COMP%]   button[disabled][_ngcontent-%COMP%]{opacity:.5}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DialogCreateOnboardingComponent, [{
        type: Component,
        args: [{ selector: 'lib-dialog-create-onboarding', template: "<mat-dialog-content class=\"ngx-onboarding-dialog\">\n  <h3 class=\"title\">{{locale?.CREATION_AN_REQUEST}}</h3>\n  <mat-form-field class=\"full-width\" appearance=\"outline\">\n    <mat-label>{{locale?.TYPE_OF_PROFILE}}</mat-label>\n    <mat-select [(ngModel)]=\"onboarding.TemplateId\" required>\n      <mat-option *ngFor=\"let template of templates\" [value]=\"template._id\">{{ template.Name }}</mat-option>\n    </mat-select>\n  </mat-form-field>\n  <div class=\"action-content\">\n    <button [disabled]=\"disabled()\" class=\"create-profil\" (click)=\"createOnboarding()\" mat-raised-button>\n      {{locale?.START_REQUEST}}\n    </button>\n    <button class=\"abandon-profil\" (click)=\"close()\" mat-raised-button>\n      {{locale?.LEAVE}}\n    </button>\n  </div>\n</mat-dialog-content>", styles: ["mat-dialog-content{display:flex!important;flex-direction:column;justify-content:flex-start;max-width:400px;min-width:400px}mat-dialog-content mat-form-field{margin-bottom:10px}mat-dialog-content h3{font-style:normal;font-weight:700;font-size:20px;line-height:110%;display:flex;align-items:center;color:#242731}mat-dialog-content .abandon-profil{background-color:transparent;border:1px solid #171f26;color:#171f26;margin-left:20px;padding:10px!important}mat-dialog-content .create-profil{background-color:#171f26;border:1px solid #171f26;color:#fff;padding:10px!important}mat-dialog-content button:disabled,mat-dialog-content button[disabled]{opacity:.5}\n"] }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [MAT_DIALOG_DATA]
            }] }, { type: i1.MatDialogRef }, { type: i2.OnboardingService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLWNyZWF0ZS1vbmJvYXJkaW5nLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL29uYm9hcmRpbmcvc3JjL2xpYi9jb21wb25lbnRzL29uYm9hcmRpbmcvZGlhbG9nLWNyZWF0ZS1vbmJvYXJkaW5nL2RpYWxvZy1jcmVhdGUtb25ib2FyZGluZy5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9vbmJvYXJkaW5nL3NyYy9saWIvY29tcG9uZW50cy9vbmJvYXJkaW5nL2RpYWxvZy1jcmVhdGUtb25ib2FyZGluZy9kaWFsb2ctY3JlYXRlLW9uYm9hcmRpbmcuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUQsT0FBTyxFQUFnQixlQUFlLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUN6RSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7Ozs7Ozs7Ozs7SUNHbEMscUNBQXNFO0lBQUEsWUFBbUI7SUFBQSxpQkFBYTs7O0lBQXZELHVDQUFzQjtJQUFDLGVBQW1CO0lBQW5CLHNDQUFtQjs7QURLL0YsTUFBTSxPQUFPLCtCQUErQjtJQWtNMUMsWUFBNkMsSUFBUyxFQUM1QyxTQUF3RCxFQUFVLE9BQTBCO1FBRHpELFNBQUksR0FBSixJQUFJLENBQUs7UUFDNUMsY0FBUyxHQUFULFNBQVMsQ0FBK0M7UUFBVSxZQUFPLEdBQVAsT0FBTyxDQUFtQjtRQWxNdEcsY0FBUyxHQUFHLEVBQUUsQ0FBQztRQUNmLG9CQUFlLEdBQUc7WUFDaEI7Z0JBQ0UsS0FBSyxFQUFFLFVBQVU7Z0JBQ2pCLEdBQUcsRUFBRSxZQUFZO2dCQUNqQixnQkFBZ0IsRUFBRSxJQUFJO2dCQUN0QixZQUFZLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFB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ZTtrRkFsTXhCLCtCQUErQjtRQ1Y1Qyw2Q0FBa0QsWUFBQTtRQUM5QixZQUErQjtRQUFBLGlCQUFLO1FBQ3RELHlDQUF3RCxnQkFBQTtRQUMzQyxZQUEyQjtRQUFBLGlCQUFZO1FBQ2xELHFDQUF5RDtRQUE3Qyw0S0FBbUM7UUFDN0MsOEZBQXNHO1FBQ3hHLGlCQUFhLEVBQUE7UUFFZiw4QkFBNEIsZ0JBQUE7UUFDNEIsNEdBQVMsc0JBQWtCLElBQUM7UUFDaEYsYUFDRjtRQUFBLGlCQUFTO1FBQ1Qsa0NBQW1FO1FBQXBDLDZHQUFTLFdBQU8sSUFBQztRQUM5QyxhQUNGO1FBQUEsaUJBQVMsRUFBQSxFQUFBOztRQWJPLGVBQStCO1FBQS9CLGdGQUErQjtRQUVwQyxlQUEyQjtRQUEzQiw0RUFBMkI7UUFDMUIsZUFBbUM7UUFBbkMsbURBQW1DO1FBQ1osZUFBWTtRQUFaLHVDQUFZO1FBSXZDLGVBQXVCO1FBQXZCLHlDQUF1QjtRQUM3QixlQUNGO1FBREUscUZBQ0Y7UUFFRSxlQUNGO1FBREUsNkVBQ0Y7O3VGREpTLCtCQUErQjtjQUwzQyxTQUFTOzJCQUNFLDhCQUE4Qjs7c0JBc00zQixNQUFNO3VCQUFDLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNYXREaWFsb2dSZWYsIE1BVF9ESUFMT0dfREFUQSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RpYWxvZyc7XG5pbXBvcnQgeyBsb2NhbGVzIH0gZnJvbSAnLi4vLi4vLi4vaTE4bic7XG5pbXBvcnQgeyBPbmJvYXJkaW5nU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL29uYm9hcmRpbmcuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1kaWFsb2ctY3JlYXRlLW9uYm9hcmRpbmcnLFxuICB0ZW1wbGF0ZVVybDogJy4vZGlhbG9nLWNyZWF0ZS1vbmJvYXJkaW5nLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZGlhbG9nLWNyZWF0ZS1vbmJvYXJkaW5nLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgRGlhbG9nQ3JlYXRlT25ib2FyZGluZ0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHRlbXBsYXRlcyA9IFtdO1xuICBkZWZhdWx0VXNlckZvcm0gPSBbXG4gICAge1xuICAgICAgbGFiZWw6IFwiQ2l2aWxpdMOpXCIsXG4gICAgICBrZXk6IFwiU2FsdXRhdGlvblwiLFxuICAgICAgZXhwYW5kT25ib2FyZGluZzogdHJ1ZSxcbiAgICAgIGRlZmF1bHRWYWx1ZTogW3sgdmFsdWU6IFwiTS5cIiwgY2hlY2tlZDogZmFsc2UgfSwgeyB2YWx1ZTogXCJNbWVcIiwgY2hlY2tlZDogZmFsc2UgfV0sXG4gICAgICB2YWx1ZTogbnVsbCxcbiAgICAgIHNpemU6IDEwLFxuICAgICAgaXNNYW5kYXRvcnk6IHRydWUsXG4gICAgICBvdGhlclZhbHVlOiAnJyxcbiAgICAgIHR5cGU6IFwic2VsZWN0XCIsXG4gICAgICBlZGl0YWJsZTogZmFsc2UsXG4gICAgICBkZWxldGVhYmxlOiBmYWxzZSxcbiAgICAgIHN1YkxldmVsOiAxLFxuICAgICAgZXhwYW5kTW9yZTogZmFsc2UsXG4gICAgfSxcbiAgICB7XG4gICAgICBsYWJlbDogXCJUeXBlIGRlIHByb2ZpbFwiLFxuICAgICAga2V5OiBcIlR5cGVfZGVfcHJvZmlsX05vd2JvYXJkX19jXCIsXG4gICAgICBleHBhbmRPbmJvYXJkaW5nOiB0cnVlLFxuICAgICAgZGVmYXVsdFZhbHVlOiBbeyB2YWx1ZTogXCJNYW5hZ2VyXCIsIGNoZWNrZWQ6IGZhbHNlIH0sIHsgdmFsdWU6IFwiVXRpbGlzYXRldXJcIiwgY2hlY2tlZDogZmFsc2UgfV0sXG4gICAgICB2YWx1ZTogbnVsbCxcbiAgICAgIHNpemU6IDEwLFxuICAgICAgaXNNYW5kYXRvcnk6IHRydWUsXG4gICAgICBvdGhlclZhbHVlOiAnJyxcbiAgICAgIHR5cGU6IFwic2VsZWN0XCIsXG4gICAgICBlZGl0YWJsZTogZmFsc2UsXG4gICAgICBkZWxldGVhYmxlOiBmYWxzZSxcbiAgICAgIHN1YkxldmVsOiAxLFxuICAgICAgZXhwYW5kTW9yZTogZmFsc2UsXG4gICAgfSxcbiAgICB7XG4gICAgICBsYWJlbDogXCJOb21cIixcbiAgICAgIGtleTogXCJMYXN0TmFtZVwiLFxuICAgICAgZXhwYW5kT25ib2FyZGluZzogdHJ1ZSxcbiAgICAgIGRlZmF1bHRWYWx1ZTogbnVsbCxcbiAgICAgIHZhbHVlOiBudWxsLFxuICAgICAgc2l6ZTogODAsXG4gICAgICBpc01hbmRhdG9yeTogdHJ1ZSxcbiAgICAgIG90aGVyVmFsdWU6ICcnLFxuICAgICAgdHlwZTogXCJ0ZXh0XCIsXG4gICAgICBlZGl0YWJsZTogZmFsc2UsXG4gICAgICBkZWxldGVhYmxlOiBmYWxzZSxcbiAgICAgIHN1YkxldmVsOiAxLFxuICAgICAgZXhwYW5kTW9yZTogZmFsc2UsXG4gICAgfSxcbiAgICB7XG4gICAgICBsYWJlbDogXCJQcsOpbm9tXCIsXG4gICAgICBrZXk6IFwiRmlyc3ROYW1lXCIsXG4gICAgICBleHBhbmRPbmJvYXJkaW5nOiB0cnVlLFxuICAgICAgZGVmYXVsdFZhbHVlOiBudWxsLFxuICAgICAgdmFsdWU6IG51bGwsXG4gICAgICBzaXplOiA4MCxcbiAgICAgIGlzTWFuZGF0b3J5OiB0cnVlLFxuICAgICAgb3RoZXJWYWx1ZTogJycsXG4gICAgICB0eXBlOiBcInRleHRcIixcbiAgICAgIGVkaXRhYmxlOiBmYWxzZSxcbiAgICAgIGRlbGV0ZWFibGU6IGZhbHNlLFxuICAgICAgc3ViTGV2ZWw6IDEsXG4gICAgICBleHBhbmRNb3JlOiBmYWxzZSxcbiAgICB9LFxuICAgIHtcbiAgICAgIGxhYmVsOiBcIkVtYWlsXCIsXG4gICAgICBrZXk6IFwiRW1haWxcIixcbiAgICAgIGV4cGFuZE9uYm9hcmRpbmc6IHRydWUsXG4gICAgICBkZWZhdWx0VmFsdWU6IG51bGwsXG4gICAgICB2YWx1ZTogbnVsbCxcbiAgICAgIHNpemU6IDgwLFxuICAgICAgaXNNYW5kYXRvcnk6IHRydWUsXG4gICAgICBvdGhlclZhbHVlOiAnJyxcbiAgICAgIHR5cGU6IFwiZW1haWxcIixcbiAgICAgIGVkaXRhYmxlOiBmYWxzZSxcbiAgICAgIGRlbGV0ZWFibGU6IGZhbHNlLFxuICAgICAgc3ViTGV2ZWw6IDEsXG4gICAgICBleHBhbmRNb3JlOiBmYWxzZSxcbiAgICB9LFxuXG4gICAge1xuICAgICAgbGFiZWw6IFwiVMOpbMOpcGhvbmUgZml4ZVwiLFxuICAgICAga2V5OiBcIlBob25lXCIsXG4gICAgICBleHBhbmRPbmJvYXJkaW5nOiB0cnVlLFxuICAgICAgZGVmYXVsdFZhbHVlOiBudWxsLFxuICAgICAgdmFsdWU6IG51bGwsXG4gICAgICBzaXplOiAyMCxcbiAgICAgIGlzTWFuZGF0b3J5OiBmYWxzZSxcbiAgICAgIG90aGVyVmFsdWU6ICcnLFxuICAgICAgdHlwZTogXCJ0ZWxcIixcbiAgICAgIGVkaXRhYmxlOiBmYWxzZSxcbiAgICAgIGRlbGV0ZWFibGU6IGZhbHNlLFxuICAgICAgc3ViTGV2ZWw6IDEsXG5cbiAgICAgIGV4cGFuZE1vcmU6IGZhbHNlLFxuICAgIH0sXG4gICAge1xuICAgICAgbGFiZWw6IFwiVMOpbMOpcGhvbmUgcG9ydGFibGVcIixcbiAgICAgIGtleTogXCJNb2JpbGVQaG9uZVwiLFxuICAgICAgZXhwYW5kT25ib2FyZGluZzogdHJ1ZSxcbiAgICAgIGRlZmF1bHRWYWx1ZTogbnVsbCxcbiAgICAgIHZhbHVlOiBudWxsLFxuICAgICAgc2l6ZTogMjAsXG4gICAgICBpc01hbmRhdG9yeTogZmFsc2UsXG4gICAgICBvdGhlclZhbHVlOiAnJyxcbiAgICAgIHR5cGU6IFwidGVsXCIsXG4gICAgICBlZGl0YWJsZTogZmFsc2UsXG4gICAgICBkZWxldGVhYmxlOiBmYWxzZSxcbiAgICAgIHN1YkxldmVsOiAxLFxuXG4gICAgICBleHBhbmRNb3JlOiBmYWxzZSxcbiAgICB9LFxuICAgIHtcbiAgICAgIGxhYmVsOiBcIkZvbmN0aW9uXCIsXG4gICAgICBrZXk6IFwiVGl0bGVcIixcbiAgICAgIGV4cGFuZE9uYm9hcmRpbmc6IHRydWUsXG4gICAgICBkZWZhdWx0VmFsdWU6IG51bGwsXG4gICAgICB2YWx1ZTogbnVsbCxcbiAgICAgIHNpemU6IDgwLFxuICAgICAgaXNNYW5kYXRvcnk6IHRydWUsXG4gICAgICBvdGhlclZhbHVlOiAnJyxcbiAgICAgIHR5cGU6IFwidGV4dFwiLFxuICAgICAgZWRpdGFibGU6IGZhbHNlLFxuICAgICAgZGVsZXRlYWJsZTogZmFsc2UsXG4gICAgICBzdWJMZXZlbDogMSxcbiAgICAgIGV4cGFuZE1vcmU6IGZhbHNlLFxuICAgIH0sXG4gICAge1xuICAgICAgbGFiZWw6IFwiRXRhYmxpc3NlbWVudCAvIFNpdGVcIixcbiAgICAgIGtleTogXCJBY2NvdW50TmFtZVwiLFxuICAgICAgZXhwYW5kT25ib2FyZGluZzogdHJ1ZSxcbiAgICAgIGRlZmF1bHRWYWx1ZTogbnVsbCxcbiAgICAgIHZhbHVlOiBudWxsLFxuICAgICAgc2l6ZTogODAsXG4gICAgICBpc01hbmRhdG9yeTogdHJ1ZSxcbiAgICAgIG90aGVyVmFsdWU6ICcnLFxuICAgICAgdHlwZTogXCJ0ZXh0XCIsXG4gICAgICBlZGl0YWJsZTogZmFsc2UsXG4gICAgICBkZWxldGVhYmxlOiBmYWxzZSxcbiAgICAgIHN1YkxldmVsOiAxLFxuICAgICAgZXhwYW5kTW9yZTogZmFsc2UsXG4gICAgfSxcbiAgICB7XG4gICAgICBsYWJlbDogXCJBY2PDqHMgYXUgcG9ydGFpbFwiLFxuICAgICAga2V5OiBcIkFjY19zX2F1X3BvcnRhaWxfY2xpZW50X05vd0JvYXJkX19jXCIsXG4gICAgICBleHBhbmRPbmJvYXJkaW5nOiB0cnVlLFxuICAgICAgZGVmYXVsdFZhbHVlOiBbeyB2YWx1ZTogXCJPdWlcIiwgY2hlY2tlZDogZmFsc2UgfSwgeyB2YWx1ZTogXCJOb25cIiwgY2hlY2tlZDogZmFsc2UgfV0sXG4gICAgICB2YWx1ZTogbnVsbCxcbiAgICAgIHNpemU6IDEwLFxuICAgICAgaXNNYW5kYXRvcnk6IHRydWUsXG4gICAgICBvdGhlclZhbHVlOiAnJyxcbiAgICAgIHR5cGU6IFwic2VsZWN0XCIsXG4gICAgICBlZGl0YWJsZTogZmFsc2UsXG4gICAgICBkZWxldGVhYmxlOiBmYWxzZSxcbiAgICAgIHN1YkxldmVsOiAxLFxuXG4gICAgICBleHBhbmRNb3JlOiBmYWxzZSxcbiAgICB9LFxuICAgIHtcbiAgICAgIGxhYmVsOiBcIkxhbmd1ZVwiLFxuICAgICAga2V5OiBcIkxhbmd1ZV9tYXRlcm5lbGxlX19jXCIsXG4gICAgICBleHBhbmRPbmJvYXJkaW5nOiB0cnVlLFxuICAgICAgZGVmYXVsdFZhbHVlOiBbeyB2YWx1ZTogXCJGcmFuw6dhaXNcIiwgY2hlY2tlZDogZmFsc2UgfSwgeyB2YWx1ZTogXCJBbmdsYWlzXCIsIGNoZWNrZWQ6IGZhbHNlIH1dLFxuICAgICAgdmFsdWU6IG51bGwsXG4gICAgICBzaXplOiAxMCxcbiAgICAgIGlzTWFuZGF0b3J5OiB0cnVlLFxuICAgICAgb3RoZXJWYWx1ZTogJycsXG4gICAgICB0eXBlOiBcInNlbGVjdFwiLFxuICAgICAgZWRpdGFibGU6IGZhbHNlLFxuICAgICAgZGVsZXRlYWJsZTogZmFsc2UsXG4gICAgICBzdWJMZXZlbDogMSxcbiAgICAgIGV4cGFuZE1vcmU6IGZhbHNlLFxuICAgIH0sXG4gICAge1xuICAgICAgbGFiZWw6IFwiQSBxdWl0dMOpIGxhIHNvY2nDqXTDqVwiLFxuICAgICAga2V5OiBcIkFfcXVpdHRfbGFfc29jaV90X19jXCIsXG4gICAgICBleHBhbmRPbmJvYXJkaW5nOiB0cnVlLFxuICAgICAgZGVmYXVsdFZhbHVlOiBbeyB2YWx1ZTogXCJPdWlcIiwgY2hlY2tlZDogZmFsc2UgfSwgeyB2YWx1ZTogXCJOb25cIiwgY2hlY2tlZDogZmFsc2UgfV0sXG4gICAgICB2YWx1ZTogbnVsbCxcbiAgICAgIHNpemU6IDEwLFxuICAgICAgaXNNYW5kYXRvcnk6IHRydWUsXG4gICAgICBvdGhlclZhbHVlOiAnJyxcbiAgICAgIHR5cGU6IFwic2VsZWN0XCIsXG4gICAgICBlZGl0YWJsZTogZmFsc2UsXG4gICAgICBkZWxldGVhYmxlOiBmYWxzZSxcbiAgICAgIHN1YkxldmVsOiAxLFxuICAgICAgZXhwYW5kTW9yZTogZmFsc2UsXG4gICAgfSxcblxuICBdXG4gIHVzZXJGb3JtID0gW11cbiAgbG9jYWxlOiBhbnkgPSB7fVxuICBvbmJvYXJkaW5nID0ge1xuICAgIFRlbXBsYXRlSWQ6IDAsXG4gIH1cbiAgY29uc3RydWN0b3IoQEluamVjdChNQVRfRElBTE9HX0RBVEEpIHByaXZhdGUgZGF0YTogYW55LFxuICAgIHByaXZhdGUgZGlhbG9nUmVmOiBNYXREaWFsb2dSZWY8RGlhbG9nQ3JlYXRlT25ib2FyZGluZ0NvbXBvbmVudD4sIHByaXZhdGUgc2VydmljZTogT25ib2FyZGluZ1NlcnZpY2UpIHtcbiAgICB0aGlzLnNlcnZpY2UuX2xhbmcuc3Vic2NyaWJlKChsb2NhbGUpID0+IHtcbiAgICAgIHRoaXMubG9jYWxlID0gbG9jYWxlc1tsb2NhbGVdLlJFUVVFU1Q7XG4gICAgfSlcbiAgICB0aGlzLnNlcnZpY2UuX3RlbXBsYXRlcy5zdWJzY3JpYmUoKGRhdGEpID0+IHtcbiAgICAgIGlmIChkYXRhKSB7XG4gICAgICAgIHRoaXMudGVtcGxhdGVzID0gZGF0YS5maWx0ZXIoKGQpID0+IGQuU3RhdHVzKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGFzeW5jIG5nT25Jbml0KCkge1xuICAgIGF3YWl0IHRoaXMuc2VydmljZS5nZXRBbGxQcm9maWwoKTtcbiAgfVxuXG4gIGNyZWF0ZU9uYm9hcmRpbmcoKSB7XG4gICAgaWYgKCF0aGlzLmRpc2FibGVkKCkpIHtcbiAgICAgIGNvbnN0IHRlbXBsYXRlID0gdGhpcy50ZW1wbGF0ZXMuZmluZCgodGVtcCkgPT4gdGVtcC5faWQgPT09IHRoaXMub25ib2FyZGluZy5UZW1wbGF0ZUlkKTtcbiAgICAgIGlmICh0aGlzLmRhdGEudXNlcikge1xuICAgICAgICB0aGlzLnVzZXJGb3JtID0gdGhpcy5kZWZhdWx0VXNlckZvcm0ubWFwKChkYXRhKSA9PiAoe1xuICAgICAgICAgIC4uLmRhdGEsXG4gICAgICAgICAgdmFsdWU6IHRoaXMuZGF0YS51c2VyW2RhdGEua2V5XVxuICAgICAgICB9KSlcbiAgICAgICAgY29uc3QgaW5kZXggPSB0ZW1wbGF0ZS5jYXRlZ29yaWVzLmZpbmRJbmRleCgoY2F0KSA9PiBjYXQubmFtZSA9PT0gXCJVdGlsaXNhdGV1clwiKTtcbiAgICAgICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgICAgIHRlbXBsYXRlLmNhdGVnb3JpZXNbaW5kZXhdLmZvcm1zID0gdGhpcy51c2VyRm9ybTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGhpcy5kaWFsb2dSZWYuY2xvc2Uoe1xuICAgICAgICAuLi50aGlzLm9uYm9hcmRpbmcsIGNhdGVnb3JpZXM6IHRlbXBsYXRlLmNhdGVnb3JpZXNcbiAgICAgIH0pXG4gICAgfVxuICB9XG4gIGNsb3NlKCkge1xuICAgIHRoaXMuZGlhbG9nUmVmLmNsb3NlKGZhbHNlKVxuICB9XG5cbiAgZGlzYWJsZWQoKSB7XG4gICAgcmV0dXJuICEodGhpcy5vbmJvYXJkaW5nLlRlbXBsYXRlSWQpXG4gIH1cblxufVxuIiwiPG1hdC1kaWFsb2ctY29udGVudCBjbGFzcz1cIm5neC1vbmJvYXJkaW5nLWRpYWxvZ1wiPlxuICA8aDMgY2xhc3M9XCJ0aXRsZVwiPnt7bG9jYWxlPy5DUkVBVElPTl9BTl9SRVFVRVNUfX08L2gzPlxuICA8bWF0LWZvcm0tZmllbGQgY2xhc3M9XCJmdWxsLXdpZHRoXCIgYXBwZWFyYW5jZT1cIm91dGxpbmVcIj5cbiAgICA8bWF0LWxhYmVsPnt7bG9jYWxlPy5UWVBFX09GX1BST0ZJTEV9fTwvbWF0LWxhYmVsPlxuICAgIDxtYXQtc2VsZWN0IFsobmdNb2RlbCldPVwib25ib2FyZGluZy5UZW1wbGF0ZUlkXCIgcmVxdWlyZWQ+XG4gICAgICA8bWF0LW9wdGlvbiAqbmdGb3I9XCJsZXQgdGVtcGxhdGUgb2YgdGVtcGxhdGVzXCIgW3ZhbHVlXT1cInRlbXBsYXRlLl9pZFwiPnt7IHRlbXBsYXRlLk5hbWUgfX08L21hdC1vcHRpb24+XG4gICAgPC9tYXQtc2VsZWN0PlxuICA8L21hdC1mb3JtLWZpZWxkPlxuICA8ZGl2IGNsYXNzPVwiYWN0aW9uLWNvbnRlbnRcIj5cbiAgICA8YnV0dG9uIFtkaXNhYmxlZF09XCJkaXNhYmxlZCgpXCIgY2xhc3M9XCJjcmVhdGUtcHJvZmlsXCIgKGNsaWNrKT1cImNyZWF0ZU9uYm9hcmRpbmcoKVwiIG1hdC1yYWlzZWQtYnV0dG9uPlxuICAgICAge3tsb2NhbGU/LlNUQVJUX1JFUVVFU1R9fVxuICAgIDwvYnV0dG9uPlxuICAgIDxidXR0b24gY2xhc3M9XCJhYmFuZG9uLXByb2ZpbFwiIChjbGljayk9XCJjbG9zZSgpXCIgbWF0LXJhaXNlZC1idXR0b24+XG4gICAgICB7e2xvY2FsZT8uTEVBVkV9fVxuICAgIDwvYnV0dG9uPlxuICA8L2Rpdj5cbjwvbWF0LWRpYWxvZy1jb250ZW50PiJdfQ==