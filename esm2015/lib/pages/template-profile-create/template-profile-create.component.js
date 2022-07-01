import { __awaiter, __rest } from "tslib";
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
    const _r12 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 17);
    i0.ɵɵlistener("click", function TemplateProfileCreateComponent_li_11_Template_li_click_0_listener() { i0.ɵɵrestoreView(_r12); const cat_r9 = ctx.$implicit; const i_r10 = ctx.index; const ctx_r11 = i0.ɵɵnextContext(); return ctx_r11.onActiveMenu(cat_r9, i_r10); });
    i0.ɵɵelementStart(1, "span");
    i0.ɵɵelementStart(2, "span", 18);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const cat_r9 = ctx.$implicit;
    const i_r10 = ctx.index;
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵclassMap(ctx_r4.editIndex === i_r10 ? "active" : "");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngxScrollTo", "#" + cat_r9.name);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(cat_r9.name);
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
    const _r28 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 42);
    i0.ɵɵelementStart(1, "button", 21);
    i0.ɵɵlistener("click", function TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_div_3_Template_button_click_1_listener($event) { i0.ɵɵrestoreView(_r28); return $event.preventDefault(); });
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
    const _r32 = i0.ɵɵgetCurrentView();
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
    i0.ɵɵlistener("click", function TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_div_5_Template_button_click_7_listener($event) { i0.ɵɵrestoreView(_r32); const ctx_r33 = i0.ɵɵnextContext(); const field_r21 = ctx_r33.$implicit; const j_r22 = ctx_r33.index; const i_r14 = i0.ɵɵnextContext(3).index; const ctx_r31 = i0.ɵɵnextContext(); $event.preventDefault(); return ctx_r31.onEditBlock(field_r21, i_r14, j_r22); });
    i0.ɵɵelementStart(8, "mat-icon", 46);
    i0.ɵɵtext(9, "settings");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "button", 47);
    i0.ɵɵlistener("click", function TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_div_5_Template_button_click_10_listener($event) { i0.ɵɵrestoreView(_r32); const ctx_r36 = i0.ɵɵnextContext(); const field_r21 = ctx_r36.$implicit; const j_r22 = ctx_r36.index; const i_r14 = i0.ɵɵnextContext(3).index; const ctx_r35 = i0.ɵɵnextContext(); return ctx_r35.onExpendMore({ event: $event, field: field_r21 }, i_r14, j_r22); });
    i0.ɵɵtemplate(11, TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_div_5_mat_icon_11_Template, 2, 0, "mat-icon", 28);
    i0.ɵɵtemplate(12, TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_div_5_mat_icon_12_Template, 2, 0, "mat-icon", 28);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const field_r21 = i0.ɵɵnextContext().$implicit;
    const ctx_r24 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1(" ", field_r21.label, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" Listes des informations n\u00E9cessaires pour la cr\u00E9ation de ", ctx_r24.catNameStart(field_r21.label) ? "l'" + field_r21.label : field_r21.label, " ");
    i0.ɵɵadvance(4);
    i0.ɵɵstyleProp("opacity", field_r21.forms && field_r21.forms.length > 0 ? 1 : 0);
    i0.ɵɵproperty("disabled", !(field_r21.forms && field_r21.forms.length > 0));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !field_r21.expandMore);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", field_r21.expandMore);
} }
function TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_div_7_div_1_div_2_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r49 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 56);
    i0.ɵɵelementStart(1, "button", 21);
    i0.ɵɵlistener("click", function TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_div_7_div_1_div_2_div_3_Template_button_click_1_listener($event) { i0.ɵɵrestoreView(_r49); return $event.preventDefault(); });
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
const _c0 = function () { return { standalone: true }; };
function TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_div_7_div_1_div_2_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r54 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 43);
    i0.ɵɵelementStart(1, "div", 44);
    i0.ɵɵelementStart(2, "div");
    i0.ɵɵelementStart(3, "input", 57);
    i0.ɵɵlistener("ngModelChange", function TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_div_7_div_1_div_2_div_5_Template_input_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r54); const child_r42 = i0.ɵɵnextContext().$implicit; return child_r42.label = $event; });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "p", 26);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "button", 45);
    i0.ɵɵlistener("click", function TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_div_7_div_1_div_2_div_5_Template_button_click_6_listener($event) { i0.ɵɵrestoreView(_r54); const ctx_r56 = i0.ɵɵnextContext(); const child_r42 = ctx_r56.$implicit; const k_r43 = ctx_r56.index; const j_r22 = i0.ɵɵnextContext(3).index; const i_r14 = i0.ɵɵnextContext(3).index; const ctx_r55 = i0.ɵɵnextContext(); $event.preventDefault(); return ctx_r55.onEditBlock(child_r42, i_r14, j_r22, k_r43); });
    i0.ɵɵelementStart(7, "mat-icon", 46);
    i0.ɵɵtext(8, "settings");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "button", 47);
    i0.ɵɵlistener("click", function TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_div_7_div_1_div_2_div_5_Template_button_click_9_listener($event) { i0.ɵɵrestoreView(_r54); const ctx_r60 = i0.ɵɵnextContext(); const child_r42 = ctx_r60.$implicit; const k_r43 = ctx_r60.index; const j_r22 = i0.ɵɵnextContext(3).index; const i_r14 = i0.ɵɵnextContext(3).index; const ctx_r59 = i0.ɵɵnextContext(); return ctx_r59.onExpendMore({ event: $event, field: child_r42 }, i_r14, j_r22, k_r43); });
    i0.ɵɵtemplate(10, TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_div_7_div_1_div_2_div_5_mat_icon_10_Template, 2, 0, "mat-icon", 28);
    i0.ɵɵtemplate(11, TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_div_7_div_1_div_2_div_5_mat_icon_11_Template, 2, 0, "mat-icon", 28);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const child_r42 = i0.ɵɵnextContext().$implicit;
    const category_r13 = i0.ɵɵnextContext(6).$implicit;
    const ctx_r45 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("readonly", ctx_r45.categories.length < 4 || !category_r13.editable)("readonly", !category_r13.editable)("ngModel", child_r42.label)("ngModelOptions", i0.ɵɵpureFunction0(10, _c0));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" Listes des informations n\u00E9cessaires pour la cr\u00E9ation de ", ctx_r45.catNameStart(child_r42.label) ? "l'" + child_r42.label : child_r42.label, " ");
    i0.ɵɵadvance(4);
    i0.ɵɵstyleProp("opacity", child_r42.forms && child_r42.forms.length > 0 ? 1 : 0);
    i0.ɵɵproperty("disabled", !(child_r42.forms && child_r42.forms.length > 0));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !child_r42.expandMore);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", child_r42.expandMore);
} }
function TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_div_7_div_1_div_2_div_7_div_1_div_2_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r73 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 62);
    i0.ɵɵelementStart(1, "button", 21);
    i0.ɵɵlistener("click", function TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_div_7_div_1_div_2_div_7_div_1_div_2_div_3_Template_button_click_1_listener($event) { i0.ɵɵrestoreView(_r73); return $event.preventDefault(); });
    i0.ɵɵelementStart(2, "mat-icon", 22);
    i0.ɵɵtext(3, " drag_indicator ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
function TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_div_7_div_1_div_2_div_7_div_1_div_2_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r76 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 63);
    i0.ɵɵelementStart(1, "button", 64);
    i0.ɵɵlistener("click", function TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_div_7_div_1_div_2_div_7_div_1_div_2_div_7_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r76); const k_r43 = i0.ɵɵnextContext(4).index; const j_r22 = i0.ɵɵnextContext(3).index; const i_r14 = i0.ɵɵnextContext(3).index; const ctx_r74 = i0.ɵɵnextContext(); return ctx_r74.onAddNewField(i_r14, j_r22, k_r43); });
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
    const _r80 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 59);
    i0.ɵɵelementStart(1, "div", 34);
    i0.ɵɵelementStart(2, "div", 35);
    i0.ɵɵtemplate(3, TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_div_7_div_1_div_2_div_7_div_1_div_2_div_3_Template, 4, 0, "div", 60);
    i0.ɵɵelementStart(4, "div", 37);
    i0.ɵɵelementStart(5, "lib-sub-category", 61);
    i0.ɵɵlistener("onCheckValue", function TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_div_7_div_1_div_2_div_7_div_1_div_2_Template_lib_sub_category_onCheckValue_5_listener($event) { i0.ɵɵrestoreView(_r80); const ctx_r79 = i0.ɵɵnextContext(10); return ctx_r79.onCheckValue($event); })("onAddKeywordFromInput", function TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_div_7_div_1_div_2_div_7_div_1_div_2_Template_lib_sub_category_onAddKeywordFromInput_5_listener($event) { i0.ɵɵrestoreView(_r80); const l_r69 = ctx.index; const k_r43 = i0.ɵɵnextContext(3).index; const j_r22 = i0.ɵɵnextContext(3).index; const i_r14 = i0.ɵɵnextContext(3).index; const ctx_r81 = i0.ɵɵnextContext(); return ctx_r81.addKeywordFromInput($event.event, $event.prev, i_r14, j_r22, k_r43, l_r69); })("onKeyPress", function TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_div_7_div_1_div_2_div_7_div_1_div_2_Template_lib_sub_category_onKeyPress_5_listener($event) { i0.ɵɵrestoreView(_r80); const l_r69 = ctx.index; const k_r43 = i0.ɵɵnextContext(3).index; const j_r22 = i0.ɵɵnextContext(3).index; const i_r14 = i0.ɵɵnextContext(3).index; const ctx_r85 = i0.ɵɵnextContext(); return ctx_r85.onKeyPress($event.event, i_r14, j_r22, k_r43, l_r69); })("onAddNewField", function TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_div_7_div_1_div_2_div_7_div_1_div_2_Template_lib_sub_category_onAddNewField_5_listener() { i0.ɵɵrestoreView(_r80); const k_r43 = i0.ɵɵnextContext(3).index; const j_r22 = i0.ɵɵnextContext(3).index; const i_r14 = i0.ɵɵnextContext(3).index; const ctx_r89 = i0.ɵɵnextContext(); return ctx_r89.onAddNewField(i_r14, j_r22, k_r43); })("onRemoveField", function TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_div_7_div_1_div_2_div_7_div_1_div_2_Template_lib_sub_category_onRemoveField_5_listener() { i0.ɵɵrestoreView(_r80); const l_r69 = ctx.index; const k_r43 = i0.ɵɵnextContext(3).index; const j_r22 = i0.ɵɵnextContext(3).index; const i_r14 = i0.ɵɵnextContext(3).index; const ctx_r93 = i0.ɵɵnextContext(); return ctx_r93.onRemoveField(i_r14, j_r22, k_r43, l_r69); })("onChangeType", function TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_div_7_div_1_div_2_div_7_div_1_div_2_Template_lib_sub_category_onChangeType_5_listener() { i0.ɵɵrestoreView(_r80); const c2_r68 = ctx.$implicit; const l_r69 = ctx.index; const k_r43 = i0.ɵɵnextContext(3).index; const j_r22 = i0.ɵɵnextContext(3).index; const i_r14 = i0.ɵɵnextContext(3).index; const ctx_r97 = i0.ɵɵnextContext(); return ctx_r97.onChangeType(c2_r68.type, i_r14, j_r22, k_r43, l_r69); })("onRemoveKeyword", function TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_div_7_div_1_div_2_div_7_div_1_div_2_Template_lib_sub_category_onRemoveKeyword_5_listener($event) { i0.ɵɵrestoreView(_r80); const l_r69 = ctx.index; const k_r43 = i0.ɵɵnextContext(3).index; const j_r22 = i0.ɵɵnextContext(3).index; const i_r14 = i0.ɵɵnextContext(3).index; const ctx_r101 = i0.ɵɵnextContext(); return ctx_r101.removeKeyword($event.event, i_r14, j_r22, k_r43, l_r69); })("onAddNewSubLevelField", function TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_div_7_div_1_div_2_div_7_div_1_div_2_Template_lib_sub_category_onAddNewSubLevelField_5_listener() { i0.ɵɵrestoreView(_r80); const l_r69 = ctx.index; const k_r43 = i0.ɵɵnextContext(3).index; const j_r22 = i0.ɵɵnextContext(3).index; const i_r14 = i0.ɵɵnextContext(3).index; const ctx_r105 = i0.ɵɵnextContext(); return ctx_r105.onAddNewSubLevelField(i_r14, j_r22, k_r43, l_r69); })("onExpendMore", function TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_div_7_div_1_div_2_div_7_div_1_div_2_Template_lib_sub_category_onExpendMore_5_listener($event) { i0.ɵɵrestoreView(_r80); const l_r69 = ctx.index; const k_r43 = i0.ɵɵnextContext(3).index; const j_r22 = i0.ɵɵnextContext(3).index; const i_r14 = i0.ɵɵnextContext(3).index; const ctx_r109 = i0.ɵɵnextContext(); return ctx_r109.onExpendMore($event, i_r14, j_r22, k_r43, l_r69); })("onChangeLabel", function TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_div_7_div_1_div_2_div_7_div_1_div_2_Template_lib_sub_category_onChangeLabel_5_listener($event) { i0.ɵɵrestoreView(_r80); const l_r69 = ctx.index; const k_r43 = i0.ɵɵnextContext(3).index; const j_r22 = i0.ɵɵnextContext(3).index; const i_r14 = i0.ɵɵnextContext(3).index; const ctx_r113 = i0.ɵɵnextContext(); return ctx_r113.onChangeLabel($event, i_r14, j_r22, k_r43, l_r69); })("onCheckedChip", function TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_div_7_div_1_div_2_div_7_div_1_div_2_Template_lib_sub_category_onCheckedChip_5_listener($event) { i0.ɵɵrestoreView(_r80); const l_r69 = ctx.index; const k_r43 = i0.ɵɵnextContext(3).index; const j_r22 = i0.ɵɵnextContext(3).index; const i_r14 = i0.ɵɵnextContext(3).index; const ctx_r117 = i0.ɵɵnextContext(); return ctx_r117.onCheckedChip($event, i_r14, j_r22, k_r43, l_r69); })("onDrop", function TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_div_7_div_1_div_2_div_7_div_1_div_2_Template_lib_sub_category_onDrop_5_listener($event) { i0.ɵɵrestoreView(_r80); const ctx_r121 = i0.ɵɵnextContext(10); return ctx_r121.drop($event); })("onCheckedDefault", function TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_div_7_div_1_div_2_div_7_div_1_div_2_Template_lib_sub_category_onCheckedDefault_5_listener($event) { i0.ɵɵrestoreView(_r80); const l_r69 = ctx.index; const k_r43 = i0.ɵɵnextContext(3).index; const j_r22 = i0.ɵɵnextContext(3).index; const i_r14 = i0.ɵɵnextContext(3).index; const ctx_r122 = i0.ɵɵnextContext(); return ctx_r122.onCheckedDefault($event, i_r14, j_r22, k_r43, l_r69); })("onEditBlock", function TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_div_7_div_1_div_2_div_7_div_1_div_2_Template_lib_sub_category_onEditBlock_5_listener() { i0.ɵɵrestoreView(_r80); const c2_r68 = ctx.$implicit; const l_r69 = ctx.index; const k_r43 = i0.ɵɵnextContext(3).index; const j_r22 = i0.ɵɵnextContext(3).index; const i_r14 = i0.ɵɵnextContext(3).index; const ctx_r126 = i0.ɵɵnextContext(); return ctx_r126.onEditBlock(c2_r68, i_r14, j_r22, k_r43, l_r69); });
    i0.ɵɵelement(6, "div", 48);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(7, TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_div_7_div_1_div_2_div_7_div_1_div_2_div_7_Template, 6, 0, "div", 55);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const c2_r68 = ctx.$implicit;
    const l_r69 = ctx.index;
    const ctx_r130 = i0.ɵɵnextContext(3);
    const child_r42 = ctx_r130.$implicit;
    const k_r43 = ctx_r130.index;
    const ctx_r67 = i0.ɵɵnextContext(7);
    i0.ɵɵstyleProp("width", c2_r68.forms && c2_r68.forms.length > 0 ? "100%" : ctx_r67.fieldWidth(c2_r68.type, child_r42.forms.length, l_r69));
    i0.ɵɵproperty("id", c2_r68.key);
    i0.ɵɵadvance(2);
    i0.ɵɵclassMap(c2_r68.forms && c2_r68.forms.length > 0 ? "sub-category-forms" : "");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", c2_r68.forms && c2_r68.forms.length > 0);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("field", c2_r68)("length", child_r42 == null ? null : child_r42.forms == null ? null : child_r42.forms.length)("blink", ctx_r67.checkBlink(l_r69, 3) === ctx_r67.newFieldIndex)("i", k_r43)("j", l_r69)("conditionData", ctx_r67.conditionData);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", (child_r42 == null ? null : child_r42.forms == null ? null : child_r42.forms.length) - 1 === l_r69);
} }
function TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_div_7_div_1_div_2_div_7_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r132 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 50, 31);
    i0.ɵɵlistener("cdkDropListDropped", function TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_div_7_div_1_div_2_div_7_div_1_Template_div_cdkDropListDropped_0_listener($event) { i0.ɵɵrestoreView(_r132); const ctx_r131 = i0.ɵɵnextContext(9); return ctx_r131.drop($event); });
    i0.ɵɵtemplate(2, TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_div_7_div_1_div_2_div_7_div_1_div_2_Template, 8, 13, "div", 58);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const child_r42 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵproperty("cdkDropListData", child_r42.forms);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", child_r42.forms);
} }
function TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_div_7_div_1_div_2_div_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 48);
    i0.ɵɵtemplate(1, TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_div_7_div_1_div_2_div_7_div_1_Template, 3, 2, "div", 49);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const child_r42 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", child_r42.forms && child_r42.forms.length > 0);
} }
function TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_div_7_div_1_div_2_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r137 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 63);
    i0.ɵɵelementStart(1, "button", 64);
    i0.ɵɵlistener("click", function TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_div_7_div_1_div_2_div_8_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r137); const j_r22 = i0.ɵɵnextContext(4).index; const i_r14 = i0.ɵɵnextContext(3).index; const ctx_r135 = i0.ɵɵnextContext(); return ctx_r135.onAddNewField(i_r14, j_r22); });
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
    const _r140 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 52);
    i0.ɵɵelementStart(1, "div", 34);
    i0.ɵɵelementStart(2, "div", 35);
    i0.ɵɵtemplate(3, TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_div_7_div_1_div_2_div_3_Template, 4, 0, "div", 53);
    i0.ɵɵelementStart(4, "div", 37);
    i0.ɵɵtemplate(5, TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_div_7_div_1_div_2_div_5_Template, 12, 11, "div", 38);
    i0.ɵɵelementStart(6, "lib-sub-category", 54);
    i0.ɵɵlistener("onCheckValue", function TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_div_7_div_1_div_2_Template_lib_sub_category_onCheckValue_6_listener($event) { i0.ɵɵrestoreView(_r140); const ctx_r139 = i0.ɵɵnextContext(7); return ctx_r139.onCheckValue($event); })("onAddKeywordFromInput", function TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_div_7_div_1_div_2_Template_lib_sub_category_onAddKeywordFromInput_6_listener($event) { i0.ɵɵrestoreView(_r140); const k_r43 = ctx.index; const j_r22 = i0.ɵɵnextContext(3).index; const i_r14 = i0.ɵɵnextContext(3).index; const ctx_r141 = i0.ɵɵnextContext(); return ctx_r141.addKeywordFromInput($event.event, $event.prev, i_r14, j_r22, k_r43); })("onKeyPress", function TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_div_7_div_1_div_2_Template_lib_sub_category_onKeyPress_6_listener($event) { i0.ɵɵrestoreView(_r140); const k_r43 = ctx.index; const j_r22 = i0.ɵɵnextContext(3).index; const i_r14 = i0.ɵɵnextContext(3).index; const ctx_r144 = i0.ɵɵnextContext(); return ctx_r144.onKeyPress($event.event, i_r14, j_r22, k_r43); })("onAddNewField", function TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_div_7_div_1_div_2_Template_lib_sub_category_onAddNewField_6_listener() { i0.ɵɵrestoreView(_r140); const j_r22 = i0.ɵɵnextContext(3).index; const i_r14 = i0.ɵɵnextContext(3).index; const ctx_r147 = i0.ɵɵnextContext(); return ctx_r147.onAddNewField(i_r14, j_r22); })("onRemoveField", function TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_div_7_div_1_div_2_Template_lib_sub_category_onRemoveField_6_listener() { i0.ɵɵrestoreView(_r140); const k_r43 = ctx.index; const j_r22 = i0.ɵɵnextContext(3).index; const i_r14 = i0.ɵɵnextContext(3).index; const ctx_r150 = i0.ɵɵnextContext(); return ctx_r150.onRemoveField(i_r14, j_r22, k_r43); })("onChangeType", function TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_div_7_div_1_div_2_Template_lib_sub_category_onChangeType_6_listener() { i0.ɵɵrestoreView(_r140); const child_r42 = ctx.$implicit; const k_r43 = ctx.index; const j_r22 = i0.ɵɵnextContext(3).index; const i_r14 = i0.ɵɵnextContext(3).index; const ctx_r153 = i0.ɵɵnextContext(); return ctx_r153.onChangeType(child_r42.type, i_r14, j_r22, k_r43); })("onRemoveKeyword", function TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_div_7_div_1_div_2_Template_lib_sub_category_onRemoveKeyword_6_listener($event) { i0.ɵɵrestoreView(_r140); const k_r43 = ctx.index; const j_r22 = i0.ɵɵnextContext(3).index; const i_r14 = i0.ɵɵnextContext(3).index; const ctx_r156 = i0.ɵɵnextContext(); return ctx_r156.removeKeyword($event.event, i_r14, j_r22, k_r43); })("onAddNewSubLevelField", function TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_div_7_div_1_div_2_Template_lib_sub_category_onAddNewSubLevelField_6_listener() { i0.ɵɵrestoreView(_r140); const k_r43 = ctx.index; const j_r22 = i0.ɵɵnextContext(3).index; const i_r14 = i0.ɵɵnextContext(3).index; const ctx_r159 = i0.ɵɵnextContext(); return ctx_r159.onAddNewSubLevelField(i_r14, j_r22, k_r43); })("onExpendMore", function TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_div_7_div_1_div_2_Template_lib_sub_category_onExpendMore_6_listener($event) { i0.ɵɵrestoreView(_r140); const k_r43 = ctx.index; const j_r22 = i0.ɵɵnextContext(3).index; const i_r14 = i0.ɵɵnextContext(3).index; const ctx_r162 = i0.ɵɵnextContext(); return ctx_r162.onExpendMore($event, i_r14, j_r22, k_r43); })("onChangeLabel", function TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_div_7_div_1_div_2_Template_lib_sub_category_onChangeLabel_6_listener($event) { i0.ɵɵrestoreView(_r140); const k_r43 = ctx.index; const j_r22 = i0.ɵɵnextContext(3).index; const i_r14 = i0.ɵɵnextContext(3).index; const ctx_r165 = i0.ɵɵnextContext(); return ctx_r165.onChangeLabel($event, i_r14, j_r22, k_r43); })("onCheckedChip", function TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_div_7_div_1_div_2_Template_lib_sub_category_onCheckedChip_6_listener($event) { i0.ɵɵrestoreView(_r140); const k_r43 = ctx.index; const j_r22 = i0.ɵɵnextContext(3).index; const i_r14 = i0.ɵɵnextContext(3).index; const ctx_r168 = i0.ɵɵnextContext(); return ctx_r168.onCheckedChip($event, i_r14, j_r22, k_r43); })("onDrop", function TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_div_7_div_1_div_2_Template_lib_sub_category_onDrop_6_listener($event) { i0.ɵɵrestoreView(_r140); const ctx_r171 = i0.ɵɵnextContext(7); return ctx_r171.drop($event); })("onCheckedDefault", function TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_div_7_div_1_div_2_Template_lib_sub_category_onCheckedDefault_6_listener($event) { i0.ɵɵrestoreView(_r140); const k_r43 = ctx.index; const j_r22 = i0.ɵɵnextContext(3).index; const i_r14 = i0.ɵɵnextContext(3).index; const ctx_r172 = i0.ɵɵnextContext(); return ctx_r172.onCheckedDefault($event, i_r14, j_r22, k_r43); })("onEditBlock", function TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_div_7_div_1_div_2_Template_lib_sub_category_onEditBlock_6_listener() { i0.ɵɵrestoreView(_r140); const child_r42 = ctx.$implicit; const k_r43 = ctx.index; const j_r22 = i0.ɵɵnextContext(3).index; const i_r14 = i0.ɵɵnextContext(3).index; const ctx_r175 = i0.ɵɵnextContext(); return ctx_r175.onEditBlock(child_r42, i_r14, j_r22, k_r43); });
    i0.ɵɵtemplate(7, TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_div_7_div_1_div_2_div_7_Template, 2, 1, "div", 40);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(8, TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_div_7_div_1_div_2_div_8_Template, 6, 0, "div", 55);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const child_r42 = ctx.$implicit;
    const k_r43 = ctx.index;
    const ctx_r178 = i0.ɵɵnextContext(3);
    const field_r21 = ctx_r178.$implicit;
    const j_r22 = ctx_r178.index;
    const ctx_r41 = i0.ɵɵnextContext(4);
    i0.ɵɵstyleProp("width", child_r42.forms && child_r42.forms.length > 0 ? "100%" : ctx_r41.fieldWidth(child_r42.type, field_r21.forms.length, k_r43));
    i0.ɵɵproperty("id", child_r42.key);
    i0.ɵɵadvance(2);
    i0.ɵɵclassMap(child_r42.forms && child_r42.forms.length > 0 ? "sub-category-forms" : "");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", child_r42.forms && child_r42.forms.length > 0);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", child_r42.forms && child_r42.forms.length > 0);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("field", child_r42)("length", field_r21 == null ? null : field_r21.forms == null ? null : field_r21.forms.length)("i", j_r22)("blink", ctx_r41.checkBlink(k_r43, 2) === ctx_r41.newFieldIndex)("j", k_r43)("conditionData", ctx_r41.conditionData);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", child_r42.expandMore);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", (field_r21 == null ? null : field_r21.forms == null ? null : field_r21.forms.length) - 1 === k_r43);
} }
function TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_div_7_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r180 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 50, 31);
    i0.ɵɵlistener("cdkDropListDropped", function TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_div_7_div_1_Template_div_cdkDropListDropped_0_listener($event) { i0.ɵɵrestoreView(_r180); const ctx_r179 = i0.ɵɵnextContext(6); return ctx_r179.drop($event); });
    i0.ɵɵtemplate(2, TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_div_7_div_1_div_2_Template, 9, 15, "div", 51);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const field_r21 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵproperty("cdkDropListData", field_r21.forms);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", field_r21.forms);
} }
function TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_div_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 48);
    i0.ɵɵtemplate(1, TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_div_7_div_1_Template, 3, 2, "div", 49);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const field_r21 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", field_r21.forms);
} }
function TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r185 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 65);
    i0.ɵɵelementStart(1, "button", 66);
    i0.ɵɵlistener("click", function TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_div_8_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r185); const i_r14 = i0.ɵɵnextContext(4).index; const ctx_r183 = i0.ɵɵnextContext(); return ctx_r183.onAddNewField(i_r14); });
    i0.ɵɵelementStart(2, "span");
    i0.ɵɵtext(3, "Ajouter un champ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "mat-icon");
    i0.ɵɵtext(5, "add");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const j_r22 = i0.ɵɵnextContext().index;
    const category_r13 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵstyleProp("opacity", (category_r13 == null ? null : category_r13.forms == null ? null : category_r13.forms.length) - 1 === j_r22 ? 1 : 0);
    i0.ɵɵproperty("disabled", (category_r13 == null ? null : category_r13.forms == null ? null : category_r13.forms.length) - 1 !== j_r22);
} }
function TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r189 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 33);
    i0.ɵɵelementStart(1, "div", 34);
    i0.ɵɵelementStart(2, "div", 35);
    i0.ɵɵtemplate(3, TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_div_3_Template, 4, 0, "div", 36);
    i0.ɵɵelementStart(4, "div", 37);
    i0.ɵɵtemplate(5, TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_div_5_Template, 13, 7, "div", 38);
    i0.ɵɵelementStart(6, "lib-sub-category", 39);
    i0.ɵɵlistener("onCheckValue", function TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_Template_lib_sub_category_onCheckValue_6_listener($event) { i0.ɵɵrestoreView(_r189); const ctx_r188 = i0.ɵɵnextContext(4); return ctx_r188.onCheckValue($event); })("onAddKeywordFromInput", function TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_Template_lib_sub_category_onAddKeywordFromInput_6_listener($event) { i0.ɵɵrestoreView(_r189); const j_r22 = ctx.index; const i_r14 = i0.ɵɵnextContext(3).index; const ctx_r190 = i0.ɵɵnextContext(); return ctx_r190.addKeywordFromInput($event.event, $event.prev, i_r14, j_r22); })("onKeyPress", function TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_Template_lib_sub_category_onKeyPress_6_listener($event) { i0.ɵɵrestoreView(_r189); const j_r22 = ctx.index; const i_r14 = i0.ɵɵnextContext(3).index; const ctx_r192 = i0.ɵɵnextContext(); return ctx_r192.onKeyPress($event.event, i_r14, j_r22); })("onAddNewField", function TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_Template_lib_sub_category_onAddNewField_6_listener() { i0.ɵɵrestoreView(_r189); const i_r14 = i0.ɵɵnextContext(3).index; const ctx_r194 = i0.ɵɵnextContext(); return ctx_r194.onAddNewField(i_r14); })("onRemoveField", function TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_Template_lib_sub_category_onRemoveField_6_listener() { i0.ɵɵrestoreView(_r189); const j_r22 = ctx.index; const i_r14 = i0.ɵɵnextContext(3).index; const ctx_r196 = i0.ɵɵnextContext(); return ctx_r196.onRemoveField(i_r14, j_r22); })("onChangeType", function TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_Template_lib_sub_category_onChangeType_6_listener() { i0.ɵɵrestoreView(_r189); const field_r21 = ctx.$implicit; const j_r22 = ctx.index; const i_r14 = i0.ɵɵnextContext(3).index; const ctx_r198 = i0.ɵɵnextContext(); return ctx_r198.onChangeType(field_r21.type, i_r14, j_r22); })("onRemoveKeyword", function TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_Template_lib_sub_category_onRemoveKeyword_6_listener($event) { i0.ɵɵrestoreView(_r189); const j_r22 = ctx.index; const i_r14 = i0.ɵɵnextContext(3).index; const ctx_r200 = i0.ɵɵnextContext(); return ctx_r200.removeKeyword($event.event, i_r14, j_r22); })("onAddNewSubLevelField", function TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_Template_lib_sub_category_onAddNewSubLevelField_6_listener() { i0.ɵɵrestoreView(_r189); const j_r22 = ctx.index; const i_r14 = i0.ɵɵnextContext(3).index; const ctx_r202 = i0.ɵɵnextContext(); return ctx_r202.onAddNewSubLevelField(i_r14, j_r22); })("onExpendMore", function TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_Template_lib_sub_category_onExpendMore_6_listener($event) { i0.ɵɵrestoreView(_r189); const j_r22 = ctx.index; const i_r14 = i0.ɵɵnextContext(3).index; const ctx_r204 = i0.ɵɵnextContext(); return ctx_r204.onExpendMore($event, i_r14, j_r22); })("onChangeLabel", function TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_Template_lib_sub_category_onChangeLabel_6_listener($event) { i0.ɵɵrestoreView(_r189); const j_r22 = ctx.index; const i_r14 = i0.ɵɵnextContext(3).index; const ctx_r206 = i0.ɵɵnextContext(); return ctx_r206.onChangeLabel($event, i_r14, j_r22); })("onCheckedChip", function TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_Template_lib_sub_category_onCheckedChip_6_listener($event) { i0.ɵɵrestoreView(_r189); const j_r22 = ctx.index; const i_r14 = i0.ɵɵnextContext(3).index; const ctx_r208 = i0.ɵɵnextContext(); return ctx_r208.onCheckedChip($event, i_r14, j_r22); })("onDrop", function TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_Template_lib_sub_category_onDrop_6_listener($event) { i0.ɵɵrestoreView(_r189); const ctx_r210 = i0.ɵɵnextContext(4); return ctx_r210.drop($event); })("onCheckedDefault", function TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_Template_lib_sub_category_onCheckedDefault_6_listener($event) { i0.ɵɵrestoreView(_r189); const j_r22 = ctx.index; const i_r14 = i0.ɵɵnextContext(3).index; const ctx_r211 = i0.ɵɵnextContext(); return ctx_r211.onCheckedDefault($event, i_r14, j_r22); })("onEditBlock", function TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_Template_lib_sub_category_onEditBlock_6_listener() { i0.ɵɵrestoreView(_r189); const field_r21 = ctx.$implicit; const j_r22 = ctx.index; const i_r14 = i0.ɵɵnextContext(3).index; const ctx_r213 = i0.ɵɵnextContext(); return ctx_r213.onEditBlock(field_r21, i_r14, j_r22); });
    i0.ɵɵtemplate(7, TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_div_7_Template, 2, 1, "div", 40);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(8, TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_div_8_Template, 6, 3, "div", 41);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const field_r21 = ctx.$implicit;
    const j_r22 = ctx.index;
    const ctx_r215 = i0.ɵɵnextContext(3);
    const category_r13 = ctx_r215.$implicit;
    const i_r14 = ctx_r215.index;
    const ctx_r20 = i0.ɵɵnextContext();
    i0.ɵɵstyleProp("width", field_r21.forms && field_r21.forms.length > 0 ? "100%" : ctx_r20.fieldWidth(field_r21.type, category_r13.forms.length, j_r22));
    i0.ɵɵproperty("id", field_r21.key);
    i0.ɵɵadvance(2);
    i0.ɵɵclassMap(field_r21.forms && field_r21.forms.length > 0 ? "sub-category-forms" : "");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", field_r21.forms);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", field_r21.forms);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("field", field_r21)("length", category_r13 == null ? null : category_r13.forms == null ? null : category_r13.forms.length)("i", i_r14)("j", j_r22)("blink", ctx_r20.checkBlink(j_r22, 1) === ctx_r20.newFieldIndex)("conditionData", ctx_r20.conditionData);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", field_r21.expandMore);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", (category_r13 == null ? null : category_r13.forms == null ? null : category_r13.forms.length) - 1 === j_r22);
} }
function TemplateProfileCreateComponent_div_26_div_15_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_Template, 9, 15, "div", 32);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const category_r13 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", category_r13.forms);
} }
function TemplateProfileCreateComponent_div_26_div_15_Template(rf, ctx) { if (rf & 1) {
    const _r218 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 30, 31);
    i0.ɵɵlistener("cdkDropListDropped", function TemplateProfileCreateComponent_div_26_div_15_Template_div_cdkDropListDropped_0_listener($event) { i0.ɵɵrestoreView(_r218); const ctx_r217 = i0.ɵɵnextContext(2); return ctx_r217.drop($event); });
    i0.ɵɵtemplate(2, TemplateProfileCreateComponent_div_26_div_15_ng_container_2_Template, 2, 1, "ng-container", 28);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const category_r13 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("cdkDropListData", category_r13.forms);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", category_r13.expandMore);
} }
function TemplateProfileCreateComponent_div_26_Template(rf, ctx) { if (rf & 1) {
    const _r221 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 19);
    i0.ɵɵelementStart(1, "div", 20);
    i0.ɵɵelementStart(2, "button", 21);
    i0.ɵɵlistener("click", function TemplateProfileCreateComponent_div_26_Template_button_click_2_listener($event) { i0.ɵɵrestoreView(_r221); return $event.preventDefault(); });
    i0.ɵɵelementStart(3, "mat-icon", 22);
    i0.ɵɵtext(4, "drag_indicator");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 23);
    i0.ɵɵelementStart(6, "div", 24);
    i0.ɵɵlistener("click", function TemplateProfileCreateComponent_div_26_Template_div_click_6_listener($event) { i0.ɵɵrestoreView(_r221); const category_r13 = ctx.$implicit; const i_r14 = ctx.index; const ctx_r222 = i0.ɵɵnextContext(); ctx_r222.onActiveMenu(category_r13, i_r14, $event); return ctx_r222.onExpendMore({ event: $event, field: category_r13 }, i_r14); });
    i0.ɵɵelementStart(7, "div");
    i0.ɵɵelementStart(8, "p", 25);
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "p", 26);
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "button", 27);
    i0.ɵɵlistener("click", function TemplateProfileCreateComponent_div_26_Template_button_click_12_listener($event) { i0.ɵɵrestoreView(_r221); const category_r13 = ctx.$implicit; const i_r14 = ctx.index; const ctx_r223 = i0.ɵɵnextContext(); return ctx_r223.onExpendMore({ event: $event, field: category_r13 }, i_r14); });
    i0.ɵɵtemplate(13, TemplateProfileCreateComponent_div_26_mat_icon_13_Template, 2, 0, "mat-icon", 28);
    i0.ɵɵtemplate(14, TemplateProfileCreateComponent_div_26_mat_icon_14_Template, 2, 0, "mat-icon", 28);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(15, TemplateProfileCreateComponent_div_26_div_15_Template, 3, 2, "div", 29);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const category_r13 = ctx.$implicit;
    const i_r14 = ctx.index;
    const ctx_r6 = i0.ɵɵnextContext();
    i0.ɵɵclassMap(ctx_r6.editIndex === i_r14 ? "active" : "");
    i0.ɵɵstyleProp("padding-bottom", category_r13.expandMore ? "50px" : "10px");
    i0.ɵɵproperty("id", category_r13.name);
    i0.ɵɵadvance(9);
    i0.ɵɵtextInterpolate1(" ", category_r13.name, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" Listes des informations n\u00E9cessaires pour la cr\u00E9ation de ", ctx_r6.catNameStart(category_r13.name) ? "l'" + category_r13.name : category_r13.name, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", !category_r13.expandMore);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", category_r13.expandMore);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", category_r13.forms);
} }
function TemplateProfileCreateComponent_div_33_ng_container_32_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r234 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 100);
    i0.ɵɵelementStart(1, "mat-slide-toggle", 101);
    i0.ɵɵlistener("ngModelChange", function TemplateProfileCreateComponent_div_33_ng_container_32_div_6_Template_mat_slide_toggle_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r234); const ctx_r233 = i0.ɵɵnextContext(3); return ctx_r233.currentEditBlock.defaultValue = $event; });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "span", 102);
    i0.ɵɵtext(3, "Valeur par d\u00E9faut");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r225 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", ctx_r225.currentEditBlock.defaultValue)("ngModelOptions", i0.ɵɵpureFunction0(2, _c0));
} }
function TemplateProfileCreateComponent_div_33_ng_container_32_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r236 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 103);
    i0.ɵɵelementStart(1, "mat-checkbox", 104);
    i0.ɵɵlistener("ngModelChange", function TemplateProfileCreateComponent_div_33_ng_container_32_div_7_Template_mat_checkbox_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r236); const ctx_r235 = i0.ɵɵnextContext(3); return ctx_r235.currentEditBlock.value = $event; });
    i0.ɵɵtext(2, " Coch\u00E9 par d\u00E9fault ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r226 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", ctx_r226.currentEditBlock.value)("ngModelOptions", i0.ɵɵpureFunction0(2, _c0));
} }
function TemplateProfileCreateComponent_div_33_ng_container_32_mat_form_field_8_mat_chip_6_Template(rf, ctx) { if (rf & 1) {
    const _r243 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-chip", 111);
    i0.ɵɵlistener("dblclick", function TemplateProfileCreateComponent_div_33_ng_container_32_mat_form_field_8_mat_chip_6_Template_mat_chip_dblclick_0_listener() { i0.ɵɵrestoreView(_r243); const option_r241 = ctx.$implicit; const ctx_r242 = i0.ɵɵnextContext(4); return ctx_r242.onCheckedChipBlock(option_r241, ctx_r242.currentEditBlock); })("click", function TemplateProfileCreateComponent_div_33_ng_container_32_mat_form_field_8_mat_chip_6_Template_mat_chip_click_0_listener() { i0.ɵɵrestoreView(_r243); const option_r241 = ctx.$implicit; const ctx_r244 = i0.ɵɵnextContext(4); return ctx_r244.onEditChip(option_r241); })("removed", function TemplateProfileCreateComponent_div_33_ng_container_32_mat_form_field_8_mat_chip_6_Template_mat_chip_removed_0_listener() { i0.ɵɵrestoreView(_r243); const option_r241 = ctx.$implicit; const ctx_r245 = i0.ɵɵnextContext(4); return ctx_r245.removeKeywordBlock(option_r241, ctx_r245.currentEditBlock); });
    i0.ɵɵtext(1);
    i0.ɵɵelementStart(2, "mat-icon", 112);
    i0.ɵɵtext(3, "cancel");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const option_r241 = ctx.$implicit;
    i0.ɵɵproperty("selected", option_r241.checked)("value", option_r241.value)("removable", true);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", option_r241.value, " ");
} }
function TemplateProfileCreateComponent_div_33_ng_container_32_mat_form_field_8_Template(rf, ctx) { if (rf & 1) {
    const _r247 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-form-field", 105);
    i0.ɵɵelementStart(1, "mat-label");
    i0.ɵɵtext(2, " Valeur par d\u00E9fault ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "mat-chip-list", 106, 107);
    i0.ɵɵlistener("cdkDropListDropped", function TemplateProfileCreateComponent_div_33_ng_container_32_mat_form_field_8_Template_mat_chip_list_cdkDropListDropped_3_listener($event) { i0.ɵɵrestoreView(_r247); const ctx_r246 = i0.ɵɵnextContext(3); return ctx_r246.drop($event); });
    i0.ɵɵtemplate(6, TemplateProfileCreateComponent_div_33_ng_container_32_mat_form_field_8_mat_chip_6_Template, 4, 4, "mat-chip", 108);
    i0.ɵɵelementStart(7, "input", 109, 110);
    i0.ɵɵlistener("matChipInputTokenEnd", function TemplateProfileCreateComponent_div_33_ng_container_32_mat_form_field_8_Template_input_matChipInputTokenEnd_7_listener($event) { i0.ɵɵrestoreView(_r247); const ctx_r248 = i0.ɵɵnextContext(3); return ctx_r248.addKeywordFromInputBlock($event, ctx_r248.currentEditBlock, ctx_r248.prevValue); })("keyup", function TemplateProfileCreateComponent_div_33_ng_container_32_mat_form_field_8_Template_input_keyup_7_listener($event) { i0.ɵɵrestoreView(_r247); const ctx_r249 = i0.ɵɵnextContext(3); return ctx_r249.onKeyUpChip($event, ctx_r249.currentEditBlock); })("ngModelChange", function TemplateProfileCreateComponent_div_33_ng_container_32_mat_form_field_8_Template_input_ngModelChange_7_listener($event) { i0.ɵɵrestoreView(_r247); const ctx_r250 = i0.ɵɵnextContext(3); return ctx_r250.currentChip = $event; });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const _r238 = i0.ɵɵreference(5);
    const ctx_r227 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("cdkDropListData", ctx_r227.currentEditBlock.defaultValue);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", ctx_r227.currentEditBlock.defaultValue);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("matChipInputFor", _r238)("matChipInputAddOnBlur", true)("matChipInputSeparatorKeyCodes", ctx_r227.separatorKeysCodes)("ngModel", ctx_r227.currentChip)("ngModelOptions", i0.ɵɵpureFunction0(7, _c0));
} }
function TemplateProfileCreateComponent_div_33_ng_container_32_mat_form_field_9_Template(rf, ctx) { if (rf & 1) {
    const _r252 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-form-field", 83);
    i0.ɵɵelementStart(1, "mat-label");
    i0.ɵɵtext(2, "Valeur par d\u00E9fault");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "input", 113);
    i0.ɵɵlistener("ngModelChange", function TemplateProfileCreateComponent_div_33_ng_container_32_mat_form_field_9_Template_input_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r252); const ctx_r251 = i0.ɵɵnextContext(3); return ctx_r251.currentEditBlock.defaultValue = $event; });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r228 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngModelOptions", i0.ɵɵpureFunction0(2, _c0))("ngModel", ctx_r228.currentEditBlock.defaultValue);
} }
function TemplateProfileCreateComponent_div_33_ng_container_32_mat_form_field_10_Template(rf, ctx) { if (rf & 1) {
    const _r254 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-form-field", 83);
    i0.ɵɵelementStart(1, "mat-label");
    i0.ɵɵtext(2, "Valeur par d\u00E9fault");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "input", 114);
    i0.ɵɵlistener("ngModelChange", function TemplateProfileCreateComponent_div_33_ng_container_32_mat_form_field_10_Template_input_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r254); const ctx_r253 = i0.ɵɵnextContext(3); return ctx_r253.currentEditBlock.defaultValue = $event; });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r229 = i0.ɵɵnextContext(3);
    i0.ɵɵstyleProp("opacity", ctx_r229.currentEditBlock.type !== "tel" ? 1 : 0);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("type", ctx_r229.currentEditBlock.type)("disabled", ctx_r229.currentEditBlock.type === "tel")("ngModelOptions", i0.ɵɵpureFunction0(6, _c0))("ngModel", ctx_r229.currentEditBlock.defaultValue);
} }
function TemplateProfileCreateComponent_div_33_ng_container_32_ng_container_21_mat_option_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 119);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r259 = ctx.$implicit;
    i0.ɵɵproperty("value", item_r259.key);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1("", item_r259.label, " ");
} }
function TemplateProfileCreateComponent_div_33_ng_container_32_ng_container_21_mat_form_field_6_mat_option_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 119);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r261 = ctx.$implicit;
    i0.ɵɵproperty("value", item_r261.key);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1("", item_r261.label, " ");
} }
function TemplateProfileCreateComponent_div_33_ng_container_32_ng_container_21_mat_form_field_6_Template(rf, ctx) { if (rf & 1) {
    const _r263 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-form-field", 115);
    i0.ɵɵelementStart(1, "mat-label");
    i0.ɵɵtext(2, "Selectionnez la sous cat\u00E9gorie (s1)");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "mat-select", 116);
    i0.ɵɵlistener("ngModelChange", function TemplateProfileCreateComponent_div_33_ng_container_32_ng_container_21_mat_form_field_6_Template_mat_select_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r263); const ctx_r262 = i0.ɵɵnextContext(4); return ctx_r262.s1 = $event; })("selectionChange", function TemplateProfileCreateComponent_div_33_ng_container_32_ng_container_21_mat_form_field_6_Template_mat_select_selectionChange_3_listener($event) { i0.ɵɵrestoreView(_r263); const ctx_r264 = i0.ɵɵnextContext(4); return ctx_r264.onSelectCondition("s1", "s2", $event.value); });
    i0.ɵɵtemplate(4, TemplateProfileCreateComponent_div_33_ng_container_32_ng_container_21_mat_form_field_6_mat_option_4_Template, 2, 2, "mat-option", 117);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r256 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngModel", ctx_r256.s1)("ngModelOptions", i0.ɵɵpureFunction0(3, _c0));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r256.conditionData.s1);
} }
function TemplateProfileCreateComponent_div_33_ng_container_32_ng_container_21_mat_form_field_7_mat_option_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 119);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r266 = ctx.$implicit;
    i0.ɵɵproperty("value", item_r266.key);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1("", item_r266.label, " ");
} }
function TemplateProfileCreateComponent_div_33_ng_container_32_ng_container_21_mat_form_field_7_Template(rf, ctx) { if (rf & 1) {
    const _r268 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-form-field", 115);
    i0.ɵɵelementStart(1, "mat-label");
    i0.ɵɵtext(2, "Selectionnez la sous cat\u00E9gorie (s2)");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "mat-select", 116);
    i0.ɵɵlistener("ngModelChange", function TemplateProfileCreateComponent_div_33_ng_container_32_ng_container_21_mat_form_field_7_Template_mat_select_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r268); const ctx_r267 = i0.ɵɵnextContext(4); return ctx_r267.s2 = $event; })("selectionChange", function TemplateProfileCreateComponent_div_33_ng_container_32_ng_container_21_mat_form_field_7_Template_mat_select_selectionChange_3_listener($event) { i0.ɵɵrestoreView(_r268); const ctx_r269 = i0.ɵɵnextContext(4); return ctx_r269.onSelectCondition("s2", "s3", $event.value); });
    i0.ɵɵtemplate(4, TemplateProfileCreateComponent_div_33_ng_container_32_ng_container_21_mat_form_field_7_mat_option_4_Template, 2, 2, "mat-option", 117);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r257 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngModel", ctx_r257.s2)("ngModelOptions", i0.ɵɵpureFunction0(3, _c0));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r257.conditionData.s2);
} }
function TemplateProfileCreateComponent_div_33_ng_container_32_ng_container_21_mat_form_field_8_mat_option_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 119);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r271 = ctx.$implicit;
    i0.ɵɵproperty("value", item_r271.key);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1("", item_r271.label, " ");
} }
function TemplateProfileCreateComponent_div_33_ng_container_32_ng_container_21_mat_form_field_8_Template(rf, ctx) { if (rf & 1) {
    const _r273 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-form-field", 115);
    i0.ɵɵelementStart(1, "mat-label");
    i0.ɵɵtext(2, "Selectionnez la sous cat\u00E9gorie (s3)");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "mat-select", 116);
    i0.ɵɵlistener("ngModelChange", function TemplateProfileCreateComponent_div_33_ng_container_32_ng_container_21_mat_form_field_8_Template_mat_select_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r273); const ctx_r272 = i0.ɵɵnextContext(4); return ctx_r272.s3 = $event; })("selectionChange", function TemplateProfileCreateComponent_div_33_ng_container_32_ng_container_21_mat_form_field_8_Template_mat_select_selectionChange_3_listener($event) { i0.ɵɵrestoreView(_r273); const ctx_r274 = i0.ɵɵnextContext(4); return ctx_r274.onSelectCondition("s3", "s4", $event.value); });
    i0.ɵɵtemplate(4, TemplateProfileCreateComponent_div_33_ng_container_32_ng_container_21_mat_form_field_8_mat_option_4_Template, 2, 2, "mat-option", 117);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r258 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngModel", ctx_r258.s3)("ngModelOptions", i0.ɵɵpureFunction0(3, _c0));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r258.conditionData.s3);
} }
function TemplateProfileCreateComponent_div_33_ng_container_32_ng_container_21_Template(rf, ctx) { if (rf & 1) {
    const _r276 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "mat-form-field", 115);
    i0.ɵɵelementStart(2, "mat-label");
    i0.ɵɵtext(3, "Selectionnez la cat\u00E9gorie");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "mat-select", 116);
    i0.ɵɵlistener("ngModelChange", function TemplateProfileCreateComponent_div_33_ng_container_32_ng_container_21_Template_mat_select_ngModelChange_4_listener($event) { i0.ɵɵrestoreView(_r276); const ctx_r275 = i0.ɵɵnextContext(3); return ctx_r275.all = $event; })("selectionChange", function TemplateProfileCreateComponent_div_33_ng_container_32_ng_container_21_Template_mat_select_selectionChange_4_listener($event) { i0.ɵɵrestoreView(_r276); const ctx_r277 = i0.ɵɵnextContext(3); return ctx_r277.onSelectCondition("all", "s1", $event.value); });
    i0.ɵɵtemplate(5, TemplateProfileCreateComponent_div_33_ng_container_32_ng_container_21_mat_option_5_Template, 2, 2, "mat-option", 117);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(6, TemplateProfileCreateComponent_div_33_ng_container_32_ng_container_21_mat_form_field_6_Template, 5, 4, "mat-form-field", 118);
    i0.ɵɵtemplate(7, TemplateProfileCreateComponent_div_33_ng_container_32_ng_container_21_mat_form_field_7_Template, 5, 4, "mat-form-field", 118);
    i0.ɵɵtemplate(8, TemplateProfileCreateComponent_div_33_ng_container_32_ng_container_21_mat_form_field_8_Template, 5, 4, "mat-form-field", 118);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r230 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngModel", ctx_r230.all)("ngModelOptions", i0.ɵɵpureFunction0(6, _c0));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r230.conditionData.all);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", (ctx_r230.conditionData.s1 == null ? null : ctx_r230.conditionData.s1.length) > 0);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", (ctx_r230.conditionData.s2 == null ? null : ctx_r230.conditionData.s2.length) > 0);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", (ctx_r230.conditionData.s3 == null ? null : ctx_r230.conditionData.s3.length) > 0);
} }
function TemplateProfileCreateComponent_div_33_ng_container_32_mat_radio_group_22_mat_radio_button_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-radio-button", 122);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r279 = ctx.$implicit;
    i0.ɵɵproperty("value", item_r279.value);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", item_r279.value, " ");
} }
function TemplateProfileCreateComponent_div_33_ng_container_32_mat_radio_group_22_Template(rf, ctx) { if (rf & 1) {
    const _r281 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-radio-group", 120);
    i0.ɵɵlistener("ngModelChange", function TemplateProfileCreateComponent_div_33_ng_container_32_mat_radio_group_22_Template_mat_radio_group_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r281); const ctx_r280 = i0.ɵɵnextContext(3); return ctx_r280.currentEditBlock.condition.value = $event; });
    i0.ɵɵtemplate(1, TemplateProfileCreateComponent_div_33_ng_container_32_mat_radio_group_22_mat_radio_button_1_Template, 2, 2, "mat-radio-button", 121);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r231 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("ngModel", ctx_r231.currentEditBlock.condition.value)("ngModelOptions", i0.ɵɵpureFunction0(3, _c0));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r231.onGetDefaultValue());
} }
function TemplateProfileCreateComponent_div_33_ng_container_32_button_24_Template(rf, ctx) { if (rf & 1) {
    const _r283 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 98);
    i0.ɵɵlistener("click", function TemplateProfileCreateComponent_div_33_ng_container_32_button_24_Template_button_click_0_listener($event) { i0.ɵɵrestoreView(_r283); const ctx_r282 = i0.ɵɵnextContext(3); return ctx_r282.onAddNewSubLevelFieldBlock($event); });
    i0.ɵɵtext(1, "Sous-cat\u00E9gorie ");
    i0.ɵɵelementStart(2, "mat-icon");
    i0.ɵɵtext(3, "device_hub ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r232 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("disabled", !ctx_r232.currentEditBlock.editable);
} }
const _c1 = function () { return ["select", "radio", "checkbox_multiple"]; };
function TemplateProfileCreateComponent_div_33_ng_container_32_Template(rf, ctx) { if (rf & 1) {
    const _r285 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "mat-form-field", 83);
    i0.ɵɵelementStart(2, "mat-label");
    i0.ɵɵtext(3, "Nom / Label");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "input", 84);
    i0.ɵɵlistener("ngModelChange", function TemplateProfileCreateComponent_div_33_ng_container_32_Template_input_ngModelChange_4_listener($event) { i0.ɵɵrestoreView(_r285); const ctx_r284 = i0.ɵɵnextContext(2); return ctx_r284.currentEditBlock.label = $event; });
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
    i0.ɵɵlistener("ngModelChange", function TemplateProfileCreateComponent_div_33_ng_container_32_Template_mat_slide_toggle_ngModelChange_15_listener($event) { i0.ɵɵrestoreView(_r285); const ctx_r286 = i0.ɵɵnextContext(2); return ctx_r286.currentEditBlock.isMandatory = $event; });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "div", 94);
    i0.ɵɵelementStart(17, "div", 92);
    i0.ɵɵelementStart(18, "span");
    i0.ɵɵtext(19, "Visibilit\u00E9 conditionnelle");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(20, "mat-slide-toggle", 93);
    i0.ɵɵlistener("ngModelChange", function TemplateProfileCreateComponent_div_33_ng_container_32_Template_mat_slide_toggle_ngModelChange_20_listener($event) { i0.ɵɵrestoreView(_r285); const ctx_r287 = i0.ɵɵnextContext(2); return ctx_r287.currentEditBlock.isConditional = $event; });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(21, TemplateProfileCreateComponent_div_33_ng_container_32_ng_container_21_Template, 9, 7, "ng-container", 28);
    i0.ɵɵtemplate(22, TemplateProfileCreateComponent_div_33_ng_container_32_mat_radio_group_22_Template, 2, 4, "mat-radio-group", 95);
    i0.ɵɵelementStart(23, "div", 96);
    i0.ɵɵtemplate(24, TemplateProfileCreateComponent_div_33_ng_container_32_button_24_Template, 4, 1, "button", 97);
    i0.ɵɵelementStart(25, "button", 98);
    i0.ɵɵlistener("click", function TemplateProfileCreateComponent_div_33_ng_container_32_Template_button_click_25_listener($event) { i0.ɵɵrestoreView(_r285); const ctx_r288 = i0.ɵɵnextContext(2); return ctx_r288.onDuplicatedBlock($event); });
    i0.ɵɵtext(26, "Dupliquer le bloc");
    i0.ɵɵelementStart(27, "mat-icon");
    i0.ɵɵtext(28, "filter_none");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(29, "button", 99);
    i0.ɵɵlistener("click", function TemplateProfileCreateComponent_div_33_ng_container_32_Template_button_click_29_listener($event) { i0.ɵɵrestoreView(_r285); const ctx_r289 = i0.ɵɵnextContext(2); return ctx_r289.onRemoveFieldBlock($event); });
    i0.ɵɵtext(30, "Supprimer le bloc ");
    i0.ɵɵelementStart(31, "mat-icon");
    i0.ɵɵtext(32, " delete ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r224 = i0.ɵɵnextContext(2);
    var tmp_12_0 = null;
    const currVal_12 = ctx_r224.currentEditBlock.isConditional && ctx_r224.onGetDefaultValue() && ((tmp_12_0 = ctx_r224.onGetDefaultValue()) == null ? null : tmp_12_0.length) > 0;
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngModel", ctx_r224.currentEditBlock.label)("ngModelOptions", i0.ɵɵpureFunction0(16, _c0));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitch", ctx_r224.currentEditBlock.type);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", "toggle");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", "checkbox");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", i0.ɵɵpureFunction0(17, _c1).includes(ctx_r224.currentEditBlock.type) ? ctx_r224.currentEditBlock.type : !ctx_r224.currentEditBlock.type);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", "textarea");
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("ngModel", ctx_r224.currentEditBlock.isMandatory)("ngModelOptions", i0.ɵɵpureFunction0(18, _c0));
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngModel", ctx_r224.currentEditBlock.isConditional)("ngModelOptions", i0.ɵɵpureFunction0(19, _c0));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r224.currentEditBlock == null ? null : ctx_r224.currentEditBlock.isConditional);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", currVal_12);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r224.paramsIndex.length < 4);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("disabled", !ctx_r224.currentEditBlock.editable);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("disabled", !ctx_r224.currentEditBlock.editable);
} }
function TemplateProfileCreateComponent_div_33_Template(rf, ctx) { if (rf & 1) {
    const _r291 = i0.ɵɵgetCurrentView();
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
    i0.ɵɵlistener("click", function TemplateProfileCreateComponent_div_33_Template_mat_select_click_7_listener() { i0.ɵɵrestoreView(_r291); const ctx_r290 = i0.ɵɵnextContext(); return ctx_r290.onOpenTypeDialog(ctx_r290.currentEditBlock); })("ngModelChange", function TemplateProfileCreateComponent_div_33_Template_mat_select_ngModelChange_7_listener($event) { i0.ɵɵrestoreView(_r291); const ctx_r292 = i0.ɵɵnextContext(); return ctx_r292.currentEditBlock.type = $event; })("ngModelChange", function TemplateProfileCreateComponent_div_33_Template_mat_select_ngModelChange_7_listener() { i0.ɵɵrestoreView(_r291); const ctx_r293 = i0.ɵɵnextContext(); return ctx_r293.onChangeTypeBlock(ctx_r293.currentEditBlock); });
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
    const ctx_r7 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("Param\u00E8tre du bloc ", ctx_r7.currentEditBlock.label, "");
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngModel", ctx_r7.currentEditBlock.type)("ngModelOptions", i0.ɵɵpureFunction0(4, _c0));
    i0.ɵɵadvance(25);
    i0.ɵɵproperty("ngIf", ctx_r7.currentEditBlock.type !== "none");
} }
function TemplateProfileCreateComponent_div_34_mat_option_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 119);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r295 = ctx.$implicit;
    i0.ɵɵproperty("value", item_r295.value);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(item_r295.value);
} }
function TemplateProfileCreateComponent_div_34_Template(rf, ctx) { if (rf & 1) {
    const _r297 = i0.ɵɵgetCurrentView();
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
    i0.ɵɵlistener("ngModelChange", function TemplateProfileCreateComponent_div_34_Template_input_ngModelChange_7_listener() { i0.ɵɵrestoreView(_r297); const ctx_r296 = i0.ɵɵnextContext(); return ctx_r296.onChangeCategoryName(); })("ngModelChange", function TemplateProfileCreateComponent_div_34_Template_input_ngModelChange_7_listener($event) { i0.ɵɵrestoreView(_r297); const ctx_r298 = i0.ɵɵnextContext(); return ctx_r298.currentEditBlock.name = $event; });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "mat-form-field", 115);
    i0.ɵɵelementStart(9, "mat-label");
    i0.ɵɵtext(10, "Equipe de gestion");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "mat-select", 124);
    i0.ɵɵlistener("ngModelChange", function TemplateProfileCreateComponent_div_34_Template_mat_select_ngModelChange_11_listener($event) { i0.ɵɵrestoreView(_r297); const ctx_r299 = i0.ɵɵnextContext(); return ctx_r299.currentEditBlock.selector.value = $event; });
    i0.ɵɵtemplate(12, TemplateProfileCreateComponent_div_34_mat_option_12_Template, 2, 2, "mat-option", 117);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "div", 96);
    i0.ɵɵelementStart(14, "button", 125);
    i0.ɵɵlistener("click", function TemplateProfileCreateComponent_div_34_Template_button_click_14_listener($event) { i0.ɵɵrestoreView(_r297); const ctx_r300 = i0.ɵɵnextContext(); return ctx_r300.onAddNewSubLevelFieldBlock($event); });
    i0.ɵɵtext(15, "Sous-cat\u00E9gorie ");
    i0.ɵɵelementStart(16, "mat-icon");
    i0.ɵɵtext(17, "device_hub ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "button", 125);
    i0.ɵɵlistener("click", function TemplateProfileCreateComponent_div_34_Template_button_click_18_listener($event) { i0.ɵɵrestoreView(_r297); const ctx_r301 = i0.ɵɵnextContext(); return ctx_r301.onDuplicatedBlock($event); });
    i0.ɵɵtext(19, "Dupliquer le bloc");
    i0.ɵɵelementStart(20, "mat-icon");
    i0.ɵɵtext(21, "filter_none");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(22, "button", 99);
    i0.ɵɵlistener("click", function TemplateProfileCreateComponent_div_34_Template_button_click_22_listener($event) { i0.ɵɵrestoreView(_r297); const ctx_r302 = i0.ɵɵnextContext(); return ctx_r302.onRemoveFieldBlock($event); });
    i0.ɵɵtext(23, "Supprimer le bloc ");
    i0.ɵɵelementStart(24, "mat-icon");
    i0.ɵɵtext(25, " delete");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r8 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("Param\u00E8tre de la section ", ctx_r8.currentEditBlock.name, "");
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngModel", ctx_r8.currentEditBlock.name)("ngModelOptions", i0.ɵɵpureFunction0(7, _c0));
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngModel", ctx_r8.currentEditBlock.selector.value)("ngModelOptions", i0.ɵɵpureFunction0(8, _c0));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r8.currentEditBlock.selector.defaultValue);
    i0.ɵɵadvance(10);
    i0.ɵɵproperty("disabled", !ctx_r8.currentEditBlock.editable);
} }
export class TemplateProfileCreateComponent {
    constructor(fb, service, route, router, dialog, scrollToService) {
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
        this.service._currentTemplate.subscribe((profil) => {
            this.initForm();
            if (profil) {
                this.form.patchValue(profil);
                localStorage.setItem('profil', JSON.stringify(profil));
            }
            else {
                const profil = JSON.parse(localStorage.getItem('profil'));
                this.form.patchValue(profil);
            }
        });
    }
    canDeactivate() {
        if (!this.canExit) {
            this.dialog.open(ExitConfirmComponent, {
                data: ''
            });
            return this.service.canExit$;
        }
        return true;
    }
    initForm() {
        this.form = this.fb.group({
            Name: ["", Validators.required],
            Picto: [""],
            Description: [""],
            Tags: [""],
            Status: [false, Validators.required],
        });
    }
    ngOnInit() {
        return __awaiter(this, void 0, void 0, function* () {
            this.id = this.route.snapshot.paramMap.get("id");
            this.form.valueChanges.subscribe(c => {
                this.canExit = false;
            });
            if (this.id !== "0") {
                setTimeout(() => __awaiter(this, void 0, void 0, function* () {
                    this.currentProfil = yield this.service.getProfil(this.id);
                    this.form.patchValue(this.currentProfil);
                    this.categories = this.currentProfil.categories;
                }), 500);
            }
            else {
                this.showProfileName = true;
                this.categories = this.defaultCategorie;
            }
            setTimeout(() => __awaiter(this, void 0, void 0, function* () {
                this.tags = yield this.service.getAllTags();
            }), 500);
            this.getConditionValues();
        });
    }
    onAddNewCategory(e) {
        e.preventDefault();
        this.canExit = false;
        const data = {
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
        setTimeout(() => {
            this.scrollToService.scrollTo({
                target: data.name,
                container: 'categories-id',
                duration: 650,
                easing: 'easeOutElastic',
                offset: 20
            });
            setTimeout(() => {
                this.onExpendMore({ field: data }, this.categories.length - 1);
                this.onActiveMenu(data, this.categories.length - 1);
            }, 300);
        }, 200);
    }
    onChangeCategoryName() {
        this.currentEditBlock.key = this.currentEditBlock.name.replace(/\s/g, '');
    }
    checkBlink(index, level) {
        return String(index) + String(level);
    }
    onAddNewField(...params) {
        this.canExit = false;
        const length = params.length;
        const forms = length === 1 ? this.categories[params[0]].forms : length === 2 ? this.categories[params[0]].forms[params[1]].forms : this.categories[params[0]].forms[params[1]].forms[params[2]].forms;
        const data = {
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
        setTimeout(() => {
            this.newFieldIndex = null;
        }, 5000);
        this.onHistorics({
            form: data,
            method: 'push',
            location: 'forms',
            params
        });
        this.onEditBlock(forms.at(-1), params);
    }
    onAddNewSubLevelField(...params) {
        this.canExit = false;
        const length = params.length;
        const forms = length === 2 ? this.categories[params[0]].forms[params[length - 1]] : length === 3 ? this.categories[params[0]].forms[params[1]].forms[params[length - 1]] : this.categories[params[0]].forms[params[1]].forms[params[2]].forms[params[length - 1]];
        forms.expandMore = true;
        forms.forms = [];
        const newForm = {
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
            params
        });
    }
    onRemoveField(...params) {
        this.canExit = false;
        const length = params.length;
        const forms = length === 2 ? this.categories[params[0]].forms : length === 3 ? this.categories[params[0]].forms[params[1]].forms : this.categories[params[0]].forms[params[1]].forms[params[2]].forms;
        forms.splice(params[length - 1], 1);
        this.onHistorics({
            form: forms[params[length - 1]],
            location: 'forms',
            method: 'splice',
            params
        });
    }
    onRemoveCategory(e, i) {
        e.preventDefault();
        this.canExit = false;
        this.onHistorics({
            form: this.categories.splice(i, 1),
            method: 'splice',
            location: 'category',
            params: [i]
        });
    }
    onChangeCategory() {
        return this.categories.every((cat) => cat.name !== "" && cat.forms.every((field) => field.label !== "" && field.type !== ""));
    }
    onSubmit(isPublish) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.form.valid && this.onChangeCategory()) {
                if (isPublish) {
                    this.liveLabel = "Chargement....";
                }
                else {
                    this.draftLabel = "Chargement...";
                }
                const result = this.id !== "0"
                    ? yield this.service.updateProfil(Object.assign(Object.assign(Object.assign({}, this.currentProfil), this.form.value), { Status: isPublish, categories: this.categories }))
                    : yield this.service.createProfil(Object.assign(Object.assign({}, this.form.value), { Status: isPublish, categories: this.categories }));
                if (result) {
                    localStorage.removeItem('profil');
                    yield this.service.getAllProfil();
                    this.canExit = true;
                    this.router.navigate([this.service.mainPath + '/template']);
                }
                else {
                    console.log("errror......");
                }
                if (isPublish) {
                    this.liveLabel = "Publié";
                }
                else {
                    this.draftLabel = "Enregistrer le brouillon";
                }
            }
        });
    }
    onChangeType(type, ...params) {
        this.canExit = false;
        const length = params.length;
        const forms = length === 2 ? this.categories[params[0]].forms : length === 3 ? this.categories[params[0]].forms[params[1]].forms : this.categories[params[0]].forms[params[1]].forms[params[2]].forms;
        if (type === "select" || type === "radio" || type === "checkbox_multiple") {
            forms[params[length - 1]].defaultValue = [];
        }
        else if (type === "checkbox" || type === "toggle") {
            forms[params[length - 1]].defaultValue = true;
        }
        else {
            forms[params[length - 1]].defaultValue = "";
        }
    }
    onKeyPress(event, ...params) {
        this.canExit = false;
        const length = params.length;
        const forms = length === 2 ? this.categories[params[0]].forms[params[length - 1]] : length === 3 ? this.categories[params[0]].forms[params[1]].forms[params[length - 1]] : this.categories[params[0]].forms[params[1]].forms[params[2]].forms[params[length - 1]];
        if (event.key === ";") {
            const exist = forms.defaultValue.find((opt) => opt.value.toLocaleLowerCase() === event.target.value.split(";")[0].toLocaleLowerCase());
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
    }
    removeKeyword(keyword, ...params) {
        this.canExit = false;
        const length = params.length;
        const forms = length === 2 ? this.categories[params[0]].forms[params[length - 1]] : length === 3 ? this.categories[params[0]].forms[params[1]].forms[params[length - 1]] : this.categories[params[0]].forms[params[1]].forms[params[2]].forms[params[length - 1]];
        forms.defaultValue = forms.defaultValue.filter((option) => option.value !== keyword.value);
        // this.getConditionValues()
    }
    onExpendMore(event, ...params) {
        if (event) {
            if (event.event) {
                event.event.preventDefault();
            }
            if (event.field && !event.field.expandMore) {
                for (let i = 0; i < this.categories.length; i++) {
                    this.categories[i].expandMore = false;
                    if (this.categories[i].forms) {
                        for (let j = 0; j < this.categories[i].forms.length; j++) {
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
    }
    onCheckedDefault(event, ...params) {
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
    }
    addKeywordFromInput(event, prev, ...params) {
        this.canExit = false;
        const input = event.input;
        const value = event.value;
        const length = params.length;
        const forms = length === 2 ? this.categories[params[0]].forms[params[length - 1]] : length === 3 ? this.categories[params[0]].forms[params[1]].forms[params[length - 1]] : this.categories[params[0]].forms[params[1]].forms[params[2]].forms[params[length - 1]];
        if (value) {
            const prevIndex = forms.defaultValue.findIndex((opt) => opt.value.toLocaleLowerCase() === prev.toLocaleLowerCase());
            if (prevIndex !== -1) {
                forms.defaultValue[prevIndex].value = value.trim();
                input.value = "";
            }
            else {
                const exist = forms.defaultValue.find((opt) => opt.value.toLocaleLowerCase() === event.value.toLocaleLowerCase());
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
    }
    drop(event) {
        this.canExit = false;
        if (event.previousContainer === event.container) {
            moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
        }
        else {
            transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
        }
    }
    ingoreDefaultAction(e) {
        e.preventDefault();
    }
    onShowCategory() {
        this.showProfileName = !this.showProfileName;
    }
    onSelectPicto(e, picto) {
        e.preventDefault();
        this.canExit = false;
        this.form.patchValue({ Picto: picto });
        this.isPictoListShow = !this.isPictoListShow;
    }
    onShowPictoList(e) {
        e.preventDefault();
        this.isPictoListShow = !this.isPictoListShow;
    }
    onChangeLabel(event, ...params) {
        const arr = event.label.split(" ");
        for (var i = 0; i < arr.length; i++) {
            arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
        }
        const length = params.length;
        const forms = length === 2 ? this.categories[params[0]].forms[params[length - 1]] : length === 3 ? this.categories[params[0]].forms[params[1]].forms[params[length - 1]] : this.categories[params[0]].forms[params[1]].forms[params[2]].forms[params[length - 1]];
        forms.key = arr.join('');
    }
    onCheckedChip(event, ...params) {
        this.canExit = false;
        const length = params.length;
        const forms = length === 2 ? this.categories[params[0]].forms[params[length - 1]] : length === 3 ? this.categories[params[0]].forms[params[1]].forms[params[length - 1]] : this.categories[params[0]].forms[params[1]].forms[params[2]].forms[params[length - 1]];
        const index = forms.defaultValue.findIndex((chip) => chip.value === event.value);
        if (index !== -1 && forms.type === 'checkbox_multiple') {
            forms.defaultValue[index].checked = !event.checked;
        }
        else if (index !== -1) {
            forms.defaultValue.forEach((value) => {
                value.checked = false;
            });
            forms.defaultValue[index].checked = !event.checked;
        }
        // this.getConditionValues()
    }
    openDialog() {
        const dialogRef = this.dialog.open(DialogCreateTemplateComponent, {
            data: {
                tags: this.tags,
                profil: this.form.value
            }
        });
        dialogRef.afterClosed().subscribe((current) => {
            if (current) {
                this.service.currentTemplate.next(current);
            }
        });
    }
    onPassInEditMode(i) {
        this.canExit = false;
        this.editIndex = i;
    }
    onEdit() {
        this.editIndex = null;
    }
    onEditCategoryName(i, name) {
        this.canExit = false;
        this.categories[i].name = name;
        // this.getConditionValues()
    }
    onAcrelink(e) {
        e.preventDefault();
    }
    getConditionValues() {
        const conditionsList = [];
        for (let i = 0; i < this.categories.length; i++) {
            const category = {
                label: this.categories[i].name,
                forms: [],
                key: this.categories[i].key,
                location: {
                    s0Index: i,
                },
                level: 0,
            };
            for (let j = 0; j < this.categories[i].forms.length; j++) {
                const s1Forms = this.categories[i].forms[j];
                const s1Location = {
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
                    for (let k = 0; k < s1Forms.forms.length; k++) {
                        const s2Forms = s1Forms.forms[k];
                        const s2Location = {
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
                            for (let l = 0; l < s2Forms.forms.length; l++) {
                                const s3Forms = s2Forms.forms[l];
                                const s3Location = {
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
                                    for (let m = 0; m < s3Location.forms.length; m++) {
                                        const s4Location = s3Location.forms[m];
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
    }
    onSelectCondition(level, subLevel, value) {
        const condition = this.conditionData[level].find((data) => data.key === value);
        if (level === "all") {
            this.conditionData = Object.assign(Object.assign({}, this.conditionData), { s1: [], s2: [], s3: [], defaultValue: [] });
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
    }
    onGetDefaultValue() {
        var _a, _b;
        if (this.currentEditBlock.isConditional && ((_b = (_a = this.currentEditBlock) === null || _a === void 0 ? void 0 : _a.condition) === null || _b === void 0 ? void 0 : _b.location)) {
            const _c = this.currentEditBlock.condition.location, { s0Index } = _c, rest = __rest(_c, ["s0Index"]);
            let currentData = this.categories[s0Index];
            for (const key in rest) {
                if (currentData.forms[rest[key]]) {
                    currentData = currentData.forms[rest[key]];
                }
            }
            return currentData.defaultValue || [];
        }
        return [];
    }
    onActiveMenu(cat, i, event = null) {
        this.editIndex = i;
        this.paramsIndex = [i];
        this.onExpendMore({ field: cat }, i);
        this.onShowSection(event);
        this.currentEditBlock = cat;
    }
    catNameStart(str) {
        const vowels = ['a', 'e', 'i', 'o', 'u', 'y'];
        return vowels.includes(str.substr(0, 1).toLocaleLowerCase());
    }
    onShowSection(e) {
        if (e)
            e.stopPropagation();
        this.isSection = true;
        this.isBlock = false;
    }
    onEditBlock(block, ...params) {
        console.log(params);
        this.isBlock = true;
        this.currentEditBlock = block;
        this.isSection = false;
        this.paramsIndex = params;
        this.getConditionValues();
    }
    onRemoveblock(event, block) {
        event.preventDefault();
    }
    onRemoveFieldBlock(event) {
        event.preventDefault();
        const length = this.paramsIndex.length;
        this.canExit = false;
        const forms = length === 1 ? this.categories : length === 2 ? this.categories[this.paramsIndex[0]].forms : length === 3 ? this.categories[this.paramsIndex[0]].forms[this.paramsIndex[1]].forms : this.categories[this.paramsIndex[0]].forms[this.paramsIndex[1]].forms[this.paramsIndex[2]].forms;
        this.currentEditBlock = null;
        this.isBlock = false;
        this.isSection = false;
        this.onHistorics({
            form: forms.splice(this.paramsIndex[length - 1], 1)[0],
            method: 'splice',
            location: length === 1 ? 'category' : 'forms',
            params: this.paramsIndex
        });
    }
    onDuplicatedBlock(event) {
        event.preventDefault();
        const length = this.paramsIndex.length;
        this.canExit = false;
        const forms = length === 1 ? this.categories : length === 2 ? this.categories[this.paramsIndex[0]].forms : length === 3 ? this.categories[this.paramsIndex[0]].forms[this.paramsIndex[1]].forms : this.categories[this.paramsIndex[0]].forms[this.paramsIndex[1]].forms[this.paramsIndex[2]].forms;
        const cloneEditable = this.onEditableBlock(Object.assign(Object.assign({}, this.currentEditBlock), { name: this.currentEditBlock.name + ' - copie' }));
        console.log('-------wwwwwwwww---------------', cloneEditable);
        const cloneBlock = JSON.stringify(cloneEditable);
        forms.push(JSON.parse(cloneBlock));
        this.currentEditBlock = forms.at(-1);
        const params = [...this.paramsIndex];
        params.pop();
        params.push(forms.length - 1);
        this.onHistorics({
            form: JSON.parse(cloneBlock),
            method: 'push',
            location: 'forms',
            params
        });
        // this.editIndex = forms.length - 1;
    }
    onEditableBlock(notEditableBlock) {
        const editableFormBlock = notEditableBlock.forms ? notEditableBlock.forms
            .map((cat) => {
            if (cat.forms) {
                const f = cat.forms
                    .map((sub) => {
                    if (sub.forms) {
                        const s = sub.forms.map((child) => {
                            if (child.forms) {
                                return Object.assign(Object.assign({}, child), { editable: true });
                            }
                            return Object.assign(Object.assign({}, child), { editable: true });
                        });
                        return Object.assign(Object.assign({}, sub), { editable: true, forms: s });
                    }
                    return Object.assign(Object.assign({}, sub), { editable: true });
                });
                return Object.assign(Object.assign({}, cat), { editable: true, forms: f });
            }
            return Object.assign(Object.assign({}, cat), { editable: true });
        }) : null;
        return editableFormBlock ? Object.assign(Object.assign({}, notEditableBlock), { editable: true, forms: editableFormBlock }) : notEditableBlock;
    }
    onKeyUpChip(event, field) {
        this.canExit = false;
        if (event.key === ";") {
            const exist = field.defaultValue.find((opt) => opt.value.toLocaleLowerCase() === event.target.value.split(";")[0].toLocaleLowerCase());
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
    addKeywordFromInputBlock(event, field, prev) {
        var _a;
        this.canExit = false;
        const input = event.input;
        const value = event.value;
        if (value) {
            const prevIndex = (_a = field.defaultValue) === null || _a === void 0 ? void 0 : _a.findIndex((opt) => opt.value.toLocaleLowerCase() === prev.toLocaleLowerCase());
            if (prevIndex !== -1) {
                field.defaultValue[prevIndex].value = value.trim();
                input.value = "";
            }
            else {
                const exist = field.defaultValue.find((opt) => opt.value.toLocaleLowerCase() === event.value.toLocaleLowerCase());
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
    }
    onCheckedChipBlock(event, field) {
        this.canExit = false;
        const index = field.defaultValue.findIndex((chip) => chip.value === event.value);
        if (index !== -1 && field.type === 'checkbox_multiple') {
            field.defaultValue[index].checked = !event.checked;
        }
        else if (index !== -1) {
            field.defaultValue.forEach((value) => {
                value.checked = false;
            });
            field.defaultValue[index].checked = !event.checked;
        }
        // this.getConditionValues()
    }
    removeKeywordBlock(keyword, field) {
        this.canExit = false;
        field.defaultValue = field.defaultValue.filter((option) => option.value !== keyword.value);
        // this.getConditionValues()
    }
    onChangeTypeBlock(field) {
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
    }
    onAddNewSubLevelFieldBlock(event) {
        event.preventDefault();
        this.canExit = false;
        const length = this.paramsIndex.length;
        const forms = length === 1 ? this.categories[this.paramsIndex[0]] : length === 2 ? this.categories[this.paramsIndex[0]].forms[this.paramsIndex[length - 1]] : length === 3 ? this.categories[this.paramsIndex[0]].forms[this.paramsIndex[1]].forms[this.paramsIndex[length - 1]] : this.categories[this.paramsIndex[0]].forms[this.paramsIndex[1]].forms[this.paramsIndex[2]].forms[this.paramsIndex[length - 1]];
        forms.expandMore = true;
        forms.forms = forms.forms || [];
        const data = {
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
    }
    onOpenTypeDialog(field) {
        const dialogRef = this.dialog.open(TypeComponent, {
            data: { selectedType: field.type }
        });
        dialogRef.afterClosed().subscribe((type) => {
            if (type) {
                field.type = type;
                this.onChangeTypeBlock(field);
            }
        });
    }
    fieldWidth(type, length, index) {
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
    }
    onCancel(left) {
        if (left) {
            const current = this.currentCanceledIndex === null ? this.historics.length - 1 : this.currentCanceledIndex;
            if (this.historics.length > 0 && current >= 0) {
                this.currentCanceledIndex = current - 1;
                console.log("🚀 ~ file: template-profile-create.component.ts ~ line 1902 ~ TemplateProfileCreateComponent ~ onCancel ~ this.currentCanceledIndex", this.currentCanceledIndex);
                console.log(this.currentCanceledIndex);
                const lastAction = this.historics[current];
                console.log('lastAction left', lastAction);
                const params = lastAction.params;
                const length = params.length;
                console.log('length', length);
                console.log('this.categories', this.categories);
                const forms = length === 1 ? this.categories : length === 2 ? this.categories[params[0]].forms[params[1]].forms : this.categories[params[0]].forms[params[1]].forms[params[2]].forms;
                if (lastAction.method === "splice") {
                    if (length === 1 && lastAction.location === 'category') {
                        forms.push(lastAction.form);
                    }
                    else if (length === 1 && lastAction.location === 'forms') {
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
                    if (length === 1 && lastAction.location === 'category') {
                        forms.splice(params[length - 1], 1);
                    }
                    else if (length === 1 && lastAction.location === 'forms') {
                        forms[params[0]].forms.splice(params[length - 1], 1);
                    }
                    else {
                        forms.splice(params[length - 1], 1);
                    }
                    this.currentEditBlock = null;
                }
            }
        }
        else {
            if (this.currentCanceledIndex !== null && this.historics.length > this.currentCanceledIndex) {
                this.currentCanceledIndex += 1;
                console.log("🚀 ~ file: template-profile-create.component.ts ~ line 1920 ~ TemplateProfileCreateComponent ~ onCancel ~ this.currentCanceledIndex", this.currentCanceledIndex);
                const lastAction = this.historics[this.currentCanceledIndex];
                console.log('lastAction right', lastAction);
                const params = lastAction.params;
                const length = params.length;
                console.log('length', length);
                const forms = length === 1 ? this.categories : length === 2 ? this.categories[params[0]].forms[params[1]].forms : this.categories[params[0]].forms[params[1]].forms[params[2]].forms;
                console.log('forms', forms);
                if (lastAction.method === "push") {
                    if (length === 1 && lastAction.location === 'category') {
                        forms.push(lastAction.form);
                    }
                    else if (length === 1 && lastAction.location === 'forms') {
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
                    if (length === 1 && lastAction.location === 'category') {
                        forms.splice(params[length - 1], 1);
                    }
                    else if (length === 1 && lastAction.location === 'forms') {
                        forms[params[0]].forms.splice(params[length - 1], 1);
                    }
                    else {
                        forms.splice(params[length - 1], 1);
                    }
                    this.currentEditBlock = null;
                }
            }
        }
    }
    onCheckValue(event) {
        this.invalideValue = event;
    }
    onHistorics(data) {
        if (this.currentCanceledIndex !== null) {
            this.historics = [];
            this.currentCanceledIndex = null;
        }
        console.log(data);
        this.historics.push(data);
    }
}
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
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(TemplateProfileCreateComponent, [{
        type: Component,
        args: [{
                selector: "onboarding-create-profile-template",
                templateUrl: "./template-profile-create.component.html",
                styleUrls: ["./template-profile-create.component.scss"],
            }]
    }], function () { return [{ type: i1.FormBuilder }, { type: i2.OnboardingService }, { type: i3.ActivatedRoute }, { type: i3.Router }, { type: i4.MatDialog }, { type: i5.ScrollToService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVtcGxhdGUtcHJvZmlsZS1jcmVhdGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vb25ib2FyZGluZy8iLCJzb3VyY2VzIjpbImxpYi9wYWdlcy90ZW1wbGF0ZS1wcm9maWxlLWNyZWF0ZS90ZW1wbGF0ZS1wcm9maWxlLWNyZWF0ZS5jb21wb25lbnQudHMiLCJsaWIvcGFnZXMvdGVtcGxhdGUtcHJvZmlsZS1jcmVhdGUvdGVtcGxhdGUtcHJvZmlsZS1jcmVhdGUuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLE9BQU8sRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFLLFNBQVMsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ25FLE9BQU8sRUFBZSxlQUFlLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN6RixPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ2xELE9BQU8sRUFBMEIsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFcEUsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0sbUZBQW1GLENBQUM7QUFDbEksT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sc0RBQXNELENBQUM7QUFLNUYsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHNEQUFzRCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ0Z6RSw4QkFFRTtJQURBLHVRQUE4QjtJQUM5Qiw0QkFDRTtJQUFBLGdDQUFxQztJQUFBLFlBQWM7SUFBQSxpQkFBTztJQUM1RCxpQkFBTztJQUNULGlCQUFLOzs7OztJQUxnQix5REFBeUM7SUFHcEQsZUFBOEI7SUFBOUIsK0NBQThCO0lBQUMsZUFBYztJQUFkLGlDQUFjOzs7SUE0Q2pELGdDQUF1QztJQUFBLDZCQUFhO0lBQUEsaUJBQVc7OztJQUMvRCxnQ0FBc0M7SUFBQSwyQkFBVztJQUFBLGlCQUFXOzs7O0lBV3RELCtCQUVFO0lBQUEsa0NBQ0U7SUFEbUQsa0xBQVMs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QyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztRQUN0TSxJQUFJLElBQUksS0FBSyxRQUFRLElBQUksSUFBSSxLQUFLLE9BQU8sSUFBSSxJQUFJLEtBQUssbUJBQW1CLEVBQUU7WUFDekUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDO1NBQzdDO2FBQU0sSUFBSSxJQUFJLEtBQUssVUFBVSxJQUFJLElBQUksS0FBSyxRQUFRLEVBQUU7WUFDbkQsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1NBQy9DO2FBQU07WUFDTCxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksR0FBRyxFQUFFLENBQUM7U0FDN0M7SUFDSCxDQUFDO0lBRUQsVUFBVSxDQUFDLEtBQVUsRUFBRSxHQUFHLE1BQU07UUFDOUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDckIsTUFBTSxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQztRQUM3QixNQUFNLEtBQUssR0FBRyxNQUFNLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2xRLElBQUksS0FBSyxDQUFDLEdBQUcsS0FBSyxHQUFHLEVBQUU7WUFDckIsTUFBTSxLQUFLLEdBQUcsS0FBSyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsaUJBQWlCLEVBQUUsS0FBSyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxDQUFDO1lBQ3ZJLElBQUksQ0FBQyxLQUFLLEVBQUU7Z0JBQ1YsS0FBSyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUM7b0JBQ3RCLEtBQUssRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUN2QyxPQUFPLEVBQUUsS0FBSztpQkFDZixDQUFDLENBQUM7Z0JBQ0gsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO2FBQ3pCO2lCQUFNO2dCQUNMLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQzthQUN6QjtTQUNGO1FBQ0QsNEJBQTRCO0lBQzlCLENBQUM7SUFFRCxhQUFhLENBQUMsT0FBWSxFQUFFLEdBQUcsTUFBTTtRQUNuQyxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUNyQixNQUFNLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDO1FBQzdCLE1BQU0sS0FBSyxHQUFHLE1BQU0sS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbFEsS0FBSyxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLEtBQUssS0FBSyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDM0YsNEJBQTRCO0lBQzlCLENBQUM7SUFFRCxZQUFZLENBQUMsS0FBSyxFQUFFLEdBQUcsTUFBTTtRQUMzQixJQUFJLEtBQUssRUFBRTtZQUNULElBQUksS0FBSyxDQUFDLEtBQUssRUFBRTtnQkFDZixLQUFLLENBQUMsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO2FBQzlCO1lBQ0QsSUFBSSxLQUFLLENBQUMsS0FBSyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxVQUFVLEVBQUU7Z0JBQzFDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtvQkFDL0MsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO29CQUN0QyxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFO3dCQUM1QixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFOzRCQUN4RCxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO3lCQUNoRDtxQkFDRjtpQkFDRjthQUNGO1NBRUY7UUFDRCxJQUFJLE1BQU0sQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUM7U0FDaEY7YUFBTSxJQUFJLE1BQU0sQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBQzlCLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxFQUFFO2dCQUMxRCxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO2FBQ2hFO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztnQkFDN0MsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQzthQUMvRDtTQUNGO2FBQU0sSUFBSSxNQUFNLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtZQUM5QixJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLEVBQUU7Z0JBQzNFLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO2FBQ2pGO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztnQkFDN0MsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztnQkFDOUQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7YUFDaEY7U0FDRjthQUFNO1lBQ0wsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsRUFBRTtnQkFDNUYsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO2FBQ2xHO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztnQkFDN0MsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztnQkFDOUQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7Z0JBQy9FLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FB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Q0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2xRLEtBQUssQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQTtJQUUxQixDQUFDO0lBRUQsYUFBYSxDQUFDLEtBQVUsRUFBRSxHQUFHLE1BQU07UUFDakMsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDckIsTUFBTSxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQztRQUM3QixNQUFNLEtBQUssR0FBRyxNQUFNLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2xRLE1BQU0sS0FBSyxHQUFHLEtBQUssQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFD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LElBQUksVUFBVSxDQUFDLFFBQVEsS0FBSyxVQUFVLEVBQUU7d0JBQ3RELEtBQUssQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFBO3FCQUM1Qjt5QkFBTSxJQUFJLE1BQU0sS0FBSyxDQUFDLElBQUksVUFBVSxDQUFDLFFBQVEsS0FBSyxPQUFPLEVBQUU7d0JBQzFELEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQTtxQkFDN0M7eUJBQU07d0JBQ0wsS0FBSyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUE7cUJBQzVCO29CQUNELElBQUksVUFBVSxDQUFDLFFBQVEsS0FBSyxVQUFVLEVBQUU7d0JBQ3RDLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztxQkFDOUQ7eUJBQU07d0JBQ0wsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsRUFBRSxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUE7cUJBQzdEO2lCQUNGO3FCQUFNO29CQUNMLElBQUksTUFBTSxLQUFLLENBQUMsSUFBSSxVQUFVLENBQUMsUUFBUSxLQUFLLFVBQVUsRUFBRTt3QkFDdEQsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFBO3FCQUNwQzt5QkFBTSxJQUFJLE1BQU0sS0FBSyxDQUFDLElBQUksVUFBVSxDQUFDLFFBQVEsS0FBSyxPQUFPLEVBQUU7d0JBQzFELEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLEVB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IkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBDT01NQSwgRU5URVIsIEksIFNFTUlDT0xPTiB9IGZyb20gXCJAYW5ndWxhci9jZGsva2V5Y29kZXNcIjtcclxuaW1wb3J0IHsgQ2RrRHJhZ0Ryb3AsIG1vdmVJdGVtSW5BcnJheSwgdHJhbnNmZXJBcnJheUl0ZW0gfSBmcm9tIFwiQGFuZ3VsYXIvY2RrL2RyYWctZHJvcFwiO1xyXG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGb3JtQnVpbGRlciwgRm9ybUdyb3VwLCBWYWxpZGF0b3JzIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcblxyXG5pbXBvcnQgeyBEaWFsb2dDcmVhdGVUZW1wbGF0ZUNvbXBvbmVudCB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3RlbXBsYXRlL2RpYWxvZy1jcmVhdGUtdGVtcGxhdGUvZGlhbG9nLWNyZWF0ZS10ZW1wbGF0ZS5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgRXhpdENvbmZpcm1Db21wb25lbnQgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9leGl0LWNvbmZpcm0vZXhpdC1jb25maXJtLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBNYXRDaGlwSW5wdXRFdmVudCB9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbC9jaGlwc1wiO1xyXG5pbXBvcnQgeyBNYXREaWFsb2cgfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nXCI7XHJcbmltcG9ydCB7IE9uYm9hcmRpbmdTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL29uYm9hcmRpbmcuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBTY3JvbGxUb1NlcnZpY2UgfSBmcm9tIFwiQG5pY2t5LWxlbmFlcnMvbmd4LXNjcm9sbC10b1wiO1xyXG5pbXBvcnQgeyBUeXBlQ29tcG9uZW50IH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvdGVtcGxhdGUvdHlwZS1kaWFsb2cvdHlwZS5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgZmllbGRXaWR0aCB9IGZyb20gXCIuLi8uLi91dGlscy91dGlsc1wiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6IFwib25ib2FyZGluZy1jcmVhdGUtcHJvZmlsZS10ZW1wbGF0ZVwiLFxyXG4gIHRlbXBsYXRlVXJsOiBcIi4vdGVtcGxhdGUtcHJvZmlsZS1jcmVhdGUuY29tcG9uZW50Lmh0bWxcIixcclxuICBzdHlsZVVybHM6IFtcIi4vdGVtcGxhdGUtcHJvZmlsZS1jcmVhdGUuY29tcG9uZW50LnNjc3NcIl0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUZW1wbGF0ZVByb2ZpbGVDcmVhdGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIGZvcm06IEZvcm1Hcm91cDtcclxuICB2YWxpZENhdGVnb3J5ID0gZmFsc2U7XHJcbiAgc2VwYXJhdG9yS2V5c0NvZGVzID0gW0VOVEVSLCBDT01NQSwgU0VNSUNPTE9OXTtcclxuICBjdXJyZW50UHJvZmlsOiBhbnkgPSB7fTtcclxuICBjYW5FeGl0ID0gdHJ1ZTtcclxuICB0YWdzID0gW107XHJcbiAgaWQgPSBcIjBcIjtcclxuICBwYXJlbnQgPSBbXTtcclxuICBlZGl0SW5kZXggPSBudWxsO1xyXG4gIHNob3dQcm9maWxlTmFtZSA9IHRydWU7XHJcbiAgbGl2ZUxhYmVsID0gXCJQdWJsaWVyXCJcclxuICBkcmFmdExhYmVsID0gXCJFbnJlZ2lzdHJlciBsZSBicm91aWxsb25cIlxyXG4gIGludmFsaWRlVmFsdWU6IGJvb2xlYW47XHJcblxyXG4gIGlzUGljdG9MaXN0U2hvdzogYm9vbGVhbjtcclxuICBwaWN0byA9IFwiXCI7XHJcbiAgYWxsID0gXCJcIlxyXG4gIHMxID0gXCJcIlxyXG4gIHMyID0gXCJcIlxyXG4gIHMzID0gXCJcIlxyXG4gIGNvbmRpdGlvbkRhdGEgPSB7XHJcbiAgICBhbGw6IFtdLFxyXG4gICAgczE6IFtdLFxyXG4gICAgczI6IFtdLFxyXG4gICAgczM6IFtdLFxyXG4gICAgZGVmYXVsdFZhbHVlOiBbXVxyXG4gIH07XHJcbiAgY2F0ZWdvcmllcyA9IFtdO1xyXG4gIGlzQmxvY2sgPSBmYWxzZTtcclxuICBpc1NlY3Rpb24gPSBmYWxzZTtcclxuICBjdXJyZW50RWRpdEJsb2NrOiBhbnk7XHJcbiAgY3VycmVudENoaXAgPSBcIlwiXHJcbiAgcHJldlZhbHVlID0gXCJcIlxyXG4gIHBhcmFtc0luZGV4OiBhbnlbXTtcclxuICBoaXN0b3JpY3MgPSBbXTtcclxuICBjdXJyZW50Q2FuY2VsZWRJbmRleCA9IG51bGw7XHJcbiAgbmV3RmllbGRJbmRleCA9IG51bGw7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGZiOiBGb3JtQnVpbGRlcixcclxuICAgIHB1YmxpYyBzZXJ2aWNlOiBPbmJvYXJkaW5nU2VydmljZSxcclxuICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxyXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcclxuICAgIHByaXZhdGUgZGlhbG9nOiBNYXREaWFsb2csXHJcbiAgICBwcml2YXRlIHNjcm9sbFRvU2VydmljZTogU2Nyb2xsVG9TZXJ2aWNlXHJcbiAgKSB7XHJcbiAgICB0aGlzLnNlcnZpY2UuX2N1cnJlbnRUZW1wbGF0ZS5zdWJzY3JpYmUoKHByb2ZpbCkgPT4ge1xyXG4gICAgICB0aGlzLmluaXRGb3JtKClcclxuICAgICAgaWYgKHByb2ZpbCkge1xyXG4gICAgICAgIHRoaXMuZm9ybS5wYXRjaFZhbHVlKHByb2ZpbCk7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2ZpbCcsIEpTT04uc3RyaW5naWZ5KHByb2ZpbCkpXHJcblxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnN0IHByb2ZpbCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2ZpbCcpKTtcclxuICAgICAgICB0aGlzLmZvcm0ucGF0Y2hWYWx1ZShwcm9maWwpO1xyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgZGVmYXVsdENhdGVnb3JpZTogYW55ID0gW1xyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIlV0aWxpc2F0ZXVyXCIsXHJcbiAgICAgIGtleTogJ3V0aWxpc2F0ZXVyJyxcclxuICAgICAgZWRpdGFibGU6IGZhbHNlLFxyXG4gICAgICBkZWxldGVhYmxlOiBmYWxzZSxcclxuICAgICAgZXhwYW5kTW9yZTogZmFsc2UsXHJcbiAgICAgIGV4cGFuZE9uYm9hcmRpbmc6IHRydWUsXHJcbiAgICAgIGRlZmF1bHRWYWx1ZTogZmFsc2UsXHJcbiAgICAgIHN1ZmZpeEVuZHBvaW50OiBcImNhdGVnb3J5L3VzZXJcIixcclxuICAgICAgc2VsZWN0b3I6IHtcclxuICAgICAgICBsYWJlbDogXCJDb21wYW55XCIsXHJcbiAgICAgICAga2V5OiBcIkNvbXBhbnlcIixcclxuICAgICAgICBkZWZhdWx0VmFsdWU6IFt7IHZhbHVlOiBcIk5vd3RlYW1cIiwgY2hlY2tlZDogdHJ1ZSB9LCB7IHZhbHVlOiBcIkludGVybmFsXCIsIGNoZWNrZWQ6IGZhbHNlIH1dLFxyXG4gICAgICAgIHZhbHVlOiBcIk5vd3RlYW1cIlxyXG4gICAgICB9LFxyXG4gICAgICB0aWNrZXRUeXBlOiB7XHJcbiAgICAgICAgbGFiZWw6IFwiVHlwZSBkZSB0aWNrZXRcIixcclxuICAgICAgICBrZXk6IFwidHlja2V0VHlwZVwiLFxyXG4gICAgICAgIGRlZmF1bHRWYWx1ZTogW3sgdmFsdWU6IFwiQ3LDqWF0aW9uIGRlIGNvbXB0ZVwiLCBjaGVja2VkOiB0cnVlLCBrZXk6IFwiQ3JlYXRpb25fZGVfY29tcHRlXCIgfSwgeyB2YWx1ZTogXCJDb25maWd1cmF0aW9uIGRlIHBvc3RlXCIsIGNoZWNrZWQ6IGZhbHNlLCBrZXk6IFwiQ29uZmlndXJhdGlvbl9kZV9wb3N0ZVwiIH1dLFxyXG4gICAgICAgIHZhbHVlOiBcIkNyZWF0aW9uX2RlX2NvbXB0ZVwiXHJcbiAgICAgIH0sXHJcbiAgICAgIGZvcm1zOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbGFiZWw6IFwiQ2l2aWxpdMOpXCIsXHJcbiAgICAgICAgICBrZXk6IFwiU2FsdXRhdGlvblwiLFxyXG4gICAgICAgICAgZXhwYW5kT25ib2FyZGluZzogdHJ1ZSxcclxuICAgICAgICAgIGRlZmF1bHRWYWx1ZTogW3sgdmFsdWU6IFwiTS5cIiwgY2hlY2tlZDogZmFsc2UgfSwgeyB2YWx1ZTogXCJNbWVcIiwgY2hlY2tlZDogZmFsc2UgfV0sXHJcbiAgICAgICAgICBjb25kaXRpb246IHt9LFxyXG4gICAgICAgICAgdmFsdWU6IG51bGwsXHJcbiAgICAgICAgICBzaXplOiAxMCxcclxuICAgICAgICAgIGlzTWFuZGF0b3J5OiB0cnVlLFxyXG4gICAgICAgICAgb3RoZXJWYWx1ZTogJycsXHJcbiAgICAgICAgICB0eXBlOiBcInNlbGVjdFwiLFxyXG4gICAgICAgICAgZWRpdGFibGU6IGZhbHNlLFxyXG4gICAgICAgICAgZGVsZXRlYWJsZTogZmFsc2UsXHJcbiAgICAgICAgICBzdWJMZXZlbDogMSxcclxuXHJcbiAgICAgICAgICBleHBhbmRNb3JlOiBmYWxzZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGxhYmVsOiBcIlR5cGUgZGUgcHJvZmlsXCIsXHJcbiAgICAgICAgICBrZXk6IFwiVHlwZV9kZV9wcm9maWxfTm93Ym9hcmRfX2NcIixcclxuICAgICAgICAgIGV4cGFuZE9uYm9hcmRpbmc6IHRydWUsXHJcbiAgICAgICAgICBkZWZhdWx0VmFsdWU6IFt7IHZhbHVlOiBcIk1hbmFnZXJcIiwgY2hlY2tlZDogZmFsc2UgfSwgeyB2YWx1ZTogXCJVdGlsaXNhdGV1clwiLCBjaGVja2VkOiBmYWxzZSB9XSxcclxuICAgICAgICAgIGNvbmRpdGlvbjoge30sXHJcbiAgICAgICAgICB2YWx1ZTogbnVsbCxcclxuICAgICAgICAgIHNpemU6IDEwLFxyXG4gICAgICAgICAgaXNNYW5kYXRvcnk6IHRydWUsXHJcbiAgICAgICAgICBvdGhlclZhbHVlOiAnJyxcclxuICAgICAgICAgIHR5cGU6IFwic2VsZWN0XCIsXHJcbiAgICAgICAgICBlZGl0YWJsZTogZmFsc2UsXHJcbiAgICAgICAgICBkZWxldGVhYmxlOiBmYWxzZSxcclxuICAgICAgICAgIHN1YkxldmVsOiAxLFxyXG4gICAgICAgICAgZXhwYW5kTW9yZTogZmFsc2UsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBsYWJlbDogXCJOb21cIixcclxuICAgICAgICAgIGtleTogXCJMYXN0TmFtZVwiLFxyXG4gICAgICAgICAgZXhwYW5kT25ib2FyZGluZzogdHJ1ZSxcclxuICAgICAgICAgIGRlZmF1bHRWYWx1ZTogbnVsbCxcclxuICAgICAgICAgIHZhbHVlOiBudWxsLFxyXG4gICAgICAgICAgc2l6ZTogODAsXHJcbiAgICAgICAgICBpc01hbmRhdG9yeTogdHJ1ZSxcclxuICAgICAgICAgIGNvbmRpdGlvbjoge30sXHJcbiAgICAgICAgICBvdGhlclZhbHVlOiAnJyxcclxuICAgICAgICAgIHR5cGU6IFwidGV4dFwiLFxyXG4gICAgICAgICAgZWRpdGFibGU6IGZhbHNlLFxyXG4gICAgICAgICAgZGVsZXRlYWJsZTogZmFsc2UsXHJcbiAgICAgICAgICBzdWJMZXZlbDogMSxcclxuICAgICAgICAgIGV4cGFuZE1vcmU6IGZhbHNlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbGFiZWw6IFwiUHLDqW5vbVwiLFxyXG4gICAgICAgICAga2V5OiBcIkZpcnN0TmFtZVwiLFxyXG4gICAgICAgICAgZXhwYW5kT25ib2FyZGluZzogdHJ1ZSxcclxuICAgICAgICAgIGNvbmRpdGlvbjoge30sXHJcbiAgICAgICAgICBkZWZhdWx0VmFsdWU6IG51bGwsXHJcbiAgICAgICAgICB2YWx1ZTogbnVsbCxcclxuICAgICAgICAgIHNpemU6IDgwLFxyXG4gICAgICAgICAgaXNNYW5kYXRvcnk6IHRydWUsXHJcbiAgICAgICAgICBvdGhlclZhbHVlOiAnJyxcclxuICAgICAgICAgIHR5cGU6IFwidGV4dFwiLFxyXG4gICAgICAgICAgZWRpdGFibGU6IGZhbHNlLFxyXG4gICAgICAgICAgZGVsZXRlYWJsZTogZmFsc2UsXHJcbiAgICAgICAgICBzdWJMZXZlbDogMSxcclxuICAgICAgICAgIGV4cGFuZE1vcmU6IGZhbHNlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbGFiZWw6IFwiRW1haWxcIixcclxuICAgICAgICAgIGtleTogXCJFbWFpbFwiLFxyXG4gICAgICAgICAgZXhwYW5kT25ib2FyZGluZzogdHJ1ZSxcclxuICAgICAgICAgIGRlZmF1bHRWYWx1ZTogbnVsbCxcclxuICAgICAgICAgIGNvbmRpdGlvbjoge30sXHJcbiAgICAgICAgICB2YWx1ZTogbnVsbCxcclxuICAgICAgICAgIHNpemU6IDgwLFxyXG4gICAgICAgICAgaXNNYW5kYXRvcnk6IHRydWUsXHJcbiAgICAgICAgICBvdGhlclZhbHVlOiAnJyxcclxuICAgICAgICAgIHR5cGU6IFwiZW1haWxcIixcclxuICAgICAgICAgIGVkaXRhYmxlOiBmYWxzZSxcclxuICAgICAgICAgIGRlbGV0ZWFibGU6IGZhbHNlLFxyXG4gICAgICAgICAgc3ViTGV2ZWw6IDEsXHJcbiAgICAgICAgICBleHBhbmRNb3JlOiBmYWxzZSxcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICB7XHJcbiAgICAgICAgICBsYWJlbDogXCJGaXhlIChvcHQpXCIsXHJcbiAgICAgICAgICBrZXk6IFwiUGhvbmVcIixcclxuICAgICAgICAgIGV4cGFuZE9uYm9hcmRpbmc6IHRydWUsXHJcbiAgICAgICAgICBkZWZhdWx0VmFsdWU6IG51bGwsXHJcbiAgICAgICAgICBjb25kaXRpb246IHt9LFxyXG4gICAgICAgICAgdmFsdWU6IG51bGwsXHJcbiAgICAgICAgICBzaXplOiAyMCxcclxuICAgICAgICAgIGlzTWFuZGF0b3J5OiBmYWxzZSxcclxuICAgICAgICAgIG90aGVyVmFsdWU6ICcnLFxyXG4gICAgICAgICAgdHlwZTogXCJ0ZWxcIixcclxuICAgICAgICAgIGVkaXRhYmxlOiBmYWxzZSxcclxuICAgICAgICAgIGRlbGV0ZWFibGU6IGZhbHNlLFxyXG4gICAgICAgICAgc3ViTGV2ZWw6IDEsXHJcblxyXG4gICAgICAgICAgZXhwYW5kTW9yZTogZmFsc2UsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBsYWJlbDogXCJNb2JpbGVcIixcclxuICAgICAgICAgIGtleTogXCJNb2JpbGVQaG9uZVwiLFxyXG4gICAgICAgICAgZXhwYW5kT25ib2FyZGluZzogdHJ1ZSxcclxuICAgICAgICAgIGRlZmF1bHRWYWx1ZTogbnVsbCxcclxuICAgICAgICAgIGNvbmRpdGlvbjoge30sXHJcbiAgICAgICAgICB2YWx1ZTogbnVsbCxcclxuICAgICAgICAgIHNpemU6IDIwLFxyXG4gICAgICAgICAgaXNNYW5kYXRvcnk6IGZhbHNlLFxyXG4gICAgICAgICAgb3RoZXJWYWx1ZTogJycsXHJcbiAgICAgICAgICB0eXBlOiBcInRlbFwiLFxyXG4gICAgICAgICAgZWRpdGFibGU6IGZhbHNlLFxyXG4gICAgICAgICAgZGVsZXRlYWJsZTogZmFsc2UsXHJcbiAgICAgICAgICBzdWJMZXZlbDogMSxcclxuICAgICAgICAgIGV4cGFuZE1vcmU6IGZhbHNlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbGFiZWw6IFwiRm9uY3Rpb25cIixcclxuICAgICAgICAgIGtleTogXCJUaXRsZVwiLFxyXG4gICAgICAgICAgZXhwYW5kT25ib2FyZGluZzogdHJ1ZSxcclxuICAgICAgICAgIGRlZmF1bHRWYWx1ZTogbnVsbCxcclxuICAgICAgICAgIHZhbHVlOiBudWxsLFxyXG4gICAgICAgICAgY29uZGl0aW9uOiB7fSxcclxuICAgICAgICAgIHNpemU6IDgwLFxyXG4gICAgICAgICAgaXNNYW5kYXRvcnk6IHRydWUsXHJcbiAgICAgICAgICBvdGhlclZhbHVlOiAnJyxcclxuICAgICAgICAgIHR5cGU6IFwidGV4dFwiLFxyXG4gICAgICAgICAgZWRpdGFibGU6IGZhbHNlLFxyXG4gICAgICAgICAgZGVsZXRlYWJsZTogZmFsc2UsXHJcbiAgICAgICAgICBzdWJMZXZlbDogMSxcclxuICAgICAgICAgIGV4cGFuZE1vcmU6IGZhbHNlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbGFiZWw6IFwiRXRhYmxpc3NlbWVudCAvIFNpdGVcIixcclxuICAgICAgICAgIGtleTogXCJBY2NvdW50TmFtZVwiLFxyXG4gICAgICAgICAgZXhwYW5kT25ib2FyZGluZzogdHJ1ZSxcclxuICAgICAgICAgIGRlZmF1bHRWYWx1ZTogbnVsbCxcclxuICAgICAgICAgIHZhbHVlOiBudWxsLFxyXG4gICAgICAgICAgY29uZGl0aW9uOiB7fSxcclxuICAgICAgICAgIHNpemU6IDgwLFxyXG4gICAgICAgICAgaXNNYW5kYXRvcnk6IHRydWUsXHJcbiAgICAgICAgICBvdGhlclZhbHVlOiAnJyxcclxuICAgICAgICAgIHR5cGU6IFwidGV4dFwiLFxyXG4gICAgICAgICAgZWRpdGFibGU6IGZhbHNlLFxyXG4gICAgICAgICAgZGVsZXRlYWJsZTogZmFsc2UsXHJcbiAgICAgICAgICBzdWJMZXZlbDogMSxcclxuICAgICAgICAgIGV4cGFuZE1vcmU6IGZhbHNlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbGFiZWw6IFwiQWNjw6hzIGF1IHBvcnRhaWxcIixcclxuICAgICAgICAgIGtleTogXCJBY2Nfc19hdV9wb3J0YWlsX2NsaWVudF9Ob3dCb2FyZF9fY1wiLFxyXG4gICAgICAgICAgY29uZGl0aW9uOiB7fSxcclxuICAgICAgICAgIGV4cGFuZE9uYm9hcmRpbmc6IHRydWUsXHJcbiAgICAgICAgICBkZWZhdWx0VmFsdWU6IFt7IHZhbHVlOiBcIk91aVwiLCBjaGVja2VkOiBmYWxzZSB9LCB7IHZhbHVlOiBcIk5vblwiLCBjaGVja2VkOiBmYWxzZSB9XSxcclxuICAgICAgICAgIHZhbHVlOiBudWxsLFxyXG4gICAgICAgICAgc2l6ZTogMTAsXHJcbiAgICAgICAgICBpc01hbmRhdG9yeTogdHJ1ZSxcclxuICAgICAgICAgIG90aGVyVmFsdWU6ICcnLFxyXG4gICAgICAgICAgdHlwZTogXCJzZWxlY3RcIixcclxuICAgICAgICAgIGVkaXRhYmxlOiBmYWxzZSxcclxuICAgICAgICAgIGRlbGV0ZWFibGU6IGZhbHNlLFxyXG4gICAgICAgICAgc3ViTGV2ZWw6IDEsXHJcblxyXG4gICAgICAgICAgZXhwYW5kTW9yZTogZmFsc2UsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBsYWJlbDogXCJMYW5ndWVcIixcclxuICAgICAgICAgIGtleTogXCJMYW5ndWVfbWF0ZXJuZWxsZV9fY1wiLFxyXG4gICAgICAgICAgZXhwYW5kT25ib2FyZGluZzogdHJ1ZSxcclxuICAgICAgICAgIGRlZmF1bHRWYWx1ZTogW3sgdmFsdWU6IFwiRnJhbsOnYWlzXCIsIGNoZWNrZWQ6IGZhbHNlIH0sIHsgdmFsdWU6IFwiQW5nbGFpc1wiLCBjaGVja2VkOiBmYWxzZSB9XSxcclxuICAgICAgICAgIGNvbmRpdGlvbjoge30sXHJcbiAgICAgICAgICB2YWx1ZTogbnVsbCxcclxuICAgICAgICAgIHNpemU6IDEwLFxyXG4gICAgICAgICAgaXNNYW5kYXRvcnk6IHRydWUsXHJcbiAgICAgICAgICBvdGhlclZhbHVlOiAnJyxcclxuICAgICAgICAgIHR5cGU6IFwic2VsZWN0XCIsXHJcbiAgICAgICAgICBlZGl0YWJsZTogZmFsc2UsXHJcbiAgICAgICAgICBkZWxldGVhYmxlOiBmYWxzZSxcclxuICAgICAgICAgIHN1YkxldmVsOiAxLFxyXG4gICAgICAgICAgZXhwYW5kTW9yZTogZmFsc2UsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBsYWJlbDogXCJEYXRlIGQnZW50csOpZVwiLFxyXG4gICAgICAgICAga2V5OiBcImRhdGVfb2ZfZW50cnlcIixcclxuICAgICAgICAgIGV4cGFuZE9uYm9hcmRpbmc6IHRydWUsXHJcbiAgICAgICAgICBkZWZhdWx0VmFsdWU6IG51bGwsXHJcbiAgICAgICAgICB2YWx1ZTogbnVsbCxcclxuICAgICAgICAgIGNvbmRpdGlvbjoge30sXHJcbiAgICAgICAgICBzaXplOiA4MCxcclxuICAgICAgICAgIGlzTWFuZGF0b3J5OiB0cnVlLFxyXG4gICAgICAgICAgb3RoZXJWYWx1ZTogJycsXHJcbiAgICAgICAgICB0eXBlOiBcImRhdGVcIixcclxuICAgICAgICAgIGVkaXRhYmxlOiBmYWxzZSxcclxuICAgICAgICAgIGRlbGV0ZWFibGU6IGZhbHNlLFxyXG4gICAgICAgICAgc3ViTGV2ZWw6IDEsXHJcbiAgICAgICAgICBleHBhbmRNb3JlOiBmYWxzZSxcclxuICAgICAgICB9LFxyXG4gICAgICBdLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJTZXNzaW9uIGQndXRpbGlzYXRldXJcIixcclxuICAgICAga2V5OiBcInNlc3Npb25kJ3V0aWxpc2F0ZXVyXCIsXHJcbiAgICAgIGVkaXRhYmxlOiB0cnVlLFxyXG4gICAgICBpc0NvbmRpdGlvbmFsOiBmYWxzZSxcclxuICAgICAgY29uZGl0aW9uVmFsdWU6IFwiXCIsXHJcbiAgICAgIGNvbmRpdGlvbjoge30sXHJcbiAgICAgIGRlbGV0ZWFibGU6IHRydWUsXHJcbiAgICAgIHNlbGVjdGVkOiB0cnVlLFxyXG4gICAgICBleHBhbmRNb3JlOiBmYWxzZSxcclxuICAgICAgZXhwYW5kT25ib2FyZGluZzogdHJ1ZSxcclxuICAgICAgZGVmYXVsdFZhbHVlOiBmYWxzZSxcclxuICAgICAgc3VmZml4RW5kcG9pbnQ6IFwiY2F0ZWdvcnkvdXNlci1zZXNzaW9uXCIsXHJcbiAgICAgIHNlbGVjdG9yOiB7XHJcbiAgICAgICAgbGFiZWw6IFwiQ29tcGFueVwiLFxyXG4gICAgICAgIGtleTogXCJDb21wYW55XCIsXHJcbiAgICAgICAgZGVmYXVsdFZhbHVlOiBbeyB2YWx1ZTogXCJOb3d0ZWFtXCIsIGNoZWNrZWQ6IHRydWUgfSwgeyB2YWx1ZTogXCJJbnRlcm5hbFwiLCBjaGVja2VkOiBmYWxzZSB9XSxcclxuICAgICAgICB2YWx1ZTogXCJOb3d0ZWFtXCJcclxuICAgICAgfSxcclxuICAgICAgdGlja2V0VHlwZToge1xyXG4gICAgICAgIGxhYmVsOiBcIlR5cGUgZGUgdGlja2V0XCIsXHJcbiAgICAgICAga2V5OiBcInR5Y2tldFR5cGVcIixcclxuICAgICAgICBkZWZhdWx0VmFsdWU6IFt7IHZhbHVlOiBcIkNyw6lhdGlvbiBkZSBjb21wdGVcIiwgY2hlY2tlZDogdHJ1ZSwga2V5OiBcIkNyZWF0aW9uX2RlX2NvbXB0ZVwiIH0sIHsgdmFsdWU6IFwiQ29uZmlndXJhdGlvbiBkZSBwb3N0ZVwiLCBjaGVja2VkOiBmYWxzZSwga2V5OiBcIkNvbmZpZ3VyYXRpb25fZGVfcG9zdGVcIiB9XSxcclxuICAgICAgICB2YWx1ZTogXCJDcmVhdGlvbl9kZV9jb21wdGVcIlxyXG4gICAgICB9LFxyXG4gICAgICBmb3JtczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIGxhYmVsOiBcIlV0aWxpc2F0ZXVyIGxvY2FsIMOgIGNyw6llclwiLFxyXG4gICAgICAgICAga2V5OiBcIlVzZXJMb2NhbFRvQ3JlYXRlXCIsXHJcbiAgICAgICAgICBleHBhbmRPbmJvYXJkaW5nOiB0cnVlLFxyXG4gICAgICAgICAgZGVmYXVsdFZhbHVlOiBudWxsLFxyXG4gICAgICAgICAgdmFsdWU6IHRydWUsXHJcbiAgICAgICAgICBzaXplOiA4MCxcclxuICAgICAgICAgIGlzTWFuZGF0b3J5OiBmYWxzZSxcclxuICAgICAgICAgIG90aGVyVmFsdWU6ICcnLFxyXG4gICAgICAgICAgdHlwZTogXCJjaGVja2JveFwiLFxyXG4gICAgICAgICAgZWRpdGFibGU6IHRydWUsXHJcbiAgICAgICAgICBpc0NvbmRpdGlvbmFsOiBmYWxzZSxcclxuICAgICAgICAgIGNvbmRpdGlvblZhbHVlOiBcIlwiLFxyXG4gICAgICAgICAgY29uZGl0aW9uOiB7fSxcclxuICAgICAgICAgIGRlbGV0ZWFibGU6IHRydWUsXHJcbiAgICAgICAgICBzdWJMZXZlbDogMSxcclxuICAgICAgICAgIGV4cGFuZE1vcmU6IGZhbHNlLFxyXG4gICAgICAgICAgLypzZWxlY3Rvcjoge1xyXG4gICAgICAgICAgICBsYWJlbDogXCJDb21wYW55XCIsXHJcbiAgICAgICAgICAgIGtleTogXCJDb21wYW55XCIsXHJcbiAgICAgICAgICAgIGRlZmF1bHRWYWx1ZTogW3sgdmFsdWU6IFwiTm93dGVhbVwiLCBjaGVja2VkOiB0cnVlIH0sIHsgdmFsdWU6IFwiSW50ZXJuYWxcIiwgY2hlY2tlZDogZmFsc2UgfV0sXHJcbiAgICAgICAgICAgIHZhbHVlOiBcIk5vd3RlYW1cIlxyXG4gICAgICAgICAgfSwqL1xyXG4gICAgICAgICAgZm9ybXM6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIGxhYmVsOiBcIkxvZ2luXCIsXHJcbiAgICAgICAgICAgICAga2V5OiBcIkxvZ2luXCIsXHJcbiAgICAgICAgICAgICAgZXhwYW5kT25ib2FyZGluZzogdHJ1ZSxcclxuICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU6IG51bGwsXHJcbiAgICAgICAgICAgICAgdmFsdWU6IG51bGwsXHJcbiAgICAgICAgICAgICAgc2l6ZTogODAsXHJcbiAgICAgICAgICAgICAgaXNNYW5kYXRvcnk6IHRydWUsXHJcbiAgICAgICAgICAgICAgb3RoZXJWYWx1ZTogJycsXHJcbiAgICAgICAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXHJcbiAgICAgICAgICAgICAgZWRpdGFibGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgaXNDb25kaXRpb25hbDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgY29uZGl0aW9uVmFsdWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgY29uZGl0aW9uOiB7fSxcclxuICAgICAgICAgICAgICBkZWxldGVhYmxlOiBmYWxzZSxcclxuICAgICAgICAgICAgICBzdWJMZXZlbDogMixcclxuICAgICAgICAgICAgICBleHBhbmRNb3JlOiBmYWxzZSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIGxhYmVsOiBcIk1vdCBkZSBwYXNzZVwiLFxyXG4gICAgICAgICAgICAgIGtleTogXCJQYXNzd29yZFwiLFxyXG4gICAgICAgICAgICAgIGV4cGFuZE9uYm9hcmRpbmc6IHRydWUsXHJcbiAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlOiBudWxsLFxyXG4gICAgICAgICAgICAgIHZhbHVlOiBudWxsLFxyXG4gICAgICAgICAgICAgIHNpemU6IDgwLFxyXG4gICAgICAgICAgICAgIGlzTWFuZGF0b3J5OiB0cnVlLFxyXG4gICAgICAgICAgICAgIG90aGVyVmFsdWU6ICcnLFxyXG4gICAgICAgICAgICAgIHR5cGU6IFwicGFzc3dvcmRcIixcclxuICAgICAgICAgICAgICBlZGl0YWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgICBpc0NvbmRpdGlvbmFsOiBmYWxzZSxcclxuICAgICAgICAgICAgICBjb25kaXRpb25WYWx1ZTogXCJcIixcclxuICAgICAgICAgICAgICBjb25kaXRpb246IHt9LFxyXG4gICAgICAgICAgICAgIGRlbGV0ZWFibGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgc3ViTGV2ZWw6IDIsXHJcbiAgICAgICAgICAgICAgZXhwYW5kTW9yZTogZmFsc2UsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICBdLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbGFiZWw6IFwiVXRpbGlzYXRldXIgQUQgKHNlcnZldXIpIMOgIGNyw6llclwiLFxyXG4gICAgICAgICAga2V5OiBcIlVzZXJTZXJ2ZXJUb0NyZWF0ZVwiLFxyXG4gICAgICAgICAgZXhwYW5kT25ib2FyZGluZzogdHJ1ZSxcclxuICAgICAgICAgIGRlZmF1bHRWYWx1ZTogbnVsbCxcclxuICAgICAgICAgIHZhbHVlOiB0cnVlLFxyXG4gICAgICAgICAgc2l6ZTogODAsXHJcbiAgICAgICAgICBpc01hbmRhdG9yeTogZmFsc2UsXHJcbiAgICAgICAgICBvdGhlclZhbHVlOiAnJyxcclxuICAgICAgICAgIHR5cGU6IFwiY2hlY2tib3hcIixcclxuICAgICAgICAgIGVkaXRhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgaXNDb25kaXRpb25hbDogZmFsc2UsXHJcbiAgICAgICAgICBjb25kaXRpb25WYWx1ZTogXCJcIixcclxuICAgICAgICAgIGNvbmRpdGlvbjoge30sXHJcbiAgICAgICAgICBkZWxldGVhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgc3ViTGV2ZWw6IDEsXHJcbiAgICAgICAgICBleHBhbmRNb3JlOiBmYWxzZSxcclxuICAgICAgICAgIGZvcm1zOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBsYWJlbDogXCJOb20gZGUgZG9tYWluZVwiLFxyXG4gICAgICAgICAgICAgIGtleTogXCJEb21haW5OYW1lXCIsXHJcbiAgICAgICAgICAgICAgZXhwYW5kT25ib2FyZGluZzogdHJ1ZSxcclxuICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU6IG51bGwsXHJcbiAgICAgICAgICAgICAgdmFsdWU6IG51bGwsXHJcbiAgICAgICAgICAgICAgc2l6ZTogODAsXHJcbiAgICAgICAgICAgICAgaXNNYW5kYXRvcnk6IHRydWUsXHJcbiAgICAgICAgICAgICAgb3RoZXJWYWx1ZTogJycsXHJcbiAgICAgICAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXHJcbiAgICAgICAgICAgICAgZWRpdGFibGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgaXNDb25kaXRpb25hbDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgY29uZGl0aW9uVmFsdWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgY29uZGl0aW9uOiB7fSxcclxuICAgICAgICAgICAgICBkZWxldGVhYmxlOiBmYWxzZSxcclxuICAgICAgICAgICAgICBzdWJMZXZlbDogMixcclxuICAgICAgICAgICAgICBleHBhbmRNb3JlOiBmYWxzZSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIGxhYmVsOiBcIlZvdHJlIGxvZ2luXCIsXHJcbiAgICAgICAgICAgICAga2V5OiBcIllvdXJMb2dpblwiLFxyXG4gICAgICAgICAgICAgIGV4cGFuZE9uYm9hcmRpbmc6IHRydWUsXHJcbiAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlOiBudWxsLFxyXG4gICAgICAgICAgICAgIHZhbHVlOiBudWxsLFxyXG4gICAgICAgICAgICAgIHNpemU6IDgwLFxyXG4gICAgICAgICAgICAgIGlzTWFuZGF0b3J5OiB0cnVlLFxyXG4gICAgICAgICAgICAgIG90aGVyVmFsdWU6ICcnLFxyXG4gICAgICAgICAgICAgIHR5cGU6IFwidGV4dFwiLFxyXG4gICAgICAgICAgICAgIGVkaXRhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICAgIGlzQ29uZGl0aW9uYWw6IGZhbHNlLFxyXG4gICAgICAgICAgICAgIGNvbmRpdGlvblZhbHVlOiBcIlwiLFxyXG4gICAgICAgICAgICAgIGNvbmRpdGlvbjoge30sXHJcbiAgICAgICAgICAgICAgZGVsZXRlYWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgICBzdWJMZXZlbDogMixcclxuICAgICAgICAgICAgICBleHBhbmRNb3JlOiBmYWxzZSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIGxhYmVsOiBcIlZvdHJlIG1vdCBkZSBwYXNzZVwiLFxyXG4gICAgICAgICAgICAgIGtleTogXCJZb3VyUGFzc3dvcmRcIixcclxuICAgICAgICAgICAgICBleHBhbmRPbmJvYXJkaW5nOiB0cnVlLFxyXG4gICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZTogbnVsbCxcclxuICAgICAgICAgICAgICB2YWx1ZTogbnVsbCxcclxuICAgICAgICAgICAgICBzaXplOiA4MCxcclxuICAgICAgICAgICAgICBpc01hbmRhdG9yeTogdHJ1ZSxcclxuICAgICAgICAgICAgICBvdGhlclZhbHVlOiAnJyxcclxuICAgICAgICAgICAgICB0eXBlOiBcInBhc3N3b3JkXCIsXHJcbiAgICAgICAgICAgICAgZWRpdGFibGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgaXNDb25kaXRpb25hbDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgY29uZGl0aW9uVmFsdWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgY29uZGl0aW9uOiB7fSxcclxuICAgICAgICAgICAgICBkZWxldGVhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICAgIHN1YkxldmVsOiAyLFxyXG4gICAgICAgICAgICAgIGV4cGFuZE1vcmU6IGZhbHNlLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgbGFiZWw6IFwiR3JvdXBlIGRlIHPDqWN1cml0w6lcIixcclxuICAgICAgICAgICAgICBrZXk6IFwiR3JvdXBTZWN1cml0eVwiLFxyXG4gICAgICAgICAgICAgIGV4cGFuZE9uYm9hcmRpbmc6IHRydWUsXHJcbiAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlOiBudWxsLFxyXG4gICAgICAgICAgICAgIHZhbHVlOiB0cnVlLFxyXG4gICAgICAgICAgICAgIHNpemU6IDgwLFxyXG4gICAgICAgICAgICAgIGlzTWFuZGF0b3J5OiB0cnVlLFxyXG4gICAgICAgICAgICAgIG90aGVyVmFsdWU6ICcnLFxyXG4gICAgICAgICAgICAgIHR5cGU6IFwiY2hlY2tib3hcIixcclxuICAgICAgICAgICAgICBlZGl0YWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgICBpc0NvbmRpdGlvbmFsOiBmYWxzZSxcclxuICAgICAgICAgICAgICBjb25kaXRpb25WYWx1ZTogXCJcIixcclxuICAgICAgICAgICAgICBjb25kaXRpb246IHt9LFxyXG4gICAgICAgICAgICAgIGRlbGV0ZWFibGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgc3ViTGV2ZWw6IDIsXHJcbiAgICAgICAgICAgICAgZXhwYW5kTW9yZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgZm9ybXM6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiVXRpbGlzYXRldXIgYXZlYyBsZXMgZHJvaXRzIHNpbWlsYWlyZXNcIixcclxuICAgICAgICAgICAgICAgICAga2V5OiBcIlVzZXJXaXRoU2ltaWxhckFjY2Vzc1wiLFxyXG4gICAgICAgICAgICAgICAgICBleHBhbmRPbmJvYXJkaW5nOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU6IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgICBzaXplOiA4MCxcclxuICAgICAgICAgICAgICAgICAgaXNNYW5kYXRvcnk6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgIG90aGVyVmFsdWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICB0eXBlOiBcInRleHRcIixcclxuICAgICAgICAgICAgICAgICAgZWRpdGFibGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgIGlzQ29uZGl0aW9uYWw6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICBjb25kaXRpb25WYWx1ZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgY29uZGl0aW9uOiB7fSxcclxuICAgICAgICAgICAgICAgICAgZGVsZXRlYWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgc3ViTGV2ZWw6IDMsXHJcbiAgICAgICAgICAgICAgICAgIGV4cGFuZE1vcmU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiRGVzY3JpcHRpb25zXCIsXHJcbiAgICAgICAgICAgICAgICAgIGtleTogXCJEZXNjcmlwdGlvblwiLFxyXG4gICAgICAgICAgICAgICAgICBleHBhbmRPbmJvYXJkaW5nOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU6IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgICBzaXplOiAyNTUsXHJcbiAgICAgICAgICAgICAgICAgIGlzTWFuZGF0b3J5OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICBvdGhlclZhbHVlOiAnJyxcclxuICAgICAgICAgICAgICAgICAgdHlwZTogXCJ0ZXh0YXJlYVwiLFxyXG4gICAgICAgICAgICAgICAgICBlZGl0YWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgaXNDb25kaXRpb25hbDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgIGNvbmRpdGlvblZhbHVlOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICBjb25kaXRpb246IHt9LFxyXG4gICAgICAgICAgICAgICAgICBkZWxldGVhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICBzdWJMZXZlbDogMyxcclxuICAgICAgICAgICAgICAgICAgZXhwYW5kTW9yZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICBdLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIF0sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIk1lc3NhZ2VyaWVcIixcclxuICAgICAga2V5OiAnbWVzc2FnZXJpZScsXHJcbiAgICAgIGV4cGFuZE1vcmU6IGZhbHNlLFxyXG4gICAgICBzdWZmaXhFbmRwb2ludDogXCJjYXRlZ29yeS9tZXNzYWdlcmllXCIsXHJcbiAgICAgIHNlbGVjdGVkOiB0cnVlLFxyXG4gICAgICBlZGl0YWJsZTogdHJ1ZSxcclxuICAgICAgaXNDb25kaXRpb25hbDogZmFsc2UsXHJcbiAgICAgIGNvbmRpdGlvblZhbHVlOiBcIlwiLFxyXG4gICAgICBjb25kaXRpb246IHt9LFxyXG4gICAgICBkZWxldGVhYmxlOiB0cnVlLFxyXG4gICAgICBleHBhbmRPbmJvYXJkaW5nOiB0cnVlLFxyXG4gICAgICBkZWZhdWx0VmFsdWU6IGZhbHNlLFxyXG4gICAgICBzZWxlY3Rvcjoge1xyXG4gICAgICAgIGxhYmVsOiBcIkNvbXBhbnlcIixcclxuICAgICAgICBrZXk6IFwiQ29tcGFueVwiLFxyXG4gICAgICAgIGRlZmF1bHRWYWx1ZTogW3sgdmFsdWU6IFwiTm93dGVhbVwiLCBjaGVja2VkOiB0cnVlIH0sIHsgdmFsdWU6IFwiSW50ZXJuYWxcIiwgY2hlY2tlZDogZmFsc2UgfV0sXHJcbiAgICAgICAgdmFsdWU6IFwiTm93dGVhbVwiXHJcbiAgICAgIH0sXHJcbiAgICAgIHRpY2tldFR5cGU6IHtcclxuICAgICAgICBsYWJlbDogXCJUeXBlIGRlIHRpY2tldFwiLFxyXG4gICAgICAgIGtleTogXCJ0eWNrZXRUeXBlXCIsXHJcbiAgICAgICAgZGVmYXVsdFZhbHVlOiBbeyB2YWx1ZTogXCJDcsOpYXRpb24gZGUgY29tcHRlXCIsIGNoZWNrZWQ6IHRydWUsIGtleTogXCJDcmVhdGlvbl9kZV9jb21wdGVcIiB9LCB7IHZhbHVlOiBcIkNvbmZpZ3VyYXRpb24gZGUgcG9zdGVcIiwgY2hlY2tlZDogZmFsc2UsIGtleTogXCJDb25maWd1cmF0aW9uX2RlX3Bvc3RlXCIgfV0sXHJcbiAgICAgICAgdmFsdWU6IFwiQ3JlYXRpb25fZGVfY29tcHRlXCJcclxuICAgICAgfSxcclxuICAgICAgZm9ybXM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBsYWJlbDogXCJBZHJlc3NlIG1haWwgw6AgY3LDqWVyXCIsXHJcbiAgICAgICAgICBrZXk6IFwiRW1haWxUb0NyZWF0ZVwiLFxyXG4gICAgICAgICAgZXhwYW5kT25ib2FyZGluZzogdHJ1ZSxcclxuICAgICAgICAgIGRlZmF1bHRWYWx1ZTogbnVsbCxcclxuICAgICAgICAgIHZhbHVlOiB0cnVlLFxyXG4gICAgICAgICAgc2l6ZTogODAsXHJcbiAgICAgICAgICBpc01hbmRhdG9yeTogdHJ1ZSxcclxuICAgICAgICAgIG90aGVyVmFsdWU6ICcnLFxyXG4gICAgICAgICAgdHlwZTogXCJjaGVja2JveFwiLFxyXG4gICAgICAgICAgZWRpdGFibGU6IHRydWUsXHJcbiAgICAgICAgICBpc0NvbmRpdGlvbmFsOiBmYWxzZSxcclxuICAgICAgICAgIGNvbmRpdGlvblZhbHVlOiBcIlwiLFxyXG4gICAgICAgICAgY29uZGl0aW9uOiB7fSxcclxuICAgICAgICAgIGRlbGV0ZWFibGU6IHRydWUsXHJcbiAgICAgICAgICBzdWJMZXZlbDogMSxcclxuICAgICAgICAgIGV4cGFuZE1vcmU6IGZhbHNlLFxyXG4gICAgICAgICAgLypzZWxlY3Rvcjoge1xyXG4gICAgICAgICAgICBsYWJlbDogXCJDb21wYW55XCIsXHJcbiAgICAgICAgICAgIGtleTogXCJDb21wYW55XCIsXHJcbiAgICAgICAgICAgIGRlZmF1bHRWYWx1ZTogW3sgdmFsdWU6IFwiTm93dGVhbVwiLCBjaGVja2VkOiB0cnVlIH0sIHsgdmFsdWU6IFwiSW50ZXJuYWxcIiwgY2hlY2tlZDogZmFsc2UgfV0sXHJcbiAgICAgICAgICAgIHZhbHVlOiBcIk5vd3RlYW1cIlxyXG4gICAgICAgICAgfSwqL1xyXG4gICAgICAgICAgZm9ybXM6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIGxhYmVsOiBcIkFkcmVzc2UgbWFpbFwiLFxyXG4gICAgICAgICAgICAgIGtleTogXCJFbWFpbFwiLFxyXG4gICAgICAgICAgICAgIGV4cGFuZE9uYm9hcmRpbmc6IHRydWUsXHJcbiAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlOiBudWxsLFxyXG4gICAgICAgICAgICAgIHZhbHVlOiBudWxsLFxyXG4gICAgICAgICAgICAgIHNpemU6IDgwLFxyXG4gICAgICAgICAgICAgIGlzTWFuZGF0b3J5OiB0cnVlLFxyXG4gICAgICAgICAgICAgIG90aGVyVmFsdWU6ICcnLFxyXG4gICAgICAgICAgICAgIHR5cGU6IFwiZW1haWxcIixcclxuICAgICAgICAgICAgICBlZGl0YWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgICBpc0NvbmRpdGlvbmFsOiBmYWxzZSxcclxuICAgICAgICAgICAgICBjb25kaXRpb25WYWx1ZTogXCJcIixcclxuICAgICAgICAgICAgICBjb25kaXRpb246IHt9LFxyXG4gICAgICAgICAgICAgIGRlbGV0ZWFibGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgc3ViTGV2ZWw6IDIsXHJcbiAgICAgICAgICAgICAgZXhwYW5kTW9yZTogZmFsc2UsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBsYWJlbDogXCJUeXBlIGRlIGxpY2VuY2UgKHNpIGfDqXLDqWVzIHBhciBsZSBjbGllbnQpXCIsXHJcbiAgICAgICAgICAgICAga2V5OiBcIlNlcmlhbEtleVwiLFxyXG4gICAgICAgICAgICAgIGV4cGFuZE9uYm9hcmRpbmc6IHRydWUsXHJcbiAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlOiBudWxsLFxyXG4gICAgICAgICAgICAgIHZhbHVlOiBudWxsLFxyXG4gICAgICAgICAgICAgIHNpemU6IDEwMDAsXHJcbiAgICAgICAgICAgICAgaXNNYW5kYXRvcnk6IHRydWUsXHJcbiAgICAgICAgICAgICAgb3RoZXJWYWx1ZTogJycsXHJcbiAgICAgICAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXHJcbiAgICAgICAgICAgICAgZWRpdGFibGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgaXNDb25kaXRpb25hbDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgY29uZGl0aW9uVmFsdWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgY29uZGl0aW9uOiB7fSxcclxuICAgICAgICAgICAgICBkZWxldGVhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICAgIHN1YkxldmVsOiAyLFxyXG4gICAgICAgICAgICAgIGV4cGFuZE1vcmU6IGZhbHNlLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgXSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGxhYmVsOiBcIkxpc3RlcyAgZGUgZGlzdHJpYnV0aW9uXCIsXHJcbiAgICAgICAgICBrZXk6IFwiRGlzdHJpYnV0aW9uTGlzdFwiLFxyXG4gICAgICAgICAgZXhwYW5kT25ib2FyZGluZzogdHJ1ZSxcclxuICAgICAgICAgIGRlZmF1bHRWYWx1ZTogbnVsbCxcclxuICAgICAgICAgIHZhbHVlOiB0cnVlLFxyXG4gICAgICAgICAgc2l6ZTogODAsXHJcbiAgICAgICAgICBpc01hbmRhdG9yeTogdHJ1ZSxcclxuICAgICAgICAgIG90aGVyVmFsdWU6ICcnLFxyXG4gICAgICAgICAgdHlwZTogXCJjaGVja2JveFwiLFxyXG4gICAgICAgICAgZWRpdGFibGU6IHRydWUsXHJcbiAgICAgICAgICBpc0NvbmRpdGlvbmFsOiBmYWxzZSxcclxuICAgICAgICAgIGNvbmRpdGlvblZhbHVlOiBcIlwiLFxyXG4gICAgICAgICAgY29uZGl0aW9uOiB7fSxcclxuICAgICAgICAgIGRlbGV0ZWFibGU6IHRydWUsXHJcbiAgICAgICAgICBzdWJMZXZlbDogMSxcclxuICAgICAgICAgIGV4cGFuZE1vcmU6IGZhbHNlLFxyXG4gICAgICAgICAgLypzZWxlY3Rvcjoge1xyXG4gICAgICAgICAgICBsYWJlbDogXCJDb21wYW55XCIsXHJcbiAgICAgICAgICAgIGtleTogXCJDb21wYW55XCIsXHJcbiAgICAgICAgICAgIGRlZmF1bHRWYWx1ZTogW3sgdmFsdWU6IFwiTm93dGVhbVwiLCBjaGVja2VkOiB0cnVlIH0sIHsgdmFsdWU6IFwiSW50ZXJuYWxcIiwgY2hlY2tlZDogZmFsc2UgfV0sXHJcbiAgICAgICAgICAgIHZhbHVlOiBcIk5vd3RlYW1cIlxyXG4gICAgICAgICAgfSwqL1xyXG4gICAgICAgICAgZm9ybXM6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIGxhYmVsOiBcIlV0aWxpc2F0ZXVyIGF2ZWMgbGVzIGxpc3RlcyBzaW1pbGFpcmVzXCIsXHJcbiAgICAgICAgICAgICAga2V5OiBcIlVzZXJXaXRoU2ltaWxhckxpc3RcIixcclxuICAgICAgICAgICAgICBleHBhbmRPbmJvYXJkaW5nOiB0cnVlLFxyXG4gICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZTogbnVsbCxcclxuICAgICAgICAgICAgICB2YWx1ZTogbnVsbCxcclxuICAgICAgICAgICAgICBzaXplOiA4MCxcclxuICAgICAgICAgICAgICBpc01hbmRhdG9yeTogdHJ1ZSxcclxuICAgICAgICAgICAgICBvdGhlclZhbHVlOiAnJyxcclxuICAgICAgICAgICAgICB0eXBlOiBcInRleHRcIixcclxuICAgICAgICAgICAgICBlZGl0YWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgICBpc0NvbmRpdGlvbmFsOiBmYWxzZSxcclxuICAgICAgICAgICAgICBjb25kaXRpb25WYWx1ZTogXCJcIixcclxuICAgICAgICAgICAgICBjb25kaXRpb246IHt9LFxyXG4gICAgICAgICAgICAgIGRlbGV0ZWFibGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgc3ViTGV2ZWw6IDIsXHJcbiAgICAgICAgICAgICAgZXhwYW5kTW9yZTogZmFsc2UsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBsYWJlbDogXCJEZXNjcmlwdGlvbnNcIixcclxuICAgICAgICAgICAgICBrZXk6IFwiRGVzY3JpcHRpb25cIixcclxuICAgICAgICAgICAgICBleHBhbmRPbmJvYXJkaW5nOiB0cnVlLFxyXG4gICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZTogbnVsbCxcclxuICAgICAgICAgICAgICB2YWx1ZTogbnVsbCxcclxuICAgICAgICAgICAgICBzaXplOiAxMDAwLFxyXG4gICAgICAgICAgICAgIGlzTWFuZGF0b3J5OiB0cnVlLFxyXG4gICAgICAgICAgICAgIG90aGVyVmFsdWU6ICcnLFxyXG4gICAgICAgICAgICAgIHR5cGU6IFwidGV4dGFyZWFcIixcclxuICAgICAgICAgICAgICBlZGl0YWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgICBpc0NvbmRpdGlvbmFsOiBmYWxzZSxcclxuICAgICAgICAgICAgICBjb25kaXRpb25WYWx1ZTogXCJcIixcclxuICAgICAgICAgICAgICBjb25kaXRpb246IHt9LFxyXG4gICAgICAgICAgICAgIGRlbGV0ZWFibGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgc3ViTGV2ZWw6IDIsXHJcbiAgICAgICAgICAgICAgZXhwYW5kTW9yZTogZmFsc2UsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICBdLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbGFiZWw6IFwiQWpvdXRlciBkZXMgYm9pdGVzIG1haWxzIGTDqWzDqWd1w6lzXCIsXHJcbiAgICAgICAgICBrZXk6IFwiQWRkSW5ib3hNYWlsRGVsZWdhdGVcIixcclxuICAgICAgICAgIGV4cGFuZE9uYm9hcmRpbmc6IHRydWUsXHJcbiAgICAgICAgICBkZWZhdWx0VmFsdWU6IG51bGwsXHJcbiAgICAgICAgICB2YWx1ZTogdHJ1ZSxcclxuICAgICAgICAgIHNpemU6IDgwLFxyXG4gICAgICAgICAgaXNNYW5kYXRvcnk6IHRydWUsXHJcbiAgICAgICAgICBvdGhlclZhbHVlOiAnJyxcclxuICAgICAgICAgIHR5cGU6IFwiY2hlY2tib3hcIixcclxuICAgICAgICAgIGVkaXRhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgaXNDb25kaXRpb25hbDogZmFsc2UsXHJcbiAgICAgICAgICBjb25kaXRpb25WYWx1ZTogXCJcIixcclxuICAgICAgICAgIGNvbmRpdGlvbjoge30sXHJcbiAgICAgICAgICBkZWxldGVhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgc3ViTGV2ZWw6IDEsXHJcbiAgICAgICAgICBleHBhbmRNb3JlOiBmYWxzZSxcclxuICAgICAgICAgIC8qc2VsZWN0b3I6IHtcclxuICAgICAgICAgICAgbGFiZWw6IFwiQ29tcGFueVwiLFxyXG4gICAgICAgICAgICBrZXk6IFwiQ29tcGFueVwiLFxyXG4gICAgICAgICAgICBkZWZhdWx0VmFsdWU6IFt7IHZhbHVlOiBcIk5vd3RlYW1cIiwgY2hlY2tlZDogdHJ1ZSB9LCB7IHZhbHVlOiBcIkludGVybmFsXCIsIGNoZWNrZWQ6IGZhbHNlIH1dLFxyXG4gICAgICAgICAgICB2YWx1ZTogXCJOb3d0ZWFtXCJcclxuICAgICAgICAgIH0sKi9cclxuICAgICAgICAgIGZvcm1zOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBsYWJlbDogXCJEZXNjcmlwdGlvbnNcIixcclxuICAgICAgICAgICAgICBrZXk6IFwiRGVzY3JpcHRpb25cIixcclxuICAgICAgICAgICAgICBleHBhbmRPbmJvYXJkaW5nOiB0cnVlLFxyXG4gICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZTogbnVsbCxcclxuICAgICAgICAgICAgICB2YWx1ZTogbnVsbCxcclxuICAgICAgICAgICAgICBzaXplOiAxMDAwLFxyXG4gICAgICAgICAgICAgIGlzTWFuZGF0b3J5OiB0cnVlLFxyXG4gICAgICAgICAgICAgIG90aGVyVmFsdWU6ICcnLFxyXG4gICAgICAgICAgICAgIHR5cGU6IFwidGV4dGFyZWFcIixcclxuICAgICAgICAgICAgICBlZGl0YWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgICBpc0NvbmRpdGlvbmFsOiBmYWxzZSxcclxuICAgICAgICAgICAgICBjb25kaXRpb25WYWx1ZTogXCJcIixcclxuICAgICAgICAgICAgICBjb25kaXRpb246IHt9LFxyXG4gICAgICAgICAgICAgIGRlbGV0ZWFibGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgc3ViTGV2ZWw6IDIsXHJcbiAgICAgICAgICAgICAgZXhwYW5kTW9yZTogZmFsc2UsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICBdLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIF0sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIlNlcnZldXJcIixcclxuICAgICAga2V5OiAnc2VydmV1cicsXHJcbiAgICAgIGV4cGFuZE1vcmU6IGZhbHNlLFxyXG4gICAgICBzdWZmaXhFbmRwb2ludDogXCJjYXRlZ29yeS9zZXJ2ZXVyXCIsXHJcbiAgICAgIHNlbGVjdGVkOiB0cnVlLFxyXG4gICAgICBlZGl0YWJsZTogdHJ1ZSxcclxuICAgICAgaXNDb25kaXRpb25hbDogZmFsc2UsXHJcbiAgICAgIGNvbmRpdGlvblZhbHVlOiBcIlwiLFxyXG4gICAgICBjb25kaXRpb246IHt9LFxyXG4gICAgICBkZWxldGVhYmxlOiB0cnVlLFxyXG4gICAgICBleHBhbmRPbmJvYXJkaW5nOiB0cnVlLFxyXG4gICAgICBkZWZhdWx0VmFsdWU6IGZhbHNlLFxyXG4gICAgICBzZWxlY3Rvcjoge1xyXG4gICAgICAgIGxhYmVsOiBcIkNvbXBhbnlcIixcclxuICAgICAgICBrZXk6IFwiQ29tcGFueVwiLFxyXG4gICAgICAgIGRlZmF1bHRWYWx1ZTogW3sgdmFsdWU6IFwiTm93dGVhbVwiLCBjaGVja2VkOiB0cnVlIH0sIHsgdmFsdWU6IFwiSW50ZXJuYWxcIiwgY2hlY2tlZDogZmFsc2UgfV0sXHJcbiAgICAgICAgdmFsdWU6IFwiTm93dGVhbVwiXHJcbiAgICAgIH0sXHJcbiAgICAgIHRpY2tldFR5cGU6IHtcclxuICAgICAgICBsYWJlbDogXCJUeXBlIGRlIHRpY2tldFwiLFxyXG4gICAgICAgIGtleTogXCJ0eWNrZXRUeXBlXCIsXHJcbiAgICAgICAgZGVmYXVsdFZhbHVlOiBbeyB2YWx1ZTogXCJDcsOpYXRpb24gZGUgY29tcHRlXCIsIGNoZWNrZWQ6IHRydWUsIGtleTogXCJDcmVhdGlvbl9kZV9jb21wdGVcIiB9LCB7IHZhbHVlOiBcIkNvbmZpZ3VyYXRpb24gZGUgcG9zdGVcIiwgY2hlY2tlZDogZmFsc2UsIGtleTogXCJDb25maWd1cmF0aW9uX2RlX3Bvc3RlXCIgfV0sXHJcbiAgICAgICAgdmFsdWU6IFwiQ3JlYXRpb25fZGVfY29tcHRlXCJcclxuICAgICAgfSxcclxuICAgICAgZm9ybXM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBsYWJlbDogXCJBY2PDqHMgYXV4IGxlY3RldXJzIHLDqXNlYXV4XCIsXHJcbiAgICAgICAgICBrZXk6IFwiUmVhZE5ldHdvcmtBY2Nlc3NcIixcclxuICAgICAgICAgIGV4cGFuZE9uYm9hcmRpbmc6IHRydWUsXHJcbiAgICAgICAgICBkZWZhdWx0VmFsdWU6IG51bGwsXHJcbiAgICAgICAgICB2YWx1ZTogdHJ1ZSxcclxuICAgICAgICAgIHNpemU6IDgwLFxyXG4gICAgICAgICAgaXNNYW5kYXRvcnk6IGZhbHNlLFxyXG4gICAgICAgICAgb3RoZXJWYWx1ZTogJycsXHJcbiAgICAgICAgICB0eXBlOiBcImNoZWNrYm94XCIsXHJcbiAgICAgICAgICBlZGl0YWJsZTogdHJ1ZSxcclxuICAgICAgICAgIGlzQ29uZGl0aW9uYWw6IGZhbHNlLFxyXG4gICAgICAgICAgY29uZGl0aW9uVmFsdWU6IFwiXCIsXHJcbiAgICAgICAgICBjb25kaXRpb246IHt9LFxyXG4gICAgICAgICAgZGVsZXRlYWJsZTogdHJ1ZSxcclxuICAgICAgICAgIHN1YkxldmVsOiAxLFxyXG4gICAgICAgICAgZXhwYW5kTW9yZTogZmFsc2UsXHJcbiAgICAgICAgICAvKnNlbGVjdG9yOiB7XHJcbiAgICAgICAgICAgIGxhYmVsOiBcIkNvbXBhbnlcIixcclxuICAgICAgICAgICAga2V5OiBcIkNvbXBhbnlcIixcclxuICAgICAgICAgICAgZGVmYXVsdFZhbHVlOiBbeyB2YWx1ZTogXCJOb3d0ZWFtXCIsIGNoZWNrZWQ6IHRydWUgfSwgeyB2YWx1ZTogXCJJbnRlcm5hbFwiLCBjaGVja2VkOiBmYWxzZSB9XSxcclxuICAgICAgICAgICAgdmFsdWU6IFwiTm93dGVhbVwiXHJcbiAgICAgICAgICB9LCovXHJcbiAgICAgICAgICBmb3JtczogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgbGFiZWw6IFwiTm9tIGR1IHNlcnZldXJcIixcclxuICAgICAgICAgICAgICBrZXk6IFwiU2VydmVyTmFtZVwiLFxyXG4gICAgICAgICAgICAgIGV4cGFuZE9uYm9hcmRpbmc6IHRydWUsXHJcbiAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlOiBudWxsLFxyXG4gICAgICAgICAgICAgIHZhbHVlOiBudWxsLFxyXG4gICAgICAgICAgICAgIHNpemU6IDgwLFxyXG4gICAgICAgICAgICAgIGlzTWFuZGF0b3J5OiB0cnVlLFxyXG4gICAgICAgICAgICAgIG90aGVyVmFsdWU6ICcnLFxyXG4gICAgICAgICAgICAgIHR5cGU6IFwidGV4dFwiLFxyXG4gICAgICAgICAgICAgIGVkaXRhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICAgIGlzQ29uZGl0aW9uYWw6IGZhbHNlLFxyXG4gICAgICAgICAgICAgIGNvbmRpdGlvblZhbHVlOiBcIlwiLFxyXG4gICAgICAgICAgICAgIGNvbmRpdGlvbjoge30sXHJcbiAgICAgICAgICAgICAgZGVsZXRlYWJsZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgc3ViTGV2ZWw6IDIsXHJcbiAgICAgICAgICAgICAgZXhwYW5kTW9yZTogZmFsc2UsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBsYWJlbDogXCJDaGVtaW4gZHUgZG9zc2llclwiLFxyXG4gICAgICAgICAgICAgIGtleTogXCJGb2xkZXJQYXRoXCIsXHJcbiAgICAgICAgICAgICAgZXhwYW5kT25ib2FyZGluZzogdHJ1ZSxcclxuICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU6IG51bGwsXHJcbiAgICAgICAgICAgICAgdmFsdWU6IG51bGwsXHJcbiAgICAgICAgICAgICAgc2l6ZTogODAsXHJcbiAgICAgICAgICAgICAgaXNNYW5kYXRvcnk6IHRydWUsXHJcbiAgICAgICAgICAgICAgb3RoZXJWYWx1ZTogJycsXHJcbiAgICAgICAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXHJcbiAgICAgICAgICAgICAgZWRpdGFibGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgaXNDb25kaXRpb25hbDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgY29uZGl0aW9uVmFsdWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgY29uZGl0aW9uOiB7fSxcclxuICAgICAgICAgICAgICBkZWxldGVhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICAgIHN1YkxldmVsOiAyLFxyXG4gICAgICAgICAgICAgIGV4cGFuZE1vcmU6IGZhbHNlLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgbGFiZWw6IFwiTGV0dHJlIMOgIGF0dHJpYnVlclwiLFxyXG4gICAgICAgICAgICAgIGtleTogXCJBdHRyaWJ1dExldHRlclwiLFxyXG4gICAgICAgICAgICAgIGV4cGFuZE9uYm9hcmRpbmc6IHRydWUsXHJcbiAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlOiBudWxsLFxyXG4gICAgICAgICAgICAgIHZhbHVlOiBudWxsLFxyXG4gICAgICAgICAgICAgIHNpemU6IDgwLFxyXG4gICAgICAgICAgICAgIGlzTWFuZGF0b3J5OiB0cnVlLFxyXG4gICAgICAgICAgICAgIG90aGVyVmFsdWU6ICcnLFxyXG4gICAgICAgICAgICAgIHR5cGU6IFwidGV4dFwiLFxyXG4gICAgICAgICAgICAgIGVkaXRhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICAgIGlzQ29uZGl0aW9uYWw6IGZhbHNlLFxyXG4gICAgICAgICAgICAgIGNvbmRpdGlvblZhbHVlOiBcIlwiLFxyXG4gICAgICAgICAgICAgIGNvbmRpdGlvbjoge30sXHJcbiAgICAgICAgICAgICAgZGVsZXRlYWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgICBzdWJMZXZlbDogMixcclxuICAgICAgICAgICAgICBleHBhbmRNb3JlOiBmYWxzZSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIF0sXHJcbiAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwiVlBOXCIsXHJcbiAgICAgIGtleTogJ3ZwbicsXHJcbiAgICAgIGV4cGFuZE1vcmU6IGZhbHNlLFxyXG4gICAgICBzdWZmaXhFbmRwb2ludDogXCJjYXRlZ29yeS92cG5cIixcclxuICAgICAgc2VsZWN0ZWQ6IHRydWUsXHJcbiAgICAgIGV4cGFuZE9uYm9hcmRpbmc6IHRydWUsXHJcbiAgICAgIGRlZmF1bHRWYWx1ZTogZmFsc2UsXHJcbiAgICAgIGVkaXRhYmxlOiB0cnVlLFxyXG4gICAgICBpc0NvbmRpdGlvbmFsOiBmYWxzZSxcclxuICAgICAgY29uZGl0aW9uVmFsdWU6IFwiXCIsXHJcbiAgICAgIGNvbmRpdGlvbjoge30sXHJcbiAgICAgIGRlbGV0ZWFibGU6IHRydWUsXHJcbiAgICAgIHNlbGVjdG9yOiB7XHJcbiAgICAgICAgbGFiZWw6IFwiQ29tcGFueVwiLFxyXG4gICAgICAgIGtleTogXCJDb21wYW55XCIsXHJcbiAgICAgICAgZGVmYXVsdFZhbHVlOiBbeyB2YWx1ZTogXCJOb3d0ZWFtXCIsIGNoZWNrZWQ6IHRydWUgfSwgeyB2YWx1ZTogXCJJbnRlcm5hbFwiLCBjaGVja2VkOiBmYWxzZSB9XSxcclxuICAgICAgICB2YWx1ZTogXCJOb3d0ZWFtXCJcclxuICAgICAgfSxcclxuICAgICAgdGlja2V0VHlwZToge1xyXG4gICAgICAgIGxhYmVsOiBcIlR5cGUgZGUgdGlja2V0XCIsXHJcbiAgICAgICAga2V5OiBcInR5Y2tldFR5cGVcIixcclxuICAgICAgICBkZWZhdWx0VmFsdWU6IFt7IHZhbHVlOiBcIkNyw6lhdGlvbiBkZSBjb21wdGVcIiwgY2hlY2tlZDogdHJ1ZSwga2V5OiBcIkNyZWF0aW9uX2RlX2NvbXB0ZVwiIH0sIHsgdmFsdWU6IFwiQ29uZmlndXJhdGlvbiBkZSBwb3N0ZVwiLCBjaGVja2VkOiBmYWxzZSwga2V5OiBcIkNvbmZpZ3VyYXRpb25fZGVfcG9zdGVcIiB9XSxcclxuICAgICAgICB2YWx1ZTogXCJDcmVhdGlvbl9kZV9jb21wdGVcIlxyXG4gICAgICB9LFxyXG4gICAgICBmb3JtczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIGxhYmVsOiBcIkFjY8OocyBhdSBWUE5cIixcclxuICAgICAgICAgIGtleTogXCJWcG5BY2Nlc3NcIixcclxuICAgICAgICAgIGV4cGFuZE9uYm9hcmRpbmc6IHRydWUsXHJcbiAgICAgICAgICBkZWZhdWx0VmFsdWU6IG51bGwsXHJcbiAgICAgICAgICB2YWx1ZTogdHJ1ZSxcclxuICAgICAgICAgIHNpemU6IDgwLFxyXG4gICAgICAgICAgaXNNYW5kYXRvcnk6IGZhbHNlLFxyXG4gICAgICAgICAgb3RoZXJWYWx1ZTogJycsXHJcbiAgICAgICAgICB0eXBlOiBcImNoZWNrYm94XCIsXHJcbiAgICAgICAgICBlZGl0YWJsZTogdHJ1ZSxcclxuICAgICAgICAgIGlzQ29uZGl0aW9uYWw6IGZhbHNlLFxyXG4gICAgICAgICAgY29uZGl0aW9uVmFsdWU6IFwiXCIsXHJcbiAgICAgICAgICBjb25kaXRpb246IHt9LFxyXG4gICAgICAgICAgZGVsZXRlYWJsZTogdHJ1ZSxcclxuICAgICAgICAgIHN1YkxldmVsOiAxLFxyXG4gICAgICAgICAgZXhwYW5kTW9yZTogZmFsc2UsXHJcbiAgICAgICAgICAvL2Zvcm1zOiBbXVxyXG4gICAgICAgIH0sXHJcbiAgICAgIF0sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIkltcHJpbWFudGVzXCIsXHJcbiAgICAgIGtleTogJ2ltcHJpbWFudGVzJyxcclxuICAgICAgZXhwYW5kTW9yZTogZmFsc2UsXHJcbiAgICAgIHN1ZmZpeEVuZHBvaW50OiBcImNhdGVnb3J5L2ltcHJpbWVudGVcIixcclxuICAgICAgc2VsZWN0ZWQ6IHRydWUsXHJcbiAgICAgIGVkaXRhYmxlOiB0cnVlLFxyXG4gICAgICBpc0NvbmRpdGlvbmFsOiBmYWxzZSxcclxuICAgICAgY29uZGl0aW9uVmFsdWU6IFwiXCIsXHJcbiAgICAgIGNvbmRpdGlvbjoge30sXHJcbiAgICAgIGRlbGV0ZWFibGU6IHRydWUsXHJcbiAgICAgIGV4cGFuZE9uYm9hcmRpbmc6IHRydWUsXHJcbiAgICAgIGRlZmF1bHRWYWx1ZTogZmFsc2UsXHJcbiAgICAgIHRpY2tldFR5cGU6IHtcclxuICAgICAgICBsYWJlbDogXCJUeXBlIGRlIHRpY2tldFwiLFxyXG4gICAgICAgIGtleTogXCJ0eWNrZXRUeXBlXCIsXHJcbiAgICAgICAgZGVmYXVsdFZhbHVlOiBbeyB2YWx1ZTogXCJDcsOpYXRpb24gZGUgY29tcHRlXCIsIGNoZWNrZWQ6IHRydWUsIGtleTogXCJDcmVhdGlvbl9kZV9jb21wdGVcIiB9LCB7IHZhbHVlOiBcIkNvbmZpZ3VyYXRpb24gZGUgcG9zdGVcIiwgY2hlY2tlZDogZmFsc2UsIGtleTogXCJDb25maWd1cmF0aW9uX2RlX3Bvc3RlXCIgfV0sXHJcbiAgICAgICAgdmFsdWU6IFwiQ3JlYXRpb25fZGVfY29tcHRlXCJcclxuICAgICAgfSxcclxuICAgICAgc2VsZWN0b3I6IHtcclxuICAgICAgICBsYWJlbDogXCJDb21wYW55XCIsXHJcbiAgICAgICAga2V5OiBcIkNvbXBhbnlcIixcclxuICAgICAgICBkZWZhdWx0VmFsdWU6IFt7IHZhbHVlOiBcIk5vd3RlYW1cIiwgY2hlY2tlZDogdHJ1ZSB9LCB7IHZhbHVlOiBcIkludGVybmFsXCIsIGNoZWNrZWQ6IGZhbHNlIH1dLFxyXG4gICAgICAgIHZhbHVlOiBcIk5vd3RlYW1cIlxyXG4gICAgICB9LFxyXG4gICAgICBmb3JtczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIGxhYmVsOiBcIkFjY8OocyBhdXggaW1wcmltYW50ZXNcIixcclxuICAgICAgICAgIGtleTogXCJQcmludGVyQWNjZXNzXCIsXHJcbiAgICAgICAgICBleHBhbmRPbmJvYXJkaW5nOiB0cnVlLFxyXG4gICAgICAgICAgZGVmYXVsdFZhbHVlOiBudWxsLFxyXG4gICAgICAgICAgdmFsdWU6IHRydWUsXHJcbiAgICAgICAgICBzaXplOiA4MCxcclxuICAgICAgICAgIGlzTWFuZGF0b3J5OiBmYWxzZSxcclxuICAgICAgICAgIG90aGVyVmFsdWU6ICcnLFxyXG4gICAgICAgICAgdHlwZTogXCJjaGVja2JveFwiLFxyXG4gICAgICAgICAgZWRpdGFibGU6IHRydWUsXHJcbiAgICAgICAgICBpc0NvbmRpdGlvbmFsOiBmYWxzZSxcclxuICAgICAgICAgIGNvbmRpdGlvblZhbHVlOiBcIlwiLFxyXG4gICAgICAgICAgY29uZGl0aW9uOiB7fSxcclxuICAgICAgICAgIGRlbGV0ZWFibGU6IHRydWUsXHJcbiAgICAgICAgICBzdWJMZXZlbDogMSxcclxuICAgICAgICAgIGV4cGFuZE1vcmU6IGZhbHNlLFxyXG4gICAgICAgICAgLypzZWxlY3Rvcjoge1xyXG4gICAgICAgICAgICBsYWJlbDogXCJDb21wYW55XCIsXHJcbiAgICAgICAgICAgIGtleTogXCJDb21wYW55XCIsXHJcbiAgICAgICAgICAgIGRlZmF1bHRWYWx1ZTogW3sgdmFsdWU6IFwiTm93dGVhbVwiLCBjaGVja2VkOiB0cnVlIH0sIHsgdmFsdWU6IFwiSW50ZXJuYWxcIiwgY2hlY2tlZDogZmFsc2UgfV0sXHJcbiAgICAgICAgICAgIHZhbHVlOiBcIk5vd3RlYW1cIlxyXG4gICAgICAgICAgfSwqL1xyXG4gICAgICAgICAgZm9ybXM6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIGxhYmVsOiBcIk5vbSAvIE1vZMOobGUgZGUgbCdpbXByaW1hbnRlIC8gbG9jYWxpc2F0aW9uXCIsXHJcbiAgICAgICAgICAgICAga2V5OiBcIlByaW50ZXJOYW1lXCIsXHJcbiAgICAgICAgICAgICAgZXhwYW5kT25ib2FyZGluZzogdHJ1ZSxcclxuICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU6IG51bGwsXHJcbiAgICAgICAgICAgICAgdmFsdWU6IG51bGwsXHJcbiAgICAgICAgICAgICAgc2l6ZTogMTAwMCxcclxuICAgICAgICAgICAgICBpc01hbmRhdG9yeTogdHJ1ZSxcclxuICAgICAgICAgICAgICBvdGhlclZhbHVlOiAnJyxcclxuICAgICAgICAgICAgICB0eXBlOiBcInRleHRhcmVhXCIsXHJcbiAgICAgICAgICAgICAgZWRpdGFibGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgaXNDb25kaXRpb25hbDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgY29uZGl0aW9uVmFsdWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgY29uZGl0aW9uOiB7fSxcclxuICAgICAgICAgICAgICBkZWxldGVhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICAgIHN1YkxldmVsOiAyLFxyXG4gICAgICAgICAgICAgIGV4cGFuZE1vcmU6IGZhbHNlLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgXSxcclxuICAgICAgICB9LFxyXG4gICAgICBdLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJBcHBsaWNhdGlvbnNcIixcclxuICAgICAga2V5OiAnYXBwbGljYXRpb25zJyxcclxuICAgICAgZXhwYW5kTW9yZTogZmFsc2UsXHJcbiAgICAgIHN1ZmZpeEVuZHBvaW50OiBcImNhdGVnb3J5L2FwcGxpY2F0aW9uXCIsXHJcbiAgICAgIHNlbGVjdGVkOiB0cnVlLFxyXG4gICAgICBlZGl0YWJsZTogdHJ1ZSxcclxuICAgICAgaXNDb25kaXRpb25hbDogZmFsc2UsXHJcbiAgICAgIGNvbmRpdGlvblZhbHVlOiBcIlwiLFxyXG4gICAgICBjb25kaXRpb246IHt9LFxyXG4gICAgICBleHBhbmRPbmJvYXJkaW5nOiB0cnVlLFxyXG4gICAgICBkZWZhdWx0VmFsdWU6IGZhbHNlLFxyXG4gICAgICBkZWxldGVhYmxlOiB0cnVlLFxyXG4gICAgICBzZWxlY3Rvcjoge1xyXG4gICAgICAgIGxhYmVsOiBcIkNvbXBhbnlcIixcclxuICAgICAgICBrZXk6IFwiQ29tcGFueVwiLFxyXG4gICAgICAgIGRlZmF1bHRWYWx1ZTogW3sgdmFsdWU6IFwiTm93dGVhbVwiLCBjaGVja2VkOiB0cnVlIH0sIHsgdmFsdWU6IFwiSW50ZXJuYWxcIiwgY2hlY2tlZDogZmFsc2UgfV0sXHJcbiAgICAgICAgdmFsdWU6IFwiTm93dGVhbVwiXHJcbiAgICAgIH0sXHJcbiAgICAgIHRpY2tldFR5cGU6IHtcclxuICAgICAgICBsYWJlbDogXCJUeXBlIGRlIHRpY2tldFwiLFxyXG4gICAgICAgIGtleTogXCJ0eWNrZXRUeXBlXCIsXHJcbiAgICAgICAgZGVmYXVsdFZhbHVlOiBbeyB2YWx1ZTogXCJDcsOpYXRpb24gZGUgY29tcHRlXCIsIGNoZWNrZWQ6IHRydWUsIGtleTogXCJDcmVhdGlvbl9kZV9jb21wdGVcIiB9LCB7IHZhbHVlOiBcIkNvbmZpZ3VyYXRpb24gZGUgcG9zdGVcIiwgY2hlY2tlZDogZmFsc2UsIGtleTogXCJDb25maWd1cmF0aW9uX2RlX3Bvc3RlXCIgfV0sXHJcbiAgICAgICAgdmFsdWU6IFwiQ3JlYXRpb25fZGVfY29tcHRlXCJcclxuICAgICAgfSxcclxuICAgICAgZm9ybXM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBsYWJlbDogXCJBY2PDqHMgYXV4IGFwcGxpY2F0aW9ucyA/XCIsXHJcbiAgICAgICAgICBrZXk6IFwiQXBwbGljYXRpb25BY2Nlc3NcIixcclxuICAgICAgICAgIGV4cGFuZE9uYm9hcmRpbmc6IHRydWUsXHJcbiAgICAgICAgICBkZWZhdWx0VmFsdWU6IG51bGwsXHJcbiAgICAgICAgICB2YWx1ZTogdHJ1ZSxcclxuICAgICAgICAgIHNpemU6IDgwLFxyXG4gICAgICAgICAgaXNNYW5kYXRvcnk6IGZhbHNlLFxyXG4gICAgICAgICAgb3RoZXJWYWx1ZTogJycsXHJcbiAgICAgICAgICB0eXBlOiBcImNoZWNrYm94XCIsXHJcbiAgICAgICAgICBlZGl0YWJsZTogdHJ1ZSxcclxuICAgICAgICAgIGlzQ29uZGl0aW9uYWw6IGZhbHNlLFxyXG4gICAgICAgICAgY29uZGl0aW9uVmFsdWU6IFwiXCIsXHJcbiAgICAgICAgICBjb25kaXRpb246IHt9LFxyXG4gICAgICAgICAgZGVsZXRlYWJsZTogdHJ1ZSxcclxuICAgICAgICAgIHN1YkxldmVsOiAxLFxyXG4gICAgICAgICAgZXhwYW5kTW9yZTogZmFsc2UsXHJcbiAgICAgICAgICAvKnNlbGVjdG9yOiB7XHJcbiAgICAgICAgICAgIGxhYmVsOiBcIkNvbXBhbnlcIixcclxuICAgICAgICAgICAga2V5OiBcIkNvbXBhbnlcIixcclxuICAgICAgICAgICAgZGVmYXVsdFZhbHVlOiBbeyB2YWx1ZTogXCJOb3d0ZWFtXCIsIGNoZWNrZWQ6IHRydWUgfSwgeyB2YWx1ZTogXCJJbnRlcm5hbFwiLCBjaGVja2VkOiBmYWxzZSB9XSxcclxuICAgICAgICAgICAgdmFsdWU6IFwiTm93dGVhbVwiXHJcbiAgICAgICAgICB9LCovXHJcbiAgICAgICAgICBmb3JtczogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgbGFiZWw6IFwiRGVzY3JpcHRpb25zXCIsXHJcbiAgICAgICAgICAgICAga2V5OiBcIkRlc2NyaXB0aW9uXCIsXHJcbiAgICAgICAgICAgICAgZXhwYW5kT25ib2FyZGluZzogdHJ1ZSxcclxuICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU6IG51bGwsXHJcbiAgICAgICAgICAgICAgdmFsdWU6IG51bGwsXHJcbiAgICAgICAgICAgICAgc2l6ZTogMTAwMCxcclxuICAgICAgICAgICAgICBpc01hbmRhdG9yeTogdHJ1ZSxcclxuICAgICAgICAgICAgICBvdGhlclZhbHVlOiAnJyxcclxuICAgICAgICAgICAgICB0eXBlOiBcInRleHRhcmVhXCIsXHJcbiAgICAgICAgICAgICAgZWRpdGFibGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgaXNDb25kaXRpb25hbDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgY29uZGl0aW9uVmFsdWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgY29uZGl0aW9uOiB7fSxcclxuICAgICAgICAgICAgICBkZWxldGVhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICAgIHN1YkxldmVsOiAyLFxyXG4gICAgICAgICAgICAgIGV4cGFuZE1vcmU6IGZhbHNlLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgXSxcclxuICAgICAgICB9LFxyXG4gICAgICBdLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJQb3N0ZVwiLFxyXG4gICAgICBrZXk6ICdwb3N0ZScsXHJcbiAgICAgIGV4cGFuZE1vcmU6IGZhbHNlLFxyXG4gICAgICBzdWZmaXhFbmRwb2ludDogXCJjYXRlZ29yeS9wb3N0ZVwiLFxyXG4gICAgICBzZWxlY3RlZDogdHJ1ZSxcclxuICAgICAgZXhwYW5kT25ib2FyZGluZzogdHJ1ZSxcclxuICAgICAgZGVmYXVsdFZhbHVlOiBmYWxzZSxcclxuICAgICAgZWRpdGFibGU6IHRydWUsXHJcbiAgICAgIGlzQ29uZGl0aW9uYWw6IGZhbHNlLFxyXG4gICAgICBjb25kaXRpb25WYWx1ZTogXCJcIixcclxuICAgICAgY29uZGl0aW9uOiB7fSxcclxuICAgICAgZGVsZXRlYWJsZTogdHJ1ZSxcclxuICAgICAgc2VsZWN0b3I6IHtcclxuICAgICAgICBsYWJlbDogXCJDb21wYW55XCIsXHJcbiAgICAgICAga2V5OiBcIkNvbXBhbnlcIixcclxuICAgICAgICBkZWZhdWx0VmFsdWU6IFt7IHZhbHVlOiBcIk5vd3RlYW1cIiwgY2hlY2tlZDogdHJ1ZSB9LCB7IHZhbHVlOiBcIkludGVybmFsXCIsIGNoZWNrZWQ6IGZhbHNlIH1dLFxyXG4gICAgICAgIHZhbHVlOiBcIk5vd3RlYW1cIlxyXG4gICAgICB9LFxyXG4gICAgICB0aWNrZXRUeXBlOiB7XHJcbiAgICAgICAgbGFiZWw6IFwiVHlwZSBkZSB0aWNrZXRcIixcclxuICAgICAgICBrZXk6IFwidHlja2V0VHlwZVwiLFxyXG4gICAgICAgIGRlZmF1bHRWYWx1ZTogW3sgdmFsdWU6IFwiQ3LDqWF0aW9uIGRlIGNvbXB0ZVwiLCBjaGVja2VkOiB0cnVlLCBrZXk6IFwiQ3JlYXRpb25fZGVfY29tcHRlXCIgfSwgeyB2YWx1ZTogXCJDb25maWd1cmF0aW9uIGRlIHBvc3RlXCIsIGNoZWNrZWQ6IGZhbHNlLCBrZXk6IFwiQ29uZmlndXJhdGlvbl9kZV9wb3N0ZVwiIH1dLFxyXG4gICAgICAgIHZhbHVlOiBcIkNyZWF0aW9uX2RlX2NvbXB0ZVwiXHJcbiAgICAgIH0sXHJcbiAgICAgIGZvcm1zOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbGFiZWw6IFwiUGFyYW3DqXRyYWdlIGRlIHBvc3RlXCIsXHJcbiAgICAgICAgICBrZXk6IFwiUG9zdFBhcmFtZXRlclwiLFxyXG4gICAgICAgICAgZXhwYW5kT25ib2FyZGluZzogdHJ1ZSxcclxuICAgICAgICAgIGRlZmF1bHRWYWx1ZTogbnVsbCxcclxuICAgICAgICAgIHZhbHVlOiB0cnVlLFxyXG4gICAgICAgICAgc2l6ZTogODAsXHJcbiAgICAgICAgICBpc01hbmRhdG9yeTogZmFsc2UsXHJcbiAgICAgICAgICBvdGhlclZhbHVlOiAnJyxcclxuICAgICAgICAgIHR5cGU6IFwiY2hlY2tib3hcIixcclxuICAgICAgICAgIGVkaXRhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgaXNDb25kaXRpb25hbDogZmFsc2UsXHJcbiAgICAgICAgICBjb25kaXRpb25WYWx1ZTogXCJcIixcclxuICAgICAgICAgIGNvbmRpdGlvbjoge30sXHJcbiAgICAgICAgICBkZWxldGVhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgc3ViTGV2ZWw6IDEsXHJcbiAgICAgICAgICBleHBhbmRNb3JlOiBmYWxzZSxcclxuICAgICAgICAgIC8qc2VsZWN0b3I6IHtcclxuICAgICAgICAgICAgbGFiZWw6IFwiQ29tcGFueVwiLFxyXG4gICAgICAgICAgICBrZXk6IFwiQ29tcGFueVwiLFxyXG4gICAgICAgICAgICBkZWZhdWx0VmFsdWU6IFt7IHZhbHVlOiBcIk5vd3RlYW1cIiwgY2hlY2tlZDogdHJ1ZSB9LCB7IHZhbHVlOiBcIkludGVybmFsXCIsIGNoZWNrZWQ6IGZhbHNlIH1dLFxyXG4gICAgICAgICAgICB2YWx1ZTogXCJOb3d0ZWFtXCJcclxuICAgICAgICAgIH0sKi9cclxuICAgICAgICAgIGZvcm1zOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBsYWJlbDogXCJSw6lhbGxvY2F0aW9uIGQnw6lxdWlwZW1lbnRcIixcclxuICAgICAgICAgICAgICBrZXk6IFwiUmVhbG9jYXRlZEVxdWlwbWVudFwiLFxyXG4gICAgICAgICAgICAgIGV4cGFuZE9uYm9hcmRpbmc6IHRydWUsXHJcbiAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlOiBudWxsLFxyXG4gICAgICAgICAgICAgIHZhbHVlOiBudWxsLFxyXG4gICAgICAgICAgICAgIHNpemU6IDEwMDAsXHJcbiAgICAgICAgICAgICAgaXNNYW5kYXRvcnk6IHRydWUsXHJcbiAgICAgICAgICAgICAgb3RoZXJWYWx1ZTogJycsXHJcbiAgICAgICAgICAgICAgdHlwZTogXCJ0ZXh0YXJlYVwiLFxyXG4gICAgICAgICAgICAgIGVkaXRhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICAgIGlzQ29uZGl0aW9uYWw6IGZhbHNlLFxyXG4gICAgICAgICAgICAgIGNvbmRpdGlvblZhbHVlOiBcIlwiLFxyXG4gICAgICAgICAgICAgIGNvbmRpdGlvbjoge30sXHJcbiAgICAgICAgICAgICAgZGVsZXRlYWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgICBzdWJMZXZlbDogMixcclxuICAgICAgICAgICAgICBleHBhbmRNb3JlOiBmYWxzZSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIGxhYmVsOiBcIk5vdXZlYXUgcG9zdGVcIixcclxuICAgICAgICAgICAgICBrZXk6IFwiTmV3UG9zdFwiLFxyXG4gICAgICAgICAgICAgIGV4cGFuZE9uYm9hcmRpbmc6IHRydWUsXHJcbiAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlOiBudWxsLFxyXG4gICAgICAgICAgICAgIHZhbHVlOiB0cnVlLFxyXG4gICAgICAgICAgICAgIHNpemU6IDgwLFxyXG4gICAgICAgICAgICAgIGlzTWFuZGF0b3J5OiB0cnVlLFxyXG4gICAgICAgICAgICAgIG90aGVyVmFsdWU6ICcnLFxyXG4gICAgICAgICAgICAgIHR5cGU6IFwiY2hlY2tib3hcIixcclxuICAgICAgICAgICAgICBlZGl0YWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgICBpc0NvbmRpdGlvbmFsOiBmYWxzZSxcclxuICAgICAgICAgICAgICBjb25kaXRpb25WYWx1ZTogXCJcIixcclxuICAgICAgICAgICAgICBjb25kaXRpb246IHt9LFxyXG4gICAgICAgICAgICAgIGRlbGV0ZWFibGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgc3ViTGV2ZWw6IDIsXHJcbiAgICAgICAgICAgICAgZXhwYW5kTW9yZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgZm9ybXM6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiQWNoZXTDqSBjaGV6IE5vd3RlYW1cIixcclxuICAgICAgICAgICAgICAgICAga2V5OiBcIlB1cmNoYXNlZEF0Tm93dGVhbVwiLFxyXG4gICAgICAgICAgICAgICAgICBleHBhbmRPbmJvYXJkaW5nOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU6IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgICBzaXplOiAxMDAwLFxyXG4gICAgICAgICAgICAgICAgICBpc01hbmRhdG9yeTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgb3RoZXJWYWx1ZTogJycsXHJcbiAgICAgICAgICAgICAgICAgIHR5cGU6IFwidGV4dGFyZWFcIixcclxuICAgICAgICAgICAgICAgICAgZWRpdGFibGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgIGlzQ29uZGl0aW9uYWw6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICBjb25kaXRpb25WYWx1ZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgY29uZGl0aW9uOiB7fSxcclxuICAgICAgICAgICAgICAgICAgZGVsZXRlYWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgc3ViTGV2ZWw6IDMsXHJcbiAgICAgICAgICAgICAgICAgIGV4cGFuZE1vcmU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiQXV0cmVcIixcclxuICAgICAgICAgICAgICAgICAga2V5OiBcIk90aGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgIGV4cGFuZE9uYm9hcmRpbmc6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZTogbnVsbCxcclxuICAgICAgICAgICAgICAgICAgdmFsdWU6IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgIHNpemU6IDEwMDAsXHJcbiAgICAgICAgICAgICAgICAgIGlzTWFuZGF0b3J5OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICBvdGhlclZhbHVlOiAnJyxcclxuICAgICAgICAgICAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXHJcbiAgICAgICAgICAgICAgICAgIGVkaXRhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICBpc0NvbmRpdGlvbmFsOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgY29uZGl0aW9uVmFsdWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgIGNvbmRpdGlvbjoge30sXHJcbiAgICAgICAgICAgICAgICAgIGRlbGV0ZWFibGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgIHN1YkxldmVsOiAzLFxyXG4gICAgICAgICAgICAgICAgICBleHBhbmRNb3JlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIF0sXHJcbiAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwiQXV0cmVzXCIsXHJcbiAgICAgIGtleTogJ2F1dHJlcycsXHJcbiAgICAgIGV4cGFuZE1vcmU6IGZhbHNlLFxyXG4gICAgICBzdWZmaXhFbmRwb2ludDogXCJjYXRlZ29yeS9hdXRyZXNcIixcclxuICAgICAgc2VsZWN0ZWQ6IHRydWUsXHJcbiAgICAgIGVkaXRhYmxlOiB0cnVlLFxyXG4gICAgICBpc0NvbmRpdGlvbmFsOiBmYWxzZSxcclxuICAgICAgY29uZGl0aW9uVmFsdWU6IFwiXCIsXHJcbiAgICAgIGNvbmRpdGlvbjoge30sXHJcbiAgICAgIGV4cGFuZE9uYm9hcmRpbmc6IHRydWUsXHJcbiAgICAgIGRlZmF1bHRWYWx1ZTogZmFsc2UsXHJcbiAgICAgIGRlbGV0ZWFibGU6IHRydWUsXHJcbiAgICAgIHNlbGVjdG9yOiB7XHJcbiAgICAgICAgbGFiZWw6IFwiQ29tcGFueVwiLFxyXG4gICAgICAgIGtleTogXCJDb21wYW55XCIsXHJcbiAgICAgICAgZGVmYXVsdFZhbHVlOiBbeyB2YWx1ZTogXCJOb3d0ZWFtXCIsIGNoZWNrZWQ6IHRydWUgfSwgeyB2YWx1ZTogXCJJbnRlcm5hbFwiLCBjaGVja2VkOiBmYWxzZSB9XSxcclxuICAgICAgICB2YWx1ZTogXCJOb3d0ZWFtXCJcclxuICAgICAgfSxcclxuICAgICAgdGlja2V0VHlwZToge1xyXG4gICAgICAgIGxhYmVsOiBcIlR5cGUgZGUgdGlja2V0XCIsXHJcbiAgICAgICAga2V5OiBcInR5Y2tldFR5cGVcIixcclxuICAgICAgICBkZWZhdWx0VmFsdWU6IFt7IHZhbHVlOiBcIkNyw6lhdGlvbiBkZSBjb21wdGVcIiwgY2hlY2tlZDogdHJ1ZSwga2V5OiBcIkNyZWF0aW9uX2RlX2NvbXB0ZVwiIH0sIHsgdmFsdWU6IFwiQ29uZmlndXJhdGlvbiBkZSBwb3N0ZVwiLCBjaGVja2VkOiBmYWxzZSwga2V5OiBcIkNvbmZpZ3VyYXRpb25fZGVfcG9zdGVcIiB9XSxcclxuICAgICAgICB2YWx1ZTogXCJDcmVhdGlvbl9kZV9jb21wdGVcIlxyXG4gICAgICB9LFxyXG4gICAgICBmb3JtczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIGxhYmVsOiBcIkRlc2NyaXB0aW9uc1wiLFxyXG4gICAgICAgICAga2V5OiBcIkRlc2NyaXB0aW9uXCIsXHJcbiAgICAgICAgICBleHBhbmRPbmJvYXJkaW5nOiB0cnVlLFxyXG4gICAgICAgICAgZGVmYXVsdFZhbHVlOiBudWxsLFxyXG4gICAgICAgICAgdmFsdWU6IG51bGwsXHJcbiAgICAgICAgICBzaXplOiAxMDAwLFxyXG4gICAgICAgICAgaXNNYW5kYXRvcnk6IGZhbHNlLFxyXG4gICAgICAgICAgb3RoZXJWYWx1ZTogJycsXHJcbiAgICAgICAgICB0eXBlOiBcInRleHRhcmVhXCIsXHJcbiAgICAgICAgICBlZGl0YWJsZTogdHJ1ZSxcclxuICAgICAgICAgIGlzQ29uZGl0aW9uYWw6IGZhbHNlLFxyXG4gICAgICAgICAgY29uZGl0aW9uVmFsdWU6IFwiXCIsXHJcbiAgICAgICAgICBjb25kaXRpb246IHt9LFxyXG4gICAgICAgICAgZGVsZXRlYWJsZTogdHJ1ZSxcclxuICAgICAgICAgIHN1YkxldmVsOiAxLFxyXG4gICAgICAgICAgZXhwYW5kTW9yZTogZmFsc2UsXHJcbiAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgIH0sXHJcbiAgXTtcclxuXHJcbiAgY2FuRGVhY3RpdmF0ZSgpIHtcclxuICAgIGlmICghdGhpcy5jYW5FeGl0KSB7XHJcbiAgICAgIHRoaXMuZGlhbG9nLm9wZW4oRXhpdENvbmZpcm1Db21wb25lbnQsIHtcclxuICAgICAgICBkYXRhOiAnJ1xyXG4gICAgICB9KVxyXG4gICAgICByZXR1cm4gdGhpcy5zZXJ2aWNlLmNhbkV4aXQkXHJcbiAgICB9XHJcbiAgICByZXR1cm4gdHJ1ZVxyXG4gIH1cclxuXHJcbiAgaW5pdEZvcm0oKSB7XHJcbiAgICB0aGlzLmZvcm0gPSB0aGlzLmZiLmdyb3VwKHtcclxuICAgICAgTmFtZTogW1wiXCIsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxyXG4gICAgICBQaWN0bzogW1wiXCJdLFxyXG4gICAgICBEZXNjcmlwdGlvbjogW1wiXCJdLFxyXG4gICAgICBUYWdzOiBbXCJcIl0sXHJcbiAgICAgIFN0YXR1czogW2ZhbHNlLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcclxuICAgIH0pO1xyXG4gIH1cclxuICBhc3luYyBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuaWQgPSB0aGlzLnJvdXRlLnNuYXBzaG90LnBhcmFtTWFwLmdldChcImlkXCIpO1xyXG5cclxuICAgIHRoaXMuZm9ybS52YWx1ZUNoYW5nZXMuc3Vic2NyaWJlKGMgPT4ge1xyXG4gICAgICB0aGlzLmNhbkV4aXQgPSBmYWxzZTtcclxuICAgIH0pO1xyXG5cclxuICAgIGlmICh0aGlzLmlkICE9PSBcIjBcIikge1xyXG4gICAgICBzZXRUaW1lb3V0KGFzeW5jICgpID0+IHtcclxuICAgICAgICB0aGlzLmN1cnJlbnRQcm9maWwgPSBhd2FpdCB0aGlzLnNlcnZpY2UuZ2V0UHJvZmlsKHRoaXMuaWQpO1xyXG4gICAgICAgIHRoaXMuZm9ybS5wYXRjaFZhbHVlKHRoaXMuY3VycmVudFByb2ZpbCk7XHJcbiAgICAgICAgdGhpcy5jYXRlZ29yaWVzID0gdGhpcy5jdXJyZW50UHJvZmlsLmNhdGVnb3JpZXM7XHJcbiAgICAgIH0sIDUwMCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnNob3dQcm9maWxlTmFtZSA9IHRydWU7XHJcbiAgICAgIHRoaXMuY2F0ZWdvcmllcyA9IHRoaXMuZGVmYXVsdENhdGVnb3JpZTtcclxuICAgIH1cclxuICAgIHNldFRpbWVvdXQoYXN5bmMgKCkgPT4ge1xyXG4gICAgICB0aGlzLnRhZ3MgPSBhd2FpdCB0aGlzLnNlcnZpY2UuZ2V0QWxsVGFncygpO1xyXG4gICAgfSwgNTAwKTtcclxuICAgIHRoaXMuZ2V0Q29uZGl0aW9uVmFsdWVzKCk7XHJcbiAgfVxyXG5cclxuICBvbkFkZE5ld0NhdGVnb3J5KGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIHRoaXMuY2FuRXhpdCA9IGZhbHNlO1xyXG4gICAgY29uc3QgZGF0YSA9IHtcclxuICAgICAgbmFtZTogXCJOb20gZGUgbGEgY2F0w6lnb3JpZVwiICsgdGhpcy5jYXRlZ29yaWVzLmxlbmd0aCxcclxuICAgICAga2V5OiAnbmV3Q2F0ZWdvcnknICsgdGhpcy5jYXRlZ29yaWVzLmxlbmd0aCxcclxuICAgICAgZWRpdGFibGU6IHRydWUsXHJcbiAgICAgIGlzQ29uZGl0aW9uYWw6IGZhbHNlLFxyXG4gICAgICBjb25kaXRpb25WYWx1ZTogXCJcIixcclxuICAgICAgY29uZGl0aW9uOiB7fSxcclxuICAgICAgZXhwYW5kT25ib2FyZGluZzogdHJ1ZSxcclxuICAgICAgZGVsZXRlYWJsZTogdHJ1ZSxcclxuICAgICAgZXhwYW5kTW9yZTogdHJ1ZSxcclxuICAgICAgc3VmZml4RW5kcG9pbnQ6IFwiXCIsXHJcbiAgICAgIHNlbGVjdG9yOiB7XHJcbiAgICAgICAgbGFiZWw6IFwiQ29tcGFueVwiLFxyXG4gICAgICAgIGtleTogXCJDb21wYW55XCIsXHJcbiAgICAgICAgZGVmYXVsdFZhbHVlOiBbeyB2YWx1ZTogXCJOb3d0ZWFtXCIsIGNoZWNrZWQ6IHRydWUgfSwgeyB2YWx1ZTogXCJJbnRlcm5hbFwiLCBjaGVja2VkOiBmYWxzZSB9XSxcclxuICAgICAgICB2YWx1ZTogXCJOb3d0ZWFtXCJcclxuICAgICAgfSxcclxuICAgICAgdGlja2V0VHlwZToge1xyXG4gICAgICAgIGxhYmVsOiBcIlR5cGUgZGUgdGlja2V0XCIsXHJcbiAgICAgICAga2V5OiBcInR5Y2tldFR5cGVcIixcclxuICAgICAgICBkZWZhdWx0VmFsdWU6IFt7IHZhbHVlOiBcIkNyw6lhdGlvbiBkZSBjb21wdGVcIiwgY2hlY2tlZDogdHJ1ZSwga2V5OiBcIkNyZWF0aW9uX2RlX2NvbXB0ZVwiIH0sIHsgdmFsdWU6IFwiQ29uZmlndXJhdGlvbiBkZSBwb3N0ZVwiLCBjaGVja2VkOiBmYWxzZSwga2V5OiBcIkNvbmZpZ3VyYXRpb25fZGVfcG9zdGVcIiB9XSxcclxuICAgICAgICB2YWx1ZTogXCJDcmVhdGlvbl9kZV9jb21wdGVcIlxyXG4gICAgICB9LFxyXG4gICAgICBmb3JtczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIGxhYmVsOiBcIkxhYmVsIMOgIHJlbm9tbWVyXCIsXHJcbiAgICAgICAgICBrZXk6IFwiXCIsXHJcbiAgICAgICAgICBleHBhbmRPbmJvYXJkaW5nOiB0cnVlLFxyXG4gICAgICAgICAgZGVmYXVsdFZhbHVlOiBudWxsLFxyXG4gICAgICAgICAgdmFsdWU6IG51bGwsXHJcbiAgICAgICAgICBzaXplOiA4MCxcclxuICAgICAgICAgIGlzTWFuZGF0b3J5OiB0cnVlLFxyXG4gICAgICAgICAgb3RoZXJWYWx1ZTogJycsXHJcbiAgICAgICAgICB0eXBlOiBcInRleHRcIixcclxuICAgICAgICAgIGRlbGV0ZWFibGU6IHRydWUsXHJcbiAgICAgICAgICBlZGl0YWJsZTogdHJ1ZSxcclxuICAgICAgICAgIGlzQ29uZGl0aW9uYWw6IGZhbHNlLFxyXG4gICAgICAgICAgY29uZGl0aW9uVmFsdWU6IFwiXCIsXHJcbiAgICAgICAgICBjb25kaXRpb246IHt9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIF0sXHJcbiAgICB9XHJcbiAgICB0aGlzLmNhdGVnb3JpZXMucHVzaChkYXRhKTtcclxuICAgIHRoaXMub25IaXN0b3JpY3Moe1xyXG4gICAgICBmb3JtOiBkYXRhLFxyXG4gICAgICBtZXRob2Q6ICdwdXNoJyxcclxuICAgICAgbG9jYXRpb246ICdjYXRlZ29yeScsXHJcbiAgICAgIHBhcmFtczogW3RoaXMuY2F0ZWdvcmllcy5sZW5ndGggLSAxXVxyXG4gICAgfSlcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICB0aGlzLnNjcm9sbFRvU2VydmljZS5zY3JvbGxUbyh7XHJcbiAgICAgICAgdGFyZ2V0OiBkYXRhLm5hbWUsXHJcbiAgICAgICAgY29udGFpbmVyOiAnY2F0ZWdvcmllcy1pZCcsXHJcbiAgICAgICAgZHVyYXRpb246IDY1MCxcclxuICAgICAgICBlYXNpbmc6ICdlYXNlT3V0RWxhc3RpYycsXHJcbiAgICAgICAgb2Zmc2V0OiAyMFxyXG4gICAgICB9KTtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5vbkV4cGVuZE1vcmUoeyBmaWVsZDogZGF0YSB9LCB0aGlzLmNhdGVnb3JpZXMubGVuZ3RoIC0gMSk7XHJcbiAgICAgICAgdGhpcy5vbkFjdGl2ZU1lbnUoZGF0YSwgdGhpcy5jYXRlZ29yaWVzLmxlbmd0aCAtIDEpO1xyXG4gICAgICB9LCAzMDApO1xyXG5cclxuICAgIH0sIDIwMClcclxuICB9XHJcbiAgb25DaGFuZ2VDYXRlZ29yeU5hbWUoKSB7XHJcbiAgICB0aGlzLmN1cnJlbnRFZGl0QmxvY2sua2V5ID0gdGhpcy5jdXJyZW50RWRpdEJsb2NrLm5hbWUucmVwbGFjZSgvXFxzL2csICcnKVxyXG4gIH1cclxuICBjaGVja0JsaW5rKGluZGV4LCBsZXZlbCkge1xyXG4gICAgcmV0dXJuIFN0cmluZyhpbmRleCkgKyBTdHJpbmcobGV2ZWwpXHJcbiAgfVxyXG4gIG9uQWRkTmV3RmllbGQoLi4ucGFyYW1zKSB7XHJcbiAgICB0aGlzLmNhbkV4aXQgPSBmYWxzZTtcclxuICAgIGNvbnN0IGxlbmd0aCA9IHBhcmFtcy5sZW5ndGg7XHJcbiAgICBjb25zdCBmb3JtcyA9IGxlbmd0aCA9PT0gMSA/IHRoaXMuY2F0ZWdvcmllc1twYXJhbXNbMF1dLmZvcm1zIDogbGVuZ3RoID09PSAyID8gdGhpcy5jYXRlZ29yaWVzW3BhcmFtc1swXV0uZm9ybXNbcGFyYW1zWzFdXS5mb3JtcyA6IHRoaXMuY2F0ZWdvcmllc1twYXJhbXNbMF1dLmZvcm1zW3BhcmFtc1sxXV0uZm9ybXNbcGFyYW1zWzJdXS5mb3JtcztcclxuICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgIGxhYmVsOiBcIkxhYmVsIMOgIHJlbm9tbWVyXCIsXHJcbiAgICAgIGtleTogXCJcIixcclxuICAgICAgZXhwYW5kT25ib2FyZGluZzogdHJ1ZSxcclxuICAgICAgZGVmYXVsdFZhbHVlOiBudWxsLFxyXG4gICAgICB2YWx1ZTogbnVsbCxcclxuICAgICAgc2l6ZTogODAsXHJcbiAgICAgIGlzTWFuZGF0b3J5OiB0cnVlLFxyXG4gICAgICBvdGhlclZhbHVlOiAnJyxcclxuICAgICAgdHlwZTogXCJ0ZXh0XCIsXHJcbiAgICAgIGRlbGV0ZWFibGU6IHRydWUsXHJcbiAgICAgIGVkaXRhYmxlOiB0cnVlLFxyXG4gICAgICBpc0NvbmRpdGlvbmFsOiBmYWxzZSxcclxuICAgICAgY29uZGl0aW9uVmFsdWU6IFwiXCIsXHJcbiAgICAgIGNvbmRpdGlvbjoge30sXHJcbiAgICAgIHN1YkxldmVsOiBwYXJhbXMubGVuZ3RoLFxyXG4gICAgICAvL2Zvcm1zOiBbXVxyXG4gICAgfVxyXG4gICAgZm9ybXMucHVzaChkYXRhKTtcclxuICAgIHRoaXMubmV3RmllbGRJbmRleCA9IFN0cmluZyhmb3Jtcy5sZW5ndGggLSAxKSArIFN0cmluZyhsZW5ndGgpO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHRoaXMubmV3RmllbGRJbmRleCA9IG51bGxcclxuICAgIH0sIDUwMDApO1xyXG4gICAgdGhpcy5vbkhpc3Rvcmljcyh7XHJcbiAgICAgIGZvcm06IGRhdGEsXHJcbiAgICAgIG1ldGhvZDogJ3B1c2gnLFxyXG4gICAgICBsb2NhdGlvbjogJ2Zvcm1zJyxcclxuICAgICAgcGFyYW1zXHJcbiAgICB9KVxyXG4gICAgdGhpcy5vbkVkaXRCbG9jayhmb3Jtcy5hdCgtMSksIHBhcmFtcylcclxuICB9XHJcblxyXG4gIG9uQWRkTmV3U3ViTGV2ZWxGaWVsZCguLi5wYXJhbXMpIHtcclxuICAgIHRoaXMuY2FuRXhpdCA9IGZhbHNlO1xyXG4gICAgY29uc3QgbGVuZ3RoID0gcGFyYW1zLmxlbmd0aDtcclxuICAgIGNvbnN0IGZvcm1zID0gbGVuZ3RoID09PSAyID8gdGhpcy5jYXRlZ29yaWVzW3BhcmFtc1swXV0uZm9ybXNbcGFyYW1zW2xlbmd0aCAtIDFdXSA6IGxlbmd0aCA9PT0gMyA/IHRoaXMuY2F0ZWdvcmllc1twYXJhbXNbMF1dLmZvcm1zW3BhcmFtc1sxXV0uZm9ybXNbcGFyYW1zW2xlbmd0aCAtIDFdXSA6IHRoaXMuY2F0ZWdvcmllc1twYXJhbXNbMF1dLmZvcm1zW3BhcmFtc1sxXV0uZm9ybXNbcGFyYW1zWzJdXS5mb3Jtc1twYXJhbXNbbGVuZ3RoIC0gMV1dO1xyXG4gICAgZm9ybXMuZXhwYW5kTW9yZSA9IHRydWU7XHJcbiAgICBmb3Jtcy5mb3JtcyA9IFtdO1xyXG4gICAgY29uc3QgbmV3Rm9ybSA9IHtcclxuICAgICAgbGFiZWw6IFwiXCIsXHJcbiAgICAgIGtleTogXCJcIixcclxuICAgICAgZXhwYW5kT25ib2FyZGluZzogdHJ1ZSxcclxuICAgICAgZGVmYXVsdFZhbHVlOiBudWxsLFxyXG4gICAgICB2YWx1ZTogbnVsbCxcclxuICAgICAgc2l6ZTogODAsXHJcbiAgICAgIGlzTWFuZGF0b3J5OiB0cnVlLFxyXG4gICAgICBvdGhlclZhbHVlOiAnJyxcclxuICAgICAgdHlwZTogXCJ0ZXh0XCIsXHJcbiAgICAgIGRlbGV0ZWFibGU6IHRydWUsXHJcbiAgICAgIGVkaXRhYmxlOiB0cnVlLFxyXG4gICAgICBpc0NvbmRpdGlvbmFsOiBmYWxzZSxcclxuICAgICAgY29uZGl0aW9uVmFsdWU6IFwiXCIsXHJcbiAgICAgIGNvbmRpdGlvbjoge30sXHJcbiAgICAgIHN1YkxldmVsOiBwYXJhbXMubGVuZ3RoLFxyXG4gICAgICBleHBhbmRNb3JlOiB0cnVlLFxyXG4gICAgICAvL2Zvcm1zOiBbXVxyXG4gICAgfVxyXG4gICAgZm9ybXMuZm9ybXMucHVzaChuZXdGb3JtKTtcclxuICAgIHRoaXMub25IaXN0b3JpY3Moe1xyXG4gICAgICBmb3JtOiBuZXdGb3JtLFxyXG4gICAgICBtZXRob2Q6ICdwdXNoJyxcclxuICAgICAgbG9jYXRpb246ICdmb3JtcycsXHJcbiAgICAgIHBhcmFtc1xyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIG9uUmVtb3ZlRmllbGQoLi4ucGFyYW1zKSB7XHJcbiAgICB0aGlzLmNhbkV4aXQgPSBmYWxzZTtcclxuICAgIGNvbnN0IGxlbmd0aCA9IHBhcmFtcy5sZW5ndGg7XHJcbiAgICBjb25zdCBmb3JtcyA9IGxlbmd0aCA9PT0gMiA/IHRoaXMuY2F0ZWdvcmllc1twYXJhbXNbMF1dLmZvcm1zIDogbGVuZ3RoID09PSAzID8gdGhpcy5jYXRlZ29yaWVzW3BhcmFtc1swXV0uZm9ybXNbcGFyYW1zWzFdXS5mb3JtcyA6IHRoaXMuY2F0ZWdvcmllc1twYXJhbXNbMF1dLmZvcm1zW3BhcmFtc1sxXV0uZm9ybXNbcGFyYW1zWzJdXS5mb3JtcztcclxuICAgIGZvcm1zLnNwbGljZShwYXJhbXNbbGVuZ3RoIC0gMV0sIDEpO1xyXG4gICAgdGhpcy5vbkhpc3Rvcmljcyh7XHJcbiAgICAgIGZvcm06IGZvcm1zW3BhcmFtc1tsZW5ndGggLSAxXV0sXHJcbiAgICAgIGxvY2F0aW9uOiAnZm9ybXMnLFxyXG4gICAgICBtZXRob2Q6ICdzcGxpY2UnLFxyXG4gICAgICBwYXJhbXNcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBvblJlbW92ZUNhdGVnb3J5KGUsIGkpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIHRoaXMuY2FuRXhpdCA9IGZhbHNlO1xyXG4gICAgdGhpcy5vbkhpc3Rvcmljcyh7XHJcbiAgICAgIGZvcm06IHRoaXMuY2F0ZWdvcmllcy5zcGxpY2UoaSwgMSksXHJcbiAgICAgIG1ldGhvZDogJ3NwbGljZScsXHJcbiAgICAgIGxvY2F0aW9uOiAnY2F0ZWdvcnknLFxyXG4gICAgICBwYXJhbXM6IFtpXVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIG9uQ2hhbmdlQ2F0ZWdvcnkoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5jYXRlZ29yaWVzLmV2ZXJ5KChjYXQpID0+IGNhdC5uYW1lICE9PSBcIlwiICYmIGNhdC5mb3Jtcy5ldmVyeSgoZmllbGQpID0+IGZpZWxkLmxhYmVsICE9PSBcIlwiICYmIGZpZWxkLnR5cGUgIT09IFwiXCIpKTtcclxuICB9XHJcblxyXG4gIGFzeW5jIG9uU3VibWl0KGlzUHVibGlzaDogYm9vbGVhbikge1xyXG4gICAgaWYgKHRoaXMuZm9ybS52YWxpZCAmJiB0aGlzLm9uQ2hhbmdlQ2F0ZWdvcnkoKSkge1xyXG4gICAgICBpZiAoaXNQdWJsaXNoKSB7XHJcbiAgICAgICAgdGhpcy5saXZlTGFiZWwgPSBcIkNoYXJnZW1lbnQuLi4uXCJcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmRyYWZ0TGFiZWwgPSBcIkNoYXJnZW1lbnQuLi5cIlxyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IHJlc3VsdCA9XHJcbiAgICAgICAgdGhpcy5pZCAhPT0gXCIwXCJcclxuICAgICAgICAgID8gYXdhaXQgdGhpcy5zZXJ2aWNlLnVwZGF0ZVByb2ZpbCh7XHJcbiAgICAgICAgICAgIC4uLnRoaXMuY3VycmVudFByb2ZpbCxcclxuICAgICAgICAgICAgLi4udGhpcy5mb3JtLnZhbHVlLFxyXG4gICAgICAgICAgICBTdGF0dXM6IGlzUHVibGlzaCxcclxuICAgICAgICAgICAgY2F0ZWdvcmllczogdGhpcy5jYXRlZ29yaWVzLFxyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIDogYXdhaXQgdGhpcy5zZXJ2aWNlLmNyZWF0ZVByb2ZpbCh7XHJcbiAgICAgICAgICAgIC4uLnRoaXMuZm9ybS52YWx1ZSxcclxuICAgICAgICAgICAgU3RhdHVzOiBpc1B1Ymxpc2gsXHJcbiAgICAgICAgICAgIGNhdGVnb3JpZXM6IHRoaXMuY2F0ZWdvcmllcyxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICBpZiAocmVzdWx0KSB7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3Byb2ZpbCcpO1xyXG4gICAgICAgIGF3YWl0IHRoaXMuc2VydmljZS5nZXRBbGxQcm9maWwoKTtcclxuICAgICAgICB0aGlzLmNhbkV4aXQgPSB0cnVlO1xyXG5cclxuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbdGhpcy5zZXJ2aWNlLm1haW5QYXRoICsgJy90ZW1wbGF0ZSddKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImVycnJvci4uLi4uLlwiKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoaXNQdWJsaXNoKSB7XHJcbiAgICAgICAgdGhpcy5saXZlTGFiZWwgPSBcIlB1Ymxpw6lcIlxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuZHJhZnRMYWJlbCA9IFwiRW5yZWdpc3RyZXIgbGUgYnJvdWlsbG9uXCJcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25DaGFuZ2VUeXBlKHR5cGU6IHN0cmluZywgLi4ucGFyYW1zKSB7XHJcblxyXG4gICAgdGhpcy5jYW5FeGl0ID0gZmFsc2U7XHJcbiAgICBjb25zdCBsZW5ndGggPSBwYXJhbXMubGVuZ3RoO1xyXG4gICAgY29uc3QgZm9ybXMgPSBsZW5ndGggPT09IDIgPyB0aGlzLmNhdGVnb3JpZXNbcGFyYW1zWzBdXS5mb3JtcyA6IGxlbmd0aCA9PT0gMyA/IHRoaXMuY2F0ZWdvcmllc1twYXJhbXNbMF1dLmZvcm1zW3BhcmFtc1sxXV0uZm9ybXMgOiB0aGlzLmNhdGVnb3JpZXNbcGFyYW1zWzBdXS5mb3Jtc1twYXJhbXNbMV1dLmZvcm1zW3BhcmFtc1syXV0uZm9ybXM7XHJcbiAgICBpZiAodHlwZSA9PT0gXCJzZWxlY3RcIiB8fCB0eXBlID09PSBcInJhZGlvXCIgfHwgdHlwZSA9PT0gXCJjaGVja2JveF9tdWx0aXBsZVwiKSB7XHJcbiAgICAgIGZvcm1zW3BhcmFtc1tsZW5ndGggLSAxXV0uZGVmYXVsdFZhbHVlID0gW107XHJcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09IFwiY2hlY2tib3hcIiB8fCB0eXBlID09PSBcInRvZ2dsZVwiKSB7XHJcbiAgICAgIGZvcm1zW3BhcmFtc1tsZW5ndGggLSAxXV0uZGVmYXVsdFZhbHVlID0gdHJ1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGZvcm1zW3BhcmFtc1tsZW5ndGggLSAxXV0uZGVmYXVsdFZhbHVlID0gXCJcIjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uS2V5UHJlc3MoZXZlbnQ6IGFueSwgLi4ucGFyYW1zKSB7XHJcbiAgICB0aGlzLmNhbkV4aXQgPSBmYWxzZTtcclxuICAgIGNvbnN0IGxlbmd0aCA9IHBhcmFtcy5sZW5ndGg7XHJcbiAgICBjb25zdCBmb3JtcyA9IGxlbmd0aCA9PT0gMiA/IHRoaXMuY2F0ZWdvcmllc1twYXJhbXNbMF1dLmZvcm1zW3BhcmFtc1tsZW5ndGggLSAxXV0gOiBsZW5ndGggPT09IDMgPyB0aGlzLmNhdGVnb3JpZXNbcGFyYW1zWzBdXS5mb3Jtc1twYXJhbXNbMV1dLmZvcm1zW3BhcmFtc1tsZW5ndGggLSAxXV0gOiB0aGlzLmNhdGVnb3JpZXNbcGFyYW1zWzBdXS5mb3Jtc1twYXJhbXNbMV1dLmZvcm1zW3BhcmFtc1syXV0uZm9ybXNbcGFyYW1zW2xlbmd0aCAtIDFdXTtcclxuICAgIGlmIChldmVudC5rZXkgPT09IFwiO1wiKSB7XHJcbiAgICAgIGNvbnN0IGV4aXN0ID0gZm9ybXMuZGVmYXVsdFZhbHVlLmZpbmQoKG9wdCkgPT4gb3B0LnZhbHVlLnRvTG9jYWxlTG93ZXJDYXNlKCkgPT09IGV2ZW50LnRhcmdldC52YWx1ZS5zcGxpdChcIjtcIilbMF0udG9Mb2NhbGVMb3dlckNhc2UoKSk7XHJcbiAgICAgIGlmICghZXhpc3QpIHtcclxuICAgICAgICBmb3Jtcy5kZWZhdWx0VmFsdWUucHVzaCh7XHJcbiAgICAgICAgICB2YWx1ZTogZXZlbnQudGFyZ2V0LnZhbHVlLnNwbGl0KFwiO1wiKVswXSxcclxuICAgICAgICAgIGNoZWNrZWQ6IGZhbHNlXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZXZlbnQudGFyZ2V0LnZhbHVlID0gXCJcIjtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBldmVudC50YXJnZXQudmFsdWUgPSBcIlwiO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyB0aGlzLmdldENvbmRpdGlvblZhbHVlcygpXHJcbiAgfVxyXG5cclxuICByZW1vdmVLZXl3b3JkKGtleXdvcmQ6IGFueSwgLi4ucGFyYW1zKSB7XHJcbiAgICB0aGlzLmNhbkV4aXQgPSBmYWxzZTtcclxuICAgIGNvbnN0IGxlbmd0aCA9IHBhcmFtcy5sZW5ndGg7XHJcbiAgICBjb25zdCBmb3JtcyA9IGxlbmd0aCA9PT0gMiA/IHRoaXMuY2F0ZWdvcmllc1twYXJhbXNbMF1dLmZvcm1zW3BhcmFtc1tsZW5ndGggLSAxXV0gOiBsZW5ndGggPT09IDMgPyB0aGlzLmNhdGVnb3JpZXNbcGFyYW1zWzBdXS5mb3Jtc1twYXJhbXNbMV1dLmZvcm1zW3BhcmFtc1tsZW5ndGggLSAxXV0gOiB0aGlzLmNhdGVnb3JpZXNbcGFyYW1zWzBdXS5mb3Jtc1twYXJhbXNbMV1dLmZvcm1zW3BhcmFtc1syXV0uZm9ybXNbcGFyYW1zW2xlbmd0aCAtIDFdXTtcclxuICAgIGZvcm1zLmRlZmF1bHRWYWx1ZSA9IGZvcm1zLmRlZmF1bHRWYWx1ZS5maWx0ZXIoKG9wdGlvbikgPT4gb3B0aW9uLnZhbHVlICE9PSBrZXl3b3JkLnZhbHVlKTtcclxuICAgIC8vIHRoaXMuZ2V0Q29uZGl0aW9uVmFsdWVzKClcclxuICB9XHJcblxyXG4gIG9uRXhwZW5kTW9yZShldmVudCwgLi4ucGFyYW1zKSB7XHJcbiAgICBpZiAoZXZlbnQpIHtcclxuICAgICAgaWYgKGV2ZW50LmV2ZW50KSB7XHJcbiAgICAgICAgZXZlbnQuZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoZXZlbnQuZmllbGQgJiYgIWV2ZW50LmZpZWxkLmV4cGFuZE1vcmUpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY2F0ZWdvcmllcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgdGhpcy5jYXRlZ29yaWVzW2ldLmV4cGFuZE1vcmUgPSBmYWxzZTtcclxuICAgICAgICAgIGlmICh0aGlzLmNhdGVnb3JpZXNbaV0uZm9ybXMpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLmNhdGVnb3JpZXNbaV0uZm9ybXMubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgICB0aGlzLmNhdGVnb3JpZXNbaV0uZm9ybXNbal0uZXhwYW5kTW9yZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgfVxyXG4gICAgaWYgKHBhcmFtcy5sZW5ndGggPT09IDEpIHtcclxuICAgICAgdGhpcy5jYXRlZ29yaWVzW3BhcmFtc1swXV0uZXhwYW5kTW9yZSA9ICF0aGlzLmNhdGVnb3JpZXNbcGFyYW1zWzBdXS5leHBhbmRNb3JlO1xyXG4gICAgfSBlbHNlIGlmIChwYXJhbXMubGVuZ3RoID09PSAyKSB7XHJcbiAgICAgIGlmICh0aGlzLmNhdGVnb3JpZXNbcGFyYW1zWzBdXS5mb3Jtc1twYXJhbXNbMV1dLmV4cGFuZE1vcmUpIHtcclxuICAgICAgICB0aGlzLmNhdGVnb3JpZXNbcGFyYW1zWzBdXS5mb3Jtc1twYXJhbXNbMV1dLmV4cGFuZE1vcmUgPSBmYWxzZTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmNhdGVnb3JpZXNbcGFyYW1zWzBdXS5leHBhbmRNb3JlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmNhdGVnb3JpZXNbcGFyYW1zWzBdXS5mb3Jtc1twYXJhbXNbMV1dLmV4cGFuZE1vcmUgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2UgaWYgKHBhcmFtcy5sZW5ndGggPT09IDMpIHtcclxuICAgICAgaWYgKHRoaXMuY2F0ZWdvcmllc1twYXJhbXNbMF1dLmZvcm1zW3BhcmFtc1sxXV0uZm9ybXNbcGFyYW1zWzJdXS5leHBhbmRNb3JlKSB7XHJcbiAgICAgICAgdGhpcy5jYXRlZ29yaWVzW3BhcmFtc1swXV0uZm9ybXNbcGFyYW1zWzFdXS5mb3Jtc1twYXJhbXNbMl1dLmV4cGFuZE1vcmUgPSBmYWxzZTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmNhdGVnb3JpZXNbcGFyYW1zWzBdXS5leHBhbmRNb3JlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmNhdGVnb3JpZXNbcGFyYW1zWzBdXS5mb3Jtc1twYXJhbXNbMV1dLmV4cGFuZE1vcmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuY2F0ZWdvcmllc1twYXJhbXNbMF1dLmZvcm1zW3BhcmFtc1sxXV0uZm9ybXNbcGFyYW1zWzJdXS5leHBhbmRNb3JlID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYgKHRoaXMuY2F0ZWdvcmllc1twYXJhbXNbMF1dLmZvcm1zW3BhcmFtc1sxXV0uZm9ybXNbcGFyYW1zWzJdXS5mb3Jtc1twYXJhbXNbM11dLmV4cGFuZE1vcmUpIHtcclxuICAgICAgICB0aGlzLmNhdGVnb3JpZXNbcGFyYW1zWzBdXS5mb3Jtc1twYXJhbXNbMV1dLmZvcm1zW3BhcmFtc1syXV0uZm9ybXNbcGFyYW1zWzNdXS5leHBhbmRNb3JlID0gZmFsc2U7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5jYXRlZ29yaWVzW3BhcmFtc1swXV0uZXhwYW5kTW9yZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5jYXRlZ29yaWVzW3BhcmFtc1swXV0uZm9ybXNbcGFyYW1zWzFdXS5leHBhbmRNb3JlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmNhdGVnb3JpZXNbcGFyYW1zWzBdXS5mb3Jtc1twYXJhbXNbMV1dLmZvcm1zW3BhcmFtc1syXV0uZXhwYW5kTW9yZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5jYXRlZ29yaWVzW3BhcmFtc1swXV0uZm9ybXNbcGFyYW1zWzFdXS5mb3Jtc1twYXJhbXNbMl1dLmZvcm1zW3BhcmFtc1szXV0uZXhwYW5kTW9yZSA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uQ2hlY2tlZERlZmF1bHQoZXZlbnQsIC4uLnBhcmFtcykge1xyXG4gICAgaWYgKHBhcmFtcy5sZW5ndGggPT09IDEpIHtcclxuICAgICAgdGhpcy5jYXRlZ29yaWVzW3BhcmFtc1swXV0uZGVmYXVsdFZhbHVlID0gZXZlbnQ7XHJcbiAgICB9IGVsc2UgaWYgKHBhcmFtcy5sZW5ndGggPT09IDIpIHtcclxuICAgICAgdGhpcy5jYXRlZ29yaWVzW3BhcmFtc1swXV0uZGVmYXVsdFZhbHVlID0gZXZlbnQ7XHJcbiAgICAgIHRoaXMuY2F0ZWdvcmllc1twYXJhbXNbMF1dLmZvcm1zW3BhcmFtc1sxXV0uZGVmYXVsdFZhbHVlID0gZXZlbnQ7XHJcbiAgICB9IGVsc2UgaWYgKHBhcmFtcy5sZW5ndGggPT09IDMpIHtcclxuICAgICAgdGhpcy5jYXRlZ29yaWVzW3BhcmFtc1swXV0uZGVmYXVsdFZhbHVlID0gZXZlbnQ7XHJcbiAgICAgIHRoaXMuY2F0ZWdvcmllc1twYXJhbXNbMF1dLmZvcm1zW3BhcmFtc1sxXV0uZGVmYXVsdFZhbHVlID0gZXZlbnQ7XHJcbiAgICAgIHRoaXMuY2F0ZWdvcmllc1twYXJhbXNbMF1dLmZvcm1zW3BhcmFtc1sxXV0uZm9ybXNbcGFyYW1zWzJdXS5kZWZhdWx0VmFsdWUgPSBldmVudDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuY2F0ZWdvcmllc1twYXJhbXNbMF1dLmRlZmF1bHRWYWx1ZSA9IGV2ZW50O1xyXG4gICAgICB0aGlzLmNhdGVnb3JpZXNbcGFyYW1zWzBdXS5mb3Jtc1twYXJhbXNbMV1dLmRlZmF1bHRWYWx1ZSA9IGV2ZW50O1xyXG4gICAgICB0aGlzLmNhdGVnb3JpZXNbcGFyYW1zWzBdXS5mb3Jtc1twYXJhbXNbMV1dLmZvcm1zW3BhcmFtc1syXV0uZGVmYXVsdFZhbHVlID0gZXZlbnQ7XHJcbiAgICAgIHRoaXMuY2F0ZWdvcmllc1twYXJhbXNbMF1dLmZvcm1zW3BhcmFtc1sxXV0uZm9ybXNbcGFyYW1zWzJdXS5mb3Jtc1twYXJhbXNbM11dLmRlZmF1bHRWYWx1ZSA9IGV2ZW50O1xyXG4gICAgfVxyXG4gICAgLy8gdGhpcy5nZXRDb25kaXRpb25WYWx1ZXMoKVxyXG4gIH1cclxuXHJcbiAgYWRkS2V5d29yZEZyb21JbnB1dChldmVudDogTWF0Q2hpcElucHV0RXZlbnQsIHByZXYsIC4uLnBhcmFtcykge1xyXG4gICAgdGhpcy5jYW5FeGl0ID0gZmFsc2U7XHJcbiAgICBjb25zdCBpbnB1dCA9IGV2ZW50LmlucHV0O1xyXG4gICAgY29uc3QgdmFsdWUgPSBldmVudC52YWx1ZTtcclxuICAgIGNvbnN0IGxlbmd0aCA9IHBhcmFtcy5sZW5ndGg7XHJcbiAgICBjb25zdCBmb3JtcyA9IGxlbmd0aCA9PT0gMiA/IHRoaXMuY2F0ZWdvcmllc1twYXJhbXNbMF1dLmZvcm1zW3BhcmFtc1tsZW5ndGggLSAxXV0gOiBsZW5ndGggPT09IDMgPyB0aGlzLmNhdGVnb3JpZXNbcGFyYW1zWzBdXS5mb3Jtc1twYXJhbXNbMV1dLmZvcm1zW3BhcmFtc1tsZW5ndGggLSAxXV0gOiB0aGlzLmNhdGVnb3JpZXNbcGFyYW1zWzBdXS5mb3Jtc1twYXJhbXNbMV1dLmZvcm1zW3BhcmFtc1syXV0uZm9ybXNbcGFyYW1zW2xlbmd0aCAtIDFdXTtcclxuICAgIGlmICh2YWx1ZSkge1xyXG4gICAgICBjb25zdCBwcmV2SW5kZXggPSBmb3Jtcy5kZWZhdWx0VmFsdWUuZmluZEluZGV4KChvcHQpID0+IG9wdC52YWx1ZS50b0xvY2FsZUxvd2VyQ2FzZSgpID09PSBwcmV2LnRvTG9jYWxlTG93ZXJDYXNlKCkpO1xyXG4gICAgICBpZiAocHJldkluZGV4ICE9PSAtMSkge1xyXG4gICAgICAgIGZvcm1zLmRlZmF1bHRWYWx1ZVtwcmV2SW5kZXhdLnZhbHVlID0gdmFsdWUudHJpbSgpO1xyXG4gICAgICAgIGlucHV0LnZhbHVlID0gXCJcIjtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zdCBleGlzdCA9IGZvcm1zLmRlZmF1bHRWYWx1ZS5maW5kKChvcHQpID0+IG9wdC52YWx1ZS50b0xvY2FsZUxvd2VyQ2FzZSgpID09PSBldmVudC52YWx1ZS50b0xvY2FsZUxvd2VyQ2FzZSgpKTtcclxuICAgICAgICBpZiAoIWV4aXN0KSB7XHJcbiAgICAgICAgICBmb3Jtcy5kZWZhdWx0VmFsdWUucHVzaCh7IHZhbHVlOiB2YWx1ZS50cmltKCksIGNoZWNrZWQ6IGZhbHNlIH0pO1xyXG4gICAgICAgICAgaW5wdXQudmFsdWUgPSBcIlwiO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBpbnB1dC52YWx1ZSA9IFwiXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgfVxyXG4gICAgLy8gdGhpcy5nZXRDb25kaXRpb25WYWx1ZXMoKVxyXG4gIH1cclxuXHJcbiAgZHJvcChldmVudDogQ2RrRHJhZ0Ryb3A8c3RyaW5nW10+KSB7XHJcbiAgICB0aGlzLmNhbkV4aXQgPSBmYWxzZTtcclxuICAgIGlmIChldmVudC5wcmV2aW91c0NvbnRhaW5lciA9PT0gZXZlbnQuY29udGFpbmVyKSB7XHJcbiAgICAgIG1vdmVJdGVtSW5BcnJheShldmVudC5jb250YWluZXIuZGF0YSwgZXZlbnQucHJldmlvdXNJbmRleCwgZXZlbnQuY3VycmVudEluZGV4KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRyYW5zZmVyQXJyYXlJdGVtKGV2ZW50LnByZXZpb3VzQ29udGFpbmVyLmRhdGEsIGV2ZW50LmNvbnRhaW5lci5kYXRhLCBldmVudC5wcmV2aW91c0luZGV4LCBldmVudC5jdXJyZW50SW5kZXgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaW5nb3JlRGVmYXVsdEFjdGlvbihlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgfVxyXG5cclxuICBvblNob3dDYXRlZ29yeSgpIHtcclxuICAgIHRoaXMuc2hvd1Byb2ZpbGVOYW1lID0gIXRoaXMuc2hvd1Byb2ZpbGVOYW1lO1xyXG4gIH1cclxuXHJcbiAgb25TZWxlY3RQaWN0byhlLCBwaWN0bykge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgdGhpcy5jYW5FeGl0ID0gZmFsc2U7XHJcbiAgICB0aGlzLmZvcm0ucGF0Y2hWYWx1ZSh7IFBpY3RvOiBwaWN0byB9KTtcclxuICAgIHRoaXMuaXNQaWN0b0xpc3RTaG93ID0gIXRoaXMuaXNQaWN0b0xpc3RTaG93O1xyXG4gIH1cclxuICBvblNob3dQaWN0b0xpc3QoZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgdGhpcy5pc1BpY3RvTGlzdFNob3cgPSAhdGhpcy5pc1BpY3RvTGlzdFNob3c7XHJcbiAgfVxyXG4gIG9uQ2hhbmdlTGFiZWwoZXZlbnQ6IGFueSwgLi4ucGFyYW1zKSB7XHJcbiAgICBjb25zdCBhcnIgPSBldmVudC5sYWJlbC5zcGxpdChcIiBcIik7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xyXG4gICAgICBhcnJbaV0gPSBhcnJbaV0uY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBhcnJbaV0uc2xpY2UoMSk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBsZW5ndGggPSBwYXJhbXMubGVuZ3RoO1xyXG4gICAgY29uc3QgZm9ybXMgPSBsZW5ndGggPT09IDIgPyB0aGlzLmNhdGVnb3JpZXNbcGFyYW1zWzBdXS5mb3Jtc1twYXJhbXNbbGVuZ3RoIC0gMV1dIDogbGVuZ3RoID09PSAzID8gdGhpcy5jYXRlZ29yaWVzW3BhcmFtc1swXV0uZm9ybXNbcGFyYW1zWzFdXS5mb3Jtc1twYXJhbXNbbGVuZ3RoIC0gMV1dIDogdGhpcy5jYXRlZ29yaWVzW3BhcmFtc1swXV0uZm9ybXNbcGFyYW1zWzFdXS5mb3Jtc1twYXJhbXNbMl1dLmZvcm1zW3BhcmFtc1tsZW5ndGggLSAxXV07XHJcbiAgICBmb3Jtcy5rZXkgPSBhcnIuam9pbignJylcclxuXHJcbiAgfVxyXG5cclxuICBvbkNoZWNrZWRDaGlwKGV2ZW50OiBhbnksIC4uLnBhcmFtcykge1xyXG4gICAgdGhpcy5jYW5FeGl0ID0gZmFsc2U7XHJcbiAgICBjb25zdCBsZW5ndGggPSBwYXJhbXMubGVuZ3RoO1xyXG4gICAgY29uc3QgZm9ybXMgPSBsZW5ndGggPT09IDIgPyB0aGlzLmNhdGVnb3JpZXNbcGFyYW1zWzBdXS5mb3Jtc1twYXJhbXNbbGVuZ3RoIC0gMV1dIDogbGVuZ3RoID09PSAzID8gdGhpcy5jYXRlZ29yaWVzW3BhcmFtc1swXV0uZm9ybXNbcGFyYW1zWzFdXS5mb3Jtc1twYXJhbXNbbGVuZ3RoIC0gMV1dIDogdGhpcy5jYXRlZ29yaWVzW3BhcmFtc1swXV0uZm9ybXNbcGFyYW1zWzFdXS5mb3Jtc1twYXJhbXNbMl1dLmZvcm1zW3BhcmFtc1tsZW5ndGggLSAxXV07XHJcbiAgICBjb25zdCBpbmRleCA9IGZvcm1zLmRlZmF1bHRWYWx1ZS5maW5kSW5kZXgoKGNoaXApID0+IGNoaXAudmFsdWUgPT09IGV2ZW50LnZhbHVlKVxyXG4gICAgaWYgKGluZGV4ICE9PSAtMSAmJiBmb3Jtcy50eXBlID09PSAnY2hlY2tib3hfbXVsdGlwbGUnKSB7XHJcbiAgICAgIGZvcm1zLmRlZmF1bHRWYWx1ZVtpbmRleF0uY2hlY2tlZCA9ICFldmVudC5jaGVja2VkXHJcbiAgICB9IGVsc2UgaWYgKGluZGV4ICE9PSAtMSkge1xyXG4gICAgICBmb3Jtcy5kZWZhdWx0VmFsdWUuZm9yRWFjaCgodmFsdWUpID0+IHtcclxuICAgICAgICB2YWx1ZS5jaGVja2VkID0gZmFsc2U7XHJcbiAgICAgIH0pXHJcbiAgICAgIGZvcm1zLmRlZmF1bHRWYWx1ZVtpbmRleF0uY2hlY2tlZCA9ICFldmVudC5jaGVja2VkXHJcbiAgICB9XHJcbiAgICAvLyB0aGlzLmdldENvbmRpdGlvblZhbHVlcygpXHJcbiAgfVxyXG5cclxuICBvcGVuRGlhbG9nKCkge1xyXG4gICAgY29uc3QgZGlhbG9nUmVmID0gdGhpcy5kaWFsb2cub3BlbihEaWFsb2dDcmVhdGVUZW1wbGF0ZUNvbXBvbmVudCwge1xyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgdGFnczogdGhpcy50YWdzLFxyXG4gICAgICAgIHByb2ZpbDogdGhpcy5mb3JtLnZhbHVlXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgZGlhbG9nUmVmLmFmdGVyQ2xvc2VkKCkuc3Vic2NyaWJlKChjdXJyZW50OiBhbnkpID0+IHtcclxuICAgICAgaWYgKGN1cnJlbnQpIHtcclxuICAgICAgICB0aGlzLnNlcnZpY2UuY3VycmVudFRlbXBsYXRlLm5leHQoY3VycmVudCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgb25QYXNzSW5FZGl0TW9kZShpKSB7XHJcbiAgICB0aGlzLmNhbkV4aXQgPSBmYWxzZTtcclxuICAgIHRoaXMuZWRpdEluZGV4ID0gaTtcclxuICB9XHJcblxyXG4gIG9uRWRpdCgpIHtcclxuICAgIHRoaXMuZWRpdEluZGV4ID0gbnVsbDtcclxuICB9XHJcblxyXG4gIG9uRWRpdENhdGVnb3J5TmFtZShpLCBuYW1lKSB7XHJcbiAgICB0aGlzLmNhbkV4aXQgPSBmYWxzZTtcclxuICAgIHRoaXMuY2F0ZWdvcmllc1tpXS5uYW1lID0gbmFtZTtcclxuICAgIC8vIHRoaXMuZ2V0Q29uZGl0aW9uVmFsdWVzKClcclxuICB9XHJcbiAgb25BY3JlbGluayhlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgfVxyXG5cclxuICBnZXRDb25kaXRpb25WYWx1ZXMoKSB7XHJcbiAgICBjb25zdCBjb25kaXRpb25zTGlzdDogYW55ID0gW107XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY2F0ZWdvcmllcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBjb25zdCBjYXRlZ29yeSA9IHtcclxuICAgICAgICBsYWJlbDogdGhpcy5jYXRlZ29yaWVzW2ldLm5hbWUsXHJcbiAgICAgICAgZm9ybXM6IFtdLFxyXG4gICAgICAgIGtleTogdGhpcy5jYXRlZ29yaWVzW2ldLmtleSxcclxuICAgICAgICBsb2NhdGlvbjoge1xyXG4gICAgICAgICAgczBJbmRleDogaSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGxldmVsOiAwLFxyXG4gICAgICB9XHJcblxyXG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMuY2F0ZWdvcmllc1tpXS5mb3Jtcy5sZW5ndGg7IGorKykge1xyXG4gICAgICAgIGNvbnN0IHMxRm9ybXMgPSB0aGlzLmNhdGVnb3JpZXNbaV0uZm9ybXNbal07XHJcbiAgICAgICAgY29uc3QgczFMb2NhdGlvbiA9IHtcclxuICAgICAgICAgIGxldmVsOiAxLFxyXG4gICAgICAgICAgbG9jYXRpb246IHtcclxuICAgICAgICAgICAgczBJbmRleDogaSxcclxuICAgICAgICAgICAgczFJbmRleDogaixcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBrZXk6IHMxRm9ybXMua2V5LFxyXG4gICAgICAgICAgZGVmYXVsdFZhbHVlOiBzMUZvcm1zLmRlZmF1bHRWYWx1ZSxcclxuICAgICAgICAgIGxhYmVsOiBzMUZvcm1zLmxhYmVsLFxyXG4gICAgICAgICAgZm9ybXM6IFtdXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGVnb3J5LmZvcm1zLnB1c2goczFMb2NhdGlvbilcclxuICAgICAgICBpZiAoczFGb3Jtcy5mb3Jtcykge1xyXG4gICAgICAgICAgZm9yIChsZXQgayA9IDA7IGsgPCBzMUZvcm1zLmZvcm1zLmxlbmd0aDsgaysrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHMyRm9ybXMgPSBzMUZvcm1zLmZvcm1zW2tdXHJcbiAgICAgICAgICAgIGNvbnN0IHMyTG9jYXRpb24gPSB7XHJcbiAgICAgICAgICAgICAgbGV2ZWw6IDIsXHJcbiAgICAgICAgICAgICAgbG9jYXRpb246IHtcclxuICAgICAgICAgICAgICAgIHMwSW5kZXg6IGksXHJcbiAgICAgICAgICAgICAgICBzMUluZGV4OiBqLFxyXG4gICAgICAgICAgICAgICAgczJJbmRleDogayxcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZTogczJGb3Jtcy5kZWZhdWx0VmFsdWUsXHJcbiAgICAgICAgICAgICAgbGFiZWw6IHMyRm9ybXMubGFiZWwsXHJcbiAgICAgICAgICAgICAga2V5OiBzMkZvcm1zLmtleSxcclxuICAgICAgICAgICAgICBmb3JtczogW11cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzMUxvY2F0aW9uLmZvcm1zLnB1c2goczJMb2NhdGlvbilcclxuICAgICAgICAgICAgaWYgKHMyRm9ybXMuZm9ybXMpIHtcclxuICAgICAgICAgICAgICBmb3IgKGxldCBsID0gMDsgbCA8IHMyRm9ybXMuZm9ybXMubGVuZ3RoOyBsKyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHMzRm9ybXMgPSBzMkZvcm1zLmZvcm1zW2xdXHJcbiAgICAgICAgICAgICAgICBjb25zdCBzM0xvY2F0aW9uID0ge1xyXG4gICAgICAgICAgICAgICAgICBsZXZlbDogMyxcclxuICAgICAgICAgICAgICAgICAgbG9jYXRpb246IHtcclxuICAgICAgICAgICAgICAgICAgICBzMEluZGV4OiBpLFxyXG4gICAgICAgICAgICAgICAgICAgIHMxSW5kZXg6IGosXHJcbiAgICAgICAgICAgICAgICAgICAgczJJbmRleDogayxcclxuICAgICAgICAgICAgICAgICAgICBzM0luZGV4OiBsLFxyXG4gICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU6IHMzRm9ybXMuZGVmYXVsdFZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICBrZXk6IHMzRm9ybXMua2V5LFxyXG4gICAgICAgICAgICAgICAgICBsYWJlbDogczNGb3Jtcy5sYWJlbCxcclxuICAgICAgICAgICAgICAgICAgZm9ybXM6IFtdXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBzMkxvY2F0aW9uLmZvcm1zLnB1c2goczNMb2NhdGlvbilcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoczNMb2NhdGlvbi5mb3Jtcykge1xyXG4gICAgICAgICAgICAgICAgICBmb3IgKGxldCBtID0gMDsgbSA8IHMzTG9jYXRpb24uZm9ybXMubGVuZ3RoOyBtKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzNExvY2F0aW9uID0gczNMb2NhdGlvbi5mb3Jtc1ttXVxyXG4gICAgICAgICAgICAgICAgICAgIHMzTG9jYXRpb24uZm9ybXMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICBsZXZlbDogNCxcclxuICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHMwSW5kZXg6IGksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHMxSW5kZXg6IGosXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHMySW5kZXg6IGssXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHMzSW5kZXg6IGwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHM0SW5kZXg6IG0sXHJcbiAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlOiBzNExvY2F0aW9uLmRlZmF1bHRWYWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgIGtleTogczRMb2NhdGlvbi5rZXksXHJcbiAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogczRMb2NhdGlvbi5sYWJlbFxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgY29uZGl0aW9uc0xpc3QucHVzaChjYXRlZ29yeSlcclxuICAgIH1cclxuICAgIHRoaXMuY29uZGl0aW9uRGF0YS5hbGwgPSBjb25kaXRpb25zTGlzdDtcclxuXHJcbiAgfVxyXG5cclxuICBvblNlbGVjdENvbmRpdGlvbihsZXZlbCwgc3ViTGV2ZWwsIHZhbHVlKSB7XHJcbiAgICBjb25zdCBjb25kaXRpb24gPSB0aGlzLmNvbmRpdGlvbkRhdGFbbGV2ZWxdLmZpbmQoKGRhdGEpID0+IGRhdGEua2V5ID09PSB2YWx1ZSk7XHJcbiAgICBpZiAobGV2ZWwgPT09IFwiYWxsXCIpIHtcclxuICAgICAgdGhpcy5jb25kaXRpb25EYXRhID0ge1xyXG4gICAgICAgIC4uLnRoaXMuY29uZGl0aW9uRGF0YSxcclxuICAgICAgICBzMTogW10sXHJcbiAgICAgICAgczI6IFtdLFxyXG4gICAgICAgIHMzOiBbXSxcclxuICAgICAgICBkZWZhdWx0VmFsdWU6IFtdXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHRoaXMuY3VycmVudEVkaXRCbG9jay5jb25kaXRpb24gPSBjb25kaXRpb25cclxuICAgIHRoaXMub25HZXREZWZhdWx0VmFsdWUoKVxyXG4gICAgaWYgKGNvbmRpdGlvbi5mb3Jtcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIHRoaXMuY29uZGl0aW9uRGF0YVtzdWJMZXZlbF0gPSBjb25kaXRpb24uZm9ybXM7XHJcbiAgICB9XHJcbiAgICAvLyBpZiAoY29uZGl0aW9uKSB7XHJcbiAgICAvLyAgIGlmIChjb25kaXRpb24uZm9ybXMubGVuZ3RoID4gMCkge1xyXG4gICAgLy8gICAgIHRoaXMuY29uZGl0aW9uRGF0YVtzdWJMZXZlbF0gPSBjb25kaXRpb24uZm9ybXM7XHJcbiAgICAvLyAgIH0gZWxzZSB7XHJcbiAgICAvLyAgICAgY29uc3Qgb2JqZWN0QXJyYXkgPSBPYmplY3QuZW50cmllcyh0aGlzLmN1cnJlbnRFZGl0QmxvY2suY29uZGl0aW9uKVxyXG4gICAgLy8gICAgIGNvbnN0IGxhc3RWYWx1ZTogYW55ID0gb2JqZWN0QXJyYXlbb2JqZWN0QXJyYXkubGVuZ3RoIC0gMV1bMV1cclxuICAgIC8vICAgICB0aGlzLmN1cnJlbnRFZGl0QmxvY2suY29uZGl0aW9uLmRlZmF1bHRWYWx1ZSA9IGxhc3RWYWx1ZS5kZWZhdWx0VmFsdWUgfHwgW11cclxuICAgIC8vICAgfVxyXG4gICAgLy8gfVxyXG5cclxuXHJcbiAgfVxyXG4gIG9uR2V0RGVmYXVsdFZhbHVlKCkge1xyXG4gICAgaWYgKHRoaXMuY3VycmVudEVkaXRCbG9jay5pc0NvbmRpdGlvbmFsICYmIHRoaXMuY3VycmVudEVkaXRCbG9jaz8uY29uZGl0aW9uPy5sb2NhdGlvbikge1xyXG4gICAgICBjb25zdCB7IHMwSW5kZXgsIC4uLnJlc3QgfSA9IHRoaXMuY3VycmVudEVkaXRCbG9jay5jb25kaXRpb24ubG9jYXRpb25cclxuICAgICAgbGV0IGN1cnJlbnREYXRhID0gdGhpcy5jYXRlZ29yaWVzW3MwSW5kZXhdO1xyXG4gICAgICBmb3IgKGNvbnN0IGtleSBpbiByZXN0KSB7XHJcbiAgICAgICAgaWYgKGN1cnJlbnREYXRhLmZvcm1zW3Jlc3Rba2V5XV0pIHtcclxuICAgICAgICAgIGN1cnJlbnREYXRhID0gY3VycmVudERhdGEuZm9ybXNbcmVzdFtrZXldXVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gY3VycmVudERhdGEuZGVmYXVsdFZhbHVlIHx8IFtdXHJcbiAgICB9XHJcbiAgICByZXR1cm4gW11cclxuICB9XHJcblxyXG4gIG9uQWN0aXZlTWVudShjYXQsIGksIGV2ZW50ID0gbnVsbCkge1xyXG4gICAgdGhpcy5lZGl0SW5kZXggPSBpO1xyXG4gICAgdGhpcy5wYXJhbXNJbmRleCA9IFtpXTtcclxuICAgIHRoaXMub25FeHBlbmRNb3JlKHsgZmllbGQ6IGNhdCB9LCBpKTtcclxuICAgIHRoaXMub25TaG93U2VjdGlvbihldmVudCk7XHJcbiAgICB0aGlzLmN1cnJlbnRFZGl0QmxvY2sgPSBjYXQ7XHJcbiAgfVxyXG5cclxuICBjYXROYW1lU3RhcnQoc3RyOiBzdHJpbmcpIHtcclxuICAgIGNvbnN0IHZvd2VscyA9IFsnYScsICdlJywgJ2knLCAnbycsICd1JywgJ3knXTtcclxuICAgIHJldHVybiB2b3dlbHMuaW5jbHVkZXMoc3RyLnN1YnN0cigwLCAxKS50b0xvY2FsZUxvd2VyQ2FzZSgpKVxyXG4gIH1cclxuXHJcbiAgb25TaG93U2VjdGlvbihlKSB7XHJcbiAgICBpZiAoZSkgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIHRoaXMuaXNTZWN0aW9uID0gdHJ1ZTtcclxuICAgIHRoaXMuaXNCbG9jayA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgb25FZGl0QmxvY2soYmxvY2ssIC4uLnBhcmFtcykge1xyXG4gICAgY29uc29sZS5sb2cocGFyYW1zKTtcclxuXHJcbiAgICB0aGlzLmlzQmxvY2sgPSB0cnVlO1xyXG4gICAgdGhpcy5jdXJyZW50RWRpdEJsb2NrID0gYmxvY2s7XHJcbiAgICB0aGlzLmlzU2VjdGlvbiA9IGZhbHNlO1xyXG4gICAgdGhpcy5wYXJhbXNJbmRleCA9IHBhcmFtcztcclxuICAgIHRoaXMuZ2V0Q29uZGl0aW9uVmFsdWVzKClcclxuICB9XHJcblxyXG4gIG9uUmVtb3ZlYmxvY2soZXZlbnQsIGJsb2NrKSB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIH1cclxuXHJcbiAgb25SZW1vdmVGaWVsZEJsb2NrKGV2ZW50KSB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3QgbGVuZ3RoID0gdGhpcy5wYXJhbXNJbmRleC5sZW5ndGg7XHJcbiAgICB0aGlzLmNhbkV4aXQgPSBmYWxzZTtcclxuICAgIGNvbnN0IGZvcm1zID0gbGVuZ3RoID09PSAxID8gdGhpcy5jYXRlZ29yaWVzIDogbGVuZ3RoID09PSAyID8gdGhpcy5jYXRlZ29yaWVzW3RoaXMucGFyYW1zSW5kZXhbMF1dLmZvcm1zIDogbGVuZ3RoID09PSAzID8gdGhpcy5jYXRlZ29yaWVzW3RoaXMucGFyYW1zSW5kZXhbMF1dLmZvcm1zW3RoaXMucGFyYW1zSW5kZXhbMV1dLmZvcm1zIDogdGhpcy5jYXRlZ29yaWVzW3RoaXMucGFyYW1zSW5kZXhbMF1dLmZvcm1zW3RoaXMucGFyYW1zSW5kZXhbMV1dLmZvcm1zW3RoaXMucGFyYW1zSW5kZXhbMl1dLmZvcm1zO1xyXG5cclxuICAgIHRoaXMuY3VycmVudEVkaXRCbG9jayA9IG51bGw7XHJcbiAgICB0aGlzLmlzQmxvY2sgPSBmYWxzZTtcclxuICAgIHRoaXMuaXNTZWN0aW9uID0gZmFsc2U7XHJcbiAgICB0aGlzLm9uSGlzdG9yaWNzKHtcclxuICAgICAgZm9ybTogZm9ybXMuc3BsaWNlKHRoaXMucGFyYW1zSW5kZXhbbGVuZ3RoIC0gMV0sIDEpWzBdLFxyXG4gICAgICBtZXRob2Q6ICdzcGxpY2UnLFxyXG4gICAgICBsb2NhdGlvbjogbGVuZ3RoID09PSAxID8gJ2NhdGVnb3J5JyA6ICdmb3JtcycsXHJcbiAgICAgIHBhcmFtczogdGhpcy5wYXJhbXNJbmRleFxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIG9uRHVwbGljYXRlZEJsb2NrKGV2ZW50KSB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3QgbGVuZ3RoID0gdGhpcy5wYXJhbXNJbmRleC5sZW5ndGg7XHJcbiAgICB0aGlzLmNhbkV4aXQgPSBmYWxzZTtcclxuICAgIGNvbnN0IGZvcm1zID0gbGVuZ3RoID09PSAxID8gdGhpcy5jYXRlZ29yaWVzIDogbGVuZ3RoID09PSAyID8gdGhpcy5jYXRlZ29yaWVzW3RoaXMucGFyYW1zSW5kZXhbMF1dLmZvcm1zIDogbGVuZ3RoID09PSAzID8gdGhpcy5jYXRlZ29yaWVzW3RoaXMucGFyYW1zSW5kZXhbMF1dLmZvcm1zW3RoaXMucGFyYW1zSW5kZXhbMV1dLmZvcm1zIDogdGhpcy5jYXRlZ29yaWVzW3RoaXMucGFyYW1zSW5kZXhbMF1dLmZvcm1zW3RoaXMucGFyYW1zSW5kZXhbMV1dLmZvcm1zW3RoaXMucGFyYW1zSW5kZXhbMl1dLmZvcm1zO1xyXG4gICAgY29uc3QgY2xvbmVFZGl0YWJsZSA9IHRoaXMub25FZGl0YWJsZUJsb2NrKHsgLi4udGhpcy5jdXJyZW50RWRpdEJsb2NrLCBuYW1lOiB0aGlzLmN1cnJlbnRFZGl0QmxvY2submFtZSArICcgLSBjb3BpZScgfSlcclxuICAgIGNvbnNvbGUubG9nKCctLS0tLS0td3d3d3d3d3d3LS0tLS0tLS0tLS0tLS0tJywgY2xvbmVFZGl0YWJsZSk7XHJcbiAgICBjb25zdCBjbG9uZUJsb2NrID0gSlNPTi5zdHJpbmdpZnkoY2xvbmVFZGl0YWJsZSk7XHJcblxyXG5cclxuICAgIGZvcm1zLnB1c2goSlNPTi5wYXJzZShjbG9uZUJsb2NrKSk7XHJcbiAgICB0aGlzLmN1cnJlbnRFZGl0QmxvY2sgPSBmb3Jtcy5hdCgtMSk7XHJcbiAgICBjb25zdCBwYXJhbXM6IG51bWJlcltdID0gWy4uLnRoaXMucGFyYW1zSW5kZXhdXHJcbiAgICBwYXJhbXMucG9wKCk7XHJcbiAgICBwYXJhbXMucHVzaChmb3Jtcy5sZW5ndGggLSAxKTtcclxuICAgIHRoaXMub25IaXN0b3JpY3Moe1xyXG4gICAgICBmb3JtOiBKU09OLnBhcnNlKGNsb25lQmxvY2spLFxyXG4gICAgICBtZXRob2Q6ICdwdXNoJyxcclxuICAgICAgbG9jYXRpb246ICdmb3JtcycsXHJcbiAgICAgIHBhcmFtc1xyXG4gICAgfSlcclxuICAgIC8vIHRoaXMuZWRpdEluZGV4ID0gZm9ybXMubGVuZ3RoIC0gMTtcclxuICB9XHJcblxyXG4gIG9uRWRpdGFibGVCbG9jayhub3RFZGl0YWJsZUJsb2NrOiBhbnkpIHtcclxuICAgIGNvbnN0IGVkaXRhYmxlRm9ybUJsb2NrID0gbm90RWRpdGFibGVCbG9jay5mb3JtcyA/IG5vdEVkaXRhYmxlQmxvY2suZm9ybXNcclxuICAgICAgLm1hcCgoY2F0KSA9PiB7XHJcbiAgICAgICAgaWYgKGNhdC5mb3Jtcykge1xyXG4gICAgICAgICAgY29uc3QgZiA9IGNhdC5mb3Jtc1xyXG4gICAgICAgICAgICAubWFwKChzdWIpID0+IHtcclxuICAgICAgICAgICAgICBpZiAoc3ViLmZvcm1zKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzID0gc3ViLmZvcm1zLm1hcCgoY2hpbGQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgaWYgKGNoaWxkLmZvcm1zKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICAgIC4uLmNoaWxkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgZWRpdGFibGU6IHRydWVcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICAuLi5jaGlsZCwgZWRpdGFibGU6IHRydWVcclxuICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgLi4uc3ViLFxyXG4gICAgICAgICAgICAgICAgICBlZGl0YWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgZm9ybXM6IHNcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgcmV0dXJuIHsgLi4uc3ViLCBlZGl0YWJsZTogdHJ1ZSB9O1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgLi4uY2F0LFxyXG4gICAgICAgICAgICBlZGl0YWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgZm9ybXM6IGZcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHsgLi4uY2F0LCBlZGl0YWJsZTogdHJ1ZSB9XHJcbiAgICAgIH0pIDogbnVsbDtcclxuICAgIHJldHVybiBlZGl0YWJsZUZvcm1CbG9jayA/IHsgLi4ubm90RWRpdGFibGVCbG9jaywgZWRpdGFibGU6IHRydWUsIGZvcm1zOiBlZGl0YWJsZUZvcm1CbG9jayB9IDogbm90RWRpdGFibGVCbG9jaztcclxuICB9XHJcblxyXG4gIG9uS2V5VXBDaGlwKGV2ZW50LCBmaWVsZCkge1xyXG4gICAgdGhpcy5jYW5FeGl0ID0gZmFsc2U7XHJcbiAgICBpZiAoZXZlbnQua2V5ID09PSBcIjtcIikge1xyXG4gICAgICBjb25zdCBleGlzdCA9IGZpZWxkLmRlZmF1bHRWYWx1ZS5maW5kKChvcHQpID0+IG9wdC52YWx1ZS50b0xvY2FsZUxvd2VyQ2FzZSgpID09PSBldmVudC50YXJnZXQudmFsdWUuc3BsaXQoXCI7XCIpWzBdLnRvTG9jYWxlTG93ZXJDYXNlKCkpO1xyXG4gICAgICBpZiAoIWV4aXN0KSB7XHJcbiAgICAgICAgZmllbGQuZGVmYXVsdFZhbHVlLnB1c2goe1xyXG4gICAgICAgICAgdmFsdWU6IGV2ZW50LnRhcmdldC52YWx1ZS5zcGxpdChcIjtcIilbMF0uc2xpY2UoMCwgMjApLFxyXG4gICAgICAgICAgY2hlY2tlZDogZmFsc2VcclxuICAgICAgICB9KTtcclxuICAgICAgICBldmVudC50YXJnZXQudmFsdWUgPSBcIlwiO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGV2ZW50LnRhcmdldC52YWx1ZSA9IFwiXCI7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIHRoaXMuZ2V0Q29uZGl0aW9uVmFsdWVzKClcclxuICB9XHJcblxyXG4gIG9uRWRpdENoaXAoY2hpcCkge1xyXG4gICAgaWYgKGNoaXAudmFsdWUgPT09IHRoaXMuY3VycmVudENoaXApIHtcclxuICAgICAgdGhpcy5jdXJyZW50Q2hpcCA9IFwiXCJcclxuICAgICAgdGhpcy5wcmV2VmFsdWUgPSBcIlwiXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmN1cnJlbnRDaGlwID0gY2hpcC52YWx1ZTtcclxuICAgICAgdGhpcy5wcmV2VmFsdWUgPSBjaGlwLnZhbHVlXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhZGRLZXl3b3JkRnJvbUlucHV0QmxvY2soZXZlbnQ6IE1hdENoaXBJbnB1dEV2ZW50LCBmaWVsZCwgcHJldikge1xyXG4gICAgdGhpcy5jYW5FeGl0ID0gZmFsc2U7XHJcbiAgICBjb25zdCBpbnB1dCA9IGV2ZW50LmlucHV0O1xyXG4gICAgY29uc3QgdmFsdWUgPSBldmVudC52YWx1ZTtcclxuICAgIGlmICh2YWx1ZSkge1xyXG4gICAgICBjb25zdCBwcmV2SW5kZXggPSBmaWVsZC5kZWZhdWx0VmFsdWU/LmZpbmRJbmRleCgob3B0KSA9PiBvcHQudmFsdWUudG9Mb2NhbGVMb3dlckNhc2UoKSA9PT0gcHJldi50b0xvY2FsZUxvd2VyQ2FzZSgpKTtcclxuICAgICAgaWYgKHByZXZJbmRleCAhPT0gLTEpIHtcclxuICAgICAgICBmaWVsZC5kZWZhdWx0VmFsdWVbcHJldkluZGV4XS52YWx1ZSA9IHZhbHVlLnRyaW0oKTtcclxuICAgICAgICBpbnB1dC52YWx1ZSA9IFwiXCI7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc3QgZXhpc3QgPSBmaWVsZC5kZWZhdWx0VmFsdWUuZmluZCgob3B0KSA9PiBvcHQudmFsdWUudG9Mb2NhbGVMb3dlckNhc2UoKSA9PT0gZXZlbnQudmFsdWUudG9Mb2NhbGVMb3dlckNhc2UoKSk7XHJcbiAgICAgICAgaWYgKCFleGlzdCkge1xyXG4gICAgICAgICAgZmllbGQuZGVmYXVsdFZhbHVlLnB1c2goeyB2YWx1ZTogdmFsdWUudHJpbSgpLnNsaWNlKDAsIDE1KSwgY2hlY2tlZDogZmFsc2UgfSk7XHJcbiAgICAgICAgICBpbnB1dC52YWx1ZSA9IFwiXCI7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGlucHV0LnZhbHVlID0gXCJcIjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICB9XHJcbiAgICAvLyB0aGlzLmdldENvbmRpdGlvblZhbHVlcygpXHJcbiAgfVxyXG5cclxuICBvbkNoZWNrZWRDaGlwQmxvY2soZXZlbnQ6IGFueSwgZmllbGQpIHtcclxuICAgIHRoaXMuY2FuRXhpdCA9IGZhbHNlO1xyXG4gICAgY29uc3QgaW5kZXggPSBmaWVsZC5kZWZhdWx0VmFsdWUuZmluZEluZGV4KChjaGlwKSA9PiBjaGlwLnZhbHVlID09PSBldmVudC52YWx1ZSlcclxuICAgIGlmIChpbmRleCAhPT0gLTEgJiYgZmllbGQudHlwZSA9PT0gJ2NoZWNrYm94X211bHRpcGxlJykge1xyXG4gICAgICBmaWVsZC5kZWZhdWx0VmFsdWVbaW5kZXhdLmNoZWNrZWQgPSAhZXZlbnQuY2hlY2tlZFxyXG4gICAgfSBlbHNlIGlmIChpbmRleCAhPT0gLTEpIHtcclxuICAgICAgZmllbGQuZGVmYXVsdFZhbHVlLmZvckVhY2goKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgdmFsdWUuY2hlY2tlZCA9IGZhbHNlO1xyXG4gICAgICB9KVxyXG4gICAgICBmaWVsZC5kZWZhdWx0VmFsdWVbaW5kZXhdLmNoZWNrZWQgPSAhZXZlbnQuY2hlY2tlZFxyXG4gICAgfVxyXG4gICAgLy8gdGhpcy5nZXRDb25kaXRpb25WYWx1ZXMoKVxyXG4gIH1cclxuXHJcbiAgcmVtb3ZlS2V5d29yZEJsb2NrKGtleXdvcmQ6IGFueSwgZmllbGQpIHtcclxuICAgIHRoaXMuY2FuRXhpdCA9IGZhbHNlO1xyXG4gICAgZmllbGQuZGVmYXVsdFZhbHVlID0gZmllbGQuZGVmYXVsdFZhbHVlLmZpbHRlcigob3B0aW9uKSA9PiBvcHRpb24udmFsdWUgIT09IGtleXdvcmQudmFsdWUpO1xyXG4gICAgLy8gdGhpcy5nZXRDb25kaXRpb25WYWx1ZXMoKVxyXG4gIH1cclxuXHJcbiAgb25DaGFuZ2VUeXBlQmxvY2soZmllbGQpIHtcclxuICAgIHRoaXMuY2FuRXhpdCA9IGZhbHNlO1xyXG4gICAgaWYgKGZpZWxkLnR5cGUgPT09IFwic2VsZWN0XCIgfHwgZmllbGQudHlwZSA9PT0gXCJyYWRpb1wiIHx8IGZpZWxkLnR5cGUgPT09IFwiY2hlY2tib3hfbXVsdGlwbGVcIikge1xyXG4gICAgICBmaWVsZC5kZWZhdWx0VmFsdWUgPSBbXTtcclxuICAgIH0gZWxzZSBpZiAoZmllbGQudHlwZSA9PT0gXCJjaGVja2JveFwiIHx8IGZpZWxkLnR5cGUgPT09IFwidG9nZ2xlXCIpIHtcclxuICAgICAgZmllbGQuZGVmYXVsdFZhbHVlID0gdHJ1ZTtcclxuICAgICAgZmllbGQudmFsdWUgPSBmYWxzZTtcclxuICAgIH0gZWxzZSBpZiAoZmllbGQudHlwZSA9PT0gJ25vbmUnKSB7XHJcbiAgICAgIGZpZWxkLmRlZmF1bHRWYWx1ZSA9IFwiXCI7XHJcbiAgICAgIGZpZWxkLnZhbHVlID0gXCJcIjtcclxuICAgICAgZmllbGQubGFiZWwgPSBcIkF1Y3VuXCI7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBmaWVsZC5kZWZhdWx0VmFsdWUgPSBcIlwiO1xyXG4gICAgICBmaWVsZC52YWx1ZSA9IFwiXCI7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvbkFkZE5ld1N1YkxldmVsRmllbGRCbG9jayhldmVudCkge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIHRoaXMuY2FuRXhpdCA9IGZhbHNlO1xyXG4gICAgY29uc3QgbGVuZ3RoID0gdGhpcy5wYXJhbXNJbmRleC5sZW5ndGg7XHJcbiAgICBjb25zdCBmb3JtcyA9IGxlbmd0aCA9PT0gMSA/IHRoaXMuY2F0ZWdvcmllc1t0aGlzLnBhcmFtc0luZGV4WzBdXSA6IGxlbmd0aCA9PT0gMiA/IHRoaXMuY2F0ZWdvcmllc1t0aGlzLnBhcmFtc0luZGV4WzBdXS5mb3Jtc1t0aGlzLnBhcmFtc0luZGV4W2xlbmd0aCAtIDFdXSA6IGxlbmd0aCA9PT0gMyA/IHRoaXMuY2F0ZWdvcmllc1t0aGlzLnBhcmFtc0luZGV4WzBdXS5mb3Jtc1t0aGlzLnBhcmFtc0luZGV4WzFdXS5mb3Jtc1t0aGlzLnBhcmFtc0luZGV4W2xlbmd0aCAtIDFdXSA6IHRoaXMuY2F0ZWdvcmllc1t0aGlzLnBhcmFtc0luZGV4WzBdXS5mb3Jtc1t0aGlzLnBhcmFtc0luZGV4WzFdXS5mb3Jtc1t0aGlzLnBhcmFtc0luZGV4WzJdXS5mb3Jtc1t0aGlzLnBhcmFtc0luZGV4W2xlbmd0aCAtIDFdXTtcclxuICAgIGZvcm1zLmV4cGFuZE1vcmUgPSB0cnVlO1xyXG4gICAgZm9ybXMuZm9ybXMgPSBmb3Jtcy5mb3JtcyB8fCBbXVxyXG4gICAgY29uc3QgZGF0YSA9IHtcclxuICAgICAgbGFiZWw6IFwiTm91dmVsbGUgc291cyBjYXTDqWdvcmllIMOgIHJlbm9tbWVyXCIsXHJcbiAgICAgIGtleTogXCJOb3V2ZWxsZXNvdXNjYXTDqWdvcmllw6ByZW5vbW1lclwiLFxyXG4gICAgICBleHBhbmRPbmJvYXJkaW5nOiB0cnVlLFxyXG4gICAgICBkZWZhdWx0VmFsdWU6IG51bGwsXHJcbiAgICAgIHZhbHVlOiB0cnVlLFxyXG4gICAgICBzaXplOiA4MCxcclxuICAgICAgaXNNYW5kYXRvcnk6IGZhbHNlLFxyXG4gICAgICBvdGhlclZhbHVlOiAnJyxcclxuICAgICAgdHlwZTogXCJ0ZXh0XCIsXHJcbiAgICAgIGVkaXRhYmxlOiB0cnVlLFxyXG4gICAgICBpc0NvbmRpdGlvbmFsOiBmYWxzZSxcclxuICAgICAgY29uZGl0aW9uVmFsdWU6IFwiXCIsXHJcbiAgICAgIGNvbmRpdGlvbjoge30sXHJcbiAgICAgIGRlbGV0ZWFibGU6IHRydWUsXHJcbiAgICAgIHN1YkxldmVsOiAxLFxyXG4gICAgICBleHBhbmRNb3JlOiBmYWxzZSxcclxuICAgIH1cclxuICAgIGZvcm1zLmZvcm1zLnB1c2goZGF0YVxyXG4gICAgKVxyXG4gICAgdGhpcy5vbkhpc3Rvcmljcyh7XHJcbiAgICAgIGZvcm06IGRhdGEsXHJcbiAgICAgIG1ldGhvZDogJ3B1c2gnLFxyXG4gICAgICBsb2NhdGlvbjogJ2Zvcm1zJyxcclxuICAgICAgcGFyYW1zOiB0aGlzLnBhcmFtc0luZGV4XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcblxyXG4gIG9uT3BlblR5cGVEaWFsb2coZmllbGQpIHtcclxuICAgIGNvbnN0IGRpYWxvZ1JlZiA9IHRoaXMuZGlhbG9nLm9wZW4oVHlwZUNvbXBvbmVudCwge1xyXG4gICAgICBkYXRhOiB7IHNlbGVjdGVkVHlwZTogZmllbGQudHlwZSB9XHJcbiAgICB9KTtcclxuICAgIGRpYWxvZ1JlZi5hZnRlckNsb3NlZCgpLnN1YnNjcmliZSgodHlwZTogYW55KSA9PiB7XHJcbiAgICAgIGlmICh0eXBlKSB7XHJcbiAgICAgICAgZmllbGQudHlwZSA9IHR5cGU7XHJcbiAgICAgICAgdGhpcy5vbkNoYW5nZVR5cGVCbG9jayhmaWVsZClcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBmaWVsZFdpZHRoKHR5cGU6IHN0cmluZywgbGVuZ3RoOiBudW1iZXIsIGluZGV4OiBudW1iZXIpIHtcclxuICAgIGlmICh0eXBlID09PSAndG9nZ2xlJykge1xyXG4gICAgICByZXR1cm4gJzUwJSdcclxuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gXCJ0ZXh0XCIgfHwgdHlwZSA9PT0gXCJkYXRlXCIgfHwgdHlwZSA9PT0gXCJub25lXCIgfHwgdHlwZSA9PSAnc2VsZWN0JyB8fCB0eXBlID09PSAndGVsJyB8fCB0eXBlID09PSAnZW1haWwnIHx8IHR5cGUgPT09ICdwYXNzd29yZCcgfHwgdHlwZSA9PT0gJ3RleHRhcmVhJykge1xyXG4gICAgICBpZiAobGVuZ3RoIDwgMykge1xyXG4gICAgICAgIHJldHVybiAnNTAlJ1xyXG4gICAgICB9IGVsc2UgaWYgKGxlbmd0aCA9PT0gMykge1xyXG4gICAgICAgIHJldHVybiAnMzMlJ1xyXG4gICAgICB9IGVsc2UgaWYgKGxlbmd0aCA9PT0gNCkge1xyXG4gICAgICAgIHJldHVybiAnNTAlJ1xyXG4gICAgICB9IGVsc2UgaWYgKGxlbmd0aCA9PT0gNSkge1xyXG4gICAgICAgIHJldHVybiBpbmRleCA8PSAyID8gJzMzJScgOiAnNTAlJ1xyXG4gICAgICB9IGVsc2UgaWYgKGxlbmd0aCA+PSA2KSB7XHJcbiAgICAgICAgcmV0dXJuICczMyUnXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiAnMTAwJSdcclxuICB9XHJcblxyXG4gIG9uQ2FuY2VsKGxlZnQ6IGJvb2xlYW4pIHtcclxuICAgIGlmIChsZWZ0KSB7XHJcbiAgICAgIGNvbnN0IGN1cnJlbnQgPSB0aGlzLmN1cnJlbnRDYW5jZWxlZEluZGV4ID09PSBudWxsID8gdGhpcy5oaXN0b3JpY3MubGVuZ3RoIC0gMSA6IHRoaXMuY3VycmVudENhbmNlbGVkSW5kZXhcclxuICAgICAgaWYgKHRoaXMuaGlzdG9yaWNzLmxlbmd0aCA+IDAgJiYgY3VycmVudCA+PSAwKSB7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50Q2FuY2VsZWRJbmRleCA9IGN1cnJlbnQgLSAxO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwi8J+agCB+IGZpbGU6IHRlbXBsYXRlLXByb2ZpbGUtY3JlYXRlLmNvbXBvbmVudC50cyB+IGxpbmUgMTkwMiB+IFRlbXBsYXRlUHJvZmlsZUNyZWF0ZUNvbXBvbmVudCB+IG9uQ2FuY2VsIH4gdGhpcy5jdXJyZW50Q2FuY2VsZWRJbmRleFwiLCB0aGlzLmN1cnJlbnRDYW5jZWxlZEluZGV4KVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuY3VycmVudENhbmNlbGVkSW5kZXgpO1xyXG4gICAgICAgIGNvbnN0IGxhc3RBY3Rpb24gPSB0aGlzLmhpc3Rvcmljc1tjdXJyZW50XVxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdsYXN0QWN0aW9uIGxlZnQnLCBsYXN0QWN0aW9uKTtcclxuICAgICAgICBjb25zdCBwYXJhbXMgPSBsYXN0QWN0aW9uLnBhcmFtcztcclxuICAgICAgICBjb25zdCBsZW5ndGggPSBwYXJhbXMubGVuZ3RoO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdsZW5ndGgnLCBsZW5ndGgpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCd0aGlzLmNhdGVnb3JpZXMnLCB0aGlzLmNhdGVnb3JpZXMpO1xyXG4gICAgICAgIGNvbnN0IGZvcm1zID0gbGVuZ3RoID09PSAxID8gdGhpcy5jYXRlZ29yaWVzIDogbGVuZ3RoID09PSAyID8gdGhpcy5jYXRlZ29yaWVzW3BhcmFtc1swXV0uZm9ybXNbcGFyYW1zWzFdXS5mb3JtcyA6IHRoaXMuY2F0ZWdvcmllc1twYXJhbXNbMF1dLmZvcm1zW3BhcmFtc1sxXV0uZm9ybXNbcGFyYW1zWzJdXS5mb3JtcztcclxuICAgICAgICBpZiAobGFzdEFjdGlvbi5tZXRob2QgPT09IFwic3BsaWNlXCIpIHtcclxuICAgICAgICAgIGlmIChsZW5ndGggPT09IDEgJiYgbGFzdEFjdGlvbi5sb2NhdGlvbiA9PT0gJ2NhdGVnb3J5Jykge1xyXG4gICAgICAgICAgICBmb3Jtcy5wdXNoKGxhc3RBY3Rpb24uZm9ybSlcclxuICAgICAgICAgIH0gZWxzZSBpZiAobGVuZ3RoID09PSAxICYmIGxhc3RBY3Rpb24ubG9jYXRpb24gPT09ICdmb3JtcycpIHtcclxuICAgICAgICAgICAgZm9ybXNbcGFyYW1zWzBdXS5mb3Jtcy5wdXNoKGxhc3RBY3Rpb24uZm9ybSlcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGZvcm1zLnB1c2gobGFzdEFjdGlvbi5mb3JtKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKGxhc3RBY3Rpb24ubG9jYXRpb24gPT09ICdjYXRlZ29yeScpIHtcclxuICAgICAgICAgICAgdGhpcy5vbkFjdGl2ZU1lbnUoZm9ybXNbZm9ybXMubGVuZ3RoIC0gMV0sIGZvcm1zLmxlbmd0aCAtIDEpO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5vbkVkaXRCbG9jayhmb3Jtc1tmb3Jtcy5sZW5ndGggLSAxXSwgbGFzdEFjdGlvbi5wYXJhbXMpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGlmIChsZW5ndGggPT09IDEgJiYgbGFzdEFjdGlvbi5sb2NhdGlvbiA9PT0gJ2NhdGVnb3J5Jykge1xyXG4gICAgICAgICAgICBmb3Jtcy5zcGxpY2UocGFyYW1zW2xlbmd0aCAtIDFdLCAxKVxyXG4gICAgICAgICAgfSBlbHNlIGlmIChsZW5ndGggPT09IDEgJiYgbGFzdEFjdGlvbi5sb2NhdGlvbiA9PT0gJ2Zvcm1zJykge1xyXG4gICAgICAgICAgICBmb3Jtc1twYXJhbXNbMF1dLmZvcm1zLnNwbGljZShwYXJhbXNbbGVuZ3RoIC0gMV0sIDEpXHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBmb3Jtcy5zcGxpY2UocGFyYW1zW2xlbmd0aCAtIDFdLCAxKVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIHRoaXMuY3VycmVudEVkaXRCbG9jayA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZiAodGhpcy5jdXJyZW50Q2FuY2VsZWRJbmRleCAhPT0gbnVsbCAmJiB0aGlzLmhpc3Rvcmljcy5sZW5ndGggPiB0aGlzLmN1cnJlbnRDYW5jZWxlZEluZGV4KSB7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50Q2FuY2VsZWRJbmRleCArPSAxO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwi8J+agCB+IGZpbGU6IHRlbXBsYXRlLXByb2ZpbGUtY3JlYXRlLmNvbXBvbmVudC50cyB+IGxpbmUgMTkyMCB+IFRlbXBsYXRlUHJvZmlsZUNyZWF0ZUNvbXBvbmVudCB+IG9uQ2FuY2VsIH4gdGhpcy5jdXJyZW50Q2FuY2VsZWRJbmRleFwiLCB0aGlzLmN1cnJlbnRDYW5jZWxlZEluZGV4KVxyXG4gICAgICAgIGNvbnN0IGxhc3RBY3Rpb24gPSB0aGlzLmhpc3Rvcmljc1t0aGlzLmN1cnJlbnRDYW5jZWxlZEluZGV4XVxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdsYXN0QWN0aW9uIHJpZ2h0JywgbGFzdEFjdGlvbik7XHJcbiAgICAgICAgY29uc3QgcGFyYW1zID0gbGFzdEFjdGlvbi5wYXJhbXM7XHJcbiAgICAgICAgY29uc3QgbGVuZ3RoID0gcGFyYW1zLmxlbmd0aDtcclxuICAgICAgICBjb25zb2xlLmxvZygnbGVuZ3RoJywgbGVuZ3RoKTtcclxuICAgICAgICBjb25zdCBmb3JtcyA9IGxlbmd0aCA9PT0gMSA/IHRoaXMuY2F0ZWdvcmllcyA6IGxlbmd0aCA9PT0gMiA/IHRoaXMuY2F0ZWdvcmllc1twYXJhbXNbMF1dLmZvcm1zW3BhcmFtc1sxXV0uZm9ybXMgOiB0aGlzLmNhdGVnb3JpZXNbcGFyYW1zWzBdXS5mb3Jtc1twYXJhbXNbMV1dLmZvcm1zW3BhcmFtc1syXV0uZm9ybXM7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdmb3JtcycsIGZvcm1zKTtcclxuICAgICAgICBpZiAobGFzdEFjdGlvbi5tZXRob2QgPT09IFwicHVzaFwiKSB7XHJcbiAgICAgICAgICBpZiAobGVuZ3RoID09PSAxICYmIGxhc3RBY3Rpb24ubG9jYXRpb24gPT09ICdjYXRlZ29yeScpIHtcclxuICAgICAgICAgICAgZm9ybXMucHVzaChsYXN0QWN0aW9uLmZvcm0pXHJcbiAgICAgICAgICB9IGVsc2UgaWYgKGxlbmd0aCA9PT0gMSAmJiBsYXN0QWN0aW9uLmxvY2F0aW9uID09PSAnZm9ybXMnKSB7XHJcbiAgICAgICAgICAgIGZvcm1zW3BhcmFtc1swXV0uZm9ybXMucHVzaChsYXN0QWN0aW9uLmZvcm0pXHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBmb3Jtcy5wdXNoKGxhc3RBY3Rpb24uZm9ybSlcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmIChsYXN0QWN0aW9uLmxvY2F0aW9uID09PSAnY2F0ZWdvcnknKSB7XHJcbiAgICAgICAgICAgIHRoaXMub25BY3RpdmVNZW51KGZvcm1zW2Zvcm1zLmxlbmd0aCAtIDFdLCBmb3Jtcy5sZW5ndGggLSAxKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMub25FZGl0QmxvY2soZm9ybXNbZm9ybXMubGVuZ3RoIC0gMV0sIGxhc3RBY3Rpb24ucGFyYW1zKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBpZiAobGVuZ3RoID09PSAxICYmIGxhc3RBY3Rpb24ubG9jYXRpb24gPT09ICdjYXRlZ29yeScpIHtcclxuICAgICAgICAgICAgZm9ybXMuc3BsaWNlKHBhcmFtc1tsZW5ndGggLSAxXSwgMSlcclxuICAgICAgICAgIH0gZWxzZSBpZiAobGVuZ3RoID09PSAxICYmIGxhc3RBY3Rpb24ubG9jYXRpb24gPT09ICdmb3JtcycpIHtcclxuICAgICAgICAgICAgZm9ybXNbcGFyYW1zWzBdXS5mb3Jtcy5zcGxpY2UocGFyYW1zW2xlbmd0aCAtIDFdLCAxKVxyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZm9ybXMuc3BsaWNlKHBhcmFtc1tsZW5ndGggLSAxXSwgMSlcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHRoaXMuY3VycmVudEVkaXRCbG9jayA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvbkNoZWNrVmFsdWUoZXZlbnQ6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuaW52YWxpZGVWYWx1ZSA9IGV2ZW50O1xyXG4gIH1cclxuXHJcbiAgb25IaXN0b3JpY3MoZGF0YSkge1xyXG4gICAgaWYgKHRoaXMuY3VycmVudENhbmNlbGVkSW5kZXggIT09IG51bGwpIHtcclxuICAgICAgdGhpcy5oaXN0b3JpY3MgPSBbXTtcclxuICAgICAgdGhpcy5jdXJyZW50Q2FuY2VsZWRJbmRleCA9IG51bGw7XHJcbiAgICB9XHJcbiAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuXHJcbiAgICB0aGlzLmhpc3Rvcmljcy5wdXNoKGRhdGEpXHJcbiAgfVxyXG59XHJcblxyXG5cclxuIiwiPG1haW4+XHJcbiAgPGZvcm0gW2Zvcm1Hcm91cF09XCJmb3JtXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY2F0ZWdvcnlcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cInNpZGUtYmFyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInN1bW1hcnlcIj5cclxuICAgICAgICAgIDxoMz5cclxuICAgICAgICAgICAgPHNwYW4+e3sgdGhpcy5mb3JtLmdldChcIk5hbWVcIikudmFsdWUgfX08L3NwYW4+XHJcbiAgICAgICAgICAgIDxtYXQtaWNvbiAoY2xpY2spPVwib3BlbkRpYWxvZygpXCI+ZWRpdDwvbWF0LWljb24+XHJcbiAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgPG9sPlxyXG4gICAgICAgICAgICA8bGkgY2xhc3M9XCJsaS10aXRsZVwiIFtjbGFzc109XCJlZGl0SW5kZXggPT09IGkgPyAnYWN0aXZlJyA6ICcnXCIgKm5nRm9yPVwibGV0IGNhdCBvZiBjYXRlZ29yaWVzOyBsZXQgaSA9IGluZGV4XCJcclxuICAgICAgICAgICAgICAoY2xpY2spPVwib25BY3RpdmVNZW51KGNhdCwgaSlcIj5cclxuICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIFtuZ3hTY3JvbGxUb109XCInIycgKyBjYXQubmFtZVwiPnt7IGNhdC5uYW1lIH19PC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDwvb2w+XHJcbiAgICAgICAgICA8YnV0dG9uIG1hdC1idXR0b24gY2xhc3M9XCJyZWdpc3Rlci1idXR0b25cIiB0eXBlPVwic3VibWl0XCIgKGNsaWNrKT1cIm9uU3VibWl0KGZhbHNlKVwiPnt7ZHJhZnRMYWJlbH19PC9idXR0b24+XHJcbiAgICAgICAgICA8YnV0dG9uIG1hdC1idXR0b24gY2xhc3M9XCJyZWdpc3Rlci1idXR0b24gbGl2ZS1idXR0b25cIiB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgKGNsaWNrKT1cIm9uU3VibWl0KHRydWUpXCI+e3tsaXZlTGFiZWx9fTwvYnV0dG9uPlxyXG4gICAgICAgICAgPGRpdiBzdHlsZT1cImRpc3BsYXk6IGZsZXg7bWFyZ2luLXJpZ2h0OiAxNHB4O1wiPlxyXG4gICAgICAgICAgICA8YnV0dG9uIFtkaXNhYmxlZF09XCJjdXJyZW50Q2FuY2VsZWRJbmRleCA8IDAgfHwgaGlzdG9yaWNzLmxlbmd0aD09PTBcIiBtYXQtYnV0dG9uIHN0eWxlPVwibWFyZ2luLXRvcDogMTBweDtcIlxyXG4gICAgICAgICAgICAgIGNsYXNzPVwicmVnaXN0ZXItYnV0dG9uIGxpdmUtYnV0dG9uXCIgdHlwZT1cInN1Ym1pdFwiIChjbGljayk9XCJvbkNhbmNlbCh0cnVlKVwiPlxyXG4gICAgICAgICAgICAgIDxtYXQtaWNvbj5yb3RhdGVfbGVmdDwvbWF0LWljb24+XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uIFtkaXNhYmxlZF09XCJjdXJyZW50Q2FuY2VsZWRJbmRleD09PWhpc3Rvcmljcy5sZW5ndGgtMSB8fCBjdXJyZW50Q2FuY2VsZWRJbmRleD09PW51bGxcIiBtYXQtYnV0dG9uXHJcbiAgICAgICAgICAgICAgc3R5bGU9XCJtYXJnaW4tdG9wOiAxMHB4O1wiIGNsYXNzPVwicmVnaXN0ZXItYnV0dG9uIGxpdmUtYnV0dG9uXCIgdHlwZT1cInN1Ym1pdFwiIChjbGljayk9XCJvbkNhbmNlbChmYWxzZSlcIj5cclxuICAgICAgICAgICAgICA8bWF0LWljb24+cm90YXRlX3JpZ2h0PC9tYXQtaWNvbj5cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZHNcIiBjZGtEcm9wTGlzdEdyb3VwPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZHMtaW5uZXIgZXhhbXBsZS1saXN0IG10LTEwXCIgaWQ9XCJjYXRlZ29yaWVzLWlkXCIgI3BhcmVudExpc3Q9XCJjZGtEcm9wTGlzdFwiIGNka0Ryb3BMaXN0XHJcbiAgICAgICAgICBbY2RrRHJvcExpc3REYXRhXT1cImNhdGVnb3JpZXNcIiAoY2RrRHJvcExpc3REcm9wcGVkKT1cImRyb3AoJGV2ZW50KVwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNhdGVnb3J5LWl0ZW0gc2VjdGlvbi1pdGVtXCIgKm5nRm9yPVwibGV0IGNhdGVnb3J5IG9mIGNhdGVnb3JpZXM7IGxldCBpID0gaW5kZXhcIiBjZGtEcmFnXHJcbiAgICAgICAgICAgIFtpZF09XCJjYXRlZ29yeS5uYW1lXCIgW3N0eWxlLnBhZGRpbmdCb3R0b21dPVwiY2F0ZWdvcnkuZXhwYW5kTW9yZSA/ICc1MHB4JyA6ICcxMHB4J1wiXHJcbiAgICAgICAgICAgIFtjbGFzc109XCJlZGl0SW5kZXggPT09IGkgPyAnYWN0aXZlJyA6ICcnXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsZWZ0LWFjdGlvbiBtb3ZlLWljb25zXCIgY2RrRHJhZ0hhbmRsZT5cclxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwidHJhbnNwYXJlbnQtYnV0dG9uXCIgbWF0LXJhaXNlZC1idXR0b24gKGNsaWNrKT1cIiRldmVudC5wcmV2ZW50RGVmYXVsdCgpXCI+XHJcbiAgICAgICAgICAgICAgICA8bWF0LWljb24gY2xhc3M9XCJkcmFnLWljb25cIj5kcmFnX2luZGljYXRvcjwvbWF0LWljb24+XHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmllbGQtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZC1pdGVtXCJcclxuICAgICAgICAgICAgICAgIChjbGljayk9XCJvbkFjdGl2ZU1lbnUoY2F0ZWdvcnksIGksICRldmVudCk7IG9uRXhwZW5kTW9yZSh7IGV2ZW50OiAkZXZlbnQsIGZpZWxkOiBjYXRlZ29yeSB9LCBpKVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJmdWxsLXdpZHRoIGlucHV0LWNhdGVnb3J5LW5hbWVcIj5cclxuICAgICAgICAgICAgICAgICAgICB7eyBjYXRlZ29yeS5uYW1lIH19XHJcbiAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJzdWItY2F0ZWdvcnktbmFtZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIExpc3RlcyBkZXMgaW5mb3JtYXRpb25zIG7DqWNlc3NhaXJlcyBwb3VyIGxhIGNyw6lhdGlvbiBkZSB7eyBjYXROYW1lU3RhcnQoY2F0ZWdvcnkubmFtZSkgPyBcImwnXCIgK1xyXG4gICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5Lm5hbWUgOiBjYXRlZ29yeS5uYW1lIH19XHJcbiAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBtYXQtbWluaS1mYWIgY29sb3I9XCJwcmltYXJ5XCIgY2xhc3M9XCJleHBhbmQtYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cIm9uRXhwZW5kTW9yZSh7IGV2ZW50OiAkZXZlbnQsIGZpZWxkOiBjYXRlZ29yeSB9LCBpKVwiPlxyXG4gICAgICAgICAgICAgICAgICA8bWF0LWljb24gKm5nSWY9XCIhY2F0ZWdvcnkuZXhwYW5kTW9yZVwiPmNoZXZyb25fcmlnaHQ8L21hdC1pY29uPlxyXG4gICAgICAgICAgICAgICAgICA8bWF0LWljb24gKm5nSWY9XCJjYXRlZ29yeS5leHBhbmRNb3JlXCI+ZXhwYW5kX21vcmU8L21hdC1pY29uPlxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiAjY2hpbGRMaXN0PVwiY2RrRHJvcExpc3RcIiBjbGFzcz1cImNoaWxkLWxpc3RcIiAqbmdJZj1cImNhdGVnb3J5LmZvcm1zXCIgW2Nka0Ryb3BMaXN0RGF0YV09XCJjYXRlZ29yeS5mb3Jtc1wiXHJcbiAgICAgICAgICAgICAgICBjZGtEcm9wTGlzdCAoY2RrRHJvcExpc3REcm9wcGVkKT1cImRyb3AoJGV2ZW50KVwiPlxyXG4gICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImNhdGVnb3J5LmV4cGFuZE1vcmVcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpZWxkLWJveFwiICpuZ0Zvcj1cImxldCBmaWVsZCBvZiBjYXRlZ29yeS5mb3JtczsgbGV0IGogPSBpbmRleFwiIFtpZF09XCJmaWVsZC5rZXlcIlxyXG4gICAgICAgICAgICAgICAgICAgIFtzdHlsZS53aWR0aF09XCJmaWVsZC5mb3JtcyAmJiBmaWVsZC5mb3Jtcy5sZW5ndGg+MCA/ICcxMDAlJyA6IGZpZWxkV2lkdGgoZmllbGQudHlwZSxjYXRlZ29yeS5mb3Jtcy5sZW5ndGgsailcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNka0RyYWc+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiIGZpZWxkcy1jb250ZW50XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgW2NsYXNzXT1cImZpZWxkLmZvcm1zICYmIGZpZWxkLmZvcm1zLmxlbmd0aD4wID8gJ3N1Yi1jYXRlZ29yeS1mb3JtcycgOicnXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJidXR0b24tYWN0aW9uXCIgKm5nSWY9XCJmaWVsZC5mb3Jtc1wiPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwidHJhbnNwYXJlbnQtYnV0dG9uXCIgbWF0LXJhaXNlZC1idXR0b24gKGNsaWNrKT1cIiRldmVudC5wcmV2ZW50RGVmYXVsdCgpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bWF0LWljb24gY2xhc3M9XCJkcmFnLWljb25cIj5kcmFnX2luZGljYXRvcjwvbWF0LWljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmllbGRzLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdWItaGVhZGVyXCIgKm5nSWY9XCJmaWVsZC5mb3Jtc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpZWxkLWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImZ1bGwtd2lkdGggaW5wdXQtY2F0ZWdvcnktbmFtZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgZmllbGQubGFiZWwgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJzdWItY2F0ZWdvcnktbmFtZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTGlzdGVzIGRlcyBpbmZvcm1hdGlvbnMgbsOpY2Vzc2FpcmVzIHBvdXIgbGEgY3LDqWF0aW9uIGRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBjYXROYW1lU3RhcnQoZmllbGQubGFiZWwpID8gXCJsJ1wiICsgZmllbGQubGFiZWwgOiBmaWVsZC5sYWJlbCB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJ0cmFuc3BhcmVudC1idXR0b24gc2V0dGluZ1wiIG1hdC1yYWlzZWQtYnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cIiRldmVudC5wcmV2ZW50RGVmYXVsdCgpO29uRWRpdEJsb2NrKGZpZWxkLCBpLCBqKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxtYXQtaWNvbiBjbGFzcz1cInNldHRpbmctaWNvblwiPnNldHRpbmdzPC9tYXQtaWNvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJleHBhbmQtYnV0dG9uXCIgW2Rpc2FibGVkXT1cIiEoZmllbGQuZm9ybXMgJiYgZmllbGQuZm9ybXMubGVuZ3RoID4gMClcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtzdHlsZS5vcGFjaXR5XT1cImZpZWxkLmZvcm1zICYmIGZpZWxkLmZvcm1zLmxlbmd0aCA+IDAgPyAxIDogMFwiIG1hdC1taW5pLWZhYlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiIChjbGljayk9XCJvbkV4cGVuZE1vcmUoeyBldmVudDogJGV2ZW50LCBmaWVsZDogZmllbGQgfSwgaSwgailcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bWF0LWljb24gKm5nSWY9XCIhZmllbGQuZXhwYW5kTW9yZVwiPmV4cGFuZF9sZXNzIDwvbWF0LWljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG1hdC1pY29uICpuZ0lmPVwiZmllbGQuZXhwYW5kTW9yZVwiPmV4cGFuZF9tb3JlIDwvbWF0LWljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpYi1zdWItY2F0ZWdvcnkgW2ZpZWxkXT1cImZpZWxkXCIgW2xlbmd0aF09XCJjYXRlZ29yeT8uZm9ybXM/Lmxlbmd0aFwiIFtpXT1cImlcIiBbal09XCJqXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtibGlua109XCJjaGVja0JsaW5rKGosMSk9PT1uZXdGaWVsZEluZGV4XCIgKG9uQ2hlY2tWYWx1ZSk9XCJvbkNoZWNrVmFsdWUoJGV2ZW50KVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAob25BZGRLZXl3b3JkRnJvbUlucHV0KT1cImFkZEtleXdvcmRGcm9tSW5wdXQoJGV2ZW50LmV2ZW50LCAkZXZlbnQucHJldiwgaSwgailcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKG9uS2V5UHJlc3MpPVwib25LZXlQcmVzcygkZXZlbnQuZXZlbnQsIGksIGopXCIgKG9uQWRkTmV3RmllbGQpPVwib25BZGROZXdGaWVsZChpKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAob25SZW1vdmVGaWVsZCk9XCJvblJlbW92ZUZpZWxkKGksIGopXCIgKG9uQ2hhbmdlVHlwZSk9XCJvbkNoYW5nZVR5cGUoZmllbGQudHlwZSwgaSwgailcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKG9uUmVtb3ZlS2V5d29yZCk9XCJyZW1vdmVLZXl3b3JkKCRldmVudC5ldmVudCwgaSwgailcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKG9uQWRkTmV3U3ViTGV2ZWxGaWVsZCk9XCJvbkFkZE5ld1N1YkxldmVsRmllbGQoaSwgailcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKG9uRXhwZW5kTW9yZSk9XCJvbkV4cGVuZE1vcmUoJGV2ZW50LCBpLCBqKVwiIChvbkNoYW5nZUxhYmVsKT1cIm9uQ2hhbmdlTGFiZWwoJGV2ZW50LCBpLCBqKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAob25DaGVja2VkQ2hpcCk9XCJvbkNoZWNrZWRDaGlwKCRldmVudCwgaSwgailcIiAob25Ecm9wKT1cImRyb3AoJGV2ZW50KVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAob25DaGVja2VkRGVmYXVsdCk9XCJvbkNoZWNrZWREZWZhdWx0KCRldmVudCwgaSwgailcIiAob25FZGl0QmxvY2spPVwib25FZGl0QmxvY2soZmllbGQsIGksIGopXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtjb25kaXRpb25EYXRhXT1cImNvbmRpdGlvbkRhdGFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgKm5nSWY9XCJmaWVsZC5leHBhbmRNb3JlXCIgY2xhc3M9XCJjaGlsZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2ICNjaGlsZExpc3Q9XCJjZGtEcm9wTGlzdFwiIGNsYXNzPVwiY2hpbGQtY29udGVudFwiICpuZ0lmPVwiZmllbGQuZm9ybXNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtjZGtEcm9wTGlzdERhdGFdPVwiZmllbGQuZm9ybXNcIiBjZGtEcm9wTGlzdCAoY2RrRHJvcExpc3REcm9wcGVkKT1cImRyb3AoJGV2ZW50KVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJcIiBzdHlsZT1cIm1hcmdpbi1ib3R0b206IDIwcHhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKm5nRm9yPVwibGV0IGNoaWxkIG9mIGZpZWxkLmZvcm1zOyBsZXQgayA9IGluZGV4XCIgW2lkXT1cImNoaWxkLmtleVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbc3R5bGUud2lkdGhdPVwiY2hpbGQuZm9ybXMgJiYgY2hpbGQuZm9ybXMubGVuZ3RoPjAgPyAnMTAwJScgOiBmaWVsZFdpZHRoKGNoaWxkLnR5cGUsZmllbGQuZm9ybXMubGVuZ3RoLGspXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNka0RyYWc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZHMtY29udGVudFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2NsYXNzXT1cImNoaWxkLmZvcm1zICYmIGNoaWxkLmZvcm1zLmxlbmd0aD4wID8gJ3N1Yi1jYXRlZ29yeS1mb3JtcycgOicnXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJ1dHRvbi1hY3Rpb24gY2hpbGQtMi1iYWNrZ3JvdW5kXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICpuZ0lmPVwiY2hpbGQuZm9ybXMgJiYgY2hpbGQuZm9ybXMubGVuZ3RoPjBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJ0cmFuc3BhcmVudC1idXR0b25cIiBtYXQtcmFpc2VkLWJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwiJGV2ZW50LnByZXZlbnREZWZhdWx0KClcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG1hdC1pY29uIGNsYXNzPVwiZHJhZy1pY29uXCI+IGRyYWdfaW5kaWNhdG9yPC9tYXQtaWNvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZHMtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3ViLWhlYWRlclwiICpuZ0lmPVwiY2hpbGQuZm9ybXMgJiYgY2hpbGQuZm9ybXMubGVuZ3RoPjBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpZWxkLWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwiZnVsbC13aWR0aCBpbnB1dC1jYXRlZ29yeS1uYW1lXCIgdHlwZT1cInRleHRcIiByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbcmVhZG9ubHldPVwiY2F0ZWdvcmllcy5sZW5ndGggPCA0IHx8ICFjYXRlZ29yeS5lZGl0YWJsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtyZWFkb25seV09XCIhY2F0ZWdvcnkuZWRpdGFibGVcIiBbKG5nTW9kZWwpXT1cImNoaWxkLmxhYmVsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW25nTW9kZWxPcHRpb25zXT1cInsgc3RhbmRhbG9uZTogdHJ1ZSB9XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTYWlzaXIgbGUgbm9tIGRlIGxhIHNvdXMgY2F0w6lnb3JpZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInN1Yi1jYXRlZ29yeS1uYW1lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIExpc3RlcyBkZXMgaW5mb3JtYXRpb25zIG7DqWNlc3NhaXJlcyBwb3VyIGxhIGNyw6lhdGlvbiBkZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBjYXROYW1lU3RhcnQoY2hpbGQubGFiZWwpID8gXCJsJ1wiICsgY2hpbGQubGFiZWwgOiBjaGlsZC5sYWJlbCB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJ0cmFuc3BhcmVudC1idXR0b24gc2V0dGluZ1wiIG1hdC1yYWlzZWQtYnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwiJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7b25FZGl0QmxvY2soY2hpbGQsIGksIGosIGspXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bWF0LWljb24gY2xhc3M9XCJzZXR0aW5nLWljb25cIj5zZXR0aW5nczwvbWF0LWljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImV4cGFuZC1idXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2Rpc2FibGVkXT1cIiEoY2hpbGQuZm9ybXMgJiYgY2hpbGQuZm9ybXMubGVuZ3RoID4gMClcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3N0eWxlLm9wYWNpdHldPVwiY2hpbGQuZm9ybXMgJiYgY2hpbGQuZm9ybXMubGVuZ3RoID4gMCA/IDEgOiAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hdC1taW5pLWZhYiBjb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cIm9uRXhwZW5kTW9yZSh7IGV2ZW50OiAkZXZlbnQsIGZpZWxkOiBjaGlsZCB9LCBpLCBqLCBrKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG1hdC1pY29uICpuZ0lmPVwiIWNoaWxkLmV4cGFuZE1vcmVcIj4gZXhwYW5kX2xlc3MgPC9tYXQtaWNvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxtYXQtaWNvbiAqbmdJZj1cImNoaWxkLmV4cGFuZE1vcmVcIj4gZXhwYW5kX21vcmUgPC9tYXQtaWNvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaWItc3ViLWNhdGVnb3J5IFtmaWVsZF09XCJjaGlsZFwiIFtsZW5ndGhdPVwiZmllbGQ/LmZvcm1zPy5sZW5ndGhcIiBbaV09XCJqXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2JsaW5rXT1cImNoZWNrQmxpbmsoaywyKT09PW5ld0ZpZWxkSW5kZXhcIiBbal09XCJrXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKG9uQ2hlY2tWYWx1ZSk9XCJvbkNoZWNrVmFsdWUoJGV2ZW50KVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChvbkFkZEtleXdvcmRGcm9tSW5wdXQpPVwiYWRkS2V5d29yZEZyb21JbnB1dCgkZXZlbnQuZXZlbnQsICRldmVudC5wcmV2LCBpLCBqLCBrKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChvbktleVByZXNzKT1cIm9uS2V5UHJlc3MoJGV2ZW50LmV2ZW50LCBpLCBqLCBrKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChvbkFkZE5ld0ZpZWxkKT1cIm9uQWRkTmV3RmllbGQoaSwgailcIiAob25SZW1vdmVGaWVsZCk9XCJvblJlbW92ZUZpZWxkKGksIGosIGspXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKG9uQ2hhbmdlVHlwZSk9XCJvbkNoYW5nZVR5cGUoY2hpbGQudHlwZSwgaSwgaiwgaylcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAob25SZW1vdmVLZXl3b3JkKT1cInJlbW92ZUtleXdvcmQoJGV2ZW50LmV2ZW50LCBpLCBqLCBrKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChvbkFkZE5ld1N1YkxldmVsRmllbGQpPVwib25BZGROZXdTdWJMZXZlbEZpZWxkKGksIGosIGspXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKG9uRXhwZW5kTW9yZSk9XCJvbkV4cGVuZE1vcmUoJGV2ZW50LCBpLCBqLCBrKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChvbkNoYW5nZUxhYmVsKT1cIm9uQ2hhbmdlTGFiZWwoJGV2ZW50LCBpLCBqLCBrKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChvbkNoZWNrZWRDaGlwKT1cIm9uQ2hlY2tlZENoaXAoJGV2ZW50LCBpLCBqLCBrKVwiIChvbkRyb3ApPVwiZHJvcCgkZXZlbnQpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKG9uQ2hlY2tlZERlZmF1bHQpPVwib25DaGVja2VkRGVmYXVsdCgkZXZlbnQsIGksIGosIGspXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2NvbmRpdGlvbkRhdGFdPVwiY29uZGl0aW9uRGF0YVwiIChvbkVkaXRCbG9jayk9XCJvbkVkaXRCbG9jayhjaGlsZCwgaSwgaiwgaylcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiAqbmdJZj1cImNoaWxkLmV4cGFuZE1vcmVcIiBjbGFzcz1cImNoaWxkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNoaWxkLWNvbnRlbnRcIiAjY2hpbGRMaXN0PVwiY2RrRHJvcExpc3RcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJjaGlsZC5mb3JtcyAmJiBjaGlsZC5mb3Jtcy5sZW5ndGg+MFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbY2RrRHJvcExpc3REYXRhXT1cImNoaWxkLmZvcm1zXCIgY2RrRHJvcExpc3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjZGtEcm9wTGlzdERyb3BwZWQpPVwiZHJvcCgkZXZlbnQpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiXCIgKm5nRm9yPVwibGV0IGMyIG9mIGNoaWxkLmZvcm1zOyBsZXQgbCA9IGluZGV4XCIgW2lkXT1cImMyLmtleVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtzdHlsZS53aWR0aF09XCJjMi5mb3JtcyAmJiBjMi5mb3Jtcy5sZW5ndGg+MCA/ICcxMDAlJyA6IGZpZWxkV2lkdGgoYzIudHlwZSxjaGlsZC5mb3Jtcy5sZW5ndGgsbClcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjZGtEcmFnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZHMtY29udGVudFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbY2xhc3NdPVwiYzIuZm9ybXMgJiYgYzIuZm9ybXMubGVuZ3RoPjAgPyAnc3ViLWNhdGVnb3J5LWZvcm1zJyA6JydcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJidXR0b24tYWN0aW9uIGNoaWxkLTMtYmFja2dyb3VuZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICpuZ0lmPVwiYzIuZm9ybXMgJiYgYzIuZm9ybXMubGVuZ3RoPjBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInRyYW5zcGFyZW50LWJ1dHRvblwiIG1hdC1yYWlzZWQtYnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cIiRldmVudC5wcmV2ZW50RGVmYXVsdCgpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG1hdC1pY29uIGNsYXNzPVwiZHJhZy1pY29uXCI+IGRyYWdfaW5kaWNhdG9yIDwvbWF0LWljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmllbGRzLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGliLXN1Yi1jYXRlZ29yeSBbZmllbGRdPVwiYzJcIiBbbGVuZ3RoXT1cImNoaWxkPy5mb3Jtcz8ubGVuZ3RoXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbYmxpbmtdPVwiY2hlY2tCbGluayhsLDMpPT09bmV3RmllbGRJbmRleFwiIFtpXT1cImtcIiBbal09XCJsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAob25DaGVja1ZhbHVlKT1cIm9uQ2hlY2tWYWx1ZSgkZXZlbnQpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAob25BZGRLZXl3b3JkRnJvbUlucHV0KT1cImFkZEtleXdvcmRGcm9tSW5wdXQoJGV2ZW50LmV2ZW50LCAkZXZlbnQucHJldiwgaSwgaiwgaywgbClcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChvbktleVByZXNzKT1cIm9uS2V5UHJlc3MoJGV2ZW50LmV2ZW50LCBpLCBqLCBrLCBsKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKG9uQWRkTmV3RmllbGQpPVwib25BZGROZXdGaWVsZChpLCBqLCBrKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKG9uUmVtb3ZlRmllbGQpPVwib25SZW1vdmVGaWVsZChpLCBqLCBrLCBsKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKG9uQ2hhbmdlVHlwZSk9XCJvbkNoYW5nZVR5cGUoYzIudHlwZSwgaSwgaiwgaywgbClcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChvblJlbW92ZUtleXdvcmQpPVwicmVtb3ZlS2V5d29yZCgkZXZlbnQuZXZlbnQsIGksIGosIGssIGwpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAob25BZGROZXdTdWJMZXZlbEZpZWxkKT1cIm9uQWRkTmV3U3ViTGV2ZWxGaWVsZChpLCBqLCBrLCBsKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKG9uRXhwZW5kTW9yZSk9XCJvbkV4cGVuZE1vcmUoJGV2ZW50LCBpLCBqLCBrLCBsKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKG9uQ2hhbmdlTGFiZWwpPVwib25DaGFuZ2VMYWJlbCgkZXZlbnQsIGksIGosIGssIGwpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAob25DaGVja2VkQ2hpcCk9XCJvbkNoZWNrZWRDaGlwKCRldmVudCwgaSwgaiwgaywgbClcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChvbkRyb3ApPVwiZHJvcCgkZXZlbnQpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAob25DaGVja2VkRGVmYXVsdCk9XCJvbkNoZWNrZWREZWZhdWx0KCRldmVudCwgaSwgaiwgaywgbClcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChvbkVkaXRCbG9jayk9XCJvbkVkaXRCbG9jayhjMiwgaSwgaiwgaywgbClcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtjb25kaXRpb25EYXRhXT1cImNvbmRpdGlvbkRhdGFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2hpbGRcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saWItc3ViLWNhdGVnb3J5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYWRkLWJ1dHRvbi1zdWItY2F0ZWdvcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICpuZ0lmPVwiY2hpbGQ/LmZvcm1zPy5sZW5ndGggLSAxID09PSBsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBzdHlsZT1cIm1hcmdpbjogMTBweCBhdXRvXCIgbWF0LXJhaXNlZC1idXR0b24gY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJvbkFkZE5ld0ZpZWxkKGksIGosIGspXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5Bam91dGVyIHVuIGNoYW1wPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG1hdC1pY29uPiBhZGQgPC9tYXQtaWNvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpYi1zdWItY2F0ZWdvcnk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYWRkLWJ1dHRvbi1zdWItY2F0ZWdvcnlcIiAqbmdJZj1cImZpZWxkPy5mb3Jtcz8ubGVuZ3RoIC0gMSA9PT0ga1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHN0eWxlPVwibWFyZ2luOiAxMHB4IGF1dG9cIiBtYXQtcmFpc2VkLWJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJvbkFkZE5ld0ZpZWxkKGksIGopXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+QWpvdXRlciB1biBjaGFtcDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bWF0LWljb24+YWRkPC9tYXQtaWNvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpYi1zdWItY2F0ZWdvcnk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFkZC1idXR0b24tY29udGFpbmVyIGFkZC1idXR0b24tc3ViLWNhdGVnb3J5XCIgKm5nSWY9XCJjYXRlZ29yeT8uZm9ybXM/Lmxlbmd0aCAtIDEgPT09IGpcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gc3R5bGU9XCJtYXJnaW46IDEwcHggYXV0bzsgcGFkZGluZzoxMHB4IDBcIiBjbGFzcz1cImFkZC1idXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbZGlzYWJsZWRdPVwiY2F0ZWdvcnk/LmZvcm1zPy5sZW5ndGggLSAxICE9PSBqXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgW3N0eWxlLm9wYWNpdHldPVwiY2F0ZWdvcnk/LmZvcm1zPy5sZW5ndGggLSAxID09PSBqID8gMSA6IDBcIiBtYXQtcmFpc2VkLWJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwib25BZGROZXdGaWVsZChpKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5Bam91dGVyIHVuIGNoYW1wPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bWF0LWljb24+YWRkPC9tYXQtaWNvbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImFkZC1idXR0b24tY29udGFpbmVyIGFkZC1jYXRlZ29yeS1idXR0b24gYWRkLXN0ZXBcIj5cclxuICAgICAgICAgICAgPGJ1dHRvbiAoY2xpY2spPVwib25BZGROZXdDYXRlZ29yeSgkZXZlbnQpXCI+XHJcbiAgICAgICAgICAgICAgQWpvdXRlciB1bmUgw6l0YXBlXHJcbiAgICAgICAgICAgICAgPG1hdC1pY29uPmFkZDwvbWF0LWljb24+XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGRpdiBjbGFzcz1cImZpZWxkLXByb3BlcnR5XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInByb3BlcnR5LWNvbnRlbnRcIiAqbmdJZj1cImlzQmxvY2sgJiYgY3VycmVudEVkaXRCbG9ja1wiPlxyXG4gICAgICAgICAgPGgzPlBhcmFtw6h0cmUgZHUgYmxvYyB7eyBjdXJyZW50RWRpdEJsb2NrLmxhYmVsIH19PC9oMz5cclxuICAgICAgICAgIDxkaXYgc3R5bGU9XCJ3aWR0aDogMTAwJTtcIj5cclxuICAgICAgICAgICAgPG1hdC1mb3JtLWZpZWxkIGNsYXNzPVwiZm9ybS1maWVsZCBtYXQtc2VsZWN0IGZ1bGwtd2lkdGhcIiBzdHlsZT1cImN1cnNvcjogcG9pbnRlclwiIGFwcGVhcmFuY2U9XCJvdXRsaW5lXCI+XHJcbiAgICAgICAgICAgICAgPG1hdC1sYWJlbD5UeXBlIGRlIGJsb2M8L21hdC1sYWJlbD5cclxuICAgICAgICAgICAgICA8bWF0LXNlbGVjdCAoY2xpY2spPVwib25PcGVuVHlwZURpYWxvZyhjdXJyZW50RWRpdEJsb2NrKVwiIGRpc2FibGVkPVwidHJ1ZVwiIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICBbKG5nTW9kZWwpXT1cImN1cnJlbnRFZGl0QmxvY2sudHlwZVwiIChuZ01vZGVsQ2hhbmdlKT1cIm9uQ2hhbmdlVHlwZUJsb2NrKGN1cnJlbnRFZGl0QmxvY2spXCJcclxuICAgICAgICAgICAgICAgIFtuZ01vZGVsT3B0aW9uc109XCJ7IHN0YW5kYWxvbmU6IHRydWUgfVwiIGNsYXNzPVwic2VsZWN0LXR5cGUtY2xhc3NcIj5cclxuICAgICAgICAgICAgICAgIDxtYXQtb3B0aW9uIHZhbHVlPVwidGV4dFwiPlRleHQoODApPC9tYXQtb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgPG1hdC1vcHRpb24gdmFsdWU9XCJ0ZXh0YXJlYVwiPlRleHQoODArKTwvbWF0LW9wdGlvbj5cclxuICAgICAgICAgICAgICAgIDxtYXQtb3B0aW9uIHZhbHVlPVwicmFkaW9cIj5SYWRpbzwvbWF0LW9wdGlvbj5cclxuICAgICAgICAgICAgICAgIDxtYXQtb3B0aW9uIHZhbHVlPVwic2VsZWN0XCI+U2VsZWN0ZXVyPC9tYXQtb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgPG1hdC1vcHRpb24gdmFsdWU9XCJ0b2dnbGVcIj5Ub2dnbGU8L21hdC1vcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8bWF0LW9wdGlvbiB2YWx1ZT1cImNoZWNrYm94XCI+Q2hlY2tib3g8L21hdC1vcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8bWF0LW9wdGlvbiB2YWx1ZT1cImNoZWNrYm94X211bHRpcGxlXCI+Q2hlY2tib3ggbXVsdGlwbGU8L21hdC1vcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8bWF0LW9wdGlvbiB2YWx1ZT1cImVtYWlsXCI+RW1haWw8L21hdC1vcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8bWF0LW9wdGlvbiB2YWx1ZT1cInBhc3N3b3JkXCI+UGFzc3dvcmQ8L21hdC1vcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8bWF0LW9wdGlvbiB2YWx1ZT1cImRhdGVcIj5EYXRlPC9tYXQtb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgPG1hdC1vcHRpb24gdmFsdWU9XCJ0ZWxcIj5QaG9uZTwvbWF0LW9wdGlvbj5cclxuICAgICAgICAgICAgICAgIDxtYXQtb3B0aW9uIHZhbHVlPVwibm9uZVwiPkF1Y3VuPC9tYXQtb3B0aW9uPlxyXG4gICAgICAgICAgICAgIDwvbWF0LXNlbGVjdD5cclxuICAgICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImN1cnJlbnRFZGl0QmxvY2sudHlwZSE9PSdub25lJ1wiPlxyXG4gICAgICAgICAgICAgIDxtYXQtZm9ybS1maWVsZCBjbGFzcz1cImZvcm0tZmllbGQgZnVsbC13aWR0aFwiIGFwcGVhcmFuY2U9XCJvdXRsaW5lXCI+XHJcbiAgICAgICAgICAgICAgICA8bWF0LWxhYmVsPk5vbSAvIExhYmVsPC9tYXQtbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBbKG5nTW9kZWwpXT1cImN1cnJlbnRFZGl0QmxvY2subGFiZWxcIiBbbmdNb2RlbE9wdGlvbnNdPVwieyBzdGFuZGFsb25lOiB0cnVlIH1cIiBtYXRJbnB1dFxyXG4gICAgICAgICAgICAgICAgICByZXF1aXJlZCBwbGFjZWhvbGRlcj1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgICAgICAgICAgICA8bmctY29udGFpbmVyIFtuZ1N3aXRjaF09XCJjdXJyZW50RWRpdEJsb2NrLnR5cGVcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgKm5nU3dpdGNoQ2FzZT1cIid0b2dnbGUnXCIgY2xhc3M9XCJmbGV4LWF1dG9cIlxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT1cImRpc3BsYXk6IGZsZXg7YWxpZ24taXRlbXM6IGZsZXgtZW5kO21hcmdpbjogMTBweCAwO1wiPlxyXG4gICAgICAgICAgICAgICAgICA8bWF0LXNsaWRlLXRvZ2dsZSBjbGFzcz1cImZvcm0tZmllbGRcIiBjb2xvcj1cIiM2RkU4RDdcIiBbKG5nTW9kZWwpXT1cImN1cnJlbnRFZGl0QmxvY2suZGVmYXVsdFZhbHVlXCJcclxuICAgICAgICAgICAgICAgICAgICBbbmdNb2RlbE9wdGlvbnNdPVwieyBzdGFuZGFsb25lOiB0cnVlIH1cIj5cclxuICAgICAgICAgICAgICAgICAgPC9tYXQtc2xpZGUtdG9nZ2xlPlxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT1cIm1hcmdpbi1sZWZ0OiAxMHB4O1wiPlZhbGV1ciBwYXIgZMOpZmF1dDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiAqbmdTd2l0Y2hDYXNlPVwiJ2NoZWNrYm94J1wiIGNsYXNzPVwiZmxleC1hdXRvXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxtYXQtY2hlY2tib3ggY2xhc3M9XCJmb3JtLWZpZWxkXCIgWyhuZ01vZGVsKV09XCJjdXJyZW50RWRpdEJsb2NrLnZhbHVlXCJcclxuICAgICAgICAgICAgICAgICAgICBbbmdNb2RlbE9wdGlvbnNdPVwieyBzdGFuZGFsb25lOiB0cnVlIH1cIj5cclxuICAgICAgICAgICAgICAgICAgICBDb2Now6kgcGFyIGTDqWZhdWx0XHJcbiAgICAgICAgICAgICAgICAgIDwvbWF0LWNoZWNrYm94PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8bWF0LWZvcm0tZmllbGQgKm5nU3dpdGNoQ2FzZT1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFsnc2VsZWN0JywgJ3JhZGlvJywgJ2NoZWNrYm94X211bHRpcGxlJ10uaW5jbHVkZXMoY3VycmVudEVkaXRCbG9jay50eXBlKSA/IGN1cnJlbnRFZGl0QmxvY2sudHlwZSA6ICFjdXJyZW50RWRpdEJsb2NrLnR5cGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgY2xhc3M9XCJmbGV4LWF1dG8gZnVsbC13aWR0aFwiIGFwcGVhcmFuY2U9XCJvdXRsaW5lXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxtYXQtbGFiZWw+IFZhbGV1ciBwYXIgZMOpZmF1bHQgPC9tYXQtbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgIDxtYXQtY2hpcC1saXN0ICNjaGlsZExpc3Q9XCJjZGtEcm9wTGlzdFwiIFtjZGtEcm9wTGlzdERhdGFdPVwiY3VycmVudEVkaXRCbG9jay5kZWZhdWx0VmFsdWVcIiBjZGtEcm9wTGlzdFxyXG4gICAgICAgICAgICAgICAgICAgIChjZGtEcm9wTGlzdERyb3BwZWQpPVwiZHJvcCgkZXZlbnQpXCIgI2NoaXBMaXN0IGFyaWEtbGFiZWw9XCJWaWRlbyBrZXl3b3JkczsgbGV0IGluZGV4PWluZGV4XCIgbXVsdGlwbGVcclxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RhYmxlPlxyXG4gICAgICAgICAgICAgICAgICAgIDxtYXQtY2hpcCBzdHlsZT1cIm1pbi1oZWlnaHQ6IDI1cHg7d2lkdGg6IGF1dG87XCIgKm5nRm9yPVwibGV0IG9wdGlvbiBvZiBjdXJyZW50RWRpdEJsb2NrLmRlZmF1bHRWYWx1ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBbc2VsZWN0ZWRdPVwib3B0aW9uLmNoZWNrZWRcIiBbdmFsdWVdPVwib3B0aW9uLnZhbHVlXCIgW3JlbW92YWJsZV09XCJ0cnVlXCJcclxuICAgICAgICAgICAgICAgICAgICAgIChkYmxjbGljayk9XCJvbkNoZWNrZWRDaGlwQmxvY2sob3B0aW9uLCBjdXJyZW50RWRpdEJsb2NrKVwiIChjbGljayk9XCJvbkVkaXRDaGlwKG9wdGlvbilcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgKHJlbW92ZWQpPVwicmVtb3ZlS2V5d29yZEJsb2NrKG9wdGlvbiwgY3VycmVudEVkaXRCbG9jaylcIiBjZGtEcmFnPlxyXG4gICAgICAgICAgICAgICAgICAgICAge3sgb3B0aW9uLnZhbHVlIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICA8bWF0LWljb24gbWF0Q2hpcFJlbW92ZT5jYW5jZWw8L21hdC1pY29uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbWF0LWNoaXA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0ICNjaGlwc0lucHV0IHBsYWNlaG9sZGVyPVwiYWRkLi4uXCIgW21hdENoaXBJbnB1dEZvcl09XCJjaGlwTGlzdFwiIFttYXRDaGlwSW5wdXRBZGRPbkJsdXJdPVwidHJ1ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAobWF0Q2hpcElucHV0VG9rZW5FbmQpPVwiYWRkS2V5d29yZEZyb21JbnB1dEJsb2NrKCRldmVudCwgY3VycmVudEVkaXRCbG9jaywgcHJldlZhbHVlKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBbbWF0Q2hpcElucHV0U2VwYXJhdG9yS2V5Q29kZXNdPVwic2VwYXJhdG9yS2V5c0NvZGVzXCJcclxuICAgICAgICAgICAgICAgICAgICAgIChrZXl1cCk9XCJvbktleVVwQ2hpcCgkZXZlbnQsIGN1cnJlbnRFZGl0QmxvY2spXCIgWyhuZ01vZGVsKV09XCJjdXJyZW50Q2hpcFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBbbmdNb2RlbE9wdGlvbnNdPVwieyBzdGFuZGFsb25lOiB0cnVlIH1cIiAvPlxyXG4gICAgICAgICAgICAgICAgICA8L21hdC1jaGlwLWxpc3Q+XHJcbiAgICAgICAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgICAgICAgPG1hdC1mb3JtLWZpZWxkICpuZ1N3aXRjaENhc2U9XCIndGV4dGFyZWEnXCIgY2xhc3M9XCJmb3JtLWZpZWxkIGZ1bGwtd2lkdGhcIiBhcHBlYXJhbmNlPVwib3V0bGluZVwiPlxyXG4gICAgICAgICAgICAgICAgICA8bWF0LWxhYmVsPlZhbGV1ciBwYXIgZMOpZmF1bHQ8L21hdC1sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbWF0SW5wdXQgW25nTW9kZWxPcHRpb25zXT1cInsgc3RhbmRhbG9uZTogdHJ1ZSB9XCJcclxuICAgICAgICAgICAgICAgICAgICBbKG5nTW9kZWwpXT1cImN1cnJlbnRFZGl0QmxvY2suZGVmYXVsdFZhbHVlXCIgcGxhY2Vob2xkZXI9XCJEZXNjcmlwdGlvbi4uLlwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG5cclxuICAgICAgICAgICAgICAgIDxtYXQtZm9ybS1maWVsZCAqbmdTd2l0Y2hEZWZhdWx0IGNsYXNzPVwiZm9ybS1maWVsZCBmdWxsLXdpZHRoXCJcclxuICAgICAgICAgICAgICAgICAgW3N0eWxlLm9wYWNpdHldPVwiY3VycmVudEVkaXRCbG9jay50eXBlICE9PSAndGVsJyA/IDEgOiAwXCIgYXBwZWFyYW5jZT1cIm91dGxpbmVcIj5cclxuICAgICAgICAgICAgICAgICAgPG1hdC1sYWJlbD5WYWxldXIgcGFyIGTDqWZhdWx0PC9tYXQtbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dCBbdHlwZV09XCJjdXJyZW50RWRpdEJsb2NrLnR5cGVcIiBbZGlzYWJsZWRdPVwiY3VycmVudEVkaXRCbG9jay50eXBlID09PSAndGVsJ1wiIG1hdElucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgW25nTW9kZWxPcHRpb25zXT1cInsgc3RhbmRhbG9uZTogdHJ1ZSB9XCIgWyhuZ01vZGVsKV09XCJjdXJyZW50RWRpdEJsb2NrLmRlZmF1bHRWYWx1ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1hbmRhdG9yeSB0b3AtMTAgYm90dG9tLTEwXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidG9vZ2xlLWJ1dHRvblwiPlxyXG4gICAgICAgICAgICAgICAgICA8c3Bhbj5PYmxpZ2F0b2lyZTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPG1hdC1zbGlkZS10b2dnbGUgY29sb3I9XCIjNkZFOEQ3XCIgWyhuZ01vZGVsKV09XCJjdXJyZW50RWRpdEJsb2NrLmlzTWFuZGF0b3J5XCJcclxuICAgICAgICAgICAgICAgICAgICBbbmdNb2RlbE9wdGlvbnNdPVwieyBzdGFuZGFsb25lOiB0cnVlIH1cIj5cclxuICAgICAgICAgICAgICAgICAgPC9tYXQtc2xpZGUtdG9nZ2xlPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1hbmRhdG9yeSB0b3AtMTBcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0b29nbGUtYnV0dG9uXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuPlZpc2liaWxpdMOpIGNvbmRpdGlvbm5lbGxlPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8bWF0LXNsaWRlLXRvZ2dsZSBjb2xvcj1cIiM2RkU4RDdcIiBbKG5nTW9kZWwpXT1cImN1cnJlbnRFZGl0QmxvY2suaXNDb25kaXRpb25hbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgW25nTW9kZWxPcHRpb25zXT1cInsgc3RhbmRhbG9uZTogdHJ1ZSB9XCI+XHJcbiAgICAgICAgICAgICAgICAgIDwvbWF0LXNsaWRlLXRvZ2dsZT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJjdXJyZW50RWRpdEJsb2NrPy5pc0NvbmRpdGlvbmFsXCI+XHJcbiAgICAgICAgICAgICAgICA8bWF0LWZvcm0tZmllbGQgY2xhc3M9XCJmb3JtLWZpZWxkIG1hdC1zZWxlY3QgZnVsbC13aWR0aFwiIGFwcGVhcmFuY2U9XCJvdXRsaW5lXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxtYXQtbGFiZWw+U2VsZWN0aW9ubmV6IGxhIGNhdMOpZ29yaWU8L21hdC1sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgPG1hdC1zZWxlY3QgWyhuZ01vZGVsKV09XCJhbGxcIiBbbmdNb2RlbE9wdGlvbnNdPVwieyBzdGFuZGFsb25lOiB0cnVlIH1cIlxyXG4gICAgICAgICAgICAgICAgICAgIChzZWxlY3Rpb25DaGFuZ2UpPVwib25TZWxlY3RDb25kaXRpb24oJ2FsbCcsJ3MxJywgJGV2ZW50LnZhbHVlKVwiIHJlcXVpcmVkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxtYXQtb3B0aW9uICpuZ0Zvcj1cImxldCBpdGVtIG9mIGNvbmRpdGlvbkRhdGEuYWxsXCIgW3ZhbHVlXT1cIml0ZW0ua2V5XCI+e3tcclxuICAgICAgICAgICAgICAgICAgICAgIGl0ZW0ubGFiZWwgfX1cclxuICAgICAgICAgICAgICAgICAgICA8L21hdC1vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgIDwvbWF0LXNlbGVjdD5cclxuICAgICAgICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgICAgICAgICA8bWF0LWZvcm0tZmllbGQgKm5nSWY9XCJjb25kaXRpb25EYXRhLnMxPy5sZW5ndGggPiAwXCIgY2xhc3M9XCJmb3JtLWZpZWxkIG1hdC1zZWxlY3QgZnVsbC13aWR0aFwiXHJcbiAgICAgICAgICAgICAgICAgIGFwcGVhcmFuY2U9XCJvdXRsaW5lXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxtYXQtbGFiZWw+U2VsZWN0aW9ubmV6IGxhIHNvdXMgY2F0w6lnb3JpZSAoczEpPC9tYXQtbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgIDxtYXQtc2VsZWN0IFsobmdNb2RlbCldPVwiczFcIiBbbmdNb2RlbE9wdGlvbnNdPVwieyBzdGFuZGFsb25lOiB0cnVlIH1cIlxyXG4gICAgICAgICAgICAgICAgICAgIChzZWxlY3Rpb25DaGFuZ2UpPVwib25TZWxlY3RDb25kaXRpb24oJ3MxJywnczInLCAkZXZlbnQudmFsdWUpXCIgcmVxdWlyZWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPG1hdC1vcHRpb24gKm5nRm9yPVwibGV0IGl0ZW0gb2YgY29uZGl0aW9uRGF0YS5zMVwiIFt2YWx1ZV09XCJpdGVtLmtleVwiPnt7XHJcbiAgICAgICAgICAgICAgICAgICAgICBpdGVtLmxhYmVsIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPC9tYXQtb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICA8L21hdC1zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgICAgICAgPG1hdC1mb3JtLWZpZWxkIGNsYXNzPVwiZm9ybS1maWVsZCBtYXQtc2VsZWN0IGZ1bGwtd2lkdGhcIiAqbmdJZj1cImNvbmRpdGlvbkRhdGEuczI/Lmxlbmd0aD4wXCJcclxuICAgICAgICAgICAgICAgICAgYXBwZWFyYW5jZT1cIm91dGxpbmVcIj5cclxuICAgICAgICAgICAgICAgICAgPG1hdC1sYWJlbD5TZWxlY3Rpb25uZXogbGEgc291cyBjYXTDqWdvcmllIChzMik8L21hdC1sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgPG1hdC1zZWxlY3QgWyhuZ01vZGVsKV09XCJzMlwiIFtuZ01vZGVsT3B0aW9uc109XCJ7IHN0YW5kYWxvbmU6IHRydWUgfVwiXHJcbiAgICAgICAgICAgICAgICAgICAgKHNlbGVjdGlvbkNoYW5nZSk9XCJvblNlbGVjdENvbmRpdGlvbignczInLCdzMycsICRldmVudC52YWx1ZSlcIiByZXF1aXJlZD5cclxuICAgICAgICAgICAgICAgICAgICA8bWF0LW9wdGlvbiAqbmdGb3I9XCJsZXQgaXRlbSBvZiBjb25kaXRpb25EYXRhLnMyXCIgW3ZhbHVlXT1cIml0ZW0ua2V5XCI+e3tcclxuICAgICAgICAgICAgICAgICAgICAgIGl0ZW0ubGFiZWwgfX1cclxuICAgICAgICAgICAgICAgICAgICA8L21hdC1vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgIDwvbWF0LXNlbGVjdD5cclxuICAgICAgICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgICAgICAgICA8bWF0LWZvcm0tZmllbGQgY2xhc3M9XCJmb3JtLWZpZWxkIG1hdC1zZWxlY3QgZnVsbC13aWR0aFwiICpuZ0lmPVwiY29uZGl0aW9uRGF0YS5zMz8ubGVuZ3RoPjBcIlxyXG4gICAgICAgICAgICAgICAgICBhcHBlYXJhbmNlPVwib3V0bGluZVwiPlxyXG4gICAgICAgICAgICAgICAgICA8bWF0LWxhYmVsPlNlbGVjdGlvbm5leiBsYSBzb3VzIGNhdMOpZ29yaWUgKHMzKTwvbWF0LWxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICA8bWF0LXNlbGVjdCBbKG5nTW9kZWwpXT1cInMzXCIgW25nTW9kZWxPcHRpb25zXT1cInsgc3RhbmRhbG9uZTogdHJ1ZSB9XCJcclxuICAgICAgICAgICAgICAgICAgICAoc2VsZWN0aW9uQ2hhbmdlKT1cIm9uU2VsZWN0Q29uZGl0aW9uKCdzMycsJ3M0JywgJGV2ZW50LnZhbHVlKVwiIHJlcXVpcmVkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxtYXQtb3B0aW9uICpuZ0Zvcj1cImxldCBpdGVtIG9mIGNvbmRpdGlvbkRhdGEuczNcIiBbdmFsdWVdPVwiaXRlbS5rZXlcIj57e1xyXG4gICAgICAgICAgICAgICAgICAgICAgaXRlbS5sYWJlbCB9fVxyXG4gICAgICAgICAgICAgICAgICAgIDwvbWF0LW9wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgPC9tYXQtc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuXHJcbiAgICAgICAgICAgICAgPG1hdC1yYWRpby1ncm91cFxyXG4gICAgICAgICAgICAgICAgKm5nSWY9XCJjdXJyZW50RWRpdEJsb2NrLmlzQ29uZGl0aW9uYWwgJiYgb25HZXREZWZhdWx0VmFsdWUoKSAmJiBvbkdldERlZmF1bHRWYWx1ZSgpPy5sZW5ndGg+MFwiXHJcbiAgICAgICAgICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJleGFtcGxlLXJhZGlvLWdyb3VwLWxhYmVsXCIgY2xhc3M9XCJleGFtcGxlLXJhZGlvLWdyb3VwXCJcclxuICAgICAgICAgICAgICAgIFsobmdNb2RlbCldPVwiY3VycmVudEVkaXRCbG9jay5jb25kaXRpb24udmFsdWVcIiBbbmdNb2RlbE9wdGlvbnNdPVwieyBzdGFuZGFsb25lOiB0cnVlIH1cIj5cclxuICAgICAgICAgICAgICAgIDxtYXQtcmFkaW8tYnV0dG9uIGNsYXNzPVwiZXhhbXBsZS1yYWRpby1idXR0b25cIiBzdHlsZT1cIm1hcmdpbi1yaWdodDogMTBweFwiXHJcbiAgICAgICAgICAgICAgICAgICpuZ0Zvcj1cImxldCBpdGVtIG9mIG9uR2V0RGVmYXVsdFZhbHVlKClcIiBbdmFsdWVdPVwiaXRlbS52YWx1ZVwiPlxyXG4gICAgICAgICAgICAgICAgICB7eyBpdGVtLnZhbHVlIH19XHJcbiAgICAgICAgICAgICAgICA8L21hdC1yYWRpby1idXR0b24+XHJcbiAgICAgICAgICAgICAgPC9tYXQtcmFkaW8tZ3JvdXA+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJsb2MtYWN0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uICpuZ0lmPVwicGFyYW1zSW5kZXgubGVuZ3RoPDRcIiBtYXQtYnV0dG9uIFtkaXNhYmxlZF09XCIhY3VycmVudEVkaXRCbG9jay5lZGl0YWJsZVwiXHJcbiAgICAgICAgICAgICAgICAgIChjbGljayk9XCJvbkFkZE5ld1N1YkxldmVsRmllbGRCbG9jaygkZXZlbnQpXCI+U291cy1jYXTDqWdvcmllIDxtYXQtaWNvbj5kZXZpY2VfaHViXHJcbiAgICAgICAgICAgICAgICAgIDwvbWF0LWljb24+PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIG1hdC1idXR0b24gW2Rpc2FibGVkXT1cIiFjdXJyZW50RWRpdEJsb2NrLmVkaXRhYmxlXCIgKGNsaWNrKT1cIm9uRHVwbGljYXRlZEJsb2NrKCRldmVudClcIj5EdXBsaXF1ZXJcclxuICAgICAgICAgICAgICAgICAgbGUgYmxvYzxtYXQtaWNvbj5maWx0ZXJfbm9uZTwvbWF0LWljb24+XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gbWF0LWJ1dHRvbiBbZGlzYWJsZWRdPVwiIWN1cnJlbnRFZGl0QmxvY2suZWRpdGFibGVcIiBjbGFzcz1cImRlbGV0ZS1ibG9jXCJcclxuICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cIm9uUmVtb3ZlRmllbGRCbG9jaygkZXZlbnQpXCI+U3VwcHJpbWVyIGxlIGJsb2MgPG1hdC1pY29uPlxyXG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSA8L21hdC1pY29uPjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuXHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwicHJvcGVydHktY29udGVudFwiICpuZ0lmPVwiaXNTZWN0aW9uICYmIGN1cnJlbnRFZGl0QmxvY2tcIj5cclxuICAgICAgICAgIDxoMz5QYXJhbcOodHJlIGRlIGxhIHNlY3Rpb24ge3sgY3VycmVudEVkaXRCbG9jay5uYW1lIH19PC9oMz5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJcIj5cclxuICAgICAgICAgICAgPG1hdC1mb3JtLWZpZWxkIGNsYXNzPVwiZm9ybS1maWVsZCBmdWxsLXdpZHRoXCIgYXBwZWFyYW5jZT1cIm91dGxpbmVcIj5cclxuICAgICAgICAgICAgICA8bWF0LWxhYmVsPk5vbSBkZSBsYSBzZWN0aW9uPC9tYXQtbGFiZWw+XHJcbiAgICAgICAgICAgICAgPGlucHV0IChuZ01vZGVsQ2hhbmdlKT1cIm9uQ2hhbmdlQ2F0ZWdvcnlOYW1lKClcIiB0eXBlPVwidGV4dFwiIG1hdElucHV0IHJlcXVpcmVkIHBsYWNlaG9sZGVyPVwiXCJcclxuICAgICAgICAgICAgICAgIFsobmdNb2RlbCldPVwiY3VycmVudEVkaXRCbG9jay5uYW1lXCIgW25nTW9kZWxPcHRpb25zXT1cInsgc3RhbmRhbG9uZTogdHJ1ZSB9XCIgLz5cclxuICAgICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgICAgICAgICAgPG1hdC1mb3JtLWZpZWxkIGNsYXNzPVwiZm9ybS1maWVsZCBtYXQtc2VsZWN0IGZ1bGwtd2lkdGhcIiBhcHBlYXJhbmNlPVwib3V0bGluZVwiPlxyXG4gICAgICAgICAgICAgIDxtYXQtbGFiZWw+RXF1aXBlIGRlIGdlc3Rpb248L21hdC1sYWJlbD5cclxuICAgICAgICAgICAgICA8bWF0LXNlbGVjdCByZXF1aXJlZCBbKG5nTW9kZWwpXT1cImN1cnJlbnRFZGl0QmxvY2suc2VsZWN0b3IudmFsdWVcIlxyXG4gICAgICAgICAgICAgICAgW25nTW9kZWxPcHRpb25zXT1cInsgc3RhbmRhbG9uZTogdHJ1ZSB9XCI+XHJcbiAgICAgICAgICAgICAgICA8bWF0LW9wdGlvbiBbdmFsdWVdPVwiaXRlbS52YWx1ZVwiICpuZ0Zvcj1cImxldCBpdGVtIG9mIGN1cnJlbnRFZGl0QmxvY2suc2VsZWN0b3IuZGVmYXVsdFZhbHVlXCI+e3tcclxuICAgICAgICAgICAgICAgICAgaXRlbS52YWx1ZSB9fTwvbWF0LW9wdGlvbj5cclxuICAgICAgICAgICAgICA8L21hdC1zZWxlY3Q+XHJcbiAgICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJibG9jLWFjdGlvblwiPlxyXG4gICAgICAgICAgICAgIDxidXR0b24gbWF0LWJ1dHRvbiAoY2xpY2spPVwib25BZGROZXdTdWJMZXZlbEZpZWxkQmxvY2soJGV2ZW50KVwiPlNvdXMtY2F0w6lnb3JpZSA8bWF0LWljb24+ZGV2aWNlX2h1YlxyXG4gICAgICAgICAgICAgICAgPC9tYXQtaWNvbj48L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8YnV0dG9uIG1hdC1idXR0b24gKGNsaWNrKT1cIm9uRHVwbGljYXRlZEJsb2NrKCRldmVudClcIj5EdXBsaXF1ZXIgbGUgYmxvYzxtYXQtaWNvbj5maWx0ZXJfbm9uZTwvbWF0LWljb24+XHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBbZGlzYWJsZWRdPVwiIWN1cnJlbnRFZGl0QmxvY2suZWRpdGFibGVcIiBtYXQtYnV0dG9uIGNsYXNzPVwiZGVsZXRlLWJsb2NcIlxyXG4gICAgICAgICAgICAgICAgKGNsaWNrKT1cIm9uUmVtb3ZlRmllbGRCbG9jaygkZXZlbnQpXCI+U3VwcHJpbWVyIGxlIGJsb2MgPG1hdC1pY29uPlxyXG4gICAgICAgICAgICAgICAgICBkZWxldGU8L21hdC1pY29uPjwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZm9ybT5cclxuPC9tYWluPiJdfQ==