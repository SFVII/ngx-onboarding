import { COMMA, ENTER, SEMICOLON } from "@angular/cdk/keycodes";
import { moveItemInArray, transferArrayItem } from "@angular/cdk/drag-drop";
import { Component, HostListener } from '@angular/core';
import { Validators } from "@angular/forms";
import { DialogCreateTemplateComponent } from "../../components/template/dialog-create-template/dialog-create-template.component";
import { ExitConfirmComponent } from "../../components/exit-confirm/exit-confirm.component";
import { TypeComponent } from "../../components/template/type-dialog/type.component";
import { locales } from '../../i18n';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "../../onboarding.service";
import * as i3 from "@angular/router";
import * as i4 from "@angular/material/dialog";
import * as i5 from "@nicky-lenaers/ngx-scroll-to";
import * as i6 from "@angular/material/form-field";
import * as i7 from "@angular/material/button";
import * as i8 from "@angular/common";
import * as i9 from "@angular/material/checkbox";
import * as i10 from "@angular/material/icon";
import * as i11 from "@angular/material/select";
import * as i12 from "@angular/material/core";
import * as i13 from "@angular/material/input";
import * as i14 from "@angular/material/chips";
import * as i15 from "@angular/material/radio";
import * as i16 from "@angular/cdk/drag-drop";
import * as i17 from "ngx-intl-tel-input";
import * as i18 from "@angular/material/slide-toggle";
import * as i19 from "../../components/template/sub-template-profile/sub-template-profile.component";
import * as i20 from "../../components/loading/loading.component";
function TemplateProfileCreateComponent_lib_loading_page_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "lib-loading-page");
} }
function TemplateProfileCreateComponent_lib_loading_page_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "lib-loading-page");
} }
function TemplateProfileCreateComponent_li_23_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 21);
    i0.ɵɵlistener("click", function TemplateProfileCreateComponent_li_23_Template_li_click_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r9); const cat_r6 = restoredCtx.$implicit; const i_r7 = restoredCtx.index; const ctx_r8 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r8.scrollTo(cat_r6, i_r7)); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const cat_r6 = ctx.$implicit;
    const i_r7 = ctx.index;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵclassMap(ctx_r2.editIndex === i_r7 ? "active" : "");
    i0.ɵɵproperty("id", cat_r6.name + "x");
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", cat_r6.name, " ");
} }
function TemplateProfileCreateComponent_section_32_mat_icon_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-icon");
    i0.ɵɵtext(1, "chevron_right");
    i0.ɵɵelementEnd();
} }
function TemplateProfileCreateComponent_section_32_mat_icon_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-icon");
    i0.ɵɵtext(1, "expand_more");
    i0.ɵɵelementEnd();
} }
function TemplateProfileCreateComponent_section_32_div_15_ng_container_1_ng_container_1_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 44);
} }
function TemplateProfileCreateComponent_section_32_div_15_ng_container_1_ng_container_1_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 45)(1, "button", 24);
    i0.ɵɵlistener("click", function TemplateProfileCreateComponent_section_32_div_15_ng_container_1_ng_container_1_div_5_Template_button_click_1_listener($event) { $event.stopPropagation(); return $event.preventDefault(); });
    i0.ɵɵelementStart(2, "mat-icon", 25);
    i0.ɵɵtext(3, "drag_indicator");
    i0.ɵɵelementEnd()()();
} }
function TemplateProfileCreateComponent_section_32_div_15_ng_container_1_ng_container_1_div_7_mat_icon_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-icon");
    i0.ɵɵtext(1, "expand_less ");
    i0.ɵɵelementEnd();
} }
function TemplateProfileCreateComponent_section_32_div_15_ng_container_1_ng_container_1_div_7_mat_icon_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-icon");
    i0.ɵɵtext(1, "expand_more ");
    i0.ɵɵelementEnd();
} }
function TemplateProfileCreateComponent_section_32_div_15_ng_container_1_ng_container_1_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r29 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 46)(1, "div", 27)(2, "div")(3, "p", 28);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "p", 29);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "button", 47);
    i0.ɵɵlistener("click", function TemplateProfileCreateComponent_section_32_div_15_ng_container_1_ng_container_1_div_7_Template_button_click_7_listener($event) { i0.ɵɵrestoreView(_r29); const ctx_r28 = i0.ɵɵnextContext(); const field_r17 = ctx_r28.$implicit; const j_r18 = ctx_r28.index; const i_r11 = i0.ɵɵnextContext(3).index; const ctx_r27 = i0.ɵɵnextContext(); $event.stopPropagation(); return i0.ɵɵresetView(ctx_r27.onEditBlock(field_r17, i_r11, j_r18)); });
    i0.ɵɵelementStart(8, "mat-icon", 48);
    i0.ɵɵtext(9, "settings");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(10, "button", 49);
    i0.ɵɵlistener("click", function TemplateProfileCreateComponent_section_32_div_15_ng_container_1_ng_container_1_div_7_Template_button_click_10_listener($event) { i0.ɵɵrestoreView(_r29); const ctx_r32 = i0.ɵɵnextContext(); const field_r17 = ctx_r32.$implicit; const j_r18 = ctx_r32.index; const i_r11 = i0.ɵɵnextContext(3).index; const ctx_r31 = i0.ɵɵnextContext(); $event.stopPropagation(); return i0.ɵɵresetView(ctx_r31.onExpendMore({ event: $event, field: field_r17 }, i_r11, j_r18)); });
    i0.ɵɵtemplate(11, TemplateProfileCreateComponent_section_32_div_15_ng_container_1_ng_container_1_div_7_mat_icon_11_Template, 2, 0, "mat-icon", 5);
    i0.ɵɵtemplate(12, TemplateProfileCreateComponent_section_32_div_15_ng_container_1_ng_container_1_div_7_mat_icon_12_Template, 2, 0, "mat-icon", 5);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const field_r17 = i0.ɵɵnextContext().$implicit;
    const ctx_r21 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1(" ", field_r17.label, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2(" ", ctx_r21.locale == null ? null : ctx_r21.locale.CATEGORY_SUBTITLE, " ", ctx_r21.catNameStart(field_r17.label) ? "l'" + field_r17.label : field_r17.label, " ");
    i0.ɵɵadvance(4);
    i0.ɵɵstyleProp("opacity", field_r17.forms && field_r17.forms.length > 0 ? 1 : 0);
    i0.ɵɵproperty("disabled", !(field_r17.forms && field_r17.forms.length > 0));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !field_r17.expandMore);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", field_r17.expandMore);
} }
function TemplateProfileCreateComponent_section_32_div_15_ng_container_1_ng_container_1_div_9_div_1_div_2_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 60)(1, "button", 24);
    i0.ɵɵlistener("click", function TemplateProfileCreateComponent_section_32_div_15_ng_container_1_ng_container_1_div_9_div_1_div_2_div_3_Template_button_click_1_listener($event) { $event.stopPropagation(); return $event.preventDefault(); });
    i0.ɵɵelementStart(2, "mat-icon", 25);
    i0.ɵɵtext(3, " drag_indicator");
    i0.ɵɵelementEnd()()();
} }
function TemplateProfileCreateComponent_section_32_div_15_ng_container_1_ng_container_1_div_9_div_1_div_2_div_5_mat_icon_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-icon");
    i0.ɵɵtext(1, " expand_less ");
    i0.ɵɵelementEnd();
} }
function TemplateProfileCreateComponent_section_32_div_15_ng_container_1_ng_container_1_div_9_div_1_div_2_div_5_mat_icon_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-icon");
    i0.ɵɵtext(1, " expand_more ");
    i0.ɵɵelementEnd();
} }
const _c0 = function () { return { standalone: true }; };
function TemplateProfileCreateComponent_section_32_div_15_ng_container_1_ng_container_1_div_9_div_1_div_2_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r49 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 46)(1, "div", 27)(2, "div")(3, "input", 61);
    i0.ɵɵlistener("ngModelChange", function TemplateProfileCreateComponent_section_32_div_15_ng_container_1_ng_container_1_div_9_div_1_div_2_div_5_Template_input_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r49); const child_r38 = i0.ɵɵnextContext().$implicit; return i0.ɵɵresetView(child_r38.label = $event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "p", 29);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "button", 47);
    i0.ɵɵlistener("click", function TemplateProfileCreateComponent_section_32_div_15_ng_container_1_ng_container_1_div_9_div_1_div_2_div_5_Template_button_click_6_listener($event) { i0.ɵɵrestoreView(_r49); const ctx_r51 = i0.ɵɵnextContext(); const child_r38 = ctx_r51.$implicit; const k_r39 = ctx_r51.index; const j_r18 = i0.ɵɵnextContext(3).index; const i_r11 = i0.ɵɵnextContext(3).index; const ctx_r50 = i0.ɵɵnextContext(); $event.stopPropagation(); return i0.ɵɵresetView(ctx_r50.onEditBlock(child_r38, i_r11, j_r18, k_r39)); });
    i0.ɵɵelementStart(7, "mat-icon", 48);
    i0.ɵɵtext(8, "settings");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(9, "button", 49);
    i0.ɵɵlistener("click", function TemplateProfileCreateComponent_section_32_div_15_ng_container_1_ng_container_1_div_9_div_1_div_2_div_5_Template_button_click_9_listener($event) { i0.ɵɵrestoreView(_r49); const ctx_r55 = i0.ɵɵnextContext(); const child_r38 = ctx_r55.$implicit; const k_r39 = ctx_r55.index; const j_r18 = i0.ɵɵnextContext(3).index; const i_r11 = i0.ɵɵnextContext(3).index; const ctx_r54 = i0.ɵɵnextContext(); $event.stopPropagation(); return i0.ɵɵresetView(ctx_r54.onExpendMore({ event: $event, field: child_r38 }, i_r11, j_r18, k_r39)); });
    i0.ɵɵtemplate(10, TemplateProfileCreateComponent_section_32_div_15_ng_container_1_ng_container_1_div_9_div_1_div_2_div_5_mat_icon_10_Template, 2, 0, "mat-icon", 5);
    i0.ɵɵtemplate(11, TemplateProfileCreateComponent_section_32_div_15_ng_container_1_ng_container_1_div_9_div_1_div_2_div_5_mat_icon_11_Template, 2, 0, "mat-icon", 5);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const child_r38 = i0.ɵɵnextContext().$implicit;
    const category_r10 = i0.ɵɵnextContext(6).$implicit;
    const ctx_r41 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("readonly", ctx_r41.categories.length < 4 || !category_r10.editable)("readonly", !category_r10.editable)("ngModel", child_r38.label)("ngModelOptions", i0.ɵɵpureFunction0(11, _c0));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2(" ", ctx_r41.locale == null ? null : ctx_r41.locale.CATEGORY_SUBTITLE, " ", ctx_r41.catNameStart(child_r38.label) ? "l'" + child_r38.label : child_r38.label, " ");
    i0.ɵɵadvance(4);
    i0.ɵɵstyleProp("opacity", child_r38.forms && child_r38.forms.length > 0 ? 1 : 0);
    i0.ɵɵproperty("disabled", !(child_r38.forms && child_r38.forms.length > 0));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !child_r38.expandMore);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", child_r38.expandMore);
} }
function TemplateProfileCreateComponent_section_32_div_15_ng_container_1_ng_container_1_div_9_div_1_div_2_div_7_div_1_div_2_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 66)(1, "button", 24);
    i0.ɵɵlistener("click", function TemplateProfileCreateComponent_section_32_div_15_ng_container_1_ng_container_1_div_9_div_1_div_2_div_7_div_1_div_2_div_3_Template_button_click_1_listener($event) { return $event.stopPropagation(); });
    i0.ɵɵelementStart(2, "mat-icon", 25);
    i0.ɵɵtext(3, " drag_indicator ");
    i0.ɵɵelementEnd()()();
} }
function TemplateProfileCreateComponent_section_32_div_15_ng_container_1_ng_container_1_div_9_div_1_div_2_div_7_div_1_div_2_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r70 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 67)(1, "button", 68);
    i0.ɵɵlistener("click", function TemplateProfileCreateComponent_section_32_div_15_ng_container_1_ng_container_1_div_9_div_1_div_2_div_7_div_1_div_2_div_7_Template_button_click_1_listener($event) { i0.ɵɵrestoreView(_r70); const k_r39 = i0.ɵɵnextContext(4).index; const j_r18 = i0.ɵɵnextContext(3).index; const i_r11 = i0.ɵɵnextContext(3).index; const ctx_r68 = i0.ɵɵnextContext(); $event.stopPropagation(); return i0.ɵɵresetView(ctx_r68.onAddNewField(i_r11, j_r18, k_r39)); });
    i0.ɵɵelementStart(2, "span");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "mat-icon");
    i0.ɵɵtext(5, " add ");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r66 = i0.ɵɵnextContext(11);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r66.locale == null ? null : ctx_r66.locale.ADD_FIELD);
} }
function TemplateProfileCreateComponent_section_32_div_15_ng_container_1_ng_container_1_div_9_div_1_div_2_div_7_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r74 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 63)(1, "div", 56)(2, "div", 37);
    i0.ɵɵtemplate(3, TemplateProfileCreateComponent_section_32_div_15_ng_container_1_ng_container_1_div_9_div_1_div_2_div_7_div_1_div_2_div_3_Template, 4, 0, "div", 64);
    i0.ɵɵelementStart(4, "div", 39)(5, "lib-sub-category", 65);
    i0.ɵɵlistener("onCheckValue", function TemplateProfileCreateComponent_section_32_div_15_ng_container_1_ng_container_1_div_9_div_1_div_2_div_7_div_1_div_2_Template_lib_sub_category_onCheckValue_5_listener($event) { i0.ɵɵrestoreView(_r74); const ctx_r73 = i0.ɵɵnextContext(10); return i0.ɵɵresetView(ctx_r73.onCheckValue($event)); })("onAddKeywordFromInput", function TemplateProfileCreateComponent_section_32_div_15_ng_container_1_ng_container_1_div_9_div_1_div_2_div_7_div_1_div_2_Template_lib_sub_category_onAddKeywordFromInput_5_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r74); const l_r64 = restoredCtx.index; const k_r39 = i0.ɵɵnextContext(3).index; const j_r18 = i0.ɵɵnextContext(3).index; const i_r11 = i0.ɵɵnextContext(3).index; const ctx_r75 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r75.addKeywordFromInput($event.event, $event.prev, i_r11, j_r18, k_r39, l_r64)); })("onKeyPress", function TemplateProfileCreateComponent_section_32_div_15_ng_container_1_ng_container_1_div_9_div_1_div_2_div_7_div_1_div_2_Template_lib_sub_category_onKeyPress_5_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r74); const l_r64 = restoredCtx.index; const k_r39 = i0.ɵɵnextContext(3).index; const j_r18 = i0.ɵɵnextContext(3).index; const i_r11 = i0.ɵɵnextContext(3).index; const ctx_r79 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r79.onKeyPress($event.event, i_r11, j_r18, k_r39, l_r64)); })("onAddNewField", function TemplateProfileCreateComponent_section_32_div_15_ng_container_1_ng_container_1_div_9_div_1_div_2_div_7_div_1_div_2_Template_lib_sub_category_onAddNewField_5_listener() { i0.ɵɵrestoreView(_r74); const k_r39 = i0.ɵɵnextContext(3).index; const j_r18 = i0.ɵɵnextContext(3).index; const i_r11 = i0.ɵɵnextContext(3).index; const ctx_r83 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r83.onAddNewField(i_r11, j_r18, k_r39)); })("onRemoveField", function TemplateProfileCreateComponent_section_32_div_15_ng_container_1_ng_container_1_div_9_div_1_div_2_div_7_div_1_div_2_Template_lib_sub_category_onRemoveField_5_listener() { const restoredCtx = i0.ɵɵrestoreView(_r74); const l_r64 = restoredCtx.index; const k_r39 = i0.ɵɵnextContext(3).index; const j_r18 = i0.ɵɵnextContext(3).index; const i_r11 = i0.ɵɵnextContext(3).index; const ctx_r87 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r87.onRemoveField(i_r11, j_r18, k_r39, l_r64)); })("onChangeType", function TemplateProfileCreateComponent_section_32_div_15_ng_container_1_ng_container_1_div_9_div_1_div_2_div_7_div_1_div_2_Template_lib_sub_category_onChangeType_5_listener() { const restoredCtx = i0.ɵɵrestoreView(_r74); const c2_r63 = restoredCtx.$implicit; const l_r64 = restoredCtx.index; const k_r39 = i0.ɵɵnextContext(3).index; const j_r18 = i0.ɵɵnextContext(3).index; const i_r11 = i0.ɵɵnextContext(3).index; const ctx_r91 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r91.onChangeType(c2_r63.type, i_r11, j_r18, k_r39, l_r64)); })("onRemoveKeyword", function TemplateProfileCreateComponent_section_32_div_15_ng_container_1_ng_container_1_div_9_div_1_div_2_div_7_div_1_div_2_Template_lib_sub_category_onRemoveKeyword_5_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r74); const l_r64 = restoredCtx.index; const k_r39 = i0.ɵɵnextContext(3).index; const j_r18 = i0.ɵɵnextContext(3).index; const i_r11 = i0.ɵɵnextContext(3).index; const ctx_r95 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r95.removeKeyword($event.event, i_r11, j_r18, k_r39, l_r64)); })("onAddNewSubLevelField", function TemplateProfileCreateComponent_section_32_div_15_ng_container_1_ng_container_1_div_9_div_1_div_2_div_7_div_1_div_2_Template_lib_sub_category_onAddNewSubLevelField_5_listener() { const restoredCtx = i0.ɵɵrestoreView(_r74); const l_r64 = restoredCtx.index; const k_r39 = i0.ɵɵnextContext(3).index; const j_r18 = i0.ɵɵnextContext(3).index; const i_r11 = i0.ɵɵnextContext(3).index; const ctx_r99 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r99.onAddNewSubLevelField(i_r11, j_r18, k_r39, l_r64)); })("onExpendMore", function TemplateProfileCreateComponent_section_32_div_15_ng_container_1_ng_container_1_div_9_div_1_div_2_div_7_div_1_div_2_Template_lib_sub_category_onExpendMore_5_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r74); const l_r64 = restoredCtx.index; const k_r39 = i0.ɵɵnextContext(3).index; const j_r18 = i0.ɵɵnextContext(3).index; const i_r11 = i0.ɵɵnextContext(3).index; const ctx_r103 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r103.onExpendMore($event, i_r11, j_r18, k_r39, l_r64)); })("onChangeLabel", function TemplateProfileCreateComponent_section_32_div_15_ng_container_1_ng_container_1_div_9_div_1_div_2_div_7_div_1_div_2_Template_lib_sub_category_onChangeLabel_5_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r74); const l_r64 = restoredCtx.index; const k_r39 = i0.ɵɵnextContext(3).index; const j_r18 = i0.ɵɵnextContext(3).index; const i_r11 = i0.ɵɵnextContext(3).index; const ctx_r107 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r107.onChangeLabel($event, i_r11, j_r18, k_r39, l_r64)); })("onCheckedChip", function TemplateProfileCreateComponent_section_32_div_15_ng_container_1_ng_container_1_div_9_div_1_div_2_div_7_div_1_div_2_Template_lib_sub_category_onCheckedChip_5_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r74); const l_r64 = restoredCtx.index; const k_r39 = i0.ɵɵnextContext(3).index; const j_r18 = i0.ɵɵnextContext(3).index; const i_r11 = i0.ɵɵnextContext(3).index; const ctx_r111 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r111.onCheckedChip($event, i_r11, j_r18, k_r39, l_r64)); })("onDrop", function TemplateProfileCreateComponent_section_32_div_15_ng_container_1_ng_container_1_div_9_div_1_div_2_div_7_div_1_div_2_Template_lib_sub_category_onDrop_5_listener($event) { i0.ɵɵrestoreView(_r74); const ctx_r115 = i0.ɵɵnextContext(10); return i0.ɵɵresetView(ctx_r115.drop($event)); })("onCheckedDefault", function TemplateProfileCreateComponent_section_32_div_15_ng_container_1_ng_container_1_div_9_div_1_div_2_div_7_div_1_div_2_Template_lib_sub_category_onCheckedDefault_5_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r74); const l_r64 = restoredCtx.index; const k_r39 = i0.ɵɵnextContext(3).index; const j_r18 = i0.ɵɵnextContext(3).index; const i_r11 = i0.ɵɵnextContext(3).index; const ctx_r116 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r116.onCheckedDefault($event, i_r11, j_r18, k_r39, l_r64)); })("onEditBlock", function TemplateProfileCreateComponent_section_32_div_15_ng_container_1_ng_container_1_div_9_div_1_div_2_div_7_div_1_div_2_Template_lib_sub_category_onEditBlock_5_listener() { const restoredCtx = i0.ɵɵrestoreView(_r74); const c2_r63 = restoredCtx.$implicit; const l_r64 = restoredCtx.index; const k_r39 = i0.ɵɵnextContext(3).index; const j_r18 = i0.ɵɵnextContext(3).index; const i_r11 = i0.ɵɵnextContext(3).index; const ctx_r120 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r120.onEditBlock(c2_r63, i_r11, j_r18, k_r39, l_r64)); });
    i0.ɵɵelement(6, "div", 50);
    i0.ɵɵelementEnd()()()();
    i0.ɵɵtemplate(7, TemplateProfileCreateComponent_section_32_div_15_ng_container_1_ng_container_1_div_9_div_1_div_2_div_7_div_1_div_2_div_7_Template, 6, 1, "div", 59);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const c2_r63 = ctx.$implicit;
    const l_r64 = ctx.index;
    const ctx_r124 = i0.ɵɵnextContext(3);
    const child_r38 = ctx_r124.$implicit;
    const k_r39 = ctx_r124.index;
    const ctx_r62 = i0.ɵɵnextContext(7);
    i0.ɵɵstyleProp("width", c2_r63.forms && c2_r63.forms.length > 0 ? "100%" : ctx_r62.fieldWidth(c2_r63.type, child_r38.forms.length, l_r64));
    i0.ɵɵproperty("id", c2_r63.key);
    i0.ɵɵadvance(2);
    i0.ɵɵclassMap(c2_r63.forms && c2_r63.forms.length > 0 ? "sub-category-forms" : "");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", c2_r63.forms && c2_r63.forms.length > 0);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("field", c2_r63)("length", child_r38 == null ? null : child_r38.forms == null ? null : child_r38.forms.length)("blink", ctx_r62.checkBlink(l_r64, 3) === ctx_r62.newFieldIndex)("i", k_r39)("j", l_r64)("conditionData", ctx_r62.conditionData);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", (child_r38 == null ? null : child_r38.forms == null ? null : child_r38.forms.length) - 1 === l_r64);
} }
function TemplateProfileCreateComponent_section_32_div_15_ng_container_1_ng_container_1_div_9_div_1_div_2_div_7_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r126 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 52, 53);
    i0.ɵɵlistener("cdkDropListDropped", function TemplateProfileCreateComponent_section_32_div_15_ng_container_1_ng_container_1_div_9_div_1_div_2_div_7_div_1_Template_div_cdkDropListDropped_0_listener($event) { i0.ɵɵrestoreView(_r126); const ctx_r125 = i0.ɵɵnextContext(9); return i0.ɵɵresetView(ctx_r125.drop($event)); });
    i0.ɵɵtemplate(2, TemplateProfileCreateComponent_section_32_div_15_ng_container_1_ng_container_1_div_9_div_1_div_2_div_7_div_1_div_2_Template, 8, 13, "div", 62);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const child_r38 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵproperty("cdkDropListData", child_r38.forms);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", child_r38.forms);
} }
function TemplateProfileCreateComponent_section_32_div_15_ng_container_1_ng_container_1_div_9_div_1_div_2_div_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 50);
    i0.ɵɵtemplate(1, TemplateProfileCreateComponent_section_32_div_15_ng_container_1_ng_container_1_div_9_div_1_div_2_div_7_div_1_Template, 3, 2, "div", 51);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const child_r38 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", child_r38.forms && child_r38.forms.length > 0);
} }
function TemplateProfileCreateComponent_section_32_div_15_ng_container_1_ng_container_1_div_9_div_1_div_2_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r131 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 67)(1, "button", 68);
    i0.ɵɵlistener("click", function TemplateProfileCreateComponent_section_32_div_15_ng_container_1_ng_container_1_div_9_div_1_div_2_div_8_Template_button_click_1_listener($event) { i0.ɵɵrestoreView(_r131); const j_r18 = i0.ɵɵnextContext(4).index; const i_r11 = i0.ɵɵnextContext(3).index; const ctx_r129 = i0.ɵɵnextContext(); $event.stopPropagation(); return i0.ɵɵresetView(ctx_r129.onAddNewField(i_r11, j_r18)); });
    i0.ɵɵelementStart(2, "span");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "mat-icon");
    i0.ɵɵtext(5, "add");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r43 = i0.ɵɵnextContext(8);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r43.locale == null ? null : ctx_r43.locale.ADD_FIELD);
} }
function TemplateProfileCreateComponent_section_32_div_15_ng_container_1_ng_container_1_div_9_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r134 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 55)(1, "div", 56)(2, "div", 37);
    i0.ɵɵtemplate(3, TemplateProfileCreateComponent_section_32_div_15_ng_container_1_ng_container_1_div_9_div_1_div_2_div_3_Template, 4, 0, "div", 57);
    i0.ɵɵelementStart(4, "div", 39);
    i0.ɵɵtemplate(5, TemplateProfileCreateComponent_section_32_div_15_ng_container_1_ng_container_1_div_9_div_1_div_2_div_5_Template, 12, 12, "div", 40);
    i0.ɵɵelementStart(6, "lib-sub-category", 58);
    i0.ɵɵlistener("onCheckValue", function TemplateProfileCreateComponent_section_32_div_15_ng_container_1_ng_container_1_div_9_div_1_div_2_Template_lib_sub_category_onCheckValue_6_listener($event) { i0.ɵɵrestoreView(_r134); const ctx_r133 = i0.ɵɵnextContext(7); return i0.ɵɵresetView(ctx_r133.onCheckValue($event)); })("onAddKeywordFromInput", function TemplateProfileCreateComponent_section_32_div_15_ng_container_1_ng_container_1_div_9_div_1_div_2_Template_lib_sub_category_onAddKeywordFromInput_6_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r134); const k_r39 = restoredCtx.index; const j_r18 = i0.ɵɵnextContext(3).index; const i_r11 = i0.ɵɵnextContext(3).index; const ctx_r135 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r135.addKeywordFromInput($event.event, $event.prev, i_r11, j_r18, k_r39)); })("onKeyPress", function TemplateProfileCreateComponent_section_32_div_15_ng_container_1_ng_container_1_div_9_div_1_div_2_Template_lib_sub_category_onKeyPress_6_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r134); const k_r39 = restoredCtx.index; const j_r18 = i0.ɵɵnextContext(3).index; const i_r11 = i0.ɵɵnextContext(3).index; const ctx_r138 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r138.onKeyPress($event.event, i_r11, j_r18, k_r39)); })("onAddNewField", function TemplateProfileCreateComponent_section_32_div_15_ng_container_1_ng_container_1_div_9_div_1_div_2_Template_lib_sub_category_onAddNewField_6_listener() { i0.ɵɵrestoreView(_r134); const j_r18 = i0.ɵɵnextContext(3).index; const i_r11 = i0.ɵɵnextContext(3).index; const ctx_r141 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r141.onAddNewField(i_r11, j_r18)); })("onRemoveField", function TemplateProfileCreateComponent_section_32_div_15_ng_container_1_ng_container_1_div_9_div_1_div_2_Template_lib_sub_category_onRemoveField_6_listener() { const restoredCtx = i0.ɵɵrestoreView(_r134); const k_r39 = restoredCtx.index; const j_r18 = i0.ɵɵnextContext(3).index; const i_r11 = i0.ɵɵnextContext(3).index; const ctx_r144 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r144.onRemoveField(i_r11, j_r18, k_r39)); })("onChangeType", function TemplateProfileCreateComponent_section_32_div_15_ng_container_1_ng_container_1_div_9_div_1_div_2_Template_lib_sub_category_onChangeType_6_listener() { const restoredCtx = i0.ɵɵrestoreView(_r134); const child_r38 = restoredCtx.$implicit; const k_r39 = restoredCtx.index; const j_r18 = i0.ɵɵnextContext(3).index; const i_r11 = i0.ɵɵnextContext(3).index; const ctx_r147 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r147.onChangeType(child_r38.type, i_r11, j_r18, k_r39)); })("onRemoveKeyword", function TemplateProfileCreateComponent_section_32_div_15_ng_container_1_ng_container_1_div_9_div_1_div_2_Template_lib_sub_category_onRemoveKeyword_6_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r134); const k_r39 = restoredCtx.index; const j_r18 = i0.ɵɵnextContext(3).index; const i_r11 = i0.ɵɵnextContext(3).index; const ctx_r150 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r150.removeKeyword($event.event, i_r11, j_r18, k_r39)); })("onAddNewSubLevelField", function TemplateProfileCreateComponent_section_32_div_15_ng_container_1_ng_container_1_div_9_div_1_div_2_Template_lib_sub_category_onAddNewSubLevelField_6_listener() { const restoredCtx = i0.ɵɵrestoreView(_r134); const k_r39 = restoredCtx.index; const j_r18 = i0.ɵɵnextContext(3).index; const i_r11 = i0.ɵɵnextContext(3).index; const ctx_r153 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r153.onAddNewSubLevelField(i_r11, j_r18, k_r39)); })("onExpendMore", function TemplateProfileCreateComponent_section_32_div_15_ng_container_1_ng_container_1_div_9_div_1_div_2_Template_lib_sub_category_onExpendMore_6_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r134); const k_r39 = restoredCtx.index; const j_r18 = i0.ɵɵnextContext(3).index; const i_r11 = i0.ɵɵnextContext(3).index; const ctx_r156 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r156.onExpendMore($event, i_r11, j_r18, k_r39)); })("onChangeLabel", function TemplateProfileCreateComponent_section_32_div_15_ng_container_1_ng_container_1_div_9_div_1_div_2_Template_lib_sub_category_onChangeLabel_6_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r134); const k_r39 = restoredCtx.index; const j_r18 = i0.ɵɵnextContext(3).index; const i_r11 = i0.ɵɵnextContext(3).index; const ctx_r159 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r159.onChangeLabel($event, i_r11, j_r18, k_r39)); })("onCheckedChip", function TemplateProfileCreateComponent_section_32_div_15_ng_container_1_ng_container_1_div_9_div_1_div_2_Template_lib_sub_category_onCheckedChip_6_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r134); const k_r39 = restoredCtx.index; const j_r18 = i0.ɵɵnextContext(3).index; const i_r11 = i0.ɵɵnextContext(3).index; const ctx_r162 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r162.onCheckedChip($event, i_r11, j_r18, k_r39)); })("onDrop", function TemplateProfileCreateComponent_section_32_div_15_ng_container_1_ng_container_1_div_9_div_1_div_2_Template_lib_sub_category_onDrop_6_listener($event) { i0.ɵɵrestoreView(_r134); const ctx_r165 = i0.ɵɵnextContext(7); return i0.ɵɵresetView(ctx_r165.drop($event)); })("onCheckedDefault", function TemplateProfileCreateComponent_section_32_div_15_ng_container_1_ng_container_1_div_9_div_1_div_2_Template_lib_sub_category_onCheckedDefault_6_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r134); const k_r39 = restoredCtx.index; const j_r18 = i0.ɵɵnextContext(3).index; const i_r11 = i0.ɵɵnextContext(3).index; const ctx_r166 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r166.onCheckedDefault($event, i_r11, j_r18, k_r39)); })("onEditBlock", function TemplateProfileCreateComponent_section_32_div_15_ng_container_1_ng_container_1_div_9_div_1_div_2_Template_lib_sub_category_onEditBlock_6_listener() { const restoredCtx = i0.ɵɵrestoreView(_r134); const child_r38 = restoredCtx.$implicit; const k_r39 = restoredCtx.index; const j_r18 = i0.ɵɵnextContext(3).index; const i_r11 = i0.ɵɵnextContext(3).index; const ctx_r169 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r169.onEditBlock(child_r38, i_r11, j_r18, k_r39)); });
    i0.ɵɵtemplate(7, TemplateProfileCreateComponent_section_32_div_15_ng_container_1_ng_container_1_div_9_div_1_div_2_div_7_Template, 2, 1, "div", 42);
    i0.ɵɵelementEnd()()()();
    i0.ɵɵtemplate(8, TemplateProfileCreateComponent_section_32_div_15_ng_container_1_ng_container_1_div_9_div_1_div_2_div_8_Template, 6, 1, "div", 59);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const child_r38 = ctx.$implicit;
    const k_r39 = ctx.index;
    const ctx_r172 = i0.ɵɵnextContext(3);
    const field_r17 = ctx_r172.$implicit;
    const j_r18 = ctx_r172.index;
    const ctx_r37 = i0.ɵɵnextContext(4);
    i0.ɵɵstyleProp("width", child_r38.forms && child_r38.forms.length > 0 ? "100%" : ctx_r37.fieldWidth(child_r38.type, field_r17.forms.length, k_r39));
    i0.ɵɵproperty("id", child_r38.key);
    i0.ɵɵadvance(2);
    i0.ɵɵclassMap(child_r38.forms && child_r38.forms.length > 0 ? "sub-category-forms" : "");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", child_r38.forms && child_r38.forms.length > 0);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", child_r38.forms && child_r38.forms.length > 0);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("field", child_r38)("length", field_r17 == null ? null : field_r17.forms == null ? null : field_r17.forms.length)("i", j_r18)("blink", ctx_r37.checkBlink(k_r39, 2) === ctx_r37.newFieldIndex)("j", k_r39)("conditionData", ctx_r37.conditionData);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", child_r38.expandMore);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", (field_r17 == null ? null : field_r17.forms == null ? null : field_r17.forms.length) - 1 === k_r39);
} }
function TemplateProfileCreateComponent_section_32_div_15_ng_container_1_ng_container_1_div_9_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r174 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 52, 53);
    i0.ɵɵlistener("cdkDropListDropped", function TemplateProfileCreateComponent_section_32_div_15_ng_container_1_ng_container_1_div_9_div_1_Template_div_cdkDropListDropped_0_listener($event) { i0.ɵɵrestoreView(_r174); const ctx_r173 = i0.ɵɵnextContext(6); return i0.ɵɵresetView(ctx_r173.drop($event)); });
    i0.ɵɵtemplate(2, TemplateProfileCreateComponent_section_32_div_15_ng_container_1_ng_container_1_div_9_div_1_div_2_Template, 9, 15, "div", 54);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const field_r17 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵproperty("cdkDropListData", field_r17.forms);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", field_r17.forms);
} }
function TemplateProfileCreateComponent_section_32_div_15_ng_container_1_ng_container_1_div_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 50);
    i0.ɵɵtemplate(1, TemplateProfileCreateComponent_section_32_div_15_ng_container_1_ng_container_1_div_9_div_1_Template, 3, 2, "div", 51);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const field_r17 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", field_r17.forms);
} }
function TemplateProfileCreateComponent_section_32_div_15_ng_container_1_ng_container_1_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r179 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 69)(1, "button", 70);
    i0.ɵɵlistener("click", function TemplateProfileCreateComponent_section_32_div_15_ng_container_1_ng_container_1_div_10_Template_button_click_1_listener($event) { i0.ɵɵrestoreView(_r179); const i_r11 = i0.ɵɵnextContext(4).index; const ctx_r177 = i0.ɵɵnextContext(); $event.stopPropagation(); return i0.ɵɵresetView(ctx_r177.onAddNewField(i_r11)); });
    i0.ɵɵelementStart(2, "span");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "mat-icon");
    i0.ɵɵtext(5, "add");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const j_r18 = i0.ɵɵnextContext().index;
    const category_r10 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r23 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵstyleProp("opacity", (category_r10 == null ? null : category_r10.forms == null ? null : category_r10.forms.length) - 1 === j_r18 ? 1 : 0);
    i0.ɵɵproperty("disabled", (category_r10 == null ? null : category_r10.forms == null ? null : category_r10.forms.length) - 1 !== j_r18);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r23.locale == null ? null : ctx_r23.locale.ADD_FIELD);
} }
const _c1 = function (a0, a1, a2) { return { field: a0, index: a1, category: a2 }; };
function TemplateProfileCreateComponent_section_32_div_15_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r183 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 34);
    i0.ɵɵlistener("cdkDropListDropped", function TemplateProfileCreateComponent_section_32_div_15_ng_container_1_ng_container_1_Template_div_cdkDropListDropped_1_listener($event) { i0.ɵɵrestoreView(_r183); const ctx_r182 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r182.dropField($event)); });
    i0.ɵɵelementStart(2, "div", 35);
    i0.ɵɵtemplate(3, TemplateProfileCreateComponent_section_32_div_15_ng_container_1_ng_container_1_div_3_Template, 1, 0, "div", 36);
    i0.ɵɵelementStart(4, "div", 37);
    i0.ɵɵtemplate(5, TemplateProfileCreateComponent_section_32_div_15_ng_container_1_ng_container_1_div_5_Template, 4, 0, "div", 38);
    i0.ɵɵelementStart(6, "div", 39);
    i0.ɵɵtemplate(7, TemplateProfileCreateComponent_section_32_div_15_ng_container_1_ng_container_1_div_7_Template, 13, 8, "div", 40);
    i0.ɵɵelementStart(8, "lib-sub-category", 41);
    i0.ɵɵlistener("onCheckValue", function TemplateProfileCreateComponent_section_32_div_15_ng_container_1_ng_container_1_Template_lib_sub_category_onCheckValue_8_listener($event) { i0.ɵɵrestoreView(_r183); const ctx_r184 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r184.onCheckValue($event)); })("onAddKeywordFromInput", function TemplateProfileCreateComponent_section_32_div_15_ng_container_1_ng_container_1_Template_lib_sub_category_onAddKeywordFromInput_8_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r183); const j_r18 = restoredCtx.index; const i_r11 = i0.ɵɵnextContext(3).index; const ctx_r185 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r185.addKeywordFromInput($event.event, $event.prev, i_r11, j_r18)); })("onKeyPress", function TemplateProfileCreateComponent_section_32_div_15_ng_container_1_ng_container_1_Template_lib_sub_category_onKeyPress_8_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r183); const j_r18 = restoredCtx.index; const i_r11 = i0.ɵɵnextContext(3).index; const ctx_r187 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r187.onKeyPress($event.event, i_r11, j_r18)); })("onAddNewField", function TemplateProfileCreateComponent_section_32_div_15_ng_container_1_ng_container_1_Template_lib_sub_category_onAddNewField_8_listener() { i0.ɵɵrestoreView(_r183); const i_r11 = i0.ɵɵnextContext(3).index; const ctx_r189 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r189.onAddNewField(i_r11)); })("onRemoveField", function TemplateProfileCreateComponent_section_32_div_15_ng_container_1_ng_container_1_Template_lib_sub_category_onRemoveField_8_listener() { const restoredCtx = i0.ɵɵrestoreView(_r183); const j_r18 = restoredCtx.index; const i_r11 = i0.ɵɵnextContext(3).index; const ctx_r191 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r191.onRemoveField(i_r11, j_r18)); })("onChangeType", function TemplateProfileCreateComponent_section_32_div_15_ng_container_1_ng_container_1_Template_lib_sub_category_onChangeType_8_listener() { const restoredCtx = i0.ɵɵrestoreView(_r183); const field_r17 = restoredCtx.$implicit; const j_r18 = restoredCtx.index; const i_r11 = i0.ɵɵnextContext(3).index; const ctx_r193 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r193.onChangeType(field_r17.type, i_r11, j_r18)); })("onRemoveKeyword", function TemplateProfileCreateComponent_section_32_div_15_ng_container_1_ng_container_1_Template_lib_sub_category_onRemoveKeyword_8_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r183); const j_r18 = restoredCtx.index; const i_r11 = i0.ɵɵnextContext(3).index; const ctx_r195 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r195.removeKeyword($event.event, i_r11, j_r18)); })("onAddNewSubLevelField", function TemplateProfileCreateComponent_section_32_div_15_ng_container_1_ng_container_1_Template_lib_sub_category_onAddNewSubLevelField_8_listener() { const restoredCtx = i0.ɵɵrestoreView(_r183); const j_r18 = restoredCtx.index; const i_r11 = i0.ɵɵnextContext(3).index; const ctx_r197 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r197.onAddNewSubLevelField(i_r11, j_r18)); })("onExpendMore", function TemplateProfileCreateComponent_section_32_div_15_ng_container_1_ng_container_1_Template_lib_sub_category_onExpendMore_8_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r183); const j_r18 = restoredCtx.index; const i_r11 = i0.ɵɵnextContext(3).index; const ctx_r199 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r199.onExpendMore($event, i_r11, j_r18)); })("onChangeLabel", function TemplateProfileCreateComponent_section_32_div_15_ng_container_1_ng_container_1_Template_lib_sub_category_onChangeLabel_8_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r183); const j_r18 = restoredCtx.index; const i_r11 = i0.ɵɵnextContext(3).index; const ctx_r201 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r201.onChangeLabel($event, i_r11, j_r18)); })("onCheckedChip", function TemplateProfileCreateComponent_section_32_div_15_ng_container_1_ng_container_1_Template_lib_sub_category_onCheckedChip_8_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r183); const j_r18 = restoredCtx.index; const i_r11 = i0.ɵɵnextContext(3).index; const ctx_r203 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r203.onCheckedChip($event, i_r11, j_r18)); })("onDrop", function TemplateProfileCreateComponent_section_32_div_15_ng_container_1_ng_container_1_Template_lib_sub_category_onDrop_8_listener($event) { i0.ɵɵrestoreView(_r183); const ctx_r205 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r205.drop($event)); })("onCheckedDefault", function TemplateProfileCreateComponent_section_32_div_15_ng_container_1_ng_container_1_Template_lib_sub_category_onCheckedDefault_8_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r183); const j_r18 = restoredCtx.index; const i_r11 = i0.ɵɵnextContext(3).index; const ctx_r206 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r206.onCheckedDefault($event, i_r11, j_r18)); })("onEditBlock", function TemplateProfileCreateComponent_section_32_div_15_ng_container_1_ng_container_1_Template_lib_sub_category_onEditBlock_8_listener() { const restoredCtx = i0.ɵɵrestoreView(_r183); const field_r17 = restoredCtx.$implicit; const j_r18 = restoredCtx.index; const i_r11 = i0.ɵɵnextContext(3).index; const ctx_r208 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r208.onEditBlock(field_r17, i_r11, j_r18)); });
    i0.ɵɵtemplate(9, TemplateProfileCreateComponent_section_32_div_15_ng_container_1_ng_container_1_div_9_Template, 2, 1, "div", 42);
    i0.ɵɵelementEnd()()()();
    i0.ɵɵtemplate(10, TemplateProfileCreateComponent_section_32_div_15_ng_container_1_ng_container_1_div_10_Template, 6, 4, "div", 43);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const field_r17 = ctx.$implicit;
    const j_r18 = ctx.index;
    const ctx_r210 = i0.ɵɵnextContext(3);
    const category_r10 = ctx_r210.$implicit;
    const i_r11 = ctx_r210.index;
    const ctx_r16 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵstyleProp("width", field_r17.forms && field_r17.forms.length > 0 ? "100%" : ctx_r16.fieldWidth(field_r17.type, category_r10.forms.length, j_r18));
    i0.ɵɵproperty("id", field_r17.key)("cdkDropListData", i0.ɵɵpureFunction3(16, _c1, field_r17, j_r18, category_r10));
    i0.ɵɵadvance(3);
    i0.ɵɵclassMap(field_r17.forms && field_r17.forms.length > 0 ? "sub-category-forms" : "");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", field_r17.forms);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", field_r17.forms);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("field", field_r17)("length", category_r10 == null ? null : category_r10.forms == null ? null : category_r10.forms.length)("i", i_r11)("j", j_r18)("blink", ctx_r16.checkBlink(j_r18, 1) === ctx_r16.newFieldIndex)("conditionData", ctx_r16.conditionData);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", field_r17.expandMore);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", (category_r10 == null ? null : category_r10.forms == null ? null : category_r10.forms.length) - 1 === j_r18);
} }
function TemplateProfileCreateComponent_section_32_div_15_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, TemplateProfileCreateComponent_section_32_div_15_ng_container_1_ng_container_1_Template, 11, 20, "ng-container", 33);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const category_r10 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", category_r10.forms);
} }
function TemplateProfileCreateComponent_section_32_div_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 32);
    i0.ɵɵtemplate(1, TemplateProfileCreateComponent_section_32_div_15_ng_container_1_Template, 2, 1, "ng-container", 5);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const category_r10 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", category_r10.expandMore);
} }
function TemplateProfileCreateComponent_section_32_Template(rf, ctx) { if (rf & 1) {
    const _r214 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "section", 22);
    i0.ɵɵlistener("click", function TemplateProfileCreateComponent_section_32_Template_section_click_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r214); const category_r10 = restoredCtx.$implicit; const i_r11 = restoredCtx.index; const ctx_r213 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r213.scrollTo(category_r10, i_r11)); });
    i0.ɵɵelementStart(1, "div", 23)(2, "button", 24);
    i0.ɵɵlistener("click", function TemplateProfileCreateComponent_section_32_Template_button_click_2_listener($event) { $event.preventDefault(); return $event.stopPropagation(); });
    i0.ɵɵelementStart(3, "mat-icon", 25);
    i0.ɵɵtext(4, "drag_indicator");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(5, "div", 26)(6, "div", 27)(7, "div")(8, "p", 28);
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "p", 29);
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(12, "button", 30);
    i0.ɵɵlistener("click", function TemplateProfileCreateComponent_section_32_Template_button_click_12_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r214); const category_r10 = restoredCtx.$implicit; const i_r11 = restoredCtx.index; const ctx_r216 = i0.ɵɵnextContext(); $event.stopPropagation(); return i0.ɵɵresetView(ctx_r216.onExpendMore({ event: $event, field: category_r10 }, i_r11)); });
    i0.ɵɵtemplate(13, TemplateProfileCreateComponent_section_32_mat_icon_13_Template, 2, 0, "mat-icon", 5);
    i0.ɵɵtemplate(14, TemplateProfileCreateComponent_section_32_mat_icon_14_Template, 2, 0, "mat-icon", 5);
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(15, TemplateProfileCreateComponent_section_32_div_15_Template, 2, 1, "div", 31);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const category_r10 = ctx.$implicit;
    const i_r11 = ctx.index;
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵclassMap(ctx_r3.editIndex === i_r11 ? "active" : "");
    i0.ɵɵstyleProp("padding-bottom", category_r10.expandMore ? "50px" : "10px");
    i0.ɵɵproperty("id", category_r10.name);
    i0.ɵɵadvance(9);
    i0.ɵɵtextInterpolate1(" ", category_r10.name, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2(" ", ctx_r3.locale == null ? null : ctx_r3.locale.CATEGORY_SUBTITLE, " ", ctx_r3.catNameStart(category_r10.name) ? "l'" + category_r10.name : category_r10.name, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", !category_r10.expandMore);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", category_r10.expandMore);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", category_r10.forms);
} }
function TemplateProfileCreateComponent_div_41_ng_container_32_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r227 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 104)(1, "mat-slide-toggle", 105);
    i0.ɵɵlistener("ngModelChange", function TemplateProfileCreateComponent_div_41_ng_container_32_div_6_Template_mat_slide_toggle_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r227); const ctx_r226 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r226.currentEditBlock.defaultValue = $event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "span", 106);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r218 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", ctx_r218.currentEditBlock.defaultValue)("ngModelOptions", i0.ɵɵpureFunction0(3, _c0));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r218.locale == null ? null : ctx_r218.locale.DEFAULT_VALUE);
} }
function TemplateProfileCreateComponent_div_41_ng_container_32_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r229 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 107)(1, "mat-checkbox", 108);
    i0.ɵɵlistener("ngModelChange", function TemplateProfileCreateComponent_div_41_ng_container_32_div_7_Template_mat_checkbox_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r229); const ctx_r228 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r228.currentEditBlock.value = $event); });
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r219 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", ctx_r219.currentEditBlock.value)("ngModelOptions", i0.ɵɵpureFunction0(3, _c0));
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r219.locale == null ? null : ctx_r219.locale.DEFAULT_CHECKED, " ");
} }
function TemplateProfileCreateComponent_div_41_ng_container_32_mat_form_field_8_mat_chip_6_Template(rf, ctx) { if (rf & 1) {
    const _r236 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-chip", 115);
    i0.ɵɵlistener("dblclick", function TemplateProfileCreateComponent_div_41_ng_container_32_mat_form_field_8_mat_chip_6_Template_mat_chip_dblclick_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r236); const option_r234 = restoredCtx.$implicit; const ctx_r235 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r235.onCheckedChipBlock(option_r234, ctx_r235.currentEditBlock)); })("click", function TemplateProfileCreateComponent_div_41_ng_container_32_mat_form_field_8_mat_chip_6_Template_mat_chip_click_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r236); const option_r234 = restoredCtx.$implicit; const ctx_r237 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r237.onEditChip(option_r234)); })("removed", function TemplateProfileCreateComponent_div_41_ng_container_32_mat_form_field_8_mat_chip_6_Template_mat_chip_removed_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r236); const option_r234 = restoredCtx.$implicit; const ctx_r238 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r238.removeKeywordBlock(option_r234, ctx_r238.currentEditBlock)); });
    i0.ɵɵtext(1);
    i0.ɵɵelementStart(2, "mat-icon", 116);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const option_r234 = ctx.$implicit;
    const ctx_r232 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("selected", option_r234.checked)("value", option_r234.value)("removable", true);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", option_r234.value, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r232.locale == null ? null : ctx_r232.locale.CANCEL);
} }
function TemplateProfileCreateComponent_div_41_ng_container_32_mat_form_field_8_Template(rf, ctx) { if (rf & 1) {
    const _r240 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-form-field", 109)(1, "mat-label");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "mat-chip-list", 110, 111);
    i0.ɵɵlistener("cdkDropListDropped", function TemplateProfileCreateComponent_div_41_ng_container_32_mat_form_field_8_Template_mat_chip_list_cdkDropListDropped_3_listener($event) { i0.ɵɵrestoreView(_r240); const ctx_r239 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r239.drop($event)); });
    i0.ɵɵtemplate(6, TemplateProfileCreateComponent_div_41_ng_container_32_mat_form_field_8_mat_chip_6_Template, 4, 5, "mat-chip", 112);
    i0.ɵɵelementStart(7, "input", 113, 114);
    i0.ɵɵlistener("matChipInputTokenEnd", function TemplateProfileCreateComponent_div_41_ng_container_32_mat_form_field_8_Template_input_matChipInputTokenEnd_7_listener($event) { i0.ɵɵrestoreView(_r240); const ctx_r241 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r241.addKeywordFromInputBlock($event, ctx_r241.currentEditBlock, ctx_r241.prevValue)); })("keyup", function TemplateProfileCreateComponent_div_41_ng_container_32_mat_form_field_8_Template_input_keyup_7_listener($event) { i0.ɵɵrestoreView(_r240); const ctx_r242 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r242.onKeyUpChip($event, ctx_r242.currentEditBlock)); })("ngModelChange", function TemplateProfileCreateComponent_div_41_ng_container_32_mat_form_field_8_Template_input_ngModelChange_7_listener($event) { i0.ɵɵrestoreView(_r240); const ctx_r243 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r243.currentChip = $event); });
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const _r231 = i0.ɵɵreference(5);
    const ctx_r220 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r220.locale == null ? null : ctx_r220.locale.DEFAULT_VALUE, " ");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("cdkDropListData", ctx_r220.currentEditBlock.defaultValue);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", ctx_r220.currentEditBlock.defaultValue);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("matChipInputFor", _r231)("matChipInputAddOnBlur", true)("matChipInputSeparatorKeyCodes", ctx_r220.separatorKeysCodes)("ngModel", ctx_r220.currentChip)("ngModelOptions", i0.ɵɵpureFunction0(8, _c0));
} }
function TemplateProfileCreateComponent_div_41_ng_container_32_mat_form_field_9_Template(rf, ctx) { if (rf & 1) {
    const _r245 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-form-field", 87)(1, "mat-label");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "input", 117);
    i0.ɵɵlistener("ngModelChange", function TemplateProfileCreateComponent_div_41_ng_container_32_mat_form_field_9_Template_input_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r245); const ctx_r244 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r244.currentEditBlock.defaultValue = $event); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r221 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r221.locale == null ? null : ctx_r221.locale.DEFAULT_VALUE);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModelOptions", i0.ɵɵpureFunction0(3, _c0))("ngModel", ctx_r221.currentEditBlock.defaultValue);
} }
function TemplateProfileCreateComponent_div_41_ng_container_32_mat_form_field_10_Template(rf, ctx) { if (rf & 1) {
    const _r247 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-form-field", 87)(1, "mat-label");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "input", 118);
    i0.ɵɵlistener("ngModelChange", function TemplateProfileCreateComponent_div_41_ng_container_32_mat_form_field_10_Template_input_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r247); const ctx_r246 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r246.currentEditBlock.defaultValue = $event); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r222 = i0.ɵɵnextContext(3);
    i0.ɵɵstyleProp("opacity", ctx_r222.currentEditBlock.type !== "tel" ? 1 : 0);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r222.locale == null ? null : ctx_r222.locale.DEFAULT_VALUE);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("type", ctx_r222.currentEditBlock.type)("disabled", ctx_r222.currentEditBlock.type === "tel")("ngModelOptions", i0.ɵɵpureFunction0(7, _c0))("ngModel", ctx_r222.currentEditBlock.defaultValue);
} }
function TemplateProfileCreateComponent_div_41_ng_container_32_ng_container_21_mat_option_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 123);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r252 = ctx.$implicit;
    i0.ɵɵproperty("value", item_r252.key);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1("", item_r252.label, " ");
} }
function TemplateProfileCreateComponent_div_41_ng_container_32_ng_container_21_mat_form_field_6_mat_option_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 123);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r254 = ctx.$implicit;
    i0.ɵɵproperty("value", item_r254.key);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1("", item_r254.label, " ");
} }
function TemplateProfileCreateComponent_div_41_ng_container_32_ng_container_21_mat_form_field_6_Template(rf, ctx) { if (rf & 1) {
    const _r256 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-form-field", 119)(1, "mat-label");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "mat-select", 120);
    i0.ɵɵlistener("ngModelChange", function TemplateProfileCreateComponent_div_41_ng_container_32_ng_container_21_mat_form_field_6_Template_mat_select_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r256); const ctx_r255 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r255.s1 = $event); })("selectionChange", function TemplateProfileCreateComponent_div_41_ng_container_32_ng_container_21_mat_form_field_6_Template_mat_select_selectionChange_3_listener($event) { i0.ɵɵrestoreView(_r256); const ctx_r257 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r257.onSelectCondition("s1", "s2", $event.value)); });
    i0.ɵɵtemplate(4, TemplateProfileCreateComponent_div_41_ng_container_32_ng_container_21_mat_form_field_6_mat_option_4_Template, 2, 2, "mat-option", 121);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r249 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", ctx_r249.locale == null ? null : ctx_r249.locale.SELECT_SUB_CATEGORY, " (s1)");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", ctx_r249.s1)("ngModelOptions", i0.ɵɵpureFunction0(4, _c0));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r249.conditionData.s1);
} }
function TemplateProfileCreateComponent_div_41_ng_container_32_ng_container_21_mat_form_field_7_mat_option_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 123);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r259 = ctx.$implicit;
    i0.ɵɵproperty("value", item_r259.key);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1("", item_r259.label, " ");
} }
function TemplateProfileCreateComponent_div_41_ng_container_32_ng_container_21_mat_form_field_7_Template(rf, ctx) { if (rf & 1) {
    const _r261 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-form-field", 119)(1, "mat-label");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "mat-select", 120);
    i0.ɵɵlistener("ngModelChange", function TemplateProfileCreateComponent_div_41_ng_container_32_ng_container_21_mat_form_field_7_Template_mat_select_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r261); const ctx_r260 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r260.s2 = $event); })("selectionChange", function TemplateProfileCreateComponent_div_41_ng_container_32_ng_container_21_mat_form_field_7_Template_mat_select_selectionChange_3_listener($event) { i0.ɵɵrestoreView(_r261); const ctx_r262 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r262.onSelectCondition("s2", "s3", $event.value)); });
    i0.ɵɵtemplate(4, TemplateProfileCreateComponent_div_41_ng_container_32_ng_container_21_mat_form_field_7_mat_option_4_Template, 2, 2, "mat-option", 121);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r250 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", ctx_r250.locale == null ? null : ctx_r250.locale.SELECT_SUB_CATEGORY, " (s2)");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", ctx_r250.s2)("ngModelOptions", i0.ɵɵpureFunction0(4, _c0));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r250.conditionData.s2);
} }
function TemplateProfileCreateComponent_div_41_ng_container_32_ng_container_21_mat_form_field_8_mat_option_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 123);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r264 = ctx.$implicit;
    i0.ɵɵproperty("value", item_r264.key);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1("", item_r264.label, " ");
} }
function TemplateProfileCreateComponent_div_41_ng_container_32_ng_container_21_mat_form_field_8_Template(rf, ctx) { if (rf & 1) {
    const _r266 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-form-field", 119)(1, "mat-label");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "mat-select", 120);
    i0.ɵɵlistener("ngModelChange", function TemplateProfileCreateComponent_div_41_ng_container_32_ng_container_21_mat_form_field_8_Template_mat_select_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r266); const ctx_r265 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r265.s3 = $event); })("selectionChange", function TemplateProfileCreateComponent_div_41_ng_container_32_ng_container_21_mat_form_field_8_Template_mat_select_selectionChange_3_listener($event) { i0.ɵɵrestoreView(_r266); const ctx_r267 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r267.onSelectCondition("s3", "s4", $event.value)); });
    i0.ɵɵtemplate(4, TemplateProfileCreateComponent_div_41_ng_container_32_ng_container_21_mat_form_field_8_mat_option_4_Template, 2, 2, "mat-option", 121);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r251 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", ctx_r251.locale == null ? null : ctx_r251.locale.SELECT_SUB_CATEGORY, " (s3)");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", ctx_r251.s3)("ngModelOptions", i0.ɵɵpureFunction0(4, _c0));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r251.conditionData.s3);
} }
function TemplateProfileCreateComponent_div_41_ng_container_32_ng_container_21_Template(rf, ctx) { if (rf & 1) {
    const _r269 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "mat-form-field", 119)(2, "mat-label");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "mat-select", 120);
    i0.ɵɵlistener("ngModelChange", function TemplateProfileCreateComponent_div_41_ng_container_32_ng_container_21_Template_mat_select_ngModelChange_4_listener($event) { i0.ɵɵrestoreView(_r269); const ctx_r268 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r268.all = $event); })("selectionChange", function TemplateProfileCreateComponent_div_41_ng_container_32_ng_container_21_Template_mat_select_selectionChange_4_listener($event) { i0.ɵɵrestoreView(_r269); const ctx_r270 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r270.onSelectCondition("all", "s1", $event.value)); });
    i0.ɵɵtemplate(5, TemplateProfileCreateComponent_div_41_ng_container_32_ng_container_21_mat_option_5_Template, 2, 2, "mat-option", 121);
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(6, TemplateProfileCreateComponent_div_41_ng_container_32_ng_container_21_mat_form_field_6_Template, 5, 5, "mat-form-field", 122);
    i0.ɵɵtemplate(7, TemplateProfileCreateComponent_div_41_ng_container_32_ng_container_21_mat_form_field_7_Template, 5, 5, "mat-form-field", 122);
    i0.ɵɵtemplate(8, TemplateProfileCreateComponent_div_41_ng_container_32_ng_container_21_mat_form_field_8_Template, 5, 5, "mat-form-field", 122);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r223 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r223.locale == null ? null : ctx_r223.locale.SELECT_CATEGORY);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", ctx_r223.all)("ngModelOptions", i0.ɵɵpureFunction0(7, _c0));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r223.conditionData.all);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", (ctx_r223.conditionData.s1 == null ? null : ctx_r223.conditionData.s1.length) > 0);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", (ctx_r223.conditionData.s2 == null ? null : ctx_r223.conditionData.s2.length) > 0);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", (ctx_r223.conditionData.s3 == null ? null : ctx_r223.conditionData.s3.length) > 0);
} }
function TemplateProfileCreateComponent_div_41_ng_container_32_mat_radio_group_22_mat_radio_button_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-radio-button", 126);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r272 = ctx.$implicit;
    i0.ɵɵproperty("value", item_r272.value);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", item_r272.value, " ");
} }
function TemplateProfileCreateComponent_div_41_ng_container_32_mat_radio_group_22_Template(rf, ctx) { if (rf & 1) {
    const _r274 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-radio-group", 124);
    i0.ɵɵlistener("ngModelChange", function TemplateProfileCreateComponent_div_41_ng_container_32_mat_radio_group_22_Template_mat_radio_group_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r274); const ctx_r273 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r273.currentEditBlock.condition.value = $event); });
    i0.ɵɵtemplate(1, TemplateProfileCreateComponent_div_41_ng_container_32_mat_radio_group_22_mat_radio_button_1_Template, 2, 2, "mat-radio-button", 125);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r224 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("ngModel", ctx_r224.currentEditBlock.condition.value)("ngModelOptions", i0.ɵɵpureFunction0(3, _c0));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r224.onGetDefaultValue());
} }
function TemplateProfileCreateComponent_div_41_ng_container_32_button_24_Template(rf, ctx) { if (rf & 1) {
    const _r276 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 102);
    i0.ɵɵlistener("click", function TemplateProfileCreateComponent_div_41_ng_container_32_button_24_Template_button_click_0_listener($event) { i0.ɵɵrestoreView(_r276); const ctx_r275 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r275.onAddNewSubLevelFieldBlock($event)); });
    i0.ɵɵtext(1);
    i0.ɵɵelementStart(2, "mat-icon");
    i0.ɵɵtext(3, "device_hub ");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r225 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("disabled", !ctx_r225.currentEditBlock.editable);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1("", ctx_r225.locale == null ? null : ctx_r225.locale.SUB_CATEGORY, " ");
} }
const _c2 = function () { return ["select", "radio", "checkbox_multiple"]; };
function TemplateProfileCreateComponent_div_41_ng_container_32_Template(rf, ctx) { if (rf & 1) {
    const _r278 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "mat-form-field", 87)(2, "mat-label");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "input", 88);
    i0.ɵɵlistener("ngModelChange", function TemplateProfileCreateComponent_div_41_ng_container_32_Template_input_ngModelChange_4_listener($event) { i0.ɵɵrestoreView(_r278); const ctx_r277 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r277.currentEditBlock.label = $event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementContainerStart(5, 89);
    i0.ɵɵtemplate(6, TemplateProfileCreateComponent_div_41_ng_container_32_div_6_Template, 4, 4, "div", 90);
    i0.ɵɵtemplate(7, TemplateProfileCreateComponent_div_41_ng_container_32_div_7_Template, 3, 4, "div", 91);
    i0.ɵɵtemplate(8, TemplateProfileCreateComponent_div_41_ng_container_32_mat_form_field_8_Template, 9, 9, "mat-form-field", 92);
    i0.ɵɵtemplate(9, TemplateProfileCreateComponent_div_41_ng_container_32_mat_form_field_9_Template, 4, 4, "mat-form-field", 93);
    i0.ɵɵtemplate(10, TemplateProfileCreateComponent_div_41_ng_container_32_mat_form_field_10_Template, 4, 8, "mat-form-field", 94);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementStart(11, "div", 95)(12, "div", 96)(13, "span");
    i0.ɵɵtext(14);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "mat-slide-toggle", 97);
    i0.ɵɵlistener("ngModelChange", function TemplateProfileCreateComponent_div_41_ng_container_32_Template_mat_slide_toggle_ngModelChange_15_listener($event) { i0.ɵɵrestoreView(_r278); const ctx_r279 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r279.currentEditBlock.isMandatory = $event); });
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(16, "div", 98)(17, "div", 96)(18, "span");
    i0.ɵɵtext(19);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(20, "mat-slide-toggle", 97);
    i0.ɵɵlistener("ngModelChange", function TemplateProfileCreateComponent_div_41_ng_container_32_Template_mat_slide_toggle_ngModelChange_20_listener($event) { i0.ɵɵrestoreView(_r278); const ctx_r280 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r280.currentEditBlock.isConditional = $event); });
    i0.ɵɵelementEnd()()();
    i0.ɵɵtemplate(21, TemplateProfileCreateComponent_div_41_ng_container_32_ng_container_21_Template, 9, 8, "ng-container", 5);
    i0.ɵɵtemplate(22, TemplateProfileCreateComponent_div_41_ng_container_32_mat_radio_group_22_Template, 2, 4, "mat-radio-group", 99);
    i0.ɵɵelementStart(23, "div", 100);
    i0.ɵɵtemplate(24, TemplateProfileCreateComponent_div_41_ng_container_32_button_24_Template, 4, 2, "button", 101);
    i0.ɵɵelementStart(25, "button", 102);
    i0.ɵɵlistener("click", function TemplateProfileCreateComponent_div_41_ng_container_32_Template_button_click_25_listener($event) { i0.ɵɵrestoreView(_r278); const ctx_r281 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r281.onDuplicatedBlock($event)); });
    i0.ɵɵtext(26);
    i0.ɵɵelementStart(27, "mat-icon");
    i0.ɵɵtext(28, "filter_none");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(29, "button", 103);
    i0.ɵɵlistener("click", function TemplateProfileCreateComponent_div_41_ng_container_32_Template_button_click_29_listener($event) { i0.ɵɵrestoreView(_r278); const ctx_r282 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r282.onRemoveFieldBlock($event)); });
    i0.ɵɵtext(30);
    i0.ɵɵelementStart(31, "mat-icon");
    i0.ɵɵtext(32, " delete ");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r217 = i0.ɵɵnextContext(2);
    let tmp_15_0;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r217.locale == null ? null : ctx_r217.locale.NAME_LABEL);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", ctx_r217.currentEditBlock.label)("ngModelOptions", i0.ɵɵpureFunction0(21, _c0));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitch", ctx_r217.currentEditBlock.type);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", "toggle");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", "checkbox");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", i0.ɵɵpureFunction0(22, _c2).includes(ctx_r217.currentEditBlock.type) ? ctx_r217.currentEditBlock.type : !ctx_r217.currentEditBlock.type);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", "textarea");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r217.locale == null ? null : ctx_r217.locale.REQUIRED);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", ctx_r217.currentEditBlock.isMandatory)("ngModelOptions", i0.ɵɵpureFunction0(23, _c0));
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r217.locale == null ? null : ctx_r217.locale.CONDITIONAL_VISIBILITY);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", ctx_r217.currentEditBlock.isConditional)("ngModelOptions", i0.ɵɵpureFunction0(24, _c0));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r217.currentEditBlock == null ? null : ctx_r217.currentEditBlock.isConditional);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r217.currentEditBlock.isConditional && ctx_r217.onGetDefaultValue() && ((tmp_15_0 = ctx_r217.onGetDefaultValue()) == null ? null : tmp_15_0.length) > 0);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r217.paramsIndex.length < 4);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("disabled", !ctx_r217.currentEditBlock.editable);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r217.locale == null ? null : ctx_r217.locale.DUPLICATE_BLOCK);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("disabled", !ctx_r217.currentEditBlock.editable);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1("", ctx_r217.locale == null ? null : ctx_r217.locale.DELETE_BLOCK, " ");
} }
function TemplateProfileCreateComponent_div_41_Template(rf, ctx) { if (rf & 1) {
    const _r284 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 71)(1, "h3");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 72)(4, "mat-form-field", 73)(5, "mat-label");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "mat-select", 74);
    i0.ɵɵlistener("click", function TemplateProfileCreateComponent_div_41_Template_mat_select_click_7_listener() { i0.ɵɵrestoreView(_r284); const ctx_r283 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r283.onOpenTypeDialog(ctx_r283.currentEditBlock)); })("ngModelChange", function TemplateProfileCreateComponent_div_41_Template_mat_select_ngModelChange_7_listener($event) { i0.ɵɵrestoreView(_r284); const ctx_r285 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r285.currentEditBlock.type = $event); })("ngModelChange", function TemplateProfileCreateComponent_div_41_Template_mat_select_ngModelChange_7_listener() { i0.ɵɵrestoreView(_r284); const ctx_r286 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r286.onChangeTypeBlock(ctx_r286.currentEditBlock)); });
    i0.ɵɵelementStart(8, "mat-option", 75);
    i0.ɵɵtext(9, "Text(80)");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "mat-option", 76);
    i0.ɵɵtext(11, "Text(80+)");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "mat-option", 77);
    i0.ɵɵtext(13, "Radio");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "mat-option", 78);
    i0.ɵɵtext(15, "Selector");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "mat-option", 79);
    i0.ɵɵtext(17, "Toggle");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "mat-option", 80);
    i0.ɵɵtext(19, "Checkbox");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(20, "mat-option", 81);
    i0.ɵɵtext(21, "Checkbox multiple");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(22, "mat-option", 82);
    i0.ɵɵtext(23, "Email");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(24, "mat-option", 83);
    i0.ɵɵtext(25, "Password");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(26, "mat-option", 84);
    i0.ɵɵtext(27, "Date");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(28, "mat-option", 85);
    i0.ɵɵtext(29, "Phone");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(30, "mat-option", 86);
    i0.ɵɵtext(31, "None");
    i0.ɵɵelementEnd()()();
    i0.ɵɵtemplate(32, TemplateProfileCreateComponent_div_41_ng_container_32_Template, 33, 25, "ng-container", 5);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("", ctx_r4.locale == null ? null : ctx_r4.locale.SETTING_OF_BLOCK, " ", ctx_r4.currentEditBlock.label, "");
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r4.locale == null ? null : ctx_r4.locale.TYPE_OF_BLOCK);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", ctx_r4.currentEditBlock.type)("ngModelOptions", i0.ɵɵpureFunction0(6, _c0));
    i0.ɵɵadvance(25);
    i0.ɵɵproperty("ngIf", ctx_r4.currentEditBlock.type !== "none");
} }
function TemplateProfileCreateComponent_div_42_mat_option_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 123);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r288 = ctx.$implicit;
    i0.ɵɵproperty("value", item_r288.value);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(item_r288.value);
} }
function TemplateProfileCreateComponent_div_42_Template(rf, ctx) { if (rf & 1) {
    const _r290 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 71)(1, "h3");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 127)(4, "mat-form-field", 87)(5, "mat-label");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "input", 88);
    i0.ɵɵlistener("ngModelChange", function TemplateProfileCreateComponent_div_42_Template_input_ngModelChange_7_listener() { i0.ɵɵrestoreView(_r290); const ctx_r289 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r289.onChangeCategoryName()); })("ngModelChange", function TemplateProfileCreateComponent_div_42_Template_input_ngModelChange_7_listener($event) { i0.ɵɵrestoreView(_r290); const ctx_r291 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r291.currentEditBlock.name = $event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(8, "mat-form-field", 119)(9, "mat-label");
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "mat-select", 128);
    i0.ɵɵlistener("ngModelChange", function TemplateProfileCreateComponent_div_42_Template_mat_select_ngModelChange_11_listener($event) { i0.ɵɵrestoreView(_r290); const ctx_r292 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r292.currentEditBlock.selector.value = $event); });
    i0.ɵɵtemplate(12, TemplateProfileCreateComponent_div_42_mat_option_12_Template, 2, 2, "mat-option", 121);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(13, "div", 100)(14, "button", 129);
    i0.ɵɵlistener("click", function TemplateProfileCreateComponent_div_42_Template_button_click_14_listener($event) { i0.ɵɵrestoreView(_r290); const ctx_r293 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r293.onAddNewSubLevelFieldBlock($event)); });
    i0.ɵɵtext(15);
    i0.ɵɵelementStart(16, "mat-icon");
    i0.ɵɵtext(17, " device_hub ");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(18, "button", 129);
    i0.ɵɵlistener("click", function TemplateProfileCreateComponent_div_42_Template_button_click_18_listener($event) { i0.ɵɵrestoreView(_r290); const ctx_r294 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r294.onDuplicatedBlock($event)); });
    i0.ɵɵtext(19);
    i0.ɵɵelementStart(20, "mat-icon");
    i0.ɵɵtext(21, "filter_none ");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(22, "button", 103);
    i0.ɵɵlistener("click", function TemplateProfileCreateComponent_div_42_Template_button_click_22_listener($event) { i0.ɵɵrestoreView(_r290); const ctx_r295 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r295.onRemoveFieldBlock($event)); });
    i0.ɵɵtext(23);
    i0.ɵɵelementStart(24, "mat-icon");
    i0.ɵɵtext(25, " delete");
    i0.ɵɵelementEnd()()()()();
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("", ctx_r5.locale == null ? null : ctx_r5.locale.SECTION_SETTING, " ", ctx_r5.currentEditBlock.name, "");
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r5.locale == null ? null : ctx_r5.locale.SECTION_NAME);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", ctx_r5.currentEditBlock.name)("ngModelOptions", i0.ɵɵpureFunction0(13, _c0));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r5.locale == null ? null : ctx_r5.locale.MANAGEMENT_TEAM);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", ctx_r5.currentEditBlock.selector.value)("ngModelOptions", i0.ɵɵpureFunction0(14, _c0));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r5.currentEditBlock.selector.defaultValue);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("", ctx_r5.locale == null ? null : ctx_r5.locale.SUB_CATEGORY, " ");
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r5.locale == null ? null : ctx_r5.locale.DUPLICATE_BLOCK);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("disabled", !ctx_r5.currentEditBlock.editable);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1("", ctx_r5.locale == null ? null : ctx_r5.locale.DELETE_BLOCK, " ");
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
        this.locale = {};
        this.liveLabel = this.locale.PUBLISH_PROFIL;
        this.draftLabel = this.locale.REGISTER_DRAFT;
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
        this.service._lang.subscribe((locale) => {
            this.locale = locales[locale].PROFILE;
            this.liveLabel = this.locale.PUBLISH_PROFIL;
            this.draftLabel = this.locale.REGISTER_DRAFT;
        });
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
            }
            if (isPublish) {
                this.liveLabel = "Publier le profil";
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
    scrollTo(category, i) {
        this.onActiveMenu(category, i);
        if (!category.expandMore) {
            let el = document.getElementById(category.name);
            el.scrollIntoView({
                behavior: 'smooth'
            });
            this.onExpendMore({ field: category }, i);
        }
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
    dropField(event) {
        const containerData = event.container.data;
        const previousContainerData = event.previousContainer.data;
        const category = containerData.category;
        category.forms[previousContainerData.index] = containerData.field;
        category.forms[containerData.index] = previousContainerData.field;
        console.log('containerData.field', containerData.field);
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
    onActiveMenu(cat, i) {
        this.editIndex = i;
        this.paramsIndex = [i];
        this.isSection = true;
        this.isBlock = false;
        this.currentEditBlock = cat;
    }
    catNameStart(str) {
        const vowels = ['a', 'e', 'i', 'o', 'u', 'y'];
        return vowels.includes(str.substr(0, 1).toLocaleLowerCase());
    }
    onEditBlock(block, ...params) {
        this.isBlock = true;
        this.currentEditBlock = block;
        const { condition } = this.currentEditBlock;
        if (condition && condition.location) {
            const location = condition.location;
            if (location?.s0Index >= 0) {
                this.all = this.categories[location.s0Index].key;
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
                const lastAction = this.historics[current];
                const params = lastAction.params;
                const length = params.length;
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
                const lastAction = this.historics[this.currentCanceledIndex];
                const params = lastAction.params;
                const length = params.length;
                const forms = length === 1 ? this.categories : length === 2 ? this.categories[params[0]].forms[params[1]].forms : this.categories[params[0]].forms[params[1]].forms[params[2]].forms;
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
        this.historics.push(data);
    }
}
TemplateProfileCreateComponent.ɵfac = function TemplateProfileCreateComponent_Factory(t) { return new (t || TemplateProfileCreateComponent)(i0.ɵɵdirectiveInject(i1.UntypedFormBuilder), i0.ɵɵdirectiveInject(i2.OnboardingService), i0.ɵɵdirectiveInject(i3.ActivatedRoute), i0.ɵɵdirectiveInject(i3.Router), i0.ɵɵdirectiveInject(i4.MatDialog), i0.ɵɵdirectiveInject(i5.ScrollToService)); };
TemplateProfileCreateComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: TemplateProfileCreateComponent, selectors: [["onboarding-create-profile-template"]], hostBindings: function TemplateProfileCreateComponent_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("scroll", function TemplateProfileCreateComponent_scroll_HostBindingHandler($event) { return ctx.onScroll($event); });
    } }, decls: 43, vars: 14, consts: [[1, "header-create-profile"], [1, "header-create-profile-top"], [3, "click"], [1, "create-profile-action"], ["mat-button", "", "type", "submit", 1, "register-button", 3, "click"], [4, "ngIf"], ["mat-button", "", "type", "submit", 1, "register-button", "live-button", 3, "click"], ["mat-button", "", "type", "submit", 1, "register-button", "live-button", "forward", 3, "disabled", "click"], [1, "create-profile-menus"], ["class", "li-title", 3, "class", "id", "click", 4, "ngFor", "ngForOf"], ["mat-mini-fab", "", "color", "transparent", 3, "click"], [3, "formGroup"], ["cdkDropListGroup", "", 1, "category"], [1, "fields"], ["cdkDropList", "", "id", "categories-id", 1, "fields-inner", "example-list", "mt-10", 3, "cdkDropListData", "cdkDropListDropped", "scroll"], ["class", "category-item section-item", "cdkDrag", "", 3, "id", "paddingBottom", "class", "click", 4, "ngFor", "ngForOf"], [1, "add-button-container", "add-category-button", "add-step"], [2, "background-color", "transparent"], [2, "height", "400px"], [1, "field-property"], ["class", "property-content", 4, "ngIf"], [1, "li-title", 3, "id", "click"], ["cdkDrag", "", 1, "category-item", "section-item", 3, "id", "click"], ["cdkDragHandle", "", 1, "left-action", "move-icons"], ["mat-raised-button", "", 1, "transparent-button", 3, "click"], [1, "drag-icon"], [1, "field-content"], [1, "field-item"], [1, "full-width", "input-category-name"], [1, "sub-category-name"], ["mat-mini-fab", "", "color", "primary", 1, "expand-button", 3, "click"], ["class", "child-list", "cdkDropListGroup", "", 4, "ngIf"], ["cdkDropListGroup", "", 1, "child-list"], [4, "ngFor", "ngForOf"], ["cdkDropList", "", "cdkDropListOrientation", "horizontal'", 1, "field-box", 3, "id", "cdkDropListData", "cdkDropListDropped"], ["cdkDrag", "", 1, "dnd-box"], ["class", "dnd-placeholder", 4, "cdkDragPlaceholder"], [1, "fields-content"], ["class", "button-action", 4, "ngIf"], [1, "fields-container"], ["class", "sub-header", 4, "ngIf"], [3, "field", "length", "i", "j", "blink", "conditionData", "onCheckValue", "onAddKeywordFromInput", "onKeyPress", "onAddNewField", "onRemoveField", "onChangeType", "onRemoveKeyword", "onAddNewSubLevelField", "onExpendMore", "onChangeLabel", "onCheckedChip", "onDrop", "onCheckedDefault", "onEditBlock"], ["class", "child", 4, "ngIf"], ["class", "add-button-container add-button-sub-category", 4, "ngIf"], [1, "dnd-placeholder"], [1, "button-action"], [1, "sub-header"], ["mat-raised-button", "", 1, "transparent-button", "setting", 3, "click"], [1, "setting-icon"], ["mat-mini-fab", "", "color", "primary", 1, "expand-button", 3, "disabled", "click"], [1, "child"], ["class", "child-content", "cdkDropList", "", 3, "cdkDropListData", "cdkDropListDropped", 4, "ngIf"], ["cdkDropList", "", 1, "child-content", 3, "cdkDropListData", "cdkDropListDropped"], ["childList", "cdkDropList"], ["class", "", "style", "margin-bottom: 20px", 3, "id", "width", 4, "ngFor", "ngForOf"], [1, "", 2, "margin-bottom", "20px", 3, "id"], ["cdkDrag", ""], ["class", "button-action child-2-background", 4, "ngIf"], [3, "field", "length", "i", "blink", "j", "conditionData", "onCheckValue", "onAddKeywordFromInput", "onKeyPress", "onAddNewField", "onRemoveField", "onChangeType", "onRemoveKeyword", "onAddNewSubLevelField", "onExpendMore", "onChangeLabel", "onCheckedChip", "onDrop", "onCheckedDefault", "onEditBlock"], ["class", "add-button-sub-category", 4, "ngIf"], [1, "button-action", "child-2-background"], ["type", "text", "required", "", "placeholder", "Saisir le nom de la sous cat\u00E9gorie", 1, "full-width", "input-category-name", 3, "readonly", "ngModel", "ngModelOptions", "ngModelChange"], ["class", "", 3, "id", "width", 4, "ngFor", "ngForOf"], [1, "", 3, "id"], ["class", "button-action child-3-background", 4, "ngIf"], [3, "field", "length", "blink", "i", "j", "conditionData", "onCheckValue", "onAddKeywordFromInput", "onKeyPress", "onAddNewField", "onRemoveField", "onChangeType", "onRemoveKeyword", "onAddNewSubLevelField", "onExpendMore", "onChangeLabel", "onCheckedChip", "onDrop", "onCheckedDefault", "onEditBlock"], [1, "button-action", "child-3-background"], [1, "add-button-sub-category"], ["mat-raised-button", "", "color", "primary", 2, "margin", "10px auto", 3, "click"], [1, "add-button-container", "add-button-sub-category"], ["mat-raised-button", "", "color", "primary", 1, "add-button", 2, "margin", "10px auto", "padding", "10px 0", 3, "disabled", "click"], [1, "property-content"], [1, "property-content-inner", 2, "width", "100%"], ["appearance", "outline", 1, "form-field", "mat-select", "full-width", 2, "cursor", "pointer"], ["disabled", "true", "required", "", 1, "select-type-class", 3, "ngModel", "ngModelOptions", "click", "ngModelChange"], ["value", "text"], ["value", "textarea"], ["value", "radio"], ["value", "select"], ["value", "toggle"], ["value", "checkbox"], ["value", "checkbox_multiple"], ["value", "email"], ["value", "password"], ["value", "date"], ["value", "tel"], ["value", "none"], ["appearance", "outline", 1, "form-field", "full-width"], ["type", "text", "matInput", "", "required", "", "placeholder", "", 3, "ngModel", "ngModelOptions", "ngModelChange"], [3, "ngSwitch"], ["class", "flex-auto", "style", "display: flex;align-items: flex-end;margin: 10px 0;", 4, "ngSwitchCase"], ["class", "flex-auto", 4, "ngSwitchCase"], ["class", "flex-auto full-width", "appearance", "outline", 4, "ngSwitchCase"], ["class", "form-field full-width", "appearance", "outline", 4, "ngSwitchCase"], ["class", "form-field full-width", "appearance", "outline", 3, "opacity", 4, "ngSwitchDefault"], [1, "mandatory", "top-10", "bottom-10"], [1, "toogle-button"], ["color", "#6FE8D7", 3, "ngModel", "ngModelOptions", "ngModelChange"], [1, "mandatory", "top-10"], ["aria-labelledby", "example-radio-group-label", "class", "example-radio-group", 3, "ngModel", "ngModelOptions", "ngModelChange", 4, "ngIf"], [1, "bloc-action"], ["mat-button", "", 3, "disabled", "click", 4, "ngIf"], ["mat-button", "", 3, "disabled", "click"], ["mat-button", "", 1, "delete-bloc", 3, "disabled", "click"], [1, "flex-auto", 2, "display", "flex", "align-items", "flex-end", "margin", "10px 0"], ["color", "#6FE8D7", 1, "form-field", 3, "ngModel", "ngModelOptions", "ngModelChange"], [2, "margin-left", "10px"], [1, "flex-auto"], [1, "form-field", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["appearance", "outline", 1, "flex-auto", "full-width"], ["cdkDropList", "", "aria-label", "Video keywords; let index=index", "multiple", "", "selectable", "", 3, "cdkDropListData", "cdkDropListDropped"], ["childList", "cdkDropList", "chipList", ""], ["style", "min-height: 25px;width: auto;", "cdkDrag", "", 3, "selected", "value", "removable", "dblclick", "click", "removed", 4, "ngFor", "ngForOf"], ["placeholder", "add...", 3, "matChipInputFor", "matChipInputAddOnBlur", "matChipInputSeparatorKeyCodes", "ngModel", "ngModelOptions", "matChipInputTokenEnd", "keyup", "ngModelChange"], ["chipsInput", ""], ["cdkDrag", "", 2, "min-height", "25px", "width", "auto", 3, "selected", "value", "removable", "dblclick", "click", "removed"], ["matChipRemove", ""], ["type", "text", "matInput", "", "placeholder", "Description...", 3, "ngModelOptions", "ngModel", "ngModelChange"], ["matInput", "", "placeholder", "", 3, "type", "disabled", "ngModelOptions", "ngModel", "ngModelChange"], ["appearance", "outline", 1, "form-field", "mat-select", "full-width"], [3, "ngModel", "ngModelOptions", "ngModelChange", "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], ["class", "form-field mat-select full-width", "appearance", "outline", 4, "ngIf"], [3, "value"], ["aria-labelledby", "example-radio-group-label", 1, "example-radio-group", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["class", "example-radio-button", "style", "margin-right: 10px", 3, "value", 4, "ngFor", "ngForOf"], [1, "example-radio-button", 2, "margin-right", "10px", 3, "value"], [1, "property-content-inner"], ["required", "", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["mat-button", "", 3, "click"]], template: function TemplateProfileCreateComponent_Template(rf, ctx) { if (rf & 1) {
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
        i0.ɵɵtemplate(23, TemplateProfileCreateComponent_li_23_Template, 2, 4, "li", 9);
        i0.ɵɵelementStart(24, "li")(25, "button", 10);
        i0.ɵɵlistener("click", function TemplateProfileCreateComponent_Template_button_click_25_listener($event) { return ctx.onAddNewCategory($event); });
        i0.ɵɵelementStart(26, "mat-icon");
        i0.ɵɵtext(27, "add");
        i0.ɵɵelementEnd()()()()()();
        i0.ɵɵelementStart(28, "form", 11)(29, "div", 12)(30, "div", 13)(31, "div", 14);
        i0.ɵɵlistener("cdkDropListDropped", function TemplateProfileCreateComponent_Template_div_cdkDropListDropped_31_listener($event) { return ctx.drop($event); })("scroll", function TemplateProfileCreateComponent_Template_div_scroll_31_listener($event) { return ctx.onScroll($event); });
        i0.ɵɵtemplate(32, TemplateProfileCreateComponent_section_32_Template, 16, 11, "section", 15);
        i0.ɵɵelementStart(33, "div", 16)(34, "button", 2);
        i0.ɵɵlistener("click", function TemplateProfileCreateComponent_Template_button_click_34_listener($event) { return ctx.onAddNewCategory($event); });
        i0.ɵɵtext(35);
        i0.ɵɵelementStart(36, "mat-icon");
        i0.ɵɵtext(37, "add");
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementStart(38, "section", 17);
        i0.ɵɵelement(39, "div", 18);
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementStart(40, "div", 19);
        i0.ɵɵtemplate(41, TemplateProfileCreateComponent_div_41_Template, 33, 7, "div", 20);
        i0.ɵɵtemplate(42, TemplateProfileCreateComponent_div_42_Template, 26, 15, "div", 20);
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
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx.categories);
        i0.ɵɵadvance(3);
        i0.ɵɵtextInterpolate1(" ", ctx.locale == null ? null : ctx.locale.ADD_STEP, " ");
        i0.ɵɵadvance(6);
        i0.ɵɵproperty("ngIf", ctx.isBlock && ctx.currentEditBlock);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.isSection && ctx.currentEditBlock);
    } }, dependencies: [i1.ɵNgNoValidate, i1.DefaultValueAccessor, i1.NgControlStatus, i1.NgControlStatusGroup, i1.RequiredValidator, i1.NgModel, i6.MatFormField, i6.MatLabel, i7.MatButton, i8.NgForOf, i8.NgIf, i8.NgSwitch, i8.NgSwitchCase, i8.NgSwitchDefault, i1.FormGroupDirective, i9.MatCheckbox, i10.MatIcon, i11.MatSelect, i12.MatOption, i13.MatInput, i14.MatChipList, i14.MatChip, i14.MatChipInput, i14.MatChipRemove, i15.MatRadioGroup, i15.MatRadioButton, i16.CdkDropList, i16.CdkDropListGroup, i16.CdkDrag, i16.CdkDragHandle, i16.CdkDragPlaceholder, i17.NativeElementInjectorDirective, i18.MatSlideToggle, i19.SubTemplateProfileComponent, i20.LoadingPageComponent], styles: ["main[_ngcontent-%COMP%]{background:#f4f7f9 0% 0% no-repeat padding-box;height:100vh;display:flex;flex-direction:column;align-items:center;padding:25px}main[_ngcontent-%COMP%]   .disabled[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{background-color:transparent!important}main[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{display:flex;height:89%;width:100%}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]{width:786px;margin-top:20vh;background:#ffffff 0% 0% no-repeat padding-box;border:1px solid #dce4e9;border-radius:6px;opacity:1;margin:auto;padding:0 25px;align-self:center}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{text-align:center;letter-spacing:0px;color:#171f26}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   label[_ngcontent-%COMP%], main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{letter-spacing:0px;color:#171f26}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .profil-name-content[_ngcontent-%COMP%]{display:flex;align-items:center;position:relative}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .profil-name-content[_ngcontent-%COMP%]   .add-picto[_ngcontent-%COMP%]{margin-right:15px;min-width:50px;width:30px;padding:9px 12px}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .profil-name-content[_ngcontent-%COMP%]   .add-picto[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin-right:10px}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .profil-name-content[_ngcontent-%COMP%]   .list-picto[_ngcontent-%COMP%]{position:absolute;height:200px;width:100%;background:#ffffff 0% 0% no-repeat padding-box;border:1px solid #171f26;border-radius:8px;top:100%;z-index:1}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .profil-name-content[_ngcontent-%COMP%]   .list-picto[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin:15px;border:none;font-size:40px}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .profil-name-content[_ngcontent-%COMP%]   .list-picto[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]:hover{color:#830b6b!important;cursor:pointer}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .box-title-content[_ngcontent-%COMP%]{width:100%;margin:25px auto}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{letter-spacing:0px;color:#171f26}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{letter-spacing:0px;color:#171f26;text-align:center}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .link-create-profil[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:center}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{text-align:center;border:1px solid #543cb6;border-radius:7px;color:#fff;padding:.7em 2em .5em;display:flex;align-items:center;background-color:transparent;letter-spacing:0px;color:#543cb6}main[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:space-between}main[_ngcontent-%COMP%]   .header-create-profile[_ngcontent-%COMP%]{width:100%;margin:10px 15px;border-radius:5px}main[_ngcontent-%COMP%]   .header-create-profile[_ngcontent-%COMP%]   .header-create-profile-top[_ngcontent-%COMP%]{display:flex;align-items:center;text-align:center;justify-content:space-between}main[_ngcontent-%COMP%]   .header-create-profile[_ngcontent-%COMP%]   .header-create-profile-top[_ngcontent-%COMP%]   .create-profile-action[_ngcontent-%COMP%]{display:flex;align-items:center;gap:25px}main[_ngcontent-%COMP%]   .header-create-profile[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:25px;padding-bottom:5px;display:flex;align-items:center;justify-content:center}main[_ngcontent-%COMP%]   .header-create-profile[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{text-overflow:ellipsis;white-space:nowrap;overflow:hidden;font-weight:700;font-size:24px;line-height:110%;text-align:center;color:#242731;text-transform:capitalize}main[_ngcontent-%COMP%]   .header-create-profile[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin-left:15px;cursor:pointer}main[_ngcontent-%COMP%]   .header-create-profile[_ngcontent-%COMP%]   .create-profile-menus[_ngcontent-%COMP%]{max-width:100%;overflow:auto}main[_ngcontent-%COMP%]   .header-create-profile[_ngcontent-%COMP%]   .create-profile-menus[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{font-weight:600;font-size:16px;list-style:none;display:flex;align-items:center;gap:20px;padding:0}main[_ngcontent-%COMP%]   .header-create-profile[_ngcontent-%COMP%]   .create-profile-menus[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{font-weight:400;font-size:12px;cursor:pointer;text-align:left;letter-spacing:0px;color:#535760}main[_ngcontent-%COMP%]   .header-create-profile[_ngcontent-%COMP%]   .create-profile-menus[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .mat-mini-fab[_ngcontent-%COMP%]{width:28px;height:28px;line-height:24px}main[_ngcontent-%COMP%]   .header-create-profile[_ngcontent-%COMP%]   .create-profile-menus[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.li-title[_ngcontent-%COMP%]:hover{border-bottom:2px solid #723CEB}main[_ngcontent-%COMP%]   .header-create-profile[_ngcontent-%COMP%]   .create-profile-menus[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.li-title.active[_ngcontent-%COMP%]{border-bottom:2px solid #723CEB;font-weight:600}.expand-button[_ngcontent-%COMP%]{color:#5a607f!important;background-color:transparent!important;box-shadow:none!important}.input-category-name[_ngcontent-%COMP%]{font-size:15px;font-weight:500;border:none;outline:none;text-align:left;color:#171f26;font-weight:700;font-size:20px;line-height:28px;color:#242731}.sub-category-name[_ngcontent-%COMP%]{font-style:normal;font-weight:250;font-size:14px;line-height:16px;display:flex;align-items:center;color:#575f6e;word-break:break-word}.full-width[_ngcontent-%COMP%]{width:100%}.field-action[_ngcontent-%COMP%]{width:10%}.field-size[_ngcontent-%COMP%]{width:90%;margin:auto 2% auto auto}  .mat-mini-fab .mat-button-wrapper{padding:0!important}  .mat-form-field-appearance-fill .mat-form-field-flex{background-color:#fff}  .mat-select.mat-form-field-appearance-outline .mat-form-field-infix{padding:.5em 0}  .mat-select{padding:8px 0}  .mat-form-field-appearance-fill .mat-form-field-underline:before{background-color:transparent}  .mat-form-field-wrapper{padding-bottom:0!important}[_nghost-%COMP%]     .input-category-name div.mat-form-field-outline-start, [_nghost-%COMP%]     .cdk-drag-preview .input-category-name div.mat-form-field-outline-start{border-color:0!important;border-width:0px!important}[_nghost-%COMP%]     .input-category-name .mat-form-field-outline-gap{border-color:0!important;border-width:0px!important}[_nghost-%COMP%]     .input-category-name .mat-form-field-outline-end{border-color:0!important;border-width:0px!important}[_nghost-%COMP%]     .input-category-name .mat-form-field-label-wrapper{display:none}[_nghost-%COMP%]     .input-category-name .mat-form-field-appearance-outline .mat-form-field-outline{color:transparent!important}[_nghost-%COMP%]     .input-category-name .mat-form-field-infix{border-top:none}.category-action[_ngcontent-%COMP%]{display:flex;width:100%}.delete-field[_ngcontent-%COMP%]{margin:auto 2%}.radio-group[_ngcontent-%COMP%]   .mat-radio-button[_ngcontent-%COMP%]{margin-right:10px}.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary[_ngcontent-%COMP%]{background-color:#3f51b5;color:#fff;min-height:20px;font-size:10px}.move-icons[_ngcontent-%COMP%]{cursor:move}[_nghost-%COMP%]     .child-list .dnd-box.cdk-drag-preview{width:100%!important;overflow:hidden;box-sizing:border-box;box-shadow:0 5px 5px -3px #0003,0 8px 10px 1px #00000024,0 3px 14px 2px #0000001f}[_nghost-%COMP%]     .child-list .cdk-drag-animating{transition:transform .25s cubic-bezier(0,0,.2,1)}[_nghost-%COMP%]     .child-list .field-box.cdk-drop-list-dragging .dnd-box:not(.cdk-drag-placeholder){transition:transform .25s cubic-bezier(0,0,.2,1)}[_nghost-%COMP%]     .child-list .cdk-drag.dnd-box.cdk-drag-dragging{min-width:185px}[_nghost-%COMP%]     .child-list .cdk-drag.dnd-box.cdk-drag-dragging>div{margin-bottom:15px!important;min-width:185px}[_nghost-%COMP%]     .child-list .cdk-drag.dnd-box.cdk-drag-dragging>div>div{min-width:185px}[_nghost-%COMP%]     .child-list .cdk-drag.dnd-box.cdk-drag-dragging>div .mat-form-field-wrapper{min-width:185px}[_nghost-%COMP%]     .child-list .field-box{min-height:84px}[_nghost-%COMP%]     .child-list .field-box .dnd-placeholder{margin:0 10px;padding:0;height:44px!important;max-height:44px!important;display:flex;flex-grow:1;align-items:baseline;position:relative;border-radius:8px;opacity:1!important;transform:translateZ(0)!important}[_nghost-%COMP%]     .child-list .cdk-drop-list-dragging>div.dnd-box{display:none}  .cdk-drag.dnd-box.cdk-drag-preview{height:68px;border-radius:0}  .cdk-drag.dnd-box.cdk-drag-preview .fields-container .field-item{margin:0;height:44px}  .cdk-drag.dnd-box.cdk-drag-preview .fields-container .field-item .mat-form-field-wrapper{height:44px}  .cdk-drag.dnd-box.cdk-drag-preview .fields-container .field-item .mat-form-field-wrapper .input-phone,   .cdk-drag.dnd-box.cdk-drag-preview .fields-container .field-item .mat-form-field-wrapper .mat-input-element,   .cdk-drag.dnd-box.cdk-drag-preview .fields-container .field-item .mat-form-field-wrapper .mat-select-value,   .cdk-drag.dnd-box.cdk-drag-preview .fields-container .field-item .mat-form-field-wrapper .mat-select-arrow-wrapper{opacity:0}.category-item[_ngcontent-%COMP%], .cdk-drag-placeholder[_ngcontent-%COMP%]{display:flex;align-items:baseline;position:relative;width:100%;border-radius:8px;background-color:#fff;margin-bottom:15px;margin-right:5px;padding:6px 15px}.category-item[_ngcontent-%COMP%]   .left-action[_ngcontent-%COMP%], .cdk-drag-placeholder[_ngcontent-%COMP%]   .left-action[_ngcontent-%COMP%]{height:auto;width:40px;align-self:baseline;border-top-left-radius:8px;border-bottom-left-radius:8px}.category-item[_ngcontent-%COMP%]   .left-action[_ngcontent-%COMP%]   .transparent-button[_ngcontent-%COMP%], .cdk-drag-placeholder[_ngcontent-%COMP%]   .left-action[_ngcontent-%COMP%]   .transparent-button[_ngcontent-%COMP%]{background-color:transparent;box-shadow:none;width:40px;padding:0;margin:0;min-width:auto;color:#fff}.category-item[_ngcontent-%COMP%]   .left-action[_ngcontent-%COMP%]   .transparent-button[_ngcontent-%COMP%]   .drag-icon[_ngcontent-%COMP%], .cdk-drag-placeholder[_ngcontent-%COMP%]   .left-action[_ngcontent-%COMP%]   .transparent-button[_ngcontent-%COMP%]   .drag-icon[_ngcontent-%COMP%]{color:#171f26;cursor:move;margin-right:15px}.category-item[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%], .cdk-drag-placeholder[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%]{width:calc(100% - 40px);align-self:center}.category-item[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%]   .child-list[_ngcontent-%COMP%], .cdk-drag-placeholder[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%]   .child-list[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;background-color:transparent;width:103%;position:relative;margin-left:-1.5%}.category-item[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%], .cdk-drag-placeholder[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:baseline;border:transparent!important}.category-item[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]   .mat-form-field-wrapper[_ngcontent-%COMP%]   .mat-form-field-flex[_ngcontent-%COMP%]   .mat-form-field-outline[_ngcontent-%COMP%], .cdk-drag-placeholder[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]   .mat-form-field-wrapper[_ngcontent-%COMP%]   .mat-form-field-flex[_ngcontent-%COMP%]   .mat-form-field-outline[_ngcontent-%COMP%]{color:transparent!important}.category-item[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%]   .mat-form-field-outline[_ngcontent-%COMP%], .cdk-drag-placeholder[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%]   .mat-form-field-outline[_ngcontent-%COMP%]{color:transparent!important}.field-box[_ngcontent-%COMP%]{margin-bottom:15px;display:flex;align-items:center}.cdk-drag-preview[_ngcontent-%COMP%]{box-sizing:border-box;border-radius:4px;opacity:1}.cdk-drag-preview[_ngcontent-%COMP%]   .expand-button[_ngcontent-%COMP%]{color:#5a607f!important;background-color:transparent!important;box-shadow:none!important;margin-right:6px!important}.cdk-drag-placeholder[_ngcontent-%COMP%]{opacity:0}.cdk-drag-animating[_ngcontent-%COMP%]{transition:transform .25s cubic-bezier(0,0,.2,1)}.example-list.cdk-drop-list-dragging[_ngcontent-%COMP%]   .category-item[_ngcontent-%COMP%]:not(.cdk-drag-placeholder){transition:transform .25s cubic-bezier(0,0,.2,1)}.child[_ngcontent-%COMP%]{margin-left:0}.child-content[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;margin-bottom:30px}.sub-category-forms[_ngcontent-%COMP%]{margin-bottom:0!important;margin-top:10px!important}.category[_ngcontent-%COMP%]{display:flex;flex-direction:row;width:100%;height:100%}.category[_ngcontent-%COMP%]   .fields[_ngcontent-%COMP%]{width:100%;overflow:hidden;overflow-x:hidden;position:relative;padding-top:10px;height:calc(100% - 10px)}.category[_ngcontent-%COMP%]   .fields[_ngcontent-%COMP%]   .fields-inner[_ngcontent-%COMP%]{max-height:100%;height:100%;width:100%;overflow:auto}.category[_ngcontent-%COMP%]   .fields[_ngcontent-%COMP%]   .add-category-button[_ngcontent-%COMP%]{position:relative!important;width:calc(100% - 40px)!important;padding:20px 0}.category[_ngcontent-%COMP%]   .fields[_ngcontent-%COMP%]   .add-category-button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin-left:10px}.category[_ngcontent-%COMP%]   .fields[_ngcontent-%COMP%]   .add-step[_ngcontent-%COMP%]{bottom:0!important;top:0!important;width:100%!important}.category[_ngcontent-%COMP%]   .disabled[_ngcontent-%COMP%]{background-color:#f4f7f9!important}.category[_ngcontent-%COMP%]   .expand-button[_ngcontent-%COMP%]{color:#5a607f!important;background-color:transparent!important;box-shadow:none!important;margin-right:6px!important}.category[_ngcontent-%COMP%]   .expand-button[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%]{font-size:40px}.category[_ngcontent-%COMP%]   .transparent-button[_ngcontent-%COMP%]{background-color:transparent;box-shadow:none;width:40px;padding:0;margin:0;margin-left:0!important;min-width:auto;color:#fff}.add-button-sub-category[_ngcontent-%COMP%]{width:93%;position:absolute;left:3%;bottom:-13px}.add-button-sub-category[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{width:100%}.add-button-container[_ngcontent-%COMP%]{background:#ffffff 0% 0% no-repeat padding-box;border-radius:8px;margin-top:10px;padding:10px 0;display:flex;justify-content:center;align-items:center;width:100%;margin-bottom:22px;position:absolute;left:0;top:100%}.add-button-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{display:flex;align-items:center;background-color:transparent;border:none;cursor:pointer;letter-spacing:0px;color:#000;box-shadow:none}.add-button-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{width:100%}.add-category[_ngcontent-%COMP%]{background-color:#fcfcfe;border-radius:5px;line-height:26px;margin-left:10px;margin-bottom:10px;letter-spacing:0px;color:#c2c8d5;width:92%}.field-content[_ngcontent-%COMP%]   .cdk-drag[_ngcontent-%COMP%]{width:100%}.cdk-drag[_ngcontent-%COMP%]{width:auto;position:relative}.cdk-drag[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]{display:flex;height:100%;width:100%;margin:0}.cdk-drag[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]   .button-action[_ngcontent-%COMP%]{align-self:baseline;margin-top:0;margin-left:3px;border-bottom-left-radius:8px;border-top-left-radius:8px}.cdk-drag[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]   .button-action[_ngcontent-%COMP%]   .transparent-button[_ngcontent-%COMP%]{background-color:transparent;box-shadow:none;width:40px;padding:0;margin:0;min-width:auto;color:#fff}.cdk-drag[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]   .button-action[_ngcontent-%COMP%]   .transparent-button[_ngcontent-%COMP%]   .drag-icon[_ngcontent-%COMP%]{color:#171f26;cursor:move;margin-right:15px}.cdk-drag[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]   .child-3-background[_ngcontent-%COMP%]{background-color:#e5e8ee!important}.cdk-drag[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]   .fields-container[_ngcontent-%COMP%]{border-radius:0 8px 8px 0;background-color:#fff;width:100%;padding-left:10px;padding-right:10px;padding-top:5px;position:relative;margin-bottom:10px}.cdk-drag[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]   .fields-container[_ngcontent-%COMP%]   lib-sub-category[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;width:100%}.cdk-drag[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]   .fields-container[_ngcontent-%COMP%]   lib-sub-category[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]   .button-action[_ngcontent-%COMP%]{background-color:#039be5!important;height:100%;margin:auto 15px auto auto;display:flex}.cdk-drag[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]   .fields-container[_ngcontent-%COMP%]   lib-sub-category[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]   .button-action[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{box-shadow:none;background-color:transparent;color:#fff}.side-bar[_ngcontent-%COMP%]{display:flex;flex-direction:column}.register-button[_ngcontent-%COMP%]{background:no-repeat padding-box #171f26!important;border:2px solid #171f26!important;color:#fff!important;box-shadow:0 0 #0003;border-radius:7px}.forward[_ngcontent-%COMP%]{padding:6px}.live-button[_ngcontent-%COMP%]{background-color:#fff!important;color:#171f26!important;border:2px solid #171f26!important}.content-item[_ngcontent-%COMP%]{transition-property:border-image-slice border-image-source border-width;transition-timing-function:ease-in-out;transition-duration:.5s}.active-content[_ngcontent-%COMP%]{border-image-slice:1;border-width:2px;border-image-source:linear-gradient(to left,#9d107d,#4862ab)}.field-property[_ngcontent-%COMP%]{padding:11px;height:calc(100% - 22px);width:400px}.field-property[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:20px;line-height:110%;padding-top:10px;display:flex;align-items:center;color:#242731}.field-property[_ngcontent-%COMP%]   .property-content[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:flex-start;padding:0 20px;background:#ffffff;border-radius:8px 8px 0 0;min-height:100%;height:auto;width:400px}.field-property[_ngcontent-%COMP%]   .property-content[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{text-align:center}.field-property[_ngcontent-%COMP%]   .property-content[_ngcontent-%COMP%]   .property-content-inner[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:25px;overflow:auto;max-height:700px;padding-bottom:25px}.field-property[_ngcontent-%COMP%]   .bloc-action[_ngcontent-%COMP%]{text-align:center}.field-property[_ngcontent-%COMP%]   .bloc-action[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:100%;padding:6px;margin-top:10px}.field-property[_ngcontent-%COMP%]   .bloc-action[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin-left:5px}.field-property[_ngcontent-%COMP%]   .bloc-action[_ngcontent-%COMP%]   .delete-bloc[_ngcontent-%COMP%]{background:#f44336;box-shadow:0 0 #0003;border-radius:7px;color:#fff}.fields-inner[_ngcontent-%COMP%]::-webkit-scrollbar{width:5px}.fields-inner[_ngcontent-%COMP%]::-webkit-scrollbar-track{box-shadow:inset 0 0 2px transparent;border-radius:10px}.fields-inner[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background:transparent;border-radius:10px}.fields-inner[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover{background:transparent}.toogle-button[_ngcontent-%COMP%]{color:#707273!important;display:flex;align-items:center;font-style:normal;font-weight:400;font-size:18px;line-height:18px}.toogle-button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{padding-right:10px}[_nghost-%COMP%]     .category .mat-slide-toggle.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar{background-color:#039be5;position:relative;width:42px;height:23px;flex-shrink:0;border-radius:14px}[_nghost-%COMP%]     .category .mat-slide-toggle:not(.mat-disabled) .mat-slide-toggle-bar{background-color:#707273}[_nghost-%COMP%]     .category .mat-slide-toggle:not(.mat-disabled) .mat-slide-toggle-bar{position:relative;width:42px;height:23px;flex-shrink:0;border-radius:14px}[_nghost-%COMP%]     .category .mat-slide-toggle.mat-checked:not(.mat-disabled) .mat-slide-toggle-thumb{background-color:#fff;margin-top:4px}[_nghost-%COMP%]     .category .mat-slide-toggle:not(.mat-disabled) .mat-slide-toggle-thumb{margin-top:4px;margin-left:4px}[_nghost-%COMP%]     .category .mat-slide-toggle.draft:not(.mat-disabled) .mat-slide-toggle-bar{background-color:#707273}[_nghost-%COMP%]     .category .mat-slide-toggle.draft.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar{background-color:#039be5}.top-10[_ngcontent-%COMP%]{margin-top:10px}.bottom-10[_ngcontent-%COMP%]{margin-bottom:10px}.section-item[_ngcontent-%COMP%]{border:2px solid transparent;overflow:hidden}.section-item[_ngcontent-%COMP%]:hover, .section-item.active[_ngcontent-%COMP%]{border:2px solid #242731;border-radius:8px;cursor:pointer}  .select-type-class.mat-select-disabled .mat-select-value{color:#000!important;cursor:pointer}  button .mat-button-wrapper{display:flex;align-items:center;justify-content:center}  .field-content .mat-form-field,   .field-content .select-content{width:100%}  .field-content .mat-form-field-infix{display:block;position:relative;flex:auto;min-width:0;width:100%!important}  .fields-content .mat-radio-button.mat-accent.mat-radio-checked .mat-radio-outer-circle,   .property-content .mat-radio-button.mat-accent.mat-radio-checked .mat-radio-outer-circle{border-color:#039be5!important}  .fields-content .mat-radio-button.mat-accent .mat-radio-inner-circle,   .fields-content .mat-radio-button.mat-accent .mat-radio-ripple .mat-ripple-element:not(.mat-radio-persistent-ripple),   .fields-content .mat-radio-button.mat-accent.mat-radio-checked .mat-radio-persistent-ripple,   .fields-content .mat-radio-button.mat-accent:active .mat-radio-persistent-ripple,   .property-content .mat-radio-button.mat-accent .mat-radio-inner-circle,   .property-content .mat-radio-button.mat-accent .mat-radio-ripple .mat-ripple-element:not(.mat-radio-persistent-ripple),   .property-content .mat-radio-button.mat-accent.mat-radio-checked .mat-radio-persistent-ripple,   .property-content .mat-radio-button.mat-accent:active .mat-radio-persistent-ripple{background-color:#039be5!important}  .fields-content .mat-checkbox-checkmark-path,   .property-content .mat-checkbox-checkmark-path{stroke:#039be5!important}  .fields-content .mat-checkbox-frame,   .property-content .mat-checkbox-frame{border:2px solid #039BE5!important}  .fields-content .mat-checkbox-inner-container,   .property-content .mat-checkbox-inner-container{height:20px!important;width:20px!important}.setting[_ngcontent-%COMP%]{z-index:1;background-color:#d5d6d7!important;border-radius:40px;width:42px!important;height:40px!important;padding:0 10px!important;display:flex;align-items:center;justify-content:center;display:none}.setting[_ngcontent-%COMP%]   .setting-icon[_ngcontent-%COMP%], .setting[_ngcontent-%COMP%]   .transparent-button[_ngcontent-%COMP%]{color:#171f26}.sub-header[_ngcontent-%COMP%]:hover   .setting[_ngcontent-%COMP%]{display:flex}.add-button-sub-category[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin:10px auto;width:100%;background-color:transparent;color:#000;box-shadow:none;background-color:#fcfcfe;padding:5px span;padding-width:100%!important}  .add-button{padding:10px 0}  .add-button span{width:100%}  .mat-button[disabled]{opacity:.5!important}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TemplateProfileCreateComponent, [{
        type: Component,
        args: [{ selector: "onboarding-create-profile-template", template: "<main>\r\n  <div class=\"header-create-profile\">\r\n    <div class=\"header-create-profile-top\">\r\n      <h3>\r\n        <span>{{ form.get(\"Name\").value }}</span>\r\n        <mat-icon (click)=\"openDialog()\">edit</mat-icon>\r\n      </h3>\r\n      <div class=\"create-profile-action\">\r\n        <button mat-button class=\"register-button\" type=\"submit\" (click)=\"onSubmit(false)\">\r\n          <lib-loading-page *ngIf=\"loading && !isSubmitted\"></lib-loading-page>{{draftLabel}}\r\n        </button>\r\n        <button mat-button class=\"register-button live-button\" type=\"submit\" (click)=\"onSubmit(true)\">\r\n          <lib-loading-page *ngIf=\"loading && isSubmitted\"></lib-loading-page>\r\n          {{liveLabel}}\r\n        </button>\r\n\r\n        <button [disabled]=\"currentCanceledIndex < 0 || historics.length===0\" mat-button\r\n          class=\"register-button live-button forward\" type=\"submit\" (click)=\"onCancel(true)\">\r\n          <mat-icon>rotate_left</mat-icon>\r\n        </button>\r\n        <button [disabled]=\"currentCanceledIndex===historics.length-1 || currentCanceledIndex===null\" mat-button\r\n          class=\"register-button live-button forward\" type=\"submit\" (click)=\"onCancel(false)\">\r\n          <mat-icon>rotate_right</mat-icon>\r\n        </button>\r\n      </div>\r\n    </div>\r\n    <div class=\"create-profile-menus\">\r\n      <ul>\r\n        <li class=\"li-title\" [class]=\"editIndex === i ? 'active' : ''\" *ngFor=\"let cat of categories; let i = index\"\r\n          (click)=\"scrollTo(cat, i)\" [id]=\"cat.name+'x'\">\r\n          <!-- (click)=\"onActiveMenu(cat, i,true)\" [ngxScrollTo]=\"'#' + cat.name\" [id]=\"cat.name+'x'\"> -->\r\n          {{ cat.name }}\r\n        </li>\r\n        <li>\r\n          <button mat-mini-fab color=\"transparent\" (click)=\"onAddNewCategory($event)\">\r\n            <mat-icon>add</mat-icon>\r\n          </button>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n  <form [formGroup]=\"form\">\r\n    <div class=\"category\" cdkDropListGroup>\r\n      <div class=\"fields\">\r\n        <div\r\n          cdkDropList\r\n          (cdkDropListDropped)=\"drop($event)\"\r\n          [cdkDropListData]=\"categories\"\r\n          class=\"fields-inner example-list mt-10\" id=\"categories-id\"\r\n          (scroll)=\"onScroll($event)\">\r\n          <section class=\"category-item section-item\" *ngFor=\"let category of categories; let i = index\" cdkDrag\r\n            [id]=\"category.name\" [style.paddingBottom]=\"category.expandMore ? '50px' : '10px'\"\r\n            [class]=\"editIndex === i ? 'active' : ''\" (click)=\"scrollTo(category, i)\">\r\n            <!-- [class]=\"editIndex === i ? 'active' : ''\" [ngxScrollTo]=\"'#' + category.name\"> -->\r\n            <div class=\"left-action move-icons\" cdkDragHandle>\r\n              <button class=\"transparent-button\" mat-raised-button\r\n                (click)=\"$event.preventDefault();$event.stopPropagation()\">\r\n                <mat-icon class=\"drag-icon\">drag_indicator</mat-icon>\r\n              </button>\r\n            </div>\r\n            <div class=\"field-content\">\r\n              <div class=\"field-item\">\r\n                <!-- <div class=\"field-item\" (click)=\" onExpendMore({ event: $event, field: category }, i)\"> -->\r\n                <div>\r\n                  <p class=\"full-width input-category-name\">\r\n                    {{ category.name }}\r\n                  </p>\r\n                  <p class=\"sub-category-name\">\r\n                    {{locale?.CATEGORY_SUBTITLE}} {{ catNameStart(category.name) ? \"l'\" +\r\n                    category.name : category.name }}\r\n                  </p>\r\n                </div>\r\n                <button mat-mini-fab color=\"primary\" class=\"expand-button\"\r\n                  (click)=\"$event.stopPropagation();onExpendMore({ event: $event, field: category }, i)\">\r\n                  <mat-icon *ngIf=\"!category.expandMore\">chevron_right</mat-icon>\r\n                  <mat-icon *ngIf=\"category.expandMore\">expand_more</mat-icon>\r\n                </button>\r\n              </div>\r\n              <div class=\"child-list\" *ngIf=\"category.forms\" cdkDropListGroup>\r\n                <ng-container *ngIf=\"category.expandMore\">\r\n                  <ng-container *ngFor=\"let field of category.forms; let j = index\" >\r\n                    <div \r\n                      class=\"field-box\" \r\n                      [id]=\"field.key\"\r\n                      cdkDropList\r\n                      cdkDropListOrientation=\"horizontal'\"\r\n                      (cdkDropListDropped)=\"dropField($event)\"\r\n                      [cdkDropListData]=\"{ field: field, index: j, category: category }\"\r\n                      [style.width]=\"field.forms && field.forms.length>0 ? '100%' : fieldWidth(field.type,category.forms.length,j)\">\r\n                      <div cdkDrag class=\"dnd-box\">\r\n                        <div class=\"dnd-placeholder\" *cdkDragPlaceholder></div>\r\n                        <div class=\"fields-content\"\r\n                          [class]=\"field.forms && field.forms.length>0 ? 'sub-category-forms' :''\">\r\n                          <div class=\"button-action\" *ngIf=\"field.forms\">\r\n                            <button class=\"transparent-button\" mat-raised-button\r\n                              (click)=\"$event.stopPropagation();$event.preventDefault()\">\r\n                              <mat-icon class=\"drag-icon\">drag_indicator</mat-icon>\r\n                            </button>\r\n                          </div>\r\n                          <div class=\"fields-container\">\r\n                            <div class=\"sub-header\" *ngIf=\"field.forms\">\r\n                              <div class=\"field-item\">\r\n                                <div>\r\n                                  <p class=\"full-width input-category-name\">\r\n                                    {{ field.label }}\r\n                                  </p>\r\n                                  <p class=\"sub-category-name\">\r\n                                    {{locale?.CATEGORY_SUBTITLE}}\r\n                                    {{ catNameStart(field.label) ? \"l'\" + field.label : field.label }}\r\n                                  </p>\r\n                                </div>\r\n                                <button class=\"transparent-button setting\" mat-raised-button\r\n                                  (click)=\"$event.stopPropagation();onEditBlock(field, i, j)\">\r\n                                  <mat-icon class=\"setting-icon\">settings</mat-icon>\r\n                                </button>\r\n                                <button class=\"expand-button\" [disabled]=\"!(field.forms && field.forms.length > 0)\"\r\n                                  [style.opacity]=\"field.forms && field.forms.length > 0 ? 1 : 0\" mat-mini-fab\r\n                                  color=\"primary\"\r\n                                  (click)=\"$event.stopPropagation();onExpendMore({ event: $event, field: field }, i, j)\">\r\n                                  <mat-icon *ngIf=\"!field.expandMore\">expand_less </mat-icon>\r\n                                  <mat-icon *ngIf=\"field.expandMore\">expand_more </mat-icon>\r\n                                </button>\r\n                              </div>\r\n                            </div>\r\n                            <lib-sub-category [field]=\"field\" [length]=\"category?.forms?.length\" [i]=\"i\" [j]=\"j\"\r\n                              [blink]=\"checkBlink(j,1)===newFieldIndex\" (onCheckValue)=\"onCheckValue($event)\"\r\n                              (onAddKeywordFromInput)=\"addKeywordFromInput($event.event, $event.prev, i, j)\"\r\n                              (onKeyPress)=\"onKeyPress($event.event, i, j)\" (onAddNewField)=\"onAddNewField(i)\"\r\n                              (onRemoveField)=\"onRemoveField(i, j)\" (onChangeType)=\"onChangeType(field.type, i, j)\"\r\n                              (onRemoveKeyword)=\"removeKeyword($event.event, i, j)\"\r\n                              (onAddNewSubLevelField)=\"onAddNewSubLevelField(i, j)\"\r\n                              (onExpendMore)=\"onExpendMore($event, i, j)\" (onChangeLabel)=\"onChangeLabel($event, i, j)\"\r\n                              (onCheckedChip)=\"onCheckedChip($event, i, j)\" (onDrop)=\"drop($event)\"\r\n                              (onCheckedDefault)=\"onCheckedDefault($event, i, j)\" (onEditBlock)=\"onEditBlock(field, i, j)\"\r\n                              [conditionData]=\"conditionData\">\r\n                              <div *ngIf=\"field.expandMore\" class=\"child\">\r\n                                <div #childList=\"cdkDropList\" class=\"child-content\" *ngIf=\"field.forms\"\r\n                                  [cdkDropListData]=\"field.forms\" cdkDropList (cdkDropListDropped)=\"drop($event)\">\r\n                                  <div class=\"\" style=\"margin-bottom: 20px\"\r\n                                    *ngFor=\"let child of field.forms; let k = index\" [id]=\"child.key\"\r\n                                    [style.width]=\"child.forms && child.forms.length>0 ? '100%' : fieldWidth(child.type,field.forms.length,k)\">\r\n                                    <div cdkDrag>\r\n                                      <div class=\"fields-content\"\r\n                                        [class]=\"child.forms && child.forms.length>0 ? 'sub-category-forms' :''\">\r\n                                        <div class=\"button-action child-2-background\"\r\n                                          *ngIf=\"child.forms && child.forms.length>0\">\r\n                                          <button class=\"transparent-button\" mat-raised-button\r\n                                            (click)=\"$event.stopPropagation();$event.preventDefault()\">\r\n                                            <mat-icon class=\"drag-icon\"> drag_indicator</mat-icon>\r\n                                          </button>\r\n                                        </div>\r\n                                        <div class=\"fields-container\">\r\n                                          <div class=\"sub-header\" *ngIf=\"child.forms && child.forms.length>0\">\r\n                                            <div class=\"field-item\">\r\n                                              <div>\r\n                                                <input class=\"full-width input-category-name\" type=\"text\" required\r\n                                                  [readonly]=\"categories.length < 4 || !category.editable\"\r\n                                                  [readonly]=\"!category.editable\" [(ngModel)]=\"child.label\"\r\n                                                  [ngModelOptions]=\"{ standalone: true }\"\r\n                                                  placeholder=\"Saisir le nom de la sous cat\u00E9gorie\" />\r\n                                                <p class=\"sub-category-name\">\r\n                                                  {{locale?.CATEGORY_SUBTITLE}}\r\n                                                  {{ catNameStart(child.label) ? \"l'\" + child.label : child.label }}\r\n                                                </p>\r\n                                              </div>\r\n                                              <button class=\"transparent-button setting\" mat-raised-button\r\n                                                (click)=\"$event.stopPropagation();onEditBlock(child, i, j, k)\">\r\n                                                <mat-icon class=\"setting-icon\">settings</mat-icon>\r\n                                              </button>\r\n                                              <button class=\"expand-button\"\r\n                                                [disabled]=\"!(child.forms && child.forms.length > 0)\"\r\n                                                [style.opacity]=\"child.forms && child.forms.length > 0 ? 1 : 0\"\r\n                                                mat-mini-fab color=\"primary\"\r\n                                                (click)=\"$event.stopPropagation();onExpendMore({ event: $event, field: child }, i, j, k)\">\r\n                                                <mat-icon *ngIf=\"!child.expandMore\"> expand_less </mat-icon>\r\n                                                <mat-icon *ngIf=\"child.expandMore\"> expand_more </mat-icon>\r\n                                              </button>\r\n                                            </div>\r\n                                          </div>\r\n                                          <lib-sub-category [field]=\"child\" [length]=\"field?.forms?.length\" [i]=\"j\"\r\n                                            [blink]=\"checkBlink(k,2)===newFieldIndex\" [j]=\"k\"\r\n                                            (onCheckValue)=\"onCheckValue($event)\"\r\n                                            (onAddKeywordFromInput)=\"addKeywordFromInput($event.event, $event.prev, i, j, k)\"\r\n                                            (onKeyPress)=\"onKeyPress($event.event, i, j, k)\"\r\n                                            (onAddNewField)=\"onAddNewField(i, j)\" (onRemoveField)=\"onRemoveField(i, j, k)\"\r\n                                            (onChangeType)=\"onChangeType(child.type, i, j, k)\"\r\n                                            (onRemoveKeyword)=\"removeKeyword($event.event, i, j, k)\"\r\n                                            (onAddNewSubLevelField)=\"onAddNewSubLevelField(i, j, k)\"\r\n                                            (onExpendMore)=\"onExpendMore($event, i, j, k)\"\r\n                                            (onChangeLabel)=\"onChangeLabel($event, i, j, k)\"\r\n                                            (onCheckedChip)=\"onCheckedChip($event, i, j, k)\" (onDrop)=\"drop($event)\"\r\n                                            (onCheckedDefault)=\"onCheckedDefault($event, i, j, k)\"\r\n                                            [conditionData]=\"conditionData\" (onEditBlock)=\"onEditBlock(child, i, j, k)\">\r\n                                            <div *ngIf=\"child.expandMore\" class=\"child\">\r\n                                              <div class=\"child-content\" #childList=\"cdkDropList\"\r\n                                                *ngIf=\"child.forms && child.forms.length>0\"\r\n                                                [cdkDropListData]=\"child.forms\" cdkDropList\r\n                                                (cdkDropListDropped)=\"drop($event)\">\r\n                                                <div class=\"\" *ngFor=\"let c2 of child.forms; let l = index\" [id]=\"c2.key\"\r\n                                                  [style.width]=\"c2.forms && c2.forms.length>0 ? '100%' : fieldWidth(c2.type,child.forms.length,l)\">\r\n                                                  <div cdkDrag>\r\n                                                    <div class=\"fields-content\"\r\n                                                      [class]=\"c2.forms && c2.forms.length>0 ? 'sub-category-forms' :''\">\r\n                                                      <div class=\"button-action child-3-background\"\r\n                                                        *ngIf=\"c2.forms && c2.forms.length>0\">\r\n                                                        <button class=\"transparent-button\" mat-raised-button\r\n                                                          (click)=\"$event.stopPropagation()\">\r\n                                                          <mat-icon class=\"drag-icon\"> drag_indicator </mat-icon>\r\n                                                        </button>\r\n                                                      </div>\r\n                                                      <div class=\"fields-container\">\r\n                                                        <lib-sub-category [field]=\"c2\" [length]=\"child?.forms?.length\"\r\n                                                          [blink]=\"checkBlink(l,3)===newFieldIndex\" [i]=\"k\" [j]=\"l\"\r\n                                                          (onCheckValue)=\"onCheckValue($event)\"\r\n                                                          (onAddKeywordFromInput)=\"addKeywordFromInput($event.event, $event.prev, i, j, k, l)\"\r\n                                                          (onKeyPress)=\"onKeyPress($event.event, i, j, k, l)\"\r\n                                                          (onAddNewField)=\"onAddNewField(i, j, k)\"\r\n                                                          (onRemoveField)=\"onRemoveField(i, j, k, l)\"\r\n                                                          (onChangeType)=\"onChangeType(c2.type, i, j, k, l)\"\r\n                                                          (onRemoveKeyword)=\"removeKeyword($event.event, i, j, k, l)\"\r\n                                                          (onAddNewSubLevelField)=\"onAddNewSubLevelField(i, j, k, l)\"\r\n                                                          (onExpendMore)=\"onExpendMore($event, i, j, k, l)\"\r\n                                                          (onChangeLabel)=\"onChangeLabel($event, i, j, k, l)\"\r\n                                                          (onCheckedChip)=\"onCheckedChip($event, i, j, k, l)\"\r\n                                                          (onDrop)=\"drop($event)\"\r\n                                                          (onCheckedDefault)=\"onCheckedDefault($event, i, j, k, l)\"\r\n                                                          (onEditBlock)=\"onEditBlock(c2, i, j, k, l)\"\r\n                                                          [conditionData]=\"conditionData\">\r\n                                                          <div class=\"child\"></div>\r\n                                                        </lib-sub-category>\r\n                                                      </div>\r\n                                                    </div>\r\n                                                  </div>\r\n                                                  <div class=\"add-button-sub-category\"\r\n                                                    *ngIf=\"child?.forms?.length - 1 === l\">\r\n                                                    <button style=\"margin: 10px auto\" mat-raised-button color=\"primary\"\r\n                                                      (click)=\"$event.stopPropagation();onAddNewField(i, j, k)\">\r\n                                                      <span>{{locale?.ADD_FIELD}}</span>\r\n                                                      <mat-icon> add </mat-icon>\r\n                                                    </button>\r\n                                                  </div>\r\n                                                </div>\r\n                                              </div>\r\n                                            </div>\r\n                                          </lib-sub-category>\r\n                                        </div>\r\n                                      </div>\r\n                                    </div>\r\n                                    <div class=\"add-button-sub-category\" *ngIf=\"field?.forms?.length - 1 === k\">\r\n                                      <button style=\"margin: 10px auto\" mat-raised-button color=\"primary\"\r\n                                        (click)=\"$event.stopPropagation();onAddNewField(i, j)\">\r\n                                        <span>{{locale?.ADD_FIELD}}</span>\r\n                                        <mat-icon>add</mat-icon>\r\n                                      </button>\r\n                                    </div>\r\n                                  </div>\r\n                                </div>\r\n                              </div>\r\n                            </lib-sub-category>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"add-button-container add-button-sub-category\" *ngIf=\"category?.forms?.length - 1 === j\">\r\n                        <button style=\"margin: 10px auto; padding:10px 0\" class=\"add-button\"\r\n                          [disabled]=\"category?.forms?.length - 1 !== j\"\r\n                          [style.opacity]=\"category?.forms?.length - 1 === j ? 1 : 0\" mat-raised-button color=\"primary\"\r\n                          (click)=\"$event.stopPropagation();onAddNewField(i)\">\r\n                          <span>{{locale?.ADD_FIELD}}</span>\r\n                          <mat-icon>add</mat-icon>\r\n                        </button>\r\n                      </div>\r\n                  </div>\r\n                  </ng-container>\r\n                </ng-container>\r\n              </div>\r\n            </div>\r\n          </section>\r\n\r\n          <div class=\"add-button-container add-category-button add-step\">\r\n            <button (click)=\"onAddNewCategory($event)\">\r\n              {{locale?.ADD_STEP}}\r\n              <mat-icon>add</mat-icon>\r\n            </button>\r\n          </div>\r\n          <section style=\"background-color: transparent\">\r\n            <div style=\"height: 400px;\"></div>\r\n          </section>\r\n        </div>\r\n      </div>\r\n      <div class=\"field-property\">\r\n        <div class=\"property-content\" *ngIf=\"isBlock && currentEditBlock\">\r\n          <h3>{{locale?.SETTING_OF_BLOCK}} {{ currentEditBlock.label }}</h3>\r\n          <div class=\"property-content-inner\" style=\"width: 100%;\">\r\n            <mat-form-field class=\"form-field mat-select full-width\" style=\"cursor: pointer\" appearance=\"outline\">\r\n              <mat-label>{{locale?.TYPE_OF_BLOCK}}</mat-label>\r\n              <mat-select (click)=\"onOpenTypeDialog(currentEditBlock)\" disabled=\"true\" required\r\n                [(ngModel)]=\"currentEditBlock.type\" (ngModelChange)=\"onChangeTypeBlock(currentEditBlock)\"\r\n                [ngModelOptions]=\"{ standalone: true }\" class=\"select-type-class\">\r\n                <mat-option value=\"text\">Text(80)</mat-option>\r\n                <mat-option value=\"textarea\">Text(80+)</mat-option>\r\n                <mat-option value=\"radio\">Radio</mat-option>\r\n                <mat-option value=\"select\">Selector</mat-option>\r\n                <mat-option value=\"toggle\">Toggle</mat-option>\r\n                <mat-option value=\"checkbox\">Checkbox</mat-option>\r\n                <mat-option value=\"checkbox_multiple\">Checkbox multiple</mat-option>\r\n                <mat-option value=\"email\">Email</mat-option>\r\n                <mat-option value=\"password\">Password</mat-option>\r\n                <mat-option value=\"date\">Date</mat-option>\r\n                <mat-option value=\"tel\">Phone</mat-option>\r\n                <mat-option value=\"none\">None</mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n            <ng-container *ngIf=\"currentEditBlock.type!=='none'\">\r\n              <mat-form-field class=\"form-field full-width\" appearance=\"outline\">\r\n                <mat-label>{{locale?.NAME_LABEL}}</mat-label>\r\n                <input type=\"text\" [(ngModel)]=\"currentEditBlock.label\" [ngModelOptions]=\"{ standalone: true }\" matInput\r\n                  required placeholder=\"\" />\r\n              </mat-form-field>\r\n              <ng-container [ngSwitch]=\"currentEditBlock.type\">\r\n                <div *ngSwitchCase=\"'toggle'\" class=\"flex-auto\"\r\n                  style=\"display: flex;align-items: flex-end;margin: 10px 0;\">\r\n                  <mat-slide-toggle class=\"form-field\" color=\"#6FE8D7\" [(ngModel)]=\"currentEditBlock.defaultValue\"\r\n                    [ngModelOptions]=\"{ standalone: true }\">\r\n                  </mat-slide-toggle>\r\n                  <span style=\"margin-left: 10px;\">{{locale?.DEFAULT_VALUE}}</span>\r\n                </div>\r\n                <div *ngSwitchCase=\"'checkbox'\" class=\"flex-auto\">\r\n                  <mat-checkbox class=\"form-field\" [(ngModel)]=\"currentEditBlock.value\"\r\n                    [ngModelOptions]=\"{ standalone: true }\">\r\n                    {{locale?.DEFAULT_CHECKED}}\r\n                  </mat-checkbox>\r\n                </div>\r\n                <mat-form-field *ngSwitchCase=\"\r\n                                ['select', 'radio', 'checkbox_multiple'].includes(currentEditBlock.type) ? currentEditBlock.type : !currentEditBlock.type\r\n                              \" class=\"flex-auto full-width\" appearance=\"outline\">\r\n                  <mat-label> {{locale?.DEFAULT_VALUE}} </mat-label>\r\n                  <mat-chip-list #childList=\"cdkDropList\" [cdkDropListData]=\"currentEditBlock.defaultValue\" cdkDropList\r\n                    (cdkDropListDropped)=\"drop($event)\" #chipList aria-label=\"Video keywords; let index=index\" multiple\r\n                    selectable>\r\n                    <mat-chip style=\"min-height: 25px;width: auto;\" *ngFor=\"let option of currentEditBlock.defaultValue\"\r\n                      [selected]=\"option.checked\" [value]=\"option.value\" [removable]=\"true\"\r\n                      (dblclick)=\"onCheckedChipBlock(option, currentEditBlock)\" (click)=\"onEditChip(option)\"\r\n                      (removed)=\"removeKeywordBlock(option, currentEditBlock)\" cdkDrag>\r\n                      {{ option.value }}\r\n                      <mat-icon matChipRemove>{{locale?.CANCEL}}</mat-icon>\r\n                    </mat-chip>\r\n                    <input #chipsInput placeholder=\"add...\" [matChipInputFor]=\"chipList\" [matChipInputAddOnBlur]=\"true\"\r\n                      (matChipInputTokenEnd)=\"addKeywordFromInputBlock($event, currentEditBlock, prevValue)\"\r\n                      [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\"\r\n                      (keyup)=\"onKeyUpChip($event, currentEditBlock)\" [(ngModel)]=\"currentChip\"\r\n                      [ngModelOptions]=\"{ standalone: true }\" />\r\n                  </mat-chip-list>\r\n                </mat-form-field>\r\n                <mat-form-field *ngSwitchCase=\"'textarea'\" class=\"form-field full-width\" appearance=\"outline\">\r\n                  <mat-label>{{locale?.DEFAULT_VALUE}}</mat-label>\r\n                  <input type=\"text\" matInput [ngModelOptions]=\"{ standalone: true }\"\r\n                    [(ngModel)]=\"currentEditBlock.defaultValue\" placeholder=\"Description...\" />\r\n                </mat-form-field>\r\n\r\n                <mat-form-field *ngSwitchDefault class=\"form-field full-width\"\r\n                  [style.opacity]=\"currentEditBlock.type !== 'tel' ? 1 : 0\" appearance=\"outline\">\r\n                  <mat-label>{{locale?.DEFAULT_VALUE}}</mat-label>\r\n                  <input [type]=\"currentEditBlock.type\" [disabled]=\"currentEditBlock.type === 'tel'\" matInput\r\n                    [ngModelOptions]=\"{ standalone: true }\" [(ngModel)]=\"currentEditBlock.defaultValue\"\r\n                    placeholder=\"\" />\r\n                </mat-form-field>\r\n              </ng-container>\r\n\r\n              <div class=\"mandatory top-10 bottom-10\">\r\n                <div class=\"toogle-button\">\r\n                  <span>{{locale?.REQUIRED}}</span>\r\n                  <mat-slide-toggle color=\"#6FE8D7\" [(ngModel)]=\"currentEditBlock.isMandatory\"\r\n                    [ngModelOptions]=\"{ standalone: true }\">\r\n                  </mat-slide-toggle>\r\n                </div>\r\n              </div>\r\n              <div class=\"mandatory top-10\">\r\n                <div class=\"toogle-button\">\r\n                  <span>{{locale?.CONDITIONAL_VISIBILITY}}</span>\r\n                  <mat-slide-toggle color=\"#6FE8D7\" [(ngModel)]=\"currentEditBlock.isConditional\"\r\n                    [ngModelOptions]=\"{ standalone: true }\">\r\n                  </mat-slide-toggle>\r\n                </div>\r\n              </div>\r\n              <ng-container *ngIf=\"currentEditBlock?.isConditional\">\r\n                <mat-form-field class=\"form-field mat-select full-width\" appearance=\"outline\">\r\n                  <mat-label>{{locale?.SELECT_CATEGORY}}</mat-label>\r\n                  <mat-select [(ngModel)]=\"all\" [ngModelOptions]=\"{ standalone: true }\"\r\n                    (selectionChange)=\"onSelectCondition('all','s1', $event.value)\">\r\n                    <mat-option *ngFor=\"let item of conditionData.all\" [value]=\"item.key\">{{\r\n                      item.label }}\r\n                    </mat-option>\r\n                  </mat-select>\r\n                </mat-form-field>\r\n                <mat-form-field *ngIf=\"conditionData.s1?.length > 0\" class=\"form-field mat-select full-width\"\r\n                  appearance=\"outline\">\r\n                  <mat-label>{{locale?.SELECT_SUB_CATEGORY}} (s1)</mat-label>\r\n                  <mat-select [(ngModel)]=\"s1\" [ngModelOptions]=\"{ standalone: true }\"\r\n                    (selectionChange)=\"onSelectCondition('s1','s2', $event.value)\">\r\n                    <mat-option *ngFor=\"let item of conditionData.s1\" [value]=\"item.key\">{{\r\n                      item.label }}\r\n                    </mat-option>\r\n                  </mat-select>\r\n                </mat-form-field>\r\n                <mat-form-field class=\"form-field mat-select full-width\" *ngIf=\"conditionData.s2?.length>0\"\r\n                  appearance=\"outline\">\r\n                  <mat-label>{{locale?.SELECT_SUB_CATEGORY}} (s2)</mat-label>\r\n                  <mat-select [(ngModel)]=\"s2\" [ngModelOptions]=\"{ standalone: true }\"\r\n                    (selectionChange)=\"onSelectCondition('s2','s3', $event.value)\">\r\n                    <mat-option *ngFor=\"let item of conditionData.s2\" [value]=\"item.key\">{{\r\n                      item.label }}\r\n                    </mat-option>\r\n                  </mat-select>\r\n                </mat-form-field>\r\n                <mat-form-field class=\"form-field mat-select full-width\" *ngIf=\"conditionData.s3?.length>0\"\r\n                  appearance=\"outline\">\r\n                  <mat-label>{{locale?.SELECT_SUB_CATEGORY}} (s3)</mat-label>\r\n                  <mat-select [(ngModel)]=\"s3\" [ngModelOptions]=\"{ standalone: true }\"\r\n                    (selectionChange)=\"onSelectCondition('s3','s4', $event.value)\">\r\n                    <mat-option *ngFor=\"let item of conditionData.s3\" [value]=\"item.key\">{{\r\n                      item.label }}\r\n                    </mat-option>\r\n                  </mat-select>\r\n                </mat-form-field>\r\n              </ng-container>\r\n\r\n              <mat-radio-group\r\n                *ngIf=\"currentEditBlock.isConditional && onGetDefaultValue() && onGetDefaultValue()?.length>0\"\r\n                aria-labelledby=\"example-radio-group-label\" class=\"example-radio-group\"\r\n                [(ngModel)]=\"currentEditBlock.condition.value\" [ngModelOptions]=\"{ standalone: true }\">\r\n                <mat-radio-button class=\"example-radio-button\" style=\"margin-right: 10px\"\r\n                  *ngFor=\"let item of onGetDefaultValue()\" [value]=\"item.value\">\r\n                  {{ item.value }}\r\n                </mat-radio-button>\r\n              </mat-radio-group>\r\n              <div class=\"bloc-action\">\r\n                <button *ngIf=\"paramsIndex.length<4\" mat-button [disabled]=\"!currentEditBlock.editable\"\r\n                  (click)=\"onAddNewSubLevelFieldBlock($event)\">{{locale?.SUB_CATEGORY}} <mat-icon>device_hub\r\n                  </mat-icon></button>\r\n                <button mat-button [disabled]=\"!currentEditBlock.editable\"\r\n                  (click)=\"onDuplicatedBlock($event)\">{{locale?.DUPLICATE_BLOCK}}<mat-icon>filter_none</mat-icon>\r\n                </button>\r\n                <button mat-button [disabled]=\"!currentEditBlock.editable\" class=\"delete-bloc\"\r\n                  (click)=\"onRemoveFieldBlock($event)\">{{locale?.DELETE_BLOCK}} <mat-icon>\r\n                    delete </mat-icon></button>\r\n              </div>\r\n            </ng-container>\r\n          </div>\r\n        </div>\r\n        <div class=\"property-content\" *ngIf=\"isSection && currentEditBlock\">\r\n          <h3>{{locale?.SECTION_SETTING}} {{ currentEditBlock.name }}</h3>\r\n          <div class=\"property-content-inner\">\r\n            <mat-form-field class=\"form-field full-width\" appearance=\"outline\">\r\n              <mat-label>{{locale?.SECTION_NAME}}</mat-label>\r\n              <input (ngModelChange)=\"onChangeCategoryName()\" type=\"text\" matInput required placeholder=\"\"\r\n                [(ngModel)]=\"currentEditBlock.name\" [ngModelOptions]=\"{ standalone: true }\" />\r\n            </mat-form-field>\r\n            <mat-form-field class=\"form-field mat-select full-width\" appearance=\"outline\">\r\n              <mat-label>{{locale?.MANAGEMENT_TEAM}}</mat-label>\r\n              <mat-select required [(ngModel)]=\"currentEditBlock.selector.value\"\r\n                [ngModelOptions]=\"{ standalone: true }\">\r\n                <mat-option [value]=\"item.value\" *ngFor=\"let item of currentEditBlock.selector.defaultValue\">{{\r\n                  item.value }}</mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n            <div class=\"bloc-action\">\r\n              <button mat-button (click)=\"onAddNewSubLevelFieldBlock($event)\">{{locale?.SUB_CATEGORY}} <mat-icon>\r\n                  device_hub\r\n                </mat-icon></button>\r\n              <button mat-button (click)=\"onDuplicatedBlock($event)\">{{locale?.DUPLICATE_BLOCK}}<mat-icon>filter_none\r\n                </mat-icon>\r\n              </button>\r\n              <button [disabled]=\"!currentEditBlock.editable\" mat-button class=\"delete-bloc\"\r\n                (click)=\"onRemoveFieldBlock($event)\">{{locale?.DELETE_BLOCK}} <mat-icon>\r\n                  delete</mat-icon></button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</main>", styles: ["main{background:#f4f7f9 0% 0% no-repeat padding-box;height:100vh;display:flex;flex-direction:column;align-items:center;padding:25px}main .disabled label{background-color:transparent!important}main form{display:flex;height:89%;width:100%}main .box-title{width:786px;margin-top:20vh;background:#ffffff 0% 0% no-repeat padding-box;border:1px solid #dce4e9;border-radius:6px;opacity:1;margin:auto;padding:0 25px;align-self:center}main .box-title h3{text-align:center;letter-spacing:0px;color:#171f26}main .box-title label,main .box-title input{letter-spacing:0px;color:#171f26}main .box-title .profil-name-content{display:flex;align-items:center;position:relative}main .box-title .profil-name-content .add-picto{margin-right:15px;min-width:50px;width:30px;padding:9px 12px}main .box-title .profil-name-content .add-picto mat-icon{margin-right:10px}main .box-title .profil-name-content .list-picto{position:absolute;height:200px;width:100%;background:#ffffff 0% 0% no-repeat padding-box;border:1px solid #171f26;border-radius:8px;top:100%;z-index:1}main .box-title .profil-name-content .list-picto mat-icon{margin:15px;border:none;font-size:40px}main .box-title .profil-name-content .list-picto mat-icon:hover{color:#830b6b!important;cursor:pointer}main .box-title .box-title-content{width:100%;margin:25px auto}main .box-title .title{letter-spacing:0px;color:#171f26}main .box-title p{letter-spacing:0px;color:#171f26;text-align:center}main .box-title .link-create-profil{width:100%;display:flex;justify-content:center}main .box-title button{text-align:center;border:1px solid #543cb6;border-radius:7px;color:#fff;padding:.7em 2em .5em;display:flex;align-items:center;background-color:transparent;letter-spacing:0px;color:#543cb6}main .action{width:100%;display:flex;justify-content:space-between}main .header-create-profile{width:100%;margin:10px 15px;border-radius:5px}main .header-create-profile .header-create-profile-top{display:flex;align-items:center;text-align:center;justify-content:space-between}main .header-create-profile .header-create-profile-top .create-profile-action{display:flex;align-items:center;gap:25px}main .header-create-profile h3{font-size:25px;padding-bottom:5px;display:flex;align-items:center;justify-content:center}main .header-create-profile h3 span{text-overflow:ellipsis;white-space:nowrap;overflow:hidden;font-weight:700;font-size:24px;line-height:110%;text-align:center;color:#242731;text-transform:capitalize}main .header-create-profile h3 mat-icon{margin-left:15px;cursor:pointer}main .header-create-profile .create-profile-menus{max-width:100%;overflow:auto}main .header-create-profile .create-profile-menus ul{font-weight:600;font-size:16px;list-style:none;display:flex;align-items:center;gap:20px;padding:0}main .header-create-profile .create-profile-menus ul li{font-weight:400;font-size:12px;cursor:pointer;text-align:left;letter-spacing:0px;color:#535760}main .header-create-profile .create-profile-menus ul li .mat-mini-fab{width:28px;height:28px;line-height:24px}main .header-create-profile .create-profile-menus ul li.li-title:hover{border-bottom:2px solid #723CEB}main .header-create-profile .create-profile-menus ul li.li-title.active{border-bottom:2px solid #723CEB;font-weight:600}.expand-button{color:#5a607f!important;background-color:transparent!important;box-shadow:none!important}.input-category-name{font-size:15px;font-weight:500;border:none;outline:none;text-align:left;color:#171f26;font-weight:700;font-size:20px;line-height:28px;color:#242731}.sub-category-name{font-style:normal;font-weight:250;font-size:14px;line-height:16px;display:flex;align-items:center;color:#575f6e;word-break:break-word}.full-width{width:100%}.field-action{width:10%}.field-size{width:90%;margin:auto 2% auto auto}::ng-deep .mat-mini-fab .mat-button-wrapper{padding:0!important}::ng-deep .mat-form-field-appearance-fill .mat-form-field-flex{background-color:#fff}::ng-deep .mat-select.mat-form-field-appearance-outline .mat-form-field-infix{padding:.5em 0}::ng-deep .mat-select{padding:8px 0}::ng-deep .mat-form-field-appearance-fill .mat-form-field-underline:before{background-color:transparent}::ng-deep .mat-form-field-wrapper{padding-bottom:0!important}:host ::ng-deep .input-category-name div.mat-form-field-outline-start,:host ::ng-deep .cdk-drag-preview .input-category-name div.mat-form-field-outline-start{border-color:0!important;border-width:0px!important}:host ::ng-deep .input-category-name .mat-form-field-outline-gap{border-color:0!important;border-width:0px!important}:host ::ng-deep .input-category-name .mat-form-field-outline-end{border-color:0!important;border-width:0px!important}:host ::ng-deep .input-category-name .mat-form-field-label-wrapper{display:none}:host ::ng-deep .input-category-name .mat-form-field-appearance-outline .mat-form-field-outline{color:transparent!important}:host ::ng-deep .input-category-name .mat-form-field-infix{border-top:none}.category-action{display:flex;width:100%}.delete-field{margin:auto 2%}.radio-group .mat-radio-button{margin-right:10px}.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary{background-color:#3f51b5;color:#fff;min-height:20px;font-size:10px}.move-icons{cursor:move}:host ::ng-deep .child-list .dnd-box.cdk-drag-preview{width:100%!important;overflow:hidden;box-sizing:border-box;box-shadow:0 5px 5px -3px #0003,0 8px 10px 1px #00000024,0 3px 14px 2px #0000001f}:host ::ng-deep .child-list .cdk-drag-animating{transition:transform .25s cubic-bezier(0,0,.2,1)}:host ::ng-deep .child-list .field-box.cdk-drop-list-dragging .dnd-box:not(.cdk-drag-placeholder){transition:transform .25s cubic-bezier(0,0,.2,1)}:host ::ng-deep .child-list .cdk-drag.dnd-box.cdk-drag-dragging{min-width:185px}:host ::ng-deep .child-list .cdk-drag.dnd-box.cdk-drag-dragging>div{margin-bottom:15px!important;min-width:185px}:host ::ng-deep .child-list .cdk-drag.dnd-box.cdk-drag-dragging>div>div{min-width:185px}:host ::ng-deep .child-list .cdk-drag.dnd-box.cdk-drag-dragging>div .mat-form-field-wrapper{min-width:185px}:host ::ng-deep .child-list .field-box{min-height:84px}:host ::ng-deep .child-list .field-box .dnd-placeholder{margin:0 10px;padding:0;height:44px!important;max-height:44px!important;display:flex;flex-grow:1;align-items:baseline;position:relative;border-radius:8px;opacity:1!important;transform:translateZ(0)!important}:host ::ng-deep .child-list .cdk-drop-list-dragging>div.dnd-box{display:none}::ng-deep .cdk-drag.dnd-box.cdk-drag-preview{height:68px;border-radius:0}::ng-deep .cdk-drag.dnd-box.cdk-drag-preview .fields-container .field-item{margin:0;height:44px}::ng-deep .cdk-drag.dnd-box.cdk-drag-preview .fields-container .field-item .mat-form-field-wrapper{height:44px}::ng-deep .cdk-drag.dnd-box.cdk-drag-preview .fields-container .field-item .mat-form-field-wrapper .input-phone,::ng-deep .cdk-drag.dnd-box.cdk-drag-preview .fields-container .field-item .mat-form-field-wrapper .mat-input-element,::ng-deep .cdk-drag.dnd-box.cdk-drag-preview .fields-container .field-item .mat-form-field-wrapper .mat-select-value,::ng-deep .cdk-drag.dnd-box.cdk-drag-preview .fields-container .field-item .mat-form-field-wrapper .mat-select-arrow-wrapper{opacity:0}.category-item,.cdk-drag-placeholder{display:flex;align-items:baseline;position:relative;width:100%;border-radius:8px;background-color:#fff;margin-bottom:15px;margin-right:5px;padding:6px 15px}.category-item .left-action,.cdk-drag-placeholder .left-action{height:auto;width:40px;align-self:baseline;border-top-left-radius:8px;border-bottom-left-radius:8px}.category-item .left-action .transparent-button,.cdk-drag-placeholder .left-action .transparent-button{background-color:transparent;box-shadow:none;width:40px;padding:0;margin:0;min-width:auto;color:#fff}.category-item .left-action .transparent-button .drag-icon,.cdk-drag-placeholder .left-action .transparent-button .drag-icon{color:#171f26;cursor:move;margin-right:15px}.category-item .field-content,.cdk-drag-placeholder .field-content{width:calc(100% - 40px);align-self:center}.category-item .field-content .child-list,.cdk-drag-placeholder .field-content .child-list{display:flex;flex-wrap:wrap;background-color:transparent;width:103%;position:relative;margin-left:-1.5%}.category-item .field-content .field-item,.cdk-drag-placeholder .field-content .field-item{display:flex;justify-content:space-between;align-items:baseline;border:transparent!important}.category-item .field-content .field-item mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-outline,.cdk-drag-placeholder .field-content .field-item mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-outline{color:transparent!important}.category-item .field-content .mat-form-field-outline,.cdk-drag-placeholder .field-content .mat-form-field-outline{color:transparent!important}.field-box{margin-bottom:15px;display:flex;align-items:center}.cdk-drag-preview{box-sizing:border-box;border-radius:4px;opacity:1}.cdk-drag-preview .expand-button{color:#5a607f!important;background-color:transparent!important;box-shadow:none!important;margin-right:6px!important}.cdk-drag-placeholder{opacity:0}.cdk-drag-animating{transition:transform .25s cubic-bezier(0,0,.2,1)}.example-list.cdk-drop-list-dragging .category-item:not(.cdk-drag-placeholder){transition:transform .25s cubic-bezier(0,0,.2,1)}.child{margin-left:0}.child-content{display:flex;flex-wrap:wrap;margin-bottom:30px}.sub-category-forms{margin-bottom:0!important;margin-top:10px!important}.category{display:flex;flex-direction:row;width:100%;height:100%}.category .fields{width:100%;overflow:hidden;overflow-x:hidden;position:relative;padding-top:10px;height:calc(100% - 10px)}.category .fields .fields-inner{max-height:100%;height:100%;width:100%;overflow:auto}.category .fields .add-category-button{position:relative!important;width:calc(100% - 40px)!important;padding:20px 0}.category .fields .add-category-button mat-icon{margin-left:10px}.category .fields .add-step{bottom:0!important;top:0!important;width:100%!important}.category .disabled{background-color:#f4f7f9!important}.category .expand-button{color:#5a607f!important;background-color:transparent!important;box-shadow:none!important;margin-right:6px!important}.category .expand-button .material-icons{font-size:40px}.category .transparent-button{background-color:transparent;box-shadow:none;width:40px;padding:0;margin:0;margin-left:0!important;min-width:auto;color:#fff}.add-button-sub-category{width:93%;position:absolute;left:3%;bottom:-13px}.add-button-sub-category button span{width:100%}.add-button-container{background:#ffffff 0% 0% no-repeat padding-box;border-radius:8px;margin-top:10px;padding:10px 0;display:flex;justify-content:center;align-items:center;width:100%;margin-bottom:22px;position:absolute;left:0;top:100%}.add-button-container button{display:flex;align-items:center;background-color:transparent;border:none;cursor:pointer;letter-spacing:0px;color:#000;box-shadow:none}.add-button-container button span{width:100%}.add-category{background-color:#fcfcfe;border-radius:5px;line-height:26px;margin-left:10px;margin-bottom:10px;letter-spacing:0px;color:#c2c8d5;width:92%}.field-content .cdk-drag{width:100%}.cdk-drag{width:auto;position:relative}.cdk-drag .fields-content{display:flex;height:100%;width:100%;margin:0}.cdk-drag .fields-content .button-action{align-self:baseline;margin-top:0;margin-left:3px;border-bottom-left-radius:8px;border-top-left-radius:8px}.cdk-drag .fields-content .button-action .transparent-button{background-color:transparent;box-shadow:none;width:40px;padding:0;margin:0;min-width:auto;color:#fff}.cdk-drag .fields-content .button-action .transparent-button .drag-icon{color:#171f26;cursor:move;margin-right:15px}.cdk-drag .fields-content .child-3-background{background-color:#e5e8ee!important}.cdk-drag .fields-content .fields-container{border-radius:0 8px 8px 0;background-color:#fff;width:100%;padding-left:10px;padding-right:10px;padding-top:5px;position:relative;margin-bottom:10px}.cdk-drag .fields-content .fields-container lib-sub-category .field-item{display:flex;justify-content:space-between;align-items:center;width:100%}.cdk-drag .fields-content .fields-container lib-sub-category .field-item .button-action{background-color:#039be5!important;height:100%;margin:auto 15px auto auto;display:flex}.cdk-drag .fields-content .fields-container lib-sub-category .field-item .button-action button{box-shadow:none;background-color:transparent;color:#fff}.side-bar{display:flex;flex-direction:column}.register-button{background:no-repeat padding-box #171f26!important;border:2px solid #171f26!important;color:#fff!important;box-shadow:0 0 #0003;border-radius:7px}.forward{padding:6px}.live-button{background-color:#fff!important;color:#171f26!important;border:2px solid #171f26!important}.content-item{transition-property:border-image-slice border-image-source border-width;transition-timing-function:ease-in-out;transition-duration:.5s}.active-content{border-image-slice:1;border-width:2px;border-image-source:linear-gradient(to left,#9d107d,#4862ab)}.field-property{padding:11px;height:calc(100% - 22px);width:400px}.field-property h3{font-size:20px;line-height:110%;padding-top:10px;display:flex;align-items:center;color:#242731}.field-property .property-content{display:flex;flex-direction:column;align-items:flex-start;padding:0 20px;background:#ffffff;border-radius:8px 8px 0 0;min-height:100%;height:auto;width:400px}.field-property .property-content button{text-align:center}.field-property .property-content .property-content-inner{display:flex;flex-direction:column;gap:25px;overflow:auto;max-height:700px;padding-bottom:25px}.field-property .bloc-action{text-align:center}.field-property .bloc-action button{width:100%;padding:6px;margin-top:10px}.field-property .bloc-action button mat-icon{margin-left:5px}.field-property .bloc-action .delete-bloc{background:#f44336;box-shadow:0 0 #0003;border-radius:7px;color:#fff}.fields-inner::-webkit-scrollbar{width:5px}.fields-inner::-webkit-scrollbar-track{box-shadow:inset 0 0 2px transparent;border-radius:10px}.fields-inner::-webkit-scrollbar-thumb{background:transparent;border-radius:10px}.fields-inner::-webkit-scrollbar-thumb:hover{background:transparent}.toogle-button{color:#707273!important;display:flex;align-items:center;font-style:normal;font-weight:400;font-size:18px;line-height:18px}.toogle-button span{padding-right:10px}:host ::ng-deep .category .mat-slide-toggle.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar{background-color:#039be5;position:relative;width:42px;height:23px;flex-shrink:0;border-radius:14px}:host ::ng-deep .category .mat-slide-toggle:not(.mat-disabled) .mat-slide-toggle-bar{background-color:#707273}:host ::ng-deep .category .mat-slide-toggle:not(.mat-disabled) .mat-slide-toggle-bar{position:relative;width:42px;height:23px;flex-shrink:0;border-radius:14px}:host ::ng-deep .category .mat-slide-toggle.mat-checked:not(.mat-disabled) .mat-slide-toggle-thumb{background-color:#fff;margin-top:4px}:host ::ng-deep .category .mat-slide-toggle:not(.mat-disabled) .mat-slide-toggle-thumb{margin-top:4px;margin-left:4px}:host ::ng-deep .category .mat-slide-toggle.draft:not(.mat-disabled) .mat-slide-toggle-bar{background-color:#707273}:host ::ng-deep .category .mat-slide-toggle.draft.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar{background-color:#039be5}.top-10{margin-top:10px}.bottom-10{margin-bottom:10px}.section-item{border:2px solid transparent;overflow:hidden}.section-item:hover,.section-item.active{border:2px solid #242731;border-radius:8px;cursor:pointer}::ng-deep .select-type-class.mat-select-disabled .mat-select-value{color:#000!important;cursor:pointer}::ng-deep button .mat-button-wrapper{display:flex;align-items:center;justify-content:center}::ng-deep .field-content .mat-form-field,::ng-deep .field-content .select-content{width:100%}::ng-deep .field-content .mat-form-field-infix{display:block;position:relative;flex:auto;min-width:0;width:100%!important}::ng-deep .fields-content .mat-radio-button.mat-accent.mat-radio-checked .mat-radio-outer-circle,::ng-deep .property-content .mat-radio-button.mat-accent.mat-radio-checked .mat-radio-outer-circle{border-color:#039be5!important}::ng-deep .fields-content .mat-radio-button.mat-accent .mat-radio-inner-circle,::ng-deep .fields-content .mat-radio-button.mat-accent .mat-radio-ripple .mat-ripple-element:not(.mat-radio-persistent-ripple),::ng-deep .fields-content .mat-radio-button.mat-accent.mat-radio-checked .mat-radio-persistent-ripple,::ng-deep .fields-content .mat-radio-button.mat-accent:active .mat-radio-persistent-ripple,::ng-deep .property-content .mat-radio-button.mat-accent .mat-radio-inner-circle,::ng-deep .property-content .mat-radio-button.mat-accent .mat-radio-ripple .mat-ripple-element:not(.mat-radio-persistent-ripple),::ng-deep .property-content .mat-radio-button.mat-accent.mat-radio-checked .mat-radio-persistent-ripple,::ng-deep .property-content .mat-radio-button.mat-accent:active .mat-radio-persistent-ripple{background-color:#039be5!important}::ng-deep .fields-content .mat-checkbox-checkmark-path,::ng-deep .property-content .mat-checkbox-checkmark-path{stroke:#039be5!important}::ng-deep .fields-content .mat-checkbox-frame,::ng-deep .property-content .mat-checkbox-frame{border:2px solid #039BE5!important}::ng-deep .fields-content .mat-checkbox-inner-container,::ng-deep .property-content .mat-checkbox-inner-container{height:20px!important;width:20px!important}.setting{z-index:1;background-color:#d5d6d7!important;border-radius:40px;width:42px!important;height:40px!important;padding:0 10px!important;display:flex;align-items:center;justify-content:center;display:none}.setting .setting-icon,.setting .transparent-button{color:#171f26}.sub-header:hover .setting{display:flex}.add-button-sub-category button{margin:10px auto;width:100%;background-color:transparent;color:#000;box-shadow:none;background-color:#fcfcfe;padding:5px span;padding-width:100%!important}::ng-deep .add-button{padding:10px 0}::ng-deep .add-button span{width:100%}::ng-deep .mat-button[disabled]{opacity:.5!important}\n"] }]
    }], function () { return [{ type: i1.UntypedFormBuilder }, { type: i2.OnboardingService }, { type: i3.ActivatedRoute }, { type: i3.Router }, { type: i4.MatDialog }, { type: i5.ScrollToService }]; }, { onScroll: [{
            type: HostListener,
            args: ['scroll', ['$event']]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVtcGxhdGUtcHJvZmlsZS1jcmVhdGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvb25ib2FyZGluZy9zcmMvbGliL3BhZ2VzL3RlbXBsYXRlLXByb2ZpbGUtY3JlYXRlL3RlbXBsYXRlLXByb2ZpbGUtY3JlYXRlLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL29uYm9hcmRpbmcvc3JjL2xpYi9wYWdlcy90ZW1wbGF0ZS1wcm9maWxlLWNyZWF0ZS90ZW1wbGF0ZS1wcm9maWxlLWNyZWF0ZS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBSyxTQUFTLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNuRSxPQUFPLEVBQWUsZUFBZSxFQUFFLGlCQUFpQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDekYsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDaEUsT0FBTyxFQUF3QyxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVsRixPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSxtRkFBbUYsQ0FBQztBQUNsSSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxzREFBc0QsQ0FBQztBQUs1RixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sc0RBQXNELENBQUM7QUFFckYsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLFlBQVksQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNMM0IsbUNBQXFFOzs7SUFHckUsbUNBQW9FOzs7O0lBZ0J0RSw4QkFDaUQ7SUFBL0MsaVFBQVMsZUFBQSw2QkFBZ0IsQ0FBQSxJQUFDO0lBRTFCLFlBQ0Y7SUFBQSxpQkFBSzs7Ozs7SUFKZ0Isd0RBQXlDO0lBQ2pDLHNDQUFtQjtJQUU5QyxlQUNGO0lBREUsNENB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QUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztRQUN0TSxJQUFJLElBQUksS0FBSyxRQUFRLElBQUksSUFBSSxLQUFLLE9BQU8sSUFBSSxJQUFJLEtBQUssbUJBQW1CLEVBQUU7WUFDekUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDO1NBQzdDO2FBQU0sSUFBSSxJQUFJLEtBQUssVUFBVSxJQUFJLElBQUksS0FBSyxRQUFRLEVBQUU7WUFDbkQsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1NBQy9DO2FBQU07WUFDTCxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksR0FBRyxFQUFFLENBQUM7U0FDN0M7SUFDSCxDQUFDO0lBRUQsVUFBVSxDQUFDLEtBQVUsRUFBRSxHQUFHLE1BQU07UUFDOUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDckIsTUFBTSxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQztRQUM3QixNQUFNLEtBQUssR0FBRyxNQUFNLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2xRLElBQUksS0FBSyxDQUFDLEdBQUcsS0FBSyxHQUFHLEVBQUU7WUFDckIsTUFBTSxLQUFLLEdBQUcsS0FBSyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsaUJBQWlCLEVBQUUsS0FBSyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxDQUFDO1lBQ3ZJLElBQUksQ0FBQyxLQUFLLEVBQUU7Z0JBQ1YsS0FBSyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUM7b0JBQ3RCLEtBQUssRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUN2QyxPQUFPLEVBQUUsS0FBSztpQkFDZixDQUFDLENBQUM7Z0JBQ0gsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO2FBQ3pCO2lCQUFNO2dCQUNMLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQzthQUN6QjtTQUNGO1FBQ0QsNEJBQTRCO0lBQzlCLENBQUM7SUFFRCxhQUFhLENBQUMsT0FBWSxFQUFFLEdBQUcsTUFBTTtRQUNuQyxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUNyQixNQUFNLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDO1FBQzdCLE1BQU0sS0FBSyxHQUFHLE1BQU0sS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbFEsS0FBSyxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLEtBQUssS0FBSyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDM0YsNEJBQTRCO0lBQzlCLENBQUM7SUFFRCxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDbEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDL0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQUU7WUFDeEIsSUFBSSxFQUFFLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDaEQsRUFBRSxDQUFDLGNBQWMsQ0FBQztnQkFDaEIsUUFBUSxFQUFFLFFBQVE7YUFDbkIsQ0FBQyxDQUFDO1lBQ0gsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztTQUMzQztJQUNILENBQUM7SUFFRCxZQUFZLENBQUMsS0FBSyxFQUFFLEdBQUcsTUFBTTtRQUMzQixJQUFJLEtBQUssRUFBRTtZQUNULElBQUksS0FBSyxDQUFDLEtBQUssRUFBRTtnQkFDZixLQUFLLENBQUMsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO2FBQzlCO1lBQ0QsSUFBSSxLQUFLLENBQUMsS0FBSyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxVQUFVLEVBQUU7Z0JBQzFDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtvQkFDL0MsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO29CQUN0QyxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFO3dCQUM1QixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFOzRCQUN4RCxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO3lCQUNoRDtxQkFDRjtpQkFDRjthQUNGO1NBRUY7UUFDRCxJQUFJLE1BQU0sQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUM7U0FDaEY7YUFBTSxJQUFJLE1BQU0sQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBQzlCLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxFQUFFO2dCQUMxRCxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO2FBQ2hFO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztnQkFDN0MsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQzthQUMvRDtTQUNGO2FBQU0sSUFBSSxNQUFNLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtZQUM5QixJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLEVBQUU7Z0JBQzNFLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO2FBQ2pGO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztnQkFDN0MsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztnQkFDOUQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7YUFDaEY7U0FDRjthQUFNO1lBQ0wsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsRUFBRTtnQkFDNUYsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO2FBQ2xHO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztnQkFDN0MsSUFBSSxDQUFDLFVBQVUsQ0FB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SyxDQUFDO1NBQ3BHO1FBQ0QsNEJBQTRCO0lBQzlCLENBQUM7SUFFRCxtQkFBbUIsQ0FBQyxLQUF3QixFQUFFLElBQUksRUFBRSxHQUFHLE1BQU07UUFDM0QsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDckIsTUFBTSxLQUFLLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQztRQUMxQixNQUFNLEtBQUssR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDO1FBQzFCLE1BQU0sTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUM7UUFDN0IsTUFBTSxLQUFLLEdBQUcsTUFBTSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNsUSxJQUFJLEtBQUssRUFBRTtZQUNULE1BQU0sU0FBUyxHQUFHLEtBQUssQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLGlCQUFpQixFQUFFLEtBQUssSUFB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LGVBQWUsQ0FBQztJQUMvQyxDQUFDO0lBQ0QsYUFBYSxDQUFDLEtBQVUsRUFBRSxHQUFHLE1BQU07UUFDakMsTUFBTSxHQUFHLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDbkMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDbkMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUMzRDtRQUNELE1BQU0sTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUM7UUFDN0IsTUFBTSxLQUFLLEdBQUcsTUFBTSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNsUSxLQUFLLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUE7SUFFMUIsQ0FBQztJQUVELGFBQWEsQ0FBQyxLQUFVLEVBQUUsR0FBRyxNQUFNO1FBQ2pDLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ3JCLE1BQU0sTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUM7UUFDN0IsTUFBTSxLQUFLLEdBQUcsTUFBTSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNsUSxNQUFNLEtBQUssR0FBRyxLQUFLLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssS0FBSyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDaEYsSUFBSSxLQUFLLEtBQUssQ0FBQyxDQUFDLElBQUksS0FBSyxDQUFDLElBQUksS0FBSyxt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QUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO2dCQUVyTCxJQUFJLFVBQVUsQ0FBQyxNQUFNLEtBQUssTUFBTSxFQUFFO29CQUNoQyxJQUFJLE1BQU0sS0FBSyxDQUFDLElBQUksVUFBVSxDQUFDLFFBQVEsS0FBSyxVQUFVLEVBQUU7d0JBQ3RELEtBQUssQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFBO3FCQUM1Qjt5QkFBTSxJQUFJLE1BQU0sS0FBSyxDQUFDLElBQUksVUFBVSxDQUFDLFFBQVEsS0FBSyxPQUFPLEVBQUU7d0JBQzFELEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQTtxQkFDN0M7eUJBQU07d0JBQ0wsS0FBSyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUE7cUJBQzVCO29CQUNELElBQUksVUFBVSxDQUFDLFFBQVEsS0FBSyxVQUFVLEVBQUU7d0JBQ3RDLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztxQkFDOUQ7eUJBQU07d0JBQ0wsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsRUFBRSxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUE7cUJBQzdEO2lCQUNGO3FCQUFNO29CQUNMLElBQUksTUFBTSxLQUFLLENBQUMsSUFBSSxVQUFVLENBQUMsUUFBUSxLQUFLLFVBQVUsRUFBRTt3QkFDdEQs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QUFlO1FBYTlGLGVBQWtCO1FBQWxCLG9DQUFrQjtRQU1oQixlQUE4QjtRQUE5QixnREFBOEI7UUFHbUMsZUFBZTtRQUFmLHdDQUFlO1FBc081RSxlQUNBO1FBREEsZ0ZBQ0E7UUFTeUIsZUFBaUM7UUFBakMsMERBQWlDO1FBK0pqQyxlQUFtQztRQUFuQyw0REFBbUM7O3VGRDVhN0QsOEJBQThCO2NBTDFDLFNBQVM7MkJBQ0Usb0NBQW9DOzZNQStxQzlDLFFBQVE7a0JBRFAsWUFBWTttQkFBQyxRQUFRLEVBQUUsQ0FBQyxRQUFRLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBDT01NQSwgRU5URVIsIEksIFNFTUlDT0xPTiB9IGZyb20gXCJAYW5ndWxhci9jZGsva2V5Y29kZXNcIjtcclxuaW1wb3J0IHsgQ2RrRHJhZ0Ryb3AsIG1vdmVJdGVtSW5BcnJheSwgdHJhbnNmZXJBcnJheUl0ZW0gfSBmcm9tIFwiQGFuZ3VsYXIvY2RrL2RyYWctZHJvcFwiO1xyXG5pbXBvcnQgeyBDb21wb25lbnQsIEhvc3RMaXN0ZW5lciwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFVudHlwZWRGb3JtQnVpbGRlciwgVW50eXBlZEZvcm1Hcm91cCwgVmFsaWRhdG9ycyB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5cclxuaW1wb3J0IHsgRGlhbG9nQ3JlYXRlVGVtcGxhdGVDb21wb25lbnQgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy90ZW1wbGF0ZS9kaWFsb2ctY3JlYXRlLXRlbXBsYXRlL2RpYWxvZy1jcmVhdGUtdGVtcGxhdGUuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IEV4aXRDb25maXJtQ29tcG9uZW50IH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvZXhpdC1jb25maXJtL2V4aXQtY29uZmlybS5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgTWF0Q2hpcElucHV0RXZlbnQgfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWwvY2hpcHNcIjtcclxuaW1wb3J0IHsgTWF0RGlhbG9nIH0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsL2RpYWxvZ1wiO1xyXG5pbXBvcnQgeyBPbmJvYXJkaW5nU2VydmljZSB9IGZyb20gXCIuLi8uLi9vbmJvYXJkaW5nLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgU2Nyb2xsVG9TZXJ2aWNlIH0gZnJvbSAnQG5pY2t5LWxlbmFlcnMvbmd4LXNjcm9sbC10byc7XHJcbmltcG9ydCB7IFR5cGVDb21wb25lbnQgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy90ZW1wbGF0ZS90eXBlLWRpYWxvZy90eXBlLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBmaWVsZFdpZHRoIH0gZnJvbSBcIi4uLy4uL3V0aWxzL3V0aWxzXCI7XHJcbmltcG9ydCB7IGxvY2FsZXMgfSBmcm9tICcuLi8uLi9pMThuJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiBcIm9uYm9hcmRpbmctY3JlYXRlLXByb2ZpbGUtdGVtcGxhdGVcIixcclxuICB0ZW1wbGF0ZVVybDogXCIuL3RlbXBsYXRlLXByb2ZpbGUtY3JlYXRlLmNvbXBvbmVudC5odG1sXCIsXHJcbiAgc3R5bGVVcmxzOiBbXCIuL3RlbXBsYXRlLXByb2ZpbGUtY3JlYXRlLmNvbXBvbmVudC5zY3NzXCJdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgVGVtcGxhdGVQcm9maWxlQ3JlYXRlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBmb3JtOiBVbnR5cGVkRm9ybUdyb3VwO1xyXG4gIHZhbGlkQ2F0ZWdvcnkgPSBmYWxzZTtcclxuICBzZXBhcmF0b3JLZXlzQ29kZXMgPSBbRU5URVIsIENPTU1BLCBTRU1JQ09MT05dO1xyXG4gIGN1cnJlbnRQcm9maWw6IGFueSA9IHt9O1xyXG4gIGNhbkV4aXQgPSB0cnVlO1xyXG4gIHRhZ3MgPSBbXTtcclxuICBpZCA9IFwiMFwiO1xyXG4gIHBhcmVudCA9IFtdO1xyXG4gIGxvYWRpbmcgPSBmYWxzZTtcclxuICBlZGl0SW5kZXggPSBudWxsO1xyXG4gIHNob3dQcm9maWxlTmFtZSA9IHRydWU7XHJcblxyXG4gIGxvY2FsZTogYW55ID0ge31cclxuICBsaXZlTGFiZWwgPSB0aGlzLmxvY2FsZS5QVUJMSVNIX1BST0ZJTFxyXG4gIGRyYWZ0TGFiZWwgPSB0aGlzLmxvY2FsZS5SRUdJU1RFUl9EUkFGVFxyXG4gIGludmFsaWRlVmFsdWU6IGJvb2xlYW47XHJcblxyXG4gIGlzUGljdG9MaXN0U2hvdzogYm9vbGVhbjtcclxuICBwaWN0byA9IFwiXCI7XHJcbiAgYWxsID0gXCJcIlxyXG4gIHMxID0gXCJcIlxyXG4gIHMyID0gXCJcIlxyXG4gIHMzID0gXCJcIlxyXG4gIHM0ID0gXCJcIlxyXG4gIGNvbmRpdGlvbkRhdGEgPSB7XHJcbiAgICBhbGw6IFtdLFxyXG4gICAgczE6IFtdLFxyXG4gICAgczI6IFtdLFxyXG4gICAgczM6IFtdLFxyXG4gICAgZGVmYXVsdFZhbHVlOiBbXVxyXG4gIH07XHJcbiAgY2F0ZWdvcmllcyA9IFtdO1xyXG4gIGlzQmxvY2sgPSBmYWxzZTtcclxuICBpc1NlY3Rpb24gPSBmYWxzZTtcclxuICBjdXJyZW50RWRpdEJsb2NrOiBhbnk7XHJcbiAgY3VycmVudENoaXAgPSBcIlwiXHJcbiAgcHJldlZhbHVlID0gXCJcIlxyXG4gIHBhcmFtc0luZGV4OiBhbnlbXTtcclxuICBoaXN0b3JpY3MgPSBbXTtcclxuICBjdXJyZW50Q2FuY2VsZWRJbmRleCA9IG51bGw7XHJcbiAgbmV3RmllbGRJbmRleCA9IG51bGw7XHJcbiAgaXNTdWJtaXR0ZWQ6IGJvb2xlYW47XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGZiOiBVbnR5cGVkRm9ybUJ1aWxkZXIsXHJcbiAgICBwdWJsaWMgc2VydmljZTogT25ib2FyZGluZ1NlcnZpY2UsXHJcbiAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcclxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXHJcbiAgICBwcml2YXRlIGRpYWxvZzogTWF0RGlhbG9nLFxyXG4gICAgcHJpdmF0ZSBzY3JvbGxUb1NlcnZpY2U6IFNjcm9sbFRvU2VydmljZVxyXG4gICkge1xyXG4gICAgdGhpcy5zZXJ2aWNlLl9sYW5nLnN1YnNjcmliZSgobG9jYWxlKSA9PiB7XHJcbiAgICAgIHRoaXMubG9jYWxlID0gbG9jYWxlc1tsb2NhbGVdLlBST0ZJTEU7XHJcbiAgICAgIHRoaXMubGl2ZUxhYmVsID0gdGhpcy5sb2NhbGUuUFVCTElTSF9QUk9GSUxcclxuICAgICAgdGhpcy5kcmFmdExhYmVsID0gdGhpcy5sb2NhbGUuUkVHSVNURVJfRFJBRlRcclxuICAgIH0pXHJcbiAgICB0aGlzLnNlcnZpY2UuX2N1cnJlbnRUZW1wbGF0ZS5zdWJzY3JpYmUoKHByb2ZpbCkgPT4ge1xyXG4gICAgICB0aGlzLmluaXRGb3JtKClcclxuICAgICAgaWYgKHByb2ZpbCkge1xyXG4gICAgICAgIHRoaXMuZm9ybS5wYXRjaFZhbHVlKHByb2ZpbCk7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2ZpbCcsIEpTT04uc3RyaW5naWZ5KHByb2ZpbCkpXHJcblxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnN0IHByb2ZpbCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2ZpbCcpKTtcclxuICAgICAgICBpZiAocHJvZmlsKSB7XHJcbiAgICAgICAgICB0aGlzLmZvcm0ucGF0Y2hWYWx1ZShwcm9maWwpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIGRlZmF1bHRDYXRlZ29yaWU6IGFueSA9IFtcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJVdGlsaXNhdGV1clwiLFxyXG4gICAgICBrZXk6ICd1dGlsaXNhdGV1cicsXHJcbiAgICAgIGVkaXRhYmxlOiBmYWxzZSxcclxuICAgICAgZGVsZXRlYWJsZTogZmFsc2UsXHJcbiAgICAgIGV4cGFuZE1vcmU6IGZhbHNlLFxyXG4gICAgICBleHBhbmRPbmJvYXJkaW5nOiB0cnVlLFxyXG4gICAgICBkZWZhdWx0VmFsdWU6IGZhbHNlLFxyXG4gICAgICBzdWZmaXhFbmRwb2ludDogXCJjYXRlZ29yeS91c2VyXCIsXHJcbiAgICAgIHNlbGVjdG9yOiB7XHJcbiAgICAgICAgbGFiZWw6IFwiQ29tcGFueVwiLFxyXG4gICAgICAgIGtleTogXCJDb21wYW55XCIsXHJcbiAgICAgICAgZGVmYXVsdFZhbHVlOiBbeyB2YWx1ZTogXCJOb3d0ZWFtXCIsIGNoZWNrZWQ6IHRydWUgfSwgeyB2YWx1ZTogXCJJbnRlcm5hbFwiLCBjaGVja2VkOiBmYWxzZSB9XSxcclxuICAgICAgICB2YWx1ZTogXCJOb3d0ZWFtXCJcclxuICAgICAgfSxcclxuICAgICAgdGlja2V0VHlwZToge1xyXG4gICAgICAgIGxhYmVsOiBcIlR5cGUgZGUgdGlja2V0XCIsXHJcbiAgICAgICAga2V5OiBcInR5Y2tldFR5cGVcIixcclxuICAgICAgICBkZWZhdWx0VmFsdWU6IFt7IHZhbHVlOiBcIkNyw6lhdGlvbiBkZSBjb21wdGVcIiwgY2hlY2tlZDogdHJ1ZSwga2V5OiBcIkNyZWF0aW9uX2RlX2NvbXB0ZVwiIH0sIHsgdmFsdWU6IFwiQ29uZmlndXJhdGlvbiBkZSBwb3N0ZVwiLCBjaGVja2VkOiBmYWxzZSwga2V5OiBcIkNvbmZpZ3VyYXRpb25fZGVfcG9zdGVcIiB9XSxcclxuICAgICAgICB2YWx1ZTogXCJDcmVhdGlvbl9kZV9jb21wdGVcIlxyXG4gICAgICB9LFxyXG4gICAgICBmb3JtczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIGxhYmVsOiBcIkNpdmlsaXTDqVwiLFxyXG4gICAgICAgICAga2V5OiBcIlNhbHV0YXRpb25cIixcclxuICAgICAgICAgIGV4cGFuZE9uYm9hcmRpbmc6IHRydWUsXHJcbiAgICAgICAgICBkZWZhdWx0VmFsdWU6IFt7IHZhbHVlOiBcIk0uXCIsIGNoZWNrZWQ6IGZhbHNlIH0sIHsgdmFsdWU6IFwiTW1lXCIsIGNoZWNrZWQ6IGZhbHNlIH1dLFxyXG4gICAgICAgICAgY29uZGl0aW9uOiB7fSxcclxuICAgICAgICAgIHZhbHVlOiBudWxsLFxyXG4gICAgICAgICAgc2l6ZTogMTAsXHJcbiAgICAgICAgICBpc01hbmRhdG9yeTogdHJ1ZSxcclxuICAgICAgICAgIG90aGVyVmFsdWU6ICcnLFxyXG4gICAgICAgICAgdHlwZTogXCJzZWxlY3RcIixcclxuICAgICAgICAgIGVkaXRhYmxlOiBmYWxzZSxcclxuICAgICAgICAgIGRlbGV0ZWFibGU6IGZhbHNlLFxyXG4gICAgICAgICAgc3ViTGV2ZWw6IDEsXHJcblxyXG4gICAgICAgICAgZXhwYW5kTW9yZTogZmFsc2UsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBsYWJlbDogXCJUeXBlIGRlIHByb2ZpbFwiLFxyXG4gICAgICAgICAga2V5OiBcIlR5cGVfZGVfcHJvZmlsX05vd2JvYXJkX19jXCIsXHJcbiAgICAgICAgICBleHBhbmRPbmJvYXJkaW5nOiB0cnVlLFxyXG4gICAgICAgICAgZGVmYXVsdFZhbHVlOiBbeyB2YWx1ZTogXCJNYW5hZ2VyXCIsIGNoZWNrZWQ6IGZhbHNlIH0sIHsgdmFsdWU6IFwiVXRpbGlzYXRldXJcIiwgY2hlY2tlZDogZmFsc2UgfV0sXHJcbiAgICAgICAgICBjb25kaXRpb246IHt9LFxyXG4gICAgICAgICAgdmFsdWU6IG51bGwsXHJcbiAgICAgICAgICBzaXplOiAxMCxcclxuICAgICAgICAgIGlzTWFuZGF0b3J5OiB0cnVlLFxyXG4gICAgICAgICAgb3RoZXJWYWx1ZTogJycsXHJcbiAgICAgICAgICB0eXBlOiBcInNlbGVjdFwiLFxyXG4gICAgICAgICAgZWRpdGFibGU6IGZhbHNlLFxyXG4gICAgICAgICAgZGVsZXRlYWJsZTogZmFsc2UsXHJcbiAgICAgICAgICBzdWJMZXZlbDogMSxcclxuICAgICAgICAgIGV4cGFuZE1vcmU6IGZhbHNlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbGFiZWw6IFwiTm9tXCIsXHJcbiAgICAgICAgICBrZXk6IFwiTGFzdE5hbWVcIixcclxuICAgICAgICAgIGV4cGFuZE9uYm9hcmRpbmc6IHRydWUsXHJcbiAgICAgICAgICBkZWZhdWx0VmFsdWU6IG51bGwsXHJcbiAgICAgICAgICB2YWx1ZTogbnVsbCxcclxuICAgICAgICAgIHNpemU6IDgwLFxyXG4gICAgICAgICAgaXNNYW5kYXRvcnk6IHRydWUsXHJcbiAgICAgICAgICBjb25kaXRpb246IHt9LFxyXG4gICAgICAgICAgb3RoZXJWYWx1ZTogJycsXHJcbiAgICAgICAgICB0eXBlOiBcInRleHRcIixcclxuICAgICAgICAgIGVkaXRhYmxlOiBmYWxzZSxcclxuICAgICAgICAgIGRlbGV0ZWFibGU6IGZhbHNlLFxyXG4gICAgICAgICAgc3ViTGV2ZWw6IDEsXHJcbiAgICAgICAgICBleHBhbmRNb3JlOiBmYWxzZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGxhYmVsOiBcIlByw6lub21cIixcclxuICAgICAgICAgIGtleTogXCJGaXJzdE5hbWVcIixcclxuICAgICAgICAgIGV4cGFuZE9uYm9hcmRpbmc6IHRydWUsXHJcbiAgICAgICAgICBjb25kaXRpb246IHt9LFxyXG4gICAgICAgICAgZGVmYXVsdFZhbHVlOiBudWxsLFxyXG4gICAgICAgICAgdmFsdWU6IG51bGwsXHJcbiAgICAgICAgICBzaXplOiA4MCxcclxuICAgICAgICAgIGlzTWFuZGF0b3J5OiB0cnVlLFxyXG4gICAgICAgICAgb3RoZXJWYWx1ZTogJycsXHJcbiAgICAgICAgICB0eXBlOiBcInRleHRcIixcclxuICAgICAgICAgIGVkaXRhYmxlOiBmYWxzZSxcclxuICAgICAgICAgIGRlbGV0ZWFibGU6IGZhbHNlLFxyXG4gICAgICAgICAgc3ViTGV2ZWw6IDEsXHJcbiAgICAgICAgICBleHBhbmRNb3JlOiBmYWxzZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGxhYmVsOiBcIkVtYWlsXCIsXHJcbiAgICAgICAgICBrZXk6IFwiRW1haWxcIixcclxuICAgICAgICAgIGV4cGFuZE9uYm9hcmRpbmc6IHRydWUsXHJcbiAgICAgICAgICBkZWZhdWx0VmFsdWU6IG51bGwsXHJcbiAgICAgICAgICBjb25kaXRpb246IHt9LFxyXG4gICAgICAgICAgdmFsdWU6IG51bGwsXHJcbiAgICAgICAgICBzaXplOiA4MCxcclxuICAgICAgICAgIGlzTWFuZGF0b3J5OiB0cnVlLFxyXG4gICAgICAgICAgb3RoZXJWYWx1ZTogJycsXHJcbiAgICAgICAgICB0eXBlOiBcImVtYWlsXCIsXHJcbiAgICAgICAgICBlZGl0YWJsZTogZmFsc2UsXHJcbiAgICAgICAgICBkZWxldGVhYmxlOiBmYWxzZSxcclxuICAgICAgICAgIHN1YkxldmVsOiAxLFxyXG4gICAgICAgICAgZXhwYW5kTW9yZTogZmFsc2UsXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbGFiZWw6IFwiRml4ZSAob3B0KVwiLFxyXG4gICAgICAgICAga2V5OiBcIlBob25lXCIsXHJcbiAgICAgICAgICBleHBhbmRPbmJvYXJkaW5nOiB0cnVlLFxyXG4gICAgICAgICAgZGVmYXVsdFZhbHVlOiBudWxsLFxyXG4gICAgICAgICAgY29uZGl0aW9uOiB7fSxcclxuICAgICAgICAgIHZhbHVlOiBudWxsLFxyXG4gICAgICAgICAgc2l6ZTogMjAsXHJcbiAgICAgICAgICBpc01hbmRhdG9yeTogZmFsc2UsXHJcbiAgICAgICAgICBvdGhlclZhbHVlOiAnJyxcclxuICAgICAgICAgIHR5cGU6IFwidGVsXCIsXHJcbiAgICAgICAgICBlZGl0YWJsZTogZmFsc2UsXHJcbiAgICAgICAgICBkZWxldGVhYmxlOiBmYWxzZSxcclxuICAgICAgICAgIHN1YkxldmVsOiAxLFxyXG5cclxuICAgICAgICAgIGV4cGFuZE1vcmU6IGZhbHNlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbGFiZWw6IFwiTW9iaWxlXCIsXHJcbiAgICAgICAgICBrZXk6IFwiTW9iaWxlUGhvbmVcIixcclxuICAgICAgICAgIGV4cGFuZE9uYm9hcmRpbmc6IHRydWUsXHJcbiAgICAgICAgICBkZWZhdWx0VmFsdWU6IG51bGwsXHJcbiAgICAgICAgICBjb25kaXRpb246IHt9LFxyXG4gICAgICAgICAgdmFsdWU6IG51bGwsXHJcbiAgICAgICAgICBzaXplOiAyMCxcclxuICAgICAgICAgIGlzTWFuZGF0b3J5OiBmYWxzZSxcclxuICAgICAgICAgIG90aGVyVmFsdWU6ICcnLFxyXG4gICAgICAgICAgdHlwZTogXCJ0ZWxcIixcclxuICAgICAgICAgIGVkaXRhYmxlOiBmYWxzZSxcclxuICAgICAgICAgIGRlbGV0ZWFibGU6IGZhbHNlLFxyXG4gICAgICAgICAgc3ViTGV2ZWw6IDEsXHJcbiAgICAgICAgICBleHBhbmRNb3JlOiBmYWxzZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGxhYmVsOiBcIkZvbmN0aW9uXCIsXHJcbiAgICAgICAgICBrZXk6IFwiVGl0bGVcIixcclxuICAgICAgICAgIGV4cGFuZE9uYm9hcmRpbmc6IHRydWUsXHJcbiAgICAgICAgICBkZWZhdWx0VmFsdWU6IG51bGwsXHJcbiAgICAgICAgICB2YWx1ZTogbnVsbCxcclxuICAgICAgICAgIGNvbmRpdGlvbjoge30sXHJcbiAgICAgICAgICBzaXplOiA4MCxcclxuICAgICAgICAgIGlzTWFuZGF0b3J5OiB0cnVlLFxyXG4gICAgICAgICAgb3RoZXJWYWx1ZTogJycsXHJcbiAgICAgICAgICB0eXBlOiBcInRleHRcIixcclxuICAgICAgICAgIGVkaXRhYmxlOiBmYWxzZSxcclxuICAgICAgICAgIGRlbGV0ZWFibGU6IGZhbHNlLFxyXG4gICAgICAgICAgc3ViTGV2ZWw6IDEsXHJcbiAgICAgICAgICBleHBhbmRNb3JlOiBmYWxzZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGxhYmVsOiBcIkV0YWJsaXNzZW1lbnQgLyBTaXRlXCIsXHJcbiAgICAgICAgICBrZXk6IFwiQWNjb3VudE5hbWVcIixcclxuICAgICAgICAgIGV4cGFuZE9uYm9hcmRpbmc6IHRydWUsXHJcbiAgICAgICAgICBkZWZhdWx0VmFsdWU6IG51bGwsXHJcbiAgICAgICAgICB2YWx1ZTogbnVsbCxcclxuICAgICAgICAgIGNvbmRpdGlvbjoge30sXHJcbiAgICAgICAgICBzaXplOiA4MCxcclxuICAgICAgICAgIGlzTWFuZGF0b3J5OiB0cnVlLFxyXG4gICAgICAgICAgb3RoZXJWYWx1ZTogJycsXHJcbiAgICAgICAgICB0eXBlOiBcInRleHRcIixcclxuICAgICAgICAgIGVkaXRhYmxlOiBmYWxzZSxcclxuICAgICAgICAgIGRlbGV0ZWFibGU6IGZhbHNlLFxyXG4gICAgICAgICAgc3ViTGV2ZWw6IDEsXHJcbiAgICAgICAgICBleHBhbmRNb3JlOiBmYWxzZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGxhYmVsOiBcIkFjY8OocyBhdSBwb3J0YWlsXCIsXHJcbiAgICAgICAgICBrZXk6IFwiQWNjX3NfYXVfcG9ydGFpbF9jbGllbnRfTm93Qm9hcmRfX2NcIixcclxuICAgICAgICAgIGNvbmRpdGlvbjoge30sXHJcbiAgICAgICAgICBleHBhbmRPbmJvYXJkaW5nOiB0cnVlLFxyXG4gICAgICAgICAgZGVmYXVsdFZhbHVlOiBbeyB2YWx1ZTogXCJPdWlcIiwgY2hlY2tlZDogZmFsc2UgfSwgeyB2YWx1ZTogXCJOb25cIiwgY2hlY2tlZDogZmFsc2UgfV0sXHJcbiAgICAgICAgICB2YWx1ZTogbnVsbCxcclxuICAgICAgICAgIHNpemU6IDEwLFxyXG4gICAgICAgICAgaXNNYW5kYXRvcnk6IHRydWUsXHJcbiAgICAgICAgICBvdGhlclZhbHVlOiAnJyxcclxuICAgICAgICAgIHR5cGU6IFwic2VsZWN0XCIsXHJcbiAgICAgICAgICBlZGl0YWJsZTogZmFsc2UsXHJcbiAgICAgICAgICBkZWxldGVhYmxlOiBmYWxzZSxcclxuICAgICAgICAgIHN1YkxldmVsOiAxLFxyXG5cclxuICAgICAgICAgIGV4cGFuZE1vcmU6IGZhbHNlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbGFiZWw6IFwiTGFuZ3VlXCIsXHJcbiAgICAgICAgICBrZXk6IFwiTGFuZ3VlX21hdGVybmVsbGVfX2NcIixcclxuICAgICAgICAgIGV4cGFuZE9uYm9hcmRpbmc6IHRydWUsXHJcbiAgICAgICAgICBkZWZhdWx0VmFsdWU6IFt7IHZhbHVlOiBcIkZyYW7Dp2Fpc1wiLCBjaGVja2VkOiBmYWxzZSB9LCB7IHZhbHVlOiBcIkFuZ2xhaXNcIiwgY2hlY2tlZDogZmFsc2UgfV0sXHJcbiAgICAgICAgICBjb25kaXRpb246IHt9LFxyXG4gICAgICAgICAgdmFsdWU6IG51bGwsXHJcbiAgICAgICAgICBzaXplOiAxMCxcclxuICAgICAgICAgIGlzTWFuZGF0b3J5OiB0cnVlLFxyXG4gICAgICAgICAgb3RoZXJWYWx1ZTogJycsXHJcbiAgICAgICAgICB0eXBlOiBcInNlbGVjdFwiLFxyXG4gICAgICAgICAgZWRpdGFibGU6IGZhbHNlLFxyXG4gICAgICAgICAgZGVsZXRlYWJsZTogZmFsc2UsXHJcbiAgICAgICAgICBzdWJMZXZlbDogMSxcclxuICAgICAgICAgIGV4cGFuZE1vcmU6IGZhbHNlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbGFiZWw6IFwiRGF0ZSBkJ2VudHLDqWVcIixcclxuICAgICAgICAgIGtleTogXCJkYXRlX29mX2VudHJ5XCIsXHJcbiAgICAgICAgICBleHBhbmRPbmJvYXJkaW5nOiB0cnVlLFxyXG4gICAgICAgICAgZGVmYXVsdFZhbHVlOiBudWxsLFxyXG4gICAgICAgICAgdmFsdWU6IG51bGwsXHJcbiAgICAgICAgICBjb25kaXRpb246IHt9LFxyXG4gICAgICAgICAgc2l6ZTogODAsXHJcbiAgICAgICAgICBpc01hbmRhdG9yeTogdHJ1ZSxcclxuICAgICAgICAgIG90aGVyVmFsdWU6ICcnLFxyXG4gICAgICAgICAgdHlwZTogXCJkYXRlXCIsXHJcbiAgICAgICAgICBlZGl0YWJsZTogZmFsc2UsXHJcbiAgICAgICAgICBkZWxldGVhYmxlOiBmYWxzZSxcclxuICAgICAgICAgIHN1YkxldmVsOiAxLFxyXG4gICAgICAgICAgZXhwYW5kTW9yZTogZmFsc2UsXHJcbiAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwiU2Vzc2lvbiBkJ3V0aWxpc2F0ZXVyXCIsXHJcbiAgICAgIGtleTogXCJzZXNzaW9uZCd1dGlsaXNhdGV1clwiLFxyXG4gICAgICBlZGl0YWJsZTogdHJ1ZSxcclxuICAgICAgaXNDb25kaXRpb25hbDogZmFsc2UsXHJcbiAgICAgIGNvbmRpdGlvblZhbHVlOiBcIlwiLFxyXG4gICAgICBjb25kaXRpb246IHt9LFxyXG4gICAgICBkZWxldGVhYmxlOiB0cnVlLFxyXG4gICAgICBzZWxlY3RlZDogdHJ1ZSxcclxuICAgICAgZXhwYW5kTW9yZTogZmFsc2UsXHJcbiAgICAgIGV4cGFuZE9uYm9hcmRpbmc6IHRydWUsXHJcbiAgICAgIGRlZmF1bHRWYWx1ZTogZmFsc2UsXHJcbiAgICAgIHN1ZmZpeEVuZHBvaW50OiBcImNhdGVnb3J5L3VzZXItc2Vzc2lvblwiLFxyXG4gICAgICBzZWxlY3Rvcjoge1xyXG4gICAgICAgIGxhYmVsOiBcIkNvbXBhbnlcIixcclxuICAgICAgICBrZXk6IFwiQ29tcGFueVwiLFxyXG4gICAgICAgIGRlZmF1bHRWYWx1ZTogW3sgdmFsdWU6IFwiTm93dGVhbVwiLCBjaGVja2VkOiB0cnVlIH0sIHsgdmFsdWU6IFwiSW50ZXJuYWxcIiwgY2hlY2tlZDogZmFsc2UgfV0sXHJcbiAgICAgICAgdmFsdWU6IFwiTm93dGVhbVwiXHJcbiAgICAgIH0sXHJcbiAgICAgIHRpY2tldFR5cGU6IHtcclxuICAgICAgICBsYWJlbDogXCJUeXBlIGRlIHRpY2tldFwiLFxyXG4gICAgICAgIGtleTogXCJ0eWNrZXRUeXBlXCIsXHJcbiAgICAgICAgZGVmYXVsdFZhbHVlOiBbeyB2YWx1ZTogXCJDcsOpYXRpb24gZGUgY29tcHRlXCIsIGNoZWNrZWQ6IHRydWUsIGtleTogXCJDcmVhdGlvbl9kZV9jb21wdGVcIiB9LCB7IHZhbHVlOiBcIkNvbmZpZ3VyYXRpb24gZGUgcG9zdGVcIiwgY2hlY2tlZDogZmFsc2UsIGtleTogXCJDb25maWd1cmF0aW9uX2RlX3Bvc3RlXCIgfV0sXHJcbiAgICAgICAgdmFsdWU6IFwiQ3JlYXRpb25fZGVfY29tcHRlXCJcclxuICAgICAgfSxcclxuICAgICAgZm9ybXM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBsYWJlbDogXCJVdGlsaXNhdGV1ciBsb2NhbCDDoCBjcsOpZXJcIixcclxuICAgICAgICAgIGtleTogXCJVc2VyTG9jYWxUb0NyZWF0ZVwiLFxyXG4gICAgICAgICAgZXhwYW5kT25ib2FyZGluZzogdHJ1ZSxcclxuICAgICAgICAgIGRlZmF1bHRWYWx1ZTogbnVsbCxcclxuICAgICAgICAgIHZhbHVlOiB0cnVlLFxyXG4gICAgICAgICAgc2l6ZTogODAsXHJcbiAgICAgICAgICBpc01hbmRhdG9yeTogZmFsc2UsXHJcbiAgICAgICAgICBvdGhlclZhbHVlOiAnJyxcclxuICAgICAgICAgIHR5cGU6IFwiY2hlY2tib3hcIixcclxuICAgICAgICAgIGVkaXRhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgaXNDb25kaXRpb25hbDogZmFsc2UsXHJcbiAgICAgICAgICBjb25kaXRpb25WYWx1ZTogXCJcIixcclxuICAgICAgICAgIGNvbmRpdGlvbjoge30sXHJcbiAgICAgICAgICBkZWxldGVhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgc3ViTGV2ZWw6IDEsXHJcbiAgICAgICAgICBleHBhbmRNb3JlOiBmYWxzZSxcclxuICAgICAgICAgIC8qc2VsZWN0b3I6IHtcclxuICAgICAgICAgICAgbGFiZWw6IFwiQ29tcGFueVwiLFxyXG4gICAgICAgICAgICBrZXk6IFwiQ29tcGFueVwiLFxyXG4gICAgICAgICAgICBkZWZhdWx0VmFsdWU6IFt7IHZhbHVlOiBcIk5vd3RlYW1cIiwgY2hlY2tlZDogdHJ1ZSB9LCB7IHZhbHVlOiBcIkludGVybmFsXCIsIGNoZWNrZWQ6IGZhbHNlIH1dLFxyXG4gICAgICAgICAgICB2YWx1ZTogXCJOb3d0ZWFtXCJcclxuICAgICAgICAgIH0sKi9cclxuICAgICAgICAgIGZvcm1zOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBsYWJlbDogXCJMb2dpblwiLFxyXG4gICAgICAgICAgICAgIGtleTogXCJMb2dpblwiLFxyXG4gICAgICAgICAgICAgIGV4cGFuZE9uYm9hcmRpbmc6IHRydWUsXHJcbiAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlOiBudWxsLFxyXG4gICAgICAgICAgICAgIHZhbHVlOiBudWxsLFxyXG4gICAgICAgICAgICAgIHNpemU6IDgwLFxyXG4gICAgICAgICAgICAgIGlzTWFuZGF0b3J5OiB0cnVlLFxyXG4gICAgICAgICAgICAgIG90aGVyVmFsdWU6ICcnLFxyXG4gICAgICAgICAgICAgIHR5cGU6IFwidGV4dFwiLFxyXG4gICAgICAgICAgICAgIGVkaXRhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICAgIGlzQ29uZGl0aW9uYWw6IGZhbHNlLFxyXG4gICAgICAgICAgICAgIGNvbmRpdGlvblZhbHVlOiBcIlwiLFxyXG4gICAgICAgICAgICAgIGNvbmRpdGlvbjoge30sXHJcbiAgICAgICAgICAgICAgZGVsZXRlYWJsZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgc3ViTGV2ZWw6IDIsXHJcbiAgICAgICAgICAgICAgZXhwYW5kTW9yZTogZmFsc2UsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBsYWJlbDogXCJNb3QgZGUgcGFzc2VcIixcclxuICAgICAgICAgICAgICBrZXk6IFwiUGFzc3dvcmRcIixcclxuICAgICAgICAgICAgICBleHBhbmRPbmJvYXJkaW5nOiB0cnVlLFxyXG4gICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZTogbnVsbCxcclxuICAgICAgICAgICAgICB2YWx1ZTogbnVsbCxcclxuICAgICAgICAgICAgICBzaXplOiA4MCxcclxuICAgICAgICAgICAgICBpc01hbmRhdG9yeTogdHJ1ZSxcclxuICAgICAgICAgICAgICBvdGhlclZhbHVlOiAnJyxcclxuICAgICAgICAgICAgICB0eXBlOiBcInBhc3N3b3JkXCIsXHJcbiAgICAgICAgICAgICAgZWRpdGFibGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgaXNDb25kaXRpb25hbDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgY29uZGl0aW9uVmFsdWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgY29uZGl0aW9uOiB7fSxcclxuICAgICAgICAgICAgICBkZWxldGVhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICAgIHN1YkxldmVsOiAyLFxyXG4gICAgICAgICAgICAgIGV4cGFuZE1vcmU6IGZhbHNlLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgXSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGxhYmVsOiBcIlV0aWxpc2F0ZXVyIEFEIChzZXJ2ZXVyKSDDoCBjcsOpZXJcIixcclxuICAgICAgICAgIGtleTogXCJVc2VyU2VydmVyVG9DcmVhdGVcIixcclxuICAgICAgICAgIGV4cGFuZE9uYm9hcmRpbmc6IHRydWUsXHJcbiAgICAgICAgICBkZWZhdWx0VmFsdWU6IG51bGwsXHJcbiAgICAgICAgICB2YWx1ZTogdHJ1ZSxcclxuICAgICAgICAgIHNpemU6IDgwLFxyXG4gICAgICAgICAgaXNNYW5kYXRvcnk6IGZhbHNlLFxyXG4gICAgICAgICAgb3RoZXJWYWx1ZTogJycsXHJcbiAgICAgICAgICB0eXBlOiBcImNoZWNrYm94XCIsXHJcbiAgICAgICAgICBlZGl0YWJsZTogdHJ1ZSxcclxuICAgICAgICAgIGlzQ29uZGl0aW9uYWw6IGZhbHNlLFxyXG4gICAgICAgICAgY29uZGl0aW9uVmFsdWU6IFwiXCIsXHJcbiAgICAgICAgICBjb25kaXRpb246IHt9LFxyXG4gICAgICAgICAgZGVsZXRlYWJsZTogdHJ1ZSxcclxuICAgICAgICAgIHN1YkxldmVsOiAxLFxyXG4gICAgICAgICAgZXhwYW5kTW9yZTogZmFsc2UsXHJcbiAgICAgICAgICBmb3JtczogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgbGFiZWw6IFwiTm9tIGRlIGRvbWFpbmVcIixcclxuICAgICAgICAgICAgICBrZXk6IFwiRG9tYWluTmFtZVwiLFxyXG4gICAgICAgICAgICAgIGV4cGFuZE9uYm9hcmRpbmc6IHRydWUsXHJcbiAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlOiBudWxsLFxyXG4gICAgICAgICAgICAgIHZhbHVlOiBudWxsLFxyXG4gICAgICAgICAgICAgIHNpemU6IDgwLFxyXG4gICAgICAgICAgICAgIGlzTWFuZGF0b3J5OiB0cnVlLFxyXG4gICAgICAgICAgICAgIG90aGVyVmFsdWU6ICcnLFxyXG4gICAgICAgICAgICAgIHR5cGU6IFwidGV4dFwiLFxyXG4gICAgICAgICAgICAgIGVkaXRhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICAgIGlzQ29uZGl0aW9uYWw6IGZhbHNlLFxyXG4gICAgICAgICAgICAgIGNvbmRpdGlvblZhbHVlOiBcIlwiLFxyXG4gICAgICAgICAgICAgIGNvbmRpdGlvbjoge30sXHJcbiAgICAgICAgICAgICAgZGVsZXRlYWJsZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgc3ViTGV2ZWw6IDIsXHJcbiAgICAgICAgICAgICAgZXhwYW5kTW9yZTogZmFsc2UsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBsYWJlbDogXCJWb3RyZSBsb2dpblwiLFxyXG4gICAgICAgICAgICAgIGtleTogXCJZb3VyTG9naW5cIixcclxuICAgICAgICAgICAgICBleHBhbmRPbmJvYXJkaW5nOiB0cnVlLFxyXG4gICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZTogbnVsbCxcclxuICAgICAgICAgICAgICB2YWx1ZTogbnVsbCxcclxuICAgICAgICAgICAgICBzaXplOiA4MCxcclxuICAgICAgICAgICAgICBpc01hbmRhdG9yeTogdHJ1ZSxcclxuICAgICAgICAgICAgICBvdGhlclZhbHVlOiAnJyxcclxuICAgICAgICAgICAgICB0eXBlOiBcInRleHRcIixcclxuICAgICAgICAgICAgICBlZGl0YWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgICBpc0NvbmRpdGlvbmFsOiBmYWxzZSxcclxuICAgICAgICAgICAgICBjb25kaXRpb25WYWx1ZTogXCJcIixcclxuICAgICAgICAgICAgICBjb25kaXRpb246IHt9LFxyXG4gICAgICAgICAgICAgIGRlbGV0ZWFibGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgc3ViTGV2ZWw6IDIsXHJcbiAgICAgICAgICAgICAgZXhwYW5kTW9yZTogZmFsc2UsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBsYWJlbDogXCJWb3RyZSBtb3QgZGUgcGFzc2VcIixcclxuICAgICAgICAgICAgICBrZXk6IFwiWW91clBhc3N3b3JkXCIsXHJcbiAgICAgICAgICAgICAgZXhwYW5kT25ib2FyZGluZzogdHJ1ZSxcclxuICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU6IG51bGwsXHJcbiAgICAgICAgICAgICAgdmFsdWU6IG51bGwsXHJcbiAgICAgICAgICAgICAgc2l6ZTogODAsXHJcbiAgICAgICAgICAgICAgaXNNYW5kYXRvcnk6IHRydWUsXHJcbiAgICAgICAgICAgICAgb3RoZXJWYWx1ZTogJycsXHJcbiAgICAgICAgICAgICAgdHlwZTogXCJwYXNzd29yZFwiLFxyXG4gICAgICAgICAgICAgIGVkaXRhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICAgIGlzQ29uZGl0aW9uYWw6IGZhbHNlLFxyXG4gICAgICAgICAgICAgIGNvbmRpdGlvblZhbHVlOiBcIlwiLFxyXG4gICAgICAgICAgICAgIGNvbmRpdGlvbjoge30sXHJcbiAgICAgICAgICAgICAgZGVsZXRlYWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgICBzdWJMZXZlbDogMixcclxuICAgICAgICAgICAgICBleHBhbmRNb3JlOiBmYWxzZSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIGxhYmVsOiBcIkdyb3VwZSBkZSBzw6ljdXJpdMOpXCIsXHJcbiAgICAgICAgICAgICAga2V5OiBcIkdyb3VwU2VjdXJpdHlcIixcclxuICAgICAgICAgICAgICBleHBhbmRPbmJvYXJkaW5nOiB0cnVlLFxyXG4gICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZTogbnVsbCxcclxuICAgICAgICAgICAgICB2YWx1ZTogdHJ1ZSxcclxuICAgICAgICAgICAgICBzaXplOiA4MCxcclxuICAgICAgICAgICAgICBpc01hbmRhdG9yeTogdHJ1ZSxcclxuICAgICAgICAgICAgICBvdGhlclZhbHVlOiAnJyxcclxuICAgICAgICAgICAgICB0eXBlOiBcImNoZWNrYm94XCIsXHJcbiAgICAgICAgICAgICAgZWRpdGFibGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgaXNDb25kaXRpb25hbDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgY29uZGl0aW9uVmFsdWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgY29uZGl0aW9uOiB7fSxcclxuICAgICAgICAgICAgICBkZWxldGVhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICAgIHN1YkxldmVsOiAyLFxyXG4gICAgICAgICAgICAgIGV4cGFuZE1vcmU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgIGZvcm1zOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIlV0aWxpc2F0ZXVyIGF2ZWMgbGVzIGRyb2l0cyBzaW1pbGFpcmVzXCIsXHJcbiAgICAgICAgICAgICAgICAgIGtleTogXCJVc2VyV2l0aFNpbWlsYXJBY2Nlc3NcIixcclxuICAgICAgICAgICAgICAgICAgZXhwYW5kT25ib2FyZGluZzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZTogbnVsbCxcclxuICAgICAgICAgICAgICAgICAgc2l6ZTogODAsXHJcbiAgICAgICAgICAgICAgICAgIGlzTWFuZGF0b3J5OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICBvdGhlclZhbHVlOiAnJyxcclxuICAgICAgICAgICAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXHJcbiAgICAgICAgICAgICAgICAgIGVkaXRhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICBpc0NvbmRpdGlvbmFsOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgY29uZGl0aW9uVmFsdWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgIGNvbmRpdGlvbjoge30sXHJcbiAgICAgICAgICAgICAgICAgIGRlbGV0ZWFibGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgIHN1YkxldmVsOiAzLFxyXG4gICAgICAgICAgICAgICAgICBleHBhbmRNb3JlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIkRlc2NyaXB0aW9uc1wiLFxyXG4gICAgICAgICAgICAgICAgICBrZXk6IFwiRGVzY3JpcHRpb25cIixcclxuICAgICAgICAgICAgICAgICAgZXhwYW5kT25ib2FyZGluZzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZTogbnVsbCxcclxuICAgICAgICAgICAgICAgICAgc2l6ZTogMjU1LFxyXG4gICAgICAgICAgICAgICAgICBpc01hbmRhdG9yeTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgb3RoZXJWYWx1ZTogJycsXHJcbiAgICAgICAgICAgICAgICAgIHR5cGU6IFwidGV4dGFyZWFcIixcclxuICAgICAgICAgICAgICAgICAgZWRpdGFibGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgIGlzQ29uZGl0aW9uYWw6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICBjb25kaXRpb25WYWx1ZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgY29uZGl0aW9uOiB7fSxcclxuICAgICAgICAgICAgICAgICAgZGVsZXRlYWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgc3ViTGV2ZWw6IDMsXHJcbiAgICAgICAgICAgICAgICAgIGV4cGFuZE1vcmU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgXSxcclxuICAgICAgICB9LFxyXG4gICAgICBdLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJNZXNzYWdlcmllXCIsXHJcbiAgICAgIGtleTogJ21lc3NhZ2VyaWUnLFxyXG4gICAgICBleHBhbmRNb3JlOiBmYWxzZSxcclxuICAgICAgc3VmZml4RW5kcG9pbnQ6IFwiY2F0ZWdvcnkvbWVzc2FnZXJpZVwiLFxyXG4gICAgICBzZWxlY3RlZDogdHJ1ZSxcclxuICAgICAgZWRpdGFibGU6IHRydWUsXHJcbiAgICAgIGlzQ29uZGl0aW9uYWw6IGZhbHNlLFxyXG4gICAgICBjb25kaXRpb25WYWx1ZTogXCJcIixcclxuICAgICAgY29uZGl0aW9uOiB7fSxcclxuICAgICAgZGVsZXRlYWJsZTogdHJ1ZSxcclxuICAgICAgZXhwYW5kT25ib2FyZGluZzogdHJ1ZSxcclxuICAgICAgZGVmYXVsdFZhbHVlOiBmYWxzZSxcclxuICAgICAgc2VsZWN0b3I6IHtcclxuICAgICAgICBsYWJlbDogXCJDb21wYW55XCIsXHJcbiAgICAgICAga2V5OiBcIkNvbXBhbnlcIixcclxuICAgICAgICBkZWZhdWx0VmFsdWU6IFt7IHZhbHVlOiBcIk5vd3RlYW1cIiwgY2hlY2tlZDogdHJ1ZSB9LCB7IHZhbHVlOiBcIkludGVybmFsXCIsIGNoZWNrZWQ6IGZhbHNlIH1dLFxyXG4gICAgICAgIHZhbHVlOiBcIk5vd3RlYW1cIlxyXG4gICAgICB9LFxyXG4gICAgICB0aWNrZXRUeXBlOiB7XHJcbiAgICAgICAgbGFiZWw6IFwiVHlwZSBkZSB0aWNrZXRcIixcclxuICAgICAgICBrZXk6IFwidHlja2V0VHlwZVwiLFxyXG4gICAgICAgIGRlZmF1bHRWYWx1ZTogW3sgdmFsdWU6IFwiQ3LDqWF0aW9uIGRlIGNvbXB0ZVwiLCBjaGVja2VkOiB0cnVlLCBrZXk6IFwiQ3JlYXRpb25fZGVfY29tcHRlXCIgfSwgeyB2YWx1ZTogXCJDb25maWd1cmF0aW9uIGRlIHBvc3RlXCIsIGNoZWNrZWQ6IGZhbHNlLCBrZXk6IFwiQ29uZmlndXJhdGlvbl9kZV9wb3N0ZVwiIH1dLFxyXG4gICAgICAgIHZhbHVlOiBcIkNyZWF0aW9uX2RlX2NvbXB0ZVwiXHJcbiAgICAgIH0sXHJcbiAgICAgIGZvcm1zOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbGFiZWw6IFwiQWRyZXNzZSBtYWlsIMOgIGNyw6llclwiLFxyXG4gICAgICAgICAga2V5OiBcIkVtYWlsVG9DcmVhdGVcIixcclxuICAgICAgICAgIGV4cGFuZE9uYm9hcmRpbmc6IHRydWUsXHJcbiAgICAgICAgICBkZWZhdWx0VmFsdWU6IG51bGwsXHJcbiAgICAgICAgICB2YWx1ZTogdHJ1ZSxcclxuICAgICAgICAgIHNpemU6IDgwLFxyXG4gICAgICAgICAgaXNNYW5kYXRvcnk6IHRydWUsXHJcbiAgICAgICAgICBvdGhlclZhbHVlOiAnJyxcclxuICAgICAgICAgIHR5cGU6IFwiY2hlY2tib3hcIixcclxuICAgICAgICAgIGVkaXRhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgaXNDb25kaXRpb25hbDogZmFsc2UsXHJcbiAgICAgICAgICBjb25kaXRpb25WYWx1ZTogXCJcIixcclxuICAgICAgICAgIGNvbmRpdGlvbjoge30sXHJcbiAgICAgICAgICBkZWxldGVhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgc3ViTGV2ZWw6IDEsXHJcbiAgICAgICAgICBleHBhbmRNb3JlOiBmYWxzZSxcclxuICAgICAgICAgIC8qc2VsZWN0b3I6IHtcclxuICAgICAgICAgICAgbGFiZWw6IFwiQ29tcGFueVwiLFxyXG4gICAgICAgICAgICBrZXk6IFwiQ29tcGFueVwiLFxyXG4gICAgICAgICAgICBkZWZhdWx0VmFsdWU6IFt7IHZhbHVlOiBcIk5vd3RlYW1cIiwgY2hlY2tlZDogdHJ1ZSB9LCB7IHZhbHVlOiBcIkludGVybmFsXCIsIGNoZWNrZWQ6IGZhbHNlIH1dLFxyXG4gICAgICAgICAgICB2YWx1ZTogXCJOb3d0ZWFtXCJcclxuICAgICAgICAgIH0sKi9cclxuICAgICAgICAgIGZvcm1zOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBsYWJlbDogXCJBZHJlc3NlIG1haWxcIixcclxuICAgICAgICAgICAgICBrZXk6IFwiRW1haWxcIixcclxuICAgICAgICAgICAgICBleHBhbmRPbmJvYXJkaW5nOiB0cnVlLFxyXG4gICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZTogbnVsbCxcclxuICAgICAgICAgICAgICB2YWx1ZTogbnVsbCxcclxuICAgICAgICAgICAgICBzaXplOiA4MCxcclxuICAgICAgICAgICAgICBpc01hbmRhdG9yeTogdHJ1ZSxcclxuICAgICAgICAgICAgICBvdGhlclZhbHVlOiAnJyxcclxuICAgICAgICAgICAgICB0eXBlOiBcImVtYWlsXCIsXHJcbiAgICAgICAgICAgICAgZWRpdGFibGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgaXNDb25kaXRpb25hbDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgY29uZGl0aW9uVmFsdWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgY29uZGl0aW9uOiB7fSxcclxuICAgICAgICAgICAgICBkZWxldGVhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICAgIHN1YkxldmVsOiAyLFxyXG4gICAgICAgICAgICAgIGV4cGFuZE1vcmU6IGZhbHNlLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgbGFiZWw6IFwiVHlwZSBkZSBsaWNlbmNlIChzaSBnw6lyw6llcyBwYXIgbGUgY2xpZW50KVwiLFxyXG4gICAgICAgICAgICAgIGtleTogXCJTZXJpYWxLZXlcIixcclxuICAgICAgICAgICAgICBleHBhbmRPbmJvYXJkaW5nOiB0cnVlLFxyXG4gICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZTogbnVsbCxcclxuICAgICAgICAgICAgICB2YWx1ZTogbnVsbCxcclxuICAgICAgICAgICAgICBzaXplOiAxMDAwLFxyXG4gICAgICAgICAgICAgIGlzTWFuZGF0b3J5OiB0cnVlLFxyXG4gICAgICAgICAgICAgIG90aGVyVmFsdWU6ICcnLFxyXG4gICAgICAgICAgICAgIHR5cGU6IFwidGV4dFwiLFxyXG4gICAgICAgICAgICAgIGVkaXRhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICAgIGlzQ29uZGl0aW9uYWw6IGZhbHNlLFxyXG4gICAgICAgICAgICAgIGNvbmRpdGlvblZhbHVlOiBcIlwiLFxyXG4gICAgICAgICAgICAgIGNvbmRpdGlvbjoge30sXHJcbiAgICAgICAgICAgICAgZGVsZXRlYWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgICBzdWJMZXZlbDogMixcclxuICAgICAgICAgICAgICBleHBhbmRNb3JlOiBmYWxzZSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIF0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBsYWJlbDogXCJMaXN0ZXMgIGRlIGRpc3RyaWJ1dGlvblwiLFxyXG4gICAgICAgICAga2V5OiBcIkRpc3RyaWJ1dGlvbkxpc3RcIixcclxuICAgICAgICAgIGV4cGFuZE9uYm9hcmRpbmc6IHRydWUsXHJcbiAgICAgICAgICBkZWZhdWx0VmFsdWU6IG51bGwsXHJcbiAgICAgICAgICB2YWx1ZTogdHJ1ZSxcclxuICAgICAgICAgIHNpemU6IDgwLFxyXG4gICAgICAgICAgaXNNYW5kYXRvcnk6IHRydWUsXHJcbiAgICAgICAgICBvdGhlclZhbHVlOiAnJyxcclxuICAgICAgICAgIHR5cGU6IFwiY2hlY2tib3hcIixcclxuICAgICAgICAgIGVkaXRhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgaXNDb25kaXRpb25hbDogZmFsc2UsXHJcbiAgICAgICAgICBjb25kaXRpb25WYWx1ZTogXCJcIixcclxuICAgICAgICAgIGNvbmRpdGlvbjoge30sXHJcbiAgICAgICAgICBkZWxldGVhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgc3ViTGV2ZWw6IDEsXHJcbiAgICAgICAgICBleHBhbmRNb3JlOiBmYWxzZSxcclxuICAgICAgICAgIC8qc2VsZWN0b3I6IHtcclxuICAgICAgICAgICAgbGFiZWw6IFwiQ29tcGFueVwiLFxyXG4gICAgICAgICAgICBrZXk6IFwiQ29tcGFueVwiLFxyXG4gICAgICAgICAgICBkZWZhdWx0VmFsdWU6IFt7IHZhbHVlOiBcIk5vd3RlYW1cIiwgY2hlY2tlZDogdHJ1ZSB9LCB7IHZhbHVlOiBcIkludGVybmFsXCIsIGNoZWNrZWQ6IGZhbHNlIH1dLFxyXG4gICAgICAgICAgICB2YWx1ZTogXCJOb3d0ZWFtXCJcclxuICAgICAgICAgIH0sKi9cclxuICAgICAgICAgIGZvcm1zOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBsYWJlbDogXCJVdGlsaXNhdGV1ciBhdmVjIGxlcyBsaXN0ZXMgc2ltaWxhaXJlc1wiLFxyXG4gICAgICAgICAgICAgIGtleTogXCJVc2VyV2l0aFNpbWlsYXJMaXN0XCIsXHJcbiAgICAgICAgICAgICAgZXhwYW5kT25ib2FyZGluZzogdHJ1ZSxcclxuICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU6IG51bGwsXHJcbiAgICAgICAgICAgICAgdmFsdWU6IG51bGwsXHJcbiAgICAgICAgICAgICAgc2l6ZTogODAsXHJcbiAgICAgICAgICAgICAgaXNNYW5kYXRvcnk6IHRydWUsXHJcbiAgICAgICAgICAgICAgb3RoZXJWYWx1ZTogJycsXHJcbiAgICAgICAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXHJcbiAgICAgICAgICAgICAgZWRpdGFibGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgaXNDb25kaXRpb25hbDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgY29uZGl0aW9uVmFsdWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgY29uZGl0aW9uOiB7fSxcclxuICAgICAgICAgICAgICBkZWxldGVhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICAgIHN1YkxldmVsOiAyLFxyXG4gICAgICAgICAgICAgIGV4cGFuZE1vcmU6IGZhbHNlLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgbGFiZWw6IFwiRGVzY3JpcHRpb25zXCIsXHJcbiAgICAgICAgICAgICAga2V5OiBcIkRlc2NyaXB0aW9uXCIsXHJcbiAgICAgICAgICAgICAgZXhwYW5kT25ib2FyZGluZzogdHJ1ZSxcclxuICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU6IG51bGwsXHJcbiAgICAgICAgICAgICAgdmFsdWU6IG51bGwsXHJcbiAgICAgICAgICAgICAgc2l6ZTogMTAwMCxcclxuICAgICAgICAgICAgICBpc01hbmRhdG9yeTogdHJ1ZSxcclxuICAgICAgICAgICAgICBvdGhlclZhbHVlOiAnJyxcclxuICAgICAgICAgICAgICB0eXBlOiBcInRleHRhcmVhXCIsXHJcbiAgICAgICAgICAgICAgZWRpdGFibGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgaXNDb25kaXRpb25hbDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgY29uZGl0aW9uVmFsdWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgY29uZGl0aW9uOiB7fSxcclxuICAgICAgICAgICAgICBkZWxldGVhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICAgIHN1YkxldmVsOiAyLFxyXG4gICAgICAgICAgICAgIGV4cGFuZE1vcmU6IGZhbHNlLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgXSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGxhYmVsOiBcIkFqb3V0ZXIgZGVzIGJvaXRlcyBtYWlscyBkw6lsw6lndcOpc1wiLFxyXG4gICAgICAgICAga2V5OiBcIkFkZEluYm94TWFpbERlbGVnYXRlXCIsXHJcbiAgICAgICAgICBleHBhbmRPbmJvYXJkaW5nOiB0cnVlLFxyXG4gICAgICAgICAgZGVmYXVsdFZhbHVlOiBudWxsLFxyXG4gICAgICAgICAgdmFsdWU6IHRydWUsXHJcbiAgICAgICAgICBzaXplOiA4MCxcclxuICAgICAgICAgIGlzTWFuZGF0b3J5OiB0cnVlLFxyXG4gICAgICAgICAgb3RoZXJWYWx1ZTogJycsXHJcbiAgICAgICAgICB0eXBlOiBcImNoZWNrYm94XCIsXHJcbiAgICAgICAgICBlZGl0YWJsZTogdHJ1ZSxcclxuICAgICAgICAgIGlzQ29uZGl0aW9uYWw6IGZhbHNlLFxyXG4gICAgICAgICAgY29uZGl0aW9uVmFsdWU6IFwiXCIsXHJcbiAgICAgICAgICBjb25kaXRpb246IHt9LFxyXG4gICAgICAgICAgZGVsZXRlYWJsZTogdHJ1ZSxcclxuICAgICAgICAgIHN1YkxldmVsOiAxLFxyXG4gICAgICAgICAgZXhwYW5kTW9yZTogZmFsc2UsXHJcbiAgICAgICAgICAvKnNlbGVjdG9yOiB7XHJcbiAgICAgICAgICAgIGxhYmVsOiBcIkNvbXBhbnlcIixcclxuICAgICAgICAgICAga2V5OiBcIkNvbXBhbnlcIixcclxuICAgICAgICAgICAgZGVmYXVsdFZhbHVlOiBbeyB2YWx1ZTogXCJOb3d0ZWFtXCIsIGNoZWNrZWQ6IHRydWUgfSwgeyB2YWx1ZTogXCJJbnRlcm5hbFwiLCBjaGVja2VkOiBmYWxzZSB9XSxcclxuICAgICAgICAgICAgdmFsdWU6IFwiTm93dGVhbVwiXHJcbiAgICAgICAgICB9LCovXHJcbiAgICAgICAgICBmb3JtczogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgbGFiZWw6IFwiRGVzY3JpcHRpb25zXCIsXHJcbiAgICAgICAgICAgICAga2V5OiBcIkRlc2NyaXB0aW9uXCIsXHJcbiAgICAgICAgICAgICAgZXhwYW5kT25ib2FyZGluZzogdHJ1ZSxcclxuICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU6IG51bGwsXHJcbiAgICAgICAgICAgICAgdmFsdWU6IG51bGwsXHJcbiAgICAgICAgICAgICAgc2l6ZTogMTAwMCxcclxuICAgICAgICAgICAgICBpc01hbmRhdG9yeTogdHJ1ZSxcclxuICAgICAgICAgICAgICBvdGhlclZhbHVlOiAnJyxcclxuICAgICAgICAgICAgICB0eXBlOiBcInRleHRhcmVhXCIsXHJcbiAgICAgICAgICAgICAgZWRpdGFibGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgaXNDb25kaXRpb25hbDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgY29uZGl0aW9uVmFsdWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgY29uZGl0aW9uOiB7fSxcclxuICAgICAgICAgICAgICBkZWxldGVhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICAgIHN1YkxldmVsOiAyLFxyXG4gICAgICAgICAgICAgIGV4cGFuZE1vcmU6IGZhbHNlLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgXSxcclxuICAgICAgICB9LFxyXG4gICAgICBdLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJTZXJ2ZXVyXCIsXHJcbiAgICAgIGtleTogJ3NlcnZldXInLFxyXG4gICAgICBleHBhbmRNb3JlOiBmYWxzZSxcclxuICAgICAgc3VmZml4RW5kcG9pbnQ6IFwiY2F0ZWdvcnkvc2VydmV1clwiLFxyXG4gICAgICBzZWxlY3RlZDogdHJ1ZSxcclxuICAgICAgZWRpdGFibGU6IHRydWUsXHJcbiAgICAgIGlzQ29uZGl0aW9uYWw6IGZhbHNlLFxyXG4gICAgICBjb25kaXRpb25WYWx1ZTogXCJcIixcclxuICAgICAgY29uZGl0aW9uOiB7fSxcclxuICAgICAgZGVsZXRlYWJsZTogdHJ1ZSxcclxuICAgICAgZXhwYW5kT25ib2FyZGluZzogdHJ1ZSxcclxuICAgICAgZGVmYXVsdFZhbHVlOiBmYWxzZSxcclxuICAgICAgc2VsZWN0b3I6IHtcclxuICAgICAgICBsYWJlbDogXCJDb21wYW55XCIsXHJcbiAgICAgICAga2V5OiBcIkNvbXBhbnlcIixcclxuICAgICAgICBkZWZhdWx0VmFsdWU6IFt7IHZhbHVlOiBcIk5vd3RlYW1cIiwgY2hlY2tlZDogdHJ1ZSB9LCB7IHZhbHVlOiBcIkludGVybmFsXCIsIGNoZWNrZWQ6IGZhbHNlIH1dLFxyXG4gICAgICAgIHZhbHVlOiBcIk5vd3RlYW1cIlxyXG4gICAgICB9LFxyXG4gICAgICB0aWNrZXRUeXBlOiB7XHJcbiAgICAgICAgbGFiZWw6IFwiVHlwZSBkZSB0aWNrZXRcIixcclxuICAgICAgICBrZXk6IFwidHlja2V0VHlwZVwiLFxyXG4gICAgICAgIGRlZmF1bHRWYWx1ZTogW3sgdmFsdWU6IFwiQ3LDqWF0aW9uIGRlIGNvbXB0ZVwiLCBjaGVja2VkOiB0cnVlLCBrZXk6IFwiQ3JlYXRpb25fZGVfY29tcHRlXCIgfSwgeyB2YWx1ZTogXCJDb25maWd1cmF0aW9uIGRlIHBvc3RlXCIsIGNoZWNrZWQ6IGZhbHNlLCBrZXk6IFwiQ29uZmlndXJhdGlvbl9kZV9wb3N0ZVwiIH1dLFxyXG4gICAgICAgIHZhbHVlOiBcIkNyZWF0aW9uX2RlX2NvbXB0ZVwiXHJcbiAgICAgIH0sXHJcbiAgICAgIGZvcm1zOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbGFiZWw6IFwiQWNjw6hzIGF1eCBsZWN0ZXVycyByw6lzZWF1eFwiLFxyXG4gICAgICAgICAga2V5OiBcIlJlYWROZXR3b3JrQWNjZXNzXCIsXHJcbiAgICAgICAgICBleHBhbmRPbmJvYXJkaW5nOiB0cnVlLFxyXG4gICAgICAgICAgZGVmYXVsdFZhbHVlOiBudWxsLFxyXG4gICAgICAgICAgdmFsdWU6IHRydWUsXHJcbiAgICAgICAgICBzaXplOiA4MCxcclxuICAgICAgICAgIGlzTWFuZGF0b3J5OiBmYWxzZSxcclxuICAgICAgICAgIG90aGVyVmFsdWU6ICcnLFxyXG4gICAgICAgICAgdHlwZTogXCJjaGVja2JveFwiLFxyXG4gICAgICAgICAgZWRpdGFibGU6IHRydWUsXHJcbiAgICAgICAgICBpc0NvbmRpdGlvbmFsOiBmYWxzZSxcclxuICAgICAgICAgIGNvbmRpdGlvblZhbHVlOiBcIlwiLFxyXG4gICAgICAgICAgY29uZGl0aW9uOiB7fSxcclxuICAgICAgICAgIGRlbGV0ZWFibGU6IHRydWUsXHJcbiAgICAgICAgICBzdWJMZXZlbDogMSxcclxuICAgICAgICAgIGV4cGFuZE1vcmU6IGZhbHNlLFxyXG4gICAgICAgICAgLypzZWxlY3Rvcjoge1xyXG4gICAgICAgICAgICBsYWJlbDogXCJDb21wYW55XCIsXHJcbiAgICAgICAgICAgIGtleTogXCJDb21wYW55XCIsXHJcbiAgICAgICAgICAgIGRlZmF1bHRWYWx1ZTogW3sgdmFsdWU6IFwiTm93dGVhbVwiLCBjaGVja2VkOiB0cnVlIH0sIHsgdmFsdWU6IFwiSW50ZXJuYWxcIiwgY2hlY2tlZDogZmFsc2UgfV0sXHJcbiAgICAgICAgICAgIHZhbHVlOiBcIk5vd3RlYW1cIlxyXG4gICAgICAgICAgfSwqL1xyXG4gICAgICAgICAgZm9ybXM6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIGxhYmVsOiBcIk5vbSBkdSBzZXJ2ZXVyXCIsXHJcbiAgICAgICAgICAgICAga2V5OiBcIlNlcnZlck5hbWVcIixcclxuICAgICAgICAgICAgICBleHBhbmRPbmJvYXJkaW5nOiB0cnVlLFxyXG4gICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZTogbnVsbCxcclxuICAgICAgICAgICAgICB2YWx1ZTogbnVsbCxcclxuICAgICAgICAgICAgICBzaXplOiA4MCxcclxuICAgICAgICAgICAgICBpc01hbmRhdG9yeTogdHJ1ZSxcclxuICAgICAgICAgICAgICBvdGhlclZhbHVlOiAnJyxcclxuICAgICAgICAgICAgICB0eXBlOiBcInRleHRcIixcclxuICAgICAgICAgICAgICBlZGl0YWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgICBpc0NvbmRpdGlvbmFsOiBmYWxzZSxcclxuICAgICAgICAgICAgICBjb25kaXRpb25WYWx1ZTogXCJcIixcclxuICAgICAgICAgICAgICBjb25kaXRpb246IHt9LFxyXG4gICAgICAgICAgICAgIGRlbGV0ZWFibGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgIHN1YkxldmVsOiAyLFxyXG4gICAgICAgICAgICAgIGV4cGFuZE1vcmU6IGZhbHNlLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgbGFiZWw6IFwiQ2hlbWluIGR1IGRvc3NpZXJcIixcclxuICAgICAgICAgICAgICBrZXk6IFwiRm9sZGVyUGF0aFwiLFxyXG4gICAgICAgICAgICAgIGV4cGFuZE9uYm9hcmRpbmc6IHRydWUsXHJcbiAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlOiBudWxsLFxyXG4gICAgICAgICAgICAgIHZhbHVlOiBudWxsLFxyXG4gICAgICAgICAgICAgIHNpemU6IDgwLFxyXG4gICAgICAgICAgICAgIGlzTWFuZGF0b3J5OiB0cnVlLFxyXG4gICAgICAgICAgICAgIG90aGVyVmFsdWU6ICcnLFxyXG4gICAgICAgICAgICAgIHR5cGU6IFwidGV4dFwiLFxyXG4gICAgICAgICAgICAgIGVkaXRhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICAgIGlzQ29uZGl0aW9uYWw6IGZhbHNlLFxyXG4gICAgICAgICAgICAgIGNvbmRpdGlvblZhbHVlOiBcIlwiLFxyXG4gICAgICAgICAgICAgIGNvbmRpdGlvbjoge30sXHJcbiAgICAgICAgICAgICAgZGVsZXRlYWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgICBzdWJMZXZlbDogMixcclxuICAgICAgICAgICAgICBleHBhbmRNb3JlOiBmYWxzZSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIGxhYmVsOiBcIkxldHRyZSDDoCBhdHRyaWJ1ZXJcIixcclxuICAgICAgICAgICAgICBrZXk6IFwiQXR0cmlidXRMZXR0ZXJcIixcclxuICAgICAgICAgICAgICBleHBhbmRPbmJvYXJkaW5nOiB0cnVlLFxyXG4gICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZTogbnVsbCxcclxuICAgICAgICAgICAgICB2YWx1ZTogbnVsbCxcclxuICAgICAgICAgICAgICBzaXplOiA4MCxcclxuICAgICAgICAgICAgICBpc01hbmRhdG9yeTogdHJ1ZSxcclxuICAgICAgICAgICAgICBvdGhlclZhbHVlOiAnJyxcclxuICAgICAgICAgICAgICB0eXBlOiBcInRleHRcIixcclxuICAgICAgICAgICAgICBlZGl0YWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgICBpc0NvbmRpdGlvbmFsOiBmYWxzZSxcclxuICAgICAgICAgICAgICBjb25kaXRpb25WYWx1ZTogXCJcIixcclxuICAgICAgICAgICAgICBjb25kaXRpb246IHt9LFxyXG4gICAgICAgICAgICAgIGRlbGV0ZWFibGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgc3ViTGV2ZWw6IDIsXHJcbiAgICAgICAgICAgICAgZXhwYW5kTW9yZTogZmFsc2UsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICBdLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIF0sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIlZQTlwiLFxyXG4gICAgICBrZXk6ICd2cG4nLFxyXG4gICAgICBleHBhbmRNb3JlOiBmYWxzZSxcclxuICAgICAgc3VmZml4RW5kcG9pbnQ6IFwiY2F0ZWdvcnkvdnBuXCIsXHJcbiAgICAgIHNlbGVjdGVkOiB0cnVlLFxyXG4gICAgICBleHBhbmRPbmJvYXJkaW5nOiB0cnVlLFxyXG4gICAgICBkZWZhdWx0VmFsdWU6IGZhbHNlLFxyXG4gICAgICBlZGl0YWJsZTogdHJ1ZSxcclxuICAgICAgaXNDb25kaXRpb25hbDogZmFsc2UsXHJcbiAgICAgIGNvbmRpdGlvblZhbHVlOiBcIlwiLFxyXG4gICAgICBjb25kaXRpb246IHt9LFxyXG4gICAgICBkZWxldGVhYmxlOiB0cnVlLFxyXG4gICAgICBzZWxlY3Rvcjoge1xyXG4gICAgICAgIGxhYmVsOiBcIkNvbXBhbnlcIixcclxuICAgICAgICBrZXk6IFwiQ29tcGFueVwiLFxyXG4gICAgICAgIGRlZmF1bHRWYWx1ZTogW3sgdmFsdWU6IFwiTm93dGVhbVwiLCBjaGVja2VkOiB0cnVlIH0sIHsgdmFsdWU6IFwiSW50ZXJuYWxcIiwgY2hlY2tlZDogZmFsc2UgfV0sXHJcbiAgICAgICAgdmFsdWU6IFwiTm93dGVhbVwiXHJcbiAgICAgIH0sXHJcbiAgICAgIHRpY2tldFR5cGU6IHtcclxuICAgICAgICBsYWJlbDogXCJUeXBlIGRlIHRpY2tldFwiLFxyXG4gICAgICAgIGtleTogXCJ0eWNrZXRUeXBlXCIsXHJcbiAgICAgICAgZGVmYXVsdFZhbHVlOiBbeyB2YWx1ZTogXCJDcsOpYXRpb24gZGUgY29tcHRlXCIsIGNoZWNrZWQ6IHRydWUsIGtleTogXCJDcmVhdGlvbl9kZV9jb21wdGVcIiB9LCB7IHZhbHVlOiBcIkNvbmZpZ3VyYXRpb24gZGUgcG9zdGVcIiwgY2hlY2tlZDogZmFsc2UsIGtleTogXCJDb25maWd1cmF0aW9uX2RlX3Bvc3RlXCIgfV0sXHJcbiAgICAgICAgdmFsdWU6IFwiQ3JlYXRpb25fZGVfY29tcHRlXCJcclxuICAgICAgfSxcclxuICAgICAgZm9ybXM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBsYWJlbDogXCJBY2PDqHMgYXUgVlBOXCIsXHJcbiAgICAgICAgICBrZXk6IFwiVnBuQWNjZXNzXCIsXHJcbiAgICAgICAgICBleHBhbmRPbmJvYXJkaW5nOiB0cnVlLFxyXG4gICAgICAgICAgZGVmYXVsdFZhbHVlOiBudWxsLFxyXG4gICAgICAgICAgdmFsdWU6IHRydWUsXHJcbiAgICAgICAgICBzaXplOiA4MCxcclxuICAgICAgICAgIGlzTWFuZGF0b3J5OiBmYWxzZSxcclxuICAgICAgICAgIG90aGVyVmFsdWU6ICcnLFxyXG4gICAgICAgICAgdHlwZTogXCJjaGVja2JveFwiLFxyXG4gICAgICAgICAgZWRpdGFibGU6IHRydWUsXHJcbiAgICAgICAgICBpc0NvbmRpdGlvbmFsOiBmYWxzZSxcclxuICAgICAgICAgIGNvbmRpdGlvblZhbHVlOiBcIlwiLFxyXG4gICAgICAgICAgY29uZGl0aW9uOiB7fSxcclxuICAgICAgICAgIGRlbGV0ZWFibGU6IHRydWUsXHJcbiAgICAgICAgICBzdWJMZXZlbDogMSxcclxuICAgICAgICAgIGV4cGFuZE1vcmU6IGZhbHNlLFxyXG4gICAgICAgICAgLy9mb3JtczogW11cclxuICAgICAgICB9LFxyXG4gICAgICBdLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJJbXByaW1hbnRlc1wiLFxyXG4gICAgICBrZXk6ICdpbXByaW1hbnRlcycsXHJcbiAgICAgIGV4cGFuZE1vcmU6IGZhbHNlLFxyXG4gICAgICBzdWZmaXhFbmRwb2ludDogXCJjYXRlZ29yeS9pbXByaW1lbnRlXCIsXHJcbiAgICAgIHNlbGVjdGVkOiB0cnVlLFxyXG4gICAgICBlZGl0YWJsZTogdHJ1ZSxcclxuICAgICAgaXNDb25kaXRpb25hbDogZmFsc2UsXHJcbiAgICAgIGNvbmRpdGlvblZhbHVlOiBcIlwiLFxyXG4gICAgICBjb25kaXRpb246IHt9LFxyXG4gICAgICBkZWxldGVhYmxlOiB0cnVlLFxyXG4gICAgICBleHBhbmRPbmJvYXJkaW5nOiB0cnVlLFxyXG4gICAgICBkZWZhdWx0VmFsdWU6IGZhbHNlLFxyXG4gICAgICB0aWNrZXRUeXBlOiB7XHJcbiAgICAgICAgbGFiZWw6IFwiVHlwZSBkZSB0aWNrZXRcIixcclxuICAgICAgICBrZXk6IFwidHlja2V0VHlwZVwiLFxyXG4gICAgICAgIGRlZmF1bHRWYWx1ZTogW3sgdmFsdWU6IFwiQ3LDqWF0aW9uIGRlIGNvbXB0ZVwiLCBjaGVja2VkOiB0cnVlLCBrZXk6IFwiQ3JlYXRpb25fZGVfY29tcHRlXCIgfSwgeyB2YWx1ZTogXCJDb25maWd1cmF0aW9uIGRlIHBvc3RlXCIsIGNoZWNrZWQ6IGZhbHNlLCBrZXk6IFwiQ29uZmlndXJhdGlvbl9kZV9wb3N0ZVwiIH1dLFxyXG4gICAgICAgIHZhbHVlOiBcIkNyZWF0aW9uX2RlX2NvbXB0ZVwiXHJcbiAgICAgIH0sXHJcbiAgICAgIHNlbGVjdG9yOiB7XHJcbiAgICAgICAgbGFiZWw6IFwiQ29tcGFueVwiLFxyXG4gICAgICAgIGtleTogXCJDb21wYW55XCIsXHJcbiAgICAgICAgZGVmYXVsdFZhbHVlOiBbeyB2YWx1ZTogXCJOb3d0ZWFtXCIsIGNoZWNrZWQ6IHRydWUgfSwgeyB2YWx1ZTogXCJJbnRlcm5hbFwiLCBjaGVja2VkOiBmYWxzZSB9XSxcclxuICAgICAgICB2YWx1ZTogXCJOb3d0ZWFtXCJcclxuICAgICAgfSxcclxuICAgICAgZm9ybXM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBsYWJlbDogXCJBY2PDqHMgYXV4IGltcHJpbWFudGVzXCIsXHJcbiAgICAgICAgICBrZXk6IFwiUHJpbnRlckFjY2Vzc1wiLFxyXG4gICAgICAgICAgZXhwYW5kT25ib2FyZGluZzogdHJ1ZSxcclxuICAgICAgICAgIGRlZmF1bHRWYWx1ZTogbnVsbCxcclxuICAgICAgICAgIHZhbHVlOiB0cnVlLFxyXG4gICAgICAgICAgc2l6ZTogODAsXHJcbiAgICAgICAgICBpc01hbmRhdG9yeTogZmFsc2UsXHJcbiAgICAgICAgICBvdGhlclZhbHVlOiAnJyxcclxuICAgICAgICAgIHR5cGU6IFwiY2hlY2tib3hcIixcclxuICAgICAgICAgIGVkaXRhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgaXNDb25kaXRpb25hbDogZmFsc2UsXHJcbiAgICAgICAgICBjb25kaXRpb25WYWx1ZTogXCJcIixcclxuICAgICAgICAgIGNvbmRpdGlvbjoge30sXHJcbiAgICAgICAgICBkZWxldGVhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgc3ViTGV2ZWw6IDEsXHJcbiAgICAgICAgICBleHBhbmRNb3JlOiBmYWxzZSxcclxuICAgICAgICAgIC8qc2VsZWN0b3I6IHtcclxuICAgICAgICAgICAgbGFiZWw6IFwiQ29tcGFueVwiLFxyXG4gICAgICAgICAgICBrZXk6IFwiQ29tcGFueVwiLFxyXG4gICAgICAgICAgICBkZWZhdWx0VmFsdWU6IFt7IHZhbHVlOiBcIk5vd3RlYW1cIiwgY2hlY2tlZDogdHJ1ZSB9LCB7IHZhbHVlOiBcIkludGVybmFsXCIsIGNoZWNrZWQ6IGZhbHNlIH1dLFxyXG4gICAgICAgICAgICB2YWx1ZTogXCJOb3d0ZWFtXCJcclxuICAgICAgICAgIH0sKi9cclxuICAgICAgICAgIGZvcm1zOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBsYWJlbDogXCJOb20gLyBNb2TDqGxlIGRlIGwnaW1wcmltYW50ZSAvIGxvY2FsaXNhdGlvblwiLFxyXG4gICAgICAgICAgICAgIGtleTogXCJQcmludGVyTmFtZVwiLFxyXG4gICAgICAgICAgICAgIGV4cGFuZE9uYm9hcmRpbmc6IHRydWUsXHJcbiAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlOiBudWxsLFxyXG4gICAgICAgICAgICAgIHZhbHVlOiBudWxsLFxyXG4gICAgICAgICAgICAgIHNpemU6IDEwMDAsXHJcbiAgICAgICAgICAgICAgaXNNYW5kYXRvcnk6IHRydWUsXHJcbiAgICAgICAgICAgICAgb3RoZXJWYWx1ZTogJycsXHJcbiAgICAgICAgICAgICAgdHlwZTogXCJ0ZXh0YXJlYVwiLFxyXG4gICAgICAgICAgICAgIGVkaXRhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICAgIGlzQ29uZGl0aW9uYWw6IGZhbHNlLFxyXG4gICAgICAgICAgICAgIGNvbmRpdGlvblZhbHVlOiBcIlwiLFxyXG4gICAgICAgICAgICAgIGNvbmRpdGlvbjoge30sXHJcbiAgICAgICAgICAgICAgZGVsZXRlYWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgICBzdWJMZXZlbDogMixcclxuICAgICAgICAgICAgICBleHBhbmRNb3JlOiBmYWxzZSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIF0sXHJcbiAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwiQXBwbGljYXRpb25zXCIsXHJcbiAgICAgIGtleTogJ2FwcGxpY2F0aW9ucycsXHJcbiAgICAgIGV4cGFuZE1vcmU6IGZhbHNlLFxyXG4gICAgICBzdWZmaXhFbmRwb2ludDogXCJjYXRlZ29yeS9hcHBsaWNhdGlvblwiLFxyXG4gICAgICBzZWxlY3RlZDogdHJ1ZSxcclxuICAgICAgZWRpdGFibGU6IHRydWUsXHJcbiAgICAgIGlzQ29uZGl0aW9uYWw6IGZhbHNlLFxyXG4gICAgICBjb25kaXRpb25WYWx1ZTogXCJcIixcclxuICAgICAgY29uZGl0aW9uOiB7fSxcclxuICAgICAgZXhwYW5kT25ib2FyZGluZzogdHJ1ZSxcclxuICAgICAgZGVmYXVsdFZhbHVlOiBmYWxzZSxcclxuICAgICAgZGVsZXRlYWJsZTogdHJ1ZSxcclxuICAgICAgc2VsZWN0b3I6IHtcclxuICAgICAgICBsYWJlbDogXCJDb21wYW55XCIsXHJcbiAgICAgICAga2V5OiBcIkNvbXBhbnlcIixcclxuICAgICAgICBkZWZhdWx0VmFsdWU6IFt7IHZhbHVlOiBcIk5vd3RlYW1cIiwgY2hlY2tlZDogdHJ1ZSB9LCB7IHZhbHVlOiBcIkludGVybmFsXCIsIGNoZWNrZWQ6IGZhbHNlIH1dLFxyXG4gICAgICAgIHZhbHVlOiBcIk5vd3RlYW1cIlxyXG4gICAgICB9LFxyXG4gICAgICB0aWNrZXRUeXBlOiB7XHJcbiAgICAgICAgbGFiZWw6IFwiVHlwZSBkZSB0aWNrZXRcIixcclxuICAgICAgICBrZXk6IFwidHlja2V0VHlwZVwiLFxyXG4gICAgICAgIGRlZmF1bHRWYWx1ZTogW3sgdmFsdWU6IFwiQ3LDqWF0aW9uIGRlIGNvbXB0ZVwiLCBjaGVja2VkOiB0cnVlLCBrZXk6IFwiQ3JlYXRpb25fZGVfY29tcHRlXCIgfSwgeyB2YWx1ZTogXCJDb25maWd1cmF0aW9uIGRlIHBvc3RlXCIsIGNoZWNrZWQ6IGZhbHNlLCBrZXk6IFwiQ29uZmlndXJhdGlvbl9kZV9wb3N0ZVwiIH1dLFxyXG4gICAgICAgIHZhbHVlOiBcIkNyZWF0aW9uX2RlX2NvbXB0ZVwiXHJcbiAgICAgIH0sXHJcbiAgICAgIGZvcm1zOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbGFiZWw6IFwiQWNjw6hzIGF1eCBhcHBsaWNhdGlvbnMgP1wiLFxyXG4gICAgICAgICAga2V5OiBcIkFwcGxpY2F0aW9uQWNjZXNzXCIsXHJcbiAgICAgICAgICBleHBhbmRPbmJvYXJkaW5nOiB0cnVlLFxyXG4gICAgICAgICAgZGVmYXVsdFZhbHVlOiBudWxsLFxyXG4gICAgICAgICAgdmFsdWU6IHRydWUsXHJcbiAgICAgICAgICBzaXplOiA4MCxcclxuICAgICAgICAgIGlzTWFuZGF0b3J5OiBmYWxzZSxcclxuICAgICAgICAgIG90aGVyVmFsdWU6ICcnLFxyXG4gICAgICAgICAgdHlwZTogXCJjaGVja2JveFwiLFxyXG4gICAgICAgICAgZWRpdGFibGU6IHRydWUsXHJcbiAgICAgICAgICBpc0NvbmRpdGlvbmFsOiBmYWxzZSxcclxuICAgICAgICAgIGNvbmRpdGlvblZhbHVlOiBcIlwiLFxyXG4gICAgICAgICAgY29uZGl0aW9uOiB7fSxcclxuICAgICAgICAgIGRlbGV0ZWFibGU6IHRydWUsXHJcbiAgICAgICAgICBzdWJMZXZlbDogMSxcclxuICAgICAgICAgIGV4cGFuZE1vcmU6IGZhbHNlLFxyXG4gICAgICAgICAgLypzZWxlY3Rvcjoge1xyXG4gICAgICAgICAgICBsYWJlbDogXCJDb21wYW55XCIsXHJcbiAgICAgICAgICAgIGtleTogXCJDb21wYW55XCIsXHJcbiAgICAgICAgICAgIGRlZmF1bHRWYWx1ZTogW3sgdmFsdWU6IFwiTm93dGVhbVwiLCBjaGVja2VkOiB0cnVlIH0sIHsgdmFsdWU6IFwiSW50ZXJuYWxcIiwgY2hlY2tlZDogZmFsc2UgfV0sXHJcbiAgICAgICAgICAgIHZhbHVlOiBcIk5vd3RlYW1cIlxyXG4gICAgICAgICAgfSwqL1xyXG4gICAgICAgICAgZm9ybXM6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIGxhYmVsOiBcIkRlc2NyaXB0aW9uc1wiLFxyXG4gICAgICAgICAgICAgIGtleTogXCJEZXNjcmlwdGlvblwiLFxyXG4gICAgICAgICAgICAgIGV4cGFuZE9uYm9hcmRpbmc6IHRydWUsXHJcbiAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlOiBudWxsLFxyXG4gICAgICAgICAgICAgIHZhbHVlOiBudWxsLFxyXG4gICAgICAgICAgICAgIHNpemU6IDEwMDAsXHJcbiAgICAgICAgICAgICAgaXNNYW5kYXRvcnk6IHRydWUsXHJcbiAgICAgICAgICAgICAgb3RoZXJWYWx1ZTogJycsXHJcbiAgICAgICAgICAgICAgdHlwZTogXCJ0ZXh0YXJlYVwiLFxyXG4gICAgICAgICAgICAgIGVkaXRhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICAgIGlzQ29uZGl0aW9uYWw6IGZhbHNlLFxyXG4gICAgICAgICAgICAgIGNvbmRpdGlvblZhbHVlOiBcIlwiLFxyXG4gICAgICAgICAgICAgIGNvbmRpdGlvbjoge30sXHJcbiAgICAgICAgICAgICAgZGVsZXRlYWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgICBzdWJMZXZlbDogMixcclxuICAgICAgICAgICAgICBleHBhbmRNb3JlOiBmYWxzZSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIF0sXHJcbiAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwiUG9zdGVcIixcclxuICAgICAga2V5OiAncG9zdGUnLFxyXG4gICAgICBleHBhbmRNb3JlOiBmYWxzZSxcclxuICAgICAgc3VmZml4RW5kcG9pbnQ6IFwiY2F0ZWdvcnkvcG9zdGVcIixcclxuICAgICAgc2VsZWN0ZWQ6IHRydWUsXHJcbiAgICAgIGV4cGFuZE9uYm9hcmRpbmc6IHRydWUsXHJcbiAgICAgIGRlZmF1bHRWYWx1ZTogZmFsc2UsXHJcbiAgICAgIGVkaXRhYmxlOiB0cnVlLFxyXG4gICAgICBpc0NvbmRpdGlvbmFsOiBmYWxzZSxcclxuICAgICAgY29uZGl0aW9uVmFsdWU6IFwiXCIsXHJcbiAgICAgIGNvbmRpdGlvbjoge30sXHJcbiAgICAgIGRlbGV0ZWFibGU6IHRydWUsXHJcbiAgICAgIHNlbGVjdG9yOiB7XHJcbiAgICAgICAgbGFiZWw6IFwiQ29tcGFueVwiLFxyXG4gICAgICAgIGtleTogXCJDb21wYW55XCIsXHJcbiAgICAgICAgZGVmYXVsdFZhbHVlOiBbeyB2YWx1ZTogXCJOb3d0ZWFtXCIsIGNoZWNrZWQ6IHRydWUgfSwgeyB2YWx1ZTogXCJJbnRlcm5hbFwiLCBjaGVja2VkOiBmYWxzZSB9XSxcclxuICAgICAgICB2YWx1ZTogXCJOb3d0ZWFtXCJcclxuICAgICAgfSxcclxuICAgICAgdGlja2V0VHlwZToge1xyXG4gICAgICAgIGxhYmVsOiBcIlR5cGUgZGUgdGlja2V0XCIsXHJcbiAgICAgICAga2V5OiBcInR5Y2tldFR5cGVcIixcclxuICAgICAgICBkZWZhdWx0VmFsdWU6IFt7IHZhbHVlOiBcIkNyw6lhdGlvbiBkZSBjb21wdGVcIiwgY2hlY2tlZDogdHJ1ZSwga2V5OiBcIkNyZWF0aW9uX2RlX2NvbXB0ZVwiIH0sIHsgdmFsdWU6IFwiQ29uZmlndXJhdGlvbiBkZSBwb3N0ZVwiLCBjaGVja2VkOiBmYWxzZSwga2V5OiBcIkNvbmZpZ3VyYXRpb25fZGVfcG9zdGVcIiB9XSxcclxuICAgICAgICB2YWx1ZTogXCJDcmVhdGlvbl9kZV9jb21wdGVcIlxyXG4gICAgICB9LFxyXG4gICAgICBmb3JtczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIGxhYmVsOiBcIlBhcmFtw6l0cmFnZSBkZSBwb3N0ZVwiLFxyXG4gICAgICAgICAga2V5OiBcIlBvc3RQYXJhbWV0ZXJcIixcclxuICAgICAgICAgIGV4cGFuZE9uYm9hcmRpbmc6IHRydWUsXHJcbiAgICAgICAgICBkZWZhdWx0VmFsdWU6IG51bGwsXHJcbiAgICAgICAgICB2YWx1ZTogdHJ1ZSxcclxuICAgICAgICAgIHNpemU6IDgwLFxyXG4gICAgICAgICAgaXNNYW5kYXRvcnk6IGZhbHNlLFxyXG4gICAgICAgICAgb3RoZXJWYWx1ZTogJycsXHJcbiAgICAgICAgICB0eXBlOiBcImNoZWNrYm94XCIsXHJcbiAgICAgICAgICBlZGl0YWJsZTogdHJ1ZSxcclxuICAgICAgICAgIGlzQ29uZGl0aW9uYWw6IGZhbHNlLFxyXG4gICAgICAgICAgY29uZGl0aW9uVmFsdWU6IFwiXCIsXHJcbiAgICAgICAgICBjb25kaXRpb246IHt9LFxyXG4gICAgICAgICAgZGVsZXRlYWJsZTogdHJ1ZSxcclxuICAgICAgICAgIHN1YkxldmVsOiAxLFxyXG4gICAgICAgICAgZXhwYW5kTW9yZTogZmFsc2UsXHJcbiAgICAgICAgICAvKnNlbGVjdG9yOiB7XHJcbiAgICAgICAgICAgIGxhYmVsOiBcIkNvbXBhbnlcIixcclxuICAgICAgICAgICAga2V5OiBcIkNvbXBhbnlcIixcclxuICAgICAgICAgICAgZGVmYXVsdFZhbHVlOiBbeyB2YWx1ZTogXCJOb3d0ZWFtXCIsIGNoZWNrZWQ6IHRydWUgfSwgeyB2YWx1ZTogXCJJbnRlcm5hbFwiLCBjaGVja2VkOiBmYWxzZSB9XSxcclxuICAgICAgICAgICAgdmFsdWU6IFwiTm93dGVhbVwiXHJcbiAgICAgICAgICB9LCovXHJcbiAgICAgICAgICBmb3JtczogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgbGFiZWw6IFwiUsOpYWxsb2NhdGlvbiBkJ8OpcXVpcGVtZW50XCIsXHJcbiAgICAgICAgICAgICAga2V5OiBcIlJlYWxvY2F0ZWRFcXVpcG1lbnRcIixcclxuICAgICAgICAgICAgICBleHBhbmRPbmJvYXJkaW5nOiB0cnVlLFxyXG4gICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZTogbnVsbCxcclxuICAgICAgICAgICAgICB2YWx1ZTogbnVsbCxcclxuICAgICAgICAgICAgICBzaXplOiAxMDAwLFxyXG4gICAgICAgICAgICAgIGlzTWFuZGF0b3J5OiB0cnVlLFxyXG4gICAgICAgICAgICAgIG90aGVyVmFsdWU6ICcnLFxyXG4gICAgICAgICAgICAgIHR5cGU6IFwidGV4dGFyZWFcIixcclxuICAgICAgICAgICAgICBlZGl0YWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgICBpc0NvbmRpdGlvbmFsOiBmYWxzZSxcclxuICAgICAgICAgICAgICBjb25kaXRpb25WYWx1ZTogXCJcIixcclxuICAgICAgICAgICAgICBjb25kaXRpb246IHt9LFxyXG4gICAgICAgICAgICAgIGRlbGV0ZWFibGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgc3ViTGV2ZWw6IDIsXHJcbiAgICAgICAgICAgICAgZXhwYW5kTW9yZTogZmFsc2UsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBsYWJlbDogXCJOb3V2ZWF1IHBvc3RlXCIsXHJcbiAgICAgICAgICAgICAga2V5OiBcIk5ld1Bvc3RcIixcclxuICAgICAgICAgICAgICBleHBhbmRPbmJvYXJkaW5nOiB0cnVlLFxyXG4gICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZTogbnVsbCxcclxuICAgICAgICAgICAgICB2YWx1ZTogdHJ1ZSxcclxuICAgICAgICAgICAgICBzaXplOiA4MCxcclxuICAgICAgICAgICAgICBpc01hbmRhdG9yeTogdHJ1ZSxcclxuICAgICAgICAgICAgICBvdGhlclZhbHVlOiAnJyxcclxuICAgICAgICAgICAgICB0eXBlOiBcImNoZWNrYm94XCIsXHJcbiAgICAgICAgICAgICAgZWRpdGFibGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgaXNDb25kaXRpb25hbDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgY29uZGl0aW9uVmFsdWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgY29uZGl0aW9uOiB7fSxcclxuICAgICAgICAgICAgICBkZWxldGVhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICAgIHN1YkxldmVsOiAyLFxyXG4gICAgICAgICAgICAgIGV4cGFuZE1vcmU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgIGZvcm1zOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIkFjaGV0w6kgY2hleiBOb3d0ZWFtXCIsXHJcbiAgICAgICAgICAgICAgICAgIGtleTogXCJQdXJjaGFzZWRBdE5vd3RlYW1cIixcclxuICAgICAgICAgICAgICAgICAgZXhwYW5kT25ib2FyZGluZzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZTogbnVsbCxcclxuICAgICAgICAgICAgICAgICAgc2l6ZTogMTAwMCxcclxuICAgICAgICAgICAgICAgICAgaXNNYW5kYXRvcnk6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgIG90aGVyVmFsdWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICB0eXBlOiBcInRleHRhcmVhXCIsXHJcbiAgICAgICAgICAgICAgICAgIGVkaXRhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICBpc0NvbmRpdGlvbmFsOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgY29uZGl0aW9uVmFsdWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgIGNvbmRpdGlvbjoge30sXHJcbiAgICAgICAgICAgICAgICAgIGRlbGV0ZWFibGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgIHN1YkxldmVsOiAzLFxyXG4gICAgICAgICAgICAgICAgICBleHBhbmRNb3JlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIkF1dHJlXCIsXHJcbiAgICAgICAgICAgICAgICAgIGtleTogXCJPdGhlclwiLFxyXG4gICAgICAgICAgICAgICAgICBleHBhbmRPbmJvYXJkaW5nOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU6IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgICBzaXplOiAxMDAwLFxyXG4gICAgICAgICAgICAgICAgICBpc01hbmRhdG9yeTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgb3RoZXJWYWx1ZTogJycsXHJcbiAgICAgICAgICAgICAgICAgIHR5cGU6IFwidGV4dFwiLFxyXG4gICAgICAgICAgICAgICAgICBlZGl0YWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgaXNDb25kaXRpb25hbDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgIGNvbmRpdGlvblZhbHVlOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICBjb25kaXRpb246IHt9LFxyXG4gICAgICAgICAgICAgICAgICBkZWxldGVhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICBzdWJMZXZlbDogMyxcclxuICAgICAgICAgICAgICAgICAgZXhwYW5kTW9yZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICBdLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIF0sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIkF1dHJlc1wiLFxyXG4gICAgICBrZXk6ICdhdXRyZXMnLFxyXG4gICAgICBleHBhbmRNb3JlOiBmYWxzZSxcclxuICAgICAgc3VmZml4RW5kcG9pbnQ6IFwiY2F0ZWdvcnkvYXV0cmVzXCIsXHJcbiAgICAgIHNlbGVjdGVkOiB0cnVlLFxyXG4gICAgICBlZGl0YWJsZTogdHJ1ZSxcclxuICAgICAgaXNDb25kaXRpb25hbDogZmFsc2UsXHJcbiAgICAgIGNvbmRpdGlvblZhbHVlOiBcIlwiLFxyXG4gICAgICBjb25kaXRpb246IHt9LFxyXG4gICAgICBleHBhbmRPbmJvYXJkaW5nOiB0cnVlLFxyXG4gICAgICBkZWZhdWx0VmFsdWU6IGZhbHNlLFxyXG4gICAgICBkZWxldGVhYmxlOiB0cnVlLFxyXG4gICAgICBzZWxlY3Rvcjoge1xyXG4gICAgICAgIGxhYmVsOiBcIkNvbXBhbnlcIixcclxuICAgICAgICBrZXk6IFwiQ29tcGFueVwiLFxyXG4gICAgICAgIGRlZmF1bHRWYWx1ZTogW3sgdmFsdWU6IFwiTm93dGVhbVwiLCBjaGVja2VkOiB0cnVlIH0sIHsgdmFsdWU6IFwiSW50ZXJuYWxcIiwgY2hlY2tlZDogZmFsc2UgfV0sXHJcbiAgICAgICAgdmFsdWU6IFwiTm93dGVhbVwiXHJcbiAgICAgIH0sXHJcbiAgICAgIHRpY2tldFR5cGU6IHtcclxuICAgICAgICBsYWJlbDogXCJUeXBlIGRlIHRpY2tldFwiLFxyXG4gICAgICAgIGtleTogXCJ0eWNrZXRUeXBlXCIsXHJcbiAgICAgICAgZGVmYXVsdFZhbHVlOiBbeyB2YWx1ZTogXCJDcsOpYXRpb24gZGUgY29tcHRlXCIsIGNoZWNrZWQ6IHRydWUsIGtleTogXCJDcmVhdGlvbl9kZV9jb21wdGVcIiB9LCB7IHZhbHVlOiBcIkNvbmZpZ3VyYXRpb24gZGUgcG9zdGVcIiwgY2hlY2tlZDogZmFsc2UsIGtleTogXCJDb25maWd1cmF0aW9uX2RlX3Bvc3RlXCIgfV0sXHJcbiAgICAgICAgdmFsdWU6IFwiQ3JlYXRpb25fZGVfY29tcHRlXCJcclxuICAgICAgfSxcclxuICAgICAgZm9ybXM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBsYWJlbDogXCJEZXNjcmlwdGlvbnNcIixcclxuICAgICAgICAgIGtleTogXCJEZXNjcmlwdGlvblwiLFxyXG4gICAgICAgICAgZXhwYW5kT25ib2FyZGluZzogdHJ1ZSxcclxuICAgICAgICAgIGRlZmF1bHRWYWx1ZTogbnVsbCxcclxuICAgICAgICAgIHZhbHVlOiBudWxsLFxyXG4gICAgICAgICAgc2l6ZTogMTAwMCxcclxuICAgICAgICAgIGlzTWFuZGF0b3J5OiBmYWxzZSxcclxuICAgICAgICAgIG90aGVyVmFsdWU6ICcnLFxyXG4gICAgICAgICAgdHlwZTogXCJ0ZXh0YXJlYVwiLFxyXG4gICAgICAgICAgZWRpdGFibGU6IHRydWUsXHJcbiAgICAgICAgICBpc0NvbmRpdGlvbmFsOiBmYWxzZSxcclxuICAgICAgICAgIGNvbmRpdGlvblZhbHVlOiBcIlwiLFxyXG4gICAgICAgICAgY29uZGl0aW9uOiB7fSxcclxuICAgICAgICAgIGRlbGV0ZWFibGU6IHRydWUsXHJcbiAgICAgICAgICBzdWJMZXZlbDogMSxcclxuICAgICAgICAgIGV4cGFuZE1vcmU6IGZhbHNlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIF0sXHJcbiAgICB9LFxyXG4gIF07XHJcblxyXG4gIGNhbkRlYWN0aXZhdGUoKSB7XHJcbiAgICBpZiAoIXRoaXMuY2FuRXhpdCkge1xyXG4gICAgICB0aGlzLmRpYWxvZy5vcGVuKEV4aXRDb25maXJtQ29tcG9uZW50LCB7XHJcbiAgICAgICAgZGF0YTogJydcclxuICAgICAgfSlcclxuICAgICAgcmV0dXJuIHRoaXMuc2VydmljZS5jYW5FeGl0JFxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRydWVcclxuICB9XHJcblxyXG5cclxuICBASG9zdExpc3RlbmVyKCdzY3JvbGwnLCBbJyRldmVudCddKVxyXG4gIG9uU2Nyb2xsKGV2ZW50KSB7XHJcbiAgICBjb25zdCBzZWN0aW9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJzZWN0aW9uXCIpO1xyXG4gICAgY29uc3QgbmF2TGkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNyZWF0ZS1wcm9maWxlLW1lbnVzIHVsIGxpXCIpO1xyXG5cclxuICAgIGxldCBjdXJyZW50ID0gXCJcIjtcclxuICAgIHNlY3Rpb25zLmZvckVhY2goKHNlY3Rpb24pID0+IHtcclxuICAgICAgY29uc3Qgc2VjdGlvblRvcCA9IHNlY3Rpb24ub2Zmc2V0VG9wO1xyXG4gICAgICBpZiAoZXZlbnQudGFyZ2V0LnNjcm9sbFRvcCA+IHNlY3Rpb25Ub3AgLSAxMDApIHtcclxuICAgICAgICBjdXJyZW50ID0gc2VjdGlvbi5nZXRBdHRyaWJ1dGUoXCJpZFwiKVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIG5hdkxpLmZvckVhY2goKGxpKSA9PiB7XHJcbiAgICAgIGNvbnN0IGlkID0gbGkuZ2V0QXR0cmlidXRlKCdpZCcpXHJcbiAgICAgIGlmIChpZD8uc3Vic3RyaW5nKDAsIGlkLmxlbmd0aCAtIDEpID09PSBjdXJyZW50KSB7XHJcbiAgICAgICAgbGkuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBsaS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGluaXRGb3JtKCkge1xyXG4gICAgdGhpcy5mb3JtID0gdGhpcy5mYi5ncm91cCh7XHJcbiAgICAgIE5hbWU6IFtcIlwiLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcclxuICAgICAgUGljdG86IFtcIlwiXSxcclxuICAgICAgRGVzY3JpcHRpb246IFtcIlwiXSxcclxuICAgICAgVGFnczogW1wiXCJdLFxyXG4gICAgICBTdGF0dXM6IFtmYWxzZSwgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXHJcbiAgICB9KTtcclxuICB9XHJcbiAgYXN5bmMgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLmlkID0gdGhpcy5yb3V0ZS5zbmFwc2hvdC5wYXJhbU1hcC5nZXQoXCJpZFwiKTtcclxuXHJcbiAgICB0aGlzLmZvcm0udmFsdWVDaGFuZ2VzLnN1YnNjcmliZShjID0+IHtcclxuICAgICAgdGhpcy5jYW5FeGl0ID0gZmFsc2U7XHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAodGhpcy5pZCAhPT0gXCIwXCIpIHtcclxuICAgICAgc2V0VGltZW91dChhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50UHJvZmlsID0gYXdhaXQgdGhpcy5zZXJ2aWNlLmdldFByb2ZpbCh0aGlzLmlkKTtcclxuICAgICAgICB0aGlzLmZvcm0ucGF0Y2hWYWx1ZSh0aGlzLmN1cnJlbnRQcm9maWwpO1xyXG4gICAgICAgIHRoaXMuY2F0ZWdvcmllcyA9IHRoaXMuY3VycmVudFByb2ZpbC5jYXRlZ29yaWVzLm1hcCgoZGF0YSkgPT4gKHsgLi4uZGF0YSwga2V5OiBkYXRhLmtleSB8fCBkYXRhLm5hbWUucmVwbGFjZSgvXFxzL2csICcnKSB9KSk7XHJcbiAgICAgIH0sIDUwMCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnNob3dQcm9maWxlTmFtZSA9IHRydWU7XHJcbiAgICAgIHRoaXMuY2F0ZWdvcmllcyA9IHRoaXMuZGVmYXVsdENhdGVnb3JpZTtcclxuICAgIH1cclxuICAgIHNldFRpbWVvdXQoYXN5bmMgKCkgPT4ge1xyXG4gICAgICB0aGlzLnRhZ3MgPSBhd2FpdCB0aGlzLnNlcnZpY2UuZ2V0QWxsVGFncygpO1xyXG4gICAgfSwgNTAwKTtcclxuICAgIHRoaXMuZ2V0Q29uZGl0aW9uVmFsdWVzKCk7XHJcbiAgfVxyXG5cclxuICBvbkFkZE5ld0NhdGVnb3J5KGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIHRoaXMuY2FuRXhpdCA9IGZhbHNlO1xyXG4gICAgY29uc3QgZGF0YSA9IHtcclxuICAgICAgbmFtZTogXCJOb20gZGUgbGEgY2F0w6lnb3JpZVwiICsgdGhpcy5jYXRlZ29yaWVzLmxlbmd0aCxcclxuICAgICAga2V5OiAnbmV3Q2F0ZWdvcnknICsgdGhpcy5jYXRlZ29yaWVzLmxlbmd0aCxcclxuICAgICAgZWRpdGFibGU6IHRydWUsXHJcbiAgICAgIGlzQ29uZGl0aW9uYWw6IGZhbHNlLFxyXG4gICAgICBjb25kaXRpb25WYWx1ZTogXCJcIixcclxuICAgICAgY29uZGl0aW9uOiB7fSxcclxuICAgICAgZXhwYW5kT25ib2FyZGluZzogdHJ1ZSxcclxuICAgICAgZGVsZXRlYWJsZTogdHJ1ZSxcclxuICAgICAgZXhwYW5kTW9yZTogdHJ1ZSxcclxuICAgICAgc3VmZml4RW5kcG9pbnQ6IFwiXCIsXHJcbiAgICAgIHNlbGVjdG9yOiB7XHJcbiAgICAgICAgbGFiZWw6IFwiQ29tcGFueVwiLFxyXG4gICAgICAgIGtleTogXCJDb21wYW55XCIsXHJcbiAgICAgICAgZGVmYXVsdFZhbHVlOiBbeyB2YWx1ZTogXCJOb3d0ZWFtXCIsIGNoZWNrZWQ6IHRydWUgfSwgeyB2YWx1ZTogXCJJbnRlcm5hbFwiLCBjaGVja2VkOiBmYWxzZSB9XSxcclxuICAgICAgICB2YWx1ZTogXCJOb3d0ZWFtXCJcclxuICAgICAgfSxcclxuICAgICAgdGlja2V0VHlwZToge1xyXG4gICAgICAgIGxhYmVsOiBcIlR5cGUgZGUgdGlja2V0XCIsXHJcbiAgICAgICAga2V5OiBcInR5Y2tldFR5cGVcIixcclxuICAgICAgICBkZWZhdWx0VmFsdWU6IFt7IHZhbHVlOiBcIkNyw6lhdGlvbiBkZSBjb21wdGVcIiwgY2hlY2tlZDogdHJ1ZSwga2V5OiBcIkNyZWF0aW9uX2RlX2NvbXB0ZVwiIH0sIHsgdmFsdWU6IFwiQ29uZmlndXJhdGlvbiBkZSBwb3N0ZVwiLCBjaGVja2VkOiBmYWxzZSwga2V5OiBcIkNvbmZpZ3VyYXRpb25fZGVfcG9zdGVcIiB9XSxcclxuICAgICAgICB2YWx1ZTogXCJDcmVhdGlvbl9kZV9jb21wdGVcIlxyXG4gICAgICB9LFxyXG4gICAgICBmb3JtczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIGxhYmVsOiBgTGFiZWwgw6AgcmVub21tZXIgKCR7MX0pYCxcclxuICAgICAgICAgIGtleTogXCJcIixcclxuICAgICAgICAgIGV4cGFuZE9uYm9hcmRpbmc6IHRydWUsXHJcbiAgICAgICAgICBkZWZhdWx0VmFsdWU6IG51bGwsXHJcbiAgICAgICAgICB2YWx1ZTogbnVsbCxcclxuICAgICAgICAgIHNpemU6IDgwLFxyXG4gICAgICAgICAgaXNNYW5kYXRvcnk6IHRydWUsXHJcbiAgICAgICAgICBvdGhlclZhbHVlOiAnJyxcclxuICAgICAgICAgIHR5cGU6IFwidGV4dFwiLFxyXG4gICAgICAgICAgZGVsZXRlYWJsZTogdHJ1ZSxcclxuICAgICAgICAgIGVkaXRhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgaXNDb25kaXRpb25hbDogZmFsc2UsXHJcbiAgICAgICAgICBjb25kaXRpb25WYWx1ZTogXCJcIixcclxuICAgICAgICAgIGNvbmRpdGlvbjoge30sXHJcbiAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgIH1cclxuICAgIHRoaXMuY2F0ZWdvcmllcy5wdXNoKGRhdGEpO1xyXG4gICAgdGhpcy5vbkhpc3Rvcmljcyh7XHJcbiAgICAgIGZvcm06IGRhdGEsXHJcbiAgICAgIG1ldGhvZDogJ3B1c2gnLFxyXG4gICAgICBsb2NhdGlvbjogJ2NhdGVnb3J5JyxcclxuICAgICAgcGFyYW1zOiBbdGhpcy5jYXRlZ29yaWVzLmxlbmd0aCAtIDFdXHJcbiAgICB9KVxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHRoaXMuc2Nyb2xsVG9TZXJ2aWNlLnNjcm9sbFRvKHtcclxuICAgICAgICB0YXJnZXQ6IGRhdGEubmFtZSxcclxuICAgICAgICBjb250YWluZXI6ICdjYXRlZ29yaWVzLWlkJyxcclxuICAgICAgICBkdXJhdGlvbjogNjUwLFxyXG4gICAgICAgIGVhc2luZzogJ2Vhc2VPdXRFbGFzdGljJyxcclxuICAgICAgICBvZmZzZXQ6IDIwXHJcbiAgICAgIH0pO1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICB0aGlzLm9uRXhwZW5kTW9yZSh7IGZpZWxkOiBkYXRhIH0sIHRoaXMuY2F0ZWdvcmllcy5sZW5ndGggLSAxKTtcclxuICAgICAgICB0aGlzLm9uQWN0aXZlTWVudShkYXRhLCB0aGlzLmNhdGVnb3JpZXMubGVuZ3RoIC0gMSk7XHJcbiAgICAgIH0sIDMwMCk7XHJcblxyXG4gICAgfSwgMjAwKVxyXG4gIH1cclxuICBvbkNoYW5nZUNhdGVnb3J5TmFtZSgpIHtcclxuICAgIHRoaXMuY3VycmVudEVkaXRCbG9jay5rZXkgPSB0aGlzLmN1cnJlbnRFZGl0QmxvY2submFtZS5yZXBsYWNlKC9cXHMvZywgJycpXHJcbiAgfVxyXG4gIGNoZWNrQmxpbmsoaW5kZXgsIGxldmVsKSB7XHJcbiAgICByZXR1cm4gU3RyaW5nKGluZGV4KSArIFN0cmluZyhsZXZlbClcclxuICB9XHJcbiAgb25BZGROZXdGaWVsZCguLi5wYXJhbXMpIHtcclxuICAgIHRoaXMuY2FuRXhpdCA9IGZhbHNlO1xyXG4gICAgY29uc3QgbGVuZ3RoID0gcGFyYW1zLmxlbmd0aDtcclxuICAgIGNvbnN0IGZvcm1zID0gbGVuZ3RoID09PSAxID8gdGhpcy5jYXRlZ29yaWVzW3BhcmFtc1swXV0uZm9ybXMgOiBsZW5ndGggPT09IDIgPyB0aGlzLmNhdGVnb3JpZXNbcGFyYW1zWzBdXS5mb3Jtc1twYXJhbXNbMV1dLmZvcm1zIDogdGhpcy5jYXRlZ29yaWVzW3BhcmFtc1swXV0uZm9ybXNbcGFyYW1zWzFdXS5mb3Jtc1twYXJhbXNbMl1dLmZvcm1zO1xyXG4gICAgY29uc3QgZGF0YSA9IHtcclxuICAgICAgbGFiZWw6IGBMYWJlbCDDoCByZW5vbW1lciAoJHtmb3Jtcy5sZW5ndGggKyAxfSlgLFxyXG4gICAgICBrZXk6IFwiXCIsXHJcbiAgICAgIGV4cGFuZE9uYm9hcmRpbmc6IHRydWUsXHJcbiAgICAgIGRlZmF1bHRWYWx1ZTogbnVsbCxcclxuICAgICAgdmFsdWU6IG51bGwsXHJcbiAgICAgIHNpemU6IDgwLFxyXG4gICAgICBpc01hbmRhdG9yeTogdHJ1ZSxcclxuICAgICAgb3RoZXJWYWx1ZTogJycsXHJcbiAgICAgIHR5cGU6IFwidGV4dFwiLFxyXG4gICAgICBkZWxldGVhYmxlOiB0cnVlLFxyXG4gICAgICBlZGl0YWJsZTogdHJ1ZSxcclxuICAgICAgaXNDb25kaXRpb25hbDogZmFsc2UsXHJcbiAgICAgIGNvbmRpdGlvblZhbHVlOiBcIlwiLFxyXG4gICAgICBjb25kaXRpb246IHt9LFxyXG4gICAgICBzdWJMZXZlbDogcGFyYW1zLmxlbmd0aCxcclxuICAgICAgLy9mb3JtczogW11cclxuICAgIH1cclxuICAgIGZvcm1zLnB1c2goZGF0YSk7XHJcbiAgICB0aGlzLm5ld0ZpZWxkSW5kZXggPSBTdHJpbmcoZm9ybXMubGVuZ3RoIC0gMSkgKyBTdHJpbmcobGVuZ3RoKTtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICB0aGlzLm5ld0ZpZWxkSW5kZXggPSBudWxsXHJcbiAgICB9LCA1MDAwKTtcclxuICAgIHRoaXMub25IaXN0b3JpY3Moe1xyXG4gICAgICBmb3JtOiBkYXRhLFxyXG4gICAgICBtZXRob2Q6ICdwdXNoJyxcclxuICAgICAgbG9jYXRpb246ICdmb3JtcycsXHJcbiAgICAgIHBhcmFtc1xyXG4gICAgfSlcclxuICAgIHRoaXMub25FZGl0QmxvY2soZm9ybXMuYXQoLTEpLCBwYXJhbXMpXHJcbiAgfVxyXG5cclxuICBvbkFkZE5ld1N1YkxldmVsRmllbGQoLi4ucGFyYW1zKSB7XHJcbiAgICB0aGlzLmNhbkV4aXQgPSBmYWxzZTtcclxuICAgIGNvbnN0IGxlbmd0aCA9IHBhcmFtcy5sZW5ndGg7XHJcbiAgICBjb25zdCBmb3JtcyA9IGxlbmd0aCA9PT0gMiA/IHRoaXMuY2F0ZWdvcmllc1twYXJhbXNbMF1dLmZvcm1zW3BhcmFtc1tsZW5ndGggLSAxXV0gOiBsZW5ndGggPT09IDMgPyB0aGlzLmNhdGVnb3JpZXNbcGFyYW1zWzBdXS5mb3Jtc1twYXJhbXNbMV1dLmZvcm1zW3BhcmFtc1tsZW5ndGggLSAxXV0gOiB0aGlzLmNhdGVnb3JpZXNbcGFyYW1zWzBdXS5mb3Jtc1twYXJhbXNbMV1dLmZvcm1zW3BhcmFtc1syXV0uZm9ybXNbcGFyYW1zW2xlbmd0aCAtIDFdXTtcclxuICAgIGZvcm1zLmV4cGFuZE1vcmUgPSB0cnVlO1xyXG4gICAgZm9ybXMuZm9ybXMgPSBbXTtcclxuICAgIGNvbnN0IG5ld0Zvcm0gPSB7XHJcbiAgICAgIGxhYmVsOiBcIlwiLFxyXG4gICAgICBrZXk6IFwiXCIsXHJcbiAgICAgIGV4cGFuZE9uYm9hcmRpbmc6IHRydWUsXHJcbiAgICAgIGRlZmF1bHRWYWx1ZTogbnVsbCxcclxuICAgICAgdmFsdWU6IG51bGwsXHJcbiAgICAgIHNpemU6IDgwLFxyXG4gICAgICBpc01hbmRhdG9yeTogdHJ1ZSxcclxuICAgICAgb3RoZXJWYWx1ZTogJycsXHJcbiAgICAgIHR5cGU6IFwidGV4dFwiLFxyXG4gICAgICBkZWxldGVhYmxlOiB0cnVlLFxyXG4gICAgICBlZGl0YWJsZTogdHJ1ZSxcclxuICAgICAgaXNDb25kaXRpb25hbDogZmFsc2UsXHJcbiAgICAgIGNvbmRpdGlvblZhbHVlOiBcIlwiLFxyXG4gICAgICBjb25kaXRpb246IHt9LFxyXG4gICAgICBzdWJMZXZlbDogcGFyYW1zLmxlbmd0aCxcclxuICAgICAgZXhwYW5kTW9yZTogdHJ1ZSxcclxuICAgICAgLy9mb3JtczogW11cclxuICAgIH1cclxuICAgIGZvcm1zLmZvcm1zLnB1c2gobmV3Rm9ybSk7XHJcbiAgICB0aGlzLm9uSGlzdG9yaWNzKHtcclxuICAgICAgZm9ybTogbmV3Rm9ybSxcclxuICAgICAgbWV0aG9kOiAncHVzaCcsXHJcbiAgICAgIGxvY2F0aW9uOiAnZm9ybXMnLFxyXG4gICAgICBwYXJhbXNcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBvblJlbW92ZUZpZWxkKC4uLnBhcmFtcykge1xyXG4gICAgdGhpcy5jYW5FeGl0ID0gZmFsc2U7XHJcbiAgICBjb25zdCBsZW5ndGggPSBwYXJhbXMubGVuZ3RoO1xyXG4gICAgY29uc3QgZm9ybXMgPSBsZW5ndGggPT09IDIgPyB0aGlzLmNhdGVnb3JpZXNbcGFyYW1zWzBdXS5mb3JtcyA6IGxlbmd0aCA9PT0gMyA/IHRoaXMuY2F0ZWdvcmllc1twYXJhbXNbMF1dLmZvcm1zW3BhcmFtc1sxXV0uZm9ybXMgOiB0aGlzLmNhdGVnb3JpZXNbcGFyYW1zWzBdXS5mb3Jtc1twYXJhbXNbMV1dLmZvcm1zW3BhcmFtc1syXV0uZm9ybXM7XHJcbiAgICBmb3Jtcy5zcGxpY2UocGFyYW1zW2xlbmd0aCAtIDFdLCAxKTtcclxuICAgIHRoaXMub25IaXN0b3JpY3Moe1xyXG4gICAgICBmb3JtOiBmb3Jtc1twYXJhbXNbbGVuZ3RoIC0gMV1dLFxyXG4gICAgICBsb2NhdGlvbjogJ2Zvcm1zJyxcclxuICAgICAgbWV0aG9kOiAnc3BsaWNlJyxcclxuICAgICAgcGFyYW1zXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgb25SZW1vdmVDYXRlZ29yeShlLCBpKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB0aGlzLmNhbkV4aXQgPSBmYWxzZTtcclxuICAgIHRoaXMub25IaXN0b3JpY3Moe1xyXG4gICAgICBmb3JtOiB0aGlzLmNhdGVnb3JpZXMuc3BsaWNlKGksIDEpLFxyXG4gICAgICBtZXRob2Q6ICdzcGxpY2UnLFxyXG4gICAgICBsb2NhdGlvbjogJ2NhdGVnb3J5JyxcclxuICAgICAgcGFyYW1zOiBbaV1cclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBvbkNoYW5nZUNhdGVnb3J5KCkge1xyXG4gICAgcmV0dXJuIHRoaXMuY2F0ZWdvcmllcy5ldmVyeSgoY2F0KSA9PiBjYXQubmFtZSAhPT0gXCJcIiAmJiBjYXQuZm9ybXMuZXZlcnkoKGZpZWxkKSA9PiBmaWVsZC5sYWJlbCAhPT0gXCJcIiAmJiBmaWVsZC50eXBlICE9PSBcIlwiKSk7XHJcbiAgfVxyXG5cclxuICBhc3luYyBvblN1Ym1pdChpc1B1Ymxpc2g6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuaXNTdWJtaXR0ZWQgPSBpc1B1Ymxpc2g7XHJcbiAgICBpZiAodGhpcy5mb3JtLnZhbGlkICYmIHRoaXMub25DaGFuZ2VDYXRlZ29yeSgpKSB7XHJcbiAgICAgIHRoaXMubG9hZGluZyA9IHRydWVcclxuICAgICAgaWYgKGlzUHVibGlzaCkge1xyXG4gICAgICAgIHRoaXMubGl2ZUxhYmVsID0gXCJDaGFyZ2VtZW50Li4uLlwiXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5kcmFmdExhYmVsID0gXCJDaGFyZ2VtZW50Li4uXCJcclxuICAgICAgfVxyXG4gICAgICBjb25zdCByZXN1bHQgPVxyXG4gICAgICAgIHRoaXMuaWQgIT09IFwiMFwiXHJcbiAgICAgICAgICA/IGF3YWl0IHRoaXMuc2VydmljZS51cGRhdGVQcm9maWwoe1xyXG4gICAgICAgICAgICAuLi50aGlzLmN1cnJlbnRQcm9maWwsXHJcbiAgICAgICAgICAgIC4uLnRoaXMuZm9ybS52YWx1ZSxcclxuICAgICAgICAgICAgU3RhdHVzOiBpc1B1Ymxpc2gsXHJcbiAgICAgICAgICAgIGNhdGVnb3JpZXM6IHRoaXMuY2F0ZWdvcmllcyxcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICA6IGF3YWl0IHRoaXMuc2VydmljZS5jcmVhdGVQcm9maWwoe1xyXG4gICAgICAgICAgICAuLi50aGlzLmZvcm0udmFsdWUsXHJcbiAgICAgICAgICAgIFN0YXR1czogaXNQdWJsaXNoLFxyXG4gICAgICAgICAgICBjYXRlZ29yaWVzOiB0aGlzLmNhdGVnb3JpZXMsXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgaWYgKHJlc3VsdCkge1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdwcm9maWwnKTtcclxuICAgICAgICBhd2FpdCB0aGlzLnNlcnZpY2UuZ2V0QWxsUHJvZmlsKCk7XHJcbiAgICAgICAgdGhpcy5jYW5FeGl0ID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZVxyXG5cclxuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbdGhpcy5zZXJ2aWNlLm1haW5QYXRoICsgJy90ZW1wbGF0ZSddKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZVxyXG4gICAgICB9XHJcbiAgICAgIGlmIChpc1B1Ymxpc2gpIHtcclxuICAgICAgICB0aGlzLmxpdmVMYWJlbCA9IFwiUHVibGllciBsZSBwcm9maWxcIlxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuZHJhZnRMYWJlbCA9IFwiRW5yZWdpc3RyZXIgbGUgYnJvdWlsbG9uXCJcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25DaGFuZ2VUeXBlKHR5cGU6IHN0cmluZywgLi4ucGFyYW1zKSB7XHJcblxyXG4gICAgdGhpcy5jYW5FeGl0ID0gZmFsc2U7XHJcbiAgICBjb25zdCBsZW5ndGggPSBwYXJhbXMubGVuZ3RoO1xyXG4gICAgY29uc3QgZm9ybXMgPSBsZW5ndGggPT09IDIgPyB0aGlzLmNhdGVnb3JpZXNbcGFyYW1zWzBdXS5mb3JtcyA6IGxlbmd0aCA9PT0gMyA/IHRoaXMuY2F0ZWdvcmllc1twYXJhbXNbMF1dLmZvcm1zW3BhcmFtc1sxXV0uZm9ybXMgOiB0aGlzLmNhdGVnb3JpZXNbcGFyYW1zWzBdXS5mb3Jtc1twYXJhbXNbMV1dLmZvcm1zW3BhcmFtc1syXV0uZm9ybXM7XHJcbiAgICBpZiAodHlwZSA9PT0gXCJzZWxlY3RcIiB8fCB0eXBlID09PSBcInJhZGlvXCIgfHwgdHlwZSA9PT0gXCJjaGVja2JveF9tdWx0aXBsZVwiKSB7XHJcbiAgICAgIGZvcm1zW3BhcmFtc1tsZW5ndGggLSAxXV0uZGVmYXVsdFZhbHVlID0gW107XHJcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09IFwiY2hlY2tib3hcIiB8fCB0eXBlID09PSBcInRvZ2dsZVwiKSB7XHJcbiAgICAgIGZvcm1zW3BhcmFtc1tsZW5ndGggLSAxXV0uZGVmYXVsdFZhbHVlID0gdHJ1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGZvcm1zW3BhcmFtc1tsZW5ndGggLSAxXV0uZGVmYXVsdFZhbHVlID0gXCJcIjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uS2V5UHJlc3MoZXZlbnQ6IGFueSwgLi4ucGFyYW1zKSB7XHJcbiAgICB0aGlzLmNhbkV4aXQgPSBmYWxzZTtcclxuICAgIGNvbnN0IGxlbmd0aCA9IHBhcmFtcy5sZW5ndGg7XHJcbiAgICBjb25zdCBmb3JtcyA9IGxlbmd0aCA9PT0gMiA/IHRoaXMuY2F0ZWdvcmllc1twYXJhbXNbMF1dLmZvcm1zW3BhcmFtc1tsZW5ndGggLSAxXV0gOiBsZW5ndGggPT09IDMgPyB0aGlzLmNhdGVnb3JpZXNbcGFyYW1zWzBdXS5mb3Jtc1twYXJhbXNbMV1dLmZvcm1zW3BhcmFtc1tsZW5ndGggLSAxXV0gOiB0aGlzLmNhdGVnb3JpZXNbcGFyYW1zWzBdXS5mb3Jtc1twYXJhbXNbMV1dLmZvcm1zW3BhcmFtc1syXV0uZm9ybXNbcGFyYW1zW2xlbmd0aCAtIDFdXTtcclxuICAgIGlmIChldmVudC5rZXkgPT09IFwiO1wiKSB7XHJcbiAgICAgIGNvbnN0IGV4aXN0ID0gZm9ybXMuZGVmYXVsdFZhbHVlLmZpbmQoKG9wdCkgPT4gb3B0LnZhbHVlLnRvTG9jYWxlTG93ZXJDYXNlKCkgPT09IGV2ZW50LnRhcmdldC52YWx1ZS5zcGxpdChcIjtcIilbMF0udG9Mb2NhbGVMb3dlckNhc2UoKSk7XHJcbiAgICAgIGlmICghZXhpc3QpIHtcclxuICAgICAgICBmb3Jtcy5kZWZhdWx0VmFsdWUucHVzaCh7XHJcbiAgICAgICAgICB2YWx1ZTogZXZlbnQudGFyZ2V0LnZhbHVlLnNwbGl0KFwiO1wiKVswXSxcclxuICAgICAgICAgIGNoZWNrZWQ6IGZhbHNlXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZXZlbnQudGFyZ2V0LnZhbHVlID0gXCJcIjtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBldmVudC50YXJnZXQudmFsdWUgPSBcIlwiO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyB0aGlzLmdldENvbmRpdGlvblZhbHVlcygpXHJcbiAgfVxyXG5cclxuICByZW1vdmVLZXl3b3JkKGtleXdvcmQ6IGFueSwgLi4ucGFyYW1zKSB7XHJcbiAgICB0aGlzLmNhbkV4aXQgPSBmYWxzZTtcclxuICAgIGNvbnN0IGxlbmd0aCA9IHBhcmFtcy5sZW5ndGg7XHJcbiAgICBjb25zdCBmb3JtcyA9IGxlbmd0aCA9PT0gMiA/IHRoaXMuY2F0ZWdvcmllc1twYXJhbXNbMF1dLmZvcm1zW3BhcmFtc1tsZW5ndGggLSAxXV0gOiBsZW5ndGggPT09IDMgPyB0aGlzLmNhdGVnb3JpZXNbcGFyYW1zWzBdXS5mb3Jtc1twYXJhbXNbMV1dLmZvcm1zW3BhcmFtc1tsZW5ndGggLSAxXV0gOiB0aGlzLmNhdGVnb3JpZXNbcGFyYW1zWzBdXS5mb3Jtc1twYXJhbXNbMV1dLmZvcm1zW3BhcmFtc1syXV0uZm9ybXNbcGFyYW1zW2xlbmd0aCAtIDFdXTtcclxuICAgIGZvcm1zLmRlZmF1bHRWYWx1ZSA9IGZvcm1zLmRlZmF1bHRWYWx1ZS5maWx0ZXIoKG9wdGlvbikgPT4gb3B0aW9uLnZhbHVlICE9PSBrZXl3b3JkLnZhbHVlKTtcclxuICAgIC8vIHRoaXMuZ2V0Q29uZGl0aW9uVmFsdWVzKClcclxuICB9XHJcblxyXG4gIHNjcm9sbFRvKGNhdGVnb3J5LCBpLCkge1xyXG4gICAgdGhpcy5vbkFjdGl2ZU1lbnUoY2F0ZWdvcnksIGkpO1xyXG4gICAgaWYgKCFjYXRlZ29yeS5leHBhbmRNb3JlKSB7XHJcbiAgICAgIGxldCBlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNhdGVnb3J5Lm5hbWUpO1xyXG4gICAgICBlbC5zY3JvbGxJbnRvVmlldyh7XHJcbiAgICAgICAgYmVoYXZpb3I6ICdzbW9vdGgnXHJcbiAgICAgIH0pO1xyXG4gICAgICB0aGlzLm9uRXhwZW5kTW9yZSh7IGZpZWxkOiBjYXRlZ29yeSB9LCBpKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uRXhwZW5kTW9yZShldmVudCwgLi4ucGFyYW1zKSB7XHJcbiAgICBpZiAoZXZlbnQpIHtcclxuICAgICAgaWYgKGV2ZW50LmV2ZW50KSB7XHJcbiAgICAgICAgZXZlbnQuZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoZXZlbnQuZmllbGQgJiYgIWV2ZW50LmZpZWxkLmV4cGFuZE1vcmUpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY2F0ZWdvcmllcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgdGhpcy5jYXRlZ29yaWVzW2ldLmV4cGFuZE1vcmUgPSBmYWxzZTtcclxuICAgICAgICAgIGlmICh0aGlzLmNhdGVnb3JpZXNbaV0uZm9ybXMpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLmNhdGVnb3JpZXNbaV0uZm9ybXMubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgICB0aGlzLmNhdGVnb3JpZXNbaV0uZm9ybXNbal0uZXhwYW5kTW9yZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgfVxyXG4gICAgaWYgKHBhcmFtcy5sZW5ndGggPT09IDEpIHtcclxuICAgICAgdGhpcy5jYXRlZ29yaWVzW3BhcmFtc1swXV0uZXhwYW5kTW9yZSA9ICF0aGlzLmNhdGVnb3JpZXNbcGFyYW1zWzBdXS5leHBhbmRNb3JlO1xyXG4gICAgfSBlbHNlIGlmIChwYXJhbXMubGVuZ3RoID09PSAyKSB7XHJcbiAgICAgIGlmICh0aGlzLmNhdGVnb3JpZXNbcGFyYW1zWzBdXS5mb3Jtc1twYXJhbXNbMV1dLmV4cGFuZE1vcmUpIHtcclxuICAgICAgICB0aGlzLmNhdGVnb3JpZXNbcGFyYW1zWzBdXS5mb3Jtc1twYXJhbXNbMV1dLmV4cGFuZE1vcmUgPSBmYWxzZTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmNhdGVnb3JpZXNbcGFyYW1zWzBdXS5leHBhbmRNb3JlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmNhdGVnb3JpZXNbcGFyYW1zWzBdXS5mb3Jtc1twYXJhbXNbMV1dLmV4cGFuZE1vcmUgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2UgaWYgKHBhcmFtcy5sZW5ndGggPT09IDMpIHtcclxuICAgICAgaWYgKHRoaXMuY2F0ZWdvcmllc1twYXJhbXNbMF1dLmZvcm1zW3BhcmFtc1sxXV0uZm9ybXNbcGFyYW1zWzJdXS5leHBhbmRNb3JlKSB7XHJcbiAgICAgICAgdGhpcy5jYXRlZ29yaWVzW3BhcmFtc1swXV0uZm9ybXNbcGFyYW1zWzFdXS5mb3Jtc1twYXJhbXNbMl1dLmV4cGFuZE1vcmUgPSBmYWxzZTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmNhdGVnb3JpZXNbcGFyYW1zWzBdXS5leHBhbmRNb3JlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmNhdGVnb3JpZXNbcGFyYW1zWzBdXS5mb3Jtc1twYXJhbXNbMV1dLmV4cGFuZE1vcmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuY2F0ZWdvcmllc1twYXJhbXNbMF1dLmZvcm1zW3BhcmFtc1sxXV0uZm9ybXNbcGFyYW1zWzJdXS5leHBhbmRNb3JlID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYgKHRoaXMuY2F0ZWdvcmllc1twYXJhbXNbMF1dLmZvcm1zW3BhcmFtc1sxXV0uZm9ybXNbcGFyYW1zWzJdXS5mb3Jtc1twYXJhbXNbM11dLmV4cGFuZE1vcmUpIHtcclxuICAgICAgICB0aGlzLmNhdGVnb3JpZXNbcGFyYW1zWzBdXS5mb3Jtc1twYXJhbXNbMV1dLmZvcm1zW3BhcmFtc1syXV0uZm9ybXNbcGFyYW1zWzNdXS5leHBhbmRNb3JlID0gZmFsc2U7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5jYXRlZ29yaWVzW3BhcmFtc1swXV0uZXhwYW5kTW9yZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5jYXRlZ29yaWVzW3BhcmFtc1swXV0uZm9ybXNbcGFyYW1zWzFdXS5leHBhbmRNb3JlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmNhdGVnb3JpZXNbcGFyYW1zWzBdXS5mb3Jtc1twYXJhbXNbMV1dLmZvcm1zW3BhcmFtc1syXV0uZXhwYW5kTW9yZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5jYXRlZ29yaWVzW3BhcmFtc1swXV0uZm9ybXNbcGFyYW1zWzFdXS5mb3Jtc1twYXJhbXNbMl1dLmZvcm1zW3BhcmFtc1szXV0uZXhwYW5kTW9yZSA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uQ2hlY2tlZERlZmF1bHQoZXZlbnQsIC4uLnBhcmFtcykge1xyXG4gICAgaWYgKHBhcmFtcy5sZW5ndGggPT09IDEpIHtcclxuICAgICAgdGhpcy5jYXRlZ29yaWVzW3BhcmFtc1swXV0uZGVmYXVsdFZhbHVlID0gZXZlbnQ7XHJcbiAgICB9IGVsc2UgaWYgKHBhcmFtcy5sZW5ndGggPT09IDIpIHtcclxuICAgICAgdGhpcy5jYXRlZ29yaWVzW3BhcmFtc1swXV0uZGVmYXVsdFZhbHVlID0gZXZlbnQ7XHJcbiAgICAgIHRoaXMuY2F0ZWdvcmllc1twYXJhbXNbMF1dLmZvcm1zW3BhcmFtc1sxXV0uZGVmYXVsdFZhbHVlID0gZXZlbnQ7XHJcbiAgICB9IGVsc2UgaWYgKHBhcmFtcy5sZW5ndGggPT09IDMpIHtcclxuICAgICAgdGhpcy5jYXRlZ29yaWVzW3BhcmFtc1swXV0uZGVmYXVsdFZhbHVlID0gZXZlbnQ7XHJcbiAgICAgIHRoaXMuY2F0ZWdvcmllc1twYXJhbXNbMF1dLmZvcm1zW3BhcmFtc1sxXV0uZGVmYXVsdFZhbHVlID0gZXZlbnQ7XHJcbiAgICAgIHRoaXMuY2F0ZWdvcmllc1twYXJhbXNbMF1dLmZvcm1zW3BhcmFtc1sxXV0uZm9ybXNbcGFyYW1zWzJdXS5kZWZhdWx0VmFsdWUgPSBldmVudDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuY2F0ZWdvcmllc1twYXJhbXNbMF1dLmRlZmF1bHRWYWx1ZSA9IGV2ZW50O1xyXG4gICAgICB0aGlzLmNhdGVnb3JpZXNbcGFyYW1zWzBdXS5mb3Jtc1twYXJhbXNbMV1dLmRlZmF1bHRWYWx1ZSA9IGV2ZW50O1xyXG4gICAgICB0aGlzLmNhdGVnb3JpZXNbcGFyYW1zWzBdXS5mb3Jtc1twYXJhbXNbMV1dLmZvcm1zW3BhcmFtc1syXV0uZGVmYXVsdFZhbHVlID0gZXZlbnQ7XHJcbiAgICAgIHRoaXMuY2F0ZWdvcmllc1twYXJhbXNbMF1dLmZvcm1zW3BhcmFtc1sxXV0uZm9ybXNbcGFyYW1zWzJdXS5mb3Jtc1twYXJhbXNbM11dLmRlZmF1bHRWYWx1ZSA9IGV2ZW50O1xyXG4gICAgfVxyXG4gICAgLy8gdGhpcy5nZXRDb25kaXRpb25WYWx1ZXMoKVxyXG4gIH1cclxuXHJcbiAgYWRkS2V5d29yZEZyb21JbnB1dChldmVudDogTWF0Q2hpcElucHV0RXZlbnQsIHByZXYsIC4uLnBhcmFtcykge1xyXG4gICAgdGhpcy5jYW5FeGl0ID0gZmFsc2U7XHJcbiAgICBjb25zdCBpbnB1dCA9IGV2ZW50LmlucHV0O1xyXG4gICAgY29uc3QgdmFsdWUgPSBldmVudC52YWx1ZTtcclxuICAgIGNvbnN0IGxlbmd0aCA9IHBhcmFtcy5sZW5ndGg7XHJcbiAgICBjb25zdCBmb3JtcyA9IGxlbmd0aCA9PT0gMiA/IHRoaXMuY2F0ZWdvcmllc1twYXJhbXNbMF1dLmZvcm1zW3BhcmFtc1tsZW5ndGggLSAxXV0gOiBsZW5ndGggPT09IDMgPyB0aGlzLmNhdGVnb3JpZXNbcGFyYW1zWzBdXS5mb3Jtc1twYXJhbXNbMV1dLmZvcm1zW3BhcmFtc1tsZW5ndGggLSAxXV0gOiB0aGlzLmNhdGVnb3JpZXNbcGFyYW1zWzBdXS5mb3Jtc1twYXJhbXNbMV1dLmZvcm1zW3BhcmFtc1syXV0uZm9ybXNbcGFyYW1zW2xlbmd0aCAtIDFdXTtcclxuICAgIGlmICh2YWx1ZSkge1xyXG4gICAgICBjb25zdCBwcmV2SW5kZXggPSBmb3Jtcy5kZWZhdWx0VmFsdWUuZmluZEluZGV4KChvcHQpID0+IG9wdC52YWx1ZS50b0xvY2FsZUxvd2VyQ2FzZSgpID09PSBwcmV2LnRvTG9jYWxlTG93ZXJDYXNlKCkpO1xyXG4gICAgICBpZiAocHJldkluZGV4ICE9PSAtMSkge1xyXG4gICAgICAgIGZvcm1zLmRlZmF1bHRWYWx1ZVtwcmV2SW5kZXhdLnZhbHVlID0gdmFsdWUudHJpbSgpO1xyXG4gICAgICAgIGlucHV0LnZhbHVlID0gXCJcIjtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zdCBleGlzdCA9IGZvcm1zLmRlZmF1bHRWYWx1ZS5maW5kKChvcHQpID0+IG9wdC52YWx1ZS50b0xvY2FsZUxvd2VyQ2FzZSgpID09PSBldmVudC52YWx1ZS50b0xvY2FsZUxvd2VyQ2FzZSgpKTtcclxuICAgICAgICBpZiAoIWV4aXN0KSB7XHJcbiAgICAgICAgICBmb3Jtcy5kZWZhdWx0VmFsdWUucHVzaCh7IHZhbHVlOiB2YWx1ZS50cmltKCksIGNoZWNrZWQ6IGZhbHNlIH0pO1xyXG4gICAgICAgICAgaW5wdXQudmFsdWUgPSBcIlwiO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBpbnB1dC52YWx1ZSA9IFwiXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgfVxyXG4gICAgLy8gdGhpcy5nZXRDb25kaXRpb25WYWx1ZXMoKVxyXG4gIH1cclxuXHJcbiAgZHJvcChldmVudDogQ2RrRHJhZ0Ryb3A8c3RyaW5nW10+KSB7XHJcbiAgICB0aGlzLmNhbkV4aXQgPSBmYWxzZTtcclxuICAgIGlmIChldmVudC5wcmV2aW91c0NvbnRhaW5lciA9PT0gZXZlbnQuY29udGFpbmVyKSB7XHJcbiAgICAgIG1vdmVJdGVtSW5BcnJheShldmVudC5jb250YWluZXIuZGF0YSwgZXZlbnQucHJldmlvdXNJbmRleCwgZXZlbnQuY3VycmVudEluZGV4KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRyYW5zZmVyQXJyYXlJdGVtKGV2ZW50LnByZXZpb3VzQ29udGFpbmVyLmRhdGEsIGV2ZW50LmNvbnRhaW5lci5kYXRhLCBldmVudC5wcmV2aW91c0luZGV4LCBldmVudC5jdXJyZW50SW5kZXgpO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBkcm9wRmllbGQoZXZlbnQ6IENka0RyYWdEcm9wPHN0cmluZ1tdPikge1xyXG4gICAgY29uc3QgY29udGFpbmVyRGF0YTogYW55ID0gZXZlbnQuY29udGFpbmVyLmRhdGE7XHJcbiAgICBjb25zdCBwcmV2aW91c0NvbnRhaW5lckRhdGE6IGFueSA9IGV2ZW50LnByZXZpb3VzQ29udGFpbmVyLmRhdGE7XHJcbiAgICBjb25zdCBjYXRlZ29yeSA9IGNvbnRhaW5lckRhdGEuY2F0ZWdvcnk7XHJcbiAgXHJcbiAgICBjYXRlZ29yeS5mb3Jtc1twcmV2aW91c0NvbnRhaW5lckRhdGEuaW5kZXhdID0gY29udGFpbmVyRGF0YS5maWVsZDtcclxuICAgIGNhdGVnb3J5LmZvcm1zW2NvbnRhaW5lckRhdGEuaW5kZXhdID0gcHJldmlvdXNDb250YWluZXJEYXRhLmZpZWxkO1xyXG4gICAgY29uc29sZS5sb2coICdjb250YWluZXJEYXRhLmZpZWxkJywgY29udGFpbmVyRGF0YS5maWVsZCApO1xyXG4gIH1cclxuXHJcbiAgaW5nb3JlRGVmYXVsdEFjdGlvbihlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgfVxyXG5cclxuICBvblNob3dDYXRlZ29yeSgpIHtcclxuICAgIHRoaXMuc2hvd1Byb2ZpbGVOYW1lID0gIXRoaXMuc2hvd1Byb2ZpbGVOYW1lO1xyXG4gIH1cclxuXHJcbiAgb25TZWxlY3RQaWN0byhlLCBwaWN0bykge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgdGhpcy5jYW5FeGl0ID0gZmFsc2U7XHJcbiAgICB0aGlzLmZvcm0ucGF0Y2hWYWx1ZSh7IFBpY3RvOiBwaWN0byB9KTtcclxuICAgIHRoaXMuaXNQaWN0b0xpc3RTaG93ID0gIXRoaXMuaXNQaWN0b0xpc3RTaG93O1xyXG4gIH1cclxuICBvblNob3dQaWN0b0xpc3QoZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgdGhpcy5pc1BpY3RvTGlzdFNob3cgPSAhdGhpcy5pc1BpY3RvTGlzdFNob3c7XHJcbiAgfVxyXG4gIG9uQ2hhbmdlTGFiZWwoZXZlbnQ6IGFueSwgLi4ucGFyYW1zKSB7XHJcbiAgICBjb25zdCBhcnIgPSBldmVudC5sYWJlbC5zcGxpdChcIiBcIik7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xyXG4gICAgICBhcnJbaV0gPSBhcnJbaV0uY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBhcnJbaV0uc2xpY2UoMSk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBsZW5ndGggPSBwYXJhbXMubGVuZ3RoO1xyXG4gICAgY29uc3QgZm9ybXMgPSBsZW5ndGggPT09IDIgPyB0aGlzLmNhdGVnb3JpZXNbcGFyYW1zWzBdXS5mb3Jtc1twYXJhbXNbbGVuZ3RoIC0gMV1dIDogbGVuZ3RoID09PSAzID8gdGhpcy5jYXRlZ29yaWVzW3BhcmFtc1swXV0uZm9ybXNbcGFyYW1zWzFdXS5mb3Jtc1twYXJhbXNbbGVuZ3RoIC0gMV1dIDogdGhpcy5jYXRlZ29yaWVzW3BhcmFtc1swXV0uZm9ybXNbcGFyYW1zWzFdXS5mb3Jtc1twYXJhbXNbMl1dLmZvcm1zW3BhcmFtc1tsZW5ndGggLSAxXV07XHJcbiAgICBmb3Jtcy5rZXkgPSBhcnIuam9pbignJylcclxuXHJcbiAgfVxyXG5cclxuICBvbkNoZWNrZWRDaGlwKGV2ZW50OiBhbnksIC4uLnBhcmFtcykge1xyXG4gICAgdGhpcy5jYW5FeGl0ID0gZmFsc2U7XHJcbiAgICBjb25zdCBsZW5ndGggPSBwYXJhbXMubGVuZ3RoO1xyXG4gICAgY29uc3QgZm9ybXMgPSBsZW5ndGggPT09IDIgPyB0aGlzLmNhdGVnb3JpZXNbcGFyYW1zWzBdXS5mb3Jtc1twYXJhbXNbbGVuZ3RoIC0gMV1dIDogbGVuZ3RoID09PSAzID8gdGhpcy5jYXRlZ29yaWVzW3BhcmFtc1swXV0uZm9ybXNbcGFyYW1zWzFdXS5mb3Jtc1twYXJhbXNbbGVuZ3RoIC0gMV1dIDogdGhpcy5jYXRlZ29yaWVzW3BhcmFtc1swXV0uZm9ybXNbcGFyYW1zWzFdXS5mb3Jtc1twYXJhbXNbMl1dLmZvcm1zW3BhcmFtc1tsZW5ndGggLSAxXV07XHJcbiAgICBjb25zdCBpbmRleCA9IGZvcm1zLmRlZmF1bHRWYWx1ZS5maW5kSW5kZXgoKGNoaXApID0+IGNoaXAudmFsdWUgPT09IGV2ZW50LnZhbHVlKVxyXG4gICAgaWYgKGluZGV4ICE9PSAtMSAmJiBmb3Jtcy50eXBlID09PSAnY2hlY2tib3hfbXVsdGlwbGUnKSB7XHJcbiAgICAgIGZvcm1zLmRlZmF1bHRWYWx1ZVtpbmRleF0uY2hlY2tlZCA9ICFldmVudC5jaGVja2VkXHJcbiAgICB9IGVsc2UgaWYgKGluZGV4ICE9PSAtMSkge1xyXG4gICAgICBmb3Jtcy5kZWZhdWx0VmFsdWUuZm9yRWFjaCgodmFsdWUpID0+IHtcclxuICAgICAgICB2YWx1ZS5jaGVja2VkID0gZmFsc2U7XHJcbiAgICAgIH0pXHJcbiAgICAgIGZvcm1zLmRlZmF1bHRWYWx1ZVtpbmRleF0uY2hlY2tlZCA9ICFldmVudC5jaGVja2VkXHJcbiAgICB9XHJcbiAgICAvLyB0aGlzLmdldENvbmRpdGlvblZhbHVlcygpXHJcbiAgfVxyXG5cclxuICBvcGVuRGlhbG9nKCkge1xyXG4gICAgY29uc3QgZGlhbG9nUmVmID0gdGhpcy5kaWFsb2cub3BlbihEaWFsb2dDcmVhdGVUZW1wbGF0ZUNvbXBvbmVudCwge1xyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgdGFnczogdGhpcy50YWdzLFxyXG4gICAgICAgIHByb2ZpbDogdGhpcy5mb3JtLnZhbHVlXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgZGlhbG9nUmVmLmFmdGVyQ2xvc2VkKCkuc3Vic2NyaWJlKChjdXJyZW50OiBhbnkpID0+IHtcclxuICAgICAgaWYgKGN1cnJlbnQpIHtcclxuICAgICAgICB0aGlzLnNlcnZpY2UuY3VycmVudFRlbXBsYXRlLm5leHQoY3VycmVudCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgb25QYXNzSW5FZGl0TW9kZShpKSB7XHJcbiAgICB0aGlzLmNhbkV4aXQgPSBmYWxzZTtcclxuICAgIHRoaXMuZWRpdEluZGV4ID0gaTtcclxuICB9XHJcblxyXG4gIG9uRWRpdCgpIHtcclxuICAgIHRoaXMuZWRpdEluZGV4ID0gbnVsbDtcclxuICB9XHJcblxyXG4gIG9uRWRpdENhdGVnb3J5TmFtZShpLCBuYW1lKSB7XHJcbiAgICB0aGlzLmNhbkV4aXQgPSBmYWxzZTtcclxuICAgIHRoaXMuY2F0ZWdvcmllc1tpXS5uYW1lID0gbmFtZTtcclxuICAgIC8vIHRoaXMuZ2V0Q29uZGl0aW9uVmFsdWVzKClcclxuICB9XHJcbiAgb25BY3JlbGluayhlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgfVxyXG5cclxuICBnZXRDb25kaXRpb25WYWx1ZXMoKSB7XHJcbiAgICBjb25zdCBjb25kaXRpb25zTGlzdDogYW55ID0gW107XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY2F0ZWdvcmllcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBjb25zdCBjYXRlZ29yeSA9IHtcclxuICAgICAgICBsYWJlbDogdGhpcy5jYXRlZ29yaWVzW2ldLm5hbWUsXHJcbiAgICAgICAgZm9ybXM6IFtdLFxyXG4gICAgICAgIGtleTogdGhpcy5jYXRlZ29yaWVzW2ldLmtleSxcclxuICAgICAgICBsb2NhdGlvbjoge1xyXG4gICAgICAgICAgczBJbmRleDogaSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGxldmVsOiAwLFxyXG4gICAgICB9XHJcblxyXG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMuY2F0ZWdvcmllc1tpXS5mb3Jtcy5sZW5ndGg7IGorKykge1xyXG4gICAgICAgIGNvbnN0IHMxRm9ybXMgPSB0aGlzLmNhdGVnb3JpZXNbaV0uZm9ybXNbal07XHJcbiAgICAgICAgY29uc3QgczFMb2NhdGlvbiA9IHtcclxuICAgICAgICAgIGxldmVsOiAxLFxyXG4gICAgICAgICAgbG9jYXRpb246IHtcclxuICAgICAgICAgICAgczBJbmRleDogaSxcclxuICAgICAgICAgICAgczFJbmRleDogaixcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBrZXk6IHMxRm9ybXMua2V5LFxyXG4gICAgICAgICAgZGVmYXVsdFZhbHVlOiBzMUZvcm1zLmRlZmF1bHRWYWx1ZSxcclxuICAgICAgICAgIGxhYmVsOiBzMUZvcm1zLmxhYmVsLFxyXG4gICAgICAgICAgZm9ybXM6IFtdXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGVnb3J5LmZvcm1zLnB1c2goczFMb2NhdGlvbilcclxuICAgICAgICBpZiAoczFGb3Jtcy5mb3Jtcykge1xyXG4gICAgICAgICAgZm9yIChsZXQgayA9IDA7IGsgPCBzMUZvcm1zLmZvcm1zLmxlbmd0aDsgaysrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHMyRm9ybXMgPSBzMUZvcm1zLmZvcm1zW2tdXHJcbiAgICAgICAgICAgIGNvbnN0IHMyTG9jYXRpb24gPSB7XHJcbiAgICAgICAgICAgICAgbGV2ZWw6IDIsXHJcbiAgICAgICAgICAgICAgbG9jYXRpb246IHtcclxuICAgICAgICAgICAgICAgIHMwSW5kZXg6IGksXHJcbiAgICAgICAgICAgICAgICBzMUluZGV4OiBqLFxyXG4gICAgICAgICAgICAgICAgczJJbmRleDogayxcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZTogczJGb3Jtcy5kZWZhdWx0VmFsdWUsXHJcbiAgICAgICAgICAgICAgbGFiZWw6IHMyRm9ybXMubGFiZWwsXHJcbiAgICAgICAgICAgICAga2V5OiBzMkZvcm1zLmtleSxcclxuICAgICAgICAgICAgICBmb3JtczogW11cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzMUxvY2F0aW9uLmZvcm1zLnB1c2goczJMb2NhdGlvbilcclxuICAgICAgICAgICAgaWYgKHMyRm9ybXMuZm9ybXMpIHtcclxuICAgICAgICAgICAgICBmb3IgKGxldCBsID0gMDsgbCA8IHMyRm9ybXMuZm9ybXMubGVuZ3RoOyBsKyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHMzRm9ybXMgPSBzMkZvcm1zLmZvcm1zW2xdXHJcbiAgICAgICAgICAgICAgICBjb25zdCBzM0xvY2F0aW9uID0ge1xyXG4gICAgICAgICAgICAgICAgICBsZXZlbDogMyxcclxuICAgICAgICAgICAgICAgICAgbG9jYXRpb246IHtcclxuICAgICAgICAgICAgICAgICAgICBzMEluZGV4OiBpLFxyXG4gICAgICAgICAgICAgICAgICAgIHMxSW5kZXg6IGosXHJcbiAgICAgICAgICAgICAgICAgICAgczJJbmRleDogayxcclxuICAgICAgICAgICAgICAgICAgICBzM0luZGV4OiBsLFxyXG4gICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU6IHMzRm9ybXMuZGVmYXVsdFZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICBrZXk6IHMzRm9ybXMua2V5LFxyXG4gICAgICAgICAgICAgICAgICBsYWJlbDogczNGb3Jtcy5sYWJlbCxcclxuICAgICAgICAgICAgICAgICAgZm9ybXM6IFtdXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBzMkxvY2F0aW9uLmZvcm1zLnB1c2goczNMb2NhdGlvbilcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoczNMb2NhdGlvbi5mb3Jtcykge1xyXG4gICAgICAgICAgICAgICAgICBmb3IgKGxldCBtID0gMDsgbSA8IHMzTG9jYXRpb24uZm9ybXMubGVuZ3RoOyBtKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzNExvY2F0aW9uID0gczNMb2NhdGlvbi5mb3Jtc1ttXVxyXG4gICAgICAgICAgICAgICAgICAgIHMzTG9jYXRpb24uZm9ybXMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICBsZXZlbDogNCxcclxuICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHMwSW5kZXg6IGksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHMxSW5kZXg6IGosXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHMySW5kZXg6IGssXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHMzSW5kZXg6IGwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHM0SW5kZXg6IG0sXHJcbiAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlOiBzNExvY2F0aW9uLmRlZmF1bHRWYWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgIGtleTogczRMb2NhdGlvbi5rZXksXHJcbiAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogczRMb2NhdGlvbi5sYWJlbFxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgY29uZGl0aW9uc0xpc3QucHVzaChjYXRlZ29yeSlcclxuICAgIH1cclxuICAgIHRoaXMuY29uZGl0aW9uRGF0YS5hbGwgPSBjb25kaXRpb25zTGlzdDtcclxuXHJcbiAgfVxyXG5cclxuICBvblNlbGVjdENvbmRpdGlvbihsZXZlbCwgc3ViTGV2ZWwsIHZhbHVlKSB7XHJcbiAgICBjb25zdCBjb25kaXRpb24gPSB0aGlzLmNvbmRpdGlvbkRhdGFbbGV2ZWxdLmZpbmQoKGRhdGEpID0+IGRhdGEua2V5ID09PSB2YWx1ZSk7XHJcbiAgICBpZiAobGV2ZWwgPT09IFwiYWxsXCIpIHtcclxuICAgICAgdGhpcy5jb25kaXRpb25EYXRhID0ge1xyXG4gICAgICAgIC4uLnRoaXMuY29uZGl0aW9uRGF0YSxcclxuICAgICAgICBzMTogW10sXHJcbiAgICAgICAgczI6IFtdLFxyXG4gICAgICAgIHMzOiBbXSxcclxuICAgICAgICBkZWZhdWx0VmFsdWU6IFtdXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHRoaXMuY3VycmVudEVkaXRCbG9jay5jb25kaXRpb24gPSBjb25kaXRpb25cclxuICAgIHRoaXMub25HZXREZWZhdWx0VmFsdWUoKVxyXG4gICAgaWYgKGNvbmRpdGlvbi5mb3Jtcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIHRoaXMuY29uZGl0aW9uRGF0YVtzdWJMZXZlbF0gPSBjb25kaXRpb24uZm9ybXM7XHJcbiAgICB9XHJcbiAgfVxyXG4gIG9uR2V0RGVmYXVsdFZhbHVlKCkge1xyXG4gICAgaWYgKHRoaXMuY3VycmVudEVkaXRCbG9jay5pc0NvbmRpdGlvbmFsICYmIHRoaXMuY3VycmVudEVkaXRCbG9jaz8uY29uZGl0aW9uPy5sb2NhdGlvbikge1xyXG4gICAgICBjb25zdCB7IHMwSW5kZXgsIC4uLnJlc3QgfSA9IHRoaXMuY3VycmVudEVkaXRCbG9jay5jb25kaXRpb24ubG9jYXRpb25cclxuICAgICAgbGV0IGN1cnJlbnREYXRhID0gdGhpcy5jYXRlZ29yaWVzW3MwSW5kZXhdO1xyXG4gICAgICBmb3IgKGNvbnN0IGtleSBpbiByZXN0KSB7XHJcbiAgICAgICAgaWYgKGN1cnJlbnREYXRhLmZvcm1zW3Jlc3Rba2V5XV0pIHtcclxuICAgICAgICAgIGN1cnJlbnREYXRhID0gY3VycmVudERhdGEuZm9ybXNbcmVzdFtrZXldXVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gY3VycmVudERhdGEuZGVmYXVsdFZhbHVlIHx8IFtdXHJcbiAgICB9XHJcbiAgICByZXR1cm4gW11cclxuICB9XHJcblxyXG4gIG9uQWN0aXZlTWVudShjYXQsIGkpIHtcclxuICAgIHRoaXMuZWRpdEluZGV4ID0gaTtcclxuICAgIHRoaXMucGFyYW1zSW5kZXggPSBbaV07XHJcbiAgICB0aGlzLmlzU2VjdGlvbiA9IHRydWU7XHJcbiAgICB0aGlzLmlzQmxvY2sgPSBmYWxzZTtcclxuICAgIHRoaXMuY3VycmVudEVkaXRCbG9jayA9IGNhdDtcclxuICB9XHJcblxyXG4gIGNhdE5hbWVTdGFydChzdHI6IHN0cmluZykge1xyXG4gICAgY29uc3Qgdm93ZWxzID0gWydhJywgJ2UnLCAnaScsICdvJywgJ3UnLCAneSddO1xyXG4gICAgcmV0dXJuIHZvd2Vscy5pbmNsdWRlcyhzdHIuc3Vic3RyKDAsIDEpLnRvTG9jYWxlTG93ZXJDYXNlKCkpXHJcbiAgfVxyXG5cclxuICBvbkVkaXRCbG9jayhibG9jaywgLi4ucGFyYW1zKSB7XHJcbiAgICB0aGlzLmlzQmxvY2sgPSB0cnVlO1xyXG4gICAgdGhpcy5jdXJyZW50RWRpdEJsb2NrID0gYmxvY2s7XHJcbiAgICBjb25zdCB7IGNvbmRpdGlvbiB9ID0gdGhpcy5jdXJyZW50RWRpdEJsb2NrXHJcbiAgICBpZiAoY29uZGl0aW9uICYmIGNvbmRpdGlvbi5sb2NhdGlvbikge1xyXG4gICAgICBjb25zdCBsb2NhdGlvbiA9IGNvbmRpdGlvbi5sb2NhdGlvbjtcclxuICAgICAgaWYgKGxvY2F0aW9uPy5zMEluZGV4ID49IDApIHtcclxuICAgICAgICB0aGlzLmFsbCA9IHRoaXMuY2F0ZWdvcmllc1tsb2NhdGlvbi5zMEluZGV4XS5rZXlcclxuICAgICAgfVxyXG4gICAgICBpZiAobG9jYXRpb24/LnMxSW5kZXggPj0gMCkge1xyXG4gICAgICAgIHRoaXMuczEgPSB0aGlzLmNhdGVnb3JpZXNbbG9jYXRpb24uczBJbmRleF0uZm9ybXNbbG9jYXRpb24uczFJbmRleF0ua2V5O1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChsb2NhdGlvbj8uczJJbmRleCA+PSAwKSB7XHJcbiAgICAgICAgdGhpcy5zMiA9IHRoaXMuY2F0ZWdvcmllc1tsb2NhdGlvbi5zMEluZGV4XS5mb3Jtc1tsb2NhdGlvbi5zMUluZGV4XS5mb3Jtc1tsb2NhdGlvbi5zMkluZGV4XS5rZXk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGxvY2F0aW9uPy5zM0luZGV4ID49IDApIHtcclxuICAgICAgICB0aGlzLnMzID0gdGhpcy5jYXRlZ29yaWVzW2xvY2F0aW9uLnMwSW5kZXhdLmZvcm1zW2xvY2F0aW9uLnMxSW5kZXhdLmZvcm1zW2xvY2F0aW9uLnMySW5kZXhdLmZvcm1zW2xvY2F0aW9uLnMzSW5kZXhdLmtleTtcclxuICAgICAgfVxyXG4gICAgICBpZiAobG9jYXRpb24/LnM0SW5kZXggPj0gMCkge1xyXG4gICAgICAgIHRoaXMuczQgPSB0aGlzLmNhdGVnb3JpZXNbbG9jYXRpb24uczBJbmRleF0uZm9ybXNbbG9jYXRpb24uczFJbmRleF0uZm9ybXNbbG9jYXRpb24uczJJbmRleF0uZm9ybXNbbG9jYXRpb24uczNJbmRleF0uZm9ybXNbbG9jYXRpb24uczRJbmRleF0ua2V5O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB0aGlzLmlzU2VjdGlvbiA9IGZhbHNlO1xyXG4gICAgdGhpcy5wYXJhbXNJbmRleCA9IHBhcmFtcztcclxuICAgIHRoaXMuZ2V0Q29uZGl0aW9uVmFsdWVzKClcclxuICB9XHJcblxyXG4gIG9uUmVtb3ZlYmxvY2soZXZlbnQsIGJsb2NrKSB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIH1cclxuXHJcbiAgb25SZW1vdmVGaWVsZEJsb2NrKGV2ZW50KSB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3QgbGVuZ3RoID0gdGhpcy5wYXJhbXNJbmRleC5sZW5ndGg7XHJcbiAgICB0aGlzLmNhbkV4aXQgPSBmYWxzZTtcclxuICAgIGNvbnN0IGZvcm1zID0gbGVuZ3RoID09PSAxID8gdGhpcy5jYXRlZ29yaWVzIDogbGVuZ3RoID09PSAyID8gdGhpcy5jYXRlZ29yaWVzW3RoaXMucGFyYW1zSW5kZXhbMF1dLmZvcm1zIDogbGVuZ3RoID09PSAzID8gdGhpcy5jYXRlZ29yaWVzW3RoaXMucGFyYW1zSW5kZXhbMF1dLmZvcm1zW3RoaXMucGFyYW1zSW5kZXhbMV1dLmZvcm1zIDogdGhpcy5jYXRlZ29yaWVzW3RoaXMucGFyYW1zSW5kZXhbMF1dLmZvcm1zW3RoaXMucGFyYW1zSW5kZXhbMV1dLmZvcm1zW3RoaXMucGFyYW1zSW5kZXhbMl1dLmZvcm1zO1xyXG5cclxuICAgIHRoaXMuY3VycmVudEVkaXRCbG9jayA9IG51bGw7XHJcbiAgICB0aGlzLmlzQmxvY2sgPSBmYWxzZTtcclxuICAgIHRoaXMuaXNTZWN0aW9uID0gZmFsc2U7XHJcbiAgICB0aGlzLm9uSGlzdG9yaWNzKHtcclxuICAgICAgZm9ybTogZm9ybXMuc3BsaWNlKHRoaXMucGFyYW1zSW5kZXhbbGVuZ3RoIC0gMV0sIDEpWzBdLFxyXG4gICAgICBtZXRob2Q6ICdzcGxpY2UnLFxyXG4gICAgICBsb2NhdGlvbjogbGVuZ3RoID09PSAxID8gJ2NhdGVnb3J5JyA6ICdmb3JtcycsXHJcbiAgICAgIHBhcmFtczogdGhpcy5wYXJhbXNJbmRleFxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIG9uRHVwbGljYXRlZEJsb2NrKGV2ZW50KSB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3QgbGVuZ3RoID0gdGhpcy5wYXJhbXNJbmRleC5sZW5ndGg7XHJcbiAgICB0aGlzLmNhbkV4aXQgPSBmYWxzZTtcclxuICAgIGNvbnN0IGZvcm1zID0gbGVuZ3RoID09PSAxID8gdGhpcy5jYXRlZ29yaWVzIDogbGVuZ3RoID09PSAyID8gdGhpcy5jYXRlZ29yaWVzW3RoaXMucGFyYW1zSW5kZXhbMF1dLmZvcm1zIDogbGVuZ3RoID09PSAzID8gdGhpcy5jYXRlZ29yaWVzW3RoaXMucGFyYW1zSW5kZXhbMF1dLmZvcm1zW3RoaXMucGFyYW1zSW5kZXhbMV1dLmZvcm1zIDogdGhpcy5jYXRlZ29yaWVzW3RoaXMucGFyYW1zSW5kZXhbMF1dLmZvcm1zW3RoaXMucGFyYW1zSW5kZXhbMV1dLmZvcm1zW3RoaXMucGFyYW1zSW5kZXhbMl1dLmZvcm1zO1xyXG4gICAgY29uc3QgY2xvbmVFZGl0YWJsZSA9IHRoaXMub25FZGl0YWJsZUJsb2NrKHsgLi4udGhpcy5jdXJyZW50RWRpdEJsb2NrLCBuYW1lOiB0aGlzLmN1cnJlbnRFZGl0QmxvY2submFtZSArICcgLSBjb3BpZScgfSlcclxuICAgIGNvbnN0IGNsb25lQmxvY2sgPSBKU09OLnN0cmluZ2lmeShjbG9uZUVkaXRhYmxlKTtcclxuXHJcblxyXG4gICAgZm9ybXMucHVzaChKU09OLnBhcnNlKGNsb25lQmxvY2spKTtcclxuICAgIHRoaXMuY3VycmVudEVkaXRCbG9jayA9IGZvcm1zLmF0KC0xKTtcclxuICAgIGNvbnN0IHBhcmFtczogbnVtYmVyW10gPSBbLi4udGhpcy5wYXJhbXNJbmRleF1cclxuICAgIHBhcmFtcy5wb3AoKTtcclxuICAgIHBhcmFtcy5wdXNoKGZvcm1zLmxlbmd0aCAtIDEpO1xyXG4gICAgdGhpcy5vbkhpc3Rvcmljcyh7XHJcbiAgICAgIGZvcm06IEpTT04ucGFyc2UoY2xvbmVCbG9jayksXHJcbiAgICAgIG1ldGhvZDogJ3B1c2gnLFxyXG4gICAgICBsb2NhdGlvbjogJ2Zvcm1zJyxcclxuICAgICAgcGFyYW1zXHJcbiAgICB9KVxyXG4gICAgLy8gdGhpcy5lZGl0SW5kZXggPSBmb3Jtcy5sZW5ndGggLSAxO1xyXG4gIH1cclxuXHJcbiAgb25FZGl0YWJsZUJsb2NrKG5vdEVkaXRhYmxlQmxvY2s6IGFueSkge1xyXG4gICAgY29uc3QgZWRpdGFibGVGb3JtQmxvY2sgPSBub3RFZGl0YWJsZUJsb2NrLmZvcm1zID8gbm90RWRpdGFibGVCbG9jay5mb3Jtc1xyXG4gICAgICAubWFwKChjYXQpID0+IHtcclxuICAgICAgICBpZiAoY2F0LmZvcm1zKSB7XHJcbiAgICAgICAgICBjb25zdCBmID0gY2F0LmZvcm1zXHJcbiAgICAgICAgICAgIC5tYXAoKHN1YikgPT4ge1xyXG4gICAgICAgICAgICAgIGlmIChzdWIuZm9ybXMpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHMgPSBzdWIuZm9ybXMubWFwKChjaGlsZCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBpZiAoY2hpbGQuZm9ybXMpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgLi4uY2hpbGQsXHJcbiAgICAgICAgICAgICAgICAgICAgICBlZGl0YWJsZTogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC4uLmNoaWxkLCBlZGl0YWJsZTogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAuLi5zdWIsXHJcbiAgICAgICAgICAgICAgICAgIGVkaXRhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICBmb3Jtczogc1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICByZXR1cm4geyAuLi5zdWIsIGVkaXRhYmxlOiB0cnVlIH07XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAuLi5jYXQsXHJcbiAgICAgICAgICAgIGVkaXRhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICBmb3JtczogZlxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4geyAuLi5jYXQsIGVkaXRhYmxlOiB0cnVlIH1cclxuICAgICAgfSkgOiBudWxsO1xyXG4gICAgcmV0dXJuIGVkaXRhYmxlRm9ybUJsb2NrID8geyAuLi5ub3RFZGl0YWJsZUJsb2NrLCBlZGl0YWJsZTogdHJ1ZSwgZm9ybXM6IGVkaXRhYmxlRm9ybUJsb2NrIH0gOiBub3RFZGl0YWJsZUJsb2NrO1xyXG4gIH1cclxuXHJcbiAgb25LZXlVcENoaXAoZXZlbnQsIGZpZWxkKSB7XHJcbiAgICB0aGlzLmNhbkV4aXQgPSBmYWxzZTtcclxuICAgIGlmIChldmVudC5rZXkgPT09IFwiO1wiKSB7XHJcbiAgICAgIGNvbnN0IGV4aXN0ID0gZmllbGQuZGVmYXVsdFZhbHVlLmZpbmQoKG9wdCkgPT4gb3B0LnZhbHVlLnRvTG9jYWxlTG93ZXJDYXNlKCkgPT09IGV2ZW50LnRhcmdldC52YWx1ZS5zcGxpdChcIjtcIilbMF0udG9Mb2NhbGVMb3dlckNhc2UoKSk7XHJcbiAgICAgIGlmICghZXhpc3QpIHtcclxuICAgICAgICBmaWVsZC5kZWZhdWx0VmFsdWUucHVzaCh7XHJcbiAgICAgICAgICB2YWx1ZTogZXZlbnQudGFyZ2V0LnZhbHVlLnNwbGl0KFwiO1wiKVswXS5zbGljZSgwLCAyMCksXHJcbiAgICAgICAgICBjaGVja2VkOiBmYWxzZVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGV2ZW50LnRhcmdldC52YWx1ZSA9IFwiXCI7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZXZlbnQudGFyZ2V0LnZhbHVlID0gXCJcIjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gdGhpcy5nZXRDb25kaXRpb25WYWx1ZXMoKVxyXG4gIH1cclxuXHJcbiAgb25FZGl0Q2hpcChjaGlwKSB7XHJcbiAgICBpZiAoY2hpcC52YWx1ZSA9PT0gdGhpcy5jdXJyZW50Q2hpcCkge1xyXG4gICAgICB0aGlzLmN1cnJlbnRDaGlwID0gXCJcIlxyXG4gICAgICB0aGlzLnByZXZWYWx1ZSA9IFwiXCJcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuY3VycmVudENoaXAgPSBjaGlwLnZhbHVlO1xyXG4gICAgICB0aGlzLnByZXZWYWx1ZSA9IGNoaXAudmFsdWVcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGFkZEtleXdvcmRGcm9tSW5wdXRCbG9jayhldmVudDogTWF0Q2hpcElucHV0RXZlbnQsIGZpZWxkLCBwcmV2KSB7XHJcbiAgICB0aGlzLmNhbkV4aXQgPSBmYWxzZTtcclxuICAgIGNvbnN0IGlucHV0ID0gZXZlbnQuaW5wdXQ7XHJcbiAgICBjb25zdCB2YWx1ZSA9IGV2ZW50LnZhbHVlO1xyXG4gICAgaWYgKHZhbHVlKSB7XHJcbiAgICAgIGNvbnN0IHByZXZJbmRleCA9IGZpZWxkLmRlZmF1bHRWYWx1ZT8uZmluZEluZGV4KChvcHQpID0+IG9wdC52YWx1ZS50b0xvY2FsZUxvd2VyQ2FzZSgpID09PSBwcmV2LnRvTG9jYWxlTG93ZXJDYXNlKCkpO1xyXG4gICAgICBpZiAocHJldkluZGV4ICE9PSAtMSkge1xyXG4gICAgICAgIGZpZWxkLmRlZmF1bHRWYWx1ZVtwcmV2SW5kZXhdLnZhbHVlID0gdmFsdWUudHJpbSgpO1xyXG4gICAgICAgIGlucHV0LnZhbHVlID0gXCJcIjtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zdCBleGlzdCA9IGZpZWxkLmRlZmF1bHRWYWx1ZS5maW5kKChvcHQpID0+IG9wdC52YWx1ZS50b0xvY2FsZUxvd2VyQ2FzZSgpID09PSBldmVudC52YWx1ZS50b0xvY2FsZUxvd2VyQ2FzZSgpKTtcclxuICAgICAgICBpZiAoIWV4aXN0KSB7XHJcbiAgICAgICAgICBmaWVsZC5kZWZhdWx0VmFsdWUucHVzaCh7IHZhbHVlOiB2YWx1ZS50cmltKCkuc2xpY2UoMCwgMTUpLCBjaGVja2VkOiBmYWxzZSB9KTtcclxuICAgICAgICAgIGlucHV0LnZhbHVlID0gXCJcIjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgaW5wdXQudmFsdWUgPSBcIlwiO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgIH1cclxuICAgIC8vIHRoaXMuZ2V0Q29uZGl0aW9uVmFsdWVzKClcclxuICB9XHJcblxyXG4gIG9uQ2hlY2tlZENoaXBCbG9jayhldmVudDogYW55LCBmaWVsZCkge1xyXG4gICAgdGhpcy5jYW5FeGl0ID0gZmFsc2U7XHJcbiAgICBjb25zdCBpbmRleCA9IGZpZWxkLmRlZmF1bHRWYWx1ZS5maW5kSW5kZXgoKGNoaXApID0+IGNoaXAudmFsdWUgPT09IGV2ZW50LnZhbHVlKVxyXG4gICAgaWYgKGluZGV4ICE9PSAtMSAmJiBmaWVsZC50eXBlID09PSAnY2hlY2tib3hfbXVsdGlwbGUnKSB7XHJcbiAgICAgIGZpZWxkLmRlZmF1bHRWYWx1ZVtpbmRleF0uY2hlY2tlZCA9ICFldmVudC5jaGVja2VkXHJcbiAgICB9IGVsc2UgaWYgKGluZGV4ICE9PSAtMSkge1xyXG4gICAgICBmaWVsZC5kZWZhdWx0VmFsdWUuZm9yRWFjaCgodmFsdWUpID0+IHtcclxuICAgICAgICB2YWx1ZS5jaGVja2VkID0gZmFsc2U7XHJcbiAgICAgIH0pXHJcbiAgICAgIGZpZWxkLmRlZmF1bHRWYWx1ZVtpbmRleF0uY2hlY2tlZCA9ICFldmVudC5jaGVja2VkXHJcbiAgICB9XHJcbiAgICAvLyB0aGlzLmdldENvbmRpdGlvblZhbHVlcygpXHJcbiAgfVxyXG5cclxuICByZW1vdmVLZXl3b3JkQmxvY2soa2V5d29yZDogYW55LCBmaWVsZCkge1xyXG4gICAgdGhpcy5jYW5FeGl0ID0gZmFsc2U7XHJcbiAgICBmaWVsZC5kZWZhdWx0VmFsdWUgPSBmaWVsZC5kZWZhdWx0VmFsdWUuZmlsdGVyKChvcHRpb24pID0+IG9wdGlvbi52YWx1ZSAhPT0ga2V5d29yZC52YWx1ZSk7XHJcbiAgICAvLyB0aGlzLmdldENvbmRpdGlvblZhbHVlcygpXHJcbiAgfVxyXG5cclxuICBvbkNoYW5nZVR5cGVCbG9jayhmaWVsZCkge1xyXG4gICAgdGhpcy5jYW5FeGl0ID0gZmFsc2U7XHJcbiAgICBpZiAoZmllbGQudHlwZSA9PT0gXCJzZWxlY3RcIiB8fCBmaWVsZC50eXBlID09PSBcInJhZGlvXCIgfHwgZmllbGQudHlwZSA9PT0gXCJjaGVja2JveF9tdWx0aXBsZVwiKSB7XHJcbiAgICAgIGZpZWxkLmRlZmF1bHRWYWx1ZSA9IFtdO1xyXG4gICAgfSBlbHNlIGlmIChmaWVsZC50eXBlID09PSBcImNoZWNrYm94XCIgfHwgZmllbGQudHlwZSA9PT0gXCJ0b2dnbGVcIikge1xyXG4gICAgICBmaWVsZC5kZWZhdWx0VmFsdWUgPSB0cnVlO1xyXG4gICAgICBmaWVsZC52YWx1ZSA9IGZhbHNlO1xyXG4gICAgfSBlbHNlIGlmIChmaWVsZC50eXBlID09PSAnbm9uZScpIHtcclxuICAgICAgZmllbGQuZGVmYXVsdFZhbHVlID0gXCJcIjtcclxuICAgICAgZmllbGQudmFsdWUgPSBcIlwiO1xyXG4gICAgICBmaWVsZC5sYWJlbCA9IFwiQXVjdW5cIjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGZpZWxkLmRlZmF1bHRWYWx1ZSA9IFwiXCI7XHJcbiAgICAgIGZpZWxkLnZhbHVlID0gXCJcIjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uQWRkTmV3U3ViTGV2ZWxGaWVsZEJsb2NrKGV2ZW50KSB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgdGhpcy5jYW5FeGl0ID0gZmFsc2U7XHJcbiAgICBjb25zdCBsZW5ndGggPSB0aGlzLnBhcmFtc0luZGV4Lmxlbmd0aDtcclxuICAgIGNvbnN0IGZvcm1zID0gbGVuZ3RoID09PSAxID8gdGhpcy5jYXRlZ29yaWVzW3RoaXMucGFyYW1zSW5kZXhbMF1dIDogbGVuZ3RoID09PSAyID8gdGhpcy5jYXRlZ29yaWVzW3RoaXMucGFyYW1zSW5kZXhbMF1dLmZvcm1zW3RoaXMucGFyYW1zSW5kZXhbbGVuZ3RoIC0gMV1dIDogbGVuZ3RoID09PSAzID8gdGhpcy5jYXRlZ29yaWVzW3RoaXMucGFyYW1zSW5kZXhbMF1dLmZvcm1zW3RoaXMucGFyYW1zSW5kZXhbMV1dLmZvcm1zW3RoaXMucGFyYW1zSW5kZXhbbGVuZ3RoIC0gMV1dIDogdGhpcy5jYXRlZ29yaWVzW3RoaXMucGFyYW1zSW5kZXhbMF1dLmZvcm1zW3RoaXMucGFyYW1zSW5kZXhbMV1dLmZvcm1zW3RoaXMucGFyYW1zSW5kZXhbMl1dLmZvcm1zW3RoaXMucGFyYW1zSW5kZXhbbGVuZ3RoIC0gMV1dO1xyXG4gICAgZm9ybXMuZXhwYW5kTW9yZSA9IHRydWU7XHJcbiAgICBmb3Jtcy5mb3JtcyA9IGZvcm1zLmZvcm1zIHx8IFtdXHJcbiAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICBsYWJlbDogXCJOb3V2ZWxsZSBzb3VzIGNhdMOpZ29yaWUgw6AgcmVub21tZXJcIixcclxuICAgICAga2V5OiBcIk5vdXZlbGxlc291c2NhdMOpZ29yaWXDoHJlbm9tbWVyXCIsXHJcbiAgICAgIGV4cGFuZE9uYm9hcmRpbmc6IHRydWUsXHJcbiAgICAgIGRlZmF1bHRWYWx1ZTogbnVsbCxcclxuICAgICAgdmFsdWU6IHRydWUsXHJcbiAgICAgIHNpemU6IDgwLFxyXG4gICAgICBpc01hbmRhdG9yeTogZmFsc2UsXHJcbiAgICAgIG90aGVyVmFsdWU6ICcnLFxyXG4gICAgICB0eXBlOiBcInRleHRcIixcclxuICAgICAgZWRpdGFibGU6IHRydWUsXHJcbiAgICAgIGlzQ29uZGl0aW9uYWw6IGZhbHNlLFxyXG4gICAgICBjb25kaXRpb25WYWx1ZTogXCJcIixcclxuICAgICAgY29uZGl0aW9uOiB7fSxcclxuICAgICAgZGVsZXRlYWJsZTogdHJ1ZSxcclxuICAgICAgc3ViTGV2ZWw6IDEsXHJcbiAgICAgIGV4cGFuZE1vcmU6IGZhbHNlLFxyXG4gICAgfVxyXG4gICAgZm9ybXMuZm9ybXMucHVzaChkYXRhXHJcbiAgICApXHJcbiAgICB0aGlzLm9uSGlzdG9yaWNzKHtcclxuICAgICAgZm9ybTogZGF0YSxcclxuICAgICAgbWV0aG9kOiAncHVzaCcsXHJcbiAgICAgIGxvY2F0aW9uOiAnZm9ybXMnLFxyXG4gICAgICBwYXJhbXM6IHRoaXMucGFyYW1zSW5kZXhcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuXHJcbiAgb25PcGVuVHlwZURpYWxvZyhmaWVsZCkge1xyXG4gICAgY29uc3QgZGlhbG9nUmVmID0gdGhpcy5kaWFsb2cub3BlbihUeXBlQ29tcG9uZW50LCB7XHJcbiAgICAgIGRhdGE6IHsgc2VsZWN0ZWRUeXBlOiBmaWVsZC50eXBlIH1cclxuICAgIH0pO1xyXG4gICAgZGlhbG9nUmVmLmFmdGVyQ2xvc2VkKCkuc3Vic2NyaWJlKCh0eXBlOiBhbnkpID0+IHtcclxuICAgICAgaWYgKHR5cGUpIHtcclxuICAgICAgICBmaWVsZC50eXBlID0gdHlwZTtcclxuICAgICAgICB0aGlzLm9uQ2hhbmdlVHlwZUJsb2NrKGZpZWxkKVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGZpZWxkV2lkdGgodHlwZTogc3RyaW5nLCBsZW5ndGg6IG51bWJlciwgaW5kZXg6IG51bWJlcikge1xyXG4gICAgaWYgKHR5cGUgPT09ICd0b2dnbGUnKSB7XHJcbiAgICAgIHJldHVybiAnNTAlJ1xyXG4gICAgfSBlbHNlIGlmICh0eXBlID09PSBcInRleHRcIiB8fCB0eXBlID09PSBcImRhdGVcIiB8fCB0eXBlID09PSBcIm5vbmVcIiB8fCB0eXBlID09ICdzZWxlY3QnIHx8IHR5cGUgPT09ICd0ZWwnIHx8IHR5cGUgPT09ICdlbWFpbCcgfHwgdHlwZSA9PT0gJ3Bhc3N3b3JkJyB8fCB0eXBlID09PSAndGV4dGFyZWEnKSB7XHJcbiAgICAgIGlmIChsZW5ndGggPCAzKSB7XHJcbiAgICAgICAgcmV0dXJuICc1MCUnXHJcbiAgICAgIH0gZWxzZSBpZiAobGVuZ3RoID09PSAzKSB7XHJcbiAgICAgICAgcmV0dXJuICczMyUnXHJcbiAgICAgIH0gZWxzZSBpZiAobGVuZ3RoID09PSA0KSB7XHJcbiAgICAgICAgcmV0dXJuICc1MCUnXHJcbiAgICAgIH0gZWxzZSBpZiAobGVuZ3RoID09PSA1KSB7XHJcbiAgICAgICAgcmV0dXJuIGluZGV4IDw9IDIgPyAnMzMlJyA6ICc1MCUnXHJcbiAgICAgIH0gZWxzZSBpZiAobGVuZ3RoID49IDYpIHtcclxuICAgICAgICByZXR1cm4gJzMzJSdcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuICcxMDAlJ1xyXG4gIH1cclxuXHJcbiAgb25DYW5jZWwobGVmdDogYm9vbGVhbikge1xyXG4gICAgaWYgKGxlZnQpIHtcclxuICAgICAgY29uc3QgY3VycmVudCA9IHRoaXMuY3VycmVudENhbmNlbGVkSW5kZXggPT09IG51bGwgPyB0aGlzLmhpc3Rvcmljcy5sZW5ndGggLSAxIDogdGhpcy5jdXJyZW50Q2FuY2VsZWRJbmRleFxyXG4gICAgICBpZiAodGhpcy5oaXN0b3JpY3MubGVuZ3RoID4gMCAmJiBjdXJyZW50ID49IDApIHtcclxuICAgICAgICB0aGlzLmN1cnJlbnRDYW5jZWxlZEluZGV4ID0gY3VycmVudCAtIDE7XHJcbiAgICAgICAgY29uc3QgbGFzdEFjdGlvbiA9IHRoaXMuaGlzdG9yaWNzW2N1cnJlbnRdXHJcbiAgICAgICAgY29uc3QgcGFyYW1zID0gbGFzdEFjdGlvbi5wYXJhbXM7XHJcbiAgICAgICAgY29uc3QgbGVuZ3RoID0gcGFyYW1zLmxlbmd0aDtcclxuICAgICAgICBjb25zdCBmb3JtcyA9IGxlbmd0aCA9PT0gMSA/IHRoaXMuY2F0ZWdvcmllcyA6IGxlbmd0aCA9PT0gMiA/IHRoaXMuY2F0ZWdvcmllc1twYXJhbXNbMF1dLmZvcm1zW3BhcmFtc1sxXV0uZm9ybXMgOiB0aGlzLmNhdGVnb3JpZXNbcGFyYW1zWzBdXS5mb3Jtc1twYXJhbXNbMV1dLmZvcm1zW3BhcmFtc1syXV0uZm9ybXM7XHJcbiAgICAgICAgaWYgKGxhc3RBY3Rpb24ubWV0aG9kID09PSBcInNwbGljZVwiKSB7XHJcbiAgICAgICAgICBpZiAobGVuZ3RoID09PSAxICYmIGxhc3RBY3Rpb24ubG9jYXRpb24gPT09ICdjYXRlZ29yeScpIHtcclxuICAgICAgICAgICAgZm9ybXMucHVzaChsYXN0QWN0aW9uLmZvcm0pXHJcbiAgICAgICAgICB9IGVsc2UgaWYgKGxlbmd0aCA9PT0gMSAmJiBsYXN0QWN0aW9uLmxvY2F0aW9uID09PSAnZm9ybXMnKSB7XHJcbiAgICAgICAgICAgIGZvcm1zW3BhcmFtc1swXV0uZm9ybXMucHVzaChsYXN0QWN0aW9uLmZvcm0pXHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBmb3Jtcy5wdXNoKGxhc3RBY3Rpb24uZm9ybSlcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmIChsYXN0QWN0aW9uLmxvY2F0aW9uID09PSAnY2F0ZWdvcnknKSB7XHJcbiAgICAgICAgICAgIHRoaXMub25BY3RpdmVNZW51KGZvcm1zW2Zvcm1zLmxlbmd0aCAtIDFdLCBmb3Jtcy5sZW5ndGggLSAxKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMub25FZGl0QmxvY2soZm9ybXNbZm9ybXMubGVuZ3RoIC0gMV0sIGxhc3RBY3Rpb24ucGFyYW1zKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBpZiAobGVuZ3RoID09PSAxICYmIGxhc3RBY3Rpb24ubG9jYXRpb24gPT09ICdjYXRlZ29yeScpIHtcclxuICAgICAgICAgICAgZm9ybXMuc3BsaWNlKHBhcmFtc1tsZW5ndGggLSAxXSwgMSlcclxuICAgICAgICAgIH0gZWxzZSBpZiAobGVuZ3RoID09PSAxICYmIGxhc3RBY3Rpb24ubG9jYXRpb24gPT09ICdmb3JtcycpIHtcclxuICAgICAgICAgICAgZm9ybXNbcGFyYW1zWzBdXS5mb3Jtcy5zcGxpY2UocGFyYW1zW2xlbmd0aCAtIDFdLCAxKVxyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZm9ybXMuc3BsaWNlKHBhcmFtc1tsZW5ndGggLSAxXSwgMSlcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICB0aGlzLmN1cnJlbnRFZGl0QmxvY2sgPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYgKHRoaXMuY3VycmVudENhbmNlbGVkSW5kZXggIT09IG51bGwgJiYgdGhpcy5oaXN0b3JpY3MubGVuZ3RoID4gdGhpcy5jdXJyZW50Q2FuY2VsZWRJbmRleCkge1xyXG4gICAgICAgIHRoaXMuY3VycmVudENhbmNlbGVkSW5kZXggKz0gMTtcclxuICAgICAgICBjb25zdCBsYXN0QWN0aW9uID0gdGhpcy5oaXN0b3JpY3NbdGhpcy5jdXJyZW50Q2FuY2VsZWRJbmRleF1cclxuICAgICAgICBjb25zdCBwYXJhbXMgPSBsYXN0QWN0aW9uLnBhcmFtcztcclxuICAgICAgICBjb25zdCBsZW5ndGggPSBwYXJhbXMubGVuZ3RoO1xyXG4gICAgICAgIGNvbnN0IGZvcm1zID0gbGVuZ3RoID09PSAxID8gdGhpcy5jYXRlZ29yaWVzIDogbGVuZ3RoID09PSAyID8gdGhpcy5jYXRlZ29yaWVzW3BhcmFtc1swXV0uZm9ybXNbcGFyYW1zWzFdXS5mb3JtcyA6IHRoaXMuY2F0ZWdvcmllc1twYXJhbXNbMF1dLmZvcm1zW3BhcmFtc1sxXV0uZm9ybXNbcGFyYW1zWzJdXS5mb3JtcztcclxuXHJcbiAgICAgICAgaWYgKGxhc3RBY3Rpb24ubWV0aG9kID09PSBcInB1c2hcIikge1xyXG4gICAgICAgICAgaWYgKGxlbmd0aCA9PT0gMSAmJiBsYXN0QWN0aW9uLmxvY2F0aW9uID09PSAnY2F0ZWdvcnknKSB7XHJcbiAgICAgICAgICAgIGZvcm1zLnB1c2gobGFzdEFjdGlvbi5mb3JtKVxyXG4gICAgICAgICAgfSBlbHNlIGlmIChsZW5ndGggPT09IDEgJiYgbGFzdEFjdGlvbi5sb2NhdGlvbiA9PT0gJ2Zvcm1zJykge1xyXG4gICAgICAgICAgICBmb3Jtc1twYXJhbXNbMF1dLmZvcm1zLnB1c2gobGFzdEFjdGlvbi5mb3JtKVxyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZm9ybXMucHVzaChsYXN0QWN0aW9uLmZvcm0pXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAobGFzdEFjdGlvbi5sb2NhdGlvbiA9PT0gJ2NhdGVnb3J5Jykge1xyXG4gICAgICAgICAgICB0aGlzLm9uQWN0aXZlTWVudShmb3Jtc1tmb3Jtcy5sZW5ndGggLSAxXSwgZm9ybXMubGVuZ3RoIC0gMSk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLm9uRWRpdEJsb2NrKGZvcm1zW2Zvcm1zLmxlbmd0aCAtIDFdLCBsYXN0QWN0aW9uLnBhcmFtcylcclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgaWYgKGxlbmd0aCA9PT0gMSAmJiBsYXN0QWN0aW9uLmxvY2F0aW9uID09PSAnY2F0ZWdvcnknKSB7XHJcbiAgICAgICAgICAgIGZvcm1zLnNwbGljZShwYXJhbXNbbGVuZ3RoIC0gMV0sIDEpXHJcbiAgICAgICAgICB9IGVsc2UgaWYgKGxlbmd0aCA9PT0gMSAmJiBsYXN0QWN0aW9uLmxvY2F0aW9uID09PSAnZm9ybXMnKSB7XHJcbiAgICAgICAgICAgIGZvcm1zW3BhcmFtc1swXV0uZm9ybXMuc3BsaWNlKHBhcmFtc1tsZW5ndGggLSAxXSwgMSlcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGZvcm1zLnNwbGljZShwYXJhbXNbbGVuZ3RoIC0gMV0sIDEpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB0aGlzLmN1cnJlbnRFZGl0QmxvY2sgPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25DaGVja1ZhbHVlKGV2ZW50OiBib29sZWFuKSB7XHJcbiAgICB0aGlzLmludmFsaWRlVmFsdWUgPSBldmVudDtcclxuICB9XHJcblxyXG4gIG9uSGlzdG9yaWNzKGRhdGEpIHtcclxuICAgIGlmICh0aGlzLmN1cnJlbnRDYW5jZWxlZEluZGV4ICE9PSBudWxsKSB7XHJcbiAgICAgIHRoaXMuaGlzdG9yaWNzID0gW107XHJcbiAgICAgIHRoaXMuY3VycmVudENhbmNlbGVkSW5kZXggPSBudWxsO1xyXG4gICAgfVxyXG4gICAgdGhpcy5oaXN0b3JpY3MucHVzaChkYXRhKVxyXG4gIH1cclxufVxyXG5cclxuXHJcbiIsIjxtYWluPlxyXG4gIDxkaXYgY2xhc3M9XCJoZWFkZXItY3JlYXRlLXByb2ZpbGVcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJoZWFkZXItY3JlYXRlLXByb2ZpbGUtdG9wXCI+XHJcbiAgICAgIDxoMz5cclxuICAgICAgICA8c3Bhbj57eyBmb3JtLmdldChcIk5hbWVcIikudmFsdWUgfX08L3NwYW4+XHJcbiAgICAgICAgPG1hdC1pY29uIChjbGljayk9XCJvcGVuRGlhbG9nKClcIj5lZGl0PC9tYXQtaWNvbj5cclxuICAgICAgPC9oMz5cclxuICAgICAgPGRpdiBjbGFzcz1cImNyZWF0ZS1wcm9maWxlLWFjdGlvblwiPlxyXG4gICAgICAgIDxidXR0b24gbWF0LWJ1dHRvbiBjbGFzcz1cInJlZ2lzdGVyLWJ1dHRvblwiIHR5cGU9XCJzdWJtaXRcIiAoY2xpY2spPVwib25TdWJtaXQoZmFsc2UpXCI+XHJcbiAgICAgICAgICA8bGliLWxvYWRpbmctcGFnZSAqbmdJZj1cImxvYWRpbmcgJiYgIWlzU3VibWl0dGVkXCI+PC9saWItbG9hZGluZy1wYWdlPnt7ZHJhZnRMYWJlbH19XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPGJ1dHRvbiBtYXQtYnV0dG9uIGNsYXNzPVwicmVnaXN0ZXItYnV0dG9uIGxpdmUtYnV0dG9uXCIgdHlwZT1cInN1Ym1pdFwiIChjbGljayk9XCJvblN1Ym1pdCh0cnVlKVwiPlxyXG4gICAgICAgICAgPGxpYi1sb2FkaW5nLXBhZ2UgKm5nSWY9XCJsb2FkaW5nICYmIGlzU3VibWl0dGVkXCI+PC9saWItbG9hZGluZy1wYWdlPlxyXG4gICAgICAgICAge3tsaXZlTGFiZWx9fVxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG5cclxuICAgICAgICA8YnV0dG9uIFtkaXNhYmxlZF09XCJjdXJyZW50Q2FuY2VsZWRJbmRleCA8IDAgfHwgaGlzdG9yaWNzLmxlbmd0aD09PTBcIiBtYXQtYnV0dG9uXHJcbiAgICAgICAgICBjbGFzcz1cInJlZ2lzdGVyLWJ1dHRvbiBsaXZlLWJ1dHRvbiBmb3J3YXJkXCIgdHlwZT1cInN1Ym1pdFwiIChjbGljayk9XCJvbkNhbmNlbCh0cnVlKVwiPlxyXG4gICAgICAgICAgPG1hdC1pY29uPnJvdGF0ZV9sZWZ0PC9tYXQtaWNvbj5cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uIFtkaXNhYmxlZF09XCJjdXJyZW50Q2FuY2VsZWRJbmRleD09PWhpc3Rvcmljcy5sZW5ndGgtMSB8fCBjdXJyZW50Q2FuY2VsZWRJbmRleD09PW51bGxcIiBtYXQtYnV0dG9uXHJcbiAgICAgICAgICBjbGFzcz1cInJlZ2lzdGVyLWJ1dHRvbiBsaXZlLWJ1dHRvbiBmb3J3YXJkXCIgdHlwZT1cInN1Ym1pdFwiIChjbGljayk9XCJvbkNhbmNlbChmYWxzZSlcIj5cclxuICAgICAgICAgIDxtYXQtaWNvbj5yb3RhdGVfcmlnaHQ8L21hdC1pY29uPlxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cImNyZWF0ZS1wcm9maWxlLW1lbnVzXCI+XHJcbiAgICAgIDx1bD5cclxuICAgICAgICA8bGkgY2xhc3M9XCJsaS10aXRsZVwiIFtjbGFzc109XCJlZGl0SW5kZXggPT09IGkgPyAnYWN0aXZlJyA6ICcnXCIgKm5nRm9yPVwibGV0IGNhdCBvZiBjYXRlZ29yaWVzOyBsZXQgaSA9IGluZGV4XCJcclxuICAgICAgICAgIChjbGljayk9XCJzY3JvbGxUbyhjYXQsIGkpXCIgW2lkXT1cImNhdC5uYW1lKyd4J1wiPlxyXG4gICAgICAgICAgPCEtLSAoY2xpY2spPVwib25BY3RpdmVNZW51KGNhdCwgaSx0cnVlKVwiIFtuZ3hTY3JvbGxUb109XCInIycgKyBjYXQubmFtZVwiIFtpZF09XCJjYXQubmFtZSsneCdcIj4gLS0+XHJcbiAgICAgICAgICB7eyBjYXQubmFtZSB9fVxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgICAgPGxpPlxyXG4gICAgICAgICAgPGJ1dHRvbiBtYXQtbWluaS1mYWIgY29sb3I9XCJ0cmFuc3BhcmVudFwiIChjbGljayk9XCJvbkFkZE5ld0NhdGVnb3J5KCRldmVudClcIj5cclxuICAgICAgICAgICAgPG1hdC1pY29uPmFkZDwvbWF0LWljb24+XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2xpPlxyXG4gICAgICA8L3VsPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbiAgPGZvcm0gW2Zvcm1Hcm91cF09XCJmb3JtXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY2F0ZWdvcnlcIiBjZGtEcm9wTGlzdEdyb3VwPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiZmllbGRzXCI+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgY2RrRHJvcExpc3RcclxuICAgICAgICAgIChjZGtEcm9wTGlzdERyb3BwZWQpPVwiZHJvcCgkZXZlbnQpXCJcclxuICAgICAgICAgIFtjZGtEcm9wTGlzdERhdGFdPVwiY2F0ZWdvcmllc1wiXHJcbiAgICAgICAgICBjbGFzcz1cImZpZWxkcy1pbm5lciBleGFtcGxlLWxpc3QgbXQtMTBcIiBpZD1cImNhdGVnb3JpZXMtaWRcIlxyXG4gICAgICAgICAgKHNjcm9sbCk9XCJvblNjcm9sbCgkZXZlbnQpXCI+XHJcbiAgICAgICAgICA8c2VjdGlvbiBjbGFzcz1cImNhdGVnb3J5LWl0ZW0gc2VjdGlvbi1pdGVtXCIgKm5nRm9yPVwibGV0IGNhdGVnb3J5IG9mIGNhdGVnb3JpZXM7IGxldCBpID0gaW5kZXhcIiBjZGtEcmFnXHJcbiAgICAgICAgICAgIFtpZF09XCJjYXRlZ29yeS5uYW1lXCIgW3N0eWxlLnBhZGRpbmdCb3R0b21dPVwiY2F0ZWdvcnkuZXhwYW5kTW9yZSA/ICc1MHB4JyA6ICcxMHB4J1wiXHJcbiAgICAgICAgICAgIFtjbGFzc109XCJlZGl0SW5kZXggPT09IGkgPyAnYWN0aXZlJyA6ICcnXCIgKGNsaWNrKT1cInNjcm9sbFRvKGNhdGVnb3J5LCBpKVwiPlxyXG4gICAgICAgICAgICA8IS0tIFtjbGFzc109XCJlZGl0SW5kZXggPT09IGkgPyAnYWN0aXZlJyA6ICcnXCIgW25neFNjcm9sbFRvXT1cIicjJyArIGNhdGVnb3J5Lm5hbWVcIj4gLS0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsZWZ0LWFjdGlvbiBtb3ZlLWljb25zXCIgY2RrRHJhZ0hhbmRsZT5cclxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwidHJhbnNwYXJlbnQtYnV0dG9uXCIgbWF0LXJhaXNlZC1idXR0b25cclxuICAgICAgICAgICAgICAgIChjbGljayk9XCIkZXZlbnQucHJldmVudERlZmF1bHQoKTskZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcIj5cclxuICAgICAgICAgICAgICAgIDxtYXQtaWNvbiBjbGFzcz1cImRyYWctaWNvblwiPmRyYWdfaW5kaWNhdG9yPC9tYXQtaWNvbj5cclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpZWxkLWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgIDwhLS0gPGRpdiBjbGFzcz1cImZpZWxkLWl0ZW1cIiAoY2xpY2spPVwiIG9uRXhwZW5kTW9yZSh7IGV2ZW50OiAkZXZlbnQsIGZpZWxkOiBjYXRlZ29yeSB9LCBpKVwiPiAtLT5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiZnVsbC13aWR0aCBpbnB1dC1jYXRlZ29yeS1uYW1lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge3sgY2F0ZWdvcnkubmFtZSB9fVxyXG4gICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwic3ViLWNhdGVnb3J5LW5hbWVcIj5cclxuICAgICAgICAgICAgICAgICAgICB7e2xvY2FsZT8uQ0FURUdPUllfU1VCVElUTEV9fSB7eyBjYXROYW1lU3RhcnQoY2F0ZWdvcnkubmFtZSkgPyBcImwnXCIgK1xyXG4gICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5Lm5hbWUgOiBjYXRlZ29yeS5uYW1lIH19XHJcbiAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBtYXQtbWluaS1mYWIgY29sb3I9XCJwcmltYXJ5XCIgY2xhc3M9XCJleHBhbmQtYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cIiRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtvbkV4cGVuZE1vcmUoeyBldmVudDogJGV2ZW50LCBmaWVsZDogY2F0ZWdvcnkgfSwgaSlcIj5cclxuICAgICAgICAgICAgICAgICAgPG1hdC1pY29uICpuZ0lmPVwiIWNhdGVnb3J5LmV4cGFuZE1vcmVcIj5jaGV2cm9uX3JpZ2h0PC9tYXQtaWNvbj5cclxuICAgICAgICAgICAgICAgICAgPG1hdC1pY29uICpuZ0lmPVwiY2F0ZWdvcnkuZXhwYW5kTW9yZVwiPmV4cGFuZF9tb3JlPC9tYXQtaWNvbj5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjaGlsZC1saXN0XCIgKm5nSWY9XCJjYXRlZ29yeS5mb3Jtc1wiIGNka0Ryb3BMaXN0R3JvdXA+XHJcbiAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiY2F0ZWdvcnkuZXhwYW5kTW9yZVwiPlxyXG4gICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBmaWVsZCBvZiBjYXRlZ29yeS5mb3JtczsgbGV0IGogPSBpbmRleFwiID5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IFxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmaWVsZC1ib3hcIiBcclxuICAgICAgICAgICAgICAgICAgICAgIFtpZF09XCJmaWVsZC5rZXlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2RrRHJvcExpc3RcclxuICAgICAgICAgICAgICAgICAgICAgIGNka0Ryb3BMaXN0T3JpZW50YXRpb249XCJob3Jpem9udGFsJ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAoY2RrRHJvcExpc3REcm9wcGVkKT1cImRyb3BGaWVsZCgkZXZlbnQpXCJcclxuICAgICAgICAgICAgICAgICAgICAgIFtjZGtEcm9wTGlzdERhdGFdPVwieyBmaWVsZDogZmllbGQsIGluZGV4OiBqLCBjYXRlZ29yeTogY2F0ZWdvcnkgfVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBbc3R5bGUud2lkdGhdPVwiZmllbGQuZm9ybXMgJiYgZmllbGQuZm9ybXMubGVuZ3RoPjAgPyAnMTAwJScgOiBmaWVsZFdpZHRoKGZpZWxkLnR5cGUsY2F0ZWdvcnkuZm9ybXMubGVuZ3RoLGopXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNka0RyYWcgY2xhc3M9XCJkbmQtYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkbmQtcGxhY2Vob2xkZXJcIiAqY2RrRHJhZ1BsYWNlaG9sZGVyPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmllbGRzLWNvbnRlbnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtjbGFzc109XCJmaWVsZC5mb3JtcyAmJiBmaWVsZC5mb3Jtcy5sZW5ndGg+MCA/ICdzdWItY2F0ZWdvcnktZm9ybXMnIDonJ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJidXR0b24tYWN0aW9uXCIgKm5nSWY9XCJmaWVsZC5mb3Jtc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInRyYW5zcGFyZW50LWJ1dHRvblwiIG1hdC1yYWlzZWQtYnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjbGljayk9XCIkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7JGV2ZW50LnByZXZlbnREZWZhdWx0KClcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG1hdC1pY29uIGNsYXNzPVwiZHJhZy1pY29uXCI+ZHJhZ19pbmRpY2F0b3I8L21hdC1pY29uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpZWxkcy1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdWItaGVhZGVyXCIgKm5nSWY9XCJmaWVsZC5mb3Jtc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmllbGQtaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImZ1bGwtd2lkdGggaW5wdXQtY2F0ZWdvcnktbmFtZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBmaWVsZC5sYWJlbCB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJzdWItY2F0ZWdvcnktbmFtZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e2xvY2FsZT8uQ0FURUdPUllfU1VCVElUTEV9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBjYXROYW1lU3RhcnQoZmllbGQubGFiZWwpID8gXCJsJ1wiICsgZmllbGQubGFiZWwgOiBmaWVsZC5sYWJlbCB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJ0cmFuc3BhcmVudC1idXR0b24gc2V0dGluZ1wiIG1hdC1yYWlzZWQtYnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwiJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO29uRWRpdEJsb2NrKGZpZWxkLCBpLCBqKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG1hdC1pY29uIGNsYXNzPVwic2V0dGluZy1pY29uXCI+c2V0dGluZ3M8L21hdC1pY29uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJleHBhbmQtYnV0dG9uXCIgW2Rpc2FibGVkXT1cIiEoZmllbGQuZm9ybXMgJiYgZmllbGQuZm9ybXMubGVuZ3RoID4gMClcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3N0eWxlLm9wYWNpdHldPVwiZmllbGQuZm9ybXMgJiYgZmllbGQuZm9ybXMubGVuZ3RoID4gMCA/IDEgOiAwXCIgbWF0LW1pbmktZmFiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cIiRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtvbkV4cGVuZE1vcmUoeyBldmVudDogJGV2ZW50LCBmaWVsZDogZmllbGQgfSwgaSwgailcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxtYXQtaWNvbiAqbmdJZj1cIiFmaWVsZC5leHBhbmRNb3JlXCI+ZXhwYW5kX2xlc3MgPC9tYXQtaWNvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxtYXQtaWNvbiAqbmdJZj1cImZpZWxkLmV4cGFuZE1vcmVcIj5leHBhbmRfbW9yZSA8L21hdC1pY29uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpYi1zdWItY2F0ZWdvcnkgW2ZpZWxkXT1cImZpZWxkXCIgW2xlbmd0aF09XCJjYXRlZ29yeT8uZm9ybXM/Lmxlbmd0aFwiIFtpXT1cImlcIiBbal09XCJqXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2JsaW5rXT1cImNoZWNrQmxpbmsoaiwxKT09PW5ld0ZpZWxkSW5kZXhcIiAob25DaGVja1ZhbHVlKT1cIm9uQ2hlY2tWYWx1ZSgkZXZlbnQpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKG9uQWRkS2V5d29yZEZyb21JbnB1dCk9XCJhZGRLZXl3b3JkRnJvbUlucHV0KCRldmVudC5ldmVudCwgJGV2ZW50LnByZXYsIGksIGopXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKG9uS2V5UHJlc3MpPVwib25LZXlQcmVzcygkZXZlbnQuZXZlbnQsIGksIGopXCIgKG9uQWRkTmV3RmllbGQpPVwib25BZGROZXdGaWVsZChpKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChvblJlbW92ZUZpZWxkKT1cIm9uUmVtb3ZlRmllbGQoaSwgailcIiAob25DaGFuZ2VUeXBlKT1cIm9uQ2hhbmdlVHlwZShmaWVsZC50eXBlLCBpLCBqKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChvblJlbW92ZUtleXdvcmQpPVwicmVtb3ZlS2V5d29yZCgkZXZlbnQuZXZlbnQsIGksIGopXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKG9uQWRkTmV3U3ViTGV2ZWxGaWVsZCk9XCJvbkFkZE5ld1N1YkxldmVsRmllbGQoaSwgailcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAob25FeHBlbmRNb3JlKT1cIm9uRXhwZW5kTW9yZSgkZXZlbnQsIGksIGopXCIgKG9uQ2hhbmdlTGFiZWwpPVwib25DaGFuZ2VMYWJlbCgkZXZlbnQsIGksIGopXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKG9uQ2hlY2tlZENoaXApPVwib25DaGVja2VkQ2hpcCgkZXZlbnQsIGksIGopXCIgKG9uRHJvcCk9XCJkcm9wKCRldmVudClcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAob25DaGVja2VkRGVmYXVsdCk9XCJvbkNoZWNrZWREZWZhdWx0KCRldmVudCwgaSwgailcIiAob25FZGl0QmxvY2spPVwib25FZGl0QmxvY2soZmllbGQsIGksIGopXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2NvbmRpdGlvbkRhdGFdPVwiY29uZGl0aW9uRGF0YVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2ICpuZ0lmPVwiZmllbGQuZXhwYW5kTW9yZVwiIGNsYXNzPVwiY2hpbGRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2ICNjaGlsZExpc3Q9XCJjZGtEcm9wTGlzdFwiIGNsYXNzPVwiY2hpbGQtY29udGVudFwiICpuZ0lmPVwiZmllbGQuZm9ybXNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2Nka0Ryb3BMaXN0RGF0YV09XCJmaWVsZC5mb3Jtc1wiIGNka0Ryb3BMaXN0IChjZGtEcm9wTGlzdERyb3BwZWQpPVwiZHJvcCgkZXZlbnQpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiXCIgc3R5bGU9XCJtYXJnaW4tYm90dG9tOiAyMHB4XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKm5nRm9yPVwibGV0IGNoaWxkIG9mIGZpZWxkLmZvcm1zOyBsZXQgayA9IGluZGV4XCIgW2lkXT1cImNoaWxkLmtleVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtzdHlsZS53aWR0aF09XCJjaGlsZC5mb3JtcyAmJiBjaGlsZC5mb3Jtcy5sZW5ndGg+MCA/ICcxMDAlJyA6IGZpZWxkV2lkdGgoY2hpbGQudHlwZSxmaWVsZC5mb3Jtcy5sZW5ndGgsaylcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjZGtEcmFnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZHMtY29udGVudFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbY2xhc3NdPVwiY2hpbGQuZm9ybXMgJiYgY2hpbGQuZm9ybXMubGVuZ3RoPjAgPyAnc3ViLWNhdGVnb3J5LWZvcm1zJyA6JydcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJidXR0b24tYWN0aW9uIGNoaWxkLTItYmFja2dyb3VuZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICpuZ0lmPVwiY2hpbGQuZm9ybXMgJiYgY2hpbGQuZm9ybXMubGVuZ3RoPjBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInRyYW5zcGFyZW50LWJ1dHRvblwiIG1hdC1yYWlzZWQtYnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cIiRldmVudC5zdG9wUHJvcGFnYXRpb24oKTskZXZlbnQucHJldmVudERlZmF1bHQoKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxtYXQtaWNvbiBjbGFzcz1cImRyYWctaWNvblwiPiBkcmFnX2luZGljYXRvcjwvbWF0LWljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmllbGRzLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3ViLWhlYWRlclwiICpuZ0lmPVwiY2hpbGQuZm9ybXMgJiYgY2hpbGQuZm9ybXMubGVuZ3RoPjBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmllbGQtaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwiZnVsbC13aWR0aCBpbnB1dC1jYXRlZ29yeS1uYW1lXCIgdHlwZT1cInRleHRcIiByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtyZWFkb25seV09XCJjYXRlZ29yaWVzLmxlbmd0aCA8IDQgfHwgIWNhdGVnb3J5LmVkaXRhYmxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbcmVhZG9ubHldPVwiIWNhdGVnb3J5LmVkaXRhYmxlXCIgWyhuZ01vZGVsKV09XCJjaGlsZC5sYWJlbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW25nTW9kZWxPcHRpb25zXT1cInsgc3RhbmRhbG9uZTogdHJ1ZSB9XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNhaXNpciBsZSBub20gZGUgbGEgc291cyBjYXTDqWdvcmllXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJzdWItY2F0ZWdvcnktbmFtZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7bG9jYWxlPy5DQVRFR09SWV9TVUJUSVRMRX19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgY2F0TmFtZVN0YXJ0KGNoaWxkLmxhYmVsKSA/IFwibCdcIiArIGNoaWxkLmxhYmVsIDogY2hpbGQubGFiZWwgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwidHJhbnNwYXJlbnQtYnV0dG9uIHNldHRpbmdcIiBtYXQtcmFpc2VkLWJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwiJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO29uRWRpdEJsb2NrKGNoaWxkLCBpLCBqLCBrKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bWF0LWljb24gY2xhc3M9XCJzZXR0aW5nLWljb25cIj5zZXR0aW5nczwvbWF0LWljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJleHBhbmQtYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2Rpc2FibGVkXT1cIiEoY2hpbGQuZm9ybXMgJiYgY2hpbGQuZm9ybXMubGVuZ3RoID4gMClcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbc3R5bGUub3BhY2l0eV09XCJjaGlsZC5mb3JtcyAmJiBjaGlsZC5mb3Jtcy5sZW5ndGggPiAwID8gMSA6IDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXQtbWluaS1mYWIgY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cIiRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtvbkV4cGVuZE1vcmUoeyBldmVudDogJGV2ZW50LCBmaWVsZDogY2hpbGQgfSwgaSwgaiwgaylcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG1hdC1pY29uICpuZ0lmPVwiIWNoaWxkLmV4cGFuZE1vcmVcIj4gZXhwYW5kX2xlc3MgPC9tYXQtaWNvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG1hdC1pY29uICpuZ0lmPVwiY2hpbGQuZXhwYW5kTW9yZVwiPiBleHBhbmRfbW9yZSA8L21hdC1pY29uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGliLXN1Yi1jYXRlZ29yeSBbZmllbGRdPVwiY2hpbGRcIiBbbGVuZ3RoXT1cImZpZWxkPy5mb3Jtcz8ubGVuZ3RoXCIgW2ldPVwialwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2JsaW5rXT1cImNoZWNrQmxpbmsoaywyKT09PW5ld0ZpZWxkSW5kZXhcIiBbal09XCJrXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAob25DaGVja1ZhbHVlKT1cIm9uQ2hlY2tWYWx1ZSgkZXZlbnQpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAob25BZGRLZXl3b3JkRnJvbUlucHV0KT1cImFkZEtleXdvcmRGcm9tSW5wdXQoJGV2ZW50LmV2ZW50LCAkZXZlbnQucHJldiwgaSwgaiwgaylcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChvbktleVByZXNzKT1cIm9uS2V5UHJlc3MoJGV2ZW50LmV2ZW50LCBpLCBqLCBrKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKG9uQWRkTmV3RmllbGQpPVwib25BZGROZXdGaWVsZChpLCBqKVwiIChvblJlbW92ZUZpZWxkKT1cIm9uUmVtb3ZlRmllbGQoaSwgaiwgaylcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChvbkNoYW5nZVR5cGUpPVwib25DaGFuZ2VUeXBlKGNoaWxkLnR5cGUsIGksIGosIGspXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAob25SZW1vdmVLZXl3b3JkKT1cInJlbW92ZUtleXdvcmQoJGV2ZW50LmV2ZW50LCBpLCBqLCBrKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKG9uQWRkTmV3U3ViTGV2ZWxGaWVsZCk9XCJvbkFkZE5ld1N1YkxldmVsRmllbGQoaSwgaiwgaylcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChvbkV4cGVuZE1vcmUpPVwib25FeHBlbmRNb3JlKCRldmVudCwgaSwgaiwgaylcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChvbkNoYW5nZUxhYmVsKT1cIm9uQ2hhbmdlTGFiZWwoJGV2ZW50LCBpLCBqLCBrKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKG9uQ2hlY2tlZENoaXApPVwib25DaGVja2VkQ2hpcCgkZXZlbnQsIGksIGosIGspXCIgKG9uRHJvcCk9XCJkcm9wKCRldmVudClcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChvbkNoZWNrZWREZWZhdWx0KT1cIm9uQ2hlY2tlZERlZmF1bHQoJGV2ZW50LCBpLCBqLCBrKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2NvbmRpdGlvbkRhdGFdPVwiY29uZGl0aW9uRGF0YVwiIChvbkVkaXRCbG9jayk9XCJvbkVkaXRCbG9jayhjaGlsZCwgaSwgaiwgaylcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2ICpuZ0lmPVwiY2hpbGQuZXhwYW5kTW9yZVwiIGNsYXNzPVwiY2hpbGRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjaGlsZC1jb250ZW50XCIgI2NoaWxkTGlzdD1cImNka0Ryb3BMaXN0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJjaGlsZC5mb3JtcyAmJiBjaGlsZC5mb3Jtcy5sZW5ndGg+MFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtjZGtEcm9wTGlzdERhdGFdPVwiY2hpbGQuZm9ybXNcIiBjZGtEcm9wTGlzdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY2RrRHJvcExpc3REcm9wcGVkKT1cImRyb3AoJGV2ZW50KVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiXCIgKm5nRm9yPVwibGV0IGMyIG9mIGNoaWxkLmZvcm1zOyBsZXQgbCA9IGluZGV4XCIgW2lkXT1cImMyLmtleVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3N0eWxlLndpZHRoXT1cImMyLmZvcm1zICYmIGMyLmZvcm1zLmxlbmd0aD4wID8gJzEwMCUnIDogZmllbGRXaWR0aChjMi50eXBlLGNoaWxkLmZvcm1zLmxlbmd0aCxsKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2RrRHJhZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZHMtY29udGVudFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtjbGFzc109XCJjMi5mb3JtcyAmJiBjMi5mb3Jtcy5sZW5ndGg+MCA/ICdzdWItY2F0ZWdvcnktZm9ybXMnIDonJ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYnV0dG9uLWFjdGlvbiBjaGlsZC0zLWJhY2tncm91bmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICpuZ0lmPVwiYzIuZm9ybXMgJiYgYzIuZm9ybXMubGVuZ3RoPjBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwidHJhbnNwYXJlbnQtYnV0dG9uXCIgbWF0LXJhaXNlZC1idXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjbGljayk9XCIkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxtYXQtaWNvbiBjbGFzcz1cImRyYWctaWNvblwiPiBkcmFnX2luZGljYXRvciA8L21hdC1pY29uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpZWxkcy1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGliLXN1Yi1jYXRlZ29yeSBbZmllbGRdPVwiYzJcIiBbbGVuZ3RoXT1cImNoaWxkPy5mb3Jtcz8ubGVuZ3RoXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtibGlua109XCJjaGVja0JsaW5rKGwsMyk9PT1uZXdGaWVsZEluZGV4XCIgW2ldPVwia1wiIFtqXT1cImxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKG9uQ2hlY2tWYWx1ZSk9XCJvbkNoZWNrVmFsdWUoJGV2ZW50KVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAob25BZGRLZXl3b3JkRnJvbUlucHV0KT1cImFkZEtleXdvcmRGcm9tSW5wdXQoJGV2ZW50LmV2ZW50LCAkZXZlbnQucHJldiwgaSwgaiwgaywgbClcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKG9uS2V5UHJlc3MpPVwib25LZXlQcmVzcygkZXZlbnQuZXZlbnQsIGksIGosIGssIGwpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChvbkFkZE5ld0ZpZWxkKT1cIm9uQWRkTmV3RmllbGQoaSwgaiwgaylcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKG9uUmVtb3ZlRmllbGQpPVwib25SZW1vdmVGaWVsZChpLCBqLCBrLCBsKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAob25DaGFuZ2VUeXBlKT1cIm9uQ2hhbmdlVHlwZShjMi50eXBlLCBpLCBqLCBrLCBsKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAob25SZW1vdmVLZXl3b3JkKT1cInJlbW92ZUtleXdvcmQoJGV2ZW50LmV2ZW50LCBpLCBqLCBrLCBsKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAob25BZGROZXdTdWJMZXZlbEZpZWxkKT1cIm9uQWRkTmV3U3ViTGV2ZWxGaWVsZChpLCBqLCBrLCBsKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAob25FeHBlbmRNb3JlKT1cIm9uRXhwZW5kTW9yZSgkZXZlbnQsIGksIGosIGssIGwpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChvbkNoYW5nZUxhYmVsKT1cIm9uQ2hhbmdlTGFiZWwoJGV2ZW50LCBpLCBqLCBrLCBsKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAob25DaGVja2VkQ2hpcCk9XCJvbkNoZWNrZWRDaGlwKCRldmVudCwgaSwgaiwgaywgbClcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKG9uRHJvcCk9XCJkcm9wKCRldmVudClcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKG9uQ2hlY2tlZERlZmF1bHQpPVwib25DaGVja2VkRGVmYXVsdCgkZXZlbnQsIGksIGosIGssIGwpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChvbkVkaXRCbG9jayk9XCJvbkVkaXRCbG9jayhjMiwgaSwgaiwgaywgbClcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2NvbmRpdGlvbkRhdGFdPVwiY29uZGl0aW9uRGF0YVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNoaWxkXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saWItc3ViLWNhdGVnb3J5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhZGQtYnV0dG9uLXN1Yi1jYXRlZ29yeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqbmdJZj1cImNoaWxkPy5mb3Jtcz8ubGVuZ3RoIC0gMSA9PT0gbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBzdHlsZT1cIm1hcmdpbjogMTBweCBhdXRvXCIgbWF0LXJhaXNlZC1idXR0b24gY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cIiRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtvbkFkZE5ld0ZpZWxkKGksIGosIGspXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPnt7bG9jYWxlPy5BRERfRklFTER9fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG1hdC1pY29uPiBhZGQgPC9tYXQtaWNvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpYi1zdWItY2F0ZWdvcnk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhZGQtYnV0dG9uLXN1Yi1jYXRlZ29yeVwiICpuZ0lmPVwiZmllbGQ/LmZvcm1zPy5sZW5ndGggLSAxID09PSBrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBzdHlsZT1cIm1hcmdpbjogMTBweCBhdXRvXCIgbWF0LXJhaXNlZC1idXR0b24gY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjbGljayk9XCIkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7b25BZGROZXdGaWVsZChpLCBqKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3tsb2NhbGU/LkFERF9GSUVMRH19PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG1hdC1pY29uPmFkZDwvbWF0LWljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saWItc3ViLWNhdGVnb3J5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFkZC1idXR0b24tY29udGFpbmVyIGFkZC1idXR0b24tc3ViLWNhdGVnb3J5XCIgKm5nSWY9XCJjYXRlZ29yeT8uZm9ybXM/Lmxlbmd0aCAtIDEgPT09IGpcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBzdHlsZT1cIm1hcmdpbjogMTBweCBhdXRvOyBwYWRkaW5nOjEwcHggMFwiIGNsYXNzPVwiYWRkLWJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW2Rpc2FibGVkXT1cImNhdGVnb3J5Py5mb3Jtcz8ubGVuZ3RoIC0gMSAhPT0galwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW3N0eWxlLm9wYWNpdHldPVwiY2F0ZWdvcnk/LmZvcm1zPy5sZW5ndGggLSAxID09PSBqID8gMSA6IDBcIiBtYXQtcmFpc2VkLWJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIChjbGljayk9XCIkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7b25BZGROZXdGaWVsZChpKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPnt7bG9jYWxlPy5BRERfRklFTER9fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bWF0LWljb24+YWRkPC9tYXQtaWNvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9zZWN0aW9uPlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJhZGQtYnV0dG9uLWNvbnRhaW5lciBhZGQtY2F0ZWdvcnktYnV0dG9uIGFkZC1zdGVwXCI+XHJcbiAgICAgICAgICAgIDxidXR0b24gKGNsaWNrKT1cIm9uQWRkTmV3Q2F0ZWdvcnkoJGV2ZW50KVwiPlxyXG4gICAgICAgICAgICAgIHt7bG9jYWxlPy5BRERfU1RFUH19XHJcbiAgICAgICAgICAgICAgPG1hdC1pY29uPmFkZDwvbWF0LWljb24+XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8c2VjdGlvbiBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50XCI+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9XCJoZWlnaHQ6IDQwMHB4O1wiPjwvZGl2PlxyXG4gICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cImZpZWxkLXByb3BlcnR5XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInByb3BlcnR5LWNvbnRlbnRcIiAqbmdJZj1cImlzQmxvY2sgJiYgY3VycmVudEVkaXRCbG9ja1wiPlxyXG4gICAgICAgICAgPGgzPnt7bG9jYWxlPy5TRVRUSU5HX09GX0JMT0NLfX0ge3sgY3VycmVudEVkaXRCbG9jay5sYWJlbCB9fTwvaDM+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJvcGVydHktY29udGVudC1pbm5lclwiIHN0eWxlPVwid2lkdGg6IDEwMCU7XCI+XHJcbiAgICAgICAgICAgIDxtYXQtZm9ybS1maWVsZCBjbGFzcz1cImZvcm0tZmllbGQgbWF0LXNlbGVjdCBmdWxsLXdpZHRoXCIgc3R5bGU9XCJjdXJzb3I6IHBvaW50ZXJcIiBhcHBlYXJhbmNlPVwib3V0bGluZVwiPlxyXG4gICAgICAgICAgICAgIDxtYXQtbGFiZWw+e3tsb2NhbGU/LlRZUEVfT0ZfQkxPQ0t9fTwvbWF0LWxhYmVsPlxyXG4gICAgICAgICAgICAgIDxtYXQtc2VsZWN0IChjbGljayk9XCJvbk9wZW5UeXBlRGlhbG9nKGN1cnJlbnRFZGl0QmxvY2spXCIgZGlzYWJsZWQ9XCJ0cnVlXCIgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgIFsobmdNb2RlbCldPVwiY3VycmVudEVkaXRCbG9jay50eXBlXCIgKG5nTW9kZWxDaGFuZ2UpPVwib25DaGFuZ2VUeXBlQmxvY2soY3VycmVudEVkaXRCbG9jaylcIlxyXG4gICAgICAgICAgICAgICAgW25nTW9kZWxPcHRpb25zXT1cInsgc3RhbmRhbG9uZTogdHJ1ZSB9XCIgY2xhc3M9XCJzZWxlY3QtdHlwZS1jbGFzc1wiPlxyXG4gICAgICAgICAgICAgICAgPG1hdC1vcHRpb24gdmFsdWU9XCJ0ZXh0XCI+VGV4dCg4MCk8L21hdC1vcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8bWF0LW9wdGlvbiB2YWx1ZT1cInRleHRhcmVhXCI+VGV4dCg4MCspPC9tYXQtb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgPG1hdC1vcHRpb24gdmFsdWU9XCJyYWRpb1wiPlJhZGlvPC9tYXQtb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgPG1hdC1vcHRpb24gdmFsdWU9XCJzZWxlY3RcIj5TZWxlY3RvcjwvbWF0LW9wdGlvbj5cclxuICAgICAgICAgICAgICAgIDxtYXQtb3B0aW9uIHZhbHVlPVwidG9nZ2xlXCI+VG9nZ2xlPC9tYXQtb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgPG1hdC1vcHRpb24gdmFsdWU9XCJjaGVja2JveFwiPkNoZWNrYm94PC9tYXQtb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgPG1hdC1vcHRpb24gdmFsdWU9XCJjaGVja2JveF9tdWx0aXBsZVwiPkNoZWNrYm94IG11bHRpcGxlPC9tYXQtb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgPG1hdC1vcHRpb24gdmFsdWU9XCJlbWFpbFwiPkVtYWlsPC9tYXQtb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgPG1hdC1vcHRpb24gdmFsdWU9XCJwYXNzd29yZFwiPlBhc3N3b3JkPC9tYXQtb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgPG1hdC1vcHRpb24gdmFsdWU9XCJkYXRlXCI+RGF0ZTwvbWF0LW9wdGlvbj5cclxuICAgICAgICAgICAgICAgIDxtYXQtb3B0aW9uIHZhbHVlPVwidGVsXCI+UGhvbmU8L21hdC1vcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8bWF0LW9wdGlvbiB2YWx1ZT1cIm5vbmVcIj5Ob25lPC9tYXQtb3B0aW9uPlxyXG4gICAgICAgICAgICAgIDwvbWF0LXNlbGVjdD5cclxuICAgICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImN1cnJlbnRFZGl0QmxvY2sudHlwZSE9PSdub25lJ1wiPlxyXG4gICAgICAgICAgICAgIDxtYXQtZm9ybS1maWVsZCBjbGFzcz1cImZvcm0tZmllbGQgZnVsbC13aWR0aFwiIGFwcGVhcmFuY2U9XCJvdXRsaW5lXCI+XHJcbiAgICAgICAgICAgICAgICA8bWF0LWxhYmVsPnt7bG9jYWxlPy5OQU1FX0xBQkVMfX08L21hdC1sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIFsobmdNb2RlbCldPVwiY3VycmVudEVkaXRCbG9jay5sYWJlbFwiIFtuZ01vZGVsT3B0aW9uc109XCJ7IHN0YW5kYWxvbmU6IHRydWUgfVwiIG1hdElucHV0XHJcbiAgICAgICAgICAgICAgICAgIHJlcXVpcmVkIHBsYWNlaG9sZGVyPVwiXCIgLz5cclxuICAgICAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgICAgIDxuZy1jb250YWluZXIgW25nU3dpdGNoXT1cImN1cnJlbnRFZGl0QmxvY2sudHlwZVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiAqbmdTd2l0Y2hDYXNlPVwiJ3RvZ2dsZSdcIiBjbGFzcz1cImZsZXgtYXV0b1wiXHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPVwiZGlzcGxheTogZmxleDthbGlnbi1pdGVtczogZmxleC1lbmQ7bWFyZ2luOiAxMHB4IDA7XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxtYXQtc2xpZGUtdG9nZ2xlIGNsYXNzPVwiZm9ybS1maWVsZFwiIGNvbG9yPVwiIzZGRThEN1wiIFsobmdNb2RlbCldPVwiY3VycmVudEVkaXRCbG9jay5kZWZhdWx0VmFsdWVcIlxyXG4gICAgICAgICAgICAgICAgICAgIFtuZ01vZGVsT3B0aW9uc109XCJ7IHN0YW5kYWxvbmU6IHRydWUgfVwiPlxyXG4gICAgICAgICAgICAgICAgICA8L21hdC1zbGlkZS10b2dnbGU+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPVwibWFyZ2luLWxlZnQ6IDEwcHg7XCI+e3tsb2NhbGU/LkRFRkFVTFRfVkFMVUV9fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiAqbmdTd2l0Y2hDYXNlPVwiJ2NoZWNrYm94J1wiIGNsYXNzPVwiZmxleC1hdXRvXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxtYXQtY2hlY2tib3ggY2xhc3M9XCJmb3JtLWZpZWxkXCIgWyhuZ01vZGVsKV09XCJjdXJyZW50RWRpdEJsb2NrLnZhbHVlXCJcclxuICAgICAgICAgICAgICAgICAgICBbbmdNb2RlbE9wdGlvbnNdPVwieyBzdGFuZGFsb25lOiB0cnVlIH1cIj5cclxuICAgICAgICAgICAgICAgICAgICB7e2xvY2FsZT8uREVGQVVMVF9DSEVDS0VEfX1cclxuICAgICAgICAgICAgICAgICAgPC9tYXQtY2hlY2tib3g+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxtYXQtZm9ybS1maWVsZCAqbmdTd2l0Y2hDYXNlPVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWydzZWxlY3QnLCAncmFkaW8nLCAnY2hlY2tib3hfbXVsdGlwbGUnXS5pbmNsdWRlcyhjdXJyZW50RWRpdEJsb2NrLnR5cGUpID8gY3VycmVudEVkaXRCbG9jay50eXBlIDogIWN1cnJlbnRFZGl0QmxvY2sudHlwZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiBjbGFzcz1cImZsZXgtYXV0byBmdWxsLXdpZHRoXCIgYXBwZWFyYW5jZT1cIm91dGxpbmVcIj5cclxuICAgICAgICAgICAgICAgICAgPG1hdC1sYWJlbD4ge3tsb2NhbGU/LkRFRkFVTFRfVkFMVUV9fSA8L21hdC1sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgPG1hdC1jaGlwLWxpc3QgI2NoaWxkTGlzdD1cImNka0Ryb3BMaXN0XCIgW2Nka0Ryb3BMaXN0RGF0YV09XCJjdXJyZW50RWRpdEJsb2NrLmRlZmF1bHRWYWx1ZVwiIGNka0Ryb3BMaXN0XHJcbiAgICAgICAgICAgICAgICAgICAgKGNka0Ryb3BMaXN0RHJvcHBlZCk9XCJkcm9wKCRldmVudClcIiAjY2hpcExpc3QgYXJpYS1sYWJlbD1cIlZpZGVvIGtleXdvcmRzOyBsZXQgaW5kZXg9aW5kZXhcIiBtdWx0aXBsZVxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGFibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPG1hdC1jaGlwIHN0eWxlPVwibWluLWhlaWdodDogMjVweDt3aWR0aDogYXV0bztcIiAqbmdGb3I9XCJsZXQgb3B0aW9uIG9mIGN1cnJlbnRFZGl0QmxvY2suZGVmYXVsdFZhbHVlXCJcclxuICAgICAgICAgICAgICAgICAgICAgIFtzZWxlY3RlZF09XCJvcHRpb24uY2hlY2tlZFwiIFt2YWx1ZV09XCJvcHRpb24udmFsdWVcIiBbcmVtb3ZhYmxlXT1cInRydWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgKGRibGNsaWNrKT1cIm9uQ2hlY2tlZENoaXBCbG9jayhvcHRpb24sIGN1cnJlbnRFZGl0QmxvY2spXCIgKGNsaWNrKT1cIm9uRWRpdENoaXAob3B0aW9uKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAocmVtb3ZlZCk9XCJyZW1vdmVLZXl3b3JkQmxvY2sob3B0aW9uLCBjdXJyZW50RWRpdEJsb2NrKVwiIGNka0RyYWc+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7eyBvcHRpb24udmFsdWUgfX1cclxuICAgICAgICAgICAgICAgICAgICAgIDxtYXQtaWNvbiBtYXRDaGlwUmVtb3ZlPnt7bG9jYWxlPy5DQU5DRUx9fTwvbWF0LWljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9tYXQtY2hpcD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgI2NoaXBzSW5wdXQgcGxhY2Vob2xkZXI9XCJhZGQuLi5cIiBbbWF0Q2hpcElucHV0Rm9yXT1cImNoaXBMaXN0XCIgW21hdENoaXBJbnB1dEFkZE9uQmx1cl09XCJ0cnVlXCJcclxuICAgICAgICAgICAgICAgICAgICAgIChtYXRDaGlwSW5wdXRUb2tlbkVuZCk9XCJhZGRLZXl3b3JkRnJvbUlucHV0QmxvY2soJGV2ZW50LCBjdXJyZW50RWRpdEJsb2NrLCBwcmV2VmFsdWUpXCJcclxuICAgICAgICAgICAgICAgICAgICAgIFttYXRDaGlwSW5wdXRTZXBhcmF0b3JLZXlDb2Rlc109XCJzZXBhcmF0b3JLZXlzQ29kZXNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgKGtleXVwKT1cIm9uS2V5VXBDaGlwKCRldmVudCwgY3VycmVudEVkaXRCbG9jaylcIiBbKG5nTW9kZWwpXT1cImN1cnJlbnRDaGlwXCJcclxuICAgICAgICAgICAgICAgICAgICAgIFtuZ01vZGVsT3B0aW9uc109XCJ7IHN0YW5kYWxvbmU6IHRydWUgfVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvbWF0LWNoaXAtbGlzdD5cclxuICAgICAgICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgICAgICAgICA8bWF0LWZvcm0tZmllbGQgKm5nU3dpdGNoQ2FzZT1cIid0ZXh0YXJlYSdcIiBjbGFzcz1cImZvcm0tZmllbGQgZnVsbC13aWR0aFwiIGFwcGVhcmFuY2U9XCJvdXRsaW5lXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxtYXQtbGFiZWw+e3tsb2NhbGU/LkRFRkFVTFRfVkFMVUV9fTwvbWF0LWxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBtYXRJbnB1dCBbbmdNb2RlbE9wdGlvbnNdPVwieyBzdGFuZGFsb25lOiB0cnVlIH1cIlxyXG4gICAgICAgICAgICAgICAgICAgIFsobmdNb2RlbCldPVwiY3VycmVudEVkaXRCbG9jay5kZWZhdWx0VmFsdWVcIiBwbGFjZWhvbGRlcj1cIkRlc2NyaXB0aW9uLi4uXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcblxyXG4gICAgICAgICAgICAgICAgPG1hdC1mb3JtLWZpZWxkICpuZ1N3aXRjaERlZmF1bHQgY2xhc3M9XCJmb3JtLWZpZWxkIGZ1bGwtd2lkdGhcIlxyXG4gICAgICAgICAgICAgICAgICBbc3R5bGUub3BhY2l0eV09XCJjdXJyZW50RWRpdEJsb2NrLnR5cGUgIT09ICd0ZWwnID8gMSA6IDBcIiBhcHBlYXJhbmNlPVwib3V0bGluZVwiPlxyXG4gICAgICAgICAgICAgICAgICA8bWF0LWxhYmVsPnt7bG9jYWxlPy5ERUZBVUxUX1ZBTFVFfX08L21hdC1sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0IFt0eXBlXT1cImN1cnJlbnRFZGl0QmxvY2sudHlwZVwiIFtkaXNhYmxlZF09XCJjdXJyZW50RWRpdEJsb2NrLnR5cGUgPT09ICd0ZWwnXCIgbWF0SW5wdXRcclxuICAgICAgICAgICAgICAgICAgICBbbmdNb2RlbE9wdGlvbnNdPVwieyBzdGFuZGFsb25lOiB0cnVlIH1cIiBbKG5nTW9kZWwpXT1cImN1cnJlbnRFZGl0QmxvY2suZGVmYXVsdFZhbHVlXCJcclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFuZGF0b3J5IHRvcC0xMCBib3R0b20tMTBcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0b29nbGUtYnV0dG9uXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuPnt7bG9jYWxlPy5SRVFVSVJFRH19PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8bWF0LXNsaWRlLXRvZ2dsZSBjb2xvcj1cIiM2RkU4RDdcIiBbKG5nTW9kZWwpXT1cImN1cnJlbnRFZGl0QmxvY2suaXNNYW5kYXRvcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgIFtuZ01vZGVsT3B0aW9uc109XCJ7IHN0YW5kYWxvbmU6IHRydWUgfVwiPlxyXG4gICAgICAgICAgICAgICAgICA8L21hdC1zbGlkZS10b2dnbGU+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFuZGF0b3J5IHRvcC0xMFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRvb2dsZS1idXR0b25cIj5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4+e3tsb2NhbGU/LkNPTkRJVElPTkFMX1ZJU0lCSUxJVFl9fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPG1hdC1zbGlkZS10b2dnbGUgY29sb3I9XCIjNkZFOEQ3XCIgWyhuZ01vZGVsKV09XCJjdXJyZW50RWRpdEJsb2NrLmlzQ29uZGl0aW9uYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgIFtuZ01vZGVsT3B0aW9uc109XCJ7IHN0YW5kYWxvbmU6IHRydWUgfVwiPlxyXG4gICAgICAgICAgICAgICAgICA8L21hdC1zbGlkZS10b2dnbGU+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiY3VycmVudEVkaXRCbG9jaz8uaXNDb25kaXRpb25hbFwiPlxyXG4gICAgICAgICAgICAgICAgPG1hdC1mb3JtLWZpZWxkIGNsYXNzPVwiZm9ybS1maWVsZCBtYXQtc2VsZWN0IGZ1bGwtd2lkdGhcIiBhcHBlYXJhbmNlPVwib3V0bGluZVwiPlxyXG4gICAgICAgICAgICAgICAgICA8bWF0LWxhYmVsPnt7bG9jYWxlPy5TRUxFQ1RfQ0FURUdPUll9fTwvbWF0LWxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICA8bWF0LXNlbGVjdCBbKG5nTW9kZWwpXT1cImFsbFwiIFtuZ01vZGVsT3B0aW9uc109XCJ7IHN0YW5kYWxvbmU6IHRydWUgfVwiXHJcbiAgICAgICAgICAgICAgICAgICAgKHNlbGVjdGlvbkNoYW5nZSk9XCJvblNlbGVjdENvbmRpdGlvbignYWxsJywnczEnLCAkZXZlbnQudmFsdWUpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPG1hdC1vcHRpb24gKm5nRm9yPVwibGV0IGl0ZW0gb2YgY29uZGl0aW9uRGF0YS5hbGxcIiBbdmFsdWVdPVwiaXRlbS5rZXlcIj57e1xyXG4gICAgICAgICAgICAgICAgICAgICAgaXRlbS5sYWJlbCB9fVxyXG4gICAgICAgICAgICAgICAgICAgIDwvbWF0LW9wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgPC9tYXQtc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgICAgICAgICAgICAgIDxtYXQtZm9ybS1maWVsZCAqbmdJZj1cImNvbmRpdGlvbkRhdGEuczE/Lmxlbmd0aCA+IDBcIiBjbGFzcz1cImZvcm0tZmllbGQgbWF0LXNlbGVjdCBmdWxsLXdpZHRoXCJcclxuICAgICAgICAgICAgICAgICAgYXBwZWFyYW5jZT1cIm91dGxpbmVcIj5cclxuICAgICAgICAgICAgICAgICAgPG1hdC1sYWJlbD57e2xvY2FsZT8uU0VMRUNUX1NVQl9DQVRFR09SWX19IChzMSk8L21hdC1sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgPG1hdC1zZWxlY3QgWyhuZ01vZGVsKV09XCJzMVwiIFtuZ01vZGVsT3B0aW9uc109XCJ7IHN0YW5kYWxvbmU6IHRydWUgfVwiXHJcbiAgICAgICAgICAgICAgICAgICAgKHNlbGVjdGlvbkNoYW5nZSk9XCJvblNlbGVjdENvbmRpdGlvbignczEnLCdzMicsICRldmVudC52YWx1ZSlcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bWF0LW9wdGlvbiAqbmdGb3I9XCJsZXQgaXRlbSBvZiBjb25kaXRpb25EYXRhLnMxXCIgW3ZhbHVlXT1cIml0ZW0ua2V5XCI+e3tcclxuICAgICAgICAgICAgICAgICAgICAgIGl0ZW0ubGFiZWwgfX1cclxuICAgICAgICAgICAgICAgICAgICA8L21hdC1vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgIDwvbWF0LXNlbGVjdD5cclxuICAgICAgICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgICAgICAgICA8bWF0LWZvcm0tZmllbGQgY2xhc3M9XCJmb3JtLWZpZWxkIG1hdC1zZWxlY3QgZnVsbC13aWR0aFwiICpuZ0lmPVwiY29uZGl0aW9uRGF0YS5zMj8ubGVuZ3RoPjBcIlxyXG4gICAgICAgICAgICAgICAgICBhcHBlYXJhbmNlPVwib3V0bGluZVwiPlxyXG4gICAgICAgICAgICAgICAgICA8bWF0LWxhYmVsPnt7bG9jYWxlPy5TRUxFQ1RfU1VCX0NBVEVHT1JZfX0gKHMyKTwvbWF0LWxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICA8bWF0LXNlbGVjdCBbKG5nTW9kZWwpXT1cInMyXCIgW25nTW9kZWxPcHRpb25zXT1cInsgc3RhbmRhbG9uZTogdHJ1ZSB9XCJcclxuICAgICAgICAgICAgICAgICAgICAoc2VsZWN0aW9uQ2hhbmdlKT1cIm9uU2VsZWN0Q29uZGl0aW9uKCdzMicsJ3MzJywgJGV2ZW50LnZhbHVlKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxtYXQtb3B0aW9uICpuZ0Zvcj1cImxldCBpdGVtIG9mIGNvbmRpdGlvbkRhdGEuczJcIiBbdmFsdWVdPVwiaXRlbS5rZXlcIj57e1xyXG4gICAgICAgICAgICAgICAgICAgICAgaXRlbS5sYWJlbCB9fVxyXG4gICAgICAgICAgICAgICAgICAgIDwvbWF0LW9wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgPC9tYXQtc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgICAgICAgICAgICAgIDxtYXQtZm9ybS1maWVsZCBjbGFzcz1cImZvcm0tZmllbGQgbWF0LXNlbGVjdCBmdWxsLXdpZHRoXCIgKm5nSWY9XCJjb25kaXRpb25EYXRhLnMzPy5sZW5ndGg+MFwiXHJcbiAgICAgICAgICAgICAgICAgIGFwcGVhcmFuY2U9XCJvdXRsaW5lXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxtYXQtbGFiZWw+e3tsb2NhbGU/LlNFTEVDVF9TVUJfQ0FURUdPUll9fSAoczMpPC9tYXQtbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgIDxtYXQtc2VsZWN0IFsobmdNb2RlbCldPVwiczNcIiBbbmdNb2RlbE9wdGlvbnNdPVwieyBzdGFuZGFsb25lOiB0cnVlIH1cIlxyXG4gICAgICAgICAgICAgICAgICAgIChzZWxlY3Rpb25DaGFuZ2UpPVwib25TZWxlY3RDb25kaXRpb24oJ3MzJywnczQnLCAkZXZlbnQudmFsdWUpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPG1hdC1vcHRpb24gKm5nRm9yPVwibGV0IGl0ZW0gb2YgY29uZGl0aW9uRGF0YS5zM1wiIFt2YWx1ZV09XCJpdGVtLmtleVwiPnt7XHJcbiAgICAgICAgICAgICAgICAgICAgICBpdGVtLmxhYmVsIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPC9tYXQtb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICA8L21hdC1zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG5cclxuICAgICAgICAgICAgICA8bWF0LXJhZGlvLWdyb3VwXHJcbiAgICAgICAgICAgICAgICAqbmdJZj1cImN1cnJlbnRFZGl0QmxvY2suaXNDb25kaXRpb25hbCAmJiBvbkdldERlZmF1bHRWYWx1ZSgpICYmIG9uR2V0RGVmYXVsdFZhbHVlKCk/Lmxlbmd0aD4wXCJcclxuICAgICAgICAgICAgICAgIGFyaWEtbGFiZWxsZWRieT1cImV4YW1wbGUtcmFkaW8tZ3JvdXAtbGFiZWxcIiBjbGFzcz1cImV4YW1wbGUtcmFkaW8tZ3JvdXBcIlxyXG4gICAgICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJjdXJyZW50RWRpdEJsb2NrLmNvbmRpdGlvbi52YWx1ZVwiIFtuZ01vZGVsT3B0aW9uc109XCJ7IHN0YW5kYWxvbmU6IHRydWUgfVwiPlxyXG4gICAgICAgICAgICAgICAgPG1hdC1yYWRpby1idXR0b24gY2xhc3M9XCJleGFtcGxlLXJhZGlvLWJ1dHRvblwiIHN0eWxlPVwibWFyZ2luLXJpZ2h0OiAxMHB4XCJcclxuICAgICAgICAgICAgICAgICAgKm5nRm9yPVwibGV0IGl0ZW0gb2Ygb25HZXREZWZhdWx0VmFsdWUoKVwiIFt2YWx1ZV09XCJpdGVtLnZhbHVlXCI+XHJcbiAgICAgICAgICAgICAgICAgIHt7IGl0ZW0udmFsdWUgfX1cclxuICAgICAgICAgICAgICAgIDwvbWF0LXJhZGlvLWJ1dHRvbj5cclxuICAgICAgICAgICAgICA8L21hdC1yYWRpby1ncm91cD5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYmxvYy1hY3Rpb25cIj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gKm5nSWY9XCJwYXJhbXNJbmRleC5sZW5ndGg8NFwiIG1hdC1idXR0b24gW2Rpc2FibGVkXT1cIiFjdXJyZW50RWRpdEJsb2NrLmVkaXRhYmxlXCJcclxuICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cIm9uQWRkTmV3U3ViTGV2ZWxGaWVsZEJsb2NrKCRldmVudClcIj57e2xvY2FsZT8uU1VCX0NBVEVHT1JZfX0gPG1hdC1pY29uPmRldmljZV9odWJcclxuICAgICAgICAgICAgICAgICAgPC9tYXQtaWNvbj48L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gbWF0LWJ1dHRvbiBbZGlzYWJsZWRdPVwiIWN1cnJlbnRFZGl0QmxvY2suZWRpdGFibGVcIlxyXG4gICAgICAgICAgICAgICAgICAoY2xpY2spPVwib25EdXBsaWNhdGVkQmxvY2soJGV2ZW50KVwiPnt7bG9jYWxlPy5EVVBMSUNBVEVfQkxPQ0t9fTxtYXQtaWNvbj5maWx0ZXJfbm9uZTwvbWF0LWljb24+XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gbWF0LWJ1dHRvbiBbZGlzYWJsZWRdPVwiIWN1cnJlbnRFZGl0QmxvY2suZWRpdGFibGVcIiBjbGFzcz1cImRlbGV0ZS1ibG9jXCJcclxuICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cIm9uUmVtb3ZlRmllbGRCbG9jaygkZXZlbnQpXCI+e3tsb2NhbGU/LkRFTEVURV9CTE9DS319IDxtYXQtaWNvbj5cclxuICAgICAgICAgICAgICAgICAgICBkZWxldGUgPC9tYXQtaWNvbj48L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwicHJvcGVydHktY29udGVudFwiICpuZ0lmPVwiaXNTZWN0aW9uICYmIGN1cnJlbnRFZGl0QmxvY2tcIj5cclxuICAgICAgICAgIDxoMz57e2xvY2FsZT8uU0VDVElPTl9TRVRUSU5HfX0ge3sgY3VycmVudEVkaXRCbG9jay5uYW1lIH19PC9oMz5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcm9wZXJ0eS1jb250ZW50LWlubmVyXCI+XHJcbiAgICAgICAgICAgIDxtYXQtZm9ybS1maWVsZCBjbGFzcz1cImZvcm0tZmllbGQgZnVsbC13aWR0aFwiIGFwcGVhcmFuY2U9XCJvdXRsaW5lXCI+XHJcbiAgICAgICAgICAgICAgPG1hdC1sYWJlbD57e2xvY2FsZT8uU0VDVElPTl9OQU1FfX08L21hdC1sYWJlbD5cclxuICAgICAgICAgICAgICA8aW5wdXQgKG5nTW9kZWxDaGFuZ2UpPVwib25DaGFuZ2VDYXRlZ29yeU5hbWUoKVwiIHR5cGU9XCJ0ZXh0XCIgbWF0SW5wdXQgcmVxdWlyZWQgcGxhY2Vob2xkZXI9XCJcIlxyXG4gICAgICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJjdXJyZW50RWRpdEJsb2NrLm5hbWVcIiBbbmdNb2RlbE9wdGlvbnNdPVwieyBzdGFuZGFsb25lOiB0cnVlIH1cIiAvPlxyXG4gICAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgICA8bWF0LWZvcm0tZmllbGQgY2xhc3M9XCJmb3JtLWZpZWxkIG1hdC1zZWxlY3QgZnVsbC13aWR0aFwiIGFwcGVhcmFuY2U9XCJvdXRsaW5lXCI+XHJcbiAgICAgICAgICAgICAgPG1hdC1sYWJlbD57e2xvY2FsZT8uTUFOQUdFTUVOVF9URUFNfX08L21hdC1sYWJlbD5cclxuICAgICAgICAgICAgICA8bWF0LXNlbGVjdCByZXF1aXJlZCBbKG5nTW9kZWwpXT1cImN1cnJlbnRFZGl0QmxvY2suc2VsZWN0b3IudmFsdWVcIlxyXG4gICAgICAgICAgICAgICAgW25nTW9kZWxPcHRpb25zXT1cInsgc3RhbmRhbG9uZTogdHJ1ZSB9XCI+XHJcbiAgICAgICAgICAgICAgICA8bWF0LW9wdGlvbiBbdmFsdWVdPVwiaXRlbS52YWx1ZVwiICpuZ0Zvcj1cImxldCBpdGVtIG9mIGN1cnJlbnRFZGl0QmxvY2suc2VsZWN0b3IuZGVmYXVsdFZhbHVlXCI+e3tcclxuICAgICAgICAgICAgICAgICAgaXRlbS52YWx1ZSB9fTwvbWF0LW9wdGlvbj5cclxuICAgICAgICAgICAgICA8L21hdC1zZWxlY3Q+XHJcbiAgICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJibG9jLWFjdGlvblwiPlxyXG4gICAgICAgICAgICAgIDxidXR0b24gbWF0LWJ1dHRvbiAoY2xpY2spPVwib25BZGROZXdTdWJMZXZlbEZpZWxkQmxvY2soJGV2ZW50KVwiPnt7bG9jYWxlPy5TVUJfQ0FURUdPUll9fSA8bWF0LWljb24+XHJcbiAgICAgICAgICAgICAgICAgIGRldmljZV9odWJcclxuICAgICAgICAgICAgICAgIDwvbWF0LWljb24+PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBtYXQtYnV0dG9uIChjbGljayk9XCJvbkR1cGxpY2F0ZWRCbG9jaygkZXZlbnQpXCI+e3tsb2NhbGU/LkRVUExJQ0FURV9CTE9DS319PG1hdC1pY29uPmZpbHRlcl9ub25lXHJcbiAgICAgICAgICAgICAgICA8L21hdC1pY29uPlxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDxidXR0b24gW2Rpc2FibGVkXT1cIiFjdXJyZW50RWRpdEJsb2NrLmVkaXRhYmxlXCIgbWF0LWJ1dHRvbiBjbGFzcz1cImRlbGV0ZS1ibG9jXCJcclxuICAgICAgICAgICAgICAgIChjbGljayk9XCJvblJlbW92ZUZpZWxkQmxvY2soJGV2ZW50KVwiPnt7bG9jYWxlPy5ERUxFVEVfQkxPQ0t9fSA8bWF0LWljb24+XHJcbiAgICAgICAgICAgICAgICAgIGRlbGV0ZTwvbWF0LWljb24+PC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9mb3JtPlxyXG48L21haW4+Il19