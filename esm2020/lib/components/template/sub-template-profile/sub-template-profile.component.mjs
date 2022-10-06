import { Component, EventEmitter, Input, Output } from '@angular/core';
import { COMMA, ENTER, SEMICOLON } from '@angular/cdk/keycodes';
import { CountryISO, PhoneNumberFormat } from 'ngx-intl-tel-input';
import { isValidPhoneNumber, parsePhoneNumber } from 'libphonenumber-js';
import { UntypedFormControl } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/material/form-field";
import * as i3 from "@angular/material/button";
import * as i4 from "@angular/common";
import * as i5 from "@angular/material/checkbox";
import * as i6 from "@angular/material/icon";
import * as i7 from "@angular/material/select";
import * as i8 from "@angular/material/core";
import * as i9 from "@angular/material/input";
import * as i10 from "@angular/material/radio";
import * as i11 from "@angular/material/tooltip";
import * as i12 from "ngx-intl-tel-input";
import * as i13 from "@angular/material/slide-toggle";
import * as i14 from "@angular/material/datepicker";
function SubTemplateProfileComponent_div_0_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r12 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 14);
    i0.ɵɵlistener("click", function SubTemplateProfileComponent_div_0_button_4_Template_button_click_0_listener($event) { i0.ɵɵrestoreView(_r12); const ctx_r11 = i0.ɵɵnextContext(2); $event.stopPropagation(); return i0.ɵɵresetView(ctx_r11.editBLock($event)); });
    i0.ɵɵelementStart(1, "mat-icon", 3);
    i0.ɵɵtext(2, "info_outlined");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngStyle", ctx_r1.onChangePosition(ctx_r1.field.type));
} }
const _c0 = function () { return { standalone: true }; };
const _c1 = function () { return { display: "inine-block" }; };
function SubTemplateProfileComponent_div_0_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r14 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 15)(1, "span");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "mat-slide-toggle", 16);
    i0.ɵɵlistener("ngModelChange", function SubTemplateProfileComponent_div_0_div_6_Template_mat_slide_toggle_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r14); const ctx_r13 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r13.field.defaultValue = $event); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r2.field.label);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", ctx_r2.field.defaultValue)("ngModelOptions", i0.ɵɵpureFunction0(4, _c0))("ngStyle", ctx_r2.field.selector && i0.ɵɵpureFunction0(5, _c1));
} }
function SubTemplateProfileComponent_div_0_div_7_mat_error_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-error");
    i0.ɵɵtext(1, "Le t\u00E9l\u00E9phone est invalide");
    i0.ɵɵelementEnd();
} }
function SubTemplateProfileComponent_div_0_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r17 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 17)(1, "mat-label", 18);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "ngx-intl-tel-input", 19);
    i0.ɵɵlistener("input", function SubTemplateProfileComponent_div_0_div_7_Template_ngx_intl_tel_input_input_3_listener() { i0.ɵɵrestoreView(_r17); const ctx_r16 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r16.checkPhone(ctx_r16.field.value)); })("ngModelChange", function SubTemplateProfileComponent_div_0_div_7_Template_ngx_intl_tel_input_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r17); const ctx_r18 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r18.field.value = $event); });
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(4, SubTemplateProfileComponent_div_0_div_7_mat_error_4_Template, 2, 0, "mat-error", 20);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r3.field.label);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("cssClass", "input-phone")("preferredCountries", ctx_r3.preferredCountries)("enableAutoCountrySelect", false)("enablePlaceholder", true)("customPlaceholder", "Phone")("selectFirstCountry", false)("selectedCountryISO", ctx_r3.flag(ctx_r3.field.value))("maxLength", 15)("inputId", ctx_r3.field.key)("phoneValidation", true)("separateDialCode", ctx_r3.separateDialCode)("numberFormat", ctx_r3.PhoneNumberFormat.National)("ngModelOptions", i0.ɵɵpureFunction0(16, _c0))("ngModel", ctx_r3.field.value);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r3.invalideValue);
} }
function SubTemplateProfileComponent_div_0_div_8_mat_select_3_mat_option_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 25);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const select_r21 = ctx.$implicit;
    i0.ɵɵproperty("value", select_r21.value);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", select_r21.value, " ");
} }
function SubTemplateProfileComponent_div_0_div_8_mat_select_3_Template(rf, ctx) { if (rf & 1) {
    const _r23 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-select", 23);
    i0.ɵɵlistener("ngModelChange", function SubTemplateProfileComponent_div_0_div_8_mat_select_3_Template_mat_select_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r23); const ctx_r22 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r22.field.selector.value = $event); });
    i0.ɵɵtemplate(1, SubTemplateProfileComponent_div_0_div_8_mat_select_3_mat_option_1_Template, 2, 2, "mat-option", 24);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r19 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("ngModel", ctx_r19.field.selector.value)("ngModelOptions", i0.ɵɵpureFunction0(3, _c0));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r19.field.selector.defaultValue);
} }
function SubTemplateProfileComponent_div_0_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r25 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 21)(1, "mat-checkbox", 16);
    i0.ɵɵlistener("ngModelChange", function SubTemplateProfileComponent_div_0_div_8_Template_mat_checkbox_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r25); const ctx_r24 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r24.field.value = $event); });
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, SubTemplateProfileComponent_div_0_div_8_mat_select_3_Template, 2, 4, "mat-select", 22);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", ctx_r4.field.value)("ngModelOptions", i0.ɵɵpureFunction0(5, _c0))("ngStyle", ctx_r4.field.selector && i0.ɵɵpureFunction0(6, _c1));
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r4.field.label, " ");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r4.field.selector);
} }
function SubTemplateProfileComponent_div_0_div_9_mat_checkbox_4_Template(rf, ctx) { if (rf & 1) {
    const _r29 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-checkbox", 29);
    i0.ɵɵlistener("ngModelChange", function SubTemplateProfileComponent_div_0_div_9_mat_checkbox_4_Template_mat_checkbox_ngModelChange_0_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r29); const opt_r27 = restoredCtx.$implicit; return i0.ɵɵresetView(opt_r27.checked = $event); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const opt_r27 = ctx.$implicit;
    i0.ɵɵproperty("checked", opt_r27.checked)("ngModel", opt_r27.checked)("ngModelOptions", i0.ɵɵpureFunction0(4, _c0));
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", opt_r27.value, " ");
} }
function SubTemplateProfileComponent_div_0_div_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 26)(1, "label");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 27);
    i0.ɵɵtemplate(4, SubTemplateProfileComponent_div_0_div_9_mat_checkbox_4_Template, 2, 5, "mat-checkbox", 28);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r5.field.label);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r5.field.defaultValue);
} }
function SubTemplateProfileComponent_div_0_div_10_mat_radio_button_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-radio-button", 33);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const opt_r31 = ctx.$implicit;
    i0.ɵɵproperty("value", opt_r31.value);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1("", opt_r31.value, " ");
} }
function SubTemplateProfileComponent_div_0_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r33 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 21)(1, "label", 30);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "mat-radio-group", 31);
    i0.ɵɵlistener("ngModelChange", function SubTemplateProfileComponent_div_0_div_10_Template_mat_radio_group_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r33); const ctx_r32 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r32.field.value = $event); });
    i0.ɵɵtemplate(4, SubTemplateProfileComponent_div_0_div_10_mat_radio_button_4_Template, 2, 2, "mat-radio-button", 32);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r6 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r6.field.label, " ");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", ctx_r6.field.value)("required", ctx_r6.field.isMandatory);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r6.field.defaultValue);
} }
function SubTemplateProfileComponent_div_0_div_11_mat_option_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 25);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const opt_r35 = ctx.$implicit;
    i0.ɵɵproperty("value", opt_r35.value);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(opt_r35.value);
} }
function SubTemplateProfileComponent_div_0_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r37 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 34)(1, "mat-form-field", 35)(2, "mat-label");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "mat-select", 36);
    i0.ɵɵlistener("ngModelChange", function SubTemplateProfileComponent_div_0_div_11_Template_mat_select_ngModelChange_4_listener($event) { i0.ɵɵrestoreView(_r37); const ctx_r36 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r36.field.value = $event); });
    i0.ɵɵtemplate(5, SubTemplateProfileComponent_div_0_div_11_mat_option_5_Template, 2, 2, "mat-option", 24);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r7 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", ctx_r7.field.label, " ");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", ctx_r7.field.value)("ngModelOptions", i0.ɵɵpureFunction0(4, _c0));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r7.field.defaultValue);
} }
function SubTemplateProfileComponent_div_0_div_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 37)(1, "mat-form-field", 35);
    i0.ɵɵelement(2, "mat-label")(3, "input", 38);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r8 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("type", ctx_r8.field.type);
} }
function SubTemplateProfileComponent_div_0_mat_form_field_13_Template(rf, ctx) { if (rf & 1) {
    const _r40 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-form-field", 39)(1, "mat-label");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "input", 40);
    i0.ɵɵlistener("ngModelChange", function SubTemplateProfileComponent_div_0_mat_form_field_13_Template_input_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r40); const ctx_r39 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r39.field.defaultValue = $event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelement(4, "mat-datepicker-toggle", 41)(5, "mat-datepicker", null, 42);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const _r38 = i0.ɵɵreference(6);
    const ctx_r9 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r9.field.label);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("matDatepicker", _r38)("ngModelOptions", i0.ɵɵpureFunction0(5, _c0))("ngModel", ctx_r9.field.defaultValue);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("for", _r38);
} }
function SubTemplateProfileComponent_div_0_mat_form_field_14_Template(rf, ctx) { if (rf & 1) {
    const _r42 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-form-field", 39)(1, "mat-label");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "input", 43);
    i0.ɵɵlistener("ngModelChange", function SubTemplateProfileComponent_div_0_mat_form_field_14_Template_input_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r42); const ctx_r41 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r41.field.defaultValue = $event); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r10 = i0.ɵɵnextContext(2);
    i0.ɵɵclassProp("blink", ctx_r10.blink);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r10.field.label);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("type", ctx_r10.field.type)("ngModelOptions", i0.ɵɵpureFunction0(6, _c0))("ngModel", ctx_r10.field.defaultValue);
} }
function SubTemplateProfileComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r44 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 1)(1, "button", 2);
    i0.ɵɵlistener("click", function SubTemplateProfileComponent_div_0_Template_button_click_1_listener($event) { i0.ɵɵrestoreView(_r44); const ctx_r43 = i0.ɵɵnextContext(); $event.stopPropagation(); return i0.ɵɵresetView(ctx_r43.editBLock($event)); });
    i0.ɵɵelementStart(2, "mat-icon", 3);
    i0.ɵɵtext(3, "settings");
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(4, SubTemplateProfileComponent_div_0_button_4_Template, 3, 1, "button", 4);
    i0.ɵɵelementContainerStart(5, 5);
    i0.ɵɵtemplate(6, SubTemplateProfileComponent_div_0_div_6_Template, 4, 6, "div", 6);
    i0.ɵɵtemplate(7, SubTemplateProfileComponent_div_0_div_7_Template, 5, 17, "div", 7);
    i0.ɵɵtemplate(8, SubTemplateProfileComponent_div_0_div_8_Template, 4, 7, "div", 8);
    i0.ɵɵtemplate(9, SubTemplateProfileComponent_div_0_div_9_Template, 5, 2, "div", 9);
    i0.ɵɵtemplate(10, SubTemplateProfileComponent_div_0_div_10_Template, 5, 4, "div", 8);
    i0.ɵɵtemplate(11, SubTemplateProfileComponent_div_0_div_11_Template, 6, 5, "div", 10);
    i0.ɵɵtemplate(12, SubTemplateProfileComponent_div_0_div_12_Template, 4, 1, "div", 11);
    i0.ɵɵtemplate(13, SubTemplateProfileComponent_div_0_mat_form_field_13_Template, 7, 6, "mat-form-field", 12);
    i0.ɵɵtemplate(14, SubTemplateProfileComponent_div_0_mat_form_field_14_Template, 4, 7, "mat-form-field", 13);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngIf", ctx_r0.field.isConditional);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitch", ctx_r0.field.type);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", "toggle");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", "tel");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", "checkbox");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", "checkbox_multiple");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", "radio");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", "select");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", "none");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", "date");
} }
const _c2 = [[["", 8, "child"]]];
const _c3 = [".child"];
export class SubTemplateProfileComponent {
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
        this.onCheckedDefault = new EventEmitter();
        this.onGetConditionValues = new EventEmitter();
        this.onEditBlock = new EventEmitter();
        this.conditionData = [];
        this.onCheckValue = new EventEmitter();
        this.blink = false;
        this.chipControl = new UntypedFormControl(new Set());
        this.preferredCountries = [CountryISO.UnitedStates, CountryISO.France];
        this.PhoneNumberFormat = PhoneNumberFormat;
        this.separatorKeysCodes = [ENTER, COMMA, SEMICOLON];
        this.invalideValue = false;
        this.currentChip = "";
        this.separateDialCode = false;
        this.prevValue = "";
        this.showCondition = false;
        this.toggleChip = (chip) => {
            this.onCheckedChip.emit(chip);
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
    checkedDefault(value) {
        this.onCheckedDefault.emit(value);
    }
    onShowCondition(event = null) {
        if (event) {
            event.preventDefault();
        }
        this.showCondition = !this.showCondition;
    }
    // checked(locationValue,value){
    //   return locationValue.includes(value)
    // }
    editBLock(event) {
        event.preventDefault();
        this.onEditBlock.emit(true);
    }
    onChangePosition(type) {
        if (type === "tel") {
            return { 'top': '-37px', };
        }
        else if (type === "select") {
            return { 'top': '-20px', };
        }
        else if (type === "checkbox" || type === "checkbox_multiple") {
            return { 'top': '-29px', };
        }
        else {
            return {};
        }
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
SubTemplateProfileComponent.ɵfac = function SubTemplateProfileComponent_Factory(t) { return new (t || SubTemplateProfileComponent)(); };
SubTemplateProfileComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SubTemplateProfileComponent, selectors: [["lib-sub-category"]], inputs: { field: "field", length: "length", i: "i", j: "j", conditionData: "conditionData", blink: "blink" }, outputs: { onAddKeywordFromInput: "onAddKeywordFromInput", onKeyPress: "onKeyPress", onDrop: "onDrop", onAddNewField: "onAddNewField", onRemoveField: "onRemoveField", onChangeType: "onChangeType", onRemoveKeyword: "onRemoveKeyword", onAddNewSubLevelField: "onAddNewSubLevelField", onExpendMore: "onExpendMore", onChangeLabel: "onChangeLabel", onCheckedChip: "onCheckedChip", onCheckedDefault: "onCheckedDefault", onGetConditionValues: "onGetConditionValues", onEditBlock: "onEditBlock", onCheckValue: "onCheckValue" }, ngContentSelectors: _c3, decls: 2, vars: 1, consts: [["class", "field-item", 4, "ngIf"], [1, "field-item"], ["mat-raised-button", "", 1, "transparent-button", "setting", 3, "click"], [1, "setting-icon"], ["matTooltip", "Cliquer pour regarder la condition appliqu\u00E9e \u00E0 ce champ!", "class", "transparent-button conditional-view", "mat-raised-button", "", 3, "ngStyle", "click", 4, "ngIf"], [3, "ngSwitch"], ["class", "flex-auto field-size toggle-button", 4, "ngSwitchCase"], ["class", "form-field full-width tel-input", 4, "ngSwitchCase"], ["class", "flex-auto field-size", 4, "ngSwitchCase"], ["class", "flex-auto field-size", "style", "width: 100%;", 4, "ngSwitchCase"], ["class", "flex-auto field-size select-content", 4, "ngSwitchCase"], ["class", "flex-auto field-size select-content", "style", "opacity:0 ;", 4, "ngSwitchCase"], ["class", "form-field field-size", "appearance", "outline", 4, "ngSwitchCase"], ["class", "form-field field-size", "appearance", "outline", 3, "blink", 4, "ngSwitchDefault"], ["matTooltip", "Cliquer pour regarder la condition appliqu\u00E9e \u00E0 ce champ!", "mat-raised-button", "", 1, "transparent-button", "conditional-view", 3, "ngStyle", "click"], [1, "flex-auto", "field-size", "toggle-button"], [1, "form-field", 3, "ngModel", "ngModelOptions", "ngStyle", "ngModelChange"], [1, "form-field", "full-width", "tel-input"], [1, "tel-label"], ["id", "onboarding-phone-input", "name", "phone", 1, "phone-input-profile", 3, "cssClass", "preferredCountries", "enableAutoCountrySelect", "enablePlaceholder", "customPlaceholder", "selectFirstCountry", "selectedCountryISO", "maxLength", "inputId", "phoneValidation", "separateDialCode", "numberFormat", "ngModelOptions", "ngModel", "input", "ngModelChange"], [4, "ngIf"], [1, "flex-auto", "field-size"], ["placeholder", "Company", "style", "display: inline-block; width: 50%", 3, "ngModel", "ngModelOptions", "ngModelChange", 4, "ngIf"], ["placeholder", "Company", 2, "display", "inline-block", "width", "50%", 3, "ngModel", "ngModelOptions", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], [1, "flex-auto", "field-size", 2, "width", "100%"], [1, "onboarding-select", 2, "margin-top", "20px"], ["class", "form-field", "style", "display: block; margin-bottom: 5px; margin-top: 10px; margin-right: 10px;", 3, "checked", "ngModel", "ngModelOptions", "ngModelChange", 4, "ngFor", "ngForOf"], [1, "form-field", 2, "display", "block", "margin-bottom", "5px", "margin-top", "10px", "margin-right", "10px", 3, "checked", "ngModel", "ngModelOptions", "ngModelChange"], [2, "display", "block"], ["aria-label", "Select an option", 1, "form-field", "radio-group", "field-size", "onboarding-select", 3, "ngModel", "required", "ngModelChange"], ["style", "margin-bottom: 20px;", 3, "value", 4, "ngFor", "ngForOf"], [2, "margin-bottom", "20px", 3, "value"], [1, "flex-auto", "field-size", "select-content"], ["appearance", "outline", 1, "mat-select", "flex-auto", "field-size"], [3, "ngModel", "ngModelOptions", "ngModelChange"], [1, "flex-auto", "field-size", "select-content", 2, "opacity", "0"], ["disabled", "true", "matInput", "", 3, "type"], ["appearance", "outline", 1, "form-field", "field-size"], ["matInput", "", 3, "matDatepicker", "ngModelOptions", "ngModel", "ngModelChange"], ["matSuffix", "", 3, "for"], ["picker", ""], ["matInput", "", "placeholder", "", 3, "type", "ngModelOptions", "ngModel", "ngModelChange"]], template: function SubTemplateProfileComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef(_c2);
        i0.ɵɵtemplate(0, SubTemplateProfileComponent_div_0_Template, 15, 10, "div", 0);
        i0.ɵɵprojection(1);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", !ctx.field.forms || ctx.field.forms.length === 0);
    } }, dependencies: [i1.DefaultValueAccessor, i1.NgControlStatus, i1.RequiredValidator, i1.NgModel, i2.MatError, i2.MatFormField, i2.MatLabel, i2.MatSuffix, i3.MatButton, i4.NgForOf, i4.NgIf, i4.NgStyle, i4.NgSwitch, i4.NgSwitchCase, i4.NgSwitchDefault, i5.MatCheckbox, i6.MatIcon, i7.MatSelect, i8.MatOption, i9.MatInput, i10.MatRadioGroup, i10.MatRadioButton, i11.MatTooltip, i12.NgxIntlTelInputComponent, i12.NativeElementInjectorDirective, i13.MatSlideToggle, i14.MatDatepicker, i14.MatDatepickerInput, i14.MatDatepickerToggle], styles: [".container[_ngcontent-%COMP%]{max-width:98%;margin:50px auto auto;padding-bottom:50px}.container[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:space-between}.input-category-name[_ngcontent-%COMP%]{font-size:15px;font-weight:500}.full-width[_ngcontent-%COMP%]{width:100%}.field-item[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;width:100%;flex-wrap:wrap;position:relative;margin-top:10px}.field-item[_ngcontent-%COMP%]   .button-action[_ngcontent-%COMP%]{background-color:#6fe8d7;height:100%;margin:auto 15px auto auto;display:flex}.field-item[_ngcontent-%COMP%]   .button-action[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{box-shadow:none;background-color:transparent;color:#fff}.field-item[_ngcontent-%COMP%]   .setting[_ngcontent-%COMP%]{position:absolute;top:-5px;right:-12px;z-index:1;background-color:#d5d6d7!important;border-radius:50px;width:40px!important;height:40px!important;display:none}.field-item[_ngcontent-%COMP%]   .conditional-view[_ngcontent-%COMP%]{position:absolute;top:-28px;left:-9px;z-index:9;background-color:transparent!important;border-radius:50px;width:40px!important;height:40px!important}.field-item[_ngcontent-%COMP%]:hover   .setting[_ngcontent-%COMP%]{display:block}.field-item[_ngcontent-%COMP%]:hover   .conditional-view[_ngcontent-%COMP%]{background-color:#d5d6d7!important}.field-action[_ngcontent-%COMP%]{width:10%}hr[_ngcontent-%COMP%]{margin:50px 0}  .mat-form-field-appearance-fill .mat-form-field-flex{background-color:#fff}.category-action[_ngcontent-%COMP%]{display:flex;width:100%}.delete-field[_ngcontent-%COMP%]{margin:auto 2%}.radio-group[_ngcontent-%COMP%]   .mat-radio-button[_ngcontent-%COMP%]{margin-right:10px}.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary[_ngcontent-%COMP%]{background-color:#3f51b5;color:#fff;min-height:20px;font-size:10px}.move-icons[_ngcontent-%COMP%]{cursor:move}.category-item[_ngcontent-%COMP%]{display:flex;align-items:baseline;width:100%;border:1px solid #dce4e9;border-radius:8px}  .readonly.mat-form-field-appearance-outline .mat-form-field-outline{color:transparent!important}.field-content[_ngcontent-%COMP%]{width:100%}.cdk-drag-preview[_ngcontent-%COMP%]{box-sizing:border-box;border-radius:4px;box-shadow:0 5px 5px -3px #0003,0 8px 10px 1px #00000024,0 3px 14px 2px #0000001f}.cdk-drag-placeholder[_ngcontent-%COMP%]{opacity:0}.cdk-drag-animating[_ngcontent-%COMP%]{transition:transform .25s cubic-bezier(0,0,.2,1)}.example-list.cdk-drop-list-dragging[_ngcontent-%COMP%]   .category-item[_ngcontent-%COMP%]:not(.cdk-drag-placeholder){transition:transform .25s cubic-bezier(0,0,.2,1)}.add-button-container[_ngcontent-%COMP%]{background:#ffffff 0% 0% no-repeat padding-box;border:1px dashed #dce4e9;border-radius:8px;margin-top:10px;padding:10px;display:flex;justify-content:center;align-items:center;width:98%;margin-left:0;margin-bottom:22px}.add-button-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{display:flex;align-items:center;background-color:transparent;border:none;cursor:pointer;letter-spacing:0px;color:#c2c8d5;box-shadow:none}.expand-button[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%]{font-size:48px;margin-top:-20px;margin-right:15px}.transparent-button[_ngcontent-%COMP%]{background-color:transparent!important;box-shadow:none!important;width:40px!important;padding:0!important;margin:0!important;min-width:auto!important}.expand-button[_ngcontent-%COMP%]{color:#5a607f!important;background-color:transparent!important;box-shadow:none!important}.checkbox-condition[_ngcontent-%COMP%]{position:relative}.checkbox-condition[_ngcontent-%COMP%]   .condition-container[_ngcontent-%COMP%]{position:absolute;top:30px;width:500px;height:150px;background-color:#fff;border:1px dashed #dce4e9;z-index:1;left:0;border-radius:5px}.checkbox-condition[_ngcontent-%COMP%]   .condition-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{position:absolute;bottom:5px;left:0}.condition-help[_ngcontent-%COMP%]{cursor:pointer}.cdk-overlay-pane[_ngcontent-%COMP%]{width:100%}.child[_ngcontent-%COMP%]{margin-left:0}.child[_ngcontent-%COMP%]   .cdk-drop-list[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap}.toggle-button[_ngcontent-%COMP%]{display:flex;align-items:center}.toggle-button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin-right:10px}.onboarding-select[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(6,1fr)}  .country-dropdown{min-width:unset!important}  .tel-input{position:relative}  .tel-input .tel-label{font-size:12px;color:#0009;position:absolute;z-index:1;background-color:#fff;padding:0 2px;left:8px;top:-7px}  .phone-input-profile{padding-bottom:0;padding-top:0;display:block!important;max-width:100%;width:100%}  .phone-input-profile .iti{width:100%!important}  .phone-input-profile input{outline:none;padding:19px;border-radius:5px;border-color:#0000001f;border-width:1px;width:100%;border:1px solid rgba(0,0,0,.12)}  .blink{animation:blink 1s ease-out}  .blink.mat-form-field-appearance-outline .mat-form-field-outline{border-radius:10px!important;box-shadow:0 5px 5px -3px #0003,0 8px 10px 1px #00000024,0 3px 14px 2px #0000001f;color:#242731!important}@keyframes blink{0%{opacity:0}10%{opacity:.1}20%{opacity:.2}30%{opacity:.3}40%{opacity:.4}50%{opacity:.5}60%{opacity:.6}70%{opacity:.7}80%{opacity:.8}90%{opacity:.9}to{opacity:1}}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SubTemplateProfileComponent, [{
        type: Component,
        args: [{ selector: 'lib-sub-category', template: "<div class=\"field-item\" *ngIf=\"!field.forms || field.forms.length===0\">\n  <button class=\"transparent-button setting\" mat-raised-button (click)=\"$event.stopPropagation();editBLock($event)\">\n    <mat-icon class=\"setting-icon\">settings</mat-icon>\n  </button>\n  <button *ngIf=\"field.isConditional\" matTooltip=\"Cliquer pour regarder la condition appliqu\u00E9e \u00E0 ce champ!\"\n    class=\"transparent-button conditional-view\" [ngStyle]=\"onChangePosition(field.type)\" mat-raised-button\n    (click)=\"$event.stopPropagation();editBLock($event)\">\n    <mat-icon class=\"setting-icon\">info_outlined</mat-icon>\n  </button>\n  <ng-container [ngSwitch]=\"field.type\">\n    <div *ngSwitchCase=\"'toggle'\" class=\"flex-auto field-size toggle-button\">\n      <span>{{ field.label }}</span>\n      <mat-slide-toggle class=\"form-field\" [(ngModel)]=\"field.defaultValue\" [ngModelOptions]=\"{ standalone: true }\"\n        [ngStyle]=\"field.selector && { display: 'inine-block' }\">\n      </mat-slide-toggle>\n    </div>\n    <div *ngSwitchCase=\"'tel'\" class=\"form-field full-width tel-input\">\n      <mat-label class=\"tel-label\">{{field.label}}</mat-label>\n      <ngx-intl-tel-input id=\"onboarding-phone-input\" class=\"phone-input-profile\" [cssClass]=\"'input-phone'\"\n        [preferredCountries]=\"preferredCountries\" [enableAutoCountrySelect]=\"false\" [enablePlaceholder]=\"true\"\n        [customPlaceholder]=\"'Phone'\" [selectFirstCountry]=\"false\" [selectedCountryISO]=\"flag(field.value)\"\n        [maxLength]=\"15\" [inputId]=\"field.key\" [phoneValidation]=\"true\" [separateDialCode]=\"separateDialCode\"\n        [numberFormat]=\"PhoneNumberFormat.National\" name=\"phone\" (input)=\"checkPhone(field.value)\"\n        [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"field.value\">\n      </ngx-intl-tel-input>\n      <mat-error *ngIf=\"invalideValue\">Le t\u00E9l\u00E9phone est invalide</mat-error>\n    </div>\n    <div *ngSwitchCase=\"'checkbox'\" class=\"flex-auto field-size\">\n      <mat-checkbox class=\"form-field\" [(ngModel)]=\"field.value\" [ngModelOptions]=\"{ standalone: true }\"\n        [ngStyle]=\"field.selector && { display: 'inine-block' }\">\n        {{ field.label }}\n      </mat-checkbox>\n      <mat-select placeholder=\"Company\" [(ngModel)]=\"field.selector.value\" [ngModelOptions]=\"{ standalone: true }\"\n        *ngIf=\"field.selector\" style=\"display: inline-block; width: 50%\">\n        <mat-option *ngFor=\"let select of field.selector.defaultValue\" [value]=\"select.value\"> {{ select.value }}\n        </mat-option>\n      </mat-select>\n    </div>\n    <div *ngSwitchCase=\"'checkbox_multiple'\" class=\"flex-auto field-size\" style=\"width: 100%;\">\n      <label>{{ field.label }}</label>\n      <div style=\"margin-top: 20px\" class=\"onboarding-select\">\n        <mat-checkbox class=\"form-field\"\n          style=\"display: block; margin-bottom: 5px; margin-top: 10px; margin-right: 10px;\"\n          *ngFor=\"let opt of field.defaultValue\" [checked]=\"opt.checked\" [(ngModel)]=\"opt.checked\"\n          [ngModelOptions]=\"{ standalone: true }\">\n          {{ opt.value }}\n        </mat-checkbox>\n      </div>\n    </div>\n    <div *ngSwitchCase=\"'radio'\" class=\"flex-auto field-size\">\n      <label style=\"display: block\"> {{ field.label }} </label>\n      <mat-radio-group class=\"form-field radio-group field-size onboarding-select\" [(ngModel)]=\"field.value\"\n        [required]=\"field.isMandatory\" aria-label=\"Select an option\">\n        <mat-radio-button *ngFor=\"let opt of field.defaultValue\" style=\"margin-bottom: 20px;\" [value]=\"opt.value\">{{\n          opt.value }} </mat-radio-button>\n      </mat-radio-group>\n    </div>\n    <div *ngSwitchCase=\"'select'\" class=\"flex-auto field-size select-content\">\n      <mat-form-field class=\"mat-select flex-auto field-size\" appearance=\"outline\">\n        <mat-label> {{ field.label }} </mat-label>\n        <mat-select [(ngModel)]=\"field.value\" [ngModelOptions]=\"{ standalone: true }\">\n          <mat-option *ngFor=\"let opt of field.defaultValue\" [value]=\"opt.value\">{{ opt.value }}</mat-option>\n        </mat-select>\n      </mat-form-field>\n    </div>\n    <div *ngSwitchCase=\"'none'\" class=\"flex-auto field-size select-content\" style=\"opacity:0 ;\">\n      <mat-form-field class=\"mat-select flex-auto field-size\" appearance=\"outline\">\n        <mat-label></mat-label>\n        <input [type]=\"field.type\" disabled=\"true\" matInput />\n      </mat-form-field>\n    </div>\n    <mat-form-field *ngSwitchCase=\"'date'\" class=\"form-field field-size\" appearance=\"outline\">\n      <mat-label>{{field.label}}</mat-label>\n      <input matInput [matDatepicker]=\"picker\" [ngModelOptions]=\"{ standalone: true }\" [(ngModel)]=\"field.defaultValue\">\n      <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n      <mat-datepicker #picker></mat-datepicker>\n    </mat-form-field>\n    <mat-form-field [class.blink]=\"blink\" *ngSwitchDefault class=\"form-field field-size\" appearance=\"outline\">\n      <mat-label>{{ field.label }}</mat-label>\n      <input [type]=\"field.type\" matInput [ngModelOptions]=\"{ standalone: true }\" [(ngModel)]=\"field.defaultValue\"\n        placeholder=\"\" />\n    </mat-form-field>\n  </ng-container>\n</div>\n\n<ng-content select=\".child\"></ng-content>", styles: [".container{max-width:98%;margin:50px auto auto;padding-bottom:50px}.container .action{width:100%;display:flex;justify-content:space-between}.input-category-name{font-size:15px;font-weight:500}.full-width{width:100%}.field-item{display:flex;justify-content:space-between;align-items:center;width:100%;flex-wrap:wrap;position:relative;margin-top:10px}.field-item .button-action{background-color:#6fe8d7;height:100%;margin:auto 15px auto auto;display:flex}.field-item .button-action button{box-shadow:none;background-color:transparent;color:#fff}.field-item .setting{position:absolute;top:-5px;right:-12px;z-index:1;background-color:#d5d6d7!important;border-radius:50px;width:40px!important;height:40px!important;display:none}.field-item .conditional-view{position:absolute;top:-28px;left:-9px;z-index:9;background-color:transparent!important;border-radius:50px;width:40px!important;height:40px!important}.field-item:hover .setting{display:block}.field-item:hover .conditional-view{background-color:#d5d6d7!important}.field-action{width:10%}hr{margin:50px 0}::ng-deep .mat-form-field-appearance-fill .mat-form-field-flex{background-color:#fff}.category-action{display:flex;width:100%}.delete-field{margin:auto 2%}.radio-group .mat-radio-button{margin-right:10px}.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary{background-color:#3f51b5;color:#fff;min-height:20px;font-size:10px}.move-icons{cursor:move}.category-item{display:flex;align-items:baseline;width:100%;border:1px solid #dce4e9;border-radius:8px}::ng-deep .readonly.mat-form-field-appearance-outline .mat-form-field-outline{color:transparent!important}.field-content{width:100%}.cdk-drag-preview{box-sizing:border-box;border-radius:4px;box-shadow:0 5px 5px -3px #0003,0 8px 10px 1px #00000024,0 3px 14px 2px #0000001f}.cdk-drag-placeholder{opacity:0}.cdk-drag-animating{transition:transform .25s cubic-bezier(0,0,.2,1)}.example-list.cdk-drop-list-dragging .category-item:not(.cdk-drag-placeholder){transition:transform .25s cubic-bezier(0,0,.2,1)}.add-button-container{background:#ffffff 0% 0% no-repeat padding-box;border:1px dashed #dce4e9;border-radius:8px;margin-top:10px;padding:10px;display:flex;justify-content:center;align-items:center;width:98%;margin-left:0;margin-bottom:22px}.add-button-container button{display:flex;align-items:center;background-color:transparent;border:none;cursor:pointer;letter-spacing:0px;color:#c2c8d5;box-shadow:none}.expand-button .material-icons{font-size:48px;margin-top:-20px;margin-right:15px}.transparent-button{background-color:transparent!important;box-shadow:none!important;width:40px!important;padding:0!important;margin:0!important;min-width:auto!important}.expand-button{color:#5a607f!important;background-color:transparent!important;box-shadow:none!important}.checkbox-condition{position:relative}.checkbox-condition .condition-container{position:absolute;top:30px;width:500px;height:150px;background-color:#fff;border:1px dashed #dce4e9;z-index:1;left:0;border-radius:5px}.checkbox-condition .condition-container button{position:absolute;bottom:5px;left:0}.condition-help{cursor:pointer}.cdk-overlay-pane{width:100%}.child{margin-left:0}.child .cdk-drop-list{display:flex;flex-wrap:wrap}.toggle-button{display:flex;align-items:center}.toggle-button span{margin-right:10px}.onboarding-select{display:grid;grid-template-columns:repeat(6,1fr)}::ng-deep .country-dropdown{min-width:unset!important}::ng-deep .tel-input{position:relative}::ng-deep .tel-input .tel-label{font-size:12px;color:#0009;position:absolute;z-index:1;background-color:#fff;padding:0 2px;left:8px;top:-7px}::ng-deep .phone-input-profile{padding-bottom:0;padding-top:0;display:block!important;max-width:100%;width:100%}::ng-deep .phone-input-profile .iti{width:100%!important}::ng-deep .phone-input-profile input{outline:none;padding:19px;border-radius:5px;border-color:#0000001f;border-width:1px;width:100%;border:1px solid rgba(0,0,0,.12)}::ng-deep .blink{animation:blink 1s ease-out}::ng-deep .blink.mat-form-field-appearance-outline .mat-form-field-outline{border-radius:10px!important;box-shadow:0 5px 5px -3px #0003,0 8px 10px 1px #00000024,0 3px 14px 2px #0000001f;color:#242731!important}@keyframes blink{0%{opacity:0}10%{opacity:.1}20%{opacity:.2}30%{opacity:.3}40%{opacity:.4}50%{opacity:.5}60%{opacity:.6}70%{opacity:.7}80%{opacity:.8}90%{opacity:.9}to{opacity:1}}\n"] }]
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
        }], onCheckedDefault: [{
            type: Output
        }], onGetConditionValues: [{
            type: Output
        }], onEditBlock: [{
            type: Output
        }], conditionData: [{
            type: Input
        }], onCheckValue: [{
            type: Output
        }], blink: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3ViLXRlbXBsYXRlLXByb2ZpbGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvb25ib2FyZGluZy9zcmMvbGliL2NvbXBvbmVudHMvdGVtcGxhdGUvc3ViLXRlbXBsYXRlLXByb2ZpbGUvc3ViLXRlbXBsYXRlLXByb2ZpbGUuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvb25ib2FyZGluZy9zcmMvbGliL2NvbXBvbmVudHMvdGVtcGxhdGUvc3ViLXRlbXBsYXRlLXByb2ZpbGUvc3ViLXRlbXBsYXRlLXByb2ZpbGUuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUF1QyxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBcUIsTUFBTSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUM5SSxPQUFPLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsVUFBVSxFQUFFLGlCQUFpQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDbkUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLGdCQUFnQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFekUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ0RsRCxrQ0FFdUQ7SUFBckQsbUxBQVMsd0JBQXdCLFNBQUMsZUFBQSx5QkFBaUIsQ0FBQSxJQUFDO0lBQ3BELG1DQUErQjtJQUFBLDZCQUFhO0lBQUEsaUJBQVcsRUFBQTs7O0lBRlgsb0VBQXdDOzs7Ozs7SUFLcEYsK0JBQXlFLFdBQUE7SUFDakUsWUFBaUI7SUFBQSxpQkFBTztJQUM5Qiw0Q0FDMkQ7SUFEdEIsaU5BQWEsbURBQTBCLElBQVA7SUFFckUsaUJBQW1CLEVBQUE7OztJQUhiLGVBQWlCO0lB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LEtBQUs7a0JBQWIsS0FBSztZQUNHLE1BQU07a0JBQWQsS0FBSztZQUNHLENBQUM7a0JBQVQsS0FBSztZQUNHLENBQUM7a0JBQVQsS0FBSztZQUNJLHFCQUFxQjtrQkFBOUIsTUFBTTtZQUNHLFVBQVU7a0JBQW5CLE1BQU07WUFDRyxNQUFNO2tCQUFmLE1BQU07WUFDRyxhQUFhO2tCQUF0QixNQUFNO1lBQ0csYUFBYTtrQkFBdEIsTUFBTTtZQUNHLFlBQVk7a0JBQXJCLE1BQU07WUFDRyxlQUFlO2tCQUF4QixNQUFNO1lBQ0cscUJBQXFCO2tCQUE5QixNQUFNO1lBQ0csWUFBWTtrQkFBckIsTUFBTTtZQUNHLGFBQWE7a0JBQXRCLE1BQU07WUFDRyxhQUFhO2tCQUF0QixNQUFNO1lBQ0csZ0JBQWdCO2tCQUF6QixNQUFNO1lBQ0csb0JBQW9CO2tCQUE3QixNQUFNO1lBQ0csV0FBVztrQkFBcEIsTUFBTTtZQUNFLGFBQWE7a0JBQXJCLEtBQUs7WUFDSSxZQUFZO2tCQUFyQixNQUFNO1lBQ0UsS0FBSztrQkFBYixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWZ0ZXJDb250ZW50SW5pdCwgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25DaGFuZ2VzLCBPbkluaXQsIE91dHB1dCwgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ09NTUEsIEVOVEVSLCBTRU1JQ09MT04gfSBmcm9tICdAYW5ndWxhci9jZGsva2V5Y29kZXMnO1xuaW1wb3J0IHsgQ291bnRyeUlTTywgUGhvbmVOdW1iZXJGb3JtYXQgfSBmcm9tICduZ3gtaW50bC10ZWwtaW5wdXQnO1xuaW1wb3J0IHsgaXNWYWxpZFBob25lTnVtYmVyLCBwYXJzZVBob25lTnVtYmVyIH0gZnJvbSAnbGlicGhvbmVudW1iZXItanMnO1xuXG5pbXBvcnQgeyBVbnR5cGVkRm9ybUNvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1zdWItY2F0ZWdvcnknLFxuICB0ZW1wbGF0ZVVybDogJy4vc3ViLXRlbXBsYXRlLXByb2ZpbGUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zdWItdGVtcGxhdGUtcHJvZmlsZS5jb21wb25lbnQuc2NzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBTdWJUZW1wbGF0ZVByb2ZpbGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBmaWVsZDogYW55XG4gIEBJbnB1dCgpIGxlbmd0aDogYW55XG4gIEBJbnB1dCgpIGk6IGFueVxuICBASW5wdXQoKSBqOiBhbnlcbiAgQE91dHB1dCgpIG9uQWRkS2V5d29yZEZyb21JbnB1dCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpXG4gIEBPdXRwdXQoKSBvbktleVByZXNzID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KClcbiAgQE91dHB1dCgpIG9uRHJvcCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpXG4gIEBPdXRwdXQoKSBvbkFkZE5ld0ZpZWxkID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KClcbiAgQE91dHB1dCgpIG9uUmVtb3ZlRmllbGQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKVxuICBAT3V0cHV0KCkgb25DaGFuZ2VUeXBlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KClcbiAgQE91dHB1dCgpIG9uUmVtb3ZlS2V5d29yZCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpXG4gIEBPdXRwdXQoKSBvbkFkZE5ld1N1YkxldmVsRmllbGQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKVxuICBAT3V0cHV0KCkgb25FeHBlbmRNb3JlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KClcbiAgQE91dHB1dCgpIG9uQ2hhbmdlTGFiZWwgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKVxuICBAT3V0cHV0KCkgb25DaGVja2VkQ2hpcCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpXG4gIEBPdXRwdXQoKSBvbkNoZWNrZWREZWZhdWx0ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KClcbiAgQE91dHB1dCgpIG9uR2V0Q29uZGl0aW9uVmFsdWVzID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KClcbiAgQE91dHB1dCgpIG9uRWRpdEJsb2NrID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KClcbiAgQElucHV0KCkgY29uZGl0aW9uRGF0YSA9IFtdXG4gIEBPdXRwdXQoKSBvbkNoZWNrVmFsdWUgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKVxuICBASW5wdXQoKSBibGluayA9IGZhbHNlXG4gIGNoaXBDb250cm9sID0gbmV3IFVudHlwZWRGb3JtQ29udHJvbChuZXcgU2V0KCkpO1xuICBwcmVmZXJyZWRDb3VudHJpZXM6IENvdW50cnlJU09bXSA9IFtDb3VudHJ5SVNPLlVuaXRlZFN0YXRlcywgQ291bnRyeUlTTy5GcmFuY2VdO1xuICBQaG9uZU51bWJlckZvcm1hdCA9IFBob25lTnVtYmVyRm9ybWF0O1xuICBzZXBhcmF0b3JLZXlzQ29kZXMgPSBbRU5URVIsIENPTU1BLCBTRU1JQ09MT05dO1xuICBpbnZhbGlkZVZhbHVlID0gZmFsc2U7XG4gIGN1cnJlbnRDaGlwID0gXCJcIlxuICBzZXBhcmF0ZURpYWxDb2RlID0gZmFsc2U7XG4gIHByZXZWYWx1ZSA9IFwiXCJcbiAgc2hvd0NvbmRpdGlvbiA9IGZhbHNlXG4gIGNvbnN0cnVjdG9yKCkge1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gIH1cblxuICBkcm9wKGV2ZW50KSB7XG4gICAgdGhpcy5vbkRyb3AuZW1pdChldmVudClcbiAgfVxuXG4gIGFkZEtleXdvcmRGcm9tSW5wdXQoZXZlbnQsIGksIGopIHtcbiAgICB0aGlzLm9uQWRkS2V5d29yZEZyb21JbnB1dC5lbWl0KHsgZXZlbnQsIHByZXY6IHRoaXMucHJldlZhbHVlLCBpLCBqIH0pO1xuICB9XG5cbiAga2V5VXAoZXZlbnQsIGksIGopIHtcbiAgICB0aGlzLm9uS2V5UHJlc3MuZW1pdCh7IGV2ZW50LCBpLCBqIH0pXG4gIH1cblxuICBhZGROZXdGaWVsZChldmVudCwgaSkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICB0aGlzLm9uQWRkTmV3RmllbGQuZW1pdCh7IGV2ZW50LCBpIH0pXG4gIH1cblxuICByZW1vdmVGaWVsZChldmVudCwgaSwgaikge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICB0aGlzLm9uUmVtb3ZlRmllbGQuZW1pdCh7IGksIGogfSlcbiAgfVxuXG4gIGNoYW5nZVR5cGUodHlwZSwgaSwgaikge1xuICAgIHRoaXMub25DaGFuZ2VUeXBlLmVtaXQoeyB0eXBlLCBpLCBqIH0pXG4gIH1cblxuICByZW1vdmVLZXl3b3JkKGV2ZW50LCBpLCBqKSB7XG4gICAgdGhpcy5vblJlbW92ZUtleXdvcmQuZW1pdCh7IGV2ZW50LCBpLCBqIH0pXG4gIH1cbiAgYWRkTmV3U3ViTGV2ZWxGaWVsZChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgdGhpcy5vbkFkZE5ld1N1YkxldmVsRmllbGQuZW1pdCh0cnVlKVxuICB9XG4gIGV4cGVuZE1vcmUoZSwgZmllbGQpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICB0aGlzLm9uRXhwZW5kTW9yZS5lbWl0KHsgZXhwYW5kOiB0cnVlLCBmaWVsZCB9KVxuICB9XG5cbiAgaW5nb3JlRGVmYXVsdEFjdGlvbihlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gIH1cblxuICBjaGFuZ2VMYWJlbChsYWJlbCwga2V5KSB7XG4gICAgdGhpcy5vbkNoYW5nZUxhYmVsLmVtaXQoeyBsYWJlbCwga2V5IH0pXG4gIH1cblxuICB0b2dnbGVDaGlwID0gKGNoaXA6IGFueSkgPT4ge1xuICAgIHRoaXMub25DaGVja2VkQ2hpcC5lbWl0KGNoaXApXG4gIH1cblxuICBvbkVkaXRDaGlwKGNoaXApIHtcbiAgICBpZiAoY2hpcC52YWx1ZSA9PT0gdGhpcy5jdXJyZW50Q2hpcCkge1xuICAgICAgdGhpcy5jdXJyZW50Q2hpcCA9IFwiXCJcbiAgICAgIHRoaXMucHJldlZhbHVlID0gXCJcIlxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmN1cnJlbnRDaGlwID0gY2hpcC52YWx1ZTtcbiAgICAgIHRoaXMucHJldlZhbHVlID0gY2hpcC52YWx1ZVxuICAgIH1cbiAgfVxuXG4gIGdldCBjaGlwcygpIHsgcmV0dXJuIHRoaXMuY2hpcENvbnRyb2wudmFsdWU7IH1cblxuICBjaGVja2VkRGVmYXVsdCh2YWx1ZSkge1xuICAgIHRoaXMub25DaGVja2VkRGVmYXVsdC5lbWl0KHZhbHVlKVxuICB9XG5cbiAgb25TaG93Q29uZGl0aW9uKGV2ZW50ID0gbnVsbCkge1xuICAgIGlmIChldmVudCkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIH1cbiAgICB0aGlzLnNob3dDb25kaXRpb24gPSAhdGhpcy5zaG93Q29uZGl0aW9uXG4gIH1cblxuICAvLyBjaGVja2VkKGxvY2F0aW9uVmFsdWUsdmFsdWUpe1xuICAvLyAgIHJldHVybiBsb2NhdGlvblZhbHVlLmluY2x1ZGVzKHZhbHVlKVxuICAvLyB9XG5cbiAgZWRpdEJMb2NrKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLm9uRWRpdEJsb2NrLmVtaXQodHJ1ZSk7XG4gIH1cblxuICBvbkNoYW5nZVBvc2l0aW9uKHR5cGU6IHN0cmluZykge1xuICAgIGlmICh0eXBlID09PSBcInRlbFwiKSB7XG4gICAgICByZXR1cm4geyAndG9wJzogJy0zN3B4JywgfVxuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gXCJzZWxlY3RcIikge1xuICAgICAgcmV0dXJuIHsgJ3RvcCc6ICctMjBweCcsIH1cbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09IFwiY2hlY2tib3hcIiB8fCB0eXBlID09PSBcImNoZWNrYm94X211bHRpcGxlXCIpIHtcbiAgICAgIHJldHVybiB7ICd0b3AnOiAnLTI5cHgnLCB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB7fVxuICAgIH1cbiAgfVxuXG5cbiAgZmxhZyh2YWx1ZSkge1xuICAgIGNvbnN0IHZhbHVlU3RyaW5nID0gU3RyaW5nKHZhbHVlKVxuICAgIHJldHVybiB2YWx1ZVN0cmluZyAmJiBpc1ZhbGlkUGhvbmVOdW1iZXIodmFsdWVTdHJpbmcpID8gcGFyc2VQaG9uZU51bWJlcih2YWx1ZVN0cmluZykuY291bnRyeSA6IENvdW50cnlJU08uRnJhbmNlO1xuICB9XG4gIGNoZWNrUGhvbmUocGhvbmUpIHtcbiAgICBpZiAocGhvbmUpIHtcbiAgICAgIGxldCByZWdleCA9IG5ldyBSZWdFeHAoL1xcKyg5Wzk3Nl1cXGR8OFs5ODc1MzBdXFxkfDZbOTg3XVxcZHw1WzkwXVxcZHw0MlxcZHwzWzg3NV1cXGR8Mls5ODY1NDMyMV1cXGR8OVs4NTQzMjEwXXw4WzY0MjFdfDZbNjU0MzIxMF18NVs4NzY1NDMyMV18NFs5ODc2NTQzMTBdfDNbOTY0MzIxMF18Mls3MF18N3wxKVxcVypcXGRcXFcqXFxkXFxXKlxcZFxcVypcXGRcXFcqXFxkXFxXKlxcZFxcVypcXGRcXFcqXFxkXFxXKihcXGR7MSwyfSkkLylcbiAgICAgIHRoaXMuaW52YWxpZGVWYWx1ZSA9ICFyZWdleC50ZXN0KHBob25lWydlMTY0TnVtYmVyJ10pO1xuICAgICAgdGhpcy5vbkNoZWNrVmFsdWUuZW1pdCh0aGlzLmludmFsaWRlVmFsdWUpXG4gICAgfVxuICAgIGlmIChwaG9uZSAmJiBwaG9uZVtcIm5hdGlvbmFsTnVtYmVyXCJdICYmIHBob25lW1wibmF0aW9uYWxOdW1iZXJcIl0gIT0gJycpIHtcbiAgICAgIGxldCBwID0gcGhvbmVbJ25hdGlvbmFsTnVtYmVyJ10ucmVwbGFjZUFsbCgnICcsICcnKTtcbiAgICAgIGxldCBuZXdwOiBhbnkgPSAnJztcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChwLnNwbGl0KCcnKVtpXSkge1xuICAgICAgICAgIGlmIChpICUgMiA9PSAwICYmIGkgPiAwKSB7XG4gICAgICAgICAgICBuZXdwICs9ICcgJztcbiAgICAgICAgICB9XG4gICAgICAgICAgbmV3cCArPSBwLnNwbGl0KCcnKVtpXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGhpcy5maWVsZC52YWx1ZSA9IHBob25lW1wibmF0aW9uYWxOdW1iZXJcIl1cbiAgICB9XG4gIH1cbn1cbiIsIjxkaXYgY2xhc3M9XCJmaWVsZC1pdGVtXCIgKm5nSWY9XCIhZmllbGQuZm9ybXMgfHwgZmllbGQuZm9ybXMubGVuZ3RoPT09MFwiPlxuICA8YnV0dG9uIGNsYXNzPVwidHJhbnNwYXJlbnQtYnV0dG9uIHNldHRpbmdcIiBtYXQtcmFpc2VkLWJ1dHRvbiAoY2xpY2spPVwiJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO2VkaXRCTG9jaygkZXZlbnQpXCI+XG4gICAgPG1hdC1pY29uIGNsYXNzPVwic2V0dGluZy1pY29uXCI+c2V0dGluZ3M8L21hdC1pY29uPlxuICA8L2J1dHRvbj5cbiAgPGJ1dHRvbiAqbmdJZj1cImZpZWxkLmlzQ29uZGl0aW9uYWxcIiBtYXRUb29sdGlwPVwiQ2xpcXVlciBwb3VyIHJlZ2FyZGVyIGxhIGNvbmRpdGlvbiBhcHBsaXF1w6llIMOgIGNlIGNoYW1wIVwiXG4gICAgY2xhc3M9XCJ0cmFuc3BhcmVudC1idXR0b24gY29uZGl0aW9uYWwtdmlld1wiIFtuZ1N0eWxlXT1cIm9uQ2hhbmdlUG9zaXRpb24oZmllbGQudHlwZSlcIiBtYXQtcmFpc2VkLWJ1dHRvblxuICAgIChjbGljayk9XCIkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7ZWRpdEJMb2NrKCRldmVudClcIj5cbiAgICA8bWF0LWljb24gY2xhc3M9XCJzZXR0aW5nLWljb25cIj5pbmZvX291dGxpbmVkPC9tYXQtaWNvbj5cbiAgPC9idXR0b24+XG4gIDxuZy1jb250YWluZXIgW25nU3dpdGNoXT1cImZpZWxkLnR5cGVcIj5cbiAgICA8ZGl2ICpuZ1N3aXRjaENhc2U9XCIndG9nZ2xlJ1wiIGNsYXNzPVwiZmxleC1hdXRvIGZpZWxkLXNpemUgdG9nZ2xlLWJ1dHRvblwiPlxuICAgICAgPHNwYW4+e3sgZmllbGQubGFiZWwgfX08L3NwYW4+XG4gICAgICA8bWF0LXNsaWRlLXRvZ2dsZSBjbGFzcz1cImZvcm0tZmllbGRcIiBbKG5nTW9kZWwpXT1cImZpZWxkLmRlZmF1bHRWYWx1ZVwiIFtuZ01vZGVsT3B0aW9uc109XCJ7IHN0YW5kYWxvbmU6IHRydWUgfVwiXG4gICAgICAgIFtuZ1N0eWxlXT1cImZpZWxkLnNlbGVjdG9yICYmIHsgZGlzcGxheTogJ2luaW5lLWJsb2NrJyB9XCI+XG4gICAgICA8L21hdC1zbGlkZS10b2dnbGU+XG4gICAgPC9kaXY+XG4gICAgPGRpdiAqbmdTd2l0Y2hDYXNlPVwiJ3RlbCdcIiBjbGFzcz1cImZvcm0tZmllbGQgZnVsbC13aWR0aCB0ZWwtaW5wdXRcIj5cbiAgICAgIDxtYXQtbGFiZWwgY2xhc3M9XCJ0ZWwtbGFiZWxcIj57e2ZpZWxkLmxhYmVsfX08L21hdC1sYWJlbD5cbiAgICAgIDxuZ3gtaW50bC10ZWwtaW5wdXQgaWQ9XCJvbmJvYXJkaW5nLXBob25lLWlucHV0XCIgY2xhc3M9XCJwaG9uZS1pbnB1dC1wcm9maWxlXCIgW2Nzc0NsYXNzXT1cIidpbnB1dC1waG9uZSdcIlxuICAgICAgICBbcHJlZmVycmVkQ291bnRyaWVzXT1cInByZWZlcnJlZENvdW50cmllc1wiIFtlbmFibGVBdXRvQ291bnRyeVNlbGVjdF09XCJmYWxzZVwiIFtlbmFibGVQbGFjZWhvbGRlcl09XCJ0cnVlXCJcbiAgICAgICAgW2N1c3RvbVBsYWNlaG9sZGVyXT1cIidQaG9uZSdcIiBbc2VsZWN0Rmlyc3RDb3VudHJ5XT1cImZhbHNlXCIgW3NlbGVjdGVkQ291bnRyeUlTT109XCJmbGFnKGZpZWxkLnZhbHVlKVwiXG4gICAgICAgIFttYXhMZW5ndGhdPVwiMTVcIiBbaW5wdXRJZF09XCJmaWVsZC5rZXlcIiBbcGhvbmVWYWxpZGF0aW9uXT1cInRydWVcIiBbc2VwYXJhdGVEaWFsQ29kZV09XCJzZXBhcmF0ZURpYWxDb2RlXCJcbiAgICAgICAgW251bWJlckZvcm1hdF09XCJQaG9uZU51bWJlckZvcm1hdC5OYXRpb25hbFwiIG5hbWU9XCJwaG9uZVwiIChpbnB1dCk9XCJjaGVja1Bob25lKGZpZWxkLnZhbHVlKVwiXG4gICAgICAgIFtuZ01vZGVsT3B0aW9uc109XCJ7c3RhbmRhbG9uZTogdHJ1ZX1cIiBbKG5nTW9kZWwpXT1cImZpZWxkLnZhbHVlXCI+XG4gICAgICA8L25neC1pbnRsLXRlbC1pbnB1dD5cbiAgICAgIDxtYXQtZXJyb3IgKm5nSWY9XCJpbnZhbGlkZVZhbHVlXCI+TGUgdMOpbMOpcGhvbmUgZXN0IGludmFsaWRlPC9tYXQtZXJyb3I+XG4gICAgPC9kaXY+XG4gICAgPGRpdiAqbmdTd2l0Y2hDYXNlPVwiJ2NoZWNrYm94J1wiIGNsYXNzPVwiZmxleC1hdXRvIGZpZWxkLXNpemVcIj5cbiAgICAgIDxtYXQtY2hlY2tib3ggY2xhc3M9XCJmb3JtLWZpZWxkXCIgWyhuZ01vZGVsKV09XCJmaWVsZC52YWx1ZVwiIFtuZ01vZGVsT3B0aW9uc109XCJ7IHN0YW5kYWxvbmU6IHRydWUgfVwiXG4gICAgICAgIFtuZ1N0eWxlXT1cImZpZWxkLnNlbGVjdG9yICYmIHsgZGlzcGxheTogJ2luaW5lLWJsb2NrJyB9XCI+XG4gICAgICAgIHt7IGZpZWxkLmxhYmVsIH19XG4gICAgICA8L21hdC1jaGVja2JveD5cbiAgICAgIDxtYXQtc2VsZWN0IHBsYWNlaG9sZGVyPVwiQ29tcGFueVwiIFsobmdNb2RlbCldPVwiZmllbGQuc2VsZWN0b3IudmFsdWVcIiBbbmdNb2RlbE9wdGlvbnNdPVwieyBzdGFuZGFsb25lOiB0cnVlIH1cIlxuICAgICAgICAqbmdJZj1cImZpZWxkLnNlbGVjdG9yXCIgc3R5bGU9XCJkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IHdpZHRoOiA1MCVcIj5cbiAgICAgICAgPG1hdC1vcHRpb24gKm5nRm9yPVwibGV0IHNlbGVjdCBvZiBmaWVsZC5zZWxlY3Rvci5kZWZhdWx0VmFsdWVcIiBbdmFsdWVdPVwic2VsZWN0LnZhbHVlXCI+IHt7IHNlbGVjdC52YWx1ZSB9fVxuICAgICAgICA8L21hdC1vcHRpb24+XG4gICAgICA8L21hdC1zZWxlY3Q+XG4gICAgPC9kaXY+XG4gICAgPGRpdiAqbmdTd2l0Y2hDYXNlPVwiJ2NoZWNrYm94X211bHRpcGxlJ1wiIGNsYXNzPVwiZmxleC1hdXRvIGZpZWxkLXNpemVcIiBzdHlsZT1cIndpZHRoOiAxMDAlO1wiPlxuICAgICAgPGxhYmVsPnt7IGZpZWxkLmxhYmVsIH19PC9sYWJlbD5cbiAgICAgIDxkaXYgc3R5bGU9XCJtYXJnaW4tdG9wOiAyMHB4XCIgY2xhc3M9XCJvbmJvYXJkaW5nLXNlbGVjdFwiPlxuICAgICAgICA8bWF0LWNoZWNrYm94IGNsYXNzPVwiZm9ybS1maWVsZFwiXG4gICAgICAgICAgc3R5bGU9XCJkaXNwbGF5OiBibG9jazsgbWFyZ2luLWJvdHRvbTogNXB4OyBtYXJnaW4tdG9wOiAxMHB4OyBtYXJnaW4tcmlnaHQ6IDEwcHg7XCJcbiAgICAgICAgICAqbmdGb3I9XCJsZXQgb3B0IG9mIGZpZWxkLmRlZmF1bHRWYWx1ZVwiIFtjaGVja2VkXT1cIm9wdC5jaGVja2VkXCIgWyhuZ01vZGVsKV09XCJvcHQuY2hlY2tlZFwiXG4gICAgICAgICAgW25nTW9kZWxPcHRpb25zXT1cInsgc3RhbmRhbG9uZTogdHJ1ZSB9XCI+XG4gICAgICAgICAge3sgb3B0LnZhbHVlIH19XG4gICAgICAgIDwvbWF0LWNoZWNrYm94PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGRpdiAqbmdTd2l0Y2hDYXNlPVwiJ3JhZGlvJ1wiIGNsYXNzPVwiZmxleC1hdXRvIGZpZWxkLXNpemVcIj5cbiAgICAgIDxsYWJlbCBzdHlsZT1cImRpc3BsYXk6IGJsb2NrXCI+IHt7IGZpZWxkLmxhYmVsIH19IDwvbGFiZWw+XG4gICAgICA8bWF0LXJhZGlvLWdyb3VwIGNsYXNzPVwiZm9ybS1maWVsZCByYWRpby1ncm91cCBmaWVsZC1zaXplIG9uYm9hcmRpbmctc2VsZWN0XCIgWyhuZ01vZGVsKV09XCJmaWVsZC52YWx1ZVwiXG4gICAgICAgIFtyZXF1aXJlZF09XCJmaWVsZC5pc01hbmRhdG9yeVwiIGFyaWEtbGFiZWw9XCJTZWxlY3QgYW4gb3B0aW9uXCI+XG4gICAgICAgIDxtYXQtcmFkaW8tYnV0dG9uICpuZ0Zvcj1cImxldCBvcHQgb2YgZmllbGQuZGVmYXVsdFZhbHVlXCIgc3R5bGU9XCJtYXJnaW4tYm90dG9tOiAyMHB4O1wiIFt2YWx1ZV09XCJvcHQudmFsdWVcIj57e1xuICAgICAgICAgIG9wdC52YWx1ZSB9fSA8L21hdC1yYWRpby1idXR0b24+XG4gICAgICA8L21hdC1yYWRpby1ncm91cD5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2ICpuZ1N3aXRjaENhc2U9XCInc2VsZWN0J1wiIGNsYXNzPVwiZmxleC1hdXRvIGZpZWxkLXNpemUgc2VsZWN0LWNvbnRlbnRcIj5cbiAgICAgIDxtYXQtZm9ybS1maWVsZCBjbGFzcz1cIm1hdC1zZWxlY3QgZmxleC1hdXRvIGZpZWxkLXNpemVcIiBhcHBlYXJhbmNlPVwib3V0bGluZVwiPlxuICAgICAgICA8bWF0LWxhYmVsPiB7eyBmaWVsZC5sYWJlbCB9fSA8L21hdC1sYWJlbD5cbiAgICAgICAgPG1hdC1zZWxlY3QgWyhuZ01vZGVsKV09XCJmaWVsZC52YWx1ZVwiIFtuZ01vZGVsT3B0aW9uc109XCJ7IHN0YW5kYWxvbmU6IHRydWUgfVwiPlxuICAgICAgICAgIDxtYXQtb3B0aW9uICpuZ0Zvcj1cImxldCBvcHQgb2YgZmllbGQuZGVmYXVsdFZhbHVlXCIgW3ZhbHVlXT1cIm9wdC52YWx1ZVwiPnt7IG9wdC52YWx1ZSB9fTwvbWF0LW9wdGlvbj5cbiAgICAgICAgPC9tYXQtc2VsZWN0PlxuICAgICAgPC9tYXQtZm9ybS1maWVsZD5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2ICpuZ1N3aXRjaENhc2U9XCInbm9uZSdcIiBjbGFzcz1cImZsZXgtYXV0byBmaWVsZC1zaXplIHNlbGVjdC1jb250ZW50XCIgc3R5bGU9XCJvcGFjaXR5OjAgO1wiPlxuICAgICAgPG1hdC1mb3JtLWZpZWxkIGNsYXNzPVwibWF0LXNlbGVjdCBmbGV4LWF1dG8gZmllbGQtc2l6ZVwiIGFwcGVhcmFuY2U9XCJvdXRsaW5lXCI+XG4gICAgICAgIDxtYXQtbGFiZWw+PC9tYXQtbGFiZWw+XG4gICAgICAgIDxpbnB1dCBbdHlwZV09XCJmaWVsZC50eXBlXCIgZGlzYWJsZWQ9XCJ0cnVlXCIgbWF0SW5wdXQgLz5cbiAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XG4gICAgPC9kaXY+XG4gICAgPG1hdC1mb3JtLWZpZWxkICpuZ1N3aXRjaENhc2U9XCInZGF0ZSdcIiBjbGFzcz1cImZvcm0tZmllbGQgZmllbGQtc2l6ZVwiIGFwcGVhcmFuY2U9XCJvdXRsaW5lXCI+XG4gICAgICA8bWF0LWxhYmVsPnt7ZmllbGQubGFiZWx9fTwvbWF0LWxhYmVsPlxuICAgICAgPGlucHV0IG1hdElucHV0IFttYXREYXRlcGlja2VyXT1cInBpY2tlclwiIFtuZ01vZGVsT3B0aW9uc109XCJ7IHN0YW5kYWxvbmU6IHRydWUgfVwiIFsobmdNb2RlbCldPVwiZmllbGQuZGVmYXVsdFZhbHVlXCI+XG4gICAgICA8bWF0LWRhdGVwaWNrZXItdG9nZ2xlIG1hdFN1ZmZpeCBbZm9yXT1cInBpY2tlclwiPjwvbWF0LWRhdGVwaWNrZXItdG9nZ2xlPlxuICAgICAgPG1hdC1kYXRlcGlja2VyICNwaWNrZXI+PC9tYXQtZGF0ZXBpY2tlcj5cbiAgICA8L21hdC1mb3JtLWZpZWxkPlxuICAgIDxtYXQtZm9ybS1maWVsZCBbY2xhc3MuYmxpbmtdPVwiYmxpbmtcIiAqbmdTd2l0Y2hEZWZhdWx0IGNsYXNzPVwiZm9ybS1maWVsZCBmaWVsZC1zaXplXCIgYXBwZWFyYW5jZT1cIm91dGxpbmVcIj5cbiAgICAgIDxtYXQtbGFiZWw+e3sgZmllbGQubGFiZWwgfX08L21hdC1sYWJlbD5cbiAgICAgIDxpbnB1dCBbdHlwZV09XCJmaWVsZC50eXBlXCIgbWF0SW5wdXQgW25nTW9kZWxPcHRpb25zXT1cInsgc3RhbmRhbG9uZTogdHJ1ZSB9XCIgWyhuZ01vZGVsKV09XCJmaWVsZC5kZWZhdWx0VmFsdWVcIlxuICAgICAgICBwbGFjZWhvbGRlcj1cIlwiIC8+XG4gICAgPC9tYXQtZm9ybS1maWVsZD5cbiAgPC9uZy1jb250YWluZXI+XG48L2Rpdj5cblxuPG5nLWNvbnRlbnQgc2VsZWN0PVwiLmNoaWxkXCI+PC9uZy1jb250ZW50PiJdfQ==