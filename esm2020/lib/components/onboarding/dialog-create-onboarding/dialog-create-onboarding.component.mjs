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
import * as i8 from "@angular/material/core";
import * as i9 from "@angular/material/button";
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
        this.onboarding = {
            TemplateId: 0,
        };
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
DialogCreateOnboardingComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DialogCreateOnboardingComponent, selectors: [["lib-dialog-create-onboarding"]], decls: 13, vars: 3, consts: [[1, "ngx-onboarding-dialog"], [1, "title"], ["appearance", "outline", 1, "full-width"], ["required", "", 3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], [1, "action-content"], ["mat-raised-button", "", 1, "create-profil", 3, "disabled", "click"], ["mat-raised-button", "", 1, "abandon-profil", 3, "click"], [3, "value"]], template: function DialogCreateOnboardingComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-dialog-content", 0)(1, "h3", 1);
        i0.ɵɵtext(2, "Cr\u00E9ation d\u2019une demande d'int\u00E9gration");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "mat-form-field", 2)(4, "mat-label");
        i0.ɵɵtext(5, "Type de profil");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(6, "mat-select", 3);
        i0.ɵɵlistener("ngModelChange", function DialogCreateOnboardingComponent_Template_mat_select_ngModelChange_6_listener($event) { return ctx.onboarding.TemplateId = $event; });
        i0.ɵɵtemplate(7, DialogCreateOnboardingComponent_mat_option_7_Template, 2, 2, "mat-option", 4);
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(8, "div", 5)(9, "button", 6);
        i0.ɵɵlistener("click", function DialogCreateOnboardingComponent_Template_button_click_9_listener() { return ctx.createOnboarding(); });
        i0.ɵɵtext(10, " Lancer la demande ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(11, "button", 7);
        i0.ɵɵlistener("click", function DialogCreateOnboardingComponent_Template_button_click_11_listener() { return ctx.close(); });
        i0.ɵɵtext(12, " Abandonner ");
        i0.ɵɵelementEnd()()();
    } if (rf & 2) {
        i0.ɵɵadvance(6);
        i0.ɵɵproperty("ngModel", ctx.onboarding.TemplateId);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx.templates);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("disabled", ctx.disabled());
    } }, directives: [i1.MatDialogContent, i3.MatFormField, i3.MatLabel, i4.MatSelect, i5.RequiredValidator, i5.NgControlStatus, i5.NgModel, i6.NativeElementInjectorDirective, i7.NgForOf, i8.MatOption, i9.MatButton], styles: ["mat-dialog-content[_ngcontent-%COMP%]{display:flex!important;flex-direction:column;justify-content:flex-start;max-width:400px;min-width:400px}mat-dialog-content[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{margin-bottom:10px}mat-dialog-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-style:normal;font-weight:700;font-size:20px;line-height:110%;display:flex;align-items:center;color:#242731}mat-dialog-content[_ngcontent-%COMP%]   .abandon-profil[_ngcontent-%COMP%]{background-color:transparent;border:1px solid #171f26;color:#171f26;margin-left:20px;padding:10px!important}mat-dialog-content[_ngcontent-%COMP%]   .create-profil[_ngcontent-%COMP%]{background-color:#171f26;border:1px solid #171f26;color:#fff;padding:10px!important}mat-dialog-content[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled, mat-dialog-content[_ngcontent-%COMP%]   button[disabled][_ngcontent-%COMP%]{opacity:.5}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DialogCreateOnboardingComponent, [{
        type: Component,
        args: [{ selector: 'lib-dialog-create-onboarding', template: "<mat-dialog-content class=\"ngx-onboarding-dialog\">\r\n  <h3 class=\"title\">Cr\u00E9ation d\u2019une demande d'int\u00E9gration</h3>\r\n  <mat-form-field class=\"full-width\" appearance=\"outline\">\r\n    <mat-label>Type de profil</mat-label>\r\n    <mat-select [(ngModel)]=\"onboarding.TemplateId\" required>\r\n      <mat-option *ngFor=\"let template of templates\" [value]=\"template._id\">{{ template.Name }}</mat-option>\r\n    </mat-select>\r\n  </mat-form-field>\r\n  <div class=\"action-content\">\r\n    <button [disabled]=\"disabled()\" class=\"create-profil\" (click)=\"createOnboarding()\" mat-raised-button>\r\n      Lancer la demande\r\n    </button>\r\n    <button class=\"abandon-profil\" (click)=\"close()\" mat-raised-button>\r\n      Abandonner\r\n    </button>\r\n  </div>\r\n</mat-dialog-content>", styles: ["mat-dialog-content{display:flex!important;flex-direction:column;justify-content:flex-start;max-width:400px;min-width:400px}mat-dialog-content mat-form-field{margin-bottom:10px}mat-dialog-content h3{font-style:normal;font-weight:700;font-size:20px;line-height:110%;display:flex;align-items:center;color:#242731}mat-dialog-content .abandon-profil{background-color:transparent;border:1px solid #171f26;color:#171f26;margin-left:20px;padding:10px!important}mat-dialog-content .create-profil{background-color:#171f26;border:1px solid #171f26;color:#fff;padding:10px!important}mat-dialog-content button:disabled,mat-dialog-content button[disabled]{opacity:.5}\n"] }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [MAT_DIALOG_DATA]
            }] }, { type: i1.MatDialogRef }, { type: i2.OnboardingService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLWNyZWF0ZS1vbmJvYXJkaW5nLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL29uYm9hcmRpbmcvc3JjL2xpYi9jb21wb25lbnRzL29uYm9hcmRpbmcvZGlhbG9nLWNyZWF0ZS1vbmJvYXJkaW5nL2RpYWxvZy1jcmVhdGUtb25ib2FyZGluZy5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9vbmJvYXJkaW5nL3NyYy9saWIvY29tcG9uZW50cy9vbmJvYXJkaW5nL2RpYWxvZy1jcmVhdGUtb25ib2FyZGluZy9kaWFsb2ctY3JlYXRlLW9uYm9hcmRpbmcuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUQsT0FBTyxFQUFnQixlQUFlLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQzs7Ozs7Ozs7Ozs7O0lDSW5FLHFDQUFzRTtJQUFBLFlBQW1CO0lBQUEsaUJBQWE7OztJQUF2RCx1Q0FBc0I7SUFBQyxlQUFtQjtJQUFuQixzQ0FBbUI7O0FESS9GLE1BQU0sT0FBTywrQkFBK0I7SUFpTTFDLFlBQTZDLElBQVMsRUFDNUMsU0FBd0QsRUFBVSxPQUEwQjtRQUR6RCxTQUFJLEdBQUosSUFBSSxDQUFLO1FBQzVDLGNBQVMsR0FBVCxTQUFTLENBQStDO1FBQVUsWUFBTyxHQUFQLE9BQU8sQ0FBbUI7UUFqTXRHLGNBQVMsR0FBRyxFQUFFLENBQUM7UUFDZixvQkFBZSxHQUFHO1lBQ2hCO2dCQUNFLEtBQUssRUFBRSxVQUFVO2dCQUNqQixHQUFHLEVBQUUsWUFBWTtnQkFDakIsZ0JBQWdCLEVBQUUsSUFBSTtnQkFDdEIsWUFBWSxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFF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QSxpQkFBUztRQUNULGtDQUFtRTtRQUFwQyw2R0FBUyxXQUFPLElBQUM7UUFDOUMsNkJBQ0Y7UUFBQSxpQkFBUyxFQUFBLEVBQUE7O1FBVkcsZUFBbUM7UUFBbkMsbURBQW1DO1FBQ1osZUFBWTtRQUFaLHVDQUFZO1FBSXZDLGVBQXVCO1FBQXZCLHlDQUF1Qjs7dUZEQXRCLCtCQUErQjtjQUwzQyxTQUFTOzJCQUNFLDhCQUE4Qjs7c0JBcU0zQixNQUFNO3VCQUFDLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE1hdERpYWxvZ1JlZiwgTUFUX0RJQUxPR19EQVRBIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nJztcclxuaW1wb3J0IHsgT25ib2FyZGluZ1NlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9vbmJvYXJkaW5nLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdsaWItZGlhbG9nLWNyZWF0ZS1vbmJvYXJkaW5nJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vZGlhbG9nLWNyZWF0ZS1vbmJvYXJkaW5nLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9kaWFsb2ctY3JlYXRlLW9uYm9hcmRpbmcuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRGlhbG9nQ3JlYXRlT25ib2FyZGluZ0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgdGVtcGxhdGVzID0gW107XHJcbiAgZGVmYXVsdFVzZXJGb3JtID0gW1xyXG4gICAge1xyXG4gICAgICBsYWJlbDogXCJDaXZpbGl0w6lcIixcclxuICAgICAga2V5OiBcIlNhbHV0YXRpb25cIixcclxuICAgICAgZXhwYW5kT25ib2FyZGluZzogdHJ1ZSxcclxuICAgICAgZGVmYXVsdFZhbHVlOiBbeyB2YWx1ZTogXCJNLlwiLCBjaGVja2VkOiBmYWxzZSB9LCB7IHZhbHVlOiBcIk1tZVwiLCBjaGVja2VkOiBmYWxzZSB9XSxcclxuICAgICAgdmFsdWU6IG51bGwsXHJcbiAgICAgIHNpemU6IDEwLFxyXG4gICAgICBpc01hbmRhdG9yeTogdHJ1ZSxcclxuICAgICAgb3RoZXJWYWx1ZTogJycsXHJcbiAgICAgIHR5cGU6IFwic2VsZWN0XCIsXHJcbiAgICAgIGVkaXRhYmxlOiBmYWxzZSxcclxuICAgICAgZGVsZXRlYWJsZTogZmFsc2UsXHJcbiAgICAgIHN1YkxldmVsOiAxLFxyXG4gICAgICBleHBhbmRNb3JlOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGxhYmVsOiBcIlR5cGUgZGUgcHJvZmlsXCIsXHJcbiAgICAgIGtleTogXCJUeXBlX2RlX3Byb2ZpbF9Ob3dib2FyZF9fY1wiLFxyXG4gICAgICBleHBhbmRPbmJvYXJkaW5nOiB0cnVlLFxyXG4gICAgICBkZWZhdWx0VmFsdWU6IFt7IHZhbHVlOiBcIk1hbmFnZXJcIiwgY2hlY2tlZDogZmFsc2UgfSwgeyB2YWx1ZTogXCJVdGlsaXNhdGV1clwiLCBjaGVja2VkOiBmYWxzZSB9XSxcclxuICAgICAgdmFsdWU6IG51bGwsXHJcbiAgICAgIHNpemU6IDEwLFxyXG4gICAgICBpc01hbmRhdG9yeTogdHJ1ZSxcclxuICAgICAgb3RoZXJWYWx1ZTogJycsXHJcbiAgICAgIHR5cGU6IFwic2VsZWN0XCIsXHJcbiAgICAgIGVkaXRhYmxlOiBmYWxzZSxcclxuICAgICAgZGVsZXRlYWJsZTogZmFsc2UsXHJcbiAgICAgIHN1YkxldmVsOiAxLFxyXG4gICAgICBleHBhbmRNb3JlOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGxhYmVsOiBcIk5vbVwiLFxyXG4gICAgICBrZXk6IFwiTGFzdE5hbWVcIixcclxuICAgICAgZXhwYW5kT25ib2FyZGluZzogdHJ1ZSxcclxuICAgICAgZGVmYXVsdFZhbHVlOiBudWxsLFxyXG4gICAgICB2YWx1ZTogbnVsbCxcclxuICAgICAgc2l6ZTogODAsXHJcbiAgICAgIGlzTWFuZGF0b3J5OiB0cnVlLFxyXG4gICAgICBvdGhlclZhbHVlOiAnJyxcclxuICAgICAgdHlwZTogXCJ0ZXh0XCIsXHJcbiAgICAgIGVkaXRhYmxlOiBmYWxzZSxcclxuICAgICAgZGVsZXRlYWJsZTogZmFsc2UsXHJcbiAgICAgIHN1YkxldmVsOiAxLFxyXG4gICAgICBleHBhbmRNb3JlOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGxhYmVsOiBcIlByw6lub21cIixcclxuICAgICAga2V5OiBcIkZpcnN0TmFtZVwiLFxyXG4gICAgICBleHBhbmRPbmJvYXJkaW5nOiB0cnVlLFxyXG4gICAgICBkZWZhdWx0VmFsdWU6IG51bGwsXHJcbiAgICAgIHZhbHVlOiBudWxsLFxyXG4gICAgICBzaXplOiA4MCxcclxuICAgICAgaXNNYW5kYXRvcnk6IHRydWUsXHJcbiAgICAgIG90aGVyVmFsdWU6ICcnLFxyXG4gICAgICB0eXBlOiBcInRleHRcIixcclxuICAgICAgZWRpdGFibGU6IGZhbHNlLFxyXG4gICAgICBkZWxldGVhYmxlOiBmYWxzZSxcclxuICAgICAgc3ViTGV2ZWw6IDEsXHJcbiAgICAgIGV4cGFuZE1vcmU6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbGFiZWw6IFwiRW1haWxcIixcclxuICAgICAga2V5OiBcIkVtYWlsXCIsXHJcbiAgICAgIGV4cGFuZE9uYm9hcmRpbmc6IHRydWUsXHJcbiAgICAgIGRlZmF1bHRWYWx1ZTogbnVsbCxcclxuICAgICAgdmFsdWU6IG51bGwsXHJcbiAgICAgIHNpemU6IDgwLFxyXG4gICAgICBpc01hbmRhdG9yeTogdHJ1ZSxcclxuICAgICAgb3RoZXJWYWx1ZTogJycsXHJcbiAgICAgIHR5cGU6IFwiZW1haWxcIixcclxuICAgICAgZWRpdGFibGU6IGZhbHNlLFxyXG4gICAgICBkZWxldGVhYmxlOiBmYWxzZSxcclxuICAgICAgc3ViTGV2ZWw6IDEsXHJcbiAgICAgIGV4cGFuZE1vcmU6IGZhbHNlLFxyXG4gICAgfSxcclxuXHJcbiAgICB7XHJcbiAgICAgIGxhYmVsOiBcIlTDqWzDqXBob25lIGZpeGVcIixcclxuICAgICAga2V5OiBcIlBob25lXCIsXHJcbiAgICAgIGV4cGFuZE9uYm9hcmRpbmc6IHRydWUsXHJcbiAgICAgIGRlZmF1bHRWYWx1ZTogbnVsbCxcclxuICAgICAgdmFsdWU6IG51bGwsXHJcbiAgICAgIHNpemU6IDIwLFxyXG4gICAgICBpc01hbmRhdG9yeTogZmFsc2UsXHJcbiAgICAgIG90aGVyVmFsdWU6ICcnLFxyXG4gICAgICB0eXBlOiBcInRlbFwiLFxyXG4gICAgICBlZGl0YWJsZTogZmFsc2UsXHJcbiAgICAgIGRlbGV0ZWFibGU6IGZhbHNlLFxyXG4gICAgICBzdWJMZXZlbDogMSxcclxuXHJcbiAgICAgIGV4cGFuZE1vcmU6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbGFiZWw6IFwiVMOpbMOpcGhvbmUgcG9ydGFibGVcIixcclxuICAgICAga2V5OiBcIk1vYmlsZVBob25lXCIsXHJcbiAgICAgIGV4cGFuZE9uYm9hcmRpbmc6IHRydWUsXHJcbiAgICAgIGRlZmF1bHRWYWx1ZTogbnVsbCxcclxuICAgICAgdmFsdWU6IG51bGwsXHJcbiAgICAgIHNpemU6IDIwLFxyXG4gICAgICBpc01hbmRhdG9yeTogZmFsc2UsXHJcbiAgICAgIG90aGVyVmFsdWU6ICcnLFxyXG4gICAgICB0eXBlOiBcInRlbFwiLFxyXG4gICAgICBlZGl0YWJsZTogZmFsc2UsXHJcbiAgICAgIGRlbGV0ZWFibGU6IGZhbHNlLFxyXG4gICAgICBzdWJMZXZlbDogMSxcclxuXHJcbiAgICAgIGV4cGFuZE1vcmU6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbGFiZWw6IFwiRm9uY3Rpb25cIixcclxuICAgICAga2V5OiBcIlRpdGxlXCIsXHJcbiAgICAgIGV4cGFuZE9uYm9hcmRpbmc6IHRydWUsXHJcbiAgICAgIGRlZmF1bHRWYWx1ZTogbnVsbCxcclxuICAgICAgdmFsdWU6IG51bGwsXHJcbiAgICAgIHNpemU6IDgwLFxyXG4gICAgICBpc01hbmRhdG9yeTogdHJ1ZSxcclxuICAgICAgb3RoZXJWYWx1ZTogJycsXHJcbiAgICAgIHR5cGU6IFwidGV4dFwiLFxyXG4gICAgICBlZGl0YWJsZTogZmFsc2UsXHJcbiAgICAgIGRlbGV0ZWFibGU6IGZhbHNlLFxyXG4gICAgICBzdWJMZXZlbDogMSxcclxuICAgICAgZXhwYW5kTW9yZTogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBsYWJlbDogXCJFdGFibGlzc2VtZW50IC8gU2l0ZVwiLFxyXG4gICAgICBrZXk6IFwiQWNjb3VudE5hbWVcIixcclxuICAgICAgZXhwYW5kT25ib2FyZGluZzogdHJ1ZSxcclxuICAgICAgZGVmYXVsdFZhbHVlOiBudWxsLFxyXG4gICAgICB2YWx1ZTogbnVsbCxcclxuICAgICAgc2l6ZTogODAsXHJcbiAgICAgIGlzTWFuZGF0b3J5OiB0cnVlLFxyXG4gICAgICBvdGhlclZhbHVlOiAnJyxcclxuICAgICAgdHlwZTogXCJ0ZXh0XCIsXHJcbiAgICAgIGVkaXRhYmxlOiBmYWxzZSxcclxuICAgICAgZGVsZXRlYWJsZTogZmFsc2UsXHJcbiAgICAgIHN1YkxldmVsOiAxLFxyXG4gICAgICBleHBhbmRNb3JlOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGxhYmVsOiBcIkFjY8OocyBhdSBwb3J0YWlsXCIsXHJcbiAgICAgIGtleTogXCJBY2Nfc19hdV9wb3J0YWlsX2NsaWVudF9Ob3dCb2FyZF9fY1wiLFxyXG4gICAgICBleHBhbmRPbmJvYXJkaW5nOiB0cnVlLFxyXG4gICAgICBkZWZhdWx0VmFsdWU6IFt7IHZhbHVlOiBcIk91aVwiLCBjaGVja2VkOiBmYWxzZSB9LCB7IHZhbHVlOiBcIk5vblwiLCBjaGVja2VkOiBmYWxzZSB9XSxcclxuICAgICAgdmFsdWU6IG51bGwsXHJcbiAgICAgIHNpemU6IDEwLFxyXG4gICAgICBpc01hbmRhdG9yeTogdHJ1ZSxcclxuICAgICAgb3RoZXJWYWx1ZTogJycsXHJcbiAgICAgIHR5cGU6IFwic2VsZWN0XCIsXHJcbiAgICAgIGVkaXRhYmxlOiBmYWxzZSxcclxuICAgICAgZGVsZXRlYWJsZTogZmFsc2UsXHJcbiAgICAgIHN1YkxldmVsOiAxLFxyXG5cclxuICAgICAgZXhwYW5kTW9yZTogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBsYWJlbDogXCJMYW5ndWVcIixcclxuICAgICAga2V5OiBcIkxhbmd1ZV9tYXRlcm5lbGxlX19jXCIsXHJcbiAgICAgIGV4cGFuZE9uYm9hcmRpbmc6IHRydWUsXHJcbiAgICAgIGRlZmF1bHRWYWx1ZTogW3sgdmFsdWU6IFwiRnJhbsOnYWlzXCIsIGNoZWNrZWQ6IGZhbHNlIH0sIHsgdmFsdWU6IFwiQW5nbGFpc1wiLCBjaGVja2VkOiBmYWxzZSB9XSxcclxuICAgICAgdmFsdWU6IG51bGwsXHJcbiAgICAgIHNpemU6IDEwLFxyXG4gICAgICBpc01hbmRhdG9yeTogdHJ1ZSxcclxuICAgICAgb3RoZXJWYWx1ZTogJycsXHJcbiAgICAgIHR5cGU6IFwic2VsZWN0XCIsXHJcbiAgICAgIGVkaXRhYmxlOiBmYWxzZSxcclxuICAgICAgZGVsZXRlYWJsZTogZmFsc2UsXHJcbiAgICAgIHN1YkxldmVsOiAxLFxyXG4gICAgICBleHBhbmRNb3JlOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGxhYmVsOiBcIkEgcXVpdHTDqSBsYSBzb2Npw6l0w6lcIixcclxuICAgICAga2V5OiBcIkFfcXVpdHRfbGFfc29jaV90X19jXCIsXHJcbiAgICAgIGV4cGFuZE9uYm9hcmRpbmc6IHRydWUsXHJcbiAgICAgIGRlZmF1bHRWYWx1ZTogW3sgdmFsdWU6IFwiT3VpXCIsIGNoZWNrZWQ6IGZhbHNlIH0sIHsgdmFsdWU6IFwiTm9uXCIsIGNoZWNrZWQ6IGZhbHNlIH1dLFxyXG4gICAgICB2YWx1ZTogbnVsbCxcclxuICAgICAgc2l6ZTogMTAsXHJcbiAgICAgIGlzTWFuZGF0b3J5OiB0cnVlLFxyXG4gICAgICBvdGhlclZhbHVlOiAnJyxcclxuICAgICAgdHlwZTogXCJzZWxlY3RcIixcclxuICAgICAgZWRpdGFibGU6IGZhbHNlLFxyXG4gICAgICBkZWxldGVhYmxlOiBmYWxzZSxcclxuICAgICAgc3ViTGV2ZWw6IDEsXHJcbiAgICAgIGV4cGFuZE1vcmU6IGZhbHNlLFxyXG4gICAgfSxcclxuXHJcbiAgXVxyXG4gIHVzZXJGb3JtID0gW11cclxuICBvbmJvYXJkaW5nID0ge1xyXG4gICAgVGVtcGxhdGVJZDogMCxcclxuICB9XHJcbiAgY29uc3RydWN0b3IoQEluamVjdChNQVRfRElBTE9HX0RBVEEpIHByaXZhdGUgZGF0YTogYW55LFxyXG4gICAgcHJpdmF0ZSBkaWFsb2dSZWY6IE1hdERpYWxvZ1JlZjxEaWFsb2dDcmVhdGVPbmJvYXJkaW5nQ29tcG9uZW50PiwgcHJpdmF0ZSBzZXJ2aWNlOiBPbmJvYXJkaW5nU2VydmljZSkge1xyXG4gICAgdGhpcy5zZXJ2aWNlLl90ZW1wbGF0ZXMuc3Vic2NyaWJlKChkYXRhKSA9PiB7XHJcbiAgICAgIGlmIChkYXRhKSB7XHJcbiAgICAgICAgdGhpcy50ZW1wbGF0ZXMgPSBkYXRhLmZpbHRlcigoZCkgPT4gZC5TdGF0dXMpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGFzeW5jIG5nT25Jbml0KCkge1xyXG4gICAgYXdhaXQgdGhpcy5zZXJ2aWNlLmdldEFsbFByb2ZpbCgpO1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlT25ib2FyZGluZygpIHtcclxuICAgIGlmICghdGhpcy5kaXNhYmxlZCgpKSB7XHJcbiAgICAgIGNvbnN0IHRlbXBsYXRlID0gdGhpcy50ZW1wbGF0ZXMuZmluZCgodGVtcCkgPT4gdGVtcC5faWQgPT09IHRoaXMub25ib2FyZGluZy5UZW1wbGF0ZUlkKTtcclxuICAgICAgaWYgKHRoaXMuZGF0YS51c2VyKSB7XHJcbiAgICAgICAgdGhpcy51c2VyRm9ybSA9IHRoaXMuZGVmYXVsdFVzZXJGb3JtLm1hcCgoZGF0YSkgPT4gKHtcclxuICAgICAgICAgIC4uLmRhdGEsXHJcbiAgICAgICAgICB2YWx1ZTogdGhpcy5kYXRhLnVzZXJbZGF0YS5rZXldXHJcbiAgICAgICAgfSkpXHJcbiAgICAgICAgY29uc3QgaW5kZXggPSB0ZW1wbGF0ZS5jYXRlZ29yaWVzLmZpbmRJbmRleCgoY2F0KSA9PiBjYXQubmFtZSA9PT0gXCJVdGlsaXNhdGV1clwiKTtcclxuICAgICAgICBpZiAoaW5kZXggIT09IC0xKSB7XHJcbiAgICAgICAgICB0ZW1wbGF0ZS5jYXRlZ29yaWVzW2luZGV4XS5mb3JtcyA9IHRoaXMudXNlckZvcm07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuZGlhbG9nUmVmLmNsb3NlKHtcclxuICAgICAgICAuLi50aGlzLm9uYm9hcmRpbmcsIGNhdGVnb3JpZXM6IHRlbXBsYXRlLmNhdGVnb3JpZXNcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9XHJcbiAgY2xvc2UoKSB7XHJcbiAgICB0aGlzLmRpYWxvZ1JlZi5jbG9zZShmYWxzZSlcclxuICB9XHJcblxyXG4gIGRpc2FibGVkKCkge1xyXG4gICAgcmV0dXJuICEodGhpcy5vbmJvYXJkaW5nLlRlbXBsYXRlSWQpXHJcbiAgfVxyXG5cclxufVxyXG4iLCI8bWF0LWRpYWxvZy1jb250ZW50IGNsYXNzPVwibmd4LW9uYm9hcmRpbmctZGlhbG9nXCI+XHJcbiAgPGgzIGNsYXNzPVwidGl0bGVcIj5DcsOpYXRpb24gZOKAmXVuZSBkZW1hbmRlIGQnaW50w6lncmF0aW9uPC9oMz5cclxuICA8bWF0LWZvcm0tZmllbGQgY2xhc3M9XCJmdWxsLXdpZHRoXCIgYXBwZWFyYW5jZT1cIm91dGxpbmVcIj5cclxuICAgIDxtYXQtbGFiZWw+VHlwZSBkZSBwcm9maWw8L21hdC1sYWJlbD5cclxuICAgIDxtYXQtc2VsZWN0IFsobmdNb2RlbCldPVwib25ib2FyZGluZy5UZW1wbGF0ZUlkXCIgcmVxdWlyZWQ+XHJcbiAgICAgIDxtYXQtb3B0aW9uICpuZ0Zvcj1cImxldCB0ZW1wbGF0ZSBvZiB0ZW1wbGF0ZXNcIiBbdmFsdWVdPVwidGVtcGxhdGUuX2lkXCI+e3sgdGVtcGxhdGUuTmFtZSB9fTwvbWF0LW9wdGlvbj5cclxuICAgIDwvbWF0LXNlbGVjdD5cclxuICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gIDxkaXYgY2xhc3M9XCJhY3Rpb24tY29udGVudFwiPlxyXG4gICAgPGJ1dHRvbiBbZGlzYWJsZWRdPVwiZGlzYWJsZWQoKVwiIGNsYXNzPVwiY3JlYXRlLXByb2ZpbFwiIChjbGljayk9XCJjcmVhdGVPbmJvYXJkaW5nKClcIiBtYXQtcmFpc2VkLWJ1dHRvbj5cclxuICAgICAgTGFuY2VyIGxhIGRlbWFuZGVcclxuICAgIDwvYnV0dG9uPlxyXG4gICAgPGJ1dHRvbiBjbGFzcz1cImFiYW5kb24tcHJvZmlsXCIgKGNsaWNrKT1cImNsb3NlKClcIiBtYXQtcmFpc2VkLWJ1dHRvbj5cclxuICAgICAgQWJhbmRvbm5lclxyXG4gICAgPC9idXR0b24+XHJcbiAgPC9kaXY+XHJcbjwvbWF0LWRpYWxvZy1jb250ZW50PiJdfQ==