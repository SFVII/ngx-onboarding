import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ENTER, COMMA, SEMICOLON } from '@angular/cdk/keycodes';
import { FormControl } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/material/button";
import * as i3 from "@angular/material/icon";
import * as i4 from "@angular/material/checkbox";
import * as i5 from "@angular/forms";
import * as i6 from "ngx-intl-tel-input";
import * as i7 from "@angular/material/select";
import * as i8 from "@angular/material/core";
import * as i9 from "@angular/material/radio";
import * as i10 from "@angular/material/form-field";
import * as i11 from "@angular/material/input";
function SubTemplateProfileComponent_div_0_div_5_div_1_mat_select_3_mat_option_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 12);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var select_r762 = ctx.$implicit;
    i0.ɵɵproperty("value", select_r762.value);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", select_r762.value, "");
} }
var _c0 = function () { return { standalone: true }; };
function SubTemplateProfileComponent_div_0_div_5_div_1_mat_select_3_Template(rf, ctx) { if (rf & 1) {
    var _r764 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-select", 10);
    i0.ɵɵlistener("ngModelChange", function SubTemplateProfileComponent_div_0_div_5_div_1_mat_select_3_Template_mat_select_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r764); var ctx_r763 = i0.ɵɵnextContext(4); return ctx_r763.field.selector.value = $event; });
    i0.ɵɵtemplate(1, SubTemplateProfileComponent_div_0_div_5_div_1_mat_select_3_mat_option_1_Template, 2, 2, "mat-option", 11);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r760 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("ngModel", ctx_r760.field.selector.value)("ngModelOptions", i0.ɵɵpureFunction0(3, _c0));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r760.field.selector.defaultValue);
} }
var _c1 = function () { return { display: "inine-block" }; };
function SubTemplateProfileComponent_div_0_div_5_div_1_Template(rf, ctx) { if (rf & 1) {
    var _r766 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 7);
    i0.ɵɵelementStart(1, "mat-checkbox", 8);
    i0.ɵɵlistener("ngModelChange", function SubTemplateProfileComponent_div_0_div_5_div_1_Template_mat_checkbox_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r766); var ctx_r765 = i0.ɵɵnextContext(3); return ctx_r765.field.value = $event; });
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, SubTemplateProfileComponent_div_0_div_5_div_1_mat_select_3_Template, 2, 4, "mat-select", 9);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r759 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", ctx_r759.field.value)("ngModelOptions", i0.ɵɵpureFunction0(5, _c0))("ngStyle", ctx_r759.field.selector && i0.ɵɵpureFunction0(6, _c1));
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r759.field.label, " ");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r759.field.selector);
} }
function SubTemplateProfileComponent_div_0_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 7);
    i0.ɵɵtemplate(1, SubTemplateProfileComponent_div_0_div_5_div_1_Template, 4, 7, "div", 5);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", "checkbox");
} }
function SubTemplateProfileComponent_div_0_div_6_mat_checkbox_4_Template(rf, ctx) { if (rf & 1) {
    var _r770 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-checkbox", 15);
    i0.ɵɵlistener("ngModelChange", function SubTemplateProfileComponent_div_0_div_6_mat_checkbox_4_Template_mat_checkbox_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r770); var opt_r768 = ctx.$implicit; return opt_r768.checked = $event; });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var opt_r768 = ctx.$implicit;
    i0.ɵɵproperty("checked", opt_r768.checked)("ngModel", opt_r768.checked)("ngModelOptions", i0.ɵɵpureFunction0(4, _c0));
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", opt_r768.value, " ");
} }
function SubTemplateProfileComponent_div_0_div_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 7);
    i0.ɵɵelementStart(1, "label");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 13);
    i0.ɵɵtemplate(4, SubTemplateProfileComponent_div_0_div_6_mat_checkbox_4_Template, 2, 5, "mat-checkbox", 14);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r755 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r755.field.label);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r755.field.defaultValue);
} }
function SubTemplateProfileComponent_div_0_div_7_mat_radio_button_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-radio-button", 12);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var opt_r772 = ctx.$implicit;
    i0.ɵɵproperty("value", opt_r772.value);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1("", opt_r772.value, " ");
} }
function SubTemplateProfileComponent_div_0_div_7_Template(rf, ctx) { if (rf & 1) {
    var _r774 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 7);
    i0.ɵɵelementStart(1, "label", 16);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "mat-radio-group", 17);
    i0.ɵɵlistener("ngModelChange", function SubTemplateProfileComponent_div_0_div_7_Template_mat_radio_group_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r774); var ctx_r773 = i0.ɵɵnextContext(2); return ctx_r773.field.value = $event; });
    i0.ɵɵtemplate(4, SubTemplateProfileComponent_div_0_div_7_mat_radio_button_4_Template, 2, 2, "mat-radio-button", 11);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r756 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r756.field.label, " ");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", ctx_r756.field.value)("required", ctx_r756.field.isMandatory);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r756.field.defaultValue);
} }
function SubTemplateProfileComponent_div_0_div_8_mat_option_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 12);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var opt_r776 = ctx.$implicit;
    i0.ɵɵproperty("value", opt_r776.value);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(opt_r776.value);
} }
function SubTemplateProfileComponent_div_0_div_8_Template(rf, ctx) { if (rf & 1) {
    var _r778 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 7);
    i0.ɵɵelementStart(1, "mat-form-field", 18);
    i0.ɵɵelementStart(2, "mat-label");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "mat-select", 19);
    i0.ɵɵlistener("ngModelChange", function SubTemplateProfileComponent_div_0_div_8_Template_mat_select_ngModelChange_4_listener($event) { i0.ɵɵrestoreView(_r778); var ctx_r777 = i0.ɵɵnextContext(2); return ctx_r777.field.value = $event; });
    i0.ɵɵtemplate(5, SubTemplateProfileComponent_div_0_div_8_mat_option_5_Template, 2, 2, "mat-option", 11);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r757 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", ctx_r757.field.label, " ");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", ctx_r757.field.value)("ngModelOptions", i0.ɵɵpureFunction0(4, _c0));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r757.field.defaultValue);
} }
function SubTemplateProfileComponent_div_0_mat_form_field_9_Template(rf, ctx) { if (rf & 1) {
    var _r780 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-form-field", 20);
    i0.ɵɵelementStart(1, "mat-label");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "input", 21);
    i0.ɵɵlistener("ngModelChange", function SubTemplateProfileComponent_div_0_mat_form_field_9_Template_input_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r780); var ctx_r779 = i0.ɵɵnextContext(2); return ctx_r779.field.value = $event; });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r758 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r758.field.label);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("type", ctx_r758.field.type)("ngModelOptions", i0.ɵɵpureFunction0(4, _c0))("ngModel", ctx_r758.field.value);
} }
function SubTemplateProfileComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    var _r782 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 1);
    i0.ɵɵelementStart(1, "button", 2);
    i0.ɵɵlistener("click", function SubTemplateProfileComponent_div_0_Template_button_click_1_listener($event) { i0.ɵɵrestoreView(_r782); var ctx_r781 = i0.ɵɵnextContext(); return ctx_r781.editBLock($event); });
    i0.ɵɵelementStart(2, "mat-icon", 3);
    i0.ɵɵtext(3, "settings");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerStart(4, 4);
    i0.ɵɵtemplate(5, SubTemplateProfileComponent_div_0_div_5_Template, 2, 1, "div", 5);
    i0.ɵɵtemplate(6, SubTemplateProfileComponent_div_0_div_6_Template, 5, 2, "div", 5);
    i0.ɵɵtemplate(7, SubTemplateProfileComponent_div_0_div_7_Template, 5, 4, "div", 5);
    i0.ɵɵtemplate(8, SubTemplateProfileComponent_div_0_div_8_Template, 6, 5, "div", 5);
    i0.ɵɵtemplate(9, SubTemplateProfileComponent_div_0_mat_form_field_9_Template, 4, 5, "mat-form-field", 6);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r753 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngSwitch", ctx_r753.field.type);
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
    // checked(locationValue,value){
    //   return locationValue.includes(value)
    // }
    SubTemplateProfileComponent.prototype.editBLock = function (event) {
        event.preventDefault();
        this.onEditBlock.emit(true);
    };
    SubTemplateProfileComponent.ɵfac = function SubTemplateProfileComponent_Factory(t) { return new (t || SubTemplateProfileComponent)(); };
    SubTemplateProfileComponent.ɵcmp = i0.ɵɵdefineComponent({ type: SubTemplateProfileComponent, selectors: [["lib-sub-category"]], inputs: { field: "field", length: "length", i: "i", j: "j", conditionData: "conditionData" }, outputs: { onAddKeywordFromInput: "onAddKeywordFromInput", onKeyPress: "onKeyPress", onDrop: "onDrop", onAddNewField: "onAddNewField", onRemoveField: "onRemoveField", onChangeType: "onChangeType", onRemoveKeyword: "onRemoveKeyword", onAddNewSubLevelField: "onAddNewSubLevelField", onExpendMore: "onExpendMore", onChangeLabel: "onChangeLabel", onCheckedChip: "onCheckedChip", onCheckedDefault: "onCheckedDefault", onGetConditionValues: "onGetConditionValues", onEditBlock: "onEditBlock" }, ngContentSelectors: _c3, decls: 2, vars: 1, consts: [["class", "field-item", 4, "ngIf"], [1, "field-item"], ["mat-raised-button", "", 1, "transparent-button", "setting", 3, "click"], [1, "setting-icon"], [3, "ngSwitch"], ["class", "flex-auto w-30 field-size", 4, "ngSwitchCase"], ["class", "form-field field-size", "appearance", "outline", 4, "ngSwitchDefault"], [1, "flex-auto", "w-30", "field-size"], [1, "form-field", 3, "ngModel", "ngModelOptions", "ngStyle", "ngModelChange"], ["placeholder", "Company", "style", "display: inline-block; width: 50%", 3, "ngModel", "ngModelOptions", "ngModelChange", 4, "ngIf"], ["placeholder", "Company", 2, "display", "inline-block", "width", "50%", 3, "ngModel", "ngModelOptions", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], [2, "margin-top", "20px"], ["class", "form-field", "style", "display: block; margin-bottom: 5px; margin-top: 10px", 3, "checked", "ngModel", "ngModelOptions", "ngModelChange", 4, "ngFor", "ngForOf"], [1, "form-field", 2, "display", "block", "margin-bottom", "5px", "margin-top", "10px", 3, "checked", "ngModel", "ngModelOptions", "ngModelChange"], [2, "display", "block"], ["aria-label", "Select an option", 1, "form-field", "radio-group", "field-size", 3, "ngModel", "required", "ngModelChange"], ["appearance", "outline", 1, "mat-select", "flex-auto", "w-30", "field-size"], [3, "ngModel", "ngModelOptions", "ngModelChange"], ["appearance", "outline", 1, "form-field", "field-size"], ["matInput", "", "placeholder", "", 3, "type", "ngModelOptions", "ngModel", "ngModelChange"]], template: function SubTemplateProfileComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef(_c2);
            i0.ɵɵtemplate(0, SubTemplateProfileComponent_div_0_Template, 10, 5, "div", 0);
            i0.ɵɵprojection(1);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", !ctx.field.forms);
        } }, directives: [i1.NgIf, i2.MatButton, i3.MatIcon, i1.NgSwitch, i1.NgSwitchCase, i1.NgSwitchDefault, i4.MatCheckbox, i5.NgControlStatus, i5.NgModel, i6.NativeElementInjectorDirective, i1.NgStyle, i7.MatSelect, i1.NgForOf, i8.MatOption, i9.MatRadioGroup, i5.RequiredValidator, i9.MatRadioButton, i10.MatFormField, i10.MatLabel, i11.MatInput, i5.DefaultValueAccessor], styles: [".container[_ngcontent-%COMP%]{max-width:98%;margin:50px auto auto;padding-bottom:50px}.container[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:space-between}.input-category-name[_ngcontent-%COMP%]{font-size:15px;font-weight:500}.full-width[_ngcontent-%COMP%]{width:100%}.field-item[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;width:100%;flex-wrap:wrap;position:relative}.field-item[_ngcontent-%COMP%]   .button-action[_ngcontent-%COMP%]{background-color:#6fe8d7;height:100%;margin:auto 15px auto auto;display:flex}.field-item[_ngcontent-%COMP%]   .button-action[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{box-shadow:none;background-color:transparent;color:#fff}.field-item[_ngcontent-%COMP%]   .setting[_ngcontent-%COMP%]{position:absolute;top:-5px;right:11px;z-index:1;background-color:#d5d6d7!important;border-radius:50px;width:40px!important;height:40px!important;display:none}.field-item[_ngcontent-%COMP%]:hover   .setting[_ngcontent-%COMP%]{display:block}.field-action[_ngcontent-%COMP%]{width:10%}hr[_ngcontent-%COMP%]{margin:50px 0}  .mat-form-field-appearance-fill .mat-form-field-flex{background-color:#fff}.category-action[_ngcontent-%COMP%]{display:flex;width:100%}.delete-field[_ngcontent-%COMP%]{margin:auto 2%}.radio-group[_ngcontent-%COMP%]   .mat-radio-button[_ngcontent-%COMP%]{margin-right:10px}.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary[_ngcontent-%COMP%]{background-color:#3f51b5;color:#fff;min-height:20px;font-size:10px}.move-icons[_ngcontent-%COMP%]{cursor:move}.category-item[_ngcontent-%COMP%]{display:flex;align-items:baseline;width:100%;border:1px solid #dce4e9;border-radius:8px}  .readonly.mat-form-field-appearance-outline .mat-form-field-outline{color:transparent!important}.field-content[_ngcontent-%COMP%]{width:100%}.cdk-drag-preview[_ngcontent-%COMP%]{box-sizing:border-box;border-radius:4px;box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.cdk-drag-placeholder[_ngcontent-%COMP%]{opacity:0}.cdk-drag-animating[_ngcontent-%COMP%], .example-list.cdk-drop-list-dragging[_ngcontent-%COMP%]   .category-item[_ngcontent-%COMP%]:not(.cdk-drag-placeholder){transition:transform 250ms cubic-bezier(0,0,.2,1)}.add-button-container[_ngcontent-%COMP%]{background:no-repeat padding-box #fff;border:1px dashed #dce4e9;border-radius:8px;margin-top:10px;padding:10px;display:flex;justify-content:center;align-items:center;width:98%;margin-left:0;margin-bottom:22px}.add-button-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{display:flex;align-items:center;background-color:transparent;border:none;cursor:pointer;font:17px/26px Nexa Text;letter-spacing:0;color:#c2c8d5;box-shadow:none}.expand-button[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%]{font-size:48px;margin-top:-20px;margin-right:15px}.transparent-button[_ngcontent-%COMP%]{background-color:transparent!important;box-shadow:none!important;width:40px!important;padding:0!important;margin:0!important;min-width:auto!important}.expand-button[_ngcontent-%COMP%]{color:#5a607f!important;background-color:transparent!important;box-shadow:none!important}.checkbox-condition[_ngcontent-%COMP%]{position:relative}.checkbox-condition[_ngcontent-%COMP%]   .condition-container[_ngcontent-%COMP%]{position:absolute;top:30px;width:500px;height:150px;background-color:#fff;border:1px dashed #dce4e9;z-index:1;left:0;border-radius:5px}.checkbox-condition[_ngcontent-%COMP%]   .condition-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{position:absolute;bottom:5px;left:0}.condition-help[_ngcontent-%COMP%]{cursor:pointer}.cdk-overlay-pane[_ngcontent-%COMP%]{width:100%}.child[_ngcontent-%COMP%]{margin-left:0}.child[_ngcontent-%COMP%]   .cdk-drop-list[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap}"] });
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
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3ViLXRlbXBsYXRlLXByb2ZpbGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vb25ib2FyZGluZy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3RlbXBsYXRlL3N1Yi10ZW1wbGF0ZS1wcm9maWxlL3N1Yi10ZW1wbGF0ZS1wcm9maWxlLmNvbXBvbmVudC50cyIsImxpYi9jb21wb25lbnRzL3RlbXBsYXRlL3N1Yi10ZW1wbGF0ZS1wcm9maWxlL3N1Yi10ZW1wbGF0ZS1wcm9maWxlLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDL0UsT0FBTyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDaEUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7Ozs7Ozs7Ozs7OztJQ29CbkMsc0NBQXVGO0lBQUEsWUFBa0I7SUFBQSxpQkFBYTs7O0lBQXZELHlDQUFzQjtJQUFFLGVBQWtCO0lBQWxCLGlEQUFrQjs7Ozs7SUFQM0csc0NBT0U7SUFMQSx3UUFBa0M7SUFLbEMsMEhBQXVGO0lBQ3pGLGlCQUFhOzs7SUFOWCx1REFBa0MsOENBQUE7SUFLdEIsZUFBa0Q7SUFBbEQsOERBQWtEOzs7OztJQWhCbEUsOEJBQ0U7SUFBQSx1Q0FNRTtJQUpBLG9QQUF5QjtJQUl6QixZQUNGO0lBQUEsaUJBQWU7SUFDZiw0R0FPRTtJQUVKLGlCQUFNOzs7SUFmRixlQUF5QjtJQUF6Qiw4Q0FBeUIsOENBQUEsa0VBQUE7SUFJekIsZUFDRjtJQURFLHFEQUNGO0lBS0UsZUFBc0I7SUFBdEIsOENBQXNCOzs7SUFkNUIsOEJBQ0U7SUFBQSx3RkFDRTtJQWtCSixpQkFBTTs7SUFuQkMsZUFBMEI7SUFBMUIseUNBQTBCOzs7O0lBdUI3Qix3Q0FRRTtJQUhB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QyxJQUFJLENBQUMsQ0FBQztJQUM5QixDQUFDOzBHQW5IVSwyQkFBMkI7b0VBQTNCLDJCQUEyQjs7WUNUeEMsNkVBQ0U7WUFrRUYsa0JBQTRCOztZQW5FSix1Q0FBb0I7O3NDREE1QztDQThIQyxBQTFIRCxJQTBIQztTQXJIWSwyQkFBMkI7a0RBQTNCLDJCQUEyQjtjQUx2QyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtnQkFDNUIsV0FBVyxFQUFFLHVDQUF1QztnQkFDcEQsU0FBUyxFQUFFLENBQUMsdUNBQXVDLENBQUM7YUFDckQ7O2tCQUVFLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLE1BQU07O2tCQUNOLE1BQU07O2tCQUNOLE1BQU07O2tCQUNOLE1BQU07O2tCQUNOLE1BQU07O2tCQUNOLE1BQU07O2tCQUNOLE1BQU07O2tCQUNOLE1BQU07O2tCQUNOLE1BQU07O2tCQUNOLE1BQU07O2tCQUNOLE1BQU07O2tCQUNOLE1BQU07O2tCQUNOLE1BQU07O2tCQUNOLE1BQU07O2tCQUNOLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEVOVEVSLCBDT01NQSwgU0VNSUNPTE9OIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2tleWNvZGVzJztcclxuaW1wb3J0IHsgRm9ybUNvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2xpYi1zdWItY2F0ZWdvcnknLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9zdWItdGVtcGxhdGUtcHJvZmlsZS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vc3ViLXRlbXBsYXRlLXByb2ZpbGUuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU3ViVGVtcGxhdGVQcm9maWxlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBASW5wdXQoKSBmaWVsZDogYW55XHJcbiAgQElucHV0KCkgbGVuZ3RoOiBhbnlcclxuICBASW5wdXQoKSBpOiBhbnlcclxuICBASW5wdXQoKSBqOiBhbnlcclxuICBAT3V0cHV0KCkgb25BZGRLZXl3b3JkRnJvbUlucHV0ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KClcclxuICBAT3V0cHV0KCkgb25LZXlQcmVzcyA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpXHJcbiAgQE91dHB1dCgpIG9uRHJvcCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpXHJcbiAgQE91dHB1dCgpIG9uQWRkTmV3RmllbGQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKVxyXG4gIEBPdXRwdXQoKSBvblJlbW92ZUZpZWxkID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KClcclxuICBAT3V0cHV0KCkgb25DaGFuZ2VUeXBlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KClcclxuICBAT3V0cHV0KCkgb25SZW1vdmVLZXl3b3JkID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KClcclxuICBAT3V0cHV0KCkgb25BZGROZXdTdWJMZXZlbEZpZWxkID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KClcclxuICBAT3V0cHV0KCkgb25FeHBlbmRNb3JlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KClcclxuICBAT3V0cHV0KCkgb25DaGFuZ2VMYWJlbCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpXHJcbiAgQE91dHB1dCgpIG9uQ2hlY2tlZENoaXAgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKVxyXG4gIEBPdXRwdXQoKSBvbkNoZWNrZWREZWZhdWx0ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KClcclxuICBAT3V0cHV0KCkgb25HZXRDb25kaXRpb25WYWx1ZXMgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKVxyXG4gIEBPdXRwdXQoKSBvbkVkaXRCbG9jayA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpXHJcbiAgQElucHV0KCkgY29uZGl0aW9uRGF0YSA9IFtdXHJcblxyXG4gIGNoaXBDb250cm9sID0gbmV3IEZvcm1Db250cm9sKG5ldyBTZXQoKSk7XHJcblxyXG4gIHNlcGFyYXRvcktleXNDb2RlcyA9IFtFTlRFUiwgQ09NTUEsIFNFTUlDT0xPTl07XHJcbiAgY3VycmVudENoaXAgPSBcIlwiXHJcbiAgcHJldlZhbHVlID0gXCJcIlxyXG4gIHNob3dDb25kaXRpb24gPSBmYWxzZVxyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gIH1cclxuXHJcbiAgZHJvcChldmVudCkge1xyXG4gICAgdGhpcy5vbkRyb3AuZW1pdChldmVudClcclxuICB9XHJcblxyXG4gIGFkZEtleXdvcmRGcm9tSW5wdXQoZXZlbnQsIGksIGopIHtcclxuICAgIHRoaXMub25BZGRLZXl3b3JkRnJvbUlucHV0LmVtaXQoeyBldmVudCwgcHJldjogdGhpcy5wcmV2VmFsdWUsIGksIGogfSk7XHJcbiAgfVxyXG5cclxuICBrZXlVcChldmVudCwgaSwgaikge1xyXG4gICAgdGhpcy5vbktleVByZXNzLmVtaXQoeyBldmVudCwgaSwgaiB9KVxyXG4gIH1cclxuXHJcbiAgYWRkTmV3RmllbGQoZXZlbnQsIGkpIHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcclxuICAgIHRoaXMub25BZGROZXdGaWVsZC5lbWl0KHsgZXZlbnQsIGkgfSlcclxuICB9XHJcblxyXG4gIHJlbW92ZUZpZWxkKGV2ZW50LCBpLCBqKSB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICB0aGlzLm9uUmVtb3ZlRmllbGQuZW1pdCh7IGksIGogfSlcclxuICB9XHJcblxyXG4gIGNoYW5nZVR5cGUodHlwZSwgaSwgaikge1xyXG4gICAgdGhpcy5vbkNoYW5nZVR5cGUuZW1pdCh7IHR5cGUsIGksIGogfSlcclxuICB9XHJcblxyXG4gIHJlbW92ZUtleXdvcmQoZXZlbnQsIGksIGopIHtcclxuICAgIHRoaXMub25SZW1vdmVLZXl3b3JkLmVtaXQoeyBldmVudCwgaSwgaiB9KVxyXG4gIH1cclxuICBhZGROZXdTdWJMZXZlbEZpZWxkKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgdGhpcy5vbkFkZE5ld1N1YkxldmVsRmllbGQuZW1pdCh0cnVlKVxyXG4gIH1cclxuICBleHBlbmRNb3JlKGUsIGZpZWxkKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgIHRoaXMub25FeHBlbmRNb3JlLmVtaXQoeyBleHBhbmQ6IHRydWUsIGZpZWxkIH0pXHJcbiAgfVxyXG4gIGdldENvbmRpdGlvblZhbHVlcygpIHtcclxuICAgIHRoaXMub25HZXRDb25kaXRpb25WYWx1ZXMuZW1pdCh0cnVlKVxyXG4gIH1cclxuXHJcbiAgaW5nb3JlRGVmYXVsdEFjdGlvbihlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICB9XHJcblxyXG4gIGNoYW5nZUxhYmVsKGxhYmVsLCBrZXkpIHtcclxuICAgIHRoaXMub25DaGFuZ2VMYWJlbC5lbWl0KHsgbGFiZWwsIGtleSB9KVxyXG4gIH1cclxuXHJcbiAgdG9nZ2xlQ2hpcCA9IChjaGlwOiBhbnkpID0+IHtcclxuICAgIHRoaXMub25DaGVja2VkQ2hpcC5lbWl0KGNoaXApXHJcbiAgfVxyXG5cclxuICBvbkVkaXRDaGlwKGNoaXApIHtcclxuICAgIGlmIChjaGlwLnZhbHVlID09PSB0aGlzLmN1cnJlbnRDaGlwKSB7XHJcbiAgICAgIHRoaXMuY3VycmVudENoaXAgPSBcIlwiXHJcbiAgICAgIHRoaXMucHJldlZhbHVlID0gXCJcIlxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5jdXJyZW50Q2hpcCA9IGNoaXAudmFsdWU7XHJcbiAgICAgIHRoaXMucHJldlZhbHVlID0gY2hpcC52YWx1ZVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0IGNoaXBzKCkgeyByZXR1cm4gdGhpcy5jaGlwQ29udHJvbC52YWx1ZTsgfVxyXG5cclxuICBjaGVja2VkRGVmYXVsdCh2YWx1ZSkge1xyXG4gICAgdGhpcy5vbkNoZWNrZWREZWZhdWx0LmVtaXQodmFsdWUpXHJcbiAgfVxyXG5cclxuICBvblNob3dDb25kaXRpb24oZXZlbnQgPSBudWxsKSB7XHJcbiAgICBpZiAoZXZlbnQpIHtcclxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxyXG4gICAgfVxyXG4gICAgdGhpcy5zaG93Q29uZGl0aW9uID0gIXRoaXMuc2hvd0NvbmRpdGlvblxyXG4gIH1cclxuXHJcbiAgLy8gY2hlY2tlZChsb2NhdGlvblZhbHVlLHZhbHVlKXtcclxuICAvLyAgIHJldHVybiBsb2NhdGlvblZhbHVlLmluY2x1ZGVzKHZhbHVlKVxyXG4gIC8vIH1cclxuXHJcbiAgZWRpdEJMb2NrKGV2ZW50KSB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgdGhpcy5vbkVkaXRCbG9jay5lbWl0KHRydWUpO1xyXG4gIH1cclxuXHJcbn1cclxuIiwiPGRpdiBjbGFzcz1cImZpZWxkLWl0ZW1cIiAqbmdJZj1cIiFmaWVsZC5mb3Jtc1wiPlxyXG4gIDxidXR0b24gY2xhc3M9XCJ0cmFuc3BhcmVudC1idXR0b24gc2V0dGluZ1wiIG1hdC1yYWlzZWQtYnV0dG9uIChjbGljayk9XCJlZGl0QkxvY2soJGV2ZW50KVwiPlxyXG4gICAgPG1hdC1pY29uIGNsYXNzPVwic2V0dGluZy1pY29uXCI+c2V0dGluZ3M8L21hdC1pY29uPlxyXG4gIDwvYnV0dG9uPlxyXG4gIDxuZy1jb250YWluZXIgW25nU3dpdGNoXT1cImZpZWxkLnR5cGVcIj5cclxuICAgIDxkaXYgKm5nU3dpdGNoQ2FzZT1cIidjaGVja2JveCdcIiBjbGFzcz1cImZsZXgtYXV0byB3LTMwIGZpZWxkLXNpemVcIj5cclxuICAgICAgPGRpdiAqbmdTd2l0Y2hDYXNlPVwiJ2NoZWNrYm94J1wiIGNsYXNzPVwiZmxleC1hdXRvIHctMzAgZmllbGQtc2l6ZVwiPlxyXG4gICAgICAgIDxtYXQtY2hlY2tib3hcclxuICAgICAgICAgIGNsYXNzPVwiZm9ybS1maWVsZFwiXHJcbiAgICAgICAgICBbKG5nTW9kZWwpXT1cImZpZWxkLnZhbHVlXCJcclxuICAgICAgICAgIFtuZ01vZGVsT3B0aW9uc109XCJ7IHN0YW5kYWxvbmU6IHRydWUgfVwiXHJcbiAgICAgICAgICBbbmdTdHlsZV09XCJmaWVsZC5zZWxlY3RvciAmJiB7IGRpc3BsYXk6ICdpbmluZS1ibG9jaycgfVwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge3sgZmllbGQubGFiZWwgfX1cclxuICAgICAgICA8L21hdC1jaGVja2JveD5cclxuICAgICAgICA8bWF0LXNlbGVjdFxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJDb21wYW55XCJcclxuICAgICAgICAgIFsobmdNb2RlbCldPVwiZmllbGQuc2VsZWN0b3IudmFsdWVcIlxyXG4gICAgICAgICAgW25nTW9kZWxPcHRpb25zXT1cInsgc3RhbmRhbG9uZTogdHJ1ZSB9XCJcclxuICAgICAgICAgICpuZ0lmPVwiZmllbGQuc2VsZWN0b3JcIlxyXG4gICAgICAgICAgc3R5bGU9XCJkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IHdpZHRoOiA1MCVcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxtYXQtb3B0aW9uICpuZ0Zvcj1cImxldCBzZWxlY3Qgb2YgZmllbGQuc2VsZWN0b3IuZGVmYXVsdFZhbHVlXCIgW3ZhbHVlXT1cInNlbGVjdC52YWx1ZVwiPiB7eyBzZWxlY3QudmFsdWUgfX08L21hdC1vcHRpb24+XHJcbiAgICAgICAgPC9tYXQtc2VsZWN0PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiAqbmdTd2l0Y2hDYXNlPVwiJ2NoZWNrYm94X211bHRpcGxlJ1wiIGNsYXNzPVwiZmxleC1hdXRvIHctMzAgZmllbGQtc2l6ZVwiPlxyXG4gICAgICA8bGFiZWw+e3sgZmllbGQubGFiZWwgfX08L2xhYmVsPlxyXG4gICAgICA8ZGl2IHN0eWxlPVwibWFyZ2luLXRvcDogMjBweFwiPlxyXG4gICAgICAgIDxtYXQtY2hlY2tib3hcclxuICAgICAgICAgIGNsYXNzPVwiZm9ybS1maWVsZFwiXHJcbiAgICAgICAgICBzdHlsZT1cImRpc3BsYXk6IGJsb2NrOyBtYXJnaW4tYm90dG9tOiA1cHg7IG1hcmdpbi10b3A6IDEwcHhcIlxyXG4gICAgICAgICAgKm5nRm9yPVwibGV0IG9wdCBvZiBmaWVsZC5kZWZhdWx0VmFsdWVcIlxyXG4gICAgICAgICAgW2NoZWNrZWRdPVwib3B0LmNoZWNrZWRcIlxyXG4gICAgICAgICAgWyhuZ01vZGVsKV09XCJvcHQuY2hlY2tlZFwiXHJcbiAgICAgICAgICBbbmdNb2RlbE9wdGlvbnNdPVwieyBzdGFuZGFsb25lOiB0cnVlIH1cIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIHt7IG9wdC52YWx1ZSB9fVxyXG4gICAgICAgIDwvbWF0LWNoZWNrYm94PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiAqbmdTd2l0Y2hDYXNlPVwiJ3JhZGlvJ1wiIGNsYXNzPVwiZmxleC1hdXRvIHctMzAgZmllbGQtc2l6ZVwiPlxyXG4gICAgICA8bGFiZWwgc3R5bGU9XCJkaXNwbGF5OiBibG9ja1wiPiB7eyBmaWVsZC5sYWJlbCB9fSA8L2xhYmVsPlxyXG4gICAgICA8bWF0LXJhZGlvLWdyb3VwXHJcbiAgICAgICAgY2xhc3M9XCJmb3JtLWZpZWxkIHJhZGlvLWdyb3VwIGZpZWxkLXNpemVcIlxyXG4gICAgICAgIFsobmdNb2RlbCldPVwiZmllbGQudmFsdWVcIlxyXG4gICAgICAgIFtyZXF1aXJlZF09XCJmaWVsZC5pc01hbmRhdG9yeVwiXHJcbiAgICAgICAgYXJpYS1sYWJlbD1cIlNlbGVjdCBhbiBvcHRpb25cIlxyXG4gICAgICA+XHJcbiAgICAgICAgPG1hdC1yYWRpby1idXR0b24gKm5nRm9yPVwibGV0IG9wdCBvZiBmaWVsZC5kZWZhdWx0VmFsdWVcIiBbdmFsdWVdPVwib3B0LnZhbHVlXCI+e3sgb3B0LnZhbHVlIH19IDwvbWF0LXJhZGlvLWJ1dHRvbj5cclxuICAgICAgPC9tYXQtcmFkaW8tZ3JvdXA+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgKm5nU3dpdGNoQ2FzZT1cIidzZWxlY3QnXCIgY2xhc3M9XCJmbGV4LWF1dG8gdy0zMCBmaWVsZC1zaXplXCI+XHJcbiAgICAgIDxtYXQtZm9ybS1maWVsZCBjbGFzcz1cIm1hdC1zZWxlY3QgZmxleC1hdXRvIHctMzAgZmllbGQtc2l6ZVwiIGFwcGVhcmFuY2U9XCJvdXRsaW5lXCI+XHJcbiAgICAgICAgPG1hdC1sYWJlbD4ge3sgZmllbGQubGFiZWwgfX0gPC9tYXQtbGFiZWw+XHJcbiAgICAgICAgPG1hdC1zZWxlY3QgWyhuZ01vZGVsKV09XCJmaWVsZC52YWx1ZVwiIFtuZ01vZGVsT3B0aW9uc109XCJ7IHN0YW5kYWxvbmU6IHRydWUgfVwiPlxyXG4gICAgICAgICAgPG1hdC1vcHRpb24gKm5nRm9yPVwibGV0IG9wdCBvZiBmaWVsZC5kZWZhdWx0VmFsdWVcIiBbdmFsdWVdPVwib3B0LnZhbHVlXCI+e3sgb3B0LnZhbHVlIH19PC9tYXQtb3B0aW9uPlxyXG4gICAgICAgIDwvbWF0LXNlbGVjdD5cclxuICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgIDwvZGl2PlxyXG4gICAgPG1hdC1mb3JtLWZpZWxkICpuZ1N3aXRjaERlZmF1bHQgY2xhc3M9XCJmb3JtLWZpZWxkIGZpZWxkLXNpemVcIiBhcHBlYXJhbmNlPVwib3V0bGluZVwiPlxyXG4gICAgICA8bWF0LWxhYmVsPnt7IGZpZWxkLmxhYmVsIH19PC9tYXQtbGFiZWw+XHJcbiAgICAgIDxpbnB1dCBbdHlwZV09XCJmaWVsZC50eXBlXCIgbWF0SW5wdXQgW25nTW9kZWxPcHRpb25zXT1cInsgc3RhbmRhbG9uZTogdHJ1ZSB9XCIgWyhuZ01vZGVsKV09XCJmaWVsZC52YWx1ZVwiIHBsYWNlaG9sZGVyPVwiXCIgLz5cclxuICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgPC9uZy1jb250YWluZXI+XHJcbjwvZGl2PlxyXG5cclxuPG5nLWNvbnRlbnQgc2VsZWN0PVwiLmNoaWxkXCI+PC9uZy1jb250ZW50PlxyXG4iXX0=