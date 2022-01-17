import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ENTER, COMMA, SEMICOLON } from '@angular/cdk/keycodes';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/form-field";
import * as i2 from "@angular/material/input";
import * as i3 from "@angular/forms";
import * as i4 from "@angular/material/select";
import * as i5 from "@angular/material/core";
import * as i6 from "@angular/common";
import * as i7 from "@angular/material/checkbox";
import * as i8 from "@angular/material/button";
import * as i9 from "@angular/material/icon";
import * as i10 from "@angular/material/chips";
var _c0 = function () { return { standalone: true }; };
function SubCategoryComponent_div_30_Template(rf, ctx) { if (rf & 1) {
    var _r536 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 20);
    i0.ɵɵelementStart(1, "mat-checkbox", 21);
    i0.ɵɵlistener("ngModelChange", function SubCategoryComponent_div_30_Template_mat_checkbox_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r536); var ctx_r535 = i0.ɵɵnextContext(); return ctx_r535.field.value = $event; });
    i0.ɵɵtext(2, "Valeur ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r530 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", ctx_r530.field.value)("ngModelOptions", i0.ɵɵpureFunction0(2, _c0));
} }
function SubCategoryComponent_mat_form_field_31_mat_chip_5_Template(rf, ctx) { if (rf & 1) {
    var _r542 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-chip", 28);
    i0.ɵɵlistener("removed", function SubCategoryComponent_mat_form_field_31_mat_chip_5_Template_mat_chip_removed_0_listener() { i0.ɵɵrestoreView(_r542); var option_r540 = ctx.$implicit; var ctx_r541 = i0.ɵɵnextContext(2); return ctx_r541.removeKeyword(option_r540, ctx_r541.i, ctx_r541.j); });
    i0.ɵɵtext(1);
    i0.ɵɵelementStart(2, "mat-icon", 29);
    i0.ɵɵtext(3, "cancel");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var option_r540 = ctx.$implicit;
    i0.ɵɵproperty("selected", option_r540)("value", option_r540)("removable", true);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", option_r540, " ");
} }
function SubCategoryComponent_mat_form_field_31_Template(rf, ctx) { if (rf & 1) {
    var _r544 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-form-field", 22);
    i0.ɵɵelementStart(1, "mat-label");
    i0.ɵɵtext(2, " Valeur ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "mat-chip-list", 23, 24);
    i0.ɵɵtemplate(5, SubCategoryComponent_mat_form_field_31_mat_chip_5_Template, 4, 4, "mat-chip", 25);
    i0.ɵɵelementStart(6, "input", 26, 27);
    i0.ɵɵlistener("matChipInputTokenEnd", function SubCategoryComponent_mat_form_field_31_Template_input_matChipInputTokenEnd_6_listener($event) { i0.ɵɵrestoreView(_r544); var ctx_r543 = i0.ɵɵnextContext(); return ctx_r543.addKeywordFromInput($event, ctx_r543.i, ctx_r543.j); })("keyup", function SubCategoryComponent_mat_form_field_31_Template_input_keyup_6_listener($event) { i0.ɵɵrestoreView(_r544); var ctx_r545 = i0.ɵɵnextContext(); return ctx_r545.keyUp($event, ctx_r545.i, ctx_r545.j); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var _r537 = i0.ɵɵreference(4);
    var ctx_r531 = i0.ɵɵnextContext();
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngForOf", ctx_r531.field.defaultValue);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("matChipInputFor", _r537)("matChipInputAddOnBlur", true)("matChipInputSeparatorKeyCodes", ctx_r531.separatorKeysCodes);
} }
function SubCategoryComponent_mat_form_field_32_Template(rf, ctx) { if (rf & 1) {
    var _r547 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-form-field", 1);
    i0.ɵɵelementStart(1, "mat-label");
    i0.ɵɵtext(2, "Valeur");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "input", 30);
    i0.ɵɵlistener("ngModelChange", function SubCategoryComponent_mat_form_field_32_Template_input_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r547); var ctx_r546 = i0.ɵɵnextContext(); return ctx_r546.field.defaultValue = $event; });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r532 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("type", ctx_r532.field.type)("ngModelOptions", i0.ɵɵpureFunction0(3, _c0))("ngModel", ctx_r532.field.defaultValue);
} }
function SubCategoryComponent_mat_icon_39_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-icon");
    i0.ɵɵtext(1, "expand_less");
    i0.ɵɵelementEnd();
} }
function SubCategoryComponent_mat_icon_40_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-icon");
    i0.ɵɵtext(1, "expand_more");
    i0.ɵɵelementEnd();
} }
var _c1 = [[["", 8, "child"]]];
var _c2 = function () { return ["select", "radio"]; };
var _c3 = [".child"];
var SubCategoryComponent = /** @class */ (function () {
    function SubCategoryComponent() {
        this.onAddKeywordFromInput = new EventEmitter();
        this.onKeyPress = new EventEmitter();
        this.onDrop = new EventEmitter();
        this.onAddNewField = new EventEmitter();
        this.onRemoveField = new EventEmitter();
        this.onChangeType = new EventEmitter();
        this.onRemoveKeyword = new EventEmitter();
        this.onAddNewSubLevelField = new EventEmitter();
        this.onExpendMore = new EventEmitter();
        this.separatorKeysCodes = [ENTER, COMMA, SEMICOLON];
    }
    SubCategoryComponent.prototype.ngOnInit = function () {
    };
    SubCategoryComponent.prototype.drop = function (event) {
        this.onDrop.emit(event);
    };
    SubCategoryComponent.prototype.addKeywordFromInput = function (event, i, j) {
        this.onAddKeywordFromInput.emit({ event: event, i: i, j: j });
    };
    SubCategoryComponent.prototype.keyUp = function (event, i, j) {
        this.onKeyPress.emit({ event: event, i: i, j: j });
    };
    SubCategoryComponent.prototype.addNewField = function (event, i) {
        event.preventDefault();
        this.onAddNewField.emit({ event: event, i: i });
    };
    SubCategoryComponent.prototype.removeField = function (event, i, j) {
        event.preventDefault();
        this.onRemoveField.emit({ i: i, j: j });
    };
    SubCategoryComponent.prototype.changeType = function (type, i, j) {
        this.onChangeType.emit({ type: type, i: i, j: j });
    };
    SubCategoryComponent.prototype.removeKeyword = function (event, i, j) {
        this.onRemoveKeyword.emit({ event: event, i: i, j: j });
    };
    SubCategoryComponent.prototype.addNewSubLevelField = function (e) {
        e.preventDefault();
        this.onAddNewSubLevelField.emit(true);
    };
    SubCategoryComponent.prototype.expendMore = function (e, field) {
        e.preventDefault();
        this.onExpendMore.emit({ expand: true, field: field });
    };
    SubCategoryComponent.prototype.ingoreDefaultAction = function (e) {
        e.preventDefault();
    };
    SubCategoryComponent.ɵfac = function SubCategoryComponent_Factory(t) { return new (t || SubCategoryComponent)(); };
    SubCategoryComponent.ɵcmp = i0.ɵɵdefineComponent({ type: SubCategoryComponent, selectors: [["lib-sub-category"]], inputs: { field: "field", length: "length", i: "i", j: "j" }, outputs: { onAddKeywordFromInput: "onAddKeywordFromInput", onKeyPress: "onKeyPress", onDrop: "onDrop", onAddNewField: "onAddNewField", onRemoveField: "onRemoveField", onChangeType: "onChangeType", onRemoveKeyword: "onRemoveKeyword", onAddNewSubLevelField: "onAddNewSubLevelField", onExpendMore: "onExpendMore" }, ngContentSelectors: _c3, decls: 42, vars: 31, consts: [[1, "field-item"], ["appearance", "outline", 1, "form-field", "field-size"], ["type", "text", "matInput", "", "required", "", "placeholder", "", 3, "readonly", "ngModelOptions", "ngModel", "ngModelChange"], ["required", "", 3, "disabled", "ngModel", "ngModelOptions", "ngModelChange"], ["value", "text"], ["value", "radio"], ["value", "select"], ["value", "checkbox"], ["value", "email"], ["value", "password"], ["value", "date"], ["value", "phone"], [3, "ngSwitch"], ["class", "flex-auto w-30 field-size", 4, "ngSwitchCase"], ["class", "flex-auto w-30 field-size", "appearance", "outline", 4, "ngSwitchCase"], ["class", "form-field field-size", "appearance", "outline", 4, "ngSwitchDefault"], [1, "form-field", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["mat-mini-fab", "", "color", "success", 1, "transparent-button", 3, "disabled", "click"], ["mat-mini-fab", "", "color", "primary", 1, "expand-button", 3, "disabled", "click"], [4, "ngIf"], [1, "flex-auto", "w-30", "field-size"], [3, "ngModel", "ngModelOptions", "ngModelChange"], ["appearance", "outline", 1, "flex-auto", "w-30", "field-size"], ["aria-label", "Video keywords; let index=index", "multiple", ""], ["chipList", ""], ["style", "min-height: 25px;", 3, "selected", "value", "removable", "removed", 4, "ngFor", "ngForOf"], ["placeholder", "add...", 3, "matChipInputFor", "matChipInputAddOnBlur", "matChipInputSeparatorKeyCodes", "matChipInputTokenEnd", "keyup"], ["chipsInput", ""], [2, "min-height", "25px", 3, "selected", "value", "removable", "removed"], ["matChipRemove", ""], ["matInput", "", "placeholder", "", 3, "type", "ngModelOptions", "ngModel", "ngModelChange"]], template: function SubCategoryComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef(_c1);
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵelementStart(1, "mat-form-field", 1);
            i0.ɵɵelementStart(2, "mat-label");
            i0.ɵɵtext(3, "Label");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "input", 2);
            i0.ɵɵlistener("ngModelChange", function SubCategoryComponent_Template_input_ngModelChange_4_listener($event) { return ctx.field.label = $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "mat-form-field", 1);
            i0.ɵɵelementStart(6, "mat-label");
            i0.ɵɵtext(7, "Cl\u00E9 du champ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(8, "input", 2);
            i0.ɵɵlistener("ngModelChange", function SubCategoryComponent_Template_input_ngModelChange_8_listener($event) { return ctx.field.key = $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(9, "mat-form-field", 1);
            i0.ɵɵelementStart(10, "mat-label");
            i0.ɵɵtext(11, "Type");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(12, "mat-select", 3);
            i0.ɵɵlistener("ngModelChange", function SubCategoryComponent_Template_mat_select_ngModelChange_12_listener($event) { return ctx.field.type = $event; })("ngModelChange", function SubCategoryComponent_Template_mat_select_ngModelChange_12_listener() { return ctx.changeType(ctx.field.type, ctx.i, ctx.j); });
            i0.ɵɵelementStart(13, "mat-option", 4);
            i0.ɵɵtext(14, "Text");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(15, "mat-option", 5);
            i0.ɵɵtext(16, "Radio");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(17, "mat-option", 6);
            i0.ɵɵtext(18, "Selecteur");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(19, "mat-option", 7);
            i0.ɵɵtext(20, "Checkbox");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(21, "mat-option", 8);
            i0.ɵɵtext(22, "Email");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(23, "mat-option", 9);
            i0.ɵɵtext(24, "Password");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(25, "mat-option", 10);
            i0.ɵɵtext(26, "Date");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(27, "mat-option", 11);
            i0.ɵɵtext(28, "Phone");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementContainerStart(29, 12);
            i0.ɵɵtemplate(30, SubCategoryComponent_div_30_Template, 3, 3, "div", 13);
            i0.ɵɵtemplate(31, SubCategoryComponent_mat_form_field_31_Template, 8, 4, "mat-form-field", 14);
            i0.ɵɵtemplate(32, SubCategoryComponent_mat_form_field_32_Template, 4, 4, "mat-form-field", 15);
            i0.ɵɵelementContainerEnd();
            i0.ɵɵelementStart(33, "mat-checkbox", 16);
            i0.ɵɵlistener("ngModelChange", function SubCategoryComponent_Template_mat_checkbox_ngModelChange_33_listener($event) { return ctx.field.isMandatory = $event; });
            i0.ɵɵtext(34, " obligatoire ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(35, "button", 17);
            i0.ɵɵlistener("click", function SubCategoryComponent_Template_button_click_35_listener($event) { return ctx.addNewSubLevelField($event); });
            i0.ɵɵelementStart(36, "mat-icon");
            i0.ɵɵtext(37, "device_hub");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(38, "button", 18);
            i0.ɵɵlistener("click", function SubCategoryComponent_Template_button_click_38_listener($event) { return ctx.expendMore($event, ctx.field); });
            i0.ɵɵtemplate(39, SubCategoryComponent_mat_icon_39_Template, 2, 0, "mat-icon", 19);
            i0.ɵɵtemplate(40, SubCategoryComponent_mat_icon_40_Template, 2, 0, "mat-icon", 19);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵprojection(41);
        } if (rf & 2) {
            i0.ɵɵadvance(1);
            i0.ɵɵclassMap(!ctx.field.editable ? "readonly" : "");
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("readonly", !ctx.field.editable)("ngModelOptions", i0.ɵɵpureFunction0(26, _c0))("ngModel", ctx.field.label);
            i0.ɵɵadvance(1);
            i0.ɵɵclassMap(!ctx.field.editable ? "readonly" : "");
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("readonly", !ctx.field.editable)("ngModelOptions", i0.ɵɵpureFunction0(27, _c0))("ngModel", ctx.field.key);
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("disabled", !ctx.field.editable)("ngModel", ctx.field.type)("ngModelOptions", i0.ɵɵpureFunction0(28, _c0));
            i0.ɵɵadvance(17);
            i0.ɵɵproperty("ngSwitch", ctx.field.type);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngSwitchCase", "checkbox");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngSwitchCase", i0.ɵɵpureFunction0(29, _c2).includes(ctx.field.type) ? ctx.field.type : !ctx.field.type);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngModel", ctx.field.isMandatory)("ngModelOptions", i0.ɵɵpureFunction0(30, _c0));
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
        } }, directives: [i1.MatFormField, i1.MatLabel, i2.MatInput, i3.DefaultValueAccessor, i3.RequiredValidator, i3.NgControlStatus, i3.NgModel, i4.MatSelect, i5.MatOption, i6.NgSwitch, i6.NgSwitchCase, i6.NgSwitchDefault, i7.MatCheckbox, i8.MatButton, i9.MatIcon, i6.NgIf, i10.MatChipList, i6.NgForOf, i10.MatChipInput, i10.MatChip, i10.MatChipRemove], styles: [".container[_ngcontent-%COMP%]{max-width:98%;margin:50px auto auto;padding-bottom:50px}.container[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:space-between}.input-category-name[_ngcontent-%COMP%]{font-size:15px;font-weight:500}.example-full-width[_ngcontent-%COMP%]{width:100%}.field-item[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;width:100%;flex-wrap:wrap}.field-item[_ngcontent-%COMP%]   .button-action[_ngcontent-%COMP%]{background-color:#6fe8d7;height:100%;margin:auto 15px auto auto;display:flex}.field-item[_ngcontent-%COMP%]   .button-action[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{box-shadow:none;background-color:transparent;color:#fff}.field-action[_ngcontent-%COMP%]{width:10%}hr[_ngcontent-%COMP%]{margin:50px 0}  .mat-form-field-appearance-fill .mat-form-field-flex{background-color:#fff}.category-action[_ngcontent-%COMP%]{display:flex;width:100%}.delete-field[_ngcontent-%COMP%]{margin:auto 2%}.radio-group[_ngcontent-%COMP%]   .mat-radio-button[_ngcontent-%COMP%]{margin-right:10px}.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary[_ngcontent-%COMP%]{background-color:#3f51b5;color:#fff;min-height:20px;font-size:10px}.move-icons[_ngcontent-%COMP%]{cursor:move}.category-item[_ngcontent-%COMP%]{display:flex;align-items:baseline;width:100%;border:1px solid #dce4e9;border-radius:8px}  mat-checkbox.form-field .mat-checkbox-checkmark-path{stroke:#000!important}  .readonly.mat-form-field-appearance-outline .mat-form-field-outline{color:transparent!important}.field-content[_ngcontent-%COMP%]{width:100%}.cdk-drag-preview[_ngcontent-%COMP%]{box-sizing:border-box;border-radius:4px;box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.cdk-drag-placeholder[_ngcontent-%COMP%]{opacity:0}.cdk-drag-animating[_ngcontent-%COMP%], .example-list.cdk-drop-list-dragging[_ngcontent-%COMP%]   .category-item[_ngcontent-%COMP%]:not(.cdk-drag-placeholder){transition:transform 250ms cubic-bezier(0,0,.2,1)}  .mat-form-field-appearance-fill.mat-form-field-disabled .mat-form-field-flex{background-color:rgba(0,0,0,.02);margin-bottom:-20px}  .mat-select{padding:0}.add-button-container[_ngcontent-%COMP%]{background:no-repeat padding-box #fff;border:1px dashed #dce4e9;border-radius:8px;margin-top:10px;padding:10px;display:flex;justify-content:space-between;width:98%;margin-left:0;margin-bottom:22px}.add-button-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{display:flex;align-items:center;background-color:transparent;border:none;margin:auto;cursor:pointer;font:17px/26px Nexa Text;letter-spacing:0;color:#c2c8d5;box-shadow:none}.expand-button[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%]{font-size:48px;margin-top:-20px;margin-right:15px}.transparent-button[_ngcontent-%COMP%]{background-color:transparent!important;box-shadow:none!important;width:40px!important;padding:0!important;margin:0!important;min-width:auto!important}.expand-button[_ngcontent-%COMP%]{color:#5a607f!important;background-color:transparent!important;box-shadow:none!important}"] });
    return SubCategoryComponent;
}());
export { SubCategoryComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SubCategoryComponent, [{
        type: Component,
        args: [{
                selector: 'lib-sub-category',
                templateUrl: './sub-category.component.html',
                styleUrls: ['./sub-category.component.scss']
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
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3ViLWNhdGVnb3J5LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL29uYm9hcmRpbmcvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9zdWItY2F0ZWdvcnkvc3ViLWNhdGVnb3J5LmNvbXBvbmVudC50cyIsImxpYi9jb21wb25lbnRzL3N1Yi1jYXRlZ29yeS9zdWItY2F0ZWdvcnkuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvRSxPQUFPLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0lDMkJ4RCwrQkFDSTtJQUFBLHdDQUE4RTtJQUFoRSxpT0FBeUI7SUFBdUMsdUJBQzlFO0lBQUEsaUJBQWU7SUFDbkIsaUJBQU07OztJQUZZLGVBQXlCO0lBQXpCLDhDQUF5Qiw4Q0FBQTs7OztJQU9uQyxvQ0FFSTtJQURvQyxpU0FBc0M7SUFDMUUsWUFDQTtJQUFBLG9DQUF3QjtJQUFBLHNCQUFNO0lBQUEsaUJBQVc7SUFDN0MsaUJBQVc7OztJQUptRSxzQ0FBbUIsc0JBQUEsbUJBQUE7SUFFN0YsZUFDQTtJQURBLDRDQUNBOzs7O0lBUFosMENBRUk7SUFBQSxpQ0FBWTtJQUFBLHdCQUFPO0lBQUEsaUJBQVk7SUFDL0IsNkNBQ0k7SUFBQSxrR0FFSTtJQUdKLHFDQUdKO0lBRlEsa1JBQXlELHlOQUFBO0lBRDdELGlCQUdKO0lBQUEsaUJBQWdCO0lBQ3BCLGlCQUFpQjs7OztJQVQyQixlQUF5QztJQUF6QyxxREFBeUM7SUFLckMsZUFBNEI7SUFBNUIsdUNBQTRCLCtCQUFBLDhEQUFBOzs7O0lBSzVFLHlDQUNJO0lBQUEsaUNBQVc7SUFBQSxzQkFBTTtJQUFBLGlCQUFZO0lBQzdCLGlDQUVKO0lBRjhFLDRPQUFnQztJQUExRyxpQkFFSjtJQUFBLGlCQUFpQjs7O0lBRk4sZUFBbUI7SUFBbkIsMENBQW1CLDhDQUFBLHdDQUFBOzs7SUFpQjlCLGdDQUFvQztJQUFBLDJCQUFXO0lBQUEsaUJBQVc7OztJQUMxRCxnQ0FBbUM7SUFBQSwyQkFBVztJQUFBLGlCQUFXOzs7OztBRC9EakU7SUFzQkU7UUFaVSwwQkFBcUIsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFBO1FBQy9DLGVBQVUsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFBO1FBQ3BDLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFBO1FBQ2hDLGtCQUFhLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQTtRQUN2QyxrQkFBYSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUE7UUFDdkMsaUJBQVksR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFBO1FBQ3RDLG9CQUFlLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQTtRQUN6QywwQkFBcUIsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFBO1FBQy9DLGlCQUFZLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQTtRQUdoRCx1QkFBa0IsR0FBRyxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQUVqQix1Q0FBUSxHQUFSO0lBQ0EsQ0FBQztJQUVELG1DQUFJLEdBQUosVUFBSyxLQUFLO1FBQ1IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUE7SUFDekIsQ0FBQztJQUVELGtEQUFtQixHQUFuQixVQUFvQixLQUFLLEVBQUUsQ0FBQyxFQUFFLENBQUM7UUFDN0IsSUFBSSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssT0FBQSxFQUFFLENBQUMsR0FBQSxFQUFFLENBQUMsR0FBQSxFQUFFLENBQUMsQ0FBQTtJQUNsRCxDQUFDO0lBRUQsb0NBQUssR0FBTCxVQUFNLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQztRQUNmLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSyxPQUFBLEVBQUUsQ0FBQyxHQUFBLEVBQUUsQ0FBQyxHQUFBLEVBQUUsQ0FBQyxDQUFBO0lBQ3ZDLENBQUM7SUFFRCwwQ0FBVyxHQUFYLFVBQVksS0FBSyxFQUFFLENBQUM7UUFDbEIsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFBO1FBQ3RCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSyxPQUFBLEVBQUUsQ0FBQyxHQUFBLEVBQUUsQ0FBQyxDQUFBO0lBQ3ZDLENBQUM7SUFFRCwwQ0FBVyxHQUFYLFVBQVksS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDO1FBQ3JCLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQTtRQUN0QixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsR0FBQSxFQUFFLENBQUMsR0FBQSxFQUFFLENBQUMsQ0FBQTtJQUNuQyxDQUFDO0lBRUQseUNBQVUsR0FBVixVQUFXLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksTUFBQSxFQUFFLENBQUMsR0FBQSxFQUFFLENBQUMsR0FBQSxFQUFFLENBQUMsQ0FBQTtJQUN4QyxDQUFDO0lBRUQsNENBQWEsR0FBYixVQUFjLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssT0FBQSxFQUFFLENBQUMsR0FBQSxFQUFFLENBQUMsR0FBQSxFQUFFLENBQUMsQ0FBQTtJQUM1QyxDQUFDO0lBQ0Qsa0RBQW1CLEdBQW5CLFVBQW9CLENBQUM7UUFDbkIsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFBO1FBQ2xCLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7SUFDdkMsQ0FBQztJQUNELHlDQUFVLEdBQVYsVUFBVyxDQUFDLEVBQUUsS0FBSztRQUNqQixDQUFDLENBQUMsY0FBYyxFQUFFLENBQUE7UUFDbEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsRUFBQyxNQUFNLEVBQUMsSUFBSSxFQUFFLEtBQUssT0FBQSxFQUFDLENBQUMsQ0FBQTtJQUM5QyxDQUFDO0lBRUQsa0RBQW1CLEdBQW5CLFVBQW9CLENBQUM7UUFDbkIsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFBO0lBQ3BCLENBQUM7NEZBOURVLG9CQUFvQjs2REFBcEIsb0JBQW9COztZQ1JqQyw4QkFDSTtZQUFBLHlDQUNJO1lBQUEsaUNBQVc7WUFBQSxxQkFBSztZQUFBLGlCQUFZO1lBQzVCLGdDQUVKO1lBRFEsa0pBQXlCO1lBRDdCLGlCQUVKO1lBQUEsaUJBQWlCO1lBRWpCLHlDQUNJO1lBQUEsaUNBQVc7WUFBQSxpQ0FBWTtZQUFBLGlCQUFZO1lBQ25DLGdDQUVKO1lBRFEsZ0pBQXVCO1lBRDNCLGlCQUVKO1lBQUEsaUJBQWlCO1lBRWpCLHlDQUNJO1lBQUEsa0NBQVc7WUFBQSxxQkFBSTtZQUFBLGlCQUFZO1lBQzNCLHNDQUVJO1lBRnFDLHVKQUF3Qix5R0FDNUMsNENBQTBCLElBRGtCO1lBRTdELHNDQUF5QjtZQUFBLHFCQUFJO1lBQUEsaUJBQWE7WUFDMUMsc0NBQTBCO1lBQUEsc0JBQUs7WUFBQSxpQkFBYTtZQUM1QyxzQ0FBMkI7WUFBQSwwQkFBUztZQUFBLGlCQUFhO1lBQ2pELHNDQUE2QjtZQUFBLHlCQUFRO1lBQUEsaUJBQWE7WUFDbEQsc0NBQTBCO1lBQUEsc0JBQUs7WUFBQSxpQkFBYTtZQUM1QyxzQ0FBNkI7WUFBQSx5QkFBUTtZQUFBLGlCQUFhO1lBQ2xELHVDQUF5QjtZQUFBLHFCQUFJO1lBQUEsaUJBQWE7WUFDMUMsdUNBQTBCO1lBQUEsc0JBQUs7WUFBQSxpQkFBYTtZQUNoRCxpQkFBYTtZQUNqQixpQkFBaUI7WUFDakIsa0NBQ0k7WUFBQSx3RUFDSTtZQUdKLDhGQUVJO1lBWUosOEZBQ0k7WUFJUiwwQkFBZTtZQUVmLHlDQUNJO1lBRDZCLGdLQUErQjtZQUM1RCw4QkFDSjtZQUFBLGlCQUFlO1lBQ2YsbUNBR0k7WUFEQSx3R0FBUywrQkFBMkIsSUFBQztZQUNyQyxpQ0FBVTtZQUFBLDJCQUFVO1lBQUEsaUJBQVc7WUFDbkMsaUJBQVM7WUFFVCxtQ0FHSTtZQURBLHdHQUFTLGlDQUF3QixJQUFDO1lBQ2xDLGtGQUFvQztZQUNwQyxrRkFBbUM7WUFDdkMsaUJBQVM7WUFDYixpQkFBTTtZQVVOLG1CQUE0Qjs7WUE3RXNCLGVBQTJDO1lBQTNDLG9EQUEyQztZQUVsRSxlQUE0QjtZQUE1Qiw4Q0FBNEIsK0NBQUEsNEJBQUE7WUFJTCxlQUEyQztZQUEzQyxvREFBMkM7WUFFbEUsZUFBNEI7WUFBNUIsOENBQTRCLCtDQUFBLDBCQUFBO1lBTW5DLGVBQTRCO1lBQTVCLDhDQUE0QiwyQkFBQSwrQ0FBQTtZQVk5QixnQkFBdUI7WUFBdkIseUNBQXVCO1lBQzVCLGVBQTBCO1lBQTFCLHlDQUEwQjtZQUlmLGVBQW1GO1lBQW5GLHNIQUFtRjtZQXFCdEUsZUFBK0I7WUFBL0IsK0NBQStCLCtDQUFBO1lBSTVELGVBQThEO1lBQTlELGdGQUE4RDtZQUQvQix3RUFBZ0Q7WUFPL0UsZUFBNEQ7WUFBNUQsZ0ZBQTREO1lBRGxDLDJFQUFtRDtZQUduRSxlQUF5QjtZQUF6Qiw0Q0FBeUI7WUFDekIsZUFBd0I7WUFBeEIsMkNBQXdCOzsrQkRsRTFDO0NBd0VDLEFBckVELElBcUVDO1NBaEVZLG9CQUFvQjtrREFBcEIsb0JBQW9CO2NBTGhDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsa0JBQWtCO2dCQUM1QixXQUFXLEVBQUUsK0JBQStCO2dCQUM1QyxTQUFTLEVBQUUsQ0FBQywrQkFBK0IsQ0FBQzthQUM3Qzs7a0JBRUUsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsTUFBTTs7a0JBQ04sTUFBTTs7a0JBQ04sTUFBTTs7a0JBQ04sTUFBTTs7a0JBQ04sTUFBTTs7a0JBQ04sTUFBTTs7a0JBQ04sTUFBTTs7a0JBQ04sTUFBTTs7a0JBQ04sTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEVOVEVSLCBDT01NQSwgU0VNSUNPTE9OIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2tleWNvZGVzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLXN1Yi1jYXRlZ29yeScsXG4gIHRlbXBsYXRlVXJsOiAnLi9zdWItY2F0ZWdvcnkuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zdWItY2F0ZWdvcnkuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBTdWJDYXRlZ29yeUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIGZpZWxkOiBhbnlcbiAgQElucHV0KCkgbGVuZ3RoOiBhbnlcbiAgQElucHV0KCkgaTogYW55XG4gIEBJbnB1dCgpIGo6IGFueVxuICBAT3V0cHV0KCkgb25BZGRLZXl3b3JkRnJvbUlucHV0ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KClcbiAgQE91dHB1dCgpIG9uS2V5UHJlc3MgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKVxuICBAT3V0cHV0KCkgb25Ecm9wID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KClcbiAgQE91dHB1dCgpIG9uQWRkTmV3RmllbGQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKVxuICBAT3V0cHV0KCkgb25SZW1vdmVGaWVsZCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpXG4gIEBPdXRwdXQoKSBvbkNoYW5nZVR5cGUgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKVxuICBAT3V0cHV0KCkgb25SZW1vdmVLZXl3b3JkID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KClcbiAgQE91dHB1dCgpIG9uQWRkTmV3U3ViTGV2ZWxGaWVsZCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpXG4gIEBPdXRwdXQoKSBvbkV4cGVuZE1vcmUgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKVxuXG5cbiAgc2VwYXJhdG9yS2V5c0NvZGVzID0gW0VOVEVSLCBDT01NQSwgU0VNSUNPTE9OXTtcbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgfVxuXG4gIGRyb3AoZXZlbnQpIHtcbiAgICB0aGlzLm9uRHJvcC5lbWl0KGV2ZW50KVxuICB9XG5cbiAgYWRkS2V5d29yZEZyb21JbnB1dChldmVudCwgaSwgaikge1xuICAgIHRoaXMub25BZGRLZXl3b3JkRnJvbUlucHV0LmVtaXQoeyBldmVudCwgaSwgaiB9KVxuICB9XG5cbiAga2V5VXAoZXZlbnQsIGksIGopIHtcbiAgICB0aGlzLm9uS2V5UHJlc3MuZW1pdCh7IGV2ZW50LCBpLCBqIH0pXG4gIH1cblxuICBhZGROZXdGaWVsZChldmVudCwgaSkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICB0aGlzLm9uQWRkTmV3RmllbGQuZW1pdCh7IGV2ZW50LCBpIH0pXG4gIH1cblxuICByZW1vdmVGaWVsZChldmVudCwgaSwgaikge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICB0aGlzLm9uUmVtb3ZlRmllbGQuZW1pdCh7IGksIGogfSlcbiAgfVxuXG4gIGNoYW5nZVR5cGUodHlwZSwgaSwgaikge1xuICAgIHRoaXMub25DaGFuZ2VUeXBlLmVtaXQoeyB0eXBlLCBpLCBqIH0pXG4gIH1cblxuICByZW1vdmVLZXl3b3JkKGV2ZW50LCBpLCBqKSB7XG4gICAgdGhpcy5vblJlbW92ZUtleXdvcmQuZW1pdCh7IGV2ZW50LCBpLCBqIH0pXG4gIH1cbiAgYWRkTmV3U3ViTGV2ZWxGaWVsZChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgdGhpcy5vbkFkZE5ld1N1YkxldmVsRmllbGQuZW1pdCh0cnVlKVxuICB9XG4gIGV4cGVuZE1vcmUoZSwgZmllbGQpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICB0aGlzLm9uRXhwZW5kTW9yZS5lbWl0KHtleHBhbmQ6dHJ1ZSwgZmllbGR9KVxuICB9XG5cbiAgaW5nb3JlRGVmYXVsdEFjdGlvbihlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gIH1cblxufVxuIiwiPGRpdiBjbGFzcz1cImZpZWxkLWl0ZW1cIj5cbiAgICA8bWF0LWZvcm0tZmllbGQgY2xhc3M9XCJmb3JtLWZpZWxkIGZpZWxkLXNpemVcIiBbY2xhc3NdPVwiIWZpZWxkLmVkaXRhYmxlID8gJ3JlYWRvbmx5JyA6JycgXCIgYXBwZWFyYW5jZT1cIm91dGxpbmVcIj5cbiAgICAgICAgPG1hdC1sYWJlbD5MYWJlbDwvbWF0LWxhYmVsPlxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBbcmVhZG9ubHldPVwiIWZpZWxkLmVkaXRhYmxlXCIgbWF0SW5wdXQgcmVxdWlyZWQgW25nTW9kZWxPcHRpb25zXT1cIntzdGFuZGFsb25lOiB0cnVlfVwiXG4gICAgICAgICAgICBbKG5nTW9kZWwpXT1cImZpZWxkLmxhYmVsXCIgcGxhY2Vob2xkZXI9XCJcIiAvPlxuICAgIDwvbWF0LWZvcm0tZmllbGQ+XG5cbiAgICA8bWF0LWZvcm0tZmllbGQgY2xhc3M9XCJmb3JtLWZpZWxkIGZpZWxkLXNpemVcIiBbY2xhc3NdPVwiIWZpZWxkLmVkaXRhYmxlID8gJ3JlYWRvbmx5JyA6JycgXCIgYXBwZWFyYW5jZT1cIm91dGxpbmVcIj5cbiAgICAgICAgPG1hdC1sYWJlbD5DbMOpIGR1IGNoYW1wPC9tYXQtbGFiZWw+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIFtyZWFkb25seV09XCIhZmllbGQuZWRpdGFibGVcIiBtYXRJbnB1dCByZXF1aXJlZCBbbmdNb2RlbE9wdGlvbnNdPVwie3N0YW5kYWxvbmU6IHRydWV9XCJcbiAgICAgICAgICAgIFsobmdNb2RlbCldPVwiZmllbGQua2V5XCIgcGxhY2Vob2xkZXI9XCJcIiAvPlxuICAgIDwvbWF0LWZvcm0tZmllbGQ+XG5cbiAgICA8bWF0LWZvcm0tZmllbGQgY2xhc3M9XCJmb3JtLWZpZWxkIGZpZWxkLXNpemVcIiBhcHBlYXJhbmNlPVwib3V0bGluZVwiPlxuICAgICAgICA8bWF0LWxhYmVsPlR5cGU8L21hdC1sYWJlbD5cbiAgICAgICAgPG1hdC1zZWxlY3QgW2Rpc2FibGVkXT1cIiFmaWVsZC5lZGl0YWJsZVwiIFsobmdNb2RlbCldPVwiZmllbGQudHlwZVwiIHJlcXVpcmVkIFtuZ01vZGVsT3B0aW9uc109XCJ7c3RhbmRhbG9uZTogdHJ1ZX1cIlxuICAgICAgICAgICAgKG5nTW9kZWxDaGFuZ2UpPVwiY2hhbmdlVHlwZShmaWVsZC50eXBlLGksailcIj5cbiAgICAgICAgICAgIDxtYXQtb3B0aW9uIHZhbHVlPVwidGV4dFwiPlRleHQ8L21hdC1vcHRpb24+XG4gICAgICAgICAgICA8bWF0LW9wdGlvbiB2YWx1ZT1cInJhZGlvXCI+UmFkaW88L21hdC1vcHRpb24+XG4gICAgICAgICAgICA8bWF0LW9wdGlvbiB2YWx1ZT1cInNlbGVjdFwiPlNlbGVjdGV1cjwvbWF0LW9wdGlvbj5cbiAgICAgICAgICAgIDxtYXQtb3B0aW9uIHZhbHVlPVwiY2hlY2tib3hcIj5DaGVja2JveDwvbWF0LW9wdGlvbj5cbiAgICAgICAgICAgIDxtYXQtb3B0aW9uIHZhbHVlPVwiZW1haWxcIj5FbWFpbDwvbWF0LW9wdGlvbj5cbiAgICAgICAgICAgIDxtYXQtb3B0aW9uIHZhbHVlPVwicGFzc3dvcmRcIj5QYXNzd29yZDwvbWF0LW9wdGlvbj5cbiAgICAgICAgICAgIDxtYXQtb3B0aW9uIHZhbHVlPVwiZGF0ZVwiPkRhdGU8L21hdC1vcHRpb24+XG4gICAgICAgICAgICA8bWF0LW9wdGlvbiB2YWx1ZT1cInBob25lXCI+UGhvbmU8L21hdC1vcHRpb24+XG4gICAgICAgIDwvbWF0LXNlbGVjdD5cbiAgICA8L21hdC1mb3JtLWZpZWxkPlxuICAgIDxuZy1jb250YWluZXIgW25nU3dpdGNoXT1cImZpZWxkLnR5cGVcIj5cbiAgICAgICAgPGRpdiAqbmdTd2l0Y2hDYXNlPVwiJ2NoZWNrYm94J1wiIGNsYXNzPVwiZmxleC1hdXRvIHctMzAgZmllbGQtc2l6ZVwiPlxuICAgICAgICAgICAgPG1hdC1jaGVja2JveCBbKG5nTW9kZWwpXT1cImZpZWxkLnZhbHVlXCIgW25nTW9kZWxPcHRpb25zXT1cIntzdGFuZGFsb25lOiB0cnVlfVwiPlZhbGV1clxuICAgICAgICAgICAgPC9tYXQtY2hlY2tib3g+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8bWF0LWZvcm0tZmllbGQgKm5nU3dpdGNoQ2FzZT1cIlsnc2VsZWN0JywgJ3JhZGlvJ10uaW5jbHVkZXMoZmllbGQudHlwZSkgPyBmaWVsZC50eXBlIDogIWZpZWxkLnR5cGVcIlxuICAgICAgICAgICAgY2xhc3M9XCJmbGV4LWF1dG8gdy0zMCBmaWVsZC1zaXplXCIgYXBwZWFyYW5jZT1cIm91dGxpbmVcIj5cbiAgICAgICAgICAgIDxtYXQtbGFiZWw+IFZhbGV1ciA8L21hdC1sYWJlbD5cbiAgICAgICAgICAgIDxtYXQtY2hpcC1saXN0ICNjaGlwTGlzdCBhcmlhLWxhYmVsPVwiVmlkZW8ga2V5d29yZHM7IGxldCBpbmRleD1pbmRleFwiIG11bHRpcGxlPlxuICAgICAgICAgICAgICAgIDxtYXQtY2hpcCBzdHlsZT1cIm1pbi1oZWlnaHQ6IDI1cHg7XCIgKm5nRm9yPVwibGV0IG9wdGlvbiBvZiBmaWVsZC5kZWZhdWx0VmFsdWVcIiBbc2VsZWN0ZWRdPVwib3B0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgW3ZhbHVlXT1cIm9wdGlvblwiIFtyZW1vdmFibGVdPVwidHJ1ZVwiIChyZW1vdmVkKT1cInJlbW92ZUtleXdvcmQob3B0aW9uLCBpLGopXCI+XG4gICAgICAgICAgICAgICAgICAgIHt7b3B0aW9ufX1cbiAgICAgICAgICAgICAgICAgICAgPG1hdC1pY29uIG1hdENoaXBSZW1vdmU+Y2FuY2VsPC9tYXQtaWNvbj5cbiAgICAgICAgICAgICAgICA8L21hdC1jaGlwPlxuICAgICAgICAgICAgICAgIDxpbnB1dCAjY2hpcHNJbnB1dCBwbGFjZWhvbGRlcj1cImFkZC4uLlwiIFttYXRDaGlwSW5wdXRGb3JdPVwiY2hpcExpc3RcIiBbbWF0Q2hpcElucHV0QWRkT25CbHVyXT1cInRydWVcIlxuICAgICAgICAgICAgICAgICAgICAobWF0Q2hpcElucHV0VG9rZW5FbmQpPVwiYWRkS2V5d29yZEZyb21JbnB1dCgkZXZlbnQsIGksailcIlxuICAgICAgICAgICAgICAgICAgICBbbWF0Q2hpcElucHV0U2VwYXJhdG9yS2V5Q29kZXNdPVwic2VwYXJhdG9yS2V5c0NvZGVzXCIgKGtleXVwKT1cImtleVVwKCRldmVudCxpLGopXCI+XG4gICAgICAgICAgICA8L21hdC1jaGlwLWxpc3Q+XG4gICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XG4gICAgICAgIDxtYXQtZm9ybS1maWVsZCAqbmdTd2l0Y2hEZWZhdWx0IGNsYXNzPVwiZm9ybS1maWVsZCBmaWVsZC1zaXplXCIgYXBwZWFyYW5jZT1cIm91dGxpbmVcIj5cbiAgICAgICAgICAgIDxtYXQtbGFiZWw+VmFsZXVyPC9tYXQtbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXQgW3R5cGVdPVwiZmllbGQudHlwZVwiIG1hdElucHV0IFtuZ01vZGVsT3B0aW9uc109XCJ7c3RhbmRhbG9uZTogdHJ1ZX1cIiBbKG5nTW9kZWwpXT1cImZpZWxkLmRlZmF1bHRWYWx1ZVwiXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJcIj5cbiAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cbiAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgIDxtYXQtY2hlY2tib3ggY2xhc3M9XCJmb3JtLWZpZWxkXCIgWyhuZ01vZGVsKV09XCJmaWVsZC5pc01hbmRhdG9yeVwiIFtuZ01vZGVsT3B0aW9uc109XCJ7c3RhbmRhbG9uZTogdHJ1ZX1cIj5cbiAgICAgICAgb2JsaWdhdG9pcmVcbiAgICA8L21hdC1jaGVja2JveD5cbiAgICA8YnV0dG9uIGNsYXNzPVwidHJhbnNwYXJlbnQtYnV0dG9uXCIgW2Rpc2FibGVkXT1cImZpZWxkLnN1YkxldmVsPjIgfHwgIWZpZWxkLmVkaXRhYmxlXCJcbiAgICAgICAgW3N0eWxlLm9wYWNpdHldPVwiKGZpZWxkLnN1YkxldmVsPjIgfHwgIWZpZWxkLmVkaXRhYmxlKSA/IDAgOjFcIiBtYXQtbWluaS1mYWIgY29sb3I9XCJzdWNjZXNzXCJcbiAgICAgICAgKGNsaWNrKT0nYWRkTmV3U3ViTGV2ZWxGaWVsZCgkZXZlbnQpJz5cbiAgICAgICAgPG1hdC1pY29uPmRldmljZV9odWI8L21hdC1pY29uPlxuICAgIDwvYnV0dG9uPlxuXG4gICAgPGJ1dHRvbiBjbGFzcz1cImV4cGFuZC1idXR0b25cIiBbZGlzYWJsZWRdPVwiIShmaWVsZC5mb3JtcyAmJiBmaWVsZC5mb3Jtcy5sZW5ndGg+MClcIlxuICAgICAgICBbc3R5bGUub3BhY2l0eV09XCJmaWVsZC5mb3JtcyAmJiBmaWVsZC5mb3Jtcy5sZW5ndGg+MCA/IDEgOjBcIiBtYXQtbWluaS1mYWIgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgKGNsaWNrKT1cImV4cGVuZE1vcmUoJGV2ZW50LGZpZWxkKVwiPlxuICAgICAgICA8bWF0LWljb24gKm5nSWY9XCIhZmllbGQuZXhwYW5kTW9yZVwiPmV4cGFuZF9sZXNzPC9tYXQtaWNvbj5cbiAgICAgICAgPG1hdC1pY29uICpuZ0lmPVwiZmllbGQuZXhwYW5kTW9yZVwiPmV4cGFuZF9tb3JlPC9tYXQtaWNvbj5cbiAgICA8L2J1dHRvbj5cbjwvZGl2PlxuXG48IS0tIDxkaXYgY2xhc3M9XCJhZGQtYnV0dG9uLWNvbnRhaW5lclwiICpuZ0lmPVwibGVuZ3RoLTE9PT1qXCI+XG4gICAgPGJ1dHRvbiBzdHlsZT1cIm1hcmdpbjoxMHB4IGF1dG9cIiBbZGlzYWJsZWRdPVwibGVuZ3RoLTEhPT1qXCIgW3N0eWxlLm9wYWNpdHldPVwibGVuZ3RoLTE9PT1qID8gMSA6MFwiIG1hdC1yYWlzZWQtYnV0dG9uXG4gICAgICAgIGNvbG9yPVwicHJpbWFyeVwiIChjbGljayk9J2FkZE5ld0ZpZWxkKCRldmVudCxpKSc+XG4gICAgICAgIDxtYXQtaWNvbj5hZGRfYm94PC9tYXQtaWNvbj5cbiAgICAgICAgPHNwYW4+QWpvdXRlciB1biBjaGFtcDwvc3Bhbj5cbiAgICA8L2J1dHRvbj5cbjwvZGl2PiAtLT5cblxuPG5nLWNvbnRlbnQgc2VsZWN0PVwiLmNoaWxkXCI+PC9uZy1jb250ZW50PiJdfQ==