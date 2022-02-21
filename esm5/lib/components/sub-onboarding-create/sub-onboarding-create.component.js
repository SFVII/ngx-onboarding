import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ENTER, COMMA, SEMICOLON } from '@angular/cdk/keycodes';
import { FormControl } from '@angular/forms';
import { CountryISO, PhoneNumberFormat } from 'ngx-intl-tel-input';
import { isValidPhoneNumber, parsePhoneNumber } from 'libphonenumber-js';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/material/checkbox";
import * as i3 from "@angular/forms";
import * as i4 from "ngx-intl-tel-input";
import * as i5 from "@angular/material/select";
import * as i6 from "@angular/material/core";
import * as i7 from "@angular/material/radio";
import * as i8 from "@angular/material/form-field";
import * as i9 from "@angular/material/input";
function SubOnboardingCreateComponent_div_2_div_1_mat_select_3_mat_option_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 11);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var select_r806 = ctx.$implicit;
    i0.ɵɵproperty("value", select_r806.value);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", select_r806.value, "");
} }
var _c0 = function () { return { standalone: true }; };
function SubOnboardingCreateComponent_div_2_div_1_mat_select_3_Template(rf, ctx) { if (rf & 1) {
    var _r808 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-select", 9);
    i0.ɵɵlistener("ngModelChange", function SubOnboardingCreateComponent_div_2_div_1_mat_select_3_Template_mat_select_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r808); var ctx_r807 = i0.ɵɵnextContext(3); return ctx_r807.field.selector.value = $event; });
    i0.ɵɵtemplate(1, SubOnboardingCreateComponent_div_2_div_1_mat_select_3_mat_option_1_Template, 2, 2, "mat-option", 10);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r804 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("ngModel", ctx_r804.field.selector.value)("ngModelOptions", i0.ɵɵpureFunction0(3, _c0));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r804.field.selector.defaultValue);
} }
var _c1 = function () { return { "display": "inine-block" }; };
function SubOnboardingCreateComponent_div_2_div_1_Template(rf, ctx) { if (rf & 1) {
    var _r810 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 6);
    i0.ɵɵelementStart(1, "mat-checkbox", 7);
    i0.ɵɵlistener("ngModelChange", function SubOnboardingCreateComponent_div_2_div_1_Template_mat_checkbox_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r810); var ctx_r809 = i0.ɵɵnextContext(2); return ctx_r809.field.value = $event; });
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, SubOnboardingCreateComponent_div_2_div_1_mat_select_3_Template, 2, 4, "mat-select", 8);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r803 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵclassMap(ctx_r803.checkSubForm(ctx_r803.field) ? "checkbox-title-active" : "");
    i0.ɵɵproperty("ngModel", ctx_r803.field.value)("required", ctx_r803.field.isMandatory)("ngModelOptions", i0.ɵɵpureFunction0(8, _c0))("ngStyle", ctx_r803.field.selector && i0.ɵɵpureFunction0(9, _c1));
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r803.field.label, " ");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r803.field.selector);
} }
function SubOnboardingCreateComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 6);
    i0.ɵɵtemplate(1, SubOnboardingCreateComponent_div_2_div_1_Template, 4, 10, "div", 2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", "checkbox");
} }
function SubOnboardingCreateComponent_div_3_mat_checkbox_4_Template(rf, ctx) { if (rf & 1) {
    var _r814 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-checkbox", 14);
    i0.ɵɵlistener("ngModelChange", function SubOnboardingCreateComponent_div_3_mat_checkbox_4_Template_mat_checkbox_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r814); var opt_r812 = ctx.$implicit; return opt_r812.checked = $event; });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var opt_r812 = ctx.$implicit;
    var ctx_r811 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("checked", opt_r812.checked)("ngModel", opt_r812.checked)("required", ctx_r811.field.isMandatory)("ngModelOptions", i0.ɵɵpureFunction0(5, _c0));
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", opt_r812.value, " ");
} }
function SubOnboardingCreateComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 6);
    i0.ɵɵelementStart(1, "label");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 12);
    i0.ɵɵtemplate(4, SubOnboardingCreateComponent_div_3_mat_checkbox_4_Template, 2, 6, "mat-checkbox", 13);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r797 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r797.field.label);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r797.field.defaultValue);
} }
function SubOnboardingCreateComponent_div_4_mat_radio_button_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-radio-button", 11);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var opt_r817 = ctx.$implicit;
    i0.ɵɵproperty("value", opt_r817.value);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1("", opt_r817.value, " ");
} }
function SubOnboardingCreateComponent_div_4_mat_form_field_5_Template(rf, ctx) { if (rf & 1) {
    var _r819 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-form-field", 18);
    i0.ɵɵelementStart(1, "mat-label");
    i0.ɵɵtext(2, "Autre option");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "input", 19);
    i0.ɵɵlistener("ngModelChange", function SubOnboardingCreateComponent_div_4_mat_form_field_5_Template_input_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r819); var ctx_r818 = i0.ɵɵnextContext(2); return ctx_r818.field.otherValue = $event; });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r816 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("required", ctx_r816.field.isMandatory)("ngModelOptions", i0.ɵɵpureFunction0(3, _c0))("ngModel", ctx_r816.field.otherValue);
} }
function SubOnboardingCreateComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    var _r821 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 6);
    i0.ɵɵelementStart(1, "label", 15);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "mat-radio-group", 16);
    i0.ɵɵlistener("ngModelChange", function SubOnboardingCreateComponent_div_4_Template_mat_radio_group_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r821); var ctx_r820 = i0.ɵɵnextContext(); return ctx_r820.field.value = $event; });
    i0.ɵɵtemplate(4, SubOnboardingCreateComponent_div_4_mat_radio_button_4_Template, 2, 2, "mat-radio-button", 10);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(5, SubOnboardingCreateComponent_div_4_mat_form_field_5_Template, 4, 4, "mat-form-field", 17);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r798 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r798.field.label, " ");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", ctx_r798.field.value)("required", ctx_r798.field.isMandatory);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r798.field.defaultValue);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", "autre" === ctx_r798.formatOther(ctx_r798.field.value));
} }
function SubOnboardingCreateComponent_div_5_mat_option_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 11);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var opt_r824 = ctx.$implicit;
    i0.ɵɵproperty("value", opt_r824.value);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(opt_r824.value);
} }
function SubOnboardingCreateComponent_div_5_mat_form_field_6_Template(rf, ctx) { if (rf & 1) {
    var _r826 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-form-field", 18);
    i0.ɵɵelementStart(1, "mat-label");
    i0.ɵɵtext(2, "Autre option");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "input", 19);
    i0.ɵɵlistener("ngModelChange", function SubOnboardingCreateComponent_div_5_mat_form_field_6_Template_input_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r826); var ctx_r825 = i0.ɵɵnextContext(2); return ctx_r825.field.otherValue = $event; });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r823 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("required", ctx_r823.field.isMandatory)("ngModelOptions", i0.ɵɵpureFunction0(3, _c0))("ngModel", ctx_r823.field.otherValue);
} }
function SubOnboardingCreateComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    var _r828 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 6);
    i0.ɵɵelementStart(1, "mat-form-field", 20);
    i0.ɵɵelementStart(2, "mat-label");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "mat-select", 21);
    i0.ɵɵlistener("ngModelChange", function SubOnboardingCreateComponent_div_5_Template_mat_select_ngModelChange_4_listener($event) { i0.ɵɵrestoreView(_r828); var ctx_r827 = i0.ɵɵnextContext(); return ctx_r827.field.value = $event; });
    i0.ɵɵtemplate(5, SubOnboardingCreateComponent_div_5_mat_option_5_Template, 2, 2, "mat-option", 10);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(6, SubOnboardingCreateComponent_div_5_mat_form_field_6_Template, 4, 4, "mat-form-field", 17);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r799 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", ctx_r799.field.label, " ");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", ctx_r799.field.value)("ngModelOptions", i0.ɵɵpureFunction0(6, _c0))("required", ctx_r799.field.isMandatory);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r799.field.defaultValue);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", "autre" === ctx_r799.formatOther(ctx_r799.field.value));
} }
function SubOnboardingCreateComponent_mat_form_field_6_Template(rf, ctx) { if (rf & 1) {
    var _r830 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-form-field", 22);
    i0.ɵɵelementStart(1, "mat-label");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "textarea", 23);
    i0.ɵɵlistener("ngModelChange", function SubOnboardingCreateComponent_mat_form_field_6_Template_textarea_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r830); var ctx_r829 = i0.ɵɵnextContext(); return ctx_r829.field.value = $event; });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r800 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r800.field.label);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("required", ctx_r800.field.isMandatory)("ngModelOptions", i0.ɵɵpureFunction0(4, _c0))("ngModel", ctx_r800.field.value);
} }
function SubOnboardingCreateComponent_div_7_mat_error_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-error");
    i0.ɵɵtext(1, "Le t\u00E9l\u00E9phone est invalide");
    i0.ɵɵelementEnd();
} }
function SubOnboardingCreateComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    var _r833 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 24);
    i0.ɵɵelementStart(1, "mat-label", 25);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "ngx-intl-tel-input", 26);
    i0.ɵɵlistener("input", function SubOnboardingCreateComponent_div_7_Template_ngx_intl_tel_input_input_3_listener() { i0.ɵɵrestoreView(_r833); var ctx_r832 = i0.ɵɵnextContext(); return ctx_r832.checkPhone(ctx_r832.field.value); })("ngModelChange", function SubOnboardingCreateComponent_div_7_Template_ngx_intl_tel_input_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r833); var ctx_r834 = i0.ɵɵnextContext(); return ctx_r834.field.value = $event; });
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(4, SubOnboardingCreateComponent_div_7_mat_error_4_Template, 2, 0, "mat-error", 27);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r801 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r801.field.label);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("cssClass", "input-phone")("preferredCountries", ctx_r801.preferredCountries)("enableAutoCountrySelect", false)("enablePlaceholder", true)("customPlaceholder", "Phone")("selectFirstCountry", false)("selectedCountryISO", ctx_r801.flag(ctx_r801.field.value))("maxLength", 15)("inputId", ctx_r801.field.key)("phoneValidation", true)("separateDialCode", ctx_r801.separateDialCode)("numberFormat", ctx_r801.PhoneNumberFormat.National)("ngModelOptions", i0.ɵɵpureFunction0(16, _c0))("ngModel", ctx_r801.field.value);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r801.invalideValue);
} }
function SubOnboardingCreateComponent_mat_form_field_8_Template(rf, ctx) { if (rf & 1) {
    var _r836 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-form-field", 28);
    i0.ɵɵelementStart(1, "mat-label");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "input", 29);
    i0.ɵɵlistener("ngModelChange", function SubOnboardingCreateComponent_mat_form_field_8_Template_input_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r836); var ctx_r835 = i0.ɵɵnextContext(); return ctx_r835.field.value = $event; });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r802 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r802.field.label);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("type", ctx_r802.field.type)("required", ctx_r802.field.isMandatory)("ngModelOptions", i0.ɵɵpureFunction0(5, _c0))("ngModel", ctx_r802.field.value);
} }
var _c2 = [[["", 8, "child"]]];
var _c3 = [".child"];
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
        if (other) {
            return other.toLocaleLowerCase();
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
            console.log(newp);
            this.field.value = phone["nationalNumber"];
        }
    };
    SubOnboardingCreateComponent.ɵfac = function SubOnboardingCreateComponent_Factory(t) { return new (t || SubOnboardingCreateComponent)(); };
    SubOnboardingCreateComponent.ɵcmp = i0.ɵɵdefineComponent({ type: SubOnboardingCreateComponent, selectors: [["lib-sub-create-onboarding"]], inputs: { field: "field", length: "length", i: "i", j: "j" }, outputs: { onAddKeywordFromInput: "onAddKeywordFromInput", onKeyPress: "onKeyPress", onDrop: "onDrop", onAddNewField: "onAddNewField", onRemoveField: "onRemoveField", onChangeType: "onChangeType", onRemoveKeyword: "onRemoveKeyword", onAddNewSubLevelField: "onAddNewSubLevelField", onExpendMore: "onExpendMore", onChangeLabel: "onChangeLabel", onCheckedChip: "onCheckedChip", onCheckValue: "onCheckValue" }, ngContentSelectors: _c3, decls: 10, vars: 7, consts: [[1, "field-item"], [3, "ngSwitch"], ["class", "flex-auto w-30 field-size", 4, "ngSwitchCase"], ["class", "form-field full-width", "appearance", "outline", 4, "ngSwitchCase"], ["class", "form-field full-width tel-input", 4, "ngSwitchCase"], ["class", "form-field field-size", "appearance", "outline", 4, "ngSwitchDefault"], [1, "flex-auto", "w-30", "field-size"], [1, "form-field", 3, "ngModel", "required", "ngModelOptions", "ngStyle", "ngModelChange"], ["placeholder", "Company", "required", "", "style", "display: inline-block; width: 50%;", 3, "ngModel", "ngModelOptions", "ngModelChange", 4, "ngIf"], ["placeholder", "Company", "required", "", 2, "display", "inline-block", "width", "50%", 3, "ngModel", "ngModelOptions", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], [2, "margin-top", "20px"], ["class", "form-field", "style", "display: block; margin-bottom: 5px; margin-top: 10px", 3, "checked", "ngModel", "required", "ngModelOptions", "ngModelChange", 4, "ngFor", "ngForOf"], [1, "form-field", 2, "display", "block", "margin-bottom", "5px", "margin-top", "10px", 3, "checked", "ngModel", "required", "ngModelOptions", "ngModelChange"], [2, "display", "block"], ["aria-label", "Select an option", 1, "form-field", "radio-group", "field-size", 3, "ngModel", "required", "ngModelChange"], ["class", "form-field field-size other-option", "appearance", "outline", 4, "ngIf"], ["appearance", "outline", 1, "form-field", "field-size", "other-option"], ["type", "text", "matInput", "", "placeholder", "", 3, "required", "ngModelOptions", "ngModel", "ngModelChange"], ["appearance", "outline", 1, "flex-auto", "w-30", "field-size"], [3, "ngModel", "ngModelOptions", "required", "ngModelChange"], ["appearance", "outline", 1, "form-field", "full-width"], ["type", "text", "rows", "5", "matInput", "", "placeholder", "Description...", 3, "required", "ngModelOptions", "ngModel", "ngModelChange"], [1, "form-field", "full-width", "tel-input"], [1, "tel-label"], ["id", "onboarding-phone-input", "name", "phone", 1, "phone-input-profile", 3, "cssClass", "preferredCountries", "enableAutoCountrySelect", "enablePlaceholder", "customPlaceholder", "selectFirstCountry", "selectedCountryISO", "maxLength", "inputId", "phoneValidation", "separateDialCode", "numberFormat", "ngModelOptions", "ngModel", "input", "ngModelChange"], [4, "ngIf"], ["appearance", "outline", 1, "form-field", "field-size"], ["matInput", "", "placeholder", "", 3, "type", "required", "ngModelOptions", "ngModel", "ngModelChange"]], template: function SubOnboardingCreateComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef(_c2);
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵelementContainerStart(1, 1);
            i0.ɵɵtemplate(2, SubOnboardingCreateComponent_div_2_Template, 2, 1, "div", 2);
            i0.ɵɵtemplate(3, SubOnboardingCreateComponent_div_3_Template, 5, 2, "div", 2);
            i0.ɵɵtemplate(4, SubOnboardingCreateComponent_div_4_Template, 6, 5, "div", 2);
            i0.ɵɵtemplate(5, SubOnboardingCreateComponent_div_5_Template, 7, 7, "div", 2);
            i0.ɵɵtemplate(6, SubOnboardingCreateComponent_mat_form_field_6_Template, 4, 5, "mat-form-field", 3);
            i0.ɵɵtemplate(7, SubOnboardingCreateComponent_div_7_Template, 5, 17, "div", 4);
            i0.ɵɵtemplate(8, SubOnboardingCreateComponent_mat_form_field_8_Template, 4, 6, "mat-form-field", 5);
            i0.ɵɵelementContainerEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵprojection(9);
        } if (rf & 2) {
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngSwitch", ctx.field.type);
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
        } }, directives: [i1.NgSwitch, i1.NgSwitchCase, i1.NgSwitchDefault, i2.MatCheckbox, i2.MatCheckboxRequiredValidator, i3.NgControlStatus, i3.NgModel, i4.NativeElementInjectorDirective, i3.RequiredValidator, i1.NgStyle, i1.NgIf, i5.MatSelect, i1.NgForOf, i6.MatOption, i7.MatRadioGroup, i7.MatRadioButton, i8.MatFormField, i8.MatLabel, i9.MatInput, i3.DefaultValueAccessor, i4.NgxIntlTelInputComponent, i8.MatError], styles: [".container[_ngcontent-%COMP%]{max-width:98%;margin:50px auto auto;padding-bottom:50px}.container[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:space-between}.input-category-name[_ngcontent-%COMP%]{font-size:15px;font-weight:500}.full-width[_ngcontent-%COMP%]{width:100%}.field-item[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;width:100%;flex-wrap:wrap;min-width:250px;position:relative}.field-item[_ngcontent-%COMP%]   .button-action[_ngcontent-%COMP%]{background-color:#6fe8d7;height:100%;margin:auto 15px auto auto;display:flex}.field-item[_ngcontent-%COMP%]   .button-action[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{box-shadow:none;background-color:transparent;color:#fff}.field-action[_ngcontent-%COMP%]{width:10%}.field-size[_ngcontent-%COMP%]   mat-checkbox[_ngcontent-%COMP%]{margin:20px}hr[_ngcontent-%COMP%]{margin:50px 0}  .mat-form-field-appearance-fill .mat-form-field-flex{background-color:#fff}.category-action[_ngcontent-%COMP%]{display:flex;width:100%}.delete-field[_ngcontent-%COMP%]{margin:auto 2%}.radio-group[_ngcontent-%COMP%]   .mat-radio-button[_ngcontent-%COMP%]{margin-right:10px}.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary[_ngcontent-%COMP%]{background-color:#3f51b5;color:#fff;min-height:20px;font-size:10px}.move-icons[_ngcontent-%COMP%]{cursor:move}.category-item[_ngcontent-%COMP%]{display:flex;align-items:baseline;width:100%;border:1px solid #dce4e9;border-radius:8px}  .readonly.mat-form-field-appearance-outline .mat-form-field-outline{color:transparent!important}.field-content[_ngcontent-%COMP%]{width:100%}.cdk-drag-preview[_ngcontent-%COMP%]{box-sizing:border-box;border-radius:4px;box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.cdk-drag-placeholder[_ngcontent-%COMP%]{opacity:0}.cdk-drag-animating[_ngcontent-%COMP%], .example-list.cdk-drop-list-dragging[_ngcontent-%COMP%]   .category-item[_ngcontent-%COMP%]:not(.cdk-drag-placeholder){transition:transform 250ms cubic-bezier(0,0,.2,1)}.add-button-container[_ngcontent-%COMP%]{background:no-repeat padding-box #fff;border:1px dashed #dce4e9;border-radius:8px;margin-top:10px;padding:10px;display:flex;justify-content:center;align-items:center;width:98%;margin-left:0;margin-bottom:22px}.add-button-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{display:flex;align-items:center;background-color:transparent;border:none;cursor:pointer;font:17px/26px Nexa Text;letter-spacing:0;color:#c2c8d5;box-shadow:none}.expand-button[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%]{font-size:48px;margin-top:-20px;margin-right:15px}.transparent-button[_ngcontent-%COMP%]{background-color:transparent!important;box-shadow:none!important;width:40px!important;padding:0!important;margin:0!important;min-width:auto!important}.expand-button[_ngcontent-%COMP%]{color:#5a607f!important;background-color:transparent!important;box-shadow:none!important}.checkbox-title-active[_ngcontent-%COMP%]{font-weight:700}.other-option[_ngcontent-%COMP%]{margin-left:10px}.flex-auto[_ngcontent-%COMP%]{width:100%}.flex-auto[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{width:80%}  .country-dropdown{min-width:unset!important}  .tel-input{position:relative}  .tel-input .tel-label{font-size:10px;color:rgba(0,0,0,.6);position:absolute;z-index:1;background-color:#fff;padding:0 2px;left:8px;top:-7px}  .phone-input-profile{padding-bottom:.3em;padding-top:0;display:block!important;max-width:100%;font:14px/20px \"Nexa Text\"!important;width:95%}  .phone-input-profile .iti{width:100%!important}  .phone-input-profile input{outline:0;padding:19px;border-radius:5px;border-width:1px;width:85%;border:1px solid rgba(0,0,0,.12)}"] });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3ViLW9uYm9hcmRpbmctY3JlYXRlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL29uYm9hcmRpbmcvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9zdWItb25ib2FyZGluZy1jcmVhdGUvc3ViLW9uYm9hcmRpbmctY3JlYXRlLmNvbXBvbmVudC50cyIsImxpYi9jb21wb25lbnRzL3N1Yi1vbmJvYXJkaW5nLWNyZWF0ZS9zdWItb25ib2FyZGluZy1jcmVhdGUuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvRSxPQUFPLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ25FLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG1CQUFtQixDQUFDOzs7Ozs7Ozs7Ozs7SUNVckQsc0NBQ0k7SUFBQSxZQUFnQjtJQUFBLGlCQUFhOzs7SUFEOEIseUNBQXNCO0lBQ2pGLGVBQWdCO0lBQWhCLGlEQUFnQjs7Ozs7SUFKeEIscUNBR0k7SUFIOEIsbVFBQWtDO0lBR2hFLHFIQUNJO0lBQ1IsaUJBQWE7OztJQUxxQix1REFBa0MsOENBQUE7SUFHcEQsZUFBa0Q7SUFBbEQsOERBQWtEOzs7OztJQVh0RSw4QkFDSTtJQUFBLHVDQUdJO0lBRkEsK09BQXlCO0lBRXpCLFlBQ0o7SUFBQSxpQkFBZTtJQUdmLHVHQUdJO0lBR1IsaUJBQU07OztJQWIrQixlQUEwRDtJQUExRCxtRkFBMEQ7SUFDdkYsOENBQXlCLHdDQUFBLDhDQUFBLGtFQUFBO0lBRXpCLGVBQ0o7SUFE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QjtZQUM1QixlQUEwQjtZQUExQix5Q0FBMEI7WUFpQjFCLGVBQW1DO1lBQW5DLGtEQUFtQztZQVVuQyxlQUF1QjtZQUF2QixzQ0FBdUI7WUFjdkIsZUFBd0I7WUFBeEIsdUNBQXdCO1lBZWIsZUFBMEI7WUFBMUIseUNBQTBCO1lBS3JDLGVBQXFCO1lBQXJCLG9DQUFxQjs7dUNEL0RsQztDQXlKQyxBQW5KRCxJQW1KQztTQTlJWSw0QkFBNEI7a0RBQTVCLDRCQUE0QjtjQUx4QyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLDJCQUEyQjtnQkFDckMsV0FBVyxFQUFFLHdDQUF3QztnQkFDckQsU0FBUyxFQUFFLENBQUMsd0NBQXdDLENBQUM7YUFDdEQ7O2tCQUVFLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLE1BQU07O2tCQUNOLE1BQU07O2tCQUNOLE1BQU07O2tCQUNOLE1BQU07O2tCQUNOLE1BQU07O2tCQUNOLE1BQU07O2tCQUNOLE1BQU07O2tCQUNOLE1BQU07O2tCQUNOLE1BQU07O2tCQUNOLE1BQU07O2tCQUNOLE1BQU07O2tCQUNOLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBFTlRFUiwgQ09NTUEsIFNFTUlDT0xPTiB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9rZXljb2Rlcyc7XG5pbXBvcnQgeyBGb3JtQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IENvdW50cnlJU08sIFBob25lTnVtYmVyRm9ybWF0IH0gZnJvbSAnbmd4LWludGwtdGVsLWlucHV0JztcbmltcG9ydCB7IGlzVmFsaWRQaG9uZU51bWJlciwgcGFyc2VQaG9uZU51bWJlciB9IGZyb20gJ2xpYnBob25lbnVtYmVyLWpzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLXN1Yi1jcmVhdGUtb25ib2FyZGluZycsXG4gIHRlbXBsYXRlVXJsOiAnLi9zdWItb25ib2FyZGluZy1jcmVhdGUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zdWItb25ib2FyZGluZy1jcmVhdGUuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBTdWJPbmJvYXJkaW5nQ3JlYXRlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgZmllbGQ6IGFueVxuICBASW5wdXQoKSBsZW5ndGg6IGFueVxuICBASW5wdXQoKSBpOiBhbnlcbiAgQElucHV0KCkgajogYW55XG4gIEBPdXRwdXQoKSBvbkFkZEtleXdvcmRGcm9tSW5wdXQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKVxuICBAT3V0cHV0KCkgb25LZXlQcmVzcyA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpXG4gIEBPdXRwdXQoKSBvbkRyb3AgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKVxuICBAT3V0cHV0KCkgb25BZGROZXdGaWVsZCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpXG4gIEBPdXRwdXQoKSBvblJlbW92ZUZpZWxkID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KClcbiAgQE91dHB1dCgpIG9uQ2hhbmdlVHlwZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpXG4gIEBPdXRwdXQoKSBvblJlbW92ZUtleXdvcmQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKVxuICBAT3V0cHV0KCkgb25BZGROZXdTdWJMZXZlbEZpZWxkID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KClcbiAgQE91dHB1dCgpIG9uRXhwZW5kTW9yZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpXG4gIEBPdXRwdXQoKSBvbkNoYW5nZUxhYmVsID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KClcbiAgQE91dHB1dCgpIG9uQ2hlY2tlZENoaXAgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKVxuICBAT3V0cHV0KCkgb25DaGVja1ZhbHVlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KClcblxuICBjaGlwQ29udHJvbCA9IG5ldyBGb3JtQ29udHJvbChuZXcgU2V0KCkpO1xuICBwcmVmZXJyZWRDb3VudHJpZXM6IENvdW50cnlJU09bXSA9IFtDb3VudHJ5SVNPLlVuaXRlZFN0YXRlcywgQ291bnRyeUlTTy5GcmFuY2VdO1xuICBQaG9uZU51bWJlckZvcm1hdCA9IFBob25lTnVtYmVyRm9ybWF0O1xuICBzZXBhcmF0b3JLZXlzQ29kZXMgPSBbRU5URVIsIENPTU1BLCBTRU1JQ09MT05dO1xuICBpbnZhbGlkZVZhbHVlID0gZmFsc2U7XG4gIGN1cnJlbnRDaGlwPVwiXCJcbiAgc2VwYXJhdGVEaWFsQ29kZSA9IGZhbHNlO1xuICBwcmV2VmFsdWU9XCJcIlxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICB9XG5cbiAgZHJvcChldmVudCkge1xuICAgIHRoaXMub25Ecm9wLmVtaXQoZXZlbnQpXG4gIH1cblxuICBhZGRLZXl3b3JkRnJvbUlucHV0KGV2ZW50LCBpLCBqKSB7XG4gICAgdGhpcy5vbkFkZEtleXdvcmRGcm9tSW5wdXQuZW1pdCh7IGV2ZW50LHByZXY6dGhpcy5wcmV2VmFsdWUsIGksIGogfSk7XG4gIH1cblxuICBrZXlVcChldmVudCwgaSwgaikge1xuICAgIHRoaXMub25LZXlQcmVzcy5lbWl0KHsgZXZlbnQsIGksIGogfSlcbiAgfVxuXG4gIGFkZE5ld0ZpZWxkKGV2ZW50LCBpKSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIHRoaXMub25BZGROZXdGaWVsZC5lbWl0KHsgZXZlbnQsIGkgfSlcbiAgfVxuXG4gIHJlbW92ZUZpZWxkKGV2ZW50LCBpLCBqKSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIHRoaXMub25SZW1vdmVGaWVsZC5lbWl0KHsgaSwgaiB9KVxuICB9XG5cbiAgY2hhbmdlVHlwZSh0eXBlLCBpLCBqKSB7XG4gICAgdGhpcy5vbkNoYW5nZVR5cGUuZW1pdCh7IHR5cGUsIGksIGogfSlcbiAgfVxuXG4gIHJlbW92ZUtleXdvcmQoZXZlbnQsIGksIGopIHtcbiAgICB0aGlzLm9uUmVtb3ZlS2V5d29yZC5lbWl0KHsgZXZlbnQsIGksIGogfSlcbiAgfVxuICBhZGROZXdTdWJMZXZlbEZpZWxkKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICB0aGlzLm9uQWRkTmV3U3ViTGV2ZWxGaWVsZC5lbWl0KHRydWUpXG4gIH1cbiAgZXhwZW5kTW9yZShlLCBmaWVsZCkge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIHRoaXMub25FeHBlbmRNb3JlLmVtaXQoe2V4cGFuZDp0cnVlLCBmaWVsZH0pXG4gIH1cblxuICBpbmdvcmVEZWZhdWx0QWN0aW9uKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgfVxuXG4gIGNoYW5nZUxhYmVsKGxhYmVsLGtleSl7XG4gICAgdGhpcy5vbkNoYW5nZUxhYmVsLmVtaXQoe2xhYmVsLCBrZXl9KVxuICB9XG5cbiAgdG9nZ2xlQ2hpcCA9IChjaGlwOiBhbnkpID0+IHtcbiAgICB0aGlzLm9uQ2hlY2tlZENoaXAuZW1pdChjaGlwKVxuICAgIC8vIGNvbnN0IGFkZENoaXAgPSAoKSA9PiB7IHRoaXMuY2hpcHMuYWRkKGNoaXApOyB9O1xuICAgIC8vIGNvbnN0IHJlbW92ZUNoaXAgPSAoKSA9PiB7IHRoaXMuY2hpcHMuZGVsZXRlKGNoaXApOyB9O1xuICAgIC8vIHRoaXMuY2hpcHMuaGFzKGNoaXApID8gcmVtb3ZlQ2hpcCgpIDogYWRkQ2hpcCgpO1xuXG4gIH1cblxuICBvbkVkaXRDaGlwKGNoaXApe1xuICAgIGlmKGNoaXAudmFsdWU9PT10aGlzLmN1cnJlbnRDaGlwKXtcbiAgICAgIHRoaXMuY3VycmVudENoaXA9XCJcIlxuICAgICAgdGhpcy5wcmV2VmFsdWU9XCJcIlxuICAgIH1lbHNle1xuICAgICAgdGhpcy5jdXJyZW50Q2hpcD1jaGlwLnZhbHVlO1xuICAgICAgdGhpcy5wcmV2VmFsdWU9Y2hpcC52YWx1ZVxuICAgIH1cbiAgfVxuXG4gIGdldCBjaGlwcygpIHsgcmV0dXJuIHRoaXMuY2hpcENvbnRyb2wudmFsdWU7IH1cblxuICBmb3JtYXRPdGhlcihvdGhlcjpzdHJpbmcpe1xuICAgaWYob3RoZXIpe1xuICAgIHJldHVybiBvdGhlci50b0xvY2FsZUxvd2VyQ2FzZSgpXG4gICB9XG4gICByZXR1cm4gJydcbiAgfVxuXG5cbiAgY2hlY2tTdWJGb3JtKGZvcm1zKXtcbiAgICBsZXQgaGFzU3ViRm9ybT1mYWxzZTtcbiAgICBpZihmb3Jtcy5mb3JtcyAmJiBmb3Jtcy5mb3Jtcy5sZW5ndGgpe1xuICAgICAgaGFzU3ViRm9ybT10cnVlO1xuICAgIH0gICAgXG4gICAgcmV0dXJuIGhhc1N1YkZvcm1cbiAgfVxuXG4gIGZsYWcodmFsdWUpe1xuICAgIGNvbnN0IHZhbHVlU3RyaW5nPVN0cmluZyh2YWx1ZSlcbiAgICByZXR1cm4gIHZhbHVlU3RyaW5nICYmIGlzVmFsaWRQaG9uZU51bWJlcih2YWx1ZVN0cmluZykgPyBwYXJzZVBob25lTnVtYmVyKHZhbHVlU3RyaW5nKS5jb3VudHJ5IDogQ291bnRyeUlTTy5GcmFuY2U7XG4gIH1cblxuICBjaGVja1Bob25lKHBob25lKSB7XG4gICBpZiAocGhvbmUpIHtcbiAgICAgICAgbGV0IHJlZ2V4ID0gbmV3IFJlZ0V4cCgvXFwrKDlbOTc2XVxcZHw4Wzk4NzUzMF1cXGR8Nls5ODddXFxkfDVbOTBdXFxkfDQyXFxkfDNbODc1XVxcZHwyWzk4NjU0MzIxXVxcZHw5Wzg1NDMyMTBdfDhbNjQyMV18Nls2NTQzMjEwXXw1Wzg3NjU0MzIxXXw0Wzk4NzY1NDMxMF18M1s5NjQzMjEwXXwyWzcwXXw3fDEpXFxXKlxcZFxcVypcXGRcXFcqXFxkXFxXKlxcZFxcVypcXGRcXFcqXFxkXFxXKlxcZFxcVypcXGRcXFcqKFxcZHsxLDJ9KSQvKVxuICAgICAgICB0aGlzLmludmFsaWRlVmFsdWUgPSAhcmVnZXgudGVzdChwaG9uZVsnZTE2NE51bWJlciddKTtcbiAgICAgICAgdGhpcy5vbkNoZWNrVmFsdWUuZW1pdCh0aGlzLmludmFsaWRlVmFsdWUpXG4gICAgfVxuICAgIGlmIChwaG9uZSAmJiBwaG9uZVtcIm5hdGlvbmFsTnVtYmVyXCJdICYmIHBob25lW1wibmF0aW9uYWxOdW1iZXJcIl0gIT0gJycpIHtcbiAgICAgICAgbGV0IHAgPSBwaG9uZVsnbmF0aW9uYWxOdW1iZXInXS5yZXBsYWNlQWxsKCcgJywgJycpO1xuICAgICAgICBsZXQgbmV3cDogYW55ID0gJyc7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAocC5zcGxpdCgnJylbaV0pIHtcbiAgICAgICAgICAgICAgICBpZiAoaSAlIDIgPT0gMCAmJiBpID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBuZXdwICs9ICcgJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbmV3cCArPSBwLnNwbGl0KCcnKVtpXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnNvbGUubG9nKG5ld3ApO1xuICAgICAgdGhpcy5maWVsZC52YWx1ZT1waG9uZVtcIm5hdGlvbmFsTnVtYmVyXCJdICBcbiAgICB9XG4gIH1cblxufVxuIiwiPGRpdiBjbGFzcz1cImZpZWxkLWl0ZW1cIj5cbiAgICA8bmctY29udGFpbmVyIFtuZ1N3aXRjaF09XCJmaWVsZC50eXBlXCI+XG4gICAgICAgIDxkaXYgKm5nU3dpdGNoQ2FzZT1cIidjaGVja2JveCdcIiBjbGFzcz1cImZsZXgtYXV0byB3LTMwIGZpZWxkLXNpemVcIj5cbiAgICAgICAgICAgIDxkaXYgKm5nU3dpdGNoQ2FzZT1cIidjaGVja2JveCdcIiBjbGFzcz1cImZsZXgtYXV0byB3LTMwIGZpZWxkLXNpemVcIj5cbiAgICAgICAgICAgICAgICA8bWF0LWNoZWNrYm94IGNsYXNzPVwiZm9ybS1maWVsZFwiIFtjbGFzc109XCJjaGVja1N1YkZvcm0oZmllbGQpID8gJ2NoZWNrYm94LXRpdGxlLWFjdGl2ZSc6JydcIlxuICAgICAgICAgICAgICAgICAgICBbKG5nTW9kZWwpXT1cImZpZWxkLnZhbHVlXCIgW3JlcXVpcmVkXT1cImZpZWxkLmlzTWFuZGF0b3J5XCIgW25nTW9kZWxPcHRpb25zXT1cIntzdGFuZGFsb25lOiB0cnVlfVwiXG4gICAgICAgICAgICAgICAgICAgIFtuZ1N0eWxlXT1cImZpZWxkLnNlbGVjdG9yICYmIHsnZGlzcGxheSc6ICdpbmluZS1ibG9jayd9XCI+XG4gICAgICAgICAgICAgICAgICAgIHt7ZmllbGQubGFiZWx9fVxuICAgICAgICAgICAgICAgIDwvbWF0LWNoZWNrYm94PlxuXG5cbiAgICAgICAgICAgICAgICA8bWF0LXNlbGVjdCBwbGFjZWhvbGRlcj1cIkNvbXBhbnlcIiBbKG5nTW9kZWwpXT1cImZpZWxkLnNlbGVjdG9yLnZhbHVlXCJcbiAgICAgICAgICAgICAgICAgICAgW25nTW9kZWxPcHRpb25zXT1cIntzdGFuZGFsb25lOiB0cnVlfVwiIHJlcXVpcmVkICpuZ0lmPVwiZmllbGQuc2VsZWN0b3JcIlxuICAgICAgICAgICAgICAgICAgICBzdHlsZT1cImRpc3BsYXk6IGlubGluZS1ibG9jazsgd2lkdGg6IDUwJTtcIj5cbiAgICAgICAgICAgICAgICAgICAgPG1hdC1vcHRpb24gKm5nRm9yPVwibGV0IHNlbGVjdCBvZiBmaWVsZC5zZWxlY3Rvci5kZWZhdWx0VmFsdWVcIiBbdmFsdWVdPVwic2VsZWN0LnZhbHVlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7e3NlbGVjdC52YWx1ZX19PC9tYXQtb3B0aW9uPlxuICAgICAgICAgICAgICAgIDwvbWF0LXNlbGVjdD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiAqbmdTd2l0Y2hDYXNlPVwiJ2NoZWNrYm94X211bHRpcGxlJ1wiIGNsYXNzPVwiZmxleC1hdXRvIHctMzAgZmllbGQtc2l6ZVwiPlxuICAgICAgICAgICAgPGxhYmVsPnt7ZmllbGQubGFiZWx9fTwvbGFiZWw+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPVwibWFyZ2luLXRvcDogMjBweDtcIj5cbiAgICAgICAgICAgICAgICA8bWF0LWNoZWNrYm94IGNsYXNzPVwiZm9ybS1maWVsZFwiIHN0eWxlPVwiZGlzcGxheTogYmxvY2s7IG1hcmdpbi1ib3R0b206IDVweDsgbWFyZ2luLXRvcDogMTBweFwiXG4gICAgICAgICAgICAgICAgICAgICpuZ0Zvcj1cImxldCBvcHQgb2YgZmllbGQuZGVmYXVsdFZhbHVlXCIgW2NoZWNrZWRdPVwib3B0LmNoZWNrZWRcIiBbKG5nTW9kZWwpXT1cIm9wdC5jaGVja2VkXCJcbiAgICAgICAgICAgICAgICAgICAgW3JlcXVpcmVkXT1cImZpZWxkLmlzTWFuZGF0b3J5XCIgW25nTW9kZWxPcHRpb25zXT1cIntzdGFuZGFsb25lOiB0cnVlfVwiPlxuICAgICAgICAgICAgICAgICAgICB7e29wdC52YWx1ZX19XG4gICAgICAgICAgICAgICAgPC9tYXQtY2hlY2tib3g+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgKm5nU3dpdGNoQ2FzZT1cIidyYWRpbydcIiBjbGFzcz1cImZsZXgtYXV0byB3LTMwIGZpZWxkLXNpemVcIj5cbiAgICAgICAgICAgIDxsYWJlbCBzdHlsZT1cImRpc3BsYXk6IGJsb2NrO1wiPiB7e2ZpZWxkLmxhYmVsfX0gPC9sYWJlbD5cbiAgICAgICAgICAgIDxtYXQtcmFkaW8tZ3JvdXAgY2xhc3M9XCJmb3JtLWZpZWxkIHJhZGlvLWdyb3VwIGZpZWxkLXNpemVcIiBbKG5nTW9kZWwpXT1cImZpZWxkLnZhbHVlXCJcbiAgICAgICAgICAgICAgICBbcmVxdWlyZWRdPVwiZmllbGQuaXNNYW5kYXRvcnlcIiBhcmlhLWxhYmVsPVwiU2VsZWN0IGFuIG9wdGlvblwiPlxuICAgICAgICAgICAgICAgIDxtYXQtcmFkaW8tYnV0dG9uICpuZ0Zvcj1cImxldCBvcHQgb2YgZmllbGQuZGVmYXVsdFZhbHVlXCIgW3ZhbHVlXT1cIm9wdC52YWx1ZVwiPnt7b3B0LnZhbHVlfX1cbiAgICAgICAgICAgICAgICA8L21hdC1yYWRpby1idXR0b24+XG4gICAgICAgICAgICA8L21hdC1yYWRpby1ncm91cD5cbiAgICAgICAgICAgIDxtYXQtZm9ybS1maWVsZCAqbmdJZj1cIidhdXRyZSc9PT1mb3JtYXRPdGhlcihmaWVsZC52YWx1ZSlcIiBjbGFzcz1cImZvcm0tZmllbGQgZmllbGQtc2l6ZSBvdGhlci1vcHRpb25cIlxuICAgICAgICAgICAgICAgIGFwcGVhcmFuY2U9XCJvdXRsaW5lXCI+XG4gICAgICAgICAgICAgICAgPG1hdC1sYWJlbD5BdXRyZSBvcHRpb248L21hdC1sYWJlbD5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBbcmVxdWlyZWRdPVwiZmllbGQuaXNNYW5kYXRvcnlcIiBtYXRJbnB1dCBbbmdNb2RlbE9wdGlvbnNdPVwie3N0YW5kYWxvbmU6IHRydWV9XCJcbiAgICAgICAgICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJmaWVsZC5vdGhlclZhbHVlXCIgcGxhY2Vob2xkZXI9XCJcIj5cbiAgICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2ICpuZ1N3aXRjaENhc2U9XCInc2VsZWN0J1wiIGNsYXNzPVwiZmxleC1hdXRvIHctMzAgZmllbGQtc2l6ZVwiPlxuICAgICAgICAgICAgPG1hdC1mb3JtLWZpZWxkIGNsYXNzPVwiZmxleC1hdXRvIHctMzAgZmllbGQtc2l6ZVwiIGFwcGVhcmFuY2U9XCJvdXRsaW5lXCI+XG4gICAgICAgICAgICAgICAgPG1hdC1sYWJlbD4ge3tmaWVsZC5sYWJlbH19IDwvbWF0LWxhYmVsPlxuICAgICAgICAgICAgICAgIDxtYXQtc2VsZWN0IFsobmdNb2RlbCldPVwiZmllbGQudmFsdWVcIiBbbmdNb2RlbE9wdGlvbnNdPVwie3N0YW5kYWxvbmU6IHRydWV9XCJcbiAgICAgICAgICAgICAgICAgICAgW3JlcXVpcmVkXT1cImZpZWxkLmlzTWFuZGF0b3J5XCI+XG4gICAgICAgICAgICAgICAgICAgIDxtYXQtb3B0aW9uICpuZ0Zvcj1cImxldCBvcHQgb2YgZmllbGQuZGVmYXVsdFZhbHVlXCIgW3ZhbHVlXT1cIm9wdC52YWx1ZVwiPnt7b3B0LnZhbHVlfX08L21hdC1vcHRpb24+XG4gICAgICAgICAgICAgICAgPC9tYXQtc2VsZWN0PlxuICAgICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cbiAgICAgICAgICAgIDxtYXQtZm9ybS1maWVsZCAqbmdJZj1cIidhdXRyZSc9PT1mb3JtYXRPdGhlcihmaWVsZC52YWx1ZSlcIiBjbGFzcz1cImZvcm0tZmllbGQgZmllbGQtc2l6ZSBvdGhlci1vcHRpb25cIlxuICAgICAgICAgICAgICAgIGFwcGVhcmFuY2U9XCJvdXRsaW5lXCI+XG4gICAgICAgICAgICAgICAgPG1hdC1sYWJlbD5BdXRyZSBvcHRpb248L21hdC1sYWJlbD5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBbcmVxdWlyZWRdPVwiZmllbGQuaXNNYW5kYXRvcnlcIiBtYXRJbnB1dCBbbmdNb2RlbE9wdGlvbnNdPVwie3N0YW5kYWxvbmU6IHRydWV9XCJcbiAgICAgICAgICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJmaWVsZC5vdGhlclZhbHVlXCIgcGxhY2Vob2xkZXI9XCJcIj5cbiAgICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8bWF0LWZvcm0tZmllbGQgKm5nU3dpdGNoQ2FzZT1cIid0ZXh0YXJlYSdcIiBjbGFzcz1cImZvcm0tZmllbGQgZnVsbC13aWR0aFwiIGFwcGVhcmFuY2U9XCJvdXRsaW5lXCI+XG4gICAgICAgICAgICA8bWF0LWxhYmVsPnt7ZmllbGQubGFiZWx9fTwvbWF0LWxhYmVsPlxuICAgICAgICAgICAgPHRleHRhcmVhIHR5cGU9XCJ0ZXh0XCIgcm93cz1cIjVcIiBtYXRJbnB1dCBbcmVxdWlyZWRdPVwiZmllbGQuaXNNYW5kYXRvcnlcIiBbbmdNb2RlbE9wdGlvbnNdPVwie3N0YW5kYWxvbmU6IHRydWV9XCJcbiAgICAgICAgICAgICAgICBbKG5nTW9kZWwpXT1cImZpZWxkLnZhbHVlXCIgcGxhY2Vob2xkZXI9XCJEZXNjcmlwdGlvbi4uLlwiPjwvdGV4dGFyZWE+XG4gICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XG4gICAgICAgIDxkaXYgKm5nU3dpdGNoQ2FzZT1cIid0ZWwnXCIgY2xhc3M9XCJmb3JtLWZpZWxkIGZ1bGwtd2lkdGggdGVsLWlucHV0XCI+XG4gICAgICAgICAgICA8bWF0LWxhYmVsIGNsYXNzPVwidGVsLWxhYmVsXCI+e3tmaWVsZC5sYWJlbH19PC9tYXQtbGFiZWw+XG4gICAgICAgICAgICA8bmd4LWludGwtdGVsLWlucHV0IGlkPVwib25ib2FyZGluZy1waG9uZS1pbnB1dFwiIGNsYXNzPVwicGhvbmUtaW5wdXQtcHJvZmlsZVwiIFtjc3NDbGFzc109XCInaW5wdXQtcGhvbmUnXCJcbiAgICAgICAgICAgICAgICBbcHJlZmVycmVkQ291bnRyaWVzXT1cInByZWZlcnJlZENvdW50cmllc1wiIFtlbmFibGVBdXRvQ291bnRyeVNlbGVjdF09XCJmYWxzZVwiIFtlbmFibGVQbGFjZWhvbGRlcl09XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICBbY3VzdG9tUGxhY2Vob2xkZXJdPVwiJ1Bob25lJ1wiIFtzZWxlY3RGaXJzdENvdW50cnldPVwiZmFsc2VcIiBbc2VsZWN0ZWRDb3VudHJ5SVNPXT1cImZsYWcoZmllbGQudmFsdWUpXCJcbiAgICAgICAgICAgICAgICBbbWF4TGVuZ3RoXT1cIjE1XCIgW2lucHV0SWRdPVwiZmllbGQua2V5XCIgW3Bob25lVmFsaWRhdGlvbl09XCJ0cnVlXCIgW3NlcGFyYXRlRGlhbENvZGVdPVwic2VwYXJhdGVEaWFsQ29kZVwiXG4gICAgICAgICAgICAgICAgW251bWJlckZvcm1hdF09XCJQaG9uZU51bWJlckZvcm1hdC5OYXRpb25hbFwiIG5hbWU9XCJwaG9uZVwiIChpbnB1dCk9XCJjaGVja1Bob25lKGZpZWxkLnZhbHVlKVwiXG4gICAgICAgICAgICAgICAgW25nTW9kZWxPcHRpb25zXT1cIntzdGFuZGFsb25lOiB0cnVlfVwiIFsobmdNb2RlbCldPVwiZmllbGQudmFsdWVcIj5cbiAgICAgICAgICAgIDwvbmd4LWludGwtdGVsLWlucHV0PlxuICAgICAgICAgICAgPG1hdC1lcnJvciAqbmdJZj1cImludmFsaWRlVmFsdWVcIj5MZSB0w6lsw6lwaG9uZSBlc3QgaW52YWxpZGU8L21hdC1lcnJvcj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPG1hdC1mb3JtLWZpZWxkICpuZ1N3aXRjaERlZmF1bHQgY2xhc3M9XCJmb3JtLWZpZWxkIGZpZWxkLXNpemVcIiBhcHBlYXJhbmNlPVwib3V0bGluZVwiPlxuICAgICAgICAgICAgPG1hdC1sYWJlbD57e2ZpZWxkLmxhYmVsfX08L21hdC1sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dCBbdHlwZV09XCJmaWVsZC50eXBlXCIgW3JlcXVpcmVkXT1cImZpZWxkLmlzTWFuZGF0b3J5XCIgbWF0SW5wdXQgW25nTW9kZWxPcHRpb25zXT1cIntzdGFuZGFsb25lOiB0cnVlfVwiXG4gICAgICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJmaWVsZC52YWx1ZVwiIHBsYWNlaG9sZGVyPVwiXCI+XG4gICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XG4gICAgPC9uZy1jb250YWluZXI+XG48L2Rpdj5cbjxuZy1jb250ZW50IHNlbGVjdD1cIi5jaGlsZFwiPjwvbmctY29udGVudD4iXX0=