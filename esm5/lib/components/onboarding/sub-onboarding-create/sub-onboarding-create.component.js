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
var _c0 = function () { return { standalone: true }; };
var _c1 = function () { return { display: "inine-block" }; };
function SubOnboardingCreateComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    var _r905 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 8);
    i0.ɵɵelementStart(1, "span");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "mat-slide-toggle", 9);
    i0.ɵɵlistener("ngModelChange", function SubOnboardingCreateComponent_div_2_Template_mat_slide_toggle_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r905); var ctx_r904 = i0.ɵɵnextContext(); return ctx_r904.field.defaultValue = $event; });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r896 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r896.field.label);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", ctx_r896.field.defaultValue)("ngModelOptions", i0.ɵɵpureFunction0(4, _c0))("ngStyle", ctx_r896.field.selector && i0.ɵɵpureFunction0(5, _c1));
} }
function SubOnboardingCreateComponent_div_3_mat_select_3_mat_option_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 15);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var select_r908 = ctx.$implicit;
    i0.ɵɵproperty("value", select_r908.value);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", select_r908.value, "");
} }
function SubOnboardingCreateComponent_div_3_mat_select_3_Template(rf, ctx) { if (rf & 1) {
    var _r910 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-select", 13);
    i0.ɵɵlistener("ngModelChange", function SubOnboardingCreateComponent_div_3_mat_select_3_Template_mat_select_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r910); var ctx_r909 = i0.ɵɵnextContext(2); return ctx_r909.field.selector.value = $event; });
    i0.ɵɵtemplate(1, SubOnboardingCreateComponent_div_3_mat_select_3_mat_option_1_Template, 2, 2, "mat-option", 14);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r906 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngModel", ctx_r906.field.selector.value)("ngModelOptions", i0.ɵɵpureFunction0(3, _c0));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r906.field.selector.defaultValue);
} }
var _c2 = function () { return { "display": "inine-block" }; };
function SubOnboardingCreateComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    var _r912 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 10);
    i0.ɵɵelementStart(1, "mat-checkbox", 11);
    i0.ɵɵlistener("ngModelChange", function SubOnboardingCreateComponent_div_3_Template_mat_checkbox_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r912); var ctx_r911 = i0.ɵɵnextContext(); return ctx_r911.field.value = $event; });
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, SubOnboardingCreateComponent_div_3_mat_select_3_Template, 2, 4, "mat-select", 12);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r897 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵclassMap(ctx_r897.checkSubForm(ctx_r897.field) ? "checkbox-title-active" : "");
    i0.ɵɵproperty("ngModel", ctx_r897.field.value)("required", ctx_r897.field.isMandatory)("ngModelOptions", i0.ɵɵpureFunction0(8, _c0))("ngStyle", ctx_r897.field.selector && i0.ɵɵpureFunction0(9, _c2));
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r897.field.label, " ");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r897.field.selector);
} }
function SubOnboardingCreateComponent_div_4_mat_checkbox_4_Template(rf, ctx) { if (rf & 1) {
    var _r916 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-checkbox", 18);
    i0.ɵɵlistener("ngModelChange", function SubOnboardingCreateComponent_div_4_mat_checkbox_4_Template_mat_checkbox_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r916); var opt_r914 = ctx.$implicit; return opt_r914.checked = $event; });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var opt_r914 = ctx.$implicit;
    var ctx_r913 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("checked", opt_r914.checked)("ngModel", opt_r914.checked)("required", ctx_r913.field.isMandatory)("ngModelOptions", i0.ɵɵpureFunction0(5, _c0));
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", opt_r914.value, " ");
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
    var ctx_r898 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r898.field.label);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r898.field.defaultValue);
} }
function SubOnboardingCreateComponent_div_5_mat_radio_button_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-radio-button", 15);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var opt_r919 = ctx.$implicit;
    i0.ɵɵproperty("value", opt_r919.value);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1("", opt_r919.value, " ");
} }
function SubOnboardingCreateComponent_div_5_mat_form_field_5_Template(rf, ctx) { if (rf & 1) {
    var _r921 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-form-field", 23);
    i0.ɵɵelementStart(1, "mat-label");
    i0.ɵɵtext(2, "Autre option");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "input", 24);
    i0.ɵɵlistener("ngModelChange", function SubOnboardingCreateComponent_div_5_mat_form_field_5_Template_input_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r921); var ctx_r920 = i0.ɵɵnextContext(2); return ctx_r920.field.otherValue = $event; });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r918 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("required", ctx_r918.field.isMandatory)("ngModelOptions", i0.ɵɵpureFunction0(3, _c0))("ngModel", ctx_r918.field.otherValue);
} }
function SubOnboardingCreateComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    var _r923 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 19);
    i0.ɵɵelementStart(1, "label", 20);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "mat-radio-group", 21);
    i0.ɵɵlistener("ngModelChange", function SubOnboardingCreateComponent_div_5_Template_mat_radio_group_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r923); var ctx_r922 = i0.ɵɵnextContext(); return ctx_r922.field.value = $event; });
    i0.ɵɵtemplate(4, SubOnboardingCreateComponent_div_5_mat_radio_button_4_Template, 2, 2, "mat-radio-button", 14);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(5, SubOnboardingCreateComponent_div_5_mat_form_field_5_Template, 4, 4, "mat-form-field", 22);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r899 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r899.field.label, " ");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", ctx_r899.field.value)("required", ctx_r899.field.isMandatory);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r899.field.defaultValue);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", "autre" === ctx_r899.formatOther(ctx_r899.field.value));
} }
function SubOnboardingCreateComponent_div_6_mat_option_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 15);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var opt_r926 = ctx.$implicit;
    i0.ɵɵproperty("value", opt_r926.value);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", opt_r926.value, "");
} }
function SubOnboardingCreateComponent_div_6_mat_form_field_6_Template(rf, ctx) { if (rf & 1) {
    var _r928 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-form-field", 23);
    i0.ɵɵelementStart(1, "mat-label");
    i0.ɵɵtext(2, "Autre option");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "input", 24);
    i0.ɵɵlistener("ngModelChange", function SubOnboardingCreateComponent_div_6_mat_form_field_6_Template_input_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r928); var ctx_r927 = i0.ɵɵnextContext(2); return ctx_r927.field.otherValue = $event; });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r925 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("required", ctx_r925.field.isMandatory)("ngModelOptions", i0.ɵɵpureFunction0(3, _c0))("ngModel", ctx_r925.field.otherValue);
} }
function SubOnboardingCreateComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    var _r930 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 19);
    i0.ɵɵelementStart(1, "mat-form-field", 25);
    i0.ɵɵelementStart(2, "mat-label");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "mat-select", 26);
    i0.ɵɵlistener("ngModelChange", function SubOnboardingCreateComponent_div_6_Template_mat_select_ngModelChange_4_listener($event) { i0.ɵɵrestoreView(_r930); var ctx_r929 = i0.ɵɵnextContext(); return ctx_r929.field.value = $event; });
    i0.ɵɵtemplate(5, SubOnboardingCreateComponent_div_6_mat_option_5_Template, 2, 2, "mat-option", 14);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(6, SubOnboardingCreateComponent_div_6_mat_form_field_6_Template, 4, 4, "mat-form-field", 22);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r900 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", ctx_r900.field.label, " ");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", ctx_r900.field.value)("ngModelOptions", i0.ɵɵpureFunction0(6, _c0))("required", ctx_r900.field.isMandatory);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r900.field.defaultValue);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", "autre" === ctx_r900.formatOther(ctx_r900.field.value));
} }
function SubOnboardingCreateComponent_mat_form_field_7_Template(rf, ctx) { if (rf & 1) {
    var _r932 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-form-field", 27);
    i0.ɵɵelementStart(1, "mat-label");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "textarea", 28);
    i0.ɵɵlistener("ngModelChange", function SubOnboardingCreateComponent_mat_form_field_7_Template_textarea_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r932); var ctx_r931 = i0.ɵɵnextContext(); return ctx_r931.field.value = $event; });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r901 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r901.field.label);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("required", ctx_r901.field.isMandatory)("ngModelOptions", i0.ɵɵpureFunction0(4, _c0))("ngModel", ctx_r901.field.value);
} }
function SubOnboardingCreateComponent_div_8_mat_error_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-error");
    i0.ɵɵtext(1, "Le t\u00E9l\u00E9phone est invalide");
    i0.ɵɵelementEnd();
} }
function SubOnboardingCreateComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    var _r935 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 29);
    i0.ɵɵelementStart(1, "mat-label", 30);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "ngx-intl-tel-input", 31);
    i0.ɵɵlistener("input", function SubOnboardingCreateComponent_div_8_Template_ngx_intl_tel_input_input_3_listener() { i0.ɵɵrestoreView(_r935); var ctx_r934 = i0.ɵɵnextContext(); return ctx_r934.checkPhone(ctx_r934.field.value); })("ngModelChange", function SubOnboardingCreateComponent_div_8_Template_ngx_intl_tel_input_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r935); var ctx_r936 = i0.ɵɵnextContext(); return ctx_r936.field.value = $event; });
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(4, SubOnboardingCreateComponent_div_8_mat_error_4_Template, 2, 0, "mat-error", 32);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r902 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r902.field.label);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("cssClass", "input-phone")("preferredCountries", ctx_r902.preferredCountries)("enableAutoCountrySelect", false)("enablePlaceholder", true)("customPlaceholder", "Phone")("selectFirstCountry", false)("selectedCountryISO", ctx_r902.flag(ctx_r902.field.value))("maxLength", 15)("inputId", ctx_r902.field.key)("phoneValidation", true)("separateDialCode", ctx_r902.separateDialCode)("numberFormat", ctx_r902.PhoneNumberFormat.National)("ngModelOptions", i0.ɵɵpureFunction0(16, _c0))("ngModel", ctx_r902.field.value);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r902.invalideValue);
} }
function SubOnboardingCreateComponent_mat_form_field_9_Template(rf, ctx) { if (rf & 1) {
    var _r938 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-form-field", 33);
    i0.ɵɵelementStart(1, "mat-label");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "input", 34);
    i0.ɵɵlistener("ngModelChange", function SubOnboardingCreateComponent_mat_form_field_9_Template_input_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r938); var ctx_r937 = i0.ɵɵnextContext(); return ctx_r937.field.value = $event; });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r903 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r903.field.label);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("type", ctx_r903.field.type)("required", ctx_r903.field.isMandatory)("ngModelOptions", i0.ɵɵpureFunction0(5, _c0))("ngModel", ctx_r903.field.value);
} }
var _c3 = [[["", 8, "child"]]];
var _c4 = [".child"];
var SubOnboardingCreateComponent = /** @class */ (function () {
    function SubOnboardingCreateComponent() {
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
        this.onCheckValue = new EventEmitter();
        this.chipControl = new FormControl(new Set());
        this.preferredCountries = [CountryISO.UnitedStates, CountryISO.France];
        this.PhoneNumberFormat = PhoneNumberFormat;
        this.separatorKeysCodes = [ENTER, COMMA, SEMICOLON];
        this.invalideValue = false;
        this.currentChip = "";
        this.separateDialCode = false;
        this.prevValue = "";
        this.toggleChip = function (chip) {
            _this.onCheckedChip.emit(chip);
            // const addChip = () => { this.chips.add(chip); };
            // const removeChip = () => { this.chips.delete(chip); };
            // this.chips.has(chip) ? removeChip() : addChip();
        };
    }
    SubOnboardingCreateComponent.prototype.ngOnInit = function () {
    };
    SubOnboardingCreateComponent.prototype.drop = function (event) {
        this.onDrop.emit(event);
    };
    SubOnboardingCreateComponent.prototype.addKeywordFromInput = function (event, i, j) {
        this.onAddKeywordFromInput.emit({ event: event, prev: this.prevValue, i: i, j: j });
    };
    SubOnboardingCreateComponent.prototype.keyUp = function (event, i, j) {
        this.onKeyPress.emit({ event: event, i: i, j: j });
    };
    SubOnboardingCreateComponent.prototype.addNewField = function (event, i) {
        event.preventDefault();
        this.onAddNewField.emit({ event: event, i: i });
    };
    SubOnboardingCreateComponent.prototype.removeField = function (event, i, j) {
        event.preventDefault();
        this.onRemoveField.emit({ i: i, j: j });
    };
    SubOnboardingCreateComponent.prototype.changeType = function (type, i, j) {
        this.onChangeType.emit({ type: type, i: i, j: j });
    };
    SubOnboardingCreateComponent.prototype.removeKeyword = function (event, i, j) {
        this.onRemoveKeyword.emit({ event: event, i: i, j: j });
    };
    SubOnboardingCreateComponent.prototype.addNewSubLevelField = function (e) {
        e.preventDefault();
        this.onAddNewSubLevelField.emit(true);
    };
    SubOnboardingCreateComponent.prototype.expendMore = function (e, field) {
        e.preventDefault();
        this.onExpendMore.emit({ expand: true, field: field });
    };
    SubOnboardingCreateComponent.prototype.ingoreDefaultAction = function (e) {
        e.preventDefault();
    };
    SubOnboardingCreateComponent.prototype.changeLabel = function (label, key) {
        this.onChangeLabel.emit({ label: label, key: key });
    };
    SubOnboardingCreateComponent.prototype.onEditChip = function (chip) {
        if (chip.value === this.currentChip) {
            this.currentChip = "";
            this.prevValue = "";
        }
        else {
            this.currentChip = chip.value;
            this.prevValue = chip.value;
        }
    };
    Object.defineProperty(SubOnboardingCreateComponent.prototype, "chips", {
        get: function () { return this.chipControl.value; },
        enumerable: true,
        configurable: true
    });
    SubOnboardingCreateComponent.prototype.formatOther = function (other) {
        var _a;
        if (other && typeof other !== 'boolean') {
            return (((_a = other) === null || _a === void 0 ? void 0 : _a.toLocaleLowerCase()) || '');
        }
        return '';
    };
    SubOnboardingCreateComponent.prototype.checkSubForm = function (forms) {
        var hasSubForm = false;
        if (forms.forms && forms.forms.length) {
            hasSubForm = true;
        }
        return hasSubForm;
    };
    SubOnboardingCreateComponent.prototype.flag = function (value) {
        var valueString = String(value);
        return valueString && isValidPhoneNumber(valueString) ? parsePhoneNumber(valueString).country : CountryISO.France;
    };
    SubOnboardingCreateComponent.prototype.checkPhone = function (phone) {
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
    SubOnboardingCreateComponent.ɵfac = function SubOnboardingCreateComponent_Factory(t) { return new (t || SubOnboardingCreateComponent)(); };
    SubOnboardingCreateComponent.ɵcmp = i0.ɵɵdefineComponent({ type: SubOnboardingCreateComponent, selectors: [["lib-sub-create-onboarding"]], inputs: { field: "field", length: "length", i: "i", j: "j" }, outputs: { onAddKeywordFromInput: "onAddKeywordFromInput", onKeyPress: "onKeyPress", onDrop: "onDrop", onAddNewField: "onAddNewField", onRemoveField: "onRemoveField", onChangeType: "onChangeType", onRemoveKeyword: "onRemoveKeyword", onAddNewSubLevelField: "onAddNewSubLevelField", onExpendMore: "onExpendMore", onChangeLabel: "onChangeLabel", onCheckedChip: "onCheckedChip", onCheckValue: "onCheckValue" }, ngContentSelectors: _c4, decls: 11, vars: 8, consts: [[1, "field-item"], [3, "ngSwitch"], ["class", "flex-auto field-size toggle-button", 4, "ngSwitchCase"], ["class", "flex-auto w-30", 4, "ngSwitchCase"], ["class", "flex-auto w-30 field-size", 4, "ngSwitchCase"], ["class", "form-field full-width", "appearance", "outline", 4, "ngSwitchCase"], ["class", "form-field full-width tel-input", 4, "ngSwitchCase"], ["class", "form-field field-size", "appearance", "outline", 4, "ngSwitchDefault"], [1, "flex-auto", "field-size", "toggle-button"], [1, "form-field", 3, "ngModel", "ngModelOptions", "ngStyle", "ngModelChange"], [1, "flex-auto", "w-30"], [1, "form-field", 3, "ngModel", "required", "ngModelOptions", "ngStyle", "ngModelChange"], ["placeholder", "Company", "required", "", "style", "display: inline-block; width: 50%;", 3, "ngModel", "ngModelOptions", "ngModelChange", 4, "ngIf"], ["placeholder", "Company", "required", "", 2, "display", "inline-block", "width", "50%", 3, "ngModel", "ngModelOptions", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], [1, "onboarding-select", 2, "margin-top", "20px"], ["class", "form-field", "style", "display: block; margin-bottom: 5px; margin-top: 10px", 3, "checked", "ngModel", "required", "ngModelOptions", "ngModelChange", 4, "ngFor", "ngForOf"], [1, "form-field", 2, "display", "block", "margin-bottom", "5px", "margin-top", "10px", 3, "checked", "ngModel", "required", "ngModelOptions", "ngModelChange"], [1, "flex-auto", "w-30", "field-size"], [2, "display", "block"], ["aria-label", "Select an option", 1, "form-field", "radio-group", "field-size", 3, "ngModel", "required", "ngModelChange"], ["class", "form-field field-size other-option", "appearance", "outline", 4, "ngIf"], ["appearance", "outline", 1, "form-field", "field-size", "other-option"], ["type", "text", "matInput", "", "placeholder", "", 3, "required", "ngModelOptions", "ngModel", "ngModelChange"], ["appearance", "outline", 1, "flex-auto", "w-30", "field-size"], [3, "ngModel", "ngModelOptions", "required", "ngModelChange"], ["appearance", "outline", 1, "form-field", "full-width"], ["type", "text", "rows", "5", "matInput", "", "placeholder", "Description...", 3, "required", "ngModelOptions", "ngModel", "ngModelChange"], [1, "form-field", "full-width", "tel-input"], [1, "tel-label"], ["id", "onboarding-phone-input", "name", "phone", 1, "phone-input-profile", 3, "cssClass", "preferredCountries", "enableAutoCountrySelect", "enablePlaceholder", "customPlaceholder", "selectFirstCountry", "selectedCountryISO", "maxLength", "inputId", "phoneValidation", "separateDialCode", "numberFormat", "ngModelOptions", "ngModel", "input", "ngModelChange"], [4, "ngIf"], ["appearance", "outline", 1, "form-field", "field-size"], ["matInput", "", "placeholder", "", 3, "type", "required", "ngModelOptions", "ngModel", "ngModelChange"]], template: function SubOnboardingCreateComponent_Template(rf, ctx) { if (rf & 1) {
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
        } }, directives: [i1.NgSwitch, i1.NgSwitchCase, i1.NgSwitchDefault, i2.MatSlideToggle, i3.NgControlStatus, i3.NgModel, i4.NativeElementInjectorDirective, i1.NgStyle, i5.MatCheckbox, i5.MatCheckboxRequiredValidator, i3.RequiredValidator, i1.NgIf, i6.MatSelect, i1.NgForOf, i7.MatOption, i8.MatRadioGroup, i8.MatRadioButton, i9.MatFormField, i9.MatLabel, i10.MatInput, i3.DefaultValueAccessor, i4.NgxIntlTelInputComponent, i9.MatError], styles: [".container[_ngcontent-%COMP%]{max-width:98%;margin:50px auto auto;padding-bottom:50px}.container[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:space-between}.input-category-name[_ngcontent-%COMP%]{font-size:15px;font-weight:500}.full-width[_ngcontent-%COMP%]{width:100%}.field-item[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;width:100%;flex-wrap:wrap;min-width:250px;position:relative}.field-item[_ngcontent-%COMP%]   .button-action[_ngcontent-%COMP%]{background-color:#6fe8d7;height:100%;margin:auto 15px auto auto;display:flex}.field-item[_ngcontent-%COMP%]   .button-action[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{box-shadow:none;background-color:transparent;color:#fff}.field-action[_ngcontent-%COMP%]{width:10%}.field-size[_ngcontent-%COMP%]   mat-checkbox[_ngcontent-%COMP%]{margin:20px}hr[_ngcontent-%COMP%]{margin:50px 0}  .mat-form-field-appearance-fill .mat-form-field-flex{background-color:#fff}.category-action[_ngcontent-%COMP%]{display:flex;width:100%}.delete-field[_ngcontent-%COMP%]{margin:auto 2%}.radio-group[_ngcontent-%COMP%]   .mat-radio-button[_ngcontent-%COMP%]{margin-right:10px}.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary[_ngcontent-%COMP%]{background-color:#3f51b5;color:#fff;min-height:20px;font-size:10px}.move-icons[_ngcontent-%COMP%]{cursor:move}.category-item[_ngcontent-%COMP%]{display:flex;align-items:baseline;width:100%;border:1px solid #dce4e9;border-radius:8px}  .readonly.mat-form-field-appearance-outline .mat-form-field-outline{color:transparent!important}.field-content[_ngcontent-%COMP%]{width:100%}.cdk-drag-preview[_ngcontent-%COMP%]{box-sizing:border-box;border-radius:4px;box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.cdk-drag-placeholder[_ngcontent-%COMP%]{opacity:0}.cdk-drag-animating[_ngcontent-%COMP%], .example-list.cdk-drop-list-dragging[_ngcontent-%COMP%]   .category-item[_ngcontent-%COMP%]:not(.cdk-drag-placeholder){transition:transform 250ms cubic-bezier(0,0,.2,1)}.add-button-container[_ngcontent-%COMP%]{background:no-repeat padding-box #fff;border:1px dashed #dce4e9;border-radius:8px;margin-top:10px;padding:10px;display:flex;justify-content:center;align-items:center;width:98%;margin-left:0;margin-bottom:22px}.add-button-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{display:flex;align-items:center;background-color:transparent;border:none;cursor:pointer;font:17px/26px Nexa Text;letter-spacing:0;color:#c2c8d5;box-shadow:none}.expand-button[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%]{font-size:48px;margin-top:-20px;margin-right:15px}.transparent-button[_ngcontent-%COMP%]{background-color:transparent!important;box-shadow:none!important;width:40px!important;padding:0!important;margin:0!important;min-width:auto!important}.expand-button[_ngcontent-%COMP%]{color:#5a607f!important;background-color:transparent!important;box-shadow:none!important}.checkbox-title-active[_ngcontent-%COMP%]{font-weight:700}.other-option[_ngcontent-%COMP%]{margin-left:10px}.flex-auto[_ngcontent-%COMP%]{width:100%}  .country-dropdown{min-width:unset!important}  .tel-input{position:relative}  .tel-input .tel-label{font-size:10px;color:rgba(0,0,0,.6);position:absolute;z-index:1;background-color:#fff;padding:0 2px;left:8px;top:-7px}  .phone-input-profile{padding-bottom:.3em;padding-top:0;display:block!important;max-width:100%;font:14px/20px \"Nexa Text\"!important;width:100%}  .phone-input-profile .iti{width:100%!important}  .phone-input-profile input{outline:0;padding:19px;border-radius:5px;border-width:1px;width:100%;border:1px solid rgba(0,0,0,.12)}.toggle-button[_ngcontent-%COMP%]{padding-top:15px;display:flex;align-items:center}.toggle-button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin-right:10px}.onboarding-select[_ngcontent-%COMP%]{display:-ms-grid;display:grid;-ms-grid-columns:(1fr)[6];grid-template-columns:repeat(6,1fr)}"] });
    return SubOnboardingCreateComponent;
}());
export { SubOnboardingCreateComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3ViLW9uYm9hcmRpbmctY3JlYXRlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL29uYm9hcmRpbmcvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9vbmJvYXJkaW5nL3N1Yi1vbmJvYXJkaW5nLWNyZWF0ZS9zdWItb25ib2FyZGluZy1jcmVhdGUuY29tcG9uZW50LnRzIiwibGliL2NvbXBvbmVudHMvb25ib2FyZGluZy9zdWItb25ib2FyZGluZy1jcmVhdGUvc3ViLW9uYm9hcmRpbmctY3JlYXRlLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDL0UsT0FBTyxFQUFFLFVBQVUsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ25FLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRXpFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7OztJQ0hyQyw4QkFDSTtJQUFBLDRCQUFNO0lBQUEsWUFBaUI7SUFBQSxpQkFBTztJQUM5QiwyQ0FFbUI7SUFGa0IsbVBBQWdDO0lBRXJFLGlCQUFtQjtJQUN2QixpQkFBTTs7O0lBSkksZUFBaUI7SUFBakIsMENBQWlCO0lBQ2MsZUFBZ0M7SUFBaEMscURBQWdDLDhDQUFBLGtFQUFBOzs7SUFjakUsc0NBQ0k7SUFBQSxZQUFnQjtJQUFBLGlCQUFhOzs7SUFEOEIseUNBQXNCO0lBQ2pGLGVBQWdCO0lBQWhCLGlEQUFnQjs7OztJQUh4QixzQ0FFSTtJQUY4Qiw2UEFBa0M7SUFFaEUsK0dBQ0k7SUFDUixpQkFBYTs7O0lBSnFCLHVEQUFrQyw4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STtZQUtKLDhFQUNJO1lBYUosNkVBQ0k7WUFTSiw2RUFDSTtZQWFKLDZFQUNJO1lBZUosbUdBQ0k7WUFJSiw4RUFDSTtZQVdKLG1HQUNJO1lBSVIsMEJBQWU7WUFDbkIsaUJBQU07WUFDTixtQkFBNEI7O1lBckZWLGVBQXVCO1lBQXZCLHlDQUF1QjtZQUM1QixlQUF3QjtZQUF4Qix1Q0FBd0I7WUFNeEIsZUFBMEI7WUFBMUIseUNBQTBCO1lBYzFCLGVBQW1DO1lBQW5DLGtEQUFtQztZQVVuQyxlQUF1QjtZQUF2QixzQ0FBdUI7WUFjdkIsZUFBd0I7WUFBeEIsdUNBQXdCO1lBZ0JiLGVBQTBCO1lBQTFCLHlDQUEwQjtZQUtyQyxlQUFxQjtZQUFyQixvQ0FBcUI7O3VDRG5FbEM7Q0F3SkMsQUFqSkQsSUFpSkM7U0E1SVksNEJBQTRCO2tEQUE1Qiw0QkFBNEI7Y0FMeEMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSwyQkFBMkI7Z0JBQ3JDLFdBQVcsRUFBRSx3Q0FBd0M7Z0JBQ3JELFNBQVMsRUFBRSxDQUFDLHdDQUF3QyxDQUFDO2FBQ3REOztrQkFFRSxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxNQUFNOztrQkFDTixNQUFNOztrQkFDTixNQUFNOztrQkFDTixNQUFNOztrQkFDTixNQUFNOztrQkFDTixNQUFNOztrQkFDTixNQUFNOztrQkFDTixNQUFNOztrQkFDTixNQUFNOztrQkFDTixNQUFNOztrQkFDTixNQUFNOztrQkFDTixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ09NTUEsIEVOVEVSLCBTRU1JQ09MT04gfSBmcm9tICdAYW5ndWxhci9jZGsva2V5Y29kZXMnO1xyXG5pbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvdW50cnlJU08sIFBob25lTnVtYmVyRm9ybWF0IH0gZnJvbSAnbmd4LWludGwtdGVsLWlucHV0JztcclxuaW1wb3J0IHsgaXNWYWxpZFBob25lTnVtYmVyLCBwYXJzZVBob25lTnVtYmVyIH0gZnJvbSAnbGlicGhvbmVudW1iZXItanMnO1xyXG5cclxuaW1wb3J0IHsgRm9ybUNvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2xpYi1zdWItY3JlYXRlLW9uYm9hcmRpbmcnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9zdWItb25ib2FyZGluZy1jcmVhdGUuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3N1Yi1vbmJvYXJkaW5nLWNyZWF0ZS5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTdWJPbmJvYXJkaW5nQ3JlYXRlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBASW5wdXQoKSBmaWVsZDogYW55XHJcbiAgQElucHV0KCkgbGVuZ3RoOiBhbnlcclxuICBASW5wdXQoKSBpOiBhbnlcclxuICBASW5wdXQoKSBqOiBhbnlcclxuICBAT3V0cHV0KCkgb25BZGRLZXl3b3JkRnJvbUlucHV0ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KClcclxuICBAT3V0cHV0KCkgb25LZXlQcmVzcyA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpXHJcbiAgQE91dHB1dCgpIG9uRHJvcCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpXHJcbiAgQE91dHB1dCgpIG9uQWRkTmV3RmllbGQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKVxyXG4gIEBPdXRwdXQoKSBvblJlbW92ZUZpZWxkID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KClcclxuICBAT3V0cHV0KCkgb25DaGFuZ2VUeXBlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KClcclxuICBAT3V0cHV0KCkgb25SZW1vdmVLZXl3b3JkID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KClcclxuICBAT3V0cHV0KCkgb25BZGROZXdTdWJMZXZlbEZpZWxkID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KClcclxuICBAT3V0cHV0KCkgb25FeHBlbmRNb3JlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KClcclxuICBAT3V0cHV0KCkgb25DaGFuZ2VMYWJlbCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpXHJcbiAgQE91dHB1dCgpIG9uQ2hlY2tlZENoaXAgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKVxyXG4gIEBPdXRwdXQoKSBvbkNoZWNrVmFsdWUgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKVxyXG5cclxuICBjaGlwQ29udHJvbCA9IG5ldyBGb3JtQ29udHJvbChuZXcgU2V0KCkpO1xyXG4gIHByZWZlcnJlZENvdW50cmllczogQ291bnRyeUlTT1tdID0gW0NvdW50cnlJU08uVW5pdGVkU3RhdGVzLCBDb3VudHJ5SVNPLkZyYW5jZV07XHJcbiAgUGhvbmVOdW1iZXJGb3JtYXQgPSBQaG9uZU51bWJlckZvcm1hdDtcclxuICBzZXBhcmF0b3JLZXlzQ29kZXMgPSBbRU5URVIsIENPTU1BLCBTRU1JQ09MT05dO1xyXG4gIGludmFsaWRlVmFsdWUgPSBmYWxzZTtcclxuICBjdXJyZW50Q2hpcCA9IFwiXCJcclxuICBzZXBhcmF0ZURpYWxDb2RlID0gZmFsc2U7XHJcbiAgcHJldlZhbHVlID0gXCJcIlxyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gIH1cclxuXHJcbiAgZHJvcChldmVudCkge1xyXG4gICAgdGhpcy5vbkRyb3AuZW1pdChldmVudClcclxuICB9XHJcblxyXG4gIGFkZEtleXdvcmRGcm9tSW5wdXQoZXZlbnQsIGksIGopIHtcclxuICAgIHRoaXMub25BZGRLZXl3b3JkRnJvbUlucHV0LmVtaXQoeyBldmVudCwgcHJldjogdGhpcy5wcmV2VmFsdWUsIGksIGogfSk7XHJcbiAgfVxyXG5cclxuICBrZXlVcChldmVudCwgaSwgaikge1xyXG4gICAgdGhpcy5vbktleVByZXNzLmVtaXQoeyBldmVudCwgaSwgaiB9KVxyXG4gIH1cclxuXHJcbiAgYWRkTmV3RmllbGQoZXZlbnQsIGkpIHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcclxuICAgIHRoaXMub25BZGROZXdGaWVsZC5lbWl0KHsgZXZlbnQsIGkgfSlcclxuICB9XHJcblxyXG4gIHJlbW92ZUZpZWxkKGV2ZW50LCBpLCBqKSB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICB0aGlzLm9uUmVtb3ZlRmllbGQuZW1pdCh7IGksIGogfSlcclxuICB9XHJcblxyXG4gIGNoYW5nZVR5cGUodHlwZSwgaSwgaikge1xyXG4gICAgdGhpcy5vbkNoYW5nZVR5cGUuZW1pdCh7IHR5cGUsIGksIGogfSlcclxuICB9XHJcblxyXG4gIHJlbW92ZUtleXdvcmQoZXZlbnQsIGksIGopIHtcclxuICAgIHRoaXMub25SZW1vdmVLZXl3b3JkLmVtaXQoeyBldmVudCwgaSwgaiB9KVxyXG4gIH1cclxuICBhZGROZXdTdWJMZXZlbEZpZWxkKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgdGhpcy5vbkFkZE5ld1N1YkxldmVsRmllbGQuZW1pdCh0cnVlKVxyXG4gIH1cclxuICBleHBlbmRNb3JlKGUsIGZpZWxkKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgIHRoaXMub25FeHBlbmRNb3JlLmVtaXQoeyBleHBhbmQ6IHRydWUsIGZpZWxkIH0pXHJcbiAgfVxyXG5cclxuICBpbmdvcmVEZWZhdWx0QWN0aW9uKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gIH1cclxuXHJcbiAgY2hhbmdlTGFiZWwobGFiZWwsIGtleSkge1xyXG4gICAgdGhpcy5vbkNoYW5nZUxhYmVsLmVtaXQoeyBsYWJlbCwga2V5IH0pXHJcbiAgfVxyXG5cclxuICB0b2dnbGVDaGlwID0gKGNoaXA6IGFueSkgPT4ge1xyXG4gICAgdGhpcy5vbkNoZWNrZWRDaGlwLmVtaXQoY2hpcClcclxuICAgIC8vIGNvbnN0IGFkZENoaXAgPSAoKSA9PiB7IHRoaXMuY2hpcHMuYWRkKGNoaXApOyB9O1xyXG4gICAgLy8gY29uc3QgcmVtb3ZlQ2hpcCA9ICgpID0+IHsgdGhpcy5jaGlwcy5kZWxldGUoY2hpcCk7IH07XHJcbiAgICAvLyB0aGlzLmNoaXBzLmhhcyhjaGlwKSA/IHJlbW92ZUNoaXAoKSA6IGFkZENoaXAoKTtcclxuXHJcbiAgfVxyXG5cclxuICBvbkVkaXRDaGlwKGNoaXApIHtcclxuICAgIGlmIChjaGlwLnZhbHVlID09PSB0aGlzLmN1cnJlbnRDaGlwKSB7XHJcbiAgICAgIHRoaXMuY3VycmVudENoaXAgPSBcIlwiXHJcbiAgICAgIHRoaXMucHJldlZhbHVlID0gXCJcIlxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5jdXJyZW50Q2hpcCA9IGNoaXAudmFsdWU7XHJcbiAgICAgIHRoaXMucHJldlZhbHVlID0gY2hpcC52YWx1ZVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0IGNoaXBzKCkgeyByZXR1cm4gdGhpcy5jaGlwQ29udHJvbC52YWx1ZTsgfVxyXG5cclxuICBmb3JtYXRPdGhlcihvdGhlcjogYW55KSB7XHJcbiAgICBpZiAob3RoZXIgJiYgdHlwZW9mIG90aGVyICE9PSAnYm9vbGVhbicpIHtcclxuICAgICAgcmV0dXJuIChvdGhlcj8udG9Mb2NhbGVMb3dlckNhc2UoKSB8fCAnJylcclxuICAgIH1cclxuICAgIHJldHVybiAnJ1xyXG4gIH1cclxuXHJcblxyXG4gIGNoZWNrU3ViRm9ybShmb3Jtcykge1xyXG4gICAgbGV0IGhhc1N1YkZvcm0gPSBmYWxzZTtcclxuICAgIGlmIChmb3Jtcy5mb3JtcyAmJiBmb3Jtcy5mb3Jtcy5sZW5ndGgpIHtcclxuICAgICAgaGFzU3ViRm9ybSA9IHRydWU7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gaGFzU3ViRm9ybVxyXG4gIH1cclxuXHJcbiAgZmxhZyh2YWx1ZSkge1xyXG4gICAgY29uc3QgdmFsdWVTdHJpbmcgPSBTdHJpbmcodmFsdWUpXHJcbiAgICByZXR1cm4gdmFsdWVTdHJpbmcgJiYgaXNWYWxpZFBob25lTnVtYmVyKHZhbHVlU3RyaW5nKSA/IHBhcnNlUGhvbmVOdW1iZXIodmFsdWVTdHJpbmcpLmNvdW50cnkgOiBDb3VudHJ5SVNPLkZyYW5jZTtcclxuICB9XHJcblxyXG4gIGNoZWNrUGhvbmUocGhvbmUpIHtcclxuICAgIGlmIChwaG9uZSkge1xyXG4gICAgICBsZXQgcmVnZXggPSBuZXcgUmVnRXhwKC9cXCsoOVs5NzZdXFxkfDhbOTg3NTMwXVxcZHw2Wzk4N11cXGR8NVs5MF1cXGR8NDJcXGR8M1s4NzVdXFxkfDJbOTg2NTQzMjFdXFxkfDlbODU0MzIxMF18OFs2NDIxXXw2WzY1NDMyMTBdfDVbODc2NTQzMjFdfDRbOTg3NjU0MzEwXXwzWzk2NDMyMTBdfDJbNzBdfDd8MSlcXFcqXFxkXFxXKlxcZFxcVypcXGRcXFcqXFxkXFxXKlxcZFxcVypcXGRcXFcqXFxkXFxXKlxcZFxcVyooXFxkezEsMn0pJC8pXHJcbiAgICAgIHRoaXMuaW52YWxpZGVWYWx1ZSA9ICFyZWdleC50ZXN0KHBob25lWydlMTY0TnVtYmVyJ10pO1xyXG4gICAgICB0aGlzLm9uQ2hlY2tWYWx1ZS5lbWl0KHRoaXMuaW52YWxpZGVWYWx1ZSlcclxuICAgIH1cclxuICAgIGlmIChwaG9uZSAmJiBwaG9uZVtcIm5hdGlvbmFsTnVtYmVyXCJdICYmIHBob25lW1wibmF0aW9uYWxOdW1iZXJcIl0gIT0gJycpIHtcclxuICAgICAgbGV0IHAgPSBwaG9uZVsnbmF0aW9uYWxOdW1iZXInXS5yZXBsYWNlQWxsKCcgJywgJycpO1xyXG4gICAgICBsZXQgbmV3cDogYW55ID0gJyc7XHJcblxyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHAubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBpZiAocC5zcGxpdCgnJylbaV0pIHtcclxuICAgICAgICAgIGlmIChpICUgMiA9PSAwICYmIGkgPiAwKSB7XHJcbiAgICAgICAgICAgIG5ld3AgKz0gJyAnO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgbmV3cCArPSBwLnNwbGl0KCcnKVtpXTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5maWVsZC52YWx1ZSA9IHBob25lW1wibmF0aW9uYWxOdW1iZXJcIl1cclxuICAgIH1cclxuICB9XHJcblxyXG59XHJcbiIsIjxkaXYgY2xhc3M9XCJmaWVsZC1pdGVtXCI+XHJcbiAgICA8bmctY29udGFpbmVyIFtuZ1N3aXRjaF09XCJmaWVsZC50eXBlXCI+XHJcbiAgICAgICAgPGRpdiAqbmdTd2l0Y2hDYXNlPVwiJ3RvZ2dsZSdcIiBjbGFzcz1cImZsZXgtYXV0byBmaWVsZC1zaXplIHRvZ2dsZS1idXR0b25cIj5cclxuICAgICAgICAgICAgPHNwYW4+e3sgZmllbGQubGFiZWwgfX08L3NwYW4+XHJcbiAgICAgICAgICAgIDxtYXQtc2xpZGUtdG9nZ2xlIGNsYXNzPVwiZm9ybS1maWVsZFwiIFsobmdNb2RlbCldPVwiZmllbGQuZGVmYXVsdFZhbHVlXCJcclxuICAgICAgICAgICAgICAgIFtuZ01vZGVsT3B0aW9uc109XCJ7IHN0YW5kYWxvbmU6IHRydWUgfVwiIFtuZ1N0eWxlXT1cImZpZWxkLnNlbGVjdG9yICYmIHsgZGlzcGxheTogJ2luaW5lLWJsb2NrJyB9XCI+XHJcbiAgICAgICAgICAgIDwvbWF0LXNsaWRlLXRvZ2dsZT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2ICpuZ1N3aXRjaENhc2U9XCInY2hlY2tib3gnXCIgY2xhc3M9XCJmbGV4LWF1dG8gdy0zMFwiPlxyXG4gICAgICAgICAgICA8bWF0LWNoZWNrYm94IGNsYXNzPVwiZm9ybS1maWVsZFwiIFtjbGFzc109XCJjaGVja1N1YkZvcm0oZmllbGQpID8gJ2NoZWNrYm94LXRpdGxlLWFjdGl2ZSc6JydcIlxyXG4gICAgICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJmaWVsZC52YWx1ZVwiIFtyZXF1aXJlZF09XCJmaWVsZC5pc01hbmRhdG9yeVwiIFtuZ01vZGVsT3B0aW9uc109XCJ7c3RhbmRhbG9uZTogdHJ1ZX1cIlxyXG4gICAgICAgICAgICAgICAgW25nU3R5bGVdPVwiZmllbGQuc2VsZWN0b3IgJiYgeydkaXNwbGF5JzogJ2luaW5lLWJsb2NrJ31cIj5cclxuICAgICAgICAgICAgICAgIHt7ZmllbGQubGFiZWx9fVxyXG4gICAgICAgICAgICA8L21hdC1jaGVja2JveD5cclxuXHJcblxyXG4gICAgICAgICAgICA8bWF0LXNlbGVjdCBwbGFjZWhvbGRlcj1cIkNvbXBhbnlcIiBbKG5nTW9kZWwpXT1cImZpZWxkLnNlbGVjdG9yLnZhbHVlXCIgW25nTW9kZWxPcHRpb25zXT1cIntzdGFuZGFsb25lOiB0cnVlfVwiXHJcbiAgICAgICAgICAgICAgICByZXF1aXJlZCAqbmdJZj1cImZpZWxkLnNlbGVjdG9yXCIgc3R5bGU9XCJkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IHdpZHRoOiA1MCU7XCI+XHJcbiAgICAgICAgICAgICAgICA8bWF0LW9wdGlvbiAqbmdGb3I9XCJsZXQgc2VsZWN0IG9mIGZpZWxkLnNlbGVjdG9yLmRlZmF1bHRWYWx1ZVwiIFt2YWx1ZV09XCJzZWxlY3QudmFsdWVcIj5cclxuICAgICAgICAgICAgICAgICAgICB7e3NlbGVjdC52YWx1ZX19PC9tYXQtb3B0aW9uPlxyXG4gICAgICAgICAgICA8L21hdC1zZWxlY3Q+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiAqbmdTd2l0Y2hDYXNlPVwiJ2NoZWNrYm94X211bHRpcGxlJ1wiIGNsYXNzPVwiZmxleC1hdXRvIHctMzBcIj5cclxuICAgICAgICAgICAgPGxhYmVsPnt7ZmllbGQubGFiZWx9fTwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJvbmJvYXJkaW5nLXNlbGVjdFwiIHN0eWxlPVwibWFyZ2luLXRvcDogMjBweDtcIj5cclxuICAgICAgICAgICAgICAgIDxtYXQtY2hlY2tib3ggY2xhc3M9XCJmb3JtLWZpZWxkXCIgc3R5bGU9XCJkaXNwbGF5OiBibG9jazsgbWFyZ2luLWJvdHRvbTogNXB4OyBtYXJnaW4tdG9wOiAxMHB4XCJcclxuICAgICAgICAgICAgICAgICAgICAqbmdGb3I9XCJsZXQgb3B0IG9mIGZpZWxkLmRlZmF1bHRWYWx1ZVwiIFtjaGVja2VkXT1cIm9wdC5jaGVja2VkXCIgWyhuZ01vZGVsKV09XCJvcHQuY2hlY2tlZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgW3JlcXVpcmVkXT1cImZpZWxkLmlzTWFuZGF0b3J5XCIgW25nTW9kZWxPcHRpb25zXT1cIntzdGFuZGFsb25lOiB0cnVlfVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHt7b3B0LnZhbHVlfX1cclxuICAgICAgICAgICAgICAgIDwvbWF0LWNoZWNrYm94PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2ICpuZ1N3aXRjaENhc2U9XCIncmFkaW8nXCIgY2xhc3M9XCJmbGV4LWF1dG8gdy0zMCBmaWVsZC1zaXplXCI+XHJcbiAgICAgICAgICAgIDxsYWJlbCBzdHlsZT1cImRpc3BsYXk6IGJsb2NrO1wiPiB7e2ZpZWxkLmxhYmVsfX0gPC9sYWJlbD5cclxuICAgICAgICAgICAgPG1hdC1yYWRpby1ncm91cCBjbGFzcz1cImZvcm0tZmllbGQgcmFkaW8tZ3JvdXAgZmllbGQtc2l6ZVwiIFsobmdNb2RlbCldPVwiZmllbGQudmFsdWVcIlxyXG4gICAgICAgICAgICAgICAgW3JlcXVpcmVkXT1cImZpZWxkLmlzTWFuZGF0b3J5XCIgYXJpYS1sYWJlbD1cIlNlbGVjdCBhbiBvcHRpb25cIj5cclxuICAgICAgICAgICAgICAgIDxtYXQtcmFkaW8tYnV0dG9uICpuZ0Zvcj1cImxldCBvcHQgb2YgZmllbGQuZGVmYXVsdFZhbHVlXCIgW3ZhbHVlXT1cIm9wdC52YWx1ZVwiPnt7b3B0LnZhbHVlfX1cclxuICAgICAgICAgICAgICAgIDwvbWF0LXJhZGlvLWJ1dHRvbj5cclxuICAgICAgICAgICAgPC9tYXQtcmFkaW8tZ3JvdXA+XHJcbiAgICAgICAgICAgIDxtYXQtZm9ybS1maWVsZCAqbmdJZj1cIidhdXRyZSc9PT1mb3JtYXRPdGhlcihmaWVsZC52YWx1ZSlcIiBjbGFzcz1cImZvcm0tZmllbGQgZmllbGQtc2l6ZSBvdGhlci1vcHRpb25cIlxyXG4gICAgICAgICAgICAgICAgYXBwZWFyYW5jZT1cIm91dGxpbmVcIj5cclxuICAgICAgICAgICAgICAgIDxtYXQtbGFiZWw+QXV0cmUgb3B0aW9uPC9tYXQtbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBbcmVxdWlyZWRdPVwiZmllbGQuaXNNYW5kYXRvcnlcIiBtYXRJbnB1dCBbbmdNb2RlbE9wdGlvbnNdPVwie3N0YW5kYWxvbmU6IHRydWV9XCJcclxuICAgICAgICAgICAgICAgICAgICBbKG5nTW9kZWwpXT1cImZpZWxkLm90aGVyVmFsdWVcIiBwbGFjZWhvbGRlcj1cIlwiPlxyXG4gICAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgKm5nU3dpdGNoQ2FzZT1cIidzZWxlY3QnXCIgY2xhc3M9XCJmbGV4LWF1dG8gdy0zMCBmaWVsZC1zaXplXCI+XHJcbiAgICAgICAgICAgIDxtYXQtZm9ybS1maWVsZCBjbGFzcz1cImZsZXgtYXV0byB3LTMwIGZpZWxkLXNpemVcIiBhcHBlYXJhbmNlPVwib3V0bGluZVwiPlxyXG4gICAgICAgICAgICAgICAgPG1hdC1sYWJlbD4ge3tmaWVsZC5sYWJlbH19IDwvbWF0LWxhYmVsPlxyXG4gICAgICAgICAgICAgICAgPG1hdC1zZWxlY3QgWyhuZ01vZGVsKV09XCJmaWVsZC52YWx1ZVwiIFtuZ01vZGVsT3B0aW9uc109XCJ7c3RhbmRhbG9uZTogdHJ1ZX1cIlxyXG4gICAgICAgICAgICAgICAgICAgIFtyZXF1aXJlZF09XCJmaWVsZC5pc01hbmRhdG9yeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxtYXQtb3B0aW9uICpuZ0Zvcj1cImxldCBvcHQgb2YgZmllbGQuZGVmYXVsdFZhbHVlXCIgW3ZhbHVlXT1cIm9wdC52YWx1ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7e29wdC52YWx1ZX19PC9tYXQtb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgPC9tYXQtc2VsZWN0PlxyXG4gICAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgICA8bWF0LWZvcm0tZmllbGQgKm5nSWY9XCInYXV0cmUnPT09Zm9ybWF0T3RoZXIoZmllbGQudmFsdWUpXCIgY2xhc3M9XCJmb3JtLWZpZWxkIGZpZWxkLXNpemUgb3RoZXItb3B0aW9uXCJcclxuICAgICAgICAgICAgICAgIGFwcGVhcmFuY2U9XCJvdXRsaW5lXCI+XHJcbiAgICAgICAgICAgICAgICA8bWF0LWxhYmVsPkF1dHJlIG9wdGlvbjwvbWF0LWxhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgW3JlcXVpcmVkXT1cImZpZWxkLmlzTWFuZGF0b3J5XCIgbWF0SW5wdXQgW25nTW9kZWxPcHRpb25zXT1cIntzdGFuZGFsb25lOiB0cnVlfVwiXHJcbiAgICAgICAgICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJmaWVsZC5vdGhlclZhbHVlXCIgcGxhY2Vob2xkZXI9XCJcIj5cclxuICAgICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8bWF0LWZvcm0tZmllbGQgKm5nU3dpdGNoQ2FzZT1cIid0ZXh0YXJlYSdcIiBjbGFzcz1cImZvcm0tZmllbGQgZnVsbC13aWR0aFwiIGFwcGVhcmFuY2U9XCJvdXRsaW5lXCI+XHJcbiAgICAgICAgICAgIDxtYXQtbGFiZWw+e3tmaWVsZC5sYWJlbH19PC9tYXQtbGFiZWw+XHJcbiAgICAgICAgICAgIDx0ZXh0YXJlYSB0eXBlPVwidGV4dFwiIHJvd3M9XCI1XCIgbWF0SW5wdXQgW3JlcXVpcmVkXT1cImZpZWxkLmlzTWFuZGF0b3J5XCIgW25nTW9kZWxPcHRpb25zXT1cIntzdGFuZGFsb25lOiB0cnVlfVwiXHJcbiAgICAgICAgICAgICAgICBbKG5nTW9kZWwpXT1cImZpZWxkLnZhbHVlXCIgcGxhY2Vob2xkZXI9XCJEZXNjcmlwdGlvbi4uLlwiPjwvdGV4dGFyZWE+XHJcbiAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgICAgICA8ZGl2ICpuZ1N3aXRjaENhc2U9XCIndGVsJ1wiIGNsYXNzPVwiZm9ybS1maWVsZCBmdWxsLXdpZHRoIHRlbC1pbnB1dFwiPlxyXG4gICAgICAgICAgICA8bWF0LWxhYmVsIGNsYXNzPVwidGVsLWxhYmVsXCI+e3tmaWVsZC5sYWJlbH19PC9tYXQtbGFiZWw+XHJcbiAgICAgICAgICAgIDxuZ3gtaW50bC10ZWwtaW5wdXQgaWQ9XCJvbmJvYXJkaW5nLXBob25lLWlucHV0XCIgY2xhc3M9XCJwaG9uZS1pbnB1dC1wcm9maWxlXCIgW2Nzc0NsYXNzXT1cIidpbnB1dC1waG9uZSdcIlxyXG4gICAgICAgICAgICAgICAgW3ByZWZlcnJlZENvdW50cmllc109XCJwcmVmZXJyZWRDb3VudHJpZXNcIiBbZW5hYmxlQXV0b0NvdW50cnlTZWxlY3RdPVwiZmFsc2VcIiBbZW5hYmxlUGxhY2Vob2xkZXJdPVwidHJ1ZVwiXHJcbiAgICAgICAgICAgICAgICBbY3VzdG9tUGxhY2Vob2xkZXJdPVwiJ1Bob25lJ1wiIFtzZWxlY3RGaXJzdENvdW50cnldPVwiZmFsc2VcIiBbc2VsZWN0ZWRDb3VudHJ5SVNPXT1cImZsYWcoZmllbGQudmFsdWUpXCJcclxuICAgICAgICAgICAgICAgIFttYXhMZW5ndGhdPVwiMTVcIiBbaW5wdXRJZF09XCJmaWVsZC5rZXlcIiBbcGhvbmVWYWxpZGF0aW9uXT1cInRydWVcIiBbc2VwYXJhdGVEaWFsQ29kZV09XCJzZXBhcmF0ZURpYWxDb2RlXCJcclxuICAgICAgICAgICAgICAgIFtudW1iZXJGb3JtYXRdPVwiUGhvbmVOdW1iZXJGb3JtYXQuTmF0aW9uYWxcIiBuYW1lPVwicGhvbmVcIiAoaW5wdXQpPVwiY2hlY2tQaG9uZShmaWVsZC52YWx1ZSlcIlxyXG4gICAgICAgICAgICAgICAgW25nTW9kZWxPcHRpb25zXT1cIntzdGFuZGFsb25lOiB0cnVlfVwiIFsobmdNb2RlbCldPVwiZmllbGQudmFsdWVcIj5cclxuICAgICAgICAgICAgPC9uZ3gtaW50bC10ZWwtaW5wdXQ+XHJcbiAgICAgICAgICAgIDxtYXQtZXJyb3IgKm5nSWY9XCJpbnZhbGlkZVZhbHVlXCI+TGUgdMOpbMOpcGhvbmUgZXN0IGludmFsaWRlPC9tYXQtZXJyb3I+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxtYXQtZm9ybS1maWVsZCAqbmdTd2l0Y2hEZWZhdWx0IGNsYXNzPVwiZm9ybS1maWVsZCBmaWVsZC1zaXplXCIgYXBwZWFyYW5jZT1cIm91dGxpbmVcIj5cclxuICAgICAgICAgICAgPG1hdC1sYWJlbD57e2ZpZWxkLmxhYmVsfX08L21hdC1sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0IFt0eXBlXT1cImZpZWxkLnR5cGVcIiBbcmVxdWlyZWRdPVwiZmllbGQuaXNNYW5kYXRvcnlcIiBtYXRJbnB1dCBbbmdNb2RlbE9wdGlvbnNdPVwie3N0YW5kYWxvbmU6IHRydWV9XCJcclxuICAgICAgICAgICAgICAgIFsobmdNb2RlbCldPVwiZmllbGQudmFsdWVcIiBwbGFjZWhvbGRlcj1cIlwiPlxyXG4gICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICA8L25nLWNvbnRhaW5lcj5cclxuPC9kaXY+XHJcbjxuZy1jb250ZW50IHNlbGVjdD1cIi5jaGlsZFwiPjwvbmctY29udGVudD4iXX0=