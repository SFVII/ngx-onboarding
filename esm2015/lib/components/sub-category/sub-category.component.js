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
const _c0 = function () { return { standalone: true }; };
function SubCategoryComponent_div_30_Template(rf, ctx) { if (rf & 1) {
    const _r193 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 20);
    i0.ɵɵelementStart(1, "mat-checkbox", 21);
    i0.ɵɵlistener("ngModelChange", function SubCategoryComponent_div_30_Template_mat_checkbox_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r193); const ctx_r192 = i0.ɵɵnextContext(); return ctx_r192.field.value = $event; });
    i0.ɵɵtext(2, "Valeur ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r187 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", ctx_r187.field.value)("ngModelOptions", i0.ɵɵpureFunction0(2, _c0));
} }
function SubCategoryComponent_mat_form_field_31_mat_chip_5_Template(rf, ctx) { if (rf & 1) {
    const _r199 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-chip", 28);
    i0.ɵɵlistener("removed", function SubCategoryComponent_mat_form_field_31_mat_chip_5_Template_mat_chip_removed_0_listener() { i0.ɵɵrestoreView(_r199); const option_r197 = ctx.$implicit; const ctx_r198 = i0.ɵɵnextContext(2); return ctx_r198.removeKeyword(option_r197, ctx_r198.i, ctx_r198.j); });
    i0.ɵɵtext(1);
    i0.ɵɵelementStart(2, "mat-icon", 29);
    i0.ɵɵtext(3, "cancel");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const option_r197 = ctx.$implicit;
    i0.ɵɵproperty("selected", option_r197)("value", option_r197)("removable", true);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", option_r197, " ");
} }
function SubCategoryComponent_mat_form_field_31_Template(rf, ctx) { if (rf & 1) {
    const _r201 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-form-field", 22);
    i0.ɵɵelementStart(1, "mat-label");
    i0.ɵɵtext(2, " Valeur ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "mat-chip-list", 23, 24);
    i0.ɵɵtemplate(5, SubCategoryComponent_mat_form_field_31_mat_chip_5_Template, 4, 4, "mat-chip", 25);
    i0.ɵɵelementStart(6, "input", 26, 27);
    i0.ɵɵlistener("matChipInputTokenEnd", function SubCategoryComponent_mat_form_field_31_Template_input_matChipInputTokenEnd_6_listener($event) { i0.ɵɵrestoreView(_r201); const ctx_r200 = i0.ɵɵnextContext(); return ctx_r200.addKeywordFromInput($event, ctx_r200.i, ctx_r200.j); })("keyup", function SubCategoryComponent_mat_form_field_31_Template_input_keyup_6_listener($event) { i0.ɵɵrestoreView(_r201); const ctx_r202 = i0.ɵɵnextContext(); return ctx_r202.keyUp($event, ctx_r202.i, ctx_r202.j); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const _r194 = i0.ɵɵreference(4);
    const ctx_r188 = i0.ɵɵnextContext();
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngForOf", ctx_r188.field.defaultValue);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("matChipInputFor", _r194)("matChipInputAddOnBlur", true)("matChipInputSeparatorKeyCodes", ctx_r188.separatorKeysCodes);
} }
function SubCategoryComponent_mat_form_field_32_Template(rf, ctx) { if (rf & 1) {
    const _r204 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-form-field", 1);
    i0.ɵɵelementStart(1, "mat-label");
    i0.ɵɵtext(2, "Valeur");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "input", 30);
    i0.ɵɵlistener("ngModelChange", function SubCategoryComponent_mat_form_field_32_Template_input_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r204); const ctx_r203 = i0.ɵɵnextContext(); return ctx_r203.field.defaultValue = $event; });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r189 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("type", ctx_r189.field.type)("ngModelOptions", i0.ɵɵpureFunction0(3, _c0))("ngModel", ctx_r189.field.defaultValue);
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
const _c1 = [[["", 8, "child"]]];
const _c2 = function () { return ["select", "radio"]; };
const _c3 = [".child"];
export class SubCategoryComponent {
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
        this.separatorKeysCodes = [ENTER, COMMA, SEMICOLON];
    }
    ngOnInit() {
    }
    drop(event) {
        this.onDrop.emit(event);
    }
    addKeywordFromInput(event, i, j) {
        this.onAddKeywordFromInput.emit({ event, i, j });
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
}
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
    } }, directives: [i1.MatFormField, i1.MatLabel, i2.MatInput, i3.DefaultValueAccessor, i3.RequiredValidator, i3.NgControlStatus, i3.NgModel, i4.MatSelect, i5.MatOption, i6.NgSwitch, i6.NgSwitchCase, i6.NgSwitchDefault, i7.MatCheckbox, i8.MatButton, i9.MatIcon, i6.NgIf, i10.MatChipList, i6.NgForOf, i10.MatChipInput, i10.MatChip, i10.MatChipRemove], styles: [".container[_ngcontent-%COMP%]{max-width:98%;margin:50px auto auto;padding-bottom:50px}.container[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:space-between}.input-category-name[_ngcontent-%COMP%]{font-size:15px;font-weight:500}.example-full-width[_ngcontent-%COMP%]{width:100%}.field-item[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;width:100%;flex-wrap:wrap}.field-item[_ngcontent-%COMP%]   .button-action[_ngcontent-%COMP%]{background-color:#6fe8d7;height:100%;margin:auto 15px auto auto;display:flex}.field-item[_ngcontent-%COMP%]   .button-action[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{box-shadow:none;background-color:transparent;color:#fff}.field-action[_ngcontent-%COMP%]{width:10%}hr[_ngcontent-%COMP%]{margin:50px 0}  .mat-form-field-appearance-fill .mat-form-field-flex{background-color:#fff}.category-action[_ngcontent-%COMP%]{display:flex;width:100%}.delete-field[_ngcontent-%COMP%]{margin:auto 2%}.radio-group[_ngcontent-%COMP%]   .mat-radio-button[_ngcontent-%COMP%]{margin-right:10px}.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary[_ngcontent-%COMP%]{background-color:#3f51b5;color:#fff;min-height:20px;font-size:10px}.move-icons[_ngcontent-%COMP%]{cursor:move}.category-item[_ngcontent-%COMP%]{display:flex;align-items:baseline;width:100%;border:1px solid #dce4e9;border-radius:8px}  mat-checkbox.form-field .mat-checkbox-checkmark-path{stroke:#000!important}  .readonly.mat-form-field-appearance-outline .mat-form-field-outline{color:transparent!important}.field-content[_ngcontent-%COMP%]{width:100%}.cdk-drag-preview[_ngcontent-%COMP%]{box-sizing:border-box;border-radius:4px;box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.cdk-drag-placeholder[_ngcontent-%COMP%]{opacity:0}.cdk-drag-animating[_ngcontent-%COMP%], .example-list.cdk-drop-list-dragging[_ngcontent-%COMP%]   .category-item[_ngcontent-%COMP%]:not(.cdk-drag-placeholder){transition:transform 250ms cubic-bezier(0,0,.2,1)}  .mat-form-field-appearance-fill.mat-form-field-disabled .mat-form-field-flex{background-color:rgba(0,0,0,.02);margin-bottom:-20px}  .mat-select{padding:0}.add-button-container[_ngcontent-%COMP%]{background:no-repeat padding-box #fff;border:1px dashed #dce4e9;border-radius:8px;margin-top:10px;padding:10px;display:flex;justify-content:center;align-items:center;width:98%;margin-left:0;margin-bottom:22px}.add-button-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{display:flex;align-items:center;background-color:transparent;border:none;cursor:pointer;font:17px/26px Nexa Text;letter-spacing:0;color:#c2c8d5;box-shadow:none}.expand-button[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%]{font-size:48px;margin-top:-20px;margin-right:15px}.transparent-button[_ngcontent-%COMP%]{background-color:transparent!important;box-shadow:none!important;width:40px!important;padding:0!important;margin:0!important;min-width:auto!important}.expand-button[_ngcontent-%COMP%]{color:#5a607f!important;background-color:transparent!important;box-shadow:none!important}"] });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3ViLWNhdGVnb3J5LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL29uYm9hcmRpbmcvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9zdWItY2F0ZWdvcnkvc3ViLWNhdGVnb3J5LmNvbXBvbmVudC50cyIsImxpYi9jb21wb25lbnRzL3N1Yi1jYXRlZ29yeS9zdWItY2F0ZWdvcnkuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvRSxPQUFPLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0lDMkJ4RCwrQkFDSTtJQUFBLHdDQUE4RTtJQUFoRSxtT0FBeUI7SUFBdUMsdUJBQzlFO0lBQUEsaUJBQWU7SUFDbkIsaUJBQU07OztJQUZZLGVBQXlCO0lBQXpCLDhDQUF5Qiw4Q0FBQTs7OztJQU9uQyxvQ0FFSTtJQURvQyxxU0FBc0M7SUFDMUUsWUFDQTtJQUFBLG9DQUF3QjtJQUFBLHNCQUFNO0lBQUEsaUJBQVc7SUFDN0MsaUJBQVc7OztJQUptRSxzQ0FBbUIsc0JBQUEsbUJBQUE7SUFFN0YsZUFDQTtJQURBLDRDQUNBOzs7O0lBUFosMENBRUk7SUFBQSxpQ0FBWTtJQUFBLHdCQUFPO0lBQUEsaUJBQVk7SUFDL0IsNkNBQ0k7SUFBQSxrR0FFSTtJQUdKLHFDQUdKO0lBRlEsb1JBQXlELDJOQUFBO0lBRDdELGlCQUdKO0lBQUEsaUJBQWdCO0lBQ3BCLGlCQUFpQjs7OztJQVQyQixlQUF5QztJQUF6QyxxREFBeUM7SUFLckMsZUFBNEI7SUFBNUIsdUNBQTRCLCtCQUFBLDhEQUFBOzs7O0lBSzVFLHlDQUNJO0lBQUEsaUNBQVc7SUFBQSxzQkFBTTtJQUFBLGlCQUFZO0lBQzdCLGlDQUVKO0lBRjhFLDhPQUFnQztJQUExRyxpQkFF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QVM7UUFDYixpQkFBTTtRQVVOLG1CQUE0Qjs7UUE3RXNCLGVBQTJDO1FBQTNDLG9EQUEyQztRQUVsRSxlQUE0QjtRQUE1Qiw4Q0FBNEIsK0NBQUEsNEJBQUE7UUFJTCxlQUEyQztRQUEzQyxvREFBMkM7UUFFbEUsZUFBNEI7UUFBNUIsOENBQTRCLCtDQUFBLDBCQUFBO1FBTW5DLGVBQTRCO1FBQTVCLDhDQUE0QiwyQkFBQSwrQ0FBQTtRQVk5QixnQkFBdUI7UUFBdkIseUNBQXVCO1FBQzVCLGVBQTBCO1FBQTFCLHlDQUEwQjtRQUlmLGVBQW1GO1FBQW5GLHNIQUFtRjtRQXFCdEUsZUFBK0I7UUFBL0IsK0NBQStCLCtDQUFBO1FBSTVELGVBQThEO1FBQTlELGdGQUE4RDtRQUQvQix3RUFBZ0Q7UUFPL0UsZUFBNEQ7UUFBNUQsZ0ZBQTREO1FBRGxDLDJFQUFtRDtRQUduRSxlQUF5QjtRQUF6Qiw0Q0FBeUI7UUFDekIsZUFBd0I7UUFBeEIsMkNBQXdCOztrREQxRDdCLG9CQUFvQjtjQUxoQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtnQkFDNUIsV0FBVyxFQUFFLCtCQUErQjtnQkFDNUMsU0FBUyxFQUFFLENBQUMsK0JBQStCLENBQUM7YUFDN0M7O2tCQUVFLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLE1BQU07O2tCQUNOLE1BQU07O2tCQUNOLE1BQU07O2tCQUNOLE1BQU07O2tCQUNOLE1BQU07O2tCQUNOLE1BQU07O2tCQUNOLE1BQU07O2tCQUNOLE1BQU07O2tCQUNOLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBFTlRFUiwgQ09NTUEsIFNFTUlDT0xPTiB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9rZXljb2Rlcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1zdWItY2F0ZWdvcnknLFxuICB0ZW1wbGF0ZVVybDogJy4vc3ViLWNhdGVnb3J5LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vc3ViLWNhdGVnb3J5LmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgU3ViQ2F0ZWdvcnlDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBmaWVsZDogYW55XG4gIEBJbnB1dCgpIGxlbmd0aDogYW55XG4gIEBJbnB1dCgpIGk6IGFueVxuICBASW5wdXQoKSBqOiBhbnlcbiAgQE91dHB1dCgpIG9uQWRkS2V5d29yZEZyb21JbnB1dCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpXG4gIEBPdXRwdXQoKSBvbktleVByZXNzID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KClcbiAgQE91dHB1dCgpIG9uRHJvcCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpXG4gIEBPdXRwdXQoKSBvbkFkZE5ld0ZpZWxkID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KClcbiAgQE91dHB1dCgpIG9uUmVtb3ZlRmllbGQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKVxuICBAT3V0cHV0KCkgb25DaGFuZ2VUeXBlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KClcbiAgQE91dHB1dCgpIG9uUmVtb3ZlS2V5d29yZCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpXG4gIEBPdXRwdXQoKSBvbkFkZE5ld1N1YkxldmVsRmllbGQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKVxuICBAT3V0cHV0KCkgb25FeHBlbmRNb3JlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KClcblxuXG4gIHNlcGFyYXRvcktleXNDb2RlcyA9IFtFTlRFUiwgQ09NTUEsIFNFTUlDT0xPTl07XG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gIH1cblxuICBkcm9wKGV2ZW50KSB7XG4gICAgdGhpcy5vbkRyb3AuZW1pdChldmVudClcbiAgfVxuXG4gIGFkZEtleXdvcmRGcm9tSW5wdXQoZXZlbnQsIGksIGopIHtcbiAgICB0aGlzLm9uQWRkS2V5d29yZEZyb21JbnB1dC5lbWl0KHsgZXZlbnQsIGksIGogfSlcbiAgfVxuXG4gIGtleVVwKGV2ZW50LCBpLCBqKSB7XG4gICAgdGhpcy5vbktleVByZXNzLmVtaXQoeyBldmVudCwgaSwgaiB9KVxuICB9XG5cbiAgYWRkTmV3RmllbGQoZXZlbnQsIGkpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgdGhpcy5vbkFkZE5ld0ZpZWxkLmVtaXQoeyBldmVudCwgaSB9KVxuICB9XG5cbiAgcmVtb3ZlRmllbGQoZXZlbnQsIGksIGopIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgdGhpcy5vblJlbW92ZUZpZWxkLmVtaXQoeyBpLCBqIH0pXG4gIH1cblxuICBjaGFuZ2VUeXBlKHR5cGUsIGksIGopIHtcbiAgICB0aGlzLm9uQ2hhbmdlVHlwZS5lbWl0KHsgdHlwZSwgaSwgaiB9KVxuICB9XG5cbiAgcmVtb3ZlS2V5d29yZChldmVudCwgaSwgaikge1xuICAgIHRoaXMub25SZW1vdmVLZXl3b3JkLmVtaXQoeyBldmVudCwgaSwgaiB9KVxuICB9XG4gIGFkZE5ld1N1YkxldmVsRmllbGQoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIHRoaXMub25BZGROZXdTdWJMZXZlbEZpZWxkLmVtaXQodHJ1ZSlcbiAgfVxuICBleHBlbmRNb3JlKGUsIGZpZWxkKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgdGhpcy5vbkV4cGVuZE1vcmUuZW1pdCh7ZXhwYW5kOnRydWUsIGZpZWxkfSlcbiAgfVxuXG4gIGluZ29yZURlZmF1bHRBY3Rpb24oZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICB9XG5cbn1cbiIsIjxkaXYgY2xhc3M9XCJmaWVsZC1pdGVtXCI+XG4gICAgPG1hdC1mb3JtLWZpZWxkIGNsYXNzPVwiZm9ybS1maWVsZCBmaWVsZC1zaXplXCIgW2NsYXNzXT1cIiFmaWVsZC5lZGl0YWJsZSA/ICdyZWFkb25seScgOicnIFwiIGFwcGVhcmFuY2U9XCJvdXRsaW5lXCI+XG4gICAgICAgIDxtYXQtbGFiZWw+TGFiZWw8L21hdC1sYWJlbD5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgW3JlYWRvbmx5XT1cIiFmaWVsZC5lZGl0YWJsZVwiIG1hdElucHV0IHJlcXVpcmVkIFtuZ01vZGVsT3B0aW9uc109XCJ7c3RhbmRhbG9uZTogdHJ1ZX1cIlxuICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJmaWVsZC5sYWJlbFwiIHBsYWNlaG9sZGVyPVwiXCIgLz5cbiAgICA8L21hdC1mb3JtLWZpZWxkPlxuXG4gICAgPG1hdC1mb3JtLWZpZWxkIGNsYXNzPVwiZm9ybS1maWVsZCBmaWVsZC1zaXplXCIgW2NsYXNzXT1cIiFmaWVsZC5lZGl0YWJsZSA/ICdyZWFkb25seScgOicnIFwiIGFwcGVhcmFuY2U9XCJvdXRsaW5lXCI+XG4gICAgICAgIDxtYXQtbGFiZWw+Q2zDqSBkdSBjaGFtcDwvbWF0LWxhYmVsPlxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBbcmVhZG9ubHldPVwiIWZpZWxkLmVkaXRhYmxlXCIgbWF0SW5wdXQgcmVxdWlyZWQgW25nTW9kZWxPcHRpb25zXT1cIntzdGFuZGFsb25lOiB0cnVlfVwiXG4gICAgICAgICAgICBbKG5nTW9kZWwpXT1cImZpZWxkLmtleVwiIHBsYWNlaG9sZGVyPVwiXCIgLz5cbiAgICA8L21hdC1mb3JtLWZpZWxkPlxuXG4gICAgPG1hdC1mb3JtLWZpZWxkIGNsYXNzPVwiZm9ybS1maWVsZCBmaWVsZC1zaXplXCIgYXBwZWFyYW5jZT1cIm91dGxpbmVcIj5cbiAgICAgICAgPG1hdC1sYWJlbD5UeXBlPC9tYXQtbGFiZWw+XG4gICAgICAgIDxtYXQtc2VsZWN0IFtkaXNhYmxlZF09XCIhZmllbGQuZWRpdGFibGVcIiBbKG5nTW9kZWwpXT1cImZpZWxkLnR5cGVcIiByZXF1aXJlZCBbbmdNb2RlbE9wdGlvbnNdPVwie3N0YW5kYWxvbmU6IHRydWV9XCJcbiAgICAgICAgICAgIChuZ01vZGVsQ2hhbmdlKT1cImNoYW5nZVR5cGUoZmllbGQudHlwZSxpLGopXCI+XG4gICAgICAgICAgICA8bWF0LW9wdGlvbiB2YWx1ZT1cInRleHRcIj5UZXh0PC9tYXQtb3B0aW9uPlxuICAgICAgICAgICAgPG1hdC1vcHRpb24gdmFsdWU9XCJyYWRpb1wiPlJhZGlvPC9tYXQtb3B0aW9uPlxuICAgICAgICAgICAgPG1hdC1vcHRpb24gdmFsdWU9XCJzZWxlY3RcIj5TZWxlY3RldXI8L21hdC1vcHRpb24+XG4gICAgICAgICAgICA8bWF0LW9wdGlvbiB2YWx1ZT1cImNoZWNrYm94XCI+Q2hlY2tib3g8L21hdC1vcHRpb24+XG4gICAgICAgICAgICA8bWF0LW9wdGlvbiB2YWx1ZT1cImVtYWlsXCI+RW1haWw8L21hdC1vcHRpb24+XG4gICAgICAgICAgICA8bWF0LW9wdGlvbiB2YWx1ZT1cInBhc3N3b3JkXCI+UGFzc3dvcmQ8L21hdC1vcHRpb24+XG4gICAgICAgICAgICA8bWF0LW9wdGlvbiB2YWx1ZT1cImRhdGVcIj5EYXRlPC9tYXQtb3B0aW9uPlxuICAgICAgICAgICAgPG1hdC1vcHRpb24gdmFsdWU9XCJwaG9uZVwiPlBob25lPC9tYXQtb3B0aW9uPlxuICAgICAgICA8L21hdC1zZWxlY3Q+XG4gICAgPC9tYXQtZm9ybS1maWVsZD5cbiAgICA8bmctY29udGFpbmVyIFtuZ1N3aXRjaF09XCJmaWVsZC50eXBlXCI+XG4gICAgICAgIDxkaXYgKm5nU3dpdGNoQ2FzZT1cIidjaGVja2JveCdcIiBjbGFzcz1cImZsZXgtYXV0byB3LTMwIGZpZWxkLXNpemVcIj5cbiAgICAgICAgICAgIDxtYXQtY2hlY2tib3ggWyhuZ01vZGVsKV09XCJmaWVsZC52YWx1ZVwiIFtuZ01vZGVsT3B0aW9uc109XCJ7c3RhbmRhbG9uZTogdHJ1ZX1cIj5WYWxldXJcbiAgICAgICAgICAgIDwvbWF0LWNoZWNrYm94PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPG1hdC1mb3JtLWZpZWxkICpuZ1N3aXRjaENhc2U9XCJbJ3NlbGVjdCcsICdyYWRpbyddLmluY2x1ZGVzKGZpZWxkLnR5cGUpID8gZmllbGQudHlwZSA6ICFmaWVsZC50eXBlXCJcbiAgICAgICAgICAgIGNsYXNzPVwiZmxleC1hdXRvIHctMzAgZmllbGQtc2l6ZVwiIGFwcGVhcmFuY2U9XCJvdXRsaW5lXCI+XG4gICAgICAgICAgICA8bWF0LWxhYmVsPiBWYWxldXIgPC9tYXQtbGFiZWw+XG4gICAgICAgICAgICA8bWF0LWNoaXAtbGlzdCAjY2hpcExpc3QgYXJpYS1sYWJlbD1cIlZpZGVvIGtleXdvcmRzOyBsZXQgaW5kZXg9aW5kZXhcIiBtdWx0aXBsZT5cbiAgICAgICAgICAgICAgICA8bWF0LWNoaXAgc3R5bGU9XCJtaW4taGVpZ2h0OiAyNXB4O1wiICpuZ0Zvcj1cImxldCBvcHRpb24gb2YgZmllbGQuZGVmYXVsdFZhbHVlXCIgW3NlbGVjdGVkXT1cIm9wdGlvblwiXG4gICAgICAgICAgICAgICAgICAgIFt2YWx1ZV09XCJvcHRpb25cIiBbcmVtb3ZhYmxlXT1cInRydWVcIiAocmVtb3ZlZCk9XCJyZW1vdmVLZXl3b3JkKG9wdGlvbiwgaSxqKVwiPlxuICAgICAgICAgICAgICAgICAgICB7e29wdGlvbn19XG4gICAgICAgICAgICAgICAgICAgIDxtYXQtaWNvbiBtYXRDaGlwUmVtb3ZlPmNhbmNlbDwvbWF0LWljb24+XG4gICAgICAgICAgICAgICAgPC9tYXQtY2hpcD5cbiAgICAgICAgICAgICAgICA8aW5wdXQgI2NoaXBzSW5wdXQgcGxhY2Vob2xkZXI9XCJhZGQuLi5cIiBbbWF0Q2hpcElucHV0Rm9yXT1cImNoaXBMaXN0XCIgW21hdENoaXBJbnB1dEFkZE9uQmx1cl09XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgICAgKG1hdENoaXBJbnB1dFRva2VuRW5kKT1cImFkZEtleXdvcmRGcm9tSW5wdXQoJGV2ZW50LCBpLGopXCJcbiAgICAgICAgICAgICAgICAgICAgW21hdENoaXBJbnB1dFNlcGFyYXRvcktleUNvZGVzXT1cInNlcGFyYXRvcktleXNDb2Rlc1wiIChrZXl1cCk9XCJrZXlVcCgkZXZlbnQsaSxqKVwiPlxuICAgICAgICAgICAgPC9tYXQtY2hpcC1saXN0PlxuICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxuICAgICAgICA8bWF0LWZvcm0tZmllbGQgKm5nU3dpdGNoRGVmYXVsdCBjbGFzcz1cImZvcm0tZmllbGQgZmllbGQtc2l6ZVwiIGFwcGVhcmFuY2U9XCJvdXRsaW5lXCI+XG4gICAgICAgICAgICA8bWF0LWxhYmVsPlZhbGV1cjwvbWF0LWxhYmVsPlxuICAgICAgICAgICAgPGlucHV0IFt0eXBlXT1cImZpZWxkLnR5cGVcIiBtYXRJbnB1dCBbbmdNb2RlbE9wdGlvbnNdPVwie3N0YW5kYWxvbmU6IHRydWV9XCIgWyhuZ01vZGVsKV09XCJmaWVsZC5kZWZhdWx0VmFsdWVcIlxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiXCI+XG4gICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XG4gICAgPC9uZy1jb250YWluZXI+XG5cbiAgICA8bWF0LWNoZWNrYm94IGNsYXNzPVwiZm9ybS1maWVsZFwiIFsobmdNb2RlbCldPVwiZmllbGQuaXNNYW5kYXRvcnlcIiBbbmdNb2RlbE9wdGlvbnNdPVwie3N0YW5kYWxvbmU6IHRydWV9XCI+XG4gICAgICAgIG9ibGlnYXRvaXJlXG4gICAgPC9tYXQtY2hlY2tib3g+XG4gICAgPGJ1dHRvbiBjbGFzcz1cInRyYW5zcGFyZW50LWJ1dHRvblwiIFtkaXNhYmxlZF09XCJmaWVsZC5zdWJMZXZlbD4yIHx8ICFmaWVsZC5lZGl0YWJsZVwiXG4gICAgICAgIFtzdHlsZS5vcGFjaXR5XT1cIihmaWVsZC5zdWJMZXZlbD4yIHx8ICFmaWVsZC5lZGl0YWJsZSkgPyAwIDoxXCIgbWF0LW1pbmktZmFiIGNvbG9yPVwic3VjY2Vzc1wiXG4gICAgICAgIChjbGljayk9J2FkZE5ld1N1YkxldmVsRmllbGQoJGV2ZW50KSc+XG4gICAgICAgIDxtYXQtaWNvbj5kZXZpY2VfaHViPC9tYXQtaWNvbj5cbiAgICA8L2J1dHRvbj5cblxuICAgIDxidXR0b24gY2xhc3M9XCJleHBhbmQtYnV0dG9uXCIgW2Rpc2FibGVkXT1cIiEoZmllbGQuZm9ybXMgJiYgZmllbGQuZm9ybXMubGVuZ3RoPjApXCJcbiAgICAgICAgW3N0eWxlLm9wYWNpdHldPVwiZmllbGQuZm9ybXMgJiYgZmllbGQuZm9ybXMubGVuZ3RoPjAgPyAxIDowXCIgbWF0LW1pbmktZmFiIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgIChjbGljayk9XCJleHBlbmRNb3JlKCRldmVudCxmaWVsZClcIj5cbiAgICAgICAgPG1hdC1pY29uICpuZ0lmPVwiIWZpZWxkLmV4cGFuZE1vcmVcIj5leHBhbmRfbGVzczwvbWF0LWljb24+XG4gICAgICAgIDxtYXQtaWNvbiAqbmdJZj1cImZpZWxkLmV4cGFuZE1vcmVcIj5leHBhbmRfbW9yZTwvbWF0LWljb24+XG4gICAgPC9idXR0b24+XG48L2Rpdj5cblxuPCEtLSA8ZGl2IGNsYXNzPVwiYWRkLWJ1dHRvbi1jb250YWluZXJcIiAqbmdJZj1cImxlbmd0aC0xPT09alwiPlxuICAgIDxidXR0b24gc3R5bGU9XCJtYXJnaW46MTBweCBhdXRvXCIgW2Rpc2FibGVkXT1cImxlbmd0aC0xIT09alwiIFtzdHlsZS5vcGFjaXR5XT1cImxlbmd0aC0xPT09aiA/IDEgOjBcIiBtYXQtcmFpc2VkLWJ1dHRvblxuICAgICAgICBjb2xvcj1cInByaW1hcnlcIiAoY2xpY2spPSdhZGROZXdGaWVsZCgkZXZlbnQsaSknPlxuICAgICAgICA8bWF0LWljb24+YWRkX2JveDwvbWF0LWljb24+XG4gICAgICAgIDxzcGFuPkFqb3V0ZXIgdW4gY2hhbXA8L3NwYW4+XG4gICAgPC9idXR0b24+XG48L2Rpdj4gLS0+XG5cbjxuZy1jb250ZW50IHNlbGVjdD1cIi5jaGlsZFwiPjwvbmctY29udGVudD4iXX0=