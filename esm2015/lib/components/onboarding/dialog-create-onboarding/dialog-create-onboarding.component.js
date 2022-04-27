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
            if (this.data.user) {
                this.userForm = this.defaultUserForm.map((data) => (Object.assign(Object.assign({}, data), { value: this.data.user[data.key] })));
                const index = template.categories.findIndex((cat) => cat.name === "Utilisateur");
                if (index !== -1) {
                    template.categories[index].forms = this.userForm;
                }
            }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLWNyZWF0ZS1vbmJvYXJkaW5nLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL29uYm9hcmRpbmcvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9vbmJvYXJkaW5nL2RpYWxvZy1jcmVhdGUtb25ib2FyZGluZy9kaWFsb2ctY3JlYXRlLW9uYm9hcmRpbmcuY29tcG9uZW50LnRzIiwibGliL2NvbXBvbmVudHMvb25ib2FyZGluZy9kaWFsb2ctY3JlYXRlLW9uYm9hcmRpbmcvZGlhbG9nLWNyZWF0ZS1vbmJvYXJkaW5nLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxRCxPQUFPLEVBQWdCLGVBQWUsRUFBRSxNQUFNLDBCQUEwQixDQUFDOzs7Ozs7Ozs7Ozs7SUNJbkUscUNBQXNFO0lBQUEsWUFBbUI7SUFBQSxpQkFBYTs7O0lBQXZELHlDQUFzQjtJQUFDLGVBQW1CO0lBQW5CLHdDQUFtQjs7QURJL0YsTUFBTSxPQUFPLCtCQUErQjtJQWlNMUMsWUFBNkMsSUFBUyxFQUM1QyxTQUF3RCxFQUFVLE9BQTBCO1FBRHpELFNBQUksR0FBSixJQUFJLENBQUs7UUFDNUMsY0FBUyxHQUFULFNBQVMsQ0FBK0M7UUFBVSxZQUFPLEdBQVAsT0FBTyxDQUFtQjtRQWpNdEcsY0FBUyxHQUFHLEVBQUUsQ0FBQztRQUNmLG9CQUFlLEdBQUc7WUFDaEI7Z0JBQ0UsS0FBSyxFQUFFLFVBQVU7Z0JBQ2pCLEdBQUcsRUFBRSxZQUFZO2dCQUNqQixnQkFBZ0IsRUFBRSxJQUFJO2dCQUN0QixZQUFZLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLENBQUM7Z0JBQ2pGLEtBQUssRUFBRSxJQUFJO2dCQUNY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QUwzQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLDhCQUE4QjtnQkFDeEMsV0FBVyxFQUFFLDJDQUEyQztnQkFDeEQsU0FBUyxFQUFFLENBQUMsMkNBQTJDLENBQUM7YUFDekQ7O3NCQWtNYyxNQUFNO3VCQUFDLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE1hdERpYWxvZ1JlZiwgTUFUX0RJQUxPR19EQVRBIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nJztcclxuaW1wb3J0IHsgT25ib2FyZGluZ1NlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9vbmJvYXJkaW5nLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdsaWItZGlhbG9nLWNyZWF0ZS1vbmJvYXJkaW5nJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vZGlhbG9nLWNyZWF0ZS1vbmJvYXJkaW5nLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9kaWFsb2ctY3JlYXRlLW9uYm9hcmRpbmcuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRGlhbG9nQ3JlYXRlT25ib2FyZGluZ0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgdGVtcGxhdGVzID0gW107XHJcbiAgZGVmYXVsdFVzZXJGb3JtID0gW1xyXG4gICAge1xyXG4gICAgICBsYWJlbDogXCJDaXZpbGl0w6lcIixcclxuICAgICAga2V5OiBcIlNhbHV0YXRpb25cIixcclxuICAgICAgZXhwYW5kT25ib2FyZGluZzogdHJ1ZSxcclxuICAgICAgZGVmYXVsdFZhbHVlOiBbeyB2YWx1ZTogXCJNLlwiLCBjaGVja2VkOiBmYWxzZSB9LCB7IHZhbHVlOiBcIk1tZVwiLCBjaGVja2VkOiBmYWxzZSB9XSxcclxuICAgICAgdmFsdWU6IG51bGwsXHJcbiAgICAgIHNpemU6IDEwLFxyXG4gICAgICBpc01hbmRhdG9yeTogdHJ1ZSxcclxuICAgICAgb3RoZXJWYWx1ZTogJycsXHJcbiAgICAgIHR5cGU6IFwic2VsZWN0XCIsXHJcbiAgICAgIGVkaXRhYmxlOiBmYWxzZSxcclxuICAgICAgZGVsZXRlYWJsZTogZmFsc2UsXHJcbiAgICAgIHN1YkxldmVsOiAxLFxyXG4gICAgICBleHBhbmRNb3JlOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGxhYmVsOiBcIlR5cGUgZGUgcHJvZmlsXCIsXHJcbiAgICAgIGtleTogXCJUeXBlX2RlX3Byb2ZpbF9Ob3dib2FyZF9fY1wiLFxyXG4gICAgICBleHBhbmRPbmJvYXJkaW5nOiB0cnVlLFxyXG4gICAgICBkZWZhdWx0VmFsdWU6IFt7IHZhbHVlOiBcIk1hbmFnZXJcIiwgY2hlY2tlZDogZmFsc2UgfSwgeyB2YWx1ZTogXCJVdGlsaXNhdGV1clwiLCBjaGVja2VkOiBmYWxzZSB9XSxcclxuICAgICAgdmFsdWU6IG51bGwsXHJcbiAgICAgIHNpemU6IDEwLFxyXG4gICAgICBpc01hbmRhdG9yeTogdHJ1ZSxcclxuICAgICAgb3RoZXJWYWx1ZTogJycsXHJcbiAgICAgIHR5cGU6IFwic2VsZWN0XCIsXHJcbiAgICAgIGVkaXRhYmxlOiBmYWxzZSxcclxuICAgICAgZGVsZXRlYWJsZTogZmFsc2UsXHJcbiAgICAgIHN1YkxldmVsOiAxLFxyXG4gICAgICBleHBhbmRNb3JlOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGxhYmVsOiBcIk5vbVwiLFxyXG4gICAgICBrZXk6IFwiTGFzdE5hbWVcIixcclxuICAgICAgZXhwYW5kT25ib2FyZGluZzogdHJ1ZSxcclxuICAgICAgZGVmYXVsdFZhbHVlOiBudWxsLFxyXG4gICAgICB2YWx1ZTogbnVsbCxcclxuICAgICAgc2l6ZTogODAsXHJcbiAgICAgIGlzTWFuZGF0b3J5OiB0cnVlLFxyXG4gICAgICBvdGhlclZhbHVlOiAnJyxcclxuICAgICAgdHlwZTogXCJ0ZXh0XCIsXHJcbiAgICAgIGVkaXRhYmxlOiBmYWxzZSxcclxuICAgICAgZGVsZXRlYWJsZTogZmFsc2UsXHJcbiAgICAgIHN1YkxldmVsOiAxLFxyXG4gICAgICBleHBhbmRNb3JlOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGxhYmVsOiBcIlByw6lub21cIixcclxuICAgICAga2V5OiBcIkZpcnN0TmFtZVwiLFxyXG4gICAgICBleHBhbmRPbmJvYXJkaW5nOiB0cnVlLFxyXG4gICAgICBkZWZhdWx0VmFsdWU6IG51bGwsXHJcbiAgICAgIHZhbHVlOiBudWxsLFxyXG4gICAgICBzaXplOiA4MCxcclxuICAgICAgaXNNYW5kYXRvcnk6IHRydWUsXHJcbiAgICAgIG90aGVyVmFsdWU6ICcnLFxyXG4gICAgICB0eXBlOiBcInRleHRcIixcclxuICAgICAgZWRpdGFibGU6IGZhbHNlLFxyXG4gICAgICBkZWxldGVhYmxlOiBmYWxzZSxcclxuICAgICAgc3ViTGV2ZWw6IDEsXHJcbiAgICAgIGV4cGFuZE1vcmU6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbGFiZWw6IFwiRW1haWxcIixcclxuICAgICAga2V5OiBcIkVtYWlsXCIsXHJcbiAgICAgIGV4cGFuZE9uYm9hcmRpbmc6IHRydWUsXHJcbiAgICAgIGRlZmF1bHRWYWx1ZTogbnVsbCxcclxuICAgICAgdmFsdWU6IG51bGwsXHJcbiAgICAgIHNpemU6IDgwLFxyXG4gICAgICBpc01hbmRhdG9yeTogdHJ1ZSxcclxuICAgICAgb3RoZXJWYWx1ZTogJycsXHJcbiAgICAgIHR5cGU6IFwiZW1haWxcIixcclxuICAgICAgZWRpdGFibGU6IGZhbHNlLFxyXG4gICAgICBkZWxldGVhYmxlOiBmYWxzZSxcclxuICAgICAgc3ViTGV2ZWw6IDEsXHJcbiAgICAgIGV4cGFuZE1vcmU6IGZhbHNlLFxyXG4gICAgfSxcclxuXHJcbiAgICB7XHJcbiAgICAgIGxhYmVsOiBcIlTDqWzDqXBob25lIGZpeGVcIixcclxuICAgICAga2V5OiBcIlBob25lXCIsXHJcbiAgICAgIGV4cGFuZE9uYm9hcmRpbmc6IHRydWUsXHJcbiAgICAgIGRlZmF1bHRWYWx1ZTogbnVsbCxcclxuICAgICAgdmFsdWU6IG51bGwsXHJcbiAgICAgIHNpemU6IDIwLFxyXG4gICAgICBpc01hbmRhdG9yeTogZmFsc2UsXHJcbiAgICAgIG90aGVyVmFsdWU6ICcnLFxyXG4gICAgICB0eXBlOiBcInRlbFwiLFxyXG4gICAgICBlZGl0YWJsZTogZmFsc2UsXHJcbiAgICAgIGRlbGV0ZWFibGU6IGZhbHNlLFxyXG4gICAgICBzdWJMZXZlbDogMSxcclxuXHJcbiAgICAgIGV4cGFuZE1vcmU6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbGFiZWw6IFwiVMOpbMOpcGhvbmUgcG9ydGFibGVcIixcclxuICAgICAga2V5OiBcIk1vYmlsZVBob25lXCIsXHJcbiAgICAgIGV4cGFuZE9uYm9hcmRpbmc6IHRydWUsXHJcbiAgICAgIGRlZmF1bHRWYWx1ZTogbnVsbCxcclxuICAgICAgdmFsdWU6IG51bGwsXHJcbiAgICAgIHNpemU6IDIwLFxyXG4gICAgICBpc01hbmRhdG9yeTogZmFsc2UsXHJcbiAgICAgIG90aGVyVmFsdWU6ICcnLFxyXG4gICAgICB0eXBlOiBcInRlbFwiLFxyXG4gICAgICBlZGl0YWJsZTogZmFsc2UsXHJcbiAgICAgIGRlbGV0ZWFibGU6IGZhbHNlLFxyXG4gICAgICBzdWJMZXZlbDogMSxcclxuXHJcbiAgICAgIGV4cGFuZE1vcmU6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbGFiZWw6IFwiRm9uY3Rpb25cIixcclxuICAgICAga2V5OiBcIlRpdGxlXCIsXHJcbiAgICAgIGV4cGFuZE9uYm9hcmRpbmc6IHRydWUsXHJcbiAgICAgIGRlZmF1bHRWYWx1ZTogbnVsbCxcclxuICAgICAgdmFsdWU6IG51bGwsXHJcbiAgICAgIHNpemU6IDgwLFxyXG4gICAgICBpc01hbmRhdG9yeTogdHJ1ZSxcclxuICAgICAgb3RoZXJWYWx1ZTogJycsXHJcbiAgICAgIHR5cGU6IFwidGV4dFwiLFxyXG4gICAgICBlZGl0YWJsZTogZmFsc2UsXHJcbiAgICAgIGRlbGV0ZWFibGU6IGZhbHNlLFxyXG4gICAgICBzdWJMZXZlbDogMSxcclxuICAgICAgZXhwYW5kTW9yZTogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBsYWJlbDogXCJFdGFibGlzc2VtZW50IC8gU2l0ZVwiLFxyXG4gICAgICBrZXk6IFwiQWNjb3VudE5hbWVcIixcclxuICAgICAgZXhwYW5kT25ib2FyZGluZzogdHJ1ZSxcclxuICAgICAgZGVmYXVsdFZhbHVlOiBudWxsLFxyXG4gICAgICB2YWx1ZTogbnVsbCxcclxuICAgICAgc2l6ZTogODAsXHJcbiAgICAgIGlzTWFuZGF0b3J5OiB0cnVlLFxyXG4gICAgICBvdGhlclZhbHVlOiAnJyxcclxuICAgICAgdHlwZTogXCJ0ZXh0XCIsXHJcbiAgICAgIGVkaXRhYmxlOiBmYWxzZSxcclxuICAgICAgZGVsZXRlYWJsZTogZmFsc2UsXHJcbiAgICAgIHN1YkxldmVsOiAxLFxyXG4gICAgICBleHBhbmRNb3JlOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGxhYmVsOiBcIkFjY8OocyBhdSBwb3J0YWlsXCIsXHJcbiAgICAgIGtleTogXCJBY2Nfc19hdV9wb3J0YWlsX2NsaWVudF9Ob3dCb2FyZF9fY1wiLFxyXG4gICAgICBleHBhbmRPbmJvYXJkaW5nOiB0cnVlLFxyXG4gICAgICBkZWZhdWx0VmFsdWU6IFt7IHZhbHVlOiBcIk91aVwiLCBjaGVja2VkOiBmYWxzZSB9LCB7IHZhbHVlOiBcIk5vblwiLCBjaGVja2VkOiBmYWxzZSB9XSxcclxuICAgICAgdmFsdWU6IG51bGwsXHJcbiAgICAgIHNpemU6IDEwLFxyXG4gICAgICBpc01hbmRhdG9yeTogdHJ1ZSxcclxuICAgICAgb3RoZXJWYWx1ZTogJycsXHJcbiAgICAgIHR5cGU6IFwic2VsZWN0XCIsXHJcbiAgICAgIGVkaXRhYmxlOiBmYWxzZSxcclxuICAgICAgZGVsZXRlYWJsZTogZmFsc2UsXHJcbiAgICAgIHN1YkxldmVsOiAxLFxyXG5cclxuICAgICAgZXhwYW5kTW9yZTogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBsYWJlbDogXCJMYW5ndWVcIixcclxuICAgICAga2V5OiBcIkxhbmd1ZV9tYXRlcm5lbGxlX19jXCIsXHJcbiAgICAgIGV4cGFuZE9uYm9hcmRpbmc6IHRydWUsXHJcbiAgICAgIGRlZmF1bHRWYWx1ZTogW3sgdmFsdWU6IFwiRnJhbsOnYWlzXCIsIGNoZWNrZWQ6IGZhbHNlIH0sIHsgdmFsdWU6IFwiQW5nbGFpc1wiLCBjaGVja2VkOiBmYWxzZSB9XSxcclxuICAgICAgdmFsdWU6IG51bGwsXHJcbiAgICAgIHNpemU6IDEwLFxyXG4gICAgICBpc01hbmRhdG9yeTogdHJ1ZSxcclxuICAgICAgb3RoZXJWYWx1ZTogJycsXHJcbiAgICAgIHR5cGU6IFwic2VsZWN0XCIsXHJcbiAgICAgIGVkaXRhYmxlOiBmYWxzZSxcclxuICAgICAgZGVsZXRlYWJsZTogZmFsc2UsXHJcbiAgICAgIHN1YkxldmVsOiAxLFxyXG4gICAgICBleHBhbmRNb3JlOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGxhYmVsOiBcIkEgcXVpdHTDqSBsYSBzb2Npw6l0w6lcIixcclxuICAgICAga2V5OiBcIkFfcXVpdHRfbGFfc29jaV90X19jXCIsXHJcbiAgICAgIGV4cGFuZE9uYm9hcmRpbmc6IHRydWUsXHJcbiAgICAgIGRlZmF1bHRWYWx1ZTogW3sgdmFsdWU6IFwiT3VpXCIsIGNoZWNrZWQ6IGZhbHNlIH0sIHsgdmFsdWU6IFwiTm9uXCIsIGNoZWNrZWQ6IGZhbHNlIH1dLFxyXG4gICAgICB2YWx1ZTogbnVsbCxcclxuICAgICAgc2l6ZTogMTAsXHJcbiAgICAgIGlzTWFuZGF0b3J5OiB0cnVlLFxyXG4gICAgICBvdGhlclZhbHVlOiAnJyxcclxuICAgICAgdHlwZTogXCJzZWxlY3RcIixcclxuICAgICAgZWRpdGFibGU6IGZhbHNlLFxyXG4gICAgICBkZWxldGVhYmxlOiBmYWxzZSxcclxuICAgICAgc3ViTGV2ZWw6IDEsXHJcbiAgICAgIGV4cGFuZE1vcmU6IGZhbHNlLFxyXG4gICAgfSxcclxuXHJcbiAgXVxyXG4gIHVzZXJGb3JtID0gW11cclxuICBvbmJvYXJkaW5nID0ge1xyXG4gICAgVGVtcGxhdGVJZDogMCxcclxuICB9XHJcbiAgY29uc3RydWN0b3IoQEluamVjdChNQVRfRElBTE9HX0RBVEEpIHByaXZhdGUgZGF0YTogYW55LFxyXG4gICAgcHJpdmF0ZSBkaWFsb2dSZWY6IE1hdERpYWxvZ1JlZjxEaWFsb2dDcmVhdGVPbmJvYXJkaW5nQ29tcG9uZW50PiwgcHJpdmF0ZSBzZXJ2aWNlOiBPbmJvYXJkaW5nU2VydmljZSkge1xyXG4gICAgdGhpcy5zZXJ2aWNlLl90ZW1wbGF0ZXMuc3Vic2NyaWJlKChkYXRhKSA9PiB7XHJcbiAgICAgIHRoaXMudGVtcGxhdGVzID0gZGF0YTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgbmdPbkluaXQoKSB7XHJcbiAgICBhd2FpdCB0aGlzLnNlcnZpY2UuZ2V0QWxsUHJvZmlsKCk7XHJcbiAgfVxyXG5cclxuICBjcmVhdGVPbmJvYXJkaW5nKCkge1xyXG4gICAgaWYgKCF0aGlzLmRpc2FibGVkKCkpIHtcclxuICAgICAgY29uc3QgdGVtcGxhdGUgPSB0aGlzLnRlbXBsYXRlcy5maW5kKCh0ZW1wKSA9PiB0ZW1wLl9pZCA9PT0gdGhpcy5vbmJvYXJkaW5nLlRlbXBsYXRlSWQpO1xyXG4gICAgICBpZiAodGhpcy5kYXRhLnVzZXIpIHtcclxuICAgICAgICB0aGlzLnVzZXJGb3JtID0gdGhpcy5kZWZhdWx0VXNlckZvcm0ubWFwKChkYXRhKSA9PiAoe1xyXG4gICAgICAgICAgLi4uZGF0YSxcclxuICAgICAgICAgIHZhbHVlOiB0aGlzLmRhdGEudXNlcltkYXRhLmtleV1cclxuICAgICAgICB9KSlcclxuICAgICAgICBjb25zdCBpbmRleCA9IHRlbXBsYXRlLmNhdGVnb3JpZXMuZmluZEluZGV4KChjYXQpID0+IGNhdC5uYW1lID09PSBcIlV0aWxpc2F0ZXVyXCIpO1xyXG4gICAgICAgIGlmIChpbmRleCAhPT0gLTEpIHtcclxuICAgICAgICAgIHRlbXBsYXRlLmNhdGVnb3JpZXNbaW5kZXhdLmZvcm1zID0gdGhpcy51c2VyRm9ybTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5kaWFsb2dSZWYuY2xvc2Uoe1xyXG4gICAgICAgIC4uLnRoaXMub25ib2FyZGluZywgY2F0ZWdvcmllczogdGVtcGxhdGUuY2F0ZWdvcmllc1xyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH1cclxuICBjbG9zZSgpIHtcclxuICAgIHRoaXMuZGlhbG9nUmVmLmNsb3NlKGZhbHNlKVxyXG4gIH1cclxuXHJcbiAgZGlzYWJsZWQoKSB7XHJcbiAgICByZXR1cm4gISh0aGlzLm9uYm9hcmRpbmcuVGVtcGxhdGVJZClcclxuICB9XHJcblxyXG59XHJcbiIsIjxtYXQtZGlhbG9nLWNvbnRlbnQ+XHJcbiAgPGgzIGNsYXNzPVwidGl0bGVcIj5DcsOpYXRpb24gZOKAmXVuZSBkZW1hbmRlIGQnaW50w6lncmF0aW9uPC9oMz5cclxuICA8bWF0LWZvcm0tZmllbGQgY2xhc3M9XCJmdWxsLXdpZHRoXCIgYXBwZWFyYW5jZT1cIm91dGxpbmVcIj5cclxuICAgIDxtYXQtbGFiZWw+VHlwZSBkZSBwcm9maWw8L21hdC1sYWJlbD5cclxuICAgIDxtYXQtc2VsZWN0IFsobmdNb2RlbCldPVwib25ib2FyZGluZy5UZW1wbGF0ZUlkXCIgcmVxdWlyZWQ+XHJcbiAgICAgIDxtYXQtb3B0aW9uICpuZ0Zvcj1cImxldCB0ZW1wbGF0ZSBvZiB0ZW1wbGF0ZXNcIiBbdmFsdWVdPVwidGVtcGxhdGUuX2lkXCI+e3sgdGVtcGxhdGUuTmFtZSB9fTwvbWF0LW9wdGlvbj5cclxuICAgIDwvbWF0LXNlbGVjdD5cclxuICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gIDxkaXYgY2xhc3M9XCJhY3Rpb24tY29udGVudFwiPlxyXG4gICAgPGJ1dHRvbiBbZGlzYWJsZWRdPVwiZGlzYWJsZWQoKVwiIGNsYXNzPVwiY3JlYXRlLXByb2ZpbFwiIChjbGljayk9XCJjcmVhdGVPbmJvYXJkaW5nKClcIiBtYXQtcmFpc2VkLWJ1dHRvbj5cclxuICAgICAgTGFuY2VyIGxhIGRlbWFuZGVcclxuICAgIDwvYnV0dG9uPlxyXG4gICAgPGJ1dHRvbiBjbGFzcz1cImFiYW5kb24tcHJvZmlsXCIgKGNsaWNrKT1cImNsb3NlKClcIiBtYXQtcmFpc2VkLWJ1dHRvbj5cclxuICAgICAgQWJhbmRvbm5lclxyXG4gICAgPC9idXR0b24+XHJcbiAgPC9kaXY+XHJcbjwvbWF0LWRpYWxvZy1jb250ZW50PiJdfQ==