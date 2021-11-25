import { __awaiter } from "tslib";
import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { ENTER, COMMA, SEMICOLON } from '@angular/cdk/keycodes';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "../onboarding.service";
import * as i3 from "@angular/router";
import * as i4 from "@angular/material/form-field";
import * as i5 from "@angular/material/input";
import * as i6 from "@angular/common";
import * as i7 from "@angular/material/select";
import * as i8 from "@angular/material/checkbox";
import * as i9 from "@angular/material/button";
import * as i10 from "@angular/material/core";
import * as i11 from "@angular/material/icon";
import * as i12 from "@angular/material/chips";
function CreateProfileTemplateComponent_mat_error_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-error");
    i0.ɵɵtext(1, " Profil est ");
    i0.ɵɵelementStart(2, "strong");
    i0.ɵɵtext(3, "requis");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
function CreateProfileTemplateComponent_mat_option_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 15);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const tag_r3 = ctx.$implicit;
    i0.ɵɵproperty("value", tag_r3);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(tag_r3);
} }
function CreateProfileTemplateComponent_div_24_mat_error_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-error");
    i0.ɵɵtext(1, " Cat\u00E9gorie est ");
    i0.ɵɵelementStart(2, "strong");
    i0.ɵɵtext(3, "requis");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
function CreateProfileTemplateComponent_div_24_div_10_mat_error_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-error");
    i0.ɵɵtext(1, " Label est ");
    i0.ɵɵelementStart(2, "strong");
    i0.ɵɵtext(3, "requis");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
