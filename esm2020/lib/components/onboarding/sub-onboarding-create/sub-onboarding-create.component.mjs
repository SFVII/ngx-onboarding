import { COMMA, ENTER, SEMICOLON } from '@angular/cdk/keycodes';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CountryISO, PhoneNumberFormat } from 'ngx-intl-tel-input';
import { isValidPhoneNumber, parsePhoneNumber } from 'libphonenumber-js';
import { UntypedFormControl } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/material/form-field";
import * as i3 from "@angular/common";
import * as i4 from "@angular/material/checkbox";
import * as i5 from "@angular/material/select";
import * as i6 from "@angular/material/core";
import * as i7 from "@angular/material/input";
import * as i8 from "@angular/material/radio";
import * as i9 from "ngx-intl-tel-input";
import * as i10 from "@angular/material/slide-toggle";
const _c0 = function () { return { standalone: true }; };
const _c1 = function () { return { display: "inine-block" }; };
function SubOnboardingCreateComponent_ng_container_1_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r12 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 11)(1, "span");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "mat-slide-toggle", 12);
    i0.ɵɵlistener("ngModelChange", function SubOnboardingCreateComponent_ng_container_1_div_1_Template_mat_slide_toggle_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r12); const ctx_r11 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r11.field.defaultValue = $event); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r2.field.label);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", ctx_r2.field.defaultValue)("ngModelOptions", i0.ɵɵpureFunction0(4, _c0))("ngStyle", ctx_r2.field.selector && i0.ɵɵpureFunction0(5, _c1));
} }
function SubOnboardingCreateComponent_ng_container_1_div_2_mat_select_3_mat_option_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 18);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const select_r15 = ctx.$implicit;
    i0.ɵɵproperty("value", select_r15.value);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", select_r15.value, "");
} }
function SubOnboardingCreateComponent_ng_container_1_div_2_mat_select_3_Template(rf, ctx) { if (rf & 1) {
    const _r17 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-select", 16);
    i0.ɵɵlistener("ngModelChange", function SubOnboardingCreateComponent_ng_container_1_div_2_mat_select_3_Template_mat_select_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r17); const ctx_r16 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r16.field.selector.value = $event); });
    i0.ɵɵtemplate(1, SubOnboardingCreateComponent_ng_container_1_div_2_mat_select_3_mat_option_1_Template, 2, 2, "mat-option", 17);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r13 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("ngModel", ctx_r13.field.selector.value)("ngModelOptions", i0.ɵɵpureFunction0(3, _c0));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r13.field.selector.defaultValue);
} }
const _c2 = function () { return { "display": "inine-block" }; };
function SubOnboardingCreateComponent_ng_container_1_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r19 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 13)(1, "mat-checkbox", 14);
    i0.ɵɵlistener("ngModelChange", function SubOnboardingCreateComponent_ng_container_1_div_2_Template_mat_checkbox_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r19); const ctx_r18 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r18.field.value = $event); });
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, SubOnboardingCreateComponent_ng_container_1_div_2_mat_select_3_Template, 2, 4, "mat-select", 15);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵclassMap(ctx_r3.checkSubForm(ctx_r3.field) ? "checkbox-title-active" : "");
    i0.ɵɵproperty("ngModel", ctx_r3.field.value)("required", ctx_r3.field.isMandatory)("ngModelOptions", i0.ɵɵpureFunction0(8, _c0))("ngStyle", ctx_r3.field.selector && i0.ɵɵpureFunction0(9, _c2));
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r3.field.label, " ");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r3.field.selector);
} }
function SubOnboardingCreateComponent_ng_container_1_div_3_mat_checkbox_4_Template(rf, ctx) { if (rf & 1) {
    const _r23 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-checkbox", 21);
    i0.ɵɵlistener("ngModelChange", function SubOnboardingCreateComponent_ng_container_1_div_3_mat_checkbox_4_Template_mat_checkbox_ngModelChange_0_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r23); const opt_r21 = restoredCtx.$implicit; return i0.ɵɵresetView(opt_r21.checked = $event); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const opt_r21 = ctx.$implicit;
    const ctx_r20 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("checked", opt_r21.checked)("ngModel", opt_r21.checked)("required", ctx_r20.field.isMandatory)("ngModelOptions", i0.ɵɵpureFunction0(5, _c0));
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", opt_r21.value, " ");
} }
function SubOnboardingCreateComponent_ng_container_1_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 13)(1, "label");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 19);
    i0.ɵɵtemplate(4, SubOnboardingCreateComponent_ng_container_1_div_3_mat_checkbox_4_Template, 2, 6, "mat-checkbox", 20);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r4.field.label);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r4.field.defaultValue);
} }
function SubOnboardingCreateComponent_ng_container_1_div_4_mat_radio_button_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-radio-button", 18);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const opt_r26 = ctx.$implicit;
    i0.ɵɵproperty("value", opt_r26.value);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1("", opt_r26.value, " ");
} }
function SubOnboardingCreateComponent_ng_container_1_div_4_mat_form_field_5_Template(rf, ctx) { if (rf & 1) {
    const _r28 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-form-field", 26)(1, "mat-label");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "input", 27);
    i0.ɵɵlistener("ngModelChange", function SubOnboardingCreateComponent_ng_container_1_div_4_mat_form_field_5_Template_input_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r28); const ctx_r27 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r27.field.otherValue = $event); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r25 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r25.locale == null ? null : ctx_r25.locale.OTHER_OPTION);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("required", ctx_r25.field.isMandatory)("ngModelOptions", i0.ɵɵpureFunction0(4, _c0))("ngModel", ctx_r25.field.otherValue);
} }
function SubOnboardingCreateComponent_ng_container_1_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r30 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 22)(1, "label", 23);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "mat-radio-group", 24);
    i0.ɵɵlistener("ngModelChange", function SubOnboardingCreateComponent_ng_container_1_div_4_Template_mat_radio_group_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r30); const ctx_r29 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r29.field.value = $event); });
    i0.ɵɵtemplate(4, SubOnboardingCreateComponent_ng_container_1_div_4_mat_radio_button_4_Template, 2, 2, "mat-radio-button", 17);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(5, SubOnboardingCreateComponent_ng_container_1_div_4_mat_form_field_5_Template, 4, 5, "mat-form-field", 25);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r5.field.label, " ");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", ctx_r5.field.value)("required", ctx_r5.field.isMandatory);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r5.field.defaultValue);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", "autre" === ctx_r5.formatOther(ctx_r5.field.value));
} }
function SubOnboardingCreateComponent_ng_container_1_div_5_mat_option_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 18);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const opt_r33 = ctx.$implicit;
    i0.ɵɵproperty("value", opt_r33.value);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", opt_r33.value, "");
} }
function SubOnboardingCreateComponent_ng_container_1_div_5_mat_form_field_6_Template(rf, ctx) { if (rf & 1) {
    const _r35 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-form-field", 26)(1, "mat-label");
    i0.ɵɵtext(2, "Autre option");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "input", 27);
    i0.ɵɵlistener("ngModelChange", function SubOnboardingCreateComponent_ng_container_1_div_5_mat_form_field_6_Template_input_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r35); const ctx_r34 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r34.field.otherValue = $event); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r32 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("required", ctx_r32.field.isMandatory)("ngModelOptions", i0.ɵɵpureFunction0(3, _c0))("ngModel", ctx_r32.field.otherValue);
} }
function SubOnboardingCreateComponent_ng_container_1_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r37 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 22)(1, "mat-form-field", 28)(2, "mat-label");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "mat-select", 29);
    i0.ɵɵlistener("ngModelChange", function SubOnboardingCreateComponent_ng_container_1_div_5_Template_mat_select_ngModelChange_4_listener($event) { i0.ɵɵrestoreView(_r37); const ctx_r36 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r36.field.value = $event); });
    i0.ɵɵtemplate(5, SubOnboardingCreateComponent_ng_container_1_div_5_mat_option_5_Template, 2, 2, "mat-option", 17);
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(6, SubOnboardingCreateComponent_ng_container_1_div_5_mat_form_field_6_Template, 4, 4, "mat-form-field", 25);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r6 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", ctx_r6.field.label, " ");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", ctx_r6.field.value)("ngModelOptions", i0.ɵɵpureFunction0(6, _c0))("required", ctx_r6.field.isMandatory);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r6.field.defaultValue);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", "autre" === ctx_r6.formatOther(ctx_r6.field.value));
} }
function SubOnboardingCreateComponent_ng_container_1_mat_form_field_6_Template(rf, ctx) { if (rf & 1) {
    const _r39 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-form-field", 30)(1, "mat-label");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "textarea", 31);
    i0.ɵɵlistener("ngModelChange", function SubOnboardingCreateComponent_ng_container_1_mat_form_field_6_Template_textarea_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r39); const ctx_r38 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r38.field.value = $event); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r7 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r7.field.label);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("required", ctx_r7.field.isMandatory)("ngModelOptions", i0.ɵɵpureFunction0(4, _c0))("ngModel", ctx_r7.field.value);
} }
function SubOnboardingCreateComponent_ng_container_1_div_7_mat_error_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-error");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r40 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r40.locale == null ? null : ctx_r40.locale.INVALID_PHONE);
} }
function SubOnboardingCreateComponent_ng_container_1_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r42 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 32)(1, "mat-label", 33);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "ngx-intl-tel-input", 34);
    i0.ɵɵlistener("input", function SubOnboardingCreateComponent_ng_container_1_div_7_Template_ngx_intl_tel_input_input_3_listener() { i0.ɵɵrestoreView(_r42); const ctx_r41 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r41.checkPhone(ctx_r41.field.value)); })("ngModelChange", function SubOnboardingCreateComponent_ng_container_1_div_7_Template_ngx_intl_tel_input_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r42); const ctx_r43 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r43.field.value = $event); });
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(4, SubOnboardingCreateComponent_ng_container_1_div_7_mat_error_4_Template, 2, 1, "mat-error", 35);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r8 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r8.field.label);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("cssClass", "input-phone")("preferredCountries", ctx_r8.preferredCountries)("enableAutoCountrySelect", false)("enablePlaceholder", true)("customPlaceholder", "Phone")("selectFirstCountry", false)("selectedCountryISO", ctx_r8.flag(ctx_r8.field.value))("maxLength", 15)("inputId", ctx_r8.field.key)("phoneValidation", true)("separateDialCode", ctx_r8.separateDialCode)("numberFormat", ctx_r8.PhoneNumberFormat.National)("ngModelOptions", i0.ɵɵpureFunction0(16, _c0))("ngModel", ctx_r8.field.value);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r8.invalideValue);
} }
function SubOnboardingCreateComponent_ng_container_1_mat_form_field_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-form-field", 36);
    i0.ɵɵelement(1, "mat-label")(2, "input", 37);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r9 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("type", ctx_r9.field.type);
} }
function SubOnboardingCreateComponent_ng_container_1_mat_form_field_9_Template(rf, ctx) { if (rf & 1) {
    const _r45 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-form-field", 38)(1, "mat-label");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "input", 39);
    i0.ɵɵlistener("ngModelChange", function SubOnboardingCreateComponent_ng_container_1_mat_form_field_9_Template_input_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r45); const ctx_r44 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r44.field.value = $event); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r10 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r10.field.label);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("type", ctx_r10.field.type)("required", ctx_r10.field.isMandatory)("ngModelOptions", i0.ɵɵpureFunction0(5, _c0))("ngModel", ctx_r10.field.value);
} }
function SubOnboardingCreateComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0, 3);
    i0.ɵɵtemplate(1, SubOnboardingCreateComponent_ng_container_1_div_1_Template, 4, 6, "div", 4);
    i0.ɵɵtemplate(2, SubOnboardingCreateComponent_ng_container_1_div_2_Template, 4, 10, "div", 5);
    i0.ɵɵtemplate(3, SubOnboardingCreateComponent_ng_container_1_div_3_Template, 5, 2, "div", 5);
    i0.ɵɵtemplate(4, SubOnboardingCreateComponent_ng_container_1_div_4_Template, 6, 5, "div", 6);
    i0.ɵɵtemplate(5, SubOnboardingCreateComponent_ng_container_1_div_5_Template, 7, 7, "div", 6);
    i0.ɵɵtemplate(6, SubOnboardingCreateComponent_ng_container_1_mat_form_field_6_Template, 4, 5, "mat-form-field", 7);
    i0.ɵɵtemplate(7, SubOnboardingCreateComponent_ng_container_1_div_7_Template, 5, 17, "div", 8);
    i0.ɵɵtemplate(8, SubOnboardingCreateComponent_ng_container_1_mat_form_field_8_Template, 3, 1, "mat-form-field", 9);
    i0.ɵɵtemplate(9, SubOnboardingCreateComponent_ng_container_1_mat_form_field_9_Template, 4, 6, "mat-form-field", 10);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngSwitch", ctx_r0.field.type);
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
} }
function SubOnboardingCreateComponent_div_2_mat_option_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 18);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const opt_r47 = ctx.$implicit;
    i0.ɵɵproperty("value", opt_r47._id);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", opt_r47.Name, "");
} }
function SubOnboardingCreateComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r49 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 22)(1, "mat-form-field", 28)(2, "mat-label");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "mat-select", 29);
    i0.ɵɵlistener("ngModelChange", function SubOnboardingCreateComponent_div_2_Template_mat_select_ngModelChange_4_listener($event) { i0.ɵɵrestoreView(_r49); const ctx_r48 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r48.field.value = $event); });
    i0.ɵɵtemplate(5, SubOnboardingCreateComponent_div_2_mat_option_5_Template, 2, 2, "mat-option", 17);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", ctx_r1.field.label, " ");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", ctx_r1.field.value)("ngModelOptions", i0.ɵɵpureFunction0(5, _c0))("required", ctx_r1.field.isMandatory);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r1.field.defaultValue);
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
        this.chipControl = new UntypedFormControl(new Set());
        this.preferredCountries = [CountryISO.UnitedStates, CountryISO.France];
        this.PhoneNumberFormat = PhoneNumberFormat;
        this.separatorKeysCodes = [ENTER, COMMA, SEMICOLON];
        this.invalideValue = false;
        this.currentChip = "";
        this.separateDialCode = false;
        this.accounts = [];
        this.prevValue = "";
        this.toggleChip = (chip) => {
            this.onCheckedChip.emit(chip);
            // const addChip = () => { this.chips.add(chip); };
            // const removeChip = () => { this.chips.delete(chip); };
            // this.chips.has(chip) ? removeChip() : addChip();
        };
    }
    async ngOnInit() {
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
SubOnboardingCreateComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SubOnboardingCreateComponent, selectors: [["lib-sub-create-onboarding"]], inputs: { field: "field", length: "length", locale: "locale", i: "i", j: "j" }, outputs: { onAddKeywordFromInput: "onAddKeywordFromInput", onKeyPress: "onKeyPress", onDrop: "onDrop", onAddNewField: "onAddNewField", onRemoveField: "onRemoveField", onChangeType: "onChangeType", onRemoveKeyword: "onRemoveKeyword", onAddNewSubLevelField: "onAddNewSubLevelField", onExpendMore: "onExpendMore", onChangeLabel: "onChangeLabel", onCheckedChip: "onCheckedChip", onCheckValue: "onCheckValue" }, ngContentSelectors: _c4, decls: 4, vars: 2, consts: [[1, "field-item"], [3, "ngSwitch", 4, "ngIf"], ["class", "flex-auto w-30 field-size", 4, "ngIf"], [3, "ngSwitch"], ["class", "flex-auto field-size toggle-button", 4, "ngSwitchCase"], ["class", "flex-auto w-30", 4, "ngSwitchCase"], ["class", "flex-auto w-30 field-size", 4, "ngSwitchCase"], ["class", "form-field full-width", "appearance", "outline", 4, "ngSwitchCase"], ["class", "form-field full-width tel-input", 4, "ngSwitchCase"], ["class", "form-field field-size", "appearance", "outline", "style", "opacity:0 ;", 4, "ngSwitchCase"], ["class", "form-field field-size", "appearance", "outline", 4, "ngSwitchDefault"], [1, "flex-auto", "field-size", "toggle-button"], [1, "form-field", 3, "ngModel", "ngModelOptions", "ngStyle", "ngModelChange"], [1, "flex-auto", "w-30"], [1, "form-field", 2, "margin-right", "10px", 3, "ngModel", "required", "ngModelOptions", "ngStyle", "ngModelChange"], ["placeholder", "Company", "required", "", "style", "display: inline-block; width: 50%;", 3, "ngModel", "ngModelOptions", "ngModelChange", 4, "ngIf"], ["placeholder", "Company", "required", "", 2, "display", "inline-block", "width", "50%", 3, "ngModel", "ngModelOptions", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], [1, "onboarding-select", 2, "margin-top", "20px"], ["class", "form-field", "style", "display: block; margin-bottom: 5px; margin-top: 10px;margin-right: 10px;", 3, "checked", "ngModel", "required", "ngModelOptions", "ngModelChange", 4, "ngFor", "ngForOf"], [1, "form-field", 2, "display", "block", "margin-bottom", "5px", "margin-top", "10px", "margin-right", "10px", 3, "checked", "ngModel", "required", "ngModelOptions", "ngModelChange"], [1, "flex-auto", "w-30", "field-size"], [2, "display", "block"], ["aria-label", "Select an option", 1, "form-field", "radio-group", "field-size", 3, "ngModel", "required", "ngModelChange"], ["class", "form-field field-size other-option", "appearance", "outline", 4, "ngIf"], ["appearance", "outline", 1, "form-field", "field-size", "other-option"], ["type", "text", "matInput", "", "placeholder", "", 3, "required", "ngModelOptions", "ngModel", "ngModelChange"], ["appearance", "outline", 1, "mat-select", "flex-auto", "w-30", "field-size"], [3, "ngModel", "ngModelOptions", "required", "ngModelChange"], ["appearance", "outline", 1, "form-field", "full-width"], ["type", "text", "rows", "5", "matInput", "", "placeholder", "Description...", 3, "required", "ngModelOptions", "ngModel", "ngModelChange"], [1, "form-field", "full-width", "tel-input"], [1, "tel-label"], ["id", "onboarding-phone-input", "name", "phone", 1, "phone-input-profile", 3, "cssClass", "preferredCountries", "enableAutoCountrySelect", "enablePlaceholder", "customPlaceholder", "selectFirstCountry", "selectedCountryISO", "maxLength", "inputId", "phoneValidation", "separateDialCode", "numberFormat", "ngModelOptions", "ngModel", "input", "ngModelChange"], [4, "ngIf"], ["appearance", "outline", 1, "form-field", "field-size", 2, "opacity", "0"], ["disabled", "true", "matInput", "", 3, "type"], ["appearance", "outline", 1, "form-field", "field-size"], ["matInput", "", "placeholder", "", 3, "type", "required", "ngModelOptions", "ngModel", "ngModelChange"]], template: function SubOnboardingCreateComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef(_c3);
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵtemplate(1, SubOnboardingCreateComponent_ng_container_1_Template, 10, 9, "ng-container", 1);
        i0.ɵɵtemplate(2, SubOnboardingCreateComponent_div_2_Template, 6, 6, "div", 2);
        i0.ɵɵelementEnd();
        i0.ɵɵprojection(3);
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.field.key !== "AccountName");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.field.key === "AccountName");
    } }, dependencies: [i1.DefaultValueAccessor, i1.NgControlStatus, i1.RequiredValidator, i1.NgModel, i2.MatError, i2.MatFormField, i2.MatLabel, i3.NgForOf, i3.NgIf, i3.NgStyle, i3.NgSwitch, i3.NgSwitchCase, i3.NgSwitchDefault, i4.MatCheckbox, i4.MatCheckboxRequiredValidator, i5.MatSelect, i6.MatOption, i7.MatInput, i8.MatRadioGroup, i8.MatRadioButton, i9.NgxIntlTelInputComponent, i9.NativeElementInjectorDirective, i10.MatSlideToggle], styles: [".container[_ngcontent-%COMP%]{max-width:98%;margin:50px auto auto;padding-bottom:50px}.container[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:space-between}.input-category-name[_ngcontent-%COMP%]{font-size:15px;font-weight:500}.full-width[_ngcontent-%COMP%]{width:100%}.field-item[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;width:100%;flex-wrap:wrap;position:relative}.field-item[_ngcontent-%COMP%]   .button-action[_ngcontent-%COMP%]{background-color:#6fe8d7;height:100%;margin:auto 15px auto auto;display:flex}.field-item[_ngcontent-%COMP%]   .button-action[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{box-shadow:none;background-color:transparent;color:#fff}.field-action[_ngcontent-%COMP%]{width:10%}.field-size[_ngcontent-%COMP%]   mat-checkbox[_ngcontent-%COMP%]{margin:20px}hr[_ngcontent-%COMP%]{margin:50px 0}  .mat-form-field-appearance-fill .mat-form-field-flex{background-color:#fff}.category-action[_ngcontent-%COMP%]{display:flex;width:100%}.delete-field[_ngcontent-%COMP%]{margin:auto 2%}.radio-group[_ngcontent-%COMP%]   .mat-radio-button[_ngcontent-%COMP%]{margin-right:10px}.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary[_ngcontent-%COMP%]{background-color:#3f51b5;color:#fff;min-height:20px;font-size:10px}.move-icons[_ngcontent-%COMP%]{cursor:move}.category-item[_ngcontent-%COMP%]{display:flex;align-items:baseline;width:100%;border:1px solid #dce4e9;border-radius:8px}  .readonly.mat-form-field-appearance-outline .mat-form-field-outline{color:transparent!important}.field-content[_ngcontent-%COMP%]{width:100%}.cdk-drag-preview[_ngcontent-%COMP%]{box-sizing:border-box;border-radius:4px;box-shadow:0 5px 5px -3px #0003,0 8px 10px 1px #00000024,0 3px 14px 2px #0000001f}.cdk-drag-placeholder[_ngcontent-%COMP%]{opacity:0}.cdk-drag-animating[_ngcontent-%COMP%]{transition:transform .25s cubic-bezier(0,0,.2,1)}.example-list.cdk-drop-list-dragging[_ngcontent-%COMP%]   .category-item[_ngcontent-%COMP%]:not(.cdk-drag-placeholder){transition:transform .25s cubic-bezier(0,0,.2,1)}.add-button-container[_ngcontent-%COMP%]{background:#ffffff 0% 0% no-repeat padding-box;border:1px dashed #dce4e9;border-radius:8px;margin-top:10px;padding:10px;display:flex;justify-content:center;align-items:center;width:98%;margin-left:0;margin-bottom:22px}.add-button-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{display:flex;align-items:center;background-color:transparent;border:none;cursor:pointer;letter-spacing:0px;color:#c2c8d5;box-shadow:none}.expand-button[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%]{font-size:48px;margin-top:-20px;margin-right:15px}.transparent-button[_ngcontent-%COMP%]{background-color:transparent!important;box-shadow:none!important;width:40px!important;padding:0!important;margin:0!important;min-width:auto!important}.expand-button[_ngcontent-%COMP%]{color:#5a607f!important;background-color:transparent!important;box-shadow:none!important}.checkbox-title-active[_ngcontent-%COMP%]{font-weight:700}.other-option[_ngcontent-%COMP%]{margin-left:10px}.flex-auto[_ngcontent-%COMP%]{width:100%}  .country-dropdown{min-width:unset!important}  .tel-input{position:relative}  .tel-input .tel-label{font-size:12px;color:#0009;position:absolute;z-index:1;background-color:#fff;padding:0 2px;left:8px;top:-3px}  .phone-input-profile{padding-bottom:0;padding-top:0;display:block!important;max-width:100%;width:100%}  .phone-input-profile .iti{width:100%!important}  .phone-input-profile .iti input[type=tel]{margin-top:4px!important}  .phone-input-profile input{outline:none;padding:17px;border-radius:5px;border-color:#0000001f;border-width:1px;width:100%;border:1px solid rgba(0,0,0,.12)}.toggle-button[_ngcontent-%COMP%]{padding-top:15px;display:flex;align-items:center}.toggle-button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin-right:10px}.onboarding-select[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(6,1fr)}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SubOnboardingCreateComponent, [{
        type: Component,
        args: [{ selector: 'lib-sub-create-onboarding', template: "<div class=\"field-item\">\n    <ng-container *ngIf=\"field.key!=='AccountName'\" [ngSwitch]=\"field.type\">\n        <div *ngSwitchCase=\"'toggle'\" class=\"flex-auto field-size toggle-button\">\n            <span>{{ field.label }}</span>\n            <mat-slide-toggle class=\"form-field\" [(ngModel)]=\"field.defaultValue\"\n                [ngModelOptions]=\"{ standalone: true }\" [ngStyle]=\"field.selector && { display: 'inine-block' }\">\n            </mat-slide-toggle>\n        </div>\n        <div *ngSwitchCase=\"'checkbox'\" class=\"flex-auto w-30\">\n            <mat-checkbox class=\"form-field\" style=\"margin-right: 10px;\"\n                [class]=\"checkSubForm(field) ? 'checkbox-title-active':''\" [(ngModel)]=\"field.value\"\n                [required]=\"field.isMandatory\" [ngModelOptions]=\"{standalone: true}\"\n                [ngStyle]=\"field.selector && {'display': 'inine-block'}\">\n                {{field.label}}\n            </mat-checkbox>\n\n\n            <mat-select placeholder=\"Company\" [(ngModel)]=\"field.selector.value\" [ngModelOptions]=\"{standalone: true}\"\n                required *ngIf=\"field.selector\" style=\"display: inline-block; width: 50%;\">\n                <mat-option *ngFor=\"let select of field.selector.defaultValue\" [value]=\"select.value\">\n                    {{select.value}}</mat-option>\n            </mat-select>\n        </div>\n        <div *ngSwitchCase=\"'checkbox_multiple'\" class=\"flex-auto w-30\">\n            <label>{{field.label}}</label>\n            <div class=\"onboarding-select\" style=\"margin-top: 20px;\">\n                <mat-checkbox class=\"form-field\"\n                    style=\"display: block; margin-bottom: 5px; margin-top: 10px;margin-right: 10px;\"\n                    *ngFor=\"let opt of field.defaultValue\" [checked]=\"opt.checked\" [(ngModel)]=\"opt.checked\"\n                    [required]=\"field.isMandatory\" [ngModelOptions]=\"{standalone: true}\">\n                    {{opt.value}}\n                </mat-checkbox>\n            </div>\n        </div>\n        <div *ngSwitchCase=\"'radio'\" class=\"flex-auto w-30 field-size\">\n            <label style=\"display: block;\"> {{field.label}} </label>\n            <mat-radio-group class=\"form-field radio-group field-size\" [(ngModel)]=\"field.value\"\n                [required]=\"field.isMandatory\" aria-label=\"Select an option\">\n                <mat-radio-button *ngFor=\"let opt of field.defaultValue\" [value]=\"opt.value\">{{opt.value}}\n                </mat-radio-button>\n            </mat-radio-group>\n            <mat-form-field *ngIf=\"'autre'===formatOther(field.value)\" class=\"form-field field-size other-option\"\n                appearance=\"outline\">\n                <mat-label>{{locale?.OTHER_OPTION}}</mat-label>\n                <input type=\"text\" [required]=\"field.isMandatory\" matInput [ngModelOptions]=\"{standalone: true}\"\n                    [(ngModel)]=\"field.otherValue\" placeholder=\"\">\n            </mat-form-field>\n        </div>\n        <div *ngSwitchCase=\"'select'\" class=\"flex-auto w-30 field-size\">\n            <mat-form-field class=\" mat-select flex-auto w-30 field-size\" appearance=\"outline\">\n                <mat-label> {{field.label}} </mat-label>\n                <mat-select [(ngModel)]=\"field.value\" [ngModelOptions]=\"{standalone: true}\"\n                    [required]=\"field.isMandatory\">\n                    <mat-option *ngFor=\"let opt of field.defaultValue\" [value]=\"opt.value\">\n                        {{opt.value}}</mat-option>\n                </mat-select>\n            </mat-form-field>\n            <mat-form-field *ngIf=\"'autre'===formatOther(field.value)\" class=\"form-field field-size other-option\"\n                appearance=\"outline\">\n                <mat-label>Autre option</mat-label>\n                <input type=\"text\" [required]=\"field.isMandatory\" matInput [ngModelOptions]=\"{standalone: true}\"\n                    [(ngModel)]=\"field.otherValue\" placeholder=\"\">\n            </mat-form-field>\n        </div>\n        <mat-form-field *ngSwitchCase=\"'textarea'\" class=\"form-field full-width\" appearance=\"outline\">\n            <mat-label>{{field.label}}</mat-label>\n            <textarea type=\"text\" rows=\"5\" matInput [required]=\"field.isMandatory\" [ngModelOptions]=\"{standalone: true}\"\n                [(ngModel)]=\"field.value\" placeholder=\"Description...\"></textarea>\n        </mat-form-field>\n        <div *ngSwitchCase=\"'tel'\" class=\"form-field full-width tel-input\">\n            <mat-label class=\"tel-label\">{{field.label}}</mat-label>\n            <ngx-intl-tel-input id=\"onboarding-phone-input\" class=\"phone-input-profile\" [cssClass]=\"'input-phone'\"\n                [preferredCountries]=\"preferredCountries\" [enableAutoCountrySelect]=\"false\" [enablePlaceholder]=\"true\"\n                [customPlaceholder]=\"'Phone'\" [selectFirstCountry]=\"false\" [selectedCountryISO]=\"flag(field.value)\"\n                [maxLength]=\"15\" [inputId]=\"field.key\" [phoneValidation]=\"true\" [separateDialCode]=\"separateDialCode\"\n                [numberFormat]=\"PhoneNumberFormat.National\" name=\"phone\" (input)=\"checkPhone(field.value)\"\n                [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"field.value\">\n            </ngx-intl-tel-input>\n            <mat-error *ngIf=\"invalideValue\">{{locale?.INVALID_PHONE}}</mat-error>\n        </div>\n        <mat-form-field *ngSwitchCase=\"'none'\" class=\"form-field field-size\" appearance=\"outline\" style=\"opacity:0 ;\">\n            <mat-label></mat-label>\n            <input [type]=\"field.type\" disabled=\"true\" matInput />\n        </mat-form-field>\n        <mat-form-field *ngSwitchDefault class=\"form-field field-size\" appearance=\"outline\">\n            <mat-label>{{field.label}}</mat-label>\n            <input [type]=\"field.type\" [required]=\"field.isMandatory\" matInput [ngModelOptions]=\"{standalone: true}\"\n                [(ngModel)]=\"field.value\" placeholder=\"\">\n        </mat-form-field>\n    </ng-container>\n    <div *ngIf=\"field.key==='AccountName'\" class=\"flex-auto w-30 field-size\">\n        <mat-form-field class=\" mat-select flex-auto w-30 field-size\" appearance=\"outline\">\n            <mat-label> {{field.label}} </mat-label>\n            <mat-select [(ngModel)]=\"field.value\" [ngModelOptions]=\"{standalone: true}\" [required]=\"field.isMandatory\">\n                <mat-option *ngFor=\"let opt of field.defaultValue\" [value]=\"opt._id\">\n                    {{opt.Name}}</mat-option>\n            </mat-select>\n        </mat-form-field>\n\n    </div>\n</div>\n<ng-content select=\".child\"></ng-content>", styles: [".container{max-width:98%;margin:50px auto auto;padding-bottom:50px}.container .action{width:100%;display:flex;justify-content:space-between}.input-category-name{font-size:15px;font-weight:500}.full-width{width:100%}.field-item{display:flex;justify-content:space-between;align-items:center;width:100%;flex-wrap:wrap;position:relative}.field-item .button-action{background-color:#6fe8d7;height:100%;margin:auto 15px auto auto;display:flex}.field-item .button-action button{box-shadow:none;background-color:transparent;color:#fff}.field-action{width:10%}.field-size mat-checkbox{margin:20px}hr{margin:50px 0}::ng-deep .mat-form-field-appearance-fill .mat-form-field-flex{background-color:#fff}.category-action{display:flex;width:100%}.delete-field{margin:auto 2%}.radio-group .mat-radio-button{margin-right:10px}.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary{background-color:#3f51b5;color:#fff;min-height:20px;font-size:10px}.move-icons{cursor:move}.category-item{display:flex;align-items:baseline;width:100%;border:1px solid #dce4e9;border-radius:8px}::ng-deep .readonly.mat-form-field-appearance-outline .mat-form-field-outline{color:transparent!important}.field-content{width:100%}.cdk-drag-preview{box-sizing:border-box;border-radius:4px;box-shadow:0 5px 5px -3px #0003,0 8px 10px 1px #00000024,0 3px 14px 2px #0000001f}.cdk-drag-placeholder{opacity:0}.cdk-drag-animating{transition:transform .25s cubic-bezier(0,0,.2,1)}.example-list.cdk-drop-list-dragging .category-item:not(.cdk-drag-placeholder){transition:transform .25s cubic-bezier(0,0,.2,1)}.add-button-container{background:#ffffff 0% 0% no-repeat padding-box;border:1px dashed #dce4e9;border-radius:8px;margin-top:10px;padding:10px;display:flex;justify-content:center;align-items:center;width:98%;margin-left:0;margin-bottom:22px}.add-button-container button{display:flex;align-items:center;background-color:transparent;border:none;cursor:pointer;letter-spacing:0px;color:#c2c8d5;box-shadow:none}.expand-button .material-icons{font-size:48px;margin-top:-20px;margin-right:15px}.transparent-button{background-color:transparent!important;box-shadow:none!important;width:40px!important;padding:0!important;margin:0!important;min-width:auto!important}.expand-button{color:#5a607f!important;background-color:transparent!important;box-shadow:none!important}.checkbox-title-active{font-weight:700}.other-option{margin-left:10px}.flex-auto{width:100%}::ng-deep .country-dropdown{min-width:unset!important}::ng-deep .tel-input{position:relative}::ng-deep .tel-input .tel-label{font-size:12px;color:#0009;position:absolute;z-index:1;background-color:#fff;padding:0 2px;left:8px;top:-3px}::ng-deep .phone-input-profile{padding-bottom:0;padding-top:0;display:block!important;max-width:100%;width:100%}::ng-deep .phone-input-profile .iti{width:100%!important}::ng-deep .phone-input-profile .iti input[type=tel]{margin-top:4px!important}::ng-deep .phone-input-profile input{outline:none;padding:17px;border-radius:5px;border-color:#0000001f;border-width:1px;width:100%;border:1px solid rgba(0,0,0,.12)}.toggle-button{padding-top:15px;display:flex;align-items:center}.toggle-button span{margin-right:10px}.onboarding-select{display:grid;grid-template-columns:repeat(6,1fr)}\n"] }]
    }], function () { return []; }, { field: [{
            type: Input
        }], length: [{
            type: Input
        }], locale: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3ViLW9uYm9hcmRpbmctY3JlYXRlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL29uYm9hcmRpbmcvc3JjL2xpYi9jb21wb25lbnRzL29uYm9hcmRpbmcvc3ViLW9uYm9hcmRpbmctY3JlYXRlL3N1Yi1vbmJvYXJkaW5nLWNyZWF0ZS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9vbmJvYXJkaW5nL3NyYy9saWIvY29tcG9uZW50cy9vbmJvYXJkaW5nL3N1Yi1vbmJvYXJkaW5nLWNyZWF0ZS9zdWItb25ib2FyZGluZy1jcmVhdGUuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDaEUsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvRSxPQUFPLEVBQUUsVUFBVSxFQUFFLGlCQUFpQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDbkUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLGdCQUFnQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFekUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7SUNINUMsK0JBQXlFLFdBQUE7SUFDL0QsWUFBaUI7SUFBQSxpQkFBTztJQUM5Qiw0Q0FDcUc7SUFEaEUsMk5BQWEsbURBQ3hELElBRDJFO0lBRXJFLGlCQUFtQixFQUFBOzs7SUFIYixlQUFpQjtJQUFqQix3Q0FBaUI7SUFDYyxlQUFnQztJQUFoQyxtREFBZ0MsOENBQUEsZ0VBQUE7OztJQWVqRSxzQ0FBc0Y7SUFDbEYsWUFBZ0I7SUFBQSxpQkFBYTs7O0lBRDhCLHdDQUFzQjtJQUNqRixlQUFnQjtJQUFoQixnREFBZ0I7Ozs7SUFIeEIsc0NBQytFO0lBRDdDLGtPQUFhLHFEQUE0QixJQUFQO0lBRWhFLDhIQUNpQztJQUNyQyxpQkFBYTs7O0lBSnFCLHNEQUFrQyw4Q0FBQTtJQUVqQyxlQUE4QjtJQUE5Qiw2REFBOEI7Ozs7O0lBWHJFLCtCQUF1RCx1QkFBQTtJQUVZLHVOQUFhLDRDQUNsRixJQUQ4RjtJQUdwRixZQUNKO0lBQUEsaUJBQWU7SUFHZixpSEFJYTtJQUNqQixpQkFBTTs7O0lBWkUsZUFBMEQ7SUFBMUQsK0VBQTBEO0lBQUMsNENBQXlCLHNDQUFBLDhDQUFBLGdFQUFBO0lBR3BGLGVBQ0o7SUFESSxtREFDSjtJQUljLGVBQW9CO0lBQXBCLDRDQUFvQjs7OztJQVE5Qix3Q0FHeUU7SUFETiw0UEFBYSx3Q0FDMUYsSUFEc0c7SUFFeEYsWUFDSjtJQUFBLGlCQUFlOzs7O0lBSDRCLHlDQUF1Qiw0QkFBQSx1Q0FBQSw4Q0FBQTtJQUU5RCxlQUNKO0lBREksOENBQ0o7OztJQVJSLCtCQUFnRSxZQUFBO0lBQ3JELFlBQWU7SUFBQSxpQkFBUTtJQUM5QiwrQkFBeUQ7SUFDckQscUhBS2U7SUFDbkIsaUJBQU0sRUFBQTs7O0lBUkMsZUFBZTtJQUFmLHdDQUFlO0lBSUUsZUFBcUI7SUFBckIsbURBQXFCOzs7SUFVekMsNENBQTZFO0lBQUEsWUFDN0U7SUFBQSxpQkFBbUI7OztJQURzQyxxQ0FBbUI7SUFBQyxlQUM3RTtJQUQ2RSw2Q0FDN0U7Ozs7SUFFSiwwQ0FDeUIsZ0JBQUE7SUFDVixZQUF3QjtJQUFBLGlCQUFZO0lBQy9DLGlDQUNrRDtJQUE5QyxpT0FBYSxpREFBd0IsSUFBUDtJQURsQyxpQkFDa0QsRUFBQTs7O0lBRnZDLGVBQXdCO0lBQXhCLGlGQUF3QjtJQUNoQixlQUE4QjtJQUE5QixvREFBOEIsOENBQUEscUNBQUE7Ozs7SUFWekQsK0JBQStELGdCQUFBO0lBQzNCLFlBQWdCO0lBQUEsaUJBQVE7SUFDeEQsMkNBQ2lFO0lBRE4sME5BQWEsNENBQzlFLElBRDBGO0lBRWhGLDZIQUNtQjtJQUN2QixpQkFBa0I7SUFDbEIseUhBS2lCO0lBQ3JCLGlCQUFNOzs7SUFaOEIsZUFBZ0I7SUFBaEIsbURBQWdCO0lBQ1csZUFBeUI7SUFBekIsNENBQXlCLHNDQUFBO0lBRTlDLGVBQXFCO0lBQXJCLG1EQUFxQjtJQUcxQyxlQUF3QztJQUF4Qyx5RUFBd0M7OztJQVlqRCxzQ0FBdUU7SUFDbkUsWUFBYTtJQUFBLGlCQUFhOzs7SUFEcUIscUNBQW1CO0lBQ2xFLGVBQWE7SUFBYiw2Q0FBYTs7OztJQUd6QiwwQ0FDeUIsZ0JBQUE7SUFDViw0QkFBWTtJQUFBLGlCQUFZO0lBQ25DLGlDQUNrRDtJQUE5QyxpT0FBYSxpREFBd0IsSUFBUDtJQURsQyxpQkFDa0QsRUFBQTs7O0lBRC9CLGVBQThCO0lBQTlCLG9EQUE4Qiw4Q0FBQSxxQ0FBQTs7OztJQVp6RCwrQkFBZ0UseUJBQUEsZ0JBQUE7SUFFNUMsWUFBZ0I7SUFBQSxpQkFBWTtJQUN4QyxzQ0FDbUM7SUFEdkIscU5BQWEsNENBQW1CLElBQVA7SUFFakMsaUhBQzhCO0lBQ2xDLGlCQUFhLEVBQUE7SUFFakIseUhBS2lCO0lBQ3JCLGlCQUFNOzs7SUFiYyxlQUFnQjtJQUFoQixtREFBZ0I7SUFDaEIsZUFBeUI7SUFBekIsNENBQXlCLDhDQUFBLHNDQUFBO0lBRUwsZUFBcUI7SUFBckIsbURBQXFCO0lBSXhDLGVBQXdDO0lBQXhDLHlFQUF3Qzs7OztJQU83RCwwQ0FBOEYsZ0JBQUE7SUFDL0UsWUFBZTtJQUFBLGlCQUFZO0lBQ3RDLG9DQUMyRDtJQUF2RCw4TkFBYSw0Q0FBbUIsSUFBUDtJQUE4QixpQkFBVyxFQUFBOzs7SUFGM0QsZUFBZTtJQUFmLHdDQUFlO0lBQ2MsZUFBOEI7SUFBOUIsbURBQThCLDhDQUFBLCtCQUFBOzs7SUFZdEUsaUNBQWlDO0lBQUEsWUFBeUI7SUFBQSxpQkFBWTs7O0lBQXJDLGVBQXlCO0lBQXpCLGtGQUF5Qjs7OztJQVQ5RCwrQkFBbUUsb0JBQUE7SUFDbEMsWUFBZTtJQUFBLGlCQUFZO0lBQ3hELDhDQUtvRTtJQURQLHVNQUFTLGVBQUEsdUNBQXVCLENBQUEsSUFBQyxnTkFDdkMsNENBQzlELElBRnFHO0lBRTlGLGlCQUFxQjtJQUNyQiwrR0FBc0U7SUFDMUUsaUJBQU07OztJQVQyQixlQUFlO0lBQWYsd0NBQWU7SUFDZ0MsZUFBMEI7SUFBMUIsd0NBQTBCLGlEQUFBLGtDQUFBLDJCQUFBLDhCQUFBLDZCQUFBLHVEQUFBLGlCQUFBLDZCQUFBLHlCQUFBLDZDQUFBLG1EQUFBLCtDQUFBLCtCQUFBO0lBTzFGLGVBQW1CO0lBQW5CLDJDQUFtQjs7O0lBRW5DLDBDQUE4RztJQUMxRyw0QkFBdUIsZ0JBQUE7SUFFM0IsaUJBQWlCOzs7SUFETixlQUFtQjtJQUFuQix3Q0FBbUI7Ozs7SUFFOUIsMENBQW9GLGdCQUFBO0lBQ3JFLFlBQWU7SUFBQSxpQkFBWTtJQUN0QyxpQ0FDNkM7SUFBekMsMk5BQWEsNENBQW1CLElBQVA7SUFEN0IsaUJBQzZDLEVBQUE7OztJQUZsQyxlQUFlO0lBQWYseUNBQWU7SUFDbkIsZUFBbUI7SUFBbkIseUNBQW1CLHVDQUFBLDhDQUFBLGdDQUFBOzs7SUFyRmxDLGdDQUF3RTtJQUNwRSw0RkFLTTtJQUNOLDZGQWNNO0lBQ04sNEZBVU07SUFDTiw0RkFhTTtJQUNOLDRGQWVNO0lBQ04sa0hBSWlCO0lBQ2pCLDZGQVVNO0lBQ04sa0hBR2lCO0lBQ2pCLG1IQUlpQjtJQUNyQiwwQkFBZTs7O0lBeEZpQyw0Q0FBdUI7SUFDN0QsZUFBc0I7SUFBdEIsdUNBQXNCO0lBTXRCLGVBQXdCO0lBQXhCLHlDQUF3QjtJQWV4QixlQUFpQztJQUFqQyxrREFBaUM7SUFXakMsZUFBcUI7SUFBckIsc0NBQXFCO0lBY3JCLGVBQXNCO0lBQXRCLHVDQUFzQjtJQWdCWCxlQUF3QjtJQUF4Qix5Q0FBd0I7SUFLbkMsZUFBbUI7SUFBbkIsb0NBQW1CO0lBV1IsZUFBb0I7SUFBcEIscUNBQW9COzs7SUFjN0Isc0NBQXFFO0lBQ2pFLFlBQVk7SUFBQSxpQkFBYTs7O0lBRHNCLG1DQUFpQjtJQUNoRSxlQUFZO0lBQVosNENBQVk7Ozs7SUFMNUIsK0JBQXlFLHlCQUFBLGdCQUFBO0lBRXJELFlBQWdCO0lBQUEsaUJBQVk7SUFDeEMsc0NBQTJHO0lBQS9GLHFNQUFhLDRDQUFtQixJQUFQO0lBQ2pDLGtHQUM2QjtJQUNqQyxpQkFBYSxFQUFBLEVBQUE7OztJQUpELGVBQWdCO0lBQWhCLG1EQUFnQjtJQUNoQixlQUF5QjtJQUF6Qiw0Q0FBeUIsOENBQUEsc0NBQUE7SUFDTCxlQUFxQjtJQUFyQixtREFBcUI7Ozs7QURqRmpFLE1BQU0sT0FBTyw0QkFBNEI7SUE2QnZDO1FBdEJVLDBCQUFxQixHQUFHLElBQUksWUFBWSxFQUFPLENBQUE7UUFDL0MsZUFBVSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUE7UUFDcEMsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUE7UUFDaEMsa0JBQWEsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFBO1FBQ3ZDLGtCQUFhLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQTtRQUN2QyxpQkFBWSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUE7UUFDdEMsb0JBQWUsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFBO1FBQ3pDLDBCQUFxQixHQUFHLElBQUksWUFBWSxFQUFPLENBQUE7UUFDL0MsaUJBQVksR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFBO1FBQ3RDLGtCQUFhLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQTtRQUN2QyxrQkFBYSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUE7UUFDdkMsaUJBQVksR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFBO1FBRWhELGdCQUFXLEdBQUcsSUFBSSxrQkFBa0IsQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDLENBQUM7UUFDaEQsdUJBQWtCLEdBQWlCLENBQUMsVUFBVSxDQUFDLFlBQVksRUFBRSxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDaEYsc0JBQWlCLEdBQUcsaUJBQWlCLENBQUM7UUFDdEMsdUJBQWtCLEdBQUcsQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBQy9DLGtCQUFhLEdBQUcsS0FBSyxDQUFDO1FBQ3RCLGdCQUFXLEdBQUcsRUFBRSxDQUFBO1FBQ2hCLHFCQUFnQixHQUFHLEtBQUssQ0FBQztRQUN6QixhQUFRLEdBQUcsRUFBRSxDQUFBO1FBQ2IsY0FBUyxHQUFHLEVBQUUsQ0FBQTtRQXNEZCxlQUFVLEdBQUcsQ0FBQyxJQUFTLEVBQUUsRUFBRTtZQUN6QixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtZQUM3QixtREFBbUQ7WUFDbkQseURBQXlEO1lBQ3pELG1EQUFtRDtRQUVyRCxDQUFDLENBQUE7SUExREQsQ0FBQztJQUVELEtBQUssQ0FBQyxRQUFRO0lBRWQsQ0FBQztJQUVELElBQUksQ0FBQyxLQUFLO1FBQ1IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUE7SUFDekIsQ0FBQztJQUVELG1CQUFtQixDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQztRQUM3QixJQUFJLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ3pFLENBQUM7SUFFRCxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDO1FBQ2YsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUE7SUFDdkMsQ0FBQztJQUVELFdBQVcsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNsQixLQUFLLENBQUMsY0FBYyxFQUFFLENBQUE7UUFDdEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQTtJQUN2QyxDQUFDO0lBRUQsV0FBVyxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQztRQUNyQixLQUFLLENBQUMsY0FBYyxFQUFFLENBQUE7UUFDdEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQTtJQUNuQyxDQUFDO0lBRUQsVUFBVSxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQTtJQUN4QyxDQUFDO0lBRUQsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQTtJQUM1QyxDQUFDO0lBQ0QsbUJBQW1CLENBQUMsQ0FBQztRQUNuQixDQUFDLENBQUMsY0FBYyxFQUFFLENBQUE7UUFDbEIsSUFBSSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtJQUN2QyxDQUFDO0lBQ0QsVUFBVSxDQUFDLENBQUMsRUFBRSxLQUFLO1FBQ2pCLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQTtRQUNsQixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQTtJQUNqRCxDQUFDO0lBRUQsbUJBQW1CLENBQUMsQ0FBQztRQUNuQixDQUFDLENBQUMsY0FBYyxFQUFFLENBQUE7SUFDcEIsQ0FBQztJQUVELFdBQVcsQ0FBQyxLQUFLLEVBQUUsR0FBRztRQUNwQixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFBO0lBQ3pDLENBQUM7SUFVRCxVQUFVLENBQUMsSUFBSTtRQUNiLElBQUksSUFBSSxDQUFDLEtBQUssS0FBSyxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ25DLElBQUksQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFBO1lBQ3JCLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFBO1NBQ3BCO2FBQU07WUFDTCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7WUFDOUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFBO1NBQzVCO0lBQ0gsQ0FBQztJQUVELElBQUksS0FBSyxLQUFLLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBRTlDLFdBQVcsQ0FBQyxLQUFVO1FBQ3BCLElBQUksS0FBSyxJQUFJLE9BQU8sS0FBSyxLQUFLLFNBQVMsRUFBRTtZQUN2QyxPQUFPLENBQUMsS0FBSyxFQUFFLGlCQUFpQixFQUFFLElBQUksRUFBRSxDQUFDLENBQUE7U0FDMUM7UUFDRCxPQUFPLEVBQUUsQ0FBQTtJQUNYLENBQUM7SUFHRCxZQUFZLENBQUMsS0FBSztRQUNoQixJQUFJLFVBQVUsR0FBRyxLQUFLLENBQUM7UUFDdkIsSUFBSSxLQUFLLENBQUMsS0FBSyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFO1lBQ3JDLFVBQVUsR0FBRyxJQUFJLENBQUM7U0FDbkI7UUFDRCxPQUFPLFVBQVUsQ0FBQTtJQUNuQixDQUFDO0lBRUQsSUFBSSxDQUFDLEtBQUs7UUFDUixNQUFNLFdBQVcsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDakMsT0FBTyxXQUFXLElBQUksa0JBQWtCLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLFdBQVcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQztJQUNwSCxDQUFDO0lBRUQsVUFBVSxDQUFDLEtBQUs7UUFDZCxJQUFJLEtBQUssRUFBRTtZQUNULElBQUksS0FBSyxHQUFHLElBQUksTUFBTSxDQUFDLHdNQUF3TSxDQUFDLENBQUE7WUFDaE8sSUFBSSxDQUFDLGFBQWEsR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7WUFDdEQsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFBO1NBQzNDO1FBQ0QsSUFBSSxLQUFLLElBQUksS0FBSyxDQUFDLGdCQUFnQixDQUFDLElBQUksS0FBSyxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxFQUFFO1lBQ3JFLElBQUksQ0FBQyxHQUFHLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDcEQsSUFBSSxJQUFJLEdBQVEsRUFBRSxDQUFDO1lBRW5CLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUNqQyxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7b0JBQ2xCLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRTt3QkFDdkIsSUFBSSxJQUFJLEdBQUcsQ0FBQztxQkFDYjtvQkFDRCxJQUFJLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztpQkFDeEI7YUFDRjtZQUNELElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFBO1NBQzNDO0lBQ0gsQ0FBQzs7d0dBL0lVLDRCQUE0QjsrRUFBNUIsNEJBQTRCOztRQ2J6Qyw4QkFBd0I7UUFDcEIsZ0dBd0ZlO1FBQ2YsNkVBU007UUFDVixpQkFBTTtRQUNOLGtCQUF5Qzs7UUFwR3RCLGVBQStCO1FBQS9CLHNEQUErQjtRQXlGeEMsZUFBK0I7UUFBL0Isc0RBQStCOzt1RkQ3RTVCLDRCQUE0QjtjQUx4QyxTQUFTOzJCQUNFLDJCQUEyQjtzQ0FLNUIsS0FBSztrQkFBYixLQUFLO1lBQ0csTUFBTTtrQkFBZCxLQUFLO1lBQ0csTUFBTTtrQkFBZCxLQUFLO1lBRUcsQ0FBQztrQkFBVCxLQUFLO1lBQ0csQ0FBQztrQkFBVCxLQUFLO1lBQ0kscUJBQXFCO2tCQUE5QixNQUFNO1lBQ0csVUFBVTtrQkFBbkIsTUFBTTtZQUNHLE1BQU07a0JBQWYsTUFBTTtZQUNHLGFBQWE7a0JBQXRCLE1BQU07WUFDRyxhQUFhO2tCQUF0QixNQUFNO1lBQ0csWUFBWTtrQkFBckIsTUFBTTtZQUNHLGVBQWU7a0JBQXhCLE1BQU07WUFDRyxxQkFBcUI7a0JBQTlCLE1BQU07WUFDRyxZQUFZO2tCQUFyQixNQUFNO1lBQ0csYUFBYTtrQkFBdEIsTUFBTTtZQUNHLGFBQWE7a0JBQXRCLE1BQU07WUFDRyxZQUFZO2tCQUFyQixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ09NTUEsIEVOVEVSLCBTRU1JQ09MT04gfSBmcm9tICdAYW5ndWxhci9jZGsva2V5Y29kZXMnO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ291bnRyeUlTTywgUGhvbmVOdW1iZXJGb3JtYXQgfSBmcm9tICduZ3gtaW50bC10ZWwtaW5wdXQnO1xuaW1wb3J0IHsgaXNWYWxpZFBob25lTnVtYmVyLCBwYXJzZVBob25lTnVtYmVyIH0gZnJvbSAnbGlicGhvbmVudW1iZXItanMnO1xuXG5pbXBvcnQgeyBVbnR5cGVkRm9ybUNvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBPbmJvYXJkaW5nU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL29uYm9hcmRpbmcuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1zdWItY3JlYXRlLW9uYm9hcmRpbmcnLFxuICB0ZW1wbGF0ZVVybDogJy4vc3ViLW9uYm9hcmRpbmctY3JlYXRlLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vc3ViLW9uYm9hcmRpbmctY3JlYXRlLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgU3ViT25ib2FyZGluZ0NyZWF0ZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIGZpZWxkOiBhbnlcbiAgQElucHV0KCkgbGVuZ3RoOiBhbnlcbiAgQElucHV0KCkgbG9jYWxlOiBhbnlcblxuICBASW5wdXQoKSBpOiBhbnlcbiAgQElucHV0KCkgajogYW55XG4gIEBPdXRwdXQoKSBvbkFkZEtleXdvcmRGcm9tSW5wdXQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKVxuICBAT3V0cHV0KCkgb25LZXlQcmVzcyA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpXG4gIEBPdXRwdXQoKSBvbkRyb3AgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKVxuICBAT3V0cHV0KCkgb25BZGROZXdGaWVsZCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpXG4gIEBPdXRwdXQoKSBvblJlbW92ZUZpZWxkID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KClcbiAgQE91dHB1dCgpIG9uQ2hhbmdlVHlwZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpXG4gIEBPdXRwdXQoKSBvblJlbW92ZUtleXdvcmQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKVxuICBAT3V0cHV0KCkgb25BZGROZXdTdWJMZXZlbEZpZWxkID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KClcbiAgQE91dHB1dCgpIG9uRXhwZW5kTW9yZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpXG4gIEBPdXRwdXQoKSBvbkNoYW5nZUxhYmVsID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KClcbiAgQE91dHB1dCgpIG9uQ2hlY2tlZENoaXAgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKVxuICBAT3V0cHV0KCkgb25DaGVja1ZhbHVlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KClcblxuICBjaGlwQ29udHJvbCA9IG5ldyBVbnR5cGVkRm9ybUNvbnRyb2wobmV3IFNldCgpKTtcbiAgcHJlZmVycmVkQ291bnRyaWVzOiBDb3VudHJ5SVNPW10gPSBbQ291bnRyeUlTTy5Vbml0ZWRTdGF0ZXMsIENvdW50cnlJU08uRnJhbmNlXTtcbiAgUGhvbmVOdW1iZXJGb3JtYXQgPSBQaG9uZU51bWJlckZvcm1hdDtcbiAgc2VwYXJhdG9yS2V5c0NvZGVzID0gW0VOVEVSLCBDT01NQSwgU0VNSUNPTE9OXTtcbiAgaW52YWxpZGVWYWx1ZSA9IGZhbHNlO1xuICBjdXJyZW50Q2hpcCA9IFwiXCJcbiAgc2VwYXJhdGVEaWFsQ29kZSA9IGZhbHNlO1xuICBhY2NvdW50cyA9IFtdXG4gIHByZXZWYWx1ZSA9IFwiXCJcbiAgY29uc3RydWN0b3IoKSB7XG4gIH1cblxuICBhc3luYyBuZ09uSW5pdCgpIHtcblxuICB9XG5cbiAgZHJvcChldmVudCkge1xuICAgIHRoaXMub25Ecm9wLmVtaXQoZXZlbnQpXG4gIH1cblxuICBhZGRLZXl3b3JkRnJvbUlucHV0KGV2ZW50LCBpLCBqKSB7XG4gICAgdGhpcy5vbkFkZEtleXdvcmRGcm9tSW5wdXQuZW1pdCh7IGV2ZW50LCBwcmV2OiB0aGlzLnByZXZWYWx1ZSwgaSwgaiB9KTtcbiAgfVxuXG4gIGtleVVwKGV2ZW50LCBpLCBqKSB7XG4gICAgdGhpcy5vbktleVByZXNzLmVtaXQoeyBldmVudCwgaSwgaiB9KVxuICB9XG5cbiAgYWRkTmV3RmllbGQoZXZlbnQsIGkpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgdGhpcy5vbkFkZE5ld0ZpZWxkLmVtaXQoeyBldmVudCwgaSB9KVxuICB9XG5cbiAgcmVtb3ZlRmllbGQoZXZlbnQsIGksIGopIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgdGhpcy5vblJlbW92ZUZpZWxkLmVtaXQoeyBpLCBqIH0pXG4gIH1cblxuICBjaGFuZ2VUeXBlKHR5cGUsIGksIGopIHtcbiAgICB0aGlzLm9uQ2hhbmdlVHlwZS5lbWl0KHsgdHlwZSwgaSwgaiB9KVxuICB9XG5cbiAgcmVtb3ZlS2V5d29yZChldmVudCwgaSwgaikge1xuICAgIHRoaXMub25SZW1vdmVLZXl3b3JkLmVtaXQoeyBldmVudCwgaSwgaiB9KVxuICB9XG4gIGFkZE5ld1N1YkxldmVsRmllbGQoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIHRoaXMub25BZGROZXdTdWJMZXZlbEZpZWxkLmVtaXQodHJ1ZSlcbiAgfVxuICBleHBlbmRNb3JlKGUsIGZpZWxkKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgdGhpcy5vbkV4cGVuZE1vcmUuZW1pdCh7IGV4cGFuZDogdHJ1ZSwgZmllbGQgfSlcbiAgfVxuXG4gIGluZ29yZURlZmF1bHRBY3Rpb24oZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICB9XG5cbiAgY2hhbmdlTGFiZWwobGFiZWwsIGtleSkge1xuICAgIHRoaXMub25DaGFuZ2VMYWJlbC5lbWl0KHsgbGFiZWwsIGtleSB9KVxuICB9XG5cbiAgdG9nZ2xlQ2hpcCA9IChjaGlwOiBhbnkpID0+IHtcbiAgICB0aGlzLm9uQ2hlY2tlZENoaXAuZW1pdChjaGlwKVxuICAgIC8vIGNvbnN0IGFkZENoaXAgPSAoKSA9PiB7IHRoaXMuY2hpcHMuYWRkKGNoaXApOyB9O1xuICAgIC8vIGNvbnN0IHJlbW92ZUNoaXAgPSAoKSA9PiB7IHRoaXMuY2hpcHMuZGVsZXRlKGNoaXApOyB9O1xuICAgIC8vIHRoaXMuY2hpcHMuaGFzKGNoaXApID8gcmVtb3ZlQ2hpcCgpIDogYWRkQ2hpcCgpO1xuXG4gIH1cblxuICBvbkVkaXRDaGlwKGNoaXApIHtcbiAgICBpZiAoY2hpcC52YWx1ZSA9PT0gdGhpcy5jdXJyZW50Q2hpcCkge1xuICAgICAgdGhpcy5jdXJyZW50Q2hpcCA9IFwiXCJcbiAgICAgIHRoaXMucHJldlZhbHVlID0gXCJcIlxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmN1cnJlbnRDaGlwID0gY2hpcC52YWx1ZTtcbiAgICAgIHRoaXMucHJldlZhbHVlID0gY2hpcC52YWx1ZVxuICAgIH1cbiAgfVxuXG4gIGdldCBjaGlwcygpIHsgcmV0dXJuIHRoaXMuY2hpcENvbnRyb2wudmFsdWU7IH1cblxuICBmb3JtYXRPdGhlcihvdGhlcjogYW55KSB7XG4gICAgaWYgKG90aGVyICYmIHR5cGVvZiBvdGhlciAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgICByZXR1cm4gKG90aGVyPy50b0xvY2FsZUxvd2VyQ2FzZSgpIHx8ICcnKVxuICAgIH1cbiAgICByZXR1cm4gJydcbiAgfVxuXG5cbiAgY2hlY2tTdWJGb3JtKGZvcm1zKSB7XG4gICAgbGV0IGhhc1N1YkZvcm0gPSBmYWxzZTtcbiAgICBpZiAoZm9ybXMuZm9ybXMgJiYgZm9ybXMuZm9ybXMubGVuZ3RoKSB7XG4gICAgICBoYXNTdWJGb3JtID0gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGhhc1N1YkZvcm1cbiAgfVxuXG4gIGZsYWcodmFsdWUpIHtcbiAgICBjb25zdCB2YWx1ZVN0cmluZyA9IFN0cmluZyh2YWx1ZSlcbiAgICByZXR1cm4gdmFsdWVTdHJpbmcgJiYgaXNWYWxpZFBob25lTnVtYmVyKHZhbHVlU3RyaW5nKSA/IHBhcnNlUGhvbmVOdW1iZXIodmFsdWVTdHJpbmcpLmNvdW50cnkgOiBDb3VudHJ5SVNPLkZyYW5jZTtcbiAgfVxuXG4gIGNoZWNrUGhvbmUocGhvbmUpIHtcbiAgICBpZiAocGhvbmUpIHtcbiAgICAgIGxldCByZWdleCA9IG5ldyBSZWdFeHAoL1xcKyg5Wzk3Nl1cXGR8OFs5ODc1MzBdXFxkfDZbOTg3XVxcZHw1WzkwXVxcZHw0MlxcZHwzWzg3NV1cXGR8Mls5ODY1NDMyMV1cXGR8OVs4NTQzMjEwXXw4WzY0MjFdfDZbNjU0MzIxMF18NVs4NzY1NDMyMV18NFs5ODc2NTQzMTBdfDNbOTY0MzIxMF18Mls3MF18N3wxKVxcVypcXGRcXFcqXFxkXFxXKlxcZFxcVypcXGRcXFcqXFxkXFxXKlxcZFxcVypcXGRcXFcqXFxkXFxXKihcXGR7MSwyfSkkLylcbiAgICAgIHRoaXMuaW52YWxpZGVWYWx1ZSA9ICFyZWdleC50ZXN0KHBob25lWydlMTY0TnVtYmVyJ10pO1xuICAgICAgdGhpcy5vbkNoZWNrVmFsdWUuZW1pdCh0aGlzLmludmFsaWRlVmFsdWUpXG4gICAgfVxuICAgIGlmIChwaG9uZSAmJiBwaG9uZVtcIm5hdGlvbmFsTnVtYmVyXCJdICYmIHBob25lW1wibmF0aW9uYWxOdW1iZXJcIl0gIT0gJycpIHtcbiAgICAgIGxldCBwID0gcGhvbmVbJ25hdGlvbmFsTnVtYmVyJ10ucmVwbGFjZUFsbCgnICcsICcnKTtcbiAgICAgIGxldCBuZXdwOiBhbnkgPSAnJztcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChwLnNwbGl0KCcnKVtpXSkge1xuICAgICAgICAgIGlmIChpICUgMiA9PSAwICYmIGkgPiAwKSB7XG4gICAgICAgICAgICBuZXdwICs9ICcgJztcbiAgICAgICAgICB9XG4gICAgICAgICAgbmV3cCArPSBwLnNwbGl0KCcnKVtpXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGhpcy5maWVsZC52YWx1ZSA9IHBob25lW1wibmF0aW9uYWxOdW1iZXJcIl1cbiAgICB9XG4gIH1cblxufVxuIiwiPGRpdiBjbGFzcz1cImZpZWxkLWl0ZW1cIj5cbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiZmllbGQua2V5IT09J0FjY291bnROYW1lJ1wiIFtuZ1N3aXRjaF09XCJmaWVsZC50eXBlXCI+XG4gICAgICAgIDxkaXYgKm5nU3dpdGNoQ2FzZT1cIid0b2dnbGUnXCIgY2xhc3M9XCJmbGV4LWF1dG8gZmllbGQtc2l6ZSB0b2dnbGUtYnV0dG9uXCI+XG4gICAgICAgICAgICA8c3Bhbj57eyBmaWVsZC5sYWJlbCB9fTwvc3Bhbj5cbiAgICAgICAgICAgIDxtYXQtc2xpZGUtdG9nZ2xlIGNsYXNzPVwiZm9ybS1maWVsZFwiIFsobmdNb2RlbCldPVwiZmllbGQuZGVmYXVsdFZhbHVlXCJcbiAgICAgICAgICAgICAgICBbbmdNb2RlbE9wdGlvbnNdPVwieyBzdGFuZGFsb25lOiB0cnVlIH1cIiBbbmdTdHlsZV09XCJmaWVsZC5zZWxlY3RvciAmJiB7IGRpc3BsYXk6ICdpbmluZS1ibG9jaycgfVwiPlxuICAgICAgICAgICAgPC9tYXQtc2xpZGUtdG9nZ2xlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiAqbmdTd2l0Y2hDYXNlPVwiJ2NoZWNrYm94J1wiIGNsYXNzPVwiZmxleC1hdXRvIHctMzBcIj5cbiAgICAgICAgICAgIDxtYXQtY2hlY2tib3ggY2xhc3M9XCJmb3JtLWZpZWxkXCIgc3R5bGU9XCJtYXJnaW4tcmlnaHQ6IDEwcHg7XCJcbiAgICAgICAgICAgICAgICBbY2xhc3NdPVwiY2hlY2tTdWJGb3JtKGZpZWxkKSA/ICdjaGVja2JveC10aXRsZS1hY3RpdmUnOicnXCIgWyhuZ01vZGVsKV09XCJmaWVsZC52YWx1ZVwiXG4gICAgICAgICAgICAgICAgW3JlcXVpcmVkXT1cImZpZWxkLmlzTWFuZGF0b3J5XCIgW25nTW9kZWxPcHRpb25zXT1cIntzdGFuZGFsb25lOiB0cnVlfVwiXG4gICAgICAgICAgICAgICAgW25nU3R5bGVdPVwiZmllbGQuc2VsZWN0b3IgJiYgeydkaXNwbGF5JzogJ2luaW5lLWJsb2NrJ31cIj5cbiAgICAgICAgICAgICAgICB7e2ZpZWxkLmxhYmVsfX1cbiAgICAgICAgICAgIDwvbWF0LWNoZWNrYm94PlxuXG5cbiAgICAgICAgICAgIDxtYXQtc2VsZWN0IHBsYWNlaG9sZGVyPVwiQ29tcGFueVwiIFsobmdNb2RlbCldPVwiZmllbGQuc2VsZWN0b3IudmFsdWVcIiBbbmdNb2RlbE9wdGlvbnNdPVwie3N0YW5kYWxvbmU6IHRydWV9XCJcbiAgICAgICAgICAgICAgICByZXF1aXJlZCAqbmdJZj1cImZpZWxkLnNlbGVjdG9yXCIgc3R5bGU9XCJkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IHdpZHRoOiA1MCU7XCI+XG4gICAgICAgICAgICAgICAgPG1hdC1vcHRpb24gKm5nRm9yPVwibGV0IHNlbGVjdCBvZiBmaWVsZC5zZWxlY3Rvci5kZWZhdWx0VmFsdWVcIiBbdmFsdWVdPVwic2VsZWN0LnZhbHVlXCI+XG4gICAgICAgICAgICAgICAgICAgIHt7c2VsZWN0LnZhbHVlfX08L21hdC1vcHRpb24+XG4gICAgICAgICAgICA8L21hdC1zZWxlY3Q+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2ICpuZ1N3aXRjaENhc2U9XCInY2hlY2tib3hfbXVsdGlwbGUnXCIgY2xhc3M9XCJmbGV4LWF1dG8gdy0zMFwiPlxuICAgICAgICAgICAgPGxhYmVsPnt7ZmllbGQubGFiZWx9fTwvbGFiZWw+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwib25ib2FyZGluZy1zZWxlY3RcIiBzdHlsZT1cIm1hcmdpbi10b3A6IDIwcHg7XCI+XG4gICAgICAgICAgICAgICAgPG1hdC1jaGVja2JveCBjbGFzcz1cImZvcm0tZmllbGRcIlxuICAgICAgICAgICAgICAgICAgICBzdHlsZT1cImRpc3BsYXk6IGJsb2NrOyBtYXJnaW4tYm90dG9tOiA1cHg7IG1hcmdpbi10b3A6IDEwcHg7bWFyZ2luLXJpZ2h0OiAxMHB4O1wiXG4gICAgICAgICAgICAgICAgICAgICpuZ0Zvcj1cImxldCBvcHQgb2YgZmllbGQuZGVmYXVsdFZhbHVlXCIgW2NoZWNrZWRdPVwib3B0LmNoZWNrZWRcIiBbKG5nTW9kZWwpXT1cIm9wdC5jaGVja2VkXCJcbiAgICAgICAgICAgICAgICAgICAgW3JlcXVpcmVkXT1cImZpZWxkLmlzTWFuZGF0b3J5XCIgW25nTW9kZWxPcHRpb25zXT1cIntzdGFuZGFsb25lOiB0cnVlfVwiPlxuICAgICAgICAgICAgICAgICAgICB7e29wdC52YWx1ZX19XG4gICAgICAgICAgICAgICAgPC9tYXQtY2hlY2tib3g+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgKm5nU3dpdGNoQ2FzZT1cIidyYWRpbydcIiBjbGFzcz1cImZsZXgtYXV0byB3LTMwIGZpZWxkLXNpemVcIj5cbiAgICAgICAgICAgIDxsYWJlbCBzdHlsZT1cImRpc3BsYXk6IGJsb2NrO1wiPiB7e2ZpZWxkLmxhYmVsfX0gPC9sYWJlbD5cbiAgICAgICAgICAgIDxtYXQtcmFkaW8tZ3JvdXAgY2xhc3M9XCJmb3JtLWZpZWxkIHJhZGlvLWdyb3VwIGZpZWxkLXNpemVcIiBbKG5nTW9kZWwpXT1cImZpZWxkLnZhbHVlXCJcbiAgICAgICAgICAgICAgICBbcmVxdWlyZWRdPVwiZmllbGQuaXNNYW5kYXRvcnlcIiBhcmlhLWxhYmVsPVwiU2VsZWN0IGFuIG9wdGlvblwiPlxuICAgICAgICAgICAgICAgIDxtYXQtcmFkaW8tYnV0dG9uICpuZ0Zvcj1cImxldCBvcHQgb2YgZmllbGQuZGVmYXVsdFZhbHVlXCIgW3ZhbHVlXT1cIm9wdC52YWx1ZVwiPnt7b3B0LnZhbHVlfX1cbiAgICAgICAgICAgICAgICA8L21hdC1yYWRpby1idXR0b24+XG4gICAgICAgICAgICA8L21hdC1yYWRpby1ncm91cD5cbiAgICAgICAgICAgIDxtYXQtZm9ybS1maWVsZCAqbmdJZj1cIidhdXRyZSc9PT1mb3JtYXRPdGhlcihmaWVsZC52YWx1ZSlcIiBjbGFzcz1cImZvcm0tZmllbGQgZmllbGQtc2l6ZSBvdGhlci1vcHRpb25cIlxuICAgICAgICAgICAgICAgIGFwcGVhcmFuY2U9XCJvdXRsaW5lXCI+XG4gICAgICAgICAgICAgICAgPG1hdC1sYWJlbD57e2xvY2FsZT8uT1RIRVJfT1BUSU9OfX08L21hdC1sYWJlbD5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBbcmVxdWlyZWRdPVwiZmllbGQuaXNNYW5kYXRvcnlcIiBtYXRJbnB1dCBbbmdNb2RlbE9wdGlvbnNdPVwie3N0YW5kYWxvbmU6IHRydWV9XCJcbiAgICAgICAgICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJmaWVsZC5vdGhlclZhbHVlXCIgcGxhY2Vob2xkZXI9XCJcIj5cbiAgICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2ICpuZ1N3aXRjaENhc2U9XCInc2VsZWN0J1wiIGNsYXNzPVwiZmxleC1hdXRvIHctMzAgZmllbGQtc2l6ZVwiPlxuICAgICAgICAgICAgPG1hdC1mb3JtLWZpZWxkIGNsYXNzPVwiIG1hdC1zZWxlY3QgZmxleC1hdXRvIHctMzAgZmllbGQtc2l6ZVwiIGFwcGVhcmFuY2U9XCJvdXRsaW5lXCI+XG4gICAgICAgICAgICAgICAgPG1hdC1sYWJlbD4ge3tmaWVsZC5sYWJlbH19IDwvbWF0LWxhYmVsPlxuICAgICAgICAgICAgICAgIDxtYXQtc2VsZWN0IFsobmdNb2RlbCldPVwiZmllbGQudmFsdWVcIiBbbmdNb2RlbE9wdGlvbnNdPVwie3N0YW5kYWxvbmU6IHRydWV9XCJcbiAgICAgICAgICAgICAgICAgICAgW3JlcXVpcmVkXT1cImZpZWxkLmlzTWFuZGF0b3J5XCI+XG4gICAgICAgICAgICAgICAgICAgIDxtYXQtb3B0aW9uICpuZ0Zvcj1cImxldCBvcHQgb2YgZmllbGQuZGVmYXVsdFZhbHVlXCIgW3ZhbHVlXT1cIm9wdC52YWx1ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge3tvcHQudmFsdWV9fTwvbWF0LW9wdGlvbj5cbiAgICAgICAgICAgICAgICA8L21hdC1zZWxlY3Q+XG4gICAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxuICAgICAgICAgICAgPG1hdC1mb3JtLWZpZWxkICpuZ0lmPVwiJ2F1dHJlJz09PWZvcm1hdE90aGVyKGZpZWxkLnZhbHVlKVwiIGNsYXNzPVwiZm9ybS1maWVsZCBmaWVsZC1zaXplIG90aGVyLW9wdGlvblwiXG4gICAgICAgICAgICAgICAgYXBwZWFyYW5jZT1cIm91dGxpbmVcIj5cbiAgICAgICAgICAgICAgICA8bWF0LWxhYmVsPkF1dHJlIG9wdGlvbjwvbWF0LWxhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIFtyZXF1aXJlZF09XCJmaWVsZC5pc01hbmRhdG9yeVwiIG1hdElucHV0IFtuZ01vZGVsT3B0aW9uc109XCJ7c3RhbmRhbG9uZTogdHJ1ZX1cIlxuICAgICAgICAgICAgICAgICAgICBbKG5nTW9kZWwpXT1cImZpZWxkLm90aGVyVmFsdWVcIiBwbGFjZWhvbGRlcj1cIlwiPlxuICAgICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxtYXQtZm9ybS1maWVsZCAqbmdTd2l0Y2hDYXNlPVwiJ3RleHRhcmVhJ1wiIGNsYXNzPVwiZm9ybS1maWVsZCBmdWxsLXdpZHRoXCIgYXBwZWFyYW5jZT1cIm91dGxpbmVcIj5cbiAgICAgICAgICAgIDxtYXQtbGFiZWw+e3tmaWVsZC5sYWJlbH19PC9tYXQtbGFiZWw+XG4gICAgICAgICAgICA8dGV4dGFyZWEgdHlwZT1cInRleHRcIiByb3dzPVwiNVwiIG1hdElucHV0IFtyZXF1aXJlZF09XCJmaWVsZC5pc01hbmRhdG9yeVwiIFtuZ01vZGVsT3B0aW9uc109XCJ7c3RhbmRhbG9uZTogdHJ1ZX1cIlxuICAgICAgICAgICAgICAgIFsobmdNb2RlbCldPVwiZmllbGQudmFsdWVcIiBwbGFjZWhvbGRlcj1cIkRlc2NyaXB0aW9uLi4uXCI+PC90ZXh0YXJlYT5cbiAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cbiAgICAgICAgPGRpdiAqbmdTd2l0Y2hDYXNlPVwiJ3RlbCdcIiBjbGFzcz1cImZvcm0tZmllbGQgZnVsbC13aWR0aCB0ZWwtaW5wdXRcIj5cbiAgICAgICAgICAgIDxtYXQtbGFiZWwgY2xhc3M9XCJ0ZWwtbGFiZWxcIj57e2ZpZWxkLmxhYmVsfX08L21hdC1sYWJlbD5cbiAgICAgICAgICAgIDxuZ3gtaW50bC10ZWwtaW5wdXQgaWQ9XCJvbmJvYXJkaW5nLXBob25lLWlucHV0XCIgY2xhc3M9XCJwaG9uZS1pbnB1dC1wcm9maWxlXCIgW2Nzc0NsYXNzXT1cIidpbnB1dC1waG9uZSdcIlxuICAgICAgICAgICAgICAgIFtwcmVmZXJyZWRDb3VudHJpZXNdPVwicHJlZmVycmVkQ291bnRyaWVzXCIgW2VuYWJsZUF1dG9Db3VudHJ5U2VsZWN0XT1cImZhbHNlXCIgW2VuYWJsZVBsYWNlaG9sZGVyXT1cInRydWVcIlxuICAgICAgICAgICAgICAgIFtjdXN0b21QbGFjZWhvbGRlcl09XCInUGhvbmUnXCIgW3NlbGVjdEZpcnN0Q291bnRyeV09XCJmYWxzZVwiIFtzZWxlY3RlZENvdW50cnlJU09dPVwiZmxhZyhmaWVsZC52YWx1ZSlcIlxuICAgICAgICAgICAgICAgIFttYXhMZW5ndGhdPVwiMTVcIiBbaW5wdXRJZF09XCJmaWVsZC5rZXlcIiBbcGhvbmVWYWxpZGF0aW9uXT1cInRydWVcIiBbc2VwYXJhdGVEaWFsQ29kZV09XCJzZXBhcmF0ZURpYWxDb2RlXCJcbiAgICAgICAgICAgICAgICBbbnVtYmVyRm9ybWF0XT1cIlBob25lTnVtYmVyRm9ybWF0Lk5hdGlvbmFsXCIgbmFtZT1cInBob25lXCIgKGlucHV0KT1cImNoZWNrUGhvbmUoZmllbGQudmFsdWUpXCJcbiAgICAgICAgICAgICAgICBbbmdNb2RlbE9wdGlvbnNdPVwie3N0YW5kYWxvbmU6IHRydWV9XCIgWyhuZ01vZGVsKV09XCJmaWVsZC52YWx1ZVwiPlxuICAgICAgICAgICAgPC9uZ3gtaW50bC10ZWwtaW5wdXQ+XG4gICAgICAgICAgICA8bWF0LWVycm9yICpuZ0lmPVwiaW52YWxpZGVWYWx1ZVwiPnt7bG9jYWxlPy5JTlZBTElEX1BIT05FfX08L21hdC1lcnJvcj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxtYXQtZm9ybS1maWVsZCAqbmdTd2l0Y2hDYXNlPVwiJ25vbmUnXCIgY2xhc3M9XCJmb3JtLWZpZWxkIGZpZWxkLXNpemVcIiBhcHBlYXJhbmNlPVwib3V0bGluZVwiIHN0eWxlPVwib3BhY2l0eTowIDtcIj5cbiAgICAgICAgICAgIDxtYXQtbGFiZWw+PC9tYXQtbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXQgW3R5cGVdPVwiZmllbGQudHlwZVwiIGRpc2FibGVkPVwidHJ1ZVwiIG1hdElucHV0IC8+XG4gICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XG4gICAgICAgIDxtYXQtZm9ybS1maWVsZCAqbmdTd2l0Y2hEZWZhdWx0IGNsYXNzPVwiZm9ybS1maWVsZCBmaWVsZC1zaXplXCIgYXBwZWFyYW5jZT1cIm91dGxpbmVcIj5cbiAgICAgICAgICAgIDxtYXQtbGFiZWw+e3tmaWVsZC5sYWJlbH19PC9tYXQtbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXQgW3R5cGVdPVwiZmllbGQudHlwZVwiIFtyZXF1aXJlZF09XCJmaWVsZC5pc01hbmRhdG9yeVwiIG1hdElucHV0IFtuZ01vZGVsT3B0aW9uc109XCJ7c3RhbmRhbG9uZTogdHJ1ZX1cIlxuICAgICAgICAgICAgICAgIFsobmdNb2RlbCldPVwiZmllbGQudmFsdWVcIiBwbGFjZWhvbGRlcj1cIlwiPlxuICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxuICAgIDwvbmctY29udGFpbmVyPlxuICAgIDxkaXYgKm5nSWY9XCJmaWVsZC5rZXk9PT0nQWNjb3VudE5hbWUnXCIgY2xhc3M9XCJmbGV4LWF1dG8gdy0zMCBmaWVsZC1zaXplXCI+XG4gICAgICAgIDxtYXQtZm9ybS1maWVsZCBjbGFzcz1cIiBtYXQtc2VsZWN0IGZsZXgtYXV0byB3LTMwIGZpZWxkLXNpemVcIiBhcHBlYXJhbmNlPVwib3V0bGluZVwiPlxuICAgICAgICAgICAgPG1hdC1sYWJlbD4ge3tmaWVsZC5sYWJlbH19IDwvbWF0LWxhYmVsPlxuICAgICAgICAgICAgPG1hdC1zZWxlY3QgWyhuZ01vZGVsKV09XCJmaWVsZC52YWx1ZVwiIFtuZ01vZGVsT3B0aW9uc109XCJ7c3RhbmRhbG9uZTogdHJ1ZX1cIiBbcmVxdWlyZWRdPVwiZmllbGQuaXNNYW5kYXRvcnlcIj5cbiAgICAgICAgICAgICAgICA8bWF0LW9wdGlvbiAqbmdGb3I9XCJsZXQgb3B0IG9mIGZpZWxkLmRlZmF1bHRWYWx1ZVwiIFt2YWx1ZV09XCJvcHQuX2lkXCI+XG4gICAgICAgICAgICAgICAgICAgIHt7b3B0Lk5hbWV9fTwvbWF0LW9wdGlvbj5cbiAgICAgICAgICAgIDwvbWF0LXNlbGVjdD5cbiAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cblxuICAgIDwvZGl2PlxuPC9kaXY+XG48bmctY29udGVudCBzZWxlY3Q9XCIuY2hpbGRcIj48L25nLWNvbnRlbnQ+Il19