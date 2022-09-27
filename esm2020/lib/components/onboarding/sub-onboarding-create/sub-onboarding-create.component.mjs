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
function SubOnboardingCreateComponent_ng_container_1_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r12 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 11)(1, "span");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "mat-slide-toggle", 12);
    i0.ɵɵlistener("ngModelChange", function SubOnboardingCreateComponent_ng_container_1_div_1_Template_mat_slide_toggle_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r12); const ctx_r11 = i0.ɵɵnextContext(2); return ctx_r11.field.defaultValue = $event; });
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
    i0.ɵɵlistener("ngModelChange", function SubOnboardingCreateComponent_ng_container_1_div_2_mat_select_3_Template_mat_select_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r17); const ctx_r16 = i0.ɵɵnextContext(3); return ctx_r16.field.selector.value = $event; });
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
    i0.ɵɵlistener("ngModelChange", function SubOnboardingCreateComponent_ng_container_1_div_2_Template_mat_checkbox_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r19); const ctx_r18 = i0.ɵɵnextContext(2); return ctx_r18.field.value = $event; });
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
    i0.ɵɵlistener("ngModelChange", function SubOnboardingCreateComponent_ng_container_1_div_3_mat_checkbox_4_Template_mat_checkbox_ngModelChange_0_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r23); const opt_r21 = restoredCtx.$implicit; return opt_r21.checked = $event; });
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
    i0.ɵɵtext(2, "Autre option");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "input", 27);
    i0.ɵɵlistener("ngModelChange", function SubOnboardingCreateComponent_ng_container_1_div_4_mat_form_field_5_Template_input_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r28); const ctx_r27 = i0.ɵɵnextContext(3); return ctx_r27.field.otherValue = $event; });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r25 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("required", ctx_r25.field.isMandatory)("ngModelOptions", i0.ɵɵpureFunction0(3, _c0))("ngModel", ctx_r25.field.otherValue);
} }
function SubOnboardingCreateComponent_ng_container_1_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r30 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 22)(1, "label", 23);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "mat-radio-group", 24);
    i0.ɵɵlistener("ngModelChange", function SubOnboardingCreateComponent_ng_container_1_div_4_Template_mat_radio_group_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r30); const ctx_r29 = i0.ɵɵnextContext(2); return ctx_r29.field.value = $event; });
    i0.ɵɵtemplate(4, SubOnboardingCreateComponent_ng_container_1_div_4_mat_radio_button_4_Template, 2, 2, "mat-radio-button", 17);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(5, SubOnboardingCreateComponent_ng_container_1_div_4_mat_form_field_5_Template, 4, 4, "mat-form-field", 25);
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
    i0.ɵɵlistener("ngModelChange", function SubOnboardingCreateComponent_ng_container_1_div_5_mat_form_field_6_Template_input_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r35); const ctx_r34 = i0.ɵɵnextContext(3); return ctx_r34.field.otherValue = $event; });
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
    i0.ɵɵlistener("ngModelChange", function SubOnboardingCreateComponent_ng_container_1_div_5_Template_mat_select_ngModelChange_4_listener($event) { i0.ɵɵrestoreView(_r37); const ctx_r36 = i0.ɵɵnextContext(2); return ctx_r36.field.value = $event; });
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
    i0.ɵɵlistener("ngModelChange", function SubOnboardingCreateComponent_ng_container_1_mat_form_field_6_Template_textarea_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r39); const ctx_r38 = i0.ɵɵnextContext(2); return ctx_r38.field.value = $event; });
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
    i0.ɵɵtext(1, "Le t\u00E9l\u00E9phone est invalide");
    i0.ɵɵelementEnd();
} }
function SubOnboardingCreateComponent_ng_container_1_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r42 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 32)(1, "mat-label", 33);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "ngx-intl-tel-input", 34);
    i0.ɵɵlistener("input", function SubOnboardingCreateComponent_ng_container_1_div_7_Template_ngx_intl_tel_input_input_3_listener() { i0.ɵɵrestoreView(_r42); const ctx_r41 = i0.ɵɵnextContext(2); return ctx_r41.checkPhone(ctx_r41.field.value); })("ngModelChange", function SubOnboardingCreateComponent_ng_container_1_div_7_Template_ngx_intl_tel_input_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r42); const ctx_r43 = i0.ɵɵnextContext(2); return ctx_r43.field.value = $event; });
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(4, SubOnboardingCreateComponent_ng_container_1_div_7_mat_error_4_Template, 2, 0, "mat-error", 35);
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
    i0.ɵɵlistener("ngModelChange", function SubOnboardingCreateComponent_ng_container_1_mat_form_field_9_Template_input_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r45); const ctx_r44 = i0.ɵɵnextContext(2); return ctx_r44.field.value = $event; });
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
    i0.ɵɵlistener("ngModelChange", function SubOnboardingCreateComponent_div_2_Template_mat_select_ngModelChange_4_listener($event) { i0.ɵɵrestoreView(_r49); const ctx_r48 = i0.ɵɵnextContext(); return ctx_r48.field.value = $event; });
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
        this.chipControl = new FormControl(new Set());
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
SubOnboardingCreateComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SubOnboardingCreateComponent, selectors: [["lib-sub-create-onboarding"]], inputs: { field: "field", length: "length", i: "i", j: "j" }, outputs: { onAddKeywordFromInput: "onAddKeywordFromInput", onKeyPress: "onKeyPress", onDrop: "onDrop", onAddNewField: "onAddNewField", onRemoveField: "onRemoveField", onChangeType: "onChangeType", onRemoveKeyword: "onRemoveKeyword", onAddNewSubLevelField: "onAddNewSubLevelField", onExpendMore: "onExpendMore", onChangeLabel: "onChangeLabel", onCheckedChip: "onCheckedChip", onCheckValue: "onCheckValue" }, ngContentSelectors: _c4, decls: 4, vars: 2, consts: [[1, "field-item"], [3, "ngSwitch", 4, "ngIf"], ["class", "flex-auto w-30 field-size", 4, "ngIf"], [3, "ngSwitch"], ["class", "flex-auto field-size toggle-button", 4, "ngSwitchCase"], ["class", "flex-auto w-30", 4, "ngSwitchCase"], ["class", "flex-auto w-30 field-size", 4, "ngSwitchCase"], ["class", "form-field full-width", "appearance", "outline", 4, "ngSwitchCase"], ["class", "form-field full-width tel-input", 4, "ngSwitchCase"], ["class", "form-field field-size", "appearance", "outline", "style", "opacity:0 ;", 4, "ngSwitchCase"], ["class", "form-field field-size", "appearance", "outline", 4, "ngSwitchDefault"], [1, "flex-auto", "field-size", "toggle-button"], [1, "form-field", 3, "ngModel", "ngModelOptions", "ngStyle", "ngModelChange"], [1, "flex-auto", "w-30"], [1, "form-field", 2, "margin-right", "10px", 3, "ngModel", "required", "ngModelOptions", "ngStyle", "ngModelChange"], ["placeholder", "Company", "required", "", "style", "display: inline-block; width: 50%;", 3, "ngModel", "ngModelOptions", "ngModelChange", 4, "ngIf"], ["placeholder", "Company", "required", "", 2, "display", "inline-block", "width", "50%", 3, "ngModel", "ngModelOptions", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], [1, "onboarding-select", 2, "margin-top", "20px"], ["class", "form-field", "style", "display: block; margin-bottom: 5px; margin-top: 10px;margin-right: 10px;", 3, "checked", "ngModel", "required", "ngModelOptions", "ngModelChange", 4, "ngFor", "ngForOf"], [1, "form-field", 2, "display", "block", "margin-bottom", "5px", "margin-top", "10px", "margin-right", "10px", 3, "checked", "ngModel", "required", "ngModelOptions", "ngModelChange"], [1, "flex-auto", "w-30", "field-size"], [2, "display", "block"], ["aria-label", "Select an option", 1, "form-field", "radio-group", "field-size", 3, "ngModel", "required", "ngModelChange"], ["class", "form-field field-size other-option", "appearance", "outline", 4, "ngIf"], ["appearance", "outline", 1, "form-field", "field-size", "other-option"], ["type", "text", "matInput", "", "placeholder", "", 3, "required", "ngModelOptions", "ngModel", "ngModelChange"], ["appearance", "outline", 1, "mat-select", "flex-auto", "w-30", "field-size"], [3, "ngModel", "ngModelOptions", "required", "ngModelChange"], ["appearance", "outline", 1, "form-field", "full-width"], ["type", "text", "rows", "5", "matInput", "", "placeholder", "Description...", 3, "required", "ngModelOptions", "ngModel", "ngModelChange"], [1, "form-field", "full-width", "tel-input"], [1, "tel-label"], ["id", "onboarding-phone-input", "name", "phone", 1, "phone-input-profile", 3, "cssClass", "preferredCountries", "enableAutoCountrySelect", "enablePlaceholder", "customPlaceholder", "selectFirstCountry", "selectedCountryISO", "maxLength", "inputId", "phoneValidation", "separateDialCode", "numberFormat", "ngModelOptions", "ngModel", "input", "ngModelChange"], [4, "ngIf"], ["appearance", "outline", 1, "form-field", "field-size", 2, "opacity", "0"], ["disabled", "true", "matInput", "", 3, "type"], ["appearance", "outline", 1, "form-field", "field-size"], ["matInput", "", "placeholder", "", 3, "type", "required", "ngModelOptions", "ngModel", "ngModelChange"]], template: function SubOnboardingCreateComponent_Template(rf, ctx) { if (rf & 1) {
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
    } }, directives: [i1.NgIf, i1.NgSwitch, i1.NgSwitchCase, i2.MatSlideToggle, i3.NgControlStatus, i3.NgModel, i4.NativeElementInjectorDirective, i1.NgStyle, i5.MatCheckbox, i5.MatCheckboxRequiredValidator, i3.RequiredValidator, i6.MatSelect, i1.NgForOf, i7.MatOption, i8.MatRadioGroup, i8.MatRadioButton, i9.MatFormField, i9.MatLabel, i10.MatInput, i3.DefaultValueAccessor, i4.NgxIntlTelInputComponent, i9.MatError, i1.NgSwitchDefault], styles: [".container[_ngcontent-%COMP%]{max-width:98%;margin:50px auto auto;padding-bottom:50px}.container[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:space-between}.input-category-name[_ngcontent-%COMP%]{font-size:15px;font-weight:500}.full-width[_ngcontent-%COMP%]{width:100%}.field-item[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;width:100%;flex-wrap:wrap;position:relative}.field-item[_ngcontent-%COMP%]   .button-action[_ngcontent-%COMP%]{background-color:#6fe8d7;height:100%;margin:auto 15px auto auto;display:flex}.field-item[_ngcontent-%COMP%]   .button-action[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{box-shadow:none;background-color:transparent;color:#fff}.field-action[_ngcontent-%COMP%]{width:10%}.field-size[_ngcontent-%COMP%]   mat-checkbox[_ngcontent-%COMP%]{margin:20px}hr[_ngcontent-%COMP%]{margin:50px 0}  .mat-form-field-appearance-fill .mat-form-field-flex{background-color:#fff}.category-action[_ngcontent-%COMP%]{display:flex;width:100%}.delete-field[_ngcontent-%COMP%]{margin:auto 2%}.radio-group[_ngcontent-%COMP%]   .mat-radio-button[_ngcontent-%COMP%]{margin-right:10px}.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary[_ngcontent-%COMP%]{background-color:#3f51b5;color:#fff;min-height:20px;font-size:10px}.move-icons[_ngcontent-%COMP%]{cursor:move}.category-item[_ngcontent-%COMP%]{display:flex;align-items:baseline;width:100%;border:1px solid #dce4e9;border-radius:8px}  .readonly.mat-form-field-appearance-outline .mat-form-field-outline{color:transparent!important}.field-content[_ngcontent-%COMP%]{width:100%}.cdk-drag-preview[_ngcontent-%COMP%]{box-sizing:border-box;border-radius:4px;box-shadow:0 5px 5px -3px #0003,0 8px 10px 1px #00000024,0 3px 14px 2px #0000001f}.cdk-drag-placeholder[_ngcontent-%COMP%]{opacity:0}.cdk-drag-animating[_ngcontent-%COMP%]{transition:transform .25s cubic-bezier(0,0,.2,1)}.example-list.cdk-drop-list-dragging[_ngcontent-%COMP%]   .category-item[_ngcontent-%COMP%]:not(.cdk-drag-placeholder){transition:transform .25s cubic-bezier(0,0,.2,1)}.add-button-container[_ngcontent-%COMP%]{background:#ffffff 0% 0% no-repeat padding-box;border:1px dashed #dce4e9;border-radius:8px;margin-top:10px;padding:10px;display:flex;justify-content:center;align-items:center;width:98%;margin-left:0;margin-bottom:22px}.add-button-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{display:flex;align-items:center;background-color:transparent;border:none;cursor:pointer;letter-spacing:0px;color:#c2c8d5;box-shadow:none}.expand-button[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%]{font-size:48px;margin-top:-20px;margin-right:15px}.transparent-button[_ngcontent-%COMP%]{background-color:transparent!important;box-shadow:none!important;width:40px!important;padding:0!important;margin:0!important;min-width:auto!important}.expand-button[_ngcontent-%COMP%]{color:#5a607f!important;background-color:transparent!important;box-shadow:none!important}.checkbox-title-active[_ngcontent-%COMP%]{font-weight:700}.other-option[_ngcontent-%COMP%]{margin-left:10px}.flex-auto[_ngcontent-%COMP%]{width:100%}  .country-dropdown{min-width:unset!important}  .tel-input{position:relative}  .tel-input .tel-label{font-size:12px;color:#0009;position:absolute;z-index:1;background-color:#fff;padding:0 2px;left:8px;top:-3px}  .phone-input-profile{padding-bottom:0;padding-top:0;display:block!important;max-width:100%;width:100%}  .phone-input-profile .iti{width:100%!important}  .phone-input-profile .iti input[type=tel]{margin-top:4px!important}  .phone-input-profile input{outline:none;padding:17px;border-radius:5px;border-color:#0000001f;border-width:1px;width:100%;border:1px solid rgba(0,0,0,.12)}.toggle-button[_ngcontent-%COMP%]{padding-top:15px;display:flex;align-items:center}.toggle-button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin-right:10px}.onboarding-select[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(6,1fr)}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SubOnboardingCreateComponent, [{
        type: Component,
        args: [{ selector: 'lib-sub-create-onboarding', template: "<div class=\"field-item\">\r\n    <ng-container *ngIf=\"field.key!=='AccountName'\" [ngSwitch]=\"field.type\">\r\n        <div *ngSwitchCase=\"'toggle'\" class=\"flex-auto field-size toggle-button\">\r\n            <span>{{ field.label }}</span>\r\n            <mat-slide-toggle class=\"form-field\" [(ngModel)]=\"field.defaultValue\"\r\n                [ngModelOptions]=\"{ standalone: true }\" [ngStyle]=\"field.selector && { display: 'inine-block' }\">\r\n            </mat-slide-toggle>\r\n        </div>\r\n        <div *ngSwitchCase=\"'checkbox'\" class=\"flex-auto w-30\">\r\n            <mat-checkbox class=\"form-field\" style=\"margin-right: 10px;\"\r\n                [class]=\"checkSubForm(field) ? 'checkbox-title-active':''\" [(ngModel)]=\"field.value\"\r\n                [required]=\"field.isMandatory\" [ngModelOptions]=\"{standalone: true}\"\r\n                [ngStyle]=\"field.selector && {'display': 'inine-block'}\">\r\n                {{field.label}}\r\n            </mat-checkbox>\r\n\r\n\r\n            <mat-select placeholder=\"Company\" [(ngModel)]=\"field.selector.value\" [ngModelOptions]=\"{standalone: true}\"\r\n                required *ngIf=\"field.selector\" style=\"display: inline-block; width: 50%;\">\r\n                <mat-option *ngFor=\"let select of field.selector.defaultValue\" [value]=\"select.value\">\r\n                    {{select.value}}</mat-option>\r\n            </mat-select>\r\n        </div>\r\n        <div *ngSwitchCase=\"'checkbox_multiple'\" class=\"flex-auto w-30\">\r\n            <label>{{field.label}}</label>\r\n            <div class=\"onboarding-select\" style=\"margin-top: 20px;\">\r\n                <mat-checkbox class=\"form-field\"\r\n                    style=\"display: block; margin-bottom: 5px; margin-top: 10px;margin-right: 10px;\"\r\n                    *ngFor=\"let opt of field.defaultValue\" [checked]=\"opt.checked\" [(ngModel)]=\"opt.checked\"\r\n                    [required]=\"field.isMandatory\" [ngModelOptions]=\"{standalone: true}\">\r\n                    {{opt.value}}\r\n                </mat-checkbox>\r\n            </div>\r\n        </div>\r\n        <div *ngSwitchCase=\"'radio'\" class=\"flex-auto w-30 field-size\">\r\n            <label style=\"display: block;\"> {{field.label}} </label>\r\n            <mat-radio-group class=\"form-field radio-group field-size\" [(ngModel)]=\"field.value\"\r\n                [required]=\"field.isMandatory\" aria-label=\"Select an option\">\r\n                <mat-radio-button *ngFor=\"let opt of field.defaultValue\" [value]=\"opt.value\">{{opt.value}}\r\n                </mat-radio-button>\r\n            </mat-radio-group>\r\n            <mat-form-field *ngIf=\"'autre'===formatOther(field.value)\" class=\"form-field field-size other-option\"\r\n                appearance=\"outline\">\r\n                <mat-label>Autre option</mat-label>\r\n                <input type=\"text\" [required]=\"field.isMandatory\" matInput [ngModelOptions]=\"{standalone: true}\"\r\n                    [(ngModel)]=\"field.otherValue\" placeholder=\"\">\r\n            </mat-form-field>\r\n        </div>\r\n        <div *ngSwitchCase=\"'select'\" class=\"flex-auto w-30 field-size\">\r\n            <mat-form-field class=\" mat-select flex-auto w-30 field-size\" appearance=\"outline\">\r\n                <mat-label> {{field.label}} </mat-label>\r\n                <mat-select [(ngModel)]=\"field.value\" [ngModelOptions]=\"{standalone: true}\"\r\n                    [required]=\"field.isMandatory\">\r\n                    <mat-option *ngFor=\"let opt of field.defaultValue\" [value]=\"opt.value\">\r\n                        {{opt.value}}</mat-option>\r\n                </mat-select>\r\n            </mat-form-field>\r\n            <mat-form-field *ngIf=\"'autre'===formatOther(field.value)\" class=\"form-field field-size other-option\"\r\n                appearance=\"outline\">\r\n                <mat-label>Autre option</mat-label>\r\n                <input type=\"text\" [required]=\"field.isMandatory\" matInput [ngModelOptions]=\"{standalone: true}\"\r\n                    [(ngModel)]=\"field.otherValue\" placeholder=\"\">\r\n            </mat-form-field>\r\n        </div>\r\n        <mat-form-field *ngSwitchCase=\"'textarea'\" class=\"form-field full-width\" appearance=\"outline\">\r\n            <mat-label>{{field.label}}</mat-label>\r\n            <textarea type=\"text\" rows=\"5\" matInput [required]=\"field.isMandatory\" [ngModelOptions]=\"{standalone: true}\"\r\n                [(ngModel)]=\"field.value\" placeholder=\"Description...\"></textarea>\r\n        </mat-form-field>\r\n        <div *ngSwitchCase=\"'tel'\" class=\"form-field full-width tel-input\">\r\n            <mat-label class=\"tel-label\">{{field.label}}</mat-label>\r\n            <ngx-intl-tel-input id=\"onboarding-phone-input\" class=\"phone-input-profile\" [cssClass]=\"'input-phone'\"\r\n                [preferredCountries]=\"preferredCountries\" [enableAutoCountrySelect]=\"false\" [enablePlaceholder]=\"true\"\r\n                [customPlaceholder]=\"'Phone'\" [selectFirstCountry]=\"false\" [selectedCountryISO]=\"flag(field.value)\"\r\n                [maxLength]=\"15\" [inputId]=\"field.key\" [phoneValidation]=\"true\" [separateDialCode]=\"separateDialCode\"\r\n                [numberFormat]=\"PhoneNumberFormat.National\" name=\"phone\" (input)=\"checkPhone(field.value)\"\r\n                [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"field.value\">\r\n            </ngx-intl-tel-input>\r\n            <mat-error *ngIf=\"invalideValue\">Le t\u00E9l\u00E9phone est invalide</mat-error>\r\n        </div>\r\n        <mat-form-field *ngSwitchCase=\"'none'\" class=\"form-field field-size\" appearance=\"outline\" style=\"opacity:0 ;\">\r\n            <mat-label></mat-label>\r\n            <input [type]=\"field.type\" disabled=\"true\" matInput />\r\n        </mat-form-field>\r\n        <mat-form-field *ngSwitchDefault class=\"form-field field-size\" appearance=\"outline\">\r\n            <mat-label>{{field.label}}</mat-label>\r\n            <input [type]=\"field.type\" [required]=\"field.isMandatory\" matInput [ngModelOptions]=\"{standalone: true}\"\r\n                [(ngModel)]=\"field.value\" placeholder=\"\">\r\n        </mat-form-field>\r\n    </ng-container>\r\n    <div *ngIf=\"field.key==='AccountName'\" class=\"flex-auto w-30 field-size\">\r\n        <mat-form-field class=\" mat-select flex-auto w-30 field-size\" appearance=\"outline\">\r\n            <mat-label> {{field.label}} </mat-label>\r\n            <mat-select [(ngModel)]=\"field.value\" [ngModelOptions]=\"{standalone: true}\" [required]=\"field.isMandatory\">\r\n                <mat-option *ngFor=\"let opt of field.defaultValue\" [value]=\"opt._id\">\r\n                    {{opt.Name}}</mat-option>\r\n            </mat-select>\r\n        </mat-form-field>\r\n\r\n    </div>\r\n</div>\r\n<ng-content select=\".child\"></ng-content>", styles: [".container{max-width:98%;margin:50px auto auto;padding-bottom:50px}.container .action{width:100%;display:flex;justify-content:space-between}.input-category-name{font-size:15px;font-weight:500}.full-width{width:100%}.field-item{display:flex;justify-content:space-between;align-items:center;width:100%;flex-wrap:wrap;position:relative}.field-item .button-action{background-color:#6fe8d7;height:100%;margin:auto 15px auto auto;display:flex}.field-item .button-action button{box-shadow:none;background-color:transparent;color:#fff}.field-action{width:10%}.field-size mat-checkbox{margin:20px}hr{margin:50px 0}::ng-deep .mat-form-field-appearance-fill .mat-form-field-flex{background-color:#fff}.category-action{display:flex;width:100%}.delete-field{margin:auto 2%}.radio-group .mat-radio-button{margin-right:10px}.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary{background-color:#3f51b5;color:#fff;min-height:20px;font-size:10px}.move-icons{cursor:move}.category-item{display:flex;align-items:baseline;width:100%;border:1px solid #dce4e9;border-radius:8px}::ng-deep .readonly.mat-form-field-appearance-outline .mat-form-field-outline{color:transparent!important}.field-content{width:100%}.cdk-drag-preview{box-sizing:border-box;border-radius:4px;box-shadow:0 5px 5px -3px #0003,0 8px 10px 1px #00000024,0 3px 14px 2px #0000001f}.cdk-drag-placeholder{opacity:0}.cdk-drag-animating{transition:transform .25s cubic-bezier(0,0,.2,1)}.example-list.cdk-drop-list-dragging .category-item:not(.cdk-drag-placeholder){transition:transform .25s cubic-bezier(0,0,.2,1)}.add-button-container{background:#ffffff 0% 0% no-repeat padding-box;border:1px dashed #dce4e9;border-radius:8px;margin-top:10px;padding:10px;display:flex;justify-content:center;align-items:center;width:98%;margin-left:0;margin-bottom:22px}.add-button-container button{display:flex;align-items:center;background-color:transparent;border:none;cursor:pointer;letter-spacing:0px;color:#c2c8d5;box-shadow:none}.expand-button .material-icons{font-size:48px;margin-top:-20px;margin-right:15px}.transparent-button{background-color:transparent!important;box-shadow:none!important;width:40px!important;padding:0!important;margin:0!important;min-width:auto!important}.expand-button{color:#5a607f!important;background-color:transparent!important;box-shadow:none!important}.checkbox-title-active{font-weight:700}.other-option{margin-left:10px}.flex-auto{width:100%}::ng-deep .country-dropdown{min-width:unset!important}::ng-deep .tel-input{position:relative}::ng-deep .tel-input .tel-label{font-size:12px;color:#0009;position:absolute;z-index:1;background-color:#fff;padding:0 2px;left:8px;top:-3px}::ng-deep .phone-input-profile{padding-bottom:0;padding-top:0;display:block!important;max-width:100%;width:100%}::ng-deep .phone-input-profile .iti{width:100%!important}::ng-deep .phone-input-profile .iti input[type=tel]{margin-top:4px!important}::ng-deep .phone-input-profile input{outline:none;padding:17px;border-radius:5px;border-color:#0000001f;border-width:1px;width:100%;border:1px solid rgba(0,0,0,.12)}.toggle-button{padding-top:15px;display:flex;align-items:center}.toggle-button span{margin-right:10px}.onboarding-select{display:grid;grid-template-columns:repeat(6,1fr)}\n"] }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3ViLW9uYm9hcmRpbmctY3JlYXRlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL29uYm9hcmRpbmcvc3JjL2xpYi9jb21wb25lbnRzL29uYm9hcmRpbmcvc3ViLW9uYm9hcmRpbmctY3JlYXRlL3N1Yi1vbmJvYXJkaW5nLWNyZWF0ZS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9vbmJvYXJkaW5nL3NyYy9saWIvY29tcG9uZW50cy9vbmJvYXJkaW5nL3N1Yi1vbmJvYXJkaW5nLWNyZWF0ZS9zdWItb25ib2FyZGluZy1jcmVhdGUuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDaEUsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvRSxPQUFPLEVBQUUsVUFBVSxFQUFFLGlCQUFpQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDbkUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLGdCQUFnQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFekUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0lDSHJDLCtCQUF5RSxXQUFBO0lBQy9ELFlBQWlCO0lBQUEsaUJBQU87SUFDOUIsNENBQ3FHO0lBRGhFLGtRQUFnQztJQUVyRSxpQkFBbUIsRUFBQTs7O0lBSGIsZUFBaUI7SUFBakIsd0NBQWlCO0lBQ2MsZUFBZ0M7SUFBaEMsbURBQWdDLDhDQUFBLGdFQUFBOzs7SUFlakUsc0NBQXNGO0lBQ2xGLFlBQWdCO0lBQUEsaUJBQWE7OztJQUQ4Qix3Q0FBc0I7SUFDakYsZUFBZ0I7SUFBaEIsZ0RBQWdCOzs7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O2tCQUF4QixNQUFNO1lBQ0cscUJBQXFCO2tCQUE5QixNQUFNO1lBQ0csWUFBWTtrQkFBckIsTUFBTTtZQUNHLGFBQWE7a0JBQXRCLE1BQU07WUFDRyxhQUFhO2tCQUF0QixNQUFNO1lBQ0csWUFBWTtrQkFBckIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENPTU1BLCBFTlRFUiwgU0VNSUNPTE9OIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2tleWNvZGVzJztcclxuaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb3VudHJ5SVNPLCBQaG9uZU51bWJlckZvcm1hdCB9IGZyb20gJ25neC1pbnRsLXRlbC1pbnB1dCc7XHJcbmltcG9ydCB7IGlzVmFsaWRQaG9uZU51bWJlciwgcGFyc2VQaG9uZU51bWJlciB9IGZyb20gJ2xpYnBob25lbnVtYmVyLWpzJztcclxuXHJcbmltcG9ydCB7IEZvcm1Db250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBPbmJvYXJkaW5nU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL29uYm9hcmRpbmcuc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2xpYi1zdWItY3JlYXRlLW9uYm9hcmRpbmcnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9zdWItb25ib2FyZGluZy1jcmVhdGUuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3N1Yi1vbmJvYXJkaW5nLWNyZWF0ZS5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTdWJPbmJvYXJkaW5nQ3JlYXRlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBASW5wdXQoKSBmaWVsZDogYW55XHJcbiAgQElucHV0KCkgbGVuZ3RoOiBhbnlcclxuICBASW5wdXQoKSBpOiBhbnlcclxuICBASW5wdXQoKSBqOiBhbnlcclxuICBAT3V0cHV0KCkgb25BZGRLZXl3b3JkRnJvbUlucHV0ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KClcclxuICBAT3V0cHV0KCkgb25LZXlQcmVzcyA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpXHJcbiAgQE91dHB1dCgpIG9uRHJvcCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpXHJcbiAgQE91dHB1dCgpIG9uQWRkTmV3RmllbGQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKVxyXG4gIEBPdXRwdXQoKSBvblJlbW92ZUZpZWxkID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KClcclxuICBAT3V0cHV0KCkgb25DaGFuZ2VUeXBlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KClcclxuICBAT3V0cHV0KCkgb25SZW1vdmVLZXl3b3JkID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KClcclxuICBAT3V0cHV0KCkgb25BZGROZXdTdWJMZXZlbEZpZWxkID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KClcclxuICBAT3V0cHV0KCkgb25FeHBlbmRNb3JlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KClcclxuICBAT3V0cHV0KCkgb25DaGFuZ2VMYWJlbCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpXHJcbiAgQE91dHB1dCgpIG9uQ2hlY2tlZENoaXAgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKVxyXG4gIEBPdXRwdXQoKSBvbkNoZWNrVmFsdWUgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKVxyXG5cclxuICBjaGlwQ29udHJvbCA9IG5ldyBGb3JtQ29udHJvbChuZXcgU2V0KCkpO1xyXG4gIHByZWZlcnJlZENvdW50cmllczogQ291bnRyeUlTT1tdID0gW0NvdW50cnlJU08uVW5pdGVkU3RhdGVzLCBDb3VudHJ5SVNPLkZyYW5jZV07XHJcbiAgUGhvbmVOdW1iZXJGb3JtYXQgPSBQaG9uZU51bWJlckZvcm1hdDtcclxuICBzZXBhcmF0b3JLZXlzQ29kZXMgPSBbRU5URVIsIENPTU1BLCBTRU1JQ09MT05dO1xyXG4gIGludmFsaWRlVmFsdWUgPSBmYWxzZTtcclxuICBjdXJyZW50Q2hpcCA9IFwiXCJcclxuICBzZXBhcmF0ZURpYWxDb2RlID0gZmFsc2U7XHJcbiAgYWNjb3VudHMgPSBbXVxyXG4gIHByZXZWYWx1ZSA9IFwiXCJcclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICBhc3luYyBuZ09uSW5pdCgpIHtcclxuXHJcbiAgfVxyXG5cclxuICBkcm9wKGV2ZW50KSB7XHJcbiAgICB0aGlzLm9uRHJvcC5lbWl0KGV2ZW50KVxyXG4gIH1cclxuXHJcbiAgYWRkS2V5d29yZEZyb21JbnB1dChldmVudCwgaSwgaikge1xyXG4gICAgdGhpcy5vbkFkZEtleXdvcmRGcm9tSW5wdXQuZW1pdCh7IGV2ZW50LCBwcmV2OiB0aGlzLnByZXZWYWx1ZSwgaSwgaiB9KTtcclxuICB9XHJcblxyXG4gIGtleVVwKGV2ZW50LCBpLCBqKSB7XHJcbiAgICB0aGlzLm9uS2V5UHJlc3MuZW1pdCh7IGV2ZW50LCBpLCBqIH0pXHJcbiAgfVxyXG5cclxuICBhZGROZXdGaWVsZChldmVudCwgaSkge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxyXG4gICAgdGhpcy5vbkFkZE5ld0ZpZWxkLmVtaXQoeyBldmVudCwgaSB9KVxyXG4gIH1cclxuXHJcbiAgcmVtb3ZlRmllbGQoZXZlbnQsIGksIGopIHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcclxuICAgIHRoaXMub25SZW1vdmVGaWVsZC5lbWl0KHsgaSwgaiB9KVxyXG4gIH1cclxuXHJcbiAgY2hhbmdlVHlwZSh0eXBlLCBpLCBqKSB7XHJcbiAgICB0aGlzLm9uQ2hhbmdlVHlwZS5lbWl0KHsgdHlwZSwgaSwgaiB9KVxyXG4gIH1cclxuXHJcbiAgcmVtb3ZlS2V5d29yZChldmVudCwgaSwgaikge1xyXG4gICAgdGhpcy5vblJlbW92ZUtleXdvcmQuZW1pdCh7IGV2ZW50LCBpLCBqIH0pXHJcbiAgfVxyXG4gIGFkZE5ld1N1YkxldmVsRmllbGQoZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICB0aGlzLm9uQWRkTmV3U3ViTGV2ZWxGaWVsZC5lbWl0KHRydWUpXHJcbiAgfVxyXG4gIGV4cGVuZE1vcmUoZSwgZmllbGQpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgdGhpcy5vbkV4cGVuZE1vcmUuZW1pdCh7IGV4cGFuZDogdHJ1ZSwgZmllbGQgfSlcclxuICB9XHJcblxyXG4gIGluZ29yZURlZmF1bHRBY3Rpb24oZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgfVxyXG5cclxuICBjaGFuZ2VMYWJlbChsYWJlbCwga2V5KSB7XHJcbiAgICB0aGlzLm9uQ2hhbmdlTGFiZWwuZW1pdCh7IGxhYmVsLCBrZXkgfSlcclxuICB9XHJcblxyXG4gIHRvZ2dsZUNoaXAgPSAoY2hpcDogYW55KSA9PiB7XHJcbiAgICB0aGlzLm9uQ2hlY2tlZENoaXAuZW1pdChjaGlwKVxyXG4gICAgLy8gY29uc3QgYWRkQ2hpcCA9ICgpID0+IHsgdGhpcy5jaGlwcy5hZGQoY2hpcCk7IH07XHJcbiAgICAvLyBjb25zdCByZW1vdmVDaGlwID0gKCkgPT4geyB0aGlzLmNoaXBzLmRlbGV0ZShjaGlwKTsgfTtcclxuICAgIC8vIHRoaXMuY2hpcHMuaGFzKGNoaXApID8gcmVtb3ZlQ2hpcCgpIDogYWRkQ2hpcCgpO1xyXG5cclxuICB9XHJcblxyXG4gIG9uRWRpdENoaXAoY2hpcCkge1xyXG4gICAgaWYgKGNoaXAudmFsdWUgPT09IHRoaXMuY3VycmVudENoaXApIHtcclxuICAgICAgdGhpcy5jdXJyZW50Q2hpcCA9IFwiXCJcclxuICAgICAgdGhpcy5wcmV2VmFsdWUgPSBcIlwiXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmN1cnJlbnRDaGlwID0gY2hpcC52YWx1ZTtcclxuICAgICAgdGhpcy5wcmV2VmFsdWUgPSBjaGlwLnZhbHVlXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXQgY2hpcHMoKSB7IHJldHVybiB0aGlzLmNoaXBDb250cm9sLnZhbHVlOyB9XHJcblxyXG4gIGZvcm1hdE90aGVyKG90aGVyOiBhbnkpIHtcclxuICAgIGlmIChvdGhlciAmJiB0eXBlb2Ygb3RoZXIgIT09ICdib29sZWFuJykge1xyXG4gICAgICByZXR1cm4gKG90aGVyPy50b0xvY2FsZUxvd2VyQ2FzZSgpIHx8ICcnKVxyXG4gICAgfVxyXG4gICAgcmV0dXJuICcnXHJcbiAgfVxyXG5cclxuXHJcbiAgY2hlY2tTdWJGb3JtKGZvcm1zKSB7XHJcbiAgICBsZXQgaGFzU3ViRm9ybSA9IGZhbHNlO1xyXG4gICAgaWYgKGZvcm1zLmZvcm1zICYmIGZvcm1zLmZvcm1zLmxlbmd0aCkge1xyXG4gICAgICBoYXNTdWJGb3JtID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIHJldHVybiBoYXNTdWJGb3JtXHJcbiAgfVxyXG5cclxuICBmbGFnKHZhbHVlKSB7XHJcbiAgICBjb25zdCB2YWx1ZVN0cmluZyA9IFN0cmluZyh2YWx1ZSlcclxuICAgIHJldHVybiB2YWx1ZVN0cmluZyAmJiBpc1ZhbGlkUGhvbmVOdW1iZXIodmFsdWVTdHJpbmcpID8gcGFyc2VQaG9uZU51bWJlcih2YWx1ZVN0cmluZykuY291bnRyeSA6IENvdW50cnlJU08uRnJhbmNlO1xyXG4gIH1cclxuXHJcbiAgY2hlY2tQaG9uZShwaG9uZSkge1xyXG4gICAgaWYgKHBob25lKSB7XHJcbiAgICAgIGxldCByZWdleCA9IG5ldyBSZWdFeHAoL1xcKyg5Wzk3Nl1cXGR8OFs5ODc1MzBdXFxkfDZbOTg3XVxcZHw1WzkwXVxcZHw0MlxcZHwzWzg3NV1cXGR8Mls5ODY1NDMyMV1cXGR8OVs4NTQzMjEwXXw4WzY0MjFdfDZbNjU0MzIxMF18NVs4NzY1NDMyMV18NFs5ODc2NTQzMTBdfDNbOTY0MzIxMF18Mls3MF18N3wxKVxcVypcXGRcXFcqXFxkXFxXKlxcZFxcVypcXGRcXFcqXFxkXFxXKlxcZFxcVypcXGRcXFcqXFxkXFxXKihcXGR7MSwyfSkkLylcclxuICAgICAgdGhpcy5pbnZhbGlkZVZhbHVlID0gIXJlZ2V4LnRlc3QocGhvbmVbJ2UxNjROdW1iZXInXSk7XHJcbiAgICAgIHRoaXMub25DaGVja1ZhbHVlLmVtaXQodGhpcy5pbnZhbGlkZVZhbHVlKVxyXG4gICAgfVxyXG4gICAgaWYgKHBob25lICYmIHBob25lW1wibmF0aW9uYWxOdW1iZXJcIl0gJiYgcGhvbmVbXCJuYXRpb25hbE51bWJlclwiXSAhPSAnJykge1xyXG4gICAgICBsZXQgcCA9IHBob25lWyduYXRpb25hbE51bWJlciddLnJlcGxhY2VBbGwoJyAnLCAnJyk7XHJcbiAgICAgIGxldCBuZXdwOiBhbnkgPSAnJztcclxuXHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmIChwLnNwbGl0KCcnKVtpXSkge1xyXG4gICAgICAgICAgaWYgKGkgJSAyID09IDAgJiYgaSA+IDApIHtcclxuICAgICAgICAgICAgbmV3cCArPSAnICc7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBuZXdwICs9IHAuc3BsaXQoJycpW2ldO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICB0aGlzLmZpZWxkLnZhbHVlID0gcGhvbmVbXCJuYXRpb25hbE51bWJlclwiXVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbn1cclxuIiwiPGRpdiBjbGFzcz1cImZpZWxkLWl0ZW1cIj5cclxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJmaWVsZC5rZXkhPT0nQWNjb3VudE5hbWUnXCIgW25nU3dpdGNoXT1cImZpZWxkLnR5cGVcIj5cclxuICAgICAgICA8ZGl2ICpuZ1N3aXRjaENhc2U9XCIndG9nZ2xlJ1wiIGNsYXNzPVwiZmxleC1hdXRvIGZpZWxkLXNpemUgdG9nZ2xlLWJ1dHRvblwiPlxyXG4gICAgICAgICAgICA8c3Bhbj57eyBmaWVsZC5sYWJlbCB9fTwvc3Bhbj5cclxuICAgICAgICAgICAgPG1hdC1zbGlkZS10b2dnbGUgY2xhc3M9XCJmb3JtLWZpZWxkXCIgWyhuZ01vZGVsKV09XCJmaWVsZC5kZWZhdWx0VmFsdWVcIlxyXG4gICAgICAgICAgICAgICAgW25nTW9kZWxPcHRpb25zXT1cInsgc3RhbmRhbG9uZTogdHJ1ZSB9XCIgW25nU3R5bGVdPVwiZmllbGQuc2VsZWN0b3IgJiYgeyBkaXNwbGF5OiAnaW5pbmUtYmxvY2snIH1cIj5cclxuICAgICAgICAgICAgPC9tYXQtc2xpZGUtdG9nZ2xlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgKm5nU3dpdGNoQ2FzZT1cIidjaGVja2JveCdcIiBjbGFzcz1cImZsZXgtYXV0byB3LTMwXCI+XHJcbiAgICAgICAgICAgIDxtYXQtY2hlY2tib3ggY2xhc3M9XCJmb3JtLWZpZWxkXCIgc3R5bGU9XCJtYXJnaW4tcmlnaHQ6IDEwcHg7XCJcclxuICAgICAgICAgICAgICAgIFtjbGFzc109XCJjaGVja1N1YkZvcm0oZmllbGQpID8gJ2NoZWNrYm94LXRpdGxlLWFjdGl2ZSc6JydcIiBbKG5nTW9kZWwpXT1cImZpZWxkLnZhbHVlXCJcclxuICAgICAgICAgICAgICAgIFtyZXF1aXJlZF09XCJmaWVsZC5pc01hbmRhdG9yeVwiIFtuZ01vZGVsT3B0aW9uc109XCJ7c3RhbmRhbG9uZTogdHJ1ZX1cIlxyXG4gICAgICAgICAgICAgICAgW25nU3R5bGVdPVwiZmllbGQuc2VsZWN0b3IgJiYgeydkaXNwbGF5JzogJ2luaW5lLWJsb2NrJ31cIj5cclxuICAgICAgICAgICAgICAgIHt7ZmllbGQubGFiZWx9fVxyXG4gICAgICAgICAgICA8L21hdC1jaGVja2JveD5cclxuXHJcblxyXG4gICAgICAgICAgICA8bWF0LXNlbGVjdCBwbGFjZWhvbGRlcj1cIkNvbXBhbnlcIiBbKG5nTW9kZWwpXT1cImZpZWxkLnNlbGVjdG9yLnZhbHVlXCIgW25nTW9kZWxPcHRpb25zXT1cIntzdGFuZGFsb25lOiB0cnVlfVwiXHJcbiAgICAgICAgICAgICAgICByZXF1aXJlZCAqbmdJZj1cImZpZWxkLnNlbGVjdG9yXCIgc3R5bGU9XCJkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IHdpZHRoOiA1MCU7XCI+XHJcbiAgICAgICAgICAgICAgICA8bWF0LW9wdGlvbiAqbmdGb3I9XCJsZXQgc2VsZWN0IG9mIGZpZWxkLnNlbGVjdG9yLmRlZmF1bHRWYWx1ZVwiIFt2YWx1ZV09XCJzZWxlY3QudmFsdWVcIj5cclxuICAgICAgICAgICAgICAgICAgICB7e3NlbGVjdC52YWx1ZX19PC9tYXQtb3B0aW9uPlxyXG4gICAgICAgICAgICA8L21hdC1zZWxlY3Q+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiAqbmdTd2l0Y2hDYXNlPVwiJ2NoZWNrYm94X211bHRpcGxlJ1wiIGNsYXNzPVwiZmxleC1hdXRvIHctMzBcIj5cclxuICAgICAgICAgICAgPGxhYmVsPnt7ZmllbGQubGFiZWx9fTwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJvbmJvYXJkaW5nLXNlbGVjdFwiIHN0eWxlPVwibWFyZ2luLXRvcDogMjBweDtcIj5cclxuICAgICAgICAgICAgICAgIDxtYXQtY2hlY2tib3ggY2xhc3M9XCJmb3JtLWZpZWxkXCJcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT1cImRpc3BsYXk6IGJsb2NrOyBtYXJnaW4tYm90dG9tOiA1cHg7IG1hcmdpbi10b3A6IDEwcHg7bWFyZ2luLXJpZ2h0OiAxMHB4O1wiXHJcbiAgICAgICAgICAgICAgICAgICAgKm5nRm9yPVwibGV0IG9wdCBvZiBmaWVsZC5kZWZhdWx0VmFsdWVcIiBbY2hlY2tlZF09XCJvcHQuY2hlY2tlZFwiIFsobmdNb2RlbCldPVwib3B0LmNoZWNrZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgIFtyZXF1aXJlZF09XCJmaWVsZC5pc01hbmRhdG9yeVwiIFtuZ01vZGVsT3B0aW9uc109XCJ7c3RhbmRhbG9uZTogdHJ1ZX1cIj5cclxuICAgICAgICAgICAgICAgICAgICB7e29wdC52YWx1ZX19XHJcbiAgICAgICAgICAgICAgICA8L21hdC1jaGVja2JveD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiAqbmdTd2l0Y2hDYXNlPVwiJ3JhZGlvJ1wiIGNsYXNzPVwiZmxleC1hdXRvIHctMzAgZmllbGQtc2l6ZVwiPlxyXG4gICAgICAgICAgICA8bGFiZWwgc3R5bGU9XCJkaXNwbGF5OiBibG9jaztcIj4ge3tmaWVsZC5sYWJlbH19IDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxtYXQtcmFkaW8tZ3JvdXAgY2xhc3M9XCJmb3JtLWZpZWxkIHJhZGlvLWdyb3VwIGZpZWxkLXNpemVcIiBbKG5nTW9kZWwpXT1cImZpZWxkLnZhbHVlXCJcclxuICAgICAgICAgICAgICAgIFtyZXF1aXJlZF09XCJmaWVsZC5pc01hbmRhdG9yeVwiIGFyaWEtbGFiZWw9XCJTZWxlY3QgYW4gb3B0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICA8bWF0LXJhZGlvLWJ1dHRvbiAqbmdGb3I9XCJsZXQgb3B0IG9mIGZpZWxkLmRlZmF1bHRWYWx1ZVwiIFt2YWx1ZV09XCJvcHQudmFsdWVcIj57e29wdC52YWx1ZX19XHJcbiAgICAgICAgICAgICAgICA8L21hdC1yYWRpby1idXR0b24+XHJcbiAgICAgICAgICAgIDwvbWF0LXJhZGlvLWdyb3VwPlxyXG4gICAgICAgICAgICA8bWF0LWZvcm0tZmllbGQgKm5nSWY9XCInYXV0cmUnPT09Zm9ybWF0T3RoZXIoZmllbGQudmFsdWUpXCIgY2xhc3M9XCJmb3JtLWZpZWxkIGZpZWxkLXNpemUgb3RoZXItb3B0aW9uXCJcclxuICAgICAgICAgICAgICAgIGFwcGVhcmFuY2U9XCJvdXRsaW5lXCI+XHJcbiAgICAgICAgICAgICAgICA8bWF0LWxhYmVsPkF1dHJlIG9wdGlvbjwvbWF0LWxhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgW3JlcXVpcmVkXT1cImZpZWxkLmlzTWFuZGF0b3J5XCIgbWF0SW5wdXQgW25nTW9kZWxPcHRpb25zXT1cIntzdGFuZGFsb25lOiB0cnVlfVwiXHJcbiAgICAgICAgICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJmaWVsZC5vdGhlclZhbHVlXCIgcGxhY2Vob2xkZXI9XCJcIj5cclxuICAgICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2ICpuZ1N3aXRjaENhc2U9XCInc2VsZWN0J1wiIGNsYXNzPVwiZmxleC1hdXRvIHctMzAgZmllbGQtc2l6ZVwiPlxyXG4gICAgICAgICAgICA8bWF0LWZvcm0tZmllbGQgY2xhc3M9XCIgbWF0LXNlbGVjdCBmbGV4LWF1dG8gdy0zMCBmaWVsZC1zaXplXCIgYXBwZWFyYW5jZT1cIm91dGxpbmVcIj5cclxuICAgICAgICAgICAgICAgIDxtYXQtbGFiZWw+IHt7ZmllbGQubGFiZWx9fSA8L21hdC1sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxtYXQtc2VsZWN0IFsobmdNb2RlbCldPVwiZmllbGQudmFsdWVcIiBbbmdNb2RlbE9wdGlvbnNdPVwie3N0YW5kYWxvbmU6IHRydWV9XCJcclxuICAgICAgICAgICAgICAgICAgICBbcmVxdWlyZWRdPVwiZmllbGQuaXNNYW5kYXRvcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bWF0LW9wdGlvbiAqbmdGb3I9XCJsZXQgb3B0IG9mIGZpZWxkLmRlZmF1bHRWYWx1ZVwiIFt2YWx1ZV09XCJvcHQudmFsdWVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3tvcHQudmFsdWV9fTwvbWF0LW9wdGlvbj5cclxuICAgICAgICAgICAgICAgIDwvbWF0LXNlbGVjdD5cclxuICAgICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgICAgICAgICAgPG1hdC1mb3JtLWZpZWxkICpuZ0lmPVwiJ2F1dHJlJz09PWZvcm1hdE90aGVyKGZpZWxkLnZhbHVlKVwiIGNsYXNzPVwiZm9ybS1maWVsZCBmaWVsZC1zaXplIG90aGVyLW9wdGlvblwiXHJcbiAgICAgICAgICAgICAgICBhcHBlYXJhbmNlPVwib3V0bGluZVwiPlxyXG4gICAgICAgICAgICAgICAgPG1hdC1sYWJlbD5BdXRyZSBvcHRpb248L21hdC1sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIFtyZXF1aXJlZF09XCJmaWVsZC5pc01hbmRhdG9yeVwiIG1hdElucHV0IFtuZ01vZGVsT3B0aW9uc109XCJ7c3RhbmRhbG9uZTogdHJ1ZX1cIlxyXG4gICAgICAgICAgICAgICAgICAgIFsobmdNb2RlbCldPVwiZmllbGQub3RoZXJWYWx1ZVwiIHBsYWNlaG9sZGVyPVwiXCI+XHJcbiAgICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPG1hdC1mb3JtLWZpZWxkICpuZ1N3aXRjaENhc2U9XCIndGV4dGFyZWEnXCIgY2xhc3M9XCJmb3JtLWZpZWxkIGZ1bGwtd2lkdGhcIiBhcHBlYXJhbmNlPVwib3V0bGluZVwiPlxyXG4gICAgICAgICAgICA8bWF0LWxhYmVsPnt7ZmllbGQubGFiZWx9fTwvbWF0LWxhYmVsPlxyXG4gICAgICAgICAgICA8dGV4dGFyZWEgdHlwZT1cInRleHRcIiByb3dzPVwiNVwiIG1hdElucHV0IFtyZXF1aXJlZF09XCJmaWVsZC5pc01hbmRhdG9yeVwiIFtuZ01vZGVsT3B0aW9uc109XCJ7c3RhbmRhbG9uZTogdHJ1ZX1cIlxyXG4gICAgICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJmaWVsZC52YWx1ZVwiIHBsYWNlaG9sZGVyPVwiRGVzY3JpcHRpb24uLi5cIj48L3RleHRhcmVhPlxyXG4gICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgPGRpdiAqbmdTd2l0Y2hDYXNlPVwiJ3RlbCdcIiBjbGFzcz1cImZvcm0tZmllbGQgZnVsbC13aWR0aCB0ZWwtaW5wdXRcIj5cclxuICAgICAgICAgICAgPG1hdC1sYWJlbCBjbGFzcz1cInRlbC1sYWJlbFwiPnt7ZmllbGQubGFiZWx9fTwvbWF0LWxhYmVsPlxyXG4gICAgICAgICAgICA8bmd4LWludGwtdGVsLWlucHV0IGlkPVwib25ib2FyZGluZy1waG9uZS1pbnB1dFwiIGNsYXNzPVwicGhvbmUtaW5wdXQtcHJvZmlsZVwiIFtjc3NDbGFzc109XCInaW5wdXQtcGhvbmUnXCJcclxuICAgICAgICAgICAgICAgIFtwcmVmZXJyZWRDb3VudHJpZXNdPVwicHJlZmVycmVkQ291bnRyaWVzXCIgW2VuYWJsZUF1dG9Db3VudHJ5U2VsZWN0XT1cImZhbHNlXCIgW2VuYWJsZVBsYWNlaG9sZGVyXT1cInRydWVcIlxyXG4gICAgICAgICAgICAgICAgW2N1c3RvbVBsYWNlaG9sZGVyXT1cIidQaG9uZSdcIiBbc2VsZWN0Rmlyc3RDb3VudHJ5XT1cImZhbHNlXCIgW3NlbGVjdGVkQ291bnRyeUlTT109XCJmbGFnKGZpZWxkLnZhbHVlKVwiXHJcbiAgICAgICAgICAgICAgICBbbWF4TGVuZ3RoXT1cIjE1XCIgW2lucHV0SWRdPVwiZmllbGQua2V5XCIgW3Bob25lVmFsaWRhdGlvbl09XCJ0cnVlXCIgW3NlcGFyYXRlRGlhbENvZGVdPVwic2VwYXJhdGVEaWFsQ29kZVwiXHJcbiAgICAgICAgICAgICAgICBbbnVtYmVyRm9ybWF0XT1cIlBob25lTnVtYmVyRm9ybWF0Lk5hdGlvbmFsXCIgbmFtZT1cInBob25lXCIgKGlucHV0KT1cImNoZWNrUGhvbmUoZmllbGQudmFsdWUpXCJcclxuICAgICAgICAgICAgICAgIFtuZ01vZGVsT3B0aW9uc109XCJ7c3RhbmRhbG9uZTogdHJ1ZX1cIiBbKG5nTW9kZWwpXT1cImZpZWxkLnZhbHVlXCI+XHJcbiAgICAgICAgICAgIDwvbmd4LWludGwtdGVsLWlucHV0PlxyXG4gICAgICAgICAgICA8bWF0LWVycm9yICpuZ0lmPVwiaW52YWxpZGVWYWx1ZVwiPkxlIHTDqWzDqXBob25lIGVzdCBpbnZhbGlkZTwvbWF0LWVycm9yPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxtYXQtZm9ybS1maWVsZCAqbmdTd2l0Y2hDYXNlPVwiJ25vbmUnXCIgY2xhc3M9XCJmb3JtLWZpZWxkIGZpZWxkLXNpemVcIiBhcHBlYXJhbmNlPVwib3V0bGluZVwiIHN0eWxlPVwib3BhY2l0eTowIDtcIj5cclxuICAgICAgICAgICAgPG1hdC1sYWJlbD48L21hdC1sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0IFt0eXBlXT1cImZpZWxkLnR5cGVcIiBkaXNhYmxlZD1cInRydWVcIiBtYXRJbnB1dCAvPlxyXG4gICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgPG1hdC1mb3JtLWZpZWxkICpuZ1N3aXRjaERlZmF1bHQgY2xhc3M9XCJmb3JtLWZpZWxkIGZpZWxkLXNpemVcIiBhcHBlYXJhbmNlPVwib3V0bGluZVwiPlxyXG4gICAgICAgICAgICA8bWF0LWxhYmVsPnt7ZmllbGQubGFiZWx9fTwvbWF0LWxhYmVsPlxyXG4gICAgICAgICAgICA8aW5wdXQgW3R5cGVdPVwiZmllbGQudHlwZVwiIFtyZXF1aXJlZF09XCJmaWVsZC5pc01hbmRhdG9yeVwiIG1hdElucHV0IFtuZ01vZGVsT3B0aW9uc109XCJ7c3RhbmRhbG9uZTogdHJ1ZX1cIlxyXG4gICAgICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJmaWVsZC52YWx1ZVwiIHBsYWNlaG9sZGVyPVwiXCI+XHJcbiAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgPGRpdiAqbmdJZj1cImZpZWxkLmtleT09PSdBY2NvdW50TmFtZSdcIiBjbGFzcz1cImZsZXgtYXV0byB3LTMwIGZpZWxkLXNpemVcIj5cclxuICAgICAgICA8bWF0LWZvcm0tZmllbGQgY2xhc3M9XCIgbWF0LXNlbGVjdCBmbGV4LWF1dG8gdy0zMCBmaWVsZC1zaXplXCIgYXBwZWFyYW5jZT1cIm91dGxpbmVcIj5cclxuICAgICAgICAgICAgPG1hdC1sYWJlbD4ge3tmaWVsZC5sYWJlbH19IDwvbWF0LWxhYmVsPlxyXG4gICAgICAgICAgICA8bWF0LXNlbGVjdCBbKG5nTW9kZWwpXT1cImZpZWxkLnZhbHVlXCIgW25nTW9kZWxPcHRpb25zXT1cIntzdGFuZGFsb25lOiB0cnVlfVwiIFtyZXF1aXJlZF09XCJmaWVsZC5pc01hbmRhdG9yeVwiPlxyXG4gICAgICAgICAgICAgICAgPG1hdC1vcHRpb24gKm5nRm9yPVwibGV0IG9wdCBvZiBmaWVsZC5kZWZhdWx0VmFsdWVcIiBbdmFsdWVdPVwib3B0Ll9pZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHt7b3B0Lk5hbWV9fTwvbWF0LW9wdGlvbj5cclxuICAgICAgICAgICAgPC9tYXQtc2VsZWN0PlxyXG4gICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcblxyXG4gICAgPC9kaXY+XHJcbjwvZGl2PlxyXG48bmctY29udGVudCBzZWxlY3Q9XCIuY2hpbGRcIj48L25nLWNvbnRlbnQ+Il19