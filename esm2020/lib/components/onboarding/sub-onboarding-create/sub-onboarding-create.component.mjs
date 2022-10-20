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
import * as i11 from "@angular/material/datepicker";
const _c0 = function () { return { standalone: true }; };
const _c1 = function () { return { display: "inine-block" }; };
function SubOnboardingCreateComponent_ng_container_1_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r13 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 12)(1, "span");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "mat-slide-toggle", 13);
    i0.ɵɵlistener("ngModelChange", function SubOnboardingCreateComponent_ng_container_1_div_1_Template_mat_slide_toggle_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r13); const ctx_r12 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r12.field.defaultValue = $event); })("ngModelChange", function SubOnboardingCreateComponent_ng_container_1_div_1_Template_mat_slide_toggle_ngModelChange_3_listener() { i0.ɵɵrestoreView(_r13); const ctx_r14 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r14.change()); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r2.field.label);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", ctx_r2.field.defaultValue)("ngModelOptions", i0.ɵɵpureFunction0(4, _c0))("ngStyle", ctx_r2.field.selector && i0.ɵɵpureFunction0(5, _c1));
} }
function SubOnboardingCreateComponent_ng_container_1_div_2_mat_select_3_mat_option_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 19);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const select_r17 = ctx.$implicit;
    i0.ɵɵproperty("value", select_r17.value);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", select_r17.value, "");
} }
function SubOnboardingCreateComponent_ng_container_1_div_2_mat_select_3_Template(rf, ctx) { if (rf & 1) {
    const _r19 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-select", 17);
    i0.ɵɵlistener("ngModelChange", function SubOnboardingCreateComponent_ng_container_1_div_2_mat_select_3_Template_mat_select_ngModelChange_0_listener() { i0.ɵɵrestoreView(_r19); const ctx_r18 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r18.change()); })("ngModelChange", function SubOnboardingCreateComponent_ng_container_1_div_2_mat_select_3_Template_mat_select_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r19); const ctx_r20 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r20.field.selector.value = $event); });
    i0.ɵɵtemplate(1, SubOnboardingCreateComponent_ng_container_1_div_2_mat_select_3_mat_option_1_Template, 2, 2, "mat-option", 18);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r15 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("ngModel", ctx_r15.field.selector.value)("ngModelOptions", i0.ɵɵpureFunction0(3, _c0));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r15.field.selector.defaultValue);
} }
const _c2 = function () { return { "display": "inine-block" }; };
function SubOnboardingCreateComponent_ng_container_1_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r22 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 14)(1, "mat-checkbox", 15);
    i0.ɵɵlistener("ngModelChange", function SubOnboardingCreateComponent_ng_container_1_div_2_Template_mat_checkbox_ngModelChange_1_listener() { i0.ɵɵrestoreView(_r22); const ctx_r21 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r21.change()); })("ngModelChange", function SubOnboardingCreateComponent_ng_container_1_div_2_Template_mat_checkbox_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r22); const ctx_r23 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r23.field.value = $event); });
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, SubOnboardingCreateComponent_ng_container_1_div_2_mat_select_3_Template, 2, 4, "mat-select", 16);
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
    const _r27 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-checkbox", 22);
    i0.ɵɵlistener("ngModelChange", function SubOnboardingCreateComponent_ng_container_1_div_3_mat_checkbox_4_Template_mat_checkbox_ngModelChange_0_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r27); const opt_r25 = restoredCtx.$implicit; return i0.ɵɵresetView(opt_r25.checked = $event); })("ngModelChange", function SubOnboardingCreateComponent_ng_container_1_div_3_mat_checkbox_4_Template_mat_checkbox_ngModelChange_0_listener() { i0.ɵɵrestoreView(_r27); const ctx_r28 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r28.change()); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const opt_r25 = ctx.$implicit;
    const ctx_r24 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("checked", opt_r25.checked)("ngModel", opt_r25.checked)("required", ctx_r24.field.isMandatory)("ngModelOptions", i0.ɵɵpureFunction0(5, _c0));
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", opt_r25.value, " ");
} }
function SubOnboardingCreateComponent_ng_container_1_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 14)(1, "label");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 20);
    i0.ɵɵtemplate(4, SubOnboardingCreateComponent_ng_container_1_div_3_mat_checkbox_4_Template, 2, 6, "mat-checkbox", 21);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r4.field.label);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r4.field.defaultValue);
} }
function SubOnboardingCreateComponent_ng_container_1_div_4_mat_radio_button_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-radio-button", 19);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const opt_r31 = ctx.$implicit;
    i0.ɵɵproperty("value", opt_r31.value);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1("", opt_r31.value, " ");
} }
function SubOnboardingCreateComponent_ng_container_1_div_4_mat_form_field_5_Template(rf, ctx) { if (rf & 1) {
    const _r33 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-form-field", 27)(1, "mat-label");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "input", 28);
    i0.ɵɵlistener("ngModelChange", function SubOnboardingCreateComponent_ng_container_1_div_4_mat_form_field_5_Template_input_ngModelChange_3_listener() { i0.ɵɵrestoreView(_r33); const ctx_r32 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r32.change()); })("ngModelChange", function SubOnboardingCreateComponent_ng_container_1_div_4_mat_form_field_5_Template_input_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r33); const ctx_r34 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r34.field.otherValue = $event); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r30 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r30.locale == null ? null : ctx_r30.locale.OTHER_OPTION);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("required", ctx_r30.field.isMandatory)("ngModelOptions", i0.ɵɵpureFunction0(4, _c0))("ngModel", ctx_r30.field.otherValue);
} }
function SubOnboardingCreateComponent_ng_container_1_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r36 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 23)(1, "label", 24);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "mat-radio-group", 25);
    i0.ɵɵlistener("ngModelChange", function SubOnboardingCreateComponent_ng_container_1_div_4_Template_mat_radio_group_ngModelChange_3_listener() { i0.ɵɵrestoreView(_r36); const ctx_r35 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r35.change()); })("ngModelChange", function SubOnboardingCreateComponent_ng_container_1_div_4_Template_mat_radio_group_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r36); const ctx_r37 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r37.field.value = $event); });
    i0.ɵɵtemplate(4, SubOnboardingCreateComponent_ng_container_1_div_4_mat_radio_button_4_Template, 2, 2, "mat-radio-button", 18);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(5, SubOnboardingCreateComponent_ng_container_1_div_4_mat_form_field_5_Template, 4, 5, "mat-form-field", 26);
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
    i0.ɵɵelementStart(0, "mat-option", 19);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const opt_r40 = ctx.$implicit;
    i0.ɵɵproperty("value", opt_r40.value);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", opt_r40.value, "");
} }
function SubOnboardingCreateComponent_ng_container_1_div_5_mat_form_field_6_Template(rf, ctx) { if (rf & 1) {
    const _r42 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-form-field", 27)(1, "mat-label");
    i0.ɵɵtext(2, "Autre option");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "input", 28);
    i0.ɵɵlistener("ngModelChange", function SubOnboardingCreateComponent_ng_container_1_div_5_mat_form_field_6_Template_input_ngModelChange_3_listener() { i0.ɵɵrestoreView(_r42); const ctx_r41 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r41.change()); })("ngModelChange", function SubOnboardingCreateComponent_ng_container_1_div_5_mat_form_field_6_Template_input_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r42); const ctx_r43 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r43.field.otherValue = $event); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r39 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("required", ctx_r39.field.isMandatory)("ngModelOptions", i0.ɵɵpureFunction0(3, _c0))("ngModel", ctx_r39.field.otherValue);
} }
function SubOnboardingCreateComponent_ng_container_1_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r45 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 23)(1, "mat-form-field", 29)(2, "mat-label");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "mat-select", 30);
    i0.ɵɵlistener("ngModelChange", function SubOnboardingCreateComponent_ng_container_1_div_5_Template_mat_select_ngModelChange_4_listener($event) { i0.ɵɵrestoreView(_r45); const ctx_r44 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r44.field.value = $event); })("ngModelChange", function SubOnboardingCreateComponent_ng_container_1_div_5_Template_mat_select_ngModelChange_4_listener() { i0.ɵɵrestoreView(_r45); const ctx_r46 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r46.change()); });
    i0.ɵɵtemplate(5, SubOnboardingCreateComponent_ng_container_1_div_5_mat_option_5_Template, 2, 2, "mat-option", 18);
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(6, SubOnboardingCreateComponent_ng_container_1_div_5_mat_form_field_6_Template, 4, 4, "mat-form-field", 26);
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
    const _r48 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-form-field", 31)(1, "mat-label");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "textarea", 32);
    i0.ɵɵlistener("ngModelChange", function SubOnboardingCreateComponent_ng_container_1_mat_form_field_6_Template_textarea_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r48); const ctx_r47 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r47.field.value = $event); })("ngModelChange", function SubOnboardingCreateComponent_ng_container_1_mat_form_field_6_Template_textarea_ngModelChange_3_listener() { i0.ɵɵrestoreView(_r48); const ctx_r49 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r49.change()); });
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
    const ctx_r50 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r50.locale == null ? null : ctx_r50.locale.INVALID_PHONE);
} }
function SubOnboardingCreateComponent_ng_container_1_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r52 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 33)(1, "mat-label", 34);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "ngx-intl-tel-input", 35);
    i0.ɵɵlistener("input", function SubOnboardingCreateComponent_ng_container_1_div_7_Template_ngx_intl_tel_input_input_3_listener() { i0.ɵɵrestoreView(_r52); const ctx_r51 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r51.checkPhone(ctx_r51.field.value)); })("ngModelChange", function SubOnboardingCreateComponent_ng_container_1_div_7_Template_ngx_intl_tel_input_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r52); const ctx_r53 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r53.field.value = $event); })("ngModelChange", function SubOnboardingCreateComponent_ng_container_1_div_7_Template_ngx_intl_tel_input_ngModelChange_3_listener() { i0.ɵɵrestoreView(_r52); const ctx_r54 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r54.change()); });
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(4, SubOnboardingCreateComponent_ng_container_1_div_7_mat_error_4_Template, 2, 1, "mat-error", 36);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r8 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r8.field.label);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("required", ctx_r8.field.isMandatory)("cssClass", "input-phone")("preferredCountries", ctx_r8.preferredCountries)("enableAutoCountrySelect", false)("enablePlaceholder", true)("customPlaceholder", "Phone")("selectFirstCountry", false)("selectedCountryISO", ctx_r8.flag(ctx_r8.field.value))("maxLength", 15)("inputId", ctx_r8.field.key)("phoneValidation", true)("separateDialCode", ctx_r8.separateDialCode)("numberFormat", ctx_r8.PhoneNumberFormat.National)("ngModelOptions", i0.ɵɵpureFunction0(17, _c0))("ngModel", ctx_r8.field.value);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r8.invalideValue);
} }
function SubOnboardingCreateComponent_ng_container_1_mat_form_field_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-form-field", 37);
    i0.ɵɵelement(1, "mat-label")(2, "input", 38);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r9 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("type", ctx_r9.field.type);
} }
function SubOnboardingCreateComponent_ng_container_1_mat_form_field_9_Template(rf, ctx) { if (rf & 1) {
    const _r57 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-form-field", 39)(1, "mat-label");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "input", 40);
    i0.ɵɵlistener("ngModelChange", function SubOnboardingCreateComponent_ng_container_1_mat_form_field_9_Template_input_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r57); const ctx_r56 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r56.field.value = $event); })("ngModelChange", function SubOnboardingCreateComponent_ng_container_1_mat_form_field_9_Template_input_ngModelChange_3_listener() { i0.ɵɵrestoreView(_r57); const ctx_r58 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r58.change()); });
    i0.ɵɵelementEnd();
    i0.ɵɵelement(4, "mat-datepicker-toggle", 41)(5, "mat-datepicker", null, 42);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const _r55 = i0.ɵɵreference(6);
    const ctx_r10 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r10.field.label);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("matDatepicker", _r55)("ngModelOptions", i0.ɵɵpureFunction0(6, _c0))("required", ctx_r10.field.isMandatory)("ngModel", ctx_r10.field.value);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("for", _r55);
} }
function SubOnboardingCreateComponent_ng_container_1_mat_form_field_10_Template(rf, ctx) { if (rf & 1) {
    const _r60 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-form-field", 39)(1, "mat-label");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "input", 43);
    i0.ɵɵlistener("ngModelChange", function SubOnboardingCreateComponent_ng_container_1_mat_form_field_10_Template_input_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r60); const ctx_r59 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r59.field.value = $event); })("ngModelChange", function SubOnboardingCreateComponent_ng_container_1_mat_form_field_10_Template_input_ngModelChange_3_listener() { i0.ɵɵrestoreView(_r60); const ctx_r61 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r61.change()); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r11 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r11.field.label);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("type", ctx_r11.field.type)("required", ctx_r11.field.isMandatory)("ngModelOptions", i0.ɵɵpureFunction0(5, _c0))("ngModel", ctx_r11.field.value);
} }
function SubOnboardingCreateComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0, 3);
    i0.ɵɵtemplate(1, SubOnboardingCreateComponent_ng_container_1_div_1_Template, 4, 6, "div", 4);
    i0.ɵɵtemplate(2, SubOnboardingCreateComponent_ng_container_1_div_2_Template, 4, 10, "div", 5);
    i0.ɵɵtemplate(3, SubOnboardingCreateComponent_ng_container_1_div_3_Template, 5, 2, "div", 5);
    i0.ɵɵtemplate(4, SubOnboardingCreateComponent_ng_container_1_div_4_Template, 6, 5, "div", 6);
    i0.ɵɵtemplate(5, SubOnboardingCreateComponent_ng_container_1_div_5_Template, 7, 7, "div", 6);
    i0.ɵɵtemplate(6, SubOnboardingCreateComponent_ng_container_1_mat_form_field_6_Template, 4, 5, "mat-form-field", 7);
    i0.ɵɵtemplate(7, SubOnboardingCreateComponent_ng_container_1_div_7_Template, 5, 18, "div", 8);
    i0.ɵɵtemplate(8, SubOnboardingCreateComponent_ng_container_1_mat_form_field_8_Template, 3, 1, "mat-form-field", 9);
    i0.ɵɵtemplate(9, SubOnboardingCreateComponent_ng_container_1_mat_form_field_9_Template, 7, 7, "mat-form-field", 10);
    i0.ɵɵtemplate(10, SubOnboardingCreateComponent_ng_container_1_mat_form_field_10_Template, 4, 6, "mat-form-field", 11);
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
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", "date");
} }
function SubOnboardingCreateComponent_div_2_mat_option_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 19);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const opt_r63 = ctx.$implicit;
    i0.ɵɵproperty("value", opt_r63._id);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", opt_r63.Name, "");
} }
function SubOnboardingCreateComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r65 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 23)(1, "mat-form-field", 29)(2, "mat-label");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "mat-select", 30);
    i0.ɵɵlistener("ngModelChange", function SubOnboardingCreateComponent_div_2_Template_mat_select_ngModelChange_4_listener($event) { i0.ɵɵrestoreView(_r65); const ctx_r64 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r64.field.value = $event); })("ngModelChange", function SubOnboardingCreateComponent_div_2_Template_mat_select_ngModelChange_4_listener() { i0.ɵɵrestoreView(_r65); const ctx_r66 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r66.change()); });
    i0.ɵɵtemplate(5, SubOnboardingCreateComponent_div_2_mat_option_5_Template, 2, 2, "mat-option", 18);
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
        this.onChange = new EventEmitter();
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
    change() {
        this.onChange.emit(true);
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
SubOnboardingCreateComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SubOnboardingCreateComponent, selectors: [["lib-sub-create-onboarding"]], inputs: { field: "field", length: "length", locale: "locale", i: "i", j: "j" }, outputs: { onAddKeywordFromInput: "onAddKeywordFromInput", onKeyPress: "onKeyPress", onDrop: "onDrop", onAddNewField: "onAddNewField", onChange: "onChange", onRemoveField: "onRemoveField", onChangeType: "onChangeType", onRemoveKeyword: "onRemoveKeyword", onAddNewSubLevelField: "onAddNewSubLevelField", onExpendMore: "onExpendMore", onChangeLabel: "onChangeLabel", onCheckedChip: "onCheckedChip", onCheckValue: "onCheckValue" }, ngContentSelectors: _c4, decls: 4, vars: 2, consts: [[1, "field-item"], [3, "ngSwitch", 4, "ngIf"], ["class", "flex-auto w-30 field-size", 4, "ngIf"], [3, "ngSwitch"], ["class", "flex-auto field-size toggle-button", 4, "ngSwitchCase"], ["class", "flex-auto w-30", 4, "ngSwitchCase"], ["class", "flex-auto w-30 field-size", 4, "ngSwitchCase"], ["class", "form-field full-width", "appearance", "outline", 4, "ngSwitchCase"], ["class", "form-field full-width tel-input", 4, "ngSwitchCase"], ["class", "form-field field-size", "appearance", "outline", "style", "opacity:0 ;", 4, "ngSwitchCase"], ["class", "form-field field-size", "appearance", "outline", 4, "ngSwitchCase"], ["class", "form-field field-size", "appearance", "outline", 4, "ngSwitchDefault"], [1, "flex-auto", "field-size", "toggle-button"], [1, "form-field", 3, "ngModel", "ngModelOptions", "ngStyle", "ngModelChange"], [1, "flex-auto", "w-30"], [1, "form-field", 2, "margin-right", "10px", 3, "ngModel", "required", "ngModelOptions", "ngStyle", "ngModelChange"], ["placeholder", "Company", "required", "", "style", "display: inline-block; width: 50%;", 3, "ngModel", "ngModelOptions", "ngModelChange", 4, "ngIf"], ["placeholder", "Company", "required", "", 2, "display", "inline-block", "width", "50%", 3, "ngModel", "ngModelOptions", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], [1, "onboarding-select", 2, "margin-top", "20px"], ["class", "form-field", "style", "display: block; margin-bottom: 5px; margin-top: 10px;margin-right: 10px;", 3, "checked", "ngModel", "required", "ngModelOptions", "ngModelChange", 4, "ngFor", "ngForOf"], [1, "form-field", 2, "display", "block", "margin-bottom", "5px", "margin-top", "10px", "margin-right", "10px", 3, "checked", "ngModel", "required", "ngModelOptions", "ngModelChange"], [1, "flex-auto", "w-30", "field-size"], [2, "display", "block"], ["aria-label", "Select an option", 1, "form-field", "radio-group", "field-size", 3, "ngModel", "required", "ngModelChange"], ["class", "form-field field-size other-option", "appearance", "outline", 4, "ngIf"], ["appearance", "outline", 1, "form-field", "field-size", "other-option"], ["type", "text", "matInput", "", "placeholder", "", 3, "required", "ngModelOptions", "ngModel", "ngModelChange"], ["appearance", "outline", 1, "mat-select", "flex-auto", "w-30", "field-size"], [3, "ngModel", "ngModelOptions", "required", "ngModelChange"], ["appearance", "outline", 1, "form-field", "full-width"], ["type", "text", "rows", "5", "matInput", "", "placeholder", "Description...", 3, "required", "ngModelOptions", "ngModel", "ngModelChange"], [1, "form-field", "full-width", "tel-input"], [1, "tel-label"], ["id", "onboarding-phone-input", "name", "phone", 1, "phone-input-profile", 3, "required", "cssClass", "preferredCountries", "enableAutoCountrySelect", "enablePlaceholder", "customPlaceholder", "selectFirstCountry", "selectedCountryISO", "maxLength", "inputId", "phoneValidation", "separateDialCode", "numberFormat", "ngModelOptions", "ngModel", "input", "ngModelChange"], [4, "ngIf"], ["appearance", "outline", 1, "form-field", "field-size", 2, "opacity", "0"], ["disabled", "true", "matInput", "", 3, "type"], ["appearance", "outline", 1, "form-field", "field-size"], ["matInput", "", 3, "matDatepicker", "ngModelOptions", "required", "ngModel", "ngModelChange"], ["matSuffix", "", 3, "for"], ["picker", ""], ["matInput", "", "placeholder", "", 3, "type", "required", "ngModelOptions", "ngModel", "ngModelChange"]], template: function SubOnboardingCreateComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef(_c3);
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵtemplate(1, SubOnboardingCreateComponent_ng_container_1_Template, 11, 10, "ng-container", 1);
        i0.ɵɵtemplate(2, SubOnboardingCreateComponent_div_2_Template, 6, 6, "div", 2);
        i0.ɵɵelementEnd();
        i0.ɵɵprojection(3);
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.field.key !== "AccountName");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.field.key === "AccountName");
    } }, dependencies: [i1.DefaultValueAccessor, i1.NgControlStatus, i1.RequiredValidator, i1.NgModel, i2.MatError, i2.MatFormField, i2.MatLabel, i2.MatSuffix, i3.NgForOf, i3.NgIf, i3.NgStyle, i3.NgSwitch, i3.NgSwitchCase, i3.NgSwitchDefault, i4.MatCheckbox, i4.MatCheckboxRequiredValidator, i5.MatSelect, i6.MatOption, i7.MatInput, i8.MatRadioGroup, i8.MatRadioButton, i9.NgxIntlTelInputComponent, i9.NativeElementInjectorDirective, i10.MatSlideToggle, i11.MatDatepicker, i11.MatDatepickerInput, i11.MatDatepickerToggle], styles: [".container[_ngcontent-%COMP%]{max-width:98%;margin:50px auto auto;padding-bottom:50px}.container[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:space-between}.input-category-name[_ngcontent-%COMP%]{font-size:15px;font-weight:500}.full-width[_ngcontent-%COMP%]{width:100%}.field-item[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;width:100%;flex-wrap:wrap;position:relative}.field-item[_ngcontent-%COMP%]   .button-action[_ngcontent-%COMP%]{background-color:#6fe8d7;height:100%;margin:auto 15px auto auto;display:flex}.field-item[_ngcontent-%COMP%]   .button-action[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{box-shadow:none;background-color:transparent;color:#fff}.field-action[_ngcontent-%COMP%]{width:10%}.field-size[_ngcontent-%COMP%]   mat-checkbox[_ngcontent-%COMP%]{margin:20px}hr[_ngcontent-%COMP%]{margin:50px 0}  .mat-form-field-appearance-fill .mat-form-field-flex{background-color:#fff}.category-action[_ngcontent-%COMP%]{display:flex;width:100%}.delete-field[_ngcontent-%COMP%]{margin:auto 2%}.radio-group[_ngcontent-%COMP%]   .mat-radio-button[_ngcontent-%COMP%]{margin-right:10px}.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary[_ngcontent-%COMP%]{background-color:#3f51b5;color:#fff;min-height:20px;font-size:10px}.move-icons[_ngcontent-%COMP%]{cursor:move}.category-item[_ngcontent-%COMP%]{display:flex;align-items:baseline;width:100%;border:1px solid #dce4e9;border-radius:8px}  .readonly.mat-form-field-appearance-outline .mat-form-field-outline{color:transparent!important}.field-content[_ngcontent-%COMP%]{width:100%}.cdk-drag-preview[_ngcontent-%COMP%]{box-sizing:border-box;border-radius:4px;box-shadow:0 5px 5px -3px #0003,0 8px 10px 1px #00000024,0 3px 14px 2px #0000001f}.cdk-drag-placeholder[_ngcontent-%COMP%]{opacity:0}.cdk-drag-animating[_ngcontent-%COMP%]{transition:transform .25s cubic-bezier(0,0,.2,1)}.example-list.cdk-drop-list-dragging[_ngcontent-%COMP%]   .category-item[_ngcontent-%COMP%]:not(.cdk-drag-placeholder){transition:transform .25s cubic-bezier(0,0,.2,1)}.add-button-container[_ngcontent-%COMP%]{background:#ffffff 0% 0% no-repeat padding-box;border:1px dashed #dce4e9;border-radius:8px;margin-top:10px;padding:10px;display:flex;justify-content:center;align-items:center;width:98%;margin-left:0;margin-bottom:22px}.add-button-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{display:flex;align-items:center;background-color:transparent;border:none;cursor:pointer;letter-spacing:0px;color:#c2c8d5;box-shadow:none}.expand-button[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%]{font-size:48px;margin-top:-20px;margin-right:15px}.transparent-button[_ngcontent-%COMP%]{background-color:transparent!important;box-shadow:none!important;width:40px!important;padding:0!important;margin:0!important;min-width:auto!important}.expand-button[_ngcontent-%COMP%]{color:#5a607f!important;background-color:transparent!important;box-shadow:none!important}.checkbox-title-active[_ngcontent-%COMP%]{font-weight:700}.other-option[_ngcontent-%COMP%]{margin-left:10px}.flex-auto[_ngcontent-%COMP%]{width:100%}  .country-dropdown{min-width:unset!important}  .tel-input{position:relative}  .tel-input .tel-label{font-size:12px;color:#0009;position:absolute;z-index:1;background-color:#fff;padding:0 2px;left:8px;top:-3px}  .phone-input-profile{padding-bottom:0;padding-top:0;display:block!important;max-width:100%;width:100%}  .phone-input-profile .iti{width:100%!important}  .phone-input-profile .iti input[type=tel]{margin-top:4px}  .phone-input-profile input{outline:none;padding:17px;border-radius:5px;border-color:#0000001f;border-width:1px;width:100%;border:1px solid rgba(0,0,0,.12)}.toggle-button[_ngcontent-%COMP%]{padding-top:15px;display:flex;align-items:center}.toggle-button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin-right:10px}.onboarding-select[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(6,1fr)}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SubOnboardingCreateComponent, [{
        type: Component,
        args: [{ selector: 'lib-sub-create-onboarding', template: "<div class=\"field-item\">\r\n    <ng-container *ngIf=\"field.key!=='AccountName'\" [ngSwitch]=\"field.type\">\r\n        <div *ngSwitchCase=\"'toggle'\" class=\"flex-auto field-size toggle-button\">\r\n            <span>{{ field.label }}</span>\r\n            <mat-slide-toggle class=\"form-field\" [(ngModel)]=\"field.defaultValue\" (ngModelChange)=\"change()\"\r\n                [ngModelOptions]=\"{ standalone: true }\" [ngStyle]=\"field.selector && { display: 'inine-block' }\">\r\n            </mat-slide-toggle>\r\n        </div>\r\n        <div *ngSwitchCase=\"'checkbox'\" class=\"flex-auto w-30\">\r\n            <mat-checkbox class=\"form-field\" style=\"margin-right: 10px;\" (ngModelChange)=\"change()\"\r\n                [class]=\"checkSubForm(field) ? 'checkbox-title-active':''\" [(ngModel)]=\"field.value\"\r\n                [required]=\"field.isMandatory\" [ngModelOptions]=\"{standalone: true}\"\r\n                [ngStyle]=\"field.selector && {'display': 'inine-block'}\">\r\n                {{field.label}}\r\n            </mat-checkbox>\r\n\r\n\r\n            <mat-select placeholder=\"Company\" (ngModelChange)=\"change()\" [(ngModel)]=\"field.selector.value\"\r\n                [ngModelOptions]=\"{standalone: true}\" required *ngIf=\"field.selector\"\r\n                style=\"display: inline-block; width: 50%;\">\r\n                <mat-option *ngFor=\"let select of field.selector.defaultValue\" [value]=\"select.value\">\r\n                    {{select.value}}</mat-option>\r\n            </mat-select>\r\n        </div>\r\n        <div *ngSwitchCase=\"'checkbox_multiple'\" class=\"flex-auto w-30\">\r\n            <label>{{field.label}}</label>\r\n            <div class=\"onboarding-select\" style=\"margin-top: 20px;\">\r\n                <mat-checkbox class=\"form-field\"\r\n                    style=\"display: block; margin-bottom: 5px; margin-top: 10px;margin-right: 10px;\"\r\n                    *ngFor=\"let opt of field.defaultValue\" [checked]=\"opt.checked\" [(ngModel)]=\"opt.checked\"\r\n                    [required]=\"field.isMandatory\" (ngModelChange)=\"change()\" [ngModelOptions]=\"{standalone: true}\">\r\n                    {{opt.value}}\r\n                </mat-checkbox>\r\n            </div>\r\n        </div>\r\n        <div *ngSwitchCase=\"'radio'\" class=\"flex-auto w-30 field-size\">\r\n            <label style=\"display: block;\"> {{field.label}} </label>\r\n            <mat-radio-group class=\"form-field radio-group field-size\" (ngModelChange)=\"change()\"\r\n                [(ngModel)]=\"field.value\" [required]=\"field.isMandatory\" aria-label=\"Select an option\">\r\n                <mat-radio-button *ngFor=\"let opt of field.defaultValue\" [value]=\"opt.value\">{{opt.value}}\r\n                </mat-radio-button>\r\n            </mat-radio-group>\r\n            <mat-form-field *ngIf=\"'autre'===formatOther(field.value)\" class=\"form-field field-size other-option\"\r\n                appearance=\"outline\">\r\n                <mat-label>{{locale?.OTHER_OPTION}}</mat-label>\r\n                <input type=\"text\" [required]=\"field.isMandatory\" matInput (ngModelChange)=\"change()\"\r\n                    [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"field.otherValue\" placeholder=\"\">\r\n            </mat-form-field>\r\n        </div>\r\n        <div *ngSwitchCase=\"'select'\" class=\"flex-auto w-30 field-size\">\r\n            <mat-form-field class=\" mat-select flex-auto w-30 field-size\" appearance=\"outline\">\r\n                <mat-label> {{field.label}} </mat-label>\r\n                <mat-select [(ngModel)]=\"field.value\" (ngModelChange)=\"change()\" [ngModelOptions]=\"{standalone: true}\"\r\n                    [required]=\"field.isMandatory\">\r\n                    <mat-option *ngFor=\"let opt of field.defaultValue\" [value]=\"opt.value\">\r\n                        {{opt.value}}</mat-option>\r\n                </mat-select>\r\n            </mat-form-field>\r\n            <mat-form-field *ngIf=\"'autre'===formatOther(field.value)\" class=\"form-field field-size other-option\"\r\n                appearance=\"outline\">\r\n                <mat-label>Autre option</mat-label>\r\n                <input type=\"text\" [required]=\"field.isMandatory\" (ngModelChange)=\"change()\" matInput\r\n                    [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"field.otherValue\" placeholder=\"\">\r\n            </mat-form-field>\r\n        </div>\r\n        <mat-form-field *ngSwitchCase=\"'textarea'\" class=\"form-field full-width\" appearance=\"outline\">\r\n            <mat-label>{{field.label}}</mat-label>\r\n            <textarea type=\"text\" rows=\"5\" matInput [required]=\"field.isMandatory\" [ngModelOptions]=\"{standalone: true}\"\r\n                [(ngModel)]=\"field.value\" (ngModelChange)=\"change()\" placeholder=\"Description...\"></textarea>\r\n        </mat-form-field>\r\n        <div *ngSwitchCase=\"'tel'\" class=\"form-field full-width tel-input\">\r\n            <mat-label class=\"tel-label\">{{field.label}}</mat-label>\r\n            <ngx-intl-tel-input [required]=\"field.isMandatory\" id=\"onboarding-phone-input\" class=\"phone-input-profile\"\r\n                [cssClass]=\"'input-phone'\" [preferredCountries]=\"preferredCountries\" [enableAutoCountrySelect]=\"false\"\r\n                [enablePlaceholder]=\"true\" [customPlaceholder]=\"'Phone'\" [selectFirstCountry]=\"false\"\r\n                [selectedCountryISO]=\"flag(field.value)\" [maxLength]=\"15\" [inputId]=\"field.key\" [phoneValidation]=\"true\"\r\n                [separateDialCode]=\"separateDialCode\" [numberFormat]=\"PhoneNumberFormat.National\" name=\"phone\"\r\n                (input)=\"checkPhone(field.value)\" [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"field.value\"\r\n                (ngModelChange)=\"change()\">\r\n            </ngx-intl-tel-input>\r\n            <mat-error *ngIf=\"invalideValue\">{{locale?.INVALID_PHONE}}</mat-error>\r\n        </div>\r\n        <mat-form-field *ngSwitchCase=\"'none'\" class=\"form-field field-size\" appearance=\"outline\" style=\"opacity:0 ;\">\r\n            <mat-label></mat-label>\r\n            <input [type]=\"field.type\" disabled=\"true\" matInput />\r\n        </mat-form-field>\r\n        <mat-form-field *ngSwitchCase=\"'date'\" class=\"form-field field-size\" appearance=\"outline\">\r\n            <mat-label>{{field.label}}</mat-label>\r\n            <input matInput [matDatepicker]=\"picker\" [ngModelOptions]=\"{ standalone: true }\"\r\n                [required]=\"field.isMandatory\" [(ngModel)]=\"field.value\" (ngModelChange)=\"change()\">\r\n            <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n            <mat-datepicker #picker></mat-datepicker>\r\n        </mat-form-field>\r\n        <mat-form-field *ngSwitchDefault class=\"form-field field-size\" appearance=\"outline\">\r\n            <mat-label>{{field.label}}</mat-label>\r\n            <input [type]=\"field.type\" [required]=\"field.isMandatory\" matInput [ngModelOptions]=\"{standalone: true}\"\r\n                [(ngModel)]=\"field.value\" (ngModelChange)=\"change()\" placeholder=\"\">\r\n        </mat-form-field>\r\n    </ng-container>\r\n    <div *ngIf=\"field.key==='AccountName'\" class=\"flex-auto w-30 field-size\">\r\n        <mat-form-field class=\" mat-select flex-auto w-30 field-size\" appearance=\"outline\">\r\n            <mat-label> {{field.label}} </mat-label>\r\n            <mat-select [(ngModel)]=\"field.value\" (ngModelChange)=\"change()\" [ngModelOptions]=\"{standalone: true}\"\r\n                [required]=\"field.isMandatory\">\r\n                <mat-option *ngFor=\"let opt of field.defaultValue\" [value]=\"opt._id\">\r\n                    {{opt.Name}}</mat-option>\r\n            </mat-select>\r\n        </mat-form-field>\r\n\r\n    </div>\r\n</div>\r\n<ng-content select=\".child\"></ng-content>", styles: [".container{max-width:98%;margin:50px auto auto;padding-bottom:50px}.container .action{width:100%;display:flex;justify-content:space-between}.input-category-name{font-size:15px;font-weight:500}.full-width{width:100%}.field-item{display:flex;justify-content:space-between;align-items:center;width:100%;flex-wrap:wrap;position:relative}.field-item .button-action{background-color:#6fe8d7;height:100%;margin:auto 15px auto auto;display:flex}.field-item .button-action button{box-shadow:none;background-color:transparent;color:#fff}.field-action{width:10%}.field-size mat-checkbox{margin:20px}hr{margin:50px 0}::ng-deep .mat-form-field-appearance-fill .mat-form-field-flex{background-color:#fff}.category-action{display:flex;width:100%}.delete-field{margin:auto 2%}.radio-group .mat-radio-button{margin-right:10px}.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary{background-color:#3f51b5;color:#fff;min-height:20px;font-size:10px}.move-icons{cursor:move}.category-item{display:flex;align-items:baseline;width:100%;border:1px solid #dce4e9;border-radius:8px}::ng-deep .readonly.mat-form-field-appearance-outline .mat-form-field-outline{color:transparent!important}.field-content{width:100%}.cdk-drag-preview{box-sizing:border-box;border-radius:4px;box-shadow:0 5px 5px -3px #0003,0 8px 10px 1px #00000024,0 3px 14px 2px #0000001f}.cdk-drag-placeholder{opacity:0}.cdk-drag-animating{transition:transform .25s cubic-bezier(0,0,.2,1)}.example-list.cdk-drop-list-dragging .category-item:not(.cdk-drag-placeholder){transition:transform .25s cubic-bezier(0,0,.2,1)}.add-button-container{background:#ffffff 0% 0% no-repeat padding-box;border:1px dashed #dce4e9;border-radius:8px;margin-top:10px;padding:10px;display:flex;justify-content:center;align-items:center;width:98%;margin-left:0;margin-bottom:22px}.add-button-container button{display:flex;align-items:center;background-color:transparent;border:none;cursor:pointer;letter-spacing:0px;color:#c2c8d5;box-shadow:none}.expand-button .material-icons{font-size:48px;margin-top:-20px;margin-right:15px}.transparent-button{background-color:transparent!important;box-shadow:none!important;width:40px!important;padding:0!important;margin:0!important;min-width:auto!important}.expand-button{color:#5a607f!important;background-color:transparent!important;box-shadow:none!important}.checkbox-title-active{font-weight:700}.other-option{margin-left:10px}.flex-auto{width:100%}::ng-deep .country-dropdown{min-width:unset!important}::ng-deep .tel-input{position:relative}::ng-deep .tel-input .tel-label{font-size:12px;color:#0009;position:absolute;z-index:1;background-color:#fff;padding:0 2px;left:8px;top:-3px}::ng-deep .phone-input-profile{padding-bottom:0;padding-top:0;display:block!important;max-width:100%;width:100%}::ng-deep .phone-input-profile .iti{width:100%!important}::ng-deep .phone-input-profile .iti input[type=tel]{margin-top:4px}::ng-deep .phone-input-profile input{outline:none;padding:17px;border-radius:5px;border-color:#0000001f;border-width:1px;width:100%;border:1px solid rgba(0,0,0,.12)}.toggle-button{padding-top:15px;display:flex;align-items:center}.toggle-button span{margin-right:10px}.onboarding-select{display:grid;grid-template-columns:repeat(6,1fr)}\n"] }]
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
        }], onChange: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3ViLW9uYm9hcmRpbmctY3JlYXRlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL29uYm9hcmRpbmcvc3JjL2xpYi9jb21wb25lbnRzL29uYm9hcmRpbmcvc3ViLW9uYm9hcmRpbmctY3JlYXRlL3N1Yi1vbmJvYXJkaW5nLWNyZWF0ZS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9vbmJvYXJkaW5nL3NyYy9saWIvY29tcG9uZW50cy9vbmJvYXJkaW5nL3N1Yi1vbmJvYXJkaW5nLWNyZWF0ZS9zdWItb25ib2FyZGluZy1jcmVhdGUuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDaEUsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvRSxPQUFPLEVBQUUsVUFBVSxFQUFFLGlCQUFpQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDbkUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLGdCQUFnQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFHekUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDSjVDLCtCQUF5RSxXQUFBO0lBQy9ELFlBQWlCO0lBQUEsaUJBQU87SUFDOUIsNENBQ3FHO0lBRGhFLDJOQUFhLG1EQUEwQixJQUFQLHdNQUFrQixlQUFBLGdCQUFRLENBQUEsSUFBMUI7SUFFckUsaUJBQW1CLEVBQUE7OztJQUhiLGVBQWlCO0lBQWpCLHdDQUFpQjtJQUNjLGVBQWdDO0lBQWhDLG1EQUFnQyw4Q0FBQSxnRUFBQTs7O0lBZ0JqRSxzQ0FBc0Y7SUFDbEYsWUFBZ0I7SUFBQSxpQkFB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QUFhO2tCQUF0QixNQUFNO1lBQ0csUUFBUTtrQkFBakIsTUFBTTtZQUNHLGFBQWE7a0JBQXRCLE1BQU07WUFDRyxZQUFZO2tCQUFyQixNQUFNO1lBQ0csZUFBZTtrQkFBeEIsTUFBTTtZQUNHLHFCQUFxQjtrQkFBOUIsTUFBTTtZQUNHLFlBQVk7a0JBQXJCLE1BQU07WUFDRyxhQUFhO2tCQUF0QixNQUFNO1lBQ0csYUFBYTtrQkFBdEIsTUFBTTtZQUNHLFlBQVk7a0JBQXJCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDT01NQSwgRU5URVIsIFNFTUlDT0xPTiB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9rZXljb2Rlcyc7XHJcbmltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ291bnRyeUlTTywgUGhvbmVOdW1iZXJGb3JtYXQgfSBmcm9tICduZ3gtaW50bC10ZWwtaW5wdXQnO1xyXG5pbXBvcnQgeyBpc1ZhbGlkUGhvbmVOdW1iZXIsIHBhcnNlUGhvbmVOdW1iZXIgfSBmcm9tICdsaWJwaG9uZW51bWJlci1qcyc7XHJcblxyXG5pbXBvcnQgeyBPbmJvYXJkaW5nU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL29uYm9hcmRpbmcuc2VydmljZSc7XHJcbmltcG9ydCB7IFVudHlwZWRGb3JtQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbGliLXN1Yi1jcmVhdGUtb25ib2FyZGluZycsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3N1Yi1vbmJvYXJkaW5nLWNyZWF0ZS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vc3ViLW9uYm9hcmRpbmctY3JlYXRlLmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIFN1Yk9uYm9hcmRpbmdDcmVhdGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBJbnB1dCgpIGZpZWxkOiBhbnlcclxuICBASW5wdXQoKSBsZW5ndGg6IGFueVxyXG4gIEBJbnB1dCgpIGxvY2FsZTogYW55XHJcblxyXG4gIEBJbnB1dCgpIGk6IGFueVxyXG4gIEBJbnB1dCgpIGo6IGFueVxyXG4gIEBPdXRwdXQoKSBvbkFkZEtleXdvcmRGcm9tSW5wdXQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKVxyXG4gIEBPdXRwdXQoKSBvbktleVByZXNzID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KClcclxuICBAT3V0cHV0KCkgb25Ecm9wID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KClcclxuICBAT3V0cHV0KCkgb25BZGROZXdGaWVsZCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpXHJcbiAgQE91dHB1dCgpIG9uQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KClcclxuICBAT3V0cHV0KCkgb25SZW1vdmVGaWVsZCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpXHJcbiAgQE91dHB1dCgpIG9uQ2hhbmdlVHlwZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpXHJcbiAgQE91dHB1dCgpIG9uUmVtb3ZlS2V5d29yZCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpXHJcbiAgQE91dHB1dCgpIG9uQWRkTmV3U3ViTGV2ZWxGaWVsZCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpXHJcbiAgQE91dHB1dCgpIG9uRXhwZW5kTW9yZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpXHJcbiAgQE91dHB1dCgpIG9uQ2hhbmdlTGFiZWwgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKVxyXG4gIEBPdXRwdXQoKSBvbkNoZWNrZWRDaGlwID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KClcclxuICBAT3V0cHV0KCkgb25DaGVja1ZhbHVlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KClcclxuXHJcbiAgY2hpcENvbnRyb2wgPSBuZXcgVW50eXBlZEZvcm1Db250cm9sKG5ldyBTZXQoKSk7XHJcbiAgcHJlZmVycmVkQ291bnRyaWVzOiBDb3VudHJ5SVNPW10gPSBbQ291bnRyeUlTTy5Vbml0ZWRTdGF0ZXMsIENvdW50cnlJU08uRnJhbmNlXTtcclxuICBQaG9uZU51bWJlckZvcm1hdCA9IFBob25lTnVtYmVyRm9ybWF0O1xyXG4gIHNlcGFyYXRvcktleXNDb2RlcyA9IFtFTlRFUiwgQ09NTUEsIFNFTUlDT0xPTl07XHJcbiAgaW52YWxpZGVWYWx1ZSA9IGZhbHNlO1xyXG4gIGN1cnJlbnRDaGlwID0gXCJcIlxyXG4gIHNlcGFyYXRlRGlhbENvZGUgPSBmYWxzZTtcclxuICBhY2NvdW50cyA9IFtdXHJcbiAgcHJldlZhbHVlID0gXCJcIlxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgbmdPbkluaXQoKSB7XHJcblxyXG4gIH1cclxuXHJcbiAgZHJvcChldmVudCkge1xyXG4gICAgdGhpcy5vbkRyb3AuZW1pdChldmVudClcclxuICB9XHJcblxyXG4gIGFkZEtleXdvcmRGcm9tSW5wdXQoZXZlbnQsIGksIGopIHtcclxuICAgIHRoaXMub25BZGRLZXl3b3JkRnJvbUlucHV0LmVtaXQoeyBldmVudCwgcHJldjogdGhpcy5wcmV2VmFsdWUsIGksIGogfSk7XHJcbiAgfVxyXG5cclxuICBrZXlVcChldmVudCwgaSwgaikge1xyXG4gICAgdGhpcy5vbktleVByZXNzLmVtaXQoeyBldmVudCwgaSwgaiB9KVxyXG4gIH1cclxuXHJcbiAgYWRkTmV3RmllbGQoZXZlbnQsIGkpIHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcclxuICAgIHRoaXMub25BZGROZXdGaWVsZC5lbWl0KHsgZXZlbnQsIGkgfSlcclxuICB9XHJcblxyXG4gIHJlbW92ZUZpZWxkKGV2ZW50LCBpLCBqKSB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICB0aGlzLm9uUmVtb3ZlRmllbGQuZW1pdCh7IGksIGogfSlcclxuICB9XHJcblxyXG4gIGNoYW5nZVR5cGUodHlwZSwgaSwgaikge1xyXG4gICAgdGhpcy5vbkNoYW5nZVR5cGUuZW1pdCh7IHR5cGUsIGksIGogfSlcclxuICB9XHJcblxyXG4gIHJlbW92ZUtleXdvcmQoZXZlbnQsIGksIGopIHtcclxuICAgIHRoaXMub25SZW1vdmVLZXl3b3JkLmVtaXQoeyBldmVudCwgaSwgaiB9KVxyXG4gIH1cclxuICBhZGROZXdTdWJMZXZlbEZpZWxkKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgdGhpcy5vbkFkZE5ld1N1YkxldmVsRmllbGQuZW1pdCh0cnVlKVxyXG4gIH1cclxuICBleHBlbmRNb3JlKGUsIGZpZWxkKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgIHRoaXMub25FeHBlbmRNb3JlLmVtaXQoeyBleHBhbmQ6IHRydWUsIGZpZWxkIH0pXHJcbiAgfVxyXG5cclxuICBpbmdvcmVEZWZhdWx0QWN0aW9uKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gIH1cclxuXHJcbiAgY2hhbmdlTGFiZWwobGFiZWwsIGtleSkge1xyXG4gICAgdGhpcy5vbkNoYW5nZUxhYmVsLmVtaXQoeyBsYWJlbCwga2V5IH0pXHJcbiAgfVxyXG5cclxuICBjaGFuZ2UoKSB7XHJcbiAgICB0aGlzLm9uQ2hhbmdlLmVtaXQodHJ1ZSlcclxuICB9XHJcblxyXG4gIHRvZ2dsZUNoaXAgPSAoY2hpcDogYW55KSA9PiB7XHJcbiAgICB0aGlzLm9uQ2hlY2tlZENoaXAuZW1pdChjaGlwKVxyXG4gICAgLy8gY29uc3QgYWRkQ2hpcCA9ICgpID0+IHsgdGhpcy5jaGlwcy5hZGQoY2hpcCk7IH07XHJcbiAgICAvLyBjb25zdCByZW1vdmVDaGlwID0gKCkgPT4geyB0aGlzLmNoaXBzLmRlbGV0ZShjaGlwKTsgfTtcclxuICAgIC8vIHRoaXMuY2hpcHMuaGFzKGNoaXApID8gcmVtb3ZlQ2hpcCgpIDogYWRkQ2hpcCgpO1xyXG5cclxuICB9XHJcblxyXG4gIG9uRWRpdENoaXAoY2hpcCkge1xyXG4gICAgaWYgKGNoaXAudmFsdWUgPT09IHRoaXMuY3VycmVudENoaXApIHtcclxuICAgICAgdGhpcy5jdXJyZW50Q2hpcCA9IFwiXCJcclxuICAgICAgdGhpcy5wcmV2VmFsdWUgPSBcIlwiXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmN1cnJlbnRDaGlwID0gY2hpcC52YWx1ZTtcclxuICAgICAgdGhpcy5wcmV2VmFsdWUgPSBjaGlwLnZhbHVlXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXQgY2hpcHMoKSB7IHJldHVybiB0aGlzLmNoaXBDb250cm9sLnZhbHVlOyB9XHJcblxyXG4gIGZvcm1hdE90aGVyKG90aGVyOiBhbnkpIHtcclxuICAgIGlmIChvdGhlciAmJiB0eXBlb2Ygb3RoZXIgIT09ICdib29sZWFuJykge1xyXG4gICAgICByZXR1cm4gKG90aGVyPy50b0xvY2FsZUxvd2VyQ2FzZSgpIHx8ICcnKVxyXG4gICAgfVxyXG4gICAgcmV0dXJuICcnXHJcbiAgfVxyXG5cclxuXHJcbiAgY2hlY2tTdWJGb3JtKGZvcm1zKSB7XHJcbiAgICBsZXQgaGFzU3ViRm9ybSA9IGZhbHNlO1xyXG4gICAgaWYgKGZvcm1zLmZvcm1zICYmIGZvcm1zLmZvcm1zLmxlbmd0aCkge1xyXG4gICAgICBoYXNTdWJGb3JtID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIHJldHVybiBoYXNTdWJGb3JtXHJcbiAgfVxyXG5cclxuICBmbGFnKHZhbHVlKSB7XHJcbiAgICBjb25zdCB2YWx1ZVN0cmluZyA9IFN0cmluZyh2YWx1ZSlcclxuICAgIHJldHVybiB2YWx1ZVN0cmluZyAmJiBpc1ZhbGlkUGhvbmVOdW1iZXIodmFsdWVTdHJpbmcpID8gcGFyc2VQaG9uZU51bWJlcih2YWx1ZVN0cmluZykuY291bnRyeSA6IENvdW50cnlJU08uRnJhbmNlO1xyXG4gIH1cclxuXHJcbiAgY2hlY2tQaG9uZShwaG9uZSkge1xyXG4gICAgaWYgKHBob25lKSB7XHJcbiAgICAgIGxldCByZWdleCA9IG5ldyBSZWdFeHAoL1xcKyg5Wzk3Nl1cXGR8OFs5ODc1MzBdXFxkfDZbOTg3XVxcZHw1WzkwXVxcZHw0MlxcZHwzWzg3NV1cXGR8Mls5ODY1NDMyMV1cXGR8OVs4NTQzMjEwXXw4WzY0MjFdfDZbNjU0MzIxMF18NVs4NzY1NDMyMV18NFs5ODc2NTQzMTBdfDNbOTY0MzIxMF18Mls3MF18N3wxKVxcVypcXGRcXFcqXFxkXFxXKlxcZFxcVypcXGRcXFcqXFxkXFxXKlxcZFxcVypcXGRcXFcqXFxkXFxXKihcXGR7MSwyfSkkLylcclxuICAgICAgdGhpcy5pbnZhbGlkZVZhbHVlID0gIXJlZ2V4LnRlc3QocGhvbmVbJ2UxNjROdW1iZXInXSk7XHJcbiAgICAgIHRoaXMub25DaGVja1ZhbHVlLmVtaXQodGhpcy5pbnZhbGlkZVZhbHVlKVxyXG4gICAgfVxyXG4gICAgaWYgKHBob25lICYmIHBob25lW1wibmF0aW9uYWxOdW1iZXJcIl0gJiYgcGhvbmVbXCJuYXRpb25hbE51bWJlclwiXSAhPSAnJykge1xyXG4gICAgICBsZXQgcCA9IHBob25lWyduYXRpb25hbE51bWJlciddLnJlcGxhY2VBbGwoJyAnLCAnJyk7XHJcbiAgICAgIGxldCBuZXdwOiBhbnkgPSAnJztcclxuXHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmIChwLnNwbGl0KCcnKVtpXSkge1xyXG4gICAgICAgICAgaWYgKGkgJSAyID09IDAgJiYgaSA+IDApIHtcclxuICAgICAgICAgICAgbmV3cCArPSAnICc7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBuZXdwICs9IHAuc3BsaXQoJycpW2ldO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICB0aGlzLmZpZWxkLnZhbHVlID0gcGhvbmVbXCJuYXRpb25hbE51bWJlclwiXVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbn1cclxuIiwiPGRpdiBjbGFzcz1cImZpZWxkLWl0ZW1cIj5cclxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJmaWVsZC5rZXkhPT0nQWNjb3VudE5hbWUnXCIgW25nU3dpdGNoXT1cImZpZWxkLnR5cGVcIj5cclxuICAgICAgICA8ZGl2ICpuZ1N3aXRjaENhc2U9XCIndG9nZ2xlJ1wiIGNsYXNzPVwiZmxleC1hdXRvIGZpZWxkLXNpemUgdG9nZ2xlLWJ1dHRvblwiPlxyXG4gICAgICAgICAgICA8c3Bhbj57eyBmaWVsZC5sYWJlbCB9fTwvc3Bhbj5cclxuICAgICAgICAgICAgPG1hdC1zbGlkZS10b2dnbGUgY2xhc3M9XCJmb3JtLWZpZWxkXCIgWyhuZ01vZGVsKV09XCJmaWVsZC5kZWZhdWx0VmFsdWVcIiAobmdNb2RlbENoYW5nZSk9XCJjaGFuZ2UoKVwiXHJcbiAgICAgICAgICAgICAgICBbbmdNb2RlbE9wdGlvbnNdPVwieyBzdGFuZGFsb25lOiB0cnVlIH1cIiBbbmdTdHlsZV09XCJmaWVsZC5zZWxlY3RvciAmJiB7IGRpc3BsYXk6ICdpbmluZS1ibG9jaycgfVwiPlxyXG4gICAgICAgICAgICA8L21hdC1zbGlkZS10b2dnbGU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiAqbmdTd2l0Y2hDYXNlPVwiJ2NoZWNrYm94J1wiIGNsYXNzPVwiZmxleC1hdXRvIHctMzBcIj5cclxuICAgICAgICAgICAgPG1hdC1jaGVja2JveCBjbGFzcz1cImZvcm0tZmllbGRcIiBzdHlsZT1cIm1hcmdpbi1yaWdodDogMTBweDtcIiAobmdNb2RlbENoYW5nZSk9XCJjaGFuZ2UoKVwiXHJcbiAgICAgICAgICAgICAgICBbY2xhc3NdPVwiY2hlY2tTdWJGb3JtKGZpZWxkKSA/ICdjaGVja2JveC10aXRsZS1hY3RpdmUnOicnXCIgWyhuZ01vZGVsKV09XCJmaWVsZC52YWx1ZVwiXHJcbiAgICAgICAgICAgICAgICBbcmVxdWlyZWRdPVwiZmllbGQuaXNNYW5kYXRvcnlcIiBbbmdNb2RlbE9wdGlvbnNdPVwie3N0YW5kYWxvbmU6IHRydWV9XCJcclxuICAgICAgICAgICAgICAgIFtuZ1N0eWxlXT1cImZpZWxkLnNlbGVjdG9yICYmIHsnZGlzcGxheSc6ICdpbmluZS1ibG9jayd9XCI+XHJcbiAgICAgICAgICAgICAgICB7e2ZpZWxkLmxhYmVsfX1cclxuICAgICAgICAgICAgPC9tYXQtY2hlY2tib3g+XHJcblxyXG5cclxuICAgICAgICAgICAgPG1hdC1zZWxlY3QgcGxhY2Vob2xkZXI9XCJDb21wYW55XCIgKG5nTW9kZWxDaGFuZ2UpPVwiY2hhbmdlKClcIiBbKG5nTW9kZWwpXT1cImZpZWxkLnNlbGVjdG9yLnZhbHVlXCJcclxuICAgICAgICAgICAgICAgIFtuZ01vZGVsT3B0aW9uc109XCJ7c3RhbmRhbG9uZTogdHJ1ZX1cIiByZXF1aXJlZCAqbmdJZj1cImZpZWxkLnNlbGVjdG9yXCJcclxuICAgICAgICAgICAgICAgIHN0eWxlPVwiZGlzcGxheTogaW5saW5lLWJsb2NrOyB3aWR0aDogNTAlO1wiPlxyXG4gICAgICAgICAgICAgICAgPG1hdC1vcHRpb24gKm5nRm9yPVwibGV0IHNlbGVjdCBvZiBmaWVsZC5zZWxlY3Rvci5kZWZhdWx0VmFsdWVcIiBbdmFsdWVdPVwic2VsZWN0LnZhbHVlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge3tzZWxlY3QudmFsdWV9fTwvbWF0LW9wdGlvbj5cclxuICAgICAgICAgICAgPC9tYXQtc2VsZWN0PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgKm5nU3dpdGNoQ2FzZT1cIidjaGVja2JveF9tdWx0aXBsZSdcIiBjbGFzcz1cImZsZXgtYXV0byB3LTMwXCI+XHJcbiAgICAgICAgICAgIDxsYWJlbD57e2ZpZWxkLmxhYmVsfX08L2xhYmVsPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwib25ib2FyZGluZy1zZWxlY3RcIiBzdHlsZT1cIm1hcmdpbi10b3A6IDIwcHg7XCI+XHJcbiAgICAgICAgICAgICAgICA8bWF0LWNoZWNrYm94IGNsYXNzPVwiZm9ybS1maWVsZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9XCJkaXNwbGF5OiBibG9jazsgbWFyZ2luLWJvdHRvbTogNXB4OyBtYXJnaW4tdG9wOiAxMHB4O21hcmdpbi1yaWdodDogMTBweDtcIlxyXG4gICAgICAgICAgICAgICAgICAgICpuZ0Zvcj1cImxldCBvcHQgb2YgZmllbGQuZGVmYXVsdFZhbHVlXCIgW2NoZWNrZWRdPVwib3B0LmNoZWNrZWRcIiBbKG5nTW9kZWwpXT1cIm9wdC5jaGVja2VkXCJcclxuICAgICAgICAgICAgICAgICAgICBbcmVxdWlyZWRdPVwiZmllbGQuaXNNYW5kYXRvcnlcIiAobmdNb2RlbENoYW5nZSk9XCJjaGFuZ2UoKVwiIFtuZ01vZGVsT3B0aW9uc109XCJ7c3RhbmRhbG9uZTogdHJ1ZX1cIj5cclxuICAgICAgICAgICAgICAgICAgICB7e29wdC52YWx1ZX19XHJcbiAgICAgICAgICAgICAgICA8L21hdC1jaGVja2JveD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiAqbmdTd2l0Y2hDYXNlPVwiJ3JhZGlvJ1wiIGNsYXNzPVwiZmxleC1hdXRvIHctMzAgZmllbGQtc2l6ZVwiPlxyXG4gICAgICAgICAgICA8bGFiZWwgc3R5bGU9XCJkaXNwbGF5OiBibG9jaztcIj4ge3tmaWVsZC5sYWJlbH19IDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxtYXQtcmFkaW8tZ3JvdXAgY2xhc3M9XCJmb3JtLWZpZWxkIHJhZGlvLWdyb3VwIGZpZWxkLXNpemVcIiAobmdNb2RlbENoYW5nZSk9XCJjaGFuZ2UoKVwiXHJcbiAgICAgICAgICAgICAgICBbKG5nTW9kZWwpXT1cImZpZWxkLnZhbHVlXCIgW3JlcXVpcmVkXT1cImZpZWxkLmlzTWFuZGF0b3J5XCIgYXJpYS1sYWJlbD1cIlNlbGVjdCBhbiBvcHRpb25cIj5cclxuICAgICAgICAgICAgICAgIDxtYXQtcmFkaW8tYnV0dG9uICpuZ0Zvcj1cImxldCBvcHQgb2YgZmllbGQuZGVmYXVsdFZhbHVlXCIgW3ZhbHVlXT1cIm9wdC52YWx1ZVwiPnt7b3B0LnZhbHVlfX1cclxuICAgICAgICAgICAgICAgIDwvbWF0LXJhZGlvLWJ1dHRvbj5cclxuICAgICAgICAgICAgPC9tYXQtcmFkaW8tZ3JvdXA+XHJcbiAgICAgICAgICAgIDxtYXQtZm9ybS1maWVsZCAqbmdJZj1cIidhdXRyZSc9PT1mb3JtYXRPdGhlcihmaWVsZC52YWx1ZSlcIiBjbGFzcz1cImZvcm0tZmllbGQgZmllbGQtc2l6ZSBvdGhlci1vcHRpb25cIlxyXG4gICAgICAgICAgICAgICAgYXBwZWFyYW5jZT1cIm91dGxpbmVcIj5cclxuICAgICAgICAgICAgICAgIDxtYXQtbGFiZWw+e3tsb2NhbGU/Lk9USEVSX09QVElPTn19PC9tYXQtbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBbcmVxdWlyZWRdPVwiZmllbGQuaXNNYW5kYXRvcnlcIiBtYXRJbnB1dCAobmdNb2RlbENoYW5nZSk9XCJjaGFuZ2UoKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgW25nTW9kZWxPcHRpb25zXT1cIntzdGFuZGFsb25lOiB0cnVlfVwiIFsobmdNb2RlbCldPVwiZmllbGQub3RoZXJWYWx1ZVwiIHBsYWNlaG9sZGVyPVwiXCI+XHJcbiAgICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiAqbmdTd2l0Y2hDYXNlPVwiJ3NlbGVjdCdcIiBjbGFzcz1cImZsZXgtYXV0byB3LTMwIGZpZWxkLXNpemVcIj5cclxuICAgICAgICAgICAgPG1hdC1mb3JtLWZpZWxkIGNsYXNzPVwiIG1hdC1zZWxlY3QgZmxleC1hdXRvIHctMzAgZmllbGQtc2l6ZVwiIGFwcGVhcmFuY2U9XCJvdXRsaW5lXCI+XHJcbiAgICAgICAgICAgICAgICA8bWF0LWxhYmVsPiB7e2ZpZWxkLmxhYmVsfX0gPC9tYXQtbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8bWF0LXNlbGVjdCBbKG5nTW9kZWwpXT1cImZpZWxkLnZhbHVlXCIgKG5nTW9kZWxDaGFuZ2UpPVwiY2hhbmdlKClcIiBbbmdNb2RlbE9wdGlvbnNdPVwie3N0YW5kYWxvbmU6IHRydWV9XCJcclxuICAgICAgICAgICAgICAgICAgICBbcmVxdWlyZWRdPVwiZmllbGQuaXNNYW5kYXRvcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bWF0LW9wdGlvbiAqbmdGb3I9XCJsZXQgb3B0IG9mIGZpZWxkLmRlZmF1bHRWYWx1ZVwiIFt2YWx1ZV09XCJvcHQudmFsdWVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3tvcHQudmFsdWV9fTwvbWF0LW9wdGlvbj5cclxuICAgICAgICAgICAgICAgIDwvbWF0LXNlbGVjdD5cclxuICAgICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgICAgICAgICAgPG1hdC1mb3JtLWZpZWxkICpuZ0lmPVwiJ2F1dHJlJz09PWZvcm1hdE90aGVyKGZpZWxkLnZhbHVlKVwiIGNsYXNzPVwiZm9ybS1maWVsZCBmaWVsZC1zaXplIG90aGVyLW9wdGlvblwiXHJcbiAgICAgICAgICAgICAgICBhcHBlYXJhbmNlPVwib3V0bGluZVwiPlxyXG4gICAgICAgICAgICAgICAgPG1hdC1sYWJlbD5BdXRyZSBvcHRpb248L21hdC1sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIFtyZXF1aXJlZF09XCJmaWVsZC5pc01hbmRhdG9yeVwiIChuZ01vZGVsQ2hhbmdlKT1cImNoYW5nZSgpXCIgbWF0SW5wdXRcclxuICAgICAgICAgICAgICAgICAgICBbbmdNb2RlbE9wdGlvbnNdPVwie3N0YW5kYWxvbmU6IHRydWV9XCIgWyhuZ01vZGVsKV09XCJmaWVsZC5vdGhlclZhbHVlXCIgcGxhY2Vob2xkZXI9XCJcIj5cclxuICAgICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8bWF0LWZvcm0tZmllbGQgKm5nU3dpdGNoQ2FzZT1cIid0ZXh0YXJlYSdcIiBjbGFzcz1cImZvcm0tZmllbGQgZnVsbC13aWR0aFwiIGFwcGVhcmFuY2U9XCJvdXRsaW5lXCI+XHJcbiAgICAgICAgICAgIDxtYXQtbGFiZWw+e3tmaWVsZC5sYWJlbH19PC9tYXQtbGFiZWw+XHJcbiAgICAgICAgICAgIDx0ZXh0YXJlYSB0eXBlPVwidGV4dFwiIHJvd3M9XCI1XCIgbWF0SW5wdXQgW3JlcXVpcmVkXT1cImZpZWxkLmlzTWFuZGF0b3J5XCIgW25nTW9kZWxPcHRpb25zXT1cIntzdGFuZGFsb25lOiB0cnVlfVwiXHJcbiAgICAgICAgICAgICAgICBbKG5nTW9kZWwpXT1cImZpZWxkLnZhbHVlXCIgKG5nTW9kZWxDaGFuZ2UpPVwiY2hhbmdlKClcIiBwbGFjZWhvbGRlcj1cIkRlc2NyaXB0aW9uLi4uXCI+PC90ZXh0YXJlYT5cclxuICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgIDxkaXYgKm5nU3dpdGNoQ2FzZT1cIid0ZWwnXCIgY2xhc3M9XCJmb3JtLWZpZWxkIGZ1bGwtd2lkdGggdGVsLWlucHV0XCI+XHJcbiAgICAgICAgICAgIDxtYXQtbGFiZWwgY2xhc3M9XCJ0ZWwtbGFiZWxcIj57e2ZpZWxkLmxhYmVsfX08L21hdC1sYWJlbD5cclxuICAgICAgICAgICAgPG5neC1pbnRsLXRlbC1pbnB1dCBbcmVxdWlyZWRdPVwiZmllbGQuaXNNYW5kYXRvcnlcIiBpZD1cIm9uYm9hcmRpbmctcGhvbmUtaW5wdXRcIiBjbGFzcz1cInBob25lLWlucHV0LXByb2ZpbGVcIlxyXG4gICAgICAgICAgICAgICAgW2Nzc0NsYXNzXT1cIidpbnB1dC1waG9uZSdcIiBbcHJlZmVycmVkQ291bnRyaWVzXT1cInByZWZlcnJlZENvdW50cmllc1wiIFtlbmFibGVBdXRvQ291bnRyeVNlbGVjdF09XCJmYWxzZVwiXHJcbiAgICAgICAgICAgICAgICBbZW5hYmxlUGxhY2Vob2xkZXJdPVwidHJ1ZVwiIFtjdXN0b21QbGFjZWhvbGRlcl09XCInUGhvbmUnXCIgW3NlbGVjdEZpcnN0Q291bnRyeV09XCJmYWxzZVwiXHJcbiAgICAgICAgICAgICAgICBbc2VsZWN0ZWRDb3VudHJ5SVNPXT1cImZsYWcoZmllbGQudmFsdWUpXCIgW21heExlbmd0aF09XCIxNVwiIFtpbnB1dElkXT1cImZpZWxkLmtleVwiIFtwaG9uZVZhbGlkYXRpb25dPVwidHJ1ZVwiXHJcbiAgICAgICAgICAgICAgICBbc2VwYXJhdGVEaWFsQ29kZV09XCJzZXBhcmF0ZURpYWxDb2RlXCIgW251bWJlckZvcm1hdF09XCJQaG9uZU51bWJlckZvcm1hdC5OYXRpb25hbFwiIG5hbWU9XCJwaG9uZVwiXHJcbiAgICAgICAgICAgICAgICAoaW5wdXQpPVwiY2hlY2tQaG9uZShmaWVsZC52YWx1ZSlcIiBbbmdNb2RlbE9wdGlvbnNdPVwie3N0YW5kYWxvbmU6IHRydWV9XCIgWyhuZ01vZGVsKV09XCJmaWVsZC52YWx1ZVwiXHJcbiAgICAgICAgICAgICAgICAobmdNb2RlbENoYW5nZSk9XCJjaGFuZ2UoKVwiPlxyXG4gICAgICAgICAgICA8L25neC1pbnRsLXRlbC1pbnB1dD5cclxuICAgICAgICAgICAgPG1hdC1lcnJvciAqbmdJZj1cImludmFsaWRlVmFsdWVcIj57e2xvY2FsZT8uSU5WQUxJRF9QSE9ORX19PC9tYXQtZXJyb3I+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPG1hdC1mb3JtLWZpZWxkICpuZ1N3aXRjaENhc2U9XCInbm9uZSdcIiBjbGFzcz1cImZvcm0tZmllbGQgZmllbGQtc2l6ZVwiIGFwcGVhcmFuY2U9XCJvdXRsaW5lXCIgc3R5bGU9XCJvcGFjaXR5OjAgO1wiPlxyXG4gICAgICAgICAgICA8bWF0LWxhYmVsPjwvbWF0LWxhYmVsPlxyXG4gICAgICAgICAgICA8aW5wdXQgW3R5cGVdPVwiZmllbGQudHlwZVwiIGRpc2FibGVkPVwidHJ1ZVwiIG1hdElucHV0IC8+XHJcbiAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgICAgICA8bWF0LWZvcm0tZmllbGQgKm5nU3dpdGNoQ2FzZT1cIidkYXRlJ1wiIGNsYXNzPVwiZm9ybS1maWVsZCBmaWVsZC1zaXplXCIgYXBwZWFyYW5jZT1cIm91dGxpbmVcIj5cclxuICAgICAgICAgICAgPG1hdC1sYWJlbD57e2ZpZWxkLmxhYmVsfX08L21hdC1sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0IG1hdElucHV0IFttYXREYXRlcGlja2VyXT1cInBpY2tlclwiIFtuZ01vZGVsT3B0aW9uc109XCJ7IHN0YW5kYWxvbmU6IHRydWUgfVwiXHJcbiAgICAgICAgICAgICAgICBbcmVxdWlyZWRdPVwiZmllbGQuaXNNYW5kYXRvcnlcIiBbKG5nTW9kZWwpXT1cImZpZWxkLnZhbHVlXCIgKG5nTW9kZWxDaGFuZ2UpPVwiY2hhbmdlKClcIj5cclxuICAgICAgICAgICAgPG1hdC1kYXRlcGlja2VyLXRvZ2dsZSBtYXRTdWZmaXggW2Zvcl09XCJwaWNrZXJcIj48L21hdC1kYXRlcGlja2VyLXRvZ2dsZT5cclxuICAgICAgICAgICAgPG1hdC1kYXRlcGlja2VyICNwaWNrZXI+PC9tYXQtZGF0ZXBpY2tlcj5cclxuICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgIDxtYXQtZm9ybS1maWVsZCAqbmdTd2l0Y2hEZWZhdWx0IGNsYXNzPVwiZm9ybS1maWVsZCBmaWVsZC1zaXplXCIgYXBwZWFyYW5jZT1cIm91dGxpbmVcIj5cclxuICAgICAgICAgICAgPG1hdC1sYWJlbD57e2ZpZWxkLmxhYmVsfX08L21hdC1sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0IFt0eXBlXT1cImZpZWxkLnR5cGVcIiBbcmVxdWlyZWRdPVwiZmllbGQuaXNNYW5kYXRvcnlcIiBtYXRJbnB1dCBbbmdNb2RlbE9wdGlvbnNdPVwie3N0YW5kYWxvbmU6IHRydWV9XCJcclxuICAgICAgICAgICAgICAgIFsobmdNb2RlbCldPVwiZmllbGQudmFsdWVcIiAobmdNb2RlbENoYW5nZSk9XCJjaGFuZ2UoKVwiIHBsYWNlaG9sZGVyPVwiXCI+XHJcbiAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgPGRpdiAqbmdJZj1cImZpZWxkLmtleT09PSdBY2NvdW50TmFtZSdcIiBjbGFzcz1cImZsZXgtYXV0byB3LTMwIGZpZWxkLXNpemVcIj5cclxuICAgICAgICA8bWF0LWZvcm0tZmllbGQgY2xhc3M9XCIgbWF0LXNlbGVjdCBmbGV4LWF1dG8gdy0zMCBmaWVsZC1zaXplXCIgYXBwZWFyYW5jZT1cIm91dGxpbmVcIj5cclxuICAgICAgICAgICAgPG1hdC1sYWJlbD4ge3tmaWVsZC5sYWJlbH19IDwvbWF0LWxhYmVsPlxyXG4gICAgICAgICAgICA8bWF0LXNlbGVjdCBbKG5nTW9kZWwpXT1cImZpZWxkLnZhbHVlXCIgKG5nTW9kZWxDaGFuZ2UpPVwiY2hhbmdlKClcIiBbbmdNb2RlbE9wdGlvbnNdPVwie3N0YW5kYWxvbmU6IHRydWV9XCJcclxuICAgICAgICAgICAgICAgIFtyZXF1aXJlZF09XCJmaWVsZC5pc01hbmRhdG9yeVwiPlxyXG4gICAgICAgICAgICAgICAgPG1hdC1vcHRpb24gKm5nRm9yPVwibGV0IG9wdCBvZiBmaWVsZC5kZWZhdWx0VmFsdWVcIiBbdmFsdWVdPVwib3B0Ll9pZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHt7b3B0Lk5hbWV9fTwvbWF0LW9wdGlvbj5cclxuICAgICAgICAgICAgPC9tYXQtc2VsZWN0PlxyXG4gICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcblxyXG4gICAgPC9kaXY+XHJcbjwvZGl2PlxyXG48bmctY29udGVudCBzZWxlY3Q9XCIuY2hpbGRcIj48L25nLWNvbnRlbnQ+Il19