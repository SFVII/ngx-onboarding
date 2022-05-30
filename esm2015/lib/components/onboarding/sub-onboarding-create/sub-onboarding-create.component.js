import { COMMA, ENTER, SEMICOLON } from '@angular/cdk/keycodes';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CountryISO, PhoneNumberFormat } from 'ngx-intl-tel-input';
import { isValidPhoneNumber, parsePhoneNumber } from 'libphonenumber-js';
import { FormControl } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/material/slide-toggle";
import * as i3 from "@angular/forms";
import * as i4 from "ngx-intl-tel-input";
import * as i5 from "@angular/material/checkbox";
import * as i6 from "@angular/material/select";
import * as i7 from "@angular/material/core";
import * as i8 from "@angular/material/radio";
import * as i9 from "@angular/material/form-field";
import * as i10 from "@angular/material/input";
const _c0 = function () { return { standalone: true }; };
const _c1 = function () { return { display: "inine-block" }; };
function SubOnboardingCreateComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r393 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 8);
    i0.ɵɵelementStart(1, "span");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "mat-slide-toggle", 9);
    i0.ɵɵlistener("ngModelChange", function SubOnboardingCreateComponent_div_2_Template_mat_slide_toggle_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r393); const ctx_r392 = i0.ɵɵnextContext(); return ctx_r392.field.defaultValue = $event; });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r384 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r384.field.label);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", ctx_r384.field.defaultValue)("ngModelOptions", i0.ɵɵpureFunction0(4, _c0))("ngStyle", ctx_r384.field.selector && i0.ɵɵpureFunction0(5, _c1));
} }
function SubOnboardingCreateComponent_div_3_mat_select_3_mat_option_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 15);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const select_r396 = ctx.$implicit;
    i0.ɵɵproperty("value", select_r396.value);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", select_r396.value, "");
} }
function SubOnboardingCreateComponent_div_3_mat_select_3_Template(rf, ctx) { if (rf & 1) {
    const _r398 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-select", 13);
    i0.ɵɵlistener("ngModelChange", function SubOnboardingCreateComponent_div_3_mat_select_3_Template_mat_select_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r398); const ctx_r397 = i0.ɵɵnextContext(2); return ctx_r397.field.selector.value = $event; });
    i0.ɵɵtemplate(1, SubOnboardingCreateComponent_div_3_mat_select_3_mat_option_1_Template, 2, 2, "mat-option", 14);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r394 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngModel", ctx_r394.field.selector.value)("ngModelOptions", i0.ɵɵpureFunction0(3, _c0));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r394.field.selector.defaultValue);
} }
const _c2 = function () { return { "display": "inine-block" }; };
function SubOnboardingCreateComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r400 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 10);
    i0.ɵɵelementStart(1, "mat-checkbox", 11);
    i0.ɵɵlistener("ngModelChange", function SubOnboardingCreateComponent_div_3_Template_mat_checkbox_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r400); const ctx_r399 = i0.ɵɵnextContext(); return ctx_r399.field.value = $event; });
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, SubOnboardingCreateComponent_div_3_mat_select_3_Template, 2, 4, "mat-select", 12);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r385 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵclassMap(ctx_r385.checkSubForm(ctx_r385.field) ? "checkbox-title-active" : "");
    i0.ɵɵproperty("ngModel", ctx_r385.field.value)("required", ctx_r385.field.isMandatory)("ngModelOptions", i0.ɵɵpureFunction0(8, _c0))("ngStyle", ctx_r385.field.selector && i0.ɵɵpureFunction0(9, _c2));
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r385.field.label, " ");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r385.field.selector);
} }
function SubOnboardingCreateComponent_div_4_mat_checkbox_4_Template(rf, ctx) { if (rf & 1) {
    const _r404 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-checkbox", 18);
    i0.ɵɵlistener("ngModelChange", function SubOnboardingCreateComponent_div_4_mat_checkbox_4_Template_mat_checkbox_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r404); const opt_r402 = ctx.$implicit; return opt_r402.checked = $event; });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const opt_r402 = ctx.$implicit;
    const ctx_r401 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("checked", opt_r402.checked)("ngModel", opt_r402.checked)("required", ctx_r401.field.isMandatory)("ngModelOptions", i0.ɵɵpureFunction0(5, _c0));
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", opt_r402.value, " ");
} }
function SubOnboardingCreateComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 10);
    i0.ɵɵelementStart(1, "label");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 16);
    i0.ɵɵtemplate(4, SubOnboardingCreateComponent_div_4_mat_checkbox_4_Template, 2, 6, "mat-checkbox", 17);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r386 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r386.field.label);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r386.field.defaultValue);
} }
function SubOnboardingCreateComponent_div_5_mat_radio_button_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-radio-button", 15);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const opt_r407 = ctx.$implicit;
    i0.ɵɵproperty("value", opt_r407.value);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1("", opt_r407.value, " ");
} }
function SubOnboardingCreateComponent_div_5_mat_form_field_5_Template(rf, ctx) { if (rf & 1) {
    const _r409 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-form-field", 23);
    i0.ɵɵelementStart(1, "mat-label");
    i0.ɵɵtext(2, "Autre option");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "input", 24);
    i0.ɵɵlistener("ngModelChange", function SubOnboardingCreateComponent_div_5_mat_form_field_5_Template_input_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r409); const ctx_r408 = i0.ɵɵnextContext(2); return ctx_r408.field.otherValue = $event; });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r406 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("required", ctx_r406.field.isMandatory)("ngModelOptions", i0.ɵɵpureFunction0(3, _c0))("ngModel", ctx_r406.field.otherValue);
} }
function SubOnboardingCreateComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r411 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 19);
    i0.ɵɵelementStart(1, "label", 20);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "mat-radio-group", 21);
    i0.ɵɵlistener("ngModelChange", function SubOnboardingCreateComponent_div_5_Template_mat_radio_group_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r411); const ctx_r410 = i0.ɵɵnextContext(); return ctx_r410.field.value = $event; });
    i0.ɵɵtemplate(4, SubOnboardingCreateComponent_div_5_mat_radio_button_4_Template, 2, 2, "mat-radio-button", 14);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(5, SubOnboardingCreateComponent_div_5_mat_form_field_5_Template, 4, 4, "mat-form-field", 22);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r387 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r387.field.label, " ");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", ctx_r387.field.value)("required", ctx_r387.field.isMandatory);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r387.field.defaultValue);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", "autre" === ctx_r387.formatOther(ctx_r387.field.value));
} }
function SubOnboardingCreateComponent_div_6_mat_option_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 15);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const opt_r414 = ctx.$implicit;
    i0.ɵɵproperty("value", opt_r414.value);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", opt_r414.value, "");
} }
function SubOnboardingCreateComponent_div_6_mat_form_field_6_Template(rf, ctx) { if (rf & 1) {
    const _r416 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-form-field", 23);
    i0.ɵɵelementStart(1, "mat-label");
    i0.ɵɵtext(2, "Autre option");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "input", 24);
    i0.ɵɵlistener("ngModelChange", function SubOnboardingCreateComponent_div_6_mat_form_field_6_Template_input_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r416); const ctx_r415 = i0.ɵɵnextContext(2); return ctx_r415.field.otherValue = $event; });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r413 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("required", ctx_r413.field.isMandatory)("ngModelOptions", i0.ɵɵpureFunction0(3, _c0))("ngModel", ctx_r413.field.otherValue);
} }
function SubOnboardingCreateComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r418 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 19);
    i0.ɵɵelementStart(1, "mat-form-field", 25);
    i0.ɵɵelementStart(2, "mat-label");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "mat-select", 26);
    i0.ɵɵlistener("ngModelChange", function SubOnboardingCreateComponent_div_6_Template_mat_select_ngModelChange_4_listener($event) { i0.ɵɵrestoreView(_r418); const ctx_r417 = i0.ɵɵnextContext(); return ctx_r417.field.value = $event; });
    i0.ɵɵtemplate(5, SubOnboardingCreateComponent_div_6_mat_option_5_Template, 2, 2, "mat-option", 14);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(6, SubOnboardingCreateComponent_div_6_mat_form_field_6_Template, 4, 4, "mat-form-field", 22);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r388 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", ctx_r388.field.label, " ");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", ctx_r388.field.value)("ngModelOptions", i0.ɵɵpureFunction0(6, _c0))("required", ctx_r388.field.isMandatory);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r388.field.defaultValue);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", "autre" === ctx_r388.formatOther(ctx_r388.field.value));
} }
function SubOnboardingCreateComponent_mat_form_field_7_Template(rf, ctx) { if (rf & 1) {
    const _r420 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-form-field", 27);
    i0.ɵɵelementStart(1, "mat-label");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "textarea", 28);
    i0.ɵɵlistener("ngModelChange", function SubOnboardingCreateComponent_mat_form_field_7_Template_textarea_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r420); const ctx_r419 = i0.ɵɵnextContext(); return ctx_r419.field.value = $event; });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r389 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r389.field.label);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("required", ctx_r389.field.isMandatory)("ngModelOptions", i0.ɵɵpureFunction0(4, _c0))("ngModel", ctx_r389.field.value);
} }
function SubOnboardingCreateComponent_div_8_mat_error_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-error");
    i0.ɵɵtext(1, "Le t\u00E9l\u00E9phone est invalide");
    i0.ɵɵelementEnd();
} }
function SubOnboardingCreateComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r423 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 29);
    i0.ɵɵelementStart(1, "mat-label", 30);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "ngx-intl-tel-input", 31);
    i0.ɵɵlistener("input", function SubOnboardingCreateComponent_div_8_Template_ngx_intl_tel_input_input_3_listener() { i0.ɵɵrestoreView(_r423); const ctx_r422 = i0.ɵɵnextContext(); return ctx_r422.checkPhone(ctx_r422.field.value); })("ngModelChange", function SubOnboardingCreateComponent_div_8_Template_ngx_intl_tel_input_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r423); const ctx_r424 = i0.ɵɵnextContext(); return ctx_r424.field.value = $event; });
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(4, SubOnboardingCreateComponent_div_8_mat_error_4_Template, 2, 0, "mat-error", 32);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r390 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r390.field.label);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("cssClass", "input-phone")("preferredCountries", ctx_r390.preferredCountries)("enableAutoCountrySelect", false)("enablePlaceholder", true)("customPlaceholder", "Phone")("selectFirstCountry", false)("selectedCountryISO", ctx_r390.flag(ctx_r390.field.value))("maxLength", 15)("inputId", ctx_r390.field.key)("phoneValidation", true)("separateDialCode", ctx_r390.separateDialCode)("numberFormat", ctx_r390.PhoneNumberFormat.National)("ngModelOptions", i0.ɵɵpureFunction0(16, _c0))("ngModel", ctx_r390.field.value);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r390.invalideValue);
} }
function SubOnboardingCreateComponent_mat_form_field_9_Template(rf, ctx) { if (rf & 1) {
    const _r426 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-form-field", 33);
    i0.ɵɵelementStart(1, "mat-label");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "input", 34);
    i0.ɵɵlistener("ngModelChange", function SubOnboardingCreateComponent_mat_form_field_9_Template_input_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r426); const ctx_r425 = i0.ɵɵnextContext(); return ctx_r425.field.value = $event; });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r391 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r391.field.label);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("type", ctx_r391.field.type)("required", ctx_r391.field.isMandatory)("ngModelOptions", i0.ɵɵpureFunction0(5, _c0))("ngModel", ctx_r391.field.value);
} }
const _c3 = [[["", 8, "child"]]];
const _c4 = [".child"];
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
        var _a;
        if (other && typeof other !== 'boolean') {
            return (((_a = other) === null || _a === void 0 ? void 0 : _a.toLocaleLowerCase()) || '');
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
            this.field.value = phone["nationalNumber"];
        }
    }
}
SubOnboardingCreateComponent.ɵfac = function SubOnboardingCreateComponent_Factory(t) { return new (t || SubOnboardingCreateComponent)(); };
SubOnboardingCreateComponent.ɵcmp = i0.ɵɵdefineComponent({ type: SubOnboardingCreateComponent, selectors: [["lib-sub-create-onboarding"]], inputs: { field: "field", length: "length", i: "i", j: "j" }, outputs: { onAddKeywordFromInput: "onAddKeywordFromInput", onKeyPress: "onKeyPress", onDrop: "onDrop", onAddNewField: "onAddNewField", onRemoveField: "onRemoveField", onChangeType: "onChangeType", onRemoveKeyword: "onRemoveKeyword", onAddNewSubLevelField: "onAddNewSubLevelField", onExpendMore: "onExpendMore", onChangeLabel: "onChangeLabel", onCheckedChip: "onCheckedChip", onCheckValue: "onCheckValue" }, ngContentSelectors: _c4, decls: 11, vars: 8, consts: [[1, "field-item"], [3, "ngSwitch"], ["class", "flex-auto field-size toggle-button", 4, "ngSwitchCase"], ["class", "flex-auto w-30", 4, "ngSwitchCase"], ["class", "flex-auto w-30 field-size", 4, "ngSwitchCase"], ["class", "form-field full-width", "appearance", "outline", 4, "ngSwitchCase"], ["class", "form-field full-width tel-input", 4, "ngSwitchCase"], ["class", "form-field field-size", "appearance", "outline", 4, "ngSwitchDefault"], [1, "flex-auto", "field-size", "toggle-button"], [1, "form-field", 3, "ngModel", "ngModelOptions", "ngStyle", "ngModelChange"], [1, "flex-auto", "w-30"], [1, "form-field", 3, "ngModel", "required", "ngModelOptions", "ngStyle", "ngModelChange"], ["placeholder", "Company", "required", "", "style", "display: inline-block; width: 50%;", 3, "ngModel", "ngModelOptions", "ngModelChange", 4, "ngIf"], ["placeholder", "Company", "required", "", 2, "display", "inline-block", "width", "50%", 3, "ngModel", "ngModelOptions", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], [1, "onboarding-select", 2, "margin-top", "20px"], ["class", "form-field", "style", "display: block; margin-bottom: 5px; margin-top: 10px", 3, "checked", "ngModel", "required", "ngModelOptions", "ngModelChange", 4, "ngFor", "ngForOf"], [1, "form-field", 2, "display", "block", "margin-bottom", "5px", "margin-top", "10px", 3, "checked", "ngModel", "required", "ngModelOptions", "ngModelChange"], [1, "flex-auto", "w-30", "field-size"], [2, "display", "block"], ["aria-label", "Select an option", 1, "form-field", "radio-group", "field-size", 3, "ngModel", "required", "ngModelChange"], ["class", "form-field field-size other-option", "appearance", "outline", 4, "ngIf"], ["appearance", "outline", 1, "form-field", "field-size", "other-option"], ["type", "text", "matInput", "", "placeholder", "", 3, "required", "ngModelOptions", "ngModel", "ngModelChange"], ["appearance", "outline", 1, "mat-select", "flex-auto", "w-30", "field-size"], [3, "ngModel", "ngModelOptions", "required", "ngModelChange"], ["appearance", "outline", 1, "form-field", "full-width"], ["type", "text", "rows", "5", "matInput", "", "placeholder", "Description...", 3, "required", "ngModelOptions", "ngModel", "ngModelChange"], [1, "form-field", "full-width", "tel-input"], [1, "tel-label"], ["id", "onboarding-phone-input", "name", "phone", 1, "phone-input-profile", 3, "cssClass", "preferredCountries", "enableAutoCountrySelect", "enablePlaceholder", "customPlaceholder", "selectFirstCountry", "selectedCountryISO", "maxLength", "inputId", "phoneValidation", "separateDialCode", "numberFormat", "ngModelOptions", "ngModel", "input", "ngModelChange"], [4, "ngIf"], ["appearance", "outline", 1, "form-field", "field-size"], ["matInput", "", "placeholder", "", 3, "type", "required", "ngModelOptions", "ngModel", "ngModelChange"]], template: function SubOnboardingCreateComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef(_c3);
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementContainerStart(1, 1);
        i0.ɵɵtemplate(2, SubOnboardingCreateComponent_div_2_Template, 4, 6, "div", 2);
        i0.ɵɵtemplate(3, SubOnboardingCreateComponent_div_3_Template, 4, 10, "div", 3);
        i0.ɵɵtemplate(4, SubOnboardingCreateComponent_div_4_Template, 5, 2, "div", 3);
        i0.ɵɵtemplate(5, SubOnboardingCreateComponent_div_5_Template, 6, 5, "div", 4);
        i0.ɵɵtemplate(6, SubOnboardingCreateComponent_div_6_Template, 7, 7, "div", 4);
        i0.ɵɵtemplate(7, SubOnboardingCreateComponent_mat_form_field_7_Template, 4, 5, "mat-form-field", 5);
        i0.ɵɵtemplate(8, SubOnboardingCreateComponent_div_8_Template, 5, 17, "div", 6);
        i0.ɵɵtemplate(9, SubOnboardingCreateComponent_mat_form_field_9_Template, 4, 6, "mat-form-field", 7);
        i0.ɵɵelementContainerEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵprojection(10);
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngSwitch", ctx.field.type);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngSwitchCase", "toggle");
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
    } }, directives: [i1.NgSwitch, i1.NgSwitchCase, i1.NgSwitchDefault, i2.MatSlideToggle, i3.NgControlStatus, i3.NgModel, i4.NativeElementInjectorDirective, i1.NgStyle, i5.MatCheckbox, i5.MatCheckboxRequiredValidator, i3.RequiredValidator, i1.NgIf, i6.MatSelect, i1.NgForOf, i7.MatOption, i8.MatRadioGroup, i8.MatRadioButton, i9.MatFormField, i9.MatLabel, i10.MatInput, i3.DefaultValueAccessor, i4.NgxIntlTelInputComponent, i9.MatError], styles: [".container[_ngcontent-%COMP%]{max-width:98%;margin:50px auto auto;padding-bottom:50px}.container[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:space-between}.input-category-name[_ngcontent-%COMP%]{font-size:15px;font-weight:500}.full-width[_ngcontent-%COMP%]{width:100%}.field-item[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;width:100%;flex-wrap:wrap;min-width:250px;position:relative}.field-item[_ngcontent-%COMP%]   .button-action[_ngcontent-%COMP%]{background-color:#6fe8d7;height:100%;margin:auto 15px auto auto;display:flex}.field-item[_ngcontent-%COMP%]   .button-action[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{box-shadow:none;background-color:transparent;color:#fff}.field-action[_ngcontent-%COMP%]{width:10%}.field-size[_ngcontent-%COMP%]   mat-checkbox[_ngcontent-%COMP%]{margin:20px}hr[_ngcontent-%COMP%]{margin:50px 0}  .mat-form-field-appearance-fill .mat-form-field-flex{background-color:#fff}.category-action[_ngcontent-%COMP%]{display:flex;width:100%}.delete-field[_ngcontent-%COMP%]{margin:auto 2%}.radio-group[_ngcontent-%COMP%]   .mat-radio-button[_ngcontent-%COMP%]{margin-right:10px}.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary[_ngcontent-%COMP%]{background-color:#3f51b5;color:#fff;min-height:20px;font-size:10px}.move-icons[_ngcontent-%COMP%]{cursor:move}.category-item[_ngcontent-%COMP%]{display:flex;align-items:baseline;width:100%;border:1px solid #dce4e9;border-radius:8px}  .readonly.mat-form-field-appearance-outline .mat-form-field-outline{color:transparent!important}.field-content[_ngcontent-%COMP%]{width:100%}.cdk-drag-preview[_ngcontent-%COMP%]{box-sizing:border-box;border-radius:4px;box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.cdk-drag-placeholder[_ngcontent-%COMP%]{opacity:0}.cdk-drag-animating[_ngcontent-%COMP%], .example-list.cdk-drop-list-dragging[_ngcontent-%COMP%]   .category-item[_ngcontent-%COMP%]:not(.cdk-drag-placeholder){transition:transform 250ms cubic-bezier(0,0,.2,1)}.add-button-container[_ngcontent-%COMP%]{background:no-repeat padding-box #fff;border:1px dashed #dce4e9;border-radius:8px;margin-top:10px;padding:10px;display:flex;justify-content:center;align-items:center;width:98%;margin-left:0;margin-bottom:22px}.add-button-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{display:flex;align-items:center;background-color:transparent;border:none;cursor:pointer;font:17px/26px Nexa Text;letter-spacing:0;color:#c2c8d5;box-shadow:none}.expand-button[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%]{font-size:48px;margin-top:-20px;margin-right:15px}.transparent-button[_ngcontent-%COMP%]{background-color:transparent!important;box-shadow:none!important;width:40px!important;padding:0!important;margin:0!important;min-width:auto!important}.expand-button[_ngcontent-%COMP%]{color:#5a607f!important;background-color:transparent!important;box-shadow:none!important}.checkbox-title-active[_ngcontent-%COMP%]{font-weight:700}.other-option[_ngcontent-%COMP%]{margin-left:10px}.flex-auto[_ngcontent-%COMP%]{width:100%}  .country-dropdown{min-width:unset!important}  .tel-input{position:relative}  .tel-input .tel-label{font-size:12px;color:rgba(0,0,0,.6);position:absolute;z-index:1;background-color:#fff;padding:0 2px;left:8px;top:-3px}  .phone-input-profile{padding-bottom:0;padding-top:0;display:block!important;max-width:100%;font:14px/20px \"Nexa Text\"!important;width:100%}  .phone-input-profile .iti{width:100%!important}  .phone-input-profile .iti input[type=tel]{margin-top:4px!important}  .phone-input-profile input{outline:0;padding:17px;border-radius:5px;border-width:1px;width:100%;border:1px solid rgba(0,0,0,.12)}.toggle-button[_ngcontent-%COMP%]{padding-top:15px;display:flex;align-items:center}.toggle-button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin-right:10px}.onboarding-select[_ngcontent-%COMP%]{display:-ms-grid;display:grid;-ms-grid-columns:(1fr)[6];grid-template-columns:repeat(6,1fr)}"] });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3ViLW9uYm9hcmRpbmctY3JlYXRlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL29uYm9hcmRpbmcvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9vbmJvYXJkaW5nL3N1Yi1vbmJvYXJkaW5nLWNyZWF0ZS9zdWItb25ib2FyZGluZy1jcmVhdGUuY29tcG9uZW50LnRzIiwibGliL2NvbXBvbmVudHMvb25ib2FyZGluZy9zdWItb25ib2FyZGluZy1jcmVhdGUvc3ViLW9uYm9hcmRpbmctY3JlYXRlLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDL0UsT0FBTyxFQUFFLFVBQVUsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ25FLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRXpFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7OztJQ0hyQyw4QkFDSTtJQUFBLDRCQUFNO0lBQUEsWUFBaUI7SUFBQSxpQkFBTztJQUM5QiwyQ0FFbUI7SUFGa0IscVBBQWdDO0lBRXJFLGlCQUFtQjtJQUN2QixpQkFBTTs7O0lBSkksZUFBaUI7SUFBakIsMENBQWlCO0lBQ2MsZUFBZ0M7SUFBaEMscURBQWdDLDhDQUFBLGtFQUFBOzs7SUFjakUsc0NBQ0k7SUFBQSxZQUFnQjtJQUFBLGlCQUFhOzs7SUFEOEIseUNBQXNCO0lBQ2pGLGVBQWdCO0lBQWhCLGlEQUFnQjs7OztJQUh4QixzQ0FFSTtJQUY4QiwrUEFBa0M7SUFFaEUsK0dBQ0k7SUFDUixpQkFBYTs7O0lBSnFCLHVEQUFrQyw4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QUFtQztRQUFuQyxrREFBbUM7UUFVbkMsZUFBdUI7UUFBdkIsc0NBQXVCO1FBY3ZCLGVBQXdCO1FBQXhCLHVDQUF3QjtRQWdCYixlQUEwQjtRQUExQix5Q0FBMEI7UUFLckMsZUFBcUI7UUFBckIsb0NBQXFCOztrRER2RHJCLDRCQUE0QjtjQUx4QyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLDJCQUEyQjtnQkFDckMsV0FBVyxFQUFFLHdDQUF3QztnQkFDckQsU0FBUyxFQUFFLENBQUMsd0NBQXdDLENBQUM7YUFDdEQ7O2tCQUVFLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLE1BQU07O2tCQUNOLE1BQU07O2tCQUNOLE1BQU07O2tCQUNOLE1BQU07O2tCQUNOLE1BQU07O2tCQUNOLE1BQU07O2tCQUNOLE1BQU07O2tCQUNOLE1BQU07O2tCQUNOLE1BQU07O2tCQUNOLE1BQU07O2tCQUNOLE1BQU07O2tCQUNOLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDT01NQSwgRU5URVIsIFNFTUlDT0xPTiB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9rZXljb2Rlcyc7XHJcbmltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ291bnRyeUlTTywgUGhvbmVOdW1iZXJGb3JtYXQgfSBmcm9tICduZ3gtaW50bC10ZWwtaW5wdXQnO1xyXG5pbXBvcnQgeyBpc1ZhbGlkUGhvbmVOdW1iZXIsIHBhcnNlUGhvbmVOdW1iZXIgfSBmcm9tICdsaWJwaG9uZW51bWJlci1qcyc7XHJcblxyXG5pbXBvcnQgeyBGb3JtQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbGliLXN1Yi1jcmVhdGUtb25ib2FyZGluZycsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3N1Yi1vbmJvYXJkaW5nLWNyZWF0ZS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vc3ViLW9uYm9hcmRpbmctY3JlYXRlLmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIFN1Yk9uYm9hcmRpbmdDcmVhdGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBJbnB1dCgpIGZpZWxkOiBhbnlcclxuICBASW5wdXQoKSBsZW5ndGg6IGFueVxyXG4gIEBJbnB1dCgpIGk6IGFueVxyXG4gIEBJbnB1dCgpIGo6IGFueVxyXG4gIEBPdXRwdXQoKSBvbkFkZEtleXdvcmRGcm9tSW5wdXQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKVxyXG4gIEBPdXRwdXQoKSBvbktleVByZXNzID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KClcclxuICBAT3V0cHV0KCkgb25Ecm9wID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KClcclxuICBAT3V0cHV0KCkgb25BZGROZXdGaWVsZCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpXHJcbiAgQE91dHB1dCgpIG9uUmVtb3ZlRmllbGQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKVxyXG4gIEBPdXRwdXQoKSBvbkNoYW5nZVR5cGUgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKVxyXG4gIEBPdXRwdXQoKSBvblJlbW92ZUtleXdvcmQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKVxyXG4gIEBPdXRwdXQoKSBvbkFkZE5ld1N1YkxldmVsRmllbGQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKVxyXG4gIEBPdXRwdXQoKSBvbkV4cGVuZE1vcmUgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKVxyXG4gIEBPdXRwdXQoKSBvbkNoYW5nZUxhYmVsID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KClcclxuICBAT3V0cHV0KCkgb25DaGVja2VkQ2hpcCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpXHJcbiAgQE91dHB1dCgpIG9uQ2hlY2tWYWx1ZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpXHJcblxyXG4gIGNoaXBDb250cm9sID0gbmV3IEZvcm1Db250cm9sKG5ldyBTZXQoKSk7XHJcbiAgcHJlZmVycmVkQ291bnRyaWVzOiBDb3VudHJ5SVNPW10gPSBbQ291bnRyeUlTTy5Vbml0ZWRTdGF0ZXMsIENvdW50cnlJU08uRnJhbmNlXTtcclxuICBQaG9uZU51bWJlckZvcm1hdCA9IFBob25lTnVtYmVyRm9ybWF0O1xyXG4gIHNlcGFyYXRvcktleXNDb2RlcyA9IFtFTlRFUiwgQ09NTUEsIFNFTUlDT0xPTl07XHJcbiAgaW52YWxpZGVWYWx1ZSA9IGZhbHNlO1xyXG4gIGN1cnJlbnRDaGlwID0gXCJcIlxyXG4gIHNlcGFyYXRlRGlhbENvZGUgPSBmYWxzZTtcclxuICBwcmV2VmFsdWUgPSBcIlwiXHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgfVxyXG5cclxuICBkcm9wKGV2ZW50KSB7XHJcbiAgICB0aGlzLm9uRHJvcC5lbWl0KGV2ZW50KVxyXG4gIH1cclxuXHJcbiAgYWRkS2V5d29yZEZyb21JbnB1dChldmVudCwgaSwgaikge1xyXG4gICAgdGhpcy5vbkFkZEtleXdvcmRGcm9tSW5wdXQuZW1pdCh7IGV2ZW50LCBwcmV2OiB0aGlzLnByZXZWYWx1ZSwgaSwgaiB9KTtcclxuICB9XHJcblxyXG4gIGtleVVwKGV2ZW50LCBpLCBqKSB7XHJcbiAgICB0aGlzLm9uS2V5UHJlc3MuZW1pdCh7IGV2ZW50LCBpLCBqIH0pXHJcbiAgfVxyXG5cclxuICBhZGROZXdGaWVsZChldmVudCwgaSkge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxyXG4gICAgdGhpcy5vbkFkZE5ld0ZpZWxkLmVtaXQoeyBldmVudCwgaSB9KVxyXG4gIH1cclxuXHJcbiAgcmVtb3ZlRmllbGQoZXZlbnQsIGksIGopIHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcclxuICAgIHRoaXMub25SZW1vdmVGaWVsZC5lbWl0KHsgaSwgaiB9KVxyXG4gIH1cclxuXHJcbiAgY2hhbmdlVHlwZSh0eXBlLCBpLCBqKSB7XHJcbiAgICB0aGlzLm9uQ2hhbmdlVHlwZS5lbWl0KHsgdHlwZSwgaSwgaiB9KVxyXG4gIH1cclxuXHJcbiAgcmVtb3ZlS2V5d29yZChldmVudCwgaSwgaikge1xyXG4gICAgdGhpcy5vblJlbW92ZUtleXdvcmQuZW1pdCh7IGV2ZW50LCBpLCBqIH0pXHJcbiAgfVxyXG4gIGFkZE5ld1N1YkxldmVsRmllbGQoZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICB0aGlzLm9uQWRkTmV3U3ViTGV2ZWxGaWVsZC5lbWl0KHRydWUpXHJcbiAgfVxyXG4gIGV4cGVuZE1vcmUoZSwgZmllbGQpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgdGhpcy5vbkV4cGVuZE1vcmUuZW1pdCh7IGV4cGFuZDogdHJ1ZSwgZmllbGQgfSlcclxuICB9XHJcblxyXG4gIGluZ29yZURlZmF1bHRBY3Rpb24oZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgfVxyXG5cclxuICBjaGFuZ2VMYWJlbChsYWJlbCwga2V5KSB7XHJcbiAgICB0aGlzLm9uQ2hhbmdlTGFiZWwuZW1pdCh7IGxhYmVsLCBrZXkgfSlcclxuICB9XHJcblxyXG4gIHRvZ2dsZUNoaXAgPSAoY2hpcDogYW55KSA9PiB7XHJcbiAgICB0aGlzLm9uQ2hlY2tlZENoaXAuZW1pdChjaGlwKVxyXG4gICAgLy8gY29uc3QgYWRkQ2hpcCA9ICgpID0+IHsgdGhpcy5jaGlwcy5hZGQoY2hpcCk7IH07XHJcbiAgICAvLyBjb25zdCByZW1vdmVDaGlwID0gKCkgPT4geyB0aGlzLmNoaXBzLmRlbGV0ZShjaGlwKTsgfTtcclxuICAgIC8vIHRoaXMuY2hpcHMuaGFzKGNoaXApID8gcmVtb3ZlQ2hpcCgpIDogYWRkQ2hpcCgpO1xyXG5cclxuICB9XHJcblxyXG4gIG9uRWRpdENoaXAoY2hpcCkge1xyXG4gICAgaWYgKGNoaXAudmFsdWUgPT09IHRoaXMuY3VycmVudENoaXApIHtcclxuICAgICAgdGhpcy5jdXJyZW50Q2hpcCA9IFwiXCJcclxuICAgICAgdGhpcy5wcmV2VmFsdWUgPSBcIlwiXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmN1cnJlbnRDaGlwID0gY2hpcC52YWx1ZTtcclxuICAgICAgdGhpcy5wcmV2VmFsdWUgPSBjaGlwLnZhbHVlXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXQgY2hpcHMoKSB7IHJldHVybiB0aGlzLmNoaXBDb250cm9sLnZhbHVlOyB9XHJcblxyXG4gIGZvcm1hdE90aGVyKG90aGVyOiBhbnkpIHtcclxuICAgIGlmIChvdGhlciAmJiB0eXBlb2Ygb3RoZXIgIT09ICdib29sZWFuJykge1xyXG4gICAgICByZXR1cm4gKG90aGVyPy50b0xvY2FsZUxvd2VyQ2FzZSgpIHx8ICcnKVxyXG4gICAgfVxyXG4gICAgcmV0dXJuICcnXHJcbiAgfVxyXG5cclxuXHJcbiAgY2hlY2tTdWJGb3JtKGZvcm1zKSB7XHJcbiAgICBsZXQgaGFzU3ViRm9ybSA9IGZhbHNlO1xyXG4gICAgaWYgKGZvcm1zLmZvcm1zICYmIGZvcm1zLmZvcm1zLmxlbmd0aCkge1xyXG4gICAgICBoYXNTdWJGb3JtID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIHJldHVybiBoYXNTdWJGb3JtXHJcbiAgfVxyXG5cclxuICBmbGFnKHZhbHVlKSB7XHJcbiAgICBjb25zdCB2YWx1ZVN0cmluZyA9IFN0cmluZyh2YWx1ZSlcclxuICAgIHJldHVybiB2YWx1ZVN0cmluZyAmJiBpc1ZhbGlkUGhvbmVOdW1iZXIodmFsdWVTdHJpbmcpID8gcGFyc2VQaG9uZU51bWJlcih2YWx1ZVN0cmluZykuY291bnRyeSA6IENvdW50cnlJU08uRnJhbmNlO1xyXG4gIH1cclxuXHJcbiAgY2hlY2tQaG9uZShwaG9uZSkge1xyXG4gICAgaWYgKHBob25lKSB7XHJcbiAgICAgIGxldCByZWdleCA9IG5ldyBSZWdFeHAoL1xcKyg5Wzk3Nl1cXGR8OFs5ODc1MzBdXFxkfDZbOTg3XVxcZHw1WzkwXVxcZHw0MlxcZHwzWzg3NV1cXGR8Mls5ODY1NDMyMV1cXGR8OVs4NTQzMjEwXXw4WzY0MjFdfDZbNjU0MzIxMF18NVs4NzY1NDMyMV18NFs5ODc2NTQzMTBdfDNbOTY0MzIxMF18Mls3MF18N3wxKVxcVypcXGRcXFcqXFxkXFxXKlxcZFxcVypcXGRcXFcqXFxkXFxXKlxcZFxcVypcXGRcXFcqXFxkXFxXKihcXGR7MSwyfSkkLylcclxuICAgICAgdGhpcy5pbnZhbGlkZVZhbHVlID0gIXJlZ2V4LnRlc3QocGhvbmVbJ2UxNjROdW1iZXInXSk7XHJcbiAgICAgIHRoaXMub25DaGVja1ZhbHVlLmVtaXQodGhpcy5pbnZhbGlkZVZhbHVlKVxyXG4gICAgfVxyXG4gICAgaWYgKHBob25lICYmIHBob25lW1wibmF0aW9uYWxOdW1iZXJcIl0gJiYgcGhvbmVbXCJuYXRpb25hbE51bWJlclwiXSAhPSAnJykge1xyXG4gICAgICBsZXQgcCA9IHBob25lWyduYXRpb25hbE51bWJlciddLnJlcGxhY2VBbGwoJyAnLCAnJyk7XHJcbiAgICAgIGxldCBuZXdwOiBhbnkgPSAnJztcclxuXHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmIChwLnNwbGl0KCcnKVtpXSkge1xyXG4gICAgICAgICAgaWYgKGkgJSAyID09IDAgJiYgaSA+IDApIHtcclxuICAgICAgICAgICAgbmV3cCArPSAnICc7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBuZXdwICs9IHAuc3BsaXQoJycpW2ldO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICB0aGlzLmZpZWxkLnZhbHVlID0gcGhvbmVbXCJuYXRpb25hbE51bWJlclwiXVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbn1cclxuIiwiPGRpdiBjbGFzcz1cImZpZWxkLWl0ZW1cIj5cclxuICAgIDxuZy1jb250YWluZXIgW25nU3dpdGNoXT1cImZpZWxkLnR5cGVcIj5cclxuICAgICAgICA8ZGl2ICpuZ1N3aXRjaENhc2U9XCIndG9nZ2xlJ1wiIGNsYXNzPVwiZmxleC1hdXRvIGZpZWxkLXNpemUgdG9nZ2xlLWJ1dHRvblwiPlxyXG4gICAgICAgICAgICA8c3Bhbj57eyBmaWVsZC5sYWJlbCB9fTwvc3Bhbj5cclxuICAgICAgICAgICAgPG1hdC1zbGlkZS10b2dnbGUgY2xhc3M9XCJmb3JtLWZpZWxkXCIgWyhuZ01vZGVsKV09XCJmaWVsZC5kZWZhdWx0VmFsdWVcIlxyXG4gICAgICAgICAgICAgICAgW25nTW9kZWxPcHRpb25zXT1cInsgc3RhbmRhbG9uZTogdHJ1ZSB9XCIgW25nU3R5bGVdPVwiZmllbGQuc2VsZWN0b3IgJiYgeyBkaXNwbGF5OiAnaW5pbmUtYmxvY2snIH1cIj5cclxuICAgICAgICAgICAgPC9tYXQtc2xpZGUtdG9nZ2xlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgKm5nU3dpdGNoQ2FzZT1cIidjaGVja2JveCdcIiBjbGFzcz1cImZsZXgtYXV0byB3LTMwXCI+XHJcbiAgICAgICAgICAgIDxtYXQtY2hlY2tib3ggY2xhc3M9XCJmb3JtLWZpZWxkXCIgW2NsYXNzXT1cImNoZWNrU3ViRm9ybShmaWVsZCkgPyAnY2hlY2tib3gtdGl0bGUtYWN0aXZlJzonJ1wiXHJcbiAgICAgICAgICAgICAgICBbKG5nTW9kZWwpXT1cImZpZWxkLnZhbHVlXCIgW3JlcXVpcmVkXT1cImZpZWxkLmlzTWFuZGF0b3J5XCIgW25nTW9kZWxPcHRpb25zXT1cIntzdGFuZGFsb25lOiB0cnVlfVwiXHJcbiAgICAgICAgICAgICAgICBbbmdTdHlsZV09XCJmaWVsZC5zZWxlY3RvciAmJiB7J2Rpc3BsYXknOiAnaW5pbmUtYmxvY2snfVwiPlxyXG4gICAgICAgICAgICAgICAge3tmaWVsZC5sYWJlbH19XHJcbiAgICAgICAgICAgIDwvbWF0LWNoZWNrYm94PlxyXG5cclxuXHJcbiAgICAgICAgICAgIDxtYXQtc2VsZWN0IHBsYWNlaG9sZGVyPVwiQ29tcGFueVwiIFsobmdNb2RlbCldPVwiZmllbGQuc2VsZWN0b3IudmFsdWVcIiBbbmdNb2RlbE9wdGlvbnNdPVwie3N0YW5kYWxvbmU6IHRydWV9XCJcclxuICAgICAgICAgICAgICAgIHJlcXVpcmVkICpuZ0lmPVwiZmllbGQuc2VsZWN0b3JcIiBzdHlsZT1cImRpc3BsYXk6IGlubGluZS1ibG9jazsgd2lkdGg6IDUwJTtcIj5cclxuICAgICAgICAgICAgICAgIDxtYXQtb3B0aW9uICpuZ0Zvcj1cImxldCBzZWxlY3Qgb2YgZmllbGQuc2VsZWN0b3IuZGVmYXVsdFZhbHVlXCIgW3ZhbHVlXT1cInNlbGVjdC52YWx1ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHt7c2VsZWN0LnZhbHVlfX08L21hdC1vcHRpb24+XHJcbiAgICAgICAgICAgIDwvbWF0LXNlbGVjdD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2ICpuZ1N3aXRjaENhc2U9XCInY2hlY2tib3hfbXVsdGlwbGUnXCIgY2xhc3M9XCJmbGV4LWF1dG8gdy0zMFwiPlxyXG4gICAgICAgICAgICA8bGFiZWw+e3tmaWVsZC5sYWJlbH19PC9sYWJlbD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm9uYm9hcmRpbmctc2VsZWN0XCIgc3R5bGU9XCJtYXJnaW4tdG9wOiAyMHB4O1wiPlxyXG4gICAgICAgICAgICAgICAgPG1hdC1jaGVja2JveCBjbGFzcz1cImZvcm0tZmllbGRcIiBzdHlsZT1cImRpc3BsYXk6IGJsb2NrOyBtYXJnaW4tYm90dG9tOiA1cHg7IG1hcmdpbi10b3A6IDEwcHhcIlxyXG4gICAgICAgICAgICAgICAgICAgICpuZ0Zvcj1cImxldCBvcHQgb2YgZmllbGQuZGVmYXVsdFZhbHVlXCIgW2NoZWNrZWRdPVwib3B0LmNoZWNrZWRcIiBbKG5nTW9kZWwpXT1cIm9wdC5jaGVja2VkXCJcclxuICAgICAgICAgICAgICAgICAgICBbcmVxdWlyZWRdPVwiZmllbGQuaXNNYW5kYXRvcnlcIiBbbmdNb2RlbE9wdGlvbnNdPVwie3N0YW5kYWxvbmU6IHRydWV9XCI+XHJcbiAgICAgICAgICAgICAgICAgICAge3tvcHQudmFsdWV9fVxyXG4gICAgICAgICAgICAgICAgPC9tYXQtY2hlY2tib3g+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgKm5nU3dpdGNoQ2FzZT1cIidyYWRpbydcIiBjbGFzcz1cImZsZXgtYXV0byB3LTMwIGZpZWxkLXNpemVcIj5cclxuICAgICAgICAgICAgPGxhYmVsIHN0eWxlPVwiZGlzcGxheTogYmxvY2s7XCI+IHt7ZmllbGQubGFiZWx9fSA8L2xhYmVsPlxyXG4gICAgICAgICAgICA8bWF0LXJhZGlvLWdyb3VwIGNsYXNzPVwiZm9ybS1maWVsZCByYWRpby1ncm91cCBmaWVsZC1zaXplXCIgWyhuZ01vZGVsKV09XCJmaWVsZC52YWx1ZVwiXHJcbiAgICAgICAgICAgICAgICBbcmVxdWlyZWRdPVwiZmllbGQuaXNNYW5kYXRvcnlcIiBhcmlhLWxhYmVsPVwiU2VsZWN0IGFuIG9wdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgPG1hdC1yYWRpby1idXR0b24gKm5nRm9yPVwibGV0IG9wdCBvZiBmaWVsZC5kZWZhdWx0VmFsdWVcIiBbdmFsdWVdPVwib3B0LnZhbHVlXCI+e3tvcHQudmFsdWV9fVxyXG4gICAgICAgICAgICAgICAgPC9tYXQtcmFkaW8tYnV0dG9uPlxyXG4gICAgICAgICAgICA8L21hdC1yYWRpby1ncm91cD5cclxuICAgICAgICAgICAgPG1hdC1mb3JtLWZpZWxkICpuZ0lmPVwiJ2F1dHJlJz09PWZvcm1hdE90aGVyKGZpZWxkLnZhbHVlKVwiIGNsYXNzPVwiZm9ybS1maWVsZCBmaWVsZC1zaXplIG90aGVyLW9wdGlvblwiXHJcbiAgICAgICAgICAgICAgICBhcHBlYXJhbmNlPVwib3V0bGluZVwiPlxyXG4gICAgICAgICAgICAgICAgPG1hdC1sYWJlbD5BdXRyZSBvcHRpb248L21hdC1sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIFtyZXF1aXJlZF09XCJmaWVsZC5pc01hbmRhdG9yeVwiIG1hdElucHV0IFtuZ01vZGVsT3B0aW9uc109XCJ7c3RhbmRhbG9uZTogdHJ1ZX1cIlxyXG4gICAgICAgICAgICAgICAgICAgIFsobmdNb2RlbCldPVwiZmllbGQub3RoZXJWYWx1ZVwiIHBsYWNlaG9sZGVyPVwiXCI+XHJcbiAgICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiAqbmdTd2l0Y2hDYXNlPVwiJ3NlbGVjdCdcIiBjbGFzcz1cImZsZXgtYXV0byB3LTMwIGZpZWxkLXNpemVcIj5cclxuICAgICAgICAgICAgPG1hdC1mb3JtLWZpZWxkIGNsYXNzPVwiIG1hdC1zZWxlY3QgZmxleC1hdXRvIHctMzAgZmllbGQtc2l6ZVwiIGFwcGVhcmFuY2U9XCJvdXRsaW5lXCI+XHJcbiAgICAgICAgICAgICAgICA8bWF0LWxhYmVsPiB7e2ZpZWxkLmxhYmVsfX0gPC9tYXQtbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8bWF0LXNlbGVjdCBbKG5nTW9kZWwpXT1cImZpZWxkLnZhbHVlXCIgW25nTW9kZWxPcHRpb25zXT1cIntzdGFuZGFsb25lOiB0cnVlfVwiXHJcbiAgICAgICAgICAgICAgICAgICAgW3JlcXVpcmVkXT1cImZpZWxkLmlzTWFuZGF0b3J5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPG1hdC1vcHRpb24gKm5nRm9yPVwibGV0IG9wdCBvZiBmaWVsZC5kZWZhdWx0VmFsdWVcIiBbdmFsdWVdPVwib3B0LnZhbHVlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt7b3B0LnZhbHVlfX08L21hdC1vcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8L21hdC1zZWxlY3Q+XHJcbiAgICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgICAgIDxtYXQtZm9ybS1maWVsZCAqbmdJZj1cIidhdXRyZSc9PT1mb3JtYXRPdGhlcihmaWVsZC52YWx1ZSlcIiBjbGFzcz1cImZvcm0tZmllbGQgZmllbGQtc2l6ZSBvdGhlci1vcHRpb25cIlxyXG4gICAgICAgICAgICAgICAgYXBwZWFyYW5jZT1cIm91dGxpbmVcIj5cclxuICAgICAgICAgICAgICAgIDxtYXQtbGFiZWw+QXV0cmUgb3B0aW9uPC9tYXQtbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBbcmVxdWlyZWRdPVwiZmllbGQuaXNNYW5kYXRvcnlcIiBtYXRJbnB1dCBbbmdNb2RlbE9wdGlvbnNdPVwie3N0YW5kYWxvbmU6IHRydWV9XCJcclxuICAgICAgICAgICAgICAgICAgICBbKG5nTW9kZWwpXT1cImZpZWxkLm90aGVyVmFsdWVcIiBwbGFjZWhvbGRlcj1cIlwiPlxyXG4gICAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxtYXQtZm9ybS1maWVsZCAqbmdTd2l0Y2hDYXNlPVwiJ3RleHRhcmVhJ1wiIGNsYXNzPVwiZm9ybS1maWVsZCBmdWxsLXdpZHRoXCIgYXBwZWFyYW5jZT1cIm91dGxpbmVcIj5cclxuICAgICAgICAgICAgPG1hdC1sYWJlbD57e2ZpZWxkLmxhYmVsfX08L21hdC1sYWJlbD5cclxuICAgICAgICAgICAgPHRleHRhcmVhIHR5cGU9XCJ0ZXh0XCIgcm93cz1cIjVcIiBtYXRJbnB1dCBbcmVxdWlyZWRdPVwiZmllbGQuaXNNYW5kYXRvcnlcIiBbbmdNb2RlbE9wdGlvbnNdPVwie3N0YW5kYWxvbmU6IHRydWV9XCJcclxuICAgICAgICAgICAgICAgIFsobmdNb2RlbCldPVwiZmllbGQudmFsdWVcIiBwbGFjZWhvbGRlcj1cIkRlc2NyaXB0aW9uLi4uXCI+PC90ZXh0YXJlYT5cclxuICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgIDxkaXYgKm5nU3dpdGNoQ2FzZT1cIid0ZWwnXCIgY2xhc3M9XCJmb3JtLWZpZWxkIGZ1bGwtd2lkdGggdGVsLWlucHV0XCI+XHJcbiAgICAgICAgICAgIDxtYXQtbGFiZWwgY2xhc3M9XCJ0ZWwtbGFiZWxcIj57e2ZpZWxkLmxhYmVsfX08L21hdC1sYWJlbD5cclxuICAgICAgICAgICAgPG5neC1pbnRsLXRlbC1pbnB1dCBpZD1cIm9uYm9hcmRpbmctcGhvbmUtaW5wdXRcIiBjbGFzcz1cInBob25lLWlucHV0LXByb2ZpbGVcIiBbY3NzQ2xhc3NdPVwiJ2lucHV0LXBob25lJ1wiXHJcbiAgICAgICAgICAgICAgICBbcHJlZmVycmVkQ291bnRyaWVzXT1cInByZWZlcnJlZENvdW50cmllc1wiIFtlbmFibGVBdXRvQ291bnRyeVNlbGVjdF09XCJmYWxzZVwiIFtlbmFibGVQbGFjZWhvbGRlcl09XCJ0cnVlXCJcclxuICAgICAgICAgICAgICAgIFtjdXN0b21QbGFjZWhvbGRlcl09XCInUGhvbmUnXCIgW3NlbGVjdEZpcnN0Q291bnRyeV09XCJmYWxzZVwiIFtzZWxlY3RlZENvdW50cnlJU09dPVwiZmxhZyhmaWVsZC52YWx1ZSlcIlxyXG4gICAgICAgICAgICAgICAgW21heExlbmd0aF09XCIxNVwiIFtpbnB1dElkXT1cImZpZWxkLmtleVwiIFtwaG9uZVZhbGlkYXRpb25dPVwidHJ1ZVwiIFtzZXBhcmF0ZURpYWxDb2RlXT1cInNlcGFyYXRlRGlhbENvZGVcIlxyXG4gICAgICAgICAgICAgICAgW251bWJlckZvcm1hdF09XCJQaG9uZU51bWJlckZvcm1hdC5OYXRpb25hbFwiIG5hbWU9XCJwaG9uZVwiIChpbnB1dCk9XCJjaGVja1Bob25lKGZpZWxkLnZhbHVlKVwiXHJcbiAgICAgICAgICAgICAgICBbbmdNb2RlbE9wdGlvbnNdPVwie3N0YW5kYWxvbmU6IHRydWV9XCIgWyhuZ01vZGVsKV09XCJmaWVsZC52YWx1ZVwiPlxyXG4gICAgICAgICAgICA8L25neC1pbnRsLXRlbC1pbnB1dD5cclxuICAgICAgICAgICAgPG1hdC1lcnJvciAqbmdJZj1cImludmFsaWRlVmFsdWVcIj5MZSB0w6lsw6lwaG9uZSBlc3QgaW52YWxpZGU8L21hdC1lcnJvcj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPG1hdC1mb3JtLWZpZWxkICpuZ1N3aXRjaERlZmF1bHQgY2xhc3M9XCJmb3JtLWZpZWxkIGZpZWxkLXNpemVcIiBhcHBlYXJhbmNlPVwib3V0bGluZVwiPlxyXG4gICAgICAgICAgICA8bWF0LWxhYmVsPnt7ZmllbGQubGFiZWx9fTwvbWF0LWxhYmVsPlxyXG4gICAgICAgICAgICA8aW5wdXQgW3R5cGVdPVwiZmllbGQudHlwZVwiIFtyZXF1aXJlZF09XCJmaWVsZC5pc01hbmRhdG9yeVwiIG1hdElucHV0IFtuZ01vZGVsT3B0aW9uc109XCJ7c3RhbmRhbG9uZTogdHJ1ZX1cIlxyXG4gICAgICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJmaWVsZC52YWx1ZVwiIHBsYWNlaG9sZGVyPVwiXCI+XHJcbiAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgIDwvbmctY29udGFpbmVyPlxyXG48L2Rpdj5cclxuPG5nLWNvbnRlbnQgc2VsZWN0PVwiLmNoaWxkXCI+PC9uZy1jb250ZW50PiJdfQ==