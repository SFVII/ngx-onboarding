import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ENTER, COMMA, SEMICOLON } from '@angular/cdk/keycodes';
import { FormControl } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/material/checkbox";
import * as i3 from "@angular/forms";
import * as i4 from "@angular/material/radio";
import * as i5 from "@angular/material/form-field";
import * as i6 from "@angular/material/input";
import * as i7 from "@angular/material/select";
import * as i8 from "@angular/material/core";
const _c0 = function () { return { standalone: true }; };
function SubOnboardingCreateComponent_div_2_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r336 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 5);
    i0.ɵɵelementStart(1, "mat-checkbox", 6);
    i0.ɵɵlistener("ngModelChange", function SubOnboardingCreateComponent_div_2_div_1_Template_mat_checkbox_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r336); const ctx_r335 = i0.ɵɵnextContext(2); return ctx_r335.field.value = $event; });
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r334 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵclassMap(ctx_r334.checkSubForm(ctx_r334.field) ? "checkbox-title-active" : "");
    i0.ɵɵproperty("ngModel", ctx_r334.field.value)("required", ctx_r334.field.isMandatory)("ngModelOptions", i0.ɵɵpureFunction0(6, _c0));
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r334.field.label, " ");
} }
function SubOnboardingCreateComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 5);
    i0.ɵɵtemplate(1, SubOnboardingCreateComponent_div_2_div_1_Template, 3, 7, "div", 2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", "checkbox");
} }
function SubOnboardingCreateComponent_div_3_mat_checkbox_4_Template(rf, ctx) { if (rf & 1) {
    const _r340 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-checkbox", 9);
    i0.ɵɵlistener("ngModelChange", function SubOnboardingCreateComponent_div_3_mat_checkbox_4_Template_mat_checkbox_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r340); const opt_r338 = ctx.$implicit; return opt_r338.checked = $event; });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const opt_r338 = ctx.$implicit;
    const ctx_r337 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("checked", opt_r338.checked)("ngModel", opt_r338.checked)("required", ctx_r337.field.isMandatory)("ngModelOptions", i0.ɵɵpureFunction0(5, _c0));
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", opt_r338.value, " ");
} }
function SubOnboardingCreateComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 5);
    i0.ɵɵelementStart(1, "label");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 7);
    i0.ɵɵtemplate(4, SubOnboardingCreateComponent_div_3_mat_checkbox_4_Template, 2, 6, "mat-checkbox", 8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r329 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r329.field.label);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r329.field.defaultValue);
} }
function SubOnboardingCreateComponent_div_4_mat_radio_button_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-radio-button", 14);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const opt_r343 = ctx.$implicit;
    i0.ɵɵproperty("value", opt_r343.value);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1("", opt_r343.value, " ");
} }
function SubOnboardingCreateComponent_div_4_mat_form_field_5_Template(rf, ctx) { if (rf & 1) {
    const _r345 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-form-field", 15);
    i0.ɵɵelementStart(1, "mat-label");
    i0.ɵɵtext(2, "Autre option");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "input", 16);
    i0.ɵɵlistener("ngModelChange", function SubOnboardingCreateComponent_div_4_mat_form_field_5_Template_input_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r345); const ctx_r344 = i0.ɵɵnextContext(2); return ctx_r344.field.otherValue = $event; });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r342 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("required", ctx_r342.field.isMandatory)("ngModelOptions", i0.ɵɵpureFunction0(3, _c0))("ngModel", ctx_r342.field.otherValue);
} }
function SubOnboardingCreateComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r347 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 5);
    i0.ɵɵelementStart(1, "label", 10);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "mat-radio-group", 11);
    i0.ɵɵlistener("ngModelChange", function SubOnboardingCreateComponent_div_4_Template_mat_radio_group_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r347); const ctx_r346 = i0.ɵɵnextContext(); return ctx_r346.field.value = $event; });
    i0.ɵɵtemplate(4, SubOnboardingCreateComponent_div_4_mat_radio_button_4_Template, 2, 2, "mat-radio-button", 12);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(5, SubOnboardingCreateComponent_div_4_mat_form_field_5_Template, 4, 4, "mat-form-field", 13);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r330 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r330.field.label, " ");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", ctx_r330.field.value)("required", ctx_r330.field.isMandatory);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r330.field.defaultValue);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", "autre" === ctx_r330.formatOther(ctx_r330.field.value));
} }
function SubOnboardingCreateComponent_div_5_mat_option_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 14);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const opt_r350 = ctx.$implicit;
    i0.ɵɵproperty("value", opt_r350.value);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(opt_r350.value);
} }
function SubOnboardingCreateComponent_div_5_mat_form_field_6_Template(rf, ctx) { if (rf & 1) {
    const _r352 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-form-field", 15);
    i0.ɵɵelementStart(1, "mat-label");
    i0.ɵɵtext(2, "Autre option");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "input", 16);
    i0.ɵɵlistener("ngModelChange", function SubOnboardingCreateComponent_div_5_mat_form_field_6_Template_input_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r352); const ctx_r351 = i0.ɵɵnextContext(2); return ctx_r351.field.otherValue = $event; });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r349 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("required", ctx_r349.field.isMandatory)("ngModelOptions", i0.ɵɵpureFunction0(3, _c0))("ngModel", ctx_r349.field.otherValue);
} }
function SubOnboardingCreateComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r354 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 5);
    i0.ɵɵelementStart(1, "mat-form-field", 17);
    i0.ɵɵelementStart(2, "mat-label");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "mat-select", 18);
    i0.ɵɵlistener("ngModelChange", function SubOnboardingCreateComponent_div_5_Template_mat_select_ngModelChange_4_listener($event) { i0.ɵɵrestoreView(_r354); const ctx_r353 = i0.ɵɵnextContext(); return ctx_r353.field.value = $event; });
    i0.ɵɵtemplate(5, SubOnboardingCreateComponent_div_5_mat_option_5_Template, 2, 2, "mat-option", 12);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(6, SubOnboardingCreateComponent_div_5_mat_form_field_6_Template, 4, 4, "mat-form-field", 13);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r331 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", ctx_r331.field.label, " ");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", ctx_r331.field.value)("ngModelOptions", i0.ɵɵpureFunction0(6, _c0))("required", ctx_r331.field.isMandatory);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r331.field.defaultValue);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", "autre" === ctx_r331.formatOther(ctx_r331.field.value));
} }
function SubOnboardingCreateComponent_mat_form_field_6_Template(rf, ctx) { if (rf & 1) {
    const _r356 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-form-field", 19);
    i0.ɵɵelementStart(1, "mat-label");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "textarea", 20);
    i0.ɵɵlistener("ngModelChange", function SubOnboardingCreateComponent_mat_form_field_6_Template_textarea_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r356); const ctx_r355 = i0.ɵɵnextContext(); return ctx_r355.field.value = $event; });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r332 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r332.field.label);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("required", ctx_r332.field.isMandatory)("ngModelOptions", i0.ɵɵpureFunction0(4, _c0))("ngModel", ctx_r332.field.value);
} }
function SubOnboardingCreateComponent_mat_form_field_7_Template(rf, ctx) { if (rf & 1) {
    const _r358 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-form-field", 21);
    i0.ɵɵelementStart(1, "mat-label");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "input", 22);
    i0.ɵɵlistener("ngModelChange", function SubOnboardingCreateComponent_mat_form_field_7_Template_input_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r358); const ctx_r357 = i0.ɵɵnextContext(); return ctx_r357.field.value = $event; });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r333 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r333.field.label);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("type", ctx_r333.field.type)("required", ctx_r333.field.isMandatory)("ngModelOptions", i0.ɵɵpureFunction0(5, _c0))("ngModel", ctx_r333.field.value);
} }
const _c1 = [[["", 8, "child"]]];
const _c2 = [".child"];
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
        console.log(this.field);
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
SubOnboardingCreateComponent.ɵcmp = i0.ɵɵdefineComponent({ type: SubOnboardingCreateComponent, selectors: [["lib-sub-create-onboarding"]], inputs: { field: "field", length: "length", i: "i", j: "j" }, outputs: { onAddKeywordFromInput: "onAddKeywordFromInput", onKeyPress: "onKeyPress", onDrop: "onDrop", onAddNewField: "onAddNewField", onRemoveField: "onRemoveField", onChangeType: "onChangeType", onRemoveKeyword: "onRemoveKeyword", onAddNewSubLevelField: "onAddNewSubLevelField", onExpendMore: "onExpendMore", onChangeLabel: "onChangeLabel", onCheckedChip: "onCheckedChip" }, ngContentSelectors: _c2, decls: 9, vars: 6, consts: [[1, "field-item"], [3, "ngSwitch"], ["class", "flex-auto w-30 field-size", 4, "ngSwitchCase"], ["class", "form-field full-width", "appearance", "outline", 4, "ngSwitchCase"], ["class", "form-field field-size", "appearance", "outline", 4, "ngSwitchDefault"], [1, "flex-auto", "w-30", "field-size"], [1, "form-field", 3, "ngModel", "required", "ngModelOptions", "ngModelChange"], [2, "margin-top", "20px"], ["class", "form-field", "style", "display: block; margin-bottom: 5px; margin-top: 10px", 3, "checked", "ngModel", "required", "ngModelOptions", "ngModelChange", 4, "ngFor", "ngForOf"], [1, "form-field", 2, "display", "block", "margin-bottom", "5px", "margin-top", "10px", 3, "checked", "ngModel", "required", "ngModelOptions", "ngModelChange"], [2, "display", "block"], ["aria-label", "Select an option", 1, "form-field", "radio-group", "field-size", 3, "ngModel", "required", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], ["class", "form-field field-size other-option", "appearance", "outline", 4, "ngIf"], [3, "value"], ["appearance", "outline", 1, "form-field", "field-size", "other-option"], ["type", "text", "matInput", "", "placeholder", "", 3, "required", "ngModelOptions", "ngModel", "ngModelChange"], ["appearance", "outline", 1, "flex-auto", "w-30", "field-size"], [3, "ngModel", "ngModelOptions", "required", "ngModelChange"], ["appearance", "outline", 1, "form-field", "full-width"], ["type", "text", "rows", "5", "matInput", "", "placeholder", "Description...", 3, "required", "ngModelOptions", "ngModel", "ngModelChange"], ["appearance", "outline", 1, "form-field", "field-size"], ["matInput", "", "placeholder", "", 3, "type", "required", "ngModelOptions", "ngModel", "ngModelChange"]], template: function SubOnboardingCreateComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef(_c1);
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
    } }, directives: [i1.NgSwitch, i1.NgSwitchCase, i1.NgSwitchDefault, i2.MatCheckbox, i2.MatCheckboxRequiredValidator, i3.NgControlStatus, i3.NgModel, i3.RequiredValidator, i1.NgForOf, i4.MatRadioGroup, i1.NgIf, i4.MatRadioButton, i5.MatFormField, i5.MatLabel, i6.MatInput, i3.DefaultValueAccessor, i7.MatSelect, i8.MatOption], styles: [".container[_ngcontent-%COMP%]{max-width:98%;margin:50px auto auto;padding-bottom:50px}.container[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:space-between}.input-category-name[_ngcontent-%COMP%]{font-size:15px;font-weight:500}.full-width[_ngcontent-%COMP%]{width:100%}.field-item[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;width:100%;flex-wrap:wrap;min-width:250px;position:relative}.field-item[_ngcontent-%COMP%]   .button-action[_ngcontent-%COMP%]{background-color:#6fe8d7;height:100%;margin:auto 15px auto auto;display:flex}.field-item[_ngcontent-%COMP%]   .button-action[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{box-shadow:none;background-color:transparent;color:#fff}.field-action[_ngcontent-%COMP%]{width:10%}.field-size[_ngcontent-%COMP%]   mat-checkbox[_ngcontent-%COMP%]{margin:20px}hr[_ngcontent-%COMP%]{margin:50px 0}  .mat-form-field-appearance-fill .mat-form-field-flex{background-color:#fff}.category-action[_ngcontent-%COMP%]{display:flex;width:100%}.delete-field[_ngcontent-%COMP%]{margin:auto 2%}.radio-group[_ngcontent-%COMP%]   .mat-radio-button[_ngcontent-%COMP%]{margin-right:10px}.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary[_ngcontent-%COMP%]{background-color:#3f51b5;color:#fff;min-height:20px;font-size:10px}.move-icons[_ngcontent-%COMP%]{cursor:move}.category-item[_ngcontent-%COMP%]{display:flex;align-items:baseline;width:100%;border:1px solid #dce4e9;border-radius:8px}  .readonly.mat-form-field-appearance-outline .mat-form-field-outline{color:transparent!important}.field-content[_ngcontent-%COMP%]{width:100%}.cdk-drag-preview[_ngcontent-%COMP%]{box-sizing:border-box;border-radius:4px;box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.cdk-drag-placeholder[_ngcontent-%COMP%]{opacity:0}.cdk-drag-animating[_ngcontent-%COMP%], .example-list.cdk-drop-list-dragging[_ngcontent-%COMP%]   .category-item[_ngcontent-%COMP%]:not(.cdk-drag-placeholder){transition:transform 250ms cubic-bezier(0,0,.2,1)}.add-button-container[_ngcontent-%COMP%]{background:no-repeat padding-box #fff;border:1px dashed #dce4e9;border-radius:8px;margin-top:10px;padding:10px;display:flex;justify-content:center;align-items:center;width:98%;margin-left:0;margin-bottom:22px}.add-button-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{display:flex;align-items:center;background-color:transparent;border:none;cursor:pointer;font:17px/26px Nexa Text;letter-spacing:0;color:#c2c8d5;box-shadow:none}.expand-button[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%]{font-size:48px;margin-top:-20px;margin-right:15px}.transparent-button[_ngcontent-%COMP%]{background-color:transparent!important;box-shadow:none!important;width:40px!important;padding:0!important;margin:0!important;min-width:auto!important}.expand-button[_ngcontent-%COMP%]{color:#5a607f!important;background-color:transparent!important;box-shadow:none!important}.checkbox-title-active[_ngcontent-%COMP%]{font-weight:700}.other-option[_ngcontent-%COMP%]{margin-left:10px}.flex-auto[_ngcontent-%COMP%]{width:100%}.flex-auto[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{width:80%}"] });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3ViLW9uYm9hcmRpbmctY3JlYXRlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL29uYm9hcmRpbmcvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9zdWItb25ib2FyZGluZy1jcmVhdGUvc3ViLW9uYm9hcmRpbmctY3JlYXRlLmNvbXBvbmVudC50cyIsImxpYi9jb21wb25lbnRzL3N1Yi1vbmJvYXJkaW5nLWNyZWF0ZS9zdWItb25ib2FyZGluZy1jcmVhdGUuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvRSxPQUFPLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7Ozs7Ozs7Ozs7SUNDakMsOEJBQ0k7SUFBQSx1Q0FFSTtJQURBLGlQQUF5QjtJQUN6QixZQUNKO0lBQUEsaUJBQWU7SUFDbkIsaUJBQU07OztJQUorQixlQUEwRDtJQUExRCxtRkFBMEQ7SUFDdkYsOENBQXlCLHdDQUFBLDhDQUFBO0lBQ3pCLGVBQ0o7SUFESSxxREFDSjs7O0lBTFIsOEJBQ0k7SUFBQSxtRkFDSTtJQUtSLGlCQUFNOztJQU5HLGVBQTBCO0lBQTFCLHlDQUEwQjs7OztJQVUzQix1Q0FFSTtJQURBLGdQQUF5QjtJQUN6QixZQUNKO0lBQUEsaUJBQWU7Ozs7SUFIc0gsMENBQXVCLDZCQUFBLHdDQUFBLDhDQUFBO0lBRXhKLGVBQ0o7SUFESSwrQ0FDSjs7O0lBTlIsOEJBQ0k7SUFBQSw2QkFBTztJQUFBLFlBQWU7SUFBQSxpQkFBUTtJQUM5Qiw4QkFDSTtJQUFBLHFHQUVJO0lBRVIsaUJBQU07SUFDVixpQkFBTTs7O0lBUEssZUFBZTtJQUFmLDBDQUFlO0lBRTRFLGVBQXNDO0lBQXRD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Q0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsTUFBTTs7a0JBQ04sTUFBTTs7a0JBQ04sTUFBTTs7a0JBQ04sTUFBTTs7a0JBQ04sTUFBTTs7a0JBQ04sTUFBTTs7a0JBQ04sTUFBTTs7a0JBQ04sTUFBTTs7a0JBQ04sTUFBTTs7a0JBQ04sTUFBTTs7a0JBQ04sTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEVOVEVSLCBDT01NQSwgU0VNSUNPTE9OIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2tleWNvZGVzJztcbmltcG9ydCB7IEZvcm1Db250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItc3ViLWNyZWF0ZS1vbmJvYXJkaW5nJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3N1Yi1vbmJvYXJkaW5nLWNyZWF0ZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3N1Yi1vbmJvYXJkaW5nLWNyZWF0ZS5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFN1Yk9uYm9hcmRpbmdDcmVhdGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBmaWVsZDogYW55XG4gIEBJbnB1dCgpIGxlbmd0aDogYW55XG4gIEBJbnB1dCgpIGk6IGFueVxuICBASW5wdXQoKSBqOiBhbnlcbiAgQE91dHB1dCgpIG9uQWRkS2V5d29yZEZyb21JbnB1dCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpXG4gIEBPdXRwdXQoKSBvbktleVByZXNzID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KClcbiAgQE91dHB1dCgpIG9uRHJvcCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpXG4gIEBPdXRwdXQoKSBvbkFkZE5ld0ZpZWxkID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KClcbiAgQE91dHB1dCgpIG9uUmVtb3ZlRmllbGQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKVxuICBAT3V0cHV0KCkgb25DaGFuZ2VUeXBlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KClcbiAgQE91dHB1dCgpIG9uUmVtb3ZlS2V5d29yZCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpXG4gIEBPdXRwdXQoKSBvbkFkZE5ld1N1YkxldmVsRmllbGQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKVxuICBAT3V0cHV0KCkgb25FeHBlbmRNb3JlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KClcbiAgQE91dHB1dCgpIG9uQ2hhbmdlTGFiZWwgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKVxuICBAT3V0cHV0KCkgb25DaGVja2VkQ2hpcCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpXG5cbiAgY2hpcENvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2wobmV3IFNldCgpKTtcblxuICBzZXBhcmF0b3JLZXlzQ29kZXMgPSBbRU5URVIsIENPTU1BLCBTRU1JQ09MT05dO1xuICBjdXJyZW50Q2hpcD1cIlwiXG4gIHByZXZWYWx1ZT1cIlwiXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgY29uc29sZS5sb2codGhpcy5maWVsZCk7XG4gIH1cblxuICBkcm9wKGV2ZW50KSB7XG4gICAgdGhpcy5vbkRyb3AuZW1pdChldmVudClcbiAgfVxuXG4gIGFkZEtleXdvcmRGcm9tSW5wdXQoZXZlbnQsIGksIGopIHtcbiAgICB0aGlzLm9uQWRkS2V5d29yZEZyb21JbnB1dC5lbWl0KHsgZXZlbnQscHJldjp0aGlzLnByZXZWYWx1ZSwgaSwgaiB9KTtcbiAgfVxuXG4gIGtleVVwKGV2ZW50LCBpLCBqKSB7XG4gICAgdGhpcy5vbktleVByZXNzLmVtaXQoeyBldmVudCwgaSwgaiB9KVxuICB9XG5cbiAgYWRkTmV3RmllbGQoZXZlbnQsIGkpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgdGhpcy5vbkFkZE5ld0ZpZWxkLmVtaXQoeyBldmVudCwgaSB9KVxuICB9XG5cbiAgcmVtb3ZlRmllbGQoZXZlbnQsIGksIGopIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgdGhpcy5vblJlbW92ZUZpZWxkLmVtaXQoeyBpLCBqIH0pXG4gIH1cblxuICBjaGFuZ2VUeXBlKHR5cGUsIGksIGopIHtcbiAgICB0aGlzLm9uQ2hhbmdlVHlwZS5lbWl0KHsgdHlwZSwgaSwgaiB9KVxuICB9XG5cbiAgcmVtb3ZlS2V5d29yZChldmVudCwgaSwgaikge1xuICAgIHRoaXMub25SZW1vdmVLZXl3b3JkLmVtaXQoeyBldmVudCwgaSwgaiB9KVxuICB9XG4gIGFkZE5ld1N1YkxldmVsRmllbGQoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIHRoaXMub25BZGROZXdTdWJMZXZlbEZpZWxkLmVtaXQodHJ1ZSlcbiAgfVxuICBleHBlbmRNb3JlKGUsIGZpZWxkKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgdGhpcy5vbkV4cGVuZE1vcmUuZW1pdCh7ZXhwYW5kOnRydWUsIGZpZWxkfSlcbiAgfVxuXG4gIGluZ29yZURlZmF1bHRBY3Rpb24oZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICB9XG5cbiAgY2hhbmdlTGFiZWwobGFiZWwsa2V5KXtcbiAgICB0aGlzLm9uQ2hhbmdlTGFiZWwuZW1pdCh7bGFiZWwsIGtleX0pXG4gIH1cblxuICB0b2dnbGVDaGlwID0gKGNoaXA6IGFueSkgPT4ge1xuICAgIHRoaXMub25DaGVja2VkQ2hpcC5lbWl0KGNoaXApXG4gICAgLy8gY29uc3QgYWRkQ2hpcCA9ICgpID0+IHsgdGhpcy5jaGlwcy5hZGQoY2hpcCk7IH07XG4gICAgLy8gY29uc3QgcmVtb3ZlQ2hpcCA9ICgpID0+IHsgdGhpcy5jaGlwcy5kZWxldGUoY2hpcCk7IH07XG4gICAgLy8gdGhpcy5jaGlwcy5oYXMoY2hpcCkgPyByZW1vdmVDaGlwKCkgOiBhZGRDaGlwKCk7XG5cbiAgfVxuXG4gIG9uRWRpdENoaXAoY2hpcCl7XG4gICAgaWYoY2hpcC52YWx1ZT09PXRoaXMuY3VycmVudENoaXApe1xuICAgICAgdGhpcy5jdXJyZW50Q2hpcD1cIlwiXG4gICAgICB0aGlzLnByZXZWYWx1ZT1cIlwiXG4gICAgfWVsc2V7XG4gICAgICB0aGlzLmN1cnJlbnRDaGlwPWNoaXAudmFsdWU7XG4gICAgICB0aGlzLnByZXZWYWx1ZT1jaGlwLnZhbHVlXG4gICAgfVxuICB9XG5cbiAgZ2V0IGNoaXBzKCkgeyByZXR1cm4gdGhpcy5jaGlwQ29udHJvbC52YWx1ZTsgfVxuXG4gIGZvcm1hdE90aGVyKG90aGVyOnN0cmluZyl7XG4gICBpZihvdGhlcil7XG4gICAgcmV0dXJuIG90aGVyLnRvTG9jYWxlTG93ZXJDYXNlKClcbiAgIH1cbiAgIHJldHVybiAnJ1xuICB9XG5cblxuICBjaGVja1N1YkZvcm0oZm9ybXMpe1xuICAgIGxldCBoYXNTdWJGb3JtPWZhbHNlO1xuICAgIGlmKGZvcm1zLmZvcm1zICYmIGZvcm1zLmZvcm1zLmxlbmd0aCl7XG4gICAgICBoYXNTdWJGb3JtPXRydWU7XG4gICAgfSAgICBcbiAgICByZXR1cm4gaGFzU3ViRm9ybVxuICB9XG5cbn1cbiIsIjxkaXYgY2xhc3M9XCJmaWVsZC1pdGVtXCI+XG4gICAgPG5nLWNvbnRhaW5lciBbbmdTd2l0Y2hdPVwiZmllbGQudHlwZVwiPlxuICAgICAgICA8ZGl2ICpuZ1N3aXRjaENhc2U9XCInY2hlY2tib3gnXCIgY2xhc3M9XCJmbGV4LWF1dG8gdy0zMCBmaWVsZC1zaXplXCI+XG4gICAgICAgICAgICA8ZGl2ICpuZ1N3aXRjaENhc2U9XCInY2hlY2tib3gnXCIgY2xhc3M9XCJmbGV4LWF1dG8gdy0zMCBmaWVsZC1zaXplXCI+XG4gICAgICAgICAgICAgICAgPG1hdC1jaGVja2JveCBjbGFzcz1cImZvcm0tZmllbGRcIiBbY2xhc3NdPVwiY2hlY2tTdWJGb3JtKGZpZWxkKSA/ICdjaGVja2JveC10aXRsZS1hY3RpdmUnOicnXCJcbiAgICAgICAgICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJmaWVsZC52YWx1ZVwiIFtyZXF1aXJlZF09XCJmaWVsZC5pc01hbmRhdG9yeVwiIFtuZ01vZGVsT3B0aW9uc109XCJ7c3RhbmRhbG9uZTogdHJ1ZX1cIj5cbiAgICAgICAgICAgICAgICAgICAge3tmaWVsZC5sYWJlbH19XG4gICAgICAgICAgICAgICAgPC9tYXQtY2hlY2tib3g+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgKm5nU3dpdGNoQ2FzZT1cIidjaGVja2JveF9tdWx0aXBsZSdcIiBjbGFzcz1cImZsZXgtYXV0byB3LTMwIGZpZWxkLXNpemVcIj5cbiAgICAgICAgICAgIDxsYWJlbD57e2ZpZWxkLmxhYmVsfX08L2xhYmVsPlxuICAgICAgICAgICAgPGRpdiBzdHlsZT1cIm1hcmdpbi10b3A6IDIwcHg7XCI+XG4gICAgICAgICAgICAgICAgPG1hdC1jaGVja2JveCBjbGFzcz1cImZvcm0tZmllbGRcIiBzdHlsZT1cImRpc3BsYXk6IGJsb2NrOyBtYXJnaW4tYm90dG9tOiA1cHg7IG1hcmdpbi10b3A6IDEwcHhcIiAqbmdGb3I9XCJsZXQgb3B0IG9mIGZpZWxkLmRlZmF1bHRWYWx1ZVwiIFtjaGVja2VkXT1cIm9wdC5jaGVja2VkXCJcbiAgICAgICAgICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJvcHQuY2hlY2tlZFwiIFtyZXF1aXJlZF09XCJmaWVsZC5pc01hbmRhdG9yeVwiIFtuZ01vZGVsT3B0aW9uc109XCJ7c3RhbmRhbG9uZTogdHJ1ZX1cIj5cbiAgICAgICAgICAgICAgICAgICAge3tvcHQudmFsdWV9fVxuICAgICAgICAgICAgICAgIDwvbWF0LWNoZWNrYm94PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2ICpuZ1N3aXRjaENhc2U9XCIncmFkaW8nXCIgY2xhc3M9XCJmbGV4LWF1dG8gdy0zMCBmaWVsZC1zaXplXCI+XG4gICAgICAgICAgICA8bGFiZWwgc3R5bGU9XCJkaXNwbGF5OiBibG9jaztcIj4ge3tmaWVsZC5sYWJlbH19IDwvbGFiZWw+XG4gICAgICAgICAgICA8bWF0LXJhZGlvLWdyb3VwIGNsYXNzPVwiZm9ybS1maWVsZCByYWRpby1ncm91cCBmaWVsZC1zaXplXCIgWyhuZ01vZGVsKV09XCJmaWVsZC52YWx1ZVwiXG4gICAgICAgICAgICAgICAgW3JlcXVpcmVkXT1cImZpZWxkLmlzTWFuZGF0b3J5XCIgYXJpYS1sYWJlbD1cIlNlbGVjdCBhbiBvcHRpb25cIj5cbiAgICAgICAgICAgICAgICA8bWF0LXJhZGlvLWJ1dHRvbiAqbmdGb3I9XCJsZXQgb3B0IG9mIGZpZWxkLmRlZmF1bHRWYWx1ZVwiIFt2YWx1ZV09XCJvcHQudmFsdWVcIj57e29wdC52YWx1ZX19XG4gICAgICAgICAgICAgICAgPC9tYXQtcmFkaW8tYnV0dG9uPlxuICAgICAgICAgICAgPC9tYXQtcmFkaW8tZ3JvdXA+XG4gICAgICAgICAgICA8bWF0LWZvcm0tZmllbGQgKm5nSWY9XCInYXV0cmUnPT09Zm9ybWF0T3RoZXIoZmllbGQudmFsdWUpXCIgY2xhc3M9XCJmb3JtLWZpZWxkIGZpZWxkLXNpemUgb3RoZXItb3B0aW9uXCJcbiAgICAgICAgICAgICAgICBhcHBlYXJhbmNlPVwib3V0bGluZVwiPlxuICAgICAgICAgICAgICAgIDxtYXQtbGFiZWw+QXV0cmUgb3B0aW9uPC9tYXQtbGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgW3JlcXVpcmVkXT1cImZpZWxkLmlzTWFuZGF0b3J5XCIgbWF0SW5wdXQgW25nTW9kZWxPcHRpb25zXT1cIntzdGFuZGFsb25lOiB0cnVlfVwiXG4gICAgICAgICAgICAgICAgICAgIFsobmdNb2RlbCldPVwiZmllbGQub3RoZXJWYWx1ZVwiIHBsYWNlaG9sZGVyPVwiXCI+XG4gICAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiAqbmdTd2l0Y2hDYXNlPVwiJ3NlbGVjdCdcIiBjbGFzcz1cImZsZXgtYXV0byB3LTMwIGZpZWxkLXNpemVcIj5cbiAgICAgICAgICAgIDxtYXQtZm9ybS1maWVsZCBjbGFzcz1cImZsZXgtYXV0byB3LTMwIGZpZWxkLXNpemVcIiBhcHBlYXJhbmNlPVwib3V0bGluZVwiPlxuICAgICAgICAgICAgICAgIDxtYXQtbGFiZWw+IHt7ZmllbGQubGFiZWx9fSA8L21hdC1sYWJlbD5cbiAgICAgICAgICAgICAgICA8bWF0LXNlbGVjdCBbKG5nTW9kZWwpXT1cImZpZWxkLnZhbHVlXCIgW25nTW9kZWxPcHRpb25zXT1cIntzdGFuZGFsb25lOiB0cnVlfVwiXG4gICAgICAgICAgICAgICAgICAgIFtyZXF1aXJlZF09XCJmaWVsZC5pc01hbmRhdG9yeVwiPlxuICAgICAgICAgICAgICAgICAgICA8bWF0LW9wdGlvbiAqbmdGb3I9XCJsZXQgb3B0IG9mIGZpZWxkLmRlZmF1bHRWYWx1ZVwiIFt2YWx1ZV09XCJvcHQudmFsdWVcIj57e29wdC52YWx1ZX19PC9tYXQtb3B0aW9uPlxuICAgICAgICAgICAgICAgIDwvbWF0LXNlbGVjdD5cbiAgICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XG4gICAgICAgICAgICA8bWF0LWZvcm0tZmllbGQgKm5nSWY9XCInYXV0cmUnPT09Zm9ybWF0T3RoZXIoZmllbGQudmFsdWUpXCIgY2xhc3M9XCJmb3JtLWZpZWxkIGZpZWxkLXNpemUgb3RoZXItb3B0aW9uXCJcbiAgICAgICAgICAgICAgICBhcHBlYXJhbmNlPVwib3V0bGluZVwiPlxuICAgICAgICAgICAgICAgIDxtYXQtbGFiZWw+QXV0cmUgb3B0aW9uPC9tYXQtbGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgW3JlcXVpcmVkXT1cImZpZWxkLmlzTWFuZGF0b3J5XCIgbWF0SW5wdXQgW25nTW9kZWxPcHRpb25zXT1cIntzdGFuZGFsb25lOiB0cnVlfVwiXG4gICAgICAgICAgICAgICAgICAgIFsobmdNb2RlbCldPVwiZmllbGQub3RoZXJWYWx1ZVwiIHBsYWNlaG9sZGVyPVwiXCI+XG4gICAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPG1hdC1mb3JtLWZpZWxkICpuZ1N3aXRjaENhc2U9XCIndGV4dGFyZWEnXCIgY2xhc3M9XCJmb3JtLWZpZWxkIGZ1bGwtd2lkdGhcIiBhcHBlYXJhbmNlPVwib3V0bGluZVwiPlxuICAgICAgICAgICAgPG1hdC1sYWJlbD57e2ZpZWxkLmxhYmVsfX08L21hdC1sYWJlbD5cbiAgICAgICAgICAgIDx0ZXh0YXJlYSB0eXBlPVwidGV4dFwiIHJvd3M9XCI1XCIgbWF0SW5wdXQgW3JlcXVpcmVkXT1cImZpZWxkLmlzTWFuZGF0b3J5XCIgW25nTW9kZWxPcHRpb25zXT1cIntzdGFuZGFsb25lOiB0cnVlfVwiXG4gICAgICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJmaWVsZC52YWx1ZVwiIHBsYWNlaG9sZGVyPVwiRGVzY3JpcHRpb24uLi5cIj48L3RleHRhcmVhPlxuICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxuXG4gICAgICAgIDxtYXQtZm9ybS1maWVsZCAqbmdTd2l0Y2hEZWZhdWx0IGNsYXNzPVwiZm9ybS1maWVsZCBmaWVsZC1zaXplXCIgYXBwZWFyYW5jZT1cIm91dGxpbmVcIj5cbiAgICAgICAgICAgIDxtYXQtbGFiZWw+e3tmaWVsZC5sYWJlbH19PC9tYXQtbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXQgW3R5cGVdPVwiZmllbGQudHlwZVwiIFtyZXF1aXJlZF09XCJmaWVsZC5pc01hbmRhdG9yeVwiIG1hdElucHV0IFtuZ01vZGVsT3B0aW9uc109XCJ7c3RhbmRhbG9uZTogdHJ1ZX1cIlxuICAgICAgICAgICAgICAgIFsobmdNb2RlbCldPVwiZmllbGQudmFsdWVcIiBwbGFjZWhvbGRlcj1cIlwiPlxuICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxuICAgIDwvbmctY29udGFpbmVyPlxuPC9kaXY+XG48bmctY29udGVudCBzZWxlY3Q9XCIuY2hpbGRcIj48L25nLWNvbnRlbnQ+Il19