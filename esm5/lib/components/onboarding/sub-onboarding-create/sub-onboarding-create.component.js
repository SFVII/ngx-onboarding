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
    var _r933 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 9);
    i0.ɵɵelementStart(1, "span");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "mat-slide-toggle", 10);
    i0.ɵɵlistener("ngModelChange", function SubOnboardingCreateComponent_div_2_Template_mat_slide_toggle_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r933); var ctx_r932 = i0.ɵɵnextContext(); return ctx_r932.field.defaultValue = $event; });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r923 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r923.field.label);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", ctx_r923.field.defaultValue)("ngModelOptions", i0.ɵɵpureFunction0(4, _c0))("ngStyle", ctx_r923.field.selector && i0.ɵɵpureFunction0(5, _c1));
} }
function SubOnboardingCreateComponent_div_3_mat_select_3_mat_option_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 16);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var select_r936 = ctx.$implicit;
    i0.ɵɵproperty("value", select_r936.value);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", select_r936.value, "");
} }
function SubOnboardingCreateComponent_div_3_mat_select_3_Template(rf, ctx) { if (rf & 1) {
    var _r938 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-select", 14);
    i0.ɵɵlistener("ngModelChange", function SubOnboardingCreateComponent_div_3_mat_select_3_Template_mat_select_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r938); var ctx_r937 = i0.ɵɵnextContext(2); return ctx_r937.field.selector.value = $event; });
    i0.ɵɵtemplate(1, SubOnboardingCreateComponent_div_3_mat_select_3_mat_option_1_Template, 2, 2, "mat-option", 15);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r934 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngModel", ctx_r934.field.selector.value)("ngModelOptions", i0.ɵɵpureFunction0(3, _c0));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r934.field.selector.defaultValue);
} }
var _c2 = function () { return { "display": "inine-block" }; };
function SubOnboardingCreateComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    var _r940 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 11);
    i0.ɵɵelementStart(1, "mat-checkbox", 12);
    i0.ɵɵlistener("ngModelChange", function SubOnboardingCreateComponent_div_3_Template_mat_checkbox_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r940); var ctx_r939 = i0.ɵɵnextContext(); return ctx_r939.field.value = $event; });
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, SubOnboardingCreateComponent_div_3_mat_select_3_Template, 2, 4, "mat-select", 13);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r924 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵclassMap(ctx_r924.checkSubForm(ctx_r924.field) ? "checkbox-title-active" : "");
    i0.ɵɵproperty("ngModel", ctx_r924.field.value)("required", ctx_r924.field.isMandatory)("ngModelOptions", i0.ɵɵpureFunction0(8, _c0))("ngStyle", ctx_r924.field.selector && i0.ɵɵpureFunction0(9, _c2));
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r924.field.label, " ");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r924.field.selector);
} }
function SubOnboardingCreateComponent_div_4_mat_checkbox_4_Template(rf, ctx) { if (rf & 1) {
    var _r944 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-checkbox", 19);
    i0.ɵɵlistener("ngModelChange", function SubOnboardingCreateComponent_div_4_mat_checkbox_4_Template_mat_checkbox_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r944); var opt_r942 = ctx.$implicit; return opt_r942.checked = $event; });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var opt_r942 = ctx.$implicit;
    var ctx_r941 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("checked", opt_r942.checked)("ngModel", opt_r942.checked)("required", ctx_r941.field.isMandatory)("ngModelOptions", i0.ɵɵpureFunction0(5, _c0));
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", opt_r942.value, " ");
} }
function SubOnboardingCreateComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 11);
    i0.ɵɵelementStart(1, "label");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 17);
    i0.ɵɵtemplate(4, SubOnboardingCreateComponent_div_4_mat_checkbox_4_Template, 2, 6, "mat-checkbox", 18);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r925 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r925.field.label);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r925.field.defaultValue);
} }
function SubOnboardingCreateComponent_div_5_mat_radio_button_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-radio-button", 16);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var opt_r947 = ctx.$implicit;
    i0.ɵɵproperty("value", opt_r947.value);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1("", opt_r947.value, " ");
} }
function SubOnboardingCreateComponent_div_5_mat_form_field_5_Template(rf, ctx) { if (rf & 1) {
    var _r949 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-form-field", 24);
    i0.ɵɵelementStart(1, "mat-label");
    i0.ɵɵtext(2, "Autre option");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "input", 25);
    i0.ɵɵlistener("ngModelChange", function SubOnboardingCreateComponent_div_5_mat_form_field_5_Template_input_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r949); var ctx_r948 = i0.ɵɵnextContext(2); return ctx_r948.field.otherValue = $event; });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r946 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("required", ctx_r946.field.isMandatory)("ngModelOptions", i0.ɵɵpureFunction0(3, _c0))("ngModel", ctx_r946.field.otherValue);
} }
function SubOnboardingCreateComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    var _r951 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 20);
    i0.ɵɵelementStart(1, "label", 21);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "mat-radio-group", 22);
    i0.ɵɵlistener("ngModelChange", function SubOnboardingCreateComponent_div_5_Template_mat_radio_group_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r951); var ctx_r950 = i0.ɵɵnextContext(); return ctx_r950.field.value = $event; });
    i0.ɵɵtemplate(4, SubOnboardingCreateComponent_div_5_mat_radio_button_4_Template, 2, 2, "mat-radio-button", 15);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(5, SubOnboardingCreateComponent_div_5_mat_form_field_5_Template, 4, 4, "mat-form-field", 23);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r926 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r926.field.label, " ");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", ctx_r926.field.value)("required", ctx_r926.field.isMandatory);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r926.field.defaultValue);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", "autre" === ctx_r926.formatOther(ctx_r926.field.value));
} }
function SubOnboardingCreateComponent_div_6_mat_option_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 16);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var opt_r954 = ctx.$implicit;
    i0.ɵɵproperty("value", opt_r954.value);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", opt_r954.value, "");
} }
function SubOnboardingCreateComponent_div_6_mat_form_field_6_Template(rf, ctx) { if (rf & 1) {
    var _r956 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-form-field", 24);
    i0.ɵɵelementStart(1, "mat-label");
    i0.ɵɵtext(2, "Autre option");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "input", 25);
    i0.ɵɵlistener("ngModelChange", function SubOnboardingCreateComponent_div_6_mat_form_field_6_Template_input_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r956); var ctx_r955 = i0.ɵɵnextContext(2); return ctx_r955.field.otherValue = $event; });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r953 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("required", ctx_r953.field.isMandatory)("ngModelOptions", i0.ɵɵpureFunction0(3, _c0))("ngModel", ctx_r953.field.otherValue);
} }
function SubOnboardingCreateComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    var _r958 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 20);
    i0.ɵɵelementStart(1, "mat-form-field", 26);
    i0.ɵɵelementStart(2, "mat-label");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "mat-select", 27);
    i0.ɵɵlistener("ngModelChange", function SubOnboardingCreateComponent_div_6_Template_mat_select_ngModelChange_4_listener($event) { i0.ɵɵrestoreView(_r958); var ctx_r957 = i0.ɵɵnextContext(); return ctx_r957.field.value = $event; });
    i0.ɵɵtemplate(5, SubOnboardingCreateComponent_div_6_mat_option_5_Template, 2, 2, "mat-option", 15);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(6, SubOnboardingCreateComponent_div_6_mat_form_field_6_Template, 4, 4, "mat-form-field", 23);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r927 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", ctx_r927.field.label, " ");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", ctx_r927.field.value)("ngModelOptions", i0.ɵɵpureFunction0(6, _c0))("required", ctx_r927.field.isMandatory);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r927.field.defaultValue);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", "autre" === ctx_r927.formatOther(ctx_r927.field.value));
} }
function SubOnboardingCreateComponent_mat_form_field_7_Template(rf, ctx) { if (rf & 1) {
    var _r960 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-form-field", 28);
    i0.ɵɵelementStart(1, "mat-label");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "textarea", 29);
    i0.ɵɵlistener("ngModelChange", function SubOnboardingCreateComponent_mat_form_field_7_Template_textarea_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r960); var ctx_r959 = i0.ɵɵnextContext(); return ctx_r959.field.value = $event; });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r928 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r928.field.label);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("required", ctx_r928.field.isMandatory)("ngModelOptions", i0.ɵɵpureFunction0(4, _c0))("ngModel", ctx_r928.field.value);
} }
function SubOnboardingCreateComponent_div_8_mat_error_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-error");
    i0.ɵɵtext(1, "Le t\u00E9l\u00E9phone est invalide");
    i0.ɵɵelementEnd();
} }
function SubOnboardingCreateComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    var _r963 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 30);
    i0.ɵɵelementStart(1, "mat-label", 31);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "ngx-intl-tel-input", 32);
    i0.ɵɵlistener("input", function SubOnboardingCreateComponent_div_8_Template_ngx_intl_tel_input_input_3_listener() { i0.ɵɵrestoreView(_r963); var ctx_r962 = i0.ɵɵnextContext(); return ctx_r962.checkPhone(ctx_r962.field.value); })("ngModelChange", function SubOnboardingCreateComponent_div_8_Template_ngx_intl_tel_input_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r963); var ctx_r964 = i0.ɵɵnextContext(); return ctx_r964.field.value = $event; });
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(4, SubOnboardingCreateComponent_div_8_mat_error_4_Template, 2, 0, "mat-error", 33);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r929 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r929.field.label);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("cssClass", "input-phone")("preferredCountries", ctx_r929.preferredCountries)("enableAutoCountrySelect", false)("enablePlaceholder", true)("customPlaceholder", "Phone")("selectFirstCountry", false)("selectedCountryISO", ctx_r929.flag(ctx_r929.field.value))("maxLength", 15)("inputId", ctx_r929.field.key)("phoneValidation", true)("separateDialCode", ctx_r929.separateDialCode)("numberFormat", ctx_r929.PhoneNumberFormat.National)("ngModelOptions", i0.ɵɵpureFunction0(16, _c0))("ngModel", ctx_r929.field.value);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r929.invalideValue);
} }
function SubOnboardingCreateComponent_mat_form_field_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-form-field", 34);
    i0.ɵɵelement(1, "mat-label");
    i0.ɵɵelement(2, "input", 35);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r930 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("type", ctx_r930.field.type);
} }
function SubOnboardingCreateComponent_mat_form_field_10_Template(rf, ctx) { if (rf & 1) {
    var _r966 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-form-field", 36);
    i0.ɵɵelementStart(1, "mat-label");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "input", 37);
    i0.ɵɵlistener("ngModelChange", function SubOnboardingCreateComponent_mat_form_field_10_Template_input_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r966); var ctx_r965 = i0.ɵɵnextContext(); return ctx_r965.field.value = $event; });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r931 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r931.field.label);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("type", ctx_r931.field.type)("required", ctx_r931.field.isMandatory)("ngModelOptions", i0.ɵɵpureFunction0(5, _c0))("ngModel", ctx_r931.field.value);
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
    SubOnboardingCreateComponent.ɵcmp = i0.ɵɵdefineComponent({ type: SubOnboardingCreateComponent, selectors: [["lib-sub-create-onboarding"]], inputs: { field: "field", length: "length", i: "i", j: "j" }, outputs: { onAddKeywordFromInput: "onAddKeywordFromInput", onKeyPress: "onKeyPress", onDrop: "onDrop", onAddNewField: "onAddNewField", onRemoveField: "onRemoveField", onChangeType: "onChangeType", onRemoveKeyword: "onRemoveKeyword", onAddNewSubLevelField: "onAddNewSubLevelField", onExpendMore: "onExpendMore", onChangeLabel: "onChangeLabel", onCheckedChip: "onCheckedChip", onCheckValue: "onCheckValue" }, ngContentSelectors: _c4, decls: 12, vars: 9, consts: [[1, "field-item"], [3, "ngSwitch"], ["class", "flex-auto field-size toggle-button", 4, "ngSwitchCase"], ["class", "flex-auto w-30", 4, "ngSwitchCase"], ["class", "flex-auto w-30 field-size", 4, "ngSwitchCase"], ["class", "form-field full-width", "appearance", "outline", 4, "ngSwitchCase"], ["class", "form-field full-width tel-input", 4, "ngSwitchCase"], ["class", "form-field field-size", "appearance", "outline", "style", "opacity:0 ;", 4, "ngSwitchCase"], ["class", "form-field field-size", "appearance", "outline", 4, "ngSwitchDefault"], [1, "flex-auto", "field-size", "toggle-button"], [1, "form-field", 3, "ngModel", "ngModelOptions", "ngStyle", "ngModelChange"], [1, "flex-auto", "w-30"], [1, "form-field", 2, "margin-right", "10px", 3, "ngModel", "required", "ngModelOptions", "ngStyle", "ngModelChange"], ["placeholder", "Company", "required", "", "style", "display: inline-block; width: 50%;", 3, "ngModel", "ngModelOptions", "ngModelChange", 4, "ngIf"], ["placeholder", "Company", "required", "", 2, "display", "inline-block", "width", "50%", 3, "ngModel", "ngModelOptions", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], [1, "onboarding-select", 2, "margin-top", "20px"], ["class", "form-field", "style", "display: block; margin-bottom: 5px; margin-top: 10px;margin-right: 10px;", 3, "checked", "ngModel", "required", "ngModelOptions", "ngModelChange", 4, "ngFor", "ngForOf"], [1, "form-field", 2, "display", "block", "margin-bottom", "5px", "margin-top", "10px", "margin-right", "10px", 3, "checked", "ngModel", "required", "ngModelOptions", "ngModelChange"], [1, "flex-auto", "w-30", "field-size"], [2, "display", "block"], ["aria-label", "Select an option", 1, "form-field", "radio-group", "field-size", 3, "ngModel", "required", "ngModelChange"], ["class", "form-field field-size other-option", "appearance", "outline", 4, "ngIf"], ["appearance", "outline", 1, "form-field", "field-size", "other-option"], ["type", "text", "matInput", "", "placeholder", "", 3, "required", "ngModelOptions", "ngModel", "ngModelChange"], ["appearance", "outline", 1, "mat-select", "flex-auto", "w-30", "field-size"], [3, "ngModel", "ngModelOptions", "required", "ngModelChange"], ["appearance", "outline", 1, "form-field", "full-width"], ["type", "text", "rows", "5", "matInput", "", "placeholder", "Description...", 3, "required", "ngModelOptions", "ngModel", "ngModelChange"], [1, "form-field", "full-width", "tel-input"], [1, "tel-label"], ["id", "onboarding-phone-input", "name", "phone", 1, "phone-input-profile", 3, "cssClass", "preferredCountries", "enableAutoCountrySelect", "enablePlaceholder", "customPlaceholder", "selectFirstCountry", "selectedCountryISO", "maxLength", "inputId", "phoneValidation", "separateDialCode", "numberFormat", "ngModelOptions", "ngModel", "input", "ngModelChange"], [4, "ngIf"], ["appearance", "outline", 1, "form-field", "field-size", 2, "opacity", "0"], ["disabled", "true", "matInput", "", 3, "type"], ["appearance", "outline", 1, "form-field", "field-size"], ["matInput", "", "placeholder", "", 3, "type", "required", "ngModelOptions", "ngModel", "ngModelChange"]], template: function SubOnboardingCreateComponent_Template(rf, ctx) { if (rf & 1) {
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
        } }, directives: [i1.NgSwitch, i1.NgSwitchCase, i1.NgSwitchDefault, i2.MatSlideToggle, i3.NgControlStatus, i3.NgModel, i4.NativeElementInjectorDirective, i1.NgStyle, i5.MatCheckbox, i5.MatCheckboxRequiredValidator, i3.RequiredValidator, i1.NgIf, i6.MatSelect, i1.NgForOf, i7.MatOption, i8.MatRadioGroup, i8.MatRadioButton, i9.MatFormField, i9.MatLabel, i10.MatInput, i3.DefaultValueAccessor, i4.NgxIntlTelInputComponent, i9.MatError], styles: [".container[_ngcontent-%COMP%]{max-width:98%;margin:50px auto auto;padding-bottom:50px}.container[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:space-between}.input-category-name[_ngcontent-%COMP%]{font-size:15px;font-weight:500}.full-width[_ngcontent-%COMP%]{width:100%}.field-item[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;width:100%;flex-wrap:wrap;position:relative}.field-item[_ngcontent-%COMP%]   .button-action[_ngcontent-%COMP%]{background-color:#6fe8d7;height:100%;margin:auto 15px auto auto;display:flex}.field-item[_ngcontent-%COMP%]   .button-action[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{box-shadow:none;background-color:transparent;color:#fff}.field-action[_ngcontent-%COMP%]{width:10%}.field-size[_ngcontent-%COMP%]   mat-checkbox[_ngcontent-%COMP%]{margin:20px}hr[_ngcontent-%COMP%]{margin:50px 0}  .mat-form-field-appearance-fill .mat-form-field-flex{background-color:#fff}.category-action[_ngcontent-%COMP%]{display:flex;width:100%}.delete-field[_ngcontent-%COMP%]{margin:auto 2%}.radio-group[_ngcontent-%COMP%]   .mat-radio-button[_ngcontent-%COMP%]{margin-right:10px}.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary[_ngcontent-%COMP%]{background-color:#3f51b5;color:#fff;min-height:20px;font-size:10px}.move-icons[_ngcontent-%COMP%]{cursor:move}.category-item[_ngcontent-%COMP%]{display:flex;align-items:baseline;width:100%;border:1px solid #dce4e9;border-radius:8px}  .readonly.mat-form-field-appearance-outline .mat-form-field-outline{color:transparent!important}.field-content[_ngcontent-%COMP%]{width:100%}.cdk-drag-preview[_ngcontent-%COMP%]{box-sizing:border-box;border-radius:4px;box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.cdk-drag-placeholder[_ngcontent-%COMP%]{opacity:0}.cdk-drag-animating[_ngcontent-%COMP%], .example-list.cdk-drop-list-dragging[_ngcontent-%COMP%]   .category-item[_ngcontent-%COMP%]:not(.cdk-drag-placeholder){transition:transform 250ms cubic-bezier(0,0,.2,1)}.add-button-container[_ngcontent-%COMP%]{background:no-repeat padding-box #fff;border:1px dashed #dce4e9;border-radius:8px;margin-top:10px;padding:10px;display:flex;justify-content:center;align-items:center;width:98%;margin-left:0;margin-bottom:22px}.add-button-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{display:flex;align-items:center;background-color:transparent;border:none;cursor:pointer;font:17px/26px Nexa Text;letter-spacing:0;color:#c2c8d5;box-shadow:none}.expand-button[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%]{font-size:48px;margin-top:-20px;margin-right:15px}.transparent-button[_ngcontent-%COMP%]{background-color:transparent!important;box-shadow:none!important;width:40px!important;padding:0!important;margin:0!important;min-width:auto!important}.expand-button[_ngcontent-%COMP%]{color:#5a607f!important;background-color:transparent!important;box-shadow:none!important}.checkbox-title-active[_ngcontent-%COMP%]{font-weight:700}.other-option[_ngcontent-%COMP%]{margin-left:10px}.flex-auto[_ngcontent-%COMP%]{width:100%}  .country-dropdown{min-width:unset!important}  .tel-input{position:relative}  .tel-input .tel-label{font-size:12px;color:rgba(0,0,0,.6);position:absolute;z-index:1;background-color:#fff;padding:0 2px;left:8px;top:-3px}  .phone-input-profile{padding-bottom:0;padding-top:0;display:block!important;max-width:100%;font:14px/20px \"Nexa Text\"!important;width:100%}  .phone-input-profile .iti{width:100%!important}  .phone-input-profile .iti input[type=tel]{margin-top:4px!important}  .phone-input-profile input{outline:0;padding:17px;border-radius:5px;border-width:1px;width:100%;border:1px solid rgba(0,0,0,.12)}.toggle-button[_ngcontent-%COMP%]{padding-top:15px;display:flex;align-items:center}.toggle-button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin-right:10px}.onboarding-select[_ngcontent-%COMP%]{display:-ms-grid;display:grid;-ms-grid-columns:(1fr)[6];grid-template-columns:repeat(6,1fr)}"] });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3ViLW9uYm9hcmRpbmctY3JlYXRlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL29uYm9hcmRpbmcvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9vbmJvYXJkaW5nL3N1Yi1vbmJvYXJkaW5nLWNyZWF0ZS9zdWItb25ib2FyZGluZy1jcmVhdGUuY29tcG9uZW50LnRzIiwibGliL2NvbXBvbmVudHMvb25ib2FyZGluZy9zdWItb25ib2FyZGluZy1jcmVhdGUvc3ViLW9uYm9hcmRpbmctY3JlYXRlLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDL0UsT0FBTyxFQUFFLFVBQVUsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ25FLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRXpFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7OztJQ0hyQyw4QkFDSTtJQUFBLDRCQUFNO0lBQUEsWUFBaUI7SUFBQSxpQkFBTztJQUM5Qiw0Q0FFbUI7SUFGa0IsbVBBQWdDO0lBRXJFLGlCQUFtQjtJQUN2QixpQkFBTTs7O0lBSkksZUFBaUI7SUFBakIsMENBQWlCO0lBQ2MsZUFBZ0M7SUFBaEMscURBQWdDLDhDQUFBLGtFQUFBOzs7SUFlakUsc0NBQ0k7SUFBQSxZQUFnQjtJQUFBLGlCQUFhOzs7SUFEOEIseUNBQXNCO0lBQ2pGLGVBQWdCO0lBQWhCLGlEQUFnQjs7OztJQUh4QixzQ0FFSTtJQUY4Qiw2UEFBa0M7SUFFaEUsK0dBQ0k7SUFDUixpQkFBYTs7O0lBSnFCLHVEQUFrQyw4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QzNDO0lBQ0gsQ0FBQzs0R0ExSVUsNEJBQTRCO3FFQUE1Qiw0QkFBNEI7O1lDWnpDLDhCQUNJO1lBQUEsZ0NBQ0k7WUFBQSw2RUFDSTtZQUtKLDhFQUNJO1lBY0osNkVBQ0k7WUFVSiw2RUFDSTtZQWFKLDZFQUNJO1lBZUosbUdBQ0k7WUFJSiw4RUFDSTtZQVVKLG1HQUNJO1lBR0oscUdBQ0k7WUFJUiwwQkFBZTtZQUNuQixpQkFBTTtZQUNOLG1CQUE0Qjs7WUExRlYsZUFBdUI7WUFBdkIseUNBQXVCO1lBQzVCLGVBQXdCO1lBQXhCLHVDQUF3QjtZQU14QixlQUEwQjtZQUExQix5Q0FBMEI7WUFlMUIsZUFBbUM7WUFBbkMsa0RBQW1DO1lBV25DLGVBQXVCO1lBQXZCLHNDQUF1QjtZQWN2QixlQUF3QjtZQUF4Qix1Q0FBd0I7WUFnQmIsZUFBMEI7WUFBMUIseUNBQTBCO1lBS3JDLGVBQXFCO1lBQXJCLG9DQUFxQjtZQVdWLGVBQXNCO1lBQXRCLHFDQUFzQjs7dUNEaEY5QztDQXdKQyxBQWpKRCxJQWlKQztTQTVJWSw0QkFBNEI7a0RBQTVCLDRCQUE0QjtjQUx4QyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLDJCQUEyQjtnQkFDckMsV0FBVyxFQUFFLHdDQUF3QztnQkFDckQsU0FBUyxFQUFFLENBQUMsd0NBQXdDLENBQUM7YUFDdEQ7O2tCQUVFLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLE1BQU07O2tCQUNOLE1BQU07O2tCQUNOLE1BQU07O2tCQUNOLE1BQU07O2tCQUNOLE1BQU07O2tCQUNOLE1BQU07O2tCQUNOLE1BQU07O2tCQUNOLE1BQU07O2tCQUNOLE1BQU07O2tCQUNOLE1BQU07O2tCQUNOLE1BQU07O2tCQUNOLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDT01NQSwgRU5URVIsIFNFTUlDT0xPTiB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9rZXljb2Rlcyc7XHJcbmltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ291bnRyeUlTTywgUGhvbmVOdW1iZXJGb3JtYXQgfSBmcm9tICduZ3gtaW50bC10ZWwtaW5wdXQnO1xyXG5pbXBvcnQgeyBpc1ZhbGlkUGhvbmVOdW1iZXIsIHBhcnNlUGhvbmVOdW1iZXIgfSBmcm9tICdsaWJwaG9uZW51bWJlci1qcyc7XHJcblxyXG5pbXBvcnQgeyBGb3JtQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbGliLXN1Yi1jcmVhdGUtb25ib2FyZGluZycsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3N1Yi1vbmJvYXJkaW5nLWNyZWF0ZS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vc3ViLW9uYm9hcmRpbmctY3JlYXRlLmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIFN1Yk9uYm9hcmRpbmdDcmVhdGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBJbnB1dCgpIGZpZWxkOiBhbnlcclxuICBASW5wdXQoKSBsZW5ndGg6IGFueVxyXG4gIEBJbnB1dCgpIGk6IGFueVxyXG4gIEBJbnB1dCgpIGo6IGFueVxyXG4gIEBPdXRwdXQoKSBvbkFkZEtleXdvcmRGcm9tSW5wdXQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKVxyXG4gIEBPdXRwdXQoKSBvbktleVByZXNzID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KClcclxuICBAT3V0cHV0KCkgb25Ecm9wID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KClcclxuICBAT3V0cHV0KCkgb25BZGROZXdGaWVsZCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpXHJcbiAgQE91dHB1dCgpIG9uUmVtb3ZlRmllbGQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKVxyXG4gIEBPdXRwdXQoKSBvbkNoYW5nZVR5cGUgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKVxyXG4gIEBPdXRwdXQoKSBvblJlbW92ZUtleXdvcmQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKVxyXG4gIEBPdXRwdXQoKSBvbkFkZE5ld1N1YkxldmVsRmllbGQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKVxyXG4gIEBPdXRwdXQoKSBvbkV4cGVuZE1vcmUgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKVxyXG4gIEBPdXRwdXQoKSBvbkNoYW5nZUxhYmVsID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KClcclxuICBAT3V0cHV0KCkgb25DaGVja2VkQ2hpcCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpXHJcbiAgQE91dHB1dCgpIG9uQ2hlY2tWYWx1ZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpXHJcblxyXG4gIGNoaXBDb250cm9sID0gbmV3IEZvcm1Db250cm9sKG5ldyBTZXQoKSk7XHJcbiAgcHJlZmVycmVkQ291bnRyaWVzOiBDb3VudHJ5SVNPW10gPSBbQ291bnRyeUlTTy5Vbml0ZWRTdGF0ZXMsIENvdW50cnlJU08uRnJhbmNlXTtcclxuICBQaG9uZU51bWJlckZvcm1hdCA9IFBob25lTnVtYmVyRm9ybWF0O1xyXG4gIHNlcGFyYXRvcktleXNDb2RlcyA9IFtFTlRFUiwgQ09NTUEsIFNFTUlDT0xPTl07XHJcbiAgaW52YWxpZGVWYWx1ZSA9IGZhbHNlO1xyXG4gIGN1cnJlbnRDaGlwID0gXCJcIlxyXG4gIHNlcGFyYXRlRGlhbENvZGUgPSBmYWxzZTtcclxuICBwcmV2VmFsdWUgPSBcIlwiXHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgfVxyXG5cclxuICBkcm9wKGV2ZW50KSB7XHJcbiAgICB0aGlzLm9uRHJvcC5lbWl0KGV2ZW50KVxyXG4gIH1cclxuXHJcbiAgYWRkS2V5d29yZEZyb21JbnB1dChldmVudCwgaSwgaikge1xyXG4gICAgdGhpcy5vbkFkZEtleXdvcmRGcm9tSW5wdXQuZW1pdCh7IGV2ZW50LCBwcmV2OiB0aGlzLnByZXZWYWx1ZSwgaSwgaiB9KTtcclxuICB9XHJcblxyXG4gIGtleVVwKGV2ZW50LCBpLCBqKSB7XHJcbiAgICB0aGlzLm9uS2V5UHJlc3MuZW1pdCh7IGV2ZW50LCBpLCBqIH0pXHJcbiAgfVxyXG5cclxuICBhZGROZXdGaWVsZChldmVudCwgaSkge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxyXG4gICAgdGhpcy5vbkFkZE5ld0ZpZWxkLmVtaXQoeyBldmVudCwgaSB9KVxyXG4gIH1cclxuXHJcbiAgcmVtb3ZlRmllbGQoZXZlbnQsIGksIGopIHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcclxuICAgIHRoaXMub25SZW1vdmVGaWVsZC5lbWl0KHsgaSwgaiB9KVxyXG4gIH1cclxuXHJcbiAgY2hhbmdlVHlwZSh0eXBlLCBpLCBqKSB7XHJcbiAgICB0aGlzLm9uQ2hhbmdlVHlwZS5lbWl0KHsgdHlwZSwgaSwgaiB9KVxyXG4gIH1cclxuXHJcbiAgcmVtb3ZlS2V5d29yZChldmVudCwgaSwgaikge1xyXG4gICAgdGhpcy5vblJlbW92ZUtleXdvcmQuZW1pdCh7IGV2ZW50LCBpLCBqIH0pXHJcbiAgfVxyXG4gIGFkZE5ld1N1YkxldmVsRmllbGQoZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICB0aGlzLm9uQWRkTmV3U3ViTGV2ZWxGaWVsZC5lbWl0KHRydWUpXHJcbiAgfVxyXG4gIGV4cGVuZE1vcmUoZSwgZmllbGQpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgdGhpcy5vbkV4cGVuZE1vcmUuZW1pdCh7IGV4cGFuZDogdHJ1ZSwgZmllbGQgfSlcclxuICB9XHJcblxyXG4gIGluZ29yZURlZmF1bHRBY3Rpb24oZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgfVxyXG5cclxuICBjaGFuZ2VMYWJlbChsYWJlbCwga2V5KSB7XHJcbiAgICB0aGlzLm9uQ2hhbmdlTGFiZWwuZW1pdCh7IGxhYmVsLCBrZXkgfSlcclxuICB9XHJcblxyXG4gIHRvZ2dsZUNoaXAgPSAoY2hpcDogYW55KSA9PiB7XHJcbiAgICB0aGlzLm9uQ2hlY2tlZENoaXAuZW1pdChjaGlwKVxyXG4gICAgLy8gY29uc3QgYWRkQ2hpcCA9ICgpID0+IHsgdGhpcy5jaGlwcy5hZGQoY2hpcCk7IH07XHJcbiAgICAvLyBjb25zdCByZW1vdmVDaGlwID0gKCkgPT4geyB0aGlzLmNoaXBzLmRlbGV0ZShjaGlwKTsgfTtcclxuICAgIC8vIHRoaXMuY2hpcHMuaGFzKGNoaXApID8gcmVtb3ZlQ2hpcCgpIDogYWRkQ2hpcCgpO1xyXG5cclxuICB9XHJcblxyXG4gIG9uRWRpdENoaXAoY2hpcCkge1xyXG4gICAgaWYgKGNoaXAudmFsdWUgPT09IHRoaXMuY3VycmVudENoaXApIHtcclxuICAgICAgdGhpcy5jdXJyZW50Q2hpcCA9IFwiXCJcclxuICAgICAgdGhpcy5wcmV2VmFsdWUgPSBcIlwiXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmN1cnJlbnRDaGlwID0gY2hpcC52YWx1ZTtcclxuICAgICAgdGhpcy5wcmV2VmFsdWUgPSBjaGlwLnZhbHVlXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXQgY2hpcHMoKSB7IHJldHVybiB0aGlzLmNoaXBDb250cm9sLnZhbHVlOyB9XHJcblxyXG4gIGZvcm1hdE90aGVyKG90aGVyOiBhbnkpIHtcclxuICAgIGlmIChvdGhlciAmJiB0eXBlb2Ygb3RoZXIgIT09ICdib29sZWFuJykge1xyXG4gICAgICByZXR1cm4gKG90aGVyPy50b0xvY2FsZUxvd2VyQ2FzZSgpIHx8ICcnKVxyXG4gICAgfVxyXG4gICAgcmV0dXJuICcnXHJcbiAgfVxyXG5cclxuXHJcbiAgY2hlY2tTdWJGb3JtKGZvcm1zKSB7XHJcbiAgICBsZXQgaGFzU3ViRm9ybSA9IGZhbHNlO1xyXG4gICAgaWYgKGZvcm1zLmZvcm1zICYmIGZvcm1zLmZvcm1zLmxlbmd0aCkge1xyXG4gICAgICBoYXNTdWJGb3JtID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIHJldHVybiBoYXNTdWJGb3JtXHJcbiAgfVxyXG5cclxuICBmbGFnKHZhbHVlKSB7XHJcbiAgICBjb25zdCB2YWx1ZVN0cmluZyA9IFN0cmluZyh2YWx1ZSlcclxuICAgIHJldHVybiB2YWx1ZVN0cmluZyAmJiBpc1ZhbGlkUGhvbmVOdW1iZXIodmFsdWVTdHJpbmcpID8gcGFyc2VQaG9uZU51bWJlcih2YWx1ZVN0cmluZykuY291bnRyeSA6IENvdW50cnlJU08uRnJhbmNlO1xyXG4gIH1cclxuXHJcbiAgY2hlY2tQaG9uZShwaG9uZSkge1xyXG4gICAgaWYgKHBob25lKSB7XHJcbiAgICAgIGxldCByZWdleCA9IG5ldyBSZWdFeHAoL1xcKyg5Wzk3Nl1cXGR8OFs5ODc1MzBdXFxkfDZbOTg3XVxcZHw1WzkwXVxcZHw0MlxcZHwzWzg3NV1cXGR8Mls5ODY1NDMyMV1cXGR8OVs4NTQzMjEwXXw4WzY0MjFdfDZbNjU0MzIxMF18NVs4NzY1NDMyMV18NFs5ODc2NTQzMTBdfDNbOTY0MzIxMF18Mls3MF18N3wxKVxcVypcXGRcXFcqXFxkXFxXKlxcZFxcVypcXGRcXFcqXFxkXFxXKlxcZFxcVypcXGRcXFcqXFxkXFxXKihcXGR7MSwyfSkkLylcclxuICAgICAgdGhpcy5pbnZhbGlkZVZhbHVlID0gIXJlZ2V4LnRlc3QocGhvbmVbJ2UxNjROdW1iZXInXSk7XHJcbiAgICAgIHRoaXMub25DaGVja1ZhbHVlLmVtaXQodGhpcy5pbnZhbGlkZVZhbHVlKVxyXG4gICAgfVxyXG4gICAgaWYgKHBob25lICYmIHBob25lW1wibmF0aW9uYWxOdW1iZXJcIl0gJiYgcGhvbmVbXCJuYXRpb25hbE51bWJlclwiXSAhPSAnJykge1xyXG4gICAgICBsZXQgcCA9IHBob25lWyduYXRpb25hbE51bWJlciddLnJlcGxhY2VBbGwoJyAnLCAnJyk7XHJcbiAgICAgIGxldCBuZXdwOiBhbnkgPSAnJztcclxuXHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmIChwLnNwbGl0KCcnKVtpXSkge1xyXG4gICAgICAgICAgaWYgKGkgJSAyID09IDAgJiYgaSA+IDApIHtcclxuICAgICAgICAgICAgbmV3cCArPSAnICc7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBuZXdwICs9IHAuc3BsaXQoJycpW2ldO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICB0aGlzLmZpZWxkLnZhbHVlID0gcGhvbmVbXCJuYXRpb25hbE51bWJlclwiXVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbn1cclxuIiwiPGRpdiBjbGFzcz1cImZpZWxkLWl0ZW1cIj5cclxuICAgIDxuZy1jb250YWluZXIgW25nU3dpdGNoXT1cImZpZWxkLnR5cGVcIj5cclxuICAgICAgICA8ZGl2ICpuZ1N3aXRjaENhc2U9XCIndG9nZ2xlJ1wiIGNsYXNzPVwiZmxleC1hdXRvIGZpZWxkLXNpemUgdG9nZ2xlLWJ1dHRvblwiPlxyXG4gICAgICAgICAgICA8c3Bhbj57eyBmaWVsZC5sYWJlbCB9fTwvc3Bhbj5cclxuICAgICAgICAgICAgPG1hdC1zbGlkZS10b2dnbGUgY2xhc3M9XCJmb3JtLWZpZWxkXCIgWyhuZ01vZGVsKV09XCJmaWVsZC5kZWZhdWx0VmFsdWVcIlxyXG4gICAgICAgICAgICAgICAgW25nTW9kZWxPcHRpb25zXT1cInsgc3RhbmRhbG9uZTogdHJ1ZSB9XCIgW25nU3R5bGVdPVwiZmllbGQuc2VsZWN0b3IgJiYgeyBkaXNwbGF5OiAnaW5pbmUtYmxvY2snIH1cIj5cclxuICAgICAgICAgICAgPC9tYXQtc2xpZGUtdG9nZ2xlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgKm5nU3dpdGNoQ2FzZT1cIidjaGVja2JveCdcIiBjbGFzcz1cImZsZXgtYXV0byB3LTMwXCI+XHJcbiAgICAgICAgICAgIDxtYXQtY2hlY2tib3ggY2xhc3M9XCJmb3JtLWZpZWxkXCIgc3R5bGU9XCJtYXJnaW4tcmlnaHQ6IDEwcHg7XCJcclxuICAgICAgICAgICAgICAgIFtjbGFzc109XCJjaGVja1N1YkZvcm0oZmllbGQpID8gJ2NoZWNrYm94LXRpdGxlLWFjdGl2ZSc6JydcIiBbKG5nTW9kZWwpXT1cImZpZWxkLnZhbHVlXCJcclxuICAgICAgICAgICAgICAgIFtyZXF1aXJlZF09XCJmaWVsZC5pc01hbmRhdG9yeVwiIFtuZ01vZGVsT3B0aW9uc109XCJ7c3RhbmRhbG9uZTogdHJ1ZX1cIlxyXG4gICAgICAgICAgICAgICAgW25nU3R5bGVdPVwiZmllbGQuc2VsZWN0b3IgJiYgeydkaXNwbGF5JzogJ2luaW5lLWJsb2NrJ31cIj5cclxuICAgICAgICAgICAgICAgIHt7ZmllbGQubGFiZWx9fVxyXG4gICAgICAgICAgICA8L21hdC1jaGVja2JveD5cclxuXHJcblxyXG4gICAgICAgICAgICA8bWF0LXNlbGVjdCBwbGFjZWhvbGRlcj1cIkNvbXBhbnlcIiBbKG5nTW9kZWwpXT1cImZpZWxkLnNlbGVjdG9yLnZhbHVlXCIgW25nTW9kZWxPcHRpb25zXT1cIntzdGFuZGFsb25lOiB0cnVlfVwiXHJcbiAgICAgICAgICAgICAgICByZXF1aXJlZCAqbmdJZj1cImZpZWxkLnNlbGVjdG9yXCIgc3R5bGU9XCJkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IHdpZHRoOiA1MCU7XCI+XHJcbiAgICAgICAgICAgICAgICA8bWF0LW9wdGlvbiAqbmdGb3I9XCJsZXQgc2VsZWN0IG9mIGZpZWxkLnNlbGVjdG9yLmRlZmF1bHRWYWx1ZVwiIFt2YWx1ZV09XCJzZWxlY3QudmFsdWVcIj5cclxuICAgICAgICAgICAgICAgICAgICB7e3NlbGVjdC52YWx1ZX19PC9tYXQtb3B0aW9uPlxyXG4gICAgICAgICAgICA8L21hdC1zZWxlY3Q+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiAqbmdTd2l0Y2hDYXNlPVwiJ2NoZWNrYm94X211bHRpcGxlJ1wiIGNsYXNzPVwiZmxleC1hdXRvIHctMzBcIj5cclxuICAgICAgICAgICAgPGxhYmVsPnt7ZmllbGQubGFiZWx9fTwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJvbmJvYXJkaW5nLXNlbGVjdFwiIHN0eWxlPVwibWFyZ2luLXRvcDogMjBweDtcIj5cclxuICAgICAgICAgICAgICAgIDxtYXQtY2hlY2tib3ggY2xhc3M9XCJmb3JtLWZpZWxkXCJcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT1cImRpc3BsYXk6IGJsb2NrOyBtYXJnaW4tYm90dG9tOiA1cHg7IG1hcmdpbi10b3A6IDEwcHg7bWFyZ2luLXJpZ2h0OiAxMHB4O1wiXHJcbiAgICAgICAgICAgICAgICAgICAgKm5nRm9yPVwibGV0IG9wdCBvZiBmaWVsZC5kZWZhdWx0VmFsdWVcIiBbY2hlY2tlZF09XCJvcHQuY2hlY2tlZFwiIFsobmdNb2RlbCldPVwib3B0LmNoZWNrZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgIFtyZXF1aXJlZF09XCJmaWVsZC5pc01hbmRhdG9yeVwiIFtuZ01vZGVsT3B0aW9uc109XCJ7c3RhbmRhbG9uZTogdHJ1ZX1cIj5cclxuICAgICAgICAgICAgICAgICAgICB7e29wdC52YWx1ZX19XHJcbiAgICAgICAgICAgICAgICA8L21hdC1jaGVja2JveD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiAqbmdTd2l0Y2hDYXNlPVwiJ3JhZGlvJ1wiIGNsYXNzPVwiZmxleC1hdXRvIHctMzAgZmllbGQtc2l6ZVwiPlxyXG4gICAgICAgICAgICA8bGFiZWwgc3R5bGU9XCJkaXNwbGF5OiBibG9jaztcIj4ge3tmaWVsZC5sYWJlbH19IDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxtYXQtcmFkaW8tZ3JvdXAgY2xhc3M9XCJmb3JtLWZpZWxkIHJhZGlvLWdyb3VwIGZpZWxkLXNpemVcIiBbKG5nTW9kZWwpXT1cImZpZWxkLnZhbHVlXCJcclxuICAgICAgICAgICAgICAgIFtyZXF1aXJlZF09XCJmaWVsZC5pc01hbmRhdG9yeVwiIGFyaWEtbGFiZWw9XCJTZWxlY3QgYW4gb3B0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICA8bWF0LXJhZGlvLWJ1dHRvbiAqbmdGb3I9XCJsZXQgb3B0IG9mIGZpZWxkLmRlZmF1bHRWYWx1ZVwiIFt2YWx1ZV09XCJvcHQudmFsdWVcIj57e29wdC52YWx1ZX19XHJcbiAgICAgICAgICAgICAgICA8L21hdC1yYWRpby1idXR0b24+XHJcbiAgICAgICAgICAgIDwvbWF0LXJhZGlvLWdyb3VwPlxyXG4gICAgICAgICAgICA8bWF0LWZvcm0tZmllbGQgKm5nSWY9XCInYXV0cmUnPT09Zm9ybWF0T3RoZXIoZmllbGQudmFsdWUpXCIgY2xhc3M9XCJmb3JtLWZpZWxkIGZpZWxkLXNpemUgb3RoZXItb3B0aW9uXCJcclxuICAgICAgICAgICAgICAgIGFwcGVhcmFuY2U9XCJvdXRsaW5lXCI+XHJcbiAgICAgICAgICAgICAgICA8bWF0LWxhYmVsPkF1dHJlIG9wdGlvbjwvbWF0LWxhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgW3JlcXVpcmVkXT1cImZpZWxkLmlzTWFuZGF0b3J5XCIgbWF0SW5wdXQgW25nTW9kZWxPcHRpb25zXT1cIntzdGFuZGFsb25lOiB0cnVlfVwiXHJcbiAgICAgICAgICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJmaWVsZC5vdGhlclZhbHVlXCIgcGxhY2Vob2xkZXI9XCJcIj5cclxuICAgICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2ICpuZ1N3aXRjaENhc2U9XCInc2VsZWN0J1wiIGNsYXNzPVwiZmxleC1hdXRvIHctMzAgZmllbGQtc2l6ZVwiPlxyXG4gICAgICAgICAgICA8bWF0LWZvcm0tZmllbGQgY2xhc3M9XCIgbWF0LXNlbGVjdCBmbGV4LWF1dG8gdy0zMCBmaWVsZC1zaXplXCIgYXBwZWFyYW5jZT1cIm91dGxpbmVcIj5cclxuICAgICAgICAgICAgICAgIDxtYXQtbGFiZWw+IHt7ZmllbGQubGFiZWx9fSA8L21hdC1sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxtYXQtc2VsZWN0IFsobmdNb2RlbCldPVwiZmllbGQudmFsdWVcIiBbbmdNb2RlbE9wdGlvbnNdPVwie3N0YW5kYWxvbmU6IHRydWV9XCJcclxuICAgICAgICAgICAgICAgICAgICBbcmVxdWlyZWRdPVwiZmllbGQuaXNNYW5kYXRvcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bWF0LW9wdGlvbiAqbmdGb3I9XCJsZXQgb3B0IG9mIGZpZWxkLmRlZmF1bHRWYWx1ZVwiIFt2YWx1ZV09XCJvcHQudmFsdWVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3tvcHQudmFsdWV9fTwvbWF0LW9wdGlvbj5cclxuICAgICAgICAgICAgICAgIDwvbWF0LXNlbGVjdD5cclxuICAgICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgICAgICAgICAgPG1hdC1mb3JtLWZpZWxkICpuZ0lmPVwiJ2F1dHJlJz09PWZvcm1hdE90aGVyKGZpZWxkLnZhbHVlKVwiIGNsYXNzPVwiZm9ybS1maWVsZCBmaWVsZC1zaXplIG90aGVyLW9wdGlvblwiXHJcbiAgICAgICAgICAgICAgICBhcHBlYXJhbmNlPVwib3V0bGluZVwiPlxyXG4gICAgICAgICAgICAgICAgPG1hdC1sYWJlbD5BdXRyZSBvcHRpb248L21hdC1sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIFtyZXF1aXJlZF09XCJmaWVsZC5pc01hbmRhdG9yeVwiIG1hdElucHV0IFtuZ01vZGVsT3B0aW9uc109XCJ7c3RhbmRhbG9uZTogdHJ1ZX1cIlxyXG4gICAgICAgICAgICAgICAgICAgIFsobmdNb2RlbCldPVwiZmllbGQub3RoZXJWYWx1ZVwiIHBsYWNlaG9sZGVyPVwiXCI+XHJcbiAgICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPG1hdC1mb3JtLWZpZWxkICpuZ1N3aXRjaENhc2U9XCIndGV4dGFyZWEnXCIgY2xhc3M9XCJmb3JtLWZpZWxkIGZ1bGwtd2lkdGhcIiBhcHBlYXJhbmNlPVwib3V0bGluZVwiPlxyXG4gICAgICAgICAgICA8bWF0LWxhYmVsPnt7ZmllbGQubGFiZWx9fTwvbWF0LWxhYmVsPlxyXG4gICAgICAgICAgICA8dGV4dGFyZWEgdHlwZT1cInRleHRcIiByb3dzPVwiNVwiIG1hdElucHV0IFtyZXF1aXJlZF09XCJmaWVsZC5pc01hbmRhdG9yeVwiIFtuZ01vZGVsT3B0aW9uc109XCJ7c3RhbmRhbG9uZTogdHJ1ZX1cIlxyXG4gICAgICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJmaWVsZC52YWx1ZVwiIHBsYWNlaG9sZGVyPVwiRGVzY3JpcHRpb24uLi5cIj48L3RleHRhcmVhPlxyXG4gICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgPGRpdiAqbmdTd2l0Y2hDYXNlPVwiJ3RlbCdcIiBjbGFzcz1cImZvcm0tZmllbGQgZnVsbC13aWR0aCB0ZWwtaW5wdXRcIj5cclxuICAgICAgICAgICAgPG1hdC1sYWJlbCBjbGFzcz1cInRlbC1sYWJlbFwiPnt7ZmllbGQubGFiZWx9fTwvbWF0LWxhYmVsPlxyXG4gICAgICAgICAgICA8bmd4LWludGwtdGVsLWlucHV0IGlkPVwib25ib2FyZGluZy1waG9uZS1pbnB1dFwiIGNsYXNzPVwicGhvbmUtaW5wdXQtcHJvZmlsZVwiIFtjc3NDbGFzc109XCInaW5wdXQtcGhvbmUnXCJcclxuICAgICAgICAgICAgICAgIFtwcmVmZXJyZWRDb3VudHJpZXNdPVwicHJlZmVycmVkQ291bnRyaWVzXCIgW2VuYWJsZUF1dG9Db3VudHJ5U2VsZWN0XT1cImZhbHNlXCIgW2VuYWJsZVBsYWNlaG9sZGVyXT1cInRydWVcIlxyXG4gICAgICAgICAgICAgICAgW2N1c3RvbVBsYWNlaG9sZGVyXT1cIidQaG9uZSdcIiBbc2VsZWN0Rmlyc3RDb3VudHJ5XT1cImZhbHNlXCIgW3NlbGVjdGVkQ291bnRyeUlTT109XCJmbGFnKGZpZWxkLnZhbHVlKVwiXHJcbiAgICAgICAgICAgICAgICBbbWF4TGVuZ3RoXT1cIjE1XCIgW2lucHV0SWRdPVwiZmllbGQua2V5XCIgW3Bob25lVmFsaWRhdGlvbl09XCJ0cnVlXCIgW3NlcGFyYXRlRGlhbENvZGVdPVwic2VwYXJhdGVEaWFsQ29kZVwiXHJcbiAgICAgICAgICAgICAgICBbbnVtYmVyRm9ybWF0XT1cIlBob25lTnVtYmVyRm9ybWF0Lk5hdGlvbmFsXCIgbmFtZT1cInBob25lXCIgKGlucHV0KT1cImNoZWNrUGhvbmUoZmllbGQudmFsdWUpXCJcclxuICAgICAgICAgICAgICAgIFtuZ01vZGVsT3B0aW9uc109XCJ7c3RhbmRhbG9uZTogdHJ1ZX1cIiBbKG5nTW9kZWwpXT1cImZpZWxkLnZhbHVlXCI+XHJcbiAgICAgICAgICAgIDwvbmd4LWludGwtdGVsLWlucHV0PlxyXG4gICAgICAgICAgICA8bWF0LWVycm9yICpuZ0lmPVwiaW52YWxpZGVWYWx1ZVwiPkxlIHTDqWzDqXBob25lIGVzdCBpbnZhbGlkZTwvbWF0LWVycm9yPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxtYXQtZm9ybS1maWVsZCAqbmdTd2l0Y2hDYXNlPVwiJ25vbmUnXCIgY2xhc3M9XCJmb3JtLWZpZWxkIGZpZWxkLXNpemVcIiBhcHBlYXJhbmNlPVwib3V0bGluZVwiIHN0eWxlPVwib3BhY2l0eTowIDtcIj5cclxuICAgICAgICAgICAgPG1hdC1sYWJlbD48L21hdC1sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0IFt0eXBlXT1cImZpZWxkLnR5cGVcIiBkaXNhYmxlZD1cInRydWVcIiBtYXRJbnB1dCAvPlxyXG4gICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgPG1hdC1mb3JtLWZpZWxkICpuZ1N3aXRjaERlZmF1bHQgY2xhc3M9XCJmb3JtLWZpZWxkIGZpZWxkLXNpemVcIiBhcHBlYXJhbmNlPVwib3V0bGluZVwiPlxyXG4gICAgICAgICAgICA8bWF0LWxhYmVsPnt7ZmllbGQubGFiZWx9fTwvbWF0LWxhYmVsPlxyXG4gICAgICAgICAgICA8aW5wdXQgW3R5cGVdPVwiZmllbGQudHlwZVwiIFtyZXF1aXJlZF09XCJmaWVsZC5pc01hbmRhdG9yeVwiIG1hdElucHV0IFtuZ01vZGVsT3B0aW9uc109XCJ7c3RhbmRhbG9uZTogdHJ1ZX1cIlxyXG4gICAgICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJmaWVsZC52YWx1ZVwiIHBsYWNlaG9sZGVyPVwiXCI+XHJcbiAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgIDwvbmctY29udGFpbmVyPlxyXG48L2Rpdj5cclxuPG5nLWNvbnRlbnQgc2VsZWN0PVwiLmNoaWxkXCI+PC9uZy1jb250ZW50PiJdfQ==