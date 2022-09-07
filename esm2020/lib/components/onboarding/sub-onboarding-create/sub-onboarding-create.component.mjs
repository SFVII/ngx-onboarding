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
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 9)(1, "span");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "mat-slide-toggle", 10);
    i0.ɵɵlistener("ngModelChange", function SubOnboardingCreateComponent_div_2_Template_mat_slide_toggle_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r10); const ctx_r9 = i0.ɵɵnextContext(); return ctx_r9.field.defaultValue = $event; });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r0.field.label);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", ctx_r0.field.defaultValue)("ngModelOptions", i0.ɵɵpureFunction0(4, _c0))("ngStyle", ctx_r0.field.selector && i0.ɵɵpureFunction0(5, _c1));
} }
function SubOnboardingCreateComponent_div_3_mat_select_3_mat_option_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 16);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const select_r13 = ctx.$implicit;
    i0.ɵɵproperty("value", select_r13.value);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", select_r13.value, "");
} }
function SubOnboardingCreateComponent_div_3_mat_select_3_Template(rf, ctx) { if (rf & 1) {
    const _r15 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-select", 14);
    i0.ɵɵlistener("ngModelChange", function SubOnboardingCreateComponent_div_3_mat_select_3_Template_mat_select_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r15); const ctx_r14 = i0.ɵɵnextContext(2); return ctx_r14.field.selector.value = $event; });
    i0.ɵɵtemplate(1, SubOnboardingCreateComponent_div_3_mat_select_3_mat_option_1_Template, 2, 2, "mat-option", 15);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r11 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngModel", ctx_r11.field.selector.value)("ngModelOptions", i0.ɵɵpureFunction0(3, _c0));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r11.field.selector.defaultValue);
} }
const _c2 = function () { return { "display": "inine-block" }; };
function SubOnboardingCreateComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r17 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 11)(1, "mat-checkbox", 12);
    i0.ɵɵlistener("ngModelChange", function SubOnboardingCreateComponent_div_3_Template_mat_checkbox_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r17); const ctx_r16 = i0.ɵɵnextContext(); return ctx_r16.field.value = $event; });
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, SubOnboardingCreateComponent_div_3_mat_select_3_Template, 2, 4, "mat-select", 13);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵclassMap(ctx_r1.checkSubForm(ctx_r1.field) ? "checkbox-title-active" : "");
    i0.ɵɵproperty("ngModel", ctx_r1.field.value)("required", ctx_r1.field.isMandatory)("ngModelOptions", i0.ɵɵpureFunction0(8, _c0))("ngStyle", ctx_r1.field.selector && i0.ɵɵpureFunction0(9, _c2));
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r1.field.label, " ");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1.field.selector);
} }
function SubOnboardingCreateComponent_div_4_mat_checkbox_4_Template(rf, ctx) { if (rf & 1) {
    const _r21 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-checkbox", 19);
    i0.ɵɵlistener("ngModelChange", function SubOnboardingCreateComponent_div_4_mat_checkbox_4_Template_mat_checkbox_ngModelChange_0_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r21); const opt_r19 = restoredCtx.$implicit; return opt_r19.checked = $event; });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const opt_r19 = ctx.$implicit;
    const ctx_r18 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("checked", opt_r19.checked)("ngModel", opt_r19.checked)("required", ctx_r18.field.isMandatory)("ngModelOptions", i0.ɵɵpureFunction0(5, _c0));
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", opt_r19.value, " ");
} }
function SubOnboardingCreateComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 11)(1, "label");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 17);
    i0.ɵɵtemplate(4, SubOnboardingCreateComponent_div_4_mat_checkbox_4_Template, 2, 6, "mat-checkbox", 18);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r2.field.label);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r2.field.defaultValue);
} }
function SubOnboardingCreateComponent_div_5_mat_radio_button_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-radio-button", 16);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const opt_r24 = ctx.$implicit;
    i0.ɵɵproperty("value", opt_r24.value);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1("", opt_r24.value, " ");
} }
function SubOnboardingCreateComponent_div_5_mat_form_field_5_Template(rf, ctx) { if (rf & 1) {
    const _r26 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-form-field", 24)(1, "mat-label");
    i0.ɵɵtext(2, "Autre option");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "input", 25);
    i0.ɵɵlistener("ngModelChange", function SubOnboardingCreateComponent_div_5_mat_form_field_5_Template_input_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r26); const ctx_r25 = i0.ɵɵnextContext(2); return ctx_r25.field.otherValue = $event; });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r23 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("required", ctx_r23.field.isMandatory)("ngModelOptions", i0.ɵɵpureFunction0(3, _c0))("ngModel", ctx_r23.field.otherValue);
} }
function SubOnboardingCreateComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r28 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 20)(1, "label", 21);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "mat-radio-group", 22);
    i0.ɵɵlistener("ngModelChange", function SubOnboardingCreateComponent_div_5_Template_mat_radio_group_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r28); const ctx_r27 = i0.ɵɵnextContext(); return ctx_r27.field.value = $event; });
    i0.ɵɵtemplate(4, SubOnboardingCreateComponent_div_5_mat_radio_button_4_Template, 2, 2, "mat-radio-button", 15);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(5, SubOnboardingCreateComponent_div_5_mat_form_field_5_Template, 4, 4, "mat-form-field", 23);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r3.field.label, " ");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", ctx_r3.field.value)("required", ctx_r3.field.isMandatory);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r3.field.defaultValue);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", "autre" === ctx_r3.formatOther(ctx_r3.field.value));
} }
function SubOnboardingCreateComponent_div_6_mat_option_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 16);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const opt_r31 = ctx.$implicit;
    i0.ɵɵproperty("value", opt_r31.value);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", opt_r31.value, "");
} }
function SubOnboardingCreateComponent_div_6_mat_form_field_6_Template(rf, ctx) { if (rf & 1) {
    const _r33 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-form-field", 24)(1, "mat-label");
    i0.ɵɵtext(2, "Autre option");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "input", 25);
    i0.ɵɵlistener("ngModelChange", function SubOnboardingCreateComponent_div_6_mat_form_field_6_Template_input_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r33); const ctx_r32 = i0.ɵɵnextContext(2); return ctx_r32.field.otherValue = $event; });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r30 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("required", ctx_r30.field.isMandatory)("ngModelOptions", i0.ɵɵpureFunction0(3, _c0))("ngModel", ctx_r30.field.otherValue);
} }
function SubOnboardingCreateComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r35 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 20)(1, "mat-form-field", 26)(2, "mat-label");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "mat-select", 27);
    i0.ɵɵlistener("ngModelChange", function SubOnboardingCreateComponent_div_6_Template_mat_select_ngModelChange_4_listener($event) { i0.ɵɵrestoreView(_r35); const ctx_r34 = i0.ɵɵnextContext(); return ctx_r34.field.value = $event; });
    i0.ɵɵtemplate(5, SubOnboardingCreateComponent_div_6_mat_option_5_Template, 2, 2, "mat-option", 15);
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(6, SubOnboardingCreateComponent_div_6_mat_form_field_6_Template, 4, 4, "mat-form-field", 23);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", ctx_r4.field.label, " ");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", ctx_r4.field.value)("ngModelOptions", i0.ɵɵpureFunction0(6, _c0))("required", ctx_r4.field.isMandatory);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r4.field.defaultValue);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", "autre" === ctx_r4.formatOther(ctx_r4.field.value));
} }
function SubOnboardingCreateComponent_mat_form_field_7_Template(rf, ctx) { if (rf & 1) {
    const _r37 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-form-field", 28)(1, "mat-label");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "textarea", 29);
    i0.ɵɵlistener("ngModelChange", function SubOnboardingCreateComponent_mat_form_field_7_Template_textarea_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r37); const ctx_r36 = i0.ɵɵnextContext(); return ctx_r36.field.value = $event; });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r5.field.label);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("required", ctx_r5.field.isMandatory)("ngModelOptions", i0.ɵɵpureFunction0(4, _c0))("ngModel", ctx_r5.field.value);
} }
function SubOnboardingCreateComponent_div_8_mat_error_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-error");
    i0.ɵɵtext(1, "Le t\u00E9l\u00E9phone est invalide");
    i0.ɵɵelementEnd();
} }
function SubOnboardingCreateComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r40 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 30)(1, "mat-label", 31);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "ngx-intl-tel-input", 32);
    i0.ɵɵlistener("input", function SubOnboardingCreateComponent_div_8_Template_ngx_intl_tel_input_input_3_listener() { i0.ɵɵrestoreView(_r40); const ctx_r39 = i0.ɵɵnextContext(); return ctx_r39.checkPhone(ctx_r39.field.value); })("ngModelChange", function SubOnboardingCreateComponent_div_8_Template_ngx_intl_tel_input_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r40); const ctx_r41 = i0.ɵɵnextContext(); return ctx_r41.field.value = $event; });
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(4, SubOnboardingCreateComponent_div_8_mat_error_4_Template, 2, 0, "mat-error", 33);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r6 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r6.field.label);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("cssClass", "input-phone")("preferredCountries", ctx_r6.preferredCountries)("enableAutoCountrySelect", false)("enablePlaceholder", true)("customPlaceholder", "Phone")("selectFirstCountry", false)("selectedCountryISO", ctx_r6.flag(ctx_r6.field.value))("maxLength", 15)("inputId", ctx_r6.field.key)("phoneValidation", true)("separateDialCode", ctx_r6.separateDialCode)("numberFormat", ctx_r6.PhoneNumberFormat.National)("ngModelOptions", i0.ɵɵpureFunction0(16, _c0))("ngModel", ctx_r6.field.value);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r6.invalideValue);
} }
function SubOnboardingCreateComponent_mat_form_field_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-form-field", 34);
    i0.ɵɵelement(1, "mat-label")(2, "input", 35);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r7 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("type", ctx_r7.field.type);
} }
function SubOnboardingCreateComponent_mat_form_field_10_Template(rf, ctx) { if (rf & 1) {
    const _r43 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-form-field", 36)(1, "mat-label");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "input", 37);
    i0.ɵɵlistener("ngModelChange", function SubOnboardingCreateComponent_mat_form_field_10_Template_input_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r43); const ctx_r42 = i0.ɵɵnextContext(); return ctx_r42.field.value = $event; });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r8 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r8.field.label);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("type", ctx_r8.field.type)("required", ctx_r8.field.isMandatory)("ngModelOptions", i0.ɵɵpureFunction0(5, _c0))("ngModel", ctx_r8.field.value);
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
        if (other && typeof other !== 'boolean') {
            return (other?.toLocaleLowerCase() || '');
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
SubOnboardingCreateComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SubOnboardingCreateComponent, selectors: [["lib-sub-create-onboarding"]], inputs: { field: "field", length: "length", i: "i", j: "j" }, outputs: { onAddKeywordFromInput: "onAddKeywordFromInput", onKeyPress: "onKeyPress", onDrop: "onDrop", onAddNewField: "onAddNewField", onRemoveField: "onRemoveField", onChangeType: "onChangeType", onRemoveKeyword: "onRemoveKeyword", onAddNewSubLevelField: "onAddNewSubLevelField", onExpendMore: "onExpendMore", onChangeLabel: "onChangeLabel", onCheckedChip: "onCheckedChip", onCheckValue: "onCheckValue" }, ngContentSelectors: _c4, decls: 12, vars: 9, consts: [[1, "field-item"], [3, "ngSwitch"], ["class", "flex-auto field-size toggle-button", 4, "ngSwitchCase"], ["class", "flex-auto w-30", 4, "ngSwitchCase"], ["class", "flex-auto w-30 field-size", 4, "ngSwitchCase"], ["class", "form-field full-width", "appearance", "outline", 4, "ngSwitchCase"], ["class", "form-field full-width tel-input", 4, "ngSwitchCase"], ["class", "form-field field-size", "appearance", "outline", "style", "opacity:0 ;", 4, "ngSwitchCase"], ["class", "form-field field-size", "appearance", "outline", 4, "ngSwitchDefault"], [1, "flex-auto", "field-size", "toggle-button"], [1, "form-field", 3, "ngModel", "ngModelOptions", "ngStyle", "ngModelChange"], [1, "flex-auto", "w-30"], [1, "form-field", 2, "margin-right", "10px", 3, "ngModel", "required", "ngModelOptions", "ngStyle", "ngModelChange"], ["placeholder", "Company", "required", "", "style", "display: inline-block; width: 50%;", 3, "ngModel", "ngModelOptions", "ngModelChange", 4, "ngIf"], ["placeholder", "Company", "required", "", 2, "display", "inline-block", "width", "50%", 3, "ngModel", "ngModelOptions", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], [1, "onboarding-select", 2, "margin-top", "20px"], ["class", "form-field", "style", "display: block; margin-bottom: 5px; margin-top: 10px;margin-right: 10px;", 3, "checked", "ngModel", "required", "ngModelOptions", "ngModelChange", 4, "ngFor", "ngForOf"], [1, "form-field", 2, "display", "block", "margin-bottom", "5px", "margin-top", "10px", "margin-right", "10px", 3, "checked", "ngModel", "required", "ngModelOptions", "ngModelChange"], [1, "flex-auto", "w-30", "field-size"], [2, "display", "block"], ["aria-label", "Select an option", 1, "form-field", "radio-group", "field-size", 3, "ngModel", "required", "ngModelChange"], ["class", "form-field field-size other-option", "appearance", "outline", 4, "ngIf"], ["appearance", "outline", 1, "form-field", "field-size", "other-option"], ["type", "text", "matInput", "", "placeholder", "", 3, "required", "ngModelOptions", "ngModel", "ngModelChange"], ["appearance", "outline", 1, "mat-select", "flex-auto", "w-30", "field-size"], [3, "ngModel", "ngModelOptions", "required", "ngModelChange"], ["appearance", "outline", 1, "form-field", "full-width"], ["type", "text", "rows", "5", "matInput", "", "placeholder", "Description...", 3, "required", "ngModelOptions", "ngModel", "ngModelChange"], [1, "form-field", "full-width", "tel-input"], [1, "tel-label"], ["id", "onboarding-phone-input", "name", "phone", 1, "phone-input-profile", 3, "cssClass", "preferredCountries", "enableAutoCountrySelect", "enablePlaceholder", "customPlaceholder", "selectFirstCountry", "selectedCountryISO", "maxLength", "inputId", "phoneValidation", "separateDialCode", "numberFormat", "ngModelOptions", "ngModel", "input", "ngModelChange"], [4, "ngIf"], ["appearance", "outline", 1, "form-field", "field-size", 2, "opacity", "0"], ["disabled", "true", "matInput", "", 3, "type"], ["appearance", "outline", 1, "form-field", "field-size"], ["matInput", "", "placeholder", "", 3, "type", "required", "ngModelOptions", "ngModel", "ngModelChange"]], template: function SubOnboardingCreateComponent_Template(rf, ctx) { if (rf & 1) {
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
        i0.ɵɵtemplate(9, SubOnboardingCreateComponent_mat_form_field_9_Template, 3, 1, "mat-form-field", 7);
        i0.ɵɵtemplate(10, SubOnboardingCreateComponent_mat_form_field_10_Template, 4, 6, "mat-form-field", 8);
        i0.ɵɵelementContainerEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵprojection(11);
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
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngSwitchCase", "none");
    } }, directives: [i1.NgSwitch, i1.NgSwitchCase, i2.MatSlideToggle, i3.NgControlStatus, i3.NgModel, i4.NativeElementInjectorDirective, i1.NgStyle, i5.MatCheckbox, i5.MatCheckboxRequiredValidator, i3.RequiredValidator, i1.NgIf, i6.MatSelect, i1.NgForOf, i7.MatOption, i8.MatRadioGroup, i8.MatRadioButton, i9.MatFormField, i9.MatLabel, i10.MatInput, i3.DefaultValueAccessor, i4.NgxIntlTelInputComponent, i9.MatError, i1.NgSwitchDefault], styles: [".container[_ngcontent-%COMP%]{max-width:98%;margin:50px auto auto;padding-bottom:50px}.container[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:space-between}.input-category-name[_ngcontent-%COMP%]{font-size:15px;font-weight:500}.full-width[_ngcontent-%COMP%]{width:100%}.field-item[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;width:100%;flex-wrap:wrap;position:relative}.field-item[_ngcontent-%COMP%]   .button-action[_ngcontent-%COMP%]{background-color:#6fe8d7;height:100%;margin:auto 15px auto auto;display:flex}.field-item[_ngcontent-%COMP%]   .button-action[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{box-shadow:none;background-color:transparent;color:#fff}.field-action[_ngcontent-%COMP%]{width:10%}.field-size[_ngcontent-%COMP%]   mat-checkbox[_ngcontent-%COMP%]{margin:20px}hr[_ngcontent-%COMP%]{margin:50px 0}  .mat-form-field-appearance-fill .mat-form-field-flex{background-color:#fff}.category-action[_ngcontent-%COMP%]{display:flex;width:100%}.delete-field[_ngcontent-%COMP%]{margin:auto 2%}.radio-group[_ngcontent-%COMP%]   .mat-radio-button[_ngcontent-%COMP%]{margin-right:10px}.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary[_ngcontent-%COMP%]{background-color:#3f51b5;color:#fff;min-height:20px;font-size:10px}.move-icons[_ngcontent-%COMP%]{cursor:move}.category-item[_ngcontent-%COMP%]{display:flex;align-items:baseline;width:100%;border:1px solid #dce4e9;border-radius:8px}  .readonly.mat-form-field-appearance-outline .mat-form-field-outline{color:transparent!important}.field-content[_ngcontent-%COMP%]{width:100%}.cdk-drag-preview[_ngcontent-%COMP%]{box-sizing:border-box;border-radius:4px;box-shadow:0 5px 5px -3px #0003,0 8px 10px 1px #00000024,0 3px 14px 2px #0000001f}.cdk-drag-placeholder[_ngcontent-%COMP%]{opacity:0}.cdk-drag-animating[_ngcontent-%COMP%]{transition:transform .25s cubic-bezier(0,0,.2,1)}.example-list.cdk-drop-list-dragging[_ngcontent-%COMP%]   .category-item[_ngcontent-%COMP%]:not(.cdk-drag-placeholder){transition:transform .25s cubic-bezier(0,0,.2,1)}.add-button-container[_ngcontent-%COMP%]{background:#ffffff 0% 0% no-repeat padding-box;border:1px dashed #dce4e9;border-radius:8px;margin-top:10px;padding:10px;display:flex;justify-content:center;align-items:center;width:98%;margin-left:0;margin-bottom:22px}.add-button-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{display:flex;align-items:center;background-color:transparent;border:none;cursor:pointer;letter-spacing:0px;color:#c2c8d5;box-shadow:none}.expand-button[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%]{font-size:48px;margin-top:-20px;margin-right:15px}.transparent-button[_ngcontent-%COMP%]{background-color:transparent!important;box-shadow:none!important;width:40px!important;padding:0!important;margin:0!important;min-width:auto!important}.expand-button[_ngcontent-%COMP%]{color:#5a607f!important;background-color:transparent!important;box-shadow:none!important}.checkbox-title-active[_ngcontent-%COMP%]{font-weight:700}.other-option[_ngcontent-%COMP%]{margin-left:10px}.flex-auto[_ngcontent-%COMP%]{width:100%}  .country-dropdown{min-width:unset!important}  .tel-input{position:relative}  .tel-input .tel-label{font-size:12px;color:#0009;position:absolute;z-index:1;background-color:#fff;padding:0 2px;left:8px;top:-3px}  .phone-input-profile{padding-bottom:0;padding-top:0;display:block!important;max-width:100%;width:100%}  .phone-input-profile .iti{width:100%!important}  .phone-input-profile .iti input[type=tel]{margin-top:4px!important}  .phone-input-profile input{outline:none;padding:17px;border-radius:5px;border-color:#0000001f;border-width:1px;width:100%;border:1px solid rgba(0,0,0,.12)}.toggle-button[_ngcontent-%COMP%]{padding-top:15px;display:flex;align-items:center}.toggle-button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin-right:10px}.onboarding-select[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(6,1fr)}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SubOnboardingCreateComponent, [{
        type: Component,
        args: [{ selector: 'lib-sub-create-onboarding', template: "<div class=\"field-item\">\r\n    <ng-container [ngSwitch]=\"field.type\">\r\n        <div *ngSwitchCase=\"'toggle'\" class=\"flex-auto field-size toggle-button\">\r\n            <span>{{ field.label }}</span>\r\n            <mat-slide-toggle class=\"form-field\" [(ngModel)]=\"field.defaultValue\"\r\n                [ngModelOptions]=\"{ standalone: true }\" [ngStyle]=\"field.selector && { display: 'inine-block' }\">\r\n            </mat-slide-toggle>\r\n        </div>\r\n        <div *ngSwitchCase=\"'checkbox'\" class=\"flex-auto w-30\">\r\n            <mat-checkbox class=\"form-field\" style=\"margin-right: 10px;\"\r\n                [class]=\"checkSubForm(field) ? 'checkbox-title-active':''\" [(ngModel)]=\"field.value\"\r\n                [required]=\"field.isMandatory\" [ngModelOptions]=\"{standalone: true}\"\r\n                [ngStyle]=\"field.selector && {'display': 'inine-block'}\">\r\n                {{field.label}}\r\n            </mat-checkbox>\r\n\r\n\r\n            <mat-select placeholder=\"Company\" [(ngModel)]=\"field.selector.value\" [ngModelOptions]=\"{standalone: true}\"\r\n                required *ngIf=\"field.selector\" style=\"display: inline-block; width: 50%;\">\r\n                <mat-option *ngFor=\"let select of field.selector.defaultValue\" [value]=\"select.value\">\r\n                    {{select.value}}</mat-option>\r\n            </mat-select>\r\n        </div>\r\n        <div *ngSwitchCase=\"'checkbox_multiple'\" class=\"flex-auto w-30\">\r\n            <label>{{field.label}}</label>\r\n            <div class=\"onboarding-select\" style=\"margin-top: 20px;\">\r\n                <mat-checkbox class=\"form-field\"\r\n                    style=\"display: block; margin-bottom: 5px; margin-top: 10px;margin-right: 10px;\"\r\n                    *ngFor=\"let opt of field.defaultValue\" [checked]=\"opt.checked\" [(ngModel)]=\"opt.checked\"\r\n                    [required]=\"field.isMandatory\" [ngModelOptions]=\"{standalone: true}\">\r\n                    {{opt.value}}\r\n                </mat-checkbox>\r\n            </div>\r\n        </div>\r\n        <div *ngSwitchCase=\"'radio'\" class=\"flex-auto w-30 field-size\">\r\n            <label style=\"display: block;\"> {{field.label}} </label>\r\n            <mat-radio-group class=\"form-field radio-group field-size\" [(ngModel)]=\"field.value\"\r\n                [required]=\"field.isMandatory\" aria-label=\"Select an option\">\r\n                <mat-radio-button *ngFor=\"let opt of field.defaultValue\" [value]=\"opt.value\">{{opt.value}}\r\n                </mat-radio-button>\r\n            </mat-radio-group>\r\n            <mat-form-field *ngIf=\"'autre'===formatOther(field.value)\" class=\"form-field field-size other-option\"\r\n                appearance=\"outline\">\r\n                <mat-label>Autre option</mat-label>\r\n                <input type=\"text\" [required]=\"field.isMandatory\" matInput [ngModelOptions]=\"{standalone: true}\"\r\n                    [(ngModel)]=\"field.otherValue\" placeholder=\"\">\r\n            </mat-form-field>\r\n        </div>\r\n        <div *ngSwitchCase=\"'select'\" class=\"flex-auto w-30 field-size\">\r\n            <mat-form-field class=\" mat-select flex-auto w-30 field-size\" appearance=\"outline\">\r\n                <mat-label> {{field.label}} </mat-label>\r\n                <mat-select [(ngModel)]=\"field.value\" [ngModelOptions]=\"{standalone: true}\"\r\n                    [required]=\"field.isMandatory\">\r\n                    <mat-option *ngFor=\"let opt of field.defaultValue\" [value]=\"opt.value\">\r\n                        {{opt.value}}</mat-option>\r\n                </mat-select>\r\n            </mat-form-field>\r\n            <mat-form-field *ngIf=\"'autre'===formatOther(field.value)\" class=\"form-field field-size other-option\"\r\n                appearance=\"outline\">\r\n                <mat-label>Autre option</mat-label>\r\n                <input type=\"text\" [required]=\"field.isMandatory\" matInput [ngModelOptions]=\"{standalone: true}\"\r\n                    [(ngModel)]=\"field.otherValue\" placeholder=\"\">\r\n            </mat-form-field>\r\n        </div>\r\n        <mat-form-field *ngSwitchCase=\"'textarea'\" class=\"form-field full-width\" appearance=\"outline\">\r\n            <mat-label>{{field.label}}</mat-label>\r\n            <textarea type=\"text\" rows=\"5\" matInput [required]=\"field.isMandatory\" [ngModelOptions]=\"{standalone: true}\"\r\n                [(ngModel)]=\"field.value\" placeholder=\"Description...\"></textarea>\r\n        </mat-form-field>\r\n        <div *ngSwitchCase=\"'tel'\" class=\"form-field full-width tel-input\">\r\n            <mat-label class=\"tel-label\">{{field.label}}</mat-label>\r\n            <ngx-intl-tel-input id=\"onboarding-phone-input\" class=\"phone-input-profile\" [cssClass]=\"'input-phone'\"\r\n                [preferredCountries]=\"preferredCountries\" [enableAutoCountrySelect]=\"false\" [enablePlaceholder]=\"true\"\r\n                [customPlaceholder]=\"'Phone'\" [selectFirstCountry]=\"false\" [selectedCountryISO]=\"flag(field.value)\"\r\n                [maxLength]=\"15\" [inputId]=\"field.key\" [phoneValidation]=\"true\" [separateDialCode]=\"separateDialCode\"\r\n                [numberFormat]=\"PhoneNumberFormat.National\" name=\"phone\" (input)=\"checkPhone(field.value)\"\r\n                [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"field.value\">\r\n            </ngx-intl-tel-input>\r\n            <mat-error *ngIf=\"invalideValue\">Le t\u00E9l\u00E9phone est invalide</mat-error>\r\n        </div>\r\n        <mat-form-field *ngSwitchCase=\"'none'\" class=\"form-field field-size\" appearance=\"outline\" style=\"opacity:0 ;\">\r\n            <mat-label></mat-label>\r\n            <input [type]=\"field.type\" disabled=\"true\" matInput />\r\n        </mat-form-field>\r\n        <mat-form-field *ngSwitchDefault class=\"form-field field-size\" appearance=\"outline\">\r\n            <mat-label>{{field.label}}</mat-label>\r\n            <input [type]=\"field.type\" [required]=\"field.isMandatory\" matInput [ngModelOptions]=\"{standalone: true}\"\r\n                [(ngModel)]=\"field.value\" placeholder=\"\">\r\n        </mat-form-field>\r\n    </ng-container>\r\n</div>\r\n<ng-content select=\".child\"></ng-content>", styles: [".container{max-width:98%;margin:50px auto auto;padding-bottom:50px}.container .action{width:100%;display:flex;justify-content:space-between}.input-category-name{font-size:15px;font-weight:500}.full-width{width:100%}.field-item{display:flex;justify-content:space-between;align-items:center;width:100%;flex-wrap:wrap;position:relative}.field-item .button-action{background-color:#6fe8d7;height:100%;margin:auto 15px auto auto;display:flex}.field-item .button-action button{box-shadow:none;background-color:transparent;color:#fff}.field-action{width:10%}.field-size mat-checkbox{margin:20px}hr{margin:50px 0}::ng-deep .mat-form-field-appearance-fill .mat-form-field-flex{background-color:#fff}.category-action{display:flex;width:100%}.delete-field{margin:auto 2%}.radio-group .mat-radio-button{margin-right:10px}.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary{background-color:#3f51b5;color:#fff;min-height:20px;font-size:10px}.move-icons{cursor:move}.category-item{display:flex;align-items:baseline;width:100%;border:1px solid #dce4e9;border-radius:8px}::ng-deep .readonly.mat-form-field-appearance-outline .mat-form-field-outline{color:transparent!important}.field-content{width:100%}.cdk-drag-preview{box-sizing:border-box;border-radius:4px;box-shadow:0 5px 5px -3px #0003,0 8px 10px 1px #00000024,0 3px 14px 2px #0000001f}.cdk-drag-placeholder{opacity:0}.cdk-drag-animating{transition:transform .25s cubic-bezier(0,0,.2,1)}.example-list.cdk-drop-list-dragging .category-item:not(.cdk-drag-placeholder){transition:transform .25s cubic-bezier(0,0,.2,1)}.add-button-container{background:#ffffff 0% 0% no-repeat padding-box;border:1px dashed #dce4e9;border-radius:8px;margin-top:10px;padding:10px;display:flex;justify-content:center;align-items:center;width:98%;margin-left:0;margin-bottom:22px}.add-button-container button{display:flex;align-items:center;background-color:transparent;border:none;cursor:pointer;letter-spacing:0px;color:#c2c8d5;box-shadow:none}.expand-button .material-icons{font-size:48px;margin-top:-20px;margin-right:15px}.transparent-button{background-color:transparent!important;box-shadow:none!important;width:40px!important;padding:0!important;margin:0!important;min-width:auto!important}.expand-button{color:#5a607f!important;background-color:transparent!important;box-shadow:none!important}.checkbox-title-active{font-weight:700}.other-option{margin-left:10px}.flex-auto{width:100%}::ng-deep .country-dropdown{min-width:unset!important}::ng-deep .tel-input{position:relative}::ng-deep .tel-input .tel-label{font-size:12px;color:#0009;position:absolute;z-index:1;background-color:#fff;padding:0 2px;left:8px;top:-3px}::ng-deep .phone-input-profile{padding-bottom:0;padding-top:0;display:block!important;max-width:100%;width:100%}::ng-deep .phone-input-profile .iti{width:100%!important}::ng-deep .phone-input-profile .iti input[type=tel]{margin-top:4px!important}::ng-deep .phone-input-profile input{outline:none;padding:17px;border-radius:5px;border-color:#0000001f;border-width:1px;width:100%;border:1px solid rgba(0,0,0,.12)}.toggle-button{padding-top:15px;display:flex;align-items:center}.toggle-button span{margin-right:10px}.onboarding-select{display:grid;grid-template-columns:repeat(6,1fr)}\n"] }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3ViLW9uYm9hcmRpbmctY3JlYXRlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL29uYm9hcmRpbmcvc3JjL2xpYi9jb21wb25lbnRzL29uYm9hcmRpbmcvc3ViLW9uYm9hcmRpbmctY3JlYXRlL3N1Yi1vbmJvYXJkaW5nLWNyZWF0ZS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9vbmJvYXJkaW5nL3NyYy9saWIvY29tcG9uZW50cy9vbmJvYXJkaW5nL3N1Yi1vbmJvYXJkaW5nLWNyZWF0ZS9zdWItb25ib2FyZGluZy1jcmVhdGUuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDaEUsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvRSxPQUFPLEVBQUUsVUFBVSxFQUFFLGlCQUFpQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDbkUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLGdCQUFnQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFekUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0lDSHJDLDhCQUF5RSxXQUFBO0lBQy9ELFlBQWlCO0lBQUEsaUJBQU87SUFDOUIsNENBQ3FHO0lBRGhFLGdQQUFnQztJQUVyRSxpQkFBbUIsRUFBQTs7O0lBSGIsZUFBaUI7SUFBakIsd0NBQWlCO0lBQ2MsZUFBZ0M7SUFBaEMsbURBQWdDLDhDQUFBLGdFQUFBOzs7SUFlakUsc0NBQXNGO0lBQ2xGLFlBQWdCO0lBQUEsaUJBQWE7OztJQUQ4Qix3Q0FBc0I7SUFDakYsZUFBZ0I7SUFBaEIsZ0RBQWdCOzs7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MEJBQWU7UUFDbkIsaUJBQU07UUFDTixtQkFBeUM7O1FBMUZ2QixlQUF1QjtRQUF2Qix5Q0FBdUI7UUFDM0IsZUFBc0I7UUFBdEIsdUNBQXNCO1FBTXRCLGVBQXdCO1FBQXhCLHlDQUF3QjtRQWV4QixlQUFpQztRQUFqQyxrREFBaUM7UUFXakMsZUFBcUI7UUFBckIsc0NBQXFCO1FBY3JCLGVBQXNCO1FBQXRCLHVDQUFzQjtRQWdCWCxlQUF3QjtRQUF4Qix5Q0FBd0I7UUFLbkMsZUFBbUI7UUFBbkIsb0NBQW1CO1FBV1IsZUFBb0I7UUFBcEIscUNBQW9COzt1RkRwRWhDLDRCQUE0QjtjQUx4QyxTQUFTOzJCQUNFLDJCQUEyQjtzQ0FLNUIsS0FBSztrQkFBYixLQUFLO1lBQ0csTUFBTTtrQkFBZCxLQUFLO1lBQ0csQ0FBQztrQkFBVCxLQUFLO1lBQ0csQ0FBQztrQkFBVCxLQUFLO1lBQ0kscUJBQXFCO2tCQUE5QixNQUFNO1lBQ0csVUFBVTtrQkFBbkIsTUFBTTtZQUNHLE1BQU07a0JBQWYsTUFBTTtZQUNHLGFBQWE7a0JBQXRCLE1BQU07WUFDRyxhQUFhO2tCQUF0QixNQUFNO1lBQ0csWUFBWTtrQkFBckIsTUFBTTtZQUNHLGVBQWU7a0JBQXhCLE1BQU07WUFDRyxxQkFBcUI7a0JBQTlCLE1BQU07WUFDRyxZQUFZO2tCQUFyQixNQUFNO1lBQ0csYUFBYTtrQkFBdEIsTUFBTTtZQUNHLGFBQWE7a0JBQXRCLE1BQU07WUFDRyxZQUFZO2tCQUFyQixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ09NTUEsIEVOVEVSLCBTRU1JQ09MT04gfSBmcm9tICdAYW5ndWxhci9jZGsva2V5Y29kZXMnO1xyXG5pbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvdW50cnlJU08sIFBob25lTnVtYmVyRm9ybWF0IH0gZnJvbSAnbmd4LWludGwtdGVsLWlucHV0JztcclxuaW1wb3J0IHsgaXNWYWxpZFBob25lTnVtYmVyLCBwYXJzZVBob25lTnVtYmVyIH0gZnJvbSAnbGlicGhvbmVudW1iZXItanMnO1xyXG5cclxuaW1wb3J0IHsgRm9ybUNvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2xpYi1zdWItY3JlYXRlLW9uYm9hcmRpbmcnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9zdWItb25ib2FyZGluZy1jcmVhdGUuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3N1Yi1vbmJvYXJkaW5nLWNyZWF0ZS5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTdWJPbmJvYXJkaW5nQ3JlYXRlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBASW5wdXQoKSBmaWVsZDogYW55XHJcbiAgQElucHV0KCkgbGVuZ3RoOiBhbnlcclxuICBASW5wdXQoKSBpOiBhbnlcclxuICBASW5wdXQoKSBqOiBhbnlcclxuICBAT3V0cHV0KCkgb25BZGRLZXl3b3JkRnJvbUlucHV0ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KClcclxuICBAT3V0cHV0KCkgb25LZXlQcmVzcyA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpXHJcbiAgQE91dHB1dCgpIG9uRHJvcCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpXHJcbiAgQE91dHB1dCgpIG9uQWRkTmV3RmllbGQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKVxyXG4gIEBPdXRwdXQoKSBvblJlbW92ZUZpZWxkID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KClcclxuICBAT3V0cHV0KCkgb25DaGFuZ2VUeXBlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KClcclxuICBAT3V0cHV0KCkgb25SZW1vdmVLZXl3b3JkID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KClcclxuICBAT3V0cHV0KCkgb25BZGROZXdTdWJMZXZlbEZpZWxkID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KClcclxuICBAT3V0cHV0KCkgb25FeHBlbmRNb3JlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KClcclxuICBAT3V0cHV0KCkgb25DaGFuZ2VMYWJlbCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpXHJcbiAgQE91dHB1dCgpIG9uQ2hlY2tlZENoaXAgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKVxyXG4gIEBPdXRwdXQoKSBvbkNoZWNrVmFsdWUgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKVxyXG5cclxuICBjaGlwQ29udHJvbCA9IG5ldyBGb3JtQ29udHJvbChuZXcgU2V0KCkpO1xyXG4gIHByZWZlcnJlZENvdW50cmllczogQ291bnRyeUlTT1tdID0gW0NvdW50cnlJU08uVW5pdGVkU3RhdGVzLCBDb3VudHJ5SVNPLkZyYW5jZV07XHJcbiAgUGhvbmVOdW1iZXJGb3JtYXQgPSBQaG9uZU51bWJlckZvcm1hdDtcclxuICBzZXBhcmF0b3JLZXlzQ29kZXMgPSBbRU5URVIsIENPTU1BLCBTRU1JQ09MT05dO1xyXG4gIGludmFsaWRlVmFsdWUgPSBmYWxzZTtcclxuICBjdXJyZW50Q2hpcCA9IFwiXCJcclxuICBzZXBhcmF0ZURpYWxDb2RlID0gZmFsc2U7XHJcbiAgcHJldlZhbHVlID0gXCJcIlxyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gIH1cclxuXHJcbiAgZHJvcChldmVudCkge1xyXG4gICAgdGhpcy5vbkRyb3AuZW1pdChldmVudClcclxuICB9XHJcblxyXG4gIGFkZEtleXdvcmRGcm9tSW5wdXQoZXZlbnQsIGksIGopIHtcclxuICAgIHRoaXMub25BZGRLZXl3b3JkRnJvbUlucHV0LmVtaXQoeyBldmVudCwgcHJldjogdGhpcy5wcmV2VmFsdWUsIGksIGogfSk7XHJcbiAgfVxyXG5cclxuICBrZXlVcChldmVudCwgaSwgaikge1xyXG4gICAgdGhpcy5vbktleVByZXNzLmVtaXQoeyBldmVudCwgaSwgaiB9KVxyXG4gIH1cclxuXHJcbiAgYWRkTmV3RmllbGQoZXZlbnQsIGkpIHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcclxuICAgIHRoaXMub25BZGROZXdGaWVsZC5lbWl0KHsgZXZlbnQsIGkgfSlcclxuICB9XHJcblxyXG4gIHJlbW92ZUZpZWxkKGV2ZW50LCBpLCBqKSB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICB0aGlzLm9uUmVtb3ZlRmllbGQuZW1pdCh7IGksIGogfSlcclxuICB9XHJcblxyXG4gIGNoYW5nZVR5cGUodHlwZSwgaSwgaikge1xyXG4gICAgdGhpcy5vbkNoYW5nZVR5cGUuZW1pdCh7IHR5cGUsIGksIGogfSlcclxuICB9XHJcblxyXG4gIHJlbW92ZUtleXdvcmQoZXZlbnQsIGksIGopIHtcclxuICAgIHRoaXMub25SZW1vdmVLZXl3b3JkLmVtaXQoeyBldmVudCwgaSwgaiB9KVxyXG4gIH1cclxuICBhZGROZXdTdWJMZXZlbEZpZWxkKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgdGhpcy5vbkFkZE5ld1N1YkxldmVsRmllbGQuZW1pdCh0cnVlKVxyXG4gIH1cclxuICBleHBlbmRNb3JlKGUsIGZpZWxkKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgIHRoaXMub25FeHBlbmRNb3JlLmVtaXQoeyBleHBhbmQ6IHRydWUsIGZpZWxkIH0pXHJcbiAgfVxyXG5cclxuICBpbmdvcmVEZWZhdWx0QWN0aW9uKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gIH1cclxuXHJcbiAgY2hhbmdlTGFiZWwobGFiZWwsIGtleSkge1xyXG4gICAgdGhpcy5vbkNoYW5nZUxhYmVsLmVtaXQoeyBsYWJlbCwga2V5IH0pXHJcbiAgfVxyXG5cclxuICB0b2dnbGVDaGlwID0gKGNoaXA6IGFueSkgPT4ge1xyXG4gICAgdGhpcy5vbkNoZWNrZWRDaGlwLmVtaXQoY2hpcClcclxuICAgIC8vIGNvbnN0IGFkZENoaXAgPSAoKSA9PiB7IHRoaXMuY2hpcHMuYWRkKGNoaXApOyB9O1xyXG4gICAgLy8gY29uc3QgcmVtb3ZlQ2hpcCA9ICgpID0+IHsgdGhpcy5jaGlwcy5kZWxldGUoY2hpcCk7IH07XHJcbiAgICAvLyB0aGlzLmNoaXBzLmhhcyhjaGlwKSA/IHJlbW92ZUNoaXAoKSA6IGFkZENoaXAoKTtcclxuXHJcbiAgfVxyXG5cclxuICBvbkVkaXRDaGlwKGNoaXApIHtcclxuICAgIGlmIChjaGlwLnZhbHVlID09PSB0aGlzLmN1cnJlbnRDaGlwKSB7XHJcbiAgICAgIHRoaXMuY3VycmVudENoaXAgPSBcIlwiXHJcbiAgICAgIHRoaXMucHJldlZhbHVlID0gXCJcIlxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5jdXJyZW50Q2hpcCA9IGNoaXAudmFsdWU7XHJcbiAgICAgIHRoaXMucHJldlZhbHVlID0gY2hpcC52YWx1ZVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0IGNoaXBzKCkgeyByZXR1cm4gdGhpcy5jaGlwQ29udHJvbC52YWx1ZTsgfVxyXG5cclxuICBmb3JtYXRPdGhlcihvdGhlcjogYW55KSB7XHJcbiAgICBpZiAob3RoZXIgJiYgdHlwZW9mIG90aGVyICE9PSAnYm9vbGVhbicpIHtcclxuICAgICAgcmV0dXJuIChvdGhlcj8udG9Mb2NhbGVMb3dlckNhc2UoKSB8fCAnJylcclxuICAgIH1cclxuICAgIHJldHVybiAnJ1xyXG4gIH1cclxuXHJcblxyXG4gIGNoZWNrU3ViRm9ybShmb3Jtcykge1xyXG4gICAgbGV0IGhhc1N1YkZvcm0gPSBmYWxzZTtcclxuICAgIGlmIChmb3Jtcy5mb3JtcyAmJiBmb3Jtcy5mb3Jtcy5sZW5ndGgpIHtcclxuICAgICAgaGFzU3ViRm9ybSA9IHRydWU7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gaGFzU3ViRm9ybVxyXG4gIH1cclxuXHJcbiAgZmxhZyh2YWx1ZSkge1xyXG4gICAgY29uc3QgdmFsdWVTdHJpbmcgPSBTdHJpbmcodmFsdWUpXHJcbiAgICByZXR1cm4gdmFsdWVTdHJpbmcgJiYgaXNWYWxpZFBob25lTnVtYmVyKHZhbHVlU3RyaW5nKSA/IHBhcnNlUGhvbmVOdW1iZXIodmFsdWVTdHJpbmcpLmNvdW50cnkgOiBDb3VudHJ5SVNPLkZyYW5jZTtcclxuICB9XHJcblxyXG4gIGNoZWNrUGhvbmUocGhvbmUpIHtcclxuICAgIGlmIChwaG9uZSkge1xyXG4gICAgICBsZXQgcmVnZXggPSBuZXcgUmVnRXhwKC9cXCsoOVs5NzZdXFxkfDhbOTg3NTMwXVxcZHw2Wzk4N11cXGR8NVs5MF1cXGR8NDJcXGR8M1s4NzVdXFxkfDJbOTg2NTQzMjFdXFxkfDlbODU0MzIxMF18OFs2NDIxXXw2WzY1NDMyMTBdfDVbODc2NTQzMjFdfDRbOTg3NjU0MzEwXXwzWzk2NDMyMTBdfDJbNzBdfDd8MSlcXFcqXFxkXFxXKlxcZFxcVypcXGRcXFcqXFxkXFxXKlxcZFxcVypcXGRcXFcqXFxkXFxXKlxcZFxcVyooXFxkezEsMn0pJC8pXHJcbiAgICAgIHRoaXMuaW52YWxpZGVWYWx1ZSA9ICFyZWdleC50ZXN0KHBob25lWydlMTY0TnVtYmVyJ10pO1xyXG4gICAgICB0aGlzLm9uQ2hlY2tWYWx1ZS5lbWl0KHRoaXMuaW52YWxpZGVWYWx1ZSlcclxuICAgIH1cclxuICAgIGlmIChwaG9uZSAmJiBwaG9uZVtcIm5hdGlvbmFsTnVtYmVyXCJdICYmIHBob25lW1wibmF0aW9uYWxOdW1iZXJcIl0gIT0gJycpIHtcclxuICAgICAgbGV0IHAgPSBwaG9uZVsnbmF0aW9uYWxOdW1iZXInXS5yZXBsYWNlQWxsKCcgJywgJycpO1xyXG4gICAgICBsZXQgbmV3cDogYW55ID0gJyc7XHJcblxyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHAubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBpZiAocC5zcGxpdCgnJylbaV0pIHtcclxuICAgICAgICAgIGlmIChpICUgMiA9PSAwICYmIGkgPiAwKSB7XHJcbiAgICAgICAgICAgIG5ld3AgKz0gJyAnO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgbmV3cCArPSBwLnNwbGl0KCcnKVtpXTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5maWVsZC52YWx1ZSA9IHBob25lW1wibmF0aW9uYWxOdW1iZXJcIl1cclxuICAgIH1cclxuICB9XHJcblxyXG59XHJcbiIsIjxkaXYgY2xhc3M9XCJmaWVsZC1pdGVtXCI+XHJcbiAgICA8bmctY29udGFpbmVyIFtuZ1N3aXRjaF09XCJmaWVsZC50eXBlXCI+XHJcbiAgICAgICAgPGRpdiAqbmdTd2l0Y2hDYXNlPVwiJ3RvZ2dsZSdcIiBjbGFzcz1cImZsZXgtYXV0byBmaWVsZC1zaXplIHRvZ2dsZS1idXR0b25cIj5cclxuICAgICAgICAgICAgPHNwYW4+e3sgZmllbGQubGFiZWwgfX08L3NwYW4+XHJcbiAgICAgICAgICAgIDxtYXQtc2xpZGUtdG9nZ2xlIGNsYXNzPVwiZm9ybS1maWVsZFwiIFsobmdNb2RlbCldPVwiZmllbGQuZGVmYXVsdFZhbHVlXCJcclxuICAgICAgICAgICAgICAgIFtuZ01vZGVsT3B0aW9uc109XCJ7IHN0YW5kYWxvbmU6IHRydWUgfVwiIFtuZ1N0eWxlXT1cImZpZWxkLnNlbGVjdG9yICYmIHsgZGlzcGxheTogJ2luaW5lLWJsb2NrJyB9XCI+XHJcbiAgICAgICAgICAgIDwvbWF0LXNsaWRlLXRvZ2dsZT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2ICpuZ1N3aXRjaENhc2U9XCInY2hlY2tib3gnXCIgY2xhc3M9XCJmbGV4LWF1dG8gdy0zMFwiPlxyXG4gICAgICAgICAgICA8bWF0LWNoZWNrYm94IGNsYXNzPVwiZm9ybS1maWVsZFwiIHN0eWxlPVwibWFyZ2luLXJpZ2h0OiAxMHB4O1wiXHJcbiAgICAgICAgICAgICAgICBbY2xhc3NdPVwiY2hlY2tTdWJGb3JtKGZpZWxkKSA/ICdjaGVja2JveC10aXRsZS1hY3RpdmUnOicnXCIgWyhuZ01vZGVsKV09XCJmaWVsZC52YWx1ZVwiXHJcbiAgICAgICAgICAgICAgICBbcmVxdWlyZWRdPVwiZmllbGQuaXNNYW5kYXRvcnlcIiBbbmdNb2RlbE9wdGlvbnNdPVwie3N0YW5kYWxvbmU6IHRydWV9XCJcclxuICAgICAgICAgICAgICAgIFtuZ1N0eWxlXT1cImZpZWxkLnNlbGVjdG9yICYmIHsnZGlzcGxheSc6ICdpbmluZS1ibG9jayd9XCI+XHJcbiAgICAgICAgICAgICAgICB7e2ZpZWxkLmxhYmVsfX1cclxuICAgICAgICAgICAgPC9tYXQtY2hlY2tib3g+XHJcblxyXG5cclxuICAgICAgICAgICAgPG1hdC1zZWxlY3QgcGxhY2Vob2xkZXI9XCJDb21wYW55XCIgWyhuZ01vZGVsKV09XCJmaWVsZC5zZWxlY3Rvci52YWx1ZVwiIFtuZ01vZGVsT3B0aW9uc109XCJ7c3RhbmRhbG9uZTogdHJ1ZX1cIlxyXG4gICAgICAgICAgICAgICAgcmVxdWlyZWQgKm5nSWY9XCJmaWVsZC5zZWxlY3RvclwiIHN0eWxlPVwiZGlzcGxheTogaW5saW5lLWJsb2NrOyB3aWR0aDogNTAlO1wiPlxyXG4gICAgICAgICAgICAgICAgPG1hdC1vcHRpb24gKm5nRm9yPVwibGV0IHNlbGVjdCBvZiBmaWVsZC5zZWxlY3Rvci5kZWZhdWx0VmFsdWVcIiBbdmFsdWVdPVwic2VsZWN0LnZhbHVlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge3tzZWxlY3QudmFsdWV9fTwvbWF0LW9wdGlvbj5cclxuICAgICAgICAgICAgPC9tYXQtc2VsZWN0PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgKm5nU3dpdGNoQ2FzZT1cIidjaGVja2JveF9tdWx0aXBsZSdcIiBjbGFzcz1cImZsZXgtYXV0byB3LTMwXCI+XHJcbiAgICAgICAgICAgIDxsYWJlbD57e2ZpZWxkLmxhYmVsfX08L2xhYmVsPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwib25ib2FyZGluZy1zZWxlY3RcIiBzdHlsZT1cIm1hcmdpbi10b3A6IDIwcHg7XCI+XHJcbiAgICAgICAgICAgICAgICA8bWF0LWNoZWNrYm94IGNsYXNzPVwiZm9ybS1maWVsZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9XCJkaXNwbGF5OiBibG9jazsgbWFyZ2luLWJvdHRvbTogNXB4OyBtYXJnaW4tdG9wOiAxMHB4O21hcmdpbi1yaWdodDogMTBweDtcIlxyXG4gICAgICAgICAgICAgICAgICAgICpuZ0Zvcj1cImxldCBvcHQgb2YgZmllbGQuZGVmYXVsdFZhbHVlXCIgW2NoZWNrZWRdPVwib3B0LmNoZWNrZWRcIiBbKG5nTW9kZWwpXT1cIm9wdC5jaGVja2VkXCJcclxuICAgICAgICAgICAgICAgICAgICBbcmVxdWlyZWRdPVwiZmllbGQuaXNNYW5kYXRvcnlcIiBbbmdNb2RlbE9wdGlvbnNdPVwie3N0YW5kYWxvbmU6IHRydWV9XCI+XHJcbiAgICAgICAgICAgICAgICAgICAge3tvcHQudmFsdWV9fVxyXG4gICAgICAgICAgICAgICAgPC9tYXQtY2hlY2tib3g+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgKm5nU3dpdGNoQ2FzZT1cIidyYWRpbydcIiBjbGFzcz1cImZsZXgtYXV0byB3LTMwIGZpZWxkLXNpemVcIj5cclxuICAgICAgICAgICAgPGxhYmVsIHN0eWxlPVwiZGlzcGxheTogYmxvY2s7XCI+IHt7ZmllbGQubGFiZWx9fSA8L2xhYmVsPlxyXG4gICAgICAgICAgICA8bWF0LXJhZGlvLWdyb3VwIGNsYXNzPVwiZm9ybS1maWVsZCByYWRpby1ncm91cCBmaWVsZC1zaXplXCIgWyhuZ01vZGVsKV09XCJmaWVsZC52YWx1ZVwiXHJcbiAgICAgICAgICAgICAgICBbcmVxdWlyZWRdPVwiZmllbGQuaXNNYW5kYXRvcnlcIiBhcmlhLWxhYmVsPVwiU2VsZWN0IGFuIG9wdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgPG1hdC1yYWRpby1idXR0b24gKm5nRm9yPVwibGV0IG9wdCBvZiBmaWVsZC5kZWZhdWx0VmFsdWVcIiBbdmFsdWVdPVwib3B0LnZhbHVlXCI+e3tvcHQudmFsdWV9fVxyXG4gICAgICAgICAgICAgICAgPC9tYXQtcmFkaW8tYnV0dG9uPlxyXG4gICAgICAgICAgICA8L21hdC1yYWRpby1ncm91cD5cclxuICAgICAgICAgICAgPG1hdC1mb3JtLWZpZWxkICpuZ0lmPVwiJ2F1dHJlJz09PWZvcm1hdE90aGVyKGZpZWxkLnZhbHVlKVwiIGNsYXNzPVwiZm9ybS1maWVsZCBmaWVsZC1zaXplIG90aGVyLW9wdGlvblwiXHJcbiAgICAgICAgICAgICAgICBhcHBlYXJhbmNlPVwib3V0bGluZVwiPlxyXG4gICAgICAgICAgICAgICAgPG1hdC1sYWJlbD5BdXRyZSBvcHRpb248L21hdC1sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIFtyZXF1aXJlZF09XCJmaWVsZC5pc01hbmRhdG9yeVwiIG1hdElucHV0IFtuZ01vZGVsT3B0aW9uc109XCJ7c3RhbmRhbG9uZTogdHJ1ZX1cIlxyXG4gICAgICAgICAgICAgICAgICAgIFsobmdNb2RlbCldPVwiZmllbGQub3RoZXJWYWx1ZVwiIHBsYWNlaG9sZGVyPVwiXCI+XHJcbiAgICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiAqbmdTd2l0Y2hDYXNlPVwiJ3NlbGVjdCdcIiBjbGFzcz1cImZsZXgtYXV0byB3LTMwIGZpZWxkLXNpemVcIj5cclxuICAgICAgICAgICAgPG1hdC1mb3JtLWZpZWxkIGNsYXNzPVwiIG1hdC1zZWxlY3QgZmxleC1hdXRvIHctMzAgZmllbGQtc2l6ZVwiIGFwcGVhcmFuY2U9XCJvdXRsaW5lXCI+XHJcbiAgICAgICAgICAgICAgICA8bWF0LWxhYmVsPiB7e2ZpZWxkLmxhYmVsfX0gPC9tYXQtbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8bWF0LXNlbGVjdCBbKG5nTW9kZWwpXT1cImZpZWxkLnZhbHVlXCIgW25nTW9kZWxPcHRpb25zXT1cIntzdGFuZGFsb25lOiB0cnVlfVwiXHJcbiAgICAgICAgICAgICAgICAgICAgW3JlcXVpcmVkXT1cImZpZWxkLmlzTWFuZGF0b3J5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPG1hdC1vcHRpb24gKm5nRm9yPVwibGV0IG9wdCBvZiBmaWVsZC5kZWZhdWx0VmFsdWVcIiBbdmFsdWVdPVwib3B0LnZhbHVlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt7b3B0LnZhbHVlfX08L21hdC1vcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8L21hdC1zZWxlY3Q+XHJcbiAgICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgICAgIDxtYXQtZm9ybS1maWVsZCAqbmdJZj1cIidhdXRyZSc9PT1mb3JtYXRPdGhlcihmaWVsZC52YWx1ZSlcIiBjbGFzcz1cImZvcm0tZmllbGQgZmllbGQtc2l6ZSBvdGhlci1vcHRpb25cIlxyXG4gICAgICAgICAgICAgICAgYXBwZWFyYW5jZT1cIm91dGxpbmVcIj5cclxuICAgICAgICAgICAgICAgIDxtYXQtbGFiZWw+QXV0cmUgb3B0aW9uPC9tYXQtbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBbcmVxdWlyZWRdPVwiZmllbGQuaXNNYW5kYXRvcnlcIiBtYXRJbnB1dCBbbmdNb2RlbE9wdGlvbnNdPVwie3N0YW5kYWxvbmU6IHRydWV9XCJcclxuICAgICAgICAgICAgICAgICAgICBbKG5nTW9kZWwpXT1cImZpZWxkLm90aGVyVmFsdWVcIiBwbGFjZWhvbGRlcj1cIlwiPlxyXG4gICAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxtYXQtZm9ybS1maWVsZCAqbmdTd2l0Y2hDYXNlPVwiJ3RleHRhcmVhJ1wiIGNsYXNzPVwiZm9ybS1maWVsZCBmdWxsLXdpZHRoXCIgYXBwZWFyYW5jZT1cIm91dGxpbmVcIj5cclxuICAgICAgICAgICAgPG1hdC1sYWJlbD57e2ZpZWxkLmxhYmVsfX08L21hdC1sYWJlbD5cclxuICAgICAgICAgICAgPHRleHRhcmVhIHR5cGU9XCJ0ZXh0XCIgcm93cz1cIjVcIiBtYXRJbnB1dCBbcmVxdWlyZWRdPVwiZmllbGQuaXNNYW5kYXRvcnlcIiBbbmdNb2RlbE9wdGlvbnNdPVwie3N0YW5kYWxvbmU6IHRydWV9XCJcclxuICAgICAgICAgICAgICAgIFsobmdNb2RlbCldPVwiZmllbGQudmFsdWVcIiBwbGFjZWhvbGRlcj1cIkRlc2NyaXB0aW9uLi4uXCI+PC90ZXh0YXJlYT5cclxuICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgIDxkaXYgKm5nU3dpdGNoQ2FzZT1cIid0ZWwnXCIgY2xhc3M9XCJmb3JtLWZpZWxkIGZ1bGwtd2lkdGggdGVsLWlucHV0XCI+XHJcbiAgICAgICAgICAgIDxtYXQtbGFiZWwgY2xhc3M9XCJ0ZWwtbGFiZWxcIj57e2ZpZWxkLmxhYmVsfX08L21hdC1sYWJlbD5cclxuICAgICAgICAgICAgPG5neC1pbnRsLXRlbC1pbnB1dCBpZD1cIm9uYm9hcmRpbmctcGhvbmUtaW5wdXRcIiBjbGFzcz1cInBob25lLWlucHV0LXByb2ZpbGVcIiBbY3NzQ2xhc3NdPVwiJ2lucHV0LXBob25lJ1wiXHJcbiAgICAgICAgICAgICAgICBbcHJlZmVycmVkQ291bnRyaWVzXT1cInByZWZlcnJlZENvdW50cmllc1wiIFtlbmFibGVBdXRvQ291bnRyeVNlbGVjdF09XCJmYWxzZVwiIFtlbmFibGVQbGFjZWhvbGRlcl09XCJ0cnVlXCJcclxuICAgICAgICAgICAgICAgIFtjdXN0b21QbGFjZWhvbGRlcl09XCInUGhvbmUnXCIgW3NlbGVjdEZpcnN0Q291bnRyeV09XCJmYWxzZVwiIFtzZWxlY3RlZENvdW50cnlJU09dPVwiZmxhZyhmaWVsZC52YWx1ZSlcIlxyXG4gICAgICAgICAgICAgICAgW21heExlbmd0aF09XCIxNVwiIFtpbnB1dElkXT1cImZpZWxkLmtleVwiIFtwaG9uZVZhbGlkYXRpb25dPVwidHJ1ZVwiIFtzZXBhcmF0ZURpYWxDb2RlXT1cInNlcGFyYXRlRGlhbENvZGVcIlxyXG4gICAgICAgICAgICAgICAgW251bWJlckZvcm1hdF09XCJQaG9uZU51bWJlckZvcm1hdC5OYXRpb25hbFwiIG5hbWU9XCJwaG9uZVwiIChpbnB1dCk9XCJjaGVja1Bob25lKGZpZWxkLnZhbHVlKVwiXHJcbiAgICAgICAgICAgICAgICBbbmdNb2RlbE9wdGlvbnNdPVwie3N0YW5kYWxvbmU6IHRydWV9XCIgWyhuZ01vZGVsKV09XCJmaWVsZC52YWx1ZVwiPlxyXG4gICAgICAgICAgICA8L25neC1pbnRsLXRlbC1pbnB1dD5cclxuICAgICAgICAgICAgPG1hdC1lcnJvciAqbmdJZj1cImludmFsaWRlVmFsdWVcIj5MZSB0w6lsw6lwaG9uZSBlc3QgaW52YWxpZGU8L21hdC1lcnJvcj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8bWF0LWZvcm0tZmllbGQgKm5nU3dpdGNoQ2FzZT1cIidub25lJ1wiIGNsYXNzPVwiZm9ybS1maWVsZCBmaWVsZC1zaXplXCIgYXBwZWFyYW5jZT1cIm91dGxpbmVcIiBzdHlsZT1cIm9wYWNpdHk6MCA7XCI+XHJcbiAgICAgICAgICAgIDxtYXQtbGFiZWw+PC9tYXQtbGFiZWw+XHJcbiAgICAgICAgICAgIDxpbnB1dCBbdHlwZV09XCJmaWVsZC50eXBlXCIgZGlzYWJsZWQ9XCJ0cnVlXCIgbWF0SW5wdXQgLz5cclxuICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgIDxtYXQtZm9ybS1maWVsZCAqbmdTd2l0Y2hEZWZhdWx0IGNsYXNzPVwiZm9ybS1maWVsZCBmaWVsZC1zaXplXCIgYXBwZWFyYW5jZT1cIm91dGxpbmVcIj5cclxuICAgICAgICAgICAgPG1hdC1sYWJlbD57e2ZpZWxkLmxhYmVsfX08L21hdC1sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0IFt0eXBlXT1cImZpZWxkLnR5cGVcIiBbcmVxdWlyZWRdPVwiZmllbGQuaXNNYW5kYXRvcnlcIiBtYXRJbnB1dCBbbmdNb2RlbE9wdGlvbnNdPVwie3N0YW5kYWxvbmU6IHRydWV9XCJcclxuICAgICAgICAgICAgICAgIFsobmdNb2RlbCldPVwiZmllbGQudmFsdWVcIiBwbGFjZWhvbGRlcj1cIlwiPlxyXG4gICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICA8L25nLWNvbnRhaW5lcj5cclxuPC9kaXY+XHJcbjxuZy1jb250ZW50IHNlbGVjdD1cIi5jaGlsZFwiPjwvbmctY29udGVudD4iXX0=