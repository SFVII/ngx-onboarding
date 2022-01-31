import { __awaiter } from "tslib";
import { Component } from '@angular/core';
import { Validators } from "@angular/forms";
import { ENTER, COMMA, SEMICOLON } from "@angular/cdk/keycodes";
import { moveItemInArray, transferArrayItem } from "@angular/cdk/drag-drop";
import { UpdateProfilComponent } from '../components/update-profil/update-profil.component';
import { ExitConfirmComponent } from '../components/exit-confirm/exit-confirm.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "../onboarding.service";
import * as i3 from "@angular/router";
import * as i4 from "@angular/material/dialog";
import * as i5 from "@angular/common";
import * as i6 from "@angular/material/button";
import * as i7 from "@angular/material/icon";
import * as i8 from "@angular/material/form-field";
import * as i9 from "@angular/material/input";
import * as i10 from "@angular/material/select";
import * as i11 from "@angular/material/checkbox";
import * as i12 from "@angular/material/core";
import * as i13 from "@angular/cdk/drag-drop";
import * as i14 from "@nicky-lenaers/ngx-scroll-to";
import * as i15 from "../components/sub-template-profile/sub-template-profile.component";
function TemplateProfileCreateComponent_div_2_div_14_mat_icon_1_Template(rf, ctx) { if (rf & 1) {
    const _r14 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-icon", 19);
    i0.ɵɵlistener("click", function TemplateProfileCreateComponent_div_2_div_14_mat_icon_1_Template_mat_icon_click_0_listener($event) { i0.ɵɵrestoreView(_r14); const icon_r12 = ctx.$implicit; const ctx_r13 = i0.ɵɵnextContext(3); return ctx_r13.onSelectPicto($event, icon_r12.name); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const icon_r12 = ctx.$implicit;
    const ctx_r11 = i0.ɵɵnextContext(3);
    i0.ɵɵstyleProp("color", ctx_r11.form.get("Picto").value === icon_r12.name ? "#830B6B" : "#000");
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", icon_r12.name, " ");
} }
function TemplateProfileCreateComponent_div_2_div_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 17);
    i0.ɵɵtemplate(1, TemplateProfileCreateComponent_div_2_div_14_mat_icon_1_Template, 2, 3, "mat-icon", 18);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r9 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r9.matIconList);
} }
function TemplateProfileCreateComponent_div_2_mat_option_23_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 20);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const tag_r15 = ctx.$implicit;
    i0.ɵɵproperty("value", tag_r15);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(tag_r15);
} }
function TemplateProfileCreateComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r17 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 3);
    i0.ɵɵelementStart(1, "div", 4);
    i0.ɵɵelementStart(2, "h3", 5);
    i0.ɵɵtext(3, "Cr\u00E9ation d\u2019un nouveau profil d\u2019onboarding");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "p");
    i0.ɵɵtext(5, "S\u00E9lectionnez l\u2019icon de votre choix et indiquez le nom de votre nouveau profil d\u2019onboarding");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "div", 6);
    i0.ɵɵelementStart(7, "button", 7);
    i0.ɵɵlistener("click", function TemplateProfileCreateComponent_div_2_Template_button_click_7_listener($event) { i0.ɵɵrestoreView(_r17); const ctx_r16 = i0.ɵɵnextContext(); return ctx_r16.onShowPictoList($event); });
    i0.ɵɵelementStart(8, "mat-icon");
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "mat-form-field", 8);
    i0.ɵɵelementStart(11, "mat-label");
    i0.ɵɵtext(12, "Nom de votre nouveau profil");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(13, "input", 9);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(14, TemplateProfileCreateComponent_div_2_div_14_Template, 2, 1, "div", 10);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "mat-form-field", 8);
    i0.ɵɵelementStart(16, "mat-label");
    i0.ɵɵtext(17, "D\u00E9scription");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(18, "textarea", 11);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "mat-form-field", 8);
    i0.ɵɵelementStart(20, "mat-label");
    i0.ɵɵtext(21, "Tags");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(22, "mat-select", 12);
    i0.ɵɵtemplate(23, TemplateProfileCreateComponent_div_2_mat_option_23_Template, 2, 2, "mat-option", 13);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(24, "mat-checkbox", 14);
    i0.ɵɵtext(25, "Active");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(26, "div", 15);
    i0.ɵɵelementStart(27, "button", 16);
    i0.ɵɵlistener("click", function TemplateProfileCreateComponent_div_2_Template_button_click_27_listener() { i0.ɵɵrestoreView(_r17); const ctx_r18 = i0.ɵɵnextContext(); return ctx_r18.onShowCategory(); });
    i0.ɵɵtext(28);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r7 = i0.ɵɵnextContext();
    i0.ɵɵadvance(9);
    i0.ɵɵtextInterpolate(ctx_r7.form.get("Picto").value === "" ? "contact_phone" : ctx_r7.form.get("Picto").value);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngIf", ctx_r7.isPictoListShow);
    i0.ɵɵadvance(9);
    i0.ɵɵproperty("ngForOf", ctx_r7.tags);
    i0.ɵɵadvance(4);
    i0.ɵɵstyleProp("opacity", ctx_r7.form.get("Name").value === "" || ctx_r7.form.get("Tags").value == "" ? 0.4 : 1);
    i0.ɵɵproperty("disabled", ctx_r7.form.get("Name").value === "" || ctx_r7.form.get("Tags").value == "");
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r7.id !== "0" ? "Modifier un profil" : "Cr\u00E9er un nouveau profil", " ");
} }
function TemplateProfileCreateComponent_div_3_li_9_span_2_Template(rf, ctx) { if (rf & 1) {
    const _r29 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 37);
    i0.ɵɵlistener("click", function TemplateProfileCreateComponent_div_3_li_9_span_2_Template_span_click_0_listener() { i0.ɵɵrestoreView(_r29); const ctx_r28 = i0.ɵɵnextContext(); const cat_r22 = ctx_r28.$implicit; const i_r23 = ctx_r28.index; const ctx_r27 = i0.ɵɵnextContext(2); return ctx_r27.onExpendMore({ field: cat_r22 }, i_r23); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const cat_r22 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("ngxScrollTo", "#" + cat_r22.name);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(cat_r22.name);
} }
const _c0 = function () { return { standalone: true }; };
function TemplateProfileCreateComponent_div_3_li_9_input_3_Template(rf, ctx) { if (rf & 1) {
    const _r33 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "input", 38, 39);
    i0.ɵɵlistener("blur", function TemplateProfileCreateComponent_div_3_li_9_input_3_Template_input_blur_0_listener() { i0.ɵɵrestoreView(_r33); const ctx_r32 = i0.ɵɵnextContext(3); return ctx_r32.onEdit(); })("ngModelChange", function TemplateProfileCreateComponent_div_3_li_9_input_3_Template_input_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r33); const cat_r22 = i0.ɵɵnextContext().$implicit; return cat_r22.name = $event; })("ngModelChange", function TemplateProfileCreateComponent_div_3_li_9_input_3_Template_input_ngModelChange_0_listener() { i0.ɵɵrestoreView(_r33); const ctx_r37 = i0.ɵɵnextContext(); const i_r23 = ctx_r37.index; const cat_r22 = ctx_r37.$implicit; const ctx_r36 = i0.ɵɵnextContext(2); return ctx_r36.onEditCategoryName(i_r23, cat_r22.name); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const cat_r22 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("ngModel", cat_r22.name)("ngModelOptions", i0.ɵɵpureFunction0(2, _c0));
} }
function TemplateProfileCreateComponent_div_3_li_9_ng_container_7_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r44 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "li", 19);
    i0.ɵɵlistener("click", function TemplateProfileCreateComponent_div_3_li_9_ng_container_7_ng_container_1_Template_li_click_1_listener() { i0.ɵɵrestoreView(_r44); const ctx_r43 = i0.ɵɵnextContext(); const sub_r39 = ctx_r43.$implicit; const j_r40 = ctx_r43.index; const i_r23 = i0.ɵɵnextContext().index; const ctx_r42 = i0.ɵɵnextContext(2); return ctx_r42.onExpendMore({ field: sub_r39 }, i_r23, j_r40); });
    i0.ɵɵelementStart(2, "span", 41);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r46 = i0.ɵɵnextContext();
    const sub_r39 = ctx_r46.$implicit;
    const j_r40 = ctx_r46.index;
    i0.ɵɵadvance(1);
    i0.ɵɵclassMap(sub_r39.expandMore ? "sub-title active" : "sub-title");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngxScrollTo", "#" + sub_r39.key);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate2("", j_r40 + 1, ". ", sub_r39.label, "");
} }
function TemplateProfileCreateComponent_div_3_li_9_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, TemplateProfileCreateComponent_div_3_li_9_ng_container_7_ng_container_1_Template, 4, 5, "ng-container", 40);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const sub_r39 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", sub_r39 == null ? null : sub_r39.forms);
} }
function TemplateProfileCreateComponent_div_3_li_9_Template(rf, ctx) { if (rf & 1) {
    const _r48 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 33);
    i0.ɵɵelementStart(1, "span");
    i0.ɵɵtemplate(2, TemplateProfileCreateComponent_div_3_li_9_span_2_Template, 2, 2, "span", 34);
    i0.ɵɵtemplate(3, TemplateProfileCreateComponent_div_3_li_9_input_3_Template, 2, 3, "input", 35);
    i0.ɵɵelementStart(4, "mat-icon", 19);
    i0.ɵɵlistener("click", function TemplateProfileCreateComponent_div_3_li_9_Template_mat_icon_click_4_listener() { i0.ɵɵrestoreView(_r48); const i_r23 = ctx.index; const ctx_r47 = i0.ɵɵnextContext(2); return ctx_r47.onPassInEditMode(i_r23); });
    i0.ɵɵtext(5, "edit");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "ol");
    i0.ɵɵtemplate(7, TemplateProfileCreateComponent_div_3_li_9_ng_container_7_Template, 2, 1, "ng-container", 36);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const cat_r22 = ctx.$implicit;
    const i_r23 = ctx.index;
    const ctx_r19 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵclassMap(ctx_r19.editIndex === i_r23 ? "edition-mode" : "");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r19.editIndex !== i_r23);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r19.editIndex === i_r23);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngForOf", cat_r22.forms);
} }
function TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_div_9_div_1_div_2_div_9_div_1_div_2_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r76 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 65);
    i0.ɵɵelementStart(1, "button", 66);
    i0.ɵɵlistener("click", function TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_div_9_div_1_div_2_div_9_div_1_div_2_div_10_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r76); const k_r65 = i0.ɵɵnextContext(4).index; const j_r58 = i0.ɵɵnextContext(3).index; const i_r50 = i0.ɵɵnextContext(3).index; const ctx_r74 = i0.ɵɵnextContext(2); return ctx_r74.onAddNewField(i_r50, j_r58, k_r65); });
    i0.ɵɵelementStart(2, "mat-icon");
    i0.ɵɵtext(3, " add_box ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "span");
    i0.ɵɵtext(5, "Ajouter un champ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const l_r72 = i0.ɵɵnextContext().index;
    const child_r64 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵstyleProp("opacity", (child_r64 == null ? null : child_r64.forms == null ? null : child_r64.forms.length) - 1 === l_r72 ? 1 : 0);
    i0.ɵɵproperty("disabled", (child_r64 == null ? null : child_r64.forms == null ? null : child_r64.forms.length) - 1 !== l_r72);
} }
function TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_div_9_div_1_div_2_div_9_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r83 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 53);
    i0.ɵɵelementStart(1, "div", 54);
    i0.ɵɵelementStart(2, "div", 55);
    i0.ɵɵelementStart(3, "div", 64);
    i0.ɵɵelementStart(4, "button", 57);
    i0.ɵɵlistener("click", function TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_div_9_div_1_div_2_div_9_div_1_div_2_Template_button_click_4_listener() { i0.ɵɵrestoreView(_r83); const l_r72 = ctx.index; const k_r65 = i0.ɵɵnextContext(3).index; const j_r58 = i0.ɵɵnextContext(3).index; const i_r50 = i0.ɵɵnextContext(3).index; const ctx_r81 = i0.ɵɵnextContext(2); return ctx_r81.onRemoveField(i_r50, j_r58, k_r65, l_r72); });
    i0.ɵɵelementStart(5, "mat-icon");
    i0.ɵɵtext(6, " delete ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "div", 58);
    i0.ɵɵelementStart(8, "lib-sub-category", 59);
    i0.ɵɵlistener("onAddKeywordFromInput", function TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_div_9_div_1_div_2_div_9_div_1_div_2_Template_lib_sub_category_onAddKeywordFromInput_8_listener($event) { i0.ɵɵrestoreView(_r83); const l_r72 = ctx.index; const k_r65 = i0.ɵɵnextContext(3).index; const j_r58 = i0.ɵɵnextContext(3).index; const i_r50 = i0.ɵɵnextContext(3).index; const ctx_r86 = i0.ɵɵnextContext(2); return ctx_r86.addKeywordFromInput($event.event, $event.prev, i_r50, j_r58, k_r65, l_r72); })("onKeyPress", function TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_div_9_div_1_div_2_div_9_div_1_div_2_Template_lib_sub_category_onKeyPress_8_listener($event) { i0.ɵɵrestoreView(_r83); const l_r72 = ctx.index; const k_r65 = i0.ɵɵnextContext(3).index; const j_r58 = i0.ɵɵnextContext(3).index; const i_r50 = i0.ɵɵnextContext(3).index; const ctx_r90 = i0.ɵɵnextContext(2); return ctx_r90.onKeyPress($event.event, i_r50, j_r58, k_r65, l_r72); })("onAddNewField", function TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_div_9_div_1_div_2_div_9_div_1_div_2_Template_lib_sub_category_onAddNewField_8_listener() { i0.ɵɵrestoreView(_r83); const k_r65 = i0.ɵɵnextContext(3).index; const j_r58 = i0.ɵɵnextContext(3).index; const i_r50 = i0.ɵɵnextContext(3).index; const ctx_r94 = i0.ɵɵnextContext(2); return ctx_r94.onAddNewField(i_r50, j_r58, k_r65); })("onRemoveField", function TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_div_9_div_1_div_2_div_9_div_1_div_2_Template_lib_sub_category_onRemoveField_8_listener() { i0.ɵɵrestoreView(_r83); const l_r72 = ctx.index; const k_r65 = i0.ɵɵnextContext(3).index; const j_r58 = i0.ɵɵnextContext(3).index; const i_r50 = i0.ɵɵnextContext(3).index; const ctx_r98 = i0.ɵɵnextContext(2); return ctx_r98.onRemoveField(i_r50, j_r58, k_r65, l_r72); })("onChangeType", function TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_div_9_div_1_div_2_div_9_div_1_div_2_Template_lib_sub_category_onChangeType_8_listener() { i0.ɵɵrestoreView(_r83); const c2_r71 = ctx.$implicit; const l_r72 = ctx.index; const k_r65 = i0.ɵɵnextContext(3).index; const j_r58 = i0.ɵɵnextContext(3).index; const i_r50 = i0.ɵɵnextContext(3).index; const ctx_r102 = i0.ɵɵnextContext(2); return ctx_r102.onChangeType(c2_r71.type, i_r50, j_r58, k_r65, l_r72); })("onRemoveKeyword", function TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_div_9_div_1_div_2_div_9_div_1_div_2_Template_lib_sub_category_onRemoveKeyword_8_listener($event) { i0.ɵɵrestoreView(_r83); const l_r72 = ctx.index; const k_r65 = i0.ɵɵnextContext(3).index; const j_r58 = i0.ɵɵnextContext(3).index; const i_r50 = i0.ɵɵnextContext(3).index; const ctx_r106 = i0.ɵɵnextContext(2); return ctx_r106.removeKeyword($event.event, i_r50, j_r58, k_r65, l_r72); })("onAddNewSubLevelField", function TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_div_9_div_1_div_2_div_9_div_1_div_2_Template_lib_sub_category_onAddNewSubLevelField_8_listener() { i0.ɵɵrestoreView(_r83); const l_r72 = ctx.index; const k_r65 = i0.ɵɵnextContext(3).index; const j_r58 = i0.ɵɵnextContext(3).index; const i_r50 = i0.ɵɵnextContext(3).index; const ctx_r110 = i0.ɵɵnextContext(2); return ctx_r110.onAddNewSubLevelField(i_r50, j_r58, k_r65, l_r72); })("onExpendMore", function TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_div_9_div_1_div_2_div_9_div_1_div_2_Template_lib_sub_category_onExpendMore_8_listener($event) { i0.ɵɵrestoreView(_r83); const l_r72 = ctx.index; const k_r65 = i0.ɵɵnextContext(3).index; const j_r58 = i0.ɵɵnextContext(3).index; const i_r50 = i0.ɵɵnextContext(3).index; const ctx_r114 = i0.ɵɵnextContext(2); return ctx_r114.onExpendMore($event, i_r50, j_r58, k_r65, l_r72); })("onChangeLabel", function TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_div_9_div_1_div_2_div_9_div_1_div_2_Template_lib_sub_category_onChangeLabel_8_listener($event) { i0.ɵɵrestoreView(_r83); const l_r72 = ctx.index; const k_r65 = i0.ɵɵnextContext(3).index; const j_r58 = i0.ɵɵnextContext(3).index; const i_r50 = i0.ɵɵnextContext(3).index; const ctx_r118 = i0.ɵɵnextContext(2); return ctx_r118.onChangeLabel($event, i_r50, j_r58, k_r65, l_r72); })("onCheckedChip", function TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_div_9_div_1_div_2_div_9_div_1_div_2_Template_lib_sub_category_onCheckedChip_8_listener($event) { i0.ɵɵrestoreView(_r83); const l_r72 = ctx.index; const k_r65 = i0.ɵɵnextContext(3).index; const j_r58 = i0.ɵɵnextContext(3).index; const i_r50 = i0.ɵɵnextContext(3).index; const ctx_r122 = i0.ɵɵnextContext(2); return ctx_r122.onCheckedChip($event, i_r50, j_r58, k_r65, l_r72); })("onDrop", function TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_div_9_div_1_div_2_div_9_div_1_div_2_Template_lib_sub_category_onDrop_8_listener($event) { i0.ɵɵrestoreView(_r83); const ctx_r126 = i0.ɵɵnextContext(11); return ctx_r126.drop($event); })("onCheckedDefault", function TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_div_9_div_1_div_2_div_9_div_1_div_2_Template_lib_sub_category_onCheckedDefault_8_listener($event) { i0.ɵɵrestoreView(_r83); const l_r72 = ctx.index; const k_r65 = i0.ɵɵnextContext(3).index; const j_r58 = i0.ɵɵnextContext(3).index; const i_r50 = i0.ɵɵnextContext(3).index; const ctx_r127 = i0.ɵɵnextContext(2); return ctx_r127.onCheckedDefault($event, i_r50, j_r58, k_r65, l_r72); })("onGetConditionValues", function TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_div_9_div_1_div_2_div_9_div_1_div_2_Template_lib_sub_category_onGetConditionValues_8_listener() { i0.ɵɵrestoreView(_r83); const ctx_r131 = i0.ɵɵnextContext(11); return ctx_r131.getConditionValues(); });
    i0.ɵɵelement(9, "div", 62);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(10, TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_div_9_div_1_div_2_div_9_div_1_div_2_div_10_Template, 6, 3, "div", 61);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const c2_r71 = ctx.$implicit;
    const l_r72 = ctx.index;
    const ctx_r133 = i0.ɵɵnextContext(3);
    const child_r64 = ctx_r133.$implicit;
    const k_r65 = ctx_r133.index;
    const field_r57 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r70 = i0.ɵɵnextContext(5);
    i0.ɵɵproperty("id", c2_r71.key);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("disabled", !field_r57.deleteable);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("field", c2_r71)("length", child_r64 == null ? null : child_r64.forms == null ? null : child_r64.forms.length)("i", k_r65)("j", l_r72)("conditionData", ctx_r70.conditionData);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", (child_r64 == null ? null : child_r64.forms == null ? null : child_r64.forms.length) - 1 === l_r72);
} }
function TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_div_9_div_1_div_2_div_9_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r135 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 50, 51);
    i0.ɵɵlistener("cdkDropListDropped", function TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_div_9_div_1_div_2_div_9_div_1_Template_div_cdkDropListDropped_0_listener($event) { i0.ɵɵrestoreView(_r135); const ctx_r134 = i0.ɵɵnextContext(10); return ctx_r134.drop($event); });
    i0.ɵɵtemplate(2, TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_div_9_div_1_div_2_div_9_div_1_div_2_Template, 11, 8, "div", 52);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const child_r64 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵproperty("cdkDropListData", child_r64.forms);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", child_r64.forms);
} }
function TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_div_9_div_1_div_2_div_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 62);
    i0.ɵɵtemplate(1, TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_div_9_div_1_div_2_div_9_div_1_Template, 3, 2, "div", 48);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const child_r64 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", child_r64.forms);
} }
function TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_div_9_div_1_div_2_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r140 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 65);
    i0.ɵɵelementStart(1, "button", 66);
    i0.ɵɵlistener("click", function TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_div_9_div_1_div_2_div_10_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r140); const j_r58 = i0.ɵɵnextContext(4).index; const i_r50 = i0.ɵɵnextContext(3).index; const ctx_r138 = i0.ɵɵnextContext(2); return ctx_r138.onAddNewField(i_r50, j_r58); });
    i0.ɵɵelementStart(2, "mat-icon");
    i0.ɵɵtext(3, "add_box");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "span");
    i0.ɵɵtext(5, "Ajouter un champ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const k_r65 = i0.ɵɵnextContext().index;
    const field_r57 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵstyleProp("opacity", (field_r57 == null ? null : field_r57.forms == null ? null : field_r57.forms.length) - 1 === k_r65 ? 1 : 0);
    i0.ɵɵproperty("disabled", (field_r57 == null ? null : field_r57.forms == null ? null : field_r57.forms.length) - 1 !== k_r65);
} }
function TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_div_9_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r146 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 53);
    i0.ɵɵelementStart(1, "div", 54);
    i0.ɵɵelementStart(2, "div", 55);
    i0.ɵɵelementStart(3, "div", 63);
    i0.ɵɵelementStart(4, "button", 57);
    i0.ɵɵlistener("click", function TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_div_9_div_1_div_2_Template_button_click_4_listener() { i0.ɵɵrestoreView(_r146); const k_r65 = ctx.index; const j_r58 = i0.ɵɵnextContext(3).index; const i_r50 = i0.ɵɵnextContext(3).index; const ctx_r144 = i0.ɵɵnextContext(2); return ctx_r144.onRemoveField(i_r50, j_r58, k_r65); });
    i0.ɵɵelementStart(5, "mat-icon");
    i0.ɵɵtext(6, " delete");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "div", 58);
    i0.ɵɵelementStart(8, "lib-sub-category", 59);
    i0.ɵɵlistener("onAddKeywordFromInput", function TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_div_9_div_1_div_2_Template_lib_sub_category_onAddKeywordFromInput_8_listener($event) { i0.ɵɵrestoreView(_r146); const k_r65 = ctx.index; const j_r58 = i0.ɵɵnextContext(3).index; const i_r50 = i0.ɵɵnextContext(3).index; const ctx_r148 = i0.ɵɵnextContext(2); return ctx_r148.addKeywordFromInput($event.event, $event.prev, i_r50, j_r58, k_r65); })("onKeyPress", function TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_div_9_div_1_div_2_Template_lib_sub_category_onKeyPress_8_listener($event) { i0.ɵɵrestoreView(_r146); const k_r65 = ctx.index; const j_r58 = i0.ɵɵnextContext(3).index; const i_r50 = i0.ɵɵnextContext(3).index; const ctx_r151 = i0.ɵɵnextContext(2); return ctx_r151.onKeyPress($event.event, i_r50, j_r58, k_r65); })("onAddNewField", function TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_div_9_div_1_div_2_Template_lib_sub_category_onAddNewField_8_listener() { i0.ɵɵrestoreView(_r146); const j_r58 = i0.ɵɵnextContext(3).index; const i_r50 = i0.ɵɵnextContext(3).index; const ctx_r154 = i0.ɵɵnextContext(2); return ctx_r154.onAddNewField(i_r50, j_r58); })("onRemoveField", function TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_div_9_div_1_div_2_Template_lib_sub_category_onRemoveField_8_listener() { i0.ɵɵrestoreView(_r146); const k_r65 = ctx.index; const j_r58 = i0.ɵɵnextContext(3).index; const i_r50 = i0.ɵɵnextContext(3).index; const ctx_r157 = i0.ɵɵnextContext(2); return ctx_r157.onRemoveField(i_r50, j_r58, k_r65); })("onChangeType", function TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_div_9_div_1_div_2_Template_lib_sub_category_onChangeType_8_listener() { i0.ɵɵrestoreView(_r146); const child_r64 = ctx.$implicit; const k_r65 = ctx.index; const j_r58 = i0.ɵɵnextContext(3).index; const i_r50 = i0.ɵɵnextContext(3).index; const ctx_r160 = i0.ɵɵnextContext(2); return ctx_r160.onChangeType(child_r64.type, i_r50, j_r58, k_r65); })("onRemoveKeyword", function TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_div_9_div_1_div_2_Template_lib_sub_category_onRemoveKeyword_8_listener($event) { i0.ɵɵrestoreView(_r146); const k_r65 = ctx.index; const j_r58 = i0.ɵɵnextContext(3).index; const i_r50 = i0.ɵɵnextContext(3).index; const ctx_r163 = i0.ɵɵnextContext(2); return ctx_r163.removeKeyword($event.event, i_r50, j_r58, k_r65); })("onAddNewSubLevelField", function TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_div_9_div_1_div_2_Template_lib_sub_category_onAddNewSubLevelField_8_listener() { i0.ɵɵrestoreView(_r146); const k_r65 = ctx.index; const j_r58 = i0.ɵɵnextContext(3).index; const i_r50 = i0.ɵɵnextContext(3).index; const ctx_r166 = i0.ɵɵnextContext(2); return ctx_r166.onAddNewSubLevelField(i_r50, j_r58, k_r65); })("onExpendMore", function TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_div_9_div_1_div_2_Template_lib_sub_category_onExpendMore_8_listener($event) { i0.ɵɵrestoreView(_r146); const k_r65 = ctx.index; const j_r58 = i0.ɵɵnextContext(3).index; const i_r50 = i0.ɵɵnextContext(3).index; const ctx_r169 = i0.ɵɵnextContext(2); return ctx_r169.onExpendMore($event, i_r50, j_r58, k_r65); })("onChangeLabel", function TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_div_9_div_1_div_2_Template_lib_sub_category_onChangeLabel_8_listener($event) { i0.ɵɵrestoreView(_r146); const k_r65 = ctx.index; const j_r58 = i0.ɵɵnextContext(3).index; const i_r50 = i0.ɵɵnextContext(3).index; const ctx_r172 = i0.ɵɵnextContext(2); return ctx_r172.onChangeLabel($event, i_r50, j_r58, k_r65); })("onCheckedChip", function TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_div_9_div_1_div_2_Template_lib_sub_category_onCheckedChip_8_listener($event) { i0.ɵɵrestoreView(_r146); const k_r65 = ctx.index; const j_r58 = i0.ɵɵnextContext(3).index; const i_r50 = i0.ɵɵnextContext(3).index; const ctx_r175 = i0.ɵɵnextContext(2); return ctx_r175.onCheckedChip($event, i_r50, j_r58, k_r65); })("onDrop", function TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_div_9_div_1_div_2_Template_lib_sub_category_onDrop_8_listener($event) { i0.ɵɵrestoreView(_r146); const ctx_r178 = i0.ɵɵnextContext(8); return ctx_r178.drop($event); })("onCheckedDefault", function TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_div_9_div_1_div_2_Template_lib_sub_category_onCheckedDefault_8_listener($event) { i0.ɵɵrestoreView(_r146); const k_r65 = ctx.index; const j_r58 = i0.ɵɵnextContext(3).index; const i_r50 = i0.ɵɵnextContext(3).index; const ctx_r179 = i0.ɵɵnextContext(2); return ctx_r179.onCheckedDefault($event, i_r50, j_r58, k_r65); })("onGetConditionValues", function TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_div_9_div_1_div_2_Template_lib_sub_category_onGetConditionValues_8_listener() { i0.ɵɵrestoreView(_r146); const ctx_r182 = i0.ɵɵnextContext(8); return ctx_r182.getConditionValues(); });
    i0.ɵɵtemplate(9, TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_div_9_div_1_div_2_div_9_Template, 2, 1, "div", 60);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(10, TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_div_9_div_1_div_2_div_10_Template, 6, 3, "div", 61);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const child_r64 = ctx.$implicit;
    const k_r65 = ctx.index;
    const ctx_r183 = i0.ɵɵnextContext(3);
    const field_r57 = ctx_r183.$implicit;
    const j_r58 = ctx_r183.index;
    const ctx_r63 = i0.ɵɵnextContext(5);
    i0.ɵɵproperty("id", child_r64.key);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("disabled", !child_r64.deleteable);
    i0.ɵɵadvance(1);
    i0.ɵɵstyleProp("opacity", !child_r64.deleteable ? 0 : 1);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("field", child_r64)("length", field_r57 == null ? null : field_r57.forms == null ? null : field_r57.forms.length)("i", j_r58)("j", k_r65)("conditionData", ctx_r63.conditionData);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", child_r64.expandMore);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", (field_r57 == null ? null : field_r57.forms == null ? null : field_r57.forms.length) - 1 === k_r65);
} }
function TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_div_9_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r185 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 50, 51);
    i0.ɵɵlistener("cdkDropListDropped", function TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_div_9_div_1_Template_div_cdkDropListDropped_0_listener($event) { i0.ɵɵrestoreView(_r185); const ctx_r184 = i0.ɵɵnextContext(7); return ctx_r184.drop($event); });
    i0.ɵɵtemplate(2, TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_div_9_div_1_div_2_Template, 11, 11, "div", 52);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const field_r57 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵproperty("cdkDropListData", field_r57.forms);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", field_r57.forms);
} }
function TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_div_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 62);
    i0.ɵɵtemplate(1, TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_div_9_div_1_Template, 3, 2, "div", 48);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const field_r57 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", field_r57.forms);
} }
function TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r190 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 65);
    i0.ɵɵelementStart(1, "button", 66);
    i0.ɵɵlistener("click", function TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_div_10_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r190); const i_r50 = i0.ɵɵnextContext(4).index; const ctx_r188 = i0.ɵɵnextContext(2); return ctx_r188.onAddNewField(i_r50); });
    i0.ɵɵelementStart(2, "mat-icon");
    i0.ɵɵtext(3, "add_box");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "span");
    i0.ɵɵtext(5, "Ajouter un champ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const j_r58 = i0.ɵɵnextContext().index;
    const category_r49 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵstyleProp("opacity", (category_r49 == null ? null : category_r49.forms == null ? null : category_r49.forms.length) - 1 === j_r58 ? 1 : 0);
    i0.ɵɵproperty("disabled", (category_r49 == null ? null : category_r49.forms == null ? null : category_r49.forms.length) - 1 !== j_r58);
} }
function TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r195 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 53);
    i0.ɵɵelementStart(1, "div", 54);
    i0.ɵɵelementStart(2, "div", 55);
    i0.ɵɵelementStart(3, "div", 56);
    i0.ɵɵelementStart(4, "button", 57);
    i0.ɵɵlistener("click", function TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_Template_button_click_4_listener() { i0.ɵɵrestoreView(_r195); const j_r58 = ctx.index; const i_r50 = i0.ɵɵnextContext(3).index; const ctx_r193 = i0.ɵɵnextContext(2); return ctx_r193.onRemoveField(i_r50, j_r58); });
    i0.ɵɵelementStart(5, "mat-icon");
    i0.ɵɵtext(6, "delete ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "div", 58);
    i0.ɵɵelementStart(8, "lib-sub-category", 59);
    i0.ɵɵlistener("onAddKeywordFromInput", function TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_Template_lib_sub_category_onAddKeywordFromInput_8_listener($event) { i0.ɵɵrestoreView(_r195); const j_r58 = ctx.index; const i_r50 = i0.ɵɵnextContext(3).index; const ctx_r196 = i0.ɵɵnextContext(2); return ctx_r196.addKeywordFromInput($event.event, $event.prev, i_r50, j_r58); })("onKeyPress", function TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_Template_lib_sub_category_onKeyPress_8_listener($event) { i0.ɵɵrestoreView(_r195); const j_r58 = ctx.index; const i_r50 = i0.ɵɵnextContext(3).index; const ctx_r198 = i0.ɵɵnextContext(2); return ctx_r198.onKeyPress($event.event, i_r50, j_r58); })("onAddNewField", function TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_Template_lib_sub_category_onAddNewField_8_listener() { i0.ɵɵrestoreView(_r195); const i_r50 = i0.ɵɵnextContext(3).index; const ctx_r200 = i0.ɵɵnextContext(2); return ctx_r200.onAddNewField(i_r50); })("onRemoveField", function TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_Template_lib_sub_category_onRemoveField_8_listener() { i0.ɵɵrestoreView(_r195); const j_r58 = ctx.index; const i_r50 = i0.ɵɵnextContext(3).index; const ctx_r202 = i0.ɵɵnextContext(2); return ctx_r202.onRemoveField(i_r50, j_r58); })("onChangeType", function TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_Template_lib_sub_category_onChangeType_8_listener() { i0.ɵɵrestoreView(_r195); const field_r57 = ctx.$implicit; const j_r58 = ctx.index; const i_r50 = i0.ɵɵnextContext(3).index; const ctx_r204 = i0.ɵɵnextContext(2); return ctx_r204.onChangeType(field_r57.type, i_r50, j_r58); })("onRemoveKeyword", function TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_Template_lib_sub_category_onRemoveKeyword_8_listener($event) { i0.ɵɵrestoreView(_r195); const j_r58 = ctx.index; const i_r50 = i0.ɵɵnextContext(3).index; const ctx_r206 = i0.ɵɵnextContext(2); return ctx_r206.removeKeyword($event.event, i_r50, j_r58); })("onAddNewSubLevelField", function TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_Template_lib_sub_category_onAddNewSubLevelField_8_listener() { i0.ɵɵrestoreView(_r195); const j_r58 = ctx.index; const i_r50 = i0.ɵɵnextContext(3).index; const ctx_r208 = i0.ɵɵnextContext(2); return ctx_r208.onAddNewSubLevelField(i_r50, j_r58); })("onExpendMore", function TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_Template_lib_sub_category_onExpendMore_8_listener($event) { i0.ɵɵrestoreView(_r195); const j_r58 = ctx.index; const i_r50 = i0.ɵɵnextContext(3).index; const ctx_r210 = i0.ɵɵnextContext(2); return ctx_r210.onExpendMore($event, i_r50, j_r58); })("onChangeLabel", function TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_Template_lib_sub_category_onChangeLabel_8_listener($event) { i0.ɵɵrestoreView(_r195); const j_r58 = ctx.index; const i_r50 = i0.ɵɵnextContext(3).index; const ctx_r212 = i0.ɵɵnextContext(2); return ctx_r212.onChangeLabel($event, i_r50, j_r58); })("onCheckedChip", function TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_Template_lib_sub_category_onCheckedChip_8_listener($event) { i0.ɵɵrestoreView(_r195); const j_r58 = ctx.index; const i_r50 = i0.ɵɵnextContext(3).index; const ctx_r214 = i0.ɵɵnextContext(2); return ctx_r214.onCheckedChip($event, i_r50, j_r58); })("onDrop", function TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_Template_lib_sub_category_onDrop_8_listener($event) { i0.ɵɵrestoreView(_r195); const ctx_r216 = i0.ɵɵnextContext(5); return ctx_r216.drop($event); })("onCheckedDefault", function TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_Template_lib_sub_category_onCheckedDefault_8_listener($event) { i0.ɵɵrestoreView(_r195); const j_r58 = ctx.index; const i_r50 = i0.ɵɵnextContext(3).index; const ctx_r217 = i0.ɵɵnextContext(2); return ctx_r217.onCheckedDefault($event, i_r50, j_r58); })("onGetConditionValues", function TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_Template_lib_sub_category_onGetConditionValues_8_listener() { i0.ɵɵrestoreView(_r195); const ctx_r219 = i0.ɵɵnextContext(5); return ctx_r219.getConditionValues(); });
    i0.ɵɵtemplate(9, TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_div_9_Template, 2, 1, "div", 60);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(10, TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_div_10_Template, 6, 3, "div", 61);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const field_r57 = ctx.$implicit;
    const j_r58 = ctx.index;
    const ctx_r220 = i0.ɵɵnextContext(3);
    const category_r49 = ctx_r220.$implicit;
    const i_r50 = ctx_r220.index;
    const ctx_r56 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("id", field_r57.key);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("disabled", !field_r57.deleteable);
    i0.ɵɵadvance(1);
    i0.ɵɵstyleProp("opacity", !field_r57.deleteable ? 0 : 1);
    i0.ɵɵadvance(2);
    i0.ɵɵclassMap(!field_r57.deleteable ? "disabled" : "");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("field", field_r57)("length", category_r49 == null ? null : category_r49.forms == null ? null : category_r49.forms.length)("i", i_r50)("j", j_r58)("conditionData", ctx_r56.conditionData);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", field_r57.expandMore);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", (category_r49 == null ? null : category_r49.forms == null ? null : category_r49.forms.length) - 1 === j_r58);
} }
function TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_Template, 11, 13, "div", 52);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const category_r49 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", category_r49.forms);
} }
function TemplateProfileCreateComponent_div_3_div_19_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r223 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 50, 51);
    i0.ɵɵlistener("cdkDropListDropped", function TemplateProfileCreateComponent_div_3_div_19_div_8_Template_div_cdkDropListDropped_0_listener($event) { i0.ɵɵrestoreView(_r223); const ctx_r222 = i0.ɵɵnextContext(3); return ctx_r222.drop($event); });
    i0.ɵɵtemplate(2, TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_Template, 2, 1, "ng-container", 40);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const category_r49 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("cdkDropListData", category_r49.forms);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", category_r49.expandMore);
} }
function TemplateProfileCreateComponent_div_3_div_19_mat_icon_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-icon");
    i0.ɵɵtext(1, "chevron_right");
    i0.ɵɵelementEnd();
} }
function TemplateProfileCreateComponent_div_3_div_19_mat_icon_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-icon");
    i0.ɵɵtext(1, "expand_more");
    i0.ɵɵelementEnd();
} }
function TemplateProfileCreateComponent_div_3_div_19_Template(rf, ctx) { if (rf & 1) {
    const _r226 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 42);
    i0.ɵɵelementStart(1, "div", 43);
    i0.ɵɵelementStart(2, "button", 44);
    i0.ɵɵlistener("click", function TemplateProfileCreateComponent_div_3_div_19_Template_button_click_2_listener($event) { i0.ɵɵrestoreView(_r226); const i_r50 = ctx.index; const ctx_r225 = i0.ɵɵnextContext(2); return ctx_r225.onRemoveCategory($event, i_r50); });
    i0.ɵɵelementStart(3, "mat-icon");
    i0.ɵɵtext(4, "delete");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 45);
    i0.ɵɵelementStart(6, "div", 46);
    i0.ɵɵelementStart(7, "input", 47);
    i0.ɵɵlistener("ngModelChange", function TemplateProfileCreateComponent_div_3_div_19_Template_input_ngModelChange_7_listener($event) { i0.ɵɵrestoreView(_r226); const category_r49 = ctx.$implicit; return category_r49.name = $event; });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(8, TemplateProfileCreateComponent_div_3_div_19_div_8_Template, 3, 2, "div", 48);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "button", 49);
    i0.ɵɵlistener("click", function TemplateProfileCreateComponent_div_3_div_19_Template_button_click_9_listener($event) { i0.ɵɵrestoreView(_r226); const category_r49 = ctx.$implicit; const i_r50 = ctx.index; const ctx_r228 = i0.ɵɵnextContext(2); return ctx_r228.onExpendMore({ event: $event, field: category_r49 }, i_r50); });
    i0.ɵɵtemplate(10, TemplateProfileCreateComponent_div_3_div_19_mat_icon_10_Template, 2, 0, "mat-icon", 40);
    i0.ɵɵtemplate(11, TemplateProfileCreateComponent_div_3_div_19_mat_icon_11_Template, 2, 0, "mat-icon", 40);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const category_r49 = ctx.$implicit;
    const ctx_r21 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("id", category_r49.name);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("disabled", !category_r49.deleteable);
    i0.ɵɵadvance(1);
    i0.ɵɵstyleProp("opacity", !category_r49.deleteable ? 0 : 1);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("readonly", ctx_r21.categories.length < 4 || !category_r49.editable)("readonly", !category_r49.editable)("ngModel", category_r49.name)("ngModelOptions", i0.ɵɵpureFunction0(11, _c0));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", category_r49.forms);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", !category_r49.expandMore);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", category_r49.expandMore);
} }
function TemplateProfileCreateComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r230 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 21);
    i0.ɵɵelementStart(1, "div", 22);
    i0.ɵɵelementStart(2, "div", 23);
    i0.ɵɵelementStart(3, "h3");
    i0.ɵɵelementStart(4, "span");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "mat-icon", 19);
    i0.ɵɵlistener("click", function TemplateProfileCreateComponent_div_3_Template_mat_icon_click_6_listener() { i0.ɵɵrestoreView(_r230); const ctx_r229 = i0.ɵɵnextContext(); return ctx_r229.openDialog(); });
    i0.ɵɵtext(7, "edit");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "ol", 24);
    i0.ɵɵtemplate(9, TemplateProfileCreateComponent_div_3_li_9_Template, 8, 5, "li", 25);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "button", 26);
    i0.ɵɵlistener("click", function TemplateProfileCreateComponent_div_3_Template_button_click_10_listener($event) { i0.ɵɵrestoreView(_r230); const ctx_r231 = i0.ɵɵnextContext(); return ctx_r231.onAddNewCategory($event); });
    i0.ɵɵelementStart(11, "mat-icon");
    i0.ɵɵtext(12, "add_box");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(13, " Ajouter une nouvelle cat\u00E9gorie ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "button", 27);
    i0.ɵɵtext(15, " Enregistrer le profil ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "div", 28);
    i0.ɵɵelementStart(17, "div", 29, 30);
    i0.ɵɵlistener("cdkDropListDropped", function TemplateProfileCreateComponent_div_3_Template_div_cdkDropListDropped_17_listener($event) { i0.ɵɵrestoreView(_r230); const ctx_r232 = i0.ɵɵnextContext(); return ctx_r232.drop($event); });
    i0.ɵɵtemplate(19, TemplateProfileCreateComponent_div_3_div_19_Template, 12, 12, "div", 31);
    i0.ɵɵelementStart(20, "div", 32);
    i0.ɵɵelementStart(21, "button", 19);
    i0.ɵɵlistener("click", function TemplateProfileCreateComponent_div_3_Template_button_click_21_listener($event) { i0.ɵɵrestoreView(_r230); const ctx_r233 = i0.ɵɵnextContext(); return ctx_r233.onAddNewCategory($event); });
    i0.ɵɵelementStart(22, "mat-icon");
    i0.ɵɵtext(23, "add");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(24, " Ajouter une cat\u00E9gorie ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r8 = i0.ɵɵnextContext();
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r8.form.get("Name").value);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngForOf", ctx_r8.categories);
    i0.ɵɵadvance(8);
    i0.ɵɵproperty("cdkDropListData", ctx_r8.categories);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r8.categories);
} }
export class TemplateProfileCreateComponent {
    constructor(fb, service, route, router, dialog) {
        this.fb = fb;
        this.service = service;
        this.route = route;
        this.router = router;
        this.dialog = dialog;
        this.validCategory = false;
        this.separatorKeysCodes = [ENTER, COMMA, SEMICOLON];
        this.currentProfil = {};
        this.canExit = true;
        this.tags = [];
        this.id = "0";
        this.parent = [];
        this.editIndex = null;
        this.showProfileName = false;
        this.matIconList = [
            { name: 'developer_board' },
            { name: 'contact_phone' },
            { name: 'contact_mail' },
            { name: 'play_circle_filled' },
            { name: 'control_camera' },
            { name: 'explicit' },
            { name: 'person' },
            { name: 'visibility' },
            { name: 'video_label' },
            { name: 'add_circle' },
            { name: 'watch_later' },
            { name: 'where_to_vote' },
            { name: 'work' },
            { name: 'web' },
            { name: 'whatshot' },
            { name: 'wifi' },
            { name: 'workspaces' },
            { name: 'wb_cloudy' },
            { name: 'waves' },
            { name: 'warning' },
            { name: 'space_das' }
        ];
        this.picto = "";
        this.categories = [];
        this.defaultCategorie = [
            {
                name: "Utilisateur",
                editable: false,
                deleteable: false,
                expandMore: false,
                expandOnboarding: true,
                defaultValue: false,
                suffixEndpoint: "category/user",
                forms: [
                    {
                        label: "Civilité",
                        key: "Salutation",
                        expandOnboarding: true,
                        defaultValue: [{ value: "M.", checked: false }, { value: "Mme", checked: false }],
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
                        label: "Téléphone fixe",
                        key: "Phone",
                        expandOnboarding: true,
                        defaultValue: null,
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
                        label: "Téléphone portable",
                        key: "MobilePhone",
                        expandOnboarding: true,
                        defaultValue: null,
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
                        size: 80,
                        isMandatory: true,
                        otherValue: '',
                        type: "text",
                        editable: false,
                        deleteable: false,
                        subLevel: 1,
                        expandMore: false,
                    },
                    // {
                    //   label: "ID",
                    //   key: "Id",
                    //   expandOnboarding:true,
                    //   defaultValue: null,
                    //   value: null,
                    //   size: 80,
                    //   isMandatory: true,
                    //   otherValue:'',
                    //   type: "text",
                    //   editable: false,
                    //   deleteable: false,
                    //   subLevel: 1,
                    //   expandMore: false,
                    // }, {
                    //   label: "Etablissement ID",
                    //   key: "AccountId",
                    //   expandOnboarding:true,
                    //   defaultValue: null,
                    //   value: null,
                    //   size: 80,
                    //   isMandatory: true,
                    //   otherValue:'',
                    //   type: "text",
                    //   editable: false,
                    //   deleteable: false,
                    //   subLevel: 1,
                    //   expandMore: false,
                    // },
                    {
                        label: "Accès au portail",
                        key: "Acc_s_au_portail_client_NowBoard__c",
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
                        label: "A quitté la société",
                        key: "A_quitt_la_soci_t__c",
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
                ],
            },
            {
                name: "Session d'utilisateur",
                editable: true,
                isConditional: false,
                conditionValue: "",
                conditionLocation: {},
                deleteable: true,
                selected: true,
                expandMore: false,
                expandOnboarding: true,
                defaultValue: false,
                suffixEndpoint: "category/user-session",
                forms: [
                    {
                        label: "Utilisateur local à créer",
                        key: "UserLocalToCreate",
                        expandOnboarding: true,
                        defaultValue: null,
                        value: null,
                        size: 80,
                        isMandatory: false,
                        otherValue: '',
                        type: "checkbox",
                        editable: true,
                        isConditional: false,
                        conditionValue: "",
                        conditionLocation: {},
                        deleteable: true,
                        subLevel: 1,
                        expandMore: false,
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
                                conditionLocation: {},
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
                                conditionLocation: {},
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
                        value: null,
                        size: 80,
                        isMandatory: false,
                        otherValue: '',
                        type: "checkbox",
                        editable: true,
                        isConditional: false,
                        conditionValue: "",
                        conditionLocation: {},
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
                                conditionLocation: {},
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
                                conditionLocation: {},
                                deleteable: true,
                                subLevel: 2,
                                expandMore: false,
                            },
                            {
                                label: "Votre mot de passe.",
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
                                conditionLocation: {},
                                deleteable: true,
                                subLevel: 2,
                                expandMore: false,
                            },
                            {
                                label: "Groupe de sécurité",
                                key: "GroupSecurity",
                                expandOnboarding: true,
                                defaultValue: null,
                                value: null,
                                size: 80,
                                isMandatory: true,
                                otherValue: '',
                                type: "checkbox",
                                editable: true,
                                isConditional: false,
                                conditionValue: "",
                                conditionLocation: {},
                                deleteable: true,
                                subLevel: 2,
                                expandMore: false,
                                forms: [
                                    {
                                        label: "Utilisateur avec les droits similaires *",
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
                                        conditionLocation: {},
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
                                        conditionLocation: {},
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
                expandMore: false,
                suffixEndpoint: "category/messagerie",
                selected: true,
                editable: true,
                isConditional: false,
                conditionValue: "",
                conditionLocation: {},
                deleteable: true,
                expandOnboarding: true,
                defaultValue: false,
                forms: [
                    {
                        label: "Adresse mail à créer.",
                        key: "EmailToCreate",
                        expandOnboarding: true,
                        defaultValue: null,
                        value: null,
                        size: 80,
                        isMandatory: true,
                        otherValue: '',
                        type: "checkbox",
                        editable: true,
                        isConditional: false,
                        conditionValue: "",
                        conditionLocation: {},
                        deleteable: true,
                        subLevel: 1,
                        expandMore: false,
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
                                conditionLocation: {},
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
                                conditionLocation: {},
                                deleteable: true,
                                subLevel: 2,
                                expandMore: false,
                            },
                        ],
                    },
                    {
                        label: "Listes  de distribution.",
                        key: "DistributionList",
                        expandOnboarding: true,
                        defaultValue: null,
                        value: null,
                        size: 80,
                        isMandatory: true,
                        otherValue: '',
                        type: "checkbox",
                        editable: true,
                        isConditional: false,
                        conditionValue: "",
                        conditionLocation: {},
                        deleteable: true,
                        subLevel: 1,
                        expandMore: false,
                        forms: [
                            {
                                label: "Utilisateur avec les listes similaires *",
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
                                conditionLocation: {},
                                deleteable: true,
                                subLevel: 2,
                                expandMore: false,
                            },
                            {
                                label: "Descriptions.",
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
                                conditionLocation: {},
                                deleteable: true,
                                subLevel: 2,
                                expandMore: false,
                            },
                        ],
                    },
                    {
                        label: "Ajouter des boites mails délégués.",
                        key: "AddInboxMailDelegate",
                        expandOnboarding: true,
                        defaultValue: null,
                        value: null,
                        size: 80,
                        isMandatory: true,
                        otherValue: '',
                        type: "checkbox",
                        editable: true,
                        isConditional: false,
                        conditionValue: "",
                        conditionLocation: {},
                        deleteable: true,
                        subLevel: 1,
                        expandMore: false,
                        forms: [
                            {
                                label: "Descriptions.",
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
                                conditionLocation: {},
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
                expandMore: false,
                suffixEndpoint: "category/serveur",
                selected: true,
                editable: true,
                isConditional: false,
                conditionValue: "",
                conditionLocation: {},
                deleteable: true,
                expandOnboarding: true,
                defaultValue: false,
                forms: [
                    {
                        label: "Accès aux lecteurs réseaux.",
                        key: "ReadNetworkAccess",
                        expandOnboarding: true,
                        defaultValue: null,
                        value: null,
                        size: 80,
                        isMandatory: false,
                        otherValue: '',
                        type: "checkbox",
                        editable: true,
                        isConditional: false,
                        conditionValue: "",
                        conditionLocation: {},
                        deleteable: true,
                        subLevel: 1,
                        expandMore: false,
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
                                conditionLocation: {},
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
                                conditionLocation: {},
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
                                conditionLocation: {},
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
                expandMore: false,
                suffixEndpoint: "category/vpn",
                selected: true,
                expandOnboarding: true,
                defaultValue: false,
                editable: true,
                isConditional: false,
                conditionValue: "",
                conditionLocation: {},
                deleteable: true,
                forms: [
                    {
                        label: "Accès au VPN",
                        key: "VpnAccess",
                        expandOnboarding: true,
                        defaultValue: null,
                        value: null,
                        size: 80,
                        isMandatory: false,
                        otherValue: '',
                        type: "checkbox",
                        editable: true,
                        isConditional: false,
                        conditionValue: "",
                        conditionLocation: {},
                        deleteable: true,
                        subLevel: 1,
                        expandMore: false,
                    },
                ],
            },
            {
                name: "Imprimantes",
                expandMore: false,
                suffixEndpoint: "category/imprimente",
                selected: true,
                editable: true,
                isConditional: false,
                conditionValue: "",
                conditionLocation: {},
                deleteable: true,
                expandOnboarding: true,
                defaultValue: false,
                forms: [
                    {
                        label: "Accès aux imprimantes.",
                        key: "PrinterAccess",
                        expandOnboarding: true,
                        defaultValue: null,
                        value: null,
                        size: 80,
                        isMandatory: false,
                        otherValue: '',
                        type: "checkbox",
                        editable: true,
                        isConditional: false,
                        conditionValue: "",
                        conditionLocation: {},
                        deleteable: true,
                        subLevel: 1,
                        expandMore: false,
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
                                conditionLocation: {},
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
                expandMore: false,
                suffixEndpoint: "category/application",
                selected: true,
                editable: true,
                isConditional: false,
                conditionValue: "",
                conditionLocation: {},
                expandOnboarding: true,
                defaultValue: false,
                deleteable: true,
                forms: [
                    {
                        label: "Accès aux applications ?",
                        key: "ApplicationAccess",
                        expandOnboarding: true,
                        defaultValue: null,
                        value: null,
                        size: 80,
                        isMandatory: false,
                        otherValue: '',
                        type: "checkbox",
                        editable: true,
                        isConditional: false,
                        conditionValue: "",
                        conditionLocation: {},
                        deleteable: true,
                        subLevel: 1,
                        expandMore: false,
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
                                conditionLocation: {},
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
                expandMore: false,
                suffixEndpoint: "category/poste",
                selected: true,
                expandOnboarding: true,
                defaultValue: false,
                editable: true,
                isConditional: false,
                conditionValue: "",
                conditionLocation: {},
                deleteable: true,
                forms: [
                    {
                        label: "Paramétrage de poste",
                        key: "PostParameter",
                        expandOnboarding: true,
                        defaultValue: null,
                        value: null,
                        size: 80,
                        isMandatory: false,
                        otherValue: '',
                        type: "checkbox",
                        editable: true,
                        isConditional: false,
                        conditionValue: "",
                        conditionLocation: {},
                        deleteable: true,
                        subLevel: 1,
                        expandMore: false,
                        forms: [
                            {
                                label: "RealocatedEquipment",
                                key: "",
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
                                conditionLocation: {},
                                deleteable: true,
                                subLevel: 2,
                                expandMore: false,
                            },
                            {
                                label: "Nouveau poste",
                                key: "NewPost",
                                expandOnboarding: true,
                                defaultValue: null,
                                value: null,
                                size: 80,
                                isMandatory: true,
                                otherValue: '',
                                type: "checkbox",
                                editable: true,
                                isConditional: false,
                                conditionValue: "",
                                conditionLocation: {},
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
                                        conditionLocation: {},
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
                                        conditionLocation: {},
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
                expandMore: false,
                suffixEndpoint: "category/autres",
                selected: true,
                editable: true,
                isConditional: false,
                conditionValue: "",
                conditionLocation: {},
                expandOnboarding: true,
                defaultValue: false,
                deleteable: true,
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
                        conditionLocation: {},
                        deleteable: true,
                        subLevel: 1,
                        expandMore: false,
                    },
                ],
            },
        ];
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
    ngOnInit() {
        return __awaiter(this, void 0, void 0, function* () {
            this.id = this.route.snapshot.paramMap.get("id");
            this.form = this.fb.group({
                Name: ["", Validators.required],
                Picto: [""],
                Description: [""],
                Tags: ["", Validators.required],
                Status: [false, Validators.required],
            });
            this.form.valueChanges.subscribe(c => {
                this.canExit = false;
            });
            if (this.id !== "0") {
                this.currentProfil = yield this.service.getProfil(this.id);
                this.form.patchValue(this.currentProfil);
                this.categories = this.currentProfil.categories;
            }
            else {
                this.showProfileName = true;
                this.categories = this.defaultCategorie;
            }
            this.tags = yield this.service.getAllTags();
        });
    }
    onAddNewCategory(e) {
        e.preventDefault();
        this.canExit = false;
        this.categories.push({
            name: "",
            editable: true,
            isConditional: false,
            conditionValue: "",
            conditionLocation: {},
            deleteable: true,
            expandMore: true,
            suffixEndpoint: "",
            forms: [
                {
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
                    conditionLocation: {},
                },
            ],
        });
    }
    onAddNewField(...params) {
        this.canExit = false;
        const length = params.length;
        const forms = length === 1 ? this.categories[params[0]].forms : length === 2 ? this.categories[params[0]].forms[params[1]].forms : this.categories[params[0]].forms[params[1]].forms[params[2]].forms;
        forms.push({
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
            conditionLocation: {},
            subLevel: params.length,
        });
    }
    onAddNewSubLevelField(...params) {
        this.canExit = false;
        const length = params.length;
        const forms = length === 2 ? this.categories[params[0]].forms[params[length - 1]] : length === 3 ? this.categories[params[0]].forms[params[1]].forms[params[length - 1]] : this.categories[params[0]].forms[params[1]].forms[params[2]].forms[params[length - 1]];
        forms.expandMore = true;
        forms.forms = [];
        forms.forms.push({
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
            conditionLocation: {},
            subLevel: params.length,
            expandMore: true,
        });
    }
    onRemoveField(...params) {
        this.canExit = false;
        const length = params.length;
        const forms = length === 2 ? this.categories[params[0]].forms : length === 3 ? this.categories[params[0]].forms[params[1]].forms : this.categories[params[0]].forms[params[1]].forms[params[2]].forms;
        forms.splice(params[length - 1], 1);
    }
    onRemoveCategory(e, i) {
        e.preventDefault();
        this.categories.splice(i, 1);
        this.canExit = false;
    }
    onChangeCategory() {
        return this.categories.every((cat) => cat.name !== "" && cat.forms.every((field) => field.label !== "" && field.type !== ""));
    }
    onSubmit() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.form.valid && this.onChangeCategory()) {
                const expandCategories = this.categories
                    .filter((cat) => cat.expandOnboarding)
                    .map((cat) => {
                    if (cat.forms) {
                        const f = cat.forms
                            .filter((form) => form.expandOnboarding)
                            .map((sub) => {
                            if (sub.forms) {
                                const s = sub.forms.filter((child) => {
                                    if (child.forms) {
                                        const c = child.forms.filter((ch) => ch.expandOnboarding);
                                        return Object.assign(Object.assign({}, child), { forms: c });
                                    }
                                    return child;
                                });
                                return Object.assign(Object.assign({}, sub), { forms: s });
                            }
                            return sub;
                        });
                        return Object.assign(Object.assign({}, cat), { forms: f });
                    }
                    return cat;
                });
                const result = this.id !== "0"
                    ? yield this.service.updateProfil(Object.assign(Object.assign(Object.assign({}, this.currentProfil), this.form.value), { categories: expandCategories }))
                    : yield this.service.createProfil(Object.assign(Object.assign({}, this.form.value), { categories: expandCategories }));
                if (result) {
                    yield this.service.getAllProfil();
                    this.canExit = true;
                    this.router.navigate([this.service.mainPath]);
                }
                else {
                    console.log("errror......");
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
        else if (type === "checkbox") {
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
        const dialogRef = this.dialog.open(UpdateProfilComponent, {
            data: {
                matIconList: this.matIconList,
                form: this.form,
                tags: this.tags
            }
        });
        dialogRef.afterClosed().subscribe((confirmed) => {
            if (confirmed) {
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
        const type = (forms) => forms.type === 'select' || forms.type === 'checkobx' || forms.type === 'checkbox_multiple' || forms.type === 'radio';
        for (let i = 0; i < this.categories.length; i++) {
            for (let j = 0; j < this.categories[i].forms.length; j++) {
                const forms = this.categories[i].forms[j];
                if (type(forms)) {
                    conditionsList.push({
                        level: 1,
                        categoryIndex: i,
                        currentIndex: j,
                        possibleValues: forms.defaultValue,
                        label: `${this.categories[i].name} > ${forms.label}`
                    });
                }
                if (forms.forms) {
                    for (let k = 0; k < forms.forms.length; k++) {
                        const sub = forms.forms[k];
                        if (sub.type === 'checkbox' || sub.type === 'select' || sub.type === 'radio' || sub.type === 'checkbox_multiple') {
                            conditionsList.push({
                                level: 2,
                                categoryIndex: i,
                                formIndex: j,
                                currentIndex: k,
                                possibleValues: sub.defaultValue,
                                label: `${this.categories[i].name} > ${forms.label} > ${sub.label}`
                            });
                        }
                        if (sub.forms) {
                            for (let l = 0; l < sub.forms.length; l++) {
                                const child = sub.forms[l];
                                if (child.type === 'checkbox' || child.type === 'select' || child.type === 'radio' || child.type === 'checkbox_multiple') {
                                    conditionsList.push({
                                        level: 3,
                                        categoryIndex: i,
                                        formIndex: j,
                                        subIndex: l,
                                        currentIndex: k,
                                        possibleValues: child.defaultValue,
                                        label: `${this.categories[i].name} > ${forms.label} > ${sub.label} >  ${child.label}`
                                    });
                                }
                            }
                        }
                    }
                }
            }
        }
        console.log('----------------------', conditionsList);
        this.conditionData = conditionsList;
        console.log(conditionsList);
    }
}
TemplateProfileCreateComponent.ɵfac = function TemplateProfileCreateComponent_Factory(t) { return new (t || TemplateProfileCreateComponent)(i0.ɵɵdirectiveInject(i1.FormBuilder), i0.ɵɵdirectiveInject(i2.OnboardingService), i0.ɵɵdirectiveInject(i3.ActivatedRoute), i0.ɵɵdirectiveInject(i3.Router), i0.ɵɵdirectiveInject(i4.MatDialog)); };
TemplateProfileCreateComponent.ɵcmp = i0.ɵɵdefineComponent({ type: TemplateProfileCreateComponent, selectors: [["onboarding-create-profile-template"]], decls: 4, vars: 3, consts: [[3, "formGroup", "submit"], ["class", "box-title", 4, "ngIf"], ["class", "category", 4, "ngIf"], [1, "box-title"], [1, "box-title-content"], [1, "title"], [1, "profil-name-content"], ["mat-raised-button", "", "color", "primary", 1, "add-picto", 3, "click"], ["appearance", "outline", 1, "example-full-width"], ["type", "text", "matInput", "", "formControlName", "Name", "placeholder", "Ex. Manager"], ["class", "list-picto", 4, "ngIf"], ["type", "text", "matInput", "", "formControlName", "Description", "rows", "4", "placeholder", ""], ["formControlName", "Tags", "required", ""], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "Status", 1, "form-field"], [1, "link-create-profil"], ["mat-raised-button", "", "color", "primary", 1, "link-add-profil", 3, "disabled", "click"], [1, "list-picto"], [3, "color", "click", 4, "ngFor", "ngForOf"], [3, "click"], [3, "value"], [1, "category"], [1, "side-bar"], [1, "summary"], ["type", "I"], ["class", "li-title", 4, "ngFor", "ngForOf"], ["mat-button", "", 1, "add-category", "transparent", 3, "click"], ["mat-button", "", "type", "submit", 1, "register-button"], ["cdkDropListGroup", "", 1, "fields"], ["cdkDropList", "", 1, "example-list", "mt-20", 3, "cdkDropListData", "cdkDropListDropped"], ["parentList", "cdkDropList"], ["class", "category-item", "cdkDrag", "", 3, "id", 4, "ngFor", "ngForOf"], [1, "add-button-container"], [1, "li-title"], [3, "ngxScrollTo", "click", 4, "ngIf"], ["type", "text", 3, "ngModel", "ngModelOptions", "blur", "ngModelChange", 4, "ngIf"], [4, "ngFor", "ngForOf"], [3, "ngxScrollTo", "click"], ["type", "text", 3, "ngModel", "ngModelOptions", "blur", "ngModelChange"], ["edit", ""], [4, "ngIf"], [3, "ngxScrollTo"], ["cdkDrag", "", 1, "category-item", 3, "id"], ["cdkDragHandle", "", 1, "left-action", "move-icons"], ["mat-raised-button", "", 1, "transparent-button", 3, "disabled", "click"], [1, "field-content"], [1, "field-item"], ["type", "text", "required", "", "placeholder", "Saisir le nom de la cat\u00E9gorie", 1, "example-full-width", "input-category-name", 3, "readonly", "ngModel", "ngModelOptions", "ngModelChange"], ["cdkDropList", "", 3, "cdkDropListData", "cdkDropListDropped", 4, "ngIf"], ["mat-mini-fab", "", "color", "primary", 1, "expand-button", 3, "click"], ["cdkDropList", "", 3, "cdkDropListData", "cdkDropListDropped"], ["childList", "cdkDropList"], ["class", "", 3, "id", 4, "ngFor", "ngForOf"], [1, "", 3, "id"], ["cdkDrag", ""], [1, "fields-content"], [1, "button-action"], ["mat-mini-fab", "", "color", "warn", 1, "delete-field", "transparent-button", 3, "disabled", "click"], [1, "fields-container"], [3, "field", "length", "i", "j", "conditionData", "onAddKeywordFromInput", "onKeyPress", "onAddNewField", "onRemoveField", "onChangeType", "onRemoveKeyword", "onAddNewSubLevelField", "onExpendMore", "onChangeLabel", "onCheckedChip", "onDrop", "onCheckedDefault", "onGetConditionValues"], ["class", "child", 4, "ngIf"], ["class", "add-button-container add-button-sub-category", 4, "ngIf"], [1, "child"], [1, "button-action", "child-2-background"], [1, "button-action", "child-3-background"], [1, "add-button-container", "add-button-sub-category"], ["mat-raised-button", "", "color", "primary", 2, "margin", "10px auto", 3, "disabled", "click"]], template: function TemplateProfileCreateComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "main");
        i0.ɵɵelementStart(1, "form", 0);
        i0.ɵɵlistener("submit", function TemplateProfileCreateComponent_Template_form_submit_1_listener() { return ctx.onSubmit(); });
        i0.ɵɵtemplate(2, TemplateProfileCreateComponent_div_2_Template, 29, 7, "div", 1);
        i0.ɵɵtemplate(3, TemplateProfileCreateComponent_div_3_Template, 25, 4, "div", 2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("formGroup", ctx.form);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.showProfileName);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !ctx.showProfileName);
    } }, directives: [i1.ɵangular_packages_forms_forms_y, i1.NgControlStatusGroup, i1.FormGroupDirective, i5.NgIf, i6.MatButton, i7.MatIcon, i8.MatFormField, i8.MatLabel, i9.MatInput, i1.DefaultValueAccessor, i1.NgControlStatus, i1.FormControlName, i10.MatSelect, i1.RequiredValidator, i5.NgForOf, i11.MatCheckbox, i12.MatOption, i13.CdkDropListGroup, i13.CdkDropList, i14.ScrollToDirective, i1.NgModel, i13.CdkDrag, i13.CdkDragHandle, i15.SubTemplateProfileComponent], styles: ["main[_ngcontent-%COMP%]{background:no-repeat padding-box #f4f7f9;height:100vh;width:100%;display:flex;flex-direction:column;align-items:center}main[_ngcontent-%COMP%]   .disabled[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{background-color:transparent!important}main[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{display:flex;height:100%;width:100%}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]{width:786px;background:no-repeat padding-box #fff;border:1px solid #dce4e9;border-radius:6px;opacity:1;margin:auto;padding:0 25px;-ms-grid-row-align:center;align-self:center}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{text-align:center;font:900 32px/48px Nexa;letter-spacing:0;color:#171f26}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font:18px/24px Nexa Text;letter-spacing:0;color:#171f26}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .profil-name-content[_ngcontent-%COMP%]{display:flex;align-items:center;position:relative}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .profil-name-content[_ngcontent-%COMP%]   .add-picto[_ngcontent-%COMP%]{margin-right:15px;min-width:50px;width:30px;padding:9px 12px}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .profil-name-content[_ngcontent-%COMP%]   .add-picto[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin-right:10px}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .profil-name-content[_ngcontent-%COMP%]   .list-picto[_ngcontent-%COMP%]{position:absolute;height:200px;width:100%;background:no-repeat padding-box #fff;border:1px solid #171f26;border-radius:8px;top:100%;z-index:1}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .profil-name-content[_ngcontent-%COMP%]   .list-picto[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin:15px;border:none;font-size:40px}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .profil-name-content[_ngcontent-%COMP%]   .list-picto[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]:hover{color:#830b6b!important;cursor:pointer}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .box-title-content[_ngcontent-%COMP%]{width:100%;margin:25px auto}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font:900 32px/38px Nexa;letter-spacing:0;color:#171f26}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font:15px/26px Nexa Text;letter-spacing:0;color:#171f26;text-align:center}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .link-create-profil[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:center}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{text-align:center;border:1px solid #543cb6;border-radius:7px;padding:.7em 2em .5em;display:flex;align-items:center;background-color:transparent;font:bold 15px/17px Nexa;letter-spacing:0;color:#543cb6}main[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:space-between}.expand-button[_ngcontent-%COMP%]{color:#5a607f!important;background-color:transparent!important;box-shadow:none!important}.input-category-name[_ngcontent-%COMP%]{border:none;outline:0;text-align:left;font:bold 18px/48px Nexa Text;letter-spacing:0;color:#171f26}.example-full-width[_ngcontent-%COMP%]{width:100%}.field-action[_ngcontent-%COMP%]{width:10%}.field-size[_ngcontent-%COMP%]{width:90%;margin:auto 2% auto auto}  .mat-form-field-appearance-fill .mat-form-field-flex{background-color:#fff}  .mat-form-field-appearance-outline .mat-form-field-infix{padding:.5em 0}  .mat-select{padding:.5em 0}  .mat-form-field-appearance-fill .mat-form-field-underline::before{background-color:transparent}  .mat-form-field-wrapper{padding-bottom:0!important}[_nghost-%COMP%]     .cdk-drag-preview .input-category-name div.mat-form-field-outline-start, [_nghost-%COMP%]     .input-category-name div.mat-form-field-outline-start{border-color:0!important;border-width:0!important}[_nghost-%COMP%]     .input-category-name .mat-form-field-outline-gap{border-color:0!important;border-width:0!important}[_nghost-%COMP%]     .mat-checkbox-checked.mat-accent .mat-checkbox-background, [_nghost-%COMP%]     .mat-checkbox-indeterminate.mat-accent .mat-checkbox-background{background-color:transparent}[_nghost-%COMP%]     .input-category-name .mat-form-field-outline-end{border-color:0!important;border-width:0!important}[_nghost-%COMP%]     .input-category-name .mat-form-field-label-wrapper{display:none}[_nghost-%COMP%]     .input-category-name .mat-form-field-appearance-outline .mat-form-field-outline{color:transparent!important}[_nghost-%COMP%]     .input-category-name .mat-form-field-infix{border-top:none}.category-action[_ngcontent-%COMP%]{display:flex;width:100%}.delete-field[_ngcontent-%COMP%]{margin:auto 2%}.radio-group[_ngcontent-%COMP%]   .mat-radio-button[_ngcontent-%COMP%]{margin-right:10px}.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary[_ngcontent-%COMP%]{background-color:#3f51b5;color:#fff;min-height:20px;font-size:10px}.move-icons[_ngcontent-%COMP%]{cursor:move}.category-item[_ngcontent-%COMP%], .cdk-drag-placeholder[_ngcontent-%COMP%]{display:flex;align-items:baseline;width:100%;border:1px solid #dce4e9;border-radius:8px;background-color:#fff;margin-top:10px;min-height:60px}.category-item[_ngcontent-%COMP%]   .left-action[_ngcontent-%COMP%], .cdk-drag-placeholder[_ngcontent-%COMP%]   .left-action[_ngcontent-%COMP%]{height:auto;background-color:#49a094;padding-top:7px;width:40px;-ms-grid-row-align:stretch;align-self:stretch;border-top-left-radius:8px;border-bottom-left-radius:8px}.category-item[_ngcontent-%COMP%]   .left-action[_ngcontent-%COMP%]   .transparent-button[_ngcontent-%COMP%], .cdk-drag-placeholder[_ngcontent-%COMP%]   .left-action[_ngcontent-%COMP%]   .transparent-button[_ngcontent-%COMP%]{background-color:transparent;box-shadow:none;width:40px;padding:0;margin:0;min-width:auto;color:#fff}.category-item[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%], .cdk-drag-placeholder[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%]{width:100%;-ms-grid-row-align:center;align-self:center}.category-item[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%], .cdk-drag-placeholder[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;border:transparent!important}.category-item[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]   .mat-form-field-wrapper[_ngcontent-%COMP%]   .mat-form-field-flex[_ngcontent-%COMP%]   .mat-form-field-outline[_ngcontent-%COMP%], .category-item[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%]   .mat-form-field-outline[_ngcontent-%COMP%], .cdk-drag-placeholder[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]   .mat-form-field-wrapper[_ngcontent-%COMP%]   .mat-form-field-flex[_ngcontent-%COMP%]   .mat-form-field-outline[_ngcontent-%COMP%], .cdk-drag-placeholder[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%]   .mat-form-field-outline[_ngcontent-%COMP%]{color:transparent!important}.cdk-drag-preview[_ngcontent-%COMP%]{box-sizing:border-box;border-radius:4px;opacity:1}.cdk-drag-preview[_ngcontent-%COMP%]   .expand-button[_ngcontent-%COMP%]{color:#5a607f!important;background-color:transparent!important;box-shadow:none!important;margin-right:28px!important}.cdk-drag-placeholder[_ngcontent-%COMP%]{opacity:0}.cdk-drag-animating[_ngcontent-%COMP%], .example-list.cdk-drop-list-dragging[_ngcontent-%COMP%]   .category-item[_ngcontent-%COMP%]:not(.cdk-drag-placeholder){transition:transform 250ms cubic-bezier(0,0,.2,1)}.child[_ngcontent-%COMP%]{margin-left:0}.category[_ngcontent-%COMP%]{display:flex;flex-direction:row;width:100vw}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]{width:250px;background-color:#fff;margin:10px 20px;border-radius:5px;border:1px solid #dbcbcb96}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:25px;border-bottom:1px solid #dbcbcb96;margin:10px;padding-bottom:5px;font-family:\"Nexa Text\";display:flex;align-items:center}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin-left:15px;cursor:pointer}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]{font-weight:600;margin-left:-27px;font-size:15px;list-style-position:inside}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:5px;margin:5px auto;cursor:pointer;text-align:left;font:12px/19px Nexa Text;letter-spacing:0;color:#535760}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]{padding-left:0;margin-left:0}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.li-title[_ngcontent-%COMP%]{font-size:14px;font-weight:600}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.li-title[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:140px;outline:0;border:1px dashed grey}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.li-title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:inline-flex;align-items:center}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.li-title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin-left:10px;display:none}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.li-title[_ngcontent-%COMP%]:hover   mat-icon[_ngcontent-%COMP%]{display:initial!important}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.sub-title[_ngcontent-%COMP%]{list-style:none;padding-left:20px}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.sub-title.active[_ngcontent-%COMP%], .category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.sub-title.active[_ngcontent-%COMP%]::marker, .category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.sub-title[_ngcontent-%COMP%]:hover{font-weight:600;background:no-repeat padding-box #e5e8ee;border-radius:5px}.category[_ngcontent-%COMP%]   .fields[_ngcontent-%COMP%]{width:90%;max-height:100vh;overflow:auto;margin-right:.5%;overflow-x:hidden}.category[_ngcontent-%COMP%]   .disabled[_ngcontent-%COMP%]{background-color:#f4f7f9!important}.category[_ngcontent-%COMP%]   .expand-button[_ngcontent-%COMP%]{color:#5a607f!important;background-color:transparent!important;box-shadow:none!important;margin-right:28px!important}.category[_ngcontent-%COMP%]   .expand-button[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%]{font-size:40px}.category[_ngcontent-%COMP%]   .transparent-button[_ngcontent-%COMP%]{background-color:transparent;box-shadow:none;width:40px;padding:0;margin:0;margin-left:0!important;min-width:auto;color:#fff}.add-button-sub-category[_ngcontent-%COMP%]{width:95.5%!important;margin-bottom:22px;margin-left:22px}.add-button-container[_ngcontent-%COMP%]{background:no-repeat padding-box #fff;border:1px dashed #dce4e9;border-radius:8px;margin-top:10px;padding:10px;display:flex;justify-content:center;align-items:center;width:98.5%;margin-bottom:22px}.add-button-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{display:flex;align-items:center;background-color:transparent;border:none;cursor:pointer;font:17px/26px Nexa Text;letter-spacing:0;color:#c2c8d5;box-shadow:none}.add-category[_ngcontent-%COMP%]{border:1px dashed #c2c8d5;border-radius:5px;margin-left:10px;margin-bottom:10px;font:bold 12px/19px Nexa Text;letter-spacing:0;color:#c2c8d5;width:92%}.cdk-drag[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]{display:flex;height:100%;margin:0;width:100%;min-width:250px}.cdk-drag[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]   .button-action[_ngcontent-%COMP%]{background-color:#6fe8d7;-ms-grid-row-align:stretch;align-self:stretch;margin-top:0;margin-left:20px;border-bottom-left-radius:8px;border-top-left-radius:8px}.cdk-drag[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]   .button-action[_ngcontent-%COMP%]   .transparent-button[_ngcontent-%COMP%]{background-color:transparent;box-shadow:none;width:40px;padding:0;margin:0;min-width:auto;color:#fff}.cdk-drag[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]   .child-2-background[_ngcontent-%COMP%]{background-color:#cffaf4!important}.cdk-drag[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]   .child-3-background[_ngcontent-%COMP%]{background-color:#e5e8ee!important}.cdk-drag[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]   .fields-container[_ngcontent-%COMP%]{border:1px solid #dce4e9;border-radius:0 8px 8px 0;background-color:#fff;width:100%;padding-left:10px;padding-right:10px;padding-top:5px}.cdk-drag[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]   .fields-container[_ngcontent-%COMP%]   lib-sub-category[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;width:100%}.cdk-drag[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]   .fields-container[_ngcontent-%COMP%]   lib-sub-category[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]   .button-action[_ngcontent-%COMP%]{background-color:#6fe8d7;height:100%;margin:auto 15px auto auto;display:flex}.cdk-drag[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]   .fields-container[_ngcontent-%COMP%]   lib-sub-category[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]   .button-action[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{box-shadow:none;background-color:transparent;color:#fff}.side-bar[_ngcontent-%COMP%]{display:flex;flex-direction:column}.register-button[_ngcontent-%COMP%]{background:no-repeat padding-box #171f26!important;border:2px solid #192128!important;border-radius:8px;color:#fff!important;width:85%;margin-left:22px!important;border:none!important}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(TemplateProfileCreateComponent, [{
        type: Component,
        args: [{
                selector: "onboarding-create-profile-template",
                templateUrl: "./template-profile-create.component.html",
                styleUrls: ["./template-profile-create.component.scss"],
            }]
    }], function () { return [{ type: i1.FormBuilder }, { type: i2.OnboardingService }, { type: i3.ActivatedRoute }, { type: i3.Router }, { type: i4.MatDialog }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVtcGxhdGUtcHJvZmlsZS1jcmVhdGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vb25ib2FyZGluZy8iLCJzb3VyY2VzIjpbImxpYi90ZW1wbGF0ZS1wcm9maWxlLWNyZWF0ZS90ZW1wbGF0ZS1wcm9maWxlLWNyZWF0ZS5jb21wb25lbnQudHMiLCJsaWIvdGVtcGxhdGUtcHJvZmlsZS1jcmVhdGUvdGVtcGxhdGUtcHJvZmlsZS1jcmVhdGUuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQW9FLE1BQU0sZUFBZSxDQUFDO0FBQzVHLE9BQU8sRUFBMEIsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDcEUsT0FBTyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFJaEUsT0FBTyxFQUFlLGVBQWUsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRXpGLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHFEQUFxRCxDQUFDO0FBQzVGLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLG1EQUFtRCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDTWpFLG9DQUdJO0lBREEsd1JBQXlDO0lBQ3pDLFlBQ0o7SUFBQSxpQkFBVzs7OztJQUhQLCtGQUFzRTtJQUV0RSxlQUNKO0lBREksOENBQ0o7OztJQUxKLCtCQUNJO0lBQUEsdUdBR0k7SUFFUixpQkFBTTs7O0lBTFEsZUFBZ0M7SUFBaEMsNENBQWdDOzs7SUFjMUMsc0NBQW1EO0lBQUEsWUFBTztJQUFBLGlCQUFhOzs7SUFBbEMsK0JBQWE7SUFBQyxlQUFPO0lBQVAsNkJBQU87Ozs7SUEzQjFFLDhCQUNJO0lBQUEsOEJBQ0k7SUFBQSw2QkFBa0I7SUFBQSx3RUFBeUM7SUFBQSxpQkFBSztJQUNoRSx5QkFBRztJQUFBLHlIQUEwRjtJQUFBLGlCQUFJO0lBQ2pHLDhCQUNJO0lB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LENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsRUFBRTtnQkFDMUQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQzthQUNoRTtpQkFBTTtnQkFDTCxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7Z0JBQzdDLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7YUFDL0Q7U0FDRjthQUFNLElBQUksTUFBTSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFDOUIsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxFQUFFO2dCQUMzRSxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQzthQUNqRjtpQkFBTTtnQkFDTCxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7Z0JBQzdDLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7Z0JBQzlELElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO2FBQ2hGO1NBQ0Y7YUFBTTtZQUNMLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLEVBQUU7Z0JBQzVGLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQzthQUNsRztpQkFBTTtnQkFDTCxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7Z0JBQzdDLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7Z0JBQzlELElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxD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LENBQUM7UUFDMUIsTUFBTSxLQUFLLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQztRQUMxQixNQUFNLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDO1FBQzdCLE1BQU0sS0FBSyxHQUFHLE1BQU0sS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbFEsSUFBSSxLQUFLLEVBQUU7WUFDVCxNQUFNLFNBQVMsR0FBRyxLQUFLLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxLQUFLLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLENBQUM7WUFDcEgsSUFBSSxTQUFTLEtBQUssQ0FBQyxDQUFDLEVBQUU7Z0JBQ3BCLEtBQUssQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFDbkQsS0FBSyxD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QUFDLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNsUSxLQUFLLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUE7SUFFMUIsQ0FBQztJQUNELGFBQWEsQ0FBQyxLQUFVLEVBQUUsR0FBRyxNQUFNO1FBQ2pDLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ3JCLE1BQU0sTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUM7UUFDN0IsTUFBTSxLQUFLLEdBQUcsTUFBTSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJ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K0JBQ0k7UUFEcUIsMkdBQVUsY0FBVSxJQUFDO1FBQzFDLGdGQUNJO1FBd0NKLGdGQUNJO1FBbVFSLGlCQUFPO1FBQ1gsaUJBQU87O1FBL1NHLGVBQWtCO1FBQWxCLG9DQUFrQjtRQUNHLGVBQXVCO1FBQXZCLDBDQUF1QjtRQXlDeEIsZUFBd0I7UUFBeEIsMkNBQXdCOztrREQzQnpDLDhCQUE4QjtjQUwxQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLG9DQUFvQztnQkFDOUMsV0FBVyxFQUFFLDBDQUEwQztnQkFDdkQsU0FBUyxFQUFFLENBQUMsMENBQTBDLENBQUM7YUFDeEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkLCBFbGVtZW50UmVmLCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMsIERvQ2hlY2sgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1CdWlsZGVyLCBGb3JtR3JvdXAsIFZhbGlkYXRvcnMgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcbmltcG9ydCB7IEVOVEVSLCBDT01NQSwgU0VNSUNPTE9OIH0gZnJvbSBcIkBhbmd1bGFyL2Nkay9rZXljb2Rlc1wiO1xuaW1wb3J0IHsgTWF0Q2hpcElucHV0RXZlbnQgfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWwvY2hpcHNcIjtcbmltcG9ydCB7IE9uYm9hcmRpbmdTZXJ2aWNlIH0gZnJvbSBcIi4uL29uYm9hcmRpbmcuc2VydmljZVwiO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IENka0RyYWdEcm9wLCBtb3ZlSXRlbUluQXJyYXksIHRyYW5zZmVyQXJyYXlJdGVtIH0gZnJvbSBcIkBhbmd1bGFyL2Nkay9kcmFnLWRyb3BcIjtcbmltcG9ydCB7IE1hdERpYWxvZyB9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbC9kaWFsb2dcIjtcbmltcG9ydCB7IFVwZGF0ZVByb2ZpbENvbXBvbmVudCB9IGZyb20gJy4uL2NvbXBvbmVudHMvdXBkYXRlLXByb2ZpbC91cGRhdGUtcHJvZmlsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBFeGl0Q29uZmlybUNvbXBvbmVudCB9IGZyb20gJy4uL2NvbXBvbmVudHMvZXhpdC1jb25maXJtL2V4aXQtY29uZmlybS5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwib25ib2FyZGluZy1jcmVhdGUtcHJvZmlsZS10ZW1wbGF0ZVwiLFxuICB0ZW1wbGF0ZVVybDogXCIuL3RlbXBsYXRlLXByb2ZpbGUtY3JlYXRlLmNvbXBvbmVudC5odG1sXCIsXG4gIHN0eWxlVXJsczogW1wiLi90ZW1wbGF0ZS1wcm9maWxlLWNyZWF0ZS5jb21wb25lbnQuc2Nzc1wiXSxcbn0pXG5leHBvcnQgY2xhc3MgVGVtcGxhdGVQcm9maWxlQ3JlYXRlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgZm9ybTogRm9ybUdyb3VwO1xuICB2YWxpZENhdGVnb3J5ID0gZmFsc2U7XG4gIHNlcGFyYXRvcktleXNDb2RlcyA9IFtFTlRFUiwgQ09NTUEsIFNFTUlDT0xPTl07XG4gIGN1cnJlbnRQcm9maWw6IGFueSA9IHt9O1xuICBjYW5FeGl0ID0gdHJ1ZTtcbiAgdGFncyA9IFtdO1xuICBpZCA9IFwiMFwiO1xuICBwYXJlbnQgPSBbXTtcbiAgZWRpdEluZGV4ID0gbnVsbDtcbiAgc2hvd1Byb2ZpbGVOYW1lID0gZmFsc2U7XG4gIG1hdEljb25MaXN0ID0gW1xuICAgIHsgbmFtZTogJ2RldmVsb3Blcl9ib2FyZCcgfSxcbiAgICB7IG5hbWU6ICdjb250YWN0X3Bob25lJyB9LFxuICAgIHsgbmFtZTogJ2NvbnRhY3RfbWFpbCcgfSxcbiAgICB7IG5hbWU6ICdwbGF5X2NpcmNsZV9maWxsZWQnIH0sXG4gICAgeyBuYW1lOiAnY29udHJvbF9jYW1lcmEnIH0sXG4gICAgeyBuYW1lOiAnZXhwbGljaXQnIH0sXG4gICAgeyBuYW1lOiAncGVyc29uJyB9LFxuICAgIHsgbmFtZTogJ3Zpc2liaWxpdHknIH0sXG4gICAgeyBuYW1lOiAndmlkZW9fbGFiZWwnIH0sXG4gICAgeyBuYW1lOiAnYWRkX2NpcmNsZScgfSxcbiAgICB7IG5hbWU6ICd3YXRjaF9sYXRlcicgfSxcbiAgICB7IG5hbWU6ICd3aGVyZV90b192b3RlJyB9LFxuICAgIHsgbmFtZTogJ3dvcmsnIH0sXG4gICAgeyBuYW1lOiAnd2ViJyB9LFxuICAgIHsgbmFtZTogJ3doYXRzaG90JyB9LFxuICAgIHsgbmFtZTogJ3dpZmknIH0sXG4gICAgeyBuYW1lOiAnd29ya3NwYWNlcycgfSxcbiAgICB7IG5hbWU6ICd3Yl9jbG91ZHknIH0sXG4gICAgeyBuYW1lOiAnd2F2ZXMnIH0sXG4gICAgeyBuYW1lOiAnd2FybmluZycgfSxcbiAgICB7IG5hbWU6ICdzcGFjZV9kYXMnIH1cbiAgXTtcbiAgaXNQaWN0b0xpc3RTaG93OiBib29sZWFuO1xuICBwaWN0byA9IFwiXCI7XG4gIGNvbmRpdGlvbkRhdGE6IGFueVtdO1xuICBjYXRlZ29yaWVzPVtdXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZmI6IEZvcm1CdWlsZGVyLFxuICAgIHB1YmxpYyBzZXJ2aWNlOiBPbmJvYXJkaW5nU2VydmljZSxcbiAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgIHByaXZhdGUgZGlhbG9nOiBNYXREaWFsb2dcbiAgKSB7IH1cblxuICBkZWZhdWx0Q2F0ZWdvcmllOiBhbnkgPSBbXG4gICAge1xuICAgICAgbmFtZTogXCJVdGlsaXNhdGV1clwiLFxuICAgICAgZWRpdGFibGU6IGZhbHNlLFxuICAgICAgZGVsZXRlYWJsZTogZmFsc2UsXG4gICAgICBleHBhbmRNb3JlOiBmYWxzZSxcbiAgICAgIGV4cGFuZE9uYm9hcmRpbmc6dHJ1ZSxcbiAgICAgIGRlZmF1bHRWYWx1ZTogZmFsc2UsXG4gICAgICBzdWZmaXhFbmRwb2ludDogXCJjYXRlZ29yeS91c2VyXCIsXG4gICAgICBmb3JtczogW1xuICAgICAgICB7XG4gICAgICAgICAgbGFiZWw6IFwiQ2l2aWxpdMOpXCIsXG4gICAgICAgICAga2V5OiBcIlNhbHV0YXRpb25cIixcbiAgICAgICAgICBleHBhbmRPbmJvYXJkaW5nOnRydWUsXG4gICAgICAgICAgZGVmYXVsdFZhbHVlOiBbeyB2YWx1ZTogXCJNLlwiLCBjaGVja2VkOiBmYWxzZSB9LCB7IHZhbHVlOiBcIk1tZVwiLCBjaGVja2VkOiBmYWxzZSB9XSxcbiAgICAgICAgICB2YWx1ZTogbnVsbCxcbiAgICAgICAgICBzaXplOiAxMCxcbiAgICAgICAgICBpc01hbmRhdG9yeTogdHJ1ZSxcbiAgICAgICAgICBvdGhlclZhbHVlOicnLFxuICAgICAgICAgIHR5cGU6IFwic2VsZWN0XCIsXG4gICAgICAgICAgZWRpdGFibGU6IGZhbHNlLFxuICAgICAgICAgIGRlbGV0ZWFibGU6IGZhbHNlLFxuICAgICAgICAgIHN1YkxldmVsOiAxLFxuXG4gICAgICAgICAgZXhwYW5kTW9yZTogZmFsc2UsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBsYWJlbDogXCJUeXBlIGRlIHByb2ZpbFwiLFxuICAgICAgICAgIGtleTogXCJUeXBlX2RlX3Byb2ZpbF9Ob3dib2FyZF9fY1wiLFxuICAgICAgICAgIGV4cGFuZE9uYm9hcmRpbmc6dHJ1ZSxcbiAgICAgICAgICBkZWZhdWx0VmFsdWU6IFt7IHZhbHVlOiBcIk1hbmFnZXJcIiwgY2hlY2tlZDogZmFsc2UgfSwgeyB2YWx1ZTogXCJVdGlsaXNhdGV1clwiLCBjaGVja2VkOiBmYWxzZSB9XSxcbiAgICAgICAgICB2YWx1ZTogbnVsbCxcbiAgICAgICAgICBzaXplOiAxMCxcbiAgICAgICAgICBpc01hbmRhdG9yeTogdHJ1ZSxcbiAgICAgICAgICBvdGhlclZhbHVlOicnLFxuICAgICAgICAgIHR5cGU6IFwic2VsZWN0XCIsXG4gICAgICAgICAgZWRpdGFibGU6IGZhbHNlLFxuICAgICAgICAgIGRlbGV0ZWFibGU6IGZhbHNlLFxuICAgICAgICAgIHN1YkxldmVsOiAxLFxuICAgICAgICAgIGV4cGFuZE1vcmU6IGZhbHNlLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbGFiZWw6IFwiTm9tXCIsXG4gICAgICAgICAga2V5OiBcIkxhc3ROYW1lXCIsXG4gICAgICAgICAgZXhwYW5kT25ib2FyZGluZzp0cnVlLFxuICAgICAgICAgIGRlZmF1bHRWYWx1ZTogbnVsbCxcbiAgICAgICAgICB2YWx1ZTogbnVsbCxcbiAgICAgICAgICBzaXplOiA4MCxcbiAgICAgICAgICBpc01hbmRhdG9yeTogdHJ1ZSxcbiAgICAgICAgICBvdGhlclZhbHVlOicnLFxuICAgICAgICAgIHR5cGU6IFwidGV4dFwiLFxuICAgICAgICAgIGVkaXRhYmxlOiBmYWxzZSxcbiAgICAgICAgICBkZWxldGVhYmxlOiBmYWxzZSxcbiAgICAgICAgICBzdWJMZXZlbDogMSxcbiAgICAgICAgICBleHBhbmRNb3JlOiBmYWxzZSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGxhYmVsOiBcIlByw6lub21cIixcbiAgICAgICAgICBrZXk6IFwiRmlyc3ROYW1lXCIsXG4gICAgICAgICAgZXhwYW5kT25ib2FyZGluZzp0cnVlLFxuICAgICAgICAgIGRlZmF1bHRWYWx1ZTogbnVsbCxcbiAgICAgICAgICB2YWx1ZTogbnVsbCxcbiAgICAgICAgICBzaXplOiA4MCxcbiAgICAgICAgICBpc01hbmRhdG9yeTogdHJ1ZSxcbiAgICAgICAgICBvdGhlclZhbHVlOicnLFxuICAgICAgICAgIHR5cGU6IFwidGV4dFwiLFxuICAgICAgICAgIGVkaXRhYmxlOiBmYWxzZSxcbiAgICAgICAgICBkZWxldGVhYmxlOiBmYWxzZSxcbiAgICAgICAgICBzdWJMZXZlbDogMSxcbiAgICAgICAgICBleHBhbmRNb3JlOiBmYWxzZSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGxhYmVsOiBcIkVtYWlsXCIsXG4gICAgICAgICAga2V5OiBcIkVtYWlsXCIsXG4gICAgICAgICAgZXhwYW5kT25ib2FyZGluZzp0cnVlLFxuICAgICAgICAgIGRlZmF1bHRWYWx1ZTogbnVsbCxcbiAgICAgICAgICB2YWx1ZTogbnVsbCxcbiAgICAgICAgICBzaXplOiA4MCxcbiAgICAgICAgICBpc01hbmRhdG9yeTogdHJ1ZSxcbiAgICAgICAgICBvdGhlclZhbHVlOicnLFxuICAgICAgICAgIHR5cGU6IFwiZW1haWxcIixcbiAgICAgICAgICBlZGl0YWJsZTogZmFsc2UsXG4gICAgICAgICAgZGVsZXRlYWJsZTogZmFsc2UsXG4gICAgICAgICAgc3ViTGV2ZWw6IDEsXG4gICAgICAgICAgZXhwYW5kTW9yZTogZmFsc2UsXG4gICAgICAgIH0sXG5cbiAgICAgICAge1xuICAgICAgICAgIGxhYmVsOiBcIlTDqWzDqXBob25lIGZpeGVcIixcbiAgICAgICAgICBrZXk6IFwiUGhvbmVcIixcbiAgICAgICAgICBleHBhbmRPbmJvYXJkaW5nOnRydWUsXG4gICAgICAgICAgZGVmYXVsdFZhbHVlOiBudWxsLFxuICAgICAgICAgIHZhbHVlOiBudWxsLFxuICAgICAgICAgIHNpemU6IDIwLFxuICAgICAgICAgIGlzTWFuZGF0b3J5OiBmYWxzZSxcbiAgICAgICAgICBvdGhlclZhbHVlOicnLFxuICAgICAgICAgIHR5cGU6IFwidGVsXCIsXG4gICAgICAgICAgZWRpdGFibGU6IGZhbHNlLFxuICAgICAgICAgIGRlbGV0ZWFibGU6IGZhbHNlLFxuICAgICAgICAgIHN1YkxldmVsOiAxLFxuXG4gICAgICAgICAgZXhwYW5kTW9yZTogZmFsc2UsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBsYWJlbDogXCJUw6lsw6lwaG9uZSBwb3J0YWJsZVwiLFxuICAgICAgICAgIGtleTogXCJNb2JpbGVQaG9uZVwiLFxuICAgICAgICAgIGV4cGFuZE9uYm9hcmRpbmc6dHJ1ZSxcbiAgICAgICAgICBkZWZhdWx0VmFsdWU6IG51bGwsXG4gICAgICAgICAgdmFsdWU6IG51bGwsXG4gICAgICAgICAgc2l6ZTogMjAsXG4gICAgICAgICAgaXNNYW5kYXRvcnk6IGZhbHNlLFxuICAgICAgICAgIG90aGVyVmFsdWU6JycsXG4gICAgICAgICAgdHlwZTogXCJ0ZWxcIixcbiAgICAgICAgICBlZGl0YWJsZTogZmFsc2UsXG4gICAgICAgICAgZGVsZXRlYWJsZTogZmFsc2UsXG4gICAgICAgICAgc3ViTGV2ZWw6IDEsXG5cbiAgICAgICAgICBleHBhbmRNb3JlOiBmYWxzZSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGxhYmVsOiBcIkZvbmN0aW9uXCIsXG4gICAgICAgICAga2V5OiBcIlRpdGxlXCIsXG4gICAgICAgICAgZXhwYW5kT25ib2FyZGluZzp0cnVlLFxuICAgICAgICAgIGRlZmF1bHRWYWx1ZTogbnVsbCxcbiAgICAgICAgICB2YWx1ZTogbnVsbCxcbiAgICAgICAgICBzaXplOiA4MCxcbiAgICAgICAgICBpc01hbmRhdG9yeTogdHJ1ZSxcbiAgICAgICAgICBvdGhlclZhbHVlOicnLFxuICAgICAgICAgIHR5cGU6IFwidGV4dFwiLFxuICAgICAgICAgIGVkaXRhYmxlOiBmYWxzZSxcbiAgICAgICAgICBkZWxldGVhYmxlOiBmYWxzZSxcbiAgICAgICAgICBzdWJMZXZlbDogMSxcbiAgICAgICAgICBleHBhbmRNb3JlOiBmYWxzZSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGxhYmVsOiBcIkV0YWJsaXNzZW1lbnQgLyBTaXRlXCIsXG4gICAgICAgICAga2V5OiBcIkFjY291bnROYW1lXCIsXG4gICAgICAgICAgZXhwYW5kT25ib2FyZGluZzp0cnVlLFxuICAgICAgICAgIGRlZmF1bHRWYWx1ZTogbnVsbCxcbiAgICAgICAgICB2YWx1ZTogbnVsbCxcbiAgICAgICAgICBzaXplOiA4MCxcbiAgICAgICAgICBpc01hbmRhdG9yeTogdHJ1ZSxcbiAgICAgICAgICBvdGhlclZhbHVlOicnLFxuICAgICAgICAgIHR5cGU6IFwidGV4dFwiLFxuICAgICAgICAgIGVkaXRhYmxlOiBmYWxzZSxcbiAgICAgICAgICBkZWxldGVhYmxlOiBmYWxzZSxcbiAgICAgICAgICBzdWJMZXZlbDogMSxcbiAgICAgICAgICBleHBhbmRNb3JlOiBmYWxzZSxcbiAgICAgICAgfSxcbiAgICAgICAgLy8ge1xuICAgICAgICAvLyAgIGxhYmVsOiBcIklEXCIsXG4gICAgICAgIC8vICAga2V5OiBcIklkXCIsXG4gICAgICAgIC8vICAgZXhwYW5kT25ib2FyZGluZzp0cnVlLFxuICAgICAgICAvLyAgIGRlZmF1bHRWYWx1ZTogbnVsbCxcbiAgICAgICAgLy8gICB2YWx1ZTogbnVsbCxcbiAgICAgICAgLy8gICBzaXplOiA4MCxcbiAgICAgICAgLy8gICBpc01hbmRhdG9yeTogdHJ1ZSxcbiAgICAgICAgLy8gICBvdGhlclZhbHVlOicnLFxuICAgICAgICAvLyAgIHR5cGU6IFwidGV4dFwiLFxuICAgICAgICAvLyAgIGVkaXRhYmxlOiBmYWxzZSxcbiAgICAgICAgLy8gICBkZWxldGVhYmxlOiBmYWxzZSxcbiAgICAgICAgLy8gICBzdWJMZXZlbDogMSxcbiAgICAgICAgLy8gICBleHBhbmRNb3JlOiBmYWxzZSxcbiAgICAgICAgLy8gfSwge1xuICAgICAgICAvLyAgIGxhYmVsOiBcIkV0YWJsaXNzZW1lbnQgSURcIixcbiAgICAgICAgLy8gICBrZXk6IFwiQWNjb3VudElkXCIsXG4gICAgICAgIC8vICAgZXhwYW5kT25ib2FyZGluZzp0cnVlLFxuICAgICAgICAvLyAgIGRlZmF1bHRWYWx1ZTogbnVsbCxcbiAgICAgICAgLy8gICB2YWx1ZTogbnVsbCxcbiAgICAgICAgLy8gICBzaXplOiA4MCxcbiAgICAgICAgLy8gICBpc01hbmRhdG9yeTogdHJ1ZSxcbiAgICAgICAgLy8gICBvdGhlclZhbHVlOicnLFxuICAgICAgICAvLyAgIHR5cGU6IFwidGV4dFwiLFxuICAgICAgICAvLyAgIGVkaXRhYmxlOiBmYWxzZSxcbiAgICAgICAgLy8gICBkZWxldGVhYmxlOiBmYWxzZSxcbiAgICAgICAgLy8gICBzdWJMZXZlbDogMSxcbiAgICAgICAgLy8gICBleHBhbmRNb3JlOiBmYWxzZSxcbiAgICAgICAgLy8gfSxcbiAgICAgICAgXG4gICAgICAgIHtcbiAgICAgICAgICBsYWJlbDogXCJBY2PDqHMgYXUgcG9ydGFpbFwiLFxuICAgICAgICAgIGtleTogXCJBY2Nfc19hdV9wb3J0YWlsX2NsaWVudF9Ob3dCb2FyZF9fY1wiLFxuICAgICAgICAgIGV4cGFuZE9uYm9hcmRpbmc6dHJ1ZSxcbiAgICAgICAgICBkZWZhdWx0VmFsdWU6IFt7IHZhbHVlOiBcIk91aVwiLCBjaGVja2VkOiBmYWxzZSB9LCB7IHZhbHVlOiBcIk5vblwiLCBjaGVja2VkOiBmYWxzZSB9XSxcbiAgICAgICAgICB2YWx1ZTogbnVsbCxcbiAgICAgICAgICBzaXplOiAxMCxcbiAgICAgICAgICBpc01hbmRhdG9yeTogdHJ1ZSxcbiAgICAgICAgICBvdGhlclZhbHVlOicnLFxuICAgICAgICAgIHR5cGU6IFwic2VsZWN0XCIsXG4gICAgICAgICAgZWRpdGFibGU6IGZhbHNlLFxuICAgICAgICAgIGRlbGV0ZWFibGU6IGZhbHNlLFxuICAgICAgICAgIHN1YkxldmVsOiAxLFxuXG4gICAgICAgICAgZXhwYW5kTW9yZTogZmFsc2UsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBsYWJlbDogXCJMYW5ndWVcIixcbiAgICAgICAgICBrZXk6IFwiTGFuZ3VlX21hdGVybmVsbGVfX2NcIixcbiAgICAgICAgICBleHBhbmRPbmJvYXJkaW5nOnRydWUsXG4gICAgICAgICAgZGVmYXVsdFZhbHVlOiBbeyB2YWx1ZTogXCJGcmFuw6dhaXNcIiwgY2hlY2tlZDogZmFsc2UgfSwgeyB2YWx1ZTogXCJBbmdsYWlzXCIsIGNoZWNrZWQ6IGZhbHNlIH1dLFxuICAgICAgICAgIHZhbHVlOiBudWxsLFxuICAgICAgICAgIHNpemU6IDEwLFxuICAgICAgICAgIGlzTWFuZGF0b3J5OiB0cnVlLFxuICAgICAgICAgIG90aGVyVmFsdWU6JycsXG4gICAgICAgICAgdHlwZTogXCJzZWxlY3RcIixcbiAgICAgICAgICBlZGl0YWJsZTogZmFsc2UsXG4gICAgICAgICAgZGVsZXRlYWJsZTogZmFsc2UsXG4gICAgICAgICAgc3ViTGV2ZWw6IDEsXG4gICAgICAgICAgZXhwYW5kTW9yZTogZmFsc2UsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBsYWJlbDogXCJBIHF1aXR0w6kgbGEgc29jacOpdMOpXCIsXG4gICAgICAgICAga2V5OiBcIkFfcXVpdHRfbGFfc29jaV90X19jXCIsXG4gICAgICAgICAgZXhwYW5kT25ib2FyZGluZzp0cnVlLFxuICAgICAgICAgIGRlZmF1bHRWYWx1ZTogW3sgdmFsdWU6IFwiT3VpXCIsIGNoZWNrZWQ6IGZhbHNlIH0sIHsgdmFsdWU6IFwiTm9uXCIsIGNoZWNrZWQ6IGZhbHNlIH1dLFxuICAgICAgICAgIHZhbHVlOiBudWxsLFxuICAgICAgICAgIHNpemU6IDEwLFxuICAgICAgICAgIGlzTWFuZGF0b3J5OiB0cnVlLFxuICAgICAgICAgIG90aGVyVmFsdWU6JycsXG4gICAgICAgICAgdHlwZTogXCJzZWxlY3RcIixcbiAgICAgICAgICBlZGl0YWJsZTogZmFsc2UsXG4gICAgICAgICAgZGVsZXRlYWJsZTogZmFsc2UsXG4gICAgICAgICAgc3ViTGV2ZWw6IDEsXG4gICAgICAgICAgZXhwYW5kTW9yZTogZmFsc2UsXG4gICAgICAgIH0sXG5cbiAgICAgIF0sXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcIlNlc3Npb24gZCd1dGlsaXNhdGV1clwiLFxuICAgICAgZWRpdGFibGU6IHRydWUsXG4gICAgICBpc0NvbmRpdGlvbmFsOiBmYWxzZSxcbiAgICAgIGNvbmRpdGlvblZhbHVlOlwiXCIsXG4gICAgICBjb25kaXRpb25Mb2NhdGlvbjp7fSxcbiAgICAgIGRlbGV0ZWFibGU6IHRydWUsXG4gICAgICBzZWxlY3RlZDogdHJ1ZSxcbiAgICAgIGV4cGFuZE1vcmU6IGZhbHNlLFxuICAgICAgZXhwYW5kT25ib2FyZGluZzp0cnVlLFxuICAgICAgZGVmYXVsdFZhbHVlOiBmYWxzZSxcbiAgICAgIHN1ZmZpeEVuZHBvaW50OiBcImNhdGVnb3J5L3VzZXItc2Vzc2lvblwiLFxuICAgICAgZm9ybXM6IFtcbiAgICAgICAge1xuICAgICAgICAgIGxhYmVsOiBcIlV0aWxpc2F0ZXVyIGxvY2FsIMOgIGNyw6llclwiLFxuICAgICAgICAgIGtleTogXCJVc2VyTG9jYWxUb0NyZWF0ZVwiLFxuICAgICAgICAgIGV4cGFuZE9uYm9hcmRpbmc6dHJ1ZSxcbiAgICAgICAgICBkZWZhdWx0VmFsdWU6IG51bGwsXG4gICAgICAgICAgdmFsdWU6IG51bGwsXG4gICAgICAgICAgc2l6ZTogODAsXG4gICAgICAgICAgaXNNYW5kYXRvcnk6IGZhbHNlLFxuICAgICAgICAgIG90aGVyVmFsdWU6JycsXG4gICAgICAgICAgdHlwZTogXCJjaGVja2JveFwiLFxuICAgICAgICAgIGVkaXRhYmxlOiB0cnVlLFxuICAgICAgICAgIGlzQ29uZGl0aW9uYWw6IGZhbHNlLFxuICAgICAgICAgIGNvbmRpdGlvblZhbHVlOlwiXCIsXG4gICAgICAgICAgY29uZGl0aW9uTG9jYXRpb246e30sXG4gICAgICAgICAgZGVsZXRlYWJsZTogdHJ1ZSxcbiAgICAgICAgICBzdWJMZXZlbDogMSxcbiAgICAgICAgICBleHBhbmRNb3JlOiBmYWxzZSxcbiAgICAgICAgICBmb3JtczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBsYWJlbDogXCJMb2dpblwiLFxuICAgICAgICAgICAgICBrZXk6IFwiTG9naW5cIixcbiAgICAgICAgICAgICAgZXhwYW5kT25ib2FyZGluZzp0cnVlLFxuICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU6IG51bGwsXG4gICAgICAgICAgICAgIHZhbHVlOiBudWxsLFxuICAgICAgICAgICAgICBzaXplOiA4MCxcbiAgICAgICAgICAgICAgaXNNYW5kYXRvcnk6IHRydWUsXG4gICAgICAgICAgICAgIG90aGVyVmFsdWU6JycsXG4gICAgICAgICAgICAgIHR5cGU6IFwidGV4dFwiLFxuICAgICAgICAgICAgICBlZGl0YWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgaXNDb25kaXRpb25hbDogZmFsc2UsXG4gICAgICAgICAgICAgIGNvbmRpdGlvblZhbHVlOlwiXCIsXG4gICAgICAgICAgICAgIGNvbmRpdGlvbkxvY2F0aW9uOnt9LFxuICAgICAgICAgICAgICBkZWxldGVhYmxlOiBmYWxzZSxcbiAgICAgICAgICAgICAgc3ViTGV2ZWw6IDIsXG4gICAgICAgICAgICAgIGV4cGFuZE1vcmU6IGZhbHNlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbGFiZWw6IFwiTW90IGRlIHBhc3NlXCIsXG4gICAgICAgICAgICAgIGtleTogXCJQYXNzd29yZFwiLFxuICAgICAgICAgICAgICBleHBhbmRPbmJvYXJkaW5nOnRydWUsXG4gICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZTogbnVsbCxcbiAgICAgICAgICAgICAgdmFsdWU6IG51bGwsXG4gICAgICAgICAgICAgIHNpemU6IDgwLFxuICAgICAgICAgICAgICBpc01hbmRhdG9yeTogdHJ1ZSxcbiAgICAgICAgICAgICAgb3RoZXJWYWx1ZTonJyxcbiAgICAgICAgICAgICAgdHlwZTogXCJwYXNzd29yZFwiLFxuICAgICAgICAgICAgICBlZGl0YWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgaXNDb25kaXRpb25hbDogZmFsc2UsXG4gICAgICAgICAgICAgIGNvbmRpdGlvblZhbHVlOlwiXCIsXG4gICAgICAgICAgICAgIGNvbmRpdGlvbkxvY2F0aW9uOnt9LFxuICAgICAgICAgICAgICBkZWxldGVhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICBzdWJMZXZlbDogMixcbiAgICAgICAgICAgICAgZXhwYW5kTW9yZTogZmFsc2UsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBsYWJlbDogXCJVdGlsaXNhdGV1ciBBRCAoc2VydmV1cikgw6AgY3LDqWVyXCIsXG4gICAgICAgICAga2V5OiBcIlVzZXJTZXJ2ZXJUb0NyZWF0ZVwiLFxuICAgICAgICAgIGV4cGFuZE9uYm9hcmRpbmc6dHJ1ZSxcbiAgICAgICAgICBkZWZhdWx0VmFsdWU6IG51bGwsXG4gICAgICAgICAgdmFsdWU6IG51bGwsXG4gICAgICAgICAgc2l6ZTogODAsXG4gICAgICAgICAgaXNNYW5kYXRvcnk6IGZhbHNlLFxuICAgICAgICAgIG90aGVyVmFsdWU6JycsXG4gICAgICAgICAgdHlwZTogXCJjaGVja2JveFwiLFxuICAgICAgICAgIGVkaXRhYmxlOiB0cnVlLFxuICAgICAgICAgIGlzQ29uZGl0aW9uYWw6IGZhbHNlLFxuICAgICAgICAgIGNvbmRpdGlvblZhbHVlOlwiXCIsXG4gICAgICAgICAgY29uZGl0aW9uTG9jYXRpb246e30sXG4gICAgICAgICAgZGVsZXRlYWJsZTogdHJ1ZSxcbiAgICAgICAgICBzdWJMZXZlbDogMSxcbiAgICAgICAgICBleHBhbmRNb3JlOiBmYWxzZSxcbiAgICAgICAgICBmb3JtczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBsYWJlbDogXCJOb20gZGUgZG9tYWluZVwiLFxuICAgICAgICAgICAgICBrZXk6IFwiRG9tYWluTmFtZVwiLFxuICAgICAgICAgICAgICBleHBhbmRPbmJvYXJkaW5nOnRydWUsXG4gICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZTogbnVsbCxcbiAgICAgICAgICAgICAgdmFsdWU6IG51bGwsXG4gICAgICAgICAgICAgIHNpemU6IDgwLFxuICAgICAgICAgICAgICBpc01hbmRhdG9yeTogdHJ1ZSxcbiAgICAgICAgICAgICAgb3RoZXJWYWx1ZTonJyxcbiAgICAgICAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgIGVkaXRhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICBpc0NvbmRpdGlvbmFsOiBmYWxzZSxcbiAgICAgICAgICAgICAgY29uZGl0aW9uVmFsdWU6XCJcIixcbiAgICAgICAgICAgICAgY29uZGl0aW9uTG9jYXRpb246e30sXG4gICAgICAgICAgICAgIGRlbGV0ZWFibGU6IGZhbHNlLFxuICAgICAgICAgICAgICBzdWJMZXZlbDogMixcbiAgICAgICAgICAgICAgZXhwYW5kTW9yZTogZmFsc2UsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBsYWJlbDogXCJWb3RyZSBsb2dpblwiLFxuICAgICAgICAgICAgICBrZXk6IFwiWW91ckxvZ2luXCIsXG4gICAgICAgICAgICAgIGV4cGFuZE9uYm9hcmRpbmc6dHJ1ZSxcbiAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlOiBudWxsLFxuICAgICAgICAgICAgICB2YWx1ZTogbnVsbCxcbiAgICAgICAgICAgICAgc2l6ZTogODAsXG4gICAgICAgICAgICAgIGlzTWFuZGF0b3J5OiB0cnVlLFxuICAgICAgICAgICAgICBvdGhlclZhbHVlOicnLFxuICAgICAgICAgICAgICB0eXBlOiBcInRleHRcIixcbiAgICAgICAgICAgICAgZWRpdGFibGU6IHRydWUsXG4gICAgICAgICAgICAgIGlzQ29uZGl0aW9uYWw6IGZhbHNlLFxuICAgICAgICAgICAgICBjb25kaXRpb25WYWx1ZTpcIlwiLFxuICAgICAgICAgICAgICBjb25kaXRpb25Mb2NhdGlvbjp7fSxcbiAgICAgICAgICAgICAgZGVsZXRlYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgc3ViTGV2ZWw6IDIsXG4gICAgICAgICAgICAgIGV4cGFuZE1vcmU6IGZhbHNlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbGFiZWw6IFwiVm90cmUgbW90IGRlIHBhc3NlLlwiLFxuICAgICAgICAgICAgICBrZXk6IFwiWW91clBhc3N3b3JkXCIsXG4gICAgICAgICAgICAgIGV4cGFuZE9uYm9hcmRpbmc6dHJ1ZSxcbiAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlOiBudWxsLFxuICAgICAgICAgICAgICB2YWx1ZTogbnVsbCxcbiAgICAgICAgICAgICAgc2l6ZTogODAsXG4gICAgICAgICAgICAgIGlzTWFuZGF0b3J5OiB0cnVlLFxuICAgICAgICAgICAgICBvdGhlclZhbHVlOicnLFxuICAgICAgICAgICAgICB0eXBlOiBcInBhc3N3b3JkXCIsXG4gICAgICAgICAgICAgIGVkaXRhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICBpc0NvbmRpdGlvbmFsOiBmYWxzZSxcbiAgICAgICAgICAgICAgY29uZGl0aW9uVmFsdWU6XCJcIixcbiAgICAgICAgICAgICAgY29uZGl0aW9uTG9jYXRpb246e30sXG4gICAgICAgICAgICAgIGRlbGV0ZWFibGU6IHRydWUsXG4gICAgICAgICAgICAgIHN1YkxldmVsOiAyLFxuICAgICAgICAgICAgICBleHBhbmRNb3JlOiBmYWxzZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGxhYmVsOiBcIkdyb3VwZSBkZSBzw6ljdXJpdMOpXCIsXG4gICAgICAgICAgICAgIGtleTogXCJHcm91cFNlY3VyaXR5XCIsXG4gICAgICAgICAgICAgIGV4cGFuZE9uYm9hcmRpbmc6dHJ1ZSxcbiAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlOiBudWxsLFxuICAgICAgICAgICAgICB2YWx1ZTogbnVsbCxcbiAgICAgICAgICAgICAgc2l6ZTogODAsXG4gICAgICAgICAgICAgIGlzTWFuZGF0b3J5OiB0cnVlLFxuICAgICAgICAgICAgICBvdGhlclZhbHVlOicnLFxuICAgICAgICAgICAgICB0eXBlOiBcImNoZWNrYm94XCIsXG4gICAgICAgICAgICAgIGVkaXRhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICBpc0NvbmRpdGlvbmFsOiBmYWxzZSxcbiAgICAgICAgICAgICAgY29uZGl0aW9uVmFsdWU6XCJcIixcbiAgICAgICAgICAgICAgY29uZGl0aW9uTG9jYXRpb246e30sXG4gICAgICAgICAgICAgIGRlbGV0ZWFibGU6IHRydWUsXG4gICAgICAgICAgICAgIHN1YkxldmVsOiAyLFxuICAgICAgICAgICAgICBleHBhbmRNb3JlOiBmYWxzZSxcbiAgICAgICAgICAgICAgZm9ybXM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBsYWJlbDogXCJVdGlsaXNhdGV1ciBhdmVjIGxlcyBkcm9pdHMgc2ltaWxhaXJlcyAqXCIsXG4gICAgICAgICAgICAgICAgICBrZXk6IFwiVXNlcldpdGhTaW1pbGFyQWNjZXNzXCIsXG4gICAgICAgICAgICAgICAgICBleHBhbmRPbmJvYXJkaW5nOnRydWUsXG4gICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU6IG51bGwsXG4gICAgICAgICAgICAgICAgICB2YWx1ZTogbnVsbCxcbiAgICAgICAgICAgICAgICAgIHNpemU6IDgwLFxuICAgICAgICAgICAgICAgICAgaXNNYW5kYXRvcnk6IHRydWUsXG4gICAgICAgICAgICAgICAgICBvdGhlclZhbHVlOicnLFxuICAgICAgICAgICAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICBlZGl0YWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgIGlzQ29uZGl0aW9uYWw6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgY29uZGl0aW9uVmFsdWU6XCJcIixcbiAgICAgICAgICAgICAgICAgIGNvbmRpdGlvbkxvY2F0aW9uOnt9LFxuICAgICAgICAgICAgICAgICAgZGVsZXRlYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgIHN1YkxldmVsOiAzLFxuICAgICAgICAgICAgICAgICAgZXhwYW5kTW9yZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBsYWJlbDogXCJEZXNjcmlwdGlvbnNcIixcbiAgICAgICAgICAgICAgICAgIGtleTogXCJEZXNjcmlwdGlvblwiLFxuICAgICAgICAgICAgICAgICAgZXhwYW5kT25ib2FyZGluZzp0cnVlLFxuICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlOiBudWxsLFxuICAgICAgICAgICAgICAgICAgdmFsdWU6IG51bGwsXG4gICAgICAgICAgICAgICAgICBzaXplOiAyNTUsXG4gICAgICAgICAgICAgICAgICBpc01hbmRhdG9yeTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgIG90aGVyVmFsdWU6JycsXG4gICAgICAgICAgICAgICAgICB0eXBlOiBcInRleHRhcmVhXCIsXG4gICAgICAgICAgICAgICAgICBlZGl0YWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgIGlzQ29uZGl0aW9uYWw6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgY29uZGl0aW9uVmFsdWU6XCJcIixcbiAgICAgICAgICAgICAgICAgIGNvbmRpdGlvbkxvY2F0aW9uOnt9LFxuICAgICAgICAgICAgICAgICAgZGVsZXRlYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgIHN1YkxldmVsOiAzLFxuICAgICAgICAgICAgICAgICAgZXhwYW5kTW9yZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcIk1lc3NhZ2VyaWVcIixcbiAgICAgIGV4cGFuZE1vcmU6IGZhbHNlLFxuICAgICAgc3VmZml4RW5kcG9pbnQ6IFwiY2F0ZWdvcnkvbWVzc2FnZXJpZVwiLFxuICAgICAgc2VsZWN0ZWQ6IHRydWUsXG4gICAgICBlZGl0YWJsZTogdHJ1ZSxcbiAgICAgIGlzQ29uZGl0aW9uYWw6IGZhbHNlLFxuICAgICAgY29uZGl0aW9uVmFsdWU6XCJcIixcbiAgICAgIGNvbmRpdGlvbkxvY2F0aW9uOnt9LFxuICAgICAgZGVsZXRlYWJsZTogdHJ1ZSxcbiAgICAgIGV4cGFuZE9uYm9hcmRpbmc6dHJ1ZSxcbiAgICAgIGRlZmF1bHRWYWx1ZTogZmFsc2UsXG4gICAgICBmb3JtczogW1xuICAgICAgICB7XG4gICAgICAgICAgbGFiZWw6IFwiQWRyZXNzZSBtYWlsIMOgIGNyw6llci5cIixcbiAgICAgICAgICBrZXk6IFwiRW1haWxUb0NyZWF0ZVwiLFxuICAgICAgICAgIGV4cGFuZE9uYm9hcmRpbmc6dHJ1ZSxcbiAgICAgICAgICBkZWZhdWx0VmFsdWU6IG51bGwsXG4gICAgICAgICAgdmFsdWU6IG51bGwsXG4gICAgICAgICAgc2l6ZTogODAsXG4gICAgICAgICAgaXNNYW5kYXRvcnk6IHRydWUsXG4gICAgICAgICAgb3RoZXJWYWx1ZTonJyxcbiAgICAgICAgICB0eXBlOiBcImNoZWNrYm94XCIsXG4gICAgICAgICAgZWRpdGFibGU6IHRydWUsXG4gICAgICAgICAgaXNDb25kaXRpb25hbDogZmFsc2UsXG4gICAgICAgICAgY29uZGl0aW9uVmFsdWU6XCJcIixcbiAgICAgICAgICBjb25kaXRpb25Mb2NhdGlvbjp7fSxcbiAgICAgICAgICBkZWxldGVhYmxlOiB0cnVlLFxuICAgICAgICAgIHN1YkxldmVsOiAxLFxuICAgICAgICAgIGV4cGFuZE1vcmU6IGZhbHNlLFxuICAgICAgICAgIGZvcm1zOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGxhYmVsOiBcIkFkcmVzc2UgbWFpbFwiLFxuICAgICAgICAgICAgICBrZXk6IFwiRW1haWxcIixcbiAgICAgICAgICAgICAgZXhwYW5kT25ib2FyZGluZzp0cnVlLFxuICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU6IG51bGwsXG4gICAgICAgICAgICAgIHZhbHVlOiBudWxsLFxuICAgICAgICAgICAgICBzaXplOiA4MCxcbiAgICAgICAgICAgICAgaXNNYW5kYXRvcnk6IHRydWUsXG4gICAgICAgICAgICAgIG90aGVyVmFsdWU6JycsXG4gICAgICAgICAgICAgIHR5cGU6IFwiZW1haWxcIixcbiAgICAgICAgICAgICAgZWRpdGFibGU6IHRydWUsXG4gICAgICAgICAgICAgIGlzQ29uZGl0aW9uYWw6IGZhbHNlLFxuICAgICAgICAgICAgICBjb25kaXRpb25WYWx1ZTpcIlwiLFxuICAgICAgICAgICAgICBjb25kaXRpb25Mb2NhdGlvbjp7fSxcbiAgICAgICAgICAgICAgZGVsZXRlYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgc3ViTGV2ZWw6IDIsXG4gICAgICAgICAgICAgIGV4cGFuZE1vcmU6IGZhbHNlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbGFiZWw6IFwiVHlwZSBkZSBsaWNlbmNlIChzaSBnw6lyw6llcyBwYXIgbGUgY2xpZW50KVwiLFxuICAgICAgICAgICAgICBrZXk6IFwiU2VyaWFsS2V5XCIsXG4gICAgICAgICAgICAgIGV4cGFuZE9uYm9hcmRpbmc6dHJ1ZSxcbiAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlOiBudWxsLFxuICAgICAgICAgICAgICB2YWx1ZTogbnVsbCxcbiAgICAgICAgICAgICAgc2l6ZTogMTAwMCxcbiAgICAgICAgICAgICAgaXNNYW5kYXRvcnk6IHRydWUsXG4gICAgICAgICAgICAgIG90aGVyVmFsdWU6JycsXG4gICAgICAgICAgICAgIHR5cGU6IFwidGV4dFwiLFxuICAgICAgICAgICAgICBlZGl0YWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgaXNDb25kaXRpb25hbDogZmFsc2UsXG4gICAgICAgICAgICAgIGNvbmRpdGlvblZhbHVlOlwiXCIsXG4gICAgICAgICAgICAgIGNvbmRpdGlvbkxvY2F0aW9uOnt9LFxuICAgICAgICAgICAgICBkZWxldGVhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICBzdWJMZXZlbDogMixcbiAgICAgICAgICAgICAgZXhwYW5kTW9yZTogZmFsc2UsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBsYWJlbDogXCJMaXN0ZXMgIGRlIGRpc3RyaWJ1dGlvbi5cIixcbiAgICAgICAgICBrZXk6IFwiRGlzdHJpYnV0aW9uTGlzdFwiLFxuICAgICAgICAgIGV4cGFuZE9uYm9hcmRpbmc6dHJ1ZSxcbiAgICAgICAgICBkZWZhdWx0VmFsdWU6IG51bGwsXG4gICAgICAgICAgdmFsdWU6IG51bGwsXG4gICAgICAgICAgc2l6ZTogODAsXG4gICAgICAgICAgaXNNYW5kYXRvcnk6IHRydWUsXG4gICAgICAgICAgb3RoZXJWYWx1ZTonJyxcbiAgICAgICAgICB0eXBlOiBcImNoZWNrYm94XCIsXG4gICAgICAgICAgZWRpdGFibGU6IHRydWUsXG4gICAgICAgICAgaXNDb25kaXRpb25hbDogZmFsc2UsXG4gICAgICAgICAgY29uZGl0aW9uVmFsdWU6XCJcIixcbiAgICAgICAgICBjb25kaXRpb25Mb2NhdGlvbjp7fSxcbiAgICAgICAgICBkZWxldGVhYmxlOiB0cnVlLFxuICAgICAgICAgIHN1YkxldmVsOiAxLFxuICAgICAgICAgIGV4cGFuZE1vcmU6IGZhbHNlLFxuICAgICAgICAgIGZvcm1zOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGxhYmVsOiBcIlV0aWxpc2F0ZXVyIGF2ZWMgbGVzIGxpc3RlcyBzaW1pbGFpcmVzICpcIixcbiAgICAgICAgICAgICAga2V5OiBcIlVzZXJXaXRoU2ltaWxhckxpc3RcIixcbiAgICAgICAgICAgICAgZXhwYW5kT25ib2FyZGluZzp0cnVlLFxuICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU6IG51bGwsXG4gICAgICAgICAgICAgIHZhbHVlOiBudWxsLFxuICAgICAgICAgICAgICBzaXplOiA4MCxcbiAgICAgICAgICAgICAgaXNNYW5kYXRvcnk6IHRydWUsXG4gICAgICAgICAgICAgIG90aGVyVmFsdWU6JycsXG4gICAgICAgICAgICAgIHR5cGU6IFwidGV4dFwiLFxuICAgICAgICAgICAgICBlZGl0YWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgaXNDb25kaXRpb25hbDogZmFsc2UsXG4gICAgICAgICAgICAgIGNvbmRpdGlvblZhbHVlOlwiXCIsXG4gICAgICAgICAgICAgIGNvbmRpdGlvbkxvY2F0aW9uOnt9LFxuICAgICAgICAgICAgICBkZWxldGVhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICBzdWJMZXZlbDogMixcbiAgICAgICAgICAgICAgZXhwYW5kTW9yZTogZmFsc2UsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBsYWJlbDogXCJEZXNjcmlwdGlvbnMuXCIsXG4gICAgICAgICAgICAgIGtleTogXCJEZXNjcmlwdGlvblwiLFxuICAgICAgICAgICAgICBleHBhbmRPbmJvYXJkaW5nOnRydWUsXG4gICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZTogbnVsbCxcbiAgICAgICAgICAgICAgdmFsdWU6IG51bGwsXG4gICAgICAgICAgICAgIHNpemU6IDEwMDAsXG4gICAgICAgICAgICAgIGlzTWFuZGF0b3J5OiB0cnVlLFxuICAgICAgICAgICAgICBvdGhlclZhbHVlOicnLFxuICAgICAgICAgICAgICB0eXBlOiBcInRleHRhcmVhXCIsXG4gICAgICAgICAgICAgIGVkaXRhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICBpc0NvbmRpdGlvbmFsOiBmYWxzZSxcbiAgICAgICAgICAgICAgY29uZGl0aW9uVmFsdWU6XCJcIixcbiAgICAgICAgICAgICAgY29uZGl0aW9uTG9jYXRpb246e30sXG4gICAgICAgICAgICAgIGRlbGV0ZWFibGU6IHRydWUsXG4gICAgICAgICAgICAgIHN1YkxldmVsOiAyLFxuICAgICAgICAgICAgICBleHBhbmRNb3JlOiBmYWxzZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGxhYmVsOiBcIkFqb3V0ZXIgZGVzIGJvaXRlcyBtYWlscyBkw6lsw6lndcOpcy5cIixcbiAgICAgICAgICBrZXk6IFwiQWRkSW5ib3hNYWlsRGVsZWdhdGVcIixcbiAgICAgICAgICBleHBhbmRPbmJvYXJkaW5nOnRydWUsXG4gICAgICAgICAgZGVmYXVsdFZhbHVlOiBudWxsLFxuICAgICAgICAgIHZhbHVlOiBudWxsLFxuICAgICAgICAgIHNpemU6IDgwLFxuICAgICAgICAgIGlzTWFuZGF0b3J5OiB0cnVlLFxuICAgICAgICAgIG90aGVyVmFsdWU6JycsXG4gICAgICAgICAgdHlwZTogXCJjaGVja2JveFwiLFxuICAgICAgICAgIGVkaXRhYmxlOiB0cnVlLFxuICAgICAgICAgIGlzQ29uZGl0aW9uYWw6IGZhbHNlLFxuICAgICAgICAgIGNvbmRpdGlvblZhbHVlOlwiXCIsXG4gICAgICAgICAgY29uZGl0aW9uTG9jYXRpb246e30sXG4gICAgICAgICAgZGVsZXRlYWJsZTogdHJ1ZSxcbiAgICAgICAgICBzdWJMZXZlbDogMSxcbiAgICAgICAgICBleHBhbmRNb3JlOiBmYWxzZSxcbiAgICAgICAgICBmb3JtczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBsYWJlbDogXCJEZXNjcmlwdGlvbnMuXCIsXG4gICAgICAgICAgICAgIGtleTogXCJEZXNjcmlwdGlvblwiLFxuICAgICAgICAgICAgICBleHBhbmRPbmJvYXJkaW5nOnRydWUsXG4gICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZTogbnVsbCxcbiAgICAgICAgICAgICAgdmFsdWU6IG51bGwsXG4gICAgICAgICAgICAgIHNpemU6IDEwMDAsXG4gICAgICAgICAgICAgIGlzTWFuZGF0b3J5OiB0cnVlLFxuICAgICAgICAgICAgICBvdGhlclZhbHVlOicnLFxuICAgICAgICAgICAgICB0eXBlOiBcInRleHRhcmVhXCIsXG4gICAgICAgICAgICAgIGVkaXRhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICBpc0NvbmRpdGlvbmFsOiBmYWxzZSxcbiAgICAgICAgICAgICAgY29uZGl0aW9uVmFsdWU6XCJcIixcbiAgICAgICAgICAgICAgY29uZGl0aW9uTG9jYXRpb246e30sXG4gICAgICAgICAgICAgIGRlbGV0ZWFibGU6IHRydWUsXG4gICAgICAgICAgICAgIHN1YkxldmVsOiAyLFxuICAgICAgICAgICAgICBleHBhbmRNb3JlOiBmYWxzZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcIlNlcnZldXJcIixcbiAgICAgIGV4cGFuZE1vcmU6IGZhbHNlLFxuICAgICAgc3VmZml4RW5kcG9pbnQ6IFwiY2F0ZWdvcnkvc2VydmV1clwiLFxuICAgICAgc2VsZWN0ZWQ6IHRydWUsXG4gICAgICBlZGl0YWJsZTogdHJ1ZSxcbiAgICAgIGlzQ29uZGl0aW9uYWw6IGZhbHNlLFxuICAgICAgY29uZGl0aW9uVmFsdWU6XCJcIixcbiAgICAgIGNvbmRpdGlvbkxvY2F0aW9uOnt9LFxuICAgICAgZGVsZXRlYWJsZTogdHJ1ZSxcbiAgICAgIGV4cGFuZE9uYm9hcmRpbmc6dHJ1ZSxcbiAgICAgIGRlZmF1bHRWYWx1ZTogZmFsc2UsXG4gICAgICBmb3JtczogW1xuICAgICAgICB7XG4gICAgICAgICAgbGFiZWw6IFwiQWNjw6hzIGF1eCBsZWN0ZXVycyByw6lzZWF1eC5cIixcbiAgICAgICAgICBrZXk6IFwiUmVhZE5ldHdvcmtBY2Nlc3NcIixcbiAgICAgICAgICBleHBhbmRPbmJvYXJkaW5nOnRydWUsXG4gICAgICAgICAgZGVmYXVsdFZhbHVlOiBudWxsLFxuICAgICAgICAgIHZhbHVlOiBudWxsLFxuICAgICAgICAgIHNpemU6IDgwLFxuICAgICAgICAgIGlzTWFuZGF0b3J5OiBmYWxzZSxcbiAgICAgICAgICBvdGhlclZhbHVlOicnLFxuICAgICAgICAgIHR5cGU6IFwiY2hlY2tib3hcIixcbiAgICAgICAgICBlZGl0YWJsZTogdHJ1ZSxcbiAgICAgICAgICBpc0NvbmRpdGlvbmFsOiBmYWxzZSxcbiAgICAgICAgICBjb25kaXRpb25WYWx1ZTpcIlwiLFxuICAgICAgICAgIGNvbmRpdGlvbkxvY2F0aW9uOnt9LFxuICAgICAgICAgIGRlbGV0ZWFibGU6IHRydWUsXG4gICAgICAgICAgc3ViTGV2ZWw6IDEsXG4gICAgICAgICAgZXhwYW5kTW9yZTogZmFsc2UsXG4gICAgICAgICAgZm9ybXM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbGFiZWw6IFwiTm9tIGR1IHNlcnZldXJcIixcbiAgICAgICAgICAgICAga2V5OiBcIlNlcnZlck5hbWVcIixcbiAgICAgICAgICAgICAgZXhwYW5kT25ib2FyZGluZzp0cnVlLFxuICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU6IG51bGwsXG4gICAgICAgICAgICAgIHZhbHVlOiBudWxsLFxuICAgICAgICAgICAgICBzaXplOiA4MCxcbiAgICAgICAgICAgICAgaXNNYW5kYXRvcnk6IHRydWUsXG4gICAgICAgICAgICAgIG90aGVyVmFsdWU6JycsXG4gICAgICAgICAgICAgIHR5cGU6IFwidGV4dFwiLFxuICAgICAgICAgICAgICBlZGl0YWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgaXNDb25kaXRpb25hbDogZmFsc2UsXG4gICAgICAgICAgICAgIGNvbmRpdGlvblZhbHVlOlwiXCIsXG4gICAgICAgICAgICAgIGNvbmRpdGlvbkxvY2F0aW9uOnt9LFxuICAgICAgICAgICAgICBkZWxldGVhYmxlOiBmYWxzZSxcbiAgICAgICAgICAgICAgc3ViTGV2ZWw6IDIsXG4gICAgICAgICAgICAgIGV4cGFuZE1vcmU6IGZhbHNlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbGFiZWw6IFwiQ2hlbWluIGR1IGRvc3NpZXJcIixcbiAgICAgICAgICAgICAga2V5OiBcIkZvbGRlclBhdGhcIixcbiAgICAgICAgICAgICAgZXhwYW5kT25ib2FyZGluZzp0cnVlLFxuICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU6IG51bGwsXG4gICAgICAgICAgICAgIHZhbHVlOiBudWxsLFxuICAgICAgICAgICAgICBzaXplOiA4MCxcbiAgICAgICAgICAgICAgaXNNYW5kYXRvcnk6IHRydWUsXG4gICAgICAgICAgICAgIG90aGVyVmFsdWU6JycsXG4gICAgICAgICAgICAgIHR5cGU6IFwidGV4dFwiLFxuICAgICAgICAgICAgICBlZGl0YWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgaXNDb25kaXRpb25hbDogZmFsc2UsXG4gICAgICAgICAgICAgIGNvbmRpdGlvblZhbHVlOlwiXCIsXG4gICAgICAgICAgICAgIGNvbmRpdGlvbkxvY2F0aW9uOnt9LFxuICAgICAgICAgICAgICBkZWxldGVhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICBzdWJMZXZlbDogMixcbiAgICAgICAgICAgICAgZXhwYW5kTW9yZTogZmFsc2UsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBsYWJlbDogXCJMZXR0cmUgw6AgYXR0cmlidWVyXCIsXG4gICAgICAgICAgICAgIGtleTogXCJBdHRyaWJ1dExldHRlclwiLFxuICAgICAgICAgICAgICBleHBhbmRPbmJvYXJkaW5nOnRydWUsXG4gICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZTogbnVsbCxcbiAgICAgICAgICAgICAgdmFsdWU6IG51bGwsXG4gICAgICAgICAgICAgIHNpemU6IDgwLFxuICAgICAgICAgICAgICBpc01hbmRhdG9yeTogdHJ1ZSxcbiAgICAgICAgICAgICAgb3RoZXJWYWx1ZTonJyxcbiAgICAgICAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgIGVkaXRhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICBpc0NvbmRpdGlvbmFsOiBmYWxzZSxcbiAgICAgICAgICAgICAgY29uZGl0aW9uVmFsdWU6XCJcIixcbiAgICAgICAgICAgICAgY29uZGl0aW9uTG9jYXRpb246e30sXG4gICAgICAgICAgICAgIGRlbGV0ZWFibGU6IHRydWUsXG4gICAgICAgICAgICAgIHN1YkxldmVsOiAyLFxuICAgICAgICAgICAgICBleHBhbmRNb3JlOiBmYWxzZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcIlZQTlwiLFxuICAgICAgZXhwYW5kTW9yZTogZmFsc2UsXG4gICAgICBzdWZmaXhFbmRwb2ludDogXCJjYXRlZ29yeS92cG5cIixcbiAgICAgIHNlbGVjdGVkOiB0cnVlLFxuICAgICAgZXhwYW5kT25ib2FyZGluZzp0cnVlLFxuICAgICAgZGVmYXVsdFZhbHVlOiBmYWxzZSxcbiAgICAgIGVkaXRhYmxlOiB0cnVlLFxuICAgICAgaXNDb25kaXRpb25hbDogZmFsc2UsXG4gICAgICBjb25kaXRpb25WYWx1ZTpcIlwiLFxuICAgICAgY29uZGl0aW9uTG9jYXRpb246e30sXG4gICAgICBkZWxldGVhYmxlOiB0cnVlLFxuICAgICAgZm9ybXM6IFtcbiAgICAgICAge1xuICAgICAgICAgIGxhYmVsOiBcIkFjY8OocyBhdSBWUE5cIixcbiAgICAgICAgICBrZXk6IFwiVnBuQWNjZXNzXCIsXG4gICAgICAgICAgZXhwYW5kT25ib2FyZGluZzp0cnVlLFxuICAgICAgICAgIGRlZmF1bHRWYWx1ZTogbnVsbCxcbiAgICAgICAgICB2YWx1ZTogbnVsbCxcbiAgICAgICAgICBzaXplOiA4MCxcbiAgICAgICAgICBpc01hbmRhdG9yeTogZmFsc2UsXG4gICAgICAgICAgb3RoZXJWYWx1ZTonJyxcbiAgICAgICAgICB0eXBlOiBcImNoZWNrYm94XCIsXG4gICAgICAgICAgZWRpdGFibGU6IHRydWUsXG4gICAgICAgICAgaXNDb25kaXRpb25hbDogZmFsc2UsXG4gICAgICAgICAgY29uZGl0aW9uVmFsdWU6XCJcIixcbiAgICAgICAgICBjb25kaXRpb25Mb2NhdGlvbjp7fSxcbiAgICAgICAgICBkZWxldGVhYmxlOiB0cnVlLFxuICAgICAgICAgIHN1YkxldmVsOiAxLFxuXG4gICAgICAgICAgZXhwYW5kTW9yZTogZmFsc2UsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJJbXByaW1hbnRlc1wiLFxuICAgICAgZXhwYW5kTW9yZTogZmFsc2UsXG4gICAgICBzdWZmaXhFbmRwb2ludDogXCJjYXRlZ29yeS9pbXByaW1lbnRlXCIsXG4gICAgICBzZWxlY3RlZDogdHJ1ZSxcbiAgICAgIGVkaXRhYmxlOiB0cnVlLFxuICAgICAgaXNDb25kaXRpb25hbDogZmFsc2UsXG4gICAgICBjb25kaXRpb25WYWx1ZTpcIlwiLFxuICAgICAgY29uZGl0aW9uTG9jYXRpb246e30sXG4gICAgICBkZWxldGVhYmxlOiB0cnVlLFxuICAgICAgZXhwYW5kT25ib2FyZGluZzp0cnVlLFxuICAgICAgZGVmYXVsdFZhbHVlOiBmYWxzZSxcbiAgICAgIGZvcm1zOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBsYWJlbDogXCJBY2PDqHMgYXV4IGltcHJpbWFudGVzLlwiLFxuICAgICAgICAgIGtleTogXCJQcmludGVyQWNjZXNzXCIsXG4gICAgICAgICAgZXhwYW5kT25ib2FyZGluZzp0cnVlLFxuICAgICAgICAgIGRlZmF1bHRWYWx1ZTogbnVsbCxcbiAgICAgICAgICB2YWx1ZTogbnVsbCxcbiAgICAgICAgICBzaXplOiA4MCxcbiAgICAgICAgICBpc01hbmRhdG9yeTogZmFsc2UsXG4gICAgICAgICAgb3RoZXJWYWx1ZTonJyxcbiAgICAgICAgICB0eXBlOiBcImNoZWNrYm94XCIsXG4gICAgICAgICAgZWRpdGFibGU6IHRydWUsXG4gICAgICAgICAgaXNDb25kaXRpb25hbDogZmFsc2UsXG4gICAgICAgICAgY29uZGl0aW9uVmFsdWU6XCJcIixcbiAgICAgICAgICBjb25kaXRpb25Mb2NhdGlvbjp7fSxcbiAgICAgICAgICBkZWxldGVhYmxlOiB0cnVlLFxuICAgICAgICAgIHN1YkxldmVsOiAxLFxuICAgICAgICAgIGV4cGFuZE1vcmU6IGZhbHNlLFxuICAgICAgICAgIGZvcm1zOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGxhYmVsOiBcIk5vbSAvIE1vZMOobGUgZGUgbCdpbXByaW1hbnRlIC8gbG9jYWxpc2F0aW9uXCIsXG4gICAgICAgICAgICAgIGtleTogXCJQcmludGVyTmFtZVwiLFxuICAgICAgICAgICAgICBleHBhbmRPbmJvYXJkaW5nOnRydWUsXG4gICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZTogbnVsbCxcbiAgICAgICAgICAgICAgdmFsdWU6IG51bGwsXG4gICAgICAgICAgICAgIHNpemU6IDEwMDAsXG4gICAgICAgICAgICAgIGlzTWFuZGF0b3J5OiB0cnVlLFxuICAgICAgICAgICAgICBvdGhlclZhbHVlOicnLFxuICAgICAgICAgICAgICB0eXBlOiBcInRleHRhcmVhXCIsXG4gICAgICAgICAgICAgIGVkaXRhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICBpc0NvbmRpdGlvbmFsOiBmYWxzZSxcbiAgICAgICAgICAgICAgY29uZGl0aW9uVmFsdWU6XCJcIixcbiAgICAgICAgICAgICAgY29uZGl0aW9uTG9jYXRpb246e30sXG4gICAgICAgICAgICAgIGRlbGV0ZWFibGU6IHRydWUsXG4gICAgICAgICAgICAgIHN1YkxldmVsOiAyLFxuICAgICAgICAgICAgICBleHBhbmRNb3JlOiBmYWxzZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcIkFwcGxpY2F0aW9uc1wiLFxuICAgICAgZXhwYW5kTW9yZTogZmFsc2UsXG4gICAgICBzdWZmaXhFbmRwb2ludDogXCJjYXRlZ29yeS9hcHBsaWNhdGlvblwiLFxuICAgICAgc2VsZWN0ZWQ6IHRydWUsXG4gICAgICBlZGl0YWJsZTogdHJ1ZSxcbiAgICAgIGlzQ29uZGl0aW9uYWw6IGZhbHNlLFxuICAgICAgY29uZGl0aW9uVmFsdWU6XCJcIixcbiAgICAgIGNvbmRpdGlvbkxvY2F0aW9uOnt9LFxuICAgICAgZXhwYW5kT25ib2FyZGluZzp0cnVlLFxuICAgICAgZGVmYXVsdFZhbHVlOiBmYWxzZSxcbiAgICAgIGRlbGV0ZWFibGU6IHRydWUsXG4gICAgICBmb3JtczogW1xuICAgICAgICB7XG4gICAgICAgICAgbGFiZWw6IFwiQWNjw6hzIGF1eCBhcHBsaWNhdGlvbnMgP1wiLFxuICAgICAgICAgIGtleTogXCJBcHBsaWNhdGlvbkFjY2Vzc1wiLFxuICAgICAgICAgIGV4cGFuZE9uYm9hcmRpbmc6dHJ1ZSxcbiAgICAgICAgICBkZWZhdWx0VmFsdWU6IG51bGwsXG4gICAgICAgICAgdmFsdWU6IG51bGwsXG4gICAgICAgICAgc2l6ZTogODAsXG4gICAgICAgICAgaXNNYW5kYXRvcnk6IGZhbHNlLFxuICAgICAgICAgIG90aGVyVmFsdWU6JycsXG4gICAgICAgICAgdHlwZTogXCJjaGVja2JveFwiLFxuICAgICAgICAgIGVkaXRhYmxlOiB0cnVlLFxuICAgICAgICAgIGlzQ29uZGl0aW9uYWw6IGZhbHNlLFxuICAgICAgICAgIGNvbmRpdGlvblZhbHVlOlwiXCIsXG4gICAgICAgICAgY29uZGl0aW9uTG9jYXRpb246e30sXG4gICAgICAgICAgZGVsZXRlYWJsZTogdHJ1ZSxcbiAgICAgICAgICBzdWJMZXZlbDogMSxcbiAgICAgICAgICBleHBhbmRNb3JlOiBmYWxzZSxcbiAgICAgICAgICBmb3JtczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBsYWJlbDogXCJEZXNjcmlwdGlvbnNcIixcbiAgICAgICAgICAgICAga2V5OiBcIkRlc2NyaXB0aW9uXCIsXG4gICAgICAgICAgICAgIGV4cGFuZE9uYm9hcmRpbmc6dHJ1ZSxcbiAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlOiBudWxsLFxuICAgICAgICAgICAgICB2YWx1ZTogbnVsbCxcbiAgICAgICAgICAgICAgc2l6ZTogMTAwMCxcbiAgICAgICAgICAgICAgaXNNYW5kYXRvcnk6IHRydWUsXG4gICAgICAgICAgICAgIG90aGVyVmFsdWU6JycsXG4gICAgICAgICAgICAgIHR5cGU6IFwidGV4dGFyZWFcIixcbiAgICAgICAgICAgICAgZWRpdGFibGU6IHRydWUsXG4gICAgICAgICAgICAgIGlzQ29uZGl0aW9uYWw6IGZhbHNlLFxuICAgICAgICAgICAgICBjb25kaXRpb25WYWx1ZTpcIlwiLFxuICAgICAgICAgICAgICBjb25kaXRpb25Mb2NhdGlvbjp7fSxcbiAgICAgICAgICAgICAgZGVsZXRlYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgc3ViTGV2ZWw6IDIsXG4gICAgICAgICAgICAgIGV4cGFuZE1vcmU6IGZhbHNlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwiUG9zdGVcIixcbiAgICAgIGV4cGFuZE1vcmU6IGZhbHNlLFxuICAgICAgc3VmZml4RW5kcG9pbnQ6IFwiY2F0ZWdvcnkvcG9zdGVcIixcbiAgICAgIHNlbGVjdGVkOiB0cnVlLFxuICAgICAgZXhwYW5kT25ib2FyZGluZzp0cnVlLFxuICAgICAgZGVmYXVsdFZhbHVlOiBmYWxzZSxcbiAgICAgIGVkaXRhYmxlOiB0cnVlLFxuICAgICAgaXNDb25kaXRpb25hbDogZmFsc2UsXG4gICAgICBjb25kaXRpb25WYWx1ZTpcIlwiLFxuICAgICAgY29uZGl0aW9uTG9jYXRpb246e30sXG4gICAgICBkZWxldGVhYmxlOiB0cnVlLFxuICAgICAgZm9ybXM6IFtcbiAgICAgICAge1xuICAgICAgICAgIGxhYmVsOiBcIlBhcmFtw6l0cmFnZSBkZSBwb3N0ZVwiLFxuICAgICAgICAgIGtleTogXCJQb3N0UGFyYW1ldGVyXCIsXG4gICAgICAgICAgZXhwYW5kT25ib2FyZGluZzp0cnVlLFxuICAgICAgICAgIGRlZmF1bHRWYWx1ZTogbnVsbCxcbiAgICAgICAgICB2YWx1ZTogbnVsbCxcbiAgICAgICAgICBzaXplOiA4MCxcbiAgICAgICAgICBpc01hbmRhdG9yeTogZmFsc2UsXG4gICAgICAgICAgb3RoZXJWYWx1ZTonJyxcbiAgICAgICAgICB0eXBlOiBcImNoZWNrYm94XCIsXG4gICAgICAgICAgZWRpdGFibGU6IHRydWUsXG4gICAgICAgICAgaXNDb25kaXRpb25hbDogZmFsc2UsXG4gICAgICAgICAgY29uZGl0aW9uVmFsdWU6XCJcIixcbiAgICAgICAgICBjb25kaXRpb25Mb2NhdGlvbjp7fSxcbiAgICAgICAgICBkZWxldGVhYmxlOiB0cnVlLFxuICAgICAgICAgIHN1YkxldmVsOiAxLFxuICAgICAgICAgIGV4cGFuZE1vcmU6IGZhbHNlLFxuICAgICAgICAgIGZvcm1zOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGxhYmVsOiBcIlJlYWxvY2F0ZWRFcXVpcG1lbnRcIixcbiAgICAgICAgICAgICAga2V5OiBcIlwiLFxuICAgICAgICAgICAgICBleHBhbmRPbmJvYXJkaW5nOnRydWUsXG4gICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZTogbnVsbCxcbiAgICAgICAgICAgICAgdmFsdWU6IG51bGwsXG4gICAgICAgICAgICAgIHNpemU6IDEwMDAsXG4gICAgICAgICAgICAgIGlzTWFuZGF0b3J5OiB0cnVlLFxuICAgICAgICAgICAgICBvdGhlclZhbHVlOicnLFxuICAgICAgICAgICAgICB0eXBlOiBcInRleHRhcmVhXCIsXG4gICAgICAgICAgICAgIGVkaXRhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICBpc0NvbmRpdGlvbmFsOiBmYWxzZSxcbiAgICAgICAgICAgICAgY29uZGl0aW9uVmFsdWU6XCJcIixcbiAgICAgICAgICAgICAgY29uZGl0aW9uTG9jYXRpb246e30sXG4gICAgICAgICAgICAgIGRlbGV0ZWFibGU6IHRydWUsXG4gICAgICAgICAgICAgIHN1YkxldmVsOiAyLFxuICAgICAgICAgICAgICBleHBhbmRNb3JlOiBmYWxzZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGxhYmVsOiBcIk5vdXZlYXUgcG9zdGVcIixcbiAgICAgICAgICAgICAga2V5OiBcIk5ld1Bvc3RcIixcbiAgICAgICAgICAgICAgZXhwYW5kT25ib2FyZGluZzp0cnVlLFxuICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU6IG51bGwsXG4gICAgICAgICAgICAgIHZhbHVlOiBudWxsLFxuICAgICAgICAgICAgICBzaXplOiA4MCxcbiAgICAgICAgICAgICAgaXNNYW5kYXRvcnk6IHRydWUsXG4gICAgICAgICAgICAgIG90aGVyVmFsdWU6JycsXG4gICAgICAgICAgICAgIHR5cGU6IFwiY2hlY2tib3hcIixcbiAgICAgICAgICAgICAgZWRpdGFibGU6IHRydWUsXG4gICAgICAgICAgICAgIGlzQ29uZGl0aW9uYWw6IGZhbHNlLFxuICAgICAgICAgICAgICBjb25kaXRpb25WYWx1ZTpcIlwiLFxuICAgICAgICAgICAgICBjb25kaXRpb25Mb2NhdGlvbjp7fSxcbiAgICAgICAgICAgICAgZGVsZXRlYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgc3ViTGV2ZWw6IDIsXG4gICAgICAgICAgICAgIGV4cGFuZE1vcmU6IGZhbHNlLFxuICAgICAgICAgICAgICBmb3JtczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIkFjaGV0w6kgY2hleiBOb3d0ZWFtXCIsXG4gICAgICAgICAgICAgICAgICBrZXk6IFwiUHVyY2hhc2VkQXROb3d0ZWFtXCIsXG4gICAgICAgICAgICAgICAgICBleHBhbmRPbmJvYXJkaW5nOnRydWUsXG4gICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU6IG51bGwsXG4gICAgICAgICAgICAgICAgICB2YWx1ZTogbnVsbCxcbiAgICAgICAgICAgICAgICAgIHNpemU6IDEwMDAsXG4gICAgICAgICAgICAgICAgICBpc01hbmRhdG9yeTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgIG90aGVyVmFsdWU6JycsXG4gICAgICAgICAgICAgICAgICB0eXBlOiBcInRleHRhcmVhXCIsXG4gICAgICAgICAgICAgICAgICBlZGl0YWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgIGlzQ29uZGl0aW9uYWw6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgY29uZGl0aW9uVmFsdWU6XCJcIixcbiAgICAgICAgICAgICAgICAgIGNvbmRpdGlvbkxvY2F0aW9uOnt9LFxuICAgICAgICAgICAgICAgICAgZGVsZXRlYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgIHN1YkxldmVsOiAzLFxuICAgICAgICAgICAgICAgICAgZXhwYW5kTW9yZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBsYWJlbDogXCJBdXRyZVwiLFxuICAgICAgICAgICAgICAgICAga2V5OiBcIk90aGVyXCIsXG4gICAgICAgICAgICAgICAgICBleHBhbmRPbmJvYXJkaW5nOnRydWUsXG4gICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU6IG51bGwsXG4gICAgICAgICAgICAgICAgICB2YWx1ZTogbnVsbCxcbiAgICAgICAgICAgICAgICAgIHNpemU6IDEwMDAsXG4gICAgICAgICAgICAgICAgICBpc01hbmRhdG9yeTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgIG90aGVyVmFsdWU6JycsXG4gICAgICAgICAgICAgICAgICB0eXBlOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgIGVkaXRhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgaXNDb25kaXRpb25hbDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICBjb25kaXRpb25WYWx1ZTpcIlwiLFxuICAgICAgICAgICAgICAgICAgY29uZGl0aW9uTG9jYXRpb246e30sXG4gICAgICAgICAgICAgICAgICBkZWxldGVhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgc3ViTGV2ZWw6IDMsXG4gICAgICAgICAgICAgICAgICBleHBhbmRNb3JlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwiQXV0cmVzXCIsXG4gICAgICBleHBhbmRNb3JlOiBmYWxzZSxcbiAgICAgIHN1ZmZpeEVuZHBvaW50OiBcImNhdGVnb3J5L2F1dHJlc1wiLFxuICAgICAgc2VsZWN0ZWQ6IHRydWUsXG4gICAgICBlZGl0YWJsZTogdHJ1ZSxcbiAgICAgIGlzQ29uZGl0aW9uYWw6IGZhbHNlLFxuICAgICAgY29uZGl0aW9uVmFsdWU6XCJcIixcbiAgICAgIGNvbmRpdGlvbkxvY2F0aW9uOnt9LFxuICAgICAgZXhwYW5kT25ib2FyZGluZzp0cnVlLFxuICAgICAgZGVmYXVsdFZhbHVlOiBmYWxzZSxcbiAgICAgIGRlbGV0ZWFibGU6IHRydWUsXG4gICAgICBmb3JtczogW1xuICAgICAgICB7XG4gICAgICAgICAgbGFiZWw6IFwiRGVzY3JpcHRpb25zXCIsXG4gICAgICAgICAga2V5OiBcIkRlc2NyaXB0aW9uXCIsXG4gICAgICAgICAgZXhwYW5kT25ib2FyZGluZzp0cnVlLFxuICAgICAgICAgIGRlZmF1bHRWYWx1ZTogbnVsbCxcbiAgICAgICAgICB2YWx1ZTogbnVsbCxcbiAgICAgICAgICBzaXplOiAxMDAwLFxuICAgICAgICAgIGlzTWFuZGF0b3J5OiBmYWxzZSxcbiAgICAgICAgICBvdGhlclZhbHVlOicnLFxuICAgICAgICAgIHR5cGU6IFwidGV4dGFyZWFcIixcbiAgICAgICAgICBlZGl0YWJsZTogdHJ1ZSxcbiAgICAgICAgICBpc0NvbmRpdGlvbmFsOiBmYWxzZSxcbiAgICAgICAgICBjb25kaXRpb25WYWx1ZTpcIlwiLFxuICAgICAgICAgIGNvbmRpdGlvbkxvY2F0aW9uOnt9LFxuICAgICAgICAgIGRlbGV0ZWFibGU6IHRydWUsXG4gICAgICAgICAgc3ViTGV2ZWw6IDEsXG4gICAgICAgICAgZXhwYW5kTW9yZTogZmFsc2UsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0sXG4gIF07XG5cbiAgY2FuRGVhY3RpdmF0ZSgpIHtcbiAgICBpZiAoIXRoaXMuY2FuRXhpdCkge1xuICAgICAgdGhpcy5kaWFsb2cub3BlbihFeGl0Q29uZmlybUNvbXBvbmVudCwge1xuICAgICAgICBkYXRhOiAnJ1xuICAgICAgfSlcbiAgICAgIHJldHVybiB0aGlzLnNlcnZpY2UuY2FuRXhpdCRcbiAgICB9XG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gIGFzeW5jIG5nT25Jbml0KCkge1xuICAgIHRoaXMuaWQgPSB0aGlzLnJvdXRlLnNuYXBzaG90LnBhcmFtTWFwLmdldChcImlkXCIpO1xuICAgIHRoaXMuZm9ybSA9IHRoaXMuZmIuZ3JvdXAoe1xuICAgICAgTmFtZTogW1wiXCIsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgICAgUGljdG86IFtcIlwiXSxcbiAgICAgIERlc2NyaXB0aW9uOiBbXCJcIl0sXG4gICAgICBUYWdzOiBbXCJcIiwgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgICBTdGF0dXM6IFtmYWxzZSwgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgfSk7XG4gICAgdGhpcy5mb3JtLnZhbHVlQ2hhbmdlcy5zdWJzY3JpYmUoYyA9PiB7XG4gICAgICB0aGlzLmNhbkV4aXQgPSBmYWxzZTtcbiAgICB9KTtcbiAgICBpZiAodGhpcy5pZCAhPT0gXCIwXCIpIHtcbiAgICAgIHRoaXMuY3VycmVudFByb2ZpbCA9IGF3YWl0IHRoaXMuc2VydmljZS5nZXRQcm9maWwodGhpcy5pZCk7XG4gICAgICB0aGlzLmZvcm0ucGF0Y2hWYWx1ZSh0aGlzLmN1cnJlbnRQcm9maWwpO1xuICAgICAgdGhpcy5jYXRlZ29yaWVzID0gdGhpcy5jdXJyZW50UHJvZmlsLmNhdGVnb3JpZXM7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2hvd1Byb2ZpbGVOYW1lID0gdHJ1ZTtcbiAgICAgIHRoaXMuY2F0ZWdvcmllcz10aGlzLmRlZmF1bHRDYXRlZ29yaWVcbiAgICB9XG4gICAgdGhpcy50YWdzID0gYXdhaXQgdGhpcy5zZXJ2aWNlLmdldEFsbFRhZ3MoKTtcbiAgfVxuXG4gIG9uQWRkTmV3Q2F0ZWdvcnkoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLmNhbkV4aXQgPSBmYWxzZTtcbiAgICB0aGlzLmNhdGVnb3JpZXMucHVzaCh7XG4gICAgICBuYW1lOiBcIlwiLFxuICAgICAgZWRpdGFibGU6IHRydWUsXG4gICAgICBpc0NvbmRpdGlvbmFsOiBmYWxzZSxcbiAgICAgIGNvbmRpdGlvblZhbHVlOlwiXCIsXG4gICAgICBjb25kaXRpb25Mb2NhdGlvbjp7fSxcbiAgICAgIGRlbGV0ZWFibGU6IHRydWUsXG4gICAgICBleHBhbmRNb3JlOiB0cnVlLFxuICAgICAgc3VmZml4RW5kcG9pbnQ6IFwiXCIsXG4gICAgICBmb3JtczogW1xuICAgICAgICB7XG4gICAgICAgICAgbGFiZWw6IFwiXCIsXG4gICAgICAgICAga2V5OiBcIlwiLFxuICAgICAgICAgIGV4cGFuZE9uYm9hcmRpbmc6dHJ1ZSxcbiAgICAgICAgICBkZWZhdWx0VmFsdWU6IG51bGwsXG4gICAgICAgICAgdmFsdWU6IG51bGwsXG4gICAgICAgICAgc2l6ZTogODAsXG4gICAgICAgICAgaXNNYW5kYXRvcnk6IHRydWUsXG4gICAgICAgICAgb3RoZXJWYWx1ZTonJyxcbiAgICAgICAgICB0eXBlOiBcInRleHRcIixcbiAgICAgICAgICBkZWxldGVhYmxlOiB0cnVlLFxuICAgICAgICAgIGVkaXRhYmxlOiB0cnVlLFxuICAgICAgICAgIGlzQ29uZGl0aW9uYWw6IGZhbHNlLFxuICAgICAgICAgIGNvbmRpdGlvblZhbHVlOlwiXCIsXG4gICAgICAgICAgY29uZGl0aW9uTG9jYXRpb246e30sXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0pO1xuICB9XG5cbiAgb25BZGROZXdGaWVsZCguLi5wYXJhbXMpIHtcbiAgICB0aGlzLmNhbkV4aXQgPSBmYWxzZTtcbiAgICBjb25zdCBsZW5ndGggPSBwYXJhbXMubGVuZ3RoO1xuICAgIGNvbnN0IGZvcm1zID0gbGVuZ3RoID09PSAxID8gdGhpcy5jYXRlZ29yaWVzW3BhcmFtc1swXV0uZm9ybXMgOiBsZW5ndGggPT09IDIgPyB0aGlzLmNhdGVnb3JpZXNbcGFyYW1zWzBdXS5mb3Jtc1twYXJhbXNbMV1dLmZvcm1zIDogdGhpcy5jYXRlZ29yaWVzW3BhcmFtc1swXV0uZm9ybXNbcGFyYW1zWzFdXS5mb3Jtc1twYXJhbXNbMl1dLmZvcm1zO1xuICAgIGZvcm1zLnB1c2goe1xuICAgICAgbGFiZWw6IFwiXCIsXG4gICAgICBrZXk6IFwiXCIsXG4gICAgICBleHBhbmRPbmJvYXJkaW5nOnRydWUsXG4gICAgICBkZWZhdWx0VmFsdWU6IG51bGwsXG4gICAgICB2YWx1ZTogbnVsbCxcbiAgICAgIHNpemU6IDgwLFxuICAgICAgaXNNYW5kYXRvcnk6IHRydWUsXG4gICAgICBvdGhlclZhbHVlOicnLFxuICAgICAgdHlwZTogXCJ0ZXh0XCIsXG4gICAgICBkZWxldGVhYmxlOiB0cnVlLFxuICAgICAgZWRpdGFibGU6IHRydWUsXG4gICAgICBpc0NvbmRpdGlvbmFsOiBmYWxzZSxcbiAgICAgIGNvbmRpdGlvblZhbHVlOlwiXCIsXG4gICAgICBjb25kaXRpb25Mb2NhdGlvbjp7fSxcbiAgICAgIHN1YkxldmVsOiBwYXJhbXMubGVuZ3RoLFxuICAgIH0pO1xuICB9XG5cbiAgb25BZGROZXdTdWJMZXZlbEZpZWxkKC4uLnBhcmFtcykge1xuICAgIHRoaXMuY2FuRXhpdCA9IGZhbHNlO1xuICAgIGNvbnN0IGxlbmd0aCA9IHBhcmFtcy5sZW5ndGg7XG4gICAgY29uc3QgZm9ybXMgPSBsZW5ndGggPT09IDIgPyB0aGlzLmNhdGVnb3JpZXNbcGFyYW1zWzBdXS5mb3Jtc1twYXJhbXNbbGVuZ3RoIC0gMV1dIDogbGVuZ3RoID09PSAzID8gdGhpcy5jYXRlZ29yaWVzW3BhcmFtc1swXV0uZm9ybXNbcGFyYW1zWzFdXS5mb3Jtc1twYXJhbXNbbGVuZ3RoIC0gMV1dIDogdGhpcy5jYXRlZ29yaWVzW3BhcmFtc1swXV0uZm9ybXNbcGFyYW1zWzFdXS5mb3Jtc1twYXJhbXNbMl1dLmZvcm1zW3BhcmFtc1tsZW5ndGggLSAxXV07XG4gICAgZm9ybXMuZXhwYW5kTW9yZSA9IHRydWU7XG4gICAgZm9ybXMuZm9ybXMgPSBbXTtcbiAgICBmb3Jtcy5mb3Jtcy5wdXNoKHtcbiAgICAgIGxhYmVsOiBcIlwiLFxuICAgICAga2V5OiBcIlwiLFxuICAgICAgZXhwYW5kT25ib2FyZGluZzp0cnVlLFxuICAgICAgZGVmYXVsdFZhbHVlOiBudWxsLFxuICAgICAgdmFsdWU6IG51bGwsXG4gICAgICBzaXplOiA4MCxcbiAgICAgIGlzTWFuZGF0b3J5OiB0cnVlLFxuICAgICAgb3RoZXJWYWx1ZTonJyxcbiAgICAgIHR5cGU6IFwidGV4dFwiLFxuICAgICAgZGVsZXRlYWJsZTogdHJ1ZSxcbiAgICAgIGVkaXRhYmxlOiB0cnVlLFxuICAgICAgaXNDb25kaXRpb25hbDogZmFsc2UsXG4gICAgICBjb25kaXRpb25WYWx1ZTpcIlwiLFxuICAgICAgY29uZGl0aW9uTG9jYXRpb246e30sXG4gICAgICBzdWJMZXZlbDogcGFyYW1zLmxlbmd0aCxcbiAgICAgIGV4cGFuZE1vcmU6IHRydWUsXG4gICAgfSk7XG4gIH1cblxuICBvblJlbW92ZUZpZWxkKC4uLnBhcmFtcykge1xuICAgIHRoaXMuY2FuRXhpdCA9IGZhbHNlO1xuICAgIGNvbnN0IGxlbmd0aCA9IHBhcmFtcy5sZW5ndGg7XG4gICAgY29uc3QgZm9ybXMgPSBsZW5ndGggPT09IDIgPyB0aGlzLmNhdGVnb3JpZXNbcGFyYW1zWzBdXS5mb3JtcyA6IGxlbmd0aCA9PT0gMyA/IHRoaXMuY2F0ZWdvcmllc1twYXJhbXNbMF1dLmZvcm1zW3BhcmFtc1sxXV0uZm9ybXMgOiB0aGlzLmNhdGVnb3JpZXNbcGFyYW1zWzBdXS5mb3Jtc1twYXJhbXNbMV1dLmZvcm1zW3BhcmFtc1syXV0uZm9ybXM7XG4gICAgZm9ybXMuc3BsaWNlKHBhcmFtc1tsZW5ndGggLSAxXSwgMSk7XG4gIH1cblxuICBvblJlbW92ZUNhdGVnb3J5KGUsIGkpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5jYXRlZ29yaWVzLnNwbGljZShpLCAxKTtcbiAgICB0aGlzLmNhbkV4aXQgPSBmYWxzZTtcbiAgfVxuXG4gIG9uQ2hhbmdlQ2F0ZWdvcnkoKSB7XG4gICAgcmV0dXJuIHRoaXMuY2F0ZWdvcmllcy5ldmVyeSgoY2F0KSA9PiBjYXQubmFtZSAhPT0gXCJcIiAmJiBjYXQuZm9ybXMuZXZlcnkoKGZpZWxkKSA9PiBmaWVsZC5sYWJlbCAhPT0gXCJcIiAmJiBmaWVsZC50eXBlICE9PSBcIlwiKSk7XG4gIH1cblxuICBhc3luYyBvblN1Ym1pdCgpIHtcbiAgICBpZiAodGhpcy5mb3JtLnZhbGlkICYmIHRoaXMub25DaGFuZ2VDYXRlZ29yeSgpKSB7XG4gICAgICBjb25zdCBleHBhbmRDYXRlZ29yaWVzPVxuICAgICAgdGhpcy5jYXRlZ29yaWVzXG4gICAgICAuZmlsdGVyKChjYXQpPT5jYXQuZXhwYW5kT25ib2FyZGluZylcbiAgICAgIC5tYXAoKGNhdCk9PntcbiAgICAgICAgaWYoY2F0LmZvcm1zKXtcbiAgICAgICAgICBjb25zdCBmPSBjYXQuZm9ybXNcbiAgICAgICAgICAuZmlsdGVyKChmb3JtKT0+Zm9ybS5leHBhbmRPbmJvYXJkaW5nKVxuICAgICAgICAgIC5tYXAoKHN1Yik9PntcbiAgICAgICAgICAgIGlmKHN1Yi5mb3Jtcyl7XG4gICAgICAgICAgICAgIGNvbnN0IHM9c3ViLmZvcm1zLmZpbHRlcigoY2hpbGQpPT57XG4gICAgICAgICAgICAgICAgaWYoY2hpbGQuZm9ybXMpe1xuICAgICAgICAgICAgICAgICAgIGNvbnN0IGM9Y2hpbGQuZm9ybXMuZmlsdGVyKChjaCk9PmNoLmV4cGFuZE9uYm9hcmRpbmcpXG4gICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgIC4uLmNoaWxkLFxuICAgICAgICAgICAgICAgICAgICAgZm9ybXM6Y1xuICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNoaWxkO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5zdWIsXG4gICAgICAgICAgICAgICAgZm9ybXM6c1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gc3ViO1xuICAgICAgICAgIH0pXG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC4uLmNhdCxcbiAgICAgICAgICAgIGZvcm1zOmZcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNhdFxuICAgICAgfSlcbiAgICAgIFxuICAgICAgY29uc3QgcmVzdWx0ID1cbiAgICAgICAgdGhpcy5pZCAhPT0gXCIwXCJcbiAgICAgICAgICA/IGF3YWl0IHRoaXMuc2VydmljZS51cGRhdGVQcm9maWwoe1xuICAgICAgICAgICAgLi4udGhpcy5jdXJyZW50UHJvZmlsLFxuICAgICAgICAgICAgLi4udGhpcy5mb3JtLnZhbHVlLFxuICAgICAgICAgICAgY2F0ZWdvcmllczogZXhwYW5kQ2F0ZWdvcmllcyxcbiAgICAgICAgICB9KVxuICAgICAgICAgIDogYXdhaXQgdGhpcy5zZXJ2aWNlLmNyZWF0ZVByb2ZpbCh7XG4gICAgICAgICAgICAuLi50aGlzLmZvcm0udmFsdWUsXG4gICAgICAgICAgICBjYXRlZ29yaWVzOiBleHBhbmRDYXRlZ29yaWVzLFxuICAgICAgICAgIH0pO1xuICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICBhd2FpdCB0aGlzLnNlcnZpY2UuZ2V0QWxsUHJvZmlsKCk7XG4gICAgICAgIHRoaXMuY2FuRXhpdCA9IHRydWU7XG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFt0aGlzLnNlcnZpY2UubWFpblBhdGhdKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiZXJycm9yLi4uLi4uXCIpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG9uQ2hhbmdlVHlwZSh0eXBlOiBzdHJpbmcsIC4uLnBhcmFtcykge1xuXG4gICAgdGhpcy5jYW5FeGl0ID0gZmFsc2U7XG4gICAgY29uc3QgbGVuZ3RoID0gcGFyYW1zLmxlbmd0aDtcbiAgICBjb25zdCBmb3JtcyA9IGxlbmd0aCA9PT0gMiA/IHRoaXMuY2F0ZWdvcmllc1twYXJhbXNbMF1dLmZvcm1zIDogbGVuZ3RoID09PSAzID8gdGhpcy5jYXRlZ29yaWVzW3BhcmFtc1swXV0uZm9ybXNbcGFyYW1zWzFdXS5mb3JtcyA6IHRoaXMuY2F0ZWdvcmllc1twYXJhbXNbMF1dLmZvcm1zW3BhcmFtc1sxXV0uZm9ybXNbcGFyYW1zWzJdXS5mb3JtcztcbiAgICBpZiAodHlwZSA9PT0gXCJzZWxlY3RcIiB8fCB0eXBlID09PSBcInJhZGlvXCIgfHwgdHlwZSA9PT0gXCJjaGVja2JveF9tdWx0aXBsZVwiKSB7XG4gICAgICBmb3Jtc1twYXJhbXNbbGVuZ3RoIC0gMV1dLmRlZmF1bHRWYWx1ZSA9IFtdO1xuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gXCJjaGVja2JveFwiKSB7XG4gICAgICBmb3Jtc1twYXJhbXNbbGVuZ3RoIC0gMV1dLmRlZmF1bHRWYWx1ZSA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvcm1zW3BhcmFtc1tsZW5ndGggLSAxXV0uZGVmYXVsdFZhbHVlID0gXCJcIjtcbiAgICB9XG4gIH1cblxuICBvbktleVByZXNzKGV2ZW50OiBhbnksIC4uLnBhcmFtcykge1xuICAgIHRoaXMuY2FuRXhpdCA9IGZhbHNlO1xuICAgIGNvbnN0IGxlbmd0aCA9IHBhcmFtcy5sZW5ndGg7XG4gICAgY29uc3QgZm9ybXMgPSBsZW5ndGggPT09IDIgPyB0aGlzLmNhdGVnb3JpZXNbcGFyYW1zWzBdXS5mb3Jtc1twYXJhbXNbbGVuZ3RoIC0gMV1dIDogbGVuZ3RoID09PSAzID8gdGhpcy5jYXRlZ29yaWVzW3BhcmFtc1swXV0uZm9ybXNbcGFyYW1zWzFdXS5mb3Jtc1twYXJhbXNbbGVuZ3RoIC0gMV1dIDogdGhpcy5jYXRlZ29yaWVzW3BhcmFtc1swXV0uZm9ybXNbcGFyYW1zWzFdXS5mb3Jtc1twYXJhbXNbMl1dLmZvcm1zW3BhcmFtc1tsZW5ndGggLSAxXV07XG4gICAgaWYgKGV2ZW50LmtleSA9PT0gXCI7XCIpIHtcbiAgICAgIGNvbnN0IGV4aXN0ID0gZm9ybXMuZGVmYXVsdFZhbHVlLmZpbmQoKG9wdCkgPT4gb3B0LnZhbHVlLnRvTG9jYWxlTG93ZXJDYXNlKCkgPT09IGV2ZW50LnRhcmdldC52YWx1ZS5zcGxpdChcIjtcIilbMF0udG9Mb2NhbGVMb3dlckNhc2UoKSk7XG4gICAgICBpZiAoIWV4aXN0KSB7XG4gICAgICAgIGZvcm1zLmRlZmF1bHRWYWx1ZS5wdXNoKHtcbiAgICAgICAgICB2YWx1ZTogZXZlbnQudGFyZ2V0LnZhbHVlLnNwbGl0KFwiO1wiKVswXSxcbiAgICAgICAgICBjaGVja2VkOiBmYWxzZVxuICAgICAgICB9KTtcbiAgICAgICAgZXZlbnQudGFyZ2V0LnZhbHVlID0gXCJcIjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGV2ZW50LnRhcmdldC52YWx1ZSA9IFwiXCI7XG4gICAgICB9XG4gICAgfVxuICAgIC8vIHRoaXMuZ2V0Q29uZGl0aW9uVmFsdWVzKClcbiAgfVxuXG4gIHJlbW92ZUtleXdvcmQoa2V5d29yZDogYW55LCAuLi5wYXJhbXMpIHtcbiAgICB0aGlzLmNhbkV4aXQgPSBmYWxzZTtcbiAgICBjb25zdCBsZW5ndGggPSBwYXJhbXMubGVuZ3RoO1xuICAgIGNvbnN0IGZvcm1zID0gbGVuZ3RoID09PSAyID8gdGhpcy5jYXRlZ29yaWVzW3BhcmFtc1swXV0uZm9ybXNbcGFyYW1zW2xlbmd0aCAtIDFdXSA6IGxlbmd0aCA9PT0gMyA/IHRoaXMuY2F0ZWdvcmllc1twYXJhbXNbMF1dLmZvcm1zW3BhcmFtc1sxXV0uZm9ybXNbcGFyYW1zW2xlbmd0aCAtIDFdXSA6IHRoaXMuY2F0ZWdvcmllc1twYXJhbXNbMF1dLmZvcm1zW3BhcmFtc1sxXV0uZm9ybXNbcGFyYW1zWzJdXS5mb3Jtc1twYXJhbXNbbGVuZ3RoIC0gMV1dO1xuICAgIGZvcm1zLmRlZmF1bHRWYWx1ZSA9IGZvcm1zLmRlZmF1bHRWYWx1ZS5maWx0ZXIoKG9wdGlvbikgPT4gb3B0aW9uLnZhbHVlICE9PSBrZXl3b3JkLnZhbHVlKTtcbiAgICAvLyB0aGlzLmdldENvbmRpdGlvblZhbHVlcygpXG4gIH1cblxuICBvbkV4cGVuZE1vcmUoZXZlbnQsIC4uLnBhcmFtcykge1xuICAgIGlmIChldmVudCkge1xuICAgICAgaWYgKGV2ZW50LmV2ZW50KSB7XG4gICAgICAgIGV2ZW50LmV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB9XG4gICAgICBpZiAoZXZlbnQuZmllbGQgJiYgIWV2ZW50LmZpZWxkLmV4cGFuZE1vcmUpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmNhdGVnb3JpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICB0aGlzLmNhdGVnb3JpZXNbaV0uZXhwYW5kTW9yZSA9IGZhbHNlO1xuICAgICAgICAgIGlmICh0aGlzLmNhdGVnb3JpZXNbaV0uZm9ybXMpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5jYXRlZ29yaWVzW2ldLmZvcm1zLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgIHRoaXMuY2F0ZWdvcmllc1tpXS5mb3Jtc1tqXS5leHBhbmRNb3JlID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICB9XG4gICAgaWYgKHBhcmFtcy5sZW5ndGggPT09IDEpIHtcbiAgICAgIHRoaXMuY2F0ZWdvcmllc1twYXJhbXNbMF1dLmV4cGFuZE1vcmUgPSAhdGhpcy5jYXRlZ29yaWVzW3BhcmFtc1swXV0uZXhwYW5kTW9yZTtcbiAgICB9IGVsc2UgaWYgKHBhcmFtcy5sZW5ndGggPT09IDIpIHtcbiAgICAgIGlmICh0aGlzLmNhdGVnb3JpZXNbcGFyYW1zWzBdXS5mb3Jtc1twYXJhbXNbMV1dLmV4cGFuZE1vcmUpIHtcbiAgICAgICAgdGhpcy5jYXRlZ29yaWVzW3BhcmFtc1swXV0uZm9ybXNbcGFyYW1zWzFdXS5leHBhbmRNb3JlID0gZmFsc2U7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNhdGVnb3JpZXNbcGFyYW1zWzBdXS5leHBhbmRNb3JlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5jYXRlZ29yaWVzW3BhcmFtc1swXV0uZm9ybXNbcGFyYW1zWzFdXS5leHBhbmRNb3JlID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHBhcmFtcy5sZW5ndGggPT09IDMpIHtcbiAgICAgIGlmICh0aGlzLmNhdGVnb3JpZXNbcGFyYW1zWzBdXS5mb3Jtc1twYXJhbXNbMV1dLmZvcm1zW3BhcmFtc1syXV0uZXhwYW5kTW9yZSkge1xuICAgICAgICB0aGlzLmNhdGVnb3JpZXNbcGFyYW1zWzBdXS5mb3Jtc1twYXJhbXNbMV1dLmZvcm1zW3BhcmFtc1syXV0uZXhwYW5kTW9yZSA9IGZhbHNlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jYXRlZ29yaWVzW3BhcmFtc1swXV0uZXhwYW5kTW9yZSA9IHRydWU7XG4gICAgICAgIHRoaXMuY2F0ZWdvcmllc1twYXJhbXNbMF1dLmZvcm1zW3BhcmFtc1sxXV0uZXhwYW5kTW9yZSA9IHRydWU7XG4gICAgICAgIHRoaXMuY2F0ZWdvcmllc1twYXJhbXNbMF1dLmZvcm1zW3BhcmFtc1sxXV0uZm9ybXNbcGFyYW1zWzJdXS5leHBhbmRNb3JlID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHRoaXMuY2F0ZWdvcmllc1twYXJhbXNbMF1dLmZvcm1zW3BhcmFtc1sxXV0uZm9ybXNbcGFyYW1zWzJdXS5mb3Jtc1twYXJhbXNbM11dLmV4cGFuZE1vcmUpIHtcbiAgICAgICAgdGhpcy5jYXRlZ29yaWVzW3BhcmFtc1swXV0uZm9ybXNbcGFyYW1zWzFdXS5mb3Jtc1twYXJhbXNbMl1dLmZvcm1zW3BhcmFtc1szXV0uZXhwYW5kTW9yZSA9IGZhbHNlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jYXRlZ29yaWVzW3BhcmFtc1swXV0uZXhwYW5kTW9yZSA9IHRydWU7XG4gICAgICAgIHRoaXMuY2F0ZWdvcmllc1twYXJhbXNbMF1dLmZvcm1zW3BhcmFtc1sxXV0uZXhwYW5kTW9yZSA9IHRydWU7XG4gICAgICAgIHRoaXMuY2F0ZWdvcmllc1twYXJhbXNbMF1dLmZvcm1zW3BhcmFtc1sxXV0uZm9ybXNbcGFyYW1zWzJdXS5leHBhbmRNb3JlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5jYXRlZ29yaWVzW3BhcmFtc1swXV0uZm9ybXNbcGFyYW1zWzFdXS5mb3Jtc1twYXJhbXNbMl1dLmZvcm1zW3BhcmFtc1szXV0uZXhwYW5kTW9yZSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgb25DaGVja2VkRGVmYXVsdChldmVudCwgLi4ucGFyYW1zKSB7XG4gICAgaWYgKHBhcmFtcy5sZW5ndGggPT09IDEpIHtcbiAgICAgIHRoaXMuY2F0ZWdvcmllc1twYXJhbXNbMF1dLmRlZmF1bHRWYWx1ZSA9IGV2ZW50O1xuICAgIH0gZWxzZSBpZiAocGFyYW1zLmxlbmd0aCA9PT0gMikge1xuICAgICAgdGhpcy5jYXRlZ29yaWVzW3BhcmFtc1swXV0uZGVmYXVsdFZhbHVlID0gZXZlbnQ7XG4gICAgICB0aGlzLmNhdGVnb3JpZXNbcGFyYW1zWzBdXS5mb3Jtc1twYXJhbXNbMV1dLmRlZmF1bHRWYWx1ZSA9IGV2ZW50O1xuICAgIH0gZWxzZSBpZiAocGFyYW1zLmxlbmd0aCA9PT0gMykge1xuICAgICAgdGhpcy5jYXRlZ29yaWVzW3BhcmFtc1swXV0uZGVmYXVsdFZhbHVlID0gZXZlbnQ7XG4gICAgICB0aGlzLmNhdGVnb3JpZXNbcGFyYW1zWzBdXS5mb3Jtc1twYXJhbXNbMV1dLmRlZmF1bHRWYWx1ZSA9IGV2ZW50O1xuICAgICAgdGhpcy5jYXRlZ29yaWVzW3BhcmFtc1swXV0uZm9ybXNbcGFyYW1zWzFdXS5mb3Jtc1twYXJhbXNbMl1dLmRlZmF1bHRWYWx1ZSA9IGV2ZW50O1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNhdGVnb3JpZXNbcGFyYW1zWzBdXS5kZWZhdWx0VmFsdWUgPSBldmVudDtcbiAgICAgIHRoaXMuY2F0ZWdvcmllc1twYXJhbXNbMF1dLmZvcm1zW3BhcmFtc1sxXV0uZGVmYXVsdFZhbHVlID0gZXZlbnQ7XG4gICAgICB0aGlzLmNhdGVnb3JpZXNbcGFyYW1zWzBdXS5mb3Jtc1twYXJhbXNbMV1dLmZvcm1zW3BhcmFtc1syXV0uZGVmYXVsdFZhbHVlID0gZXZlbnQ7XG4gICAgICB0aGlzLmNhdGVnb3JpZXNbcGFyYW1zWzBdXS5mb3Jtc1twYXJhbXNbMV1dLmZvcm1zW3BhcmFtc1syXV0uZm9ybXNbcGFyYW1zWzNdXS5kZWZhdWx0VmFsdWUgPSBldmVudDtcbiAgICB9XG4gICAgLy8gdGhpcy5nZXRDb25kaXRpb25WYWx1ZXMoKVxuICB9XG5cbiAgYWRkS2V5d29yZEZyb21JbnB1dChldmVudDogTWF0Q2hpcElucHV0RXZlbnQsIHByZXYsIC4uLnBhcmFtcykge1xuICAgIHRoaXMuY2FuRXhpdCA9IGZhbHNlO1xuICAgIGNvbnN0IGlucHV0ID0gZXZlbnQuaW5wdXQ7XG4gICAgY29uc3QgdmFsdWUgPSBldmVudC52YWx1ZTtcbiAgICBjb25zdCBsZW5ndGggPSBwYXJhbXMubGVuZ3RoO1xuICAgIGNvbnN0IGZvcm1zID0gbGVuZ3RoID09PSAyID8gdGhpcy5jYXRlZ29yaWVzW3BhcmFtc1swXV0uZm9ybXNbcGFyYW1zW2xlbmd0aCAtIDFdXSA6IGxlbmd0aCA9PT0gMyA/IHRoaXMuY2F0ZWdvcmllc1twYXJhbXNbMF1dLmZvcm1zW3BhcmFtc1sxXV0uZm9ybXNbcGFyYW1zW2xlbmd0aCAtIDFdXSA6IHRoaXMuY2F0ZWdvcmllc1twYXJhbXNbMF1dLmZvcm1zW3BhcmFtc1sxXV0uZm9ybXNbcGFyYW1zWzJdXS5mb3Jtc1twYXJhbXNbbGVuZ3RoIC0gMV1dO1xuICAgIGlmICh2YWx1ZSkge1xuICAgICAgY29uc3QgcHJldkluZGV4ID0gZm9ybXMuZGVmYXVsdFZhbHVlLmZpbmRJbmRleCgob3B0KSA9PiBvcHQudmFsdWUudG9Mb2NhbGVMb3dlckNhc2UoKSA9PT0gcHJldi50b0xvY2FsZUxvd2VyQ2FzZSgpKTtcbiAgICAgIGlmIChwcmV2SW5kZXggIT09IC0xKSB7XG4gICAgICAgIGZvcm1zLmRlZmF1bHRWYWx1ZVtwcmV2SW5kZXhdLnZhbHVlID0gdmFsdWUudHJpbSgpO1xuICAgICAgICBpbnB1dC52YWx1ZSA9IFwiXCI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBleGlzdCA9IGZvcm1zLmRlZmF1bHRWYWx1ZS5maW5kKChvcHQpID0+IG9wdC52YWx1ZS50b0xvY2FsZUxvd2VyQ2FzZSgpID09PSBldmVudC52YWx1ZS50b0xvY2FsZUxvd2VyQ2FzZSgpKTtcbiAgICAgICAgaWYgKCFleGlzdCkge1xuICAgICAgICAgIGZvcm1zLmRlZmF1bHRWYWx1ZS5wdXNoKHsgdmFsdWU6IHZhbHVlLnRyaW0oKSwgY2hlY2tlZDogZmFsc2UgfSk7XG4gICAgICAgICAgaW5wdXQudmFsdWUgPSBcIlwiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlucHV0LnZhbHVlID0gXCJcIjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgfVxuICAgIC8vIHRoaXMuZ2V0Q29uZGl0aW9uVmFsdWVzKClcbiAgfVxuXG4gIGRyb3AoZXZlbnQ6IENka0RyYWdEcm9wPHN0cmluZ1tdPikge1xuICAgIHRoaXMuY2FuRXhpdCA9IGZhbHNlO1xuICAgIGlmIChldmVudC5wcmV2aW91c0NvbnRhaW5lciA9PT0gZXZlbnQuY29udGFpbmVyKSB7XG4gICAgICBtb3ZlSXRlbUluQXJyYXkoZXZlbnQuY29udGFpbmVyLmRhdGEsIGV2ZW50LnByZXZpb3VzSW5kZXgsIGV2ZW50LmN1cnJlbnRJbmRleCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRyYW5zZmVyQXJyYXlJdGVtKGV2ZW50LnByZXZpb3VzQ29udGFpbmVyLmRhdGEsIGV2ZW50LmNvbnRhaW5lci5kYXRhLCBldmVudC5wcmV2aW91c0luZGV4LCBldmVudC5jdXJyZW50SW5kZXgpO1xuICAgIH1cbiAgfVxuXG4gIGluZ29yZURlZmF1bHRBY3Rpb24oZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgfVxuXG4gIG9uU2hvd0NhdGVnb3J5KCkge1xuICAgIHRoaXMuc2hvd1Byb2ZpbGVOYW1lID0gIXRoaXMuc2hvd1Byb2ZpbGVOYW1lO1xuICB9XG5cbiAgb25TZWxlY3RQaWN0byhlLCBwaWN0bykge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLmNhbkV4aXQgPSBmYWxzZTtcbiAgICB0aGlzLmZvcm0ucGF0Y2hWYWx1ZSh7IFBpY3RvOiBwaWN0byB9KTtcbiAgICB0aGlzLmlzUGljdG9MaXN0U2hvdyA9ICF0aGlzLmlzUGljdG9MaXN0U2hvdztcbiAgfVxuICBvblNob3dQaWN0b0xpc3QoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLmlzUGljdG9MaXN0U2hvdyA9ICF0aGlzLmlzUGljdG9MaXN0U2hvdztcbiAgfVxuICBvbkNoYW5nZUxhYmVsKGV2ZW50OiBhbnksIC4uLnBhcmFtcykge1xuICAgIGNvbnN0IGFyciA9IGV2ZW50LmxhYmVsLnNwbGl0KFwiIFwiKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuICAgICAgYXJyW2ldID0gYXJyW2ldLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgYXJyW2ldLnNsaWNlKDEpO1xuICAgIH1cbiAgICBjb25zdCBsZW5ndGggPSBwYXJhbXMubGVuZ3RoO1xuICAgIGNvbnN0IGZvcm1zID0gbGVuZ3RoID09PSAyID8gdGhpcy5jYXRlZ29yaWVzW3BhcmFtc1swXV0uZm9ybXNbcGFyYW1zW2xlbmd0aCAtIDFdXSA6IGxlbmd0aCA9PT0gMyA/IHRoaXMuY2F0ZWdvcmllc1twYXJhbXNbMF1dLmZvcm1zW3BhcmFtc1sxXV0uZm9ybXNbcGFyYW1zW2xlbmd0aCAtIDFdXSA6IHRoaXMuY2F0ZWdvcmllc1twYXJhbXNbMF1dLmZvcm1zW3BhcmFtc1sxXV0uZm9ybXNbcGFyYW1zWzJdXS5mb3Jtc1twYXJhbXNbbGVuZ3RoIC0gMV1dO1xuICAgIGZvcm1zLmtleSA9IGFyci5qb2luKCcnKVxuXG4gIH1cbiAgb25DaGVja2VkQ2hpcChldmVudDogYW55LCAuLi5wYXJhbXMpIHtcbiAgICB0aGlzLmNhbkV4aXQgPSBmYWxzZTtcbiAgICBjb25zdCBsZW5ndGggPSBwYXJhbXMubGVuZ3RoO1xuICAgIGNvbnN0IGZvcm1zID0gbGVuZ3RoID09PSAyID8gdGhpcy5jYXRlZ29yaWVzW3BhcmFtc1swXV0uZm9ybXNbcGFyYW1zW2xlbmd0aCAtIDFdXSA6IGxlbmd0aCA9PT0gMyA/IHRoaXMuY2F0ZWdvcmllc1twYXJhbXNbMF1dLmZvcm1zW3BhcmFtc1sxXV0uZm9ybXNbcGFyYW1zW2xlbmd0aCAtIDFdXSA6IHRoaXMuY2F0ZWdvcmllc1twYXJhbXNbMF1dLmZvcm1zW3BhcmFtc1sxXV0uZm9ybXNbcGFyYW1zWzJdXS5mb3Jtc1twYXJhbXNbbGVuZ3RoIC0gMV1dO1xuICAgIGNvbnN0IGluZGV4ID0gZm9ybXMuZGVmYXVsdFZhbHVlLmZpbmRJbmRleCgoY2hpcCkgPT4gY2hpcC52YWx1ZSA9PT0gZXZlbnQudmFsdWUpXG4gICAgaWYgKGluZGV4ICE9PSAtMSAmJiBmb3Jtcy50eXBlID09PSAnY2hlY2tib3hfbXVsdGlwbGUnKSB7XG4gICAgICBmb3Jtcy5kZWZhdWx0VmFsdWVbaW5kZXhdLmNoZWNrZWQgPSAhZXZlbnQuY2hlY2tlZFxuICAgIH0gZWxzZSBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBmb3Jtcy5kZWZhdWx0VmFsdWUuZm9yRWFjaCgodmFsdWUpID0+IHtcbiAgICAgICAgdmFsdWUuY2hlY2tlZCA9IGZhbHNlO1xuICAgICAgfSlcbiAgICAgIGZvcm1zLmRlZmF1bHRWYWx1ZVtpbmRleF0uY2hlY2tlZCA9ICFldmVudC5jaGVja2VkXG4gICAgfVxuICAgIC8vIHRoaXMuZ2V0Q29uZGl0aW9uVmFsdWVzKClcbiAgfVxuXG4gIG9wZW5EaWFsb2coKSB7XG4gICAgY29uc3QgZGlhbG9nUmVmID0gdGhpcy5kaWFsb2cub3BlbihVcGRhdGVQcm9maWxDb21wb25lbnQsIHtcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgbWF0SWNvbkxpc3Q6IHRoaXMubWF0SWNvbkxpc3QsXG4gICAgICAgIGZvcm06IHRoaXMuZm9ybSxcbiAgICAgICAgdGFnczogdGhpcy50YWdzXG4gICAgICB9XG4gICAgfSk7XG4gICAgZGlhbG9nUmVmLmFmdGVyQ2xvc2VkKCkuc3Vic2NyaWJlKChjb25maXJtZWQ6IGJvb2xlYW4pID0+IHtcbiAgICAgIGlmIChjb25maXJtZWQpIHtcblxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgb25QYXNzSW5FZGl0TW9kZShpKSB7XG4gICAgdGhpcy5jYW5FeGl0ID0gZmFsc2U7XG4gICAgdGhpcy5lZGl0SW5kZXggPSBpO1xuICB9XG5cbiAgb25FZGl0KCkge1xuICAgIHRoaXMuZWRpdEluZGV4ID0gbnVsbDtcbiAgfVxuXG4gIG9uRWRpdENhdGVnb3J5TmFtZShpLCBuYW1lKSB7XG4gICAgdGhpcy5jYW5FeGl0ID0gZmFsc2U7XG4gICAgdGhpcy5jYXRlZ29yaWVzW2ldLm5hbWUgPSBuYW1lO1xuICAgIC8vIHRoaXMuZ2V0Q29uZGl0aW9uVmFsdWVzKClcbiAgfVxuICBvbkFjcmVsaW5rKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIH1cbiAgXG4gIGdldENvbmRpdGlvblZhbHVlcygpIHtcbiAgICBjb25zdCBjb25kaXRpb25zTGlzdCA9IFtdO1xuICAgIGNvbnN0IHR5cGU9KGZvcm1zKT0+Zm9ybXMudHlwZSA9PT0gJ3NlbGVjdCcgfHwgZm9ybXMudHlwZSA9PT0gJ2NoZWNrb2J4JyB8fCBmb3Jtcy50eXBlID09PSAnY2hlY2tib3hfbXVsdGlwbGUnIHx8IGZvcm1zLnR5cGUgPT09ICdyYWRpbydcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY2F0ZWdvcmllcy5sZW5ndGg7IGkrKykge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLmNhdGVnb3JpZXNbaV0uZm9ybXMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgY29uc3QgZm9ybXMgPSB0aGlzLmNhdGVnb3JpZXNbaV0uZm9ybXNbal07XG4gICAgICAgIGlmICh0eXBlKGZvcm1zKSkge1xuICAgICAgICAgIGNvbmRpdGlvbnNMaXN0LnB1c2goe1xuICAgICAgICAgICAgbGV2ZWw6IDEsXG4gICAgICAgICAgICBjYXRlZ29yeUluZGV4OiBpLFxuICAgICAgICAgICAgY3VycmVudEluZGV4OiBqLFxuICAgICAgICAgICAgcG9zc2libGVWYWx1ZXM6IGZvcm1zLmRlZmF1bHRWYWx1ZSxcbiAgICAgICAgICAgIGxhYmVsOiBgJHt0aGlzLmNhdGVnb3JpZXNbaV0ubmFtZX0gPiAke2Zvcm1zLmxhYmVsfWBcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIGlmKGZvcm1zLmZvcm1zKXtcbiAgICAgICAgICBmb3IgKGxldCBrID0gMDsgayA8IGZvcm1zLmZvcm1zLmxlbmd0aDsgaysrKSB7XG4gICAgICAgICAgICBjb25zdCBzdWI9Zm9ybXMuZm9ybXNba10gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICBpZihzdWIudHlwZT09PSdjaGVja2JveCcgfHwgc3ViLnR5cGU9PT0nc2VsZWN0JyB8fCBzdWIudHlwZT09PSdyYWRpbycgfHwgc3ViLnR5cGU9PT0nY2hlY2tib3hfbXVsdGlwbGUnKXsgICAgICAgICAgIFxuICAgICAgICAgICAgY29uZGl0aW9uc0xpc3QucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgbGV2ZWw6MixcbiAgICAgICAgICAgICAgICAgICBjYXRlZ29yeUluZGV4OmksXG4gICAgICAgICAgICAgICAgICAgZm9ybUluZGV4OmosXG4gICAgICAgICAgICAgICAgICAgY3VycmVudEluZGV4OmssXG4gICAgICAgICAgICAgICAgICAgcG9zc2libGVWYWx1ZXM6c3ViLmRlZmF1bHRWYWx1ZSxcbiAgICAgICAgICAgICAgICAgICBsYWJlbDpgJHt0aGlzLmNhdGVnb3JpZXNbaV0ubmFtZX0gPiAke2Zvcm1zLmxhYmVsfSA+ICR7c3ViLmxhYmVsfWBcbiAgICAgICAgICAgIH0pICAgICAgICAgIFxuICAgICAgICAgICB9ICBcbiAgICAgICAgICAgaWYoc3ViLmZvcm1zKXtcbiAgICAgICAgICAgIGZvciAobGV0IGwgPSAwOyBsIDwgc3ViLmZvcm1zLmxlbmd0aDsgbCsrKSB7XG4gICAgICAgICAgICAgIGNvbnN0IGNoaWxkPXN1Yi5mb3Jtc1tsXVxuICAgICAgICAgICAgICBpZihjaGlsZC50eXBlPT09J2NoZWNrYm94JyB8fCBjaGlsZC50eXBlPT09J3NlbGVjdCcgfHwgY2hpbGQudHlwZT09PSdyYWRpbycgfHwgY2hpbGQudHlwZT09PSdjaGVja2JveF9tdWx0aXBsZScpeyAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgY29uZGl0aW9uc0xpc3QucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgIGxldmVsOjMsXG4gICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5SW5kZXg6aSxcbiAgICAgICAgICAgICAgICAgICAgICAgZm9ybUluZGV4OmosXG4gICAgICAgICAgICAgICAgICAgICAgIHN1YkluZGV4OmwsXG4gICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRJbmRleDprLFxuICAgICAgICAgICAgICAgICAgICAgICBwb3NzaWJsZVZhbHVlczpjaGlsZC5kZWZhdWx0VmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOmAke3RoaXMuY2F0ZWdvcmllc1tpXS5uYW1lfSA+ICR7Zm9ybXMubGFiZWx9ID4gJHtzdWIubGFiZWx9ID4gICR7Y2hpbGQubGFiZWx9YFxuICAgICAgICAgICAgICAgIH0pICAgICAgICAgIFxuICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9ICAgICAgICBcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgIH1cbiAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScsIGNvbmRpdGlvbnNMaXN0KTtcbiAgICB0aGlzLmNvbmRpdGlvbkRhdGE9Y29uZGl0aW9uc0xpc3RcbiAgICBjb25zb2xlLmxvZyhjb25kaXRpb25zTGlzdCk7XG5cbiAgfVxufVxuIiwiPG1haW4+XG4gICAgPGZvcm0gW2Zvcm1Hcm91cF09XCJmb3JtXCIgKHN1Ym1pdCk9XCJvblN1Ym1pdCgpXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJib3gtdGl0bGVcIiAqbmdJZj1cInNob3dQcm9maWxlTmFtZVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJveC10aXRsZS1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzPVwidGl0bGVcIj5DcsOpYXRpb24gZOKAmXVuIG5vdXZlYXUgcHJvZmlsIGTigJlvbmJvYXJkaW5nPC9oMz5cbiAgICAgICAgICAgICAgICA8cD5Tw6lsZWN0aW9ubmV6IGzigJlpY29uIGRlIHZvdHJlIGNob2l4IGV0IGluZGlxdWV6IGxlIG5vbSBkZSB2b3RyZSBub3V2ZWF1IHByb2ZpbCBk4oCZb25ib2FyZGluZzwvcD5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJvZmlsLW5hbWUtY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYWRkLXBpY3RvXCIgbWF0LXJhaXNlZC1idXR0b24gY29sb3I9XCJwcmltYXJ5XCIgKGNsaWNrKT1cIm9uU2hvd1BpY3RvTGlzdCgkZXZlbnQpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bWF0LWljb24+e3tmb3JtLmdldCgnUGljdG8nKS52YWx1ZT09PVwiXCIgPyAnY29udGFjdF9waG9uZScgOmZvcm0uZ2V0KCdQaWN0bycpLnZhbHVlfX08L21hdC1pY29uPlxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPG1hdC1mb3JtLWZpZWxkIGNsYXNzPVwiZXhhbXBsZS1mdWxsLXdpZHRoXCIgYXBwZWFyYW5jZT1cIm91dGxpbmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxtYXQtbGFiZWw+Tm9tIGRlIHZvdHJlIG5vdXZlYXUgcHJvZmlsPC9tYXQtbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBtYXRJbnB1dCBmb3JtQ29udHJvbE5hbWU9XCJOYW1lXCIgcGxhY2Vob2xkZXI9XCJFeC4gTWFuYWdlclwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsaXN0LXBpY3RvXCIgKm5nSWY9XCJpc1BpY3RvTGlzdFNob3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxtYXQtaWNvbiAqbmdGb3I9XCJsZXQgaWNvbiBvZiBtYXRJY29uTGlzdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW3N0eWxlLmNvbG9yXT1cImZvcm0uZ2V0KCdQaWN0bycpLnZhbHVlPT09aWNvbi5uYW1lID8gJyM4MzBCNkInOicjMDAwJ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cIm9uU2VsZWN0UGljdG8oJGV2ZW50LGljb24ubmFtZSlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e2ljb24ubmFtZX19XG4gICAgICAgICAgICAgICAgICAgICAgICA8L21hdC1pY29uPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8bWF0LWZvcm0tZmllbGQgY2xhc3M9XCJleGFtcGxlLWZ1bGwtd2lkdGhcIiBhcHBlYXJhbmNlPVwib3V0bGluZVwiPlxuICAgICAgICAgICAgICAgICAgICA8bWF0LWxhYmVsPkTDqXNjcmlwdGlvbjwvbWF0LWxhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWEgdHlwZT1cInRleHRcIiBtYXRJbnB1dCBmb3JtQ29udHJvbE5hbWU9XCJEZXNjcmlwdGlvblwiIHJvd3M9XCI0XCIgcGxhY2Vob2xkZXI9XCJcIj48L3RleHRhcmVhPlxuICAgICAgICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XG4gICAgICAgICAgICAgICAgPG1hdC1mb3JtLWZpZWxkIGNsYXNzPVwiZXhhbXBsZS1mdWxsLXdpZHRoXCIgYXBwZWFyYW5jZT1cIm91dGxpbmVcIj5cbiAgICAgICAgICAgICAgICAgICAgPG1hdC1sYWJlbD5UYWdzPC9tYXQtbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxtYXQtc2VsZWN0IGZvcm1Db250cm9sTmFtZT1cIlRhZ3NcIiByZXF1aXJlZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxtYXQtb3B0aW9uICpuZ0Zvcj1cImxldCB0YWcgb2YgdGFnc1wiIFt2YWx1ZV09XCJ0YWdcIj57e3RhZ319PC9tYXQtb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8L21hdC1zZWxlY3Q+XG4gICAgICAgICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cbiAgICAgICAgICAgICAgICA8bWF0LWNoZWNrYm94IGNsYXNzPVwiZm9ybS1maWVsZFwiIGZvcm1Db250cm9sTmFtZT1cIlN0YXR1c1wiPkFjdGl2ZTwvbWF0LWNoZWNrYm94PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsaW5rLWNyZWF0ZS1wcm9maWxcIj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImxpbmstYWRkLXByb2ZpbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBbc3R5bGUub3BhY2l0eV09XCIoZm9ybS5nZXQoJ05hbWUnKS52YWx1ZT09PScnIHx8IGZvcm0uZ2V0KCdUYWdzJykudmFsdWU9PScnKSA/IDAuNCA6IDFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgW2Rpc2FibGVkXT1cImZvcm0uZ2V0KCdOYW1lJykudmFsdWU9PT0nJyB8fCBmb3JtLmdldCgnVGFncycpLnZhbHVlPT0nJ1wiIG1hdC1yYWlzZWQtYnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIiAoY2xpY2spPSdvblNob3dDYXRlZ29yeSgpJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt7aWQgIT09IFwiMFwiID8gJ01vZGlmaWVyIHVuIHByb2ZpbCcgOidDcsOpZXIgdW4gbm91dmVhdSBwcm9maWwnfX1cbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjYXRlZ29yeVwiICpuZ0lmPVwiIXNob3dQcm9maWxlTmFtZVwiPlxuICAgICAgICAgICAgPCEtLSA8ZGl2IGNsYXNzPVwiY2F0ZWdvcnlcIj4gLS0+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzaWRlLWJhclwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdW1tYXJ5XCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMz48c3Bhbj57e3RoaXMuZm9ybS5nZXQoJ05hbWUnKS52YWx1ZX19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG1hdC1pY29uIChjbGljayk9XCJvcGVuRGlhbG9nKClcIj5lZGl0PC9tYXQtaWNvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgPG9sIHR5cGU9XCJJXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJsaS10aXRsZVwiICpuZ0Zvcj1cImxldCBjYXQgb2YgY2F0ZWdvcmllczsgIGxldCBpPWluZGV4XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gW2NsYXNzXT1cImVkaXRJbmRleD09PWkgPyAnZWRpdGlvbi1tb2RlJzonJ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBbbmd4U2Nyb2xsVG9dPVwiJyMnK2NhdC5uYW1lXCIgKGNsaWNrKT1cIm9uRXhwZW5kTW9yZSh7ZmllbGQ6Y2F0fSxpKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqbmdJZj1cImVkaXRJbmRleCE9PWlcIj57e2NhdC5uYW1lfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCAoYmx1cik9XCJvbkVkaXQoKVwiICNlZGl0ICpuZ0lmPVwiZWRpdEluZGV4PT09aVwiIHR5cGU9XCJ0ZXh0XCIgWyhuZ01vZGVsKV09XCJjYXQubmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbbmdNb2RlbE9wdGlvbnNdPVwie3N0YW5kYWxvbmU6IHRydWV9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChuZ01vZGVsQ2hhbmdlKT1cIm9uRWRpdENhdGVnb3J5TmFtZShpLGNhdC5uYW1lKVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bWF0LWljb24gKGNsaWNrKT1cIm9uUGFzc0luRWRpdE1vZGUoaSlcIj5lZGl0PC9tYXQtaWNvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9sPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBzdWIgb2YgY2F0LmZvcm1zO2xldCBqPWluZGV4XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwic3ViPy5mb3Jtc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBbY2xhc3NdPVwic3ViLmV4cGFuZE1vcmUgPyAnc3ViLXRpdGxlIGFjdGl2ZScgOidzdWItdGl0bGUnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cIm9uRXhwZW5kTW9yZSh7ZmllbGQ6c3VifSxpLGopXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIFtuZ3hTY3JvbGxUb109XCInIycrc3ViLmtleVwiPnt7aisxfX0uIHt7c3ViLmxhYmVsfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L29sPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPC9vbD5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBtYXQtYnV0dG9uIGNsYXNzPVwiYWRkLWNhdGVnb3J5IHRyYW5zcGFyZW50XCIgKGNsaWNrKT0nb25BZGROZXdDYXRlZ29yeSgkZXZlbnQpJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxtYXQtaWNvbj5hZGRfYm94PC9tYXQtaWNvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIEFqb3V0ZXIgdW5lIG5vdXZlbGxlIGNhdMOpZ29yaWVcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBtYXQtYnV0dG9uIGNsYXNzPVwicmVnaXN0ZXItYnV0dG9uXCIgdHlwZT1cInN1Ym1pdFwiPlxuICAgICAgICAgICAgICAgICAgICA8IS0tIDxtYXQtaWNvbj5jaGVjazwvbWF0LWljb24+IC0tPlxuICAgICAgICAgICAgICAgICAgICBFbnJlZ2lzdHJlciBsZSBwcm9maWxcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpZWxkc1wiIGNka0Ryb3BMaXN0R3JvdXA+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImV4YW1wbGUtbGlzdCBtdC0yMFwiICNwYXJlbnRMaXN0PVwiY2RrRHJvcExpc3RcIiBjZGtEcm9wTGlzdCBbY2RrRHJvcExpc3REYXRhXT1cImNhdGVnb3JpZXNcIlxuICAgICAgICAgICAgICAgICAgICAoY2RrRHJvcExpc3REcm9wcGVkKT1cImRyb3AoJGV2ZW50KVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2F0ZWdvcnktaXRlbVwiICpuZ0Zvcj1cImxldCBjYXRlZ29yeSBvZiBjYXRlZ29yaWVzOyAgbGV0IGk9aW5kZXhcIiBjZGtEcmFnXG4gICAgICAgICAgICAgICAgICAgICAgICBbaWRdPVwiY2F0ZWdvcnkubmFtZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxlZnQtYWN0aW9uIG1vdmUtaWNvbnNcIiBjZGtEcmFnSGFuZGxlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJ0cmFuc3BhcmVudC1idXR0b25cIiBbZGlzYWJsZWRdPVwiIWNhdGVnb3J5LmRlbGV0ZWFibGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwib25SZW1vdmVDYXRlZ29yeSgkZXZlbnQsaSlcIiBtYXQtcmFpc2VkLWJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG1hdC1pY29uIFtzdHlsZS5vcGFjaXR5XT1cIiFjYXRlZ29yeS5kZWxldGVhYmxlID8gMCA6MVwiPmRlbGV0ZTwvbWF0LWljb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZC1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpZWxkLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwiZXhhbXBsZS1mdWxsLXdpZHRoIGlucHV0LWNhdGVnb3J5LW5hbWVcIiB0eXBlPVwidGV4dFwiIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbcmVhZG9ubHldPVwiY2F0ZWdvcmllcy5sZW5ndGg8NCB8fCAhY2F0ZWdvcnkuZWRpdGFibGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3JlYWRvbmx5XT1cIiFjYXRlZ29yeS5lZGl0YWJsZVwiIFsobmdNb2RlbCldPVwiY2F0ZWdvcnkubmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbbmdNb2RlbE9wdGlvbnNdPVwie3N0YW5kYWxvbmU6IHRydWV9XCIgcGxhY2Vob2xkZXI9XCJTYWlzaXIgbGUgbm9tIGRlIGxhIGNhdMOpZ29yaWVcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgI2NoaWxkTGlzdD1cImNka0Ryb3BMaXN0XCIgKm5nSWY9XCJjYXRlZ29yeS5mb3Jtc1wiIFtjZGtEcm9wTGlzdERhdGFdPVwiY2F0ZWdvcnkuZm9ybXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZGtEcm9wTGlzdCAoY2RrRHJvcExpc3REcm9wcGVkKT1cImRyb3AoJGV2ZW50KVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiY2F0ZWdvcnkuZXhwYW5kTW9yZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIlwiICpuZ0Zvcj1cImxldCBmaWVsZCBvZiBjYXRlZ29yeS5mb3JtcztsZXQgaj1pbmRleFwiIFtpZF09XCJmaWVsZC5rZXlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNka0RyYWc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZHMtY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJ1dHRvbi1hY3Rpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIFtkaXNhYmxlZF09XCIhZmllbGQuZGVsZXRlYWJsZVwiIG1hdC1taW5pLWZhYiBjb2xvcj1cIndhcm5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImRlbGV0ZS1maWVsZCB0cmFuc3BhcmVudC1idXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwib25SZW1vdmVGaWVsZChpLGopXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxtYXQtaWNvbiBbc3R5bGUub3BhY2l0eV09XCIhZmllbGQuZGVsZXRlYWJsZSA/IDAgOjFcIj5kZWxldGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9tYXQtaWNvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpZWxkcy1jb250YWluZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtjbGFzc109XCIhZmllbGQuZGVsZXRlYWJsZSA/ICdkaXNhYmxlZCcgOicnXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpYi1zdWItY2F0ZWdvcnkgW2ZpZWxkXT1cImZpZWxkXCIgW2xlbmd0aF09XCJjYXRlZ29yeT8uZm9ybXM/Lmxlbmd0aFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtpXT1cImlcIiBbal09XCJqXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKG9uQWRkS2V5d29yZEZyb21JbnB1dCk9XCJhZGRLZXl3b3JkRnJvbUlucHV0KCRldmVudC5ldmVudCwkZXZlbnQucHJldixpLGopXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKG9uS2V5UHJlc3MpPVwib25LZXlQcmVzcygkZXZlbnQuZXZlbnQsaSxqKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChvbkFkZE5ld0ZpZWxkKT1cIm9uQWRkTmV3RmllbGQoaSlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAob25SZW1vdmVGaWVsZCk9XCJvblJlbW92ZUZpZWxkKGksailcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAob25DaGFuZ2VUeXBlKT1cIm9uQ2hhbmdlVHlwZShmaWVsZC50eXBlLGksailcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAob25SZW1vdmVLZXl3b3JkKT1cInJlbW92ZUtleXdvcmQoJGV2ZW50LmV2ZW50LGksailcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAob25BZGROZXdTdWJMZXZlbEZpZWxkKT1cIm9uQWRkTmV3U3ViTGV2ZWxGaWVsZChpLGopXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKG9uRXhwZW5kTW9yZSk9XCJvbkV4cGVuZE1vcmUoJGV2ZW50LGksailcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAob25DaGFuZ2VMYWJlbCk9XCJvbkNoYW5nZUxhYmVsKCRldmVudCxpLGopXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKG9uQ2hlY2tlZENoaXApPVwib25DaGVja2VkQ2hpcCgkZXZlbnQsaSxqKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChvbkRyb3ApPVwiZHJvcCgkZXZlbnQpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKG9uQ2hlY2tlZERlZmF1bHQpPVwib25DaGVja2VkRGVmYXVsdCgkZXZlbnQsaSxqKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtjb25kaXRpb25EYXRhXT1cImNvbmRpdGlvbkRhdGFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAob25HZXRDb25kaXRpb25WYWx1ZXMpPVwiZ2V0Q29uZGl0aW9uVmFsdWVzKClcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiAqbmdJZj1cImZpZWxkLmV4cGFuZE1vcmVcIiBjbGFzcz1cImNoaWxkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2ICNjaGlsZExpc3Q9XCJjZGtEcm9wTGlzdFwiICpuZ0lmPVwiZmllbGQuZm9ybXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtjZGtEcm9wTGlzdERhdGFdPVwiZmllbGQuZm9ybXNcIiBjZGtEcm9wTGlzdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjZGtEcm9wTGlzdERyb3BwZWQpPVwiZHJvcCgkZXZlbnQpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICpuZ0Zvcj1cImxldCBjaGlsZCBvZiBmaWVsZC5mb3JtcztsZXQgaz1pbmRleFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtpZF09XCJjaGlsZC5rZXlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjZGtEcmFnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpZWxkcy1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImJ1dHRvbi1hY3Rpb24gY2hpbGQtMi1iYWNrZ3JvdW5kXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gW2Rpc2FibGVkXT1cIiFjaGlsZC5kZWxldGVhYmxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hdC1taW5pLWZhYiBjb2xvcj1cIndhcm5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJkZWxldGUtZmllbGQgdHJhbnNwYXJlbnQtYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJvblJlbW92ZUZpZWxkKGksaixrKVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG1hdC1pY29uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3N0eWxlLm9wYWNpdHldPVwiIWNoaWxkLmRlbGV0ZWFibGUgPyAwIDoxXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlPC9tYXQtaWNvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpZWxkcy1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpYi1zdWItY2F0ZWdvcnkgW2ZpZWxkXT1cImNoaWxkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtsZW5ndGhdPVwiZmllbGQ/LmZvcm1zPy5sZW5ndGhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2ldPVwialwiIFtqXT1cImtcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKG9uQWRkS2V5d29yZEZyb21JbnB1dCk9XCJhZGRLZXl3b3JkRnJvbUlucHV0KCRldmVudC5ldmVudCwkZXZlbnQucHJldixpLGosaylcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKG9uS2V5UHJlc3MpPVwib25LZXlQcmVzcygkZXZlbnQuZXZlbnQsaSxqLGspXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChvbkFkZE5ld0ZpZWxkKT1cIm9uQWRkTmV3RmllbGQoaSwgailcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKG9uUmVtb3ZlRmllbGQpPVwib25SZW1vdmVGaWVsZChpLGosaylcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKG9uQ2hhbmdlVHlwZSk9XCJvbkNoYW5nZVR5cGUoY2hpbGQudHlwZSxpLGosaylcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKG9uUmVtb3ZlS2V5d29yZCk9XCJyZW1vdmVLZXl3b3JkKCRldmVudC5ldmVudCxpLGosaylcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKG9uQWRkTmV3U3ViTGV2ZWxGaWVsZCk9XCJvbkFkZE5ld1N1YkxldmVsRmllbGQoaSxqLGspXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChvbkV4cGVuZE1vcmUpPVwib25FeHBlbmRNb3JlKCRldmVudCxpLGosaylcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKG9uQ2hhbmdlTGFiZWwpPVwib25DaGFuZ2VMYWJlbCgkZXZlbnQsaSxqLGspXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChvbkNoZWNrZWRDaGlwKT1cIm9uQ2hlY2tlZENoaXAoJGV2ZW50LGksaixrKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAob25Ecm9wKT1cImRyb3AoJGV2ZW50KVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAob25DaGVja2VkRGVmYXVsdCk9XCJvbkNoZWNrZWREZWZhdWx0KCRldmVudCxpLGosaylcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2NvbmRpdGlvbkRhdGFdPVwiY29uZGl0aW9uRGF0YVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAob25HZXRDb25kaXRpb25WYWx1ZXMpPVwiZ2V0Q29uZGl0aW9uVmFsdWVzKClcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgKm5nSWY9XCJjaGlsZC5leHBhbmRNb3JlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImNoaWxkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiAjY2hpbGRMaXN0PVwiY2RrRHJvcExpc3RcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqbmdJZj1cImNoaWxkLmZvcm1zXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2Nka0Ryb3BMaXN0RGF0YV09XCJjaGlsZC5mb3Jtc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNka0Ryb3BMaXN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjZGtEcm9wTGlzdERyb3BwZWQpPVwiZHJvcCgkZXZlbnQpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKm5nRm9yPVwibGV0IGMyIG9mIGNoaWxkLmZvcm1zO2xldCBsPWluZGV4XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtpZF09XCJjMi5rZXlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2RrRHJhZz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZmllbGRzLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJidXR0b24tYWN0aW9uIGNoaWxkLTMtYmFja2dyb3VuZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtkaXNhYmxlZF09XCIhZmllbGQuZGVsZXRlYWJsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF0LW1pbmktZmFiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJ3YXJuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImRlbGV0ZS1maWVsZCB0cmFuc3BhcmVudC1idXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJvblJlbW92ZUZpZWxkKGksaixrLGwpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG1hdC1pY29uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxldGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L21hdC1pY29uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZpZWxkcy1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaWItc3ViLWNhdGVnb3J5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2ZpZWxkXT1cImMyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbbGVuZ3RoXT1cImNoaWxkPy5mb3Jtcz8ubGVuZ3RoXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbaV09XCJrXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbal09XCJsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAob25BZGRLZXl3b3JkRnJvbUlucHV0KT1cImFkZEtleXdvcmRGcm9tSW5wdXQoJGV2ZW50LmV2ZW50LCAkZXZlbnQucHJldixpLGosayxsKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKG9uS2V5UHJlc3MpPVwib25LZXlQcmVzcygkZXZlbnQuZXZlbnQsaSxqLGssbClcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChvbkFkZE5ld0ZpZWxkKT1cIm9uQWRkTmV3RmllbGQoaSxqLGspXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAob25SZW1vdmVGaWVsZCk9XCJvblJlbW92ZUZpZWxkKGksaixrLGwpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAob25DaGFuZ2VUeXBlKT1cIm9uQ2hhbmdlVHlwZShjMi50eXBlLGksaixrLGwpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAob25SZW1vdmVLZXl3b3JkKT1cInJlbW92ZUtleXdvcmQoJGV2ZW50LmV2ZW50LGksaixrLGwpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAob25BZGROZXdTdWJMZXZlbEZpZWxkKT1cIm9uQWRkTmV3U3ViTGV2ZWxGaWVsZChpLGosayxsKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKG9uRXhwZW5kTW9yZSk9XCJvbkV4cGVuZE1vcmUoJGV2ZW50LGksaixrLGwpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAob25DaGFuZ2VMYWJlbCk9XCJvbkNoYW5nZUxhYmVsKCRldmVudCxpLGosayxsKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKG9uQ2hlY2tlZENoaXApPVwib25DaGVja2VkQ2hpcCgkZXZlbnQsaSxqLGssbClcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChvbkRyb3ApPVwiZHJvcCgkZXZlbnQpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAob25DaGVja2VkRGVmYXVsdCk9XCJvbkNoZWNrZWREZWZhdWx0KCRldmVudCxpLGosayxsKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2NvbmRpdGlvbkRhdGFdPVwiY29uZGl0aW9uRGF0YVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKG9uR2V0Q29uZGl0aW9uVmFsdWVzKT1cImdldENvbmRpdGlvblZhbHVlcygpXCI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiY2hpbGRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGliLXN1Yi1jYXRlZ29yeT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhZGQtYnV0dG9uLWNvbnRhaW5lciBhZGQtYnV0dG9uLXN1Yi1jYXRlZ29yeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJjaGlsZD8uZm9ybXM/Lmxlbmd0aC0xPT09bFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9XCJtYXJnaW46MTBweCBhdXRvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2Rpc2FibGVkXT1cImNoaWxkPy5mb3Jtcz8ubGVuZ3RoLTEhPT1sXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3N0eWxlLm9wYWNpdHldPVwiY2hpbGQ/LmZvcm1zPy5sZW5ndGgtMT09PWwgPyAxIDowXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF0LXJhaXNlZC1idXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT0nb25BZGROZXdGaWVsZChpLGosayknPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bWF0LWljb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRfYm94XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbWF0LWljb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPkFqb3V0ZXIgdW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYW1wPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGliLXN1Yi1jYXRlZ29yeT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFkZC1idXR0b24tY29udGFpbmVyIGFkZC1idXR0b24tc3ViLWNhdGVnb3J5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICpuZ0lmPVwiZmllbGQ/LmZvcm1zPy5sZW5ndGgtMT09PWtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gc3R5bGU9XCJtYXJnaW46MTBweCBhdXRvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbZGlzYWJsZWRdPVwiZmllbGQ/LmZvcm1zPy5sZW5ndGgtMSE9PWtcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtzdHlsZS5vcGFjaXR5XT1cImZpZWxkPy5mb3Jtcz8ubGVuZ3RoLTE9PT1rID8gMSA6MFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF0LXJhaXNlZC1idXR0b24gY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY2xpY2spPSdvbkFkZE5ld0ZpZWxkKGksaiknPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxtYXQtaWNvbj5hZGRfYm94PC9tYXQtaWNvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5Bam91dGVyIHVuIGNoYW1wPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGliLXN1Yi1jYXRlZ29yeT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhZGQtYnV0dG9uLWNvbnRhaW5lciBhZGQtYnV0dG9uLXN1Yi1jYXRlZ29yeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICpuZ0lmPVwiY2F0ZWdvcnk/LmZvcm1zPy5sZW5ndGgtMT09PWpcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBzdHlsZT1cIm1hcmdpbjoxMHB4IGF1dG9cIiBbZGlzYWJsZWRdPVwiY2F0ZWdvcnk/LmZvcm1zPy5sZW5ndGgtMSE9PWpcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3N0eWxlLm9wYWNpdHldPVwiY2F0ZWdvcnk/LmZvcm1zPy5sZW5ndGgtMT09PWogPyAxIDowXCIgbWF0LXJhaXNlZC1idXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiIChjbGljayk9J29uQWRkTmV3RmllbGQoaSknPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG1hdC1pY29uPmFkZF9ib3g8L21hdC1pY29uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+QWpvdXRlciB1biBjaGFtcDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBtYXQtbWluaS1mYWIgY29sb3I9XCJwcmltYXJ5XCIgY2xhc3M9XCJleHBhbmQtYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwib25FeHBlbmRNb3JlKHtldmVudDokZXZlbnQsIGZpZWxkOmNhdGVnb3J5fSxpKVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxtYXQtaWNvbiAqbmdJZj1cIiFjYXRlZ29yeS5leHBhbmRNb3JlXCI+Y2hldnJvbl9yaWdodDwvbWF0LWljb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG1hdC1pY29uICpuZ0lmPVwiY2F0ZWdvcnkuZXhwYW5kTW9yZVwiPmV4cGFuZF9tb3JlPC9tYXQtaWNvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYWRkLWJ1dHRvbi1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gKGNsaWNrKT0nb25BZGROZXdDYXRlZ29yeSgkZXZlbnQpJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bWF0LWljb24+YWRkPC9tYXQtaWNvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBBam91dGVyIHVuZSBjYXTDqWdvcmllXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG1hdC1pY29uPmNoZWNrPC9tYXQtaWNvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBFbnJlZ2lzdHJlclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+IC0tPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZm9ybT5cbjwvbWFpbj4iXX0=