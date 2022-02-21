import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ENTER, COMMA, SEMICOLON } from '@angular/cdk/keycodes';
import { FormControl } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/form-field";
import * as i2 from "@angular/material/input";
import * as i3 from "@angular/forms";
import * as i4 from "ngx-intl-tel-input";
import * as i5 from "@angular/material/select";
import * as i6 from "@angular/material/core";
import * as i7 from "@angular/common";
import * as i8 from "@angular/material/checkbox";
import * as i9 from "@angular/material/button";
import * as i10 from "@angular/material/tooltip";
import * as i11 from "@angular/material/icon";
import * as i12 from "@angular/material/chips";
import * as i13 from "@angular/cdk/drag-drop";
import * as i14 from "@angular/material/radio";
var _c0 = function () { return { standalone: true }; };
function SubTemplateProfileComponent_div_34_Template(rf, ctx) { if (rf & 1) {
    var _r686 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 28);
    i0.ɵɵelementStart(1, "mat-checkbox", 24);
    i0.ɵɵlistener("ngModelChange", function SubTemplateProfileComponent_div_34_Template_mat_checkbox_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r686); var ctx_r685 = i0.ɵɵnextContext(); return ctx_r685.field.expandOnboarding = $event; });
    i0.ɵɵtext(2, " Coch\u00E9 par default ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r676 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", ctx_r676.field.expandOnboarding)("ngModelOptions", i0.ɵɵpureFunction0(2, _c0));
} }
function SubTemplateProfileComponent_mat_form_field_35_mat_chip_6_Template(rf, ctx) { if (rf & 1) {
    var _r693 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-chip", 35);
    i0.ɵɵlistener("dblclick", function SubTemplateProfileComponent_mat_form_field_35_mat_chip_6_Template_mat_chip_dblclick_0_listener() { i0.ɵɵrestoreView(_r693); var option_r691 = ctx.$implicit; var ctx_r692 = i0.ɵɵnextContext(2); return ctx_r692.toggleChip(option_r691); })("click", function SubTemplateProfileComponent_mat_form_field_35_mat_chip_6_Template_mat_chip_click_0_listener() { i0.ɵɵrestoreView(_r693); var option_r691 = ctx.$implicit; var ctx_r694 = i0.ɵɵnextContext(2); return ctx_r694.onEditChip(option_r691); })("removed", function SubTemplateProfileComponent_mat_form_field_35_mat_chip_6_Template_mat_chip_removed_0_listener() { i0.ɵɵrestoreView(_r693); var option_r691 = ctx.$implicit; var ctx_r695 = i0.ɵɵnextContext(2); return ctx_r695.removeKeyword(option_r691, ctx_r695.i, ctx_r695.j); });
    i0.ɵɵtext(1);
    i0.ɵɵelementStart(2, "mat-icon", 36);
    i0.ɵɵtext(3, "cancel");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var option_r691 = ctx.$implicit;
    i0.ɵɵproperty("selected", option_r691.checked)("value", option_r691.value)("removable", true);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", option_r691.value, " ");
} }
function SubTemplateProfileComponent_mat_form_field_35_Template(rf, ctx) { if (rf & 1) {
    var _r697 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-form-field", 29);
    i0.ɵɵelementStart(1, "mat-label");
    i0.ɵɵtext(2, " Valeur par default ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "mat-chip-list", 30, 31);
    i0.ɵɵlistener("cdkDropListDropped", function SubTemplateProfileComponent_mat_form_field_35_Template_mat_chip_list_cdkDropListDropped_3_listener($event) { i0.ɵɵrestoreView(_r697); var ctx_r696 = i0.ɵɵnextContext(); return ctx_r696.drop($event); });
    i0.ɵɵtemplate(6, SubTemplateProfileComponent_mat_form_field_35_mat_chip_6_Template, 4, 4, "mat-chip", 32);
    i0.ɵɵelementStart(7, "input", 33, 34);
    i0.ɵɵlistener("matChipInputTokenEnd", function SubTemplateProfileComponent_mat_form_field_35_Template_input_matChipInputTokenEnd_7_listener($event) { i0.ɵɵrestoreView(_r697); var ctx_r698 = i0.ɵɵnextContext(); return ctx_r698.addKeywordFromInput($event, ctx_r698.i, ctx_r698.j); })("keyup", function SubTemplateProfileComponent_mat_form_field_35_Template_input_keyup_7_listener($event) { i0.ɵɵrestoreView(_r697); var ctx_r699 = i0.ɵɵnextContext(); return ctx_r699.keyUp($event, ctx_r699.i, ctx_r699.j); })("ngModelChange", function SubTemplateProfileComponent_mat_form_field_35_Template_input_ngModelChange_7_listener($event) { i0.ɵɵrestoreView(_r697); var ctx_r700 = i0.ɵɵnextContext(); return ctx_r700.currentChip = $event; });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var _r688 = i0.ɵɵreference(5);
    var ctx_r677 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("cdkDropListData", ctx_r677.field.defaultValue);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", ctx_r677.field.defaultValue);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("matChipInputFor", _r688)("matChipInputAddOnBlur", true)("matChipInputSeparatorKeyCodes", ctx_r677.separatorKeysCodes)("ngModel", ctx_r677.currentChip)("ngModelOptions", i0.ɵɵpureFunction0(7, _c0));
} }
function SubTemplateProfileComponent_mat_form_field_36_Template(rf, ctx) { if (rf & 1) {
    var _r702 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-form-field", 1);
    i0.ɵɵelementStart(1, "mat-label");
    i0.ɵɵtext(2, "Valeur par default");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "input", 37);
    i0.ɵɵlistener("ngModelChange", function SubTemplateProfileComponent_mat_form_field_36_Template_input_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r702); var ctx_r701 = i0.ɵɵnextContext(); return ctx_r701.field.defaultValue = $event; });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r678 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngModelOptions", i0.ɵɵpureFunction0(2, _c0))("ngModel", ctx_r678.field.defaultValue);
} }
function SubTemplateProfileComponent_mat_form_field_37_Template(rf, ctx) { if (rf & 1) {
    var _r704 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-form-field", 1);
    i0.ɵɵelementStart(1, "mat-label");
    i0.ɵɵtext(2, "Valeur par default");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "input", 38);
    i0.ɵɵlistener("ngModelChange", function SubTemplateProfileComponent_mat_form_field_37_Template_input_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r704); var ctx_r703 = i0.ɵɵnextContext(); return ctx_r703.field.defaultValue = $event; });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r679 = i0.ɵɵnextContext();
    i0.ɵɵstyleProp("opacity", ctx_r679.field.type !== "tel" ? 1 : 0);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("type", ctx_r679.field.type)("disabled", ctx_r679.field.type === "tel")("ngModelOptions", i0.ɵɵpureFunction0(6, _c0))("ngModel", ctx_r679.field.defaultValue);
} }
function SubTemplateProfileComponent_mat_checkbox_39_Template(rf, ctx) { if (rf & 1) {
    var _r706 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-checkbox", 24);
    i0.ɵɵlistener("ngModelChange", function SubTemplateProfileComponent_mat_checkbox_39_Template_mat_checkbox_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r706); var ctx_r705 = i0.ɵɵnextContext(); return ctx_r705.field.isConditional = $event; })("ngModelChange", function SubTemplateProfileComponent_mat_checkbox_39_Template_mat_checkbox_ngModelChange_0_listener() { i0.ɵɵrestoreView(_r706); var ctx_r707 = i0.ɵɵnextContext(); return ctx_r707.getConditionValues(); });
    i0.ɵɵtext(1, " \u00E0 condition ");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r680 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngModel", ctx_r680.field.isConditional)("ngModelOptions", i0.ɵɵpureFunction0(2, _c0));
} }
function SubTemplateProfileComponent_div_40_mat_option_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 46);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var cond_r710 = ctx.$implicit;
    i0.ɵɵproperty("value", cond_r710);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(cond_r710.label);
} }
function SubTemplateProfileComponent_div_40_mat_radio_button_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-radio-button", 47);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var item_r711 = ctx.$implicit;
    i0.ɵɵproperty("value", item_r711.value);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", item_r711.value, " ");
} }
function SubTemplateProfileComponent_div_40_Template(rf, ctx) { if (rf & 1) {
    var _r713 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 39);
    i0.ɵɵelementStart(1, "mat-form-field", 40);
    i0.ɵɵelementStart(2, "mat-label");
    i0.ɵɵtext(3, "Champ de condition :");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "mat-select", 41);
    i0.ɵɵlistener("ngModelChange", function SubTemplateProfileComponent_div_40_Template_mat_select_ngModelChange_4_listener($event) { i0.ɵɵrestoreView(_r713); var ctx_r712 = i0.ɵɵnextContext(); return ctx_r712.field.conditionLocation = $event; });
    i0.ɵɵtemplate(5, SubTemplateProfileComponent_div_40_mat_option_5_Template, 2, 2, "mat-option", 42);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "mat-radio-group", 43);
    i0.ɵɵlistener("ngModelChange", function SubTemplateProfileComponent_div_40_Template_mat_radio_group_ngModelChange_6_listener($event) { i0.ɵɵrestoreView(_r713); var ctx_r714 = i0.ɵɵnextContext(); return ctx_r714.field.conditionValue = $event; });
    i0.ɵɵtemplate(7, SubTemplateProfileComponent_div_40_mat_radio_button_7_Template, 2, 2, "mat-radio-button", 44);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "button", 45);
    i0.ɵɵlistener("click", function SubTemplateProfileComponent_div_40_Template_button_click_8_listener($event) { i0.ɵɵrestoreView(_r713); var ctx_r715 = i0.ɵɵnextContext(); return ctx_r715.onShowCondition($event); });
    i0.ɵɵelementStart(9, "mat-icon");
    i0.ɵɵtext(10, "close");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(11, "Fermer ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r681 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngModel", ctx_r681.field.conditionLocation)("ngModelOptions", i0.ɵɵpureFunction0(6, _c0));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r681.conditionData);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", ctx_r681.field.conditionValue)("ngModelOptions", i0.ɵɵpureFunction0(7, _c0));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r681.field.conditionLocation.possibleValues);
} }
function SubTemplateProfileComponent_mat_icon_41_Template(rf, ctx) { if (rf & 1) {
    var _r717 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-icon", 48);
    i0.ɵɵlistener("click", function SubTemplateProfileComponent_mat_icon_41_Template_mat_icon_click_0_listener() { i0.ɵɵrestoreView(_r717); var ctx_r716 = i0.ɵɵnextContext(); return ctx_r716.onShowCondition(); });
    i0.ɵɵtext(1, "help ");
    i0.ɵɵelementEnd();
} }
function SubTemplateProfileComponent_mat_icon_48_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-icon");
    i0.ɵɵtext(1, "expand_less");
    i0.ɵɵelementEnd();
} }
function SubTemplateProfileComponent_mat_icon_49_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-icon");
    i0.ɵɵtext(1, "expand_more");
    i0.ɵɵelementEnd();
} }
var _c1 = [[["", 8, "child"]]];
var _c2 = function () { return ["select", "radio", "checkbox_multiple"]; };
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
        this.conditionData = [];
        this.chipControl = new FormControl(new Set());
        this.separatorKeysCodes = [ENTER, COMMA, SEMICOLON];
        this.currentChip = "";
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
    SubTemplateProfileComponent.ɵfac = function SubTemplateProfileComponent_Factory(t) { return new (t || SubTemplateProfileComponent)(); };
    SubTemplateProfileComponent.ɵcmp = i0.ɵɵdefineComponent({ type: SubTemplateProfileComponent, selectors: [["lib-sub-category"]], inputs: { field: "field", length: "length", i: "i", j: "j", conditionData: "conditionData" }, outputs: { onAddKeywordFromInput: "onAddKeywordFromInput", onKeyPress: "onKeyPress", onDrop: "onDrop", onAddNewField: "onAddNewField", onRemoveField: "onRemoveField", onChangeType: "onChangeType", onRemoveKeyword: "onRemoveKeyword", onAddNewSubLevelField: "onAddNewSubLevelField", onExpendMore: "onExpendMore", onChangeLabel: "onChangeLabel", onCheckedChip: "onCheckedChip", onCheckedDefault: "onCheckedDefault", onGetConditionValues: "onGetConditionValues" }, ngContentSelectors: _c3, decls: 51, vars: 35, consts: [[1, "field-item"], ["appearance", "outline", 1, "form-field", "field-size"], ["type", "text", "matInput", "", "required", "", "placeholder", "", 3, "readonly", "ngModelOptions", "ngModel", "ngModelChange"], ["appearance", "outline", 1, "form-field", "field-size", 2, "display", "none"], ["required", "", 3, "disabled", "ngModel", "ngModelOptions", "ngModelChange"], ["value", "text"], ["value", "textarea"], ["value", "radio"], ["value", "select"], ["value", "checkbox"], ["value", "checkbox_multiple"], ["value", "email"], ["value", "password"], ["value", "date"], ["value", "tel"], [3, "ngSwitch"], ["class", "flex-auto w-30 field-size", 4, "ngSwitchCase"], ["class", "flex-auto w-30 field-size", "appearance", "outline", 4, "ngSwitchCase"], ["class", "form-field field-size", "appearance", "outline", 4, "ngSwitchCase"], ["class", "form-field field-size", "appearance", "outline", 3, "opacity", 4, "ngSwitchDefault"], [1, "checkbox-condition"], ["class", "form-field", 3, "ngModel", "ngModelOptions", "ngModelChange", 4, "ngIf"], ["class", "condition-container", 4, "ngIf"], ["class", "condition-help", "matTooltip", "Param\u00E8trer la condition ici !", 3, "click", 4, "ngIf"], [1, "form-field", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["mat-mini-fab", "", "color", "success", "matTooltip", "Ajouter une sous-cat\u00E9gorie", 1, "transparent-button", 3, "disabled", "click"], ["mat-mini-fab", "", "color", "primary", 1, "expand-button", 3, "disabled", "click"], [4, "ngIf"], [1, "flex-auto", "w-30", "field-size"], ["appearance", "outline", 1, "flex-auto", "w-30", "field-size"], ["cdkDropList", "", "aria-label", "Video keywords; let index=index", "multiple", "", "selectable", "", 3, "cdkDropListData", "cdkDropListDropped"], ["childList", "cdkDropList", "chipList", ""], ["style", "min-height: 25px;", "cdkDrag", "", 3, "selected", "value", "removable", "dblclick", "click", "removed", 4, "ngFor", "ngForOf"], ["placeholder", "add...", 3, "matChipInputFor", "matChipInputAddOnBlur", "matChipInputSeparatorKeyCodes", "ngModel", "ngModelOptions", "matChipInputTokenEnd", "keyup", "ngModelChange"], ["chipsInput", ""], ["cdkDrag", "", 2, "min-height", "25px", 3, "selected", "value", "removable", "dblclick", "click", "removed"], ["matChipRemove", ""], ["type", "text", "matInput", "", "placeholder", "Description...", 3, "ngModelOptions", "ngModel", "ngModelChange"], ["matInput", "", "placeholder", "", 3, "type", "disabled", "ngModelOptions", "ngModel", "ngModelChange"], [1, "condition-container"], ["appearance", "outline", 1, "form-field", "field-size", "full-width"], ["required", "", 3, "ngModel", "ngModelOptions", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], ["aria-labelledby", "example-radio-group-label", 1, "example-radio-group", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["class", "example-radio-button", 3, "value", 4, "ngFor", "ngForOf"], ["mat-button", "", "color", "primary", 3, "click"], [3, "value"], [1, "example-radio-button", 3, "value"], ["matTooltip", "Param\u00E8trer la condition ici !", 1, "condition-help", 3, "click"]], template: function SubTemplateProfileComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef(_c1);
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵelementStart(1, "mat-form-field", 1);
            i0.ɵɵelementStart(2, "mat-label");
            i0.ɵɵtext(3, "Label");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "input", 2);
            i0.ɵɵlistener("ngModelChange", function SubTemplateProfileComponent_Template_input_ngModelChange_4_listener($event) { return ctx.field.label = $event; })("ngModelChange", function SubTemplateProfileComponent_Template_input_ngModelChange_4_listener() { return ctx.changeLabel(ctx.field.label, ctx.field.key); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "mat-form-field", 3);
            i0.ɵɵelementStart(6, "mat-label");
            i0.ɵɵtext(7, "Cl\u00E9 du champ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(8, "input", 2);
            i0.ɵɵlistener("ngModelChange", function SubTemplateProfileComponent_Template_input_ngModelChange_8_listener($event) { return ctx.field.key = $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(9, "mat-form-field", 1);
            i0.ɵɵelementStart(10, "mat-label");
            i0.ɵɵtext(11, "Type");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(12, "mat-select", 4);
            i0.ɵɵlistener("ngModelChange", function SubTemplateProfileComponent_Template_mat_select_ngModelChange_12_listener($event) { return ctx.field.type = $event; })("ngModelChange", function SubTemplateProfileComponent_Template_mat_select_ngModelChange_12_listener() { return ctx.changeType(ctx.field.type, ctx.i, ctx.j); });
            i0.ɵɵelementStart(13, "mat-option", 5);
            i0.ɵɵtext(14, "Text(80)");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(15, "mat-option", 6);
            i0.ɵɵtext(16, "Text(80+)");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(17, "mat-option", 7);
            i0.ɵɵtext(18, "Radio");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(19, "mat-option", 8);
            i0.ɵɵtext(20, "Selecteur");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(21, "mat-option", 9);
            i0.ɵɵtext(22, "Checkbox");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(23, "mat-option", 10);
            i0.ɵɵtext(24, "Checkbox multiple");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(25, "mat-option", 11);
            i0.ɵɵtext(26, "Email");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(27, "mat-option", 12);
            i0.ɵɵtext(28, "Password");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(29, "mat-option", 13);
            i0.ɵɵtext(30, "Date");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(31, "mat-option", 14);
            i0.ɵɵtext(32, "Phone");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementContainerStart(33, 15);
            i0.ɵɵtemplate(34, SubTemplateProfileComponent_div_34_Template, 3, 3, "div", 16);
            i0.ɵɵtemplate(35, SubTemplateProfileComponent_mat_form_field_35_Template, 9, 8, "mat-form-field", 17);
            i0.ɵɵtemplate(36, SubTemplateProfileComponent_mat_form_field_36_Template, 4, 3, "mat-form-field", 18);
            i0.ɵɵtemplate(37, SubTemplateProfileComponent_mat_form_field_37_Template, 4, 7, "mat-form-field", 19);
            i0.ɵɵelementContainerEnd();
            i0.ɵɵelementStart(38, "div", 20);
            i0.ɵɵtemplate(39, SubTemplateProfileComponent_mat_checkbox_39_Template, 2, 3, "mat-checkbox", 21);
            i0.ɵɵtemplate(40, SubTemplateProfileComponent_div_40_Template, 12, 8, "div", 22);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(41, SubTemplateProfileComponent_mat_icon_41_Template, 2, 0, "mat-icon", 23);
            i0.ɵɵelementStart(42, "mat-checkbox", 24);
            i0.ɵɵlistener("ngModelChange", function SubTemplateProfileComponent_Template_mat_checkbox_ngModelChange_42_listener($event) { return ctx.field.isMandatory = $event; });
            i0.ɵɵtext(43, " obligatoire ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(44, "button", 25);
            i0.ɵɵlistener("click", function SubTemplateProfileComponent_Template_button_click_44_listener($event) { return ctx.addNewSubLevelField($event); });
            i0.ɵɵelementStart(45, "mat-icon");
            i0.ɵɵtext(46, "device_hub");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(47, "button", 26);
            i0.ɵɵlistener("click", function SubTemplateProfileComponent_Template_button_click_47_listener($event) { return ctx.expendMore($event, ctx.field); });
            i0.ɵɵtemplate(48, SubTemplateProfileComponent_mat_icon_48_Template, 2, 0, "mat-icon", 27);
            i0.ɵɵtemplate(49, SubTemplateProfileComponent_mat_icon_49_Template, 2, 0, "mat-icon", 27);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵprojection(50);
        } if (rf & 2) {
            i0.ɵɵadvance(1);
            i0.ɵɵclassMap(!ctx.field.editable ? "readonly" : "");
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("readonly", !ctx.field.editable)("ngModelOptions", i0.ɵɵpureFunction0(30, _c0))("ngModel", ctx.field.label);
            i0.ɵɵadvance(1);
            i0.ɵɵclassMap(!ctx.field.editable ? "readonly" : "");
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("readonly", !ctx.field.editable)("ngModelOptions", i0.ɵɵpureFunction0(31, _c0))("ngModel", ctx.field.key);
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("disabled", !ctx.field.editable)("ngModel", ctx.field.type)("ngModelOptions", i0.ɵɵpureFunction0(32, _c0));
            i0.ɵɵadvance(21);
            i0.ɵɵproperty("ngSwitch", ctx.field.type);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngSwitchCase", "checkbox");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngSwitchCase", i0.ɵɵpureFunction0(33, _c2).includes(ctx.field.type) ? ctx.field.type : !ctx.field.type);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngSwitchCase", "textarea");
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngIf", ctx.field.editable);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.showCondition);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.field.isConditional);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngModel", ctx.field.isMandatory)("ngModelOptions", i0.ɵɵpureFunction0(34, _c0));
            i0.ɵɵadvance(2);
            i0.ɵɵstyleProp("opacity", ctx.field.subLevel > 2 || !ctx.field.editable ? 0 : 1);
            i0.ɵɵproperty("disabled", ctx.field.subLevel > 2 || !ctx.field.editable);
            i0.ɵɵadvance(3);
            i0.ɵɵstyleProp("opacity", ctx.field.forms && ctx.field.forms.length > 0 ? 1 : 0);
            i0.ɵɵproperty("disabled", !(ctx.field.forms && ctx.field.forms.length > 0));
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", !ctx.field.expandMore);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.field.expandMore);
        } }, directives: [i1.MatFormField, i1.MatLabel, i2.MatInput, i3.DefaultValueAccessor, i3.RequiredValidator, i3.NgControlStatus, i3.NgModel, i4.NativeElementInjectorDirective, i5.MatSelect, i6.MatOption, i7.NgSwitch, i7.NgSwitchCase, i7.NgSwitchDefault, i7.NgIf, i8.MatCheckbox, i9.MatButton, i10.MatTooltip, i11.MatIcon, i12.MatChipList, i13.CdkDropList, i7.NgForOf, i12.MatChipInput, i12.MatChip, i13.CdkDrag, i12.MatChipRemove, i14.MatRadioGroup, i14.MatRadioButton], styles: [".container[_ngcontent-%COMP%]{max-width:98%;margin:50px auto auto;padding-bottom:50px}.container[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:space-between}.input-category-name[_ngcontent-%COMP%]{font-size:15px;font-weight:500}.full-width[_ngcontent-%COMP%]{width:100%}.field-item[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;width:100%;flex-wrap:wrap}.field-item[_ngcontent-%COMP%]   .button-action[_ngcontent-%COMP%]{background-color:#6fe8d7;height:100%;margin:auto 15px auto auto;display:flex}.field-item[_ngcontent-%COMP%]   .button-action[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{box-shadow:none;background-color:transparent;color:#fff}.field-action[_ngcontent-%COMP%]{width:10%}hr[_ngcontent-%COMP%]{margin:50px 0}  .mat-form-field-appearance-fill .mat-form-field-flex{background-color:#fff}.category-action[_ngcontent-%COMP%]{display:flex;width:100%}.delete-field[_ngcontent-%COMP%]{margin:auto 2%}.radio-group[_ngcontent-%COMP%]   .mat-radio-button[_ngcontent-%COMP%]{margin-right:10px}.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary[_ngcontent-%COMP%]{background-color:#3f51b5;color:#fff;min-height:20px;font-size:10px}.move-icons[_ngcontent-%COMP%]{cursor:move}.category-item[_ngcontent-%COMP%]{display:flex;align-items:baseline;width:100%;border:1px solid #dce4e9;border-radius:8px}  .readonly.mat-form-field-appearance-outline .mat-form-field-outline{color:transparent!important}.field-content[_ngcontent-%COMP%]{width:100%}.cdk-drag-preview[_ngcontent-%COMP%]{box-sizing:border-box;border-radius:4px;box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.cdk-drag-placeholder[_ngcontent-%COMP%]{opacity:0}.cdk-drag-animating[_ngcontent-%COMP%], .example-list.cdk-drop-list-dragging[_ngcontent-%COMP%]   .category-item[_ngcontent-%COMP%]:not(.cdk-drag-placeholder){transition:transform 250ms cubic-bezier(0,0,.2,1)}.add-button-container[_ngcontent-%COMP%]{background:no-repeat padding-box #fff;border:1px dashed #dce4e9;border-radius:8px;margin-top:10px;padding:10px;display:flex;justify-content:center;align-items:center;width:98%;margin-left:0;margin-bottom:22px}.add-button-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{display:flex;align-items:center;background-color:transparent;border:none;cursor:pointer;font:17px/26px Nexa Text;letter-spacing:0;color:#c2c8d5;box-shadow:none}.expand-button[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%]{font-size:48px;margin-top:-20px;margin-right:15px}.transparent-button[_ngcontent-%COMP%]{background-color:transparent!important;box-shadow:none!important;width:40px!important;padding:0!important;margin:0!important;min-width:auto!important}.expand-button[_ngcontent-%COMP%]{color:#5a607f!important;background-color:transparent!important;box-shadow:none!important}.checkbox-condition[_ngcontent-%COMP%]{position:relative}.checkbox-condition[_ngcontent-%COMP%]   .condition-container[_ngcontent-%COMP%]{position:absolute;top:30px;width:500px;height:150px;background-color:#fff;border:1px dashed #dce4e9;z-index:1;left:0;border-radius:5px}.checkbox-condition[_ngcontent-%COMP%]   .condition-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{position:absolute;bottom:5px;left:0}.condition-help[_ngcontent-%COMP%]{cursor:pointer}.cdk-overlay-pane[_ngcontent-%COMP%]{width:100%}"] });
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
        }], conditionData: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3ViLXRlbXBsYXRlLXByb2ZpbGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vb25ib2FyZGluZy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3N1Yi10ZW1wbGF0ZS1wcm9maWxlL3N1Yi10ZW1wbGF0ZS1wcm9maWxlLmNvbXBvbmVudC50cyIsImxpYi9jb21wb25lbnRzL3N1Yi10ZW1wbGF0ZS1wcm9maWxlL3N1Yi10ZW1wbGF0ZS1wcm9maWxlLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDL0UsT0FBTyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDaEUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDNkJyQywrQkFDSTtJQUFBLHdDQUNJO0lBRDZCLG1QQUFvQztJQUNqRSx3Q0FFSjtJQUFBLGlCQUFlO0lBQ25CLGlCQUFNOzs7SUFKK0IsZUFBb0M7SUFBcEMseURBQW9DLDhDQUFBOzs7O0lBWWpFLG9DQUlJO0lBRkEsK1FBQStCLDRQQUFBLDJSQUFBO0lBRS9CLFlBQ0E7SUFBQSxvQ0FBd0I7SUFBQSxzQkFBTTtJQUFBLGlCQUFXO0lBQzdDLGlCQUFXOzs7SUFMUCw4Q0FBMkIsNEJBQUEsbUJBQUE7SUFHM0IsZUFDQTtJQURBLGtEQUNBOzs7O0lBWlosMENBR0k7SUFBQSxpQ0FBWTtJQUFBLG9DQUFtQjtJQUFBLGlCQUFZO0lBQzNDLDZDQUdJO0lBRkEsc1BBQW1DO0lBRW5DLHlHQUlJO0lBR0oscUNBSUo7SUFIUSx5UkFBeUQsZ09BQUEsK05BQUE7SUFEN0QsaUJBSUo7SUFBQSxpQkFBZ0I7SUFDcEIsaUJBQWlCOzs7O0lBZjJCLGVBQXNDO0lBQXRDLDZEQUFzQztJQUd0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LGdCQUF1QjtZQUF2Qix5Q0FBdUI7WUFDNUIsZUFBMEI7WUFBMUIseUNBQTBCO1lBTzNCLGVBQXVHO1lBQXZHLHNIQUF1RztZQW1CM0YsZUFBMEI7WUFBMUIseUNBQTBCO1lBZTVCLGVBQXNCO1lBQXRCLHlDQUFzQjtZQUlILGVBQXFCO1lBQXJCLHdDQUFxQjtZQW9CRyxlQUEyQjtZQUEzQiw4Q0FBMkI7WUFHdkQsZUFBK0I7WUFBL0IsK0NBQStCLCtDQUFBO1lBSTVELGVBQThEO1lBQTlELGdGQUE4RDtZQUQvQix3RUFBZ0Q7WUFPL0UsZUFBNEQ7WUFBNUQsZ0ZBQTREO1lBRGxDLDJFQUFtRDtZQUduRSxlQUF5QjtZQUF6Qiw0Q0FBeUI7WUFDekIsZUFBd0I7WUFBeEIsMkNBQXdCOztzQ0RoSDFDO0NBd0hDLEFBcEhELElBb0hDO1NBL0dZLDJCQUEyQjtrREFBM0IsMkJBQTJCO2NBTHZDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsa0JBQWtCO2dCQUM1QixXQUFXLEVBQUUsdUNBQXVDO2dCQUNwRCxTQUFTLEVBQUUsQ0FBQyx1Q0FBdUMsQ0FBQzthQUNyRDs7a0JBRUUsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsTUFBTTs7a0JBQ04sTUFBTTs7a0JBQ04sTUFBTTs7a0JBQ04sTUFBTTs7a0JBQ04sTUFBTTs7a0JBQ04sTUFBTTs7a0JBQ04sTUFBTTs7a0JBQ04sTUFBTTs7a0JBQ04sTUFBTTs7a0JBQ04sTUFBTTs7a0JBQ04sTUFBTTs7a0JBQ04sTUFBTTs7a0JBQ04sTUFBTTs7a0JBQ04sS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEVOVEVSLCBDT01NQSwgU0VNSUNPTE9OIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2tleWNvZGVzJztcbmltcG9ydCB7IEZvcm1Db250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItc3ViLWNhdGVnb3J5JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3N1Yi10ZW1wbGF0ZS1wcm9maWxlLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vc3ViLXRlbXBsYXRlLXByb2ZpbGUuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBTdWJUZW1wbGF0ZVByb2ZpbGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBmaWVsZDogYW55XG4gIEBJbnB1dCgpIGxlbmd0aDogYW55XG4gIEBJbnB1dCgpIGk6IGFueVxuICBASW5wdXQoKSBqOiBhbnlcbiAgQE91dHB1dCgpIG9uQWRkS2V5d29yZEZyb21JbnB1dCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpXG4gIEBPdXRwdXQoKSBvbktleVByZXNzID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KClcbiAgQE91dHB1dCgpIG9uRHJvcCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpXG4gIEBPdXRwdXQoKSBvbkFkZE5ld0ZpZWxkID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KClcbiAgQE91dHB1dCgpIG9uUmVtb3ZlRmllbGQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKVxuICBAT3V0cHV0KCkgb25DaGFuZ2VUeXBlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KClcbiAgQE91dHB1dCgpIG9uUmVtb3ZlS2V5d29yZCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpXG4gIEBPdXRwdXQoKSBvbkFkZE5ld1N1YkxldmVsRmllbGQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKVxuICBAT3V0cHV0KCkgb25FeHBlbmRNb3JlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KClcbiAgQE91dHB1dCgpIG9uQ2hhbmdlTGFiZWwgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKVxuICBAT3V0cHV0KCkgb25DaGVja2VkQ2hpcCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpXG4gIEBPdXRwdXQoKSBvbkNoZWNrZWREZWZhdWx0ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KClcbiAgQE91dHB1dCgpIG9uR2V0Q29uZGl0aW9uVmFsdWVzID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KClcbiAgQElucHV0KCkgY29uZGl0aW9uRGF0YT1bXVxuXG4gIGNoaXBDb250cm9sID0gbmV3IEZvcm1Db250cm9sKG5ldyBTZXQoKSk7XG5cbiAgc2VwYXJhdG9yS2V5c0NvZGVzID0gW0VOVEVSLCBDT01NQSwgU0VNSUNPTE9OXTtcbiAgY3VycmVudENoaXA9XCJcIlxuICBwcmV2VmFsdWU9XCJcIlxuICBzaG93Q29uZGl0aW9uPWZhbHNlXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gIH1cblxuICBkcm9wKGV2ZW50KSB7XG4gICAgdGhpcy5vbkRyb3AuZW1pdChldmVudClcbiAgfVxuXG4gIGFkZEtleXdvcmRGcm9tSW5wdXQoZXZlbnQsIGksIGopIHtcbiAgICB0aGlzLm9uQWRkS2V5d29yZEZyb21JbnB1dC5lbWl0KHsgZXZlbnQscHJldjp0aGlzLnByZXZWYWx1ZSwgaSwgaiB9KTtcbiAgfVxuXG4gIGtleVVwKGV2ZW50LCBpLCBqKSB7XG4gICAgdGhpcy5vbktleVByZXNzLmVtaXQoeyBldmVudCwgaSwgaiB9KVxuICB9XG5cbiAgYWRkTmV3RmllbGQoZXZlbnQsIGkpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgdGhpcy5vbkFkZE5ld0ZpZWxkLmVtaXQoeyBldmVudCwgaSB9KVxuICB9XG5cbiAgcmVtb3ZlRmllbGQoZXZlbnQsIGksIGopIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgdGhpcy5vblJlbW92ZUZpZWxkLmVtaXQoeyBpLCBqIH0pXG4gIH1cblxuICBjaGFuZ2VUeXBlKHR5cGUsIGksIGopIHtcbiAgICB0aGlzLm9uQ2hhbmdlVHlwZS5lbWl0KHsgdHlwZSwgaSwgaiB9KVxuICB9XG5cbiAgcmVtb3ZlS2V5d29yZChldmVudCwgaSwgaikge1xuICAgIHRoaXMub25SZW1vdmVLZXl3b3JkLmVtaXQoeyBldmVudCwgaSwgaiB9KVxuICB9XG4gIGFkZE5ld1N1YkxldmVsRmllbGQoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIHRoaXMub25BZGROZXdTdWJMZXZlbEZpZWxkLmVtaXQodHJ1ZSlcbiAgfVxuICBleHBlbmRNb3JlKGUsIGZpZWxkKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgdGhpcy5vbkV4cGVuZE1vcmUuZW1pdCh7ZXhwYW5kOnRydWUsIGZpZWxkfSlcbiAgfSAgXG4gIGdldENvbmRpdGlvblZhbHVlcygpIHtcbiAgICB0aGlzLm9uR2V0Q29uZGl0aW9uVmFsdWVzLmVtaXQodHJ1ZSlcbiAgfVxuXG4gIGluZ29yZURlZmF1bHRBY3Rpb24oZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICB9XG5cbiAgY2hhbmdlTGFiZWwobGFiZWwsa2V5KXtcbiAgICB0aGlzLm9uQ2hhbmdlTGFiZWwuZW1pdCh7bGFiZWwsIGtleX0pXG4gIH1cblxuICB0b2dnbGVDaGlwID0gKGNoaXA6IGFueSkgPT4ge1xuICAgIHRoaXMub25DaGVja2VkQ2hpcC5lbWl0KGNoaXApXG4gIH1cblxuICBvbkVkaXRDaGlwKGNoaXApe1xuICAgIGlmKGNoaXAudmFsdWU9PT10aGlzLmN1cnJlbnRDaGlwKXtcbiAgICAgIHRoaXMuY3VycmVudENoaXA9XCJcIlxuICAgICAgdGhpcy5wcmV2VmFsdWU9XCJcIlxuICAgIH1lbHNle1xuICAgICAgdGhpcy5jdXJyZW50Q2hpcD1jaGlwLnZhbHVlO1xuICAgICAgdGhpcy5wcmV2VmFsdWU9Y2hpcC52YWx1ZVxuICAgIH1cbiAgfVxuXG4gIGdldCBjaGlwcygpIHsgcmV0dXJuIHRoaXMuY2hpcENvbnRyb2wudmFsdWU7IH1cblxuICBjaGVja2VkRGVmYXVsdCh2YWx1ZSl7XG4gICAgdGhpcy5vbkNoZWNrZWREZWZhdWx0LmVtaXQodmFsdWUpXG4gIH1cblxuICBvblNob3dDb25kaXRpb24oZXZlbnQ9bnVsbCl7XG4gICAgaWYoZXZlbnQpe1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIH1cbiAgICB0aGlzLnNob3dDb25kaXRpb249IXRoaXMuc2hvd0NvbmRpdGlvblxuICB9XG5cbiAgLy8gY2hlY2tlZChsb2NhdGlvblZhbHVlLHZhbHVlKXtcbiAgLy8gICByZXR1cm4gbG9jYXRpb25WYWx1ZS5pbmNsdWRlcyh2YWx1ZSlcbiAgLy8gfVxuXG59XG4iLCI8ZGl2IGNsYXNzPVwiZmllbGQtaXRlbVwiPlxuICAgIDxtYXQtZm9ybS1maWVsZCBjbGFzcz1cImZvcm0tZmllbGQgZmllbGQtc2l6ZVwiIFtjbGFzc109XCIhZmllbGQuZWRpdGFibGUgPyAncmVhZG9ubHknIDonJyBcIiBhcHBlYXJhbmNlPVwib3V0bGluZVwiPlxuICAgICAgICA8bWF0LWxhYmVsPkxhYmVsPC9tYXQtbGFiZWw+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIFtyZWFkb25seV09XCIhZmllbGQuZWRpdGFibGVcIiBtYXRJbnB1dCByZXF1aXJlZCBbbmdNb2RlbE9wdGlvbnNdPVwie3N0YW5kYWxvbmU6IHRydWV9XCJcbiAgICAgICAgICAgIFsobmdNb2RlbCldPVwiZmllbGQubGFiZWxcIiBwbGFjZWhvbGRlcj1cIlwiIChuZ01vZGVsQ2hhbmdlKT1cImNoYW5nZUxhYmVsKGZpZWxkLmxhYmVsLCBmaWVsZC5rZXkpXCIgLz5cbiAgICA8L21hdC1mb3JtLWZpZWxkPlxuXG4gICAgPG1hdC1mb3JtLWZpZWxkIHN0eWxlPVwiZGlzcGxheTogbm9uZTtcIiBjbGFzcz1cImZvcm0tZmllbGQgZmllbGQtc2l6ZVwiIFtjbGFzc109XCIhZmllbGQuZWRpdGFibGUgPyAncmVhZG9ubHknIDonJyBcIlxuICAgICAgICBhcHBlYXJhbmNlPVwib3V0bGluZVwiPlxuICAgICAgICA8bWF0LWxhYmVsPkNsw6kgZHUgY2hhbXA8L21hdC1sYWJlbD5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgW3JlYWRvbmx5XT1cIiFmaWVsZC5lZGl0YWJsZVwiIG1hdElucHV0IHJlcXVpcmVkIFtuZ01vZGVsT3B0aW9uc109XCJ7c3RhbmRhbG9uZTogdHJ1ZX1cIlxuICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJmaWVsZC5rZXlcIiBwbGFjZWhvbGRlcj1cIlwiIC8+XG4gICAgPC9tYXQtZm9ybS1maWVsZD5cblxuICAgIDxtYXQtZm9ybS1maWVsZCBjbGFzcz1cImZvcm0tZmllbGQgZmllbGQtc2l6ZVwiIGFwcGVhcmFuY2U9XCJvdXRsaW5lXCI+XG4gICAgICAgIDxtYXQtbGFiZWw+VHlwZTwvbWF0LWxhYmVsPlxuICAgICAgICA8bWF0LXNlbGVjdCBbZGlzYWJsZWRdPVwiIWZpZWxkLmVkaXRhYmxlXCIgWyhuZ01vZGVsKV09XCJmaWVsZC50eXBlXCIgcmVxdWlyZWQgW25nTW9kZWxPcHRpb25zXT1cIntzdGFuZGFsb25lOiB0cnVlfVwiXG4gICAgICAgICAgICAobmdNb2RlbENoYW5nZSk9XCJjaGFuZ2VUeXBlKGZpZWxkLnR5cGUsaSxqKVwiPlxuICAgICAgICAgICAgPG1hdC1vcHRpb24gdmFsdWU9XCJ0ZXh0XCI+VGV4dCg4MCk8L21hdC1vcHRpb24+XG4gICAgICAgICAgICA8bWF0LW9wdGlvbiB2YWx1ZT1cInRleHRhcmVhXCI+VGV4dCg4MCspPC9tYXQtb3B0aW9uPlxuICAgICAgICAgICAgPG1hdC1vcHRpb24gdmFsdWU9XCJyYWRpb1wiPlJhZGlvPC9tYXQtb3B0aW9uPlxuICAgICAgICAgICAgPG1hdC1vcHRpb24gdmFsdWU9XCJzZWxlY3RcIj5TZWxlY3RldXI8L21hdC1vcHRpb24+XG4gICAgICAgICAgICA8bWF0LW9wdGlvbiB2YWx1ZT1cImNoZWNrYm94XCI+Q2hlY2tib3g8L21hdC1vcHRpb24+XG4gICAgICAgICAgICA8bWF0LW9wdGlvbiB2YWx1ZT1cImNoZWNrYm94X211bHRpcGxlXCI+Q2hlY2tib3ggbXVsdGlwbGU8L21hdC1vcHRpb24+XG4gICAgICAgICAgICA8bWF0LW9wdGlvbiB2YWx1ZT1cImVtYWlsXCI+RW1haWw8L21hdC1vcHRpb24+XG4gICAgICAgICAgICA8bWF0LW9wdGlvbiB2YWx1ZT1cInBhc3N3b3JkXCI+UGFzc3dvcmQ8L21hdC1vcHRpb24+XG4gICAgICAgICAgICA8bWF0LW9wdGlvbiB2YWx1ZT1cImRhdGVcIj5EYXRlPC9tYXQtb3B0aW9uPlxuICAgICAgICAgICAgPG1hdC1vcHRpb24gdmFsdWU9XCJ0ZWxcIj5QaG9uZTwvbWF0LW9wdGlvbj5cbiAgICAgICAgPC9tYXQtc2VsZWN0PlxuICAgIDwvbWF0LWZvcm0tZmllbGQ+XG4gICAgPG5nLWNvbnRhaW5lciBbbmdTd2l0Y2hdPVwiZmllbGQudHlwZVwiPlxuICAgICAgICA8ZGl2ICpuZ1N3aXRjaENhc2U9XCInY2hlY2tib3gnXCIgY2xhc3M9XCJmbGV4LWF1dG8gdy0zMCBmaWVsZC1zaXplXCI+XG4gICAgICAgICAgICA8bWF0LWNoZWNrYm94IGNsYXNzPVwiZm9ybS1maWVsZFwiIFsobmdNb2RlbCldPVwiZmllbGQuZXhwYW5kT25ib2FyZGluZ1wiIFtuZ01vZGVsT3B0aW9uc109XCJ7c3RhbmRhbG9uZTogdHJ1ZX1cIj5cbiAgICAgICAgICAgICAgICBDb2Now6kgcGFyXG4gICAgICAgICAgICAgICAgZGVmYXVsdFxuICAgICAgICAgICAgPC9tYXQtY2hlY2tib3g+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8bWF0LWZvcm0tZmllbGRcbiAgICAgICAgICAgICpuZ1N3aXRjaENhc2U9XCJbJ3NlbGVjdCcsICdyYWRpbycsJ2NoZWNrYm94X211bHRpcGxlJ10uaW5jbHVkZXMoZmllbGQudHlwZSkgPyBmaWVsZC50eXBlIDogIWZpZWxkLnR5cGVcIlxuICAgICAgICAgICAgY2xhc3M9XCJmbGV4LWF1dG8gdy0zMCBmaWVsZC1zaXplXCIgYXBwZWFyYW5jZT1cIm91dGxpbmVcIj5cbiAgICAgICAgICAgIDxtYXQtbGFiZWw+IFZhbGV1ciBwYXIgZGVmYXVsdCA8L21hdC1sYWJlbD5cbiAgICAgICAgICAgIDxtYXQtY2hpcC1saXN0ICNjaGlsZExpc3Q9XCJjZGtEcm9wTGlzdFwiIFtjZGtEcm9wTGlzdERhdGFdPVwiZmllbGQuZGVmYXVsdFZhbHVlXCIgY2RrRHJvcExpc3RcbiAgICAgICAgICAgICAgICAoY2RrRHJvcExpc3REcm9wcGVkKT1cImRyb3AoJGV2ZW50KVwiICNjaGlwTGlzdCBhcmlhLWxhYmVsPVwiVmlkZW8ga2V5d29yZHM7IGxldCBpbmRleD1pbmRleFwiIG11bHRpcGxlXG4gICAgICAgICAgICAgICAgc2VsZWN0YWJsZT5cbiAgICAgICAgICAgICAgICA8bWF0LWNoaXAgc3R5bGU9XCJtaW4taGVpZ2h0OiAyNXB4O1wiICpuZ0Zvcj1cImxldCBvcHRpb24gb2YgZmllbGQuZGVmYXVsdFZhbHVlXCJcbiAgICAgICAgICAgICAgICAgICAgW3NlbGVjdGVkXT1cIm9wdGlvbi5jaGVja2VkXCIgW3ZhbHVlXT1cIm9wdGlvbi52YWx1ZVwiIFtyZW1vdmFibGVdPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgIChkYmxjbGljayk9XCJ0b2dnbGVDaGlwKG9wdGlvbilcIiAoY2xpY2spPVwib25FZGl0Q2hpcChvcHRpb24pXCIgKHJlbW92ZWQpPVwicmVtb3ZlS2V5d29yZChvcHRpb24sIGksailcIlxuICAgICAgICAgICAgICAgICAgICBjZGtEcmFnPlxuICAgICAgICAgICAgICAgICAgICB7e29wdGlvbi52YWx1ZX19XG4gICAgICAgICAgICAgICAgICAgIDxtYXQtaWNvbiBtYXRDaGlwUmVtb3ZlPmNhbmNlbDwvbWF0LWljb24+XG4gICAgICAgICAgICAgICAgPC9tYXQtY2hpcD5cbiAgICAgICAgICAgICAgICA8aW5wdXQgI2NoaXBzSW5wdXQgcGxhY2Vob2xkZXI9XCJhZGQuLi5cIiBbbWF0Q2hpcElucHV0Rm9yXT1cImNoaXBMaXN0XCIgW21hdENoaXBJbnB1dEFkZE9uQmx1cl09XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgICAgKG1hdENoaXBJbnB1dFRva2VuRW5kKT1cImFkZEtleXdvcmRGcm9tSW5wdXQoJGV2ZW50LCBpLGopXCJcbiAgICAgICAgICAgICAgICAgICAgW21hdENoaXBJbnB1dFNlcGFyYXRvcktleUNvZGVzXT1cInNlcGFyYXRvcktleXNDb2Rlc1wiIChrZXl1cCk9XCJrZXlVcCgkZXZlbnQsaSxqKVwiXG4gICAgICAgICAgICAgICAgICAgIFsobmdNb2RlbCldPVwiY3VycmVudENoaXBcIiBbbmdNb2RlbE9wdGlvbnNdPVwie3N0YW5kYWxvbmU6IHRydWV9XCI+XG4gICAgICAgICAgICA8L21hdC1jaGlwLWxpc3Q+XG4gICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XG4gICAgICAgIDxtYXQtZm9ybS1maWVsZCAqbmdTd2l0Y2hDYXNlPVwiJ3RleHRhcmVhJ1wiIGNsYXNzPVwiZm9ybS1maWVsZCBmaWVsZC1zaXplXCIgYXBwZWFyYW5jZT1cIm91dGxpbmVcIj5cbiAgICAgICAgICAgIDxtYXQtbGFiZWw+VmFsZXVyIHBhciBkZWZhdWx0PC9tYXQtbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBtYXRJbnB1dCBbbmdNb2RlbE9wdGlvbnNdPVwie3N0YW5kYWxvbmU6IHRydWV9XCIgWyhuZ01vZGVsKV09XCJmaWVsZC5kZWZhdWx0VmFsdWVcIlxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRGVzY3JpcHRpb24uLi5cIj5cbiAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cblxuICAgICAgICA8bWF0LWZvcm0tZmllbGQgKm5nU3dpdGNoRGVmYXVsdCBjbGFzcz1cImZvcm0tZmllbGQgZmllbGQtc2l6ZVwiIFtzdHlsZS5vcGFjaXR5XT1cImZpZWxkLnR5cGUhPT0ndGVsJyA/IDEgOjBcIlxuICAgICAgICAgICAgYXBwZWFyYW5jZT1cIm91dGxpbmVcIj5cbiAgICAgICAgICAgIDxtYXQtbGFiZWw+VmFsZXVyIHBhciBkZWZhdWx0PC9tYXQtbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXQgW3R5cGVdPVwiZmllbGQudHlwZVwiIFtkaXNhYmxlZF09XCJmaWVsZC50eXBlPT09J3RlbCdcIiBtYXRJbnB1dCBbbmdNb2RlbE9wdGlvbnNdPVwie3N0YW5kYWxvbmU6IHRydWV9XCJcbiAgICAgICAgICAgICAgICBbKG5nTW9kZWwpXT1cImZpZWxkLmRlZmF1bHRWYWx1ZVwiIHBsYWNlaG9sZGVyPVwiXCI+XG4gICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XG4gICAgPC9uZy1jb250YWluZXI+XG5cbiAgICA8ZGl2IGNsYXNzPVwiY2hlY2tib3gtY29uZGl0aW9uXCI+XG4gICAgICAgIDxtYXQtY2hlY2tib3ggKm5nSWY9XCJmaWVsZC5lZGl0YWJsZVwiIGNsYXNzPVwiZm9ybS1maWVsZFwiIFsobmdNb2RlbCldPVwiZmllbGQuaXNDb25kaXRpb25hbFwiXG4gICAgICAgICAgICBbbmdNb2RlbE9wdGlvbnNdPVwie3N0YW5kYWxvbmU6IHRydWV9XCIgKG5nTW9kZWxDaGFuZ2UpPSdnZXRDb25kaXRpb25WYWx1ZXMoKSc+XG4gICAgICAgICAgICDDoCBjb25kaXRpb25cbiAgICAgICAgPC9tYXQtY2hlY2tib3g+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb25kaXRpb24tY29udGFpbmVyXCIgKm5nSWY9XCJzaG93Q29uZGl0aW9uXCI+XG4gICAgICAgICAgICA8bWF0LWZvcm0tZmllbGQgY2xhc3M9XCJmb3JtLWZpZWxkIGZpZWxkLXNpemUgZnVsbC13aWR0aFwiIGFwcGVhcmFuY2U9XCJvdXRsaW5lXCI+XG4gICAgICAgICAgICAgICAgPG1hdC1sYWJlbD5DaGFtcCBkZSBjb25kaXRpb24gOjwvbWF0LWxhYmVsPlxuICAgICAgICAgICAgICAgIDxtYXQtc2VsZWN0IFsobmdNb2RlbCldPVwiZmllbGQuY29uZGl0aW9uTG9jYXRpb25cIiByZXF1aXJlZCBbbmdNb2RlbE9wdGlvbnNdPVwie3N0YW5kYWxvbmU6IHRydWV9XCI+XG4gICAgICAgICAgICAgICAgICAgIDxtYXQtb3B0aW9uICpuZ0Zvcj1cImxldCBjb25kIG9mIGNvbmRpdGlvbkRhdGFcIiBbdmFsdWVdPVwiY29uZFwiPnt7Y29uZC5sYWJlbH19PC9tYXQtb3B0aW9uPlxuICAgICAgICAgICAgICAgIDwvbWF0LXNlbGVjdD5cbiAgICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XG4gICAgICAgICAgICA8bWF0LXJhZGlvLWdyb3VwIGFyaWEtbGFiZWxsZWRieT1cImV4YW1wbGUtcmFkaW8tZ3JvdXAtbGFiZWxcIiBjbGFzcz1cImV4YW1wbGUtcmFkaW8tZ3JvdXBcIlxuICAgICAgICAgICAgICAgIFsobmdNb2RlbCldPVwiZmllbGQuY29uZGl0aW9uVmFsdWVcIiBbbmdNb2RlbE9wdGlvbnNdPVwie3N0YW5kYWxvbmU6IHRydWV9XCI+XG4gICAgICAgICAgICAgICAgPG1hdC1yYWRpby1idXR0b24gY2xhc3M9XCJleGFtcGxlLXJhZGlvLWJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICpuZ0Zvcj1cImxldCBpdGVtIG9mIGZpZWxkLmNvbmRpdGlvbkxvY2F0aW9uLnBvc3NpYmxlVmFsdWVzXCIgW3ZhbHVlXT1cIml0ZW0udmFsdWVcIj5cbiAgICAgICAgICAgICAgICAgICAge3tpdGVtLnZhbHVlfX1cbiAgICAgICAgICAgICAgICA8L21hdC1yYWRpby1idXR0b24+XG4gICAgICAgICAgICA8L21hdC1yYWRpby1ncm91cD5cbiAgICAgICAgICAgIDxidXR0b24gbWF0LWJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIiAoY2xpY2spPSdvblNob3dDb25kaXRpb24oJGV2ZW50KSc+XG4gICAgICAgICAgICAgICAgPG1hdC1pY29uPmNsb3NlPC9tYXQtaWNvbj5GZXJtZXJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuICAgIDxtYXQtaWNvbiAoY2xpY2spPSdvblNob3dDb25kaXRpb24oKScgY2xhc3M9XCJjb25kaXRpb24taGVscFwiICpuZ0lmPVwiZmllbGQuaXNDb25kaXRpb25hbFwiXG4gICAgICAgIG1hdFRvb2x0aXA9XCJQYXJhbcOodHJlciBsYSBjb25kaXRpb24gaWNpICFcIj5oZWxwXG4gICAgPC9tYXQtaWNvbj5cbiAgICA8bWF0LWNoZWNrYm94IGNsYXNzPVwiZm9ybS1maWVsZFwiIFsobmdNb2RlbCldPVwiZmllbGQuaXNNYW5kYXRvcnlcIiBbbmdNb2RlbE9wdGlvbnNdPVwie3N0YW5kYWxvbmU6IHRydWV9XCI+XG4gICAgICAgIG9ibGlnYXRvaXJlXG4gICAgPC9tYXQtY2hlY2tib3g+XG4gICAgPGJ1dHRvbiBjbGFzcz1cInRyYW5zcGFyZW50LWJ1dHRvblwiIFtkaXNhYmxlZF09XCJmaWVsZC5zdWJMZXZlbD4yIHx8ICFmaWVsZC5lZGl0YWJsZVwiXG4gICAgICAgIFtzdHlsZS5vcGFjaXR5XT1cIihmaWVsZC5zdWJMZXZlbD4yIHx8ICFmaWVsZC5lZGl0YWJsZSkgPyAwIDoxXCIgbWF0LW1pbmktZmFiIGNvbG9yPVwic3VjY2Vzc1wiXG4gICAgICAgIChjbGljayk9J2FkZE5ld1N1YkxldmVsRmllbGQoJGV2ZW50KScgbWF0VG9vbHRpcD1cIkFqb3V0ZXIgdW5lIHNvdXMtY2F0w6lnb3JpZVwiPlxuICAgICAgICA8bWF0LWljb24+ZGV2aWNlX2h1YjwvbWF0LWljb24+XG4gICAgPC9idXR0b24+XG5cbiAgICA8YnV0dG9uIGNsYXNzPVwiZXhwYW5kLWJ1dHRvblwiIFtkaXNhYmxlZF09XCIhKGZpZWxkLmZvcm1zICYmIGZpZWxkLmZvcm1zLmxlbmd0aD4wKVwiXG4gICAgICAgIFtzdHlsZS5vcGFjaXR5XT1cImZpZWxkLmZvcm1zICYmIGZpZWxkLmZvcm1zLmxlbmd0aD4wID8gMSA6MFwiIG1hdC1taW5pLWZhYiBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAoY2xpY2spPVwiZXhwZW5kTW9yZSgkZXZlbnQsZmllbGQpXCI+XG4gICAgICAgIDxtYXQtaWNvbiAqbmdJZj1cIiFmaWVsZC5leHBhbmRNb3JlXCI+ZXhwYW5kX2xlc3M8L21hdC1pY29uPlxuICAgICAgICA8bWF0LWljb24gKm5nSWY9XCJmaWVsZC5leHBhbmRNb3JlXCI+ZXhwYW5kX21vcmU8L21hdC1pY29uPlxuICAgIDwvYnV0dG9uPlxuPC9kaXY+XG5cbjwhLS0gPGRpdiBjbGFzcz1cImFkZC1idXR0b24tY29udGFpbmVyXCIgKm5nSWY9XCJsZW5ndGgtMT09PWpcIj5cbiAgICA8YnV0dG9uIHN0eWxlPVwibWFyZ2luOjEwcHggYXV0b1wiIFtkaXNhYmxlZF09XCJsZW5ndGgtMSE9PWpcIiBbc3R5bGUub3BhY2l0eV09XCJsZW5ndGgtMT09PWogPyAxIDowXCIgbWF0LXJhaXNlZC1idXR0b25cbiAgICAgICAgY29sb3I9XCJwcmltYXJ5XCIgKGNsaWNrKT0nYWRkTmV3RmllbGQoJGV2ZW50LGkpJz5cbiAgICAgICAgPG1hdC1pY29uPmFkZF9ib3g8L21hdC1pY29uPlxuICAgICAgICA8c3Bhbj5Bam91dGVyIHVuIGNoYW1wPC9zcGFuPlxuICAgIDwvYnV0dG9uPlxuPC9kaXY+IC0tPlxuXG48bmctY29udGVudCBzZWxlY3Q9XCIuY2hpbGRcIj48L25nLWNvbnRlbnQ+Il19