import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ENTER, COMMA, SEMICOLON } from '@angular/cdk/keycodes';
import { FormControl } from '@angular/forms';
import { CountryISO, PhoneNumberFormat } from 'ngx-intl-tel-input';
import { isValidPhoneNumber, parsePhoneNumber } from 'libphonenumber-js';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/material/checkbox";
import * as i3 from "@angular/forms";
import * as i4 from "ngx-intl-tel-input";
import * as i5 from "@angular/material/select";
import * as i6 from "@angular/material/core";
import * as i7 from "@angular/material/radio";
import * as i8 from "@angular/material/form-field";
import * as i9 from "@angular/material/input";
function SubOnboardingCreateComponent_div_2_div_1_mat_select_3_mat_option_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 11);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const select_r381 = ctx.$implicit;
    i0.ɵɵproperty("value", select_r381.value);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", select_r381.value, "");
} }
const _c0 = function () { return { standalone: true }; };
function SubOnboardingCreateComponent_div_2_div_1_mat_select_3_Template(rf, ctx) { if (rf & 1) {
    const _r383 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-select", 9);
    i0.ɵɵlistener("ngModelChange", function SubOnboardingCreateComponent_div_2_div_1_mat_select_3_Template_mat_select_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r383); const ctx_r382 = i0.ɵɵnextContext(3); return ctx_r382.field.selector.value = $event; });
    i0.ɵɵtemplate(1, SubOnboardingCreateComponent_div_2_div_1_mat_select_3_mat_option_1_Template, 2, 2, "mat-option", 10);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r379 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("ngModel", ctx_r379.field.selector.value)("ngModelOptions", i0.ɵɵpureFunction0(3, _c0));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r379.field.selector.defaultValue);
} }
const _c1 = function () { return { "display": "inine-block" }; };
function SubOnboardingCreateComponent_div_2_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r385 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 6);
    i0.ɵɵelementStart(1, "mat-checkbox", 7);
    i0.ɵɵlistener("ngModelChange", function SubOnboardingCreateComponent_div_2_div_1_Template_mat_checkbox_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r385); const ctx_r384 = i0.ɵɵnextContext(2); return ctx_r384.field.value = $event; });
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, SubOnboardingCreateComponent_div_2_div_1_mat_select_3_Template, 2, 4, "mat-select", 8);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r378 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵclassMap(ctx_r378.checkSubForm(ctx_r378.field) ? "checkbox-title-active" : "");
    i0.ɵɵproperty("ngModel", ctx_r378.field.value)("required", ctx_r378.field.isMandatory)("ngModelOptions", i0.ɵɵpureFunction0(8, _c0))("ngStyle", ctx_r378.field.selector && i0.ɵɵpureFunction0(9, _c1));
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r378.field.label, " ");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r378.field.selector);
} }
function SubOnboardingCreateComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 6);
    i0.ɵɵtemplate(1, SubOnboardingCreateComponent_div_2_div_1_Template, 4, 10, "div", 2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", "checkbox");
} }
function SubOnboardingCreateComponent_div_3_mat_checkbox_4_Template(rf, ctx) { if (rf & 1) {
    const _r389 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-checkbox", 14);
    i0.ɵɵlistener("ngModelChange", function SubOnboardingCreateComponent_div_3_mat_checkbox_4_Template_mat_checkbox_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r389); const opt_r387 = ctx.$implicit; return opt_r387.checked = $event; });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const opt_r387 = ctx.$implicit;
    const ctx_r386 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("checked", opt_r387.checked)("ngModel", opt_r387.checked)("required", ctx_r386.field.isMandatory)("ngModelOptions", i0.ɵɵpureFunction0(5, _c0));
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", opt_r387.value, " ");
} }
function SubOnboardingCreateComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 6);
    i0.ɵɵelementStart(1, "label");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 12);
    i0.ɵɵtemplate(4, SubOnboardingCreateComponent_div_3_mat_checkbox_4_Template, 2, 6, "mat-checkbox", 13);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r372 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r372.field.label);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r372.field.defaultValue);
} }
function SubOnboardingCreateComponent_div_4_mat_radio_button_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-radio-button", 11);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const opt_r392 = ctx.$implicit;
    i0.ɵɵproperty("value", opt_r392.value);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1("", opt_r392.value, " ");
} }
function SubOnboardingCreateComponent_div_4_mat_form_field_5_Template(rf, ctx) { if (rf & 1) {
    const _r394 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-form-field", 18);
    i0.ɵɵelementStart(1, "mat-label");
    i0.ɵɵtext(2, "Autre option");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "input", 19);
    i0.ɵɵlistener("ngModelChange", function SubOnboardingCreateComponent_div_4_mat_form_field_5_Template_input_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r394); const ctx_r393 = i0.ɵɵnextContext(2); return ctx_r393.field.otherValue = $event; });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r391 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("required", ctx_r391.field.isMandatory)("ngModelOptions", i0.ɵɵpureFunction0(3, _c0))("ngModel", ctx_r391.field.otherValue);
} }
function SubOnboardingCreateComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r396 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 6);
    i0.ɵɵelementStart(1, "label", 15);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "mat-radio-group", 16);
    i0.ɵɵlistener("ngModelChange", function SubOnboardingCreateComponent_div_4_Template_mat_radio_group_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r396); const ctx_r395 = i0.ɵɵnextContext(); return ctx_r395.field.value = $event; });
    i0.ɵɵtemplate(4, SubOnboardingCreateComponent_div_4_mat_radio_button_4_Template, 2, 2, "mat-radio-button", 10);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(5, SubOnboardingCreateComponent_div_4_mat_form_field_5_Template, 4, 4, "mat-form-field", 17);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r373 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r373.field.label, " ");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", ctx_r373.field.value)("required", ctx_r373.field.isMandatory);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r373.field.defaultValue);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", "autre" === ctx_r373.formatOther(ctx_r373.field.value));
} }
function SubOnboardingCreateComponent_div_5_mat_option_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 11);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const opt_r399 = ctx.$implicit;
    i0.ɵɵproperty("value", opt_r399.value);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(opt_r399.value);
} }
function SubOnboardingCreateComponent_div_5_mat_form_field_6_Template(rf, ctx) { if (rf & 1) {
    const _r401 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-form-field", 18);
    i0.ɵɵelementStart(1, "mat-label");
    i0.ɵɵtext(2, "Autre option");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "input", 19);
    i0.ɵɵlistener("ngModelChange", function SubOnboardingCreateComponent_div_5_mat_form_field_6_Template_input_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r401); const ctx_r400 = i0.ɵɵnextContext(2); return ctx_r400.field.otherValue = $event; });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r398 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("required", ctx_r398.field.isMandatory)("ngModelOptions", i0.ɵɵpureFunction0(3, _c0))("ngModel", ctx_r398.field.otherValue);
} }
function SubOnboardingCreateComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r403 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 6);
    i0.ɵɵelementStart(1, "mat-form-field", 20);
    i0.ɵɵelementStart(2, "mat-label");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "mat-select", 21);
    i0.ɵɵlistener("ngModelChange", function SubOnboardingCreateComponent_div_5_Template_mat_select_ngModelChange_4_listener($event) { i0.ɵɵrestoreView(_r403); const ctx_r402 = i0.ɵɵnextContext(); return ctx_r402.field.value = $event; });
    i0.ɵɵtemplate(5, SubOnboardingCreateComponent_div_5_mat_option_5_Template, 2, 2, "mat-option", 10);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(6, SubOnboardingCreateComponent_div_5_mat_form_field_6_Template, 4, 4, "mat-form-field", 17);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r374 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", ctx_r374.field.label, " ");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", ctx_r374.field.value)("ngModelOptions", i0.ɵɵpureFunction0(6, _c0))("required", ctx_r374.field.isMandatory);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r374.field.defaultValue);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", "autre" === ctx_r374.formatOther(ctx_r374.field.value));
} }
function SubOnboardingCreateComponent_mat_form_field_6_Template(rf, ctx) { if (rf & 1) {
    const _r405 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-form-field", 22);
    i0.ɵɵelementStart(1, "mat-label");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "textarea", 23);
    i0.ɵɵlistener("ngModelChange", function SubOnboardingCreateComponent_mat_form_field_6_Template_textarea_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r405); const ctx_r404 = i0.ɵɵnextContext(); return ctx_r404.field.value = $event; });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r375 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r375.field.label);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("required", ctx_r375.field.isMandatory)("ngModelOptions", i0.ɵɵpureFunction0(4, _c0))("ngModel", ctx_r375.field.value);
} }
function SubOnboardingCreateComponent_div_7_mat_error_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-error");
    i0.ɵɵtext(1, "Le t\u00E9l\u00E9phone est invalide");
    i0.ɵɵelementEnd();
} }
function SubOnboardingCreateComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r408 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 24);
    i0.ɵɵelementStart(1, "mat-label", 25);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "ngx-intl-tel-input", 26);
    i0.ɵɵlistener("input", function SubOnboardingCreateComponent_div_7_Template_ngx_intl_tel_input_input_3_listener() { i0.ɵɵrestoreView(_r408); const ctx_r407 = i0.ɵɵnextContext(); return ctx_r407.checkPhone(ctx_r407.field.value); })("ngModelChange", function SubOnboardingCreateComponent_div_7_Template_ngx_intl_tel_input_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r408); const ctx_r409 = i0.ɵɵnextContext(); return ctx_r409.field.value = $event; });
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(4, SubOnboardingCreateComponent_div_7_mat_error_4_Template, 2, 0, "mat-error", 27);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r376 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r376.field.label);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("cssClass", "input-phone")("preferredCountries", ctx_r376.preferredCountries)("enableAutoCountrySelect", false)("enablePlaceholder", true)("customPlaceholder", "Phone")("selectFirstCountry", false)("selectedCountryISO", ctx_r376.flag(ctx_r376.field.value))("maxLength", 15)("inputId", ctx_r376.field.key)("phoneValidation", true)("separateDialCode", ctx_r376.separateDialCode)("numberFormat", ctx_r376.PhoneNumberFormat.National)("ngModelOptions", i0.ɵɵpureFunction0(16, _c0))("ngModel", ctx_r376.field.value);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r376.invalideValue);
} }
function SubOnboardingCreateComponent_mat_form_field_8_Template(rf, ctx) { if (rf & 1) {
    const _r411 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-form-field", 28);
    i0.ɵɵelementStart(1, "mat-label");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "input", 29);
    i0.ɵɵlistener("ngModelChange", function SubOnboardingCreateComponent_mat_form_field_8_Template_input_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r411); const ctx_r410 = i0.ɵɵnextContext(); return ctx_r410.field.value = $event; });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r377 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r377.field.label);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("type", ctx_r377.field.type)("required", ctx_r377.field.isMandatory)("ngModelOptions", i0.ɵɵpureFunction0(5, _c0))("ngModel", ctx_r377.field.value);
} }
const _c2 = [[["", 8, "child"]]];
const _c3 = [".child"];
export class SubOnboardingCreateComponent {
    constructor() {
        this.onAddKeywordFromInput = new EventEmitter();
        this.onKeyPress = new EventEmitter();
        this.onDrop = new EventEmitter();
        this.onAddNewField = new EventEmitter();
        this.onRemoveField = new EventEmitter();
        this.onChangeType = new EventEmitter();
        this.onRemoveKeyword = new EventEmitter();
        this.onAddNewSubLevelField = new EventEmitter();
        this.onExpendMore = new EventEmitter();
        this.onChangeLabel = new EventEmitter();
        this.onCheckedChip = new EventEmitter();
        this.onCheckValue = new EventEmitter();
        this.chipControl = new FormControl(new Set());
        this.preferredCountries = [CountryISO.UnitedStates, CountryISO.France];
        this.PhoneNumberFormat = PhoneNumberFormat;
        this.separatorKeysCodes = [ENTER, COMMA, SEMICOLON];
        this.invalideValue = false;
        this.currentChip = "";
        this.separateDialCode = false;
        this.prevValue = "";
        this.toggleChip = (chip) => {
            this.onCheckedChip.emit(chip);
            // const addChip = () => { this.chips.add(chip); };
            // const removeChip = () => { this.chips.delete(chip); };
            // this.chips.has(chip) ? removeChip() : addChip();
        };
    }
    ngOnInit() {
    }
    drop(event) {
        this.onDrop.emit(event);
    }
    addKeywordFromInput(event, i, j) {
        this.onAddKeywordFromInput.emit({ event, prev: this.prevValue, i, j });
    }
    keyUp(event, i, j) {
        this.onKeyPress.emit({ event, i, j });
    }
    addNewField(event, i) {
        event.preventDefault();
        this.onAddNewField.emit({ event, i });
    }
    removeField(event, i, j) {
        event.preventDefault();
        this.onRemoveField.emit({ i, j });
    }
    changeType(type, i, j) {
        this.onChangeType.emit({ type, i, j });
    }
    removeKeyword(event, i, j) {
        this.onRemoveKeyword.emit({ event, i, j });
    }
    addNewSubLevelField(e) {
        e.preventDefault();
        this.onAddNewSubLevelField.emit(true);
    }
    expendMore(e, field) {
        e.preventDefault();
        this.onExpendMore.emit({ expand: true, field });
    }
    ingoreDefaultAction(e) {
        e.preventDefault();
    }
    changeLabel(label, key) {
        this.onChangeLabel.emit({ label, key });
    }
    onEditChip(chip) {
        if (chip.value === this.currentChip) {
            this.currentChip = "";
            this.prevValue = "";
        }
        else {
            this.currentChip = chip.value;
            this.prevValue = chip.value;
        }
    }
    get chips() { return this.chipControl.value; }
    formatOther(other) {
        if (other) {
            return other.toLocaleLowerCase();
        }
        return '';
    }
    checkSubForm(forms) {
        let hasSubForm = false;
        if (forms.forms && forms.forms.length) {
            hasSubForm = true;
        }
        return hasSubForm;
    }
    flag(value) {
        const valueString = String(value);
        return valueString && isValidPhoneNumber(valueString) ? parsePhoneNumber(valueString).country : CountryISO.France;
    }
    checkPhone(phone) {
        if (phone) {
            let regex = new RegExp(/\+(9[976]\d|8[987530]\d|6[987]\d|5[90]\d|42\d|3[875]\d|2[98654321]\d|9[8543210]|8[6421]|6[6543210]|5[87654321]|4[987654310]|3[9643210]|2[70]|7|1)\W*\d\W*\d\W*\d\W*\d\W*\d\W*\d\W*\d\W*\d\W*(\d{1,2})$/);
            this.invalideValue = !regex.test(phone['e164Number']);
            this.onCheckValue.emit(this.invalideValue);
        }
        if (phone && phone["nationalNumber"] && phone["nationalNumber"] != '') {
            let p = phone['nationalNumber'].replaceAll(' ', '');
            let newp = '';
            for (let i = 0; i < p.length; i++) {
                if (p.split('')[i]) {
                    if (i % 2 == 0 && i > 0) {
                        newp += ' ';
                    }
                    newp += p.split('')[i];
                }
            }
            console.log(newp);
            this.field.value = phone["nationalNumber"];
        }
    }
}
SubOnboardingCreateComponent.ɵfac = function SubOnboardingCreateComponent_Factory(t) { return new (t || SubOnboardingCreateComponent)(); };
SubOnboardingCreateComponent.ɵcmp = i0.ɵɵdefineComponent({ type: SubOnboardingCreateComponent, selectors: [["lib-sub-create-onboarding"]], inputs: { field: "field", length: "length", i: "i", j: "j" }, outputs: { onAddKeywordFromInput: "onAddKeywordFromInput", onKeyPress: "onKeyPress", onDrop: "onDrop", onAddNewField: "onAddNewField", onRemoveField: "onRemoveField", onChangeType: "onChangeType", onRemoveKeyword: "onRemoveKeyword", onAddNewSubLevelField: "onAddNewSubLevelField", onExpendMore: "onExpendMore", onChangeLabel: "onChangeLabel", onCheckedChip: "onCheckedChip", onCheckValue: "onCheckValue" }, ngContentSelectors: _c3, decls: 10, vars: 7, consts: [[1, "field-item"], [3, "ngSwitch"], ["class", "flex-auto w-30 field-size", 4, "ngSwitchCase"], ["class", "form-field full-width", "appearance", "outline", 4, "ngSwitchCase"], ["class", "form-field full-width tel-input", 4, "ngSwitchCase"], ["class", "form-field field-size", "appearance", "outline", 4, "ngSwitchDefault"], [1, "flex-auto", "w-30", "field-size"], [1, "form-field", 3, "ngModel", "required", "ngModelOptions", "ngStyle", "ngModelChange"], ["placeholder", "Company", "required", "", "style", "display: inline-block; width: 50%;", 3, "ngModel", "ngModelOptions", "ngModelChange", 4, "ngIf"], ["placeholder", "Company", "required", "", 2, "display", "inline-block", "width", "50%", 3, "ngModel", "ngModelOptions", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], [2, "margin-top", "20px"], ["class", "form-field", "style", "display: block; margin-bottom: 5px; margin-top: 10px", 3, "checked", "ngModel", "required", "ngModelOptions", "ngModelChange", 4, "ngFor", "ngForOf"], [1, "form-field", 2, "display", "block", "margin-bottom", "5px", "margin-top", "10px", 3, "checked", "ngModel", "required", "ngModelOptions", "ngModelChange"], [2, "display", "block"], ["aria-label", "Select an option", 1, "form-field", "radio-group", "field-size", 3, "ngModel", "required", "ngModelChange"], ["class", "form-field field-size other-option", "appearance", "outline", 4, "ngIf"], ["appearance", "outline", 1, "form-field", "field-size", "other-option"], ["type", "text", "matInput", "", "placeholder", "", 3, "required", "ngModelOptions", "ngModel", "ngModelChange"], ["appearance", "outline", 1, "flex-auto", "w-30", "field-size"], [3, "ngModel", "ngModelOptions", "required", "ngModelChange"], ["appearance", "outline", 1, "form-field", "full-width"], ["type", "text", "rows", "5", "matInput", "", "placeholder", "Description...", 3, "required", "ngModelOptions", "ngModel", "ngModelChange"], [1, "form-field", "full-width", "tel-input"], [1, "tel-label"], ["id", "onboarding-phone-input", "name", "phone", 1, "phone-input-profile", 3, "cssClass", "preferredCountries", "enableAutoCountrySelect", "enablePlaceholder", "customPlaceholder", "selectFirstCountry", "selectedCountryISO", "maxLength", "inputId", "phoneValidation", "separateDialCode", "numberFormat", "ngModelOptions", "ngModel", "input", "ngModelChange"], [4, "ngIf"], ["appearance", "outline", 1, "form-field", "field-size"], ["matInput", "", "placeholder", "", 3, "type", "required", "ngModelOptions", "ngModel", "ngModelChange"]], template: function SubOnboardingCreateComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef(_c2);
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementContainerStart(1, 1);
        i0.ɵɵtemplate(2, SubOnboardingCreateComponent_div_2_Template, 2, 1, "div", 2);
        i0.ɵɵtemplate(3, SubOnboardingCreateComponent_div_3_Template, 5, 2, "div", 2);
        i0.ɵɵtemplate(4, SubOnboardingCreateComponent_div_4_Template, 6, 5, "div", 2);
        i0.ɵɵtemplate(5, SubOnboardingCreateComponent_div_5_Template, 7, 7, "div", 2);
        i0.ɵɵtemplate(6, SubOnboardingCreateComponent_mat_form_field_6_Template, 4, 5, "mat-form-field", 3);
        i0.ɵɵtemplate(7, SubOnboardingCreateComponent_div_7_Template, 5, 17, "div", 4);
        i0.ɵɵtemplate(8, SubOnboardingCreateComponent_mat_form_field_8_Template, 4, 6, "mat-form-field", 5);
        i0.ɵɵelementContainerEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵprojection(9);
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngSwitch", ctx.field.type);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngSwitchCase", "checkbox");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngSwitchCase", "checkbox_multiple");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngSwitchCase", "radio");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngSwitchCase", "select");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngSwitchCase", "textarea");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngSwitchCase", "tel");
    } }, directives: [i1.NgSwitch, i1.NgSwitchCase, i1.NgSwitchDefault, i2.MatCheckbox, i2.MatCheckboxRequiredValidator, i3.NgControlStatus, i3.NgModel, i4.NativeElementInjectorDirective, i3.RequiredValidator, i1.NgStyle, i1.NgIf, i5.MatSelect, i1.NgForOf, i6.MatOption, i7.MatRadioGroup, i7.MatRadioButton, i8.MatFormField, i8.MatLabel, i9.MatInput, i3.DefaultValueAccessor, i4.NgxIntlTelInputComponent, i8.MatError], styles: [".container[_ngcontent-%COMP%]{max-width:98%;margin:50px auto auto;padding-bottom:50px}.container[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:space-between}.input-category-name[_ngcontent-%COMP%]{font-size:15px;font-weight:500}.full-width[_ngcontent-%COMP%]{width:100%}.field-item[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;width:100%;flex-wrap:wrap;min-width:250px;position:relative}.field-item[_ngcontent-%COMP%]   .button-action[_ngcontent-%COMP%]{background-color:#6fe8d7;height:100%;margin:auto 15px auto auto;display:flex}.field-item[_ngcontent-%COMP%]   .button-action[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{box-shadow:none;background-color:transparent;color:#fff}.field-action[_ngcontent-%COMP%]{width:10%}.field-size[_ngcontent-%COMP%]   mat-checkbox[_ngcontent-%COMP%]{margin:20px}hr[_ngcontent-%COMP%]{margin:50px 0}  .mat-form-field-appearance-fill .mat-form-field-flex{background-color:#fff}.category-action[_ngcontent-%COMP%]{display:flex;width:100%}.delete-field[_ngcontent-%COMP%]{margin:auto 2%}.radio-group[_ngcontent-%COMP%]   .mat-radio-button[_ngcontent-%COMP%]{margin-right:10px}.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary[_ngcontent-%COMP%]{background-color:#3f51b5;color:#fff;min-height:20px;font-size:10px}.move-icons[_ngcontent-%COMP%]{cursor:move}.category-item[_ngcontent-%COMP%]{display:flex;align-items:baseline;width:100%;border:1px solid #dce4e9;border-radius:8px}  .readonly.mat-form-field-appearance-outline .mat-form-field-outline{color:transparent!important}.field-content[_ngcontent-%COMP%]{width:100%}.cdk-drag-preview[_ngcontent-%COMP%]{box-sizing:border-box;border-radius:4px;box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.cdk-drag-placeholder[_ngcontent-%COMP%]{opacity:0}.cdk-drag-animating[_ngcontent-%COMP%], .example-list.cdk-drop-list-dragging[_ngcontent-%COMP%]   .category-item[_ngcontent-%COMP%]:not(.cdk-drag-placeholder){transition:transform 250ms cubic-bezier(0,0,.2,1)}.add-button-container[_ngcontent-%COMP%]{background:no-repeat padding-box #fff;border:1px dashed #dce4e9;border-radius:8px;margin-top:10px;padding:10px;display:flex;justify-content:center;align-items:center;width:98%;margin-left:0;margin-bottom:22px}.add-button-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{display:flex;align-items:center;background-color:transparent;border:none;cursor:pointer;font:17px/26px Nexa Text;letter-spacing:0;color:#c2c8d5;box-shadow:none}.expand-button[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%]{font-size:48px;margin-top:-20px;margin-right:15px}.transparent-button[_ngcontent-%COMP%]{background-color:transparent!important;box-shadow:none!important;width:40px!important;padding:0!important;margin:0!important;min-width:auto!important}.expand-button[_ngcontent-%COMP%]{color:#5a607f!important;background-color:transparent!important;box-shadow:none!important}.checkbox-title-active[_ngcontent-%COMP%]{font-weight:700}.other-option[_ngcontent-%COMP%]{margin-left:10px}.flex-auto[_ngcontent-%COMP%]{width:100%}.flex-auto[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{width:80%}  .country-dropdown{min-width:unset!important}  .tel-input{position:relative}  .tel-input .tel-label{font-size:10px;color:rgba(0,0,0,.6);position:absolute;z-index:1;background-color:#fff;padding:0 2px;left:8px;top:-7px}  .phone-input-profile{padding-bottom:.3em;padding-top:0;display:block!important;max-width:100%;font:14px/20px \"Nexa Text\"!important;width:95%}  .phone-input-profile .iti{width:100%!important}  .phone-input-profile input{outline:0;padding:19px;border-radius:5px;border-color:rgba(0,0,0,.12);border-width:1px;width:85%}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SubOnboardingCreateComponent, [{
        type: Component,
        args: [{
                selector: 'lib-sub-create-onboarding',
                templateUrl: './sub-onboarding-create.component.html',
                styleUrls: ['./sub-onboarding-create.component.scss']
            }]
    }], function () { return []; }, { field: [{
            type: Input
        }], length: [{
            type: Input
        }], i: [{
            type: Input
        }], j: [{
            type: Input
        }], onAddKeywordFromInput: [{
            type: Output
        }], onKeyPress: [{
            type: Output
        }], onDrop: [{
            type: Output
        }], onAddNewField: [{
            type: Output
        }], onRemoveField: [{
            type: Output
        }], onChangeType: [{
            type: Output
        }], onRemoveKeyword: [{
            type: Output
        }], onAddNewSubLevelField: [{
            type: Output
        }], onExpendMore: [{
            type: Output
        }], onChangeLabel: [{
            type: Output
        }], onCheckedChip: [{
            type: Output
        }], onCheckValue: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3ViLW9uYm9hcmRpbmctY3JlYXRlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL29uYm9hcmRpbmcvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9zdWItb25ib2FyZGluZy1jcmVhdGUvc3ViLW9uYm9hcmRpbmctY3JlYXRlLmNvbXBvbmVudC50cyIsImxpYi9jb21wb25lbnRzL3N1Yi1vbmJvYXJkaW5nLWNyZWF0ZS9zdWItb25ib2FyZGluZy1jcmVhdGUuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvRSxPQUFPLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ25FLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG1CQUFtQixDQUFDOzs7Ozs7Ozs7Ozs7SUNVckQsc0NBQ0k7SUFBQSxZQUFnQjtJQUFBLGlCQUFhOzs7SUFEOEIseUNBQXNCO0lBQ2pGLGVBQWdCO0lBQWhCLGlEQUFnQjs7Ozs7SUFKeEIscUNBR0k7SUFIOEIscVFBQWtDO0lBR2hFLHFIQUNJO0lBQ1IsaUJBQWE7OztJQUxxQix1REFBa0MsOENBQUE7SUFHcEQsZUFBa0Q7SUFBbEQsOERBQWtEOzs7OztJQVh0RSw4QkFDSTtJQUFBLHVDQUdJO0lBRkEsaVBBQXlCO0lBRXpCLFlBQ0o7SUFBQSxpQkFBZTtJQUdmLHVHQUdJO0lBR1IsaUJBQU07OztJQWIrQixlQUEwRDtJQUExRCxtRkFBMEQ7SUFDdkYsOENBQXlCLHdDQUFBLDhDQUFBLGtFQUFBO0lBRXpCLGVBQ0o7SUFE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QUUsMkJBQTJCO2dCQUNyQyxXQUFXLEVBQUUsd0NBQXdDO2dCQUNyRCxTQUFTLEVBQUUsQ0FBQyx3Q0FBd0MsQ0FBQzthQUN0RDs7a0JBRUUsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsTUFBTTs7a0JBQ04sTUFBTTs7a0JBQ04sTUFBTTs7a0JBQ04sTUFBTTs7a0JBQ04sTUFBTTs7a0JBQ04sTUFBTTs7a0JBQ04sTUFBTTs7a0JBQ04sTUFBTTs7a0JBQ04sTUFBTTs7a0JBQ04sTUFBTTs7a0JBQ04sTUFBTTs7a0JBQ04sTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEVOVEVSLCBDT01NQSwgU0VNSUNPTE9OIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2tleWNvZGVzJztcbmltcG9ydCB7IEZvcm1Db250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgQ291bnRyeUlTTywgUGhvbmVOdW1iZXJGb3JtYXQgfSBmcm9tICduZ3gtaW50bC10ZWwtaW5wdXQnO1xuaW1wb3J0IHsgaXNWYWxpZFBob25lTnVtYmVyLCBwYXJzZVBob25lTnVtYmVyIH0gZnJvbSAnbGlicGhvbmVudW1iZXItanMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItc3ViLWNyZWF0ZS1vbmJvYXJkaW5nJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3N1Yi1vbmJvYXJkaW5nLWNyZWF0ZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3N1Yi1vbmJvYXJkaW5nLWNyZWF0ZS5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFN1Yk9uYm9hcmRpbmdDcmVhdGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBmaWVsZDogYW55XG4gIEBJbnB1dCgpIGxlbmd0aDogYW55XG4gIEBJbnB1dCgpIGk6IGFueVxuICBASW5wdXQoKSBqOiBhbnlcbiAgQE91dHB1dCgpIG9uQWRkS2V5d29yZEZyb21JbnB1dCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpXG4gIEBPdXRwdXQoKSBvbktleVByZXNzID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KClcbiAgQE91dHB1dCgpIG9uRHJvcCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpXG4gIEBPdXRwdXQoKSBvbkFkZE5ld0ZpZWxkID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KClcbiAgQE91dHB1dCgpIG9uUmVtb3ZlRmllbGQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKVxuICBAT3V0cHV0KCkgb25DaGFuZ2VUeXBlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KClcbiAgQE91dHB1dCgpIG9uUmVtb3ZlS2V5d29yZCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpXG4gIEBPdXRwdXQoKSBvbkFkZE5ld1N1YkxldmVsRmllbGQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKVxuICBAT3V0cHV0KCkgb25FeHBlbmRNb3JlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KClcbiAgQE91dHB1dCgpIG9uQ2hhbmdlTGFiZWwgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKVxuICBAT3V0cHV0KCkgb25DaGVja2VkQ2hpcCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpXG4gIEBPdXRwdXQoKSBvbkNoZWNrVmFsdWUgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKVxuXG4gIGNoaXBDb250cm9sID0gbmV3IEZvcm1Db250cm9sKG5ldyBTZXQoKSk7XG4gIHByZWZlcnJlZENvdW50cmllczogQ291bnRyeUlTT1tdID0gW0NvdW50cnlJU08uVW5pdGVkU3RhdGVzLCBDb3VudHJ5SVNPLkZyYW5jZV07XG4gIFBob25lTnVtYmVyRm9ybWF0ID0gUGhvbmVOdW1iZXJGb3JtYXQ7XG4gIHNlcGFyYXRvcktleXNDb2RlcyA9IFtFTlRFUiwgQ09NTUEsIFNFTUlDT0xPTl07XG4gIGludmFsaWRlVmFsdWUgPSBmYWxzZTtcbiAgY3VycmVudENoaXA9XCJcIlxuICBzZXBhcmF0ZURpYWxDb2RlID0gZmFsc2U7XG4gIHByZXZWYWx1ZT1cIlwiXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gIH1cblxuICBkcm9wKGV2ZW50KSB7XG4gICAgdGhpcy5vbkRyb3AuZW1pdChldmVudClcbiAgfVxuXG4gIGFkZEtleXdvcmRGcm9tSW5wdXQoZXZlbnQsIGksIGopIHtcbiAgICB0aGlzLm9uQWRkS2V5d29yZEZyb21JbnB1dC5lbWl0KHsgZXZlbnQscHJldjp0aGlzLnByZXZWYWx1ZSwgaSwgaiB9KTtcbiAgfVxuXG4gIGtleVVwKGV2ZW50LCBpLCBqKSB7XG4gICAgdGhpcy5vbktleVByZXNzLmVtaXQoeyBldmVudCwgaSwgaiB9KVxuICB9XG5cbiAgYWRkTmV3RmllbGQoZXZlbnQsIGkpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgdGhpcy5vbkFkZE5ld0ZpZWxkLmVtaXQoeyBldmVudCwgaSB9KVxuICB9XG5cbiAgcmVtb3ZlRmllbGQoZXZlbnQsIGksIGopIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgdGhpcy5vblJlbW92ZUZpZWxkLmVtaXQoeyBpLCBqIH0pXG4gIH1cblxuICBjaGFuZ2VUeXBlKHR5cGUsIGksIGopIHtcbiAgICB0aGlzLm9uQ2hhbmdlVHlwZS5lbWl0KHsgdHlwZSwgaSwgaiB9KVxuICB9XG5cbiAgcmVtb3ZlS2V5d29yZChldmVudCwgaSwgaikge1xuICAgIHRoaXMub25SZW1vdmVLZXl3b3JkLmVtaXQoeyBldmVudCwgaSwgaiB9KVxuICB9XG4gIGFkZE5ld1N1YkxldmVsRmllbGQoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIHRoaXMub25BZGROZXdTdWJMZXZlbEZpZWxkLmVtaXQodHJ1ZSlcbiAgfVxuICBleHBlbmRNb3JlKGUsIGZpZWxkKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgdGhpcy5vbkV4cGVuZE1vcmUuZW1pdCh7ZXhwYW5kOnRydWUsIGZpZWxkfSlcbiAgfVxuXG4gIGluZ29yZURlZmF1bHRBY3Rpb24oZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICB9XG5cbiAgY2hhbmdlTGFiZWwobGFiZWwsa2V5KXtcbiAgICB0aGlzLm9uQ2hhbmdlTGFiZWwuZW1pdCh7bGFiZWwsIGtleX0pXG4gIH1cblxuICB0b2dnbGVDaGlwID0gKGNoaXA6IGFueSkgPT4ge1xuICAgIHRoaXMub25DaGVja2VkQ2hpcC5lbWl0KGNoaXApXG4gICAgLy8gY29uc3QgYWRkQ2hpcCA9ICgpID0+IHsgdGhpcy5jaGlwcy5hZGQoY2hpcCk7IH07XG4gICAgLy8gY29uc3QgcmVtb3ZlQ2hpcCA9ICgpID0+IHsgdGhpcy5jaGlwcy5kZWxldGUoY2hpcCk7IH07XG4gICAgLy8gdGhpcy5jaGlwcy5oYXMoY2hpcCkgPyByZW1vdmVDaGlwKCkgOiBhZGRDaGlwKCk7XG5cbiAgfVxuXG4gIG9uRWRpdENoaXAoY2hpcCl7XG4gICAgaWYoY2hpcC52YWx1ZT09PXRoaXMuY3VycmVudENoaXApe1xuICAgICAgdGhpcy5jdXJyZW50Q2hpcD1cIlwiXG4gICAgICB0aGlzLnByZXZWYWx1ZT1cIlwiXG4gICAgfWVsc2V7XG4gICAgICB0aGlzLmN1cnJlbnRDaGlwPWNoaXAudmFsdWU7XG4gICAgICB0aGlzLnByZXZWYWx1ZT1jaGlwLnZhbHVlXG4gICAgfVxuICB9XG5cbiAgZ2V0IGNoaXBzKCkgeyByZXR1cm4gdGhpcy5jaGlwQ29udHJvbC52YWx1ZTsgfVxuXG4gIGZvcm1hdE90aGVyKG90aGVyOnN0cmluZyl7XG4gICBpZihvdGhlcil7XG4gICAgcmV0dXJuIG90aGVyLnRvTG9jYWxlTG93ZXJDYXNlKClcbiAgIH1cbiAgIHJldHVybiAnJ1xuICB9XG5cblxuICBjaGVja1N1YkZvcm0oZm9ybXMpe1xuICAgIGxldCBoYXNTdWJGb3JtPWZhbHNlO1xuICAgIGlmKGZvcm1zLmZvcm1zICYmIGZvcm1zLmZvcm1zLmxlbmd0aCl7XG4gICAgICBoYXNTdWJGb3JtPXRydWU7XG4gICAgfSAgICBcbiAgICByZXR1cm4gaGFzU3ViRm9ybVxuICB9XG5cbiAgZmxhZyh2YWx1ZSl7XG4gICAgY29uc3QgdmFsdWVTdHJpbmc9U3RyaW5nKHZhbHVlKVxuICAgIHJldHVybiAgdmFsdWVTdHJpbmcgJiYgaXNWYWxpZFBob25lTnVtYmVyKHZhbHVlU3RyaW5nKSA/IHBhcnNlUGhvbmVOdW1iZXIodmFsdWVTdHJpbmcpLmNvdW50cnkgOiBDb3VudHJ5SVNPLkZyYW5jZTtcbiAgfVxuXG4gIGNoZWNrUGhvbmUocGhvbmUpIHtcbiAgIGlmIChwaG9uZSkge1xuICAgICAgICBsZXQgcmVnZXggPSBuZXcgUmVnRXhwKC9cXCsoOVs5NzZdXFxkfDhbOTg3NTMwXVxcZHw2Wzk4N11cXGR8NVs5MF1cXGR8NDJcXGR8M1s4NzVdXFxkfDJbOTg2NTQzMjFdXFxkfDlbODU0MzIxMF18OFs2NDIxXXw2WzY1NDMyMTBdfDVbODc2NTQzMjFdfDRbOTg3NjU0MzEwXXwzWzk2NDMyMTBdfDJbNzBdfDd8MSlcXFcqXFxkXFxXKlxcZFxcVypcXGRcXFcqXFxkXFxXKlxcZFxcVypcXGRcXFcqXFxkXFxXKlxcZFxcVyooXFxkezEsMn0pJC8pXG4gICAgICAgIHRoaXMuaW52YWxpZGVWYWx1ZSA9ICFyZWdleC50ZXN0KHBob25lWydlMTY0TnVtYmVyJ10pO1xuICAgICAgICB0aGlzLm9uQ2hlY2tWYWx1ZS5lbWl0KHRoaXMuaW52YWxpZGVWYWx1ZSlcbiAgICB9XG4gICAgaWYgKHBob25lICYmIHBob25lW1wibmF0aW9uYWxOdW1iZXJcIl0gJiYgcGhvbmVbXCJuYXRpb25hbE51bWJlclwiXSAhPSAnJykge1xuICAgICAgICBsZXQgcCA9IHBob25lWyduYXRpb25hbE51bWJlciddLnJlcGxhY2VBbGwoJyAnLCAnJyk7XG4gICAgICAgIGxldCBuZXdwOiBhbnkgPSAnJztcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChwLnNwbGl0KCcnKVtpXSkge1xuICAgICAgICAgICAgICAgIGlmIChpICUgMiA9PSAwICYmIGkgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIG5ld3AgKz0gJyAnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBuZXdwICs9IHAuc3BsaXQoJycpW2ldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc29sZS5sb2cobmV3cCk7XG4gICAgICB0aGlzLmZpZWxkLnZhbHVlPXBob25lW1wibmF0aW9uYWxOdW1iZXJcIl0gIFxuICAgIH1cbiAgfVxuXG59XG4iLCI8ZGl2IGNsYXNzPVwiZmllbGQtaXRlbVwiPlxuICAgIDxuZy1jb250YWluZXIgW25nU3dpdGNoXT1cImZpZWxkLnR5cGVcIj5cbiAgICAgICAgPGRpdiAqbmdTd2l0Y2hDYXNlPVwiJ2NoZWNrYm94J1wiIGNsYXNzPVwiZmxleC1hdXRvIHctMzAgZmllbGQtc2l6ZVwiPlxuICAgICAgICAgICAgPGRpdiAqbmdTd2l0Y2hDYXNlPVwiJ2NoZWNrYm94J1wiIGNsYXNzPVwiZmxleC1hdXRvIHctMzAgZmllbGQtc2l6ZVwiPlxuICAgICAgICAgICAgICAgIDxtYXQtY2hlY2tib3ggY2xhc3M9XCJmb3JtLWZpZWxkXCIgW2NsYXNzXT1cImNoZWNrU3ViRm9ybShmaWVsZCkgPyAnY2hlY2tib3gtdGl0bGUtYWN0aXZlJzonJ1wiXG4gICAgICAgICAgICAgICAgICAgIFsobmdNb2RlbCldPVwiZmllbGQudmFsdWVcIiBbcmVxdWlyZWRdPVwiZmllbGQuaXNNYW5kYXRvcnlcIiBbbmdNb2RlbE9wdGlvbnNdPVwie3N0YW5kYWxvbmU6IHRydWV9XCJcbiAgICAgICAgICAgICAgICAgICAgW25nU3R5bGVdPVwiZmllbGQuc2VsZWN0b3IgJiYgeydkaXNwbGF5JzogJ2luaW5lLWJsb2NrJ31cIj5cbiAgICAgICAgICAgICAgICAgICAge3tmaWVsZC5sYWJlbH19XG4gICAgICAgICAgICAgICAgPC9tYXQtY2hlY2tib3g+XG5cblxuICAgICAgICAgICAgICAgIDxtYXQtc2VsZWN0IHBsYWNlaG9sZGVyPVwiQ29tcGFueVwiIFsobmdNb2RlbCldPVwiZmllbGQuc2VsZWN0b3IudmFsdWVcIlxuICAgICAgICAgICAgICAgICAgICBbbmdNb2RlbE9wdGlvbnNdPVwie3N0YW5kYWxvbmU6IHRydWV9XCIgcmVxdWlyZWQgKm5nSWY9XCJmaWVsZC5zZWxlY3RvclwiXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPVwiZGlzcGxheTogaW5saW5lLWJsb2NrOyB3aWR0aDogNTAlO1wiPlxuICAgICAgICAgICAgICAgICAgICA8bWF0LW9wdGlvbiAqbmdGb3I9XCJsZXQgc2VsZWN0IG9mIGZpZWxkLnNlbGVjdG9yLmRlZmF1bHRWYWx1ZVwiIFt2YWx1ZV09XCJzZWxlY3QudmFsdWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt7c2VsZWN0LnZhbHVlfX08L21hdC1vcHRpb24+XG4gICAgICAgICAgICAgICAgPC9tYXQtc2VsZWN0PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2ICpuZ1N3aXRjaENhc2U9XCInY2hlY2tib3hfbXVsdGlwbGUnXCIgY2xhc3M9XCJmbGV4LWF1dG8gdy0zMCBmaWVsZC1zaXplXCI+XG4gICAgICAgICAgICA8bGFiZWw+e3tmaWVsZC5sYWJlbH19PC9sYWJlbD5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9XCJtYXJnaW4tdG9wOiAyMHB4O1wiPlxuICAgICAgICAgICAgICAgIDxtYXQtY2hlY2tib3ggY2xhc3M9XCJmb3JtLWZpZWxkXCIgc3R5bGU9XCJkaXNwbGF5OiBibG9jazsgbWFyZ2luLWJvdHRvbTogNXB4OyBtYXJnaW4tdG9wOiAxMHB4XCJcbiAgICAgICAgICAgICAgICAgICAgKm5nRm9yPVwibGV0IG9wdCBvZiBmaWVsZC5kZWZhdWx0VmFsdWVcIiBbY2hlY2tlZF09XCJvcHQuY2hlY2tlZFwiIFsobmdNb2RlbCldPVwib3B0LmNoZWNrZWRcIlxuICAgICAgICAgICAgICAgICAgICBbcmVxdWlyZWRdPVwiZmllbGQuaXNNYW5kYXRvcnlcIiBbbmdNb2RlbE9wdGlvbnNdPVwie3N0YW5kYWxvbmU6IHRydWV9XCI+XG4gICAgICAgICAgICAgICAgICAgIHt7b3B0LnZhbHVlfX1cbiAgICAgICAgICAgICAgICA8L21hdC1jaGVja2JveD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiAqbmdTd2l0Y2hDYXNlPVwiJ3JhZGlvJ1wiIGNsYXNzPVwiZmxleC1hdXRvIHctMzAgZmllbGQtc2l6ZVwiPlxuICAgICAgICAgICAgPGxhYmVsIHN0eWxlPVwiZGlzcGxheTogYmxvY2s7XCI+IHt7ZmllbGQubGFiZWx9fSA8L2xhYmVsPlxuICAgICAgICAgICAgPG1hdC1yYWRpby1ncm91cCBjbGFzcz1cImZvcm0tZmllbGQgcmFkaW8tZ3JvdXAgZmllbGQtc2l6ZVwiIFsobmdNb2RlbCldPVwiZmllbGQudmFsdWVcIlxuICAgICAgICAgICAgICAgIFtyZXF1aXJlZF09XCJmaWVsZC5pc01hbmRhdG9yeVwiIGFyaWEtbGFiZWw9XCJTZWxlY3QgYW4gb3B0aW9uXCI+XG4gICAgICAgICAgICAgICAgPG1hdC1yYWRpby1idXR0b24gKm5nRm9yPVwibGV0IG9wdCBvZiBmaWVsZC5kZWZhdWx0VmFsdWVcIiBbdmFsdWVdPVwib3B0LnZhbHVlXCI+e3tvcHQudmFsdWV9fVxuICAgICAgICAgICAgICAgIDwvbWF0LXJhZGlvLWJ1dHRvbj5cbiAgICAgICAgICAgIDwvbWF0LXJhZGlvLWdyb3VwPlxuICAgICAgICAgICAgPG1hdC1mb3JtLWZpZWxkICpuZ0lmPVwiJ2F1dHJlJz09PWZvcm1hdE90aGVyKGZpZWxkLnZhbHVlKVwiIGNsYXNzPVwiZm9ybS1maWVsZCBmaWVsZC1zaXplIG90aGVyLW9wdGlvblwiXG4gICAgICAgICAgICAgICAgYXBwZWFyYW5jZT1cIm91dGxpbmVcIj5cbiAgICAgICAgICAgICAgICA8bWF0LWxhYmVsPkF1dHJlIG9wdGlvbjwvbWF0LWxhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIFtyZXF1aXJlZF09XCJmaWVsZC5pc01hbmRhdG9yeVwiIG1hdElucHV0IFtuZ01vZGVsT3B0aW9uc109XCJ7c3RhbmRhbG9uZTogdHJ1ZX1cIlxuICAgICAgICAgICAgICAgICAgICBbKG5nTW9kZWwpXT1cImZpZWxkLm90aGVyVmFsdWVcIiBwbGFjZWhvbGRlcj1cIlwiPlxuICAgICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgKm5nU3dpdGNoQ2FzZT1cIidzZWxlY3QnXCIgY2xhc3M9XCJmbGV4LWF1dG8gdy0zMCBmaWVsZC1zaXplXCI+XG4gICAgICAgICAgICA8bWF0LWZvcm0tZmllbGQgY2xhc3M9XCJmbGV4LWF1dG8gdy0zMCBmaWVsZC1zaXplXCIgYXBwZWFyYW5jZT1cIm91dGxpbmVcIj5cbiAgICAgICAgICAgICAgICA8bWF0LWxhYmVsPiB7e2ZpZWxkLmxhYmVsfX0gPC9tYXQtbGFiZWw+XG4gICAgICAgICAgICAgICAgPG1hdC1zZWxlY3QgWyhuZ01vZGVsKV09XCJmaWVsZC52YWx1ZVwiIFtuZ01vZGVsT3B0aW9uc109XCJ7c3RhbmRhbG9uZTogdHJ1ZX1cIlxuICAgICAgICAgICAgICAgICAgICBbcmVxdWlyZWRdPVwiZmllbGQuaXNNYW5kYXRvcnlcIj5cbiAgICAgICAgICAgICAgICAgICAgPG1hdC1vcHRpb24gKm5nRm9yPVwibGV0IG9wdCBvZiBmaWVsZC5kZWZhdWx0VmFsdWVcIiBbdmFsdWVdPVwib3B0LnZhbHVlXCI+e3tvcHQudmFsdWV9fTwvbWF0LW9wdGlvbj5cbiAgICAgICAgICAgICAgICA8L21hdC1zZWxlY3Q+XG4gICAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxuICAgICAgICAgICAgPG1hdC1mb3JtLWZpZWxkICpuZ0lmPVwiJ2F1dHJlJz09PWZvcm1hdE90aGVyKGZpZWxkLnZhbHVlKVwiIGNsYXNzPVwiZm9ybS1maWVsZCBmaWVsZC1zaXplIG90aGVyLW9wdGlvblwiXG4gICAgICAgICAgICAgICAgYXBwZWFyYW5jZT1cIm91dGxpbmVcIj5cbiAgICAgICAgICAgICAgICA8bWF0LWxhYmVsPkF1dHJlIG9wdGlvbjwvbWF0LWxhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIFtyZXF1aXJlZF09XCJmaWVsZC5pc01hbmRhdG9yeVwiIG1hdElucHV0IFtuZ01vZGVsT3B0aW9uc109XCJ7c3RhbmRhbG9uZTogdHJ1ZX1cIlxuICAgICAgICAgICAgICAgICAgICBbKG5nTW9kZWwpXT1cImZpZWxkLm90aGVyVmFsdWVcIiBwbGFjZWhvbGRlcj1cIlwiPlxuICAgICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxtYXQtZm9ybS1maWVsZCAqbmdTd2l0Y2hDYXNlPVwiJ3RleHRhcmVhJ1wiIGNsYXNzPVwiZm9ybS1maWVsZCBmdWxsLXdpZHRoXCIgYXBwZWFyYW5jZT1cIm91dGxpbmVcIj5cbiAgICAgICAgICAgIDxtYXQtbGFiZWw+e3tmaWVsZC5sYWJlbH19PC9tYXQtbGFiZWw+XG4gICAgICAgICAgICA8dGV4dGFyZWEgdHlwZT1cInRleHRcIiByb3dzPVwiNVwiIG1hdElucHV0IFtyZXF1aXJlZF09XCJmaWVsZC5pc01hbmRhdG9yeVwiIFtuZ01vZGVsT3B0aW9uc109XCJ7c3RhbmRhbG9uZTogdHJ1ZX1cIlxuICAgICAgICAgICAgICAgIFsobmdNb2RlbCldPVwiZmllbGQudmFsdWVcIiBwbGFjZWhvbGRlcj1cIkRlc2NyaXB0aW9uLi4uXCI+PC90ZXh0YXJlYT5cbiAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cbiAgICAgICAgPGRpdiAqbmdTd2l0Y2hDYXNlPVwiJ3RlbCdcIiBjbGFzcz1cImZvcm0tZmllbGQgZnVsbC13aWR0aCB0ZWwtaW5wdXRcIj5cbiAgICAgICAgICAgIDxtYXQtbGFiZWwgY2xhc3M9XCJ0ZWwtbGFiZWxcIj57e2ZpZWxkLmxhYmVsfX08L21hdC1sYWJlbD5cbiAgICAgICAgICAgIDxuZ3gtaW50bC10ZWwtaW5wdXQgaWQ9XCJvbmJvYXJkaW5nLXBob25lLWlucHV0XCIgY2xhc3M9XCJwaG9uZS1pbnB1dC1wcm9maWxlXCIgW2Nzc0NsYXNzXT1cIidpbnB1dC1waG9uZSdcIlxuICAgICAgICAgICAgICAgIFtwcmVmZXJyZWRDb3VudHJpZXNdPVwicHJlZmVycmVkQ291bnRyaWVzXCIgW2VuYWJsZUF1dG9Db3VudHJ5U2VsZWN0XT1cImZhbHNlXCIgW2VuYWJsZVBsYWNlaG9sZGVyXT1cInRydWVcIlxuICAgICAgICAgICAgICAgIFtjdXN0b21QbGFjZWhvbGRlcl09XCInUGhvbmUnXCIgW3NlbGVjdEZpcnN0Q291bnRyeV09XCJmYWxzZVwiIFtzZWxlY3RlZENvdW50cnlJU09dPVwiZmxhZyhmaWVsZC52YWx1ZSlcIlxuICAgICAgICAgICAgICAgIFttYXhMZW5ndGhdPVwiMTVcIiBbaW5wdXRJZF09XCJmaWVsZC5rZXlcIiBbcGhvbmVWYWxpZGF0aW9uXT1cInRydWVcIiBbc2VwYXJhdGVEaWFsQ29kZV09XCJzZXBhcmF0ZURpYWxDb2RlXCJcbiAgICAgICAgICAgICAgICBbbnVtYmVyRm9ybWF0XT1cIlBob25lTnVtYmVyRm9ybWF0Lk5hdGlvbmFsXCIgbmFtZT1cInBob25lXCIgKGlucHV0KT1cImNoZWNrUGhvbmUoZmllbGQudmFsdWUpXCJcbiAgICAgICAgICAgICAgICBbbmdNb2RlbE9wdGlvbnNdPVwie3N0YW5kYWxvbmU6IHRydWV9XCIgWyhuZ01vZGVsKV09XCJmaWVsZC52YWx1ZVwiPlxuICAgICAgICAgICAgPC9uZ3gtaW50bC10ZWwtaW5wdXQ+XG4gICAgICAgICAgICA8bWF0LWVycm9yICpuZ0lmPVwiaW52YWxpZGVWYWx1ZVwiPkxlIHTDqWzDqXBob25lIGVzdCBpbnZhbGlkZTwvbWF0LWVycm9yPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8bWF0LWZvcm0tZmllbGQgKm5nU3dpdGNoRGVmYXVsdCBjbGFzcz1cImZvcm0tZmllbGQgZmllbGQtc2l6ZVwiIGFwcGVhcmFuY2U9XCJvdXRsaW5lXCI+XG4gICAgICAgICAgICA8bWF0LWxhYmVsPnt7ZmllbGQubGFiZWx9fTwvbWF0LWxhYmVsPlxuICAgICAgICAgICAgPGlucHV0IFt0eXBlXT1cImZpZWxkLnR5cGVcIiBbcmVxdWlyZWRdPVwiZmllbGQuaXNNYW5kYXRvcnlcIiBtYXRJbnB1dCBbbmdNb2RlbE9wdGlvbnNdPVwie3N0YW5kYWxvbmU6IHRydWV9XCJcbiAgICAgICAgICAgICAgICBbKG5nTW9kZWwpXT1cImZpZWxkLnZhbHVlXCIgcGxhY2Vob2xkZXI9XCJcIj5cbiAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cbiAgICA8L25nLWNvbnRhaW5lcj5cbjwvZGl2PlxuPG5nLWNvbnRlbnQgc2VsZWN0PVwiLmNoaWxkXCI+PC9uZy1jb250ZW50PiJdfQ==