import { COMMA, ENTER, SEMICOLON } from "@angular/cdk/keycodes";
import { moveItemInArray, transferArrayItem } from "@angular/cdk/drag-drop";
import { Component, HostListener } from '@angular/core';
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
import * as i7 from "@angular/material/button";
import * as i8 from "@angular/common";
import * as i9 from "../../components/loading/loading.component";
import * as i10 from "@angular/cdk/drag-drop";
import * as i11 from "../../components/template/sub-template-profile/sub-template-profile.component";
import * as i12 from "ngx-intl-tel-input";
import * as i13 from "@angular/material/form-field";
import * as i14 from "@angular/material/select";
import * as i15 from "@angular/material/core";
import * as i16 from "@angular/material/input";
import * as i17 from "@angular/material/slide-toggle";
import * as i18 from "@angular/material/checkbox";
import * as i19 from "@angular/material/chips";
import * as i20 from "@angular/material/radio";
function TemplateProfileCreateComponent_lib_loading_page_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "lib-loading-page");
} }
function TemplateProfileCreateComponent_lib_loading_page_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "lib-loading-page");
} }
function TemplateProfileCreateComponent_li_23_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 22);
    i0.ɵɵlistener("click", function TemplateProfileCreateComponent_li_23_Template_li_click_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r10); const cat_r7 = restoredCtx.$implicit; const i_r8 = restoredCtx.index; const ctx_r9 = i0.ɵɵnextContext(); return ctx_r9.onActiveMenu(cat_r7, i_r8); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const cat_r7 = ctx.$implicit;
    const i_r8 = ctx.index;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵclassMap(ctx_r2.editIndex === i_r8 ? "active" : "");
    i0.ɵɵproperty("ngxScrollTo", "#" + cat_r7.name)("id", cat_r7.name + "x");
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", cat_r7.name, " ");
} }
function TemplateProfileCreateComponent_section_33_mat_icon_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-icon");
    i0.ɵɵtext(1, "chevron_right");
    i0.ɵɵelementEnd();
} }
function TemplateProfileCreateComponent_section_33_mat_icon_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-icon");
    i0.ɵɵtext(1, "expand_more");
    i0.ɵɵelementEnd();
} }
function TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 45)(1, "button", 25);
    i0.ɵɵlistener("click", function TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_div_3_Template_button_click_1_listener($event) { return $event.preventDefault(); });
    i0.ɵɵelementStart(2, "mat-icon", 26);
    i0.ɵɵtext(3, "drag_indicator");
    i0.ɵɵelementEnd()()();
} }
function TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_div_5_mat_icon_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-icon");
    i0.ɵɵtext(1, "expand_less ");
    i0.ɵɵelementEnd();
} }
function TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_div_5_mat_icon_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-icon");
    i0.ɵɵtext(1, "expand_more ");
    i0.ɵɵelementEnd();
} }
function TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r30 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 46)(1, "div", 47)(2, "div")(3, "p", 29);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "p", 30);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "button", 48);
    i0.ɵɵlistener("click", function TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_div_5_Template_button_click_7_listener($event) { i0.ɵɵrestoreView(_r30); const ctx_r29 = i0.ɵɵnextContext(); const field_r19 = ctx_r29.$implicit; const j_r20 = ctx_r29.index; const i_r12 = i0.ɵɵnextContext(3).index; const ctx_r28 = i0.ɵɵnextContext(); $event.preventDefault(); return ctx_r28.onEditBlock(field_r19, i_r12, j_r20); });
    i0.ɵɵelementStart(8, "mat-icon", 49);
    i0.ɵɵtext(9, "settings");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(10, "button", 50);
    i0.ɵɵlistener("click", function TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_div_5_Template_button_click_10_listener($event) { i0.ɵɵrestoreView(_r30); const ctx_r33 = i0.ɵɵnextContext(); const field_r19 = ctx_r33.$implicit; const j_r20 = ctx_r33.index; const i_r12 = i0.ɵɵnextContext(3).index; const ctx_r32 = i0.ɵɵnextContext(); return ctx_r32.onExpendMore({ event: $event, field: field_r19 }, i_r12, j_r20); });
    i0.ɵɵtemplate(11, TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_div_5_mat_icon_11_Template, 2, 0, "mat-icon", 5);
    i0.ɵɵtemplate(12, TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_div_5_mat_icon_12_Template, 2, 0, "mat-icon", 5);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const field_r19 = i0.ɵɵnextContext().$implicit;
    const ctx_r22 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1(" ", field_r19.label, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" Listes des informations n\u00E9cessaires pour la cr\u00E9ation de ", ctx_r22.catNameStart(field_r19.label) ? "l'" + field_r19.label : field_r19.label, " ");
    i0.ɵɵadvance(4);
    i0.ɵɵstyleProp("opacity", field_r19.forms && field_r19.forms.length > 0 ? 1 : 0);
    i0.ɵɵproperty("disabled", !(field_r19.forms && field_r19.forms.length > 0));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !field_r19.expandMore);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", field_r19.expandMore);
} }
function TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_div_7_div_1_div_2_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 59)(1, "button", 25);
    i0.ɵɵlistener("click", function TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_div_7_div_1_div_2_div_3_Template_button_click_1_listener($event) { return $event.preventDefault(); });
    i0.ɵɵelementStart(2, "mat-icon", 26);
    i0.ɵɵtext(3, " drag_indicator");
    i0.ɵɵelementEnd()()();
} }
function TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_div_7_div_1_div_2_div_5_mat_icon_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-icon");
    i0.ɵɵtext(1, " expand_less ");
    i0.ɵɵelementEnd();
} }
function TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_div_7_div_1_div_2_div_5_mat_icon_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-icon");
    i0.ɵɵtext(1, " expand_more ");
    i0.ɵɵelementEnd();
} }
const _c0 = function () { return { standalone: true }; };
function TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_div_7_div_1_div_2_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r50 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 46)(1, "div", 47)(2, "div")(3, "input", 60);
    i0.ɵɵlistener("ngModelChange", function TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_div_7_div_1_div_2_div_5_Template_input_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r50); const child_r39 = i0.ɵɵnextContext().$implicit; return child_r39.label = $event; });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "p", 30);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "button", 48);
    i0.ɵɵlistener("click", function TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_div_7_div_1_div_2_div_5_Template_button_click_6_listener($event) { i0.ɵɵrestoreView(_r50); const ctx_r52 = i0.ɵɵnextContext(); const child_r39 = ctx_r52.$implicit; const k_r40 = ctx_r52.index; const j_r20 = i0.ɵɵnextContext(3).index; const i_r12 = i0.ɵɵnextContext(3).index; const ctx_r51 = i0.ɵɵnextContext(); $event.preventDefault(); return ctx_r51.onEditBlock(child_r39, i_r12, j_r20, k_r40); });
    i0.ɵɵelementStart(7, "mat-icon", 49);
    i0.ɵɵtext(8, "settings");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(9, "button", 50);
    i0.ɵɵlistener("click", function TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_div_7_div_1_div_2_div_5_Template_button_click_9_listener($event) { i0.ɵɵrestoreView(_r50); const ctx_r56 = i0.ɵɵnextContext(); const child_r39 = ctx_r56.$implicit; const k_r40 = ctx_r56.index; const j_r20 = i0.ɵɵnextContext(3).index; const i_r12 = i0.ɵɵnextContext(3).index; const ctx_r55 = i0.ɵɵnextContext(); return ctx_r55.onExpendMore({ event: $event, field: child_r39 }, i_r12, j_r20, k_r40); });
    i0.ɵɵtemplate(10, TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_div_7_div_1_div_2_div_5_mat_icon_10_Template, 2, 0, "mat-icon", 5);
    i0.ɵɵtemplate(11, TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_div_7_div_1_div_2_div_5_mat_icon_11_Template, 2, 0, "mat-icon", 5);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const child_r39 = i0.ɵɵnextContext().$implicit;
    const category_r11 = i0.ɵɵnextContext(6).$implicit;
    const ctx_r42 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("readonly", ctx_r42.categories.length < 4 || !category_r11.editable)("readonly", !category_r11.editable)("ngModel", child_r39.label)("ngModelOptions", i0.ɵɵpureFunction0(10, _c0));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" Listes des informations n\u00E9cessaires pour la cr\u00E9ation de ", ctx_r42.catNameStart(child_r39.label) ? "l'" + child_r39.label : child_r39.label, " ");
    i0.ɵɵadvance(4);
    i0.ɵɵstyleProp("opacity", child_r39.forms && child_r39.forms.length > 0 ? 1 : 0);
    i0.ɵɵproperty("disabled", !(child_r39.forms && child_r39.forms.length > 0));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !child_r39.expandMore);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", child_r39.expandMore);
} }
function TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_div_7_div_1_div_2_div_7_div_1_div_2_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 65)(1, "button", 25);
    i0.ɵɵlistener("click", function TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_div_7_div_1_div_2_div_7_div_1_div_2_div_3_Template_button_click_1_listener($event) { return $event.preventDefault(); });
    i0.ɵɵelementStart(2, "mat-icon", 26);
    i0.ɵɵtext(3, " drag_indicator ");
    i0.ɵɵelementEnd()()();
} }
function TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_div_7_div_1_div_2_div_7_div_1_div_2_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r71 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 66)(1, "button", 67);
    i0.ɵɵlistener("click", function TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_div_7_div_1_div_2_div_7_div_1_div_2_div_7_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r71); const k_r40 = i0.ɵɵnextContext(4).index; const j_r20 = i0.ɵɵnextContext(3).index; const i_r12 = i0.ɵɵnextContext(3).index; const ctx_r69 = i0.ɵɵnextContext(); return ctx_r69.onAddNewField(i_r12, j_r20, k_r40); });
    i0.ɵɵelementStart(2, "span");
    i0.ɵɵtext(3, "Ajouter un champ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "mat-icon");
    i0.ɵɵtext(5, " add ");
    i0.ɵɵelementEnd()()();
} }
function TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_div_7_div_1_div_2_div_7_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r75 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 62)(1, "div", 37)(2, "div", 38);
    i0.ɵɵtemplate(3, TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_div_7_div_1_div_2_div_7_div_1_div_2_div_3_Template, 4, 0, "div", 63);
    i0.ɵɵelementStart(4, "div", 40)(5, "lib-sub-category", 64);
    i0.ɵɵlistener("onCheckValue", function TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_div_7_div_1_div_2_div_7_div_1_div_2_Template_lib_sub_category_onCheckValue_5_listener($event) { i0.ɵɵrestoreView(_r75); const ctx_r74 = i0.ɵɵnextContext(10); return ctx_r74.onCheckValue($event); })("onAddKeywordFromInput", function TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_div_7_div_1_div_2_div_7_div_1_div_2_Template_lib_sub_category_onAddKeywordFromInput_5_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r75); const l_r65 = restoredCtx.index; const k_r40 = i0.ɵɵnextContext(3).index; const j_r20 = i0.ɵɵnextContext(3).index; const i_r12 = i0.ɵɵnextContext(3).index; const ctx_r76 = i0.ɵɵnextContext(); return ctx_r76.addKeywordFromInput($event.event, $event.prev, i_r12, j_r20, k_r40, l_r65); })("onKeyPress", function TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_div_7_div_1_div_2_div_7_div_1_div_2_Template_lib_sub_category_onKeyPress_5_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r75); const l_r65 = restoredCtx.index; const k_r40 = i0.ɵɵnextContext(3).index; const j_r20 = i0.ɵɵnextContext(3).index; const i_r12 = i0.ɵɵnextContext(3).index; const ctx_r80 = i0.ɵɵnextContext(); return ctx_r80.onKeyPress($event.event, i_r12, j_r20, k_r40, l_r65); })("onAddNewField", function TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_div_7_div_1_div_2_div_7_div_1_div_2_Template_lib_sub_category_onAddNewField_5_listener() { i0.ɵɵrestoreView(_r75); const k_r40 = i0.ɵɵnextContext(3).index; const j_r20 = i0.ɵɵnextContext(3).index; const i_r12 = i0.ɵɵnextContext(3).index; const ctx_r84 = i0.ɵɵnextContext(); return ctx_r84.onAddNewField(i_r12, j_r20, k_r40); })("onRemoveField", function TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_div_7_div_1_div_2_div_7_div_1_div_2_Template_lib_sub_category_onRemoveField_5_listener() { const restoredCtx = i0.ɵɵrestoreView(_r75); const l_r65 = restoredCtx.index; const k_r40 = i0.ɵɵnextContext(3).index; const j_r20 = i0.ɵɵnextContext(3).index; const i_r12 = i0.ɵɵnextContext(3).index; const ctx_r88 = i0.ɵɵnextContext(); return ctx_r88.onRemoveField(i_r12, j_r20, k_r40, l_r65); })("onChangeType", function TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_div_7_div_1_div_2_div_7_div_1_div_2_Template_lib_sub_category_onChangeType_5_listener() { const restoredCtx = i0.ɵɵrestoreView(_r75); const c2_r64 = restoredCtx.$implicit; const l_r65 = restoredCtx.index; const k_r40 = i0.ɵɵnextContext(3).index; const j_r20 = i0.ɵɵnextContext(3).index; const i_r12 = i0.ɵɵnextContext(3).index; const ctx_r92 = i0.ɵɵnextContext(); return ctx_r92.onChangeType(c2_r64.type, i_r12, j_r20, k_r40, l_r65); })("onRemoveKeyword", function TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_div_7_div_1_div_2_div_7_div_1_div_2_Template_lib_sub_category_onRemoveKeyword_5_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r75); const l_r65 = restoredCtx.index; const k_r40 = i0.ɵɵnextContext(3).index; const j_r20 = i0.ɵɵnextContext(3).index; const i_r12 = i0.ɵɵnextContext(3).index; const ctx_r96 = i0.ɵɵnextContext(); return ctx_r96.removeKeyword($event.event, i_r12, j_r20, k_r40, l_r65); })("onAddNewSubLevelField", function TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_div_7_div_1_div_2_div_7_div_1_div_2_Template_lib_sub_category_onAddNewSubLevelField_5_listener() { const restoredCtx = i0.ɵɵrestoreView(_r75); const l_r65 = restoredCtx.index; const k_r40 = i0.ɵɵnextContext(3).index; const j_r20 = i0.ɵɵnextContext(3).index; const i_r12 = i0.ɵɵnextContext(3).index; const ctx_r100 = i0.ɵɵnextContext(); return ctx_r100.onAddNewSubLevelField(i_r12, j_r20, k_r40, l_r65); })("onExpendMore", function TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_div_7_div_1_div_2_div_7_div_1_div_2_Template_lib_sub_category_onExpendMore_5_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r75); const l_r65 = restoredCtx.index; const k_r40 = i0.ɵɵnextContext(3).index; const j_r20 = i0.ɵɵnextContext(3).index; const i_r12 = i0.ɵɵnextContext(3).index; const ctx_r104 = i0.ɵɵnextContext(); return ctx_r104.onExpendMore($event, i_r12, j_r20, k_r40, l_r65); })("onChangeLabel", function TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_div_7_div_1_div_2_div_7_div_1_div_2_Template_lib_sub_category_onChangeLabel_5_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r75); const l_r65 = restoredCtx.index; const k_r40 = i0.ɵɵnextContext(3).index; const j_r20 = i0.ɵɵnextContext(3).index; const i_r12 = i0.ɵɵnextContext(3).index; const ctx_r108 = i0.ɵɵnextContext(); return ctx_r108.onChangeLabel($event, i_r12, j_r20, k_r40, l_r65); })("onCheckedChip", function TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_div_7_div_1_div_2_div_7_div_1_div_2_Template_lib_sub_category_onCheckedChip_5_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r75); const l_r65 = restoredCtx.index; const k_r40 = i0.ɵɵnextContext(3).index; const j_r20 = i0.ɵɵnextContext(3).index; const i_r12 = i0.ɵɵnextContext(3).index; const ctx_r112 = i0.ɵɵnextContext(); return ctx_r112.onCheckedChip($event, i_r12, j_r20, k_r40, l_r65); })("onDrop", function TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_div_7_div_1_div_2_div_7_div_1_div_2_Template_lib_sub_category_onDrop_5_listener($event) { i0.ɵɵrestoreView(_r75); const ctx_r116 = i0.ɵɵnextContext(10); return ctx_r116.drop($event); })("onCheckedDefault", function TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_div_7_div_1_div_2_div_7_div_1_div_2_Template_lib_sub_category_onCheckedDefault_5_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r75); const l_r65 = restoredCtx.index; const k_r40 = i0.ɵɵnextContext(3).index; const j_r20 = i0.ɵɵnextContext(3).index; const i_r12 = i0.ɵɵnextContext(3).index; const ctx_r117 = i0.ɵɵnextContext(); return ctx_r117.onCheckedDefault($event, i_r12, j_r20, k_r40, l_r65); })("onEditBlock", function TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_div_7_div_1_div_2_div_7_div_1_div_2_Template_lib_sub_category_onEditBlock_5_listener() { const restoredCtx = i0.ɵɵrestoreView(_r75); const c2_r64 = restoredCtx.$implicit; const l_r65 = restoredCtx.index; const k_r40 = i0.ɵɵnextContext(3).index; const j_r20 = i0.ɵɵnextContext(3).index; const i_r12 = i0.ɵɵnextContext(3).index; const ctx_r121 = i0.ɵɵnextContext(); return ctx_r121.onEditBlock(c2_r64, i_r12, j_r20, k_r40, l_r65); });
    i0.ɵɵelement(6, "div", 51);
    i0.ɵɵelementEnd()()()();
    i0.ɵɵtemplate(7, TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_div_7_div_1_div_2_div_7_div_1_div_2_div_7_Template, 6, 0, "div", 58);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const c2_r64 = ctx.$implicit;
    const l_r65 = ctx.index;
    const ctx_r125 = i0.ɵɵnextContext(3);
    const child_r39 = ctx_r125.$implicit;
    const k_r40 = ctx_r125.index;
    const ctx_r63 = i0.ɵɵnextContext(7);
    i0.ɵɵstyleProp("width", c2_r64.forms && c2_r64.forms.length > 0 ? "100%" : ctx_r63.fieldWidth(c2_r64.type, child_r39.forms.length, l_r65));
    i0.ɵɵproperty("id", c2_r64.key);
    i0.ɵɵadvance(2);
    i0.ɵɵclassMap(c2_r64.forms && c2_r64.forms.length > 0 ? "sub-category-forms" : "");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", c2_r64.forms && c2_r64.forms.length > 0);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("field", c2_r64)("length", child_r39 == null ? null : child_r39.forms == null ? null : child_r39.forms.length)("blink", ctx_r63.checkBlink(l_r65, 3) === ctx_r63.newFieldIndex)("i", k_r40)("j", l_r65)("conditionData", ctx_r63.conditionData);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", (child_r39 == null ? null : child_r39.forms == null ? null : child_r39.forms.length) - 1 === l_r65);
} }
function TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_div_7_div_1_div_2_div_7_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r127 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 53, 34);
    i0.ɵɵlistener("cdkDropListDropped", function TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_div_7_div_1_div_2_div_7_div_1_Template_div_cdkDropListDropped_0_listener($event) { i0.ɵɵrestoreView(_r127); const ctx_r126 = i0.ɵɵnextContext(9); return ctx_r126.drop($event); });
    i0.ɵɵtemplate(2, TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_div_7_div_1_div_2_div_7_div_1_div_2_Template, 8, 13, "div", 61);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const child_r39 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵproperty("cdkDropListData", child_r39.forms);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", child_r39.forms);
} }
function TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_div_7_div_1_div_2_div_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 51);
    i0.ɵɵtemplate(1, TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_div_7_div_1_div_2_div_7_div_1_Template, 3, 2, "div", 52);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const child_r39 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", child_r39.forms && child_r39.forms.length > 0);
} }
function TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_div_7_div_1_div_2_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r132 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 66)(1, "button", 67);
    i0.ɵɵlistener("click", function TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_div_7_div_1_div_2_div_8_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r132); const j_r20 = i0.ɵɵnextContext(4).index; const i_r12 = i0.ɵɵnextContext(3).index; const ctx_r130 = i0.ɵɵnextContext(); return ctx_r130.onAddNewField(i_r12, j_r20); });
    i0.ɵɵelementStart(2, "span");
    i0.ɵɵtext(3, "Ajouter un champ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "mat-icon");
    i0.ɵɵtext(5, "add");
    i0.ɵɵelementEnd()()();
} }
function TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_div_7_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r135 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 55)(1, "div", 37)(2, "div", 38);
    i0.ɵɵtemplate(3, TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_div_7_div_1_div_2_div_3_Template, 4, 0, "div", 56);
    i0.ɵɵelementStart(4, "div", 40);
    i0.ɵɵtemplate(5, TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_div_7_div_1_div_2_div_5_Template, 12, 11, "div", 41);
    i0.ɵɵelementStart(6, "lib-sub-category", 57);
    i0.ɵɵlistener("onCheckValue", function TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_div_7_div_1_div_2_Template_lib_sub_category_onCheckValue_6_listener($event) { i0.ɵɵrestoreView(_r135); const ctx_r134 = i0.ɵɵnextContext(7); return ctx_r134.onCheckValue($event); })("onAddKeywordFromInput", function TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_div_7_div_1_div_2_Template_lib_sub_category_onAddKeywordFromInput_6_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r135); const k_r40 = restoredCtx.index; const j_r20 = i0.ɵɵnextContext(3).index; const i_r12 = i0.ɵɵnextContext(3).index; const ctx_r136 = i0.ɵɵnextContext(); return ctx_r136.addKeywordFromInput($event.event, $event.prev, i_r12, j_r20, k_r40); })("onKeyPress", function TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_div_7_div_1_div_2_Template_lib_sub_category_onKeyPress_6_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r135); const k_r40 = restoredCtx.index; const j_r20 = i0.ɵɵnextContext(3).index; const i_r12 = i0.ɵɵnextContext(3).index; const ctx_r139 = i0.ɵɵnextContext(); return ctx_r139.onKeyPress($event.event, i_r12, j_r20, k_r40); })("onAddNewField", function TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_div_7_div_1_div_2_Template_lib_sub_category_onAddNewField_6_listener() { i0.ɵɵrestoreView(_r135); const j_r20 = i0.ɵɵnextContext(3).index; const i_r12 = i0.ɵɵnextContext(3).index; const ctx_r142 = i0.ɵɵnextContext(); return ctx_r142.onAddNewField(i_r12, j_r20); })("onRemoveField", function TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_div_7_div_1_div_2_Template_lib_sub_category_onRemoveField_6_listener() { const restoredCtx = i0.ɵɵrestoreView(_r135); const k_r40 = restoredCtx.index; const j_r20 = i0.ɵɵnextContext(3).index; const i_r12 = i0.ɵɵnextContext(3).index; const ctx_r145 = i0.ɵɵnextContext(); return ctx_r145.onRemoveField(i_r12, j_r20, k_r40); })("onChangeType", function TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_div_7_div_1_div_2_Template_lib_sub_category_onChangeType_6_listener() { const restoredCtx = i0.ɵɵrestoreView(_r135); const child_r39 = restoredCtx.$implicit; const k_r40 = restoredCtx.index; const j_r20 = i0.ɵɵnextContext(3).index; const i_r12 = i0.ɵɵnextContext(3).index; const ctx_r148 = i0.ɵɵnextContext(); return ctx_r148.onChangeType(child_r39.type, i_r12, j_r20, k_r40); })("onRemoveKeyword", function TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_div_7_div_1_div_2_Template_lib_sub_category_onRemoveKeyword_6_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r135); const k_r40 = restoredCtx.index; const j_r20 = i0.ɵɵnextContext(3).index; const i_r12 = i0.ɵɵnextContext(3).index; const ctx_r151 = i0.ɵɵnextContext(); return ctx_r151.removeKeyword($event.event, i_r12, j_r20, k_r40); })("onAddNewSubLevelField", function TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_div_7_div_1_div_2_Template_lib_sub_category_onAddNewSubLevelField_6_listener() { const restoredCtx = i0.ɵɵrestoreView(_r135); const k_r40 = restoredCtx.index; const j_r20 = i0.ɵɵnextContext(3).index; const i_r12 = i0.ɵɵnextContext(3).index; const ctx_r154 = i0.ɵɵnextContext(); return ctx_r154.onAddNewSubLevelField(i_r12, j_r20, k_r40); })("onExpendMore", function TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_div_7_div_1_div_2_Template_lib_sub_category_onExpendMore_6_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r135); const k_r40 = restoredCtx.index; const j_r20 = i0.ɵɵnextContext(3).index; const i_r12 = i0.ɵɵnextContext(3).index; const ctx_r157 = i0.ɵɵnextContext(); return ctx_r157.onExpendMore($event, i_r12, j_r20, k_r40); })("onChangeLabel", function TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_div_7_div_1_div_2_Template_lib_sub_category_onChangeLabel_6_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r135); const k_r40 = restoredCtx.index; const j_r20 = i0.ɵɵnextContext(3).index; const i_r12 = i0.ɵɵnextContext(3).index; const ctx_r160 = i0.ɵɵnextContext(); return ctx_r160.onChangeLabel($event, i_r12, j_r20, k_r40); })("onCheckedChip", function TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_div_7_div_1_div_2_Template_lib_sub_category_onCheckedChip_6_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r135); const k_r40 = restoredCtx.index; const j_r20 = i0.ɵɵnextContext(3).index; const i_r12 = i0.ɵɵnextContext(3).index; const ctx_r163 = i0.ɵɵnextContext(); return ctx_r163.onCheckedChip($event, i_r12, j_r20, k_r40); })("onDrop", function TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_div_7_div_1_div_2_Template_lib_sub_category_onDrop_6_listener($event) { i0.ɵɵrestoreView(_r135); const ctx_r166 = i0.ɵɵnextContext(7); return ctx_r166.drop($event); })("onCheckedDefault", function TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_div_7_div_1_div_2_Template_lib_sub_category_onCheckedDefault_6_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r135); const k_r40 = restoredCtx.index; const j_r20 = i0.ɵɵnextContext(3).index; const i_r12 = i0.ɵɵnextContext(3).index; const ctx_r167 = i0.ɵɵnextContext(); return ctx_r167.onCheckedDefault($event, i_r12, j_r20, k_r40); })("onEditBlock", function TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_div_7_div_1_div_2_Template_lib_sub_category_onEditBlock_6_listener() { const restoredCtx = i0.ɵɵrestoreView(_r135); const child_r39 = restoredCtx.$implicit; const k_r40 = restoredCtx.index; const j_r20 = i0.ɵɵnextContext(3).index; const i_r12 = i0.ɵɵnextContext(3).index; const ctx_r170 = i0.ɵɵnextContext(); return ctx_r170.onEditBlock(child_r39, i_r12, j_r20, k_r40); });
    i0.ɵɵtemplate(7, TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_div_7_div_1_div_2_div_7_Template, 2, 1, "div", 43);
    i0.ɵɵelementEnd()()()();
    i0.ɵɵtemplate(8, TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_div_7_div_1_div_2_div_8_Template, 6, 0, "div", 58);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const child_r39 = ctx.$implicit;
    const k_r40 = ctx.index;
    const ctx_r173 = i0.ɵɵnextContext(3);
    const field_r19 = ctx_r173.$implicit;
    const j_r20 = ctx_r173.index;
    const ctx_r38 = i0.ɵɵnextContext(4);
    i0.ɵɵstyleProp("width", child_r39.forms && child_r39.forms.length > 0 ? "100%" : ctx_r38.fieldWidth(child_r39.type, field_r19.forms.length, k_r40));
    i0.ɵɵproperty("id", child_r39.key);
    i0.ɵɵadvance(2);
    i0.ɵɵclassMap(child_r39.forms && child_r39.forms.length > 0 ? "sub-category-forms" : "");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", child_r39.forms && child_r39.forms.length > 0);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", child_r39.forms && child_r39.forms.length > 0);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("field", child_r39)("length", field_r19 == null ? null : field_r19.forms == null ? null : field_r19.forms.length)("i", j_r20)("blink", ctx_r38.checkBlink(k_r40, 2) === ctx_r38.newFieldIndex)("j", k_r40)("conditionData", ctx_r38.conditionData);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", child_r39.expandMore);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", (field_r19 == null ? null : field_r19.forms == null ? null : field_r19.forms.length) - 1 === k_r40);
} }
function TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_div_7_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r175 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 53, 34);
    i0.ɵɵlistener("cdkDropListDropped", function TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_div_7_div_1_Template_div_cdkDropListDropped_0_listener($event) { i0.ɵɵrestoreView(_r175); const ctx_r174 = i0.ɵɵnextContext(6); return ctx_r174.drop($event); });
    i0.ɵɵtemplate(2, TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_div_7_div_1_div_2_Template, 9, 15, "div", 54);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const field_r19 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵproperty("cdkDropListData", field_r19.forms);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", field_r19.forms);
} }
function TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_div_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 51);
    i0.ɵɵtemplate(1, TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_div_7_div_1_Template, 3, 2, "div", 52);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const field_r19 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", field_r19.forms);
} }
function TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r180 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 68)(1, "button", 69);
    i0.ɵɵlistener("click", function TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_div_8_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r180); const i_r12 = i0.ɵɵnextContext(4).index; const ctx_r178 = i0.ɵɵnextContext(); return ctx_r178.onAddNewField(i_r12); });
    i0.ɵɵelementStart(2, "span");
    i0.ɵɵtext(3, "Ajouter un champ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "mat-icon");
    i0.ɵɵtext(5, "add");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const j_r20 = i0.ɵɵnextContext().index;
    const category_r11 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵstyleProp("opacity", (category_r11 == null ? null : category_r11.forms == null ? null : category_r11.forms.length) - 1 === j_r20 ? 1 : 0);
    i0.ɵɵproperty("disabled", (category_r11 == null ? null : category_r11.forms == null ? null : category_r11.forms.length) - 1 !== j_r20);
} }
function TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r184 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 36)(1, "div", 37)(2, "div", 38);
    i0.ɵɵtemplate(3, TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_div_3_Template, 4, 0, "div", 39);
    i0.ɵɵelementStart(4, "div", 40);
    i0.ɵɵtemplate(5, TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_div_5_Template, 13, 7, "div", 41);
    i0.ɵɵelementStart(6, "lib-sub-category", 42);
    i0.ɵɵlistener("onCheckValue", function TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_Template_lib_sub_category_onCheckValue_6_listener($event) { i0.ɵɵrestoreView(_r184); const ctx_r183 = i0.ɵɵnextContext(4); return ctx_r183.onCheckValue($event); })("onAddKeywordFromInput", function TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_Template_lib_sub_category_onAddKeywordFromInput_6_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r184); const j_r20 = restoredCtx.index; const i_r12 = i0.ɵɵnextContext(3).index; const ctx_r185 = i0.ɵɵnextContext(); return ctx_r185.addKeywordFromInput($event.event, $event.prev, i_r12, j_r20); })("onKeyPress", function TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_Template_lib_sub_category_onKeyPress_6_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r184); const j_r20 = restoredCtx.index; const i_r12 = i0.ɵɵnextContext(3).index; const ctx_r187 = i0.ɵɵnextContext(); return ctx_r187.onKeyPress($event.event, i_r12, j_r20); })("onAddNewField", function TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_Template_lib_sub_category_onAddNewField_6_listener() { i0.ɵɵrestoreView(_r184); const i_r12 = i0.ɵɵnextContext(3).index; const ctx_r189 = i0.ɵɵnextContext(); return ctx_r189.onAddNewField(i_r12); })("onRemoveField", function TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_Template_lib_sub_category_onRemoveField_6_listener() { const restoredCtx = i0.ɵɵrestoreView(_r184); const j_r20 = restoredCtx.index; const i_r12 = i0.ɵɵnextContext(3).index; const ctx_r191 = i0.ɵɵnextContext(); return ctx_r191.onRemoveField(i_r12, j_r20); })("onChangeType", function TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_Template_lib_sub_category_onChangeType_6_listener() { const restoredCtx = i0.ɵɵrestoreView(_r184); const field_r19 = restoredCtx.$implicit; const j_r20 = restoredCtx.index; const i_r12 = i0.ɵɵnextContext(3).index; const ctx_r193 = i0.ɵɵnextContext(); return ctx_r193.onChangeType(field_r19.type, i_r12, j_r20); })("onRemoveKeyword", function TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_Template_lib_sub_category_onRemoveKeyword_6_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r184); const j_r20 = restoredCtx.index; const i_r12 = i0.ɵɵnextContext(3).index; const ctx_r195 = i0.ɵɵnextContext(); return ctx_r195.removeKeyword($event.event, i_r12, j_r20); })("onAddNewSubLevelField", function TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_Template_lib_sub_category_onAddNewSubLevelField_6_listener() { const restoredCtx = i0.ɵɵrestoreView(_r184); const j_r20 = restoredCtx.index; const i_r12 = i0.ɵɵnextContext(3).index; const ctx_r197 = i0.ɵɵnextContext(); return ctx_r197.onAddNewSubLevelField(i_r12, j_r20); })("onExpendMore", function TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_Template_lib_sub_category_onExpendMore_6_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r184); const j_r20 = restoredCtx.index; const i_r12 = i0.ɵɵnextContext(3).index; const ctx_r199 = i0.ɵɵnextContext(); return ctx_r199.onExpendMore($event, i_r12, j_r20); })("onChangeLabel", function TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_Template_lib_sub_category_onChangeLabel_6_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r184); const j_r20 = restoredCtx.index; const i_r12 = i0.ɵɵnextContext(3).index; const ctx_r201 = i0.ɵɵnextContext(); return ctx_r201.onChangeLabel($event, i_r12, j_r20); })("onCheckedChip", function TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_Template_lib_sub_category_onCheckedChip_6_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r184); const j_r20 = restoredCtx.index; const i_r12 = i0.ɵɵnextContext(3).index; const ctx_r203 = i0.ɵɵnextContext(); return ctx_r203.onCheckedChip($event, i_r12, j_r20); })("onDrop", function TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_Template_lib_sub_category_onDrop_6_listener($event) { i0.ɵɵrestoreView(_r184); const ctx_r205 = i0.ɵɵnextContext(4); return ctx_r205.drop($event); })("onCheckedDefault", function TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_Template_lib_sub_category_onCheckedDefault_6_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r184); const j_r20 = restoredCtx.index; const i_r12 = i0.ɵɵnextContext(3).index; const ctx_r206 = i0.ɵɵnextContext(); return ctx_r206.onCheckedDefault($event, i_r12, j_r20); })("onEditBlock", function TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_Template_lib_sub_category_onEditBlock_6_listener() { const restoredCtx = i0.ɵɵrestoreView(_r184); const field_r19 = restoredCtx.$implicit; const j_r20 = restoredCtx.index; const i_r12 = i0.ɵɵnextContext(3).index; const ctx_r208 = i0.ɵɵnextContext(); return ctx_r208.onEditBlock(field_r19, i_r12, j_r20); });
    i0.ɵɵtemplate(7, TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_div_7_Template, 2, 1, "div", 43);
    i0.ɵɵelementEnd()()()();
    i0.ɵɵtemplate(8, TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_div_8_Template, 6, 3, "div", 44);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const field_r19 = ctx.$implicit;
    const j_r20 = ctx.index;
    const ctx_r210 = i0.ɵɵnextContext(3);
    const category_r11 = ctx_r210.$implicit;
    const i_r12 = ctx_r210.index;
    const ctx_r18 = i0.ɵɵnextContext();
    i0.ɵɵstyleProp("width", field_r19.forms && field_r19.forms.length > 0 ? "100%" : ctx_r18.fieldWidth(field_r19.type, category_r11.forms.length, j_r20));
    i0.ɵɵproperty("id", field_r19.key);
    i0.ɵɵadvance(2);
    i0.ɵɵclassMap(field_r19.forms && field_r19.forms.length > 0 ? "sub-category-forms" : "");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", field_r19.forms);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", field_r19.forms);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("field", field_r19)("length", category_r11 == null ? null : category_r11.forms == null ? null : category_r11.forms.length)("i", i_r12)("j", j_r20)("blink", ctx_r18.checkBlink(j_r20, 1) === ctx_r18.newFieldIndex)("conditionData", ctx_r18.conditionData);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", field_r19.expandMore);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", (category_r11 == null ? null : category_r11.forms == null ? null : category_r11.forms.length) - 1 === j_r20);
} }
function TemplateProfileCreateComponent_section_33_div_15_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_Template, 9, 15, "div", 35);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const category_r11 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", category_r11.forms);
} }
function TemplateProfileCreateComponent_section_33_div_15_Template(rf, ctx) { if (rf & 1) {
    const _r213 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 33, 34);
    i0.ɵɵlistener("cdkDropListDropped", function TemplateProfileCreateComponent_section_33_div_15_Template_div_cdkDropListDropped_0_listener($event) { i0.ɵɵrestoreView(_r213); const ctx_r212 = i0.ɵɵnextContext(2); return ctx_r212.drop($event); });
    i0.ɵɵtemplate(2, TemplateProfileCreateComponent_section_33_div_15_ng_container_2_Template, 2, 1, "ng-container", 5);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const category_r11 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("cdkDropListData", category_r11.forms);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", category_r11.expandMore);
} }
function TemplateProfileCreateComponent_section_33_Template(rf, ctx) { if (rf & 1) {
    const _r217 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "section", 23)(1, "div", 24)(2, "button", 25);
    i0.ɵɵlistener("click", function TemplateProfileCreateComponent_section_33_Template_button_click_2_listener($event) { return $event.preventDefault(); });
    i0.ɵɵelementStart(3, "mat-icon", 26);
    i0.ɵɵtext(4, "drag_indicator");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(5, "div", 27)(6, "div", 28);
    i0.ɵɵlistener("click", function TemplateProfileCreateComponent_section_33_Template_div_click_6_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r217); const category_r11 = restoredCtx.$implicit; const i_r12 = restoredCtx.index; const ctx_r216 = i0.ɵɵnextContext(); return ctx_r216.onExpendMore({ event: $event, field: category_r11 }, i_r12); });
    i0.ɵɵelementStart(7, "div")(8, "p", 29);
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "p", 30);
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(12, "button", 31);
    i0.ɵɵlistener("click", function TemplateProfileCreateComponent_section_33_Template_button_click_12_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r217); const category_r11 = restoredCtx.$implicit; const i_r12 = restoredCtx.index; const ctx_r218 = i0.ɵɵnextContext(); return ctx_r218.onExpendMore({ event: $event, field: category_r11 }, i_r12); });
    i0.ɵɵtemplate(13, TemplateProfileCreateComponent_section_33_mat_icon_13_Template, 2, 0, "mat-icon", 5);
    i0.ɵɵtemplate(14, TemplateProfileCreateComponent_section_33_mat_icon_14_Template, 2, 0, "mat-icon", 5);
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(15, TemplateProfileCreateComponent_section_33_div_15_Template, 3, 2, "div", 32);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const category_r11 = ctx.$implicit;
    const i_r12 = ctx.index;
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵclassMap(ctx_r4.editIndex === i_r12 ? "active" : "");
    i0.ɵɵstyleProp("padding-bottom", category_r11.expandMore ? "50px" : "10px");
    i0.ɵɵproperty("id", category_r11.name)("ngxScrollTo", "#" + category_r11.name);
    i0.ɵɵadvance(9);
    i0.ɵɵtextInterpolate1(" ", category_r11.name, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" Listes des informations n\u00E9cessaires pour la cr\u00E9ation de ", ctx_r4.catNameStart(category_r11.name) ? "l'" + category_r11.name : category_r11.name, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", !category_r11.expandMore);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", category_r11.expandMore);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", category_r11.forms);
} }
function TemplateProfileCreateComponent_div_42_ng_container_32_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r229 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 103)(1, "mat-slide-toggle", 104);
    i0.ɵɵlistener("ngModelChange", function TemplateProfileCreateComponent_div_42_ng_container_32_div_6_Template_mat_slide_toggle_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r229); const ctx_r228 = i0.ɵɵnextContext(3); return ctx_r228.currentEditBlock.defaultValue = $event; });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "span", 105);
    i0.ɵɵtext(3, "Valeur par d\u00E9faut");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r220 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", ctx_r220.currentEditBlock.defaultValue)("ngModelOptions", i0.ɵɵpureFunction0(2, _c0));
} }
function TemplateProfileCreateComponent_div_42_ng_container_32_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r231 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 106)(1, "mat-checkbox", 107);
    i0.ɵɵlistener("ngModelChange", function TemplateProfileCreateComponent_div_42_ng_container_32_div_7_Template_mat_checkbox_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r231); const ctx_r230 = i0.ɵɵnextContext(3); return ctx_r230.currentEditBlock.value = $event; });
    i0.ɵɵtext(2, " Coch\u00E9 par d\u00E9fault ");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r221 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", ctx_r221.currentEditBlock.value)("ngModelOptions", i0.ɵɵpureFunction0(2, _c0));
} }
function TemplateProfileCreateComponent_div_42_ng_container_32_mat_form_field_8_mat_chip_6_Template(rf, ctx) { if (rf & 1) {
    const _r238 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-chip", 114);
    i0.ɵɵlistener("dblclick", function TemplateProfileCreateComponent_div_42_ng_container_32_mat_form_field_8_mat_chip_6_Template_mat_chip_dblclick_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r238); const option_r236 = restoredCtx.$implicit; const ctx_r237 = i0.ɵɵnextContext(4); return ctx_r237.onCheckedChipBlock(option_r236, ctx_r237.currentEditBlock); })("click", function TemplateProfileCreateComponent_div_42_ng_container_32_mat_form_field_8_mat_chip_6_Template_mat_chip_click_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r238); const option_r236 = restoredCtx.$implicit; const ctx_r239 = i0.ɵɵnextContext(4); return ctx_r239.onEditChip(option_r236); })("removed", function TemplateProfileCreateComponent_div_42_ng_container_32_mat_form_field_8_mat_chip_6_Template_mat_chip_removed_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r238); const option_r236 = restoredCtx.$implicit; const ctx_r240 = i0.ɵɵnextContext(4); return ctx_r240.removeKeywordBlock(option_r236, ctx_r240.currentEditBlock); });
    i0.ɵɵtext(1);
    i0.ɵɵelementStart(2, "mat-icon", 115);
    i0.ɵɵtext(3, "cancel");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const option_r236 = ctx.$implicit;
    i0.ɵɵproperty("selected", option_r236.checked)("value", option_r236.value)("removable", true);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", option_r236.value, " ");
} }
function TemplateProfileCreateComponent_div_42_ng_container_32_mat_form_field_8_Template(rf, ctx) { if (rf & 1) {
    const _r242 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-form-field", 108)(1, "mat-label");
    i0.ɵɵtext(2, " Valeur par d\u00E9fault ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "mat-chip-list", 109, 110);
    i0.ɵɵlistener("cdkDropListDropped", function TemplateProfileCreateComponent_div_42_ng_container_32_mat_form_field_8_Template_mat_chip_list_cdkDropListDropped_3_listener($event) { i0.ɵɵrestoreView(_r242); const ctx_r241 = i0.ɵɵnextContext(3); return ctx_r241.drop($event); });
    i0.ɵɵtemplate(6, TemplateProfileCreateComponent_div_42_ng_container_32_mat_form_field_8_mat_chip_6_Template, 4, 4, "mat-chip", 111);
    i0.ɵɵelementStart(7, "input", 112, 113);
    i0.ɵɵlistener("matChipInputTokenEnd", function TemplateProfileCreateComponent_div_42_ng_container_32_mat_form_field_8_Template_input_matChipInputTokenEnd_7_listener($event) { i0.ɵɵrestoreView(_r242); const ctx_r243 = i0.ɵɵnextContext(3); return ctx_r243.addKeywordFromInputBlock($event, ctx_r243.currentEditBlock, ctx_r243.prevValue); })("keyup", function TemplateProfileCreateComponent_div_42_ng_container_32_mat_form_field_8_Template_input_keyup_7_listener($event) { i0.ɵɵrestoreView(_r242); const ctx_r244 = i0.ɵɵnextContext(3); return ctx_r244.onKeyUpChip($event, ctx_r244.currentEditBlock); })("ngModelChange", function TemplateProfileCreateComponent_div_42_ng_container_32_mat_form_field_8_Template_input_ngModelChange_7_listener($event) { i0.ɵɵrestoreView(_r242); const ctx_r245 = i0.ɵɵnextContext(3); return ctx_r245.currentChip = $event; });
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const _r233 = i0.ɵɵreference(5);
    const ctx_r222 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("cdkDropListData", ctx_r222.currentEditBlock.defaultValue);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", ctx_r222.currentEditBlock.defaultValue);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("matChipInputFor", _r233)("matChipInputAddOnBlur", true)("matChipInputSeparatorKeyCodes", ctx_r222.separatorKeysCodes)("ngModel", ctx_r222.currentChip)("ngModelOptions", i0.ɵɵpureFunction0(7, _c0));
} }
function TemplateProfileCreateComponent_div_42_ng_container_32_mat_form_field_9_Template(rf, ctx) { if (rf & 1) {
    const _r247 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-form-field", 86)(1, "mat-label");
    i0.ɵɵtext(2, "Valeur par d\u00E9fault");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "input", 116);
    i0.ɵɵlistener("ngModelChange", function TemplateProfileCreateComponent_div_42_ng_container_32_mat_form_field_9_Template_input_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r247); const ctx_r246 = i0.ɵɵnextContext(3); return ctx_r246.currentEditBlock.defaultValue = $event; });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r223 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngModelOptions", i0.ɵɵpureFunction0(2, _c0))("ngModel", ctx_r223.currentEditBlock.defaultValue);
} }
function TemplateProfileCreateComponent_div_42_ng_container_32_mat_form_field_10_Template(rf, ctx) { if (rf & 1) {
    const _r249 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-form-field", 86)(1, "mat-label");
    i0.ɵɵtext(2, "Valeur par d\u00E9fault");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "input", 117);
    i0.ɵɵlistener("ngModelChange", function TemplateProfileCreateComponent_div_42_ng_container_32_mat_form_field_10_Template_input_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r249); const ctx_r248 = i0.ɵɵnextContext(3); return ctx_r248.currentEditBlock.defaultValue = $event; });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r224 = i0.ɵɵnextContext(3);
    i0.ɵɵstyleProp("opacity", ctx_r224.currentEditBlock.type !== "tel" ? 1 : 0);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("type", ctx_r224.currentEditBlock.type)("disabled", ctx_r224.currentEditBlock.type === "tel")("ngModelOptions", i0.ɵɵpureFunction0(6, _c0))("ngModel", ctx_r224.currentEditBlock.defaultValue);
} }
function TemplateProfileCreateComponent_div_42_ng_container_32_ng_container_21_mat_option_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 122);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r254 = ctx.$implicit;
    i0.ɵɵproperty("value", item_r254.key);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1("", item_r254.label, " ");
} }
function TemplateProfileCreateComponent_div_42_ng_container_32_ng_container_21_mat_form_field_6_mat_option_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 122);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r256 = ctx.$implicit;
    i0.ɵɵproperty("value", item_r256.key);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1("", item_r256.label, " ");
} }
function TemplateProfileCreateComponent_div_42_ng_container_32_ng_container_21_mat_form_field_6_Template(rf, ctx) { if (rf & 1) {
    const _r258 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-form-field", 118)(1, "mat-label");
    i0.ɵɵtext(2, "Selectionnez la sous cat\u00E9gorie (s1)");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "mat-select", 119);
    i0.ɵɵlistener("ngModelChange", function TemplateProfileCreateComponent_div_42_ng_container_32_ng_container_21_mat_form_field_6_Template_mat_select_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r258); const ctx_r257 = i0.ɵɵnextContext(4); return ctx_r257.s1 = $event; })("selectionChange", function TemplateProfileCreateComponent_div_42_ng_container_32_ng_container_21_mat_form_field_6_Template_mat_select_selectionChange_3_listener($event) { i0.ɵɵrestoreView(_r258); const ctx_r259 = i0.ɵɵnextContext(4); return ctx_r259.onSelectCondition("s1", "s2", $event.value); });
    i0.ɵɵtemplate(4, TemplateProfileCreateComponent_div_42_ng_container_32_ng_container_21_mat_form_field_6_mat_option_4_Template, 2, 2, "mat-option", 120);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r251 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngModel", ctx_r251.s1)("ngModelOptions", i0.ɵɵpureFunction0(3, _c0));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r251.conditionData.s1);
} }
function TemplateProfileCreateComponent_div_42_ng_container_32_ng_container_21_mat_form_field_7_mat_option_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 122);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r261 = ctx.$implicit;
    i0.ɵɵproperty("value", item_r261.key);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1("", item_r261.label, " ");
} }
function TemplateProfileCreateComponent_div_42_ng_container_32_ng_container_21_mat_form_field_7_Template(rf, ctx) { if (rf & 1) {
    const _r263 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-form-field", 118)(1, "mat-label");
    i0.ɵɵtext(2, "Selectionnez la sous cat\u00E9gorie (s2)");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "mat-select", 119);
    i0.ɵɵlistener("ngModelChange", function TemplateProfileCreateComponent_div_42_ng_container_32_ng_container_21_mat_form_field_7_Template_mat_select_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r263); const ctx_r262 = i0.ɵɵnextContext(4); return ctx_r262.s2 = $event; })("selectionChange", function TemplateProfileCreateComponent_div_42_ng_container_32_ng_container_21_mat_form_field_7_Template_mat_select_selectionChange_3_listener($event) { i0.ɵɵrestoreView(_r263); const ctx_r264 = i0.ɵɵnextContext(4); return ctx_r264.onSelectCondition("s2", "s3", $event.value); });
    i0.ɵɵtemplate(4, TemplateProfileCreateComponent_div_42_ng_container_32_ng_container_21_mat_form_field_7_mat_option_4_Template, 2, 2, "mat-option", 120);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r252 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngModel", ctx_r252.s2)("ngModelOptions", i0.ɵɵpureFunction0(3, _c0));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r252.conditionData.s2);
} }
function TemplateProfileCreateComponent_div_42_ng_container_32_ng_container_21_mat_form_field_8_mat_option_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 122);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r266 = ctx.$implicit;
    i0.ɵɵproperty("value", item_r266.key);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1("", item_r266.label, " ");
} }
function TemplateProfileCreateComponent_div_42_ng_container_32_ng_container_21_mat_form_field_8_Template(rf, ctx) { if (rf & 1) {
    const _r268 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-form-field", 118)(1, "mat-label");
    i0.ɵɵtext(2, "Selectionnez la sous cat\u00E9gorie (s3)");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "mat-select", 119);
    i0.ɵɵlistener("ngModelChange", function TemplateProfileCreateComponent_div_42_ng_container_32_ng_container_21_mat_form_field_8_Template_mat_select_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r268); const ctx_r267 = i0.ɵɵnextContext(4); return ctx_r267.s3 = $event; })("selectionChange", function TemplateProfileCreateComponent_div_42_ng_container_32_ng_container_21_mat_form_field_8_Template_mat_select_selectionChange_3_listener($event) { i0.ɵɵrestoreView(_r268); const ctx_r269 = i0.ɵɵnextContext(4); return ctx_r269.onSelectCondition("s3", "s4", $event.value); });
    i0.ɵɵtemplate(4, TemplateProfileCreateComponent_div_42_ng_container_32_ng_container_21_mat_form_field_8_mat_option_4_Template, 2, 2, "mat-option", 120);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r253 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngModel", ctx_r253.s3)("ngModelOptions", i0.ɵɵpureFunction0(3, _c0));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r253.conditionData.s3);
} }
function TemplateProfileCreateComponent_div_42_ng_container_32_ng_container_21_Template(rf, ctx) { if (rf & 1) {
    const _r271 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "mat-form-field", 118)(2, "mat-label");
    i0.ɵɵtext(3, "Selectionnez la cat\u00E9gorie");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "mat-select", 119);
    i0.ɵɵlistener("ngModelChange", function TemplateProfileCreateComponent_div_42_ng_container_32_ng_container_21_Template_mat_select_ngModelChange_4_listener($event) { i0.ɵɵrestoreView(_r271); const ctx_r270 = i0.ɵɵnextContext(3); return ctx_r270.all = $event; })("selectionChange", function TemplateProfileCreateComponent_div_42_ng_container_32_ng_container_21_Template_mat_select_selectionChange_4_listener($event) { i0.ɵɵrestoreView(_r271); const ctx_r272 = i0.ɵɵnextContext(3); return ctx_r272.onSelectCondition("all", "s1", $event.value); });
    i0.ɵɵtemplate(5, TemplateProfileCreateComponent_div_42_ng_container_32_ng_container_21_mat_option_5_Template, 2, 2, "mat-option", 120);
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(6, TemplateProfileCreateComponent_div_42_ng_container_32_ng_container_21_mat_form_field_6_Template, 5, 4, "mat-form-field", 121);
    i0.ɵɵtemplate(7, TemplateProfileCreateComponent_div_42_ng_container_32_ng_container_21_mat_form_field_7_Template, 5, 4, "mat-form-field", 121);
    i0.ɵɵtemplate(8, TemplateProfileCreateComponent_div_42_ng_container_32_ng_container_21_mat_form_field_8_Template, 5, 4, "mat-form-field", 121);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r225 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngModel", ctx_r225.all)("ngModelOptions", i0.ɵɵpureFunction0(6, _c0));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r225.conditionData.all);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", (ctx_r225.conditionData.s1 == null ? null : ctx_r225.conditionData.s1.length) > 0);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", (ctx_r225.conditionData.s2 == null ? null : ctx_r225.conditionData.s2.length) > 0);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", (ctx_r225.conditionData.s3 == null ? null : ctx_r225.conditionData.s3.length) > 0);
} }
function TemplateProfileCreateComponent_div_42_ng_container_32_mat_radio_group_22_mat_radio_button_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-radio-button", 125);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r274 = ctx.$implicit;
    i0.ɵɵproperty("value", item_r274.value);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", item_r274.value, " ");
} }
function TemplateProfileCreateComponent_div_42_ng_container_32_mat_radio_group_22_Template(rf, ctx) { if (rf & 1) {
    const _r276 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-radio-group", 123);
    i0.ɵɵlistener("ngModelChange", function TemplateProfileCreateComponent_div_42_ng_container_32_mat_radio_group_22_Template_mat_radio_group_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r276); const ctx_r275 = i0.ɵɵnextContext(3); return ctx_r275.currentEditBlock.condition.value = $event; });
    i0.ɵɵtemplate(1, TemplateProfileCreateComponent_div_42_ng_container_32_mat_radio_group_22_mat_radio_button_1_Template, 2, 2, "mat-radio-button", 124);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r226 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("ngModel", ctx_r226.currentEditBlock.condition.value)("ngModelOptions", i0.ɵɵpureFunction0(3, _c0));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r226.onGetDefaultValue());
} }
function TemplateProfileCreateComponent_div_42_ng_container_32_button_24_Template(rf, ctx) { if (rf & 1) {
    const _r278 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 101);
    i0.ɵɵlistener("click", function TemplateProfileCreateComponent_div_42_ng_container_32_button_24_Template_button_click_0_listener($event) { i0.ɵɵrestoreView(_r278); const ctx_r277 = i0.ɵɵnextContext(3); return ctx_r277.onAddNewSubLevelFieldBlock($event); });
    i0.ɵɵtext(1, "Sous-cat\u00E9gorie ");
    i0.ɵɵelementStart(2, "mat-icon");
    i0.ɵɵtext(3, "device_hub ");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r227 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("disabled", !ctx_r227.currentEditBlock.editable);
} }
const _c1 = function () { return ["select", "radio", "checkbox_multiple"]; };
function TemplateProfileCreateComponent_div_42_ng_container_32_Template(rf, ctx) { if (rf & 1) {
    const _r280 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "mat-form-field", 86)(2, "mat-label");
    i0.ɵɵtext(3, "Nom / Label");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "input", 87);
    i0.ɵɵlistener("ngModelChange", function TemplateProfileCreateComponent_div_42_ng_container_32_Template_input_ngModelChange_4_listener($event) { i0.ɵɵrestoreView(_r280); const ctx_r279 = i0.ɵɵnextContext(2); return ctx_r279.currentEditBlock.label = $event; });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementContainerStart(5, 88);
    i0.ɵɵtemplate(6, TemplateProfileCreateComponent_div_42_ng_container_32_div_6_Template, 4, 3, "div", 89);
    i0.ɵɵtemplate(7, TemplateProfileCreateComponent_div_42_ng_container_32_div_7_Template, 3, 3, "div", 90);
    i0.ɵɵtemplate(8, TemplateProfileCreateComponent_div_42_ng_container_32_mat_form_field_8_Template, 9, 8, "mat-form-field", 91);
    i0.ɵɵtemplate(9, TemplateProfileCreateComponent_div_42_ng_container_32_mat_form_field_9_Template, 4, 3, "mat-form-field", 92);
    i0.ɵɵtemplate(10, TemplateProfileCreateComponent_div_42_ng_container_32_mat_form_field_10_Template, 4, 7, "mat-form-field", 93);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementStart(11, "div", 94)(12, "div", 95)(13, "span");
    i0.ɵɵtext(14, "Obligatoire");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "mat-slide-toggle", 96);
    i0.ɵɵlistener("ngModelChange", function TemplateProfileCreateComponent_div_42_ng_container_32_Template_mat_slide_toggle_ngModelChange_15_listener($event) { i0.ɵɵrestoreView(_r280); const ctx_r281 = i0.ɵɵnextContext(2); return ctx_r281.currentEditBlock.isMandatory = $event; });
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(16, "div", 97)(17, "div", 95)(18, "span");
    i0.ɵɵtext(19, "Visibilit\u00E9 conditionnelle");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(20, "mat-slide-toggle", 96);
    i0.ɵɵlistener("ngModelChange", function TemplateProfileCreateComponent_div_42_ng_container_32_Template_mat_slide_toggle_ngModelChange_20_listener($event) { i0.ɵɵrestoreView(_r280); const ctx_r282 = i0.ɵɵnextContext(2); return ctx_r282.currentEditBlock.isConditional = $event; });
    i0.ɵɵelementEnd()()();
    i0.ɵɵtemplate(21, TemplateProfileCreateComponent_div_42_ng_container_32_ng_container_21_Template, 9, 7, "ng-container", 5);
    i0.ɵɵtemplate(22, TemplateProfileCreateComponent_div_42_ng_container_32_mat_radio_group_22_Template, 2, 4, "mat-radio-group", 98);
    i0.ɵɵelementStart(23, "div", 99);
    i0.ɵɵtemplate(24, TemplateProfileCreateComponent_div_42_ng_container_32_button_24_Template, 4, 1, "button", 100);
    i0.ɵɵelementStart(25, "button", 101);
    i0.ɵɵlistener("click", function TemplateProfileCreateComponent_div_42_ng_container_32_Template_button_click_25_listener($event) { i0.ɵɵrestoreView(_r280); const ctx_r283 = i0.ɵɵnextContext(2); return ctx_r283.onDuplicatedBlock($event); });
    i0.ɵɵtext(26, "Dupliquer le bloc");
    i0.ɵɵelementStart(27, "mat-icon");
    i0.ɵɵtext(28, "filter_none");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(29, "button", 102);
    i0.ɵɵlistener("click", function TemplateProfileCreateComponent_div_42_ng_container_32_Template_button_click_29_listener($event) { i0.ɵɵrestoreView(_r280); const ctx_r284 = i0.ɵɵnextContext(2); return ctx_r284.onRemoveFieldBlock($event); });
    i0.ɵɵtext(30, "Supprimer le bloc ");
    i0.ɵɵelementStart(31, "mat-icon");
    i0.ɵɵtext(32, " delete ");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r219 = i0.ɵɵnextContext(2);
    let tmp_12_0;
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngModel", ctx_r219.currentEditBlock.label)("ngModelOptions", i0.ɵɵpureFunction0(16, _c0));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitch", ctx_r219.currentEditBlock.type);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", "toggle");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", "checkbox");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", i0.ɵɵpureFunction0(17, _c1).includes(ctx_r219.currentEditBlock.type) ? ctx_r219.currentEditBlock.type : !ctx_r219.currentEditBlock.type);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", "textarea");
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("ngModel", ctx_r219.currentEditBlock.isMandatory)("ngModelOptions", i0.ɵɵpureFunction0(18, _c0));
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngModel", ctx_r219.currentEditBlock.isConditional)("ngModelOptions", i0.ɵɵpureFunction0(19, _c0));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r219.currentEditBlock == null ? null : ctx_r219.currentEditBlock.isConditional);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r219.currentEditBlock.isConditional && ctx_r219.onGetDefaultValue() && ((tmp_12_0 = ctx_r219.onGetDefaultValue()) == null ? null : tmp_12_0.length) > 0);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r219.paramsIndex.length < 4);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("disabled", !ctx_r219.currentEditBlock.editable);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("disabled", !ctx_r219.currentEditBlock.editable);
} }
function TemplateProfileCreateComponent_div_42_Template(rf, ctx) { if (rf & 1) {
    const _r286 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 70)(1, "h3");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 71)(4, "mat-form-field", 72)(5, "mat-label");
    i0.ɵɵtext(6, "Type de bloc");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "mat-select", 73);
    i0.ɵɵlistener("click", function TemplateProfileCreateComponent_div_42_Template_mat_select_click_7_listener() { i0.ɵɵrestoreView(_r286); const ctx_r285 = i0.ɵɵnextContext(); return ctx_r285.onOpenTypeDialog(ctx_r285.currentEditBlock); })("ngModelChange", function TemplateProfileCreateComponent_div_42_Template_mat_select_ngModelChange_7_listener($event) { i0.ɵɵrestoreView(_r286); const ctx_r287 = i0.ɵɵnextContext(); return ctx_r287.currentEditBlock.type = $event; })("ngModelChange", function TemplateProfileCreateComponent_div_42_Template_mat_select_ngModelChange_7_listener() { i0.ɵɵrestoreView(_r286); const ctx_r288 = i0.ɵɵnextContext(); return ctx_r288.onChangeTypeBlock(ctx_r288.currentEditBlock); });
    i0.ɵɵelementStart(8, "mat-option", 74);
    i0.ɵɵtext(9, "Text(80)");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "mat-option", 75);
    i0.ɵɵtext(11, "Text(80+)");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "mat-option", 76);
    i0.ɵɵtext(13, "Radio");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "mat-option", 77);
    i0.ɵɵtext(15, "Selecteur");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "mat-option", 78);
    i0.ɵɵtext(17, "Toggle");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "mat-option", 79);
    i0.ɵɵtext(19, "Checkbox");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(20, "mat-option", 80);
    i0.ɵɵtext(21, "Checkbox multiple");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(22, "mat-option", 81);
    i0.ɵɵtext(23, "Email");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(24, "mat-option", 82);
    i0.ɵɵtext(25, "Password");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(26, "mat-option", 83);
    i0.ɵɵtext(27, "Date");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(28, "mat-option", 84);
    i0.ɵɵtext(29, "Phone");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(30, "mat-option", 85);
    i0.ɵɵtext(31, "Aucun");
    i0.ɵɵelementEnd()()();
    i0.ɵɵtemplate(32, TemplateProfileCreateComponent_div_42_ng_container_32_Template, 33, 20, "ng-container", 5);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("Param\u00E8tre du bloc ", ctx_r5.currentEditBlock.label, "");
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngModel", ctx_r5.currentEditBlock.type)("ngModelOptions", i0.ɵɵpureFunction0(4, _c0));
    i0.ɵɵadvance(25);
    i0.ɵɵproperty("ngIf", ctx_r5.currentEditBlock.type !== "none");
} }
function TemplateProfileCreateComponent_div_43_mat_option_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 122);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r290 = ctx.$implicit;
    i0.ɵɵproperty("value", item_r290.value);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(item_r290.value);
} }
function TemplateProfileCreateComponent_div_43_Template(rf, ctx) { if (rf & 1) {
    const _r292 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 70)(1, "h3");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 126)(4, "mat-form-field", 86)(5, "mat-label");
    i0.ɵɵtext(6, "Nom de la section");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "input", 87);
    i0.ɵɵlistener("ngModelChange", function TemplateProfileCreateComponent_div_43_Template_input_ngModelChange_7_listener() { i0.ɵɵrestoreView(_r292); const ctx_r291 = i0.ɵɵnextContext(); return ctx_r291.onChangeCategoryName(); })("ngModelChange", function TemplateProfileCreateComponent_div_43_Template_input_ngModelChange_7_listener($event) { i0.ɵɵrestoreView(_r292); const ctx_r293 = i0.ɵɵnextContext(); return ctx_r293.currentEditBlock.name = $event; });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(8, "mat-form-field", 118)(9, "mat-label");
    i0.ɵɵtext(10, "Equipe de gestion");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "mat-select", 127);
    i0.ɵɵlistener("ngModelChange", function TemplateProfileCreateComponent_div_43_Template_mat_select_ngModelChange_11_listener($event) { i0.ɵɵrestoreView(_r292); const ctx_r294 = i0.ɵɵnextContext(); return ctx_r294.currentEditBlock.selector.value = $event; });
    i0.ɵɵtemplate(12, TemplateProfileCreateComponent_div_43_mat_option_12_Template, 2, 2, "mat-option", 120);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(13, "div", 99)(14, "button", 128);
    i0.ɵɵlistener("click", function TemplateProfileCreateComponent_div_43_Template_button_click_14_listener($event) { i0.ɵɵrestoreView(_r292); const ctx_r295 = i0.ɵɵnextContext(); return ctx_r295.onAddNewSubLevelFieldBlock($event); });
    i0.ɵɵtext(15, "Sous-cat\u00E9gorie ");
    i0.ɵɵelementStart(16, "mat-icon");
    i0.ɵɵtext(17, "device_hub ");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(18, "button", 128);
    i0.ɵɵlistener("click", function TemplateProfileCreateComponent_div_43_Template_button_click_18_listener($event) { i0.ɵɵrestoreView(_r292); const ctx_r296 = i0.ɵɵnextContext(); return ctx_r296.onDuplicatedBlock($event); });
    i0.ɵɵtext(19, "Dupliquer le bloc");
    i0.ɵɵelementStart(20, "mat-icon");
    i0.ɵɵtext(21, "filter_none");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(22, "button", 102);
    i0.ɵɵlistener("click", function TemplateProfileCreateComponent_div_43_Template_button_click_22_listener($event) { i0.ɵɵrestoreView(_r292); const ctx_r297 = i0.ɵɵnextContext(); return ctx_r297.onRemoveFieldBlock($event); });
    i0.ɵɵtext(23, "Supprimer le bloc ");
    i0.ɵɵelementStart(24, "mat-icon");
    i0.ɵɵtext(25, " delete");
    i0.ɵɵelementEnd()()()()();
} if (rf & 2) {
    const ctx_r6 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("Param\u00E8tre de la section ", ctx_r6.currentEditBlock.name, "");
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngModel", ctx_r6.currentEditBlock.name)("ngModelOptions", i0.ɵɵpureFunction0(7, _c0));
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngModel", ctx_r6.currentEditBlock.selector.value)("ngModelOptions", i0.ɵɵpureFunction0(8, _c0));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r6.currentEditBlock.selector.defaultValue);
    i0.ɵɵadvance(10);
    i0.ɵɵproperty("disabled", !ctx_r6.currentEditBlock.editable);
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
        this.loading = false;
        this.editIndex = null;
        this.showProfileName = true;
        this.liveLabel = "Publier";
        this.draftLabel = "Enregistrer le brouillon";
        this.picto = "";
        this.all = "";
        this.s1 = "";
        this.s2 = "";
        this.s3 = "";
        this.s4 = "";
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
                        //forms: []
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
                if (profil) {
                    this.form.patchValue(profil);
                }
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
    onScroll(event) {
        const sections = document.querySelectorAll("section");
        const navLi = document.querySelectorAll(".create-profile-menus ul li");
        let current = "";
        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            if (event.target.scrollTop > sectionTop - 100) {
                current = section.getAttribute("id");
            }
        });
        navLi.forEach((li) => {
            const id = li.getAttribute('id');
            if (id?.substring(0, id.length - 1) === current) {
                li.classList.add("active");
            }
            else {
                li.classList.remove('active');
            }
        });
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
    async ngOnInit() {
        this.id = this.route.snapshot.paramMap.get("id");
        this.form.valueChanges.subscribe(c => {
            this.canExit = false;
        });
        if (this.id !== "0") {
            setTimeout(async () => {
                this.currentProfil = await this.service.getProfil(this.id);
                this.form.patchValue(this.currentProfil);
                this.categories = this.currentProfil.categories.map((data) => ({ ...data, key: data.key || data.name.replace(/\s/g, '') }));
            }, 500);
        }
        else {
            this.showProfileName = true;
            this.categories = this.defaultCategorie;
        }
        setTimeout(async () => {
            this.tags = await this.service.getAllTags();
        }, 500);
        this.getConditionValues();
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
                    label: `Label à renommer (${1})`,
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
            label: `Label à renommer (${forms.length + 1})`,
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
            //forms: []
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
            //forms: []
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
    async onSubmit(isPublish) {
        this.isSubmitted = isPublish;
        if (this.form.valid && this.onChangeCategory()) {
            this.loading = true;
            if (isPublish) {
                this.liveLabel = "Chargement....";
            }
            else {
                this.draftLabel = "Chargement...";
            }
            const result = this.id !== "0"
                ? await this.service.updateProfil({
                    ...this.currentProfil,
                    ...this.form.value,
                    Status: isPublish,
                    categories: this.categories,
                })
                : await this.service.createProfil({
                    ...this.form.value,
                    Status: isPublish,
                    categories: this.categories,
                });
            if (result) {
                localStorage.removeItem('profil');
                await this.service.getAllProfil();
                this.canExit = true;
                this.loading = false;
                this.router.navigate([this.service.mainPath + '/template']);
            }
            else {
                this.loading = false;
                console.log("errror......");
            }
            if (isPublish) {
                this.liveLabel = "Publié";
            }
            else {
                this.draftLabel = "Enregistrer le brouillon";
            }
        }
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
        console.log(`${level} - ${subLevel} - ${value}`);
        const condition = this.conditionData[level].find((data) => data.key === value);
        if (level === "all") {
            this.conditionData = {
                ...this.conditionData,
                s1: [],
                s2: [],
                s3: [],
                defaultValue: []
            };
        }
        this.currentEditBlock.condition = condition;
        this.onGetDefaultValue();
        if (condition.forms.length > 0) {
            this.conditionData[subLevel] = condition.forms;
        }
    }
    onGetDefaultValue() {
        if (this.currentEditBlock.isConditional && this.currentEditBlock?.condition?.location) {
            const { s0Index, ...rest } = this.currentEditBlock.condition.location;
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
        this.isBlock = true;
        this.currentEditBlock = block;
        console.log(params);
        const { condition } = this.currentEditBlock;
        console.log(this.currentEditBlock);
        if (condition && condition.location) {
            const location = condition.location;
            if (location?.s0Index >= 0) {
                this.all = this.categories[location.s0Index].key;
                console.log("location?.s0Index", this.all);
            }
            if (location?.s1Index >= 0) {
                this.s1 = this.categories[location.s0Index].forms[location.s1Index].key;
            }
            if (location?.s2Index >= 0) {
                this.s2 = this.categories[location.s0Index].forms[location.s1Index].forms[location.s2Index].key;
            }
            if (location?.s3Index >= 0) {
                this.s3 = this.categories[location.s0Index].forms[location.s1Index].forms[location.s2Index].forms[location.s3Index].key;
            }
            if (location?.s4Index >= 0) {
                this.s4 = this.categories[location.s0Index].forms[location.s1Index].forms[location.s2Index].forms[location.s3Index].forms[location.s4Index].key;
            }
        }
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
        const cloneEditable = this.onEditableBlock({ ...this.currentEditBlock, name: this.currentEditBlock.name + ' - copie' });
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
                                return {
                                    ...child,
                                    editable: true
                                };
                            }
                            return {
                                ...child, editable: true
                            };
                        });
                        return {
                            ...sub,
                            editable: true,
                            forms: s
                        };
                    }
                    return { ...sub, editable: true };
                });
                return {
                    ...cat,
                    editable: true,
                    forms: f
                };
            }
            return { ...cat, editable: true };
        }) : null;
        return editableFormBlock ? { ...notEditableBlock, editable: true, forms: editableFormBlock } : notEditableBlock;
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
        this.canExit = false;
        const input = event.input;
        const value = event.value;
        if (value) {
            const prevIndex = field.defaultValue?.findIndex((opt) => opt.value.toLocaleLowerCase() === prev.toLocaleLowerCase());
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
TemplateProfileCreateComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: TemplateProfileCreateComponent, selectors: [["onboarding-create-profile-template"]], hostBindings: function TemplateProfileCreateComponent_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("scroll", function TemplateProfileCreateComponent_scroll_HostBindingHandler($event) { return ctx.onScroll($event); });
    } }, decls: 44, vars: 13, consts: [[1, "header-create-profile"], [1, "header-create-profile-top"], [3, "click"], [1, "create-profile-action"], ["mat-button", "", "type", "submit", 1, "register-button", 3, "click"], [4, "ngIf"], ["mat-button", "", "type", "submit", 1, "register-button", "live-button", 3, "click"], ["mat-button", "", "type", "submit", 1, "register-button", "live-button", "forward", 3, "disabled", "click"], [1, "create-profile-menus"], ["class", "li-title", 3, "class", "ngxScrollTo", "id", "click", 4, "ngFor", "ngForOf"], ["mat-mini-fab", "", "color", "transparent", 3, "click"], [3, "formGroup"], [1, "category"], ["cdkDropListGroup", "", 1, "fields"], ["id", "categories-id", "cdkDropList", "", 1, "fields-inner", "example-list", "mt-10", 3, "cdkDropListData", "cdkDropListDropped", "scroll"], ["parentList", "cdkDropList"], ["class", "category-item section-item", "cdkDrag", "", 3, "id", "paddingBottom", "class", "ngxScrollTo", 4, "ngFor", "ngForOf"], [1, "add-button-container", "add-category-button", "add-step"], [2, "background-color", "transparent"], [2, "height", "400px"], [1, "field-property"], ["class", "property-content", 4, "ngIf"], [1, "li-title", 3, "ngxScrollTo", "id", "click"], ["cdkDrag", "", 1, "category-item", "section-item", 3, "id", "ngxScrollTo"], ["cdkDragHandle", "", 1, "left-action", "move-icons"], ["mat-raised-button", "", 1, "transparent-button", 3, "click"], [1, "drag-icon"], [1, "field-content"], [1, "field-item", 3, "click"], [1, "full-width", "input-category-name"], [1, "sub-category-name"], ["mat-mini-fab", "", "color", "primary", 1, "expand-button", 3, "click"], ["class", "child-list", "cdkDropList", "", 3, "cdkDropListData", "cdkDropListDropped", 4, "ngIf"], ["cdkDropList", "", 1, "child-list", 3, "cdkDropListData", "cdkDropListDropped"], ["childList", "cdkDropList"], ["class", "field-box", 3, "id", "width", 4, "ngFor", "ngForOf"], [1, "field-box", 3, "id"], ["cdkDrag", ""], [1, "fields-content"], ["class", "button-action", 4, "ngIf"], [1, "fields-container"], ["class", "sub-header", 4, "ngIf"], [3, "field", "length", "i", "j", "blink", "conditionData", "onCheckValue", "onAddKeywordFromInput", "onKeyPress", "onAddNewField", "onRemoveField", "onChangeType", "onRemoveKeyword", "onAddNewSubLevelField", "onExpendMore", "onChangeLabel", "onCheckedChip", "onDrop", "onCheckedDefault", "onEditBlock"], ["class", "child", 4, "ngIf"], ["class", "add-button-container add-button-sub-category", 4, "ngIf"], [1, "button-action"], [1, "sub-header"], [1, "field-item"], ["mat-raised-button", "", 1, "transparent-button", "setting", 3, "click"], [1, "setting-icon"], ["mat-mini-fab", "", "color", "primary", 1, "expand-button", 3, "disabled", "click"], [1, "child"], ["class", "child-content", "cdkDropList", "", 3, "cdkDropListData", "cdkDropListDropped", 4, "ngIf"], ["cdkDropList", "", 1, "child-content", 3, "cdkDropListData", "cdkDropListDropped"], ["class", "", "style", "margin-bottom: 20px", 3, "id", "width", 4, "ngFor", "ngForOf"], [1, "", 2, "margin-bottom", "20px", 3, "id"], ["class", "button-action child-2-background", 4, "ngIf"], [3, "field", "length", "i", "blink", "j", "conditionData", "onCheckValue", "onAddKeywordFromInput", "onKeyPress", "onAddNewField", "onRemoveField", "onChangeType", "onRemoveKeyword", "onAddNewSubLevelField", "onExpendMore", "onChangeLabel", "onCheckedChip", "onDrop", "onCheckedDefault", "onEditBlock"], ["class", "add-button-sub-category", 4, "ngIf"], [1, "button-action", "child-2-background"], ["type", "text", "required", "", "placeholder", "Saisir le nom de la sous cat\u00E9gorie", 1, "full-width", "input-category-name", 3, "readonly", "ngModel", "ngModelOptions", "ngModelChange"], ["class", "", 3, "id", "width", 4, "ngFor", "ngForOf"], [1, "", 3, "id"], ["class", "button-action child-3-background", 4, "ngIf"], [3, "field", "length", "blink", "i", "j", "conditionData", "onCheckValue", "onAddKeywordFromInput", "onKeyPress", "onAddNewField", "onRemoveField", "onChangeType", "onRemoveKeyword", "onAddNewSubLevelField", "onExpendMore", "onChangeLabel", "onCheckedChip", "onDrop", "onCheckedDefault", "onEditBlock"], [1, "button-action", "child-3-background"], [1, "add-button-sub-category"], ["mat-raised-button", "", "color", "primary", 2, "margin", "10px auto", 3, "click"], [1, "add-button-container", "add-button-sub-category"], ["mat-raised-button", "", "color", "primary", 1, "add-button", 2, "margin", "10px auto", "padding", "10px 0", 3, "disabled", "click"], [1, "property-content"], [1, "property-content-inner", 2, "width", "100%"], ["appearance", "outline", 1, "form-field", "mat-select", "full-width", 2, "cursor", "pointer"], ["disabled", "true", "required", "", 1, "select-type-class", 3, "ngModel", "ngModelOptions", "click", "ngModelChange"], ["value", "text"], ["value", "textarea"], ["value", "radio"], ["value", "select"], ["value", "toggle"], ["value", "checkbox"], ["value", "checkbox_multiple"], ["value", "email"], ["value", "password"], ["value", "date"], ["value", "tel"], ["value", "none"], ["appearance", "outline", 1, "form-field", "full-width"], ["type", "text", "matInput", "", "required", "", "placeholder", "", 3, "ngModel", "ngModelOptions", "ngModelChange"], [3, "ngSwitch"], ["class", "flex-auto", "style", "display: flex;align-items: flex-end;margin: 10px 0;", 4, "ngSwitchCase"], ["class", "flex-auto", 4, "ngSwitchCase"], ["class", "flex-auto full-width", "appearance", "outline", 4, "ngSwitchCase"], ["class", "form-field full-width", "appearance", "outline", 4, "ngSwitchCase"], ["class", "form-field full-width", "appearance", "outline", 3, "opacity", 4, "ngSwitchDefault"], [1, "mandatory", "top-10", "bottom-10"], [1, "toogle-button"], ["color", "#6FE8D7", 3, "ngModel", "ngModelOptions", "ngModelChange"], [1, "mandatory", "top-10"], ["aria-labelledby", "example-radio-group-label", "class", "example-radio-group", 3, "ngModel", "ngModelOptions", "ngModelChange", 4, "ngIf"], [1, "bloc-action"], ["mat-button", "", 3, "disabled", "click", 4, "ngIf"], ["mat-button", "", 3, "disabled", "click"], ["mat-button", "", 1, "delete-bloc", 3, "disabled", "click"], [1, "flex-auto", 2, "display", "flex", "align-items", "flex-end", "margin", "10px 0"], ["color", "#6FE8D7", 1, "form-field", 3, "ngModel", "ngModelOptions", "ngModelChange"], [2, "margin-left", "10px"], [1, "flex-auto"], [1, "form-field", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["appearance", "outline", 1, "flex-auto", "full-width"], ["cdkDropList", "", "aria-label", "Video keywords; let index=index", "multiple", "", "selectable", "", 3, "cdkDropListData", "cdkDropListDropped"], ["childList", "cdkDropList", "chipList", ""], ["style", "min-height: 25px;width: auto;", "cdkDrag", "", 3, "selected", "value", "removable", "dblclick", "click", "removed", 4, "ngFor", "ngForOf"], ["placeholder", "add...", 3, "matChipInputFor", "matChipInputAddOnBlur", "matChipInputSeparatorKeyCodes", "ngModel", "ngModelOptions", "matChipInputTokenEnd", "keyup", "ngModelChange"], ["chipsInput", ""], ["cdkDrag", "", 2, "min-height", "25px", "width", "auto", 3, "selected", "value", "removable", "dblclick", "click", "removed"], ["matChipRemove", ""], ["type", "text", "matInput", "", "placeholder", "Description...", 3, "ngModelOptions", "ngModel", "ngModelChange"], ["matInput", "", "placeholder", "", 3, "type", "disabled", "ngModelOptions", "ngModel", "ngModelChange"], ["appearance", "outline", 1, "form-field", "mat-select", "full-width"], [3, "ngModel", "ngModelOptions", "ngModelChange", "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], ["class", "form-field mat-select full-width", "appearance", "outline", 4, "ngIf"], [3, "value"], ["aria-labelledby", "example-radio-group-label", 1, "example-radio-group", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["class", "example-radio-button", "style", "margin-right: 10px", 3, "value", 4, "ngFor", "ngForOf"], [1, "example-radio-button", 2, "margin-right", "10px", 3, "value"], [1, "property-content-inner"], ["required", "", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["mat-button", "", 3, "click"]], template: function TemplateProfileCreateComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "main")(1, "div", 0)(2, "div", 1)(3, "h3")(4, "span");
        i0.ɵɵtext(5);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(6, "mat-icon", 2);
        i0.ɵɵlistener("click", function TemplateProfileCreateComponent_Template_mat_icon_click_6_listener() { return ctx.openDialog(); });
        i0.ɵɵtext(7, "edit");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(8, "div", 3)(9, "button", 4);
        i0.ɵɵlistener("click", function TemplateProfileCreateComponent_Template_button_click_9_listener() { return ctx.onSubmit(false); });
        i0.ɵɵtemplate(10, TemplateProfileCreateComponent_lib_loading_page_10_Template, 1, 0, "lib-loading-page", 5);
        i0.ɵɵtext(11);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(12, "button", 6);
        i0.ɵɵlistener("click", function TemplateProfileCreateComponent_Template_button_click_12_listener() { return ctx.onSubmit(true); });
        i0.ɵɵtemplate(13, TemplateProfileCreateComponent_lib_loading_page_13_Template, 1, 0, "lib-loading-page", 5);
        i0.ɵɵtext(14);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(15, "button", 7);
        i0.ɵɵlistener("click", function TemplateProfileCreateComponent_Template_button_click_15_listener() { return ctx.onCancel(true); });
        i0.ɵɵelementStart(16, "mat-icon");
        i0.ɵɵtext(17, "rotate_left");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(18, "button", 7);
        i0.ɵɵlistener("click", function TemplateProfileCreateComponent_Template_button_click_18_listener() { return ctx.onCancel(false); });
        i0.ɵɵelementStart(19, "mat-icon");
        i0.ɵɵtext(20, "rotate_right");
        i0.ɵɵelementEnd()()()();
        i0.ɵɵelementStart(21, "div", 8)(22, "ul");
        i0.ɵɵtemplate(23, TemplateProfileCreateComponent_li_23_Template, 2, 5, "li", 9);
        i0.ɵɵelementStart(24, "li")(25, "button", 10);
        i0.ɵɵlistener("click", function TemplateProfileCreateComponent_Template_button_click_25_listener($event) { return ctx.onAddNewCategory($event); });
        i0.ɵɵelementStart(26, "mat-icon");
        i0.ɵɵtext(27, "add");
        i0.ɵɵelementEnd()()()()()();
        i0.ɵɵelementStart(28, "form", 11)(29, "div", 12)(30, "div", 13)(31, "div", 14, 15);
        i0.ɵɵlistener("cdkDropListDropped", function TemplateProfileCreateComponent_Template_div_cdkDropListDropped_31_listener($event) { return ctx.drop($event); })("scroll", function TemplateProfileCreateComponent_Template_div_scroll_31_listener($event) { return ctx.onScroll($event); });
        i0.ɵɵtemplate(33, TemplateProfileCreateComponent_section_33_Template, 16, 11, "section", 16);
        i0.ɵɵelementStart(34, "div", 17)(35, "button", 2);
        i0.ɵɵlistener("click", function TemplateProfileCreateComponent_Template_button_click_35_listener($event) { return ctx.onAddNewCategory($event); });
        i0.ɵɵtext(36, " Ajouter une \u00E9tape ");
        i0.ɵɵelementStart(37, "mat-icon");
        i0.ɵɵtext(38, "add");
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementStart(39, "section", 18);
        i0.ɵɵelement(40, "div", 19);
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementStart(41, "div", 20);
        i0.ɵɵtemplate(42, TemplateProfileCreateComponent_div_42_Template, 33, 5, "div", 21);
        i0.ɵɵtemplate(43, TemplateProfileCreateComponent_div_43_Template, 26, 9, "div", 21);
        i0.ɵɵelementEnd()()()();
    } if (rf & 2) {
        i0.ɵɵadvance(5);
        i0.ɵɵtextInterpolate(ctx.form.get("Name").value);
        i0.ɵɵadvance(5);
        i0.ɵɵproperty("ngIf", ctx.loading && !ctx.isSubmitted);
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1("", ctx.draftLabel, " ");
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", ctx.loading && ctx.isSubmitted);
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", ctx.liveLabel, " ");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("disabled", ctx.currentCanceledIndex < 0 || ctx.historics.length === 0);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("disabled", ctx.currentCanceledIndex === ctx.historics.length - 1 || ctx.currentCanceledIndex === null);
        i0.ɵɵadvance(5);
        i0.ɵɵproperty("ngForOf", ctx.categories);
        i0.ɵɵadvance(5);
        i0.ɵɵproperty("formGroup", ctx.form);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("cdkDropListData", ctx.categories);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngForOf", ctx.categories);
        i0.ɵɵadvance(9);
        i0.ɵɵproperty("ngIf", ctx.isBlock && ctx.currentEditBlock);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.isSection && ctx.currentEditBlock);
    } }, directives: [i6.MatIcon, i7.MatButton, i8.NgIf, i9.LoadingPageComponent, i8.NgForOf, i5.ScrollToDirective, i1.ɵNgNoValidate, i1.NgControlStatusGroup, i1.FormGroupDirective, i10.CdkDropListGroup, i10.CdkDropList, i10.CdkDrag, i10.CdkDragHandle, i11.SubTemplateProfileComponent, i1.DefaultValueAccessor, i1.RequiredValidator, i1.NgControlStatus, i1.NgModel, i12.NativeElementInjectorDirective, i13.MatFormField, i13.MatLabel, i14.MatSelect, i15.MatOption, i16.MatInput, i8.NgSwitch, i8.NgSwitchCase, i17.MatSlideToggle, i18.MatCheckbox, i19.MatChipList, i19.MatChip, i19.MatChipRemove, i19.MatChipInput, i8.NgSwitchDefault, i20.MatRadioGroup, i20.MatRadioButton], styles: ["main[_ngcontent-%COMP%]{background:#f4f7f9 0% 0% no-repeat padding-box;height:100vh;display:flex;flex-direction:column;align-items:center;padding:25px}main[_ngcontent-%COMP%]   .disabled[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{background-color:transparent!important}main[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{display:flex;height:89%;width:100%}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]{width:786px;margin-top:20vh;background:#ffffff 0% 0% no-repeat padding-box;border:1px solid #dce4e9;border-radius:6px;opacity:1;margin:auto;padding:0 25px;align-self:center}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{text-align:center;font: 900 32px/48px Nexa;letter-spacing:0px;color:#171f26}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   label[_ngcontent-%COMP%], main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{font: 18px/24px Nexa Text;letter-spacing:0px;color:#171f26}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .profil-name-content[_ngcontent-%COMP%]{display:flex;align-items:center;position:relative}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .profil-name-content[_ngcontent-%COMP%]   .add-picto[_ngcontent-%COMP%]{margin-right:15px;min-width:50px;width:30px;padding:9px 12px}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .profil-name-content[_ngcontent-%COMP%]   .add-picto[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin-right:10px}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .profil-name-content[_ngcontent-%COMP%]   .list-picto[_ngcontent-%COMP%]{position:absolute;height:200px;width:100%;background:#ffffff 0% 0% no-repeat padding-box;border:1px solid #171f26;border-radius:8px;top:100%;z-index:1}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .profil-name-content[_ngcontent-%COMP%]   .list-picto[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin:15px;border:none;font-size:40px}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .profil-name-content[_ngcontent-%COMP%]   .list-picto[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]:hover{color:#830b6b!important;cursor:pointer}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .box-title-content[_ngcontent-%COMP%]{width:100%;margin:25px auto}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font: 900 32px/38px Nexa;letter-spacing:0px;color:#171f26}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font: 15px/26px Nexa Text;letter-spacing:0px;color:#171f26;text-align:center}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .link-create-profil[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:center}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{text-align:center;border:1px solid #543cb6;border-radius:7px;color:#fff;padding:.7em 2em .5em;display:flex;align-items:center;background-color:transparent;font: 700 15px/17px Nexa;letter-spacing:0px;color:#543cb6}main[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:space-between}main[_ngcontent-%COMP%]   .header-create-profile[_ngcontent-%COMP%]{width:100%;margin:10px 15px;border-radius:5px;height:100%}main[_ngcontent-%COMP%]   .header-create-profile[_ngcontent-%COMP%]   .header-create-profile-top[_ngcontent-%COMP%]{display:flex;align-items:center;text-align:center;justify-content:space-between}main[_ngcontent-%COMP%]   .header-create-profile[_ngcontent-%COMP%]   .header-create-profile-top[_ngcontent-%COMP%]   .create-profile-action[_ngcontent-%COMP%]{display:flex;align-items:center;gap:25px}main[_ngcontent-%COMP%]   .header-create-profile[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:25px;padding-bottom:5px;font-family:Nexa Text;display:flex;align-items:center;justify-content:center}main[_ngcontent-%COMP%]   .header-create-profile[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{text-overflow:ellipsis;white-space:nowrap;overflow:hidden;font-family:Nexa;font-weight:700;font-size:24px;line-height:110%;text-align:center;color:#242731;text-transform:capitalize}main[_ngcontent-%COMP%]   .header-create-profile[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin-left:15px;cursor:pointer}main[_ngcontent-%COMP%]   .header-create-profile[_ngcontent-%COMP%]   .create-profile-menus[_ngcontent-%COMP%]{max-width:100%;overflow:auto}main[_ngcontent-%COMP%]   .header-create-profile[_ngcontent-%COMP%]   .create-profile-menus[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{font-weight:600;font-size:16px;list-style:none;display:flex;align-items:center;gap:20px;padding:0}main[_ngcontent-%COMP%]   .header-create-profile[_ngcontent-%COMP%]   .create-profile-menus[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{font-weight:400;font-size:12px;cursor:pointer;text-align:left;font: 12px/19px Nexa Text;letter-spacing:0px;color:#535760}main[_ngcontent-%COMP%]   .header-create-profile[_ngcontent-%COMP%]   .create-profile-menus[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .mat-mini-fab[_ngcontent-%COMP%]{width:28px;height:28px;line-height:24px}main[_ngcontent-%COMP%]   .header-create-profile[_ngcontent-%COMP%]   .create-profile-menus[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.li-title[_ngcontent-%COMP%]:hover{border-bottom:2px solid #723CEB}main[_ngcontent-%COMP%]   .header-create-profile[_ngcontent-%COMP%]   .create-profile-menus[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.li-title.active[_ngcontent-%COMP%]{border-bottom:2px solid #723CEB;font-weight:600}.expand-button[_ngcontent-%COMP%]{color:#5a607f!important;background-color:transparent!important;box-shadow:none!important}.input-category-name[_ngcontent-%COMP%]{font-size:15px;font-weight:500;border:none;outline:none;text-align:left;color:#171f26;font-family:Nexa;font-weight:700;font-size:20px;line-height:28px;color:#242731}.sub-category-name[_ngcontent-%COMP%]{font-family:Nexa;font-style:normal;font-weight:250;font-size:14px;line-height:16px;display:flex;align-items:center;color:#575f6e;word-break:break-word}.full-width[_ngcontent-%COMP%]{width:100%}.field-action[_ngcontent-%COMP%]{width:10%}.field-size[_ngcontent-%COMP%]{width:90%;margin:auto 2% auto auto}  .mat-mini-fab .mat-button-wrapper{padding:0!important}  .mat-form-field-appearance-fill .mat-form-field-flex{background-color:#fff}  .mat-select.mat-form-field-appearance-outline .mat-form-field-infix{padding:.5em 0}  .mat-select{padding:8px 0}  .mat-form-field-appearance-fill .mat-form-field-underline:before{background-color:transparent}  .mat-form-field-wrapper{padding-bottom:0!important}[_nghost-%COMP%]     .input-category-name div.mat-form-field-outline-start, [_nghost-%COMP%]     .cdk-drag-preview .input-category-name div.mat-form-field-outline-start{border-color:0!important;border-width:0px!important}[_nghost-%COMP%]     .input-category-name .mat-form-field-outline-gap{border-color:0!important;border-width:0px!important}[_nghost-%COMP%]     .mat-checkbox-indeterminate.mat-accent .mat-checkbox-background, [_nghost-%COMP%]     .mat-checkbox-checked.mat-accent .mat-checkbox-background{background-color:transparent}[_nghost-%COMP%]     .input-category-name .mat-form-field-outline-end{border-color:0!important;border-width:0px!important}[_nghost-%COMP%]     .input-category-name .mat-form-field-label-wrapper{display:none}[_nghost-%COMP%]     .input-category-name .mat-form-field-appearance-outline .mat-form-field-outline{color:transparent!important}[_nghost-%COMP%]     .input-category-name .mat-form-field-infix{border-top:none}.category-action[_ngcontent-%COMP%]{display:flex;width:100%}.delete-field[_ngcontent-%COMP%]{margin:auto 2%}.radio-group[_ngcontent-%COMP%]   .mat-radio-button[_ngcontent-%COMP%]{margin-right:10px}.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary[_ngcontent-%COMP%]{background-color:#3f51b5;color:#fff;min-height:20px;font-size:10px}.move-icons[_ngcontent-%COMP%]{cursor:move}.category-item[_ngcontent-%COMP%], .cdk-drag-placeholder[_ngcontent-%COMP%]{display:flex;align-items:baseline;position:relative;width:100%;border-radius:8px;background-color:#fff;margin-bottom:15px;margin-right:5px;padding:6px 15px}.category-item[_ngcontent-%COMP%]   .left-action[_ngcontent-%COMP%], .cdk-drag-placeholder[_ngcontent-%COMP%]   .left-action[_ngcontent-%COMP%]{height:auto;width:40px;align-self:baseline;border-top-left-radius:8px;border-bottom-left-radius:8px}.category-item[_ngcontent-%COMP%]   .left-action[_ngcontent-%COMP%]   .transparent-button[_ngcontent-%COMP%], .cdk-drag-placeholder[_ngcontent-%COMP%]   .left-action[_ngcontent-%COMP%]   .transparent-button[_ngcontent-%COMP%]{background-color:transparent;box-shadow:none;width:40px;padding:0;margin:0;min-width:auto;color:#fff}.category-item[_ngcontent-%COMP%]   .left-action[_ngcontent-%COMP%]   .transparent-button[_ngcontent-%COMP%]   .drag-icon[_ngcontent-%COMP%], .cdk-drag-placeholder[_ngcontent-%COMP%]   .left-action[_ngcontent-%COMP%]   .transparent-button[_ngcontent-%COMP%]   .drag-icon[_ngcontent-%COMP%]{color:#171f26;cursor:move;margin-right:15px}.category-item[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%], .cdk-drag-placeholder[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%]{width:calc(100% - 40px);align-self:center}.category-item[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%]   .child-list[_ngcontent-%COMP%], .cdk-drag-placeholder[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%]   .child-list[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;background-color:transparent;width:103%;position:relative;margin-left:-1.5%}.category-item[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%], .cdk-drag-placeholder[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:baseline;border:transparent!important}.category-item[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]   .mat-form-field-wrapper[_ngcontent-%COMP%]   .mat-form-field-flex[_ngcontent-%COMP%]   .mat-form-field-outline[_ngcontent-%COMP%], .cdk-drag-placeholder[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]   .mat-form-field-wrapper[_ngcontent-%COMP%]   .mat-form-field-flex[_ngcontent-%COMP%]   .mat-form-field-outline[_ngcontent-%COMP%]{color:transparent!important}.category-item[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%]   .mat-form-field-outline[_ngcontent-%COMP%], .cdk-drag-placeholder[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%]   .mat-form-field-outline[_ngcontent-%COMP%]{color:transparent!important}.field-box[_ngcontent-%COMP%]{margin-bottom:15px;display:flex;align-items:center}.cdk-drag-preview[_ngcontent-%COMP%]{box-sizing:border-box;border-radius:4px;opacity:1}.cdk-drag-preview[_ngcontent-%COMP%]   .expand-button[_ngcontent-%COMP%]{color:#5a607f!important;background-color:transparent!important;box-shadow:none!important;margin-right:6px!important}.cdk-drag-placeholder[_ngcontent-%COMP%]{opacity:0}.cdk-drag-animating[_ngcontent-%COMP%]{transition:transform .25s cubic-bezier(0,0,.2,1)}.example-list.cdk-drop-list-dragging[_ngcontent-%COMP%]   .category-item[_ngcontent-%COMP%]:not(.cdk-drag-placeholder){transition:transform .25s cubic-bezier(0,0,.2,1)}.child[_ngcontent-%COMP%]{margin-left:0}.child-content[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;margin-bottom:30px}.sub-category-forms[_ngcontent-%COMP%]{margin-bottom:0!important;margin-top:10px!important}.category[_ngcontent-%COMP%]{display:flex;flex-direction:row;width:100%;height:100%}.category[_ngcontent-%COMP%]   .fields[_ngcontent-%COMP%]{width:100%;overflow:hidden;overflow-x:hidden;position:relative;padding-top:10px;height:calc(100% - 10px)}.category[_ngcontent-%COMP%]   .fields[_ngcontent-%COMP%]   .fields-inner[_ngcontent-%COMP%]{max-height:100%;height:100%;width:100%;overflow:auto}.category[_ngcontent-%COMP%]   .fields[_ngcontent-%COMP%]   .add-category-button[_ngcontent-%COMP%]{position:relative!important;width:calc(100% - 40px)!important;padding:20px 0}.category[_ngcontent-%COMP%]   .fields[_ngcontent-%COMP%]   .add-category-button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin-left:10px}.category[_ngcontent-%COMP%]   .fields[_ngcontent-%COMP%]   .add-step[_ngcontent-%COMP%]{bottom:0!important;top:0!important;width:100%!important}.category[_ngcontent-%COMP%]   .disabled[_ngcontent-%COMP%]{background-color:#f4f7f9!important}.category[_ngcontent-%COMP%]   .expand-button[_ngcontent-%COMP%]{color:#5a607f!important;background-color:transparent!important;box-shadow:none!important;margin-right:6px!important}.category[_ngcontent-%COMP%]   .expand-button[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%]{font-size:40px}.category[_ngcontent-%COMP%]   .transparent-button[_ngcontent-%COMP%]{background-color:transparent;box-shadow:none;width:40px;padding:0;margin:0;margin-left:0!important;min-width:auto;color:#fff}.add-button-sub-category[_ngcontent-%COMP%]{width:93%;position:absolute;left:3%;bottom:-13px}.add-button-sub-category[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{width:100%}.add-button-container[_ngcontent-%COMP%]{background:#ffffff 0% 0% no-repeat padding-box;border-radius:8px;margin-top:10px;padding:10px 0;display:flex;justify-content:center;align-items:center;width:100%;margin-bottom:22px;position:absolute;left:0;top:100%}.add-button-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{display:flex;align-items:center;background-color:transparent;border:none;cursor:pointer;font: 17px/26px Nexa Text;letter-spacing:0px;color:#000;box-shadow:none}.add-button-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{width:100%}.add-category[_ngcontent-%COMP%]{background-color:#fcfcfe;border-radius:5px;line-height:26px;margin-left:10px;margin-bottom:10px;font: 700 12px/19px Nexa Text;letter-spacing:0px;color:#c2c8d5;width:92%}.field-content[_ngcontent-%COMP%]   .cdk-drag[_ngcontent-%COMP%]{width:100%}.cdk-drag[_ngcontent-%COMP%]{width:auto;position:relative}.cdk-drag[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]{display:flex;height:100%;width:100%;margin:0}.cdk-drag[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]   .button-action[_ngcontent-%COMP%]{align-self:baseline;margin-top:0;margin-left:3px;border-bottom-left-radius:8px;border-top-left-radius:8px}.cdk-drag[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]   .button-action[_ngcontent-%COMP%]   .transparent-button[_ngcontent-%COMP%]{background-color:transparent;box-shadow:none;width:40px;padding:0;margin:0;min-width:auto;color:#fff}.cdk-drag[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]   .button-action[_ngcontent-%COMP%]   .transparent-button[_ngcontent-%COMP%]   .drag-icon[_ngcontent-%COMP%]{color:#171f26;cursor:move;margin-right:15px}.cdk-drag[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]   .child-3-background[_ngcontent-%COMP%]{background-color:#e5e8ee!important}.cdk-drag[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]   .fields-container[_ngcontent-%COMP%]{border-radius:0 8px 8px 0;background-color:#fff;width:100%;padding-left:10px;padding-right:10px;padding-top:5px;position:relative;margin-bottom:10px}.cdk-drag[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]   .fields-container[_ngcontent-%COMP%]   lib-sub-category[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;width:100%}.cdk-drag[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]   .fields-container[_ngcontent-%COMP%]   lib-sub-category[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]   .button-action[_ngcontent-%COMP%]{background-color:#039be5!important;height:100%;margin:auto 15px auto auto;display:flex}.cdk-drag[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]   .fields-container[_ngcontent-%COMP%]   lib-sub-category[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]   .button-action[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{box-shadow:none;background-color:transparent;color:#fff}.side-bar[_ngcontent-%COMP%]{display:flex;flex-direction:column}.register-button[_ngcontent-%COMP%]{background:no-repeat padding-box #171f26!important;border:2px solid #171f26!important;color:#fff!important;box-shadow:0 0 #0003;border-radius:7px}.forward[_ngcontent-%COMP%]{padding:6px}.live-button[_ngcontent-%COMP%]{background-color:#fff!important;color:#171f26!important;border:2px solid #171f26!important}.content-item[_ngcontent-%COMP%]{transition-property:border-image-slice border-image-source border-width;transition-timing-function:ease-in-out;transition-duration:.5s}.active-content[_ngcontent-%COMP%]{border-image-slice:1;border-width:2px;border-image-source:linear-gradient(to left,#9d107d,#4862ab)}.field-property[_ngcontent-%COMP%]{padding:11px;height:calc(100% - 22px);width:370px}.field-property[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-family:Nexa;font-size:20px;line-height:110%;padding-top:10px;display:flex;align-items:center;color:#242731}.field-property[_ngcontent-%COMP%]   .property-content[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:flex-start;padding:0 20px;background:#ffffff;border-radius:8px 8px 0 0;min-height:100%;height:auto;width:370px}.field-property[_ngcontent-%COMP%]   .property-content[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{text-align:center}.field-property[_ngcontent-%COMP%]   .property-content[_ngcontent-%COMP%]   .property-content-inner[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:25px}.field-property[_ngcontent-%COMP%]   .bloc-action[_ngcontent-%COMP%]{text-align:center}.field-property[_ngcontent-%COMP%]   .bloc-action[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:100%;padding:6px;margin-top:10px}.field-property[_ngcontent-%COMP%]   .bloc-action[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin-left:5px}.field-property[_ngcontent-%COMP%]   .bloc-action[_ngcontent-%COMP%]   .delete-bloc[_ngcontent-%COMP%]{background:#f44336;box-shadow:0 0 #0003;border-radius:7px;color:#fff}.fields-inner[_ngcontent-%COMP%]::-webkit-scrollbar{width:5px}.fields-inner[_ngcontent-%COMP%]::-webkit-scrollbar-track{box-shadow:inset 0 0 2px transparent;border-radius:10px}.fields-inner[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background:transparent;border-radius:10px}.fields-inner[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover{background:transparent}.toogle-button[_ngcontent-%COMP%]{color:#707273!important;display:flex;align-items:center;font-family:Nexa;font-style:normal;font-weight:400;font-size:18px;line-height:18px}.toogle-button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{padding-right:10px}[_nghost-%COMP%]     .category .mat-slide-toggle.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar{background-color:#039be5!important;position:relative;width:42px;height:23px;flex-shrink:0;border-radius:14px}[_nghost-%COMP%]     .category .mat-slide-toggle:not(.mat-disabled) .mat-slide-toggle-bar{background-color:#707273!important}[_nghost-%COMP%]     .category .mat-slide-toggle:not(.mat-disabled) .mat-slide-toggle-bar{position:relative;width:42px;height:23px;flex-shrink:0;border-radius:14px}[_nghost-%COMP%]     .category .mat-slide-toggle.mat-checked:not(.mat-disabled) .mat-slide-toggle-thumb{background-color:#fff;margin-top:4px}[_nghost-%COMP%]     .category .mat-slide-toggle:not(.mat-disabled) .mat-slide-toggle-thumb{margin-top:4px;margin-left:4px}[_nghost-%COMP%]     .category .mat-slide-toggle.draft:not(.mat-disabled) .mat-slide-toggle-bar{background-color:#707273!important}[_nghost-%COMP%]     .category .mat-slide-toggle.draft.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar{background-color:#039be5!important}.top-10[_ngcontent-%COMP%]{margin-top:10px}.bottom-10[_ngcontent-%COMP%]{margin-bottom:10px}.section-item[_ngcontent-%COMP%]{border:2px solid transparent;overflow:hidden}.section-item[_ngcontent-%COMP%]:hover, .section-item.active[_ngcontent-%COMP%]{border:2px solid #242731;border-radius:8px;cursor:pointer}  .select-type-class.mat-select-disabled .mat-select-value{color:#000!important;cursor:pointer}  button .mat-button-wrapper{display:flex;align-items:center;justify-content:center}  .field-content .mat-form-field,   .field-content .select-content{width:100%}  .field-content .mat-form-field-infix{display:block;position:relative;flex:auto;min-width:0;width:100%!important}  .fields-content .mat-radio-button.mat-accent.mat-radio-checked .mat-radio-outer-circle,   .property-content .mat-radio-button.mat-accent.mat-radio-checked .mat-radio-outer-circle{border-color:#039be5!important}  .fields-content .mat-radio-button.mat-accent .mat-radio-inner-circle,   .fields-content .mat-radio-button.mat-accent .mat-radio-ripple .mat-ripple-element:not(.mat-radio-persistent-ripple),   .fields-content .mat-radio-button.mat-accent.mat-radio-checked .mat-radio-persistent-ripple,   .fields-content .mat-radio-button.mat-accent:active .mat-radio-persistent-ripple,   .property-content .mat-radio-button.mat-accent .mat-radio-inner-circle,   .property-content .mat-radio-button.mat-accent .mat-radio-ripple .mat-ripple-element:not(.mat-radio-persistent-ripple),   .property-content .mat-radio-button.mat-accent.mat-radio-checked .mat-radio-persistent-ripple,   .property-content .mat-radio-button.mat-accent:active .mat-radio-persistent-ripple{background-color:#039be5!important}  .fields-content .mat-checkbox-checkmark-path,   .property-content .mat-checkbox-checkmark-path{stroke:#039be5!important}  .fields-content .mat-checkbox-frame,   .property-content .mat-checkbox-frame{border:2px solid #039BE5!important}  .fields-content .mat-checkbox-inner-container,   .property-content .mat-checkbox-inner-container{height:20px!important;width:20px!important}.setting[_ngcontent-%COMP%]{z-index:1;background-color:#d5d6d7!important;border-radius:40px;width:42px!important;height:40px!important;padding:0 10px!important;display:flex;align-items:center;justify-content:center;display:none}.setting[_ngcontent-%COMP%]   .setting-icon[_ngcontent-%COMP%], .setting[_ngcontent-%COMP%]   .transparent-button[_ngcontent-%COMP%]{color:#171f26}.sub-header[_ngcontent-%COMP%]:hover   .setting[_ngcontent-%COMP%]{display:flex}.add-button-sub-category[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin:10px auto;width:100%;background-color:transparent;color:#000;box-shadow:none;background-color:#fcfcfe;padding:5px span;padding-width:100%!important}  .add-button{padding:10px 0}  .add-button span{width:100%}  .mat-button[disabled]{opacity:.5!important}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TemplateProfileCreateComponent, [{
        type: Component,
        args: [{ selector: "onboarding-create-profile-template", template: "<main>\r\n  <div class=\"header-create-profile\">\r\n    <div class=\"header-create-profile-top\">\r\n      <h3>\r\n        <span>{{ this.form.get(\"Name\").value }}</span>\r\n        <mat-icon (click)=\"openDialog()\">edit</mat-icon>\r\n      </h3>\r\n      <div class=\"create-profile-action\">\r\n        <button mat-button class=\"register-button\" type=\"submit\" (click)=\"onSubmit(false)\">\r\n          <lib-loading-page *ngIf=\"loading && !isSubmitted\"></lib-loading-page>{{draftLabel}}\r\n        </button>\r\n        <button mat-button class=\"register-button live-button\" type=\"submit\" (click)=\"onSubmit(true)\">\r\n          <lib-loading-page *ngIf=\"loading && isSubmitted\"></lib-loading-page>\r\n          {{liveLabel}}\r\n        </button>\r\n\r\n        <button [disabled]=\"currentCanceledIndex < 0 || historics.length===0\" mat-button\r\n          class=\"register-button live-button forward\" type=\"submit\" (click)=\"onCancel(true)\">\r\n          <mat-icon>rotate_left</mat-icon>\r\n        </button>\r\n        <button [disabled]=\"currentCanceledIndex===historics.length-1 || currentCanceledIndex===null\" mat-button\r\n          class=\"register-button live-button forward\" type=\"submit\" (click)=\"onCancel(false)\">\r\n          <mat-icon>rotate_right</mat-icon>\r\n        </button>\r\n      </div>\r\n    </div>\r\n    <div class=\"create-profile-menus\">\r\n      <ul>\r\n        <li class=\"li-title\" [class]=\"editIndex === i ? 'active' : ''\" *ngFor=\"let cat of categories; let i = index\"\r\n          (click)=\"onActiveMenu(cat, i)\" [ngxScrollTo]=\"'#' + cat.name\" [id]=\"cat.name+'x'\">\r\n          {{ cat.name }}\r\n        </li>\r\n        <li>\r\n          <button mat-mini-fab color=\"transparent\" (click)=\"onAddNewCategory($event)\">\r\n            <mat-icon>add</mat-icon>\r\n          </button>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n  <form [formGroup]=\"form\">\r\n    <div class=\"category\">\r\n      <div class=\"fields\" cdkDropListGroup>\r\n        <div class=\"fields-inner example-list mt-10\" id=\"categories-id\" #parentList=\"cdkDropList\" cdkDropList\r\n          [cdkDropListData]=\"categories\" (cdkDropListDropped)=\"drop($event)\" (scroll)=\"onScroll($event)\">\r\n          <section class=\"category-item section-item\" *ngFor=\"let category of categories; let i = index\" cdkDrag\r\n            [id]=\"category.name\" [style.paddingBottom]=\"category.expandMore ? '50px' : '10px'\"\r\n            [class]=\"editIndex === i ? 'active' : ''\" [ngxScrollTo]=\"'#' + category.name\">\r\n            <div class=\"left-action move-icons\" cdkDragHandle>\r\n              <button class=\"transparent-button\" mat-raised-button (click)=\"$event.preventDefault()\">\r\n                <mat-icon class=\"drag-icon\">drag_indicator</mat-icon>\r\n              </button>\r\n            </div>\r\n            <div class=\"field-content\">\r\n              <div class=\"field-item\" (click)=\" onExpendMore({ event: $event, field: category }, i)\">\r\n                <div>\r\n                  <p class=\"full-width input-category-name\">\r\n                    {{ category.name }}\r\n                  </p>\r\n                  <p class=\"sub-category-name\">\r\n                    Listes des informations n\u00E9cessaires pour la cr\u00E9ation de {{ catNameStart(category.name) ? \"l'\" +\r\n                    category.name : category.name }}\r\n                  </p>\r\n                </div>\r\n                <button mat-mini-fab color=\"primary\" class=\"expand-button\"\r\n                  (click)=\"onExpendMore({ event: $event, field: category }, i)\">\r\n                  <mat-icon *ngIf=\"!category.expandMore\">chevron_right</mat-icon>\r\n                  <mat-icon *ngIf=\"category.expandMore\">expand_more</mat-icon>\r\n                </button>\r\n              </div>\r\n              <div #childList=\"cdkDropList\" class=\"child-list\" *ngIf=\"category.forms\" [cdkDropListData]=\"category.forms\"\r\n                cdkDropList (cdkDropListDropped)=\"drop($event)\">\r\n                <ng-container *ngIf=\"category.expandMore\">\r\n                  <div class=\"field-box\" *ngFor=\"let field of category.forms; let j = index\" [id]=\"field.key\"\r\n                    [style.width]=\"field.forms && field.forms.length>0 ? '100%' : fieldWidth(field.type,category.forms.length,j)\">\r\n                    <div cdkDrag>\r\n\r\n                      <div class=\" fields-content\"\r\n                        [class]=\"field.forms && field.forms.length>0 ? 'sub-category-forms' :''\">\r\n                        <div class=\"button-action\" *ngIf=\"field.forms\">\r\n\r\n                          <button class=\"transparent-button\" mat-raised-button (click)=\"$event.preventDefault()\">\r\n                            <mat-icon class=\"drag-icon\">drag_indicator</mat-icon>\r\n                          </button>\r\n                        </div>\r\n                        <div class=\"fields-container\">\r\n                          <div class=\"sub-header\" *ngIf=\"field.forms\">\r\n                            <div class=\"field-item\">\r\n                              <div>\r\n                                <p class=\"full-width input-category-name\">\r\n                                  {{ field.label }}\r\n                                </p>\r\n                                <p class=\"sub-category-name\">\r\n                                  Listes des informations n\u00E9cessaires pour la cr\u00E9ation de\r\n                                  {{ catNameStart(field.label) ? \"l'\" + field.label : field.label }}\r\n                                </p>\r\n                              </div>\r\n                              <button class=\"transparent-button setting\" mat-raised-button\r\n                                (click)=\"$event.preventDefault();onEditBlock(field, i, j)\">\r\n                                <mat-icon class=\"setting-icon\">settings</mat-icon>\r\n                              </button>\r\n                              <button class=\"expand-button\" [disabled]=\"!(field.forms && field.forms.length > 0)\"\r\n                                [style.opacity]=\"field.forms && field.forms.length > 0 ? 1 : 0\" mat-mini-fab\r\n                                color=\"primary\" (click)=\"onExpendMore({ event: $event, field: field }, i, j)\">\r\n                                <mat-icon *ngIf=\"!field.expandMore\">expand_less </mat-icon>\r\n                                <mat-icon *ngIf=\"field.expandMore\">expand_more </mat-icon>\r\n                              </button>\r\n                            </div>\r\n                          </div>\r\n                          <lib-sub-category [field]=\"field\" [length]=\"category?.forms?.length\" [i]=\"i\" [j]=\"j\"\r\n                            [blink]=\"checkBlink(j,1)===newFieldIndex\" (onCheckValue)=\"onCheckValue($event)\"\r\n                            (onAddKeywordFromInput)=\"addKeywordFromInput($event.event, $event.prev, i, j)\"\r\n                            (onKeyPress)=\"onKeyPress($event.event, i, j)\" (onAddNewField)=\"onAddNewField(i)\"\r\n                            (onRemoveField)=\"onRemoveField(i, j)\" (onChangeType)=\"onChangeType(field.type, i, j)\"\r\n                            (onRemoveKeyword)=\"removeKeyword($event.event, i, j)\"\r\n                            (onAddNewSubLevelField)=\"onAddNewSubLevelField(i, j)\"\r\n                            (onExpendMore)=\"onExpendMore($event, i, j)\" (onChangeLabel)=\"onChangeLabel($event, i, j)\"\r\n                            (onCheckedChip)=\"onCheckedChip($event, i, j)\" (onDrop)=\"drop($event)\"\r\n                            (onCheckedDefault)=\"onCheckedDefault($event, i, j)\" (onEditBlock)=\"onEditBlock(field, i, j)\"\r\n                            [conditionData]=\"conditionData\">\r\n                            <div *ngIf=\"field.expandMore\" class=\"child\">\r\n                              <div #childList=\"cdkDropList\" class=\"child-content\" *ngIf=\"field.forms\"\r\n                                [cdkDropListData]=\"field.forms\" cdkDropList (cdkDropListDropped)=\"drop($event)\">\r\n                                <div class=\"\" style=\"margin-bottom: 20px\"\r\n                                  *ngFor=\"let child of field.forms; let k = index\" [id]=\"child.key\"\r\n                                  [style.width]=\"child.forms && child.forms.length>0 ? '100%' : fieldWidth(child.type,field.forms.length,k)\">\r\n                                  <div cdkDrag>\r\n                                    <div class=\"fields-content\"\r\n                                      [class]=\"child.forms && child.forms.length>0 ? 'sub-category-forms' :''\">\r\n                                      <div class=\"button-action child-2-background\"\r\n                                        *ngIf=\"child.forms && child.forms.length>0\">\r\n                                        <button class=\"transparent-button\" mat-raised-button\r\n                                          (click)=\"$event.preventDefault()\">\r\n                                          <mat-icon class=\"drag-icon\"> drag_indicator</mat-icon>\r\n                                        </button>\r\n                                      </div>\r\n                                      <div class=\"fields-container\">\r\n                                        <div class=\"sub-header\" *ngIf=\"child.forms && child.forms.length>0\">\r\n                                          <div class=\"field-item\">\r\n                                            <div>\r\n                                              <input class=\"full-width input-category-name\" type=\"text\" required\r\n                                                [readonly]=\"categories.length < 4 || !category.editable\"\r\n                                                [readonly]=\"!category.editable\" [(ngModel)]=\"child.label\"\r\n                                                [ngModelOptions]=\"{ standalone: true }\"\r\n                                                placeholder=\"Saisir le nom de la sous cat\u00E9gorie\" />\r\n                                              <p class=\"sub-category-name\">\r\n                                                Listes des informations n\u00E9cessaires pour la cr\u00E9ation de\r\n                                                {{ catNameStart(child.label) ? \"l'\" + child.label : child.label }}\r\n                                              </p>\r\n                                            </div>\r\n                                            <button class=\"transparent-button setting\" mat-raised-button\r\n                                              (click)=\"$event.preventDefault();onEditBlock(child, i, j, k)\">\r\n                                              <mat-icon class=\"setting-icon\">settings</mat-icon>\r\n                                            </button>\r\n                                            <button class=\"expand-button\"\r\n                                              [disabled]=\"!(child.forms && child.forms.length > 0)\"\r\n                                              [style.opacity]=\"child.forms && child.forms.length > 0 ? 1 : 0\"\r\n                                              mat-mini-fab color=\"primary\"\r\n                                              (click)=\"onExpendMore({ event: $event, field: child }, i, j, k)\">\r\n                                              <mat-icon *ngIf=\"!child.expandMore\"> expand_less </mat-icon>\r\n                                              <mat-icon *ngIf=\"child.expandMore\"> expand_more </mat-icon>\r\n                                            </button>\r\n                                          </div>\r\n                                        </div>\r\n                                        <lib-sub-category [field]=\"child\" [length]=\"field?.forms?.length\" [i]=\"j\"\r\n                                          [blink]=\"checkBlink(k,2)===newFieldIndex\" [j]=\"k\"\r\n                                          (onCheckValue)=\"onCheckValue($event)\"\r\n                                          (onAddKeywordFromInput)=\"addKeywordFromInput($event.event, $event.prev, i, j, k)\"\r\n                                          (onKeyPress)=\"onKeyPress($event.event, i, j, k)\"\r\n                                          (onAddNewField)=\"onAddNewField(i, j)\" (onRemoveField)=\"onRemoveField(i, j, k)\"\r\n                                          (onChangeType)=\"onChangeType(child.type, i, j, k)\"\r\n                                          (onRemoveKeyword)=\"removeKeyword($event.event, i, j, k)\"\r\n                                          (onAddNewSubLevelField)=\"onAddNewSubLevelField(i, j, k)\"\r\n                                          (onExpendMore)=\"onExpendMore($event, i, j, k)\"\r\n                                          (onChangeLabel)=\"onChangeLabel($event, i, j, k)\"\r\n                                          (onCheckedChip)=\"onCheckedChip($event, i, j, k)\" (onDrop)=\"drop($event)\"\r\n                                          (onCheckedDefault)=\"onCheckedDefault($event, i, j, k)\"\r\n                                          [conditionData]=\"conditionData\" (onEditBlock)=\"onEditBlock(child, i, j, k)\">\r\n                                          <div *ngIf=\"child.expandMore\" class=\"child\">\r\n                                            <div class=\"child-content\" #childList=\"cdkDropList\"\r\n                                              *ngIf=\"child.forms && child.forms.length>0\"\r\n                                              [cdkDropListData]=\"child.forms\" cdkDropList\r\n                                              (cdkDropListDropped)=\"drop($event)\">\r\n                                              <div class=\"\" *ngFor=\"let c2 of child.forms; let l = index\" [id]=\"c2.key\"\r\n                                                [style.width]=\"c2.forms && c2.forms.length>0 ? '100%' : fieldWidth(c2.type,child.forms.length,l)\">\r\n                                                <div cdkDrag>\r\n                                                  <div class=\"fields-content\"\r\n                                                    [class]=\"c2.forms && c2.forms.length>0 ? 'sub-category-forms' :''\">\r\n                                                    <div class=\"button-action child-3-background\"\r\n                                                      *ngIf=\"c2.forms && c2.forms.length>0\">\r\n                                                      <button class=\"transparent-button\" mat-raised-button\r\n                                                        (click)=\"$event.preventDefault()\">\r\n                                                        <mat-icon class=\"drag-icon\"> drag_indicator </mat-icon>\r\n                                                      </button>\r\n                                                    </div>\r\n                                                    <div class=\"fields-container\">\r\n                                                      <lib-sub-category [field]=\"c2\" [length]=\"child?.forms?.length\"\r\n                                                        [blink]=\"checkBlink(l,3)===newFieldIndex\" [i]=\"k\" [j]=\"l\"\r\n                                                        (onCheckValue)=\"onCheckValue($event)\"\r\n                                                        (onAddKeywordFromInput)=\"addKeywordFromInput($event.event, $event.prev, i, j, k, l)\"\r\n                                                        (onKeyPress)=\"onKeyPress($event.event, i, j, k, l)\"\r\n                                                        (onAddNewField)=\"onAddNewField(i, j, k)\"\r\n                                                        (onRemoveField)=\"onRemoveField(i, j, k, l)\"\r\n                                                        (onChangeType)=\"onChangeType(c2.type, i, j, k, l)\"\r\n                                                        (onRemoveKeyword)=\"removeKeyword($event.event, i, j, k, l)\"\r\n                                                        (onAddNewSubLevelField)=\"onAddNewSubLevelField(i, j, k, l)\"\r\n                                                        (onExpendMore)=\"onExpendMore($event, i, j, k, l)\"\r\n                                                        (onChangeLabel)=\"onChangeLabel($event, i, j, k, l)\"\r\n                                                        (onCheckedChip)=\"onCheckedChip($event, i, j, k, l)\"\r\n                                                        (onDrop)=\"drop($event)\"\r\n                                                        (onCheckedDefault)=\"onCheckedDefault($event, i, j, k, l)\"\r\n                                                        (onEditBlock)=\"onEditBlock(c2, i, j, k, l)\"\r\n                                                        [conditionData]=\"conditionData\">\r\n                                                        <div class=\"child\"></div>\r\n                                                      </lib-sub-category>\r\n                                                    </div>\r\n                                                  </div>\r\n                                                </div>\r\n                                                <div class=\"add-button-sub-category\"\r\n                                                  *ngIf=\"child?.forms?.length - 1 === l\">\r\n                                                  <button style=\"margin: 10px auto\" mat-raised-button color=\"primary\"\r\n                                                    (click)=\"onAddNewField(i, j, k)\">\r\n                                                    <span>Ajouter un champ</span>\r\n                                                    <mat-icon> add </mat-icon>\r\n                                                  </button>\r\n                                                </div>\r\n                                              </div>\r\n                                            </div>\r\n                                          </div>\r\n                                        </lib-sub-category>\r\n                                      </div>\r\n                                    </div>\r\n                                  </div>\r\n                                  <div class=\"add-button-sub-category\" *ngIf=\"field?.forms?.length - 1 === k\">\r\n                                    <button style=\"margin: 10px auto\" mat-raised-button color=\"primary\"\r\n                                      (click)=\"onAddNewField(i, j)\">\r\n                                      <span>Ajouter un champ</span>\r\n                                      <mat-icon>add</mat-icon>\r\n                                    </button>\r\n                                  </div>\r\n                                </div>\r\n                              </div>\r\n                            </div>\r\n                          </lib-sub-category>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"add-button-container add-button-sub-category\" *ngIf=\"category?.forms?.length - 1 === j\">\r\n                      <button style=\"margin: 10px auto; padding:10px 0\" class=\"add-button\"\r\n                        [disabled]=\"category?.forms?.length - 1 !== j\"\r\n                        [style.opacity]=\"category?.forms?.length - 1 === j ? 1 : 0\" mat-raised-button color=\"primary\"\r\n                        (click)=\"onAddNewField(i)\">\r\n                        <span>Ajouter un champ</span>\r\n                        <mat-icon>add</mat-icon>\r\n                      </button>\r\n                    </div>\r\n                  </div>\r\n                </ng-container>\r\n              </div>\r\n            </div>\r\n          </section>\r\n\r\n          <div class=\"add-button-container add-category-button add-step\">\r\n            <button (click)=\"onAddNewCategory($event)\">\r\n              Ajouter une \u00E9tape\r\n              <mat-icon>add</mat-icon>\r\n            </button>\r\n          </div>\r\n          <section style=\"background-color: transparent\">\r\n            <div style=\"height: 400px;\"></div>\r\n          </section>\r\n        </div>\r\n      </div>\r\n      <div class=\"field-property\">\r\n        <div class=\"property-content\" *ngIf=\"isBlock && currentEditBlock\">\r\n          <h3>Param\u00E8tre du bloc {{ currentEditBlock.label }}</h3>\r\n          <div class=\"property-content-inner\" style=\"width: 100%;\">\r\n            <mat-form-field class=\"form-field mat-select full-width\" style=\"cursor: pointer\" appearance=\"outline\">\r\n              <mat-label>Type de bloc</mat-label>\r\n              <mat-select (click)=\"onOpenTypeDialog(currentEditBlock)\" disabled=\"true\" required\r\n                [(ngModel)]=\"currentEditBlock.type\" (ngModelChange)=\"onChangeTypeBlock(currentEditBlock)\"\r\n                [ngModelOptions]=\"{ standalone: true }\" class=\"select-type-class\">\r\n                <mat-option value=\"text\">Text(80)</mat-option>\r\n                <mat-option value=\"textarea\">Text(80+)</mat-option>\r\n                <mat-option value=\"radio\">Radio</mat-option>\r\n                <mat-option value=\"select\">Selecteur</mat-option>\r\n                <mat-option value=\"toggle\">Toggle</mat-option>\r\n                <mat-option value=\"checkbox\">Checkbox</mat-option>\r\n                <mat-option value=\"checkbox_multiple\">Checkbox multiple</mat-option>\r\n                <mat-option value=\"email\">Email</mat-option>\r\n                <mat-option value=\"password\">Password</mat-option>\r\n                <mat-option value=\"date\">Date</mat-option>\r\n                <mat-option value=\"tel\">Phone</mat-option>\r\n                <mat-option value=\"none\">Aucun</mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n            <ng-container *ngIf=\"currentEditBlock.type!=='none'\">\r\n              <mat-form-field class=\"form-field full-width\" appearance=\"outline\">\r\n                <mat-label>Nom / Label</mat-label>\r\n                <input type=\"text\" [(ngModel)]=\"currentEditBlock.label\" [ngModelOptions]=\"{ standalone: true }\" matInput\r\n                  required placeholder=\"\" />\r\n              </mat-form-field>\r\n              <ng-container [ngSwitch]=\"currentEditBlock.type\">\r\n                <div *ngSwitchCase=\"'toggle'\" class=\"flex-auto\"\r\n                  style=\"display: flex;align-items: flex-end;margin: 10px 0;\">\r\n                  <mat-slide-toggle class=\"form-field\" color=\"#6FE8D7\" [(ngModel)]=\"currentEditBlock.defaultValue\"\r\n                    [ngModelOptions]=\"{ standalone: true }\">\r\n                  </mat-slide-toggle>\r\n                  <span style=\"margin-left: 10px;\">Valeur par d\u00E9faut</span>\r\n                </div>\r\n                <div *ngSwitchCase=\"'checkbox'\" class=\"flex-auto\">\r\n                  <mat-checkbox class=\"form-field\" [(ngModel)]=\"currentEditBlock.value\"\r\n                    [ngModelOptions]=\"{ standalone: true }\">\r\n                    Coch\u00E9 par d\u00E9fault\r\n                  </mat-checkbox>\r\n                </div>\r\n                <mat-form-field *ngSwitchCase=\"\r\n                                ['select', 'radio', 'checkbox_multiple'].includes(currentEditBlock.type) ? currentEditBlock.type : !currentEditBlock.type\r\n                              \" class=\"flex-auto full-width\" appearance=\"outline\">\r\n                  <mat-label> Valeur par d\u00E9fault </mat-label>\r\n                  <mat-chip-list #childList=\"cdkDropList\" [cdkDropListData]=\"currentEditBlock.defaultValue\" cdkDropList\r\n                    (cdkDropListDropped)=\"drop($event)\" #chipList aria-label=\"Video keywords; let index=index\" multiple\r\n                    selectable>\r\n                    <mat-chip style=\"min-height: 25px;width: auto;\" *ngFor=\"let option of currentEditBlock.defaultValue\"\r\n                      [selected]=\"option.checked\" [value]=\"option.value\" [removable]=\"true\"\r\n                      (dblclick)=\"onCheckedChipBlock(option, currentEditBlock)\" (click)=\"onEditChip(option)\"\r\n                      (removed)=\"removeKeywordBlock(option, currentEditBlock)\" cdkDrag>\r\n                      {{ option.value }}\r\n                      <mat-icon matChipRemove>cancel</mat-icon>\r\n                    </mat-chip>\r\n                    <input #chipsInput placeholder=\"add...\" [matChipInputFor]=\"chipList\" [matChipInputAddOnBlur]=\"true\"\r\n                      (matChipInputTokenEnd)=\"addKeywordFromInputBlock($event, currentEditBlock, prevValue)\"\r\n                      [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\"\r\n                      (keyup)=\"onKeyUpChip($event, currentEditBlock)\" [(ngModel)]=\"currentChip\"\r\n                      [ngModelOptions]=\"{ standalone: true }\" />\r\n                  </mat-chip-list>\r\n                </mat-form-field>\r\n                <mat-form-field *ngSwitchCase=\"'textarea'\" class=\"form-field full-width\" appearance=\"outline\">\r\n                  <mat-label>Valeur par d\u00E9fault</mat-label>\r\n                  <input type=\"text\" matInput [ngModelOptions]=\"{ standalone: true }\"\r\n                    [(ngModel)]=\"currentEditBlock.defaultValue\" placeholder=\"Description...\" />\r\n                </mat-form-field>\r\n\r\n                <mat-form-field *ngSwitchDefault class=\"form-field full-width\"\r\n                  [style.opacity]=\"currentEditBlock.type !== 'tel' ? 1 : 0\" appearance=\"outline\">\r\n                  <mat-label>Valeur par d\u00E9fault</mat-label>\r\n                  <input [type]=\"currentEditBlock.type\" [disabled]=\"currentEditBlock.type === 'tel'\" matInput\r\n                    [ngModelOptions]=\"{ standalone: true }\" [(ngModel)]=\"currentEditBlock.defaultValue\"\r\n                    placeholder=\"\" />\r\n                </mat-form-field>\r\n              </ng-container>\r\n\r\n              <div class=\"mandatory top-10 bottom-10\">\r\n                <div class=\"toogle-button\">\r\n                  <span>Obligatoire</span>\r\n                  <mat-slide-toggle color=\"#6FE8D7\" [(ngModel)]=\"currentEditBlock.isMandatory\"\r\n                    [ngModelOptions]=\"{ standalone: true }\">\r\n                  </mat-slide-toggle>\r\n                </div>\r\n              </div>\r\n              <div class=\"mandatory top-10\">\r\n                <div class=\"toogle-button\">\r\n                  <span>Visibilit\u00E9 conditionnelle</span>\r\n                  <mat-slide-toggle color=\"#6FE8D7\" [(ngModel)]=\"currentEditBlock.isConditional\"\r\n                    [ngModelOptions]=\"{ standalone: true }\">\r\n                  </mat-slide-toggle>\r\n                </div>\r\n              </div>\r\n              <ng-container *ngIf=\"currentEditBlock?.isConditional\">\r\n                <mat-form-field class=\"form-field mat-select full-width\" appearance=\"outline\">\r\n                  <mat-label>Selectionnez la cat\u00E9gorie</mat-label>\r\n                  <mat-select [(ngModel)]=\"all\" [ngModelOptions]=\"{ standalone: true }\"\r\n                    (selectionChange)=\"onSelectCondition('all','s1', $event.value)\">\r\n                    <mat-option *ngFor=\"let item of conditionData.all\" [value]=\"item.key\">{{\r\n                      item.label }}\r\n                    </mat-option>\r\n                  </mat-select>\r\n                </mat-form-field>\r\n                <mat-form-field *ngIf=\"conditionData.s1?.length > 0\" class=\"form-field mat-select full-width\"\r\n                  appearance=\"outline\">\r\n                  <mat-label>Selectionnez la sous cat\u00E9gorie (s1)</mat-label>\r\n                  <mat-select [(ngModel)]=\"s1\" [ngModelOptions]=\"{ standalone: true }\"\r\n                    (selectionChange)=\"onSelectCondition('s1','s2', $event.value)\">\r\n                    <mat-option *ngFor=\"let item of conditionData.s1\" [value]=\"item.key\">{{\r\n                      item.label }}\r\n                    </mat-option>\r\n                  </mat-select>\r\n                </mat-form-field>\r\n                <mat-form-field class=\"form-field mat-select full-width\" *ngIf=\"conditionData.s2?.length>0\"\r\n                  appearance=\"outline\">\r\n                  <mat-label>Selectionnez la sous cat\u00E9gorie (s2)</mat-label>\r\n                  <mat-select [(ngModel)]=\"s2\" [ngModelOptions]=\"{ standalone: true }\"\r\n                    (selectionChange)=\"onSelectCondition('s2','s3', $event.value)\">\r\n                    <mat-option *ngFor=\"let item of conditionData.s2\" [value]=\"item.key\">{{\r\n                      item.label }}\r\n                    </mat-option>\r\n                  </mat-select>\r\n                </mat-form-field>\r\n                <mat-form-field class=\"form-field mat-select full-width\" *ngIf=\"conditionData.s3?.length>0\"\r\n                  appearance=\"outline\">\r\n                  <mat-label>Selectionnez la sous cat\u00E9gorie (s3)</mat-label>\r\n                  <mat-select [(ngModel)]=\"s3\" [ngModelOptions]=\"{ standalone: true }\"\r\n                    (selectionChange)=\"onSelectCondition('s3','s4', $event.value)\">\r\n                    <mat-option *ngFor=\"let item of conditionData.s3\" [value]=\"item.key\">{{\r\n                      item.label }}\r\n                    </mat-option>\r\n                  </mat-select>\r\n                </mat-form-field>\r\n              </ng-container>\r\n\r\n              <mat-radio-group\r\n                *ngIf=\"currentEditBlock.isConditional && onGetDefaultValue() && onGetDefaultValue()?.length>0\"\r\n                aria-labelledby=\"example-radio-group-label\" class=\"example-radio-group\"\r\n                [(ngModel)]=\"currentEditBlock.condition.value\" [ngModelOptions]=\"{ standalone: true }\">\r\n                <mat-radio-button class=\"example-radio-button\" style=\"margin-right: 10px\"\r\n                  *ngFor=\"let item of onGetDefaultValue()\" [value]=\"item.value\">\r\n                  {{ item.value }}\r\n                </mat-radio-button>\r\n              </mat-radio-group>\r\n              <div class=\"bloc-action\">\r\n                <button *ngIf=\"paramsIndex.length<4\" mat-button [disabled]=\"!currentEditBlock.editable\"\r\n                  (click)=\"onAddNewSubLevelFieldBlock($event)\">Sous-cat\u00E9gorie <mat-icon>device_hub\r\n                  </mat-icon></button>\r\n                <button mat-button [disabled]=\"!currentEditBlock.editable\" (click)=\"onDuplicatedBlock($event)\">Dupliquer\r\n                  le bloc<mat-icon>filter_none</mat-icon>\r\n                </button>\r\n                <button mat-button [disabled]=\"!currentEditBlock.editable\" class=\"delete-bloc\"\r\n                  (click)=\"onRemoveFieldBlock($event)\">Supprimer le bloc <mat-icon>\r\n                    delete </mat-icon></button>\r\n              </div>\r\n            </ng-container>\r\n          </div>\r\n        </div>\r\n        <div class=\"property-content\" *ngIf=\"isSection && currentEditBlock\">\r\n          <h3>Param\u00E8tre de la section {{ currentEditBlock.name }}</h3>\r\n          <div class=\"property-content-inner\">\r\n            <mat-form-field class=\"form-field full-width\" appearance=\"outline\">\r\n              <mat-label>Nom de la section</mat-label>\r\n              <input (ngModelChange)=\"onChangeCategoryName()\" type=\"text\" matInput required placeholder=\"\"\r\n                [(ngModel)]=\"currentEditBlock.name\" [ngModelOptions]=\"{ standalone: true }\" />\r\n            </mat-form-field>\r\n            <mat-form-field class=\"form-field mat-select full-width\" appearance=\"outline\">\r\n              <mat-label>Equipe de gestion</mat-label>\r\n              <mat-select required [(ngModel)]=\"currentEditBlock.selector.value\"\r\n                [ngModelOptions]=\"{ standalone: true }\">\r\n                <mat-option [value]=\"item.value\" *ngFor=\"let item of currentEditBlock.selector.defaultValue\">{{\r\n                  item.value }}</mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n            <div class=\"bloc-action\">\r\n              <button mat-button (click)=\"onAddNewSubLevelFieldBlock($event)\">Sous-cat\u00E9gorie <mat-icon>device_hub\r\n                </mat-icon></button>\r\n              <button mat-button (click)=\"onDuplicatedBlock($event)\">Dupliquer le bloc<mat-icon>filter_none</mat-icon>\r\n              </button>\r\n              <button [disabled]=\"!currentEditBlock.editable\" mat-button class=\"delete-bloc\"\r\n                (click)=\"onRemoveFieldBlock($event)\">Supprimer le bloc <mat-icon>\r\n                  delete</mat-icon></button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</main>", styles: ["main{background:#f4f7f9 0% 0% no-repeat padding-box;height:100vh;display:flex;flex-direction:column;align-items:center;padding:25px}main .disabled label{background-color:transparent!important}main form{display:flex;height:89%;width:100%}main .box-title{width:786px;margin-top:20vh;background:#ffffff 0% 0% no-repeat padding-box;border:1px solid #dce4e9;border-radius:6px;opacity:1;margin:auto;padding:0 25px;align-self:center}main .box-title h3{text-align:center;font: 900 32px/48px Nexa;letter-spacing:0px;color:#171f26}main .box-title label,main .box-title input{font: 18px/24px Nexa Text;letter-spacing:0px;color:#171f26}main .box-title .profil-name-content{display:flex;align-items:center;position:relative}main .box-title .profil-name-content .add-picto{margin-right:15px;min-width:50px;width:30px;padding:9px 12px}main .box-title .profil-name-content .add-picto mat-icon{margin-right:10px}main .box-title .profil-name-content .list-picto{position:absolute;height:200px;width:100%;background:#ffffff 0% 0% no-repeat padding-box;border:1px solid #171f26;border-radius:8px;top:100%;z-index:1}main .box-title .profil-name-content .list-picto mat-icon{margin:15px;border:none;font-size:40px}main .box-title .profil-name-content .list-picto mat-icon:hover{color:#830b6b!important;cursor:pointer}main .box-title .box-title-content{width:100%;margin:25px auto}main .box-title .title{font: 900 32px/38px Nexa;letter-spacing:0px;color:#171f26}main .box-title p{font: 15px/26px Nexa Text;letter-spacing:0px;color:#171f26;text-align:center}main .box-title .link-create-profil{width:100%;display:flex;justify-content:center}main .box-title button{text-align:center;border:1px solid #543cb6;border-radius:7px;color:#fff;padding:.7em 2em .5em;display:flex;align-items:center;background-color:transparent;font: 700 15px/17px Nexa;letter-spacing:0px;color:#543cb6}main .action{width:100%;display:flex;justify-content:space-between}main .header-create-profile{width:100%;margin:10px 15px;border-radius:5px;height:100%}main .header-create-profile .header-create-profile-top{display:flex;align-items:center;text-align:center;justify-content:space-between}main .header-create-profile .header-create-profile-top .create-profile-action{display:flex;align-items:center;gap:25px}main .header-create-profile h3{font-size:25px;padding-bottom:5px;font-family:Nexa Text;display:flex;align-items:center;justify-content:center}main .header-create-profile h3 span{text-overflow:ellipsis;white-space:nowrap;overflow:hidden;font-family:Nexa;font-weight:700;font-size:24px;line-height:110%;text-align:center;color:#242731;text-transform:capitalize}main .header-create-profile h3 mat-icon{margin-left:15px;cursor:pointer}main .header-create-profile .create-profile-menus{max-width:100%;overflow:auto}main .header-create-profile .create-profile-menus ul{font-weight:600;font-size:16px;list-style:none;display:flex;align-items:center;gap:20px;padding:0}main .header-create-profile .create-profile-menus ul li{font-weight:400;font-size:12px;cursor:pointer;text-align:left;font: 12px/19px Nexa Text;letter-spacing:0px;color:#535760}main .header-create-profile .create-profile-menus ul li .mat-mini-fab{width:28px;height:28px;line-height:24px}main .header-create-profile .create-profile-menus ul li.li-title:hover{border-bottom:2px solid #723CEB}main .header-create-profile .create-profile-menus ul li.li-title.active{border-bottom:2px solid #723CEB;font-weight:600}.expand-button{color:#5a607f!important;background-color:transparent!important;box-shadow:none!important}.input-category-name{font-size:15px;font-weight:500;border:none;outline:none;text-align:left;color:#171f26;font-family:Nexa;font-weight:700;font-size:20px;line-height:28px;color:#242731}.sub-category-name{font-family:Nexa;font-style:normal;font-weight:250;font-size:14px;line-height:16px;display:flex;align-items:center;color:#575f6e;word-break:break-word}.full-width{width:100%}.field-action{width:10%}.field-size{width:90%;margin:auto 2% auto auto}::ng-deep .mat-mini-fab .mat-button-wrapper{padding:0!important}::ng-deep .mat-form-field-appearance-fill .mat-form-field-flex{background-color:#fff}::ng-deep .mat-select.mat-form-field-appearance-outline .mat-form-field-infix{padding:.5em 0}::ng-deep .mat-select{padding:8px 0}::ng-deep .mat-form-field-appearance-fill .mat-form-field-underline:before{background-color:transparent}::ng-deep .mat-form-field-wrapper{padding-bottom:0!important}:host ::ng-deep .input-category-name div.mat-form-field-outline-start,:host ::ng-deep .cdk-drag-preview .input-category-name div.mat-form-field-outline-start{border-color:0!important;border-width:0px!important}:host ::ng-deep .input-category-name .mat-form-field-outline-gap{border-color:0!important;border-width:0px!important}:host ::ng-deep .mat-checkbox-indeterminate.mat-accent .mat-checkbox-background,:host ::ng-deep .mat-checkbox-checked.mat-accent .mat-checkbox-background{background-color:transparent}:host ::ng-deep .input-category-name .mat-form-field-outline-end{border-color:0!important;border-width:0px!important}:host ::ng-deep .input-category-name .mat-form-field-label-wrapper{display:none}:host ::ng-deep .input-category-name .mat-form-field-appearance-outline .mat-form-field-outline{color:transparent!important}:host ::ng-deep .input-category-name .mat-form-field-infix{border-top:none}.category-action{display:flex;width:100%}.delete-field{margin:auto 2%}.radio-group .mat-radio-button{margin-right:10px}.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary{background-color:#3f51b5;color:#fff;min-height:20px;font-size:10px}.move-icons{cursor:move}.category-item,.cdk-drag-placeholder{display:flex;align-items:baseline;position:relative;width:100%;border-radius:8px;background-color:#fff;margin-bottom:15px;margin-right:5px;padding:6px 15px}.category-item .left-action,.cdk-drag-placeholder .left-action{height:auto;width:40px;align-self:baseline;border-top-left-radius:8px;border-bottom-left-radius:8px}.category-item .left-action .transparent-button,.cdk-drag-placeholder .left-action .transparent-button{background-color:transparent;box-shadow:none;width:40px;padding:0;margin:0;min-width:auto;color:#fff}.category-item .left-action .transparent-button .drag-icon,.cdk-drag-placeholder .left-action .transparent-button .drag-icon{color:#171f26;cursor:move;margin-right:15px}.category-item .field-content,.cdk-drag-placeholder .field-content{width:calc(100% - 40px);align-self:center}.category-item .field-content .child-list,.cdk-drag-placeholder .field-content .child-list{display:flex;flex-wrap:wrap;background-color:transparent;width:103%;position:relative;margin-left:-1.5%}.category-item .field-content .field-item,.cdk-drag-placeholder .field-content .field-item{display:flex;justify-content:space-between;align-items:baseline;border:transparent!important}.category-item .field-content .field-item mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-outline,.cdk-drag-placeholder .field-content .field-item mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-outline{color:transparent!important}.category-item .field-content .mat-form-field-outline,.cdk-drag-placeholder .field-content .mat-form-field-outline{color:transparent!important}.field-box{margin-bottom:15px;display:flex;align-items:center}.cdk-drag-preview{box-sizing:border-box;border-radius:4px;opacity:1}.cdk-drag-preview .expand-button{color:#5a607f!important;background-color:transparent!important;box-shadow:none!important;margin-right:6px!important}.cdk-drag-placeholder{opacity:0}.cdk-drag-animating{transition:transform .25s cubic-bezier(0,0,.2,1)}.example-list.cdk-drop-list-dragging .category-item:not(.cdk-drag-placeholder){transition:transform .25s cubic-bezier(0,0,.2,1)}.child{margin-left:0}.child-content{display:flex;flex-wrap:wrap;margin-bottom:30px}.sub-category-forms{margin-bottom:0!important;margin-top:10px!important}.category{display:flex;flex-direction:row;width:100%;height:100%}.category .fields{width:100%;overflow:hidden;overflow-x:hidden;position:relative;padding-top:10px;height:calc(100% - 10px)}.category .fields .fields-inner{max-height:100%;height:100%;width:100%;overflow:auto}.category .fields .add-category-button{position:relative!important;width:calc(100% - 40px)!important;padding:20px 0}.category .fields .add-category-button mat-icon{margin-left:10px}.category .fields .add-step{bottom:0!important;top:0!important;width:100%!important}.category .disabled{background-color:#f4f7f9!important}.category .expand-button{color:#5a607f!important;background-color:transparent!important;box-shadow:none!important;margin-right:6px!important}.category .expand-button .material-icons{font-size:40px}.category .transparent-button{background-color:transparent;box-shadow:none;width:40px;padding:0;margin:0;margin-left:0!important;min-width:auto;color:#fff}.add-button-sub-category{width:93%;position:absolute;left:3%;bottom:-13px}.add-button-sub-category button span{width:100%}.add-button-container{background:#ffffff 0% 0% no-repeat padding-box;border-radius:8px;margin-top:10px;padding:10px 0;display:flex;justify-content:center;align-items:center;width:100%;margin-bottom:22px;position:absolute;left:0;top:100%}.add-button-container button{display:flex;align-items:center;background-color:transparent;border:none;cursor:pointer;font: 17px/26px Nexa Text;letter-spacing:0px;color:#000;box-shadow:none}.add-button-container button span{width:100%}.add-category{background-color:#fcfcfe;border-radius:5px;line-height:26px;margin-left:10px;margin-bottom:10px;font: 700 12px/19px Nexa Text;letter-spacing:0px;color:#c2c8d5;width:92%}.field-content .cdk-drag{width:100%}.cdk-drag{width:auto;position:relative}.cdk-drag .fields-content{display:flex;height:100%;width:100%;margin:0}.cdk-drag .fields-content .button-action{align-self:baseline;margin-top:0;margin-left:3px;border-bottom-left-radius:8px;border-top-left-radius:8px}.cdk-drag .fields-content .button-action .transparent-button{background-color:transparent;box-shadow:none;width:40px;padding:0;margin:0;min-width:auto;color:#fff}.cdk-drag .fields-content .button-action .transparent-button .drag-icon{color:#171f26;cursor:move;margin-right:15px}.cdk-drag .fields-content .child-3-background{background-color:#e5e8ee!important}.cdk-drag .fields-content .fields-container{border-radius:0 8px 8px 0;background-color:#fff;width:100%;padding-left:10px;padding-right:10px;padding-top:5px;position:relative;margin-bottom:10px}.cdk-drag .fields-content .fields-container lib-sub-category .field-item{display:flex;justify-content:space-between;align-items:center;width:100%}.cdk-drag .fields-content .fields-container lib-sub-category .field-item .button-action{background-color:#039be5!important;height:100%;margin:auto 15px auto auto;display:flex}.cdk-drag .fields-content .fields-container lib-sub-category .field-item .button-action button{box-shadow:none;background-color:transparent;color:#fff}.side-bar{display:flex;flex-direction:column}.register-button{background:no-repeat padding-box #171f26!important;border:2px solid #171f26!important;color:#fff!important;box-shadow:0 0 #0003;border-radius:7px}.forward{padding:6px}.live-button{background-color:#fff!important;color:#171f26!important;border:2px solid #171f26!important}.content-item{transition-property:border-image-slice border-image-source border-width;transition-timing-function:ease-in-out;transition-duration:.5s}.active-content{border-image-slice:1;border-width:2px;border-image-source:linear-gradient(to left,#9d107d,#4862ab)}.field-property{padding:11px;height:calc(100% - 22px);width:370px}.field-property h3{font-family:Nexa;font-size:20px;line-height:110%;padding-top:10px;display:flex;align-items:center;color:#242731}.field-property .property-content{display:flex;flex-direction:column;align-items:flex-start;padding:0 20px;background:#ffffff;border-radius:8px 8px 0 0;min-height:100%;height:auto;width:370px}.field-property .property-content button{text-align:center}.field-property .property-content .property-content-inner{display:flex;flex-direction:column;gap:25px}.field-property .bloc-action{text-align:center}.field-property .bloc-action button{width:100%;padding:6px;margin-top:10px}.field-property .bloc-action button mat-icon{margin-left:5px}.field-property .bloc-action .delete-bloc{background:#f44336;box-shadow:0 0 #0003;border-radius:7px;color:#fff}.fields-inner::-webkit-scrollbar{width:5px}.fields-inner::-webkit-scrollbar-track{box-shadow:inset 0 0 2px transparent;border-radius:10px}.fields-inner::-webkit-scrollbar-thumb{background:transparent;border-radius:10px}.fields-inner::-webkit-scrollbar-thumb:hover{background:transparent}.toogle-button{color:#707273!important;display:flex;align-items:center;font-family:Nexa;font-style:normal;font-weight:400;font-size:18px;line-height:18px}.toogle-button span{padding-right:10px}:host ::ng-deep .category .mat-slide-toggle.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar{background-color:#039be5!important;position:relative;width:42px;height:23px;flex-shrink:0;border-radius:14px}:host ::ng-deep .category .mat-slide-toggle:not(.mat-disabled) .mat-slide-toggle-bar{background-color:#707273!important}:host ::ng-deep .category .mat-slide-toggle:not(.mat-disabled) .mat-slide-toggle-bar{position:relative;width:42px;height:23px;flex-shrink:0;border-radius:14px}:host ::ng-deep .category .mat-slide-toggle.mat-checked:not(.mat-disabled) .mat-slide-toggle-thumb{background-color:#fff;margin-top:4px}:host ::ng-deep .category .mat-slide-toggle:not(.mat-disabled) .mat-slide-toggle-thumb{margin-top:4px;margin-left:4px}:host ::ng-deep .category .mat-slide-toggle.draft:not(.mat-disabled) .mat-slide-toggle-bar{background-color:#707273!important}:host ::ng-deep .category .mat-slide-toggle.draft.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar{background-color:#039be5!important}.top-10{margin-top:10px}.bottom-10{margin-bottom:10px}.section-item{border:2px solid transparent;overflow:hidden}.section-item:hover,.section-item.active{border:2px solid #242731;border-radius:8px;cursor:pointer}::ng-deep .select-type-class.mat-select-disabled .mat-select-value{color:#000!important;cursor:pointer}::ng-deep button .mat-button-wrapper{display:flex;align-items:center;justify-content:center}::ng-deep .field-content .mat-form-field,::ng-deep .field-content .select-content{width:100%}::ng-deep .field-content .mat-form-field-infix{display:block;position:relative;flex:auto;min-width:0;width:100%!important}::ng-deep .fields-content .mat-radio-button.mat-accent.mat-radio-checked .mat-radio-outer-circle,::ng-deep .property-content .mat-radio-button.mat-accent.mat-radio-checked .mat-radio-outer-circle{border-color:#039be5!important}::ng-deep .fields-content .mat-radio-button.mat-accent .mat-radio-inner-circle,::ng-deep .fields-content .mat-radio-button.mat-accent .mat-radio-ripple .mat-ripple-element:not(.mat-radio-persistent-ripple),::ng-deep .fields-content .mat-radio-button.mat-accent.mat-radio-checked .mat-radio-persistent-ripple,::ng-deep .fields-content .mat-radio-button.mat-accent:active .mat-radio-persistent-ripple,::ng-deep .property-content .mat-radio-button.mat-accent .mat-radio-inner-circle,::ng-deep .property-content .mat-radio-button.mat-accent .mat-radio-ripple .mat-ripple-element:not(.mat-radio-persistent-ripple),::ng-deep .property-content .mat-radio-button.mat-accent.mat-radio-checked .mat-radio-persistent-ripple,::ng-deep .property-content .mat-radio-button.mat-accent:active .mat-radio-persistent-ripple{background-color:#039be5!important}::ng-deep .fields-content .mat-checkbox-checkmark-path,::ng-deep .property-content .mat-checkbox-checkmark-path{stroke:#039be5!important}::ng-deep .fields-content .mat-checkbox-frame,::ng-deep .property-content .mat-checkbox-frame{border:2px solid #039BE5!important}::ng-deep .fields-content .mat-checkbox-inner-container,::ng-deep .property-content .mat-checkbox-inner-container{height:20px!important;width:20px!important}.setting{z-index:1;background-color:#d5d6d7!important;border-radius:40px;width:42px!important;height:40px!important;padding:0 10px!important;display:flex;align-items:center;justify-content:center;display:none}.setting .setting-icon,.setting .transparent-button{color:#171f26}.sub-header:hover .setting{display:flex}.add-button-sub-category button{margin:10px auto;width:100%;background-color:transparent;color:#000;box-shadow:none;background-color:#fcfcfe;padding:5px span;padding-width:100%!important}::ng-deep .add-button{padding:10px 0}::ng-deep .add-button span{width:100%}::ng-deep .mat-button[disabled]{opacity:.5!important}\n"] }]
    }], function () { return [{ type: i1.FormBuilder }, { type: i2.OnboardingService }, { type: i3.ActivatedRoute }, { type: i3.Router }, { type: i4.MatDialog }, { type: i5.ScrollToService }]; }, { onScroll: [{
            type: HostListener,
            args: ['scroll', ['$event']]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVtcGxhdGUtcHJvZmlsZS1jcmVhdGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvb25ib2FyZGluZy9zcmMvbGliL3BhZ2VzL3RlbXBsYXRlLXByb2ZpbGUtY3JlYXRlL3RlbXBsYXRlLXByb2ZpbGUtY3JlYXRlLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL29uYm9hcmRpbmcvc3JjL2xpYi9wYWdlcy90ZW1wbGF0ZS1wcm9maWxlLWNyZWF0ZS90ZW1wbGF0ZS1wcm9maWxlLWNyZWF0ZS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBSyxTQUFTLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNuRSxPQUFPLEVBQWUsZUFBZSxFQUFFLGlCQUFpQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDekYsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDaEUsT0FBTyxFQUEwQixVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVwRSxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSxtRkFBbUYsQ0FBQztBQUNsSSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxzREFBc0QsQ0FBQztBQUs1RixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sc0RBQXNELENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDSDNFLG1DQUFxRTs7O0lBR3JFLG1DQUFvRTs7OztJQWdCdEUsOEJBQ29GO0lBQWxGLGtRQUFTLGlDQUFvQixJQUFDO0lBQzlCLFlBQ0Y7SUFBQSxpQkFBSzs7Ozs7SUFIZ0Isd0RBQXlDO0lBQzdCLCtDQUE4Qix5QkFBQTtJQUM3RCxlQUNGO0lBREUsNENBQ0Y7OztJQW1DVSxnQ0FBdUM7SUFBQSw2QkFBYTtJQUFBLGlCQUFXOzs7SUFD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QUksS0FBSyxRQUFRLElBQUksSUFBSSxLQUFLLE9BQU8sSUFBSSxJQUFJLEtBQUssbUJBQW1CLEVBQUU7WUFDekUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDO1NBQzdDO2FBQU0sSUFBSSxJQUFJLEtBQUssVUFBVSxJQUFJLElBQUksS0FBSyxRQUFRLEVBQUU7WUFDbkQsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1NBQy9DO2FBQU07WUFDTCxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksR0FBRyxFQUFFLENBQUM7U0FDN0M7SUFDSCxDQUFDO0lBRUQsVUFBVSxDQUFDLEtBQVUsRUFBRSxHQUFHLE1BQU07UUFDOUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDckIsTUFBTSxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQztRQUM3QixNQUFNLEtBQUssR0FBRyxNQUFNLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2xRLElBQUksS0FBSyxDQUFDLEdBQUcsS0FBSyxHQUFHLEVBQUU7WUFDckIsTUFBTSxLQUFLLEdBQUcsS0FBSyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsaUJBQWlCLEVBQUUsS0FBSyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxDQUFDO1lBQ3ZJLElBQUksQ0FBQyxLQUFLLEVBQUU7Z0JBQ1YsS0FBSyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUM7b0JBQ3RCLEtBQUssRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUN2QyxPQUFPLEVBQUUsS0FBSztpQkFDZixDQUFDLENBQUM7Z0JBQ0gsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO2FBQ3pCO2lCQUFNO2dCQUNMLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQzthQUN6QjtTQUNGO1FBQ0QsNEJBQTRCO0lBQzlCLENBQUM7SUFFRCxhQUFhLENBQUMsT0FBWSxFQUFFLEdBQUcsTUFBTTtRQUNuQyxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUNyQixNQUFNLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDO1FBQzdCLE1BQU0sS0FBSyxHQUFHLE1BQU0sS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbFEsS0FBSyxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLEtBQUssS0FBSyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDM0YsNEJBQTRCO0lBQzlCLENBQUM7SUFFRCxZQUFZLENBQUMsS0FBSyxFQUFFLEdBQUcsTUFBTTtRQUMzQixJQUFJLEtBQUssRUFBRTtZQUNULElBQUksS0FBSyxDQUFDLEtBQUssRUFBRTtnQkFDZixLQUFLLENBQUMsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO2FBQzlCO1lBQ0QsSUFBSSxLQUFLLENBQUMsS0FBSyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxVQUFVLEVBQUU7Z0JBQzFDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtvQkFDL0MsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO29CQUN0QyxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFO3dCQUM1QixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFOzRCQUN4RCxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO3lCQUNoRDtxQkFDRjtpQkFDRjthQUNGO1NBRUY7UUFDRCxJQUFJLE1BQU0sQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUM7U0FDaEY7YUFBTSxJQUFJLE1BQU0sQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBQzlCLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxFQUFFO2dCQUMxRCxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO2FBQ2hFO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztnQkFDN0MsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQzthQUMvRDtTQUNGO2FBQU0sSUFBSSxNQUFNLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtZQUM5QixJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLEVBQUU7Z0JBQzNFLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO2FBQ2pGO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztnQkFDN0MsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztnQkFDOUQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7YUFDaEY7U0FDRjthQUFNO1lBQ0wsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsRUFBRTtnQkFDNUYsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO2FBQ2xHO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztnQkFDN0MsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztnQkFDOUQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7Z0JBQy9FLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQzthQUNqRztTQUNGO0lBQ0gsQ0FBQztJQUVELGdCQUFnQixDQUFDLEtBQUssRUFBRSxHQUFHLE1BQU07UUFDL0IsSUFBSSxNQUFNLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtZQUN2QixJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7U0FDakQ7YUFBTSxJQUFJLE1BQU0sQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBQzlCLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztZQUNoRCxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO1NBQ2xFO2FBQU0sSUFBSSxNQUFNLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtZQUM5QixJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7WUFDaEQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztZQUNqRSxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztTQUNuRjthQUFNO1lBQ0wsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO1lBQ2hELElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7WUFDakUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7WUFDbEYsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO1NBQ3BHO1FBQ0QsNEJBQTRCO0lBQzlCLENBQUM7SUFFRCxtQkFBbUIsQ0FBQyxLQUF3QixFQUFFLElBQUksRUFBRSxHQUFHLE1BQU07UUFDM0QsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDckIsTUFBTSxLQUFLLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQztRQUMxQixNQUFNLEtBQUssR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDO1FBQzFCLE1BQU0sTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUM7UUFDN0IsTUFBTSxLQUFLLEdBQUcsTUFBTSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMs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QUFDO0lBQy9DLENBQUM7SUFDRCxhQUFhLENBQUMsS0FBVSxFQUFFLEdBQUcsTUFBTTtRQUNqQyxNQUFNLEdBQUcsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNuQyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUNuQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQzNEO1FBQ0QsTUFBTSxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQztRQUM3QixNQUFNLEtBQUssR0FBRyxNQUFNLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMs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LFlBQVksR0FBRyxFQUFFLENBQUM7WUFDeEIsS0FBSyxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7U0FDbEI7SUFDSCxDQUFDO0lBRUQsMEJBQTBCLENBQUMsS0FBSztRQUM5QixLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDckIsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUM7UUFDdkMsTUFBTSxLQUFLLEdBQUcsTUFBTSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxH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QyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO2dCQUNyTCxJQUFJLFVBQVUsQ0FBQyxNQUFNLEtBQUssUUFBUSxFQUFFO29CQUNsQyxJQUFJLE1BQU0sS0FBSyxDQUFDLElBQUksVUFBVSxDQUFDLFFBQVEsS0FBSyxVQUFVLEVBQUU7d0JBQ3RELEtBQUssQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFBO3FCQUM1Qjt5QkFBTSxJQUFJLE1BQU0sS0FBSyxDQUFDLElBQUksVUFBVSxDQUFDLFFBQVEsS0FBSyxPQUFPLEVBQUU7d0JBQzFELEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQTtxQkFDN0M7eUJBQU07d0JBQ0wsS0FBSyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUE7cUJBQzVCO29CQUNELElBQUksVUFBVSxDQUFDLFFBQVEsS0FBSyxVQUFVLEVBQUU7d0JBQ3RDLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztxQkFDOUQ7eUJBQU07d0JBQ0wsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsRUFBRSxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUE7cUJBQzdEO2lCQUNGO3FCQUFNO29CQUNMLElBQUksTUFBTSxLQUFLLENBQUMsSUFBSSxVQUFVLENBQUMsUUFBUSxLQUFLLFVBQVUsRUFBRTt3QkFDdEQsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFBO3FCQUNwQzt5QkFBTSxJQUFJLE1BQU0sS0FBSyxDQUFDLElBQUksVUFBVSxDQUFD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QjtRQUFxQixlQUN2RTtRQUR1RSw4Q0FDdkU7UUFFcUIsZUFBNEI7UUFBNUIscURBQTRCO1FBQy9DLGVBQ0Y7UUFERSw4Q0FDRjtRQUVRLGVBQTZEO1FBQTdELHFGQUE2RDtRQUk3RCxlQUFxRjtRQUFyRixxSEFBcUY7UUFRZCxlQUFlO1FBQWYsd0NBQWU7UUFZOUYsZUFBa0I7UUFBbEIsb0NBQWtCO1FBSWhCLGVBQThCO1FBQTlCLGdEQUE4QjtRQUNtQyxlQUFlO1FBQWYsd0NBQWU7UUFxT25ELGVBQWlDO1FBQWpDLDBEQUFpQztRQStKakMsZUFBbUM7UUFBbkMsNERBQW1DOzt1RkQ3WjdELDhCQUE4QjtjQUwxQyxTQUFTOzJCQUNFLG9DQUFvQztzTUF3cUM5QyxRQUFRO2tCQURQLFlBQVk7bUJBQUMsUUFBUSxFQUFFLENBQUMsUUFBUSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgQ09NTUEsIEVOVEVSLCBJLCBTRU1JQ09MT04gfSBmcm9tIFwiQGFuZ3VsYXIvY2RrL2tleWNvZGVzXCI7XHJcbmltcG9ydCB7IENka0RyYWdEcm9wLCBtb3ZlSXRlbUluQXJyYXksIHRyYW5zZmVyQXJyYXlJdGVtIH0gZnJvbSBcIkBhbmd1bGFyL2Nkay9kcmFnLWRyb3BcIjtcclxuaW1wb3J0IHsgQ29tcG9uZW50LCBIb3N0TGlzdGVuZXIsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGb3JtQnVpbGRlciwgRm9ybUdyb3VwLCBWYWxpZGF0b3JzIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcblxyXG5pbXBvcnQgeyBEaWFsb2dDcmVhdGVUZW1wbGF0ZUNvbXBvbmVudCB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3RlbXBsYXRlL2RpYWxvZy1jcmVhdGUtdGVtcGxhdGUvZGlhbG9nLWNyZWF0ZS10ZW1wbGF0ZS5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgRXhpdENvbmZpcm1Db21wb25lbnQgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9leGl0LWNvbmZpcm0vZXhpdC1jb25maXJtLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBNYXRDaGlwSW5wdXRFdmVudCB9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbC9jaGlwc1wiO1xyXG5pbXBvcnQgeyBNYXREaWFsb2cgfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nXCI7XHJcbmltcG9ydCB7IE9uYm9hcmRpbmdTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL29uYm9hcmRpbmcuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBTY3JvbGxUb1NlcnZpY2UgfSBmcm9tICdAbmlja3ktbGVuYWVycy9uZ3gtc2Nyb2xsLXRvJztcclxuaW1wb3J0IHsgVHlwZUNvbXBvbmVudCB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3RlbXBsYXRlL3R5cGUtZGlhbG9nL3R5cGUuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IGZpZWxkV2lkdGggfSBmcm9tIFwiLi4vLi4vdXRpbHMvdXRpbHNcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiBcIm9uYm9hcmRpbmctY3JlYXRlLXByb2ZpbGUtdGVtcGxhdGVcIixcclxuICB0ZW1wbGF0ZVVybDogXCIuL3RlbXBsYXRlLXByb2ZpbGUtY3JlYXRlLmNvbXBvbmVudC5odG1sXCIsXHJcbiAgc3R5bGVVcmxzOiBbXCIuL3RlbXBsYXRlLXByb2ZpbGUtY3JlYXRlLmNvbXBvbmVudC5zY3NzXCJdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgVGVtcGxhdGVQcm9maWxlQ3JlYXRlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBmb3JtOiBGb3JtR3JvdXA7XHJcbiAgdmFsaWRDYXRlZ29yeSA9IGZhbHNlO1xyXG4gIHNlcGFyYXRvcktleXNDb2RlcyA9IFtFTlRFUiwgQ09NTUEsIFNFTUlDT0xPTl07XHJcbiAgY3VycmVudFByb2ZpbDogYW55ID0ge307XHJcbiAgY2FuRXhpdCA9IHRydWU7XHJcbiAgdGFncyA9IFtdO1xyXG4gIGlkID0gXCIwXCI7XHJcbiAgcGFyZW50ID0gW107XHJcbiAgbG9hZGluZyA9IGZhbHNlO1xyXG4gIGVkaXRJbmRleCA9IG51bGw7XHJcbiAgc2hvd1Byb2ZpbGVOYW1lID0gdHJ1ZTtcclxuICBsaXZlTGFiZWwgPSBcIlB1YmxpZXJcIlxyXG4gIGRyYWZ0TGFiZWwgPSBcIkVucmVnaXN0cmVyIGxlIGJyb3VpbGxvblwiXHJcbiAgaW52YWxpZGVWYWx1ZTogYm9vbGVhbjtcclxuXHJcbiAgaXNQaWN0b0xpc3RTaG93OiBib29sZWFuO1xyXG4gIHBpY3RvID0gXCJcIjtcclxuICBhbGwgPSBcIlwiXHJcbiAgczEgPSBcIlwiXHJcbiAgczIgPSBcIlwiXHJcbiAgczMgPSBcIlwiXHJcbiAgczQgPSBcIlwiXHJcbiAgY29uZGl0aW9uRGF0YSA9IHtcclxuICAgIGFsbDogW10sXHJcbiAgICBzMTogW10sXHJcbiAgICBzMjogW10sXHJcbiAgICBzMzogW10sXHJcbiAgICBkZWZhdWx0VmFsdWU6IFtdXHJcbiAgfTtcclxuICBjYXRlZ29yaWVzID0gW107XHJcbiAgaXNCbG9jayA9IGZhbHNlO1xyXG4gIGlzU2VjdGlvbiA9IGZhbHNlO1xyXG4gIGN1cnJlbnRFZGl0QmxvY2s6IGFueTtcclxuICBjdXJyZW50Q2hpcCA9IFwiXCJcclxuICBwcmV2VmFsdWUgPSBcIlwiXHJcbiAgcGFyYW1zSW5kZXg6IGFueVtdO1xyXG4gIGhpc3RvcmljcyA9IFtdO1xyXG4gIGN1cnJlbnRDYW5jZWxlZEluZGV4ID0gbnVsbDtcclxuICBuZXdGaWVsZEluZGV4ID0gbnVsbDtcclxuICBpc1N1Ym1pdHRlZDogYm9vbGVhbjtcclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgZmI6IEZvcm1CdWlsZGVyLFxyXG4gICAgcHVibGljIHNlcnZpY2U6IE9uYm9hcmRpbmdTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXHJcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxyXG4gICAgcHJpdmF0ZSBkaWFsb2c6IE1hdERpYWxvZyxcclxuICAgIHByaXZhdGUgc2Nyb2xsVG9TZXJ2aWNlOiBTY3JvbGxUb1NlcnZpY2VcclxuICApIHtcclxuICAgIHRoaXMuc2VydmljZS5fY3VycmVudFRlbXBsYXRlLnN1YnNjcmliZSgocHJvZmlsKSA9PiB7XHJcbiAgICAgIHRoaXMuaW5pdEZvcm0oKVxyXG4gICAgICBpZiAocHJvZmlsKSB7XHJcbiAgICAgICAgdGhpcy5mb3JtLnBhdGNoVmFsdWUocHJvZmlsKTtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvZmlsJywgSlNPTi5zdHJpbmdpZnkocHJvZmlsKSlcclxuXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc3QgcHJvZmlsID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvZmlsJykpO1xyXG4gICAgICAgIGlmIChwcm9maWwpIHtcclxuICAgICAgICAgIHRoaXMuZm9ybS5wYXRjaFZhbHVlKHByb2ZpbCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgZGVmYXVsdENhdGVnb3JpZTogYW55ID0gW1xyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIlV0aWxpc2F0ZXVyXCIsXHJcbiAgICAgIGtleTogJ3V0aWxpc2F0ZXVyJyxcclxuICAgICAgZWRpdGFibGU6IGZhbHNlLFxyXG4gICAgICBkZWxldGVhYmxlOiBmYWxzZSxcclxuICAgICAgZXhwYW5kTW9yZTogZmFsc2UsXHJcbiAgICAgIGV4cGFuZE9uYm9hcmRpbmc6IHRydWUsXHJcbiAgICAgIGRlZmF1bHRWYWx1ZTogZmFsc2UsXHJcbiAgICAgIHN1ZmZpeEVuZHBvaW50OiBcImNhdGVnb3J5L3VzZXJcIixcclxuICAgICAgc2VsZWN0b3I6IHtcclxuICAgICAgICBsYWJlbDogXCJDb21wYW55XCIsXHJcbiAgICAgICAga2V5OiBcIkNvbXBhbnlcIixcclxuICAgICAgICBkZWZhdWx0VmFsdWU6IFt7IHZhbHVlOiBcIk5vd3RlYW1cIiwgY2hlY2tlZDogdHJ1ZSB9LCB7IHZhbHVlOiBcIkludGVybmFsXCIsIGNoZWNrZWQ6IGZhbHNlIH1dLFxyXG4gICAgICAgIHZhbHVlOiBcIk5vd3RlYW1cIlxyXG4gICAgICB9LFxyXG4gICAgICB0aWNrZXRUeXBlOiB7XHJcbiAgICAgICAgbGFiZWw6IFwiVHlwZSBkZSB0aWNrZXRcIixcclxuICAgICAgICBrZXk6IFwidHlja2V0VHlwZVwiLFxyXG4gICAgICAgIGRlZmF1bHRWYWx1ZTogW3sgdmFsdWU6IFwiQ3LDqWF0aW9uIGRlIGNvbXB0ZVwiLCBjaGVja2VkOiB0cnVlLCBrZXk6IFwiQ3JlYXRpb25fZGVfY29tcHRlXCIgfSwgeyB2YWx1ZTogXCJDb25maWd1cmF0aW9uIGRlIHBvc3RlXCIsIGNoZWNrZWQ6IGZhbHNlLCBrZXk6IFwiQ29uZmlndXJhdGlvbl9kZV9wb3N0ZVwiIH1dLFxyXG4gICAgICAgIHZhbHVlOiBcIkNyZWF0aW9uX2RlX2NvbXB0ZVwiXHJcbiAgICAgIH0sXHJcbiAgICAgIGZvcm1zOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbGFiZWw6IFwiQ2l2aWxpdMOpXCIsXHJcbiAgICAgICAgICBrZXk6IFwiU2FsdXRhdGlvblwiLFxyXG4gICAgICAgICAgZXhwYW5kT25ib2FyZGluZzogdHJ1ZSxcclxuICAgICAgICAgIGRlZmF1bHRWYWx1ZTogW3sgdmFsdWU6IFwiTS5cIiwgY2hlY2tlZDogZmFsc2UgfSwgeyB2YWx1ZTogXCJNbWVcIiwgY2hlY2tlZDogZmFsc2UgfV0sXHJcbiAgICAgICAgICBjb25kaXRpb246IHt9LFxyXG4gICAgICAgICAgdmFsdWU6IG51bGwsXHJcbiAgICAgICAgICBzaXplOiAxMCxcclxuICAgICAgICAgIGlzTWFuZGF0b3J5OiB0cnVlLFxyXG4gICAgICAgICAgb3RoZXJWYWx1ZTogJycsXHJcbiAgICAgICAgICB0eXBlOiBcInNlbGVjdFwiLFxyXG4gICAgICAgICAgZWRpdGFibGU6IGZhbHNlLFxyXG4gICAgICAgICAgZGVsZXRlYWJsZTogZmFsc2UsXHJcbiAgICAgICAgICBzdWJMZXZlbDogMSxcclxuXHJcbiAgICAgICAgICBleHBhbmRNb3JlOiBmYWxzZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGxhYmVsOiBcIlR5cGUgZGUgcHJvZmlsXCIsXHJcbiAgICAgICAgICBrZXk6IFwiVHlwZV9kZV9wcm9maWxfTm93Ym9hcmRfX2NcIixcclxuICAgICAgICAgIGV4cGFuZE9uYm9hcmRpbmc6IHRydWUsXHJcbiAgICAgICAgICBkZWZhdWx0VmFsdWU6IFt7IHZhbHVlOiBcIk1hbmFnZXJcIiwgY2hlY2tlZDogZmFsc2UgfSwgeyB2YWx1ZTogXCJVdGlsaXNhdGV1clwiLCBjaGVja2VkOiBmYWxzZSB9XSxcclxuICAgICAgICAgIGNvbmRpdGlvbjoge30sXHJcbiAgICAgICAgICB2YWx1ZTogbnVsbCxcclxuICAgICAgICAgIHNpemU6IDEwLFxyXG4gICAgICAgICAgaXNNYW5kYXRvcnk6IHRydWUsXHJcbiAgICAgICAgICBvdGhlclZhbHVlOiAnJyxcclxuICAgICAgICAgIHR5cGU6IFwic2VsZWN0XCIsXHJcbiAgICAgICAgICBlZGl0YWJsZTogZmFsc2UsXHJcbiAgICAgICAgICBkZWxldGVhYmxlOiBmYWxzZSxcclxuICAgICAgICAgIHN1YkxldmVsOiAxLFxyXG4gICAgICAgICAgZXhwYW5kTW9yZTogZmFsc2UsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBsYWJlbDogXCJOb21cIixcclxuICAgICAgICAgIGtleTogXCJMYXN0TmFtZVwiLFxyXG4gICAgICAgICAgZXhwYW5kT25ib2FyZGluZzogdHJ1ZSxcclxuICAgICAgICAgIGRlZmF1bHRWYWx1ZTogbnVsbCxcclxuICAgICAgICAgIHZhbHVlOiBudWxsLFxyXG4gICAgICAgICAgc2l6ZTogODAsXHJcbiAgICAgICAgICBpc01hbmRhdG9yeTogdHJ1ZSxcclxuICAgICAgICAgIGNvbmRpdGlvbjoge30sXHJcbiAgICAgICAgICBvdGhlclZhbHVlOiAnJyxcclxuICAgICAgICAgIHR5cGU6IFwidGV4dFwiLFxyXG4gICAgICAgICAgZWRpdGFibGU6IGZhbHNlLFxyXG4gICAgICAgICAgZGVsZXRlYWJsZTogZmFsc2UsXHJcbiAgICAgICAgICBzdWJMZXZlbDogMSxcclxuICAgICAgICAgIGV4cGFuZE1vcmU6IGZhbHNlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbGFiZWw6IFwiUHLDqW5vbVwiLFxyXG4gICAgICAgICAga2V5OiBcIkZpcnN0TmFtZVwiLFxyXG4gICAgICAgICAgZXhwYW5kT25ib2FyZGluZzogdHJ1ZSxcclxuICAgICAgICAgIGNvbmRpdGlvbjoge30sXHJcbiAgICAgICAgICBkZWZhdWx0VmFsdWU6IG51bGwsXHJcbiAgICAgICAgICB2YWx1ZTogbnVsbCxcclxuICAgICAgICAgIHNpemU6IDgwLFxyXG4gICAgICAgICAgaXNNYW5kYXRvcnk6IHRydWUsXHJcbiAgICAgICAgICBvdGhlclZhbHVlOiAnJyxcclxuICAgICAgICAgIHR5cGU6IFwidGV4dFwiLFxyXG4gICAgICAgICAgZWRpdGFibGU6IGZhbHNlLFxyXG4gICAgICAgICAgZGVsZXRlYWJsZTogZmFsc2UsXHJcbiAgICAgICAgICBzdWJMZXZlbDogMSxcclxuICAgICAgICAgIGV4cGFuZE1vcmU6IGZhbHNlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbGFiZWw6IFwiRW1haWxcIixcclxuICAgICAgICAgIGtleTogXCJFbWFpbFwiLFxyXG4gICAgICAgICAgZXhwYW5kT25ib2FyZGluZzogdHJ1ZSxcclxuICAgICAgICAgIGRlZmF1bHRWYWx1ZTogbnVsbCxcclxuICAgICAgICAgIGNvbmRpdGlvbjoge30sXHJcbiAgICAgICAgICB2YWx1ZTogbnVsbCxcclxuICAgICAgICAgIHNpemU6IDgwLFxyXG4gICAgICAgICAgaXNNYW5kYXRvcnk6IHRydWUsXHJcbiAgICAgICAgICBvdGhlclZhbHVlOiAnJyxcclxuICAgICAgICAgIHR5cGU6IFwiZW1haWxcIixcclxuICAgICAgICAgIGVkaXRhYmxlOiBmYWxzZSxcclxuICAgICAgICAgIGRlbGV0ZWFibGU6IGZhbHNlLFxyXG4gICAgICAgICAgc3ViTGV2ZWw6IDEsXHJcbiAgICAgICAgICBleHBhbmRNb3JlOiBmYWxzZSxcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICB7XHJcbiAgICAgICAgICBsYWJlbDogXCJGaXhlIChvcHQpXCIsXHJcbiAgICAgICAgICBrZXk6IFwiUGhvbmVcIixcclxuICAgICAgICAgIGV4cGFuZE9uYm9hcmRpbmc6IHRydWUsXHJcbiAgICAgICAgICBkZWZhdWx0VmFsdWU6IG51bGwsXHJcbiAgICAgICAgICBjb25kaXRpb246IHt9LFxyXG4gICAgICAgICAgdmFsdWU6IG51bGwsXHJcbiAgICAgICAgICBzaXplOiAyMCxcclxuICAgICAgICAgIGlzTWFuZGF0b3J5OiBmYWxzZSxcclxuICAgICAgICAgIG90aGVyVmFsdWU6ICcnLFxyXG4gICAgICAgICAgdHlwZTogXCJ0ZWxcIixcclxuICAgICAgICAgIGVkaXRhYmxlOiBmYWxzZSxcclxuICAgICAgICAgIGRlbGV0ZWFibGU6IGZhbHNlLFxyXG4gICAgICAgICAgc3ViTGV2ZWw6IDEsXHJcblxyXG4gICAgICAgICAgZXhwYW5kTW9yZTogZmFsc2UsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBsYWJlbDogXCJNb2JpbGVcIixcclxuICAgICAgICAgIGtleTogXCJNb2JpbGVQaG9uZVwiLFxyXG4gICAgICAgICAgZXhwYW5kT25ib2FyZGluZzogdHJ1ZSxcclxuICAgICAgICAgIGRlZmF1bHRWYWx1ZTogbnVsbCxcclxuICAgICAgICAgIGNvbmRpdGlvbjoge30sXHJcbiAgICAgICAgICB2YWx1ZTogbnVsbCxcclxuICAgICAgICAgIHNpemU6IDIwLFxyXG4gICAgICAgICAgaXNNYW5kYXRvcnk6IGZhbHNlLFxyXG4gICAgICAgICAgb3RoZXJWYWx1ZTogJycsXHJcbiAgICAgICAgICB0eXBlOiBcInRlbFwiLFxyXG4gICAgICAgICAgZWRpdGFibGU6IGZhbHNlLFxyXG4gICAgICAgICAgZGVsZXRlYWJsZTogZmFsc2UsXHJcbiAgICAgICAgICBzdWJMZXZlbDogMSxcclxuICAgICAgICAgIGV4cGFuZE1vcmU6IGZhbHNlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbGFiZWw6IFwiRm9uY3Rpb25cIixcclxuICAgICAgICAgIGtleTogXCJUaXRsZVwiLFxyXG4gICAgICAgICAgZXhwYW5kT25ib2FyZGluZzogdHJ1ZSxcclxuICAgICAgICAgIGRlZmF1bHRWYWx1ZTogbnVsbCxcclxuICAgICAgICAgIHZhbHVlOiBudWxsLFxyXG4gICAgICAgICAgY29uZGl0aW9uOiB7fSxcclxuICAgICAgICAgIHNpemU6IDgwLFxyXG4gICAgICAgICAgaXNNYW5kYXRvcnk6IHRydWUsXHJcbiAgICAgICAgICBvdGhlclZhbHVlOiAnJyxcclxuICAgICAgICAgIHR5cGU6IFwidGV4dFwiLFxyXG4gICAgICAgICAgZWRpdGFibGU6IGZhbHNlLFxyXG4gICAgICAgICAgZGVsZXRlYWJsZTogZmFsc2UsXHJcbiAgICAgICAgICBzdWJMZXZlbDogMSxcclxuICAgICAgICAgIGV4cGFuZE1vcmU6IGZhbHNlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbGFiZWw6IFwiRXRhYmxpc3NlbWVudCAvIFNpdGVcIixcclxuICAgICAgICAgIGtleTogXCJBY2NvdW50TmFtZVwiLFxyXG4gICAgICAgICAgZXhwYW5kT25ib2FyZGluZzogdHJ1ZSxcclxuICAgICAgICAgIGRlZmF1bHRWYWx1ZTogbnVsbCxcclxuICAgICAgICAgIHZhbHVlOiBudWxsLFxyXG4gICAgICAgICAgY29uZGl0aW9uOiB7fSxcclxuICAgICAgICAgIHNpemU6IDgwLFxyXG4gICAgICAgICAgaXNNYW5kYXRvcnk6IHRydWUsXHJcbiAgICAgICAgICBvdGhlclZhbHVlOiAnJyxcclxuICAgICAgICAgIHR5cGU6IFwidGV4dFwiLFxyXG4gICAgICAgICAgZWRpdGFibGU6IGZhbHNlLFxyXG4gICAgICAgICAgZGVsZXRlYWJsZTogZmFsc2UsXHJcbiAgICAgICAgICBzdWJMZXZlbDogMSxcclxuICAgICAgICAgIGV4cGFuZE1vcmU6IGZhbHNlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbGFiZWw6IFwiQWNjw6hzIGF1IHBvcnRhaWxcIixcclxuICAgICAgICAgIGtleTogXCJBY2Nfc19hdV9wb3J0YWlsX2NsaWVudF9Ob3dCb2FyZF9fY1wiLFxyXG4gICAgICAgICAgY29uZGl0aW9uOiB7fSxcclxuICAgICAgICAgIGV4cGFuZE9uYm9hcmRpbmc6IHRydWUsXHJcbiAgICAgICAgICBkZWZhdWx0VmFsdWU6IFt7IHZhbHVlOiBcIk91aVwiLCBjaGVja2VkOiBmYWxzZSB9LCB7IHZhbHVlOiBcIk5vblwiLCBjaGVja2VkOiBmYWxzZSB9XSxcclxuICAgICAgICAgIHZhbHVlOiBudWxsLFxyXG4gICAgICAgICAgc2l6ZTogMTAsXHJcbiAgICAgICAgICBpc01hbmRhdG9yeTogdHJ1ZSxcclxuICAgICAgICAgIG90aGVyVmFsdWU6ICcnLFxyXG4gICAgICAgICAgdHlwZTogXCJzZWxlY3RcIixcclxuICAgICAgICAgIGVkaXRhYmxlOiBmYWxzZSxcclxuICAgICAgICAgIGRlbGV0ZWFibGU6IGZhbHNlLFxyXG4gICAgICAgICAgc3ViTGV2ZWw6IDEsXHJcblxyXG4gICAgICAgICAgZXhwYW5kTW9yZTogZmFsc2UsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBsYWJlbDogXCJMYW5ndWVcIixcclxuICAgICAgICAgIGtleTogXCJMYW5ndWVfbWF0ZXJuZWxsZV9fY1wiLFxyXG4gICAgICAgICAgZXhwYW5kT25ib2FyZGluZzogdHJ1ZSxcclxuICAgICAgICAgIGRlZmF1bHRWYWx1ZTogW3sgdmFsdWU6IFwiRnJhbsOnYWlzXCIsIGNoZWNrZWQ6IGZhbHNlIH0sIHsgdmFsdWU6IFwiQW5nbGFpc1wiLCBjaGVja2VkOiBmYWxzZSB9XSxcclxuICAgICAgICAgIGNvbmRpdGlvbjoge30sXHJcbiAgICAgICAgICB2YWx1ZTogbnVsbCxcclxuICAgICAgICAgIHNpemU6IDEwLFxyXG4gICAgICAgICAgaXNNYW5kYXRvcnk6IHRydWUsXHJcbiAgICAgICAgICBvdGhlclZhbHVlOiAnJyxcclxuICAgICAgICAgIHR5cGU6IFwic2VsZWN0XCIsXHJcbiAgICAgICAgICBlZGl0YWJsZTogZmFsc2UsXHJcbiAgICAgICAgICBkZWxldGVhYmxlOiBmYWxzZSxcclxuICAgICAgICAgIHN1YkxldmVsOiAxLFxyXG4gICAgICAgICAgZXhwYW5kTW9yZTogZmFsc2UsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBsYWJlbDogXCJEYXRlIGQnZW50csOpZVwiLFxyXG4gICAgICAgICAga2V5OiBcImRhdGVfb2ZfZW50cnlcIixcclxuICAgICAgICAgIGV4cGFuZE9uYm9hcmRpbmc6IHRydWUsXHJcbiAgICAgICAgICBkZWZhdWx0VmFsdWU6IG51bGwsXHJcbiAgICAgICAgICB2YWx1ZTogbnVsbCxcclxuICAgICAgICAgIGNvbmRpdGlvbjoge30sXHJcbiAgICAgICAgICBzaXplOiA4MCxcclxuICAgICAgICAgIGlzTWFuZGF0b3J5OiB0cnVlLFxyXG4gICAgICAgICAgb3RoZXJWYWx1ZTogJycsXHJcbiAgICAgICAgICB0eXBlOiBcImRhdGVcIixcclxuICAgICAgICAgIGVkaXRhYmxlOiBmYWxzZSxcclxuICAgICAgICAgIGRlbGV0ZWFibGU6IGZhbHNlLFxyXG4gICAgICAgICAgc3ViTGV2ZWw6IDEsXHJcbiAgICAgICAgICBleHBhbmRNb3JlOiBmYWxzZSxcclxuICAgICAgICB9LFxyXG4gICAgICBdLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJTZXNzaW9uIGQndXRpbGlzYXRldXJcIixcclxuICAgICAga2V5OiBcInNlc3Npb25kJ3V0aWxpc2F0ZXVyXCIsXHJcbiAgICAgIGVkaXRhYmxlOiB0cnVlLFxyXG4gICAgICBpc0NvbmRpdGlvbmFsOiBmYWxzZSxcclxuICAgICAgY29uZGl0aW9uVmFsdWU6IFwiXCIsXHJcbiAgICAgIGNvbmRpdGlvbjoge30sXHJcbiAgICAgIGRlbGV0ZWFibGU6IHRydWUsXHJcbiAgICAgIHNlbGVjdGVkOiB0cnVlLFxyXG4gICAgICBleHBhbmRNb3JlOiBmYWxzZSxcclxuICAgICAgZXhwYW5kT25ib2FyZGluZzogdHJ1ZSxcclxuICAgICAgZGVmYXVsdFZhbHVlOiBmYWxzZSxcclxuICAgICAgc3VmZml4RW5kcG9pbnQ6IFwiY2F0ZWdvcnkvdXNlci1zZXNzaW9uXCIsXHJcbiAgICAgIHNlbGVjdG9yOiB7XHJcbiAgICAgICAgbGFiZWw6IFwiQ29tcGFueVwiLFxyXG4gICAgICAgIGtleTogXCJDb21wYW55XCIsXHJcbiAgICAgICAgZGVmYXVsdFZhbHVlOiBbeyB2YWx1ZTogXCJOb3d0ZWFtXCIsIGNoZWNrZWQ6IHRydWUgfSwgeyB2YWx1ZTogXCJJbnRlcm5hbFwiLCBjaGVja2VkOiBmYWxzZSB9XSxcclxuICAgICAgICB2YWx1ZTogXCJOb3d0ZWFtXCJcclxuICAgICAgfSxcclxuICAgICAgdGlja2V0VHlwZToge1xyXG4gICAgICAgIGxhYmVsOiBcIlR5cGUgZGUgdGlja2V0XCIsXHJcbiAgICAgICAga2V5OiBcInR5Y2tldFR5cGVcIixcclxuICAgICAgICBkZWZhdWx0VmFsdWU6IFt7IHZhbHVlOiBcIkNyw6lhdGlvbiBkZSBjb21wdGVcIiwgY2hlY2tlZDogdHJ1ZSwga2V5OiBcIkNyZWF0aW9uX2RlX2NvbXB0ZVwiIH0sIHsgdmFsdWU6IFwiQ29uZmlndXJhdGlvbiBkZSBwb3N0ZVwiLCBjaGVja2VkOiBmYWxzZSwga2V5OiBcIkNvbmZpZ3VyYXRpb25fZGVfcG9zdGVcIiB9XSxcclxuICAgICAgICB2YWx1ZTogXCJDcmVhdGlvbl9kZV9jb21wdGVcIlxyXG4gICAgICB9LFxyXG4gICAgICBmb3JtczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIGxhYmVsOiBcIlV0aWxpc2F0ZXVyIGxvY2FsIMOgIGNyw6llclwiLFxyXG4gICAgICAgICAga2V5OiBcIlVzZXJMb2NhbFRvQ3JlYXRlXCIsXHJcbiAgICAgICAgICBleHBhbmRPbmJvYXJkaW5nOiB0cnVlLFxyXG4gICAgICAgICAgZGVmYXVsdFZhbHVlOiBudWxsLFxyXG4gICAgICAgICAgdmFsdWU6IHRydWUsXHJcbiAgICAgICAgICBzaXplOiA4MCxcclxuICAgICAgICAgIGlzTWFuZGF0b3J5OiBmYWxzZSxcclxuICAgICAgICAgIG90aGVyVmFsdWU6ICcnLFxyXG4gICAgICAgICAgdHlwZTogXCJjaGVja2JveFwiLFxyXG4gICAgICAgICAgZWRpdGFibGU6IHRydWUsXHJcbiAgICAgICAgICBpc0NvbmRpdGlvbmFsOiBmYWxzZSxcclxuICAgICAgICAgIGNvbmRpdGlvblZhbHVlOiBcIlwiLFxyXG4gICAgICAgICAgY29uZGl0aW9uOiB7fSxcclxuICAgICAgICAgIGRlbGV0ZWFibGU6IHRydWUsXHJcbiAgICAgICAgICBzdWJMZXZlbDogMSxcclxuICAgICAgICAgIGV4cGFuZE1vcmU6IGZhbHNlLFxyXG4gICAgICAgICAgLypzZWxlY3Rvcjoge1xyXG4gICAgICAgICAgICBsYWJlbDogXCJDb21wYW55XCIsXHJcbiAgICAgICAgICAgIGtleTogXCJDb21wYW55XCIsXHJcbiAgICAgICAgICAgIGRlZmF1bHRWYWx1ZTogW3sgdmFsdWU6IFwiTm93dGVhbVwiLCBjaGVja2VkOiB0cnVlIH0sIHsgdmFsdWU6IFwiSW50ZXJuYWxcIiwgY2hlY2tlZDogZmFsc2UgfV0sXHJcbiAgICAgICAgICAgIHZhbHVlOiBcIk5vd3RlYW1cIlxyXG4gICAgICAgICAgfSwqL1xyXG4gICAgICAgICAgZm9ybXM6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIGxhYmVsOiBcIkxvZ2luXCIsXHJcbiAgICAgICAgICAgICAga2V5OiBcIkxvZ2luXCIsXHJcbiAgICAgICAgICAgICAgZXhwYW5kT25ib2FyZGluZzogdHJ1ZSxcclxuICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU6IG51bGwsXHJcbiAgICAgICAgICAgICAgdmFsdWU6IG51bGwsXHJcbiAgICAgICAgICAgICAgc2l6ZTogODAsXHJcbiAgICAgICAgICAgICAgaXNNYW5kYXRvcnk6IHRydWUsXHJcbiAgICAgICAgICAgICAgb3RoZXJWYWx1ZTogJycsXHJcbiAgICAgICAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXHJcbiAgICAgICAgICAgICAgZWRpdGFibGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgaXNDb25kaXRpb25hbDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgY29uZGl0aW9uVmFsdWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgY29uZGl0aW9uOiB7fSxcclxuICAgICAgICAgICAgICBkZWxldGVhYmxlOiBmYWxzZSxcclxuICAgICAgICAgICAgICBzdWJMZXZlbDogMixcclxuICAgICAgICAgICAgICBleHBhbmRNb3JlOiBmYWxzZSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIGxhYmVsOiBcIk1vdCBkZSBwYXNzZVwiLFxyXG4gICAgICAgICAgICAgIGtleTogXCJQYXNzd29yZFwiLFxyXG4gICAgICAgICAgICAgIGV4cGFuZE9uYm9hcmRpbmc6IHRydWUsXHJcbiAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlOiBudWxsLFxyXG4gICAgICAgICAgICAgIHZhbHVlOiBudWxsLFxyXG4gICAgICAgICAgICAgIHNpemU6IDgwLFxyXG4gICAgICAgICAgICAgIGlzTWFuZGF0b3J5OiB0cnVlLFxyXG4gICAgICAgICAgICAgIG90aGVyVmFsdWU6ICcnLFxyXG4gICAgICAgICAgICAgIHR5cGU6IFwicGFzc3dvcmRcIixcclxuICAgICAgICAgICAgICBlZGl0YWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgICBpc0NvbmRpdGlvbmFsOiBmYWxzZSxcclxuICAgICAgICAgICAgICBjb25kaXRpb25WYWx1ZTogXCJcIixcclxuICAgICAgICAgICAgICBjb25kaXRpb246IHt9LFxyXG4gICAgICAgICAgICAgIGRlbGV0ZWFibGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgc3ViTGV2ZWw6IDIsXHJcbiAgICAgICAgICAgICAgZXhwYW5kTW9yZTogZmFsc2UsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICBdLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbGFiZWw6IFwiVXRpbGlzYXRldXIgQUQgKHNlcnZldXIpIMOgIGNyw6llclwiLFxyXG4gICAgICAgICAga2V5OiBcIlVzZXJTZXJ2ZXJUb0NyZWF0ZVwiLFxyXG4gICAgICAgICAgZXhwYW5kT25ib2FyZGluZzogdHJ1ZSxcclxuICAgICAgICAgIGRlZmF1bHRWYWx1ZTogbnVsbCxcclxuICAgICAgICAgIHZhbHVlOiB0cnVlLFxyXG4gICAgICAgICAgc2l6ZTogODAsXHJcbiAgICAgICAgICBpc01hbmRhdG9yeTogZmFsc2UsXHJcbiAgICAgICAgICBvdGhlclZhbHVlOiAnJyxcclxuICAgICAgICAgIHR5cGU6IFwiY2hlY2tib3hcIixcclxuICAgICAgICAgIGVkaXRhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgaXNDb25kaXRpb25hbDogZmFsc2UsXHJcbiAgICAgICAgICBjb25kaXRpb25WYWx1ZTogXCJcIixcclxuICAgICAgICAgIGNvbmRpdGlvbjoge30sXHJcbiAgICAgICAgICBkZWxldGVhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgc3ViTGV2ZWw6IDEsXHJcbiAgICAgICAgICBleHBhbmRNb3JlOiBmYWxzZSxcclxuICAgICAgICAgIGZvcm1zOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBsYWJlbDogXCJOb20gZGUgZG9tYWluZVwiLFxyXG4gICAgICAgICAgICAgIGtleTogXCJEb21haW5OYW1lXCIsXHJcbiAgICAgICAgICAgICAgZXhwYW5kT25ib2FyZGluZzogdHJ1ZSxcclxuICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU6IG51bGwsXHJcbiAgICAgICAgICAgICAgdmFsdWU6IG51bGwsXHJcbiAgICAgICAgICAgICAgc2l6ZTogODAsXHJcbiAgICAgICAgICAgICAgaXNNYW5kYXRvcnk6IHRydWUsXHJcbiAgICAgICAgICAgICAgb3RoZXJWYWx1ZTogJycsXHJcbiAgICAgICAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXHJcbiAgICAgICAgICAgICAgZWRpdGFibGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgaXNDb25kaXRpb25hbDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgY29uZGl0aW9uVmFsdWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgY29uZGl0aW9uOiB7fSxcclxuICAgICAgICAgICAgICBkZWxldGVhYmxlOiBmYWxzZSxcclxuICAgICAgICAgICAgICBzdWJMZXZlbDogMixcclxuICAgICAgICAgICAgICBleHBhbmRNb3JlOiBmYWxzZSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIGxhYmVsOiBcIlZvdHJlIGxvZ2luXCIsXHJcbiAgICAgICAgICAgICAga2V5OiBcIllvdXJMb2dpblwiLFxyXG4gICAgICAgICAgICAgIGV4cGFuZE9uYm9hcmRpbmc6IHRydWUsXHJcbiAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlOiBudWxsLFxyXG4gICAgICAgICAgICAgIHZhbHVlOiBudWxsLFxyXG4gICAgICAgICAgICAgIHNpemU6IDgwLFxyXG4gICAgICAgICAgICAgIGlzTWFuZGF0b3J5OiB0cnVlLFxyXG4gICAgICAgICAgICAgIG90aGVyVmFsdWU6ICcnLFxyXG4gICAgICAgICAgICAgIHR5cGU6IFwidGV4dFwiLFxyXG4gICAgICAgICAgICAgIGVkaXRhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICAgIGlzQ29uZGl0aW9uYWw6IGZhbHNlLFxyXG4gICAgICAgICAgICAgIGNvbmRpdGlvblZhbHVlOiBcIlwiLFxyXG4gICAgICAgICAgICAgIGNvbmRpdGlvbjoge30sXHJcbiAgICAgICAgICAgICAgZGVsZXRlYWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgICBzdWJMZXZlbDogMixcclxuICAgICAgICAgICAgICBleHBhbmRNb3JlOiBmYWxzZSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIGxhYmVsOiBcIlZvdHJlIG1vdCBkZSBwYXNzZVwiLFxyXG4gICAgICAgICAgICAgIGtleTogXCJZb3VyUGFzc3dvcmRcIixcclxuICAgICAgICAgICAgICBleHBhbmRPbmJvYXJkaW5nOiB0cnVlLFxyXG4gICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZTogbnVsbCxcclxuICAgICAgICAgICAgICB2YWx1ZTogbnVsbCxcclxuICAgICAgICAgICAgICBzaXplOiA4MCxcclxuICAgICAgICAgICAgICBpc01hbmRhdG9yeTogdHJ1ZSxcclxuICAgICAgICAgICAgICBvdGhlclZhbHVlOiAnJyxcclxuICAgICAgICAgICAgICB0eXBlOiBcInBhc3N3b3JkXCIsXHJcbiAgICAgICAgICAgICAgZWRpdGFibGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgaXNDb25kaXRpb25hbDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgY29uZGl0aW9uVmFsdWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgY29uZGl0aW9uOiB7fSxcclxuICAgICAgICAgICAgICBkZWxldGVhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICAgIHN1YkxldmVsOiAyLFxyXG4gICAgICAgICAgICAgIGV4cGFuZE1vcmU6IGZhbHNlLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgbGFiZWw6IFwiR3JvdXBlIGRlIHPDqWN1cml0w6lcIixcclxuICAgICAgICAgICAgICBrZXk6IFwiR3JvdXBTZWN1cml0eVwiLFxyXG4gICAgICAgICAgICAgIGV4cGFuZE9uYm9hcmRpbmc6IHRydWUsXHJcbiAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlOiBudWxsLFxyXG4gICAgICAgICAgICAgIHZhbHVlOiB0cnVlLFxyXG4gICAgICAgICAgICAgIHNpemU6IDgwLFxyXG4gICAgICAgICAgICAgIGlzTWFuZGF0b3J5OiB0cnVlLFxyXG4gICAgICAgICAgICAgIG90aGVyVmFsdWU6ICcnLFxyXG4gICAgICAgICAgICAgIHR5cGU6IFwiY2hlY2tib3hcIixcclxuICAgICAgICAgICAgICBlZGl0YWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgICBpc0NvbmRpdGlvbmFsOiBmYWxzZSxcclxuICAgICAgICAgICAgICBjb25kaXRpb25WYWx1ZTogXCJcIixcclxuICAgICAgICAgICAgICBjb25kaXRpb246IHt9LFxyXG4gICAgICAgICAgICAgIGRlbGV0ZWFibGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgc3ViTGV2ZWw6IDIsXHJcbiAgICAgICAgICAgICAgZXhwYW5kTW9yZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgZm9ybXM6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiVXRpbGlzYXRldXIgYXZlYyBsZXMgZHJvaXRzIHNpbWlsYWlyZXNcIixcclxuICAgICAgICAgICAgICAgICAga2V5OiBcIlVzZXJXaXRoU2ltaWxhckFjY2Vzc1wiLFxyXG4gICAgICAgICAgICAgICAgICBleHBhbmRPbmJvYXJkaW5nOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU6IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgICBzaXplOiA4MCxcclxuICAgICAgICAgICAgICAgICAgaXNNYW5kYXRvcnk6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgIG90aGVyVmFsdWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICB0eXBlOiBcInRleHRcIixcclxuICAgICAgICAgICAgICAgICAgZWRpdGFibGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgIGlzQ29uZGl0aW9uYWw6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICBjb25kaXRpb25WYWx1ZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgY29uZGl0aW9uOiB7fSxcclxuICAgICAgICAgICAgICAgICAgZGVsZXRlYWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgc3ViTGV2ZWw6IDMsXHJcbiAgICAgICAgICAgICAgICAgIGV4cGFuZE1vcmU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiRGVzY3JpcHRpb25zXCIsXHJcbiAgICAgICAgICAgICAgICAgIGtleTogXCJEZXNjcmlwdGlvblwiLFxyXG4gICAgICAgICAgICAgICAgICBleHBhbmRPbmJvYXJkaW5nOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU6IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgICBzaXplOiAyNTUsXHJcbiAgICAgICAgICAgICAgICAgIGlzTWFuZGF0b3J5OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICBvdGhlclZhbHVlOiAnJyxcclxuICAgICAgICAgICAgICAgICAgdHlwZTogXCJ0ZXh0YXJlYVwiLFxyXG4gICAgICAgICAgICAgICAgICBlZGl0YWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgaXNDb25kaXRpb25hbDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgIGNvbmRpdGlvblZhbHVlOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICBjb25kaXRpb246IHt9LFxyXG4gICAgICAgICAgICAgICAgICBkZWxldGVhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICBzdWJMZXZlbDogMyxcclxuICAgICAgICAgICAgICAgICAgZXhwYW5kTW9yZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICBdLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIF0sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIk1lc3NhZ2VyaWVcIixcclxuICAgICAga2V5OiAnbWVzc2FnZXJpZScsXHJcbiAgICAgIGV4cGFuZE1vcmU6IGZhbHNlLFxyXG4gICAgICBzdWZmaXhFbmRwb2ludDogXCJjYXRlZ29yeS9tZXNzYWdlcmllXCIsXHJcbiAgICAgIHNlbGVjdGVkOiB0cnVlLFxyXG4gICAgICBlZGl0YWJsZTogdHJ1ZSxcclxuICAgICAgaXNDb25kaXRpb25hbDogZmFsc2UsXHJcbiAgICAgIGNvbmRpdGlvblZhbHVlOiBcIlwiLFxyXG4gICAgICBjb25kaXRpb246IHt9LFxyXG4gICAgICBkZWxldGVhYmxlOiB0cnVlLFxyXG4gICAgICBleHBhbmRPbmJvYXJkaW5nOiB0cnVlLFxyXG4gICAgICBkZWZhdWx0VmFsdWU6IGZhbHNlLFxyXG4gICAgICBzZWxlY3Rvcjoge1xyXG4gICAgICAgIGxhYmVsOiBcIkNvbXBhbnlcIixcclxuICAgICAgICBrZXk6IFwiQ29tcGFueVwiLFxyXG4gICAgICAgIGRlZmF1bHRWYWx1ZTogW3sgdmFsdWU6IFwiTm93dGVhbVwiLCBjaGVja2VkOiB0cnVlIH0sIHsgdmFsdWU6IFwiSW50ZXJuYWxcIiwgY2hlY2tlZDogZmFsc2UgfV0sXHJcbiAgICAgICAgdmFsdWU6IFwiTm93dGVhbVwiXHJcbiAgICAgIH0sXHJcbiAgICAgIHRpY2tldFR5cGU6IHtcclxuICAgICAgICBsYWJlbDogXCJUeXBlIGRlIHRpY2tldFwiLFxyXG4gICAgICAgIGtleTogXCJ0eWNrZXRUeXBlXCIsXHJcbiAgICAgICAgZGVmYXVsdFZhbHVlOiBbeyB2YWx1ZTogXCJDcsOpYXRpb24gZGUgY29tcHRlXCIsIGNoZWNrZWQ6IHRydWUsIGtleTogXCJDcmVhdGlvbl9kZV9jb21wdGVcIiB9LCB7IHZhbHVlOiBcIkNvbmZpZ3VyYXRpb24gZGUgcG9zdGVcIiwgY2hlY2tlZDogZmFsc2UsIGtleTogXCJDb25maWd1cmF0aW9uX2RlX3Bvc3RlXCIgfV0sXHJcbiAgICAgICAgdmFsdWU6IFwiQ3JlYXRpb25fZGVfY29tcHRlXCJcclxuICAgICAgfSxcclxuICAgICAgZm9ybXM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBsYWJlbDogXCJBZHJlc3NlIG1haWwgw6AgY3LDqWVyXCIsXHJcbiAgICAgICAgICBrZXk6IFwiRW1haWxUb0NyZWF0ZVwiLFxyXG4gICAgICAgICAgZXhwYW5kT25ib2FyZGluZzogdHJ1ZSxcclxuICAgICAgICAgIGRlZmF1bHRWYWx1ZTogbnVsbCxcclxuICAgICAgICAgIHZhbHVlOiB0cnVlLFxyXG4gICAgICAgICAgc2l6ZTogODAsXHJcbiAgICAgICAgICBpc01hbmRhdG9yeTogdHJ1ZSxcclxuICAgICAgICAgIG90aGVyVmFsdWU6ICcnLFxyXG4gICAgICAgICAgdHlwZTogXCJjaGVja2JveFwiLFxyXG4gICAgICAgICAgZWRpdGFibGU6IHRydWUsXHJcbiAgICAgICAgICBpc0NvbmRpdGlvbmFsOiBmYWxzZSxcclxuICAgICAgICAgIGNvbmRpdGlvblZhbHVlOiBcIlwiLFxyXG4gICAgICAgICAgY29uZGl0aW9uOiB7fSxcclxuICAgICAgICAgIGRlbGV0ZWFibGU6IHRydWUsXHJcbiAgICAgICAgICBzdWJMZXZlbDogMSxcclxuICAgICAgICAgIGV4cGFuZE1vcmU6IGZhbHNlLFxyXG4gICAgICAgICAgLypzZWxlY3Rvcjoge1xyXG4gICAgICAgICAgICBsYWJlbDogXCJDb21wYW55XCIsXHJcbiAgICAgICAgICAgIGtleTogXCJDb21wYW55XCIsXHJcbiAgICAgICAgICAgIGRlZmF1bHRWYWx1ZTogW3sgdmFsdWU6IFwiTm93dGVhbVwiLCBjaGVja2VkOiB0cnVlIH0sIHsgdmFsdWU6IFwiSW50ZXJuYWxcIiwgY2hlY2tlZDogZmFsc2UgfV0sXHJcbiAgICAgICAgICAgIHZhbHVlOiBcIk5vd3RlYW1cIlxyXG4gICAgICAgICAgfSwqL1xyXG4gICAgICAgICAgZm9ybXM6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIGxhYmVsOiBcIkFkcmVzc2UgbWFpbFwiLFxyXG4gICAgICAgICAgICAgIGtleTogXCJFbWFpbFwiLFxyXG4gICAgICAgICAgICAgIGV4cGFuZE9uYm9hcmRpbmc6IHRydWUsXHJcbiAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlOiBudWxsLFxyXG4gICAgICAgICAgICAgIHZhbHVlOiBudWxsLFxyXG4gICAgICAgICAgICAgIHNpemU6IDgwLFxyXG4gICAgICAgICAgICAgIGlzTWFuZGF0b3J5OiB0cnVlLFxyXG4gICAgICAgICAgICAgIG90aGVyVmFsdWU6ICcnLFxyXG4gICAgICAgICAgICAgIHR5cGU6IFwiZW1haWxcIixcclxuICAgICAgICAgICAgICBlZGl0YWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgICBpc0NvbmRpdGlvbmFsOiBmYWxzZSxcclxuICAgICAgICAgICAgICBjb25kaXRpb25WYWx1ZTogXCJcIixcclxuICAgICAgICAgICAgICBjb25kaXRpb246IHt9LFxyXG4gICAgICAgICAgICAgIGRlbGV0ZWFibGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgc3ViTGV2ZWw6IDIsXHJcbiAgICAgICAgICAgICAgZXhwYW5kTW9yZTogZmFsc2UsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBsYWJlbDogXCJUeXBlIGRlIGxpY2VuY2UgKHNpIGfDqXLDqWVzIHBhciBsZSBjbGllbnQpXCIsXHJcbiAgICAgICAgICAgICAga2V5OiBcIlNlcmlhbEtleVwiLFxyXG4gICAgICAgICAgICAgIGV4cGFuZE9uYm9hcmRpbmc6IHRydWUsXHJcbiAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlOiBudWxsLFxyXG4gICAgICAgICAgICAgIHZhbHVlOiBudWxsLFxyXG4gICAgICAgICAgICAgIHNpemU6IDEwMDAsXHJcbiAgICAgICAgICAgICAgaXNNYW5kYXRvcnk6IHRydWUsXHJcbiAgICAgICAgICAgICAgb3RoZXJWYWx1ZTogJycsXHJcbiAgICAgICAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXHJcbiAgICAgICAgICAgICAgZWRpdGFibGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgaXNDb25kaXRpb25hbDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgY29uZGl0aW9uVmFsdWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgY29uZGl0aW9uOiB7fSxcclxuICAgICAgICAgICAgICBkZWxldGVhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICAgIHN1YkxldmVsOiAyLFxyXG4gICAgICAgICAgICAgIGV4cGFuZE1vcmU6IGZhbHNlLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgXSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGxhYmVsOiBcIkxpc3RlcyAgZGUgZGlzdHJpYnV0aW9uXCIsXHJcbiAgICAgICAgICBrZXk6IFwiRGlzdHJpYnV0aW9uTGlzdFwiLFxyXG4gICAgICAgICAgZXhwYW5kT25ib2FyZGluZzogdHJ1ZSxcclxuICAgICAgICAgIGRlZmF1bHRWYWx1ZTogbnVsbCxcclxuICAgICAgICAgIHZhbHVlOiB0cnVlLFxyXG4gICAgICAgICAgc2l6ZTogODAsXHJcbiAgICAgICAgICBpc01hbmRhdG9yeTogdHJ1ZSxcclxuICAgICAgICAgIG90aGVyVmFsdWU6ICcnLFxyXG4gICAgICAgICAgdHlwZTogXCJjaGVja2JveFwiLFxyXG4gICAgICAgICAgZWRpdGFibGU6IHRydWUsXHJcbiAgICAgICAgICBpc0NvbmRpdGlvbmFsOiBmYWxzZSxcclxuICAgICAgICAgIGNvbmRpdGlvblZhbHVlOiBcIlwiLFxyXG4gICAgICAgICAgY29uZGl0aW9uOiB7fSxcclxuICAgICAgICAgIGRlbGV0ZWFibGU6IHRydWUsXHJcbiAgICAgICAgICBzdWJMZXZlbDogMSxcclxuICAgICAgICAgIGV4cGFuZE1vcmU6IGZhbHNlLFxyXG4gICAgICAgICAgLypzZWxlY3Rvcjoge1xyXG4gICAgICAgICAgICBsYWJlbDogXCJDb21wYW55XCIsXHJcbiAgICAgICAgICAgIGtleTogXCJDb21wYW55XCIsXHJcbiAgICAgICAgICAgIGRlZmF1bHRWYWx1ZTogW3sgdmFsdWU6IFwiTm93dGVhbVwiLCBjaGVja2VkOiB0cnVlIH0sIHsgdmFsdWU6IFwiSW50ZXJuYWxcIiwgY2hlY2tlZDogZmFsc2UgfV0sXHJcbiAgICAgICAgICAgIHZhbHVlOiBcIk5vd3RlYW1cIlxyXG4gICAgICAgICAgfSwqL1xyXG4gICAgICAgICAgZm9ybXM6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIGxhYmVsOiBcIlV0aWxpc2F0ZXVyIGF2ZWMgbGVzIGxpc3RlcyBzaW1pbGFpcmVzXCIsXHJcbiAgICAgICAgICAgICAga2V5OiBcIlVzZXJXaXRoU2ltaWxhckxpc3RcIixcclxuICAgICAgICAgICAgICBleHBhbmRPbmJvYXJkaW5nOiB0cnVlLFxyXG4gICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZTogbnVsbCxcclxuICAgICAgICAgICAgICB2YWx1ZTogbnVsbCxcclxuICAgICAgICAgICAgICBzaXplOiA4MCxcclxuICAgICAgICAgICAgICBpc01hbmRhdG9yeTogdHJ1ZSxcclxuICAgICAgICAgICAgICBvdGhlclZhbHVlOiAnJyxcclxuICAgICAgICAgICAgICB0eXBlOiBcInRleHRcIixcclxuICAgICAgICAgICAgICBlZGl0YWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgICBpc0NvbmRpdGlvbmFsOiBmYWxzZSxcclxuICAgICAgICAgICAgICBjb25kaXRpb25WYWx1ZTogXCJcIixcclxuICAgICAgICAgICAgICBjb25kaXRpb246IHt9LFxyXG4gICAgICAgICAgICAgIGRlbGV0ZWFibGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgc3ViTGV2ZWw6IDIsXHJcbiAgICAgICAgICAgICAgZXhwYW5kTW9yZTogZmFsc2UsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBsYWJlbDogXCJEZXNjcmlwdGlvbnNcIixcclxuICAgICAgICAgICAgICBrZXk6IFwiRGVzY3JpcHRpb25cIixcclxuICAgICAgICAgICAgICBleHBhbmRPbmJvYXJkaW5nOiB0cnVlLFxyXG4gICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZTogbnVsbCxcclxuICAgICAgICAgICAgICB2YWx1ZTogbnVsbCxcclxuICAgICAgICAgICAgICBzaXplOiAxMDAwLFxyXG4gICAgICAgICAgICAgIGlzTWFuZGF0b3J5OiB0cnVlLFxyXG4gICAgICAgICAgICAgIG90aGVyVmFsdWU6ICcnLFxyXG4gICAgICAgICAgICAgIHR5cGU6IFwidGV4dGFyZWFcIixcclxuICAgICAgICAgICAgICBlZGl0YWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgICBpc0NvbmRpdGlvbmFsOiBmYWxzZSxcclxuICAgICAgICAgICAgICBjb25kaXRpb25WYWx1ZTogXCJcIixcclxuICAgICAgICAgICAgICBjb25kaXRpb246IHt9LFxyXG4gICAgICAgICAgICAgIGRlbGV0ZWFibGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgc3ViTGV2ZWw6IDIsXHJcbiAgICAgICAgICAgICAgZXhwYW5kTW9yZTogZmFsc2UsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICBdLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbGFiZWw6IFwiQWpvdXRlciBkZXMgYm9pdGVzIG1haWxzIGTDqWzDqWd1w6lzXCIsXHJcbiAgICAgICAgICBrZXk6IFwiQWRkSW5ib3hNYWlsRGVsZWdhdGVcIixcclxuICAgICAgICAgIGV4cGFuZE9uYm9hcmRpbmc6IHRydWUsXHJcbiAgICAgICAgICBkZWZhdWx0VmFsdWU6IG51bGwsXHJcbiAgICAgICAgICB2YWx1ZTogdHJ1ZSxcclxuICAgICAgICAgIHNpemU6IDgwLFxyXG4gICAgICAgICAgaXNNYW5kYXRvcnk6IHRydWUsXHJcbiAgICAgICAgICBvdGhlclZhbHVlOiAnJyxcclxuICAgICAgICAgIHR5cGU6IFwiY2hlY2tib3hcIixcclxuICAgICAgICAgIGVkaXRhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgaXNDb25kaXRpb25hbDogZmFsc2UsXHJcbiAgICAgICAgICBjb25kaXRpb25WYWx1ZTogXCJcIixcclxuICAgICAgICAgIGNvbmRpdGlvbjoge30sXHJcbiAgICAgICAgICBkZWxldGVhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgc3ViTGV2ZWw6IDEsXHJcbiAgICAgICAgICBleHBhbmRNb3JlOiBmYWxzZSxcclxuICAgICAgICAgIC8qc2VsZWN0b3I6IHtcclxuICAgICAgICAgICAgbGFiZWw6IFwiQ29tcGFueVwiLFxyXG4gICAgICAgICAgICBrZXk6IFwiQ29tcGFueVwiLFxyXG4gICAgICAgICAgICBkZWZhdWx0VmFsdWU6IFt7IHZhbHVlOiBcIk5vd3RlYW1cIiwgY2hlY2tlZDogdHJ1ZSB9LCB7IHZhbHVlOiBcIkludGVybmFsXCIsIGNoZWNrZWQ6IGZhbHNlIH1dLFxyXG4gICAgICAgICAgICB2YWx1ZTogXCJOb3d0ZWFtXCJcclxuICAgICAgICAgIH0sKi9cclxuICAgICAgICAgIGZvcm1zOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBsYWJlbDogXCJEZXNjcmlwdGlvbnNcIixcclxuICAgICAgICAgICAgICBrZXk6IFwiRGVzY3JpcHRpb25cIixcclxuICAgICAgICAgICAgICBleHBhbmRPbmJvYXJkaW5nOiB0cnVlLFxyXG4gICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZTogbnVsbCxcclxuICAgICAgICAgICAgICB2YWx1ZTogbnVsbCxcclxuICAgICAgICAgICAgICBzaXplOiAxMDAwLFxyXG4gICAgICAgICAgICAgIGlzTWFuZGF0b3J5OiB0cnVlLFxyXG4gICAgICAgICAgICAgIG90aGVyVmFsdWU6ICcnLFxyXG4gICAgICAgICAgICAgIHR5cGU6IFwidGV4dGFyZWFcIixcclxuICAgICAgICAgICAgICBlZGl0YWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgICBpc0NvbmRpdGlvbmFsOiBmYWxzZSxcclxuICAgICAgICAgICAgICBjb25kaXRpb25WYWx1ZTogXCJcIixcclxuICAgICAgICAgICAgICBjb25kaXRpb246IHt9LFxyXG4gICAgICAgICAgICAgIGRlbGV0ZWFibGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgc3ViTGV2ZWw6IDIsXHJcbiAgICAgICAgICAgICAgZXhwYW5kTW9yZTogZmFsc2UsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICBdLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIF0sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIlNlcnZldXJcIixcclxuICAgICAga2V5OiAnc2VydmV1cicsXHJcbiAgICAgIGV4cGFuZE1vcmU6IGZhbHNlLFxyXG4gICAgICBzdWZmaXhFbmRwb2ludDogXCJjYXRlZ29yeS9zZXJ2ZXVyXCIsXHJcbiAgICAgIHNlbGVjdGVkOiB0cnVlLFxyXG4gICAgICBlZGl0YWJsZTogdHJ1ZSxcclxuICAgICAgaXNDb25kaXRpb25hbDogZmFsc2UsXHJcbiAgICAgIGNvbmRpdGlvblZhbHVlOiBcIlwiLFxyXG4gICAgICBjb25kaXRpb246IHt9LFxyXG4gICAgICBkZWxldGVhYmxlOiB0cnVlLFxyXG4gICAgICBleHBhbmRPbmJvYXJkaW5nOiB0cnVlLFxyXG4gICAgICBkZWZhdWx0VmFsdWU6IGZhbHNlLFxyXG4gICAgICBzZWxlY3Rvcjoge1xyXG4gICAgICAgIGxhYmVsOiBcIkNvbXBhbnlcIixcclxuICAgICAgICBrZXk6IFwiQ29tcGFueVwiLFxyXG4gICAgICAgIGRlZmF1bHRWYWx1ZTogW3sgdmFsdWU6IFwiTm93dGVhbVwiLCBjaGVja2VkOiB0cnVlIH0sIHsgdmFsdWU6IFwiSW50ZXJuYWxcIiwgY2hlY2tlZDogZmFsc2UgfV0sXHJcbiAgICAgICAgdmFsdWU6IFwiTm93dGVhbVwiXHJcbiAgICAgIH0sXHJcbiAgICAgIHRpY2tldFR5cGU6IHtcclxuICAgICAgICBsYWJlbDogXCJUeXBlIGRlIHRpY2tldFwiLFxyXG4gICAgICAgIGtleTogXCJ0eWNrZXRUeXBlXCIsXHJcbiAgICAgICAgZGVmYXVsdFZhbHVlOiBbeyB2YWx1ZTogXCJDcsOpYXRpb24gZGUgY29tcHRlXCIsIGNoZWNrZWQ6IHRydWUsIGtleTogXCJDcmVhdGlvbl9kZV9jb21wdGVcIiB9LCB7IHZhbHVlOiBcIkNvbmZpZ3VyYXRpb24gZGUgcG9zdGVcIiwgY2hlY2tlZDogZmFsc2UsIGtleTogXCJDb25maWd1cmF0aW9uX2RlX3Bvc3RlXCIgfV0sXHJcbiAgICAgICAgdmFsdWU6IFwiQ3JlYXRpb25fZGVfY29tcHRlXCJcclxuICAgICAgfSxcclxuICAgICAgZm9ybXM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBsYWJlbDogXCJBY2PDqHMgYXV4IGxlY3RldXJzIHLDqXNlYXV4XCIsXHJcbiAgICAgICAgICBrZXk6IFwiUmVhZE5ldHdvcmtBY2Nlc3NcIixcclxuICAgICAgICAgIGV4cGFuZE9uYm9hcmRpbmc6IHRydWUsXHJcbiAgICAgICAgICBkZWZhdWx0VmFsdWU6IG51bGwsXHJcbiAgICAgICAgICB2YWx1ZTogdHJ1ZSxcclxuICAgICAgICAgIHNpemU6IDgwLFxyXG4gICAgICAgICAgaXNNYW5kYXRvcnk6IGZhbHNlLFxyXG4gICAgICAgICAgb3RoZXJWYWx1ZTogJycsXHJcbiAgICAgICAgICB0eXBlOiBcImNoZWNrYm94XCIsXHJcbiAgICAgICAgICBlZGl0YWJsZTogdHJ1ZSxcclxuICAgICAgICAgIGlzQ29uZGl0aW9uYWw6IGZhbHNlLFxyXG4gICAgICAgICAgY29uZGl0aW9uVmFsdWU6IFwiXCIsXHJcbiAgICAgICAgICBjb25kaXRpb246IHt9LFxyXG4gICAgICAgICAgZGVsZXRlYWJsZTogdHJ1ZSxcclxuICAgICAgICAgIHN1YkxldmVsOiAxLFxyXG4gICAgICAgICAgZXhwYW5kTW9yZTogZmFsc2UsXHJcbiAgICAgICAgICAvKnNlbGVjdG9yOiB7XHJcbiAgICAgICAgICAgIGxhYmVsOiBcIkNvbXBhbnlcIixcclxuICAgICAgICAgICAga2V5OiBcIkNvbXBhbnlcIixcclxuICAgICAgICAgICAgZGVmYXVsdFZhbHVlOiBbeyB2YWx1ZTogXCJOb3d0ZWFtXCIsIGNoZWNrZWQ6IHRydWUgfSwgeyB2YWx1ZTogXCJJbnRlcm5hbFwiLCBjaGVja2VkOiBmYWxzZSB9XSxcclxuICAgICAgICAgICAgdmFsdWU6IFwiTm93dGVhbVwiXHJcbiAgICAgICAgICB9LCovXHJcbiAgICAgICAgICBmb3JtczogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgbGFiZWw6IFwiTm9tIGR1IHNlcnZldXJcIixcclxuICAgICAgICAgICAgICBrZXk6IFwiU2VydmVyTmFtZVwiLFxyXG4gICAgICAgICAgICAgIGV4cGFuZE9uYm9hcmRpbmc6IHRydWUsXHJcbiAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlOiBudWxsLFxyXG4gICAgICAgICAgICAgIHZhbHVlOiBudWxsLFxyXG4gICAgICAgICAgICAgIHNpemU6IDgwLFxyXG4gICAgICAgICAgICAgIGlzTWFuZGF0b3J5OiB0cnVlLFxyXG4gICAgICAgICAgICAgIG90aGVyVmFsdWU6ICcnLFxyXG4gICAgICAgICAgICAgIHR5cGU6IFwidGV4dFwiLFxyXG4gICAgICAgICAgICAgIGVkaXRhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICAgIGlzQ29uZGl0aW9uYWw6IGZhbHNlLFxyXG4gICAgICAgICAgICAgIGNvbmRpdGlvblZhbHVlOiBcIlwiLFxyXG4gICAgICAgICAgICAgIGNvbmRpdGlvbjoge30sXHJcbiAgICAgICAgICAgICAgZGVsZXRlYWJsZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgc3ViTGV2ZWw6IDIsXHJcbiAgICAgICAgICAgICAgZXhwYW5kTW9yZTogZmFsc2UsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBsYWJlbDogXCJDaGVtaW4gZHUgZG9zc2llclwiLFxyXG4gICAgICAgICAgICAgIGtleTogXCJGb2xkZXJQYXRoXCIsXHJcbiAgICAgICAgICAgICAgZXhwYW5kT25ib2FyZGluZzogdHJ1ZSxcclxuICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU6IG51bGwsXHJcbiAgICAgICAgICAgICAgdmFsdWU6IG51bGwsXHJcbiAgICAgICAgICAgICAgc2l6ZTogODAsXHJcbiAgICAgICAgICAgICAgaXNNYW5kYXRvcnk6IHRydWUsXHJcbiAgICAgICAgICAgICAgb3RoZXJWYWx1ZTogJycsXHJcbiAgICAgICAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXHJcbiAgICAgICAgICAgICAgZWRpdGFibGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgaXNDb25kaXRpb25hbDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgY29uZGl0aW9uVmFsdWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgY29uZGl0aW9uOiB7fSxcclxuICAgICAgICAgICAgICBkZWxldGVhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICAgIHN1YkxldmVsOiAyLFxyXG4gICAgICAgICAgICAgIGV4cGFuZE1vcmU6IGZhbHNlLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgbGFiZWw6IFwiTGV0dHJlIMOgIGF0dHJpYnVlclwiLFxyXG4gICAgICAgICAgICAgIGtleTogXCJBdHRyaWJ1dExldHRlclwiLFxyXG4gICAgICAgICAgICAgIGV4cGFuZE9uYm9hcmRpbmc6IHRydWUsXHJcbiAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlOiBudWxsLFxyXG4gICAgICAgICAgICAgIHZhbHVlOiBudWxsLFxyXG4gICAgICAgICAgICAgIHNpemU6IDgwLFxyXG4gICAgICAgICAgICAgIGlzTWFuZGF0b3J5OiB0cnVlLFxyXG4gICAgICAgICAgICAgIG90aGVyVmFsdWU6ICcnLFxyXG4gICAgICAgICAgICAgIHR5cGU6IFwidGV4dFwiLFxyXG4gICAgICAgICAgICAgIGVkaXRhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICAgIGlzQ29uZGl0aW9uYWw6IGZhbHNlLFxyXG4gICAgICAgICAgICAgIGNvbmRpdGlvblZhbHVlOiBcIlwiLFxyXG4gICAgICAgICAgICAgIGNvbmRpdGlvbjoge30sXHJcbiAgICAgICAgICAgICAgZGVsZXRlYWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgICBzdWJMZXZlbDogMixcclxuICAgICAgICAgICAgICBleHBhbmRNb3JlOiBmYWxzZSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIF0sXHJcbiAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwiVlBOXCIsXHJcbiAgICAgIGtleTogJ3ZwbicsXHJcbiAgICAgIGV4cGFuZE1vcmU6IGZhbHNlLFxyXG4gICAgICBzdWZmaXhFbmRwb2ludDogXCJjYXRlZ29yeS92cG5cIixcclxuICAgICAgc2VsZWN0ZWQ6IHRydWUsXHJcbiAgICAgIGV4cGFuZE9uYm9hcmRpbmc6IHRydWUsXHJcbiAgICAgIGRlZmF1bHRWYWx1ZTogZmFsc2UsXHJcbiAgICAgIGVkaXRhYmxlOiB0cnVlLFxyXG4gICAgICBpc0NvbmRpdGlvbmFsOiBmYWxzZSxcclxuICAgICAgY29uZGl0aW9uVmFsdWU6IFwiXCIsXHJcbiAgICAgIGNvbmRpdGlvbjoge30sXHJcbiAgICAgIGRlbGV0ZWFibGU6IHRydWUsXHJcbiAgICAgIHNlbGVjdG9yOiB7XHJcbiAgICAgICAgbGFiZWw6IFwiQ29tcGFueVwiLFxyXG4gICAgICAgIGtleTogXCJDb21wYW55XCIsXHJcbiAgICAgICAgZGVmYXVsdFZhbHVlOiBbeyB2YWx1ZTogXCJOb3d0ZWFtXCIsIGNoZWNrZWQ6IHRydWUgfSwgeyB2YWx1ZTogXCJJbnRlcm5hbFwiLCBjaGVja2VkOiBmYWxzZSB9XSxcclxuICAgICAgICB2YWx1ZTogXCJOb3d0ZWFtXCJcclxuICAgICAgfSxcclxuICAgICAgdGlja2V0VHlwZToge1xyXG4gICAgICAgIGxhYmVsOiBcIlR5cGUgZGUgdGlja2V0XCIsXHJcbiAgICAgICAga2V5OiBcInR5Y2tldFR5cGVcIixcclxuICAgICAgICBkZWZhdWx0VmFsdWU6IFt7IHZhbHVlOiBcIkNyw6lhdGlvbiBkZSBjb21wdGVcIiwgY2hlY2tlZDogdHJ1ZSwga2V5OiBcIkNyZWF0aW9uX2RlX2NvbXB0ZVwiIH0sIHsgdmFsdWU6IFwiQ29uZmlndXJhdGlvbiBkZSBwb3N0ZVwiLCBjaGVja2VkOiBmYWxzZSwga2V5OiBcIkNvbmZpZ3VyYXRpb25fZGVfcG9zdGVcIiB9XSxcclxuICAgICAgICB2YWx1ZTogXCJDcmVhdGlvbl9kZV9jb21wdGVcIlxyXG4gICAgICB9LFxyXG4gICAgICBmb3JtczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIGxhYmVsOiBcIkFjY8OocyBhdSBWUE5cIixcclxuICAgICAgICAgIGtleTogXCJWcG5BY2Nlc3NcIixcclxuICAgICAgICAgIGV4cGFuZE9uYm9hcmRpbmc6IHRydWUsXHJcbiAgICAgICAgICBkZWZhdWx0VmFsdWU6IG51bGwsXHJcbiAgICAgICAgICB2YWx1ZTogdHJ1ZSxcclxuICAgICAgICAgIHNpemU6IDgwLFxyXG4gICAgICAgICAgaXNNYW5kYXRvcnk6IGZhbHNlLFxyXG4gICAgICAgICAgb3RoZXJWYWx1ZTogJycsXHJcbiAgICAgICAgICB0eXBlOiBcImNoZWNrYm94XCIsXHJcbiAgICAgICAgICBlZGl0YWJsZTogdHJ1ZSxcclxuICAgICAgICAgIGlzQ29uZGl0aW9uYWw6IGZhbHNlLFxyXG4gICAgICAgICAgY29uZGl0aW9uVmFsdWU6IFwiXCIsXHJcbiAgICAgICAgICBjb25kaXRpb246IHt9LFxyXG4gICAgICAgICAgZGVsZXRlYWJsZTogdHJ1ZSxcclxuICAgICAgICAgIHN1YkxldmVsOiAxLFxyXG4gICAgICAgICAgZXhwYW5kTW9yZTogZmFsc2UsXHJcbiAgICAgICAgICAvL2Zvcm1zOiBbXVxyXG4gICAgICAgIH0sXHJcbiAgICAgIF0sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIkltcHJpbWFudGVzXCIsXHJcbiAgICAgIGtleTogJ2ltcHJpbWFudGVzJyxcclxuICAgICAgZXhwYW5kTW9yZTogZmFsc2UsXHJcbiAgICAgIHN1ZmZpeEVuZHBvaW50OiBcImNhdGVnb3J5L2ltcHJpbWVudGVcIixcclxuICAgICAgc2VsZWN0ZWQ6IHRydWUsXHJcbiAgICAgIGVkaXRhYmxlOiB0cnVlLFxyXG4gICAgICBpc0NvbmRpdGlvbmFsOiBmYWxzZSxcclxuICAgICAgY29uZGl0aW9uVmFsdWU6IFwiXCIsXHJcbiAgICAgIGNvbmRpdGlvbjoge30sXHJcbiAgICAgIGRlbGV0ZWFibGU6IHRydWUsXHJcbiAgICAgIGV4cGFuZE9uYm9hcmRpbmc6IHRydWUsXHJcbiAgICAgIGRlZmF1bHRWYWx1ZTogZmFsc2UsXHJcbiAgICAgIHRpY2tldFR5cGU6IHtcclxuICAgICAgICBsYWJlbDogXCJUeXBlIGRlIHRpY2tldFwiLFxyXG4gICAgICAgIGtleTogXCJ0eWNrZXRUeXBlXCIsXHJcbiAgICAgICAgZGVmYXVsdFZhbHVlOiBbeyB2YWx1ZTogXCJDcsOpYXRpb24gZGUgY29tcHRlXCIsIGNoZWNrZWQ6IHRydWUsIGtleTogXCJDcmVhdGlvbl9kZV9jb21wdGVcIiB9LCB7IHZhbHVlOiBcIkNvbmZpZ3VyYXRpb24gZGUgcG9zdGVcIiwgY2hlY2tlZDogZmFsc2UsIGtleTogXCJDb25maWd1cmF0aW9uX2RlX3Bvc3RlXCIgfV0sXHJcbiAgICAgICAgdmFsdWU6IFwiQ3JlYXRpb25fZGVfY29tcHRlXCJcclxuICAgICAgfSxcclxuICAgICAgc2VsZWN0b3I6IHtcclxuICAgICAgICBsYWJlbDogXCJDb21wYW55XCIsXHJcbiAgICAgICAga2V5OiBcIkNvbXBhbnlcIixcclxuICAgICAgICBkZWZhdWx0VmFsdWU6IFt7IHZhbHVlOiBcIk5vd3RlYW1cIiwgY2hlY2tlZDogdHJ1ZSB9LCB7IHZhbHVlOiBcIkludGVybmFsXCIsIGNoZWNrZWQ6IGZhbHNlIH1dLFxyXG4gICAgICAgIHZhbHVlOiBcIk5vd3RlYW1cIlxyXG4gICAgICB9LFxyXG4gICAgICBmb3JtczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIGxhYmVsOiBcIkFjY8OocyBhdXggaW1wcmltYW50ZXNcIixcclxuICAgICAgICAgIGtleTogXCJQcmludGVyQWNjZXNzXCIsXHJcbiAgICAgICAgICBleHBhbmRPbmJvYXJkaW5nOiB0cnVlLFxyXG4gICAgICAgICAgZGVmYXVsdFZhbHVlOiBudWxsLFxyXG4gICAgICAgICAgdmFsdWU6IHRydWUsXHJcbiAgICAgICAgICBzaXplOiA4MCxcclxuICAgICAgICAgIGlzTWFuZGF0b3J5OiBmYWxzZSxcclxuICAgICAgICAgIG90aGVyVmFsdWU6ICcnLFxyXG4gICAgICAgICAgdHlwZTogXCJjaGVja2JveFwiLFxyXG4gICAgICAgICAgZWRpdGFibGU6IHRydWUsXHJcbiAgICAgICAgICBpc0NvbmRpdGlvbmFsOiBmYWxzZSxcclxuICAgICAgICAgIGNvbmRpdGlvblZhbHVlOiBcIlwiLFxyXG4gICAgICAgICAgY29uZGl0aW9uOiB7fSxcclxuICAgICAgICAgIGRlbGV0ZWFibGU6IHRydWUsXHJcbiAgICAgICAgICBzdWJMZXZlbDogMSxcclxuICAgICAgICAgIGV4cGFuZE1vcmU6IGZhbHNlLFxyXG4gICAgICAgICAgLypzZWxlY3Rvcjoge1xyXG4gICAgICAgICAgICBsYWJlbDogXCJDb21wYW55XCIsXHJcbiAgICAgICAgICAgIGtleTogXCJDb21wYW55XCIsXHJcbiAgICAgICAgICAgIGRlZmF1bHRWYWx1ZTogW3sgdmFsdWU6IFwiTm93dGVhbVwiLCBjaGVja2VkOiB0cnVlIH0sIHsgdmFsdWU6IFwiSW50ZXJuYWxcIiwgY2hlY2tlZDogZmFsc2UgfV0sXHJcbiAgICAgICAgICAgIHZhbHVlOiBcIk5vd3RlYW1cIlxyXG4gICAgICAgICAgfSwqL1xyXG4gICAgICAgICAgZm9ybXM6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIGxhYmVsOiBcIk5vbSAvIE1vZMOobGUgZGUgbCdpbXByaW1hbnRlIC8gbG9jYWxpc2F0aW9uXCIsXHJcbiAgICAgICAgICAgICAga2V5OiBcIlByaW50ZXJOYW1lXCIsXHJcbiAgICAgICAgICAgICAgZXhwYW5kT25ib2FyZGluZzogdHJ1ZSxcclxuICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU6IG51bGwsXHJcbiAgICAgICAgICAgICAgdmFsdWU6IG51bGwsXHJcbiAgICAgICAgICAgICAgc2l6ZTogMTAwMCxcclxuICAgICAgICAgICAgICBpc01hbmRhdG9yeTogdHJ1ZSxcclxuICAgICAgICAgICAgICBvdGhlclZhbHVlOiAnJyxcclxuICAgICAgICAgICAgICB0eXBlOiBcInRleHRhcmVhXCIsXHJcbiAgICAgICAgICAgICAgZWRpdGFibGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgaXNDb25kaXRpb25hbDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgY29uZGl0aW9uVmFsdWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgY29uZGl0aW9uOiB7fSxcclxuICAgICAgICAgICAgICBkZWxldGVhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICAgIHN1YkxldmVsOiAyLFxyXG4gICAgICAgICAgICAgIGV4cGFuZE1vcmU6IGZhbHNlLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgXSxcclxuICAgICAgICB9LFxyXG4gICAgICBdLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJBcHBsaWNhdGlvbnNcIixcclxuICAgICAga2V5OiAnYXBwbGljYXRpb25zJyxcclxuICAgICAgZXhwYW5kTW9yZTogZmFsc2UsXHJcbiAgICAgIHN1ZmZpeEVuZHBvaW50OiBcImNhdGVnb3J5L2FwcGxpY2F0aW9uXCIsXHJcbiAgICAgIHNlbGVjdGVkOiB0cnVlLFxyXG4gICAgICBlZGl0YWJsZTogdHJ1ZSxcclxuICAgICAgaXNDb25kaXRpb25hbDogZmFsc2UsXHJcbiAgICAgIGNvbmRpdGlvblZhbHVlOiBcIlwiLFxyXG4gICAgICBjb25kaXRpb246IHt9LFxyXG4gICAgICBleHBhbmRPbmJvYXJkaW5nOiB0cnVlLFxyXG4gICAgICBkZWZhdWx0VmFsdWU6IGZhbHNlLFxyXG4gICAgICBkZWxldGVhYmxlOiB0cnVlLFxyXG4gICAgICBzZWxlY3Rvcjoge1xyXG4gICAgICAgIGxhYmVsOiBcIkNvbXBhbnlcIixcclxuICAgICAgICBrZXk6IFwiQ29tcGFueVwiLFxyXG4gICAgICAgIGRlZmF1bHRWYWx1ZTogW3sgdmFsdWU6IFwiTm93dGVhbVwiLCBjaGVja2VkOiB0cnVlIH0sIHsgdmFsdWU6IFwiSW50ZXJuYWxcIiwgY2hlY2tlZDogZmFsc2UgfV0sXHJcbiAgICAgICAgdmFsdWU6IFwiTm93dGVhbVwiXHJcbiAgICAgIH0sXHJcbiAgICAgIHRpY2tldFR5cGU6IHtcclxuICAgICAgICBsYWJlbDogXCJUeXBlIGRlIHRpY2tldFwiLFxyXG4gICAgICAgIGtleTogXCJ0eWNrZXRUeXBlXCIsXHJcbiAgICAgICAgZGVmYXVsdFZhbHVlOiBbeyB2YWx1ZTogXCJDcsOpYXRpb24gZGUgY29tcHRlXCIsIGNoZWNrZWQ6IHRydWUsIGtleTogXCJDcmVhdGlvbl9kZV9jb21wdGVcIiB9LCB7IHZhbHVlOiBcIkNvbmZpZ3VyYXRpb24gZGUgcG9zdGVcIiwgY2hlY2tlZDogZmFsc2UsIGtleTogXCJDb25maWd1cmF0aW9uX2RlX3Bvc3RlXCIgfV0sXHJcbiAgICAgICAgdmFsdWU6IFwiQ3JlYXRpb25fZGVfY29tcHRlXCJcclxuICAgICAgfSxcclxuICAgICAgZm9ybXM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBsYWJlbDogXCJBY2PDqHMgYXV4IGFwcGxpY2F0aW9ucyA/XCIsXHJcbiAgICAgICAgICBrZXk6IFwiQXBwbGljYXRpb25BY2Nlc3NcIixcclxuICAgICAgICAgIGV4cGFuZE9uYm9hcmRpbmc6IHRydWUsXHJcbiAgICAgICAgICBkZWZhdWx0VmFsdWU6IG51bGwsXHJcbiAgICAgICAgICB2YWx1ZTogdHJ1ZSxcclxuICAgICAgICAgIHNpemU6IDgwLFxyXG4gICAgICAgICAgaXNNYW5kYXRvcnk6IGZhbHNlLFxyXG4gICAgICAgICAgb3RoZXJWYWx1ZTogJycsXHJcbiAgICAgICAgICB0eXBlOiBcImNoZWNrYm94XCIsXHJcbiAgICAgICAgICBlZGl0YWJsZTogdHJ1ZSxcclxuICAgICAgICAgIGlzQ29uZGl0aW9uYWw6IGZhbHNlLFxyXG4gICAgICAgICAgY29uZGl0aW9uVmFsdWU6IFwiXCIsXHJcbiAgICAgICAgICBjb25kaXRpb246IHt9LFxyXG4gICAgICAgICAgZGVsZXRlYWJsZTogdHJ1ZSxcclxuICAgICAgICAgIHN1YkxldmVsOiAxLFxyXG4gICAgICAgICAgZXhwYW5kTW9yZTogZmFsc2UsXHJcbiAgICAgICAgICAvKnNlbGVjdG9yOiB7XHJcbiAgICAgICAgICAgIGxhYmVsOiBcIkNvbXBhbnlcIixcclxuICAgICAgICAgICAga2V5OiBcIkNvbXBhbnlcIixcclxuICAgICAgICAgICAgZGVmYXVsdFZhbHVlOiBbeyB2YWx1ZTogXCJOb3d0ZWFtXCIsIGNoZWNrZWQ6IHRydWUgfSwgeyB2YWx1ZTogXCJJbnRlcm5hbFwiLCBjaGVja2VkOiBmYWxzZSB9XSxcclxuICAgICAgICAgICAgdmFsdWU6IFwiTm93dGVhbVwiXHJcbiAgICAgICAgICB9LCovXHJcbiAgICAgICAgICBmb3JtczogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgbGFiZWw6IFwiRGVzY3JpcHRpb25zXCIsXHJcbiAgICAgICAgICAgICAga2V5OiBcIkRlc2NyaXB0aW9uXCIsXHJcbiAgICAgICAgICAgICAgZXhwYW5kT25ib2FyZGluZzogdHJ1ZSxcclxuICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU6IG51bGwsXHJcbiAgICAgICAgICAgICAgdmFsdWU6IG51bGwsXHJcbiAgICAgICAgICAgICAgc2l6ZTogMTAwMCxcclxuICAgICAgICAgICAgICBpc01hbmRhdG9yeTogdHJ1ZSxcclxuICAgICAgICAgICAgICBvdGhlclZhbHVlOiAnJyxcclxuICAgICAgICAgICAgICB0eXBlOiBcInRleHRhcmVhXCIsXHJcbiAgICAgICAgICAgICAgZWRpdGFibGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgaXNDb25kaXRpb25hbDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgY29uZGl0aW9uVmFsdWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgY29uZGl0aW9uOiB7fSxcclxuICAgICAgICAgICAgICBkZWxldGVhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICAgIHN1YkxldmVsOiAyLFxyXG4gICAgICAgICAgICAgIGV4cGFuZE1vcmU6IGZhbHNlLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgXSxcclxuICAgICAgICB9LFxyXG4gICAgICBdLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJQb3N0ZVwiLFxyXG4gICAgICBrZXk6ICdwb3N0ZScsXHJcbiAgICAgIGV4cGFuZE1vcmU6IGZhbHNlLFxyXG4gICAgICBzdWZmaXhFbmRwb2ludDogXCJjYXRlZ29yeS9wb3N0ZVwiLFxyXG4gICAgICBzZWxlY3RlZDogdHJ1ZSxcclxuICAgICAgZXhwYW5kT25ib2FyZGluZzogdHJ1ZSxcclxuICAgICAgZGVmYXVsdFZhbHVlOiBmYWxzZSxcclxuICAgICAgZWRpdGFibGU6IHRydWUsXHJcbiAgICAgIGlzQ29uZGl0aW9uYWw6IGZhbHNlLFxyXG4gICAgICBjb25kaXRpb25WYWx1ZTogXCJcIixcclxuICAgICAgY29uZGl0aW9uOiB7fSxcclxuICAgICAgZGVsZXRlYWJsZTogdHJ1ZSxcclxuICAgICAgc2VsZWN0b3I6IHtcclxuICAgICAgICBsYWJlbDogXCJDb21wYW55XCIsXHJcbiAgICAgICAga2V5OiBcIkNvbXBhbnlcIixcclxuICAgICAgICBkZWZhdWx0VmFsdWU6IFt7IHZhbHVlOiBcIk5vd3RlYW1cIiwgY2hlY2tlZDogdHJ1ZSB9LCB7IHZhbHVlOiBcIkludGVybmFsXCIsIGNoZWNrZWQ6IGZhbHNlIH1dLFxyXG4gICAgICAgIHZhbHVlOiBcIk5vd3RlYW1cIlxyXG4gICAgICB9LFxyXG4gICAgICB0aWNrZXRUeXBlOiB7XHJcbiAgICAgICAgbGFiZWw6IFwiVHlwZSBkZSB0aWNrZXRcIixcclxuICAgICAgICBrZXk6IFwidHlja2V0VHlwZVwiLFxyXG4gICAgICAgIGRlZmF1bHRWYWx1ZTogW3sgdmFsdWU6IFwiQ3LDqWF0aW9uIGRlIGNvbXB0ZVwiLCBjaGVja2VkOiB0cnVlLCBrZXk6IFwiQ3JlYXRpb25fZGVfY29tcHRlXCIgfSwgeyB2YWx1ZTogXCJDb25maWd1cmF0aW9uIGRlIHBvc3RlXCIsIGNoZWNrZWQ6IGZhbHNlLCBrZXk6IFwiQ29uZmlndXJhdGlvbl9kZV9wb3N0ZVwiIH1dLFxyXG4gICAgICAgIHZhbHVlOiBcIkNyZWF0aW9uX2RlX2NvbXB0ZVwiXHJcbiAgICAgIH0sXHJcbiAgICAgIGZvcm1zOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbGFiZWw6IFwiUGFyYW3DqXRyYWdlIGRlIHBvc3RlXCIsXHJcbiAgICAgICAgICBrZXk6IFwiUG9zdFBhcmFtZXRlclwiLFxyXG4gICAgICAgICAgZXhwYW5kT25ib2FyZGluZzogdHJ1ZSxcclxuICAgICAgICAgIGRlZmF1bHRWYWx1ZTogbnVsbCxcclxuICAgICAgICAgIHZhbHVlOiB0cnVlLFxyXG4gICAgICAgICAgc2l6ZTogODAsXHJcbiAgICAgICAgICBpc01hbmRhdG9yeTogZmFsc2UsXHJcbiAgICAgICAgICBvdGhlclZhbHVlOiAnJyxcclxuICAgICAgICAgIHR5cGU6IFwiY2hlY2tib3hcIixcclxuICAgICAgICAgIGVkaXRhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgaXNDb25kaXRpb25hbDogZmFsc2UsXHJcbiAgICAgICAgICBjb25kaXRpb25WYWx1ZTogXCJcIixcclxuICAgICAgICAgIGNvbmRpdGlvbjoge30sXHJcbiAgICAgICAgICBkZWxldGVhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgc3ViTGV2ZWw6IDEsXHJcbiAgICAgICAgICBleHBhbmRNb3JlOiBmYWxzZSxcclxuICAgICAgICAgIC8qc2VsZWN0b3I6IHtcclxuICAgICAgICAgICAgbGFiZWw6IFwiQ29tcGFueVwiLFxyXG4gICAgICAgICAgICBrZXk6IFwiQ29tcGFueVwiLFxyXG4gICAgICAgICAgICBkZWZhdWx0VmFsdWU6IFt7IHZhbHVlOiBcIk5vd3RlYW1cIiwgY2hlY2tlZDogdHJ1ZSB9LCB7IHZhbHVlOiBcIkludGVybmFsXCIsIGNoZWNrZWQ6IGZhbHNlIH1dLFxyXG4gICAgICAgICAgICB2YWx1ZTogXCJOb3d0ZWFtXCJcclxuICAgICAgICAgIH0sKi9cclxuICAgICAgICAgIGZvcm1zOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBsYWJlbDogXCJSw6lhbGxvY2F0aW9uIGQnw6lxdWlwZW1lbnRcIixcclxuICAgICAgICAgICAgICBrZXk6IFwiUmVhbG9jYXRlZEVxdWlwbWVudFwiLFxyXG4gICAgICAgICAgICAgIGV4cGFuZE9uYm9hcmRpbmc6IHRydWUsXHJcbiAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlOiBudWxsLFxyXG4gICAgICAgICAgICAgIHZhbHVlOiBudWxsLFxyXG4gICAgICAgICAgICAgIHNpemU6IDEwMDAsXHJcbiAgICAgICAgICAgICAgaXNNYW5kYXRvcnk6IHRydWUsXHJcbiAgICAgICAgICAgICAgb3RoZXJWYWx1ZTogJycsXHJcbiAgICAgICAgICAgICAgdHlwZTogXCJ0ZXh0YXJlYVwiLFxyXG4gICAgICAgICAgICAgIGVkaXRhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICAgIGlzQ29uZGl0aW9uYWw6IGZhbHNlLFxyXG4gICAgICAgICAgICAgIGNvbmRpdGlvblZhbHVlOiBcIlwiLFxyXG4gICAgICAgICAgICAgIGNvbmRpdGlvbjoge30sXHJcbiAgICAgICAgICAgICAgZGVsZXRlYWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgICBzdWJMZXZlbDogMixcclxuICAgICAgICAgICAgICBleHBhbmRNb3JlOiBmYWxzZSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIGxhYmVsOiBcIk5vdXZlYXUgcG9zdGVcIixcclxuICAgICAgICAgICAgICBrZXk6IFwiTmV3UG9zdFwiLFxyXG4gICAgICAgICAgICAgIGV4cGFuZE9uYm9hcmRpbmc6IHRydWUsXHJcbiAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlOiBudWxsLFxyXG4gICAgICAgICAgICAgIHZhbHVlOiB0cnVlLFxyXG4gICAgICAgICAgICAgIHNpemU6IDgwLFxyXG4gICAgICAgICAgICAgIGlzTWFuZGF0b3J5OiB0cnVlLFxyXG4gICAgICAgICAgICAgIG90aGVyVmFsdWU6ICcnLFxyXG4gICAgICAgICAgICAgIHR5cGU6IFwiY2hlY2tib3hcIixcclxuICAgICAgICAgICAgICBlZGl0YWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgICBpc0NvbmRpdGlvbmFsOiBmYWxzZSxcclxuICAgICAgICAgICAgICBjb25kaXRpb25WYWx1ZTogXCJcIixcclxuICAgICAgICAgICAgICBjb25kaXRpb246IHt9LFxyXG4gICAgICAgICAgICAgIGRlbGV0ZWFibGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgc3ViTGV2ZWw6IDIsXHJcbiAgICAgICAgICAgICAgZXhwYW5kTW9yZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgZm9ybXM6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiQWNoZXTDqSBjaGV6IE5vd3RlYW1cIixcclxuICAgICAgICAgICAgICAgICAga2V5OiBcIlB1cmNoYXNlZEF0Tm93dGVhbVwiLFxyXG4gICAgICAgICAgICAgICAgICBleHBhbmRPbmJvYXJkaW5nOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU6IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgICBzaXplOiAxMDAwLFxyXG4gICAgICAgICAgICAgICAgICBpc01hbmRhdG9yeTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgb3RoZXJWYWx1ZTogJycsXHJcbiAgICAgICAgICAgICAgICAgIHR5cGU6IFwidGV4dGFyZWFcIixcclxuICAgICAgICAgICAgICAgICAgZWRpdGFibGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgIGlzQ29uZGl0aW9uYWw6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICBjb25kaXRpb25WYWx1ZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgY29uZGl0aW9uOiB7fSxcclxuICAgICAgICAgICAgICAgICAgZGVsZXRlYWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgc3ViTGV2ZWw6IDMsXHJcbiAgICAgICAgICAgICAgICAgIGV4cGFuZE1vcmU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiQXV0cmVcIixcclxuICAgICAgICAgICAgICAgICAga2V5OiBcIk90aGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgIGV4cGFuZE9uYm9hcmRpbmc6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZTogbnVsbCxcclxuICAgICAgICAgICAgICAgICAgdmFsdWU6IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgIHNpemU6IDEwMDAsXHJcbiAgICAgICAgICAgICAgICAgIGlzTWFuZGF0b3J5OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICBvdGhlclZhbHVlOiAnJyxcclxuICAgICAgICAgICAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXHJcbiAgICAgICAgICAgICAgICAgIGVkaXRhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICBpc0NvbmRpdGlvbmFsOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgY29uZGl0aW9uVmFsdWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgIGNvbmRpdGlvbjoge30sXHJcbiAgICAgICAgICAgICAgICAgIGRlbGV0ZWFibGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgIHN1YkxldmVsOiAzLFxyXG4gICAgICAgICAgICAgICAgICBleHBhbmRNb3JlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIF0sXHJcbiAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwiQXV0cmVzXCIsXHJcbiAgICAgIGtleTogJ2F1dHJlcycsXHJcbiAgICAgIGV4cGFuZE1vcmU6IGZhbHNlLFxyXG4gICAgICBzdWZmaXhFbmRwb2ludDogXCJjYXRlZ29yeS9hdXRyZXNcIixcclxuICAgICAgc2VsZWN0ZWQ6IHRydWUsXHJcbiAgICAgIGVkaXRhYmxlOiB0cnVlLFxyXG4gICAgICBpc0NvbmRpdGlvbmFsOiBmYWxzZSxcclxuICAgICAgY29uZGl0aW9uVmFsdWU6IFwiXCIsXHJcbiAgICAgIGNvbmRpdGlvbjoge30sXHJcbiAgICAgIGV4cGFuZE9uYm9hcmRpbmc6IHRydWUsXHJcbiAgICAgIGRlZmF1bHRWYWx1ZTogZmFsc2UsXHJcbiAgICAgIGRlbGV0ZWFibGU6IHRydWUsXHJcbiAgICAgIHNlbGVjdG9yOiB7XHJcbiAgICAgICAgbGFiZWw6IFwiQ29tcGFueVwiLFxyXG4gICAgICAgIGtleTogXCJDb21wYW55XCIsXHJcbiAgICAgICAgZGVmYXVsdFZhbHVlOiBbeyB2YWx1ZTogXCJOb3d0ZWFtXCIsIGNoZWNrZWQ6IHRydWUgfSwgeyB2YWx1ZTogXCJJbnRlcm5hbFwiLCBjaGVja2VkOiBmYWxzZSB9XSxcclxuICAgICAgICB2YWx1ZTogXCJOb3d0ZWFtXCJcclxuICAgICAgfSxcclxuICAgICAgdGlja2V0VHlwZToge1xyXG4gICAgICAgIGxhYmVsOiBcIlR5cGUgZGUgdGlja2V0XCIsXHJcbiAgICAgICAga2V5OiBcInR5Y2tldFR5cGVcIixcclxuICAgICAgICBkZWZhdWx0VmFsdWU6IFt7IHZhbHVlOiBcIkNyw6lhdGlvbiBkZSBjb21wdGVcIiwgY2hlY2tlZDogdHJ1ZSwga2V5OiBcIkNyZWF0aW9uX2RlX2NvbXB0ZVwiIH0sIHsgdmFsdWU6IFwiQ29uZmlndXJhdGlvbiBkZSBwb3N0ZVwiLCBjaGVja2VkOiBmYWxzZSwga2V5OiBcIkNvbmZpZ3VyYXRpb25fZGVfcG9zdGVcIiB9XSxcclxuICAgICAgICB2YWx1ZTogXCJDcmVhdGlvbl9kZV9jb21wdGVcIlxyXG4gICAgICB9LFxyXG4gICAgICBmb3JtczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIGxhYmVsOiBcIkRlc2NyaXB0aW9uc1wiLFxyXG4gICAgICAgICAga2V5OiBcIkRlc2NyaXB0aW9uXCIsXHJcbiAgICAgICAgICBleHBhbmRPbmJvYXJkaW5nOiB0cnVlLFxyXG4gICAgICAgICAgZGVmYXVsdFZhbHVlOiBudWxsLFxyXG4gICAgICAgICAgdmFsdWU6IG51bGwsXHJcbiAgICAgICAgICBzaXplOiAxMDAwLFxyXG4gICAgICAgICAgaXNNYW5kYXRvcnk6IGZhbHNlLFxyXG4gICAgICAgICAgb3RoZXJWYWx1ZTogJycsXHJcbiAgICAgICAgICB0eXBlOiBcInRleHRhcmVhXCIsXHJcbiAgICAgICAgICBlZGl0YWJsZTogdHJ1ZSxcclxuICAgICAgICAgIGlzQ29uZGl0aW9uYWw6IGZhbHNlLFxyXG4gICAgICAgICAgY29uZGl0aW9uVmFsdWU6IFwiXCIsXHJcbiAgICAgICAgICBjb25kaXRpb246IHt9LFxyXG4gICAgICAgICAgZGVsZXRlYWJsZTogdHJ1ZSxcclxuICAgICAgICAgIHN1YkxldmVsOiAxLFxyXG4gICAgICAgICAgZXhwYW5kTW9yZTogZmFsc2UsXHJcbiAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgIH0sXHJcbiAgXTtcclxuXHJcbiAgY2FuRGVhY3RpdmF0ZSgpIHtcclxuICAgIGlmICghdGhpcy5jYW5FeGl0KSB7XHJcbiAgICAgIHRoaXMuZGlhbG9nLm9wZW4oRXhpdENvbmZpcm1Db21wb25lbnQsIHtcclxuICAgICAgICBkYXRhOiAnJ1xyXG4gICAgICB9KVxyXG4gICAgICByZXR1cm4gdGhpcy5zZXJ2aWNlLmNhbkV4aXQkXHJcbiAgICB9XHJcbiAgICByZXR1cm4gdHJ1ZVxyXG4gIH1cclxuXHJcblxyXG4gIEBIb3N0TGlzdGVuZXIoJ3Njcm9sbCcsIFsnJGV2ZW50J10pXHJcbiAgb25TY3JvbGwoZXZlbnQpIHtcclxuICAgIGNvbnN0IHNlY3Rpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcInNlY3Rpb25cIik7XHJcbiAgICBjb25zdCBuYXZMaSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY3JlYXRlLXByb2ZpbGUtbWVudXMgdWwgbGlcIik7XHJcblxyXG4gICAgbGV0IGN1cnJlbnQgPSBcIlwiO1xyXG4gICAgc2VjdGlvbnMuZm9yRWFjaCgoc2VjdGlvbikgPT4ge1xyXG4gICAgICBjb25zdCBzZWN0aW9uVG9wID0gc2VjdGlvbi5vZmZzZXRUb3A7XHJcbiAgICAgIGlmIChldmVudC50YXJnZXQuc2Nyb2xsVG9wID4gc2VjdGlvblRvcCAtIDEwMCkge1xyXG4gICAgICAgIGN1cnJlbnQgPSBzZWN0aW9uLmdldEF0dHJpYnV0ZShcImlkXCIpXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgbmF2TGkuZm9yRWFjaCgobGkpID0+IHtcclxuICAgICAgY29uc3QgaWQgPSBsaS5nZXRBdHRyaWJ1dGUoJ2lkJylcclxuICAgICAgaWYgKGlkPy5zdWJzdHJpbmcoMCwgaWQubGVuZ3RoIC0gMSkgPT09IGN1cnJlbnQpIHtcclxuICAgICAgICBsaS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGxpLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgaW5pdEZvcm0oKSB7XHJcbiAgICB0aGlzLmZvcm0gPSB0aGlzLmZiLmdyb3VwKHtcclxuICAgICAgTmFtZTogW1wiXCIsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxyXG4gICAgICBQaWN0bzogW1wiXCJdLFxyXG4gICAgICBEZXNjcmlwdGlvbjogW1wiXCJdLFxyXG4gICAgICBUYWdzOiBbXCJcIl0sXHJcbiAgICAgIFN0YXR1czogW2ZhbHNlLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcclxuICAgIH0pO1xyXG4gIH1cclxuICBhc3luYyBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuaWQgPSB0aGlzLnJvdXRlLnNuYXBzaG90LnBhcmFtTWFwLmdldChcImlkXCIpO1xyXG5cclxuICAgIHRoaXMuZm9ybS52YWx1ZUNoYW5nZXMuc3Vic2NyaWJlKGMgPT4ge1xyXG4gICAgICB0aGlzLmNhbkV4aXQgPSBmYWxzZTtcclxuICAgIH0pO1xyXG5cclxuICAgIGlmICh0aGlzLmlkICE9PSBcIjBcIikge1xyXG4gICAgICBzZXRUaW1lb3V0KGFzeW5jICgpID0+IHtcclxuICAgICAgICB0aGlzLmN1cnJlbnRQcm9maWwgPSBhd2FpdCB0aGlzLnNlcnZpY2UuZ2V0UHJvZmlsKHRoaXMuaWQpO1xyXG4gICAgICAgIHRoaXMuZm9ybS5wYXRjaFZhbHVlKHRoaXMuY3VycmVudFByb2ZpbCk7XHJcbiAgICAgICAgdGhpcy5jYXRlZ29yaWVzID0gdGhpcy5jdXJyZW50UHJvZmlsLmNhdGVnb3JpZXMubWFwKChkYXRhKSA9PiAoeyAuLi5kYXRhLCBrZXk6IGRhdGEua2V5IHx8IGRhdGEubmFtZS5yZXBsYWNlKC9cXHMvZywgJycpIH0pKTtcclxuICAgICAgfSwgNTAwKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuc2hvd1Byb2ZpbGVOYW1lID0gdHJ1ZTtcclxuICAgICAgdGhpcy5jYXRlZ29yaWVzID0gdGhpcy5kZWZhdWx0Q2F0ZWdvcmllO1xyXG4gICAgfVxyXG4gICAgc2V0VGltZW91dChhc3luYyAoKSA9PiB7XHJcbiAgICAgIHRoaXMudGFncyA9IGF3YWl0IHRoaXMuc2VydmljZS5nZXRBbGxUYWdzKCk7XHJcbiAgICB9LCA1MDApO1xyXG4gICAgdGhpcy5nZXRDb25kaXRpb25WYWx1ZXMoKTtcclxuICB9XHJcblxyXG4gIG9uQWRkTmV3Q2F0ZWdvcnkoZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgdGhpcy5jYW5FeGl0ID0gZmFsc2U7XHJcbiAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICBuYW1lOiBcIk5vbSBkZSBsYSBjYXTDqWdvcmllXCIgKyB0aGlzLmNhdGVnb3JpZXMubGVuZ3RoLFxyXG4gICAgICBrZXk6ICduZXdDYXRlZ29yeScgKyB0aGlzLmNhdGVnb3JpZXMubGVuZ3RoLFxyXG4gICAgICBlZGl0YWJsZTogdHJ1ZSxcclxuICAgICAgaXNDb25kaXRpb25hbDogZmFsc2UsXHJcbiAgICAgIGNvbmRpdGlvblZhbHVlOiBcIlwiLFxyXG4gICAgICBjb25kaXRpb246IHt9LFxyXG4gICAgICBleHBhbmRPbmJvYXJkaW5nOiB0cnVlLFxyXG4gICAgICBkZWxldGVhYmxlOiB0cnVlLFxyXG4gICAgICBleHBhbmRNb3JlOiB0cnVlLFxyXG4gICAgICBzdWZmaXhFbmRwb2ludDogXCJcIixcclxuICAgICAgc2VsZWN0b3I6IHtcclxuICAgICAgICBsYWJlbDogXCJDb21wYW55XCIsXHJcbiAgICAgICAga2V5OiBcIkNvbXBhbnlcIixcclxuICAgICAgICBkZWZhdWx0VmFsdWU6IFt7IHZhbHVlOiBcIk5vd3RlYW1cIiwgY2hlY2tlZDogdHJ1ZSB9LCB7IHZhbHVlOiBcIkludGVybmFsXCIsIGNoZWNrZWQ6IGZhbHNlIH1dLFxyXG4gICAgICAgIHZhbHVlOiBcIk5vd3RlYW1cIlxyXG4gICAgICB9LFxyXG4gICAgICB0aWNrZXRUeXBlOiB7XHJcbiAgICAgICAgbGFiZWw6IFwiVHlwZSBkZSB0aWNrZXRcIixcclxuICAgICAgICBrZXk6IFwidHlja2V0VHlwZVwiLFxyXG4gICAgICAgIGRlZmF1bHRWYWx1ZTogW3sgdmFsdWU6IFwiQ3LDqWF0aW9uIGRlIGNvbXB0ZVwiLCBjaGVja2VkOiB0cnVlLCBrZXk6IFwiQ3JlYXRpb25fZGVfY29tcHRlXCIgfSwgeyB2YWx1ZTogXCJDb25maWd1cmF0aW9uIGRlIHBvc3RlXCIsIGNoZWNrZWQ6IGZhbHNlLCBrZXk6IFwiQ29uZmlndXJhdGlvbl9kZV9wb3N0ZVwiIH1dLFxyXG4gICAgICAgIHZhbHVlOiBcIkNyZWF0aW9uX2RlX2NvbXB0ZVwiXHJcbiAgICAgIH0sXHJcbiAgICAgIGZvcm1zOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbGFiZWw6IGBMYWJlbCDDoCByZW5vbW1lciAoJHsxfSlgLFxyXG4gICAgICAgICAga2V5OiBcIlwiLFxyXG4gICAgICAgICAgZXhwYW5kT25ib2FyZGluZzogdHJ1ZSxcclxuICAgICAgICAgIGRlZmF1bHRWYWx1ZTogbnVsbCxcclxuICAgICAgICAgIHZhbHVlOiBudWxsLFxyXG4gICAgICAgICAgc2l6ZTogODAsXHJcbiAgICAgICAgICBpc01hbmRhdG9yeTogdHJ1ZSxcclxuICAgICAgICAgIG90aGVyVmFsdWU6ICcnLFxyXG4gICAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXHJcbiAgICAgICAgICBkZWxldGVhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgZWRpdGFibGU6IHRydWUsXHJcbiAgICAgICAgICBpc0NvbmRpdGlvbmFsOiBmYWxzZSxcclxuICAgICAgICAgIGNvbmRpdGlvblZhbHVlOiBcIlwiLFxyXG4gICAgICAgICAgY29uZGl0aW9uOiB7fSxcclxuICAgICAgICB9LFxyXG4gICAgICBdLFxyXG4gICAgfVxyXG4gICAgdGhpcy5jYXRlZ29yaWVzLnB1c2goZGF0YSk7XHJcbiAgICB0aGlzLm9uSGlzdG9yaWNzKHtcclxuICAgICAgZm9ybTogZGF0YSxcclxuICAgICAgbWV0aG9kOiAncHVzaCcsXHJcbiAgICAgIGxvY2F0aW9uOiAnY2F0ZWdvcnknLFxyXG4gICAgICBwYXJhbXM6IFt0aGlzLmNhdGVnb3JpZXMubGVuZ3RoIC0gMV1cclxuICAgIH0pXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgdGhpcy5zY3JvbGxUb1NlcnZpY2Uuc2Nyb2xsVG8oe1xyXG4gICAgICAgIHRhcmdldDogZGF0YS5uYW1lLFxyXG4gICAgICAgIGNvbnRhaW5lcjogJ2NhdGVnb3JpZXMtaWQnLFxyXG4gICAgICAgIGR1cmF0aW9uOiA2NTAsXHJcbiAgICAgICAgZWFzaW5nOiAnZWFzZU91dEVsYXN0aWMnLFxyXG4gICAgICAgIG9mZnNldDogMjBcclxuICAgICAgfSk7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMub25FeHBlbmRNb3JlKHsgZmllbGQ6IGRhdGEgfSwgdGhpcy5jYXRlZ29yaWVzLmxlbmd0aCAtIDEpO1xyXG4gICAgICAgIHRoaXMub25BY3RpdmVNZW51KGRhdGEsIHRoaXMuY2F0ZWdvcmllcy5sZW5ndGggLSAxKTtcclxuICAgICAgfSwgMzAwKTtcclxuXHJcbiAgICB9LCAyMDApXHJcbiAgfVxyXG4gIG9uQ2hhbmdlQ2F0ZWdvcnlOYW1lKCkge1xyXG4gICAgdGhpcy5jdXJyZW50RWRpdEJsb2NrLmtleSA9IHRoaXMuY3VycmVudEVkaXRCbG9jay5uYW1lLnJlcGxhY2UoL1xccy9nLCAnJylcclxuICB9XHJcbiAgY2hlY2tCbGluayhpbmRleCwgbGV2ZWwpIHtcclxuICAgIHJldHVybiBTdHJpbmcoaW5kZXgpICsgU3RyaW5nKGxldmVsKVxyXG4gIH1cclxuICBvbkFkZE5ld0ZpZWxkKC4uLnBhcmFtcykge1xyXG4gICAgdGhpcy5jYW5FeGl0ID0gZmFsc2U7XHJcbiAgICBjb25zdCBsZW5ndGggPSBwYXJhbXMubGVuZ3RoO1xyXG4gICAgY29uc3QgZm9ybXMgPSBsZW5ndGggPT09IDEgPyB0aGlzLmNhdGVnb3JpZXNbcGFyYW1zWzBdXS5mb3JtcyA6IGxlbmd0aCA9PT0gMiA/IHRoaXMuY2F0ZWdvcmllc1twYXJhbXNbMF1dLmZvcm1zW3BhcmFtc1sxXV0uZm9ybXMgOiB0aGlzLmNhdGVnb3JpZXNbcGFyYW1zWzBdXS5mb3Jtc1twYXJhbXNbMV1dLmZvcm1zW3BhcmFtc1syXV0uZm9ybXM7XHJcbiAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICBsYWJlbDogYExhYmVsIMOgIHJlbm9tbWVyICgke2Zvcm1zLmxlbmd0aCArIDF9KWAsXHJcbiAgICAgIGtleTogXCJcIixcclxuICAgICAgZXhwYW5kT25ib2FyZGluZzogdHJ1ZSxcclxuICAgICAgZGVmYXVsdFZhbHVlOiBudWxsLFxyXG4gICAgICB2YWx1ZTogbnVsbCxcclxuICAgICAgc2l6ZTogODAsXHJcbiAgICAgIGlzTWFuZGF0b3J5OiB0cnVlLFxyXG4gICAgICBvdGhlclZhbHVlOiAnJyxcclxuICAgICAgdHlwZTogXCJ0ZXh0XCIsXHJcbiAgICAgIGRlbGV0ZWFibGU6IHRydWUsXHJcbiAgICAgIGVkaXRhYmxlOiB0cnVlLFxyXG4gICAgICBpc0NvbmRpdGlvbmFsOiBmYWxzZSxcclxuICAgICAgY29uZGl0aW9uVmFsdWU6IFwiXCIsXHJcbiAgICAgIGNvbmRpdGlvbjoge30sXHJcbiAgICAgIHN1YkxldmVsOiBwYXJhbXMubGVuZ3RoLFxyXG4gICAgICAvL2Zvcm1zOiBbXVxyXG4gICAgfVxyXG4gICAgZm9ybXMucHVzaChkYXRhKTtcclxuICAgIHRoaXMubmV3RmllbGRJbmRleCA9IFN0cmluZyhmb3Jtcy5sZW5ndGggLSAxKSArIFN0cmluZyhsZW5ndGgpO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHRoaXMubmV3RmllbGRJbmRleCA9IG51bGxcclxuICAgIH0sIDUwMDApO1xyXG4gICAgdGhpcy5vbkhpc3Rvcmljcyh7XHJcbiAgICAgIGZvcm06IGRhdGEsXHJcbiAgICAgIG1ldGhvZDogJ3B1c2gnLFxyXG4gICAgICBsb2NhdGlvbjogJ2Zvcm1zJyxcclxuICAgICAgcGFyYW1zXHJcbiAgICB9KVxyXG4gICAgdGhpcy5vbkVkaXRCbG9jayhmb3Jtcy5hdCgtMSksIHBhcmFtcylcclxuICB9XHJcblxyXG4gIG9uQWRkTmV3U3ViTGV2ZWxGaWVsZCguLi5wYXJhbXMpIHtcclxuICAgIHRoaXMuY2FuRXhpdCA9IGZhbHNlO1xyXG4gICAgY29uc3QgbGVuZ3RoID0gcGFyYW1zLmxlbmd0aDtcclxuICAgIGNvbnN0IGZvcm1zID0gbGVuZ3RoID09PSAyID8gdGhpcy5jYXRlZ29yaWVzW3BhcmFtc1swXV0uZm9ybXNbcGFyYW1zW2xlbmd0aCAtIDFdXSA6IGxlbmd0aCA9PT0gMyA/IHRoaXMuY2F0ZWdvcmllc1twYXJhbXNbMF1dLmZvcm1zW3BhcmFtc1sxXV0uZm9ybXNbcGFyYW1zW2xlbmd0aCAtIDFdXSA6IHRoaXMuY2F0ZWdvcmllc1twYXJhbXNbMF1dLmZvcm1zW3BhcmFtc1sxXV0uZm9ybXNbcGFyYW1zWzJdXS5mb3Jtc1twYXJhbXNbbGVuZ3RoIC0gMV1dO1xyXG4gICAgZm9ybXMuZXhwYW5kTW9yZSA9IHRydWU7XHJcbiAgICBmb3Jtcy5mb3JtcyA9IFtdO1xyXG4gICAgY29uc3QgbmV3Rm9ybSA9IHtcclxuICAgICAgbGFiZWw6IFwiXCIsXHJcbiAgICAgIGtleTogXCJcIixcclxuICAgICAgZXhwYW5kT25ib2FyZGluZzogdHJ1ZSxcclxuICAgICAgZGVmYXVsdFZhbHVlOiBudWxsLFxyXG4gICAgICB2YWx1ZTogbnVsbCxcclxuICAgICAgc2l6ZTogODAsXHJcbiAgICAgIGlzTWFuZGF0b3J5OiB0cnVlLFxyXG4gICAgICBvdGhlclZhbHVlOiAnJyxcclxuICAgICAgdHlwZTogXCJ0ZXh0XCIsXHJcbiAgICAgIGRlbGV0ZWFibGU6IHRydWUsXHJcbiAgICAgIGVkaXRhYmxlOiB0cnVlLFxyXG4gICAgICBpc0NvbmRpdGlvbmFsOiBmYWxzZSxcclxuICAgICAgY29uZGl0aW9uVmFsdWU6IFwiXCIsXHJcbiAgICAgIGNvbmRpdGlvbjoge30sXHJcbiAgICAgIHN1YkxldmVsOiBwYXJhbXMubGVuZ3RoLFxyXG4gICAgICBleHBhbmRNb3JlOiB0cnVlLFxyXG4gICAgICAvL2Zvcm1zOiBbXVxyXG4gICAgfVxyXG4gICAgZm9ybXMuZm9ybXMucHVzaChuZXdGb3JtKTtcclxuICAgIHRoaXMub25IaXN0b3JpY3Moe1xyXG4gICAgICBmb3JtOiBuZXdGb3JtLFxyXG4gICAgICBtZXRob2Q6ICdwdXNoJyxcclxuICAgICAgbG9jYXRpb246ICdmb3JtcycsXHJcbiAgICAgIHBhcmFtc1xyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIG9uUmVtb3ZlRmllbGQoLi4ucGFyYW1zKSB7XHJcbiAgICB0aGlzLmNhbkV4aXQgPSBmYWxzZTtcclxuICAgIGNvbnN0IGxlbmd0aCA9IHBhcmFtcy5sZW5ndGg7XHJcbiAgICBjb25zdCBmb3JtcyA9IGxlbmd0aCA9PT0gMiA/IHRoaXMuY2F0ZWdvcmllc1twYXJhbXNbMF1dLmZvcm1zIDogbGVuZ3RoID09PSAzID8gdGhpcy5jYXRlZ29yaWVzW3BhcmFtc1swXV0uZm9ybXNbcGFyYW1zWzFdXS5mb3JtcyA6IHRoaXMuY2F0ZWdvcmllc1twYXJhbXNbMF1dLmZvcm1zW3BhcmFtc1sxXV0uZm9ybXNbcGFyYW1zWzJdXS5mb3JtcztcclxuICAgIGZvcm1zLnNwbGljZShwYXJhbXNbbGVuZ3RoIC0gMV0sIDEpO1xyXG4gICAgdGhpcy5vbkhpc3Rvcmljcyh7XHJcbiAgICAgIGZvcm06IGZvcm1zW3BhcmFtc1tsZW5ndGggLSAxXV0sXHJcbiAgICAgIGxvY2F0aW9uOiAnZm9ybXMnLFxyXG4gICAgICBtZXRob2Q6ICdzcGxpY2UnLFxyXG4gICAgICBwYXJhbXNcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBvblJlbW92ZUNhdGVnb3J5KGUsIGkpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIHRoaXMuY2FuRXhpdCA9IGZhbHNlO1xyXG4gICAgdGhpcy5vbkhpc3Rvcmljcyh7XHJcbiAgICAgIGZvcm06IHRoaXMuY2F0ZWdvcmllcy5zcGxpY2UoaSwgMSksXHJcbiAgICAgIG1ldGhvZDogJ3NwbGljZScsXHJcbiAgICAgIGxvY2F0aW9uOiAnY2F0ZWdvcnknLFxyXG4gICAgICBwYXJhbXM6IFtpXVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIG9uQ2hhbmdlQ2F0ZWdvcnkoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5jYXRlZ29yaWVzLmV2ZXJ5KChjYXQpID0+IGNhdC5uYW1lICE9PSBcIlwiICYmIGNhdC5mb3Jtcy5ldmVyeSgoZmllbGQpID0+IGZpZWxkLmxhYmVsICE9PSBcIlwiICYmIGZpZWxkLnR5cGUgIT09IFwiXCIpKTtcclxuICB9XHJcblxyXG4gIGFzeW5jIG9uU3VibWl0KGlzUHVibGlzaDogYm9vbGVhbikge1xyXG4gICAgdGhpcy5pc1N1Ym1pdHRlZCA9IGlzUHVibGlzaDtcclxuICAgIGlmICh0aGlzLmZvcm0udmFsaWQgJiYgdGhpcy5vbkNoYW5nZUNhdGVnb3J5KCkpIHtcclxuICAgICAgdGhpcy5sb2FkaW5nID0gdHJ1ZVxyXG4gICAgICBpZiAoaXNQdWJsaXNoKSB7XHJcbiAgICAgICAgdGhpcy5saXZlTGFiZWwgPSBcIkNoYXJnZW1lbnQuLi4uXCJcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmRyYWZ0TGFiZWwgPSBcIkNoYXJnZW1lbnQuLi5cIlxyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IHJlc3VsdCA9XHJcbiAgICAgICAgdGhpcy5pZCAhPT0gXCIwXCJcclxuICAgICAgICAgID8gYXdhaXQgdGhpcy5zZXJ2aWNlLnVwZGF0ZVByb2ZpbCh7XHJcbiAgICAgICAgICAgIC4uLnRoaXMuY3VycmVudFByb2ZpbCxcclxuICAgICAgICAgICAgLi4udGhpcy5mb3JtLnZhbHVlLFxyXG4gICAgICAgICAgICBTdGF0dXM6IGlzUHVibGlzaCxcclxuICAgICAgICAgICAgY2F0ZWdvcmllczogdGhpcy5jYXRlZ29yaWVzLFxyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIDogYXdhaXQgdGhpcy5zZXJ2aWNlLmNyZWF0ZVByb2ZpbCh7XHJcbiAgICAgICAgICAgIC4uLnRoaXMuZm9ybS52YWx1ZSxcclxuICAgICAgICAgICAgU3RhdHVzOiBpc1B1Ymxpc2gsXHJcbiAgICAgICAgICAgIGNhdGVnb3JpZXM6IHRoaXMuY2F0ZWdvcmllcyxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICBpZiAocmVzdWx0KSB7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3Byb2ZpbCcpO1xyXG4gICAgICAgIGF3YWl0IHRoaXMuc2VydmljZS5nZXRBbGxQcm9maWwoKTtcclxuICAgICAgICB0aGlzLmNhbkV4aXQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlXHJcblxyXG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFt0aGlzLnNlcnZpY2UubWFpblBhdGggKyAnL3RlbXBsYXRlJ10pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJlcnJyb3IuLi4uLi5cIik7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGlzUHVibGlzaCkge1xyXG4gICAgICAgIHRoaXMubGl2ZUxhYmVsID0gXCJQdWJsacOpXCJcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmRyYWZ0TGFiZWwgPSBcIkVucmVnaXN0cmVyIGxlIGJyb3VpbGxvblwiXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uQ2hhbmdlVHlwZSh0eXBlOiBzdHJpbmcsIC4uLnBhcmFtcykge1xyXG5cclxuICAgIHRoaXMuY2FuRXhpdCA9IGZhbHNlO1xyXG4gICAgY29uc3QgbGVuZ3RoID0gcGFyYW1zLmxlbmd0aDtcclxuICAgIGNvbnN0IGZvcm1zID0gbGVuZ3RoID09PSAyID8gdGhpcy5jYXRlZ29yaWVzW3BhcmFtc1swXV0uZm9ybXMgOiBsZW5ndGggPT09IDMgPyB0aGlzLmNhdGVnb3JpZXNbcGFyYW1zWzBdXS5mb3Jtc1twYXJhbXNbMV1dLmZvcm1zIDogdGhpcy5jYXRlZ29yaWVzW3BhcmFtc1swXV0uZm9ybXNbcGFyYW1zWzFdXS5mb3Jtc1twYXJhbXNbMl1dLmZvcm1zO1xyXG4gICAgaWYgKHR5cGUgPT09IFwic2VsZWN0XCIgfHwgdHlwZSA9PT0gXCJyYWRpb1wiIHx8IHR5cGUgPT09IFwiY2hlY2tib3hfbXVsdGlwbGVcIikge1xyXG4gICAgICBmb3Jtc1twYXJhbXNbbGVuZ3RoIC0gMV1dLmRlZmF1bHRWYWx1ZSA9IFtdO1xyXG4gICAgfSBlbHNlIGlmICh0eXBlID09PSBcImNoZWNrYm94XCIgfHwgdHlwZSA9PT0gXCJ0b2dnbGVcIikge1xyXG4gICAgICBmb3Jtc1twYXJhbXNbbGVuZ3RoIC0gMV1dLmRlZmF1bHRWYWx1ZSA9IHRydWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBmb3Jtc1twYXJhbXNbbGVuZ3RoIC0gMV1dLmRlZmF1bHRWYWx1ZSA9IFwiXCI7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvbktleVByZXNzKGV2ZW50OiBhbnksIC4uLnBhcmFtcykge1xyXG4gICAgdGhpcy5jYW5FeGl0ID0gZmFsc2U7XHJcbiAgICBjb25zdCBsZW5ndGggPSBwYXJhbXMubGVuZ3RoO1xyXG4gICAgY29uc3QgZm9ybXMgPSBsZW5ndGggPT09IDIgPyB0aGlzLmNhdGVnb3JpZXNbcGFyYW1zWzBdXS5mb3Jtc1twYXJhbXNbbGVuZ3RoIC0gMV1dIDogbGVuZ3RoID09PSAzID8gdGhpcy5jYXRlZ29yaWVzW3BhcmFtc1swXV0uZm9ybXNbcGFyYW1zWzFdXS5mb3Jtc1twYXJhbXNbbGVuZ3RoIC0gMV1dIDogdGhpcy5jYXRlZ29yaWVzW3BhcmFtc1swXV0uZm9ybXNbcGFyYW1zWzFdXS5mb3Jtc1twYXJhbXNbMl1dLmZvcm1zW3BhcmFtc1tsZW5ndGggLSAxXV07XHJcbiAgICBpZiAoZXZlbnQua2V5ID09PSBcIjtcIikge1xyXG4gICAgICBjb25zdCBleGlzdCA9IGZvcm1zLmRlZmF1bHRWYWx1ZS5maW5kKChvcHQpID0+IG9wdC52YWx1ZS50b0xvY2FsZUxvd2VyQ2FzZSgpID09PSBldmVudC50YXJnZXQudmFsdWUuc3BsaXQoXCI7XCIpWzBdLnRvTG9jYWxlTG93ZXJDYXNlKCkpO1xyXG4gICAgICBpZiAoIWV4aXN0KSB7XHJcbiAgICAgICAgZm9ybXMuZGVmYXVsdFZhbHVlLnB1c2goe1xyXG4gICAgICAgICAgdmFsdWU6IGV2ZW50LnRhcmdldC52YWx1ZS5zcGxpdChcIjtcIilbMF0sXHJcbiAgICAgICAgICBjaGVja2VkOiBmYWxzZVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGV2ZW50LnRhcmdldC52YWx1ZSA9IFwiXCI7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZXZlbnQudGFyZ2V0LnZhbHVlID0gXCJcIjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gdGhpcy5nZXRDb25kaXRpb25WYWx1ZXMoKVxyXG4gIH1cclxuXHJcbiAgcmVtb3ZlS2V5d29yZChrZXl3b3JkOiBhbnksIC4uLnBhcmFtcykge1xyXG4gICAgdGhpcy5jYW5FeGl0ID0gZmFsc2U7XHJcbiAgICBjb25zdCBsZW5ndGggPSBwYXJhbXMubGVuZ3RoO1xyXG4gICAgY29uc3QgZm9ybXMgPSBsZW5ndGggPT09IDIgPyB0aGlzLmNhdGVnb3JpZXNbcGFyYW1zWzBdXS5mb3Jtc1twYXJhbXNbbGVuZ3RoIC0gMV1dIDogbGVuZ3RoID09PSAzID8gdGhpcy5jYXRlZ29yaWVzW3BhcmFtc1swXV0uZm9ybXNbcGFyYW1zWzFdXS5mb3Jtc1twYXJhbXNbbGVuZ3RoIC0gMV1dIDogdGhpcy5jYXRlZ29yaWVzW3BhcmFtc1swXV0uZm9ybXNbcGFyYW1zWzFdXS5mb3Jtc1twYXJhbXNbMl1dLmZvcm1zW3BhcmFtc1tsZW5ndGggLSAxXV07XHJcbiAgICBmb3Jtcy5kZWZhdWx0VmFsdWUgPSBmb3Jtcy5kZWZhdWx0VmFsdWUuZmlsdGVyKChvcHRpb24pID0+IG9wdGlvbi52YWx1ZSAhPT0ga2V5d29yZC52YWx1ZSk7XHJcbiAgICAvLyB0aGlzLmdldENvbmRpdGlvblZhbHVlcygpXHJcbiAgfVxyXG5cclxuICBvbkV4cGVuZE1vcmUoZXZlbnQsIC4uLnBhcmFtcykge1xyXG4gICAgaWYgKGV2ZW50KSB7XHJcbiAgICAgIGlmIChldmVudC5ldmVudCkge1xyXG4gICAgICAgIGV2ZW50LmV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGV2ZW50LmZpZWxkICYmICFldmVudC5maWVsZC5leHBhbmRNb3JlKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmNhdGVnb3JpZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgIHRoaXMuY2F0ZWdvcmllc1tpXS5leHBhbmRNb3JlID0gZmFsc2U7XHJcbiAgICAgICAgICBpZiAodGhpcy5jYXRlZ29yaWVzW2ldLmZvcm1zKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5jYXRlZ29yaWVzW2ldLmZvcm1zLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5jYXRlZ29yaWVzW2ldLmZvcm1zW2pdLmV4cGFuZE1vcmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgIH1cclxuICAgIGlmIChwYXJhbXMubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgIHRoaXMuY2F0ZWdvcmllc1twYXJhbXNbMF1dLmV4cGFuZE1vcmUgPSAhdGhpcy5jYXRlZ29yaWVzW3BhcmFtc1swXV0uZXhwYW5kTW9yZTtcclxuICAgIH0gZWxzZSBpZiAocGFyYW1zLmxlbmd0aCA9PT0gMikge1xyXG4gICAgICBpZiAodGhpcy5jYXRlZ29yaWVzW3BhcmFtc1swXV0uZm9ybXNbcGFyYW1zWzFdXS5leHBhbmRNb3JlKSB7XHJcbiAgICAgICAgdGhpcy5jYXRlZ29yaWVzW3BhcmFtc1swXV0uZm9ybXNbcGFyYW1zWzFdXS5leHBhbmRNb3JlID0gZmFsc2U7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5jYXRlZ29yaWVzW3BhcmFtc1swXV0uZXhwYW5kTW9yZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5jYXRlZ29yaWVzW3BhcmFtc1swXV0uZm9ybXNbcGFyYW1zWzFdXS5leHBhbmRNb3JlID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIGlmIChwYXJhbXMubGVuZ3RoID09PSAzKSB7XHJcbiAgICAgIGlmICh0aGlzLmNhdGVnb3JpZXNbcGFyYW1zWzBdXS5mb3Jtc1twYXJhbXNbMV1dLmZvcm1zW3BhcmFtc1syXV0uZXhwYW5kTW9yZSkge1xyXG4gICAgICAgIHRoaXMuY2F0ZWdvcmllc1twYXJhbXNbMF1dLmZvcm1zW3BhcmFtc1sxXV0uZm9ybXNbcGFyYW1zWzJdXS5leHBhbmRNb3JlID0gZmFsc2U7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5jYXRlZ29yaWVzW3BhcmFtc1swXV0uZXhwYW5kTW9yZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5jYXRlZ29yaWVzW3BhcmFtc1swXV0uZm9ybXNbcGFyYW1zWzFdXS5leHBhbmRNb3JlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmNhdGVnb3JpZXNbcGFyYW1zWzBdXS5mb3Jtc1twYXJhbXNbMV1dLmZvcm1zW3BhcmFtc1syXV0uZXhwYW5kTW9yZSA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmICh0aGlzLmNhdGVnb3JpZXNbcGFyYW1zWzBdXS5mb3Jtc1twYXJhbXNbMV1dLmZvcm1zW3BhcmFtc1syXV0uZm9ybXNbcGFyYW1zWzNdXS5leHBhbmRNb3JlKSB7XHJcbiAgICAgICAgdGhpcy5jYXRlZ29yaWVzW3BhcmFtc1swXV0uZm9ybXNbcGFyYW1zWzFdXS5mb3Jtc1twYXJhbXNbMl1dLmZvcm1zW3BhcmFtc1szXV0uZXhwYW5kTW9yZSA9IGZhbHNlO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuY2F0ZWdvcmllc1twYXJhbXNbMF1dLmV4cGFuZE1vcmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuY2F0ZWdvcmllc1twYXJhbXNbMF1dLmZvcm1zW3BhcmFtc1sxXV0uZXhwYW5kTW9yZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5jYXRlZ29yaWVzW3BhcmFtc1swXV0uZm9ybXNbcGFyYW1zWzFdXS5mb3Jtc1twYXJhbXNbMl1dLmV4cGFuZE1vcmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuY2F0ZWdvcmllc1twYXJhbXNbMF1dLmZvcm1zW3BhcmFtc1sxXV0uZm9ybXNbcGFyYW1zWzJdXS5mb3Jtc1twYXJhbXNbM11dLmV4cGFuZE1vcmUgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvbkNoZWNrZWREZWZhdWx0KGV2ZW50LCAuLi5wYXJhbXMpIHtcclxuICAgIGlmIChwYXJhbXMubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgIHRoaXMuY2F0ZWdvcmllc1twYXJhbXNbMF1dLmRlZmF1bHRWYWx1ZSA9IGV2ZW50O1xyXG4gICAgfSBlbHNlIGlmIChwYXJhbXMubGVuZ3RoID09PSAyKSB7XHJcbiAgICAgIHRoaXMuY2F0ZWdvcmllc1twYXJhbXNbMF1dLmRlZmF1bHRWYWx1ZSA9IGV2ZW50O1xyXG4gICAgICB0aGlzLmNhdGVnb3JpZXNbcGFyYW1zWzBdXS5mb3Jtc1twYXJhbXNbMV1dLmRlZmF1bHRWYWx1ZSA9IGV2ZW50O1xyXG4gICAgfSBlbHNlIGlmIChwYXJhbXMubGVuZ3RoID09PSAzKSB7XHJcbiAgICAgIHRoaXMuY2F0ZWdvcmllc1twYXJhbXNbMF1dLmRlZmF1bHRWYWx1ZSA9IGV2ZW50O1xyXG4gICAgICB0aGlzLmNhdGVnb3JpZXNbcGFyYW1zWzBdXS5mb3Jtc1twYXJhbXNbMV1dLmRlZmF1bHRWYWx1ZSA9IGV2ZW50O1xyXG4gICAgICB0aGlzLmNhdGVnb3JpZXNbcGFyYW1zWzBdXS5mb3Jtc1twYXJhbXNbMV1dLmZvcm1zW3BhcmFtc1syXV0uZGVmYXVsdFZhbHVlID0gZXZlbnQ7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmNhdGVnb3JpZXNbcGFyYW1zWzBdXS5kZWZhdWx0VmFsdWUgPSBldmVudDtcclxuICAgICAgdGhpcy5jYXRlZ29yaWVzW3BhcmFtc1swXV0uZm9ybXNbcGFyYW1zWzFdXS5kZWZhdWx0VmFsdWUgPSBldmVudDtcclxuICAgICAgdGhpcy5jYXRlZ29yaWVzW3BhcmFtc1swXV0uZm9ybXNbcGFyYW1zWzFdXS5mb3Jtc1twYXJhbXNbMl1dLmRlZmF1bHRWYWx1ZSA9IGV2ZW50O1xyXG4gICAgICB0aGlzLmNhdGVnb3JpZXNbcGFyYW1zWzBdXS5mb3Jtc1twYXJhbXNbMV1dLmZvcm1zW3BhcmFtc1syXV0uZm9ybXNbcGFyYW1zWzNdXS5kZWZhdWx0VmFsdWUgPSBldmVudDtcclxuICAgIH1cclxuICAgIC8vIHRoaXMuZ2V0Q29uZGl0aW9uVmFsdWVzKClcclxuICB9XHJcblxyXG4gIGFkZEtleXdvcmRGcm9tSW5wdXQoZXZlbnQ6IE1hdENoaXBJbnB1dEV2ZW50LCBwcmV2LCAuLi5wYXJhbXMpIHtcclxuICAgIHRoaXMuY2FuRXhpdCA9IGZhbHNlO1xyXG4gICAgY29uc3QgaW5wdXQgPSBldmVudC5pbnB1dDtcclxuICAgIGNvbnN0IHZhbHVlID0gZXZlbnQudmFsdWU7XHJcbiAgICBjb25zdCBsZW5ndGggPSBwYXJhbXMubGVuZ3RoO1xyXG4gICAgY29uc3QgZm9ybXMgPSBsZW5ndGggPT09IDIgPyB0aGlzLmNhdGVnb3JpZXNbcGFyYW1zWzBdXS5mb3Jtc1twYXJhbXNbbGVuZ3RoIC0gMV1dIDogbGVuZ3RoID09PSAzID8gdGhpcy5jYXRlZ29yaWVzW3BhcmFtc1swXV0uZm9ybXNbcGFyYW1zWzFdXS5mb3Jtc1twYXJhbXNbbGVuZ3RoIC0gMV1dIDogdGhpcy5jYXRlZ29yaWVzW3BhcmFtc1swXV0uZm9ybXNbcGFyYW1zWzFdXS5mb3Jtc1twYXJhbXNbMl1dLmZvcm1zW3BhcmFtc1tsZW5ndGggLSAxXV07XHJcbiAgICBpZiAodmFsdWUpIHtcclxuICAgICAgY29uc3QgcHJldkluZGV4ID0gZm9ybXMuZGVmYXVsdFZhbHVlLmZpbmRJbmRleCgob3B0KSA9PiBvcHQudmFsdWUudG9Mb2NhbGVMb3dlckNhc2UoKSA9PT0gcHJldi50b0xvY2FsZUxvd2VyQ2FzZSgpKTtcclxuICAgICAgaWYgKHByZXZJbmRleCAhPT0gLTEpIHtcclxuICAgICAgICBmb3Jtcy5kZWZhdWx0VmFsdWVbcHJldkluZGV4XS52YWx1ZSA9IHZhbHVlLnRyaW0oKTtcclxuICAgICAgICBpbnB1dC52YWx1ZSA9IFwiXCI7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc3QgZXhpc3QgPSBmb3Jtcy5kZWZhdWx0VmFsdWUuZmluZCgob3B0KSA9PiBvcHQudmFsdWUudG9Mb2NhbGVMb3dlckNhc2UoKSA9PT0gZXZlbnQudmFsdWUudG9Mb2NhbGVMb3dlckNhc2UoKSk7XHJcbiAgICAgICAgaWYgKCFleGlzdCkge1xyXG4gICAgICAgICAgZm9ybXMuZGVmYXVsdFZhbHVlLnB1c2goeyB2YWx1ZTogdmFsdWUudHJpbSgpLCBjaGVja2VkOiBmYWxzZSB9KTtcclxuICAgICAgICAgIGlucHV0LnZhbHVlID0gXCJcIjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgaW5wdXQudmFsdWUgPSBcIlwiO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgIH1cclxuICAgIC8vIHRoaXMuZ2V0Q29uZGl0aW9uVmFsdWVzKClcclxuICB9XHJcblxyXG4gIGRyb3AoZXZlbnQ6IENka0RyYWdEcm9wPHN0cmluZ1tdPikge1xyXG4gICAgdGhpcy5jYW5FeGl0ID0gZmFsc2U7XHJcbiAgICBpZiAoZXZlbnQucHJldmlvdXNDb250YWluZXIgPT09IGV2ZW50LmNvbnRhaW5lcikge1xyXG4gICAgICBtb3ZlSXRlbUluQXJyYXkoZXZlbnQuY29udGFpbmVyLmRhdGEsIGV2ZW50LnByZXZpb3VzSW5kZXgsIGV2ZW50LmN1cnJlbnRJbmRleCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0cmFuc2ZlckFycmF5SXRlbShldmVudC5wcmV2aW91c0NvbnRhaW5lci5kYXRhLCBldmVudC5jb250YWluZXIuZGF0YSwgZXZlbnQucHJldmlvdXNJbmRleCwgZXZlbnQuY3VycmVudEluZGV4KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGluZ29yZURlZmF1bHRBY3Rpb24oZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIH1cclxuXHJcbiAgb25TaG93Q2F0ZWdvcnkoKSB7XHJcbiAgICB0aGlzLnNob3dQcm9maWxlTmFtZSA9ICF0aGlzLnNob3dQcm9maWxlTmFtZTtcclxuICB9XHJcblxyXG4gIG9uU2VsZWN0UGljdG8oZSwgcGljdG8pIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIHRoaXMuY2FuRXhpdCA9IGZhbHNlO1xyXG4gICAgdGhpcy5mb3JtLnBhdGNoVmFsdWUoeyBQaWN0bzogcGljdG8gfSk7XHJcbiAgICB0aGlzLmlzUGljdG9MaXN0U2hvdyA9ICF0aGlzLmlzUGljdG9MaXN0U2hvdztcclxuICB9XHJcbiAgb25TaG93UGljdG9MaXN0KGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIHRoaXMuaXNQaWN0b0xpc3RTaG93ID0gIXRoaXMuaXNQaWN0b0xpc3RTaG93O1xyXG4gIH1cclxuICBvbkNoYW5nZUxhYmVsKGV2ZW50OiBhbnksIC4uLnBhcmFtcykge1xyXG4gICAgY29uc3QgYXJyID0gZXZlbnQubGFiZWwuc3BsaXQoXCIgXCIpO1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgYXJyW2ldID0gYXJyW2ldLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgYXJyW2ldLnNsaWNlKDEpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgbGVuZ3RoID0gcGFyYW1zLmxlbmd0aDtcclxuICAgIGNvbnN0IGZvcm1zID0gbGVuZ3RoID09PSAyID8gdGhpcy5jYXRlZ29yaWVzW3BhcmFtc1swXV0uZm9ybXNbcGFyYW1zW2xlbmd0aCAtIDFdXSA6IGxlbmd0aCA9PT0gMyA/IHRoaXMuY2F0ZWdvcmllc1twYXJhbXNbMF1dLmZvcm1zW3BhcmFtc1sxXV0uZm9ybXNbcGFyYW1zW2xlbmd0aCAtIDFdXSA6IHRoaXMuY2F0ZWdvcmllc1twYXJhbXNbMF1dLmZvcm1zW3BhcmFtc1sxXV0uZm9ybXNbcGFyYW1zWzJdXS5mb3Jtc1twYXJhbXNbbGVuZ3RoIC0gMV1dO1xyXG4gICAgZm9ybXMua2V5ID0gYXJyLmpvaW4oJycpXHJcblxyXG4gIH1cclxuXHJcbiAgb25DaGVja2VkQ2hpcChldmVudDogYW55LCAuLi5wYXJhbXMpIHtcclxuICAgIHRoaXMuY2FuRXhpdCA9IGZhbHNlO1xyXG4gICAgY29uc3QgbGVuZ3RoID0gcGFyYW1zLmxlbmd0aDtcclxuICAgIGNvbnN0IGZvcm1zID0gbGVuZ3RoID09PSAyID8gdGhpcy5jYXRlZ29yaWVzW3BhcmFtc1swXV0uZm9ybXNbcGFyYW1zW2xlbmd0aCAtIDFdXSA6IGxlbmd0aCA9PT0gMyA/IHRoaXMuY2F0ZWdvcmllc1twYXJhbXNbMF1dLmZvcm1zW3BhcmFtc1sxXV0uZm9ybXNbcGFyYW1zW2xlbmd0aCAtIDFdXSA6IHRoaXMuY2F0ZWdvcmllc1twYXJhbXNbMF1dLmZvcm1zW3BhcmFtc1sxXV0uZm9ybXNbcGFyYW1zWzJdXS5mb3Jtc1twYXJhbXNbbGVuZ3RoIC0gMV1dO1xyXG4gICAgY29uc3QgaW5kZXggPSBmb3Jtcy5kZWZhdWx0VmFsdWUuZmluZEluZGV4KChjaGlwKSA9PiBjaGlwLnZhbHVlID09PSBldmVudC52YWx1ZSlcclxuICAgIGlmIChpbmRleCAhPT0gLTEgJiYgZm9ybXMudHlwZSA9PT0gJ2NoZWNrYm94X211bHRpcGxlJykge1xyXG4gICAgICBmb3Jtcy5kZWZhdWx0VmFsdWVbaW5kZXhdLmNoZWNrZWQgPSAhZXZlbnQuY2hlY2tlZFxyXG4gICAgfSBlbHNlIGlmIChpbmRleCAhPT0gLTEpIHtcclxuICAgICAgZm9ybXMuZGVmYXVsdFZhbHVlLmZvckVhY2goKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgdmFsdWUuY2hlY2tlZCA9IGZhbHNlO1xyXG4gICAgICB9KVxyXG4gICAgICBmb3Jtcy5kZWZhdWx0VmFsdWVbaW5kZXhdLmNoZWNrZWQgPSAhZXZlbnQuY2hlY2tlZFxyXG4gICAgfVxyXG4gICAgLy8gdGhpcy5nZXRDb25kaXRpb25WYWx1ZXMoKVxyXG4gIH1cclxuXHJcbiAgb3BlbkRpYWxvZygpIHtcclxuICAgIGNvbnN0IGRpYWxvZ1JlZiA9IHRoaXMuZGlhbG9nLm9wZW4oRGlhbG9nQ3JlYXRlVGVtcGxhdGVDb21wb25lbnQsIHtcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIHRhZ3M6IHRoaXMudGFncyxcclxuICAgICAgICBwcm9maWw6IHRoaXMuZm9ybS52YWx1ZVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIGRpYWxvZ1JlZi5hZnRlckNsb3NlZCgpLnN1YnNjcmliZSgoY3VycmVudDogYW55KSA9PiB7XHJcbiAgICAgIGlmIChjdXJyZW50KSB7XHJcbiAgICAgICAgdGhpcy5zZXJ2aWNlLmN1cnJlbnRUZW1wbGF0ZS5uZXh0KGN1cnJlbnQpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG9uUGFzc0luRWRpdE1vZGUoaSkge1xyXG4gICAgdGhpcy5jYW5FeGl0ID0gZmFsc2U7XHJcbiAgICB0aGlzLmVkaXRJbmRleCA9IGk7XHJcbiAgfVxyXG5cclxuICBvbkVkaXQoKSB7XHJcbiAgICB0aGlzLmVkaXRJbmRleCA9IG51bGw7XHJcbiAgfVxyXG5cclxuICBvbkVkaXRDYXRlZ29yeU5hbWUoaSwgbmFtZSkge1xyXG4gICAgdGhpcy5jYW5FeGl0ID0gZmFsc2U7XHJcbiAgICB0aGlzLmNhdGVnb3JpZXNbaV0ubmFtZSA9IG5hbWU7XHJcbiAgICAvLyB0aGlzLmdldENvbmRpdGlvblZhbHVlcygpXHJcbiAgfVxyXG4gIG9uQWNyZWxpbmsoZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIH1cclxuXHJcbiAgZ2V0Q29uZGl0aW9uVmFsdWVzKCkge1xyXG4gICAgY29uc3QgY29uZGl0aW9uc0xpc3Q6IGFueSA9IFtdO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmNhdGVnb3JpZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgY29uc3QgY2F0ZWdvcnkgPSB7XHJcbiAgICAgICAgbGFiZWw6IHRoaXMuY2F0ZWdvcmllc1tpXS5uYW1lLFxyXG4gICAgICAgIGZvcm1zOiBbXSxcclxuICAgICAgICBrZXk6IHRoaXMuY2F0ZWdvcmllc1tpXS5rZXksXHJcbiAgICAgICAgbG9jYXRpb246IHtcclxuICAgICAgICAgIHMwSW5kZXg6IGksXHJcbiAgICAgICAgfSxcclxuICAgICAgICBsZXZlbDogMCxcclxuICAgICAgfVxyXG5cclxuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLmNhdGVnb3JpZXNbaV0uZm9ybXMubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICBjb25zdCBzMUZvcm1zID0gdGhpcy5jYXRlZ29yaWVzW2ldLmZvcm1zW2pdO1xyXG4gICAgICAgIGNvbnN0IHMxTG9jYXRpb24gPSB7XHJcbiAgICAgICAgICBsZXZlbDogMSxcclxuICAgICAgICAgIGxvY2F0aW9uOiB7XHJcbiAgICAgICAgICAgIHMwSW5kZXg6IGksXHJcbiAgICAgICAgICAgIHMxSW5kZXg6IGosXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAga2V5OiBzMUZvcm1zLmtleSxcclxuICAgICAgICAgIGRlZmF1bHRWYWx1ZTogczFGb3Jtcy5kZWZhdWx0VmFsdWUsXHJcbiAgICAgICAgICBsYWJlbDogczFGb3Jtcy5sYWJlbCxcclxuICAgICAgICAgIGZvcm1zOiBbXVxyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRlZ29yeS5mb3Jtcy5wdXNoKHMxTG9jYXRpb24pXHJcbiAgICAgICAgaWYgKHMxRm9ybXMuZm9ybXMpIHtcclxuICAgICAgICAgIGZvciAobGV0IGsgPSAwOyBrIDwgczFGb3Jtcy5mb3Jtcy5sZW5ndGg7IGsrKykge1xyXG4gICAgICAgICAgICBjb25zdCBzMkZvcm1zID0gczFGb3Jtcy5mb3Jtc1trXVxyXG4gICAgICAgICAgICBjb25zdCBzMkxvY2F0aW9uID0ge1xyXG4gICAgICAgICAgICAgIGxldmVsOiAyLFxyXG4gICAgICAgICAgICAgIGxvY2F0aW9uOiB7XHJcbiAgICAgICAgICAgICAgICBzMEluZGV4OiBpLFxyXG4gICAgICAgICAgICAgICAgczFJbmRleDogaixcclxuICAgICAgICAgICAgICAgIHMySW5kZXg6IGssXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU6IHMyRm9ybXMuZGVmYXVsdFZhbHVlLFxyXG4gICAgICAgICAgICAgIGxhYmVsOiBzMkZvcm1zLmxhYmVsLFxyXG4gICAgICAgICAgICAgIGtleTogczJGb3Jtcy5rZXksXHJcbiAgICAgICAgICAgICAgZm9ybXM6IFtdXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgczFMb2NhdGlvbi5mb3Jtcy5wdXNoKHMyTG9jYXRpb24pXHJcbiAgICAgICAgICAgIGlmIChzMkZvcm1zLmZvcm1zKSB7XHJcbiAgICAgICAgICAgICAgZm9yIChsZXQgbCA9IDA7IGwgPCBzMkZvcm1zLmZvcm1zLmxlbmd0aDsgbCsrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzM0Zvcm1zID0gczJGb3Jtcy5mb3Jtc1tsXVxyXG4gICAgICAgICAgICAgICAgY29uc3QgczNMb2NhdGlvbiA9IHtcclxuICAgICAgICAgICAgICAgICAgbGV2ZWw6IDMsXHJcbiAgICAgICAgICAgICAgICAgIGxvY2F0aW9uOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgczBJbmRleDogaSxcclxuICAgICAgICAgICAgICAgICAgICBzMUluZGV4OiBqLFxyXG4gICAgICAgICAgICAgICAgICAgIHMySW5kZXg6IGssXHJcbiAgICAgICAgICAgICAgICAgICAgczNJbmRleDogbCxcclxuICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlOiBzM0Zvcm1zLmRlZmF1bHRWYWx1ZSxcclxuICAgICAgICAgICAgICAgICAga2V5OiBzM0Zvcm1zLmtleSxcclxuICAgICAgICAgICAgICAgICAgbGFiZWw6IHMzRm9ybXMubGFiZWwsXHJcbiAgICAgICAgICAgICAgICAgIGZvcm1zOiBbXVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgczJMb2NhdGlvbi5mb3Jtcy5wdXNoKHMzTG9jYXRpb24pXHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHMzTG9jYXRpb24uZm9ybXMpIHtcclxuICAgICAgICAgICAgICAgICAgZm9yIChsZXQgbSA9IDA7IG0gPCBzM0xvY2F0aW9uLmZvcm1zLmxlbmd0aDsgbSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgczRMb2NhdGlvbiA9IHMzTG9jYXRpb24uZm9ybXNbbV1cclxuICAgICAgICAgICAgICAgICAgICBzM0xvY2F0aW9uLmZvcm1zLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgbGV2ZWw6IDQsXHJcbiAgICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzMEluZGV4OiBpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzMUluZGV4OiBqLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzMkluZGV4OiBrLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzM0luZGV4OiBsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzNEluZGV4OiBtLFxyXG4gICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZTogczRMb2NhdGlvbi5kZWZhdWx0VmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICBrZXk6IHM0TG9jYXRpb24ua2V5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IHM0TG9jYXRpb24ubGFiZWxcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGNvbmRpdGlvbnNMaXN0LnB1c2goY2F0ZWdvcnkpXHJcbiAgICB9XHJcbiAgICB0aGlzLmNvbmRpdGlvbkRhdGEuYWxsID0gY29uZGl0aW9uc0xpc3Q7XHJcblxyXG4gIH1cclxuXHJcbiAgb25TZWxlY3RDb25kaXRpb24obGV2ZWwsIHN1YkxldmVsLCB2YWx1ZSkge1xyXG4gICAgY29uc29sZS5sb2coYCR7bGV2ZWx9IC0gJHtzdWJMZXZlbH0gLSAke3ZhbHVlfWApO1xyXG5cclxuICAgIGNvbnN0IGNvbmRpdGlvbiA9IHRoaXMuY29uZGl0aW9uRGF0YVtsZXZlbF0uZmluZCgoZGF0YSkgPT4gZGF0YS5rZXkgPT09IHZhbHVlKTtcclxuICAgIGlmIChsZXZlbCA9PT0gXCJhbGxcIikge1xyXG4gICAgICB0aGlzLmNvbmRpdGlvbkRhdGEgPSB7XHJcbiAgICAgICAgLi4udGhpcy5jb25kaXRpb25EYXRhLFxyXG4gICAgICAgIHMxOiBbXSxcclxuICAgICAgICBzMjogW10sXHJcbiAgICAgICAgczM6IFtdLFxyXG4gICAgICAgIGRlZmF1bHRWYWx1ZTogW11cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGhpcy5jdXJyZW50RWRpdEJsb2NrLmNvbmRpdGlvbiA9IGNvbmRpdGlvblxyXG4gICAgdGhpcy5vbkdldERlZmF1bHRWYWx1ZSgpXHJcbiAgICBpZiAoY29uZGl0aW9uLmZvcm1zLmxlbmd0aCA+IDApIHtcclxuICAgICAgdGhpcy5jb25kaXRpb25EYXRhW3N1YkxldmVsXSA9IGNvbmRpdGlvbi5mb3JtcztcclxuICAgIH1cclxuICB9XHJcbiAgb25HZXREZWZhdWx0VmFsdWUoKSB7XHJcbiAgICBpZiAodGhpcy5jdXJyZW50RWRpdEJsb2NrLmlzQ29uZGl0aW9uYWwgJiYgdGhpcy5jdXJyZW50RWRpdEJsb2NrPy5jb25kaXRpb24/LmxvY2F0aW9uKSB7XHJcbiAgICAgIGNvbnN0IHsgczBJbmRleCwgLi4ucmVzdCB9ID0gdGhpcy5jdXJyZW50RWRpdEJsb2NrLmNvbmRpdGlvbi5sb2NhdGlvblxyXG4gICAgICBsZXQgY3VycmVudERhdGEgPSB0aGlzLmNhdGVnb3JpZXNbczBJbmRleF07XHJcbiAgICAgIGZvciAoY29uc3Qga2V5IGluIHJlc3QpIHtcclxuICAgICAgICBpZiAoY3VycmVudERhdGEuZm9ybXNbcmVzdFtrZXldXSkge1xyXG4gICAgICAgICAgY3VycmVudERhdGEgPSBjdXJyZW50RGF0YS5mb3Jtc1tyZXN0W2tleV1dXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBjdXJyZW50RGF0YS5kZWZhdWx0VmFsdWUgfHwgW11cclxuICAgIH1cclxuICAgIHJldHVybiBbXVxyXG4gIH1cclxuXHJcbiAgb25BY3RpdmVNZW51KGNhdCwgaSwgZXZlbnQgPSBudWxsKSB7XHJcbiAgICB0aGlzLmVkaXRJbmRleCA9IGk7XHJcbiAgICB0aGlzLnBhcmFtc0luZGV4ID0gW2ldO1xyXG4gICAgdGhpcy5vbkV4cGVuZE1vcmUoeyBmaWVsZDogY2F0IH0sIGkpO1xyXG4gICAgdGhpcy5vblNob3dTZWN0aW9uKGV2ZW50KTtcclxuICAgIHRoaXMuY3VycmVudEVkaXRCbG9jayA9IGNhdDtcclxuICB9XHJcblxyXG4gIGNhdE5hbWVTdGFydChzdHI6IHN0cmluZykge1xyXG4gICAgY29uc3Qgdm93ZWxzID0gWydhJywgJ2UnLCAnaScsICdvJywgJ3UnLCAneSddO1xyXG4gICAgcmV0dXJuIHZvd2Vscy5pbmNsdWRlcyhzdHIuc3Vic3RyKDAsIDEpLnRvTG9jYWxlTG93ZXJDYXNlKCkpXHJcbiAgfVxyXG5cclxuICBvblNob3dTZWN0aW9uKGUpIHtcclxuICAgIGlmIChlKSBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgdGhpcy5pc1NlY3Rpb24gPSB0cnVlO1xyXG4gICAgdGhpcy5pc0Jsb2NrID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBvbkVkaXRCbG9jayhibG9jaywgLi4ucGFyYW1zKSB7XHJcblxyXG5cclxuICAgIHRoaXMuaXNCbG9jayA9IHRydWU7XHJcbiAgICB0aGlzLmN1cnJlbnRFZGl0QmxvY2sgPSBibG9jaztcclxuICAgIGNvbnNvbGUubG9nKHBhcmFtcyk7XHJcbiAgICBjb25zdCB7IGNvbmRpdGlvbiB9ID0gdGhpcy5jdXJyZW50RWRpdEJsb2NrXHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLmN1cnJlbnRFZGl0QmxvY2spO1xyXG4gICAgaWYgKGNvbmRpdGlvbiAmJiBjb25kaXRpb24ubG9jYXRpb24pIHtcclxuICAgICAgY29uc3QgbG9jYXRpb24gPSBjb25kaXRpb24ubG9jYXRpb247XHJcbiAgICAgIGlmIChsb2NhdGlvbj8uczBJbmRleCA+PSAwKSB7XHJcbiAgICAgICAgdGhpcy5hbGwgPSB0aGlzLmNhdGVnb3JpZXNbbG9jYXRpb24uczBJbmRleF0ua2V5XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJsb2NhdGlvbj8uczBJbmRleFwiLCB0aGlzLmFsbCk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGxvY2F0aW9uPy5zMUluZGV4ID49IDApIHtcclxuICAgICAgICB0aGlzLnMxID0gdGhpcy5jYXRlZ29yaWVzW2xvY2F0aW9uLnMwSW5kZXhdLmZvcm1zW2xvY2F0aW9uLnMxSW5kZXhdLmtleTtcclxuICAgICAgfVxyXG4gICAgICBpZiAobG9jYXRpb24/LnMySW5kZXggPj0gMCkge1xyXG4gICAgICAgIHRoaXMuczIgPSB0aGlzLmNhdGVnb3JpZXNbbG9jYXRpb24uczBJbmRleF0uZm9ybXNbbG9jYXRpb24uczFJbmRleF0uZm9ybXNbbG9jYXRpb24uczJJbmRleF0ua2V5O1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChsb2NhdGlvbj8uczNJbmRleCA+PSAwKSB7XHJcbiAgICAgICAgdGhpcy5zMyA9IHRoaXMuY2F0ZWdvcmllc1tsb2NhdGlvbi5zMEluZGV4XS5mb3Jtc1tsb2NhdGlvbi5zMUluZGV4XS5mb3Jtc1tsb2NhdGlvbi5zMkluZGV4XS5mb3Jtc1tsb2NhdGlvbi5zM0luZGV4XS5rZXk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGxvY2F0aW9uPy5zNEluZGV4ID49IDApIHtcclxuICAgICAgICB0aGlzLnM0ID0gdGhpcy5jYXRlZ29yaWVzW2xvY2F0aW9uLnMwSW5kZXhdLmZvcm1zW2xvY2F0aW9uLnMxSW5kZXhdLmZvcm1zW2xvY2F0aW9uLnMySW5kZXhdLmZvcm1zW2xvY2F0aW9uLnMzSW5kZXhdLmZvcm1zW2xvY2F0aW9uLnM0SW5kZXhdLmtleTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGhpcy5pc1NlY3Rpb24gPSBmYWxzZTtcclxuICAgIHRoaXMucGFyYW1zSW5kZXggPSBwYXJhbXM7XHJcbiAgICB0aGlzLmdldENvbmRpdGlvblZhbHVlcygpXHJcbiAgfVxyXG5cclxuICBvblJlbW92ZWJsb2NrKGV2ZW50LCBibG9jaykge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICB9XHJcblxyXG4gIG9uUmVtb3ZlRmllbGRCbG9jayhldmVudCkge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IGxlbmd0aCA9IHRoaXMucGFyYW1zSW5kZXgubGVuZ3RoO1xyXG4gICAgdGhpcy5jYW5FeGl0ID0gZmFsc2U7XHJcbiAgICBjb25zdCBmb3JtcyA9IGxlbmd0aCA9PT0gMSA/IHRoaXMuY2F0ZWdvcmllcyA6IGxlbmd0aCA9PT0gMiA/IHRoaXMuY2F0ZWdvcmllc1t0aGlzLnBhcmFtc0luZGV4WzBdXS5mb3JtcyA6IGxlbmd0aCA9PT0gMyA/IHRoaXMuY2F0ZWdvcmllc1t0aGlzLnBhcmFtc0luZGV4WzBdXS5mb3Jtc1t0aGlzLnBhcmFtc0luZGV4WzFdXS5mb3JtcyA6IHRoaXMuY2F0ZWdvcmllc1t0aGlzLnBhcmFtc0luZGV4WzBdXS5mb3Jtc1t0aGlzLnBhcmFtc0luZGV4WzFdXS5mb3Jtc1t0aGlzLnBhcmFtc0luZGV4WzJdXS5mb3JtcztcclxuXHJcbiAgICB0aGlzLmN1cnJlbnRFZGl0QmxvY2sgPSBudWxsO1xyXG4gICAgdGhpcy5pc0Jsb2NrID0gZmFsc2U7XHJcbiAgICB0aGlzLmlzU2VjdGlvbiA9IGZhbHNlO1xyXG4gICAgdGhpcy5vbkhpc3Rvcmljcyh7XHJcbiAgICAgIGZvcm06IGZvcm1zLnNwbGljZSh0aGlzLnBhcmFtc0luZGV4W2xlbmd0aCAtIDFdLCAxKVswXSxcclxuICAgICAgbWV0aG9kOiAnc3BsaWNlJyxcclxuICAgICAgbG9jYXRpb246IGxlbmd0aCA9PT0gMSA/ICdjYXRlZ29yeScgOiAnZm9ybXMnLFxyXG4gICAgICBwYXJhbXM6IHRoaXMucGFyYW1zSW5kZXhcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBvbkR1cGxpY2F0ZWRCbG9jayhldmVudCkge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IGxlbmd0aCA9IHRoaXMucGFyYW1zSW5kZXgubGVuZ3RoO1xyXG4gICAgdGhpcy5jYW5FeGl0ID0gZmFsc2U7XHJcbiAgICBjb25zdCBmb3JtcyA9IGxlbmd0aCA9PT0gMSA/IHRoaXMuY2F0ZWdvcmllcyA6IGxlbmd0aCA9PT0gMiA/IHRoaXMuY2F0ZWdvcmllc1t0aGlzLnBhcmFtc0luZGV4WzBdXS5mb3JtcyA6IGxlbmd0aCA9PT0gMyA/IHRoaXMuY2F0ZWdvcmllc1t0aGlzLnBhcmFtc0luZGV4WzBdXS5mb3Jtc1t0aGlzLnBhcmFtc0luZGV4WzFdXS5mb3JtcyA6IHRoaXMuY2F0ZWdvcmllc1t0aGlzLnBhcmFtc0luZGV4WzBdXS5mb3Jtc1t0aGlzLnBhcmFtc0luZGV4WzFdXS5mb3Jtc1t0aGlzLnBhcmFtc0luZGV4WzJdXS5mb3JtcztcclxuICAgIGNvbnN0IGNsb25lRWRpdGFibGUgPSB0aGlzLm9uRWRpdGFibGVCbG9jayh7IC4uLnRoaXMuY3VycmVudEVkaXRCbG9jaywgbmFtZTogdGhpcy5jdXJyZW50RWRpdEJsb2NrLm5hbWUgKyAnIC0gY29waWUnIH0pXHJcbiAgICBjb25zb2xlLmxvZygnLS0tLS0tLXd3d3d3d3d3dy0tLS0tLS0tLS0tLS0tLScsIGNsb25lRWRpdGFibGUpO1xyXG4gICAgY29uc3QgY2xvbmVCbG9jayA9IEpTT04uc3RyaW5naWZ5KGNsb25lRWRpdGFibGUpO1xyXG5cclxuXHJcbiAgICBmb3Jtcy5wdXNoKEpTT04ucGFyc2UoY2xvbmVCbG9jaykpO1xyXG4gICAgdGhpcy5jdXJyZW50RWRpdEJsb2NrID0gZm9ybXMuYXQoLTEpO1xyXG4gICAgY29uc3QgcGFyYW1zOiBudW1iZXJbXSA9IFsuLi50aGlzLnBhcmFtc0luZGV4XVxyXG4gICAgcGFyYW1zLnBvcCgpO1xyXG4gICAgcGFyYW1zLnB1c2goZm9ybXMubGVuZ3RoIC0gMSk7XHJcbiAgICB0aGlzLm9uSGlzdG9yaWNzKHtcclxuICAgICAgZm9ybTogSlNPTi5wYXJzZShjbG9uZUJsb2NrKSxcclxuICAgICAgbWV0aG9kOiAncHVzaCcsXHJcbiAgICAgIGxvY2F0aW9uOiAnZm9ybXMnLFxyXG4gICAgICBwYXJhbXNcclxuICAgIH0pXHJcbiAgICAvLyB0aGlzLmVkaXRJbmRleCA9IGZvcm1zLmxlbmd0aCAtIDE7XHJcbiAgfVxyXG5cclxuICBvbkVkaXRhYmxlQmxvY2sobm90RWRpdGFibGVCbG9jazogYW55KSB7XHJcbiAgICBjb25zdCBlZGl0YWJsZUZvcm1CbG9jayA9IG5vdEVkaXRhYmxlQmxvY2suZm9ybXMgPyBub3RFZGl0YWJsZUJsb2NrLmZvcm1zXHJcbiAgICAgIC5tYXAoKGNhdCkgPT4ge1xyXG4gICAgICAgIGlmIChjYXQuZm9ybXMpIHtcclxuICAgICAgICAgIGNvbnN0IGYgPSBjYXQuZm9ybXNcclxuICAgICAgICAgICAgLm1hcCgoc3ViKSA9PiB7XHJcbiAgICAgICAgICAgICAgaWYgKHN1Yi5mb3Jtcykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcyA9IHN1Yi5mb3Jtcy5tYXAoKGNoaWxkKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIGlmIChjaGlsZC5mb3Jtcykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAuLi5jaGlsZCxcclxuICAgICAgICAgICAgICAgICAgICAgIGVkaXRhYmxlOiB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLi4uY2hpbGQsIGVkaXRhYmxlOiB0cnVlXHJcbiAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgIC4uLnN1YixcclxuICAgICAgICAgICAgICAgICAgZWRpdGFibGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgIGZvcm1zOiBzXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIHJldHVybiB7IC4uLnN1YiwgZWRpdGFibGU6IHRydWUgfTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIC4uLmNhdCxcclxuICAgICAgICAgICAgZWRpdGFibGU6IHRydWUsXHJcbiAgICAgICAgICAgIGZvcm1zOiBmXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB7IC4uLmNhdCwgZWRpdGFibGU6IHRydWUgfVxyXG4gICAgICB9KSA6IG51bGw7XHJcbiAgICByZXR1cm4gZWRpdGFibGVGb3JtQmxvY2sgPyB7IC4uLm5vdEVkaXRhYmxlQmxvY2ssIGVkaXRhYmxlOiB0cnVlLCBmb3JtczogZWRpdGFibGVGb3JtQmxvY2sgfSA6IG5vdEVkaXRhYmxlQmxvY2s7XHJcbiAgfVxyXG5cclxuICBvbktleVVwQ2hpcChldmVudCwgZmllbGQpIHtcclxuICAgIHRoaXMuY2FuRXhpdCA9IGZhbHNlO1xyXG4gICAgaWYgKGV2ZW50LmtleSA9PT0gXCI7XCIpIHtcclxuICAgICAgY29uc3QgZXhpc3QgPSBmaWVsZC5kZWZhdWx0VmFsdWUuZmluZCgob3B0KSA9PiBvcHQudmFsdWUudG9Mb2NhbGVMb3dlckNhc2UoKSA9PT0gZXZlbnQudGFyZ2V0LnZhbHVlLnNwbGl0KFwiO1wiKVswXS50b0xvY2FsZUxvd2VyQ2FzZSgpKTtcclxuICAgICAgaWYgKCFleGlzdCkge1xyXG4gICAgICAgIGZpZWxkLmRlZmF1bHRWYWx1ZS5wdXNoKHtcclxuICAgICAgICAgIHZhbHVlOiBldmVudC50YXJnZXQudmFsdWUuc3BsaXQoXCI7XCIpWzBdLnNsaWNlKDAsIDIwKSxcclxuICAgICAgICAgIGNoZWNrZWQ6IGZhbHNlXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZXZlbnQudGFyZ2V0LnZhbHVlID0gXCJcIjtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBldmVudC50YXJnZXQudmFsdWUgPSBcIlwiO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyB0aGlzLmdldENvbmRpdGlvblZhbHVlcygpXHJcbiAgfVxyXG5cclxuICBvbkVkaXRDaGlwKGNoaXApIHtcclxuICAgIGlmIChjaGlwLnZhbHVlID09PSB0aGlzLmN1cnJlbnRDaGlwKSB7XHJcbiAgICAgIHRoaXMuY3VycmVudENoaXAgPSBcIlwiXHJcbiAgICAgIHRoaXMucHJldlZhbHVlID0gXCJcIlxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5jdXJyZW50Q2hpcCA9IGNoaXAudmFsdWU7XHJcbiAgICAgIHRoaXMucHJldlZhbHVlID0gY2hpcC52YWx1ZVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYWRkS2V5d29yZEZyb21JbnB1dEJsb2NrKGV2ZW50OiBNYXRDaGlwSW5wdXRFdmVudCwgZmllbGQsIHByZXYpIHtcclxuICAgIHRoaXMuY2FuRXhpdCA9IGZhbHNlO1xyXG4gICAgY29uc3QgaW5wdXQgPSBldmVudC5pbnB1dDtcclxuICAgIGNvbnN0IHZhbHVlID0gZXZlbnQudmFsdWU7XHJcbiAgICBpZiAodmFsdWUpIHtcclxuICAgICAgY29uc3QgcHJldkluZGV4ID0gZmllbGQuZGVmYXVsdFZhbHVlPy5maW5kSW5kZXgoKG9wdCkgPT4gb3B0LnZhbHVlLnRvTG9jYWxlTG93ZXJDYXNlKCkgPT09IHByZXYudG9Mb2NhbGVMb3dlckNhc2UoKSk7XHJcbiAgICAgIGlmIChwcmV2SW5kZXggIT09IC0xKSB7XHJcbiAgICAgICAgZmllbGQuZGVmYXVsdFZhbHVlW3ByZXZJbmRleF0udmFsdWUgPSB2YWx1ZS50cmltKCk7XHJcbiAgICAgICAgaW5wdXQudmFsdWUgPSBcIlwiO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnN0IGV4aXN0ID0gZmllbGQuZGVmYXVsdFZhbHVlLmZpbmQoKG9wdCkgPT4gb3B0LnZhbHVlLnRvTG9jYWxlTG93ZXJDYXNlKCkgPT09IGV2ZW50LnZhbHVlLnRvTG9jYWxlTG93ZXJDYXNlKCkpO1xyXG4gICAgICAgIGlmICghZXhpc3QpIHtcclxuICAgICAgICAgIGZpZWxkLmRlZmF1bHRWYWx1ZS5wdXNoKHsgdmFsdWU6IHZhbHVlLnRyaW0oKS5zbGljZSgwLCAxNSksIGNoZWNrZWQ6IGZhbHNlIH0pO1xyXG4gICAgICAgICAgaW5wdXQudmFsdWUgPSBcIlwiO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBpbnB1dC52YWx1ZSA9IFwiXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgfVxyXG4gICAgLy8gdGhpcy5nZXRDb25kaXRpb25WYWx1ZXMoKVxyXG4gIH1cclxuXHJcbiAgb25DaGVja2VkQ2hpcEJsb2NrKGV2ZW50OiBhbnksIGZpZWxkKSB7XHJcbiAgICB0aGlzLmNhbkV4aXQgPSBmYWxzZTtcclxuICAgIGNvbnN0IGluZGV4ID0gZmllbGQuZGVmYXVsdFZhbHVlLmZpbmRJbmRleCgoY2hpcCkgPT4gY2hpcC52YWx1ZSA9PT0gZXZlbnQudmFsdWUpXHJcbiAgICBpZiAoaW5kZXggIT09IC0xICYmIGZpZWxkLnR5cGUgPT09ICdjaGVja2JveF9tdWx0aXBsZScpIHtcclxuICAgICAgZmllbGQuZGVmYXVsdFZhbHVlW2luZGV4XS5jaGVja2VkID0gIWV2ZW50LmNoZWNrZWRcclxuICAgIH0gZWxzZSBpZiAoaW5kZXggIT09IC0xKSB7XHJcbiAgICAgIGZpZWxkLmRlZmF1bHRWYWx1ZS5mb3JFYWNoKCh2YWx1ZSkgPT4ge1xyXG4gICAgICAgIHZhbHVlLmNoZWNrZWQgPSBmYWxzZTtcclxuICAgICAgfSlcclxuICAgICAgZmllbGQuZGVmYXVsdFZhbHVlW2luZGV4XS5jaGVja2VkID0gIWV2ZW50LmNoZWNrZWRcclxuICAgIH1cclxuICAgIC8vIHRoaXMuZ2V0Q29uZGl0aW9uVmFsdWVzKClcclxuICB9XHJcblxyXG4gIHJlbW92ZUtleXdvcmRCbG9jayhrZXl3b3JkOiBhbnksIGZpZWxkKSB7XHJcbiAgICB0aGlzLmNhbkV4aXQgPSBmYWxzZTtcclxuICAgIGZpZWxkLmRlZmF1bHRWYWx1ZSA9IGZpZWxkLmRlZmF1bHRWYWx1ZS5maWx0ZXIoKG9wdGlvbikgPT4gb3B0aW9uLnZhbHVlICE9PSBrZXl3b3JkLnZhbHVlKTtcclxuICAgIC8vIHRoaXMuZ2V0Q29uZGl0aW9uVmFsdWVzKClcclxuICB9XHJcblxyXG4gIG9uQ2hhbmdlVHlwZUJsb2NrKGZpZWxkKSB7XHJcbiAgICB0aGlzLmNhbkV4aXQgPSBmYWxzZTtcclxuICAgIGlmIChmaWVsZC50eXBlID09PSBcInNlbGVjdFwiIHx8IGZpZWxkLnR5cGUgPT09IFwicmFkaW9cIiB8fCBmaWVsZC50eXBlID09PSBcImNoZWNrYm94X211bHRpcGxlXCIpIHtcclxuICAgICAgZmllbGQuZGVmYXVsdFZhbHVlID0gW107XHJcbiAgICB9IGVsc2UgaWYgKGZpZWxkLnR5cGUgPT09IFwiY2hlY2tib3hcIiB8fCBmaWVsZC50eXBlID09PSBcInRvZ2dsZVwiKSB7XHJcbiAgICAgIGZpZWxkLmRlZmF1bHRWYWx1ZSA9IHRydWU7XHJcbiAgICAgIGZpZWxkLnZhbHVlID0gZmFsc2U7XHJcbiAgICB9IGVsc2UgaWYgKGZpZWxkLnR5cGUgPT09ICdub25lJykge1xyXG4gICAgICBmaWVsZC5kZWZhdWx0VmFsdWUgPSBcIlwiO1xyXG4gICAgICBmaWVsZC52YWx1ZSA9IFwiXCI7XHJcbiAgICAgIGZpZWxkLmxhYmVsID0gXCJBdWN1blwiO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZmllbGQuZGVmYXVsdFZhbHVlID0gXCJcIjtcclxuICAgICAgZmllbGQudmFsdWUgPSBcIlwiO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25BZGROZXdTdWJMZXZlbEZpZWxkQmxvY2soZXZlbnQpIHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB0aGlzLmNhbkV4aXQgPSBmYWxzZTtcclxuICAgIGNvbnN0IGxlbmd0aCA9IHRoaXMucGFyYW1zSW5kZXgubGVuZ3RoO1xyXG4gICAgY29uc3QgZm9ybXMgPSBsZW5ndGggPT09IDEgPyB0aGlzLmNhdGVnb3JpZXNbdGhpcy5wYXJhbXNJbmRleFswXV0gOiBsZW5ndGggPT09IDIgPyB0aGlzLmNhdGVnb3JpZXNbdGhpcy5wYXJhbXNJbmRleFswXV0uZm9ybXNbdGhpcy5wYXJhbXNJbmRleFtsZW5ndGggLSAxXV0gOiBsZW5ndGggPT09IDMgPyB0aGlzLmNhdGVnb3JpZXNbdGhpcy5wYXJhbXNJbmRleFswXV0uZm9ybXNbdGhpcy5wYXJhbXNJbmRleFsxXV0uZm9ybXNbdGhpcy5wYXJhbXNJbmRleFtsZW5ndGggLSAxXV0gOiB0aGlzLmNhdGVnb3JpZXNbdGhpcy5wYXJhbXNJbmRleFswXV0uZm9ybXNbdGhpcy5wYXJhbXNJbmRleFsxXV0uZm9ybXNbdGhpcy5wYXJhbXNJbmRleFsyXV0uZm9ybXNbdGhpcy5wYXJhbXNJbmRleFtsZW5ndGggLSAxXV07XHJcbiAgICBmb3Jtcy5leHBhbmRNb3JlID0gdHJ1ZTtcclxuICAgIGZvcm1zLmZvcm1zID0gZm9ybXMuZm9ybXMgfHwgW11cclxuICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgIGxhYmVsOiBcIk5vdXZlbGxlIHNvdXMgY2F0w6lnb3JpZSDDoCByZW5vbW1lclwiLFxyXG4gICAgICBrZXk6IFwiTm91dmVsbGVzb3VzY2F0w6lnb3JpZcOgcmVub21tZXJcIixcclxuICAgICAgZXhwYW5kT25ib2FyZGluZzogdHJ1ZSxcclxuICAgICAgZGVmYXVsdFZhbHVlOiBudWxsLFxyXG4gICAgICB2YWx1ZTogdHJ1ZSxcclxuICAgICAgc2l6ZTogODAsXHJcbiAgICAgIGlzTWFuZGF0b3J5OiBmYWxzZSxcclxuICAgICAgb3RoZXJWYWx1ZTogJycsXHJcbiAgICAgIHR5cGU6IFwidGV4dFwiLFxyXG4gICAgICBlZGl0YWJsZTogdHJ1ZSxcclxuICAgICAgaXNDb25kaXRpb25hbDogZmFsc2UsXHJcbiAgICAgIGNvbmRpdGlvblZhbHVlOiBcIlwiLFxyXG4gICAgICBjb25kaXRpb246IHt9LFxyXG4gICAgICBkZWxldGVhYmxlOiB0cnVlLFxyXG4gICAgICBzdWJMZXZlbDogMSxcclxuICAgICAgZXhwYW5kTW9yZTogZmFsc2UsXHJcbiAgICB9XHJcbiAgICBmb3Jtcy5mb3Jtcy5wdXNoKGRhdGFcclxuICAgIClcclxuICAgIHRoaXMub25IaXN0b3JpY3Moe1xyXG4gICAgICBmb3JtOiBkYXRhLFxyXG4gICAgICBtZXRob2Q6ICdwdXNoJyxcclxuICAgICAgbG9jYXRpb246ICdmb3JtcycsXHJcbiAgICAgIHBhcmFtczogdGhpcy5wYXJhbXNJbmRleFxyXG4gICAgfSlcclxuICB9XHJcblxyXG5cclxuICBvbk9wZW5UeXBlRGlhbG9nKGZpZWxkKSB7XHJcbiAgICBjb25zdCBkaWFsb2dSZWYgPSB0aGlzLmRpYWxvZy5vcGVuKFR5cGVDb21wb25lbnQsIHtcclxuICAgICAgZGF0YTogeyBzZWxlY3RlZFR5cGU6IGZpZWxkLnR5cGUgfVxyXG4gICAgfSk7XHJcbiAgICBkaWFsb2dSZWYuYWZ0ZXJDbG9zZWQoKS5zdWJzY3JpYmUoKHR5cGU6IGFueSkgPT4ge1xyXG4gICAgICBpZiAodHlwZSkge1xyXG4gICAgICAgIGZpZWxkLnR5cGUgPSB0eXBlO1xyXG4gICAgICAgIHRoaXMub25DaGFuZ2VUeXBlQmxvY2soZmllbGQpXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZmllbGRXaWR0aCh0eXBlOiBzdHJpbmcsIGxlbmd0aDogbnVtYmVyLCBpbmRleDogbnVtYmVyKSB7XHJcbiAgICBpZiAodHlwZSA9PT0gJ3RvZ2dsZScpIHtcclxuICAgICAgcmV0dXJuICc1MCUnXHJcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09IFwidGV4dFwiIHx8IHR5cGUgPT09IFwiZGF0ZVwiIHx8IHR5cGUgPT09IFwibm9uZVwiIHx8IHR5cGUgPT0gJ3NlbGVjdCcgfHwgdHlwZSA9PT0gJ3RlbCcgfHwgdHlwZSA9PT0gJ2VtYWlsJyB8fCB0eXBlID09PSAncGFzc3dvcmQnIHx8IHR5cGUgPT09ICd0ZXh0YXJlYScpIHtcclxuICAgICAgaWYgKGxlbmd0aCA8IDMpIHtcclxuICAgICAgICByZXR1cm4gJzUwJSdcclxuICAgICAgfSBlbHNlIGlmIChsZW5ndGggPT09IDMpIHtcclxuICAgICAgICByZXR1cm4gJzMzJSdcclxuICAgICAgfSBlbHNlIGlmIChsZW5ndGggPT09IDQpIHtcclxuICAgICAgICByZXR1cm4gJzUwJSdcclxuICAgICAgfSBlbHNlIGlmIChsZW5ndGggPT09IDUpIHtcclxuICAgICAgICByZXR1cm4gaW5kZXggPD0gMiA/ICczMyUnIDogJzUwJSdcclxuICAgICAgfSBlbHNlIGlmIChsZW5ndGggPj0gNikge1xyXG4gICAgICAgIHJldHVybiAnMzMlJ1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gJzEwMCUnXHJcbiAgfVxyXG5cclxuICBvbkNhbmNlbChsZWZ0OiBib29sZWFuKSB7XHJcbiAgICBpZiAobGVmdCkge1xyXG4gICAgICBjb25zdCBjdXJyZW50ID0gdGhpcy5jdXJyZW50Q2FuY2VsZWRJbmRleCA9PT0gbnVsbCA/IHRoaXMuaGlzdG9yaWNzLmxlbmd0aCAtIDEgOiB0aGlzLmN1cnJlbnRDYW5jZWxlZEluZGV4XHJcbiAgICAgIGlmICh0aGlzLmhpc3Rvcmljcy5sZW5ndGggPiAwICYmIGN1cnJlbnQgPj0gMCkge1xyXG4gICAgICAgIHRoaXMuY3VycmVudENhbmNlbGVkSW5kZXggPSBjdXJyZW50IC0gMTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIvCfmoAgfiBmaWxlOiB0ZW1wbGF0ZS1wcm9maWxlLWNyZWF0ZS5jb21wb25lbnQudHMgfiBsaW5lIDE5MDIgfiBUZW1wbGF0ZVByb2ZpbGVDcmVhdGVDb21wb25lbnQgfiBvbkNhbmNlbCB+IHRoaXMuY3VycmVudENhbmNlbGVkSW5kZXhcIiwgdGhpcy5jdXJyZW50Q2FuY2VsZWRJbmRleClcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmN1cnJlbnRDYW5jZWxlZEluZGV4KTtcclxuICAgICAgICBjb25zdCBsYXN0QWN0aW9uID0gdGhpcy5oaXN0b3JpY3NbY3VycmVudF1cclxuICAgICAgICBjb25zb2xlLmxvZygnbGFzdEFjdGlvbiBsZWZ0JywgbGFzdEFjdGlvbik7XHJcbiAgICAgICAgY29uc3QgcGFyYW1zID0gbGFzdEFjdGlvbi5wYXJhbXM7XHJcbiAgICAgICAgY29uc3QgbGVuZ3RoID0gcGFyYW1zLmxlbmd0aDtcclxuICAgICAgICBjb25zb2xlLmxvZygnbGVuZ3RoJywgbGVuZ3RoKTtcclxuICAgICAgICBjb25zb2xlLmxvZygndGhpcy5jYXRlZ29yaWVzJywgdGhpcy5jYXRlZ29yaWVzKTtcclxuICAgICAgICBjb25zdCBmb3JtcyA9IGxlbmd0aCA9PT0gMSA/IHRoaXMuY2F0ZWdvcmllcyA6IGxlbmd0aCA9PT0gMiA/IHRoaXMuY2F0ZWdvcmllc1twYXJhbXNbMF1dLmZvcm1zW3BhcmFtc1sxXV0uZm9ybXMgOiB0aGlzLmNhdGVnb3JpZXNbcGFyYW1zWzBdXS5mb3Jtc1twYXJhbXNbMV1dLmZvcm1zW3BhcmFtc1syXV0uZm9ybXM7XHJcbiAgICAgICAgaWYgKGxhc3RBY3Rpb24ubWV0aG9kID09PSBcInNwbGljZVwiKSB7XHJcbiAgICAgICAgICBpZiAobGVuZ3RoID09PSAxICYmIGxhc3RBY3Rpb24ubG9jYXRpb24gPT09ICdjYXRlZ29yeScpIHtcclxuICAgICAgICAgICAgZm9ybXMucHVzaChsYXN0QWN0aW9uLmZvcm0pXHJcbiAgICAgICAgICB9IGVsc2UgaWYgKGxlbmd0aCA9PT0gMSAmJiBsYXN0QWN0aW9uLmxvY2F0aW9uID09PSAnZm9ybXMnKSB7XHJcbiAgICAgICAgICAgIGZvcm1zW3BhcmFtc1swXV0uZm9ybXMucHVzaChsYXN0QWN0aW9uLmZvcm0pXHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBmb3Jtcy5wdXNoKGxhc3RBY3Rpb24uZm9ybSlcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmIChsYXN0QWN0aW9uLmxvY2F0aW9uID09PSAnY2F0ZWdvcnknKSB7XHJcbiAgICAgICAgICAgIHRoaXMub25BY3RpdmVNZW51KGZvcm1zW2Zvcm1zLmxlbmd0aCAtIDFdLCBmb3Jtcy5sZW5ndGggLSAxKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMub25FZGl0QmxvY2soZm9ybXNbZm9ybXMubGVuZ3RoIC0gMV0sIGxhc3RBY3Rpb24ucGFyYW1zKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBpZiAobGVuZ3RoID09PSAxICYmIGxhc3RBY3Rpb24ubG9jYXRpb24gPT09ICdjYXRlZ29yeScpIHtcclxuICAgICAgICAgICAgZm9ybXMuc3BsaWNlKHBhcmFtc1tsZW5ndGggLSAxXSwgMSlcclxuICAgICAgICAgIH0gZWxzZSBpZiAobGVuZ3RoID09PSAxICYmIGxhc3RBY3Rpb24ubG9jYXRpb24gPT09ICdmb3JtcycpIHtcclxuICAgICAgICAgICAgZm9ybXNbcGFyYW1zWzBdXS5mb3Jtcy5zcGxpY2UocGFyYW1zW2xlbmd0aCAtIDFdLCAxKVxyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZm9ybXMuc3BsaWNlKHBhcmFtc1tsZW5ndGggLSAxXSwgMSlcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICB0aGlzLmN1cnJlbnRFZGl0QmxvY2sgPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYgKHRoaXMuY3VycmVudENhbmNlbGVkSW5kZXggIT09IG51bGwgJiYgdGhpcy5oaXN0b3JpY3MubGVuZ3RoID4gdGhpcy5jdXJyZW50Q2FuY2VsZWRJbmRleCkge1xyXG4gICAgICAgIHRoaXMuY3VycmVudENhbmNlbGVkSW5kZXggKz0gMTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIvCfmoAgfiBmaWxlOiB0ZW1wbGF0ZS1wcm9maWxlLWNyZWF0ZS5jb21wb25lbnQudHMgfiBsaW5lIDE5MjAgfiBUZW1wbGF0ZVByb2ZpbGVDcmVhdGVDb21wb25lbnQgfiBvbkNhbmNlbCB+IHRoaXMuY3VycmVudENhbmNlbGVkSW5kZXhcIiwgdGhpcy5jdXJyZW50Q2FuY2VsZWRJbmRleClcclxuICAgICAgICBjb25zdCBsYXN0QWN0aW9uID0gdGhpcy5oaXN0b3JpY3NbdGhpcy5jdXJyZW50Q2FuY2VsZWRJbmRleF1cclxuICAgICAgICBjb25zb2xlLmxvZygnbGFzdEFjdGlvbiByaWdodCcsIGxhc3RBY3Rpb24pO1xyXG4gICAgICAgIGNvbnN0IHBhcmFtcyA9IGxhc3RBY3Rpb24ucGFyYW1zO1xyXG4gICAgICAgIGNvbnN0IGxlbmd0aCA9IHBhcmFtcy5sZW5ndGg7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2xlbmd0aCcsIGxlbmd0aCk7XHJcbiAgICAgICAgY29uc3QgZm9ybXMgPSBsZW5ndGggPT09IDEgPyB0aGlzLmNhdGVnb3JpZXMgOiBsZW5ndGggPT09IDIgPyB0aGlzLmNhdGVnb3JpZXNbcGFyYW1zWzBdXS5mb3Jtc1twYXJhbXNbMV1dLmZvcm1zIDogdGhpcy5jYXRlZ29yaWVzW3BhcmFtc1swXV0uZm9ybXNbcGFyYW1zWzFdXS5mb3Jtc1twYXJhbXNbMl1dLmZvcm1zO1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZygnZm9ybXMnLCBmb3Jtcyk7XHJcbiAgICAgICAgaWYgKGxhc3RBY3Rpb24ubWV0aG9kID09PSBcInB1c2hcIikge1xyXG4gICAgICAgICAgaWYgKGxlbmd0aCA9PT0gMSAmJiBsYXN0QWN0aW9uLmxvY2F0aW9uID09PSAnY2F0ZWdvcnknKSB7XHJcbiAgICAgICAgICAgIGZvcm1zLnB1c2gobGFzdEFjdGlvbi5mb3JtKVxyXG4gICAgICAgICAgfSBlbHNlIGlmIChsZW5ndGggPT09IDEgJiYgbGFzdEFjdGlvbi5sb2NhdGlvbiA9PT0gJ2Zvcm1zJykge1xyXG4gICAgICAgICAgICBmb3Jtc1twYXJhbXNbMF1dLmZvcm1zLnB1c2gobGFzdEFjdGlvbi5mb3JtKVxyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZm9ybXMucHVzaChsYXN0QWN0aW9uLmZvcm0pXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAobGFzdEFjdGlvbi5sb2NhdGlvbiA9PT0gJ2NhdGVnb3J5Jykge1xyXG4gICAgICAgICAgICB0aGlzLm9uQWN0aXZlTWVudShmb3Jtc1tmb3Jtcy5sZW5ndGggLSAxXSwgZm9ybXMubGVuZ3RoIC0gMSk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLm9uRWRpdEJsb2NrKGZvcm1zW2Zvcm1zLmxlbmd0aCAtIDFdLCBsYXN0QWN0aW9uLnBhcmFtcylcclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgaWYgKGxlbmd0aCA9PT0gMSAmJiBsYXN0QWN0aW9uLmxvY2F0aW9uID09PSAnY2F0ZWdvcnknKSB7XHJcbiAgICAgICAgICAgIGZvcm1zLnNwbGljZShwYXJhbXNbbGVuZ3RoIC0gMV0sIDEpXHJcbiAgICAgICAgICB9IGVsc2UgaWYgKGxlbmd0aCA9PT0gMSAmJiBsYXN0QWN0aW9uLmxvY2F0aW9uID09PSAnZm9ybXMnKSB7XHJcbiAgICAgICAgICAgIGZvcm1zW3BhcmFtc1swXV0uZm9ybXMuc3BsaWNlKHBhcmFtc1tsZW5ndGggLSAxXSwgMSlcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGZvcm1zLnNwbGljZShwYXJhbXNbbGVuZ3RoIC0gMV0sIDEpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB0aGlzLmN1cnJlbnRFZGl0QmxvY2sgPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25DaGVja1ZhbHVlKGV2ZW50OiBib29sZWFuKSB7XHJcbiAgICB0aGlzLmludmFsaWRlVmFsdWUgPSBldmVudDtcclxuICB9XHJcblxyXG4gIG9uSGlzdG9yaWNzKGRhdGEpIHtcclxuICAgIGlmICh0aGlzLmN1cnJlbnRDYW5jZWxlZEluZGV4ICE9PSBudWxsKSB7XHJcbiAgICAgIHRoaXMuaGlzdG9yaWNzID0gW107XHJcbiAgICAgIHRoaXMuY3VycmVudENhbmNlbGVkSW5kZXggPSBudWxsO1xyXG4gICAgfVxyXG4gICAgY29uc29sZS5sb2coZGF0YSk7XHJcblxyXG4gICAgdGhpcy5oaXN0b3JpY3MucHVzaChkYXRhKVxyXG4gIH1cclxufVxyXG5cclxuXHJcbiIsIjxtYWluPlxyXG4gIDxkaXYgY2xhc3M9XCJoZWFkZXItY3JlYXRlLXByb2ZpbGVcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJoZWFkZXItY3JlYXRlLXByb2ZpbGUtdG9wXCI+XHJcbiAgICAgIDxoMz5cclxuICAgICAgICA8c3Bhbj57eyB0aGlzLmZvcm0uZ2V0KFwiTmFtZVwiKS52YWx1ZSB9fTwvc3Bhbj5cclxuICAgICAgICA8bWF0LWljb24gKGNsaWNrKT1cIm9wZW5EaWFsb2coKVwiPmVkaXQ8L21hdC1pY29uPlxyXG4gICAgICA8L2gzPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY3JlYXRlLXByb2ZpbGUtYWN0aW9uXCI+XHJcbiAgICAgICAgPGJ1dHRvbiBtYXQtYnV0dG9uIGNsYXNzPVwicmVnaXN0ZXItYnV0dG9uXCIgdHlwZT1cInN1Ym1pdFwiIChjbGljayk9XCJvblN1Ym1pdChmYWxzZSlcIj5cclxuICAgICAgICAgIDxsaWItbG9hZGluZy1wYWdlICpuZ0lmPVwibG9hZGluZyAmJiAhaXNTdWJtaXR0ZWRcIj48L2xpYi1sb2FkaW5nLXBhZ2U+e3tkcmFmdExhYmVsfX1cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uIG1hdC1idXR0b24gY2xhc3M9XCJyZWdpc3Rlci1idXR0b24gbGl2ZS1idXR0b25cIiB0eXBlPVwic3VibWl0XCIgKGNsaWNrKT1cIm9uU3VibWl0KHRydWUpXCI+XHJcbiAgICAgICAgICA8bGliLWxvYWRpbmctcGFnZSAqbmdJZj1cImxvYWRpbmcgJiYgaXNTdWJtaXR0ZWRcIj48L2xpYi1sb2FkaW5nLXBhZ2U+XHJcbiAgICAgICAgICB7e2xpdmVMYWJlbH19XHJcbiAgICAgICAgPC9idXR0b24+XHJcblxyXG4gICAgICAgIDxidXR0b24gW2Rpc2FibGVkXT1cImN1cnJlbnRDYW5jZWxlZEluZGV4IDwgMCB8fCBoaXN0b3JpY3MubGVuZ3RoPT09MFwiIG1hdC1idXR0b25cclxuICAgICAgICAgIGNsYXNzPVwicmVnaXN0ZXItYnV0dG9uIGxpdmUtYnV0dG9uIGZvcndhcmRcIiB0eXBlPVwic3VibWl0XCIgKGNsaWNrKT1cIm9uQ2FuY2VsKHRydWUpXCI+XHJcbiAgICAgICAgICA8bWF0LWljb24+cm90YXRlX2xlZnQ8L21hdC1pY29uPlxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDxidXR0b24gW2Rpc2FibGVkXT1cImN1cnJlbnRDYW5jZWxlZEluZGV4PT09aGlzdG9yaWNzLmxlbmd0aC0xIHx8IGN1cnJlbnRDYW5jZWxlZEluZGV4PT09bnVsbFwiIG1hdC1idXR0b25cclxuICAgICAgICAgIGNsYXNzPVwicmVnaXN0ZXItYnV0dG9uIGxpdmUtYnV0dG9uIGZvcndhcmRcIiB0eXBlPVwic3VibWl0XCIgKGNsaWNrKT1cIm9uQ2FuY2VsKGZhbHNlKVwiPlxyXG4gICAgICAgICAgPG1hdC1pY29uPnJvdGF0ZV9yaWdodDwvbWF0LWljb24+XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY3JlYXRlLXByb2ZpbGUtbWVudXNcIj5cclxuICAgICAgPHVsPlxyXG4gICAgICAgIDxsaSBjbGFzcz1cImxpLXRpdGxlXCIgW2NsYXNzXT1cImVkaXRJbmRleCA9PT0gaSA/ICdhY3RpdmUnIDogJydcIiAqbmdGb3I9XCJsZXQgY2F0IG9mIGNhdGVnb3JpZXM7IGxldCBpID0gaW5kZXhcIlxyXG4gICAgICAgICAgKGNsaWNrKT1cIm9uQWN0aXZlTWVudShjYXQsIGkpXCIgW25neFNjcm9sbFRvXT1cIicjJyArIGNhdC5uYW1lXCIgW2lkXT1cImNhdC5uYW1lKyd4J1wiPlxyXG4gICAgICAgICAge3sgY2F0Lm5hbWUgfX1cclxuICAgICAgICA8L2xpPlxyXG4gICAgICAgIDxsaT5cclxuICAgICAgICAgIDxidXR0b24gbWF0LW1pbmktZmFiIGNvbG9yPVwidHJhbnNwYXJlbnRcIiAoY2xpY2spPVwib25BZGROZXdDYXRlZ29yeSgkZXZlbnQpXCI+XHJcbiAgICAgICAgICAgIDxtYXQtaWNvbj5hZGQ8L21hdC1pY29uPlxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgPC91bD5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gIDxmb3JtIFtmb3JtR3JvdXBdPVwiZm9ybVwiPlxyXG4gICAgPGRpdiBjbGFzcz1cImNhdGVnb3J5XCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZHNcIiBjZGtEcm9wTGlzdEdyb3VwPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZHMtaW5uZXIgZXhhbXBsZS1saXN0IG10LTEwXCIgaWQ9XCJjYXRlZ29yaWVzLWlkXCIgI3BhcmVudExpc3Q9XCJjZGtEcm9wTGlzdFwiIGNka0Ryb3BMaXN0XHJcbiAgICAgICAgICBbY2RrRHJvcExpc3REYXRhXT1cImNhdGVnb3JpZXNcIiAoY2RrRHJvcExpc3REcm9wcGVkKT1cImRyb3AoJGV2ZW50KVwiIChzY3JvbGwpPVwib25TY3JvbGwoJGV2ZW50KVwiPlxyXG4gICAgICAgICAgPHNlY3Rpb24gY2xhc3M9XCJjYXRlZ29yeS1pdGVtIHNlY3Rpb24taXRlbVwiICpuZ0Zvcj1cImxldCBjYXRlZ29yeSBvZiBjYXRlZ29yaWVzOyBsZXQgaSA9IGluZGV4XCIgY2RrRHJhZ1xyXG4gICAgICAgICAgICBbaWRdPVwiY2F0ZWdvcnkubmFtZVwiIFtzdHlsZS5wYWRkaW5nQm90dG9tXT1cImNhdGVnb3J5LmV4cGFuZE1vcmUgPyAnNTBweCcgOiAnMTBweCdcIlxyXG4gICAgICAgICAgICBbY2xhc3NdPVwiZWRpdEluZGV4ID09PSBpID8gJ2FjdGl2ZScgOiAnJ1wiIFtuZ3hTY3JvbGxUb109XCInIycgKyBjYXRlZ29yeS5uYW1lXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsZWZ0LWFjdGlvbiBtb3ZlLWljb25zXCIgY2RrRHJhZ0hhbmRsZT5cclxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwidHJhbnNwYXJlbnQtYnV0dG9uXCIgbWF0LXJhaXNlZC1idXR0b24gKGNsaWNrKT1cIiRldmVudC5wcmV2ZW50RGVmYXVsdCgpXCI+XHJcbiAgICAgICAgICAgICAgICA8bWF0LWljb24gY2xhc3M9XCJkcmFnLWljb25cIj5kcmFnX2luZGljYXRvcjwvbWF0LWljb24+XHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmllbGQtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZC1pdGVtXCIgKGNsaWNrKT1cIiBvbkV4cGVuZE1vcmUoeyBldmVudDogJGV2ZW50LCBmaWVsZDogY2F0ZWdvcnkgfSwgaSlcIj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiZnVsbC13aWR0aCBpbnB1dC1jYXRlZ29yeS1uYW1lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge3sgY2F0ZWdvcnkubmFtZSB9fVxyXG4gICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwic3ViLWNhdGVnb3J5LW5hbWVcIj5cclxuICAgICAgICAgICAgICAgICAgICBMaXN0ZXMgZGVzIGluZm9ybWF0aW9ucyBuw6ljZXNzYWlyZXMgcG91ciBsYSBjcsOpYXRpb24gZGUge3sgY2F0TmFtZVN0YXJ0KGNhdGVnb3J5Lm5hbWUpID8gXCJsJ1wiICtcclxuICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeS5uYW1lIDogY2F0ZWdvcnkubmFtZSB9fVxyXG4gICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gbWF0LW1pbmktZmFiIGNvbG9yPVwicHJpbWFyeVwiIGNsYXNzPVwiZXhwYW5kLWJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgIChjbGljayk9XCJvbkV4cGVuZE1vcmUoeyBldmVudDogJGV2ZW50LCBmaWVsZDogY2F0ZWdvcnkgfSwgaSlcIj5cclxuICAgICAgICAgICAgICAgICAgPG1hdC1pY29uICpuZ0lmPVwiIWNhdGVnb3J5LmV4cGFuZE1vcmVcIj5jaGV2cm9uX3JpZ2h0PC9tYXQtaWNvbj5cclxuICAgICAgICAgICAgICAgICAgPG1hdC1pY29uICpuZ0lmPVwiY2F0ZWdvcnkuZXhwYW5kTW9yZVwiPmV4cGFuZF9tb3JlPC9tYXQtaWNvbj5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgI2NoaWxkTGlzdD1cImNka0Ryb3BMaXN0XCIgY2xhc3M9XCJjaGlsZC1saXN0XCIgKm5nSWY9XCJjYXRlZ29yeS5mb3Jtc1wiIFtjZGtEcm9wTGlzdERhdGFdPVwiY2F0ZWdvcnkuZm9ybXNcIlxyXG4gICAgICAgICAgICAgICAgY2RrRHJvcExpc3QgKGNka0Ryb3BMaXN0RHJvcHBlZCk9XCJkcm9wKCRldmVudClcIj5cclxuICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJjYXRlZ29yeS5leHBhbmRNb3JlXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZC1ib3hcIiAqbmdGb3I9XCJsZXQgZmllbGQgb2YgY2F0ZWdvcnkuZm9ybXM7IGxldCBqID0gaW5kZXhcIiBbaWRdPVwiZmllbGQua2V5XCJcclxuICAgICAgICAgICAgICAgICAgICBbc3R5bGUud2lkdGhdPVwiZmllbGQuZm9ybXMgJiYgZmllbGQuZm9ybXMubGVuZ3RoPjAgPyAnMTAwJScgOiBmaWVsZFdpZHRoKGZpZWxkLnR5cGUsY2F0ZWdvcnkuZm9ybXMubGVuZ3RoLGopXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjZGtEcmFnPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCIgZmllbGRzLWNvbnRlbnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbY2xhc3NdPVwiZmllbGQuZm9ybXMgJiYgZmllbGQuZm9ybXMubGVuZ3RoPjAgPyAnc3ViLWNhdGVnb3J5LWZvcm1zJyA6JydcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJ1dHRvbi1hY3Rpb25cIiAqbmdJZj1cImZpZWxkLmZvcm1zXCI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJ0cmFuc3BhcmVudC1idXR0b25cIiBtYXQtcmFpc2VkLWJ1dHRvbiAoY2xpY2spPVwiJGV2ZW50LnByZXZlbnREZWZhdWx0KClcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxtYXQtaWNvbiBjbGFzcz1cImRyYWctaWNvblwiPmRyYWdfaW5kaWNhdG9yPC9tYXQtaWNvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZHMtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInN1Yi1oZWFkZXJcIiAqbmdJZj1cImZpZWxkLmZvcm1zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmllbGQtaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiZnVsbC13aWR0aCBpbnB1dC1jYXRlZ29yeS1uYW1lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBmaWVsZC5sYWJlbCB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInN1Yi1jYXRlZ29yeS1uYW1lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBMaXN0ZXMgZGVzIGluZm9ybWF0aW9ucyBuw6ljZXNzYWlyZXMgcG91ciBsYSBjcsOpYXRpb24gZGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IGNhdE5hbWVTdGFydChmaWVsZC5sYWJlbCkgPyBcImwnXCIgKyBmaWVsZC5sYWJlbCA6IGZpZWxkLmxhYmVsIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInRyYW5zcGFyZW50LWJ1dHRvbiBzZXR0aW5nXCIgbWF0LXJhaXNlZC1idXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwiJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7b25FZGl0QmxvY2soZmllbGQsIGksIGopXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG1hdC1pY29uIGNsYXNzPVwic2V0dGluZy1pY29uXCI+c2V0dGluZ3M8L21hdC1pY29uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImV4cGFuZC1idXR0b25cIiBbZGlzYWJsZWRdPVwiIShmaWVsZC5mb3JtcyAmJiBmaWVsZC5mb3Jtcy5sZW5ndGggPiAwKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3N0eWxlLm9wYWNpdHldPVwiZmllbGQuZm9ybXMgJiYgZmllbGQuZm9ybXMubGVuZ3RoID4gMCA/IDEgOiAwXCIgbWF0LW1pbmktZmFiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCIgKGNsaWNrKT1cIm9uRXhwZW5kTW9yZSh7IGV2ZW50OiAkZXZlbnQsIGZpZWxkOiBmaWVsZCB9LCBpLCBqKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxtYXQtaWNvbiAqbmdJZj1cIiFmaWVsZC5leHBhbmRNb3JlXCI+ZXhwYW5kX2xlc3MgPC9tYXQtaWNvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bWF0LWljb24gKm5nSWY9XCJmaWVsZC5leHBhbmRNb3JlXCI+ZXhwYW5kX21vcmUgPC9tYXQtaWNvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGliLXN1Yi1jYXRlZ29yeSBbZmllbGRdPVwiZmllbGRcIiBbbGVuZ3RoXT1cImNhdGVnb3J5Py5mb3Jtcz8ubGVuZ3RoXCIgW2ldPVwiaVwiIFtqXT1cImpcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW2JsaW5rXT1cImNoZWNrQmxpbmsoaiwxKT09PW5ld0ZpZWxkSW5kZXhcIiAob25DaGVja1ZhbHVlKT1cIm9uQ2hlY2tWYWx1ZSgkZXZlbnQpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChvbkFkZEtleXdvcmRGcm9tSW5wdXQpPVwiYWRkS2V5d29yZEZyb21JbnB1dCgkZXZlbnQuZXZlbnQsICRldmVudC5wcmV2LCBpLCBqKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAob25LZXlQcmVzcyk9XCJvbktleVByZXNzKCRldmVudC5ldmVudCwgaSwgailcIiAob25BZGROZXdGaWVsZCk9XCJvbkFkZE5ld0ZpZWxkKGkpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChvblJlbW92ZUZpZWxkKT1cIm9uUmVtb3ZlRmllbGQoaSwgailcIiAob25DaGFuZ2VUeXBlKT1cIm9uQ2hhbmdlVHlwZShmaWVsZC50eXBlLCBpLCBqKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAob25SZW1vdmVLZXl3b3JkKT1cInJlbW92ZUtleXdvcmQoJGV2ZW50LmV2ZW50LCBpLCBqKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAob25BZGROZXdTdWJMZXZlbEZpZWxkKT1cIm9uQWRkTmV3U3ViTGV2ZWxGaWVsZChpLCBqKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAob25FeHBlbmRNb3JlKT1cIm9uRXhwZW5kTW9yZSgkZXZlbnQsIGksIGopXCIgKG9uQ2hhbmdlTGFiZWwpPVwib25DaGFuZ2VMYWJlbCgkZXZlbnQsIGksIGopXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChvbkNoZWNrZWRDaGlwKT1cIm9uQ2hlY2tlZENoaXAoJGV2ZW50LCBpLCBqKVwiIChvbkRyb3ApPVwiZHJvcCgkZXZlbnQpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChvbkNoZWNrZWREZWZhdWx0KT1cIm9uQ2hlY2tlZERlZmF1bHQoJGV2ZW50LCBpLCBqKVwiIChvbkVkaXRCbG9jayk9XCJvbkVkaXRCbG9jayhmaWVsZCwgaSwgailcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW2NvbmRpdGlvbkRhdGFdPVwiY29uZGl0aW9uRGF0YVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiAqbmdJZj1cImZpZWxkLmV4cGFuZE1vcmVcIiBjbGFzcz1cImNoaWxkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgI2NoaWxkTGlzdD1cImNka0Ryb3BMaXN0XCIgY2xhc3M9XCJjaGlsZC1jb250ZW50XCIgKm5nSWY9XCJmaWVsZC5mb3Jtc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2Nka0Ryb3BMaXN0RGF0YV09XCJmaWVsZC5mb3Jtc1wiIGNka0Ryb3BMaXN0IChjZGtEcm9wTGlzdERyb3BwZWQpPVwiZHJvcCgkZXZlbnQpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIlwiIHN0eWxlPVwibWFyZ2luLWJvdHRvbTogMjBweFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqbmdGb3I9XCJsZXQgY2hpbGQgb2YgZmllbGQuZm9ybXM7IGxldCBrID0gaW5kZXhcIiBbaWRdPVwiY2hpbGQua2V5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtzdHlsZS53aWR0aF09XCJjaGlsZC5mb3JtcyAmJiBjaGlsZC5mb3Jtcy5sZW5ndGg+MCA/ICcxMDAlJyA6IGZpZWxkV2lkdGgoY2hpbGQudHlwZSxmaWVsZC5mb3Jtcy5sZW5ndGgsaylcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2RrRHJhZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpZWxkcy1jb250ZW50XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbY2xhc3NdPVwiY2hpbGQuZm9ybXMgJiYgY2hpbGQuZm9ybXMubGVuZ3RoPjAgPyAnc3ViLWNhdGVnb3J5LWZvcm1zJyA6JydcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYnV0dG9uLWFjdGlvbiBjaGlsZC0yLWJhY2tncm91bmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJjaGlsZC5mb3JtcyAmJiBjaGlsZC5mb3Jtcy5sZW5ndGg+MFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInRyYW5zcGFyZW50LWJ1dHRvblwiIG1hdC1yYWlzZWQtYnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjbGljayk9XCIkZXZlbnQucHJldmVudERlZmF1bHQoKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bWF0LWljb24gY2xhc3M9XCJkcmFnLWljb25cIj4gZHJhZ19pbmRpY2F0b3I8L21hdC1pY29uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpZWxkcy1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdWItaGVhZGVyXCIgKm5nSWY9XCJjaGlsZC5mb3JtcyAmJiBjaGlsZC5mb3Jtcy5sZW5ndGg+MFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmllbGQtaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJmdWxsLXdpZHRoIGlucHV0LWNhdGVnb3J5LW5hbWVcIiB0eXBlPVwidGV4dFwiIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtyZWFkb25seV09XCJjYXRlZ29yaWVzLmxlbmd0aCA8IDQgfHwgIWNhdGVnb3J5LmVkaXRhYmxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3JlYWRvbmx5XT1cIiFjYXRlZ29yeS5lZGl0YWJsZVwiIFsobmdNb2RlbCldPVwiY2hpbGQubGFiZWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbbmdNb2RlbE9wdGlvbnNdPVwieyBzdGFuZGFsb25lOiB0cnVlIH1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNhaXNpciBsZSBub20gZGUgbGEgc291cyBjYXTDqWdvcmllXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwic3ViLWNhdGVnb3J5LW5hbWVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTGlzdGVzIGRlcyBpbmZvcm1hdGlvbnMgbsOpY2Vzc2FpcmVzIHBvdXIgbGEgY3LDqWF0aW9uIGRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IGNhdE5hbWVTdGFydChjaGlsZC5sYWJlbCkgPyBcImwnXCIgKyBjaGlsZC5sYWJlbCA6IGNoaWxkLmxhYmVsIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInRyYW5zcGFyZW50LWJ1dHRvbiBzZXR0aW5nXCIgbWF0LXJhaXNlZC1idXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjbGljayk9XCIkZXZlbnQucHJldmVudERlZmF1bHQoKTtvbkVkaXRCbG9jayhjaGlsZCwgaSwgaiwgaylcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxtYXQtaWNvbiBjbGFzcz1cInNldHRpbmctaWNvblwiPnNldHRpbmdzPC9tYXQtaWNvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiZXhwYW5kLWJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbZGlzYWJsZWRdPVwiIShjaGlsZC5mb3JtcyAmJiBjaGlsZC5mb3Jtcy5sZW5ndGggPiAwKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbc3R5bGUub3BhY2l0eV09XCJjaGlsZC5mb3JtcyAmJiBjaGlsZC5mb3Jtcy5sZW5ndGggPiAwID8gMSA6IDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF0LW1pbmktZmFiIGNvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwib25FeHBlbmRNb3JlKHsgZXZlbnQ6ICRldmVudCwgZmllbGQ6IGNoaWxkIH0sIGksIGosIGspXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bWF0LWljb24gKm5nSWY9XCIhY2hpbGQuZXhwYW5kTW9yZVwiPiBleHBhbmRfbGVzcyA8L21hdC1pY29uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG1hdC1pY29uICpuZ0lmPVwiY2hpbGQuZXhwYW5kTW9yZVwiPiBleHBhbmRfbW9yZSA8L21hdC1pY29uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpYi1zdWItY2F0ZWdvcnkgW2ZpZWxkXT1cImNoaWxkXCIgW2xlbmd0aF09XCJmaWVsZD8uZm9ybXM/Lmxlbmd0aFwiIFtpXT1cImpcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbYmxpbmtdPVwiY2hlY2tCbGluayhrLDIpPT09bmV3RmllbGRJbmRleFwiIFtqXT1cImtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAob25DaGVja1ZhbHVlKT1cIm9uQ2hlY2tWYWx1ZSgkZXZlbnQpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKG9uQWRkS2V5d29yZEZyb21JbnB1dCk9XCJhZGRLZXl3b3JkRnJvbUlucHV0KCRldmVudC5ldmVudCwgJGV2ZW50LnByZXYsIGksIGosIGspXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKG9uS2V5UHJlc3MpPVwib25LZXlQcmVzcygkZXZlbnQuZXZlbnQsIGksIGosIGspXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKG9uQWRkTmV3RmllbGQpPVwib25BZGROZXdGaWVsZChpLCBqKVwiIChvblJlbW92ZUZpZWxkKT1cIm9uUmVtb3ZlRmllbGQoaSwgaiwgaylcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAob25DaGFuZ2VUeXBlKT1cIm9uQ2hhbmdlVHlwZShjaGlsZC50eXBlLCBpLCBqLCBrKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChvblJlbW92ZUtleXdvcmQpPVwicmVtb3ZlS2V5d29yZCgkZXZlbnQuZXZlbnQsIGksIGosIGspXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKG9uQWRkTmV3U3ViTGV2ZWxGaWVsZCk9XCJvbkFkZE5ld1N1YkxldmVsRmllbGQoaSwgaiwgaylcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAob25FeHBlbmRNb3JlKT1cIm9uRXhwZW5kTW9yZSgkZXZlbnQsIGksIGosIGspXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKG9uQ2hhbmdlTGFiZWwpPVwib25DaGFuZ2VMYWJlbCgkZXZlbnQsIGksIGosIGspXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKG9uQ2hlY2tlZENoaXApPVwib25DaGVja2VkQ2hpcCgkZXZlbnQsIGksIGosIGspXCIgKG9uRHJvcCk9XCJkcm9wKCRldmVudClcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAob25DaGVja2VkRGVmYXVsdCk9XCJvbkNoZWNrZWREZWZhdWx0KCRldmVudCwgaSwgaiwgaylcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbY29uZGl0aW9uRGF0YV09XCJjb25kaXRpb25EYXRhXCIgKG9uRWRpdEJsb2NrKT1cIm9uRWRpdEJsb2NrKGNoaWxkLCBpLCBqLCBrKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2ICpuZ0lmPVwiY2hpbGQuZXhwYW5kTW9yZVwiIGNsYXNzPVwiY2hpbGRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2hpbGQtY29udGVudFwiICNjaGlsZExpc3Q9XCJjZGtEcm9wTGlzdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqbmdJZj1cImNoaWxkLmZvcm1zICYmIGNoaWxkLmZvcm1zLmxlbmd0aD4wXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtjZGtEcm9wTGlzdERhdGFdPVwiY2hpbGQuZm9ybXNcIiBjZGtEcm9wTGlzdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGNka0Ryb3BMaXN0RHJvcHBlZCk9XCJkcm9wKCRldmVudClcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJcIiAqbmdGb3I9XCJsZXQgYzIgb2YgY2hpbGQuZm9ybXM7IGxldCBsID0gaW5kZXhcIiBbaWRdPVwiYzIua2V5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3N0eWxlLndpZHRoXT1cImMyLmZvcm1zICYmIGMyLmZvcm1zLmxlbmd0aD4wID8gJzEwMCUnIDogZmllbGRXaWR0aChjMi50eXBlLGNoaWxkLmZvcm1zLmxlbmd0aCxsKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNka0RyYWc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpZWxkcy1jb250ZW50XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtjbGFzc109XCJjMi5mb3JtcyAmJiBjMi5mb3Jtcy5sZW5ndGg+MCA/ICdzdWItY2F0ZWdvcnktZm9ybXMnIDonJ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJ1dHRvbi1hY3Rpb24gY2hpbGQtMy1iYWNrZ3JvdW5kXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJjMi5mb3JtcyAmJiBjMi5mb3Jtcy5sZW5ndGg+MFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwidHJhbnNwYXJlbnQtYnV0dG9uXCIgbWF0LXJhaXNlZC1idXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwiJGV2ZW50LnByZXZlbnREZWZhdWx0KClcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bWF0LWljb24gY2xhc3M9XCJkcmFnLWljb25cIj4gZHJhZ19pbmRpY2F0b3IgPC9tYXQtaWNvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZHMtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaWItc3ViLWNhdGVnb3J5IFtmaWVsZF09XCJjMlwiIFtsZW5ndGhdPVwiY2hpbGQ/LmZvcm1zPy5sZW5ndGhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtibGlua109XCJjaGVja0JsaW5rKGwsMyk9PT1uZXdGaWVsZEluZGV4XCIgW2ldPVwia1wiIFtqXT1cImxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChvbkNoZWNrVmFsdWUpPVwib25DaGVja1ZhbHVlKCRldmVudClcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChvbkFkZEtleXdvcmRGcm9tSW5wdXQpPVwiYWRkS2V5d29yZEZyb21JbnB1dCgkZXZlbnQuZXZlbnQsICRldmVudC5wcmV2LCBpLCBqLCBrLCBsKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKG9uS2V5UHJlc3MpPVwib25LZXlQcmVzcygkZXZlbnQuZXZlbnQsIGksIGosIGssIGwpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAob25BZGROZXdGaWVsZCk9XCJvbkFkZE5ld0ZpZWxkKGksIGosIGspXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAob25SZW1vdmVGaWVsZCk9XCJvblJlbW92ZUZpZWxkKGksIGosIGssIGwpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAob25DaGFuZ2VUeXBlKT1cIm9uQ2hhbmdlVHlwZShjMi50eXBlLCBpLCBqLCBrLCBsKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKG9uUmVtb3ZlS2V5d29yZCk9XCJyZW1vdmVLZXl3b3JkKCRldmVudC5ldmVudCwgaSwgaiwgaywgbClcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChvbkFkZE5ld1N1YkxldmVsRmllbGQpPVwib25BZGROZXdTdWJMZXZlbEZpZWxkKGksIGosIGssIGwpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAob25FeHBlbmRNb3JlKT1cIm9uRXhwZW5kTW9yZSgkZXZlbnQsIGksIGosIGssIGwpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAob25DaGFuZ2VMYWJlbCk9XCJvbkNoYW5nZUxhYmVsKCRldmVudCwgaSwgaiwgaywgbClcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChvbkNoZWNrZWRDaGlwKT1cIm9uQ2hlY2tlZENoaXAoJGV2ZW50LCBpLCBqLCBrLCBsKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKG9uRHJvcCk9XCJkcm9wKCRldmVudClcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChvbkNoZWNrZWREZWZhdWx0KT1cIm9uQ2hlY2tlZERlZmF1bHQoJGV2ZW50LCBpLCBqLCBrLCBsKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKG9uRWRpdEJsb2NrKT1cIm9uRWRpdEJsb2NrKGMyLCBpLCBqLCBrLCBsKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2NvbmRpdGlvbkRhdGFdPVwiY29uZGl0aW9uRGF0YVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjaGlsZFwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpYi1zdWItY2F0ZWdvcnk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhZGQtYnV0dG9uLXN1Yi1jYXRlZ29yeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJjaGlsZD8uZm9ybXM/Lmxlbmd0aCAtIDEgPT09IGxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHN0eWxlPVwibWFyZ2luOiAxMHB4IGF1dG9cIiBtYXQtcmFpc2VkLWJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cIm9uQWRkTmV3RmllbGQoaSwgaiwgaylcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPkFqb3V0ZXIgdW4gY2hhbXA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bWF0LWljb24+IGFkZCA8L21hdC1pY29uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGliLXN1Yi1jYXRlZ29yeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhZGQtYnV0dG9uLXN1Yi1jYXRlZ29yeVwiICpuZ0lmPVwiZmllbGQ/LmZvcm1zPy5sZW5ndGggLSAxID09PSBrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gc3R5bGU9XCJtYXJnaW46IDEwcHggYXV0b1wiIG1hdC1yYWlzZWQtYnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cIm9uQWRkTmV3RmllbGQoaSwgailcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5Bam91dGVyIHVuIGNoYW1wPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxtYXQtaWNvbj5hZGQ8L21hdC1pY29uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGliLXN1Yi1jYXRlZ29yeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYWRkLWJ1dHRvbi1jb250YWluZXIgYWRkLWJ1dHRvbi1zdWItY2F0ZWdvcnlcIiAqbmdJZj1cImNhdGVnb3J5Py5mb3Jtcz8ubGVuZ3RoIC0gMSA9PT0galwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBzdHlsZT1cIm1hcmdpbjogMTBweCBhdXRvOyBwYWRkaW5nOjEwcHggMFwiIGNsYXNzPVwiYWRkLWJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtkaXNhYmxlZF09XCJjYXRlZ29yeT8uZm9ybXM/Lmxlbmd0aCAtIDEgIT09IGpcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbc3R5bGUub3BhY2l0eV09XCJjYXRlZ29yeT8uZm9ybXM/Lmxlbmd0aCAtIDEgPT09IGogPyAxIDogMFwiIG1hdC1yYWlzZWQtYnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJvbkFkZE5ld0ZpZWxkKGkpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPkFqb3V0ZXIgdW4gY2hhbXA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxtYXQtaWNvbj5hZGQ8L21hdC1pY29uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9zZWN0aW9uPlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJhZGQtYnV0dG9uLWNvbnRhaW5lciBhZGQtY2F0ZWdvcnktYnV0dG9uIGFkZC1zdGVwXCI+XHJcbiAgICAgICAgICAgIDxidXR0b24gKGNsaWNrKT1cIm9uQWRkTmV3Q2F0ZWdvcnkoJGV2ZW50KVwiPlxyXG4gICAgICAgICAgICAgIEFqb3V0ZXIgdW5lIMOpdGFwZVxyXG4gICAgICAgICAgICAgIDxtYXQtaWNvbj5hZGQ8L21hdC1pY29uPlxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPHNlY3Rpb24gc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudFwiPlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPVwiaGVpZ2h0OiA0MDBweDtcIj48L2Rpdj5cclxuICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZC1wcm9wZXJ0eVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJwcm9wZXJ0eS1jb250ZW50XCIgKm5nSWY9XCJpc0Jsb2NrICYmIGN1cnJlbnRFZGl0QmxvY2tcIj5cclxuICAgICAgICAgIDxoMz5QYXJhbcOodHJlIGR1IGJsb2Mge3sgY3VycmVudEVkaXRCbG9jay5sYWJlbCB9fTwvaDM+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJvcGVydHktY29udGVudC1pbm5lclwiIHN0eWxlPVwid2lkdGg6IDEwMCU7XCI+XHJcbiAgICAgICAgICAgIDxtYXQtZm9ybS1maWVsZCBjbGFzcz1cImZvcm0tZmllbGQgbWF0LXNlbGVjdCBmdWxsLXdpZHRoXCIgc3R5bGU9XCJjdXJzb3I6IHBvaW50ZXJcIiBhcHBlYXJhbmNlPVwib3V0bGluZVwiPlxyXG4gICAgICAgICAgICAgIDxtYXQtbGFiZWw+VHlwZSBkZSBibG9jPC9tYXQtbGFiZWw+XHJcbiAgICAgICAgICAgICAgPG1hdC1zZWxlY3QgKGNsaWNrKT1cIm9uT3BlblR5cGVEaWFsb2coY3VycmVudEVkaXRCbG9jaylcIiBkaXNhYmxlZD1cInRydWVcIiByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJjdXJyZW50RWRpdEJsb2NrLnR5cGVcIiAobmdNb2RlbENoYW5nZSk9XCJvbkNoYW5nZVR5cGVCbG9jayhjdXJyZW50RWRpdEJsb2NrKVwiXHJcbiAgICAgICAgICAgICAgICBbbmdNb2RlbE9wdGlvbnNdPVwieyBzdGFuZGFsb25lOiB0cnVlIH1cIiBjbGFzcz1cInNlbGVjdC10eXBlLWNsYXNzXCI+XHJcbiAgICAgICAgICAgICAgICA8bWF0LW9wdGlvbiB2YWx1ZT1cInRleHRcIj5UZXh0KDgwKTwvbWF0LW9wdGlvbj5cclxuICAgICAgICAgICAgICAgIDxtYXQtb3B0aW9uIHZhbHVlPVwidGV4dGFyZWFcIj5UZXh0KDgwKyk8L21hdC1vcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8bWF0LW9wdGlvbiB2YWx1ZT1cInJhZGlvXCI+UmFkaW88L21hdC1vcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8bWF0LW9wdGlvbiB2YWx1ZT1cInNlbGVjdFwiPlNlbGVjdGV1cjwvbWF0LW9wdGlvbj5cclxuICAgICAgICAgICAgICAgIDxtYXQtb3B0aW9uIHZhbHVlPVwidG9nZ2xlXCI+VG9nZ2xlPC9tYXQtb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgPG1hdC1vcHRpb24gdmFsdWU9XCJjaGVja2JveFwiPkNoZWNrYm94PC9tYXQtb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgPG1hdC1vcHRpb24gdmFsdWU9XCJjaGVja2JveF9tdWx0aXBsZVwiPkNoZWNrYm94IG11bHRpcGxlPC9tYXQtb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgPG1hdC1vcHRpb24gdmFsdWU9XCJlbWFpbFwiPkVtYWlsPC9tYXQtb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgPG1hdC1vcHRpb24gdmFsdWU9XCJwYXNzd29yZFwiPlBhc3N3b3JkPC9tYXQtb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgPG1hdC1vcHRpb24gdmFsdWU9XCJkYXRlXCI+RGF0ZTwvbWF0LW9wdGlvbj5cclxuICAgICAgICAgICAgICAgIDxtYXQtb3B0aW9uIHZhbHVlPVwidGVsXCI+UGhvbmU8L21hdC1vcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8bWF0LW9wdGlvbiB2YWx1ZT1cIm5vbmVcIj5BdWN1bjwvbWF0LW9wdGlvbj5cclxuICAgICAgICAgICAgICA8L21hdC1zZWxlY3Q+XHJcbiAgICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJjdXJyZW50RWRpdEJsb2NrLnR5cGUhPT0nbm9uZSdcIj5cclxuICAgICAgICAgICAgICA8bWF0LWZvcm0tZmllbGQgY2xhc3M9XCJmb3JtLWZpZWxkIGZ1bGwtd2lkdGhcIiBhcHBlYXJhbmNlPVwib3V0bGluZVwiPlxyXG4gICAgICAgICAgICAgICAgPG1hdC1sYWJlbD5Ob20gLyBMYWJlbDwvbWF0LWxhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgWyhuZ01vZGVsKV09XCJjdXJyZW50RWRpdEJsb2NrLmxhYmVsXCIgW25nTW9kZWxPcHRpb25zXT1cInsgc3RhbmRhbG9uZTogdHJ1ZSB9XCIgbWF0SW5wdXRcclxuICAgICAgICAgICAgICAgICAgcmVxdWlyZWQgcGxhY2Vob2xkZXI9XCJcIiAvPlxyXG4gICAgICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciBbbmdTd2l0Y2hdPVwiY3VycmVudEVkaXRCbG9jay50eXBlXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2ICpuZ1N3aXRjaENhc2U9XCIndG9nZ2xlJ1wiIGNsYXNzPVwiZmxleC1hdXRvXCJcclxuICAgICAgICAgICAgICAgICAgc3R5bGU9XCJkaXNwbGF5OiBmbGV4O2FsaWduLWl0ZW1zOiBmbGV4LWVuZDttYXJnaW46IDEwcHggMDtcIj5cclxuICAgICAgICAgICAgICAgICAgPG1hdC1zbGlkZS10b2dnbGUgY2xhc3M9XCJmb3JtLWZpZWxkXCIgY29sb3I9XCIjNkZFOEQ3XCIgWyhuZ01vZGVsKV09XCJjdXJyZW50RWRpdEJsb2NrLmRlZmF1bHRWYWx1ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgW25nTW9kZWxPcHRpb25zXT1cInsgc3RhbmRhbG9uZTogdHJ1ZSB9XCI+XHJcbiAgICAgICAgICAgICAgICAgIDwvbWF0LXNsaWRlLXRvZ2dsZT5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9XCJtYXJnaW4tbGVmdDogMTBweDtcIj5WYWxldXIgcGFyIGTDqWZhdXQ8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgKm5nU3dpdGNoQ2FzZT1cIidjaGVja2JveCdcIiBjbGFzcz1cImZsZXgtYXV0b1wiPlxyXG4gICAgICAgICAgICAgICAgICA8bWF0LWNoZWNrYm94IGNsYXNzPVwiZm9ybS1maWVsZFwiIFsobmdNb2RlbCldPVwiY3VycmVudEVkaXRCbG9jay52YWx1ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgW25nTW9kZWxPcHRpb25zXT1cInsgc3RhbmRhbG9uZTogdHJ1ZSB9XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgQ29jaMOpIHBhciBkw6lmYXVsdFxyXG4gICAgICAgICAgICAgICAgICA8L21hdC1jaGVja2JveD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPG1hdC1mb3JtLWZpZWxkICpuZ1N3aXRjaENhc2U9XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbJ3NlbGVjdCcsICdyYWRpbycsICdjaGVja2JveF9tdWx0aXBsZSddLmluY2x1ZGVzKGN1cnJlbnRFZGl0QmxvY2sudHlwZSkgPyBjdXJyZW50RWRpdEJsb2NrLnR5cGUgOiAhY3VycmVudEVkaXRCbG9jay50eXBlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiIGNsYXNzPVwiZmxleC1hdXRvIGZ1bGwtd2lkdGhcIiBhcHBlYXJhbmNlPVwib3V0bGluZVwiPlxyXG4gICAgICAgICAgICAgICAgICA8bWF0LWxhYmVsPiBWYWxldXIgcGFyIGTDqWZhdWx0IDwvbWF0LWxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICA8bWF0LWNoaXAtbGlzdCAjY2hpbGRMaXN0PVwiY2RrRHJvcExpc3RcIiBbY2RrRHJvcExpc3REYXRhXT1cImN1cnJlbnRFZGl0QmxvY2suZGVmYXVsdFZhbHVlXCIgY2RrRHJvcExpc3RcclxuICAgICAgICAgICAgICAgICAgICAoY2RrRHJvcExpc3REcm9wcGVkKT1cImRyb3AoJGV2ZW50KVwiICNjaGlwTGlzdCBhcmlhLWxhYmVsPVwiVmlkZW8ga2V5d29yZHM7IGxldCBpbmRleD1pbmRleFwiIG11bHRpcGxlXHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0YWJsZT5cclxuICAgICAgICAgICAgICAgICAgICA8bWF0LWNoaXAgc3R5bGU9XCJtaW4taGVpZ2h0OiAyNXB4O3dpZHRoOiBhdXRvO1wiICpuZ0Zvcj1cImxldCBvcHRpb24gb2YgY3VycmVudEVkaXRCbG9jay5kZWZhdWx0VmFsdWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgW3NlbGVjdGVkXT1cIm9wdGlvbi5jaGVja2VkXCIgW3ZhbHVlXT1cIm9wdGlvbi52YWx1ZVwiIFtyZW1vdmFibGVdPVwidHJ1ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAoZGJsY2xpY2spPVwib25DaGVja2VkQ2hpcEJsb2NrKG9wdGlvbiwgY3VycmVudEVkaXRCbG9jaylcIiAoY2xpY2spPVwib25FZGl0Q2hpcChvcHRpb24pXCJcclxuICAgICAgICAgICAgICAgICAgICAgIChyZW1vdmVkKT1cInJlbW92ZUtleXdvcmRCbG9jayhvcHRpb24sIGN1cnJlbnRFZGl0QmxvY2spXCIgY2RrRHJhZz5cclxuICAgICAgICAgICAgICAgICAgICAgIHt7IG9wdGlvbi52YWx1ZSB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgPG1hdC1pY29uIG1hdENoaXBSZW1vdmU+Y2FuY2VsPC9tYXQtaWNvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L21hdC1jaGlwPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCAjY2hpcHNJbnB1dCBwbGFjZWhvbGRlcj1cImFkZC4uLlwiIFttYXRDaGlwSW5wdXRGb3JdPVwiY2hpcExpc3RcIiBbbWF0Q2hpcElucHV0QWRkT25CbHVyXT1cInRydWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgKG1hdENoaXBJbnB1dFRva2VuRW5kKT1cImFkZEtleXdvcmRGcm9tSW5wdXRCbG9jaygkZXZlbnQsIGN1cnJlbnRFZGl0QmxvY2ssIHByZXZWYWx1ZSlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgW21hdENoaXBJbnB1dFNlcGFyYXRvcktleUNvZGVzXT1cInNlcGFyYXRvcktleXNDb2Rlc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAoa2V5dXApPVwib25LZXlVcENoaXAoJGV2ZW50LCBjdXJyZW50RWRpdEJsb2NrKVwiIFsobmdNb2RlbCldPVwiY3VycmVudENoaXBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgW25nTW9kZWxPcHRpb25zXT1cInsgc3RhbmRhbG9uZTogdHJ1ZSB9XCIgLz5cclxuICAgICAgICAgICAgICAgICAgPC9tYXQtY2hpcC1saXN0PlxyXG4gICAgICAgICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgICAgICAgICAgICAgIDxtYXQtZm9ybS1maWVsZCAqbmdTd2l0Y2hDYXNlPVwiJ3RleHRhcmVhJ1wiIGNsYXNzPVwiZm9ybS1maWVsZCBmdWxsLXdpZHRoXCIgYXBwZWFyYW5jZT1cIm91dGxpbmVcIj5cclxuICAgICAgICAgICAgICAgICAgPG1hdC1sYWJlbD5WYWxldXIgcGFyIGTDqWZhdWx0PC9tYXQtbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG1hdElucHV0IFtuZ01vZGVsT3B0aW9uc109XCJ7IHN0YW5kYWxvbmU6IHRydWUgfVwiXHJcbiAgICAgICAgICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJjdXJyZW50RWRpdEJsb2NrLmRlZmF1bHRWYWx1ZVwiIHBsYWNlaG9sZGVyPVwiRGVzY3JpcHRpb24uLi5cIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuXHJcbiAgICAgICAgICAgICAgICA8bWF0LWZvcm0tZmllbGQgKm5nU3dpdGNoRGVmYXVsdCBjbGFzcz1cImZvcm0tZmllbGQgZnVsbC13aWR0aFwiXHJcbiAgICAgICAgICAgICAgICAgIFtzdHlsZS5vcGFjaXR5XT1cImN1cnJlbnRFZGl0QmxvY2sudHlwZSAhPT0gJ3RlbCcgPyAxIDogMFwiIGFwcGVhcmFuY2U9XCJvdXRsaW5lXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxtYXQtbGFiZWw+VmFsZXVyIHBhciBkw6lmYXVsdDwvbWF0LWxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXQgW3R5cGVdPVwiY3VycmVudEVkaXRCbG9jay50eXBlXCIgW2Rpc2FibGVkXT1cImN1cnJlbnRFZGl0QmxvY2sudHlwZSA9PT0gJ3RlbCdcIiBtYXRJbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIFtuZ01vZGVsT3B0aW9uc109XCJ7IHN0YW5kYWxvbmU6IHRydWUgfVwiIFsobmdNb2RlbCldPVwiY3VycmVudEVkaXRCbG9jay5kZWZhdWx0VmFsdWVcIlxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcblxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYW5kYXRvcnkgdG9wLTEwIGJvdHRvbS0xMFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRvb2dsZS1idXR0b25cIj5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4+T2JsaWdhdG9pcmU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDxtYXQtc2xpZGUtdG9nZ2xlIGNvbG9yPVwiIzZGRThEN1wiIFsobmdNb2RlbCldPVwiY3VycmVudEVkaXRCbG9jay5pc01hbmRhdG9yeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgW25nTW9kZWxPcHRpb25zXT1cInsgc3RhbmRhbG9uZTogdHJ1ZSB9XCI+XHJcbiAgICAgICAgICAgICAgICAgIDwvbWF0LXNsaWRlLXRvZ2dsZT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYW5kYXRvcnkgdG9wLTEwXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidG9vZ2xlLWJ1dHRvblwiPlxyXG4gICAgICAgICAgICAgICAgICA8c3Bhbj5WaXNpYmlsaXTDqSBjb25kaXRpb25uZWxsZTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPG1hdC1zbGlkZS10b2dnbGUgY29sb3I9XCIjNkZFOEQ3XCIgWyhuZ01vZGVsKV09XCJjdXJyZW50RWRpdEJsb2NrLmlzQ29uZGl0aW9uYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgIFtuZ01vZGVsT3B0aW9uc109XCJ7IHN0YW5kYWxvbmU6IHRydWUgfVwiPlxyXG4gICAgICAgICAgICAgICAgICA8L21hdC1zbGlkZS10b2dnbGU+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiY3VycmVudEVkaXRCbG9jaz8uaXNDb25kaXRpb25hbFwiPlxyXG4gICAgICAgICAgICAgICAgPG1hdC1mb3JtLWZpZWxkIGNsYXNzPVwiZm9ybS1maWVsZCBtYXQtc2VsZWN0IGZ1bGwtd2lkdGhcIiBhcHBlYXJhbmNlPVwib3V0bGluZVwiPlxyXG4gICAgICAgICAgICAgICAgICA8bWF0LWxhYmVsPlNlbGVjdGlvbm5leiBsYSBjYXTDqWdvcmllPC9tYXQtbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgIDxtYXQtc2VsZWN0IFsobmdNb2RlbCldPVwiYWxsXCIgW25nTW9kZWxPcHRpb25zXT1cInsgc3RhbmRhbG9uZTogdHJ1ZSB9XCJcclxuICAgICAgICAgICAgICAgICAgICAoc2VsZWN0aW9uQ2hhbmdlKT1cIm9uU2VsZWN0Q29uZGl0aW9uKCdhbGwnLCdzMScsICRldmVudC52YWx1ZSlcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bWF0LW9wdGlvbiAqbmdGb3I9XCJsZXQgaXRlbSBvZiBjb25kaXRpb25EYXRhLmFsbFwiIFt2YWx1ZV09XCJpdGVtLmtleVwiPnt7XHJcbiAgICAgICAgICAgICAgICAgICAgICBpdGVtLmxhYmVsIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPC9tYXQtb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICA8L21hdC1zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgICAgICAgPG1hdC1mb3JtLWZpZWxkICpuZ0lmPVwiY29uZGl0aW9uRGF0YS5zMT8ubGVuZ3RoID4gMFwiIGNsYXNzPVwiZm9ybS1maWVsZCBtYXQtc2VsZWN0IGZ1bGwtd2lkdGhcIlxyXG4gICAgICAgICAgICAgICAgICBhcHBlYXJhbmNlPVwib3V0bGluZVwiPlxyXG4gICAgICAgICAgICAgICAgICA8bWF0LWxhYmVsPlNlbGVjdGlvbm5leiBsYSBzb3VzIGNhdMOpZ29yaWUgKHMxKTwvbWF0LWxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICA8bWF0LXNlbGVjdCBbKG5nTW9kZWwpXT1cInMxXCIgW25nTW9kZWxPcHRpb25zXT1cInsgc3RhbmRhbG9uZTogdHJ1ZSB9XCJcclxuICAgICAgICAgICAgICAgICAgICAoc2VsZWN0aW9uQ2hhbmdlKT1cIm9uU2VsZWN0Q29uZGl0aW9uKCdzMScsJ3MyJywgJGV2ZW50LnZhbHVlKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxtYXQtb3B0aW9uICpuZ0Zvcj1cImxldCBpdGVtIG9mIGNvbmRpdGlvbkRhdGEuczFcIiBbdmFsdWVdPVwiaXRlbS5rZXlcIj57e1xyXG4gICAgICAgICAgICAgICAgICAgICAgaXRlbS5sYWJlbCB9fVxyXG4gICAgICAgICAgICAgICAgICAgIDwvbWF0LW9wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgPC9tYXQtc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgICAgICAgICAgICAgIDxtYXQtZm9ybS1maWVsZCBjbGFzcz1cImZvcm0tZmllbGQgbWF0LXNlbGVjdCBmdWxsLXdpZHRoXCIgKm5nSWY9XCJjb25kaXRpb25EYXRhLnMyPy5sZW5ndGg+MFwiXHJcbiAgICAgICAgICAgICAgICAgIGFwcGVhcmFuY2U9XCJvdXRsaW5lXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxtYXQtbGFiZWw+U2VsZWN0aW9ubmV6IGxhIHNvdXMgY2F0w6lnb3JpZSAoczIpPC9tYXQtbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgIDxtYXQtc2VsZWN0IFsobmdNb2RlbCldPVwiczJcIiBbbmdNb2RlbE9wdGlvbnNdPVwieyBzdGFuZGFsb25lOiB0cnVlIH1cIlxyXG4gICAgICAgICAgICAgICAgICAgIChzZWxlY3Rpb25DaGFuZ2UpPVwib25TZWxlY3RDb25kaXRpb24oJ3MyJywnczMnLCAkZXZlbnQudmFsdWUpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPG1hdC1vcHRpb24gKm5nRm9yPVwibGV0IGl0ZW0gb2YgY29uZGl0aW9uRGF0YS5zMlwiIFt2YWx1ZV09XCJpdGVtLmtleVwiPnt7XHJcbiAgICAgICAgICAgICAgICAgICAgICBpdGVtLmxhYmVsIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPC9tYXQtb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICA8L21hdC1zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgICAgICAgPG1hdC1mb3JtLWZpZWxkIGNsYXNzPVwiZm9ybS1maWVsZCBtYXQtc2VsZWN0IGZ1bGwtd2lkdGhcIiAqbmdJZj1cImNvbmRpdGlvbkRhdGEuczM/Lmxlbmd0aD4wXCJcclxuICAgICAgICAgICAgICAgICAgYXBwZWFyYW5jZT1cIm91dGxpbmVcIj5cclxuICAgICAgICAgICAgICAgICAgPG1hdC1sYWJlbD5TZWxlY3Rpb25uZXogbGEgc291cyBjYXTDqWdvcmllIChzMyk8L21hdC1sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgPG1hdC1zZWxlY3QgWyhuZ01vZGVsKV09XCJzM1wiIFtuZ01vZGVsT3B0aW9uc109XCJ7IHN0YW5kYWxvbmU6IHRydWUgfVwiXHJcbiAgICAgICAgICAgICAgICAgICAgKHNlbGVjdGlvbkNoYW5nZSk9XCJvblNlbGVjdENvbmRpdGlvbignczMnLCdzNCcsICRldmVudC52YWx1ZSlcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bWF0LW9wdGlvbiAqbmdGb3I9XCJsZXQgaXRlbSBvZiBjb25kaXRpb25EYXRhLnMzXCIgW3ZhbHVlXT1cIml0ZW0ua2V5XCI+e3tcclxuICAgICAgICAgICAgICAgICAgICAgIGl0ZW0ubGFiZWwgfX1cclxuICAgICAgICAgICAgICAgICAgICA8L21hdC1vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgIDwvbWF0LXNlbGVjdD5cclxuICAgICAgICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcblxyXG4gICAgICAgICAgICAgIDxtYXQtcmFkaW8tZ3JvdXBcclxuICAgICAgICAgICAgICAgICpuZ0lmPVwiY3VycmVudEVkaXRCbG9jay5pc0NvbmRpdGlvbmFsICYmIG9uR2V0RGVmYXVsdFZhbHVlKCkgJiYgb25HZXREZWZhdWx0VmFsdWUoKT8ubGVuZ3RoPjBcIlxyXG4gICAgICAgICAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwiZXhhbXBsZS1yYWRpby1ncm91cC1sYWJlbFwiIGNsYXNzPVwiZXhhbXBsZS1yYWRpby1ncm91cFwiXHJcbiAgICAgICAgICAgICAgICBbKG5nTW9kZWwpXT1cImN1cnJlbnRFZGl0QmxvY2suY29uZGl0aW9uLnZhbHVlXCIgW25nTW9kZWxPcHRpb25zXT1cInsgc3RhbmRhbG9uZTogdHJ1ZSB9XCI+XHJcbiAgICAgICAgICAgICAgICA8bWF0LXJhZGlvLWJ1dHRvbiBjbGFzcz1cImV4YW1wbGUtcmFkaW8tYnV0dG9uXCIgc3R5bGU9XCJtYXJnaW4tcmlnaHQ6IDEwcHhcIlxyXG4gICAgICAgICAgICAgICAgICAqbmdGb3I9XCJsZXQgaXRlbSBvZiBvbkdldERlZmF1bHRWYWx1ZSgpXCIgW3ZhbHVlXT1cIml0ZW0udmFsdWVcIj5cclxuICAgICAgICAgICAgICAgICAge3sgaXRlbS52YWx1ZSB9fVxyXG4gICAgICAgICAgICAgICAgPC9tYXQtcmFkaW8tYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvbWF0LXJhZGlvLWdyb3VwPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJibG9jLWFjdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiAqbmdJZj1cInBhcmFtc0luZGV4Lmxlbmd0aDw0XCIgbWF0LWJ1dHRvbiBbZGlzYWJsZWRdPVwiIWN1cnJlbnRFZGl0QmxvY2suZWRpdGFibGVcIlxyXG4gICAgICAgICAgICAgICAgICAoY2xpY2spPVwib25BZGROZXdTdWJMZXZlbEZpZWxkQmxvY2soJGV2ZW50KVwiPlNvdXMtY2F0w6lnb3JpZSA8bWF0LWljb24+ZGV2aWNlX2h1YlxyXG4gICAgICAgICAgICAgICAgICA8L21hdC1pY29uPjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBtYXQtYnV0dG9uIFtkaXNhYmxlZF09XCIhY3VycmVudEVkaXRCbG9jay5lZGl0YWJsZVwiIChjbGljayk9XCJvbkR1cGxpY2F0ZWRCbG9jaygkZXZlbnQpXCI+RHVwbGlxdWVyXHJcbiAgICAgICAgICAgICAgICAgIGxlIGJsb2M8bWF0LWljb24+ZmlsdGVyX25vbmU8L21hdC1pY29uPlxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIG1hdC1idXR0b24gW2Rpc2FibGVkXT1cIiFjdXJyZW50RWRpdEJsb2NrLmVkaXRhYmxlXCIgY2xhc3M9XCJkZWxldGUtYmxvY1wiXHJcbiAgICAgICAgICAgICAgICAgIChjbGljayk9XCJvblJlbW92ZUZpZWxkQmxvY2soJGV2ZW50KVwiPlN1cHByaW1lciBsZSBibG9jIDxtYXQtaWNvbj5cclxuICAgICAgICAgICAgICAgICAgICBkZWxldGUgPC9tYXQtaWNvbj48L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwicHJvcGVydHktY29udGVudFwiICpuZ0lmPVwiaXNTZWN0aW9uICYmIGN1cnJlbnRFZGl0QmxvY2tcIj5cclxuICAgICAgICAgIDxoMz5QYXJhbcOodHJlIGRlIGxhIHNlY3Rpb24ge3sgY3VycmVudEVkaXRCbG9jay5uYW1lIH19PC9oMz5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcm9wZXJ0eS1jb250ZW50LWlubmVyXCI+XHJcbiAgICAgICAgICAgIDxtYXQtZm9ybS1maWVsZCBjbGFzcz1cImZvcm0tZmllbGQgZnVsbC13aWR0aFwiIGFwcGVhcmFuY2U9XCJvdXRsaW5lXCI+XHJcbiAgICAgICAgICAgICAgPG1hdC1sYWJlbD5Ob20gZGUgbGEgc2VjdGlvbjwvbWF0LWxhYmVsPlxyXG4gICAgICAgICAgICAgIDxpbnB1dCAobmdNb2RlbENoYW5nZSk9XCJvbkNoYW5nZUNhdGVnb3J5TmFtZSgpXCIgdHlwZT1cInRleHRcIiBtYXRJbnB1dCByZXF1aXJlZCBwbGFjZWhvbGRlcj1cIlwiXHJcbiAgICAgICAgICAgICAgICBbKG5nTW9kZWwpXT1cImN1cnJlbnRFZGl0QmxvY2submFtZVwiIFtuZ01vZGVsT3B0aW9uc109XCJ7IHN0YW5kYWxvbmU6IHRydWUgfVwiIC8+XHJcbiAgICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgICAgIDxtYXQtZm9ybS1maWVsZCBjbGFzcz1cImZvcm0tZmllbGQgbWF0LXNlbGVjdCBmdWxsLXdpZHRoXCIgYXBwZWFyYW5jZT1cIm91dGxpbmVcIj5cclxuICAgICAgICAgICAgICA8bWF0LWxhYmVsPkVxdWlwZSBkZSBnZXN0aW9uPC9tYXQtbGFiZWw+XHJcbiAgICAgICAgICAgICAgPG1hdC1zZWxlY3QgcmVxdWlyZWQgWyhuZ01vZGVsKV09XCJjdXJyZW50RWRpdEJsb2NrLnNlbGVjdG9yLnZhbHVlXCJcclxuICAgICAgICAgICAgICAgIFtuZ01vZGVsT3B0aW9uc109XCJ7IHN0YW5kYWxvbmU6IHRydWUgfVwiPlxyXG4gICAgICAgICAgICAgICAgPG1hdC1vcHRpb24gW3ZhbHVlXT1cIml0ZW0udmFsdWVcIiAqbmdGb3I9XCJsZXQgaXRlbSBvZiBjdXJyZW50RWRpdEJsb2NrLnNlbGVjdG9yLmRlZmF1bHRWYWx1ZVwiPnt7XHJcbiAgICAgICAgICAgICAgICAgIGl0ZW0udmFsdWUgfX08L21hdC1vcHRpb24+XHJcbiAgICAgICAgICAgICAgPC9tYXQtc2VsZWN0PlxyXG4gICAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYmxvYy1hY3Rpb25cIj5cclxuICAgICAgICAgICAgICA8YnV0dG9uIG1hdC1idXR0b24gKGNsaWNrKT1cIm9uQWRkTmV3U3ViTGV2ZWxGaWVsZEJsb2NrKCRldmVudClcIj5Tb3VzLWNhdMOpZ29yaWUgPG1hdC1pY29uPmRldmljZV9odWJcclxuICAgICAgICAgICAgICAgIDwvbWF0LWljb24+PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBtYXQtYnV0dG9uIChjbGljayk9XCJvbkR1cGxpY2F0ZWRCbG9jaygkZXZlbnQpXCI+RHVwbGlxdWVyIGxlIGJsb2M8bWF0LWljb24+ZmlsdGVyX25vbmU8L21hdC1pY29uPlxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDxidXR0b24gW2Rpc2FibGVkXT1cIiFjdXJyZW50RWRpdEJsb2NrLmVkaXRhYmxlXCIgbWF0LWJ1dHRvbiBjbGFzcz1cImRlbGV0ZS1ibG9jXCJcclxuICAgICAgICAgICAgICAgIChjbGljayk9XCJvblJlbW92ZUZpZWxkQmxvY2soJGV2ZW50KVwiPlN1cHByaW1lciBsZSBibG9jIDxtYXQtaWNvbj5cclxuICAgICAgICAgICAgICAgICAgZGVsZXRlPC9tYXQtaWNvbj48L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Zvcm0+XHJcbjwvbWFpbj4iXX0=