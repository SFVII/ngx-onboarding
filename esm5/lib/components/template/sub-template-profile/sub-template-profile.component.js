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
function SubTemplateProfileComponent_div_0_div_5_mat_select_3_mat_option_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 13);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var select_r771 = ctx.$implicit;
    i0.ɵɵproperty("value", select_r771.value);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", select_r771.value, " ");
} }
var _c0 = function () { return { standalone: true }; };
function SubTemplateProfileComponent_div_0_div_5_mat_select_3_Template(rf, ctx) { if (rf & 1) {
    var _r773 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-select", 11);
    i0.ɵɵlistener("ngModelChange", function SubTemplateProfileComponent_div_0_div_5_mat_select_3_Template_mat_select_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r773); var ctx_r772 = i0.ɵɵnextContext(3); return ctx_r772.field.selector.value = $event; });
    i0.ɵɵtemplate(1, SubTemplateProfileComponent_div_0_div_5_mat_select_3_mat_option_1_Template, 2, 2, "mat-option", 12);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r769 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("ngModel", ctx_r769.field.selector.value)("ngModelOptions", i0.ɵɵpureFunction0(3, _c0));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r769.field.selector.defaultValue);
} }
var _c1 = function () { return { display: "inine-block" }; };
function SubTemplateProfileComponent_div_0_div_5_Template(rf, ctx) { if (rf & 1) {
    var _r775 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 8);
    i0.ɵɵelementStart(1, "mat-checkbox", 9);
    i0.ɵɵlistener("ngModelChange", function SubTemplateProfileComponent_div_0_div_5_Template_mat_checkbox_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r775); var ctx_r774 = i0.ɵɵnextContext(2); return ctx_r774.field.value = $event; });
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, SubTemplateProfileComponent_div_0_div_5_mat_select_3_Template, 2, 4, "mat-select", 10);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r764 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", ctx_r764.field.value)("ngModelOptions", i0.ɵɵpureFunction0(5, _c0))("ngStyle", ctx_r764.field.selector && i0.ɵɵpureFunction0(6, _c1));
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r764.field.label, " ");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r764.field.selector);
} }
function SubTemplateProfileComponent_div_0_div_6_mat_checkbox_4_Template(rf, ctx) { if (rf & 1) {
    var _r779 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-checkbox", 16);
    i0.ɵɵlistener("ngModelChange", function SubTemplateProfileComponent_div_0_div_6_mat_checkbox_4_Template_mat_checkbox_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r779); var opt_r777 = ctx.$implicit; return opt_r777.checked = $event; });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var opt_r777 = ctx.$implicit;
    i0.ɵɵproperty("checked", opt_r777.checked)("ngModel", opt_r777.checked)("ngModelOptions", i0.ɵɵpureFunction0(4, _c0));
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", opt_r777.value, " ");
} }
function SubTemplateProfileComponent_div_0_div_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 8);
    i0.ɵɵelementStart(1, "label");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 14);
    i0.ɵɵtemplate(4, SubTemplateProfileComponent_div_0_div_6_mat_checkbox_4_Template, 2, 5, "mat-checkbox", 15);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r765 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r765.field.label);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r765.field.defaultValue);
} }
function SubTemplateProfileComponent_div_0_div_7_mat_radio_button_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-radio-button", 13);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var opt_r781 = ctx.$implicit;
    i0.ɵɵproperty("value", opt_r781.value);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1("", opt_r781.value, " ");
} }
function SubTemplateProfileComponent_div_0_div_7_Template(rf, ctx) { if (rf & 1) {
    var _r783 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 8);
    i0.ɵɵelementStart(1, "label", 17);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "mat-radio-group", 18);
    i0.ɵɵlistener("ngModelChange", function SubTemplateProfileComponent_div_0_div_7_Template_mat_radio_group_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r783); var ctx_r782 = i0.ɵɵnextContext(2); return ctx_r782.field.value = $event; });
    i0.ɵɵtemplate(4, SubTemplateProfileComponent_div_0_div_7_mat_radio_button_4_Template, 2, 2, "mat-radio-button", 12);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r766 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r766.field.label, " ");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", ctx_r766.field.value)("required", ctx_r766.field.isMandatory);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r766.field.defaultValue);
} }
function SubTemplateProfileComponent_div_0_div_8_mat_option_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 13);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var opt_r785 = ctx.$implicit;
    i0.ɵɵproperty("value", opt_r785.value);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(opt_r785.value);
} }
function SubTemplateProfileComponent_div_0_div_8_Template(rf, ctx) { if (rf & 1) {
    var _r787 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 19);
    i0.ɵɵelementStart(1, "mat-form-field", 20);
    i0.ɵɵelementStart(2, "mat-label");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "mat-select", 21);
    i0.ɵɵlistener("ngModelChange", function SubTemplateProfileComponent_div_0_div_8_Template_mat_select_ngModelChange_4_listener($event) { i0.ɵɵrestoreView(_r787); var ctx_r786 = i0.ɵɵnextContext(2); return ctx_r786.field.value = $event; });
    i0.ɵɵtemplate(5, SubTemplateProfileComponent_div_0_div_8_mat_option_5_Template, 2, 2, "mat-option", 12);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r767 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", ctx_r767.field.label, " ");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", ctx_r767.field.value)("ngModelOptions", i0.ɵɵpureFunction0(4, _c0));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r767.field.defaultValue);
} }
function SubTemplateProfileComponent_div_0_mat_form_field_9_Template(rf, ctx) { if (rf & 1) {
    var _r789 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-form-field", 22);
    i0.ɵɵelementStart(1, "mat-label");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "input", 23);
    i0.ɵɵlistener("ngModelChange", function SubTemplateProfileComponent_div_0_mat_form_field_9_Template_input_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r789); var ctx_r788 = i0.ɵɵnextContext(2); return ctx_r788.field.value = $event; });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r768 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r768.field.label);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("type", ctx_r768.field.type)("ngModelOptions", i0.ɵɵpureFunction0(4, _c0))("ngModel", ctx_r768.field.value);
} }
function SubTemplateProfileComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    var _r791 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 1);
    i0.ɵɵelementStart(1, "button", 2);
    i0.ɵɵlistener("click", function SubTemplateProfileComponent_div_0_Template_button_click_1_listener($event) { i0.ɵɵrestoreView(_r791); var ctx_r790 = i0.ɵɵnextContext(); return ctx_r790.editBLock($event); });
    i0.ɵɵelementStart(2, "mat-icon", 3);
    i0.ɵɵtext(3, "settings");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerStart(4, 4);
    i0.ɵɵtemplate(5, SubTemplateProfileComponent_div_0_div_5_Template, 4, 7, "div", 5);
    i0.ɵɵtemplate(6, SubTemplateProfileComponent_div_0_div_6_Template, 5, 2, "div", 5);
    i0.ɵɵtemplate(7, SubTemplateProfileComponent_div_0_div_7_Template, 5, 4, "div", 5);
    i0.ɵɵtemplate(8, SubTemplateProfileComponent_div_0_div_8_Template, 6, 5, "div", 6);
    i0.ɵɵtemplate(9, SubTemplateProfileComponent_div_0_mat_form_field_9_Template, 4, 5, "mat-form-field", 7);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r763 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngSwitch", ctx_r763.field.type);
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
    SubTemplateProfileComponent.ɵcmp = i0.ɵɵdefineComponent({ type: SubTemplateProfileComponent, selectors: [["lib-sub-category"]], inputs: { field: "field", length: "length", i: "i", j: "j", conditionData: "conditionData" }, outputs: { onAddKeywordFromInput: "onAddKeywordFromInput", onKeyPress: "onKeyPress", onDrop: "onDrop", onAddNewField: "onAddNewField", onRemoveField: "onRemoveField", onChangeType: "onChangeType", onRemoveKeyword: "onRemoveKeyword", onAddNewSubLevelField: "onAddNewSubLevelField", onExpendMore: "onExpendMore", onChangeLabel: "onChangeLabel", onCheckedChip: "onCheckedChip", onCheckedDefault: "onCheckedDefault", onGetConditionValues: "onGetConditionValues", onEditBlock: "onEditBlock" }, ngContentSelectors: _c3, decls: 2, vars: 1, consts: [["class", "field-item", 4, "ngIf"], [1, "field-item"], ["mat-raised-button", "", 1, "transparent-button", "setting", 3, "click"], [1, "setting-icon"], [3, "ngSwitch"], ["class", "flex-auto field-size", 4, "ngSwitchCase"], ["style", "width: 88%;", "class", "flex-auto field-size", 4, "ngSwitchCase"], ["class", "form-field field-size", "appearance", "outline", 4, "ngSwitchDefault"], [1, "flex-auto", "field-size"], [1, "form-field", 3, "ngModel", "ngModelOptions", "ngStyle", "ngModelChange"], ["placeholder", "Company", "style", "display: inline-block; width: 50%", 3, "ngModel", "ngModelOptions", "ngModelChange", 4, "ngIf"], ["placeholder", "Company", 2, "display", "inline-block", "width", "50%", 3, "ngModel", "ngModelOptions", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], [2, "margin-top", "20px"], ["class", "form-field", "style", "display: block; margin-bottom: 5px; margin-top: 10px", 3, "checked", "ngModel", "ngModelOptions", "ngModelChange", 4, "ngFor", "ngForOf"], [1, "form-field", 2, "display", "block", "margin-bottom", "5px", "margin-top", "10px", 3, "checked", "ngModel", "ngModelOptions", "ngModelChange"], [2, "display", "block"], ["aria-label", "Select an option", 1, "form-field", "radio-group", "field-size", 3, "ngModel", "required", "ngModelChange"], [1, "flex-auto", "field-size", 2, "width", "88%"], ["appearance", "outline", 1, "mat-select", "flex-auto", "field-size"], [3, "ngModel", "ngModelOptions", "ngModelChange"], ["appearance", "outline", 1, "form-field", "field-size"], ["matInput", "", "placeholder", "", 3, "type", "ngModelOptions", "ngModel", "ngModelChange"]], template: function SubTemplateProfileComponent_Template(rf, ctx) { if (rf & 1) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3ViLXRlbXBsYXRlLXByb2ZpbGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vb25ib2FyZGluZy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3RlbXBsYXRlL3N1Yi10ZW1wbGF0ZS1wcm9maWxlL3N1Yi10ZW1wbGF0ZS1wcm9maWxlLmNvbXBvbmVudC50cyIsImxpYi9jb21wb25lbnRzL3RlbXBsYXRlL3N1Yi10ZW1wbGF0ZS1wcm9maWxlL3N1Yi10ZW1wbGF0ZS1wcm9maWxlLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDL0UsT0FBTyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDaEUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7Ozs7Ozs7Ozs7OztJQ1VyQyxzQ0FBdUY7SUFBQSxZQUN2RjtJQUFBLGlCQUFhOzs7SUFEa0QseUNBQXNCO0lBQUUsZUFDdkY7SUFEdUYsa0RBQ3ZGOzs7OztJQUhGLHNDQUVFO0lBRmdDLGtRQUFrQztJQUVsRSxvSEFBdUY7SUFFekYsaUJBQWE7OztJQUpxQix1REFBa0MsOENBQUE7SUFFdEQsZUFBa0Q7SUFBbEQsOERBQWtEOzs7OztJQVBsRSw4QkFDRTtJQUFBLHVDQUVFO0lBRitCLDhPQUF5QjtJQUV4RCxZQUNGO0lBQUEsaUJBQWU7SUFDZix1R0FFRTtJQUdKLGlCQUFNOzs7SUFUNkIsZUFBeUI7SUFBekIsOENBQXlCLDhDQUFBLGtFQUFBO0lBRXhELGVBQ0Y7SUFERSxxREFDRjtJQUVFLGVBQXNCO0lBQXRCLDhDQUFzQjs7OztJQVF0Qix3Q0FHRTtJQUYrRCxtUEFBeUI7SUFFeEYsWUFDRjtJQUFBLGlCQUFlOzs7SUFIMEIsMENBQXVCLDZCQUFBLDhDQUFBO0lBRTlE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RUFDRTtZQWdERixrQkFBNEI7O1lBakRKLHVDQUFvQjs7c0NEQTVDO0NBOEhDLEFBMUhELElBMEhDO1NBckhZLDJCQUEyQjtrREFBM0IsMkJBQTJCO2NBTHZDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsa0JBQWtCO2dCQUM1QixXQUFXLEVBQUUsdUNBQXVDO2dCQUNwRCxTQUFTLEVBQUUsQ0FBQyx1Q0FBdUMsQ0FBQzthQUNyRDs7a0JBRUUsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsTUFBTTs7a0JBQ04sTUFBTTs7a0JBQ04sTUFBTTs7a0JBQ04sTUFBTTs7a0JBQ04sTUFBTTs7a0JBQ04sTUFBTTs7a0JBQ04sTUFBTTs7a0JBQ04sTUFBTTs7a0JBQ04sTUFBTTs7a0JBQ04sTUFBTTs7a0JBQ04sTUFBTTs7a0JBQ04sTUFBTTs7a0JBQ04sTUFBTTs7a0JBQ04sTUFBTTs7a0JBQ04sS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRU5URVIsIENPTU1BLCBTRU1JQ09MT04gfSBmcm9tICdAYW5ndWxhci9jZGsva2V5Y29kZXMnO1xyXG5pbXBvcnQgeyBGb3JtQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbGliLXN1Yi1jYXRlZ29yeScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3N1Yi10ZW1wbGF0ZS1wcm9maWxlLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9zdWItdGVtcGxhdGUtcHJvZmlsZS5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTdWJUZW1wbGF0ZVByb2ZpbGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBJbnB1dCgpIGZpZWxkOiBhbnlcclxuICBASW5wdXQoKSBsZW5ndGg6IGFueVxyXG4gIEBJbnB1dCgpIGk6IGFueVxyXG4gIEBJbnB1dCgpIGo6IGFueVxyXG4gIEBPdXRwdXQoKSBvbkFkZEtleXdvcmRGcm9tSW5wdXQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKVxyXG4gIEBPdXRwdXQoKSBvbktleVByZXNzID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KClcclxuICBAT3V0cHV0KCkgb25Ecm9wID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KClcclxuICBAT3V0cHV0KCkgb25BZGROZXdGaWVsZCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpXHJcbiAgQE91dHB1dCgpIG9uUmVtb3ZlRmllbGQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKVxyXG4gIEBPdXRwdXQoKSBvbkNoYW5nZVR5cGUgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKVxyXG4gIEBPdXRwdXQoKSBvblJlbW92ZUtleXdvcmQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKVxyXG4gIEBPdXRwdXQoKSBvbkFkZE5ld1N1YkxldmVsRmllbGQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKVxyXG4gIEBPdXRwdXQoKSBvbkV4cGVuZE1vcmUgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKVxyXG4gIEBPdXRwdXQoKSBvbkNoYW5nZUxhYmVsID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KClcclxuICBAT3V0cHV0KCkgb25DaGVja2VkQ2hpcCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpXHJcbiAgQE91dHB1dCgpIG9uQ2hlY2tlZERlZmF1bHQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKVxyXG4gIEBPdXRwdXQoKSBvbkdldENvbmRpdGlvblZhbHVlcyA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpXHJcbiAgQE91dHB1dCgpIG9uRWRpdEJsb2NrID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KClcclxuICBASW5wdXQoKSBjb25kaXRpb25EYXRhID0gW11cclxuXHJcbiAgY2hpcENvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2wobmV3IFNldCgpKTtcclxuXHJcbiAgc2VwYXJhdG9yS2V5c0NvZGVzID0gW0VOVEVSLCBDT01NQSwgU0VNSUNPTE9OXTtcclxuICBjdXJyZW50Q2hpcCA9IFwiXCJcclxuICBwcmV2VmFsdWUgPSBcIlwiXHJcbiAgc2hvd0NvbmRpdGlvbiA9IGZhbHNlXHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgfVxyXG5cclxuICBkcm9wKGV2ZW50KSB7XHJcbiAgICB0aGlzLm9uRHJvcC5lbWl0KGV2ZW50KVxyXG4gIH1cclxuXHJcbiAgYWRkS2V5d29yZEZyb21JbnB1dChldmVudCwgaSwgaikge1xyXG4gICAgdGhpcy5vbkFkZEtleXdvcmRGcm9tSW5wdXQuZW1pdCh7IGV2ZW50LCBwcmV2OiB0aGlzLnByZXZWYWx1ZSwgaSwgaiB9KTtcclxuICB9XHJcblxyXG4gIGtleVVwKGV2ZW50LCBpLCBqKSB7XHJcbiAgICB0aGlzLm9uS2V5UHJlc3MuZW1pdCh7IGV2ZW50LCBpLCBqIH0pXHJcbiAgfVxyXG5cclxuICBhZGROZXdGaWVsZChldmVudCwgaSkge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxyXG4gICAgdGhpcy5vbkFkZE5ld0ZpZWxkLmVtaXQoeyBldmVudCwgaSB9KVxyXG4gIH1cclxuXHJcbiAgcmVtb3ZlRmllbGQoZXZlbnQsIGksIGopIHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcclxuICAgIHRoaXMub25SZW1vdmVGaWVsZC5lbWl0KHsgaSwgaiB9KVxyXG4gIH1cclxuXHJcbiAgY2hhbmdlVHlwZSh0eXBlLCBpLCBqKSB7XHJcbiAgICB0aGlzLm9uQ2hhbmdlVHlwZS5lbWl0KHsgdHlwZSwgaSwgaiB9KVxyXG4gIH1cclxuXHJcbiAgcmVtb3ZlS2V5d29yZChldmVudCwgaSwgaikge1xyXG4gICAgdGhpcy5vblJlbW92ZUtleXdvcmQuZW1pdCh7IGV2ZW50LCBpLCBqIH0pXHJcbiAgfVxyXG4gIGFkZE5ld1N1YkxldmVsRmllbGQoZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICB0aGlzLm9uQWRkTmV3U3ViTGV2ZWxGaWVsZC5lbWl0KHRydWUpXHJcbiAgfVxyXG4gIGV4cGVuZE1vcmUoZSwgZmllbGQpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgdGhpcy5vbkV4cGVuZE1vcmUuZW1pdCh7IGV4cGFuZDogdHJ1ZSwgZmllbGQgfSlcclxuICB9XHJcbiAgZ2V0Q29uZGl0aW9uVmFsdWVzKCkge1xyXG4gICAgdGhpcy5vbkdldENvbmRpdGlvblZhbHVlcy5lbWl0KHRydWUpXHJcbiAgfVxyXG5cclxuICBpbmdvcmVEZWZhdWx0QWN0aW9uKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gIH1cclxuXHJcbiAgY2hhbmdlTGFiZWwobGFiZWwsIGtleSkge1xyXG4gICAgdGhpcy5vbkNoYW5nZUxhYmVsLmVtaXQoeyBsYWJlbCwga2V5IH0pXHJcbiAgfVxyXG5cclxuICB0b2dnbGVDaGlwID0gKGNoaXA6IGFueSkgPT4ge1xyXG4gICAgdGhpcy5vbkNoZWNrZWRDaGlwLmVtaXQoY2hpcClcclxuICB9XHJcblxyXG4gIG9uRWRpdENoaXAoY2hpcCkge1xyXG4gICAgaWYgKGNoaXAudmFsdWUgPT09IHRoaXMuY3VycmVudENoaXApIHtcclxuICAgICAgdGhpcy5jdXJyZW50Q2hpcCA9IFwiXCJcclxuICAgICAgdGhpcy5wcmV2VmFsdWUgPSBcIlwiXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmN1cnJlbnRDaGlwID0gY2hpcC52YWx1ZTtcclxuICAgICAgdGhpcy5wcmV2VmFsdWUgPSBjaGlwLnZhbHVlXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXQgY2hpcHMoKSB7IHJldHVybiB0aGlzLmNoaXBDb250cm9sLnZhbHVlOyB9XHJcblxyXG4gIGNoZWNrZWREZWZhdWx0KHZhbHVlKSB7XHJcbiAgICB0aGlzLm9uQ2hlY2tlZERlZmF1bHQuZW1pdCh2YWx1ZSlcclxuICB9XHJcblxyXG4gIG9uU2hvd0NvbmRpdGlvbihldmVudCA9IG51bGwpIHtcclxuICAgIGlmIChldmVudCkge1xyXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICB9XHJcbiAgICB0aGlzLnNob3dDb25kaXRpb24gPSAhdGhpcy5zaG93Q29uZGl0aW9uXHJcbiAgfVxyXG5cclxuICAvLyBjaGVja2VkKGxvY2F0aW9uVmFsdWUsdmFsdWUpe1xyXG4gIC8vICAgcmV0dXJuIGxvY2F0aW9uVmFsdWUuaW5jbHVkZXModmFsdWUpXHJcbiAgLy8gfVxyXG5cclxuICBlZGl0QkxvY2soZXZlbnQpIHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB0aGlzLm9uRWRpdEJsb2NrLmVtaXQodHJ1ZSk7XHJcbiAgfVxyXG5cclxufVxyXG4iLCI8ZGl2IGNsYXNzPVwiZmllbGQtaXRlbVwiICpuZ0lmPVwiIWZpZWxkLmZvcm1zXCI+XHJcbiAgPGJ1dHRvbiBjbGFzcz1cInRyYW5zcGFyZW50LWJ1dHRvbiBzZXR0aW5nXCIgbWF0LXJhaXNlZC1idXR0b24gKGNsaWNrKT1cImVkaXRCTG9jaygkZXZlbnQpXCI+XHJcbiAgICA8bWF0LWljb24gY2xhc3M9XCJzZXR0aW5nLWljb25cIj5zZXR0aW5nczwvbWF0LWljb24+XHJcbiAgPC9idXR0b24+XHJcbiAgPG5nLWNvbnRhaW5lciBbbmdTd2l0Y2hdPVwiZmllbGQudHlwZVwiPlxyXG4gICAgPGRpdiAqbmdTd2l0Y2hDYXNlPVwiJ2NoZWNrYm94J1wiIGNsYXNzPVwiZmxleC1hdXRvIGZpZWxkLXNpemVcIj5cclxuICAgICAgPG1hdC1jaGVja2JveCBjbGFzcz1cImZvcm0tZmllbGRcIiBbKG5nTW9kZWwpXT1cImZpZWxkLnZhbHVlXCIgW25nTW9kZWxPcHRpb25zXT1cInsgc3RhbmRhbG9uZTogdHJ1ZSB9XCJcclxuICAgICAgICBbbmdTdHlsZV09XCJmaWVsZC5zZWxlY3RvciAmJiB7IGRpc3BsYXk6ICdpbmluZS1ibG9jaycgfVwiPlxyXG4gICAgICAgIHt7IGZpZWxkLmxhYmVsIH19XHJcbiAgICAgIDwvbWF0LWNoZWNrYm94PlxyXG4gICAgICA8bWF0LXNlbGVjdCBwbGFjZWhvbGRlcj1cIkNvbXBhbnlcIiBbKG5nTW9kZWwpXT1cImZpZWxkLnNlbGVjdG9yLnZhbHVlXCIgW25nTW9kZWxPcHRpb25zXT1cInsgc3RhbmRhbG9uZTogdHJ1ZSB9XCJcclxuICAgICAgICAqbmdJZj1cImZpZWxkLnNlbGVjdG9yXCIgc3R5bGU9XCJkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IHdpZHRoOiA1MCVcIj5cclxuICAgICAgICA8bWF0LW9wdGlvbiAqbmdGb3I9XCJsZXQgc2VsZWN0IG9mIGZpZWxkLnNlbGVjdG9yLmRlZmF1bHRWYWx1ZVwiIFt2YWx1ZV09XCJzZWxlY3QudmFsdWVcIj4ge3sgc2VsZWN0LnZhbHVlIH19XHJcbiAgICAgICAgPC9tYXQtb3B0aW9uPlxyXG4gICAgICA8L21hdC1zZWxlY3Q+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgKm5nU3dpdGNoQ2FzZT1cIidjaGVja2JveF9tdWx0aXBsZSdcIiBjbGFzcz1cImZsZXgtYXV0byBmaWVsZC1zaXplXCI+XHJcbiAgICAgIDxsYWJlbD57eyBmaWVsZC5sYWJlbCB9fTwvbGFiZWw+XHJcbiAgICAgIDxkaXYgc3R5bGU9XCJtYXJnaW4tdG9wOiAyMHB4XCI+XHJcbiAgICAgICAgPG1hdC1jaGVja2JveCBjbGFzcz1cImZvcm0tZmllbGRcIiBzdHlsZT1cImRpc3BsYXk6IGJsb2NrOyBtYXJnaW4tYm90dG9tOiA1cHg7IG1hcmdpbi10b3A6IDEwcHhcIlxyXG4gICAgICAgICAgKm5nRm9yPVwibGV0IG9wdCBvZiBmaWVsZC5kZWZhdWx0VmFsdWVcIiBbY2hlY2tlZF09XCJvcHQuY2hlY2tlZFwiIFsobmdNb2RlbCldPVwib3B0LmNoZWNrZWRcIlxyXG4gICAgICAgICAgW25nTW9kZWxPcHRpb25zXT1cInsgc3RhbmRhbG9uZTogdHJ1ZSB9XCI+XHJcbiAgICAgICAgICB7eyBvcHQudmFsdWUgfX1cclxuICAgICAgICA8L21hdC1jaGVja2JveD5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgKm5nU3dpdGNoQ2FzZT1cIidyYWRpbydcIiBjbGFzcz1cImZsZXgtYXV0byBmaWVsZC1zaXplXCI+XHJcbiAgICAgIDxsYWJlbCBzdHlsZT1cImRpc3BsYXk6IGJsb2NrXCI+IHt7IGZpZWxkLmxhYmVsIH19IDwvbGFiZWw+XHJcbiAgICAgIDxtYXQtcmFkaW8tZ3JvdXAgY2xhc3M9XCJmb3JtLWZpZWxkIHJhZGlvLWdyb3VwIGZpZWxkLXNpemVcIiBbKG5nTW9kZWwpXT1cImZpZWxkLnZhbHVlXCJcclxuICAgICAgICBbcmVxdWlyZWRdPVwiZmllbGQuaXNNYW5kYXRvcnlcIiBhcmlhLWxhYmVsPVwiU2VsZWN0IGFuIG9wdGlvblwiPlxyXG4gICAgICAgIDxtYXQtcmFkaW8tYnV0dG9uICpuZ0Zvcj1cImxldCBvcHQgb2YgZmllbGQuZGVmYXVsdFZhbHVlXCIgW3ZhbHVlXT1cIm9wdC52YWx1ZVwiPnt7IG9wdC52YWx1ZSB9fSA8L21hdC1yYWRpby1idXR0b24+XHJcbiAgICAgIDwvbWF0LXJhZGlvLWdyb3VwPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IHN0eWxlPVwid2lkdGg6IDg4JTtcIiAqbmdTd2l0Y2hDYXNlPVwiJ3NlbGVjdCdcIiBjbGFzcz1cImZsZXgtYXV0byBmaWVsZC1zaXplXCI+XHJcbiAgICAgIDxtYXQtZm9ybS1maWVsZCBjbGFzcz1cIm1hdC1zZWxlY3QgZmxleC1hdXRvIGZpZWxkLXNpemVcIiBhcHBlYXJhbmNlPVwib3V0bGluZVwiPlxyXG4gICAgICAgIDxtYXQtbGFiZWw+IHt7IGZpZWxkLmxhYmVsIH19IDwvbWF0LWxhYmVsPlxyXG4gICAgICAgIDxtYXQtc2VsZWN0IFsobmdNb2RlbCldPVwiZmllbGQudmFsdWVcIiBbbmdNb2RlbE9wdGlvbnNdPVwieyBzdGFuZGFsb25lOiB0cnVlIH1cIj5cclxuICAgICAgICAgIDxtYXQtb3B0aW9uICpuZ0Zvcj1cImxldCBvcHQgb2YgZmllbGQuZGVmYXVsdFZhbHVlXCIgW3ZhbHVlXT1cIm9wdC52YWx1ZVwiPnt7IG9wdC52YWx1ZSB9fTwvbWF0LW9wdGlvbj5cclxuICAgICAgICA8L21hdC1zZWxlY3Q+XHJcbiAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxtYXQtZm9ybS1maWVsZCAqbmdTd2l0Y2hEZWZhdWx0IGNsYXNzPVwiZm9ybS1maWVsZCBmaWVsZC1zaXplXCIgYXBwZWFyYW5jZT1cIm91dGxpbmVcIj5cclxuICAgICAgPG1hdC1sYWJlbD57eyBmaWVsZC5sYWJlbCB9fTwvbWF0LWxhYmVsPlxyXG4gICAgICA8aW5wdXQgW3R5cGVdPVwiZmllbGQudHlwZVwiIG1hdElucHV0IFtuZ01vZGVsT3B0aW9uc109XCJ7IHN0YW5kYWxvbmU6IHRydWUgfVwiIFsobmdNb2RlbCldPVwiZmllbGQudmFsdWVcIlxyXG4gICAgICAgIHBsYWNlaG9sZGVyPVwiXCIgLz5cclxuICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgPC9uZy1jb250YWluZXI+XHJcbjwvZGl2PlxyXG5cclxuPG5nLWNvbnRlbnQgc2VsZWN0PVwiLmNoaWxkXCI+PC9uZy1jb250ZW50PiJdfQ==