const _c0 = function () { return { standalone: true }; };
function CreateProfileTemplateComponent_div_24_div_10_mat_form_field_18_Template(rf, ctx) { if (rf & 1) {
    const _r16 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-form-field", 22);
    i0.ɵɵelementStart(1, "mat-label");
    i0.ɵɵtext(2, "Valeur");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "input", 34);
    i0.ɵɵlistener("ngModelChange", function CreateProfileTemplateComponent_div_24_div_10_mat_form_field_18_Template_input_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r16); const field_r8 = i0.ɵɵnextContext().$implicit; return field_r8.value = $event; });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const field_r8 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngModelOptions", i0.ɵɵpureFunction0(2, _c0))("ngModel", field_r8.value);
} }
function CreateProfileTemplateComponent_div_24_div_10_div_19_Template(rf, ctx) { if (rf & 1) {
    const _r20 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 35);
    i0.ɵɵelementStart(1, "mat-checkbox", 36);
    i0.ɵɵlistener("ngModelChange", function CreateProfileTemplateComponent_div_24_div_10_div_19_Template_mat_checkbox_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r20); const field_r8 = i0.ɵɵnextContext().$implicit; return field_r8.value = $event; });
    i0.ɵɵtext(2, "Valeur");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const field_r8 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", field_r8.value)("ngModelOptions", i0.ɵɵpureFunction0(2, _c0));
} }
function CreateProfileTemplateComponent_div_24_div_10_mat_form_field_20_mat_chip_5_Template(rf, ctx) { if (rf & 1) {
    const _r28 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-chip", 42);
    i0.ɵɵlistener("removed", function CreateProfileTemplateComponent_div_24_div_10_mat_form_field_20_mat_chip_5_Template_mat_chip_removed_0_listener() { i0.ɵɵrestoreView(_r28); const option_r25 = ctx.$implicit; const j_r9 = i0.ɵɵnextContext(2).index; const i_r5 = i0.ɵɵnextContext().index; const ctx_r26 = i0.ɵɵnextContext(); return ctx_r26.removeKeyword(option_r25, i_r5, j_r9); });
    i0.ɵɵtext(1);
    i0.ɵɵelementStart(2, "mat-icon", 43);
    i0.ɵɵtext(3, "cancel");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const option_r25 = ctx.$implicit;
    i0.ɵɵproperty("selected", option_r25)("value", option_r25)("removable", true);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", option_r25, " ");
} }
function CreateProfileTemplateComponent_div_24_div_10_mat_form_field_20_Template(rf, ctx) { if (rf & 1) {
    const _r31 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-form-field", 35);
    i0.ɵɵelementStart(1, "mat-label");
    i0.ɵɵtext(2, " Valeur ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "mat-chip-list", 37, 38);
    i0.ɵɵtemplate(5, CreateProfileTemplateComponent_div_24_div_10_mat_form_field_20_mat_chip_5_Template, 4, 4, "mat-chip", 39);
    i0.ɵɵelementStart(6, "input", 40, 41);
    i0.ɵɵlistener("matChipInputTokenEnd", function CreateProfileTemplateComponent_div_24_div_10_mat_form_field_20_Template_input_matChipInputTokenEnd_6_listener($event) { i0.ɵɵrestoreView(_r31); const j_r9 = i0.ɵɵnextContext().index; const i_r5 = i0.ɵɵnextContext().index; const ctx_r30 = i0.ɵɵnextContext(); return ctx_r30.addKeywordFromInput($event, i_r5, j_r9); })("keyup", function CreateProfileTemplateComponent_div_24_div_10_mat_form_field_20_Template_input_keyup_6_listener($event) { i0.ɵɵrestoreView(_r31); const j_r9 = i0.ɵɵnextContext().index; const i_r5 = i0.ɵɵnextContext().index; const ctx_r34 = i0.ɵɵnextContext(); return ctx_r34.onKeyPress($event, i_r5, j_r9); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const _r22 = i0.ɵɵreference(4);
    const field_r8 = i0.ɵɵnextContext().$implicit;
    const ctx_r13 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngForOf", field_r8.value);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("matChipInputFor", _r22)("matChipInputAddOnBlur", true)("matChipInputSeparatorKeyCodes", ctx_r13.separatorKeysCodes);
} }
function CreateProfileTemplateComponent_div_24_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r39 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 17);
    i0.ɵɵelementStart(1, "mat-form-field", 22);
    i0.ɵɵelementStart(2, "mat-label");
    i0.ɵɵtext(3, "Label");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "input", 23);
    i0.ɵɵlistener("ngModelChange", function CreateProfileTemplateComponent_div_24_div_10_Template_input_ngModelChange_4_listener($event) { i0.ɵɵrestoreView(_r39); const field_r8 = ctx.$implicit; return field_r8.label = $event; });
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(5, CreateProfileTemplateComponent_div_24_div_10_mat_error_5_Template, 4, 0, "mat-error", 4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "mat-form-field", 22);
    i0.ɵɵelementStart(7, "mat-label");
    i0.ɵɵtext(8, "Type");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "mat-select", 24);
    i0.ɵɵlistener("ngModelChange", function CreateProfileTemplateComponent_div_24_div_10_Template_mat_select_ngModelChange_9_listener($event) { i0.ɵɵrestoreView(_r39); const field_r8 = ctx.$implicit; return field_r8.type = $event; })("ngModelChange", function CreateProfileTemplateComponent_div_24_div_10_Template_mat_select_ngModelChange_9_listener() { i0.ɵɵrestoreView(_r39); const field_r8 = ctx.$implicit; const j_r9 = ctx.index; const i_r5 = i0.ɵɵnextContext().index; const ctx_r41 = i0.ɵɵnextContext(); return ctx_r41.onChangeType(field_r8.type, i_r5, j_r9); });
    i0.ɵɵelementStart(10, "mat-option", 25);
    i0.ɵɵtext(11, "Text");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "mat-option", 26);
    i0.ɵɵtext(13, "Radio");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "mat-option", 27);
    i0.ɵɵtext(15, "Selecteur");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "mat-option", 28);
    i0.ɵɵtext(17, "Checkbox");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(18, CreateProfileTemplateComponent_div_24_div_10_mat_form_field_18_Template, 4, 3, "mat-form-field", 29);
    i0.ɵɵtemplate(19, CreateProfileTemplateComponent_div_24_div_10_div_19_Template, 3, 3, "div", 30);
    i0.ɵɵtemplate(20, CreateProfileTemplateComponent_div_24_div_10_mat_form_field_20_Template, 8, 4, "mat-form-field", 30);
    i0.ɵɵelementStart(21, "button", 31);
    i0.ɵɵlistener("click", function CreateProfileTemplateComponent_div_24_div_10_Template_button_click_21_listener($event) { i0.ɵɵrestoreView(_r39); const i_r5 = i0.ɵɵnextContext().index; const ctx_r43 = i0.ɵɵnextContext(); return ctx_r43.onAddNewField($event, i_r5); });
    i0.ɵɵelementStart(22, "mat-icon");
    i0.ɵɵtext(23, "plus_one");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(24, "button", 32);
    i0.ɵɵlistener("click", function CreateProfileTemplateComponent_div_24_div_10_Template_button_click_24_listener($event) { i0.ɵɵrestoreView(_r39); const j_r9 = ctx.index; const i_r5 = i0.ɵɵnextContext().index; const ctx_r45 = i0.ɵɵnextContext(); return ctx_r45.onRemoveField($event, i_r5, j_r9); });
    i0.ɵɵelementStart(25, "mat-icon");
    i0.ɵɵtext(26, "delete");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(27, "mat-checkbox", 33);
    i0.ɵɵlistener("ngModelChange", function CreateProfileTemplateComponent_div_24_div_10_Template_mat_checkbox_ngModelChange_27_listener($event) { i0.ɵɵrestoreView(_r39); const field_r8 = ctx.$implicit; return field_r8.isMandatory = $event; });
    i0.ɵɵtext(28, "obligatoire");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const field_r8 = ctx.$implicit;
    const category_r4 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngModelOptions", i0.ɵɵpureFunction0(11, _c0))("ngModel", field_r8.label);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", field_r8.label === "");
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngModel", field_r8.type)("ngModelOptions", i0.ɵɵpureFunction0(12, _c0));
    i0.ɵɵadvance(9);
    i0.ɵɵproperty("ngIf", field_r8.type === "text" || field_r8.type === "");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", field_r8.type === "checkbox");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", field_r8.type == "radio" || field_r8.type == "select");
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("disabled", category_r4.forms.length < 2);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngModel", field_r8.isMandatory)("ngModelOptions", i0.ɵɵpureFunction0(13, _c0));
} }
function CreateProfileTemplateComponent_div_24_Template(rf, ctx) { if (rf & 1) {
    const _r50 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 16);
    i0.ɵɵelementStart(1, "div", 17);
    i0.ɵɵelementStart(2, "mat-form-field", 18);
    i0.ɵɵelementStart(3, "mat-label");
    i0.ɵɵtext(4, "Cat\u00E9gorie");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "input", 19);
    i0.ɵɵlistener("ngModelChange", function CreateProfileTemplateComponent_div_24_Template_input_ngModelChange_5_listener($event) { i0.ɵɵrestoreView(_r50); const category_r4 = ctx.$implicit; return category_r4.name = $event; });
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(6, CreateProfileTemplateComponent_div_24_mat_error_6_Template, 4, 0, "mat-error", 4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "div");
    i0.ɵɵelementStart(8, "button", 20);
    i0.ɵɵlistener("click", function CreateProfileTemplateComponent_div_24_Template_button_click_8_listener($event) { i0.ɵɵrestoreView(_r50); const i_r5 = ctx.index; const ctx_r51 = i0.ɵɵnextContext(); return ctx_r51.onRemoveCategory($event, i_r5); });
    i0.ɵɵtext(9, "Supprimer");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(10, CreateProfileTemplateComponent_div_24_div_10_Template, 29, 14, "div", 21);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const category_r4 = ctx.$implicit;
    const i_r5 = ctx.index;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("readonly", ctx_r2.categories.length < 4)("ngModel", category_r4.name)("ngModelOptions", i0.ɵɵpureFunction0(6, _c0));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", category_r4.name == "");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("disabled", i_r5 < 3);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", category_r4.forms);
} }
const _c1 = function () { return ["/profil-list"]; };
export class CreateProfileTemplateComponent {
    constructor(fb, service, route, router) {
        this.fb = fb;
        this.service = service;
        this.route = route;
        this.router = router;
        this.validCategory = false;
        this.separatorKeysCodes = [ENTER, COMMA, SEMICOLON];
        this.currentProfil = {};
        this.tags = [];
        this.id = '';
        this.categories = [
            {
                name: 'Software',
                suffixEndpoint: 'category/software',
                forms: [
                    {
                        label: '',
                        value: null,
                        isMandatory: true,
                        type: 'text',
                    }
                ]
            },
            {
                name: 'Hardware',
                suffixEndpoint: 'category/hardware',
                forms: [
                    {
                        label: '',
                        value: null,
                        isMandatory: true,
                        type: 'text',
                    }
                ]
            },
            {
                name: 'Network',
                suffixEndpoint: 'category/network',
                forms: [
                    {
                        label: '',
                        value: null,
                        isMandatory: true,
                        type: 'text',
                    }
                ]
            }
        ];
    }
    ngOnInit() {
        return __awaiter(this, void 0, void 0, function* () {
            this.form = this.fb.group({
                Name: ['', Validators.required],
                Description: [''],
                Tags: ['', Validators.required],
                Status: [false, Validators.required]
            });
            this.tags = yield this.service.getAllTags();
            this.id = this.route.snapshot.paramMap.get('id');
            if (this.id != '0') {
                this.currentProfil = yield this.service.getProfil(this.id);
                this.form.patchValue(this.currentProfil);
                this.categories = this.currentProfil.categories;
            }
        });
    }
    onAddNewCategory(e) {
        e.preventDefault();
        this.categories.push({
            name: '',
            forms: [
                {
                    label: '',
                    value: null,
                    isMandatory: true,
                    type: 'text',
                }
            ]
        });
    }
    onAddNewField(e, i) {
        e.preventDefault();
        this.categories[i].forms.push({
            label: '',
            value: null,
            isMandatory: true,
            type: 'text',
        });
    }
    onRemoveField(e, categoryIndex, fieldIndex) {
        e.preventDefault();
        this.categories[categoryIndex].forms.splice(fieldIndex, 1);
    }
    onRemoveCategory(e, i) {
        e.preventDefault();
        this.categories.splice(i, 1);
    }
    onChangeCategory() {
        return this.categories.every((cat) => cat.name !== '' && cat.forms.every((field) => field.label !== '' && field.type !== ''));
    }
    onSubmit() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.form.valid && this.onChangeCategory()) {
                console.log(this.form.value);
                console.log(this.categories);
                const result = this.id !== '0' ?
                    yield this.service.updateProfil(Object.assign(Object.assign(Object.assign({}, this.currentProfil), this.form.value), { categories: this.categories })) :
                    yield this.service.createProfil(Object.assign(Object.assign({}, this.form.value), { categories: this.categories }));
                if (result) {
                    this.router.navigate(['/profil-list']);
                }
                else {
                    console.log('errror......');
                }
            }
            else {
                console.log('xxxxxxxxxxxxxxxxx', this.form.value);
            }
        });
    }
    onChangeType(type, indexCategory, indexField) {
        if (type === 'select' || type === 'radio') {
            this.categories[indexCategory].forms[indexField].value = [];
        }
        else if (type === 'text') {
            this.categories[indexCategory].forms[indexField].value = '';
        }
        else {
            this.categories[indexCategory].forms[indexField].value = false;
        }
    }
    onKeyPress(event, indexCategory, indexField) {
        if (event.key === ';') {
            const exist = this.categories[indexCategory].forms[indexField].value.find((opt) => opt.toLocaleLowerCase() ===
                event.target.value.split(';')[0].toLocaleLowerCase());
            if (!exist) {
                this.categories[indexCategory].forms[indexField].value.push(event.target.value.split(';')[0]);
                event.target.value = '';
            }
            else {
                event.target.value = '';
            }
        }
    }
    removeKeyword(keyword, indexCategory, indexField) {
        this.categories[indexCategory].forms[indexField].value = this.categories[indexCategory].forms[indexField].value.filter((option) => option !== keyword);
    }
    addKeywordFromInput(event, indexCategory, indexField) {
        const input = event.input;
        const value = event.value;
        if (value) {
            const exist = this.categories[indexCategory].forms[indexField].value.find((opt) => opt.toLocaleLowerCase() === event.value.toLocaleLowerCase());
            if (!exist) {
                this.categories[indexCategory].forms[indexField].value.push(value.trim());
                input.value = '';
                console.log("WWWWWWWWWWWW", event);
            }
            else {
                input.value = '';
                console.log("AAAAAAAAAAA", event);
            }
        }
    }
}
CreateProfileTemplateComponent.ɵfac = function CreateProfileTemplateComponent_Factory(t) { return new (t || CreateProfileTemplateComponent)(i0.ɵɵdirectiveInject(i1.FormBuilder), i0.ɵɵdirectiveInject(i2.OnboardingService), i0.ɵɵdirectiveInject(i3.ActivatedRoute), i0.ɵɵdirectiveInject(i3.Router)); };
CreateProfileTemplateComponent.ɵcmp = i0.ɵɵdefineComponent({ type: CreateProfileTemplateComponent, selectors: [["onboarding-create-profile-template"]], decls: 32, vars: 6, consts: [[1, "container"], [3, "formGroup", "submit"], ["appearance", "fill", 1, "example-full-width"], ["type", "text", "matInput", "", "formControlName", "Name", "placeholder", "Ex. Manager"], [4, "ngIf"], ["type", "text", "matInput", "", "formControlName", "Description", "placeholder", ""], ["formControlName", "Tags", "required", ""], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "Status"], [1, "category"], ["class", "category-item", 4, "ngFor", "ngForOf"], [1, "action"], ["mat-raised-button", "", "color", "primary", 3, "click"], ["role", "button", "mat-raised-button", "", "color", "basic", 3, "routerLink"], ["mat-raised-button", "", "color", "basic", "type", "submit"], [3, "value"], [1, "category-item"], [1, "field-item"], ["appearance", "fill", 1, "example-full-width", "input-category-name"], ["type", "text", "required", "", "matInput", "", "placeholder", "", 3, "readonly", "ngModel", "ngModelOptions", "ngModelChange"], ["mat-raised-button", "", "color", "warn", 3, "disabled", "click"], ["class", "field-item", 4, "ngFor", "ngForOf"], ["appearance", "fill", 1, "form-field", "field-size"], ["type", "text", "matInput", "", "required", "", "placeholder", "", 3, "ngModelOptions", "ngModel", "ngModelChange"], ["required", "", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["value", "text"], ["value", "radio"], ["value", "select"], ["value", "checkbox"], ["class", "form-field field-size", "appearance", "fill", 4, "ngIf"], ["class", "flex-auto w-30 field-size", 4, "ngIf"], ["mat-mini-fab", "", "color", "success", 3, "click"], ["mat-mini-fab", "", "color", "warn", 1, "delete-field", 3, "disabled", "click"], [1, "form-field", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["type", "text", "matInput", "", "placeholder", "", 3, "ngModelOptions", "ngModel", "ngModelChange"], [1, "flex-auto", "w-30", "field-size"], [3, "ngModel", "ngModelOptions", "ngModelChange"], ["aria-label", "Video keywords; let index=index", "multiple", ""], ["chipList", ""], ["style", "min-height: 25px;", 3, "selected", "value", "removable", "removed", 4, "ngFor", "ngForOf"], ["placeholder", "add...", 3, "matChipInputFor", "matChipInputAddOnBlur", "matChipInputSeparatorKeyCodes", "matChipInputTokenEnd", "keyup"], ["chipsInput", ""], [2, "min-height", "25px", 3, "selected", "value", "removable", "removed"], ["matChipRemove", ""]], template: function CreateProfileTemplateComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "h3");
        i0.ɵɵtext(2, "Cr\u00E9ation de profil");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "form", 1);
        i0.ɵɵlistener("submit", function CreateProfileTemplateComponent_Template_form_submit_3_listener() { return ctx.onSubmit(); });
        i0.ɵɵelementStart(4, "mat-form-field", 2);
        i0.ɵɵelementStart(5, "mat-label");
        i0.ɵɵtext(6, "Nom du profil");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(7, "input", 3);
        i0.ɵɵtemplate(8, CreateProfileTemplateComponent_mat_error_8_Template, 4, 0, "mat-error", 4);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(9, "mat-form-field", 2);
        i0.ɵɵelementStart(10, "mat-label");
        i0.ɵɵtext(11, "D\u00E9scription");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(12, "textarea", 5);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(13, "mat-form-field", 2);
        i0.ɵɵelementStart(14, "mat-label");
        i0.ɵɵtext(15, "Tags");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(16, "mat-select", 6);
        i0.ɵɵtemplate(17, CreateProfileTemplateComponent_mat_option_17_Template, 2, 2, "mat-option", 7);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(18, "mat-checkbox", 8);
        i0.ɵɵtext(19, "Active");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(20, "hr");
        i0.ɵɵelementStart(21, "div", 9);
        i0.ɵɵelementStart(22, "h2");
        i0.ɵɵtext(23, "Liste de cat\u00E9gories");
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(24, CreateProfileTemplateComponent_div_24_Template, 11, 7, "div", 10);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(25, "div", 11);
        i0.ɵɵelementStart(26, "button", 12);
        i0.ɵɵlistener("click", function CreateProfileTemplateComponent_Template_button_click_26_listener($event) { return ctx.onAddNewCategory($event); });
        i0.ɵɵtext(27, "Ajouter une cat\u00E9gorie");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(28, "a", 13);
        i0.ɵɵtext(29, "Liste des profils");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(30, "button", 14);
        i0.ɵɵtext(31, "Valider");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("formGroup", ctx.form);
        i0.ɵɵadvance(5);
        i0.ɵɵproperty("ngIf", ctx.form.get("Name").hasError("required"));
        i0.ɵɵadvance(9);
        i0.ɵɵproperty("ngForOf", ctx.tags);
        i0.ɵɵadvance(7);
        i0.ɵɵproperty("ngForOf", ctx.categories);
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction0(5, _c1));
    } }, directives: [i1.ɵangular_packages_forms_forms_y, i1.NgControlStatusGroup, i1.FormGroupDirective, i4.MatFormField, i4.MatLabel, i5.MatInput, i1.DefaultValueAccessor, i1.NgControlStatus, i1.FormControlName, i6.NgIf, i7.MatSelect, i1.RequiredValidator, i6.NgForOf, i8.MatCheckbox, i9.MatButton, i9.MatAnchor, i3.RouterLinkWithHref, i4.MatError, i10.MatOption, i1.NgModel, i11.MatIcon, i12.MatChipList, i12.MatChipInput, i12.MatChip, i12.MatChipRemove], styles: [".container[_ngcontent-%COMP%]{max-width:98%;margin:50px auto auto;padding-bottom:50px}.container[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:space-between}.input-category-name[_ngcontent-%COMP%]{font-size:15px;font-weight:500}.example-full-width[_ngcontent-%COMP%]{width:100%}.field-item[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center}.field-action[_ngcontent-%COMP%]{width:10%}.field-size[_ngcontent-%COMP%]{width:90%;margin:auto 2% auto auto}hr[_ngcontent-%COMP%]{margin:50px 0}  .mat-form-field-appearance-fill .mat-form-field-flex{background-color:#fff}.category-aciton[_ngcontent-%COMP%]{display:flex;width:100%}.delete-field[_ngcontent-%COMP%]{margin:auto 2%}.radio-group[_ngcontent-%COMP%]   .mat-radio-button[_ngcontent-%COMP%]{margin-right:10px}.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary[_ngcontent-%COMP%]{background-color:#3f51b5;color:#fff;min-height:20px;font-size:10px}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CreateProfileTemplateComponent, [{
        type: Component,
        args: [{
                selector: 'onboarding-create-profile-template',
                templateUrl: './create-profile-template.component.html',
                styleUrls: ['./create-profile-template.component.scss']
            }]
    }], function () { return [{ type: i1.FormBuilder }, { type: i2.OnboardingService }, { type: i3.ActivatedRoute }, { type: i3.Router }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLXByb2ZpbGUtdGVtcGxhdGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vb25ib2FyZGluZy8iLCJzb3VyY2VzIjpbImxpYi9jcmVhdGUtcHJvZmlsZS10ZW1wbGF0ZS9jcmVhdGUtcHJvZmlsZS10ZW1wbGF0ZS5jb21wb25lbnQudHMiLCJsaWIvY3JlYXRlLXByb2ZpbGUtdGVtcGxhdGUvY3JlYXRlLXByb2ZpbGUtdGVtcGxhdGUuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDbEQsT0FBTyxFQUEwQixVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNwRSxPQUFPLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0lDUzFELGlDQUNFO0lBQUEsNEJBQVc7SUFBQSw4QkFBUTtJQUFBLHNCQUFNO0lBQUEsaUJBQVM7SUFDcEMsaUJBQVk7OztJQWNWLHNDQUFtRDtJQUFBLFlBQU87SUFBQSxpQkFBYTs7O0lBQWxDLDhCQUFhO0lBQUMsZUFBTztJQUFQLDRCQUFPOzs7SUFxQnRELGlDQUNFO0lBQUEsb0NBQWM7SUFBQSw4QkFBUTtJQUFBLHNCQUFNO0lBQUEsaUJBQVM7SUFDdkMsaUJBQVk7OztJQWlCWixpQ0FDRTtJQUFBLDJCQUFVO0lBQUEsOEJBQVE7SUFBQSxzQkFBTTtJQUFBLGlCQUFTO0lBQ25DLGlCQUFZOzs7OztJQVlkLDBDQUNFO0lBQUEsaUNBQVc7SUFBQSxzQkFBTTtJQUFBLGlCQUFZO0lBQzdCLGlDQU9GO0lBSEksa1FBQXlCO0lBSjNCLGlCQU9GO0lBQUEsaUJBQWlCOzs7SUFKYixlQUFxQztJQUFyQywyREFBcUMsMkJBQUE7Ozs7SUFhekMsK0JBQ0U7SUFBQSx3Q0FBK0U7SUFBakUsOFBBQXlCO0lBQXdDLHNCQUFNO0lBQUEsaUJBQWU7SUFDdEcs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cUJBQUk7UUFBQSxpQkFBWTtRQUMzQixzQ0FDRTtRQUFBLCtGQUFtRDtRQUNyRCxpQkFBYTtRQUNmLGlCQUFpQjtRQUNqQix3Q0FBdUM7UUFBQSx1QkFBTTtRQUFBLGlCQUFlO1FBRTVELHNCQUNBO1FBQUEsK0JBQ0U7UUFBQSwyQkFBSTtRQUFBLHlDQUFtQjtRQUFBLGlCQUFLO1FBQzVCLG1GQUNFO1FBNkZKLGlCQUFNO1FBQ04sZ0NBQ0U7UUFBQSxtQ0FBNkU7UUFBbkMsa0hBQVMsNEJBQXdCLElBQUM7UUFBQywyQ0FBcUI7UUFBQSxpQkFBUztRQUMzRyw4QkFBa0Y7UUFBQSxrQ0FBaUI7UUFBQSxpQkFBSTtRQUN2RyxtQ0FBc0Q7UUFBQSx3QkFBTztRQUFBLGlCQUFTO1FBQ3hFLGlCQUFNO1FBQ1IsaUJBQU87UUFDVCxpQkFBTTs7UUF0SUUsZUFBa0I7UUFBbEIsb0NBQWtCO1FBU1QsZUFBNkM7UUFBN0MsZ0VBQTZDO1FBZ0IxQyxlQUF3QjtRQUF4QixrQ0FBd0I7UUFRWCxlQUFpRDtRQUFqRCx3Q0FBaUQ7UUFpR3pFLGVBQStCO1FBQS9CLHVEQUErQjs7a0REeEgzQiw4QkFBOEI7Y0FMMUMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxvQ0FBb0M7Z0JBQzlDLFdBQVcsRUFBRSwwQ0FBMEM7Z0JBQ3ZELFNBQVMsRUFBRSxDQUFDLDBDQUEwQyxDQUFDO2FBQ3hEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1CdWlsZGVyLCBGb3JtR3JvdXAsIFZhbGlkYXRvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBFTlRFUiwgQ09NTUEsIFNFTUlDT0xPTiB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9rZXljb2Rlcyc7XG5pbXBvcnQgeyBNYXRDaGlwSW5wdXRFdmVudCB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NoaXBzJztcbmltcG9ydCB7IE9uYm9hcmRpbmdTZXJ2aWNlIH0gZnJvbSAnLi4vb25ib2FyZGluZy5zZXJ2aWNlJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdvbmJvYXJkaW5nLWNyZWF0ZS1wcm9maWxlLXRlbXBsYXRlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NyZWF0ZS1wcm9maWxlLXRlbXBsYXRlLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vY3JlYXRlLXByb2ZpbGUtdGVtcGxhdGUuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBDcmVhdGVQcm9maWxlVGVtcGxhdGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBmb3JtOiBGb3JtR3JvdXBcbiAgdmFsaWRDYXRlZ29yeSA9IGZhbHNlXG4gIHNlcGFyYXRvcktleXNDb2RlcyA9IFtFTlRFUiwgQ09NTUEsIFNFTUlDT0xPTl07XG4gIGN1cnJlbnRQcm9maWw6IGFueSA9IHt9XG4gIHRhZ3MgPSBbXVxuICBpZDogc3RyaW5nID0gJyc7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZmI6IEZvcm1CdWlsZGVyLCBwcml2YXRlIHNlcnZpY2U6IE9uYm9hcmRpbmdTZXJ2aWNlLCBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikgeyB9XG4gIGNhdGVnb3JpZXM6IGFueSA9IFtcbiAgICB7XG4gICAgICBuYW1lOiAnU29mdHdhcmUnLFxuICAgICAgc3VmZml4RW5kcG9pbnQ6ICdjYXRlZ29yeS9zb2Z0d2FyZScsXG4gICAgICBmb3JtczogW1xuICAgICAgICB7XG4gICAgICAgICAgbGFiZWw6ICcnLFxuICAgICAgICAgIHZhbHVlOiBudWxsLFxuICAgICAgICAgIGlzTWFuZGF0b3J5OiB0cnVlLFxuICAgICAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ0hhcmR3YXJlJyxcbiAgICAgIHN1ZmZpeEVuZHBvaW50OiAnY2F0ZWdvcnkvaGFyZHdhcmUnLFxuICAgICAgZm9ybXM6IFtcbiAgICAgICAge1xuICAgICAgICAgIGxhYmVsOiAnJyxcbiAgICAgICAgICB2YWx1ZTogbnVsbCxcbiAgICAgICAgICBpc01hbmRhdG9yeTogdHJ1ZSxcbiAgICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdOZXR3b3JrJyxcbiAgICAgIHN1ZmZpeEVuZHBvaW50OiAnY2F0ZWdvcnkvbmV0d29yaycsXG4gICAgICBmb3JtczogW1xuICAgICAgICB7XG4gICAgICAgICAgbGFiZWw6ICcnLFxuICAgICAgICAgIHZhbHVlOiBudWxsLFxuICAgICAgICAgIGlzTWFuZGF0b3J5OiB0cnVlLFxuICAgICAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH1cbiAgXVxuICBhc3luYyBuZ09uSW5pdCgpIHtcblxuICAgIHRoaXMuZm9ybSA9IHRoaXMuZmIuZ3JvdXAoe1xuICAgICAgTmFtZTogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICAgIERlc2NyaXB0aW9uOiBbJyddLFxuICAgICAgVGFnczogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICAgIFN0YXR1czogW2ZhbHNlLCBWYWxpZGF0b3JzLnJlcXVpcmVkXVxuICAgIH0pXG4gICAgdGhpcy50YWdzID0gYXdhaXQgdGhpcy5zZXJ2aWNlLmdldEFsbFRhZ3MoKTtcbiAgICB0aGlzLmlkID0gdGhpcy5yb3V0ZS5zbmFwc2hvdC5wYXJhbU1hcC5nZXQoJ2lkJyk7XG4gICAgaWYgKHRoaXMuaWQgIT0gJzAnKSB7XG4gICAgICB0aGlzLmN1cnJlbnRQcm9maWwgPSBhd2FpdCB0aGlzLnNlcnZpY2UuZ2V0UHJvZmlsKHRoaXMuaWQpO1xuICAgICAgdGhpcy5mb3JtLnBhdGNoVmFsdWUodGhpcy5jdXJyZW50UHJvZmlsKTtcbiAgICAgIHRoaXMuY2F0ZWdvcmllcyA9IHRoaXMuY3VycmVudFByb2ZpbC5jYXRlZ29yaWVzO1xuICAgIH1cblxuICB9XG5cbiAgb25BZGROZXdDYXRlZ29yeShlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgdGhpcy5jYXRlZ29yaWVzLnB1c2goe1xuICAgICAgbmFtZTogJycsXG4gICAgICBmb3JtczogW1xuICAgICAgICB7XG4gICAgICAgICAgbGFiZWw6ICcnLFxuICAgICAgICAgIHZhbHVlOiBudWxsLFxuICAgICAgICAgIGlzTWFuZGF0b3J5OiB0cnVlLFxuICAgICAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0pXG4gIH1cblxuICBvbkFkZE5ld0ZpZWxkKGUsIGkpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICB0aGlzLmNhdGVnb3JpZXNbaV0uZm9ybXMucHVzaChcbiAgICAgIHtcbiAgICAgICAgbGFiZWw6ICcnLFxuICAgICAgICB2YWx1ZTogbnVsbCxcbiAgICAgICAgaXNNYW5kYXRvcnk6IHRydWUsXG4gICAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgIH1cbiAgICApXG4gIH1cblxuXG4gIG9uUmVtb3ZlRmllbGQoZSwgY2F0ZWdvcnlJbmRleCwgZmllbGRJbmRleCkge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIHRoaXMuY2F0ZWdvcmllc1tjYXRlZ29yeUluZGV4XS5mb3Jtcy5zcGxpY2UoZmllbGRJbmRleCwgMSlcbiAgfVxuXG4gIG9uUmVtb3ZlQ2F0ZWdvcnkoZSwgaSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIHRoaXMuY2F0ZWdvcmllcy5zcGxpY2UoaSwgMSlcbiAgfVxuXG4gIG9uQ2hhbmdlQ2F0ZWdvcnkoKSB7XG4gICAgcmV0dXJuIHRoaXMuY2F0ZWdvcmllcy5ldmVyeSgoY2F0KSA9PiBjYXQubmFtZSAhPT0gJycgJiYgY2F0LmZvcm1zLmV2ZXJ5KChmaWVsZCkgPT4gZmllbGQubGFiZWwgIT09ICcnICYmIGZpZWxkLnR5cGUgIT09ICcnKVxuICAgICk7XG4gIH1cblxuICBhc3luYyBvblN1Ym1pdCgpIHtcbiAgICBpZiAodGhpcy5mb3JtLnZhbGlkICYmIHRoaXMub25DaGFuZ2VDYXRlZ29yeSgpKSB7XG4gICAgICBjb25zb2xlLmxvZyh0aGlzLmZvcm0udmFsdWUpO1xuICAgICAgY29uc29sZS5sb2codGhpcy5jYXRlZ29yaWVzKTtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuaWQgIT09ICcwJyA/XG4gICAgICAgIGF3YWl0IHRoaXMuc2VydmljZS51cGRhdGVQcm9maWwoeyAuLi50aGlzLmN1cnJlbnRQcm9maWwsIC4uLiB0aGlzLmZvcm0udmFsdWUsIGNhdGVnb3JpZXM6IHRoaXMuY2F0ZWdvcmllcyB9KSA6XG4gICAgICAgIGF3YWl0IHRoaXMuc2VydmljZS5jcmVhdGVQcm9maWwoeyAuLi4gdGhpcy5mb3JtLnZhbHVlLCBjYXRlZ29yaWVzOiB0aGlzLmNhdGVnb3JpZXMgfSk7XG4gICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL3Byb2ZpbC1saXN0J10pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmxvZygnZXJycm9yLi4uLi4uJyk7XG5cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5sb2coJ3h4eHh4eHh4eHh4eHh4eHh4JywgdGhpcy5mb3JtLnZhbHVlKTtcblxuICAgIH1cbiAgfVxuXG5cbiAgb25DaGFuZ2VUeXBlKHR5cGU6IHN0cmluZywgaW5kZXhDYXRlZ29yeTogbnVtYmVyLCBpbmRleEZpZWxkKSB7XG4gICAgaWYgKHR5cGUgPT09ICdzZWxlY3QnIHx8IHR5cGUgPT09ICdyYWRpbycpIHtcbiAgICAgIHRoaXMuY2F0ZWdvcmllc1tpbmRleENhdGVnb3J5XS5mb3Jtc1tpbmRleEZpZWxkXS52YWx1ZSA9IFtdO1xuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ3RleHQnKSB7XG4gICAgICB0aGlzLmNhdGVnb3JpZXNbaW5kZXhDYXRlZ29yeV0uZm9ybXNbaW5kZXhGaWVsZF0udmFsdWUgPSAnJztcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jYXRlZ29yaWVzW2luZGV4Q2F0ZWdvcnldLmZvcm1zW2luZGV4RmllbGRdLnZhbHVlID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgb25LZXlQcmVzcyhldmVudDogYW55LCBpbmRleENhdGVnb3J5LCBpbmRleEZpZWxkKSB7XG4gICAgaWYgKGV2ZW50LmtleSA9PT0gJzsnKSB7XG4gICAgICBjb25zdCBleGlzdCA9IHRoaXMuY2F0ZWdvcmllc1tpbmRleENhdGVnb3J5XS5mb3Jtc1tpbmRleEZpZWxkXS52YWx1ZS5maW5kKFxuICAgICAgICAob3B0KSA9PlxuICAgICAgICAgIG9wdC50b0xvY2FsZUxvd2VyQ2FzZSgpID09PVxuICAgICAgICAgIGV2ZW50LnRhcmdldC52YWx1ZS5zcGxpdCgnOycpWzBdLnRvTG9jYWxlTG93ZXJDYXNlKClcbiAgICAgICk7XG4gICAgICBpZiAoIWV4aXN0KSB7XG4gICAgICAgIHRoaXMuY2F0ZWdvcmllc1tpbmRleENhdGVnb3J5XS5mb3Jtc1tpbmRleEZpZWxkXS52YWx1ZS5wdXNoKFxuICAgICAgICAgIGV2ZW50LnRhcmdldC52YWx1ZS5zcGxpdCgnOycpWzBdXG4gICAgICAgICk7XG4gICAgICAgIGV2ZW50LnRhcmdldC52YWx1ZSA9ICcnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZXZlbnQudGFyZ2V0LnZhbHVlID0gJyc7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmVtb3ZlS2V5d29yZChrZXl3b3JkOiBzdHJpbmcsIGluZGV4Q2F0ZWdvcnk6IG51bWJlciwgaW5kZXhGaWVsZCkge1xuICAgIHRoaXMuY2F0ZWdvcmllc1tpbmRleENhdGVnb3J5XS5mb3Jtc1tpbmRleEZpZWxkXS52YWx1ZSA9IHRoaXMuY2F0ZWdvcmllc1tcbiAgICAgIGluZGV4Q2F0ZWdvcnlcbiAgICBdLmZvcm1zW2luZGV4RmllbGRdLnZhbHVlLmZpbHRlcigob3B0aW9uKSA9PiBvcHRpb24gIT09IGtleXdvcmQpO1xuICB9XG5cbiAgYWRkS2V5d29yZEZyb21JbnB1dChldmVudDogTWF0Q2hpcElucHV0RXZlbnQsIGluZGV4Q2F0ZWdvcnk6IG51bWJlciwgaW5kZXhGaWVsZCkge1xuICAgIGNvbnN0IGlucHV0ID0gZXZlbnQuaW5wdXQ7XG4gICAgY29uc3QgdmFsdWUgPSBldmVudC52YWx1ZTtcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIGNvbnN0IGV4aXN0ID0gdGhpcy5jYXRlZ29yaWVzW2luZGV4Q2F0ZWdvcnldLmZvcm1zW2luZGV4RmllbGRdLnZhbHVlLmZpbmQoXG4gICAgICAgIChvcHQpID0+XG4gICAgICAgICAgb3B0LnRvTG9jYWxlTG93ZXJDYXNlKCkgPT09IGV2ZW50LnZhbHVlLnRvTG9jYWxlTG93ZXJDYXNlKClcbiAgICAgICk7XG4gICAgICBpZiAoIWV4aXN0KSB7XG4gICAgICAgIHRoaXMuY2F0ZWdvcmllc1tpbmRleENhdGVnb3J5XS5mb3Jtc1tpbmRleEZpZWxkXS52YWx1ZS5wdXNoKHZhbHVlLnRyaW0oKSk7XG4gICAgICAgIGlucHV0LnZhbHVlID0gJyc7IGNvbnNvbGUubG9nKFwiV1dXV1dXV1dXV1dXXCIsIGV2ZW50KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlucHV0LnZhbHVlID0gJyc7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiQUFBQUFBQUFBQUFcIiwgZXZlbnQpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxuICA8aDM+Q3LDqWF0aW9uIGRlIHByb2ZpbDwvaDM+XG4gIDxmb3JtIFtmb3JtR3JvdXBdPVwiZm9ybVwiIChzdWJtaXQpPVwib25TdWJtaXQoKVwiPlxuICAgIDxtYXQtZm9ybS1maWVsZCBjbGFzcz1cImV4YW1wbGUtZnVsbC13aWR0aFwiIGFwcGVhcmFuY2U9XCJmaWxsXCI+XG4gICAgICA8bWF0LWxhYmVsPk5vbSBkdSBwcm9maWw8L21hdC1sYWJlbD5cbiAgICAgIDxpbnB1dFxuICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgIG1hdElucHV0XG4gICAgICAgIGZvcm1Db250cm9sTmFtZT1cIk5hbWVcIlxuICAgICAgICBwbGFjZWhvbGRlcj1cIkV4LiBNYW5hZ2VyXCJcbiAgICAgIC8+XG4gICAgICA8bWF0LWVycm9yICpuZ0lmPVwiZm9ybS5nZXQoJ05hbWUnKS5oYXNFcnJvcigncmVxdWlyZWQnKVwiPlxuICAgICAgICBQcm9maWwgZXN0IDxzdHJvbmc+cmVxdWlzPC9zdHJvbmc+XG4gICAgICA8L21hdC1lcnJvcj5cbiAgICA8L21hdC1mb3JtLWZpZWxkPlxuICAgIDxtYXQtZm9ybS1maWVsZCBjbGFzcz1cImV4YW1wbGUtZnVsbC13aWR0aFwiIGFwcGVhcmFuY2U9XCJmaWxsXCI+XG4gICAgICA8bWF0LWxhYmVsPkTDqXNjcmlwdGlvbjwvbWF0LWxhYmVsPlxuICAgICAgPHRleHRhcmVhXG4gICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgbWF0SW5wdXRcbiAgICAgICAgZm9ybUNvbnRyb2xOYW1lPVwiRGVzY3JpcHRpb25cIlxuICAgICAgICBwbGFjZWhvbGRlcj1cIlwiXG4gICAgICA+PC90ZXh0YXJlYT5cbiAgICA8L21hdC1mb3JtLWZpZWxkPiAgXG4gICAgPG1hdC1mb3JtLWZpZWxkIGNsYXNzPVwiZXhhbXBsZS1mdWxsLXdpZHRoXCIgYXBwZWFyYW5jZT1cImZpbGxcIj5cbiAgICAgIDxtYXQtbGFiZWw+VGFnczwvbWF0LWxhYmVsPlxuICAgICAgPG1hdC1zZWxlY3QgZm9ybUNvbnRyb2xOYW1lPVwiVGFnc1wiIHJlcXVpcmVkPlxuICAgICAgICA8bWF0LW9wdGlvbiAqbmdGb3I9XCJsZXQgdGFnIG9mIHRhZ3NcIiBbdmFsdWVdPVwidGFnXCI+e3t0YWd9fTwvbWF0LW9wdGlvbj5cbiAgICAgIDwvbWF0LXNlbGVjdD5cbiAgICA8L21hdC1mb3JtLWZpZWxkPlxuICAgIDxtYXQtY2hlY2tib3ggZm9ybUNvbnRyb2xOYW1lPVwiU3RhdHVzXCI+QWN0aXZlPC9tYXQtY2hlY2tib3g+XG5cbiAgICA8aHIgLz5cbiAgICA8ZGl2IGNsYXNzPVwiY2F0ZWdvcnlcIj5cbiAgICAgIDxoMj5MaXN0ZSBkZSBjYXTDqWdvcmllczwvaDI+XG4gICAgICA8ZGl2IGNsYXNzPVwiY2F0ZWdvcnktaXRlbVwiICpuZ0Zvcj1cImxldCBjYXRlZ29yeSBvZiBjYXRlZ29yaWVzOyAgbGV0IGk9aW5kZXhcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImZpZWxkLWl0ZW1cIj5cbiAgICAgICAgICA8bWF0LWZvcm0tZmllbGQgY2xhc3M9XCJleGFtcGxlLWZ1bGwtd2lkdGggaW5wdXQtY2F0ZWdvcnktbmFtZVwiICBhcHBlYXJhbmNlPVwiZmlsbFwiPlxuICAgICAgICAgICAgPG1hdC1sYWJlbD5DYXTDqWdvcmllPC9tYXQtbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICBbcmVhZG9ubHldPVwiY2F0ZWdvcmllcy5sZW5ndGg8NFwiXG4gICAgICAgICAgICAgIG1hdElucHV0XG4gICAgICAgICAgICAgIFsobmdNb2RlbCldPVwiY2F0ZWdvcnkubmFtZVwiXG4gICAgICAgICAgICAgIFtuZ01vZGVsT3B0aW9uc109XCJ7c3RhbmRhbG9uZTogdHJ1ZX1cIlxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPG1hdC1lcnJvciAqbmdJZj1cImNhdGVnb3J5Lm5hbWUgPT0gJydcIj5cbiAgICAgICAgICAgICAgQ2F0w6lnb3JpZSBlc3QgPHN0cm9uZz5yZXF1aXM8L3N0cm9uZz5cbiAgICAgICAgICAgIDwvbWF0LWVycm9yPlxuICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxidXR0b24gW2Rpc2FibGVkXT1cImk8M1wiIChjbGljayk9XCJvblJlbW92ZUNhdGVnb3J5KCRldmVudCxpKVwiIG1hdC1yYWlzZWQtYnV0dG9uIGNvbG9yPVwid2FyblwiPlN1cHByaW1lcjwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImZpZWxkLWl0ZW1cIiAqbmdGb3I9XCJsZXQgZmllbGQgb2YgY2F0ZWdvcnkuZm9ybXM7bGV0IGo9aW5kZXhcIj5cbiAgICAgICAgICA8bWF0LWZvcm0tZmllbGQgY2xhc3M9XCJmb3JtLWZpZWxkIGZpZWxkLXNpemVcIiBhcHBlYXJhbmNlPVwiZmlsbFwiPlxuICAgICAgICAgICAgPG1hdC1sYWJlbD5MYWJlbDwvbWF0LWxhYmVsPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgbWF0SW5wdXRcbiAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgW25nTW9kZWxPcHRpb25zXT1cIntzdGFuZGFsb25lOiB0cnVlfVwiXG4gICAgICAgICAgICAgIFsobmdNb2RlbCldPVwiZmllbGQubGFiZWxcIlxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPG1hdC1lcnJvciAqbmdJZj1cImZpZWxkLmxhYmVsID09PSAnJ1wiPlxuICAgICAgICAgICAgICBMYWJlbCBlc3QgPHN0cm9uZz5yZXF1aXM8L3N0cm9uZz5cbiAgICAgICAgICAgIDwvbWF0LWVycm9yPlxuICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XG5cbiAgICAgICAgICA8bWF0LWZvcm0tZmllbGQgY2xhc3M9XCJmb3JtLWZpZWxkIGZpZWxkLXNpemVcIiBhcHBlYXJhbmNlPVwiZmlsbFwiPlxuICAgICAgICAgICAgPG1hdC1sYWJlbD5UeXBlPC9tYXQtbGFiZWw+XG4gICAgICAgICAgICA8bWF0LXNlbGVjdCBbKG5nTW9kZWwpXT1cImZpZWxkLnR5cGVcIiByZXF1aXJlZCBbbmdNb2RlbE9wdGlvbnNdPVwie3N0YW5kYWxvbmU6IHRydWV9XCIgKG5nTW9kZWxDaGFuZ2UpPVwib25DaGFuZ2VUeXBlKGZpZWxkLnR5cGUsaSxqKVwiPlxuICAgICAgICAgICAgICA8bWF0LW9wdGlvbiB2YWx1ZT1cInRleHRcIj5UZXh0PC9tYXQtb3B0aW9uPlxuICAgICAgICAgICAgICA8bWF0LW9wdGlvbiB2YWx1ZT1cInJhZGlvXCI+UmFkaW88L21hdC1vcHRpb24+XG4gICAgICAgICAgICAgIDxtYXQtb3B0aW9uIHZhbHVlPVwic2VsZWN0XCI+U2VsZWN0ZXVyPC9tYXQtb3B0aW9uPlxuICAgICAgICAgICAgICA8bWF0LW9wdGlvbiB2YWx1ZT1cImNoZWNrYm94XCI+Q2hlY2tib3g8L21hdC1vcHRpb24+XG4gICAgICAgICAgICA8L21hdC1zZWxlY3Q+XG4gICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cbiAgICAgICAgICA8bWF0LWZvcm0tZmllbGQgY2xhc3M9XCJmb3JtLWZpZWxkIGZpZWxkLXNpemVcIiBhcHBlYXJhbmNlPVwiZmlsbFwiICpuZ0lmPVwiZmllbGQudHlwZT09PSd0ZXh0JyB8fCBmaWVsZC50eXBlPT09JydcIj5cbiAgICAgICAgICAgIDxtYXQtbGFiZWw+VmFsZXVyPC9tYXQtbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICBtYXRJbnB1dFxuICAgICAgICAgICAgICBbbmdNb2RlbE9wdGlvbnNdPVwie3N0YW5kYWxvbmU6IHRydWV9XCJcbiAgICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJmaWVsZC52YWx1ZVwiXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxuPCEtLSBcbiAgICAgICAgICA8bWF0LWZvcm0tZmllbGQgY2xhc3M9XCJmb3JtLWZpZWxkIGZpZWxkLXNpemVcIiBhcHBlYXJhbmNlPVwiZmlsbFwiICpuZ0lmPVwiZmllbGQudHlwZT09PSdzZWxlY3QnXCI+XG4gICAgICAgICAgICA8bWF0LWxhYmVsPlZhbGV1cjwvbWF0LWxhYmVsPlxuICAgICAgICAgICAgPG1hdC1zZWxlY3QgWyhuZ01vZGVsKV09XCJmaWVsZC52YWx1ZVwiIFtuZ01vZGVsT3B0aW9uc109XCJ7c3RhbmRhbG9uZTogdHJ1ZX1cIj5cbiAgICAgICAgICAgICAgPG1hdC1vcHRpb24gKm5nRm9yPVwibGV0IG9wdCBvZiBmaWVsZC52YWx1ZVwiIFt2YWx1ZV09XCJvcHRcIj57e29wdH19PC9tYXQtb3B0aW9uPlxuICAgICAgICAgICAgPC9tYXQtc2VsZWN0PlxuICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+IC0tPlxuICAgICAgICAgIFxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4LWF1dG8gdy0zMCBmaWVsZC1zaXplXCIgKm5nSWY9XCJmaWVsZC50eXBlPT09J2NoZWNrYm94J1wiPlxuICAgICAgICAgICAgPG1hdC1jaGVja2JveCBbKG5nTW9kZWwpXT1cImZpZWxkLnZhbHVlXCIgW25nTW9kZWxPcHRpb25zXT1cIntzdGFuZGFsb25lOiB0cnVlfVwiID5WYWxldXI8L21hdC1jaGVja2JveD5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDwhLS0gPG1hdC1yYWRpby1ncm91cCBjbGFzcz1cImZvcm0tZmllbGQgcmFkaW8tZ3JvdXAgZmllbGQtc2l6ZVwiIGFyaWEtbGFiZWw9XCJTZWxlY3QgYW4gb3B0aW9uXCIgKm5nSWY9XCJmaWVsZC50eXBlPT09J3JhZGlvJ1wiPlxuICAgICAgICAgICAgPG1hdC1yYWRpby1idXR0b24gKm5nRm9yPVwibGV0IG9wdCBvZiBmaWVsZC52YWx1ZVwiIFt2YWx1ZV09XCJvcHRcIj57e29wdH19PC9tYXQtcmFkaW8tYnV0dG9uPlxuICAgICAgICAgIDwvbWF0LXJhZGlvLWdyb3VwPiAtLT5cbiAgICAgICAgICBcbiAgICAgICAgICA8bWF0LWZvcm0tZmllbGQgKm5nSWY9XCJmaWVsZC50eXBlPT0ncmFkaW8nIHx8IGZpZWxkLnR5cGU9PSdzZWxlY3QnXCIgY2xhc3M9XCJmbGV4LWF1dG8gdy0zMCBmaWVsZC1zaXplXCI+XG4gICAgICAgICAgICA8bWF0LWxhYmVsPiBWYWxldXIgPC9tYXQtbGFiZWw+XG4gICAgICAgICAgICA8bWF0LWNoaXAtbGlzdCAjY2hpcExpc3QgYXJpYS1sYWJlbD1cIlZpZGVvIGtleXdvcmRzOyBsZXQgaW5kZXg9aW5kZXhcIiBtdWx0aXBsZT5cbiAgICAgICAgICAgICAgPG1hdC1jaGlwIHN0eWxlPVwibWluLWhlaWdodDogMjVweDtcIiAqbmdGb3I9XCJsZXQgb3B0aW9uIG9mIGZpZWxkLnZhbHVlXCIgW3NlbGVjdGVkXT1cIm9wdGlvblwiXG4gICAgICAgICAgICAgICAgW3ZhbHVlXT1cIm9wdGlvblwiIFtyZW1vdmFibGVdPVwidHJ1ZVwiIChyZW1vdmVkKT1cInJlbW92ZUtleXdvcmQob3B0aW9uLCBpLGopXCI+XG4gICAgICAgICAgICAgICAge3tvcHRpb259fVxuICAgICAgICAgICAgICAgIDxtYXQtaWNvbiBtYXRDaGlwUmVtb3ZlPmNhbmNlbDwvbWF0LWljb24+XG4gICAgICAgICAgICAgIDwvbWF0LWNoaXA+XG4gICAgICAgICAgICAgIDxpbnB1dCAjY2hpcHNJbnB1dCBwbGFjZWhvbGRlcj1cImFkZC4uLlwiIFttYXRDaGlwSW5wdXRGb3JdPVwiY2hpcExpc3RcIiBbbWF0Q2hpcElucHV0QWRkT25CbHVyXT1cInRydWVcIlxuICAgICAgICAgICAgICAgIChtYXRDaGlwSW5wdXRUb2tlbkVuZCk9XCJhZGRLZXl3b3JkRnJvbUlucHV0KCRldmVudCwgaSxqKVwiXG4gICAgICAgICAgICAgICAgW21hdENoaXBJbnB1dFNlcGFyYXRvcktleUNvZGVzXT1cInNlcGFyYXRvcktleXNDb2Rlc1wiIChrZXl1cCk9XCJvbktleVByZXNzKCRldmVudCxpLGopXCI+XG4gICAgICAgICAgICA8L21hdC1jaGlwLWxpc3Q+XG4gICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBtYXQtbWluaS1mYWIgY29sb3I9XCJzdWNjZXNzXCIgIChjbGljayk9J29uQWRkTmV3RmllbGQoJGV2ZW50LGkpJz5cbiAgICAgICAgICAgIDxtYXQtaWNvbj5wbHVzX29uZTwvbWF0LWljb24+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvbiBtYXQtbWluaS1mYWIgY29sb3I9XCJ3YXJuXCIgY2xhc3M9XCJkZWxldGUtZmllbGRcIiAoY2xpY2spPVwib25SZW1vdmVGaWVsZCgkZXZlbnQsaSxqKVwiIFtkaXNhYmxlZF09XCJjYXRlZ29yeS5mb3Jtcy5sZW5ndGg8MlwiPlxuICAgICAgICAgICAgPG1hdC1pY29uPmRlbGV0ZTwvbWF0LWljb24+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPG1hdC1jaGVja2JveCBjbGFzcz1cImZvcm0tZmllbGRcIiBbKG5nTW9kZWwpXT1cImZpZWxkLmlzTWFuZGF0b3J5XCIgW25nTW9kZWxPcHRpb25zXT1cIntzdGFuZGFsb25lOiB0cnVlfVwiPm9ibGlnYXRvaXJlPC9tYXQtY2hlY2tib3g+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiYWN0aW9uXCI+XG4gICAgICA8YnV0dG9uIG1hdC1yYWlzZWQtYnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiIChjbGljayk9J29uQWRkTmV3Q2F0ZWdvcnkoJGV2ZW50KSc+QWpvdXRlciB1bmUgY2F0w6lnb3JpZTwvYnV0dG9uPlxuICAgICAgPGEgW3JvdXRlckxpbmtdPVwiWycvcHJvZmlsLWxpc3QnXVwiICByb2xlPVwiYnV0dG9uXCIgbWF0LXJhaXNlZC1idXR0b24gY29sb3I9XCJiYXNpY1wiPkxpc3RlIGRlcyBwcm9maWxzPC9hPlxuICAgICAgPGJ1dHRvbiBtYXQtcmFpc2VkLWJ1dHRvbiBjb2xvcj1cImJhc2ljXCIgdHlwZT1cInN1Ym1pdFwiPlZhbGlkZXI8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgPC9mb3JtPlxuPC9kaXY+XG4iXX0=