import { COMMA, ENTER, SEMICOLON } from '@angular/cdk/keycodes';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CountryISO, PhoneNumberFormat } from 'ngx-intl-tel-input';
import { isValidPhoneNumber, parsePhoneNumber } from 'libphonenumber-js';
import { FormControl } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/material/button";
import * as i3 from "@angular/material/icon";
import * as i4 from "@angular/material/slide-toggle";
import * as i5 from "@angular/forms";
import * as i6 from "ngx-intl-tel-input";
import * as i7 from "@angular/material/form-field";
import * as i8 from "@angular/material/checkbox";
import * as i9 from "@angular/material/select";
import * as i10 from "@angular/material/core";
import * as i11 from "@angular/material/radio";
import * as i12 from "@angular/material/input";
var _c0 = function () { return { standalone: true }; };
var _c1 = function () { return { display: "inine-block" }; };
function SubTemplateProfileComponent_div_0_div_5_Template(rf, ctx) { if (rf & 1) {
    var _r809 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 11);
    i0.ɵɵelementStart(1, "span");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "mat-slide-toggle", 12);
    i0.ɵɵlistener("ngModelChange", function SubTemplateProfileComponent_div_0_div_5_Template_mat_slide_toggle_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r809); var ctx_r808 = i0.ɵɵnextContext(2); return ctx_r808.field.defaultValue = $event; });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r801 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r801.field.label);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", ctx_r801.field.defaultValue)("ngModelOptions", i0.ɵɵpureFunction0(4, _c0))("ngStyle", ctx_r801.field.selector && i0.ɵɵpureFunction0(5, _c1));
} }
function SubTemplateProfileComponent_div_0_div_6_mat_error_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-error");
    i0.ɵɵtext(1, "Le t\u00E9l\u00E9phone est invalide");
    i0.ɵɵelementEnd();
} }
function SubTemplateProfileComponent_div_0_div_6_Template(rf, ctx) { if (rf & 1) {
    var _r812 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 13);
    i0.ɵɵelementStart(1, "mat-label", 14);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "ngx-intl-tel-input", 15);
    i0.ɵɵlistener("input", function SubTemplateProfileComponent_div_0_div_6_Template_ngx_intl_tel_input_input_3_listener() { i0.ɵɵrestoreView(_r812); var ctx_r811 = i0.ɵɵnextContext(2); return ctx_r811.checkPhone(ctx_r811.field.value); })("ngModelChange", function SubTemplateProfileComponent_div_0_div_6_Template_ngx_intl_tel_input_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r812); var ctx_r813 = i0.ɵɵnextContext(2); return ctx_r813.field.value = $event; });
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(4, SubTemplateProfileComponent_div_0_div_6_mat_error_4_Template, 2, 0, "mat-error", 16);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r802 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r802.field.label);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("cssClass", "input-phone")("preferredCountries", ctx_r802.preferredCountries)("enableAutoCountrySelect", false)("enablePlaceholder", true)("customPlaceholder", "Phone")("selectFirstCountry", false)("selectedCountryISO", ctx_r802.flag(ctx_r802.field.value))("maxLength", 15)("inputId", ctx_r802.field.key)("phoneValidation", true)("separateDialCode", ctx_r802.separateDialCode)("numberFormat", ctx_r802.PhoneNumberFormat.National)("ngModelOptions", i0.ɵɵpureFunction0(16, _c0))("ngModel", ctx_r802.field.value);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r802.invalideValue);
} }
function SubTemplateProfileComponent_div_0_div_7_mat_select_3_mat_option_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 21);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var select_r816 = ctx.$implicit;
    i0.ɵɵproperty("value", select_r816.value);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", select_r816.value, " ");
} }
function SubTemplateProfileComponent_div_0_div_7_mat_select_3_Template(rf, ctx) { if (rf & 1) {
    var _r818 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-select", 19);
    i0.ɵɵlistener("ngModelChange", function SubTemplateProfileComponent_div_0_div_7_mat_select_3_Template_mat_select_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r818); var ctx_r817 = i0.ɵɵnextContext(3); return ctx_r817.field.selector.value = $event; });
    i0.ɵɵtemplate(1, SubTemplateProfileComponent_div_0_div_7_mat_select_3_mat_option_1_Template, 2, 2, "mat-option", 20);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r814 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("ngModel", ctx_r814.field.selector.value)("ngModelOptions", i0.ɵɵpureFunction0(3, _c0));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r814.field.selector.defaultValue);
} }
function SubTemplateProfileComponent_div_0_div_7_Template(rf, ctx) { if (rf & 1) {
    var _r820 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 17);
    i0.ɵɵelementStart(1, "mat-checkbox", 12);
    i0.ɵɵlistener("ngModelChange", function SubTemplateProfileComponent_div_0_div_7_Template_mat_checkbox_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r820); var ctx_r819 = i0.ɵɵnextContext(2); return ctx_r819.field.value = $event; });
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, SubTemplateProfileComponent_div_0_div_7_mat_select_3_Template, 2, 4, "mat-select", 18);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r803 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", ctx_r803.field.value)("ngModelOptions", i0.ɵɵpureFunction0(5, _c0))("ngStyle", ctx_r803.field.selector && i0.ɵɵpureFunction0(6, _c1));
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r803.field.label, " ");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r803.field.selector);
} }
function SubTemplateProfileComponent_div_0_div_8_mat_checkbox_4_Template(rf, ctx) { if (rf & 1) {
    var _r824 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-checkbox", 25);
    i0.ɵɵlistener("ngModelChange", function SubTemplateProfileComponent_div_0_div_8_mat_checkbox_4_Template_mat_checkbox_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r824); var opt_r822 = ctx.$implicit; return opt_r822.checked = $event; });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var opt_r822 = ctx.$implicit;
    i0.ɵɵproperty("checked", opt_r822.checked)("ngModel", opt_r822.checked)("ngModelOptions", i0.ɵɵpureFunction0(4, _c0));
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", opt_r822.value, " ");
} }
function SubTemplateProfileComponent_div_0_div_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 22);
    i0.ɵɵelementStart(1, "label");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 23);
    i0.ɵɵtemplate(4, SubTemplateProfileComponent_div_0_div_8_mat_checkbox_4_Template, 2, 5, "mat-checkbox", 24);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r804 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r804.field.label);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r804.field.defaultValue);
} }
function SubTemplateProfileComponent_div_0_div_9_mat_radio_button_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-radio-button", 29);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var opt_r826 = ctx.$implicit;
    i0.ɵɵproperty("value", opt_r826.value);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1("", opt_r826.value, " ");
} }
function SubTemplateProfileComponent_div_0_div_9_Template(rf, ctx) { if (rf & 1) {
    var _r828 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 17);
    i0.ɵɵelementStart(1, "label", 26);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "mat-radio-group", 27);
    i0.ɵɵlistener("ngModelChange", function SubTemplateProfileComponent_div_0_div_9_Template_mat_radio_group_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r828); var ctx_r827 = i0.ɵɵnextContext(2); return ctx_r827.field.value = $event; });
    i0.ɵɵtemplate(4, SubTemplateProfileComponent_div_0_div_9_mat_radio_button_4_Template, 2, 2, "mat-radio-button", 28);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r805 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r805.field.label, " ");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", ctx_r805.field.value)("required", ctx_r805.field.isMandatory);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r805.field.defaultValue);
} }
function SubTemplateProfileComponent_div_0_div_10_mat_option_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 21);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var opt_r830 = ctx.$implicit;
    i0.ɵɵproperty("value", opt_r830.value);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(opt_r830.value);
} }
function SubTemplateProfileComponent_div_0_div_10_Template(rf, ctx) { if (rf & 1) {
    var _r832 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 30);
    i0.ɵɵelementStart(1, "mat-form-field", 31);
    i0.ɵɵelementStart(2, "mat-label");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "mat-select", 32);
    i0.ɵɵlistener("ngModelChange", function SubTemplateProfileComponent_div_0_div_10_Template_mat_select_ngModelChange_4_listener($event) { i0.ɵɵrestoreView(_r832); var ctx_r831 = i0.ɵɵnextContext(2); return ctx_r831.field.value = $event; });
    i0.ɵɵtemplate(5, SubTemplateProfileComponent_div_0_div_10_mat_option_5_Template, 2, 2, "mat-option", 20);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r806 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", ctx_r806.field.label, " ");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", ctx_r806.field.value)("ngModelOptions", i0.ɵɵpureFunction0(4, _c0));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r806.field.defaultValue);
} }
function SubTemplateProfileComponent_div_0_mat_form_field_11_Template(rf, ctx) { if (rf & 1) {
    var _r834 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-form-field", 33);
    i0.ɵɵelementStart(1, "mat-label");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "input", 34);
    i0.ɵɵlistener("ngModelChange", function SubTemplateProfileComponent_div_0_mat_form_field_11_Template_input_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r834); var ctx_r833 = i0.ɵɵnextContext(2); return ctx_r833.field.defaultValue = $event; });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r807 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r807.field.label);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("type", ctx_r807.field.type)("ngModelOptions", i0.ɵɵpureFunction0(4, _c0))("ngModel", ctx_r807.field.defaultValue);
} }
function SubTemplateProfileComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    var _r836 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 1);
    i0.ɵɵelementStart(1, "button", 2);
    i0.ɵɵlistener("click", function SubTemplateProfileComponent_div_0_Template_button_click_1_listener($event) { i0.ɵɵrestoreView(_r836); var ctx_r835 = i0.ɵɵnextContext(); return ctx_r835.editBLock($event); });
    i0.ɵɵelementStart(2, "mat-icon", 3);
    i0.ɵɵtext(3, "settings");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerStart(4, 4);
    i0.ɵɵtemplate(5, SubTemplateProfileComponent_div_0_div_5_Template, 4, 6, "div", 5);
    i0.ɵɵtemplate(6, SubTemplateProfileComponent_div_0_div_6_Template, 5, 17, "div", 6);
    i0.ɵɵtemplate(7, SubTemplateProfileComponent_div_0_div_7_Template, 4, 7, "div", 7);
    i0.ɵɵtemplate(8, SubTemplateProfileComponent_div_0_div_8_Template, 5, 2, "div", 8);
    i0.ɵɵtemplate(9, SubTemplateProfileComponent_div_0_div_9_Template, 5, 4, "div", 7);
    i0.ɵɵtemplate(10, SubTemplateProfileComponent_div_0_div_10_Template, 6, 5, "div", 9);
    i0.ɵɵtemplate(11, SubTemplateProfileComponent_div_0_mat_form_field_11_Template, 4, 5, "mat-form-field", 10);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r800 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngSwitch", ctx_r800.field.type);
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
    SubTemplateProfileComponent.prototype.getConditionValues = function () {
        this.onGetConditionValues.emit(true);
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
    SubTemplateProfileComponent.ɵcmp = i0.ɵɵdefineComponent({ type: SubTemplateProfileComponent, selectors: [["lib-sub-category"]], inputs: { field: "field", length: "length", i: "i", j: "j", conditionData: "conditionData" }, outputs: { onAddKeywordFromInput: "onAddKeywordFromInput", onKeyPress: "onKeyPress", onDrop: "onDrop", onAddNewField: "onAddNewField", onRemoveField: "onRemoveField", onChangeType: "onChangeType", onRemoveKeyword: "onRemoveKeyword", onAddNewSubLevelField: "onAddNewSubLevelField", onExpendMore: "onExpendMore", onChangeLabel: "onChangeLabel", onCheckedChip: "onCheckedChip", onCheckedDefault: "onCheckedDefault", onGetConditionValues: "onGetConditionValues", onEditBlock: "onEditBlock", onCheckValue: "onCheckValue" }, ngContentSelectors: _c3, decls: 2, vars: 1, consts: [["class", "field-item", 4, "ngIf"], [1, "field-item"], ["mat-raised-button", "", 1, "transparent-button", "setting", 3, "click"], [1, "setting-icon"], [3, "ngSwitch"], ["class", "flex-auto field-size toggle-button", 4, "ngSwitchCase"], ["class", "form-field full-width tel-input", 4, "ngSwitchCase"], ["class", "flex-auto field-size", 4, "ngSwitchCase"], ["class", "flex-auto field-size", "style", "width: 100%;", 4, "ngSwitchCase"], ["class", "flex-auto field-size select-content", 4, "ngSwitchCase"], ["class", "form-field field-size", "appearance", "outline", 4, "ngSwitchDefault"], [1, "flex-auto", "field-size", "toggle-button"], [1, "form-field", 3, "ngModel", "ngModelOptions", "ngStyle", "ngModelChange"], [1, "form-field", "full-width", "tel-input"], [1, "tel-label"], ["id", "onboarding-phone-input", "name", "phone", 1, "phone-input-profile", 3, "cssClass", "preferredCountries", "enableAutoCountrySelect", "enablePlaceholder", "customPlaceholder", "selectFirstCountry", "selectedCountryISO", "maxLength", "inputId", "phoneValidation", "separateDialCode", "numberFormat", "ngModelOptions", "ngModel", "input", "ngModelChange"], [4, "ngIf"], [1, "flex-auto", "field-size"], ["placeholder", "Company", "style", "display: inline-block; width: 50%", 3, "ngModel", "ngModelOptions", "ngModelChange", 4, "ngIf"], ["placeholder", "Company", 2, "display", "inline-block", "width", "50%", 3, "ngModel", "ngModelOptions", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], [1, "flex-auto", "field-size", 2, "width", "100%"], [1, "onboarding-select", 2, "margin-top", "20px"], ["class", "form-field", "style", "display: block; margin-bottom: 5px; margin-top: 10px", 3, "checked", "ngModel", "ngModelOptions", "ngModelChange", 4, "ngFor", "ngForOf"], [1, "form-field", 2, "display", "block", "margin-bottom", "5px", "margin-top", "10px", 3, "checked", "ngModel", "ngModelOptions", "ngModelChange"], [2, "display", "block"], ["aria-label", "Select an option", 1, "form-field", "radio-group", "field-size", "onboarding-select", 3, "ngModel", "required", "ngModelChange"], ["style", "margin-bottom: 20px;", 3, "value", 4, "ngFor", "ngForOf"], [2, "margin-bottom", "20px", 3, "value"], [1, "flex-auto", "field-size", "select-content"], ["appearance", "outline", 1, "mat-select", "flex-auto", "field-size"], [3, "ngModel", "ngModelOptions", "ngModelChange"], ["appearance", "outline", 1, "form-field", "field-size"], ["matInput", "", "placeholder", "", 3, "type", "ngModelOptions", "ngModel", "ngModelChange"]], template: function SubTemplateProfileComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef(_c2);
            i0.ɵɵtemplate(0, SubTemplateProfileComponent_div_0_Template, 12, 7, "div", 0);
            i0.ɵɵprojection(1);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", !ctx.field.forms || ctx.field.forms.length === 0);
        } }, directives: [i1.NgIf, i2.MatButton, i3.MatIcon, i1.NgSwitch, i1.NgSwitchCase, i1.NgSwitchDefault, i4.MatSlideToggle, i5.NgControlStatus, i5.NgModel, i6.NativeElementInjectorDirective, i1.NgStyle, i7.MatLabel, i6.NgxIntlTelInputComponent, i7.MatError, i8.MatCheckbox, i9.MatSelect, i1.NgForOf, i10.MatOption, i11.MatRadioGroup, i5.RequiredValidator, i11.MatRadioButton, i7.MatFormField, i12.MatInput, i5.DefaultValueAccessor], styles: [".container[_ngcontent-%COMP%]{max-width:98%;margin:50px auto auto;padding-bottom:50px}.container[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:space-between}.input-category-name[_ngcontent-%COMP%]{font-size:15px;font-weight:500}.full-width[_ngcontent-%COMP%]{width:100%}.field-item[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;width:100%;flex-wrap:wrap;position:relative}.field-item[_ngcontent-%COMP%]   .button-action[_ngcontent-%COMP%]{background-color:#6fe8d7;height:100%;margin:auto 15px auto auto;display:flex}.field-item[_ngcontent-%COMP%]   .button-action[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{box-shadow:none;background-color:transparent;color:#fff}.field-item[_ngcontent-%COMP%]   .setting[_ngcontent-%COMP%]{position:absolute;top:-5px;right:-12px;z-index:1;background-color:#d5d6d7!important;border-radius:50px;width:40px!important;height:40px!important;display:none}.field-item[_ngcontent-%COMP%]:hover   .setting[_ngcontent-%COMP%]{display:block}.field-action[_ngcontent-%COMP%]{width:10%}hr[_ngcontent-%COMP%]{margin:50px 0}  .mat-form-field-appearance-fill .mat-form-field-flex{background-color:#fff}.category-action[_ngcontent-%COMP%]{display:flex;width:100%}.delete-field[_ngcontent-%COMP%]{margin:auto 2%}.radio-group[_ngcontent-%COMP%]   .mat-radio-button[_ngcontent-%COMP%]{margin-right:10px}.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary[_ngcontent-%COMP%]{background-color:#3f51b5;color:#fff;min-height:20px;font-size:10px}.move-icons[_ngcontent-%COMP%]{cursor:move}.category-item[_ngcontent-%COMP%]{display:flex;align-items:baseline;width:100%;border:1px solid #dce4e9;border-radius:8px}  .readonly.mat-form-field-appearance-outline .mat-form-field-outline{color:transparent!important}.field-content[_ngcontent-%COMP%]{width:100%}.cdk-drag-preview[_ngcontent-%COMP%]{box-sizing:border-box;border-radius:4px;box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.cdk-drag-placeholder[_ngcontent-%COMP%]{opacity:0}.cdk-drag-animating[_ngcontent-%COMP%], .example-list.cdk-drop-list-dragging[_ngcontent-%COMP%]   .category-item[_ngcontent-%COMP%]:not(.cdk-drag-placeholder){transition:transform 250ms cubic-bezier(0,0,.2,1)}.add-button-container[_ngcontent-%COMP%]{background:no-repeat padding-box #fff;border:1px dashed #dce4e9;border-radius:8px;margin-top:10px;padding:10px;display:flex;justify-content:center;align-items:center;width:98%;margin-left:0;margin-bottom:22px}.add-button-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{display:flex;align-items:center;background-color:transparent;border:none;cursor:pointer;font:17px/26px Nexa Text;letter-spacing:0;color:#c2c8d5;box-shadow:none}.expand-button[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%]{font-size:48px;margin-top:-20px;margin-right:15px}.transparent-button[_ngcontent-%COMP%]{background-color:transparent!important;box-shadow:none!important;width:40px!important;padding:0!important;margin:0!important;min-width:auto!important}.expand-button[_ngcontent-%COMP%]{color:#5a607f!important;background-color:transparent!important;box-shadow:none!important}.checkbox-condition[_ngcontent-%COMP%]{position:relative}.checkbox-condition[_ngcontent-%COMP%]   .condition-container[_ngcontent-%COMP%]{position:absolute;top:30px;width:500px;height:150px;background-color:#fff;border:1px dashed #dce4e9;z-index:1;left:0;border-radius:5px}.checkbox-condition[_ngcontent-%COMP%]   .condition-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{position:absolute;bottom:5px;left:0}.condition-help[_ngcontent-%COMP%]{cursor:pointer}.cdk-overlay-pane[_ngcontent-%COMP%]{width:100%}.child[_ngcontent-%COMP%]{margin-left:0}.child[_ngcontent-%COMP%]   .cdk-drop-list[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap}.toggle-button[_ngcontent-%COMP%]{display:flex;align-items:center}.toggle-button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin-right:10px}.onboarding-select[_ngcontent-%COMP%]{display:-ms-grid;display:grid;-ms-grid-columns:(1fr)[6];grid-template-columns:repeat(6,1fr)}  .country-dropdown{min-width:unset!important}  .tel-input{position:relative}  .tel-input .tel-label{font-size:11px;color:rgba(0,0,0,.6);position:absolute;z-index:1;background-color:#fff;padding:0 2px;left:8px;top:-7px}  .phone-input-profile{padding-bottom:0;padding-top:0;display:block!important;max-width:100%;font:14px/20px \"Nexa Text\"!important;width:100%}  .phone-input-profile .iti{width:100%!important}  .phone-input-profile input{outline:0;padding:19px;border-radius:5px;border-width:1px;width:100%;border:1px solid rgba(0,0,0,.12)}"] });
    return SubTemplateProfileComponent;
}());
export { SubTemplateProfileComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SubTemplateProfileComponent, [{
        type: Component,
        args: [{
                selector: 'lib-sub-category',
                templateUrl: './sub-template-profile.component.html',
                styleUrls: ['./sub-template-profile.component.scss']
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
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3ViLXRlbXBsYXRlLXByb2ZpbGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vb25ib2FyZGluZy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3RlbXBsYXRlL3N1Yi10ZW1wbGF0ZS1wcm9maWxlL3N1Yi10ZW1wbGF0ZS1wcm9maWxlLmNvbXBvbmVudC50cyIsImxpYi9jb21wb25lbnRzL3RlbXBsYXRlL3N1Yi10ZW1wbGF0ZS1wcm9maWxlL3N1Yi10ZW1wbGF0ZS1wcm9maWxlLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDL0UsT0FBTyxFQUFFLFVBQVUsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ25FLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRXpFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDQXpDLCtCQUNFO0lBQUEsNEJBQU07SUFBQSxZQUFpQjtJQUFBLGlCQUFPO0lBQzlCLDRDQUVtQjtJQUZrQix5UEFBZ0M7SUFFckUsaUJBQW1CO0lBQ3JCLGlCQUFNOzs7SUFKRSxlQUFpQjtJQUFqQiwwQ0FBaUI7SUFDYyxlQUFnQztJQUFoQyxxREFBZ0MsOENBQUEsa0VBQUE7OztJQWFyRSxpQ0FBaUM7SUFBQSxtREFBeUI7SUFBQSxpQkFBWTs7OztJQVR4RSwrQkFDRTtJQUFBLHFDQUE2QjtJQUFBLFlBQWU7SUFBQSxpQkFBWTtJQUN4RCw4Q0FNcUI7SUFGc0MsME9BQWlDLHVPQUFBO0lBRTVGLGlCQUFxQjtJQUNyQixxR0FBaUM7SUFDbkMs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QUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFBO1NBQzNDO0lBQ0gsQ0FBQzswR0FqSlUsMkJBQTJCO29FQUEzQiwyQkFBMkI7O1lDWnhDLDZFQUNFO1lBa0VGLGtCQUE0Qjs7WUFuRUosdUVBQThDOztzQ0RBdEU7Q0E4SkMsQUF2SkQsSUF1SkM7U0FsSlksMkJBQTJCO2tEQUEzQiwyQkFBMkI7Y0FMdkMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxrQkFBa0I7Z0JBQzVCLFdBQVcsRUFBRSx1Q0FBdUM7Z0JBQ3BELFNBQVMsRUFBRSxDQUFDLHVDQUF1QyxDQUFDO2FBQ3JEOztrQkFFRSxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxNQUFNOztrQkFDTixNQUFNOztrQkFDTixNQUFNOztrQkFDTixNQUFNOztrQkFDTixNQUFNOztrQkFDTixNQUFNOztrQkFDTixNQUFNOztrQkFDTixNQUFNOztrQkFDTixNQUFNOztrQkFDTixNQUFNOztrQkFDTixNQUFNOztrQkFDTixNQUFNOztrQkFDTixNQUFNOztrQkFDTixNQUFNOztrQkFDTixLQUFLOztrQkFDTCxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ09NTUEsIEVOVEVSLCBTRU1JQ09MT04gfSBmcm9tICdAYW5ndWxhci9jZGsva2V5Y29kZXMnO1xyXG5pbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvdW50cnlJU08sIFBob25lTnVtYmVyRm9ybWF0IH0gZnJvbSAnbmd4LWludGwtdGVsLWlucHV0JztcclxuaW1wb3J0IHsgaXNWYWxpZFBob25lTnVtYmVyLCBwYXJzZVBob25lTnVtYmVyIH0gZnJvbSAnbGlicGhvbmVudW1iZXItanMnO1xyXG5cclxuaW1wb3J0IHsgRm9ybUNvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2xpYi1zdWItY2F0ZWdvcnknLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9zdWItdGVtcGxhdGUtcHJvZmlsZS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vc3ViLXRlbXBsYXRlLXByb2ZpbGUuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU3ViVGVtcGxhdGVQcm9maWxlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBASW5wdXQoKSBmaWVsZDogYW55XHJcbiAgQElucHV0KCkgbGVuZ3RoOiBhbnlcclxuICBASW5wdXQoKSBpOiBhbnlcclxuICBASW5wdXQoKSBqOiBhbnlcclxuICBAT3V0cHV0KCkgb25BZGRLZXl3b3JkRnJvbUlucHV0ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KClcclxuICBAT3V0cHV0KCkgb25LZXlQcmVzcyA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpXHJcbiAgQE91dHB1dCgpIG9uRHJvcCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpXHJcbiAgQE91dHB1dCgpIG9uQWRkTmV3RmllbGQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKVxyXG4gIEBPdXRwdXQoKSBvblJlbW92ZUZpZWxkID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KClcclxuICBAT3V0cHV0KCkgb25DaGFuZ2VUeXBlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KClcclxuICBAT3V0cHV0KCkgb25SZW1vdmVLZXl3b3JkID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KClcclxuICBAT3V0cHV0KCkgb25BZGROZXdTdWJMZXZlbEZpZWxkID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KClcclxuICBAT3V0cHV0KCkgb25FeHBlbmRNb3JlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KClcclxuICBAT3V0cHV0KCkgb25DaGFuZ2VMYWJlbCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpXHJcbiAgQE91dHB1dCgpIG9uQ2hlY2tlZENoaXAgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKVxyXG4gIEBPdXRwdXQoKSBvbkNoZWNrZWREZWZhdWx0ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KClcclxuICBAT3V0cHV0KCkgb25HZXRDb25kaXRpb25WYWx1ZXMgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKVxyXG4gIEBPdXRwdXQoKSBvbkVkaXRCbG9jayA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpXHJcbiAgQElucHV0KCkgY29uZGl0aW9uRGF0YSA9IFtdXHJcbiAgQE91dHB1dCgpIG9uQ2hlY2tWYWx1ZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpXHJcbiAgY2hpcENvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2wobmV3IFNldCgpKTtcclxuICBwcmVmZXJyZWRDb3VudHJpZXM6IENvdW50cnlJU09bXSA9IFtDb3VudHJ5SVNPLlVuaXRlZFN0YXRlcywgQ291bnRyeUlTTy5GcmFuY2VdO1xyXG4gIFBob25lTnVtYmVyRm9ybWF0ID0gUGhvbmVOdW1iZXJGb3JtYXQ7XHJcbiAgc2VwYXJhdG9yS2V5c0NvZGVzID0gW0VOVEVSLCBDT01NQSwgU0VNSUNPTE9OXTtcclxuICBpbnZhbGlkZVZhbHVlID0gZmFsc2U7XHJcbiAgY3VycmVudENoaXAgPSBcIlwiXHJcbiAgc2VwYXJhdGVEaWFsQ29kZSA9IGZhbHNlO1xyXG4gIHByZXZWYWx1ZSA9IFwiXCJcclxuICBzaG93Q29uZGl0aW9uID0gZmFsc2VcclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICB9XHJcblxyXG4gIGRyb3AoZXZlbnQpIHtcclxuICAgIHRoaXMub25Ecm9wLmVtaXQoZXZlbnQpXHJcbiAgfVxyXG5cclxuICBhZGRLZXl3b3JkRnJvbUlucHV0KGV2ZW50LCBpLCBqKSB7XHJcbiAgICB0aGlzLm9uQWRkS2V5d29yZEZyb21JbnB1dC5lbWl0KHsgZXZlbnQsIHByZXY6IHRoaXMucHJldlZhbHVlLCBpLCBqIH0pO1xyXG4gIH1cclxuXHJcbiAga2V5VXAoZXZlbnQsIGksIGopIHtcclxuICAgIHRoaXMub25LZXlQcmVzcy5lbWl0KHsgZXZlbnQsIGksIGogfSlcclxuICB9XHJcblxyXG4gIGFkZE5ld0ZpZWxkKGV2ZW50LCBpKSB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICB0aGlzLm9uQWRkTmV3RmllbGQuZW1pdCh7IGV2ZW50LCBpIH0pXHJcbiAgfVxyXG5cclxuICByZW1vdmVGaWVsZChldmVudCwgaSwgaikge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxyXG4gICAgdGhpcy5vblJlbW92ZUZpZWxkLmVtaXQoeyBpLCBqIH0pXHJcbiAgfVxyXG5cclxuICBjaGFuZ2VUeXBlKHR5cGUsIGksIGopIHtcclxuICAgIHRoaXMub25DaGFuZ2VUeXBlLmVtaXQoeyB0eXBlLCBpLCBqIH0pXHJcbiAgfVxyXG5cclxuICByZW1vdmVLZXl3b3JkKGV2ZW50LCBpLCBqKSB7XHJcbiAgICB0aGlzLm9uUmVtb3ZlS2V5d29yZC5lbWl0KHsgZXZlbnQsIGksIGogfSlcclxuICB9XHJcbiAgYWRkTmV3U3ViTGV2ZWxGaWVsZChlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgIHRoaXMub25BZGROZXdTdWJMZXZlbEZpZWxkLmVtaXQodHJ1ZSlcclxuICB9XHJcbiAgZXhwZW5kTW9yZShlLCBmaWVsZCkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICB0aGlzLm9uRXhwZW5kTW9yZS5lbWl0KHsgZXhwYW5kOiB0cnVlLCBmaWVsZCB9KVxyXG4gIH1cclxuICBnZXRDb25kaXRpb25WYWx1ZXMoKSB7XHJcbiAgICB0aGlzLm9uR2V0Q29uZGl0aW9uVmFsdWVzLmVtaXQodHJ1ZSlcclxuICB9XHJcblxyXG4gIGluZ29yZURlZmF1bHRBY3Rpb24oZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgfVxyXG5cclxuICBjaGFuZ2VMYWJlbChsYWJlbCwga2V5KSB7XHJcbiAgICB0aGlzLm9uQ2hhbmdlTGFiZWwuZW1pdCh7IGxhYmVsLCBrZXkgfSlcclxuICB9XHJcblxyXG4gIHRvZ2dsZUNoaXAgPSAoY2hpcDogYW55KSA9PiB7XHJcbiAgICB0aGlzLm9uQ2hlY2tlZENoaXAuZW1pdChjaGlwKVxyXG4gIH1cclxuXHJcbiAgb25FZGl0Q2hpcChjaGlwKSB7XHJcbiAgICBpZiAoY2hpcC52YWx1ZSA9PT0gdGhpcy5jdXJyZW50Q2hpcCkge1xyXG4gICAgICB0aGlzLmN1cnJlbnRDaGlwID0gXCJcIlxyXG4gICAgICB0aGlzLnByZXZWYWx1ZSA9IFwiXCJcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuY3VycmVudENoaXAgPSBjaGlwLnZhbHVlO1xyXG4gICAgICB0aGlzLnByZXZWYWx1ZSA9IGNoaXAudmFsdWVcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldCBjaGlwcygpIHsgcmV0dXJuIHRoaXMuY2hpcENvbnRyb2wudmFsdWU7IH1cclxuXHJcbiAgY2hlY2tlZERlZmF1bHQodmFsdWUpIHtcclxuICAgIHRoaXMub25DaGVja2VkRGVmYXVsdC5lbWl0KHZhbHVlKVxyXG4gIH1cclxuXHJcbiAgb25TaG93Q29uZGl0aW9uKGV2ZW50ID0gbnVsbCkge1xyXG4gICAgaWYgKGV2ZW50KSB7XHJcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcclxuICAgIH1cclxuICAgIHRoaXMuc2hvd0NvbmRpdGlvbiA9ICF0aGlzLnNob3dDb25kaXRpb25cclxuICB9XHJcblxyXG4gIC8vIGNoZWNrZWQobG9jYXRpb25WYWx1ZSx2YWx1ZSl7XHJcbiAgLy8gICByZXR1cm4gbG9jYXRpb25WYWx1ZS5pbmNsdWRlcyh2YWx1ZSlcclxuICAvLyB9XHJcblxyXG4gIGVkaXRCTG9jayhldmVudCkge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIHRoaXMub25FZGl0QmxvY2suZW1pdCh0cnVlKTtcclxuICB9XHJcblxyXG5cclxuICBmbGFnKHZhbHVlKSB7XHJcbiAgICBjb25zdCB2YWx1ZVN0cmluZyA9IFN0cmluZyh2YWx1ZSlcclxuICAgIHJldHVybiB2YWx1ZVN0cmluZyAmJiBpc1ZhbGlkUGhvbmVOdW1iZXIodmFsdWVTdHJpbmcpID8gcGFyc2VQaG9uZU51bWJlcih2YWx1ZVN0cmluZykuY291bnRyeSA6IENvdW50cnlJU08uRnJhbmNlO1xyXG4gIH1cclxuICBjaGVja1Bob25lKHBob25lKSB7XHJcbiAgICBpZiAocGhvbmUpIHtcclxuICAgICAgbGV0IHJlZ2V4ID0gbmV3IFJlZ0V4cCgvXFwrKDlbOTc2XVxcZHw4Wzk4NzUzMF1cXGR8Nls5ODddXFxkfDVbOTBdXFxkfDQyXFxkfDNbODc1XVxcZHwyWzk4NjU0MzIxXVxcZHw5Wzg1NDMyMTBdfDhbNjQyMV18Nls2NTQzMjEwXXw1Wzg3NjU0MzIxXXw0Wzk4NzY1NDMxMF18M1s5NjQzMjEwXXwyWzcwXXw3fDEpXFxXKlxcZFxcVypcXGRcXFcqXFxkXFxXKlxcZFxcVypcXGRcXFcqXFxkXFxXKlxcZFxcVypcXGRcXFcqKFxcZHsxLDJ9KSQvKVxyXG4gICAgICB0aGlzLmludmFsaWRlVmFsdWUgPSAhcmVnZXgudGVzdChwaG9uZVsnZTE2NE51bWJlciddKTtcclxuICAgICAgdGhpcy5vbkNoZWNrVmFsdWUuZW1pdCh0aGlzLmludmFsaWRlVmFsdWUpXHJcbiAgICB9XHJcbiAgICBpZiAocGhvbmUgJiYgcGhvbmVbXCJuYXRpb25hbE51bWJlclwiXSAmJiBwaG9uZVtcIm5hdGlvbmFsTnVtYmVyXCJdICE9ICcnKSB7XHJcbiAgICAgIGxldCBwID0gcGhvbmVbJ25hdGlvbmFsTnVtYmVyJ10ucmVwbGFjZUFsbCgnICcsICcnKTtcclxuICAgICAgbGV0IG5ld3A6IGFueSA9ICcnO1xyXG5cclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaWYgKHAuc3BsaXQoJycpW2ldKSB7XHJcbiAgICAgICAgICBpZiAoaSAlIDIgPT0gMCAmJiBpID4gMCkge1xyXG4gICAgICAgICAgICBuZXdwICs9ICcgJztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIG5ld3AgKz0gcC5zcGxpdCgnJylbaV07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuZmllbGQudmFsdWUgPSBwaG9uZVtcIm5hdGlvbmFsTnVtYmVyXCJdXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIjxkaXYgY2xhc3M9XCJmaWVsZC1pdGVtXCIgKm5nSWY9XCIhZmllbGQuZm9ybXMgfHwgZmllbGQuZm9ybXMubGVuZ3RoPT09MFwiPlxyXG4gIDxidXR0b24gY2xhc3M9XCJ0cmFuc3BhcmVudC1idXR0b24gc2V0dGluZ1wiIG1hdC1yYWlzZWQtYnV0dG9uIChjbGljayk9XCJlZGl0QkxvY2soJGV2ZW50KVwiPlxyXG4gICAgPG1hdC1pY29uIGNsYXNzPVwic2V0dGluZy1pY29uXCI+c2V0dGluZ3M8L21hdC1pY29uPlxyXG4gIDwvYnV0dG9uPlxyXG4gIDxuZy1jb250YWluZXIgW25nU3dpdGNoXT1cImZpZWxkLnR5cGVcIj5cclxuICAgIDxkaXYgKm5nU3dpdGNoQ2FzZT1cIid0b2dnbGUnXCIgY2xhc3M9XCJmbGV4LWF1dG8gZmllbGQtc2l6ZSB0b2dnbGUtYnV0dG9uXCI+XHJcbiAgICAgIDxzcGFuPnt7IGZpZWxkLmxhYmVsIH19PC9zcGFuPlxyXG4gICAgICA8bWF0LXNsaWRlLXRvZ2dsZSBjbGFzcz1cImZvcm0tZmllbGRcIiBbKG5nTW9kZWwpXT1cImZpZWxkLmRlZmF1bHRWYWx1ZVwiIFtuZ01vZGVsT3B0aW9uc109XCJ7IHN0YW5kYWxvbmU6IHRydWUgfVwiXHJcbiAgICAgICAgW25nU3R5bGVdPVwiZmllbGQuc2VsZWN0b3IgJiYgeyBkaXNwbGF5OiAnaW5pbmUtYmxvY2snIH1cIj5cclxuICAgICAgPC9tYXQtc2xpZGUtdG9nZ2xlPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2ICpuZ1N3aXRjaENhc2U9XCIndGVsJ1wiIGNsYXNzPVwiZm9ybS1maWVsZCBmdWxsLXdpZHRoIHRlbC1pbnB1dFwiPlxyXG4gICAgICA8bWF0LWxhYmVsIGNsYXNzPVwidGVsLWxhYmVsXCI+e3tmaWVsZC5sYWJlbH19PC9tYXQtbGFiZWw+XHJcbiAgICAgIDxuZ3gtaW50bC10ZWwtaW5wdXQgaWQ9XCJvbmJvYXJkaW5nLXBob25lLWlucHV0XCIgY2xhc3M9XCJwaG9uZS1pbnB1dC1wcm9maWxlXCIgW2Nzc0NsYXNzXT1cIidpbnB1dC1waG9uZSdcIlxyXG4gICAgICAgIFtwcmVmZXJyZWRDb3VudHJpZXNdPVwicHJlZmVycmVkQ291bnRyaWVzXCIgW2VuYWJsZUF1dG9Db3VudHJ5U2VsZWN0XT1cImZhbHNlXCIgW2VuYWJsZVBsYWNlaG9sZGVyXT1cInRydWVcIlxyXG4gICAgICAgIFtjdXN0b21QbGFjZWhvbGRlcl09XCInUGhvbmUnXCIgW3NlbGVjdEZpcnN0Q291bnRyeV09XCJmYWxzZVwiIFtzZWxlY3RlZENvdW50cnlJU09dPVwiZmxhZyhmaWVsZC52YWx1ZSlcIlxyXG4gICAgICAgIFttYXhMZW5ndGhdPVwiMTVcIiBbaW5wdXRJZF09XCJmaWVsZC5rZXlcIiBbcGhvbmVWYWxpZGF0aW9uXT1cInRydWVcIiBbc2VwYXJhdGVEaWFsQ29kZV09XCJzZXBhcmF0ZURpYWxDb2RlXCJcclxuICAgICAgICBbbnVtYmVyRm9ybWF0XT1cIlBob25lTnVtYmVyRm9ybWF0Lk5hdGlvbmFsXCIgbmFtZT1cInBob25lXCIgKGlucHV0KT1cImNoZWNrUGhvbmUoZmllbGQudmFsdWUpXCJcclxuICAgICAgICBbbmdNb2RlbE9wdGlvbnNdPVwie3N0YW5kYWxvbmU6IHRydWV9XCIgWyhuZ01vZGVsKV09XCJmaWVsZC52YWx1ZVwiPlxyXG4gICAgICA8L25neC1pbnRsLXRlbC1pbnB1dD5cclxuICAgICAgPG1hdC1lcnJvciAqbmdJZj1cImludmFsaWRlVmFsdWVcIj5MZSB0w6lsw6lwaG9uZSBlc3QgaW52YWxpZGU8L21hdC1lcnJvcj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiAqbmdTd2l0Y2hDYXNlPVwiJ2NoZWNrYm94J1wiIGNsYXNzPVwiZmxleC1hdXRvIGZpZWxkLXNpemVcIj5cclxuICAgICAgPG1hdC1jaGVja2JveCBjbGFzcz1cImZvcm0tZmllbGRcIiBbKG5nTW9kZWwpXT1cImZpZWxkLnZhbHVlXCIgW25nTW9kZWxPcHRpb25zXT1cInsgc3RhbmRhbG9uZTogdHJ1ZSB9XCJcclxuICAgICAgICBbbmdTdHlsZV09XCJmaWVsZC5zZWxlY3RvciAmJiB7IGRpc3BsYXk6ICdpbmluZS1ibG9jaycgfVwiPlxyXG4gICAgICAgIHt7IGZpZWxkLmxhYmVsIH19XHJcbiAgICAgIDwvbWF0LWNoZWNrYm94PlxyXG4gICAgICA8bWF0LXNlbGVjdCBwbGFjZWhvbGRlcj1cIkNvbXBhbnlcIiBbKG5nTW9kZWwpXT1cImZpZWxkLnNlbGVjdG9yLnZhbHVlXCIgW25nTW9kZWxPcHRpb25zXT1cInsgc3RhbmRhbG9uZTogdHJ1ZSB9XCJcclxuICAgICAgICAqbmdJZj1cImZpZWxkLnNlbGVjdG9yXCIgc3R5bGU9XCJkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IHdpZHRoOiA1MCVcIj5cclxuICAgICAgICA8bWF0LW9wdGlvbiAqbmdGb3I9XCJsZXQgc2VsZWN0IG9mIGZpZWxkLnNlbGVjdG9yLmRlZmF1bHRWYWx1ZVwiIFt2YWx1ZV09XCJzZWxlY3QudmFsdWVcIj4ge3sgc2VsZWN0LnZhbHVlIH19XHJcbiAgICAgICAgPC9tYXQtb3B0aW9uPlxyXG4gICAgICA8L21hdC1zZWxlY3Q+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgKm5nU3dpdGNoQ2FzZT1cIidjaGVja2JveF9tdWx0aXBsZSdcIiBjbGFzcz1cImZsZXgtYXV0byBmaWVsZC1zaXplXCIgc3R5bGU9XCJ3aWR0aDogMTAwJTtcIj5cclxuICAgICAgPGxhYmVsPnt7IGZpZWxkLmxhYmVsIH19PC9sYWJlbD5cclxuICAgICAgPGRpdiBzdHlsZT1cIm1hcmdpbi10b3A6IDIwcHhcIiBjbGFzcz1cIm9uYm9hcmRpbmctc2VsZWN0XCI+XHJcbiAgICAgICAgPG1hdC1jaGVja2JveCBjbGFzcz1cImZvcm0tZmllbGRcIiBzdHlsZT1cImRpc3BsYXk6IGJsb2NrOyBtYXJnaW4tYm90dG9tOiA1cHg7IG1hcmdpbi10b3A6IDEwcHhcIlxyXG4gICAgICAgICAgKm5nRm9yPVwibGV0IG9wdCBvZiBmaWVsZC5kZWZhdWx0VmFsdWVcIiBbY2hlY2tlZF09XCJvcHQuY2hlY2tlZFwiIFsobmdNb2RlbCldPVwib3B0LmNoZWNrZWRcIlxyXG4gICAgICAgICAgW25nTW9kZWxPcHRpb25zXT1cInsgc3RhbmRhbG9uZTogdHJ1ZSB9XCI+XHJcbiAgICAgICAgICB7eyBvcHQudmFsdWUgfX1cclxuICAgICAgICA8L21hdC1jaGVja2JveD5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgKm5nU3dpdGNoQ2FzZT1cIidyYWRpbydcIiBjbGFzcz1cImZsZXgtYXV0byBmaWVsZC1zaXplXCI+XHJcbiAgICAgIDxsYWJlbCBzdHlsZT1cImRpc3BsYXk6IGJsb2NrXCI+IHt7IGZpZWxkLmxhYmVsIH19IDwvbGFiZWw+XHJcbiAgICAgIDxtYXQtcmFkaW8tZ3JvdXAgY2xhc3M9XCJmb3JtLWZpZWxkIHJhZGlvLWdyb3VwIGZpZWxkLXNpemUgb25ib2FyZGluZy1zZWxlY3RcIiBbKG5nTW9kZWwpXT1cImZpZWxkLnZhbHVlXCJcclxuICAgICAgICBbcmVxdWlyZWRdPVwiZmllbGQuaXNNYW5kYXRvcnlcIiBhcmlhLWxhYmVsPVwiU2VsZWN0IGFuIG9wdGlvblwiPlxyXG4gICAgICAgIDxtYXQtcmFkaW8tYnV0dG9uICpuZ0Zvcj1cImxldCBvcHQgb2YgZmllbGQuZGVmYXVsdFZhbHVlXCIgc3R5bGU9XCJtYXJnaW4tYm90dG9tOiAyMHB4O1wiIFt2YWx1ZV09XCJvcHQudmFsdWVcIj57e1xyXG4gICAgICAgICAgb3B0LnZhbHVlIH19IDwvbWF0LXJhZGlvLWJ1dHRvbj5cclxuICAgICAgPC9tYXQtcmFkaW8tZ3JvdXA+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgKm5nU3dpdGNoQ2FzZT1cIidzZWxlY3QnXCIgY2xhc3M9XCJmbGV4LWF1dG8gZmllbGQtc2l6ZSBzZWxlY3QtY29udGVudFwiPlxyXG4gICAgICA8bWF0LWZvcm0tZmllbGQgY2xhc3M9XCJtYXQtc2VsZWN0IGZsZXgtYXV0byBmaWVsZC1zaXplXCIgYXBwZWFyYW5jZT1cIm91dGxpbmVcIj5cclxuICAgICAgICA8bWF0LWxhYmVsPiB7eyBmaWVsZC5sYWJlbCB9fSA8L21hdC1sYWJlbD5cclxuICAgICAgICA8bWF0LXNlbGVjdCBbKG5nTW9kZWwpXT1cImZpZWxkLnZhbHVlXCIgW25nTW9kZWxPcHRpb25zXT1cInsgc3RhbmRhbG9uZTogdHJ1ZSB9XCI+XHJcbiAgICAgICAgICA8bWF0LW9wdGlvbiAqbmdGb3I9XCJsZXQgb3B0IG9mIGZpZWxkLmRlZmF1bHRWYWx1ZVwiIFt2YWx1ZV09XCJvcHQudmFsdWVcIj57eyBvcHQudmFsdWUgfX08L21hdC1vcHRpb24+XHJcbiAgICAgICAgPC9tYXQtc2VsZWN0PlxyXG4gICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8bWF0LWZvcm0tZmllbGQgKm5nU3dpdGNoRGVmYXVsdCBjbGFzcz1cImZvcm0tZmllbGQgZmllbGQtc2l6ZVwiIGFwcGVhcmFuY2U9XCJvdXRsaW5lXCI+XHJcbiAgICAgIDxtYXQtbGFiZWw+e3sgZmllbGQubGFiZWwgfX08L21hdC1sYWJlbD5cclxuICAgICAgPGlucHV0IFt0eXBlXT1cImZpZWxkLnR5cGVcIiBtYXRJbnB1dCBbbmdNb2RlbE9wdGlvbnNdPVwieyBzdGFuZGFsb25lOiB0cnVlIH1cIiBbKG5nTW9kZWwpXT1cImZpZWxkLmRlZmF1bHRWYWx1ZVwiXHJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJcIiAvPlxyXG4gICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICA8L25nLWNvbnRhaW5lcj5cclxuPC9kaXY+XHJcblxyXG48bmctY29udGVudCBzZWxlY3Q9XCIuY2hpbGRcIj48L25nLWNvbnRlbnQ+Il19