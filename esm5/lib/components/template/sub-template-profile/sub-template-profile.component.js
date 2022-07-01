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
    var _r845 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 14);
    i0.ɵɵlistener("click", function SubTemplateProfileComponent_div_0_button_4_Template_button_click_0_listener($event) { i0.ɵɵrestoreView(_r845); var ctx_r844 = i0.ɵɵnextContext(2); return ctx_r844.editBLock($event); });
    i0.ɵɵelementStart(1, "mat-icon", 3);
    i0.ɵɵtext(2, "info_outlined");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r834 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngStyle", ctx_r834.onChangePosition(ctx_r834.field.type));
} }
var _c0 = function () { return { standalone: true }; };
var _c1 = function () { return { display: "inine-block" }; };
function SubTemplateProfileComponent_div_0_div_6_Template(rf, ctx) { if (rf & 1) {
    var _r847 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 15);
    i0.ɵɵelementStart(1, "span");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "mat-slide-toggle", 16);
    i0.ɵɵlistener("ngModelChange", function SubTemplateProfileComponent_div_0_div_6_Template_mat_slide_toggle_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r847); var ctx_r846 = i0.ɵɵnextContext(2); return ctx_r846.field.defaultValue = $event; });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r835 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r835.field.label);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", ctx_r835.field.defaultValue)("ngModelOptions", i0.ɵɵpureFunction0(4, _c0))("ngStyle", ctx_r835.field.selector && i0.ɵɵpureFunction0(5, _c1));
} }
function SubTemplateProfileComponent_div_0_div_7_mat_error_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-error");
    i0.ɵɵtext(1, "Le t\u00E9l\u00E9phone est invalide");
    i0.ɵɵelementEnd();
} }
function SubTemplateProfileComponent_div_0_div_7_Template(rf, ctx) { if (rf & 1) {
    var _r850 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 17);
    i0.ɵɵelementStart(1, "mat-label", 18);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "ngx-intl-tel-input", 19);
    i0.ɵɵlistener("input", function SubTemplateProfileComponent_div_0_div_7_Template_ngx_intl_tel_input_input_3_listener() { i0.ɵɵrestoreView(_r850); var ctx_r849 = i0.ɵɵnextContext(2); return ctx_r849.checkPhone(ctx_r849.field.value); })("ngModelChange", function SubTemplateProfileComponent_div_0_div_7_Template_ngx_intl_tel_input_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r850); var ctx_r851 = i0.ɵɵnextContext(2); return ctx_r851.field.value = $event; });
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(4, SubTemplateProfileComponent_div_0_div_7_mat_error_4_Template, 2, 0, "mat-error", 20);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r836 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r836.field.label);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("cssClass", "input-phone")("preferredCountries", ctx_r836.preferredCountries)("enableAutoCountrySelect", false)("enablePlaceholder", true)("customPlaceholder", "Phone")("selectFirstCountry", false)("selectedCountryISO", ctx_r836.flag(ctx_r836.field.value))("maxLength", 15)("inputId", ctx_r836.field.key)("phoneValidation", true)("separateDialCode", ctx_r836.separateDialCode)("numberFormat", ctx_r836.PhoneNumberFormat.National)("ngModelOptions", i0.ɵɵpureFunction0(16, _c0))("ngModel", ctx_r836.field.value);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r836.invalideValue);
} }
function SubTemplateProfileComponent_div_0_div_8_mat_select_3_mat_option_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 25);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var select_r854 = ctx.$implicit;
    i0.ɵɵproperty("value", select_r854.value);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", select_r854.value, " ");
} }
function SubTemplateProfileComponent_div_0_div_8_mat_select_3_Template(rf, ctx) { if (rf & 1) {
    var _r856 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-select", 23);
    i0.ɵɵlistener("ngModelChange", function SubTemplateProfileComponent_div_0_div_8_mat_select_3_Template_mat_select_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r856); var ctx_r855 = i0.ɵɵnextContext(3); return ctx_r855.field.selector.value = $event; });
    i0.ɵɵtemplate(1, SubTemplateProfileComponent_div_0_div_8_mat_select_3_mat_option_1_Template, 2, 2, "mat-option", 24);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r852 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("ngModel", ctx_r852.field.selector.value)("ngModelOptions", i0.ɵɵpureFunction0(3, _c0));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r852.field.selector.defaultValue);
} }
function SubTemplateProfileComponent_div_0_div_8_Template(rf, ctx) { if (rf & 1) {
    var _r858 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 21);
    i0.ɵɵelementStart(1, "mat-checkbox", 16);
    i0.ɵɵlistener("ngModelChange", function SubTemplateProfileComponent_div_0_div_8_Template_mat_checkbox_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r858); var ctx_r857 = i0.ɵɵnextContext(2); return ctx_r857.field.value = $event; });
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, SubTemplateProfileComponent_div_0_div_8_mat_select_3_Template, 2, 4, "mat-select", 22);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r837 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", ctx_r837.field.value)("ngModelOptions", i0.ɵɵpureFunction0(5, _c0))("ngStyle", ctx_r837.field.selector && i0.ɵɵpureFunction0(6, _c1));
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r837.field.label, " ");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r837.field.selector);
} }
function SubTemplateProfileComponent_div_0_div_9_mat_checkbox_4_Template(rf, ctx) { if (rf & 1) {
    var _r862 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-checkbox", 29);
    i0.ɵɵlistener("ngModelChange", function SubTemplateProfileComponent_div_0_div_9_mat_checkbox_4_Template_mat_checkbox_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r862); var opt_r860 = ctx.$implicit; return opt_r860.checked = $event; });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var opt_r860 = ctx.$implicit;
    i0.ɵɵproperty("checked", opt_r860.checked)("ngModel", opt_r860.checked)("ngModelOptions", i0.ɵɵpureFunction0(4, _c0));
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", opt_r860.value, " ");
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
    var ctx_r838 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r838.field.label);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r838.field.defaultValue);
} }
function SubTemplateProfileComponent_div_0_div_10_mat_radio_button_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-radio-button", 33);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var opt_r864 = ctx.$implicit;
    i0.ɵɵproperty("value", opt_r864.value);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1("", opt_r864.value, " ");
} }
function SubTemplateProfileComponent_div_0_div_10_Template(rf, ctx) { if (rf & 1) {
    var _r866 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 21);
    i0.ɵɵelementStart(1, "label", 30);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "mat-radio-group", 31);
    i0.ɵɵlistener("ngModelChange", function SubTemplateProfileComponent_div_0_div_10_Template_mat_radio_group_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r866); var ctx_r865 = i0.ɵɵnextContext(2); return ctx_r865.field.value = $event; });
    i0.ɵɵtemplate(4, SubTemplateProfileComponent_div_0_div_10_mat_radio_button_4_Template, 2, 2, "mat-radio-button", 32);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r839 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r839.field.label, " ");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", ctx_r839.field.value)("required", ctx_r839.field.isMandatory);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r839.field.defaultValue);
} }
function SubTemplateProfileComponent_div_0_div_11_mat_option_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 25);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var opt_r868 = ctx.$implicit;
    i0.ɵɵproperty("value", opt_r868.value);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(opt_r868.value);
} }
function SubTemplateProfileComponent_div_0_div_11_Template(rf, ctx) { if (rf & 1) {
    var _r870 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 34);
    i0.ɵɵelementStart(1, "mat-form-field", 35);
    i0.ɵɵelementStart(2, "mat-label");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "mat-select", 36);
    i0.ɵɵlistener("ngModelChange", function SubTemplateProfileComponent_div_0_div_11_Template_mat_select_ngModelChange_4_listener($event) { i0.ɵɵrestoreView(_r870); var ctx_r869 = i0.ɵɵnextContext(2); return ctx_r869.field.value = $event; });
    i0.ɵɵtemplate(5, SubTemplateProfileComponent_div_0_div_11_mat_option_5_Template, 2, 2, "mat-option", 24);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r840 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", ctx_r840.field.label, " ");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", ctx_r840.field.value)("ngModelOptions", i0.ɵɵpureFunction0(4, _c0));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r840.field.defaultValue);
} }
function SubTemplateProfileComponent_div_0_div_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 37);
    i0.ɵɵelementStart(1, "mat-form-field", 35);
    i0.ɵɵelement(2, "mat-label");
    i0.ɵɵelement(3, "input", 38);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r841 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("type", ctx_r841.field.type);
} }
function SubTemplateProfileComponent_div_0_mat_form_field_13_Template(rf, ctx) { if (rf & 1) {
    var _r873 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-form-field", 39);
    i0.ɵɵelementStart(1, "mat-label");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "input", 40);
    i0.ɵɵlistener("ngModelChange", function SubTemplateProfileComponent_div_0_mat_form_field_13_Template_input_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r873); var ctx_r872 = i0.ɵɵnextContext(2); return ctx_r872.field.defaultValue = $event; });
    i0.ɵɵelementEnd();
    i0.ɵɵelement(4, "mat-datepicker-toggle", 41);
    i0.ɵɵelement(5, "mat-datepicker", null, 42);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var _r871 = i0.ɵɵreference(6);
    var ctx_r842 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r842.field.label);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("matDatepicker", _r871)("ngModelOptions", i0.ɵɵpureFunction0(5, _c0))("ngModel", ctx_r842.field.defaultValue);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("for", _r871);
} }
function SubTemplateProfileComponent_div_0_mat_form_field_14_Template(rf, ctx) { if (rf & 1) {
    var _r875 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-form-field", 39);
    i0.ɵɵelementStart(1, "mat-label");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "input", 43);
    i0.ɵɵlistener("ngModelChange", function SubTemplateProfileComponent_div_0_mat_form_field_14_Template_input_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r875); var ctx_r874 = i0.ɵɵnextContext(2); return ctx_r874.field.defaultValue = $event; });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r843 = i0.ɵɵnextContext(2);
    i0.ɵɵclassProp("blink", ctx_r843.blink);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r843.field.label);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("type", ctx_r843.field.type)("ngModelOptions", i0.ɵɵpureFunction0(6, _c0))("ngModel", ctx_r843.field.defaultValue);
} }
function SubTemplateProfileComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    var _r877 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 1);
    i0.ɵɵelementStart(1, "button", 2);
    i0.ɵɵlistener("click", function SubTemplateProfileComponent_div_0_Template_button_click_1_listener($event) { i0.ɵɵrestoreView(_r877); var ctx_r876 = i0.ɵɵnextContext(); return ctx_r876.editBLock($event); });
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
    var ctx_r833 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngIf", ctx_r833.field.isConditional);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitch", ctx_r833.field.type);
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
var _c2 = [[["", 8, "child"]]];
var _c3 = [".child"];
var SubTemplateProfileComponent = /** @class */ (function () {
    function SubTemplateProfileComponent() {
        var _this = this;
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
        this.toggleChip = function (chip) {
            _this.onCheckedChip.emit(chip);
        };
    }
    SubTemplateProfileComponent.prototype.ngOnInit = function () {
    };
    SubTemplateProfileComponent.prototype.drop = function (event) {
        this.onDrop.emit(event);
    };
    SubTemplateProfileComponent.prototype.addKeywordFromInput = function (event, i, j) {
        this.onAddKeywordFromInput.emit({ event: event, prev: this.prevValue, i: i, j: j });
    };
    SubTemplateProfileComponent.prototype.keyUp = function (event, i, j) {
        this.onKeyPress.emit({ event: event, i: i, j: j });
    };
    SubTemplateProfileComponent.prototype.addNewField = function (event, i) {
        event.preventDefault();
        this.onAddNewField.emit({ event: event, i: i });
    };
    SubTemplateProfileComponent.prototype.removeField = function (event, i, j) {
        event.preventDefault();
        this.onRemoveField.emit({ i: i, j: j });
    };
    SubTemplateProfileComponent.prototype.changeType = function (type, i, j) {
        this.onChangeType.emit({ type: type, i: i, j: j });
    };
    SubTemplateProfileComponent.prototype.removeKeyword = function (event, i, j) {
        this.onRemoveKeyword.emit({ event: event, i: i, j: j });
    };
    SubTemplateProfileComponent.prototype.addNewSubLevelField = function (e) {
        e.preventDefault();
        this.onAddNewSubLevelField.emit(true);
    };
    SubTemplateProfileComponent.prototype.expendMore = function (e, field) {
        e.preventDefault();
        this.onExpendMore.emit({ expand: true, field: field });
    };
    SubTemplateProfileComponent.prototype.ingoreDefaultAction = function (e) {
        e.preventDefault();
    };
    SubTemplateProfileComponent.prototype.changeLabel = function (label, key) {
        this.onChangeLabel.emit({ label: label, key: key });
    };
    SubTemplateProfileComponent.prototype.onEditChip = function (chip) {
        if (chip.value === this.currentChip) {
            this.currentChip = "";
            this.prevValue = "";
        }
        else {
            this.currentChip = chip.value;
            this.prevValue = chip.value;
        }
    };
    Object.defineProperty(SubTemplateProfileComponent.prototype, "chips", {
        get: function () { return this.chipControl.value; },
        enumerable: true,
        configurable: true
    });
    SubTemplateProfileComponent.prototype.checkedDefault = function (value) {
        this.onCheckedDefault.emit(value);
    };
    SubTemplateProfileComponent.prototype.onShowCondition = function (event) {
        if (event === void 0) { event = null; }
        if (event) {
            event.preventDefault();
        }
        this.showCondition = !this.showCondition;
    };
    // checked(locationValue,value){
    //   return locationValue.includes(value)
    // }
    SubTemplateProfileComponent.prototype.editBLock = function (event) {
        event.preventDefault();
        this.onEditBlock.emit(true);
    };
    SubTemplateProfileComponent.prototype.onChangePosition = function (type) {
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
    };
    SubTemplateProfileComponent.prototype.flag = function (value) {
        var valueString = String(value);
        return valueString && isValidPhoneNumber(valueString) ? parsePhoneNumber(valueString).country : CountryISO.France;
    };
    SubTemplateProfileComponent.prototype.checkPhone = function (phone) {
        if (phone) {
            var regex = new RegExp(/\+(9[976]\d|8[987530]\d|6[987]\d|5[90]\d|42\d|3[875]\d|2[98654321]\d|9[8543210]|8[6421]|6[6543210]|5[87654321]|4[987654310]|3[9643210]|2[70]|7|1)\W*\d\W*\d\W*\d\W*\d\W*\d\W*\d\W*\d\W*\d\W*(\d{1,2})$/);
            this.invalideValue = !regex.test(phone['e164Number']);
            this.onCheckValue.emit(this.invalideValue);
        }
        if (phone && phone["nationalNumber"] && phone["nationalNumber"] != '') {
            var p = phone['nationalNumber'].replaceAll(' ', '');
            var newp = '';
            for (var i = 0; i < p.length; i++) {
                if (p.split('')[i]) {
                    if (i % 2 == 0 && i > 0) {
                        newp += ' ';
                    }
                    newp += p.split('')[i];
                }
            }
            this.field.value = phone["nationalNumber"];
        }
    };
    SubTemplateProfileComponent.ɵfac = function SubTemplateProfileComponent_Factory(t) { return new (t || SubTemplateProfileComponent)(); };
    SubTemplateProfileComponent.ɵcmp = i0.ɵɵdefineComponent({ type: SubTemplateProfileComponent, selectors: [["lib-sub-category"]], inputs: { field: "field", length: "length", i: "i", j: "j", conditionData: "conditionData", blink: "blink" }, outputs: { onAddKeywordFromInput: "onAddKeywordFromInput", onKeyPress: "onKeyPress", onDrop: "onDrop", onAddNewField: "onAddNewField", onRemoveField: "onRemoveField", onChangeType: "onChangeType", onRemoveKeyword: "onRemoveKeyword", onAddNewSubLevelField: "onAddNewSubLevelField", onExpendMore: "onExpendMore", onChangeLabel: "onChangeLabel", onCheckedChip: "onCheckedChip", onCheckedDefault: "onCheckedDefault", onGetConditionValues: "onGetConditionValues", onEditBlock: "onEditBlock", onCheckValue: "onCheckValue" }, ngContentSelectors: _c3, decls: 2, vars: 1, consts: [["class", "field-item", 4, "ngIf"], [1, "field-item"], ["mat-raised-button", "", 1, "transparent-button", "setting", 3, "click"], [1, "setting-icon"], ["matTooltip", "Cliquer pour regarder la condition appliqu\u00E9e \u00E0 ce champ!", "class", "transparent-button conditional-view", "mat-raised-button", "", 3, "ngStyle", "click", 4, "ngIf"], [3, "ngSwitch"], ["class", "flex-auto field-size toggle-button", 4, "ngSwitchCase"], ["class", "form-field full-width tel-input", 4, "ngSwitchCase"], ["class", "flex-auto field-size", 4, "ngSwitchCase"], ["class", "flex-auto field-size", "style", "width: 100%;", 4, "ngSwitchCase"], ["class", "flex-auto field-size select-content", 4, "ngSwitchCase"], ["class", "flex-auto field-size select-content", "style", "opacity:0 ;", 4, "ngSwitchCase"], ["class", "form-field field-size", "appearance", "outline", 4, "ngSwitchCase"], ["class", "form-field field-size", "appearance", "outline", 3, "blink", 4, "ngSwitchDefault"], ["matTooltip", "Cliquer pour regarder la condition appliqu\u00E9e \u00E0 ce champ!", "mat-raised-button", "", 1, "transparent-button", "conditional-view", 3, "ngStyle", "click"], [1, "flex-auto", "field-size", "toggle-button"], [1, "form-field", 3, "ngModel", "ngModelOptions", "ngStyle", "ngModelChange"], [1, "form-field", "full-width", "tel-input"], [1, "tel-label"], ["id", "onboarding-phone-input", "name", "phone", 1, "phone-input-profile", 3, "cssClass", "preferredCountries", "enableAutoCountrySelect", "enablePlaceholder", "customPlaceholder", "selectFirstCountry", "selectedCountryISO", "maxLength", "inputId", "phoneValidation", "separateDialCode", "numberFormat", "ngModelOptions", "ngModel", "input", "ngModelChange"], [4, "ngIf"], [1, "flex-auto", "field-size"], ["placeholder", "Company", "style", "display: inline-block; width: 50%", 3, "ngModel", "ngModelOptions", "ngModelChange", 4, "ngIf"], ["placeholder", "Company", 2, "display", "inline-block", "width", "50%", 3, "ngModel", "ngModelOptions", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], [1, "flex-auto", "field-size", 2, "width", "100%"], [1, "onboarding-select", 2, "margin-top", "20px"], ["class", "form-field", "style", "display: block; margin-bottom: 5px; margin-top: 10px; margin-right: 10px;", 3, "checked", "ngModel", "ngModelOptions", "ngModelChange", 4, "ngFor", "ngForOf"], [1, "form-field", 2, "display", "block", "margin-bottom", "5px", "margin-top", "10px", "margin-right", "10px", 3, "checked", "ngModel", "ngModelOptions", "ngModelChange"], [2, "display", "block"], ["aria-label", "Select an option", 1, "form-field", "radio-group", "field-size", "onboarding-select", 3, "ngModel", "required", "ngModelChange"], ["style", "margin-bottom: 20px;", 3, "value", 4, "ngFor", "ngForOf"], [2, "margin-bottom", "20px", 3, "value"], [1, "flex-auto", "field-size", "select-content"], ["appearance", "outline", 1, "mat-select", "flex-auto", "field-size"], [3, "ngModel", "ngModelOptions", "ngModelChange"], [1, "flex-auto", "field-size", "select-content", 2, "opacity", "0"], ["disabled", "true", "matInput", "", 3, "type"], ["appearance", "outline", 1, "form-field", "field-size"], ["matInput", "", 3, "matDatepicker", "ngModelOptions", "ngModel", "ngModelChange"], ["matSuffix", "", 3, "for"], ["picker", ""], ["matInput", "", "placeholder", "", 3, "type", "ngModelOptions", "ngModel", "ngModelChange"]], template: function SubTemplateProfileComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef(_c2);
            i0.ɵɵtemplate(0, SubTemplateProfileComponent_div_0_Template, 15, 10, "div", 0);
            i0.ɵɵprojection(1);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", !ctx.field.forms || ctx.field.forms.length === 0);
        } }, directives: [i1.NgIf, i2.MatButton, i3.MatIcon, i1.NgSwitch, i1.NgSwitchCase, i1.NgSwitchDefault, i4.MatTooltip, i1.NgStyle, i5.MatSlideToggle, i6.NgControlStatus, i6.NgModel, i7.NativeElementInjectorDirective, i8.MatLabel, i7.NgxIntlTelInputComponent, i8.MatError, i9.MatCheckbox, i10.MatSelect, i1.NgForOf, i11.MatOption, i12.MatRadioGroup, i6.RequiredValidator, i12.MatRadioButton, i8.MatFormField, i13.MatInput, i14.MatDatepickerInput, i6.DefaultValueAccessor, i14.MatDatepickerToggle, i8.MatSuffix, i14.MatDatepicker], styles: [".container[_ngcontent-%COMP%]{max-width:98%;margin:50px auto auto;padding-bottom:50px}.container[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:space-between}.input-category-name[_ngcontent-%COMP%]{font-size:15px;font-weight:500}.full-width[_ngcontent-%COMP%]{width:100%}.field-item[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;width:100%;flex-wrap:wrap;position:relative;margin-top:10px}.field-item[_ngcontent-%COMP%]   .button-action[_ngcontent-%COMP%]{background-color:#6fe8d7;height:100%;margin:auto 15px auto auto;display:flex}.field-item[_ngcontent-%COMP%]   .button-action[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{box-shadow:none;background-color:transparent;color:#fff}.field-item[_ngcontent-%COMP%]   .setting[_ngcontent-%COMP%]{position:absolute;top:-5px;right:-12px;z-index:1;background-color:#d5d6d7!important;border-radius:50px;width:40px!important;height:40px!important;display:none}.field-item[_ngcontent-%COMP%]   .conditional-view[_ngcontent-%COMP%]{position:absolute;top:-28px;left:-9px;z-index:9;background-color:transparent!important;border-radius:50px;width:40px!important;height:40px!important}.field-item[_ngcontent-%COMP%]:hover   .setting[_ngcontent-%COMP%]{display:block}.field-item[_ngcontent-%COMP%]:hover   .conditional-view[_ngcontent-%COMP%]{background-color:#d5d6d7!important}.field-action[_ngcontent-%COMP%]{width:10%}hr[_ngcontent-%COMP%]{margin:50px 0}  .mat-form-field-appearance-fill .mat-form-field-flex{background-color:#fff}.category-action[_ngcontent-%COMP%]{display:flex;width:100%}.delete-field[_ngcontent-%COMP%]{margin:auto 2%}.radio-group[_ngcontent-%COMP%]   .mat-radio-button[_ngcontent-%COMP%]{margin-right:10px}.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary[_ngcontent-%COMP%]{background-color:#3f51b5;color:#fff;min-height:20px;font-size:10px}.move-icons[_ngcontent-%COMP%]{cursor:move}.category-item[_ngcontent-%COMP%]{display:flex;align-items:baseline;width:100%;border:1px solid #dce4e9;border-radius:8px}  .readonly.mat-form-field-appearance-outline .mat-form-field-outline{color:transparent!important}.field-content[_ngcontent-%COMP%]{width:100%}.cdk-drag-preview[_ngcontent-%COMP%]{box-sizing:border-box;border-radius:4px;box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.cdk-drag-placeholder[_ngcontent-%COMP%]{opacity:0}.cdk-drag-animating[_ngcontent-%COMP%], .example-list.cdk-drop-list-dragging[_ngcontent-%COMP%]   .category-item[_ngcontent-%COMP%]:not(.cdk-drag-placeholder){transition:transform 250ms cubic-bezier(0,0,.2,1)}.add-button-container[_ngcontent-%COMP%]{background:no-repeat padding-box #fff;border:1px dashed #dce4e9;border-radius:8px;margin-top:10px;padding:10px;display:flex;justify-content:center;align-items:center;width:98%;margin-left:0;margin-bottom:22px}.add-button-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{display:flex;align-items:center;background-color:transparent;border:none;cursor:pointer;font:17px/26px Nexa Text;letter-spacing:0;color:#c2c8d5;box-shadow:none}.expand-button[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%]{font-size:48px;margin-top:-20px;margin-right:15px}.transparent-button[_ngcontent-%COMP%]{background-color:transparent!important;box-shadow:none!important;width:40px!important;padding:0!important;margin:0!important;min-width:auto!important}.expand-button[_ngcontent-%COMP%]{color:#5a607f!important;background-color:transparent!important;box-shadow:none!important}.checkbox-condition[_ngcontent-%COMP%]{position:relative}.checkbox-condition[_ngcontent-%COMP%]   .condition-container[_ngcontent-%COMP%]{position:absolute;top:30px;width:500px;height:150px;background-color:#fff;border:1px dashed #dce4e9;z-index:1;left:0;border-radius:5px}.checkbox-condition[_ngcontent-%COMP%]   .condition-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{position:absolute;bottom:5px;left:0}.condition-help[_ngcontent-%COMP%]{cursor:pointer}.cdk-overlay-pane[_ngcontent-%COMP%]{width:100%}.child[_ngcontent-%COMP%]{margin-left:0}.child[_ngcontent-%COMP%]   .cdk-drop-list[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap}.toggle-button[_ngcontent-%COMP%]{display:flex;align-items:center}.toggle-button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin-right:10px}.onboarding-select[_ngcontent-%COMP%]{display:-ms-grid;display:grid;-ms-grid-columns:(1fr)[6];grid-template-columns:repeat(6,1fr)}  .country-dropdown{min-width:unset!important}  .tel-input{position:relative}  .tel-input .tel-label{font-size:12px;color:rgba(0,0,0,.6);position:absolute;z-index:1;background-color:#fff;padding:0 2px;left:8px;top:-7px}  .phone-input-profile{padding-bottom:0;padding-top:0;display:block!important;max-width:100%;font:14px/20px \"Nexa Text\"!important;width:100%}  .phone-input-profile .iti{width:100%!important}  .phone-input-profile input{outline:0;padding:19px;border-radius:5px;border-width:1px;width:100%;border:1px solid rgba(0,0,0,.12)}  .blink{-webkit-animation:2s ease-out blink;animation:2s ease-out blink}  .blink.mat-form-field-appearance-outline .mat-form-field-outline{border-radius:10px!important;box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12);color:#242731!important}@-webkit-keyframes blink{0%{opacity:0;transform:scale(0)}10%{opacity:.1;transform:scale(.1)}20%{opacity:.2;transform:scale(.2)}30%{opacity:.3;transform:scale(.3)}40%{opacity:.4;transform:scale(.4)}50%{opacity:.5;transform:scale(.5)}60%{opacity:.6;transform:scale(.6)}70%{opacity:.7;transform:scale(.7)}80%{opacity:.8;transform:scale(.8)}90%{opacity:.9;transform:scale(.9)}100%{transform:scale(1);opacity:1}}@keyframes blink{0%{opacity:0;transform:scale(0)}10%{opacity:.1;transform:scale(.1)}20%{opacity:.2;transform:scale(.2)}30%{opacity:.3;transform:scale(.3)}40%{opacity:.4;transform:scale(.4)}50%{opacity:.5;transform:scale(.5)}60%{opacity:.6;transform:scale(.6)}70%{opacity:.7;transform:scale(.7)}80%{opacity:.8;transform:scale(.8)}90%{opacity:.9;transform:scale(.9)}100%{transform:scale(1);opacity:1}}"] });
    return SubTemplateProfileComponent;
}());
export { SubTemplateProfileComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3ViLXRlbXBsYXRlLXByb2ZpbGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vb25ib2FyZGluZy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3RlbXBsYXRlL3N1Yi10ZW1wbGF0ZS1wcm9maWxlL3N1Yi10ZW1wbGF0ZS1wcm9maWxlLmNvbXBvbmVudC50cyIsImxpYi9jb21wb25lbnRzL3RlbXBsYXRlL3N1Yi10ZW1wbGF0ZS1wcm9maWxlL3N1Yi10ZW1wbGF0ZS1wcm9maWxlLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBdUMsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQXFCLE1BQU0sRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFDOUksT0FBTyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDaEUsT0FBTyxFQUFFLFVBQVUsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ25FLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRXpFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDRDNDLGtDQUdFO0lBREEsd05BQTJCO0lBQzNCLG1DQUErQjtJQUFBLDZCQUFhO0lBQUEsaUJBQVc7SUFDekQsaUJBQVM7OztJQUhxQyx3RUFBd0M7Ozs7OztJQUtwRiwrQkFDRTtJQUFBLDRCQUFNO0lBQUEsWUFBaUI7SUFBQSxpQkFBTztJQUM5Qiw0Q0FFbUI7SUFGa0IseVBBQWdDO0lBRXJFLGlCQUFtQjtJQUNyQixpQkFBTTs7O0lBSkUsZUFBaUI7SUFBakIsMENBQWlCO0lBQ2MsZUFBZ0M7SUFBaEMscURBQWdDLDhDQUFBLGtFQUFBOzs7SUFhckUsaUNBQWlDO0lBQUEsbURBQXlCO0lBQUEsaUJBQVk7Ozs7SUFUeEUsK0JBQ0U7SUFB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RUFBOEM7O3NDREF0RTtDQXlLQyxBQWxLRCxJQWtLQztTQTdKWSwyQkFBMkI7a0RBQTNCLDJCQUEyQjtjQUx2QyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtnQkFDNUIsV0FBVyxFQUFFLHVDQUF1QztnQkFDcEQsU0FBUyxFQUFFLENBQUMsdUNBQXVDLENBQUM7YUFDckQ7O2tCQUVFLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLE1BQU07O2tCQUNOLE1BQU07O2tCQUNOLE1BQU07O2tCQUNOLE1BQU07O2tCQUNOLE1BQU07O2tCQUNOLE1BQU07O2tCQUNOLE1BQU07O2tCQUNOLE1BQU07O2tCQUNOLE1BQU07O2tCQUNOLE1BQU07O2tCQUNOLE1BQU07O2tCQUNOLE1BQU07O2tCQUNOLE1BQU07O2tCQUNOLE1BQU07O2tCQUNOLEtBQUs7O2tCQUNMLE1BQU07O2tCQUNOLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZnRlckNvbnRlbnRJbml0LCBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkNoYW5nZXMsIE9uSW5pdCwgT3V0cHV0LCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENPTU1BLCBFTlRFUiwgU0VNSUNPTE9OIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2tleWNvZGVzJztcclxuaW1wb3J0IHsgQ291bnRyeUlTTywgUGhvbmVOdW1iZXJGb3JtYXQgfSBmcm9tICduZ3gtaW50bC10ZWwtaW5wdXQnO1xyXG5pbXBvcnQgeyBpc1ZhbGlkUGhvbmVOdW1iZXIsIHBhcnNlUGhvbmVOdW1iZXIgfSBmcm9tICdsaWJwaG9uZW51bWJlci1qcyc7XHJcblxyXG5pbXBvcnQgeyBGb3JtQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbGliLXN1Yi1jYXRlZ29yeScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3N1Yi10ZW1wbGF0ZS1wcm9maWxlLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9zdWItdGVtcGxhdGUtcHJvZmlsZS5jb21wb25lbnQuc2NzcyddLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgU3ViVGVtcGxhdGVQcm9maWxlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBASW5wdXQoKSBmaWVsZDogYW55XHJcbiAgQElucHV0KCkgbGVuZ3RoOiBhbnlcclxuICBASW5wdXQoKSBpOiBhbnlcclxuICBASW5wdXQoKSBqOiBhbnlcclxuICBAT3V0cHV0KCkgb25BZGRLZXl3b3JkRnJvbUlucHV0ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KClcclxuICBAT3V0cHV0KCkgb25LZXlQcmVzcyA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpXHJcbiAgQE91dHB1dCgpIG9uRHJvcCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpXHJcbiAgQE91dHB1dCgpIG9uQWRkTmV3RmllbGQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKVxyXG4gIEBPdXRwdXQoKSBvblJlbW92ZUZpZWxkID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KClcclxuICBAT3V0cHV0KCkgb25DaGFuZ2VUeXBlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KClcclxuICBAT3V0cHV0KCkgb25SZW1vdmVLZXl3b3JkID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KClcclxuICBAT3V0cHV0KCkgb25BZGROZXdTdWJMZXZlbEZpZWxkID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KClcclxuICBAT3V0cHV0KCkgb25FeHBlbmRNb3JlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KClcclxuICBAT3V0cHV0KCkgb25DaGFuZ2VMYWJlbCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpXHJcbiAgQE91dHB1dCgpIG9uQ2hlY2tlZENoaXAgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKVxyXG4gIEBPdXRwdXQoKSBvbkNoZWNrZWREZWZhdWx0ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KClcclxuICBAT3V0cHV0KCkgb25HZXRDb25kaXRpb25WYWx1ZXMgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKVxyXG4gIEBPdXRwdXQoKSBvbkVkaXRCbG9jayA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpXHJcbiAgQElucHV0KCkgY29uZGl0aW9uRGF0YSA9IFtdXHJcbiAgQE91dHB1dCgpIG9uQ2hlY2tWYWx1ZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpXHJcbiAgQElucHV0KCkgYmxpbmsgPSBmYWxzZVxyXG4gIGNoaXBDb250cm9sID0gbmV3IEZvcm1Db250cm9sKG5ldyBTZXQoKSk7XHJcbiAgcHJlZmVycmVkQ291bnRyaWVzOiBDb3VudHJ5SVNPW10gPSBbQ291bnRyeUlTTy5Vbml0ZWRTdGF0ZXMsIENvdW50cnlJU08uRnJhbmNlXTtcclxuICBQaG9uZU51bWJlckZvcm1hdCA9IFBob25lTnVtYmVyRm9ybWF0O1xyXG4gIHNlcGFyYXRvcktleXNDb2RlcyA9IFtFTlRFUiwgQ09NTUEsIFNFTUlDT0xPTl07XHJcbiAgaW52YWxpZGVWYWx1ZSA9IGZhbHNlO1xyXG4gIGN1cnJlbnRDaGlwID0gXCJcIlxyXG4gIHNlcGFyYXRlRGlhbENvZGUgPSBmYWxzZTtcclxuICBwcmV2VmFsdWUgPSBcIlwiXHJcbiAgc2hvd0NvbmRpdGlvbiA9IGZhbHNlXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICB9XHJcblxyXG4gIGRyb3AoZXZlbnQpIHtcclxuICAgIHRoaXMub25Ecm9wLmVtaXQoZXZlbnQpXHJcbiAgfVxyXG5cclxuICBhZGRLZXl3b3JkRnJvbUlucHV0KGV2ZW50LCBpLCBqKSB7XHJcbiAgICB0aGlzLm9uQWRkS2V5d29yZEZyb21JbnB1dC5lbWl0KHsgZXZlbnQsIHByZXY6IHRoaXMucHJldlZhbHVlLCBpLCBqIH0pO1xyXG4gIH1cclxuXHJcbiAga2V5VXAoZXZlbnQsIGksIGopIHtcclxuICAgIHRoaXMub25LZXlQcmVzcy5lbWl0KHsgZXZlbnQsIGksIGogfSlcclxuICB9XHJcblxyXG4gIGFkZE5ld0ZpZWxkKGV2ZW50LCBpKSB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICB0aGlzLm9uQWRkTmV3RmllbGQuZW1pdCh7IGV2ZW50LCBpIH0pXHJcbiAgfVxyXG5cclxuICByZW1vdmVGaWVsZChldmVudCwgaSwgaikge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxyXG4gICAgdGhpcy5vblJlbW92ZUZpZWxkLmVtaXQoeyBpLCBqIH0pXHJcbiAgfVxyXG5cclxuICBjaGFuZ2VUeXBlKHR5cGUsIGksIGopIHtcclxuICAgIHRoaXMub25DaGFuZ2VUeXBlLmVtaXQoeyB0eXBlLCBpLCBqIH0pXHJcbiAgfVxyXG5cclxuICByZW1vdmVLZXl3b3JkKGV2ZW50LCBpLCBqKSB7XHJcbiAgICB0aGlzLm9uUmVtb3ZlS2V5d29yZC5lbWl0KHsgZXZlbnQsIGksIGogfSlcclxuICB9XHJcbiAgYWRkTmV3U3ViTGV2ZWxGaWVsZChlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgIHRoaXMub25BZGROZXdTdWJMZXZlbEZpZWxkLmVtaXQodHJ1ZSlcclxuICB9XHJcbiAgZXhwZW5kTW9yZShlLCBmaWVsZCkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICB0aGlzLm9uRXhwZW5kTW9yZS5lbWl0KHsgZXhwYW5kOiB0cnVlLCBmaWVsZCB9KVxyXG4gIH1cclxuXHJcbiAgaW5nb3JlRGVmYXVsdEFjdGlvbihlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICB9XHJcblxyXG4gIGNoYW5nZUxhYmVsKGxhYmVsLCBrZXkpIHtcclxuICAgIHRoaXMub25DaGFuZ2VMYWJlbC5lbWl0KHsgbGFiZWwsIGtleSB9KVxyXG4gIH1cclxuXHJcbiAgdG9nZ2xlQ2hpcCA9IChjaGlwOiBhbnkpID0+IHtcclxuICAgIHRoaXMub25DaGVja2VkQ2hpcC5lbWl0KGNoaXApXHJcbiAgfVxyXG5cclxuICBvbkVkaXRDaGlwKGNoaXApIHtcclxuICAgIGlmIChjaGlwLnZhbHVlID09PSB0aGlzLmN1cnJlbnRDaGlwKSB7XHJcbiAgICAgIHRoaXMuY3VycmVudENoaXAgPSBcIlwiXHJcbiAgICAgIHRoaXMucHJldlZhbHVlID0gXCJcIlxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5jdXJyZW50Q2hpcCA9IGNoaXAudmFsdWU7XHJcbiAgICAgIHRoaXMucHJldlZhbHVlID0gY2hpcC52YWx1ZVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0IGNoaXBzKCkgeyByZXR1cm4gdGhpcy5jaGlwQ29udHJvbC52YWx1ZTsgfVxyXG5cclxuICBjaGVja2VkRGVmYXVsdCh2YWx1ZSkge1xyXG4gICAgdGhpcy5vbkNoZWNrZWREZWZhdWx0LmVtaXQodmFsdWUpXHJcbiAgfVxyXG5cclxuICBvblNob3dDb25kaXRpb24oZXZlbnQgPSBudWxsKSB7XHJcbiAgICBpZiAoZXZlbnQpIHtcclxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxyXG4gICAgfVxyXG4gICAgdGhpcy5zaG93Q29uZGl0aW9uID0gIXRoaXMuc2hvd0NvbmRpdGlvblxyXG4gIH1cclxuXHJcbiAgLy8gY2hlY2tlZChsb2NhdGlvblZhbHVlLHZhbHVlKXtcclxuICAvLyAgIHJldHVybiBsb2NhdGlvblZhbHVlLmluY2x1ZGVzKHZhbHVlKVxyXG4gIC8vIH1cclxuXHJcbiAgZWRpdEJMb2NrKGV2ZW50KSB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgdGhpcy5vbkVkaXRCbG9jay5lbWl0KHRydWUpO1xyXG4gIH1cclxuXHJcbiAgb25DaGFuZ2VQb3NpdGlvbih0eXBlOiBzdHJpbmcpIHtcclxuICAgIGlmICh0eXBlID09PSBcInRlbFwiKSB7XHJcbiAgICAgIHJldHVybiB7ICd0b3AnOiAnLTM3cHgnLCB9XHJcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09IFwic2VsZWN0XCIpIHtcclxuICAgICAgcmV0dXJuIHsgJ3RvcCc6ICctMjBweCcsIH1cclxuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gXCJjaGVja2JveFwiIHx8IHR5cGUgPT09IFwiY2hlY2tib3hfbXVsdGlwbGVcIikge1xyXG4gICAgICByZXR1cm4geyAndG9wJzogJy0yOXB4JywgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIHt9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcbiAgZmxhZyh2YWx1ZSkge1xyXG4gICAgY29uc3QgdmFsdWVTdHJpbmcgPSBTdHJpbmcodmFsdWUpXHJcbiAgICByZXR1cm4gdmFsdWVTdHJpbmcgJiYgaXNWYWxpZFBob25lTnVtYmVyKHZhbHVlU3RyaW5nKSA/IHBhcnNlUGhvbmVOdW1iZXIodmFsdWVTdHJpbmcpLmNvdW50cnkgOiBDb3VudHJ5SVNPLkZyYW5jZTtcclxuICB9XHJcbiAgY2hlY2tQaG9uZShwaG9uZSkge1xyXG4gICAgaWYgKHBob25lKSB7XHJcbiAgICAgIGxldCByZWdleCA9IG5ldyBSZWdFeHAoL1xcKyg5Wzk3Nl1cXGR8OFs5ODc1MzBdXFxkfDZbOTg3XVxcZHw1WzkwXVxcZHw0MlxcZHwzWzg3NV1cXGR8Mls5ODY1NDMyMV1cXGR8OVs4NTQzMjEwXXw4WzY0MjFdfDZbNjU0MzIxMF18NVs4NzY1NDMyMV18NFs5ODc2NTQzMTBdfDNbOTY0MzIxMF18Mls3MF18N3wxKVxcVypcXGRcXFcqXFxkXFxXKlxcZFxcVypcXGRcXFcqXFxkXFxXKlxcZFxcVypcXGRcXFcqXFxkXFxXKihcXGR7MSwyfSkkLylcclxuICAgICAgdGhpcy5pbnZhbGlkZVZhbHVlID0gIXJlZ2V4LnRlc3QocGhvbmVbJ2UxNjROdW1iZXInXSk7XHJcbiAgICAgIHRoaXMub25DaGVja1ZhbHVlLmVtaXQodGhpcy5pbnZhbGlkZVZhbHVlKVxyXG4gICAgfVxyXG4gICAgaWYgKHBob25lICYmIHBob25lW1wibmF0aW9uYWxOdW1iZXJcIl0gJiYgcGhvbmVbXCJuYXRpb25hbE51bWJlclwiXSAhPSAnJykge1xyXG4gICAgICBsZXQgcCA9IHBob25lWyduYXRpb25hbE51bWJlciddLnJlcGxhY2VBbGwoJyAnLCAnJyk7XHJcbiAgICAgIGxldCBuZXdwOiBhbnkgPSAnJztcclxuXHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmIChwLnNwbGl0KCcnKVtpXSkge1xyXG4gICAgICAgICAgaWYgKGkgJSAyID09IDAgJiYgaSA+IDApIHtcclxuICAgICAgICAgICAgbmV3cCArPSAnICc7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBuZXdwICs9IHAuc3BsaXQoJycpW2ldO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICB0aGlzLmZpZWxkLnZhbHVlID0gcGhvbmVbXCJuYXRpb25hbE51bWJlclwiXVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCI8ZGl2IGNsYXNzPVwiZmllbGQtaXRlbVwiICpuZ0lmPVwiIWZpZWxkLmZvcm1zIHx8IGZpZWxkLmZvcm1zLmxlbmd0aD09PTBcIj5cclxuICA8YnV0dG9uIGNsYXNzPVwidHJhbnNwYXJlbnQtYnV0dG9uIHNldHRpbmdcIiBtYXQtcmFpc2VkLWJ1dHRvbiAoY2xpY2spPVwiZWRpdEJMb2NrKCRldmVudClcIj5cclxuICAgIDxtYXQtaWNvbiBjbGFzcz1cInNldHRpbmctaWNvblwiPnNldHRpbmdzPC9tYXQtaWNvbj5cclxuICA8L2J1dHRvbj5cclxuICA8YnV0dG9uICpuZ0lmPVwiZmllbGQuaXNDb25kaXRpb25hbFwiIG1hdFRvb2x0aXA9XCJDbGlxdWVyIHBvdXIgcmVnYXJkZXIgbGEgY29uZGl0aW9uIGFwcGxpcXXDqWUgw6AgY2UgY2hhbXAhXCJcclxuICAgIGNsYXNzPVwidHJhbnNwYXJlbnQtYnV0dG9uIGNvbmRpdGlvbmFsLXZpZXdcIiBbbmdTdHlsZV09XCJvbkNoYW5nZVBvc2l0aW9uKGZpZWxkLnR5cGUpXCIgbWF0LXJhaXNlZC1idXR0b25cclxuICAgIChjbGljayk9XCJlZGl0QkxvY2soJGV2ZW50KVwiPlxyXG4gICAgPG1hdC1pY29uIGNsYXNzPVwic2V0dGluZy1pY29uXCI+aW5mb19vdXRsaW5lZDwvbWF0LWljb24+XHJcbiAgPC9idXR0b24+XHJcbiAgPG5nLWNvbnRhaW5lciBbbmdTd2l0Y2hdPVwiZmllbGQudHlwZVwiPlxyXG4gICAgPGRpdiAqbmdTd2l0Y2hDYXNlPVwiJ3RvZ2dsZSdcIiBjbGFzcz1cImZsZXgtYXV0byBmaWVsZC1zaXplIHRvZ2dsZS1idXR0b25cIj5cclxuICAgICAgPHNwYW4+e3sgZmllbGQubGFiZWwgfX08L3NwYW4+XHJcbiAgICAgIDxtYXQtc2xpZGUtdG9nZ2xlIGNsYXNzPVwiZm9ybS1maWVsZFwiIFsobmdNb2RlbCldPVwiZmllbGQuZGVmYXVsdFZhbHVlXCIgW25nTW9kZWxPcHRpb25zXT1cInsgc3RhbmRhbG9uZTogdHJ1ZSB9XCJcclxuICAgICAgICBbbmdTdHlsZV09XCJmaWVsZC5zZWxlY3RvciAmJiB7IGRpc3BsYXk6ICdpbmluZS1ibG9jaycgfVwiPlxyXG4gICAgICA8L21hdC1zbGlkZS10b2dnbGU+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgKm5nU3dpdGNoQ2FzZT1cIid0ZWwnXCIgY2xhc3M9XCJmb3JtLWZpZWxkIGZ1bGwtd2lkdGggdGVsLWlucHV0XCI+XHJcbiAgICAgIDxtYXQtbGFiZWwgY2xhc3M9XCJ0ZWwtbGFiZWxcIj57e2ZpZWxkLmxhYmVsfX08L21hdC1sYWJlbD5cclxuICAgICAgPG5neC1pbnRsLXRlbC1pbnB1dCBpZD1cIm9uYm9hcmRpbmctcGhvbmUtaW5wdXRcIiBjbGFzcz1cInBob25lLWlucHV0LXByb2ZpbGVcIiBbY3NzQ2xhc3NdPVwiJ2lucHV0LXBob25lJ1wiXHJcbiAgICAgICAgW3ByZWZlcnJlZENvdW50cmllc109XCJwcmVmZXJyZWRDb3VudHJpZXNcIiBbZW5hYmxlQXV0b0NvdW50cnlTZWxlY3RdPVwiZmFsc2VcIiBbZW5hYmxlUGxhY2Vob2xkZXJdPVwidHJ1ZVwiXHJcbiAgICAgICAgW2N1c3RvbVBsYWNlaG9sZGVyXT1cIidQaG9uZSdcIiBbc2VsZWN0Rmlyc3RDb3VudHJ5XT1cImZhbHNlXCIgW3NlbGVjdGVkQ291bnRyeUlTT109XCJmbGFnKGZpZWxkLnZhbHVlKVwiXHJcbiAgICAgICAgW21heExlbmd0aF09XCIxNVwiIFtpbnB1dElkXT1cImZpZWxkLmtleVwiIFtwaG9uZVZhbGlkYXRpb25dPVwidHJ1ZVwiIFtzZXBhcmF0ZURpYWxDb2RlXT1cInNlcGFyYXRlRGlhbENvZGVcIlxyXG4gICAgICAgIFtudW1iZXJGb3JtYXRdPVwiUGhvbmVOdW1iZXJGb3JtYXQuTmF0aW9uYWxcIiBuYW1lPVwicGhvbmVcIiAoaW5wdXQpPVwiY2hlY2tQaG9uZShmaWVsZC52YWx1ZSlcIlxyXG4gICAgICAgIFtuZ01vZGVsT3B0aW9uc109XCJ7c3RhbmRhbG9uZTogdHJ1ZX1cIiBbKG5nTW9kZWwpXT1cImZpZWxkLnZhbHVlXCI+XHJcbiAgICAgIDwvbmd4LWludGwtdGVsLWlucHV0PlxyXG4gICAgICA8bWF0LWVycm9yICpuZ0lmPVwiaW52YWxpZGVWYWx1ZVwiPkxlIHTDqWzDqXBob25lIGVzdCBpbnZhbGlkZTwvbWF0LWVycm9yPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2ICpuZ1N3aXRjaENhc2U9XCInY2hlY2tib3gnXCIgY2xhc3M9XCJmbGV4LWF1dG8gZmllbGQtc2l6ZVwiPlxyXG4gICAgICA8bWF0LWNoZWNrYm94IGNsYXNzPVwiZm9ybS1maWVsZFwiIFsobmdNb2RlbCldPVwiZmllbGQudmFsdWVcIiBbbmdNb2RlbE9wdGlvbnNdPVwieyBzdGFuZGFsb25lOiB0cnVlIH1cIlxyXG4gICAgICAgIFtuZ1N0eWxlXT1cImZpZWxkLnNlbGVjdG9yICYmIHsgZGlzcGxheTogJ2luaW5lLWJsb2NrJyB9XCI+XHJcbiAgICAgICAge3sgZmllbGQubGFiZWwgfX1cclxuICAgICAgPC9tYXQtY2hlY2tib3g+XHJcbiAgICAgIDxtYXQtc2VsZWN0IHBsYWNlaG9sZGVyPVwiQ29tcGFueVwiIFsobmdNb2RlbCldPVwiZmllbGQuc2VsZWN0b3IudmFsdWVcIiBbbmdNb2RlbE9wdGlvbnNdPVwieyBzdGFuZGFsb25lOiB0cnVlIH1cIlxyXG4gICAgICAgICpuZ0lmPVwiZmllbGQuc2VsZWN0b3JcIiBzdHlsZT1cImRpc3BsYXk6IGlubGluZS1ibG9jazsgd2lkdGg6IDUwJVwiPlxyXG4gICAgICAgIDxtYXQtb3B0aW9uICpuZ0Zvcj1cImxldCBzZWxlY3Qgb2YgZmllbGQuc2VsZWN0b3IuZGVmYXVsdFZhbHVlXCIgW3ZhbHVlXT1cInNlbGVjdC52YWx1ZVwiPiB7eyBzZWxlY3QudmFsdWUgfX1cclxuICAgICAgICA8L21hdC1vcHRpb24+XHJcbiAgICAgIDwvbWF0LXNlbGVjdD5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiAqbmdTd2l0Y2hDYXNlPVwiJ2NoZWNrYm94X211bHRpcGxlJ1wiIGNsYXNzPVwiZmxleC1hdXRvIGZpZWxkLXNpemVcIiBzdHlsZT1cIndpZHRoOiAxMDAlO1wiPlxyXG4gICAgICA8bGFiZWw+e3sgZmllbGQubGFiZWwgfX08L2xhYmVsPlxyXG4gICAgICA8ZGl2IHN0eWxlPVwibWFyZ2luLXRvcDogMjBweFwiIGNsYXNzPVwib25ib2FyZGluZy1zZWxlY3RcIj5cclxuICAgICAgICA8bWF0LWNoZWNrYm94IGNsYXNzPVwiZm9ybS1maWVsZFwiXHJcbiAgICAgICAgICBzdHlsZT1cImRpc3BsYXk6IGJsb2NrOyBtYXJnaW4tYm90dG9tOiA1cHg7IG1hcmdpbi10b3A6IDEwcHg7IG1hcmdpbi1yaWdodDogMTBweDtcIlxyXG4gICAgICAgICAgKm5nRm9yPVwibGV0IG9wdCBvZiBmaWVsZC5kZWZhdWx0VmFsdWVcIiBbY2hlY2tlZF09XCJvcHQuY2hlY2tlZFwiIFsobmdNb2RlbCldPVwib3B0LmNoZWNrZWRcIlxyXG4gICAgICAgICAgW25nTW9kZWxPcHRpb25zXT1cInsgc3RhbmRhbG9uZTogdHJ1ZSB9XCI+XHJcbiAgICAgICAgICB7eyBvcHQudmFsdWUgfX1cclxuICAgICAgICA8L21hdC1jaGVja2JveD5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgKm5nU3dpdGNoQ2FzZT1cIidyYWRpbydcIiBjbGFzcz1cImZsZXgtYXV0byBmaWVsZC1zaXplXCI+XHJcbiAgICAgIDxsYWJlbCBzdHlsZT1cImRpc3BsYXk6IGJsb2NrXCI+IHt7IGZpZWxkLmxhYmVsIH19IDwvbGFiZWw+XHJcbiAgICAgIDxtYXQtcmFkaW8tZ3JvdXAgY2xhc3M9XCJmb3JtLWZpZWxkIHJhZGlvLWdyb3VwIGZpZWxkLXNpemUgb25ib2FyZGluZy1zZWxlY3RcIiBbKG5nTW9kZWwpXT1cImZpZWxkLnZhbHVlXCJcclxuICAgICAgICBbcmVxdWlyZWRdPVwiZmllbGQuaXNNYW5kYXRvcnlcIiBhcmlhLWxhYmVsPVwiU2VsZWN0IGFuIG9wdGlvblwiPlxyXG4gICAgICAgIDxtYXQtcmFkaW8tYnV0dG9uICpuZ0Zvcj1cImxldCBvcHQgb2YgZmllbGQuZGVmYXVsdFZhbHVlXCIgc3R5bGU9XCJtYXJnaW4tYm90dG9tOiAyMHB4O1wiIFt2YWx1ZV09XCJvcHQudmFsdWVcIj57e1xyXG4gICAgICAgICAgb3B0LnZhbHVlIH19IDwvbWF0LXJhZGlvLWJ1dHRvbj5cclxuICAgICAgPC9tYXQtcmFkaW8tZ3JvdXA+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgKm5nU3dpdGNoQ2FzZT1cIidzZWxlY3QnXCIgY2xhc3M9XCJmbGV4LWF1dG8gZmllbGQtc2l6ZSBzZWxlY3QtY29udGVudFwiPlxyXG4gICAgICA8bWF0LWZvcm0tZmllbGQgY2xhc3M9XCJtYXQtc2VsZWN0IGZsZXgtYXV0byBmaWVsZC1zaXplXCIgYXBwZWFyYW5jZT1cIm91dGxpbmVcIj5cclxuICAgICAgICA8bWF0LWxhYmVsPiB7eyBmaWVsZC5sYWJlbCB9fSA8L21hdC1sYWJlbD5cclxuICAgICAgICA8bWF0LXNlbGVjdCBbKG5nTW9kZWwpXT1cImZpZWxkLnZhbHVlXCIgW25nTW9kZWxPcHRpb25zXT1cInsgc3RhbmRhbG9uZTogdHJ1ZSB9XCI+XHJcbiAgICAgICAgICA8bWF0LW9wdGlvbiAqbmdGb3I9XCJsZXQgb3B0IG9mIGZpZWxkLmRlZmF1bHRWYWx1ZVwiIFt2YWx1ZV09XCJvcHQudmFsdWVcIj57eyBvcHQudmFsdWUgfX08L21hdC1vcHRpb24+XHJcbiAgICAgICAgPC9tYXQtc2VsZWN0PlxyXG4gICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2ICpuZ1N3aXRjaENhc2U9XCInbm9uZSdcIiBjbGFzcz1cImZsZXgtYXV0byBmaWVsZC1zaXplIHNlbGVjdC1jb250ZW50XCIgc3R5bGU9XCJvcGFjaXR5OjAgO1wiPlxyXG4gICAgICA8bWF0LWZvcm0tZmllbGQgY2xhc3M9XCJtYXQtc2VsZWN0IGZsZXgtYXV0byBmaWVsZC1zaXplXCIgYXBwZWFyYW5jZT1cIm91dGxpbmVcIj5cclxuICAgICAgICA8bWF0LWxhYmVsPjwvbWF0LWxhYmVsPlxyXG4gICAgICAgIDxpbnB1dCBbdHlwZV09XCJmaWVsZC50eXBlXCIgZGlzYWJsZWQ9XCJ0cnVlXCIgbWF0SW5wdXQgLz5cclxuICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgIDwvZGl2PlxyXG4gICAgPG1hdC1mb3JtLWZpZWxkICpuZ1N3aXRjaENhc2U9XCInZGF0ZSdcIiBjbGFzcz1cImZvcm0tZmllbGQgZmllbGQtc2l6ZVwiIGFwcGVhcmFuY2U9XCJvdXRsaW5lXCI+XHJcbiAgICAgIDxtYXQtbGFiZWw+e3tmaWVsZC5sYWJlbH19PC9tYXQtbGFiZWw+XHJcbiAgICAgIDxpbnB1dCBtYXRJbnB1dCBbbWF0RGF0ZXBpY2tlcl09XCJwaWNrZXJcIiBbbmdNb2RlbE9wdGlvbnNdPVwieyBzdGFuZGFsb25lOiB0cnVlIH1cIiBbKG5nTW9kZWwpXT1cImZpZWxkLmRlZmF1bHRWYWx1ZVwiPlxyXG4gICAgICA8bWF0LWRhdGVwaWNrZXItdG9nZ2xlIG1hdFN1ZmZpeCBbZm9yXT1cInBpY2tlclwiPjwvbWF0LWRhdGVwaWNrZXItdG9nZ2xlPlxyXG4gICAgICA8bWF0LWRhdGVwaWNrZXIgI3BpY2tlcj48L21hdC1kYXRlcGlja2VyPlxyXG4gICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgIDxtYXQtZm9ybS1maWVsZCBbY2xhc3MuYmxpbmtdPVwiYmxpbmtcIiAqbmdTd2l0Y2hEZWZhdWx0IGNsYXNzPVwiZm9ybS1maWVsZCBmaWVsZC1zaXplXCIgYXBwZWFyYW5jZT1cIm91dGxpbmVcIj5cclxuICAgICAgPG1hdC1sYWJlbD57eyBmaWVsZC5sYWJlbCB9fTwvbWF0LWxhYmVsPlxyXG4gICAgICA8aW5wdXQgW3R5cGVdPVwiZmllbGQudHlwZVwiIG1hdElucHV0IFtuZ01vZGVsT3B0aW9uc109XCJ7IHN0YW5kYWxvbmU6IHRydWUgfVwiIFsobmdNb2RlbCldPVwiZmllbGQuZGVmYXVsdFZhbHVlXCJcclxuICAgICAgICBwbGFjZWhvbGRlcj1cIlwiIC8+XHJcbiAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gIDwvbmctY29udGFpbmVyPlxyXG48L2Rpdj5cclxuXHJcbjxuZy1jb250ZW50IHNlbGVjdD1cIi5jaGlsZFwiPjwvbmctY29udGVudD4iXX0=