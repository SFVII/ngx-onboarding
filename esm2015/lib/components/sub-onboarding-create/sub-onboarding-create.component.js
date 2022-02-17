import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ENTER, COMMA, SEMICOLON } from '@angular/cdk/keycodes';
import { FormControl } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/material/checkbox";
import * as i3 from "@angular/forms";
import * as i4 from "@angular/material/select";
import * as i5 from "@angular/material/core";
import * as i6 from "@angular/material/radio";
import * as i7 from "@angular/material/form-field";
import * as i8 from "@angular/material/input";
function SubOnboardingCreateComponent_div_2_div_1_mat_select_3_mat_option_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 10);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const select_r375 = ctx.$implicit;
    i0.ɵɵproperty("value", select_r375.value);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", select_r375.value, "");
} }
const _c0 = function () { return { standalone: true }; };
function SubOnboardingCreateComponent_div_2_div_1_mat_select_3_Template(rf, ctx) { if (rf & 1) {
    const _r377 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-select", 8);
    i0.ɵɵlistener("ngModelChange", function SubOnboardingCreateComponent_div_2_div_1_mat_select_3_Template_mat_select_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r377); const ctx_r376 = i0.ɵɵnextContext(3); return ctx_r376.field.selector.value = $event; });
    i0.ɵɵtemplate(1, SubOnboardingCreateComponent_div_2_div_1_mat_select_3_mat_option_1_Template, 2, 2, "mat-option", 9);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r373 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("ngModel", ctx_r373.field.selector.value)("ngModelOptions", i0.ɵɵpureFunction0(3, _c0));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r373.field.selector.defaultValue);
} }
const _c1 = function () { return { "display": "inine-block" }; };
function SubOnboardingCreateComponent_div_2_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r379 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 5);
    i0.ɵɵelementStart(1, "mat-checkbox", 6);
    i0.ɵɵlistener("ngModelChange", function SubOnboardingCreateComponent_div_2_div_1_Template_mat_checkbox_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r379); const ctx_r378 = i0.ɵɵnextContext(2); return ctx_r378.field.value = $event; });
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, SubOnboardingCreateComponent_div_2_div_1_mat_select_3_Template, 2, 4, "mat-select", 7);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r372 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵclassMap(ctx_r372.checkSubForm(ctx_r372.field) ? "checkbox-title-active" : "");
    i0.ɵɵproperty("ngModel", ctx_r372.field.value)("required", ctx_r372.field.isMandatory)("ngModelOptions", i0.ɵɵpureFunction0(8, _c0))("ngStyle", ctx_r372.field.selector && i0.ɵɵpureFunction0(9, _c1));
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r372.field.label, " ");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r372.field.selector);
} }
function SubOnboardingCreateComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 5);
    i0.ɵɵtemplate(1, SubOnboardingCreateComponent_div_2_div_1_Template, 4, 10, "div", 2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", "checkbox");
} }
function SubOnboardingCreateComponent_div_3_mat_checkbox_4_Template(rf, ctx) { if (rf & 1) {
    const _r383 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-checkbox", 13);
    i0.ɵɵlistener("ngModelChange", function SubOnboardingCreateComponent_div_3_mat_checkbox_4_Template_mat_checkbox_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r383); const opt_r381 = ctx.$implicit; return opt_r381.checked = $event; });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const opt_r381 = ctx.$implicit;
    const ctx_r380 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("checked", opt_r381.checked)("ngModel", opt_r381.checked)("required", ctx_r380.field.isMandatory)("ngModelOptions", i0.ɵɵpureFunction0(5, _c0));
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", opt_r381.value, " ");
} }
function SubOnboardingCreateComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 5);
    i0.ɵɵelementStart(1, "label");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 11);
    i0.ɵɵtemplate(4, SubOnboardingCreateComponent_div_3_mat_checkbox_4_Template, 2, 6, "mat-checkbox", 12);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r367 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r367.field.label);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r367.field.defaultValue);
} }
function SubOnboardingCreateComponent_div_4_mat_radio_button_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-radio-button", 10);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const opt_r386 = ctx.$implicit;
    i0.ɵɵproperty("value", opt_r386.value);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1("", opt_r386.value, " ");
} }
function SubOnboardingCreateComponent_div_4_mat_form_field_5_Template(rf, ctx) { if (rf & 1) {
    const _r388 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-form-field", 17);
    i0.ɵɵelementStart(1, "mat-label");
    i0.ɵɵtext(2, "Autre option");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "input", 18);
    i0.ɵɵlistener("ngModelChange", function SubOnboardingCreateComponent_div_4_mat_form_field_5_Template_input_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r388); const ctx_r387 = i0.ɵɵnextContext(2); return ctx_r387.field.otherValue = $event; });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r385 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("required", ctx_r385.field.isMandatory)("ngModelOptions", i0.ɵɵpureFunction0(3, _c0))("ngModel", ctx_r385.field.otherValue);
} }
function SubOnboardingCreateComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r390 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 5);
    i0.ɵɵelementStart(1, "label", 14);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "mat-radio-group", 15);
    i0.ɵɵlistener("ngModelChange", function SubOnboardingCreateComponent_div_4_Template_mat_radio_group_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r390); const ctx_r389 = i0.ɵɵnextContext(); return ctx_r389.field.value = $event; });
    i0.ɵɵtemplate(4, SubOnboardingCreateComponent_div_4_mat_radio_button_4_Template, 2, 2, "mat-radio-button", 9);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(5, SubOnboardingCreateComponent_div_4_mat_form_field_5_Template, 4, 4, "mat-form-field", 16);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r368 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r368.field.label, " ");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", ctx_r368.field.value)("required", ctx_r368.field.isMandatory);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r368.field.defaultValue);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", "autre" === ctx_r368.formatOther(ctx_r368.field.value));
} }
function SubOnboardingCreateComponent_div_5_mat_option_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 10);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const opt_r393 = ctx.$implicit;
    i0.ɵɵproperty("value", opt_r393.value);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(opt_r393.value);
} }
function SubOnboardingCreateComponent_div_5_mat_form_field_6_Template(rf, ctx) { if (rf & 1) {
    const _r395 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-form-field", 17);
    i0.ɵɵelementStart(1, "mat-label");
    i0.ɵɵtext(2, "Autre option");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "input", 18);
    i0.ɵɵlistener("ngModelChange", function SubOnboardingCreateComponent_div_5_mat_form_field_6_Template_input_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r395); const ctx_r394 = i0.ɵɵnextContext(2); return ctx_r394.field.otherValue = $event; });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r392 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("required", ctx_r392.field.isMandatory)("ngModelOptions", i0.ɵɵpureFunction0(3, _c0))("ngModel", ctx_r392.field.otherValue);
} }
function SubOnboardingCreateComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r397 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 5);
    i0.ɵɵelementStart(1, "mat-form-field", 19);
    i0.ɵɵelementStart(2, "mat-label");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "mat-select", 20);
    i0.ɵɵlistener("ngModelChange", function SubOnboardingCreateComponent_div_5_Template_mat_select_ngModelChange_4_listener($event) { i0.ɵɵrestoreView(_r397); const ctx_r396 = i0.ɵɵnextContext(); return ctx_r396.field.value = $event; });
    i0.ɵɵtemplate(5, SubOnboardingCreateComponent_div_5_mat_option_5_Template, 2, 2, "mat-option", 9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(6, SubOnboardingCreateComponent_div_5_mat_form_field_6_Template, 4, 4, "mat-form-field", 16);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r369 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", ctx_r369.field.label, " ");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", ctx_r369.field.value)("ngModelOptions", i0.ɵɵpureFunction0(6, _c0))("required", ctx_r369.field.isMandatory);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r369.field.defaultValue);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", "autre" === ctx_r369.formatOther(ctx_r369.field.value));
} }
function SubOnboardingCreateComponent_mat_form_field_6_Template(rf, ctx) { if (rf & 1) {
    const _r399 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-form-field", 21);
    i0.ɵɵelementStart(1, "mat-label");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "textarea", 22);
    i0.ɵɵlistener("ngModelChange", function SubOnboardingCreateComponent_mat_form_field_6_Template_textarea_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r399); const ctx_r398 = i0.ɵɵnextContext(); return ctx_r398.field.value = $event; });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r370 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r370.field.label);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("required", ctx_r370.field.isMandatory)("ngModelOptions", i0.ɵɵpureFunction0(4, _c0))("ngModel", ctx_r370.field.value);
} }
function SubOnboardingCreateComponent_mat_form_field_7_Template(rf, ctx) { if (rf & 1) {
    const _r401 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-form-field", 23);
    i0.ɵɵelementStart(1, "mat-label");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "input", 24);
    i0.ɵɵlistener("ngModelChange", function SubOnboardingCreateComponent_mat_form_field_7_Template_input_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r401); const ctx_r400 = i0.ɵɵnextContext(); return ctx_r400.field.value = $event; });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r371 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r371.field.label);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("type", ctx_r371.field.type)("required", ctx_r371.field.isMandatory)("ngModelOptions", i0.ɵɵpureFunction0(5, _c0))("ngModel", ctx_r371.field.value);
} }
const _c2 = [[["", 8, "child"]]];
const _c3 = [".child"];
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
        this.chipControl = new FormControl(new Set());
        this.separatorKeysCodes = [ENTER, COMMA, SEMICOLON];
        this.currentChip = "";
        this.prevValue = "";
        this.toggleChip = (chip) => {
            this.onCheckedChip.emit(chip);
            // const addChip = () => { this.chips.add(chip); };
            // const removeChip = () => { this.chips.delete(chip); };
            // this.chips.has(chip) ? removeChip() : addChip();
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
        if (other) {
            return other.toLocaleLowerCase();
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
}
SubOnboardingCreateComponent.ɵfac = function SubOnboardingCreateComponent_Factory(t) { return new (t || SubOnboardingCreateComponent)(); };
SubOnboardingCreateComponent.ɵcmp = i0.ɵɵdefineComponent({ type: SubOnboardingCreateComponent, selectors: [["lib-sub-create-onboarding"]], inputs: { field: "field", length: "length", i: "i", j: "j" }, outputs: { onAddKeywordFromInput: "onAddKeywordFromInput", onKeyPress: "onKeyPress", onDrop: "onDrop", onAddNewField: "onAddNewField", onRemoveField: "onRemoveField", onChangeType: "onChangeType", onRemoveKeyword: "onRemoveKeyword", onAddNewSubLevelField: "onAddNewSubLevelField", onExpendMore: "onExpendMore", onChangeLabel: "onChangeLabel", onCheckedChip: "onCheckedChip" }, ngContentSelectors: _c3, decls: 9, vars: 6, consts: [[1, "field-item"], [3, "ngSwitch"], ["class", "flex-auto w-30 field-size", 4, "ngSwitchCase"], ["class", "form-field full-width", "appearance", "outline", 4, "ngSwitchCase"], ["class", "form-field field-size", "appearance", "outline", 4, "ngSwitchDefault"], [1, "flex-auto", "w-30", "field-size"], [1, "form-field", 3, "ngModel", "required", "ngModelOptions", "ngStyle", "ngModelChange"], ["placeholder", "Company", "required", "", "style", "display: inline-block; width: 50%;", 3, "ngModel", "ngModelOptions", "ngModelChange", 4, "ngIf"], ["placeholder", "Company", "required", "", 2, "display", "inline-block", "width", "50%", 3, "ngModel", "ngModelOptions", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], [2, "margin-top", "20px"], ["class", "form-field", "style", "display: block; margin-bottom: 5px; margin-top: 10px", 3, "checked", "ngModel", "required", "ngModelOptions", "ngModelChange", 4, "ngFor", "ngForOf"], [1, "form-field", 2, "display", "block", "margin-bottom", "5px", "margin-top", "10px", 3, "checked", "ngModel", "required", "ngModelOptions", "ngModelChange"], [2, "display", "block"], ["aria-label", "Select an option", 1, "form-field", "radio-group", "field-size", 3, "ngModel", "required", "ngModelChange"], ["class", "form-field field-size other-option", "appearance", "outline", 4, "ngIf"], ["appearance", "outline", 1, "form-field", "field-size", "other-option"], ["type", "text", "matInput", "", "placeholder", "", 3, "required", "ngModelOptions", "ngModel", "ngModelChange"], ["appearance", "outline", 1, "flex-auto", "w-30", "field-size"], [3, "ngModel", "ngModelOptions", "required", "ngModelChange"], ["appearance", "outline", 1, "form-field", "full-width"], ["type", "text", "rows", "5", "matInput", "", "placeholder", "Description...", 3, "required", "ngModelOptions", "ngModel", "ngModelChange"], ["appearance", "outline", 1, "form-field", "field-size"], ["matInput", "", "placeholder", "", 3, "type", "required", "ngModelOptions", "ngModel", "ngModelChange"]], template: function SubOnboardingCreateComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef(_c2);
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementContainerStart(1, 1);
        i0.ɵɵtemplate(2, SubOnboardingCreateComponent_div_2_Template, 2, 1, "div", 2);
        i0.ɵɵtemplate(3, SubOnboardingCreateComponent_div_3_Template, 5, 2, "div", 2);
        i0.ɵɵtemplate(4, SubOnboardingCreateComponent_div_4_Template, 6, 5, "div", 2);
        i0.ɵɵtemplate(5, SubOnboardingCreateComponent_div_5_Template, 7, 7, "div", 2);
        i0.ɵɵtemplate(6, SubOnboardingCreateComponent_mat_form_field_6_Template, 4, 5, "mat-form-field", 3);
        i0.ɵɵtemplate(7, SubOnboardingCreateComponent_mat_form_field_7_Template, 4, 6, "mat-form-field", 4);
        i0.ɵɵelementContainerEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵprojection(8);
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
    } }, directives: [i1.NgSwitch, i1.NgSwitchCase, i1.NgSwitchDefault, i2.MatCheckbox, i2.MatCheckboxRequiredValidator, i3.NgControlStatus, i3.NgModel, i3.RequiredValidator, i1.NgStyle, i1.NgIf, i4.MatSelect, i1.NgForOf, i5.MatOption, i6.MatRadioGroup, i6.MatRadioButton, i7.MatFormField, i7.MatLabel, i8.MatInput, i3.DefaultValueAccessor], styles: [".container[_ngcontent-%COMP%]{max-width:98%;margin:50px auto auto;padding-bottom:50px}.container[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:space-between}.input-category-name[_ngcontent-%COMP%]{font-size:15px;font-weight:500}.full-width[_ngcontent-%COMP%]{width:100%}.field-item[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;width:100%;flex-wrap:wrap;min-width:250px;position:relative}.field-item[_ngcontent-%COMP%]   .button-action[_ngcontent-%COMP%]{background-color:#6fe8d7;height:100%;margin:auto 15px auto auto;display:flex}.field-item[_ngcontent-%COMP%]   .button-action[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{box-shadow:none;background-color:transparent;color:#fff}.field-action[_ngcontent-%COMP%]{width:10%}.field-size[_ngcontent-%COMP%]   mat-checkbox[_ngcontent-%COMP%]{margin:20px}hr[_ngcontent-%COMP%]{margin:50px 0}  .mat-form-field-appearance-fill .mat-form-field-flex{background-color:#fff}.category-action[_ngcontent-%COMP%]{display:flex;width:100%}.delete-field[_ngcontent-%COMP%]{margin:auto 2%}.radio-group[_ngcontent-%COMP%]   .mat-radio-button[_ngcontent-%COMP%]{margin-right:10px}.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary[_ngcontent-%COMP%]{background-color:#3f51b5;color:#fff;min-height:20px;font-size:10px}.move-icons[_ngcontent-%COMP%]{cursor:move}.category-item[_ngcontent-%COMP%]{display:flex;align-items:baseline;width:100%;border:1px solid #dce4e9;border-radius:8px}  .readonly.mat-form-field-appearance-outline .mat-form-field-outline{color:transparent!important}.field-content[_ngcontent-%COMP%]{width:100%}.cdk-drag-preview[_ngcontent-%COMP%]{box-sizing:border-box;border-radius:4px;box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.cdk-drag-placeholder[_ngcontent-%COMP%]{opacity:0}.cdk-drag-animating[_ngcontent-%COMP%], .example-list.cdk-drop-list-dragging[_ngcontent-%COMP%]   .category-item[_ngcontent-%COMP%]:not(.cdk-drag-placeholder){transition:transform 250ms cubic-bezier(0,0,.2,1)}.add-button-container[_ngcontent-%COMP%]{background:no-repeat padding-box #fff;border:1px dashed #dce4e9;border-radius:8px;margin-top:10px;padding:10px;display:flex;justify-content:center;align-items:center;width:98%;margin-left:0;margin-bottom:22px}.add-button-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{display:flex;align-items:center;background-color:transparent;border:none;cursor:pointer;font:17px/26px Nexa Text;letter-spacing:0;color:#c2c8d5;box-shadow:none}.expand-button[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%]{font-size:48px;margin-top:-20px;margin-right:15px}.transparent-button[_ngcontent-%COMP%]{background-color:transparent!important;box-shadow:none!important;width:40px!important;padding:0!important;margin:0!important;min-width:auto!important}.expand-button[_ngcontent-%COMP%]{color:#5a607f!important;background-color:transparent!important;box-shadow:none!important}.checkbox-title-active[_ngcontent-%COMP%]{font-weight:700}.other-option[_ngcontent-%COMP%]{margin-left:10px}.flex-auto[_ngcontent-%COMP%]{width:100%}.flex-auto[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{width:80%}"] });
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
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3ViLW9uYm9hcmRpbmctY3JlYXRlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL29uYm9hcmRpbmcvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9zdWItb25ib2FyZGluZy1jcmVhdGUvc3ViLW9uYm9hcmRpbmctY3JlYXRlLmNvbXBvbmVudC50cyIsImxpYi9jb21wb25lbnRzL3N1Yi1vbmJvYXJkaW5nLWNyZWF0ZS9zdWItb25ib2FyZGluZy1jcmVhdGUuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvRSxPQUFPLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7Ozs7Ozs7O0lDVXpCLHNDQUNJO0lBQUEsWUFBZ0I7SUFBQSxpQkFBYTs7O0lBRDhCLHlDQUFzQjtJQUNqRixlQUFnQjtJQUFoQixpREFBZ0I7Ozs7O0lBRnhCLHFDQUNJO0lBRDhCLHFRQUFrQztJQUNoRSxvSEFDSTtJQUNSLGlCQUFhOzs7SUFIcUIsdURBQWtDLDhDQUFBO0lBQ3BELGVBQWtEO0lBQWxELDhEQUFrRDs7Ozs7SUFUdEUsOEJBQ0k7SUFBQSx1Q0FHSTtJQUZBLGlQQUF5QjtJQUV6QixZQUNKO0lBQUEsaUJBQWU7SUFHZix1R0FDSTtJQUdSLGlCQUFNOzs7SUFYK0IsZUFBMEQ7SUFBMUQsbUZBQTBEO0lBQ3ZGLDhDQUF5Qix3Q0FBQSw4Q0FBQSxrRUFBQTtJQUV6QixlQUNKO0lBREkscURBQ0o7SUFHb0gsZUFBc0I7SUFBdEIsOENBQXNCOzs7SUFUbEosOEJBQ0k7SUFBQSxvRkFDSTtJQVlSLGlCQUFNOztJQWJHLGVBQTBCO0lBQTFCLHlDQUEwQjs7OztJQWlCM0Isd0NBRUk7SUFE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dUNBQXdCO1FBZWIsZUFBMEI7UUFBMUIseUNBQTBCOztrREQ5Q3JDLDRCQUE0QjtjQUx4QyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLDJCQUEyQjtnQkFDckMsV0FBVyxFQUFFLHdDQUF3QztnQkFDckQsU0FBUyxFQUFFLENBQUMsd0NBQXdDLENBQUM7YUFDdEQ7O2tCQUVFLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLE1BQU07O2tCQUNOLE1BQU07O2tCQUNOLE1BQU07O2tCQUNOLE1BQU07O2tCQUNOLE1BQU07O2tCQUNOLE1BQU07O2tCQUNOLE1BQU07O2tCQUNOLE1BQU07O2tCQUNOLE1BQU07O2tCQUNOLE1BQU07O2tCQUNOLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBFTlRFUiwgQ09NTUEsIFNFTUlDT0xPTiB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9rZXljb2Rlcyc7XG5pbXBvcnQgeyBGb3JtQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLXN1Yi1jcmVhdGUtb25ib2FyZGluZycsXG4gIHRlbXBsYXRlVXJsOiAnLi9zdWItb25ib2FyZGluZy1jcmVhdGUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zdWItb25ib2FyZGluZy1jcmVhdGUuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBTdWJPbmJvYXJkaW5nQ3JlYXRlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgZmllbGQ6IGFueVxuICBASW5wdXQoKSBsZW5ndGg6IGFueVxuICBASW5wdXQoKSBpOiBhbnlcbiAgQElucHV0KCkgajogYW55XG4gIEBPdXRwdXQoKSBvbkFkZEtleXdvcmRGcm9tSW5wdXQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKVxuICBAT3V0cHV0KCkgb25LZXlQcmVzcyA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpXG4gIEBPdXRwdXQoKSBvbkRyb3AgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKVxuICBAT3V0cHV0KCkgb25BZGROZXdGaWVsZCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpXG4gIEBPdXRwdXQoKSBvblJlbW92ZUZpZWxkID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KClcbiAgQE91dHB1dCgpIG9uQ2hhbmdlVHlwZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpXG4gIEBPdXRwdXQoKSBvblJlbW92ZUtleXdvcmQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKVxuICBAT3V0cHV0KCkgb25BZGROZXdTdWJMZXZlbEZpZWxkID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KClcbiAgQE91dHB1dCgpIG9uRXhwZW5kTW9yZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpXG4gIEBPdXRwdXQoKSBvbkNoYW5nZUxhYmVsID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KClcbiAgQE91dHB1dCgpIG9uQ2hlY2tlZENoaXAgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKVxuXG4gIGNoaXBDb250cm9sID0gbmV3IEZvcm1Db250cm9sKG5ldyBTZXQoKSk7XG5cbiAgc2VwYXJhdG9yS2V5c0NvZGVzID0gW0VOVEVSLCBDT01NQSwgU0VNSUNPTE9OXTtcbiAgY3VycmVudENoaXA9XCJcIlxuICBwcmV2VmFsdWU9XCJcIlxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICB9XG5cbiAgZHJvcChldmVudCkge1xuICAgIHRoaXMub25Ecm9wLmVtaXQoZXZlbnQpXG4gIH1cblxuICBhZGRLZXl3b3JkRnJvbUlucHV0KGV2ZW50LCBpLCBqKSB7XG4gICAgdGhpcy5vbkFkZEtleXdvcmRGcm9tSW5wdXQuZW1pdCh7IGV2ZW50LHByZXY6dGhpcy5wcmV2VmFsdWUsIGksIGogfSk7XG4gIH1cblxuICBrZXlVcChldmVudCwgaSwgaikge1xuICAgIHRoaXMub25LZXlQcmVzcy5lbWl0KHsgZXZlbnQsIGksIGogfSlcbiAgfVxuXG4gIGFkZE5ld0ZpZWxkKGV2ZW50LCBpKSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIHRoaXMub25BZGROZXdGaWVsZC5lbWl0KHsgZXZlbnQsIGkgfSlcbiAgfVxuXG4gIHJlbW92ZUZpZWxkKGV2ZW50LCBpLCBqKSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIHRoaXMub25SZW1vdmVGaWVsZC5lbWl0KHsgaSwgaiB9KVxuICB9XG5cbiAgY2hhbmdlVHlwZSh0eXBlLCBpLCBqKSB7XG4gICAgdGhpcy5vbkNoYW5nZVR5cGUuZW1pdCh7IHR5cGUsIGksIGogfSlcbiAgfVxuXG4gIHJlbW92ZUtleXdvcmQoZXZlbnQsIGksIGopIHtcbiAgICB0aGlzLm9uUmVtb3ZlS2V5d29yZC5lbWl0KHsgZXZlbnQsIGksIGogfSlcbiAgfVxuICBhZGROZXdTdWJMZXZlbEZpZWxkKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICB0aGlzLm9uQWRkTmV3U3ViTGV2ZWxGaWVsZC5lbWl0KHRydWUpXG4gIH1cbiAgZXhwZW5kTW9yZShlLCBmaWVsZCkge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIHRoaXMub25FeHBlbmRNb3JlLmVtaXQoe2V4cGFuZDp0cnVlLCBmaWVsZH0pXG4gIH1cblxuICBpbmdvcmVEZWZhdWx0QWN0aW9uKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgfVxuXG4gIGNoYW5nZUxhYmVsKGxhYmVsLGtleSl7XG4gICAgdGhpcy5vbkNoYW5nZUxhYmVsLmVtaXQoe2xhYmVsLCBrZXl9KVxuICB9XG5cbiAgdG9nZ2xlQ2hpcCA9IChjaGlwOiBhbnkpID0+IHtcbiAgICB0aGlzLm9uQ2hlY2tlZENoaXAuZW1pdChjaGlwKVxuICAgIC8vIGNvbnN0IGFkZENoaXAgPSAoKSA9PiB7IHRoaXMuY2hpcHMuYWRkKGNoaXApOyB9O1xuICAgIC8vIGNvbnN0IHJlbW92ZUNoaXAgPSAoKSA9PiB7IHRoaXMuY2hpcHMuZGVsZXRlKGNoaXApOyB9O1xuICAgIC8vIHRoaXMuY2hpcHMuaGFzKGNoaXApID8gcmVtb3ZlQ2hpcCgpIDogYWRkQ2hpcCgpO1xuXG4gIH1cblxuICBvbkVkaXRDaGlwKGNoaXApe1xuICAgIGlmKGNoaXAudmFsdWU9PT10aGlzLmN1cnJlbnRDaGlwKXtcbiAgICAgIHRoaXMuY3VycmVudENoaXA9XCJcIlxuICAgICAgdGhpcy5wcmV2VmFsdWU9XCJcIlxuICAgIH1lbHNle1xuICAgICAgdGhpcy5jdXJyZW50Q2hpcD1jaGlwLnZhbHVlO1xuICAgICAgdGhpcy5wcmV2VmFsdWU9Y2hpcC52YWx1ZVxuICAgIH1cbiAgfVxuXG4gIGdldCBjaGlwcygpIHsgcmV0dXJuIHRoaXMuY2hpcENvbnRyb2wudmFsdWU7IH1cblxuICBmb3JtYXRPdGhlcihvdGhlcjpzdHJpbmcpe1xuICAgaWYob3RoZXIpe1xuICAgIHJldHVybiBvdGhlci50b0xvY2FsZUxvd2VyQ2FzZSgpXG4gICB9XG4gICByZXR1cm4gJydcbiAgfVxuXG5cbiAgY2hlY2tTdWJGb3JtKGZvcm1zKXtcbiAgICBsZXQgaGFzU3ViRm9ybT1mYWxzZTtcbiAgICBpZihmb3Jtcy5mb3JtcyAmJiBmb3Jtcy5mb3Jtcy5sZW5ndGgpe1xuICAgICAgaGFzU3ViRm9ybT10cnVlO1xuICAgIH0gICAgXG4gICAgcmV0dXJuIGhhc1N1YkZvcm1cbiAgfVxuXG59XG4iLCI8ZGl2IGNsYXNzPVwiZmllbGQtaXRlbVwiPlxuICAgIDxuZy1jb250YWluZXIgW25nU3dpdGNoXT1cImZpZWxkLnR5cGVcIj5cbiAgICAgICAgPGRpdiAqbmdTd2l0Y2hDYXNlPVwiJ2NoZWNrYm94J1wiIGNsYXNzPVwiZmxleC1hdXRvIHctMzAgZmllbGQtc2l6ZVwiPlxuICAgICAgICAgICAgPGRpdiAqbmdTd2l0Y2hDYXNlPVwiJ2NoZWNrYm94J1wiIGNsYXNzPVwiZmxleC1hdXRvIHctMzAgZmllbGQtc2l6ZVwiPlxuICAgICAgICAgICAgICAgIDxtYXQtY2hlY2tib3ggY2xhc3M9XCJmb3JtLWZpZWxkXCIgW2NsYXNzXT1cImNoZWNrU3ViRm9ybShmaWVsZCkgPyAnY2hlY2tib3gtdGl0bGUtYWN0aXZlJzonJ1wiXG4gICAgICAgICAgICAgICAgICAgIFsobmdNb2RlbCldPVwiZmllbGQudmFsdWVcIiBbcmVxdWlyZWRdPVwiZmllbGQuaXNNYW5kYXRvcnlcIiBbbmdNb2RlbE9wdGlvbnNdPVwie3N0YW5kYWxvbmU6IHRydWV9XCJcbiAgICAgICAgICAgICAgICAgICAgW25nU3R5bGVdPVwiZmllbGQuc2VsZWN0b3IgJiYgeydkaXNwbGF5JzogJ2luaW5lLWJsb2NrJ31cIj5cbiAgICAgICAgICAgICAgICAgICAge3tmaWVsZC5sYWJlbH19XG4gICAgICAgICAgICAgICAgPC9tYXQtY2hlY2tib3g+XG5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8bWF0LXNlbGVjdCBwbGFjZWhvbGRlcj1cIkNvbXBhbnlcIiBbKG5nTW9kZWwpXT1cImZpZWxkLnNlbGVjdG9yLnZhbHVlXCIgW25nTW9kZWxPcHRpb25zXT1cIntzdGFuZGFsb25lOiB0cnVlfVwiIHJlcXVpcmVkICpuZ0lmPVwiZmllbGQuc2VsZWN0b3JcIiBzdHlsZT1cImRpc3BsYXk6IGlubGluZS1ibG9jazsgd2lkdGg6IDUwJTtcIj5cbiAgICAgICAgICAgICAgICAgICAgPG1hdC1vcHRpb24gKm5nRm9yPVwibGV0IHNlbGVjdCBvZiBmaWVsZC5zZWxlY3Rvci5kZWZhdWx0VmFsdWVcIiBbdmFsdWVdPVwic2VsZWN0LnZhbHVlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7e3NlbGVjdC52YWx1ZX19PC9tYXQtb3B0aW9uPlxuICAgICAgICAgICAgICAgIDwvbWF0LXNlbGVjdD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiAqbmdTd2l0Y2hDYXNlPVwiJ2NoZWNrYm94X211bHRpcGxlJ1wiIGNsYXNzPVwiZmxleC1hdXRvIHctMzAgZmllbGQtc2l6ZVwiPlxuICAgICAgICAgICAgPGxhYmVsPnt7ZmllbGQubGFiZWx9fTwvbGFiZWw+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPVwibWFyZ2luLXRvcDogMjBweDtcIj5cbiAgICAgICAgICAgICAgICA8bWF0LWNoZWNrYm94IGNsYXNzPVwiZm9ybS1maWVsZFwiIHN0eWxlPVwiZGlzcGxheTogYmxvY2s7IG1hcmdpbi1ib3R0b206IDVweDsgbWFyZ2luLXRvcDogMTBweFwiICpuZ0Zvcj1cImxldCBvcHQgb2YgZmllbGQuZGVmYXVsdFZhbHVlXCIgW2NoZWNrZWRdPVwib3B0LmNoZWNrZWRcIlxuICAgICAgICAgICAgICAgICAgICBbKG5nTW9kZWwpXT1cIm9wdC5jaGVja2VkXCIgW3JlcXVpcmVkXT1cImZpZWxkLmlzTWFuZGF0b3J5XCIgW25nTW9kZWxPcHRpb25zXT1cIntzdGFuZGFsb25lOiB0cnVlfVwiPlxuICAgICAgICAgICAgICAgICAgICB7e29wdC52YWx1ZX19XG4gICAgICAgICAgICAgICAgPC9tYXQtY2hlY2tib3g+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgKm5nU3dpdGNoQ2FzZT1cIidyYWRpbydcIiBjbGFzcz1cImZsZXgtYXV0byB3LTMwIGZpZWxkLXNpemVcIj5cbiAgICAgICAgICAgIDxsYWJlbCBzdHlsZT1cImRpc3BsYXk6IGJsb2NrO1wiPiB7e2ZpZWxkLmxhYmVsfX0gPC9sYWJlbD5cbiAgICAgICAgICAgIDxtYXQtcmFkaW8tZ3JvdXAgY2xhc3M9XCJmb3JtLWZpZWxkIHJhZGlvLWdyb3VwIGZpZWxkLXNpemVcIiBbKG5nTW9kZWwpXT1cImZpZWxkLnZhbHVlXCJcbiAgICAgICAgICAgICAgICBbcmVxdWlyZWRdPVwiZmllbGQuaXNNYW5kYXRvcnlcIiBhcmlhLWxhYmVsPVwiU2VsZWN0IGFuIG9wdGlvblwiPlxuICAgICAgICAgICAgICAgIDxtYXQtcmFkaW8tYnV0dG9uICpuZ0Zvcj1cImxldCBvcHQgb2YgZmllbGQuZGVmYXVsdFZhbHVlXCIgW3ZhbHVlXT1cIm9wdC52YWx1ZVwiPnt7b3B0LnZhbHVlfX1cbiAgICAgICAgICAgICAgICA8L21hdC1yYWRpby1idXR0b24+XG4gICAgICAgICAgICA8L21hdC1yYWRpby1ncm91cD5cbiAgICAgICAgICAgIDxtYXQtZm9ybS1maWVsZCAqbmdJZj1cIidhdXRyZSc9PT1mb3JtYXRPdGhlcihmaWVsZC52YWx1ZSlcIiBjbGFzcz1cImZvcm0tZmllbGQgZmllbGQtc2l6ZSBvdGhlci1vcHRpb25cIlxuICAgICAgICAgICAgICAgIGFwcGVhcmFuY2U9XCJvdXRsaW5lXCI+XG4gICAgICAgICAgICAgICAgPG1hdC1sYWJlbD5BdXRyZSBvcHRpb248L21hdC1sYWJlbD5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBbcmVxdWlyZWRdPVwiZmllbGQuaXNNYW5kYXRvcnlcIiBtYXRJbnB1dCBbbmdNb2RlbE9wdGlvbnNdPVwie3N0YW5kYWxvbmU6IHRydWV9XCJcbiAgICAgICAgICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJmaWVsZC5vdGhlclZhbHVlXCIgcGxhY2Vob2xkZXI9XCJcIj5cbiAgICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2ICpuZ1N3aXRjaENhc2U9XCInc2VsZWN0J1wiIGNsYXNzPVwiZmxleC1hdXRvIHctMzAgZmllbGQtc2l6ZVwiPlxuICAgICAgICAgICAgPG1hdC1mb3JtLWZpZWxkIGNsYXNzPVwiZmxleC1hdXRvIHctMzAgZmllbGQtc2l6ZVwiIGFwcGVhcmFuY2U9XCJvdXRsaW5lXCI+XG4gICAgICAgICAgICAgICAgPG1hdC1sYWJlbD4ge3tmaWVsZC5sYWJlbH19IDwvbWF0LWxhYmVsPlxuICAgICAgICAgICAgICAgIDxtYXQtc2VsZWN0IFsobmdNb2RlbCldPVwiZmllbGQudmFsdWVcIiBbbmdNb2RlbE9wdGlvbnNdPVwie3N0YW5kYWxvbmU6IHRydWV9XCJcbiAgICAgICAgICAgICAgICAgICAgW3JlcXVpcmVkXT1cImZpZWxkLmlzTWFuZGF0b3J5XCI+XG4gICAgICAgICAgICAgICAgICAgIDxtYXQtb3B0aW9uICpuZ0Zvcj1cImxldCBvcHQgb2YgZmllbGQuZGVmYXVsdFZhbHVlXCIgW3ZhbHVlXT1cIm9wdC52YWx1ZVwiPnt7b3B0LnZhbHVlfX08L21hdC1vcHRpb24+XG4gICAgICAgICAgICAgICAgPC9tYXQtc2VsZWN0PlxuICAgICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cbiAgICAgICAgICAgIDxtYXQtZm9ybS1maWVsZCAqbmdJZj1cIidhdXRyZSc9PT1mb3JtYXRPdGhlcihmaWVsZC52YWx1ZSlcIiBjbGFzcz1cImZvcm0tZmllbGQgZmllbGQtc2l6ZSBvdGhlci1vcHRpb25cIlxuICAgICAgICAgICAgICAgIGFwcGVhcmFuY2U9XCJvdXRsaW5lXCI+XG4gICAgICAgICAgICAgICAgPG1hdC1sYWJlbD5BdXRyZSBvcHRpb248L21hdC1sYWJlbD5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBbcmVxdWlyZWRdPVwiZmllbGQuaXNNYW5kYXRvcnlcIiBtYXRJbnB1dCBbbmdNb2RlbE9wdGlvbnNdPVwie3N0YW5kYWxvbmU6IHRydWV9XCJcbiAgICAgICAgICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJmaWVsZC5vdGhlclZhbHVlXCIgcGxhY2Vob2xkZXI9XCJcIj5cbiAgICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8bWF0LWZvcm0tZmllbGQgKm5nU3dpdGNoQ2FzZT1cIid0ZXh0YXJlYSdcIiBjbGFzcz1cImZvcm0tZmllbGQgZnVsbC13aWR0aFwiIGFwcGVhcmFuY2U9XCJvdXRsaW5lXCI+XG4gICAgICAgICAgICA8bWF0LWxhYmVsPnt7ZmllbGQubGFiZWx9fTwvbWF0LWxhYmVsPlxuICAgICAgICAgICAgPHRleHRhcmVhIHR5cGU9XCJ0ZXh0XCIgcm93cz1cIjVcIiBtYXRJbnB1dCBbcmVxdWlyZWRdPVwiZmllbGQuaXNNYW5kYXRvcnlcIiBbbmdNb2RlbE9wdGlvbnNdPVwie3N0YW5kYWxvbmU6IHRydWV9XCJcbiAgICAgICAgICAgICAgICBbKG5nTW9kZWwpXT1cImZpZWxkLnZhbHVlXCIgcGxhY2Vob2xkZXI9XCJEZXNjcmlwdGlvbi4uLlwiPjwvdGV4dGFyZWE+XG4gICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XG5cbiAgICAgICAgPG1hdC1mb3JtLWZpZWxkICpuZ1N3aXRjaERlZmF1bHQgY2xhc3M9XCJmb3JtLWZpZWxkIGZpZWxkLXNpemVcIiBhcHBlYXJhbmNlPVwib3V0bGluZVwiPlxuICAgICAgICAgICAgPG1hdC1sYWJlbD57e2ZpZWxkLmxhYmVsfX08L21hdC1sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dCBbdHlwZV09XCJmaWVsZC50eXBlXCIgW3JlcXVpcmVkXT1cImZpZWxkLmlzTWFuZGF0b3J5XCIgbWF0SW5wdXQgW25nTW9kZWxPcHRpb25zXT1cIntzdGFuZGFsb25lOiB0cnVlfVwiXG4gICAgICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJmaWVsZC52YWx1ZVwiIHBsYWNlaG9sZGVyPVwiXCI+XG4gICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XG4gICAgPC9uZy1jb250YWluZXI+XG48L2Rpdj5cbjxuZy1jb250ZW50IHNlbGVjdD1cIi5jaGlsZFwiPjwvbmctY29udGVudD4iXX0=