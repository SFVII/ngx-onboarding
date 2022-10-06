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
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 22);
    i0.ɵɵlistener("click", function TemplateProfileCreateComponent_li_23_Template_li_click_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r10); const cat_r7 = restoredCtx.$implicit; const i_r8 = restoredCtx.index; const ctx_r9 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r9.scrollTo(cat_r7, i_r8)); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const cat_r7 = ctx.$implicit;
    const i_r8 = ctx.index;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵclassMap(ctx_r2.editIndex === i_r8 ? "active" : "");
    i0.ɵɵproperty("id", cat_r7.name + "x");
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
    i0.ɵɵlistener("click", function TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_div_3_Template_button_click_1_listener($event) { $event.stopPropagation(); return $event.preventDefault(); });
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
    i0.ɵɵelementStart(0, "div", 46)(1, "div", 28)(2, "div")(3, "p", 29);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "p", 30);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "button", 47);
    i0.ɵɵlistener("click", function TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_div_5_Template_button_click_7_listener($event) { i0.ɵɵrestoreView(_r30); const ctx_r29 = i0.ɵɵnextContext(); const field_r19 = ctx_r29.$implicit; const j_r20 = ctx_r29.index; const i_r12 = i0.ɵɵnextContext(3).index; const ctx_r28 = i0.ɵɵnextContext(); $event.stopPropagation(); return i0.ɵɵresetView(ctx_r28.onEditBlock(field_r19, i_r12, j_r20)); });
    i0.ɵɵelementStart(8, "mat-icon", 48);
    i0.ɵɵtext(9, "settings");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(10, "button", 49);
    i0.ɵɵlistener("click", function TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_div_5_Template_button_click_10_listener($event) { i0.ɵɵrestoreView(_r30); const ctx_r33 = i0.ɵɵnextContext(); const field_r19 = ctx_r33.$implicit; const j_r20 = ctx_r33.index; const i_r12 = i0.ɵɵnextContext(3).index; const ctx_r32 = i0.ɵɵnextContext(); $event.stopPropagation(); return i0.ɵɵresetView(ctx_r32.onExpendMore({ event: $event, field: field_r19 }, i_r12, j_r20)); });
    i0.ɵɵtemplate(11, TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_div_5_mat_icon_11_Template, 2, 0, "mat-icon", 5);
    i0.ɵɵtemplate(12, TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_div_5_mat_icon_12_Template, 2, 0, "mat-icon", 5);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const field_r19 = i0.ɵɵnextContext().$implicit;
    const ctx_r22 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1(" ", field_r19.label, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2(" ", ctx_r22.locale == null ? null : ctx_r22.locale.CATEGORY_SUBTITLE, " ", ctx_r22.catNameStart(field_r19.label) ? "l'" + field_r19.label : field_r19.label, " ");
    i0.ɵɵadvance(4);
    i0.ɵɵstyleProp("opacity", field_r19.forms && field_r19.forms.length > 0 ? 1 : 0);
    i0.ɵɵproperty("disabled", !(field_r19.forms && field_r19.forms.length > 0));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !field_r19.expandMore);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", field_r19.expandMore);
} }
function TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_div_7_div_1_div_2_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 58)(1, "button", 25);
    i0.ɵɵlistener("click", function TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_div_7_div_1_div_2_div_3_Template_button_click_1_listener($event) { $event.stopPropagation(); return $event.preventDefault(); });
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
    i0.ɵɵelementStart(0, "div", 46)(1, "div", 28)(2, "div")(3, "input", 59);
    i0.ɵɵlistener("ngModelChange", function TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_div_7_div_1_div_2_div_5_Template_input_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r50); const child_r39 = i0.ɵɵnextContext().$implicit; return i0.ɵɵresetView(child_r39.label = $event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "p", 30);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "button", 47);
    i0.ɵɵlistener("click", function TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_div_7_div_1_div_2_div_5_Template_button_click_6_listener($event) { i0.ɵɵrestoreView(_r50); const ctx_r52 = i0.ɵɵnextContext(); const child_r39 = ctx_r52.$implicit; const k_r40 = ctx_r52.index; const j_r20 = i0.ɵɵnextContext(3).index; const i_r12 = i0.ɵɵnextContext(3).index; const ctx_r51 = i0.ɵɵnextContext(); $event.stopPropagation(); return i0.ɵɵresetView(ctx_r51.onEditBlock(child_r39, i_r12, j_r20, k_r40)); });
    i0.ɵɵelementStart(7, "mat-icon", 48);
    i0.ɵɵtext(8, "settings");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(9, "button", 49);
    i0.ɵɵlistener("click", function TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_div_7_div_1_div_2_div_5_Template_button_click_9_listener($event) { i0.ɵɵrestoreView(_r50); const ctx_r56 = i0.ɵɵnextContext(); const child_r39 = ctx_r56.$implicit; const k_r40 = ctx_r56.index; const j_r20 = i0.ɵɵnextContext(3).index; const i_r12 = i0.ɵɵnextContext(3).index; const ctx_r55 = i0.ɵɵnextContext(); $event.stopPropagation(); return i0.ɵɵresetView(ctx_r55.onExpendMore({ event: $event, field: child_r39 }, i_r12, j_r20, k_r40)); });
    i0.ɵɵtemplate(10, TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_div_7_div_1_div_2_div_5_mat_icon_10_Template, 2, 0, "mat-icon", 5);
    i0.ɵɵtemplate(11, TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_div_7_div_1_div_2_div_5_mat_icon_11_Template, 2, 0, "mat-icon", 5);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const child_r39 = i0.ɵɵnextContext().$implicit;
    const category_r11 = i0.ɵɵnextContext(6).$implicit;
    const ctx_r42 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("readonly", ctx_r42.categories.length < 4 || !category_r11.editable)("readonly", !category_r11.editable)("ngModel", child_r39.label)("ngModelOptions", i0.ɵɵpureFunction0(11, _c0));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2(" ", ctx_r42.locale == null ? null : ctx_r42.locale.CATEGORY_SUBTITLE, " ", ctx_r42.catNameStart(child_r39.label) ? "l'" + child_r39.label : child_r39.label, " ");
    i0.ɵɵadvance(4);
    i0.ɵɵstyleProp("opacity", child_r39.forms && child_r39.forms.length > 0 ? 1 : 0);
    i0.ɵɵproperty("disabled", !(child_r39.forms && child_r39.forms.length > 0));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !child_r39.expandMore);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", child_r39.expandMore);
} }
function TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_div_7_div_1_div_2_div_7_div_1_div_2_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 64)(1, "button", 25);
    i0.ɵɵlistener("click", function TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_div_7_div_1_div_2_div_7_div_1_div_2_div_3_Template_button_click_1_listener($event) { return $event.stopPropagation(); });
    i0.ɵɵelementStart(2, "mat-icon", 26);
    i0.ɵɵtext(3, " drag_indicator ");
    i0.ɵɵelementEnd()()();
} }
function TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_div_7_div_1_div_2_div_7_div_1_div_2_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r71 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 65)(1, "button", 66);
    i0.ɵɵlistener("click", function TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_div_7_div_1_div_2_div_7_div_1_div_2_div_7_Template_button_click_1_listener($event) { i0.ɵɵrestoreView(_r71); const k_r40 = i0.ɵɵnextContext(4).index; const j_r20 = i0.ɵɵnextContext(3).index; const i_r12 = i0.ɵɵnextContext(3).index; const ctx_r69 = i0.ɵɵnextContext(); $event.stopPropagation(); return i0.ɵɵresetView(ctx_r69.onAddNewField(i_r12, j_r20, k_r40)); });
    i0.ɵɵelementStart(2, "span");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "mat-icon");
    i0.ɵɵtext(5, " add ");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r67 = i0.ɵɵnextContext(11);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r67.locale == null ? null : ctx_r67.locale.ADD_FIELD);
} }
function TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_div_7_div_1_div_2_div_7_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r75 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 61)(1, "div", 37)(2, "div", 38);
    i0.ɵɵtemplate(3, TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_div_7_div_1_div_2_div_7_div_1_div_2_div_3_Template, 4, 0, "div", 62);
    i0.ɵɵelementStart(4, "div", 40)(5, "lib-sub-category", 63);
    i0.ɵɵlistener("onCheckValue", function TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_div_7_div_1_div_2_div_7_div_1_div_2_Template_lib_sub_category_onCheckValue_5_listener($event) { i0.ɵɵrestoreView(_r75); const ctx_r74 = i0.ɵɵnextContext(10); return i0.ɵɵresetView(ctx_r74.onCheckValue($event)); })("onAddKeywordFromInput", function TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_div_7_div_1_div_2_div_7_div_1_div_2_Template_lib_sub_category_onAddKeywordFromInput_5_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r75); const l_r65 = restoredCtx.index; const k_r40 = i0.ɵɵnextContext(3).index; const j_r20 = i0.ɵɵnextContext(3).index; const i_r12 = i0.ɵɵnextContext(3).index; const ctx_r76 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r76.addKeywordFromInput($event.event, $event.prev, i_r12, j_r20, k_r40, l_r65)); })("onKeyPress", function TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_div_7_div_1_div_2_div_7_div_1_div_2_Template_lib_sub_category_onKeyPress_5_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r75); const l_r65 = restoredCtx.index; const k_r40 = i0.ɵɵnextContext(3).index; const j_r20 = i0.ɵɵnextContext(3).index; const i_r12 = i0.ɵɵnextContext(3).index; const ctx_r80 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r80.onKeyPress($event.event, i_r12, j_r20, k_r40, l_r65)); })("onAddNewField", function TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_div_7_div_1_div_2_div_7_div_1_div_2_Template_lib_sub_category_onAddNewField_5_listener() { i0.ɵɵrestoreView(_r75); const k_r40 = i0.ɵɵnextContext(3).index; const j_r20 = i0.ɵɵnextContext(3).index; const i_r12 = i0.ɵɵnextContext(3).index; const ctx_r84 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r84.onAddNewField(i_r12, j_r20, k_r40)); })("onRemoveField", function TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_div_7_div_1_div_2_div_7_div_1_div_2_Template_lib_sub_category_onRemoveField_5_listener() { const restoredCtx = i0.ɵɵrestoreView(_r75); const l_r65 = restoredCtx.index; const k_r40 = i0.ɵɵnextContext(3).index; const j_r20 = i0.ɵɵnextContext(3).index; const i_r12 = i0.ɵɵnextContext(3).index; const ctx_r88 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r88.onRemoveField(i_r12, j_r20, k_r40, l_r65)); })("onChangeType", function TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_div_7_div_1_div_2_div_7_div_1_div_2_Template_lib_sub_category_onChangeType_5_listener() { const restoredCtx = i0.ɵɵrestoreView(_r75); const c2_r64 = restoredCtx.$implicit; const l_r65 = restoredCtx.index; const k_r40 = i0.ɵɵnextContext(3).index; const j_r20 = i0.ɵɵnextContext(3).index; const i_r12 = i0.ɵɵnextContext(3).index; const ctx_r92 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r92.onChangeType(c2_r64.type, i_r12, j_r20, k_r40, l_r65)); })("onRemoveKeyword", function TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_div_7_div_1_div_2_div_7_div_1_div_2_Template_lib_sub_category_onRemoveKeyword_5_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r75); const l_r65 = restoredCtx.index; const k_r40 = i0.ɵɵnextContext(3).index; const j_r20 = i0.ɵɵnextContext(3).index; const i_r12 = i0.ɵɵnextContext(3).index; const ctx_r96 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r96.removeKeyword($event.event, i_r12, j_r20, k_r40, l_r65)); })("onAddNewSubLevelField", function TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_div_7_div_1_div_2_div_7_div_1_div_2_Template_lib_sub_category_onAddNewSubLevelField_5_listener() { const restoredCtx = i0.ɵɵrestoreView(_r75); const l_r65 = restoredCtx.index; const k_r40 = i0.ɵɵnextContext(3).index; const j_r20 = i0.ɵɵnextContext(3).index; const i_r12 = i0.ɵɵnextContext(3).index; const ctx_r100 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r100.onAddNewSubLevelField(i_r12, j_r20, k_r40, l_r65)); })("onExpendMore", function TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_div_7_div_1_div_2_div_7_div_1_div_2_Template_lib_sub_category_onExpendMore_5_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r75); const l_r65 = restoredCtx.index; const k_r40 = i0.ɵɵnextContext(3).index; const j_r20 = i0.ɵɵnextContext(3).index; const i_r12 = i0.ɵɵnextContext(3).index; const ctx_r104 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r104.onExpendMore($event, i_r12, j_r20, k_r40, l_r65)); })("onChangeLabel", function TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_div_7_div_1_div_2_div_7_div_1_div_2_Template_lib_sub_category_onChangeLabel_5_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r75); const l_r65 = restoredCtx.index; const k_r40 = i0.ɵɵnextContext(3).index; const j_r20 = i0.ɵɵnextContext(3).index; const i_r12 = i0.ɵɵnextContext(3).index; const ctx_r108 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r108.onChangeLabel($event, i_r12, j_r20, k_r40, l_r65)); })("onCheckedChip", function TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_div_7_div_1_div_2_div_7_div_1_div_2_Template_lib_sub_category_onCheckedChip_5_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r75); const l_r65 = restoredCtx.index; const k_r40 = i0.ɵɵnextContext(3).index; const j_r20 = i0.ɵɵnextContext(3).index; const i_r12 = i0.ɵɵnextContext(3).index; const ctx_r112 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r112.onCheckedChip($event, i_r12, j_r20, k_r40, l_r65)); })("onDrop", function TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_div_7_div_1_div_2_div_7_div_1_div_2_Template_lib_sub_category_onDrop_5_listener($event) { i0.ɵɵrestoreView(_r75); const ctx_r116 = i0.ɵɵnextContext(10); return i0.ɵɵresetView(ctx_r116.drop($event)); })("onCheckedDefault", function TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_div_7_div_1_div_2_div_7_div_1_div_2_Template_lib_sub_category_onCheckedDefault_5_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r75); const l_r65 = restoredCtx.index; const k_r40 = i0.ɵɵnextContext(3).index; const j_r20 = i0.ɵɵnextContext(3).index; const i_r12 = i0.ɵɵnextContext(3).index; const ctx_r117 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r117.onCheckedDefault($event, i_r12, j_r20, k_r40, l_r65)); })("onEditBlock", function TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_div_7_div_1_div_2_div_7_div_1_div_2_Template_lib_sub_category_onEditBlock_5_listener() { const restoredCtx = i0.ɵɵrestoreView(_r75); const c2_r64 = restoredCtx.$implicit; const l_r65 = restoredCtx.index; const k_r40 = i0.ɵɵnextContext(3).index; const j_r20 = i0.ɵɵnextContext(3).index; const i_r12 = i0.ɵɵnextContext(3).index; const ctx_r121 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r121.onEditBlock(c2_r64, i_r12, j_r20, k_r40, l_r65)); });
    i0.ɵɵelement(6, "div", 50);
    i0.ɵɵelementEnd()()()();
    i0.ɵɵtemplate(7, TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_div_7_div_1_div_2_div_7_div_1_div_2_div_7_Template, 6, 1, "div", 57);
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
    i0.ɵɵelementStart(0, "div", 52, 34);
    i0.ɵɵlistener("cdkDropListDropped", function TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_div_7_div_1_div_2_div_7_div_1_Template_div_cdkDropListDropped_0_listener($event) { i0.ɵɵrestoreView(_r127); const ctx_r126 = i0.ɵɵnextContext(9); return i0.ɵɵresetView(ctx_r126.drop($event)); });
    i0.ɵɵtemplate(2, TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_div_7_div_1_div_2_div_7_div_1_div_2_Template, 8, 13, "div", 60);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const child_r39 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵproperty("cdkDropListData", child_r39.forms);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", child_r39.forms);
} }
function TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_div_7_div_1_div_2_div_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 50);
    i0.ɵɵtemplate(1, TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_div_7_div_1_div_2_div_7_div_1_Template, 3, 2, "div", 51);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const child_r39 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", child_r39.forms && child_r39.forms.length > 0);
} }
function TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_div_7_div_1_div_2_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r132 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 65)(1, "button", 66);
    i0.ɵɵlistener("click", function TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_div_7_div_1_div_2_div_8_Template_button_click_1_listener($event) { i0.ɵɵrestoreView(_r132); const j_r20 = i0.ɵɵnextContext(4).index; const i_r12 = i0.ɵɵnextContext(3).index; const ctx_r130 = i0.ɵɵnextContext(); $event.stopPropagation(); return i0.ɵɵresetView(ctx_r130.onAddNewField(i_r12, j_r20)); });
    i0.ɵɵelementStart(2, "span");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "mat-icon");
    i0.ɵɵtext(5, "add");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r44 = i0.ɵɵnextContext(8);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r44.locale == null ? null : ctx_r44.locale.ADD_FIELD);
} }
function TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_div_7_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r135 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 54)(1, "div", 37)(2, "div", 38);
    i0.ɵɵtemplate(3, TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_div_7_div_1_div_2_div_3_Template, 4, 0, "div", 55);
    i0.ɵɵelementStart(4, "div", 40);
    i0.ɵɵtemplate(5, TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_div_7_div_1_div_2_div_5_Template, 12, 12, "div", 41);
    i0.ɵɵelementStart(6, "lib-sub-category", 56);
    i0.ɵɵlistener("onCheckValue", function TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_div_7_div_1_div_2_Template_lib_sub_category_onCheckValue_6_listener($event) { i0.ɵɵrestoreView(_r135); const ctx_r134 = i0.ɵɵnextContext(7); return i0.ɵɵresetView(ctx_r134.onCheckValue($event)); })("onAddKeywordFromInput", function TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_div_7_div_1_div_2_Template_lib_sub_category_onAddKeywordFromInput_6_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r135); const k_r40 = restoredCtx.index; const j_r20 = i0.ɵɵnextContext(3).index; const i_r12 = i0.ɵɵnextContext(3).index; const ctx_r136 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r136.addKeywordFromInput($event.event, $event.prev, i_r12, j_r20, k_r40)); })("onKeyPress", function TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_div_7_div_1_div_2_Template_lib_sub_category_onKeyPress_6_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r135); const k_r40 = restoredCtx.index; const j_r20 = i0.ɵɵnextContext(3).index; const i_r12 = i0.ɵɵnextContext(3).index; const ctx_r139 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r139.onKeyPress($event.event, i_r12, j_r20, k_r40)); })("onAddNewField", function TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_div_7_div_1_div_2_Template_lib_sub_category_onAddNewField_6_listener() { i0.ɵɵrestoreView(_r135); const j_r20 = i0.ɵɵnextContext(3).index; const i_r12 = i0.ɵɵnextContext(3).index; const ctx_r142 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r142.onAddNewField(i_r12, j_r20)); })("onRemoveField", function TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_div_7_div_1_div_2_Template_lib_sub_category_onRemoveField_6_listener() { const restoredCtx = i0.ɵɵrestoreView(_r135); const k_r40 = restoredCtx.index; const j_r20 = i0.ɵɵnextContext(3).index; const i_r12 = i0.ɵɵnextContext(3).index; const ctx_r145 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r145.onRemoveField(i_r12, j_r20, k_r40)); })("onChangeType", function TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_div_7_div_1_div_2_Template_lib_sub_category_onChangeType_6_listener() { const restoredCtx = i0.ɵɵrestoreView(_r135); const child_r39 = restoredCtx.$implicit; const k_r40 = restoredCtx.index; const j_r20 = i0.ɵɵnextContext(3).index; const i_r12 = i0.ɵɵnextContext(3).index; const ctx_r148 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r148.onChangeType(child_r39.type, i_r12, j_r20, k_r40)); })("onRemoveKeyword", function TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_div_7_div_1_div_2_Template_lib_sub_category_onRemoveKeyword_6_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r135); const k_r40 = restoredCtx.index; const j_r20 = i0.ɵɵnextContext(3).index; const i_r12 = i0.ɵɵnextContext(3).index; const ctx_r151 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r151.removeKeyword($event.event, i_r12, j_r20, k_r40)); })("onAddNewSubLevelField", function TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_div_7_div_1_div_2_Template_lib_sub_category_onAddNewSubLevelField_6_listener() { const restoredCtx = i0.ɵɵrestoreView(_r135); const k_r40 = restoredCtx.index; const j_r20 = i0.ɵɵnextContext(3).index; const i_r12 = i0.ɵɵnextContext(3).index; const ctx_r154 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r154.onAddNewSubLevelField(i_r12, j_r20, k_r40)); })("onExpendMore", function TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_div_7_div_1_div_2_Template_lib_sub_category_onExpendMore_6_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r135); const k_r40 = restoredCtx.index; const j_r20 = i0.ɵɵnextContext(3).index; const i_r12 = i0.ɵɵnextContext(3).index; const ctx_r157 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r157.onExpendMore($event, i_r12, j_r20, k_r40)); })("onChangeLabel", function TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_div_7_div_1_div_2_Template_lib_sub_category_onChangeLabel_6_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r135); const k_r40 = restoredCtx.index; const j_r20 = i0.ɵɵnextContext(3).index; const i_r12 = i0.ɵɵnextContext(3).index; const ctx_r160 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r160.onChangeLabel($event, i_r12, j_r20, k_r40)); })("onCheckedChip", function TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_div_7_div_1_div_2_Template_lib_sub_category_onCheckedChip_6_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r135); const k_r40 = restoredCtx.index; const j_r20 = i0.ɵɵnextContext(3).index; const i_r12 = i0.ɵɵnextContext(3).index; const ctx_r163 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r163.onCheckedChip($event, i_r12, j_r20, k_r40)); })("onDrop", function TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_div_7_div_1_div_2_Template_lib_sub_category_onDrop_6_listener($event) { i0.ɵɵrestoreView(_r135); const ctx_r166 = i0.ɵɵnextContext(7); return i0.ɵɵresetView(ctx_r166.drop($event)); })("onCheckedDefault", function TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_div_7_div_1_div_2_Template_lib_sub_category_onCheckedDefault_6_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r135); const k_r40 = restoredCtx.index; const j_r20 = i0.ɵɵnextContext(3).index; const i_r12 = i0.ɵɵnextContext(3).index; const ctx_r167 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r167.onCheckedDefault($event, i_r12, j_r20, k_r40)); })("onEditBlock", function TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_div_7_div_1_div_2_Template_lib_sub_category_onEditBlock_6_listener() { const restoredCtx = i0.ɵɵrestoreView(_r135); const child_r39 = restoredCtx.$implicit; const k_r40 = restoredCtx.index; const j_r20 = i0.ɵɵnextContext(3).index; const i_r12 = i0.ɵɵnextContext(3).index; const ctx_r170 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r170.onEditBlock(child_r39, i_r12, j_r20, k_r40)); });
    i0.ɵɵtemplate(7, TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_div_7_div_1_div_2_div_7_Template, 2, 1, "div", 43);
    i0.ɵɵelementEnd()()()();
    i0.ɵɵtemplate(8, TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_div_7_div_1_div_2_div_8_Template, 6, 1, "div", 57);
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
    i0.ɵɵelementStart(0, "div", 52, 34);
    i0.ɵɵlistener("cdkDropListDropped", function TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_div_7_div_1_Template_div_cdkDropListDropped_0_listener($event) { i0.ɵɵrestoreView(_r175); const ctx_r174 = i0.ɵɵnextContext(6); return i0.ɵɵresetView(ctx_r174.drop($event)); });
    i0.ɵɵtemplate(2, TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_div_7_div_1_div_2_Template, 9, 15, "div", 53);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const field_r19 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵproperty("cdkDropListData", field_r19.forms);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", field_r19.forms);
} }
function TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_div_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 50);
    i0.ɵɵtemplate(1, TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_div_7_div_1_Template, 3, 2, "div", 51);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const field_r19 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", field_r19.forms);
} }
function TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r180 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 67)(1, "button", 68);
    i0.ɵɵlistener("click", function TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_div_8_Template_button_click_1_listener($event) { i0.ɵɵrestoreView(_r180); const i_r12 = i0.ɵɵnextContext(4).index; const ctx_r178 = i0.ɵɵnextContext(); $event.stopPropagation(); return i0.ɵɵresetView(ctx_r178.onAddNewField(i_r12)); });
    i0.ɵɵelementStart(2, "span");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "mat-icon");
    i0.ɵɵtext(5, "add");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const j_r20 = i0.ɵɵnextContext().index;
    const category_r11 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r24 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵstyleProp("opacity", (category_r11 == null ? null : category_r11.forms == null ? null : category_r11.forms.length) - 1 === j_r20 ? 1 : 0);
    i0.ɵɵproperty("disabled", (category_r11 == null ? null : category_r11.forms == null ? null : category_r11.forms.length) - 1 !== j_r20);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r24.locale == null ? null : ctx_r24.locale.ADD_FIELD);
} }
function TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r184 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 36)(1, "div", 37)(2, "div", 38);
    i0.ɵɵtemplate(3, TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_div_3_Template, 4, 0, "div", 39);
    i0.ɵɵelementStart(4, "div", 40);
    i0.ɵɵtemplate(5, TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_div_5_Template, 13, 8, "div", 41);
    i0.ɵɵelementStart(6, "lib-sub-category", 42);
    i0.ɵɵlistener("onCheckValue", function TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_Template_lib_sub_category_onCheckValue_6_listener($event) { i0.ɵɵrestoreView(_r184); const ctx_r183 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r183.onCheckValue($event)); })("onAddKeywordFromInput", function TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_Template_lib_sub_category_onAddKeywordFromInput_6_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r184); const j_r20 = restoredCtx.index; const i_r12 = i0.ɵɵnextContext(3).index; const ctx_r185 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r185.addKeywordFromInput($event.event, $event.prev, i_r12, j_r20)); })("onKeyPress", function TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_Template_lib_sub_category_onKeyPress_6_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r184); const j_r20 = restoredCtx.index; const i_r12 = i0.ɵɵnextContext(3).index; const ctx_r187 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r187.onKeyPress($event.event, i_r12, j_r20)); })("onAddNewField", function TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_Template_lib_sub_category_onAddNewField_6_listener() { i0.ɵɵrestoreView(_r184); const i_r12 = i0.ɵɵnextContext(3).index; const ctx_r189 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r189.onAddNewField(i_r12)); })("onRemoveField", function TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_Template_lib_sub_category_onRemoveField_6_listener() { const restoredCtx = i0.ɵɵrestoreView(_r184); const j_r20 = restoredCtx.index; const i_r12 = i0.ɵɵnextContext(3).index; const ctx_r191 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r191.onRemoveField(i_r12, j_r20)); })("onChangeType", function TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_Template_lib_sub_category_onChangeType_6_listener() { const restoredCtx = i0.ɵɵrestoreView(_r184); const field_r19 = restoredCtx.$implicit; const j_r20 = restoredCtx.index; const i_r12 = i0.ɵɵnextContext(3).index; const ctx_r193 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r193.onChangeType(field_r19.type, i_r12, j_r20)); })("onRemoveKeyword", function TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_Template_lib_sub_category_onRemoveKeyword_6_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r184); const j_r20 = restoredCtx.index; const i_r12 = i0.ɵɵnextContext(3).index; const ctx_r195 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r195.removeKeyword($event.event, i_r12, j_r20)); })("onAddNewSubLevelField", function TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_Template_lib_sub_category_onAddNewSubLevelField_6_listener() { const restoredCtx = i0.ɵɵrestoreView(_r184); const j_r20 = restoredCtx.index; const i_r12 = i0.ɵɵnextContext(3).index; const ctx_r197 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r197.onAddNewSubLevelField(i_r12, j_r20)); })("onExpendMore", function TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_Template_lib_sub_category_onExpendMore_6_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r184); const j_r20 = restoredCtx.index; const i_r12 = i0.ɵɵnextContext(3).index; const ctx_r199 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r199.onExpendMore($event, i_r12, j_r20)); })("onChangeLabel", function TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_Template_lib_sub_category_onChangeLabel_6_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r184); const j_r20 = restoredCtx.index; const i_r12 = i0.ɵɵnextContext(3).index; const ctx_r201 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r201.onChangeLabel($event, i_r12, j_r20)); })("onCheckedChip", function TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_Template_lib_sub_category_onCheckedChip_6_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r184); const j_r20 = restoredCtx.index; const i_r12 = i0.ɵɵnextContext(3).index; const ctx_r203 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r203.onCheckedChip($event, i_r12, j_r20)); })("onDrop", function TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_Template_lib_sub_category_onDrop_6_listener($event) { i0.ɵɵrestoreView(_r184); const ctx_r205 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r205.drop($event)); })("onCheckedDefault", function TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_Template_lib_sub_category_onCheckedDefault_6_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r184); const j_r20 = restoredCtx.index; const i_r12 = i0.ɵɵnextContext(3).index; const ctx_r206 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r206.onCheckedDefault($event, i_r12, j_r20)); })("onEditBlock", function TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_Template_lib_sub_category_onEditBlock_6_listener() { const restoredCtx = i0.ɵɵrestoreView(_r184); const field_r19 = restoredCtx.$implicit; const j_r20 = restoredCtx.index; const i_r12 = i0.ɵɵnextContext(3).index; const ctx_r208 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r208.onEditBlock(field_r19, i_r12, j_r20)); });
    i0.ɵɵtemplate(7, TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_div_7_Template, 2, 1, "div", 43);
    i0.ɵɵelementEnd()()()();
    i0.ɵɵtemplate(8, TemplateProfileCreateComponent_section_33_div_15_ng_container_2_div_1_div_8_Template, 6, 4, "div", 44);
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
    i0.ɵɵlistener("cdkDropListDropped", function TemplateProfileCreateComponent_section_33_div_15_Template_div_cdkDropListDropped_0_listener($event) { i0.ɵɵrestoreView(_r213); const ctx_r212 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r212.drop($event)); });
    i0.ɵɵtemplate(2, TemplateProfileCreateComponent_section_33_div_15_ng_container_2_Template, 2, 1, "ng-container", 5);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const category_r11 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("cdkDropListData", category_r11.forms);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", category_r11.expandMore);
} }
function TemplateProfileCreateComponent_section_33_Template(rf, ctx) { if (rf & 1) {
    const _r216 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "section", 23);
    i0.ɵɵlistener("click", function TemplateProfileCreateComponent_section_33_Template_section_click_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r216); const category_r11 = restoredCtx.$implicit; const i_r12 = restoredCtx.index; const ctx_r215 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r215.scrollTo(category_r11, i_r12)); });
    i0.ɵɵelementStart(1, "div", 24)(2, "button", 25);
    i0.ɵɵlistener("click", function TemplateProfileCreateComponent_section_33_Template_button_click_2_listener($event) { $event.preventDefault(); return $event.stopPropagation(); });
    i0.ɵɵelementStart(3, "mat-icon", 26);
    i0.ɵɵtext(4, "drag_indicator");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(5, "div", 27)(6, "div", 28)(7, "div")(8, "p", 29);
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "p", 30);
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(12, "button", 31);
    i0.ɵɵlistener("click", function TemplateProfileCreateComponent_section_33_Template_button_click_12_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r216); const category_r11 = restoredCtx.$implicit; const i_r12 = restoredCtx.index; const ctx_r218 = i0.ɵɵnextContext(); $event.stopPropagation(); return i0.ɵɵresetView(ctx_r218.onExpendMore({ event: $event, field: category_r11 }, i_r12)); });
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
    i0.ɵɵproperty("id", category_r11.name);
    i0.ɵɵadvance(9);
    i0.ɵɵtextInterpolate1(" ", category_r11.name, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2(" ", ctx_r4.locale == null ? null : ctx_r4.locale.CATEGORY_SUBTITLE, " ", ctx_r4.catNameStart(category_r11.name) ? "l'" + category_r11.name : category_r11.name, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", !category_r11.expandMore);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", category_r11.expandMore);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", category_r11.forms);
} }
function TemplateProfileCreateComponent_div_42_ng_container_32_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r229 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 102)(1, "mat-slide-toggle", 103);
    i0.ɵɵlistener("ngModelChange", function TemplateProfileCreateComponent_div_42_ng_container_32_div_6_Template_mat_slide_toggle_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r229); const ctx_r228 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r228.currentEditBlock.defaultValue = $event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "span", 104);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r220 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", ctx_r220.currentEditBlock.defaultValue)("ngModelOptions", i0.ɵɵpureFunction0(3, _c0));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r220.locale == null ? null : ctx_r220.locale.DEFAULT_VALUE);
} }
function TemplateProfileCreateComponent_div_42_ng_container_32_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r231 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 105)(1, "mat-checkbox", 106);
    i0.ɵɵlistener("ngModelChange", function TemplateProfileCreateComponent_div_42_ng_container_32_div_7_Template_mat_checkbox_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r231); const ctx_r230 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r230.currentEditBlock.value = $event); });
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r221 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", ctx_r221.currentEditBlock.value)("ngModelOptions", i0.ɵɵpureFunction0(3, _c0));
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r221.locale == null ? null : ctx_r221.locale.DEFAULT_CHECKED, " ");
} }
function TemplateProfileCreateComponent_div_42_ng_container_32_mat_form_field_8_mat_chip_6_Template(rf, ctx) { if (rf & 1) {
    const _r238 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-chip", 113);
    i0.ɵɵlistener("dblclick", function TemplateProfileCreateComponent_div_42_ng_container_32_mat_form_field_8_mat_chip_6_Template_mat_chip_dblclick_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r238); const option_r236 = restoredCtx.$implicit; const ctx_r237 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r237.onCheckedChipBlock(option_r236, ctx_r237.currentEditBlock)); })("click", function TemplateProfileCreateComponent_div_42_ng_container_32_mat_form_field_8_mat_chip_6_Template_mat_chip_click_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r238); const option_r236 = restoredCtx.$implicit; const ctx_r239 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r239.onEditChip(option_r236)); })("removed", function TemplateProfileCreateComponent_div_42_ng_container_32_mat_form_field_8_mat_chip_6_Template_mat_chip_removed_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r238); const option_r236 = restoredCtx.$implicit; const ctx_r240 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r240.removeKeywordBlock(option_r236, ctx_r240.currentEditBlock)); });
    i0.ɵɵtext(1);
    i0.ɵɵelementStart(2, "mat-icon", 114);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const option_r236 = ctx.$implicit;
    const ctx_r234 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("selected", option_r236.checked)("value", option_r236.value)("removable", true);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", option_r236.value, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r234.locale == null ? null : ctx_r234.locale.CANCEL);
} }
function TemplateProfileCreateComponent_div_42_ng_container_32_mat_form_field_8_Template(rf, ctx) { if (rf & 1) {
    const _r242 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-form-field", 107)(1, "mat-label");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "mat-chip-list", 108, 109);
    i0.ɵɵlistener("cdkDropListDropped", function TemplateProfileCreateComponent_div_42_ng_container_32_mat_form_field_8_Template_mat_chip_list_cdkDropListDropped_3_listener($event) { i0.ɵɵrestoreView(_r242); const ctx_r241 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r241.drop($event)); });
    i0.ɵɵtemplate(6, TemplateProfileCreateComponent_div_42_ng_container_32_mat_form_field_8_mat_chip_6_Template, 4, 5, "mat-chip", 110);
    i0.ɵɵelementStart(7, "input", 111, 112);
    i0.ɵɵlistener("matChipInputTokenEnd", function TemplateProfileCreateComponent_div_42_ng_container_32_mat_form_field_8_Template_input_matChipInputTokenEnd_7_listener($event) { i0.ɵɵrestoreView(_r242); const ctx_r243 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r243.addKeywordFromInputBlock($event, ctx_r243.currentEditBlock, ctx_r243.prevValue)); })("keyup", function TemplateProfileCreateComponent_div_42_ng_container_32_mat_form_field_8_Template_input_keyup_7_listener($event) { i0.ɵɵrestoreView(_r242); const ctx_r244 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r244.onKeyUpChip($event, ctx_r244.currentEditBlock)); })("ngModelChange", function TemplateProfileCreateComponent_div_42_ng_container_32_mat_form_field_8_Template_input_ngModelChange_7_listener($event) { i0.ɵɵrestoreView(_r242); const ctx_r245 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r245.currentChip = $event); });
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const _r233 = i0.ɵɵreference(5);
    const ctx_r222 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r222.locale == null ? null : ctx_r222.locale.DEFAULT_VALUE, " ");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("cdkDropListData", ctx_r222.currentEditBlock.defaultValue);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", ctx_r222.currentEditBlock.defaultValue);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("matChipInputFor", _r233)("matChipInputAddOnBlur", true)("matChipInputSeparatorKeyCodes", ctx_r222.separatorKeysCodes)("ngModel", ctx_r222.currentChip)("ngModelOptions", i0.ɵɵpureFunction0(8, _c0));
} }
function TemplateProfileCreateComponent_div_42_ng_container_32_mat_form_field_9_Template(rf, ctx) { if (rf & 1) {
    const _r247 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-form-field", 85)(1, "mat-label");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "input", 115);
    i0.ɵɵlistener("ngModelChange", function TemplateProfileCreateComponent_div_42_ng_container_32_mat_form_field_9_Template_input_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r247); const ctx_r246 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r246.currentEditBlock.defaultValue = $event); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r223 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r223.locale == null ? null : ctx_r223.locale.DEFAULT_VALUE);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModelOptions", i0.ɵɵpureFunction0(3, _c0))("ngModel", ctx_r223.currentEditBlock.defaultValue);
} }
function TemplateProfileCreateComponent_div_42_ng_container_32_mat_form_field_10_Template(rf, ctx) { if (rf & 1) {
    const _r249 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-form-field", 85)(1, "mat-label");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "input", 116);
    i0.ɵɵlistener("ngModelChange", function TemplateProfileCreateComponent_div_42_ng_container_32_mat_form_field_10_Template_input_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r249); const ctx_r248 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r248.currentEditBlock.defaultValue = $event); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r224 = i0.ɵɵnextContext(3);
    i0.ɵɵstyleProp("opacity", ctx_r224.currentEditBlock.type !== "tel" ? 1 : 0);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r224.locale == null ? null : ctx_r224.locale.DEFAULT_VALUE);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("type", ctx_r224.currentEditBlock.type)("disabled", ctx_r224.currentEditBlock.type === "tel")("ngModelOptions", i0.ɵɵpureFunction0(7, _c0))("ngModel", ctx_r224.currentEditBlock.defaultValue);
} }
function TemplateProfileCreateComponent_div_42_ng_container_32_ng_container_21_mat_option_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 121);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r254 = ctx.$implicit;
    i0.ɵɵproperty("value", item_r254.key);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1("", item_r254.label, " ");
} }
function TemplateProfileCreateComponent_div_42_ng_container_32_ng_container_21_mat_form_field_6_mat_option_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 121);
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
    i0.ɵɵelementStart(0, "mat-form-field", 117)(1, "mat-label");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "mat-select", 118);
    i0.ɵɵlistener("ngModelChange", function TemplateProfileCreateComponent_div_42_ng_container_32_ng_container_21_mat_form_field_6_Template_mat_select_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r258); const ctx_r257 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r257.s1 = $event); })("selectionChange", function TemplateProfileCreateComponent_div_42_ng_container_32_ng_container_21_mat_form_field_6_Template_mat_select_selectionChange_3_listener($event) { i0.ɵɵrestoreView(_r258); const ctx_r259 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r259.onSelectCondition("s1", "s2", $event.value)); });
    i0.ɵɵtemplate(4, TemplateProfileCreateComponent_div_42_ng_container_32_ng_container_21_mat_form_field_6_mat_option_4_Template, 2, 2, "mat-option", 119);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r251 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", ctx_r251.locale == null ? null : ctx_r251.locale.SELECT_SUB_CATEGORY, " (s1)");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", ctx_r251.s1)("ngModelOptions", i0.ɵɵpureFunction0(4, _c0));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r251.conditionData.s1);
} }
function TemplateProfileCreateComponent_div_42_ng_container_32_ng_container_21_mat_form_field_7_mat_option_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 121);
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
    i0.ɵɵelementStart(0, "mat-form-field", 117)(1, "mat-label");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "mat-select", 118);
    i0.ɵɵlistener("ngModelChange", function TemplateProfileCreateComponent_div_42_ng_container_32_ng_container_21_mat_form_field_7_Template_mat_select_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r263); const ctx_r262 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r262.s2 = $event); })("selectionChange", function TemplateProfileCreateComponent_div_42_ng_container_32_ng_container_21_mat_form_field_7_Template_mat_select_selectionChange_3_listener($event) { i0.ɵɵrestoreView(_r263); const ctx_r264 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r264.onSelectCondition("s2", "s3", $event.value)); });
    i0.ɵɵtemplate(4, TemplateProfileCreateComponent_div_42_ng_container_32_ng_container_21_mat_form_field_7_mat_option_4_Template, 2, 2, "mat-option", 119);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r252 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", ctx_r252.locale == null ? null : ctx_r252.locale.SELECT_SUB_CATEGORY, " (s2)");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", ctx_r252.s2)("ngModelOptions", i0.ɵɵpureFunction0(4, _c0));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r252.conditionData.s2);
} }
function TemplateProfileCreateComponent_div_42_ng_container_32_ng_container_21_mat_form_field_8_mat_option_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 121);
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
    i0.ɵɵelementStart(0, "mat-form-field", 117)(1, "mat-label");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "mat-select", 118);
    i0.ɵɵlistener("ngModelChange", function TemplateProfileCreateComponent_div_42_ng_container_32_ng_container_21_mat_form_field_8_Template_mat_select_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r268); const ctx_r267 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r267.s3 = $event); })("selectionChange", function TemplateProfileCreateComponent_div_42_ng_container_32_ng_container_21_mat_form_field_8_Template_mat_select_selectionChange_3_listener($event) { i0.ɵɵrestoreView(_r268); const ctx_r269 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r269.onSelectCondition("s3", "s4", $event.value)); });
    i0.ɵɵtemplate(4, TemplateProfileCreateComponent_div_42_ng_container_32_ng_container_21_mat_form_field_8_mat_option_4_Template, 2, 2, "mat-option", 119);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r253 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", ctx_r253.locale == null ? null : ctx_r253.locale.SELECT_SUB_CATEGORY, " (s3)");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", ctx_r253.s3)("ngModelOptions", i0.ɵɵpureFunction0(4, _c0));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r253.conditionData.s3);
} }
function TemplateProfileCreateComponent_div_42_ng_container_32_ng_container_21_Template(rf, ctx) { if (rf & 1) {
    const _r271 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "mat-form-field", 117)(2, "mat-label");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "mat-select", 118);
    i0.ɵɵlistener("ngModelChange", function TemplateProfileCreateComponent_div_42_ng_container_32_ng_container_21_Template_mat_select_ngModelChange_4_listener($event) { i0.ɵɵrestoreView(_r271); const ctx_r270 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r270.all = $event); })("selectionChange", function TemplateProfileCreateComponent_div_42_ng_container_32_ng_container_21_Template_mat_select_selectionChange_4_listener($event) { i0.ɵɵrestoreView(_r271); const ctx_r272 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r272.onSelectCondition("all", "s1", $event.value)); });
    i0.ɵɵtemplate(5, TemplateProfileCreateComponent_div_42_ng_container_32_ng_container_21_mat_option_5_Template, 2, 2, "mat-option", 119);
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(6, TemplateProfileCreateComponent_div_42_ng_container_32_ng_container_21_mat_form_field_6_Template, 5, 5, "mat-form-field", 120);
    i0.ɵɵtemplate(7, TemplateProfileCreateComponent_div_42_ng_container_32_ng_container_21_mat_form_field_7_Template, 5, 5, "mat-form-field", 120);
    i0.ɵɵtemplate(8, TemplateProfileCreateComponent_div_42_ng_container_32_ng_container_21_mat_form_field_8_Template, 5, 5, "mat-form-field", 120);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r225 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r225.locale == null ? null : ctx_r225.locale.SELECT_CATEGORY);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", ctx_r225.all)("ngModelOptions", i0.ɵɵpureFunction0(7, _c0));
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
    i0.ɵɵelementStart(0, "mat-radio-button", 124);
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
    i0.ɵɵelementStart(0, "mat-radio-group", 122);
    i0.ɵɵlistener("ngModelChange", function TemplateProfileCreateComponent_div_42_ng_container_32_mat_radio_group_22_Template_mat_radio_group_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r276); const ctx_r275 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r275.currentEditBlock.condition.value = $event); });
    i0.ɵɵtemplate(1, TemplateProfileCreateComponent_div_42_ng_container_32_mat_radio_group_22_mat_radio_button_1_Template, 2, 2, "mat-radio-button", 123);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r226 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("ngModel", ctx_r226.currentEditBlock.condition.value)("ngModelOptions", i0.ɵɵpureFunction0(3, _c0));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r226.onGetDefaultValue());
} }
function TemplateProfileCreateComponent_div_42_ng_container_32_button_24_Template(rf, ctx) { if (rf & 1) {
    const _r278 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 100);
    i0.ɵɵlistener("click", function TemplateProfileCreateComponent_div_42_ng_container_32_button_24_Template_button_click_0_listener($event) { i0.ɵɵrestoreView(_r278); const ctx_r277 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r277.onAddNewSubLevelFieldBlock($event)); });
    i0.ɵɵtext(1);
    i0.ɵɵelementStart(2, "mat-icon");
    i0.ɵɵtext(3, "device_hub ");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r227 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("disabled", !ctx_r227.currentEditBlock.editable);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1("", ctx_r227.locale == null ? null : ctx_r227.locale.SUB_CATEGORY, " ");
} }
const _c1 = function () { return ["select", "radio", "checkbox_multiple"]; };
function TemplateProfileCreateComponent_div_42_ng_container_32_Template(rf, ctx) { if (rf & 1) {
    const _r280 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "mat-form-field", 85)(2, "mat-label");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "input", 86);
    i0.ɵɵlistener("ngModelChange", function TemplateProfileCreateComponent_div_42_ng_container_32_Template_input_ngModelChange_4_listener($event) { i0.ɵɵrestoreView(_r280); const ctx_r279 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r279.currentEditBlock.label = $event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementContainerStart(5, 87);
    i0.ɵɵtemplate(6, TemplateProfileCreateComponent_div_42_ng_container_32_div_6_Template, 4, 4, "div", 88);
    i0.ɵɵtemplate(7, TemplateProfileCreateComponent_div_42_ng_container_32_div_7_Template, 3, 4, "div", 89);
    i0.ɵɵtemplate(8, TemplateProfileCreateComponent_div_42_ng_container_32_mat_form_field_8_Template, 9, 9, "mat-form-field", 90);
    i0.ɵɵtemplate(9, TemplateProfileCreateComponent_div_42_ng_container_32_mat_form_field_9_Template, 4, 4, "mat-form-field", 91);
    i0.ɵɵtemplate(10, TemplateProfileCreateComponent_div_42_ng_container_32_mat_form_field_10_Template, 4, 8, "mat-form-field", 92);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementStart(11, "div", 93)(12, "div", 94)(13, "span");
    i0.ɵɵtext(14);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "mat-slide-toggle", 95);
    i0.ɵɵlistener("ngModelChange", function TemplateProfileCreateComponent_div_42_ng_container_32_Template_mat_slide_toggle_ngModelChange_15_listener($event) { i0.ɵɵrestoreView(_r280); const ctx_r281 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r281.currentEditBlock.isMandatory = $event); });
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(16, "div", 96)(17, "div", 94)(18, "span");
    i0.ɵɵtext(19);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(20, "mat-slide-toggle", 95);
    i0.ɵɵlistener("ngModelChange", function TemplateProfileCreateComponent_div_42_ng_container_32_Template_mat_slide_toggle_ngModelChange_20_listener($event) { i0.ɵɵrestoreView(_r280); const ctx_r282 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r282.currentEditBlock.isConditional = $event); });
    i0.ɵɵelementEnd()()();
    i0.ɵɵtemplate(21, TemplateProfileCreateComponent_div_42_ng_container_32_ng_container_21_Template, 9, 8, "ng-container", 5);
    i0.ɵɵtemplate(22, TemplateProfileCreateComponent_div_42_ng_container_32_mat_radio_group_22_Template, 2, 4, "mat-radio-group", 97);
    i0.ɵɵelementStart(23, "div", 98);
    i0.ɵɵtemplate(24, TemplateProfileCreateComponent_div_42_ng_container_32_button_24_Template, 4, 2, "button", 99);
    i0.ɵɵelementStart(25, "button", 100);
    i0.ɵɵlistener("click", function TemplateProfileCreateComponent_div_42_ng_container_32_Template_button_click_25_listener($event) { i0.ɵɵrestoreView(_r280); const ctx_r283 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r283.onDuplicatedBlock($event)); });
    i0.ɵɵtext(26);
    i0.ɵɵelementStart(27, "mat-icon");
    i0.ɵɵtext(28, "filter_none");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(29, "button", 101);
    i0.ɵɵlistener("click", function TemplateProfileCreateComponent_div_42_ng_container_32_Template_button_click_29_listener($event) { i0.ɵɵrestoreView(_r280); const ctx_r284 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r284.onRemoveFieldBlock($event)); });
    i0.ɵɵtext(30);
    i0.ɵɵelementStart(31, "mat-icon");
    i0.ɵɵtext(32, " delete ");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r219 = i0.ɵɵnextContext(2);
    let tmp_15_0;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r219.locale == null ? null : ctx_r219.locale.NAME_LABEL);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", ctx_r219.currentEditBlock.label)("ngModelOptions", i0.ɵɵpureFunction0(21, _c0));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitch", ctx_r219.currentEditBlock.type);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", "toggle");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", "checkbox");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", i0.ɵɵpureFunction0(22, _c1).includes(ctx_r219.currentEditBlock.type) ? ctx_r219.currentEditBlock.type : !ctx_r219.currentEditBlock.type);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", "textarea");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r219.locale == null ? null : ctx_r219.locale.REQUIRED);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", ctx_r219.currentEditBlock.isMandatory)("ngModelOptions", i0.ɵɵpureFunction0(23, _c0));
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r219.locale == null ? null : ctx_r219.locale.CONDITIONAL_VISIBILITY);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", ctx_r219.currentEditBlock.isConditional)("ngModelOptions", i0.ɵɵpureFunction0(24, _c0));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r219.currentEditBlock == null ? null : ctx_r219.currentEditBlock.isConditional);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r219.currentEditBlock.isConditional && ctx_r219.onGetDefaultValue() && ((tmp_15_0 = ctx_r219.onGetDefaultValue()) == null ? null : tmp_15_0.length) > 0);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r219.paramsIndex.length < 4);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("disabled", !ctx_r219.currentEditBlock.editable);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r219.locale == null ? null : ctx_r219.locale.DUPLICATE_BLOCK);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("disabled", !ctx_r219.currentEditBlock.editable);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1("", ctx_r219.locale == null ? null : ctx_r219.locale.DELETE_BLOCK, " ");
} }
function TemplateProfileCreateComponent_div_42_Template(rf, ctx) { if (rf & 1) {
    const _r286 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 69)(1, "h3");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 70)(4, "mat-form-field", 71)(5, "mat-label");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "mat-select", 72);
    i0.ɵɵlistener("click", function TemplateProfileCreateComponent_div_42_Template_mat_select_click_7_listener() { i0.ɵɵrestoreView(_r286); const ctx_r285 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r285.onOpenTypeDialog(ctx_r285.currentEditBlock)); })("ngModelChange", function TemplateProfileCreateComponent_div_42_Template_mat_select_ngModelChange_7_listener($event) { i0.ɵɵrestoreView(_r286); const ctx_r287 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r287.currentEditBlock.type = $event); })("ngModelChange", function TemplateProfileCreateComponent_div_42_Template_mat_select_ngModelChange_7_listener() { i0.ɵɵrestoreView(_r286); const ctx_r288 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r288.onChangeTypeBlock(ctx_r288.currentEditBlock)); });
    i0.ɵɵelementStart(8, "mat-option", 73);
    i0.ɵɵtext(9, "Text(80)");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "mat-option", 74);
    i0.ɵɵtext(11, "Text(80+)");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "mat-option", 75);
    i0.ɵɵtext(13, "Radio");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "mat-option", 76);
    i0.ɵɵtext(15, "Selector");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "mat-option", 77);
    i0.ɵɵtext(17, "Toggle");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "mat-option", 78);
    i0.ɵɵtext(19, "Checkbox");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(20, "mat-option", 79);
    i0.ɵɵtext(21, "Checkbox multiple");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(22, "mat-option", 80);
    i0.ɵɵtext(23, "Email");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(24, "mat-option", 81);
    i0.ɵɵtext(25, "Password");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(26, "mat-option", 82);
    i0.ɵɵtext(27, "Date");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(28, "mat-option", 83);
    i0.ɵɵtext(29, "Phone");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(30, "mat-option", 84);
    i0.ɵɵtext(31, "None");
    i0.ɵɵelementEnd()()();
    i0.ɵɵtemplate(32, TemplateProfileCreateComponent_div_42_ng_container_32_Template, 33, 25, "ng-container", 5);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("", ctx_r5.locale == null ? null : ctx_r5.locale.SETTING_OF_BLOCK, " ", ctx_r5.currentEditBlock.label, "");
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r5.locale == null ? null : ctx_r5.locale.TYPE_OF_BLOCK);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", ctx_r5.currentEditBlock.type)("ngModelOptions", i0.ɵɵpureFunction0(6, _c0));
    i0.ɵɵadvance(25);
    i0.ɵɵproperty("ngIf", ctx_r5.currentEditBlock.type !== "none");
} }
function TemplateProfileCreateComponent_div_43_mat_option_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 121);
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
    i0.ɵɵelementStart(0, "div", 69)(1, "h3");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 125)(4, "mat-form-field", 85)(5, "mat-label");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "input", 86);
    i0.ɵɵlistener("ngModelChange", function TemplateProfileCreateComponent_div_43_Template_input_ngModelChange_7_listener() { i0.ɵɵrestoreView(_r292); const ctx_r291 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r291.onChangeCategoryName()); })("ngModelChange", function TemplateProfileCreateComponent_div_43_Template_input_ngModelChange_7_listener($event) { i0.ɵɵrestoreView(_r292); const ctx_r293 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r293.currentEditBlock.name = $event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(8, "mat-form-field", 117)(9, "mat-label");
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "mat-select", 126);
    i0.ɵɵlistener("ngModelChange", function TemplateProfileCreateComponent_div_43_Template_mat_select_ngModelChange_11_listener($event) { i0.ɵɵrestoreView(_r292); const ctx_r294 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r294.currentEditBlock.selector.value = $event); });
    i0.ɵɵtemplate(12, TemplateProfileCreateComponent_div_43_mat_option_12_Template, 2, 2, "mat-option", 119);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(13, "div", 98)(14, "button", 127);
    i0.ɵɵlistener("click", function TemplateProfileCreateComponent_div_43_Template_button_click_14_listener($event) { i0.ɵɵrestoreView(_r292); const ctx_r295 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r295.onAddNewSubLevelFieldBlock($event)); });
    i0.ɵɵtext(15);
    i0.ɵɵelementStart(16, "mat-icon");
    i0.ɵɵtext(17, " device_hub ");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(18, "button", 127);
    i0.ɵɵlistener("click", function TemplateProfileCreateComponent_div_43_Template_button_click_18_listener($event) { i0.ɵɵrestoreView(_r292); const ctx_r296 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r296.onDuplicatedBlock($event)); });
    i0.ɵɵtext(19);
    i0.ɵɵelementStart(20, "mat-icon");
    i0.ɵɵtext(21, "filter_none ");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(22, "button", 101);
    i0.ɵɵlistener("click", function TemplateProfileCreateComponent_div_43_Template_button_click_22_listener($event) { i0.ɵɵrestoreView(_r292); const ctx_r297 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r297.onRemoveFieldBlock($event)); });
    i0.ɵɵtext(23);
    i0.ɵɵelementStart(24, "mat-icon");
    i0.ɵɵtext(25, " delete");
    i0.ɵɵelementEnd()()()()();
} if (rf & 2) {
    const ctx_r6 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("", ctx_r6.locale == null ? null : ctx_r6.locale.SECTION_SETTING, " ", ctx_r6.currentEditBlock.name, "");
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r6.locale == null ? null : ctx_r6.locale.SECTION_NAME);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", ctx_r6.currentEditBlock.name)("ngModelOptions", i0.ɵɵpureFunction0(13, _c0));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r6.locale == null ? null : ctx_r6.locale.MANAGEMENT_TEAM);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", ctx_r6.currentEditBlock.selector.value)("ngModelOptions", i0.ɵɵpureFunction0(14, _c0));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r6.currentEditBlock.selector.defaultValue);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("", ctx_r6.locale == null ? null : ctx_r6.locale.SUB_CATEGORY, " ");
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r6.locale == null ? null : ctx_r6.locale.DUPLICATE_BLOCK);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("disabled", !ctx_r6.currentEditBlock.editable);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1("", ctx_r6.locale == null ? null : ctx_r6.locale.DELETE_BLOCK, " ");
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
    } }, decls: 44, vars: 14, consts: [[1, "header-create-profile"], [1, "header-create-profile-top"], [3, "click"], [1, "create-profile-action"], ["mat-button", "", "type", "submit", 1, "register-button", 3, "click"], [4, "ngIf"], ["mat-button", "", "type", "submit", 1, "register-button", "live-button", 3, "click"], ["mat-button", "", "type", "submit", 1, "register-button", "live-button", "forward", 3, "disabled", "click"], [1, "create-profile-menus"], ["class", "li-title", 3, "class", "id", "click", 4, "ngFor", "ngForOf"], ["mat-mini-fab", "", "color", "transparent", 3, "click"], [3, "formGroup"], [1, "category"], ["cdkDropListGroup", "", 1, "fields"], ["id", "categories-id", "cdkDropList", "", 1, "fields-inner", "example-list", "mt-10", 3, "cdkDropListData", "cdkDropListDropped", "scroll"], ["parentList", "cdkDropList"], ["class", "category-item section-item", "cdkDrag", "", 3, "id", "paddingBottom", "class", "click", 4, "ngFor", "ngForOf"], [1, "add-button-container", "add-category-button", "add-step"], [2, "background-color", "transparent"], [2, "height", "400px"], [1, "field-property"], ["class", "property-content", 4, "ngIf"], [1, "li-title", 3, "id", "click"], ["cdkDrag", "", 1, "category-item", "section-item", 3, "id", "click"], ["cdkDragHandle", "", 1, "left-action", "move-icons"], ["mat-raised-button", "", 1, "transparent-button", 3, "click"], [1, "drag-icon"], [1, "field-content"], [1, "field-item"], [1, "full-width", "input-category-name"], [1, "sub-category-name"], ["mat-mini-fab", "", "color", "primary", 1, "expand-button", 3, "click"], ["class", "child-list", "cdkDropList", "", 3, "cdkDropListData", "cdkDropListDropped", 4, "ngIf"], ["cdkDropList", "", 1, "child-list", 3, "cdkDropListData", "cdkDropListDropped"], ["childList", "cdkDropList"], ["class", "field-box", 3, "id", "width", 4, "ngFor", "ngForOf"], [1, "field-box", 3, "id"], ["cdkDrag", ""], [1, "fields-content"], ["class", "button-action", 4, "ngIf"], [1, "fields-container"], ["class", "sub-header", 4, "ngIf"], [3, "field", "length", "i", "j", "blink", "conditionData", "onCheckValue", "onAddKeywordFromInput", "onKeyPress", "onAddNewField", "onRemoveField", "onChangeType", "onRemoveKeyword", "onAddNewSubLevelField", "onExpendMore", "onChangeLabel", "onCheckedChip", "onDrop", "onCheckedDefault", "onEditBlock"], ["class", "child", 4, "ngIf"], ["class", "add-button-container add-button-sub-category", 4, "ngIf"], [1, "button-action"], [1, "sub-header"], ["mat-raised-button", "", 1, "transparent-button", "setting", 3, "click"], [1, "setting-icon"], ["mat-mini-fab", "", "color", "primary", 1, "expand-button", 3, "disabled", "click"], [1, "child"], ["class", "child-content", "cdkDropList", "", 3, "cdkDropListData", "cdkDropListDropped", 4, "ngIf"], ["cdkDropList", "", 1, "child-content", 3, "cdkDropListData", "cdkDropListDropped"], ["class", "", "style", "margin-bottom: 20px", 3, "id", "width", 4, "ngFor", "ngForOf"], [1, "", 2, "margin-bottom", "20px", 3, "id"], ["class", "button-action child-2-background", 4, "ngIf"], [3, "field", "length", "i", "blink", "j", "conditionData", "onCheckValue", "onAddKeywordFromInput", "onKeyPress", "onAddNewField", "onRemoveField", "onChangeType", "onRemoveKeyword", "onAddNewSubLevelField", "onExpendMore", "onChangeLabel", "onCheckedChip", "onDrop", "onCheckedDefault", "onEditBlock"], ["class", "add-button-sub-category", 4, "ngIf"], [1, "button-action", "child-2-background"], ["type", "text", "required", "", "placeholder", "Saisir le nom de la sous cat\u00E9gorie", 1, "full-width", "input-category-name", 3, "readonly", "ngModel", "ngModelOptions", "ngModelChange"], ["class", "", 3, "id", "width", 4, "ngFor", "ngForOf"], [1, "", 3, "id"], ["class", "button-action child-3-background", 4, "ngIf"], [3, "field", "length", "blink", "i", "j", "conditionData", "onCheckValue", "onAddKeywordFromInput", "onKeyPress", "onAddNewField", "onRemoveField", "onChangeType", "onRemoveKeyword", "onAddNewSubLevelField", "onExpendMore", "onChangeLabel", "onCheckedChip", "onDrop", "onCheckedDefault", "onEditBlock"], [1, "button-action", "child-3-background"], [1, "add-button-sub-category"], ["mat-raised-button", "", "color", "primary", 2, "margin", "10px auto", 3, "click"], [1, "add-button-container", "add-button-sub-category"], ["mat-raised-button", "", "color", "primary", 1, "add-button", 2, "margin", "10px auto", "padding", "10px 0", 3, "disabled", "click"], [1, "property-content"], [1, "property-content-inner", 2, "width", "100%"], ["appearance", "outline", 1, "form-field", "mat-select", "full-width", 2, "cursor", "pointer"], ["disabled", "true", "required", "", 1, "select-type-class", 3, "ngModel", "ngModelOptions", "click", "ngModelChange"], ["value", "text"], ["value", "textarea"], ["value", "radio"], ["value", "select"], ["value", "toggle"], ["value", "checkbox"], ["value", "checkbox_multiple"], ["value", "email"], ["value", "password"], ["value", "date"], ["value", "tel"], ["value", "none"], ["appearance", "outline", 1, "form-field", "full-width"], ["type", "text", "matInput", "", "required", "", "placeholder", "", 3, "ngModel", "ngModelOptions", "ngModelChange"], [3, "ngSwitch"], ["class", "flex-auto", "style", "display: flex;align-items: flex-end;margin: 10px 0;", 4, "ngSwitchCase"], ["class", "flex-auto", 4, "ngSwitchCase"], ["class", "flex-auto full-width", "appearance", "outline", 4, "ngSwitchCase"], ["class", "form-field full-width", "appearance", "outline", 4, "ngSwitchCase"], ["class", "form-field full-width", "appearance", "outline", 3, "opacity", 4, "ngSwitchDefault"], [1, "mandatory", "top-10", "bottom-10"], [1, "toogle-button"], ["color", "#6FE8D7", 3, "ngModel", "ngModelOptions", "ngModelChange"], [1, "mandatory", "top-10"], ["aria-labelledby", "example-radio-group-label", "class", "example-radio-group", 3, "ngModel", "ngModelOptions", "ngModelChange", 4, "ngIf"], [1, "bloc-action"], ["mat-button", "", 3, "disabled", "click", 4, "ngIf"], ["mat-button", "", 3, "disabled", "click"], ["mat-button", "", 1, "delete-bloc", 3, "disabled", "click"], [1, "flex-auto", 2, "display", "flex", "align-items", "flex-end", "margin", "10px 0"], ["color", "#6FE8D7", 1, "form-field", 3, "ngModel", "ngModelOptions", "ngModelChange"], [2, "margin-left", "10px"], [1, "flex-auto"], [1, "form-field", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["appearance", "outline", 1, "flex-auto", "full-width"], ["cdkDropList", "", "aria-label", "Video keywords; let index=index", "multiple", "", "selectable", "", 3, "cdkDropListData", "cdkDropListDropped"], ["childList", "cdkDropList", "chipList", ""], ["style", "min-height: 25px;width: auto;", "cdkDrag", "", 3, "selected", "value", "removable", "dblclick", "click", "removed", 4, "ngFor", "ngForOf"], ["placeholder", "add...", 3, "matChipInputFor", "matChipInputAddOnBlur", "matChipInputSeparatorKeyCodes", "ngModel", "ngModelOptions", "matChipInputTokenEnd", "keyup", "ngModelChange"], ["chipsInput", ""], ["cdkDrag", "", 2, "min-height", "25px", "width", "auto", 3, "selected", "value", "removable", "dblclick", "click", "removed"], ["matChipRemove", ""], ["type", "text", "matInput", "", "placeholder", "Description...", 3, "ngModelOptions", "ngModel", "ngModelChange"], ["matInput", "", "placeholder", "", 3, "type", "disabled", "ngModelOptions", "ngModel", "ngModelChange"], ["appearance", "outline", 1, "form-field", "mat-select", "full-width"], [3, "ngModel", "ngModelOptions", "ngModelChange", "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], ["class", "form-field mat-select full-width", "appearance", "outline", 4, "ngIf"], [3, "value"], ["aria-labelledby", "example-radio-group-label", 1, "example-radio-group", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["class", "example-radio-button", "style", "margin-right: 10px", 3, "value", 4, "ngFor", "ngForOf"], [1, "example-radio-button", 2, "margin-right", "10px", 3, "value"], [1, "property-content-inner"], ["required", "", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["mat-button", "", 3, "click"]], template: function TemplateProfileCreateComponent_Template(rf, ctx) { if (rf & 1) {
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
        i0.ɵɵelementStart(28, "form", 11)(29, "div", 12)(30, "div", 13)(31, "div", 14, 15);
        i0.ɵɵlistener("cdkDropListDropped", function TemplateProfileCreateComponent_Template_div_cdkDropListDropped_31_listener($event) { return ctx.drop($event); })("scroll", function TemplateProfileCreateComponent_Template_div_scroll_31_listener($event) { return ctx.onScroll($event); });
        i0.ɵɵtemplate(33, TemplateProfileCreateComponent_section_33_Template, 16, 11, "section", 16);
        i0.ɵɵelementStart(34, "div", 17)(35, "button", 2);
        i0.ɵɵlistener("click", function TemplateProfileCreateComponent_Template_button_click_35_listener($event) { return ctx.onAddNewCategory($event); });
        i0.ɵɵtext(36);
        i0.ɵɵelementStart(37, "mat-icon");
        i0.ɵɵtext(38, "add");
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementStart(39, "section", 18);
        i0.ɵɵelement(40, "div", 19);
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementStart(41, "div", 20);
        i0.ɵɵtemplate(42, TemplateProfileCreateComponent_div_42_Template, 33, 7, "div", 21);
        i0.ɵɵtemplate(43, TemplateProfileCreateComponent_div_43_Template, 26, 15, "div", 21);
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
        i0.ɵɵadvance(3);
        i0.ɵɵtextInterpolate1(" ", ctx.locale == null ? null : ctx.locale.ADD_STEP, " ");
        i0.ɵɵadvance(6);
        i0.ɵɵproperty("ngIf", ctx.isBlock && ctx.currentEditBlock);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.isSection && ctx.currentEditBlock);
    } }, dependencies: [i1.ɵNgNoValidate, i1.DefaultValueAccessor, i1.NgControlStatus, i1.NgControlStatusGroup, i1.RequiredValidator, i1.NgModel, i6.MatFormField, i6.MatLabel, i7.MatButton, i8.NgForOf, i8.NgIf, i8.NgSwitch, i8.NgSwitchCase, i8.NgSwitchDefault, i1.FormGroupDirective, i9.MatCheckbox, i10.MatIcon, i11.MatSelect, i12.MatOption, i13.MatInput, i14.MatChipList, i14.MatChip, i14.MatChipInput, i14.MatChipRemove, i15.MatRadioGroup, i15.MatRadioButton, i16.CdkDropList, i16.CdkDropListGroup, i16.CdkDrag, i16.CdkDragHandle, i17.NativeElementInjectorDirective, i18.MatSlideToggle, i19.SubTemplateProfileComponent, i20.LoadingPageComponent], styles: ["main[_ngcontent-%COMP%]{background:#f4f7f9 0% 0% no-repeat padding-box;height:100vh;display:flex;flex-direction:column;align-items:center;padding:25px}main[_ngcontent-%COMP%]   .disabled[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{background-color:transparent!important}main[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{display:flex;height:89%;width:100%}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]{width:786px;margin-top:20vh;background:#ffffff 0% 0% no-repeat padding-box;border:1px solid #dce4e9;border-radius:6px;opacity:1;margin:auto;padding:0 25px;align-self:center}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{text-align:center;letter-spacing:0px;color:#171f26}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   label[_ngcontent-%COMP%], main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{letter-spacing:0px;color:#171f26}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .profil-name-content[_ngcontent-%COMP%]{display:flex;align-items:center;position:relative}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .profil-name-content[_ngcontent-%COMP%]   .add-picto[_ngcontent-%COMP%]{margin-right:15px;min-width:50px;width:30px;padding:9px 12px}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .profil-name-content[_ngcontent-%COMP%]   .add-picto[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin-right:10px}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .profil-name-content[_ngcontent-%COMP%]   .list-picto[_ngcontent-%COMP%]{position:absolute;height:200px;width:100%;background:#ffffff 0% 0% no-repeat padding-box;border:1px solid #171f26;border-radius:8px;top:100%;z-index:1}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .profil-name-content[_ngcontent-%COMP%]   .list-picto[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin:15px;border:none;font-size:40px}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .profil-name-content[_ngcontent-%COMP%]   .list-picto[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]:hover{color:#830b6b!important;cursor:pointer}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .box-title-content[_ngcontent-%COMP%]{width:100%;margin:25px auto}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{letter-spacing:0px;color:#171f26}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{letter-spacing:0px;color:#171f26;text-align:center}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .link-create-profil[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:center}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{text-align:center;border:1px solid #543cb6;border-radius:7px;color:#fff;padding:.7em 2em .5em;display:flex;align-items:center;background-color:transparent;letter-spacing:0px;color:#543cb6}main[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:space-between}main[_ngcontent-%COMP%]   .header-create-profile[_ngcontent-%COMP%]{width:100%;margin:10px 15px;border-radius:5px}main[_ngcontent-%COMP%]   .header-create-profile[_ngcontent-%COMP%]   .header-create-profile-top[_ngcontent-%COMP%]{display:flex;align-items:center;text-align:center;justify-content:space-between}main[_ngcontent-%COMP%]   .header-create-profile[_ngcontent-%COMP%]   .header-create-profile-top[_ngcontent-%COMP%]   .create-profile-action[_ngcontent-%COMP%]{display:flex;align-items:center;gap:25px}main[_ngcontent-%COMP%]   .header-create-profile[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:25px;padding-bottom:5px;display:flex;align-items:center;justify-content:center}main[_ngcontent-%COMP%]   .header-create-profile[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{text-overflow:ellipsis;white-space:nowrap;overflow:hidden;font-weight:700;font-size:24px;line-height:110%;text-align:center;color:#242731;text-transform:capitalize}main[_ngcontent-%COMP%]   .header-create-profile[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin-left:15px;cursor:pointer}main[_ngcontent-%COMP%]   .header-create-profile[_ngcontent-%COMP%]   .create-profile-menus[_ngcontent-%COMP%]{max-width:100%;overflow:auto}main[_ngcontent-%COMP%]   .header-create-profile[_ngcontent-%COMP%]   .create-profile-menus[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{font-weight:600;font-size:16px;list-style:none;display:flex;align-items:center;gap:20px;padding:0}main[_ngcontent-%COMP%]   .header-create-profile[_ngcontent-%COMP%]   .create-profile-menus[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{font-weight:400;font-size:12px;cursor:pointer;text-align:left;letter-spacing:0px;color:#535760}main[_ngcontent-%COMP%]   .header-create-profile[_ngcontent-%COMP%]   .create-profile-menus[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .mat-mini-fab[_ngcontent-%COMP%]{width:28px;height:28px;line-height:24px}main[_ngcontent-%COMP%]   .header-create-profile[_ngcontent-%COMP%]   .create-profile-menus[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.li-title[_ngcontent-%COMP%]:hover{border-bottom:2px solid #723CEB}main[_ngcontent-%COMP%]   .header-create-profile[_ngcontent-%COMP%]   .create-profile-menus[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.li-title.active[_ngcontent-%COMP%]{border-bottom:2px solid #723CEB;font-weight:600}.expand-button[_ngcontent-%COMP%]{color:#5a607f!important;background-color:transparent!important;box-shadow:none!important}.input-category-name[_ngcontent-%COMP%]{font-size:15px;font-weight:500;border:none;outline:none;text-align:left;color:#171f26;font-weight:700;font-size:20px;line-height:28px;color:#242731}.sub-category-name[_ngcontent-%COMP%]{font-style:normal;font-weight:250;font-size:14px;line-height:16px;display:flex;align-items:center;color:#575f6e;word-break:break-word}.full-width[_ngcontent-%COMP%]{width:100%}.field-action[_ngcontent-%COMP%]{width:10%}.field-size[_ngcontent-%COMP%]{width:90%;margin:auto 2% auto auto}  .mat-mini-fab .mat-button-wrapper{padding:0!important}  .mat-form-field-appearance-fill .mat-form-field-flex{background-color:#fff}  .mat-select.mat-form-field-appearance-outline .mat-form-field-infix{padding:.5em 0}  .mat-select{padding:8px 0}  .mat-form-field-appearance-fill .mat-form-field-underline:before{background-color:transparent}  .mat-form-field-wrapper{padding-bottom:0!important}[_nghost-%COMP%]     .input-category-name div.mat-form-field-outline-start, [_nghost-%COMP%]     .cdk-drag-preview .input-category-name div.mat-form-field-outline-start{border-color:0!important;border-width:0px!important}[_nghost-%COMP%]     .input-category-name .mat-form-field-outline-gap{border-color:0!important;border-width:0px!important}[_nghost-%COMP%]     .input-category-name .mat-form-field-outline-end{border-color:0!important;border-width:0px!important}[_nghost-%COMP%]     .input-category-name .mat-form-field-label-wrapper{display:none}[_nghost-%COMP%]     .input-category-name .mat-form-field-appearance-outline .mat-form-field-outline{color:transparent!important}[_nghost-%COMP%]     .input-category-name .mat-form-field-infix{border-top:none}.category-action[_ngcontent-%COMP%]{display:flex;width:100%}.delete-field[_ngcontent-%COMP%]{margin:auto 2%}.radio-group[_ngcontent-%COMP%]   .mat-radio-button[_ngcontent-%COMP%]{margin-right:10px}.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary[_ngcontent-%COMP%]{background-color:#3f51b5;color:#fff;min-height:20px;font-size:10px}.move-icons[_ngcontent-%COMP%]{cursor:move}.category-item[_ngcontent-%COMP%], .cdk-drag-placeholder[_ngcontent-%COMP%]{display:flex;align-items:baseline;position:relative;width:100%;border-radius:8px;background-color:#fff;margin-bottom:15px;margin-right:5px;padding:6px 15px}.category-item[_ngcontent-%COMP%]   .left-action[_ngcontent-%COMP%], .cdk-drag-placeholder[_ngcontent-%COMP%]   .left-action[_ngcontent-%COMP%]{height:auto;width:40px;align-self:baseline;border-top-left-radius:8px;border-bottom-left-radius:8px}.category-item[_ngcontent-%COMP%]   .left-action[_ngcontent-%COMP%]   .transparent-button[_ngcontent-%COMP%], .cdk-drag-placeholder[_ngcontent-%COMP%]   .left-action[_ngcontent-%COMP%]   .transparent-button[_ngcontent-%COMP%]{background-color:transparent;box-shadow:none;width:40px;padding:0;margin:0;min-width:auto;color:#fff}.category-item[_ngcontent-%COMP%]   .left-action[_ngcontent-%COMP%]   .transparent-button[_ngcontent-%COMP%]   .drag-icon[_ngcontent-%COMP%], .cdk-drag-placeholder[_ngcontent-%COMP%]   .left-action[_ngcontent-%COMP%]   .transparent-button[_ngcontent-%COMP%]   .drag-icon[_ngcontent-%COMP%]{color:#171f26;cursor:move;margin-right:15px}.category-item[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%], .cdk-drag-placeholder[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%]{width:calc(100% - 40px);align-self:center}.category-item[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%]   .child-list[_ngcontent-%COMP%], .cdk-drag-placeholder[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%]   .child-list[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;background-color:transparent;width:103%;position:relative;margin-left:-1.5%}.category-item[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%], .cdk-drag-placeholder[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:baseline;border:transparent!important}.category-item[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]   .mat-form-field-wrapper[_ngcontent-%COMP%]   .mat-form-field-flex[_ngcontent-%COMP%]   .mat-form-field-outline[_ngcontent-%COMP%], .cdk-drag-placeholder[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]   .mat-form-field-wrapper[_ngcontent-%COMP%]   .mat-form-field-flex[_ngcontent-%COMP%]   .mat-form-field-outline[_ngcontent-%COMP%]{color:transparent!important}.category-item[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%]   .mat-form-field-outline[_ngcontent-%COMP%], .cdk-drag-placeholder[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%]   .mat-form-field-outline[_ngcontent-%COMP%]{color:transparent!important}.field-box[_ngcontent-%COMP%]{margin-bottom:15px;display:flex;align-items:center}.cdk-drag-preview[_ngcontent-%COMP%]{box-sizing:border-box;border-radius:4px;opacity:1}.cdk-drag-preview[_ngcontent-%COMP%]   .expand-button[_ngcontent-%COMP%]{color:#5a607f!important;background-color:transparent!important;box-shadow:none!important;margin-right:6px!important}.cdk-drag-placeholder[_ngcontent-%COMP%]{opacity:0}.cdk-drag-animating[_ngcontent-%COMP%]{transition:transform .25s cubic-bezier(0,0,.2,1)}.example-list.cdk-drop-list-dragging[_ngcontent-%COMP%]   .category-item[_ngcontent-%COMP%]:not(.cdk-drag-placeholder){transition:transform .25s cubic-bezier(0,0,.2,1)}.child[_ngcontent-%COMP%]{margin-left:0}.child-content[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;margin-bottom:30px}.sub-category-forms[_ngcontent-%COMP%]{margin-bottom:0!important;margin-top:10px!important}.category[_ngcontent-%COMP%]{display:flex;flex-direction:row;width:100%;height:100%}.category[_ngcontent-%COMP%]   .fields[_ngcontent-%COMP%]{width:100%;overflow:hidden;overflow-x:hidden;position:relative;padding-top:10px;height:calc(100% - 10px)}.category[_ngcontent-%COMP%]   .fields[_ngcontent-%COMP%]   .fields-inner[_ngcontent-%COMP%]{max-height:100%;height:100%;width:100%;overflow:auto}.category[_ngcontent-%COMP%]   .fields[_ngcontent-%COMP%]   .add-category-button[_ngcontent-%COMP%]{position:relative!important;width:calc(100% - 40px)!important;padding:20px 0}.category[_ngcontent-%COMP%]   .fields[_ngcontent-%COMP%]   .add-category-button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin-left:10px}.category[_ngcontent-%COMP%]   .fields[_ngcontent-%COMP%]   .add-step[_ngcontent-%COMP%]{bottom:0!important;top:0!important;width:100%!important}.category[_ngcontent-%COMP%]   .disabled[_ngcontent-%COMP%]{background-color:#f4f7f9!important}.category[_ngcontent-%COMP%]   .expand-button[_ngcontent-%COMP%]{color:#5a607f!important;background-color:transparent!important;box-shadow:none!important;margin-right:6px!important}.category[_ngcontent-%COMP%]   .expand-button[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%]{font-size:40px}.category[_ngcontent-%COMP%]   .transparent-button[_ngcontent-%COMP%]{background-color:transparent;box-shadow:none;width:40px;padding:0;margin:0;margin-left:0!important;min-width:auto;color:#fff}.add-button-sub-category[_ngcontent-%COMP%]{width:93%;position:absolute;left:3%;bottom:-13px}.add-button-sub-category[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{width:100%}.add-button-container[_ngcontent-%COMP%]{background:#ffffff 0% 0% no-repeat padding-box;border-radius:8px;margin-top:10px;padding:10px 0;display:flex;justify-content:center;align-items:center;width:100%;margin-bottom:22px;position:absolute;left:0;top:100%}.add-button-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{display:flex;align-items:center;background-color:transparent;border:none;cursor:pointer;letter-spacing:0px;color:#000;box-shadow:none}.add-button-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{width:100%}.add-category[_ngcontent-%COMP%]{background-color:#fcfcfe;border-radius:5px;line-height:26px;margin-left:10px;margin-bottom:10px;letter-spacing:0px;color:#c2c8d5;width:92%}.field-content[_ngcontent-%COMP%]   .cdk-drag[_ngcontent-%COMP%]{width:100%}.cdk-drag[_ngcontent-%COMP%]{width:auto;position:relative}.cdk-drag[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]{display:flex;height:100%;width:100%;margin:0}.cdk-drag[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]   .button-action[_ngcontent-%COMP%]{align-self:baseline;margin-top:0;margin-left:3px;border-bottom-left-radius:8px;border-top-left-radius:8px}.cdk-drag[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]   .button-action[_ngcontent-%COMP%]   .transparent-button[_ngcontent-%COMP%]{background-color:transparent;box-shadow:none;width:40px;padding:0;margin:0;min-width:auto;color:#fff}.cdk-drag[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]   .button-action[_ngcontent-%COMP%]   .transparent-button[_ngcontent-%COMP%]   .drag-icon[_ngcontent-%COMP%]{color:#171f26;cursor:move;margin-right:15px}.cdk-drag[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]   .child-3-background[_ngcontent-%COMP%]{background-color:#e5e8ee!important}.cdk-drag[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]   .fields-container[_ngcontent-%COMP%]{border-radius:0 8px 8px 0;background-color:#fff;width:100%;padding-left:10px;padding-right:10px;padding-top:5px;position:relative;margin-bottom:10px}.cdk-drag[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]   .fields-container[_ngcontent-%COMP%]   lib-sub-category[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;width:100%}.cdk-drag[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]   .fields-container[_ngcontent-%COMP%]   lib-sub-category[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]   .button-action[_ngcontent-%COMP%]{background-color:#039be5!important;height:100%;margin:auto 15px auto auto;display:flex}.cdk-drag[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]   .fields-container[_ngcontent-%COMP%]   lib-sub-category[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]   .button-action[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{box-shadow:none;background-color:transparent;color:#fff}.side-bar[_ngcontent-%COMP%]{display:flex;flex-direction:column}.register-button[_ngcontent-%COMP%]{background:no-repeat padding-box #171f26!important;border:2px solid #171f26!important;color:#fff!important;box-shadow:0 0 #0003;border-radius:7px}.forward[_ngcontent-%COMP%]{padding:6px}.live-button[_ngcontent-%COMP%]{background-color:#fff!important;color:#171f26!important;border:2px solid #171f26!important}.content-item[_ngcontent-%COMP%]{transition-property:border-image-slice border-image-source border-width;transition-timing-function:ease-in-out;transition-duration:.5s}.active-content[_ngcontent-%COMP%]{border-image-slice:1;border-width:2px;border-image-source:linear-gradient(to left,#9d107d,#4862ab)}.field-property[_ngcontent-%COMP%]{padding:11px;height:calc(100% - 22px);width:400px}.field-property[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:20px;line-height:110%;padding-top:10px;display:flex;align-items:center;color:#242731}.field-property[_ngcontent-%COMP%]   .property-content[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:flex-start;padding:0 20px;background:#ffffff;border-radius:8px 8px 0 0;min-height:100%;height:auto;width:400px}.field-property[_ngcontent-%COMP%]   .property-content[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{text-align:center}.field-property[_ngcontent-%COMP%]   .property-content[_ngcontent-%COMP%]   .property-content-inner[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:25px;overflow:auto;max-height:700px;padding-bottom:25px}.field-property[_ngcontent-%COMP%]   .bloc-action[_ngcontent-%COMP%]{text-align:center}.field-property[_ngcontent-%COMP%]   .bloc-action[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:100%;padding:6px;margin-top:10px}.field-property[_ngcontent-%COMP%]   .bloc-action[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin-left:5px}.field-property[_ngcontent-%COMP%]   .bloc-action[_ngcontent-%COMP%]   .delete-bloc[_ngcontent-%COMP%]{background:#f44336;box-shadow:0 0 #0003;border-radius:7px;color:#fff}.fields-inner[_ngcontent-%COMP%]::-webkit-scrollbar{width:5px}.fields-inner[_ngcontent-%COMP%]::-webkit-scrollbar-track{box-shadow:inset 0 0 2px transparent;border-radius:10px}.fields-inner[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background:transparent;border-radius:10px}.fields-inner[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover{background:transparent}.toogle-button[_ngcontent-%COMP%]{color:#707273!important;display:flex;align-items:center;font-style:normal;font-weight:400;font-size:18px;line-height:18px}.toogle-button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{padding-right:10px}[_nghost-%COMP%]     .category .mat-slide-toggle.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar{background-color:#039be5;position:relative;width:42px;height:23px;flex-shrink:0;border-radius:14px}[_nghost-%COMP%]     .category .mat-slide-toggle:not(.mat-disabled) .mat-slide-toggle-bar{background-color:#707273}[_nghost-%COMP%]     .category .mat-slide-toggle:not(.mat-disabled) .mat-slide-toggle-bar{position:relative;width:42px;height:23px;flex-shrink:0;border-radius:14px}[_nghost-%COMP%]     .category .mat-slide-toggle.mat-checked:not(.mat-disabled) .mat-slide-toggle-thumb{background-color:#fff;margin-top:4px}[_nghost-%COMP%]     .category .mat-slide-toggle:not(.mat-disabled) .mat-slide-toggle-thumb{margin-top:4px;margin-left:4px}[_nghost-%COMP%]     .category .mat-slide-toggle.draft:not(.mat-disabled) .mat-slide-toggle-bar{background-color:#707273}[_nghost-%COMP%]     .category .mat-slide-toggle.draft.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar{background-color:#039be5}.top-10[_ngcontent-%COMP%]{margin-top:10px}.bottom-10[_ngcontent-%COMP%]{margin-bottom:10px}.section-item[_ngcontent-%COMP%]{border:2px solid transparent;overflow:hidden}.section-item[_ngcontent-%COMP%]:hover, .section-item.active[_ngcontent-%COMP%]{border:2px solid #242731;border-radius:8px;cursor:pointer}  .select-type-class.mat-select-disabled .mat-select-value{color:#000!important;cursor:pointer}  button .mat-button-wrapper{display:flex;align-items:center;justify-content:center}  .field-content .mat-form-field,   .field-content .select-content{width:100%}  .field-content .mat-form-field-infix{display:block;position:relative;flex:auto;min-width:0;width:100%!important}  .fields-content .mat-radio-button.mat-accent.mat-radio-checked .mat-radio-outer-circle,   .property-content .mat-radio-button.mat-accent.mat-radio-checked .mat-radio-outer-circle{border-color:#039be5!important}  .fields-content .mat-radio-button.mat-accent .mat-radio-inner-circle,   .fields-content .mat-radio-button.mat-accent .mat-radio-ripple .mat-ripple-element:not(.mat-radio-persistent-ripple),   .fields-content .mat-radio-button.mat-accent.mat-radio-checked .mat-radio-persistent-ripple,   .fields-content .mat-radio-button.mat-accent:active .mat-radio-persistent-ripple,   .property-content .mat-radio-button.mat-accent .mat-radio-inner-circle,   .property-content .mat-radio-button.mat-accent .mat-radio-ripple .mat-ripple-element:not(.mat-radio-persistent-ripple),   .property-content .mat-radio-button.mat-accent.mat-radio-checked .mat-radio-persistent-ripple,   .property-content .mat-radio-button.mat-accent:active .mat-radio-persistent-ripple{background-color:#039be5!important}  .fields-content .mat-checkbox-checkmark-path,   .property-content .mat-checkbox-checkmark-path{stroke:#039be5!important}  .fields-content .mat-checkbox-frame,   .property-content .mat-checkbox-frame{border:2px solid #039BE5!important}  .fields-content .mat-checkbox-inner-container,   .property-content .mat-checkbox-inner-container{height:20px!important;width:20px!important}.setting[_ngcontent-%COMP%]{z-index:1;background-color:#d5d6d7!important;border-radius:40px;width:42px!important;height:40px!important;padding:0 10px!important;display:flex;align-items:center;justify-content:center;display:none}.setting[_ngcontent-%COMP%]   .setting-icon[_ngcontent-%COMP%], .setting[_ngcontent-%COMP%]   .transparent-button[_ngcontent-%COMP%]{color:#171f26}.sub-header[_ngcontent-%COMP%]:hover   .setting[_ngcontent-%COMP%]{display:flex}.add-button-sub-category[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin:10px auto;width:100%;background-color:transparent;color:#000;box-shadow:none;background-color:#fcfcfe;padding:5px span;padding-width:100%!important}  .add-button{padding:10px 0}  .add-button span{width:100%}  .mat-button[disabled]{opacity:.5!important}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TemplateProfileCreateComponent, [{
        type: Component,
        args: [{ selector: "onboarding-create-profile-template", template: "<main>\n  <div class=\"header-create-profile\">\n    <div class=\"header-create-profile-top\">\n      <h3>\n        <span>{{ form.get(\"Name\").value }}</span>\n        <mat-icon (click)=\"openDialog()\">edit</mat-icon>\n      </h3>\n      <div class=\"create-profile-action\">\n        <button mat-button class=\"register-button\" type=\"submit\" (click)=\"onSubmit(false)\">\n          <lib-loading-page *ngIf=\"loading && !isSubmitted\"></lib-loading-page>{{draftLabel}}\n        </button>\n        <button mat-button class=\"register-button live-button\" type=\"submit\" (click)=\"onSubmit(true)\">\n          <lib-loading-page *ngIf=\"loading && isSubmitted\"></lib-loading-page>\n          {{liveLabel}}\n        </button>\n\n        <button [disabled]=\"currentCanceledIndex < 0 || historics.length===0\" mat-button\n          class=\"register-button live-button forward\" type=\"submit\" (click)=\"onCancel(true)\">\n          <mat-icon>rotate_left</mat-icon>\n        </button>\n        <button [disabled]=\"currentCanceledIndex===historics.length-1 || currentCanceledIndex===null\" mat-button\n          class=\"register-button live-button forward\" type=\"submit\" (click)=\"onCancel(false)\">\n          <mat-icon>rotate_right</mat-icon>\n        </button>\n      </div>\n    </div>\n    <div class=\"create-profile-menus\">\n      <ul>\n        <li class=\"li-title\" [class]=\"editIndex === i ? 'active' : ''\" *ngFor=\"let cat of categories; let i = index\"\n          (click)=\"scrollTo(cat, i)\" [id]=\"cat.name+'x'\">\n          <!-- (click)=\"onActiveMenu(cat, i,true)\" [ngxScrollTo]=\"'#' + cat.name\" [id]=\"cat.name+'x'\"> -->\n          {{ cat.name }}\n        </li>\n        <li>\n          <button mat-mini-fab color=\"transparent\" (click)=\"onAddNewCategory($event)\">\n            <mat-icon>add</mat-icon>\n          </button>\n        </li>\n      </ul>\n    </div>\n  </div>\n  <form [formGroup]=\"form\">\n    <div class=\"category\">\n      <div class=\"fields\" cdkDropListGroup>\n        <div class=\"fields-inner example-list mt-10\" id=\"categories-id\" #parentList=\"cdkDropList\" cdkDropList\n          [cdkDropListData]=\"categories\" (cdkDropListDropped)=\"drop($event)\" (scroll)=\"onScroll($event)\">\n          <section class=\"category-item section-item\" *ngFor=\"let category of categories; let i = index\" cdkDrag\n            [id]=\"category.name\" [style.paddingBottom]=\"category.expandMore ? '50px' : '10px'\"\n            [class]=\"editIndex === i ? 'active' : ''\" (click)=\"scrollTo(category, i)\">\n            <!-- [class]=\"editIndex === i ? 'active' : ''\" [ngxScrollTo]=\"'#' + category.name\"> -->\n            <div class=\"left-action move-icons\" cdkDragHandle>\n              <button class=\"transparent-button\" mat-raised-button\n                (click)=\"$event.preventDefault();$event.stopPropagation()\">\n                <mat-icon class=\"drag-icon\">drag_indicator</mat-icon>\n              </button>\n            </div>\n            <div class=\"field-content\">\n              <div class=\"field-item\">\n                <!-- <div class=\"field-item\" (click)=\" onExpendMore({ event: $event, field: category }, i)\"> -->\n                <div>\n                  <p class=\"full-width input-category-name\">\n                    {{ category.name }}\n                  </p>\n                  <p class=\"sub-category-name\">\n                    {{locale?.CATEGORY_SUBTITLE}} {{ catNameStart(category.name) ? \"l'\" +\n                    category.name : category.name }}\n                  </p>\n                </div>\n                <button mat-mini-fab color=\"primary\" class=\"expand-button\"\n                  (click)=\"$event.stopPropagation();onExpendMore({ event: $event, field: category }, i)\">\n                  <mat-icon *ngIf=\"!category.expandMore\">chevron_right</mat-icon>\n                  <mat-icon *ngIf=\"category.expandMore\">expand_more</mat-icon>\n                </button>\n              </div>\n              <div #childList=\"cdkDropList\" class=\"child-list\" *ngIf=\"category.forms\" [cdkDropListData]=\"category.forms\"\n                cdkDropList (cdkDropListDropped)=\"drop($event)\">\n                <ng-container *ngIf=\"category.expandMore\">\n                  <div class=\"field-box\" *ngFor=\"let field of category.forms; let j = index\" [id]=\"field.key\"\n                    [style.width]=\"field.forms && field.forms.length>0 ? '100%' : fieldWidth(field.type,category.forms.length,j)\">\n                    <div cdkDrag>\n\n                      <div class=\" fields-content\"\n                        [class]=\"field.forms && field.forms.length>0 ? 'sub-category-forms' :''\">\n                        <div class=\"button-action\" *ngIf=\"field.forms\">\n\n                          <button class=\"transparent-button\" mat-raised-button\n                            (click)=\"$event.stopPropagation();$event.preventDefault()\">\n                            <mat-icon class=\"drag-icon\">drag_indicator</mat-icon>\n                          </button>\n                        </div>\n                        <div class=\"fields-container\">\n                          <div class=\"sub-header\" *ngIf=\"field.forms\">\n                            <div class=\"field-item\">\n                              <div>\n                                <p class=\"full-width input-category-name\">\n                                  {{ field.label }}\n                                </p>\n                                <p class=\"sub-category-name\">\n                                  {{locale?.CATEGORY_SUBTITLE}}\n                                  {{ catNameStart(field.label) ? \"l'\" + field.label : field.label }}\n                                </p>\n                              </div>\n                              <button class=\"transparent-button setting\" mat-raised-button\n                                (click)=\"$event.stopPropagation();onEditBlock(field, i, j)\">\n                                <mat-icon class=\"setting-icon\">settings</mat-icon>\n                              </button>\n                              <button class=\"expand-button\" [disabled]=\"!(field.forms && field.forms.length > 0)\"\n                                [style.opacity]=\"field.forms && field.forms.length > 0 ? 1 : 0\" mat-mini-fab\n                                color=\"primary\"\n                                (click)=\"$event.stopPropagation();onExpendMore({ event: $event, field: field }, i, j)\">\n                                <mat-icon *ngIf=\"!field.expandMore\">expand_less </mat-icon>\n                                <mat-icon *ngIf=\"field.expandMore\">expand_more </mat-icon>\n                              </button>\n                            </div>\n                          </div>\n                          <lib-sub-category [field]=\"field\" [length]=\"category?.forms?.length\" [i]=\"i\" [j]=\"j\"\n                            [blink]=\"checkBlink(j,1)===newFieldIndex\" (onCheckValue)=\"onCheckValue($event)\"\n                            (onAddKeywordFromInput)=\"addKeywordFromInput($event.event, $event.prev, i, j)\"\n                            (onKeyPress)=\"onKeyPress($event.event, i, j)\" (onAddNewField)=\"onAddNewField(i)\"\n                            (onRemoveField)=\"onRemoveField(i, j)\" (onChangeType)=\"onChangeType(field.type, i, j)\"\n                            (onRemoveKeyword)=\"removeKeyword($event.event, i, j)\"\n                            (onAddNewSubLevelField)=\"onAddNewSubLevelField(i, j)\"\n                            (onExpendMore)=\"onExpendMore($event, i, j)\" (onChangeLabel)=\"onChangeLabel($event, i, j)\"\n                            (onCheckedChip)=\"onCheckedChip($event, i, j)\" (onDrop)=\"drop($event)\"\n                            (onCheckedDefault)=\"onCheckedDefault($event, i, j)\" (onEditBlock)=\"onEditBlock(field, i, j)\"\n                            [conditionData]=\"conditionData\">\n                            <div *ngIf=\"field.expandMore\" class=\"child\">\n                              <div #childList=\"cdkDropList\" class=\"child-content\" *ngIf=\"field.forms\"\n                                [cdkDropListData]=\"field.forms\" cdkDropList (cdkDropListDropped)=\"drop($event)\">\n                                <div class=\"\" style=\"margin-bottom: 20px\"\n                                  *ngFor=\"let child of field.forms; let k = index\" [id]=\"child.key\"\n                                  [style.width]=\"child.forms && child.forms.length>0 ? '100%' : fieldWidth(child.type,field.forms.length,k)\">\n                                  <div cdkDrag>\n                                    <div class=\"fields-content\"\n                                      [class]=\"child.forms && child.forms.length>0 ? 'sub-category-forms' :''\">\n                                      <div class=\"button-action child-2-background\"\n                                        *ngIf=\"child.forms && child.forms.length>0\">\n                                        <button class=\"transparent-button\" mat-raised-button\n                                          (click)=\"$event.stopPropagation();$event.preventDefault()\">\n                                          <mat-icon class=\"drag-icon\"> drag_indicator</mat-icon>\n                                        </button>\n                                      </div>\n                                      <div class=\"fields-container\">\n                                        <div class=\"sub-header\" *ngIf=\"child.forms && child.forms.length>0\">\n                                          <div class=\"field-item\">\n                                            <div>\n                                              <input class=\"full-width input-category-name\" type=\"text\" required\n                                                [readonly]=\"categories.length < 4 || !category.editable\"\n                                                [readonly]=\"!category.editable\" [(ngModel)]=\"child.label\"\n                                                [ngModelOptions]=\"{ standalone: true }\"\n                                                placeholder=\"Saisir le nom de la sous cat\u00E9gorie\" />\n                                              <p class=\"sub-category-name\">\n                                                {{locale?.CATEGORY_SUBTITLE}}\n                                                {{ catNameStart(child.label) ? \"l'\" + child.label : child.label }}\n                                              </p>\n                                            </div>\n                                            <button class=\"transparent-button setting\" mat-raised-button\n                                              (click)=\"$event.stopPropagation();onEditBlock(child, i, j, k)\">\n                                              <mat-icon class=\"setting-icon\">settings</mat-icon>\n                                            </button>\n                                            <button class=\"expand-button\"\n                                              [disabled]=\"!(child.forms && child.forms.length > 0)\"\n                                              [style.opacity]=\"child.forms && child.forms.length > 0 ? 1 : 0\"\n                                              mat-mini-fab color=\"primary\"\n                                              (click)=\"$event.stopPropagation();onExpendMore({ event: $event, field: child }, i, j, k)\">\n                                              <mat-icon *ngIf=\"!child.expandMore\"> expand_less </mat-icon>\n                                              <mat-icon *ngIf=\"child.expandMore\"> expand_more </mat-icon>\n                                            </button>\n                                          </div>\n                                        </div>\n                                        <lib-sub-category [field]=\"child\" [length]=\"field?.forms?.length\" [i]=\"j\"\n                                          [blink]=\"checkBlink(k,2)===newFieldIndex\" [j]=\"k\"\n                                          (onCheckValue)=\"onCheckValue($event)\"\n                                          (onAddKeywordFromInput)=\"addKeywordFromInput($event.event, $event.prev, i, j, k)\"\n                                          (onKeyPress)=\"onKeyPress($event.event, i, j, k)\"\n                                          (onAddNewField)=\"onAddNewField(i, j)\" (onRemoveField)=\"onRemoveField(i, j, k)\"\n                                          (onChangeType)=\"onChangeType(child.type, i, j, k)\"\n                                          (onRemoveKeyword)=\"removeKeyword($event.event, i, j, k)\"\n                                          (onAddNewSubLevelField)=\"onAddNewSubLevelField(i, j, k)\"\n                                          (onExpendMore)=\"onExpendMore($event, i, j, k)\"\n                                          (onChangeLabel)=\"onChangeLabel($event, i, j, k)\"\n                                          (onCheckedChip)=\"onCheckedChip($event, i, j, k)\" (onDrop)=\"drop($event)\"\n                                          (onCheckedDefault)=\"onCheckedDefault($event, i, j, k)\"\n                                          [conditionData]=\"conditionData\" (onEditBlock)=\"onEditBlock(child, i, j, k)\">\n                                          <div *ngIf=\"child.expandMore\" class=\"child\">\n                                            <div class=\"child-content\" #childList=\"cdkDropList\"\n                                              *ngIf=\"child.forms && child.forms.length>0\"\n                                              [cdkDropListData]=\"child.forms\" cdkDropList\n                                              (cdkDropListDropped)=\"drop($event)\">\n                                              <div class=\"\" *ngFor=\"let c2 of child.forms; let l = index\" [id]=\"c2.key\"\n                                                [style.width]=\"c2.forms && c2.forms.length>0 ? '100%' : fieldWidth(c2.type,child.forms.length,l)\">\n                                                <div cdkDrag>\n                                                  <div class=\"fields-content\"\n                                                    [class]=\"c2.forms && c2.forms.length>0 ? 'sub-category-forms' :''\">\n                                                    <div class=\"button-action child-3-background\"\n                                                      *ngIf=\"c2.forms && c2.forms.length>0\">\n                                                      <button class=\"transparent-button\" mat-raised-button\n                                                        (click)=\"$event.stopPropagation()\">\n                                                        <mat-icon class=\"drag-icon\"> drag_indicator </mat-icon>\n                                                      </button>\n                                                    </div>\n                                                    <div class=\"fields-container\">\n                                                      <lib-sub-category [field]=\"c2\" [length]=\"child?.forms?.length\"\n                                                        [blink]=\"checkBlink(l,3)===newFieldIndex\" [i]=\"k\" [j]=\"l\"\n                                                        (onCheckValue)=\"onCheckValue($event)\"\n                                                        (onAddKeywordFromInput)=\"addKeywordFromInput($event.event, $event.prev, i, j, k, l)\"\n                                                        (onKeyPress)=\"onKeyPress($event.event, i, j, k, l)\"\n                                                        (onAddNewField)=\"onAddNewField(i, j, k)\"\n                                                        (onRemoveField)=\"onRemoveField(i, j, k, l)\"\n                                                        (onChangeType)=\"onChangeType(c2.type, i, j, k, l)\"\n                                                        (onRemoveKeyword)=\"removeKeyword($event.event, i, j, k, l)\"\n                                                        (onAddNewSubLevelField)=\"onAddNewSubLevelField(i, j, k, l)\"\n                                                        (onExpendMore)=\"onExpendMore($event, i, j, k, l)\"\n                                                        (onChangeLabel)=\"onChangeLabel($event, i, j, k, l)\"\n                                                        (onCheckedChip)=\"onCheckedChip($event, i, j, k, l)\"\n                                                        (onDrop)=\"drop($event)\"\n                                                        (onCheckedDefault)=\"onCheckedDefault($event, i, j, k, l)\"\n                                                        (onEditBlock)=\"onEditBlock(c2, i, j, k, l)\"\n                                                        [conditionData]=\"conditionData\">\n                                                        <div class=\"child\"></div>\n                                                      </lib-sub-category>\n                                                    </div>\n                                                  </div>\n                                                </div>\n                                                <div class=\"add-button-sub-category\"\n                                                  *ngIf=\"child?.forms?.length - 1 === l\">\n                                                  <button style=\"margin: 10px auto\" mat-raised-button color=\"primary\"\n                                                    (click)=\"$event.stopPropagation();onAddNewField(i, j, k)\">\n                                                    <span>{{locale?.ADD_FIELD}}</span>\n                                                    <mat-icon> add </mat-icon>\n                                                  </button>\n                                                </div>\n                                              </div>\n                                            </div>\n                                          </div>\n                                        </lib-sub-category>\n                                      </div>\n                                    </div>\n                                  </div>\n                                  <div class=\"add-button-sub-category\" *ngIf=\"field?.forms?.length - 1 === k\">\n                                    <button style=\"margin: 10px auto\" mat-raised-button color=\"primary\"\n                                      (click)=\"$event.stopPropagation();onAddNewField(i, j)\">\n                                      <span>{{locale?.ADD_FIELD}}</span>\n                                      <mat-icon>add</mat-icon>\n                                    </button>\n                                  </div>\n                                </div>\n                              </div>\n                            </div>\n                          </lib-sub-category>\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"add-button-container add-button-sub-category\" *ngIf=\"category?.forms?.length - 1 === j\">\n                      <button style=\"margin: 10px auto; padding:10px 0\" class=\"add-button\"\n                        [disabled]=\"category?.forms?.length - 1 !== j\"\n                        [style.opacity]=\"category?.forms?.length - 1 === j ? 1 : 0\" mat-raised-button color=\"primary\"\n                        (click)=\"$event.stopPropagation();onAddNewField(i)\">\n                        <span>{{locale?.ADD_FIELD}}</span>\n                        <mat-icon>add</mat-icon>\n                      </button>\n                    </div>\n                  </div>\n                </ng-container>\n              </div>\n            </div>\n          </section>\n\n          <div class=\"add-button-container add-category-button add-step\">\n            <button (click)=\"onAddNewCategory($event)\">\n              {{locale?.ADD_STEP}}\n              <mat-icon>add</mat-icon>\n            </button>\n          </div>\n          <section style=\"background-color: transparent\">\n            <div style=\"height: 400px;\"></div>\n          </section>\n        </div>\n      </div>\n      <div class=\"field-property\">\n        <div class=\"property-content\" *ngIf=\"isBlock && currentEditBlock\">\n          <h3>{{locale?.SETTING_OF_BLOCK}} {{ currentEditBlock.label }}</h3>\n          <div class=\"property-content-inner\" style=\"width: 100%;\">\n            <mat-form-field class=\"form-field mat-select full-width\" style=\"cursor: pointer\" appearance=\"outline\">\n              <mat-label>{{locale?.TYPE_OF_BLOCK}}</mat-label>\n              <mat-select (click)=\"onOpenTypeDialog(currentEditBlock)\" disabled=\"true\" required\n                [(ngModel)]=\"currentEditBlock.type\" (ngModelChange)=\"onChangeTypeBlock(currentEditBlock)\"\n                [ngModelOptions]=\"{ standalone: true }\" class=\"select-type-class\">\n                <mat-option value=\"text\">Text(80)</mat-option>\n                <mat-option value=\"textarea\">Text(80+)</mat-option>\n                <mat-option value=\"radio\">Radio</mat-option>\n                <mat-option value=\"select\">Selector</mat-option>\n                <mat-option value=\"toggle\">Toggle</mat-option>\n                <mat-option value=\"checkbox\">Checkbox</mat-option>\n                <mat-option value=\"checkbox_multiple\">Checkbox multiple</mat-option>\n                <mat-option value=\"email\">Email</mat-option>\n                <mat-option value=\"password\">Password</mat-option>\n                <mat-option value=\"date\">Date</mat-option>\n                <mat-option value=\"tel\">Phone</mat-option>\n                <mat-option value=\"none\">None</mat-option>\n              </mat-select>\n            </mat-form-field>\n            <ng-container *ngIf=\"currentEditBlock.type!=='none'\">\n              <mat-form-field class=\"form-field full-width\" appearance=\"outline\">\n                <mat-label>{{locale?.NAME_LABEL}}</mat-label>\n                <input type=\"text\" [(ngModel)]=\"currentEditBlock.label\" [ngModelOptions]=\"{ standalone: true }\" matInput\n                  required placeholder=\"\" />\n              </mat-form-field>\n              <ng-container [ngSwitch]=\"currentEditBlock.type\">\n                <div *ngSwitchCase=\"'toggle'\" class=\"flex-auto\"\n                  style=\"display: flex;align-items: flex-end;margin: 10px 0;\">\n                  <mat-slide-toggle class=\"form-field\" color=\"#6FE8D7\" [(ngModel)]=\"currentEditBlock.defaultValue\"\n                    [ngModelOptions]=\"{ standalone: true }\">\n                  </mat-slide-toggle>\n                  <span style=\"margin-left: 10px;\">{{locale?.DEFAULT_VALUE}}</span>\n                </div>\n                <div *ngSwitchCase=\"'checkbox'\" class=\"flex-auto\">\n                  <mat-checkbox class=\"form-field\" [(ngModel)]=\"currentEditBlock.value\"\n                    [ngModelOptions]=\"{ standalone: true }\">\n                    {{locale?.DEFAULT_CHECKED}}\n                  </mat-checkbox>\n                </div>\n                <mat-form-field *ngSwitchCase=\"\n                                ['select', 'radio', 'checkbox_multiple'].includes(currentEditBlock.type) ? currentEditBlock.type : !currentEditBlock.type\n                              \" class=\"flex-auto full-width\" appearance=\"outline\">\n                  <mat-label> {{locale?.DEFAULT_VALUE}} </mat-label>\n                  <mat-chip-list #childList=\"cdkDropList\" [cdkDropListData]=\"currentEditBlock.defaultValue\" cdkDropList\n                    (cdkDropListDropped)=\"drop($event)\" #chipList aria-label=\"Video keywords; let index=index\" multiple\n                    selectable>\n                    <mat-chip style=\"min-height: 25px;width: auto;\" *ngFor=\"let option of currentEditBlock.defaultValue\"\n                      [selected]=\"option.checked\" [value]=\"option.value\" [removable]=\"true\"\n                      (dblclick)=\"onCheckedChipBlock(option, currentEditBlock)\" (click)=\"onEditChip(option)\"\n                      (removed)=\"removeKeywordBlock(option, currentEditBlock)\" cdkDrag>\n                      {{ option.value }}\n                      <mat-icon matChipRemove>{{locale?.CANCEL}}</mat-icon>\n                    </mat-chip>\n                    <input #chipsInput placeholder=\"add...\" [matChipInputFor]=\"chipList\" [matChipInputAddOnBlur]=\"true\"\n                      (matChipInputTokenEnd)=\"addKeywordFromInputBlock($event, currentEditBlock, prevValue)\"\n                      [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\"\n                      (keyup)=\"onKeyUpChip($event, currentEditBlock)\" [(ngModel)]=\"currentChip\"\n                      [ngModelOptions]=\"{ standalone: true }\" />\n                  </mat-chip-list>\n                </mat-form-field>\n                <mat-form-field *ngSwitchCase=\"'textarea'\" class=\"form-field full-width\" appearance=\"outline\">\n                  <mat-label>{{locale?.DEFAULT_VALUE}}</mat-label>\n                  <input type=\"text\" matInput [ngModelOptions]=\"{ standalone: true }\"\n                    [(ngModel)]=\"currentEditBlock.defaultValue\" placeholder=\"Description...\" />\n                </mat-form-field>\n\n                <mat-form-field *ngSwitchDefault class=\"form-field full-width\"\n                  [style.opacity]=\"currentEditBlock.type !== 'tel' ? 1 : 0\" appearance=\"outline\">\n                  <mat-label>{{locale?.DEFAULT_VALUE}}</mat-label>\n                  <input [type]=\"currentEditBlock.type\" [disabled]=\"currentEditBlock.type === 'tel'\" matInput\n                    [ngModelOptions]=\"{ standalone: true }\" [(ngModel)]=\"currentEditBlock.defaultValue\"\n                    placeholder=\"\" />\n                </mat-form-field>\n              </ng-container>\n\n              <div class=\"mandatory top-10 bottom-10\">\n                <div class=\"toogle-button\">\n                  <span>{{locale?.REQUIRED}}</span>\n                  <mat-slide-toggle color=\"#6FE8D7\" [(ngModel)]=\"currentEditBlock.isMandatory\"\n                    [ngModelOptions]=\"{ standalone: true }\">\n                  </mat-slide-toggle>\n                </div>\n              </div>\n              <div class=\"mandatory top-10\">\n                <div class=\"toogle-button\">\n                  <span>{{locale?.CONDITIONAL_VISIBILITY}}</span>\n                  <mat-slide-toggle color=\"#6FE8D7\" [(ngModel)]=\"currentEditBlock.isConditional\"\n                    [ngModelOptions]=\"{ standalone: true }\">\n                  </mat-slide-toggle>\n                </div>\n              </div>\n              <ng-container *ngIf=\"currentEditBlock?.isConditional\">\n                <mat-form-field class=\"form-field mat-select full-width\" appearance=\"outline\">\n                  <mat-label>{{locale?.SELECT_CATEGORY}}</mat-label>\n                  <mat-select [(ngModel)]=\"all\" [ngModelOptions]=\"{ standalone: true }\"\n                    (selectionChange)=\"onSelectCondition('all','s1', $event.value)\">\n                    <mat-option *ngFor=\"let item of conditionData.all\" [value]=\"item.key\">{{\n                      item.label }}\n                    </mat-option>\n                  </mat-select>\n                </mat-form-field>\n                <mat-form-field *ngIf=\"conditionData.s1?.length > 0\" class=\"form-field mat-select full-width\"\n                  appearance=\"outline\">\n                  <mat-label>{{locale?.SELECT_SUB_CATEGORY}} (s1)</mat-label>\n                  <mat-select [(ngModel)]=\"s1\" [ngModelOptions]=\"{ standalone: true }\"\n                    (selectionChange)=\"onSelectCondition('s1','s2', $event.value)\">\n                    <mat-option *ngFor=\"let item of conditionData.s1\" [value]=\"item.key\">{{\n                      item.label }}\n                    </mat-option>\n                  </mat-select>\n                </mat-form-field>\n                <mat-form-field class=\"form-field mat-select full-width\" *ngIf=\"conditionData.s2?.length>0\"\n                  appearance=\"outline\">\n                  <mat-label>{{locale?.SELECT_SUB_CATEGORY}} (s2)</mat-label>\n                  <mat-select [(ngModel)]=\"s2\" [ngModelOptions]=\"{ standalone: true }\"\n                    (selectionChange)=\"onSelectCondition('s2','s3', $event.value)\">\n                    <mat-option *ngFor=\"let item of conditionData.s2\" [value]=\"item.key\">{{\n                      item.label }}\n                    </mat-option>\n                  </mat-select>\n                </mat-form-field>\n                <mat-form-field class=\"form-field mat-select full-width\" *ngIf=\"conditionData.s3?.length>0\"\n                  appearance=\"outline\">\n                  <mat-label>{{locale?.SELECT_SUB_CATEGORY}} (s3)</mat-label>\n                  <mat-select [(ngModel)]=\"s3\" [ngModelOptions]=\"{ standalone: true }\"\n                    (selectionChange)=\"onSelectCondition('s3','s4', $event.value)\">\n                    <mat-option *ngFor=\"let item of conditionData.s3\" [value]=\"item.key\">{{\n                      item.label }}\n                    </mat-option>\n                  </mat-select>\n                </mat-form-field>\n              </ng-container>\n\n              <mat-radio-group\n                *ngIf=\"currentEditBlock.isConditional && onGetDefaultValue() && onGetDefaultValue()?.length>0\"\n                aria-labelledby=\"example-radio-group-label\" class=\"example-radio-group\"\n                [(ngModel)]=\"currentEditBlock.condition.value\" [ngModelOptions]=\"{ standalone: true }\">\n                <mat-radio-button class=\"example-radio-button\" style=\"margin-right: 10px\"\n                  *ngFor=\"let item of onGetDefaultValue()\" [value]=\"item.value\">\n                  {{ item.value }}\n                </mat-radio-button>\n              </mat-radio-group>\n              <div class=\"bloc-action\">\n                <button *ngIf=\"paramsIndex.length<4\" mat-button [disabled]=\"!currentEditBlock.editable\"\n                  (click)=\"onAddNewSubLevelFieldBlock($event)\">{{locale?.SUB_CATEGORY}} <mat-icon>device_hub\n                  </mat-icon></button>\n                <button mat-button [disabled]=\"!currentEditBlock.editable\"\n                  (click)=\"onDuplicatedBlock($event)\">{{locale?.DUPLICATE_BLOCK}}<mat-icon>filter_none</mat-icon>\n                </button>\n                <button mat-button [disabled]=\"!currentEditBlock.editable\" class=\"delete-bloc\"\n                  (click)=\"onRemoveFieldBlock($event)\">{{locale?.DELETE_BLOCK}} <mat-icon>\n                    delete </mat-icon></button>\n              </div>\n            </ng-container>\n          </div>\n        </div>\n        <div class=\"property-content\" *ngIf=\"isSection && currentEditBlock\">\n          <h3>{{locale?.SECTION_SETTING}} {{ currentEditBlock.name }}</h3>\n          <div class=\"property-content-inner\">\n            <mat-form-field class=\"form-field full-width\" appearance=\"outline\">\n              <mat-label>{{locale?.SECTION_NAME}}</mat-label>\n              <input (ngModelChange)=\"onChangeCategoryName()\" type=\"text\" matInput required placeholder=\"\"\n                [(ngModel)]=\"currentEditBlock.name\" [ngModelOptions]=\"{ standalone: true }\" />\n            </mat-form-field>\n            <mat-form-field class=\"form-field mat-select full-width\" appearance=\"outline\">\n              <mat-label>{{locale?.MANAGEMENT_TEAM}}</mat-label>\n              <mat-select required [(ngModel)]=\"currentEditBlock.selector.value\"\n                [ngModelOptions]=\"{ standalone: true }\">\n                <mat-option [value]=\"item.value\" *ngFor=\"let item of currentEditBlock.selector.defaultValue\">{{\n                  item.value }}</mat-option>\n              </mat-select>\n            </mat-form-field>\n            <div class=\"bloc-action\">\n              <button mat-button (click)=\"onAddNewSubLevelFieldBlock($event)\">{{locale?.SUB_CATEGORY}} <mat-icon>\n                  device_hub\n                </mat-icon></button>\n              <button mat-button (click)=\"onDuplicatedBlock($event)\">{{locale?.DUPLICATE_BLOCK}}<mat-icon>filter_none\n                </mat-icon>\n              </button>\n              <button [disabled]=\"!currentEditBlock.editable\" mat-button class=\"delete-bloc\"\n                (click)=\"onRemoveFieldBlock($event)\">{{locale?.DELETE_BLOCK}} <mat-icon>\n                  delete</mat-icon></button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </form>\n</main>", styles: ["main{background:#f4f7f9 0% 0% no-repeat padding-box;height:100vh;display:flex;flex-direction:column;align-items:center;padding:25px}main .disabled label{background-color:transparent!important}main form{display:flex;height:89%;width:100%}main .box-title{width:786px;margin-top:20vh;background:#ffffff 0% 0% no-repeat padding-box;border:1px solid #dce4e9;border-radius:6px;opacity:1;margin:auto;padding:0 25px;align-self:center}main .box-title h3{text-align:center;letter-spacing:0px;color:#171f26}main .box-title label,main .box-title input{letter-spacing:0px;color:#171f26}main .box-title .profil-name-content{display:flex;align-items:center;position:relative}main .box-title .profil-name-content .add-picto{margin-right:15px;min-width:50px;width:30px;padding:9px 12px}main .box-title .profil-name-content .add-picto mat-icon{margin-right:10px}main .box-title .profil-name-content .list-picto{position:absolute;height:200px;width:100%;background:#ffffff 0% 0% no-repeat padding-box;border:1px solid #171f26;border-radius:8px;top:100%;z-index:1}main .box-title .profil-name-content .list-picto mat-icon{margin:15px;border:none;font-size:40px}main .box-title .profil-name-content .list-picto mat-icon:hover{color:#830b6b!important;cursor:pointer}main .box-title .box-title-content{width:100%;margin:25px auto}main .box-title .title{letter-spacing:0px;color:#171f26}main .box-title p{letter-spacing:0px;color:#171f26;text-align:center}main .box-title .link-create-profil{width:100%;display:flex;justify-content:center}main .box-title button{text-align:center;border:1px solid #543cb6;border-radius:7px;color:#fff;padding:.7em 2em .5em;display:flex;align-items:center;background-color:transparent;letter-spacing:0px;color:#543cb6}main .action{width:100%;display:flex;justify-content:space-between}main .header-create-profile{width:100%;margin:10px 15px;border-radius:5px}main .header-create-profile .header-create-profile-top{display:flex;align-items:center;text-align:center;justify-content:space-between}main .header-create-profile .header-create-profile-top .create-profile-action{display:flex;align-items:center;gap:25px}main .header-create-profile h3{font-size:25px;padding-bottom:5px;display:flex;align-items:center;justify-content:center}main .header-create-profile h3 span{text-overflow:ellipsis;white-space:nowrap;overflow:hidden;font-weight:700;font-size:24px;line-height:110%;text-align:center;color:#242731;text-transform:capitalize}main .header-create-profile h3 mat-icon{margin-left:15px;cursor:pointer}main .header-create-profile .create-profile-menus{max-width:100%;overflow:auto}main .header-create-profile .create-profile-menus ul{font-weight:600;font-size:16px;list-style:none;display:flex;align-items:center;gap:20px;padding:0}main .header-create-profile .create-profile-menus ul li{font-weight:400;font-size:12px;cursor:pointer;text-align:left;letter-spacing:0px;color:#535760}main .header-create-profile .create-profile-menus ul li .mat-mini-fab{width:28px;height:28px;line-height:24px}main .header-create-profile .create-profile-menus ul li.li-title:hover{border-bottom:2px solid #723CEB}main .header-create-profile .create-profile-menus ul li.li-title.active{border-bottom:2px solid #723CEB;font-weight:600}.expand-button{color:#5a607f!important;background-color:transparent!important;box-shadow:none!important}.input-category-name{font-size:15px;font-weight:500;border:none;outline:none;text-align:left;color:#171f26;font-weight:700;font-size:20px;line-height:28px;color:#242731}.sub-category-name{font-style:normal;font-weight:250;font-size:14px;line-height:16px;display:flex;align-items:center;color:#575f6e;word-break:break-word}.full-width{width:100%}.field-action{width:10%}.field-size{width:90%;margin:auto 2% auto auto}::ng-deep .mat-mini-fab .mat-button-wrapper{padding:0!important}::ng-deep .mat-form-field-appearance-fill .mat-form-field-flex{background-color:#fff}::ng-deep .mat-select.mat-form-field-appearance-outline .mat-form-field-infix{padding:.5em 0}::ng-deep .mat-select{padding:8px 0}::ng-deep .mat-form-field-appearance-fill .mat-form-field-underline:before{background-color:transparent}::ng-deep .mat-form-field-wrapper{padding-bottom:0!important}:host ::ng-deep .input-category-name div.mat-form-field-outline-start,:host ::ng-deep .cdk-drag-preview .input-category-name div.mat-form-field-outline-start{border-color:0!important;border-width:0px!important}:host ::ng-deep .input-category-name .mat-form-field-outline-gap{border-color:0!important;border-width:0px!important}:host ::ng-deep .input-category-name .mat-form-field-outline-end{border-color:0!important;border-width:0px!important}:host ::ng-deep .input-category-name .mat-form-field-label-wrapper{display:none}:host ::ng-deep .input-category-name .mat-form-field-appearance-outline .mat-form-field-outline{color:transparent!important}:host ::ng-deep .input-category-name .mat-form-field-infix{border-top:none}.category-action{display:flex;width:100%}.delete-field{margin:auto 2%}.radio-group .mat-radio-button{margin-right:10px}.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary{background-color:#3f51b5;color:#fff;min-height:20px;font-size:10px}.move-icons{cursor:move}.category-item,.cdk-drag-placeholder{display:flex;align-items:baseline;position:relative;width:100%;border-radius:8px;background-color:#fff;margin-bottom:15px;margin-right:5px;padding:6px 15px}.category-item .left-action,.cdk-drag-placeholder .left-action{height:auto;width:40px;align-self:baseline;border-top-left-radius:8px;border-bottom-left-radius:8px}.category-item .left-action .transparent-button,.cdk-drag-placeholder .left-action .transparent-button{background-color:transparent;box-shadow:none;width:40px;padding:0;margin:0;min-width:auto;color:#fff}.category-item .left-action .transparent-button .drag-icon,.cdk-drag-placeholder .left-action .transparent-button .drag-icon{color:#171f26;cursor:move;margin-right:15px}.category-item .field-content,.cdk-drag-placeholder .field-content{width:calc(100% - 40px);align-self:center}.category-item .field-content .child-list,.cdk-drag-placeholder .field-content .child-list{display:flex;flex-wrap:wrap;background-color:transparent;width:103%;position:relative;margin-left:-1.5%}.category-item .field-content .field-item,.cdk-drag-placeholder .field-content .field-item{display:flex;justify-content:space-between;align-items:baseline;border:transparent!important}.category-item .field-content .field-item mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-outline,.cdk-drag-placeholder .field-content .field-item mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-outline{color:transparent!important}.category-item .field-content .mat-form-field-outline,.cdk-drag-placeholder .field-content .mat-form-field-outline{color:transparent!important}.field-box{margin-bottom:15px;display:flex;align-items:center}.cdk-drag-preview{box-sizing:border-box;border-radius:4px;opacity:1}.cdk-drag-preview .expand-button{color:#5a607f!important;background-color:transparent!important;box-shadow:none!important;margin-right:6px!important}.cdk-drag-placeholder{opacity:0}.cdk-drag-animating{transition:transform .25s cubic-bezier(0,0,.2,1)}.example-list.cdk-drop-list-dragging .category-item:not(.cdk-drag-placeholder){transition:transform .25s cubic-bezier(0,0,.2,1)}.child{margin-left:0}.child-content{display:flex;flex-wrap:wrap;margin-bottom:30px}.sub-category-forms{margin-bottom:0!important;margin-top:10px!important}.category{display:flex;flex-direction:row;width:100%;height:100%}.category .fields{width:100%;overflow:hidden;overflow-x:hidden;position:relative;padding-top:10px;height:calc(100% - 10px)}.category .fields .fields-inner{max-height:100%;height:100%;width:100%;overflow:auto}.category .fields .add-category-button{position:relative!important;width:calc(100% - 40px)!important;padding:20px 0}.category .fields .add-category-button mat-icon{margin-left:10px}.category .fields .add-step{bottom:0!important;top:0!important;width:100%!important}.category .disabled{background-color:#f4f7f9!important}.category .expand-button{color:#5a607f!important;background-color:transparent!important;box-shadow:none!important;margin-right:6px!important}.category .expand-button .material-icons{font-size:40px}.category .transparent-button{background-color:transparent;box-shadow:none;width:40px;padding:0;margin:0;margin-left:0!important;min-width:auto;color:#fff}.add-button-sub-category{width:93%;position:absolute;left:3%;bottom:-13px}.add-button-sub-category button span{width:100%}.add-button-container{background:#ffffff 0% 0% no-repeat padding-box;border-radius:8px;margin-top:10px;padding:10px 0;display:flex;justify-content:center;align-items:center;width:100%;margin-bottom:22px;position:absolute;left:0;top:100%}.add-button-container button{display:flex;align-items:center;background-color:transparent;border:none;cursor:pointer;letter-spacing:0px;color:#000;box-shadow:none}.add-button-container button span{width:100%}.add-category{background-color:#fcfcfe;border-radius:5px;line-height:26px;margin-left:10px;margin-bottom:10px;letter-spacing:0px;color:#c2c8d5;width:92%}.field-content .cdk-drag{width:100%}.cdk-drag{width:auto;position:relative}.cdk-drag .fields-content{display:flex;height:100%;width:100%;margin:0}.cdk-drag .fields-content .button-action{align-self:baseline;margin-top:0;margin-left:3px;border-bottom-left-radius:8px;border-top-left-radius:8px}.cdk-drag .fields-content .button-action .transparent-button{background-color:transparent;box-shadow:none;width:40px;padding:0;margin:0;min-width:auto;color:#fff}.cdk-drag .fields-content .button-action .transparent-button .drag-icon{color:#171f26;cursor:move;margin-right:15px}.cdk-drag .fields-content .child-3-background{background-color:#e5e8ee!important}.cdk-drag .fields-content .fields-container{border-radius:0 8px 8px 0;background-color:#fff;width:100%;padding-left:10px;padding-right:10px;padding-top:5px;position:relative;margin-bottom:10px}.cdk-drag .fields-content .fields-container lib-sub-category .field-item{display:flex;justify-content:space-between;align-items:center;width:100%}.cdk-drag .fields-content .fields-container lib-sub-category .field-item .button-action{background-color:#039be5!important;height:100%;margin:auto 15px auto auto;display:flex}.cdk-drag .fields-content .fields-container lib-sub-category .field-item .button-action button{box-shadow:none;background-color:transparent;color:#fff}.side-bar{display:flex;flex-direction:column}.register-button{background:no-repeat padding-box #171f26!important;border:2px solid #171f26!important;color:#fff!important;box-shadow:0 0 #0003;border-radius:7px}.forward{padding:6px}.live-button{background-color:#fff!important;color:#171f26!important;border:2px solid #171f26!important}.content-item{transition-property:border-image-slice border-image-source border-width;transition-timing-function:ease-in-out;transition-duration:.5s}.active-content{border-image-slice:1;border-width:2px;border-image-source:linear-gradient(to left,#9d107d,#4862ab)}.field-property{padding:11px;height:calc(100% - 22px);width:400px}.field-property h3{font-size:20px;line-height:110%;padding-top:10px;display:flex;align-items:center;color:#242731}.field-property .property-content{display:flex;flex-direction:column;align-items:flex-start;padding:0 20px;background:#ffffff;border-radius:8px 8px 0 0;min-height:100%;height:auto;width:400px}.field-property .property-content button{text-align:center}.field-property .property-content .property-content-inner{display:flex;flex-direction:column;gap:25px;overflow:auto;max-height:700px;padding-bottom:25px}.field-property .bloc-action{text-align:center}.field-property .bloc-action button{width:100%;padding:6px;margin-top:10px}.field-property .bloc-action button mat-icon{margin-left:5px}.field-property .bloc-action .delete-bloc{background:#f44336;box-shadow:0 0 #0003;border-radius:7px;color:#fff}.fields-inner::-webkit-scrollbar{width:5px}.fields-inner::-webkit-scrollbar-track{box-shadow:inset 0 0 2px transparent;border-radius:10px}.fields-inner::-webkit-scrollbar-thumb{background:transparent;border-radius:10px}.fields-inner::-webkit-scrollbar-thumb:hover{background:transparent}.toogle-button{color:#707273!important;display:flex;align-items:center;font-style:normal;font-weight:400;font-size:18px;line-height:18px}.toogle-button span{padding-right:10px}:host ::ng-deep .category .mat-slide-toggle.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar{background-color:#039be5;position:relative;width:42px;height:23px;flex-shrink:0;border-radius:14px}:host ::ng-deep .category .mat-slide-toggle:not(.mat-disabled) .mat-slide-toggle-bar{background-color:#707273}:host ::ng-deep .category .mat-slide-toggle:not(.mat-disabled) .mat-slide-toggle-bar{position:relative;width:42px;height:23px;flex-shrink:0;border-radius:14px}:host ::ng-deep .category .mat-slide-toggle.mat-checked:not(.mat-disabled) .mat-slide-toggle-thumb{background-color:#fff;margin-top:4px}:host ::ng-deep .category .mat-slide-toggle:not(.mat-disabled) .mat-slide-toggle-thumb{margin-top:4px;margin-left:4px}:host ::ng-deep .category .mat-slide-toggle.draft:not(.mat-disabled) .mat-slide-toggle-bar{background-color:#707273}:host ::ng-deep .category .mat-slide-toggle.draft.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar{background-color:#039be5}.top-10{margin-top:10px}.bottom-10{margin-bottom:10px}.section-item{border:2px solid transparent;overflow:hidden}.section-item:hover,.section-item.active{border:2px solid #242731;border-radius:8px;cursor:pointer}::ng-deep .select-type-class.mat-select-disabled .mat-select-value{color:#000!important;cursor:pointer}::ng-deep button .mat-button-wrapper{display:flex;align-items:center;justify-content:center}::ng-deep .field-content .mat-form-field,::ng-deep .field-content .select-content{width:100%}::ng-deep .field-content .mat-form-field-infix{display:block;position:relative;flex:auto;min-width:0;width:100%!important}::ng-deep .fields-content .mat-radio-button.mat-accent.mat-radio-checked .mat-radio-outer-circle,::ng-deep .property-content .mat-radio-button.mat-accent.mat-radio-checked .mat-radio-outer-circle{border-color:#039be5!important}::ng-deep .fields-content .mat-radio-button.mat-accent .mat-radio-inner-circle,::ng-deep .fields-content .mat-radio-button.mat-accent .mat-radio-ripple .mat-ripple-element:not(.mat-radio-persistent-ripple),::ng-deep .fields-content .mat-radio-button.mat-accent.mat-radio-checked .mat-radio-persistent-ripple,::ng-deep .fields-content .mat-radio-button.mat-accent:active .mat-radio-persistent-ripple,::ng-deep .property-content .mat-radio-button.mat-accent .mat-radio-inner-circle,::ng-deep .property-content .mat-radio-button.mat-accent .mat-radio-ripple .mat-ripple-element:not(.mat-radio-persistent-ripple),::ng-deep .property-content .mat-radio-button.mat-accent.mat-radio-checked .mat-radio-persistent-ripple,::ng-deep .property-content .mat-radio-button.mat-accent:active .mat-radio-persistent-ripple{background-color:#039be5!important}::ng-deep .fields-content .mat-checkbox-checkmark-path,::ng-deep .property-content .mat-checkbox-checkmark-path{stroke:#039be5!important}::ng-deep .fields-content .mat-checkbox-frame,::ng-deep .property-content .mat-checkbox-frame{border:2px solid #039BE5!important}::ng-deep .fields-content .mat-checkbox-inner-container,::ng-deep .property-content .mat-checkbox-inner-container{height:20px!important;width:20px!important}.setting{z-index:1;background-color:#d5d6d7!important;border-radius:40px;width:42px!important;height:40px!important;padding:0 10px!important;display:flex;align-items:center;justify-content:center;display:none}.setting .setting-icon,.setting .transparent-button{color:#171f26}.sub-header:hover .setting{display:flex}.add-button-sub-category button{margin:10px auto;width:100%;background-color:transparent;color:#000;box-shadow:none;background-color:#fcfcfe;padding:5px span;padding-width:100%!important}::ng-deep .add-button{padding:10px 0}::ng-deep .add-button span{width:100%}::ng-deep .mat-button[disabled]{opacity:.5!important}\n"] }]
    }], function () { return [{ type: i1.UntypedFormBuilder }, { type: i2.OnboardingService }, { type: i3.ActivatedRoute }, { type: i3.Router }, { type: i4.MatDialog }, { type: i5.ScrollToService }]; }, { onScroll: [{
            type: HostListener,
            args: ['scroll', ['$event']]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVtcGxhdGUtcHJvZmlsZS1jcmVhdGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvb25ib2FyZGluZy9zcmMvbGliL3BhZ2VzL3RlbXBsYXRlLXByb2ZpbGUtY3JlYXRlL3RlbXBsYXRlLXByb2ZpbGUtY3JlYXRlLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL29uYm9hcmRpbmcvc3JjL2xpYi9wYWdlcy90ZW1wbGF0ZS1wcm9maWxlLWNyZWF0ZS90ZW1wbGF0ZS1wcm9maWxlLWNyZWF0ZS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBSyxTQUFTLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNuRSxPQUFPLEVBQWUsZUFBZSxFQUFFLGlCQUFpQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDekYsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDaEUsT0FBTyxFQUF3QyxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVsRixPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSxtRkFBbUYsQ0FBQztBQUNsSSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxzREFBc0QsQ0FBQztBQUs1RixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sc0RBQXNELENBQUM7QUFFckYsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLFlBQVksQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNMM0IsbUNBQXFFOzs7SUFHckUsbUNBQW9FOzs7O0lBZ0J0RSw4QkFDaUQ7SUFBL0Msa1FBQVMsZUFBQSw2QkFBZ0IsQ0FBQSxJQUFDO0lBRTFCLFlBQ0Y7SUFBQSxpQkFBSzs7Ozs7SUFKZ0Isd0RBQXlDO0lBQ2pDLHNDQUFtQjtJQUU5QyxlQUNGO0lBREUsNENB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Q0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO1FBQ3RNLElBQUksSUFBSSxLQUFLLFFBQVEsSUFBSSxJQUFJLEtBQUssT0FBTyxJQUFJLElBQUksS0FBSyxtQkFBbUIsRUFBRTtZQUN6RSxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksR0FBRyxFQUFFLENBQUM7U0FDN0M7YUFBTSxJQUFJLElBQUksS0FBSyxVQUFVLElBQUksSUFBSSxLQUFLLFFBQVEsRUFBRTtZQUNuRCxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7U0FDL0M7YUFBTTtZQUNMLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxHQUFHLEVBQUUsQ0FBQztTQUM3QztJQUNILENBQUM7SUFFRCxVQUFVLENBQUMsS0FBVSxFQUFFLEdBQUcsTUFBTTtRQUM5QixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUNyQixNQUFNLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDO1FBQzdCLE1BQU0sS0FBSyxHQUFHLE1BQU0sS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFN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LEdBQUcsTUFBTTtRQUMzRCxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUNyQixNQUFNLEtBQUssR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDO1FBQzFCLE1BQU0sS0FBSyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUM7UUFDMUIsTUFBTSxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQztRQUM3QixNQUFNLEtBQUssR0FBRyxNQUFNLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2xRLElBQUksS0FBSyxFQUFFO1lBQ1QsTUFBTSxTQUFTLEdBQUcsS0FBSyxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsaUJBQWlCLEVBQUUsS0FBSyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxDQUFDO1lBQ3BILElBQUksU0FBUyxLQUFLLENBQUMsQ0FBQyxFQUFFO2dCQUNwQixL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LENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbFEsS0FBSyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFBO0lBRTFCLENBQUM7SUFFRCxhQUFhLENBQUMsS0FBVSxFQUFFLEdBQUcsTUFBTTtRQUNqQyxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUNyQixNQUFNLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDO1FBQzdCLE1BQU0sS0FBSyxHQUFHLE1BQU0sS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFD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LGdCQUFZLElBQUMsb0dBQVcsb0JBQWdCLElBQTNCO1FBQ2xFLDRGQTROVTtRQUVWLGdDQUErRCxpQkFBQTtRQUNyRCxrSEFBUyw0QkFBd0IsSUFBQztRQUN4QyxhQUNBO1FBQUEsaUNBQVU7UUFBQSxvQkFBRztRQUFBLGlCQUFXLEVBQUEsRUFBQTtRQUc1QixvQ0FBK0M7UUFDN0MsMkJBQWtDO1FBQ3BDLGlCQUFVLEVBQUEsRUFBQTtRQUdkLGdDQUE0QjtRQUMxQixtRkE4Sk07UUFDTixvRkE0Qk07UUFDUixpQkFBTSxFQUFBLEVBQUEsRUFBQTs7UUFoZEUsZUFBNEI7UUFBNUIsZ0RBQTRCO1FBS2IsZUFBNkI7UUFBN0Isc0RBQTZCO1FBQXFCLGVBQ3ZFO1FBRHVFLDhDQUN2RTtRQUVxQixlQUE0QjtRQUE1QixxREFBNEI7UUFDL0MsZUFDRjtRQURFLDhDQUNGO1FBRVEsZUFBNkQ7UUFBN0QscUZBQTZEO1FBSTdELGVBQXFGO1FBQXJGLHFIQUFxRjtRQVFkLGVBQWU7UUFBZix3Q0FBZTtRQWE5RixlQUFrQjtRQUFsQixvQ0FBa0I7UUFJaEIsZUFBOEI7UUFBOUIsZ0RBQThCO1FBQ21DLGVBQWU7UUFBZix3Q0FBZTtRQWdPNUUsZUFDQTtRQURBLGdGQUNBO1FBU3lCLGVBQWlDO1FBQWpDLDBEQUFpQztRQStKakMsZUFBbUM7UUFBbkMsNERBQW1DOzt1RkRsYTdELDhCQUE4QjtjQUwxQyxTQUFTOzJCQUNFLG9DQUFvQzs2TUErcUM5QyxRQUFRO2tCQURQLFlBQVk7bUJBQUMsUUFBUSxFQUFFLENBQUMsUUFBUSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IENPTU1BLCBFTlRFUiwgSSwgU0VNSUNPTE9OIH0gZnJvbSBcIkBhbmd1bGFyL2Nkay9rZXljb2Rlc1wiO1xuaW1wb3J0IHsgQ2RrRHJhZ0Ryb3AsIG1vdmVJdGVtSW5BcnJheSwgdHJhbnNmZXJBcnJheUl0ZW0gfSBmcm9tIFwiQGFuZ3VsYXIvY2RrL2RyYWctZHJvcFwiO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBIb3N0TGlzdGVuZXIsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVW50eXBlZEZvcm1CdWlsZGVyLCBVbnR5cGVkRm9ybUdyb3VwLCBWYWxpZGF0b3JzIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XG5cbmltcG9ydCB7IERpYWxvZ0NyZWF0ZVRlbXBsYXRlQ29tcG9uZW50IH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvdGVtcGxhdGUvZGlhbG9nLWNyZWF0ZS10ZW1wbGF0ZS9kaWFsb2ctY3JlYXRlLXRlbXBsYXRlLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgRXhpdENvbmZpcm1Db21wb25lbnQgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9leGl0LWNvbmZpcm0vZXhpdC1jb25maXJtLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgTWF0Q2hpcElucHV0RXZlbnQgfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWwvY2hpcHNcIjtcbmltcG9ydCB7IE1hdERpYWxvZyB9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbC9kaWFsb2dcIjtcbmltcG9ydCB7IE9uYm9hcmRpbmdTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL29uYm9hcmRpbmcuc2VydmljZVwiO1xuaW1wb3J0IHsgU2Nyb2xsVG9TZXJ2aWNlIH0gZnJvbSAnQG5pY2t5LWxlbmFlcnMvbmd4LXNjcm9sbC10byc7XG5pbXBvcnQgeyBUeXBlQ29tcG9uZW50IH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvdGVtcGxhdGUvdHlwZS1kaWFsb2cvdHlwZS5jb21wb25lbnRcIjtcbmltcG9ydCB7IGZpZWxkV2lkdGggfSBmcm9tIFwiLi4vLi4vdXRpbHMvdXRpbHNcIjtcbmltcG9ydCB7IGxvY2FsZXMgfSBmcm9tICcuLi8uLi9pMThuJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcIm9uYm9hcmRpbmctY3JlYXRlLXByb2ZpbGUtdGVtcGxhdGVcIixcbiAgdGVtcGxhdGVVcmw6IFwiLi90ZW1wbGF0ZS1wcm9maWxlLWNyZWF0ZS5jb21wb25lbnQuaHRtbFwiLFxuICBzdHlsZVVybHM6IFtcIi4vdGVtcGxhdGUtcHJvZmlsZS1jcmVhdGUuY29tcG9uZW50LnNjc3NcIl0sXG59KVxuZXhwb3J0IGNsYXNzIFRlbXBsYXRlUHJvZmlsZUNyZWF0ZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGZvcm06IFVudHlwZWRGb3JtR3JvdXA7XG4gIHZhbGlkQ2F0ZWdvcnkgPSBmYWxzZTtcbiAgc2VwYXJhdG9yS2V5c0NvZGVzID0gW0VOVEVSLCBDT01NQSwgU0VNSUNPTE9OXTtcbiAgY3VycmVudFByb2ZpbDogYW55ID0ge307XG4gIGNhbkV4aXQgPSB0cnVlO1xuICB0YWdzID0gW107XG4gIGlkID0gXCIwXCI7XG4gIHBhcmVudCA9IFtdO1xuICBsb2FkaW5nID0gZmFsc2U7XG4gIGVkaXRJbmRleCA9IG51bGw7XG4gIHNob3dQcm9maWxlTmFtZSA9IHRydWU7XG5cbiAgbG9jYWxlOiBhbnkgPSB7fVxuICBsaXZlTGFiZWwgPSB0aGlzLmxvY2FsZS5QVUJMSVNIX1BST0ZJTFxuICBkcmFmdExhYmVsID0gdGhpcy5sb2NhbGUuUkVHSVNURVJfRFJBRlRcbiAgaW52YWxpZGVWYWx1ZTogYm9vbGVhbjtcblxuICBpc1BpY3RvTGlzdFNob3c6IGJvb2xlYW47XG4gIHBpY3RvID0gXCJcIjtcbiAgYWxsID0gXCJcIlxuICBzMSA9IFwiXCJcbiAgczIgPSBcIlwiXG4gIHMzID0gXCJcIlxuICBzNCA9IFwiXCJcbiAgY29uZGl0aW9uRGF0YSA9IHtcbiAgICBhbGw6IFtdLFxuICAgIHMxOiBbXSxcbiAgICBzMjogW10sXG4gICAgczM6IFtdLFxuICAgIGRlZmF1bHRWYWx1ZTogW11cbiAgfTtcbiAgY2F0ZWdvcmllcyA9IFtdO1xuICBpc0Jsb2NrID0gZmFsc2U7XG4gIGlzU2VjdGlvbiA9IGZhbHNlO1xuICBjdXJyZW50RWRpdEJsb2NrOiBhbnk7XG4gIGN1cnJlbnRDaGlwID0gXCJcIlxuICBwcmV2VmFsdWUgPSBcIlwiXG4gIHBhcmFtc0luZGV4OiBhbnlbXTtcbiAgaGlzdG9yaWNzID0gW107XG4gIGN1cnJlbnRDYW5jZWxlZEluZGV4ID0gbnVsbDtcbiAgbmV3RmllbGRJbmRleCA9IG51bGw7XG4gIGlzU3VibWl0dGVkOiBib29sZWFuO1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGZiOiBVbnR5cGVkRm9ybUJ1aWxkZXIsXG4gICAgcHVibGljIHNlcnZpY2U6IE9uYm9hcmRpbmdTZXJ2aWNlLFxuICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgcHJpdmF0ZSBkaWFsb2c6IE1hdERpYWxvZyxcbiAgICBwcml2YXRlIHNjcm9sbFRvU2VydmljZTogU2Nyb2xsVG9TZXJ2aWNlXG4gICkge1xuICAgIHRoaXMuc2VydmljZS5fbGFuZy5zdWJzY3JpYmUoKGxvY2FsZSkgPT4ge1xuICAgICAgdGhpcy5sb2NhbGUgPSBsb2NhbGVzW2xvY2FsZV0uUFJPRklMRTtcbiAgICAgIHRoaXMubGl2ZUxhYmVsID0gdGhpcy5sb2NhbGUuUFVCTElTSF9QUk9GSUxcbiAgICAgIHRoaXMuZHJhZnRMYWJlbCA9IHRoaXMubG9jYWxlLlJFR0lTVEVSX0RSQUZUXG4gICAgfSlcbiAgICB0aGlzLnNlcnZpY2UuX2N1cnJlbnRUZW1wbGF0ZS5zdWJzY3JpYmUoKHByb2ZpbCkgPT4ge1xuICAgICAgdGhpcy5pbml0Rm9ybSgpXG4gICAgICBpZiAocHJvZmlsKSB7XG4gICAgICAgIHRoaXMuZm9ybS5wYXRjaFZhbHVlKHByb2ZpbCk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9maWwnLCBKU09OLnN0cmluZ2lmeShwcm9maWwpKVxuXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBwcm9maWwgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9maWwnKSk7XG4gICAgICAgIGlmIChwcm9maWwpIHtcbiAgICAgICAgICB0aGlzLmZvcm0ucGF0Y2hWYWx1ZShwcm9maWwpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIGRlZmF1bHRDYXRlZ29yaWU6IGFueSA9IFtcbiAgICB7XG4gICAgICBuYW1lOiBcIlV0aWxpc2F0ZXVyXCIsXG4gICAgICBrZXk6ICd1dGlsaXNhdGV1cicsXG4gICAgICBlZGl0YWJsZTogZmFsc2UsXG4gICAgICBkZWxldGVhYmxlOiBmYWxzZSxcbiAgICAgIGV4cGFuZE1vcmU6IGZhbHNlLFxuICAgICAgZXhwYW5kT25ib2FyZGluZzogdHJ1ZSxcbiAgICAgIGRlZmF1bHRWYWx1ZTogZmFsc2UsXG4gICAgICBzdWZmaXhFbmRwb2ludDogXCJjYXRlZ29yeS91c2VyXCIsXG4gICAgICBzZWxlY3Rvcjoge1xuICAgICAgICBsYWJlbDogXCJDb21wYW55XCIsXG4gICAgICAgIGtleTogXCJDb21wYW55XCIsXG4gICAgICAgIGRlZmF1bHRWYWx1ZTogW3sgdmFsdWU6IFwiTm93dGVhbVwiLCBjaGVja2VkOiB0cnVlIH0sIHsgdmFsdWU6IFwiSW50ZXJuYWxcIiwgY2hlY2tlZDogZmFsc2UgfV0sXG4gICAgICAgIHZhbHVlOiBcIk5vd3RlYW1cIlxuICAgICAgfSxcbiAgICAgIHRpY2tldFR5cGU6IHtcbiAgICAgICAgbGFiZWw6IFwiVHlwZSBkZSB0aWNrZXRcIixcbiAgICAgICAga2V5OiBcInR5Y2tldFR5cGVcIixcbiAgICAgICAgZGVmYXVsdFZhbHVlOiBbeyB2YWx1ZTogXCJDcsOpYXRpb24gZGUgY29tcHRlXCIsIGNoZWNrZWQ6IHRydWUsIGtleTogXCJDcmVhdGlvbl9kZV9jb21wdGVcIiB9LCB7IHZhbHVlOiBcIkNvbmZpZ3VyYXRpb24gZGUgcG9zdGVcIiwgY2hlY2tlZDogZmFsc2UsIGtleTogXCJDb25maWd1cmF0aW9uX2RlX3Bvc3RlXCIgfV0sXG4gICAgICAgIHZhbHVlOiBcIkNyZWF0aW9uX2RlX2NvbXB0ZVwiXG4gICAgICB9LFxuICAgICAgZm9ybXM6IFtcbiAgICAgICAge1xuICAgICAgICAgIGxhYmVsOiBcIkNpdmlsaXTDqVwiLFxuICAgICAgICAgIGtleTogXCJTYWx1dGF0aW9uXCIsXG4gICAgICAgICAgZXhwYW5kT25ib2FyZGluZzogdHJ1ZSxcbiAgICAgICAgICBkZWZhdWx0VmFsdWU6IFt7IHZhbHVlOiBcIk0uXCIsIGNoZWNrZWQ6IGZhbHNlIH0sIHsgdmFsdWU6IFwiTW1lXCIsIGNoZWNrZWQ6IGZhbHNlIH1dLFxuICAgICAgICAgIGNvbmRpdGlvbjoge30sXG4gICAgICAgICAgdmFsdWU6IG51bGwsXG4gICAgICAgICAgc2l6ZTogMTAsXG4gICAgICAgICAgaXNNYW5kYXRvcnk6IHRydWUsXG4gICAgICAgICAgb3RoZXJWYWx1ZTogJycsXG4gICAgICAgICAgdHlwZTogXCJzZWxlY3RcIixcbiAgICAgICAgICBlZGl0YWJsZTogZmFsc2UsXG4gICAgICAgICAgZGVsZXRlYWJsZTogZmFsc2UsXG4gICAgICAgICAgc3ViTGV2ZWw6IDEsXG5cbiAgICAgICAgICBleHBhbmRNb3JlOiBmYWxzZSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGxhYmVsOiBcIlR5cGUgZGUgcHJvZmlsXCIsXG4gICAgICAgICAga2V5OiBcIlR5cGVfZGVfcHJvZmlsX05vd2JvYXJkX19jXCIsXG4gICAgICAgICAgZXhwYW5kT25ib2FyZGluZzogdHJ1ZSxcbiAgICAgICAgICBkZWZhdWx0VmFsdWU6IFt7IHZhbHVlOiBcIk1hbmFnZXJcIiwgY2hlY2tlZDogZmFsc2UgfSwgeyB2YWx1ZTogXCJVdGlsaXNhdGV1clwiLCBjaGVja2VkOiBmYWxzZSB9XSxcbiAgICAgICAgICBjb25kaXRpb246IHt9LFxuICAgICAgICAgIHZhbHVlOiBudWxsLFxuICAgICAgICAgIHNpemU6IDEwLFxuICAgICAgICAgIGlzTWFuZGF0b3J5OiB0cnVlLFxuICAgICAgICAgIG90aGVyVmFsdWU6ICcnLFxuICAgICAgICAgIHR5cGU6IFwic2VsZWN0XCIsXG4gICAgICAgICAgZWRpdGFibGU6IGZhbHNlLFxuICAgICAgICAgIGRlbGV0ZWFibGU6IGZhbHNlLFxuICAgICAgICAgIHN1YkxldmVsOiAxLFxuICAgICAgICAgIGV4cGFuZE1vcmU6IGZhbHNlLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbGFiZWw6IFwiTm9tXCIsXG4gICAgICAgICAga2V5OiBcIkxhc3ROYW1lXCIsXG4gICAgICAgICAgZXhwYW5kT25ib2FyZGluZzogdHJ1ZSxcbiAgICAgICAgICBkZWZhdWx0VmFsdWU6IG51bGwsXG4gICAgICAgICAgdmFsdWU6IG51bGwsXG4gICAgICAgICAgc2l6ZTogODAsXG4gICAgICAgICAgaXNNYW5kYXRvcnk6IHRydWUsXG4gICAgICAgICAgY29uZGl0aW9uOiB7fSxcbiAgICAgICAgICBvdGhlclZhbHVlOiAnJyxcbiAgICAgICAgICB0eXBlOiBcInRleHRcIixcbiAgICAgICAgICBlZGl0YWJsZTogZmFsc2UsXG4gICAgICAgICAgZGVsZXRlYWJsZTogZmFsc2UsXG4gICAgICAgICAgc3ViTGV2ZWw6IDEsXG4gICAgICAgICAgZXhwYW5kTW9yZTogZmFsc2UsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBsYWJlbDogXCJQcsOpbm9tXCIsXG4gICAgICAgICAga2V5OiBcIkZpcnN0TmFtZVwiLFxuICAgICAgICAgIGV4cGFuZE9uYm9hcmRpbmc6IHRydWUsXG4gICAgICAgICAgY29uZGl0aW9uOiB7fSxcbiAgICAgICAgICBkZWZhdWx0VmFsdWU6IG51bGwsXG4gICAgICAgICAgdmFsdWU6IG51bGwsXG4gICAgICAgICAgc2l6ZTogODAsXG4gICAgICAgICAgaXNNYW5kYXRvcnk6IHRydWUsXG4gICAgICAgICAgb3RoZXJWYWx1ZTogJycsXG4gICAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXG4gICAgICAgICAgZWRpdGFibGU6IGZhbHNlLFxuICAgICAgICAgIGRlbGV0ZWFibGU6IGZhbHNlLFxuICAgICAgICAgIHN1YkxldmVsOiAxLFxuICAgICAgICAgIGV4cGFuZE1vcmU6IGZhbHNlLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbGFiZWw6IFwiRW1haWxcIixcbiAgICAgICAgICBrZXk6IFwiRW1haWxcIixcbiAgICAgICAgICBleHBhbmRPbmJvYXJkaW5nOiB0cnVlLFxuICAgICAgICAgIGRlZmF1bHRWYWx1ZTogbnVsbCxcbiAgICAgICAgICBjb25kaXRpb246IHt9LFxuICAgICAgICAgIHZhbHVlOiBudWxsLFxuICAgICAgICAgIHNpemU6IDgwLFxuICAgICAgICAgIGlzTWFuZGF0b3J5OiB0cnVlLFxuICAgICAgICAgIG90aGVyVmFsdWU6ICcnLFxuICAgICAgICAgIHR5cGU6IFwiZW1haWxcIixcbiAgICAgICAgICBlZGl0YWJsZTogZmFsc2UsXG4gICAgICAgICAgZGVsZXRlYWJsZTogZmFsc2UsXG4gICAgICAgICAgc3ViTGV2ZWw6IDEsXG4gICAgICAgICAgZXhwYW5kTW9yZTogZmFsc2UsXG4gICAgICAgIH0sXG5cbiAgICAgICAge1xuICAgICAgICAgIGxhYmVsOiBcIkZpeGUgKG9wdClcIixcbiAgICAgICAgICBrZXk6IFwiUGhvbmVcIixcbiAgICAgICAgICBleHBhbmRPbmJvYXJkaW5nOiB0cnVlLFxuICAgICAgICAgIGRlZmF1bHRWYWx1ZTogbnVsbCxcbiAgICAgICAgICBjb25kaXRpb246IHt9LFxuICAgICAgICAgIHZhbHVlOiBudWxsLFxuICAgICAgICAgIHNpemU6IDIwLFxuICAgICAgICAgIGlzTWFuZGF0b3J5OiBmYWxzZSxcbiAgICAgICAgICBvdGhlclZhbHVlOiAnJyxcbiAgICAgICAgICB0eXBlOiBcInRlbFwiLFxuICAgICAgICAgIGVkaXRhYmxlOiBmYWxzZSxcbiAgICAgICAgICBkZWxldGVhYmxlOiBmYWxzZSxcbiAgICAgICAgICBzdWJMZXZlbDogMSxcblxuICAgICAgICAgIGV4cGFuZE1vcmU6IGZhbHNlLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbGFiZWw6IFwiTW9iaWxlXCIsXG4gICAgICAgICAga2V5OiBcIk1vYmlsZVBob25lXCIsXG4gICAgICAgICAgZXhwYW5kT25ib2FyZGluZzogdHJ1ZSxcbiAgICAgICAgICBkZWZhdWx0VmFsdWU6IG51bGwsXG4gICAgICAgICAgY29uZGl0aW9uOiB7fSxcbiAgICAgICAgICB2YWx1ZTogbnVsbCxcbiAgICAgICAgICBzaXplOiAyMCxcbiAgICAgICAgICBpc01hbmRhdG9yeTogZmFsc2UsXG4gICAgICAgICAgb3RoZXJWYWx1ZTogJycsXG4gICAgICAgICAgdHlwZTogXCJ0ZWxcIixcbiAgICAgICAgICBlZGl0YWJsZTogZmFsc2UsXG4gICAgICAgICAgZGVsZXRlYWJsZTogZmFsc2UsXG4gICAgICAgICAgc3ViTGV2ZWw6IDEsXG4gICAgICAgICAgZXhwYW5kTW9yZTogZmFsc2UsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBsYWJlbDogXCJGb25jdGlvblwiLFxuICAgICAgICAgIGtleTogXCJUaXRsZVwiLFxuICAgICAgICAgIGV4cGFuZE9uYm9hcmRpbmc6IHRydWUsXG4gICAgICAgICAgZGVmYXVsdFZhbHVlOiBudWxsLFxuICAgICAgICAgIHZhbHVlOiBudWxsLFxuICAgICAgICAgIGNvbmRpdGlvbjoge30sXG4gICAgICAgICAgc2l6ZTogODAsXG4gICAgICAgICAgaXNNYW5kYXRvcnk6IHRydWUsXG4gICAgICAgICAgb3RoZXJWYWx1ZTogJycsXG4gICAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXG4gICAgICAgICAgZWRpdGFibGU6IGZhbHNlLFxuICAgICAgICAgIGRlbGV0ZWFibGU6IGZhbHNlLFxuICAgICAgICAgIHN1YkxldmVsOiAxLFxuICAgICAgICAgIGV4cGFuZE1vcmU6IGZhbHNlLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbGFiZWw6IFwiRXRhYmxpc3NlbWVudCAvIFNpdGVcIixcbiAgICAgICAgICBrZXk6IFwiQWNjb3VudE5hbWVcIixcbiAgICAgICAgICBleHBhbmRPbmJvYXJkaW5nOiB0cnVlLFxuICAgICAgICAgIGRlZmF1bHRWYWx1ZTogbnVsbCxcbiAgICAgICAgICB2YWx1ZTogbnVsbCxcbiAgICAgICAgICBjb25kaXRpb246IHt9LFxuICAgICAgICAgIHNpemU6IDgwLFxuICAgICAgICAgIGlzTWFuZGF0b3J5OiB0cnVlLFxuICAgICAgICAgIG90aGVyVmFsdWU6ICcnLFxuICAgICAgICAgIHR5cGU6IFwidGV4dFwiLFxuICAgICAgICAgIGVkaXRhYmxlOiBmYWxzZSxcbiAgICAgICAgICBkZWxldGVhYmxlOiBmYWxzZSxcbiAgICAgICAgICBzdWJMZXZlbDogMSxcbiAgICAgICAgICBleHBhbmRNb3JlOiBmYWxzZSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGxhYmVsOiBcIkFjY8OocyBhdSBwb3J0YWlsXCIsXG4gICAgICAgICAga2V5OiBcIkFjY19zX2F1X3BvcnRhaWxfY2xpZW50X05vd0JvYXJkX19jXCIsXG4gICAgICAgICAgY29uZGl0aW9uOiB7fSxcbiAgICAgICAgICBleHBhbmRPbmJvYXJkaW5nOiB0cnVlLFxuICAgICAgICAgIGRlZmF1bHRWYWx1ZTogW3sgdmFsdWU6IFwiT3VpXCIsIGNoZWNrZWQ6IGZhbHNlIH0sIHsgdmFsdWU6IFwiTm9uXCIsIGNoZWNrZWQ6IGZhbHNlIH1dLFxuICAgICAgICAgIHZhbHVlOiBudWxsLFxuICAgICAgICAgIHNpemU6IDEwLFxuICAgICAgICAgIGlzTWFuZGF0b3J5OiB0cnVlLFxuICAgICAgICAgIG90aGVyVmFsdWU6ICcnLFxuICAgICAgICAgIHR5cGU6IFwic2VsZWN0XCIsXG4gICAgICAgICAgZWRpdGFibGU6IGZhbHNlLFxuICAgICAgICAgIGRlbGV0ZWFibGU6IGZhbHNlLFxuICAgICAgICAgIHN1YkxldmVsOiAxLFxuXG4gICAgICAgICAgZXhwYW5kTW9yZTogZmFsc2UsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBsYWJlbDogXCJMYW5ndWVcIixcbiAgICAgICAgICBrZXk6IFwiTGFuZ3VlX21hdGVybmVsbGVfX2NcIixcbiAgICAgICAgICBleHBhbmRPbmJvYXJkaW5nOiB0cnVlLFxuICAgICAgICAgIGRlZmF1bHRWYWx1ZTogW3sgdmFsdWU6IFwiRnJhbsOnYWlzXCIsIGNoZWNrZWQ6IGZhbHNlIH0sIHsgdmFsdWU6IFwiQW5nbGFpc1wiLCBjaGVja2VkOiBmYWxzZSB9XSxcbiAgICAgICAgICBjb25kaXRpb246IHt9LFxuICAgICAgICAgIHZhbHVlOiBudWxsLFxuICAgICAgICAgIHNpemU6IDEwLFxuICAgICAgICAgIGlzTWFuZGF0b3J5OiB0cnVlLFxuICAgICAgICAgIG90aGVyVmFsdWU6ICcnLFxuICAgICAgICAgIHR5cGU6IFwic2VsZWN0XCIsXG4gICAgICAgICAgZWRpdGFibGU6IGZhbHNlLFxuICAgICAgICAgIGRlbGV0ZWFibGU6IGZhbHNlLFxuICAgICAgICAgIHN1YkxldmVsOiAxLFxuICAgICAgICAgIGV4cGFuZE1vcmU6IGZhbHNlLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbGFiZWw6IFwiRGF0ZSBkJ2VudHLDqWVcIixcbiAgICAgICAgICBrZXk6IFwiZGF0ZV9vZl9lbnRyeVwiLFxuICAgICAgICAgIGV4cGFuZE9uYm9hcmRpbmc6IHRydWUsXG4gICAgICAgICAgZGVmYXVsdFZhbHVlOiBudWxsLFxuICAgICAgICAgIHZhbHVlOiBudWxsLFxuICAgICAgICAgIGNvbmRpdGlvbjoge30sXG4gICAgICAgICAgc2l6ZTogODAsXG4gICAgICAgICAgaXNNYW5kYXRvcnk6IHRydWUsXG4gICAgICAgICAgb3RoZXJWYWx1ZTogJycsXG4gICAgICAgICAgdHlwZTogXCJkYXRlXCIsXG4gICAgICAgICAgZWRpdGFibGU6IGZhbHNlLFxuICAgICAgICAgIGRlbGV0ZWFibGU6IGZhbHNlLFxuICAgICAgICAgIHN1YkxldmVsOiAxLFxuICAgICAgICAgIGV4cGFuZE1vcmU6IGZhbHNlLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwiU2Vzc2lvbiBkJ3V0aWxpc2F0ZXVyXCIsXG4gICAgICBrZXk6IFwic2Vzc2lvbmQndXRpbGlzYXRldXJcIixcbiAgICAgIGVkaXRhYmxlOiB0cnVlLFxuICAgICAgaXNDb25kaXRpb25hbDogZmFsc2UsXG4gICAgICBjb25kaXRpb25WYWx1ZTogXCJcIixcbiAgICAgIGNvbmRpdGlvbjoge30sXG4gICAgICBkZWxldGVhYmxlOiB0cnVlLFxuICAgICAgc2VsZWN0ZWQ6IHRydWUsXG4gICAgICBleHBhbmRNb3JlOiBmYWxzZSxcbiAgICAgIGV4cGFuZE9uYm9hcmRpbmc6IHRydWUsXG4gICAgICBkZWZhdWx0VmFsdWU6IGZhbHNlLFxuICAgICAgc3VmZml4RW5kcG9pbnQ6IFwiY2F0ZWdvcnkvdXNlci1zZXNzaW9uXCIsXG4gICAgICBzZWxlY3Rvcjoge1xuICAgICAgICBsYWJlbDogXCJDb21wYW55XCIsXG4gICAgICAgIGtleTogXCJDb21wYW55XCIsXG4gICAgICAgIGRlZmF1bHRWYWx1ZTogW3sgdmFsdWU6IFwiTm93dGVhbVwiLCBjaGVja2VkOiB0cnVlIH0sIHsgdmFsdWU6IFwiSW50ZXJuYWxcIiwgY2hlY2tlZDogZmFsc2UgfV0sXG4gICAgICAgIHZhbHVlOiBcIk5vd3RlYW1cIlxuICAgICAgfSxcbiAgICAgIHRpY2tldFR5cGU6IHtcbiAgICAgICAgbGFiZWw6IFwiVHlwZSBkZSB0aWNrZXRcIixcbiAgICAgICAga2V5OiBcInR5Y2tldFR5cGVcIixcbiAgICAgICAgZGVmYXVsdFZhbHVlOiBbeyB2YWx1ZTogXCJDcsOpYXRpb24gZGUgY29tcHRlXCIsIGNoZWNrZWQ6IHRydWUsIGtleTogXCJDcmVhdGlvbl9kZV9jb21wdGVcIiB9LCB7IHZhbHVlOiBcIkNvbmZpZ3VyYXRpb24gZGUgcG9zdGVcIiwgY2hlY2tlZDogZmFsc2UsIGtleTogXCJDb25maWd1cmF0aW9uX2RlX3Bvc3RlXCIgfV0sXG4gICAgICAgIHZhbHVlOiBcIkNyZWF0aW9uX2RlX2NvbXB0ZVwiXG4gICAgICB9LFxuICAgICAgZm9ybXM6IFtcbiAgICAgICAge1xuICAgICAgICAgIGxhYmVsOiBcIlV0aWxpc2F0ZXVyIGxvY2FsIMOgIGNyw6llclwiLFxuICAgICAgICAgIGtleTogXCJVc2VyTG9jYWxUb0NyZWF0ZVwiLFxuICAgICAgICAgIGV4cGFuZE9uYm9hcmRpbmc6IHRydWUsXG4gICAgICAgICAgZGVmYXVsdFZhbHVlOiBudWxsLFxuICAgICAgICAgIHZhbHVlOiB0cnVlLFxuICAgICAgICAgIHNpemU6IDgwLFxuICAgICAgICAgIGlzTWFuZGF0b3J5OiBmYWxzZSxcbiAgICAgICAgICBvdGhlclZhbHVlOiAnJyxcbiAgICAgICAgICB0eXBlOiBcImNoZWNrYm94XCIsXG4gICAgICAgICAgZWRpdGFibGU6IHRydWUsXG4gICAgICAgICAgaXNDb25kaXRpb25hbDogZmFsc2UsXG4gICAgICAgICAgY29uZGl0aW9uVmFsdWU6IFwiXCIsXG4gICAgICAgICAgY29uZGl0aW9uOiB7fSxcbiAgICAgICAgICBkZWxldGVhYmxlOiB0cnVlLFxuICAgICAgICAgIHN1YkxldmVsOiAxLFxuICAgICAgICAgIGV4cGFuZE1vcmU6IGZhbHNlLFxuICAgICAgICAgIC8qc2VsZWN0b3I6IHtcbiAgICAgICAgICAgIGxhYmVsOiBcIkNvbXBhbnlcIixcbiAgICAgICAgICAgIGtleTogXCJDb21wYW55XCIsXG4gICAgICAgICAgICBkZWZhdWx0VmFsdWU6IFt7IHZhbHVlOiBcIk5vd3RlYW1cIiwgY2hlY2tlZDogdHJ1ZSB9LCB7IHZhbHVlOiBcIkludGVybmFsXCIsIGNoZWNrZWQ6IGZhbHNlIH1dLFxuICAgICAgICAgICAgdmFsdWU6IFwiTm93dGVhbVwiXG4gICAgICAgICAgfSwqL1xuICAgICAgICAgIGZvcm1zOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGxhYmVsOiBcIkxvZ2luXCIsXG4gICAgICAgICAgICAgIGtleTogXCJMb2dpblwiLFxuICAgICAgICAgICAgICBleHBhbmRPbmJvYXJkaW5nOiB0cnVlLFxuICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU6IG51bGwsXG4gICAgICAgICAgICAgIHZhbHVlOiBudWxsLFxuICAgICAgICAgICAgICBzaXplOiA4MCxcbiAgICAgICAgICAgICAgaXNNYW5kYXRvcnk6IHRydWUsXG4gICAgICAgICAgICAgIG90aGVyVmFsdWU6ICcnLFxuICAgICAgICAgICAgICB0eXBlOiBcInRleHRcIixcbiAgICAgICAgICAgICAgZWRpdGFibGU6IHRydWUsXG4gICAgICAgICAgICAgIGlzQ29uZGl0aW9uYWw6IGZhbHNlLFxuICAgICAgICAgICAgICBjb25kaXRpb25WYWx1ZTogXCJcIixcbiAgICAgICAgICAgICAgY29uZGl0aW9uOiB7fSxcbiAgICAgICAgICAgICAgZGVsZXRlYWJsZTogZmFsc2UsXG4gICAgICAgICAgICAgIHN1YkxldmVsOiAyLFxuICAgICAgICAgICAgICBleHBhbmRNb3JlOiBmYWxzZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGxhYmVsOiBcIk1vdCBkZSBwYXNzZVwiLFxuICAgICAgICAgICAgICBrZXk6IFwiUGFzc3dvcmRcIixcbiAgICAgICAgICAgICAgZXhwYW5kT25ib2FyZGluZzogdHJ1ZSxcbiAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlOiBudWxsLFxuICAgICAgICAgICAgICB2YWx1ZTogbnVsbCxcbiAgICAgICAgICAgICAgc2l6ZTogODAsXG4gICAgICAgICAgICAgIGlzTWFuZGF0b3J5OiB0cnVlLFxuICAgICAgICAgICAgICBvdGhlclZhbHVlOiAnJyxcbiAgICAgICAgICAgICAgdHlwZTogXCJwYXNzd29yZFwiLFxuICAgICAgICAgICAgICBlZGl0YWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgaXNDb25kaXRpb25hbDogZmFsc2UsXG4gICAgICAgICAgICAgIGNvbmRpdGlvblZhbHVlOiBcIlwiLFxuICAgICAgICAgICAgICBjb25kaXRpb246IHt9LFxuICAgICAgICAgICAgICBkZWxldGVhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICBzdWJMZXZlbDogMixcbiAgICAgICAgICAgICAgZXhwYW5kTW9yZTogZmFsc2UsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBsYWJlbDogXCJVdGlsaXNhdGV1ciBBRCAoc2VydmV1cikgw6AgY3LDqWVyXCIsXG4gICAgICAgICAga2V5OiBcIlVzZXJTZXJ2ZXJUb0NyZWF0ZVwiLFxuICAgICAgICAgIGV4cGFuZE9uYm9hcmRpbmc6IHRydWUsXG4gICAgICAgICAgZGVmYXVsdFZhbHVlOiBudWxsLFxuICAgICAgICAgIHZhbHVlOiB0cnVlLFxuICAgICAgICAgIHNpemU6IDgwLFxuICAgICAgICAgIGlzTWFuZGF0b3J5OiBmYWxzZSxcbiAgICAgICAgICBvdGhlclZhbHVlOiAnJyxcbiAgICAgICAgICB0eXBlOiBcImNoZWNrYm94XCIsXG4gICAgICAgICAgZWRpdGFibGU6IHRydWUsXG4gICAgICAgICAgaXNDb25kaXRpb25hbDogZmFsc2UsXG4gICAgICAgICAgY29uZGl0aW9uVmFsdWU6IFwiXCIsXG4gICAgICAgICAgY29uZGl0aW9uOiB7fSxcbiAgICAgICAgICBkZWxldGVhYmxlOiB0cnVlLFxuICAgICAgICAgIHN1YkxldmVsOiAxLFxuICAgICAgICAgIGV4cGFuZE1vcmU6IGZhbHNlLFxuICAgICAgICAgIGZvcm1zOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGxhYmVsOiBcIk5vbSBkZSBkb21haW5lXCIsXG4gICAgICAgICAgICAgIGtleTogXCJEb21haW5OYW1lXCIsXG4gICAgICAgICAgICAgIGV4cGFuZE9uYm9hcmRpbmc6IHRydWUsXG4gICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZTogbnVsbCxcbiAgICAgICAgICAgICAgdmFsdWU6IG51bGwsXG4gICAgICAgICAgICAgIHNpemU6IDgwLFxuICAgICAgICAgICAgICBpc01hbmRhdG9yeTogdHJ1ZSxcbiAgICAgICAgICAgICAgb3RoZXJWYWx1ZTogJycsXG4gICAgICAgICAgICAgIHR5cGU6IFwidGV4dFwiLFxuICAgICAgICAgICAgICBlZGl0YWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgaXNDb25kaXRpb25hbDogZmFsc2UsXG4gICAgICAgICAgICAgIGNvbmRpdGlvblZhbHVlOiBcIlwiLFxuICAgICAgICAgICAgICBjb25kaXRpb246IHt9LFxuICAgICAgICAgICAgICBkZWxldGVhYmxlOiBmYWxzZSxcbiAgICAgICAgICAgICAgc3ViTGV2ZWw6IDIsXG4gICAgICAgICAgICAgIGV4cGFuZE1vcmU6IGZhbHNlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbGFiZWw6IFwiVm90cmUgbG9naW5cIixcbiAgICAgICAgICAgICAga2V5OiBcIllvdXJMb2dpblwiLFxuICAgICAgICAgICAgICBleHBhbmRPbmJvYXJkaW5nOiB0cnVlLFxuICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU6IG51bGwsXG4gICAgICAgICAgICAgIHZhbHVlOiBudWxsLFxuICAgICAgICAgICAgICBzaXplOiA4MCxcbiAgICAgICAgICAgICAgaXNNYW5kYXRvcnk6IHRydWUsXG4gICAgICAgICAgICAgIG90aGVyVmFsdWU6ICcnLFxuICAgICAgICAgICAgICB0eXBlOiBcInRleHRcIixcbiAgICAgICAgICAgICAgZWRpdGFibGU6IHRydWUsXG4gICAgICAgICAgICAgIGlzQ29uZGl0aW9uYWw6IGZhbHNlLFxuICAgICAgICAgICAgICBjb25kaXRpb25WYWx1ZTogXCJcIixcbiAgICAgICAgICAgICAgY29uZGl0aW9uOiB7fSxcbiAgICAgICAgICAgICAgZGVsZXRlYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgc3ViTGV2ZWw6IDIsXG4gICAgICAgICAgICAgIGV4cGFuZE1vcmU6IGZhbHNlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbGFiZWw6IFwiVm90cmUgbW90IGRlIHBhc3NlXCIsXG4gICAgICAgICAgICAgIGtleTogXCJZb3VyUGFzc3dvcmRcIixcbiAgICAgICAgICAgICAgZXhwYW5kT25ib2FyZGluZzogdHJ1ZSxcbiAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlOiBudWxsLFxuICAgICAgICAgICAgICB2YWx1ZTogbnVsbCxcbiAgICAgICAgICAgICAgc2l6ZTogODAsXG4gICAgICAgICAgICAgIGlzTWFuZGF0b3J5OiB0cnVlLFxuICAgICAgICAgICAgICBvdGhlclZhbHVlOiAnJyxcbiAgICAgICAgICAgICAgdHlwZTogXCJwYXNzd29yZFwiLFxuICAgICAgICAgICAgICBlZGl0YWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgaXNDb25kaXRpb25hbDogZmFsc2UsXG4gICAgICAgICAgICAgIGNvbmRpdGlvblZhbHVlOiBcIlwiLFxuICAgICAgICAgICAgICBjb25kaXRpb246IHt9LFxuICAgICAgICAgICAgICBkZWxldGVhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICBzdWJMZXZlbDogMixcbiAgICAgICAgICAgICAgZXhwYW5kTW9yZTogZmFsc2UsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBsYWJlbDogXCJHcm91cGUgZGUgc8OpY3VyaXTDqVwiLFxuICAgICAgICAgICAgICBrZXk6IFwiR3JvdXBTZWN1cml0eVwiLFxuICAgICAgICAgICAgICBleHBhbmRPbmJvYXJkaW5nOiB0cnVlLFxuICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU6IG51bGwsXG4gICAgICAgICAgICAgIHZhbHVlOiB0cnVlLFxuICAgICAgICAgICAgICBzaXplOiA4MCxcbiAgICAgICAgICAgICAgaXNNYW5kYXRvcnk6IHRydWUsXG4gICAgICAgICAgICAgIG90aGVyVmFsdWU6ICcnLFxuICAgICAgICAgICAgICB0eXBlOiBcImNoZWNrYm94XCIsXG4gICAgICAgICAgICAgIGVkaXRhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICBpc0NvbmRpdGlvbmFsOiBmYWxzZSxcbiAgICAgICAgICAgICAgY29uZGl0aW9uVmFsdWU6IFwiXCIsXG4gICAgICAgICAgICAgIGNvbmRpdGlvbjoge30sXG4gICAgICAgICAgICAgIGRlbGV0ZWFibGU6IHRydWUsXG4gICAgICAgICAgICAgIHN1YkxldmVsOiAyLFxuICAgICAgICAgICAgICBleHBhbmRNb3JlOiBmYWxzZSxcbiAgICAgICAgICAgICAgZm9ybXM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBsYWJlbDogXCJVdGlsaXNhdGV1ciBhdmVjIGxlcyBkcm9pdHMgc2ltaWxhaXJlc1wiLFxuICAgICAgICAgICAgICAgICAga2V5OiBcIlVzZXJXaXRoU2ltaWxhckFjY2Vzc1wiLFxuICAgICAgICAgICAgICAgICAgZXhwYW5kT25ib2FyZGluZzogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZTogbnVsbCxcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiBudWxsLFxuICAgICAgICAgICAgICAgICAgc2l6ZTogODAsXG4gICAgICAgICAgICAgICAgICBpc01hbmRhdG9yeTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgIG90aGVyVmFsdWU6ICcnLFxuICAgICAgICAgICAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICBlZGl0YWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgIGlzQ29uZGl0aW9uYWw6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgY29uZGl0aW9uVmFsdWU6IFwiXCIsXG4gICAgICAgICAgICAgICAgICBjb25kaXRpb246IHt9LFxuICAgICAgICAgICAgICAgICAgZGVsZXRlYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgIHN1YkxldmVsOiAzLFxuICAgICAgICAgICAgICAgICAgZXhwYW5kTW9yZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBsYWJlbDogXCJEZXNjcmlwdGlvbnNcIixcbiAgICAgICAgICAgICAgICAgIGtleTogXCJEZXNjcmlwdGlvblwiLFxuICAgICAgICAgICAgICAgICAgZXhwYW5kT25ib2FyZGluZzogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZTogbnVsbCxcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiBudWxsLFxuICAgICAgICAgICAgICAgICAgc2l6ZTogMjU1LFxuICAgICAgICAgICAgICAgICAgaXNNYW5kYXRvcnk6IHRydWUsXG4gICAgICAgICAgICAgICAgICBvdGhlclZhbHVlOiAnJyxcbiAgICAgICAgICAgICAgICAgIHR5cGU6IFwidGV4dGFyZWFcIixcbiAgICAgICAgICAgICAgICAgIGVkaXRhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgaXNDb25kaXRpb25hbDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICBjb25kaXRpb25WYWx1ZTogXCJcIixcbiAgICAgICAgICAgICAgICAgIGNvbmRpdGlvbjoge30sXG4gICAgICAgICAgICAgICAgICBkZWxldGVhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgc3ViTGV2ZWw6IDMsXG4gICAgICAgICAgICAgICAgICBleHBhbmRNb3JlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwiTWVzc2FnZXJpZVwiLFxuICAgICAga2V5OiAnbWVzc2FnZXJpZScsXG4gICAgICBleHBhbmRNb3JlOiBmYWxzZSxcbiAgICAgIHN1ZmZpeEVuZHBvaW50OiBcImNhdGVnb3J5L21lc3NhZ2VyaWVcIixcbiAgICAgIHNlbGVjdGVkOiB0cnVlLFxuICAgICAgZWRpdGFibGU6IHRydWUsXG4gICAgICBpc0NvbmRpdGlvbmFsOiBmYWxzZSxcbiAgICAgIGNvbmRpdGlvblZhbHVlOiBcIlwiLFxuICAgICAgY29uZGl0aW9uOiB7fSxcbiAgICAgIGRlbGV0ZWFibGU6IHRydWUsXG4gICAgICBleHBhbmRPbmJvYXJkaW5nOiB0cnVlLFxuICAgICAgZGVmYXVsdFZhbHVlOiBmYWxzZSxcbiAgICAgIHNlbGVjdG9yOiB7XG4gICAgICAgIGxhYmVsOiBcIkNvbXBhbnlcIixcbiAgICAgICAga2V5OiBcIkNvbXBhbnlcIixcbiAgICAgICAgZGVmYXVsdFZhbHVlOiBbeyB2YWx1ZTogXCJOb3d0ZWFtXCIsIGNoZWNrZWQ6IHRydWUgfSwgeyB2YWx1ZTogXCJJbnRlcm5hbFwiLCBjaGVja2VkOiBmYWxzZSB9XSxcbiAgICAgICAgdmFsdWU6IFwiTm93dGVhbVwiXG4gICAgICB9LFxuICAgICAgdGlja2V0VHlwZToge1xuICAgICAgICBsYWJlbDogXCJUeXBlIGRlIHRpY2tldFwiLFxuICAgICAgICBrZXk6IFwidHlja2V0VHlwZVwiLFxuICAgICAgICBkZWZhdWx0VmFsdWU6IFt7IHZhbHVlOiBcIkNyw6lhdGlvbiBkZSBjb21wdGVcIiwgY2hlY2tlZDogdHJ1ZSwga2V5OiBcIkNyZWF0aW9uX2RlX2NvbXB0ZVwiIH0sIHsgdmFsdWU6IFwiQ29uZmlndXJhdGlvbiBkZSBwb3N0ZVwiLCBjaGVja2VkOiBmYWxzZSwga2V5OiBcIkNvbmZpZ3VyYXRpb25fZGVfcG9zdGVcIiB9XSxcbiAgICAgICAgdmFsdWU6IFwiQ3JlYXRpb25fZGVfY29tcHRlXCJcbiAgICAgIH0sXG4gICAgICBmb3JtczogW1xuICAgICAgICB7XG4gICAgICAgICAgbGFiZWw6IFwiQWRyZXNzZSBtYWlsIMOgIGNyw6llclwiLFxuICAgICAgICAgIGtleTogXCJFbWFpbFRvQ3JlYXRlXCIsXG4gICAgICAgICAgZXhwYW5kT25ib2FyZGluZzogdHJ1ZSxcbiAgICAgICAgICBkZWZhdWx0VmFsdWU6IG51bGwsXG4gICAgICAgICAgdmFsdWU6IHRydWUsXG4gICAgICAgICAgc2l6ZTogODAsXG4gICAgICAgICAgaXNNYW5kYXRvcnk6IHRydWUsXG4gICAgICAgICAgb3RoZXJWYWx1ZTogJycsXG4gICAgICAgICAgdHlwZTogXCJjaGVja2JveFwiLFxuICAgICAgICAgIGVkaXRhYmxlOiB0cnVlLFxuICAgICAgICAgIGlzQ29uZGl0aW9uYWw6IGZhbHNlLFxuICAgICAgICAgIGNvbmRpdGlvblZhbHVlOiBcIlwiLFxuICAgICAgICAgIGNvbmRpdGlvbjoge30sXG4gICAgICAgICAgZGVsZXRlYWJsZTogdHJ1ZSxcbiAgICAgICAgICBzdWJMZXZlbDogMSxcbiAgICAgICAgICBleHBhbmRNb3JlOiBmYWxzZSxcbiAgICAgICAgICAvKnNlbGVjdG9yOiB7XG4gICAgICAgICAgICBsYWJlbDogXCJDb21wYW55XCIsXG4gICAgICAgICAgICBrZXk6IFwiQ29tcGFueVwiLFxuICAgICAgICAgICAgZGVmYXVsdFZhbHVlOiBbeyB2YWx1ZTogXCJOb3d0ZWFtXCIsIGNoZWNrZWQ6IHRydWUgfSwgeyB2YWx1ZTogXCJJbnRlcm5hbFwiLCBjaGVja2VkOiBmYWxzZSB9XSxcbiAgICAgICAgICAgIHZhbHVlOiBcIk5vd3RlYW1cIlxuICAgICAgICAgIH0sKi9cbiAgICAgICAgICBmb3JtczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBsYWJlbDogXCJBZHJlc3NlIG1haWxcIixcbiAgICAgICAgICAgICAga2V5OiBcIkVtYWlsXCIsXG4gICAgICAgICAgICAgIGV4cGFuZE9uYm9hcmRpbmc6IHRydWUsXG4gICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZTogbnVsbCxcbiAgICAgICAgICAgICAgdmFsdWU6IG51bGwsXG4gICAgICAgICAgICAgIHNpemU6IDgwLFxuICAgICAgICAgICAgICBpc01hbmRhdG9yeTogdHJ1ZSxcbiAgICAgICAgICAgICAgb3RoZXJWYWx1ZTogJycsXG4gICAgICAgICAgICAgIHR5cGU6IFwiZW1haWxcIixcbiAgICAgICAgICAgICAgZWRpdGFibGU6IHRydWUsXG4gICAgICAgICAgICAgIGlzQ29uZGl0aW9uYWw6IGZhbHNlLFxuICAgICAgICAgICAgICBjb25kaXRpb25WYWx1ZTogXCJcIixcbiAgICAgICAgICAgICAgY29uZGl0aW9uOiB7fSxcbiAgICAgICAgICAgICAgZGVsZXRlYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgc3ViTGV2ZWw6IDIsXG4gICAgICAgICAgICAgIGV4cGFuZE1vcmU6IGZhbHNlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbGFiZWw6IFwiVHlwZSBkZSBsaWNlbmNlIChzaSBnw6lyw6llcyBwYXIgbGUgY2xpZW50KVwiLFxuICAgICAgICAgICAgICBrZXk6IFwiU2VyaWFsS2V5XCIsXG4gICAgICAgICAgICAgIGV4cGFuZE9uYm9hcmRpbmc6IHRydWUsXG4gICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZTogbnVsbCxcbiAgICAgICAgICAgICAgdmFsdWU6IG51bGwsXG4gICAgICAgICAgICAgIHNpemU6IDEwMDAsXG4gICAgICAgICAgICAgIGlzTWFuZGF0b3J5OiB0cnVlLFxuICAgICAgICAgICAgICBvdGhlclZhbHVlOiAnJyxcbiAgICAgICAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgIGVkaXRhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICBpc0NvbmRpdGlvbmFsOiBmYWxzZSxcbiAgICAgICAgICAgICAgY29uZGl0aW9uVmFsdWU6IFwiXCIsXG4gICAgICAgICAgICAgIGNvbmRpdGlvbjoge30sXG4gICAgICAgICAgICAgIGRlbGV0ZWFibGU6IHRydWUsXG4gICAgICAgICAgICAgIHN1YkxldmVsOiAyLFxuICAgICAgICAgICAgICBleHBhbmRNb3JlOiBmYWxzZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGxhYmVsOiBcIkxpc3RlcyAgZGUgZGlzdHJpYnV0aW9uXCIsXG4gICAgICAgICAga2V5OiBcIkRpc3RyaWJ1dGlvbkxpc3RcIixcbiAgICAgICAgICBleHBhbmRPbmJvYXJkaW5nOiB0cnVlLFxuICAgICAgICAgIGRlZmF1bHRWYWx1ZTogbnVsbCxcbiAgICAgICAgICB2YWx1ZTogdHJ1ZSxcbiAgICAgICAgICBzaXplOiA4MCxcbiAgICAgICAgICBpc01hbmRhdG9yeTogdHJ1ZSxcbiAgICAgICAgICBvdGhlclZhbHVlOiAnJyxcbiAgICAgICAgICB0eXBlOiBcImNoZWNrYm94XCIsXG4gICAgICAgICAgZWRpdGFibGU6IHRydWUsXG4gICAgICAgICAgaXNDb25kaXRpb25hbDogZmFsc2UsXG4gICAgICAgICAgY29uZGl0aW9uVmFsdWU6IFwiXCIsXG4gICAgICAgICAgY29uZGl0aW9uOiB7fSxcbiAgICAgICAgICBkZWxldGVhYmxlOiB0cnVlLFxuICAgICAgICAgIHN1YkxldmVsOiAxLFxuICAgICAgICAgIGV4cGFuZE1vcmU6IGZhbHNlLFxuICAgICAgICAgIC8qc2VsZWN0b3I6IHtcbiAgICAgICAgICAgIGxhYmVsOiBcIkNvbXBhbnlcIixcbiAgICAgICAgICAgIGtleTogXCJDb21wYW55XCIsXG4gICAgICAgICAgICBkZWZhdWx0VmFsdWU6IFt7IHZhbHVlOiBcIk5vd3RlYW1cIiwgY2hlY2tlZDogdHJ1ZSB9LCB7IHZhbHVlOiBcIkludGVybmFsXCIsIGNoZWNrZWQ6IGZhbHNlIH1dLFxuICAgICAgICAgICAgdmFsdWU6IFwiTm93dGVhbVwiXG4gICAgICAgICAgfSwqL1xuICAgICAgICAgIGZvcm1zOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGxhYmVsOiBcIlV0aWxpc2F0ZXVyIGF2ZWMgbGVzIGxpc3RlcyBzaW1pbGFpcmVzXCIsXG4gICAgICAgICAgICAgIGtleTogXCJVc2VyV2l0aFNpbWlsYXJMaXN0XCIsXG4gICAgICAgICAgICAgIGV4cGFuZE9uYm9hcmRpbmc6IHRydWUsXG4gICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZTogbnVsbCxcbiAgICAgICAgICAgICAgdmFsdWU6IG51bGwsXG4gICAgICAgICAgICAgIHNpemU6IDgwLFxuICAgICAgICAgICAgICBpc01hbmRhdG9yeTogdHJ1ZSxcbiAgICAgICAgICAgICAgb3RoZXJWYWx1ZTogJycsXG4gICAgICAgICAgICAgIHR5cGU6IFwidGV4dFwiLFxuICAgICAgICAgICAgICBlZGl0YWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgaXNDb25kaXRpb25hbDogZmFsc2UsXG4gICAgICAgICAgICAgIGNvbmRpdGlvblZhbHVlOiBcIlwiLFxuICAgICAgICAgICAgICBjb25kaXRpb246IHt9LFxuICAgICAgICAgICAgICBkZWxldGVhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICBzdWJMZXZlbDogMixcbiAgICAgICAgICAgICAgZXhwYW5kTW9yZTogZmFsc2UsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBsYWJlbDogXCJEZXNjcmlwdGlvbnNcIixcbiAgICAgICAgICAgICAga2V5OiBcIkRlc2NyaXB0aW9uXCIsXG4gICAgICAgICAgICAgIGV4cGFuZE9uYm9hcmRpbmc6IHRydWUsXG4gICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZTogbnVsbCxcbiAgICAgICAgICAgICAgdmFsdWU6IG51bGwsXG4gICAgICAgICAgICAgIHNpemU6IDEwMDAsXG4gICAgICAgICAgICAgIGlzTWFuZGF0b3J5OiB0cnVlLFxuICAgICAgICAgICAgICBvdGhlclZhbHVlOiAnJyxcbiAgICAgICAgICAgICAgdHlwZTogXCJ0ZXh0YXJlYVwiLFxuICAgICAgICAgICAgICBlZGl0YWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgaXNDb25kaXRpb25hbDogZmFsc2UsXG4gICAgICAgICAgICAgIGNvbmRpdGlvblZhbHVlOiBcIlwiLFxuICAgICAgICAgICAgICBjb25kaXRpb246IHt9LFxuICAgICAgICAgICAgICBkZWxldGVhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICBzdWJMZXZlbDogMixcbiAgICAgICAgICAgICAgZXhwYW5kTW9yZTogZmFsc2UsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBsYWJlbDogXCJBam91dGVyIGRlcyBib2l0ZXMgbWFpbHMgZMOpbMOpZ3XDqXNcIixcbiAgICAgICAgICBrZXk6IFwiQWRkSW5ib3hNYWlsRGVsZWdhdGVcIixcbiAgICAgICAgICBleHBhbmRPbmJvYXJkaW5nOiB0cnVlLFxuICAgICAgICAgIGRlZmF1bHRWYWx1ZTogbnVsbCxcbiAgICAgICAgICB2YWx1ZTogdHJ1ZSxcbiAgICAgICAgICBzaXplOiA4MCxcbiAgICAgICAgICBpc01hbmRhdG9yeTogdHJ1ZSxcbiAgICAgICAgICBvdGhlclZhbHVlOiAnJyxcbiAgICAgICAgICB0eXBlOiBcImNoZWNrYm94XCIsXG4gICAgICAgICAgZWRpdGFibGU6IHRydWUsXG4gICAgICAgICAgaXNDb25kaXRpb25hbDogZmFsc2UsXG4gICAgICAgICAgY29uZGl0aW9uVmFsdWU6IFwiXCIsXG4gICAgICAgICAgY29uZGl0aW9uOiB7fSxcbiAgICAgICAgICBkZWxldGVhYmxlOiB0cnVlLFxuICAgICAgICAgIHN1YkxldmVsOiAxLFxuICAgICAgICAgIGV4cGFuZE1vcmU6IGZhbHNlLFxuICAgICAgICAgIC8qc2VsZWN0b3I6IHtcbiAgICAgICAgICAgIGxhYmVsOiBcIkNvbXBhbnlcIixcbiAgICAgICAgICAgIGtleTogXCJDb21wYW55XCIsXG4gICAgICAgICAgICBkZWZhdWx0VmFsdWU6IFt7IHZhbHVlOiBcIk5vd3RlYW1cIiwgY2hlY2tlZDogdHJ1ZSB9LCB7IHZhbHVlOiBcIkludGVybmFsXCIsIGNoZWNrZWQ6IGZhbHNlIH1dLFxuICAgICAgICAgICAgdmFsdWU6IFwiTm93dGVhbVwiXG4gICAgICAgICAgfSwqL1xuICAgICAgICAgIGZvcm1zOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGxhYmVsOiBcIkRlc2NyaXB0aW9uc1wiLFxuICAgICAgICAgICAgICBrZXk6IFwiRGVzY3JpcHRpb25cIixcbiAgICAgICAgICAgICAgZXhwYW5kT25ib2FyZGluZzogdHJ1ZSxcbiAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlOiBudWxsLFxuICAgICAgICAgICAgICB2YWx1ZTogbnVsbCxcbiAgICAgICAgICAgICAgc2l6ZTogMTAwMCxcbiAgICAgICAgICAgICAgaXNNYW5kYXRvcnk6IHRydWUsXG4gICAgICAgICAgICAgIG90aGVyVmFsdWU6ICcnLFxuICAgICAgICAgICAgICB0eXBlOiBcInRleHRhcmVhXCIsXG4gICAgICAgICAgICAgIGVkaXRhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICBpc0NvbmRpdGlvbmFsOiBmYWxzZSxcbiAgICAgICAgICAgICAgY29uZGl0aW9uVmFsdWU6IFwiXCIsXG4gICAgICAgICAgICAgIGNvbmRpdGlvbjoge30sXG4gICAgICAgICAgICAgIGRlbGV0ZWFibGU6IHRydWUsXG4gICAgICAgICAgICAgIHN1YkxldmVsOiAyLFxuICAgICAgICAgICAgICBleHBhbmRNb3JlOiBmYWxzZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcIlNlcnZldXJcIixcbiAgICAgIGtleTogJ3NlcnZldXInLFxuICAgICAgZXhwYW5kTW9yZTogZmFsc2UsXG4gICAgICBzdWZmaXhFbmRwb2ludDogXCJjYXRlZ29yeS9zZXJ2ZXVyXCIsXG4gICAgICBzZWxlY3RlZDogdHJ1ZSxcbiAgICAgIGVkaXRhYmxlOiB0cnVlLFxuICAgICAgaXNDb25kaXRpb25hbDogZmFsc2UsXG4gICAgICBjb25kaXRpb25WYWx1ZTogXCJcIixcbiAgICAgIGNvbmRpdGlvbjoge30sXG4gICAgICBkZWxldGVhYmxlOiB0cnVlLFxuICAgICAgZXhwYW5kT25ib2FyZGluZzogdHJ1ZSxcbiAgICAgIGRlZmF1bHRWYWx1ZTogZmFsc2UsXG4gICAgICBzZWxlY3Rvcjoge1xuICAgICAgICBsYWJlbDogXCJDb21wYW55XCIsXG4gICAgICAgIGtleTogXCJDb21wYW55XCIsXG4gICAgICAgIGRlZmF1bHRWYWx1ZTogW3sgdmFsdWU6IFwiTm93dGVhbVwiLCBjaGVja2VkOiB0cnVlIH0sIHsgdmFsdWU6IFwiSW50ZXJuYWxcIiwgY2hlY2tlZDogZmFsc2UgfV0sXG4gICAgICAgIHZhbHVlOiBcIk5vd3RlYW1cIlxuICAgICAgfSxcbiAgICAgIHRpY2tldFR5cGU6IHtcbiAgICAgICAgbGFiZWw6IFwiVHlwZSBkZSB0aWNrZXRcIixcbiAgICAgICAga2V5OiBcInR5Y2tldFR5cGVcIixcbiAgICAgICAgZGVmYXVsdFZhbHVlOiBbeyB2YWx1ZTogXCJDcsOpYXRpb24gZGUgY29tcHRlXCIsIGNoZWNrZWQ6IHRydWUsIGtleTogXCJDcmVhdGlvbl9kZV9jb21wdGVcIiB9LCB7IHZhbHVlOiBcIkNvbmZpZ3VyYXRpb24gZGUgcG9zdGVcIiwgY2hlY2tlZDogZmFsc2UsIGtleTogXCJDb25maWd1cmF0aW9uX2RlX3Bvc3RlXCIgfV0sXG4gICAgICAgIHZhbHVlOiBcIkNyZWF0aW9uX2RlX2NvbXB0ZVwiXG4gICAgICB9LFxuICAgICAgZm9ybXM6IFtcbiAgICAgICAge1xuICAgICAgICAgIGxhYmVsOiBcIkFjY8OocyBhdXggbGVjdGV1cnMgcsOpc2VhdXhcIixcbiAgICAgICAgICBrZXk6IFwiUmVhZE5ldHdvcmtBY2Nlc3NcIixcbiAgICAgICAgICBleHBhbmRPbmJvYXJkaW5nOiB0cnVlLFxuICAgICAgICAgIGRlZmF1bHRWYWx1ZTogbnVsbCxcbiAgICAgICAgICB2YWx1ZTogdHJ1ZSxcbiAgICAgICAgICBzaXplOiA4MCxcbiAgICAgICAgICBpc01hbmRhdG9yeTogZmFsc2UsXG4gICAgICAgICAgb3RoZXJWYWx1ZTogJycsXG4gICAgICAgICAgdHlwZTogXCJjaGVja2JveFwiLFxuICAgICAgICAgIGVkaXRhYmxlOiB0cnVlLFxuICAgICAgICAgIGlzQ29uZGl0aW9uYWw6IGZhbHNlLFxuICAgICAgICAgIGNvbmRpdGlvblZhbHVlOiBcIlwiLFxuICAgICAgICAgIGNvbmRpdGlvbjoge30sXG4gICAgICAgICAgZGVsZXRlYWJsZTogdHJ1ZSxcbiAgICAgICAgICBzdWJMZXZlbDogMSxcbiAgICAgICAgICBleHBhbmRNb3JlOiBmYWxzZSxcbiAgICAgICAgICAvKnNlbGVjdG9yOiB7XG4gICAgICAgICAgICBsYWJlbDogXCJDb21wYW55XCIsXG4gICAgICAgICAgICBrZXk6IFwiQ29tcGFueVwiLFxuICAgICAgICAgICAgZGVmYXVsdFZhbHVlOiBbeyB2YWx1ZTogXCJOb3d0ZWFtXCIsIGNoZWNrZWQ6IHRydWUgfSwgeyB2YWx1ZTogXCJJbnRlcm5hbFwiLCBjaGVja2VkOiBmYWxzZSB9XSxcbiAgICAgICAgICAgIHZhbHVlOiBcIk5vd3RlYW1cIlxuICAgICAgICAgIH0sKi9cbiAgICAgICAgICBmb3JtczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBsYWJlbDogXCJOb20gZHUgc2VydmV1clwiLFxuICAgICAgICAgICAgICBrZXk6IFwiU2VydmVyTmFtZVwiLFxuICAgICAgICAgICAgICBleHBhbmRPbmJvYXJkaW5nOiB0cnVlLFxuICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU6IG51bGwsXG4gICAgICAgICAgICAgIHZhbHVlOiBudWxsLFxuICAgICAgICAgICAgICBzaXplOiA4MCxcbiAgICAgICAgICAgICAgaXNNYW5kYXRvcnk6IHRydWUsXG4gICAgICAgICAgICAgIG90aGVyVmFsdWU6ICcnLFxuICAgICAgICAgICAgICB0eXBlOiBcInRleHRcIixcbiAgICAgICAgICAgICAgZWRpdGFibGU6IHRydWUsXG4gICAgICAgICAgICAgIGlzQ29uZGl0aW9uYWw6IGZhbHNlLFxuICAgICAgICAgICAgICBjb25kaXRpb25WYWx1ZTogXCJcIixcbiAgICAgICAgICAgICAgY29uZGl0aW9uOiB7fSxcbiAgICAgICAgICAgICAgZGVsZXRlYWJsZTogZmFsc2UsXG4gICAgICAgICAgICAgIHN1YkxldmVsOiAyLFxuICAgICAgICAgICAgICBleHBhbmRNb3JlOiBmYWxzZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGxhYmVsOiBcIkNoZW1pbiBkdSBkb3NzaWVyXCIsXG4gICAgICAgICAgICAgIGtleTogXCJGb2xkZXJQYXRoXCIsXG4gICAgICAgICAgICAgIGV4cGFuZE9uYm9hcmRpbmc6IHRydWUsXG4gICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZTogbnVsbCxcbiAgICAgICAgICAgICAgdmFsdWU6IG51bGwsXG4gICAgICAgICAgICAgIHNpemU6IDgwLFxuICAgICAgICAgICAgICBpc01hbmRhdG9yeTogdHJ1ZSxcbiAgICAgICAgICAgICAgb3RoZXJWYWx1ZTogJycsXG4gICAgICAgICAgICAgIHR5cGU6IFwidGV4dFwiLFxuICAgICAgICAgICAgICBlZGl0YWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgaXNDb25kaXRpb25hbDogZmFsc2UsXG4gICAgICAgICAgICAgIGNvbmRpdGlvblZhbHVlOiBcIlwiLFxuICAgICAgICAgICAgICBjb25kaXRpb246IHt9LFxuICAgICAgICAgICAgICBkZWxldGVhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICBzdWJMZXZlbDogMixcbiAgICAgICAgICAgICAgZXhwYW5kTW9yZTogZmFsc2UsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBsYWJlbDogXCJMZXR0cmUgw6AgYXR0cmlidWVyXCIsXG4gICAgICAgICAgICAgIGtleTogXCJBdHRyaWJ1dExldHRlclwiLFxuICAgICAgICAgICAgICBleHBhbmRPbmJvYXJkaW5nOiB0cnVlLFxuICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU6IG51bGwsXG4gICAgICAgICAgICAgIHZhbHVlOiBudWxsLFxuICAgICAgICAgICAgICBzaXplOiA4MCxcbiAgICAgICAgICAgICAgaXNNYW5kYXRvcnk6IHRydWUsXG4gICAgICAgICAgICAgIG90aGVyVmFsdWU6ICcnLFxuICAgICAgICAgICAgICB0eXBlOiBcInRleHRcIixcbiAgICAgICAgICAgICAgZWRpdGFibGU6IHRydWUsXG4gICAgICAgICAgICAgIGlzQ29uZGl0aW9uYWw6IGZhbHNlLFxuICAgICAgICAgICAgICBjb25kaXRpb25WYWx1ZTogXCJcIixcbiAgICAgICAgICAgICAgY29uZGl0aW9uOiB7fSxcbiAgICAgICAgICAgICAgZGVsZXRlYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgc3ViTGV2ZWw6IDIsXG4gICAgICAgICAgICAgIGV4cGFuZE1vcmU6IGZhbHNlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwiVlBOXCIsXG4gICAgICBrZXk6ICd2cG4nLFxuICAgICAgZXhwYW5kTW9yZTogZmFsc2UsXG4gICAgICBzdWZmaXhFbmRwb2ludDogXCJjYXRlZ29yeS92cG5cIixcbiAgICAgIHNlbGVjdGVkOiB0cnVlLFxuICAgICAgZXhwYW5kT25ib2FyZGluZzogdHJ1ZSxcbiAgICAgIGRlZmF1bHRWYWx1ZTogZmFsc2UsXG4gICAgICBlZGl0YWJsZTogdHJ1ZSxcbiAgICAgIGlzQ29uZGl0aW9uYWw6IGZhbHNlLFxuICAgICAgY29uZGl0aW9uVmFsdWU6IFwiXCIsXG4gICAgICBjb25kaXRpb246IHt9LFxuICAgICAgZGVsZXRlYWJsZTogdHJ1ZSxcbiAgICAgIHNlbGVjdG9yOiB7XG4gICAgICAgIGxhYmVsOiBcIkNvbXBhbnlcIixcbiAgICAgICAga2V5OiBcIkNvbXBhbnlcIixcbiAgICAgICAgZGVmYXVsdFZhbHVlOiBbeyB2YWx1ZTogXCJOb3d0ZWFtXCIsIGNoZWNrZWQ6IHRydWUgfSwgeyB2YWx1ZTogXCJJbnRlcm5hbFwiLCBjaGVja2VkOiBmYWxzZSB9XSxcbiAgICAgICAgdmFsdWU6IFwiTm93dGVhbVwiXG4gICAgICB9LFxuICAgICAgdGlja2V0VHlwZToge1xuICAgICAgICBsYWJlbDogXCJUeXBlIGRlIHRpY2tldFwiLFxuICAgICAgICBrZXk6IFwidHlja2V0VHlwZVwiLFxuICAgICAgICBkZWZhdWx0VmFsdWU6IFt7IHZhbHVlOiBcIkNyw6lhdGlvbiBkZSBjb21wdGVcIiwgY2hlY2tlZDogdHJ1ZSwga2V5OiBcIkNyZWF0aW9uX2RlX2NvbXB0ZVwiIH0sIHsgdmFsdWU6IFwiQ29uZmlndXJhdGlvbiBkZSBwb3N0ZVwiLCBjaGVja2VkOiBmYWxzZSwga2V5OiBcIkNvbmZpZ3VyYXRpb25fZGVfcG9zdGVcIiB9XSxcbiAgICAgICAgdmFsdWU6IFwiQ3JlYXRpb25fZGVfY29tcHRlXCJcbiAgICAgIH0sXG4gICAgICBmb3JtczogW1xuICAgICAgICB7XG4gICAgICAgICAgbGFiZWw6IFwiQWNjw6hzIGF1IFZQTlwiLFxuICAgICAgICAgIGtleTogXCJWcG5BY2Nlc3NcIixcbiAgICAgICAgICBleHBhbmRPbmJvYXJkaW5nOiB0cnVlLFxuICAgICAgICAgIGRlZmF1bHRWYWx1ZTogbnVsbCxcbiAgICAgICAgICB2YWx1ZTogdHJ1ZSxcbiAgICAgICAgICBzaXplOiA4MCxcbiAgICAgICAgICBpc01hbmRhdG9yeTogZmFsc2UsXG4gICAgICAgICAgb3RoZXJWYWx1ZTogJycsXG4gICAgICAgICAgdHlwZTogXCJjaGVja2JveFwiLFxuICAgICAgICAgIGVkaXRhYmxlOiB0cnVlLFxuICAgICAgICAgIGlzQ29uZGl0aW9uYWw6IGZhbHNlLFxuICAgICAgICAgIGNvbmRpdGlvblZhbHVlOiBcIlwiLFxuICAgICAgICAgIGNvbmRpdGlvbjoge30sXG4gICAgICAgICAgZGVsZXRlYWJsZTogdHJ1ZSxcbiAgICAgICAgICBzdWJMZXZlbDogMSxcbiAgICAgICAgICBleHBhbmRNb3JlOiBmYWxzZSxcbiAgICAgICAgICAvL2Zvcm1zOiBbXVxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwiSW1wcmltYW50ZXNcIixcbiAgICAgIGtleTogJ2ltcHJpbWFudGVzJyxcbiAgICAgIGV4cGFuZE1vcmU6IGZhbHNlLFxuICAgICAgc3VmZml4RW5kcG9pbnQ6IFwiY2F0ZWdvcnkvaW1wcmltZW50ZVwiLFxuICAgICAgc2VsZWN0ZWQ6IHRydWUsXG4gICAgICBlZGl0YWJsZTogdHJ1ZSxcbiAgICAgIGlzQ29uZGl0aW9uYWw6IGZhbHNlLFxuICAgICAgY29uZGl0aW9uVmFsdWU6IFwiXCIsXG4gICAgICBjb25kaXRpb246IHt9LFxuICAgICAgZGVsZXRlYWJsZTogdHJ1ZSxcbiAgICAgIGV4cGFuZE9uYm9hcmRpbmc6IHRydWUsXG4gICAgICBkZWZhdWx0VmFsdWU6IGZhbHNlLFxuICAgICAgdGlja2V0VHlwZToge1xuICAgICAgICBsYWJlbDogXCJUeXBlIGRlIHRpY2tldFwiLFxuICAgICAgICBrZXk6IFwidHlja2V0VHlwZVwiLFxuICAgICAgICBkZWZhdWx0VmFsdWU6IFt7IHZhbHVlOiBcIkNyw6lhdGlvbiBkZSBjb21wdGVcIiwgY2hlY2tlZDogdHJ1ZSwga2V5OiBcIkNyZWF0aW9uX2RlX2NvbXB0ZVwiIH0sIHsgdmFsdWU6IFwiQ29uZmlndXJhdGlvbiBkZSBwb3N0ZVwiLCBjaGVja2VkOiBmYWxzZSwga2V5OiBcIkNvbmZpZ3VyYXRpb25fZGVfcG9zdGVcIiB9XSxcbiAgICAgICAgdmFsdWU6IFwiQ3JlYXRpb25fZGVfY29tcHRlXCJcbiAgICAgIH0sXG4gICAgICBzZWxlY3Rvcjoge1xuICAgICAgICBsYWJlbDogXCJDb21wYW55XCIsXG4gICAgICAgIGtleTogXCJDb21wYW55XCIsXG4gICAgICAgIGRlZmF1bHRWYWx1ZTogW3sgdmFsdWU6IFwiTm93dGVhbVwiLCBjaGVja2VkOiB0cnVlIH0sIHsgdmFsdWU6IFwiSW50ZXJuYWxcIiwgY2hlY2tlZDogZmFsc2UgfV0sXG4gICAgICAgIHZhbHVlOiBcIk5vd3RlYW1cIlxuICAgICAgfSxcbiAgICAgIGZvcm1zOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBsYWJlbDogXCJBY2PDqHMgYXV4IGltcHJpbWFudGVzXCIsXG4gICAgICAgICAga2V5OiBcIlByaW50ZXJBY2Nlc3NcIixcbiAgICAgICAgICBleHBhbmRPbmJvYXJkaW5nOiB0cnVlLFxuICAgICAgICAgIGRlZmF1bHRWYWx1ZTogbnVsbCxcbiAgICAgICAgICB2YWx1ZTogdHJ1ZSxcbiAgICAgICAgICBzaXplOiA4MCxcbiAgICAgICAgICBpc01hbmRhdG9yeTogZmFsc2UsXG4gICAgICAgICAgb3RoZXJWYWx1ZTogJycsXG4gICAgICAgICAgdHlwZTogXCJjaGVja2JveFwiLFxuICAgICAgICAgIGVkaXRhYmxlOiB0cnVlLFxuICAgICAgICAgIGlzQ29uZGl0aW9uYWw6IGZhbHNlLFxuICAgICAgICAgIGNvbmRpdGlvblZhbHVlOiBcIlwiLFxuICAgICAgICAgIGNvbmRpdGlvbjoge30sXG4gICAgICAgICAgZGVsZXRlYWJsZTogdHJ1ZSxcbiAgICAgICAgICBzdWJMZXZlbDogMSxcbiAgICAgICAgICBleHBhbmRNb3JlOiBmYWxzZSxcbiAgICAgICAgICAvKnNlbGVjdG9yOiB7XG4gICAgICAgICAgICBsYWJlbDogXCJDb21wYW55XCIsXG4gICAgICAgICAgICBrZXk6IFwiQ29tcGFueVwiLFxuICAgICAgICAgICAgZGVmYXVsdFZhbHVlOiBbeyB2YWx1ZTogXCJOb3d0ZWFtXCIsIGNoZWNrZWQ6IHRydWUgfSwgeyB2YWx1ZTogXCJJbnRlcm5hbFwiLCBjaGVja2VkOiBmYWxzZSB9XSxcbiAgICAgICAgICAgIHZhbHVlOiBcIk5vd3RlYW1cIlxuICAgICAgICAgIH0sKi9cbiAgICAgICAgICBmb3JtczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBsYWJlbDogXCJOb20gLyBNb2TDqGxlIGRlIGwnaW1wcmltYW50ZSAvIGxvY2FsaXNhdGlvblwiLFxuICAgICAgICAgICAgICBrZXk6IFwiUHJpbnRlck5hbWVcIixcbiAgICAgICAgICAgICAgZXhwYW5kT25ib2FyZGluZzogdHJ1ZSxcbiAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlOiBudWxsLFxuICAgICAgICAgICAgICB2YWx1ZTogbnVsbCxcbiAgICAgICAgICAgICAgc2l6ZTogMTAwMCxcbiAgICAgICAgICAgICAgaXNNYW5kYXRvcnk6IHRydWUsXG4gICAgICAgICAgICAgIG90aGVyVmFsdWU6ICcnLFxuICAgICAgICAgICAgICB0eXBlOiBcInRleHRhcmVhXCIsXG4gICAgICAgICAgICAgIGVkaXRhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICBpc0NvbmRpdGlvbmFsOiBmYWxzZSxcbiAgICAgICAgICAgICAgY29uZGl0aW9uVmFsdWU6IFwiXCIsXG4gICAgICAgICAgICAgIGNvbmRpdGlvbjoge30sXG4gICAgICAgICAgICAgIGRlbGV0ZWFibGU6IHRydWUsXG4gICAgICAgICAgICAgIHN1YkxldmVsOiAyLFxuICAgICAgICAgICAgICBleHBhbmRNb3JlOiBmYWxzZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcIkFwcGxpY2F0aW9uc1wiLFxuICAgICAga2V5OiAnYXBwbGljYXRpb25zJyxcbiAgICAgIGV4cGFuZE1vcmU6IGZhbHNlLFxuICAgICAgc3VmZml4RW5kcG9pbnQ6IFwiY2F0ZWdvcnkvYXBwbGljYXRpb25cIixcbiAgICAgIHNlbGVjdGVkOiB0cnVlLFxuICAgICAgZWRpdGFibGU6IHRydWUsXG4gICAgICBpc0NvbmRpdGlvbmFsOiBmYWxzZSxcbiAgICAgIGNvbmRpdGlvblZhbHVlOiBcIlwiLFxuICAgICAgY29uZGl0aW9uOiB7fSxcbiAgICAgIGV4cGFuZE9uYm9hcmRpbmc6IHRydWUsXG4gICAgICBkZWZhdWx0VmFsdWU6IGZhbHNlLFxuICAgICAgZGVsZXRlYWJsZTogdHJ1ZSxcbiAgICAgIHNlbGVjdG9yOiB7XG4gICAgICAgIGxhYmVsOiBcIkNvbXBhbnlcIixcbiAgICAgICAga2V5OiBcIkNvbXBhbnlcIixcbiAgICAgICAgZGVmYXVsdFZhbHVlOiBbeyB2YWx1ZTogXCJOb3d0ZWFtXCIsIGNoZWNrZWQ6IHRydWUgfSwgeyB2YWx1ZTogXCJJbnRlcm5hbFwiLCBjaGVja2VkOiBmYWxzZSB9XSxcbiAgICAgICAgdmFsdWU6IFwiTm93dGVhbVwiXG4gICAgICB9LFxuICAgICAgdGlja2V0VHlwZToge1xuICAgICAgICBsYWJlbDogXCJUeXBlIGRlIHRpY2tldFwiLFxuICAgICAgICBrZXk6IFwidHlja2V0VHlwZVwiLFxuICAgICAgICBkZWZhdWx0VmFsdWU6IFt7IHZhbHVlOiBcIkNyw6lhdGlvbiBkZSBjb21wdGVcIiwgY2hlY2tlZDogdHJ1ZSwga2V5OiBcIkNyZWF0aW9uX2RlX2NvbXB0ZVwiIH0sIHsgdmFsdWU6IFwiQ29uZmlndXJhdGlvbiBkZSBwb3N0ZVwiLCBjaGVja2VkOiBmYWxzZSwga2V5OiBcIkNvbmZpZ3VyYXRpb25fZGVfcG9zdGVcIiB9XSxcbiAgICAgICAgdmFsdWU6IFwiQ3JlYXRpb25fZGVfY29tcHRlXCJcbiAgICAgIH0sXG4gICAgICBmb3JtczogW1xuICAgICAgICB7XG4gICAgICAgICAgbGFiZWw6IFwiQWNjw6hzIGF1eCBhcHBsaWNhdGlvbnMgP1wiLFxuICAgICAgICAgIGtleTogXCJBcHBsaWNhdGlvbkFjY2Vzc1wiLFxuICAgICAgICAgIGV4cGFuZE9uYm9hcmRpbmc6IHRydWUsXG4gICAgICAgICAgZGVmYXVsdFZhbHVlOiBudWxsLFxuICAgICAgICAgIHZhbHVlOiB0cnVlLFxuICAgICAgICAgIHNpemU6IDgwLFxuICAgICAgICAgIGlzTWFuZGF0b3J5OiBmYWxzZSxcbiAgICAgICAgICBvdGhlclZhbHVlOiAnJyxcbiAgICAgICAgICB0eXBlOiBcImNoZWNrYm94XCIsXG4gICAgICAgICAgZWRpdGFibGU6IHRydWUsXG4gICAgICAgICAgaXNDb25kaXRpb25hbDogZmFsc2UsXG4gICAgICAgICAgY29uZGl0aW9uVmFsdWU6IFwiXCIsXG4gICAgICAgICAgY29uZGl0aW9uOiB7fSxcbiAgICAgICAgICBkZWxldGVhYmxlOiB0cnVlLFxuICAgICAgICAgIHN1YkxldmVsOiAxLFxuICAgICAgICAgIGV4cGFuZE1vcmU6IGZhbHNlLFxuICAgICAgICAgIC8qc2VsZWN0b3I6IHtcbiAgICAgICAgICAgIGxhYmVsOiBcIkNvbXBhbnlcIixcbiAgICAgICAgICAgIGtleTogXCJDb21wYW55XCIsXG4gICAgICAgICAgICBkZWZhdWx0VmFsdWU6IFt7IHZhbHVlOiBcIk5vd3RlYW1cIiwgY2hlY2tlZDogdHJ1ZSB9LCB7IHZhbHVlOiBcIkludGVybmFsXCIsIGNoZWNrZWQ6IGZhbHNlIH1dLFxuICAgICAgICAgICAgdmFsdWU6IFwiTm93dGVhbVwiXG4gICAgICAgICAgfSwqL1xuICAgICAgICAgIGZvcm1zOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGxhYmVsOiBcIkRlc2NyaXB0aW9uc1wiLFxuICAgICAgICAgICAgICBrZXk6IFwiRGVzY3JpcHRpb25cIixcbiAgICAgICAgICAgICAgZXhwYW5kT25ib2FyZGluZzogdHJ1ZSxcbiAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlOiBudWxsLFxuICAgICAgICAgICAgICB2YWx1ZTogbnVsbCxcbiAgICAgICAgICAgICAgc2l6ZTogMTAwMCxcbiAgICAgICAgICAgICAgaXNNYW5kYXRvcnk6IHRydWUsXG4gICAgICAgICAgICAgIG90aGVyVmFsdWU6ICcnLFxuICAgICAgICAgICAgICB0eXBlOiBcInRleHRhcmVhXCIsXG4gICAgICAgICAgICAgIGVkaXRhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICBpc0NvbmRpdGlvbmFsOiBmYWxzZSxcbiAgICAgICAgICAgICAgY29uZGl0aW9uVmFsdWU6IFwiXCIsXG4gICAgICAgICAgICAgIGNvbmRpdGlvbjoge30sXG4gICAgICAgICAgICAgIGRlbGV0ZWFibGU6IHRydWUsXG4gICAgICAgICAgICAgIHN1YkxldmVsOiAyLFxuICAgICAgICAgICAgICBleHBhbmRNb3JlOiBmYWxzZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcIlBvc3RlXCIsXG4gICAgICBrZXk6ICdwb3N0ZScsXG4gICAgICBleHBhbmRNb3JlOiBmYWxzZSxcbiAgICAgIHN1ZmZpeEVuZHBvaW50OiBcImNhdGVnb3J5L3Bvc3RlXCIsXG4gICAgICBzZWxlY3RlZDogdHJ1ZSxcbiAgICAgIGV4cGFuZE9uYm9hcmRpbmc6IHRydWUsXG4gICAgICBkZWZhdWx0VmFsdWU6IGZhbHNlLFxuICAgICAgZWRpdGFibGU6IHRydWUsXG4gICAgICBpc0NvbmRpdGlvbmFsOiBmYWxzZSxcbiAgICAgIGNvbmRpdGlvblZhbHVlOiBcIlwiLFxuICAgICAgY29uZGl0aW9uOiB7fSxcbiAgICAgIGRlbGV0ZWFibGU6IHRydWUsXG4gICAgICBzZWxlY3Rvcjoge1xuICAgICAgICBsYWJlbDogXCJDb21wYW55XCIsXG4gICAgICAgIGtleTogXCJDb21wYW55XCIsXG4gICAgICAgIGRlZmF1bHRWYWx1ZTogW3sgdmFsdWU6IFwiTm93dGVhbVwiLCBjaGVja2VkOiB0cnVlIH0sIHsgdmFsdWU6IFwiSW50ZXJuYWxcIiwgY2hlY2tlZDogZmFsc2UgfV0sXG4gICAgICAgIHZhbHVlOiBcIk5vd3RlYW1cIlxuICAgICAgfSxcbiAgICAgIHRpY2tldFR5cGU6IHtcbiAgICAgICAgbGFiZWw6IFwiVHlwZSBkZSB0aWNrZXRcIixcbiAgICAgICAga2V5OiBcInR5Y2tldFR5cGVcIixcbiAgICAgICAgZGVmYXVsdFZhbHVlOiBbeyB2YWx1ZTogXCJDcsOpYXRpb24gZGUgY29tcHRlXCIsIGNoZWNrZWQ6IHRydWUsIGtleTogXCJDcmVhdGlvbl9kZV9jb21wdGVcIiB9LCB7IHZhbHVlOiBcIkNvbmZpZ3VyYXRpb24gZGUgcG9zdGVcIiwgY2hlY2tlZDogZmFsc2UsIGtleTogXCJDb25maWd1cmF0aW9uX2RlX3Bvc3RlXCIgfV0sXG4gICAgICAgIHZhbHVlOiBcIkNyZWF0aW9uX2RlX2NvbXB0ZVwiXG4gICAgICB9LFxuICAgICAgZm9ybXM6IFtcbiAgICAgICAge1xuICAgICAgICAgIGxhYmVsOiBcIlBhcmFtw6l0cmFnZSBkZSBwb3N0ZVwiLFxuICAgICAgICAgIGtleTogXCJQb3N0UGFyYW1ldGVyXCIsXG4gICAgICAgICAgZXhwYW5kT25ib2FyZGluZzogdHJ1ZSxcbiAgICAgICAgICBkZWZhdWx0VmFsdWU6IG51bGwsXG4gICAgICAgICAgdmFsdWU6IHRydWUsXG4gICAgICAgICAgc2l6ZTogODAsXG4gICAgICAgICAgaXNNYW5kYXRvcnk6IGZhbHNlLFxuICAgICAgICAgIG90aGVyVmFsdWU6ICcnLFxuICAgICAgICAgIHR5cGU6IFwiY2hlY2tib3hcIixcbiAgICAgICAgICBlZGl0YWJsZTogdHJ1ZSxcbiAgICAgICAgICBpc0NvbmRpdGlvbmFsOiBmYWxzZSxcbiAgICAgICAgICBjb25kaXRpb25WYWx1ZTogXCJcIixcbiAgICAgICAgICBjb25kaXRpb246IHt9LFxuICAgICAgICAgIGRlbGV0ZWFibGU6IHRydWUsXG4gICAgICAgICAgc3ViTGV2ZWw6IDEsXG4gICAgICAgICAgZXhwYW5kTW9yZTogZmFsc2UsXG4gICAgICAgICAgLypzZWxlY3Rvcjoge1xuICAgICAgICAgICAgbGFiZWw6IFwiQ29tcGFueVwiLFxuICAgICAgICAgICAga2V5OiBcIkNvbXBhbnlcIixcbiAgICAgICAgICAgIGRlZmF1bHRWYWx1ZTogW3sgdmFsdWU6IFwiTm93dGVhbVwiLCBjaGVja2VkOiB0cnVlIH0sIHsgdmFsdWU6IFwiSW50ZXJuYWxcIiwgY2hlY2tlZDogZmFsc2UgfV0sXG4gICAgICAgICAgICB2YWx1ZTogXCJOb3d0ZWFtXCJcbiAgICAgICAgICB9LCovXG4gICAgICAgICAgZm9ybXM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbGFiZWw6IFwiUsOpYWxsb2NhdGlvbiBkJ8OpcXVpcGVtZW50XCIsXG4gICAgICAgICAgICAgIGtleTogXCJSZWFsb2NhdGVkRXF1aXBtZW50XCIsXG4gICAgICAgICAgICAgIGV4cGFuZE9uYm9hcmRpbmc6IHRydWUsXG4gICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZTogbnVsbCxcbiAgICAgICAgICAgICAgdmFsdWU6IG51bGwsXG4gICAgICAgICAgICAgIHNpemU6IDEwMDAsXG4gICAgICAgICAgICAgIGlzTWFuZGF0b3J5OiB0cnVlLFxuICAgICAgICAgICAgICBvdGhlclZhbHVlOiAnJyxcbiAgICAgICAgICAgICAgdHlwZTogXCJ0ZXh0YXJlYVwiLFxuICAgICAgICAgICAgICBlZGl0YWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgaXNDb25kaXRpb25hbDogZmFsc2UsXG4gICAgICAgICAgICAgIGNvbmRpdGlvblZhbHVlOiBcIlwiLFxuICAgICAgICAgICAgICBjb25kaXRpb246IHt9LFxuICAgICAgICAgICAgICBkZWxldGVhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICBzdWJMZXZlbDogMixcbiAgICAgICAgICAgICAgZXhwYW5kTW9yZTogZmFsc2UsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBsYWJlbDogXCJOb3V2ZWF1IHBvc3RlXCIsXG4gICAgICAgICAgICAgIGtleTogXCJOZXdQb3N0XCIsXG4gICAgICAgICAgICAgIGV4cGFuZE9uYm9hcmRpbmc6IHRydWUsXG4gICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZTogbnVsbCxcbiAgICAgICAgICAgICAgdmFsdWU6IHRydWUsXG4gICAgICAgICAgICAgIHNpemU6IDgwLFxuICAgICAgICAgICAgICBpc01hbmRhdG9yeTogdHJ1ZSxcbiAgICAgICAgICAgICAgb3RoZXJWYWx1ZTogJycsXG4gICAgICAgICAgICAgIHR5cGU6IFwiY2hlY2tib3hcIixcbiAgICAgICAgICAgICAgZWRpdGFibGU6IHRydWUsXG4gICAgICAgICAgICAgIGlzQ29uZGl0aW9uYWw6IGZhbHNlLFxuICAgICAgICAgICAgICBjb25kaXRpb25WYWx1ZTogXCJcIixcbiAgICAgICAgICAgICAgY29uZGl0aW9uOiB7fSxcbiAgICAgICAgICAgICAgZGVsZXRlYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgc3ViTGV2ZWw6IDIsXG4gICAgICAgICAgICAgIGV4cGFuZE1vcmU6IGZhbHNlLFxuICAgICAgICAgICAgICBmb3JtczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIkFjaGV0w6kgY2hleiBOb3d0ZWFtXCIsXG4gICAgICAgICAgICAgICAgICBrZXk6IFwiUHVyY2hhc2VkQXROb3d0ZWFtXCIsXG4gICAgICAgICAgICAgICAgICBleHBhbmRPbmJvYXJkaW5nOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlOiBudWxsLFxuICAgICAgICAgICAgICAgICAgdmFsdWU6IG51bGwsXG4gICAgICAgICAgICAgICAgICBzaXplOiAxMDAwLFxuICAgICAgICAgICAgICAgICAgaXNNYW5kYXRvcnk6IHRydWUsXG4gICAgICAgICAgICAgICAgICBvdGhlclZhbHVlOiAnJyxcbiAgICAgICAgICAgICAgICAgIHR5cGU6IFwidGV4dGFyZWFcIixcbiAgICAgICAgICAgICAgICAgIGVkaXRhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgaXNDb25kaXRpb25hbDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICBjb25kaXRpb25WYWx1ZTogXCJcIixcbiAgICAgICAgICAgICAgICAgIGNvbmRpdGlvbjoge30sXG4gICAgICAgICAgICAgICAgICBkZWxldGVhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgc3ViTGV2ZWw6IDMsXG4gICAgICAgICAgICAgICAgICBleHBhbmRNb3JlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIkF1dHJlXCIsXG4gICAgICAgICAgICAgICAgICBrZXk6IFwiT3RoZXJcIixcbiAgICAgICAgICAgICAgICAgIGV4cGFuZE9uYm9hcmRpbmc6IHRydWUsXG4gICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU6IG51bGwsXG4gICAgICAgICAgICAgICAgICB2YWx1ZTogbnVsbCxcbiAgICAgICAgICAgICAgICAgIHNpemU6IDEwMDAsXG4gICAgICAgICAgICAgICAgICBpc01hbmRhdG9yeTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgIG90aGVyVmFsdWU6ICcnLFxuICAgICAgICAgICAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICBlZGl0YWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgIGlzQ29uZGl0aW9uYWw6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgY29uZGl0aW9uVmFsdWU6IFwiXCIsXG4gICAgICAgICAgICAgICAgICBjb25kaXRpb246IHt9LFxuICAgICAgICAgICAgICAgICAgZGVsZXRlYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgIHN1YkxldmVsOiAzLFxuICAgICAgICAgICAgICAgICAgZXhwYW5kTW9yZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcIkF1dHJlc1wiLFxuICAgICAga2V5OiAnYXV0cmVzJyxcbiAgICAgIGV4cGFuZE1vcmU6IGZhbHNlLFxuICAgICAgc3VmZml4RW5kcG9pbnQ6IFwiY2F0ZWdvcnkvYXV0cmVzXCIsXG4gICAgICBzZWxlY3RlZDogdHJ1ZSxcbiAgICAgIGVkaXRhYmxlOiB0cnVlLFxuICAgICAgaXNDb25kaXRpb25hbDogZmFsc2UsXG4gICAgICBjb25kaXRpb25WYWx1ZTogXCJcIixcbiAgICAgIGNvbmRpdGlvbjoge30sXG4gICAgICBleHBhbmRPbmJvYXJkaW5nOiB0cnVlLFxuICAgICAgZGVmYXVsdFZhbHVlOiBmYWxzZSxcbiAgICAgIGRlbGV0ZWFibGU6IHRydWUsXG4gICAgICBzZWxlY3Rvcjoge1xuICAgICAgICBsYWJlbDogXCJDb21wYW55XCIsXG4gICAgICAgIGtleTogXCJDb21wYW55XCIsXG4gICAgICAgIGRlZmF1bHRWYWx1ZTogW3sgdmFsdWU6IFwiTm93dGVhbVwiLCBjaGVja2VkOiB0cnVlIH0sIHsgdmFsdWU6IFwiSW50ZXJuYWxcIiwgY2hlY2tlZDogZmFsc2UgfV0sXG4gICAgICAgIHZhbHVlOiBcIk5vd3RlYW1cIlxuICAgICAgfSxcbiAgICAgIHRpY2tldFR5cGU6IHtcbiAgICAgICAgbGFiZWw6IFwiVHlwZSBkZSB0aWNrZXRcIixcbiAgICAgICAga2V5OiBcInR5Y2tldFR5cGVcIixcbiAgICAgICAgZGVmYXVsdFZhbHVlOiBbeyB2YWx1ZTogXCJDcsOpYXRpb24gZGUgY29tcHRlXCIsIGNoZWNrZWQ6IHRydWUsIGtleTogXCJDcmVhdGlvbl9kZV9jb21wdGVcIiB9LCB7IHZhbHVlOiBcIkNvbmZpZ3VyYXRpb24gZGUgcG9zdGVcIiwgY2hlY2tlZDogZmFsc2UsIGtleTogXCJDb25maWd1cmF0aW9uX2RlX3Bvc3RlXCIgfV0sXG4gICAgICAgIHZhbHVlOiBcIkNyZWF0aW9uX2RlX2NvbXB0ZVwiXG4gICAgICB9LFxuICAgICAgZm9ybXM6IFtcbiAgICAgICAge1xuICAgICAgICAgIGxhYmVsOiBcIkRlc2NyaXB0aW9uc1wiLFxuICAgICAgICAgIGtleTogXCJEZXNjcmlwdGlvblwiLFxuICAgICAgICAgIGV4cGFuZE9uYm9hcmRpbmc6IHRydWUsXG4gICAgICAgICAgZGVmYXVsdFZhbHVlOiBudWxsLFxuICAgICAgICAgIHZhbHVlOiBudWxsLFxuICAgICAgICAgIHNpemU6IDEwMDAsXG4gICAgICAgICAgaXNNYW5kYXRvcnk6IGZhbHNlLFxuICAgICAgICAgIG90aGVyVmFsdWU6ICcnLFxuICAgICAgICAgIHR5cGU6IFwidGV4dGFyZWFcIixcbiAgICAgICAgICBlZGl0YWJsZTogdHJ1ZSxcbiAgICAgICAgICBpc0NvbmRpdGlvbmFsOiBmYWxzZSxcbiAgICAgICAgICBjb25kaXRpb25WYWx1ZTogXCJcIixcbiAgICAgICAgICBjb25kaXRpb246IHt9LFxuICAgICAgICAgIGRlbGV0ZWFibGU6IHRydWUsXG4gICAgICAgICAgc3ViTGV2ZWw6IDEsXG4gICAgICAgICAgZXhwYW5kTW9yZTogZmFsc2UsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0sXG4gIF07XG5cbiAgY2FuRGVhY3RpdmF0ZSgpIHtcbiAgICBpZiAoIXRoaXMuY2FuRXhpdCkge1xuICAgICAgdGhpcy5kaWFsb2cub3BlbihFeGl0Q29uZmlybUNvbXBvbmVudCwge1xuICAgICAgICBkYXRhOiAnJ1xuICAgICAgfSlcbiAgICAgIHJldHVybiB0aGlzLnNlcnZpY2UuY2FuRXhpdCRcbiAgICB9XG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG5cbiAgQEhvc3RMaXN0ZW5lcignc2Nyb2xsJywgWyckZXZlbnQnXSlcbiAgb25TY3JvbGwoZXZlbnQpIHtcbiAgICBjb25zdCBzZWN0aW9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJzZWN0aW9uXCIpO1xuICAgIGNvbnN0IG5hdkxpID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jcmVhdGUtcHJvZmlsZS1tZW51cyB1bCBsaVwiKTtcblxuICAgIGxldCBjdXJyZW50ID0gXCJcIjtcbiAgICBzZWN0aW9ucy5mb3JFYWNoKChzZWN0aW9uKSA9PiB7XG4gICAgICBjb25zdCBzZWN0aW9uVG9wID0gc2VjdGlvbi5vZmZzZXRUb3A7XG4gICAgICBpZiAoZXZlbnQudGFyZ2V0LnNjcm9sbFRvcCA+IHNlY3Rpb25Ub3AgLSAxMDApIHtcbiAgICAgICAgY3VycmVudCA9IHNlY3Rpb24uZ2V0QXR0cmlidXRlKFwiaWRcIilcbiAgICAgIH1cbiAgICB9KTtcbiAgICBuYXZMaS5mb3JFYWNoKChsaSkgPT4ge1xuICAgICAgY29uc3QgaWQgPSBsaS5nZXRBdHRyaWJ1dGUoJ2lkJylcbiAgICAgIGlmIChpZD8uc3Vic3RyaW5nKDAsIGlkLmxlbmd0aCAtIDEpID09PSBjdXJyZW50KSB7XG4gICAgICAgIGxpLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsaS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgaW5pdEZvcm0oKSB7XG4gICAgdGhpcy5mb3JtID0gdGhpcy5mYi5ncm91cCh7XG4gICAgICBOYW1lOiBbXCJcIiwgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgICBQaWN0bzogW1wiXCJdLFxuICAgICAgRGVzY3JpcHRpb246IFtcIlwiXSxcbiAgICAgIFRhZ3M6IFtcIlwiXSxcbiAgICAgIFN0YXR1czogW2ZhbHNlLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICB9KTtcbiAgfVxuICBhc3luYyBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmlkID0gdGhpcy5yb3V0ZS5zbmFwc2hvdC5wYXJhbU1hcC5nZXQoXCJpZFwiKTtcblxuICAgIHRoaXMuZm9ybS52YWx1ZUNoYW5nZXMuc3Vic2NyaWJlKGMgPT4ge1xuICAgICAgdGhpcy5jYW5FeGl0ID0gZmFsc2U7XG4gICAgfSk7XG5cbiAgICBpZiAodGhpcy5pZCAhPT0gXCIwXCIpIHtcbiAgICAgIHNldFRpbWVvdXQoYXN5bmMgKCkgPT4ge1xuICAgICAgICB0aGlzLmN1cnJlbnRQcm9maWwgPSBhd2FpdCB0aGlzLnNlcnZpY2UuZ2V0UHJvZmlsKHRoaXMuaWQpO1xuICAgICAgICB0aGlzLmZvcm0ucGF0Y2hWYWx1ZSh0aGlzLmN1cnJlbnRQcm9maWwpO1xuICAgICAgICB0aGlzLmNhdGVnb3JpZXMgPSB0aGlzLmN1cnJlbnRQcm9maWwuY2F0ZWdvcmllcy5tYXAoKGRhdGEpID0+ICh7IC4uLmRhdGEsIGtleTogZGF0YS5rZXkgfHwgZGF0YS5uYW1lLnJlcGxhY2UoL1xccy9nLCAnJykgfSkpO1xuICAgICAgfSwgNTAwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zaG93UHJvZmlsZU5hbWUgPSB0cnVlO1xuICAgICAgdGhpcy5jYXRlZ29yaWVzID0gdGhpcy5kZWZhdWx0Q2F0ZWdvcmllO1xuICAgIH1cbiAgICBzZXRUaW1lb3V0KGFzeW5jICgpID0+IHtcbiAgICAgIHRoaXMudGFncyA9IGF3YWl0IHRoaXMuc2VydmljZS5nZXRBbGxUYWdzKCk7XG4gICAgfSwgNTAwKTtcbiAgICB0aGlzLmdldENvbmRpdGlvblZhbHVlcygpO1xuICB9XG5cbiAgb25BZGROZXdDYXRlZ29yeShlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMuY2FuRXhpdCA9IGZhbHNlO1xuICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICBuYW1lOiBcIk5vbSBkZSBsYSBjYXTDqWdvcmllXCIgKyB0aGlzLmNhdGVnb3JpZXMubGVuZ3RoLFxuICAgICAga2V5OiAnbmV3Q2F0ZWdvcnknICsgdGhpcy5jYXRlZ29yaWVzLmxlbmd0aCxcbiAgICAgIGVkaXRhYmxlOiB0cnVlLFxuICAgICAgaXNDb25kaXRpb25hbDogZmFsc2UsXG4gICAgICBjb25kaXRpb25WYWx1ZTogXCJcIixcbiAgICAgIGNvbmRpdGlvbjoge30sXG4gICAgICBleHBhbmRPbmJvYXJkaW5nOiB0cnVlLFxuICAgICAgZGVsZXRlYWJsZTogdHJ1ZSxcbiAgICAgIGV4cGFuZE1vcmU6IHRydWUsXG4gICAgICBzdWZmaXhFbmRwb2ludDogXCJcIixcbiAgICAgIHNlbGVjdG9yOiB7XG4gICAgICAgIGxhYmVsOiBcIkNvbXBhbnlcIixcbiAgICAgICAga2V5OiBcIkNvbXBhbnlcIixcbiAgICAgICAgZGVmYXVsdFZhbHVlOiBbeyB2YWx1ZTogXCJOb3d0ZWFtXCIsIGNoZWNrZWQ6IHRydWUgfSwgeyB2YWx1ZTogXCJJbnRlcm5hbFwiLCBjaGVja2VkOiBmYWxzZSB9XSxcbiAgICAgICAgdmFsdWU6IFwiTm93dGVhbVwiXG4gICAgICB9LFxuICAgICAgdGlja2V0VHlwZToge1xuICAgICAgICBsYWJlbDogXCJUeXBlIGRlIHRpY2tldFwiLFxuICAgICAgICBrZXk6IFwidHlja2V0VHlwZVwiLFxuICAgICAgICBkZWZhdWx0VmFsdWU6IFt7IHZhbHVlOiBcIkNyw6lhdGlvbiBkZSBjb21wdGVcIiwgY2hlY2tlZDogdHJ1ZSwga2V5OiBcIkNyZWF0aW9uX2RlX2NvbXB0ZVwiIH0sIHsgdmFsdWU6IFwiQ29uZmlndXJhdGlvbiBkZSBwb3N0ZVwiLCBjaGVja2VkOiBmYWxzZSwga2V5OiBcIkNvbmZpZ3VyYXRpb25fZGVfcG9zdGVcIiB9XSxcbiAgICAgICAgdmFsdWU6IFwiQ3JlYXRpb25fZGVfY29tcHRlXCJcbiAgICAgIH0sXG4gICAgICBmb3JtczogW1xuICAgICAgICB7XG4gICAgICAgICAgbGFiZWw6IGBMYWJlbCDDoCByZW5vbW1lciAoJHsxfSlgLFxuICAgICAgICAgIGtleTogXCJcIixcbiAgICAgICAgICBleHBhbmRPbmJvYXJkaW5nOiB0cnVlLFxuICAgICAgICAgIGRlZmF1bHRWYWx1ZTogbnVsbCxcbiAgICAgICAgICB2YWx1ZTogbnVsbCxcbiAgICAgICAgICBzaXplOiA4MCxcbiAgICAgICAgICBpc01hbmRhdG9yeTogdHJ1ZSxcbiAgICAgICAgICBvdGhlclZhbHVlOiAnJyxcbiAgICAgICAgICB0eXBlOiBcInRleHRcIixcbiAgICAgICAgICBkZWxldGVhYmxlOiB0cnVlLFxuICAgICAgICAgIGVkaXRhYmxlOiB0cnVlLFxuICAgICAgICAgIGlzQ29uZGl0aW9uYWw6IGZhbHNlLFxuICAgICAgICAgIGNvbmRpdGlvblZhbHVlOiBcIlwiLFxuICAgICAgICAgIGNvbmRpdGlvbjoge30sXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH1cbiAgICB0aGlzLmNhdGVnb3JpZXMucHVzaChkYXRhKTtcbiAgICB0aGlzLm9uSGlzdG9yaWNzKHtcbiAgICAgIGZvcm06IGRhdGEsXG4gICAgICBtZXRob2Q6ICdwdXNoJyxcbiAgICAgIGxvY2F0aW9uOiAnY2F0ZWdvcnknLFxuICAgICAgcGFyYW1zOiBbdGhpcy5jYXRlZ29yaWVzLmxlbmd0aCAtIDFdXG4gICAgfSlcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuc2Nyb2xsVG9TZXJ2aWNlLnNjcm9sbFRvKHtcbiAgICAgICAgdGFyZ2V0OiBkYXRhLm5hbWUsXG4gICAgICAgIGNvbnRhaW5lcjogJ2NhdGVnb3JpZXMtaWQnLFxuICAgICAgICBkdXJhdGlvbjogNjUwLFxuICAgICAgICBlYXNpbmc6ICdlYXNlT3V0RWxhc3RpYycsXG4gICAgICAgIG9mZnNldDogMjBcbiAgICAgIH0pO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMub25FeHBlbmRNb3JlKHsgZmllbGQ6IGRhdGEgfSwgdGhpcy5jYXRlZ29yaWVzLmxlbmd0aCAtIDEpO1xuICAgICAgICB0aGlzLm9uQWN0aXZlTWVudShkYXRhLCB0aGlzLmNhdGVnb3JpZXMubGVuZ3RoIC0gMSk7XG4gICAgICB9LCAzMDApO1xuXG4gICAgfSwgMjAwKVxuICB9XG4gIG9uQ2hhbmdlQ2F0ZWdvcnlOYW1lKCkge1xuICAgIHRoaXMuY3VycmVudEVkaXRCbG9jay5rZXkgPSB0aGlzLmN1cnJlbnRFZGl0QmxvY2submFtZS5yZXBsYWNlKC9cXHMvZywgJycpXG4gIH1cbiAgY2hlY2tCbGluayhpbmRleCwgbGV2ZWwpIHtcbiAgICByZXR1cm4gU3RyaW5nKGluZGV4KSArIFN0cmluZyhsZXZlbClcbiAgfVxuICBvbkFkZE5ld0ZpZWxkKC4uLnBhcmFtcykge1xuICAgIHRoaXMuY2FuRXhpdCA9IGZhbHNlO1xuICAgIGNvbnN0IGxlbmd0aCA9IHBhcmFtcy5sZW5ndGg7XG4gICAgY29uc3QgZm9ybXMgPSBsZW5ndGggPT09IDEgPyB0aGlzLmNhdGVnb3JpZXNbcGFyYW1zWzBdXS5mb3JtcyA6IGxlbmd0aCA9PT0gMiA/IHRoaXMuY2F0ZWdvcmllc1twYXJhbXNbMF1dLmZvcm1zW3BhcmFtc1sxXV0uZm9ybXMgOiB0aGlzLmNhdGVnb3JpZXNbcGFyYW1zWzBdXS5mb3Jtc1twYXJhbXNbMV1dLmZvcm1zW3BhcmFtc1syXV0uZm9ybXM7XG4gICAgY29uc3QgZGF0YSA9IHtcbiAgICAgIGxhYmVsOiBgTGFiZWwgw6AgcmVub21tZXIgKCR7Zm9ybXMubGVuZ3RoICsgMX0pYCxcbiAgICAgIGtleTogXCJcIixcbiAgICAgIGV4cGFuZE9uYm9hcmRpbmc6IHRydWUsXG4gICAgICBkZWZhdWx0VmFsdWU6IG51bGwsXG4gICAgICB2YWx1ZTogbnVsbCxcbiAgICAgIHNpemU6IDgwLFxuICAgICAgaXNNYW5kYXRvcnk6IHRydWUsXG4gICAgICBvdGhlclZhbHVlOiAnJyxcbiAgICAgIHR5cGU6IFwidGV4dFwiLFxuICAgICAgZGVsZXRlYWJsZTogdHJ1ZSxcbiAgICAgIGVkaXRhYmxlOiB0cnVlLFxuICAgICAgaXNDb25kaXRpb25hbDogZmFsc2UsXG4gICAgICBjb25kaXRpb25WYWx1ZTogXCJcIixcbiAgICAgIGNvbmRpdGlvbjoge30sXG4gICAgICBzdWJMZXZlbDogcGFyYW1zLmxlbmd0aCxcbiAgICAgIC8vZm9ybXM6IFtdXG4gICAgfVxuICAgIGZvcm1zLnB1c2goZGF0YSk7XG4gICAgdGhpcy5uZXdGaWVsZEluZGV4ID0gU3RyaW5nKGZvcm1zLmxlbmd0aCAtIDEpICsgU3RyaW5nKGxlbmd0aCk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLm5ld0ZpZWxkSW5kZXggPSBudWxsXG4gICAgfSwgNTAwMCk7XG4gICAgdGhpcy5vbkhpc3Rvcmljcyh7XG4gICAgICBmb3JtOiBkYXRhLFxuICAgICAgbWV0aG9kOiAncHVzaCcsXG4gICAgICBsb2NhdGlvbjogJ2Zvcm1zJyxcbiAgICAgIHBhcmFtc1xuICAgIH0pXG4gICAgdGhpcy5vbkVkaXRCbG9jayhmb3Jtcy5hdCgtMSksIHBhcmFtcylcbiAgfVxuXG4gIG9uQWRkTmV3U3ViTGV2ZWxGaWVsZCguLi5wYXJhbXMpIHtcbiAgICB0aGlzLmNhbkV4aXQgPSBmYWxzZTtcbiAgICBjb25zdCBsZW5ndGggPSBwYXJhbXMubGVuZ3RoO1xuICAgIGNvbnN0IGZvcm1zID0gbGVuZ3RoID09PSAyID8gdGhpcy5jYXRlZ29yaWVzW3BhcmFtc1swXV0uZm9ybXNbcGFyYW1zW2xlbmd0aCAtIDFdXSA6IGxlbmd0aCA9PT0gMyA/IHRoaXMuY2F0ZWdvcmllc1twYXJhbXNbMF1dLmZvcm1zW3BhcmFtc1sxXV0uZm9ybXNbcGFyYW1zW2xlbmd0aCAtIDFdXSA6IHRoaXMuY2F0ZWdvcmllc1twYXJhbXNbMF1dLmZvcm1zW3BhcmFtc1sxXV0uZm9ybXNbcGFyYW1zWzJdXS5mb3Jtc1twYXJhbXNbbGVuZ3RoIC0gMV1dO1xuICAgIGZvcm1zLmV4cGFuZE1vcmUgPSB0cnVlO1xuICAgIGZvcm1zLmZvcm1zID0gW107XG4gICAgY29uc3QgbmV3Rm9ybSA9IHtcbiAgICAgIGxhYmVsOiBcIlwiLFxuICAgICAga2V5OiBcIlwiLFxuICAgICAgZXhwYW5kT25ib2FyZGluZzogdHJ1ZSxcbiAgICAgIGRlZmF1bHRWYWx1ZTogbnVsbCxcbiAgICAgIHZhbHVlOiBudWxsLFxuICAgICAgc2l6ZTogODAsXG4gICAgICBpc01hbmRhdG9yeTogdHJ1ZSxcbiAgICAgIG90aGVyVmFsdWU6ICcnLFxuICAgICAgdHlwZTogXCJ0ZXh0XCIsXG4gICAgICBkZWxldGVhYmxlOiB0cnVlLFxuICAgICAgZWRpdGFibGU6IHRydWUsXG4gICAgICBpc0NvbmRpdGlvbmFsOiBmYWxzZSxcbiAgICAgIGNvbmRpdGlvblZhbHVlOiBcIlwiLFxuICAgICAgY29uZGl0aW9uOiB7fSxcbiAgICAgIHN1YkxldmVsOiBwYXJhbXMubGVuZ3RoLFxuICAgICAgZXhwYW5kTW9yZTogdHJ1ZSxcbiAgICAgIC8vZm9ybXM6IFtdXG4gICAgfVxuICAgIGZvcm1zLmZvcm1zLnB1c2gobmV3Rm9ybSk7XG4gICAgdGhpcy5vbkhpc3Rvcmljcyh7XG4gICAgICBmb3JtOiBuZXdGb3JtLFxuICAgICAgbWV0aG9kOiAncHVzaCcsXG4gICAgICBsb2NhdGlvbjogJ2Zvcm1zJyxcbiAgICAgIHBhcmFtc1xuICAgIH0pXG4gIH1cblxuICBvblJlbW92ZUZpZWxkKC4uLnBhcmFtcykge1xuICAgIHRoaXMuY2FuRXhpdCA9IGZhbHNlO1xuICAgIGNvbnN0IGxlbmd0aCA9IHBhcmFtcy5sZW5ndGg7XG4gICAgY29uc3QgZm9ybXMgPSBsZW5ndGggPT09IDIgPyB0aGlzLmNhdGVnb3JpZXNbcGFyYW1zWzBdXS5mb3JtcyA6IGxlbmd0aCA9PT0gMyA/IHRoaXMuY2F0ZWdvcmllc1twYXJhbXNbMF1dLmZvcm1zW3BhcmFtc1sxXV0uZm9ybXMgOiB0aGlzLmNhdGVnb3JpZXNbcGFyYW1zWzBdXS5mb3Jtc1twYXJhbXNbMV1dLmZvcm1zW3BhcmFtc1syXV0uZm9ybXM7XG4gICAgZm9ybXMuc3BsaWNlKHBhcmFtc1tsZW5ndGggLSAxXSwgMSk7XG4gICAgdGhpcy5vbkhpc3Rvcmljcyh7XG4gICAgICBmb3JtOiBmb3Jtc1twYXJhbXNbbGVuZ3RoIC0gMV1dLFxuICAgICAgbG9jYXRpb246ICdmb3JtcycsXG4gICAgICBtZXRob2Q6ICdzcGxpY2UnLFxuICAgICAgcGFyYW1zXG4gICAgfSlcbiAgfVxuXG4gIG9uUmVtb3ZlQ2F0ZWdvcnkoZSwgaSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLmNhbkV4aXQgPSBmYWxzZTtcbiAgICB0aGlzLm9uSGlzdG9yaWNzKHtcbiAgICAgIGZvcm06IHRoaXMuY2F0ZWdvcmllcy5zcGxpY2UoaSwgMSksXG4gICAgICBtZXRob2Q6ICdzcGxpY2UnLFxuICAgICAgbG9jYXRpb246ICdjYXRlZ29yeScsXG4gICAgICBwYXJhbXM6IFtpXVxuICAgIH0pXG4gIH1cblxuICBvbkNoYW5nZUNhdGVnb3J5KCkge1xuICAgIHJldHVybiB0aGlzLmNhdGVnb3JpZXMuZXZlcnkoKGNhdCkgPT4gY2F0Lm5hbWUgIT09IFwiXCIgJiYgY2F0LmZvcm1zLmV2ZXJ5KChmaWVsZCkgPT4gZmllbGQubGFiZWwgIT09IFwiXCIgJiYgZmllbGQudHlwZSAhPT0gXCJcIikpO1xuICB9XG5cbiAgYXN5bmMgb25TdWJtaXQoaXNQdWJsaXNoOiBib29sZWFuKSB7XG4gICAgdGhpcy5pc1N1Ym1pdHRlZCA9IGlzUHVibGlzaDtcbiAgICBpZiAodGhpcy5mb3JtLnZhbGlkICYmIHRoaXMub25DaGFuZ2VDYXRlZ29yeSgpKSB7XG4gICAgICB0aGlzLmxvYWRpbmcgPSB0cnVlXG4gICAgICBpZiAoaXNQdWJsaXNoKSB7XG4gICAgICAgIHRoaXMubGl2ZUxhYmVsID0gXCJDaGFyZ2VtZW50Li4uLlwiXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmRyYWZ0TGFiZWwgPSBcIkNoYXJnZW1lbnQuLi5cIlxuICAgICAgfVxuICAgICAgY29uc3QgcmVzdWx0ID1cbiAgICAgICAgdGhpcy5pZCAhPT0gXCIwXCJcbiAgICAgICAgICA/IGF3YWl0IHRoaXMuc2VydmljZS51cGRhdGVQcm9maWwoe1xuICAgICAgICAgICAgLi4udGhpcy5jdXJyZW50UHJvZmlsLFxuICAgICAgICAgICAgLi4udGhpcy5mb3JtLnZhbHVlLFxuICAgICAgICAgICAgU3RhdHVzOiBpc1B1Ymxpc2gsXG4gICAgICAgICAgICBjYXRlZ29yaWVzOiB0aGlzLmNhdGVnb3JpZXMsXG4gICAgICAgICAgfSlcbiAgICAgICAgICA6IGF3YWl0IHRoaXMuc2VydmljZS5jcmVhdGVQcm9maWwoe1xuICAgICAgICAgICAgLi4udGhpcy5mb3JtLnZhbHVlLFxuICAgICAgICAgICAgU3RhdHVzOiBpc1B1Ymxpc2gsXG4gICAgICAgICAgICBjYXRlZ29yaWVzOiB0aGlzLmNhdGVnb3JpZXMsXG4gICAgICAgICAgfSk7XG4gICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdwcm9maWwnKTtcbiAgICAgICAgYXdhaXQgdGhpcy5zZXJ2aWNlLmdldEFsbFByb2ZpbCgpO1xuICAgICAgICB0aGlzLmNhbkV4aXQgPSB0cnVlO1xuICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZVxuXG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFt0aGlzLnNlcnZpY2UubWFpblBhdGggKyAnL3RlbXBsYXRlJ10pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2VcbiAgICAgIH1cbiAgICAgIGlmIChpc1B1Ymxpc2gpIHtcbiAgICAgICAgdGhpcy5saXZlTGFiZWwgPSBcIlB1YmxpZXIgbGUgcHJvZmlsXCJcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZHJhZnRMYWJlbCA9IFwiRW5yZWdpc3RyZXIgbGUgYnJvdWlsbG9uXCJcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBvbkNoYW5nZVR5cGUodHlwZTogc3RyaW5nLCAuLi5wYXJhbXMpIHtcblxuICAgIHRoaXMuY2FuRXhpdCA9IGZhbHNlO1xuICAgIGNvbnN0IGxlbmd0aCA9IHBhcmFtcy5sZW5ndGg7XG4gICAgY29uc3QgZm9ybXMgPSBsZW5ndGggPT09IDIgPyB0aGlzLmNhdGVnb3JpZXNbcGFyYW1zWzBdXS5mb3JtcyA6IGxlbmd0aCA9PT0gMyA/IHRoaXMuY2F0ZWdvcmllc1twYXJhbXNbMF1dLmZvcm1zW3BhcmFtc1sxXV0uZm9ybXMgOiB0aGlzLmNhdGVnb3JpZXNbcGFyYW1zWzBdXS5mb3Jtc1twYXJhbXNbMV1dLmZvcm1zW3BhcmFtc1syXV0uZm9ybXM7XG4gICAgaWYgKHR5cGUgPT09IFwic2VsZWN0XCIgfHwgdHlwZSA9PT0gXCJyYWRpb1wiIHx8IHR5cGUgPT09IFwiY2hlY2tib3hfbXVsdGlwbGVcIikge1xuICAgICAgZm9ybXNbcGFyYW1zW2xlbmd0aCAtIDFdXS5kZWZhdWx0VmFsdWUgPSBbXTtcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09IFwiY2hlY2tib3hcIiB8fCB0eXBlID09PSBcInRvZ2dsZVwiKSB7XG4gICAgICBmb3Jtc1twYXJhbXNbbGVuZ3RoIC0gMV1dLmRlZmF1bHRWYWx1ZSA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvcm1zW3BhcmFtc1tsZW5ndGggLSAxXV0uZGVmYXVsdFZhbHVlID0gXCJcIjtcbiAgICB9XG4gIH1cblxuICBvbktleVByZXNzKGV2ZW50OiBhbnksIC4uLnBhcmFtcykge1xuICAgIHRoaXMuY2FuRXhpdCA9IGZhbHNlO1xuICAgIGNvbnN0IGxlbmd0aCA9IHBhcmFtcy5sZW5ndGg7XG4gICAgY29uc3QgZm9ybXMgPSBsZW5ndGggPT09IDIgPyB0aGlzLmNhdGVnb3JpZXNbcGFyYW1zWzBdXS5mb3Jtc1twYXJhbXNbbGVuZ3RoIC0gMV1dIDogbGVuZ3RoID09PSAzID8gdGhpcy5jYXRlZ29yaWVzW3BhcmFtc1swXV0uZm9ybXNbcGFyYW1zWzFdXS5mb3Jtc1twYXJhbXNbbGVuZ3RoIC0gMV1dIDogdGhpcy5jYXRlZ29yaWVzW3BhcmFtc1swXV0uZm9ybXNbcGFyYW1zWzFdXS5mb3Jtc1twYXJhbXNbMl1dLmZvcm1zW3BhcmFtc1tsZW5ndGggLSAxXV07XG4gICAgaWYgKGV2ZW50LmtleSA9PT0gXCI7XCIpIHtcbiAgICAgIGNvbnN0IGV4aXN0ID0gZm9ybXMuZGVmYXVsdFZhbHVlLmZpbmQoKG9wdCkgPT4gb3B0LnZhbHVlLnRvTG9jYWxlTG93ZXJDYXNlKCkgPT09IGV2ZW50LnRhcmdldC52YWx1ZS5zcGxpdChcIjtcIilbMF0udG9Mb2NhbGVMb3dlckNhc2UoKSk7XG4gICAgICBpZiAoIWV4aXN0KSB7XG4gICAgICAgIGZvcm1zLmRlZmF1bHRWYWx1ZS5wdXNoKHtcbiAgICAgICAgICB2YWx1ZTogZXZlbnQudGFyZ2V0LnZhbHVlLnNwbGl0KFwiO1wiKVswXSxcbiAgICAgICAgICBjaGVja2VkOiBmYWxzZVxuICAgICAgICB9KTtcbiAgICAgICAgZXZlbnQudGFyZ2V0LnZhbHVlID0gXCJcIjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGV2ZW50LnRhcmdldC52YWx1ZSA9IFwiXCI7XG4gICAgICB9XG4gICAgfVxuICAgIC8vIHRoaXMuZ2V0Q29uZGl0aW9uVmFsdWVzKClcbiAgfVxuXG4gIHJlbW92ZUtleXdvcmQoa2V5d29yZDogYW55LCAuLi5wYXJhbXMpIHtcbiAgICB0aGlzLmNhbkV4aXQgPSBmYWxzZTtcbiAgICBjb25zdCBsZW5ndGggPSBwYXJhbXMubGVuZ3RoO1xuICAgIGNvbnN0IGZvcm1zID0gbGVuZ3RoID09PSAyID8gdGhpcy5jYXRlZ29yaWVzW3BhcmFtc1swXV0uZm9ybXNbcGFyYW1zW2xlbmd0aCAtIDFdXSA6IGxlbmd0aCA9PT0gMyA/IHRoaXMuY2F0ZWdvcmllc1twYXJhbXNbMF1dLmZvcm1zW3BhcmFtc1sxXV0uZm9ybXNbcGFyYW1zW2xlbmd0aCAtIDFdXSA6IHRoaXMuY2F0ZWdvcmllc1twYXJhbXNbMF1dLmZvcm1zW3BhcmFtc1sxXV0uZm9ybXNbcGFyYW1zWzJdXS5mb3Jtc1twYXJhbXNbbGVuZ3RoIC0gMV1dO1xuICAgIGZvcm1zLmRlZmF1bHRWYWx1ZSA9IGZvcm1zLmRlZmF1bHRWYWx1ZS5maWx0ZXIoKG9wdGlvbikgPT4gb3B0aW9uLnZhbHVlICE9PSBrZXl3b3JkLnZhbHVlKTtcbiAgICAvLyB0aGlzLmdldENvbmRpdGlvblZhbHVlcygpXG4gIH1cblxuICBzY3JvbGxUbyhjYXRlZ29yeSwgaSwpIHtcbiAgICB0aGlzLm9uQWN0aXZlTWVudShjYXRlZ29yeSwgaSk7XG4gICAgaWYgKCFjYXRlZ29yeS5leHBhbmRNb3JlKSB7XG4gICAgICBsZXQgZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjYXRlZ29yeS5uYW1lKTtcbiAgICAgIGVsLnNjcm9sbEludG9WaWV3KHtcbiAgICAgICAgYmVoYXZpb3I6ICdzbW9vdGgnXG4gICAgICB9KTtcbiAgICAgIHRoaXMub25FeHBlbmRNb3JlKHsgZmllbGQ6IGNhdGVnb3J5IH0sIGkpO1xuICAgIH1cbiAgfVxuXG4gIG9uRXhwZW5kTW9yZShldmVudCwgLi4ucGFyYW1zKSB7XG4gICAgaWYgKGV2ZW50KSB7XG4gICAgICBpZiAoZXZlbnQuZXZlbnQpIHtcbiAgICAgICAgZXZlbnQuZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIH1cbiAgICAgIGlmIChldmVudC5maWVsZCAmJiAhZXZlbnQuZmllbGQuZXhwYW5kTW9yZSkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY2F0ZWdvcmllcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIHRoaXMuY2F0ZWdvcmllc1tpXS5leHBhbmRNb3JlID0gZmFsc2U7XG4gICAgICAgICAgaWYgKHRoaXMuY2F0ZWdvcmllc1tpXS5mb3Jtcykge1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLmNhdGVnb3JpZXNbaV0uZm9ybXMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgdGhpcy5jYXRlZ29yaWVzW2ldLmZvcm1zW2pdLmV4cGFuZE1vcmUgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgIH1cbiAgICBpZiAocGFyYW1zLmxlbmd0aCA9PT0gMSkge1xuICAgICAgdGhpcy5jYXRlZ29yaWVzW3BhcmFtc1swXV0uZXhwYW5kTW9yZSA9ICF0aGlzLmNhdGVnb3JpZXNbcGFyYW1zWzBdXS5leHBhbmRNb3JlO1xuICAgIH0gZWxzZSBpZiAocGFyYW1zLmxlbmd0aCA9PT0gMikge1xuICAgICAgaWYgKHRoaXMuY2F0ZWdvcmllc1twYXJhbXNbMF1dLmZvcm1zW3BhcmFtc1sxXV0uZXhwYW5kTW9yZSkge1xuICAgICAgICB0aGlzLmNhdGVnb3JpZXNbcGFyYW1zWzBdXS5mb3Jtc1twYXJhbXNbMV1dLmV4cGFuZE1vcmUgPSBmYWxzZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY2F0ZWdvcmllc1twYXJhbXNbMF1dLmV4cGFuZE1vcmUgPSB0cnVlO1xuICAgICAgICB0aGlzLmNhdGVnb3JpZXNbcGFyYW1zWzBdXS5mb3Jtc1twYXJhbXNbMV1dLmV4cGFuZE1vcmUgPSB0cnVlO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAocGFyYW1zLmxlbmd0aCA9PT0gMykge1xuICAgICAgaWYgKHRoaXMuY2F0ZWdvcmllc1twYXJhbXNbMF1dLmZvcm1zW3BhcmFtc1sxXV0uZm9ybXNbcGFyYW1zWzJdXS5leHBhbmRNb3JlKSB7XG4gICAgICAgIHRoaXMuY2F0ZWdvcmllc1twYXJhbXNbMF1dLmZvcm1zW3BhcmFtc1sxXV0uZm9ybXNbcGFyYW1zWzJdXS5leHBhbmRNb3JlID0gZmFsc2U7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNhdGVnb3JpZXNbcGFyYW1zWzBdXS5leHBhbmRNb3JlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5jYXRlZ29yaWVzW3BhcmFtc1swXV0uZm9ybXNbcGFyYW1zWzFdXS5leHBhbmRNb3JlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5jYXRlZ29yaWVzW3BhcmFtc1swXV0uZm9ybXNbcGFyYW1zWzFdXS5mb3Jtc1twYXJhbXNbMl1dLmV4cGFuZE1vcmUgPSB0cnVlO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodGhpcy5jYXRlZ29yaWVzW3BhcmFtc1swXV0uZm9ybXNbcGFyYW1zWzFdXS5mb3Jtc1twYXJhbXNbMl1dLmZvcm1zW3BhcmFtc1szXV0uZXhwYW5kTW9yZSkge1xuICAgICAgICB0aGlzLmNhdGVnb3JpZXNbcGFyYW1zWzBdXS5mb3Jtc1twYXJhbXNbMV1dLmZvcm1zW3BhcmFtc1syXV0uZm9ybXNbcGFyYW1zWzNdXS5leHBhbmRNb3JlID0gZmFsc2U7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNhdGVnb3JpZXNbcGFyYW1zWzBdXS5leHBhbmRNb3JlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5jYXRlZ29yaWVzW3BhcmFtc1swXV0uZm9ybXNbcGFyYW1zWzFdXS5leHBhbmRNb3JlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5jYXRlZ29yaWVzW3BhcmFtc1swXV0uZm9ybXNbcGFyYW1zWzFdXS5mb3Jtc1twYXJhbXNbMl1dLmV4cGFuZE1vcmUgPSB0cnVlO1xuICAgICAgICB0aGlzLmNhdGVnb3JpZXNbcGFyYW1zWzBdXS5mb3Jtc1twYXJhbXNbMV1dLmZvcm1zW3BhcmFtc1syXV0uZm9ybXNbcGFyYW1zWzNdXS5leHBhbmRNb3JlID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBvbkNoZWNrZWREZWZhdWx0KGV2ZW50LCAuLi5wYXJhbXMpIHtcbiAgICBpZiAocGFyYW1zLmxlbmd0aCA9PT0gMSkge1xuICAgICAgdGhpcy5jYXRlZ29yaWVzW3BhcmFtc1swXV0uZGVmYXVsdFZhbHVlID0gZXZlbnQ7XG4gICAgfSBlbHNlIGlmIChwYXJhbXMubGVuZ3RoID09PSAyKSB7XG4gICAgICB0aGlzLmNhdGVnb3JpZXNbcGFyYW1zWzBdXS5kZWZhdWx0VmFsdWUgPSBldmVudDtcbiAgICAgIHRoaXMuY2F0ZWdvcmllc1twYXJhbXNbMF1dLmZvcm1zW3BhcmFtc1sxXV0uZGVmYXVsdFZhbHVlID0gZXZlbnQ7XG4gICAgfSBlbHNlIGlmIChwYXJhbXMubGVuZ3RoID09PSAzKSB7XG4gICAgICB0aGlzLmNhdGVnb3JpZXNbcGFyYW1zWzBdXS5kZWZhdWx0VmFsdWUgPSBldmVudDtcbiAgICAgIHRoaXMuY2F0ZWdvcmllc1twYXJhbXNbMF1dLmZvcm1zW3BhcmFtc1sxXV0uZGVmYXVsdFZhbHVlID0gZXZlbnQ7XG4gICAgICB0aGlzLmNhdGVnb3JpZXNbcGFyYW1zWzBdXS5mb3Jtc1twYXJhbXNbMV1dLmZvcm1zW3BhcmFtc1syXV0uZGVmYXVsdFZhbHVlID0gZXZlbnQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY2F0ZWdvcmllc1twYXJhbXNbMF1dLmRlZmF1bHRWYWx1ZSA9IGV2ZW50O1xuICAgICAgdGhpcy5jYXRlZ29yaWVzW3BhcmFtc1swXV0uZm9ybXNbcGFyYW1zWzFdXS5kZWZhdWx0VmFsdWUgPSBldmVudDtcbiAgICAgIHRoaXMuY2F0ZWdvcmllc1twYXJhbXNbMF1dLmZvcm1zW3BhcmFtc1sxXV0uZm9ybXNbcGFyYW1zWzJdXS5kZWZhdWx0VmFsdWUgPSBldmVudDtcbiAgICAgIHRoaXMuY2F0ZWdvcmllc1twYXJhbXNbMF1dLmZvcm1zW3BhcmFtc1sxXV0uZm9ybXNbcGFyYW1zWzJdXS5mb3Jtc1twYXJhbXNbM11dLmRlZmF1bHRWYWx1ZSA9IGV2ZW50O1xuICAgIH1cbiAgICAvLyB0aGlzLmdldENvbmRpdGlvblZhbHVlcygpXG4gIH1cblxuICBhZGRLZXl3b3JkRnJvbUlucHV0KGV2ZW50OiBNYXRDaGlwSW5wdXRFdmVudCwgcHJldiwgLi4ucGFyYW1zKSB7XG4gICAgdGhpcy5jYW5FeGl0ID0gZmFsc2U7XG4gICAgY29uc3QgaW5wdXQgPSBldmVudC5pbnB1dDtcbiAgICBjb25zdCB2YWx1ZSA9IGV2ZW50LnZhbHVlO1xuICAgIGNvbnN0IGxlbmd0aCA9IHBhcmFtcy5sZW5ndGg7XG4gICAgY29uc3QgZm9ybXMgPSBsZW5ndGggPT09IDIgPyB0aGlzLmNhdGVnb3JpZXNbcGFyYW1zWzBdXS5mb3Jtc1twYXJhbXNbbGVuZ3RoIC0gMV1dIDogbGVuZ3RoID09PSAzID8gdGhpcy5jYXRlZ29yaWVzW3BhcmFtc1swXV0uZm9ybXNbcGFyYW1zWzFdXS5mb3Jtc1twYXJhbXNbbGVuZ3RoIC0gMV1dIDogdGhpcy5jYXRlZ29yaWVzW3BhcmFtc1swXV0uZm9ybXNbcGFyYW1zWzFdXS5mb3Jtc1twYXJhbXNbMl1dLmZvcm1zW3BhcmFtc1tsZW5ndGggLSAxXV07XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICBjb25zdCBwcmV2SW5kZXggPSBmb3Jtcy5kZWZhdWx0VmFsdWUuZmluZEluZGV4KChvcHQpID0+IG9wdC52YWx1ZS50b0xvY2FsZUxvd2VyQ2FzZSgpID09PSBwcmV2LnRvTG9jYWxlTG93ZXJDYXNlKCkpO1xuICAgICAgaWYgKHByZXZJbmRleCAhPT0gLTEpIHtcbiAgICAgICAgZm9ybXMuZGVmYXVsdFZhbHVlW3ByZXZJbmRleF0udmFsdWUgPSB2YWx1ZS50cmltKCk7XG4gICAgICAgIGlucHV0LnZhbHVlID0gXCJcIjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGV4aXN0ID0gZm9ybXMuZGVmYXVsdFZhbHVlLmZpbmQoKG9wdCkgPT4gb3B0LnZhbHVlLnRvTG9jYWxlTG93ZXJDYXNlKCkgPT09IGV2ZW50LnZhbHVlLnRvTG9jYWxlTG93ZXJDYXNlKCkpO1xuICAgICAgICBpZiAoIWV4aXN0KSB7XG4gICAgICAgICAgZm9ybXMuZGVmYXVsdFZhbHVlLnB1c2goeyB2YWx1ZTogdmFsdWUudHJpbSgpLCBjaGVja2VkOiBmYWxzZSB9KTtcbiAgICAgICAgICBpbnB1dC52YWx1ZSA9IFwiXCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaW5wdXQudmFsdWUgPSBcIlwiO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICB9XG4gICAgLy8gdGhpcy5nZXRDb25kaXRpb25WYWx1ZXMoKVxuICB9XG5cbiAgZHJvcChldmVudDogQ2RrRHJhZ0Ryb3A8c3RyaW5nW10+KSB7XG4gICAgdGhpcy5jYW5FeGl0ID0gZmFsc2U7XG4gICAgaWYgKGV2ZW50LnByZXZpb3VzQ29udGFpbmVyID09PSBldmVudC5jb250YWluZXIpIHtcbiAgICAgIG1vdmVJdGVtSW5BcnJheShldmVudC5jb250YWluZXIuZGF0YSwgZXZlbnQucHJldmlvdXNJbmRleCwgZXZlbnQuY3VycmVudEluZGV4KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdHJhbnNmZXJBcnJheUl0ZW0oZXZlbnQucHJldmlvdXNDb250YWluZXIuZGF0YSwgZXZlbnQuY29udGFpbmVyLmRhdGEsIGV2ZW50LnByZXZpb3VzSW5kZXgsIGV2ZW50LmN1cnJlbnRJbmRleCk7XG4gICAgfVxuICB9XG5cbiAgaW5nb3JlRGVmYXVsdEFjdGlvbihlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICB9XG5cbiAgb25TaG93Q2F0ZWdvcnkoKSB7XG4gICAgdGhpcy5zaG93UHJvZmlsZU5hbWUgPSAhdGhpcy5zaG93UHJvZmlsZU5hbWU7XG4gIH1cblxuICBvblNlbGVjdFBpY3RvKGUsIHBpY3RvKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMuY2FuRXhpdCA9IGZhbHNlO1xuICAgIHRoaXMuZm9ybS5wYXRjaFZhbHVlKHsgUGljdG86IHBpY3RvIH0pO1xuICAgIHRoaXMuaXNQaWN0b0xpc3RTaG93ID0gIXRoaXMuaXNQaWN0b0xpc3RTaG93O1xuICB9XG4gIG9uU2hvd1BpY3RvTGlzdChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMuaXNQaWN0b0xpc3RTaG93ID0gIXRoaXMuaXNQaWN0b0xpc3RTaG93O1xuICB9XG4gIG9uQ2hhbmdlTGFiZWwoZXZlbnQ6IGFueSwgLi4ucGFyYW1zKSB7XG4gICAgY29uc3QgYXJyID0gZXZlbnQubGFiZWwuc3BsaXQoXCIgXCIpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgICBhcnJbaV0gPSBhcnJbaV0uY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBhcnJbaV0uc2xpY2UoMSk7XG4gICAgfVxuICAgIGNvbnN0IGxlbmd0aCA9IHBhcmFtcy5sZW5ndGg7XG4gICAgY29uc3QgZm9ybXMgPSBsZW5ndGggPT09IDIgPyB0aGlzLmNhdGVnb3JpZXNbcGFyYW1zWzBdXS5mb3Jtc1twYXJhbXNbbGVuZ3RoIC0gMV1dIDogbGVuZ3RoID09PSAzID8gdGhpcy5jYXRlZ29yaWVzW3BhcmFtc1swXV0uZm9ybXNbcGFyYW1zWzFdXS5mb3Jtc1twYXJhbXNbbGVuZ3RoIC0gMV1dIDogdGhpcy5jYXRlZ29yaWVzW3BhcmFtc1swXV0uZm9ybXNbcGFyYW1zWzFdXS5mb3Jtc1twYXJhbXNbMl1dLmZvcm1zW3BhcmFtc1tsZW5ndGggLSAxXV07XG4gICAgZm9ybXMua2V5ID0gYXJyLmpvaW4oJycpXG5cbiAgfVxuXG4gIG9uQ2hlY2tlZENoaXAoZXZlbnQ6IGFueSwgLi4ucGFyYW1zKSB7XG4gICAgdGhpcy5jYW5FeGl0ID0gZmFsc2U7XG4gICAgY29uc3QgbGVuZ3RoID0gcGFyYW1zLmxlbmd0aDtcbiAgICBjb25zdCBmb3JtcyA9IGxlbmd0aCA9PT0gMiA/IHRoaXMuY2F0ZWdvcmllc1twYXJhbXNbMF1dLmZvcm1zW3BhcmFtc1tsZW5ndGggLSAxXV0gOiBsZW5ndGggPT09IDMgPyB0aGlzLmNhdGVnb3JpZXNbcGFyYW1zWzBdXS5mb3Jtc1twYXJhbXNbMV1dLmZvcm1zW3BhcmFtc1tsZW5ndGggLSAxXV0gOiB0aGlzLmNhdGVnb3JpZXNbcGFyYW1zWzBdXS5mb3Jtc1twYXJhbXNbMV1dLmZvcm1zW3BhcmFtc1syXV0uZm9ybXNbcGFyYW1zW2xlbmd0aCAtIDFdXTtcbiAgICBjb25zdCBpbmRleCA9IGZvcm1zLmRlZmF1bHRWYWx1ZS5maW5kSW5kZXgoKGNoaXApID0+IGNoaXAudmFsdWUgPT09IGV2ZW50LnZhbHVlKVxuICAgIGlmIChpbmRleCAhPT0gLTEgJiYgZm9ybXMudHlwZSA9PT0gJ2NoZWNrYm94X211bHRpcGxlJykge1xuICAgICAgZm9ybXMuZGVmYXVsdFZhbHVlW2luZGV4XS5jaGVja2VkID0gIWV2ZW50LmNoZWNrZWRcbiAgICB9IGVsc2UgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgZm9ybXMuZGVmYXVsdFZhbHVlLmZvckVhY2goKHZhbHVlKSA9PiB7XG4gICAgICAgIHZhbHVlLmNoZWNrZWQgPSBmYWxzZTtcbiAgICAgIH0pXG4gICAgICBmb3Jtcy5kZWZhdWx0VmFsdWVbaW5kZXhdLmNoZWNrZWQgPSAhZXZlbnQuY2hlY2tlZFxuICAgIH1cbiAgICAvLyB0aGlzLmdldENvbmRpdGlvblZhbHVlcygpXG4gIH1cblxuICBvcGVuRGlhbG9nKCkge1xuICAgIGNvbnN0IGRpYWxvZ1JlZiA9IHRoaXMuZGlhbG9nLm9wZW4oRGlhbG9nQ3JlYXRlVGVtcGxhdGVDb21wb25lbnQsIHtcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgdGFnczogdGhpcy50YWdzLFxuICAgICAgICBwcm9maWw6IHRoaXMuZm9ybS52YWx1ZVxuICAgICAgfVxuICAgIH0pO1xuICAgIGRpYWxvZ1JlZi5hZnRlckNsb3NlZCgpLnN1YnNjcmliZSgoY3VycmVudDogYW55KSA9PiB7XG4gICAgICBpZiAoY3VycmVudCkge1xuICAgICAgICB0aGlzLnNlcnZpY2UuY3VycmVudFRlbXBsYXRlLm5leHQoY3VycmVudCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBvblBhc3NJbkVkaXRNb2RlKGkpIHtcbiAgICB0aGlzLmNhbkV4aXQgPSBmYWxzZTtcbiAgICB0aGlzLmVkaXRJbmRleCA9IGk7XG4gIH1cblxuICBvbkVkaXQoKSB7XG4gICAgdGhpcy5lZGl0SW5kZXggPSBudWxsO1xuICB9XG5cbiAgb25FZGl0Q2F0ZWdvcnlOYW1lKGksIG5hbWUpIHtcbiAgICB0aGlzLmNhbkV4aXQgPSBmYWxzZTtcbiAgICB0aGlzLmNhdGVnb3JpZXNbaV0ubmFtZSA9IG5hbWU7XG4gICAgLy8gdGhpcy5nZXRDb25kaXRpb25WYWx1ZXMoKVxuICB9XG4gIG9uQWNyZWxpbmsoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgfVxuXG4gIGdldENvbmRpdGlvblZhbHVlcygpIHtcbiAgICBjb25zdCBjb25kaXRpb25zTGlzdDogYW55ID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmNhdGVnb3JpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGNhdGVnb3J5ID0ge1xuICAgICAgICBsYWJlbDogdGhpcy5jYXRlZ29yaWVzW2ldLm5hbWUsXG4gICAgICAgIGZvcm1zOiBbXSxcbiAgICAgICAga2V5OiB0aGlzLmNhdGVnb3JpZXNbaV0ua2V5LFxuICAgICAgICBsb2NhdGlvbjoge1xuICAgICAgICAgIHMwSW5kZXg6IGksXG4gICAgICAgIH0sXG4gICAgICAgIGxldmVsOiAwLFxuICAgICAgfVxuXG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMuY2F0ZWdvcmllc1tpXS5mb3Jtcy5sZW5ndGg7IGorKykge1xuICAgICAgICBjb25zdCBzMUZvcm1zID0gdGhpcy5jYXRlZ29yaWVzW2ldLmZvcm1zW2pdO1xuICAgICAgICBjb25zdCBzMUxvY2F0aW9uID0ge1xuICAgICAgICAgIGxldmVsOiAxLFxuICAgICAgICAgIGxvY2F0aW9uOiB7XG4gICAgICAgICAgICBzMEluZGV4OiBpLFxuICAgICAgICAgICAgczFJbmRleDogaixcbiAgICAgICAgICB9LFxuICAgICAgICAgIGtleTogczFGb3Jtcy5rZXksXG4gICAgICAgICAgZGVmYXVsdFZhbHVlOiBzMUZvcm1zLmRlZmF1bHRWYWx1ZSxcbiAgICAgICAgICBsYWJlbDogczFGb3Jtcy5sYWJlbCxcbiAgICAgICAgICBmb3JtczogW11cbiAgICAgICAgfVxuICAgICAgICBjYXRlZ29yeS5mb3Jtcy5wdXNoKHMxTG9jYXRpb24pXG4gICAgICAgIGlmIChzMUZvcm1zLmZvcm1zKSB7XG4gICAgICAgICAgZm9yIChsZXQgayA9IDA7IGsgPCBzMUZvcm1zLmZvcm1zLmxlbmd0aDsgaysrKSB7XG4gICAgICAgICAgICBjb25zdCBzMkZvcm1zID0gczFGb3Jtcy5mb3Jtc1trXVxuICAgICAgICAgICAgY29uc3QgczJMb2NhdGlvbiA9IHtcbiAgICAgICAgICAgICAgbGV2ZWw6IDIsXG4gICAgICAgICAgICAgIGxvY2F0aW9uOiB7XG4gICAgICAgICAgICAgICAgczBJbmRleDogaSxcbiAgICAgICAgICAgICAgICBzMUluZGV4OiBqLFxuICAgICAgICAgICAgICAgIHMySW5kZXg6IGssXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZTogczJGb3Jtcy5kZWZhdWx0VmFsdWUsXG4gICAgICAgICAgICAgIGxhYmVsOiBzMkZvcm1zLmxhYmVsLFxuICAgICAgICAgICAgICBrZXk6IHMyRm9ybXMua2V5LFxuICAgICAgICAgICAgICBmb3JtczogW11cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHMxTG9jYXRpb24uZm9ybXMucHVzaChzMkxvY2F0aW9uKVxuICAgICAgICAgICAgaWYgKHMyRm9ybXMuZm9ybXMpIHtcbiAgICAgICAgICAgICAgZm9yIChsZXQgbCA9IDA7IGwgPCBzMkZvcm1zLmZvcm1zLmxlbmd0aDsgbCsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgczNGb3JtcyA9IHMyRm9ybXMuZm9ybXNbbF1cbiAgICAgICAgICAgICAgICBjb25zdCBzM0xvY2F0aW9uID0ge1xuICAgICAgICAgICAgICAgICAgbGV2ZWw6IDMsXG4gICAgICAgICAgICAgICAgICBsb2NhdGlvbjoge1xuICAgICAgICAgICAgICAgICAgICBzMEluZGV4OiBpLFxuICAgICAgICAgICAgICAgICAgICBzMUluZGV4OiBqLFxuICAgICAgICAgICAgICAgICAgICBzMkluZGV4OiBrLFxuICAgICAgICAgICAgICAgICAgICBzM0luZGV4OiBsLFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZTogczNGb3Jtcy5kZWZhdWx0VmFsdWUsXG4gICAgICAgICAgICAgICAgICBrZXk6IHMzRm9ybXMua2V5LFxuICAgICAgICAgICAgICAgICAgbGFiZWw6IHMzRm9ybXMubGFiZWwsXG4gICAgICAgICAgICAgICAgICBmb3JtczogW11cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgczJMb2NhdGlvbi5mb3Jtcy5wdXNoKHMzTG9jYXRpb24pXG5cbiAgICAgICAgICAgICAgICBpZiAoczNMb2NhdGlvbi5mb3Jtcykge1xuICAgICAgICAgICAgICAgICAgZm9yIChsZXQgbSA9IDA7IG0gPCBzM0xvY2F0aW9uLmZvcm1zLmxlbmd0aDsgbSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHM0TG9jYXRpb24gPSBzM0xvY2F0aW9uLmZvcm1zW21dXG4gICAgICAgICAgICAgICAgICAgIHMzTG9jYXRpb24uZm9ybXMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgbGV2ZWw6IDQsXG4gICAgICAgICAgICAgICAgICAgICAgbG9jYXRpb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHMwSW5kZXg6IGksXG4gICAgICAgICAgICAgICAgICAgICAgICBzMUluZGV4OiBqLFxuICAgICAgICAgICAgICAgICAgICAgICAgczJJbmRleDogayxcbiAgICAgICAgICAgICAgICAgICAgICAgIHMzSW5kZXg6IGwsXG4gICAgICAgICAgICAgICAgICAgICAgICBzNEluZGV4OiBtLFxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlOiBzNExvY2F0aW9uLmRlZmF1bHRWYWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICBrZXk6IHM0TG9jYXRpb24ua2V5LFxuICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBzNExvY2F0aW9uLmxhYmVsXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBjb25kaXRpb25zTGlzdC5wdXNoKGNhdGVnb3J5KVxuICAgIH1cbiAgICB0aGlzLmNvbmRpdGlvbkRhdGEuYWxsID0gY29uZGl0aW9uc0xpc3Q7XG5cbiAgfVxuXG4gIG9uU2VsZWN0Q29uZGl0aW9uKGxldmVsLCBzdWJMZXZlbCwgdmFsdWUpIHtcbiAgICBjb25zdCBjb25kaXRpb24gPSB0aGlzLmNvbmRpdGlvbkRhdGFbbGV2ZWxdLmZpbmQoKGRhdGEpID0+IGRhdGEua2V5ID09PSB2YWx1ZSk7XG4gICAgaWYgKGxldmVsID09PSBcImFsbFwiKSB7XG4gICAgICB0aGlzLmNvbmRpdGlvbkRhdGEgPSB7XG4gICAgICAgIC4uLnRoaXMuY29uZGl0aW9uRGF0YSxcbiAgICAgICAgczE6IFtdLFxuICAgICAgICBzMjogW10sXG4gICAgICAgIHMzOiBbXSxcbiAgICAgICAgZGVmYXVsdFZhbHVlOiBbXVxuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLmN1cnJlbnRFZGl0QmxvY2suY29uZGl0aW9uID0gY29uZGl0aW9uXG4gICAgdGhpcy5vbkdldERlZmF1bHRWYWx1ZSgpXG4gICAgaWYgKGNvbmRpdGlvbi5mb3Jtcy5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLmNvbmRpdGlvbkRhdGFbc3ViTGV2ZWxdID0gY29uZGl0aW9uLmZvcm1zO1xuICAgIH1cbiAgfVxuICBvbkdldERlZmF1bHRWYWx1ZSgpIHtcbiAgICBpZiAodGhpcy5jdXJyZW50RWRpdEJsb2NrLmlzQ29uZGl0aW9uYWwgJiYgdGhpcy5jdXJyZW50RWRpdEJsb2NrPy5jb25kaXRpb24/LmxvY2F0aW9uKSB7XG4gICAgICBjb25zdCB7IHMwSW5kZXgsIC4uLnJlc3QgfSA9IHRoaXMuY3VycmVudEVkaXRCbG9jay5jb25kaXRpb24ubG9jYXRpb25cbiAgICAgIGxldCBjdXJyZW50RGF0YSA9IHRoaXMuY2F0ZWdvcmllc1tzMEluZGV4XTtcbiAgICAgIGZvciAoY29uc3Qga2V5IGluIHJlc3QpIHtcbiAgICAgICAgaWYgKGN1cnJlbnREYXRhLmZvcm1zW3Jlc3Rba2V5XV0pIHtcbiAgICAgICAgICBjdXJyZW50RGF0YSA9IGN1cnJlbnREYXRhLmZvcm1zW3Jlc3Rba2V5XV1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGN1cnJlbnREYXRhLmRlZmF1bHRWYWx1ZSB8fCBbXVxuICAgIH1cbiAgICByZXR1cm4gW11cbiAgfVxuXG4gIG9uQWN0aXZlTWVudShjYXQsIGkpIHtcbiAgICB0aGlzLmVkaXRJbmRleCA9IGk7XG4gICAgdGhpcy5wYXJhbXNJbmRleCA9IFtpXTtcbiAgICB0aGlzLmlzU2VjdGlvbiA9IHRydWU7XG4gICAgdGhpcy5pc0Jsb2NrID0gZmFsc2U7XG4gICAgdGhpcy5jdXJyZW50RWRpdEJsb2NrID0gY2F0O1xuICB9XG5cbiAgY2F0TmFtZVN0YXJ0KHN0cjogc3RyaW5nKSB7XG4gICAgY29uc3Qgdm93ZWxzID0gWydhJywgJ2UnLCAnaScsICdvJywgJ3UnLCAneSddO1xuICAgIHJldHVybiB2b3dlbHMuaW5jbHVkZXMoc3RyLnN1YnN0cigwLCAxKS50b0xvY2FsZUxvd2VyQ2FzZSgpKVxuICB9XG5cbiAgb25FZGl0QmxvY2soYmxvY2ssIC4uLnBhcmFtcykge1xuICAgIHRoaXMuaXNCbG9jayA9IHRydWU7XG4gICAgdGhpcy5jdXJyZW50RWRpdEJsb2NrID0gYmxvY2s7XG4gICAgY29uc3QgeyBjb25kaXRpb24gfSA9IHRoaXMuY3VycmVudEVkaXRCbG9ja1xuICAgIGlmIChjb25kaXRpb24gJiYgY29uZGl0aW9uLmxvY2F0aW9uKSB7XG4gICAgICBjb25zdCBsb2NhdGlvbiA9IGNvbmRpdGlvbi5sb2NhdGlvbjtcbiAgICAgIGlmIChsb2NhdGlvbj8uczBJbmRleCA+PSAwKSB7XG4gICAgICAgIHRoaXMuYWxsID0gdGhpcy5jYXRlZ29yaWVzW2xvY2F0aW9uLnMwSW5kZXhdLmtleVxuICAgICAgfVxuICAgICAgaWYgKGxvY2F0aW9uPy5zMUluZGV4ID49IDApIHtcbiAgICAgICAgdGhpcy5zMSA9IHRoaXMuY2F0ZWdvcmllc1tsb2NhdGlvbi5zMEluZGV4XS5mb3Jtc1tsb2NhdGlvbi5zMUluZGV4XS5rZXk7XG4gICAgICB9XG4gICAgICBpZiAobG9jYXRpb24/LnMySW5kZXggPj0gMCkge1xuICAgICAgICB0aGlzLnMyID0gdGhpcy5jYXRlZ29yaWVzW2xvY2F0aW9uLnMwSW5kZXhdLmZvcm1zW2xvY2F0aW9uLnMxSW5kZXhdLmZvcm1zW2xvY2F0aW9uLnMySW5kZXhdLmtleTtcbiAgICAgIH1cbiAgICAgIGlmIChsb2NhdGlvbj8uczNJbmRleCA+PSAwKSB7XG4gICAgICAgIHRoaXMuczMgPSB0aGlzLmNhdGVnb3JpZXNbbG9jYXRpb24uczBJbmRleF0uZm9ybXNbbG9jYXRpb24uczFJbmRleF0uZm9ybXNbbG9jYXRpb24uczJJbmRleF0uZm9ybXNbbG9jYXRpb24uczNJbmRleF0ua2V5O1xuICAgICAgfVxuICAgICAgaWYgKGxvY2F0aW9uPy5zNEluZGV4ID49IDApIHtcbiAgICAgICAgdGhpcy5zNCA9IHRoaXMuY2F0ZWdvcmllc1tsb2NhdGlvbi5zMEluZGV4XS5mb3Jtc1tsb2NhdGlvbi5zMUluZGV4XS5mb3Jtc1tsb2NhdGlvbi5zMkluZGV4XS5mb3Jtc1tsb2NhdGlvbi5zM0luZGV4XS5mb3Jtc1tsb2NhdGlvbi5zNEluZGV4XS5rZXk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuaXNTZWN0aW9uID0gZmFsc2U7XG4gICAgdGhpcy5wYXJhbXNJbmRleCA9IHBhcmFtcztcbiAgICB0aGlzLmdldENvbmRpdGlvblZhbHVlcygpXG4gIH1cblxuICBvblJlbW92ZWJsb2NrKGV2ZW50LCBibG9jaykge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIH1cblxuICBvblJlbW92ZUZpZWxkQmxvY2soZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGxlbmd0aCA9IHRoaXMucGFyYW1zSW5kZXgubGVuZ3RoO1xuICAgIHRoaXMuY2FuRXhpdCA9IGZhbHNlO1xuICAgIGNvbnN0IGZvcm1zID0gbGVuZ3RoID09PSAxID8gdGhpcy5jYXRlZ29yaWVzIDogbGVuZ3RoID09PSAyID8gdGhpcy5jYXRlZ29yaWVzW3RoaXMucGFyYW1zSW5kZXhbMF1dLmZvcm1zIDogbGVuZ3RoID09PSAzID8gdGhpcy5jYXRlZ29yaWVzW3RoaXMucGFyYW1zSW5kZXhbMF1dLmZvcm1zW3RoaXMucGFyYW1zSW5kZXhbMV1dLmZvcm1zIDogdGhpcy5jYXRlZ29yaWVzW3RoaXMucGFyYW1zSW5kZXhbMF1dLmZvcm1zW3RoaXMucGFyYW1zSW5kZXhbMV1dLmZvcm1zW3RoaXMucGFyYW1zSW5kZXhbMl1dLmZvcm1zO1xuXG4gICAgdGhpcy5jdXJyZW50RWRpdEJsb2NrID0gbnVsbDtcbiAgICB0aGlzLmlzQmxvY2sgPSBmYWxzZTtcbiAgICB0aGlzLmlzU2VjdGlvbiA9IGZhbHNlO1xuICAgIHRoaXMub25IaXN0b3JpY3Moe1xuICAgICAgZm9ybTogZm9ybXMuc3BsaWNlKHRoaXMucGFyYW1zSW5kZXhbbGVuZ3RoIC0gMV0sIDEpWzBdLFxuICAgICAgbWV0aG9kOiAnc3BsaWNlJyxcbiAgICAgIGxvY2F0aW9uOiBsZW5ndGggPT09IDEgPyAnY2F0ZWdvcnknIDogJ2Zvcm1zJyxcbiAgICAgIHBhcmFtczogdGhpcy5wYXJhbXNJbmRleFxuICAgIH0pXG4gIH1cblxuICBvbkR1cGxpY2F0ZWRCbG9jayhldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgbGVuZ3RoID0gdGhpcy5wYXJhbXNJbmRleC5sZW5ndGg7XG4gICAgdGhpcy5jYW5FeGl0ID0gZmFsc2U7XG4gICAgY29uc3QgZm9ybXMgPSBsZW5ndGggPT09IDEgPyB0aGlzLmNhdGVnb3JpZXMgOiBsZW5ndGggPT09IDIgPyB0aGlzLmNhdGVnb3JpZXNbdGhpcy5wYXJhbXNJbmRleFswXV0uZm9ybXMgOiBsZW5ndGggPT09IDMgPyB0aGlzLmNhdGVnb3JpZXNbdGhpcy5wYXJhbXNJbmRleFswXV0uZm9ybXNbdGhpcy5wYXJhbXNJbmRleFsxXV0uZm9ybXMgOiB0aGlzLmNhdGVnb3JpZXNbdGhpcy5wYXJhbXNJbmRleFswXV0uZm9ybXNbdGhpcy5wYXJhbXNJbmRleFsxXV0uZm9ybXNbdGhpcy5wYXJhbXNJbmRleFsyXV0uZm9ybXM7XG4gICAgY29uc3QgY2xvbmVFZGl0YWJsZSA9IHRoaXMub25FZGl0YWJsZUJsb2NrKHsgLi4udGhpcy5jdXJyZW50RWRpdEJsb2NrLCBuYW1lOiB0aGlzLmN1cnJlbnRFZGl0QmxvY2submFtZSArICcgLSBjb3BpZScgfSlcbiAgICBjb25zdCBjbG9uZUJsb2NrID0gSlNPTi5zdHJpbmdpZnkoY2xvbmVFZGl0YWJsZSk7XG5cblxuICAgIGZvcm1zLnB1c2goSlNPTi5wYXJzZShjbG9uZUJsb2NrKSk7XG4gICAgdGhpcy5jdXJyZW50RWRpdEJsb2NrID0gZm9ybXMuYXQoLTEpO1xuICAgIGNvbnN0IHBhcmFtczogbnVtYmVyW10gPSBbLi4udGhpcy5wYXJhbXNJbmRleF1cbiAgICBwYXJhbXMucG9wKCk7XG4gICAgcGFyYW1zLnB1c2goZm9ybXMubGVuZ3RoIC0gMSk7XG4gICAgdGhpcy5vbkhpc3Rvcmljcyh7XG4gICAgICBmb3JtOiBKU09OLnBhcnNlKGNsb25lQmxvY2spLFxuICAgICAgbWV0aG9kOiAncHVzaCcsXG4gICAgICBsb2NhdGlvbjogJ2Zvcm1zJyxcbiAgICAgIHBhcmFtc1xuICAgIH0pXG4gICAgLy8gdGhpcy5lZGl0SW5kZXggPSBmb3Jtcy5sZW5ndGggLSAxO1xuICB9XG5cbiAgb25FZGl0YWJsZUJsb2NrKG5vdEVkaXRhYmxlQmxvY2s6IGFueSkge1xuICAgIGNvbnN0IGVkaXRhYmxlRm9ybUJsb2NrID0gbm90RWRpdGFibGVCbG9jay5mb3JtcyA/IG5vdEVkaXRhYmxlQmxvY2suZm9ybXNcbiAgICAgIC5tYXAoKGNhdCkgPT4ge1xuICAgICAgICBpZiAoY2F0LmZvcm1zKSB7XG4gICAgICAgICAgY29uc3QgZiA9IGNhdC5mb3Jtc1xuICAgICAgICAgICAgLm1hcCgoc3ViKSA9PiB7XG4gICAgICAgICAgICAgIGlmIChzdWIuZm9ybXMpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzID0gc3ViLmZvcm1zLm1hcCgoY2hpbGQpID0+IHtcbiAgICAgICAgICAgICAgICAgIGlmIChjaGlsZC5mb3Jtcykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgIC4uLmNoaWxkLFxuICAgICAgICAgICAgICAgICAgICAgIGVkaXRhYmxlOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIC4uLmNoaWxkLCBlZGl0YWJsZTogdHJ1ZVxuICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgLi4uc3ViLFxuICAgICAgICAgICAgICAgICAgZWRpdGFibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICBmb3Jtczogc1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICByZXR1cm4geyAuLi5zdWIsIGVkaXRhYmxlOiB0cnVlIH07XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAuLi5jYXQsXG4gICAgICAgICAgICBlZGl0YWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGZvcm1zOiBmXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IC4uLmNhdCwgZWRpdGFibGU6IHRydWUgfVxuICAgICAgfSkgOiBudWxsO1xuICAgIHJldHVybiBlZGl0YWJsZUZvcm1CbG9jayA/IHsgLi4ubm90RWRpdGFibGVCbG9jaywgZWRpdGFibGU6IHRydWUsIGZvcm1zOiBlZGl0YWJsZUZvcm1CbG9jayB9IDogbm90RWRpdGFibGVCbG9jaztcbiAgfVxuXG4gIG9uS2V5VXBDaGlwKGV2ZW50LCBmaWVsZCkge1xuICAgIHRoaXMuY2FuRXhpdCA9IGZhbHNlO1xuICAgIGlmIChldmVudC5rZXkgPT09IFwiO1wiKSB7XG4gICAgICBjb25zdCBleGlzdCA9IGZpZWxkLmRlZmF1bHRWYWx1ZS5maW5kKChvcHQpID0+IG9wdC52YWx1ZS50b0xvY2FsZUxvd2VyQ2FzZSgpID09PSBldmVudC50YXJnZXQudmFsdWUuc3BsaXQoXCI7XCIpWzBdLnRvTG9jYWxlTG93ZXJDYXNlKCkpO1xuICAgICAgaWYgKCFleGlzdCkge1xuICAgICAgICBmaWVsZC5kZWZhdWx0VmFsdWUucHVzaCh7XG4gICAgICAgICAgdmFsdWU6IGV2ZW50LnRhcmdldC52YWx1ZS5zcGxpdChcIjtcIilbMF0uc2xpY2UoMCwgMjApLFxuICAgICAgICAgIGNoZWNrZWQ6IGZhbHNlXG4gICAgICAgIH0pO1xuICAgICAgICBldmVudC50YXJnZXQudmFsdWUgPSBcIlwiO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZXZlbnQudGFyZ2V0LnZhbHVlID0gXCJcIjtcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gdGhpcy5nZXRDb25kaXRpb25WYWx1ZXMoKVxuICB9XG5cbiAgb25FZGl0Q2hpcChjaGlwKSB7XG4gICAgaWYgKGNoaXAudmFsdWUgPT09IHRoaXMuY3VycmVudENoaXApIHtcbiAgICAgIHRoaXMuY3VycmVudENoaXAgPSBcIlwiXG4gICAgICB0aGlzLnByZXZWYWx1ZSA9IFwiXCJcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jdXJyZW50Q2hpcCA9IGNoaXAudmFsdWU7XG4gICAgICB0aGlzLnByZXZWYWx1ZSA9IGNoaXAudmFsdWVcbiAgICB9XG4gIH1cblxuICBhZGRLZXl3b3JkRnJvbUlucHV0QmxvY2soZXZlbnQ6IE1hdENoaXBJbnB1dEV2ZW50LCBmaWVsZCwgcHJldikge1xuICAgIHRoaXMuY2FuRXhpdCA9IGZhbHNlO1xuICAgIGNvbnN0IGlucHV0ID0gZXZlbnQuaW5wdXQ7XG4gICAgY29uc3QgdmFsdWUgPSBldmVudC52YWx1ZTtcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIGNvbnN0IHByZXZJbmRleCA9IGZpZWxkLmRlZmF1bHRWYWx1ZT8uZmluZEluZGV4KChvcHQpID0+IG9wdC52YWx1ZS50b0xvY2FsZUxvd2VyQ2FzZSgpID09PSBwcmV2LnRvTG9jYWxlTG93ZXJDYXNlKCkpO1xuICAgICAgaWYgKHByZXZJbmRleCAhPT0gLTEpIHtcbiAgICAgICAgZmllbGQuZGVmYXVsdFZhbHVlW3ByZXZJbmRleF0udmFsdWUgPSB2YWx1ZS50cmltKCk7XG4gICAgICAgIGlucHV0LnZhbHVlID0gXCJcIjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGV4aXN0ID0gZmllbGQuZGVmYXVsdFZhbHVlLmZpbmQoKG9wdCkgPT4gb3B0LnZhbHVlLnRvTG9jYWxlTG93ZXJDYXNlKCkgPT09IGV2ZW50LnZhbHVlLnRvTG9jYWxlTG93ZXJDYXNlKCkpO1xuICAgICAgICBpZiAoIWV4aXN0KSB7XG4gICAgICAgICAgZmllbGQuZGVmYXVsdFZhbHVlLnB1c2goeyB2YWx1ZTogdmFsdWUudHJpbSgpLnNsaWNlKDAsIDE1KSwgY2hlY2tlZDogZmFsc2UgfSk7XG4gICAgICAgICAgaW5wdXQudmFsdWUgPSBcIlwiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlucHV0LnZhbHVlID0gXCJcIjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgfVxuICAgIC8vIHRoaXMuZ2V0Q29uZGl0aW9uVmFsdWVzKClcbiAgfVxuXG4gIG9uQ2hlY2tlZENoaXBCbG9jayhldmVudDogYW55LCBmaWVsZCkge1xuICAgIHRoaXMuY2FuRXhpdCA9IGZhbHNlO1xuICAgIGNvbnN0IGluZGV4ID0gZmllbGQuZGVmYXVsdFZhbHVlLmZpbmRJbmRleCgoY2hpcCkgPT4gY2hpcC52YWx1ZSA9PT0gZXZlbnQudmFsdWUpXG4gICAgaWYgKGluZGV4ICE9PSAtMSAmJiBmaWVsZC50eXBlID09PSAnY2hlY2tib3hfbXVsdGlwbGUnKSB7XG4gICAgICBmaWVsZC5kZWZhdWx0VmFsdWVbaW5kZXhdLmNoZWNrZWQgPSAhZXZlbnQuY2hlY2tlZFxuICAgIH0gZWxzZSBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBmaWVsZC5kZWZhdWx0VmFsdWUuZm9yRWFjaCgodmFsdWUpID0+IHtcbiAgICAgICAgdmFsdWUuY2hlY2tlZCA9IGZhbHNlO1xuICAgICAgfSlcbiAgICAgIGZpZWxkLmRlZmF1bHRWYWx1ZVtpbmRleF0uY2hlY2tlZCA9ICFldmVudC5jaGVja2VkXG4gICAgfVxuICAgIC8vIHRoaXMuZ2V0Q29uZGl0aW9uVmFsdWVzKClcbiAgfVxuXG4gIHJlbW92ZUtleXdvcmRCbG9jayhrZXl3b3JkOiBhbnksIGZpZWxkKSB7XG4gICAgdGhpcy5jYW5FeGl0ID0gZmFsc2U7XG4gICAgZmllbGQuZGVmYXVsdFZhbHVlID0gZmllbGQuZGVmYXVsdFZhbHVlLmZpbHRlcigob3B0aW9uKSA9PiBvcHRpb24udmFsdWUgIT09IGtleXdvcmQudmFsdWUpO1xuICAgIC8vIHRoaXMuZ2V0Q29uZGl0aW9uVmFsdWVzKClcbiAgfVxuXG4gIG9uQ2hhbmdlVHlwZUJsb2NrKGZpZWxkKSB7XG4gICAgdGhpcy5jYW5FeGl0ID0gZmFsc2U7XG4gICAgaWYgKGZpZWxkLnR5cGUgPT09IFwic2VsZWN0XCIgfHwgZmllbGQudHlwZSA9PT0gXCJyYWRpb1wiIHx8IGZpZWxkLnR5cGUgPT09IFwiY2hlY2tib3hfbXVsdGlwbGVcIikge1xuICAgICAgZmllbGQuZGVmYXVsdFZhbHVlID0gW107XG4gICAgfSBlbHNlIGlmIChmaWVsZC50eXBlID09PSBcImNoZWNrYm94XCIgfHwgZmllbGQudHlwZSA9PT0gXCJ0b2dnbGVcIikge1xuICAgICAgZmllbGQuZGVmYXVsdFZhbHVlID0gdHJ1ZTtcbiAgICAgIGZpZWxkLnZhbHVlID0gZmFsc2U7XG4gICAgfSBlbHNlIGlmIChmaWVsZC50eXBlID09PSAnbm9uZScpIHtcbiAgICAgIGZpZWxkLmRlZmF1bHRWYWx1ZSA9IFwiXCI7XG4gICAgICBmaWVsZC52YWx1ZSA9IFwiXCI7XG4gICAgICBmaWVsZC5sYWJlbCA9IFwiQXVjdW5cIjtcbiAgICB9IGVsc2Uge1xuICAgICAgZmllbGQuZGVmYXVsdFZhbHVlID0gXCJcIjtcbiAgICAgIGZpZWxkLnZhbHVlID0gXCJcIjtcbiAgICB9XG4gIH1cblxuICBvbkFkZE5ld1N1YkxldmVsRmllbGRCbG9jayhldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5jYW5FeGl0ID0gZmFsc2U7XG4gICAgY29uc3QgbGVuZ3RoID0gdGhpcy5wYXJhbXNJbmRleC5sZW5ndGg7XG4gICAgY29uc3QgZm9ybXMgPSBsZW5ndGggPT09IDEgPyB0aGlzLmNhdGVnb3JpZXNbdGhpcy5wYXJhbXNJbmRleFswXV0gOiBsZW5ndGggPT09IDIgPyB0aGlzLmNhdGVnb3JpZXNbdGhpcy5wYXJhbXNJbmRleFswXV0uZm9ybXNbdGhpcy5wYXJhbXNJbmRleFtsZW5ndGggLSAxXV0gOiBsZW5ndGggPT09IDMgPyB0aGlzLmNhdGVnb3JpZXNbdGhpcy5wYXJhbXNJbmRleFswXV0uZm9ybXNbdGhpcy5wYXJhbXNJbmRleFsxXV0uZm9ybXNbdGhpcy5wYXJhbXNJbmRleFtsZW5ndGggLSAxXV0gOiB0aGlzLmNhdGVnb3JpZXNbdGhpcy5wYXJhbXNJbmRleFswXV0uZm9ybXNbdGhpcy5wYXJhbXNJbmRleFsxXV0uZm9ybXNbdGhpcy5wYXJhbXNJbmRleFsyXV0uZm9ybXNbdGhpcy5wYXJhbXNJbmRleFtsZW5ndGggLSAxXV07XG4gICAgZm9ybXMuZXhwYW5kTW9yZSA9IHRydWU7XG4gICAgZm9ybXMuZm9ybXMgPSBmb3Jtcy5mb3JtcyB8fCBbXVxuICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICBsYWJlbDogXCJOb3V2ZWxsZSBzb3VzIGNhdMOpZ29yaWUgw6AgcmVub21tZXJcIixcbiAgICAgIGtleTogXCJOb3V2ZWxsZXNvdXNjYXTDqWdvcmllw6ByZW5vbW1lclwiLFxuICAgICAgZXhwYW5kT25ib2FyZGluZzogdHJ1ZSxcbiAgICAgIGRlZmF1bHRWYWx1ZTogbnVsbCxcbiAgICAgIHZhbHVlOiB0cnVlLFxuICAgICAgc2l6ZTogODAsXG4gICAgICBpc01hbmRhdG9yeTogZmFsc2UsXG4gICAgICBvdGhlclZhbHVlOiAnJyxcbiAgICAgIHR5cGU6IFwidGV4dFwiLFxuICAgICAgZWRpdGFibGU6IHRydWUsXG4gICAgICBpc0NvbmRpdGlvbmFsOiBmYWxzZSxcbiAgICAgIGNvbmRpdGlvblZhbHVlOiBcIlwiLFxuICAgICAgY29uZGl0aW9uOiB7fSxcbiAgICAgIGRlbGV0ZWFibGU6IHRydWUsXG4gICAgICBzdWJMZXZlbDogMSxcbiAgICAgIGV4cGFuZE1vcmU6IGZhbHNlLFxuICAgIH1cbiAgICBmb3Jtcy5mb3Jtcy5wdXNoKGRhdGFcbiAgICApXG4gICAgdGhpcy5vbkhpc3Rvcmljcyh7XG4gICAgICBmb3JtOiBkYXRhLFxuICAgICAgbWV0aG9kOiAncHVzaCcsXG4gICAgICBsb2NhdGlvbjogJ2Zvcm1zJyxcbiAgICAgIHBhcmFtczogdGhpcy5wYXJhbXNJbmRleFxuICAgIH0pXG4gIH1cblxuXG4gIG9uT3BlblR5cGVEaWFsb2coZmllbGQpIHtcbiAgICBjb25zdCBkaWFsb2dSZWYgPSB0aGlzLmRpYWxvZy5vcGVuKFR5cGVDb21wb25lbnQsIHtcbiAgICAgIGRhdGE6IHsgc2VsZWN0ZWRUeXBlOiBmaWVsZC50eXBlIH1cbiAgICB9KTtcbiAgICBkaWFsb2dSZWYuYWZ0ZXJDbG9zZWQoKS5zdWJzY3JpYmUoKHR5cGU6IGFueSkgPT4ge1xuICAgICAgaWYgKHR5cGUpIHtcbiAgICAgICAgZmllbGQudHlwZSA9IHR5cGU7XG4gICAgICAgIHRoaXMub25DaGFuZ2VUeXBlQmxvY2soZmllbGQpXG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBmaWVsZFdpZHRoKHR5cGU6IHN0cmluZywgbGVuZ3RoOiBudW1iZXIsIGluZGV4OiBudW1iZXIpIHtcbiAgICBpZiAodHlwZSA9PT0gJ3RvZ2dsZScpIHtcbiAgICAgIHJldHVybiAnNTAlJ1xuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gXCJ0ZXh0XCIgfHwgdHlwZSA9PT0gXCJkYXRlXCIgfHwgdHlwZSA9PT0gXCJub25lXCIgfHwgdHlwZSA9PSAnc2VsZWN0JyB8fCB0eXBlID09PSAndGVsJyB8fCB0eXBlID09PSAnZW1haWwnIHx8IHR5cGUgPT09ICdwYXNzd29yZCcgfHwgdHlwZSA9PT0gJ3RleHRhcmVhJykge1xuICAgICAgaWYgKGxlbmd0aCA8IDMpIHtcbiAgICAgICAgcmV0dXJuICc1MCUnXG4gICAgICB9IGVsc2UgaWYgKGxlbmd0aCA9PT0gMykge1xuICAgICAgICByZXR1cm4gJzMzJSdcbiAgICAgIH0gZWxzZSBpZiAobGVuZ3RoID09PSA0KSB7XG4gICAgICAgIHJldHVybiAnNTAlJ1xuICAgICAgfSBlbHNlIGlmIChsZW5ndGggPT09IDUpIHtcbiAgICAgICAgcmV0dXJuIGluZGV4IDw9IDIgPyAnMzMlJyA6ICc1MCUnXG4gICAgICB9IGVsc2UgaWYgKGxlbmd0aCA+PSA2KSB7XG4gICAgICAgIHJldHVybiAnMzMlJ1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gJzEwMCUnXG4gIH1cblxuICBvbkNhbmNlbChsZWZ0OiBib29sZWFuKSB7XG4gICAgaWYgKGxlZnQpIHtcbiAgICAgIGNvbnN0IGN1cnJlbnQgPSB0aGlzLmN1cnJlbnRDYW5jZWxlZEluZGV4ID09PSBudWxsID8gdGhpcy5oaXN0b3JpY3MubGVuZ3RoIC0gMSA6IHRoaXMuY3VycmVudENhbmNlbGVkSW5kZXhcbiAgICAgIGlmICh0aGlzLmhpc3Rvcmljcy5sZW5ndGggPiAwICYmIGN1cnJlbnQgPj0gMCkge1xuICAgICAgICB0aGlzLmN1cnJlbnRDYW5jZWxlZEluZGV4ID0gY3VycmVudCAtIDE7XG4gICAgICAgIGNvbnN0IGxhc3RBY3Rpb24gPSB0aGlzLmhpc3Rvcmljc1tjdXJyZW50XVxuICAgICAgICBjb25zdCBwYXJhbXMgPSBsYXN0QWN0aW9uLnBhcmFtcztcbiAgICAgICAgY29uc3QgbGVuZ3RoID0gcGFyYW1zLmxlbmd0aDtcbiAgICAgICAgY29uc3QgZm9ybXMgPSBsZW5ndGggPT09IDEgPyB0aGlzLmNhdGVnb3JpZXMgOiBsZW5ndGggPT09IDIgPyB0aGlzLmNhdGVnb3JpZXNbcGFyYW1zWzBdXS5mb3Jtc1twYXJhbXNbMV1dLmZvcm1zIDogdGhpcy5jYXRlZ29yaWVzW3BhcmFtc1swXV0uZm9ybXNbcGFyYW1zWzFdXS5mb3Jtc1twYXJhbXNbMl1dLmZvcm1zO1xuICAgICAgICBpZiAobGFzdEFjdGlvbi5tZXRob2QgPT09IFwic3BsaWNlXCIpIHtcbiAgICAgICAgICBpZiAobGVuZ3RoID09PSAxICYmIGxhc3RBY3Rpb24ubG9jYXRpb24gPT09ICdjYXRlZ29yeScpIHtcbiAgICAgICAgICAgIGZvcm1zLnB1c2gobGFzdEFjdGlvbi5mb3JtKVxuICAgICAgICAgIH0gZWxzZSBpZiAobGVuZ3RoID09PSAxICYmIGxhc3RBY3Rpb24ubG9jYXRpb24gPT09ICdmb3JtcycpIHtcbiAgICAgICAgICAgIGZvcm1zW3BhcmFtc1swXV0uZm9ybXMucHVzaChsYXN0QWN0aW9uLmZvcm0pXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZvcm1zLnB1c2gobGFzdEFjdGlvbi5mb3JtKVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAobGFzdEFjdGlvbi5sb2NhdGlvbiA9PT0gJ2NhdGVnb3J5Jykge1xuICAgICAgICAgICAgdGhpcy5vbkFjdGl2ZU1lbnUoZm9ybXNbZm9ybXMubGVuZ3RoIC0gMV0sIGZvcm1zLmxlbmd0aCAtIDEpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm9uRWRpdEJsb2NrKGZvcm1zW2Zvcm1zLmxlbmd0aCAtIDFdLCBsYXN0QWN0aW9uLnBhcmFtcylcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKGxlbmd0aCA9PT0gMSAmJiBsYXN0QWN0aW9uLmxvY2F0aW9uID09PSAnY2F0ZWdvcnknKSB7XG4gICAgICAgICAgICBmb3Jtcy5zcGxpY2UocGFyYW1zW2xlbmd0aCAtIDFdLCAxKVxuICAgICAgICAgIH0gZWxzZSBpZiAobGVuZ3RoID09PSAxICYmIGxhc3RBY3Rpb24ubG9jYXRpb24gPT09ICdmb3JtcycpIHtcbiAgICAgICAgICAgIGZvcm1zW3BhcmFtc1swXV0uZm9ybXMuc3BsaWNlKHBhcmFtc1tsZW5ndGggLSAxXSwgMSlcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZm9ybXMuc3BsaWNlKHBhcmFtc1tsZW5ndGggLSAxXSwgMSlcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aGlzLmN1cnJlbnRFZGl0QmxvY2sgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0aGlzLmN1cnJlbnRDYW5jZWxlZEluZGV4ICE9PSBudWxsICYmIHRoaXMuaGlzdG9yaWNzLmxlbmd0aCA+IHRoaXMuY3VycmVudENhbmNlbGVkSW5kZXgpIHtcbiAgICAgICAgdGhpcy5jdXJyZW50Q2FuY2VsZWRJbmRleCArPSAxO1xuICAgICAgICBjb25zdCBsYXN0QWN0aW9uID0gdGhpcy5oaXN0b3JpY3NbdGhpcy5jdXJyZW50Q2FuY2VsZWRJbmRleF1cbiAgICAgICAgY29uc3QgcGFyYW1zID0gbGFzdEFjdGlvbi5wYXJhbXM7XG4gICAgICAgIGNvbnN0IGxlbmd0aCA9IHBhcmFtcy5sZW5ndGg7XG4gICAgICAgIGNvbnN0IGZvcm1zID0gbGVuZ3RoID09PSAxID8gdGhpcy5jYXRlZ29yaWVzIDogbGVuZ3RoID09PSAyID8gdGhpcy5jYXRlZ29yaWVzW3BhcmFtc1swXV0uZm9ybXNbcGFyYW1zWzFdXS5mb3JtcyA6IHRoaXMuY2F0ZWdvcmllc1twYXJhbXNbMF1dLmZvcm1zW3BhcmFtc1sxXV0uZm9ybXNbcGFyYW1zWzJdXS5mb3JtcztcblxuICAgICAgICBpZiAobGFzdEFjdGlvbi5tZXRob2QgPT09IFwicHVzaFwiKSB7XG4gICAgICAgICAgaWYgKGxlbmd0aCA9PT0gMSAmJiBsYXN0QWN0aW9uLmxvY2F0aW9uID09PSAnY2F0ZWdvcnknKSB7XG4gICAgICAgICAgICBmb3Jtcy5wdXNoKGxhc3RBY3Rpb24uZm9ybSlcbiAgICAgICAgICB9IGVsc2UgaWYgKGxlbmd0aCA9PT0gMSAmJiBsYXN0QWN0aW9uLmxvY2F0aW9uID09PSAnZm9ybXMnKSB7XG4gICAgICAgICAgICBmb3Jtc1twYXJhbXNbMF1dLmZvcm1zLnB1c2gobGFzdEFjdGlvbi5mb3JtKVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmb3Jtcy5wdXNoKGxhc3RBY3Rpb24uZm9ybSlcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGxhc3RBY3Rpb24ubG9jYXRpb24gPT09ICdjYXRlZ29yeScpIHtcbiAgICAgICAgICAgIHRoaXMub25BY3RpdmVNZW51KGZvcm1zW2Zvcm1zLmxlbmd0aCAtIDFdLCBmb3Jtcy5sZW5ndGggLSAxKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5vbkVkaXRCbG9jayhmb3Jtc1tmb3Jtcy5sZW5ndGggLSAxXSwgbGFzdEFjdGlvbi5wYXJhbXMpXG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmIChsZW5ndGggPT09IDEgJiYgbGFzdEFjdGlvbi5sb2NhdGlvbiA9PT0gJ2NhdGVnb3J5Jykge1xuICAgICAgICAgICAgZm9ybXMuc3BsaWNlKHBhcmFtc1tsZW5ndGggLSAxXSwgMSlcbiAgICAgICAgICB9IGVsc2UgaWYgKGxlbmd0aCA9PT0gMSAmJiBsYXN0QWN0aW9uLmxvY2F0aW9uID09PSAnZm9ybXMnKSB7XG4gICAgICAgICAgICBmb3Jtc1twYXJhbXNbMF1dLmZvcm1zLnNwbGljZShwYXJhbXNbbGVuZ3RoIC0gMV0sIDEpXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZvcm1zLnNwbGljZShwYXJhbXNbbGVuZ3RoIC0gMV0sIDEpXG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMuY3VycmVudEVkaXRCbG9jayA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBvbkNoZWNrVmFsdWUoZXZlbnQ6IGJvb2xlYW4pIHtcbiAgICB0aGlzLmludmFsaWRlVmFsdWUgPSBldmVudDtcbiAgfVxuXG4gIG9uSGlzdG9yaWNzKGRhdGEpIHtcbiAgICBpZiAodGhpcy5jdXJyZW50Q2FuY2VsZWRJbmRleCAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5oaXN0b3JpY3MgPSBbXTtcbiAgICAgIHRoaXMuY3VycmVudENhbmNlbGVkSW5kZXggPSBudWxsO1xuICAgIH1cbiAgICB0aGlzLmhpc3Rvcmljcy5wdXNoKGRhdGEpXG4gIH1cbn1cblxuXG4iLCI8bWFpbj5cbiAgPGRpdiBjbGFzcz1cImhlYWRlci1jcmVhdGUtcHJvZmlsZVwiPlxuICAgIDxkaXYgY2xhc3M9XCJoZWFkZXItY3JlYXRlLXByb2ZpbGUtdG9wXCI+XG4gICAgICA8aDM+XG4gICAgICAgIDxzcGFuPnt7IGZvcm0uZ2V0KFwiTmFtZVwiKS52YWx1ZSB9fTwvc3Bhbj5cbiAgICAgICAgPG1hdC1pY29uIChjbGljayk9XCJvcGVuRGlhbG9nKClcIj5lZGl0PC9tYXQtaWNvbj5cbiAgICAgIDwvaDM+XG4gICAgICA8ZGl2IGNsYXNzPVwiY3JlYXRlLXByb2ZpbGUtYWN0aW9uXCI+XG4gICAgICAgIDxidXR0b24gbWF0LWJ1dHRvbiBjbGFzcz1cInJlZ2lzdGVyLWJ1dHRvblwiIHR5cGU9XCJzdWJtaXRcIiAoY2xpY2spPVwib25TdWJtaXQoZmFsc2UpXCI+XG4gICAgICAgICAgPGxpYi1sb2FkaW5nLXBhZ2UgKm5nSWY9XCJsb2FkaW5nICYmICFpc1N1Ym1pdHRlZFwiPjwvbGliLWxvYWRpbmctcGFnZT57e2RyYWZ0TGFiZWx9fVxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBtYXQtYnV0dG9uIGNsYXNzPVwicmVnaXN0ZXItYnV0dG9uIGxpdmUtYnV0dG9uXCIgdHlwZT1cInN1Ym1pdFwiIChjbGljayk9XCJvblN1Ym1pdCh0cnVlKVwiPlxuICAgICAgICAgIDxsaWItbG9hZGluZy1wYWdlICpuZ0lmPVwibG9hZGluZyAmJiBpc1N1Ym1pdHRlZFwiPjwvbGliLWxvYWRpbmctcGFnZT5cbiAgICAgICAgICB7e2xpdmVMYWJlbH19XG4gICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgIDxidXR0b24gW2Rpc2FibGVkXT1cImN1cnJlbnRDYW5jZWxlZEluZGV4IDwgMCB8fCBoaXN0b3JpY3MubGVuZ3RoPT09MFwiIG1hdC1idXR0b25cbiAgICAgICAgICBjbGFzcz1cInJlZ2lzdGVyLWJ1dHRvbiBsaXZlLWJ1dHRvbiBmb3J3YXJkXCIgdHlwZT1cInN1Ym1pdFwiIChjbGljayk9XCJvbkNhbmNlbCh0cnVlKVwiPlxuICAgICAgICAgIDxtYXQtaWNvbj5yb3RhdGVfbGVmdDwvbWF0LWljb24+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIFtkaXNhYmxlZF09XCJjdXJyZW50Q2FuY2VsZWRJbmRleD09PWhpc3Rvcmljcy5sZW5ndGgtMSB8fCBjdXJyZW50Q2FuY2VsZWRJbmRleD09PW51bGxcIiBtYXQtYnV0dG9uXG4gICAgICAgICAgY2xhc3M9XCJyZWdpc3Rlci1idXR0b24gbGl2ZS1idXR0b24gZm9yd2FyZFwiIHR5cGU9XCJzdWJtaXRcIiAoY2xpY2spPVwib25DYW5jZWwoZmFsc2UpXCI+XG4gICAgICAgICAgPG1hdC1pY29uPnJvdGF0ZV9yaWdodDwvbWF0LWljb24+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImNyZWF0ZS1wcm9maWxlLW1lbnVzXCI+XG4gICAgICA8dWw+XG4gICAgICAgIDxsaSBjbGFzcz1cImxpLXRpdGxlXCIgW2NsYXNzXT1cImVkaXRJbmRleCA9PT0gaSA/ICdhY3RpdmUnIDogJydcIiAqbmdGb3I9XCJsZXQgY2F0IG9mIGNhdGVnb3JpZXM7IGxldCBpID0gaW5kZXhcIlxuICAgICAgICAgIChjbGljayk9XCJzY3JvbGxUbyhjYXQsIGkpXCIgW2lkXT1cImNhdC5uYW1lKyd4J1wiPlxuICAgICAgICAgIDwhLS0gKGNsaWNrKT1cIm9uQWN0aXZlTWVudShjYXQsIGksdHJ1ZSlcIiBbbmd4U2Nyb2xsVG9dPVwiJyMnICsgY2F0Lm5hbWVcIiBbaWRdPVwiY2F0Lm5hbWUrJ3gnXCI+IC0tPlxuICAgICAgICAgIHt7IGNhdC5uYW1lIH19XG4gICAgICAgIDwvbGk+XG4gICAgICAgIDxsaT5cbiAgICAgICAgICA8YnV0dG9uIG1hdC1taW5pLWZhYiBjb2xvcj1cInRyYW5zcGFyZW50XCIgKGNsaWNrKT1cIm9uQWRkTmV3Q2F0ZWdvcnkoJGV2ZW50KVwiPlxuICAgICAgICAgICAgPG1hdC1pY29uPmFkZDwvbWF0LWljb24+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvbGk+XG4gICAgICA8L3VsPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbiAgPGZvcm0gW2Zvcm1Hcm91cF09XCJmb3JtXCI+XG4gICAgPGRpdiBjbGFzcz1cImNhdGVnb3J5XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiZmllbGRzXCIgY2RrRHJvcExpc3RHcm91cD5cbiAgICAgICAgPGRpdiBjbGFzcz1cImZpZWxkcy1pbm5lciBleGFtcGxlLWxpc3QgbXQtMTBcIiBpZD1cImNhdGVnb3JpZXMtaWRcIiAjcGFyZW50TGlzdD1cImNka0Ryb3BMaXN0XCIgY2RrRHJvcExpc3RcbiAgICAgICAgICBbY2RrRHJvcExpc3REYXRhXT1cImNhdGVnb3JpZXNcIiAoY2RrRHJvcExpc3REcm9wcGVkKT1cImRyb3AoJGV2ZW50KVwiIChzY3JvbGwpPVwib25TY3JvbGwoJGV2ZW50KVwiPlxuICAgICAgICAgIDxzZWN0aW9uIGNsYXNzPVwiY2F0ZWdvcnktaXRlbSBzZWN0aW9uLWl0ZW1cIiAqbmdGb3I9XCJsZXQgY2F0ZWdvcnkgb2YgY2F0ZWdvcmllczsgbGV0IGkgPSBpbmRleFwiIGNka0RyYWdcbiAgICAgICAgICAgIFtpZF09XCJjYXRlZ29yeS5uYW1lXCIgW3N0eWxlLnBhZGRpbmdCb3R0b21dPVwiY2F0ZWdvcnkuZXhwYW5kTW9yZSA/ICc1MHB4JyA6ICcxMHB4J1wiXG4gICAgICAgICAgICBbY2xhc3NdPVwiZWRpdEluZGV4ID09PSBpID8gJ2FjdGl2ZScgOiAnJ1wiIChjbGljayk9XCJzY3JvbGxUbyhjYXRlZ29yeSwgaSlcIj5cbiAgICAgICAgICAgIDwhLS0gW2NsYXNzXT1cImVkaXRJbmRleCA9PT0gaSA/ICdhY3RpdmUnIDogJydcIiBbbmd4U2Nyb2xsVG9dPVwiJyMnICsgY2F0ZWdvcnkubmFtZVwiPiAtLT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsZWZ0LWFjdGlvbiBtb3ZlLWljb25zXCIgY2RrRHJhZ0hhbmRsZT5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInRyYW5zcGFyZW50LWJ1dHRvblwiIG1hdC1yYWlzZWQtYnV0dG9uXG4gICAgICAgICAgICAgICAgKGNsaWNrKT1cIiRldmVudC5wcmV2ZW50RGVmYXVsdCgpOyRldmVudC5zdG9wUHJvcGFnYXRpb24oKVwiPlxuICAgICAgICAgICAgICAgIDxtYXQtaWNvbiBjbGFzcz1cImRyYWctaWNvblwiPmRyYWdfaW5kaWNhdG9yPC9tYXQtaWNvbj5cbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZC1jb250ZW50XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZC1pdGVtXCI+XG4gICAgICAgICAgICAgICAgPCEtLSA8ZGl2IGNsYXNzPVwiZmllbGQtaXRlbVwiIChjbGljayk9XCIgb25FeHBlbmRNb3JlKHsgZXZlbnQ6ICRldmVudCwgZmllbGQ6IGNhdGVnb3J5IH0sIGkpXCI+IC0tPlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImZ1bGwtd2lkdGggaW5wdXQtY2F0ZWdvcnktbmFtZVwiPlxuICAgICAgICAgICAgICAgICAgICB7eyBjYXRlZ29yeS5uYW1lIH19XG4gICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInN1Yi1jYXRlZ29yeS1uYW1lXCI+XG4gICAgICAgICAgICAgICAgICAgIHt7bG9jYWxlPy5DQVRFR09SWV9TVUJUSVRMRX19IHt7IGNhdE5hbWVTdGFydChjYXRlZ29yeS5uYW1lKSA/IFwibCdcIiArXG4gICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5Lm5hbWUgOiBjYXRlZ29yeS5uYW1lIH19XG4gICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBtYXQtbWluaS1mYWIgY29sb3I9XCJwcmltYXJ5XCIgY2xhc3M9XCJleHBhbmQtYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgIChjbGljayk9XCIkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7b25FeHBlbmRNb3JlKHsgZXZlbnQ6ICRldmVudCwgZmllbGQ6IGNhdGVnb3J5IH0sIGkpXCI+XG4gICAgICAgICAgICAgICAgICA8bWF0LWljb24gKm5nSWY9XCIhY2F0ZWdvcnkuZXhwYW5kTW9yZVwiPmNoZXZyb25fcmlnaHQ8L21hdC1pY29uPlxuICAgICAgICAgICAgICAgICAgPG1hdC1pY29uICpuZ0lmPVwiY2F0ZWdvcnkuZXhwYW5kTW9yZVwiPmV4cGFuZF9tb3JlPC9tYXQtaWNvbj5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgI2NoaWxkTGlzdD1cImNka0Ryb3BMaXN0XCIgY2xhc3M9XCJjaGlsZC1saXN0XCIgKm5nSWY9XCJjYXRlZ29yeS5mb3Jtc1wiIFtjZGtEcm9wTGlzdERhdGFdPVwiY2F0ZWdvcnkuZm9ybXNcIlxuICAgICAgICAgICAgICAgIGNka0Ryb3BMaXN0IChjZGtEcm9wTGlzdERyb3BwZWQpPVwiZHJvcCgkZXZlbnQpXCI+XG4gICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImNhdGVnb3J5LmV4cGFuZE1vcmVcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZC1ib3hcIiAqbmdGb3I9XCJsZXQgZmllbGQgb2YgY2F0ZWdvcnkuZm9ybXM7IGxldCBqID0gaW5kZXhcIiBbaWRdPVwiZmllbGQua2V5XCJcbiAgICAgICAgICAgICAgICAgICAgW3N0eWxlLndpZHRoXT1cImZpZWxkLmZvcm1zICYmIGZpZWxkLmZvcm1zLmxlbmd0aD4wID8gJzEwMCUnIDogZmllbGRXaWR0aChmaWVsZC50eXBlLGNhdGVnb3J5LmZvcm1zLmxlbmd0aCxqKVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNka0RyYWc+XG5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiIGZpZWxkcy1jb250ZW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtjbGFzc109XCJmaWVsZC5mb3JtcyAmJiBmaWVsZC5mb3Jtcy5sZW5ndGg+MCA/ICdzdWItY2F0ZWdvcnktZm9ybXMnIDonJ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJ1dHRvbi1hY3Rpb25cIiAqbmdJZj1cImZpZWxkLmZvcm1zXCI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInRyYW5zcGFyZW50LWJ1dHRvblwiIG1hdC1yYWlzZWQtYnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cIiRldmVudC5zdG9wUHJvcGFnYXRpb24oKTskZXZlbnQucHJldmVudERlZmF1bHQoKVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxtYXQtaWNvbiBjbGFzcz1cImRyYWctaWNvblwiPmRyYWdfaW5kaWNhdG9yPC9tYXQtaWNvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZHMtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdWItaGVhZGVyXCIgKm5nSWY9XCJmaWVsZC5mb3Jtc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZC1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImZ1bGwtd2lkdGggaW5wdXQtY2F0ZWdvcnktbmFtZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IGZpZWxkLmxhYmVsIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJzdWItY2F0ZWdvcnktbmFtZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7bG9jYWxlPy5DQVRFR09SWV9TVUJUSVRMRX19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgY2F0TmFtZVN0YXJ0KGZpZWxkLmxhYmVsKSA/IFwibCdcIiArIGZpZWxkLmxhYmVsIDogZmllbGQubGFiZWwgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwidHJhbnNwYXJlbnQtYnV0dG9uIHNldHRpbmdcIiBtYXQtcmFpc2VkLWJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwiJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO29uRWRpdEJsb2NrKGZpZWxkLCBpLCBqKVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bWF0LWljb24gY2xhc3M9XCJzZXR0aW5nLWljb25cIj5zZXR0aW5nczwvbWF0LWljb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJleHBhbmQtYnV0dG9uXCIgW2Rpc2FibGVkXT1cIiEoZmllbGQuZm9ybXMgJiYgZmllbGQuZm9ybXMubGVuZ3RoID4gMClcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbc3R5bGUub3BhY2l0eV09XCJmaWVsZC5mb3JtcyAmJiBmaWVsZC5mb3Jtcy5sZW5ndGggPiAwID8gMSA6IDBcIiBtYXQtbWluaS1mYWJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cIiRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtvbkV4cGVuZE1vcmUoeyBldmVudDogJGV2ZW50LCBmaWVsZDogZmllbGQgfSwgaSwgailcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG1hdC1pY29uICpuZ0lmPVwiIWZpZWxkLmV4cGFuZE1vcmVcIj5leHBhbmRfbGVzcyA8L21hdC1pY29uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bWF0LWljb24gKm5nSWY9XCJmaWVsZC5leHBhbmRNb3JlXCI+ZXhwYW5kX21vcmUgPC9tYXQtaWNvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpYi1zdWItY2F0ZWdvcnkgW2ZpZWxkXT1cImZpZWxkXCIgW2xlbmd0aF09XCJjYXRlZ29yeT8uZm9ybXM/Lmxlbmd0aFwiIFtpXT1cImlcIiBbal09XCJqXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbYmxpbmtdPVwiY2hlY2tCbGluayhqLDEpPT09bmV3RmllbGRJbmRleFwiIChvbkNoZWNrVmFsdWUpPVwib25DaGVja1ZhbHVlKCRldmVudClcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChvbkFkZEtleXdvcmRGcm9tSW5wdXQpPVwiYWRkS2V5d29yZEZyb21JbnB1dCgkZXZlbnQuZXZlbnQsICRldmVudC5wcmV2LCBpLCBqKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKG9uS2V5UHJlc3MpPVwib25LZXlQcmVzcygkZXZlbnQuZXZlbnQsIGksIGopXCIgKG9uQWRkTmV3RmllbGQpPVwib25BZGROZXdGaWVsZChpKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKG9uUmVtb3ZlRmllbGQpPVwib25SZW1vdmVGaWVsZChpLCBqKVwiIChvbkNoYW5nZVR5cGUpPVwib25DaGFuZ2VUeXBlKGZpZWxkLnR5cGUsIGksIGopXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAob25SZW1vdmVLZXl3b3JkKT1cInJlbW92ZUtleXdvcmQoJGV2ZW50LmV2ZW50LCBpLCBqKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKG9uQWRkTmV3U3ViTGV2ZWxGaWVsZCk9XCJvbkFkZE5ld1N1YkxldmVsRmllbGQoaSwgailcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChvbkV4cGVuZE1vcmUpPVwib25FeHBlbmRNb3JlKCRldmVudCwgaSwgailcIiAob25DaGFuZ2VMYWJlbCk9XCJvbkNoYW5nZUxhYmVsKCRldmVudCwgaSwgailcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChvbkNoZWNrZWRDaGlwKT1cIm9uQ2hlY2tlZENoaXAoJGV2ZW50LCBpLCBqKVwiIChvbkRyb3ApPVwiZHJvcCgkZXZlbnQpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAob25DaGVja2VkRGVmYXVsdCk9XCJvbkNoZWNrZWREZWZhdWx0KCRldmVudCwgaSwgailcIiAob25FZGl0QmxvY2spPVwib25FZGl0QmxvY2soZmllbGQsIGksIGopXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbY29uZGl0aW9uRGF0YV09XCJjb25kaXRpb25EYXRhXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiAqbmdJZj1cImZpZWxkLmV4cGFuZE1vcmVcIiBjbGFzcz1cImNoaWxkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2ICNjaGlsZExpc3Q9XCJjZGtEcm9wTGlzdFwiIGNsYXNzPVwiY2hpbGQtY29udGVudFwiICpuZ0lmPVwiZmllbGQuZm9ybXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbY2RrRHJvcExpc3REYXRhXT1cImZpZWxkLmZvcm1zXCIgY2RrRHJvcExpc3QgKGNka0Ryb3BMaXN0RHJvcHBlZCk9XCJkcm9wKCRldmVudClcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIlwiIHN0eWxlPVwibWFyZ2luLWJvdHRvbTogMjBweFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKm5nRm9yPVwibGV0IGNoaWxkIG9mIGZpZWxkLmZvcm1zOyBsZXQgayA9IGluZGV4XCIgW2lkXT1cImNoaWxkLmtleVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3N0eWxlLndpZHRoXT1cImNoaWxkLmZvcm1zICYmIGNoaWxkLmZvcm1zLmxlbmd0aD4wID8gJzEwMCUnIDogZmllbGRXaWR0aChjaGlsZC50eXBlLGZpZWxkLmZvcm1zLmxlbmd0aCxrKVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2RrRHJhZz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZHMtY29udGVudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtjbGFzc109XCJjaGlsZC5mb3JtcyAmJiBjaGlsZC5mb3Jtcy5sZW5ndGg+MCA/ICdzdWItY2F0ZWdvcnktZm9ybXMnIDonJ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYnV0dG9uLWFjdGlvbiBjaGlsZC0yLWJhY2tncm91bmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICpuZ0lmPVwiY2hpbGQuZm9ybXMgJiYgY2hpbGQuZm9ybXMubGVuZ3RoPjBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwidHJhbnNwYXJlbnQtYnV0dG9uXCIgbWF0LXJhaXNlZC1idXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjbGljayk9XCIkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7JGV2ZW50LnByZXZlbnREZWZhdWx0KClcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxtYXQtaWNvbiBjbGFzcz1cImRyYWctaWNvblwiPiBkcmFnX2luZGljYXRvcjwvbWF0LWljb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmllbGRzLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdWItaGVhZGVyXCIgKm5nSWY9XCJjaGlsZC5mb3JtcyAmJiBjaGlsZC5mb3Jtcy5sZW5ndGg+MFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpZWxkLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJmdWxsLXdpZHRoIGlucHV0LWNhdGVnb3J5LW5hbWVcIiB0eXBlPVwidGV4dFwiIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbcmVhZG9ubHldPVwiY2F0ZWdvcmllcy5sZW5ndGggPCA0IHx8ICFjYXRlZ29yeS5lZGl0YWJsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbcmVhZG9ubHldPVwiIWNhdGVnb3J5LmVkaXRhYmxlXCIgWyhuZ01vZGVsKV09XCJjaGlsZC5sYWJlbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbbmdNb2RlbE9wdGlvbnNdPVwieyBzdGFuZGFsb25lOiB0cnVlIH1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTYWlzaXIgbGUgbm9tIGRlIGxhIHNvdXMgY2F0w6lnb3JpZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJzdWItY2F0ZWdvcnktbmFtZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3tsb2NhbGU/LkNBVEVHT1JZX1NVQlRJVExFfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IGNhdE5hbWVTdGFydChjaGlsZC5sYWJlbCkgPyBcImwnXCIgKyBjaGlsZC5sYWJlbCA6IGNoaWxkLmxhYmVsIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInRyYW5zcGFyZW50LWJ1dHRvbiBzZXR0aW5nXCIgbWF0LXJhaXNlZC1idXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwiJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO29uRWRpdEJsb2NrKGNoaWxkLCBpLCBqLCBrKVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxtYXQtaWNvbiBjbGFzcz1cInNldHRpbmctaWNvblwiPnNldHRpbmdzPC9tYXQtaWNvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJleHBhbmQtYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbZGlzYWJsZWRdPVwiIShjaGlsZC5mb3JtcyAmJiBjaGlsZC5mb3Jtcy5sZW5ndGggPiAwKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3N0eWxlLm9wYWNpdHldPVwiY2hpbGQuZm9ybXMgJiYgY2hpbGQuZm9ybXMubGVuZ3RoID4gMCA/IDEgOiAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXQtbWluaS1mYWIgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwiJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO29uRXhwZW5kTW9yZSh7IGV2ZW50OiAkZXZlbnQsIGZpZWxkOiBjaGlsZCB9LCBpLCBqLCBrKVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxtYXQtaWNvbiAqbmdJZj1cIiFjaGlsZC5leHBhbmRNb3JlXCI+IGV4cGFuZF9sZXNzIDwvbWF0LWljb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG1hdC1pY29uICpuZ0lmPVwiY2hpbGQuZXhwYW5kTW9yZVwiPiBleHBhbmRfbW9yZSA8L21hdC1pY29uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaWItc3ViLWNhdGVnb3J5IFtmaWVsZF09XCJjaGlsZFwiIFtsZW5ndGhdPVwiZmllbGQ/LmZvcm1zPy5sZW5ndGhcIiBbaV09XCJqXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtibGlua109XCJjaGVja0JsaW5rKGssMik9PT1uZXdGaWVsZEluZGV4XCIgW2pdPVwia1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAob25DaGVja1ZhbHVlKT1cIm9uQ2hlY2tWYWx1ZSgkZXZlbnQpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChvbkFkZEtleXdvcmRGcm9tSW5wdXQpPVwiYWRkS2V5d29yZEZyb21JbnB1dCgkZXZlbnQuZXZlbnQsICRldmVudC5wcmV2LCBpLCBqLCBrKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAob25LZXlQcmVzcyk9XCJvbktleVByZXNzKCRldmVudC5ldmVudCwgaSwgaiwgaylcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKG9uQWRkTmV3RmllbGQpPVwib25BZGROZXdGaWVsZChpLCBqKVwiIChvblJlbW92ZUZpZWxkKT1cIm9uUmVtb3ZlRmllbGQoaSwgaiwgaylcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKG9uQ2hhbmdlVHlwZSk9XCJvbkNoYW5nZVR5cGUoY2hpbGQudHlwZSwgaSwgaiwgaylcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKG9uUmVtb3ZlS2V5d29yZCk9XCJyZW1vdmVLZXl3b3JkKCRldmVudC5ldmVudCwgaSwgaiwgaylcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKG9uQWRkTmV3U3ViTGV2ZWxGaWVsZCk9XCJvbkFkZE5ld1N1YkxldmVsRmllbGQoaSwgaiwgaylcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKG9uRXhwZW5kTW9yZSk9XCJvbkV4cGVuZE1vcmUoJGV2ZW50LCBpLCBqLCBrKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAob25DaGFuZ2VMYWJlbCk9XCJvbkNoYW5nZUxhYmVsKCRldmVudCwgaSwgaiwgaylcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKG9uQ2hlY2tlZENoaXApPVwib25DaGVja2VkQ2hpcCgkZXZlbnQsIGksIGosIGspXCIgKG9uRHJvcCk9XCJkcm9wKCRldmVudClcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKG9uQ2hlY2tlZERlZmF1bHQpPVwib25DaGVja2VkRGVmYXVsdCgkZXZlbnQsIGksIGosIGspXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtjb25kaXRpb25EYXRhXT1cImNvbmRpdGlvbkRhdGFcIiAob25FZGl0QmxvY2spPVwib25FZGl0QmxvY2soY2hpbGQsIGksIGosIGspXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2ICpuZ0lmPVwiY2hpbGQuZXhwYW5kTW9yZVwiIGNsYXNzPVwiY2hpbGRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNoaWxkLWNvbnRlbnRcIiAjY2hpbGRMaXN0PVwiY2RrRHJvcExpc3RcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICpuZ0lmPVwiY2hpbGQuZm9ybXMgJiYgY2hpbGQuZm9ybXMubGVuZ3RoPjBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtjZGtEcm9wTGlzdERhdGFdPVwiY2hpbGQuZm9ybXNcIiBjZGtEcm9wTGlzdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjZGtEcm9wTGlzdERyb3BwZWQpPVwiZHJvcCgkZXZlbnQpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIlwiICpuZ0Zvcj1cImxldCBjMiBvZiBjaGlsZC5mb3JtczsgbGV0IGwgPSBpbmRleFwiIFtpZF09XCJjMi5rZXlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3N0eWxlLndpZHRoXT1cImMyLmZvcm1zICYmIGMyLmZvcm1zLmxlbmd0aD4wID8gJzEwMCUnIDogZmllbGRXaWR0aChjMi50eXBlLGNoaWxkLmZvcm1zLmxlbmd0aCxsKVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjZGtEcmFnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmllbGRzLWNvbnRlbnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtjbGFzc109XCJjMi5mb3JtcyAmJiBjMi5mb3Jtcy5sZW5ndGg+MCA/ICdzdWItY2F0ZWdvcnktZm9ybXMnIDonJ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJidXR0b24tYWN0aW9uIGNoaWxkLTMtYmFja2dyb3VuZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqbmdJZj1cImMyLmZvcm1zICYmIGMyLmZvcm1zLmxlbmd0aD4wXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwidHJhbnNwYXJlbnQtYnV0dG9uXCIgbWF0LXJhaXNlZC1idXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cIiRldmVudC5zdG9wUHJvcGFnYXRpb24oKVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bWF0LWljb24gY2xhc3M9XCJkcmFnLWljb25cIj4gZHJhZ19pbmRpY2F0b3IgPC9tYXQtaWNvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZHMtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGliLXN1Yi1jYXRlZ29yeSBbZmllbGRdPVwiYzJcIiBbbGVuZ3RoXT1cImNoaWxkPy5mb3Jtcz8ubGVuZ3RoXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2JsaW5rXT1cImNoZWNrQmxpbmsobCwzKT09PW5ld0ZpZWxkSW5kZXhcIiBbaV09XCJrXCIgW2pdPVwibFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChvbkNoZWNrVmFsdWUpPVwib25DaGVja1ZhbHVlKCRldmVudClcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAob25BZGRLZXl3b3JkRnJvbUlucHV0KT1cImFkZEtleXdvcmRGcm9tSW5wdXQoJGV2ZW50LmV2ZW50LCAkZXZlbnQucHJldiwgaSwgaiwgaywgbClcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAob25LZXlQcmVzcyk9XCJvbktleVByZXNzKCRldmVudC5ldmVudCwgaSwgaiwgaywgbClcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAob25BZGROZXdGaWVsZCk9XCJvbkFkZE5ld0ZpZWxkKGksIGosIGspXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKG9uUmVtb3ZlRmllbGQpPVwib25SZW1vdmVGaWVsZChpLCBqLCBrLCBsKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChvbkNoYW5nZVR5cGUpPVwib25DaGFuZ2VUeXBlKGMyLnR5cGUsIGksIGosIGssIGwpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKG9uUmVtb3ZlS2V5d29yZCk9XCJyZW1vdmVLZXl3b3JkKCRldmVudC5ldmVudCwgaSwgaiwgaywgbClcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAob25BZGROZXdTdWJMZXZlbEZpZWxkKT1cIm9uQWRkTmV3U3ViTGV2ZWxGaWVsZChpLCBqLCBrLCBsKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChvbkV4cGVuZE1vcmUpPVwib25FeHBlbmRNb3JlKCRldmVudCwgaSwgaiwgaywgbClcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAob25DaGFuZ2VMYWJlbCk9XCJvbkNoYW5nZUxhYmVsKCRldmVudCwgaSwgaiwgaywgbClcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAob25DaGVja2VkQ2hpcCk9XCJvbkNoZWNrZWRDaGlwKCRldmVudCwgaSwgaiwgaywgbClcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAob25Ecm9wKT1cImRyb3AoJGV2ZW50KVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChvbkNoZWNrZWREZWZhdWx0KT1cIm9uQ2hlY2tlZERlZmF1bHQoJGV2ZW50LCBpLCBqLCBrLCBsKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChvbkVkaXRCbG9jayk9XCJvbkVkaXRCbG9jayhjMiwgaSwgaiwgaywgbClcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbY29uZGl0aW9uRGF0YV09XCJjb25kaXRpb25EYXRhXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjaGlsZFwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saWItc3ViLWNhdGVnb3J5PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFkZC1idXR0b24tc3ViLWNhdGVnb3J5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJjaGlsZD8uZm9ybXM/Lmxlbmd0aCAtIDEgPT09IGxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBzdHlsZT1cIm1hcmdpbjogMTBweCBhdXRvXCIgbWF0LXJhaXNlZC1idXR0b24gY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwiJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO29uQWRkTmV3RmllbGQoaSwgaiwgaylcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57e2xvY2FsZT8uQUREX0ZJRUxEfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG1hdC1pY29uPiBhZGQgPC9tYXQtaWNvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpYi1zdWItY2F0ZWdvcnk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFkZC1idXR0b24tc3ViLWNhdGVnb3J5XCIgKm5nSWY9XCJmaWVsZD8uZm9ybXM/Lmxlbmd0aCAtIDEgPT09IGtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gc3R5bGU9XCJtYXJnaW46IDEwcHggYXV0b1wiIG1hdC1yYWlzZWQtYnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjbGljayk9XCIkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7b25BZGROZXdGaWVsZChpLCBqKVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57e2xvY2FsZT8uQUREX0ZJRUxEfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxtYXQtaWNvbj5hZGQ8L21hdC1pY29uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGliLXN1Yi1jYXRlZ29yeT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFkZC1idXR0b24tY29udGFpbmVyIGFkZC1idXR0b24tc3ViLWNhdGVnb3J5XCIgKm5nSWY9XCJjYXRlZ29yeT8uZm9ybXM/Lmxlbmd0aCAtIDEgPT09IGpcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHN0eWxlPVwibWFyZ2luOiAxMHB4IGF1dG87IHBhZGRpbmc6MTBweCAwXCIgY2xhc3M9XCJhZGQtYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtkaXNhYmxlZF09XCJjYXRlZ29yeT8uZm9ybXM/Lmxlbmd0aCAtIDEgIT09IGpcIlxuICAgICAgICAgICAgICAgICAgICAgICAgW3N0eWxlLm9wYWNpdHldPVwiY2F0ZWdvcnk/LmZvcm1zPy5sZW5ndGggLSAxID09PSBqID8gMSA6IDBcIiBtYXQtcmFpc2VkLWJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cIiRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtvbkFkZE5ld0ZpZWxkKGkpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57e2xvY2FsZT8uQUREX0ZJRUxEfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bWF0LWljb24+YWRkPC9tYXQtaWNvbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L3NlY3Rpb24+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiYWRkLWJ1dHRvbi1jb250YWluZXIgYWRkLWNhdGVnb3J5LWJ1dHRvbiBhZGQtc3RlcFwiPlxuICAgICAgICAgICAgPGJ1dHRvbiAoY2xpY2spPVwib25BZGROZXdDYXRlZ29yeSgkZXZlbnQpXCI+XG4gICAgICAgICAgICAgIHt7bG9jYWxlPy5BRERfU1RFUH19XG4gICAgICAgICAgICAgIDxtYXQtaWNvbj5hZGQ8L21hdC1pY29uPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPHNlY3Rpb24gc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudFwiPlxuICAgICAgICAgICAgPGRpdiBzdHlsZT1cImhlaWdodDogNDAwcHg7XCI+PC9kaXY+XG4gICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImZpZWxkLXByb3BlcnR5XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJwcm9wZXJ0eS1jb250ZW50XCIgKm5nSWY9XCJpc0Jsb2NrICYmIGN1cnJlbnRFZGl0QmxvY2tcIj5cbiAgICAgICAgICA8aDM+e3tsb2NhbGU/LlNFVFRJTkdfT0ZfQkxPQ0t9fSB7eyBjdXJyZW50RWRpdEJsb2NrLmxhYmVsIH19PC9oMz5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJvcGVydHktY29udGVudC1pbm5lclwiIHN0eWxlPVwid2lkdGg6IDEwMCU7XCI+XG4gICAgICAgICAgICA8bWF0LWZvcm0tZmllbGQgY2xhc3M9XCJmb3JtLWZpZWxkIG1hdC1zZWxlY3QgZnVsbC13aWR0aFwiIHN0eWxlPVwiY3Vyc29yOiBwb2ludGVyXCIgYXBwZWFyYW5jZT1cIm91dGxpbmVcIj5cbiAgICAgICAgICAgICAgPG1hdC1sYWJlbD57e2xvY2FsZT8uVFlQRV9PRl9CTE9DS319PC9tYXQtbGFiZWw+XG4gICAgICAgICAgICAgIDxtYXQtc2VsZWN0IChjbGljayk9XCJvbk9wZW5UeXBlRGlhbG9nKGN1cnJlbnRFZGl0QmxvY2spXCIgZGlzYWJsZWQ9XCJ0cnVlXCIgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICBbKG5nTW9kZWwpXT1cImN1cnJlbnRFZGl0QmxvY2sudHlwZVwiIChuZ01vZGVsQ2hhbmdlKT1cIm9uQ2hhbmdlVHlwZUJsb2NrKGN1cnJlbnRFZGl0QmxvY2spXCJcbiAgICAgICAgICAgICAgICBbbmdNb2RlbE9wdGlvbnNdPVwieyBzdGFuZGFsb25lOiB0cnVlIH1cIiBjbGFzcz1cInNlbGVjdC10eXBlLWNsYXNzXCI+XG4gICAgICAgICAgICAgICAgPG1hdC1vcHRpb24gdmFsdWU9XCJ0ZXh0XCI+VGV4dCg4MCk8L21hdC1vcHRpb24+XG4gICAgICAgICAgICAgICAgPG1hdC1vcHRpb24gdmFsdWU9XCJ0ZXh0YXJlYVwiPlRleHQoODArKTwvbWF0LW9wdGlvbj5cbiAgICAgICAgICAgICAgICA8bWF0LW9wdGlvbiB2YWx1ZT1cInJhZGlvXCI+UmFkaW88L21hdC1vcHRpb24+XG4gICAgICAgICAgICAgICAgPG1hdC1vcHRpb24gdmFsdWU9XCJzZWxlY3RcIj5TZWxlY3RvcjwvbWF0LW9wdGlvbj5cbiAgICAgICAgICAgICAgICA8bWF0LW9wdGlvbiB2YWx1ZT1cInRvZ2dsZVwiPlRvZ2dsZTwvbWF0LW9wdGlvbj5cbiAgICAgICAgICAgICAgICA8bWF0LW9wdGlvbiB2YWx1ZT1cImNoZWNrYm94XCI+Q2hlY2tib3g8L21hdC1vcHRpb24+XG4gICAgICAgICAgICAgICAgPG1hdC1vcHRpb24gdmFsdWU9XCJjaGVja2JveF9tdWx0aXBsZVwiPkNoZWNrYm94IG11bHRpcGxlPC9tYXQtb3B0aW9uPlxuICAgICAgICAgICAgICAgIDxtYXQtb3B0aW9uIHZhbHVlPVwiZW1haWxcIj5FbWFpbDwvbWF0LW9wdGlvbj5cbiAgICAgICAgICAgICAgICA8bWF0LW9wdGlvbiB2YWx1ZT1cInBhc3N3b3JkXCI+UGFzc3dvcmQ8L21hdC1vcHRpb24+XG4gICAgICAgICAgICAgICAgPG1hdC1vcHRpb24gdmFsdWU9XCJkYXRlXCI+RGF0ZTwvbWF0LW9wdGlvbj5cbiAgICAgICAgICAgICAgICA8bWF0LW9wdGlvbiB2YWx1ZT1cInRlbFwiPlBob25lPC9tYXQtb3B0aW9uPlxuICAgICAgICAgICAgICAgIDxtYXQtb3B0aW9uIHZhbHVlPVwibm9uZVwiPk5vbmU8L21hdC1vcHRpb24+XG4gICAgICAgICAgICAgIDwvbWF0LXNlbGVjdD5cbiAgICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XG4gICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiY3VycmVudEVkaXRCbG9jay50eXBlIT09J25vbmUnXCI+XG4gICAgICAgICAgICAgIDxtYXQtZm9ybS1maWVsZCBjbGFzcz1cImZvcm0tZmllbGQgZnVsbC13aWR0aFwiIGFwcGVhcmFuY2U9XCJvdXRsaW5lXCI+XG4gICAgICAgICAgICAgICAgPG1hdC1sYWJlbD57e2xvY2FsZT8uTkFNRV9MQUJFTH19PC9tYXQtbGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgWyhuZ01vZGVsKV09XCJjdXJyZW50RWRpdEJsb2NrLmxhYmVsXCIgW25nTW9kZWxPcHRpb25zXT1cInsgc3RhbmRhbG9uZTogdHJ1ZSB9XCIgbWF0SW5wdXRcbiAgICAgICAgICAgICAgICAgIHJlcXVpcmVkIHBsYWNlaG9sZGVyPVwiXCIgLz5cbiAgICAgICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cbiAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciBbbmdTd2l0Y2hdPVwiY3VycmVudEVkaXRCbG9jay50eXBlXCI+XG4gICAgICAgICAgICAgICAgPGRpdiAqbmdTd2l0Y2hDYXNlPVwiJ3RvZ2dsZSdcIiBjbGFzcz1cImZsZXgtYXV0b1wiXG4gICAgICAgICAgICAgICAgICBzdHlsZT1cImRpc3BsYXk6IGZsZXg7YWxpZ24taXRlbXM6IGZsZXgtZW5kO21hcmdpbjogMTBweCAwO1wiPlxuICAgICAgICAgICAgICAgICAgPG1hdC1zbGlkZS10b2dnbGUgY2xhc3M9XCJmb3JtLWZpZWxkXCIgY29sb3I9XCIjNkZFOEQ3XCIgWyhuZ01vZGVsKV09XCJjdXJyZW50RWRpdEJsb2NrLmRlZmF1bHRWYWx1ZVwiXG4gICAgICAgICAgICAgICAgICAgIFtuZ01vZGVsT3B0aW9uc109XCJ7IHN0YW5kYWxvbmU6IHRydWUgfVwiPlxuICAgICAgICAgICAgICAgICAgPC9tYXQtc2xpZGUtdG9nZ2xlPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9XCJtYXJnaW4tbGVmdDogMTBweDtcIj57e2xvY2FsZT8uREVGQVVMVF9WQUxVRX19PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgKm5nU3dpdGNoQ2FzZT1cIidjaGVja2JveCdcIiBjbGFzcz1cImZsZXgtYXV0b1wiPlxuICAgICAgICAgICAgICAgICAgPG1hdC1jaGVja2JveCBjbGFzcz1cImZvcm0tZmllbGRcIiBbKG5nTW9kZWwpXT1cImN1cnJlbnRFZGl0QmxvY2sudmFsdWVcIlxuICAgICAgICAgICAgICAgICAgICBbbmdNb2RlbE9wdGlvbnNdPVwieyBzdGFuZGFsb25lOiB0cnVlIH1cIj5cbiAgICAgICAgICAgICAgICAgICAge3tsb2NhbGU/LkRFRkFVTFRfQ0hFQ0tFRH19XG4gICAgICAgICAgICAgICAgICA8L21hdC1jaGVja2JveD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8bWF0LWZvcm0tZmllbGQgKm5nU3dpdGNoQ2FzZT1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbJ3NlbGVjdCcsICdyYWRpbycsICdjaGVja2JveF9tdWx0aXBsZSddLmluY2x1ZGVzKGN1cnJlbnRFZGl0QmxvY2sudHlwZSkgPyBjdXJyZW50RWRpdEJsb2NrLnR5cGUgOiAhY3VycmVudEVkaXRCbG9jay50eXBlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiBjbGFzcz1cImZsZXgtYXV0byBmdWxsLXdpZHRoXCIgYXBwZWFyYW5jZT1cIm91dGxpbmVcIj5cbiAgICAgICAgICAgICAgICAgIDxtYXQtbGFiZWw+IHt7bG9jYWxlPy5ERUZBVUxUX1ZBTFVFfX0gPC9tYXQtbGFiZWw+XG4gICAgICAgICAgICAgICAgICA8bWF0LWNoaXAtbGlzdCAjY2hpbGRMaXN0PVwiY2RrRHJvcExpc3RcIiBbY2RrRHJvcExpc3REYXRhXT1cImN1cnJlbnRFZGl0QmxvY2suZGVmYXVsdFZhbHVlXCIgY2RrRHJvcExpc3RcbiAgICAgICAgICAgICAgICAgICAgKGNka0Ryb3BMaXN0RHJvcHBlZCk9XCJkcm9wKCRldmVudClcIiAjY2hpcExpc3QgYXJpYS1sYWJlbD1cIlZpZGVvIGtleXdvcmRzOyBsZXQgaW5kZXg9aW5kZXhcIiBtdWx0aXBsZVxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RhYmxlPlxuICAgICAgICAgICAgICAgICAgICA8bWF0LWNoaXAgc3R5bGU9XCJtaW4taGVpZ2h0OiAyNXB4O3dpZHRoOiBhdXRvO1wiICpuZ0Zvcj1cImxldCBvcHRpb24gb2YgY3VycmVudEVkaXRCbG9jay5kZWZhdWx0VmFsdWVcIlxuICAgICAgICAgICAgICAgICAgICAgIFtzZWxlY3RlZF09XCJvcHRpb24uY2hlY2tlZFwiIFt2YWx1ZV09XCJvcHRpb24udmFsdWVcIiBbcmVtb3ZhYmxlXT1cInRydWVcIlxuICAgICAgICAgICAgICAgICAgICAgIChkYmxjbGljayk9XCJvbkNoZWNrZWRDaGlwQmxvY2sob3B0aW9uLCBjdXJyZW50RWRpdEJsb2NrKVwiIChjbGljayk9XCJvbkVkaXRDaGlwKG9wdGlvbilcIlxuICAgICAgICAgICAgICAgICAgICAgIChyZW1vdmVkKT1cInJlbW92ZUtleXdvcmRCbG9jayhvcHRpb24sIGN1cnJlbnRFZGl0QmxvY2spXCIgY2RrRHJhZz5cbiAgICAgICAgICAgICAgICAgICAgICB7eyBvcHRpb24udmFsdWUgfX1cbiAgICAgICAgICAgICAgICAgICAgICA8bWF0LWljb24gbWF0Q2hpcFJlbW92ZT57e2xvY2FsZT8uQ0FOQ0VMfX08L21hdC1pY29uPlxuICAgICAgICAgICAgICAgICAgICA8L21hdC1jaGlwPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgI2NoaXBzSW5wdXQgcGxhY2Vob2xkZXI9XCJhZGQuLi5cIiBbbWF0Q2hpcElucHV0Rm9yXT1cImNoaXBMaXN0XCIgW21hdENoaXBJbnB1dEFkZE9uQmx1cl09XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAobWF0Q2hpcElucHV0VG9rZW5FbmQpPVwiYWRkS2V5d29yZEZyb21JbnB1dEJsb2NrKCRldmVudCwgY3VycmVudEVkaXRCbG9jaywgcHJldlZhbHVlKVwiXG4gICAgICAgICAgICAgICAgICAgICAgW21hdENoaXBJbnB1dFNlcGFyYXRvcktleUNvZGVzXT1cInNlcGFyYXRvcktleXNDb2Rlc1wiXG4gICAgICAgICAgICAgICAgICAgICAgKGtleXVwKT1cIm9uS2V5VXBDaGlwKCRldmVudCwgY3VycmVudEVkaXRCbG9jaylcIiBbKG5nTW9kZWwpXT1cImN1cnJlbnRDaGlwXCJcbiAgICAgICAgICAgICAgICAgICAgICBbbmdNb2RlbE9wdGlvbnNdPVwieyBzdGFuZGFsb25lOiB0cnVlIH1cIiAvPlxuICAgICAgICAgICAgICAgICAgPC9tYXQtY2hpcC1saXN0PlxuICAgICAgICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XG4gICAgICAgICAgICAgICAgPG1hdC1mb3JtLWZpZWxkICpuZ1N3aXRjaENhc2U9XCIndGV4dGFyZWEnXCIgY2xhc3M9XCJmb3JtLWZpZWxkIGZ1bGwtd2lkdGhcIiBhcHBlYXJhbmNlPVwib3V0bGluZVwiPlxuICAgICAgICAgICAgICAgICAgPG1hdC1sYWJlbD57e2xvY2FsZT8uREVGQVVMVF9WQUxVRX19PC9tYXQtbGFiZWw+XG4gICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBtYXRJbnB1dCBbbmdNb2RlbE9wdGlvbnNdPVwieyBzdGFuZGFsb25lOiB0cnVlIH1cIlxuICAgICAgICAgICAgICAgICAgICBbKG5nTW9kZWwpXT1cImN1cnJlbnRFZGl0QmxvY2suZGVmYXVsdFZhbHVlXCIgcGxhY2Vob2xkZXI9XCJEZXNjcmlwdGlvbi4uLlwiIC8+XG4gICAgICAgICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cblxuICAgICAgICAgICAgICAgIDxtYXQtZm9ybS1maWVsZCAqbmdTd2l0Y2hEZWZhdWx0IGNsYXNzPVwiZm9ybS1maWVsZCBmdWxsLXdpZHRoXCJcbiAgICAgICAgICAgICAgICAgIFtzdHlsZS5vcGFjaXR5XT1cImN1cnJlbnRFZGl0QmxvY2sudHlwZSAhPT0gJ3RlbCcgPyAxIDogMFwiIGFwcGVhcmFuY2U9XCJvdXRsaW5lXCI+XG4gICAgICAgICAgICAgICAgICA8bWF0LWxhYmVsPnt7bG9jYWxlPy5ERUZBVUxUX1ZBTFVFfX08L21hdC1sYWJlbD5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dCBbdHlwZV09XCJjdXJyZW50RWRpdEJsb2NrLnR5cGVcIiBbZGlzYWJsZWRdPVwiY3VycmVudEVkaXRCbG9jay50eXBlID09PSAndGVsJ1wiIG1hdElucHV0XG4gICAgICAgICAgICAgICAgICAgIFtuZ01vZGVsT3B0aW9uc109XCJ7IHN0YW5kYWxvbmU6IHRydWUgfVwiIFsobmdNb2RlbCldPVwiY3VycmVudEVkaXRCbG9jay5kZWZhdWx0VmFsdWVcIlxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlwiIC8+XG4gICAgICAgICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cbiAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1hbmRhdG9yeSB0b3AtMTAgYm90dG9tLTEwXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRvb2dsZS1idXR0b25cIj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuPnt7bG9jYWxlPy5SRVFVSVJFRH19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPG1hdC1zbGlkZS10b2dnbGUgY29sb3I9XCIjNkZFOEQ3XCIgWyhuZ01vZGVsKV09XCJjdXJyZW50RWRpdEJsb2NrLmlzTWFuZGF0b3J5XCJcbiAgICAgICAgICAgICAgICAgICAgW25nTW9kZWxPcHRpb25zXT1cInsgc3RhbmRhbG9uZTogdHJ1ZSB9XCI+XG4gICAgICAgICAgICAgICAgICA8L21hdC1zbGlkZS10b2dnbGU+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFuZGF0b3J5IHRvcC0xMFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0b29nbGUtYnV0dG9uXCI+XG4gICAgICAgICAgICAgICAgICA8c3Bhbj57e2xvY2FsZT8uQ09ORElUSU9OQUxfVklTSUJJTElUWX19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPG1hdC1zbGlkZS10b2dnbGUgY29sb3I9XCIjNkZFOEQ3XCIgWyhuZ01vZGVsKV09XCJjdXJyZW50RWRpdEJsb2NrLmlzQ29uZGl0aW9uYWxcIlxuICAgICAgICAgICAgICAgICAgICBbbmdNb2RlbE9wdGlvbnNdPVwieyBzdGFuZGFsb25lOiB0cnVlIH1cIj5cbiAgICAgICAgICAgICAgICAgIDwvbWF0LXNsaWRlLXRvZ2dsZT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJjdXJyZW50RWRpdEJsb2NrPy5pc0NvbmRpdGlvbmFsXCI+XG4gICAgICAgICAgICAgICAgPG1hdC1mb3JtLWZpZWxkIGNsYXNzPVwiZm9ybS1maWVsZCBtYXQtc2VsZWN0IGZ1bGwtd2lkdGhcIiBhcHBlYXJhbmNlPVwib3V0bGluZVwiPlxuICAgICAgICAgICAgICAgICAgPG1hdC1sYWJlbD57e2xvY2FsZT8uU0VMRUNUX0NBVEVHT1JZfX08L21hdC1sYWJlbD5cbiAgICAgICAgICAgICAgICAgIDxtYXQtc2VsZWN0IFsobmdNb2RlbCldPVwiYWxsXCIgW25nTW9kZWxPcHRpb25zXT1cInsgc3RhbmRhbG9uZTogdHJ1ZSB9XCJcbiAgICAgICAgICAgICAgICAgICAgKHNlbGVjdGlvbkNoYW5nZSk9XCJvblNlbGVjdENvbmRpdGlvbignYWxsJywnczEnLCAkZXZlbnQudmFsdWUpXCI+XG4gICAgICAgICAgICAgICAgICAgIDxtYXQtb3B0aW9uICpuZ0Zvcj1cImxldCBpdGVtIG9mIGNvbmRpdGlvbkRhdGEuYWxsXCIgW3ZhbHVlXT1cIml0ZW0ua2V5XCI+e3tcbiAgICAgICAgICAgICAgICAgICAgICBpdGVtLmxhYmVsIH19XG4gICAgICAgICAgICAgICAgICAgIDwvbWF0LW9wdGlvbj5cbiAgICAgICAgICAgICAgICAgIDwvbWF0LXNlbGVjdD5cbiAgICAgICAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxuICAgICAgICAgICAgICAgIDxtYXQtZm9ybS1maWVsZCAqbmdJZj1cImNvbmRpdGlvbkRhdGEuczE/Lmxlbmd0aCA+IDBcIiBjbGFzcz1cImZvcm0tZmllbGQgbWF0LXNlbGVjdCBmdWxsLXdpZHRoXCJcbiAgICAgICAgICAgICAgICAgIGFwcGVhcmFuY2U9XCJvdXRsaW5lXCI+XG4gICAgICAgICAgICAgICAgICA8bWF0LWxhYmVsPnt7bG9jYWxlPy5TRUxFQ1RfU1VCX0NBVEVHT1JZfX0gKHMxKTwvbWF0LWxhYmVsPlxuICAgICAgICAgICAgICAgICAgPG1hdC1zZWxlY3QgWyhuZ01vZGVsKV09XCJzMVwiIFtuZ01vZGVsT3B0aW9uc109XCJ7IHN0YW5kYWxvbmU6IHRydWUgfVwiXG4gICAgICAgICAgICAgICAgICAgIChzZWxlY3Rpb25DaGFuZ2UpPVwib25TZWxlY3RDb25kaXRpb24oJ3MxJywnczInLCAkZXZlbnQudmFsdWUpXCI+XG4gICAgICAgICAgICAgICAgICAgIDxtYXQtb3B0aW9uICpuZ0Zvcj1cImxldCBpdGVtIG9mIGNvbmRpdGlvbkRhdGEuczFcIiBbdmFsdWVdPVwiaXRlbS5rZXlcIj57e1xuICAgICAgICAgICAgICAgICAgICAgIGl0ZW0ubGFiZWwgfX1cbiAgICAgICAgICAgICAgICAgICAgPC9tYXQtb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgPC9tYXQtc2VsZWN0PlxuICAgICAgICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XG4gICAgICAgICAgICAgICAgPG1hdC1mb3JtLWZpZWxkIGNsYXNzPVwiZm9ybS1maWVsZCBtYXQtc2VsZWN0IGZ1bGwtd2lkdGhcIiAqbmdJZj1cImNvbmRpdGlvbkRhdGEuczI/Lmxlbmd0aD4wXCJcbiAgICAgICAgICAgICAgICAgIGFwcGVhcmFuY2U9XCJvdXRsaW5lXCI+XG4gICAgICAgICAgICAgICAgICA8bWF0LWxhYmVsPnt7bG9jYWxlPy5TRUxFQ1RfU1VCX0NBVEVHT1JZfX0gKHMyKTwvbWF0LWxhYmVsPlxuICAgICAgICAgICAgICAgICAgPG1hdC1zZWxlY3QgWyhuZ01vZGVsKV09XCJzMlwiIFtuZ01vZGVsT3B0aW9uc109XCJ7IHN0YW5kYWxvbmU6IHRydWUgfVwiXG4gICAgICAgICAgICAgICAgICAgIChzZWxlY3Rpb25DaGFuZ2UpPVwib25TZWxlY3RDb25kaXRpb24oJ3MyJywnczMnLCAkZXZlbnQudmFsdWUpXCI+XG4gICAgICAgICAgICAgICAgICAgIDxtYXQtb3B0aW9uICpuZ0Zvcj1cImxldCBpdGVtIG9mIGNvbmRpdGlvbkRhdGEuczJcIiBbdmFsdWVdPVwiaXRlbS5rZXlcIj57e1xuICAgICAgICAgICAgICAgICAgICAgIGl0ZW0ubGFiZWwgfX1cbiAgICAgICAgICAgICAgICAgICAgPC9tYXQtb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgPC9tYXQtc2VsZWN0PlxuICAgICAgICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XG4gICAgICAgICAgICAgICAgPG1hdC1mb3JtLWZpZWxkIGNsYXNzPVwiZm9ybS1maWVsZCBtYXQtc2VsZWN0IGZ1bGwtd2lkdGhcIiAqbmdJZj1cImNvbmRpdGlvbkRhdGEuczM/Lmxlbmd0aD4wXCJcbiAgICAgICAgICAgICAgICAgIGFwcGVhcmFuY2U9XCJvdXRsaW5lXCI+XG4gICAgICAgICAgICAgICAgICA8bWF0LWxhYmVsPnt7bG9jYWxlPy5TRUxFQ1RfU1VCX0NBVEVHT1JZfX0gKHMzKTwvbWF0LWxhYmVsPlxuICAgICAgICAgICAgICAgICAgPG1hdC1zZWxlY3QgWyhuZ01vZGVsKV09XCJzM1wiIFtuZ01vZGVsT3B0aW9uc109XCJ7IHN0YW5kYWxvbmU6IHRydWUgfVwiXG4gICAgICAgICAgICAgICAgICAgIChzZWxlY3Rpb25DaGFuZ2UpPVwib25TZWxlY3RDb25kaXRpb24oJ3MzJywnczQnLCAkZXZlbnQudmFsdWUpXCI+XG4gICAgICAgICAgICAgICAgICAgIDxtYXQtb3B0aW9uICpuZ0Zvcj1cImxldCBpdGVtIG9mIGNvbmRpdGlvbkRhdGEuczNcIiBbdmFsdWVdPVwiaXRlbS5rZXlcIj57e1xuICAgICAgICAgICAgICAgICAgICAgIGl0ZW0ubGFiZWwgfX1cbiAgICAgICAgICAgICAgICAgICAgPC9tYXQtb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgPC9tYXQtc2VsZWN0PlxuICAgICAgICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XG4gICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgICAgICAgICAgIDxtYXQtcmFkaW8tZ3JvdXBcbiAgICAgICAgICAgICAgICAqbmdJZj1cImN1cnJlbnRFZGl0QmxvY2suaXNDb25kaXRpb25hbCAmJiBvbkdldERlZmF1bHRWYWx1ZSgpICYmIG9uR2V0RGVmYXVsdFZhbHVlKCk/Lmxlbmd0aD4wXCJcbiAgICAgICAgICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJleGFtcGxlLXJhZGlvLWdyb3VwLWxhYmVsXCIgY2xhc3M9XCJleGFtcGxlLXJhZGlvLWdyb3VwXCJcbiAgICAgICAgICAgICAgICBbKG5nTW9kZWwpXT1cImN1cnJlbnRFZGl0QmxvY2suY29uZGl0aW9uLnZhbHVlXCIgW25nTW9kZWxPcHRpb25zXT1cInsgc3RhbmRhbG9uZTogdHJ1ZSB9XCI+XG4gICAgICAgICAgICAgICAgPG1hdC1yYWRpby1idXR0b24gY2xhc3M9XCJleGFtcGxlLXJhZGlvLWJ1dHRvblwiIHN0eWxlPVwibWFyZ2luLXJpZ2h0OiAxMHB4XCJcbiAgICAgICAgICAgICAgICAgICpuZ0Zvcj1cImxldCBpdGVtIG9mIG9uR2V0RGVmYXVsdFZhbHVlKClcIiBbdmFsdWVdPVwiaXRlbS52YWx1ZVwiPlxuICAgICAgICAgICAgICAgICAge3sgaXRlbS52YWx1ZSB9fVxuICAgICAgICAgICAgICAgIDwvbWF0LXJhZGlvLWJ1dHRvbj5cbiAgICAgICAgICAgICAgPC9tYXQtcmFkaW8tZ3JvdXA+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJibG9jLWFjdGlvblwiPlxuICAgICAgICAgICAgICAgIDxidXR0b24gKm5nSWY9XCJwYXJhbXNJbmRleC5sZW5ndGg8NFwiIG1hdC1idXR0b24gW2Rpc2FibGVkXT1cIiFjdXJyZW50RWRpdEJsb2NrLmVkaXRhYmxlXCJcbiAgICAgICAgICAgICAgICAgIChjbGljayk9XCJvbkFkZE5ld1N1YkxldmVsRmllbGRCbG9jaygkZXZlbnQpXCI+e3tsb2NhbGU/LlNVQl9DQVRFR09SWX19IDxtYXQtaWNvbj5kZXZpY2VfaHViXG4gICAgICAgICAgICAgICAgICA8L21hdC1pY29uPjwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxidXR0b24gbWF0LWJ1dHRvbiBbZGlzYWJsZWRdPVwiIWN1cnJlbnRFZGl0QmxvY2suZWRpdGFibGVcIlxuICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cIm9uRHVwbGljYXRlZEJsb2NrKCRldmVudClcIj57e2xvY2FsZT8uRFVQTElDQVRFX0JMT0NLfX08bWF0LWljb24+ZmlsdGVyX25vbmU8L21hdC1pY29uPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxidXR0b24gbWF0LWJ1dHRvbiBbZGlzYWJsZWRdPVwiIWN1cnJlbnRFZGl0QmxvY2suZWRpdGFibGVcIiBjbGFzcz1cImRlbGV0ZS1ibG9jXCJcbiAgICAgICAgICAgICAgICAgIChjbGljayk9XCJvblJlbW92ZUZpZWxkQmxvY2soJGV2ZW50KVwiPnt7bG9jYWxlPy5ERUxFVEVfQkxPQ0t9fSA8bWF0LWljb24+XG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSA8L21hdC1pY29uPjwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInByb3BlcnR5LWNvbnRlbnRcIiAqbmdJZj1cImlzU2VjdGlvbiAmJiBjdXJyZW50RWRpdEJsb2NrXCI+XG4gICAgICAgICAgPGgzPnt7bG9jYWxlPy5TRUNUSU9OX1NFVFRJTkd9fSB7eyBjdXJyZW50RWRpdEJsb2NrLm5hbWUgfX08L2gzPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcm9wZXJ0eS1jb250ZW50LWlubmVyXCI+XG4gICAgICAgICAgICA8bWF0LWZvcm0tZmllbGQgY2xhc3M9XCJmb3JtLWZpZWxkIGZ1bGwtd2lkdGhcIiBhcHBlYXJhbmNlPVwib3V0bGluZVwiPlxuICAgICAgICAgICAgICA8bWF0LWxhYmVsPnt7bG9jYWxlPy5TRUNUSU9OX05BTUV9fTwvbWF0LWxhYmVsPlxuICAgICAgICAgICAgICA8aW5wdXQgKG5nTW9kZWxDaGFuZ2UpPVwib25DaGFuZ2VDYXRlZ29yeU5hbWUoKVwiIHR5cGU9XCJ0ZXh0XCIgbWF0SW5wdXQgcmVxdWlyZWQgcGxhY2Vob2xkZXI9XCJcIlxuICAgICAgICAgICAgICAgIFsobmdNb2RlbCldPVwiY3VycmVudEVkaXRCbG9jay5uYW1lXCIgW25nTW9kZWxPcHRpb25zXT1cInsgc3RhbmRhbG9uZTogdHJ1ZSB9XCIgLz5cbiAgICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XG4gICAgICAgICAgICA8bWF0LWZvcm0tZmllbGQgY2xhc3M9XCJmb3JtLWZpZWxkIG1hdC1zZWxlY3QgZnVsbC13aWR0aFwiIGFwcGVhcmFuY2U9XCJvdXRsaW5lXCI+XG4gICAgICAgICAgICAgIDxtYXQtbGFiZWw+e3tsb2NhbGU/Lk1BTkFHRU1FTlRfVEVBTX19PC9tYXQtbGFiZWw+XG4gICAgICAgICAgICAgIDxtYXQtc2VsZWN0IHJlcXVpcmVkIFsobmdNb2RlbCldPVwiY3VycmVudEVkaXRCbG9jay5zZWxlY3Rvci52YWx1ZVwiXG4gICAgICAgICAgICAgICAgW25nTW9kZWxPcHRpb25zXT1cInsgc3RhbmRhbG9uZTogdHJ1ZSB9XCI+XG4gICAgICAgICAgICAgICAgPG1hdC1vcHRpb24gW3ZhbHVlXT1cIml0ZW0udmFsdWVcIiAqbmdGb3I9XCJsZXQgaXRlbSBvZiBjdXJyZW50RWRpdEJsb2NrLnNlbGVjdG9yLmRlZmF1bHRWYWx1ZVwiPnt7XG4gICAgICAgICAgICAgICAgICBpdGVtLnZhbHVlIH19PC9tYXQtb3B0aW9uPlxuICAgICAgICAgICAgICA8L21hdC1zZWxlY3Q+XG4gICAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJsb2MtYWN0aW9uXCI+XG4gICAgICAgICAgICAgIDxidXR0b24gbWF0LWJ1dHRvbiAoY2xpY2spPVwib25BZGROZXdTdWJMZXZlbEZpZWxkQmxvY2soJGV2ZW50KVwiPnt7bG9jYWxlPy5TVUJfQ0FURUdPUll9fSA8bWF0LWljb24+XG4gICAgICAgICAgICAgICAgICBkZXZpY2VfaHViXG4gICAgICAgICAgICAgICAgPC9tYXQtaWNvbj48L2J1dHRvbj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBtYXQtYnV0dG9uIChjbGljayk9XCJvbkR1cGxpY2F0ZWRCbG9jaygkZXZlbnQpXCI+e3tsb2NhbGU/LkRVUExJQ0FURV9CTE9DS319PG1hdC1pY29uPmZpbHRlcl9ub25lXG4gICAgICAgICAgICAgICAgPC9tYXQtaWNvbj5cbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIDxidXR0b24gW2Rpc2FibGVkXT1cIiFjdXJyZW50RWRpdEJsb2NrLmVkaXRhYmxlXCIgbWF0LWJ1dHRvbiBjbGFzcz1cImRlbGV0ZS1ibG9jXCJcbiAgICAgICAgICAgICAgICAoY2xpY2spPVwib25SZW1vdmVGaWVsZEJsb2NrKCRldmVudClcIj57e2xvY2FsZT8uREVMRVRFX0JMT0NLfX0gPG1hdC1pY29uPlxuICAgICAgICAgICAgICAgICAgZGVsZXRlPC9tYXQtaWNvbj48L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Zvcm0+XG48L21haW4+Il19