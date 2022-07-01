import { Component, EventEmitter, Input, Output } from '@angular/core';
import { COMMA, ENTER, SEMICOLON } from '@angular/cdk/keycodes';
import { CountryISO, PhoneNumberFormat } from 'ngx-intl-tel-input';
import { isValidPhoneNumber, parsePhoneNumber } from 'libphonenumber-js';
import { FormControl } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/material/button";
import * as i3 from "@angular/material/icon";
import * as i4 from "@angular/material/tooltip";
import * as i5 from "@angular/material/slide-toggle";
import * as i6 from "@angular/forms";
import * as i7 from "ngx-intl-tel-input";
import * as i8 from "@angular/material/form-field";
import * as i9 from "@angular/material/checkbox";
import * as i10 from "@angular/material/select";
import * as i11 from "@angular/material/core";
import * as i12 from "@angular/material/radio";
import * as i13 from "@angular/material/input";
import * as i14 from "@angular/material/datepicker";
function SubTemplateProfileComponent_div_0_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r331 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 14);
    i0.ɵɵlistener("click", function SubTemplateProfileComponent_div_0_button_4_Template_button_click_0_listener($event) { i0.ɵɵrestoreView(_r331); const ctx_r330 = i0.ɵɵnextContext(2); return ctx_r330.editBLock($event); });
    i0.ɵɵelementStart(1, "mat-icon", 3);
    i0.ɵɵtext(2, "info_outlined");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r320 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngStyle", ctx_r320.onChangePosition(ctx_r320.field.type));
} }
const _c0 = function () { return { standalone: true }; };
const _c1 = function () { return { display: "inine-block" }; };
function SubTemplateProfileComponent_div_0_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r333 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 15);
    i0.ɵɵelementStart(1, "span");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "mat-slide-toggle", 16);
    i0.ɵɵlistener("ngModelChange", function SubTemplateProfileComponent_div_0_div_6_Template_mat_slide_toggle_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r333); const ctx_r332 = i0.ɵɵnextContext(2); return ctx_r332.field.defaultValue = $event; });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r321 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r321.field.label);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", ctx_r321.field.defaultValue)("ngModelOptions", i0.ɵɵpureFunction0(4, _c0))("ngStyle", ctx_r321.field.selector && i0.ɵɵpureFunction0(5, _c1));
} }
function SubTemplateProfileComponent_div_0_div_7_mat_error_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-error");
    i0.ɵɵtext(1, "Le t\u00E9l\u00E9phone est invalide");
    i0.ɵɵelementEnd();
} }
function SubTemplateProfileComponent_div_0_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r336 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 17);
    i0.ɵɵelementStart(1, "mat-label", 18);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "ngx-intl-tel-input", 19);
    i0.ɵɵlistener("input", function SubTemplateProfileComponent_div_0_div_7_Template_ngx_intl_tel_input_input_3_listener() { i0.ɵɵrestoreView(_r336); const ctx_r335 = i0.ɵɵnextContext(2); return ctx_r335.checkPhone(ctx_r335.field.value); })("ngModelChange", function SubTemplateProfileComponent_div_0_div_7_Template_ngx_intl_tel_input_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r336); const ctx_r337 = i0.ɵɵnextContext(2); return ctx_r337.field.value = $event; });
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(4, SubTemplateProfileComponent_div_0_div_7_mat_error_4_Template, 2, 0, "mat-error", 20);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r322 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r322.field.label);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("cssClass", "input-phone")("preferredCountries", ctx_r322.preferredCountries)("enableAutoCountrySelect", false)("enablePlaceholder", true)("customPlaceholder", "Phone")("selectFirstCountry", false)("selectedCountryISO", ctx_r322.flag(ctx_r322.field.value))("maxLength", 15)("inputId", ctx_r322.field.key)("phoneValidation", true)("separateDialCode", ctx_r322.separateDialCode)("numberFormat", ctx_r322.PhoneNumberFormat.National)("ngModelOptions", i0.ɵɵpureFunction0(16, _c0))("ngModel", ctx_r322.field.value);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r322.invalideValue);
} }
function SubTemplateProfileComponent_div_0_div_8_mat_select_3_mat_option_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 25);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const select_r340 = ctx.$implicit;
    i0.ɵɵproperty("value", select_r340.value);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", select_r340.value, " ");
} }
function SubTemplateProfileComponent_div_0_div_8_mat_select_3_Template(rf, ctx) { if (rf & 1) {
    const _r342 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-select", 23);
    i0.ɵɵlistener("ngModelChange", function SubTemplateProfileComponent_div_0_div_8_mat_select_3_Template_mat_select_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r342); const ctx_r341 = i0.ɵɵnextContext(3); return ctx_r341.field.selector.value = $event; });
    i0.ɵɵtemplate(1, SubTemplateProfileComponent_div_0_div_8_mat_select_3_mat_option_1_Template, 2, 2, "mat-option", 24);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r338 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("ngModel", ctx_r338.field.selector.value)("ngModelOptions", i0.ɵɵpureFunction0(3, _c0));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r338.field.selector.defaultValue);
} }
function SubTemplateProfileComponent_div_0_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r344 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 21);
    i0.ɵɵelementStart(1, "mat-checkbox", 16);
    i0.ɵɵlistener("ngModelChange", function SubTemplateProfileComponent_div_0_div_8_Template_mat_checkbox_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r344); const ctx_r343 = i0.ɵɵnextContext(2); return ctx_r343.field.value = $event; });
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, SubTemplateProfileComponent_div_0_div_8_mat_select_3_Template, 2, 4, "mat-select", 22);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r323 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", ctx_r323.field.value)("ngModelOptions", i0.ɵɵpureFunction0(5, _c0))("ngStyle", ctx_r323.field.selector && i0.ɵɵpureFunction0(6, _c1));
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r323.field.label, " ");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r323.field.selector);
} }
function SubTemplateProfileComponent_div_0_div_9_mat_checkbox_4_Template(rf, ctx) { if (rf & 1) {
    const _r348 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-checkbox", 29);
    i0.ɵɵlistener("ngModelChange", function SubTemplateProfileComponent_div_0_div_9_mat_checkbox_4_Template_mat_checkbox_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r348); const opt_r346 = ctx.$implicit; return opt_r346.checked = $event; });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const opt_r346 = ctx.$implicit;
    i0.ɵɵproperty("checked", opt_r346.checked)("ngModel", opt_r346.checked)("ngModelOptions", i0.ɵɵpureFunction0(4, _c0));
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", opt_r346.value, " ");
} }
function SubTemplateProfileComponent_div_0_div_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 26);
    i0.ɵɵelementStart(1, "label");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 27);
    i0.ɵɵtemplate(4, SubTemplateProfileComponent_div_0_div_9_mat_checkbox_4_Template, 2, 5, "mat-checkbox", 28);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r324 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r324.field.label);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r324.field.defaultValue);
} }
function SubTemplateProfileComponent_div_0_div_10_mat_radio_button_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-radio-button", 33);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const opt_r350 = ctx.$implicit;
    i0.ɵɵproperty("value", opt_r350.value);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1("", opt_r350.value, " ");
} }
function SubTemplateProfileComponent_div_0_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r352 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 21);
    i0.ɵɵelementStart(1, "label", 30);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "mat-radio-group", 31);
    i0.ɵɵlistener("ngModelChange", function SubTemplateProfileComponent_div_0_div_10_Template_mat_radio_group_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r352); const ctx_r351 = i0.ɵɵnextContext(2); return ctx_r351.field.value = $event; });
    i0.ɵɵtemplate(4, SubTemplateProfileComponent_div_0_div_10_mat_radio_button_4_Template, 2, 2, "mat-radio-button", 32);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r325 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r325.field.label, " ");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", ctx_r325.field.value)("required", ctx_r325.field.isMandatory);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r325.field.defaultValue);
} }
function SubTemplateProfileComponent_div_0_div_11_mat_option_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 25);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const opt_r354 = ctx.$implicit;
    i0.ɵɵproperty("value", opt_r354.value);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(opt_r354.value);
} }
function SubTemplateProfileComponent_div_0_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r356 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 34);
    i0.ɵɵelementStart(1, "mat-form-field", 35);
    i0.ɵɵelementStart(2, "mat-label");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "mat-select", 36);
    i0.ɵɵlistener("ngModelChange", function SubTemplateProfileComponent_div_0_div_11_Template_mat_select_ngModelChange_4_listener($event) { i0.ɵɵrestoreView(_r356); const ctx_r355 = i0.ɵɵnextContext(2); return ctx_r355.field.value = $event; });
    i0.ɵɵtemplate(5, SubTemplateProfileComponent_div_0_div_11_mat_option_5_Template, 2, 2, "mat-option", 24);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r326 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", ctx_r326.field.label, " ");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", ctx_r326.field.value)("ngModelOptions", i0.ɵɵpureFunction0(4, _c0));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r326.field.defaultValue);
} }
function SubTemplateProfileComponent_div_0_div_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 37);
    i0.ɵɵelementStart(1, "mat-form-field", 35);
    i0.ɵɵelement(2, "mat-label");
    i0.ɵɵelement(3, "input", 38);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r327 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("type", ctx_r327.field.type);
} }
function SubTemplateProfileComponent_div_0_mat_form_field_13_Template(rf, ctx) { if (rf & 1) {
    const _r359 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-form-field", 39);
    i0.ɵɵelementStart(1, "mat-label");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "input", 40);
    i0.ɵɵlistener("ngModelChange", function SubTemplateProfileComponent_div_0_mat_form_field_13_Template_input_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r359); const ctx_r358 = i0.ɵɵnextContext(2); return ctx_r358.field.defaultValue = $event; });
    i0.ɵɵelementEnd();
    i0.ɵɵelement(4, "mat-datepicker-toggle", 41);
    i0.ɵɵelement(5, "mat-datepicker", null, 42);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const _r357 = i0.ɵɵreference(6);
    const ctx_r328 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r328.field.label);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("matDatepicker", _r357)("ngModelOptions", i0.ɵɵpureFunction0(5, _c0))("ngModel", ctx_r328.field.defaultValue);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("for", _r357);
} }
function SubTemplateProfileComponent_div_0_mat_form_field_14_Template(rf, ctx) { if (rf & 1) {
    const _r361 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-form-field", 39);
    i0.ɵɵelementStart(1, "mat-label");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "input", 43);
    i0.ɵɵlistener("ngModelChange", function SubTemplateProfileComponent_div_0_mat_form_field_14_Template_input_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r361); const ctx_r360 = i0.ɵɵnextContext(2); return ctx_r360.field.defaultValue = $event; });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r329 = i0.ɵɵnextContext(2);
    i0.ɵɵclassProp("blink", ctx_r329.blink);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r329.field.label);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("type", ctx_r329.field.type)("ngModelOptions", i0.ɵɵpureFunction0(6, _c0))("ngModel", ctx_r329.field.defaultValue);
} }
function SubTemplateProfileComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r363 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 1);
    i0.ɵɵelementStart(1, "button", 2);
    i0.ɵɵlistener("click", function SubTemplateProfileComponent_div_0_Template_button_click_1_listener($event) { i0.ɵɵrestoreView(_r363); const ctx_r362 = i0.ɵɵnextContext(); return ctx_r362.editBLock($event); });
    i0.ɵɵelementStart(2, "mat-icon", 3);
    i0.ɵɵtext(3, "settings");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
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
    const ctx_r319 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngIf", ctx_r319.field.isConditional);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitch", ctx_r319.field.type);
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
        this.chipControl = new FormControl(new Set());
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
SubTemplateProfileComponent.ɵcmp = i0.ɵɵdefineComponent({ type: SubTemplateProfileComponent, selectors: [["lib-sub-category"]], inputs: { field: "field", length: "length", i: "i", j: "j", conditionData: "conditionData", blink: "blink" }, outputs: { onAddKeywordFromInput: "onAddKeywordFromInput", onKeyPress: "onKeyPress", onDrop: "onDrop", onAddNewField: "onAddNewField", onRemoveField: "onRemoveField", onChangeType: "onChangeType", onRemoveKeyword: "onRemoveKeyword", onAddNewSubLevelField: "onAddNewSubLevelField", onExpendMore: "onExpendMore", onChangeLabel: "onChangeLabel", onCheckedChip: "onCheckedChip", onCheckedDefault: "onCheckedDefault", onGetConditionValues: "onGetConditionValues", onEditBlock: "onEditBlock", onCheckValue: "onCheckValue" }, ngContentSelectors: _c3, decls: 2, vars: 1, consts: [["class", "field-item", 4, "ngIf"], [1, "field-item"], ["mat-raised-button", "", 1, "transparent-button", "setting", 3, "click"], [1, "setting-icon"], ["matTooltip", "Cliquer pour regarder la condition appliqu\u00E9e \u00E0 ce champ!", "class", "transparent-button conditional-view", "mat-raised-button", "", 3, "ngStyle", "click", 4, "ngIf"], [3, "ngSwitch"], ["class", "flex-auto field-size toggle-button", 4, "ngSwitchCase"], ["class", "form-field full-width tel-input", 4, "ngSwitchCase"], ["class", "flex-auto field-size", 4, "ngSwitchCase"], ["class", "flex-auto field-size", "style", "width: 100%;", 4, "ngSwitchCase"], ["class", "flex-auto field-size select-content", 4, "ngSwitchCase"], ["class", "flex-auto field-size select-content", "style", "opacity:0 ;", 4, "ngSwitchCase"], ["class", "form-field field-size", "appearance", "outline", 4, "ngSwitchCase"], ["class", "form-field field-size", "appearance", "outline", 3, "blink", 4, "ngSwitchDefault"], ["matTooltip", "Cliquer pour regarder la condition appliqu\u00E9e \u00E0 ce champ!", "mat-raised-button", "", 1, "transparent-button", "conditional-view", 3, "ngStyle", "click"], [1, "flex-auto", "field-size", "toggle-button"], [1, "form-field", 3, "ngModel", "ngModelOptions", "ngStyle", "ngModelChange"], [1, "form-field", "full-width", "tel-input"], [1, "tel-label"], ["id", "onboarding-phone-input", "name", "phone", 1, "phone-input-profile", 3, "cssClass", "preferredCountries", "enableAutoCountrySelect", "enablePlaceholder", "customPlaceholder", "selectFirstCountry", "selectedCountryISO", "maxLength", "inputId", "phoneValidation", "separateDialCode", "numberFormat", "ngModelOptions", "ngModel", "input", "ngModelChange"], [4, "ngIf"], [1, "flex-auto", "field-size"], ["placeholder", "Company", "style", "display: inline-block; width: 50%", 3, "ngModel", "ngModelOptions", "ngModelChange", 4, "ngIf"], ["placeholder", "Company", 2, "display", "inline-block", "width", "50%", 3, "ngModel", "ngModelOptions", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], [1, "flex-auto", "field-size", 2, "width", "100%"], [1, "onboarding-select", 2, "margin-top", "20px"], ["class", "form-field", "style", "display: block; margin-bottom: 5px; margin-top: 10px; margin-right: 10px;", 3, "checked", "ngModel", "ngModelOptions", "ngModelChange", 4, "ngFor", "ngForOf"], [1, "form-field", 2, "display", "block", "margin-bottom", "5px", "margin-top", "10px", "margin-right", "10px", 3, "checked", "ngModel", "ngModelOptions", "ngModelChange"], [2, "display", "block"], ["aria-label", "Select an option", 1, "form-field", "radio-group", "field-size", "onboarding-select", 3, "ngModel", "required", "ngModelChange"], ["style", "margin-bottom: 20px;", 3, "value", 4, "ngFor", "ngForOf"], [2, "margin-bottom", "20px", 3, "value"], [1, "flex-auto", "field-size", "select-content"], ["appearance", "outline", 1, "mat-select", "flex-auto", "field-size"], [3, "ngModel", "ngModelOptions", "ngModelChange"], [1, "flex-auto", "field-size", "select-content", 2, "opacity", "0"], ["disabled", "true", "matInput", "", 3, "type"], ["appearance", "outline", 1, "form-field", "field-size"], ["matInput", "", 3, "matDatepicker", "ngModelOptions", "ngModel", "ngModelChange"], ["matSuffix", "", 3, "for"], ["picker", ""], ["matInput", "", "placeholder", "", 3, "type", "ngModelOptions", "ngModel", "ngModelChange"]], template: function SubTemplateProfileComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef(_c2);
        i0.ɵɵtemplate(0, SubTemplateProfileComponent_div_0_Template, 15, 10, "div", 0);
        i0.ɵɵprojection(1);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", !ctx.field.forms || ctx.field.forms.length === 0);
    } }, directives: [i1.NgIf, i2.MatButton, i3.MatIcon, i1.NgSwitch, i1.NgSwitchCase, i1.NgSwitchDefault, i4.MatTooltip, i1.NgStyle, i5.MatSlideToggle, i6.NgControlStatus, i6.NgModel, i7.NativeElementInjectorDirective, i8.MatLabel, i7.NgxIntlTelInputComponent, i8.MatError, i9.MatCheckbox, i10.MatSelect, i1.NgForOf, i11.MatOption, i12.MatRadioGroup, i6.RequiredValidator, i12.MatRadioButton, i8.MatFormField, i13.MatInput, i14.MatDatepickerInput, i6.DefaultValueAccessor, i14.MatDatepickerToggle, i8.MatSuffix, i14.MatDatepicker], styles: [".container[_ngcontent-%COMP%]{max-width:98%;margin:50px auto auto;padding-bottom:50px}.container[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:space-between}.input-category-name[_ngcontent-%COMP%]{font-size:15px;font-weight:500}.full-width[_ngcontent-%COMP%]{width:100%}.field-item[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;width:100%;flex-wrap:wrap;position:relative;margin-top:10px}.field-item[_ngcontent-%COMP%]   .button-action[_ngcontent-%COMP%]{background-color:#6fe8d7;height:100%;margin:auto 15px auto auto;display:flex}.field-item[_ngcontent-%COMP%]   .button-action[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{box-shadow:none;background-color:transparent;color:#fff}.field-item[_ngcontent-%COMP%]   .setting[_ngcontent-%COMP%]{position:absolute;top:-5px;right:-12px;z-index:1;background-color:#d5d6d7!important;border-radius:50px;width:40px!important;height:40px!important;display:none}.field-item[_ngcontent-%COMP%]   .conditional-view[_ngcontent-%COMP%]{position:absolute;top:-28px;left:-9px;z-index:9;background-color:transparent!important;border-radius:50px;width:40px!important;height:40px!important}.field-item[_ngcontent-%COMP%]:hover   .setting[_ngcontent-%COMP%]{display:block}.field-item[_ngcontent-%COMP%]:hover   .conditional-view[_ngcontent-%COMP%]{background-color:#d5d6d7!important}.field-action[_ngcontent-%COMP%]{width:10%}hr[_ngcontent-%COMP%]{margin:50px 0}  .mat-form-field-appearance-fill .mat-form-field-flex{background-color:#fff}.category-action[_ngcontent-%COMP%]{display:flex;width:100%}.delete-field[_ngcontent-%COMP%]{margin:auto 2%}.radio-group[_ngcontent-%COMP%]   .mat-radio-button[_ngcontent-%COMP%]{margin-right:10px}.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary[_ngcontent-%COMP%]{background-color:#3f51b5;color:#fff;min-height:20px;font-size:10px}.move-icons[_ngcontent-%COMP%]{cursor:move}.category-item[_ngcontent-%COMP%]{display:flex;align-items:baseline;width:100%;border:1px solid #dce4e9;border-radius:8px}  .readonly.mat-form-field-appearance-outline .mat-form-field-outline{color:transparent!important}.field-content[_ngcontent-%COMP%]{width:100%}.cdk-drag-preview[_ngcontent-%COMP%]{box-sizing:border-box;border-radius:4px;box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.cdk-drag-placeholder[_ngcontent-%COMP%]{opacity:0}.cdk-drag-animating[_ngcontent-%COMP%], .example-list.cdk-drop-list-dragging[_ngcontent-%COMP%]   .category-item[_ngcontent-%COMP%]:not(.cdk-drag-placeholder){transition:transform 250ms cubic-bezier(0,0,.2,1)}.add-button-container[_ngcontent-%COMP%]{background:no-repeat padding-box #fff;border:1px dashed #dce4e9;border-radius:8px;margin-top:10px;padding:10px;display:flex;justify-content:center;align-items:center;width:98%;margin-left:0;margin-bottom:22px}.add-button-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{display:flex;align-items:center;background-color:transparent;border:none;cursor:pointer;font:17px/26px Nexa Text;letter-spacing:0;color:#c2c8d5;box-shadow:none}.expand-button[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%]{font-size:48px;margin-top:-20px;margin-right:15px}.transparent-button[_ngcontent-%COMP%]{background-color:transparent!important;box-shadow:none!important;width:40px!important;padding:0!important;margin:0!important;min-width:auto!important}.expand-button[_ngcontent-%COMP%]{color:#5a607f!important;background-color:transparent!important;box-shadow:none!important}.checkbox-condition[_ngcontent-%COMP%]{position:relative}.checkbox-condition[_ngcontent-%COMP%]   .condition-container[_ngcontent-%COMP%]{position:absolute;top:30px;width:500px;height:150px;background-color:#fff;border:1px dashed #dce4e9;z-index:1;left:0;border-radius:5px}.checkbox-condition[_ngcontent-%COMP%]   .condition-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{position:absolute;bottom:5px;left:0}.condition-help[_ngcontent-%COMP%]{cursor:pointer}.cdk-overlay-pane[_ngcontent-%COMP%]{width:100%}.child[_ngcontent-%COMP%]{margin-left:0}.child[_ngcontent-%COMP%]   .cdk-drop-list[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap}.toggle-button[_ngcontent-%COMP%]{display:flex;align-items:center}.toggle-button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin-right:10px}.onboarding-select[_ngcontent-%COMP%]{display:-ms-grid;display:grid;-ms-grid-columns:(1fr)[6];grid-template-columns:repeat(6,1fr)}  .country-dropdown{min-width:unset!important}  .tel-input{position:relative}  .tel-input .tel-label{font-size:12px;color:rgba(0,0,0,.6);position:absolute;z-index:1;background-color:#fff;padding:0 2px;left:8px;top:-7px}  .phone-input-profile{padding-bottom:0;padding-top:0;display:block!important;max-width:100%;font:14px/20px \"Nexa Text\"!important;width:100%}  .phone-input-profile .iti{width:100%!important}  .phone-input-profile input{outline:0;padding:19px;border-radius:5px;border-width:1px;width:100%;border:1px solid rgba(0,0,0,.12)}  .blink{-webkit-animation:2s ease-out blink;animation:2s ease-out blink}  .blink.mat-form-field-appearance-outline .mat-form-field-outline{border-radius:10px!important;box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12);color:#242731!important}@-webkit-keyframes blink{0%{opacity:0;transform:scale(0)}10%{opacity:.1;transform:scale(.1)}20%{opacity:.2;transform:scale(.2)}30%{opacity:.3;transform:scale(.3)}40%{opacity:.4;transform:scale(.4)}50%{opacity:.5;transform:scale(.5)}60%{opacity:.6;transform:scale(.6)}70%{opacity:.7;transform:scale(.7)}80%{opacity:.8;transform:scale(.8)}90%{opacity:.9;transform:scale(.9)}100%{transform:scale(1);opacity:1}}@keyframes blink{0%{opacity:0;transform:scale(0)}10%{opacity:.1;transform:scale(.1)}20%{opacity:.2;transform:scale(.2)}30%{opacity:.3;transform:scale(.3)}40%{opacity:.4;transform:scale(.4)}50%{opacity:.5;transform:scale(.5)}60%{opacity:.6;transform:scale(.6)}70%{opacity:.7;transform:scale(.7)}80%{opacity:.8;transform:scale(.8)}90%{opacity:.9;transform:scale(.9)}100%{transform:scale(1);opacity:1}}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SubTemplateProfileComponent, [{
        type: Component,
        args: [{
                selector: 'lib-sub-category',
                templateUrl: './sub-template-profile.component.html',
                styleUrls: ['./sub-template-profile.component.scss'],
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3ViLXRlbXBsYXRlLXByb2ZpbGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vb25ib2FyZGluZy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3RlbXBsYXRlL3N1Yi10ZW1wbGF0ZS1wcm9maWxlL3N1Yi10ZW1wbGF0ZS1wcm9maWxlLmNvbXBvbmVudC50cyIsImxpYi9jb21wb25lbnRzL3RlbXBsYXRlL3N1Yi10ZW1wbGF0ZS1wcm9maWxlL3N1Yi10ZW1wbGF0ZS1wcm9maWxlLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBdUMsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQXFCLE1BQU0sRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFDOUksT0FBTyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDaEUsT0FBTyxFQUFFLFVBQVUsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ25FLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRXpFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDRDNDLGtDQUdFO0lBREEsME5BQTJCO0lBQzNCLG1DQUErQjtJQUFBLDZCQUFhO0lBQUEsaUJBQVc7SUFDekQsaUJBQVM7OztJQUhxQyx3RUFBd0M7Ozs7OztJQUtwRiwrQkFDRTtJQUFBLDRCQUFNO0lBQUEsWUFBaUI7SUFBQSxpQkFBTztJQUM5Qiw0Q0FFbUI7SUFGa0IsMlBBQWdDO0lBRXJFLGlCQUFtQjtJQUNyQixpQkFBTTs7O0lBSkUsZUFBaUI7SUFBakIsMENBQWlCO0lBQ2MsZUFBZ0M7SUFBaEMscURBQWdDLDhDQUFBLGtFQUFBOzs7SUFhckUsaUNBQWlDO0lBQUEsbURBQXlCO0lBQUEsaUJBQVk7Ozs7SUFUeEUsK0JBQ0U7SUFB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a0JBQ04sTUFBTTs7a0JBQ04sTUFBTTs7a0JBQ04sTUFBTTs7a0JBQ04sTUFBTTs7a0JBQ04sTUFBTTs7a0JBQ04sTUFBTTs7a0JBQ04sTUFBTTs7a0JBQ04sTUFBTTs7a0JBQ04sTUFBTTs7a0JBQ04sTUFBTTs7a0JBQ04sS0FBSzs7a0JBQ0wsTUFBTTs7a0JBQ04sS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFmdGVyQ29udGVudEluaXQsIENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uQ2hhbmdlcywgT25Jbml0LCBPdXRwdXQsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ09NTUEsIEVOVEVSLCBTRU1JQ09MT04gfSBmcm9tICdAYW5ndWxhci9jZGsva2V5Y29kZXMnO1xyXG5pbXBvcnQgeyBDb3VudHJ5SVNPLCBQaG9uZU51bWJlckZvcm1hdCB9IGZyb20gJ25neC1pbnRsLXRlbC1pbnB1dCc7XHJcbmltcG9ydCB7IGlzVmFsaWRQaG9uZU51bWJlciwgcGFyc2VQaG9uZU51bWJlciB9IGZyb20gJ2xpYnBob25lbnVtYmVyLWpzJztcclxuXHJcbmltcG9ydCB7IEZvcm1Db250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdsaWItc3ViLWNhdGVnb3J5JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vc3ViLXRlbXBsYXRlLXByb2ZpbGUuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3N1Yi10ZW1wbGF0ZS1wcm9maWxlLmNvbXBvbmVudC5zY3NzJ10sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTdWJUZW1wbGF0ZVByb2ZpbGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBJbnB1dCgpIGZpZWxkOiBhbnlcclxuICBASW5wdXQoKSBsZW5ndGg6IGFueVxyXG4gIEBJbnB1dCgpIGk6IGFueVxyXG4gIEBJbnB1dCgpIGo6IGFueVxyXG4gIEBPdXRwdXQoKSBvbkFkZEtleXdvcmRGcm9tSW5wdXQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKVxyXG4gIEBPdXRwdXQoKSBvbktleVByZXNzID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KClcclxuICBAT3V0cHV0KCkgb25Ecm9wID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KClcclxuICBAT3V0cHV0KCkgb25BZGROZXdGaWVsZCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpXHJcbiAgQE91dHB1dCgpIG9uUmVtb3ZlRmllbGQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKVxyXG4gIEBPdXRwdXQoKSBvbkNoYW5nZVR5cGUgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKVxyXG4gIEBPdXRwdXQoKSBvblJlbW92ZUtleXdvcmQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKVxyXG4gIEBPdXRwdXQoKSBvbkFkZE5ld1N1YkxldmVsRmllbGQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKVxyXG4gIEBPdXRwdXQoKSBvbkV4cGVuZE1vcmUgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKVxyXG4gIEBPdXRwdXQoKSBvbkNoYW5nZUxhYmVsID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KClcclxuICBAT3V0cHV0KCkgb25DaGVja2VkQ2hpcCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpXHJcbiAgQE91dHB1dCgpIG9uQ2hlY2tlZERlZmF1bHQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKVxyXG4gIEBPdXRwdXQoKSBvbkdldENvbmRpdGlvblZhbHVlcyA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpXHJcbiAgQE91dHB1dCgpIG9uRWRpdEJsb2NrID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KClcclxuICBASW5wdXQoKSBjb25kaXRpb25EYXRhID0gW11cclxuICBAT3V0cHV0KCkgb25DaGVja1ZhbHVlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KClcclxuICBASW5wdXQoKSBibGluayA9IGZhbHNlXHJcbiAgY2hpcENvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2wobmV3IFNldCgpKTtcclxuICBwcmVmZXJyZWRDb3VudHJpZXM6IENvdW50cnlJU09bXSA9IFtDb3VudHJ5SVNPLlVuaXRlZFN0YXRlcywgQ291bnRyeUlTTy5GcmFuY2VdO1xyXG4gIFBob25lTnVtYmVyRm9ybWF0ID0gUGhvbmVOdW1iZXJGb3JtYXQ7XHJcbiAgc2VwYXJhdG9yS2V5c0NvZGVzID0gW0VOVEVSLCBDT01NQSwgU0VNSUNPTE9OXTtcclxuICBpbnZhbGlkZVZhbHVlID0gZmFsc2U7XHJcbiAgY3VycmVudENoaXAgPSBcIlwiXHJcbiAgc2VwYXJhdGVEaWFsQ29kZSA9IGZhbHNlO1xyXG4gIHByZXZWYWx1ZSA9IFwiXCJcclxuICBzaG93Q29uZGl0aW9uID0gZmFsc2VcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gIH1cclxuXHJcbiAgZHJvcChldmVudCkge1xyXG4gICAgdGhpcy5vbkRyb3AuZW1pdChldmVudClcclxuICB9XHJcblxyXG4gIGFkZEtleXdvcmRGcm9tSW5wdXQoZXZlbnQsIGksIGopIHtcclxuICAgIHRoaXMub25BZGRLZXl3b3JkRnJvbUlucHV0LmVtaXQoeyBldmVudCwgcHJldjogdGhpcy5wcmV2VmFsdWUsIGksIGogfSk7XHJcbiAgfVxyXG5cclxuICBrZXlVcChldmVudCwgaSwgaikge1xyXG4gICAgdGhpcy5vbktleVByZXNzLmVtaXQoeyBldmVudCwgaSwgaiB9KVxyXG4gIH1cclxuXHJcbiAgYWRkTmV3RmllbGQoZXZlbnQsIGkpIHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcclxuICAgIHRoaXMub25BZGROZXdGaWVsZC5lbWl0KHsgZXZlbnQsIGkgfSlcclxuICB9XHJcblxyXG4gIHJlbW92ZUZpZWxkKGV2ZW50LCBpLCBqKSB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICB0aGlzLm9uUmVtb3ZlRmllbGQuZW1pdCh7IGksIGogfSlcclxuICB9XHJcblxyXG4gIGNoYW5nZVR5cGUodHlwZSwgaSwgaikge1xyXG4gICAgdGhpcy5vbkNoYW5nZVR5cGUuZW1pdCh7IHR5cGUsIGksIGogfSlcclxuICB9XHJcblxyXG4gIHJlbW92ZUtleXdvcmQoZXZlbnQsIGksIGopIHtcclxuICAgIHRoaXMub25SZW1vdmVLZXl3b3JkLmVtaXQoeyBldmVudCwgaSwgaiB9KVxyXG4gIH1cclxuICBhZGROZXdTdWJMZXZlbEZpZWxkKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgdGhpcy5vbkFkZE5ld1N1YkxldmVsRmllbGQuZW1pdCh0cnVlKVxyXG4gIH1cclxuICBleHBlbmRNb3JlKGUsIGZpZWxkKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgIHRoaXMub25FeHBlbmRNb3JlLmVtaXQoeyBleHBhbmQ6IHRydWUsIGZpZWxkIH0pXHJcbiAgfVxyXG5cclxuICBpbmdvcmVEZWZhdWx0QWN0aW9uKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gIH1cclxuXHJcbiAgY2hhbmdlTGFiZWwobGFiZWwsIGtleSkge1xyXG4gICAgdGhpcy5vbkNoYW5nZUxhYmVsLmVtaXQoeyBsYWJlbCwga2V5IH0pXHJcbiAgfVxyXG5cclxuICB0b2dnbGVDaGlwID0gKGNoaXA6IGFueSkgPT4ge1xyXG4gICAgdGhpcy5vbkNoZWNrZWRDaGlwLmVtaXQoY2hpcClcclxuICB9XHJcblxyXG4gIG9uRWRpdENoaXAoY2hpcCkge1xyXG4gICAgaWYgKGNoaXAudmFsdWUgPT09IHRoaXMuY3VycmVudENoaXApIHtcclxuICAgICAgdGhpcy5jdXJyZW50Q2hpcCA9IFwiXCJcclxuICAgICAgdGhpcy5wcmV2VmFsdWUgPSBcIlwiXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmN1cnJlbnRDaGlwID0gY2hpcC52YWx1ZTtcclxuICAgICAgdGhpcy5wcmV2VmFsdWUgPSBjaGlwLnZhbHVlXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXQgY2hpcHMoKSB7IHJldHVybiB0aGlzLmNoaXBDb250cm9sLnZhbHVlOyB9XHJcblxyXG4gIGNoZWNrZWREZWZhdWx0KHZhbHVlKSB7XHJcbiAgICB0aGlzLm9uQ2hlY2tlZERlZmF1bHQuZW1pdCh2YWx1ZSlcclxuICB9XHJcblxyXG4gIG9uU2hvd0NvbmRpdGlvbihldmVudCA9IG51bGwpIHtcclxuICAgIGlmIChldmVudCkge1xyXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICB9XHJcbiAgICB0aGlzLnNob3dDb25kaXRpb24gPSAhdGhpcy5zaG93Q29uZGl0aW9uXHJcbiAgfVxyXG5cclxuICAvLyBjaGVja2VkKGxvY2F0aW9uVmFsdWUsdmFsdWUpe1xyXG4gIC8vICAgcmV0dXJuIGxvY2F0aW9uVmFsdWUuaW5jbHVkZXModmFsdWUpXHJcbiAgLy8gfVxyXG5cclxuICBlZGl0QkxvY2soZXZlbnQpIHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB0aGlzLm9uRWRpdEJsb2NrLmVtaXQodHJ1ZSk7XHJcbiAgfVxyXG5cclxuICBvbkNoYW5nZVBvc2l0aW9uKHR5cGU6IHN0cmluZykge1xyXG4gICAgaWYgKHR5cGUgPT09IFwidGVsXCIpIHtcclxuICAgICAgcmV0dXJuIHsgJ3RvcCc6ICctMzdweCcsIH1cclxuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gXCJzZWxlY3RcIikge1xyXG4gICAgICByZXR1cm4geyAndG9wJzogJy0yMHB4JywgfVxyXG4gICAgfSBlbHNlIGlmICh0eXBlID09PSBcImNoZWNrYm94XCIgfHwgdHlwZSA9PT0gXCJjaGVja2JveF9tdWx0aXBsZVwiKSB7XHJcbiAgICAgIHJldHVybiB7ICd0b3AnOiAnLTI5cHgnLCB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4ge31cclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuICBmbGFnKHZhbHVlKSB7XHJcbiAgICBjb25zdCB2YWx1ZVN0cmluZyA9IFN0cmluZyh2YWx1ZSlcclxuICAgIHJldHVybiB2YWx1ZVN0cmluZyAmJiBpc1ZhbGlkUGhvbmVOdW1iZXIodmFsdWVTdHJpbmcpID8gcGFyc2VQaG9uZU51bWJlcih2YWx1ZVN0cmluZykuY291bnRyeSA6IENvdW50cnlJU08uRnJhbmNlO1xyXG4gIH1cclxuICBjaGVja1Bob25lKHBob25lKSB7XHJcbiAgICBpZiAocGhvbmUpIHtcclxuICAgICAgbGV0IHJlZ2V4ID0gbmV3IFJlZ0V4cCgvXFwrKDlbOTc2XVxcZHw4Wzk4NzUzMF1cXGR8Nls5ODddXFxkfDVbOTBdXFxkfDQyXFxkfDNbODc1XVxcZHwyWzk4NjU0MzIxXVxcZHw5Wzg1NDMyMTBdfDhbNjQyMV18Nls2NTQzMjEwXXw1Wzg3NjU0MzIxXXw0Wzk4NzY1NDMxMF18M1s5NjQzMjEwXXwyWzcwXXw3fDEpXFxXKlxcZFxcVypcXGRcXFcqXFxkXFxXKlxcZFxcVypcXGRcXFcqXFxkXFxXKlxcZFxcVypcXGRcXFcqKFxcZHsxLDJ9KSQvKVxyXG4gICAgICB0aGlzLmludmFsaWRlVmFsdWUgPSAhcmVnZXgudGVzdChwaG9uZVsnZTE2NE51bWJlciddKTtcclxuICAgICAgdGhpcy5vbkNoZWNrVmFsdWUuZW1pdCh0aGlzLmludmFsaWRlVmFsdWUpXHJcbiAgICB9XHJcbiAgICBpZiAocGhvbmUgJiYgcGhvbmVbXCJuYXRpb25hbE51bWJlclwiXSAmJiBwaG9uZVtcIm5hdGlvbmFsTnVtYmVyXCJdICE9ICcnKSB7XHJcbiAgICAgIGxldCBwID0gcGhvbmVbJ25hdGlvbmFsTnVtYmVyJ10ucmVwbGFjZUFsbCgnICcsICcnKTtcclxuICAgICAgbGV0IG5ld3A6IGFueSA9ICcnO1xyXG5cclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaWYgKHAuc3BsaXQoJycpW2ldKSB7XHJcbiAgICAgICAgICBpZiAoaSAlIDIgPT0gMCAmJiBpID4gMCkge1xyXG4gICAgICAgICAgICBuZXdwICs9ICcgJztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIG5ld3AgKz0gcC5zcGxpdCgnJylbaV07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuZmllbGQudmFsdWUgPSBwaG9uZVtcIm5hdGlvbmFsTnVtYmVyXCJdXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIjxkaXYgY2xhc3M9XCJmaWVsZC1pdGVtXCIgKm5nSWY9XCIhZmllbGQuZm9ybXMgfHwgZmllbGQuZm9ybXMubGVuZ3RoPT09MFwiPlxyXG4gIDxidXR0b24gY2xhc3M9XCJ0cmFuc3BhcmVudC1idXR0b24gc2V0dGluZ1wiIG1hdC1yYWlzZWQtYnV0dG9uIChjbGljayk9XCJlZGl0QkxvY2soJGV2ZW50KVwiPlxyXG4gICAgPG1hdC1pY29uIGNsYXNzPVwic2V0dGluZy1pY29uXCI+c2V0dGluZ3M8L21hdC1pY29uPlxyXG4gIDwvYnV0dG9uPlxyXG4gIDxidXR0b24gKm5nSWY9XCJmaWVsZC5pc0NvbmRpdGlvbmFsXCIgbWF0VG9vbHRpcD1cIkNsaXF1ZXIgcG91ciByZWdhcmRlciBsYSBjb25kaXRpb24gYXBwbGlxdcOpZSDDoCBjZSBjaGFtcCFcIlxyXG4gICAgY2xhc3M9XCJ0cmFuc3BhcmVudC1idXR0b24gY29uZGl0aW9uYWwtdmlld1wiIFtuZ1N0eWxlXT1cIm9uQ2hhbmdlUG9zaXRpb24oZmllbGQudHlwZSlcIiBtYXQtcmFpc2VkLWJ1dHRvblxyXG4gICAgKGNsaWNrKT1cImVkaXRCTG9jaygkZXZlbnQpXCI+XHJcbiAgICA8bWF0LWljb24gY2xhc3M9XCJzZXR0aW5nLWljb25cIj5pbmZvX291dGxpbmVkPC9tYXQtaWNvbj5cclxuICA8L2J1dHRvbj5cclxuICA8bmctY29udGFpbmVyIFtuZ1N3aXRjaF09XCJmaWVsZC50eXBlXCI+XHJcbiAgICA8ZGl2ICpuZ1N3aXRjaENhc2U9XCIndG9nZ2xlJ1wiIGNsYXNzPVwiZmxleC1hdXRvIGZpZWxkLXNpemUgdG9nZ2xlLWJ1dHRvblwiPlxyXG4gICAgICA8c3Bhbj57eyBmaWVsZC5sYWJlbCB9fTwvc3Bhbj5cclxuICAgICAgPG1hdC1zbGlkZS10b2dnbGUgY2xhc3M9XCJmb3JtLWZpZWxkXCIgWyhuZ01vZGVsKV09XCJmaWVsZC5kZWZhdWx0VmFsdWVcIiBbbmdNb2RlbE9wdGlvbnNdPVwieyBzdGFuZGFsb25lOiB0cnVlIH1cIlxyXG4gICAgICAgIFtuZ1N0eWxlXT1cImZpZWxkLnNlbGVjdG9yICYmIHsgZGlzcGxheTogJ2luaW5lLWJsb2NrJyB9XCI+XHJcbiAgICAgIDwvbWF0LXNsaWRlLXRvZ2dsZT5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiAqbmdTd2l0Y2hDYXNlPVwiJ3RlbCdcIiBjbGFzcz1cImZvcm0tZmllbGQgZnVsbC13aWR0aCB0ZWwtaW5wdXRcIj5cclxuICAgICAgPG1hdC1sYWJlbCBjbGFzcz1cInRlbC1sYWJlbFwiPnt7ZmllbGQubGFiZWx9fTwvbWF0LWxhYmVsPlxyXG4gICAgICA8bmd4LWludGwtdGVsLWlucHV0IGlkPVwib25ib2FyZGluZy1waG9uZS1pbnB1dFwiIGNsYXNzPVwicGhvbmUtaW5wdXQtcHJvZmlsZVwiIFtjc3NDbGFzc109XCInaW5wdXQtcGhvbmUnXCJcclxuICAgICAgICBbcHJlZmVycmVkQ291bnRyaWVzXT1cInByZWZlcnJlZENvdW50cmllc1wiIFtlbmFibGVBdXRvQ291bnRyeVNlbGVjdF09XCJmYWxzZVwiIFtlbmFibGVQbGFjZWhvbGRlcl09XCJ0cnVlXCJcclxuICAgICAgICBbY3VzdG9tUGxhY2Vob2xkZXJdPVwiJ1Bob25lJ1wiIFtzZWxlY3RGaXJzdENvdW50cnldPVwiZmFsc2VcIiBbc2VsZWN0ZWRDb3VudHJ5SVNPXT1cImZsYWcoZmllbGQudmFsdWUpXCJcclxuICAgICAgICBbbWF4TGVuZ3RoXT1cIjE1XCIgW2lucHV0SWRdPVwiZmllbGQua2V5XCIgW3Bob25lVmFsaWRhdGlvbl09XCJ0cnVlXCIgW3NlcGFyYXRlRGlhbENvZGVdPVwic2VwYXJhdGVEaWFsQ29kZVwiXHJcbiAgICAgICAgW251bWJlckZvcm1hdF09XCJQaG9uZU51bWJlckZvcm1hdC5OYXRpb25hbFwiIG5hbWU9XCJwaG9uZVwiIChpbnB1dCk9XCJjaGVja1Bob25lKGZpZWxkLnZhbHVlKVwiXHJcbiAgICAgICAgW25nTW9kZWxPcHRpb25zXT1cIntzdGFuZGFsb25lOiB0cnVlfVwiIFsobmdNb2RlbCldPVwiZmllbGQudmFsdWVcIj5cclxuICAgICAgPC9uZ3gtaW50bC10ZWwtaW5wdXQ+XHJcbiAgICAgIDxtYXQtZXJyb3IgKm5nSWY9XCJpbnZhbGlkZVZhbHVlXCI+TGUgdMOpbMOpcGhvbmUgZXN0IGludmFsaWRlPC9tYXQtZXJyb3I+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgKm5nU3dpdGNoQ2FzZT1cIidjaGVja2JveCdcIiBjbGFzcz1cImZsZXgtYXV0byBmaWVsZC1zaXplXCI+XHJcbiAgICAgIDxtYXQtY2hlY2tib3ggY2xhc3M9XCJmb3JtLWZpZWxkXCIgWyhuZ01vZGVsKV09XCJmaWVsZC52YWx1ZVwiIFtuZ01vZGVsT3B0aW9uc109XCJ7IHN0YW5kYWxvbmU6IHRydWUgfVwiXHJcbiAgICAgICAgW25nU3R5bGVdPVwiZmllbGQuc2VsZWN0b3IgJiYgeyBkaXNwbGF5OiAnaW5pbmUtYmxvY2snIH1cIj5cclxuICAgICAgICB7eyBmaWVsZC5sYWJlbCB9fVxyXG4gICAgICA8L21hdC1jaGVja2JveD5cclxuICAgICAgPG1hdC1zZWxlY3QgcGxhY2Vob2xkZXI9XCJDb21wYW55XCIgWyhuZ01vZGVsKV09XCJmaWVsZC5zZWxlY3Rvci52YWx1ZVwiIFtuZ01vZGVsT3B0aW9uc109XCJ7IHN0YW5kYWxvbmU6IHRydWUgfVwiXHJcbiAgICAgICAgKm5nSWY9XCJmaWVsZC5zZWxlY3RvclwiIHN0eWxlPVwiZGlzcGxheTogaW5saW5lLWJsb2NrOyB3aWR0aDogNTAlXCI+XHJcbiAgICAgICAgPG1hdC1vcHRpb24gKm5nRm9yPVwibGV0IHNlbGVjdCBvZiBmaWVsZC5zZWxlY3Rvci5kZWZhdWx0VmFsdWVcIiBbdmFsdWVdPVwic2VsZWN0LnZhbHVlXCI+IHt7IHNlbGVjdC52YWx1ZSB9fVxyXG4gICAgICAgIDwvbWF0LW9wdGlvbj5cclxuICAgICAgPC9tYXQtc2VsZWN0PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2ICpuZ1N3aXRjaENhc2U9XCInY2hlY2tib3hfbXVsdGlwbGUnXCIgY2xhc3M9XCJmbGV4LWF1dG8gZmllbGQtc2l6ZVwiIHN0eWxlPVwid2lkdGg6IDEwMCU7XCI+XHJcbiAgICAgIDxsYWJlbD57eyBmaWVsZC5sYWJlbCB9fTwvbGFiZWw+XHJcbiAgICAgIDxkaXYgc3R5bGU9XCJtYXJnaW4tdG9wOiAyMHB4XCIgY2xhc3M9XCJvbmJvYXJkaW5nLXNlbGVjdFwiPlxyXG4gICAgICAgIDxtYXQtY2hlY2tib3ggY2xhc3M9XCJmb3JtLWZpZWxkXCJcclxuICAgICAgICAgIHN0eWxlPVwiZGlzcGxheTogYmxvY2s7IG1hcmdpbi1ib3R0b206IDVweDsgbWFyZ2luLXRvcDogMTBweDsgbWFyZ2luLXJpZ2h0OiAxMHB4O1wiXHJcbiAgICAgICAgICAqbmdGb3I9XCJsZXQgb3B0IG9mIGZpZWxkLmRlZmF1bHRWYWx1ZVwiIFtjaGVja2VkXT1cIm9wdC5jaGVja2VkXCIgWyhuZ01vZGVsKV09XCJvcHQuY2hlY2tlZFwiXHJcbiAgICAgICAgICBbbmdNb2RlbE9wdGlvbnNdPVwieyBzdGFuZGFsb25lOiB0cnVlIH1cIj5cclxuICAgICAgICAgIHt7IG9wdC52YWx1ZSB9fVxyXG4gICAgICAgIDwvbWF0LWNoZWNrYm94PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiAqbmdTd2l0Y2hDYXNlPVwiJ3JhZGlvJ1wiIGNsYXNzPVwiZmxleC1hdXRvIGZpZWxkLXNpemVcIj5cclxuICAgICAgPGxhYmVsIHN0eWxlPVwiZGlzcGxheTogYmxvY2tcIj4ge3sgZmllbGQubGFiZWwgfX0gPC9sYWJlbD5cclxuICAgICAgPG1hdC1yYWRpby1ncm91cCBjbGFzcz1cImZvcm0tZmllbGQgcmFkaW8tZ3JvdXAgZmllbGQtc2l6ZSBvbmJvYXJkaW5nLXNlbGVjdFwiIFsobmdNb2RlbCldPVwiZmllbGQudmFsdWVcIlxyXG4gICAgICAgIFtyZXF1aXJlZF09XCJmaWVsZC5pc01hbmRhdG9yeVwiIGFyaWEtbGFiZWw9XCJTZWxlY3QgYW4gb3B0aW9uXCI+XHJcbiAgICAgICAgPG1hdC1yYWRpby1idXR0b24gKm5nRm9yPVwibGV0IG9wdCBvZiBmaWVsZC5kZWZhdWx0VmFsdWVcIiBzdHlsZT1cIm1hcmdpbi1ib3R0b206IDIwcHg7XCIgW3ZhbHVlXT1cIm9wdC52YWx1ZVwiPnt7XHJcbiAgICAgICAgICBvcHQudmFsdWUgfX0gPC9tYXQtcmFkaW8tYnV0dG9uPlxyXG4gICAgICA8L21hdC1yYWRpby1ncm91cD5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiAqbmdTd2l0Y2hDYXNlPVwiJ3NlbGVjdCdcIiBjbGFzcz1cImZsZXgtYXV0byBmaWVsZC1zaXplIHNlbGVjdC1jb250ZW50XCI+XHJcbiAgICAgIDxtYXQtZm9ybS1maWVsZCBjbGFzcz1cIm1hdC1zZWxlY3QgZmxleC1hdXRvIGZpZWxkLXNpemVcIiBhcHBlYXJhbmNlPVwib3V0bGluZVwiPlxyXG4gICAgICAgIDxtYXQtbGFiZWw+IHt7IGZpZWxkLmxhYmVsIH19IDwvbWF0LWxhYmVsPlxyXG4gICAgICAgIDxtYXQtc2VsZWN0IFsobmdNb2RlbCldPVwiZmllbGQudmFsdWVcIiBbbmdNb2RlbE9wdGlvbnNdPVwieyBzdGFuZGFsb25lOiB0cnVlIH1cIj5cclxuICAgICAgICAgIDxtYXQtb3B0aW9uICpuZ0Zvcj1cImxldCBvcHQgb2YgZmllbGQuZGVmYXVsdFZhbHVlXCIgW3ZhbHVlXT1cIm9wdC52YWx1ZVwiPnt7IG9wdC52YWx1ZSB9fTwvbWF0LW9wdGlvbj5cclxuICAgICAgICA8L21hdC1zZWxlY3Q+XHJcbiAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgKm5nU3dpdGNoQ2FzZT1cIidub25lJ1wiIGNsYXNzPVwiZmxleC1hdXRvIGZpZWxkLXNpemUgc2VsZWN0LWNvbnRlbnRcIiBzdHlsZT1cIm9wYWNpdHk6MCA7XCI+XHJcbiAgICAgIDxtYXQtZm9ybS1maWVsZCBjbGFzcz1cIm1hdC1zZWxlY3QgZmxleC1hdXRvIGZpZWxkLXNpemVcIiBhcHBlYXJhbmNlPVwib3V0bGluZVwiPlxyXG4gICAgICAgIDxtYXQtbGFiZWw+PC9tYXQtbGFiZWw+XHJcbiAgICAgICAgPGlucHV0IFt0eXBlXT1cImZpZWxkLnR5cGVcIiBkaXNhYmxlZD1cInRydWVcIiBtYXRJbnB1dCAvPlxyXG4gICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8bWF0LWZvcm0tZmllbGQgKm5nU3dpdGNoQ2FzZT1cIidkYXRlJ1wiIGNsYXNzPVwiZm9ybS1maWVsZCBmaWVsZC1zaXplXCIgYXBwZWFyYW5jZT1cIm91dGxpbmVcIj5cclxuICAgICAgPG1hdC1sYWJlbD57e2ZpZWxkLmxhYmVsfX08L21hdC1sYWJlbD5cclxuICAgICAgPGlucHV0IG1hdElucHV0IFttYXREYXRlcGlja2VyXT1cInBpY2tlclwiIFtuZ01vZGVsT3B0aW9uc109XCJ7IHN0YW5kYWxvbmU6IHRydWUgfVwiIFsobmdNb2RlbCldPVwiZmllbGQuZGVmYXVsdFZhbHVlXCI+XHJcbiAgICAgIDxtYXQtZGF0ZXBpY2tlci10b2dnbGUgbWF0U3VmZml4IFtmb3JdPVwicGlja2VyXCI+PC9tYXQtZGF0ZXBpY2tlci10b2dnbGU+XHJcbiAgICAgIDxtYXQtZGF0ZXBpY2tlciAjcGlja2VyPjwvbWF0LWRhdGVwaWNrZXI+XHJcbiAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgPG1hdC1mb3JtLWZpZWxkIFtjbGFzcy5ibGlua109XCJibGlua1wiICpuZ1N3aXRjaERlZmF1bHQgY2xhc3M9XCJmb3JtLWZpZWxkIGZpZWxkLXNpemVcIiBhcHBlYXJhbmNlPVwib3V0bGluZVwiPlxyXG4gICAgICA8bWF0LWxhYmVsPnt7IGZpZWxkLmxhYmVsIH19PC9tYXQtbGFiZWw+XHJcbiAgICAgIDxpbnB1dCBbdHlwZV09XCJmaWVsZC50eXBlXCIgbWF0SW5wdXQgW25nTW9kZWxPcHRpb25zXT1cInsgc3RhbmRhbG9uZTogdHJ1ZSB9XCIgWyhuZ01vZGVsKV09XCJmaWVsZC5kZWZhdWx0VmFsdWVcIlxyXG4gICAgICAgIHBsYWNlaG9sZGVyPVwiXCIgLz5cclxuICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgPC9uZy1jb250YWluZXI+XHJcbjwvZGl2PlxyXG5cclxuPG5nLWNvbnRlbnQgc2VsZWN0PVwiLmNoaWxkXCI+PC9uZy1jb250ZW50PiJdfQ==