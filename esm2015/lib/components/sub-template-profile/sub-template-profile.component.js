import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ENTER, COMMA, SEMICOLON } from '@angular/cdk/keycodes';
import { FormControl } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/form-field";
import * as i2 from "@angular/material/input";
import * as i3 from "@angular/forms";
import * as i4 from "@angular/material/select";
import * as i5 from "@angular/material/core";
import * as i6 from "@angular/common";
import * as i7 from "@angular/material/checkbox";
import * as i8 from "@angular/material/button";
import * as i9 from "@angular/material/tooltip";
import * as i10 from "@angular/material/icon";
import * as i11 from "@angular/material/chips";
import * as i12 from "@angular/cdk/drag-drop";
import * as i13 from "@angular/material/radio";
const _c0 = function () { return { standalone: true }; };
function SubTemplateProfileComponent_div_34_Template(rf, ctx) { if (rf & 1) {
    const _r252 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 28);
    i0.ɵɵelementStart(1, "mat-checkbox", 24);
    i0.ɵɵlistener("ngModelChange", function SubTemplateProfileComponent_div_34_Template_mat_checkbox_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r252); const ctx_r251 = i0.ɵɵnextContext(); return ctx_r251.field.expandOnboarding = $event; });
    i0.ɵɵtext(2, " Coch\u00E9 par default ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r242 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", ctx_r242.field.expandOnboarding)("ngModelOptions", i0.ɵɵpureFunction0(2, _c0));
} }
function SubTemplateProfileComponent_mat_form_field_35_mat_chip_6_Template(rf, ctx) { if (rf & 1) {
    const _r259 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-chip", 35);
    i0.ɵɵlistener("dblclick", function SubTemplateProfileComponent_mat_form_field_35_mat_chip_6_Template_mat_chip_dblclick_0_listener() { i0.ɵɵrestoreView(_r259); const option_r257 = ctx.$implicit; const ctx_r258 = i0.ɵɵnextContext(2); return ctx_r258.toggleChip(option_r257); })("click", function SubTemplateProfileComponent_mat_form_field_35_mat_chip_6_Template_mat_chip_click_0_listener() { i0.ɵɵrestoreView(_r259); const option_r257 = ctx.$implicit; const ctx_r260 = i0.ɵɵnextContext(2); return ctx_r260.onEditChip(option_r257); })("removed", function SubTemplateProfileComponent_mat_form_field_35_mat_chip_6_Template_mat_chip_removed_0_listener() { i0.ɵɵrestoreView(_r259); const option_r257 = ctx.$implicit; const ctx_r261 = i0.ɵɵnextContext(2); return ctx_r261.removeKeyword(option_r257, ctx_r261.i, ctx_r261.j); });
    i0.ɵɵtext(1);
    i0.ɵɵelementStart(2, "mat-icon", 36);
    i0.ɵɵtext(3, "cancel");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const option_r257 = ctx.$implicit;
    i0.ɵɵproperty("selected", option_r257.checked)("value", option_r257.value)("removable", true);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", option_r257.value, " ");
} }
function SubTemplateProfileComponent_mat_form_field_35_Template(rf, ctx) { if (rf & 1) {
    const _r263 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-form-field", 29);
    i0.ɵɵelementStart(1, "mat-label");
    i0.ɵɵtext(2, " Valeur par default ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "mat-chip-list", 30, 31);
    i0.ɵɵlistener("cdkDropListDropped", function SubTemplateProfileComponent_mat_form_field_35_Template_mat_chip_list_cdkDropListDropped_3_listener($event) { i0.ɵɵrestoreView(_r263); const ctx_r262 = i0.ɵɵnextContext(); return ctx_r262.drop($event); });
    i0.ɵɵtemplate(6, SubTemplateProfileComponent_mat_form_field_35_mat_chip_6_Template, 4, 4, "mat-chip", 32);
    i0.ɵɵelementStart(7, "input", 33, 34);
    i0.ɵɵlistener("matChipInputTokenEnd", function SubTemplateProfileComponent_mat_form_field_35_Template_input_matChipInputTokenEnd_7_listener($event) { i0.ɵɵrestoreView(_r263); const ctx_r264 = i0.ɵɵnextContext(); return ctx_r264.addKeywordFromInput($event, ctx_r264.i, ctx_r264.j); })("keyup", function SubTemplateProfileComponent_mat_form_field_35_Template_input_keyup_7_listener($event) { i0.ɵɵrestoreView(_r263); const ctx_r265 = i0.ɵɵnextContext(); return ctx_r265.keyUp($event, ctx_r265.i, ctx_r265.j); })("ngModelChange", function SubTemplateProfileComponent_mat_form_field_35_Template_input_ngModelChange_7_listener($event) { i0.ɵɵrestoreView(_r263); const ctx_r266 = i0.ɵɵnextContext(); return ctx_r266.currentChip = $event; });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const _r254 = i0.ɵɵreference(5);
    const ctx_r243 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("cdkDropListData", ctx_r243.field.defaultValue);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", ctx_r243.field.defaultValue);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("matChipInputFor", _r254)("matChipInputAddOnBlur", true)("matChipInputSeparatorKeyCodes", ctx_r243.separatorKeysCodes)("ngModel", ctx_r243.currentChip);
} }
function SubTemplateProfileComponent_mat_form_field_36_Template(rf, ctx) { if (rf & 1) {
    const _r268 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-form-field", 1);
    i0.ɵɵelementStart(1, "mat-label");
    i0.ɵɵtext(2, "Valeur par default");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "input", 37);
    i0.ɵɵlistener("ngModelChange", function SubTemplateProfileComponent_mat_form_field_36_Template_input_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r268); const ctx_r267 = i0.ɵɵnextContext(); return ctx_r267.field.defaultValue = $event; });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r244 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngModelOptions", i0.ɵɵpureFunction0(2, _c0))("ngModel", ctx_r244.field.defaultValue);
} }
function SubTemplateProfileComponent_mat_form_field_37_Template(rf, ctx) { if (rf & 1) {
    const _r270 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-form-field", 1);
    i0.ɵɵelementStart(1, "mat-label");
    i0.ɵɵtext(2, "Valeur par default");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "input", 38);
    i0.ɵɵlistener("ngModelChange", function SubTemplateProfileComponent_mat_form_field_37_Template_input_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r270); const ctx_r269 = i0.ɵɵnextContext(); return ctx_r269.field.defaultValue = $event; });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r245 = i0.ɵɵnextContext();
    i0.ɵɵstyleProp("opacity", ctx_r245.field.type !== "tel" ? 1 : 0);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("type", ctx_r245.field.type)("disabled", ctx_r245.field.type === "tel")("ngModelOptions", i0.ɵɵpureFunction0(6, _c0))("ngModel", ctx_r245.field.defaultValue);
} }
function SubTemplateProfileComponent_mat_checkbox_39_Template(rf, ctx) { if (rf & 1) {
    const _r272 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-checkbox", 24);
    i0.ɵɵlistener("ngModelChange", function SubTemplateProfileComponent_mat_checkbox_39_Template_mat_checkbox_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r272); const ctx_r271 = i0.ɵɵnextContext(); return ctx_r271.field.isConditional = $event; })("ngModelChange", function SubTemplateProfileComponent_mat_checkbox_39_Template_mat_checkbox_ngModelChange_0_listener() { i0.ɵɵrestoreView(_r272); const ctx_r273 = i0.ɵɵnextContext(); return ctx_r273.getConditionValues(); });
    i0.ɵɵtext(1, " \u00E0 condition ");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r246 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngModel", ctx_r246.field.isConditional)("ngModelOptions", i0.ɵɵpureFunction0(2, _c0));
} }
function SubTemplateProfileComponent_div_40_mat_option_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 46);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const cond_r276 = ctx.$implicit;
    i0.ɵɵproperty("value", cond_r276);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(cond_r276.label);
} }
function SubTemplateProfileComponent_div_40_mat_radio_button_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-radio-button", 47);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r277 = ctx.$implicit;
    i0.ɵɵproperty("value", item_r277.value);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", item_r277.value, " ");
} }
function SubTemplateProfileComponent_div_40_Template(rf, ctx) { if (rf & 1) {
    const _r279 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 39);
    i0.ɵɵelementStart(1, "mat-form-field", 40);
    i0.ɵɵelementStart(2, "mat-label");
    i0.ɵɵtext(3, "Champ de condition :");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "mat-select", 41);
    i0.ɵɵlistener("ngModelChange", function SubTemplateProfileComponent_div_40_Template_mat_select_ngModelChange_4_listener($event) { i0.ɵɵrestoreView(_r279); const ctx_r278 = i0.ɵɵnextContext(); return ctx_r278.field.conditionLocation = $event; });
    i0.ɵɵtemplate(5, SubTemplateProfileComponent_div_40_mat_option_5_Template, 2, 2, "mat-option", 42);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "mat-radio-group", 43);
    i0.ɵɵlistener("ngModelChange", function SubTemplateProfileComponent_div_40_Template_mat_radio_group_ngModelChange_6_listener($event) { i0.ɵɵrestoreView(_r279); const ctx_r280 = i0.ɵɵnextContext(); return ctx_r280.field.conditionValue = $event; });
    i0.ɵɵtemplate(7, SubTemplateProfileComponent_div_40_mat_radio_button_7_Template, 2, 2, "mat-radio-button", 44);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "button", 45);
    i0.ɵɵlistener("click", function SubTemplateProfileComponent_div_40_Template_button_click_8_listener($event) { i0.ɵɵrestoreView(_r279); const ctx_r281 = i0.ɵɵnextContext(); return ctx_r281.onShowCondition($event); });
    i0.ɵɵelementStart(9, "mat-icon");
    i0.ɵɵtext(10, "close");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(11, "Fermer ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r247 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngModel", ctx_r247.field.conditionLocation)("ngModelOptions", i0.ɵɵpureFunction0(5, _c0));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r247.conditionData);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", ctx_r247.field.conditionValue);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r247.field.conditionLocation.possibleValues);
} }
function SubTemplateProfileComponent_mat_icon_41_Template(rf, ctx) { if (rf & 1) {
    const _r283 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-icon", 48);
    i0.ɵɵlistener("click", function SubTemplateProfileComponent_mat_icon_41_Template_mat_icon_click_0_listener() { i0.ɵɵrestoreView(_r283); const ctx_r282 = i0.ɵɵnextContext(); return ctx_r282.onShowCondition(); });
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
const _c1 = [[["", 8, "child"]]];
const _c2 = function () { return ["select", "radio", "checkbox_multiple"]; };
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
        this.conditionData = [];
        this.chipControl = new FormControl(new Set());
        this.separatorKeysCodes = [ENTER, COMMA, SEMICOLON];
        this.currentChip = "";
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
    getConditionValues() {
        this.onGetConditionValues.emit(true);
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
}
SubTemplateProfileComponent.ɵfac = function SubTemplateProfileComponent_Factory(t) { return new (t || SubTemplateProfileComponent)(); };
SubTemplateProfileComponent.ɵcmp = i0.ɵɵdefineComponent({ type: SubTemplateProfileComponent, selectors: [["lib-sub-category"]], inputs: { field: "field", length: "length", i: "i", j: "j", conditionData: "conditionData" }, outputs: { onAddKeywordFromInput: "onAddKeywordFromInput", onKeyPress: "onKeyPress", onDrop: "onDrop", onAddNewField: "onAddNewField", onRemoveField: "onRemoveField", onChangeType: "onChangeType", onRemoveKeyword: "onRemoveKeyword", onAddNewSubLevelField: "onAddNewSubLevelField", onExpendMore: "onExpendMore", onChangeLabel: "onChangeLabel", onCheckedChip: "onCheckedChip", onCheckedDefault: "onCheckedDefault", onGetConditionValues: "onGetConditionValues" }, ngContentSelectors: _c3, decls: 51, vars: 35, consts: [[1, "field-item"], ["appearance", "outline", 1, "form-field", "field-size"], ["type", "text", "matInput", "", "required", "", "placeholder", "", 3, "readonly", "ngModelOptions", "ngModel", "ngModelChange"], ["appearance", "outline", 1, "form-field", "field-size", 2, "display", "none"], ["required", "", 3, "disabled", "ngModel", "ngModelOptions", "ngModelChange"], ["value", "text"], ["value", "textarea"], ["value", "radio"], ["value", "select"], ["value", "checkbox"], ["value", "checkbox_multiple"], ["value", "email"], ["value", "password"], ["value", "date"], ["value", "tel"], [3, "ngSwitch"], ["class", "flex-auto w-30 field-size", 4, "ngSwitchCase"], ["class", "flex-auto w-30 field-size", "appearance", "outline", 4, "ngSwitchCase"], ["class", "form-field field-size", "appearance", "outline", 4, "ngSwitchCase"], ["class", "form-field field-size", "appearance", "outline", 3, "opacity", 4, "ngSwitchDefault"], [1, "checkbox-condition"], ["class", "form-field", 3, "ngModel", "ngModelOptions", "ngModelChange", 4, "ngIf"], ["class", "condition-container", 4, "ngIf"], ["class", "condition-help", "matTooltip", "Param\u00E8trer la condition ici !", 3, "click", 4, "ngIf"], [1, "form-field", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["mat-mini-fab", "", "color", "success", "matTooltip", "Ajouter une sous-cat\u00E9gorie", 1, "transparent-button", 3, "disabled", "click"], ["mat-mini-fab", "", "color", "primary", 1, "expand-button", 3, "disabled", "click"], [4, "ngIf"], [1, "flex-auto", "w-30", "field-size"], ["appearance", "outline", 1, "flex-auto", "w-30", "field-size"], ["cdkDropList", "", "aria-label", "Video keywords; let index=index", "multiple", "", "selectable", "", 3, "cdkDropListData", "cdkDropListDropped"], ["childList", "cdkDropList", "chipList", ""], ["style", "min-height: 25px;", "cdkDrag", "", 3, "selected", "value", "removable", "dblclick", "click", "removed", 4, "ngFor", "ngForOf"], ["placeholder", "add...", 3, "matChipInputFor", "matChipInputAddOnBlur", "matChipInputSeparatorKeyCodes", "ngModel", "matChipInputTokenEnd", "keyup", "ngModelChange"], ["chipsInput", ""], ["cdkDrag", "", 2, "min-height", "25px", 3, "selected", "value", "removable", "dblclick", "click", "removed"], ["matChipRemove", ""], ["type", "text", "matInput", "", "placeholder", "Description...", 3, "ngModelOptions", "ngModel", "ngModelChange"], ["matInput", "", "placeholder", "", 3, "type", "disabled", "ngModelOptions", "ngModel", "ngModelChange"], [1, "condition-container"], ["appearance", "outline", 1, "form-field", "field-size", "full-width"], ["required", "", 3, "ngModel", "ngModelOptions", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], ["aria-labelledby", "example-radio-group-label", 1, "example-radio-group", 3, "ngModel", "ngModelChange"], ["class", "example-radio-button", 3, "value", 4, "ngFor", "ngForOf"], ["mat-button", "", "color", "primary", 3, "click"], [3, "value"], [1, "example-radio-button", 3, "value"], ["matTooltip", "Param\u00E8trer la condition ici !", 1, "condition-help", 3, "click"]], template: function SubTemplateProfileComponent_Template(rf, ctx) { if (rf & 1) {
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
        i0.ɵɵtemplate(35, SubTemplateProfileComponent_mat_form_field_35_Template, 9, 6, "mat-form-field", 17);
        i0.ɵɵtemplate(36, SubTemplateProfileComponent_mat_form_field_36_Template, 4, 3, "mat-form-field", 18);
        i0.ɵɵtemplate(37, SubTemplateProfileComponent_mat_form_field_37_Template, 4, 7, "mat-form-field", 19);
        i0.ɵɵelementContainerEnd();
        i0.ɵɵelementStart(38, "div", 20);
        i0.ɵɵtemplate(39, SubTemplateProfileComponent_mat_checkbox_39_Template, 2, 3, "mat-checkbox", 21);
        i0.ɵɵtemplate(40, SubTemplateProfileComponent_div_40_Template, 12, 6, "div", 22);
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
    } }, directives: [i1.MatFormField, i1.MatLabel, i2.MatInput, i3.DefaultValueAccessor, i3.RequiredValidator, i3.NgControlStatus, i3.NgModel, i4.MatSelect, i5.MatOption, i6.NgSwitch, i6.NgSwitchCase, i6.NgSwitchDefault, i6.NgIf, i7.MatCheckbox, i8.MatButton, i9.MatTooltip, i10.MatIcon, i11.MatChipList, i12.CdkDropList, i6.NgForOf, i11.MatChipInput, i11.MatChip, i12.CdkDrag, i11.MatChipRemove, i13.MatRadioGroup, i13.MatRadioButton], styles: [".container[_ngcontent-%COMP%]{max-width:98%;margin:50px auto auto;padding-bottom:50px}.container[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:space-between}.input-category-name[_ngcontent-%COMP%]{font-size:15px;font-weight:500}.full-width[_ngcontent-%COMP%]{width:100%}.field-item[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;width:100%;flex-wrap:wrap}.field-item[_ngcontent-%COMP%]   .button-action[_ngcontent-%COMP%]{background-color:#6fe8d7;height:100%;margin:auto 15px auto auto;display:flex}.field-item[_ngcontent-%COMP%]   .button-action[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{box-shadow:none;background-color:transparent;color:#fff}.field-action[_ngcontent-%COMP%]{width:10%}hr[_ngcontent-%COMP%]{margin:50px 0}  .mat-form-field-appearance-fill .mat-form-field-flex{background-color:#fff}.category-action[_ngcontent-%COMP%]{display:flex;width:100%}.delete-field[_ngcontent-%COMP%]{margin:auto 2%}.radio-group[_ngcontent-%COMP%]   .mat-radio-button[_ngcontent-%COMP%]{margin-right:10px}.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary[_ngcontent-%COMP%]{background-color:#3f51b5;color:#fff;min-height:20px;font-size:10px}.move-icons[_ngcontent-%COMP%]{cursor:move}.category-item[_ngcontent-%COMP%]{display:flex;align-items:baseline;width:100%;border:1px solid #dce4e9;border-radius:8px}  mat-checkbox.form-field .mat-checkbox-checkmark-path{stroke:#000!important}  .readonly.mat-form-field-appearance-outline .mat-form-field-outline{color:transparent!important}.field-content[_ngcontent-%COMP%]{width:100%}.cdk-drag-preview[_ngcontent-%COMP%]{box-sizing:border-box;border-radius:4px;box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.cdk-drag-placeholder[_ngcontent-%COMP%]{opacity:0}.cdk-drag-animating[_ngcontent-%COMP%], .example-list.cdk-drop-list-dragging[_ngcontent-%COMP%]   .category-item[_ngcontent-%COMP%]:not(.cdk-drag-placeholder){transition:transform 250ms cubic-bezier(0,0,.2,1)}.add-button-container[_ngcontent-%COMP%]{background:no-repeat padding-box #fff;border:1px dashed #dce4e9;border-radius:8px;margin-top:10px;padding:10px;display:flex;justify-content:center;align-items:center;width:98%;margin-left:0;margin-bottom:22px}.add-button-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{display:flex;align-items:center;background-color:transparent;border:none;cursor:pointer;font:17px/26px Nexa Text;letter-spacing:0;color:#c2c8d5;box-shadow:none}.expand-button[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%]{font-size:48px;margin-top:-20px;margin-right:15px}.transparent-button[_ngcontent-%COMP%]{background-color:transparent!important;box-shadow:none!important;width:40px!important;padding:0!important;margin:0!important;min-width:auto!important}.expand-button[_ngcontent-%COMP%]{color:#5a607f!important;background-color:transparent!important;box-shadow:none!important}.checkbox-condition[_ngcontent-%COMP%]{position:relative}.checkbox-condition[_ngcontent-%COMP%]   .condition-container[_ngcontent-%COMP%]{position:absolute;top:30px;width:500px;height:150px;background-color:#fff;border:1px dashed #dce4e9;z-index:1;left:0;border-radius:5px}.checkbox-condition[_ngcontent-%COMP%]   .condition-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{position:absolute;bottom:5px;left:0}.condition-help[_ngcontent-%COMP%]{cursor:pointer}.cdk-overlay-pane[_ngcontent-%COMP%]{width:100%}"] });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3ViLXRlbXBsYXRlLXByb2ZpbGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vb25ib2FyZGluZy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3N1Yi10ZW1wbGF0ZS1wcm9maWxlL3N1Yi10ZW1wbGF0ZS1wcm9maWxlLmNvbXBvbmVudC50cyIsImxpYi9jb21wb25lbnRzL3N1Yi10ZW1wbGF0ZS1wcm9maWxlL3N1Yi10ZW1wbGF0ZS1wcm9maWxlLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDL0UsT0FBTyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDaEUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7SUM2QnJDLCtCQUNJO0lBQUEsd0NBQ0k7SUFENkIscVBBQW9DO0lBQ2pFLHdDQUVKO0lBQUEsaUJBQWU7SUFDbkIsaUJBQU07OztJQUorQixlQUFvQztJQUFwQyx5REFBb0MsOENBQUE7Ozs7SUFZakUsb0NBSUk7SUFGQSxtUkFBK0IsZ1FBQUEsK1JBQUE7SUFFL0IsWUFDQTtJQUFBLG9DQUF3QjtJQUFBLHNCQUFNO0lBQUEsaUJBQVc7SUFDN0MsaUJBQVc7OztJQUxQLDhDQUEyQiw0QkFBQSxtQkFBQTtJQUczQixlQUNBO0lBREEsa0RBQ0E7Ozs7SUFaWiwwQ0FHSTtJQUFBLGlDQUFZO0lBQUEsb0NBQW1CO0lBQUEsaUJBQVk7SUFDM0MsNkNBR0k7SUFGQSx3UEFBbUM7SUFFbkMseUdBSUk7SUFHSixxQ0FJSjtJQUhRLDJSQUF5RCxrT0FBQSxpT0FBQTtJQUQ3RCxpQkFJSjtJQUFBLGlCQUFnQjtJQUNwQixpQkFBaUI7Ozs7SUFmMkIsZUFBc0M7SUFBdEMsNkRBQXNDO0lBR3RD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QUE5RCxnRkFBOEQ7UUFEL0Isd0VBQWdEO1FBTy9FLGVBQTREO1FBQTVELGdGQUE0RDtRQURsQywyRUFBbUQ7UUFHbkUsZUFBeUI7UUFBekIsNENBQXlCO1FBQ3pCLGVBQXdCO1FBQXhCLDJDQUF3Qjs7a0REdkc3QiwyQkFBMkI7Y0FMdkMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxrQkFBa0I7Z0JBQzVCLFdBQVcsRUFBRSx1Q0FBdUM7Z0JBQ3BELFNBQVMsRUFBRSxDQUFDLHVDQUF1QyxDQUFDO2FBQ3JEOztrQkFFRSxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxNQUFNOztrQkFDTixNQUFNOztrQkFDTixNQUFNOztrQkFDTixNQUFNOztrQkFDTixNQUFNOztrQkFDTixNQUFNOztrQkFDTixNQUFNOztrQkFDTixNQUFNOztrQkFDTixNQUFNOztrQkFDTixNQUFNOztrQkFDTixNQUFNOztrQkFDTixNQUFNOztrQkFDTixNQUFNOztrQkFDTixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRU5URVIsIENPTU1BLCBTRU1JQ09MT04gfSBmcm9tICdAYW5ndWxhci9jZGsva2V5Y29kZXMnO1xuaW1wb3J0IHsgRm9ybUNvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1zdWItY2F0ZWdvcnknLFxuICB0ZW1wbGF0ZVVybDogJy4vc3ViLXRlbXBsYXRlLXByb2ZpbGUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zdWItdGVtcGxhdGUtcHJvZmlsZS5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFN1YlRlbXBsYXRlUHJvZmlsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIGZpZWxkOiBhbnlcbiAgQElucHV0KCkgbGVuZ3RoOiBhbnlcbiAgQElucHV0KCkgaTogYW55XG4gIEBJbnB1dCgpIGo6IGFueVxuICBAT3V0cHV0KCkgb25BZGRLZXl3b3JkRnJvbUlucHV0ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KClcbiAgQE91dHB1dCgpIG9uS2V5UHJlc3MgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKVxuICBAT3V0cHV0KCkgb25Ecm9wID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KClcbiAgQE91dHB1dCgpIG9uQWRkTmV3RmllbGQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKVxuICBAT3V0cHV0KCkgb25SZW1vdmVGaWVsZCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpXG4gIEBPdXRwdXQoKSBvbkNoYW5nZVR5cGUgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKVxuICBAT3V0cHV0KCkgb25SZW1vdmVLZXl3b3JkID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KClcbiAgQE91dHB1dCgpIG9uQWRkTmV3U3ViTGV2ZWxGaWVsZCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpXG4gIEBPdXRwdXQoKSBvbkV4cGVuZE1vcmUgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKVxuICBAT3V0cHV0KCkgb25DaGFuZ2VMYWJlbCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpXG4gIEBPdXRwdXQoKSBvbkNoZWNrZWRDaGlwID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KClcbiAgQE91dHB1dCgpIG9uQ2hlY2tlZERlZmF1bHQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKVxuICBAT3V0cHV0KCkgb25HZXRDb25kaXRpb25WYWx1ZXMgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKVxuICBASW5wdXQoKSBjb25kaXRpb25EYXRhPVtdXG5cbiAgY2hpcENvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2wobmV3IFNldCgpKTtcblxuICBzZXBhcmF0b3JLZXlzQ29kZXMgPSBbRU5URVIsIENPTU1BLCBTRU1JQ09MT05dO1xuICBjdXJyZW50Q2hpcD1cIlwiXG4gIHByZXZWYWx1ZT1cIlwiXG4gIHNob3dDb25kaXRpb249ZmFsc2VcbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgfVxuXG4gIGRyb3AoZXZlbnQpIHtcbiAgICB0aGlzLm9uRHJvcC5lbWl0KGV2ZW50KVxuICB9XG5cbiAgYWRkS2V5d29yZEZyb21JbnB1dChldmVudCwgaSwgaikge1xuICAgIHRoaXMub25BZGRLZXl3b3JkRnJvbUlucHV0LmVtaXQoeyBldmVudCxwcmV2OnRoaXMucHJldlZhbHVlLCBpLCBqIH0pO1xuICB9XG5cbiAga2V5VXAoZXZlbnQsIGksIGopIHtcbiAgICB0aGlzLm9uS2V5UHJlc3MuZW1pdCh7IGV2ZW50LCBpLCBqIH0pXG4gIH1cblxuICBhZGROZXdGaWVsZChldmVudCwgaSkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICB0aGlzLm9uQWRkTmV3RmllbGQuZW1pdCh7IGV2ZW50LCBpIH0pXG4gIH1cblxuICByZW1vdmVGaWVsZChldmVudCwgaSwgaikge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICB0aGlzLm9uUmVtb3ZlRmllbGQuZW1pdCh7IGksIGogfSlcbiAgfVxuXG4gIGNoYW5nZVR5cGUodHlwZSwgaSwgaikge1xuICAgIHRoaXMub25DaGFuZ2VUeXBlLmVtaXQoeyB0eXBlLCBpLCBqIH0pXG4gIH1cblxuICByZW1vdmVLZXl3b3JkKGV2ZW50LCBpLCBqKSB7XG4gICAgdGhpcy5vblJlbW92ZUtleXdvcmQuZW1pdCh7IGV2ZW50LCBpLCBqIH0pXG4gIH1cbiAgYWRkTmV3U3ViTGV2ZWxGaWVsZChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgdGhpcy5vbkFkZE5ld1N1YkxldmVsRmllbGQuZW1pdCh0cnVlKVxuICB9XG4gIGV4cGVuZE1vcmUoZSwgZmllbGQpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICB0aGlzLm9uRXhwZW5kTW9yZS5lbWl0KHtleHBhbmQ6dHJ1ZSwgZmllbGR9KVxuICB9ICBcbiAgZ2V0Q29uZGl0aW9uVmFsdWVzKCkge1xuICAgIHRoaXMub25HZXRDb25kaXRpb25WYWx1ZXMuZW1pdCh0cnVlKVxuICB9XG5cbiAgaW5nb3JlRGVmYXVsdEFjdGlvbihlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gIH1cblxuICBjaGFuZ2VMYWJlbChsYWJlbCxrZXkpe1xuICAgIHRoaXMub25DaGFuZ2VMYWJlbC5lbWl0KHtsYWJlbCwga2V5fSlcbiAgfVxuXG4gIHRvZ2dsZUNoaXAgPSAoY2hpcDogYW55KSA9PiB7XG4gICAgdGhpcy5vbkNoZWNrZWRDaGlwLmVtaXQoY2hpcClcbiAgfVxuXG4gIG9uRWRpdENoaXAoY2hpcCl7XG4gICAgaWYoY2hpcC52YWx1ZT09PXRoaXMuY3VycmVudENoaXApe1xuICAgICAgdGhpcy5jdXJyZW50Q2hpcD1cIlwiXG4gICAgICB0aGlzLnByZXZWYWx1ZT1cIlwiXG4gICAgfWVsc2V7XG4gICAgICB0aGlzLmN1cnJlbnRDaGlwPWNoaXAudmFsdWU7XG4gICAgICB0aGlzLnByZXZWYWx1ZT1jaGlwLnZhbHVlXG4gICAgfVxuICB9XG5cbiAgZ2V0IGNoaXBzKCkgeyByZXR1cm4gdGhpcy5jaGlwQ29udHJvbC52YWx1ZTsgfVxuXG4gIGNoZWNrZWREZWZhdWx0KHZhbHVlKXtcbiAgICB0aGlzLm9uQ2hlY2tlZERlZmF1bHQuZW1pdCh2YWx1ZSlcbiAgfVxuXG4gIG9uU2hvd0NvbmRpdGlvbihldmVudD1udWxsKXtcbiAgICBpZihldmVudCl7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgfVxuICAgIHRoaXMuc2hvd0NvbmRpdGlvbj0hdGhpcy5zaG93Q29uZGl0aW9uXG4gIH1cblxuICAvLyBjaGVja2VkKGxvY2F0aW9uVmFsdWUsdmFsdWUpe1xuICAvLyAgIHJldHVybiBsb2NhdGlvblZhbHVlLmluY2x1ZGVzKHZhbHVlKVxuICAvLyB9XG5cbn1cbiIsIjxkaXYgY2xhc3M9XCJmaWVsZC1pdGVtXCI+XG4gICAgPG1hdC1mb3JtLWZpZWxkIGNsYXNzPVwiZm9ybS1maWVsZCBmaWVsZC1zaXplXCIgW2NsYXNzXT1cIiFmaWVsZC5lZGl0YWJsZSA/ICdyZWFkb25seScgOicnIFwiIGFwcGVhcmFuY2U9XCJvdXRsaW5lXCI+XG4gICAgICAgIDxtYXQtbGFiZWw+TGFiZWw8L21hdC1sYWJlbD5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgW3JlYWRvbmx5XT1cIiFmaWVsZC5lZGl0YWJsZVwiIG1hdElucHV0IHJlcXVpcmVkIFtuZ01vZGVsT3B0aW9uc109XCJ7c3RhbmRhbG9uZTogdHJ1ZX1cIlxuICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJmaWVsZC5sYWJlbFwiIHBsYWNlaG9sZGVyPVwiXCIgKG5nTW9kZWxDaGFuZ2UpPVwiY2hhbmdlTGFiZWwoZmllbGQubGFiZWwsIGZpZWxkLmtleSlcIiAvPlxuICAgIDwvbWF0LWZvcm0tZmllbGQ+XG5cbiAgICA8bWF0LWZvcm0tZmllbGQgc3R5bGU9XCJkaXNwbGF5OiBub25lO1wiIGNsYXNzPVwiZm9ybS1maWVsZCBmaWVsZC1zaXplXCIgW2NsYXNzXT1cIiFmaWVsZC5lZGl0YWJsZSA/ICdyZWFkb25seScgOicnIFwiXG4gICAgICAgIGFwcGVhcmFuY2U9XCJvdXRsaW5lXCI+XG4gICAgICAgIDxtYXQtbGFiZWw+Q2zDqSBkdSBjaGFtcDwvbWF0LWxhYmVsPlxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBbcmVhZG9ubHldPVwiIWZpZWxkLmVkaXRhYmxlXCIgbWF0SW5wdXQgcmVxdWlyZWQgW25nTW9kZWxPcHRpb25zXT1cIntzdGFuZGFsb25lOiB0cnVlfVwiXG4gICAgICAgICAgICBbKG5nTW9kZWwpXT1cImZpZWxkLmtleVwiIHBsYWNlaG9sZGVyPVwiXCIgLz5cbiAgICA8L21hdC1mb3JtLWZpZWxkPlxuXG4gICAgPG1hdC1mb3JtLWZpZWxkIGNsYXNzPVwiZm9ybS1maWVsZCBmaWVsZC1zaXplXCIgYXBwZWFyYW5jZT1cIm91dGxpbmVcIj5cbiAgICAgICAgPG1hdC1sYWJlbD5UeXBlPC9tYXQtbGFiZWw+XG4gICAgICAgIDxtYXQtc2VsZWN0IFtkaXNhYmxlZF09XCIhZmllbGQuZWRpdGFibGVcIiBbKG5nTW9kZWwpXT1cImZpZWxkLnR5cGVcIiByZXF1aXJlZCBbbmdNb2RlbE9wdGlvbnNdPVwie3N0YW5kYWxvbmU6IHRydWV9XCJcbiAgICAgICAgICAgIChuZ01vZGVsQ2hhbmdlKT1cImNoYW5nZVR5cGUoZmllbGQudHlwZSxpLGopXCI+XG4gICAgICAgICAgICA8bWF0LW9wdGlvbiB2YWx1ZT1cInRleHRcIj5UZXh0KDgwKTwvbWF0LW9wdGlvbj5cbiAgICAgICAgICAgIDxtYXQtb3B0aW9uIHZhbHVlPVwidGV4dGFyZWFcIj5UZXh0KDgwKyk8L21hdC1vcHRpb24+XG4gICAgICAgICAgICA8bWF0LW9wdGlvbiB2YWx1ZT1cInJhZGlvXCI+UmFkaW88L21hdC1vcHRpb24+XG4gICAgICAgICAgICA8bWF0LW9wdGlvbiB2YWx1ZT1cInNlbGVjdFwiPlNlbGVjdGV1cjwvbWF0LW9wdGlvbj5cbiAgICAgICAgICAgIDxtYXQtb3B0aW9uIHZhbHVlPVwiY2hlY2tib3hcIj5DaGVja2JveDwvbWF0LW9wdGlvbj5cbiAgICAgICAgICAgIDxtYXQtb3B0aW9uIHZhbHVlPVwiY2hlY2tib3hfbXVsdGlwbGVcIj5DaGVja2JveCBtdWx0aXBsZTwvbWF0LW9wdGlvbj5cbiAgICAgICAgICAgIDxtYXQtb3B0aW9uIHZhbHVlPVwiZW1haWxcIj5FbWFpbDwvbWF0LW9wdGlvbj5cbiAgICAgICAgICAgIDxtYXQtb3B0aW9uIHZhbHVlPVwicGFzc3dvcmRcIj5QYXNzd29yZDwvbWF0LW9wdGlvbj5cbiAgICAgICAgICAgIDxtYXQtb3B0aW9uIHZhbHVlPVwiZGF0ZVwiPkRhdGU8L21hdC1vcHRpb24+XG4gICAgICAgICAgICA8bWF0LW9wdGlvbiB2YWx1ZT1cInRlbFwiPlBob25lPC9tYXQtb3B0aW9uPlxuICAgICAgICA8L21hdC1zZWxlY3Q+XG4gICAgPC9tYXQtZm9ybS1maWVsZD5cbiAgICA8bmctY29udGFpbmVyIFtuZ1N3aXRjaF09XCJmaWVsZC50eXBlXCI+XG4gICAgICAgIDxkaXYgKm5nU3dpdGNoQ2FzZT1cIidjaGVja2JveCdcIiBjbGFzcz1cImZsZXgtYXV0byB3LTMwIGZpZWxkLXNpemVcIj5cbiAgICAgICAgICAgIDxtYXQtY2hlY2tib3ggY2xhc3M9XCJmb3JtLWZpZWxkXCIgWyhuZ01vZGVsKV09XCJmaWVsZC5leHBhbmRPbmJvYXJkaW5nXCIgW25nTW9kZWxPcHRpb25zXT1cIntzdGFuZGFsb25lOiB0cnVlfVwiPlxuICAgICAgICAgICAgICAgIENvY2jDqSBwYXJcbiAgICAgICAgICAgICAgICBkZWZhdWx0XG4gICAgICAgICAgICA8L21hdC1jaGVja2JveD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxtYXQtZm9ybS1maWVsZFxuICAgICAgICAgICAgKm5nU3dpdGNoQ2FzZT1cIlsnc2VsZWN0JywgJ3JhZGlvJywnY2hlY2tib3hfbXVsdGlwbGUnXS5pbmNsdWRlcyhmaWVsZC50eXBlKSA/IGZpZWxkLnR5cGUgOiAhZmllbGQudHlwZVwiXG4gICAgICAgICAgICBjbGFzcz1cImZsZXgtYXV0byB3LTMwIGZpZWxkLXNpemVcIiBhcHBlYXJhbmNlPVwib3V0bGluZVwiPlxuICAgICAgICAgICAgPG1hdC1sYWJlbD4gVmFsZXVyIHBhciBkZWZhdWx0IDwvbWF0LWxhYmVsPlxuICAgICAgICAgICAgPG1hdC1jaGlwLWxpc3QgI2NoaWxkTGlzdD1cImNka0Ryb3BMaXN0XCIgW2Nka0Ryb3BMaXN0RGF0YV09XCJmaWVsZC5kZWZhdWx0VmFsdWVcIiBjZGtEcm9wTGlzdFxuICAgICAgICAgICAgICAgIChjZGtEcm9wTGlzdERyb3BwZWQpPVwiZHJvcCgkZXZlbnQpXCIgI2NoaXBMaXN0IGFyaWEtbGFiZWw9XCJWaWRlbyBrZXl3b3JkczsgbGV0IGluZGV4PWluZGV4XCIgbXVsdGlwbGVcbiAgICAgICAgICAgICAgICBzZWxlY3RhYmxlPlxuICAgICAgICAgICAgICAgIDxtYXQtY2hpcCBzdHlsZT1cIm1pbi1oZWlnaHQ6IDI1cHg7XCIgKm5nRm9yPVwibGV0IG9wdGlvbiBvZiBmaWVsZC5kZWZhdWx0VmFsdWVcIlxuICAgICAgICAgICAgICAgICAgICBbc2VsZWN0ZWRdPVwib3B0aW9uLmNoZWNrZWRcIiBbdmFsdWVdPVwib3B0aW9uLnZhbHVlXCIgW3JlbW92YWJsZV09XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgICAgKGRibGNsaWNrKT1cInRvZ2dsZUNoaXAob3B0aW9uKVwiIChjbGljayk9XCJvbkVkaXRDaGlwKG9wdGlvbilcIiAocmVtb3ZlZCk9XCJyZW1vdmVLZXl3b3JkKG9wdGlvbiwgaSxqKVwiXG4gICAgICAgICAgICAgICAgICAgIGNka0RyYWc+XG4gICAgICAgICAgICAgICAgICAgIHt7b3B0aW9uLnZhbHVlfX1cbiAgICAgICAgICAgICAgICAgICAgPG1hdC1pY29uIG1hdENoaXBSZW1vdmU+Y2FuY2VsPC9tYXQtaWNvbj5cbiAgICAgICAgICAgICAgICA8L21hdC1jaGlwPlxuICAgICAgICAgICAgICAgIDxpbnB1dCAjY2hpcHNJbnB1dCBwbGFjZWhvbGRlcj1cImFkZC4uLlwiIFttYXRDaGlwSW5wdXRGb3JdPVwiY2hpcExpc3RcIiBbbWF0Q2hpcElucHV0QWRkT25CbHVyXT1cInRydWVcIlxuICAgICAgICAgICAgICAgICAgICAobWF0Q2hpcElucHV0VG9rZW5FbmQpPVwiYWRkS2V5d29yZEZyb21JbnB1dCgkZXZlbnQsIGksailcIlxuICAgICAgICAgICAgICAgICAgICBbbWF0Q2hpcElucHV0U2VwYXJhdG9yS2V5Q29kZXNdPVwic2VwYXJhdG9yS2V5c0NvZGVzXCIgKGtleXVwKT1cImtleVVwKCRldmVudCxpLGopXCJcbiAgICAgICAgICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJjdXJyZW50Q2hpcFwiPlxuICAgICAgICAgICAgPC9tYXQtY2hpcC1saXN0PlxuICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxuICAgICAgICA8bWF0LWZvcm0tZmllbGQgKm5nU3dpdGNoQ2FzZT1cIid0ZXh0YXJlYSdcIiBjbGFzcz1cImZvcm0tZmllbGQgZmllbGQtc2l6ZVwiIGFwcGVhcmFuY2U9XCJvdXRsaW5lXCI+XG4gICAgICAgICAgICA8bWF0LWxhYmVsPlZhbGV1ciBwYXIgZGVmYXVsdDwvbWF0LWxhYmVsPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbWF0SW5wdXQgW25nTW9kZWxPcHRpb25zXT1cIntzdGFuZGFsb25lOiB0cnVlfVwiIFsobmdNb2RlbCldPVwiZmllbGQuZGVmYXVsdFZhbHVlXCJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkRlc2NyaXB0aW9uLi4uXCI+XG4gICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XG5cbiAgICAgICAgPG1hdC1mb3JtLWZpZWxkICpuZ1N3aXRjaERlZmF1bHQgY2xhc3M9XCJmb3JtLWZpZWxkIGZpZWxkLXNpemVcIiBbc3R5bGUub3BhY2l0eV09XCJmaWVsZC50eXBlIT09J3RlbCcgPyAxIDowXCJcbiAgICAgICAgICAgIGFwcGVhcmFuY2U9XCJvdXRsaW5lXCI+XG4gICAgICAgICAgICA8bWF0LWxhYmVsPlZhbGV1ciBwYXIgZGVmYXVsdDwvbWF0LWxhYmVsPlxuICAgICAgICAgICAgPGlucHV0IFt0eXBlXT1cImZpZWxkLnR5cGVcIiBbZGlzYWJsZWRdPVwiZmllbGQudHlwZT09PSd0ZWwnXCIgbWF0SW5wdXQgW25nTW9kZWxPcHRpb25zXT1cIntzdGFuZGFsb25lOiB0cnVlfVwiXG4gICAgICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJmaWVsZC5kZWZhdWx0VmFsdWVcIiBwbGFjZWhvbGRlcj1cIlwiPlxuICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxuICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgPGRpdiBjbGFzcz1cImNoZWNrYm94LWNvbmRpdGlvblwiPlxuICAgICAgICA8bWF0LWNoZWNrYm94ICpuZ0lmPVwiZmllbGQuZWRpdGFibGVcIiBjbGFzcz1cImZvcm0tZmllbGRcIiBbKG5nTW9kZWwpXT1cImZpZWxkLmlzQ29uZGl0aW9uYWxcIlxuICAgICAgICAgICAgW25nTW9kZWxPcHRpb25zXT1cIntzdGFuZGFsb25lOiB0cnVlfVwiIChuZ01vZGVsQ2hhbmdlKT0nZ2V0Q29uZGl0aW9uVmFsdWVzKCknPlxuICAgICAgICAgICAgw6AgY29uZGl0aW9uXG4gICAgICAgIDwvbWF0LWNoZWNrYm94PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29uZGl0aW9uLWNvbnRhaW5lclwiICpuZ0lmPVwic2hvd0NvbmRpdGlvblwiPlxuICAgICAgICAgICAgPG1hdC1mb3JtLWZpZWxkIGNsYXNzPVwiZm9ybS1maWVsZCBmaWVsZC1zaXplIGZ1bGwtd2lkdGhcIiBhcHBlYXJhbmNlPVwib3V0bGluZVwiPlxuICAgICAgICAgICAgICAgIDxtYXQtbGFiZWw+Q2hhbXAgZGUgY29uZGl0aW9uIDo8L21hdC1sYWJlbD5cbiAgICAgICAgICAgICAgICA8bWF0LXNlbGVjdCBbKG5nTW9kZWwpXT1cImZpZWxkLmNvbmRpdGlvbkxvY2F0aW9uXCIgcmVxdWlyZWQgW25nTW9kZWxPcHRpb25zXT1cIntzdGFuZGFsb25lOiB0cnVlfVwiPlxuICAgICAgICAgICAgICAgICAgICA8bWF0LW9wdGlvbiAqbmdGb3I9XCJsZXQgY29uZCBvZiBjb25kaXRpb25EYXRhXCIgW3ZhbHVlXT1cImNvbmRcIj57e2NvbmQubGFiZWx9fTwvbWF0LW9wdGlvbj5cbiAgICAgICAgICAgICAgICA8L21hdC1zZWxlY3Q+XG4gICAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxuICAgICAgICAgICAgPG1hdC1yYWRpby1ncm91cCBhcmlhLWxhYmVsbGVkYnk9XCJleGFtcGxlLXJhZGlvLWdyb3VwLWxhYmVsXCIgY2xhc3M9XCJleGFtcGxlLXJhZGlvLWdyb3VwXCJcbiAgICAgICAgICAgICAgICBbKG5nTW9kZWwpXT1cImZpZWxkLmNvbmRpdGlvblZhbHVlXCI+XG4gICAgICAgICAgICAgICAgPG1hdC1yYWRpby1idXR0b24gY2xhc3M9XCJleGFtcGxlLXJhZGlvLWJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICpuZ0Zvcj1cImxldCBpdGVtIG9mIGZpZWxkLmNvbmRpdGlvbkxvY2F0aW9uLnBvc3NpYmxlVmFsdWVzXCIgW3ZhbHVlXT1cIml0ZW0udmFsdWVcIj5cbiAgICAgICAgICAgICAgICAgICAge3tpdGVtLnZhbHVlfX1cbiAgICAgICAgICAgICAgICA8L21hdC1yYWRpby1idXR0b24+XG4gICAgICAgICAgICA8L21hdC1yYWRpby1ncm91cD5cbiAgICAgICAgICAgIDxidXR0b24gbWF0LWJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIiAoY2xpY2spPSdvblNob3dDb25kaXRpb24oJGV2ZW50KSc+XG4gICAgICAgICAgICAgICAgPG1hdC1pY29uPmNsb3NlPC9tYXQtaWNvbj5GZXJtZXJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuICAgIDxtYXQtaWNvbiAoY2xpY2spPSdvblNob3dDb25kaXRpb24oKScgY2xhc3M9XCJjb25kaXRpb24taGVscFwiICpuZ0lmPVwiZmllbGQuaXNDb25kaXRpb25hbFwiXG4gICAgICAgIG1hdFRvb2x0aXA9XCJQYXJhbcOodHJlciBsYSBjb25kaXRpb24gaWNpICFcIj5oZWxwXG4gICAgPC9tYXQtaWNvbj5cbiAgICA8bWF0LWNoZWNrYm94IGNsYXNzPVwiZm9ybS1maWVsZFwiIFsobmdNb2RlbCldPVwiZmllbGQuaXNNYW5kYXRvcnlcIiBbbmdNb2RlbE9wdGlvbnNdPVwie3N0YW5kYWxvbmU6IHRydWV9XCI+XG4gICAgICAgIG9ibGlnYXRvaXJlXG4gICAgPC9tYXQtY2hlY2tib3g+XG4gICAgPGJ1dHRvbiBjbGFzcz1cInRyYW5zcGFyZW50LWJ1dHRvblwiIFtkaXNhYmxlZF09XCJmaWVsZC5zdWJMZXZlbD4yIHx8ICFmaWVsZC5lZGl0YWJsZVwiXG4gICAgICAgIFtzdHlsZS5vcGFjaXR5XT1cIihmaWVsZC5zdWJMZXZlbD4yIHx8ICFmaWVsZC5lZGl0YWJsZSkgPyAwIDoxXCIgbWF0LW1pbmktZmFiIGNvbG9yPVwic3VjY2Vzc1wiXG4gICAgICAgIChjbGljayk9J2FkZE5ld1N1YkxldmVsRmllbGQoJGV2ZW50KScgbWF0VG9vbHRpcD1cIkFqb3V0ZXIgdW5lIHNvdXMtY2F0w6lnb3JpZVwiPlxuICAgICAgICA8bWF0LWljb24+ZGV2aWNlX2h1YjwvbWF0LWljb24+XG4gICAgPC9idXR0b24+XG5cbiAgICA8YnV0dG9uIGNsYXNzPVwiZXhwYW5kLWJ1dHRvblwiIFtkaXNhYmxlZF09XCIhKGZpZWxkLmZvcm1zICYmIGZpZWxkLmZvcm1zLmxlbmd0aD4wKVwiXG4gICAgICAgIFtzdHlsZS5vcGFjaXR5XT1cImZpZWxkLmZvcm1zICYmIGZpZWxkLmZvcm1zLmxlbmd0aD4wID8gMSA6MFwiIG1hdC1taW5pLWZhYiBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAoY2xpY2spPVwiZXhwZW5kTW9yZSgkZXZlbnQsZmllbGQpXCI+XG4gICAgICAgIDxtYXQtaWNvbiAqbmdJZj1cIiFmaWVsZC5leHBhbmRNb3JlXCI+ZXhwYW5kX2xlc3M8L21hdC1pY29uPlxuICAgICAgICA8bWF0LWljb24gKm5nSWY9XCJmaWVsZC5leHBhbmRNb3JlXCI+ZXhwYW5kX21vcmU8L21hdC1pY29uPlxuICAgIDwvYnV0dG9uPlxuPC9kaXY+XG5cbjwhLS0gPGRpdiBjbGFzcz1cImFkZC1idXR0b24tY29udGFpbmVyXCIgKm5nSWY9XCJsZW5ndGgtMT09PWpcIj5cbiAgICA8YnV0dG9uIHN0eWxlPVwibWFyZ2luOjEwcHggYXV0b1wiIFtkaXNhYmxlZF09XCJsZW5ndGgtMSE9PWpcIiBbc3R5bGUub3BhY2l0eV09XCJsZW5ndGgtMT09PWogPyAxIDowXCIgbWF0LXJhaXNlZC1idXR0b25cbiAgICAgICAgY29sb3I9XCJwcmltYXJ5XCIgKGNsaWNrKT0nYWRkTmV3RmllbGQoJGV2ZW50LGkpJz5cbiAgICAgICAgPG1hdC1pY29uPmFkZF9ib3g8L21hdC1pY29uPlxuICAgICAgICA8c3Bhbj5Bam91dGVyIHVuIGNoYW1wPC9zcGFuPlxuICAgIDwvYnV0dG9uPlxuPC9kaXY+IC0tPlxuXG48bmctY29udGVudCBzZWxlY3Q9XCIuY2hpbGRcIj48L25nLWNvbnRlbnQ+Il19