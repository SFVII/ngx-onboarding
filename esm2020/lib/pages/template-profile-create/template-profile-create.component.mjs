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
    i0.ɵɵlistener("ngModelChange", function TemplateProfileCreateComponent_div_41_ng_container_32_Template_input_ngModelChange_4_listener($event) { i0.ɵɵrestoreView(_r278); const ctx_r277 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r277.currentEditBlock.label = $event); })("ngModelChange", function TemplateProfileCreateComponent_div_41_ng_container_32_Template_input_ngModelChange_4_listener() { i0.ɵɵrestoreView(_r278); const ctx_r279 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r279.onChangeKey(ctx_r279.currentEditBlock)); });
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
    i0.ɵɵlistener("ngModelChange", function TemplateProfileCreateComponent_div_41_ng_container_32_Template_mat_slide_toggle_ngModelChange_15_listener($event) { i0.ɵɵrestoreView(_r278); const ctx_r280 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r280.currentEditBlock.isMandatory = $event); });
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(16, "div", 98)(17, "div", 96)(18, "span");
    i0.ɵɵtext(19);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(20, "mat-slide-toggle", 97);
    i0.ɵɵlistener("ngModelChange", function TemplateProfileCreateComponent_div_41_ng_container_32_Template_mat_slide_toggle_ngModelChange_20_listener($event) { i0.ɵɵrestoreView(_r278); const ctx_r281 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r281.currentEditBlock.isConditional = $event); });
    i0.ɵɵelementEnd()()();
    i0.ɵɵtemplate(21, TemplateProfileCreateComponent_div_41_ng_container_32_ng_container_21_Template, 9, 8, "ng-container", 5);
    i0.ɵɵtemplate(22, TemplateProfileCreateComponent_div_41_ng_container_32_mat_radio_group_22_Template, 2, 4, "mat-radio-group", 99);
    i0.ɵɵelementStart(23, "div", 100);
    i0.ɵɵtemplate(24, TemplateProfileCreateComponent_div_41_ng_container_32_button_24_Template, 4, 2, "button", 101);
    i0.ɵɵelementStart(25, "button", 102);
    i0.ɵɵlistener("click", function TemplateProfileCreateComponent_div_41_ng_container_32_Template_button_click_25_listener($event) { i0.ɵɵrestoreView(_r278); const ctx_r282 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r282.onDuplicatedBlock($event)); });
    i0.ɵɵtext(26);
    i0.ɵɵelementStart(27, "mat-icon");
    i0.ɵɵtext(28, "filter_none");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(29, "button", 103);
    i0.ɵɵlistener("click", function TemplateProfileCreateComponent_div_41_ng_container_32_Template_button_click_29_listener($event) { i0.ɵɵrestoreView(_r278); const ctx_r283 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r283.onRemoveFieldBlock($event)); });
    i0.ɵɵtext(30);
    i0.ɵɵelementStart(31, "mat-icon");
    i0.ɵɵtext(32, " delete ");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r217 = i0.ɵɵnextContext(2);
    let tmp_17_0;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r217.locale == null ? null : ctx_r217.locale.NAME_LABEL);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", ctx_r217.currentEditBlock.label)("disabled", !ctx_r217.currentEditBlock.editable)("ngModelOptions", i0.ɵɵpureFunction0(24, _c0));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitch", ctx_r217.currentEditBlock.type);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", "toggle");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", "checkbox");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", i0.ɵɵpureFunction0(25, _c2).includes(ctx_r217.currentEditBlock.type) ? ctx_r217.currentEditBlock.type : !ctx_r217.currentEditBlock.type);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", "textarea");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r217.locale == null ? null : ctx_r217.locale.REQUIRED);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", ctx_r217.currentEditBlock.isMandatory)("ngModelOptions", i0.ɵɵpureFunction0(26, _c0));
    i0.ɵɵadvance(1);
    i0.ɵɵstyleMap(!ctx_r217.currentEditBlock.editable ? "pointer-events:none;opacity:0.3" : "");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r217.locale == null ? null : ctx_r217.locale.CONDITIONAL_VISIBILITY);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", ctx_r217.currentEditBlock.isConditional)("ngModelOptions", i0.ɵɵpureFunction0(27, _c0));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r217.currentEditBlock == null ? null : ctx_r217.currentEditBlock.isConditional);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r217.currentEditBlock.isConditional && ctx_r217.onGetDefaultValue() && ((tmp_17_0 = ctx_r217.onGetDefaultValue()) == null ? null : tmp_17_0.length) > 0);
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
    const _r285 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 71)(1, "h3");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 72)(4, "mat-form-field", 73)(5, "mat-label");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "mat-select", 74);
    i0.ɵɵlistener("click", function TemplateProfileCreateComponent_div_41_Template_mat_select_click_7_listener() { i0.ɵɵrestoreView(_r285); const ctx_r284 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r284.onOpenTypeDialog(ctx_r284.currentEditBlock)); })("ngModelChange", function TemplateProfileCreateComponent_div_41_Template_mat_select_ngModelChange_7_listener($event) { i0.ɵɵrestoreView(_r285); const ctx_r286 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r286.currentEditBlock.type = $event); })("ngModelChange", function TemplateProfileCreateComponent_div_41_Template_mat_select_ngModelChange_7_listener() { i0.ɵɵrestoreView(_r285); const ctx_r287 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r287.onChangeTypeBlock(ctx_r287.currentEditBlock)); });
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
    i0.ɵɵtemplate(32, TemplateProfileCreateComponent_div_41_ng_container_32_Template, 33, 28, "ng-container", 5);
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
    const item_r289 = ctx.$implicit;
    i0.ɵɵproperty("value", item_r289.value);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(item_r289.value);
} }
function TemplateProfileCreateComponent_div_42_Template(rf, ctx) { if (rf & 1) {
    const _r291 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 71)(1, "h3");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 127)(4, "mat-form-field", 87)(5, "mat-label");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "input", 128);
    i0.ɵɵlistener("ngModelChange", function TemplateProfileCreateComponent_div_42_Template_input_ngModelChange_7_listener() { i0.ɵɵrestoreView(_r291); const ctx_r290 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r290.onChangeCategoryName()); })("ngModelChange", function TemplateProfileCreateComponent_div_42_Template_input_ngModelChange_7_listener($event) { i0.ɵɵrestoreView(_r291); const ctx_r292 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r292.currentEditBlock.name = $event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(8, "mat-form-field", 119)(9, "mat-label");
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "mat-select", 129);
    i0.ɵɵlistener("ngModelChange", function TemplateProfileCreateComponent_div_42_Template_mat_select_ngModelChange_11_listener($event) { i0.ɵɵrestoreView(_r291); const ctx_r293 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r293.currentEditBlock.selector.value = $event); });
    i0.ɵɵtemplate(12, TemplateProfileCreateComponent_div_42_mat_option_12_Template, 2, 2, "mat-option", 121);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(13, "div", 100)(14, "button", 130);
    i0.ɵɵlistener("click", function TemplateProfileCreateComponent_div_42_Template_button_click_14_listener($event) { i0.ɵɵrestoreView(_r291); const ctx_r294 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r294.onAddNewSubLevelFieldBlock($event)); });
    i0.ɵɵtext(15);
    i0.ɵɵelementStart(16, "mat-icon");
    i0.ɵɵtext(17, " device_hub ");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(18, "button", 130);
    i0.ɵɵlistener("click", function TemplateProfileCreateComponent_div_42_Template_button_click_18_listener($event) { i0.ɵɵrestoreView(_r291); const ctx_r295 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r295.onDuplicatedBlock($event)); });
    i0.ɵɵtext(19);
    i0.ɵɵelementStart(20, "mat-icon");
    i0.ɵɵtext(21, "filter_none ");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(22, "button", 103);
    i0.ɵɵlistener("click", function TemplateProfileCreateComponent_div_42_Template_button_click_22_listener($event) { i0.ɵɵrestoreView(_r291); const ctx_r296 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r296.onRemoveFieldBlock($event)); });
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
const PROFILE_CATEGORIES_KEY = 'profileCategories';
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
        this.onCreateKey = (name) => name.replace(/\s/g, '');
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
                data: '',
                panelClass: 'modal-medium'
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
                this.getProfileCategories();
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
    getProfileCategories() {
        if (sessionStorage.getItem(PROFILE_CATEGORIES_KEY)) {
            this.categories = JSON.parse(sessionStorage.getItem(PROFILE_CATEGORIES_KEY));
        }
        else {
            this.categories = this.currentProfil.categories.map((data) => ({ ...data, key: data.key || data.name.replace(/\s/g, '') }));
        }
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
    onChangeKey(editBlok) {
        if (editBlok.editable) {
            editBlok.key = this.onCreateKey(editBlok.label);
        }
    }
    onAddNewField(...params) {
        this.canExit = false;
        const length = params.length;
        const forms = length === 1 ? this.categories[params[0]].forms : length === 2 ? this.categories[params[0]].forms[params[1]].forms : this.categories[params[0]].forms[params[1]].forms[params[2]].forms;
        const data = {
            label: `Label à renommer (${forms.length + 1})`,
            key: this.onCreateKey(`Label à renommer (${forms.length + 1})`),
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
            label: `Label à renommer (${forms.length + 1})`,
            key: `Label à renommer (${forms.length + 1})`,
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
            sessionStorage.removeItem(PROFILE_CATEGORIES_KEY);
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
        this.getConditionValues();
    }
    removeKeyword(keyword, ...params) {
        this.canExit = false;
        const length = params.length;
        const forms = length === 2 ? this.categories[params[0]].forms[params[length - 1]] : length === 3 ? this.categories[params[0]].forms[params[1]].forms[params[length - 1]] : this.categories[params[0]].forms[params[1]].forms[params[2]].forms[params[length - 1]];
        forms.defaultValue = forms.defaultValue.filter((option) => option.value !== keyword.value);
        this.getConditionValues();
    }
    scrollTo(category, i) {
        this.onActiveMenu(category, i);
        if (!category.expandMore) {
            let el = document.getElementById(category.name);
            el?.scrollIntoView({
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
        this.getConditionValues();
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
        this.getConditionValues();
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
        this.saveCategoriesToSessionStorage();
    }
    saveCategoriesToSessionStorage() {
        sessionStorage.setItem(PROFILE_CATEGORIES_KEY, JSON.stringify(this.categories));
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
        this.getConditionValues();
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
        this.getConditionValues();
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
        console.log('conditionsListççççççççççççççççççççççç', conditionsList);
        this.conditionData.all = conditionsList;
    }
    onSelectCondition(level, subLevel, value) {
        console.log('condition', this.conditionData[level]?.find((data) => data.key === value));
        const condition = this.conditionData[level] ? this.conditionData[level]?.find((data) => data.key === value) : null;
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
        if (condition && condition?.forms?.length > 0) {
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
        this.getConditionValues();
        if (condition && condition.location) {
            const location = condition.location;
            if (location?.s0Index >= 0) {
                this.all = this.categories[location.s0Index].key;
            }
            if (location?.s1Index >= 0) {
                const s1 = this.categories[location.s0Index];
                this.s1 = s1?.forms[location.s1Index].key || s1.key;
                this.conditionData.s1 = this.conditionData?.all[location.s0Index]?.forms || [];
            }
            if (location?.s2Index >= 0) {
                const s2 = this.categories[location.s0Index]?.forms[location.s1Index];
                this.s2 = s2?.forms[location.s2Index]?.key || s2.key;
                this.conditionData.s2 = this.conditionData?.all[location.s0Index].forms[location.s1Index].forms || [];
            }
            if (location?.s3Index >= 0) {
                const s3 = this.categories[location.s0Index]?.forms[location.s1Index]?.forms[location.s2Index];
                this.s3 = s3?.forms[location.s3Index]?.key || s3.key;
                this.conditionData.s3 = this.conditionData?.all[location.s0Index].forms[location.s1Index].forms[location.s2Index] || [];
            }
            if (location?.s4Index >= 0) {
                const s4 = this.categories[location.s0Index]?.forms[location.s1Index]?.forms[location.s2Index]?.forms[location.s3Index];
                this.s4 = s4?.forms[location.s4Index]?.key || s4.key;
            }
        }
        else {
            this.all = "";
            this.s1 = '';
            this.s2 = "";
            this.s3 = "";
            this.s4 = "";
            this.conditionData = {
                ...this.conditionData,
                s1: [],
                s2: [],
                s3: [],
                defaultValue: []
            };
        }
        this.isSection = false;
        this.paramsIndex = params;
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
        this.getConditionValues();
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
        this.getConditionValues();
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
        this.getConditionValues();
    }
    removeKeywordBlock(keyword, field) {
        this.canExit = false;
        field.defaultValue = field.defaultValue.filter((option) => option.value !== keyword.value);
        this.getConditionValues();
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
    } }, decls: 43, vars: 14, consts: [[1, "header-create-profile"], [1, "header-create-profile-top"], [3, "click"], [1, "create-profile-action"], ["mat-button", "", "type", "submit", 1, "register-button", 3, "click"], [4, "ngIf"], ["mat-button", "", "type", "submit", 1, "register-button", "live-button", 3, "click"], ["mat-button", "", "type", "submit", 1, "register-button", "live-button", "forward", 3, "disabled", "click"], [1, "create-profile-menus"], ["class", "li-title", 3, "class", "id", "click", 4, "ngFor", "ngForOf"], ["mat-mini-fab", "", "color", "transparent", 3, "click"], [3, "formGroup"], ["cdkDropListGroup", "", 1, "category"], [1, "fields"], ["cdkDropList", "", "id", "categories-id", 1, "fields-inner", "example-list", "mt-10", 3, "cdkDropListData", "cdkDropListDropped", "scroll"], ["class", "category-item section-item", "cdkDrag", "", 3, "id", "paddingBottom", "class", "click", 4, "ngFor", "ngForOf"], [1, "add-button-container", "add-category-button", "add-step"], [2, "background-color", "transparent"], [2, "height", "400px"], [1, "field-property"], ["class", "property-content", 4, "ngIf"], [1, "li-title", 3, "id", "click"], ["cdkDrag", "", 1, "category-item", "section-item", 3, "id", "click"], ["cdkDragHandle", "", 1, "left-action", "move-icons"], ["mat-raised-button", "", 1, "transparent-button", 3, "click"], [1, "drag-icon"], [1, "field-content"], [1, "field-item"], [1, "full-width", "input-category-name"], [1, "sub-category-name"], ["mat-mini-fab", "", "color", "primary", 1, "expand-button", 3, "click"], ["class", "child-list", "cdkDropListGroup", "", 4, "ngIf"], ["cdkDropListGroup", "", 1, "child-list"], [4, "ngFor", "ngForOf"], ["cdkDropList", "", "cdkDropListOrientation", "horizontal'", 1, "field-box", 3, "id", "cdkDropListData", "cdkDropListDropped"], ["cdkDrag", "", 1, "dnd-box"], ["class", "dnd-placeholder", 4, "cdkDragPlaceholder"], [1, "fields-content"], ["class", "button-action", 4, "ngIf"], [1, "fields-container"], ["class", "sub-header", 4, "ngIf"], [3, "field", "length", "i", "j", "blink", "conditionData", "onCheckValue", "onAddKeywordFromInput", "onKeyPress", "onAddNewField", "onRemoveField", "onChangeType", "onRemoveKeyword", "onAddNewSubLevelField", "onExpendMore", "onChangeLabel", "onCheckedChip", "onDrop", "onCheckedDefault", "onEditBlock"], ["class", "child", 4, "ngIf"], ["class", "add-button-container add-button-sub-category", 4, "ngIf"], [1, "dnd-placeholder"], [1, "button-action"], [1, "sub-header"], ["mat-raised-button", "", 1, "transparent-button", "setting", 3, "click"], [1, "setting-icon"], ["mat-mini-fab", "", "color", "primary", 1, "expand-button", 3, "disabled", "click"], [1, "child"], ["class", "child-content", "cdkDropList", "", 3, "cdkDropListData", "cdkDropListDropped", 4, "ngIf"], ["cdkDropList", "", 1, "child-content", 3, "cdkDropListData", "cdkDropListDropped"], ["childList", "cdkDropList"], ["class", "", "style", "margin-bottom: 20px", 3, "id", "width", 4, "ngFor", "ngForOf"], [1, "", 2, "margin-bottom", "20px", 3, "id"], ["cdkDrag", ""], ["class", "button-action child-2-background", 4, "ngIf"], [3, "field", "length", "i", "blink", "j", "conditionData", "onCheckValue", "onAddKeywordFromInput", "onKeyPress", "onAddNewField", "onRemoveField", "onChangeType", "onRemoveKeyword", "onAddNewSubLevelField", "onExpendMore", "onChangeLabel", "onCheckedChip", "onDrop", "onCheckedDefault", "onEditBlock"], ["class", "add-button-sub-category", 4, "ngIf"], [1, "button-action", "child-2-background"], ["type", "text", "required", "", "placeholder", "Saisir le nom de la sous cat\u00E9gorie", 1, "full-width", "input-category-name", 3, "readonly", "ngModel", "ngModelOptions", "ngModelChange"], ["class", "", 3, "id", "width", 4, "ngFor", "ngForOf"], [1, "", 3, "id"], ["class", "button-action child-3-background", 4, "ngIf"], [3, "field", "length", "blink", "i", "j", "conditionData", "onCheckValue", "onAddKeywordFromInput", "onKeyPress", "onAddNewField", "onRemoveField", "onChangeType", "onRemoveKeyword", "onAddNewSubLevelField", "onExpendMore", "onChangeLabel", "onCheckedChip", "onDrop", "onCheckedDefault", "onEditBlock"], [1, "button-action", "child-3-background"], [1, "add-button-sub-category"], ["mat-raised-button", "", "color", "primary", 2, "margin", "10px auto", 3, "click"], [1, "add-button-container", "add-button-sub-category"], ["mat-raised-button", "", "color", "primary", 1, "add-button", 2, "margin", "10px auto", "padding", "10px 0", 3, "disabled", "click"], [1, "property-content"], [1, "property-content-inner", 2, "width", "100%"], ["appearance", "outline", 1, "form-field", "mat-select", "full-width", 2, "cursor", "pointer"], ["disabled", "true", "required", "", 1, "select-type-class", 3, "ngModel", "ngModelOptions", "click", "ngModelChange"], ["value", "text"], ["value", "textarea"], ["value", "radio"], ["value", "select"], ["value", "toggle"], ["value", "checkbox"], ["value", "checkbox_multiple"], ["value", "email"], ["value", "password"], ["value", "date"], ["value", "tel"], ["value", "none"], ["appearance", "outline", 1, "form-field", "full-width"], ["type", "text", "matInput", "", "required", "", "placeholder", "", 3, "ngModel", "disabled", "ngModelOptions", "ngModelChange"], [3, "ngSwitch"], ["class", "flex-auto", "style", "display: flex;align-items: flex-end;margin: 10px 0;", 4, "ngSwitchCase"], ["class", "flex-auto", 4, "ngSwitchCase"], ["class", "flex-auto full-width", "appearance", "outline", 4, "ngSwitchCase"], ["class", "form-field full-width", "appearance", "outline", 4, "ngSwitchCase"], ["class", "form-field full-width", "appearance", "outline", 3, "opacity", 4, "ngSwitchDefault"], [1, "mandatory", "top-10", "bottom-10"], [1, "toogle-button"], ["color", "#6FE8D7", 3, "ngModel", "ngModelOptions", "ngModelChange"], [1, "mandatory", "top-10"], ["aria-labelledby", "example-radio-group-label", "class", "example-radio-group", 3, "ngModel", "ngModelOptions", "ngModelChange", 4, "ngIf"], [1, "bloc-action"], ["mat-button", "", 3, "disabled", "click", 4, "ngIf"], ["mat-button", "", 3, "disabled", "click"], ["mat-button", "", 1, "delete-bloc", 3, "disabled", "click"], [1, "flex-auto", 2, "display", "flex", "align-items", "flex-end", "margin", "10px 0"], ["color", "#6FE8D7", 1, "form-field", 3, "ngModel", "ngModelOptions", "ngModelChange"], [2, "margin-left", "10px"], [1, "flex-auto"], [1, "form-field", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["appearance", "outline", 1, "flex-auto", "full-width"], ["cdkDropList", "", "aria-label", "Video keywords; let index=index", "multiple", "", "selectable", "", 3, "cdkDropListData", "cdkDropListDropped"], ["childList", "cdkDropList", "chipList", ""], ["style", "min-height: 25px;width: auto;", "cdkDrag", "", 3, "selected", "value", "removable", "dblclick", "click", "removed", 4, "ngFor", "ngForOf"], ["placeholder", "add...", 3, "matChipInputFor", "matChipInputAddOnBlur", "matChipInputSeparatorKeyCodes", "ngModel", "ngModelOptions", "matChipInputTokenEnd", "keyup", "ngModelChange"], ["chipsInput", ""], ["cdkDrag", "", 2, "min-height", "25px", "width", "auto", 3, "selected", "value", "removable", "dblclick", "click", "removed"], ["matChipRemove", ""], ["type", "text", "matInput", "", "placeholder", "Description...", 3, "ngModelOptions", "ngModel", "ngModelChange"], ["matInput", "", "placeholder", "", 3, "type", "disabled", "ngModelOptions", "ngModel", "ngModelChange"], ["appearance", "outline", 1, "form-field", "mat-select", "full-width"], [3, "ngModel", "ngModelOptions", "ngModelChange", "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], ["class", "form-field mat-select full-width", "appearance", "outline", 4, "ngIf"], [3, "value"], ["aria-labelledby", "example-radio-group-label", 1, "example-radio-group", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["class", "example-radio-button", "style", "margin-right: 10px", 3, "value", 4, "ngFor", "ngForOf"], [1, "example-radio-button", 2, "margin-right", "10px", 3, "value"], [1, "property-content-inner"], ["type", "text", "matInput", "", "required", "", "placeholder", "", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["required", "", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["mat-button", "", 3, "click"]], template: function TemplateProfileCreateComponent_Template(rf, ctx) { if (rf & 1) {
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
        args: [{ selector: "onboarding-create-profile-template", template: "<main>\r\n  <div class=\"header-create-profile\">\r\n    <div class=\"header-create-profile-top\">\r\n      <h3>\r\n        <span>{{ form.get(\"Name\").value }}</span>\r\n        <mat-icon (click)=\"openDialog()\">edit</mat-icon>\r\n      </h3>\r\n      <div class=\"create-profile-action\">\r\n        <button mat-button class=\"register-button\" type=\"submit\" (click)=\"onSubmit(false)\">\r\n          <lib-loading-page *ngIf=\"loading && !isSubmitted\"></lib-loading-page>{{draftLabel}}\r\n        </button>\r\n        <button mat-button class=\"register-button live-button\" type=\"submit\" (click)=\"onSubmit(true)\">\r\n          <lib-loading-page *ngIf=\"loading && isSubmitted\"></lib-loading-page>\r\n          {{liveLabel}}\r\n        </button>\r\n\r\n        <button [disabled]=\"currentCanceledIndex < 0 || historics.length===0\" mat-button\r\n          class=\"register-button live-button forward\" type=\"submit\" (click)=\"onCancel(true)\">\r\n          <mat-icon>rotate_left</mat-icon>\r\n        </button>\r\n        <button [disabled]=\"currentCanceledIndex===historics.length-1 || currentCanceledIndex===null\" mat-button\r\n          class=\"register-button live-button forward\" type=\"submit\" (click)=\"onCancel(false)\">\r\n          <mat-icon>rotate_right</mat-icon>\r\n        </button>\r\n      </div>\r\n    </div>\r\n    <div class=\"create-profile-menus\">\r\n      <ul>\r\n        <li class=\"li-title\" [class]=\"editIndex === i ? 'active' : ''\" *ngFor=\"let cat of categories; let i = index\"\r\n          (click)=\"scrollTo(cat, i)\" [id]=\"cat.name+'x'\">\r\n          <!-- (click)=\"onActiveMenu(cat, i,true)\" [ngxScrollTo]=\"'#' + cat.name\" [id]=\"cat.name+'x'\"> -->\r\n          {{ cat.name }}\r\n        </li>\r\n        <li>\r\n          <button mat-mini-fab color=\"transparent\" (click)=\"onAddNewCategory($event)\">\r\n            <mat-icon>add</mat-icon>\r\n          </button>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n  <form [formGroup]=\"form\">\r\n    <div class=\"category\" cdkDropListGroup>\r\n      <div class=\"fields\">\r\n        <div cdkDropList (cdkDropListDropped)=\"drop($event)\" [cdkDropListData]=\"categories\"\r\n          class=\"fields-inner example-list mt-10\" id=\"categories-id\" (scroll)=\"onScroll($event)\">\r\n          <section class=\"category-item section-item\" *ngFor=\"let category of categories; let i = index\" cdkDrag\r\n            [id]=\"category.name\" [style.paddingBottom]=\"category.expandMore ? '50px' : '10px'\"\r\n            [class]=\"editIndex === i ? 'active' : ''\" (click)=\"scrollTo(category, i)\">\r\n            <!-- [class]=\"editIndex === i ? 'active' : ''\" [ngxScrollTo]=\"'#' + category.name\"> -->\r\n            <div class=\"left-action move-icons\" cdkDragHandle>\r\n              <button class=\"transparent-button\" mat-raised-button\r\n                (click)=\"$event.preventDefault();$event.stopPropagation()\">\r\n                <mat-icon class=\"drag-icon\">drag_indicator</mat-icon>\r\n              </button>\r\n            </div>\r\n            <div class=\"field-content\">\r\n              <div class=\"field-item\">\r\n                <!-- <div class=\"field-item\" (click)=\" onExpendMore({ event: $event, field: category }, i)\"> -->\r\n                <div>\r\n                  <p class=\"full-width input-category-name\">\r\n                    {{ category.name }}\r\n                  </p>\r\n                  <p class=\"sub-category-name\">\r\n                    {{locale?.CATEGORY_SUBTITLE}} {{ catNameStart(category.name) ? \"l'\" +\r\n                    category.name : category.name }}\r\n                  </p>\r\n                </div>\r\n                <button mat-mini-fab color=\"primary\" class=\"expand-button\"\r\n                  (click)=\"$event.stopPropagation();onExpendMore({ event: $event, field: category }, i)\">\r\n                  <mat-icon *ngIf=\"!category.expandMore\">chevron_right</mat-icon>\r\n                  <mat-icon *ngIf=\"category.expandMore\">expand_more</mat-icon>\r\n                </button>\r\n              </div>\r\n              <div class=\"child-list\" *ngIf=\"category.forms\" cdkDropListGroup>\r\n                <ng-container *ngIf=\"category.expandMore\">\r\n                  <ng-container *ngFor=\"let field of category.forms; let j = index\">\r\n                    <div class=\"field-box\" [id]=\"field.key\" cdkDropList cdkDropListOrientation=\"horizontal'\"\r\n                      (cdkDropListDropped)=\"dropField($event)\"\r\n                      [cdkDropListData]=\"{ field: field, index: j, category: category }\"\r\n                      [style.width]=\"field.forms && field.forms.length>0 ? '100%' : fieldWidth(field.type,category.forms.length,j)\">\r\n                      <div cdkDrag class=\"dnd-box\">\r\n                        <div class=\"dnd-placeholder\" *cdkDragPlaceholder></div>\r\n                        <div class=\"fields-content\"\r\n                          [class]=\"field.forms && field.forms.length>0 ? 'sub-category-forms' :''\">\r\n                          <div class=\"button-action\" *ngIf=\"field.forms\">\r\n                            <button class=\"transparent-button\" mat-raised-button\r\n                              (click)=\"$event.stopPropagation();$event.preventDefault()\">\r\n                              <mat-icon class=\"drag-icon\">drag_indicator</mat-icon>\r\n                            </button>\r\n                          </div>\r\n                          <div class=\"fields-container\">\r\n                            <div class=\"sub-header\" *ngIf=\"field.forms\">\r\n                              <div class=\"field-item\">\r\n                                <div>\r\n                                  <p class=\"full-width input-category-name\">\r\n                                    {{ field.label }}\r\n                                  </p>\r\n                                  <p class=\"sub-category-name\">\r\n                                    {{locale?.CATEGORY_SUBTITLE}}\r\n                                    {{ catNameStart(field.label) ? \"l'\" + field.label : field.label }}\r\n                                  </p>\r\n                                </div>\r\n                                <button class=\"transparent-button setting\" mat-raised-button\r\n                                  (click)=\"$event.stopPropagation();onEditBlock(field, i, j)\">\r\n                                  <mat-icon class=\"setting-icon\">settings</mat-icon>\r\n                                </button>\r\n                                <button class=\"expand-button\" [disabled]=\"!(field.forms && field.forms.length > 0)\"\r\n                                  [style.opacity]=\"field.forms && field.forms.length > 0 ? 1 : 0\" mat-mini-fab\r\n                                  color=\"primary\"\r\n                                  (click)=\"$event.stopPropagation();onExpendMore({ event: $event, field: field }, i, j)\">\r\n                                  <mat-icon *ngIf=\"!field.expandMore\">expand_less </mat-icon>\r\n                                  <mat-icon *ngIf=\"field.expandMore\">expand_more </mat-icon>\r\n                                </button>\r\n                              </div>\r\n                            </div>\r\n                            <lib-sub-category [field]=\"field\" [length]=\"category?.forms?.length\" [i]=\"i\" [j]=\"j\"\r\n                              [blink]=\"checkBlink(j,1)===newFieldIndex\" (onCheckValue)=\"onCheckValue($event)\"\r\n                              (onAddKeywordFromInput)=\"addKeywordFromInput($event.event, $event.prev, i, j)\"\r\n                              (onKeyPress)=\"onKeyPress($event.event, i, j)\" (onAddNewField)=\"onAddNewField(i)\"\r\n                              (onRemoveField)=\"onRemoveField(i, j)\" (onChangeType)=\"onChangeType(field.type, i, j)\"\r\n                              (onRemoveKeyword)=\"removeKeyword($event.event, i, j)\"\r\n                              (onAddNewSubLevelField)=\"onAddNewSubLevelField(i, j)\"\r\n                              (onExpendMore)=\"onExpendMore($event, i, j)\" (onChangeLabel)=\"onChangeLabel($event, i, j)\"\r\n                              (onCheckedChip)=\"onCheckedChip($event, i, j)\" (onDrop)=\"drop($event)\"\r\n                              (onCheckedDefault)=\"onCheckedDefault($event, i, j)\"\r\n                              (onEditBlock)=\"onEditBlock(field, i, j)\" [conditionData]=\"conditionData\">\r\n                              <div *ngIf=\"field.expandMore\" class=\"child\">\r\n                                <div #childList=\"cdkDropList\" class=\"child-content\" *ngIf=\"field.forms\"\r\n                                  [cdkDropListData]=\"field.forms\" cdkDropList (cdkDropListDropped)=\"drop($event)\">\r\n                                  <div class=\"\" style=\"margin-bottom: 20px\"\r\n                                    *ngFor=\"let child of field.forms; let k = index\" [id]=\"child.key\"\r\n                                    [style.width]=\"child.forms && child.forms.length>0 ? '100%' : fieldWidth(child.type,field.forms.length,k)\">\r\n                                    <div cdkDrag>\r\n                                      <div class=\"fields-content\"\r\n                                        [class]=\"child.forms && child.forms.length>0 ? 'sub-category-forms' :''\">\r\n                                        <div class=\"button-action child-2-background\"\r\n                                          *ngIf=\"child.forms && child.forms.length>0\">\r\n                                          <button class=\"transparent-button\" mat-raised-button\r\n                                            (click)=\"$event.stopPropagation();$event.preventDefault()\">\r\n                                            <mat-icon class=\"drag-icon\"> drag_indicator</mat-icon>\r\n                                          </button>\r\n                                        </div>\r\n                                        <div class=\"fields-container\">\r\n                                          <div class=\"sub-header\" *ngIf=\"child.forms && child.forms.length>0\">\r\n                                            <div class=\"field-item\">\r\n                                              <div>\r\n                                                <input class=\"full-width input-category-name\" type=\"text\" required\r\n                                                  [readonly]=\"categories.length < 4 || !category.editable\"\r\n                                                  [readonly]=\"!category.editable\" [(ngModel)]=\"child.label\"\r\n                                                  [ngModelOptions]=\"{ standalone: true }\"\r\n                                                  placeholder=\"Saisir le nom de la sous cat\u00E9gorie\" />\r\n                                                <p class=\"sub-category-name\">\r\n                                                  {{locale?.CATEGORY_SUBTITLE}}\r\n                                                  {{ catNameStart(child.label) ? \"l'\" + child.label : child.label }}\r\n                                                </p>\r\n                                              </div>\r\n                                              <button class=\"transparent-button setting\" mat-raised-button\r\n                                                (click)=\"$event.stopPropagation();onEditBlock(child, i, j, k)\">\r\n                                                <mat-icon class=\"setting-icon\">settings</mat-icon>\r\n                                              </button>\r\n                                              <button class=\"expand-button\"\r\n                                                [disabled]=\"!(child.forms && child.forms.length > 0)\"\r\n                                                [style.opacity]=\"child.forms && child.forms.length > 0 ? 1 : 0\"\r\n                                                mat-mini-fab color=\"primary\"\r\n                                                (click)=\"$event.stopPropagation();onExpendMore({ event: $event, field: child }, i, j, k)\">\r\n                                                <mat-icon *ngIf=\"!child.expandMore\"> expand_less </mat-icon>\r\n                                                <mat-icon *ngIf=\"child.expandMore\"> expand_more </mat-icon>\r\n                                              </button>\r\n                                            </div>\r\n                                          </div>\r\n                                          <lib-sub-category [field]=\"child\" [length]=\"field?.forms?.length\" [i]=\"j\"\r\n                                            [blink]=\"checkBlink(k,2)===newFieldIndex\" [j]=\"k\"\r\n                                            (onCheckValue)=\"onCheckValue($event)\"\r\n                                            (onAddKeywordFromInput)=\"addKeywordFromInput($event.event, $event.prev, i, j, k)\"\r\n                                            (onKeyPress)=\"onKeyPress($event.event, i, j, k)\"\r\n                                            (onAddNewField)=\"onAddNewField(i, j)\"\r\n                                            (onRemoveField)=\"onRemoveField(i, j, k)\"\r\n                                            (onChangeType)=\"onChangeType(child.type, i, j, k)\"\r\n                                            (onRemoveKeyword)=\"removeKeyword($event.event, i, j, k)\"\r\n                                            (onAddNewSubLevelField)=\"onAddNewSubLevelField(i, j, k)\"\r\n                                            (onExpendMore)=\"onExpendMore($event, i, j, k)\"\r\n                                            (onChangeLabel)=\"onChangeLabel($event, i, j, k)\"\r\n                                            (onCheckedChip)=\"onCheckedChip($event, i, j, k)\" (onDrop)=\"drop($event)\"\r\n                                            (onCheckedDefault)=\"onCheckedDefault($event, i, j, k)\"\r\n                                            [conditionData]=\"conditionData\" (onEditBlock)=\"onEditBlock(child, i, j, k)\">\r\n                                            <div *ngIf=\"child.expandMore\" class=\"child\">\r\n                                              <div class=\"child-content\" #childList=\"cdkDropList\"\r\n                                                *ngIf=\"child.forms && child.forms.length>0\"\r\n                                                [cdkDropListData]=\"child.forms\" cdkDropList\r\n                                                (cdkDropListDropped)=\"drop($event)\">\r\n                                                <div class=\"\" *ngFor=\"let c2 of child.forms; let l = index\"\r\n                                                  [id]=\"c2.key\"\r\n                                                  [style.width]=\"c2.forms && c2.forms.length>0 ? '100%' : fieldWidth(c2.type,child.forms.length,l)\">\r\n                                                  <div cdkDrag>\r\n                                                    <div class=\"fields-content\"\r\n                                                      [class]=\"c2.forms && c2.forms.length>0 ? 'sub-category-forms' :''\">\r\n                                                      <div class=\"button-action child-3-background\"\r\n                                                        *ngIf=\"c2.forms && c2.forms.length>0\">\r\n                                                        <button class=\"transparent-button\" mat-raised-button\r\n                                                          (click)=\"$event.stopPropagation()\">\r\n                                                          <mat-icon class=\"drag-icon\"> drag_indicator </mat-icon>\r\n                                                        </button>\r\n                                                      </div>\r\n                                                      <div class=\"fields-container\">\r\n                                                        <lib-sub-category [field]=\"c2\" [length]=\"child?.forms?.length\"\r\n                                                          [blink]=\"checkBlink(l,3)===newFieldIndex\" [i]=\"k\" [j]=\"l\"\r\n                                                          (onCheckValue)=\"onCheckValue($event)\"\r\n                                                          (onAddKeywordFromInput)=\"addKeywordFromInput($event.event, $event.prev, i, j, k, l)\"\r\n                                                          (onKeyPress)=\"onKeyPress($event.event, i, j, k, l)\"\r\n                                                          (onAddNewField)=\"onAddNewField(i, j, k)\"\r\n                                                          (onRemoveField)=\"onRemoveField(i, j, k, l)\"\r\n                                                          (onChangeType)=\"onChangeType(c2.type, i, j, k, l)\"\r\n                                                          (onRemoveKeyword)=\"removeKeyword($event.event, i, j, k, l)\"\r\n                                                          (onAddNewSubLevelField)=\"onAddNewSubLevelField(i, j, k, l)\"\r\n                                                          (onExpendMore)=\"onExpendMore($event, i, j, k, l)\"\r\n                                                          (onChangeLabel)=\"onChangeLabel($event, i, j, k, l)\"\r\n                                                          (onCheckedChip)=\"onCheckedChip($event, i, j, k, l)\"\r\n                                                          (onDrop)=\"drop($event)\"\r\n                                                          (onCheckedDefault)=\"onCheckedDefault($event, i, j, k, l)\"\r\n                                                          (onEditBlock)=\"onEditBlock(c2, i, j, k, l)\"\r\n                                                          [conditionData]=\"conditionData\">\r\n                                                          <div class=\"child\"></div>\r\n                                                        </lib-sub-category>\r\n                                                      </div>\r\n                                                    </div>\r\n                                                  </div>\r\n                                                  <div class=\"add-button-sub-category\"\r\n                                                    *ngIf=\"child?.forms?.length - 1 === l\">\r\n                                                    <button style=\"margin: 10px auto\" mat-raised-button color=\"primary\"\r\n                                                      (click)=\"$event.stopPropagation();onAddNewField(i, j, k)\">\r\n                                                      <span>{{locale?.ADD_FIELD}}</span>\r\n                                                      <mat-icon> add </mat-icon>\r\n                                                    </button>\r\n                                                  </div>\r\n                                                </div>\r\n                                              </div>\r\n                                            </div>\r\n                                          </lib-sub-category>\r\n                                        </div>\r\n                                      </div>\r\n                                    </div>\r\n                                    <div class=\"add-button-sub-category\" *ngIf=\"field?.forms?.length - 1 === k\">\r\n                                      <button style=\"margin: 10px auto\" mat-raised-button color=\"primary\"\r\n                                        (click)=\"$event.stopPropagation();onAddNewField(i, j)\">\r\n                                        <span>{{locale?.ADD_FIELD}}</span>\r\n                                        <mat-icon>add</mat-icon>\r\n                                      </button>\r\n                                    </div>\r\n                                  </div>\r\n                                </div>\r\n                              </div>\r\n                            </lib-sub-category>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"add-button-container add-button-sub-category\"\r\n                        *ngIf=\"category?.forms?.length - 1 === j\">\r\n                        <button style=\"margin: 10px auto; padding:10px 0\" class=\"add-button\"\r\n                          [disabled]=\"category?.forms?.length - 1 !== j\"\r\n                          [style.opacity]=\"category?.forms?.length - 1 === j ? 1 : 0\" mat-raised-button color=\"primary\"\r\n                          (click)=\"$event.stopPropagation();onAddNewField(i)\">\r\n                          <span>{{locale?.ADD_FIELD}}</span>\r\n                          <mat-icon>add</mat-icon>\r\n                        </button>\r\n                      </div>\r\n                    </div>\r\n                  </ng-container>\r\n                </ng-container>\r\n              </div>\r\n            </div>\r\n          </section>\r\n\r\n          <div class=\"add-button-container add-category-button add-step\">\r\n            <button (click)=\"onAddNewCategory($event)\">\r\n              {{locale?.ADD_STEP}}\r\n              <mat-icon>add</mat-icon>\r\n            </button>\r\n          </div>\r\n          <section style=\"background-color: transparent\">\r\n            <div style=\"height: 400px;\"></div>\r\n          </section>\r\n        </div>\r\n      </div>\r\n      <div class=\"field-property\">\r\n        <div class=\"property-content\" *ngIf=\"isBlock && currentEditBlock\">\r\n          <h3>{{locale?.SETTING_OF_BLOCK}} {{ currentEditBlock.label }}</h3>\r\n          <div class=\"property-content-inner\" style=\"width: 100%;\">\r\n            <mat-form-field class=\"form-field mat-select full-width\" style=\"cursor: pointer\" appearance=\"outline\">\r\n              <mat-label>{{locale?.TYPE_OF_BLOCK}}</mat-label>\r\n              <mat-select (click)=\"onOpenTypeDialog(currentEditBlock)\" disabled=\"true\" required\r\n                [(ngModel)]=\"currentEditBlock.type\" (ngModelChange)=\"onChangeTypeBlock(currentEditBlock)\"\r\n                [ngModelOptions]=\"{ standalone: true }\" class=\"select-type-class\">\r\n                <mat-option value=\"text\">Text(80)</mat-option>\r\n                <mat-option value=\"textarea\">Text(80+)</mat-option>\r\n                <mat-option value=\"radio\">Radio</mat-option>\r\n                <mat-option value=\"select\">Selector</mat-option>\r\n                <mat-option value=\"toggle\">Toggle</mat-option>\r\n                <mat-option value=\"checkbox\">Checkbox</mat-option>\r\n                <mat-option value=\"checkbox_multiple\">Checkbox multiple</mat-option>\r\n                <mat-option value=\"email\">Email</mat-option>\r\n                <mat-option value=\"password\">Password</mat-option>\r\n                <mat-option value=\"date\">Date</mat-option>\r\n                <mat-option value=\"tel\">Phone</mat-option>\r\n                <mat-option value=\"none\">None</mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n            <ng-container *ngIf=\"currentEditBlock.type!=='none'\">\r\n              <mat-form-field class=\"form-field full-width\" appearance=\"outline\">\r\n                <mat-label>{{locale?.NAME_LABEL}}</mat-label>\r\n                <input type=\"text\" [(ngModel)]=\"currentEditBlock.label\" [disabled]=\"!currentEditBlock.editable\"\r\n                  (ngModelChange)=\"onChangeKey(currentEditBlock)\" [ngModelOptions]=\"{ standalone: true }\" matInput\r\n                  required placeholder=\"\" />\r\n              </mat-form-field>\r\n              <ng-container [ngSwitch]=\"currentEditBlock.type\">\r\n                <div *ngSwitchCase=\"'toggle'\" class=\"flex-auto\"\r\n                  style=\"display: flex;align-items: flex-end;margin: 10px 0;\">\r\n                  <mat-slide-toggle class=\"form-field\" color=\"#6FE8D7\" [(ngModel)]=\"currentEditBlock.defaultValue\"\r\n                    [ngModelOptions]=\"{ standalone: true }\">\r\n                  </mat-slide-toggle>\r\n                  <span style=\"margin-left: 10px;\">{{locale?.DEFAULT_VALUE}}</span>\r\n                </div>\r\n                <div *ngSwitchCase=\"'checkbox'\" class=\"flex-auto\">\r\n                  <mat-checkbox class=\"form-field\" [(ngModel)]=\"currentEditBlock.value\"\r\n                    [ngModelOptions]=\"{ standalone: true }\">\r\n                    {{locale?.DEFAULT_CHECKED}}\r\n                  </mat-checkbox>\r\n                </div>\r\n                <mat-form-field *ngSwitchCase=\"\r\n                                ['select', 'radio', 'checkbox_multiple'].includes(currentEditBlock.type) ? currentEditBlock.type : !currentEditBlock.type\r\n                              \" class=\"flex-auto full-width\" appearance=\"outline\">\r\n                  <mat-label> {{locale?.DEFAULT_VALUE}} </mat-label>\r\n                  <mat-chip-list #childList=\"cdkDropList\" [cdkDropListData]=\"currentEditBlock.defaultValue\" cdkDropList\r\n                    (cdkDropListDropped)=\"drop($event)\" #chipList aria-label=\"Video keywords; let index=index\" multiple\r\n                    selectable>\r\n                    <mat-chip style=\"min-height: 25px;width: auto;\" *ngFor=\"let option of currentEditBlock.defaultValue\"\r\n                      [selected]=\"option.checked\" [value]=\"option.value\" [removable]=\"true\"\r\n                      (dblclick)=\"onCheckedChipBlock(option, currentEditBlock)\" (click)=\"onEditChip(option)\"\r\n                      (removed)=\"removeKeywordBlock(option, currentEditBlock)\" cdkDrag>\r\n                      {{ option.value }}\r\n                      <mat-icon matChipRemove>{{locale?.CANCEL}}</mat-icon>\r\n                    </mat-chip>\r\n                    <input #chipsInput placeholder=\"add...\" [matChipInputFor]=\"chipList\" [matChipInputAddOnBlur]=\"true\"\r\n                      (matChipInputTokenEnd)=\"addKeywordFromInputBlock($event, currentEditBlock, prevValue)\"\r\n                      [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\"\r\n                      (keyup)=\"onKeyUpChip($event, currentEditBlock)\" [(ngModel)]=\"currentChip\"\r\n                      [ngModelOptions]=\"{ standalone: true }\" />\r\n                  </mat-chip-list>\r\n                </mat-form-field>\r\n                <mat-form-field *ngSwitchCase=\"'textarea'\" class=\"form-field full-width\" appearance=\"outline\">\r\n                  <mat-label>{{locale?.DEFAULT_VALUE}}</mat-label>\r\n                  <input type=\"text\" matInput [ngModelOptions]=\"{ standalone: true }\"\r\n                    [(ngModel)]=\"currentEditBlock.defaultValue\" placeholder=\"Description...\" />\r\n                </mat-form-field>\r\n\r\n                <mat-form-field *ngSwitchDefault class=\"form-field full-width\"\r\n                  [style.opacity]=\"currentEditBlock.type !== 'tel' ? 1 : 0\" appearance=\"outline\">\r\n                  <mat-label>{{locale?.DEFAULT_VALUE}}</mat-label>\r\n                  <input [type]=\"currentEditBlock.type\" [disabled]=\"currentEditBlock.type === 'tel'\" matInput\r\n                    [ngModelOptions]=\"{ standalone: true }\" [(ngModel)]=\"currentEditBlock.defaultValue\"\r\n                    placeholder=\"\" />\r\n                </mat-form-field>\r\n              </ng-container>\r\n\r\n              <div class=\"mandatory top-10 bottom-10\">\r\n                <div class=\"toogle-button\">\r\n                  <span>{{locale?.REQUIRED}}</span>\r\n                  <mat-slide-toggle color=\"#6FE8D7\" [(ngModel)]=\"currentEditBlock.isMandatory\"\r\n                    [ngModelOptions]=\"{ standalone: true }\">\r\n                  </mat-slide-toggle>\r\n                </div>\r\n              </div>\r\n              <div class=\"mandatory top-10\" [style]=\"!currentEditBlock.editable ? 'pointer-events:none;opacity:0.3':''\">\r\n                <div class=\"toogle-button\">\r\n                  <span>{{locale?.CONDITIONAL_VISIBILITY}}</span>\r\n                  <mat-slide-toggle color=\"#6FE8D7\" [(ngModel)]=\"currentEditBlock.isConditional\"\r\n                    [ngModelOptions]=\"{ standalone: true }\">\r\n                  </mat-slide-toggle>\r\n                </div>\r\n              </div>\r\n              <ng-container *ngIf=\"currentEditBlock?.isConditional\">\r\n                <mat-form-field class=\"form-field mat-select full-width\" appearance=\"outline\">\r\n                  <mat-label>{{locale?.SELECT_CATEGORY}}</mat-label>\r\n                  <mat-select [(ngModel)]=\"all\" [ngModelOptions]=\"{ standalone: true }\"\r\n                    (selectionChange)=\"onSelectCondition('all','s1', $event.value)\">\r\n                    <mat-option *ngFor=\"let item of conditionData.all\" [value]=\"item.key\">{{\r\n                      item.label }}\r\n                    </mat-option>\r\n                  </mat-select>\r\n                </mat-form-field>\r\n                <mat-form-field *ngIf=\"conditionData.s1?.length > 0\" class=\"form-field mat-select full-width\"\r\n                  appearance=\"outline\">\r\n                  <mat-label>{{locale?.SELECT_SUB_CATEGORY}} (s1)</mat-label>\r\n                  <mat-select [(ngModel)]=\"s1\" [ngModelOptions]=\"{ standalone: true }\"\r\n                    (selectionChange)=\"onSelectCondition('s1','s2', $event.value)\">\r\n                    <mat-option *ngFor=\"let item of conditionData.s1\" [value]=\"item.key\">{{\r\n                      item.label }}\r\n                    </mat-option>\r\n                  </mat-select>\r\n                </mat-form-field>\r\n                <mat-form-field class=\"form-field mat-select full-width\" *ngIf=\"conditionData.s2?.length>0\"\r\n                  appearance=\"outline\">\r\n                  <mat-label>{{locale?.SELECT_SUB_CATEGORY}} (s2)</mat-label>\r\n                  <mat-select [(ngModel)]=\"s2\" [ngModelOptions]=\"{ standalone: true }\"\r\n                    (selectionChange)=\"onSelectCondition('s2','s3', $event.value)\">\r\n                    <mat-option *ngFor=\"let item of conditionData.s2\" [value]=\"item.key\">{{\r\n                      item.label }}\r\n                    </mat-option>\r\n                  </mat-select>\r\n                </mat-form-field>\r\n                <mat-form-field class=\"form-field mat-select full-width\" *ngIf=\"conditionData.s3?.length>0\"\r\n                  appearance=\"outline\">\r\n                  <mat-label>{{locale?.SELECT_SUB_CATEGORY}} (s3)</mat-label>\r\n                  <mat-select [(ngModel)]=\"s3\" [ngModelOptions]=\"{ standalone: true }\"\r\n                    (selectionChange)=\"onSelectCondition('s3','s4', $event.value)\">\r\n                    <mat-option *ngFor=\"let item of conditionData.s3\" [value]=\"item.key\">{{\r\n                      item.label }}\r\n                    </mat-option>\r\n                  </mat-select>\r\n                </mat-form-field>\r\n              </ng-container>\r\n\r\n              <mat-radio-group\r\n                *ngIf=\"currentEditBlock.isConditional && onGetDefaultValue() && onGetDefaultValue()?.length>0\"\r\n                aria-labelledby=\"example-radio-group-label\" class=\"example-radio-group\"\r\n                [(ngModel)]=\"currentEditBlock.condition.value\" [ngModelOptions]=\"{ standalone: true }\">\r\n                <mat-radio-button class=\"example-radio-button\" style=\"margin-right: 10px\"\r\n                  *ngFor=\"let item of onGetDefaultValue()\" [value]=\"item.value\">\r\n                  {{ item.value }}\r\n                </mat-radio-button>\r\n              </mat-radio-group>\r\n              <div class=\"bloc-action\">\r\n                <button *ngIf=\"paramsIndex.length<4\" mat-button [disabled]=\"!currentEditBlock.editable\"\r\n                  (click)=\"onAddNewSubLevelFieldBlock($event)\">{{locale?.SUB_CATEGORY}} <mat-icon>device_hub\r\n                  </mat-icon></button>\r\n                <button mat-button [disabled]=\"!currentEditBlock.editable\"\r\n                  (click)=\"onDuplicatedBlock($event)\">{{locale?.DUPLICATE_BLOCK}}<mat-icon>filter_none</mat-icon>\r\n                </button>\r\n                <button mat-button [disabled]=\"!currentEditBlock.editable\" class=\"delete-bloc\"\r\n                  (click)=\"onRemoveFieldBlock($event)\">{{locale?.DELETE_BLOCK}} <mat-icon>\r\n                    delete </mat-icon></button>\r\n              </div>\r\n            </ng-container>\r\n          </div>\r\n        </div>\r\n        <div class=\"property-content\" *ngIf=\"isSection && currentEditBlock\">\r\n          <h3>{{locale?.SECTION_SETTING}} {{ currentEditBlock.name }}</h3>\r\n          <div class=\"property-content-inner\">\r\n            <mat-form-field class=\"form-field full-width\" appearance=\"outline\">\r\n              <mat-label>{{locale?.SECTION_NAME}}</mat-label>\r\n              <input (ngModelChange)=\"onChangeCategoryName()\" type=\"text\" matInput required placeholder=\"\"\r\n                [(ngModel)]=\"currentEditBlock.name\" [ngModelOptions]=\"{ standalone: true }\" />\r\n            </mat-form-field>\r\n            <mat-form-field class=\"form-field mat-select full-width\" appearance=\"outline\">\r\n              <mat-label>{{locale?.MANAGEMENT_TEAM}}</mat-label>\r\n              <mat-select required [(ngModel)]=\"currentEditBlock.selector.value\"\r\n                [ngModelOptions]=\"{ standalone: true }\">\r\n                <mat-option [value]=\"item.value\" *ngFor=\"let item of currentEditBlock.selector.defaultValue\">{{\r\n                  item.value }}</mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n            <div class=\"bloc-action\">\r\n              <button mat-button (click)=\"onAddNewSubLevelFieldBlock($event)\">{{locale?.SUB_CATEGORY}} <mat-icon>\r\n                  device_hub\r\n                </mat-icon></button>\r\n              <button mat-button (click)=\"onDuplicatedBlock($event)\">{{locale?.DUPLICATE_BLOCK}}<mat-icon>filter_none\r\n                </mat-icon>\r\n              </button>\r\n              <button [disabled]=\"!currentEditBlock.editable\" mat-button class=\"delete-bloc\"\r\n                (click)=\"onRemoveFieldBlock($event)\">{{locale?.DELETE_BLOCK}} <mat-icon>\r\n                  delete</mat-icon></button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</main>", styles: ["main{background:#f4f7f9 0% 0% no-repeat padding-box;height:100vh;display:flex;flex-direction:column;align-items:center;padding:25px}main .disabled label{background-color:transparent!important}main form{display:flex;height:89%;width:100%}main .box-title{width:786px;margin-top:20vh;background:#ffffff 0% 0% no-repeat padding-box;border:1px solid #dce4e9;border-radius:6px;opacity:1;margin:auto;padding:0 25px;align-self:center}main .box-title h3{text-align:center;letter-spacing:0px;color:#171f26}main .box-title label,main .box-title input{letter-spacing:0px;color:#171f26}main .box-title .profil-name-content{display:flex;align-items:center;position:relative}main .box-title .profil-name-content .add-picto{margin-right:15px;min-width:50px;width:30px;padding:9px 12px}main .box-title .profil-name-content .add-picto mat-icon{margin-right:10px}main .box-title .profil-name-content .list-picto{position:absolute;height:200px;width:100%;background:#ffffff 0% 0% no-repeat padding-box;border:1px solid #171f26;border-radius:8px;top:100%;z-index:1}main .box-title .profil-name-content .list-picto mat-icon{margin:15px;border:none;font-size:40px}main .box-title .profil-name-content .list-picto mat-icon:hover{color:#830b6b!important;cursor:pointer}main .box-title .box-title-content{width:100%;margin:25px auto}main .box-title .title{letter-spacing:0px;color:#171f26}main .box-title p{letter-spacing:0px;color:#171f26;text-align:center}main .box-title .link-create-profil{width:100%;display:flex;justify-content:center}main .box-title button{text-align:center;border:1px solid #543cb6;border-radius:7px;color:#fff;padding:.7em 2em .5em;display:flex;align-items:center;background-color:transparent;letter-spacing:0px;color:#543cb6}main .action{width:100%;display:flex;justify-content:space-between}main .header-create-profile{width:100%;margin:10px 15px;border-radius:5px}main .header-create-profile .header-create-profile-top{display:flex;align-items:center;text-align:center;justify-content:space-between}main .header-create-profile .header-create-profile-top .create-profile-action{display:flex;align-items:center;gap:25px}main .header-create-profile h3{font-size:25px;padding-bottom:5px;display:flex;align-items:center;justify-content:center}main .header-create-profile h3 span{text-overflow:ellipsis;white-space:nowrap;overflow:hidden;font-weight:700;font-size:24px;line-height:110%;text-align:center;color:#242731;text-transform:capitalize}main .header-create-profile h3 mat-icon{margin-left:15px;cursor:pointer}main .header-create-profile .create-profile-menus{max-width:100%;overflow:auto}main .header-create-profile .create-profile-menus ul{font-weight:600;font-size:16px;list-style:none;display:flex;align-items:center;gap:20px;padding:0}main .header-create-profile .create-profile-menus ul li{font-weight:400;font-size:12px;cursor:pointer;text-align:left;letter-spacing:0px;color:#535760}main .header-create-profile .create-profile-menus ul li .mat-mini-fab{width:28px;height:28px;line-height:24px}main .header-create-profile .create-profile-menus ul li.li-title:hover{border-bottom:2px solid #723CEB}main .header-create-profile .create-profile-menus ul li.li-title.active{border-bottom:2px solid #723CEB;font-weight:600}.expand-button{color:#5a607f!important;background-color:transparent!important;box-shadow:none!important}.input-category-name{font-size:15px;font-weight:500;border:none;outline:none;text-align:left;color:#171f26;font-weight:700;font-size:20px;line-height:28px;color:#242731}.sub-category-name{font-style:normal;font-weight:250;font-size:14px;line-height:16px;display:flex;align-items:center;color:#575f6e;word-break:break-word}.full-width{width:100%}.field-action{width:10%}.field-size{width:90%;margin:auto 2% auto auto}::ng-deep .mat-mini-fab .mat-button-wrapper{padding:0!important}::ng-deep .mat-form-field-appearance-fill .mat-form-field-flex{background-color:#fff}::ng-deep .mat-select.mat-form-field-appearance-outline .mat-form-field-infix{padding:.5em 0}::ng-deep .mat-select{padding:8px 0}::ng-deep .mat-form-field-appearance-fill .mat-form-field-underline:before{background-color:transparent}::ng-deep .mat-form-field-wrapper{padding-bottom:0!important}:host ::ng-deep .input-category-name div.mat-form-field-outline-start,:host ::ng-deep .cdk-drag-preview .input-category-name div.mat-form-field-outline-start{border-color:0!important;border-width:0px!important}:host ::ng-deep .input-category-name .mat-form-field-outline-gap{border-color:0!important;border-width:0px!important}:host ::ng-deep .input-category-name .mat-form-field-outline-end{border-color:0!important;border-width:0px!important}:host ::ng-deep .input-category-name .mat-form-field-label-wrapper{display:none}:host ::ng-deep .input-category-name .mat-form-field-appearance-outline .mat-form-field-outline{color:transparent!important}:host ::ng-deep .input-category-name .mat-form-field-infix{border-top:none}.category-action{display:flex;width:100%}.delete-field{margin:auto 2%}.radio-group .mat-radio-button{margin-right:10px}.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary{background-color:#3f51b5;color:#fff;min-height:20px;font-size:10px}.move-icons{cursor:move}:host ::ng-deep .child-list .dnd-box.cdk-drag-preview{width:100%!important;overflow:hidden;box-sizing:border-box;box-shadow:0 5px 5px -3px #0003,0 8px 10px 1px #00000024,0 3px 14px 2px #0000001f}:host ::ng-deep .child-list .cdk-drag-animating{transition:transform .25s cubic-bezier(0,0,.2,1)}:host ::ng-deep .child-list .field-box.cdk-drop-list-dragging .dnd-box:not(.cdk-drag-placeholder){transition:transform .25s cubic-bezier(0,0,.2,1)}:host ::ng-deep .child-list .cdk-drag.dnd-box.cdk-drag-dragging{min-width:185px}:host ::ng-deep .child-list .cdk-drag.dnd-box.cdk-drag-dragging>div{margin-bottom:15px!important;min-width:185px}:host ::ng-deep .child-list .cdk-drag.dnd-box.cdk-drag-dragging>div>div{min-width:185px}:host ::ng-deep .child-list .cdk-drag.dnd-box.cdk-drag-dragging>div .mat-form-field-wrapper{min-width:185px}:host ::ng-deep .child-list .field-box{min-height:84px}:host ::ng-deep .child-list .field-box .dnd-placeholder{margin:0 10px;padding:0;height:44px!important;max-height:44px!important;display:flex;flex-grow:1;align-items:baseline;position:relative;border-radius:8px;opacity:1!important;transform:translateZ(0)!important}:host ::ng-deep .child-list .cdk-drop-list-dragging>div.dnd-box{display:none}::ng-deep .cdk-drag.dnd-box.cdk-drag-preview{height:68px;border-radius:0}::ng-deep .cdk-drag.dnd-box.cdk-drag-preview .fields-container .field-item{margin:0;height:44px}::ng-deep .cdk-drag.dnd-box.cdk-drag-preview .fields-container .field-item .mat-form-field-wrapper{height:44px}::ng-deep .cdk-drag.dnd-box.cdk-drag-preview .fields-container .field-item .mat-form-field-wrapper .input-phone,::ng-deep .cdk-drag.dnd-box.cdk-drag-preview .fields-container .field-item .mat-form-field-wrapper .mat-input-element,::ng-deep .cdk-drag.dnd-box.cdk-drag-preview .fields-container .field-item .mat-form-field-wrapper .mat-select-value,::ng-deep .cdk-drag.dnd-box.cdk-drag-preview .fields-container .field-item .mat-form-field-wrapper .mat-select-arrow-wrapper{opacity:0}.category-item,.cdk-drag-placeholder{display:flex;align-items:baseline;position:relative;width:100%;border-radius:8px;background-color:#fff;margin-bottom:15px;margin-right:5px;padding:6px 15px}.category-item .left-action,.cdk-drag-placeholder .left-action{height:auto;width:40px;align-self:baseline;border-top-left-radius:8px;border-bottom-left-radius:8px}.category-item .left-action .transparent-button,.cdk-drag-placeholder .left-action .transparent-button{background-color:transparent;box-shadow:none;width:40px;padding:0;margin:0;min-width:auto;color:#fff}.category-item .left-action .transparent-button .drag-icon,.cdk-drag-placeholder .left-action .transparent-button .drag-icon{color:#171f26;cursor:move;margin-right:15px}.category-item .field-content,.cdk-drag-placeholder .field-content{width:calc(100% - 40px);align-self:center}.category-item .field-content .child-list,.cdk-drag-placeholder .field-content .child-list{display:flex;flex-wrap:wrap;background-color:transparent;width:103%;position:relative;margin-left:-1.5%}.category-item .field-content .field-item,.cdk-drag-placeholder .field-content .field-item{display:flex;justify-content:space-between;align-items:baseline;border:transparent!important}.category-item .field-content .field-item mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-outline,.cdk-drag-placeholder .field-content .field-item mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-outline{color:transparent!important}.category-item .field-content .mat-form-field-outline,.cdk-drag-placeholder .field-content .mat-form-field-outline{color:transparent!important}.field-box{margin-bottom:15px;display:flex;align-items:center}.cdk-drag-preview{box-sizing:border-box;border-radius:4px;opacity:1}.cdk-drag-preview .expand-button{color:#5a607f!important;background-color:transparent!important;box-shadow:none!important;margin-right:6px!important}.cdk-drag-placeholder{opacity:0}.cdk-drag-animating{transition:transform .25s cubic-bezier(0,0,.2,1)}.example-list.cdk-drop-list-dragging .category-item:not(.cdk-drag-placeholder){transition:transform .25s cubic-bezier(0,0,.2,1)}.child{margin-left:0}.child-content{display:flex;flex-wrap:wrap;margin-bottom:30px}.sub-category-forms{margin-bottom:0!important;margin-top:10px!important}.category{display:flex;flex-direction:row;width:100%;height:100%}.category .fields{width:100%;overflow:hidden;overflow-x:hidden;position:relative;padding-top:10px;height:calc(100% - 10px)}.category .fields .fields-inner{max-height:100%;height:100%;width:100%;overflow:auto}.category .fields .add-category-button{position:relative!important;width:calc(100% - 40px)!important;padding:20px 0}.category .fields .add-category-button mat-icon{margin-left:10px}.category .fields .add-step{bottom:0!important;top:0!important;width:100%!important}.category .disabled{background-color:#f4f7f9!important}.category .expand-button{color:#5a607f!important;background-color:transparent!important;box-shadow:none!important;margin-right:6px!important}.category .expand-button .material-icons{font-size:40px}.category .transparent-button{background-color:transparent;box-shadow:none;width:40px;padding:0;margin:0;margin-left:0!important;min-width:auto;color:#fff}.add-button-sub-category{width:93%;position:absolute;left:3%;bottom:-13px}.add-button-sub-category button span{width:100%}.add-button-container{background:#ffffff 0% 0% no-repeat padding-box;border-radius:8px;margin-top:10px;padding:10px 0;display:flex;justify-content:center;align-items:center;width:100%;margin-bottom:22px;position:absolute;left:0;top:100%}.add-button-container button{display:flex;align-items:center;background-color:transparent;border:none;cursor:pointer;letter-spacing:0px;color:#000;box-shadow:none}.add-button-container button span{width:100%}.add-category{background-color:#fcfcfe;border-radius:5px;line-height:26px;margin-left:10px;margin-bottom:10px;letter-spacing:0px;color:#c2c8d5;width:92%}.field-content .cdk-drag{width:100%}.cdk-drag{width:auto;position:relative}.cdk-drag .fields-content{display:flex;height:100%;width:100%;margin:0}.cdk-drag .fields-content .button-action{align-self:baseline;margin-top:0;margin-left:3px;border-bottom-left-radius:8px;border-top-left-radius:8px}.cdk-drag .fields-content .button-action .transparent-button{background-color:transparent;box-shadow:none;width:40px;padding:0;margin:0;min-width:auto;color:#fff}.cdk-drag .fields-content .button-action .transparent-button .drag-icon{color:#171f26;cursor:move;margin-right:15px}.cdk-drag .fields-content .child-3-background{background-color:#e5e8ee!important}.cdk-drag .fields-content .fields-container{border-radius:0 8px 8px 0;background-color:#fff;width:100%;padding-left:10px;padding-right:10px;padding-top:5px;position:relative;margin-bottom:10px}.cdk-drag .fields-content .fields-container lib-sub-category .field-item{display:flex;justify-content:space-between;align-items:center;width:100%}.cdk-drag .fields-content .fields-container lib-sub-category .field-item .button-action{background-color:#039be5!important;height:100%;margin:auto 15px auto auto;display:flex}.cdk-drag .fields-content .fields-container lib-sub-category .field-item .button-action button{box-shadow:none;background-color:transparent;color:#fff}.side-bar{display:flex;flex-direction:column}.register-button{background:no-repeat padding-box #171f26!important;border:2px solid #171f26!important;color:#fff!important;box-shadow:0 0 #0003;border-radius:7px}.forward{padding:6px}.live-button{background-color:#fff!important;color:#171f26!important;border:2px solid #171f26!important}.content-item{transition-property:border-image-slice border-image-source border-width;transition-timing-function:ease-in-out;transition-duration:.5s}.active-content{border-image-slice:1;border-width:2px;border-image-source:linear-gradient(to left,#9d107d,#4862ab)}.field-property{padding:11px;height:calc(100% - 22px);width:400px}.field-property h3{font-size:20px;line-height:110%;padding-top:10px;display:flex;align-items:center;color:#242731}.field-property .property-content{display:flex;flex-direction:column;align-items:flex-start;padding:0 20px;background:#ffffff;border-radius:8px 8px 0 0;min-height:100%;height:auto;width:400px}.field-property .property-content button{text-align:center}.field-property .property-content .property-content-inner{display:flex;flex-direction:column;gap:25px;overflow:auto;max-height:700px;padding-bottom:25px}.field-property .bloc-action{text-align:center}.field-property .bloc-action button{width:100%;padding:6px;margin-top:10px}.field-property .bloc-action button mat-icon{margin-left:5px}.field-property .bloc-action .delete-bloc{background:#f44336;box-shadow:0 0 #0003;border-radius:7px;color:#fff}.fields-inner::-webkit-scrollbar{width:5px}.fields-inner::-webkit-scrollbar-track{box-shadow:inset 0 0 2px transparent;border-radius:10px}.fields-inner::-webkit-scrollbar-thumb{background:transparent;border-radius:10px}.fields-inner::-webkit-scrollbar-thumb:hover{background:transparent}.toogle-button{color:#707273!important;display:flex;align-items:center;font-style:normal;font-weight:400;font-size:18px;line-height:18px}.toogle-button span{padding-right:10px}:host ::ng-deep .category .mat-slide-toggle.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar{background-color:#039be5;position:relative;width:42px;height:23px;flex-shrink:0;border-radius:14px}:host ::ng-deep .category .mat-slide-toggle:not(.mat-disabled) .mat-slide-toggle-bar{background-color:#707273}:host ::ng-deep .category .mat-slide-toggle:not(.mat-disabled) .mat-slide-toggle-bar{position:relative;width:42px;height:23px;flex-shrink:0;border-radius:14px}:host ::ng-deep .category .mat-slide-toggle.mat-checked:not(.mat-disabled) .mat-slide-toggle-thumb{background-color:#fff;margin-top:4px}:host ::ng-deep .category .mat-slide-toggle:not(.mat-disabled) .mat-slide-toggle-thumb{margin-top:4px;margin-left:4px}:host ::ng-deep .category .mat-slide-toggle.draft:not(.mat-disabled) .mat-slide-toggle-bar{background-color:#707273}:host ::ng-deep .category .mat-slide-toggle.draft.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar{background-color:#039be5}.top-10{margin-top:10px}.bottom-10{margin-bottom:10px}.section-item{border:2px solid transparent;overflow:hidden}.section-item:hover,.section-item.active{border:2px solid #242731;border-radius:8px;cursor:pointer}::ng-deep .select-type-class.mat-select-disabled .mat-select-value{color:#000!important;cursor:pointer}::ng-deep button .mat-button-wrapper{display:flex;align-items:center;justify-content:center}::ng-deep .field-content .mat-form-field,::ng-deep .field-content .select-content{width:100%}::ng-deep .field-content .mat-form-field-infix{display:block;position:relative;flex:auto;min-width:0;width:100%!important}::ng-deep .fields-content .mat-radio-button.mat-accent.mat-radio-checked .mat-radio-outer-circle,::ng-deep .property-content .mat-radio-button.mat-accent.mat-radio-checked .mat-radio-outer-circle{border-color:#039be5!important}::ng-deep .fields-content .mat-radio-button.mat-accent .mat-radio-inner-circle,::ng-deep .fields-content .mat-radio-button.mat-accent .mat-radio-ripple .mat-ripple-element:not(.mat-radio-persistent-ripple),::ng-deep .fields-content .mat-radio-button.mat-accent.mat-radio-checked .mat-radio-persistent-ripple,::ng-deep .fields-content .mat-radio-button.mat-accent:active .mat-radio-persistent-ripple,::ng-deep .property-content .mat-radio-button.mat-accent .mat-radio-inner-circle,::ng-deep .property-content .mat-radio-button.mat-accent .mat-radio-ripple .mat-ripple-element:not(.mat-radio-persistent-ripple),::ng-deep .property-content .mat-radio-button.mat-accent.mat-radio-checked .mat-radio-persistent-ripple,::ng-deep .property-content .mat-radio-button.mat-accent:active .mat-radio-persistent-ripple{background-color:#039be5!important}::ng-deep .fields-content .mat-checkbox-checkmark-path,::ng-deep .property-content .mat-checkbox-checkmark-path{stroke:#039be5!important}::ng-deep .fields-content .mat-checkbox-frame,::ng-deep .property-content .mat-checkbox-frame{border:2px solid #039BE5!important}::ng-deep .fields-content .mat-checkbox-inner-container,::ng-deep .property-content .mat-checkbox-inner-container{height:20px!important;width:20px!important}.setting{z-index:1;background-color:#d5d6d7!important;border-radius:40px;width:42px!important;height:40px!important;padding:0 10px!important;display:flex;align-items:center;justify-content:center;display:none}.setting .setting-icon,.setting .transparent-button{color:#171f26}.sub-header:hover .setting{display:flex}.add-button-sub-category button{margin:10px auto;width:100%;background-color:transparent;color:#000;box-shadow:none;background-color:#fcfcfe;padding:5px span;padding-width:100%!important}::ng-deep .add-button{padding:10px 0}::ng-deep .add-button span{width:100%}::ng-deep .mat-button[disabled]{opacity:.5!important}\n"] }]
    }], function () { return [{ type: i1.UntypedFormBuilder }, { type: i2.OnboardingService }, { type: i3.ActivatedRoute }, { type: i3.Router }, { type: i4.MatDialog }, { type: i5.ScrollToService }]; }, { onScroll: [{
            type: HostListener,
            args: ['scroll', ['$event']]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVtcGxhdGUtcHJvZmlsZS1jcmVhdGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvb25ib2FyZGluZy9zcmMvbGliL3BhZ2VzL3RlbXBsYXRlLXByb2ZpbGUtY3JlYXRlL3RlbXBsYXRlLXByb2ZpbGUtY3JlYXRlLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL29uYm9hcmRpbmcvc3JjL2xpYi9wYWdlcy90ZW1wbGF0ZS1wcm9maWxlLWNyZWF0ZS90ZW1wbGF0ZS1wcm9maWxlLWNyZWF0ZS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBSyxTQUFTLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNuRSxPQUFPLEVBQWUsZUFBZSxFQUFFLGlCQUFpQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDekYsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDaEUsT0FBTyxFQUF3QyxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVsRixPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSxtRkFBbUYsQ0FBQztBQUNsSSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxzREFBc0QsQ0FBQztBQUs1RixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sc0RBQXNELENBQUM7QUFFckYsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLFlBQVksQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNMM0IsbUNBQXFFOzs7SUFHckUsbUNBQW9FOzs7O0lBZ0J0RSw4QkFDaUQ7SUFBL0MsaVFBQVMsZUFBQSw2QkFBZ0IsQ0FBQSxJQUFDO0lBRTFCLFlBQ0Y7SUFBQSxpQkFBSzs7Ozs7SUFKZ0Isd0RBQXlDO0lBQ2pDLHNDQUFtQjtJQUU5QyxlQUNGO0lBREUsNENB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QUksSUFBSSxLQUFLLFFBQVEsSUFBSSxJQUFJLEtBQUssT0FBTyxJQUFJLElBQUksS0FBSyxtQkFBbUIsRUFBRTtZQUN6RSxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksR0FBRyxFQUFFLENBQUM7U0FDN0M7YUFBTSxJQUFJLElBQUksS0FBSyxVQUFVLElBQUksSUFBSSxLQUFLLFFBQVEsRUFBRTtZQUNuRCxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7U0FDL0M7YUFBTTtZQUNMLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxHQUFHLEVBQUUsQ0FBQztTQUM3QztJQUNILENBQUM7SUFFRCxVQUFVLENBQUMsS0FBVSxFQUFFLEdBQUcsTUFBTTtRQUM5QixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUNyQixNQUFNLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDO1FBQzdCLE1BQU0sS0FBSyxHQUFHLE1BQU0sS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENB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SUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxFQUFFO2dCQUMxRCxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO2FBQ2hFO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztnQkFDN0MsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQzthQUMvRDtTQUNGO2FBQU0sSUFBSSxNQUFNLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtZQUM5QixJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLEVBQUU7Z0JBQzNFLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO2FBQ2pGO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztnQkFDN0MsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztnQkFDOUQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7YUFDaEY7U0FDRjthQUFNO1lBQ0wsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsRUFBRTtnQkFDNUYsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO2FBQ2xHO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztnQkFDN0MsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztnQkFDOUQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENB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QUNyQixNQUFNLEtBQUssR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDO1FBQzFCLE1BQU0sS0FBSyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUM7UUFDMUIsTUFBTSxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQztRQUM3QixNQUFNLEtBQUssR0FBRyxNQUFNLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2xRLElBQUksS0FBSyxFQUFFO1lBQ1QsTUFBTSxTQUFTLEdBQUcsS0FBSyxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsaUJBQWlCLEVBQUUsS0FBSyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxDQUFDO1lBQ3BILElBQUksU0FBUyxLQUFLLENBQUMsQ0FBQyxFQUFFO2dCQUNwQixLQUFLLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEtBQUssR0FBRyxLQUFL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QztJQUNELGFBQWEsQ0FBQyxLQUFVLEVBQUUsR0FBRyxNQUFNO1FBQ2pDLE1BQU0sR0FBRyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ25DLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ25DLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDM0Q7UUFDRCxNQUFNLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDO1FBQzdCLE1BQU0sS0FBSyxHQUFHLE1BQU0sS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbFEsS0FBSyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFBO0lBRTFCLENBQUM7SUFFRCxhQUFhLENBQUMsS0FBVSxFQUFFLEdBQUcsTUFBTTtRQUNqQyxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUNyQixNQUFNLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDO1FBQzdCLE1BQU0sS0FBSyxHQUFHLE1BQU0sS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbFEsTUFBTSxLQUFLLEdBQUcsS0FBSyxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLEtBQUssS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFBO1FBQ2hGLElBQUksS0FBSyxLQUFLLENBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxJQUFJLEtBQUssbUJBQW1CLEVBQUU7WUFDdEQsS0FB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S0FBSyxHQUFHLEVBQUUsQ0FBQztTQUNsQjtJQUNILENBQUM7SUFFRCwwQkFBMEIsQ0FBQyxLQUFLO1FBQzlCLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUNyQixNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQztRQUN2QyxNQUFNLEtBQUssR0FBRyxNQUFNLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNsWixLQUFLLENB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eUlBQXNCLGdCQUFZLElBQUMsb0dBQ21CLG9CQUFnQixJQURuQztRQUVsRCw0RkFpT1U7UUFFVixnQ0FBK0QsaUJBQUE7UUFDckQsa0hBQVMsNEJBQXdCLElBQUM7UUFDeEMsYUFDQTtRQUFBLGlDQUFVO1FBQUEsb0JBQUc7UUFBQSxpQkFBVyxFQUFBLEVBQUE7UUFHNUIsb0NBQStDO1FBQzdDLDJCQUFrQztRQUNwQyxpQkFBVSxFQUFBLEVBQUE7UUFHZCxnQ0FBNEI7UUFDMUIsbUZBK0pNO1FBQ04sb0ZBNEJNO1FBQ1IsaUJBQU0sRUFBQSxFQUFBLEVBQUE7O1FBdGRFLGVBQTRCO1FBQTVCLGdEQUE0QjtRQUtiLGVBQTZCO1FBQTdCLHNEQUE2QjtRQUFxQixlQUN2RTtRQUR1RSw4Q0FDdkU7UUFFcUIsZUFBNEI7UUFBNUIscURBQTRCO1FBQy9DLGVBQ0Y7UUFERSw4Q0FDRjtRQUVRLGVBQTZEO1FBQTdELHFGQUE2RDtRQUk3RCxlQUFxRjtRQUFyRixxSEFBcUY7UUFRZCxlQUFlO1FBQWYsd0NBQWU7UUFhOUYsZUFBa0I7UUFBbEIsb0NBQWtCO1FBR21DLGVBQThCO1FBQTlCLGdEQUE4QjtRQUVoQixlQUFlO1FBQWYsd0NBQWU7UUFxTzVFLGVBQ0E7UUFEQSxnRkFDQTtRQVN5QixlQUFpQztRQUFqQywwREFBaUM7UUFnS2pDLGVBQW1DO1FBQW5DLDREQUFtQzs7dUZEdGE3RCw4QkFBOEI7Y0FMMUMsU0FBUzsyQkFDRSxvQ0FBb0M7Nk1BZ3JDOUMsUUFBUTtrQkFEUCxZQUFZO21CQUFDLFFBQVEsRUFBRSxDQUFDLFFBQVEsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IENPTU1BLCBFTlRFUiwgSSwgU0VNSUNPTE9OIH0gZnJvbSBcIkBhbmd1bGFyL2Nkay9rZXljb2Rlc1wiO1xyXG5pbXBvcnQgeyBDZGtEcmFnRHJvcCwgbW92ZUl0ZW1JbkFycmF5LCB0cmFuc2ZlckFycmF5SXRlbSB9IGZyb20gXCJAYW5ndWxhci9jZGsvZHJhZy1kcm9wXCI7XHJcbmltcG9ydCB7IENvbXBvbmVudCwgSG9zdExpc3RlbmVyLCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgVW50eXBlZEZvcm1CdWlsZGVyLCBVbnR5cGVkRm9ybUdyb3VwLCBWYWxpZGF0b3JzIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcblxyXG5pbXBvcnQgeyBEaWFsb2dDcmVhdGVUZW1wbGF0ZUNvbXBvbmVudCB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3RlbXBsYXRlL2RpYWxvZy1jcmVhdGUtdGVtcGxhdGUvZGlhbG9nLWNyZWF0ZS10ZW1wbGF0ZS5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgRXhpdENvbmZpcm1Db21wb25lbnQgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9leGl0LWNvbmZpcm0vZXhpdC1jb25maXJtLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBNYXRDaGlwSW5wdXRFdmVudCB9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbC9jaGlwc1wiO1xyXG5pbXBvcnQgeyBNYXREaWFsb2cgfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nXCI7XHJcbmltcG9ydCB7IE9uYm9hcmRpbmdTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL29uYm9hcmRpbmcuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBTY3JvbGxUb1NlcnZpY2UgfSBmcm9tICdAbmlja3ktbGVuYWVycy9uZ3gtc2Nyb2xsLXRvJztcclxuaW1wb3J0IHsgVHlwZUNvbXBvbmVudCB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3RlbXBsYXRlL3R5cGUtZGlhbG9nL3R5cGUuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IGZpZWxkV2lkdGggfSBmcm9tIFwiLi4vLi4vdXRpbHMvdXRpbHNcIjtcclxuaW1wb3J0IHsgbG9jYWxlcyB9IGZyb20gJy4uLy4uL2kxOG4nO1xyXG5cclxuY29uc3QgUFJPRklMRV9DQVRFR09SSUVTX0tFWSA9ICdwcm9maWxlQ2F0ZWdvcmllcyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogXCJvbmJvYXJkaW5nLWNyZWF0ZS1wcm9maWxlLXRlbXBsYXRlXCIsXHJcbiAgdGVtcGxhdGVVcmw6IFwiLi90ZW1wbGF0ZS1wcm9maWxlLWNyZWF0ZS5jb21wb25lbnQuaHRtbFwiLFxyXG4gIHN0eWxlVXJsczogW1wiLi90ZW1wbGF0ZS1wcm9maWxlLWNyZWF0ZS5jb21wb25lbnQuc2Nzc1wiXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFRlbXBsYXRlUHJvZmlsZUNyZWF0ZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgZm9ybTogVW50eXBlZEZvcm1Hcm91cDtcclxuICB2YWxpZENhdGVnb3J5ID0gZmFsc2U7XHJcbiAgc2VwYXJhdG9yS2V5c0NvZGVzID0gW0VOVEVSLCBDT01NQSwgU0VNSUNPTE9OXTtcclxuICBjdXJyZW50UHJvZmlsOiBhbnkgPSB7fTtcclxuICBjYW5FeGl0ID0gdHJ1ZTtcclxuICB0YWdzID0gW107XHJcbiAgaWQgPSBcIjBcIjtcclxuICBwYXJlbnQgPSBbXTtcclxuICBsb2FkaW5nID0gZmFsc2U7XHJcbiAgZWRpdEluZGV4ID0gbnVsbDtcclxuICBzaG93UHJvZmlsZU5hbWUgPSB0cnVlO1xyXG5cclxuICBsb2NhbGU6IGFueSA9IHt9XHJcbiAgbGl2ZUxhYmVsID0gdGhpcy5sb2NhbGUuUFVCTElTSF9QUk9GSUxcclxuICBkcmFmdExhYmVsID0gdGhpcy5sb2NhbGUuUkVHSVNURVJfRFJBRlRcclxuICBpbnZhbGlkZVZhbHVlOiBib29sZWFuO1xyXG5cclxuICBpc1BpY3RvTGlzdFNob3c6IGJvb2xlYW47XHJcbiAgcGljdG8gPSBcIlwiO1xyXG4gIGFsbCA9IFwiXCJcclxuICBzMSA9IFwiXCJcclxuICBzMiA9IFwiXCJcclxuICBzMyA9IFwiXCJcclxuICBzNCA9IFwiXCJcclxuICBjb25kaXRpb25EYXRhID0ge1xyXG4gICAgYWxsOiBbXSxcclxuICAgIHMxOiBbXSxcclxuICAgIHMyOiBbXSxcclxuICAgIHMzOiBbXSxcclxuICAgIGRlZmF1bHRWYWx1ZTogW11cclxuICB9O1xyXG4gIGNhdGVnb3JpZXMgPSBbXTtcclxuICBpc0Jsb2NrID0gZmFsc2U7XHJcbiAgaXNTZWN0aW9uID0gZmFsc2U7XHJcbiAgY3VycmVudEVkaXRCbG9jazogYW55O1xyXG4gIGN1cnJlbnRDaGlwID0gXCJcIlxyXG4gIHByZXZWYWx1ZSA9IFwiXCJcclxuICBwYXJhbXNJbmRleDogYW55W107XHJcbiAgaGlzdG9yaWNzID0gW107XHJcbiAgY3VycmVudENhbmNlbGVkSW5kZXggPSBudWxsO1xyXG4gIG5ld0ZpZWxkSW5kZXggPSBudWxsO1xyXG4gIGlzU3VibWl0dGVkOiBib29sZWFuO1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBmYjogVW50eXBlZEZvcm1CdWlsZGVyLFxyXG4gICAgcHVibGljIHNlcnZpY2U6IE9uYm9hcmRpbmdTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXHJcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxyXG4gICAgcHJpdmF0ZSBkaWFsb2c6IE1hdERpYWxvZyxcclxuICAgIHByaXZhdGUgc2Nyb2xsVG9TZXJ2aWNlOiBTY3JvbGxUb1NlcnZpY2VcclxuICApIHtcclxuICAgIHRoaXMuc2VydmljZS5fbGFuZy5zdWJzY3JpYmUoKGxvY2FsZSkgPT4ge1xyXG4gICAgICB0aGlzLmxvY2FsZSA9IGxvY2FsZXNbbG9jYWxlXS5QUk9GSUxFO1xyXG4gICAgICB0aGlzLmxpdmVMYWJlbCA9IHRoaXMubG9jYWxlLlBVQkxJU0hfUFJPRklMXHJcbiAgICAgIHRoaXMuZHJhZnRMYWJlbCA9IHRoaXMubG9jYWxlLlJFR0lTVEVSX0RSQUZUXHJcbiAgICB9KVxyXG4gICAgdGhpcy5zZXJ2aWNlLl9jdXJyZW50VGVtcGxhdGUuc3Vic2NyaWJlKChwcm9maWwpID0+IHtcclxuICAgICAgdGhpcy5pbml0Rm9ybSgpXHJcbiAgICAgIGlmIChwcm9maWwpIHtcclxuICAgICAgICB0aGlzLmZvcm0ucGF0Y2hWYWx1ZShwcm9maWwpO1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9maWwnLCBKU09OLnN0cmluZ2lmeShwcm9maWwpKVxyXG5cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zdCBwcm9maWwgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9maWwnKSk7XHJcbiAgICAgICAgaWYgKHByb2ZpbCkge1xyXG4gICAgICAgICAgdGhpcy5mb3JtLnBhdGNoVmFsdWUocHJvZmlsKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBkZWZhdWx0Q2F0ZWdvcmllOiBhbnkgPSBbXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwiVXRpbGlzYXRldXJcIixcclxuICAgICAga2V5OiAndXRpbGlzYXRldXInLFxyXG4gICAgICBlZGl0YWJsZTogZmFsc2UsXHJcbiAgICAgIGRlbGV0ZWFibGU6IGZhbHNlLFxyXG4gICAgICBleHBhbmRNb3JlOiBmYWxzZSxcclxuICAgICAgZXhwYW5kT25ib2FyZGluZzogdHJ1ZSxcclxuICAgICAgZGVmYXVsdFZhbHVlOiBmYWxzZSxcclxuICAgICAgc3VmZml4RW5kcG9pbnQ6IFwiY2F0ZWdvcnkvdXNlclwiLFxyXG4gICAgICBzZWxlY3Rvcjoge1xyXG4gICAgICAgIGxhYmVsOiBcIkNvbXBhbnlcIixcclxuICAgICAgICBrZXk6IFwiQ29tcGFueVwiLFxyXG4gICAgICAgIGRlZmF1bHRWYWx1ZTogW3sgdmFsdWU6IFwiTm93dGVhbVwiLCBjaGVja2VkOiB0cnVlIH0sIHsgdmFsdWU6IFwiSW50ZXJuYWxcIiwgY2hlY2tlZDogZmFsc2UgfV0sXHJcbiAgICAgICAgdmFsdWU6IFwiTm93dGVhbVwiXHJcbiAgICAgIH0sXHJcbiAgICAgIHRpY2tldFR5cGU6IHtcclxuICAgICAgICBsYWJlbDogXCJUeXBlIGRlIHRpY2tldFwiLFxyXG4gICAgICAgIGtleTogXCJ0eWNrZXRUeXBlXCIsXHJcbiAgICAgICAgZGVmYXVsdFZhbHVlOiBbeyB2YWx1ZTogXCJDcsOpYXRpb24gZGUgY29tcHRlXCIsIGNoZWNrZWQ6IHRydWUsIGtleTogXCJDcmVhdGlvbl9kZV9jb21wdGVcIiB9LCB7IHZhbHVlOiBcIkNvbmZpZ3VyYXRpb24gZGUgcG9zdGVcIiwgY2hlY2tlZDogZmFsc2UsIGtleTogXCJDb25maWd1cmF0aW9uX2RlX3Bvc3RlXCIgfV0sXHJcbiAgICAgICAgdmFsdWU6IFwiQ3JlYXRpb25fZGVfY29tcHRlXCJcclxuICAgICAgfSxcclxuICAgICAgZm9ybXM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBsYWJlbDogXCJDaXZpbGl0w6lcIixcclxuICAgICAgICAgIGtleTogXCJTYWx1dGF0aW9uXCIsXHJcbiAgICAgICAgICBleHBhbmRPbmJvYXJkaW5nOiB0cnVlLFxyXG4gICAgICAgICAgZGVmYXVsdFZhbHVlOiBbeyB2YWx1ZTogXCJNLlwiLCBjaGVja2VkOiBmYWxzZSB9LCB7IHZhbHVlOiBcIk1tZVwiLCBjaGVja2VkOiBmYWxzZSB9XSxcclxuICAgICAgICAgIGNvbmRpdGlvbjoge30sXHJcbiAgICAgICAgICB2YWx1ZTogbnVsbCxcclxuICAgICAgICAgIHNpemU6IDEwLFxyXG4gICAgICAgICAgaXNNYW5kYXRvcnk6IHRydWUsXHJcbiAgICAgICAgICBvdGhlclZhbHVlOiAnJyxcclxuICAgICAgICAgIHR5cGU6IFwic2VsZWN0XCIsXHJcbiAgICAgICAgICBlZGl0YWJsZTogZmFsc2UsXHJcbiAgICAgICAgICBkZWxldGVhYmxlOiBmYWxzZSxcclxuICAgICAgICAgIHN1YkxldmVsOiAxLFxyXG5cclxuICAgICAgICAgIGV4cGFuZE1vcmU6IGZhbHNlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbGFiZWw6IFwiVHlwZSBkZSBwcm9maWxcIixcclxuICAgICAgICAgIGtleTogXCJUeXBlX2RlX3Byb2ZpbF9Ob3dib2FyZF9fY1wiLFxyXG4gICAgICAgICAgZXhwYW5kT25ib2FyZGluZzogdHJ1ZSxcclxuICAgICAgICAgIGRlZmF1bHRWYWx1ZTogW3sgdmFsdWU6IFwiTWFuYWdlclwiLCBjaGVja2VkOiBmYWxzZSB9LCB7IHZhbHVlOiBcIlV0aWxpc2F0ZXVyXCIsIGNoZWNrZWQ6IGZhbHNlIH1dLFxyXG4gICAgICAgICAgY29uZGl0aW9uOiB7fSxcclxuICAgICAgICAgIHZhbHVlOiBudWxsLFxyXG4gICAgICAgICAgc2l6ZTogMTAsXHJcbiAgICAgICAgICBpc01hbmRhdG9yeTogdHJ1ZSxcclxuICAgICAgICAgIG90aGVyVmFsdWU6ICcnLFxyXG4gICAgICAgICAgdHlwZTogXCJzZWxlY3RcIixcclxuICAgICAgICAgIGVkaXRhYmxlOiBmYWxzZSxcclxuICAgICAgICAgIGRlbGV0ZWFibGU6IGZhbHNlLFxyXG4gICAgICAgICAgc3ViTGV2ZWw6IDEsXHJcbiAgICAgICAgICBleHBhbmRNb3JlOiBmYWxzZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGxhYmVsOiBcIk5vbVwiLFxyXG4gICAgICAgICAga2V5OiBcIkxhc3ROYW1lXCIsXHJcbiAgICAgICAgICBleHBhbmRPbmJvYXJkaW5nOiB0cnVlLFxyXG4gICAgICAgICAgZGVmYXVsdFZhbHVlOiBudWxsLFxyXG4gICAgICAgICAgdmFsdWU6IG51bGwsXHJcbiAgICAgICAgICBzaXplOiA4MCxcclxuICAgICAgICAgIGlzTWFuZGF0b3J5OiB0cnVlLFxyXG4gICAgICAgICAgY29uZGl0aW9uOiB7fSxcclxuICAgICAgICAgIG90aGVyVmFsdWU6ICcnLFxyXG4gICAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXHJcbiAgICAgICAgICBlZGl0YWJsZTogZmFsc2UsXHJcbiAgICAgICAgICBkZWxldGVhYmxlOiBmYWxzZSxcclxuICAgICAgICAgIHN1YkxldmVsOiAxLFxyXG4gICAgICAgICAgZXhwYW5kTW9yZTogZmFsc2UsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBsYWJlbDogXCJQcsOpbm9tXCIsXHJcbiAgICAgICAgICBrZXk6IFwiRmlyc3ROYW1lXCIsXHJcbiAgICAgICAgICBleHBhbmRPbmJvYXJkaW5nOiB0cnVlLFxyXG4gICAgICAgICAgY29uZGl0aW9uOiB7fSxcclxuICAgICAgICAgIGRlZmF1bHRWYWx1ZTogbnVsbCxcclxuICAgICAgICAgIHZhbHVlOiBudWxsLFxyXG4gICAgICAgICAgc2l6ZTogODAsXHJcbiAgICAgICAgICBpc01hbmRhdG9yeTogdHJ1ZSxcclxuICAgICAgICAgIG90aGVyVmFsdWU6ICcnLFxyXG4gICAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXHJcbiAgICAgICAgICBlZGl0YWJsZTogZmFsc2UsXHJcbiAgICAgICAgICBkZWxldGVhYmxlOiBmYWxzZSxcclxuICAgICAgICAgIHN1YkxldmVsOiAxLFxyXG4gICAgICAgICAgZXhwYW5kTW9yZTogZmFsc2UsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBsYWJlbDogXCJFbWFpbFwiLFxyXG4gICAgICAgICAga2V5OiBcIkVtYWlsXCIsXHJcbiAgICAgICAgICBleHBhbmRPbmJvYXJkaW5nOiB0cnVlLFxyXG4gICAgICAgICAgZGVmYXVsdFZhbHVlOiBudWxsLFxyXG4gICAgICAgICAgY29uZGl0aW9uOiB7fSxcclxuICAgICAgICAgIHZhbHVlOiBudWxsLFxyXG4gICAgICAgICAgc2l6ZTogODAsXHJcbiAgICAgICAgICBpc01hbmRhdG9yeTogdHJ1ZSxcclxuICAgICAgICAgIG90aGVyVmFsdWU6ICcnLFxyXG4gICAgICAgICAgdHlwZTogXCJlbWFpbFwiLFxyXG4gICAgICAgICAgZWRpdGFibGU6IGZhbHNlLFxyXG4gICAgICAgICAgZGVsZXRlYWJsZTogZmFsc2UsXHJcbiAgICAgICAgICBzdWJMZXZlbDogMSxcclxuICAgICAgICAgIGV4cGFuZE1vcmU6IGZhbHNlLFxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGxhYmVsOiBcIkZpeGUgKG9wdClcIixcclxuICAgICAgICAgIGtleTogXCJQaG9uZVwiLFxyXG4gICAgICAgICAgZXhwYW5kT25ib2FyZGluZzogdHJ1ZSxcclxuICAgICAgICAgIGRlZmF1bHRWYWx1ZTogbnVsbCxcclxuICAgICAgICAgIGNvbmRpdGlvbjoge30sXHJcbiAgICAgICAgICB2YWx1ZTogbnVsbCxcclxuICAgICAgICAgIHNpemU6IDIwLFxyXG4gICAgICAgICAgaXNNYW5kYXRvcnk6IGZhbHNlLFxyXG4gICAgICAgICAgb3RoZXJWYWx1ZTogJycsXHJcbiAgICAgICAgICB0eXBlOiBcInRlbFwiLFxyXG4gICAgICAgICAgZWRpdGFibGU6IGZhbHNlLFxyXG4gICAgICAgICAgZGVsZXRlYWJsZTogZmFsc2UsXHJcbiAgICAgICAgICBzdWJMZXZlbDogMSxcclxuXHJcbiAgICAgICAgICBleHBhbmRNb3JlOiBmYWxzZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGxhYmVsOiBcIk1vYmlsZVwiLFxyXG4gICAgICAgICAga2V5OiBcIk1vYmlsZVBob25lXCIsXHJcbiAgICAgICAgICBleHBhbmRPbmJvYXJkaW5nOiB0cnVlLFxyXG4gICAgICAgICAgZGVmYXVsdFZhbHVlOiBudWxsLFxyXG4gICAgICAgICAgY29uZGl0aW9uOiB7fSxcclxuICAgICAgICAgIHZhbHVlOiBudWxsLFxyXG4gICAgICAgICAgc2l6ZTogMjAsXHJcbiAgICAgICAgICBpc01hbmRhdG9yeTogZmFsc2UsXHJcbiAgICAgICAgICBvdGhlclZhbHVlOiAnJyxcclxuICAgICAgICAgIHR5cGU6IFwidGVsXCIsXHJcbiAgICAgICAgICBlZGl0YWJsZTogZmFsc2UsXHJcbiAgICAgICAgICBkZWxldGVhYmxlOiBmYWxzZSxcclxuICAgICAgICAgIHN1YkxldmVsOiAxLFxyXG4gICAgICAgICAgZXhwYW5kTW9yZTogZmFsc2UsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBsYWJlbDogXCJGb25jdGlvblwiLFxyXG4gICAgICAgICAga2V5OiBcIlRpdGxlXCIsXHJcbiAgICAgICAgICBleHBhbmRPbmJvYXJkaW5nOiB0cnVlLFxyXG4gICAgICAgICAgZGVmYXVsdFZhbHVlOiBudWxsLFxyXG4gICAgICAgICAgdmFsdWU6IG51bGwsXHJcbiAgICAgICAgICBjb25kaXRpb246IHt9LFxyXG4gICAgICAgICAgc2l6ZTogODAsXHJcbiAgICAgICAgICBpc01hbmRhdG9yeTogdHJ1ZSxcclxuICAgICAgICAgIG90aGVyVmFsdWU6ICcnLFxyXG4gICAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXHJcbiAgICAgICAgICBlZGl0YWJsZTogZmFsc2UsXHJcbiAgICAgICAgICBkZWxldGVhYmxlOiBmYWxzZSxcclxuICAgICAgICAgIHN1YkxldmVsOiAxLFxyXG4gICAgICAgICAgZXhwYW5kTW9yZTogZmFsc2UsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBsYWJlbDogXCJFdGFibGlzc2VtZW50IC8gU2l0ZVwiLFxyXG4gICAgICAgICAga2V5OiBcIkFjY291bnROYW1lXCIsXHJcbiAgICAgICAgICBleHBhbmRPbmJvYXJkaW5nOiB0cnVlLFxyXG4gICAgICAgICAgZGVmYXVsdFZhbHVlOiBudWxsLFxyXG4gICAgICAgICAgdmFsdWU6IG51bGwsXHJcbiAgICAgICAgICBjb25kaXRpb246IHt9LFxyXG4gICAgICAgICAgc2l6ZTogODAsXHJcbiAgICAgICAgICBpc01hbmRhdG9yeTogdHJ1ZSxcclxuICAgICAgICAgIG90aGVyVmFsdWU6ICcnLFxyXG4gICAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXHJcbiAgICAgICAgICBlZGl0YWJsZTogZmFsc2UsXHJcbiAgICAgICAgICBkZWxldGVhYmxlOiBmYWxzZSxcclxuICAgICAgICAgIHN1YkxldmVsOiAxLFxyXG4gICAgICAgICAgZXhwYW5kTW9yZTogZmFsc2UsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBsYWJlbDogXCJBY2PDqHMgYXUgcG9ydGFpbFwiLFxyXG4gICAgICAgICAga2V5OiBcIkFjY19zX2F1X3BvcnRhaWxfY2xpZW50X05vd0JvYXJkX19jXCIsXHJcbiAgICAgICAgICBjb25kaXRpb246IHt9LFxyXG4gICAgICAgICAgZXhwYW5kT25ib2FyZGluZzogdHJ1ZSxcclxuICAgICAgICAgIGRlZmF1bHRWYWx1ZTogW3sgdmFsdWU6IFwiT3VpXCIsIGNoZWNrZWQ6IGZhbHNlIH0sIHsgdmFsdWU6IFwiTm9uXCIsIGNoZWNrZWQ6IGZhbHNlIH1dLFxyXG4gICAgICAgICAgdmFsdWU6IG51bGwsXHJcbiAgICAgICAgICBzaXplOiAxMCxcclxuICAgICAgICAgIGlzTWFuZGF0b3J5OiB0cnVlLFxyXG4gICAgICAgICAgb3RoZXJWYWx1ZTogJycsXHJcbiAgICAgICAgICB0eXBlOiBcInNlbGVjdFwiLFxyXG4gICAgICAgICAgZWRpdGFibGU6IGZhbHNlLFxyXG4gICAgICAgICAgZGVsZXRlYWJsZTogZmFsc2UsXHJcbiAgICAgICAgICBzdWJMZXZlbDogMSxcclxuXHJcbiAgICAgICAgICBleHBhbmRNb3JlOiBmYWxzZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGxhYmVsOiBcIkxhbmd1ZVwiLFxyXG4gICAgICAgICAga2V5OiBcIkxhbmd1ZV9tYXRlcm5lbGxlX19jXCIsXHJcbiAgICAgICAgICBleHBhbmRPbmJvYXJkaW5nOiB0cnVlLFxyXG4gICAgICAgICAgZGVmYXVsdFZhbHVlOiBbeyB2YWx1ZTogXCJGcmFuw6dhaXNcIiwgY2hlY2tlZDogZmFsc2UgfSwgeyB2YWx1ZTogXCJBbmdsYWlzXCIsIGNoZWNrZWQ6IGZhbHNlIH1dLFxyXG4gICAgICAgICAgY29uZGl0aW9uOiB7fSxcclxuICAgICAgICAgIHZhbHVlOiBudWxsLFxyXG4gICAgICAgICAgc2l6ZTogMTAsXHJcbiAgICAgICAgICBpc01hbmRhdG9yeTogdHJ1ZSxcclxuICAgICAgICAgIG90aGVyVmFsdWU6ICcnLFxyXG4gICAgICAgICAgdHlwZTogXCJzZWxlY3RcIixcclxuICAgICAgICAgIGVkaXRhYmxlOiBmYWxzZSxcclxuICAgICAgICAgIGRlbGV0ZWFibGU6IGZhbHNlLFxyXG4gICAgICAgICAgc3ViTGV2ZWw6IDEsXHJcbiAgICAgICAgICBleHBhbmRNb3JlOiBmYWxzZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGxhYmVsOiBcIkRhdGUgZCdlbnRyw6llXCIsXHJcbiAgICAgICAgICBrZXk6IFwiZGF0ZV9vZl9lbnRyeVwiLFxyXG4gICAgICAgICAgZXhwYW5kT25ib2FyZGluZzogdHJ1ZSxcclxuICAgICAgICAgIGRlZmF1bHRWYWx1ZTogbnVsbCxcclxuICAgICAgICAgIHZhbHVlOiBudWxsLFxyXG4gICAgICAgICAgY29uZGl0aW9uOiB7fSxcclxuICAgICAgICAgIHNpemU6IDgwLFxyXG4gICAgICAgICAgaXNNYW5kYXRvcnk6IHRydWUsXHJcbiAgICAgICAgICBvdGhlclZhbHVlOiAnJyxcclxuICAgICAgICAgIHR5cGU6IFwiZGF0ZVwiLFxyXG4gICAgICAgICAgZWRpdGFibGU6IGZhbHNlLFxyXG4gICAgICAgICAgZGVsZXRlYWJsZTogZmFsc2UsXHJcbiAgICAgICAgICBzdWJMZXZlbDogMSxcclxuICAgICAgICAgIGV4cGFuZE1vcmU6IGZhbHNlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIF0sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIlNlc3Npb24gZCd1dGlsaXNhdGV1clwiLFxyXG4gICAgICBrZXk6IFwic2Vzc2lvbmQndXRpbGlzYXRldXJcIixcclxuICAgICAgZWRpdGFibGU6IHRydWUsXHJcbiAgICAgIGlzQ29uZGl0aW9uYWw6IGZhbHNlLFxyXG4gICAgICBjb25kaXRpb25WYWx1ZTogXCJcIixcclxuICAgICAgY29uZGl0aW9uOiB7fSxcclxuICAgICAgZGVsZXRlYWJsZTogdHJ1ZSxcclxuICAgICAgc2VsZWN0ZWQ6IHRydWUsXHJcbiAgICAgIGV4cGFuZE1vcmU6IGZhbHNlLFxyXG4gICAgICBleHBhbmRPbmJvYXJkaW5nOiB0cnVlLFxyXG4gICAgICBkZWZhdWx0VmFsdWU6IGZhbHNlLFxyXG4gICAgICBzdWZmaXhFbmRwb2ludDogXCJjYXRlZ29yeS91c2VyLXNlc3Npb25cIixcclxuICAgICAgc2VsZWN0b3I6IHtcclxuICAgICAgICBsYWJlbDogXCJDb21wYW55XCIsXHJcbiAgICAgICAga2V5OiBcIkNvbXBhbnlcIixcclxuICAgICAgICBkZWZhdWx0VmFsdWU6IFt7IHZhbHVlOiBcIk5vd3RlYW1cIiwgY2hlY2tlZDogdHJ1ZSB9LCB7IHZhbHVlOiBcIkludGVybmFsXCIsIGNoZWNrZWQ6IGZhbHNlIH1dLFxyXG4gICAgICAgIHZhbHVlOiBcIk5vd3RlYW1cIlxyXG4gICAgICB9LFxyXG4gICAgICB0aWNrZXRUeXBlOiB7XHJcbiAgICAgICAgbGFiZWw6IFwiVHlwZSBkZSB0aWNrZXRcIixcclxuICAgICAgICBrZXk6IFwidHlja2V0VHlwZVwiLFxyXG4gICAgICAgIGRlZmF1bHRWYWx1ZTogW3sgdmFsdWU6IFwiQ3LDqWF0aW9uIGRlIGNvbXB0ZVwiLCBjaGVja2VkOiB0cnVlLCBrZXk6IFwiQ3JlYXRpb25fZGVfY29tcHRlXCIgfSwgeyB2YWx1ZTogXCJDb25maWd1cmF0aW9uIGRlIHBvc3RlXCIsIGNoZWNrZWQ6IGZhbHNlLCBrZXk6IFwiQ29uZmlndXJhdGlvbl9kZV9wb3N0ZVwiIH1dLFxyXG4gICAgICAgIHZhbHVlOiBcIkNyZWF0aW9uX2RlX2NvbXB0ZVwiXHJcbiAgICAgIH0sXHJcbiAgICAgIGZvcm1zOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbGFiZWw6IFwiVXRpbGlzYXRldXIgbG9jYWwgw6AgY3LDqWVyXCIsXHJcbiAgICAgICAgICBrZXk6IFwiVXNlckxvY2FsVG9DcmVhdGVcIixcclxuICAgICAgICAgIGV4cGFuZE9uYm9hcmRpbmc6IHRydWUsXHJcbiAgICAgICAgICBkZWZhdWx0VmFsdWU6IG51bGwsXHJcbiAgICAgICAgICB2YWx1ZTogdHJ1ZSxcclxuICAgICAgICAgIHNpemU6IDgwLFxyXG4gICAgICAgICAgaXNNYW5kYXRvcnk6IGZhbHNlLFxyXG4gICAgICAgICAgb3RoZXJWYWx1ZTogJycsXHJcbiAgICAgICAgICB0eXBlOiBcImNoZWNrYm94XCIsXHJcbiAgICAgICAgICBlZGl0YWJsZTogdHJ1ZSxcclxuICAgICAgICAgIGlzQ29uZGl0aW9uYWw6IGZhbHNlLFxyXG4gICAgICAgICAgY29uZGl0aW9uVmFsdWU6IFwiXCIsXHJcbiAgICAgICAgICBjb25kaXRpb246IHt9LFxyXG4gICAgICAgICAgZGVsZXRlYWJsZTogdHJ1ZSxcclxuICAgICAgICAgIHN1YkxldmVsOiAxLFxyXG4gICAgICAgICAgZXhwYW5kTW9yZTogZmFsc2UsXHJcbiAgICAgICAgICAvKnNlbGVjdG9yOiB7XHJcbiAgICAgICAgICAgIGxhYmVsOiBcIkNvbXBhbnlcIixcclxuICAgICAgICAgICAga2V5OiBcIkNvbXBhbnlcIixcclxuICAgICAgICAgICAgZGVmYXVsdFZhbHVlOiBbeyB2YWx1ZTogXCJOb3d0ZWFtXCIsIGNoZWNrZWQ6IHRydWUgfSwgeyB2YWx1ZTogXCJJbnRlcm5hbFwiLCBjaGVja2VkOiBmYWxzZSB9XSxcclxuICAgICAgICAgICAgdmFsdWU6IFwiTm93dGVhbVwiXHJcbiAgICAgICAgICB9LCovXHJcbiAgICAgICAgICBmb3JtczogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgbGFiZWw6IFwiTG9naW5cIixcclxuICAgICAgICAgICAgICBrZXk6IFwiTG9naW5cIixcclxuICAgICAgICAgICAgICBleHBhbmRPbmJvYXJkaW5nOiB0cnVlLFxyXG4gICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZTogbnVsbCxcclxuICAgICAgICAgICAgICB2YWx1ZTogbnVsbCxcclxuICAgICAgICAgICAgICBzaXplOiA4MCxcclxuICAgICAgICAgICAgICBpc01hbmRhdG9yeTogdHJ1ZSxcclxuICAgICAgICAgICAgICBvdGhlclZhbHVlOiAnJyxcclxuICAgICAgICAgICAgICB0eXBlOiBcInRleHRcIixcclxuICAgICAgICAgICAgICBlZGl0YWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgICBpc0NvbmRpdGlvbmFsOiBmYWxzZSxcclxuICAgICAgICAgICAgICBjb25kaXRpb25WYWx1ZTogXCJcIixcclxuICAgICAgICAgICAgICBjb25kaXRpb246IHt9LFxyXG4gICAgICAgICAgICAgIGRlbGV0ZWFibGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgIHN1YkxldmVsOiAyLFxyXG4gICAgICAgICAgICAgIGV4cGFuZE1vcmU6IGZhbHNlLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgbGFiZWw6IFwiTW90IGRlIHBhc3NlXCIsXHJcbiAgICAgICAgICAgICAga2V5OiBcIlBhc3N3b3JkXCIsXHJcbiAgICAgICAgICAgICAgZXhwYW5kT25ib2FyZGluZzogdHJ1ZSxcclxuICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU6IG51bGwsXHJcbiAgICAgICAgICAgICAgdmFsdWU6IG51bGwsXHJcbiAgICAgICAgICAgICAgc2l6ZTogODAsXHJcbiAgICAgICAgICAgICAgaXNNYW5kYXRvcnk6IHRydWUsXHJcbiAgICAgICAgICAgICAgb3RoZXJWYWx1ZTogJycsXHJcbiAgICAgICAgICAgICAgdHlwZTogXCJwYXNzd29yZFwiLFxyXG4gICAgICAgICAgICAgIGVkaXRhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICAgIGlzQ29uZGl0aW9uYWw6IGZhbHNlLFxyXG4gICAgICAgICAgICAgIGNvbmRpdGlvblZhbHVlOiBcIlwiLFxyXG4gICAgICAgICAgICAgIGNvbmRpdGlvbjoge30sXHJcbiAgICAgICAgICAgICAgZGVsZXRlYWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgICBzdWJMZXZlbDogMixcclxuICAgICAgICAgICAgICBleHBhbmRNb3JlOiBmYWxzZSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIF0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBsYWJlbDogXCJVdGlsaXNhdGV1ciBBRCAoc2VydmV1cikgw6AgY3LDqWVyXCIsXHJcbiAgICAgICAgICBrZXk6IFwiVXNlclNlcnZlclRvQ3JlYXRlXCIsXHJcbiAgICAgICAgICBleHBhbmRPbmJvYXJkaW5nOiB0cnVlLFxyXG4gICAgICAgICAgZGVmYXVsdFZhbHVlOiBudWxsLFxyXG4gICAgICAgICAgdmFsdWU6IHRydWUsXHJcbiAgICAgICAgICBzaXplOiA4MCxcclxuICAgICAgICAgIGlzTWFuZGF0b3J5OiBmYWxzZSxcclxuICAgICAgICAgIG90aGVyVmFsdWU6ICcnLFxyXG4gICAgICAgICAgdHlwZTogXCJjaGVja2JveFwiLFxyXG4gICAgICAgICAgZWRpdGFibGU6IHRydWUsXHJcbiAgICAgICAgICBpc0NvbmRpdGlvbmFsOiBmYWxzZSxcclxuICAgICAgICAgIGNvbmRpdGlvblZhbHVlOiBcIlwiLFxyXG4gICAgICAgICAgY29uZGl0aW9uOiB7fSxcclxuICAgICAgICAgIGRlbGV0ZWFibGU6IHRydWUsXHJcbiAgICAgICAgICBzdWJMZXZlbDogMSxcclxuICAgICAgICAgIGV4cGFuZE1vcmU6IGZhbHNlLFxyXG4gICAgICAgICAgZm9ybXM6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIGxhYmVsOiBcIk5vbSBkZSBkb21haW5lXCIsXHJcbiAgICAgICAgICAgICAga2V5OiBcIkRvbWFpbk5hbWVcIixcclxuICAgICAgICAgICAgICBleHBhbmRPbmJvYXJkaW5nOiB0cnVlLFxyXG4gICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZTogbnVsbCxcclxuICAgICAgICAgICAgICB2YWx1ZTogbnVsbCxcclxuICAgICAgICAgICAgICBzaXplOiA4MCxcclxuICAgICAgICAgICAgICBpc01hbmRhdG9yeTogdHJ1ZSxcclxuICAgICAgICAgICAgICBvdGhlclZhbHVlOiAnJyxcclxuICAgICAgICAgICAgICB0eXBlOiBcInRleHRcIixcclxuICAgICAgICAgICAgICBlZGl0YWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgICBpc0NvbmRpdGlvbmFsOiBmYWxzZSxcclxuICAgICAgICAgICAgICBjb25kaXRpb25WYWx1ZTogXCJcIixcclxuICAgICAgICAgICAgICBjb25kaXRpb246IHt9LFxyXG4gICAgICAgICAgICAgIGRlbGV0ZWFibGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgIHN1YkxldmVsOiAyLFxyXG4gICAgICAgICAgICAgIGV4cGFuZE1vcmU6IGZhbHNlLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgbGFiZWw6IFwiVm90cmUgbG9naW5cIixcclxuICAgICAgICAgICAgICBrZXk6IFwiWW91ckxvZ2luXCIsXHJcbiAgICAgICAgICAgICAgZXhwYW5kT25ib2FyZGluZzogdHJ1ZSxcclxuICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU6IG51bGwsXHJcbiAgICAgICAgICAgICAgdmFsdWU6IG51bGwsXHJcbiAgICAgICAgICAgICAgc2l6ZTogODAsXHJcbiAgICAgICAgICAgICAgaXNNYW5kYXRvcnk6IHRydWUsXHJcbiAgICAgICAgICAgICAgb3RoZXJWYWx1ZTogJycsXHJcbiAgICAgICAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXHJcbiAgICAgICAgICAgICAgZWRpdGFibGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgaXNDb25kaXRpb25hbDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgY29uZGl0aW9uVmFsdWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgY29uZGl0aW9uOiB7fSxcclxuICAgICAgICAgICAgICBkZWxldGVhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICAgIHN1YkxldmVsOiAyLFxyXG4gICAgICAgICAgICAgIGV4cGFuZE1vcmU6IGZhbHNlLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgbGFiZWw6IFwiVm90cmUgbW90IGRlIHBhc3NlXCIsXHJcbiAgICAgICAgICAgICAga2V5OiBcIllvdXJQYXNzd29yZFwiLFxyXG4gICAgICAgICAgICAgIGV4cGFuZE9uYm9hcmRpbmc6IHRydWUsXHJcbiAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlOiBudWxsLFxyXG4gICAgICAgICAgICAgIHZhbHVlOiBudWxsLFxyXG4gICAgICAgICAgICAgIHNpemU6IDgwLFxyXG4gICAgICAgICAgICAgIGlzTWFuZGF0b3J5OiB0cnVlLFxyXG4gICAgICAgICAgICAgIG90aGVyVmFsdWU6ICcnLFxyXG4gICAgICAgICAgICAgIHR5cGU6IFwicGFzc3dvcmRcIixcclxuICAgICAgICAgICAgICBlZGl0YWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgICBpc0NvbmRpdGlvbmFsOiBmYWxzZSxcclxuICAgICAgICAgICAgICBjb25kaXRpb25WYWx1ZTogXCJcIixcclxuICAgICAgICAgICAgICBjb25kaXRpb246IHt9LFxyXG4gICAgICAgICAgICAgIGRlbGV0ZWFibGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgc3ViTGV2ZWw6IDIsXHJcbiAgICAgICAgICAgICAgZXhwYW5kTW9yZTogZmFsc2UsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBsYWJlbDogXCJHcm91cGUgZGUgc8OpY3VyaXTDqVwiLFxyXG4gICAgICAgICAgICAgIGtleTogXCJHcm91cFNlY3VyaXR5XCIsXHJcbiAgICAgICAgICAgICAgZXhwYW5kT25ib2FyZGluZzogdHJ1ZSxcclxuICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU6IG51bGwsXHJcbiAgICAgICAgICAgICAgdmFsdWU6IHRydWUsXHJcbiAgICAgICAgICAgICAgc2l6ZTogODAsXHJcbiAgICAgICAgICAgICAgaXNNYW5kYXRvcnk6IHRydWUsXHJcbiAgICAgICAgICAgICAgb3RoZXJWYWx1ZTogJycsXHJcbiAgICAgICAgICAgICAgdHlwZTogXCJjaGVja2JveFwiLFxyXG4gICAgICAgICAgICAgIGVkaXRhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICAgIGlzQ29uZGl0aW9uYWw6IGZhbHNlLFxyXG4gICAgICAgICAgICAgIGNvbmRpdGlvblZhbHVlOiBcIlwiLFxyXG4gICAgICAgICAgICAgIGNvbmRpdGlvbjoge30sXHJcbiAgICAgICAgICAgICAgZGVsZXRlYWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgICBzdWJMZXZlbDogMixcclxuICAgICAgICAgICAgICBleHBhbmRNb3JlOiBmYWxzZSxcclxuICAgICAgICAgICAgICBmb3JtczogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICBsYWJlbDogXCJVdGlsaXNhdGV1ciBhdmVjIGxlcyBkcm9pdHMgc2ltaWxhaXJlc1wiLFxyXG4gICAgICAgICAgICAgICAgICBrZXk6IFwiVXNlcldpdGhTaW1pbGFyQWNjZXNzXCIsXHJcbiAgICAgICAgICAgICAgICAgIGV4cGFuZE9uYm9hcmRpbmc6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZTogbnVsbCxcclxuICAgICAgICAgICAgICAgICAgdmFsdWU6IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgIHNpemU6IDgwLFxyXG4gICAgICAgICAgICAgICAgICBpc01hbmRhdG9yeTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgb3RoZXJWYWx1ZTogJycsXHJcbiAgICAgICAgICAgICAgICAgIHR5cGU6IFwidGV4dFwiLFxyXG4gICAgICAgICAgICAgICAgICBlZGl0YWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgaXNDb25kaXRpb25hbDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgIGNvbmRpdGlvblZhbHVlOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICBjb25kaXRpb246IHt9LFxyXG4gICAgICAgICAgICAgICAgICBkZWxldGVhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICBzdWJMZXZlbDogMyxcclxuICAgICAgICAgICAgICAgICAgZXhwYW5kTW9yZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICBsYWJlbDogXCJEZXNjcmlwdGlvbnNcIixcclxuICAgICAgICAgICAgICAgICAga2V5OiBcIkRlc2NyaXB0aW9uXCIsXHJcbiAgICAgICAgICAgICAgICAgIGV4cGFuZE9uYm9hcmRpbmc6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZTogbnVsbCxcclxuICAgICAgICAgICAgICAgICAgdmFsdWU6IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgIHNpemU6IDI1NSxcclxuICAgICAgICAgICAgICAgICAgaXNNYW5kYXRvcnk6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgIG90aGVyVmFsdWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICB0eXBlOiBcInRleHRhcmVhXCIsXHJcbiAgICAgICAgICAgICAgICAgIGVkaXRhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICBpc0NvbmRpdGlvbmFsOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgY29uZGl0aW9uVmFsdWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgIGNvbmRpdGlvbjoge30sXHJcbiAgICAgICAgICAgICAgICAgIGRlbGV0ZWFibGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgIHN1YkxldmVsOiAzLFxyXG4gICAgICAgICAgICAgICAgICBleHBhbmRNb3JlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIF0sXHJcbiAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwiTWVzc2FnZXJpZVwiLFxyXG4gICAgICBrZXk6ICdtZXNzYWdlcmllJyxcclxuICAgICAgZXhwYW5kTW9yZTogZmFsc2UsXHJcbiAgICAgIHN1ZmZpeEVuZHBvaW50OiBcImNhdGVnb3J5L21lc3NhZ2VyaWVcIixcclxuICAgICAgc2VsZWN0ZWQ6IHRydWUsXHJcbiAgICAgIGVkaXRhYmxlOiB0cnVlLFxyXG4gICAgICBpc0NvbmRpdGlvbmFsOiBmYWxzZSxcclxuICAgICAgY29uZGl0aW9uVmFsdWU6IFwiXCIsXHJcbiAgICAgIGNvbmRpdGlvbjoge30sXHJcbiAgICAgIGRlbGV0ZWFibGU6IHRydWUsXHJcbiAgICAgIGV4cGFuZE9uYm9hcmRpbmc6IHRydWUsXHJcbiAgICAgIGRlZmF1bHRWYWx1ZTogZmFsc2UsXHJcbiAgICAgIHNlbGVjdG9yOiB7XHJcbiAgICAgICAgbGFiZWw6IFwiQ29tcGFueVwiLFxyXG4gICAgICAgIGtleTogXCJDb21wYW55XCIsXHJcbiAgICAgICAgZGVmYXVsdFZhbHVlOiBbeyB2YWx1ZTogXCJOb3d0ZWFtXCIsIGNoZWNrZWQ6IHRydWUgfSwgeyB2YWx1ZTogXCJJbnRlcm5hbFwiLCBjaGVja2VkOiBmYWxzZSB9XSxcclxuICAgICAgICB2YWx1ZTogXCJOb3d0ZWFtXCJcclxuICAgICAgfSxcclxuICAgICAgdGlja2V0VHlwZToge1xyXG4gICAgICAgIGxhYmVsOiBcIlR5cGUgZGUgdGlja2V0XCIsXHJcbiAgICAgICAga2V5OiBcInR5Y2tldFR5cGVcIixcclxuICAgICAgICBkZWZhdWx0VmFsdWU6IFt7IHZhbHVlOiBcIkNyw6lhdGlvbiBkZSBjb21wdGVcIiwgY2hlY2tlZDogdHJ1ZSwga2V5OiBcIkNyZWF0aW9uX2RlX2NvbXB0ZVwiIH0sIHsgdmFsdWU6IFwiQ29uZmlndXJhdGlvbiBkZSBwb3N0ZVwiLCBjaGVja2VkOiBmYWxzZSwga2V5OiBcIkNvbmZpZ3VyYXRpb25fZGVfcG9zdGVcIiB9XSxcclxuICAgICAgICB2YWx1ZTogXCJDcmVhdGlvbl9kZV9jb21wdGVcIlxyXG4gICAgICB9LFxyXG4gICAgICBmb3JtczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIGxhYmVsOiBcIkFkcmVzc2UgbWFpbCDDoCBjcsOpZXJcIixcclxuICAgICAgICAgIGtleTogXCJFbWFpbFRvQ3JlYXRlXCIsXHJcbiAgICAgICAgICBleHBhbmRPbmJvYXJkaW5nOiB0cnVlLFxyXG4gICAgICAgICAgZGVmYXVsdFZhbHVlOiBudWxsLFxyXG4gICAgICAgICAgdmFsdWU6IHRydWUsXHJcbiAgICAgICAgICBzaXplOiA4MCxcclxuICAgICAgICAgIGlzTWFuZGF0b3J5OiB0cnVlLFxyXG4gICAgICAgICAgb3RoZXJWYWx1ZTogJycsXHJcbiAgICAgICAgICB0eXBlOiBcImNoZWNrYm94XCIsXHJcbiAgICAgICAgICBlZGl0YWJsZTogdHJ1ZSxcclxuICAgICAgICAgIGlzQ29uZGl0aW9uYWw6IGZhbHNlLFxyXG4gICAgICAgICAgY29uZGl0aW9uVmFsdWU6IFwiXCIsXHJcbiAgICAgICAgICBjb25kaXRpb246IHt9LFxyXG4gICAgICAgICAgZGVsZXRlYWJsZTogdHJ1ZSxcclxuICAgICAgICAgIHN1YkxldmVsOiAxLFxyXG4gICAgICAgICAgZXhwYW5kTW9yZTogZmFsc2UsXHJcbiAgICAgICAgICAvKnNlbGVjdG9yOiB7XHJcbiAgICAgICAgICAgIGxhYmVsOiBcIkNvbXBhbnlcIixcclxuICAgICAgICAgICAga2V5OiBcIkNvbXBhbnlcIixcclxuICAgICAgICAgICAgZGVmYXVsdFZhbHVlOiBbeyB2YWx1ZTogXCJOb3d0ZWFtXCIsIGNoZWNrZWQ6IHRydWUgfSwgeyB2YWx1ZTogXCJJbnRlcm5hbFwiLCBjaGVja2VkOiBmYWxzZSB9XSxcclxuICAgICAgICAgICAgdmFsdWU6IFwiTm93dGVhbVwiXHJcbiAgICAgICAgICB9LCovXHJcbiAgICAgICAgICBmb3JtczogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgbGFiZWw6IFwiQWRyZXNzZSBtYWlsXCIsXHJcbiAgICAgICAgICAgICAga2V5OiBcIkVtYWlsXCIsXHJcbiAgICAgICAgICAgICAgZXhwYW5kT25ib2FyZGluZzogdHJ1ZSxcclxuICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU6IG51bGwsXHJcbiAgICAgICAgICAgICAgdmFsdWU6IG51bGwsXHJcbiAgICAgICAgICAgICAgc2l6ZTogODAsXHJcbiAgICAgICAgICAgICAgaXNNYW5kYXRvcnk6IHRydWUsXHJcbiAgICAgICAgICAgICAgb3RoZXJWYWx1ZTogJycsXHJcbiAgICAgICAgICAgICAgdHlwZTogXCJlbWFpbFwiLFxyXG4gICAgICAgICAgICAgIGVkaXRhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICAgIGlzQ29uZGl0aW9uYWw6IGZhbHNlLFxyXG4gICAgICAgICAgICAgIGNvbmRpdGlvblZhbHVlOiBcIlwiLFxyXG4gICAgICAgICAgICAgIGNvbmRpdGlvbjoge30sXHJcbiAgICAgICAgICAgICAgZGVsZXRlYWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgICBzdWJMZXZlbDogMixcclxuICAgICAgICAgICAgICBleHBhbmRNb3JlOiBmYWxzZSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIGxhYmVsOiBcIlR5cGUgZGUgbGljZW5jZSAoc2kgZ8OpcsOpZXMgcGFyIGxlIGNsaWVudClcIixcclxuICAgICAgICAgICAgICBrZXk6IFwiU2VyaWFsS2V5XCIsXHJcbiAgICAgICAgICAgICAgZXhwYW5kT25ib2FyZGluZzogdHJ1ZSxcclxuICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU6IG51bGwsXHJcbiAgICAgICAgICAgICAgdmFsdWU6IG51bGwsXHJcbiAgICAgICAgICAgICAgc2l6ZTogMTAwMCxcclxuICAgICAgICAgICAgICBpc01hbmRhdG9yeTogdHJ1ZSxcclxuICAgICAgICAgICAgICBvdGhlclZhbHVlOiAnJyxcclxuICAgICAgICAgICAgICB0eXBlOiBcInRleHRcIixcclxuICAgICAgICAgICAgICBlZGl0YWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgICBpc0NvbmRpdGlvbmFsOiBmYWxzZSxcclxuICAgICAgICAgICAgICBjb25kaXRpb25WYWx1ZTogXCJcIixcclxuICAgICAgICAgICAgICBjb25kaXRpb246IHt9LFxyXG4gICAgICAgICAgICAgIGRlbGV0ZWFibGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgc3ViTGV2ZWw6IDIsXHJcbiAgICAgICAgICAgICAgZXhwYW5kTW9yZTogZmFsc2UsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICBdLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbGFiZWw6IFwiTGlzdGVzICBkZSBkaXN0cmlidXRpb25cIixcclxuICAgICAgICAgIGtleTogXCJEaXN0cmlidXRpb25MaXN0XCIsXHJcbiAgICAgICAgICBleHBhbmRPbmJvYXJkaW5nOiB0cnVlLFxyXG4gICAgICAgICAgZGVmYXVsdFZhbHVlOiBudWxsLFxyXG4gICAgICAgICAgdmFsdWU6IHRydWUsXHJcbiAgICAgICAgICBzaXplOiA4MCxcclxuICAgICAgICAgIGlzTWFuZGF0b3J5OiB0cnVlLFxyXG4gICAgICAgICAgb3RoZXJWYWx1ZTogJycsXHJcbiAgICAgICAgICB0eXBlOiBcImNoZWNrYm94XCIsXHJcbiAgICAgICAgICBlZGl0YWJsZTogdHJ1ZSxcclxuICAgICAgICAgIGlzQ29uZGl0aW9uYWw6IGZhbHNlLFxyXG4gICAgICAgICAgY29uZGl0aW9uVmFsdWU6IFwiXCIsXHJcbiAgICAgICAgICBjb25kaXRpb246IHt9LFxyXG4gICAgICAgICAgZGVsZXRlYWJsZTogdHJ1ZSxcclxuICAgICAgICAgIHN1YkxldmVsOiAxLFxyXG4gICAgICAgICAgZXhwYW5kTW9yZTogZmFsc2UsXHJcbiAgICAgICAgICAvKnNlbGVjdG9yOiB7XHJcbiAgICAgICAgICAgIGxhYmVsOiBcIkNvbXBhbnlcIixcclxuICAgICAgICAgICAga2V5OiBcIkNvbXBhbnlcIixcclxuICAgICAgICAgICAgZGVmYXVsdFZhbHVlOiBbeyB2YWx1ZTogXCJOb3d0ZWFtXCIsIGNoZWNrZWQ6IHRydWUgfSwgeyB2YWx1ZTogXCJJbnRlcm5hbFwiLCBjaGVja2VkOiBmYWxzZSB9XSxcclxuICAgICAgICAgICAgdmFsdWU6IFwiTm93dGVhbVwiXHJcbiAgICAgICAgICB9LCovXHJcbiAgICAgICAgICBmb3JtczogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgbGFiZWw6IFwiVXRpbGlzYXRldXIgYXZlYyBsZXMgbGlzdGVzIHNpbWlsYWlyZXNcIixcclxuICAgICAgICAgICAgICBrZXk6IFwiVXNlcldpdGhTaW1pbGFyTGlzdFwiLFxyXG4gICAgICAgICAgICAgIGV4cGFuZE9uYm9hcmRpbmc6IHRydWUsXHJcbiAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlOiBudWxsLFxyXG4gICAgICAgICAgICAgIHZhbHVlOiBudWxsLFxyXG4gICAgICAgICAgICAgIHNpemU6IDgwLFxyXG4gICAgICAgICAgICAgIGlzTWFuZGF0b3J5OiB0cnVlLFxyXG4gICAgICAgICAgICAgIG90aGVyVmFsdWU6ICcnLFxyXG4gICAgICAgICAgICAgIHR5cGU6IFwidGV4dFwiLFxyXG4gICAgICAgICAgICAgIGVkaXRhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICAgIGlzQ29uZGl0aW9uYWw6IGZhbHNlLFxyXG4gICAgICAgICAgICAgIGNvbmRpdGlvblZhbHVlOiBcIlwiLFxyXG4gICAgICAgICAgICAgIGNvbmRpdGlvbjoge30sXHJcbiAgICAgICAgICAgICAgZGVsZXRlYWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgICBzdWJMZXZlbDogMixcclxuICAgICAgICAgICAgICBleHBhbmRNb3JlOiBmYWxzZSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIGxhYmVsOiBcIkRlc2NyaXB0aW9uc1wiLFxyXG4gICAgICAgICAgICAgIGtleTogXCJEZXNjcmlwdGlvblwiLFxyXG4gICAgICAgICAgICAgIGV4cGFuZE9uYm9hcmRpbmc6IHRydWUsXHJcbiAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlOiBudWxsLFxyXG4gICAgICAgICAgICAgIHZhbHVlOiBudWxsLFxyXG4gICAgICAgICAgICAgIHNpemU6IDEwMDAsXHJcbiAgICAgICAgICAgICAgaXNNYW5kYXRvcnk6IHRydWUsXHJcbiAgICAgICAgICAgICAgb3RoZXJWYWx1ZTogJycsXHJcbiAgICAgICAgICAgICAgdHlwZTogXCJ0ZXh0YXJlYVwiLFxyXG4gICAgICAgICAgICAgIGVkaXRhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICAgIGlzQ29uZGl0aW9uYWw6IGZhbHNlLFxyXG4gICAgICAgICAgICAgIGNvbmRpdGlvblZhbHVlOiBcIlwiLFxyXG4gICAgICAgICAgICAgIGNvbmRpdGlvbjoge30sXHJcbiAgICAgICAgICAgICAgZGVsZXRlYWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgICBzdWJMZXZlbDogMixcclxuICAgICAgICAgICAgICBleHBhbmRNb3JlOiBmYWxzZSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIF0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBsYWJlbDogXCJBam91dGVyIGRlcyBib2l0ZXMgbWFpbHMgZMOpbMOpZ3XDqXNcIixcclxuICAgICAgICAgIGtleTogXCJBZGRJbmJveE1haWxEZWxlZ2F0ZVwiLFxyXG4gICAgICAgICAgZXhwYW5kT25ib2FyZGluZzogdHJ1ZSxcclxuICAgICAgICAgIGRlZmF1bHRWYWx1ZTogbnVsbCxcclxuICAgICAgICAgIHZhbHVlOiB0cnVlLFxyXG4gICAgICAgICAgc2l6ZTogODAsXHJcbiAgICAgICAgICBpc01hbmRhdG9yeTogdHJ1ZSxcclxuICAgICAgICAgIG90aGVyVmFsdWU6ICcnLFxyXG4gICAgICAgICAgdHlwZTogXCJjaGVja2JveFwiLFxyXG4gICAgICAgICAgZWRpdGFibGU6IHRydWUsXHJcbiAgICAgICAgICBpc0NvbmRpdGlvbmFsOiBmYWxzZSxcclxuICAgICAgICAgIGNvbmRpdGlvblZhbHVlOiBcIlwiLFxyXG4gICAgICAgICAgY29uZGl0aW9uOiB7fSxcclxuICAgICAgICAgIGRlbGV0ZWFibGU6IHRydWUsXHJcbiAgICAgICAgICBzdWJMZXZlbDogMSxcclxuICAgICAgICAgIGV4cGFuZE1vcmU6IGZhbHNlLFxyXG4gICAgICAgICAgLypzZWxlY3Rvcjoge1xyXG4gICAgICAgICAgICBsYWJlbDogXCJDb21wYW55XCIsXHJcbiAgICAgICAgICAgIGtleTogXCJDb21wYW55XCIsXHJcbiAgICAgICAgICAgIGRlZmF1bHRWYWx1ZTogW3sgdmFsdWU6IFwiTm93dGVhbVwiLCBjaGVja2VkOiB0cnVlIH0sIHsgdmFsdWU6IFwiSW50ZXJuYWxcIiwgY2hlY2tlZDogZmFsc2UgfV0sXHJcbiAgICAgICAgICAgIHZhbHVlOiBcIk5vd3RlYW1cIlxyXG4gICAgICAgICAgfSwqL1xyXG4gICAgICAgICAgZm9ybXM6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIGxhYmVsOiBcIkRlc2NyaXB0aW9uc1wiLFxyXG4gICAgICAgICAgICAgIGtleTogXCJEZXNjcmlwdGlvblwiLFxyXG4gICAgICAgICAgICAgIGV4cGFuZE9uYm9hcmRpbmc6IHRydWUsXHJcbiAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlOiBudWxsLFxyXG4gICAgICAgICAgICAgIHZhbHVlOiBudWxsLFxyXG4gICAgICAgICAgICAgIHNpemU6IDEwMDAsXHJcbiAgICAgICAgICAgICAgaXNNYW5kYXRvcnk6IHRydWUsXHJcbiAgICAgICAgICAgICAgb3RoZXJWYWx1ZTogJycsXHJcbiAgICAgICAgICAgICAgdHlwZTogXCJ0ZXh0YXJlYVwiLFxyXG4gICAgICAgICAgICAgIGVkaXRhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICAgIGlzQ29uZGl0aW9uYWw6IGZhbHNlLFxyXG4gICAgICAgICAgICAgIGNvbmRpdGlvblZhbHVlOiBcIlwiLFxyXG4gICAgICAgICAgICAgIGNvbmRpdGlvbjoge30sXHJcbiAgICAgICAgICAgICAgZGVsZXRlYWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgICBzdWJMZXZlbDogMixcclxuICAgICAgICAgICAgICBleHBhbmRNb3JlOiBmYWxzZSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIF0sXHJcbiAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwiU2VydmV1clwiLFxyXG4gICAgICBrZXk6ICdzZXJ2ZXVyJyxcclxuICAgICAgZXhwYW5kTW9yZTogZmFsc2UsXHJcbiAgICAgIHN1ZmZpeEVuZHBvaW50OiBcImNhdGVnb3J5L3NlcnZldXJcIixcclxuICAgICAgc2VsZWN0ZWQ6IHRydWUsXHJcbiAgICAgIGVkaXRhYmxlOiB0cnVlLFxyXG4gICAgICBpc0NvbmRpdGlvbmFsOiBmYWxzZSxcclxuICAgICAgY29uZGl0aW9uVmFsdWU6IFwiXCIsXHJcbiAgICAgIGNvbmRpdGlvbjoge30sXHJcbiAgICAgIGRlbGV0ZWFibGU6IHRydWUsXHJcbiAgICAgIGV4cGFuZE9uYm9hcmRpbmc6IHRydWUsXHJcbiAgICAgIGRlZmF1bHRWYWx1ZTogZmFsc2UsXHJcbiAgICAgIHNlbGVjdG9yOiB7XHJcbiAgICAgICAgbGFiZWw6IFwiQ29tcGFueVwiLFxyXG4gICAgICAgIGtleTogXCJDb21wYW55XCIsXHJcbiAgICAgICAgZGVmYXVsdFZhbHVlOiBbeyB2YWx1ZTogXCJOb3d0ZWFtXCIsIGNoZWNrZWQ6IHRydWUgfSwgeyB2YWx1ZTogXCJJbnRlcm5hbFwiLCBjaGVja2VkOiBmYWxzZSB9XSxcclxuICAgICAgICB2YWx1ZTogXCJOb3d0ZWFtXCJcclxuICAgICAgfSxcclxuICAgICAgdGlja2V0VHlwZToge1xyXG4gICAgICAgIGxhYmVsOiBcIlR5cGUgZGUgdGlja2V0XCIsXHJcbiAgICAgICAga2V5OiBcInR5Y2tldFR5cGVcIixcclxuICAgICAgICBkZWZhdWx0VmFsdWU6IFt7IHZhbHVlOiBcIkNyw6lhdGlvbiBkZSBjb21wdGVcIiwgY2hlY2tlZDogdHJ1ZSwga2V5OiBcIkNyZWF0aW9uX2RlX2NvbXB0ZVwiIH0sIHsgdmFsdWU6IFwiQ29uZmlndXJhdGlvbiBkZSBwb3N0ZVwiLCBjaGVja2VkOiBmYWxzZSwga2V5OiBcIkNvbmZpZ3VyYXRpb25fZGVfcG9zdGVcIiB9XSxcclxuICAgICAgICB2YWx1ZTogXCJDcmVhdGlvbl9kZV9jb21wdGVcIlxyXG4gICAgICB9LFxyXG4gICAgICBmb3JtczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIGxhYmVsOiBcIkFjY8OocyBhdXggbGVjdGV1cnMgcsOpc2VhdXhcIixcclxuICAgICAgICAgIGtleTogXCJSZWFkTmV0d29ya0FjY2Vzc1wiLFxyXG4gICAgICAgICAgZXhwYW5kT25ib2FyZGluZzogdHJ1ZSxcclxuICAgICAgICAgIGRlZmF1bHRWYWx1ZTogbnVsbCxcclxuICAgICAgICAgIHZhbHVlOiB0cnVlLFxyXG4gICAgICAgICAgc2l6ZTogODAsXHJcbiAgICAgICAgICBpc01hbmRhdG9yeTogZmFsc2UsXHJcbiAgICAgICAgICBvdGhlclZhbHVlOiAnJyxcclxuICAgICAgICAgIHR5cGU6IFwiY2hlY2tib3hcIixcclxuICAgICAgICAgIGVkaXRhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgaXNDb25kaXRpb25hbDogZmFsc2UsXHJcbiAgICAgICAgICBjb25kaXRpb25WYWx1ZTogXCJcIixcclxuICAgICAgICAgIGNvbmRpdGlvbjoge30sXHJcbiAgICAgICAgICBkZWxldGVhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgc3ViTGV2ZWw6IDEsXHJcbiAgICAgICAgICBleHBhbmRNb3JlOiBmYWxzZSxcclxuICAgICAgICAgIC8qc2VsZWN0b3I6IHtcclxuICAgICAgICAgICAgbGFiZWw6IFwiQ29tcGFueVwiLFxyXG4gICAgICAgICAgICBrZXk6IFwiQ29tcGFueVwiLFxyXG4gICAgICAgICAgICBkZWZhdWx0VmFsdWU6IFt7IHZhbHVlOiBcIk5vd3RlYW1cIiwgY2hlY2tlZDogdHJ1ZSB9LCB7IHZhbHVlOiBcIkludGVybmFsXCIsIGNoZWNrZWQ6IGZhbHNlIH1dLFxyXG4gICAgICAgICAgICB2YWx1ZTogXCJOb3d0ZWFtXCJcclxuICAgICAgICAgIH0sKi9cclxuICAgICAgICAgIGZvcm1zOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBsYWJlbDogXCJOb20gZHUgc2VydmV1clwiLFxyXG4gICAgICAgICAgICAgIGtleTogXCJTZXJ2ZXJOYW1lXCIsXHJcbiAgICAgICAgICAgICAgZXhwYW5kT25ib2FyZGluZzogdHJ1ZSxcclxuICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU6IG51bGwsXHJcbiAgICAgICAgICAgICAgdmFsdWU6IG51bGwsXHJcbiAgICAgICAgICAgICAgc2l6ZTogODAsXHJcbiAgICAgICAgICAgICAgaXNNYW5kYXRvcnk6IHRydWUsXHJcbiAgICAgICAgICAgICAgb3RoZXJWYWx1ZTogJycsXHJcbiAgICAgICAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXHJcbiAgICAgICAgICAgICAgZWRpdGFibGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgaXNDb25kaXRpb25hbDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgY29uZGl0aW9uVmFsdWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgY29uZGl0aW9uOiB7fSxcclxuICAgICAgICAgICAgICBkZWxldGVhYmxlOiBmYWxzZSxcclxuICAgICAgICAgICAgICBzdWJMZXZlbDogMixcclxuICAgICAgICAgICAgICBleHBhbmRNb3JlOiBmYWxzZSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIGxhYmVsOiBcIkNoZW1pbiBkdSBkb3NzaWVyXCIsXHJcbiAgICAgICAgICAgICAga2V5OiBcIkZvbGRlclBhdGhcIixcclxuICAgICAgICAgICAgICBleHBhbmRPbmJvYXJkaW5nOiB0cnVlLFxyXG4gICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZTogbnVsbCxcclxuICAgICAgICAgICAgICB2YWx1ZTogbnVsbCxcclxuICAgICAgICAgICAgICBzaXplOiA4MCxcclxuICAgICAgICAgICAgICBpc01hbmRhdG9yeTogdHJ1ZSxcclxuICAgICAgICAgICAgICBvdGhlclZhbHVlOiAnJyxcclxuICAgICAgICAgICAgICB0eXBlOiBcInRleHRcIixcclxuICAgICAgICAgICAgICBlZGl0YWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgICBpc0NvbmRpdGlvbmFsOiBmYWxzZSxcclxuICAgICAgICAgICAgICBjb25kaXRpb25WYWx1ZTogXCJcIixcclxuICAgICAgICAgICAgICBjb25kaXRpb246IHt9LFxyXG4gICAgICAgICAgICAgIGRlbGV0ZWFibGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgc3ViTGV2ZWw6IDIsXHJcbiAgICAgICAgICAgICAgZXhwYW5kTW9yZTogZmFsc2UsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBsYWJlbDogXCJMZXR0cmUgw6AgYXR0cmlidWVyXCIsXHJcbiAgICAgICAgICAgICAga2V5OiBcIkF0dHJpYnV0TGV0dGVyXCIsXHJcbiAgICAgICAgICAgICAgZXhwYW5kT25ib2FyZGluZzogdHJ1ZSxcclxuICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU6IG51bGwsXHJcbiAgICAgICAgICAgICAgdmFsdWU6IG51bGwsXHJcbiAgICAgICAgICAgICAgc2l6ZTogODAsXHJcbiAgICAgICAgICAgICAgaXNNYW5kYXRvcnk6IHRydWUsXHJcbiAgICAgICAgICAgICAgb3RoZXJWYWx1ZTogJycsXHJcbiAgICAgICAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXHJcbiAgICAgICAgICAgICAgZWRpdGFibGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgaXNDb25kaXRpb25hbDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgY29uZGl0aW9uVmFsdWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgY29uZGl0aW9uOiB7fSxcclxuICAgICAgICAgICAgICBkZWxldGVhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICAgIHN1YkxldmVsOiAyLFxyXG4gICAgICAgICAgICAgIGV4cGFuZE1vcmU6IGZhbHNlLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgXSxcclxuICAgICAgICB9LFxyXG4gICAgICBdLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJWUE5cIixcclxuICAgICAga2V5OiAndnBuJyxcclxuICAgICAgZXhwYW5kTW9yZTogZmFsc2UsXHJcbiAgICAgIHN1ZmZpeEVuZHBvaW50OiBcImNhdGVnb3J5L3ZwblwiLFxyXG4gICAgICBzZWxlY3RlZDogdHJ1ZSxcclxuICAgICAgZXhwYW5kT25ib2FyZGluZzogdHJ1ZSxcclxuICAgICAgZGVmYXVsdFZhbHVlOiBmYWxzZSxcclxuICAgICAgZWRpdGFibGU6IHRydWUsXHJcbiAgICAgIGlzQ29uZGl0aW9uYWw6IGZhbHNlLFxyXG4gICAgICBjb25kaXRpb25WYWx1ZTogXCJcIixcclxuICAgICAgY29uZGl0aW9uOiB7fSxcclxuICAgICAgZGVsZXRlYWJsZTogdHJ1ZSxcclxuICAgICAgc2VsZWN0b3I6IHtcclxuICAgICAgICBsYWJlbDogXCJDb21wYW55XCIsXHJcbiAgICAgICAga2V5OiBcIkNvbXBhbnlcIixcclxuICAgICAgICBkZWZhdWx0VmFsdWU6IFt7IHZhbHVlOiBcIk5vd3RlYW1cIiwgY2hlY2tlZDogdHJ1ZSB9LCB7IHZhbHVlOiBcIkludGVybmFsXCIsIGNoZWNrZWQ6IGZhbHNlIH1dLFxyXG4gICAgICAgIHZhbHVlOiBcIk5vd3RlYW1cIlxyXG4gICAgICB9LFxyXG4gICAgICB0aWNrZXRUeXBlOiB7XHJcbiAgICAgICAgbGFiZWw6IFwiVHlwZSBkZSB0aWNrZXRcIixcclxuICAgICAgICBrZXk6IFwidHlja2V0VHlwZVwiLFxyXG4gICAgICAgIGRlZmF1bHRWYWx1ZTogW3sgdmFsdWU6IFwiQ3LDqWF0aW9uIGRlIGNvbXB0ZVwiLCBjaGVja2VkOiB0cnVlLCBrZXk6IFwiQ3JlYXRpb25fZGVfY29tcHRlXCIgfSwgeyB2YWx1ZTogXCJDb25maWd1cmF0aW9uIGRlIHBvc3RlXCIsIGNoZWNrZWQ6IGZhbHNlLCBrZXk6IFwiQ29uZmlndXJhdGlvbl9kZV9wb3N0ZVwiIH1dLFxyXG4gICAgICAgIHZhbHVlOiBcIkNyZWF0aW9uX2RlX2NvbXB0ZVwiXHJcbiAgICAgIH0sXHJcbiAgICAgIGZvcm1zOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbGFiZWw6IFwiQWNjw6hzIGF1IFZQTlwiLFxyXG4gICAgICAgICAga2V5OiBcIlZwbkFjY2Vzc1wiLFxyXG4gICAgICAgICAgZXhwYW5kT25ib2FyZGluZzogdHJ1ZSxcclxuICAgICAgICAgIGRlZmF1bHRWYWx1ZTogbnVsbCxcclxuICAgICAgICAgIHZhbHVlOiB0cnVlLFxyXG4gICAgICAgICAgc2l6ZTogODAsXHJcbiAgICAgICAgICBpc01hbmRhdG9yeTogZmFsc2UsXHJcbiAgICAgICAgICBvdGhlclZhbHVlOiAnJyxcclxuICAgICAgICAgIHR5cGU6IFwiY2hlY2tib3hcIixcclxuICAgICAgICAgIGVkaXRhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgaXNDb25kaXRpb25hbDogZmFsc2UsXHJcbiAgICAgICAgICBjb25kaXRpb25WYWx1ZTogXCJcIixcclxuICAgICAgICAgIGNvbmRpdGlvbjoge30sXHJcbiAgICAgICAgICBkZWxldGVhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgc3ViTGV2ZWw6IDEsXHJcbiAgICAgICAgICBleHBhbmRNb3JlOiBmYWxzZSxcclxuICAgICAgICAgIC8vZm9ybXM6IFtdXHJcbiAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwiSW1wcmltYW50ZXNcIixcclxuICAgICAga2V5OiAnaW1wcmltYW50ZXMnLFxyXG4gICAgICBleHBhbmRNb3JlOiBmYWxzZSxcclxuICAgICAgc3VmZml4RW5kcG9pbnQ6IFwiY2F0ZWdvcnkvaW1wcmltZW50ZVwiLFxyXG4gICAgICBzZWxlY3RlZDogdHJ1ZSxcclxuICAgICAgZWRpdGFibGU6IHRydWUsXHJcbiAgICAgIGlzQ29uZGl0aW9uYWw6IGZhbHNlLFxyXG4gICAgICBjb25kaXRpb25WYWx1ZTogXCJcIixcclxuICAgICAgY29uZGl0aW9uOiB7fSxcclxuICAgICAgZGVsZXRlYWJsZTogdHJ1ZSxcclxuICAgICAgZXhwYW5kT25ib2FyZGluZzogdHJ1ZSxcclxuICAgICAgZGVmYXVsdFZhbHVlOiBmYWxzZSxcclxuICAgICAgdGlja2V0VHlwZToge1xyXG4gICAgICAgIGxhYmVsOiBcIlR5cGUgZGUgdGlja2V0XCIsXHJcbiAgICAgICAga2V5OiBcInR5Y2tldFR5cGVcIixcclxuICAgICAgICBkZWZhdWx0VmFsdWU6IFt7IHZhbHVlOiBcIkNyw6lhdGlvbiBkZSBjb21wdGVcIiwgY2hlY2tlZDogdHJ1ZSwga2V5OiBcIkNyZWF0aW9uX2RlX2NvbXB0ZVwiIH0sIHsgdmFsdWU6IFwiQ29uZmlndXJhdGlvbiBkZSBwb3N0ZVwiLCBjaGVja2VkOiBmYWxzZSwga2V5OiBcIkNvbmZpZ3VyYXRpb25fZGVfcG9zdGVcIiB9XSxcclxuICAgICAgICB2YWx1ZTogXCJDcmVhdGlvbl9kZV9jb21wdGVcIlxyXG4gICAgICB9LFxyXG4gICAgICBzZWxlY3Rvcjoge1xyXG4gICAgICAgIGxhYmVsOiBcIkNvbXBhbnlcIixcclxuICAgICAgICBrZXk6IFwiQ29tcGFueVwiLFxyXG4gICAgICAgIGRlZmF1bHRWYWx1ZTogW3sgdmFsdWU6IFwiTm93dGVhbVwiLCBjaGVja2VkOiB0cnVlIH0sIHsgdmFsdWU6IFwiSW50ZXJuYWxcIiwgY2hlY2tlZDogZmFsc2UgfV0sXHJcbiAgICAgICAgdmFsdWU6IFwiTm93dGVhbVwiXHJcbiAgICAgIH0sXHJcbiAgICAgIGZvcm1zOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbGFiZWw6IFwiQWNjw6hzIGF1eCBpbXByaW1hbnRlc1wiLFxyXG4gICAgICAgICAga2V5OiBcIlByaW50ZXJBY2Nlc3NcIixcclxuICAgICAgICAgIGV4cGFuZE9uYm9hcmRpbmc6IHRydWUsXHJcbiAgICAgICAgICBkZWZhdWx0VmFsdWU6IG51bGwsXHJcbiAgICAgICAgICB2YWx1ZTogdHJ1ZSxcclxuICAgICAgICAgIHNpemU6IDgwLFxyXG4gICAgICAgICAgaXNNYW5kYXRvcnk6IGZhbHNlLFxyXG4gICAgICAgICAgb3RoZXJWYWx1ZTogJycsXHJcbiAgICAgICAgICB0eXBlOiBcImNoZWNrYm94XCIsXHJcbiAgICAgICAgICBlZGl0YWJsZTogdHJ1ZSxcclxuICAgICAgICAgIGlzQ29uZGl0aW9uYWw6IGZhbHNlLFxyXG4gICAgICAgICAgY29uZGl0aW9uVmFsdWU6IFwiXCIsXHJcbiAgICAgICAgICBjb25kaXRpb246IHt9LFxyXG4gICAgICAgICAgZGVsZXRlYWJsZTogdHJ1ZSxcclxuICAgICAgICAgIHN1YkxldmVsOiAxLFxyXG4gICAgICAgICAgZXhwYW5kTW9yZTogZmFsc2UsXHJcbiAgICAgICAgICAvKnNlbGVjdG9yOiB7XHJcbiAgICAgICAgICAgIGxhYmVsOiBcIkNvbXBhbnlcIixcclxuICAgICAgICAgICAga2V5OiBcIkNvbXBhbnlcIixcclxuICAgICAgICAgICAgZGVmYXVsdFZhbHVlOiBbeyB2YWx1ZTogXCJOb3d0ZWFtXCIsIGNoZWNrZWQ6IHRydWUgfSwgeyB2YWx1ZTogXCJJbnRlcm5hbFwiLCBjaGVja2VkOiBmYWxzZSB9XSxcclxuICAgICAgICAgICAgdmFsdWU6IFwiTm93dGVhbVwiXHJcbiAgICAgICAgICB9LCovXHJcbiAgICAgICAgICBmb3JtczogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgbGFiZWw6IFwiTm9tIC8gTW9kw6hsZSBkZSBsJ2ltcHJpbWFudGUgLyBsb2NhbGlzYXRpb25cIixcclxuICAgICAgICAgICAgICBrZXk6IFwiUHJpbnRlck5hbWVcIixcclxuICAgICAgICAgICAgICBleHBhbmRPbmJvYXJkaW5nOiB0cnVlLFxyXG4gICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZTogbnVsbCxcclxuICAgICAgICAgICAgICB2YWx1ZTogbnVsbCxcclxuICAgICAgICAgICAgICBzaXplOiAxMDAwLFxyXG4gICAgICAgICAgICAgIGlzTWFuZGF0b3J5OiB0cnVlLFxyXG4gICAgICAgICAgICAgIG90aGVyVmFsdWU6ICcnLFxyXG4gICAgICAgICAgICAgIHR5cGU6IFwidGV4dGFyZWFcIixcclxuICAgICAgICAgICAgICBlZGl0YWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgICBpc0NvbmRpdGlvbmFsOiBmYWxzZSxcclxuICAgICAgICAgICAgICBjb25kaXRpb25WYWx1ZTogXCJcIixcclxuICAgICAgICAgICAgICBjb25kaXRpb246IHt9LFxyXG4gICAgICAgICAgICAgIGRlbGV0ZWFibGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgc3ViTGV2ZWw6IDIsXHJcbiAgICAgICAgICAgICAgZXhwYW5kTW9yZTogZmFsc2UsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICBdLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIF0sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIkFwcGxpY2F0aW9uc1wiLFxyXG4gICAgICBrZXk6ICdhcHBsaWNhdGlvbnMnLFxyXG4gICAgICBleHBhbmRNb3JlOiBmYWxzZSxcclxuICAgICAgc3VmZml4RW5kcG9pbnQ6IFwiY2F0ZWdvcnkvYXBwbGljYXRpb25cIixcclxuICAgICAgc2VsZWN0ZWQ6IHRydWUsXHJcbiAgICAgIGVkaXRhYmxlOiB0cnVlLFxyXG4gICAgICBpc0NvbmRpdGlvbmFsOiBmYWxzZSxcclxuICAgICAgY29uZGl0aW9uVmFsdWU6IFwiXCIsXHJcbiAgICAgIGNvbmRpdGlvbjoge30sXHJcbiAgICAgIGV4cGFuZE9uYm9hcmRpbmc6IHRydWUsXHJcbiAgICAgIGRlZmF1bHRWYWx1ZTogZmFsc2UsXHJcbiAgICAgIGRlbGV0ZWFibGU6IHRydWUsXHJcbiAgICAgIHNlbGVjdG9yOiB7XHJcbiAgICAgICAgbGFiZWw6IFwiQ29tcGFueVwiLFxyXG4gICAgICAgIGtleTogXCJDb21wYW55XCIsXHJcbiAgICAgICAgZGVmYXVsdFZhbHVlOiBbeyB2YWx1ZTogXCJOb3d0ZWFtXCIsIGNoZWNrZWQ6IHRydWUgfSwgeyB2YWx1ZTogXCJJbnRlcm5hbFwiLCBjaGVja2VkOiBmYWxzZSB9XSxcclxuICAgICAgICB2YWx1ZTogXCJOb3d0ZWFtXCJcclxuICAgICAgfSxcclxuICAgICAgdGlja2V0VHlwZToge1xyXG4gICAgICAgIGxhYmVsOiBcIlR5cGUgZGUgdGlja2V0XCIsXHJcbiAgICAgICAga2V5OiBcInR5Y2tldFR5cGVcIixcclxuICAgICAgICBkZWZhdWx0VmFsdWU6IFt7IHZhbHVlOiBcIkNyw6lhdGlvbiBkZSBjb21wdGVcIiwgY2hlY2tlZDogdHJ1ZSwga2V5OiBcIkNyZWF0aW9uX2RlX2NvbXB0ZVwiIH0sIHsgdmFsdWU6IFwiQ29uZmlndXJhdGlvbiBkZSBwb3N0ZVwiLCBjaGVja2VkOiBmYWxzZSwga2V5OiBcIkNvbmZpZ3VyYXRpb25fZGVfcG9zdGVcIiB9XSxcclxuICAgICAgICB2YWx1ZTogXCJDcmVhdGlvbl9kZV9jb21wdGVcIlxyXG4gICAgICB9LFxyXG4gICAgICBmb3JtczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIGxhYmVsOiBcIkFjY8OocyBhdXggYXBwbGljYXRpb25zID9cIixcclxuICAgICAgICAgIGtleTogXCJBcHBsaWNhdGlvbkFjY2Vzc1wiLFxyXG4gICAgICAgICAgZXhwYW5kT25ib2FyZGluZzogdHJ1ZSxcclxuICAgICAgICAgIGRlZmF1bHRWYWx1ZTogbnVsbCxcclxuICAgICAgICAgIHZhbHVlOiB0cnVlLFxyXG4gICAgICAgICAgc2l6ZTogODAsXHJcbiAgICAgICAgICBpc01hbmRhdG9yeTogZmFsc2UsXHJcbiAgICAgICAgICBvdGhlclZhbHVlOiAnJyxcclxuICAgICAgICAgIHR5cGU6IFwiY2hlY2tib3hcIixcclxuICAgICAgICAgIGVkaXRhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgaXNDb25kaXRpb25hbDogZmFsc2UsXHJcbiAgICAgICAgICBjb25kaXRpb25WYWx1ZTogXCJcIixcclxuICAgICAgICAgIGNvbmRpdGlvbjoge30sXHJcbiAgICAgICAgICBkZWxldGVhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgc3ViTGV2ZWw6IDEsXHJcbiAgICAgICAgICBleHBhbmRNb3JlOiBmYWxzZSxcclxuICAgICAgICAgIC8qc2VsZWN0b3I6IHtcclxuICAgICAgICAgICAgbGFiZWw6IFwiQ29tcGFueVwiLFxyXG4gICAgICAgICAgICBrZXk6IFwiQ29tcGFueVwiLFxyXG4gICAgICAgICAgICBkZWZhdWx0VmFsdWU6IFt7IHZhbHVlOiBcIk5vd3RlYW1cIiwgY2hlY2tlZDogdHJ1ZSB9LCB7IHZhbHVlOiBcIkludGVybmFsXCIsIGNoZWNrZWQ6IGZhbHNlIH1dLFxyXG4gICAgICAgICAgICB2YWx1ZTogXCJOb3d0ZWFtXCJcclxuICAgICAgICAgIH0sKi9cclxuICAgICAgICAgIGZvcm1zOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBsYWJlbDogXCJEZXNjcmlwdGlvbnNcIixcclxuICAgICAgICAgICAgICBrZXk6IFwiRGVzY3JpcHRpb25cIixcclxuICAgICAgICAgICAgICBleHBhbmRPbmJvYXJkaW5nOiB0cnVlLFxyXG4gICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZTogbnVsbCxcclxuICAgICAgICAgICAgICB2YWx1ZTogbnVsbCxcclxuICAgICAgICAgICAgICBzaXplOiAxMDAwLFxyXG4gICAgICAgICAgICAgIGlzTWFuZGF0b3J5OiB0cnVlLFxyXG4gICAgICAgICAgICAgIG90aGVyVmFsdWU6ICcnLFxyXG4gICAgICAgICAgICAgIHR5cGU6IFwidGV4dGFyZWFcIixcclxuICAgICAgICAgICAgICBlZGl0YWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgICBpc0NvbmRpdGlvbmFsOiBmYWxzZSxcclxuICAgICAgICAgICAgICBjb25kaXRpb25WYWx1ZTogXCJcIixcclxuICAgICAgICAgICAgICBjb25kaXRpb246IHt9LFxyXG4gICAgICAgICAgICAgIGRlbGV0ZWFibGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgc3ViTGV2ZWw6IDIsXHJcbiAgICAgICAgICAgICAgZXhwYW5kTW9yZTogZmFsc2UsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICBdLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIF0sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIlBvc3RlXCIsXHJcbiAgICAgIGtleTogJ3Bvc3RlJyxcclxuICAgICAgZXhwYW5kTW9yZTogZmFsc2UsXHJcbiAgICAgIHN1ZmZpeEVuZHBvaW50OiBcImNhdGVnb3J5L3Bvc3RlXCIsXHJcbiAgICAgIHNlbGVjdGVkOiB0cnVlLFxyXG4gICAgICBleHBhbmRPbmJvYXJkaW5nOiB0cnVlLFxyXG4gICAgICBkZWZhdWx0VmFsdWU6IGZhbHNlLFxyXG4gICAgICBlZGl0YWJsZTogdHJ1ZSxcclxuICAgICAgaXNDb25kaXRpb25hbDogZmFsc2UsXHJcbiAgICAgIGNvbmRpdGlvblZhbHVlOiBcIlwiLFxyXG4gICAgICBjb25kaXRpb246IHt9LFxyXG4gICAgICBkZWxldGVhYmxlOiB0cnVlLFxyXG4gICAgICBzZWxlY3Rvcjoge1xyXG4gICAgICAgIGxhYmVsOiBcIkNvbXBhbnlcIixcclxuICAgICAgICBrZXk6IFwiQ29tcGFueVwiLFxyXG4gICAgICAgIGRlZmF1bHRWYWx1ZTogW3sgdmFsdWU6IFwiTm93dGVhbVwiLCBjaGVja2VkOiB0cnVlIH0sIHsgdmFsdWU6IFwiSW50ZXJuYWxcIiwgY2hlY2tlZDogZmFsc2UgfV0sXHJcbiAgICAgICAgdmFsdWU6IFwiTm93dGVhbVwiXHJcbiAgICAgIH0sXHJcbiAgICAgIHRpY2tldFR5cGU6IHtcclxuICAgICAgICBsYWJlbDogXCJUeXBlIGRlIHRpY2tldFwiLFxyXG4gICAgICAgIGtleTogXCJ0eWNrZXRUeXBlXCIsXHJcbiAgICAgICAgZGVmYXVsdFZhbHVlOiBbeyB2YWx1ZTogXCJDcsOpYXRpb24gZGUgY29tcHRlXCIsIGNoZWNrZWQ6IHRydWUsIGtleTogXCJDcmVhdGlvbl9kZV9jb21wdGVcIiB9LCB7IHZhbHVlOiBcIkNvbmZpZ3VyYXRpb24gZGUgcG9zdGVcIiwgY2hlY2tlZDogZmFsc2UsIGtleTogXCJDb25maWd1cmF0aW9uX2RlX3Bvc3RlXCIgfV0sXHJcbiAgICAgICAgdmFsdWU6IFwiQ3JlYXRpb25fZGVfY29tcHRlXCJcclxuICAgICAgfSxcclxuICAgICAgZm9ybXM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBsYWJlbDogXCJQYXJhbcOpdHJhZ2UgZGUgcG9zdGVcIixcclxuICAgICAgICAgIGtleTogXCJQb3N0UGFyYW1ldGVyXCIsXHJcbiAgICAgICAgICBleHBhbmRPbmJvYXJkaW5nOiB0cnVlLFxyXG4gICAgICAgICAgZGVmYXVsdFZhbHVlOiBudWxsLFxyXG4gICAgICAgICAgdmFsdWU6IHRydWUsXHJcbiAgICAgICAgICBzaXplOiA4MCxcclxuICAgICAgICAgIGlzTWFuZGF0b3J5OiBmYWxzZSxcclxuICAgICAgICAgIG90aGVyVmFsdWU6ICcnLFxyXG4gICAgICAgICAgdHlwZTogXCJjaGVja2JveFwiLFxyXG4gICAgICAgICAgZWRpdGFibGU6IHRydWUsXHJcbiAgICAgICAgICBpc0NvbmRpdGlvbmFsOiBmYWxzZSxcclxuICAgICAgICAgIGNvbmRpdGlvblZhbHVlOiBcIlwiLFxyXG4gICAgICAgICAgY29uZGl0aW9uOiB7fSxcclxuICAgICAgICAgIGRlbGV0ZWFibGU6IHRydWUsXHJcbiAgICAgICAgICBzdWJMZXZlbDogMSxcclxuICAgICAgICAgIGV4cGFuZE1vcmU6IGZhbHNlLFxyXG4gICAgICAgICAgLypzZWxlY3Rvcjoge1xyXG4gICAgICAgICAgICBsYWJlbDogXCJDb21wYW55XCIsXHJcbiAgICAgICAgICAgIGtleTogXCJDb21wYW55XCIsXHJcbiAgICAgICAgICAgIGRlZmF1bHRWYWx1ZTogW3sgdmFsdWU6IFwiTm93dGVhbVwiLCBjaGVja2VkOiB0cnVlIH0sIHsgdmFsdWU6IFwiSW50ZXJuYWxcIiwgY2hlY2tlZDogZmFsc2UgfV0sXHJcbiAgICAgICAgICAgIHZhbHVlOiBcIk5vd3RlYW1cIlxyXG4gICAgICAgICAgfSwqL1xyXG4gICAgICAgICAgZm9ybXM6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIGxhYmVsOiBcIlLDqWFsbG9jYXRpb24gZCfDqXF1aXBlbWVudFwiLFxyXG4gICAgICAgICAgICAgIGtleTogXCJSZWFsb2NhdGVkRXF1aXBtZW50XCIsXHJcbiAgICAgICAgICAgICAgZXhwYW5kT25ib2FyZGluZzogdHJ1ZSxcclxuICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU6IG51bGwsXHJcbiAgICAgICAgICAgICAgdmFsdWU6IG51bGwsXHJcbiAgICAgICAgICAgICAgc2l6ZTogMTAwMCxcclxuICAgICAgICAgICAgICBpc01hbmRhdG9yeTogdHJ1ZSxcclxuICAgICAgICAgICAgICBvdGhlclZhbHVlOiAnJyxcclxuICAgICAgICAgICAgICB0eXBlOiBcInRleHRhcmVhXCIsXHJcbiAgICAgICAgICAgICAgZWRpdGFibGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgaXNDb25kaXRpb25hbDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgY29uZGl0aW9uVmFsdWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgY29uZGl0aW9uOiB7fSxcclxuICAgICAgICAgICAgICBkZWxldGVhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICAgIHN1YkxldmVsOiAyLFxyXG4gICAgICAgICAgICAgIGV4cGFuZE1vcmU6IGZhbHNlLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgbGFiZWw6IFwiTm91dmVhdSBwb3N0ZVwiLFxyXG4gICAgICAgICAgICAgIGtleTogXCJOZXdQb3N0XCIsXHJcbiAgICAgICAgICAgICAgZXhwYW5kT25ib2FyZGluZzogdHJ1ZSxcclxuICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU6IG51bGwsXHJcbiAgICAgICAgICAgICAgdmFsdWU6IHRydWUsXHJcbiAgICAgICAgICAgICAgc2l6ZTogODAsXHJcbiAgICAgICAgICAgICAgaXNNYW5kYXRvcnk6IHRydWUsXHJcbiAgICAgICAgICAgICAgb3RoZXJWYWx1ZTogJycsXHJcbiAgICAgICAgICAgICAgdHlwZTogXCJjaGVja2JveFwiLFxyXG4gICAgICAgICAgICAgIGVkaXRhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICAgIGlzQ29uZGl0aW9uYWw6IGZhbHNlLFxyXG4gICAgICAgICAgICAgIGNvbmRpdGlvblZhbHVlOiBcIlwiLFxyXG4gICAgICAgICAgICAgIGNvbmRpdGlvbjoge30sXHJcbiAgICAgICAgICAgICAgZGVsZXRlYWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgICBzdWJMZXZlbDogMixcclxuICAgICAgICAgICAgICBleHBhbmRNb3JlOiBmYWxzZSxcclxuICAgICAgICAgICAgICBmb3JtczogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICBsYWJlbDogXCJBY2hldMOpIGNoZXogTm93dGVhbVwiLFxyXG4gICAgICAgICAgICAgICAgICBrZXk6IFwiUHVyY2hhc2VkQXROb3d0ZWFtXCIsXHJcbiAgICAgICAgICAgICAgICAgIGV4cGFuZE9uYm9hcmRpbmc6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZTogbnVsbCxcclxuICAgICAgICAgICAgICAgICAgdmFsdWU6IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgIHNpemU6IDEwMDAsXHJcbiAgICAgICAgICAgICAgICAgIGlzTWFuZGF0b3J5OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICBvdGhlclZhbHVlOiAnJyxcclxuICAgICAgICAgICAgICAgICAgdHlwZTogXCJ0ZXh0YXJlYVwiLFxyXG4gICAgICAgICAgICAgICAgICBlZGl0YWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgaXNDb25kaXRpb25hbDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgIGNvbmRpdGlvblZhbHVlOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICBjb25kaXRpb246IHt9LFxyXG4gICAgICAgICAgICAgICAgICBkZWxldGVhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICBzdWJMZXZlbDogMyxcclxuICAgICAgICAgICAgICAgICAgZXhwYW5kTW9yZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICBsYWJlbDogXCJBdXRyZVwiLFxyXG4gICAgICAgICAgICAgICAgICBrZXk6IFwiT3RoZXJcIixcclxuICAgICAgICAgICAgICAgICAgZXhwYW5kT25ib2FyZGluZzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZTogbnVsbCxcclxuICAgICAgICAgICAgICAgICAgc2l6ZTogMTAwMCxcclxuICAgICAgICAgICAgICAgICAgaXNNYW5kYXRvcnk6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgIG90aGVyVmFsdWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICB0eXBlOiBcInRleHRcIixcclxuICAgICAgICAgICAgICAgICAgZWRpdGFibGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgIGlzQ29uZGl0aW9uYWw6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICBjb25kaXRpb25WYWx1ZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgY29uZGl0aW9uOiB7fSxcclxuICAgICAgICAgICAgICAgICAgZGVsZXRlYWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgc3ViTGV2ZWw6IDMsXHJcbiAgICAgICAgICAgICAgICAgIGV4cGFuZE1vcmU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgXSxcclxuICAgICAgICB9LFxyXG4gICAgICBdLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJBdXRyZXNcIixcclxuICAgICAga2V5OiAnYXV0cmVzJyxcclxuICAgICAgZXhwYW5kTW9yZTogZmFsc2UsXHJcbiAgICAgIHN1ZmZpeEVuZHBvaW50OiBcImNhdGVnb3J5L2F1dHJlc1wiLFxyXG4gICAgICBzZWxlY3RlZDogdHJ1ZSxcclxuICAgICAgZWRpdGFibGU6IHRydWUsXHJcbiAgICAgIGlzQ29uZGl0aW9uYWw6IGZhbHNlLFxyXG4gICAgICBjb25kaXRpb25WYWx1ZTogXCJcIixcclxuICAgICAgY29uZGl0aW9uOiB7fSxcclxuICAgICAgZXhwYW5kT25ib2FyZGluZzogdHJ1ZSxcclxuICAgICAgZGVmYXVsdFZhbHVlOiBmYWxzZSxcclxuICAgICAgZGVsZXRlYWJsZTogdHJ1ZSxcclxuICAgICAgc2VsZWN0b3I6IHtcclxuICAgICAgICBsYWJlbDogXCJDb21wYW55XCIsXHJcbiAgICAgICAga2V5OiBcIkNvbXBhbnlcIixcclxuICAgICAgICBkZWZhdWx0VmFsdWU6IFt7IHZhbHVlOiBcIk5vd3RlYW1cIiwgY2hlY2tlZDogdHJ1ZSB9LCB7IHZhbHVlOiBcIkludGVybmFsXCIsIGNoZWNrZWQ6IGZhbHNlIH1dLFxyXG4gICAgICAgIHZhbHVlOiBcIk5vd3RlYW1cIlxyXG4gICAgICB9LFxyXG4gICAgICB0aWNrZXRUeXBlOiB7XHJcbiAgICAgICAgbGFiZWw6IFwiVHlwZSBkZSB0aWNrZXRcIixcclxuICAgICAgICBrZXk6IFwidHlja2V0VHlwZVwiLFxyXG4gICAgICAgIGRlZmF1bHRWYWx1ZTogW3sgdmFsdWU6IFwiQ3LDqWF0aW9uIGRlIGNvbXB0ZVwiLCBjaGVja2VkOiB0cnVlLCBrZXk6IFwiQ3JlYXRpb25fZGVfY29tcHRlXCIgfSwgeyB2YWx1ZTogXCJDb25maWd1cmF0aW9uIGRlIHBvc3RlXCIsIGNoZWNrZWQ6IGZhbHNlLCBrZXk6IFwiQ29uZmlndXJhdGlvbl9kZV9wb3N0ZVwiIH1dLFxyXG4gICAgICAgIHZhbHVlOiBcIkNyZWF0aW9uX2RlX2NvbXB0ZVwiXHJcbiAgICAgIH0sXHJcbiAgICAgIGZvcm1zOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbGFiZWw6IFwiRGVzY3JpcHRpb25zXCIsXHJcbiAgICAgICAgICBrZXk6IFwiRGVzY3JpcHRpb25cIixcclxuICAgICAgICAgIGV4cGFuZE9uYm9hcmRpbmc6IHRydWUsXHJcbiAgICAgICAgICBkZWZhdWx0VmFsdWU6IG51bGwsXHJcbiAgICAgICAgICB2YWx1ZTogbnVsbCxcclxuICAgICAgICAgIHNpemU6IDEwMDAsXHJcbiAgICAgICAgICBpc01hbmRhdG9yeTogZmFsc2UsXHJcbiAgICAgICAgICBvdGhlclZhbHVlOiAnJyxcclxuICAgICAgICAgIHR5cGU6IFwidGV4dGFyZWFcIixcclxuICAgICAgICAgIGVkaXRhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgaXNDb25kaXRpb25hbDogZmFsc2UsXHJcbiAgICAgICAgICBjb25kaXRpb25WYWx1ZTogXCJcIixcclxuICAgICAgICAgIGNvbmRpdGlvbjoge30sXHJcbiAgICAgICAgICBkZWxldGVhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgc3ViTGV2ZWw6IDEsXHJcbiAgICAgICAgICBleHBhbmRNb3JlOiBmYWxzZSxcclxuICAgICAgICB9LFxyXG4gICAgICBdLFxyXG4gICAgfSxcclxuICBdO1xyXG5cclxuICBjYW5EZWFjdGl2YXRlKCkge1xyXG4gICAgaWYgKCF0aGlzLmNhbkV4aXQpIHtcclxuICAgICAgdGhpcy5kaWFsb2cub3BlbihFeGl0Q29uZmlybUNvbXBvbmVudCwge1xyXG4gICAgICAgIGRhdGE6ICcnLFxyXG4gICAgICAgIHBhbmVsQ2xhc3M6ICdtb2RhbC1tZWRpdW0nXHJcbiAgICAgIH0pXHJcbiAgICAgIHJldHVybiB0aGlzLnNlcnZpY2UuY2FuRXhpdCRcclxuICAgIH1cclxuICAgIHJldHVybiB0cnVlXHJcbiAgfVxyXG5cclxuXHJcbiAgQEhvc3RMaXN0ZW5lcignc2Nyb2xsJywgWyckZXZlbnQnXSlcclxuICBvblNjcm9sbChldmVudCkge1xyXG4gICAgY29uc3Qgc2VjdGlvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwic2VjdGlvblwiKTtcclxuICAgIGNvbnN0IG5hdkxpID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jcmVhdGUtcHJvZmlsZS1tZW51cyB1bCBsaVwiKTtcclxuXHJcbiAgICBsZXQgY3VycmVudCA9IFwiXCI7XHJcbiAgICBzZWN0aW9ucy5mb3JFYWNoKChzZWN0aW9uKSA9PiB7XHJcbiAgICAgIGNvbnN0IHNlY3Rpb25Ub3AgPSBzZWN0aW9uLm9mZnNldFRvcDtcclxuICAgICAgaWYgKGV2ZW50LnRhcmdldC5zY3JvbGxUb3AgPiBzZWN0aW9uVG9wIC0gMTAwKSB7XHJcbiAgICAgICAgY3VycmVudCA9IHNlY3Rpb24uZ2V0QXR0cmlidXRlKFwiaWRcIilcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBuYXZMaS5mb3JFYWNoKChsaSkgPT4ge1xyXG4gICAgICBjb25zdCBpZCA9IGxpLmdldEF0dHJpYnV0ZSgnaWQnKVxyXG4gICAgICBpZiAoaWQ/LnN1YnN0cmluZygwLCBpZC5sZW5ndGggLSAxKSA9PT0gY3VycmVudCkge1xyXG4gICAgICAgIGxpLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbGkuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBpbml0Rm9ybSgpIHtcclxuICAgIHRoaXMuZm9ybSA9IHRoaXMuZmIuZ3JvdXAoe1xyXG4gICAgICBOYW1lOiBbXCJcIiwgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXHJcbiAgICAgIFBpY3RvOiBbXCJcIl0sXHJcbiAgICAgIERlc2NyaXB0aW9uOiBbXCJcIl0sXHJcbiAgICAgIFRhZ3M6IFtcIlwiXSxcclxuICAgICAgU3RhdHVzOiBbZmFsc2UsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxyXG4gICAgfSk7XHJcbiAgfVxyXG4gIGFzeW5jIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5pZCA9IHRoaXMucm91dGUuc25hcHNob3QucGFyYW1NYXAuZ2V0KFwiaWRcIik7XHJcblxyXG4gICAgdGhpcy5mb3JtLnZhbHVlQ2hhbmdlcy5zdWJzY3JpYmUoYyA9PiB7XHJcbiAgICAgIHRoaXMuY2FuRXhpdCA9IGZhbHNlO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKHRoaXMuaWQgIT09IFwiMFwiKSB7XHJcbiAgICAgIHNldFRpbWVvdXQoYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuY3VycmVudFByb2ZpbCA9IGF3YWl0IHRoaXMuc2VydmljZS5nZXRQcm9maWwodGhpcy5pZCk7XHJcbiAgICAgICAgdGhpcy5mb3JtLnBhdGNoVmFsdWUodGhpcy5jdXJyZW50UHJvZmlsKTtcclxuICAgICAgICB0aGlzLmdldFByb2ZpbGVDYXRlZ29yaWVzKCk7XHJcbiAgICAgIH0sIDUwMCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnNob3dQcm9maWxlTmFtZSA9IHRydWU7XHJcbiAgICAgIHRoaXMuY2F0ZWdvcmllcyA9IHRoaXMuZGVmYXVsdENhdGVnb3JpZTtcclxuICAgIH1cclxuICAgIHNldFRpbWVvdXQoYXN5bmMgKCkgPT4ge1xyXG4gICAgICB0aGlzLnRhZ3MgPSBhd2FpdCB0aGlzLnNlcnZpY2UuZ2V0QWxsVGFncygpO1xyXG4gICAgfSwgNTAwKTtcclxuICAgIHRoaXMuZ2V0Q29uZGl0aW9uVmFsdWVzKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldFByb2ZpbGVDYXRlZ29yaWVzKCk6IHZvaWQge1xyXG4gICAgaWYgKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oUFJPRklMRV9DQVRFR09SSUVTX0tFWSkpIHtcclxuICAgICAgdGhpcy5jYXRlZ29yaWVzID0gSlNPTi5wYXJzZShzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFBST0ZJTEVfQ0FURUdPUklFU19LRVkpKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuY2F0ZWdvcmllcyA9IHRoaXMuY3VycmVudFByb2ZpbC5jYXRlZ29yaWVzLm1hcCgoZGF0YSkgPT4gKHsgLi4uZGF0YSwga2V5OiBkYXRhLmtleSB8fCBkYXRhLm5hbWUucmVwbGFjZSgvXFxzL2csICcnKSB9KSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvbkFkZE5ld0NhdGVnb3J5KGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIHRoaXMuY2FuRXhpdCA9IGZhbHNlO1xyXG4gICAgY29uc3QgZGF0YSA9IHtcclxuICAgICAgbmFtZTogXCJOb20gZGUgbGEgY2F0w6lnb3JpZVwiICsgdGhpcy5jYXRlZ29yaWVzLmxlbmd0aCxcclxuICAgICAga2V5OiAnbmV3Q2F0ZWdvcnknICsgdGhpcy5jYXRlZ29yaWVzLmxlbmd0aCxcclxuICAgICAgZWRpdGFibGU6IHRydWUsXHJcbiAgICAgIGlzQ29uZGl0aW9uYWw6IGZhbHNlLFxyXG4gICAgICBjb25kaXRpb25WYWx1ZTogXCJcIixcclxuICAgICAgY29uZGl0aW9uOiB7fSxcclxuICAgICAgZXhwYW5kT25ib2FyZGluZzogdHJ1ZSxcclxuICAgICAgZGVsZXRlYWJsZTogdHJ1ZSxcclxuICAgICAgZXhwYW5kTW9yZTogdHJ1ZSxcclxuICAgICAgc3VmZml4RW5kcG9pbnQ6IFwiXCIsXHJcbiAgICAgIHNlbGVjdG9yOiB7XHJcbiAgICAgICAgbGFiZWw6IFwiQ29tcGFueVwiLFxyXG4gICAgICAgIGtleTogXCJDb21wYW55XCIsXHJcbiAgICAgICAgZGVmYXVsdFZhbHVlOiBbeyB2YWx1ZTogXCJOb3d0ZWFtXCIsIGNoZWNrZWQ6IHRydWUgfSwgeyB2YWx1ZTogXCJJbnRlcm5hbFwiLCBjaGVja2VkOiBmYWxzZSB9XSxcclxuICAgICAgICB2YWx1ZTogXCJOb3d0ZWFtXCJcclxuICAgICAgfSxcclxuICAgICAgdGlja2V0VHlwZToge1xyXG4gICAgICAgIGxhYmVsOiBcIlR5cGUgZGUgdGlja2V0XCIsXHJcbiAgICAgICAga2V5OiBcInR5Y2tldFR5cGVcIixcclxuICAgICAgICBkZWZhdWx0VmFsdWU6IFt7IHZhbHVlOiBcIkNyw6lhdGlvbiBkZSBjb21wdGVcIiwgY2hlY2tlZDogdHJ1ZSwga2V5OiBcIkNyZWF0aW9uX2RlX2NvbXB0ZVwiIH0sIHsgdmFsdWU6IFwiQ29uZmlndXJhdGlvbiBkZSBwb3N0ZVwiLCBjaGVja2VkOiBmYWxzZSwga2V5OiBcIkNvbmZpZ3VyYXRpb25fZGVfcG9zdGVcIiB9XSxcclxuICAgICAgICB2YWx1ZTogXCJDcmVhdGlvbl9kZV9jb21wdGVcIlxyXG4gICAgICB9LFxyXG4gICAgICBmb3JtczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIGxhYmVsOiBgTGFiZWwgw6AgcmVub21tZXIgKCR7MX0pYCxcclxuICAgICAgICAgIGtleTogXCJcIixcclxuICAgICAgICAgIGV4cGFuZE9uYm9hcmRpbmc6IHRydWUsXHJcbiAgICAgICAgICBkZWZhdWx0VmFsdWU6IG51bGwsXHJcbiAgICAgICAgICB2YWx1ZTogbnVsbCxcclxuICAgICAgICAgIHNpemU6IDgwLFxyXG4gICAgICAgICAgaXNNYW5kYXRvcnk6IHRydWUsXHJcbiAgICAgICAgICBvdGhlclZhbHVlOiAnJyxcclxuICAgICAgICAgIHR5cGU6IFwidGV4dFwiLFxyXG4gICAgICAgICAgZGVsZXRlYWJsZTogdHJ1ZSxcclxuICAgICAgICAgIGVkaXRhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgaXNDb25kaXRpb25hbDogZmFsc2UsXHJcbiAgICAgICAgICBjb25kaXRpb25WYWx1ZTogXCJcIixcclxuICAgICAgICAgIGNvbmRpdGlvbjoge30sXHJcbiAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgIH1cclxuICAgIHRoaXMuY2F0ZWdvcmllcy5wdXNoKGRhdGEpO1xyXG4gICAgdGhpcy5vbkhpc3Rvcmljcyh7XHJcbiAgICAgIGZvcm06IGRhdGEsXHJcbiAgICAgIG1ldGhvZDogJ3B1c2gnLFxyXG4gICAgICBsb2NhdGlvbjogJ2NhdGVnb3J5JyxcclxuICAgICAgcGFyYW1zOiBbdGhpcy5jYXRlZ29yaWVzLmxlbmd0aCAtIDFdXHJcbiAgICB9KVxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHRoaXMuc2Nyb2xsVG9TZXJ2aWNlLnNjcm9sbFRvKHtcclxuICAgICAgICB0YXJnZXQ6IGRhdGEubmFtZSxcclxuICAgICAgICBjb250YWluZXI6ICdjYXRlZ29yaWVzLWlkJyxcclxuICAgICAgICBkdXJhdGlvbjogNjUwLFxyXG4gICAgICAgIGVhc2luZzogJ2Vhc2VPdXRFbGFzdGljJyxcclxuICAgICAgICBvZmZzZXQ6IDIwXHJcbiAgICAgIH0pO1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICB0aGlzLm9uRXhwZW5kTW9yZSh7IGZpZWxkOiBkYXRhIH0sIHRoaXMuY2F0ZWdvcmllcy5sZW5ndGggLSAxKTtcclxuICAgICAgICB0aGlzLm9uQWN0aXZlTWVudShkYXRhLCB0aGlzLmNhdGVnb3JpZXMubGVuZ3RoIC0gMSk7XHJcbiAgICAgIH0sIDMwMCk7XHJcblxyXG4gICAgfSwgMjAwKVxyXG4gIH1cclxuICBvbkNoYW5nZUNhdGVnb3J5TmFtZSgpIHtcclxuICAgIHRoaXMuY3VycmVudEVkaXRCbG9jay5rZXkgPSB0aGlzLmN1cnJlbnRFZGl0QmxvY2submFtZS5yZXBsYWNlKC9cXHMvZywgJycpXHJcbiAgfVxyXG4gIGNoZWNrQmxpbmsoaW5kZXgsIGxldmVsKSB7XHJcbiAgICByZXR1cm4gU3RyaW5nKGluZGV4KSArIFN0cmluZyhsZXZlbClcclxuICB9XHJcbiAgb25DaGFuZ2VLZXkoZWRpdEJsb2spIHtcclxuICAgIGlmIChlZGl0Qmxvay5lZGl0YWJsZSkge1xyXG4gICAgICBlZGl0Qmxvay5rZXkgPSB0aGlzLm9uQ3JlYXRlS2V5KGVkaXRCbG9rLmxhYmVsKVxyXG4gICAgfVxyXG4gIH1cclxuICBvbkNyZWF0ZUtleSA9IChuYW1lOiBzdHJpbmcpID0+IG5hbWUucmVwbGFjZSgvXFxzL2csICcnKVxyXG4gIG9uQWRkTmV3RmllbGQoLi4ucGFyYW1zKSB7XHJcbiAgICB0aGlzLmNhbkV4aXQgPSBmYWxzZTtcclxuICAgIGNvbnN0IGxlbmd0aCA9IHBhcmFtcy5sZW5ndGg7XHJcbiAgICBjb25zdCBmb3JtcyA9IGxlbmd0aCA9PT0gMSA/IHRoaXMuY2F0ZWdvcmllc1twYXJhbXNbMF1dLmZvcm1zIDogbGVuZ3RoID09PSAyID8gdGhpcy5jYXRlZ29yaWVzW3BhcmFtc1swXV0uZm9ybXNbcGFyYW1zWzFdXS5mb3JtcyA6IHRoaXMuY2F0ZWdvcmllc1twYXJhbXNbMF1dLmZvcm1zW3BhcmFtc1sxXV0uZm9ybXNbcGFyYW1zWzJdXS5mb3JtcztcclxuICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgIGxhYmVsOiBgTGFiZWwgw6AgcmVub21tZXIgKCR7Zm9ybXMubGVuZ3RoICsgMX0pYCxcclxuICAgICAga2V5OiB0aGlzLm9uQ3JlYXRlS2V5KGBMYWJlbCDDoCByZW5vbW1lciAoJHtmb3Jtcy5sZW5ndGggKyAxfSlgKSxcclxuICAgICAgZXhwYW5kT25ib2FyZGluZzogdHJ1ZSxcclxuICAgICAgZGVmYXVsdFZhbHVlOiBudWxsLFxyXG4gICAgICB2YWx1ZTogbnVsbCxcclxuICAgICAgc2l6ZTogODAsXHJcbiAgICAgIGlzTWFuZGF0b3J5OiB0cnVlLFxyXG4gICAgICBvdGhlclZhbHVlOiAnJyxcclxuICAgICAgdHlwZTogXCJ0ZXh0XCIsXHJcbiAgICAgIGRlbGV0ZWFibGU6IHRydWUsXHJcbiAgICAgIGVkaXRhYmxlOiB0cnVlLFxyXG4gICAgICBpc0NvbmRpdGlvbmFsOiBmYWxzZSxcclxuICAgICAgY29uZGl0aW9uVmFsdWU6IFwiXCIsXHJcbiAgICAgIGNvbmRpdGlvbjoge30sXHJcbiAgICAgIHN1YkxldmVsOiBwYXJhbXMubGVuZ3RoLFxyXG4gICAgICAvL2Zvcm1zOiBbXVxyXG4gICAgfVxyXG4gICAgZm9ybXMucHVzaChkYXRhKTtcclxuICAgIHRoaXMubmV3RmllbGRJbmRleCA9IFN0cmluZyhmb3Jtcy5sZW5ndGggLSAxKSArIFN0cmluZyhsZW5ndGgpO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHRoaXMubmV3RmllbGRJbmRleCA9IG51bGxcclxuICAgIH0sIDUwMDApO1xyXG4gICAgdGhpcy5vbkhpc3Rvcmljcyh7XHJcbiAgICAgIGZvcm06IGRhdGEsXHJcbiAgICAgIG1ldGhvZDogJ3B1c2gnLFxyXG4gICAgICBsb2NhdGlvbjogJ2Zvcm1zJyxcclxuICAgICAgcGFyYW1zXHJcbiAgICB9KVxyXG4gICAgdGhpcy5vbkVkaXRCbG9jayhmb3Jtcy5hdCgtMSksIHBhcmFtcylcclxuICB9XHJcblxyXG4gIG9uQWRkTmV3U3ViTGV2ZWxGaWVsZCguLi5wYXJhbXMpIHtcclxuICAgIHRoaXMuY2FuRXhpdCA9IGZhbHNlO1xyXG4gICAgY29uc3QgbGVuZ3RoID0gcGFyYW1zLmxlbmd0aDtcclxuICAgIGNvbnN0IGZvcm1zID0gbGVuZ3RoID09PSAyID8gdGhpcy5jYXRlZ29yaWVzW3BhcmFtc1swXV0uZm9ybXNbcGFyYW1zW2xlbmd0aCAtIDFdXSA6IGxlbmd0aCA9PT0gMyA/IHRoaXMuY2F0ZWdvcmllc1twYXJhbXNbMF1dLmZvcm1zW3BhcmFtc1sxXV0uZm9ybXNbcGFyYW1zW2xlbmd0aCAtIDFdXSA6IHRoaXMuY2F0ZWdvcmllc1twYXJhbXNbMF1dLmZvcm1zW3BhcmFtc1sxXV0uZm9ybXNbcGFyYW1zWzJdXS5mb3Jtc1twYXJhbXNbbGVuZ3RoIC0gMV1dO1xyXG4gICAgZm9ybXMuZXhwYW5kTW9yZSA9IHRydWU7XHJcbiAgICBmb3Jtcy5mb3JtcyA9IFtdO1xyXG4gICAgY29uc3QgbmV3Rm9ybSA9IHtcclxuICAgICAgbGFiZWw6IGBMYWJlbCDDoCByZW5vbW1lciAoJHtmb3Jtcy5sZW5ndGggKyAxfSlgLFxyXG4gICAgICBrZXk6IGBMYWJlbCDDoCByZW5vbW1lciAoJHtmb3Jtcy5sZW5ndGggKyAxfSlgLFxyXG4gICAgICBleHBhbmRPbmJvYXJkaW5nOiB0cnVlLFxyXG4gICAgICBkZWZhdWx0VmFsdWU6IG51bGwsXHJcbiAgICAgIHZhbHVlOiBudWxsLFxyXG4gICAgICBzaXplOiA4MCxcclxuICAgICAgaXNNYW5kYXRvcnk6IHRydWUsXHJcbiAgICAgIG90aGVyVmFsdWU6ICcnLFxyXG4gICAgICB0eXBlOiBcInRleHRcIixcclxuICAgICAgZGVsZXRlYWJsZTogdHJ1ZSxcclxuICAgICAgZWRpdGFibGU6IHRydWUsXHJcbiAgICAgIGlzQ29uZGl0aW9uYWw6IGZhbHNlLFxyXG4gICAgICBjb25kaXRpb25WYWx1ZTogXCJcIixcclxuICAgICAgY29uZGl0aW9uOiB7fSxcclxuICAgICAgc3ViTGV2ZWw6IHBhcmFtcy5sZW5ndGgsXHJcbiAgICAgIGV4cGFuZE1vcmU6IHRydWUsXHJcbiAgICAgIC8vZm9ybXM6IFtdXHJcbiAgICB9XHJcbiAgICBmb3Jtcy5mb3Jtcy5wdXNoKG5ld0Zvcm0pO1xyXG4gICAgdGhpcy5vbkhpc3Rvcmljcyh7XHJcbiAgICAgIGZvcm06IG5ld0Zvcm0sXHJcbiAgICAgIG1ldGhvZDogJ3B1c2gnLFxyXG4gICAgICBsb2NhdGlvbjogJ2Zvcm1zJyxcclxuICAgICAgcGFyYW1zXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgb25SZW1vdmVGaWVsZCguLi5wYXJhbXMpIHtcclxuICAgIHRoaXMuY2FuRXhpdCA9IGZhbHNlO1xyXG4gICAgY29uc3QgbGVuZ3RoID0gcGFyYW1zLmxlbmd0aDtcclxuICAgIGNvbnN0IGZvcm1zID0gbGVuZ3RoID09PSAyID8gdGhpcy5jYXRlZ29yaWVzW3BhcmFtc1swXV0uZm9ybXMgOiBsZW5ndGggPT09IDMgPyB0aGlzLmNhdGVnb3JpZXNbcGFyYW1zWzBdXS5mb3Jtc1twYXJhbXNbMV1dLmZvcm1zIDogdGhpcy5jYXRlZ29yaWVzW3BhcmFtc1swXV0uZm9ybXNbcGFyYW1zWzFdXS5mb3Jtc1twYXJhbXNbMl1dLmZvcm1zO1xyXG4gICAgZm9ybXMuc3BsaWNlKHBhcmFtc1tsZW5ndGggLSAxXSwgMSk7XHJcbiAgICB0aGlzLm9uSGlzdG9yaWNzKHtcclxuICAgICAgZm9ybTogZm9ybXNbcGFyYW1zW2xlbmd0aCAtIDFdXSxcclxuICAgICAgbG9jYXRpb246ICdmb3JtcycsXHJcbiAgICAgIG1ldGhvZDogJ3NwbGljZScsXHJcbiAgICAgIHBhcmFtc1xyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIG9uUmVtb3ZlQ2F0ZWdvcnkoZSwgaSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgdGhpcy5jYW5FeGl0ID0gZmFsc2U7XHJcbiAgICB0aGlzLm9uSGlzdG9yaWNzKHtcclxuICAgICAgZm9ybTogdGhpcy5jYXRlZ29yaWVzLnNwbGljZShpLCAxKSxcclxuICAgICAgbWV0aG9kOiAnc3BsaWNlJyxcclxuICAgICAgbG9jYXRpb246ICdjYXRlZ29yeScsXHJcbiAgICAgIHBhcmFtczogW2ldXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgb25DaGFuZ2VDYXRlZ29yeSgpIHtcclxuICAgIHJldHVybiB0aGlzLmNhdGVnb3JpZXMuZXZlcnkoKGNhdCkgPT4gY2F0Lm5hbWUgIT09IFwiXCIgJiYgY2F0LmZvcm1zLmV2ZXJ5KChmaWVsZCkgPT4gZmllbGQubGFiZWwgIT09IFwiXCIgJiYgZmllbGQudHlwZSAhPT0gXCJcIikpO1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgb25TdWJtaXQoaXNQdWJsaXNoOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLmlzU3VibWl0dGVkID0gaXNQdWJsaXNoO1xyXG4gICAgaWYgKHRoaXMuZm9ybS52YWxpZCAmJiB0aGlzLm9uQ2hhbmdlQ2F0ZWdvcnkoKSkge1xyXG4gICAgICB0aGlzLmxvYWRpbmcgPSB0cnVlXHJcbiAgICAgIGlmIChpc1B1Ymxpc2gpIHtcclxuICAgICAgICB0aGlzLmxpdmVMYWJlbCA9IFwiQ2hhcmdlbWVudC4uLi5cIlxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuZHJhZnRMYWJlbCA9IFwiQ2hhcmdlbWVudC4uLlwiXHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgcmVzdWx0ID1cclxuICAgICAgICB0aGlzLmlkICE9PSBcIjBcIlxyXG4gICAgICAgICAgPyBhd2FpdCB0aGlzLnNlcnZpY2UudXBkYXRlUHJvZmlsKHtcclxuICAgICAgICAgICAgLi4udGhpcy5jdXJyZW50UHJvZmlsLFxyXG4gICAgICAgICAgICAuLi50aGlzLmZvcm0udmFsdWUsXHJcbiAgICAgICAgICAgIFN0YXR1czogaXNQdWJsaXNoLFxyXG4gICAgICAgICAgICBjYXRlZ29yaWVzOiB0aGlzLmNhdGVnb3JpZXMsXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgOiBhd2FpdCB0aGlzLnNlcnZpY2UuY3JlYXRlUHJvZmlsKHtcclxuICAgICAgICAgICAgLi4udGhpcy5mb3JtLnZhbHVlLFxyXG4gICAgICAgICAgICBTdGF0dXM6IGlzUHVibGlzaCxcclxuICAgICAgICAgICAgY2F0ZWdvcmllczogdGhpcy5jYXRlZ29yaWVzLFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgIGlmIChyZXN1bHQpIHtcclxuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgncHJvZmlsJyk7XHJcbiAgICAgICAgYXdhaXQgdGhpcy5zZXJ2aWNlLmdldEFsbFByb2ZpbCgpO1xyXG4gICAgICAgIHRoaXMuY2FuRXhpdCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2VcclxuXHJcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW3RoaXMuc2VydmljZS5tYWluUGF0aCArICcvdGVtcGxhdGUnXSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2VcclxuICAgICAgfVxyXG4gICAgICBpZiAoaXNQdWJsaXNoKSB7XHJcbiAgICAgICAgdGhpcy5saXZlTGFiZWwgPSBcIlB1YmxpZXIgbGUgcHJvZmlsXCJcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmRyYWZ0TGFiZWwgPSBcIkVucmVnaXN0cmVyIGxlIGJyb3VpbGxvblwiXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0oUFJPRklMRV9DQVRFR09SSUVTX0tFWSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvbkNoYW5nZVR5cGUodHlwZTogc3RyaW5nLCAuLi5wYXJhbXMpIHtcclxuXHJcbiAgICB0aGlzLmNhbkV4aXQgPSBmYWxzZTtcclxuICAgIGNvbnN0IGxlbmd0aCA9IHBhcmFtcy5sZW5ndGg7XHJcbiAgICBjb25zdCBmb3JtcyA9IGxlbmd0aCA9PT0gMiA/IHRoaXMuY2F0ZWdvcmllc1twYXJhbXNbMF1dLmZvcm1zIDogbGVuZ3RoID09PSAzID8gdGhpcy5jYXRlZ29yaWVzW3BhcmFtc1swXV0uZm9ybXNbcGFyYW1zWzFdXS5mb3JtcyA6IHRoaXMuY2F0ZWdvcmllc1twYXJhbXNbMF1dLmZvcm1zW3BhcmFtc1sxXV0uZm9ybXNbcGFyYW1zWzJdXS5mb3JtcztcclxuICAgIGlmICh0eXBlID09PSBcInNlbGVjdFwiIHx8IHR5cGUgPT09IFwicmFkaW9cIiB8fCB0eXBlID09PSBcImNoZWNrYm94X211bHRpcGxlXCIpIHtcclxuICAgICAgZm9ybXNbcGFyYW1zW2xlbmd0aCAtIDFdXS5kZWZhdWx0VmFsdWUgPSBbXTtcclxuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gXCJjaGVja2JveFwiIHx8IHR5cGUgPT09IFwidG9nZ2xlXCIpIHtcclxuICAgICAgZm9ybXNbcGFyYW1zW2xlbmd0aCAtIDFdXS5kZWZhdWx0VmFsdWUgPSB0cnVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZm9ybXNbcGFyYW1zW2xlbmd0aCAtIDFdXS5kZWZhdWx0VmFsdWUgPSBcIlwiO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25LZXlQcmVzcyhldmVudDogYW55LCAuLi5wYXJhbXMpIHtcclxuICAgIHRoaXMuY2FuRXhpdCA9IGZhbHNlO1xyXG4gICAgY29uc3QgbGVuZ3RoID0gcGFyYW1zLmxlbmd0aDtcclxuICAgIGNvbnN0IGZvcm1zID0gbGVuZ3RoID09PSAyID8gdGhpcy5jYXRlZ29yaWVzW3BhcmFtc1swXV0uZm9ybXNbcGFyYW1zW2xlbmd0aCAtIDFdXSA6IGxlbmd0aCA9PT0gMyA/IHRoaXMuY2F0ZWdvcmllc1twYXJhbXNbMF1dLmZvcm1zW3BhcmFtc1sxXV0uZm9ybXNbcGFyYW1zW2xlbmd0aCAtIDFdXSA6IHRoaXMuY2F0ZWdvcmllc1twYXJhbXNbMF1dLmZvcm1zW3BhcmFtc1sxXV0uZm9ybXNbcGFyYW1zWzJdXS5mb3Jtc1twYXJhbXNbbGVuZ3RoIC0gMV1dO1xyXG4gICAgaWYgKGV2ZW50LmtleSA9PT0gXCI7XCIpIHtcclxuICAgICAgY29uc3QgZXhpc3QgPSBmb3Jtcy5kZWZhdWx0VmFsdWUuZmluZCgob3B0KSA9PiBvcHQudmFsdWUudG9Mb2NhbGVMb3dlckNhc2UoKSA9PT0gZXZlbnQudGFyZ2V0LnZhbHVlLnNwbGl0KFwiO1wiKVswXS50b0xvY2FsZUxvd2VyQ2FzZSgpKTtcclxuICAgICAgaWYgKCFleGlzdCkge1xyXG4gICAgICAgIGZvcm1zLmRlZmF1bHRWYWx1ZS5wdXNoKHtcclxuICAgICAgICAgIHZhbHVlOiBldmVudC50YXJnZXQudmFsdWUuc3BsaXQoXCI7XCIpWzBdLFxyXG4gICAgICAgICAgY2hlY2tlZDogZmFsc2VcclxuICAgICAgICB9KTtcclxuICAgICAgICBldmVudC50YXJnZXQudmFsdWUgPSBcIlwiO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGV2ZW50LnRhcmdldC52YWx1ZSA9IFwiXCI7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHRoaXMuZ2V0Q29uZGl0aW9uVmFsdWVzKClcclxuICB9XHJcblxyXG4gIHJlbW92ZUtleXdvcmQoa2V5d29yZDogYW55LCAuLi5wYXJhbXMpIHtcclxuICAgIHRoaXMuY2FuRXhpdCA9IGZhbHNlO1xyXG4gICAgY29uc3QgbGVuZ3RoID0gcGFyYW1zLmxlbmd0aDtcclxuICAgIGNvbnN0IGZvcm1zID0gbGVuZ3RoID09PSAyID8gdGhpcy5jYXRlZ29yaWVzW3BhcmFtc1swXV0uZm9ybXNbcGFyYW1zW2xlbmd0aCAtIDFdXSA6IGxlbmd0aCA9PT0gMyA/IHRoaXMuY2F0ZWdvcmllc1twYXJhbXNbMF1dLmZvcm1zW3BhcmFtc1sxXV0uZm9ybXNbcGFyYW1zW2xlbmd0aCAtIDFdXSA6IHRoaXMuY2F0ZWdvcmllc1twYXJhbXNbMF1dLmZvcm1zW3BhcmFtc1sxXV0uZm9ybXNbcGFyYW1zWzJdXS5mb3Jtc1twYXJhbXNbbGVuZ3RoIC0gMV1dO1xyXG4gICAgZm9ybXMuZGVmYXVsdFZhbHVlID0gZm9ybXMuZGVmYXVsdFZhbHVlLmZpbHRlcigob3B0aW9uKSA9PiBvcHRpb24udmFsdWUgIT09IGtleXdvcmQudmFsdWUpO1xyXG4gICAgdGhpcy5nZXRDb25kaXRpb25WYWx1ZXMoKVxyXG4gIH1cclxuXHJcbiAgc2Nyb2xsVG8oY2F0ZWdvcnksIGksKSB7XHJcbiAgICB0aGlzLm9uQWN0aXZlTWVudShjYXRlZ29yeSwgaSk7XHJcbiAgICBpZiAoIWNhdGVnb3J5LmV4cGFuZE1vcmUpIHtcclxuICAgICAgbGV0IGVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY2F0ZWdvcnkubmFtZSk7XHJcbiAgICAgIGVsPy5zY3JvbGxJbnRvVmlldyh7XHJcbiAgICAgICAgYmVoYXZpb3I6ICdzbW9vdGgnXHJcbiAgICAgIH0pO1xyXG4gICAgICB0aGlzLm9uRXhwZW5kTW9yZSh7IGZpZWxkOiBjYXRlZ29yeSB9LCBpKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uRXhwZW5kTW9yZShldmVudCwgLi4ucGFyYW1zKSB7XHJcbiAgICBpZiAoZXZlbnQpIHtcclxuICAgICAgaWYgKGV2ZW50LmV2ZW50KSB7XHJcbiAgICAgICAgZXZlbnQuZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoZXZlbnQuZmllbGQgJiYgIWV2ZW50LmZpZWxkLmV4cGFuZE1vcmUpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY2F0ZWdvcmllcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgdGhpcy5jYXRlZ29yaWVzW2ldLmV4cGFuZE1vcmUgPSBmYWxzZTtcclxuICAgICAgICAgIGlmICh0aGlzLmNhdGVnb3JpZXNbaV0uZm9ybXMpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLmNhdGVnb3JpZXNbaV0uZm9ybXMubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgICB0aGlzLmNhdGVnb3JpZXNbaV0uZm9ybXNbal0uZXhwYW5kTW9yZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgfVxyXG4gICAgaWYgKHBhcmFtcy5sZW5ndGggPT09IDEpIHtcclxuICAgICAgdGhpcy5jYXRlZ29yaWVzW3BhcmFtc1swXV0uZXhwYW5kTW9yZSA9ICF0aGlzLmNhdGVnb3JpZXNbcGFyYW1zWzBdXS5leHBhbmRNb3JlO1xyXG4gICAgfSBlbHNlIGlmIChwYXJhbXMubGVuZ3RoID09PSAyKSB7XHJcbiAgICAgIGlmICh0aGlzLmNhdGVnb3JpZXNbcGFyYW1zWzBdXS5mb3Jtc1twYXJhbXNbMV1dLmV4cGFuZE1vcmUpIHtcclxuICAgICAgICB0aGlzLmNhdGVnb3JpZXNbcGFyYW1zWzBdXS5mb3Jtc1twYXJhbXNbMV1dLmV4cGFuZE1vcmUgPSBmYWxzZTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmNhdGVnb3JpZXNbcGFyYW1zWzBdXS5leHBhbmRNb3JlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmNhdGVnb3JpZXNbcGFyYW1zWzBdXS5mb3Jtc1twYXJhbXNbMV1dLmV4cGFuZE1vcmUgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2UgaWYgKHBhcmFtcy5sZW5ndGggPT09IDMpIHtcclxuICAgICAgaWYgKHRoaXMuY2F0ZWdvcmllc1twYXJhbXNbMF1dLmZvcm1zW3BhcmFtc1sxXV0uZm9ybXNbcGFyYW1zWzJdXS5leHBhbmRNb3JlKSB7XHJcbiAgICAgICAgdGhpcy5jYXRlZ29yaWVzW3BhcmFtc1swXV0uZm9ybXNbcGFyYW1zWzFdXS5mb3Jtc1twYXJhbXNbMl1dLmV4cGFuZE1vcmUgPSBmYWxzZTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmNhdGVnb3JpZXNbcGFyYW1zWzBdXS5leHBhbmRNb3JlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmNhdGVnb3JpZXNbcGFyYW1zWzBdXS5mb3Jtc1twYXJhbXNbMV1dLmV4cGFuZE1vcmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuY2F0ZWdvcmllc1twYXJhbXNbMF1dLmZvcm1zW3BhcmFtc1sxXV0uZm9ybXNbcGFyYW1zWzJdXS5leHBhbmRNb3JlID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYgKHRoaXMuY2F0ZWdvcmllc1twYXJhbXNbMF1dLmZvcm1zW3BhcmFtc1sxXV0uZm9ybXNbcGFyYW1zWzJdXS5mb3Jtc1twYXJhbXNbM11dLmV4cGFuZE1vcmUpIHtcclxuICAgICAgICB0aGlzLmNhdGVnb3JpZXNbcGFyYW1zWzBdXS5mb3Jtc1twYXJhbXNbMV1dLmZvcm1zW3BhcmFtc1syXV0uZm9ybXNbcGFyYW1zWzNdXS5leHBhbmRNb3JlID0gZmFsc2U7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5jYXRlZ29yaWVzW3BhcmFtc1swXV0uZXhwYW5kTW9yZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5jYXRlZ29yaWVzW3BhcmFtc1swXV0uZm9ybXNbcGFyYW1zWzFdXS5leHBhbmRNb3JlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmNhdGVnb3JpZXNbcGFyYW1zWzBdXS5mb3Jtc1twYXJhbXNbMV1dLmZvcm1zW3BhcmFtc1syXV0uZXhwYW5kTW9yZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5jYXRlZ29yaWVzW3BhcmFtc1swXV0uZm9ybXNbcGFyYW1zWzFdXS5mb3Jtc1twYXJhbXNbMl1dLmZvcm1zW3BhcmFtc1szXV0uZXhwYW5kTW9yZSA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uQ2hlY2tlZERlZmF1bHQoZXZlbnQsIC4uLnBhcmFtcykge1xyXG4gICAgaWYgKHBhcmFtcy5sZW5ndGggPT09IDEpIHtcclxuICAgICAgdGhpcy5jYXRlZ29yaWVzW3BhcmFtc1swXV0uZGVmYXVsdFZhbHVlID0gZXZlbnQ7XHJcbiAgICB9IGVsc2UgaWYgKHBhcmFtcy5sZW5ndGggPT09IDIpIHtcclxuICAgICAgdGhpcy5jYXRlZ29yaWVzW3BhcmFtc1swXV0uZGVmYXVsdFZhbHVlID0gZXZlbnQ7XHJcbiAgICAgIHRoaXMuY2F0ZWdvcmllc1twYXJhbXNbMF1dLmZvcm1zW3BhcmFtc1sxXV0uZGVmYXVsdFZhbHVlID0gZXZlbnQ7XHJcbiAgICB9IGVsc2UgaWYgKHBhcmFtcy5sZW5ndGggPT09IDMpIHtcclxuICAgICAgdGhpcy5jYXRlZ29yaWVzW3BhcmFtc1swXV0uZGVmYXVsdFZhbHVlID0gZXZlbnQ7XHJcbiAgICAgIHRoaXMuY2F0ZWdvcmllc1twYXJhbXNbMF1dLmZvcm1zW3BhcmFtc1sxXV0uZGVmYXVsdFZhbHVlID0gZXZlbnQ7XHJcbiAgICAgIHRoaXMuY2F0ZWdvcmllc1twYXJhbXNbMF1dLmZvcm1zW3BhcmFtc1sxXV0uZm9ybXNbcGFyYW1zWzJdXS5kZWZhdWx0VmFsdWUgPSBldmVudDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuY2F0ZWdvcmllc1twYXJhbXNbMF1dLmRlZmF1bHRWYWx1ZSA9IGV2ZW50O1xyXG4gICAgICB0aGlzLmNhdGVnb3JpZXNbcGFyYW1zWzBdXS5mb3Jtc1twYXJhbXNbMV1dLmRlZmF1bHRWYWx1ZSA9IGV2ZW50O1xyXG4gICAgICB0aGlzLmNhdGVnb3JpZXNbcGFyYW1zWzBdXS5mb3Jtc1twYXJhbXNbMV1dLmZvcm1zW3BhcmFtc1syXV0uZGVmYXVsdFZhbHVlID0gZXZlbnQ7XHJcbiAgICAgIHRoaXMuY2F0ZWdvcmllc1twYXJhbXNbMF1dLmZvcm1zW3BhcmFtc1sxXV0uZm9ybXNbcGFyYW1zWzJdXS5mb3Jtc1twYXJhbXNbM11dLmRlZmF1bHRWYWx1ZSA9IGV2ZW50O1xyXG4gICAgfVxyXG4gICAgdGhpcy5nZXRDb25kaXRpb25WYWx1ZXMoKVxyXG4gIH1cclxuXHJcbiAgYWRkS2V5d29yZEZyb21JbnB1dChldmVudDogTWF0Q2hpcElucHV0RXZlbnQsIHByZXYsIC4uLnBhcmFtcykge1xyXG4gICAgdGhpcy5jYW5FeGl0ID0gZmFsc2U7XHJcbiAgICBjb25zdCBpbnB1dCA9IGV2ZW50LmlucHV0O1xyXG4gICAgY29uc3QgdmFsdWUgPSBldmVudC52YWx1ZTtcclxuICAgIGNvbnN0IGxlbmd0aCA9IHBhcmFtcy5sZW5ndGg7XHJcbiAgICBjb25zdCBmb3JtcyA9IGxlbmd0aCA9PT0gMiA/IHRoaXMuY2F0ZWdvcmllc1twYXJhbXNbMF1dLmZvcm1zW3BhcmFtc1tsZW5ndGggLSAxXV0gOiBsZW5ndGggPT09IDMgPyB0aGlzLmNhdGVnb3JpZXNbcGFyYW1zWzBdXS5mb3Jtc1twYXJhbXNbMV1dLmZvcm1zW3BhcmFtc1tsZW5ndGggLSAxXV0gOiB0aGlzLmNhdGVnb3JpZXNbcGFyYW1zWzBdXS5mb3Jtc1twYXJhbXNbMV1dLmZvcm1zW3BhcmFtc1syXV0uZm9ybXNbcGFyYW1zW2xlbmd0aCAtIDFdXTtcclxuICAgIGlmICh2YWx1ZSkge1xyXG4gICAgICBjb25zdCBwcmV2SW5kZXggPSBmb3Jtcy5kZWZhdWx0VmFsdWUuZmluZEluZGV4KChvcHQpID0+IG9wdC52YWx1ZS50b0xvY2FsZUxvd2VyQ2FzZSgpID09PSBwcmV2LnRvTG9jYWxlTG93ZXJDYXNlKCkpO1xyXG4gICAgICBpZiAocHJldkluZGV4ICE9PSAtMSkge1xyXG4gICAgICAgIGZvcm1zLmRlZmF1bHRWYWx1ZVtwcmV2SW5kZXhdLnZhbHVlID0gdmFsdWUudHJpbSgpO1xyXG4gICAgICAgIGlucHV0LnZhbHVlID0gXCJcIjtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zdCBleGlzdCA9IGZvcm1zLmRlZmF1bHRWYWx1ZS5maW5kKChvcHQpID0+IG9wdC52YWx1ZS50b0xvY2FsZUxvd2VyQ2FzZSgpID09PSBldmVudC52YWx1ZS50b0xvY2FsZUxvd2VyQ2FzZSgpKTtcclxuICAgICAgICBpZiAoIWV4aXN0KSB7XHJcbiAgICAgICAgICBmb3Jtcy5kZWZhdWx0VmFsdWUucHVzaCh7IHZhbHVlOiB2YWx1ZS50cmltKCksIGNoZWNrZWQ6IGZhbHNlIH0pO1xyXG4gICAgICAgICAgaW5wdXQudmFsdWUgPSBcIlwiO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBpbnB1dC52YWx1ZSA9IFwiXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgfVxyXG4gICAgdGhpcy5nZXRDb25kaXRpb25WYWx1ZXMoKVxyXG4gIH1cclxuXHJcbiAgZHJvcChldmVudDogQ2RrRHJhZ0Ryb3A8c3RyaW5nW10+KSB7XHJcbiAgICB0aGlzLmNhbkV4aXQgPSBmYWxzZTtcclxuICAgIGlmIChldmVudC5wcmV2aW91c0NvbnRhaW5lciA9PT0gZXZlbnQuY29udGFpbmVyKSB7XHJcbiAgICAgIG1vdmVJdGVtSW5BcnJheShldmVudC5jb250YWluZXIuZGF0YSwgZXZlbnQucHJldmlvdXNJbmRleCwgZXZlbnQuY3VycmVudEluZGV4KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRyYW5zZmVyQXJyYXlJdGVtKGV2ZW50LnByZXZpb3VzQ29udGFpbmVyLmRhdGEsIGV2ZW50LmNvbnRhaW5lci5kYXRhLCBldmVudC5wcmV2aW91c0luZGV4LCBldmVudC5jdXJyZW50SW5kZXgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZHJvcEZpZWxkKGV2ZW50OiBDZGtEcmFnRHJvcDxzdHJpbmdbXT4pIHtcclxuICAgIGNvbnN0IGNvbnRhaW5lckRhdGE6IGFueSA9IGV2ZW50LmNvbnRhaW5lci5kYXRhO1xyXG4gICAgY29uc3QgcHJldmlvdXNDb250YWluZXJEYXRhOiBhbnkgPSBldmVudC5wcmV2aW91c0NvbnRhaW5lci5kYXRhO1xyXG4gICAgY29uc3QgY2F0ZWdvcnkgPSBjb250YWluZXJEYXRhLmNhdGVnb3J5O1xyXG5cclxuICAgIGNhdGVnb3J5LmZvcm1zW3ByZXZpb3VzQ29udGFpbmVyRGF0YS5pbmRleF0gPSBjb250YWluZXJEYXRhLmZpZWxkO1xyXG4gICAgY2F0ZWdvcnkuZm9ybXNbY29udGFpbmVyRGF0YS5pbmRleF0gPSBwcmV2aW91c0NvbnRhaW5lckRhdGEuZmllbGQ7XHJcblxyXG4gICAgdGhpcy5zYXZlQ2F0ZWdvcmllc1RvU2Vzc2lvblN0b3JhZ2UoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2F2ZUNhdGVnb3JpZXNUb1Nlc3Npb25TdG9yYWdlKCk6IHZvaWQge1xyXG4gICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShQUk9GSUxFX0NBVEVHT1JJRVNfS0VZLCBKU09OLnN0cmluZ2lmeSh0aGlzLmNhdGVnb3JpZXMpKTtcclxuICB9XHJcblxyXG4gIGluZ29yZURlZmF1bHRBY3Rpb24oZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIH1cclxuXHJcbiAgb25TaG93Q2F0ZWdvcnkoKSB7XHJcbiAgICB0aGlzLnNob3dQcm9maWxlTmFtZSA9ICF0aGlzLnNob3dQcm9maWxlTmFtZTtcclxuICB9XHJcblxyXG4gIG9uU2VsZWN0UGljdG8oZSwgcGljdG8pIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIHRoaXMuY2FuRXhpdCA9IGZhbHNlO1xyXG4gICAgdGhpcy5mb3JtLnBhdGNoVmFsdWUoeyBQaWN0bzogcGljdG8gfSk7XHJcbiAgICB0aGlzLmlzUGljdG9MaXN0U2hvdyA9ICF0aGlzLmlzUGljdG9MaXN0U2hvdztcclxuICB9XHJcbiAgb25TaG93UGljdG9MaXN0KGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIHRoaXMuaXNQaWN0b0xpc3RTaG93ID0gIXRoaXMuaXNQaWN0b0xpc3RTaG93O1xyXG4gIH1cclxuICBvbkNoYW5nZUxhYmVsKGV2ZW50OiBhbnksIC4uLnBhcmFtcykge1xyXG4gICAgY29uc3QgYXJyID0gZXZlbnQubGFiZWwuc3BsaXQoXCIgXCIpO1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgYXJyW2ldID0gYXJyW2ldLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgYXJyW2ldLnNsaWNlKDEpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgbGVuZ3RoID0gcGFyYW1zLmxlbmd0aDtcclxuICAgIGNvbnN0IGZvcm1zID0gbGVuZ3RoID09PSAyID8gdGhpcy5jYXRlZ29yaWVzW3BhcmFtc1swXV0uZm9ybXNbcGFyYW1zW2xlbmd0aCAtIDFdXSA6IGxlbmd0aCA9PT0gMyA/IHRoaXMuY2F0ZWdvcmllc1twYXJhbXNbMF1dLmZvcm1zW3BhcmFtc1sxXV0uZm9ybXNbcGFyYW1zW2xlbmd0aCAtIDFdXSA6IHRoaXMuY2F0ZWdvcmllc1twYXJhbXNbMF1dLmZvcm1zW3BhcmFtc1sxXV0uZm9ybXNbcGFyYW1zWzJdXS5mb3Jtc1twYXJhbXNbbGVuZ3RoIC0gMV1dO1xyXG4gICAgZm9ybXMua2V5ID0gYXJyLmpvaW4oJycpXHJcblxyXG4gIH1cclxuXHJcbiAgb25DaGVja2VkQ2hpcChldmVudDogYW55LCAuLi5wYXJhbXMpIHtcclxuICAgIHRoaXMuY2FuRXhpdCA9IGZhbHNlO1xyXG4gICAgY29uc3QgbGVuZ3RoID0gcGFyYW1zLmxlbmd0aDtcclxuICAgIGNvbnN0IGZvcm1zID0gbGVuZ3RoID09PSAyID8gdGhpcy5jYXRlZ29yaWVzW3BhcmFtc1swXV0uZm9ybXNbcGFyYW1zW2xlbmd0aCAtIDFdXSA6IGxlbmd0aCA9PT0gMyA/IHRoaXMuY2F0ZWdvcmllc1twYXJhbXNbMF1dLmZvcm1zW3BhcmFtc1sxXV0uZm9ybXNbcGFyYW1zW2xlbmd0aCAtIDFdXSA6IHRoaXMuY2F0ZWdvcmllc1twYXJhbXNbMF1dLmZvcm1zW3BhcmFtc1sxXV0uZm9ybXNbcGFyYW1zWzJdXS5mb3Jtc1twYXJhbXNbbGVuZ3RoIC0gMV1dO1xyXG4gICAgY29uc3QgaW5kZXggPSBmb3Jtcy5kZWZhdWx0VmFsdWUuZmluZEluZGV4KChjaGlwKSA9PiBjaGlwLnZhbHVlID09PSBldmVudC52YWx1ZSlcclxuICAgIGlmIChpbmRleCAhPT0gLTEgJiYgZm9ybXMudHlwZSA9PT0gJ2NoZWNrYm94X211bHRpcGxlJykge1xyXG4gICAgICBmb3Jtcy5kZWZhdWx0VmFsdWVbaW5kZXhdLmNoZWNrZWQgPSAhZXZlbnQuY2hlY2tlZFxyXG4gICAgfSBlbHNlIGlmIChpbmRleCAhPT0gLTEpIHtcclxuICAgICAgZm9ybXMuZGVmYXVsdFZhbHVlLmZvckVhY2goKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgdmFsdWUuY2hlY2tlZCA9IGZhbHNlO1xyXG4gICAgICB9KVxyXG4gICAgICBmb3Jtcy5kZWZhdWx0VmFsdWVbaW5kZXhdLmNoZWNrZWQgPSAhZXZlbnQuY2hlY2tlZFxyXG4gICAgfVxyXG4gICAgdGhpcy5nZXRDb25kaXRpb25WYWx1ZXMoKVxyXG4gIH1cclxuXHJcbiAgb3BlbkRpYWxvZygpIHtcclxuICAgIGNvbnN0IGRpYWxvZ1JlZiA9IHRoaXMuZGlhbG9nLm9wZW4oRGlhbG9nQ3JlYXRlVGVtcGxhdGVDb21wb25lbnQsIHtcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIHRhZ3M6IHRoaXMudGFncyxcclxuICAgICAgICBwcm9maWw6IHRoaXMuZm9ybS52YWx1ZVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIGRpYWxvZ1JlZi5hZnRlckNsb3NlZCgpLnN1YnNjcmliZSgoY3VycmVudDogYW55KSA9PiB7XHJcbiAgICAgIGlmIChjdXJyZW50KSB7XHJcbiAgICAgICAgdGhpcy5zZXJ2aWNlLmN1cnJlbnRUZW1wbGF0ZS5uZXh0KGN1cnJlbnQpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG9uUGFzc0luRWRpdE1vZGUoaSkge1xyXG4gICAgdGhpcy5jYW5FeGl0ID0gZmFsc2U7XHJcbiAgICB0aGlzLmVkaXRJbmRleCA9IGk7XHJcbiAgfVxyXG5cclxuICBvbkVkaXQoKSB7XHJcbiAgICB0aGlzLmVkaXRJbmRleCA9IG51bGw7XHJcbiAgfVxyXG5cclxuICBvbkVkaXRDYXRlZ29yeU5hbWUoaSwgbmFtZSkge1xyXG4gICAgdGhpcy5jYW5FeGl0ID0gZmFsc2U7XHJcbiAgICB0aGlzLmNhdGVnb3JpZXNbaV0ubmFtZSA9IG5hbWU7XHJcbiAgICB0aGlzLmdldENvbmRpdGlvblZhbHVlcygpXHJcbiAgfVxyXG4gIG9uQWNyZWxpbmsoZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIH1cclxuXHJcbiAgZ2V0Q29uZGl0aW9uVmFsdWVzKCkge1xyXG4gICAgY29uc3QgY29uZGl0aW9uc0xpc3Q6IGFueSA9IFtdO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmNhdGVnb3JpZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgY29uc3QgY2F0ZWdvcnkgPSB7XHJcbiAgICAgICAgbGFiZWw6IHRoaXMuY2F0ZWdvcmllc1tpXS5uYW1lLFxyXG4gICAgICAgIGZvcm1zOiBbXSxcclxuICAgICAgICBrZXk6IHRoaXMuY2F0ZWdvcmllc1tpXS5rZXksXHJcbiAgICAgICAgbG9jYXRpb246IHtcclxuICAgICAgICAgIHMwSW5kZXg6IGksXHJcbiAgICAgICAgfSxcclxuICAgICAgICBsZXZlbDogMCxcclxuICAgICAgfVxyXG5cclxuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLmNhdGVnb3JpZXNbaV0uZm9ybXMubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICBjb25zdCBzMUZvcm1zID0gdGhpcy5jYXRlZ29yaWVzW2ldLmZvcm1zW2pdO1xyXG4gICAgICAgIGNvbnN0IHMxTG9jYXRpb24gPSB7XHJcbiAgICAgICAgICBsZXZlbDogMSxcclxuICAgICAgICAgIGxvY2F0aW9uOiB7XHJcbiAgICAgICAgICAgIHMwSW5kZXg6IGksXHJcbiAgICAgICAgICAgIHMxSW5kZXg6IGosXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAga2V5OiBzMUZvcm1zLmtleSxcclxuICAgICAgICAgIGRlZmF1bHRWYWx1ZTogczFGb3Jtcy5kZWZhdWx0VmFsdWUsXHJcbiAgICAgICAgICBsYWJlbDogczFGb3Jtcy5sYWJlbCxcclxuICAgICAgICAgIGZvcm1zOiBbXVxyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRlZ29yeS5mb3Jtcy5wdXNoKHMxTG9jYXRpb24pXHJcbiAgICAgICAgaWYgKHMxRm9ybXMuZm9ybXMpIHtcclxuICAgICAgICAgIGZvciAobGV0IGsgPSAwOyBrIDwgczFGb3Jtcy5mb3Jtcy5sZW5ndGg7IGsrKykge1xyXG4gICAgICAgICAgICBjb25zdCBzMkZvcm1zID0gczFGb3Jtcy5mb3Jtc1trXVxyXG4gICAgICAgICAgICBjb25zdCBzMkxvY2F0aW9uID0ge1xyXG4gICAgICAgICAgICAgIGxldmVsOiAyLFxyXG4gICAgICAgICAgICAgIGxvY2F0aW9uOiB7XHJcbiAgICAgICAgICAgICAgICBzMEluZGV4OiBpLFxyXG4gICAgICAgICAgICAgICAgczFJbmRleDogaixcclxuICAgICAgICAgICAgICAgIHMySW5kZXg6IGssXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU6IHMyRm9ybXMuZGVmYXVsdFZhbHVlLFxyXG4gICAgICAgICAgICAgIGxhYmVsOiBzMkZvcm1zLmxhYmVsLFxyXG4gICAgICAgICAgICAgIGtleTogczJGb3Jtcy5rZXksXHJcbiAgICAgICAgICAgICAgZm9ybXM6IFtdXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgczFMb2NhdGlvbi5mb3Jtcy5wdXNoKHMyTG9jYXRpb24pXHJcbiAgICAgICAgICAgIGlmIChzMkZvcm1zLmZvcm1zKSB7XHJcbiAgICAgICAgICAgICAgZm9yIChsZXQgbCA9IDA7IGwgPCBzMkZvcm1zLmZvcm1zLmxlbmd0aDsgbCsrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzM0Zvcm1zID0gczJGb3Jtcy5mb3Jtc1tsXVxyXG4gICAgICAgICAgICAgICAgY29uc3QgczNMb2NhdGlvbiA9IHtcclxuICAgICAgICAgICAgICAgICAgbGV2ZWw6IDMsXHJcbiAgICAgICAgICAgICAgICAgIGxvY2F0aW9uOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgczBJbmRleDogaSxcclxuICAgICAgICAgICAgICAgICAgICBzMUluZGV4OiBqLFxyXG4gICAgICAgICAgICAgICAgICAgIHMySW5kZXg6IGssXHJcbiAgICAgICAgICAgICAgICAgICAgczNJbmRleDogbCxcclxuICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlOiBzM0Zvcm1zLmRlZmF1bHRWYWx1ZSxcclxuICAgICAgICAgICAgICAgICAga2V5OiBzM0Zvcm1zLmtleSxcclxuICAgICAgICAgICAgICAgICAgbGFiZWw6IHMzRm9ybXMubGFiZWwsXHJcbiAgICAgICAgICAgICAgICAgIGZvcm1zOiBbXVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgczJMb2NhdGlvbi5mb3Jtcy5wdXNoKHMzTG9jYXRpb24pXHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHMzTG9jYXRpb24uZm9ybXMpIHtcclxuICAgICAgICAgICAgICAgICAgZm9yIChsZXQgbSA9IDA7IG0gPCBzM0xvY2F0aW9uLmZvcm1zLmxlbmd0aDsgbSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgczRMb2NhdGlvbiA9IHMzTG9jYXRpb24uZm9ybXNbbV1cclxuICAgICAgICAgICAgICAgICAgICBzM0xvY2F0aW9uLmZvcm1zLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgbGV2ZWw6IDQsXHJcbiAgICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzMEluZGV4OiBpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzMUluZGV4OiBqLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzMkluZGV4OiBrLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzM0luZGV4OiBsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzNEluZGV4OiBtLFxyXG4gICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZTogczRMb2NhdGlvbi5kZWZhdWx0VmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICBrZXk6IHM0TG9jYXRpb24ua2V5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IHM0TG9jYXRpb24ubGFiZWxcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGNvbmRpdGlvbnNMaXN0LnB1c2goY2F0ZWdvcnkpXHJcbiAgICB9XHJcbiAgICBjb25zb2xlLmxvZygnY29uZGl0aW9uc0xpc3TDp8Onw6fDp8Onw6fDp8Onw6fDp8Onw6fDp8Onw6fDp8Onw6fDp8Onw6fDp8OnJywgY29uZGl0aW9uc0xpc3QpO1xyXG5cclxuICAgIHRoaXMuY29uZGl0aW9uRGF0YS5hbGwgPSBjb25kaXRpb25zTGlzdDtcclxuICB9XHJcblxyXG4gIG9uU2VsZWN0Q29uZGl0aW9uKGxldmVsLCBzdWJMZXZlbCwgdmFsdWUpIHtcclxuICAgIGNvbnNvbGUubG9nKCdjb25kaXRpb24nLCB0aGlzLmNvbmRpdGlvbkRhdGFbbGV2ZWxdPy5maW5kKChkYXRhKSA9PiBkYXRhLmtleSA9PT0gdmFsdWUpKTtcclxuICAgIGNvbnN0IGNvbmRpdGlvbiA9IHRoaXMuY29uZGl0aW9uRGF0YVtsZXZlbF0gPyB0aGlzLmNvbmRpdGlvbkRhdGFbbGV2ZWxdPy5maW5kKChkYXRhKSA9PiBkYXRhLmtleSA9PT0gdmFsdWUpIDogbnVsbDtcclxuXHJcbiAgICBpZiAobGV2ZWwgPT09IFwiYWxsXCIpIHtcclxuICAgICAgdGhpcy5jb25kaXRpb25EYXRhID0ge1xyXG4gICAgICAgIC4uLnRoaXMuY29uZGl0aW9uRGF0YSxcclxuICAgICAgICBzMTogW10sXHJcbiAgICAgICAgczI6IFtdLFxyXG4gICAgICAgIHMzOiBbXSxcclxuICAgICAgICBkZWZhdWx0VmFsdWU6IFtdXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHRoaXMuY3VycmVudEVkaXRCbG9jay5jb25kaXRpb24gPSBjb25kaXRpb25cclxuICAgIHRoaXMub25HZXREZWZhdWx0VmFsdWUoKVxyXG4gICAgaWYgKGNvbmRpdGlvbiAmJiBjb25kaXRpb24/LmZvcm1zPy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIHRoaXMuY29uZGl0aW9uRGF0YVtzdWJMZXZlbF0gPSBjb25kaXRpb24uZm9ybXM7XHJcbiAgICB9XHJcbiAgfVxyXG4gIG9uR2V0RGVmYXVsdFZhbHVlKCkge1xyXG4gICAgaWYgKHRoaXMuY3VycmVudEVkaXRCbG9jay5pc0NvbmRpdGlvbmFsICYmIHRoaXMuY3VycmVudEVkaXRCbG9jaz8uY29uZGl0aW9uPy5sb2NhdGlvbikge1xyXG4gICAgICBjb25zdCB7IHMwSW5kZXgsIC4uLnJlc3QgfSA9IHRoaXMuY3VycmVudEVkaXRCbG9jay5jb25kaXRpb24ubG9jYXRpb25cclxuICAgICAgbGV0IGN1cnJlbnREYXRhID0gdGhpcy5jYXRlZ29yaWVzW3MwSW5kZXhdO1xyXG4gICAgICBmb3IgKGNvbnN0IGtleSBpbiByZXN0KSB7XHJcbiAgICAgICAgaWYgKGN1cnJlbnREYXRhLmZvcm1zW3Jlc3Rba2V5XV0pIHtcclxuICAgICAgICAgIGN1cnJlbnREYXRhID0gY3VycmVudERhdGEuZm9ybXNbcmVzdFtrZXldXVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gY3VycmVudERhdGEuZGVmYXVsdFZhbHVlIHx8IFtdXHJcbiAgICB9XHJcbiAgICByZXR1cm4gW11cclxuICB9XHJcblxyXG4gIG9uQWN0aXZlTWVudShjYXQsIGkpIHtcclxuICAgIHRoaXMuZWRpdEluZGV4ID0gaTtcclxuICAgIHRoaXMucGFyYW1zSW5kZXggPSBbaV07XHJcbiAgICB0aGlzLmlzU2VjdGlvbiA9IHRydWU7XHJcbiAgICB0aGlzLmlzQmxvY2sgPSBmYWxzZTtcclxuICAgIHRoaXMuY3VycmVudEVkaXRCbG9jayA9IGNhdDtcclxuICB9XHJcblxyXG4gIGNhdE5hbWVTdGFydChzdHI6IHN0cmluZykge1xyXG4gICAgY29uc3Qgdm93ZWxzID0gWydhJywgJ2UnLCAnaScsICdvJywgJ3UnLCAneSddO1xyXG4gICAgcmV0dXJuIHZvd2Vscy5pbmNsdWRlcyhzdHIuc3Vic3RyKDAsIDEpLnRvTG9jYWxlTG93ZXJDYXNlKCkpXHJcbiAgfVxyXG5cclxuICBvbkVkaXRCbG9jayhibG9jaywgLi4ucGFyYW1zKSB7XHJcbiAgICB0aGlzLmlzQmxvY2sgPSB0cnVlO1xyXG4gICAgdGhpcy5jdXJyZW50RWRpdEJsb2NrID0gYmxvY2s7XHJcbiAgICBjb25zdCB7IGNvbmRpdGlvbiB9ID0gdGhpcy5jdXJyZW50RWRpdEJsb2NrXHJcblxyXG4gICAgdGhpcy5nZXRDb25kaXRpb25WYWx1ZXMoKTtcclxuICAgIGlmIChjb25kaXRpb24gJiYgY29uZGl0aW9uLmxvY2F0aW9uKSB7XHJcbiAgICAgIGNvbnN0IGxvY2F0aW9uID0gY29uZGl0aW9uLmxvY2F0aW9uO1xyXG4gICAgICBpZiAobG9jYXRpb24/LnMwSW5kZXggPj0gMCkge1xyXG4gICAgICAgIHRoaXMuYWxsID0gdGhpcy5jYXRlZ29yaWVzW2xvY2F0aW9uLnMwSW5kZXhdLmtleVxyXG4gICAgICB9XHJcbiAgICAgIGlmIChsb2NhdGlvbj8uczFJbmRleCA+PSAwKSB7XHJcbiAgICAgICAgY29uc3QgczEgPSB0aGlzLmNhdGVnb3JpZXNbbG9jYXRpb24uczBJbmRleF1cclxuICAgICAgICB0aGlzLnMxID0gczE/LmZvcm1zW2xvY2F0aW9uLnMxSW5kZXhdLmtleSB8fCBzMS5rZXk7XHJcbiAgICAgICAgdGhpcy5jb25kaXRpb25EYXRhLnMxID0gdGhpcy5jb25kaXRpb25EYXRhPy5hbGxbbG9jYXRpb24uczBJbmRleF0/LmZvcm1zIHx8IFtdXHJcbiAgICAgIH1cclxuICAgICAgaWYgKGxvY2F0aW9uPy5zMkluZGV4ID49IDApIHtcclxuICAgICAgICBjb25zdCBzMiA9IHRoaXMuY2F0ZWdvcmllc1tsb2NhdGlvbi5zMEluZGV4XT8uZm9ybXNbbG9jYXRpb24uczFJbmRleF1cclxuICAgICAgICB0aGlzLnMyID0gczI/LmZvcm1zW2xvY2F0aW9uLnMySW5kZXhdPy5rZXkgfHwgczIua2V5O1xyXG4gICAgICAgIHRoaXMuY29uZGl0aW9uRGF0YS5zMiA9IHRoaXMuY29uZGl0aW9uRGF0YT8uYWxsW2xvY2F0aW9uLnMwSW5kZXhdLmZvcm1zW2xvY2F0aW9uLnMxSW5kZXhdLmZvcm1zIHx8IFtdXHJcbiAgICAgIH1cclxuICAgICAgaWYgKGxvY2F0aW9uPy5zM0luZGV4ID49IDApIHtcclxuICAgICAgICBjb25zdCBzMyA9IHRoaXMuY2F0ZWdvcmllc1tsb2NhdGlvbi5zMEluZGV4XT8uZm9ybXNbbG9jYXRpb24uczFJbmRleF0/LmZvcm1zW2xvY2F0aW9uLnMySW5kZXhdXHJcbiAgICAgICAgdGhpcy5zMyA9IHMzPy5mb3Jtc1tsb2NhdGlvbi5zM0luZGV4XT8ua2V5IHx8IHMzLmtleTtcclxuICAgICAgICB0aGlzLmNvbmRpdGlvbkRhdGEuczMgPSB0aGlzLmNvbmRpdGlvbkRhdGE/LmFsbFtsb2NhdGlvbi5zMEluZGV4XS5mb3Jtc1tsb2NhdGlvbi5zMUluZGV4XS5mb3Jtc1tsb2NhdGlvbi5zMkluZGV4XSB8fCBbXVxyXG4gICAgICB9XHJcbiAgICAgIGlmIChsb2NhdGlvbj8uczRJbmRleCA+PSAwKSB7XHJcbiAgICAgICAgY29uc3QgczQgPSB0aGlzLmNhdGVnb3JpZXNbbG9jYXRpb24uczBJbmRleF0/LmZvcm1zW2xvY2F0aW9uLnMxSW5kZXhdPy5mb3Jtc1tsb2NhdGlvbi5zMkluZGV4XT8uZm9ybXNbbG9jYXRpb24uczNJbmRleF1cclxuICAgICAgICB0aGlzLnM0ID0gczQ/LmZvcm1zW2xvY2F0aW9uLnM0SW5kZXhdPy5rZXkgfHwgczQua2V5O1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmFsbCA9IFwiXCJcclxuICAgICAgdGhpcy5zMSA9ICcnXHJcbiAgICAgIHRoaXMuczIgPSBcIlwiXHJcbiAgICAgIHRoaXMuczMgPSBcIlwiXHJcbiAgICAgIHRoaXMuczQgPSBcIlwiXHJcbiAgICAgIHRoaXMuY29uZGl0aW9uRGF0YSA9IHtcclxuICAgICAgICAuLi50aGlzLmNvbmRpdGlvbkRhdGEsXHJcbiAgICAgICAgczE6IFtdLFxyXG4gICAgICAgIHMyOiBbXSxcclxuICAgICAgICBzMzogW10sXHJcbiAgICAgICAgZGVmYXVsdFZhbHVlOiBbXVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB0aGlzLmlzU2VjdGlvbiA9IGZhbHNlO1xyXG4gICAgdGhpcy5wYXJhbXNJbmRleCA9IHBhcmFtcztcclxuXHJcbiAgfVxyXG5cclxuICBvblJlbW92ZWJsb2NrKGV2ZW50LCBibG9jaykge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICB9XHJcblxyXG4gIG9uUmVtb3ZlRmllbGRCbG9jayhldmVudCkge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IGxlbmd0aCA9IHRoaXMucGFyYW1zSW5kZXgubGVuZ3RoO1xyXG4gICAgdGhpcy5jYW5FeGl0ID0gZmFsc2U7XHJcbiAgICBjb25zdCBmb3JtcyA9IGxlbmd0aCA9PT0gMSA/IHRoaXMuY2F0ZWdvcmllcyA6IGxlbmd0aCA9PT0gMiA/IHRoaXMuY2F0ZWdvcmllc1t0aGlzLnBhcmFtc0luZGV4WzBdXS5mb3JtcyA6IGxlbmd0aCA9PT0gMyA/IHRoaXMuY2F0ZWdvcmllc1t0aGlzLnBhcmFtc0luZGV4WzBdXS5mb3Jtc1t0aGlzLnBhcmFtc0luZGV4WzFdXS5mb3JtcyA6IHRoaXMuY2F0ZWdvcmllc1t0aGlzLnBhcmFtc0luZGV4WzBdXS5mb3Jtc1t0aGlzLnBhcmFtc0luZGV4WzFdXS5mb3Jtc1t0aGlzLnBhcmFtc0luZGV4WzJdXS5mb3JtcztcclxuXHJcbiAgICB0aGlzLmN1cnJlbnRFZGl0QmxvY2sgPSBudWxsO1xyXG4gICAgdGhpcy5pc0Jsb2NrID0gZmFsc2U7XHJcbiAgICB0aGlzLmlzU2VjdGlvbiA9IGZhbHNlO1xyXG4gICAgdGhpcy5vbkhpc3Rvcmljcyh7XHJcbiAgICAgIGZvcm06IGZvcm1zLnNwbGljZSh0aGlzLnBhcmFtc0luZGV4W2xlbmd0aCAtIDFdLCAxKVswXSxcclxuICAgICAgbWV0aG9kOiAnc3BsaWNlJyxcclxuICAgICAgbG9jYXRpb246IGxlbmd0aCA9PT0gMSA/ICdjYXRlZ29yeScgOiAnZm9ybXMnLFxyXG4gICAgICBwYXJhbXM6IHRoaXMucGFyYW1zSW5kZXhcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBvbkR1cGxpY2F0ZWRCbG9jayhldmVudCkge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IGxlbmd0aCA9IHRoaXMucGFyYW1zSW5kZXgubGVuZ3RoO1xyXG4gICAgdGhpcy5jYW5FeGl0ID0gZmFsc2U7XHJcbiAgICBjb25zdCBmb3JtcyA9IGxlbmd0aCA9PT0gMSA/IHRoaXMuY2F0ZWdvcmllcyA6IGxlbmd0aCA9PT0gMiA/IHRoaXMuY2F0ZWdvcmllc1t0aGlzLnBhcmFtc0luZGV4WzBdXS5mb3JtcyA6IGxlbmd0aCA9PT0gMyA/IHRoaXMuY2F0ZWdvcmllc1t0aGlzLnBhcmFtc0luZGV4WzBdXS5mb3Jtc1t0aGlzLnBhcmFtc0luZGV4WzFdXS5mb3JtcyA6IHRoaXMuY2F0ZWdvcmllc1t0aGlzLnBhcmFtc0luZGV4WzBdXS5mb3Jtc1t0aGlzLnBhcmFtc0luZGV4WzFdXS5mb3Jtc1t0aGlzLnBhcmFtc0luZGV4WzJdXS5mb3JtcztcclxuICAgIGNvbnN0IGNsb25lRWRpdGFibGUgPSB0aGlzLm9uRWRpdGFibGVCbG9jayh7IC4uLnRoaXMuY3VycmVudEVkaXRCbG9jaywgbmFtZTogdGhpcy5jdXJyZW50RWRpdEJsb2NrLm5hbWUgKyAnIC0gY29waWUnIH0pXHJcbiAgICBjb25zdCBjbG9uZUJsb2NrID0gSlNPTi5zdHJpbmdpZnkoY2xvbmVFZGl0YWJsZSk7XHJcblxyXG5cclxuICAgIGZvcm1zLnB1c2goSlNPTi5wYXJzZShjbG9uZUJsb2NrKSk7XHJcbiAgICB0aGlzLmN1cnJlbnRFZGl0QmxvY2sgPSBmb3Jtcy5hdCgtMSk7XHJcbiAgICBjb25zdCBwYXJhbXM6IG51bWJlcltdID0gWy4uLnRoaXMucGFyYW1zSW5kZXhdXHJcbiAgICBwYXJhbXMucG9wKCk7XHJcbiAgICBwYXJhbXMucHVzaChmb3Jtcy5sZW5ndGggLSAxKTtcclxuICAgIHRoaXMub25IaXN0b3JpY3Moe1xyXG4gICAgICBmb3JtOiBKU09OLnBhcnNlKGNsb25lQmxvY2spLFxyXG4gICAgICBtZXRob2Q6ICdwdXNoJyxcclxuICAgICAgbG9jYXRpb246ICdmb3JtcycsXHJcbiAgICAgIHBhcmFtc1xyXG4gICAgfSlcclxuICAgIC8vIHRoaXMuZWRpdEluZGV4ID0gZm9ybXMubGVuZ3RoIC0gMTtcclxuICB9XHJcblxyXG4gIG9uRWRpdGFibGVCbG9jayhub3RFZGl0YWJsZUJsb2NrOiBhbnkpIHtcclxuICAgIGNvbnN0IGVkaXRhYmxlRm9ybUJsb2NrID0gbm90RWRpdGFibGVCbG9jay5mb3JtcyA/IG5vdEVkaXRhYmxlQmxvY2suZm9ybXNcclxuICAgICAgLm1hcCgoY2F0KSA9PiB7XHJcbiAgICAgICAgaWYgKGNhdC5mb3Jtcykge1xyXG4gICAgICAgICAgY29uc3QgZiA9IGNhdC5mb3Jtc1xyXG4gICAgICAgICAgICAubWFwKChzdWIpID0+IHtcclxuICAgICAgICAgICAgICBpZiAoc3ViLmZvcm1zKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzID0gc3ViLmZvcm1zLm1hcCgoY2hpbGQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgaWYgKGNoaWxkLmZvcm1zKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICAgIC4uLmNoaWxkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgZWRpdGFibGU6IHRydWVcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICAuLi5jaGlsZCwgZWRpdGFibGU6IHRydWVcclxuICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgLi4uc3ViLFxyXG4gICAgICAgICAgICAgICAgICBlZGl0YWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgZm9ybXM6IHNcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgcmV0dXJuIHsgLi4uc3ViLCBlZGl0YWJsZTogdHJ1ZSB9O1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgLi4uY2F0LFxyXG4gICAgICAgICAgICBlZGl0YWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgZm9ybXM6IGZcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHsgLi4uY2F0LCBlZGl0YWJsZTogdHJ1ZSB9XHJcbiAgICAgIH0pIDogbnVsbDtcclxuICAgIHJldHVybiBlZGl0YWJsZUZvcm1CbG9jayA/IHsgLi4ubm90RWRpdGFibGVCbG9jaywgZWRpdGFibGU6IHRydWUsIGZvcm1zOiBlZGl0YWJsZUZvcm1CbG9jayB9IDogbm90RWRpdGFibGVCbG9jaztcclxuICB9XHJcblxyXG4gIG9uS2V5VXBDaGlwKGV2ZW50LCBmaWVsZCkge1xyXG4gICAgdGhpcy5jYW5FeGl0ID0gZmFsc2U7XHJcbiAgICBpZiAoZXZlbnQua2V5ID09PSBcIjtcIikge1xyXG4gICAgICBjb25zdCBleGlzdCA9IGZpZWxkLmRlZmF1bHRWYWx1ZS5maW5kKChvcHQpID0+IG9wdC52YWx1ZS50b0xvY2FsZUxvd2VyQ2FzZSgpID09PSBldmVudC50YXJnZXQudmFsdWUuc3BsaXQoXCI7XCIpWzBdLnRvTG9jYWxlTG93ZXJDYXNlKCkpO1xyXG4gICAgICBpZiAoIWV4aXN0KSB7XHJcbiAgICAgICAgZmllbGQuZGVmYXVsdFZhbHVlLnB1c2goe1xyXG4gICAgICAgICAgdmFsdWU6IGV2ZW50LnRhcmdldC52YWx1ZS5zcGxpdChcIjtcIilbMF0uc2xpY2UoMCwgMjApLFxyXG4gICAgICAgICAgY2hlY2tlZDogZmFsc2VcclxuICAgICAgICB9KTtcclxuICAgICAgICBldmVudC50YXJnZXQudmFsdWUgPSBcIlwiO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGV2ZW50LnRhcmdldC52YWx1ZSA9IFwiXCI7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHRoaXMuZ2V0Q29uZGl0aW9uVmFsdWVzKClcclxuICB9XHJcblxyXG4gIG9uRWRpdENoaXAoY2hpcCkge1xyXG4gICAgaWYgKGNoaXAudmFsdWUgPT09IHRoaXMuY3VycmVudENoaXApIHtcclxuICAgICAgdGhpcy5jdXJyZW50Q2hpcCA9IFwiXCJcclxuICAgICAgdGhpcy5wcmV2VmFsdWUgPSBcIlwiXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmN1cnJlbnRDaGlwID0gY2hpcC52YWx1ZTtcclxuICAgICAgdGhpcy5wcmV2VmFsdWUgPSBjaGlwLnZhbHVlXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhZGRLZXl3b3JkRnJvbUlucHV0QmxvY2soZXZlbnQ6IE1hdENoaXBJbnB1dEV2ZW50LCBmaWVsZCwgcHJldikge1xyXG4gICAgdGhpcy5jYW5FeGl0ID0gZmFsc2U7XHJcbiAgICBjb25zdCBpbnB1dCA9IGV2ZW50LmlucHV0O1xyXG4gICAgY29uc3QgdmFsdWUgPSBldmVudC52YWx1ZTtcclxuICAgIGlmICh2YWx1ZSkge1xyXG4gICAgICBjb25zdCBwcmV2SW5kZXggPSBmaWVsZC5kZWZhdWx0VmFsdWU/LmZpbmRJbmRleCgob3B0KSA9PiBvcHQudmFsdWUudG9Mb2NhbGVMb3dlckNhc2UoKSA9PT0gcHJldi50b0xvY2FsZUxvd2VyQ2FzZSgpKTtcclxuICAgICAgaWYgKHByZXZJbmRleCAhPT0gLTEpIHtcclxuICAgICAgICBmaWVsZC5kZWZhdWx0VmFsdWVbcHJldkluZGV4XS52YWx1ZSA9IHZhbHVlLnRyaW0oKTtcclxuICAgICAgICBpbnB1dC52YWx1ZSA9IFwiXCI7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc3QgZXhpc3QgPSBmaWVsZC5kZWZhdWx0VmFsdWUuZmluZCgob3B0KSA9PiBvcHQudmFsdWUudG9Mb2NhbGVMb3dlckNhc2UoKSA9PT0gZXZlbnQudmFsdWUudG9Mb2NhbGVMb3dlckNhc2UoKSk7XHJcbiAgICAgICAgaWYgKCFleGlzdCkge1xyXG4gICAgICAgICAgZmllbGQuZGVmYXVsdFZhbHVlLnB1c2goeyB2YWx1ZTogdmFsdWUudHJpbSgpLnNsaWNlKDAsIDE1KSwgY2hlY2tlZDogZmFsc2UgfSk7XHJcbiAgICAgICAgICBpbnB1dC52YWx1ZSA9IFwiXCI7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGlucHV0LnZhbHVlID0gXCJcIjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICB9XHJcbiAgICB0aGlzLmdldENvbmRpdGlvblZhbHVlcygpXHJcbiAgfVxyXG5cclxuICBvbkNoZWNrZWRDaGlwQmxvY2soZXZlbnQ6IGFueSwgZmllbGQpIHtcclxuICAgIHRoaXMuY2FuRXhpdCA9IGZhbHNlO1xyXG4gICAgY29uc3QgaW5kZXggPSBmaWVsZC5kZWZhdWx0VmFsdWUuZmluZEluZGV4KChjaGlwKSA9PiBjaGlwLnZhbHVlID09PSBldmVudC52YWx1ZSlcclxuICAgIGlmIChpbmRleCAhPT0gLTEgJiYgZmllbGQudHlwZSA9PT0gJ2NoZWNrYm94X211bHRpcGxlJykge1xyXG4gICAgICBmaWVsZC5kZWZhdWx0VmFsdWVbaW5kZXhdLmNoZWNrZWQgPSAhZXZlbnQuY2hlY2tlZFxyXG4gICAgfSBlbHNlIGlmIChpbmRleCAhPT0gLTEpIHtcclxuICAgICAgZmllbGQuZGVmYXVsdFZhbHVlLmZvckVhY2goKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgdmFsdWUuY2hlY2tlZCA9IGZhbHNlO1xyXG4gICAgICB9KVxyXG4gICAgICBmaWVsZC5kZWZhdWx0VmFsdWVbaW5kZXhdLmNoZWNrZWQgPSAhZXZlbnQuY2hlY2tlZFxyXG4gICAgfVxyXG4gICAgdGhpcy5nZXRDb25kaXRpb25WYWx1ZXMoKVxyXG4gIH1cclxuXHJcbiAgcmVtb3ZlS2V5d29yZEJsb2NrKGtleXdvcmQ6IGFueSwgZmllbGQpIHtcclxuICAgIHRoaXMuY2FuRXhpdCA9IGZhbHNlO1xyXG4gICAgZmllbGQuZGVmYXVsdFZhbHVlID0gZmllbGQuZGVmYXVsdFZhbHVlLmZpbHRlcigob3B0aW9uKSA9PiBvcHRpb24udmFsdWUgIT09IGtleXdvcmQudmFsdWUpO1xyXG4gICAgdGhpcy5nZXRDb25kaXRpb25WYWx1ZXMoKVxyXG4gIH1cclxuXHJcbiAgb25DaGFuZ2VUeXBlQmxvY2soZmllbGQpIHtcclxuICAgIHRoaXMuY2FuRXhpdCA9IGZhbHNlO1xyXG4gICAgaWYgKGZpZWxkLnR5cGUgPT09IFwic2VsZWN0XCIgfHwgZmllbGQudHlwZSA9PT0gXCJyYWRpb1wiIHx8IGZpZWxkLnR5cGUgPT09IFwiY2hlY2tib3hfbXVsdGlwbGVcIikge1xyXG4gICAgICBmaWVsZC5kZWZhdWx0VmFsdWUgPSBbXTtcclxuICAgIH0gZWxzZSBpZiAoZmllbGQudHlwZSA9PT0gXCJjaGVja2JveFwiIHx8IGZpZWxkLnR5cGUgPT09IFwidG9nZ2xlXCIpIHtcclxuICAgICAgZmllbGQuZGVmYXVsdFZhbHVlID0gdHJ1ZTtcclxuICAgICAgZmllbGQudmFsdWUgPSBmYWxzZTtcclxuICAgIH0gZWxzZSBpZiAoZmllbGQudHlwZSA9PT0gJ25vbmUnKSB7XHJcbiAgICAgIGZpZWxkLmRlZmF1bHRWYWx1ZSA9IFwiXCI7XHJcbiAgICAgIGZpZWxkLnZhbHVlID0gXCJcIjtcclxuICAgICAgZmllbGQubGFiZWwgPSBcIkF1Y3VuXCI7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBmaWVsZC5kZWZhdWx0VmFsdWUgPSBcIlwiO1xyXG4gICAgICBmaWVsZC52YWx1ZSA9IFwiXCI7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvbkFkZE5ld1N1YkxldmVsRmllbGRCbG9jayhldmVudCkge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIHRoaXMuY2FuRXhpdCA9IGZhbHNlO1xyXG4gICAgY29uc3QgbGVuZ3RoID0gdGhpcy5wYXJhbXNJbmRleC5sZW5ndGg7XHJcbiAgICBjb25zdCBmb3JtcyA9IGxlbmd0aCA9PT0gMSA/IHRoaXMuY2F0ZWdvcmllc1t0aGlzLnBhcmFtc0luZGV4WzBdXSA6IGxlbmd0aCA9PT0gMiA/IHRoaXMuY2F0ZWdvcmllc1t0aGlzLnBhcmFtc0luZGV4WzBdXS5mb3Jtc1t0aGlzLnBhcmFtc0luZGV4W2xlbmd0aCAtIDFdXSA6IGxlbmd0aCA9PT0gMyA/IHRoaXMuY2F0ZWdvcmllc1t0aGlzLnBhcmFtc0luZGV4WzBdXS5mb3Jtc1t0aGlzLnBhcmFtc0luZGV4WzFdXS5mb3Jtc1t0aGlzLnBhcmFtc0luZGV4W2xlbmd0aCAtIDFdXSA6IHRoaXMuY2F0ZWdvcmllc1t0aGlzLnBhcmFtc0luZGV4WzBdXS5mb3Jtc1t0aGlzLnBhcmFtc0luZGV4WzFdXS5mb3Jtc1t0aGlzLnBhcmFtc0luZGV4WzJdXS5mb3Jtc1t0aGlzLnBhcmFtc0luZGV4W2xlbmd0aCAtIDFdXTtcclxuICAgIGZvcm1zLmV4cGFuZE1vcmUgPSB0cnVlO1xyXG4gICAgZm9ybXMuZm9ybXMgPSBmb3Jtcy5mb3JtcyB8fCBbXVxyXG4gICAgY29uc3QgZGF0YSA9IHtcclxuICAgICAgbGFiZWw6IFwiTm91dmVsbGUgc291cyBjYXTDqWdvcmllIMOgIHJlbm9tbWVyXCIsXHJcbiAgICAgIGtleTogXCJOb3V2ZWxsZXNvdXNjYXTDqWdvcmllw6ByZW5vbW1lclwiLFxyXG4gICAgICBleHBhbmRPbmJvYXJkaW5nOiB0cnVlLFxyXG4gICAgICBkZWZhdWx0VmFsdWU6IG51bGwsXHJcbiAgICAgIHZhbHVlOiB0cnVlLFxyXG4gICAgICBzaXplOiA4MCxcclxuICAgICAgaXNNYW5kYXRvcnk6IGZhbHNlLFxyXG4gICAgICBvdGhlclZhbHVlOiAnJyxcclxuICAgICAgdHlwZTogXCJ0ZXh0XCIsXHJcbiAgICAgIGVkaXRhYmxlOiB0cnVlLFxyXG4gICAgICBpc0NvbmRpdGlvbmFsOiBmYWxzZSxcclxuICAgICAgY29uZGl0aW9uVmFsdWU6IFwiXCIsXHJcbiAgICAgIGNvbmRpdGlvbjoge30sXHJcbiAgICAgIGRlbGV0ZWFibGU6IHRydWUsXHJcbiAgICAgIHN1YkxldmVsOiAxLFxyXG4gICAgICBleHBhbmRNb3JlOiBmYWxzZSxcclxuICAgIH1cclxuICAgIGZvcm1zLmZvcm1zLnB1c2goZGF0YVxyXG4gICAgKVxyXG4gICAgdGhpcy5vbkhpc3Rvcmljcyh7XHJcbiAgICAgIGZvcm06IGRhdGEsXHJcbiAgICAgIG1ldGhvZDogJ3B1c2gnLFxyXG4gICAgICBsb2NhdGlvbjogJ2Zvcm1zJyxcclxuICAgICAgcGFyYW1zOiB0aGlzLnBhcmFtc0luZGV4XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcblxyXG4gIG9uT3BlblR5cGVEaWFsb2coZmllbGQpIHtcclxuICAgIGNvbnN0IGRpYWxvZ1JlZiA9IHRoaXMuZGlhbG9nLm9wZW4oVHlwZUNvbXBvbmVudCwge1xyXG4gICAgICBkYXRhOiB7IHNlbGVjdGVkVHlwZTogZmllbGQudHlwZSB9XHJcbiAgICB9KTtcclxuICAgIGRpYWxvZ1JlZi5hZnRlckNsb3NlZCgpLnN1YnNjcmliZSgodHlwZTogYW55KSA9PiB7XHJcbiAgICAgIGlmICh0eXBlKSB7XHJcbiAgICAgICAgZmllbGQudHlwZSA9IHR5cGU7XHJcbiAgICAgICAgdGhpcy5vbkNoYW5nZVR5cGVCbG9jayhmaWVsZClcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBmaWVsZFdpZHRoKHR5cGU6IHN0cmluZywgbGVuZ3RoOiBudW1iZXIsIGluZGV4OiBudW1iZXIpIHtcclxuICAgIGlmICh0eXBlID09PSAndG9nZ2xlJykge1xyXG4gICAgICByZXR1cm4gJzUwJSdcclxuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gXCJ0ZXh0XCIgfHwgdHlwZSA9PT0gXCJkYXRlXCIgfHwgdHlwZSA9PT0gXCJub25lXCIgfHwgdHlwZSA9PSAnc2VsZWN0JyB8fCB0eXBlID09PSAndGVsJyB8fCB0eXBlID09PSAnZW1haWwnIHx8IHR5cGUgPT09ICdwYXNzd29yZCcgfHwgdHlwZSA9PT0gJ3RleHRhcmVhJykge1xyXG4gICAgICBpZiAobGVuZ3RoIDwgMykge1xyXG4gICAgICAgIHJldHVybiAnNTAlJ1xyXG4gICAgICB9IGVsc2UgaWYgKGxlbmd0aCA9PT0gMykge1xyXG4gICAgICAgIHJldHVybiAnMzMlJ1xyXG4gICAgICB9IGVsc2UgaWYgKGxlbmd0aCA9PT0gNCkge1xyXG4gICAgICAgIHJldHVybiAnNTAlJ1xyXG4gICAgICB9IGVsc2UgaWYgKGxlbmd0aCA9PT0gNSkge1xyXG4gICAgICAgIHJldHVybiBpbmRleCA8PSAyID8gJzMzJScgOiAnNTAlJ1xyXG4gICAgICB9IGVsc2UgaWYgKGxlbmd0aCA+PSA2KSB7XHJcbiAgICAgICAgcmV0dXJuICczMyUnXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiAnMTAwJSdcclxuICB9XHJcblxyXG4gIG9uQ2FuY2VsKGxlZnQ6IGJvb2xlYW4pIHtcclxuICAgIGlmIChsZWZ0KSB7XHJcbiAgICAgIGNvbnN0IGN1cnJlbnQgPSB0aGlzLmN1cnJlbnRDYW5jZWxlZEluZGV4ID09PSBudWxsID8gdGhpcy5oaXN0b3JpY3MubGVuZ3RoIC0gMSA6IHRoaXMuY3VycmVudENhbmNlbGVkSW5kZXhcclxuICAgICAgaWYgKHRoaXMuaGlzdG9yaWNzLmxlbmd0aCA+IDAgJiYgY3VycmVudCA+PSAwKSB7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50Q2FuY2VsZWRJbmRleCA9IGN1cnJlbnQgLSAxO1xyXG4gICAgICAgIGNvbnN0IGxhc3RBY3Rpb24gPSB0aGlzLmhpc3Rvcmljc1tjdXJyZW50XVxyXG4gICAgICAgIGNvbnN0IHBhcmFtcyA9IGxhc3RBY3Rpb24ucGFyYW1zO1xyXG4gICAgICAgIGNvbnN0IGxlbmd0aCA9IHBhcmFtcy5sZW5ndGg7XHJcbiAgICAgICAgY29uc3QgZm9ybXMgPSBsZW5ndGggPT09IDEgPyB0aGlzLmNhdGVnb3JpZXMgOiBsZW5ndGggPT09IDIgPyB0aGlzLmNhdGVnb3JpZXNbcGFyYW1zWzBdXS5mb3Jtc1twYXJhbXNbMV1dLmZvcm1zIDogdGhpcy5jYXRlZ29yaWVzW3BhcmFtc1swXV0uZm9ybXNbcGFyYW1zWzFdXS5mb3Jtc1twYXJhbXNbMl1dLmZvcm1zO1xyXG4gICAgICAgIGlmIChsYXN0QWN0aW9uLm1ldGhvZCA9PT0gXCJzcGxpY2VcIikge1xyXG4gICAgICAgICAgaWYgKGxlbmd0aCA9PT0gMSAmJiBsYXN0QWN0aW9uLmxvY2F0aW9uID09PSAnY2F0ZWdvcnknKSB7XHJcbiAgICAgICAgICAgIGZvcm1zLnB1c2gobGFzdEFjdGlvbi5mb3JtKVxyXG4gICAgICAgICAgfSBlbHNlIGlmIChsZW5ndGggPT09IDEgJiYgbGFzdEFjdGlvbi5sb2NhdGlvbiA9PT0gJ2Zvcm1zJykge1xyXG4gICAgICAgICAgICBmb3Jtc1twYXJhbXNbMF1dLmZvcm1zLnB1c2gobGFzdEFjdGlvbi5mb3JtKVxyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZm9ybXMucHVzaChsYXN0QWN0aW9uLmZvcm0pXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAobGFzdEFjdGlvbi5sb2NhdGlvbiA9PT0gJ2NhdGVnb3J5Jykge1xyXG4gICAgICAgICAgICB0aGlzLm9uQWN0aXZlTWVudShmb3Jtc1tmb3Jtcy5sZW5ndGggLSAxXSwgZm9ybXMubGVuZ3RoIC0gMSk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLm9uRWRpdEJsb2NrKGZvcm1zW2Zvcm1zLmxlbmd0aCAtIDFdLCBsYXN0QWN0aW9uLnBhcmFtcylcclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgaWYgKGxlbmd0aCA9PT0gMSAmJiBsYXN0QWN0aW9uLmxvY2F0aW9uID09PSAnY2F0ZWdvcnknKSB7XHJcbiAgICAgICAgICAgIGZvcm1zLnNwbGljZShwYXJhbXNbbGVuZ3RoIC0gMV0sIDEpXHJcbiAgICAgICAgICB9IGVsc2UgaWYgKGxlbmd0aCA9PT0gMSAmJiBsYXN0QWN0aW9uLmxvY2F0aW9uID09PSAnZm9ybXMnKSB7XHJcbiAgICAgICAgICAgIGZvcm1zW3BhcmFtc1swXV0uZm9ybXMuc3BsaWNlKHBhcmFtc1tsZW5ndGggLSAxXSwgMSlcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGZvcm1zLnNwbGljZShwYXJhbXNbbGVuZ3RoIC0gMV0sIDEpXHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgdGhpcy5jdXJyZW50RWRpdEJsb2NrID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmICh0aGlzLmN1cnJlbnRDYW5jZWxlZEluZGV4ICE9PSBudWxsICYmIHRoaXMuaGlzdG9yaWNzLmxlbmd0aCA+IHRoaXMuY3VycmVudENhbmNlbGVkSW5kZXgpIHtcclxuICAgICAgICB0aGlzLmN1cnJlbnRDYW5jZWxlZEluZGV4ICs9IDE7XHJcbiAgICAgICAgY29uc3QgbGFzdEFjdGlvbiA9IHRoaXMuaGlzdG9yaWNzW3RoaXMuY3VycmVudENhbmNlbGVkSW5kZXhdXHJcbiAgICAgICAgY29uc3QgcGFyYW1zID0gbGFzdEFjdGlvbi5wYXJhbXM7XHJcbiAgICAgICAgY29uc3QgbGVuZ3RoID0gcGFyYW1zLmxlbmd0aDtcclxuICAgICAgICBjb25zdCBmb3JtcyA9IGxlbmd0aCA9PT0gMSA/IHRoaXMuY2F0ZWdvcmllcyA6IGxlbmd0aCA9PT0gMiA/IHRoaXMuY2F0ZWdvcmllc1twYXJhbXNbMF1dLmZvcm1zW3BhcmFtc1sxXV0uZm9ybXMgOiB0aGlzLmNhdGVnb3JpZXNbcGFyYW1zWzBdXS5mb3Jtc1twYXJhbXNbMV1dLmZvcm1zW3BhcmFtc1syXV0uZm9ybXM7XHJcblxyXG4gICAgICAgIGlmIChsYXN0QWN0aW9uLm1ldGhvZCA9PT0gXCJwdXNoXCIpIHtcclxuICAgICAgICAgIGlmIChsZW5ndGggPT09IDEgJiYgbGFzdEFjdGlvbi5sb2NhdGlvbiA9PT0gJ2NhdGVnb3J5Jykge1xyXG4gICAgICAgICAgICBmb3Jtcy5wdXNoKGxhc3RBY3Rpb24uZm9ybSlcclxuICAgICAgICAgIH0gZWxzZSBpZiAobGVuZ3RoID09PSAxICYmIGxhc3RBY3Rpb24ubG9jYXRpb24gPT09ICdmb3JtcycpIHtcclxuICAgICAgICAgICAgZm9ybXNbcGFyYW1zWzBdXS5mb3Jtcy5wdXNoKGxhc3RBY3Rpb24uZm9ybSlcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGZvcm1zLnB1c2gobGFzdEFjdGlvbi5mb3JtKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKGxhc3RBY3Rpb24ubG9jYXRpb24gPT09ICdjYXRlZ29yeScpIHtcclxuICAgICAgICAgICAgdGhpcy5vbkFjdGl2ZU1lbnUoZm9ybXNbZm9ybXMubGVuZ3RoIC0gMV0sIGZvcm1zLmxlbmd0aCAtIDEpO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5vbkVkaXRCbG9jayhmb3Jtc1tmb3Jtcy5sZW5ndGggLSAxXSwgbGFzdEFjdGlvbi5wYXJhbXMpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGlmIChsZW5ndGggPT09IDEgJiYgbGFzdEFjdGlvbi5sb2NhdGlvbiA9PT0gJ2NhdGVnb3J5Jykge1xyXG4gICAgICAgICAgICBmb3Jtcy5zcGxpY2UocGFyYW1zW2xlbmd0aCAtIDFdLCAxKVxyXG4gICAgICAgICAgfSBlbHNlIGlmIChsZW5ndGggPT09IDEgJiYgbGFzdEFjdGlvbi5sb2NhdGlvbiA9PT0gJ2Zvcm1zJykge1xyXG4gICAgICAgICAgICBmb3Jtc1twYXJhbXNbMF1dLmZvcm1zLnNwbGljZShwYXJhbXNbbGVuZ3RoIC0gMV0sIDEpXHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBmb3Jtcy5zcGxpY2UocGFyYW1zW2xlbmd0aCAtIDFdLCAxKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgdGhpcy5jdXJyZW50RWRpdEJsb2NrID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uQ2hlY2tWYWx1ZShldmVudDogYm9vbGVhbikge1xyXG4gICAgdGhpcy5pbnZhbGlkZVZhbHVlID0gZXZlbnQ7XHJcbiAgfVxyXG5cclxuICBvbkhpc3RvcmljcyhkYXRhKSB7XHJcbiAgICBpZiAodGhpcy5jdXJyZW50Q2FuY2VsZWRJbmRleCAhPT0gbnVsbCkge1xyXG4gICAgICB0aGlzLmhpc3RvcmljcyA9IFtdO1xyXG4gICAgICB0aGlzLmN1cnJlbnRDYW5jZWxlZEluZGV4ID0gbnVsbDtcclxuICAgIH1cclxuICAgIHRoaXMuaGlzdG9yaWNzLnB1c2goZGF0YSlcclxuICB9XHJcbn1cclxuXHJcblxyXG4iLCI8bWFpbj5cclxuICA8ZGl2IGNsYXNzPVwiaGVhZGVyLWNyZWF0ZS1wcm9maWxlXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyLWNyZWF0ZS1wcm9maWxlLXRvcFwiPlxyXG4gICAgICA8aDM+XHJcbiAgICAgICAgPHNwYW4+e3sgZm9ybS5nZXQoXCJOYW1lXCIpLnZhbHVlIH19PC9zcGFuPlxyXG4gICAgICAgIDxtYXQtaWNvbiAoY2xpY2spPVwib3BlbkRpYWxvZygpXCI+ZWRpdDwvbWF0LWljb24+XHJcbiAgICAgIDwvaDM+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJjcmVhdGUtcHJvZmlsZS1hY3Rpb25cIj5cclxuICAgICAgICA8YnV0dG9uIG1hdC1idXR0b24gY2xhc3M9XCJyZWdpc3Rlci1idXR0b25cIiB0eXBlPVwic3VibWl0XCIgKGNsaWNrKT1cIm9uU3VibWl0KGZhbHNlKVwiPlxyXG4gICAgICAgICAgPGxpYi1sb2FkaW5nLXBhZ2UgKm5nSWY9XCJsb2FkaW5nICYmICFpc1N1Ym1pdHRlZFwiPjwvbGliLWxvYWRpbmctcGFnZT57e2RyYWZ0TGFiZWx9fVxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDxidXR0b24gbWF0LWJ1dHRvbiBjbGFzcz1cInJlZ2lzdGVyLWJ1dHRvbiBsaXZlLWJ1dHRvblwiIHR5cGU9XCJzdWJtaXRcIiAoY2xpY2spPVwib25TdWJtaXQodHJ1ZSlcIj5cclxuICAgICAgICAgIDxsaWItbG9hZGluZy1wYWdlICpuZ0lmPVwibG9hZGluZyAmJiBpc1N1Ym1pdHRlZFwiPjwvbGliLWxvYWRpbmctcGFnZT5cclxuICAgICAgICAgIHt7bGl2ZUxhYmVsfX1cclxuICAgICAgICA8L2J1dHRvbj5cclxuXHJcbiAgICAgICAgPGJ1dHRvbiBbZGlzYWJsZWRdPVwiY3VycmVudENhbmNlbGVkSW5kZXggPCAwIHx8IGhpc3Rvcmljcy5sZW5ndGg9PT0wXCIgbWF0LWJ1dHRvblxyXG4gICAgICAgICAgY2xhc3M9XCJyZWdpc3Rlci1idXR0b24gbGl2ZS1idXR0b24gZm9yd2FyZFwiIHR5cGU9XCJzdWJtaXRcIiAoY2xpY2spPVwib25DYW5jZWwodHJ1ZSlcIj5cclxuICAgICAgICAgIDxtYXQtaWNvbj5yb3RhdGVfbGVmdDwvbWF0LWljb24+XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPGJ1dHRvbiBbZGlzYWJsZWRdPVwiY3VycmVudENhbmNlbGVkSW5kZXg9PT1oaXN0b3JpY3MubGVuZ3RoLTEgfHwgY3VycmVudENhbmNlbGVkSW5kZXg9PT1udWxsXCIgbWF0LWJ1dHRvblxyXG4gICAgICAgICAgY2xhc3M9XCJyZWdpc3Rlci1idXR0b24gbGl2ZS1idXR0b24gZm9yd2FyZFwiIHR5cGU9XCJzdWJtaXRcIiAoY2xpY2spPVwib25DYW5jZWwoZmFsc2UpXCI+XHJcbiAgICAgICAgICA8bWF0LWljb24+cm90YXRlX3JpZ2h0PC9tYXQtaWNvbj5cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJjcmVhdGUtcHJvZmlsZS1tZW51c1wiPlxyXG4gICAgICA8dWw+XHJcbiAgICAgICAgPGxpIGNsYXNzPVwibGktdGl0bGVcIiBbY2xhc3NdPVwiZWRpdEluZGV4ID09PSBpID8gJ2FjdGl2ZScgOiAnJ1wiICpuZ0Zvcj1cImxldCBjYXQgb2YgY2F0ZWdvcmllczsgbGV0IGkgPSBpbmRleFwiXHJcbiAgICAgICAgICAoY2xpY2spPVwic2Nyb2xsVG8oY2F0LCBpKVwiIFtpZF09XCJjYXQubmFtZSsneCdcIj5cclxuICAgICAgICAgIDwhLS0gKGNsaWNrKT1cIm9uQWN0aXZlTWVudShjYXQsIGksdHJ1ZSlcIiBbbmd4U2Nyb2xsVG9dPVwiJyMnICsgY2F0Lm5hbWVcIiBbaWRdPVwiY2F0Lm5hbWUrJ3gnXCI+IC0tPlxyXG4gICAgICAgICAge3sgY2F0Lm5hbWUgfX1cclxuICAgICAgICA8L2xpPlxyXG4gICAgICAgIDxsaT5cclxuICAgICAgICAgIDxidXR0b24gbWF0LW1pbmktZmFiIGNvbG9yPVwidHJhbnNwYXJlbnRcIiAoY2xpY2spPVwib25BZGROZXdDYXRlZ29yeSgkZXZlbnQpXCI+XHJcbiAgICAgICAgICAgIDxtYXQtaWNvbj5hZGQ8L21hdC1pY29uPlxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgPC91bD5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gIDxmb3JtIFtmb3JtR3JvdXBdPVwiZm9ybVwiPlxyXG4gICAgPGRpdiBjbGFzcz1cImNhdGVnb3J5XCIgY2RrRHJvcExpc3RHcm91cD5cclxuICAgICAgPGRpdiBjbGFzcz1cImZpZWxkc1wiPlxyXG4gICAgICAgIDxkaXYgY2RrRHJvcExpc3QgKGNka0Ryb3BMaXN0RHJvcHBlZCk9XCJkcm9wKCRldmVudClcIiBbY2RrRHJvcExpc3REYXRhXT1cImNhdGVnb3JpZXNcIlxyXG4gICAgICAgICAgY2xhc3M9XCJmaWVsZHMtaW5uZXIgZXhhbXBsZS1saXN0IG10LTEwXCIgaWQ9XCJjYXRlZ29yaWVzLWlkXCIgKHNjcm9sbCk9XCJvblNjcm9sbCgkZXZlbnQpXCI+XHJcbiAgICAgICAgICA8c2VjdGlvbiBjbGFzcz1cImNhdGVnb3J5LWl0ZW0gc2VjdGlvbi1pdGVtXCIgKm5nRm9yPVwibGV0IGNhdGVnb3J5IG9mIGNhdGVnb3JpZXM7IGxldCBpID0gaW5kZXhcIiBjZGtEcmFnXHJcbiAgICAgICAgICAgIFtpZF09XCJjYXRlZ29yeS5uYW1lXCIgW3N0eWxlLnBhZGRpbmdCb3R0b21dPVwiY2F0ZWdvcnkuZXhwYW5kTW9yZSA/ICc1MHB4JyA6ICcxMHB4J1wiXHJcbiAgICAgICAgICAgIFtjbGFzc109XCJlZGl0SW5kZXggPT09IGkgPyAnYWN0aXZlJyA6ICcnXCIgKGNsaWNrKT1cInNjcm9sbFRvKGNhdGVnb3J5LCBpKVwiPlxyXG4gICAgICAgICAgICA8IS0tIFtjbGFzc109XCJlZGl0SW5kZXggPT09IGkgPyAnYWN0aXZlJyA6ICcnXCIgW25neFNjcm9sbFRvXT1cIicjJyArIGNhdGVnb3J5Lm5hbWVcIj4gLS0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsZWZ0LWFjdGlvbiBtb3ZlLWljb25zXCIgY2RrRHJhZ0hhbmRsZT5cclxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwidHJhbnNwYXJlbnQtYnV0dG9uXCIgbWF0LXJhaXNlZC1idXR0b25cclxuICAgICAgICAgICAgICAgIChjbGljayk9XCIkZXZlbnQucHJldmVudERlZmF1bHQoKTskZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcIj5cclxuICAgICAgICAgICAgICAgIDxtYXQtaWNvbiBjbGFzcz1cImRyYWctaWNvblwiPmRyYWdfaW5kaWNhdG9yPC9tYXQtaWNvbj5cclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpZWxkLWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgIDwhLS0gPGRpdiBjbGFzcz1cImZpZWxkLWl0ZW1cIiAoY2xpY2spPVwiIG9uRXhwZW5kTW9yZSh7IGV2ZW50OiAkZXZlbnQsIGZpZWxkOiBjYXRlZ29yeSB9LCBpKVwiPiAtLT5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiZnVsbC13aWR0aCBpbnB1dC1jYXRlZ29yeS1uYW1lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge3sgY2F0ZWdvcnkubmFtZSB9fVxyXG4gICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwic3ViLWNhdGVnb3J5LW5hbWVcIj5cclxuICAgICAgICAgICAgICAgICAgICB7e2xvY2FsZT8uQ0FURUdPUllfU1VCVElUTEV9fSB7eyBjYXROYW1lU3RhcnQoY2F0ZWdvcnkubmFtZSkgPyBcImwnXCIgK1xyXG4gICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5Lm5hbWUgOiBjYXRlZ29yeS5uYW1lIH19XHJcbiAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBtYXQtbWluaS1mYWIgY29sb3I9XCJwcmltYXJ5XCIgY2xhc3M9XCJleHBhbmQtYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cIiRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtvbkV4cGVuZE1vcmUoeyBldmVudDogJGV2ZW50LCBmaWVsZDogY2F0ZWdvcnkgfSwgaSlcIj5cclxuICAgICAgICAgICAgICAgICAgPG1hdC1pY29uICpuZ0lmPVwiIWNhdGVnb3J5LmV4cGFuZE1vcmVcIj5jaGV2cm9uX3JpZ2h0PC9tYXQtaWNvbj5cclxuICAgICAgICAgICAgICAgICAgPG1hdC1pY29uICpuZ0lmPVwiY2F0ZWdvcnkuZXhwYW5kTW9yZVwiPmV4cGFuZF9tb3JlPC9tYXQtaWNvbj5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjaGlsZC1saXN0XCIgKm5nSWY9XCJjYXRlZ29yeS5mb3Jtc1wiIGNka0Ryb3BMaXN0R3JvdXA+XHJcbiAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiY2F0ZWdvcnkuZXhwYW5kTW9yZVwiPlxyXG4gICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBmaWVsZCBvZiBjYXRlZ29yeS5mb3JtczsgbGV0IGogPSBpbmRleFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZC1ib3hcIiBbaWRdPVwiZmllbGQua2V5XCIgY2RrRHJvcExpc3QgY2RrRHJvcExpc3RPcmllbnRhdGlvbj1cImhvcml6b250YWwnXCJcclxuICAgICAgICAgICAgICAgICAgICAgIChjZGtEcm9wTGlzdERyb3BwZWQpPVwiZHJvcEZpZWxkKCRldmVudClcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgW2Nka0Ryb3BMaXN0RGF0YV09XCJ7IGZpZWxkOiBmaWVsZCwgaW5kZXg6IGosIGNhdGVnb3J5OiBjYXRlZ29yeSB9XCJcclxuICAgICAgICAgICAgICAgICAgICAgIFtzdHlsZS53aWR0aF09XCJmaWVsZC5mb3JtcyAmJiBmaWVsZC5mb3Jtcy5sZW5ndGg+MCA/ICcxMDAlJyA6IGZpZWxkV2lkdGgoZmllbGQudHlwZSxjYXRlZ29yeS5mb3Jtcy5sZW5ndGgsailcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2RrRHJhZyBjbGFzcz1cImRuZC1ib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRuZC1wbGFjZWhvbGRlclwiICpjZGtEcmFnUGxhY2Vob2xkZXI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZHMtY29udGVudFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW2NsYXNzXT1cImZpZWxkLmZvcm1zICYmIGZpZWxkLmZvcm1zLmxlbmd0aD4wID8gJ3N1Yi1jYXRlZ29yeS1mb3JtcycgOicnXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJ1dHRvbi1hY3Rpb25cIiAqbmdJZj1cImZpZWxkLmZvcm1zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwidHJhbnNwYXJlbnQtYnV0dG9uXCIgbWF0LXJhaXNlZC1idXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cIiRldmVudC5zdG9wUHJvcGFnYXRpb24oKTskZXZlbnQucHJldmVudERlZmF1bHQoKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bWF0LWljb24gY2xhc3M9XCJkcmFnLWljb25cIj5kcmFnX2luZGljYXRvcjwvbWF0LWljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmllbGRzLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInN1Yi1oZWFkZXJcIiAqbmdJZj1cImZpZWxkLmZvcm1zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZC1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiZnVsbC13aWR0aCBpbnB1dC1jYXRlZ29yeS1uYW1lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IGZpZWxkLmxhYmVsIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInN1Yi1jYXRlZ29yeS1uYW1lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7bG9jYWxlPy5DQVRFR09SWV9TVUJUSVRMRX19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IGNhdE5hbWVTdGFydChmaWVsZC5sYWJlbCkgPyBcImwnXCIgKyBmaWVsZC5sYWJlbCA6IGZpZWxkLmxhYmVsIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInRyYW5zcGFyZW50LWJ1dHRvbiBzZXR0aW5nXCIgbWF0LXJhaXNlZC1idXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjbGljayk9XCIkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7b25FZGl0QmxvY2soZmllbGQsIGksIGopXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bWF0LWljb24gY2xhc3M9XCJzZXR0aW5nLWljb25cIj5zZXR0aW5nczwvbWF0LWljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImV4cGFuZC1idXR0b25cIiBbZGlzYWJsZWRdPVwiIShmaWVsZC5mb3JtcyAmJiBmaWVsZC5mb3Jtcy5sZW5ndGggPiAwKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbc3R5bGUub3BhY2l0eV09XCJmaWVsZC5mb3JtcyAmJiBmaWVsZC5mb3Jtcy5sZW5ndGggPiAwID8gMSA6IDBcIiBtYXQtbWluaS1mYWJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwiJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO29uRXhwZW5kTW9yZSh7IGV2ZW50OiAkZXZlbnQsIGZpZWxkOiBmaWVsZCB9LCBpLCBqKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG1hdC1pY29uICpuZ0lmPVwiIWZpZWxkLmV4cGFuZE1vcmVcIj5leHBhbmRfbGVzcyA8L21hdC1pY29uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG1hdC1pY29uICpuZ0lmPVwiZmllbGQuZXhwYW5kTW9yZVwiPmV4cGFuZF9tb3JlIDwvbWF0LWljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGliLXN1Yi1jYXRlZ29yeSBbZmllbGRdPVwiZmllbGRcIiBbbGVuZ3RoXT1cImNhdGVnb3J5Py5mb3Jtcz8ubGVuZ3RoXCIgW2ldPVwiaVwiIFtqXT1cImpcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbYmxpbmtdPVwiY2hlY2tCbGluayhqLDEpPT09bmV3RmllbGRJbmRleFwiIChvbkNoZWNrVmFsdWUpPVwib25DaGVja1ZhbHVlKCRldmVudClcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAob25BZGRLZXl3b3JkRnJvbUlucHV0KT1cImFkZEtleXdvcmRGcm9tSW5wdXQoJGV2ZW50LmV2ZW50LCAkZXZlbnQucHJldiwgaSwgailcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAob25LZXlQcmVzcyk9XCJvbktleVByZXNzKCRldmVudC5ldmVudCwgaSwgailcIiAob25BZGROZXdGaWVsZCk9XCJvbkFkZE5ld0ZpZWxkKGkpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKG9uUmVtb3ZlRmllbGQpPVwib25SZW1vdmVGaWVsZChpLCBqKVwiIChvbkNoYW5nZVR5cGUpPVwib25DaGFuZ2VUeXBlKGZpZWxkLnR5cGUsIGksIGopXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKG9uUmVtb3ZlS2V5d29yZCk9XCJyZW1vdmVLZXl3b3JkKCRldmVudC5ldmVudCwgaSwgailcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAob25BZGROZXdTdWJMZXZlbEZpZWxkKT1cIm9uQWRkTmV3U3ViTGV2ZWxGaWVsZChpLCBqKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChvbkV4cGVuZE1vcmUpPVwib25FeHBlbmRNb3JlKCRldmVudCwgaSwgailcIiAob25DaGFuZ2VMYWJlbCk9XCJvbkNoYW5nZUxhYmVsKCRldmVudCwgaSwgailcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAob25DaGVja2VkQ2hpcCk9XCJvbkNoZWNrZWRDaGlwKCRldmVudCwgaSwgailcIiAob25Ecm9wKT1cImRyb3AoJGV2ZW50KVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChvbkNoZWNrZWREZWZhdWx0KT1cIm9uQ2hlY2tlZERlZmF1bHQoJGV2ZW50LCBpLCBqKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChvbkVkaXRCbG9jayk9XCJvbkVkaXRCbG9jayhmaWVsZCwgaSwgailcIiBbY29uZGl0aW9uRGF0YV09XCJjb25kaXRpb25EYXRhXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgKm5nSWY9XCJmaWVsZC5leHBhbmRNb3JlXCIgY2xhc3M9XCJjaGlsZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgI2NoaWxkTGlzdD1cImNka0Ryb3BMaXN0XCIgY2xhc3M9XCJjaGlsZC1jb250ZW50XCIgKm5nSWY9XCJmaWVsZC5mb3Jtc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbY2RrRHJvcExpc3REYXRhXT1cImZpZWxkLmZvcm1zXCIgY2RrRHJvcExpc3QgKGNka0Ryb3BMaXN0RHJvcHBlZCk9XCJkcm9wKCRldmVudClcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJcIiBzdHlsZT1cIm1hcmdpbi1ib3R0b206IDIwcHhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqbmdGb3I9XCJsZXQgY2hpbGQgb2YgZmllbGQuZm9ybXM7IGxldCBrID0gaW5kZXhcIiBbaWRdPVwiY2hpbGQua2V5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3N0eWxlLndpZHRoXT1cImNoaWxkLmZvcm1zICYmIGNoaWxkLmZvcm1zLmxlbmd0aD4wID8gJzEwMCUnIDogZmllbGRXaWR0aChjaGlsZC50eXBlLGZpZWxkLmZvcm1zLmxlbmd0aCxrKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNka0RyYWc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpZWxkcy1jb250ZW50XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtjbGFzc109XCJjaGlsZC5mb3JtcyAmJiBjaGlsZC5mb3Jtcy5sZW5ndGg+MCA/ICdzdWItY2F0ZWdvcnktZm9ybXMnIDonJ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJ1dHRvbi1hY3Rpb24gY2hpbGQtMi1iYWNrZ3JvdW5kXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJjaGlsZC5mb3JtcyAmJiBjaGlsZC5mb3Jtcy5sZW5ndGg+MFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwidHJhbnNwYXJlbnQtYnV0dG9uXCIgbWF0LXJhaXNlZC1idXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwiJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpOyRldmVudC5wcmV2ZW50RGVmYXVsdCgpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG1hdC1pY29uIGNsYXNzPVwiZHJhZy1pY29uXCI+IGRyYWdfaW5kaWNhdG9yPC9tYXQtaWNvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZHMtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdWItaGVhZGVyXCIgKm5nSWY9XCJjaGlsZC5mb3JtcyAmJiBjaGlsZC5mb3Jtcy5sZW5ndGg+MFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZC1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJmdWxsLXdpZHRoIGlucHV0LWNhdGVnb3J5LW5hbWVcIiB0eXBlPVwidGV4dFwiIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3JlYWRvbmx5XT1cImNhdGVnb3JpZXMubGVuZ3RoIDwgNCB8fCAhY2F0ZWdvcnkuZWRpdGFibGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtyZWFkb25seV09XCIhY2F0ZWdvcnkuZWRpdGFibGVcIiBbKG5nTW9kZWwpXT1cImNoaWxkLmxhYmVsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbbmdNb2RlbE9wdGlvbnNdPVwieyBzdGFuZGFsb25lOiB0cnVlIH1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2Fpc2lyIGxlIG5vbSBkZSBsYSBzb3VzIGNhdMOpZ29yaWVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInN1Yi1jYXRlZ29yeS1uYW1lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3tsb2NhbGU/LkNBVEVHT1JZX1NVQlRJVExFfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBjYXROYW1lU3RhcnQoY2hpbGQubGFiZWwpID8gXCJsJ1wiICsgY2hpbGQubGFiZWwgOiBjaGlsZC5sYWJlbCB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJ0cmFuc3BhcmVudC1idXR0b24gc2V0dGluZ1wiIG1hdC1yYWlzZWQtYnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjbGljayk9XCIkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7b25FZGl0QmxvY2soY2hpbGQsIGksIGosIGspXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxtYXQtaWNvbiBjbGFzcz1cInNldHRpbmctaWNvblwiPnNldHRpbmdzPC9tYXQtaWNvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImV4cGFuZC1idXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbZGlzYWJsZWRdPVwiIShjaGlsZC5mb3JtcyAmJiBjaGlsZC5mb3Jtcy5sZW5ndGggPiAwKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtzdHlsZS5vcGFjaXR5XT1cImNoaWxkLmZvcm1zICYmIGNoaWxkLmZvcm1zLmxlbmd0aCA+IDAgPyAxIDogMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hdC1taW5pLWZhYiBjb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwiJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO29uRXhwZW5kTW9yZSh7IGV2ZW50OiAkZXZlbnQsIGZpZWxkOiBjaGlsZCB9LCBpLCBqLCBrKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bWF0LWljb24gKm5nSWY9XCIhY2hpbGQuZXhwYW5kTW9yZVwiPiBleHBhbmRfbGVzcyA8L21hdC1pY29uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bWF0LWljb24gKm5nSWY9XCJjaGlsZC5leHBhbmRNb3JlXCI+IGV4cGFuZF9tb3JlIDwvbWF0LWljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaWItc3ViLWNhdGVnb3J5IFtmaWVsZF09XCJjaGlsZFwiIFtsZW5ndGhdPVwiZmllbGQ/LmZvcm1zPy5sZW5ndGhcIiBbaV09XCJqXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbYmxpbmtdPVwiY2hlY2tCbGluayhrLDIpPT09bmV3RmllbGRJbmRleFwiIFtqXT1cImtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChvbkNoZWNrVmFsdWUpPVwib25DaGVja1ZhbHVlKCRldmVudClcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChvbkFkZEtleXdvcmRGcm9tSW5wdXQpPVwiYWRkS2V5d29yZEZyb21JbnB1dCgkZXZlbnQuZXZlbnQsICRldmVudC5wcmV2LCBpLCBqLCBrKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKG9uS2V5UHJlc3MpPVwib25LZXlQcmVzcygkZXZlbnQuZXZlbnQsIGksIGosIGspXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAob25BZGROZXdGaWVsZCk9XCJvbkFkZE5ld0ZpZWxkKGksIGopXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAob25SZW1vdmVGaWVsZCk9XCJvblJlbW92ZUZpZWxkKGksIGosIGspXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAob25DaGFuZ2VUeXBlKT1cIm9uQ2hhbmdlVHlwZShjaGlsZC50eXBlLCBpLCBqLCBrKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKG9uUmVtb3ZlS2V5d29yZCk9XCJyZW1vdmVLZXl3b3JkKCRldmVudC5ldmVudCwgaSwgaiwgaylcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChvbkFkZE5ld1N1YkxldmVsRmllbGQpPVwib25BZGROZXdTdWJMZXZlbEZpZWxkKGksIGosIGspXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAob25FeHBlbmRNb3JlKT1cIm9uRXhwZW5kTW9yZSgkZXZlbnQsIGksIGosIGspXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAob25DaGFuZ2VMYWJlbCk9XCJvbkNoYW5nZUxhYmVsKCRldmVudCwgaSwgaiwgaylcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChvbkNoZWNrZWRDaGlwKT1cIm9uQ2hlY2tlZENoaXAoJGV2ZW50LCBpLCBqLCBrKVwiIChvbkRyb3ApPVwiZHJvcCgkZXZlbnQpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAob25DaGVja2VkRGVmYXVsdCk9XCJvbkNoZWNrZWREZWZhdWx0KCRldmVudCwgaSwgaiwgaylcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtjb25kaXRpb25EYXRhXT1cImNvbmRpdGlvbkRhdGFcIiAob25FZGl0QmxvY2spPVwib25FZGl0QmxvY2soY2hpbGQsIGksIGosIGspXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiAqbmdJZj1cImNoaWxkLmV4cGFuZE1vcmVcIiBjbGFzcz1cImNoaWxkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2hpbGQtY29udGVudFwiICNjaGlsZExpc3Q9XCJjZGtEcm9wTGlzdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICpuZ0lmPVwiY2hpbGQuZm9ybXMgJiYgY2hpbGQuZm9ybXMubGVuZ3RoPjBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbY2RrRHJvcExpc3REYXRhXT1cImNoaWxkLmZvcm1zXCIgY2RrRHJvcExpc3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGNka0Ryb3BMaXN0RHJvcHBlZCk9XCJkcm9wKCRldmVudClcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIlwiICpuZ0Zvcj1cImxldCBjMiBvZiBjaGlsZC5mb3JtczsgbGV0IGwgPSBpbmRleFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2lkXT1cImMyLmtleVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3N0eWxlLndpZHRoXT1cImMyLmZvcm1zICYmIGMyLmZvcm1zLmxlbmd0aD4wID8gJzEwMCUnIDogZmllbGRXaWR0aChjMi50eXBlLGNoaWxkLmZvcm1zLmxlbmd0aCxsKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2RrRHJhZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZHMtY29udGVudFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtjbGFzc109XCJjMi5mb3JtcyAmJiBjMi5mb3Jtcy5sZW5ndGg+MCA/ICdzdWItY2F0ZWdvcnktZm9ybXMnIDonJ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYnV0dG9uLWFjdGlvbiBjaGlsZC0zLWJhY2tncm91bmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICpuZ0lmPVwiYzIuZm9ybXMgJiYgYzIuZm9ybXMubGVuZ3RoPjBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwidHJhbnNwYXJlbnQtYnV0dG9uXCIgbWF0LXJhaXNlZC1idXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjbGljayk9XCIkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxtYXQtaWNvbiBjbGFzcz1cImRyYWctaWNvblwiPiBkcmFnX2luZGljYXRvciA8L21hdC1pY29uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpZWxkcy1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGliLXN1Yi1jYXRlZ29yeSBbZmllbGRdPVwiYzJcIiBbbGVuZ3RoXT1cImNoaWxkPy5mb3Jtcz8ubGVuZ3RoXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtibGlua109XCJjaGVja0JsaW5rKGwsMyk9PT1uZXdGaWVsZEluZGV4XCIgW2ldPVwia1wiIFtqXT1cImxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKG9uQ2hlY2tWYWx1ZSk9XCJvbkNoZWNrVmFsdWUoJGV2ZW50KVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAob25BZGRLZXl3b3JkRnJvbUlucHV0KT1cImFkZEtleXdvcmRGcm9tSW5wdXQoJGV2ZW50LmV2ZW50LCAkZXZlbnQucHJldiwgaSwgaiwgaywgbClcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKG9uS2V5UHJlc3MpPVwib25LZXlQcmVzcygkZXZlbnQuZXZlbnQsIGksIGosIGssIGwpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChvbkFkZE5ld0ZpZWxkKT1cIm9uQWRkTmV3RmllbGQoaSwgaiwgaylcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKG9uUmVtb3ZlRmllbGQpPVwib25SZW1vdmVGaWVsZChpLCBqLCBrLCBsKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAob25DaGFuZ2VUeXBlKT1cIm9uQ2hhbmdlVHlwZShjMi50eXBlLCBpLCBqLCBrLCBsKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAob25SZW1vdmVLZXl3b3JkKT1cInJlbW92ZUtleXdvcmQoJGV2ZW50LmV2ZW50LCBpLCBqLCBrLCBsKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAob25BZGROZXdTdWJMZXZlbEZpZWxkKT1cIm9uQWRkTmV3U3ViTGV2ZWxGaWVsZChpLCBqLCBrLCBsKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAob25FeHBlbmRNb3JlKT1cIm9uRXhwZW5kTW9yZSgkZXZlbnQsIGksIGosIGssIGwpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChvbkNoYW5nZUxhYmVsKT1cIm9uQ2hhbmdlTGFiZWwoJGV2ZW50LCBpLCBqLCBrLCBsKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAob25DaGVja2VkQ2hpcCk9XCJvbkNoZWNrZWRDaGlwKCRldmVudCwgaSwgaiwgaywgbClcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKG9uRHJvcCk9XCJkcm9wKCRldmVudClcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKG9uQ2hlY2tlZERlZmF1bHQpPVwib25DaGVja2VkRGVmYXVsdCgkZXZlbnQsIGksIGosIGssIGwpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChvbkVkaXRCbG9jayk9XCJvbkVkaXRCbG9jayhjMiwgaSwgaiwgaywgbClcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2NvbmRpdGlvbkRhdGFdPVwiY29uZGl0aW9uRGF0YVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNoaWxkXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saWItc3ViLWNhdGVnb3J5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhZGQtYnV0dG9uLXN1Yi1jYXRlZ29yeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqbmdJZj1cImNoaWxkPy5mb3Jtcz8ubGVuZ3RoIC0gMSA9PT0gbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBzdHlsZT1cIm1hcmdpbjogMTBweCBhdXRvXCIgbWF0LXJhaXNlZC1idXR0b24gY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cIiRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtvbkFkZE5ld0ZpZWxkKGksIGosIGspXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPnt7bG9jYWxlPy5BRERfRklFTER9fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG1hdC1pY29uPiBhZGQgPC9tYXQtaWNvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpYi1zdWItY2F0ZWdvcnk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhZGQtYnV0dG9uLXN1Yi1jYXRlZ29yeVwiICpuZ0lmPVwiZmllbGQ/LmZvcm1zPy5sZW5ndGggLSAxID09PSBrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBzdHlsZT1cIm1hcmdpbjogMTBweCBhdXRvXCIgbWF0LXJhaXNlZC1idXR0b24gY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjbGljayk9XCIkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7b25BZGROZXdGaWVsZChpLCBqKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3tsb2NhbGU/LkFERF9GSUVMRH19PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG1hdC1pY29uPmFkZDwvbWF0LWljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saWItc3ViLWNhdGVnb3J5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFkZC1idXR0b24tY29udGFpbmVyIGFkZC1idXR0b24tc3ViLWNhdGVnb3J5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJjYXRlZ29yeT8uZm9ybXM/Lmxlbmd0aCAtIDEgPT09IGpcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBzdHlsZT1cIm1hcmdpbjogMTBweCBhdXRvOyBwYWRkaW5nOjEwcHggMFwiIGNsYXNzPVwiYWRkLWJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW2Rpc2FibGVkXT1cImNhdGVnb3J5Py5mb3Jtcz8ubGVuZ3RoIC0gMSAhPT0galwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW3N0eWxlLm9wYWNpdHldPVwiY2F0ZWdvcnk/LmZvcm1zPy5sZW5ndGggLSAxID09PSBqID8gMSA6IDBcIiBtYXQtcmFpc2VkLWJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIChjbGljayk9XCIkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7b25BZGROZXdGaWVsZChpKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPnt7bG9jYWxlPy5BRERfRklFTER9fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bWF0LWljb24+YWRkPC9tYXQtaWNvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L3NlY3Rpb24+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImFkZC1idXR0b24tY29udGFpbmVyIGFkZC1jYXRlZ29yeS1idXR0b24gYWRkLXN0ZXBcIj5cclxuICAgICAgICAgICAgPGJ1dHRvbiAoY2xpY2spPVwib25BZGROZXdDYXRlZ29yeSgkZXZlbnQpXCI+XHJcbiAgICAgICAgICAgICAge3tsb2NhbGU/LkFERF9TVEVQfX1cclxuICAgICAgICAgICAgICA8bWF0LWljb24+YWRkPC9tYXQtaWNvbj5cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxzZWN0aW9uIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnRcIj5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT1cImhlaWdodDogNDAwcHg7XCI+PC9kaXY+XHJcbiAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiZmllbGQtcHJvcGVydHlcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwicHJvcGVydHktY29udGVudFwiICpuZ0lmPVwiaXNCbG9jayAmJiBjdXJyZW50RWRpdEJsb2NrXCI+XHJcbiAgICAgICAgICA8aDM+e3tsb2NhbGU/LlNFVFRJTkdfT0ZfQkxPQ0t9fSB7eyBjdXJyZW50RWRpdEJsb2NrLmxhYmVsIH19PC9oMz5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcm9wZXJ0eS1jb250ZW50LWlubmVyXCIgc3R5bGU9XCJ3aWR0aDogMTAwJTtcIj5cclxuICAgICAgICAgICAgPG1hdC1mb3JtLWZpZWxkIGNsYXNzPVwiZm9ybS1maWVsZCBtYXQtc2VsZWN0IGZ1bGwtd2lkdGhcIiBzdHlsZT1cImN1cnNvcjogcG9pbnRlclwiIGFwcGVhcmFuY2U9XCJvdXRsaW5lXCI+XHJcbiAgICAgICAgICAgICAgPG1hdC1sYWJlbD57e2xvY2FsZT8uVFlQRV9PRl9CTE9DS319PC9tYXQtbGFiZWw+XHJcbiAgICAgICAgICAgICAgPG1hdC1zZWxlY3QgKGNsaWNrKT1cIm9uT3BlblR5cGVEaWFsb2coY3VycmVudEVkaXRCbG9jaylcIiBkaXNhYmxlZD1cInRydWVcIiByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJjdXJyZW50RWRpdEJsb2NrLnR5cGVcIiAobmdNb2RlbENoYW5nZSk9XCJvbkNoYW5nZVR5cGVCbG9jayhjdXJyZW50RWRpdEJsb2NrKVwiXHJcbiAgICAgICAgICAgICAgICBbbmdNb2RlbE9wdGlvbnNdPVwieyBzdGFuZGFsb25lOiB0cnVlIH1cIiBjbGFzcz1cInNlbGVjdC10eXBlLWNsYXNzXCI+XHJcbiAgICAgICAgICAgICAgICA8bWF0LW9wdGlvbiB2YWx1ZT1cInRleHRcIj5UZXh0KDgwKTwvbWF0LW9wdGlvbj5cclxuICAgICAgICAgICAgICAgIDxtYXQtb3B0aW9uIHZhbHVlPVwidGV4dGFyZWFcIj5UZXh0KDgwKyk8L21hdC1vcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8bWF0LW9wdGlvbiB2YWx1ZT1cInJhZGlvXCI+UmFkaW88L21hdC1vcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8bWF0LW9wdGlvbiB2YWx1ZT1cInNlbGVjdFwiPlNlbGVjdG9yPC9tYXQtb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgPG1hdC1vcHRpb24gdmFsdWU9XCJ0b2dnbGVcIj5Ub2dnbGU8L21hdC1vcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8bWF0LW9wdGlvbiB2YWx1ZT1cImNoZWNrYm94XCI+Q2hlY2tib3g8L21hdC1vcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8bWF0LW9wdGlvbiB2YWx1ZT1cImNoZWNrYm94X211bHRpcGxlXCI+Q2hlY2tib3ggbXVsdGlwbGU8L21hdC1vcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8bWF0LW9wdGlvbiB2YWx1ZT1cImVtYWlsXCI+RW1haWw8L21hdC1vcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8bWF0LW9wdGlvbiB2YWx1ZT1cInBhc3N3b3JkXCI+UGFzc3dvcmQ8L21hdC1vcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8bWF0LW9wdGlvbiB2YWx1ZT1cImRhdGVcIj5EYXRlPC9tYXQtb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgPG1hdC1vcHRpb24gdmFsdWU9XCJ0ZWxcIj5QaG9uZTwvbWF0LW9wdGlvbj5cclxuICAgICAgICAgICAgICAgIDxtYXQtb3B0aW9uIHZhbHVlPVwibm9uZVwiPk5vbmU8L21hdC1vcHRpb24+XHJcbiAgICAgICAgICAgICAgPC9tYXQtc2VsZWN0PlxyXG4gICAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiY3VycmVudEVkaXRCbG9jay50eXBlIT09J25vbmUnXCI+XHJcbiAgICAgICAgICAgICAgPG1hdC1mb3JtLWZpZWxkIGNsYXNzPVwiZm9ybS1maWVsZCBmdWxsLXdpZHRoXCIgYXBwZWFyYW5jZT1cIm91dGxpbmVcIj5cclxuICAgICAgICAgICAgICAgIDxtYXQtbGFiZWw+e3tsb2NhbGU/Lk5BTUVfTEFCRUx9fTwvbWF0LWxhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgWyhuZ01vZGVsKV09XCJjdXJyZW50RWRpdEJsb2NrLmxhYmVsXCIgW2Rpc2FibGVkXT1cIiFjdXJyZW50RWRpdEJsb2NrLmVkaXRhYmxlXCJcclxuICAgICAgICAgICAgICAgICAgKG5nTW9kZWxDaGFuZ2UpPVwib25DaGFuZ2VLZXkoY3VycmVudEVkaXRCbG9jaylcIiBbbmdNb2RlbE9wdGlvbnNdPVwieyBzdGFuZGFsb25lOiB0cnVlIH1cIiBtYXRJbnB1dFxyXG4gICAgICAgICAgICAgICAgICByZXF1aXJlZCBwbGFjZWhvbGRlcj1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgICAgICAgICAgICA8bmctY29udGFpbmVyIFtuZ1N3aXRjaF09XCJjdXJyZW50RWRpdEJsb2NrLnR5cGVcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgKm5nU3dpdGNoQ2FzZT1cIid0b2dnbGUnXCIgY2xhc3M9XCJmbGV4LWF1dG9cIlxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT1cImRpc3BsYXk6IGZsZXg7YWxpZ24taXRlbXM6IGZsZXgtZW5kO21hcmdpbjogMTBweCAwO1wiPlxyXG4gICAgICAgICAgICAgICAgICA8bWF0LXNsaWRlLXRvZ2dsZSBjbGFzcz1cImZvcm0tZmllbGRcIiBjb2xvcj1cIiM2RkU4RDdcIiBbKG5nTW9kZWwpXT1cImN1cnJlbnRFZGl0QmxvY2suZGVmYXVsdFZhbHVlXCJcclxuICAgICAgICAgICAgICAgICAgICBbbmdNb2RlbE9wdGlvbnNdPVwieyBzdGFuZGFsb25lOiB0cnVlIH1cIj5cclxuICAgICAgICAgICAgICAgICAgPC9tYXQtc2xpZGUtdG9nZ2xlPlxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT1cIm1hcmdpbi1sZWZ0OiAxMHB4O1wiPnt7bG9jYWxlPy5ERUZBVUxUX1ZBTFVFfX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgKm5nU3dpdGNoQ2FzZT1cIidjaGVja2JveCdcIiBjbGFzcz1cImZsZXgtYXV0b1wiPlxyXG4gICAgICAgICAgICAgICAgICA8bWF0LWNoZWNrYm94IGNsYXNzPVwiZm9ybS1maWVsZFwiIFsobmdNb2RlbCldPVwiY3VycmVudEVkaXRCbG9jay52YWx1ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgW25nTW9kZWxPcHRpb25zXT1cInsgc3RhbmRhbG9uZTogdHJ1ZSB9XCI+XHJcbiAgICAgICAgICAgICAgICAgICAge3tsb2NhbGU/LkRFRkFVTFRfQ0hFQ0tFRH19XHJcbiAgICAgICAgICAgICAgICAgIDwvbWF0LWNoZWNrYm94PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8bWF0LWZvcm0tZmllbGQgKm5nU3dpdGNoQ2FzZT1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFsnc2VsZWN0JywgJ3JhZGlvJywgJ2NoZWNrYm94X211bHRpcGxlJ10uaW5jbHVkZXMoY3VycmVudEVkaXRCbG9jay50eXBlKSA/IGN1cnJlbnRFZGl0QmxvY2sudHlwZSA6ICFjdXJyZW50RWRpdEJsb2NrLnR5cGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgY2xhc3M9XCJmbGV4LWF1dG8gZnVsbC13aWR0aFwiIGFwcGVhcmFuY2U9XCJvdXRsaW5lXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxtYXQtbGFiZWw+IHt7bG9jYWxlPy5ERUZBVUxUX1ZBTFVFfX0gPC9tYXQtbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgIDxtYXQtY2hpcC1saXN0ICNjaGlsZExpc3Q9XCJjZGtEcm9wTGlzdFwiIFtjZGtEcm9wTGlzdERhdGFdPVwiY3VycmVudEVkaXRCbG9jay5kZWZhdWx0VmFsdWVcIiBjZGtEcm9wTGlzdFxyXG4gICAgICAgICAgICAgICAgICAgIChjZGtEcm9wTGlzdERyb3BwZWQpPVwiZHJvcCgkZXZlbnQpXCIgI2NoaXBMaXN0IGFyaWEtbGFiZWw9XCJWaWRlbyBrZXl3b3JkczsgbGV0IGluZGV4PWluZGV4XCIgbXVsdGlwbGVcclxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RhYmxlPlxyXG4gICAgICAgICAgICAgICAgICAgIDxtYXQtY2hpcCBzdHlsZT1cIm1pbi1oZWlnaHQ6IDI1cHg7d2lkdGg6IGF1dG87XCIgKm5nRm9yPVwibGV0IG9wdGlvbiBvZiBjdXJyZW50RWRpdEJsb2NrLmRlZmF1bHRWYWx1ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBbc2VsZWN0ZWRdPVwib3B0aW9uLmNoZWNrZWRcIiBbdmFsdWVdPVwib3B0aW9uLnZhbHVlXCIgW3JlbW92YWJsZV09XCJ0cnVlXCJcclxuICAgICAgICAgICAgICAgICAgICAgIChkYmxjbGljayk9XCJvbkNoZWNrZWRDaGlwQmxvY2sob3B0aW9uLCBjdXJyZW50RWRpdEJsb2NrKVwiIChjbGljayk9XCJvbkVkaXRDaGlwKG9wdGlvbilcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgKHJlbW92ZWQpPVwicmVtb3ZlS2V5d29yZEJsb2NrKG9wdGlvbiwgY3VycmVudEVkaXRCbG9jaylcIiBjZGtEcmFnPlxyXG4gICAgICAgICAgICAgICAgICAgICAge3sgb3B0aW9uLnZhbHVlIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICA8bWF0LWljb24gbWF0Q2hpcFJlbW92ZT57e2xvY2FsZT8uQ0FOQ0VMfX08L21hdC1pY29uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbWF0LWNoaXA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0ICNjaGlwc0lucHV0IHBsYWNlaG9sZGVyPVwiYWRkLi4uXCIgW21hdENoaXBJbnB1dEZvcl09XCJjaGlwTGlzdFwiIFttYXRDaGlwSW5wdXRBZGRPbkJsdXJdPVwidHJ1ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAobWF0Q2hpcElucHV0VG9rZW5FbmQpPVwiYWRkS2V5d29yZEZyb21JbnB1dEJsb2NrKCRldmVudCwgY3VycmVudEVkaXRCbG9jaywgcHJldlZhbHVlKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBbbWF0Q2hpcElucHV0U2VwYXJhdG9yS2V5Q29kZXNdPVwic2VwYXJhdG9yS2V5c0NvZGVzXCJcclxuICAgICAgICAgICAgICAgICAgICAgIChrZXl1cCk9XCJvbktleVVwQ2hpcCgkZXZlbnQsIGN1cnJlbnRFZGl0QmxvY2spXCIgWyhuZ01vZGVsKV09XCJjdXJyZW50Q2hpcFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBbbmdNb2RlbE9wdGlvbnNdPVwieyBzdGFuZGFsb25lOiB0cnVlIH1cIiAvPlxyXG4gICAgICAgICAgICAgICAgICA8L21hdC1jaGlwLWxpc3Q+XHJcbiAgICAgICAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgICAgICAgPG1hdC1mb3JtLWZpZWxkICpuZ1N3aXRjaENhc2U9XCIndGV4dGFyZWEnXCIgY2xhc3M9XCJmb3JtLWZpZWxkIGZ1bGwtd2lkdGhcIiBhcHBlYXJhbmNlPVwib3V0bGluZVwiPlxyXG4gICAgICAgICAgICAgICAgICA8bWF0LWxhYmVsPnt7bG9jYWxlPy5ERUZBVUxUX1ZBTFVFfX08L21hdC1sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbWF0SW5wdXQgW25nTW9kZWxPcHRpb25zXT1cInsgc3RhbmRhbG9uZTogdHJ1ZSB9XCJcclxuICAgICAgICAgICAgICAgICAgICBbKG5nTW9kZWwpXT1cImN1cnJlbnRFZGl0QmxvY2suZGVmYXVsdFZhbHVlXCIgcGxhY2Vob2xkZXI9XCJEZXNjcmlwdGlvbi4uLlwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG5cclxuICAgICAgICAgICAgICAgIDxtYXQtZm9ybS1maWVsZCAqbmdTd2l0Y2hEZWZhdWx0IGNsYXNzPVwiZm9ybS1maWVsZCBmdWxsLXdpZHRoXCJcclxuICAgICAgICAgICAgICAgICAgW3N0eWxlLm9wYWNpdHldPVwiY3VycmVudEVkaXRCbG9jay50eXBlICE9PSAndGVsJyA/IDEgOiAwXCIgYXBwZWFyYW5jZT1cIm91dGxpbmVcIj5cclxuICAgICAgICAgICAgICAgICAgPG1hdC1sYWJlbD57e2xvY2FsZT8uREVGQVVMVF9WQUxVRX19PC9tYXQtbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dCBbdHlwZV09XCJjdXJyZW50RWRpdEJsb2NrLnR5cGVcIiBbZGlzYWJsZWRdPVwiY3VycmVudEVkaXRCbG9jay50eXBlID09PSAndGVsJ1wiIG1hdElucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgW25nTW9kZWxPcHRpb25zXT1cInsgc3RhbmRhbG9uZTogdHJ1ZSB9XCIgWyhuZ01vZGVsKV09XCJjdXJyZW50RWRpdEJsb2NrLmRlZmF1bHRWYWx1ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1hbmRhdG9yeSB0b3AtMTAgYm90dG9tLTEwXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidG9vZ2xlLWJ1dHRvblwiPlxyXG4gICAgICAgICAgICAgICAgICA8c3Bhbj57e2xvY2FsZT8uUkVRVUlSRUR9fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPG1hdC1zbGlkZS10b2dnbGUgY29sb3I9XCIjNkZFOEQ3XCIgWyhuZ01vZGVsKV09XCJjdXJyZW50RWRpdEJsb2NrLmlzTWFuZGF0b3J5XCJcclxuICAgICAgICAgICAgICAgICAgICBbbmdNb2RlbE9wdGlvbnNdPVwieyBzdGFuZGFsb25lOiB0cnVlIH1cIj5cclxuICAgICAgICAgICAgICAgICAgPC9tYXQtc2xpZGUtdG9nZ2xlPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1hbmRhdG9yeSB0b3AtMTBcIiBbc3R5bGVdPVwiIWN1cnJlbnRFZGl0QmxvY2suZWRpdGFibGUgPyAncG9pbnRlci1ldmVudHM6bm9uZTtvcGFjaXR5OjAuMyc6JydcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0b29nbGUtYnV0dG9uXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuPnt7bG9jYWxlPy5DT05ESVRJT05BTF9WSVNJQklMSVRZfX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDxtYXQtc2xpZGUtdG9nZ2xlIGNvbG9yPVwiIzZGRThEN1wiIFsobmdNb2RlbCldPVwiY3VycmVudEVkaXRCbG9jay5pc0NvbmRpdGlvbmFsXCJcclxuICAgICAgICAgICAgICAgICAgICBbbmdNb2RlbE9wdGlvbnNdPVwieyBzdGFuZGFsb25lOiB0cnVlIH1cIj5cclxuICAgICAgICAgICAgICAgICAgPC9tYXQtc2xpZGUtdG9nZ2xlPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImN1cnJlbnRFZGl0QmxvY2s/LmlzQ29uZGl0aW9uYWxcIj5cclxuICAgICAgICAgICAgICAgIDxtYXQtZm9ybS1maWVsZCBjbGFzcz1cImZvcm0tZmllbGQgbWF0LXNlbGVjdCBmdWxsLXdpZHRoXCIgYXBwZWFyYW5jZT1cIm91dGxpbmVcIj5cclxuICAgICAgICAgICAgICAgICAgPG1hdC1sYWJlbD57e2xvY2FsZT8uU0VMRUNUX0NBVEVHT1JZfX08L21hdC1sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgPG1hdC1zZWxlY3QgWyhuZ01vZGVsKV09XCJhbGxcIiBbbmdNb2RlbE9wdGlvbnNdPVwieyBzdGFuZGFsb25lOiB0cnVlIH1cIlxyXG4gICAgICAgICAgICAgICAgICAgIChzZWxlY3Rpb25DaGFuZ2UpPVwib25TZWxlY3RDb25kaXRpb24oJ2FsbCcsJ3MxJywgJGV2ZW50LnZhbHVlKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxtYXQtb3B0aW9uICpuZ0Zvcj1cImxldCBpdGVtIG9mIGNvbmRpdGlvbkRhdGEuYWxsXCIgW3ZhbHVlXT1cIml0ZW0ua2V5XCI+e3tcclxuICAgICAgICAgICAgICAgICAgICAgIGl0ZW0ubGFiZWwgfX1cclxuICAgICAgICAgICAgICAgICAgICA8L21hdC1vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgIDwvbWF0LXNlbGVjdD5cclxuICAgICAgICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgICAgICAgICA8bWF0LWZvcm0tZmllbGQgKm5nSWY9XCJjb25kaXRpb25EYXRhLnMxPy5sZW5ndGggPiAwXCIgY2xhc3M9XCJmb3JtLWZpZWxkIG1hdC1zZWxlY3QgZnVsbC13aWR0aFwiXHJcbiAgICAgICAgICAgICAgICAgIGFwcGVhcmFuY2U9XCJvdXRsaW5lXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxtYXQtbGFiZWw+e3tsb2NhbGU/LlNFTEVDVF9TVUJfQ0FURUdPUll9fSAoczEpPC9tYXQtbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgIDxtYXQtc2VsZWN0IFsobmdNb2RlbCldPVwiczFcIiBbbmdNb2RlbE9wdGlvbnNdPVwieyBzdGFuZGFsb25lOiB0cnVlIH1cIlxyXG4gICAgICAgICAgICAgICAgICAgIChzZWxlY3Rpb25DaGFuZ2UpPVwib25TZWxlY3RDb25kaXRpb24oJ3MxJywnczInLCAkZXZlbnQudmFsdWUpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPG1hdC1vcHRpb24gKm5nRm9yPVwibGV0IGl0ZW0gb2YgY29uZGl0aW9uRGF0YS5zMVwiIFt2YWx1ZV09XCJpdGVtLmtleVwiPnt7XHJcbiAgICAgICAgICAgICAgICAgICAgICBpdGVtLmxhYmVsIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPC9tYXQtb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICA8L21hdC1zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgICAgICAgPG1hdC1mb3JtLWZpZWxkIGNsYXNzPVwiZm9ybS1maWVsZCBtYXQtc2VsZWN0IGZ1bGwtd2lkdGhcIiAqbmdJZj1cImNvbmRpdGlvbkRhdGEuczI/Lmxlbmd0aD4wXCJcclxuICAgICAgICAgICAgICAgICAgYXBwZWFyYW5jZT1cIm91dGxpbmVcIj5cclxuICAgICAgICAgICAgICAgICAgPG1hdC1sYWJlbD57e2xvY2FsZT8uU0VMRUNUX1NVQl9DQVRFR09SWX19IChzMik8L21hdC1sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgPG1hdC1zZWxlY3QgWyhuZ01vZGVsKV09XCJzMlwiIFtuZ01vZGVsT3B0aW9uc109XCJ7IHN0YW5kYWxvbmU6IHRydWUgfVwiXHJcbiAgICAgICAgICAgICAgICAgICAgKHNlbGVjdGlvbkNoYW5nZSk9XCJvblNlbGVjdENvbmRpdGlvbignczInLCdzMycsICRldmVudC52YWx1ZSlcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bWF0LW9wdGlvbiAqbmdGb3I9XCJsZXQgaXRlbSBvZiBjb25kaXRpb25EYXRhLnMyXCIgW3ZhbHVlXT1cIml0ZW0ua2V5XCI+e3tcclxuICAgICAgICAgICAgICAgICAgICAgIGl0ZW0ubGFiZWwgfX1cclxuICAgICAgICAgICAgICAgICAgICA8L21hdC1vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgIDwvbWF0LXNlbGVjdD5cclxuICAgICAgICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgICAgICAgICA8bWF0LWZvcm0tZmllbGQgY2xhc3M9XCJmb3JtLWZpZWxkIG1hdC1zZWxlY3QgZnVsbC13aWR0aFwiICpuZ0lmPVwiY29uZGl0aW9uRGF0YS5zMz8ubGVuZ3RoPjBcIlxyXG4gICAgICAgICAgICAgICAgICBhcHBlYXJhbmNlPVwib3V0bGluZVwiPlxyXG4gICAgICAgICAgICAgICAgICA8bWF0LWxhYmVsPnt7bG9jYWxlPy5TRUxFQ1RfU1VCX0NBVEVHT1JZfX0gKHMzKTwvbWF0LWxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICA8bWF0LXNlbGVjdCBbKG5nTW9kZWwpXT1cInMzXCIgW25nTW9kZWxPcHRpb25zXT1cInsgc3RhbmRhbG9uZTogdHJ1ZSB9XCJcclxuICAgICAgICAgICAgICAgICAgICAoc2VsZWN0aW9uQ2hhbmdlKT1cIm9uU2VsZWN0Q29uZGl0aW9uKCdzMycsJ3M0JywgJGV2ZW50LnZhbHVlKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxtYXQtb3B0aW9uICpuZ0Zvcj1cImxldCBpdGVtIG9mIGNvbmRpdGlvbkRhdGEuczNcIiBbdmFsdWVdPVwiaXRlbS5rZXlcIj57e1xyXG4gICAgICAgICAgICAgICAgICAgICAgaXRlbS5sYWJlbCB9fVxyXG4gICAgICAgICAgICAgICAgICAgIDwvbWF0LW9wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgPC9tYXQtc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuXHJcbiAgICAgICAgICAgICAgPG1hdC1yYWRpby1ncm91cFxyXG4gICAgICAgICAgICAgICAgKm5nSWY9XCJjdXJyZW50RWRpdEJsb2NrLmlzQ29uZGl0aW9uYWwgJiYgb25HZXREZWZhdWx0VmFsdWUoKSAmJiBvbkdldERlZmF1bHRWYWx1ZSgpPy5sZW5ndGg+MFwiXHJcbiAgICAgICAgICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJleGFtcGxlLXJhZGlvLWdyb3VwLWxhYmVsXCIgY2xhc3M9XCJleGFtcGxlLXJhZGlvLWdyb3VwXCJcclxuICAgICAgICAgICAgICAgIFsobmdNb2RlbCldPVwiY3VycmVudEVkaXRCbG9jay5jb25kaXRpb24udmFsdWVcIiBbbmdNb2RlbE9wdGlvbnNdPVwieyBzdGFuZGFsb25lOiB0cnVlIH1cIj5cclxuICAgICAgICAgICAgICAgIDxtYXQtcmFkaW8tYnV0dG9uIGNsYXNzPVwiZXhhbXBsZS1yYWRpby1idXR0b25cIiBzdHlsZT1cIm1hcmdpbi1yaWdodDogMTBweFwiXHJcbiAgICAgICAgICAgICAgICAgICpuZ0Zvcj1cImxldCBpdGVtIG9mIG9uR2V0RGVmYXVsdFZhbHVlKClcIiBbdmFsdWVdPVwiaXRlbS52YWx1ZVwiPlxyXG4gICAgICAgICAgICAgICAgICB7eyBpdGVtLnZhbHVlIH19XHJcbiAgICAgICAgICAgICAgICA8L21hdC1yYWRpby1idXR0b24+XHJcbiAgICAgICAgICAgICAgPC9tYXQtcmFkaW8tZ3JvdXA+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJsb2MtYWN0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uICpuZ0lmPVwicGFyYW1zSW5kZXgubGVuZ3RoPDRcIiBtYXQtYnV0dG9uIFtkaXNhYmxlZF09XCIhY3VycmVudEVkaXRCbG9jay5lZGl0YWJsZVwiXHJcbiAgICAgICAgICAgICAgICAgIChjbGljayk9XCJvbkFkZE5ld1N1YkxldmVsRmllbGRCbG9jaygkZXZlbnQpXCI+e3tsb2NhbGU/LlNVQl9DQVRFR09SWX19IDxtYXQtaWNvbj5kZXZpY2VfaHViXHJcbiAgICAgICAgICAgICAgICAgIDwvbWF0LWljb24+PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIG1hdC1idXR0b24gW2Rpc2FibGVkXT1cIiFjdXJyZW50RWRpdEJsb2NrLmVkaXRhYmxlXCJcclxuICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cIm9uRHVwbGljYXRlZEJsb2NrKCRldmVudClcIj57e2xvY2FsZT8uRFVQTElDQVRFX0JMT0NLfX08bWF0LWljb24+ZmlsdGVyX25vbmU8L21hdC1pY29uPlxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIG1hdC1idXR0b24gW2Rpc2FibGVkXT1cIiFjdXJyZW50RWRpdEJsb2NrLmVkaXRhYmxlXCIgY2xhc3M9XCJkZWxldGUtYmxvY1wiXHJcbiAgICAgICAgICAgICAgICAgIChjbGljayk9XCJvblJlbW92ZUZpZWxkQmxvY2soJGV2ZW50KVwiPnt7bG9jYWxlPy5ERUxFVEVfQkxPQ0t9fSA8bWF0LWljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIDwvbWF0LWljb24+PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInByb3BlcnR5LWNvbnRlbnRcIiAqbmdJZj1cImlzU2VjdGlvbiAmJiBjdXJyZW50RWRpdEJsb2NrXCI+XHJcbiAgICAgICAgICA8aDM+e3tsb2NhbGU/LlNFQ1RJT05fU0VUVElOR319IHt7IGN1cnJlbnRFZGl0QmxvY2submFtZSB9fTwvaDM+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJvcGVydHktY29udGVudC1pbm5lclwiPlxyXG4gICAgICAgICAgICA8bWF0LWZvcm0tZmllbGQgY2xhc3M9XCJmb3JtLWZpZWxkIGZ1bGwtd2lkdGhcIiBhcHBlYXJhbmNlPVwib3V0bGluZVwiPlxyXG4gICAgICAgICAgICAgIDxtYXQtbGFiZWw+e3tsb2NhbGU/LlNFQ1RJT05fTkFNRX19PC9tYXQtbGFiZWw+XHJcbiAgICAgICAgICAgICAgPGlucHV0IChuZ01vZGVsQ2hhbmdlKT1cIm9uQ2hhbmdlQ2F0ZWdvcnlOYW1lKClcIiB0eXBlPVwidGV4dFwiIG1hdElucHV0IHJlcXVpcmVkIHBsYWNlaG9sZGVyPVwiXCJcclxuICAgICAgICAgICAgICAgIFsobmdNb2RlbCldPVwiY3VycmVudEVkaXRCbG9jay5uYW1lXCIgW25nTW9kZWxPcHRpb25zXT1cInsgc3RhbmRhbG9uZTogdHJ1ZSB9XCIgLz5cclxuICAgICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgICAgICAgICAgPG1hdC1mb3JtLWZpZWxkIGNsYXNzPVwiZm9ybS1maWVsZCBtYXQtc2VsZWN0IGZ1bGwtd2lkdGhcIiBhcHBlYXJhbmNlPVwib3V0bGluZVwiPlxyXG4gICAgICAgICAgICAgIDxtYXQtbGFiZWw+e3tsb2NhbGU/Lk1BTkFHRU1FTlRfVEVBTX19PC9tYXQtbGFiZWw+XHJcbiAgICAgICAgICAgICAgPG1hdC1zZWxlY3QgcmVxdWlyZWQgWyhuZ01vZGVsKV09XCJjdXJyZW50RWRpdEJsb2NrLnNlbGVjdG9yLnZhbHVlXCJcclxuICAgICAgICAgICAgICAgIFtuZ01vZGVsT3B0aW9uc109XCJ7IHN0YW5kYWxvbmU6IHRydWUgfVwiPlxyXG4gICAgICAgICAgICAgICAgPG1hdC1vcHRpb24gW3ZhbHVlXT1cIml0ZW0udmFsdWVcIiAqbmdGb3I9XCJsZXQgaXRlbSBvZiBjdXJyZW50RWRpdEJsb2NrLnNlbGVjdG9yLmRlZmF1bHRWYWx1ZVwiPnt7XHJcbiAgICAgICAgICAgICAgICAgIGl0ZW0udmFsdWUgfX08L21hdC1vcHRpb24+XHJcbiAgICAgICAgICAgICAgPC9tYXQtc2VsZWN0PlxyXG4gICAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYmxvYy1hY3Rpb25cIj5cclxuICAgICAgICAgICAgICA8YnV0dG9uIG1hdC1idXR0b24gKGNsaWNrKT1cIm9uQWRkTmV3U3ViTGV2ZWxGaWVsZEJsb2NrKCRldmVudClcIj57e2xvY2FsZT8uU1VCX0NBVEVHT1JZfX0gPG1hdC1pY29uPlxyXG4gICAgICAgICAgICAgICAgICBkZXZpY2VfaHViXHJcbiAgICAgICAgICAgICAgICA8L21hdC1pY29uPjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDxidXR0b24gbWF0LWJ1dHRvbiAoY2xpY2spPVwib25EdXBsaWNhdGVkQmxvY2soJGV2ZW50KVwiPnt7bG9jYWxlPy5EVVBMSUNBVEVfQkxPQ0t9fTxtYXQtaWNvbj5maWx0ZXJfbm9uZVxyXG4gICAgICAgICAgICAgICAgPC9tYXQtaWNvbj5cclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8YnV0dG9uIFtkaXNhYmxlZF09XCIhY3VycmVudEVkaXRCbG9jay5lZGl0YWJsZVwiIG1hdC1idXR0b24gY2xhc3M9XCJkZWxldGUtYmxvY1wiXHJcbiAgICAgICAgICAgICAgICAoY2xpY2spPVwib25SZW1vdmVGaWVsZEJsb2NrKCRldmVudClcIj57e2xvY2FsZT8uREVMRVRFX0JMT0NLfX0gPG1hdC1pY29uPlxyXG4gICAgICAgICAgICAgICAgICBkZWxldGU8L21hdC1pY29uPjwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZm9ybT5cclxuPC9tYWluPiJdfQ==