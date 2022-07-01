import { __assign, __awaiter, __generator, __read, __rest, __spread } from "tslib";
import { COMMA, ENTER, SEMICOLON } from "@angular/cdk/keycodes";
import { moveItemInArray, transferArrayItem } from "@angular/cdk/drag-drop";
import { Component } from '@angular/core';
import { Validators } from "@angular/forms";
import { DialogCreateTemplateComponent } from "../../components/template/dialog-create-template/dialog-create-template.component";
import { ExitConfirmComponent } from "../../components/exit-confirm/exit-confirm.component";
import { TypeComponent } from "../../components/template/type-dialog/type.component";
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "../../onboarding.service";
import * as i3 from "@angular/router";
import * as i4 from "@angular/material/dialog";
import * as i5 from "@nicky-lenaers/ngx-scroll-to";
import * as i6 from "@angular/material/icon";
import * as i7 from "@angular/common";
import * as i8 from "@angular/material/button";
import * as i9 from "@angular/cdk/drag-drop";
import * as i10 from "../../components/template/sub-template-profile/sub-template-profile.component";
import * as i11 from "ngx-intl-tel-input";
import * as i12 from "@angular/material/form-field";
import * as i13 from "@angular/material/select";
import * as i14 from "@angular/material/core";
import * as i15 from "@angular/material/input";
import * as i16 from "@angular/material/slide-toggle";
import * as i17 from "@angular/material/checkbox";
import * as i18 from "@angular/material/chips";
import * as i19 from "@angular/material/radio";
function TemplateProfileCreateComponent_li_11_Template(rf, ctx) { if (rf & 1) {
    var _r526 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 17);
    i0.ɵɵlistener("click", function TemplateProfileCreateComponent_li_11_Template_li_click_0_listener() { i0.ɵɵrestoreView(_r526); var cat_r523 = ctx.$implicit; var i_r524 = ctx.index; var ctx_r525 = i0.ɵɵnextContext(); return ctx_r525.onActiveMenu(cat_r523, i_r524); });
    i0.ɵɵelementStart(1, "span");
    i0.ɵɵelementStart(2, "span", 18);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var cat_r523 = ctx.$implicit;
    var i_r524 = ctx.index;
    var ctx_r518 = i0.ɵɵnextContext();
    i0.ɵɵclassMap(ctx_r518.editIndex === i_r524 ? "active" : "");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngxScrollTo", "#" + cat_r523.name);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(cat_r523.name);
} }
function TemplateProfileCreateComponent_div_26_mat_icon_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-icon");
    i0.ɵɵtext(1, "chevron_right");
    i0.ɵɵelementEnd();
} }
function TemplateProfileCreateComponent_div_26_mat_icon_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-icon");
    i0.ɵɵtext(1, "expand_more");
    i0.ɵɵelementEnd();
} }
function TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_div_3_Template(rf, ctx) { if (rf & 1) {
    var _r542 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 42);
    i0.ɵɵelementStart(1, "button", 21);
    i0.ɵɵlistener("click", function TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_div_3_Template_button_click_1_listener($event) { i0.ɵɵrestoreView(_r542); return $event.preventDefault(); });
    i0.ɵɵelementStart(2, "mat-icon", 22);
    i0.ɵɵtext(3, "drag_indicator");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
function TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_div_5_mat_icon_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-icon");
    i0.ɵɵtext(1, "expand_less ");
    i0.ɵɵelementEnd();
} }
function TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_div_5_mat_icon_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-icon");
    i0.ɵɵtext(1, "expand_more ");
    i0.ɵɵelementEnd();
} }
function TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_div_5_Template(rf, ctx) { if (rf & 1) {
    var _r546 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 43);
    i0.ɵɵelementStart(1, "div", 44);
    i0.ɵɵelementStart(2, "div");
    i0.ɵɵelementStart(3, "p", 25);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "p", 26);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "button", 45);
    i0.ɵɵlistener("click", function TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_div_5_Template_button_click_7_listener($event) { i0.ɵɵrestoreView(_r546); var ctx_r547 = i0.ɵɵnextContext(); var field_r535 = ctx_r547.$implicit; var j_r536 = ctx_r547.index; var i_r528 = i0.ɵɵnextContext(3).index; var ctx_r545 = i0.ɵɵnextContext(); $event.preventDefault(); return ctx_r545.onEditBlock(field_r535, i_r528, j_r536); });
    i0.ɵɵelementStart(8, "mat-icon", 46);
    i0.ɵɵtext(9, "settings");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "button", 47);
    i0.ɵɵlistener("click", function TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_div_5_Template_button_click_10_listener($event) { i0.ɵɵrestoreView(_r546); var ctx_r550 = i0.ɵɵnextContext(); var field_r535 = ctx_r550.$implicit; var j_r536 = ctx_r550.index; var i_r528 = i0.ɵɵnextContext(3).index; var ctx_r549 = i0.ɵɵnextContext(); return ctx_r549.onExpendMore({ event: $event, field: field_r535 }, i_r528, j_r536); });
    i0.ɵɵtemplate(11, TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_div_5_mat_icon_11_Template, 2, 0, "mat-icon", 28);
    i0.ɵɵtemplate(12, TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_div_5_mat_icon_12_Template, 2, 0, "mat-icon", 28);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var field_r535 = i0.ɵɵnextContext().$implicit;
    var ctx_r538 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1(" ", field_r535.label, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" Listes des informations n\u00E9cessaires pour la cr\u00E9ation de ", ctx_r538.catNameStart(field_r535.label) ? "l'" + field_r535.label : field_r535.label, " ");
    i0.ɵɵadvance(4);
    i0.ɵɵstyleProp("opacity", field_r535.forms && field_r535.forms.length > 0 ? 1 : 0);
    i0.ɵɵproperty("disabled", !(field_r535.forms && field_r535.forms.length > 0));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !field_r535.expandMore);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", field_r535.expandMore);
} }
function TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_div_7_div_1_div_2_div_3_Template(rf, ctx) { if (rf & 1) {
    var _r563 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 56);
    i0.ɵɵelementStart(1, "button", 21);
    i0.ɵɵlistener("click", function TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_div_7_div_1_div_2_div_3_Template_button_click_1_listener($event) { i0.ɵɵrestoreView(_r563); return $event.preventDefault(); });
    i0.ɵɵelementStart(2, "mat-icon", 22);
    i0.ɵɵtext(3, " drag_indicator");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
function TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_div_7_div_1_div_2_div_5_mat_icon_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-icon");
    i0.ɵɵtext(1, " expand_less ");
    i0.ɵɵelementEnd();
} }
function TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_div_7_div_1_div_2_div_5_mat_icon_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-icon");
    i0.ɵɵtext(1, " expand_more ");
    i0.ɵɵelementEnd();
} }
var _c0 = function () { return { standalone: true }; };
function TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_div_7_div_1_div_2_div_5_Template(rf, ctx) { if (rf & 1) {
    var _r568 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 43);
    i0.ɵɵelementStart(1, "div", 44);
    i0.ɵɵelementStart(2, "div");
    i0.ɵɵelementStart(3, "input", 57);
    i0.ɵɵlistener("ngModelChange", function TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_div_7_div_1_div_2_div_5_Template_input_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r568); var child_r556 = i0.ɵɵnextContext().$implicit; return child_r556.label = $event; });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "p", 26);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "button", 45);
    i0.ɵɵlistener("click", function TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_div_7_div_1_div_2_div_5_Template_button_click_6_listener($event) { i0.ɵɵrestoreView(_r568); var ctx_r570 = i0.ɵɵnextContext(); var child_r556 = ctx_r570.$implicit; var k_r557 = ctx_r570.index; var j_r536 = i0.ɵɵnextContext(3).index; var i_r528 = i0.ɵɵnextContext(3).index; var ctx_r569 = i0.ɵɵnextContext(); $event.preventDefault(); return ctx_r569.onEditBlock(child_r556, i_r528, j_r536, k_r557); });
    i0.ɵɵelementStart(7, "mat-icon", 46);
    i0.ɵɵtext(8, "settings");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "button", 47);
    i0.ɵɵlistener("click", function TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_div_7_div_1_div_2_div_5_Template_button_click_9_listener($event) { i0.ɵɵrestoreView(_r568); var ctx_r574 = i0.ɵɵnextContext(); var child_r556 = ctx_r574.$implicit; var k_r557 = ctx_r574.index; var j_r536 = i0.ɵɵnextContext(3).index; var i_r528 = i0.ɵɵnextContext(3).index; var ctx_r573 = i0.ɵɵnextContext(); return ctx_r573.onExpendMore({ event: $event, field: child_r556 }, i_r528, j_r536, k_r557); });
    i0.ɵɵtemplate(10, TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_div_7_div_1_div_2_div_5_mat_icon_10_Template, 2, 0, "mat-icon", 28);
    i0.ɵɵtemplate(11, TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_div_7_div_1_div_2_div_5_mat_icon_11_Template, 2, 0, "mat-icon", 28);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var child_r556 = i0.ɵɵnextContext().$implicit;
    var category_r527 = i0.ɵɵnextContext(6).$implicit;
    var ctx_r559 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("readonly", ctx_r559.categories.length < 4 || !category_r527.editable)("readonly", !category_r527.editable)("ngModel", child_r556.label)("ngModelOptions", i0.ɵɵpureFunction0(10, _c0));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" Listes des informations n\u00E9cessaires pour la cr\u00E9ation de ", ctx_r559.catNameStart(child_r556.label) ? "l'" + child_r556.label : child_r556.label, " ");
    i0.ɵɵadvance(4);
    i0.ɵɵstyleProp("opacity", child_r556.forms && child_r556.forms.length > 0 ? 1 : 0);
    i0.ɵɵproperty("disabled", !(child_r556.forms && child_r556.forms.length > 0));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !child_r556.expandMore);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", child_r556.expandMore);
} }
function TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_div_7_div_1_div_2_div_7_div_1_div_2_div_3_Template(rf, ctx) { if (rf & 1) {
    var _r587 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 62);
    i0.ɵɵelementStart(1, "button", 21);
    i0.ɵɵlistener("click", function TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_div_7_div_1_div_2_div_7_div_1_div_2_div_3_Template_button_click_1_listener($event) { i0.ɵɵrestoreView(_r587); return $event.preventDefault(); });
    i0.ɵɵelementStart(2, "mat-icon", 22);
    i0.ɵɵtext(3, " drag_indicator ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
function TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_div_7_div_1_div_2_div_7_div_1_div_2_div_7_Template(rf, ctx) { if (rf & 1) {
    var _r590 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 63);
    i0.ɵɵelementStart(1, "button", 64);
    i0.ɵɵlistener("click", function TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_div_7_div_1_div_2_div_7_div_1_div_2_div_7_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r590); var k_r557 = i0.ɵɵnextContext(4).index; var j_r536 = i0.ɵɵnextContext(3).index; var i_r528 = i0.ɵɵnextContext(3).index; var ctx_r588 = i0.ɵɵnextContext(); return ctx_r588.onAddNewField(i_r528, j_r536, k_r557); });
    i0.ɵɵelementStart(2, "span");
    i0.ɵɵtext(3, "Ajouter un champ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "mat-icon");
    i0.ɵɵtext(5, " add ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
function TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_div_7_div_1_div_2_div_7_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    var _r594 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 59);
    i0.ɵɵelementStart(1, "div", 34);
    i0.ɵɵelementStart(2, "div", 35);
    i0.ɵɵtemplate(3, TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_div_7_div_1_div_2_div_7_div_1_div_2_div_3_Template, 4, 0, "div", 60);
    i0.ɵɵelementStart(4, "div", 37);
    i0.ɵɵelementStart(5, "lib-sub-category", 61);
    i0.ɵɵlistener("onCheckValue", function TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_div_7_div_1_div_2_div_7_div_1_div_2_Template_lib_sub_category_onCheckValue_5_listener($event) { i0.ɵɵrestoreView(_r594); var ctx_r593 = i0.ɵɵnextContext(10); return ctx_r593.onCheckValue($event); })("onAddKeywordFromInput", function TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_div_7_div_1_div_2_div_7_div_1_div_2_Template_lib_sub_category_onAddKeywordFromInput_5_listener($event) { i0.ɵɵrestoreView(_r594); var l_r583 = ctx.index; var k_r557 = i0.ɵɵnextContext(3).index; var j_r536 = i0.ɵɵnextContext(3).index; var i_r528 = i0.ɵɵnextContext(3).index; var ctx_r595 = i0.ɵɵnextContext(); return ctx_r595.addKeywordFromInput($event.event, $event.prev, i_r528, j_r536, k_r557, l_r583); })("onKeyPress", function TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_div_7_div_1_div_2_div_7_div_1_div_2_Template_lib_sub_category_onKeyPress_5_listener($event) { i0.ɵɵrestoreView(_r594); var l_r583 = ctx.index; var k_r557 = i0.ɵɵnextContext(3).index; var j_r536 = i0.ɵɵnextContext(3).index; var i_r528 = i0.ɵɵnextContext(3).index; var ctx_r599 = i0.ɵɵnextContext(); return ctx_r599.onKeyPress($event.event, i_r528, j_r536, k_r557, l_r583); })("onAddNewField", function TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_div_7_div_1_div_2_div_7_div_1_div_2_Template_lib_sub_category_onAddNewField_5_listener() { i0.ɵɵrestoreView(_r594); var k_r557 = i0.ɵɵnextContext(3).index; var j_r536 = i0.ɵɵnextContext(3).index; var i_r528 = i0.ɵɵnextContext(3).index; var ctx_r603 = i0.ɵɵnextContext(); return ctx_r603.onAddNewField(i_r528, j_r536, k_r557); })("onRemoveField", function TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_div_7_div_1_div_2_div_7_div_1_div_2_Template_lib_sub_category_onRemoveField_5_listener() { i0.ɵɵrestoreView(_r594); var l_r583 = ctx.index; var k_r557 = i0.ɵɵnextContext(3).index; var j_r536 = i0.ɵɵnextContext(3).index; var i_r528 = i0.ɵɵnextContext(3).index; var ctx_r607 = i0.ɵɵnextContext(); return ctx_r607.onRemoveField(i_r528, j_r536, k_r557, l_r583); })("onChangeType", function TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_div_7_div_1_div_2_div_7_div_1_div_2_Template_lib_sub_category_onChangeType_5_listener() { i0.ɵɵrestoreView(_r594); var c2_r582 = ctx.$implicit; var l_r583 = ctx.index; var k_r557 = i0.ɵɵnextContext(3).index; var j_r536 = i0.ɵɵnextContext(3).index; var i_r528 = i0.ɵɵnextContext(3).index; var ctx_r611 = i0.ɵɵnextContext(); return ctx_r611.onChangeType(c2_r582.type, i_r528, j_r536, k_r557, l_r583); })("onRemoveKeyword", function TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_div_7_div_1_div_2_div_7_div_1_div_2_Template_lib_sub_category_onRemoveKeyword_5_listener($event) { i0.ɵɵrestoreView(_r594); var l_r583 = ctx.index; var k_r557 = i0.ɵɵnextContext(3).index; var j_r536 = i0.ɵɵnextContext(3).index; var i_r528 = i0.ɵɵnextContext(3).index; var ctx_r615 = i0.ɵɵnextContext(); return ctx_r615.removeKeyword($event.event, i_r528, j_r536, k_r557, l_r583); })("onAddNewSubLevelField", function TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_div_7_div_1_div_2_div_7_div_1_div_2_Template_lib_sub_category_onAddNewSubLevelField_5_listener() { i0.ɵɵrestoreView(_r594); var l_r583 = ctx.index; var k_r557 = i0.ɵɵnextContext(3).index; var j_r536 = i0.ɵɵnextContext(3).index; var i_r528 = i0.ɵɵnextContext(3).index; var ctx_r619 = i0.ɵɵnextContext(); return ctx_r619.onAddNewSubLevelField(i_r528, j_r536, k_r557, l_r583); })("onExpendMore", function TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_div_7_div_1_div_2_div_7_div_1_div_2_Template_lib_sub_category_onExpendMore_5_listener($event) { i0.ɵɵrestoreView(_r594); var l_r583 = ctx.index; var k_r557 = i0.ɵɵnextContext(3).index; var j_r536 = i0.ɵɵnextContext(3).index; var i_r528 = i0.ɵɵnextContext(3).index; var ctx_r623 = i0.ɵɵnextContext(); return ctx_r623.onExpendMore($event, i_r528, j_r536, k_r557, l_r583); })("onChangeLabel", function TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_div_7_div_1_div_2_div_7_div_1_div_2_Template_lib_sub_category_onChangeLabel_5_listener($event) { i0.ɵɵrestoreView(_r594); var l_r583 = ctx.index; var k_r557 = i0.ɵɵnextContext(3).index; var j_r536 = i0.ɵɵnextContext(3).index; var i_r528 = i0.ɵɵnextContext(3).index; var ctx_r627 = i0.ɵɵnextContext(); return ctx_r627.onChangeLabel($event, i_r528, j_r536, k_r557, l_r583); })("onCheckedChip", function TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_div_7_div_1_div_2_div_7_div_1_div_2_Template_lib_sub_category_onCheckedChip_5_listener($event) { i0.ɵɵrestoreView(_r594); var l_r583 = ctx.index; var k_r557 = i0.ɵɵnextContext(3).index; var j_r536 = i0.ɵɵnextContext(3).index; var i_r528 = i0.ɵɵnextContext(3).index; var ctx_r631 = i0.ɵɵnextContext(); return ctx_r631.onCheckedChip($event, i_r528, j_r536, k_r557, l_r583); })("onDrop", function TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_div_7_div_1_div_2_div_7_div_1_div_2_Template_lib_sub_category_onDrop_5_listener($event) { i0.ɵɵrestoreView(_r594); var ctx_r635 = i0.ɵɵnextContext(10); return ctx_r635.drop($event); })("onCheckedDefault", function TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_div_7_div_1_div_2_div_7_div_1_div_2_Template_lib_sub_category_onCheckedDefault_5_listener($event) { i0.ɵɵrestoreView(_r594); var l_r583 = ctx.index; var k_r557 = i0.ɵɵnextContext(3).index; var j_r536 = i0.ɵɵnextContext(3).index; var i_r528 = i0.ɵɵnextContext(3).index; var ctx_r636 = i0.ɵɵnextContext(); return ctx_r636.onCheckedDefault($event, i_r528, j_r536, k_r557, l_r583); })("onEditBlock", function TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_div_7_div_1_div_2_div_7_div_1_div_2_Template_lib_sub_category_onEditBlock_5_listener() { i0.ɵɵrestoreView(_r594); var c2_r582 = ctx.$implicit; var l_r583 = ctx.index; var k_r557 = i0.ɵɵnextContext(3).index; var j_r536 = i0.ɵɵnextContext(3).index; var i_r528 = i0.ɵɵnextContext(3).index; var ctx_r640 = i0.ɵɵnextContext(); return ctx_r640.onEditBlock(c2_r582, i_r528, j_r536, k_r557, l_r583); });
    i0.ɵɵelement(6, "div", 48);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(7, TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_div_7_div_1_div_2_div_7_div_1_div_2_div_7_Template, 6, 0, "div", 55);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var c2_r582 = ctx.$implicit;
    var l_r583 = ctx.index;
    var ctx_r644 = i0.ɵɵnextContext(3);
    var child_r556 = ctx_r644.$implicit;
    var k_r557 = ctx_r644.index;
    var ctx_r581 = i0.ɵɵnextContext(7);
    i0.ɵɵstyleProp("width", c2_r582.forms && c2_r582.forms.length > 0 ? "100%" : ctx_r581.fieldWidth(c2_r582.type, child_r556.forms.length, l_r583));
    i0.ɵɵproperty("id", c2_r582.key);
    i0.ɵɵadvance(2);
    i0.ɵɵclassMap(c2_r582.forms && c2_r582.forms.length > 0 ? "sub-category-forms" : "");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", c2_r582.forms && c2_r582.forms.length > 0);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("field", c2_r582)("length", child_r556 == null ? null : child_r556.forms == null ? null : child_r556.forms.length)("blink", ctx_r581.checkBlink(l_r583, 3) === ctx_r581.newFieldIndex)("i", k_r557)("j", l_r583)("conditionData", ctx_r581.conditionData);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", (child_r556 == null ? null : child_r556.forms == null ? null : child_r556.forms.length) - 1 === l_r583);
} }
function TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_div_7_div_1_div_2_div_7_div_1_Template(rf, ctx) { if (rf & 1) {
    var _r646 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 50, 31);
    i0.ɵɵlistener("cdkDropListDropped", function TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_div_7_div_1_div_2_div_7_div_1_Template_div_cdkDropListDropped_0_listener($event) { i0.ɵɵrestoreView(_r646); var ctx_r645 = i0.ɵɵnextContext(9); return ctx_r645.drop($event); });
    i0.ɵɵtemplate(2, TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_div_7_div_1_div_2_div_7_div_1_div_2_Template, 8, 13, "div", 58);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var child_r556 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵproperty("cdkDropListData", child_r556.forms);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", child_r556.forms);
} }
function TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_div_7_div_1_div_2_div_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 48);
    i0.ɵɵtemplate(1, TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_div_7_div_1_div_2_div_7_div_1_Template, 3, 2, "div", 49);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var child_r556 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", child_r556.forms && child_r556.forms.length > 0);
} }
function TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_div_7_div_1_div_2_div_8_Template(rf, ctx) { if (rf & 1) {
    var _r651 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 63);
    i0.ɵɵelementStart(1, "button", 64);
    i0.ɵɵlistener("click", function TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_div_7_div_1_div_2_div_8_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r651); var j_r536 = i0.ɵɵnextContext(4).index; var i_r528 = i0.ɵɵnextContext(3).index; var ctx_r649 = i0.ɵɵnextContext(); return ctx_r649.onAddNewField(i_r528, j_r536); });
    i0.ɵɵelementStart(2, "span");
    i0.ɵɵtext(3, "Ajouter un champ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "mat-icon");
    i0.ɵɵtext(5, "add");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
function TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_div_7_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    var _r654 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 52);
    i0.ɵɵelementStart(1, "div", 34);
    i0.ɵɵelementStart(2, "div", 35);
    i0.ɵɵtemplate(3, TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_div_7_div_1_div_2_div_3_Template, 4, 0, "div", 53);
    i0.ɵɵelementStart(4, "div", 37);
    i0.ɵɵtemplate(5, TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_div_7_div_1_div_2_div_5_Template, 12, 11, "div", 38);
    i0.ɵɵelementStart(6, "lib-sub-category", 54);
    i0.ɵɵlistener("onCheckValue", function TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_div_7_div_1_div_2_Template_lib_sub_category_onCheckValue_6_listener($event) { i0.ɵɵrestoreView(_r654); var ctx_r653 = i0.ɵɵnextContext(7); return ctx_r653.onCheckValue($event); })("onAddKeywordFromInput", function TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_div_7_div_1_div_2_Template_lib_sub_category_onAddKeywordFromInput_6_listener($event) { i0.ɵɵrestoreView(_r654); var k_r557 = ctx.index; var j_r536 = i0.ɵɵnextContext(3).index; var i_r528 = i0.ɵɵnextContext(3).index; var ctx_r655 = i0.ɵɵnextContext(); return ctx_r655.addKeywordFromInput($event.event, $event.prev, i_r528, j_r536, k_r557); })("onKeyPress", function TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_div_7_div_1_div_2_Template_lib_sub_category_onKeyPress_6_listener($event) { i0.ɵɵrestoreView(_r654); var k_r557 = ctx.index; var j_r536 = i0.ɵɵnextContext(3).index; var i_r528 = i0.ɵɵnextContext(3).index; var ctx_r658 = i0.ɵɵnextContext(); return ctx_r658.onKeyPress($event.event, i_r528, j_r536, k_r557); })("onAddNewField", function TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_div_7_div_1_div_2_Template_lib_sub_category_onAddNewField_6_listener() { i0.ɵɵrestoreView(_r654); var j_r536 = i0.ɵɵnextContext(3).index; var i_r528 = i0.ɵɵnextContext(3).index; var ctx_r661 = i0.ɵɵnextContext(); return ctx_r661.onAddNewField(i_r528, j_r536); })("onRemoveField", function TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_div_7_div_1_div_2_Template_lib_sub_category_onRemoveField_6_listener() { i0.ɵɵrestoreView(_r654); var k_r557 = ctx.index; var j_r536 = i0.ɵɵnextContext(3).index; var i_r528 = i0.ɵɵnextContext(3).index; var ctx_r664 = i0.ɵɵnextContext(); return ctx_r664.onRemoveField(i_r528, j_r536, k_r557); })("onChangeType", function TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_div_7_div_1_div_2_Template_lib_sub_category_onChangeType_6_listener() { i0.ɵɵrestoreView(_r654); var child_r556 = ctx.$implicit; var k_r557 = ctx.index; var j_r536 = i0.ɵɵnextContext(3).index; var i_r528 = i0.ɵɵnextContext(3).index; var ctx_r667 = i0.ɵɵnextContext(); return ctx_r667.onChangeType(child_r556.type, i_r528, j_r536, k_r557); })("onRemoveKeyword", function TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_div_7_div_1_div_2_Template_lib_sub_category_onRemoveKeyword_6_listener($event) { i0.ɵɵrestoreView(_r654); var k_r557 = ctx.index; var j_r536 = i0.ɵɵnextContext(3).index; var i_r528 = i0.ɵɵnextContext(3).index; var ctx_r670 = i0.ɵɵnextContext(); return ctx_r670.removeKeyword($event.event, i_r528, j_r536, k_r557); })("onAddNewSubLevelField", function TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_div_7_div_1_div_2_Template_lib_sub_category_onAddNewSubLevelField_6_listener() { i0.ɵɵrestoreView(_r654); var k_r557 = ctx.index; var j_r536 = i0.ɵɵnextContext(3).index; var i_r528 = i0.ɵɵnextContext(3).index; var ctx_r673 = i0.ɵɵnextContext(); return ctx_r673.onAddNewSubLevelField(i_r528, j_r536, k_r557); })("onExpendMore", function TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_div_7_div_1_div_2_Template_lib_sub_category_onExpendMore_6_listener($event) { i0.ɵɵrestoreView(_r654); var k_r557 = ctx.index; var j_r536 = i0.ɵɵnextContext(3).index; var i_r528 = i0.ɵɵnextContext(3).index; var ctx_r676 = i0.ɵɵnextContext(); return ctx_r676.onExpendMore($event, i_r528, j_r536, k_r557); })("onChangeLabel", function TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_div_7_div_1_div_2_Template_lib_sub_category_onChangeLabel_6_listener($event) { i0.ɵɵrestoreView(_r654); var k_r557 = ctx.index; var j_r536 = i0.ɵɵnextContext(3).index; var i_r528 = i0.ɵɵnextContext(3).index; var ctx_r679 = i0.ɵɵnextContext(); return ctx_r679.onChangeLabel($event, i_r528, j_r536, k_r557); })("onCheckedChip", function TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_div_7_div_1_div_2_Template_lib_sub_category_onCheckedChip_6_listener($event) { i0.ɵɵrestoreView(_r654); var k_r557 = ctx.index; var j_r536 = i0.ɵɵnextContext(3).index; var i_r528 = i0.ɵɵnextContext(3).index; var ctx_r682 = i0.ɵɵnextContext(); return ctx_r682.onCheckedChip($event, i_r528, j_r536, k_r557); })("onDrop", function TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_div_7_div_1_div_2_Template_lib_sub_category_onDrop_6_listener($event) { i0.ɵɵrestoreView(_r654); var ctx_r685 = i0.ɵɵnextContext(7); return ctx_r685.drop($event); })("onCheckedDefault", function TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_div_7_div_1_div_2_Template_lib_sub_category_onCheckedDefault_6_listener($event) { i0.ɵɵrestoreView(_r654); var k_r557 = ctx.index; var j_r536 = i0.ɵɵnextContext(3).index; var i_r528 = i0.ɵɵnextContext(3).index; var ctx_r686 = i0.ɵɵnextContext(); return ctx_r686.onCheckedDefault($event, i_r528, j_r536, k_r557); })("onEditBlock", function TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_div_7_div_1_div_2_Template_lib_sub_category_onEditBlock_6_listener() { i0.ɵɵrestoreView(_r654); var child_r556 = ctx.$implicit; var k_r557 = ctx.index; var j_r536 = i0.ɵɵnextContext(3).index; var i_r528 = i0.ɵɵnextContext(3).index; var ctx_r689 = i0.ɵɵnextContext(); return ctx_r689.onEditBlock(child_r556, i_r528, j_r536, k_r557); });
    i0.ɵɵtemplate(7, TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_div_7_div_1_div_2_div_7_Template, 2, 1, "div", 40);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(8, TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_div_7_div_1_div_2_div_8_Template, 6, 0, "div", 55);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var child_r556 = ctx.$implicit;
    var k_r557 = ctx.index;
    var ctx_r692 = i0.ɵɵnextContext(3);
    var field_r535 = ctx_r692.$implicit;
    var j_r536 = ctx_r692.index;
    var ctx_r555 = i0.ɵɵnextContext(4);
    i0.ɵɵstyleProp("width", child_r556.forms && child_r556.forms.length > 0 ? "100%" : ctx_r555.fieldWidth(child_r556.type, field_r535.forms.length, k_r557));
    i0.ɵɵproperty("id", child_r556.key);
    i0.ɵɵadvance(2);
    i0.ɵɵclassMap(child_r556.forms && child_r556.forms.length > 0 ? "sub-category-forms" : "");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", child_r556.forms && child_r556.forms.length > 0);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", child_r556.forms && child_r556.forms.length > 0);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("field", child_r556)("length", field_r535 == null ? null : field_r535.forms == null ? null : field_r535.forms.length)("i", j_r536)("blink", ctx_r555.checkBlink(k_r557, 2) === ctx_r555.newFieldIndex)("j", k_r557)("conditionData", ctx_r555.conditionData);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", child_r556.expandMore);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", (field_r535 == null ? null : field_r535.forms == null ? null : field_r535.forms.length) - 1 === k_r557);
} }
function TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_div_7_div_1_Template(rf, ctx) { if (rf & 1) {
    var _r694 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 50, 31);
    i0.ɵɵlistener("cdkDropListDropped", function TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_div_7_div_1_Template_div_cdkDropListDropped_0_listener($event) { i0.ɵɵrestoreView(_r694); var ctx_r693 = i0.ɵɵnextContext(6); return ctx_r693.drop($event); });
    i0.ɵɵtemplate(2, TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_div_7_div_1_div_2_Template, 9, 15, "div", 51);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var field_r535 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵproperty("cdkDropListData", field_r535.forms);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", field_r535.forms);
} }
function TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_div_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 48);
    i0.ɵɵtemplate(1, TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_div_7_div_1_Template, 3, 2, "div", 49);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var field_r535 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", field_r535.forms);
} }
function TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_div_8_Template(rf, ctx) { if (rf & 1) {
    var _r699 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 65);
    i0.ɵɵelementStart(1, "button", 66);
    i0.ɵɵlistener("click", function TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_div_8_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r699); var i_r528 = i0.ɵɵnextContext(4).index; var ctx_r697 = i0.ɵɵnextContext(); return ctx_r697.onAddNewField(i_r528); });
    i0.ɵɵelementStart(2, "span");
    i0.ɵɵtext(3, "Ajouter un champ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "mat-icon");
    i0.ɵɵtext(5, "add");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var j_r536 = i0.ɵɵnextContext().index;
    var category_r527 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵstyleProp("opacity", (category_r527 == null ? null : category_r527.forms == null ? null : category_r527.forms.length) - 1 === j_r536 ? 1 : 0);
    i0.ɵɵproperty("disabled", (category_r527 == null ? null : category_r527.forms == null ? null : category_r527.forms.length) - 1 !== j_r536);
} }
function TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_Template(rf, ctx) { if (rf & 1) {
    var _r703 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 33);
    i0.ɵɵelementStart(1, "div", 34);
    i0.ɵɵelementStart(2, "div", 35);
    i0.ɵɵtemplate(3, TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_div_3_Template, 4, 0, "div", 36);
    i0.ɵɵelementStart(4, "div", 37);
    i0.ɵɵtemplate(5, TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_div_5_Template, 13, 7, "div", 38);
    i0.ɵɵelementStart(6, "lib-sub-category", 39);
    i0.ɵɵlistener("onCheckValue", function TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_Template_lib_sub_category_onCheckValue_6_listener($event) { i0.ɵɵrestoreView(_r703); var ctx_r702 = i0.ɵɵnextContext(4); return ctx_r702.onCheckValue($event); })("onAddKeywordFromInput", function TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_Template_lib_sub_category_onAddKeywordFromInput_6_listener($event) { i0.ɵɵrestoreView(_r703); var j_r536 = ctx.index; var i_r528 = i0.ɵɵnextContext(3).index; var ctx_r704 = i0.ɵɵnextContext(); return ctx_r704.addKeywordFromInput($event.event, $event.prev, i_r528, j_r536); })("onKeyPress", function TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_Template_lib_sub_category_onKeyPress_6_listener($event) { i0.ɵɵrestoreView(_r703); var j_r536 = ctx.index; var i_r528 = i0.ɵɵnextContext(3).index; var ctx_r706 = i0.ɵɵnextContext(); return ctx_r706.onKeyPress($event.event, i_r528, j_r536); })("onAddNewField", function TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_Template_lib_sub_category_onAddNewField_6_listener() { i0.ɵɵrestoreView(_r703); var i_r528 = i0.ɵɵnextContext(3).index; var ctx_r708 = i0.ɵɵnextContext(); return ctx_r708.onAddNewField(i_r528); })("onRemoveField", function TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_Template_lib_sub_category_onRemoveField_6_listener() { i0.ɵɵrestoreView(_r703); var j_r536 = ctx.index; var i_r528 = i0.ɵɵnextContext(3).index; var ctx_r710 = i0.ɵɵnextContext(); return ctx_r710.onRemoveField(i_r528, j_r536); })("onChangeType", function TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_Template_lib_sub_category_onChangeType_6_listener() { i0.ɵɵrestoreView(_r703); var field_r535 = ctx.$implicit; var j_r536 = ctx.index; var i_r528 = i0.ɵɵnextContext(3).index; var ctx_r712 = i0.ɵɵnextContext(); return ctx_r712.onChangeType(field_r535.type, i_r528, j_r536); })("onRemoveKeyword", function TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_Template_lib_sub_category_onRemoveKeyword_6_listener($event) { i0.ɵɵrestoreView(_r703); var j_r536 = ctx.index; var i_r528 = i0.ɵɵnextContext(3).index; var ctx_r714 = i0.ɵɵnextContext(); return ctx_r714.removeKeyword($event.event, i_r528, j_r536); })("onAddNewSubLevelField", function TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_Template_lib_sub_category_onAddNewSubLevelField_6_listener() { i0.ɵɵrestoreView(_r703); var j_r536 = ctx.index; var i_r528 = i0.ɵɵnextContext(3).index; var ctx_r716 = i0.ɵɵnextContext(); return ctx_r716.onAddNewSubLevelField(i_r528, j_r536); })("onExpendMore", function TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_Template_lib_sub_category_onExpendMore_6_listener($event) { i0.ɵɵrestoreView(_r703); var j_r536 = ctx.index; var i_r528 = i0.ɵɵnextContext(3).index; var ctx_r718 = i0.ɵɵnextContext(); return ctx_r718.onExpendMore($event, i_r528, j_r536); })("onChangeLabel", function TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_Template_lib_sub_category_onChangeLabel_6_listener($event) { i0.ɵɵrestoreView(_r703); var j_r536 = ctx.index; var i_r528 = i0.ɵɵnextContext(3).index; var ctx_r720 = i0.ɵɵnextContext(); return ctx_r720.onChangeLabel($event, i_r528, j_r536); })("onCheckedChip", function TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_Template_lib_sub_category_onCheckedChip_6_listener($event) { i0.ɵɵrestoreView(_r703); var j_r536 = ctx.index; var i_r528 = i0.ɵɵnextContext(3).index; var ctx_r722 = i0.ɵɵnextContext(); return ctx_r722.onCheckedChip($event, i_r528, j_r536); })("onDrop", function TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_Template_lib_sub_category_onDrop_6_listener($event) { i0.ɵɵrestoreView(_r703); var ctx_r724 = i0.ɵɵnextContext(4); return ctx_r724.drop($event); })("onCheckedDefault", function TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_Template_lib_sub_category_onCheckedDefault_6_listener($event) { i0.ɵɵrestoreView(_r703); var j_r536 = ctx.index; var i_r528 = i0.ɵɵnextContext(3).index; var ctx_r725 = i0.ɵɵnextContext(); return ctx_r725.onCheckedDefault($event, i_r528, j_r536); })("onEditBlock", function TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_Template_lib_sub_category_onEditBlock_6_listener() { i0.ɵɵrestoreView(_r703); var field_r535 = ctx.$implicit; var j_r536 = ctx.index; var i_r528 = i0.ɵɵnextContext(3).index; var ctx_r727 = i0.ɵɵnextContext(); return ctx_r727.onEditBlock(field_r535, i_r528, j_r536); });
    i0.ɵɵtemplate(7, TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_div_7_Template, 2, 1, "div", 40);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(8, TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_div_8_Template, 6, 3, "div", 41);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var field_r535 = ctx.$implicit;
    var j_r536 = ctx.index;
    var ctx_r729 = i0.ɵɵnextContext(3);
    var category_r527 = ctx_r729.$implicit;
    var i_r528 = ctx_r729.index;
    var ctx_r534 = i0.ɵɵnextContext();
    i0.ɵɵstyleProp("width", field_r535.forms && field_r535.forms.length > 0 ? "100%" : ctx_r534.fieldWidth(field_r535.type, category_r527.forms.length, j_r536));
    i0.ɵɵproperty("id", field_r535.key);
    i0.ɵɵadvance(2);
    i0.ɵɵclassMap(field_r535.forms && field_r535.forms.length > 0 ? "sub-category-forms" : "");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", field_r535.forms);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", field_r535.forms);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("field", field_r535)("length", category_r527 == null ? null : category_r527.forms == null ? null : category_r527.forms.length)("i", i_r528)("j", j_r536)("blink", ctx_r534.checkBlink(j_r536, 1) === ctx_r534.newFieldIndex)("conditionData", ctx_r534.conditionData);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", field_r535.expandMore);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", (category_r527 == null ? null : category_r527.forms == null ? null : category_r527.forms.length) - 1 === j_r536);
} }
function TemplateProfileCreateComponent_div_26_div_15_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_Template, 9, 15, "div", 32);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var category_r527 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", category_r527.forms);
} }
function TemplateProfileCreateComponent_div_26_div_15_Template(rf, ctx) { if (rf & 1) {
    var _r732 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 30, 31);
    i0.ɵɵlistener("cdkDropListDropped", function TemplateProfileCreateComponent_div_26_div_15_Template_div_cdkDropListDropped_0_listener($event) { i0.ɵɵrestoreView(_r732); var ctx_r731 = i0.ɵɵnextContext(2); return ctx_r731.drop($event); });
    i0.ɵɵtemplate(2, TemplateProfileCreateComponent_div_26_div_15_ng_container_2_Template, 2, 1, "ng-container", 28);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var category_r527 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("cdkDropListData", category_r527.forms);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", category_r527.expandMore);
} }
function TemplateProfileCreateComponent_div_26_Template(rf, ctx) { if (rf & 1) {
    var _r735 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 19);
    i0.ɵɵelementStart(1, "div", 20);
    i0.ɵɵelementStart(2, "button", 21);
    i0.ɵɵlistener("click", function TemplateProfileCreateComponent_div_26_Template_button_click_2_listener($event) { i0.ɵɵrestoreView(_r735); return $event.preventDefault(); });
    i0.ɵɵelementStart(3, "mat-icon", 22);
    i0.ɵɵtext(4, "drag_indicator");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 23);
    i0.ɵɵelementStart(6, "div", 24);
    i0.ɵɵlistener("click", function TemplateProfileCreateComponent_div_26_Template_div_click_6_listener($event) { i0.ɵɵrestoreView(_r735); var category_r527 = ctx.$implicit; var i_r528 = ctx.index; var ctx_r736 = i0.ɵɵnextContext(); ctx_r736.onActiveMenu(category_r527, i_r528, $event); return ctx_r736.onExpendMore({ event: $event, field: category_r527 }, i_r528); });
    i0.ɵɵelementStart(7, "div");
    i0.ɵɵelementStart(8, "p", 25);
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "p", 26);
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "button", 27);
    i0.ɵɵlistener("click", function TemplateProfileCreateComponent_div_26_Template_button_click_12_listener($event) { i0.ɵɵrestoreView(_r735); var category_r527 = ctx.$implicit; var i_r528 = ctx.index; var ctx_r737 = i0.ɵɵnextContext(); return ctx_r737.onExpendMore({ event: $event, field: category_r527 }, i_r528); });
    i0.ɵɵtemplate(13, TemplateProfileCreateComponent_div_26_mat_icon_13_Template, 2, 0, "mat-icon", 28);
    i0.ɵɵtemplate(14, TemplateProfileCreateComponent_div_26_mat_icon_14_Template, 2, 0, "mat-icon", 28);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(15, TemplateProfileCreateComponent_div_26_div_15_Template, 3, 2, "div", 29);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var category_r527 = ctx.$implicit;
    var i_r528 = ctx.index;
    var ctx_r520 = i0.ɵɵnextContext();
    i0.ɵɵclassMap(ctx_r520.editIndex === i_r528 ? "active" : "");
    i0.ɵɵstyleProp("padding-bottom", category_r527.expandMore ? "50px" : "10px");
    i0.ɵɵproperty("id", category_r527.name);
    i0.ɵɵadvance(9);
    i0.ɵɵtextInterpolate1(" ", category_r527.name, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" Listes des informations n\u00E9cessaires pour la cr\u00E9ation de ", ctx_r520.catNameStart(category_r527.name) ? "l'" + category_r527.name : category_r527.name, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", !category_r527.expandMore);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", category_r527.expandMore);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", category_r527.forms);
} }
function TemplateProfileCreateComponent_div_33_ng_container_32_div_6_Template(rf, ctx) { if (rf & 1) {
    var _r748 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 100);
    i0.ɵɵelementStart(1, "mat-slide-toggle", 101);
    i0.ɵɵlistener("ngModelChange", function TemplateProfileCreateComponent_div_33_ng_container_32_div_6_Template_mat_slide_toggle_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r748); var ctx_r747 = i0.ɵɵnextContext(3); return ctx_r747.currentEditBlock.defaultValue = $event; });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "span", 102);
    i0.ɵɵtext(3, "Valeur par d\u00E9faut");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r739 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", ctx_r739.currentEditBlock.defaultValue)("ngModelOptions", i0.ɵɵpureFunction0(2, _c0));
} }
function TemplateProfileCreateComponent_div_33_ng_container_32_div_7_Template(rf, ctx) { if (rf & 1) {
    var _r750 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 103);
    i0.ɵɵelementStart(1, "mat-checkbox", 104);
    i0.ɵɵlistener("ngModelChange", function TemplateProfileCreateComponent_div_33_ng_container_32_div_7_Template_mat_checkbox_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r750); var ctx_r749 = i0.ɵɵnextContext(3); return ctx_r749.currentEditBlock.value = $event; });
    i0.ɵɵtext(2, " Coch\u00E9 par d\u00E9fault ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r740 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", ctx_r740.currentEditBlock.value)("ngModelOptions", i0.ɵɵpureFunction0(2, _c0));
} }
function TemplateProfileCreateComponent_div_33_ng_container_32_mat_form_field_8_mat_chip_6_Template(rf, ctx) { if (rf & 1) {
    var _r757 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-chip", 111);
    i0.ɵɵlistener("dblclick", function TemplateProfileCreateComponent_div_33_ng_container_32_mat_form_field_8_mat_chip_6_Template_mat_chip_dblclick_0_listener() { i0.ɵɵrestoreView(_r757); var option_r755 = ctx.$implicit; var ctx_r756 = i0.ɵɵnextContext(4); return ctx_r756.onCheckedChipBlock(option_r755, ctx_r756.currentEditBlock); })("click", function TemplateProfileCreateComponent_div_33_ng_container_32_mat_form_field_8_mat_chip_6_Template_mat_chip_click_0_listener() { i0.ɵɵrestoreView(_r757); var option_r755 = ctx.$implicit; var ctx_r758 = i0.ɵɵnextContext(4); return ctx_r758.onEditChip(option_r755); })("removed", function TemplateProfileCreateComponent_div_33_ng_container_32_mat_form_field_8_mat_chip_6_Template_mat_chip_removed_0_listener() { i0.ɵɵrestoreView(_r757); var option_r755 = ctx.$implicit; var ctx_r759 = i0.ɵɵnextContext(4); return ctx_r759.removeKeywordBlock(option_r755, ctx_r759.currentEditBlock); });
    i0.ɵɵtext(1);
    i0.ɵɵelementStart(2, "mat-icon", 112);
    i0.ɵɵtext(3, "cancel");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var option_r755 = ctx.$implicit;
    i0.ɵɵproperty("selected", option_r755.checked)("value", option_r755.value)("removable", true);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", option_r755.value, " ");
} }
function TemplateProfileCreateComponent_div_33_ng_container_32_mat_form_field_8_Template(rf, ctx) { if (rf & 1) {
    var _r761 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-form-field", 105);
    i0.ɵɵelementStart(1, "mat-label");
    i0.ɵɵtext(2, " Valeur par d\u00E9fault ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "mat-chip-list", 106, 107);
    i0.ɵɵlistener("cdkDropListDropped", function TemplateProfileCreateComponent_div_33_ng_container_32_mat_form_field_8_Template_mat_chip_list_cdkDropListDropped_3_listener($event) { i0.ɵɵrestoreView(_r761); var ctx_r760 = i0.ɵɵnextContext(3); return ctx_r760.drop($event); });
    i0.ɵɵtemplate(6, TemplateProfileCreateComponent_div_33_ng_container_32_mat_form_field_8_mat_chip_6_Template, 4, 4, "mat-chip", 108);
    i0.ɵɵelementStart(7, "input", 109, 110);
    i0.ɵɵlistener("matChipInputTokenEnd", function TemplateProfileCreateComponent_div_33_ng_container_32_mat_form_field_8_Template_input_matChipInputTokenEnd_7_listener($event) { i0.ɵɵrestoreView(_r761); var ctx_r762 = i0.ɵɵnextContext(3); return ctx_r762.addKeywordFromInputBlock($event, ctx_r762.currentEditBlock, ctx_r762.prevValue); })("keyup", function TemplateProfileCreateComponent_div_33_ng_container_32_mat_form_field_8_Template_input_keyup_7_listener($event) { i0.ɵɵrestoreView(_r761); var ctx_r763 = i0.ɵɵnextContext(3); return ctx_r763.onKeyUpChip($event, ctx_r763.currentEditBlock); })("ngModelChange", function TemplateProfileCreateComponent_div_33_ng_container_32_mat_form_field_8_Template_input_ngModelChange_7_listener($event) { i0.ɵɵrestoreView(_r761); var ctx_r764 = i0.ɵɵnextContext(3); return ctx_r764.currentChip = $event; });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var _r752 = i0.ɵɵreference(5);
    var ctx_r741 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("cdkDropListData", ctx_r741.currentEditBlock.defaultValue);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", ctx_r741.currentEditBlock.defaultValue);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("matChipInputFor", _r752)("matChipInputAddOnBlur", true)("matChipInputSeparatorKeyCodes", ctx_r741.separatorKeysCodes)("ngModel", ctx_r741.currentChip)("ngModelOptions", i0.ɵɵpureFunction0(7, _c0));
} }
function TemplateProfileCreateComponent_div_33_ng_container_32_mat_form_field_9_Template(rf, ctx) { if (rf & 1) {
    var _r766 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-form-field", 83);
    i0.ɵɵelementStart(1, "mat-label");
    i0.ɵɵtext(2, "Valeur par d\u00E9fault");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "input", 113);
    i0.ɵɵlistener("ngModelChange", function TemplateProfileCreateComponent_div_33_ng_container_32_mat_form_field_9_Template_input_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r766); var ctx_r765 = i0.ɵɵnextContext(3); return ctx_r765.currentEditBlock.defaultValue = $event; });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r742 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngModelOptions", i0.ɵɵpureFunction0(2, _c0))("ngModel", ctx_r742.currentEditBlock.defaultValue);
} }
function TemplateProfileCreateComponent_div_33_ng_container_32_mat_form_field_10_Template(rf, ctx) { if (rf & 1) {
    var _r768 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-form-field", 83);
    i0.ɵɵelementStart(1, "mat-label");
    i0.ɵɵtext(2, "Valeur par d\u00E9fault");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "input", 114);
    i0.ɵɵlistener("ngModelChange", function TemplateProfileCreateComponent_div_33_ng_container_32_mat_form_field_10_Template_input_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r768); var ctx_r767 = i0.ɵɵnextContext(3); return ctx_r767.currentEditBlock.defaultValue = $event; });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r743 = i0.ɵɵnextContext(3);
    i0.ɵɵstyleProp("opacity", ctx_r743.currentEditBlock.type !== "tel" ? 1 : 0);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("type", ctx_r743.currentEditBlock.type)("disabled", ctx_r743.currentEditBlock.type === "tel")("ngModelOptions", i0.ɵɵpureFunction0(6, _c0))("ngModel", ctx_r743.currentEditBlock.defaultValue);
} }
function TemplateProfileCreateComponent_div_33_ng_container_32_ng_container_21_mat_option_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 119);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var item_r773 = ctx.$implicit;
    i0.ɵɵproperty("value", item_r773.key);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1("", item_r773.label, " ");
} }
function TemplateProfileCreateComponent_div_33_ng_container_32_ng_container_21_mat_form_field_6_mat_option_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 119);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var item_r775 = ctx.$implicit;
    i0.ɵɵproperty("value", item_r775.key);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1("", item_r775.label, " ");
} }
function TemplateProfileCreateComponent_div_33_ng_container_32_ng_container_21_mat_form_field_6_Template(rf, ctx) { if (rf & 1) {
    var _r777 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-form-field", 115);
    i0.ɵɵelementStart(1, "mat-label");
    i0.ɵɵtext(2, "Selectionnez la sous cat\u00E9gorie (s1)");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "mat-select", 116);
    i0.ɵɵlistener("ngModelChange", function TemplateProfileCreateComponent_div_33_ng_container_32_ng_container_21_mat_form_field_6_Template_mat_select_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r777); var ctx_r776 = i0.ɵɵnextContext(4); return ctx_r776.s1 = $event; })("selectionChange", function TemplateProfileCreateComponent_div_33_ng_container_32_ng_container_21_mat_form_field_6_Template_mat_select_selectionChange_3_listener($event) { i0.ɵɵrestoreView(_r777); var ctx_r778 = i0.ɵɵnextContext(4); return ctx_r778.onSelectCondition("s1", "s2", $event.value); });
    i0.ɵɵtemplate(4, TemplateProfileCreateComponent_div_33_ng_container_32_ng_container_21_mat_form_field_6_mat_option_4_Template, 2, 2, "mat-option", 117);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r770 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngModel", ctx_r770.s1)("ngModelOptions", i0.ɵɵpureFunction0(3, _c0));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r770.conditionData.s1);
} }
function TemplateProfileCreateComponent_div_33_ng_container_32_ng_container_21_mat_form_field_7_mat_option_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 119);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var item_r780 = ctx.$implicit;
    i0.ɵɵproperty("value", item_r780.key);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1("", item_r780.label, " ");
} }
function TemplateProfileCreateComponent_div_33_ng_container_32_ng_container_21_mat_form_field_7_Template(rf, ctx) { if (rf & 1) {
    var _r782 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-form-field", 115);
    i0.ɵɵelementStart(1, "mat-label");
    i0.ɵɵtext(2, "Selectionnez la sous cat\u00E9gorie (s2)");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "mat-select", 116);
    i0.ɵɵlistener("ngModelChange", function TemplateProfileCreateComponent_div_33_ng_container_32_ng_container_21_mat_form_field_7_Template_mat_select_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r782); var ctx_r781 = i0.ɵɵnextContext(4); return ctx_r781.s2 = $event; })("selectionChange", function TemplateProfileCreateComponent_div_33_ng_container_32_ng_container_21_mat_form_field_7_Template_mat_select_selectionChange_3_listener($event) { i0.ɵɵrestoreView(_r782); var ctx_r783 = i0.ɵɵnextContext(4); return ctx_r783.onSelectCondition("s2", "s3", $event.value); });
    i0.ɵɵtemplate(4, TemplateProfileCreateComponent_div_33_ng_container_32_ng_container_21_mat_form_field_7_mat_option_4_Template, 2, 2, "mat-option", 117);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r771 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngModel", ctx_r771.s2)("ngModelOptions", i0.ɵɵpureFunction0(3, _c0));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r771.conditionData.s2);
} }
function TemplateProfileCreateComponent_div_33_ng_container_32_ng_container_21_mat_form_field_8_mat_option_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 119);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var item_r785 = ctx.$implicit;
    i0.ɵɵproperty("value", item_r785.key);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1("", item_r785.label, " ");
} }
function TemplateProfileCreateComponent_div_33_ng_container_32_ng_container_21_mat_form_field_8_Template(rf, ctx) { if (rf & 1) {
    var _r787 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-form-field", 115);
    i0.ɵɵelementStart(1, "mat-label");
    i0.ɵɵtext(2, "Selectionnez la sous cat\u00E9gorie (s3)");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "mat-select", 116);
    i0.ɵɵlistener("ngModelChange", function TemplateProfileCreateComponent_div_33_ng_container_32_ng_container_21_mat_form_field_8_Template_mat_select_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r787); var ctx_r786 = i0.ɵɵnextContext(4); return ctx_r786.s3 = $event; })("selectionChange", function TemplateProfileCreateComponent_div_33_ng_container_32_ng_container_21_mat_form_field_8_Template_mat_select_selectionChange_3_listener($event) { i0.ɵɵrestoreView(_r787); var ctx_r788 = i0.ɵɵnextContext(4); return ctx_r788.onSelectCondition("s3", "s4", $event.value); });
    i0.ɵɵtemplate(4, TemplateProfileCreateComponent_div_33_ng_container_32_ng_container_21_mat_form_field_8_mat_option_4_Template, 2, 2, "mat-option", 117);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r772 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngModel", ctx_r772.s3)("ngModelOptions", i0.ɵɵpureFunction0(3, _c0));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r772.conditionData.s3);
} }
function TemplateProfileCreateComponent_div_33_ng_container_32_ng_container_21_Template(rf, ctx) { if (rf & 1) {
    var _r790 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "mat-form-field", 115);
    i0.ɵɵelementStart(2, "mat-label");
    i0.ɵɵtext(3, "Selectionnez la cat\u00E9gorie");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "mat-select", 116);
    i0.ɵɵlistener("ngModelChange", function TemplateProfileCreateComponent_div_33_ng_container_32_ng_container_21_Template_mat_select_ngModelChange_4_listener($event) { i0.ɵɵrestoreView(_r790); var ctx_r789 = i0.ɵɵnextContext(3); return ctx_r789.all = $event; })("selectionChange", function TemplateProfileCreateComponent_div_33_ng_container_32_ng_container_21_Template_mat_select_selectionChange_4_listener($event) { i0.ɵɵrestoreView(_r790); var ctx_r791 = i0.ɵɵnextContext(3); return ctx_r791.onSelectCondition("all", "s1", $event.value); });
    i0.ɵɵtemplate(5, TemplateProfileCreateComponent_div_33_ng_container_32_ng_container_21_mat_option_5_Template, 2, 2, "mat-option", 117);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(6, TemplateProfileCreateComponent_div_33_ng_container_32_ng_container_21_mat_form_field_6_Template, 5, 4, "mat-form-field", 118);
    i0.ɵɵtemplate(7, TemplateProfileCreateComponent_div_33_ng_container_32_ng_container_21_mat_form_field_7_Template, 5, 4, "mat-form-field", 118);
    i0.ɵɵtemplate(8, TemplateProfileCreateComponent_div_33_ng_container_32_ng_container_21_mat_form_field_8_Template, 5, 4, "mat-form-field", 118);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r744 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngModel", ctx_r744.all)("ngModelOptions", i0.ɵɵpureFunction0(6, _c0));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r744.conditionData.all);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", (ctx_r744.conditionData.s1 == null ? null : ctx_r744.conditionData.s1.length) > 0);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", (ctx_r744.conditionData.s2 == null ? null : ctx_r744.conditionData.s2.length) > 0);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", (ctx_r744.conditionData.s3 == null ? null : ctx_r744.conditionData.s3.length) > 0);
} }
function TemplateProfileCreateComponent_div_33_ng_container_32_mat_radio_group_22_mat_radio_button_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-radio-button", 122);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var item_r793 = ctx.$implicit;
    i0.ɵɵproperty("value", item_r793.value);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", item_r793.value, " ");
} }
function TemplateProfileCreateComponent_div_33_ng_container_32_mat_radio_group_22_Template(rf, ctx) { if (rf & 1) {
    var _r795 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-radio-group", 120);
    i0.ɵɵlistener("ngModelChange", function TemplateProfileCreateComponent_div_33_ng_container_32_mat_radio_group_22_Template_mat_radio_group_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r795); var ctx_r794 = i0.ɵɵnextContext(3); return ctx_r794.currentEditBlock.condition.value = $event; });
    i0.ɵɵtemplate(1, TemplateProfileCreateComponent_div_33_ng_container_32_mat_radio_group_22_mat_radio_button_1_Template, 2, 2, "mat-radio-button", 121);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r745 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("ngModel", ctx_r745.currentEditBlock.condition.value)("ngModelOptions", i0.ɵɵpureFunction0(3, _c0));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r745.onGetDefaultValue());
} }
function TemplateProfileCreateComponent_div_33_ng_container_32_button_24_Template(rf, ctx) { if (rf & 1) {
    var _r797 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 98);
    i0.ɵɵlistener("click", function TemplateProfileCreateComponent_div_33_ng_container_32_button_24_Template_button_click_0_listener($event) { i0.ɵɵrestoreView(_r797); var ctx_r796 = i0.ɵɵnextContext(3); return ctx_r796.onAddNewSubLevelFieldBlock($event); });
    i0.ɵɵtext(1, "Sous-cat\u00E9gorie ");
    i0.ɵɵelementStart(2, "mat-icon");
    i0.ɵɵtext(3, "device_hub ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r746 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("disabled", !ctx_r746.currentEditBlock.editable);
} }
var _c1 = function () { return ["select", "radio", "checkbox_multiple"]; };
function TemplateProfileCreateComponent_div_33_ng_container_32_Template(rf, ctx) { if (rf & 1) {
    var _r799 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "mat-form-field", 83);
    i0.ɵɵelementStart(2, "mat-label");
    i0.ɵɵtext(3, "Nom / Label");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "input", 84);
    i0.ɵɵlistener("ngModelChange", function TemplateProfileCreateComponent_div_33_ng_container_32_Template_input_ngModelChange_4_listener($event) { i0.ɵɵrestoreView(_r799); var ctx_r798 = i0.ɵɵnextContext(2); return ctx_r798.currentEditBlock.label = $event; });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerStart(5, 85);
    i0.ɵɵtemplate(6, TemplateProfileCreateComponent_div_33_ng_container_32_div_6_Template, 4, 3, "div", 86);
    i0.ɵɵtemplate(7, TemplateProfileCreateComponent_div_33_ng_container_32_div_7_Template, 3, 3, "div", 87);
    i0.ɵɵtemplate(8, TemplateProfileCreateComponent_div_33_ng_container_32_mat_form_field_8_Template, 9, 8, "mat-form-field", 88);
    i0.ɵɵtemplate(9, TemplateProfileCreateComponent_div_33_ng_container_32_mat_form_field_9_Template, 4, 3, "mat-form-field", 89);
    i0.ɵɵtemplate(10, TemplateProfileCreateComponent_div_33_ng_container_32_mat_form_field_10_Template, 4, 7, "mat-form-field", 90);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementStart(11, "div", 91);
    i0.ɵɵelementStart(12, "div", 92);
    i0.ɵɵelementStart(13, "span");
    i0.ɵɵtext(14, "Obligatoire");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "mat-slide-toggle", 93);
    i0.ɵɵlistener("ngModelChange", function TemplateProfileCreateComponent_div_33_ng_container_32_Template_mat_slide_toggle_ngModelChange_15_listener($event) { i0.ɵɵrestoreView(_r799); var ctx_r800 = i0.ɵɵnextContext(2); return ctx_r800.currentEditBlock.isMandatory = $event; });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "div", 94);
    i0.ɵɵelementStart(17, "div", 92);
    i0.ɵɵelementStart(18, "span");
    i0.ɵɵtext(19, "Visibilit\u00E9 conditionnelle");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(20, "mat-slide-toggle", 93);
    i0.ɵɵlistener("ngModelChange", function TemplateProfileCreateComponent_div_33_ng_container_32_Template_mat_slide_toggle_ngModelChange_20_listener($event) { i0.ɵɵrestoreView(_r799); var ctx_r801 = i0.ɵɵnextContext(2); return ctx_r801.currentEditBlock.isConditional = $event; });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(21, TemplateProfileCreateComponent_div_33_ng_container_32_ng_container_21_Template, 9, 7, "ng-container", 28);
    i0.ɵɵtemplate(22, TemplateProfileCreateComponent_div_33_ng_container_32_mat_radio_group_22_Template, 2, 4, "mat-radio-group", 95);
    i0.ɵɵelementStart(23, "div", 96);
    i0.ɵɵtemplate(24, TemplateProfileCreateComponent_div_33_ng_container_32_button_24_Template, 4, 1, "button", 97);
    i0.ɵɵelementStart(25, "button", 98);
    i0.ɵɵlistener("click", function TemplateProfileCreateComponent_div_33_ng_container_32_Template_button_click_25_listener($event) { i0.ɵɵrestoreView(_r799); var ctx_r802 = i0.ɵɵnextContext(2); return ctx_r802.onDuplicatedBlock($event); });
    i0.ɵɵtext(26, "Dupliquer le bloc");
    i0.ɵɵelementStart(27, "mat-icon");
    i0.ɵɵtext(28, "filter_none");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(29, "button", 99);
    i0.ɵɵlistener("click", function TemplateProfileCreateComponent_div_33_ng_container_32_Template_button_click_29_listener($event) { i0.ɵɵrestoreView(_r799); var ctx_r803 = i0.ɵɵnextContext(2); return ctx_r803.onRemoveFieldBlock($event); });
    i0.ɵɵtext(30, "Supprimer le bloc ");
    i0.ɵɵelementStart(31, "mat-icon");
    i0.ɵɵtext(32, " delete ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r738 = i0.ɵɵnextContext(2);
    var tmp_12_0 = null;
    var currVal_12 = ctx_r738.currentEditBlock.isConditional && ctx_r738.onGetDefaultValue() && ((tmp_12_0 = ctx_r738.onGetDefaultValue()) == null ? null : tmp_12_0.length) > 0;
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngModel", ctx_r738.currentEditBlock.label)("ngModelOptions", i0.ɵɵpureFunction0(16, _c0));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitch", ctx_r738.currentEditBlock.type);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", "toggle");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", "checkbox");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", i0.ɵɵpureFunction0(17, _c1).includes(ctx_r738.currentEditBlock.type) ? ctx_r738.currentEditBlock.type : !ctx_r738.currentEditBlock.type);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", "textarea");
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("ngModel", ctx_r738.currentEditBlock.isMandatory)("ngModelOptions", i0.ɵɵpureFunction0(18, _c0));
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngModel", ctx_r738.currentEditBlock.isConditional)("ngModelOptions", i0.ɵɵpureFunction0(19, _c0));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r738.currentEditBlock == null ? null : ctx_r738.currentEditBlock.isConditional);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", currVal_12);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r738.paramsIndex.length < 4);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("disabled", !ctx_r738.currentEditBlock.editable);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("disabled", !ctx_r738.currentEditBlock.editable);
} }
function TemplateProfileCreateComponent_div_33_Template(rf, ctx) { if (rf & 1) {
    var _r805 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 67);
    i0.ɵɵelementStart(1, "h3");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 68);
    i0.ɵɵelementStart(4, "mat-form-field", 69);
    i0.ɵɵelementStart(5, "mat-label");
    i0.ɵɵtext(6, "Type de bloc");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "mat-select", 70);
    i0.ɵɵlistener("click", function TemplateProfileCreateComponent_div_33_Template_mat_select_click_7_listener() { i0.ɵɵrestoreView(_r805); var ctx_r804 = i0.ɵɵnextContext(); return ctx_r804.onOpenTypeDialog(ctx_r804.currentEditBlock); })("ngModelChange", function TemplateProfileCreateComponent_div_33_Template_mat_select_ngModelChange_7_listener($event) { i0.ɵɵrestoreView(_r805); var ctx_r806 = i0.ɵɵnextContext(); return ctx_r806.currentEditBlock.type = $event; })("ngModelChange", function TemplateProfileCreateComponent_div_33_Template_mat_select_ngModelChange_7_listener() { i0.ɵɵrestoreView(_r805); var ctx_r807 = i0.ɵɵnextContext(); return ctx_r807.onChangeTypeBlock(ctx_r807.currentEditBlock); });
    i0.ɵɵelementStart(8, "mat-option", 71);
    i0.ɵɵtext(9, "Text(80)");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "mat-option", 72);
    i0.ɵɵtext(11, "Text(80+)");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "mat-option", 73);
    i0.ɵɵtext(13, "Radio");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "mat-option", 74);
    i0.ɵɵtext(15, "Selecteur");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "mat-option", 75);
    i0.ɵɵtext(17, "Toggle");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "mat-option", 76);
    i0.ɵɵtext(19, "Checkbox");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(20, "mat-option", 77);
    i0.ɵɵtext(21, "Checkbox multiple");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(22, "mat-option", 78);
    i0.ɵɵtext(23, "Email");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(24, "mat-option", 79);
    i0.ɵɵtext(25, "Password");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(26, "mat-option", 80);
    i0.ɵɵtext(27, "Date");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(28, "mat-option", 81);
    i0.ɵɵtext(29, "Phone");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(30, "mat-option", 82);
    i0.ɵɵtext(31, "Aucun");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(32, TemplateProfileCreateComponent_div_33_ng_container_32_Template, 33, 20, "ng-container", 28);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r521 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("Param\u00E8tre du bloc ", ctx_r521.currentEditBlock.label, "");
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngModel", ctx_r521.currentEditBlock.type)("ngModelOptions", i0.ɵɵpureFunction0(4, _c0));
    i0.ɵɵadvance(25);
    i0.ɵɵproperty("ngIf", ctx_r521.currentEditBlock.type !== "none");
} }
function TemplateProfileCreateComponent_div_34_mat_option_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 119);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var item_r809 = ctx.$implicit;
    i0.ɵɵproperty("value", item_r809.value);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(item_r809.value);
} }
function TemplateProfileCreateComponent_div_34_Template(rf, ctx) { if (rf & 1) {
    var _r811 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 67);
    i0.ɵɵelementStart(1, "h3");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 123);
    i0.ɵɵelementStart(4, "mat-form-field", 83);
    i0.ɵɵelementStart(5, "mat-label");
    i0.ɵɵtext(6, "Nom de la section");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "input", 84);
    i0.ɵɵlistener("ngModelChange", function TemplateProfileCreateComponent_div_34_Template_input_ngModelChange_7_listener() { i0.ɵɵrestoreView(_r811); var ctx_r810 = i0.ɵɵnextContext(); return ctx_r810.onChangeCategoryName(); })("ngModelChange", function TemplateProfileCreateComponent_div_34_Template_input_ngModelChange_7_listener($event) { i0.ɵɵrestoreView(_r811); var ctx_r812 = i0.ɵɵnextContext(); return ctx_r812.currentEditBlock.name = $event; });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "mat-form-field", 115);
    i0.ɵɵelementStart(9, "mat-label");
    i0.ɵɵtext(10, "Equipe de gestion");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "mat-select", 124);
    i0.ɵɵlistener("ngModelChange", function TemplateProfileCreateComponent_div_34_Template_mat_select_ngModelChange_11_listener($event) { i0.ɵɵrestoreView(_r811); var ctx_r813 = i0.ɵɵnextContext(); return ctx_r813.currentEditBlock.selector.value = $event; });
    i0.ɵɵtemplate(12, TemplateProfileCreateComponent_div_34_mat_option_12_Template, 2, 2, "mat-option", 117);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "div", 96);
    i0.ɵɵelementStart(14, "button", 125);
    i0.ɵɵlistener("click", function TemplateProfileCreateComponent_div_34_Template_button_click_14_listener($event) { i0.ɵɵrestoreView(_r811); var ctx_r814 = i0.ɵɵnextContext(); return ctx_r814.onAddNewSubLevelFieldBlock($event); });
    i0.ɵɵtext(15, "Sous-cat\u00E9gorie ");
    i0.ɵɵelementStart(16, "mat-icon");
    i0.ɵɵtext(17, "device_hub ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "button", 125);
    i0.ɵɵlistener("click", function TemplateProfileCreateComponent_div_34_Template_button_click_18_listener($event) { i0.ɵɵrestoreView(_r811); var ctx_r815 = i0.ɵɵnextContext(); return ctx_r815.onDuplicatedBlock($event); });
    i0.ɵɵtext(19, "Dupliquer le bloc");
    i0.ɵɵelementStart(20, "mat-icon");
    i0.ɵɵtext(21, "filter_none");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(22, "button", 99);
    i0.ɵɵlistener("click", function TemplateProfileCreateComponent_div_34_Template_button_click_22_listener($event) { i0.ɵɵrestoreView(_r811); var ctx_r816 = i0.ɵɵnextContext(); return ctx_r816.onRemoveFieldBlock($event); });
    i0.ɵɵtext(23, "Supprimer le bloc ");
    i0.ɵɵelementStart(24, "mat-icon");
    i0.ɵɵtext(25, " delete");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r522 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("Param\u00E8tre de la section ", ctx_r522.currentEditBlock.name, "");
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngModel", ctx_r522.currentEditBlock.name)("ngModelOptions", i0.ɵɵpureFunction0(7, _c0));
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngModel", ctx_r522.currentEditBlock.selector.value)("ngModelOptions", i0.ɵɵpureFunction0(8, _c0));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r522.currentEditBlock.selector.defaultValue);
    i0.ɵɵadvance(10);
    i0.ɵɵproperty("disabled", !ctx_r522.currentEditBlock.editable);
} }
var TemplateProfileCreateComponent = /** @class */ (function () {
    function TemplateProfileCreateComponent(fb, service, route, router, dialog, scrollToService) {
        var _this = this;
        this.fb = fb;
        this.service = service;
        this.route = route;
        this.router = router;
        this.dialog = dialog;
        this.scrollToService = scrollToService;
        this.validCategory = false;
        this.separatorKeysCodes = [ENTER, COMMA, SEMICOLON];
        this.currentProfil = {};
        this.canExit = true;
        this.tags = [];
        this.id = "0";
        this.parent = [];
        this.editIndex = null;
        this.showProfileName = true;
        this.liveLabel = "Publier";
        this.draftLabel = "Enregistrer le brouillon";
        this.picto = "";
        this.all = "";
        this.s1 = "";
        this.s2 = "";
        this.s3 = "";
        this.conditionData = {
            all: [],
            s1: [],
            s2: [],
            s3: [],
            defaultValue: []
        };
        this.categories = [];
        this.isBlock = false;
        this.isSection = false;
        this.currentChip = "";
        this.prevValue = "";
        this.historics = [];
        this.currentCanceledIndex = null;
        this.newFieldIndex = null;
        this.defaultCategorie = [
            {
                name: "Utilisateur",
                key: 'utilisateur',
                editable: false,
                deleteable: false,
                expandMore: false,
                expandOnboarding: true,
                defaultValue: false,
                suffixEndpoint: "category/user",
                selector: {
                    label: "Company",
                    key: "Company",
                    defaultValue: [{ value: "Nowteam", checked: true }, { value: "Internal", checked: false }],
                    value: "Nowteam"
                },
                ticketType: {
                    label: "Type de ticket",
                    key: "tycketType",
                    defaultValue: [{ value: "Création de compte", checked: true, key: "Creation_de_compte" }, { value: "Configuration de poste", checked: false, key: "Configuration_de_poste" }],
                    value: "Creation_de_compte"
                },
                forms: [
                    {
                        label: "Civilité",
                        key: "Salutation",
                        expandOnboarding: true,
                        defaultValue: [{ value: "M.", checked: false }, { value: "Mme", checked: false }],
                        condition: {},
                        value: null,
                        size: 10,
                        isMandatory: true,
                        otherValue: '',
                        type: "select",
                        editable: false,
                        deleteable: false,
                        subLevel: 1,
                        expandMore: false,
                    },
                    {
                        label: "Type de profil",
                        key: "Type_de_profil_Nowboard__c",
                        expandOnboarding: true,
                        defaultValue: [{ value: "Manager", checked: false }, { value: "Utilisateur", checked: false }],
                        condition: {},
                        value: null,
                        size: 10,
                        isMandatory: true,
                        otherValue: '',
                        type: "select",
                        editable: false,
                        deleteable: false,
                        subLevel: 1,
                        expandMore: false,
                    },
                    {
                        label: "Nom",
                        key: "LastName",
                        expandOnboarding: true,
                        defaultValue: null,
                        value: null,
                        size: 80,
                        isMandatory: true,
                        condition: {},
                        otherValue: '',
                        type: "text",
                        editable: false,
                        deleteable: false,
                        subLevel: 1,
                        expandMore: false,
                    },
                    {
                        label: "Prénom",
                        key: "FirstName",
                        expandOnboarding: true,
                        condition: {},
                        defaultValue: null,
                        value: null,
                        size: 80,
                        isMandatory: true,
                        otherValue: '',
                        type: "text",
                        editable: false,
                        deleteable: false,
                        subLevel: 1,
                        expandMore: false,
                    },
                    {
                        label: "Email",
                        key: "Email",
                        expandOnboarding: true,
                        defaultValue: null,
                        condition: {},
                        value: null,
                        size: 80,
                        isMandatory: true,
                        otherValue: '',
                        type: "email",
                        editable: false,
                        deleteable: false,
                        subLevel: 1,
                        expandMore: false,
                    },
                    {
                        label: "Fixe (opt)",
                        key: "Phone",
                        expandOnboarding: true,
                        defaultValue: null,
                        condition: {},
                        value: null,
                        size: 20,
                        isMandatory: false,
                        otherValue: '',
                        type: "tel",
                        editable: false,
                        deleteable: false,
                        subLevel: 1,
                        expandMore: false,
                    },
                    {
                        label: "Mobile",
                        key: "MobilePhone",
                        expandOnboarding: true,
                        defaultValue: null,
                        condition: {},
                        value: null,
                        size: 20,
                        isMandatory: false,
                        otherValue: '',
                        type: "tel",
                        editable: false,
                        deleteable: false,
                        subLevel: 1,
                        expandMore: false,
                    },
                    {
                        label: "Fonction",
                        key: "Title",
                        expandOnboarding: true,
                        defaultValue: null,
                        value: null,
                        condition: {},
                        size: 80,
                        isMandatory: true,
                        otherValue: '',
                        type: "text",
                        editable: false,
                        deleteable: false,
                        subLevel: 1,
                        expandMore: false,
                    },
                    {
                        label: "Etablissement / Site",
                        key: "AccountName",
                        expandOnboarding: true,
                        defaultValue: null,
                        value: null,
                        condition: {},
                        size: 80,
                        isMandatory: true,
                        otherValue: '',
                        type: "text",
                        editable: false,
                        deleteable: false,
                        subLevel: 1,
                        expandMore: false,
                    },
                    {
                        label: "Accès au portail",
                        key: "Acc_s_au_portail_client_NowBoard__c",
                        condition: {},
                        expandOnboarding: true,
                        defaultValue: [{ value: "Oui", checked: false }, { value: "Non", checked: false }],
                        value: null,
                        size: 10,
                        isMandatory: true,
                        otherValue: '',
                        type: "select",
                        editable: false,
                        deleteable: false,
                        subLevel: 1,
                        expandMore: false,
                    },
                    {
                        label: "Langue",
                        key: "Langue_maternelle__c",
                        expandOnboarding: true,
                        defaultValue: [{ value: "Français", checked: false }, { value: "Anglais", checked: false }],
                        condition: {},
                        value: null,
                        size: 10,
                        isMandatory: true,
                        otherValue: '',
                        type: "select",
                        editable: false,
                        deleteable: false,
                        subLevel: 1,
                        expandMore: false,
                    },
                    {
                        label: "Date d'entrée",
                        key: "date_of_entry",
                        expandOnboarding: true,
                        defaultValue: null,
                        value: null,
                        condition: {},
                        size: 80,
                        isMandatory: true,
                        otherValue: '',
                        type: "date",
                        editable: false,
                        deleteable: false,
                        subLevel: 1,
                        expandMore: false,
                    },
                ],
            },
            {
                name: "Session d'utilisateur",
                key: "sessiond'utilisateur",
                editable: true,
                isConditional: false,
                conditionValue: "",
                condition: {},
                deleteable: true,
                selected: true,
                expandMore: false,
                expandOnboarding: true,
                defaultValue: false,
                suffixEndpoint: "category/user-session",
                selector: {
                    label: "Company",
                    key: "Company",
                    defaultValue: [{ value: "Nowteam", checked: true }, { value: "Internal", checked: false }],
                    value: "Nowteam"
                },
                ticketType: {
                    label: "Type de ticket",
                    key: "tycketType",
                    defaultValue: [{ value: "Création de compte", checked: true, key: "Creation_de_compte" }, { value: "Configuration de poste", checked: false, key: "Configuration_de_poste" }],
                    value: "Creation_de_compte"
                },
                forms: [
                    {
                        label: "Utilisateur local à créer",
                        key: "UserLocalToCreate",
                        expandOnboarding: true,
                        defaultValue: null,
                        value: true,
                        size: 80,
                        isMandatory: false,
                        otherValue: '',
                        type: "checkbox",
                        editable: true,
                        isConditional: false,
                        conditionValue: "",
                        condition: {},
                        deleteable: true,
                        subLevel: 1,
                        expandMore: false,
                        /*selector: {
                          label: "Company",
                          key: "Company",
                          defaultValue: [{ value: "Nowteam", checked: true }, { value: "Internal", checked: false }],
                          value: "Nowteam"
                        },*/
                        forms: [
                            {
                                label: "Login",
                                key: "Login",
                                expandOnboarding: true,
                                defaultValue: null,
                                value: null,
                                size: 80,
                                isMandatory: true,
                                otherValue: '',
                                type: "text",
                                editable: true,
                                isConditional: false,
                                conditionValue: "",
                                condition: {},
                                deleteable: false,
                                subLevel: 2,
                                expandMore: false,
                            },
                            {
                                label: "Mot de passe",
                                key: "Password",
                                expandOnboarding: true,
                                defaultValue: null,
                                value: null,
                                size: 80,
                                isMandatory: true,
                                otherValue: '',
                                type: "password",
                                editable: true,
                                isConditional: false,
                                conditionValue: "",
                                condition: {},
                                deleteable: true,
                                subLevel: 2,
                                expandMore: false,
                            },
                        ],
                    },
                    {
                        label: "Utilisateur AD (serveur) à créer",
                        key: "UserServerToCreate",
                        expandOnboarding: true,
                        defaultValue: null,
                        value: true,
                        size: 80,
                        isMandatory: false,
                        otherValue: '',
                        type: "checkbox",
                        editable: true,
                        isConditional: false,
                        conditionValue: "",
                        condition: {},
                        deleteable: true,
                        subLevel: 1,
                        expandMore: false,
                        forms: [
                            {
                                label: "Nom de domaine",
                                key: "DomainName",
                                expandOnboarding: true,
                                defaultValue: null,
                                value: null,
                                size: 80,
                                isMandatory: true,
                                otherValue: '',
                                type: "text",
                                editable: true,
                                isConditional: false,
                                conditionValue: "",
                                condition: {},
                                deleteable: false,
                                subLevel: 2,
                                expandMore: false,
                            },
                            {
                                label: "Votre login",
                                key: "YourLogin",
                                expandOnboarding: true,
                                defaultValue: null,
                                value: null,
                                size: 80,
                                isMandatory: true,
                                otherValue: '',
                                type: "text",
                                editable: true,
                                isConditional: false,
                                conditionValue: "",
                                condition: {},
                                deleteable: true,
                                subLevel: 2,
                                expandMore: false,
                            },
                            {
                                label: "Votre mot de passe",
                                key: "YourPassword",
                                expandOnboarding: true,
                                defaultValue: null,
                                value: null,
                                size: 80,
                                isMandatory: true,
                                otherValue: '',
                                type: "password",
                                editable: true,
                                isConditional: false,
                                conditionValue: "",
                                condition: {},
                                deleteable: true,
                                subLevel: 2,
                                expandMore: false,
                            },
                            {
                                label: "Groupe de sécurité",
                                key: "GroupSecurity",
                                expandOnboarding: true,
                                defaultValue: null,
                                value: true,
                                size: 80,
                                isMandatory: true,
                                otherValue: '',
                                type: "checkbox",
                                editable: true,
                                isConditional: false,
                                conditionValue: "",
                                condition: {},
                                deleteable: true,
                                subLevel: 2,
                                expandMore: false,
                                forms: [
                                    {
                                        label: "Utilisateur avec les droits similaires",
                                        key: "UserWithSimilarAccess",
                                        expandOnboarding: true,
                                        defaultValue: null,
                                        value: null,
                                        size: 80,
                                        isMandatory: true,
                                        otherValue: '',
                                        type: "text",
                                        editable: true,
                                        isConditional: false,
                                        conditionValue: "",
                                        condition: {},
                                        deleteable: true,
                                        subLevel: 3,
                                        expandMore: false,
                                    },
                                    {
                                        label: "Descriptions",
                                        key: "Description",
                                        expandOnboarding: true,
                                        defaultValue: null,
                                        value: null,
                                        size: 255,
                                        isMandatory: true,
                                        otherValue: '',
                                        type: "textarea",
                                        editable: true,
                                        isConditional: false,
                                        conditionValue: "",
                                        condition: {},
                                        deleteable: true,
                                        subLevel: 3,
                                        expandMore: false,
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },
            {
                name: "Messagerie",
                key: 'messagerie',
                expandMore: false,
                suffixEndpoint: "category/messagerie",
                selected: true,
                editable: true,
                isConditional: false,
                conditionValue: "",
                condition: {},
                deleteable: true,
                expandOnboarding: true,
                defaultValue: false,
                selector: {
                    label: "Company",
                    key: "Company",
                    defaultValue: [{ value: "Nowteam", checked: true }, { value: "Internal", checked: false }],
                    value: "Nowteam"
                },
                ticketType: {
                    label: "Type de ticket",
                    key: "tycketType",
                    defaultValue: [{ value: "Création de compte", checked: true, key: "Creation_de_compte" }, { value: "Configuration de poste", checked: false, key: "Configuration_de_poste" }],
                    value: "Creation_de_compte"
                },
                forms: [
                    {
                        label: "Adresse mail à créer",
                        key: "EmailToCreate",
                        expandOnboarding: true,
                        defaultValue: null,
                        value: true,
                        size: 80,
                        isMandatory: true,
                        otherValue: '',
                        type: "checkbox",
                        editable: true,
                        isConditional: false,
                        conditionValue: "",
                        condition: {},
                        deleteable: true,
                        subLevel: 1,
                        expandMore: false,
                        /*selector: {
                          label: "Company",
                          key: "Company",
                          defaultValue: [{ value: "Nowteam", checked: true }, { value: "Internal", checked: false }],
                          value: "Nowteam"
                        },*/
                        forms: [
                            {
                                label: "Adresse mail",
                                key: "Email",
                                expandOnboarding: true,
                                defaultValue: null,
                                value: null,
                                size: 80,
                                isMandatory: true,
                                otherValue: '',
                                type: "email",
                                editable: true,
                                isConditional: false,
                                conditionValue: "",
                                condition: {},
                                deleteable: true,
                                subLevel: 2,
                                expandMore: false,
                            },
                            {
                                label: "Type de licence (si gérées par le client)",
                                key: "SerialKey",
                                expandOnboarding: true,
                                defaultValue: null,
                                value: null,
                                size: 1000,
                                isMandatory: true,
                                otherValue: '',
                                type: "text",
                                editable: true,
                                isConditional: false,
                                conditionValue: "",
                                condition: {},
                                deleteable: true,
                                subLevel: 2,
                                expandMore: false,
                            },
                        ],
                    },
                    {
                        label: "Listes  de distribution",
                        key: "DistributionList",
                        expandOnboarding: true,
                        defaultValue: null,
                        value: true,
                        size: 80,
                        isMandatory: true,
                        otherValue: '',
                        type: "checkbox",
                        editable: true,
                        isConditional: false,
                        conditionValue: "",
                        condition: {},
                        deleteable: true,
                        subLevel: 1,
                        expandMore: false,
                        /*selector: {
                          label: "Company",
                          key: "Company",
                          defaultValue: [{ value: "Nowteam", checked: true }, { value: "Internal", checked: false }],
                          value: "Nowteam"
                        },*/
                        forms: [
                            {
                                label: "Utilisateur avec les listes similaires",
                                key: "UserWithSimilarList",
                                expandOnboarding: true,
                                defaultValue: null,
                                value: null,
                                size: 80,
                                isMandatory: true,
                                otherValue: '',
                                type: "text",
                                editable: true,
                                isConditional: false,
                                conditionValue: "",
                                condition: {},
                                deleteable: true,
                                subLevel: 2,
                                expandMore: false,
                            },
                            {
                                label: "Descriptions",
                                key: "Description",
                                expandOnboarding: true,
                                defaultValue: null,
                                value: null,
                                size: 1000,
                                isMandatory: true,
                                otherValue: '',
                                type: "textarea",
                                editable: true,
                                isConditional: false,
                                conditionValue: "",
                                condition: {},
                                deleteable: true,
                                subLevel: 2,
                                expandMore: false,
                            },
                        ],
                    },
                    {
                        label: "Ajouter des boites mails délégués",
                        key: "AddInboxMailDelegate",
                        expandOnboarding: true,
                        defaultValue: null,
                        value: true,
                        size: 80,
                        isMandatory: true,
                        otherValue: '',
                        type: "checkbox",
                        editable: true,
                        isConditional: false,
                        conditionValue: "",
                        condition: {},
                        deleteable: true,
                        subLevel: 1,
                        expandMore: false,
                        /*selector: {
                          label: "Company",
                          key: "Company",
                          defaultValue: [{ value: "Nowteam", checked: true }, { value: "Internal", checked: false }],
                          value: "Nowteam"
                        },*/
                        forms: [
                            {
                                label: "Descriptions",
                                key: "Description",
                                expandOnboarding: true,
                                defaultValue: null,
                                value: null,
                                size: 1000,
                                isMandatory: true,
                                otherValue: '',
                                type: "textarea",
                                editable: true,
                                isConditional: false,
                                conditionValue: "",
                                condition: {},
                                deleteable: true,
                                subLevel: 2,
                                expandMore: false,
                            },
                        ],
                    },
                ],
            },
            {
                name: "Serveur",
                key: 'serveur',
                expandMore: false,
                suffixEndpoint: "category/serveur",
                selected: true,
                editable: true,
                isConditional: false,
                conditionValue: "",
                condition: {},
                deleteable: true,
                expandOnboarding: true,
                defaultValue: false,
                selector: {
                    label: "Company",
                    key: "Company",
                    defaultValue: [{ value: "Nowteam", checked: true }, { value: "Internal", checked: false }],
                    value: "Nowteam"
                },
                ticketType: {
                    label: "Type de ticket",
                    key: "tycketType",
                    defaultValue: [{ value: "Création de compte", checked: true, key: "Creation_de_compte" }, { value: "Configuration de poste", checked: false, key: "Configuration_de_poste" }],
                    value: "Creation_de_compte"
                },
                forms: [
                    {
                        label: "Accès aux lecteurs réseaux",
                        key: "ReadNetworkAccess",
                        expandOnboarding: true,
                        defaultValue: null,
                        value: true,
                        size: 80,
                        isMandatory: false,
                        otherValue: '',
                        type: "checkbox",
                        editable: true,
                        isConditional: false,
                        conditionValue: "",
                        condition: {},
                        deleteable: true,
                        subLevel: 1,
                        expandMore: false,
                        /*selector: {
                          label: "Company",
                          key: "Company",
                          defaultValue: [{ value: "Nowteam", checked: true }, { value: "Internal", checked: false }],
                          value: "Nowteam"
                        },*/
                        forms: [
                            {
                                label: "Nom du serveur",
                                key: "ServerName",
                                expandOnboarding: true,
                                defaultValue: null,
                                value: null,
                                size: 80,
                                isMandatory: true,
                                otherValue: '',
                                type: "text",
                                editable: true,
                                isConditional: false,
                                conditionValue: "",
                                condition: {},
                                deleteable: false,
                                subLevel: 2,
                                expandMore: false,
                            },
                            {
                                label: "Chemin du dossier",
                                key: "FolderPath",
                                expandOnboarding: true,
                                defaultValue: null,
                                value: null,
                                size: 80,
                                isMandatory: true,
                                otherValue: '',
                                type: "text",
                                editable: true,
                                isConditional: false,
                                conditionValue: "",
                                condition: {},
                                deleteable: true,
                                subLevel: 2,
                                expandMore: false,
                            },
                            {
                                label: "Lettre à attribuer",
                                key: "AttributLetter",
                                expandOnboarding: true,
                                defaultValue: null,
                                value: null,
                                size: 80,
                                isMandatory: true,
                                otherValue: '',
                                type: "text",
                                editable: true,
                                isConditional: false,
                                conditionValue: "",
                                condition: {},
                                deleteable: true,
                                subLevel: 2,
                                expandMore: false,
                            },
                        ],
                    },
                ],
            },
            {
                name: "VPN",
                key: 'vpn',
                expandMore: false,
                suffixEndpoint: "category/vpn",
                selected: true,
                expandOnboarding: true,
                defaultValue: false,
                editable: true,
                isConditional: false,
                conditionValue: "",
                condition: {},
                deleteable: true,
                selector: {
                    label: "Company",
                    key: "Company",
                    defaultValue: [{ value: "Nowteam", checked: true }, { value: "Internal", checked: false }],
                    value: "Nowteam"
                },
                ticketType: {
                    label: "Type de ticket",
                    key: "tycketType",
                    defaultValue: [{ value: "Création de compte", checked: true, key: "Creation_de_compte" }, { value: "Configuration de poste", checked: false, key: "Configuration_de_poste" }],
                    value: "Creation_de_compte"
                },
                forms: [
                    {
                        label: "Accès au VPN",
                        key: "VpnAccess",
                        expandOnboarding: true,
                        defaultValue: null,
                        value: true,
                        size: 80,
                        isMandatory: false,
                        otherValue: '',
                        type: "checkbox",
                        editable: true,
                        isConditional: false,
                        conditionValue: "",
                        condition: {},
                        deleteable: true,
                        subLevel: 1,
                        expandMore: false,
                    },
                ],
            },
            {
                name: "Imprimantes",
                key: 'imprimantes',
                expandMore: false,
                suffixEndpoint: "category/imprimente",
                selected: true,
                editable: true,
                isConditional: false,
                conditionValue: "",
                condition: {},
                deleteable: true,
                expandOnboarding: true,
                defaultValue: false,
                ticketType: {
                    label: "Type de ticket",
                    key: "tycketType",
                    defaultValue: [{ value: "Création de compte", checked: true, key: "Creation_de_compte" }, { value: "Configuration de poste", checked: false, key: "Configuration_de_poste" }],
                    value: "Creation_de_compte"
                },
                selector: {
                    label: "Company",
                    key: "Company",
                    defaultValue: [{ value: "Nowteam", checked: true }, { value: "Internal", checked: false }],
                    value: "Nowteam"
                },
                forms: [
                    {
                        label: "Accès aux imprimantes",
                        key: "PrinterAccess",
                        expandOnboarding: true,
                        defaultValue: null,
                        value: true,
                        size: 80,
                        isMandatory: false,
                        otherValue: '',
                        type: "checkbox",
                        editable: true,
                        isConditional: false,
                        conditionValue: "",
                        condition: {},
                        deleteable: true,
                        subLevel: 1,
                        expandMore: false,
                        /*selector: {
                          label: "Company",
                          key: "Company",
                          defaultValue: [{ value: "Nowteam", checked: true }, { value: "Internal", checked: false }],
                          value: "Nowteam"
                        },*/
                        forms: [
                            {
                                label: "Nom / Modèle de l'imprimante / localisation",
                                key: "PrinterName",
                                expandOnboarding: true,
                                defaultValue: null,
                                value: null,
                                size: 1000,
                                isMandatory: true,
                                otherValue: '',
                                type: "textarea",
                                editable: true,
                                isConditional: false,
                                conditionValue: "",
                                condition: {},
                                deleteable: true,
                                subLevel: 2,
                                expandMore: false,
                            },
                        ],
                    },
                ],
            },
            {
                name: "Applications",
                key: 'applications',
                expandMore: false,
                suffixEndpoint: "category/application",
                selected: true,
                editable: true,
                isConditional: false,
                conditionValue: "",
                condition: {},
                expandOnboarding: true,
                defaultValue: false,
                deleteable: true,
                selector: {
                    label: "Company",
                    key: "Company",
                    defaultValue: [{ value: "Nowteam", checked: true }, { value: "Internal", checked: false }],
                    value: "Nowteam"
                },
                ticketType: {
                    label: "Type de ticket",
                    key: "tycketType",
                    defaultValue: [{ value: "Création de compte", checked: true, key: "Creation_de_compte" }, { value: "Configuration de poste", checked: false, key: "Configuration_de_poste" }],
                    value: "Creation_de_compte"
                },
                forms: [
                    {
                        label: "Accès aux applications ?",
                        key: "ApplicationAccess",
                        expandOnboarding: true,
                        defaultValue: null,
                        value: true,
                        size: 80,
                        isMandatory: false,
                        otherValue: '',
                        type: "checkbox",
                        editable: true,
                        isConditional: false,
                        conditionValue: "",
                        condition: {},
                        deleteable: true,
                        subLevel: 1,
                        expandMore: false,
                        /*selector: {
                          label: "Company",
                          key: "Company",
                          defaultValue: [{ value: "Nowteam", checked: true }, { value: "Internal", checked: false }],
                          value: "Nowteam"
                        },*/
                        forms: [
                            {
                                label: "Descriptions",
                                key: "Description",
                                expandOnboarding: true,
                                defaultValue: null,
                                value: null,
                                size: 1000,
                                isMandatory: true,
                                otherValue: '',
                                type: "textarea",
                                editable: true,
                                isConditional: false,
                                conditionValue: "",
                                condition: {},
                                deleteable: true,
                                subLevel: 2,
                                expandMore: false,
                            },
                        ],
                    },
                ],
            },
            {
                name: "Poste",
                key: 'poste',
                expandMore: false,
                suffixEndpoint: "category/poste",
                selected: true,
                expandOnboarding: true,
                defaultValue: false,
                editable: true,
                isConditional: false,
                conditionValue: "",
                condition: {},
                deleteable: true,
                selector: {
                    label: "Company",
                    key: "Company",
                    defaultValue: [{ value: "Nowteam", checked: true }, { value: "Internal", checked: false }],
                    value: "Nowteam"
                },
                ticketType: {
                    label: "Type de ticket",
                    key: "tycketType",
                    defaultValue: [{ value: "Création de compte", checked: true, key: "Creation_de_compte" }, { value: "Configuration de poste", checked: false, key: "Configuration_de_poste" }],
                    value: "Creation_de_compte"
                },
                forms: [
                    {
                        label: "Paramétrage de poste",
                        key: "PostParameter",
                        expandOnboarding: true,
                        defaultValue: null,
                        value: true,
                        size: 80,
                        isMandatory: false,
                        otherValue: '',
                        type: "checkbox",
                        editable: true,
                        isConditional: false,
                        conditionValue: "",
                        condition: {},
                        deleteable: true,
                        subLevel: 1,
                        expandMore: false,
                        /*selector: {
                          label: "Company",
                          key: "Company",
                          defaultValue: [{ value: "Nowteam", checked: true }, { value: "Internal", checked: false }],
                          value: "Nowteam"
                        },*/
                        forms: [
                            {
                                label: "Réallocation d'équipement",
                                key: "RealocatedEquipment",
                                expandOnboarding: true,
                                defaultValue: null,
                                value: null,
                                size: 1000,
                                isMandatory: true,
                                otherValue: '',
                                type: "textarea",
                                editable: true,
                                isConditional: false,
                                conditionValue: "",
                                condition: {},
                                deleteable: true,
                                subLevel: 2,
                                expandMore: false,
                            },
                            {
                                label: "Nouveau poste",
                                key: "NewPost",
                                expandOnboarding: true,
                                defaultValue: null,
                                value: true,
                                size: 80,
                                isMandatory: true,
                                otherValue: '',
                                type: "checkbox",
                                editable: true,
                                isConditional: false,
                                conditionValue: "",
                                condition: {},
                                deleteable: true,
                                subLevel: 2,
                                expandMore: false,
                                forms: [
                                    {
                                        label: "Acheté chez Nowteam",
                                        key: "PurchasedAtNowteam",
                                        expandOnboarding: true,
                                        defaultValue: null,
                                        value: null,
                                        size: 1000,
                                        isMandatory: true,
                                        otherValue: '',
                                        type: "textarea",
                                        editable: true,
                                        isConditional: false,
                                        conditionValue: "",
                                        condition: {},
                                        deleteable: true,
                                        subLevel: 3,
                                        expandMore: false,
                                    },
                                    {
                                        label: "Autre",
                                        key: "Other",
                                        expandOnboarding: true,
                                        defaultValue: null,
                                        value: null,
                                        size: 1000,
                                        isMandatory: true,
                                        otherValue: '',
                                        type: "text",
                                        editable: true,
                                        isConditional: false,
                                        conditionValue: "",
                                        condition: {},
                                        deleteable: true,
                                        subLevel: 3,
                                        expandMore: false,
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },
            {
                name: "Autres",
                key: 'autres',
                expandMore: false,
                suffixEndpoint: "category/autres",
                selected: true,
                editable: true,
                isConditional: false,
                conditionValue: "",
                condition: {},
                expandOnboarding: true,
                defaultValue: false,
                deleteable: true,
                selector: {
                    label: "Company",
                    key: "Company",
                    defaultValue: [{ value: "Nowteam", checked: true }, { value: "Internal", checked: false }],
                    value: "Nowteam"
                },
                ticketType: {
                    label: "Type de ticket",
                    key: "tycketType",
                    defaultValue: [{ value: "Création de compte", checked: true, key: "Creation_de_compte" }, { value: "Configuration de poste", checked: false, key: "Configuration_de_poste" }],
                    value: "Creation_de_compte"
                },
                forms: [
                    {
                        label: "Descriptions",
                        key: "Description",
                        expandOnboarding: true,
                        defaultValue: null,
                        value: null,
                        size: 1000,
                        isMandatory: false,
                        otherValue: '',
                        type: "textarea",
                        editable: true,
                        isConditional: false,
                        conditionValue: "",
                        condition: {},
                        deleteable: true,
                        subLevel: 1,
                        expandMore: false,
                    },
                ],
            },
        ];
        this.service._currentTemplate.subscribe(function (profil) {
            _this.initForm();
            if (profil) {
                _this.form.patchValue(profil);
                localStorage.setItem('profil', JSON.stringify(profil));
            }
            else {
                var profil_1 = JSON.parse(localStorage.getItem('profil'));
                _this.form.patchValue(profil_1);
            }
        });
    }
    TemplateProfileCreateComponent.prototype.canDeactivate = function () {
        if (!this.canExit) {
            this.dialog.open(ExitConfirmComponent, {
                data: ''
            });
            return this.service.canExit$;
        }
        return true;
    };
    TemplateProfileCreateComponent.prototype.initForm = function () {
        this.form = this.fb.group({
            Name: ["", Validators.required],
            Picto: [""],
            Description: [""],
            Tags: [""],
            Status: [false, Validators.required],
        });
    };
    TemplateProfileCreateComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.id = this.route.snapshot.paramMap.get("id");
                this.form.valueChanges.subscribe(function (c) {
                    _this.canExit = false;
                });
                if (this.id !== "0") {
                    setTimeout(function () { return __awaiter(_this, void 0, void 0, function () {
                        var _a;
                        return __generator(this, function (_b) {
                            switch (_b.label) {
                                case 0:
                                    _a = this;
                                    return [4 /*yield*/, this.service.getProfil(this.id)];
                                case 1:
                                    _a.currentProfil = _b.sent();
                                    this.form.patchValue(this.currentProfil);
                                    this.categories = this.currentProfil.categories;
                                    return [2 /*return*/];
                            }
                        });
                    }); }, 500);
                }
                else {
                    this.showProfileName = true;
                    this.categories = this.defaultCategorie;
                }
                setTimeout(function () { return __awaiter(_this, void 0, void 0, function () {
                    var _a;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                _a = this;
                                return [4 /*yield*/, this.service.getAllTags()];
                            case 1:
                                _a.tags = _b.sent();
                                return [2 /*return*/];
                        }
                    });
                }); }, 500);
                this.getConditionValues();
                return [2 /*return*/];
            });
        });
    };
    TemplateProfileCreateComponent.prototype.onAddNewCategory = function (e) {
        var _this = this;
        e.preventDefault();
        this.canExit = false;
        var data = {
            name: "Nom de la catégorie" + this.categories.length,
            key: 'newCategory' + this.categories.length,
            editable: true,
            isConditional: false,
            conditionValue: "",
            condition: {},
            expandOnboarding: true,
            deleteable: true,
            expandMore: true,
            suffixEndpoint: "",
            selector: {
                label: "Company",
                key: "Company",
                defaultValue: [{ value: "Nowteam", checked: true }, { value: "Internal", checked: false }],
                value: "Nowteam"
            },
            ticketType: {
                label: "Type de ticket",
                key: "tycketType",
                defaultValue: [{ value: "Création de compte", checked: true, key: "Creation_de_compte" }, { value: "Configuration de poste", checked: false, key: "Configuration_de_poste" }],
                value: "Creation_de_compte"
            },
            forms: [
                {
                    label: "Label à renommer",
                    key: "",
                    expandOnboarding: true,
                    defaultValue: null,
                    value: null,
                    size: 80,
                    isMandatory: true,
                    otherValue: '',
                    type: "text",
                    deleteable: true,
                    editable: true,
                    isConditional: false,
                    conditionValue: "",
                    condition: {},
                },
            ],
        };
        this.categories.push(data);
        this.onHistorics({
            form: data,
            method: 'push',
            location: 'category',
            params: [this.categories.length - 1]
        });
        setTimeout(function () {
            _this.scrollToService.scrollTo({
                target: data.name,
                container: 'categories-id',
                duration: 650,
                easing: 'easeOutElastic',
                offset: 20
            });
            setTimeout(function () {
                _this.onExpendMore({ field: data }, _this.categories.length - 1);
                _this.onActiveMenu(data, _this.categories.length - 1);
            }, 300);
        }, 200);
    };
    TemplateProfileCreateComponent.prototype.onChangeCategoryName = function () {
        this.currentEditBlock.key = this.currentEditBlock.name.replace(/\s/g, '');
    };
    TemplateProfileCreateComponent.prototype.checkBlink = function (index, level) {
        return String(index) + String(level);
    };
    TemplateProfileCreateComponent.prototype.onAddNewField = function () {
        var _this = this;
        var params = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            params[_i] = arguments[_i];
        }
        this.canExit = false;
        var length = params.length;
        var forms = length === 1 ? this.categories[params[0]].forms : length === 2 ? this.categories[params[0]].forms[params[1]].forms : this.categories[params[0]].forms[params[1]].forms[params[2]].forms;
        var data = {
            label: "Label à renommer",
            key: "",
            expandOnboarding: true,
            defaultValue: null,
            value: null,
            size: 80,
            isMandatory: true,
            otherValue: '',
            type: "text",
            deleteable: true,
            editable: true,
            isConditional: false,
            conditionValue: "",
            condition: {},
            subLevel: params.length,
        };
        forms.push(data);
        this.newFieldIndex = String(forms.length - 1) + String(length);
        setTimeout(function () {
            _this.newFieldIndex = null;
        }, 5000);
        this.onHistorics({
            form: data,
            method: 'push',
            location: 'forms',
            params: params
        });
        this.onEditBlock(forms.at(-1), params);
    };
    TemplateProfileCreateComponent.prototype.onAddNewSubLevelField = function () {
        var params = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            params[_i] = arguments[_i];
        }
        this.canExit = false;
        var length = params.length;
        var forms = length === 2 ? this.categories[params[0]].forms[params[length - 1]] : length === 3 ? this.categories[params[0]].forms[params[1]].forms[params[length - 1]] : this.categories[params[0]].forms[params[1]].forms[params[2]].forms[params[length - 1]];
        forms.expandMore = true;
        forms.forms = [];
        var newForm = {
            label: "",
            key: "",
            expandOnboarding: true,
            defaultValue: null,
            value: null,
            size: 80,
            isMandatory: true,
            otherValue: '',
            type: "text",
            deleteable: true,
            editable: true,
            isConditional: false,
            conditionValue: "",
            condition: {},
            subLevel: params.length,
            expandMore: true,
        };
        forms.forms.push(newForm);
        this.onHistorics({
            form: newForm,
            method: 'push',
            location: 'forms',
            params: params
        });
    };
    TemplateProfileCreateComponent.prototype.onRemoveField = function () {
        var params = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            params[_i] = arguments[_i];
        }
        this.canExit = false;
        var length = params.length;
        var forms = length === 2 ? this.categories[params[0]].forms : length === 3 ? this.categories[params[0]].forms[params[1]].forms : this.categories[params[0]].forms[params[1]].forms[params[2]].forms;
        forms.splice(params[length - 1], 1);
        this.onHistorics({
            form: forms[params[length - 1]],
            location: 'forms',
            method: 'splice',
            params: params
        });
    };
    TemplateProfileCreateComponent.prototype.onRemoveCategory = function (e, i) {
        e.preventDefault();
        this.canExit = false;
        this.onHistorics({
            form: this.categories.splice(i, 1),
            method: 'splice',
            location: 'category',
            params: [i]
        });
    };
    TemplateProfileCreateComponent.prototype.onChangeCategory = function () {
        return this.categories.every(function (cat) { return cat.name !== "" && cat.forms.every(function (field) { return field.label !== "" && field.type !== ""; }); });
    };
    TemplateProfileCreateComponent.prototype.onSubmit = function (isPublish) {
        return __awaiter(this, void 0, void 0, function () {
            var result, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!(this.form.valid && this.onChangeCategory())) return [3 /*break*/, 8];
                        if (isPublish) {
                            this.liveLabel = "Chargement....";
                        }
                        else {
                            this.draftLabel = "Chargement...";
                        }
                        if (!(this.id !== "0")) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.service.updateProfil(__assign(__assign(__assign({}, this.currentProfil), this.form.value), { Status: isPublish, categories: this.categories }))];
                    case 1:
                        _a = _b.sent();
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, this.service.createProfil(__assign(__assign({}, this.form.value), { Status: isPublish, categories: this.categories }))];
                    case 3:
                        _a = _b.sent();
                        _b.label = 4;
                    case 4:
                        result = _a;
                        if (!result) return [3 /*break*/, 6];
                        localStorage.removeItem('profil');
                        return [4 /*yield*/, this.service.getAllProfil()];
                    case 5:
                        _b.sent();
                        this.canExit = true;
                        this.router.navigate([this.service.mainPath + '/template']);
                        return [3 /*break*/, 7];
                    case 6:
                        console.log("errror......");
                        _b.label = 7;
                    case 7:
                        if (isPublish) {
                            this.liveLabel = "Publié";
                        }
                        else {
                            this.draftLabel = "Enregistrer le brouillon";
                        }
                        _b.label = 8;
                    case 8: return [2 /*return*/];
                }
            });
        });
    };
    TemplateProfileCreateComponent.prototype.onChangeType = function (type) {
        var params = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            params[_i - 1] = arguments[_i];
        }
        this.canExit = false;
        var length = params.length;
        var forms = length === 2 ? this.categories[params[0]].forms : length === 3 ? this.categories[params[0]].forms[params[1]].forms : this.categories[params[0]].forms[params[1]].forms[params[2]].forms;
        if (type === "select" || type === "radio" || type === "checkbox_multiple") {
            forms[params[length - 1]].defaultValue = [];
        }
        else if (type === "checkbox" || type === "toggle") {
            forms[params[length - 1]].defaultValue = true;
        }
        else {
            forms[params[length - 1]].defaultValue = "";
        }
    };
    TemplateProfileCreateComponent.prototype.onKeyPress = function (event) {
        var params = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            params[_i - 1] = arguments[_i];
        }
        this.canExit = false;
        var length = params.length;
        var forms = length === 2 ? this.categories[params[0]].forms[params[length - 1]] : length === 3 ? this.categories[params[0]].forms[params[1]].forms[params[length - 1]] : this.categories[params[0]].forms[params[1]].forms[params[2]].forms[params[length - 1]];
        if (event.key === ";") {
            var exist = forms.defaultValue.find(function (opt) { return opt.value.toLocaleLowerCase() === event.target.value.split(";")[0].toLocaleLowerCase(); });
            if (!exist) {
                forms.defaultValue.push({
                    value: event.target.value.split(";")[0],
                    checked: false
                });
                event.target.value = "";
            }
            else {
                event.target.value = "";
            }
        }
        // this.getConditionValues()
    };
    TemplateProfileCreateComponent.prototype.removeKeyword = function (keyword) {
        var params = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            params[_i - 1] = arguments[_i];
        }
        this.canExit = false;
        var length = params.length;
        var forms = length === 2 ? this.categories[params[0]].forms[params[length - 1]] : length === 3 ? this.categories[params[0]].forms[params[1]].forms[params[length - 1]] : this.categories[params[0]].forms[params[1]].forms[params[2]].forms[params[length - 1]];
        forms.defaultValue = forms.defaultValue.filter(function (option) { return option.value !== keyword.value; });
        // this.getConditionValues()
    };
    TemplateProfileCreateComponent.prototype.onExpendMore = function (event) {
        var params = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            params[_i - 1] = arguments[_i];
        }
        if (event) {
            if (event.event) {
                event.event.preventDefault();
            }
            if (event.field && !event.field.expandMore) {
                for (var i = 0; i < this.categories.length; i++) {
                    this.categories[i].expandMore = false;
                    if (this.categories[i].forms) {
                        for (var j = 0; j < this.categories[i].forms.length; j++) {
                            this.categories[i].forms[j].expandMore = false;
                        }
                    }
                }
            }
        }
        if (params.length === 1) {
            this.categories[params[0]].expandMore = !this.categories[params[0]].expandMore;
        }
        else if (params.length === 2) {
            if (this.categories[params[0]].forms[params[1]].expandMore) {
                this.categories[params[0]].forms[params[1]].expandMore = false;
            }
            else {
                this.categories[params[0]].expandMore = true;
                this.categories[params[0]].forms[params[1]].expandMore = true;
            }
        }
        else if (params.length === 3) {
            if (this.categories[params[0]].forms[params[1]].forms[params[2]].expandMore) {
                this.categories[params[0]].forms[params[1]].forms[params[2]].expandMore = false;
            }
            else {
                this.categories[params[0]].expandMore = true;
                this.categories[params[0]].forms[params[1]].expandMore = true;
                this.categories[params[0]].forms[params[1]].forms[params[2]].expandMore = true;
            }
        }
        else {
            if (this.categories[params[0]].forms[params[1]].forms[params[2]].forms[params[3]].expandMore) {
                this.categories[params[0]].forms[params[1]].forms[params[2]].forms[params[3]].expandMore = false;
            }
            else {
                this.categories[params[0]].expandMore = true;
                this.categories[params[0]].forms[params[1]].expandMore = true;
                this.categories[params[0]].forms[params[1]].forms[params[2]].expandMore = true;
                this.categories[params[0]].forms[params[1]].forms[params[2]].forms[params[3]].expandMore = true;
            }
        }
    };
    TemplateProfileCreateComponent.prototype.onCheckedDefault = function (event) {
        var params = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            params[_i - 1] = arguments[_i];
        }
        if (params.length === 1) {
            this.categories[params[0]].defaultValue = event;
        }
        else if (params.length === 2) {
            this.categories[params[0]].defaultValue = event;
            this.categories[params[0]].forms[params[1]].defaultValue = event;
        }
        else if (params.length === 3) {
            this.categories[params[0]].defaultValue = event;
            this.categories[params[0]].forms[params[1]].defaultValue = event;
            this.categories[params[0]].forms[params[1]].forms[params[2]].defaultValue = event;
        }
        else {
            this.categories[params[0]].defaultValue = event;
            this.categories[params[0]].forms[params[1]].defaultValue = event;
            this.categories[params[0]].forms[params[1]].forms[params[2]].defaultValue = event;
            this.categories[params[0]].forms[params[1]].forms[params[2]].forms[params[3]].defaultValue = event;
        }
        // this.getConditionValues()
    };
    TemplateProfileCreateComponent.prototype.addKeywordFromInput = function (event, prev) {
        var params = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            params[_i - 2] = arguments[_i];
        }
        this.canExit = false;
        var input = event.input;
        var value = event.value;
        var length = params.length;
        var forms = length === 2 ? this.categories[params[0]].forms[params[length - 1]] : length === 3 ? this.categories[params[0]].forms[params[1]].forms[params[length - 1]] : this.categories[params[0]].forms[params[1]].forms[params[2]].forms[params[length - 1]];
        if (value) {
            var prevIndex = forms.defaultValue.findIndex(function (opt) { return opt.value.toLocaleLowerCase() === prev.toLocaleLowerCase(); });
            if (prevIndex !== -1) {
                forms.defaultValue[prevIndex].value = value.trim();
                input.value = "";
            }
            else {
                var exist = forms.defaultValue.find(function (opt) { return opt.value.toLocaleLowerCase() === event.value.toLocaleLowerCase(); });
                if (!exist) {
                    forms.defaultValue.push({ value: value.trim(), checked: false });
                    input.value = "";
                }
                else {
                    input.value = "";
                }
            }
        }
        // this.getConditionValues()
    };
    TemplateProfileCreateComponent.prototype.drop = function (event) {
        this.canExit = false;
        if (event.previousContainer === event.container) {
            moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
        }
        else {
            transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
        }
    };
    TemplateProfileCreateComponent.prototype.ingoreDefaultAction = function (e) {
        e.preventDefault();
    };
    TemplateProfileCreateComponent.prototype.onShowCategory = function () {
        this.showProfileName = !this.showProfileName;
    };
    TemplateProfileCreateComponent.prototype.onSelectPicto = function (e, picto) {
        e.preventDefault();
        this.canExit = false;
        this.form.patchValue({ Picto: picto });
        this.isPictoListShow = !this.isPictoListShow;
    };
    TemplateProfileCreateComponent.prototype.onShowPictoList = function (e) {
        e.preventDefault();
        this.isPictoListShow = !this.isPictoListShow;
    };
    TemplateProfileCreateComponent.prototype.onChangeLabel = function (event) {
        var params = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            params[_i - 1] = arguments[_i];
        }
        var arr = event.label.split(" ");
        for (var i = 0; i < arr.length; i++) {
            arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
        }
        var length = params.length;
        var forms = length === 2 ? this.categories[params[0]].forms[params[length - 1]] : length === 3 ? this.categories[params[0]].forms[params[1]].forms[params[length - 1]] : this.categories[params[0]].forms[params[1]].forms[params[2]].forms[params[length - 1]];
        forms.key = arr.join('');
    };
    TemplateProfileCreateComponent.prototype.onCheckedChip = function (event) {
        var params = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            params[_i - 1] = arguments[_i];
        }
        this.canExit = false;
        var length = params.length;
        var forms = length === 2 ? this.categories[params[0]].forms[params[length - 1]] : length === 3 ? this.categories[params[0]].forms[params[1]].forms[params[length - 1]] : this.categories[params[0]].forms[params[1]].forms[params[2]].forms[params[length - 1]];
        var index = forms.defaultValue.findIndex(function (chip) { return chip.value === event.value; });
        if (index !== -1 && forms.type === 'checkbox_multiple') {
            forms.defaultValue[index].checked = !event.checked;
        }
        else if (index !== -1) {
            forms.defaultValue.forEach(function (value) {
                value.checked = false;
            });
            forms.defaultValue[index].checked = !event.checked;
        }
        // this.getConditionValues()
    };
    TemplateProfileCreateComponent.prototype.openDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(DialogCreateTemplateComponent, {
            data: {
                tags: this.tags,
                profil: this.form.value
            }
        });
        dialogRef.afterClosed().subscribe(function (current) {
            if (current) {
                _this.service.currentTemplate.next(current);
            }
        });
    };
    TemplateProfileCreateComponent.prototype.onPassInEditMode = function (i) {
        this.canExit = false;
        this.editIndex = i;
    };
    TemplateProfileCreateComponent.prototype.onEdit = function () {
        this.editIndex = null;
    };
    TemplateProfileCreateComponent.prototype.onEditCategoryName = function (i, name) {
        this.canExit = false;
        this.categories[i].name = name;
        // this.getConditionValues()
    };
    TemplateProfileCreateComponent.prototype.onAcrelink = function (e) {
        e.preventDefault();
    };
    TemplateProfileCreateComponent.prototype.getConditionValues = function () {
        var conditionsList = [];
        for (var i = 0; i < this.categories.length; i++) {
            var category = {
                label: this.categories[i].name,
                forms: [],
                key: this.categories[i].key,
                location: {
                    s0Index: i,
                },
                level: 0,
            };
            for (var j = 0; j < this.categories[i].forms.length; j++) {
                var s1Forms = this.categories[i].forms[j];
                var s1Location = {
                    level: 1,
                    location: {
                        s0Index: i,
                        s1Index: j,
                    },
                    key: s1Forms.key,
                    defaultValue: s1Forms.defaultValue,
                    label: s1Forms.label,
                    forms: []
                };
                category.forms.push(s1Location);
                if (s1Forms.forms) {
                    for (var k = 0; k < s1Forms.forms.length; k++) {
                        var s2Forms = s1Forms.forms[k];
                        var s2Location = {
                            level: 2,
                            location: {
                                s0Index: i,
                                s1Index: j,
                                s2Index: k,
                            },
                            defaultValue: s2Forms.defaultValue,
                            label: s2Forms.label,
                            key: s2Forms.key,
                            forms: []
                        };
                        s1Location.forms.push(s2Location);
                        if (s2Forms.forms) {
                            for (var l = 0; l < s2Forms.forms.length; l++) {
                                var s3Forms = s2Forms.forms[l];
                                var s3Location = {
                                    level: 3,
                                    location: {
                                        s0Index: i,
                                        s1Index: j,
                                        s2Index: k,
                                        s3Index: l,
                                    },
                                    defaultValue: s3Forms.defaultValue,
                                    key: s3Forms.key,
                                    label: s3Forms.label,
                                    forms: []
                                };
                                s2Location.forms.push(s3Location);
                                if (s3Location.forms) {
                                    for (var m = 0; m < s3Location.forms.length; m++) {
                                        var s4Location = s3Location.forms[m];
                                        s3Location.forms.push({
                                            level: 4,
                                            location: {
                                                s0Index: i,
                                                s1Index: j,
                                                s2Index: k,
                                                s3Index: l,
                                                s4Index: m,
                                            },
                                            defaultValue: s4Location.defaultValue,
                                            key: s4Location.key,
                                            label: s4Location.label
                                        });
                                    }
                                }
                            }
                        }
                    }
                }
            }
            conditionsList.push(category);
        }
        this.conditionData.all = conditionsList;
    };
    TemplateProfileCreateComponent.prototype.onSelectCondition = function (level, subLevel, value) {
        var condition = this.conditionData[level].find(function (data) { return data.key === value; });
        if (level === "all") {
            this.conditionData = __assign(__assign({}, this.conditionData), { s1: [], s2: [], s3: [], defaultValue: [] });
        }
        this.currentEditBlock.condition = condition;
        this.onGetDefaultValue();
        if (condition.forms.length > 0) {
            this.conditionData[subLevel] = condition.forms;
        }
        // if (condition) {
        //   if (condition.forms.length > 0) {
        //     this.conditionData[subLevel] = condition.forms;
        //   } else {
        //     const objectArray = Object.entries(this.currentEditBlock.condition)
        //     const lastValue: any = objectArray[objectArray.length - 1][1]
        //     this.currentEditBlock.condition.defaultValue = lastValue.defaultValue || []
        //   }
        // }
    };
    TemplateProfileCreateComponent.prototype.onGetDefaultValue = function () {
        var _a, _b;
        if (this.currentEditBlock.isConditional && ((_b = (_a = this.currentEditBlock) === null || _a === void 0 ? void 0 : _a.condition) === null || _b === void 0 ? void 0 : _b.location)) {
            var _c = this.currentEditBlock.condition.location, s0Index = _c.s0Index, rest = __rest(_c, ["s0Index"]);
            var currentData = this.categories[s0Index];
            for (var key in rest) {
                if (currentData.forms[rest[key]]) {
                    currentData = currentData.forms[rest[key]];
                }
            }
            return currentData.defaultValue || [];
        }
        return [];
    };
    TemplateProfileCreateComponent.prototype.onActiveMenu = function (cat, i, event) {
        if (event === void 0) { event = null; }
        this.editIndex = i;
        this.paramsIndex = [i];
        this.onExpendMore({ field: cat }, i);
        this.onShowSection(event);
        this.currentEditBlock = cat;
    };
    TemplateProfileCreateComponent.prototype.catNameStart = function (str) {
        var vowels = ['a', 'e', 'i', 'o', 'u', 'y'];
        return vowels.includes(str.substr(0, 1).toLocaleLowerCase());
    };
    TemplateProfileCreateComponent.prototype.onShowSection = function (e) {
        if (e)
            e.stopPropagation();
        this.isSection = true;
        this.isBlock = false;
    };
    TemplateProfileCreateComponent.prototype.onEditBlock = function (block) {
        var params = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            params[_i - 1] = arguments[_i];
        }
        console.log(params);
        this.isBlock = true;
        this.currentEditBlock = block;
        this.isSection = false;
        this.paramsIndex = params;
        this.getConditionValues();
    };
    TemplateProfileCreateComponent.prototype.onRemoveblock = function (event, block) {
        event.preventDefault();
    };
    TemplateProfileCreateComponent.prototype.onRemoveFieldBlock = function (event) {
        event.preventDefault();
        var length = this.paramsIndex.length;
        this.canExit = false;
        var forms = length === 1 ? this.categories : length === 2 ? this.categories[this.paramsIndex[0]].forms : length === 3 ? this.categories[this.paramsIndex[0]].forms[this.paramsIndex[1]].forms : this.categories[this.paramsIndex[0]].forms[this.paramsIndex[1]].forms[this.paramsIndex[2]].forms;
        this.currentEditBlock = null;
        this.isBlock = false;
        this.isSection = false;
        this.onHistorics({
            form: forms.splice(this.paramsIndex[length - 1], 1)[0],
            method: 'splice',
            location: length === 1 ? 'category' : 'forms',
            params: this.paramsIndex
        });
    };
    TemplateProfileCreateComponent.prototype.onDuplicatedBlock = function (event) {
        event.preventDefault();
        var length = this.paramsIndex.length;
        this.canExit = false;
        var forms = length === 1 ? this.categories : length === 2 ? this.categories[this.paramsIndex[0]].forms : length === 3 ? this.categories[this.paramsIndex[0]].forms[this.paramsIndex[1]].forms : this.categories[this.paramsIndex[0]].forms[this.paramsIndex[1]].forms[this.paramsIndex[2]].forms;
        var cloneEditable = this.onEditableBlock(__assign(__assign({}, this.currentEditBlock), { name: this.currentEditBlock.name + ' - copie' }));
        console.log('-------wwwwwwwww---------------', cloneEditable);
        var cloneBlock = JSON.stringify(cloneEditable);
        forms.push(JSON.parse(cloneBlock));
        this.currentEditBlock = forms.at(-1);
        var params = __spread(this.paramsIndex);
        params.pop();
        params.push(forms.length - 1);
        this.onHistorics({
            form: JSON.parse(cloneBlock),
            method: 'push',
            location: 'forms',
            params: params
        });
        // this.editIndex = forms.length - 1;
    };
    TemplateProfileCreateComponent.prototype.onEditableBlock = function (notEditableBlock) {
        var editableFormBlock = notEditableBlock.forms ? notEditableBlock.forms
            .map(function (cat) {
            if (cat.forms) {
                var f = cat.forms
                    .map(function (sub) {
                    if (sub.forms) {
                        var s = sub.forms.map(function (child) {
                            if (child.forms) {
                                return __assign(__assign({}, child), { editable: true });
                            }
                            return __assign(__assign({}, child), { editable: true });
                        });
                        return __assign(__assign({}, sub), { editable: true, forms: s });
                    }
                    return __assign(__assign({}, sub), { editable: true });
                });
                return __assign(__assign({}, cat), { editable: true, forms: f });
            }
            return __assign(__assign({}, cat), { editable: true });
        }) : null;
        return editableFormBlock ? __assign(__assign({}, notEditableBlock), { editable: true, forms: editableFormBlock }) : notEditableBlock;
    };
    TemplateProfileCreateComponent.prototype.onKeyUpChip = function (event, field) {
        this.canExit = false;
        if (event.key === ";") {
            var exist = field.defaultValue.find(function (opt) { return opt.value.toLocaleLowerCase() === event.target.value.split(";")[0].toLocaleLowerCase(); });
            if (!exist) {
                field.defaultValue.push({
                    value: event.target.value.split(";")[0].slice(0, 20),
                    checked: false
                });
                event.target.value = "";
            }
            else {
                event.target.value = "";
            }
        }
        // this.getConditionValues()
    };
    TemplateProfileCreateComponent.prototype.onEditChip = function (chip) {
        if (chip.value === this.currentChip) {
            this.currentChip = "";
            this.prevValue = "";
        }
        else {
            this.currentChip = chip.value;
            this.prevValue = chip.value;
        }
    };
    TemplateProfileCreateComponent.prototype.addKeywordFromInputBlock = function (event, field, prev) {
        var _a;
        this.canExit = false;
        var input = event.input;
        var value = event.value;
        if (value) {
            var prevIndex = (_a = field.defaultValue) === null || _a === void 0 ? void 0 : _a.findIndex(function (opt) { return opt.value.toLocaleLowerCase() === prev.toLocaleLowerCase(); });
            if (prevIndex !== -1) {
                field.defaultValue[prevIndex].value = value.trim();
                input.value = "";
            }
            else {
                var exist = field.defaultValue.find(function (opt) { return opt.value.toLocaleLowerCase() === event.value.toLocaleLowerCase(); });
                if (!exist) {
                    field.defaultValue.push({ value: value.trim().slice(0, 15), checked: false });
                    input.value = "";
                }
                else {
                    input.value = "";
                }
            }
        }
        // this.getConditionValues()
    };
    TemplateProfileCreateComponent.prototype.onCheckedChipBlock = function (event, field) {
        this.canExit = false;
        var index = field.defaultValue.findIndex(function (chip) { return chip.value === event.value; });
        if (index !== -1 && field.type === 'checkbox_multiple') {
            field.defaultValue[index].checked = !event.checked;
        }
        else if (index !== -1) {
            field.defaultValue.forEach(function (value) {
                value.checked = false;
            });
            field.defaultValue[index].checked = !event.checked;
        }
        // this.getConditionValues()
    };
    TemplateProfileCreateComponent.prototype.removeKeywordBlock = function (keyword, field) {
        this.canExit = false;
        field.defaultValue = field.defaultValue.filter(function (option) { return option.value !== keyword.value; });
        // this.getConditionValues()
    };
    TemplateProfileCreateComponent.prototype.onChangeTypeBlock = function (field) {
        this.canExit = false;
        if (field.type === "select" || field.type === "radio" || field.type === "checkbox_multiple") {
            field.defaultValue = [];
        }
        else if (field.type === "checkbox" || field.type === "toggle") {
            field.defaultValue = true;
            field.value = false;
        }
        else if (field.type === 'none') {
            field.defaultValue = "";
            field.value = "";
            field.label = "Aucun";
        }
        else {
            field.defaultValue = "";
            field.value = "";
        }
    };
    TemplateProfileCreateComponent.prototype.onAddNewSubLevelFieldBlock = function (event) {
        event.preventDefault();
        this.canExit = false;
        var length = this.paramsIndex.length;
        var forms = length === 1 ? this.categories[this.paramsIndex[0]] : length === 2 ? this.categories[this.paramsIndex[0]].forms[this.paramsIndex[length - 1]] : length === 3 ? this.categories[this.paramsIndex[0]].forms[this.paramsIndex[1]].forms[this.paramsIndex[length - 1]] : this.categories[this.paramsIndex[0]].forms[this.paramsIndex[1]].forms[this.paramsIndex[2]].forms[this.paramsIndex[length - 1]];
        forms.expandMore = true;
        forms.forms = forms.forms || [];
        var data = {
            label: "Nouvelle sous catégorie à renommer",
            key: "Nouvellesouscatégorieàrenommer",
            expandOnboarding: true,
            defaultValue: null,
            value: true,
            size: 80,
            isMandatory: false,
            otherValue: '',
            type: "text",
            editable: true,
            isConditional: false,
            conditionValue: "",
            condition: {},
            deleteable: true,
            subLevel: 1,
            expandMore: false,
        };
        forms.forms.push(data);
        this.onHistorics({
            form: data,
            method: 'push',
            location: 'forms',
            params: this.paramsIndex
        });
    };
    TemplateProfileCreateComponent.prototype.onOpenTypeDialog = function (field) {
        var _this = this;
        var dialogRef = this.dialog.open(TypeComponent, {
            data: { selectedType: field.type }
        });
        dialogRef.afterClosed().subscribe(function (type) {
            if (type) {
                field.type = type;
                _this.onChangeTypeBlock(field);
            }
        });
    };
    TemplateProfileCreateComponent.prototype.fieldWidth = function (type, length, index) {
        if (type === 'toggle') {
            return '50%';
        }
        else if (type === "text" || type === "date" || type === "none" || type == 'select' || type === 'tel' || type === 'email' || type === 'password' || type === 'textarea') {
            if (length < 3) {
                return '50%';
            }
            else if (length === 3) {
                return '33%';
            }
            else if (length === 4) {
                return '50%';
            }
            else if (length === 5) {
                return index <= 2 ? '33%' : '50%';
            }
            else if (length >= 6) {
                return '33%';
            }
        }
        return '100%';
    };
    TemplateProfileCreateComponent.prototype.onCancel = function (left) {
        if (left) {
            var current = this.currentCanceledIndex === null ? this.historics.length - 1 : this.currentCanceledIndex;
            if (this.historics.length > 0 && current >= 0) {
                this.currentCanceledIndex = current - 1;
                console.log("🚀 ~ file: template-profile-create.component.ts ~ line 1902 ~ TemplateProfileCreateComponent ~ onCancel ~ this.currentCanceledIndex", this.currentCanceledIndex);
                console.log(this.currentCanceledIndex);
                var lastAction = this.historics[current];
                console.log('lastAction left', lastAction);
                var params = lastAction.params;
                var length_1 = params.length;
                console.log('length', length_1);
                console.log('this.categories', this.categories);
                var forms = length_1 === 1 ? this.categories : length_1 === 2 ? this.categories[params[0]].forms[params[1]].forms : this.categories[params[0]].forms[params[1]].forms[params[2]].forms;
                if (lastAction.method === "splice") {
                    if (length_1 === 1 && lastAction.location === 'category') {
                        forms.push(lastAction.form);
                    }
                    else if (length_1 === 1 && lastAction.location === 'forms') {
                        forms[params[0]].forms.push(lastAction.form);
                    }
                    else {
                        forms.push(lastAction.form);
                    }
                    if (lastAction.location === 'category') {
                        this.onActiveMenu(forms[forms.length - 1], forms.length - 1);
                    }
                    else {
                        this.onEditBlock(forms[forms.length - 1], lastAction.params);
                    }
                }
                else {
                    if (length_1 === 1 && lastAction.location === 'category') {
                        forms.splice(params[length_1 - 1], 1);
                    }
                    else if (length_1 === 1 && lastAction.location === 'forms') {
                        forms[params[0]].forms.splice(params[length_1 - 1], 1);
                    }
                    else {
                        forms.splice(params[length_1 - 1], 1);
                    }
                    this.currentEditBlock = null;
                }
            }
        }
        else {
            if (this.currentCanceledIndex !== null && this.historics.length > this.currentCanceledIndex) {
                this.currentCanceledIndex += 1;
                console.log("🚀 ~ file: template-profile-create.component.ts ~ line 1920 ~ TemplateProfileCreateComponent ~ onCancel ~ this.currentCanceledIndex", this.currentCanceledIndex);
                var lastAction = this.historics[this.currentCanceledIndex];
                console.log('lastAction right', lastAction);
                var params = lastAction.params;
                var length_2 = params.length;
                console.log('length', length_2);
                var forms = length_2 === 1 ? this.categories : length_2 === 2 ? this.categories[params[0]].forms[params[1]].forms : this.categories[params[0]].forms[params[1]].forms[params[2]].forms;
                console.log('forms', forms);
                if (lastAction.method === "push") {
                    if (length_2 === 1 && lastAction.location === 'category') {
                        forms.push(lastAction.form);
                    }
                    else if (length_2 === 1 && lastAction.location === 'forms') {
                        forms[params[0]].forms.push(lastAction.form);
                    }
                    else {
                        forms.push(lastAction.form);
                    }
                    if (lastAction.location === 'category') {
                        this.onActiveMenu(forms[forms.length - 1], forms.length - 1);
                    }
                    else {
                        this.onEditBlock(forms[forms.length - 1], lastAction.params);
                    }
                }
                else {
                    if (length_2 === 1 && lastAction.location === 'category') {
                        forms.splice(params[length_2 - 1], 1);
                    }
                    else if (length_2 === 1 && lastAction.location === 'forms') {
                        forms[params[0]].forms.splice(params[length_2 - 1], 1);
                    }
                    else {
                        forms.splice(params[length_2 - 1], 1);
                    }
                    this.currentEditBlock = null;
                }
            }
        }
    };
    TemplateProfileCreateComponent.prototype.onCheckValue = function (event) {
        this.invalideValue = event;
    };
    TemplateProfileCreateComponent.prototype.onHistorics = function (data) {
        if (this.currentCanceledIndex !== null) {
            this.historics = [];
            this.currentCanceledIndex = null;
        }
        console.log(data);
        this.historics.push(data);
    };
    TemplateProfileCreateComponent.ɵfac = function TemplateProfileCreateComponent_Factory(t) { return new (t || TemplateProfileCreateComponent)(i0.ɵɵdirectiveInject(i1.FormBuilder), i0.ɵɵdirectiveInject(i2.OnboardingService), i0.ɵɵdirectiveInject(i3.ActivatedRoute), i0.ɵɵdirectiveInject(i3.Router), i0.ɵɵdirectiveInject(i4.MatDialog), i0.ɵɵdirectiveInject(i5.ScrollToService)); };
    TemplateProfileCreateComponent.ɵcmp = i0.ɵɵdefineComponent({ type: TemplateProfileCreateComponent, selectors: [["onboarding-create-profile-template"]], decls: 35, vars: 11, consts: [[3, "formGroup"], [1, "category"], [1, "side-bar"], [1, "summary"], [3, "click"], ["class", "li-title", 3, "class", "click", 4, "ngFor", "ngForOf"], ["mat-button", "", "type", "submit", 1, "register-button", 3, "click"], ["mat-button", "", "type", "submit", 1, "register-button", "live-button", 3, "click"], [2, "display", "flex", "margin-right", "14px"], ["mat-button", "", "type", "submit", 1, "register-button", "live-button", 2, "margin-top", "10px", 3, "disabled", "click"], ["cdkDropListGroup", "", 1, "fields"], ["id", "categories-id", "cdkDropList", "", 1, "fields-inner", "example-list", "mt-10", 3, "cdkDropListData", "cdkDropListDropped"], ["parentList", "cdkDropList"], ["class", "category-item section-item", "cdkDrag", "", 3, "id", "paddingBottom", "class", 4, "ngFor", "ngForOf"], [1, "add-button-container", "add-category-button", "add-step"], [1, "field-property"], ["class", "property-content", 4, "ngIf"], [1, "li-title", 3, "click"], [3, "ngxScrollTo"], ["cdkDrag", "", 1, "category-item", "section-item", 3, "id"], ["cdkDragHandle", "", 1, "left-action", "move-icons"], ["mat-raised-button", "", 1, "transparent-button", 3, "click"], [1, "drag-icon"], [1, "field-content"], [1, "field-item", 3, "click"], [1, "full-width", "input-category-name"], [1, "sub-category-name"], ["mat-mini-fab", "", "color", "primary", 1, "expand-button", 3, "click"], [4, "ngIf"], ["class", "child-list", "cdkDropList", "", 3, "cdkDropListData", "cdkDropListDropped", 4, "ngIf"], ["cdkDropList", "", 1, "child-list", 3, "cdkDropListData", "cdkDropListDropped"], ["childList", "cdkDropList"], ["class", "field-box", 3, "id", "width", 4, "ngFor", "ngForOf"], [1, "field-box", 3, "id"], ["cdkDrag", ""], [1, "fields-content"], ["class", "button-action", 4, "ngIf"], [1, "fields-container"], ["class", "sub-header", 4, "ngIf"], [3, "field", "length", "i", "j", "blink", "conditionData", "onCheckValue", "onAddKeywordFromInput", "onKeyPress", "onAddNewField", "onRemoveField", "onChangeType", "onRemoveKeyword", "onAddNewSubLevelField", "onExpendMore", "onChangeLabel", "onCheckedChip", "onDrop", "onCheckedDefault", "onEditBlock"], ["class", "child", 4, "ngIf"], ["class", "add-button-container add-button-sub-category", 4, "ngIf"], [1, "button-action"], [1, "sub-header"], [1, "field-item"], ["mat-raised-button", "", 1, "transparent-button", "setting", 3, "click"], [1, "setting-icon"], ["mat-mini-fab", "", "color", "primary", 1, "expand-button", 3, "disabled", "click"], [1, "child"], ["class", "child-content", "cdkDropList", "", 3, "cdkDropListData", "cdkDropListDropped", 4, "ngIf"], ["cdkDropList", "", 1, "child-content", 3, "cdkDropListData", "cdkDropListDropped"], ["class", "", "style", "margin-bottom: 20px", 3, "id", "width", 4, "ngFor", "ngForOf"], [1, "", 2, "margin-bottom", "20px", 3, "id"], ["class", "button-action child-2-background", 4, "ngIf"], [3, "field", "length", "i", "blink", "j", "conditionData", "onCheckValue", "onAddKeywordFromInput", "onKeyPress", "onAddNewField", "onRemoveField", "onChangeType", "onRemoveKeyword", "onAddNewSubLevelField", "onExpendMore", "onChangeLabel", "onCheckedChip", "onDrop", "onCheckedDefault", "onEditBlock"], ["class", "add-button-sub-category", 4, "ngIf"], [1, "button-action", "child-2-background"], ["type", "text", "required", "", "placeholder", "Saisir le nom de la sous cat\u00E9gorie", 1, "full-width", "input-category-name", 3, "readonly", "ngModel", "ngModelOptions", "ngModelChange"], ["class", "", 3, "id", "width", 4, "ngFor", "ngForOf"], [1, "", 3, "id"], ["class", "button-action child-3-background", 4, "ngIf"], [3, "field", "length", "blink", "i", "j", "conditionData", "onCheckValue", "onAddKeywordFromInput", "onKeyPress", "onAddNewField", "onRemoveField", "onChangeType", "onRemoveKeyword", "onAddNewSubLevelField", "onExpendMore", "onChangeLabel", "onCheckedChip", "onDrop", "onCheckedDefault", "onEditBlock"], [1, "button-action", "child-3-background"], [1, "add-button-sub-category"], ["mat-raised-button", "", "color", "primary", 2, "margin", "10px auto", 3, "click"], [1, "add-button-container", "add-button-sub-category"], ["mat-raised-button", "", "color", "primary", 1, "add-button", 2, "margin", "10px auto", "padding", "10px 0", 3, "disabled", "click"], [1, "property-content"], [2, "width", "100%"], ["appearance", "outline", 1, "form-field", "mat-select", "full-width", 2, "cursor", "pointer"], ["disabled", "true", "required", "", 1, "select-type-class", 3, "ngModel", "ngModelOptions", "click", "ngModelChange"], ["value", "text"], ["value", "textarea"], ["value", "radio"], ["value", "select"], ["value", "toggle"], ["value", "checkbox"], ["value", "checkbox_multiple"], ["value", "email"], ["value", "password"], ["value", "date"], ["value", "tel"], ["value", "none"], ["appearance", "outline", 1, "form-field", "full-width"], ["type", "text", "matInput", "", "required", "", "placeholder", "", 3, "ngModel", "ngModelOptions", "ngModelChange"], [3, "ngSwitch"], ["class", "flex-auto", "style", "display: flex;align-items: flex-end;margin: 10px 0;", 4, "ngSwitchCase"], ["class", "flex-auto", 4, "ngSwitchCase"], ["class", "flex-auto full-width", "appearance", "outline", 4, "ngSwitchCase"], ["class", "form-field full-width", "appearance", "outline", 4, "ngSwitchCase"], ["class", "form-field full-width", "appearance", "outline", 3, "opacity", 4, "ngSwitchDefault"], [1, "mandatory", "top-10", "bottom-10"], [1, "toogle-button"], ["color", "#6FE8D7", 3, "ngModel", "ngModelOptions", "ngModelChange"], [1, "mandatory", "top-10"], ["aria-labelledby", "example-radio-group-label", "class", "example-radio-group", 3, "ngModel", "ngModelOptions", "ngModelChange", 4, "ngIf"], [1, "bloc-action"], ["mat-button", "", 3, "disabled", "click", 4, "ngIf"], ["mat-button", "", 3, "disabled", "click"], ["mat-button", "", 1, "delete-bloc", 3, "disabled", "click"], [1, "flex-auto", 2, "display", "flex", "align-items", "flex-end", "margin", "10px 0"], ["color", "#6FE8D7", 1, "form-field", 3, "ngModel", "ngModelOptions", "ngModelChange"], [2, "margin-left", "10px"], [1, "flex-auto"], [1, "form-field", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["appearance", "outline", 1, "flex-auto", "full-width"], ["cdkDropList", "", "aria-label", "Video keywords; let index=index", "multiple", "", "selectable", "", 3, "cdkDropListData", "cdkDropListDropped"], ["childList", "cdkDropList", "chipList", ""], ["style", "min-height: 25px;width: auto;", "cdkDrag", "", 3, "selected", "value", "removable", "dblclick", "click", "removed", 4, "ngFor", "ngForOf"], ["placeholder", "add...", 3, "matChipInputFor", "matChipInputAddOnBlur", "matChipInputSeparatorKeyCodes", "ngModel", "ngModelOptions", "matChipInputTokenEnd", "keyup", "ngModelChange"], ["chipsInput", ""], ["cdkDrag", "", 2, "min-height", "25px", "width", "auto", 3, "selected", "value", "removable", "dblclick", "click", "removed"], ["matChipRemove", ""], ["type", "text", "matInput", "", "placeholder", "Description...", 3, "ngModelOptions", "ngModel", "ngModelChange"], ["matInput", "", "placeholder", "", 3, "type", "disabled", "ngModelOptions", "ngModel", "ngModelChange"], ["appearance", "outline", 1, "form-field", "mat-select", "full-width"], ["required", "", 3, "ngModel", "ngModelOptions", "ngModelChange", "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], ["class", "form-field mat-select full-width", "appearance", "outline", 4, "ngIf"], [3, "value"], ["aria-labelledby", "example-radio-group-label", 1, "example-radio-group", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["class", "example-radio-button", "style", "margin-right: 10px", 3, "value", 4, "ngFor", "ngForOf"], [1, "example-radio-button", 2, "margin-right", "10px", 3, "value"], [1, ""], ["required", "", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["mat-button", "", 3, "click"]], template: function TemplateProfileCreateComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "main");
            i0.ɵɵelementStart(1, "form", 0);
            i0.ɵɵelementStart(2, "div", 1);
            i0.ɵɵelementStart(3, "div", 2);
            i0.ɵɵelementStart(4, "div", 3);
            i0.ɵɵelementStart(5, "h3");
            i0.ɵɵelementStart(6, "span");
            i0.ɵɵtext(7);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(8, "mat-icon", 4);
            i0.ɵɵlistener("click", function TemplateProfileCreateComponent_Template_mat_icon_click_8_listener() { return ctx.openDialog(); });
            i0.ɵɵtext(9, "edit");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(10, "ol");
            i0.ɵɵtemplate(11, TemplateProfileCreateComponent_li_11_Template, 4, 4, "li", 5);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(12, "button", 6);
            i0.ɵɵlistener("click", function TemplateProfileCreateComponent_Template_button_click_12_listener() { return ctx.onSubmit(false); });
            i0.ɵɵtext(13);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(14, "button", 7);
            i0.ɵɵlistener("click", function TemplateProfileCreateComponent_Template_button_click_14_listener() { return ctx.onSubmit(true); });
            i0.ɵɵtext(15);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(16, "div", 8);
            i0.ɵɵelementStart(17, "button", 9);
            i0.ɵɵlistener("click", function TemplateProfileCreateComponent_Template_button_click_17_listener() { return ctx.onCancel(true); });
            i0.ɵɵelementStart(18, "mat-icon");
            i0.ɵɵtext(19, "rotate_left");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(20, "button", 9);
            i0.ɵɵlistener("click", function TemplateProfileCreateComponent_Template_button_click_20_listener() { return ctx.onCancel(false); });
            i0.ɵɵelementStart(21, "mat-icon");
            i0.ɵɵtext(22, "rotate_right");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(23, "div", 10);
            i0.ɵɵelementStart(24, "div", 11, 12);
            i0.ɵɵlistener("cdkDropListDropped", function TemplateProfileCreateComponent_Template_div_cdkDropListDropped_24_listener($event) { return ctx.drop($event); });
            i0.ɵɵtemplate(26, TemplateProfileCreateComponent_div_26_Template, 16, 10, "div", 13);
            i0.ɵɵelementStart(27, "div", 14);
            i0.ɵɵelementStart(28, "button", 4);
            i0.ɵɵlistener("click", function TemplateProfileCreateComponent_Template_button_click_28_listener($event) { return ctx.onAddNewCategory($event); });
            i0.ɵɵtext(29, " Ajouter une \u00E9tape ");
            i0.ɵɵelementStart(30, "mat-icon");
            i0.ɵɵtext(31, "add");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(32, "div", 15);
            i0.ɵɵtemplate(33, TemplateProfileCreateComponent_div_33_Template, 33, 5, "div", 16);
            i0.ɵɵtemplate(34, TemplateProfileCreateComponent_div_34_Template, 26, 9, "div", 16);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("formGroup", ctx.form);
            i0.ɵɵadvance(6);
            i0.ɵɵtextInterpolate(ctx.form.get("Name").value);
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("ngForOf", ctx.categories);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.draftLabel);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.liveLabel);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("disabled", ctx.currentCanceledIndex < 0 || ctx.historics.length === 0);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("disabled", ctx.currentCanceledIndex === ctx.historics.length - 1 || ctx.currentCanceledIndex === null);
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("cdkDropListData", ctx.categories);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngForOf", ctx.categories);
            i0.ɵɵadvance(7);
            i0.ɵɵproperty("ngIf", ctx.isBlock && ctx.currentEditBlock);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.isSection && ctx.currentEditBlock);
        } }, directives: [i1.ɵangular_packages_forms_forms_y, i1.NgControlStatusGroup, i1.FormGroupDirective, i6.MatIcon, i7.NgForOf, i8.MatButton, i9.CdkDropListGroup, i9.CdkDropList, i7.NgIf, i5.ScrollToDirective, i9.CdkDrag, i9.CdkDragHandle, i10.SubTemplateProfileComponent, i1.DefaultValueAccessor, i1.RequiredValidator, i1.NgControlStatus, i1.NgModel, i11.NativeElementInjectorDirective, i12.MatFormField, i12.MatLabel, i13.MatSelect, i14.MatOption, i15.MatInput, i7.NgSwitch, i7.NgSwitchCase, i7.NgSwitchDefault, i16.MatSlideToggle, i17.MatCheckbox, i18.MatChipList, i18.MatChipInput, i18.MatChip, i18.MatChipRemove, i19.MatRadioGroup, i19.MatRadioButton], styles: ["main[_ngcontent-%COMP%]{background:no-repeat padding-box #f4f7f9;height:100vh;width:100%;display:flex;flex-direction:column;align-items:center}main[_ngcontent-%COMP%]   .disabled[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{background-color:transparent!important}main[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{display:flex;height:100%;width:100%;max-width:1500px}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]{width:786px;background:no-repeat padding-box #fff;border:1px solid #dce4e9;border-radius:6px;opacity:1;margin:auto;padding:0 25px;-ms-grid-row-align:center;align-self:center}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{text-align:center;font:900 32px/48px Nexa;letter-spacing:0;color:#171f26}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font:18px/24px Nexa Text;letter-spacing:0;color:#171f26}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .profil-name-content[_ngcontent-%COMP%]{display:flex;align-items:center;position:relative}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .profil-name-content[_ngcontent-%COMP%]   .add-picto[_ngcontent-%COMP%]{margin-right:15px;min-width:50px;width:30px;padding:9px 12px}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .profil-name-content[_ngcontent-%COMP%]   .add-picto[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin-right:10px}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .profil-name-content[_ngcontent-%COMP%]   .list-picto[_ngcontent-%COMP%]{position:absolute;height:200px;width:100%;background:no-repeat padding-box #fff;border:1px solid #171f26;border-radius:8px;top:100%;z-index:1}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .profil-name-content[_ngcontent-%COMP%]   .list-picto[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin:15px;border:none;font-size:40px}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .profil-name-content[_ngcontent-%COMP%]   .list-picto[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]:hover{color:#830b6b!important;cursor:pointer}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .box-title-content[_ngcontent-%COMP%]{width:100%;margin:25px auto}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font:900 32px/38px Nexa;letter-spacing:0;color:#171f26}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font:15px/26px Nexa Text;letter-spacing:0;color:#171f26;text-align:center}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .link-create-profil[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:center}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{text-align:center;border:1px solid #543cb6;border-radius:7px;padding:.7em 2em .5em;display:flex;align-items:center;background-color:transparent;font:bold 15px/17px Nexa;letter-spacing:0;color:#543cb6}main[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:space-between}.expand-button[_ngcontent-%COMP%]{color:#5a607f!important;background-color:transparent!important;box-shadow:none!important}.input-category-name[_ngcontent-%COMP%]{border:none;outline:0;text-align:left;font-family:Nexa;font-weight:700;font-size:20px;line-height:28px;color:#242731}.sub-category-name[_ngcontent-%COMP%]{font-family:Nexa;font-style:normal;font-weight:250;font-size:14px;line-height:16px;display:flex;align-items:center;color:#575f6e;word-break:break-word}.full-width[_ngcontent-%COMP%]{width:100%}.field-action[_ngcontent-%COMP%]{width:10%}.field-size[_ngcontent-%COMP%]{width:90%;margin:auto 2% auto auto}  .mat-form-field-appearance-fill .mat-form-field-flex{background-color:#fff}  .mat-select.mat-form-field-appearance-outline .mat-form-field-infix{padding:.5em 0}  .mat-select{padding:8px 0}  .mat-form-field-appearance-fill .mat-form-field-underline::before{background-color:transparent}  .mat-form-field-wrapper{padding-bottom:0!important}[_nghost-%COMP%]     .cdk-drag-preview .input-category-name div.mat-form-field-outline-start, [_nghost-%COMP%]     .input-category-name div.mat-form-field-outline-start{border-color:0!important;border-width:0!important}[_nghost-%COMP%]     .input-category-name .mat-form-field-outline-gap{border-color:0!important;border-width:0!important}[_nghost-%COMP%]     .mat-checkbox-checked.mat-accent .mat-checkbox-background, [_nghost-%COMP%]     .mat-checkbox-indeterminate.mat-accent .mat-checkbox-background{background-color:transparent}[_nghost-%COMP%]     .input-category-name .mat-form-field-outline-end{border-color:0!important;border-width:0!important}[_nghost-%COMP%]     .input-category-name .mat-form-field-label-wrapper{display:none}[_nghost-%COMP%]     .input-category-name .mat-form-field-appearance-outline .mat-form-field-outline{color:transparent!important}[_nghost-%COMP%]     .input-category-name .mat-form-field-infix{border-top:none}.category-action[_ngcontent-%COMP%]{display:flex;width:100%}.delete-field[_ngcontent-%COMP%]{margin:auto 2%}.radio-group[_ngcontent-%COMP%]   .mat-radio-button[_ngcontent-%COMP%]{margin-right:10px}.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary[_ngcontent-%COMP%]{background-color:#3f51b5;color:#fff;min-height:20px;font-size:10px}.move-icons[_ngcontent-%COMP%]{cursor:move}.category-item[_ngcontent-%COMP%], .cdk-drag-placeholder[_ngcontent-%COMP%]{display:flex;align-items:baseline;position:relative;width:calc(100% - 40px)!important;border-radius:8px;background-color:#fff;margin-bottom:15px;margin-right:5px;padding:6px 15px}.category-item[_ngcontent-%COMP%]   .left-action[_ngcontent-%COMP%], .cdk-drag-placeholder[_ngcontent-%COMP%]   .left-action[_ngcontent-%COMP%]{height:auto;width:40px;align-self:baseline;border-top-left-radius:8px;border-bottom-left-radius:8px}.category-item[_ngcontent-%COMP%]   .left-action[_ngcontent-%COMP%]   .transparent-button[_ngcontent-%COMP%], .cdk-drag-placeholder[_ngcontent-%COMP%]   .left-action[_ngcontent-%COMP%]   .transparent-button[_ngcontent-%COMP%]{background-color:transparent;box-shadow:none;width:40px;padding:0;margin:0;min-width:auto;color:#fff}.category-item[_ngcontent-%COMP%]   .left-action[_ngcontent-%COMP%]   .transparent-button[_ngcontent-%COMP%]   .drag-icon[_ngcontent-%COMP%], .cdk-drag-placeholder[_ngcontent-%COMP%]   .left-action[_ngcontent-%COMP%]   .transparent-button[_ngcontent-%COMP%]   .drag-icon[_ngcontent-%COMP%]{color:#171f26;cursor:move;margin-right:15px}.category-item[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%], .cdk-drag-placeholder[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%]{width:calc(100% - 40px);-ms-grid-row-align:center;align-self:center}.category-item[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%]   .child-list[_ngcontent-%COMP%], .cdk-drag-placeholder[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%]   .child-list[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;background-color:transparent;width:103%;position:relative;margin-left:-1.5%}.category-item[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%], .cdk-drag-placeholder[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:baseline;border:transparent!important}.category-item[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]   .mat-form-field-wrapper[_ngcontent-%COMP%]   .mat-form-field-flex[_ngcontent-%COMP%]   .mat-form-field-outline[_ngcontent-%COMP%], .category-item[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%]   .mat-form-field-outline[_ngcontent-%COMP%], .cdk-drag-placeholder[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]   .mat-form-field-wrapper[_ngcontent-%COMP%]   .mat-form-field-flex[_ngcontent-%COMP%]   .mat-form-field-outline[_ngcontent-%COMP%], .cdk-drag-placeholder[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%]   .mat-form-field-outline[_ngcontent-%COMP%]{color:transparent!important}.field-box[_ngcontent-%COMP%]{margin-bottom:15px;display:flex;align-items:center}.cdk-drag-preview[_ngcontent-%COMP%]{box-sizing:border-box;border-radius:4px;opacity:1}.cdk-drag-preview[_ngcontent-%COMP%]   .expand-button[_ngcontent-%COMP%]{color:#5a607f!important;background-color:transparent!important;box-shadow:none!important;margin-right:6px!important}.cdk-drag-placeholder[_ngcontent-%COMP%]{opacity:0}.cdk-drag-animating[_ngcontent-%COMP%], .example-list.cdk-drop-list-dragging[_ngcontent-%COMP%]   .category-item[_ngcontent-%COMP%]:not(.cdk-drag-placeholder){transition:transform 250ms cubic-bezier(0,0,.2,1)}.child[_ngcontent-%COMP%]{margin-left:0}.child-content[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;margin-bottom:30px}.sub-category-forms[_ngcontent-%COMP%]{margin-bottom:0!important;margin-top:10px!important}.category[_ngcontent-%COMP%]{display:flex;flex-direction:row;width:100vw;height:100%}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]{width:250px;background-color:#fff;margin:10px 20px;border-radius:5px;height:100%}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:25px;margin:10px;padding-bottom:5px;font-family:\"Nexa Text\";display:flex;align-items:center;justify-content:center}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{text-overflow:ellipsis;white-space:nowrap;overflow:hidden;font-family:Nexa;font-weight:700;font-size:24px;line-height:110%;text-align:center;color:#242731;text-transform:capitalize}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin-left:15px;cursor:pointer}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]{font-weight:600;font-size:15px;list-style-position:inside;padding-left:0}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:5px;margin:5px auto;cursor:pointer;text-align:left;font:12px/19px Nexa Text;letter-spacing:0;color:#535760}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]{padding-left:0;margin-left:0}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.li-title[_ngcontent-%COMP%]{text-align:center;list-style:none;font-family:Nexa;font-weight:700;font-size:18px;line-height:24px;text-transform:capitalize;height:48px}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.li-title[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:140px;outline:0;border:1px dashed grey}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.li-title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:inline-flex;align-items:center}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.li-title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin-left:10px;display:none}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.li-title.active[_ngcontent-%COMP%], .category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.li-title[_ngcontent-%COMP%]:hover{display:flex;flex-direction:row;justify-content:center;align-items:center;position:static;background:rgba(84,60,182,.5);flex:none;color:#fff}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.li-title.active[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%], .category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.li-title[_ngcontent-%COMP%]:hover   mat-icon[_ngcontent-%COMP%]{display:initial!important}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.sub-title[_ngcontent-%COMP%]{list-style:none;padding-left:20px}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.sub-title.active[_ngcontent-%COMP%], .category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.sub-title.active[_ngcontent-%COMP%]::marker, .category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.sub-title[_ngcontent-%COMP%]:hover{font-weight:600;background:no-repeat padding-box #e5e8ee;border-radius:5px}.category[_ngcontent-%COMP%]   .fields[_ngcontent-%COMP%]{width:100%;overflow:hidden;overflow-x:hidden;position:relative;padding-top:10px;height:calc(100% - 10px)}.category[_ngcontent-%COMP%]   .fields[_ngcontent-%COMP%]   .fields-inner[_ngcontent-%COMP%]{max-height:100%;height:100%;width:100%;overflow:auto}.category[_ngcontent-%COMP%]   .fields[_ngcontent-%COMP%]   .add-category-button[_ngcontent-%COMP%]{position:relative!important;width:calc(100% - 40px)!important;padding:20px 0}.category[_ngcontent-%COMP%]   .fields[_ngcontent-%COMP%]   .add-category-button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin-left:10px}.category[_ngcontent-%COMP%]   .fields[_ngcontent-%COMP%]   .add-step[_ngcontent-%COMP%]{bottom:0!important;top:0!important}.category[_ngcontent-%COMP%]   .disabled[_ngcontent-%COMP%]{background-color:#f4f7f9!important}.category[_ngcontent-%COMP%]   .expand-button[_ngcontent-%COMP%]{color:#5a607f!important;background-color:transparent!important;box-shadow:none!important;margin-right:6px!important}.category[_ngcontent-%COMP%]   .expand-button[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%]{font-size:40px}.category[_ngcontent-%COMP%]   .transparent-button[_ngcontent-%COMP%]{background-color:transparent;box-shadow:none;width:40px;padding:0;margin:0;margin-left:0!important;min-width:auto;color:#fff}.add-button-sub-category[_ngcontent-%COMP%]{width:93%;position:absolute;left:3%;bottom:-13px}.add-button-sub-category[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{width:100%}.add-button-container[_ngcontent-%COMP%]{background:no-repeat padding-box #fff;border-radius:8px;margin-top:10px;padding:10px 0;display:flex;justify-content:center;align-items:center;width:100%;margin-bottom:22px;position:absolute;left:0;top:100%}.add-button-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{display:flex;align-items:center;background-color:transparent;border:none;cursor:pointer;font:17px/26px Nexa Text;letter-spacing:0;color:#000;box-shadow:none}.add-button-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{width:100%}.add-category[_ngcontent-%COMP%]{background-color:#fcfcfe;border-radius:5px;margin-left:10px;margin-bottom:10px;font:bold 12px/19px Nexa Text;letter-spacing:0;color:#c2c8d5;width:92%}.cdk-drag[_ngcontent-%COMP%]{width:100%;position:relative}.cdk-drag[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]{display:flex;height:100%;margin:0;width:100%}.cdk-drag[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]   .button-action[_ngcontent-%COMP%]{align-self:baseline;margin-top:0;margin-left:3px;border-bottom-left-radius:8px;border-top-left-radius:8px}.cdk-drag[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]   .button-action[_ngcontent-%COMP%]   .transparent-button[_ngcontent-%COMP%]{background-color:transparent;box-shadow:none;width:40px;padding:0;margin:0;min-width:auto;color:#fff}.cdk-drag[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]   .button-action[_ngcontent-%COMP%]   .transparent-button[_ngcontent-%COMP%]   .drag-icon[_ngcontent-%COMP%]{color:#171f26;cursor:move;margin-right:15px}.cdk-drag[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]   .child-3-background[_ngcontent-%COMP%]{background-color:#e5e8ee!important}.cdk-drag[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]   .fields-container[_ngcontent-%COMP%]{border-radius:0 8px 8px 0;background-color:#fff;width:100%;padding-left:10px;padding-right:10px;padding-top:5px;position:relative;margin-bottom:10px}.cdk-drag[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]   .fields-container[_ngcontent-%COMP%]   lib-sub-category[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;width:100%}.cdk-drag[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]   .fields-container[_ngcontent-%COMP%]   lib-sub-category[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]   .button-action[_ngcontent-%COMP%]{background-color:#039be5!important;height:100%;margin:auto 15px auto auto;display:flex}.cdk-drag[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]   .fields-container[_ngcontent-%COMP%]   lib-sub-category[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]   .button-action[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{box-shadow:none;background-color:transparent;color:#fff}.side-bar[_ngcontent-%COMP%]{display:flex;flex-direction:column}.register-button[_ngcontent-%COMP%]{background:no-repeat padding-box #171f26!important;border:2px solid #171f26!important;border-radius:7px;color:#fff!important;width:85%;margin-left:22px!important;border:none!important;padding:5px;box-shadow:0 0 0 rgba(0,0,0,.2);margin:30px 0}.live-button[_ngcontent-%COMP%]{background-color:#fff!important;color:#171f26!important;border:2px solid #171f26!important}.content-item[_ngcontent-%COMP%]{transition-property:border-image-slice border-image-source border-width;transition-timing-function:ease-in-out;transition-duration:.5s}.active-content[_ngcontent-%COMP%]{border-image-slice:1;border-width:2px;border-image-source:linear-gradient(to left,#9d107d,#4862ab)}.field-property[_ngcontent-%COMP%]{padding:11px;height:calc(100% - 22px);min-width:350px}.field-property[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-family:Nexa;font-size:20px;line-height:110%;padding-top:10px;display:flex;align-items:center;color:#242731}.field-property[_ngcontent-%COMP%]   .property-content[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:flex-start;padding:0 20px;background:#fff;border-radius:8px 8px 0 0;min-height:100%;height:auto}.field-property[_ngcontent-%COMP%]   .bloc-action[_ngcontent-%COMP%], .field-property[_ngcontent-%COMP%]   .property-content[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{text-align:center}.field-property[_ngcontent-%COMP%]   .bloc-action[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:100%;padding:6px;margin-top:10px}.field-property[_ngcontent-%COMP%]   .bloc-action[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin-left:5px}.field-property[_ngcontent-%COMP%]   .bloc-action[_ngcontent-%COMP%]   .delete-bloc[_ngcontent-%COMP%]{background:#f44336;box-shadow:0 0 0 rgba(0,0,0,.2);border-radius:7px;color:#fff}[_ngcontent-%COMP%]::-webkit-scrollbar{width:5px}[_ngcontent-%COMP%]::-webkit-scrollbar-track{box-shadow:inset 0 0 2px transparent;border-radius:10px}[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background:0 0;border-radius:10px}[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover{background:0 0}.toogle-button[_ngcontent-%COMP%]{color:#707273!important;display:flex;align-items:center;font-family:Nexa;font-style:normal;font-weight:400;font-size:18px;line-height:18px}.toogle-button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{padding-right:10px}[_nghost-%COMP%]     .category .mat-slide-toggle.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar{background-color:#039be5!important;position:relative;width:42px;height:23px;flex-shrink:0;border-radius:14px}[_nghost-%COMP%]     .category .mat-slide-toggle:not(.mat-disabled) .mat-slide-toggle-bar{background-color:#707273!important;position:relative;width:42px;height:23px;flex-shrink:0;border-radius:14px}[_nghost-%COMP%]     .category .mat-slide-toggle.mat-checked:not(.mat-disabled) .mat-slide-toggle-thumb{background-color:#fff;margin-top:4px}[_nghost-%COMP%]     .category .mat-slide-toggle:not(.mat-disabled) .mat-slide-toggle-thumb{margin-top:4px;margin-left:4px}[_nghost-%COMP%]     .category .mat-slide-toggle.draft:not(.mat-disabled) .mat-slide-toggle-bar{background-color:#707273!important}[_nghost-%COMP%]     .category .mat-slide-toggle.draft.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar{background-color:#039be5!important}.top-10[_ngcontent-%COMP%]{margin-top:10px}.bottom-10[_ngcontent-%COMP%]{margin-bottom:10px}.section-item[_ngcontent-%COMP%]{border:2px solid transparent;overflow:hidden}.section-item.active[_ngcontent-%COMP%], .section-item[_ngcontent-%COMP%]:hover{border:2px solid #242731;border-radius:8px;cursor:pointer}  .select-type-class.mat-select-disabled .mat-select-value{color:#000!important;cursor:pointer}  .fields-content .mat-radio-button.mat-accent.mat-radio-checked .mat-radio-outer-circle,   .property-content .mat-radio-button.mat-accent.mat-radio-checked .mat-radio-outer-circle{border-color:#039be5!important}  .fields-content .mat-radio-button.mat-accent .mat-radio-inner-circle,   .fields-content .mat-radio-button.mat-accent .mat-radio-ripple .mat-ripple-element:not(.mat-radio-persistent-ripple),   .fields-content .mat-radio-button.mat-accent.mat-radio-checked .mat-radio-persistent-ripple,   .fields-content .mat-radio-button.mat-accent:active .mat-radio-persistent-ripple,   .property-content .mat-radio-button.mat-accent .mat-radio-inner-circle,   .property-content .mat-radio-button.mat-accent .mat-radio-ripple .mat-ripple-element:not(.mat-radio-persistent-ripple),   .property-content .mat-radio-button.mat-accent.mat-radio-checked .mat-radio-persistent-ripple,   .property-content .mat-radio-button.mat-accent:active .mat-radio-persistent-ripple{background-color:#039be5!important}  .fields-content .mat-checkbox-checkmark-path,   .property-content .mat-checkbox-checkmark-path{stroke:#039be5 !important!important}  .fields-content .mat-checkbox-frame,   .property-content .mat-checkbox-frame{border:2px solid #039be5!important}  .fields-content .mat-checkbox-inner-container,   .property-content .mat-checkbox-inner-container{height:20px!important;width:20px!important}  .field-content .mat-form-field,   .field-content .select-content{width:100%}  .field-content .mat-form-field-infix{display:block;position:relative;flex:auto;min-width:0;width:100%!important}.setting[_ngcontent-%COMP%]{z-index:1;background-color:#d5d6d7!important;border-radius:40px;width:42px!important;height:40px!important;padding:0 10px!important;align-items:center;justify-content:center;display:none}.setting[_ngcontent-%COMP%]   .setting-icon[_ngcontent-%COMP%], .setting[_ngcontent-%COMP%]   .transparent-button[_ngcontent-%COMP%]{color:#171f26}.sub-header[_ngcontent-%COMP%]:hover   .setting[_ngcontent-%COMP%]{display:flex}.add-button-sub-category[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin:10px auto;width:100%;color:#000;box-shadow:none;background-color:#fcfcfe;padding:5px span;padding-width:100%!important}  .add-button{padding:10px 0}  .add-button span{width:100%}  .mat-button[disabled]{opacity:.5!important}"] });
    return TemplateProfileCreateComponent;
}());
export { TemplateProfileCreateComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(TemplateProfileCreateComponent, [{
        type: Component,
        args: [{
                selector: "onboarding-create-profile-template",
                templateUrl: "./template-profile-create.component.html",
                styleUrls: ["./template-profile-create.component.scss"],
            }]
    }], function () { return [{ type: i1.FormBuilder }, { type: i2.OnboardingService }, { type: i3.ActivatedRoute }, { type: i3.Router }, { type: i4.MatDialog }, { type: i5.ScrollToService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVtcGxhdGUtcHJvZmlsZS1jcmVhdGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vb25ib2FyZGluZy8iLCJzb3VyY2VzIjpbImxpYi9wYWdlcy90ZW1wbGF0ZS1wcm9maWxlLWNyZWF0ZS90ZW1wbGF0ZS1wcm9maWxlLWNyZWF0ZS5jb21wb25lbnQudHMiLCJsaWIvcGFnZXMvdGVtcGxhdGUtcHJvZmlsZS1jcmVhdGUvdGVtcGxhdGUtcHJvZmlsZS1jcmVhdGUuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLE9BQU8sRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFLLFNBQVMsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ25FLE9BQU8sRUFBZSxlQUFlLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN6RixPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ2xELE9BQU8sRUFBMEIsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFcEUsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0sbUZBQW1GLENBQUM7QUFDbEksT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sc0RBQXNELENBQUM7QUFLNUYsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHNEQUFzRCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ0Z6RSw4QkFFRTtJQURBLDBRQUE4QjtJQUM5Qiw0QkFDRTtJQUFBLGdDQUFxQztJQUFBLFlBQWM7SUFBQSxpQkFBTztJQUM1RCxpQkFBTztJQUNULGlCQUFLOzs7OztJQUxnQiw0REFBeUM7SUFHcEQsZUFBOEI7SUFBOUIsaURBQThCO0lBQUMsZUFBYztJQUFkLG1DQUFjOzs7SUE0Q2pELGdDQUF1QztJQUFBLDZCQUFhO0lBQUEsaUJBQVc7OztJQUMvRCxnQ0FBc0M7SUFBQSwyQkFBVztJQUFBLGlCQUFXOzs7O0lBV3RELCtCQUVFO0lBQUEsa0NBQ0U7SUFEbUQsbUxBQVMs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QUFTO2FBQVQsVUFBUyxFQUFULHFCQUFTLEVBQVQsSUFBUztZQUFULCtCQUFTOztRQUM5QixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUNyQixJQUFNLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDO1FBQzdCLElBQU0sS0FBSyxHQUFHLE1BQU0sS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbFEsSUFBSSxLQUFLLENBQUMsR0FBRyxLQUFLLEdBQUcsRUFBRTtZQUNyQixJQUFNLEtBQUssR0FBRyxLQUFLLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxVQUFDLEdBQUcsSUFBSyxPQUFBLEdBQUcsQ0FBQyxLQUFLLENBQUMsaUJBQWlCLEVBQUUsS0FBSyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsaUJBQWlCLEVBQUUsRUFBdEYsQ0FBc0YsQ0FBQyxDQUFDO1lBQ3ZJLElBQUksQ0FBQyxLQUFLLEVBQUU7Z0JBQ1YsS0FBSyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUM7b0JBQ3RCLEtBQUssRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUN2QyxPQUFPLEVBQUUsS0FBSztpQkFDZixDQUFDLENBQUM7Z0JBQ0gsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO2FBQ3pCO2lCQUFNO2dCQUNMLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQzthQUN6QjtTQUNGO1FBQ0QsNEJBQTRCO0lBQzlCLENBQUM7SUFFRCxzREFBYSxHQUFiLFVBQWMsT0FBWTtRQUFFLGdCQUFTO2FBQVQsVUFBUyxFQUFULHFCQUFTLEVBQVQsSUFBUztZQUFULCtCQUFTOztRQUNuQyxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUNyQixJQUFNLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDO1FBQzdCLElBQU0sS0FBSyxHQUFHLE1BQU0sS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbFEsS0FBSyxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxVQUFDLE1BQU0sSUFBSyxPQUFBLE1BQU0sQ0FBQyxLQUFLLEtBQUssT0FBTyxDQUFDLEtBQUssRUFBOUIsQ0FBOEIsQ0FBQyxDQUFDO1FBQzNGLDRCQUE0QjtJQUM5QixDQUFDO0lBRUQscURBQVksR0FBWixVQUFhLEtBQUs7UUFBRSxnQkFBUzthQUFULFVBQVMsRUFBVCxxQkFBUyxFQUFULElBQVM7WUFBVCwrQkFBUzs7UUFDM0IsSUFBSSxLQUFLLEVBQUU7WUFDVCxJQUFJLEtBQUssQ0FBQyxLQUFLLEVBQUU7Z0JBQ2YsS0FBSyxDQUFDLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQzthQUM5QjtZQUNELElBQUksS0FBSyxDQUFDLEtBQUssSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsVUFBVSxFQUFFO2dCQUMxQyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7b0JBQy9DLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztvQkFDdEMsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRTt3QkFDNUIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTs0QkFDeEQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQzt5QkFDaEQ7cUJBQ0Y7aUJBQ0Y7YUFDRjtTQUVGO1FBQ0QsSUFBSSxNQUFNLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtZQUN2QixJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDO1NBQ2hGO2FBQU0sSUFBSSxNQUFNLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtZQUM5QixJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsRUFBRTtnQkFDMUQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQzthQUNoRTtpQkFBTTtnQkFDTCxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7Z0JBQzdDLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7YUFDL0Q7U0FDRjthQUFNLElBQUksTUFBTSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFDOUIsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxFQUFFO2dCQUMzRSxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQzthQUNqRjtpQkFBTTtnQkFDTCxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7Z0JBQzdDLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7Z0JBQzlELElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO2FBQ2hGO1NBQ0Y7YUFBTTtZQUNMLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLEVBQUU7Z0JBQzVGLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxH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S0FBSyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDbkMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDbkMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUMzRDtRQUNELElBQU0sTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUM7UUFDN0IsSUFBTSxLQUFLLEdBQUcsTUFBTSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNsUSxLQUFLLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUE7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RCxTQUFTLEVBQUUsQ0FBQywwQ0FBMEMsQ0FBQzthQUN4RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IENPTU1BLCBFTlRFUiwgSSwgU0VNSUNPTE9OIH0gZnJvbSBcIkBhbmd1bGFyL2Nkay9rZXljb2Rlc1wiO1xyXG5pbXBvcnQgeyBDZGtEcmFnRHJvcCwgbW92ZUl0ZW1JbkFycmF5LCB0cmFuc2ZlckFycmF5SXRlbSB9IGZyb20gXCJAYW5ndWxhci9jZGsvZHJhZy1kcm9wXCI7XHJcbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZvcm1CdWlsZGVyLCBGb3JtR3JvdXAsIFZhbGlkYXRvcnMgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuXHJcbmltcG9ydCB7IERpYWxvZ0NyZWF0ZVRlbXBsYXRlQ29tcG9uZW50IH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvdGVtcGxhdGUvZGlhbG9nLWNyZWF0ZS10ZW1wbGF0ZS9kaWFsb2ctY3JlYXRlLXRlbXBsYXRlLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBFeGl0Q29uZmlybUNvbXBvbmVudCB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2V4aXQtY29uZmlybS9leGl0LWNvbmZpcm0uY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IE1hdENoaXBJbnB1dEV2ZW50IH0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsL2NoaXBzXCI7XHJcbmltcG9ydCB7IE1hdERpYWxvZyB9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbC9kaWFsb2dcIjtcclxuaW1wb3J0IHsgT25ib2FyZGluZ1NlcnZpY2UgfSBmcm9tIFwiLi4vLi4vb25ib2FyZGluZy5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFNjcm9sbFRvU2VydmljZSB9IGZyb20gXCJAbmlja3ktbGVuYWVycy9uZ3gtc2Nyb2xsLXRvXCI7XHJcbmltcG9ydCB7IFR5cGVDb21wb25lbnQgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy90ZW1wbGF0ZS90eXBlLWRpYWxvZy90eXBlLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBmaWVsZFdpZHRoIH0gZnJvbSBcIi4uLy4uL3V0aWxzL3V0aWxzXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogXCJvbmJvYXJkaW5nLWNyZWF0ZS1wcm9maWxlLXRlbXBsYXRlXCIsXHJcbiAgdGVtcGxhdGVVcmw6IFwiLi90ZW1wbGF0ZS1wcm9maWxlLWNyZWF0ZS5jb21wb25lbnQuaHRtbFwiLFxyXG4gIHN0eWxlVXJsczogW1wiLi90ZW1wbGF0ZS1wcm9maWxlLWNyZWF0ZS5jb21wb25lbnQuc2Nzc1wiXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFRlbXBsYXRlUHJvZmlsZUNyZWF0ZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgZm9ybTogRm9ybUdyb3VwO1xyXG4gIHZhbGlkQ2F0ZWdvcnkgPSBmYWxzZTtcclxuICBzZXBhcmF0b3JLZXlzQ29kZXMgPSBbRU5URVIsIENPTU1BLCBTRU1JQ09MT05dO1xyXG4gIGN1cnJlbnRQcm9maWw6IGFueSA9IHt9O1xyXG4gIGNhbkV4aXQgPSB0cnVlO1xyXG4gIHRhZ3MgPSBbXTtcclxuICBpZCA9IFwiMFwiO1xyXG4gIHBhcmVudCA9IFtdO1xyXG4gIGVkaXRJbmRleCA9IG51bGw7XHJcbiAgc2hvd1Byb2ZpbGVOYW1lID0gdHJ1ZTtcclxuICBsaXZlTGFiZWwgPSBcIlB1YmxpZXJcIlxyXG4gIGRyYWZ0TGFiZWwgPSBcIkVucmVnaXN0cmVyIGxlIGJyb3VpbGxvblwiXHJcbiAgaW52YWxpZGVWYWx1ZTogYm9vbGVhbjtcclxuXHJcbiAgaXNQaWN0b0xpc3RTaG93OiBib29sZWFuO1xyXG4gIHBpY3RvID0gXCJcIjtcclxuICBhbGwgPSBcIlwiXHJcbiAgczEgPSBcIlwiXHJcbiAgczIgPSBcIlwiXHJcbiAgczMgPSBcIlwiXHJcbiAgY29uZGl0aW9uRGF0YSA9IHtcclxuICAgIGFsbDogW10sXHJcbiAgICBzMTogW10sXHJcbiAgICBzMjogW10sXHJcbiAgICBzMzogW10sXHJcbiAgICBkZWZhdWx0VmFsdWU6IFtdXHJcbiAgfTtcclxuICBjYXRlZ29yaWVzID0gW107XHJcbiAgaXNCbG9jayA9IGZhbHNlO1xyXG4gIGlzU2VjdGlvbiA9IGZhbHNlO1xyXG4gIGN1cnJlbnRFZGl0QmxvY2s6IGFueTtcclxuICBjdXJyZW50Q2hpcCA9IFwiXCJcclxuICBwcmV2VmFsdWUgPSBcIlwiXHJcbiAgcGFyYW1zSW5kZXg6IGFueVtdO1xyXG4gIGhpc3RvcmljcyA9IFtdO1xyXG4gIGN1cnJlbnRDYW5jZWxlZEluZGV4ID0gbnVsbDtcclxuICBuZXdGaWVsZEluZGV4ID0gbnVsbDtcclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgZmI6IEZvcm1CdWlsZGVyLFxyXG4gICAgcHVibGljIHNlcnZpY2U6IE9uYm9hcmRpbmdTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXHJcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxyXG4gICAgcHJpdmF0ZSBkaWFsb2c6IE1hdERpYWxvZyxcclxuICAgIHByaXZhdGUgc2Nyb2xsVG9TZXJ2aWNlOiBTY3JvbGxUb1NlcnZpY2VcclxuICApIHtcclxuICAgIHRoaXMuc2VydmljZS5fY3VycmVudFRlbXBsYXRlLnN1YnNjcmliZSgocHJvZmlsKSA9PiB7XHJcbiAgICAgIHRoaXMuaW5pdEZvcm0oKVxyXG4gICAgICBpZiAocHJvZmlsKSB7XHJcbiAgICAgICAgdGhpcy5mb3JtLnBhdGNoVmFsdWUocHJvZmlsKTtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvZmlsJywgSlNPTi5zdHJpbmdpZnkocHJvZmlsKSlcclxuXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc3QgcHJvZmlsID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvZmlsJykpO1xyXG4gICAgICAgIHRoaXMuZm9ybS5wYXRjaFZhbHVlKHByb2ZpbCk7XHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBkZWZhdWx0Q2F0ZWdvcmllOiBhbnkgPSBbXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwiVXRpbGlzYXRldXJcIixcclxuICAgICAga2V5OiAndXRpbGlzYXRldXInLFxyXG4gICAgICBlZGl0YWJsZTogZmFsc2UsXHJcbiAgICAgIGRlbGV0ZWFibGU6IGZhbHNlLFxyXG4gICAgICBleHBhbmRNb3JlOiBmYWxzZSxcclxuICAgICAgZXhwYW5kT25ib2FyZGluZzogdHJ1ZSxcclxuICAgICAgZGVmYXVsdFZhbHVlOiBmYWxzZSxcclxuICAgICAgc3VmZml4RW5kcG9pbnQ6IFwiY2F0ZWdvcnkvdXNlclwiLFxyXG4gICAgICBzZWxlY3Rvcjoge1xyXG4gICAgICAgIGxhYmVsOiBcIkNvbXBhbnlcIixcclxuICAgICAgICBrZXk6IFwiQ29tcGFueVwiLFxyXG4gICAgICAgIGRlZmF1bHRWYWx1ZTogW3sgdmFsdWU6IFwiTm93dGVhbVwiLCBjaGVja2VkOiB0cnVlIH0sIHsgdmFsdWU6IFwiSW50ZXJuYWxcIiwgY2hlY2tlZDogZmFsc2UgfV0sXHJcbiAgICAgICAgdmFsdWU6IFwiTm93dGVhbVwiXHJcbiAgICAgIH0sXHJcbiAgICAgIHRpY2tldFR5cGU6IHtcclxuICAgICAgICBsYWJlbDogXCJUeXBlIGRlIHRpY2tldFwiLFxyXG4gICAgICAgIGtleTogXCJ0eWNrZXRUeXBlXCIsXHJcbiAgICAgICAgZGVmYXVsdFZhbHVlOiBbeyB2YWx1ZTogXCJDcsOpYXRpb24gZGUgY29tcHRlXCIsIGNoZWNrZWQ6IHRydWUsIGtleTogXCJDcmVhdGlvbl9kZV9jb21wdGVcIiB9LCB7IHZhbHVlOiBcIkNvbmZpZ3VyYXRpb24gZGUgcG9zdGVcIiwgY2hlY2tlZDogZmFsc2UsIGtleTogXCJDb25maWd1cmF0aW9uX2RlX3Bvc3RlXCIgfV0sXHJcbiAgICAgICAgdmFsdWU6IFwiQ3JlYXRpb25fZGVfY29tcHRlXCJcclxuICAgICAgfSxcclxuICAgICAgZm9ybXM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBsYWJlbDogXCJDaXZpbGl0w6lcIixcclxuICAgICAgICAgIGtleTogXCJTYWx1dGF0aW9uXCIsXHJcbiAgICAgICAgICBleHBhbmRPbmJvYXJkaW5nOiB0cnVlLFxyXG4gICAgICAgICAgZGVmYXVsdFZhbHVlOiBbeyB2YWx1ZTogXCJNLlwiLCBjaGVja2VkOiBmYWxzZSB9LCB7IHZhbHVlOiBcIk1tZVwiLCBjaGVja2VkOiBmYWxzZSB9XSxcclxuICAgICAgICAgIGNvbmRpdGlvbjoge30sXHJcbiAgICAgICAgICB2YWx1ZTogbnVsbCxcclxuICAgICAgICAgIHNpemU6IDEwLFxyXG4gICAgICAgICAgaXNNYW5kYXRvcnk6IHRydWUsXHJcbiAgICAgICAgICBvdGhlclZhbHVlOiAnJyxcclxuICAgICAgICAgIHR5cGU6IFwic2VsZWN0XCIsXHJcbiAgICAgICAgICBlZGl0YWJsZTogZmFsc2UsXHJcbiAgICAgICAgICBkZWxldGVhYmxlOiBmYWxzZSxcclxuICAgICAgICAgIHN1YkxldmVsOiAxLFxyXG5cclxuICAgICAgICAgIGV4cGFuZE1vcmU6IGZhbHNlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbGFiZWw6IFwiVHlwZSBkZSBwcm9maWxcIixcclxuICAgICAgICAgIGtleTogXCJUeXBlX2RlX3Byb2ZpbF9Ob3dib2FyZF9fY1wiLFxyXG4gICAgICAgICAgZXhwYW5kT25ib2FyZGluZzogdHJ1ZSxcclxuICAgICAgICAgIGRlZmF1bHRWYWx1ZTogW3sgdmFsdWU6IFwiTWFuYWdlclwiLCBjaGVja2VkOiBmYWxzZSB9LCB7IHZhbHVlOiBcIlV0aWxpc2F0ZXVyXCIsIGNoZWNrZWQ6IGZhbHNlIH1dLFxyXG4gICAgICAgICAgY29uZGl0aW9uOiB7fSxcclxuICAgICAgICAgIHZhbHVlOiBudWxsLFxyXG4gICAgICAgICAgc2l6ZTogMTAsXHJcbiAgICAgICAgICBpc01hbmRhdG9yeTogdHJ1ZSxcclxuICAgICAgICAgIG90aGVyVmFsdWU6ICcnLFxyXG4gICAgICAgICAgdHlwZTogXCJzZWxlY3RcIixcclxuICAgICAgICAgIGVkaXRhYmxlOiBmYWxzZSxcclxuICAgICAgICAgIGRlbGV0ZWFibGU6IGZhbHNlLFxyXG4gICAgICAgICAgc3ViTGV2ZWw6IDEsXHJcbiAgICAgICAgICBleHBhbmRNb3JlOiBmYWxzZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGxhYmVsOiBcIk5vbVwiLFxyXG4gICAgICAgICAga2V5OiBcIkxhc3ROYW1lXCIsXHJcbiAgICAgICAgICBleHBhbmRPbmJvYXJkaW5nOiB0cnVlLFxyXG4gICAgICAgICAgZGVmYXVsdFZhbHVlOiBudWxsLFxyXG4gICAgICAgICAgdmFsdWU6IG51bGwsXHJcbiAgICAgICAgICBzaXplOiA4MCxcclxuICAgICAgICAgIGlzTWFuZGF0b3J5OiB0cnVlLFxyXG4gICAgICAgICAgY29uZGl0aW9uOiB7fSxcclxuICAgICAgICAgIG90aGVyVmFsdWU6ICcnLFxyXG4gICAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXHJcbiAgICAgICAgICBlZGl0YWJsZTogZmFsc2UsXHJcbiAgICAgICAgICBkZWxldGVhYmxlOiBmYWxzZSxcclxuICAgICAgICAgIHN1YkxldmVsOiAxLFxyXG4gICAgICAgICAgZXhwYW5kTW9yZTogZmFsc2UsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBsYWJlbDogXCJQcsOpbm9tXCIsXHJcbiAgICAgICAgICBrZXk6IFwiRmlyc3ROYW1lXCIsXHJcbiAgICAgICAgICBleHBhbmRPbmJvYXJkaW5nOiB0cnVlLFxyXG4gICAgICAgICAgY29uZGl0aW9uOiB7fSxcclxuICAgICAgICAgIGRlZmF1bHRWYWx1ZTogbnVsbCxcclxuICAgICAgICAgIHZhbHVlOiBudWxsLFxyXG4gICAgICAgICAgc2l6ZTogODAsXHJcbiAgICAgICAgICBpc01hbmRhdG9yeTogdHJ1ZSxcclxuICAgICAgICAgIG90aGVyVmFsdWU6ICcnLFxyXG4gICAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXHJcbiAgICAgICAgICBlZGl0YWJsZTogZmFsc2UsXHJcbiAgICAgICAgICBkZWxldGVhYmxlOiBmYWxzZSxcclxuICAgICAgICAgIHN1YkxldmVsOiAxLFxyXG4gICAgICAgICAgZXhwYW5kTW9yZTogZmFsc2UsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBsYWJlbDogXCJFbWFpbFwiLFxyXG4gICAgICAgICAga2V5OiBcIkVtYWlsXCIsXHJcbiAgICAgICAgICBleHBhbmRPbmJvYXJkaW5nOiB0cnVlLFxyXG4gICAgICAgICAgZGVmYXVsdFZhbHVlOiBudWxsLFxyXG4gICAgICAgICAgY29uZGl0aW9uOiB7fSxcclxuICAgICAgICAgIHZhbHVlOiBudWxsLFxyXG4gICAgICAgICAgc2l6ZTogODAsXHJcbiAgICAgICAgICBpc01hbmRhdG9yeTogdHJ1ZSxcclxuICAgICAgICAgIG90aGVyVmFsdWU6ICcnLFxyXG4gICAgICAgICAgdHlwZTogXCJlbWFpbFwiLFxyXG4gICAgICAgICAgZWRpdGFibGU6IGZhbHNlLFxyXG4gICAgICAgICAgZGVsZXRlYWJsZTogZmFsc2UsXHJcbiAgICAgICAgICBzdWJMZXZlbDogMSxcclxuICAgICAgICAgIGV4cGFuZE1vcmU6IGZhbHNlLFxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGxhYmVsOiBcIkZpeGUgKG9wdClcIixcclxuICAgICAgICAgIGtleTogXCJQaG9uZVwiLFxyXG4gICAgICAgICAgZXhwYW5kT25ib2FyZGluZzogdHJ1ZSxcclxuICAgICAgICAgIGRlZmF1bHRWYWx1ZTogbnVsbCxcclxuICAgICAgICAgIGNvbmRpdGlvbjoge30sXHJcbiAgICAgICAgICB2YWx1ZTogbnVsbCxcclxuICAgICAgICAgIHNpemU6IDIwLFxyXG4gICAgICAgICAgaXNNYW5kYXRvcnk6IGZhbHNlLFxyXG4gICAgICAgICAgb3RoZXJWYWx1ZTogJycsXHJcbiAgICAgICAgICB0eXBlOiBcInRlbFwiLFxyXG4gICAgICAgICAgZWRpdGFibGU6IGZhbHNlLFxyXG4gICAgICAgICAgZGVsZXRlYWJsZTogZmFsc2UsXHJcbiAgICAgICAgICBzdWJMZXZlbDogMSxcclxuXHJcbiAgICAgICAgICBleHBhbmRNb3JlOiBmYWxzZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGxhYmVsOiBcIk1vYmlsZVwiLFxyXG4gICAgICAgICAga2V5OiBcIk1vYmlsZVBob25lXCIsXHJcbiAgICAgICAgICBleHBhbmRPbmJvYXJkaW5nOiB0cnVlLFxyXG4gICAgICAgICAgZGVmYXVsdFZhbHVlOiBudWxsLFxyXG4gICAgICAgICAgY29uZGl0aW9uOiB7fSxcclxuICAgICAgICAgIHZhbHVlOiBudWxsLFxyXG4gICAgICAgICAgc2l6ZTogMjAsXHJcbiAgICAgICAgICBpc01hbmRhdG9yeTogZmFsc2UsXHJcbiAgICAgICAgICBvdGhlclZhbHVlOiAnJyxcclxuICAgICAgICAgIHR5cGU6IFwidGVsXCIsXHJcbiAgICAgICAgICBlZGl0YWJsZTogZmFsc2UsXHJcbiAgICAgICAgICBkZWxldGVhYmxlOiBmYWxzZSxcclxuICAgICAgICAgIHN1YkxldmVsOiAxLFxyXG4gICAgICAgICAgZXhwYW5kTW9yZTogZmFsc2UsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBsYWJlbDogXCJGb25jdGlvblwiLFxyXG4gICAgICAgICAga2V5OiBcIlRpdGxlXCIsXHJcbiAgICAgICAgICBleHBhbmRPbmJvYXJkaW5nOiB0cnVlLFxyXG4gICAgICAgICAgZGVmYXVsdFZhbHVlOiBudWxsLFxyXG4gICAgICAgICAgdmFsdWU6IG51bGwsXHJcbiAgICAgICAgICBjb25kaXRpb246IHt9LFxyXG4gICAgICAgICAgc2l6ZTogODAsXHJcbiAgICAgICAgICBpc01hbmRhdG9yeTogdHJ1ZSxcclxuICAgICAgICAgIG90aGVyVmFsdWU6ICcnLFxyXG4gICAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXHJcbiAgICAgICAgICBlZGl0YWJsZTogZmFsc2UsXHJcbiAgICAgICAgICBkZWxldGVhYmxlOiBmYWxzZSxcclxuICAgICAgICAgIHN1YkxldmVsOiAxLFxyXG4gICAgICAgICAgZXhwYW5kTW9yZTogZmFsc2UsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBsYWJlbDogXCJFdGFibGlzc2VtZW50IC8gU2l0ZVwiLFxyXG4gICAgICAgICAga2V5OiBcIkFjY291bnROYW1lXCIsXHJcbiAgICAgICAgICBleHBhbmRPbmJvYXJkaW5nOiB0cnVlLFxyXG4gICAgICAgICAgZGVmYXVsdFZhbHVlOiBudWxsLFxyXG4gICAgICAgICAgdmFsdWU6IG51bGwsXHJcbiAgICAgICAgICBjb25kaXRpb246IHt9LFxyXG4gICAgICAgICAgc2l6ZTogODAsXHJcbiAgICAgICAgICBpc01hbmRhdG9yeTogdHJ1ZSxcclxuICAgICAgICAgIG90aGVyVmFsdWU6ICcnLFxyXG4gICAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXHJcbiAgICAgICAgICBlZGl0YWJsZTogZmFsc2UsXHJcbiAgICAgICAgICBkZWxldGVhYmxlOiBmYWxzZSxcclxuICAgICAgICAgIHN1YkxldmVsOiAxLFxyXG4gICAgICAgICAgZXhwYW5kTW9yZTogZmFsc2UsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBsYWJlbDogXCJBY2PDqHMgYXUgcG9ydGFpbFwiLFxyXG4gICAgICAgICAga2V5OiBcIkFjY19zX2F1X3BvcnRhaWxfY2xpZW50X05vd0JvYXJkX19jXCIsXHJcbiAgICAgICAgICBjb25kaXRpb246IHt9LFxyXG4gICAgICAgICAgZXhwYW5kT25ib2FyZGluZzogdHJ1ZSxcclxuICAgICAgICAgIGRlZmF1bHRWYWx1ZTogW3sgdmFsdWU6IFwiT3VpXCIsIGNoZWNrZWQ6IGZhbHNlIH0sIHsgdmFsdWU6IFwiTm9uXCIsIGNoZWNrZWQ6IGZhbHNlIH1dLFxyXG4gICAgICAgICAgdmFsdWU6IG51bGwsXHJcbiAgICAgICAgICBzaXplOiAxMCxcclxuICAgICAgICAgIGlzTWFuZGF0b3J5OiB0cnVlLFxyXG4gICAgICAgICAgb3RoZXJWYWx1ZTogJycsXHJcbiAgICAgICAgICB0eXBlOiBcInNlbGVjdFwiLFxyXG4gICAgICAgICAgZWRpdGFibGU6IGZhbHNlLFxyXG4gICAgICAgICAgZGVsZXRlYWJsZTogZmFsc2UsXHJcbiAgICAgICAgICBzdWJMZXZlbDogMSxcclxuXHJcbiAgICAgICAgICBleHBhbmRNb3JlOiBmYWxzZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGxhYmVsOiBcIkxhbmd1ZVwiLFxyXG4gICAgICAgICAga2V5OiBcIkxhbmd1ZV9tYXRlcm5lbGxlX19jXCIsXHJcbiAgICAgICAgICBleHBhbmRPbmJvYXJkaW5nOiB0cnVlLFxyXG4gICAgICAgICAgZGVmYXVsdFZhbHVlOiBbeyB2YWx1ZTogXCJGcmFuw6dhaXNcIiwgY2hlY2tlZDogZmFsc2UgfSwgeyB2YWx1ZTogXCJBbmdsYWlzXCIsIGNoZWNrZWQ6IGZhbHNlIH1dLFxyXG4gICAgICAgICAgY29uZGl0aW9uOiB7fSxcclxuICAgICAgICAgIHZhbHVlOiBudWxsLFxyXG4gICAgICAgICAgc2l6ZTogMTAsXHJcbiAgICAgICAgICBpc01hbmRhdG9yeTogdHJ1ZSxcclxuICAgICAgICAgIG90aGVyVmFsdWU6ICcnLFxyXG4gICAgICAgICAgdHlwZTogXCJzZWxlY3RcIixcclxuICAgICAgICAgIGVkaXRhYmxlOiBmYWxzZSxcclxuICAgICAgICAgIGRlbGV0ZWFibGU6IGZhbHNlLFxyXG4gICAgICAgICAgc3ViTGV2ZWw6IDEsXHJcbiAgICAgICAgICBleHBhbmRNb3JlOiBmYWxzZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGxhYmVsOiBcIkRhdGUgZCdlbnRyw6llXCIsXHJcbiAgICAgICAgICBrZXk6IFwiZGF0ZV9vZl9lbnRyeVwiLFxyXG4gICAgICAgICAgZXhwYW5kT25ib2FyZGluZzogdHJ1ZSxcclxuICAgICAgICAgIGRlZmF1bHRWYWx1ZTogbnVsbCxcclxuICAgICAgICAgIHZhbHVlOiBudWxsLFxyXG4gICAgICAgICAgY29uZGl0aW9uOiB7fSxcclxuICAgICAgICAgIHNpemU6IDgwLFxyXG4gICAgICAgICAgaXNNYW5kYXRvcnk6IHRydWUsXHJcbiAgICAgICAgICBvdGhlclZhbHVlOiAnJyxcclxuICAgICAgICAgIHR5cGU6IFwiZGF0ZVwiLFxyXG4gICAgICAgICAgZWRpdGFibGU6IGZhbHNlLFxyXG4gICAgICAgICAgZGVsZXRlYWJsZTogZmFsc2UsXHJcbiAgICAgICAgICBzdWJMZXZlbDogMSxcclxuICAgICAgICAgIGV4cGFuZE1vcmU6IGZhbHNlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIF0sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIlNlc3Npb24gZCd1dGlsaXNhdGV1clwiLFxyXG4gICAgICBrZXk6IFwic2Vzc2lvbmQndXRpbGlzYXRldXJcIixcclxuICAgICAgZWRpdGFibGU6IHRydWUsXHJcbiAgICAgIGlzQ29uZGl0aW9uYWw6IGZhbHNlLFxyXG4gICAgICBjb25kaXRpb25WYWx1ZTogXCJcIixcclxuICAgICAgY29uZGl0aW9uOiB7fSxcclxuICAgICAgZGVsZXRlYWJsZTogdHJ1ZSxcclxuICAgICAgc2VsZWN0ZWQ6IHRydWUsXHJcbiAgICAgIGV4cGFuZE1vcmU6IGZhbHNlLFxyXG4gICAgICBleHBhbmRPbmJvYXJkaW5nOiB0cnVlLFxyXG4gICAgICBkZWZhdWx0VmFsdWU6IGZhbHNlLFxyXG4gICAgICBzdWZmaXhFbmRwb2ludDogXCJjYXRlZ29yeS91c2VyLXNlc3Npb25cIixcclxuICAgICAgc2VsZWN0b3I6IHtcclxuICAgICAgICBsYWJlbDogXCJDb21wYW55XCIsXHJcbiAgICAgICAga2V5OiBcIkNvbXBhbnlcIixcclxuICAgICAgICBkZWZhdWx0VmFsdWU6IFt7IHZhbHVlOiBcIk5vd3RlYW1cIiwgY2hlY2tlZDogdHJ1ZSB9LCB7IHZhbHVlOiBcIkludGVybmFsXCIsIGNoZWNrZWQ6IGZhbHNlIH1dLFxyXG4gICAgICAgIHZhbHVlOiBcIk5vd3RlYW1cIlxyXG4gICAgICB9LFxyXG4gICAgICB0aWNrZXRUeXBlOiB7XHJcbiAgICAgICAgbGFiZWw6IFwiVHlwZSBkZSB0aWNrZXRcIixcclxuICAgICAgICBrZXk6IFwidHlja2V0VHlwZVwiLFxyXG4gICAgICAgIGRlZmF1bHRWYWx1ZTogW3sgdmFsdWU6IFwiQ3LDqWF0aW9uIGRlIGNvbXB0ZVwiLCBjaGVja2VkOiB0cnVlLCBrZXk6IFwiQ3JlYXRpb25fZGVfY29tcHRlXCIgfSwgeyB2YWx1ZTogXCJDb25maWd1cmF0aW9uIGRlIHBvc3RlXCIsIGNoZWNrZWQ6IGZhbHNlLCBrZXk6IFwiQ29uZmlndXJhdGlvbl9kZV9wb3N0ZVwiIH1dLFxyXG4gICAgICAgIHZhbHVlOiBcIkNyZWF0aW9uX2RlX2NvbXB0ZVwiXHJcbiAgICAgIH0sXHJcbiAgICAgIGZvcm1zOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbGFiZWw6IFwiVXRpbGlzYXRldXIgbG9jYWwgw6AgY3LDqWVyXCIsXHJcbiAgICAgICAgICBrZXk6IFwiVXNlckxvY2FsVG9DcmVhdGVcIixcclxuICAgICAgICAgIGV4cGFuZE9uYm9hcmRpbmc6IHRydWUsXHJcbiAgICAgICAgICBkZWZhdWx0VmFsdWU6IG51bGwsXHJcbiAgICAgICAgICB2YWx1ZTogdHJ1ZSxcclxuICAgICAgICAgIHNpemU6IDgwLFxyXG4gICAgICAgICAgaXNNYW5kYXRvcnk6IGZhbHNlLFxyXG4gICAgICAgICAgb3RoZXJWYWx1ZTogJycsXHJcbiAgICAgICAgICB0eXBlOiBcImNoZWNrYm94XCIsXHJcbiAgICAgICAgICBlZGl0YWJsZTogdHJ1ZSxcclxuICAgICAgICAgIGlzQ29uZGl0aW9uYWw6IGZhbHNlLFxyXG4gICAgICAgICAgY29uZGl0aW9uVmFsdWU6IFwiXCIsXHJcbiAgICAgICAgICBjb25kaXRpb246IHt9LFxyXG4gICAgICAgICAgZGVsZXRlYWJsZTogdHJ1ZSxcclxuICAgICAgICAgIHN1YkxldmVsOiAxLFxyXG4gICAgICAgICAgZXhwYW5kTW9yZTogZmFsc2UsXHJcbiAgICAgICAgICAvKnNlbGVjdG9yOiB7XHJcbiAgICAgICAgICAgIGxhYmVsOiBcIkNvbXBhbnlcIixcclxuICAgICAgICAgICAga2V5OiBcIkNvbXBhbnlcIixcclxuICAgICAgICAgICAgZGVmYXVsdFZhbHVlOiBbeyB2YWx1ZTogXCJOb3d0ZWFtXCIsIGNoZWNrZWQ6IHRydWUgfSwgeyB2YWx1ZTogXCJJbnRlcm5hbFwiLCBjaGVja2VkOiBmYWxzZSB9XSxcclxuICAgICAgICAgICAgdmFsdWU6IFwiTm93dGVhbVwiXHJcbiAgICAgICAgICB9LCovXHJcbiAgICAgICAgICBmb3JtczogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgbGFiZWw6IFwiTG9naW5cIixcclxuICAgICAgICAgICAgICBrZXk6IFwiTG9naW5cIixcclxuICAgICAgICAgICAgICBleHBhbmRPbmJvYXJkaW5nOiB0cnVlLFxyXG4gICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZTogbnVsbCxcclxuICAgICAgICAgICAgICB2YWx1ZTogbnVsbCxcclxuICAgICAgICAgICAgICBzaXplOiA4MCxcclxuICAgICAgICAgICAgICBpc01hbmRhdG9yeTogdHJ1ZSxcclxuICAgICAgICAgICAgICBvdGhlclZhbHVlOiAnJyxcclxuICAgICAgICAgICAgICB0eXBlOiBcInRleHRcIixcclxuICAgICAgICAgICAgICBlZGl0YWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgICBpc0NvbmRpdGlvbmFsOiBmYWxzZSxcclxuICAgICAgICAgICAgICBjb25kaXRpb25WYWx1ZTogXCJcIixcclxuICAgICAgICAgICAgICBjb25kaXRpb246IHt9LFxyXG4gICAgICAgICAgICAgIGRlbGV0ZWFibGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgIHN1YkxldmVsOiAyLFxyXG4gICAgICAgICAgICAgIGV4cGFuZE1vcmU6IGZhbHNlLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgbGFiZWw6IFwiTW90IGRlIHBhc3NlXCIsXHJcbiAgICAgICAgICAgICAga2V5OiBcIlBhc3N3b3JkXCIsXHJcbiAgICAgICAgICAgICAgZXhwYW5kT25ib2FyZGluZzogdHJ1ZSxcclxuICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU6IG51bGwsXHJcbiAgICAgICAgICAgICAgdmFsdWU6IG51bGwsXHJcbiAgICAgICAgICAgICAgc2l6ZTogODAsXHJcbiAgICAgICAgICAgICAgaXNNYW5kYXRvcnk6IHRydWUsXHJcbiAgICAgICAgICAgICAgb3RoZXJWYWx1ZTogJycsXHJcbiAgICAgICAgICAgICAgdHlwZTogXCJwYXNzd29yZFwiLFxyXG4gICAgICAgICAgICAgIGVkaXRhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICAgIGlzQ29uZGl0aW9uYWw6IGZhbHNlLFxyXG4gICAgICAgICAgICAgIGNvbmRpdGlvblZhbHVlOiBcIlwiLFxyXG4gICAgICAgICAgICAgIGNvbmRpdGlvbjoge30sXHJcbiAgICAgICAgICAgICAgZGVsZXRlYWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgICBzdWJMZXZlbDogMixcclxuICAgICAgICAgICAgICBleHBhbmRNb3JlOiBmYWxzZSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIF0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBsYWJlbDogXCJVdGlsaXNhdGV1ciBBRCAoc2VydmV1cikgw6AgY3LDqWVyXCIsXHJcbiAgICAgICAgICBrZXk6IFwiVXNlclNlcnZlclRvQ3JlYXRlXCIsXHJcbiAgICAgICAgICBleHBhbmRPbmJvYXJkaW5nOiB0cnVlLFxyXG4gICAgICAgICAgZGVmYXVsdFZhbHVlOiBudWxsLFxyXG4gICAgICAgICAgdmFsdWU6IHRydWUsXHJcbiAgICAgICAgICBzaXplOiA4MCxcclxuICAgICAgICAgIGlzTWFuZGF0b3J5OiBmYWxzZSxcclxuICAgICAgICAgIG90aGVyVmFsdWU6ICcnLFxyXG4gICAgICAgICAgdHlwZTogXCJjaGVja2JveFwiLFxyXG4gICAgICAgICAgZWRpdGFibGU6IHRydWUsXHJcbiAgICAgICAgICBpc0NvbmRpdGlvbmFsOiBmYWxzZSxcclxuICAgICAgICAgIGNvbmRpdGlvblZhbHVlOiBcIlwiLFxyXG4gICAgICAgICAgY29uZGl0aW9uOiB7fSxcclxuICAgICAgICAgIGRlbGV0ZWFibGU6IHRydWUsXHJcbiAgICAgICAgICBzdWJMZXZlbDogMSxcclxuICAgICAgICAgIGV4cGFuZE1vcmU6IGZhbHNlLFxyXG4gICAgICAgICAgZm9ybXM6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIGxhYmVsOiBcIk5vbSBkZSBkb21haW5lXCIsXHJcbiAgICAgICAgICAgICAga2V5OiBcIkRvbWFpbk5hbWVcIixcclxuICAgICAgICAgICAgICBleHBhbmRPbmJvYXJkaW5nOiB0cnVlLFxyXG4gICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZTogbnVsbCxcclxuICAgICAgICAgICAgICB2YWx1ZTogbnVsbCxcclxuICAgICAgICAgICAgICBzaXplOiA4MCxcclxuICAgICAgICAgICAgICBpc01hbmRhdG9yeTogdHJ1ZSxcclxuICAgICAgICAgICAgICBvdGhlclZhbHVlOiAnJyxcclxuICAgICAgICAgICAgICB0eXBlOiBcInRleHRcIixcclxuICAgICAgICAgICAgICBlZGl0YWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgICBpc0NvbmRpdGlvbmFsOiBmYWxzZSxcclxuICAgICAgICAgICAgICBjb25kaXRpb25WYWx1ZTogXCJcIixcclxuICAgICAgICAgICAgICBjb25kaXRpb246IHt9LFxyXG4gICAgICAgICAgICAgIGRlbGV0ZWFibGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgIHN1YkxldmVsOiAyLFxyXG4gICAgICAgICAgICAgIGV4cGFuZE1vcmU6IGZhbHNlLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgbGFiZWw6IFwiVm90cmUgbG9naW5cIixcclxuICAgICAgICAgICAgICBrZXk6IFwiWW91ckxvZ2luXCIsXHJcbiAgICAgICAgICAgICAgZXhwYW5kT25ib2FyZGluZzogdHJ1ZSxcclxuICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU6IG51bGwsXHJcbiAgICAgICAgICAgICAgdmFsdWU6IG51bGwsXHJcbiAgICAgICAgICAgICAgc2l6ZTogODAsXHJcbiAgICAgICAgICAgICAgaXNNYW5kYXRvcnk6IHRydWUsXHJcbiAgICAgICAgICAgICAgb3RoZXJWYWx1ZTogJycsXHJcbiAgICAgICAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXHJcbiAgICAgICAgICAgICAgZWRpdGFibGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgaXNDb25kaXRpb25hbDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgY29uZGl0aW9uVmFsdWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgY29uZGl0aW9uOiB7fSxcclxuICAgICAgICAgICAgICBkZWxldGVhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICAgIHN1YkxldmVsOiAyLFxyXG4gICAgICAgICAgICAgIGV4cGFuZE1vcmU6IGZhbHNlLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgbGFiZWw6IFwiVm90cmUgbW90IGRlIHBhc3NlXCIsXHJcbiAgICAgICAgICAgICAga2V5OiBcIllvdXJQYXNzd29yZFwiLFxyXG4gICAgICAgICAgICAgIGV4cGFuZE9uYm9hcmRpbmc6IHRydWUsXHJcbiAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlOiBudWxsLFxyXG4gICAgICAgICAgICAgIHZhbHVlOiBudWxsLFxyXG4gICAgICAgICAgICAgIHNpemU6IDgwLFxyXG4gICAgICAgICAgICAgIGlzTWFuZGF0b3J5OiB0cnVlLFxyXG4gICAgICAgICAgICAgIG90aGVyVmFsdWU6ICcnLFxyXG4gICAgICAgICAgICAgIHR5cGU6IFwicGFzc3dvcmRcIixcclxuICAgICAgICAgICAgICBlZGl0YWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgICBpc0NvbmRpdGlvbmFsOiBmYWxzZSxcclxuICAgICAgICAgICAgICBjb25kaXRpb25WYWx1ZTogXCJcIixcclxuICAgICAgICAgICAgICBjb25kaXRpb246IHt9LFxyXG4gICAgICAgICAgICAgIGRlbGV0ZWFibGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgc3ViTGV2ZWw6IDIsXHJcbiAgICAgICAgICAgICAgZXhwYW5kTW9yZTogZmFsc2UsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBsYWJlbDogXCJHcm91cGUgZGUgc8OpY3VyaXTDqVwiLFxyXG4gICAgICAgICAgICAgIGtleTogXCJHcm91cFNlY3VyaXR5XCIsXHJcbiAgICAgICAgICAgICAgZXhwYW5kT25ib2FyZGluZzogdHJ1ZSxcclxuICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU6IG51bGwsXHJcbiAgICAgICAgICAgICAgdmFsdWU6IHRydWUsXHJcbiAgICAgICAgICAgICAgc2l6ZTogODAsXHJcbiAgICAgICAgICAgICAgaXNNYW5kYXRvcnk6IHRydWUsXHJcbiAgICAgICAgICAgICAgb3RoZXJWYWx1ZTogJycsXHJcbiAgICAgICAgICAgICAgdHlwZTogXCJjaGVja2JveFwiLFxyXG4gICAgICAgICAgICAgIGVkaXRhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICAgIGlzQ29uZGl0aW9uYWw6IGZhbHNlLFxyXG4gICAgICAgICAgICAgIGNvbmRpdGlvblZhbHVlOiBcIlwiLFxyXG4gICAgICAgICAgICAgIGNvbmRpdGlvbjoge30sXHJcbiAgICAgICAgICAgICAgZGVsZXRlYWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgICBzdWJMZXZlbDogMixcclxuICAgICAgICAgICAgICBleHBhbmRNb3JlOiBmYWxzZSxcclxuICAgICAgICAgICAgICBmb3JtczogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICBsYWJlbDogXCJVdGlsaXNhdGV1ciBhdmVjIGxlcyBkcm9pdHMgc2ltaWxhaXJlc1wiLFxyXG4gICAgICAgICAgICAgICAgICBrZXk6IFwiVXNlcldpdGhTaW1pbGFyQWNjZXNzXCIsXHJcbiAgICAgICAgICAgICAgICAgIGV4cGFuZE9uYm9hcmRpbmc6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZTogbnVsbCxcclxuICAgICAgICAgICAgICAgICAgdmFsdWU6IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgIHNpemU6IDgwLFxyXG4gICAgICAgICAgICAgICAgICBpc01hbmRhdG9yeTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgb3RoZXJWYWx1ZTogJycsXHJcbiAgICAgICAgICAgICAgICAgIHR5cGU6IFwidGV4dFwiLFxyXG4gICAgICAgICAgICAgICAgICBlZGl0YWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgaXNDb25kaXRpb25hbDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgIGNvbmRpdGlvblZhbHVlOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICBjb25kaXRpb246IHt9LFxyXG4gICAgICAgICAgICAgICAgICBkZWxldGVhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICBzdWJMZXZlbDogMyxcclxuICAgICAgICAgICAgICAgICAgZXhwYW5kTW9yZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICBsYWJlbDogXCJEZXNjcmlwdGlvbnNcIixcclxuICAgICAgICAgICAgICAgICAga2V5OiBcIkRlc2NyaXB0aW9uXCIsXHJcbiAgICAgICAgICAgICAgICAgIGV4cGFuZE9uYm9hcmRpbmc6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZTogbnVsbCxcclxuICAgICAgICAgICAgICAgICAgdmFsdWU6IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgIHNpemU6IDI1NSxcclxuICAgICAgICAgICAgICAgICAgaXNNYW5kYXRvcnk6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgIG90aGVyVmFsdWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICB0eXBlOiBcInRleHRhcmVhXCIsXHJcbiAgICAgICAgICAgICAgICAgIGVkaXRhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICBpc0NvbmRpdGlvbmFsOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgY29uZGl0aW9uVmFsdWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgIGNvbmRpdGlvbjoge30sXHJcbiAgICAgICAgICAgICAgICAgIGRlbGV0ZWFibGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgIHN1YkxldmVsOiAzLFxyXG4gICAgICAgICAgICAgICAgICBleHBhbmRNb3JlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIF0sXHJcbiAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwiTWVzc2FnZXJpZVwiLFxyXG4gICAgICBrZXk6ICdtZXNzYWdlcmllJyxcclxuICAgICAgZXhwYW5kTW9yZTogZmFsc2UsXHJcbiAgICAgIHN1ZmZpeEVuZHBvaW50OiBcImNhdGVnb3J5L21lc3NhZ2VyaWVcIixcclxuICAgICAgc2VsZWN0ZWQ6IHRydWUsXHJcbiAgICAgIGVkaXRhYmxlOiB0cnVlLFxyXG4gICAgICBpc0NvbmRpdGlvbmFsOiBmYWxzZSxcclxuICAgICAgY29uZGl0aW9uVmFsdWU6IFwiXCIsXHJcbiAgICAgIGNvbmRpdGlvbjoge30sXHJcbiAgICAgIGRlbGV0ZWFibGU6IHRydWUsXHJcbiAgICAgIGV4cGFuZE9uYm9hcmRpbmc6IHRydWUsXHJcbiAgICAgIGRlZmF1bHRWYWx1ZTogZmFsc2UsXHJcbiAgICAgIHNlbGVjdG9yOiB7XHJcbiAgICAgICAgbGFiZWw6IFwiQ29tcGFueVwiLFxyXG4gICAgICAgIGtleTogXCJDb21wYW55XCIsXHJcbiAgICAgICAgZGVmYXVsdFZhbHVlOiBbeyB2YWx1ZTogXCJOb3d0ZWFtXCIsIGNoZWNrZWQ6IHRydWUgfSwgeyB2YWx1ZTogXCJJbnRlcm5hbFwiLCBjaGVja2VkOiBmYWxzZSB9XSxcclxuICAgICAgICB2YWx1ZTogXCJOb3d0ZWFtXCJcclxuICAgICAgfSxcclxuICAgICAgdGlja2V0VHlwZToge1xyXG4gICAgICAgIGxhYmVsOiBcIlR5cGUgZGUgdGlja2V0XCIsXHJcbiAgICAgICAga2V5OiBcInR5Y2tldFR5cGVcIixcclxuICAgICAgICBkZWZhdWx0VmFsdWU6IFt7IHZhbHVlOiBcIkNyw6lhdGlvbiBkZSBjb21wdGVcIiwgY2hlY2tlZDogdHJ1ZSwga2V5OiBcIkNyZWF0aW9uX2RlX2NvbXB0ZVwiIH0sIHsgdmFsdWU6IFwiQ29uZmlndXJhdGlvbiBkZSBwb3N0ZVwiLCBjaGVja2VkOiBmYWxzZSwga2V5OiBcIkNvbmZpZ3VyYXRpb25fZGVfcG9zdGVcIiB9XSxcclxuICAgICAgICB2YWx1ZTogXCJDcmVhdGlvbl9kZV9jb21wdGVcIlxyXG4gICAgICB9LFxyXG4gICAgICBmb3JtczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIGxhYmVsOiBcIkFkcmVzc2UgbWFpbCDDoCBjcsOpZXJcIixcclxuICAgICAgICAgIGtleTogXCJFbWFpbFRvQ3JlYXRlXCIsXHJcbiAgICAgICAgICBleHBhbmRPbmJvYXJkaW5nOiB0cnVlLFxyXG4gICAgICAgICAgZGVmYXVsdFZhbHVlOiBudWxsLFxyXG4gICAgICAgICAgdmFsdWU6IHRydWUsXHJcbiAgICAgICAgICBzaXplOiA4MCxcclxuICAgICAgICAgIGlzTWFuZGF0b3J5OiB0cnVlLFxyXG4gICAgICAgICAgb3RoZXJWYWx1ZTogJycsXHJcbiAgICAgICAgICB0eXBlOiBcImNoZWNrYm94XCIsXHJcbiAgICAgICAgICBlZGl0YWJsZTogdHJ1ZSxcclxuICAgICAgICAgIGlzQ29uZGl0aW9uYWw6IGZhbHNlLFxyXG4gICAgICAgICAgY29uZGl0aW9uVmFsdWU6IFwiXCIsXHJcbiAgICAgICAgICBjb25kaXRpb246IHt9LFxyXG4gICAgICAgICAgZGVsZXRlYWJsZTogdHJ1ZSxcclxuICAgICAgICAgIHN1YkxldmVsOiAxLFxyXG4gICAgICAgICAgZXhwYW5kTW9yZTogZmFsc2UsXHJcbiAgICAgICAgICAvKnNlbGVjdG9yOiB7XHJcbiAgICAgICAgICAgIGxhYmVsOiBcIkNvbXBhbnlcIixcclxuICAgICAgICAgICAga2V5OiBcIkNvbXBhbnlcIixcclxuICAgICAgICAgICAgZGVmYXVsdFZhbHVlOiBbeyB2YWx1ZTogXCJOb3d0ZWFtXCIsIGNoZWNrZWQ6IHRydWUgfSwgeyB2YWx1ZTogXCJJbnRlcm5hbFwiLCBjaGVja2VkOiBmYWxzZSB9XSxcclxuICAgICAgICAgICAgdmFsdWU6IFwiTm93dGVhbVwiXHJcbiAgICAgICAgICB9LCovXHJcbiAgICAgICAgICBmb3JtczogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgbGFiZWw6IFwiQWRyZXNzZSBtYWlsXCIsXHJcbiAgICAgICAgICAgICAga2V5OiBcIkVtYWlsXCIsXHJcbiAgICAgICAgICAgICAgZXhwYW5kT25ib2FyZGluZzogdHJ1ZSxcclxuICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU6IG51bGwsXHJcbiAgICAgICAgICAgICAgdmFsdWU6IG51bGwsXHJcbiAgICAgICAgICAgICAgc2l6ZTogODAsXHJcbiAgICAgICAgICAgICAgaXNNYW5kYXRvcnk6IHRydWUsXHJcbiAgICAgICAgICAgICAgb3RoZXJWYWx1ZTogJycsXHJcbiAgICAgICAgICAgICAgdHlwZTogXCJlbWFpbFwiLFxyXG4gICAgICAgICAgICAgIGVkaXRhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICAgIGlzQ29uZGl0aW9uYWw6IGZhbHNlLFxyXG4gICAgICAgICAgICAgIGNvbmRpdGlvblZhbHVlOiBcIlwiLFxyXG4gICAgICAgICAgICAgIGNvbmRpdGlvbjoge30sXHJcbiAgICAgICAgICAgICAgZGVsZXRlYWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgICBzdWJMZXZlbDogMixcclxuICAgICAgICAgICAgICBleHBhbmRNb3JlOiBmYWxzZSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIGxhYmVsOiBcIlR5cGUgZGUgbGljZW5jZSAoc2kgZ8OpcsOpZXMgcGFyIGxlIGNsaWVudClcIixcclxuICAgICAgICAgICAgICBrZXk6IFwiU2VyaWFsS2V5XCIsXHJcbiAgICAgICAgICAgICAgZXhwYW5kT25ib2FyZGluZzogdHJ1ZSxcclxuICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU6IG51bGwsXHJcbiAgICAgICAgICAgICAgdmFsdWU6IG51bGwsXHJcbiAgICAgICAgICAgICAgc2l6ZTogMTAwMCxcclxuICAgICAgICAgICAgICBpc01hbmRhdG9yeTogdHJ1ZSxcclxuICAgICAgICAgICAgICBvdGhlclZhbHVlOiAnJyxcclxuICAgICAgICAgICAgICB0eXBlOiBcInRleHRcIixcclxuICAgICAgICAgICAgICBlZGl0YWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgICBpc0NvbmRpdGlvbmFsOiBmYWxzZSxcclxuICAgICAgICAgICAgICBjb25kaXRpb25WYWx1ZTogXCJcIixcclxuICAgICAgICAgICAgICBjb25kaXRpb246IHt9LFxyXG4gICAgICAgICAgICAgIGRlbGV0ZWFibGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgc3ViTGV2ZWw6IDIsXHJcbiAgICAgICAgICAgICAgZXhwYW5kTW9yZTogZmFsc2UsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICBdLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbGFiZWw6IFwiTGlzdGVzICBkZSBkaXN0cmlidXRpb25cIixcclxuICAgICAgICAgIGtleTogXCJEaXN0cmlidXRpb25MaXN0XCIsXHJcbiAgICAgICAgICBleHBhbmRPbmJvYXJkaW5nOiB0cnVlLFxyXG4gICAgICAgICAgZGVmYXVsdFZhbHVlOiBudWxsLFxyXG4gICAgICAgICAgdmFsdWU6IHRydWUsXHJcbiAgICAgICAgICBzaXplOiA4MCxcclxuICAgICAgICAgIGlzTWFuZGF0b3J5OiB0cnVlLFxyXG4gICAgICAgICAgb3RoZXJWYWx1ZTogJycsXHJcbiAgICAgICAgICB0eXBlOiBcImNoZWNrYm94XCIsXHJcbiAgICAgICAgICBlZGl0YWJsZTogdHJ1ZSxcclxuICAgICAgICAgIGlzQ29uZGl0aW9uYWw6IGZhbHNlLFxyXG4gICAgICAgICAgY29uZGl0aW9uVmFsdWU6IFwiXCIsXHJcbiAgICAgICAgICBjb25kaXRpb246IHt9LFxyXG4gICAgICAgICAgZGVsZXRlYWJsZTogdHJ1ZSxcclxuICAgICAgICAgIHN1YkxldmVsOiAxLFxyXG4gICAgICAgICAgZXhwYW5kTW9yZTogZmFsc2UsXHJcbiAgICAgICAgICAvKnNlbGVjdG9yOiB7XHJcbiAgICAgICAgICAgIGxhYmVsOiBcIkNvbXBhbnlcIixcclxuICAgICAgICAgICAga2V5OiBcIkNvbXBhbnlcIixcclxuICAgICAgICAgICAgZGVmYXVsdFZhbHVlOiBbeyB2YWx1ZTogXCJOb3d0ZWFtXCIsIGNoZWNrZWQ6IHRydWUgfSwgeyB2YWx1ZTogXCJJbnRlcm5hbFwiLCBjaGVja2VkOiBmYWxzZSB9XSxcclxuICAgICAgICAgICAgdmFsdWU6IFwiTm93dGVhbVwiXHJcbiAgICAgICAgICB9LCovXHJcbiAgICAgICAgICBmb3JtczogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgbGFiZWw6IFwiVXRpbGlzYXRldXIgYXZlYyBsZXMgbGlzdGVzIHNpbWlsYWlyZXNcIixcclxuICAgICAgICAgICAgICBrZXk6IFwiVXNlcldpdGhTaW1pbGFyTGlzdFwiLFxyXG4gICAgICAgICAgICAgIGV4cGFuZE9uYm9hcmRpbmc6IHRydWUsXHJcbiAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlOiBudWxsLFxyXG4gICAgICAgICAgICAgIHZhbHVlOiBudWxsLFxyXG4gICAgICAgICAgICAgIHNpemU6IDgwLFxyXG4gICAgICAgICAgICAgIGlzTWFuZGF0b3J5OiB0cnVlLFxyXG4gICAgICAgICAgICAgIG90aGVyVmFsdWU6ICcnLFxyXG4gICAgICAgICAgICAgIHR5cGU6IFwidGV4dFwiLFxyXG4gICAgICAgICAgICAgIGVkaXRhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICAgIGlzQ29uZGl0aW9uYWw6IGZhbHNlLFxyXG4gICAgICAgICAgICAgIGNvbmRpdGlvblZhbHVlOiBcIlwiLFxyXG4gICAgICAgICAgICAgIGNvbmRpdGlvbjoge30sXHJcbiAgICAgICAgICAgICAgZGVsZXRlYWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgICBzdWJMZXZlbDogMixcclxuICAgICAgICAgICAgICBleHBhbmRNb3JlOiBmYWxzZSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIGxhYmVsOiBcIkRlc2NyaXB0aW9uc1wiLFxyXG4gICAgICAgICAgICAgIGtleTogXCJEZXNjcmlwdGlvblwiLFxyXG4gICAgICAgICAgICAgIGV4cGFuZE9uYm9hcmRpbmc6IHRydWUsXHJcbiAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlOiBudWxsLFxyXG4gICAgICAgICAgICAgIHZhbHVlOiBudWxsLFxyXG4gICAgICAgICAgICAgIHNpemU6IDEwMDAsXHJcbiAgICAgICAgICAgICAgaXNNYW5kYXRvcnk6IHRydWUsXHJcbiAgICAgICAgICAgICAgb3RoZXJWYWx1ZTogJycsXHJcbiAgICAgICAgICAgICAgdHlwZTogXCJ0ZXh0YXJlYVwiLFxyXG4gICAgICAgICAgICAgIGVkaXRhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICAgIGlzQ29uZGl0aW9uYWw6IGZhbHNlLFxyXG4gICAgICAgICAgICAgIGNvbmRpdGlvblZhbHVlOiBcIlwiLFxyXG4gICAgICAgICAgICAgIGNvbmRpdGlvbjoge30sXHJcbiAgICAgICAgICAgICAgZGVsZXRlYWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgICBzdWJMZXZlbDogMixcclxuICAgICAgICAgICAgICBleHBhbmRNb3JlOiBmYWxzZSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIF0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBsYWJlbDogXCJBam91dGVyIGRlcyBib2l0ZXMgbWFpbHMgZMOpbMOpZ3XDqXNcIixcclxuICAgICAgICAgIGtleTogXCJBZGRJbmJveE1haWxEZWxlZ2F0ZVwiLFxyXG4gICAgICAgICAgZXhwYW5kT25ib2FyZGluZzogdHJ1ZSxcclxuICAgICAgICAgIGRlZmF1bHRWYWx1ZTogbnVsbCxcclxuICAgICAgICAgIHZhbHVlOiB0cnVlLFxyXG4gICAgICAgICAgc2l6ZTogODAsXHJcbiAgICAgICAgICBpc01hbmRhdG9yeTogdHJ1ZSxcclxuICAgICAgICAgIG90aGVyVmFsdWU6ICcnLFxyXG4gICAgICAgICAgdHlwZTogXCJjaGVja2JveFwiLFxyXG4gICAgICAgICAgZWRpdGFibGU6IHRydWUsXHJcbiAgICAgICAgICBpc0NvbmRpdGlvbmFsOiBmYWxzZSxcclxuICAgICAgICAgIGNvbmRpdGlvblZhbHVlOiBcIlwiLFxyXG4gICAgICAgICAgY29uZGl0aW9uOiB7fSxcclxuICAgICAgICAgIGRlbGV0ZWFibGU6IHRydWUsXHJcbiAgICAgICAgICBzdWJMZXZlbDogMSxcclxuICAgICAgICAgIGV4cGFuZE1vcmU6IGZhbHNlLFxyXG4gICAgICAgICAgLypzZWxlY3Rvcjoge1xyXG4gICAgICAgICAgICBsYWJlbDogXCJDb21wYW55XCIsXHJcbiAgICAgICAgICAgIGtleTogXCJDb21wYW55XCIsXHJcbiAgICAgICAgICAgIGRlZmF1bHRWYWx1ZTogW3sgdmFsdWU6IFwiTm93dGVhbVwiLCBjaGVja2VkOiB0cnVlIH0sIHsgdmFsdWU6IFwiSW50ZXJuYWxcIiwgY2hlY2tlZDogZmFsc2UgfV0sXHJcbiAgICAgICAgICAgIHZhbHVlOiBcIk5vd3RlYW1cIlxyXG4gICAgICAgICAgfSwqL1xyXG4gICAgICAgICAgZm9ybXM6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIGxhYmVsOiBcIkRlc2NyaXB0aW9uc1wiLFxyXG4gICAgICAgICAgICAgIGtleTogXCJEZXNjcmlwdGlvblwiLFxyXG4gICAgICAgICAgICAgIGV4cGFuZE9uYm9hcmRpbmc6IHRydWUsXHJcbiAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlOiBudWxsLFxyXG4gICAgICAgICAgICAgIHZhbHVlOiBudWxsLFxyXG4gICAgICAgICAgICAgIHNpemU6IDEwMDAsXHJcbiAgICAgICAgICAgICAgaXNNYW5kYXRvcnk6IHRydWUsXHJcbiAgICAgICAgICAgICAgb3RoZXJWYWx1ZTogJycsXHJcbiAgICAgICAgICAgICAgdHlwZTogXCJ0ZXh0YXJlYVwiLFxyXG4gICAgICAgICAgICAgIGVkaXRhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICAgIGlzQ29uZGl0aW9uYWw6IGZhbHNlLFxyXG4gICAgICAgICAgICAgIGNvbmRpdGlvblZhbHVlOiBcIlwiLFxyXG4gICAgICAgICAgICAgIGNvbmRpdGlvbjoge30sXHJcbiAgICAgICAgICAgICAgZGVsZXRlYWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgICBzdWJMZXZlbDogMixcclxuICAgICAgICAgICAgICBleHBhbmRNb3JlOiBmYWxzZSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIF0sXHJcbiAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwiU2VydmV1clwiLFxyXG4gICAgICBrZXk6ICdzZXJ2ZXVyJyxcclxuICAgICAgZXhwYW5kTW9yZTogZmFsc2UsXHJcbiAgICAgIHN1ZmZpeEVuZHBvaW50OiBcImNhdGVnb3J5L3NlcnZldXJcIixcclxuICAgICAgc2VsZWN0ZWQ6IHRydWUsXHJcbiAgICAgIGVkaXRhYmxlOiB0cnVlLFxyXG4gICAgICBpc0NvbmRpdGlvbmFsOiBmYWxzZSxcclxuICAgICAgY29uZGl0aW9uVmFsdWU6IFwiXCIsXHJcbiAgICAgIGNvbmRpdGlvbjoge30sXHJcbiAgICAgIGRlbGV0ZWFibGU6IHRydWUsXHJcbiAgICAgIGV4cGFuZE9uYm9hcmRpbmc6IHRydWUsXHJcbiAgICAgIGRlZmF1bHRWYWx1ZTogZmFsc2UsXHJcbiAgICAgIHNlbGVjdG9yOiB7XHJcbiAgICAgICAgbGFiZWw6IFwiQ29tcGFueVwiLFxyXG4gICAgICAgIGtleTogXCJDb21wYW55XCIsXHJcbiAgICAgICAgZGVmYXVsdFZhbHVlOiBbeyB2YWx1ZTogXCJOb3d0ZWFtXCIsIGNoZWNrZWQ6IHRydWUgfSwgeyB2YWx1ZTogXCJJbnRlcm5hbFwiLCBjaGVja2VkOiBmYWxzZSB9XSxcclxuICAgICAgICB2YWx1ZTogXCJOb3d0ZWFtXCJcclxuICAgICAgfSxcclxuICAgICAgdGlja2V0VHlwZToge1xyXG4gICAgICAgIGxhYmVsOiBcIlR5cGUgZGUgdGlja2V0XCIsXHJcbiAgICAgICAga2V5OiBcInR5Y2tldFR5cGVcIixcclxuICAgICAgICBkZWZhdWx0VmFsdWU6IFt7IHZhbHVlOiBcIkNyw6lhdGlvbiBkZSBjb21wdGVcIiwgY2hlY2tlZDogdHJ1ZSwga2V5OiBcIkNyZWF0aW9uX2RlX2NvbXB0ZVwiIH0sIHsgdmFsdWU6IFwiQ29uZmlndXJhdGlvbiBkZSBwb3N0ZVwiLCBjaGVja2VkOiBmYWxzZSwga2V5OiBcIkNvbmZpZ3VyYXRpb25fZGVfcG9zdGVcIiB9XSxcclxuICAgICAgICB2YWx1ZTogXCJDcmVhdGlvbl9kZV9jb21wdGVcIlxyXG4gICAgICB9LFxyXG4gICAgICBmb3JtczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIGxhYmVsOiBcIkFjY8OocyBhdXggbGVjdGV1cnMgcsOpc2VhdXhcIixcclxuICAgICAgICAgIGtleTogXCJSZWFkTmV0d29ya0FjY2Vzc1wiLFxyXG4gICAgICAgICAgZXhwYW5kT25ib2FyZGluZzogdHJ1ZSxcclxuICAgICAgICAgIGRlZmF1bHRWYWx1ZTogbnVsbCxcclxuICAgICAgICAgIHZhbHVlOiB0cnVlLFxyXG4gICAgICAgICAgc2l6ZTogODAsXHJcbiAgICAgICAgICBpc01hbmRhdG9yeTogZmFsc2UsXHJcbiAgICAgICAgICBvdGhlclZhbHVlOiAnJyxcclxuICAgICAgICAgIHR5cGU6IFwiY2hlY2tib3hcIixcclxuICAgICAgICAgIGVkaXRhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgaXNDb25kaXRpb25hbDogZmFsc2UsXHJcbiAgICAgICAgICBjb25kaXRpb25WYWx1ZTogXCJcIixcclxuICAgICAgICAgIGNvbmRpdGlvbjoge30sXHJcbiAgICAgICAgICBkZWxldGVhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgc3ViTGV2ZWw6IDEsXHJcbiAgICAgICAgICBleHBhbmRNb3JlOiBmYWxzZSxcclxuICAgICAgICAgIC8qc2VsZWN0b3I6IHtcclxuICAgICAgICAgICAgbGFiZWw6IFwiQ29tcGFueVwiLFxyXG4gICAgICAgICAgICBrZXk6IFwiQ29tcGFueVwiLFxyXG4gICAgICAgICAgICBkZWZhdWx0VmFsdWU6IFt7IHZhbHVlOiBcIk5vd3RlYW1cIiwgY2hlY2tlZDogdHJ1ZSB9LCB7IHZhbHVlOiBcIkludGVybmFsXCIsIGNoZWNrZWQ6IGZhbHNlIH1dLFxyXG4gICAgICAgICAgICB2YWx1ZTogXCJOb3d0ZWFtXCJcclxuICAgICAgICAgIH0sKi9cclxuICAgICAgICAgIGZvcm1zOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBsYWJlbDogXCJOb20gZHUgc2VydmV1clwiLFxyXG4gICAgICAgICAgICAgIGtleTogXCJTZXJ2ZXJOYW1lXCIsXHJcbiAgICAgICAgICAgICAgZXhwYW5kT25ib2FyZGluZzogdHJ1ZSxcclxuICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU6IG51bGwsXHJcbiAgICAgICAgICAgICAgdmFsdWU6IG51bGwsXHJcbiAgICAgICAgICAgICAgc2l6ZTogODAsXHJcbiAgICAgICAgICAgICAgaXNNYW5kYXRvcnk6IHRydWUsXHJcbiAgICAgICAgICAgICAgb3RoZXJWYWx1ZTogJycsXHJcbiAgICAgICAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXHJcbiAgICAgICAgICAgICAgZWRpdGFibGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgaXNDb25kaXRpb25hbDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgY29uZGl0aW9uVmFsdWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgY29uZGl0aW9uOiB7fSxcclxuICAgICAgICAgICAgICBkZWxldGVhYmxlOiBmYWxzZSxcclxuICAgICAgICAgICAgICBzdWJMZXZlbDogMixcclxuICAgICAgICAgICAgICBleHBhbmRNb3JlOiBmYWxzZSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIGxhYmVsOiBcIkNoZW1pbiBkdSBkb3NzaWVyXCIsXHJcbiAgICAgICAgICAgICAga2V5OiBcIkZvbGRlclBhdGhcIixcclxuICAgICAgICAgICAgICBleHBhbmRPbmJvYXJkaW5nOiB0cnVlLFxyXG4gICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZTogbnVsbCxcclxuICAgICAgICAgICAgICB2YWx1ZTogbnVsbCxcclxuICAgICAgICAgICAgICBzaXplOiA4MCxcclxuICAgICAgICAgICAgICBpc01hbmRhdG9yeTogdHJ1ZSxcclxuICAgICAgICAgICAgICBvdGhlclZhbHVlOiAnJyxcclxuICAgICAgICAgICAgICB0eXBlOiBcInRleHRcIixcclxuICAgICAgICAgICAgICBlZGl0YWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgICBpc0NvbmRpdGlvbmFsOiBmYWxzZSxcclxuICAgICAgICAgICAgICBjb25kaXRpb25WYWx1ZTogXCJcIixcclxuICAgICAgICAgICAgICBjb25kaXRpb246IHt9LFxyXG4gICAgICAgICAgICAgIGRlbGV0ZWFibGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgc3ViTGV2ZWw6IDIsXHJcbiAgICAgICAgICAgICAgZXhwYW5kTW9yZTogZmFsc2UsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBsYWJlbDogXCJMZXR0cmUgw6AgYXR0cmlidWVyXCIsXHJcbiAgICAgICAgICAgICAga2V5OiBcIkF0dHJpYnV0TGV0dGVyXCIsXHJcbiAgICAgICAgICAgICAgZXhwYW5kT25ib2FyZGluZzogdHJ1ZSxcclxuICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU6IG51bGwsXHJcbiAgICAgICAgICAgICAgdmFsdWU6IG51bGwsXHJcbiAgICAgICAgICAgICAgc2l6ZTogODAsXHJcbiAgICAgICAgICAgICAgaXNNYW5kYXRvcnk6IHRydWUsXHJcbiAgICAgICAgICAgICAgb3RoZXJWYWx1ZTogJycsXHJcbiAgICAgICAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXHJcbiAgICAgICAgICAgICAgZWRpdGFibGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgaXNDb25kaXRpb25hbDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgY29uZGl0aW9uVmFsdWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgY29uZGl0aW9uOiB7fSxcclxuICAgICAgICAgICAgICBkZWxldGVhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICAgIHN1YkxldmVsOiAyLFxyXG4gICAgICAgICAgICAgIGV4cGFuZE1vcmU6IGZhbHNlLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgXSxcclxuICAgICAgICB9LFxyXG4gICAgICBdLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJWUE5cIixcclxuICAgICAga2V5OiAndnBuJyxcclxuICAgICAgZXhwYW5kTW9yZTogZmFsc2UsXHJcbiAgICAgIHN1ZmZpeEVuZHBvaW50OiBcImNhdGVnb3J5L3ZwblwiLFxyXG4gICAgICBzZWxlY3RlZDogdHJ1ZSxcclxuICAgICAgZXhwYW5kT25ib2FyZGluZzogdHJ1ZSxcclxuICAgICAgZGVmYXVsdFZhbHVlOiBmYWxzZSxcclxuICAgICAgZWRpdGFibGU6IHRydWUsXHJcbiAgICAgIGlzQ29uZGl0aW9uYWw6IGZhbHNlLFxyXG4gICAgICBjb25kaXRpb25WYWx1ZTogXCJcIixcclxuICAgICAgY29uZGl0aW9uOiB7fSxcclxuICAgICAgZGVsZXRlYWJsZTogdHJ1ZSxcclxuICAgICAgc2VsZWN0b3I6IHtcclxuICAgICAgICBsYWJlbDogXCJDb21wYW55XCIsXHJcbiAgICAgICAga2V5OiBcIkNvbXBhbnlcIixcclxuICAgICAgICBkZWZhdWx0VmFsdWU6IFt7IHZhbHVlOiBcIk5vd3RlYW1cIiwgY2hlY2tlZDogdHJ1ZSB9LCB7IHZhbHVlOiBcIkludGVybmFsXCIsIGNoZWNrZWQ6IGZhbHNlIH1dLFxyXG4gICAgICAgIHZhbHVlOiBcIk5vd3RlYW1cIlxyXG4gICAgICB9LFxyXG4gICAgICB0aWNrZXRUeXBlOiB7XHJcbiAgICAgICAgbGFiZWw6IFwiVHlwZSBkZSB0aWNrZXRcIixcclxuICAgICAgICBrZXk6IFwidHlja2V0VHlwZVwiLFxyXG4gICAgICAgIGRlZmF1bHRWYWx1ZTogW3sgdmFsdWU6IFwiQ3LDqWF0aW9uIGRlIGNvbXB0ZVwiLCBjaGVja2VkOiB0cnVlLCBrZXk6IFwiQ3JlYXRpb25fZGVfY29tcHRlXCIgfSwgeyB2YWx1ZTogXCJDb25maWd1cmF0aW9uIGRlIHBvc3RlXCIsIGNoZWNrZWQ6IGZhbHNlLCBrZXk6IFwiQ29uZmlndXJhdGlvbl9kZV9wb3N0ZVwiIH1dLFxyXG4gICAgICAgIHZhbHVlOiBcIkNyZWF0aW9uX2RlX2NvbXB0ZVwiXHJcbiAgICAgIH0sXHJcbiAgICAgIGZvcm1zOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbGFiZWw6IFwiQWNjw6hzIGF1IFZQTlwiLFxyXG4gICAgICAgICAga2V5OiBcIlZwbkFjY2Vzc1wiLFxyXG4gICAgICAgICAgZXhwYW5kT25ib2FyZGluZzogdHJ1ZSxcclxuICAgICAgICAgIGRlZmF1bHRWYWx1ZTogbnVsbCxcclxuICAgICAgICAgIHZhbHVlOiB0cnVlLFxyXG4gICAgICAgICAgc2l6ZTogODAsXHJcbiAgICAgICAgICBpc01hbmRhdG9yeTogZmFsc2UsXHJcbiAgICAgICAgICBvdGhlclZhbHVlOiAnJyxcclxuICAgICAgICAgIHR5cGU6IFwiY2hlY2tib3hcIixcclxuICAgICAgICAgIGVkaXRhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgaXNDb25kaXRpb25hbDogZmFsc2UsXHJcbiAgICAgICAgICBjb25kaXRpb25WYWx1ZTogXCJcIixcclxuICAgICAgICAgIGNvbmRpdGlvbjoge30sXHJcbiAgICAgICAgICBkZWxldGVhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgc3ViTGV2ZWw6IDEsXHJcbiAgICAgICAgICBleHBhbmRNb3JlOiBmYWxzZSxcclxuICAgICAgICAgIC8vZm9ybXM6IFtdXHJcbiAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwiSW1wcmltYW50ZXNcIixcclxuICAgICAga2V5OiAnaW1wcmltYW50ZXMnLFxyXG4gICAgICBleHBhbmRNb3JlOiBmYWxzZSxcclxuICAgICAgc3VmZml4RW5kcG9pbnQ6IFwiY2F0ZWdvcnkvaW1wcmltZW50ZVwiLFxyXG4gICAgICBzZWxlY3RlZDogdHJ1ZSxcclxuICAgICAgZWRpdGFibGU6IHRydWUsXHJcbiAgICAgIGlzQ29uZGl0aW9uYWw6IGZhbHNlLFxyXG4gICAgICBjb25kaXRpb25WYWx1ZTogXCJcIixcclxuICAgICAgY29uZGl0aW9uOiB7fSxcclxuICAgICAgZGVsZXRlYWJsZTogdHJ1ZSxcclxuICAgICAgZXhwYW5kT25ib2FyZGluZzogdHJ1ZSxcclxuICAgICAgZGVmYXVsdFZhbHVlOiBmYWxzZSxcclxuICAgICAgdGlja2V0VHlwZToge1xyXG4gICAgICAgIGxhYmVsOiBcIlR5cGUgZGUgdGlja2V0XCIsXHJcbiAgICAgICAga2V5OiBcInR5Y2tldFR5cGVcIixcclxuICAgICAgICBkZWZhdWx0VmFsdWU6IFt7IHZhbHVlOiBcIkNyw6lhdGlvbiBkZSBjb21wdGVcIiwgY2hlY2tlZDogdHJ1ZSwga2V5OiBcIkNyZWF0aW9uX2RlX2NvbXB0ZVwiIH0sIHsgdmFsdWU6IFwiQ29uZmlndXJhdGlvbiBkZSBwb3N0ZVwiLCBjaGVja2VkOiBmYWxzZSwga2V5OiBcIkNvbmZpZ3VyYXRpb25fZGVfcG9zdGVcIiB9XSxcclxuICAgICAgICB2YWx1ZTogXCJDcmVhdGlvbl9kZV9jb21wdGVcIlxyXG4gICAgICB9LFxyXG4gICAgICBzZWxlY3Rvcjoge1xyXG4gICAgICAgIGxhYmVsOiBcIkNvbXBhbnlcIixcclxuICAgICAgICBrZXk6IFwiQ29tcGFueVwiLFxyXG4gICAgICAgIGRlZmF1bHRWYWx1ZTogW3sgdmFsdWU6IFwiTm93dGVhbVwiLCBjaGVja2VkOiB0cnVlIH0sIHsgdmFsdWU6IFwiSW50ZXJuYWxcIiwgY2hlY2tlZDogZmFsc2UgfV0sXHJcbiAgICAgICAgdmFsdWU6IFwiTm93dGVhbVwiXHJcbiAgICAgIH0sXHJcbiAgICAgIGZvcm1zOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbGFiZWw6IFwiQWNjw6hzIGF1eCBpbXByaW1hbnRlc1wiLFxyXG4gICAgICAgICAga2V5OiBcIlByaW50ZXJBY2Nlc3NcIixcclxuICAgICAgICAgIGV4cGFuZE9uYm9hcmRpbmc6IHRydWUsXHJcbiAgICAgICAgICBkZWZhdWx0VmFsdWU6IG51bGwsXHJcbiAgICAgICAgICB2YWx1ZTogdHJ1ZSxcclxuICAgICAgICAgIHNpemU6IDgwLFxyXG4gICAgICAgICAgaXNNYW5kYXRvcnk6IGZhbHNlLFxyXG4gICAgICAgICAgb3RoZXJWYWx1ZTogJycsXHJcbiAgICAgICAgICB0eXBlOiBcImNoZWNrYm94XCIsXHJcbiAgICAgICAgICBlZGl0YWJsZTogdHJ1ZSxcclxuICAgICAgICAgIGlzQ29uZGl0aW9uYWw6IGZhbHNlLFxyXG4gICAgICAgICAgY29uZGl0aW9uVmFsdWU6IFwiXCIsXHJcbiAgICAgICAgICBjb25kaXRpb246IHt9LFxyXG4gICAgICAgICAgZGVsZXRlYWJsZTogdHJ1ZSxcclxuICAgICAgICAgIHN1YkxldmVsOiAxLFxyXG4gICAgICAgICAgZXhwYW5kTW9yZTogZmFsc2UsXHJcbiAgICAgICAgICAvKnNlbGVjdG9yOiB7XHJcbiAgICAgICAgICAgIGxhYmVsOiBcIkNvbXBhbnlcIixcclxuICAgICAgICAgICAga2V5OiBcIkNvbXBhbnlcIixcclxuICAgICAgICAgICAgZGVmYXVsdFZhbHVlOiBbeyB2YWx1ZTogXCJOb3d0ZWFtXCIsIGNoZWNrZWQ6IHRydWUgfSwgeyB2YWx1ZTogXCJJbnRlcm5hbFwiLCBjaGVja2VkOiBmYWxzZSB9XSxcclxuICAgICAgICAgICAgdmFsdWU6IFwiTm93dGVhbVwiXHJcbiAgICAgICAgICB9LCovXHJcbiAgICAgICAgICBmb3JtczogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgbGFiZWw6IFwiTm9tIC8gTW9kw6hsZSBkZSBsJ2ltcHJpbWFudGUgLyBsb2NhbGlzYXRpb25cIixcclxuICAgICAgICAgICAgICBrZXk6IFwiUHJpbnRlck5hbWVcIixcclxuICAgICAgICAgICAgICBleHBhbmRPbmJvYXJkaW5nOiB0cnVlLFxyXG4gICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZTogbnVsbCxcclxuICAgICAgICAgICAgICB2YWx1ZTogbnVsbCxcclxuICAgICAgICAgICAgICBzaXplOiAxMDAwLFxyXG4gICAgICAgICAgICAgIGlzTWFuZGF0b3J5OiB0cnVlLFxyXG4gICAgICAgICAgICAgIG90aGVyVmFsdWU6ICcnLFxyXG4gICAgICAgICAgICAgIHR5cGU6IFwidGV4dGFyZWFcIixcclxuICAgICAgICAgICAgICBlZGl0YWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgICBpc0NvbmRpdGlvbmFsOiBmYWxzZSxcclxuICAgICAgICAgICAgICBjb25kaXRpb25WYWx1ZTogXCJcIixcclxuICAgICAgICAgICAgICBjb25kaXRpb246IHt9LFxyXG4gICAgICAgICAgICAgIGRlbGV0ZWFibGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgc3ViTGV2ZWw6IDIsXHJcbiAgICAgICAgICAgICAgZXhwYW5kTW9yZTogZmFsc2UsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICBdLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIF0sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIkFwcGxpY2F0aW9uc1wiLFxyXG4gICAgICBrZXk6ICdhcHBsaWNhdGlvbnMnLFxyXG4gICAgICBleHBhbmRNb3JlOiBmYWxzZSxcclxuICAgICAgc3VmZml4RW5kcG9pbnQ6IFwiY2F0ZWdvcnkvYXBwbGljYXRpb25cIixcclxuICAgICAgc2VsZWN0ZWQ6IHRydWUsXHJcbiAgICAgIGVkaXRhYmxlOiB0cnVlLFxyXG4gICAgICBpc0NvbmRpdGlvbmFsOiBmYWxzZSxcclxuICAgICAgY29uZGl0aW9uVmFsdWU6IFwiXCIsXHJcbiAgICAgIGNvbmRpdGlvbjoge30sXHJcbiAgICAgIGV4cGFuZE9uYm9hcmRpbmc6IHRydWUsXHJcbiAgICAgIGRlZmF1bHRWYWx1ZTogZmFsc2UsXHJcbiAgICAgIGRlbGV0ZWFibGU6IHRydWUsXHJcbiAgICAgIHNlbGVjdG9yOiB7XHJcbiAgICAgICAgbGFiZWw6IFwiQ29tcGFueVwiLFxyXG4gICAgICAgIGtleTogXCJDb21wYW55XCIsXHJcbiAgICAgICAgZGVmYXVsdFZhbHVlOiBbeyB2YWx1ZTogXCJOb3d0ZWFtXCIsIGNoZWNrZWQ6IHRydWUgfSwgeyB2YWx1ZTogXCJJbnRlcm5hbFwiLCBjaGVja2VkOiBmYWxzZSB9XSxcclxuICAgICAgICB2YWx1ZTogXCJOb3d0ZWFtXCJcclxuICAgICAgfSxcclxuICAgICAgdGlja2V0VHlwZToge1xyXG4gICAgICAgIGxhYmVsOiBcIlR5cGUgZGUgdGlja2V0XCIsXHJcbiAgICAgICAga2V5OiBcInR5Y2tldFR5cGVcIixcclxuICAgICAgICBkZWZhdWx0VmFsdWU6IFt7IHZhbHVlOiBcIkNyw6lhdGlvbiBkZSBjb21wdGVcIiwgY2hlY2tlZDogdHJ1ZSwga2V5OiBcIkNyZWF0aW9uX2RlX2NvbXB0ZVwiIH0sIHsgdmFsdWU6IFwiQ29uZmlndXJhdGlvbiBkZSBwb3N0ZVwiLCBjaGVja2VkOiBmYWxzZSwga2V5OiBcIkNvbmZpZ3VyYXRpb25fZGVfcG9zdGVcIiB9XSxcclxuICAgICAgICB2YWx1ZTogXCJDcmVhdGlvbl9kZV9jb21wdGVcIlxyXG4gICAgICB9LFxyXG4gICAgICBmb3JtczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIGxhYmVsOiBcIkFjY8OocyBhdXggYXBwbGljYXRpb25zID9cIixcclxuICAgICAgICAgIGtleTogXCJBcHBsaWNhdGlvbkFjY2Vzc1wiLFxyXG4gICAgICAgICAgZXhwYW5kT25ib2FyZGluZzogdHJ1ZSxcclxuICAgICAgICAgIGRlZmF1bHRWYWx1ZTogbnVsbCxcclxuICAgICAgICAgIHZhbHVlOiB0cnVlLFxyXG4gICAgICAgICAgc2l6ZTogODAsXHJcbiAgICAgICAgICBpc01hbmRhdG9yeTogZmFsc2UsXHJcbiAgICAgICAgICBvdGhlclZhbHVlOiAnJyxcclxuICAgICAgICAgIHR5cGU6IFwiY2hlY2tib3hcIixcclxuICAgICAgICAgIGVkaXRhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgaXNDb25kaXRpb25hbDogZmFsc2UsXHJcbiAgICAgICAgICBjb25kaXRpb25WYWx1ZTogXCJcIixcclxuICAgICAgICAgIGNvbmRpdGlvbjoge30sXHJcbiAgICAgICAgICBkZWxldGVhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgc3ViTGV2ZWw6IDEsXHJcbiAgICAgICAgICBleHBhbmRNb3JlOiBmYWxzZSxcclxuICAgICAgICAgIC8qc2VsZWN0b3I6IHtcclxuICAgICAgICAgICAgbGFiZWw6IFwiQ29tcGFueVwiLFxyXG4gICAgICAgICAgICBrZXk6IFwiQ29tcGFueVwiLFxyXG4gICAgICAgICAgICBkZWZhdWx0VmFsdWU6IFt7IHZhbHVlOiBcIk5vd3RlYW1cIiwgY2hlY2tlZDogdHJ1ZSB9LCB7IHZhbHVlOiBcIkludGVybmFsXCIsIGNoZWNrZWQ6IGZhbHNlIH1dLFxyXG4gICAgICAgICAgICB2YWx1ZTogXCJOb3d0ZWFtXCJcclxuICAgICAgICAgIH0sKi9cclxuICAgICAgICAgIGZvcm1zOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBsYWJlbDogXCJEZXNjcmlwdGlvbnNcIixcclxuICAgICAgICAgICAgICBrZXk6IFwiRGVzY3JpcHRpb25cIixcclxuICAgICAgICAgICAgICBleHBhbmRPbmJvYXJkaW5nOiB0cnVlLFxyXG4gICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZTogbnVsbCxcclxuICAgICAgICAgICAgICB2YWx1ZTogbnVsbCxcclxuICAgICAgICAgICAgICBzaXplOiAxMDAwLFxyXG4gICAgICAgICAgICAgIGlzTWFuZGF0b3J5OiB0cnVlLFxyXG4gICAgICAgICAgICAgIG90aGVyVmFsdWU6ICcnLFxyXG4gICAgICAgICAgICAgIHR5cGU6IFwidGV4dGFyZWFcIixcclxuICAgICAgICAgICAgICBlZGl0YWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgICBpc0NvbmRpdGlvbmFsOiBmYWxzZSxcclxuICAgICAgICAgICAgICBjb25kaXRpb25WYWx1ZTogXCJcIixcclxuICAgICAgICAgICAgICBjb25kaXRpb246IHt9LFxyXG4gICAgICAgICAgICAgIGRlbGV0ZWFibGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgc3ViTGV2ZWw6IDIsXHJcbiAgICAgICAgICAgICAgZXhwYW5kTW9yZTogZmFsc2UsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICBdLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIF0sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIlBvc3RlXCIsXHJcbiAgICAgIGtleTogJ3Bvc3RlJyxcclxuICAgICAgZXhwYW5kTW9yZTogZmFsc2UsXHJcbiAgICAgIHN1ZmZpeEVuZHBvaW50OiBcImNhdGVnb3J5L3Bvc3RlXCIsXHJcbiAgICAgIHNlbGVjdGVkOiB0cnVlLFxyXG4gICAgICBleHBhbmRPbmJvYXJkaW5nOiB0cnVlLFxyXG4gICAgICBkZWZhdWx0VmFsdWU6IGZhbHNlLFxyXG4gICAgICBlZGl0YWJsZTogdHJ1ZSxcclxuICAgICAgaXNDb25kaXRpb25hbDogZmFsc2UsXHJcbiAgICAgIGNvbmRpdGlvblZhbHVlOiBcIlwiLFxyXG4gICAgICBjb25kaXRpb246IHt9LFxyXG4gICAgICBkZWxldGVhYmxlOiB0cnVlLFxyXG4gICAgICBzZWxlY3Rvcjoge1xyXG4gICAgICAgIGxhYmVsOiBcIkNvbXBhbnlcIixcclxuICAgICAgICBrZXk6IFwiQ29tcGFueVwiLFxyXG4gICAgICAgIGRlZmF1bHRWYWx1ZTogW3sgdmFsdWU6IFwiTm93dGVhbVwiLCBjaGVja2VkOiB0cnVlIH0sIHsgdmFsdWU6IFwiSW50ZXJuYWxcIiwgY2hlY2tlZDogZmFsc2UgfV0sXHJcbiAgICAgICAgdmFsdWU6IFwiTm93dGVhbVwiXHJcbiAgICAgIH0sXHJcbiAgICAgIHRpY2tldFR5cGU6IHtcclxuICAgICAgICBsYWJlbDogXCJUeXBlIGRlIHRpY2tldFwiLFxyXG4gICAgICAgIGtleTogXCJ0eWNrZXRUeXBlXCIsXHJcbiAgICAgICAgZGVmYXVsdFZhbHVlOiBbeyB2YWx1ZTogXCJDcsOpYXRpb24gZGUgY29tcHRlXCIsIGNoZWNrZWQ6IHRydWUsIGtleTogXCJDcmVhdGlvbl9kZV9jb21wdGVcIiB9LCB7IHZhbHVlOiBcIkNvbmZpZ3VyYXRpb24gZGUgcG9zdGVcIiwgY2hlY2tlZDogZmFsc2UsIGtleTogXCJDb25maWd1cmF0aW9uX2RlX3Bvc3RlXCIgfV0sXHJcbiAgICAgICAgdmFsdWU6IFwiQ3JlYXRpb25fZGVfY29tcHRlXCJcclxuICAgICAgfSxcclxuICAgICAgZm9ybXM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBsYWJlbDogXCJQYXJhbcOpdHJhZ2UgZGUgcG9zdGVcIixcclxuICAgICAgICAgIGtleTogXCJQb3N0UGFyYW1ldGVyXCIsXHJcbiAgICAgICAgICBleHBhbmRPbmJvYXJkaW5nOiB0cnVlLFxyXG4gICAgICAgICAgZGVmYXVsdFZhbHVlOiBudWxsLFxyXG4gICAgICAgICAgdmFsdWU6IHRydWUsXHJcbiAgICAgICAgICBzaXplOiA4MCxcclxuICAgICAgICAgIGlzTWFuZGF0b3J5OiBmYWxzZSxcclxuICAgICAgICAgIG90aGVyVmFsdWU6ICcnLFxyXG4gICAgICAgICAgdHlwZTogXCJjaGVja2JveFwiLFxyXG4gICAgICAgICAgZWRpdGFibGU6IHRydWUsXHJcbiAgICAgICAgICBpc0NvbmRpdGlvbmFsOiBmYWxzZSxcclxuICAgICAgICAgIGNvbmRpdGlvblZhbHVlOiBcIlwiLFxyXG4gICAgICAgICAgY29uZGl0aW9uOiB7fSxcclxuICAgICAgICAgIGRlbGV0ZWFibGU6IHRydWUsXHJcbiAgICAgICAgICBzdWJMZXZlbDogMSxcclxuICAgICAgICAgIGV4cGFuZE1vcmU6IGZhbHNlLFxyXG4gICAgICAgICAgLypzZWxlY3Rvcjoge1xyXG4gICAgICAgICAgICBsYWJlbDogXCJDb21wYW55XCIsXHJcbiAgICAgICAgICAgIGtleTogXCJDb21wYW55XCIsXHJcbiAgICAgICAgICAgIGRlZmF1bHRWYWx1ZTogW3sgdmFsdWU6IFwiTm93dGVhbVwiLCBjaGVja2VkOiB0cnVlIH0sIHsgdmFsdWU6IFwiSW50ZXJuYWxcIiwgY2hlY2tlZDogZmFsc2UgfV0sXHJcbiAgICAgICAgICAgIHZhbHVlOiBcIk5vd3RlYW1cIlxyXG4gICAgICAgICAgfSwqL1xyXG4gICAgICAgICAgZm9ybXM6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIGxhYmVsOiBcIlLDqWFsbG9jYXRpb24gZCfDqXF1aXBlbWVudFwiLFxyXG4gICAgICAgICAgICAgIGtleTogXCJSZWFsb2NhdGVkRXF1aXBtZW50XCIsXHJcbiAgICAgICAgICAgICAgZXhwYW5kT25ib2FyZGluZzogdHJ1ZSxcclxuICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU6IG51bGwsXHJcbiAgICAgICAgICAgICAgdmFsdWU6IG51bGwsXHJcbiAgICAgICAgICAgICAgc2l6ZTogMTAwMCxcclxuICAgICAgICAgICAgICBpc01hbmRhdG9yeTogdHJ1ZSxcclxuICAgICAgICAgICAgICBvdGhlclZhbHVlOiAnJyxcclxuICAgICAgICAgICAgICB0eXBlOiBcInRleHRhcmVhXCIsXHJcbiAgICAgICAgICAgICAgZWRpdGFibGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgaXNDb25kaXRpb25hbDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgY29uZGl0aW9uVmFsdWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgY29uZGl0aW9uOiB7fSxcclxuICAgICAgICAgICAgICBkZWxldGVhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICAgIHN1YkxldmVsOiAyLFxyXG4gICAgICAgICAgICAgIGV4cGFuZE1vcmU6IGZhbHNlLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgbGFiZWw6IFwiTm91dmVhdSBwb3N0ZVwiLFxyXG4gICAgICAgICAgICAgIGtleTogXCJOZXdQb3N0XCIsXHJcbiAgICAgICAgICAgICAgZXhwYW5kT25ib2FyZGluZzogdHJ1ZSxcclxuICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU6IG51bGwsXHJcbiAgICAgICAgICAgICAgdmFsdWU6IHRydWUsXHJcbiAgICAgICAgICAgICAgc2l6ZTogODAsXHJcbiAgICAgICAgICAgICAgaXNNYW5kYXRvcnk6IHRydWUsXHJcbiAgICAgICAgICAgICAgb3RoZXJWYWx1ZTogJycsXHJcbiAgICAgICAgICAgICAgdHlwZTogXCJjaGVja2JveFwiLFxyXG4gICAgICAgICAgICAgIGVkaXRhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICAgIGlzQ29uZGl0aW9uYWw6IGZhbHNlLFxyXG4gICAgICAgICAgICAgIGNvbmRpdGlvblZhbHVlOiBcIlwiLFxyXG4gICAgICAgICAgICAgIGNvbmRpdGlvbjoge30sXHJcbiAgICAgICAgICAgICAgZGVsZXRlYWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgICBzdWJMZXZlbDogMixcclxuICAgICAgICAgICAgICBleHBhbmRNb3JlOiBmYWxzZSxcclxuICAgICAgICAgICAgICBmb3JtczogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICBsYWJlbDogXCJBY2hldMOpIGNoZXogTm93dGVhbVwiLFxyXG4gICAgICAgICAgICAgICAgICBrZXk6IFwiUHVyY2hhc2VkQXROb3d0ZWFtXCIsXHJcbiAgICAgICAgICAgICAgICAgIGV4cGFuZE9uYm9hcmRpbmc6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZTogbnVsbCxcclxuICAgICAgICAgICAgICAgICAgdmFsdWU6IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgIHNpemU6IDEwMDAsXHJcbiAgICAgICAgICAgICAgICAgIGlzTWFuZGF0b3J5OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICBvdGhlclZhbHVlOiAnJyxcclxuICAgICAgICAgICAgICAgICAgdHlwZTogXCJ0ZXh0YXJlYVwiLFxyXG4gICAgICAgICAgICAgICAgICBlZGl0YWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgaXNDb25kaXRpb25hbDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgIGNvbmRpdGlvblZhbHVlOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICBjb25kaXRpb246IHt9LFxyXG4gICAgICAgICAgICAgICAgICBkZWxldGVhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICBzdWJMZXZlbDogMyxcclxuICAgICAgICAgICAgICAgICAgZXhwYW5kTW9yZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICBsYWJlbDogXCJBdXRyZVwiLFxyXG4gICAgICAgICAgICAgICAgICBrZXk6IFwiT3RoZXJcIixcclxuICAgICAgICAgICAgICAgICAgZXhwYW5kT25ib2FyZGluZzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZTogbnVsbCxcclxuICAgICAgICAgICAgICAgICAgc2l6ZTogMTAwMCxcclxuICAgICAgICAgICAgICAgICAgaXNNYW5kYXRvcnk6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgIG90aGVyVmFsdWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICB0eXBlOiBcInRleHRcIixcclxuICAgICAgICAgICAgICAgICAgZWRpdGFibGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgIGlzQ29uZGl0aW9uYWw6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICBjb25kaXRpb25WYWx1ZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgY29uZGl0aW9uOiB7fSxcclxuICAgICAgICAgICAgICAgICAgZGVsZXRlYWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgc3ViTGV2ZWw6IDMsXHJcbiAgICAgICAgICAgICAgICAgIGV4cGFuZE1vcmU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgXSxcclxuICAgICAgICB9LFxyXG4gICAgICBdLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJBdXRyZXNcIixcclxuICAgICAga2V5OiAnYXV0cmVzJyxcclxuICAgICAgZXhwYW5kTW9yZTogZmFsc2UsXHJcbiAgICAgIHN1ZmZpeEVuZHBvaW50OiBcImNhdGVnb3J5L2F1dHJlc1wiLFxyXG4gICAgICBzZWxlY3RlZDogdHJ1ZSxcclxuICAgICAgZWRpdGFibGU6IHRydWUsXHJcbiAgICAgIGlzQ29uZGl0aW9uYWw6IGZhbHNlLFxyXG4gICAgICBjb25kaXRpb25WYWx1ZTogXCJcIixcclxuICAgICAgY29uZGl0aW9uOiB7fSxcclxuICAgICAgZXhwYW5kT25ib2FyZGluZzogdHJ1ZSxcclxuICAgICAgZGVmYXVsdFZhbHVlOiBmYWxzZSxcclxuICAgICAgZGVsZXRlYWJsZTogdHJ1ZSxcclxuICAgICAgc2VsZWN0b3I6IHtcclxuICAgICAgICBsYWJlbDogXCJDb21wYW55XCIsXHJcbiAgICAgICAga2V5OiBcIkNvbXBhbnlcIixcclxuICAgICAgICBkZWZhdWx0VmFsdWU6IFt7IHZhbHVlOiBcIk5vd3RlYW1cIiwgY2hlY2tlZDogdHJ1ZSB9LCB7IHZhbHVlOiBcIkludGVybmFsXCIsIGNoZWNrZWQ6IGZhbHNlIH1dLFxyXG4gICAgICAgIHZhbHVlOiBcIk5vd3RlYW1cIlxyXG4gICAgICB9LFxyXG4gICAgICB0aWNrZXRUeXBlOiB7XHJcbiAgICAgICAgbGFiZWw6IFwiVHlwZSBkZSB0aWNrZXRcIixcclxuICAgICAgICBrZXk6IFwidHlja2V0VHlwZVwiLFxyXG4gICAgICAgIGRlZmF1bHRWYWx1ZTogW3sgdmFsdWU6IFwiQ3LDqWF0aW9uIGRlIGNvbXB0ZVwiLCBjaGVja2VkOiB0cnVlLCBrZXk6IFwiQ3JlYXRpb25fZGVfY29tcHRlXCIgfSwgeyB2YWx1ZTogXCJDb25maWd1cmF0aW9uIGRlIHBvc3RlXCIsIGNoZWNrZWQ6IGZhbHNlLCBrZXk6IFwiQ29uZmlndXJhdGlvbl9kZV9wb3N0ZVwiIH1dLFxyXG4gICAgICAgIHZhbHVlOiBcIkNyZWF0aW9uX2RlX2NvbXB0ZVwiXHJcbiAgICAgIH0sXHJcbiAgICAgIGZvcm1zOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbGFiZWw6IFwiRGVzY3JpcHRpb25zXCIsXHJcbiAgICAgICAgICBrZXk6IFwiRGVzY3JpcHRpb25cIixcclxuICAgICAgICAgIGV4cGFuZE9uYm9hcmRpbmc6IHRydWUsXHJcbiAgICAgICAgICBkZWZhdWx0VmFsdWU6IG51bGwsXHJcbiAgICAgICAgICB2YWx1ZTogbnVsbCxcclxuICAgICAgICAgIHNpemU6IDEwMDAsXHJcbiAgICAgICAgICBpc01hbmRhdG9yeTogZmFsc2UsXHJcbiAgICAgICAgICBvdGhlclZhbHVlOiAnJyxcclxuICAgICAgICAgIHR5cGU6IFwidGV4dGFyZWFcIixcclxuICAgICAgICAgIGVkaXRhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgaXNDb25kaXRpb25hbDogZmFsc2UsXHJcbiAgICAgICAgICBjb25kaXRpb25WYWx1ZTogXCJcIixcclxuICAgICAgICAgIGNvbmRpdGlvbjoge30sXHJcbiAgICAgICAgICBkZWxldGVhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgc3ViTGV2ZWw6IDEsXHJcbiAgICAgICAgICBleHBhbmRNb3JlOiBmYWxzZSxcclxuICAgICAgICB9LFxyXG4gICAgICBdLFxyXG4gICAgfSxcclxuICBdO1xyXG5cclxuICBjYW5EZWFjdGl2YXRlKCkge1xyXG4gICAgaWYgKCF0aGlzLmNhbkV4aXQpIHtcclxuICAgICAgdGhpcy5kaWFsb2cub3BlbihFeGl0Q29uZmlybUNvbXBvbmVudCwge1xyXG4gICAgICAgIGRhdGE6ICcnXHJcbiAgICAgIH0pXHJcbiAgICAgIHJldHVybiB0aGlzLnNlcnZpY2UuY2FuRXhpdCRcclxuICAgIH1cclxuICAgIHJldHVybiB0cnVlXHJcbiAgfVxyXG5cclxuICBpbml0Rm9ybSgpIHtcclxuICAgIHRoaXMuZm9ybSA9IHRoaXMuZmIuZ3JvdXAoe1xyXG4gICAgICBOYW1lOiBbXCJcIiwgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXHJcbiAgICAgIFBpY3RvOiBbXCJcIl0sXHJcbiAgICAgIERlc2NyaXB0aW9uOiBbXCJcIl0sXHJcbiAgICAgIFRhZ3M6IFtcIlwiXSxcclxuICAgICAgU3RhdHVzOiBbZmFsc2UsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxyXG4gICAgfSk7XHJcbiAgfVxyXG4gIGFzeW5jIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5pZCA9IHRoaXMucm91dGUuc25hcHNob3QucGFyYW1NYXAuZ2V0KFwiaWRcIik7XHJcblxyXG4gICAgdGhpcy5mb3JtLnZhbHVlQ2hhbmdlcy5zdWJzY3JpYmUoYyA9PiB7XHJcbiAgICAgIHRoaXMuY2FuRXhpdCA9IGZhbHNlO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKHRoaXMuaWQgIT09IFwiMFwiKSB7XHJcbiAgICAgIHNldFRpbWVvdXQoYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuY3VycmVudFByb2ZpbCA9IGF3YWl0IHRoaXMuc2VydmljZS5nZXRQcm9maWwodGhpcy5pZCk7XHJcbiAgICAgICAgdGhpcy5mb3JtLnBhdGNoVmFsdWUodGhpcy5jdXJyZW50UHJvZmlsKTtcclxuICAgICAgICB0aGlzLmNhdGVnb3JpZXMgPSB0aGlzLmN1cnJlbnRQcm9maWwuY2F0ZWdvcmllcztcclxuICAgICAgfSwgNTAwKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuc2hvd1Byb2ZpbGVOYW1lID0gdHJ1ZTtcclxuICAgICAgdGhpcy5jYXRlZ29yaWVzID0gdGhpcy5kZWZhdWx0Q2F0ZWdvcmllO1xyXG4gICAgfVxyXG4gICAgc2V0VGltZW91dChhc3luYyAoKSA9PiB7XHJcbiAgICAgIHRoaXMudGFncyA9IGF3YWl0IHRoaXMuc2VydmljZS5nZXRBbGxUYWdzKCk7XHJcbiAgICB9LCA1MDApO1xyXG4gICAgdGhpcy5nZXRDb25kaXRpb25WYWx1ZXMoKTtcclxuICB9XHJcblxyXG4gIG9uQWRkTmV3Q2F0ZWdvcnkoZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgdGhpcy5jYW5FeGl0ID0gZmFsc2U7XHJcbiAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICBuYW1lOiBcIk5vbSBkZSBsYSBjYXTDqWdvcmllXCIgKyB0aGlzLmNhdGVnb3JpZXMubGVuZ3RoLFxyXG4gICAgICBrZXk6ICduZXdDYXRlZ29yeScgKyB0aGlzLmNhdGVnb3JpZXMubGVuZ3RoLFxyXG4gICAgICBlZGl0YWJsZTogdHJ1ZSxcclxuICAgICAgaXNDb25kaXRpb25hbDogZmFsc2UsXHJcbiAgICAgIGNvbmRpdGlvblZhbHVlOiBcIlwiLFxyXG4gICAgICBjb25kaXRpb246IHt9LFxyXG4gICAgICBleHBhbmRPbmJvYXJkaW5nOiB0cnVlLFxyXG4gICAgICBkZWxldGVhYmxlOiB0cnVlLFxyXG4gICAgICBleHBhbmRNb3JlOiB0cnVlLFxyXG4gICAgICBzdWZmaXhFbmRwb2ludDogXCJcIixcclxuICAgICAgc2VsZWN0b3I6IHtcclxuICAgICAgICBsYWJlbDogXCJDb21wYW55XCIsXHJcbiAgICAgICAga2V5OiBcIkNvbXBhbnlcIixcclxuICAgICAgICBkZWZhdWx0VmFsdWU6IFt7IHZhbHVlOiBcIk5vd3RlYW1cIiwgY2hlY2tlZDogdHJ1ZSB9LCB7IHZhbHVlOiBcIkludGVybmFsXCIsIGNoZWNrZWQ6IGZhbHNlIH1dLFxyXG4gICAgICAgIHZhbHVlOiBcIk5vd3RlYW1cIlxyXG4gICAgICB9LFxyXG4gICAgICB0aWNrZXRUeXBlOiB7XHJcbiAgICAgICAgbGFiZWw6IFwiVHlwZSBkZSB0aWNrZXRcIixcclxuICAgICAgICBrZXk6IFwidHlja2V0VHlwZVwiLFxyXG4gICAgICAgIGRlZmF1bHRWYWx1ZTogW3sgdmFsdWU6IFwiQ3LDqWF0aW9uIGRlIGNvbXB0ZVwiLCBjaGVja2VkOiB0cnVlLCBrZXk6IFwiQ3JlYXRpb25fZGVfY29tcHRlXCIgfSwgeyB2YWx1ZTogXCJDb25maWd1cmF0aW9uIGRlIHBvc3RlXCIsIGNoZWNrZWQ6IGZhbHNlLCBrZXk6IFwiQ29uZmlndXJhdGlvbl9kZV9wb3N0ZVwiIH1dLFxyXG4gICAgICAgIHZhbHVlOiBcIkNyZWF0aW9uX2RlX2NvbXB0ZVwiXHJcbiAgICAgIH0sXHJcbiAgICAgIGZvcm1zOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbGFiZWw6IFwiTGFiZWwgw6AgcmVub21tZXJcIixcclxuICAgICAgICAgIGtleTogXCJcIixcclxuICAgICAgICAgIGV4cGFuZE9uYm9hcmRpbmc6IHRydWUsXHJcbiAgICAgICAgICBkZWZhdWx0VmFsdWU6IG51bGwsXHJcbiAgICAgICAgICB2YWx1ZTogbnVsbCxcclxuICAgICAgICAgIHNpemU6IDgwLFxyXG4gICAgICAgICAgaXNNYW5kYXRvcnk6IHRydWUsXHJcbiAgICAgICAgICBvdGhlclZhbHVlOiAnJyxcclxuICAgICAgICAgIHR5cGU6IFwidGV4dFwiLFxyXG4gICAgICAgICAgZGVsZXRlYWJsZTogdHJ1ZSxcclxuICAgICAgICAgIGVkaXRhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgaXNDb25kaXRpb25hbDogZmFsc2UsXHJcbiAgICAgICAgICBjb25kaXRpb25WYWx1ZTogXCJcIixcclxuICAgICAgICAgIGNvbmRpdGlvbjoge30sXHJcbiAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgIH1cclxuICAgIHRoaXMuY2F0ZWdvcmllcy5wdXNoKGRhdGEpO1xyXG4gICAgdGhpcy5vbkhpc3Rvcmljcyh7XHJcbiAgICAgIGZvcm06IGRhdGEsXHJcbiAgICAgIG1ldGhvZDogJ3B1c2gnLFxyXG4gICAgICBsb2NhdGlvbjogJ2NhdGVnb3J5JyxcclxuICAgICAgcGFyYW1zOiBbdGhpcy5jYXRlZ29yaWVzLmxlbmd0aCAtIDFdXHJcbiAgICB9KVxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHRoaXMuc2Nyb2xsVG9TZXJ2aWNlLnNjcm9sbFRvKHtcclxuICAgICAgICB0YXJnZXQ6IGRhdGEubmFtZSxcclxuICAgICAgICBjb250YWluZXI6ICdjYXRlZ29yaWVzLWlkJyxcclxuICAgICAgICBkdXJhdGlvbjogNjUwLFxyXG4gICAgICAgIGVhc2luZzogJ2Vhc2VPdXRFbGFzdGljJyxcclxuICAgICAgICBvZmZzZXQ6IDIwXHJcbiAgICAgIH0pO1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICB0aGlzLm9uRXhwZW5kTW9yZSh7IGZpZWxkOiBkYXRhIH0sIHRoaXMuY2F0ZWdvcmllcy5sZW5ndGggLSAxKTtcclxuICAgICAgICB0aGlzLm9uQWN0aXZlTWVudShkYXRhLCB0aGlzLmNhdGVnb3JpZXMubGVuZ3RoIC0gMSk7XHJcbiAgICAgIH0sIDMwMCk7XHJcblxyXG4gICAgfSwgMjAwKVxyXG4gIH1cclxuICBvbkNoYW5nZUNhdGVnb3J5TmFtZSgpIHtcclxuICAgIHRoaXMuY3VycmVudEVkaXRCbG9jay5rZXkgPSB0aGlzLmN1cnJlbnRFZGl0QmxvY2submFtZS5yZXBsYWNlKC9cXHMvZywgJycpXHJcbiAgfVxyXG4gIGNoZWNrQmxpbmsoaW5kZXgsIGxldmVsKSB7XHJcbiAgICByZXR1cm4gU3RyaW5nKGluZGV4KSArIFN0cmluZyhsZXZlbClcclxuICB9XHJcbiAgb25BZGROZXdGaWVsZCguLi5wYXJhbXMpIHtcclxuICAgIHRoaXMuY2FuRXhpdCA9IGZhbHNlO1xyXG4gICAgY29uc3QgbGVuZ3RoID0gcGFyYW1zLmxlbmd0aDtcclxuICAgIGNvbnN0IGZvcm1zID0gbGVuZ3RoID09PSAxID8gdGhpcy5jYXRlZ29yaWVzW3BhcmFtc1swXV0uZm9ybXMgOiBsZW5ndGggPT09IDIgPyB0aGlzLmNhdGVnb3JpZXNbcGFyYW1zWzBdXS5mb3Jtc1twYXJhbXNbMV1dLmZvcm1zIDogdGhpcy5jYXRlZ29yaWVzW3BhcmFtc1swXV0uZm9ybXNbcGFyYW1zWzFdXS5mb3Jtc1twYXJhbXNbMl1dLmZvcm1zO1xyXG4gICAgY29uc3QgZGF0YSA9IHtcclxuICAgICAgbGFiZWw6IFwiTGFiZWwgw6AgcmVub21tZXJcIixcclxuICAgICAga2V5OiBcIlwiLFxyXG4gICAgICBleHBhbmRPbmJvYXJkaW5nOiB0cnVlLFxyXG4gICAgICBkZWZhdWx0VmFsdWU6IG51bGwsXHJcbiAgICAgIHZhbHVlOiBudWxsLFxyXG4gICAgICBzaXplOiA4MCxcclxuICAgICAgaXNNYW5kYXRvcnk6IHRydWUsXHJcbiAgICAgIG90aGVyVmFsdWU6ICcnLFxyXG4gICAgICB0eXBlOiBcInRleHRcIixcclxuICAgICAgZGVsZXRlYWJsZTogdHJ1ZSxcclxuICAgICAgZWRpdGFibGU6IHRydWUsXHJcbiAgICAgIGlzQ29uZGl0aW9uYWw6IGZhbHNlLFxyXG4gICAgICBjb25kaXRpb25WYWx1ZTogXCJcIixcclxuICAgICAgY29uZGl0aW9uOiB7fSxcclxuICAgICAgc3ViTGV2ZWw6IHBhcmFtcy5sZW5ndGgsXHJcbiAgICAgIC8vZm9ybXM6IFtdXHJcbiAgICB9XHJcbiAgICBmb3Jtcy5wdXNoKGRhdGEpO1xyXG4gICAgdGhpcy5uZXdGaWVsZEluZGV4ID0gU3RyaW5nKGZvcm1zLmxlbmd0aCAtIDEpICsgU3RyaW5nKGxlbmd0aCk7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgdGhpcy5uZXdGaWVsZEluZGV4ID0gbnVsbFxyXG4gICAgfSwgNTAwMCk7XHJcbiAgICB0aGlzLm9uSGlzdG9yaWNzKHtcclxuICAgICAgZm9ybTogZGF0YSxcclxuICAgICAgbWV0aG9kOiAncHVzaCcsXHJcbiAgICAgIGxvY2F0aW9uOiAnZm9ybXMnLFxyXG4gICAgICBwYXJhbXNcclxuICAgIH0pXHJcbiAgICB0aGlzLm9uRWRpdEJsb2NrKGZvcm1zLmF0KC0xKSwgcGFyYW1zKVxyXG4gIH1cclxuXHJcbiAgb25BZGROZXdTdWJMZXZlbEZpZWxkKC4uLnBhcmFtcykge1xyXG4gICAgdGhpcy5jYW5FeGl0ID0gZmFsc2U7XHJcbiAgICBjb25zdCBsZW5ndGggPSBwYXJhbXMubGVuZ3RoO1xyXG4gICAgY29uc3QgZm9ybXMgPSBsZW5ndGggPT09IDIgPyB0aGlzLmNhdGVnb3JpZXNbcGFyYW1zWzBdXS5mb3Jtc1twYXJhbXNbbGVuZ3RoIC0gMV1dIDogbGVuZ3RoID09PSAzID8gdGhpcy5jYXRlZ29yaWVzW3BhcmFtc1swXV0uZm9ybXNbcGFyYW1zWzFdXS5mb3Jtc1twYXJhbXNbbGVuZ3RoIC0gMV1dIDogdGhpcy5jYXRlZ29yaWVzW3BhcmFtc1swXV0uZm9ybXNbcGFyYW1zWzFdXS5mb3Jtc1twYXJhbXNbMl1dLmZvcm1zW3BhcmFtc1tsZW5ndGggLSAxXV07XHJcbiAgICBmb3Jtcy5leHBhbmRNb3JlID0gdHJ1ZTtcclxuICAgIGZvcm1zLmZvcm1zID0gW107XHJcbiAgICBjb25zdCBuZXdGb3JtID0ge1xyXG4gICAgICBsYWJlbDogXCJcIixcclxuICAgICAga2V5OiBcIlwiLFxyXG4gICAgICBleHBhbmRPbmJvYXJkaW5nOiB0cnVlLFxyXG4gICAgICBkZWZhdWx0VmFsdWU6IG51bGwsXHJcbiAgICAgIHZhbHVlOiBudWxsLFxyXG4gICAgICBzaXplOiA4MCxcclxuICAgICAgaXNNYW5kYXRvcnk6IHRydWUsXHJcbiAgICAgIG90aGVyVmFsdWU6ICcnLFxyXG4gICAgICB0eXBlOiBcInRleHRcIixcclxuICAgICAgZGVsZXRlYWJsZTogdHJ1ZSxcclxuICAgICAgZWRpdGFibGU6IHRydWUsXHJcbiAgICAgIGlzQ29uZGl0aW9uYWw6IGZhbHNlLFxyXG4gICAgICBjb25kaXRpb25WYWx1ZTogXCJcIixcclxuICAgICAgY29uZGl0aW9uOiB7fSxcclxuICAgICAgc3ViTGV2ZWw6IHBhcmFtcy5sZW5ndGgsXHJcbiAgICAgIGV4cGFuZE1vcmU6IHRydWUsXHJcbiAgICAgIC8vZm9ybXM6IFtdXHJcbiAgICB9XHJcbiAgICBmb3Jtcy5mb3Jtcy5wdXNoKG5ld0Zvcm0pO1xyXG4gICAgdGhpcy5vbkhpc3Rvcmljcyh7XHJcbiAgICAgIGZvcm06IG5ld0Zvcm0sXHJcbiAgICAgIG1ldGhvZDogJ3B1c2gnLFxyXG4gICAgICBsb2NhdGlvbjogJ2Zvcm1zJyxcclxuICAgICAgcGFyYW1zXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgb25SZW1vdmVGaWVsZCguLi5wYXJhbXMpIHtcclxuICAgIHRoaXMuY2FuRXhpdCA9IGZhbHNlO1xyXG4gICAgY29uc3QgbGVuZ3RoID0gcGFyYW1zLmxlbmd0aDtcclxuICAgIGNvbnN0IGZvcm1zID0gbGVuZ3RoID09PSAyID8gdGhpcy5jYXRlZ29yaWVzW3BhcmFtc1swXV0uZm9ybXMgOiBsZW5ndGggPT09IDMgPyB0aGlzLmNhdGVnb3JpZXNbcGFyYW1zWzBdXS5mb3Jtc1twYXJhbXNbMV1dLmZvcm1zIDogdGhpcy5jYXRlZ29yaWVzW3BhcmFtc1swXV0uZm9ybXNbcGFyYW1zWzFdXS5mb3Jtc1twYXJhbXNbMl1dLmZvcm1zO1xyXG4gICAgZm9ybXMuc3BsaWNlKHBhcmFtc1tsZW5ndGggLSAxXSwgMSk7XHJcbiAgICB0aGlzLm9uSGlzdG9yaWNzKHtcclxuICAgICAgZm9ybTogZm9ybXNbcGFyYW1zW2xlbmd0aCAtIDFdXSxcclxuICAgICAgbG9jYXRpb246ICdmb3JtcycsXHJcbiAgICAgIG1ldGhvZDogJ3NwbGljZScsXHJcbiAgICAgIHBhcmFtc1xyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIG9uUmVtb3ZlQ2F0ZWdvcnkoZSwgaSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgdGhpcy5jYW5FeGl0ID0gZmFsc2U7XHJcbiAgICB0aGlzLm9uSGlzdG9yaWNzKHtcclxuICAgICAgZm9ybTogdGhpcy5jYXRlZ29yaWVzLnNwbGljZShpLCAxKSxcclxuICAgICAgbWV0aG9kOiAnc3BsaWNlJyxcclxuICAgICAgbG9jYXRpb246ICdjYXRlZ29yeScsXHJcbiAgICAgIHBhcmFtczogW2ldXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgb25DaGFuZ2VDYXRlZ29yeSgpIHtcclxuICAgIHJldHVybiB0aGlzLmNhdGVnb3JpZXMuZXZlcnkoKGNhdCkgPT4gY2F0Lm5hbWUgIT09IFwiXCIgJiYgY2F0LmZvcm1zLmV2ZXJ5KChmaWVsZCkgPT4gZmllbGQubGFiZWwgIT09IFwiXCIgJiYgZmllbGQudHlwZSAhPT0gXCJcIikpO1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgb25TdWJtaXQoaXNQdWJsaXNoOiBib29sZWFuKSB7XHJcbiAgICBpZiAodGhpcy5mb3JtLnZhbGlkICYmIHRoaXMub25DaGFuZ2VDYXRlZ29yeSgpKSB7XHJcbiAgICAgIGlmIChpc1B1Ymxpc2gpIHtcclxuICAgICAgICB0aGlzLmxpdmVMYWJlbCA9IFwiQ2hhcmdlbWVudC4uLi5cIlxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuZHJhZnRMYWJlbCA9IFwiQ2hhcmdlbWVudC4uLlwiXHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgcmVzdWx0ID1cclxuICAgICAgICB0aGlzLmlkICE9PSBcIjBcIlxyXG4gICAgICAgICAgPyBhd2FpdCB0aGlzLnNlcnZpY2UudXBkYXRlUHJvZmlsKHtcclxuICAgICAgICAgICAgLi4udGhpcy5jdXJyZW50UHJvZmlsLFxyXG4gICAgICAgICAgICAuLi50aGlzLmZvcm0udmFsdWUsXHJcbiAgICAgICAgICAgIFN0YXR1czogaXNQdWJsaXNoLFxyXG4gICAgICAgICAgICBjYXRlZ29yaWVzOiB0aGlzLmNhdGVnb3JpZXMsXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgOiBhd2FpdCB0aGlzLnNlcnZpY2UuY3JlYXRlUHJvZmlsKHtcclxuICAgICAgICAgICAgLi4udGhpcy5mb3JtLnZhbHVlLFxyXG4gICAgICAgICAgICBTdGF0dXM6IGlzUHVibGlzaCxcclxuICAgICAgICAgICAgY2F0ZWdvcmllczogdGhpcy5jYXRlZ29yaWVzLFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgIGlmIChyZXN1bHQpIHtcclxuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgncHJvZmlsJyk7XHJcbiAgICAgICAgYXdhaXQgdGhpcy5zZXJ2aWNlLmdldEFsbFByb2ZpbCgpO1xyXG4gICAgICAgIHRoaXMuY2FuRXhpdCA9IHRydWU7XHJcblxyXG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFt0aGlzLnNlcnZpY2UubWFpblBhdGggKyAnL3RlbXBsYXRlJ10pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZXJycm9yLi4uLi4uXCIpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChpc1B1Ymxpc2gpIHtcclxuICAgICAgICB0aGlzLmxpdmVMYWJlbCA9IFwiUHVibGnDqVwiXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5kcmFmdExhYmVsID0gXCJFbnJlZ2lzdHJlciBsZSBicm91aWxsb25cIlxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvbkNoYW5nZVR5cGUodHlwZTogc3RyaW5nLCAuLi5wYXJhbXMpIHtcclxuXHJcbiAgICB0aGlzLmNhbkV4aXQgPSBmYWxzZTtcclxuICAgIGNvbnN0IGxlbmd0aCA9IHBhcmFtcy5sZW5ndGg7XHJcbiAgICBjb25zdCBmb3JtcyA9IGxlbmd0aCA9PT0gMiA/IHRoaXMuY2F0ZWdvcmllc1twYXJhbXNbMF1dLmZvcm1zIDogbGVuZ3RoID09PSAzID8gdGhpcy5jYXRlZ29yaWVzW3BhcmFtc1swXV0uZm9ybXNbcGFyYW1zWzFdXS5mb3JtcyA6IHRoaXMuY2F0ZWdvcmllc1twYXJhbXNbMF1dLmZvcm1zW3BhcmFtc1sxXV0uZm9ybXNbcGFyYW1zWzJdXS5mb3JtcztcclxuICAgIGlmICh0eXBlID09PSBcInNlbGVjdFwiIHx8IHR5cGUgPT09IFwicmFkaW9cIiB8fCB0eXBlID09PSBcImNoZWNrYm94X211bHRpcGxlXCIpIHtcclxuICAgICAgZm9ybXNbcGFyYW1zW2xlbmd0aCAtIDFdXS5kZWZhdWx0VmFsdWUgPSBbXTtcclxuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gXCJjaGVja2JveFwiIHx8IHR5cGUgPT09IFwidG9nZ2xlXCIpIHtcclxuICAgICAgZm9ybXNbcGFyYW1zW2xlbmd0aCAtIDFdXS5kZWZhdWx0VmFsdWUgPSB0cnVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZm9ybXNbcGFyYW1zW2xlbmd0aCAtIDFdXS5kZWZhdWx0VmFsdWUgPSBcIlwiO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25LZXlQcmVzcyhldmVudDogYW55LCAuLi5wYXJhbXMpIHtcclxuICAgIHRoaXMuY2FuRXhpdCA9IGZhbHNlO1xyXG4gICAgY29uc3QgbGVuZ3RoID0gcGFyYW1zLmxlbmd0aDtcclxuICAgIGNvbnN0IGZvcm1zID0gbGVuZ3RoID09PSAyID8gdGhpcy5jYXRlZ29yaWVzW3BhcmFtc1swXV0uZm9ybXNbcGFyYW1zW2xlbmd0aCAtIDFdXSA6IGxlbmd0aCA9PT0gMyA/IHRoaXMuY2F0ZWdvcmllc1twYXJhbXNbMF1dLmZvcm1zW3BhcmFtc1sxXV0uZm9ybXNbcGFyYW1zW2xlbmd0aCAtIDFdXSA6IHRoaXMuY2F0ZWdvcmllc1twYXJhbXNbMF1dLmZvcm1zW3BhcmFtc1sxXV0uZm9ybXNbcGFyYW1zWzJdXS5mb3Jtc1twYXJhbXNbbGVuZ3RoIC0gMV1dO1xyXG4gICAgaWYgKGV2ZW50LmtleSA9PT0gXCI7XCIpIHtcclxuICAgICAgY29uc3QgZXhpc3QgPSBmb3Jtcy5kZWZhdWx0VmFsdWUuZmluZCgob3B0KSA9PiBvcHQudmFsdWUudG9Mb2NhbGVMb3dlckNhc2UoKSA9PT0gZXZlbnQudGFyZ2V0LnZhbHVlLnNwbGl0KFwiO1wiKVswXS50b0xvY2FsZUxvd2VyQ2FzZSgpKTtcclxuICAgICAgaWYgKCFleGlzdCkge1xyXG4gICAgICAgIGZvcm1zLmRlZmF1bHRWYWx1ZS5wdXNoKHtcclxuICAgICAgICAgIHZhbHVlOiBldmVudC50YXJnZXQudmFsdWUuc3BsaXQoXCI7XCIpWzBdLFxyXG4gICAgICAgICAgY2hlY2tlZDogZmFsc2VcclxuICAgICAgICB9KTtcclxuICAgICAgICBldmVudC50YXJnZXQudmFsdWUgPSBcIlwiO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGV2ZW50LnRhcmdldC52YWx1ZSA9IFwiXCI7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIHRoaXMuZ2V0Q29uZGl0aW9uVmFsdWVzKClcclxuICB9XHJcblxyXG4gIHJlbW92ZUtleXdvcmQoa2V5d29yZDogYW55LCAuLi5wYXJhbXMpIHtcclxuICAgIHRoaXMuY2FuRXhpdCA9IGZhbHNlO1xyXG4gICAgY29uc3QgbGVuZ3RoID0gcGFyYW1zLmxlbmd0aDtcclxuICAgIGNvbnN0IGZvcm1zID0gbGVuZ3RoID09PSAyID8gdGhpcy5jYXRlZ29yaWVzW3BhcmFtc1swXV0uZm9ybXNbcGFyYW1zW2xlbmd0aCAtIDFdXSA6IGxlbmd0aCA9PT0gMyA/IHRoaXMuY2F0ZWdvcmllc1twYXJhbXNbMF1dLmZvcm1zW3BhcmFtc1sxXV0uZm9ybXNbcGFyYW1zW2xlbmd0aCAtIDFdXSA6IHRoaXMuY2F0ZWdvcmllc1twYXJhbXNbMF1dLmZvcm1zW3BhcmFtc1sxXV0uZm9ybXNbcGFyYW1zWzJdXS5mb3Jtc1twYXJhbXNbbGVuZ3RoIC0gMV1dO1xyXG4gICAgZm9ybXMuZGVmYXVsdFZhbHVlID0gZm9ybXMuZGVmYXVsdFZhbHVlLmZpbHRlcigob3B0aW9uKSA9PiBvcHRpb24udmFsdWUgIT09IGtleXdvcmQudmFsdWUpO1xyXG4gICAgLy8gdGhpcy5nZXRDb25kaXRpb25WYWx1ZXMoKVxyXG4gIH1cclxuXHJcbiAgb25FeHBlbmRNb3JlKGV2ZW50LCAuLi5wYXJhbXMpIHtcclxuICAgIGlmIChldmVudCkge1xyXG4gICAgICBpZiAoZXZlbnQuZXZlbnQpIHtcclxuICAgICAgICBldmVudC5ldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChldmVudC5maWVsZCAmJiAhZXZlbnQuZmllbGQuZXhwYW5kTW9yZSkge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jYXRlZ29yaWVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICB0aGlzLmNhdGVnb3JpZXNbaV0uZXhwYW5kTW9yZSA9IGZhbHNlO1xyXG4gICAgICAgICAgaWYgKHRoaXMuY2F0ZWdvcmllc1tpXS5mb3Jtcykge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMuY2F0ZWdvcmllc1tpXS5mb3Jtcy5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICAgIHRoaXMuY2F0ZWdvcmllc1tpXS5mb3Jtc1tqXS5leHBhbmRNb3JlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICB9XHJcbiAgICBpZiAocGFyYW1zLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICB0aGlzLmNhdGVnb3JpZXNbcGFyYW1zWzBdXS5leHBhbmRNb3JlID0gIXRoaXMuY2F0ZWdvcmllc1twYXJhbXNbMF1dLmV4cGFuZE1vcmU7XHJcbiAgICB9IGVsc2UgaWYgKHBhcmFtcy5sZW5ndGggPT09IDIpIHtcclxuICAgICAgaWYgKHRoaXMuY2F0ZWdvcmllc1twYXJhbXNbMF1dLmZvcm1zW3BhcmFtc1sxXV0uZXhwYW5kTW9yZSkge1xyXG4gICAgICAgIHRoaXMuY2F0ZWdvcmllc1twYXJhbXNbMF1dLmZvcm1zW3BhcmFtc1sxXV0uZXhwYW5kTW9yZSA9IGZhbHNlO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuY2F0ZWdvcmllc1twYXJhbXNbMF1dLmV4cGFuZE1vcmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuY2F0ZWdvcmllc1twYXJhbXNbMF1dLmZvcm1zW3BhcmFtc1sxXV0uZXhwYW5kTW9yZSA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSBpZiAocGFyYW1zLmxlbmd0aCA9PT0gMykge1xyXG4gICAgICBpZiAodGhpcy5jYXRlZ29yaWVzW3BhcmFtc1swXV0uZm9ybXNbcGFyYW1zWzFdXS5mb3Jtc1twYXJhbXNbMl1dLmV4cGFuZE1vcmUpIHtcclxuICAgICAgICB0aGlzLmNhdGVnb3JpZXNbcGFyYW1zWzBdXS5mb3Jtc1twYXJhbXNbMV1dLmZvcm1zW3BhcmFtc1syXV0uZXhwYW5kTW9yZSA9IGZhbHNlO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuY2F0ZWdvcmllc1twYXJhbXNbMF1dLmV4cGFuZE1vcmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuY2F0ZWdvcmllc1twYXJhbXNbMF1dLmZvcm1zW3BhcmFtc1sxXV0uZXhwYW5kTW9yZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5jYXRlZ29yaWVzW3BhcmFtc1swXV0uZm9ybXNbcGFyYW1zWzFdXS5mb3Jtc1twYXJhbXNbMl1dLmV4cGFuZE1vcmUgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZiAodGhpcy5jYXRlZ29yaWVzW3BhcmFtc1swXV0uZm9ybXNbcGFyYW1zWzFdXS5mb3Jtc1twYXJhbXNbMl1dLmZvcm1zW3BhcmFtc1szXV0uZXhwYW5kTW9yZSkge1xyXG4gICAgICAgIHRoaXMuY2F0ZWdvcmllc1twYXJhbXNbMF1dLmZvcm1zW3BhcmFtc1sxXV0uZm9ybXNbcGFyYW1zWzJdXS5mb3Jtc1twYXJhbXNbM11dLmV4cGFuZE1vcmUgPSBmYWxzZTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmNhdGVnb3JpZXNbcGFyYW1zWzBdXS5leHBhbmRNb3JlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmNhdGVnb3JpZXNbcGFyYW1zWzBdXS5mb3Jtc1twYXJhbXNbMV1dLmV4cGFuZE1vcmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuY2F0ZWdvcmllc1twYXJhbXNbMF1dLmZvcm1zW3BhcmFtc1sxXV0uZm9ybXNbcGFyYW1zWzJdXS5leHBhbmRNb3JlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmNhdGVnb3JpZXNbcGFyYW1zWzBdXS5mb3Jtc1twYXJhbXNbMV1dLmZvcm1zW3BhcmFtc1syXV0uZm9ybXNbcGFyYW1zWzNdXS5leHBhbmRNb3JlID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25DaGVja2VkRGVmYXVsdChldmVudCwgLi4ucGFyYW1zKSB7XHJcbiAgICBpZiAocGFyYW1zLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICB0aGlzLmNhdGVnb3JpZXNbcGFyYW1zWzBdXS5kZWZhdWx0VmFsdWUgPSBldmVudDtcclxuICAgIH0gZWxzZSBpZiAocGFyYW1zLmxlbmd0aCA9PT0gMikge1xyXG4gICAgICB0aGlzLmNhdGVnb3JpZXNbcGFyYW1zWzBdXS5kZWZhdWx0VmFsdWUgPSBldmVudDtcclxuICAgICAgdGhpcy5jYXRlZ29yaWVzW3BhcmFtc1swXV0uZm9ybXNbcGFyYW1zWzFdXS5kZWZhdWx0VmFsdWUgPSBldmVudDtcclxuICAgIH0gZWxzZSBpZiAocGFyYW1zLmxlbmd0aCA9PT0gMykge1xyXG4gICAgICB0aGlzLmNhdGVnb3JpZXNbcGFyYW1zWzBdXS5kZWZhdWx0VmFsdWUgPSBldmVudDtcclxuICAgICAgdGhpcy5jYXRlZ29yaWVzW3BhcmFtc1swXV0uZm9ybXNbcGFyYW1zWzFdXS5kZWZhdWx0VmFsdWUgPSBldmVudDtcclxuICAgICAgdGhpcy5jYXRlZ29yaWVzW3BhcmFtc1swXV0uZm9ybXNbcGFyYW1zWzFdXS5mb3Jtc1twYXJhbXNbMl1dLmRlZmF1bHRWYWx1ZSA9IGV2ZW50O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5jYXRlZ29yaWVzW3BhcmFtc1swXV0uZGVmYXVsdFZhbHVlID0gZXZlbnQ7XHJcbiAgICAgIHRoaXMuY2F0ZWdvcmllc1twYXJhbXNbMF1dLmZvcm1zW3BhcmFtc1sxXV0uZGVmYXVsdFZhbHVlID0gZXZlbnQ7XHJcbiAgICAgIHRoaXMuY2F0ZWdvcmllc1twYXJhbXNbMF1dLmZvcm1zW3BhcmFtc1sxXV0uZm9ybXNbcGFyYW1zWzJdXS5kZWZhdWx0VmFsdWUgPSBldmVudDtcclxuICAgICAgdGhpcy5jYXRlZ29yaWVzW3BhcmFtc1swXV0uZm9ybXNbcGFyYW1zWzFdXS5mb3Jtc1twYXJhbXNbMl1dLmZvcm1zW3BhcmFtc1szXV0uZGVmYXVsdFZhbHVlID0gZXZlbnQ7XHJcbiAgICB9XHJcbiAgICAvLyB0aGlzLmdldENvbmRpdGlvblZhbHVlcygpXHJcbiAgfVxyXG5cclxuICBhZGRLZXl3b3JkRnJvbUlucHV0KGV2ZW50OiBNYXRDaGlwSW5wdXRFdmVudCwgcHJldiwgLi4ucGFyYW1zKSB7XHJcbiAgICB0aGlzLmNhbkV4aXQgPSBmYWxzZTtcclxuICAgIGNvbnN0IGlucHV0ID0gZXZlbnQuaW5wdXQ7XHJcbiAgICBjb25zdCB2YWx1ZSA9IGV2ZW50LnZhbHVlO1xyXG4gICAgY29uc3QgbGVuZ3RoID0gcGFyYW1zLmxlbmd0aDtcclxuICAgIGNvbnN0IGZvcm1zID0gbGVuZ3RoID09PSAyID8gdGhpcy5jYXRlZ29yaWVzW3BhcmFtc1swXV0uZm9ybXNbcGFyYW1zW2xlbmd0aCAtIDFdXSA6IGxlbmd0aCA9PT0gMyA/IHRoaXMuY2F0ZWdvcmllc1twYXJhbXNbMF1dLmZvcm1zW3BhcmFtc1sxXV0uZm9ybXNbcGFyYW1zW2xlbmd0aCAtIDFdXSA6IHRoaXMuY2F0ZWdvcmllc1twYXJhbXNbMF1dLmZvcm1zW3BhcmFtc1sxXV0uZm9ybXNbcGFyYW1zWzJdXS5mb3Jtc1twYXJhbXNbbGVuZ3RoIC0gMV1dO1xyXG4gICAgaWYgKHZhbHVlKSB7XHJcbiAgICAgIGNvbnN0IHByZXZJbmRleCA9IGZvcm1zLmRlZmF1bHRWYWx1ZS5maW5kSW5kZXgoKG9wdCkgPT4gb3B0LnZhbHVlLnRvTG9jYWxlTG93ZXJDYXNlKCkgPT09IHByZXYudG9Mb2NhbGVMb3dlckNhc2UoKSk7XHJcbiAgICAgIGlmIChwcmV2SW5kZXggIT09IC0xKSB7XHJcbiAgICAgICAgZm9ybXMuZGVmYXVsdFZhbHVlW3ByZXZJbmRleF0udmFsdWUgPSB2YWx1ZS50cmltKCk7XHJcbiAgICAgICAgaW5wdXQudmFsdWUgPSBcIlwiO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnN0IGV4aXN0ID0gZm9ybXMuZGVmYXVsdFZhbHVlLmZpbmQoKG9wdCkgPT4gb3B0LnZhbHVlLnRvTG9jYWxlTG93ZXJDYXNlKCkgPT09IGV2ZW50LnZhbHVlLnRvTG9jYWxlTG93ZXJDYXNlKCkpO1xyXG4gICAgICAgIGlmICghZXhpc3QpIHtcclxuICAgICAgICAgIGZvcm1zLmRlZmF1bHRWYWx1ZS5wdXNoKHsgdmFsdWU6IHZhbHVlLnRyaW0oKSwgY2hlY2tlZDogZmFsc2UgfSk7XHJcbiAgICAgICAgICBpbnB1dC52YWx1ZSA9IFwiXCI7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGlucHV0LnZhbHVlID0gXCJcIjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICB9XHJcbiAgICAvLyB0aGlzLmdldENvbmRpdGlvblZhbHVlcygpXHJcbiAgfVxyXG5cclxuICBkcm9wKGV2ZW50OiBDZGtEcmFnRHJvcDxzdHJpbmdbXT4pIHtcclxuICAgIHRoaXMuY2FuRXhpdCA9IGZhbHNlO1xyXG4gICAgaWYgKGV2ZW50LnByZXZpb3VzQ29udGFpbmVyID09PSBldmVudC5jb250YWluZXIpIHtcclxuICAgICAgbW92ZUl0ZW1JbkFycmF5KGV2ZW50LmNvbnRhaW5lci5kYXRhLCBldmVudC5wcmV2aW91c0luZGV4LCBldmVudC5jdXJyZW50SW5kZXgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdHJhbnNmZXJBcnJheUl0ZW0oZXZlbnQucHJldmlvdXNDb250YWluZXIuZGF0YSwgZXZlbnQuY29udGFpbmVyLmRhdGEsIGV2ZW50LnByZXZpb3VzSW5kZXgsIGV2ZW50LmN1cnJlbnRJbmRleCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpbmdvcmVEZWZhdWx0QWN0aW9uKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICB9XHJcblxyXG4gIG9uU2hvd0NhdGVnb3J5KCkge1xyXG4gICAgdGhpcy5zaG93UHJvZmlsZU5hbWUgPSAhdGhpcy5zaG93UHJvZmlsZU5hbWU7XHJcbiAgfVxyXG5cclxuICBvblNlbGVjdFBpY3RvKGUsIHBpY3RvKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB0aGlzLmNhbkV4aXQgPSBmYWxzZTtcclxuICAgIHRoaXMuZm9ybS5wYXRjaFZhbHVlKHsgUGljdG86IHBpY3RvIH0pO1xyXG4gICAgdGhpcy5pc1BpY3RvTGlzdFNob3cgPSAhdGhpcy5pc1BpY3RvTGlzdFNob3c7XHJcbiAgfVxyXG4gIG9uU2hvd1BpY3RvTGlzdChlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB0aGlzLmlzUGljdG9MaXN0U2hvdyA9ICF0aGlzLmlzUGljdG9MaXN0U2hvdztcclxuICB9XHJcbiAgb25DaGFuZ2VMYWJlbChldmVudDogYW55LCAuLi5wYXJhbXMpIHtcclxuICAgIGNvbnN0IGFyciA9IGV2ZW50LmxhYmVsLnNwbGl0KFwiIFwiKTtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGFycltpXSA9IGFycltpXS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIGFycltpXS5zbGljZSgxKTtcclxuICAgIH1cclxuICAgIGNvbnN0IGxlbmd0aCA9IHBhcmFtcy5sZW5ndGg7XHJcbiAgICBjb25zdCBmb3JtcyA9IGxlbmd0aCA9PT0gMiA/IHRoaXMuY2F0ZWdvcmllc1twYXJhbXNbMF1dLmZvcm1zW3BhcmFtc1tsZW5ndGggLSAxXV0gOiBsZW5ndGggPT09IDMgPyB0aGlzLmNhdGVnb3JpZXNbcGFyYW1zWzBdXS5mb3Jtc1twYXJhbXNbMV1dLmZvcm1zW3BhcmFtc1tsZW5ndGggLSAxXV0gOiB0aGlzLmNhdGVnb3JpZXNbcGFyYW1zWzBdXS5mb3Jtc1twYXJhbXNbMV1dLmZvcm1zW3BhcmFtc1syXV0uZm9ybXNbcGFyYW1zW2xlbmd0aCAtIDFdXTtcclxuICAgIGZvcm1zLmtleSA9IGFyci5qb2luKCcnKVxyXG5cclxuICB9XHJcblxyXG4gIG9uQ2hlY2tlZENoaXAoZXZlbnQ6IGFueSwgLi4ucGFyYW1zKSB7XHJcbiAgICB0aGlzLmNhbkV4aXQgPSBmYWxzZTtcclxuICAgIGNvbnN0IGxlbmd0aCA9IHBhcmFtcy5sZW5ndGg7XHJcbiAgICBjb25zdCBmb3JtcyA9IGxlbmd0aCA9PT0gMiA/IHRoaXMuY2F0ZWdvcmllc1twYXJhbXNbMF1dLmZvcm1zW3BhcmFtc1tsZW5ndGggLSAxXV0gOiBsZW5ndGggPT09IDMgPyB0aGlzLmNhdGVnb3JpZXNbcGFyYW1zWzBdXS5mb3Jtc1twYXJhbXNbMV1dLmZvcm1zW3BhcmFtc1tsZW5ndGggLSAxXV0gOiB0aGlzLmNhdGVnb3JpZXNbcGFyYW1zWzBdXS5mb3Jtc1twYXJhbXNbMV1dLmZvcm1zW3BhcmFtc1syXV0uZm9ybXNbcGFyYW1zW2xlbmd0aCAtIDFdXTtcclxuICAgIGNvbnN0IGluZGV4ID0gZm9ybXMuZGVmYXVsdFZhbHVlLmZpbmRJbmRleCgoY2hpcCkgPT4gY2hpcC52YWx1ZSA9PT0gZXZlbnQudmFsdWUpXHJcbiAgICBpZiAoaW5kZXggIT09IC0xICYmIGZvcm1zLnR5cGUgPT09ICdjaGVja2JveF9tdWx0aXBsZScpIHtcclxuICAgICAgZm9ybXMuZGVmYXVsdFZhbHVlW2luZGV4XS5jaGVja2VkID0gIWV2ZW50LmNoZWNrZWRcclxuICAgIH0gZWxzZSBpZiAoaW5kZXggIT09IC0xKSB7XHJcbiAgICAgIGZvcm1zLmRlZmF1bHRWYWx1ZS5mb3JFYWNoKCh2YWx1ZSkgPT4ge1xyXG4gICAgICAgIHZhbHVlLmNoZWNrZWQgPSBmYWxzZTtcclxuICAgICAgfSlcclxuICAgICAgZm9ybXMuZGVmYXVsdFZhbHVlW2luZGV4XS5jaGVja2VkID0gIWV2ZW50LmNoZWNrZWRcclxuICAgIH1cclxuICAgIC8vIHRoaXMuZ2V0Q29uZGl0aW9uVmFsdWVzKClcclxuICB9XHJcblxyXG4gIG9wZW5EaWFsb2coKSB7XHJcbiAgICBjb25zdCBkaWFsb2dSZWYgPSB0aGlzLmRpYWxvZy5vcGVuKERpYWxvZ0NyZWF0ZVRlbXBsYXRlQ29tcG9uZW50LCB7XHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICB0YWdzOiB0aGlzLnRhZ3MsXHJcbiAgICAgICAgcHJvZmlsOiB0aGlzLmZvcm0udmFsdWVcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBkaWFsb2dSZWYuYWZ0ZXJDbG9zZWQoKS5zdWJzY3JpYmUoKGN1cnJlbnQ6IGFueSkgPT4ge1xyXG4gICAgICBpZiAoY3VycmVudCkge1xyXG4gICAgICAgIHRoaXMuc2VydmljZS5jdXJyZW50VGVtcGxhdGUubmV4dChjdXJyZW50KTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBvblBhc3NJbkVkaXRNb2RlKGkpIHtcclxuICAgIHRoaXMuY2FuRXhpdCA9IGZhbHNlO1xyXG4gICAgdGhpcy5lZGl0SW5kZXggPSBpO1xyXG4gIH1cclxuXHJcbiAgb25FZGl0KCkge1xyXG4gICAgdGhpcy5lZGl0SW5kZXggPSBudWxsO1xyXG4gIH1cclxuXHJcbiAgb25FZGl0Q2F0ZWdvcnlOYW1lKGksIG5hbWUpIHtcclxuICAgIHRoaXMuY2FuRXhpdCA9IGZhbHNlO1xyXG4gICAgdGhpcy5jYXRlZ29yaWVzW2ldLm5hbWUgPSBuYW1lO1xyXG4gICAgLy8gdGhpcy5nZXRDb25kaXRpb25WYWx1ZXMoKVxyXG4gIH1cclxuICBvbkFjcmVsaW5rKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICB9XHJcblxyXG4gIGdldENvbmRpdGlvblZhbHVlcygpIHtcclxuICAgIGNvbnN0IGNvbmRpdGlvbnNMaXN0OiBhbnkgPSBbXTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jYXRlZ29yaWVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IGNhdGVnb3J5ID0ge1xyXG4gICAgICAgIGxhYmVsOiB0aGlzLmNhdGVnb3JpZXNbaV0ubmFtZSxcclxuICAgICAgICBmb3JtczogW10sXHJcbiAgICAgICAga2V5OiB0aGlzLmNhdGVnb3JpZXNbaV0ua2V5LFxyXG4gICAgICAgIGxvY2F0aW9uOiB7XHJcbiAgICAgICAgICBzMEluZGV4OiBpLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbGV2ZWw6IDAsXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5jYXRlZ29yaWVzW2ldLmZvcm1zLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgY29uc3QgczFGb3JtcyA9IHRoaXMuY2F0ZWdvcmllc1tpXS5mb3Jtc1tqXTtcclxuICAgICAgICBjb25zdCBzMUxvY2F0aW9uID0ge1xyXG4gICAgICAgICAgbGV2ZWw6IDEsXHJcbiAgICAgICAgICBsb2NhdGlvbjoge1xyXG4gICAgICAgICAgICBzMEluZGV4OiBpLFxyXG4gICAgICAgICAgICBzMUluZGV4OiBqLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGtleTogczFGb3Jtcy5rZXksXHJcbiAgICAgICAgICBkZWZhdWx0VmFsdWU6IHMxRm9ybXMuZGVmYXVsdFZhbHVlLFxyXG4gICAgICAgICAgbGFiZWw6IHMxRm9ybXMubGFiZWwsXHJcbiAgICAgICAgICBmb3JtczogW11cclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0ZWdvcnkuZm9ybXMucHVzaChzMUxvY2F0aW9uKVxyXG4gICAgICAgIGlmIChzMUZvcm1zLmZvcm1zKSB7XHJcbiAgICAgICAgICBmb3IgKGxldCBrID0gMDsgayA8IHMxRm9ybXMuZm9ybXMubGVuZ3RoOyBrKyspIHtcclxuICAgICAgICAgICAgY29uc3QgczJGb3JtcyA9IHMxRm9ybXMuZm9ybXNba11cclxuICAgICAgICAgICAgY29uc3QgczJMb2NhdGlvbiA9IHtcclxuICAgICAgICAgICAgICBsZXZlbDogMixcclxuICAgICAgICAgICAgICBsb2NhdGlvbjoge1xyXG4gICAgICAgICAgICAgICAgczBJbmRleDogaSxcclxuICAgICAgICAgICAgICAgIHMxSW5kZXg6IGosXHJcbiAgICAgICAgICAgICAgICBzMkluZGV4OiBrLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlOiBzMkZvcm1zLmRlZmF1bHRWYWx1ZSxcclxuICAgICAgICAgICAgICBsYWJlbDogczJGb3Jtcy5sYWJlbCxcclxuICAgICAgICAgICAgICBrZXk6IHMyRm9ybXMua2V5LFxyXG4gICAgICAgICAgICAgIGZvcm1zOiBbXVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHMxTG9jYXRpb24uZm9ybXMucHVzaChzMkxvY2F0aW9uKVxyXG4gICAgICAgICAgICBpZiAoczJGb3Jtcy5mb3Jtcykge1xyXG4gICAgICAgICAgICAgIGZvciAobGV0IGwgPSAwOyBsIDwgczJGb3Jtcy5mb3Jtcy5sZW5ndGg7IGwrKykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgczNGb3JtcyA9IHMyRm9ybXMuZm9ybXNbbF1cclxuICAgICAgICAgICAgICAgIGNvbnN0IHMzTG9jYXRpb24gPSB7XHJcbiAgICAgICAgICAgICAgICAgIGxldmVsOiAzLFxyXG4gICAgICAgICAgICAgICAgICBsb2NhdGlvbjoge1xyXG4gICAgICAgICAgICAgICAgICAgIHMwSW5kZXg6IGksXHJcbiAgICAgICAgICAgICAgICAgICAgczFJbmRleDogaixcclxuICAgICAgICAgICAgICAgICAgICBzMkluZGV4OiBrLFxyXG4gICAgICAgICAgICAgICAgICAgIHMzSW5kZXg6IGwsXHJcbiAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZTogczNGb3Jtcy5kZWZhdWx0VmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgIGtleTogczNGb3Jtcy5rZXksXHJcbiAgICAgICAgICAgICAgICAgIGxhYmVsOiBzM0Zvcm1zLmxhYmVsLFxyXG4gICAgICAgICAgICAgICAgICBmb3JtczogW11cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHMyTG9jYXRpb24uZm9ybXMucHVzaChzM0xvY2F0aW9uKVxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChzM0xvY2F0aW9uLmZvcm1zKSB7XHJcbiAgICAgICAgICAgICAgICAgIGZvciAobGV0IG0gPSAwOyBtIDwgczNMb2NhdGlvbi5mb3Jtcy5sZW5ndGg7IG0rKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHM0TG9jYXRpb24gPSBzM0xvY2F0aW9uLmZvcm1zW21dXHJcbiAgICAgICAgICAgICAgICAgICAgczNMb2NhdGlvbi5mb3Jtcy5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgIGxldmVsOiA0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgbG9jYXRpb246IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgczBJbmRleDogaSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgczFJbmRleDogaixcclxuICAgICAgICAgICAgICAgICAgICAgICAgczJJbmRleDogayxcclxuICAgICAgICAgICAgICAgICAgICAgICAgczNJbmRleDogbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgczRJbmRleDogbSxcclxuICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU6IHM0TG9jYXRpb24uZGVmYXVsdFZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAga2V5OiBzNExvY2F0aW9uLmtleSxcclxuICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBzNExvY2F0aW9uLmxhYmVsXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBjb25kaXRpb25zTGlzdC5wdXNoKGNhdGVnb3J5KVxyXG4gICAgfVxyXG4gICAgdGhpcy5jb25kaXRpb25EYXRhLmFsbCA9IGNvbmRpdGlvbnNMaXN0O1xyXG5cclxuICB9XHJcblxyXG4gIG9uU2VsZWN0Q29uZGl0aW9uKGxldmVsLCBzdWJMZXZlbCwgdmFsdWUpIHtcclxuICAgIGNvbnN0IGNvbmRpdGlvbiA9IHRoaXMuY29uZGl0aW9uRGF0YVtsZXZlbF0uZmluZCgoZGF0YSkgPT4gZGF0YS5rZXkgPT09IHZhbHVlKTtcclxuICAgIGlmIChsZXZlbCA9PT0gXCJhbGxcIikge1xyXG4gICAgICB0aGlzLmNvbmRpdGlvbkRhdGEgPSB7XHJcbiAgICAgICAgLi4udGhpcy5jb25kaXRpb25EYXRhLFxyXG4gICAgICAgIHMxOiBbXSxcclxuICAgICAgICBzMjogW10sXHJcbiAgICAgICAgczM6IFtdLFxyXG4gICAgICAgIGRlZmF1bHRWYWx1ZTogW11cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGhpcy5jdXJyZW50RWRpdEJsb2NrLmNvbmRpdGlvbiA9IGNvbmRpdGlvblxyXG4gICAgdGhpcy5vbkdldERlZmF1bHRWYWx1ZSgpXHJcbiAgICBpZiAoY29uZGl0aW9uLmZvcm1zLmxlbmd0aCA+IDApIHtcclxuICAgICAgdGhpcy5jb25kaXRpb25EYXRhW3N1YkxldmVsXSA9IGNvbmRpdGlvbi5mb3JtcztcclxuICAgIH1cclxuICAgIC8vIGlmIChjb25kaXRpb24pIHtcclxuICAgIC8vICAgaWYgKGNvbmRpdGlvbi5mb3Jtcy5sZW5ndGggPiAwKSB7XHJcbiAgICAvLyAgICAgdGhpcy5jb25kaXRpb25EYXRhW3N1YkxldmVsXSA9IGNvbmRpdGlvbi5mb3JtcztcclxuICAgIC8vICAgfSBlbHNlIHtcclxuICAgIC8vICAgICBjb25zdCBvYmplY3RBcnJheSA9IE9iamVjdC5lbnRyaWVzKHRoaXMuY3VycmVudEVkaXRCbG9jay5jb25kaXRpb24pXHJcbiAgICAvLyAgICAgY29uc3QgbGFzdFZhbHVlOiBhbnkgPSBvYmplY3RBcnJheVtvYmplY3RBcnJheS5sZW5ndGggLSAxXVsxXVxyXG4gICAgLy8gICAgIHRoaXMuY3VycmVudEVkaXRCbG9jay5jb25kaXRpb24uZGVmYXVsdFZhbHVlID0gbGFzdFZhbHVlLmRlZmF1bHRWYWx1ZSB8fCBbXVxyXG4gICAgLy8gICB9XHJcbiAgICAvLyB9XHJcblxyXG5cclxuICB9XHJcbiAgb25HZXREZWZhdWx0VmFsdWUoKSB7XHJcbiAgICBpZiAodGhpcy5jdXJyZW50RWRpdEJsb2NrLmlzQ29uZGl0aW9uYWwgJiYgdGhpcy5jdXJyZW50RWRpdEJsb2NrPy5jb25kaXRpb24/LmxvY2F0aW9uKSB7XHJcbiAgICAgIGNvbnN0IHsgczBJbmRleCwgLi4ucmVzdCB9ID0gdGhpcy5jdXJyZW50RWRpdEJsb2NrLmNvbmRpdGlvbi5sb2NhdGlvblxyXG4gICAgICBsZXQgY3VycmVudERhdGEgPSB0aGlzLmNhdGVnb3JpZXNbczBJbmRleF07XHJcbiAgICAgIGZvciAoY29uc3Qga2V5IGluIHJlc3QpIHtcclxuICAgICAgICBpZiAoY3VycmVudERhdGEuZm9ybXNbcmVzdFtrZXldXSkge1xyXG4gICAgICAgICAgY3VycmVudERhdGEgPSBjdXJyZW50RGF0YS5mb3Jtc1tyZXN0W2tleV1dXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBjdXJyZW50RGF0YS5kZWZhdWx0VmFsdWUgfHwgW11cclxuICAgIH1cclxuICAgIHJldHVybiBbXVxyXG4gIH1cclxuXHJcbiAgb25BY3RpdmVNZW51KGNhdCwgaSwgZXZlbnQgPSBudWxsKSB7XHJcbiAgICB0aGlzLmVkaXRJbmRleCA9IGk7XHJcbiAgICB0aGlzLnBhcmFtc0luZGV4ID0gW2ldO1xyXG4gICAgdGhpcy5vbkV4cGVuZE1vcmUoeyBmaWVsZDogY2F0IH0sIGkpO1xyXG4gICAgdGhpcy5vblNob3dTZWN0aW9uKGV2ZW50KTtcclxuICAgIHRoaXMuY3VycmVudEVkaXRCbG9jayA9IGNhdDtcclxuICB9XHJcblxyXG4gIGNhdE5hbWVTdGFydChzdHI6IHN0cmluZykge1xyXG4gICAgY29uc3Qgdm93ZWxzID0gWydhJywgJ2UnLCAnaScsICdvJywgJ3UnLCAneSddO1xyXG4gICAgcmV0dXJuIHZvd2Vscy5pbmNsdWRlcyhzdHIuc3Vic3RyKDAsIDEpLnRvTG9jYWxlTG93ZXJDYXNlKCkpXHJcbiAgfVxyXG5cclxuICBvblNob3dTZWN0aW9uKGUpIHtcclxuICAgIGlmIChlKSBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgdGhpcy5pc1NlY3Rpb24gPSB0cnVlO1xyXG4gICAgdGhpcy5pc0Jsb2NrID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBvbkVkaXRCbG9jayhibG9jaywgLi4ucGFyYW1zKSB7XHJcbiAgICBjb25zb2xlLmxvZyhwYXJhbXMpO1xyXG5cclxuICAgIHRoaXMuaXNCbG9jayA9IHRydWU7XHJcbiAgICB0aGlzLmN1cnJlbnRFZGl0QmxvY2sgPSBibG9jaztcclxuICAgIHRoaXMuaXNTZWN0aW9uID0gZmFsc2U7XHJcbiAgICB0aGlzLnBhcmFtc0luZGV4ID0gcGFyYW1zO1xyXG4gICAgdGhpcy5nZXRDb25kaXRpb25WYWx1ZXMoKVxyXG4gIH1cclxuXHJcbiAgb25SZW1vdmVibG9jayhldmVudCwgYmxvY2spIHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgfVxyXG5cclxuICBvblJlbW92ZUZpZWxkQmxvY2soZXZlbnQpIHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zdCBsZW5ndGggPSB0aGlzLnBhcmFtc0luZGV4Lmxlbmd0aDtcclxuICAgIHRoaXMuY2FuRXhpdCA9IGZhbHNlO1xyXG4gICAgY29uc3QgZm9ybXMgPSBsZW5ndGggPT09IDEgPyB0aGlzLmNhdGVnb3JpZXMgOiBsZW5ndGggPT09IDIgPyB0aGlzLmNhdGVnb3JpZXNbdGhpcy5wYXJhbXNJbmRleFswXV0uZm9ybXMgOiBsZW5ndGggPT09IDMgPyB0aGlzLmNhdGVnb3JpZXNbdGhpcy5wYXJhbXNJbmRleFswXV0uZm9ybXNbdGhpcy5wYXJhbXNJbmRleFsxXV0uZm9ybXMgOiB0aGlzLmNhdGVnb3JpZXNbdGhpcy5wYXJhbXNJbmRleFswXV0uZm9ybXNbdGhpcy5wYXJhbXNJbmRleFsxXV0uZm9ybXNbdGhpcy5wYXJhbXNJbmRleFsyXV0uZm9ybXM7XHJcblxyXG4gICAgdGhpcy5jdXJyZW50RWRpdEJsb2NrID0gbnVsbDtcclxuICAgIHRoaXMuaXNCbG9jayA9IGZhbHNlO1xyXG4gICAgdGhpcy5pc1NlY3Rpb24gPSBmYWxzZTtcclxuICAgIHRoaXMub25IaXN0b3JpY3Moe1xyXG4gICAgICBmb3JtOiBmb3Jtcy5zcGxpY2UodGhpcy5wYXJhbXNJbmRleFtsZW5ndGggLSAxXSwgMSlbMF0sXHJcbiAgICAgIG1ldGhvZDogJ3NwbGljZScsXHJcbiAgICAgIGxvY2F0aW9uOiBsZW5ndGggPT09IDEgPyAnY2F0ZWdvcnknIDogJ2Zvcm1zJyxcclxuICAgICAgcGFyYW1zOiB0aGlzLnBhcmFtc0luZGV4XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgb25EdXBsaWNhdGVkQmxvY2soZXZlbnQpIHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zdCBsZW5ndGggPSB0aGlzLnBhcmFtc0luZGV4Lmxlbmd0aDtcclxuICAgIHRoaXMuY2FuRXhpdCA9IGZhbHNlO1xyXG4gICAgY29uc3QgZm9ybXMgPSBsZW5ndGggPT09IDEgPyB0aGlzLmNhdGVnb3JpZXMgOiBsZW5ndGggPT09IDIgPyB0aGlzLmNhdGVnb3JpZXNbdGhpcy5wYXJhbXNJbmRleFswXV0uZm9ybXMgOiBsZW5ndGggPT09IDMgPyB0aGlzLmNhdGVnb3JpZXNbdGhpcy5wYXJhbXNJbmRleFswXV0uZm9ybXNbdGhpcy5wYXJhbXNJbmRleFsxXV0uZm9ybXMgOiB0aGlzLmNhdGVnb3JpZXNbdGhpcy5wYXJhbXNJbmRleFswXV0uZm9ybXNbdGhpcy5wYXJhbXNJbmRleFsxXV0uZm9ybXNbdGhpcy5wYXJhbXNJbmRleFsyXV0uZm9ybXM7XHJcbiAgICBjb25zdCBjbG9uZUVkaXRhYmxlID0gdGhpcy5vbkVkaXRhYmxlQmxvY2soeyAuLi50aGlzLmN1cnJlbnRFZGl0QmxvY2ssIG5hbWU6IHRoaXMuY3VycmVudEVkaXRCbG9jay5uYW1lICsgJyAtIGNvcGllJyB9KVxyXG4gICAgY29uc29sZS5sb2coJy0tLS0tLS13d3d3d3d3d3ctLS0tLS0tLS0tLS0tLS0nLCBjbG9uZUVkaXRhYmxlKTtcclxuICAgIGNvbnN0IGNsb25lQmxvY2sgPSBKU09OLnN0cmluZ2lmeShjbG9uZUVkaXRhYmxlKTtcclxuXHJcblxyXG4gICAgZm9ybXMucHVzaChKU09OLnBhcnNlKGNsb25lQmxvY2spKTtcclxuICAgIHRoaXMuY3VycmVudEVkaXRCbG9jayA9IGZvcm1zLmF0KC0xKTtcclxuICAgIGNvbnN0IHBhcmFtczogbnVtYmVyW10gPSBbLi4udGhpcy5wYXJhbXNJbmRleF1cclxuICAgIHBhcmFtcy5wb3AoKTtcclxuICAgIHBhcmFtcy5wdXNoKGZvcm1zLmxlbmd0aCAtIDEpO1xyXG4gICAgdGhpcy5vbkhpc3Rvcmljcyh7XHJcbiAgICAgIGZvcm06IEpTT04ucGFyc2UoY2xvbmVCbG9jayksXHJcbiAgICAgIG1ldGhvZDogJ3B1c2gnLFxyXG4gICAgICBsb2NhdGlvbjogJ2Zvcm1zJyxcclxuICAgICAgcGFyYW1zXHJcbiAgICB9KVxyXG4gICAgLy8gdGhpcy5lZGl0SW5kZXggPSBmb3Jtcy5sZW5ndGggLSAxO1xyXG4gIH1cclxuXHJcbiAgb25FZGl0YWJsZUJsb2NrKG5vdEVkaXRhYmxlQmxvY2s6IGFueSkge1xyXG4gICAgY29uc3QgZWRpdGFibGVGb3JtQmxvY2sgPSBub3RFZGl0YWJsZUJsb2NrLmZvcm1zID8gbm90RWRpdGFibGVCbG9jay5mb3Jtc1xyXG4gICAgICAubWFwKChjYXQpID0+IHtcclxuICAgICAgICBpZiAoY2F0LmZvcm1zKSB7XHJcbiAgICAgICAgICBjb25zdCBmID0gY2F0LmZvcm1zXHJcbiAgICAgICAgICAgIC5tYXAoKHN1YikgPT4ge1xyXG4gICAgICAgICAgICAgIGlmIChzdWIuZm9ybXMpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHMgPSBzdWIuZm9ybXMubWFwKChjaGlsZCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBpZiAoY2hpbGQuZm9ybXMpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgLi4uY2hpbGQsXHJcbiAgICAgICAgICAgICAgICAgICAgICBlZGl0YWJsZTogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC4uLmNoaWxkLCBlZGl0YWJsZTogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAuLi5zdWIsXHJcbiAgICAgICAgICAgICAgICAgIGVkaXRhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICBmb3Jtczogc1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICByZXR1cm4geyAuLi5zdWIsIGVkaXRhYmxlOiB0cnVlIH07XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAuLi5jYXQsXHJcbiAgICAgICAgICAgIGVkaXRhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICBmb3JtczogZlxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4geyAuLi5jYXQsIGVkaXRhYmxlOiB0cnVlIH1cclxuICAgICAgfSkgOiBudWxsO1xyXG4gICAgcmV0dXJuIGVkaXRhYmxlRm9ybUJsb2NrID8geyAuLi5ub3RFZGl0YWJsZUJsb2NrLCBlZGl0YWJsZTogdHJ1ZSwgZm9ybXM6IGVkaXRhYmxlRm9ybUJsb2NrIH0gOiBub3RFZGl0YWJsZUJsb2NrO1xyXG4gIH1cclxuXHJcbiAgb25LZXlVcENoaXAoZXZlbnQsIGZpZWxkKSB7XHJcbiAgICB0aGlzLmNhbkV4aXQgPSBmYWxzZTtcclxuICAgIGlmIChldmVudC5rZXkgPT09IFwiO1wiKSB7XHJcbiAgICAgIGNvbnN0IGV4aXN0ID0gZmllbGQuZGVmYXVsdFZhbHVlLmZpbmQoKG9wdCkgPT4gb3B0LnZhbHVlLnRvTG9jYWxlTG93ZXJDYXNlKCkgPT09IGV2ZW50LnRhcmdldC52YWx1ZS5zcGxpdChcIjtcIilbMF0udG9Mb2NhbGVMb3dlckNhc2UoKSk7XHJcbiAgICAgIGlmICghZXhpc3QpIHtcclxuICAgICAgICBmaWVsZC5kZWZhdWx0VmFsdWUucHVzaCh7XHJcbiAgICAgICAgICB2YWx1ZTogZXZlbnQudGFyZ2V0LnZhbHVlLnNwbGl0KFwiO1wiKVswXS5zbGljZSgwLCAyMCksXHJcbiAgICAgICAgICBjaGVja2VkOiBmYWxzZVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGV2ZW50LnRhcmdldC52YWx1ZSA9IFwiXCI7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZXZlbnQudGFyZ2V0LnZhbHVlID0gXCJcIjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gdGhpcy5nZXRDb25kaXRpb25WYWx1ZXMoKVxyXG4gIH1cclxuXHJcbiAgb25FZGl0Q2hpcChjaGlwKSB7XHJcbiAgICBpZiAoY2hpcC52YWx1ZSA9PT0gdGhpcy5jdXJyZW50Q2hpcCkge1xyXG4gICAgICB0aGlzLmN1cnJlbnRDaGlwID0gXCJcIlxyXG4gICAgICB0aGlzLnByZXZWYWx1ZSA9IFwiXCJcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuY3VycmVudENoaXAgPSBjaGlwLnZhbHVlO1xyXG4gICAgICB0aGlzLnByZXZWYWx1ZSA9IGNoaXAudmFsdWVcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGFkZEtleXdvcmRGcm9tSW5wdXRCbG9jayhldmVudDogTWF0Q2hpcElucHV0RXZlbnQsIGZpZWxkLCBwcmV2KSB7XHJcbiAgICB0aGlzLmNhbkV4aXQgPSBmYWxzZTtcclxuICAgIGNvbnN0IGlucHV0ID0gZXZlbnQuaW5wdXQ7XHJcbiAgICBjb25zdCB2YWx1ZSA9IGV2ZW50LnZhbHVlO1xyXG4gICAgaWYgKHZhbHVlKSB7XHJcbiAgICAgIGNvbnN0IHByZXZJbmRleCA9IGZpZWxkLmRlZmF1bHRWYWx1ZT8uZmluZEluZGV4KChvcHQpID0+IG9wdC52YWx1ZS50b0xvY2FsZUxvd2VyQ2FzZSgpID09PSBwcmV2LnRvTG9jYWxlTG93ZXJDYXNlKCkpO1xyXG4gICAgICBpZiAocHJldkluZGV4ICE9PSAtMSkge1xyXG4gICAgICAgIGZpZWxkLmRlZmF1bHRWYWx1ZVtwcmV2SW5kZXhdLnZhbHVlID0gdmFsdWUudHJpbSgpO1xyXG4gICAgICAgIGlucHV0LnZhbHVlID0gXCJcIjtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zdCBleGlzdCA9IGZpZWxkLmRlZmF1bHRWYWx1ZS5maW5kKChvcHQpID0+IG9wdC52YWx1ZS50b0xvY2FsZUxvd2VyQ2FzZSgpID09PSBldmVudC52YWx1ZS50b0xvY2FsZUxvd2VyQ2FzZSgpKTtcclxuICAgICAgICBpZiAoIWV4aXN0KSB7XHJcbiAgICAgICAgICBmaWVsZC5kZWZhdWx0VmFsdWUucHVzaCh7IHZhbHVlOiB2YWx1ZS50cmltKCkuc2xpY2UoMCwgMTUpLCBjaGVja2VkOiBmYWxzZSB9KTtcclxuICAgICAgICAgIGlucHV0LnZhbHVlID0gXCJcIjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgaW5wdXQudmFsdWUgPSBcIlwiO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgIH1cclxuICAgIC8vIHRoaXMuZ2V0Q29uZGl0aW9uVmFsdWVzKClcclxuICB9XHJcblxyXG4gIG9uQ2hlY2tlZENoaXBCbG9jayhldmVudDogYW55LCBmaWVsZCkge1xyXG4gICAgdGhpcy5jYW5FeGl0ID0gZmFsc2U7XHJcbiAgICBjb25zdCBpbmRleCA9IGZpZWxkLmRlZmF1bHRWYWx1ZS5maW5kSW5kZXgoKGNoaXApID0+IGNoaXAudmFsdWUgPT09IGV2ZW50LnZhbHVlKVxyXG4gICAgaWYgKGluZGV4ICE9PSAtMSAmJiBmaWVsZC50eXBlID09PSAnY2hlY2tib3hfbXVsdGlwbGUnKSB7XHJcbiAgICAgIGZpZWxkLmRlZmF1bHRWYWx1ZVtpbmRleF0uY2hlY2tlZCA9ICFldmVudC5jaGVja2VkXHJcbiAgICB9IGVsc2UgaWYgKGluZGV4ICE9PSAtMSkge1xyXG4gICAgICBmaWVsZC5kZWZhdWx0VmFsdWUuZm9yRWFjaCgodmFsdWUpID0+IHtcclxuICAgICAgICB2YWx1ZS5jaGVja2VkID0gZmFsc2U7XHJcbiAgICAgIH0pXHJcbiAgICAgIGZpZWxkLmRlZmF1bHRWYWx1ZVtpbmRleF0uY2hlY2tlZCA9ICFldmVudC5jaGVja2VkXHJcbiAgICB9XHJcbiAgICAvLyB0aGlzLmdldENvbmRpdGlvblZhbHVlcygpXHJcbiAgfVxyXG5cclxuICByZW1vdmVLZXl3b3JkQmxvY2soa2V5d29yZDogYW55LCBmaWVsZCkge1xyXG4gICAgdGhpcy5jYW5FeGl0ID0gZmFsc2U7XHJcbiAgICBmaWVsZC5kZWZhdWx0VmFsdWUgPSBmaWVsZC5kZWZhdWx0VmFsdWUuZmlsdGVyKChvcHRpb24pID0+IG9wdGlvbi52YWx1ZSAhPT0ga2V5d29yZC52YWx1ZSk7XHJcbiAgICAvLyB0aGlzLmdldENvbmRpdGlvblZhbHVlcygpXHJcbiAgfVxyXG5cclxuICBvbkNoYW5nZVR5cGVCbG9jayhmaWVsZCkge1xyXG4gICAgdGhpcy5jYW5FeGl0ID0gZmFsc2U7XHJcbiAgICBpZiAoZmllbGQudHlwZSA9PT0gXCJzZWxlY3RcIiB8fCBmaWVsZC50eXBlID09PSBcInJhZGlvXCIgfHwgZmllbGQudHlwZSA9PT0gXCJjaGVja2JveF9tdWx0aXBsZVwiKSB7XHJcbiAgICAgIGZpZWxkLmRlZmF1bHRWYWx1ZSA9IFtdO1xyXG4gICAgfSBlbHNlIGlmIChmaWVsZC50eXBlID09PSBcImNoZWNrYm94XCIgfHwgZmllbGQudHlwZSA9PT0gXCJ0b2dnbGVcIikge1xyXG4gICAgICBmaWVsZC5kZWZhdWx0VmFsdWUgPSB0cnVlO1xyXG4gICAgICBmaWVsZC52YWx1ZSA9IGZhbHNlO1xyXG4gICAgfSBlbHNlIGlmIChmaWVsZC50eXBlID09PSAnbm9uZScpIHtcclxuICAgICAgZmllbGQuZGVmYXVsdFZhbHVlID0gXCJcIjtcclxuICAgICAgZmllbGQudmFsdWUgPSBcIlwiO1xyXG4gICAgICBmaWVsZC5sYWJlbCA9IFwiQXVjdW5cIjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGZpZWxkLmRlZmF1bHRWYWx1ZSA9IFwiXCI7XHJcbiAgICAgIGZpZWxkLnZhbHVlID0gXCJcIjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uQWRkTmV3U3ViTGV2ZWxGaWVsZEJsb2NrKGV2ZW50KSB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgdGhpcy5jYW5FeGl0ID0gZmFsc2U7XHJcbiAgICBjb25zdCBsZW5ndGggPSB0aGlzLnBhcmFtc0luZGV4Lmxlbmd0aDtcclxuICAgIGNvbnN0IGZvcm1zID0gbGVuZ3RoID09PSAxID8gdGhpcy5jYXRlZ29yaWVzW3RoaXMucGFyYW1zSW5kZXhbMF1dIDogbGVuZ3RoID09PSAyID8gdGhpcy5jYXRlZ29yaWVzW3RoaXMucGFyYW1zSW5kZXhbMF1dLmZvcm1zW3RoaXMucGFyYW1zSW5kZXhbbGVuZ3RoIC0gMV1dIDogbGVuZ3RoID09PSAzID8gdGhpcy5jYXRlZ29yaWVzW3RoaXMucGFyYW1zSW5kZXhbMF1dLmZvcm1zW3RoaXMucGFyYW1zSW5kZXhbMV1dLmZvcm1zW3RoaXMucGFyYW1zSW5kZXhbbGVuZ3RoIC0gMV1dIDogdGhpcy5jYXRlZ29yaWVzW3RoaXMucGFyYW1zSW5kZXhbMF1dLmZvcm1zW3RoaXMucGFyYW1zSW5kZXhbMV1dLmZvcm1zW3RoaXMucGFyYW1zSW5kZXhbMl1dLmZvcm1zW3RoaXMucGFyYW1zSW5kZXhbbGVuZ3RoIC0gMV1dO1xyXG4gICAgZm9ybXMuZXhwYW5kTW9yZSA9IHRydWU7XHJcbiAgICBmb3Jtcy5mb3JtcyA9IGZvcm1zLmZvcm1zIHx8IFtdXHJcbiAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICBsYWJlbDogXCJOb3V2ZWxsZSBzb3VzIGNhdMOpZ29yaWUgw6AgcmVub21tZXJcIixcclxuICAgICAga2V5OiBcIk5vdXZlbGxlc291c2NhdMOpZ29yaWXDoHJlbm9tbWVyXCIsXHJcbiAgICAgIGV4cGFuZE9uYm9hcmRpbmc6IHRydWUsXHJcbiAgICAgIGRlZmF1bHRWYWx1ZTogbnVsbCxcclxuICAgICAgdmFsdWU6IHRydWUsXHJcbiAgICAgIHNpemU6IDgwLFxyXG4gICAgICBpc01hbmRhdG9yeTogZmFsc2UsXHJcbiAgICAgIG90aGVyVmFsdWU6ICcnLFxyXG4gICAgICB0eXBlOiBcInRleHRcIixcclxuICAgICAgZWRpdGFibGU6IHRydWUsXHJcbiAgICAgIGlzQ29uZGl0aW9uYWw6IGZhbHNlLFxyXG4gICAgICBjb25kaXRpb25WYWx1ZTogXCJcIixcclxuICAgICAgY29uZGl0aW9uOiB7fSxcclxuICAgICAgZGVsZXRlYWJsZTogdHJ1ZSxcclxuICAgICAgc3ViTGV2ZWw6IDEsXHJcbiAgICAgIGV4cGFuZE1vcmU6IGZhbHNlLFxyXG4gICAgfVxyXG4gICAgZm9ybXMuZm9ybXMucHVzaChkYXRhXHJcbiAgICApXHJcbiAgICB0aGlzLm9uSGlzdG9yaWNzKHtcclxuICAgICAgZm9ybTogZGF0YSxcclxuICAgICAgbWV0aG9kOiAncHVzaCcsXHJcbiAgICAgIGxvY2F0aW9uOiAnZm9ybXMnLFxyXG4gICAgICBwYXJhbXM6IHRoaXMucGFyYW1zSW5kZXhcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuXHJcbiAgb25PcGVuVHlwZURpYWxvZyhmaWVsZCkge1xyXG4gICAgY29uc3QgZGlhbG9nUmVmID0gdGhpcy5kaWFsb2cub3BlbihUeXBlQ29tcG9uZW50LCB7XHJcbiAgICAgIGRhdGE6IHsgc2VsZWN0ZWRUeXBlOiBmaWVsZC50eXBlIH1cclxuICAgIH0pO1xyXG4gICAgZGlhbG9nUmVmLmFmdGVyQ2xvc2VkKCkuc3Vic2NyaWJlKCh0eXBlOiBhbnkpID0+IHtcclxuICAgICAgaWYgKHR5cGUpIHtcclxuICAgICAgICBmaWVsZC50eXBlID0gdHlwZTtcclxuICAgICAgICB0aGlzLm9uQ2hhbmdlVHlwZUJsb2NrKGZpZWxkKVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGZpZWxkV2lkdGgodHlwZTogc3RyaW5nLCBsZW5ndGg6IG51bWJlciwgaW5kZXg6IG51bWJlcikge1xyXG4gICAgaWYgKHR5cGUgPT09ICd0b2dnbGUnKSB7XHJcbiAgICAgIHJldHVybiAnNTAlJ1xyXG4gICAgfSBlbHNlIGlmICh0eXBlID09PSBcInRleHRcIiB8fCB0eXBlID09PSBcImRhdGVcIiB8fCB0eXBlID09PSBcIm5vbmVcIiB8fCB0eXBlID09ICdzZWxlY3QnIHx8IHR5cGUgPT09ICd0ZWwnIHx8IHR5cGUgPT09ICdlbWFpbCcgfHwgdHlwZSA9PT0gJ3Bhc3N3b3JkJyB8fCB0eXBlID09PSAndGV4dGFyZWEnKSB7XHJcbiAgICAgIGlmIChsZW5ndGggPCAzKSB7XHJcbiAgICAgICAgcmV0dXJuICc1MCUnXHJcbiAgICAgIH0gZWxzZSBpZiAobGVuZ3RoID09PSAzKSB7XHJcbiAgICAgICAgcmV0dXJuICczMyUnXHJcbiAgICAgIH0gZWxzZSBpZiAobGVuZ3RoID09PSA0KSB7XHJcbiAgICAgICAgcmV0dXJuICc1MCUnXHJcbiAgICAgIH0gZWxzZSBpZiAobGVuZ3RoID09PSA1KSB7XHJcbiAgICAgICAgcmV0dXJuIGluZGV4IDw9IDIgPyAnMzMlJyA6ICc1MCUnXHJcbiAgICAgIH0gZWxzZSBpZiAobGVuZ3RoID49IDYpIHtcclxuICAgICAgICByZXR1cm4gJzMzJSdcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuICcxMDAlJ1xyXG4gIH1cclxuXHJcbiAgb25DYW5jZWwobGVmdDogYm9vbGVhbikge1xyXG4gICAgaWYgKGxlZnQpIHtcclxuICAgICAgY29uc3QgY3VycmVudCA9IHRoaXMuY3VycmVudENhbmNlbGVkSW5kZXggPT09IG51bGwgPyB0aGlzLmhpc3Rvcmljcy5sZW5ndGggLSAxIDogdGhpcy5jdXJyZW50Q2FuY2VsZWRJbmRleFxyXG4gICAgICBpZiAodGhpcy5oaXN0b3JpY3MubGVuZ3RoID4gMCAmJiBjdXJyZW50ID49IDApIHtcclxuICAgICAgICB0aGlzLmN1cnJlbnRDYW5jZWxlZEluZGV4ID0gY3VycmVudCAtIDE7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCLwn5qAIH4gZmlsZTogdGVtcGxhdGUtcHJvZmlsZS1jcmVhdGUuY29tcG9uZW50LnRzIH4gbGluZSAxOTAyIH4gVGVtcGxhdGVQcm9maWxlQ3JlYXRlQ29tcG9uZW50IH4gb25DYW5jZWwgfiB0aGlzLmN1cnJlbnRDYW5jZWxlZEluZGV4XCIsIHRoaXMuY3VycmVudENhbmNlbGVkSW5kZXgpXHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5jdXJyZW50Q2FuY2VsZWRJbmRleCk7XHJcbiAgICAgICAgY29uc3QgbGFzdEFjdGlvbiA9IHRoaXMuaGlzdG9yaWNzW2N1cnJlbnRdXHJcbiAgICAgICAgY29uc29sZS5sb2coJ2xhc3RBY3Rpb24gbGVmdCcsIGxhc3RBY3Rpb24pO1xyXG4gICAgICAgIGNvbnN0IHBhcmFtcyA9IGxhc3RBY3Rpb24ucGFyYW1zO1xyXG4gICAgICAgIGNvbnN0IGxlbmd0aCA9IHBhcmFtcy5sZW5ndGg7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2xlbmd0aCcsIGxlbmd0aCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3RoaXMuY2F0ZWdvcmllcycsIHRoaXMuY2F0ZWdvcmllcyk7XHJcbiAgICAgICAgY29uc3QgZm9ybXMgPSBsZW5ndGggPT09IDEgPyB0aGlzLmNhdGVnb3JpZXMgOiBsZW5ndGggPT09IDIgPyB0aGlzLmNhdGVnb3JpZXNbcGFyYW1zWzBdXS5mb3Jtc1twYXJhbXNbMV1dLmZvcm1zIDogdGhpcy5jYXRlZ29yaWVzW3BhcmFtc1swXV0uZm9ybXNbcGFyYW1zWzFdXS5mb3Jtc1twYXJhbXNbMl1dLmZvcm1zO1xyXG4gICAgICAgIGlmIChsYXN0QWN0aW9uLm1ldGhvZCA9PT0gXCJzcGxpY2VcIikge1xyXG4gICAgICAgICAgaWYgKGxlbmd0aCA9PT0gMSAmJiBsYXN0QWN0aW9uLmxvY2F0aW9uID09PSAnY2F0ZWdvcnknKSB7XHJcbiAgICAgICAgICAgIGZvcm1zLnB1c2gobGFzdEFjdGlvbi5mb3JtKVxyXG4gICAgICAgICAgfSBlbHNlIGlmIChsZW5ndGggPT09IDEgJiYgbGFzdEFjdGlvbi5sb2NhdGlvbiA9PT0gJ2Zvcm1zJykge1xyXG4gICAgICAgICAgICBmb3Jtc1twYXJhbXNbMF1dLmZvcm1zLnB1c2gobGFzdEFjdGlvbi5mb3JtKVxyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZm9ybXMucHVzaChsYXN0QWN0aW9uLmZvcm0pXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAobGFzdEFjdGlvbi5sb2NhdGlvbiA9PT0gJ2NhdGVnb3J5Jykge1xyXG4gICAgICAgICAgICB0aGlzLm9uQWN0aXZlTWVudShmb3Jtc1tmb3Jtcy5sZW5ndGggLSAxXSwgZm9ybXMubGVuZ3RoIC0gMSk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLm9uRWRpdEJsb2NrKGZvcm1zW2Zvcm1zLmxlbmd0aCAtIDFdLCBsYXN0QWN0aW9uLnBhcmFtcylcclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgaWYgKGxlbmd0aCA9PT0gMSAmJiBsYXN0QWN0aW9uLmxvY2F0aW9uID09PSAnY2F0ZWdvcnknKSB7XHJcbiAgICAgICAgICAgIGZvcm1zLnNwbGljZShwYXJhbXNbbGVuZ3RoIC0gMV0sIDEpXHJcbiAgICAgICAgICB9IGVsc2UgaWYgKGxlbmd0aCA9PT0gMSAmJiBsYXN0QWN0aW9uLmxvY2F0aW9uID09PSAnZm9ybXMnKSB7XHJcbiAgICAgICAgICAgIGZvcm1zW3BhcmFtc1swXV0uZm9ybXMuc3BsaWNlKHBhcmFtc1tsZW5ndGggLSAxXSwgMSlcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGZvcm1zLnNwbGljZShwYXJhbXNbbGVuZ3RoIC0gMV0sIDEpXHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgdGhpcy5jdXJyZW50RWRpdEJsb2NrID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmICh0aGlzLmN1cnJlbnRDYW5jZWxlZEluZGV4ICE9PSBudWxsICYmIHRoaXMuaGlzdG9yaWNzLmxlbmd0aCA+IHRoaXMuY3VycmVudENhbmNlbGVkSW5kZXgpIHtcclxuICAgICAgICB0aGlzLmN1cnJlbnRDYW5jZWxlZEluZGV4ICs9IDE7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCLwn5qAIH4gZmlsZTogdGVtcGxhdGUtcHJvZmlsZS1jcmVhdGUuY29tcG9uZW50LnRzIH4gbGluZSAxOTIwIH4gVGVtcGxhdGVQcm9maWxlQ3JlYXRlQ29tcG9uZW50IH4gb25DYW5jZWwgfiB0aGlzLmN1cnJlbnRDYW5jZWxlZEluZGV4XCIsIHRoaXMuY3VycmVudENhbmNlbGVkSW5kZXgpXHJcbiAgICAgICAgY29uc3QgbGFzdEFjdGlvbiA9IHRoaXMuaGlzdG9yaWNzW3RoaXMuY3VycmVudENhbmNlbGVkSW5kZXhdXHJcbiAgICAgICAgY29uc29sZS5sb2coJ2xhc3RBY3Rpb24gcmlnaHQnLCBsYXN0QWN0aW9uKTtcclxuICAgICAgICBjb25zdCBwYXJhbXMgPSBsYXN0QWN0aW9uLnBhcmFtcztcclxuICAgICAgICBjb25zdCBsZW5ndGggPSBwYXJhbXMubGVuZ3RoO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdsZW5ndGgnLCBsZW5ndGgpO1xyXG4gICAgICAgIGNvbnN0IGZvcm1zID0gbGVuZ3RoID09PSAxID8gdGhpcy5jYXRlZ29yaWVzIDogbGVuZ3RoID09PSAyID8gdGhpcy5jYXRlZ29yaWVzW3BhcmFtc1swXV0uZm9ybXNbcGFyYW1zWzFdXS5mb3JtcyA6IHRoaXMuY2F0ZWdvcmllc1twYXJhbXNbMF1dLmZvcm1zW3BhcmFtc1sxXV0uZm9ybXNbcGFyYW1zWzJdXS5mb3JtcztcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coJ2Zvcm1zJywgZm9ybXMpO1xyXG4gICAgICAgIGlmIChsYXN0QWN0aW9uLm1ldGhvZCA9PT0gXCJwdXNoXCIpIHtcclxuICAgICAgICAgIGlmIChsZW5ndGggPT09IDEgJiYgbGFzdEFjdGlvbi5sb2NhdGlvbiA9PT0gJ2NhdGVnb3J5Jykge1xyXG4gICAgICAgICAgICBmb3Jtcy5wdXNoKGxhc3RBY3Rpb24uZm9ybSlcclxuICAgICAgICAgIH0gZWxzZSBpZiAobGVuZ3RoID09PSAxICYmIGxhc3RBY3Rpb24ubG9jYXRpb24gPT09ICdmb3JtcycpIHtcclxuICAgICAgICAgICAgZm9ybXNbcGFyYW1zWzBdXS5mb3Jtcy5wdXNoKGxhc3RBY3Rpb24uZm9ybSlcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGZvcm1zLnB1c2gobGFzdEFjdGlvbi5mb3JtKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKGxhc3RBY3Rpb24ubG9jYXRpb24gPT09ICdjYXRlZ29yeScpIHtcclxuICAgICAgICAgICAgdGhpcy5vbkFjdGl2ZU1lbnUoZm9ybXNbZm9ybXMubGVuZ3RoIC0gMV0sIGZvcm1zLmxlbmd0aCAtIDEpO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5vbkVkaXRCbG9jayhmb3Jtc1tmb3Jtcy5sZW5ndGggLSAxXSwgbGFzdEFjdGlvbi5wYXJhbXMpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGlmIChsZW5ndGggPT09IDEgJiYgbGFzdEFjdGlvbi5sb2NhdGlvbiA9PT0gJ2NhdGVnb3J5Jykge1xyXG4gICAgICAgICAgICBmb3Jtcy5zcGxpY2UocGFyYW1zW2xlbmd0aCAtIDFdLCAxKVxyXG4gICAgICAgICAgfSBlbHNlIGlmIChsZW5ndGggPT09IDEgJiYgbGFzdEFjdGlvbi5sb2NhdGlvbiA9PT0gJ2Zvcm1zJykge1xyXG4gICAgICAgICAgICBmb3Jtc1twYXJhbXNbMF1dLmZvcm1zLnNwbGljZShwYXJhbXNbbGVuZ3RoIC0gMV0sIDEpXHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBmb3Jtcy5zcGxpY2UocGFyYW1zW2xlbmd0aCAtIDFdLCAxKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgdGhpcy5jdXJyZW50RWRpdEJsb2NrID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uQ2hlY2tWYWx1ZShldmVudDogYm9vbGVhbikge1xyXG4gICAgdGhpcy5pbnZhbGlkZVZhbHVlID0gZXZlbnQ7XHJcbiAgfVxyXG5cclxuICBvbkhpc3RvcmljcyhkYXRhKSB7XHJcbiAgICBpZiAodGhpcy5jdXJyZW50Q2FuY2VsZWRJbmRleCAhPT0gbnVsbCkge1xyXG4gICAgICB0aGlzLmhpc3RvcmljcyA9IFtdO1xyXG4gICAgICB0aGlzLmN1cnJlbnRDYW5jZWxlZEluZGV4ID0gbnVsbDtcclxuICAgIH1cclxuICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG5cclxuICAgIHRoaXMuaGlzdG9yaWNzLnB1c2goZGF0YSlcclxuICB9XHJcbn1cclxuXHJcblxyXG4iLCI8bWFpbj5cclxuICA8Zm9ybSBbZm9ybUdyb3VwXT1cImZvcm1cIj5cclxuICAgIDxkaXYgY2xhc3M9XCJjYXRlZ29yeVwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwic2lkZS1iYXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwic3VtbWFyeVwiPlxyXG4gICAgICAgICAgPGgzPlxyXG4gICAgICAgICAgICA8c3Bhbj57eyB0aGlzLmZvcm0uZ2V0KFwiTmFtZVwiKS52YWx1ZSB9fTwvc3Bhbj5cclxuICAgICAgICAgICAgPG1hdC1pY29uIChjbGljayk9XCJvcGVuRGlhbG9nKClcIj5lZGl0PC9tYXQtaWNvbj5cclxuICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICA8b2w+XHJcbiAgICAgICAgICAgIDxsaSBjbGFzcz1cImxpLXRpdGxlXCIgW2NsYXNzXT1cImVkaXRJbmRleCA9PT0gaSA/ICdhY3RpdmUnIDogJydcIiAqbmdGb3I9XCJsZXQgY2F0IG9mIGNhdGVnb3JpZXM7IGxldCBpID0gaW5kZXhcIlxyXG4gICAgICAgICAgICAgIChjbGljayk9XCJvbkFjdGl2ZU1lbnUoY2F0LCBpKVwiPlxyXG4gICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gW25neFNjcm9sbFRvXT1cIicjJyArIGNhdC5uYW1lXCI+e3sgY2F0Lm5hbWUgfX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPC9vbD5cclxuICAgICAgICAgIDxidXR0b24gbWF0LWJ1dHRvbiBjbGFzcz1cInJlZ2lzdGVyLWJ1dHRvblwiIHR5cGU9XCJzdWJtaXRcIiAoY2xpY2spPVwib25TdWJtaXQoZmFsc2UpXCI+e3tkcmFmdExhYmVsfX08L2J1dHRvbj5cclxuICAgICAgICAgIDxidXR0b24gbWF0LWJ1dHRvbiBjbGFzcz1cInJlZ2lzdGVyLWJ1dHRvbiBsaXZlLWJ1dHRvblwiIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICAoY2xpY2spPVwib25TdWJtaXQodHJ1ZSlcIj57e2xpdmVMYWJlbH19PC9idXR0b24+XHJcbiAgICAgICAgICA8ZGl2IHN0eWxlPVwiZGlzcGxheTogZmxleDttYXJnaW4tcmlnaHQ6IDE0cHg7XCI+XHJcbiAgICAgICAgICAgIDxidXR0b24gW2Rpc2FibGVkXT1cImN1cnJlbnRDYW5jZWxlZEluZGV4IDwgMCB8fCBoaXN0b3JpY3MubGVuZ3RoPT09MFwiIG1hdC1idXR0b24gc3R5bGU9XCJtYXJnaW4tdG9wOiAxMHB4O1wiXHJcbiAgICAgICAgICAgICAgY2xhc3M9XCJyZWdpc3Rlci1idXR0b24gbGl2ZS1idXR0b25cIiB0eXBlPVwic3VibWl0XCIgKGNsaWNrKT1cIm9uQ2FuY2VsKHRydWUpXCI+XHJcbiAgICAgICAgICAgICAgPG1hdC1pY29uPnJvdGF0ZV9sZWZ0PC9tYXQtaWNvbj5cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b24gW2Rpc2FibGVkXT1cImN1cnJlbnRDYW5jZWxlZEluZGV4PT09aGlzdG9yaWNzLmxlbmd0aC0xIHx8IGN1cnJlbnRDYW5jZWxlZEluZGV4PT09bnVsbFwiIG1hdC1idXR0b25cclxuICAgICAgICAgICAgICBzdHlsZT1cIm1hcmdpbi10b3A6IDEwcHg7XCIgY2xhc3M9XCJyZWdpc3Rlci1idXR0b24gbGl2ZS1idXR0b25cIiB0eXBlPVwic3VibWl0XCIgKGNsaWNrKT1cIm9uQ2FuY2VsKGZhbHNlKVwiPlxyXG4gICAgICAgICAgICAgIDxtYXQtaWNvbj5yb3RhdGVfcmlnaHQ8L21hdC1pY29uPlxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cImZpZWxkc1wiIGNka0Ryb3BMaXN0R3JvdXA+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImZpZWxkcy1pbm5lciBleGFtcGxlLWxpc3QgbXQtMTBcIiBpZD1cImNhdGVnb3JpZXMtaWRcIiAjcGFyZW50TGlzdD1cImNka0Ryb3BMaXN0XCIgY2RrRHJvcExpc3RcclxuICAgICAgICAgIFtjZGtEcm9wTGlzdERhdGFdPVwiY2F0ZWdvcmllc1wiIChjZGtEcm9wTGlzdERyb3BwZWQpPVwiZHJvcCgkZXZlbnQpXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2F0ZWdvcnktaXRlbSBzZWN0aW9uLWl0ZW1cIiAqbmdGb3I9XCJsZXQgY2F0ZWdvcnkgb2YgY2F0ZWdvcmllczsgbGV0IGkgPSBpbmRleFwiIGNka0RyYWdcclxuICAgICAgICAgICAgW2lkXT1cImNhdGVnb3J5Lm5hbWVcIiBbc3R5bGUucGFkZGluZ0JvdHRvbV09XCJjYXRlZ29yeS5leHBhbmRNb3JlID8gJzUwcHgnIDogJzEwcHgnXCJcclxuICAgICAgICAgICAgW2NsYXNzXT1cImVkaXRJbmRleCA9PT0gaSA/ICdhY3RpdmUnIDogJydcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxlZnQtYWN0aW9uIG1vdmUtaWNvbnNcIiBjZGtEcmFnSGFuZGxlPlxyXG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJ0cmFuc3BhcmVudC1idXR0b25cIiBtYXQtcmFpc2VkLWJ1dHRvbiAoY2xpY2spPVwiJGV2ZW50LnByZXZlbnREZWZhdWx0KClcIj5cclxuICAgICAgICAgICAgICAgIDxtYXQtaWNvbiBjbGFzcz1cImRyYWctaWNvblwiPmRyYWdfaW5kaWNhdG9yPC9tYXQtaWNvbj5cclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpZWxkLWl0ZW1cIlxyXG4gICAgICAgICAgICAgICAgKGNsaWNrKT1cIm9uQWN0aXZlTWVudShjYXRlZ29yeSwgaSwgJGV2ZW50KTsgb25FeHBlbmRNb3JlKHsgZXZlbnQ6ICRldmVudCwgZmllbGQ6IGNhdGVnb3J5IH0sIGkpXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImZ1bGwtd2lkdGggaW5wdXQtY2F0ZWdvcnktbmFtZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHt7IGNhdGVnb3J5Lm5hbWUgfX1cclxuICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInN1Yi1jYXRlZ29yeS1uYW1lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgTGlzdGVzIGRlcyBpbmZvcm1hdGlvbnMgbsOpY2Vzc2FpcmVzIHBvdXIgbGEgY3LDqWF0aW9uIGRlIHt7IGNhdE5hbWVTdGFydChjYXRlZ29yeS5uYW1lKSA/IFwibCdcIiArXHJcbiAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnkubmFtZSA6IGNhdGVnb3J5Lm5hbWUgfX1cclxuICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIG1hdC1taW5pLWZhYiBjb2xvcj1cInByaW1hcnlcIiBjbGFzcz1cImV4cGFuZC1idXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAoY2xpY2spPVwib25FeHBlbmRNb3JlKHsgZXZlbnQ6ICRldmVudCwgZmllbGQ6IGNhdGVnb3J5IH0sIGkpXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxtYXQtaWNvbiAqbmdJZj1cIiFjYXRlZ29yeS5leHBhbmRNb3JlXCI+Y2hldnJvbl9yaWdodDwvbWF0LWljb24+XHJcbiAgICAgICAgICAgICAgICAgIDxtYXQtaWNvbiAqbmdJZj1cImNhdGVnb3J5LmV4cGFuZE1vcmVcIj5leHBhbmRfbW9yZTwvbWF0LWljb24+XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2ICNjaGlsZExpc3Q9XCJjZGtEcm9wTGlzdFwiIGNsYXNzPVwiY2hpbGQtbGlzdFwiICpuZ0lmPVwiY2F0ZWdvcnkuZm9ybXNcIiBbY2RrRHJvcExpc3REYXRhXT1cImNhdGVnb3J5LmZvcm1zXCJcclxuICAgICAgICAgICAgICAgIGNka0Ryb3BMaXN0IChjZGtEcm9wTGlzdERyb3BwZWQpPVwiZHJvcCgkZXZlbnQpXCI+XHJcbiAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiY2F0ZWdvcnkuZXhwYW5kTW9yZVwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmllbGQtYm94XCIgKm5nRm9yPVwibGV0IGZpZWxkIG9mIGNhdGVnb3J5LmZvcm1zOyBsZXQgaiA9IGluZGV4XCIgW2lkXT1cImZpZWxkLmtleVwiXHJcbiAgICAgICAgICAgICAgICAgICAgW3N0eWxlLndpZHRoXT1cImZpZWxkLmZvcm1zICYmIGZpZWxkLmZvcm1zLmxlbmd0aD4wID8gJzEwMCUnIDogZmllbGRXaWR0aChmaWVsZC50eXBlLGNhdGVnb3J5LmZvcm1zLmxlbmd0aCxqKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2RrRHJhZz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCIgZmllbGRzLWNvbnRlbnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbY2xhc3NdPVwiZmllbGQuZm9ybXMgJiYgZmllbGQuZm9ybXMubGVuZ3RoPjAgPyAnc3ViLWNhdGVnb3J5LWZvcm1zJyA6JydcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJ1dHRvbi1hY3Rpb25cIiAqbmdJZj1cImZpZWxkLmZvcm1zXCI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJ0cmFuc3BhcmVudC1idXR0b25cIiBtYXQtcmFpc2VkLWJ1dHRvbiAoY2xpY2spPVwiJGV2ZW50LnByZXZlbnREZWZhdWx0KClcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxtYXQtaWNvbiBjbGFzcz1cImRyYWctaWNvblwiPmRyYWdfaW5kaWNhdG9yPC9tYXQtaWNvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZHMtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInN1Yi1oZWFkZXJcIiAqbmdJZj1cImZpZWxkLmZvcm1zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmllbGQtaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiZnVsbC13aWR0aCBpbnB1dC1jYXRlZ29yeS1uYW1lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBmaWVsZC5sYWJlbCB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInN1Yi1jYXRlZ29yeS1uYW1lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBMaXN0ZXMgZGVzIGluZm9ybWF0aW9ucyBuw6ljZXNzYWlyZXMgcG91ciBsYSBjcsOpYXRpb24gZGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IGNhdE5hbWVTdGFydChmaWVsZC5sYWJlbCkgPyBcImwnXCIgKyBmaWVsZC5sYWJlbCA6IGZpZWxkLmxhYmVsIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInRyYW5zcGFyZW50LWJ1dHRvbiBzZXR0aW5nXCIgbWF0LXJhaXNlZC1idXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwiJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7b25FZGl0QmxvY2soZmllbGQsIGksIGopXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG1hdC1pY29uIGNsYXNzPVwic2V0dGluZy1pY29uXCI+c2V0dGluZ3M8L21hdC1pY29uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImV4cGFuZC1idXR0b25cIiBbZGlzYWJsZWRdPVwiIShmaWVsZC5mb3JtcyAmJiBmaWVsZC5mb3Jtcy5sZW5ndGggPiAwKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3N0eWxlLm9wYWNpdHldPVwiZmllbGQuZm9ybXMgJiYgZmllbGQuZm9ybXMubGVuZ3RoID4gMCA/IDEgOiAwXCIgbWF0LW1pbmktZmFiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCIgKGNsaWNrKT1cIm9uRXhwZW5kTW9yZSh7IGV2ZW50OiAkZXZlbnQsIGZpZWxkOiBmaWVsZCB9LCBpLCBqKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxtYXQtaWNvbiAqbmdJZj1cIiFmaWVsZC5leHBhbmRNb3JlXCI+ZXhwYW5kX2xlc3MgPC9tYXQtaWNvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bWF0LWljb24gKm5nSWY9XCJmaWVsZC5leHBhbmRNb3JlXCI+ZXhwYW5kX21vcmUgPC9tYXQtaWNvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGliLXN1Yi1jYXRlZ29yeSBbZmllbGRdPVwiZmllbGRcIiBbbGVuZ3RoXT1cImNhdGVnb3J5Py5mb3Jtcz8ubGVuZ3RoXCIgW2ldPVwiaVwiIFtqXT1cImpcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW2JsaW5rXT1cImNoZWNrQmxpbmsoaiwxKT09PW5ld0ZpZWxkSW5kZXhcIiAob25DaGVja1ZhbHVlKT1cIm9uQ2hlY2tWYWx1ZSgkZXZlbnQpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChvbkFkZEtleXdvcmRGcm9tSW5wdXQpPVwiYWRkS2V5d29yZEZyb21JbnB1dCgkZXZlbnQuZXZlbnQsICRldmVudC5wcmV2LCBpLCBqKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAob25LZXlQcmVzcyk9XCJvbktleVByZXNzKCRldmVudC5ldmVudCwgaSwgailcIiAob25BZGROZXdGaWVsZCk9XCJvbkFkZE5ld0ZpZWxkKGkpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChvblJlbW92ZUZpZWxkKT1cIm9uUmVtb3ZlRmllbGQoaSwgailcIiAob25DaGFuZ2VUeXBlKT1cIm9uQ2hhbmdlVHlwZShmaWVsZC50eXBlLCBpLCBqKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAob25SZW1vdmVLZXl3b3JkKT1cInJlbW92ZUtleXdvcmQoJGV2ZW50LmV2ZW50LCBpLCBqKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAob25BZGROZXdTdWJMZXZlbEZpZWxkKT1cIm9uQWRkTmV3U3ViTGV2ZWxGaWVsZChpLCBqKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAob25FeHBlbmRNb3JlKT1cIm9uRXhwZW5kTW9yZSgkZXZlbnQsIGksIGopXCIgKG9uQ2hhbmdlTGFiZWwpPVwib25DaGFuZ2VMYWJlbCgkZXZlbnQsIGksIGopXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChvbkNoZWNrZWRDaGlwKT1cIm9uQ2hlY2tlZENoaXAoJGV2ZW50LCBpLCBqKVwiIChvbkRyb3ApPVwiZHJvcCgkZXZlbnQpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChvbkNoZWNrZWREZWZhdWx0KT1cIm9uQ2hlY2tlZERlZmF1bHQoJGV2ZW50LCBpLCBqKVwiIChvbkVkaXRCbG9jayk9XCJvbkVkaXRCbG9jayhmaWVsZCwgaSwgailcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW2NvbmRpdGlvbkRhdGFdPVwiY29uZGl0aW9uRGF0YVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiAqbmdJZj1cImZpZWxkLmV4cGFuZE1vcmVcIiBjbGFzcz1cImNoaWxkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgI2NoaWxkTGlzdD1cImNka0Ryb3BMaXN0XCIgY2xhc3M9XCJjaGlsZC1jb250ZW50XCIgKm5nSWY9XCJmaWVsZC5mb3Jtc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2Nka0Ryb3BMaXN0RGF0YV09XCJmaWVsZC5mb3Jtc1wiIGNka0Ryb3BMaXN0IChjZGtEcm9wTGlzdERyb3BwZWQpPVwiZHJvcCgkZXZlbnQpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIlwiIHN0eWxlPVwibWFyZ2luLWJvdHRvbTogMjBweFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqbmdGb3I9XCJsZXQgY2hpbGQgb2YgZmllbGQuZm9ybXM7IGxldCBrID0gaW5kZXhcIiBbaWRdPVwiY2hpbGQua2V5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtzdHlsZS53aWR0aF09XCJjaGlsZC5mb3JtcyAmJiBjaGlsZC5mb3Jtcy5sZW5ndGg+MCA/ICcxMDAlJyA6IGZpZWxkV2lkdGgoY2hpbGQudHlwZSxmaWVsZC5mb3Jtcy5sZW5ndGgsaylcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2RrRHJhZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpZWxkcy1jb250ZW50XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbY2xhc3NdPVwiY2hpbGQuZm9ybXMgJiYgY2hpbGQuZm9ybXMubGVuZ3RoPjAgPyAnc3ViLWNhdGVnb3J5LWZvcm1zJyA6JydcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYnV0dG9uLWFjdGlvbiBjaGlsZC0yLWJhY2tncm91bmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJjaGlsZC5mb3JtcyAmJiBjaGlsZC5mb3Jtcy5sZW5ndGg+MFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInRyYW5zcGFyZW50LWJ1dHRvblwiIG1hdC1yYWlzZWQtYnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjbGljayk9XCIkZXZlbnQucHJldmVudERlZmF1bHQoKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bWF0LWljb24gY2xhc3M9XCJkcmFnLWljb25cIj4gZHJhZ19pbmRpY2F0b3I8L21hdC1pY29uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpZWxkcy1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdWItaGVhZGVyXCIgKm5nSWY9XCJjaGlsZC5mb3JtcyAmJiBjaGlsZC5mb3Jtcy5sZW5ndGg+MFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmllbGQtaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJmdWxsLXdpZHRoIGlucHV0LWNhdGVnb3J5LW5hbWVcIiB0eXBlPVwidGV4dFwiIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtyZWFkb25seV09XCJjYXRlZ29yaWVzLmxlbmd0aCA8IDQgfHwgIWNhdGVnb3J5LmVkaXRhYmxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3JlYWRvbmx5XT1cIiFjYXRlZ29yeS5lZGl0YWJsZVwiIFsobmdNb2RlbCldPVwiY2hpbGQubGFiZWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbbmdNb2RlbE9wdGlvbnNdPVwieyBzdGFuZGFsb25lOiB0cnVlIH1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNhaXNpciBsZSBub20gZGUgbGEgc291cyBjYXTDqWdvcmllXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwic3ViLWNhdGVnb3J5LW5hbWVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTGlzdGVzIGRlcyBpbmZvcm1hdGlvbnMgbsOpY2Vzc2FpcmVzIHBvdXIgbGEgY3LDqWF0aW9uIGRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IGNhdE5hbWVTdGFydChjaGlsZC5sYWJlbCkgPyBcImwnXCIgKyBjaGlsZC5sYWJlbCA6IGNoaWxkLmxhYmVsIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInRyYW5zcGFyZW50LWJ1dHRvbiBzZXR0aW5nXCIgbWF0LXJhaXNlZC1idXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjbGljayk9XCIkZXZlbnQucHJldmVudERlZmF1bHQoKTtvbkVkaXRCbG9jayhjaGlsZCwgaSwgaiwgaylcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxtYXQtaWNvbiBjbGFzcz1cInNldHRpbmctaWNvblwiPnNldHRpbmdzPC9tYXQtaWNvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiZXhwYW5kLWJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbZGlzYWJsZWRdPVwiIShjaGlsZC5mb3JtcyAmJiBjaGlsZC5mb3Jtcy5sZW5ndGggPiAwKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbc3R5bGUub3BhY2l0eV09XCJjaGlsZC5mb3JtcyAmJiBjaGlsZC5mb3Jtcy5sZW5ndGggPiAwID8gMSA6IDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF0LW1pbmktZmFiIGNvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwib25FeHBlbmRNb3JlKHsgZXZlbnQ6ICRldmVudCwgZmllbGQ6IGNoaWxkIH0sIGksIGosIGspXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bWF0LWljb24gKm5nSWY9XCIhY2hpbGQuZXhwYW5kTW9yZVwiPiBleHBhbmRfbGVzcyA8L21hdC1pY29uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG1hdC1pY29uICpuZ0lmPVwiY2hpbGQuZXhwYW5kTW9yZVwiPiBleHBhbmRfbW9yZSA8L21hdC1pY29uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpYi1zdWItY2F0ZWdvcnkgW2ZpZWxkXT1cImNoaWxkXCIgW2xlbmd0aF09XCJmaWVsZD8uZm9ybXM/Lmxlbmd0aFwiIFtpXT1cImpcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbYmxpbmtdPVwiY2hlY2tCbGluayhrLDIpPT09bmV3RmllbGRJbmRleFwiIFtqXT1cImtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAob25DaGVja1ZhbHVlKT1cIm9uQ2hlY2tWYWx1ZSgkZXZlbnQpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKG9uQWRkS2V5d29yZEZyb21JbnB1dCk9XCJhZGRLZXl3b3JkRnJvbUlucHV0KCRldmVudC5ldmVudCwgJGV2ZW50LnByZXYsIGksIGosIGspXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKG9uS2V5UHJlc3MpPVwib25LZXlQcmVzcygkZXZlbnQuZXZlbnQsIGksIGosIGspXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKG9uQWRkTmV3RmllbGQpPVwib25BZGROZXdGaWVsZChpLCBqKVwiIChvblJlbW92ZUZpZWxkKT1cIm9uUmVtb3ZlRmllbGQoaSwgaiwgaylcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAob25DaGFuZ2VUeXBlKT1cIm9uQ2hhbmdlVHlwZShjaGlsZC50eXBlLCBpLCBqLCBrKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChvblJlbW92ZUtleXdvcmQpPVwicmVtb3ZlS2V5d29yZCgkZXZlbnQuZXZlbnQsIGksIGosIGspXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKG9uQWRkTmV3U3ViTGV2ZWxGaWVsZCk9XCJvbkFkZE5ld1N1YkxldmVsRmllbGQoaSwgaiwgaylcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAob25FeHBlbmRNb3JlKT1cIm9uRXhwZW5kTW9yZSgkZXZlbnQsIGksIGosIGspXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKG9uQ2hhbmdlTGFiZWwpPVwib25DaGFuZ2VMYWJlbCgkZXZlbnQsIGksIGosIGspXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKG9uQ2hlY2tlZENoaXApPVwib25DaGVja2VkQ2hpcCgkZXZlbnQsIGksIGosIGspXCIgKG9uRHJvcCk9XCJkcm9wKCRldmVudClcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAob25DaGVja2VkRGVmYXVsdCk9XCJvbkNoZWNrZWREZWZhdWx0KCRldmVudCwgaSwgaiwgaylcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbY29uZGl0aW9uRGF0YV09XCJjb25kaXRpb25EYXRhXCIgKG9uRWRpdEJsb2NrKT1cIm9uRWRpdEJsb2NrKGNoaWxkLCBpLCBqLCBrKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2ICpuZ0lmPVwiY2hpbGQuZXhwYW5kTW9yZVwiIGNsYXNzPVwiY2hpbGRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2hpbGQtY29udGVudFwiICNjaGlsZExpc3Q9XCJjZGtEcm9wTGlzdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqbmdJZj1cImNoaWxkLmZvcm1zICYmIGNoaWxkLmZvcm1zLmxlbmd0aD4wXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtjZGtEcm9wTGlzdERhdGFdPVwiY2hpbGQuZm9ybXNcIiBjZGtEcm9wTGlzdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGNka0Ryb3BMaXN0RHJvcHBlZCk9XCJkcm9wKCRldmVudClcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJcIiAqbmdGb3I9XCJsZXQgYzIgb2YgY2hpbGQuZm9ybXM7IGxldCBsID0gaW5kZXhcIiBbaWRdPVwiYzIua2V5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3N0eWxlLndpZHRoXT1cImMyLmZvcm1zICYmIGMyLmZvcm1zLmxlbmd0aD4wID8gJzEwMCUnIDogZmllbGRXaWR0aChjMi50eXBlLGNoaWxkLmZvcm1zLmxlbmd0aCxsKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNka0RyYWc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpZWxkcy1jb250ZW50XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtjbGFzc109XCJjMi5mb3JtcyAmJiBjMi5mb3Jtcy5sZW5ndGg+MCA/ICdzdWItY2F0ZWdvcnktZm9ybXMnIDonJ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJ1dHRvbi1hY3Rpb24gY2hpbGQtMy1iYWNrZ3JvdW5kXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJjMi5mb3JtcyAmJiBjMi5mb3Jtcy5sZW5ndGg+MFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwidHJhbnNwYXJlbnQtYnV0dG9uXCIgbWF0LXJhaXNlZC1idXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwiJGV2ZW50LnByZXZlbnREZWZhdWx0KClcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bWF0LWljb24gY2xhc3M9XCJkcmFnLWljb25cIj4gZHJhZ19pbmRpY2F0b3IgPC9tYXQtaWNvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZHMtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaWItc3ViLWNhdGVnb3J5IFtmaWVsZF09XCJjMlwiIFtsZW5ndGhdPVwiY2hpbGQ/LmZvcm1zPy5sZW5ndGhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtibGlua109XCJjaGVja0JsaW5rKGwsMyk9PT1uZXdGaWVsZEluZGV4XCIgW2ldPVwia1wiIFtqXT1cImxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChvbkNoZWNrVmFsdWUpPVwib25DaGVja1ZhbHVlKCRldmVudClcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChvbkFkZEtleXdvcmRGcm9tSW5wdXQpPVwiYWRkS2V5d29yZEZyb21JbnB1dCgkZXZlbnQuZXZlbnQsICRldmVudC5wcmV2LCBpLCBqLCBrLCBsKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKG9uS2V5UHJlc3MpPVwib25LZXlQcmVzcygkZXZlbnQuZXZlbnQsIGksIGosIGssIGwpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAob25BZGROZXdGaWVsZCk9XCJvbkFkZE5ld0ZpZWxkKGksIGosIGspXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAob25SZW1vdmVGaWVsZCk9XCJvblJlbW92ZUZpZWxkKGksIGosIGssIGwpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAob25DaGFuZ2VUeXBlKT1cIm9uQ2hhbmdlVHlwZShjMi50eXBlLCBpLCBqLCBrLCBsKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKG9uUmVtb3ZlS2V5d29yZCk9XCJyZW1vdmVLZXl3b3JkKCRldmVudC5ldmVudCwgaSwgaiwgaywgbClcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChvbkFkZE5ld1N1YkxldmVsRmllbGQpPVwib25BZGROZXdTdWJMZXZlbEZpZWxkKGksIGosIGssIGwpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAob25FeHBlbmRNb3JlKT1cIm9uRXhwZW5kTW9yZSgkZXZlbnQsIGksIGosIGssIGwpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAob25DaGFuZ2VMYWJlbCk9XCJvbkNoYW5nZUxhYmVsKCRldmVudCwgaSwgaiwgaywgbClcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChvbkNoZWNrZWRDaGlwKT1cIm9uQ2hlY2tlZENoaXAoJGV2ZW50LCBpLCBqLCBrLCBsKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKG9uRHJvcCk9XCJkcm9wKCRldmVudClcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChvbkNoZWNrZWREZWZhdWx0KT1cIm9uQ2hlY2tlZERlZmF1bHQoJGV2ZW50LCBpLCBqLCBrLCBsKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKG9uRWRpdEJsb2NrKT1cIm9uRWRpdEJsb2NrKGMyLCBpLCBqLCBrLCBsKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2NvbmRpdGlvbkRhdGFdPVwiY29uZGl0aW9uRGF0YVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjaGlsZFwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpYi1zdWItY2F0ZWdvcnk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhZGQtYnV0dG9uLXN1Yi1jYXRlZ29yeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJjaGlsZD8uZm9ybXM/Lmxlbmd0aCAtIDEgPT09IGxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHN0eWxlPVwibWFyZ2luOiAxMHB4IGF1dG9cIiBtYXQtcmFpc2VkLWJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cIm9uQWRkTmV3RmllbGQoaSwgaiwgaylcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPkFqb3V0ZXIgdW4gY2hhbXA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bWF0LWljb24+IGFkZCA8L21hdC1pY29uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGliLXN1Yi1jYXRlZ29yeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhZGQtYnV0dG9uLXN1Yi1jYXRlZ29yeVwiICpuZ0lmPVwiZmllbGQ/LmZvcm1zPy5sZW5ndGggLSAxID09PSBrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gc3R5bGU9XCJtYXJnaW46IDEwcHggYXV0b1wiIG1hdC1yYWlzZWQtYnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cIm9uQWRkTmV3RmllbGQoaSwgailcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5Bam91dGVyIHVuIGNoYW1wPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxtYXQtaWNvbj5hZGQ8L21hdC1pY29uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGliLXN1Yi1jYXRlZ29yeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYWRkLWJ1dHRvbi1jb250YWluZXIgYWRkLWJ1dHRvbi1zdWItY2F0ZWdvcnlcIiAqbmdJZj1cImNhdGVnb3J5Py5mb3Jtcz8ubGVuZ3RoIC0gMSA9PT0galwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBzdHlsZT1cIm1hcmdpbjogMTBweCBhdXRvOyBwYWRkaW5nOjEwcHggMFwiIGNsYXNzPVwiYWRkLWJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtkaXNhYmxlZF09XCJjYXRlZ29yeT8uZm9ybXM/Lmxlbmd0aCAtIDEgIT09IGpcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbc3R5bGUub3BhY2l0eV09XCJjYXRlZ29yeT8uZm9ybXM/Lmxlbmd0aCAtIDEgPT09IGogPyAxIDogMFwiIG1hdC1yYWlzZWQtYnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJvbkFkZE5ld0ZpZWxkKGkpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPkFqb3V0ZXIgdW4gY2hhbXA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxtYXQtaWNvbj5hZGQ8L21hdC1pY29uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiYWRkLWJ1dHRvbi1jb250YWluZXIgYWRkLWNhdGVnb3J5LWJ1dHRvbiBhZGQtc3RlcFwiPlxyXG4gICAgICAgICAgICA8YnV0dG9uIChjbGljayk9XCJvbkFkZE5ld0NhdGVnb3J5KCRldmVudClcIj5cclxuICAgICAgICAgICAgICBBam91dGVyIHVuZSDDqXRhcGVcclxuICAgICAgICAgICAgICA8bWF0LWljb24+YWRkPC9tYXQtaWNvbj5cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzPVwiZmllbGQtcHJvcGVydHlcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwicHJvcGVydHktY29udGVudFwiICpuZ0lmPVwiaXNCbG9jayAmJiBjdXJyZW50RWRpdEJsb2NrXCI+XHJcbiAgICAgICAgICA8aDM+UGFyYW3DqHRyZSBkdSBibG9jIHt7IGN1cnJlbnRFZGl0QmxvY2subGFiZWwgfX08L2gzPlxyXG4gICAgICAgICAgPGRpdiBzdHlsZT1cIndpZHRoOiAxMDAlO1wiPlxyXG4gICAgICAgICAgICA8bWF0LWZvcm0tZmllbGQgY2xhc3M9XCJmb3JtLWZpZWxkIG1hdC1zZWxlY3QgZnVsbC13aWR0aFwiIHN0eWxlPVwiY3Vyc29yOiBwb2ludGVyXCIgYXBwZWFyYW5jZT1cIm91dGxpbmVcIj5cclxuICAgICAgICAgICAgICA8bWF0LWxhYmVsPlR5cGUgZGUgYmxvYzwvbWF0LWxhYmVsPlxyXG4gICAgICAgICAgICAgIDxtYXQtc2VsZWN0IChjbGljayk9XCJvbk9wZW5UeXBlRGlhbG9nKGN1cnJlbnRFZGl0QmxvY2spXCIgZGlzYWJsZWQ9XCJ0cnVlXCIgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgIFsobmdNb2RlbCldPVwiY3VycmVudEVkaXRCbG9jay50eXBlXCIgKG5nTW9kZWxDaGFuZ2UpPVwib25DaGFuZ2VUeXBlQmxvY2soY3VycmVudEVkaXRCbG9jaylcIlxyXG4gICAgICAgICAgICAgICAgW25nTW9kZWxPcHRpb25zXT1cInsgc3RhbmRhbG9uZTogdHJ1ZSB9XCIgY2xhc3M9XCJzZWxlY3QtdHlwZS1jbGFzc1wiPlxyXG4gICAgICAgICAgICAgICAgPG1hdC1vcHRpb24gdmFsdWU9XCJ0ZXh0XCI+VGV4dCg4MCk8L21hdC1vcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8bWF0LW9wdGlvbiB2YWx1ZT1cInRleHRhcmVhXCI+VGV4dCg4MCspPC9tYXQtb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgPG1hdC1vcHRpb24gdmFsdWU9XCJyYWRpb1wiPlJhZGlvPC9tYXQtb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgPG1hdC1vcHRpb24gdmFsdWU9XCJzZWxlY3RcIj5TZWxlY3RldXI8L21hdC1vcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8bWF0LW9wdGlvbiB2YWx1ZT1cInRvZ2dsZVwiPlRvZ2dsZTwvbWF0LW9wdGlvbj5cclxuICAgICAgICAgICAgICAgIDxtYXQtb3B0aW9uIHZhbHVlPVwiY2hlY2tib3hcIj5DaGVja2JveDwvbWF0LW9wdGlvbj5cclxuICAgICAgICAgICAgICAgIDxtYXQtb3B0aW9uIHZhbHVlPVwiY2hlY2tib3hfbXVsdGlwbGVcIj5DaGVja2JveCBtdWx0aXBsZTwvbWF0LW9wdGlvbj5cclxuICAgICAgICAgICAgICAgIDxtYXQtb3B0aW9uIHZhbHVlPVwiZW1haWxcIj5FbWFpbDwvbWF0LW9wdGlvbj5cclxuICAgICAgICAgICAgICAgIDxtYXQtb3B0aW9uIHZhbHVlPVwicGFzc3dvcmRcIj5QYXNzd29yZDwvbWF0LW9wdGlvbj5cclxuICAgICAgICAgICAgICAgIDxtYXQtb3B0aW9uIHZhbHVlPVwiZGF0ZVwiPkRhdGU8L21hdC1vcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8bWF0LW9wdGlvbiB2YWx1ZT1cInRlbFwiPlBob25lPC9tYXQtb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgPG1hdC1vcHRpb24gdmFsdWU9XCJub25lXCI+QXVjdW48L21hdC1vcHRpb24+XHJcbiAgICAgICAgICAgICAgPC9tYXQtc2VsZWN0PlxyXG4gICAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiY3VycmVudEVkaXRCbG9jay50eXBlIT09J25vbmUnXCI+XHJcbiAgICAgICAgICAgICAgPG1hdC1mb3JtLWZpZWxkIGNsYXNzPVwiZm9ybS1maWVsZCBmdWxsLXdpZHRoXCIgYXBwZWFyYW5jZT1cIm91dGxpbmVcIj5cclxuICAgICAgICAgICAgICAgIDxtYXQtbGFiZWw+Tm9tIC8gTGFiZWw8L21hdC1sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIFsobmdNb2RlbCldPVwiY3VycmVudEVkaXRCbG9jay5sYWJlbFwiIFtuZ01vZGVsT3B0aW9uc109XCJ7IHN0YW5kYWxvbmU6IHRydWUgfVwiIG1hdElucHV0XHJcbiAgICAgICAgICAgICAgICAgIHJlcXVpcmVkIHBsYWNlaG9sZGVyPVwiXCIgLz5cclxuICAgICAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgICAgIDxuZy1jb250YWluZXIgW25nU3dpdGNoXT1cImN1cnJlbnRFZGl0QmxvY2sudHlwZVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiAqbmdTd2l0Y2hDYXNlPVwiJ3RvZ2dsZSdcIiBjbGFzcz1cImZsZXgtYXV0b1wiXHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPVwiZGlzcGxheTogZmxleDthbGlnbi1pdGVtczogZmxleC1lbmQ7bWFyZ2luOiAxMHB4IDA7XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxtYXQtc2xpZGUtdG9nZ2xlIGNsYXNzPVwiZm9ybS1maWVsZFwiIGNvbG9yPVwiIzZGRThEN1wiIFsobmdNb2RlbCldPVwiY3VycmVudEVkaXRCbG9jay5kZWZhdWx0VmFsdWVcIlxyXG4gICAgICAgICAgICAgICAgICAgIFtuZ01vZGVsT3B0aW9uc109XCJ7IHN0YW5kYWxvbmU6IHRydWUgfVwiPlxyXG4gICAgICAgICAgICAgICAgICA8L21hdC1zbGlkZS10b2dnbGU+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPVwibWFyZ2luLWxlZnQ6IDEwcHg7XCI+VmFsZXVyIHBhciBkw6lmYXV0PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2ICpuZ1N3aXRjaENhc2U9XCInY2hlY2tib3gnXCIgY2xhc3M9XCJmbGV4LWF1dG9cIj5cclxuICAgICAgICAgICAgICAgICAgPG1hdC1jaGVja2JveCBjbGFzcz1cImZvcm0tZmllbGRcIiBbKG5nTW9kZWwpXT1cImN1cnJlbnRFZGl0QmxvY2sudmFsdWVcIlxyXG4gICAgICAgICAgICAgICAgICAgIFtuZ01vZGVsT3B0aW9uc109XCJ7IHN0YW5kYWxvbmU6IHRydWUgfVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIENvY2jDqSBwYXIgZMOpZmF1bHRcclxuICAgICAgICAgICAgICAgICAgPC9tYXQtY2hlY2tib3g+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxtYXQtZm9ybS1maWVsZCAqbmdTd2l0Y2hDYXNlPVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWydzZWxlY3QnLCAncmFkaW8nLCAnY2hlY2tib3hfbXVsdGlwbGUnXS5pbmNsdWRlcyhjdXJyZW50RWRpdEJsb2NrLnR5cGUpID8gY3VycmVudEVkaXRCbG9jay50eXBlIDogIWN1cnJlbnRFZGl0QmxvY2sudHlwZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiBjbGFzcz1cImZsZXgtYXV0byBmdWxsLXdpZHRoXCIgYXBwZWFyYW5jZT1cIm91dGxpbmVcIj5cclxuICAgICAgICAgICAgICAgICAgPG1hdC1sYWJlbD4gVmFsZXVyIHBhciBkw6lmYXVsdCA8L21hdC1sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgPG1hdC1jaGlwLWxpc3QgI2NoaWxkTGlzdD1cImNka0Ryb3BMaXN0XCIgW2Nka0Ryb3BMaXN0RGF0YV09XCJjdXJyZW50RWRpdEJsb2NrLmRlZmF1bHRWYWx1ZVwiIGNka0Ryb3BMaXN0XHJcbiAgICAgICAgICAgICAgICAgICAgKGNka0Ryb3BMaXN0RHJvcHBlZCk9XCJkcm9wKCRldmVudClcIiAjY2hpcExpc3QgYXJpYS1sYWJlbD1cIlZpZGVvIGtleXdvcmRzOyBsZXQgaW5kZXg9aW5kZXhcIiBtdWx0aXBsZVxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGFibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPG1hdC1jaGlwIHN0eWxlPVwibWluLWhlaWdodDogMjVweDt3aWR0aDogYXV0bztcIiAqbmdGb3I9XCJsZXQgb3B0aW9uIG9mIGN1cnJlbnRFZGl0QmxvY2suZGVmYXVsdFZhbHVlXCJcclxuICAgICAgICAgICAgICAgICAgICAgIFtzZWxlY3RlZF09XCJvcHRpb24uY2hlY2tlZFwiIFt2YWx1ZV09XCJvcHRpb24udmFsdWVcIiBbcmVtb3ZhYmxlXT1cInRydWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgKGRibGNsaWNrKT1cIm9uQ2hlY2tlZENoaXBCbG9jayhvcHRpb24sIGN1cnJlbnRFZGl0QmxvY2spXCIgKGNsaWNrKT1cIm9uRWRpdENoaXAob3B0aW9uKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAocmVtb3ZlZCk9XCJyZW1vdmVLZXl3b3JkQmxvY2sob3B0aW9uLCBjdXJyZW50RWRpdEJsb2NrKVwiIGNka0RyYWc+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7eyBvcHRpb24udmFsdWUgfX1cclxuICAgICAgICAgICAgICAgICAgICAgIDxtYXQtaWNvbiBtYXRDaGlwUmVtb3ZlPmNhbmNlbDwvbWF0LWljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9tYXQtY2hpcD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgI2NoaXBzSW5wdXQgcGxhY2Vob2xkZXI9XCJhZGQuLi5cIiBbbWF0Q2hpcElucHV0Rm9yXT1cImNoaXBMaXN0XCIgW21hdENoaXBJbnB1dEFkZE9uQmx1cl09XCJ0cnVlXCJcclxuICAgICAgICAgICAgICAgICAgICAgIChtYXRDaGlwSW5wdXRUb2tlbkVuZCk9XCJhZGRLZXl3b3JkRnJvbUlucHV0QmxvY2soJGV2ZW50LCBjdXJyZW50RWRpdEJsb2NrLCBwcmV2VmFsdWUpXCJcclxuICAgICAgICAgICAgICAgICAgICAgIFttYXRDaGlwSW5wdXRTZXBhcmF0b3JLZXlDb2Rlc109XCJzZXBhcmF0b3JLZXlzQ29kZXNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgKGtleXVwKT1cIm9uS2V5VXBDaGlwKCRldmVudCwgY3VycmVudEVkaXRCbG9jaylcIiBbKG5nTW9kZWwpXT1cImN1cnJlbnRDaGlwXCJcclxuICAgICAgICAgICAgICAgICAgICAgIFtuZ01vZGVsT3B0aW9uc109XCJ7IHN0YW5kYWxvbmU6IHRydWUgfVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvbWF0LWNoaXAtbGlzdD5cclxuICAgICAgICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgICAgICAgICA8bWF0LWZvcm0tZmllbGQgKm5nU3dpdGNoQ2FzZT1cIid0ZXh0YXJlYSdcIiBjbGFzcz1cImZvcm0tZmllbGQgZnVsbC13aWR0aFwiIGFwcGVhcmFuY2U9XCJvdXRsaW5lXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxtYXQtbGFiZWw+VmFsZXVyIHBhciBkw6lmYXVsdDwvbWF0LWxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBtYXRJbnB1dCBbbmdNb2RlbE9wdGlvbnNdPVwieyBzdGFuZGFsb25lOiB0cnVlIH1cIlxyXG4gICAgICAgICAgICAgICAgICAgIFsobmdNb2RlbCldPVwiY3VycmVudEVkaXRCbG9jay5kZWZhdWx0VmFsdWVcIiBwbGFjZWhvbGRlcj1cIkRlc2NyaXB0aW9uLi4uXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcblxyXG4gICAgICAgICAgICAgICAgPG1hdC1mb3JtLWZpZWxkICpuZ1N3aXRjaERlZmF1bHQgY2xhc3M9XCJmb3JtLWZpZWxkIGZ1bGwtd2lkdGhcIlxyXG4gICAgICAgICAgICAgICAgICBbc3R5bGUub3BhY2l0eV09XCJjdXJyZW50RWRpdEJsb2NrLnR5cGUgIT09ICd0ZWwnID8gMSA6IDBcIiBhcHBlYXJhbmNlPVwib3V0bGluZVwiPlxyXG4gICAgICAgICAgICAgICAgICA8bWF0LWxhYmVsPlZhbGV1ciBwYXIgZMOpZmF1bHQ8L21hdC1sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0IFt0eXBlXT1cImN1cnJlbnRFZGl0QmxvY2sudHlwZVwiIFtkaXNhYmxlZF09XCJjdXJyZW50RWRpdEJsb2NrLnR5cGUgPT09ICd0ZWwnXCIgbWF0SW5wdXRcclxuICAgICAgICAgICAgICAgICAgICBbbmdNb2RlbE9wdGlvbnNdPVwieyBzdGFuZGFsb25lOiB0cnVlIH1cIiBbKG5nTW9kZWwpXT1cImN1cnJlbnRFZGl0QmxvY2suZGVmYXVsdFZhbHVlXCJcclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFuZGF0b3J5IHRvcC0xMCBib3R0b20tMTBcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0b29nbGUtYnV0dG9uXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuPk9ibGlnYXRvaXJlPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8bWF0LXNsaWRlLXRvZ2dsZSBjb2xvcj1cIiM2RkU4RDdcIiBbKG5nTW9kZWwpXT1cImN1cnJlbnRFZGl0QmxvY2suaXNNYW5kYXRvcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgIFtuZ01vZGVsT3B0aW9uc109XCJ7IHN0YW5kYWxvbmU6IHRydWUgfVwiPlxyXG4gICAgICAgICAgICAgICAgICA8L21hdC1zbGlkZS10b2dnbGU+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFuZGF0b3J5IHRvcC0xMFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRvb2dsZS1idXR0b25cIj5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4+VmlzaWJpbGl0w6kgY29uZGl0aW9ubmVsbGU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDxtYXQtc2xpZGUtdG9nZ2xlIGNvbG9yPVwiIzZGRThEN1wiIFsobmdNb2RlbCldPVwiY3VycmVudEVkaXRCbG9jay5pc0NvbmRpdGlvbmFsXCJcclxuICAgICAgICAgICAgICAgICAgICBbbmdNb2RlbE9wdGlvbnNdPVwieyBzdGFuZGFsb25lOiB0cnVlIH1cIj5cclxuICAgICAgICAgICAgICAgICAgPC9tYXQtc2xpZGUtdG9nZ2xlPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImN1cnJlbnRFZGl0QmxvY2s/LmlzQ29uZGl0aW9uYWxcIj5cclxuICAgICAgICAgICAgICAgIDxtYXQtZm9ybS1maWVsZCBjbGFzcz1cImZvcm0tZmllbGQgbWF0LXNlbGVjdCBmdWxsLXdpZHRoXCIgYXBwZWFyYW5jZT1cIm91dGxpbmVcIj5cclxuICAgICAgICAgICAgICAgICAgPG1hdC1sYWJlbD5TZWxlY3Rpb25uZXogbGEgY2F0w6lnb3JpZTwvbWF0LWxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICA8bWF0LXNlbGVjdCBbKG5nTW9kZWwpXT1cImFsbFwiIFtuZ01vZGVsT3B0aW9uc109XCJ7IHN0YW5kYWxvbmU6IHRydWUgfVwiXHJcbiAgICAgICAgICAgICAgICAgICAgKHNlbGVjdGlvbkNoYW5nZSk9XCJvblNlbGVjdENvbmRpdGlvbignYWxsJywnczEnLCAkZXZlbnQudmFsdWUpXCIgcmVxdWlyZWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPG1hdC1vcHRpb24gKm5nRm9yPVwibGV0IGl0ZW0gb2YgY29uZGl0aW9uRGF0YS5hbGxcIiBbdmFsdWVdPVwiaXRlbS5rZXlcIj57e1xyXG4gICAgICAgICAgICAgICAgICAgICAgaXRlbS5sYWJlbCB9fVxyXG4gICAgICAgICAgICAgICAgICAgIDwvbWF0LW9wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgPC9tYXQtc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgICAgICAgICAgICAgIDxtYXQtZm9ybS1maWVsZCAqbmdJZj1cImNvbmRpdGlvbkRhdGEuczE/Lmxlbmd0aCA+IDBcIiBjbGFzcz1cImZvcm0tZmllbGQgbWF0LXNlbGVjdCBmdWxsLXdpZHRoXCJcclxuICAgICAgICAgICAgICAgICAgYXBwZWFyYW5jZT1cIm91dGxpbmVcIj5cclxuICAgICAgICAgICAgICAgICAgPG1hdC1sYWJlbD5TZWxlY3Rpb25uZXogbGEgc291cyBjYXTDqWdvcmllIChzMSk8L21hdC1sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgPG1hdC1zZWxlY3QgWyhuZ01vZGVsKV09XCJzMVwiIFtuZ01vZGVsT3B0aW9uc109XCJ7IHN0YW5kYWxvbmU6IHRydWUgfVwiXHJcbiAgICAgICAgICAgICAgICAgICAgKHNlbGVjdGlvbkNoYW5nZSk9XCJvblNlbGVjdENvbmRpdGlvbignczEnLCdzMicsICRldmVudC52YWx1ZSlcIiByZXF1aXJlZD5cclxuICAgICAgICAgICAgICAgICAgICA8bWF0LW9wdGlvbiAqbmdGb3I9XCJsZXQgaXRlbSBvZiBjb25kaXRpb25EYXRhLnMxXCIgW3ZhbHVlXT1cIml0ZW0ua2V5XCI+e3tcclxuICAgICAgICAgICAgICAgICAgICAgIGl0ZW0ubGFiZWwgfX1cclxuICAgICAgICAgICAgICAgICAgICA8L21hdC1vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgIDwvbWF0LXNlbGVjdD5cclxuICAgICAgICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgICAgICAgICA8bWF0LWZvcm0tZmllbGQgY2xhc3M9XCJmb3JtLWZpZWxkIG1hdC1zZWxlY3QgZnVsbC13aWR0aFwiICpuZ0lmPVwiY29uZGl0aW9uRGF0YS5zMj8ubGVuZ3RoPjBcIlxyXG4gICAgICAgICAgICAgICAgICBhcHBlYXJhbmNlPVwib3V0bGluZVwiPlxyXG4gICAgICAgICAgICAgICAgICA8bWF0LWxhYmVsPlNlbGVjdGlvbm5leiBsYSBzb3VzIGNhdMOpZ29yaWUgKHMyKTwvbWF0LWxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICA8bWF0LXNlbGVjdCBbKG5nTW9kZWwpXT1cInMyXCIgW25nTW9kZWxPcHRpb25zXT1cInsgc3RhbmRhbG9uZTogdHJ1ZSB9XCJcclxuICAgICAgICAgICAgICAgICAgICAoc2VsZWN0aW9uQ2hhbmdlKT1cIm9uU2VsZWN0Q29uZGl0aW9uKCdzMicsJ3MzJywgJGV2ZW50LnZhbHVlKVwiIHJlcXVpcmVkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxtYXQtb3B0aW9uICpuZ0Zvcj1cImxldCBpdGVtIG9mIGNvbmRpdGlvbkRhdGEuczJcIiBbdmFsdWVdPVwiaXRlbS5rZXlcIj57e1xyXG4gICAgICAgICAgICAgICAgICAgICAgaXRlbS5sYWJlbCB9fVxyXG4gICAgICAgICAgICAgICAgICAgIDwvbWF0LW9wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgPC9tYXQtc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgICAgICAgICAgICAgIDxtYXQtZm9ybS1maWVsZCBjbGFzcz1cImZvcm0tZmllbGQgbWF0LXNlbGVjdCBmdWxsLXdpZHRoXCIgKm5nSWY9XCJjb25kaXRpb25EYXRhLnMzPy5sZW5ndGg+MFwiXHJcbiAgICAgICAgICAgICAgICAgIGFwcGVhcmFuY2U9XCJvdXRsaW5lXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxtYXQtbGFiZWw+U2VsZWN0aW9ubmV6IGxhIHNvdXMgY2F0w6lnb3JpZSAoczMpPC9tYXQtbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgIDxtYXQtc2VsZWN0IFsobmdNb2RlbCldPVwiczNcIiBbbmdNb2RlbE9wdGlvbnNdPVwieyBzdGFuZGFsb25lOiB0cnVlIH1cIlxyXG4gICAgICAgICAgICAgICAgICAgIChzZWxlY3Rpb25DaGFuZ2UpPVwib25TZWxlY3RDb25kaXRpb24oJ3MzJywnczQnLCAkZXZlbnQudmFsdWUpXCIgcmVxdWlyZWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPG1hdC1vcHRpb24gKm5nRm9yPVwibGV0IGl0ZW0gb2YgY29uZGl0aW9uRGF0YS5zM1wiIFt2YWx1ZV09XCJpdGVtLmtleVwiPnt7XHJcbiAgICAgICAgICAgICAgICAgICAgICBpdGVtLmxhYmVsIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPC9tYXQtb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICA8L21hdC1zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG5cclxuICAgICAgICAgICAgICA8bWF0LXJhZGlvLWdyb3VwXHJcbiAgICAgICAgICAgICAgICAqbmdJZj1cImN1cnJlbnRFZGl0QmxvY2suaXNDb25kaXRpb25hbCAmJiBvbkdldERlZmF1bHRWYWx1ZSgpICYmIG9uR2V0RGVmYXVsdFZhbHVlKCk/Lmxlbmd0aD4wXCJcclxuICAgICAgICAgICAgICAgIGFyaWEtbGFiZWxsZWRieT1cImV4YW1wbGUtcmFkaW8tZ3JvdXAtbGFiZWxcIiBjbGFzcz1cImV4YW1wbGUtcmFkaW8tZ3JvdXBcIlxyXG4gICAgICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJjdXJyZW50RWRpdEJsb2NrLmNvbmRpdGlvbi52YWx1ZVwiIFtuZ01vZGVsT3B0aW9uc109XCJ7IHN0YW5kYWxvbmU6IHRydWUgfVwiPlxyXG4gICAgICAgICAgICAgICAgPG1hdC1yYWRpby1idXR0b24gY2xhc3M9XCJleGFtcGxlLXJhZGlvLWJ1dHRvblwiIHN0eWxlPVwibWFyZ2luLXJpZ2h0OiAxMHB4XCJcclxuICAgICAgICAgICAgICAgICAgKm5nRm9yPVwibGV0IGl0ZW0gb2Ygb25HZXREZWZhdWx0VmFsdWUoKVwiIFt2YWx1ZV09XCJpdGVtLnZhbHVlXCI+XHJcbiAgICAgICAgICAgICAgICAgIHt7IGl0ZW0udmFsdWUgfX1cclxuICAgICAgICAgICAgICAgIDwvbWF0LXJhZGlvLWJ1dHRvbj5cclxuICAgICAgICAgICAgICA8L21hdC1yYWRpby1ncm91cD5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYmxvYy1hY3Rpb25cIj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gKm5nSWY9XCJwYXJhbXNJbmRleC5sZW5ndGg8NFwiIG1hdC1idXR0b24gW2Rpc2FibGVkXT1cIiFjdXJyZW50RWRpdEJsb2NrLmVkaXRhYmxlXCJcclxuICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cIm9uQWRkTmV3U3ViTGV2ZWxGaWVsZEJsb2NrKCRldmVudClcIj5Tb3VzLWNhdMOpZ29yaWUgPG1hdC1pY29uPmRldmljZV9odWJcclxuICAgICAgICAgICAgICAgICAgPC9tYXQtaWNvbj48L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gbWF0LWJ1dHRvbiBbZGlzYWJsZWRdPVwiIWN1cnJlbnRFZGl0QmxvY2suZWRpdGFibGVcIiAoY2xpY2spPVwib25EdXBsaWNhdGVkQmxvY2soJGV2ZW50KVwiPkR1cGxpcXVlclxyXG4gICAgICAgICAgICAgICAgICBsZSBibG9jPG1hdC1pY29uPmZpbHRlcl9ub25lPC9tYXQtaWNvbj5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBtYXQtYnV0dG9uIFtkaXNhYmxlZF09XCIhY3VycmVudEVkaXRCbG9jay5lZGl0YWJsZVwiIGNsYXNzPVwiZGVsZXRlLWJsb2NcIlxyXG4gICAgICAgICAgICAgICAgICAoY2xpY2spPVwib25SZW1vdmVGaWVsZEJsb2NrKCRldmVudClcIj5TdXBwcmltZXIgbGUgYmxvYyA8bWF0LWljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIDwvbWF0LWljb24+PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJwcm9wZXJ0eS1jb250ZW50XCIgKm5nSWY9XCJpc1NlY3Rpb24gJiYgY3VycmVudEVkaXRCbG9ja1wiPlxyXG4gICAgICAgICAgPGgzPlBhcmFtw6h0cmUgZGUgbGEgc2VjdGlvbiB7eyBjdXJyZW50RWRpdEJsb2NrLm5hbWUgfX08L2gzPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cIlwiPlxyXG4gICAgICAgICAgICA8bWF0LWZvcm0tZmllbGQgY2xhc3M9XCJmb3JtLWZpZWxkIGZ1bGwtd2lkdGhcIiBhcHBlYXJhbmNlPVwib3V0bGluZVwiPlxyXG4gICAgICAgICAgICAgIDxtYXQtbGFiZWw+Tm9tIGRlIGxhIHNlY3Rpb248L21hdC1sYWJlbD5cclxuICAgICAgICAgICAgICA8aW5wdXQgKG5nTW9kZWxDaGFuZ2UpPVwib25DaGFuZ2VDYXRlZ29yeU5hbWUoKVwiIHR5cGU9XCJ0ZXh0XCIgbWF0SW5wdXQgcmVxdWlyZWQgcGxhY2Vob2xkZXI9XCJcIlxyXG4gICAgICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJjdXJyZW50RWRpdEJsb2NrLm5hbWVcIiBbbmdNb2RlbE9wdGlvbnNdPVwieyBzdGFuZGFsb25lOiB0cnVlIH1cIiAvPlxyXG4gICAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgICA8bWF0LWZvcm0tZmllbGQgY2xhc3M9XCJmb3JtLWZpZWxkIG1hdC1zZWxlY3QgZnVsbC13aWR0aFwiIGFwcGVhcmFuY2U9XCJvdXRsaW5lXCI+XHJcbiAgICAgICAgICAgICAgPG1hdC1sYWJlbD5FcXVpcGUgZGUgZ2VzdGlvbjwvbWF0LWxhYmVsPlxyXG4gICAgICAgICAgICAgIDxtYXQtc2VsZWN0IHJlcXVpcmVkIFsobmdNb2RlbCldPVwiY3VycmVudEVkaXRCbG9jay5zZWxlY3Rvci52YWx1ZVwiXHJcbiAgICAgICAgICAgICAgICBbbmdNb2RlbE9wdGlvbnNdPVwieyBzdGFuZGFsb25lOiB0cnVlIH1cIj5cclxuICAgICAgICAgICAgICAgIDxtYXQtb3B0aW9uIFt2YWx1ZV09XCJpdGVtLnZhbHVlXCIgKm5nRm9yPVwibGV0IGl0ZW0gb2YgY3VycmVudEVkaXRCbG9jay5zZWxlY3Rvci5kZWZhdWx0VmFsdWVcIj57e1xyXG4gICAgICAgICAgICAgICAgICBpdGVtLnZhbHVlIH19PC9tYXQtb3B0aW9uPlxyXG4gICAgICAgICAgICAgIDwvbWF0LXNlbGVjdD5cclxuICAgICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJsb2MtYWN0aW9uXCI+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBtYXQtYnV0dG9uIChjbGljayk9XCJvbkFkZE5ld1N1YkxldmVsRmllbGRCbG9jaygkZXZlbnQpXCI+U291cy1jYXTDqWdvcmllIDxtYXQtaWNvbj5kZXZpY2VfaHViXHJcbiAgICAgICAgICAgICAgICA8L21hdC1pY29uPjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDxidXR0b24gbWF0LWJ1dHRvbiAoY2xpY2spPVwib25EdXBsaWNhdGVkQmxvY2soJGV2ZW50KVwiPkR1cGxpcXVlciBsZSBibG9jPG1hdC1pY29uPmZpbHRlcl9ub25lPC9tYXQtaWNvbj5cclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8YnV0dG9uIFtkaXNhYmxlZF09XCIhY3VycmVudEVkaXRCbG9jay5lZGl0YWJsZVwiIG1hdC1idXR0b24gY2xhc3M9XCJkZWxldGUtYmxvY1wiXHJcbiAgICAgICAgICAgICAgICAoY2xpY2spPVwib25SZW1vdmVGaWVsZEJsb2NrKCRldmVudClcIj5TdXBwcmltZXIgbGUgYmxvYyA8bWF0LWljb24+XHJcbiAgICAgICAgICAgICAgICAgIGRlbGV0ZTwvbWF0LWljb24+PC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9mb3JtPlxyXG48L21haW4+Il19