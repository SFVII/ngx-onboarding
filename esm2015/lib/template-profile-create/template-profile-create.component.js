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
import * as i10 from "ngx-intl-tel-input";
import * as i11 from "@angular/material/select";
import * as i12 from "@angular/material/checkbox";
import * as i13 from "@angular/material/core";
import * as i14 from "@angular/cdk/drag-drop";
import * as i15 from "@nicky-lenaers/ngx-scroll-to";
import * as i16 from "../components/sub-template-profile/sub-template-profile.component";
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
    i0.ɵɵtext(17, "Description");
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
function TemplateProfileCreateComponent_div_3_div_19_mat_select_11_mat_option_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 20);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const select_r56 = ctx.$implicit;
    i0.ɵɵproperty("value", select_r56.value);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", select_r56.value, "");
} }
function TemplateProfileCreateComponent_div_3_div_19_mat_select_11_Template(rf, ctx) { if (rf & 1) {
    const _r59 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-select", 52);
    i0.ɵɵlistener("valueChange", function TemplateProfileCreateComponent_div_3_div_19_mat_select_11_Template_mat_select_valueChange_0_listener($event) { i0.ɵɵrestoreView(_r59); const category_r49 = i0.ɵɵnextContext().$implicit; return category_r49.selector.value = $event; })("ngModelChange", function TemplateProfileCreateComponent_div_3_div_19_mat_select_11_Template_mat_select_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r59); const category_r49 = i0.ɵɵnextContext().$implicit; return category_r49.selector.value = $event; });
    i0.ɵɵtemplate(1, TemplateProfileCreateComponent_div_3_div_19_mat_select_11_mat_option_1_Template, 2, 2, "mat-option", 13);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const category_r49 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("value", category_r49.selector.value)("ngModel", category_r49.selector.value)("ngModelOptions", i0.ɵɵpureFunction0(4, _c0));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", category_r49.selector.defaultValue);
} }
function TemplateProfileCreateComponent_div_3_div_19_div_12_ng_container_2_div_1_div_9_div_1_div_2_div_9_div_1_div_2_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r85 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 72);
    i0.ɵɵelementStart(1, "button", 73);
    i0.ɵɵlistener("click", function TemplateProfileCreateComponent_div_3_div_19_div_12_ng_container_2_div_1_div_9_div_1_div_2_div_9_div_1_div_2_div_10_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r85); const k_r74 = i0.ɵɵnextContext(4).index; const j_r67 = i0.ɵɵnextContext(3).index; const i_r50 = i0.ɵɵnextContext(3).index; const ctx_r83 = i0.ɵɵnextContext(2); return ctx_r83.onAddNewField(i_r50, j_r67, k_r74); });
    i0.ɵɵelementStart(2, "mat-icon");
    i0.ɵɵtext(3, " add_box ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "span");
    i0.ɵɵtext(5, "Ajouter un champ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const l_r81 = i0.ɵɵnextContext().index;
    const child_r73 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵstyleProp("opacity", (child_r73 == null ? null : child_r73.forms == null ? null : child_r73.forms.length) - 1 === l_r81 ? 1 : 0);
    i0.ɵɵproperty("disabled", (child_r73 == null ? null : child_r73.forms == null ? null : child_r73.forms.length) - 1 !== l_r81);
} }
function TemplateProfileCreateComponent_div_3_div_19_div_12_ng_container_2_div_1_div_9_div_1_div_2_div_9_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r92 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 70);
    i0.ɵɵelementStart(1, "div", 57);
    i0.ɵɵelementStart(2, "div", 58);
    i0.ɵɵelementStart(3, "div", 71);
    i0.ɵɵelementStart(4, "button", 60);
    i0.ɵɵlistener("click", function TemplateProfileCreateComponent_div_3_div_19_div_12_ng_container_2_div_1_div_9_div_1_div_2_div_9_div_1_div_2_Template_button_click_4_listener() { i0.ɵɵrestoreView(_r92); const l_r81 = ctx.index; const k_r74 = i0.ɵɵnextContext(3).index; const j_r67 = i0.ɵɵnextContext(3).index; const i_r50 = i0.ɵɵnextContext(3).index; const ctx_r90 = i0.ɵɵnextContext(2); return ctx_r90.onRemoveField(i_r50, j_r67, k_r74, l_r81); });
    i0.ɵɵelementStart(5, "mat-icon");
    i0.ɵɵtext(6, " delete ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "div", 61);
    i0.ɵɵelementStart(8, "lib-sub-category", 62);
    i0.ɵɵlistener("onAddKeywordFromInput", function TemplateProfileCreateComponent_div_3_div_19_div_12_ng_container_2_div_1_div_9_div_1_div_2_div_9_div_1_div_2_Template_lib_sub_category_onAddKeywordFromInput_8_listener($event) { i0.ɵɵrestoreView(_r92); const l_r81 = ctx.index; const k_r74 = i0.ɵɵnextContext(3).index; const j_r67 = i0.ɵɵnextContext(3).index; const i_r50 = i0.ɵɵnextContext(3).index; const ctx_r95 = i0.ɵɵnextContext(2); return ctx_r95.addKeywordFromInput($event.event, $event.prev, i_r50, j_r67, k_r74, l_r81); })("onKeyPress", function TemplateProfileCreateComponent_div_3_div_19_div_12_ng_container_2_div_1_div_9_div_1_div_2_div_9_div_1_div_2_Template_lib_sub_category_onKeyPress_8_listener($event) { i0.ɵɵrestoreView(_r92); const l_r81 = ctx.index; const k_r74 = i0.ɵɵnextContext(3).index; const j_r67 = i0.ɵɵnextContext(3).index; const i_r50 = i0.ɵɵnextContext(3).index; const ctx_r99 = i0.ɵɵnextContext(2); return ctx_r99.onKeyPress($event.event, i_r50, j_r67, k_r74, l_r81); })("onAddNewField", function TemplateProfileCreateComponent_div_3_div_19_div_12_ng_container_2_div_1_div_9_div_1_div_2_div_9_div_1_div_2_Template_lib_sub_category_onAddNewField_8_listener() { i0.ɵɵrestoreView(_r92); const k_r74 = i0.ɵɵnextContext(3).index; const j_r67 = i0.ɵɵnextContext(3).index; const i_r50 = i0.ɵɵnextContext(3).index; const ctx_r103 = i0.ɵɵnextContext(2); return ctx_r103.onAddNewField(i_r50, j_r67, k_r74); })("onRemoveField", function TemplateProfileCreateComponent_div_3_div_19_div_12_ng_container_2_div_1_div_9_div_1_div_2_div_9_div_1_div_2_Template_lib_sub_category_onRemoveField_8_listener() { i0.ɵɵrestoreView(_r92); const l_r81 = ctx.index; const k_r74 = i0.ɵɵnextContext(3).index; const j_r67 = i0.ɵɵnextContext(3).index; const i_r50 = i0.ɵɵnextContext(3).index; const ctx_r107 = i0.ɵɵnextContext(2); return ctx_r107.onRemoveField(i_r50, j_r67, k_r74, l_r81); })("onChangeType", function TemplateProfileCreateComponent_div_3_div_19_div_12_ng_container_2_div_1_div_9_div_1_div_2_div_9_div_1_div_2_Template_lib_sub_category_onChangeType_8_listener() { i0.ɵɵrestoreView(_r92); const c2_r80 = ctx.$implicit; const l_r81 = ctx.index; const k_r74 = i0.ɵɵnextContext(3).index; const j_r67 = i0.ɵɵnextContext(3).index; const i_r50 = i0.ɵɵnextContext(3).index; const ctx_r111 = i0.ɵɵnextContext(2); return ctx_r111.onChangeType(c2_r80.type, i_r50, j_r67, k_r74, l_r81); })("onRemoveKeyword", function TemplateProfileCreateComponent_div_3_div_19_div_12_ng_container_2_div_1_div_9_div_1_div_2_div_9_div_1_div_2_Template_lib_sub_category_onRemoveKeyword_8_listener($event) { i0.ɵɵrestoreView(_r92); const l_r81 = ctx.index; const k_r74 = i0.ɵɵnextContext(3).index; const j_r67 = i0.ɵɵnextContext(3).index; const i_r50 = i0.ɵɵnextContext(3).index; const ctx_r115 = i0.ɵɵnextContext(2); return ctx_r115.removeKeyword($event.event, i_r50, j_r67, k_r74, l_r81); })("onAddNewSubLevelField", function TemplateProfileCreateComponent_div_3_div_19_div_12_ng_container_2_div_1_div_9_div_1_div_2_div_9_div_1_div_2_Template_lib_sub_category_onAddNewSubLevelField_8_listener() { i0.ɵɵrestoreView(_r92); const l_r81 = ctx.index; const k_r74 = i0.ɵɵnextContext(3).index; const j_r67 = i0.ɵɵnextContext(3).index; const i_r50 = i0.ɵɵnextContext(3).index; const ctx_r119 = i0.ɵɵnextContext(2); return ctx_r119.onAddNewSubLevelField(i_r50, j_r67, k_r74, l_r81); })("onExpendMore", function TemplateProfileCreateComponent_div_3_div_19_div_12_ng_container_2_div_1_div_9_div_1_div_2_div_9_div_1_div_2_Template_lib_sub_category_onExpendMore_8_listener($event) { i0.ɵɵrestoreView(_r92); const l_r81 = ctx.index; const k_r74 = i0.ɵɵnextContext(3).index; const j_r67 = i0.ɵɵnextContext(3).index; const i_r50 = i0.ɵɵnextContext(3).index; const ctx_r123 = i0.ɵɵnextContext(2); return ctx_r123.onExpendMore($event, i_r50, j_r67, k_r74, l_r81); })("onChangeLabel", function TemplateProfileCreateComponent_div_3_div_19_div_12_ng_container_2_div_1_div_9_div_1_div_2_div_9_div_1_div_2_Template_lib_sub_category_onChangeLabel_8_listener($event) { i0.ɵɵrestoreView(_r92); const l_r81 = ctx.index; const k_r74 = i0.ɵɵnextContext(3).index; const j_r67 = i0.ɵɵnextContext(3).index; const i_r50 = i0.ɵɵnextContext(3).index; const ctx_r127 = i0.ɵɵnextContext(2); return ctx_r127.onChangeLabel($event, i_r50, j_r67, k_r74, l_r81); })("onCheckedChip", function TemplateProfileCreateComponent_div_3_div_19_div_12_ng_container_2_div_1_div_9_div_1_div_2_div_9_div_1_div_2_Template_lib_sub_category_onCheckedChip_8_listener($event) { i0.ɵɵrestoreView(_r92); const l_r81 = ctx.index; const k_r74 = i0.ɵɵnextContext(3).index; const j_r67 = i0.ɵɵnextContext(3).index; const i_r50 = i0.ɵɵnextContext(3).index; const ctx_r131 = i0.ɵɵnextContext(2); return ctx_r131.onCheckedChip($event, i_r50, j_r67, k_r74, l_r81); })("onDrop", function TemplateProfileCreateComponent_div_3_div_19_div_12_ng_container_2_div_1_div_9_div_1_div_2_div_9_div_1_div_2_Template_lib_sub_category_onDrop_8_listener($event) { i0.ɵɵrestoreView(_r92); const ctx_r135 = i0.ɵɵnextContext(11); return ctx_r135.drop($event); })("onCheckedDefault", function TemplateProfileCreateComponent_div_3_div_19_div_12_ng_container_2_div_1_div_9_div_1_div_2_div_9_div_1_div_2_Template_lib_sub_category_onCheckedDefault_8_listener($event) { i0.ɵɵrestoreView(_r92); const l_r81 = ctx.index; const k_r74 = i0.ɵɵnextContext(3).index; const j_r67 = i0.ɵɵnextContext(3).index; const i_r50 = i0.ɵɵnextContext(3).index; const ctx_r136 = i0.ɵɵnextContext(2); return ctx_r136.onCheckedDefault($event, i_r50, j_r67, k_r74, l_r81); })("onGetConditionValues", function TemplateProfileCreateComponent_div_3_div_19_div_12_ng_container_2_div_1_div_9_div_1_div_2_div_9_div_1_div_2_Template_lib_sub_category_onGetConditionValues_8_listener() { i0.ɵɵrestoreView(_r92); const ctx_r140 = i0.ɵɵnextContext(11); return ctx_r140.getConditionValues(); });
    i0.ɵɵelement(9, "div", 65);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(10, TemplateProfileCreateComponent_div_3_div_19_div_12_ng_container_2_div_1_div_9_div_1_div_2_div_9_div_1_div_2_div_10_Template, 6, 3, "div", 64);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const c2_r80 = ctx.$implicit;
    const l_r81 = ctx.index;
    const ctx_r142 = i0.ɵɵnextContext(3);
    const child_r73 = ctx_r142.$implicit;
    const k_r74 = ctx_r142.index;
    const field_r66 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r79 = i0.ɵɵnextContext(5);
    i0.ɵɵproperty("id", c2_r80.key);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("disabled", !field_r66.deleteable);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("field", c2_r80)("length", child_r73 == null ? null : child_r73.forms == null ? null : child_r73.forms.length)("i", k_r74)("j", l_r81)("conditionData", ctx_r79.conditionData);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", (child_r73 == null ? null : child_r73.forms == null ? null : child_r73.forms.length) - 1 === l_r81);
} }
function TemplateProfileCreateComponent_div_3_div_19_div_12_ng_container_2_div_1_div_9_div_1_div_2_div_9_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r144 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 53, 54);
    i0.ɵɵlistener("cdkDropListDropped", function TemplateProfileCreateComponent_div_3_div_19_div_12_ng_container_2_div_1_div_9_div_1_div_2_div_9_div_1_Template_div_cdkDropListDropped_0_listener($event) { i0.ɵɵrestoreView(_r144); const ctx_r143 = i0.ɵɵnextContext(10); return ctx_r143.drop($event); });
    i0.ɵɵtemplate(2, TemplateProfileCreateComponent_div_3_div_19_div_12_ng_container_2_div_1_div_9_div_1_div_2_div_9_div_1_div_2_Template, 11, 8, "div", 69);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const child_r73 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵproperty("cdkDropListData", child_r73.forms);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", child_r73.forms);
} }
function TemplateProfileCreateComponent_div_3_div_19_div_12_ng_container_2_div_1_div_9_div_1_div_2_div_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 65);
    i0.ɵɵtemplate(1, TemplateProfileCreateComponent_div_3_div_19_div_12_ng_container_2_div_1_div_9_div_1_div_2_div_9_div_1_Template, 3, 2, "div", 50);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const child_r73 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", child_r73.forms);
} }
function TemplateProfileCreateComponent_div_3_div_19_div_12_ng_container_2_div_1_div_9_div_1_div_2_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r149 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 72);
    i0.ɵɵelementStart(1, "button", 73);
    i0.ɵɵlistener("click", function TemplateProfileCreateComponent_div_3_div_19_div_12_ng_container_2_div_1_div_9_div_1_div_2_div_10_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r149); const j_r67 = i0.ɵɵnextContext(4).index; const i_r50 = i0.ɵɵnextContext(3).index; const ctx_r147 = i0.ɵɵnextContext(2); return ctx_r147.onAddNewField(i_r50, j_r67); });
    i0.ɵɵelementStart(2, "mat-icon");
    i0.ɵɵtext(3, "add_box");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "span");
    i0.ɵɵtext(5, "Ajouter un champ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const k_r74 = i0.ɵɵnextContext().index;
    const field_r66 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵstyleProp("opacity", (field_r66 == null ? null : field_r66.forms == null ? null : field_r66.forms.length) - 1 === k_r74 ? 1 : 0);
    i0.ɵɵproperty("disabled", (field_r66 == null ? null : field_r66.forms == null ? null : field_r66.forms.length) - 1 !== k_r74);
} }
function TemplateProfileCreateComponent_div_3_div_19_div_12_ng_container_2_div_1_div_9_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r155 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 67);
    i0.ɵɵelementStart(1, "div", 57);
    i0.ɵɵelementStart(2, "div", 58);
    i0.ɵɵelementStart(3, "div", 68);
    i0.ɵɵelementStart(4, "button", 60);
    i0.ɵɵlistener("click", function TemplateProfileCreateComponent_div_3_div_19_div_12_ng_container_2_div_1_div_9_div_1_div_2_Template_button_click_4_listener() { i0.ɵɵrestoreView(_r155); const k_r74 = ctx.index; const j_r67 = i0.ɵɵnextContext(3).index; const i_r50 = i0.ɵɵnextContext(3).index; const ctx_r153 = i0.ɵɵnextContext(2); return ctx_r153.onRemoveField(i_r50, j_r67, k_r74); });
    i0.ɵɵelementStart(5, "mat-icon");
    i0.ɵɵtext(6, " delete");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "div", 61);
    i0.ɵɵelementStart(8, "lib-sub-category", 62);
    i0.ɵɵlistener("onAddKeywordFromInput", function TemplateProfileCreateComponent_div_3_div_19_div_12_ng_container_2_div_1_div_9_div_1_div_2_Template_lib_sub_category_onAddKeywordFromInput_8_listener($event) { i0.ɵɵrestoreView(_r155); const k_r74 = ctx.index; const j_r67 = i0.ɵɵnextContext(3).index; const i_r50 = i0.ɵɵnextContext(3).index; const ctx_r157 = i0.ɵɵnextContext(2); return ctx_r157.addKeywordFromInput($event.event, $event.prev, i_r50, j_r67, k_r74); })("onKeyPress", function TemplateProfileCreateComponent_div_3_div_19_div_12_ng_container_2_div_1_div_9_div_1_div_2_Template_lib_sub_category_onKeyPress_8_listener($event) { i0.ɵɵrestoreView(_r155); const k_r74 = ctx.index; const j_r67 = i0.ɵɵnextContext(3).index; const i_r50 = i0.ɵɵnextContext(3).index; const ctx_r160 = i0.ɵɵnextContext(2); return ctx_r160.onKeyPress($event.event, i_r50, j_r67, k_r74); })("onAddNewField", function TemplateProfileCreateComponent_div_3_div_19_div_12_ng_container_2_div_1_div_9_div_1_div_2_Template_lib_sub_category_onAddNewField_8_listener() { i0.ɵɵrestoreView(_r155); const j_r67 = i0.ɵɵnextContext(3).index; const i_r50 = i0.ɵɵnextContext(3).index; const ctx_r163 = i0.ɵɵnextContext(2); return ctx_r163.onAddNewField(i_r50, j_r67); })("onRemoveField", function TemplateProfileCreateComponent_div_3_div_19_div_12_ng_container_2_div_1_div_9_div_1_div_2_Template_lib_sub_category_onRemoveField_8_listener() { i0.ɵɵrestoreView(_r155); const k_r74 = ctx.index; const j_r67 = i0.ɵɵnextContext(3).index; const i_r50 = i0.ɵɵnextContext(3).index; const ctx_r166 = i0.ɵɵnextContext(2); return ctx_r166.onRemoveField(i_r50, j_r67, k_r74); })("onChangeType", function TemplateProfileCreateComponent_div_3_div_19_div_12_ng_container_2_div_1_div_9_div_1_div_2_Template_lib_sub_category_onChangeType_8_listener() { i0.ɵɵrestoreView(_r155); const child_r73 = ctx.$implicit; const k_r74 = ctx.index; const j_r67 = i0.ɵɵnextContext(3).index; const i_r50 = i0.ɵɵnextContext(3).index; const ctx_r169 = i0.ɵɵnextContext(2); return ctx_r169.onChangeType(child_r73.type, i_r50, j_r67, k_r74); })("onRemoveKeyword", function TemplateProfileCreateComponent_div_3_div_19_div_12_ng_container_2_div_1_div_9_div_1_div_2_Template_lib_sub_category_onRemoveKeyword_8_listener($event) { i0.ɵɵrestoreView(_r155); const k_r74 = ctx.index; const j_r67 = i0.ɵɵnextContext(3).index; const i_r50 = i0.ɵɵnextContext(3).index; const ctx_r172 = i0.ɵɵnextContext(2); return ctx_r172.removeKeyword($event.event, i_r50, j_r67, k_r74); })("onAddNewSubLevelField", function TemplateProfileCreateComponent_div_3_div_19_div_12_ng_container_2_div_1_div_9_div_1_div_2_Template_lib_sub_category_onAddNewSubLevelField_8_listener() { i0.ɵɵrestoreView(_r155); const k_r74 = ctx.index; const j_r67 = i0.ɵɵnextContext(3).index; const i_r50 = i0.ɵɵnextContext(3).index; const ctx_r175 = i0.ɵɵnextContext(2); return ctx_r175.onAddNewSubLevelField(i_r50, j_r67, k_r74); })("onExpendMore", function TemplateProfileCreateComponent_div_3_div_19_div_12_ng_container_2_div_1_div_9_div_1_div_2_Template_lib_sub_category_onExpendMore_8_listener($event) { i0.ɵɵrestoreView(_r155); const k_r74 = ctx.index; const j_r67 = i0.ɵɵnextContext(3).index; const i_r50 = i0.ɵɵnextContext(3).index; const ctx_r178 = i0.ɵɵnextContext(2); return ctx_r178.onExpendMore($event, i_r50, j_r67, k_r74); })("onChangeLabel", function TemplateProfileCreateComponent_div_3_div_19_div_12_ng_container_2_div_1_div_9_div_1_div_2_Template_lib_sub_category_onChangeLabel_8_listener($event) { i0.ɵɵrestoreView(_r155); const k_r74 = ctx.index; const j_r67 = i0.ɵɵnextContext(3).index; const i_r50 = i0.ɵɵnextContext(3).index; const ctx_r181 = i0.ɵɵnextContext(2); return ctx_r181.onChangeLabel($event, i_r50, j_r67, k_r74); })("onCheckedChip", function TemplateProfileCreateComponent_div_3_div_19_div_12_ng_container_2_div_1_div_9_div_1_div_2_Template_lib_sub_category_onCheckedChip_8_listener($event) { i0.ɵɵrestoreView(_r155); const k_r74 = ctx.index; const j_r67 = i0.ɵɵnextContext(3).index; const i_r50 = i0.ɵɵnextContext(3).index; const ctx_r184 = i0.ɵɵnextContext(2); return ctx_r184.onCheckedChip($event, i_r50, j_r67, k_r74); })("onDrop", function TemplateProfileCreateComponent_div_3_div_19_div_12_ng_container_2_div_1_div_9_div_1_div_2_Template_lib_sub_category_onDrop_8_listener($event) { i0.ɵɵrestoreView(_r155); const ctx_r187 = i0.ɵɵnextContext(8); return ctx_r187.drop($event); })("onCheckedDefault", function TemplateProfileCreateComponent_div_3_div_19_div_12_ng_container_2_div_1_div_9_div_1_div_2_Template_lib_sub_category_onCheckedDefault_8_listener($event) { i0.ɵɵrestoreView(_r155); const k_r74 = ctx.index; const j_r67 = i0.ɵɵnextContext(3).index; const i_r50 = i0.ɵɵnextContext(3).index; const ctx_r188 = i0.ɵɵnextContext(2); return ctx_r188.onCheckedDefault($event, i_r50, j_r67, k_r74); })("onGetConditionValues", function TemplateProfileCreateComponent_div_3_div_19_div_12_ng_container_2_div_1_div_9_div_1_div_2_Template_lib_sub_category_onGetConditionValues_8_listener() { i0.ɵɵrestoreView(_r155); const ctx_r191 = i0.ɵɵnextContext(8); return ctx_r191.getConditionValues(); });
    i0.ɵɵtemplate(9, TemplateProfileCreateComponent_div_3_div_19_div_12_ng_container_2_div_1_div_9_div_1_div_2_div_9_Template, 2, 1, "div", 63);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(10, TemplateProfileCreateComponent_div_3_div_19_div_12_ng_container_2_div_1_div_9_div_1_div_2_div_10_Template, 6, 3, "div", 64);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const child_r73 = ctx.$implicit;
    const k_r74 = ctx.index;
    const ctx_r192 = i0.ɵɵnextContext(3);
    const field_r66 = ctx_r192.$implicit;
    const j_r67 = ctx_r192.index;
    const ctx_r72 = i0.ɵɵnextContext(5);
    i0.ɵɵproperty("id", child_r73.key);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("disabled", !child_r73.deleteable);
    i0.ɵɵadvance(1);
    i0.ɵɵstyleProp("opacity", !child_r73.deleteable ? 0 : 1);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("field", child_r73)("length", field_r66 == null ? null : field_r66.forms == null ? null : field_r66.forms.length)("i", j_r67)("j", k_r74)("conditionData", ctx_r72.conditionData);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", child_r73.expandMore);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", (field_r66 == null ? null : field_r66.forms == null ? null : field_r66.forms.length) - 1 === k_r74);
} }
function TemplateProfileCreateComponent_div_3_div_19_div_12_ng_container_2_div_1_div_9_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r194 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 53, 54);
    i0.ɵɵlistener("cdkDropListDropped", function TemplateProfileCreateComponent_div_3_div_19_div_12_ng_container_2_div_1_div_9_div_1_Template_div_cdkDropListDropped_0_listener($event) { i0.ɵɵrestoreView(_r194); const ctx_r193 = i0.ɵɵnextContext(7); return ctx_r193.drop($event); });
    i0.ɵɵtemplate(2, TemplateProfileCreateComponent_div_3_div_19_div_12_ng_container_2_div_1_div_9_div_1_div_2_Template, 11, 11, "div", 66);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const field_r66 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵproperty("cdkDropListData", field_r66.forms);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", field_r66.forms);
} }
function TemplateProfileCreateComponent_div_3_div_19_div_12_ng_container_2_div_1_div_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 65);
    i0.ɵɵtemplate(1, TemplateProfileCreateComponent_div_3_div_19_div_12_ng_container_2_div_1_div_9_div_1_Template, 3, 2, "div", 50);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const field_r66 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", field_r66.forms);
} }
function TemplateProfileCreateComponent_div_3_div_19_div_12_ng_container_2_div_1_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r199 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 72);
    i0.ɵɵelementStart(1, "button", 73);
    i0.ɵɵlistener("click", function TemplateProfileCreateComponent_div_3_div_19_div_12_ng_container_2_div_1_div_10_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r199); const i_r50 = i0.ɵɵnextContext(4).index; const ctx_r197 = i0.ɵɵnextContext(2); return ctx_r197.onAddNewField(i_r50); });
    i0.ɵɵelementStart(2, "mat-icon");
    i0.ɵɵtext(3, "add_box");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "span");
    i0.ɵɵtext(5, "Ajouter un champ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const j_r67 = i0.ɵɵnextContext().index;
    const category_r49 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵstyleProp("opacity", (category_r49 == null ? null : category_r49.forms == null ? null : category_r49.forms.length) - 1 === j_r67 ? 1 : 0);
    i0.ɵɵproperty("disabled", (category_r49 == null ? null : category_r49.forms == null ? null : category_r49.forms.length) - 1 !== j_r67);
} }
function TemplateProfileCreateComponent_div_3_div_19_div_12_ng_container_2_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r204 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 56);
    i0.ɵɵelementStart(1, "div", 57);
    i0.ɵɵelementStart(2, "div", 58);
    i0.ɵɵelementStart(3, "div", 59);
    i0.ɵɵelementStart(4, "button", 60);
    i0.ɵɵlistener("click", function TemplateProfileCreateComponent_div_3_div_19_div_12_ng_container_2_div_1_Template_button_click_4_listener() { i0.ɵɵrestoreView(_r204); const j_r67 = ctx.index; const i_r50 = i0.ɵɵnextContext(3).index; const ctx_r202 = i0.ɵɵnextContext(2); return ctx_r202.onRemoveField(i_r50, j_r67); });
    i0.ɵɵelementStart(5, "mat-icon");
    i0.ɵɵtext(6, "delete ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "div", 61);
    i0.ɵɵelementStart(8, "lib-sub-category", 62);
    i0.ɵɵlistener("onAddKeywordFromInput", function TemplateProfileCreateComponent_div_3_div_19_div_12_ng_container_2_div_1_Template_lib_sub_category_onAddKeywordFromInput_8_listener($event) { i0.ɵɵrestoreView(_r204); const j_r67 = ctx.index; const i_r50 = i0.ɵɵnextContext(3).index; const ctx_r205 = i0.ɵɵnextContext(2); return ctx_r205.addKeywordFromInput($event.event, $event.prev, i_r50, j_r67); })("onKeyPress", function TemplateProfileCreateComponent_div_3_div_19_div_12_ng_container_2_div_1_Template_lib_sub_category_onKeyPress_8_listener($event) { i0.ɵɵrestoreView(_r204); const j_r67 = ctx.index; const i_r50 = i0.ɵɵnextContext(3).index; const ctx_r207 = i0.ɵɵnextContext(2); return ctx_r207.onKeyPress($event.event, i_r50, j_r67); })("onAddNewField", function TemplateProfileCreateComponent_div_3_div_19_div_12_ng_container_2_div_1_Template_lib_sub_category_onAddNewField_8_listener() { i0.ɵɵrestoreView(_r204); const i_r50 = i0.ɵɵnextContext(3).index; const ctx_r209 = i0.ɵɵnextContext(2); return ctx_r209.onAddNewField(i_r50); })("onRemoveField", function TemplateProfileCreateComponent_div_3_div_19_div_12_ng_container_2_div_1_Template_lib_sub_category_onRemoveField_8_listener() { i0.ɵɵrestoreView(_r204); const j_r67 = ctx.index; const i_r50 = i0.ɵɵnextContext(3).index; const ctx_r211 = i0.ɵɵnextContext(2); return ctx_r211.onRemoveField(i_r50, j_r67); })("onChangeType", function TemplateProfileCreateComponent_div_3_div_19_div_12_ng_container_2_div_1_Template_lib_sub_category_onChangeType_8_listener() { i0.ɵɵrestoreView(_r204); const field_r66 = ctx.$implicit; const j_r67 = ctx.index; const i_r50 = i0.ɵɵnextContext(3).index; const ctx_r213 = i0.ɵɵnextContext(2); return ctx_r213.onChangeType(field_r66.type, i_r50, j_r67); })("onRemoveKeyword", function TemplateProfileCreateComponent_div_3_div_19_div_12_ng_container_2_div_1_Template_lib_sub_category_onRemoveKeyword_8_listener($event) { i0.ɵɵrestoreView(_r204); const j_r67 = ctx.index; const i_r50 = i0.ɵɵnextContext(3).index; const ctx_r215 = i0.ɵɵnextContext(2); return ctx_r215.removeKeyword($event.event, i_r50, j_r67); })("onAddNewSubLevelField", function TemplateProfileCreateComponent_div_3_div_19_div_12_ng_container_2_div_1_Template_lib_sub_category_onAddNewSubLevelField_8_listener() { i0.ɵɵrestoreView(_r204); const j_r67 = ctx.index; const i_r50 = i0.ɵɵnextContext(3).index; const ctx_r217 = i0.ɵɵnextContext(2); return ctx_r217.onAddNewSubLevelField(i_r50, j_r67); })("onExpendMore", function TemplateProfileCreateComponent_div_3_div_19_div_12_ng_container_2_div_1_Template_lib_sub_category_onExpendMore_8_listener($event) { i0.ɵɵrestoreView(_r204); const j_r67 = ctx.index; const i_r50 = i0.ɵɵnextContext(3).index; const ctx_r219 = i0.ɵɵnextContext(2); return ctx_r219.onExpendMore($event, i_r50, j_r67); })("onChangeLabel", function TemplateProfileCreateComponent_div_3_div_19_div_12_ng_container_2_div_1_Template_lib_sub_category_onChangeLabel_8_listener($event) { i0.ɵɵrestoreView(_r204); const j_r67 = ctx.index; const i_r50 = i0.ɵɵnextContext(3).index; const ctx_r221 = i0.ɵɵnextContext(2); return ctx_r221.onChangeLabel($event, i_r50, j_r67); })("onCheckedChip", function TemplateProfileCreateComponent_div_3_div_19_div_12_ng_container_2_div_1_Template_lib_sub_category_onCheckedChip_8_listener($event) { i0.ɵɵrestoreView(_r204); const j_r67 = ctx.index; const i_r50 = i0.ɵɵnextContext(3).index; const ctx_r223 = i0.ɵɵnextContext(2); return ctx_r223.onCheckedChip($event, i_r50, j_r67); })("onDrop", function TemplateProfileCreateComponent_div_3_div_19_div_12_ng_container_2_div_1_Template_lib_sub_category_onDrop_8_listener($event) { i0.ɵɵrestoreView(_r204); const ctx_r225 = i0.ɵɵnextContext(5); return ctx_r225.drop($event); })("onCheckedDefault", function TemplateProfileCreateComponent_div_3_div_19_div_12_ng_container_2_div_1_Template_lib_sub_category_onCheckedDefault_8_listener($event) { i0.ɵɵrestoreView(_r204); const j_r67 = ctx.index; const i_r50 = i0.ɵɵnextContext(3).index; const ctx_r226 = i0.ɵɵnextContext(2); return ctx_r226.onCheckedDefault($event, i_r50, j_r67); })("onGetConditionValues", function TemplateProfileCreateComponent_div_3_div_19_div_12_ng_container_2_div_1_Template_lib_sub_category_onGetConditionValues_8_listener() { i0.ɵɵrestoreView(_r204); const ctx_r228 = i0.ɵɵnextContext(5); return ctx_r228.getConditionValues(); });
    i0.ɵɵtemplate(9, TemplateProfileCreateComponent_div_3_div_19_div_12_ng_container_2_div_1_div_9_Template, 2, 1, "div", 63);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(10, TemplateProfileCreateComponent_div_3_div_19_div_12_ng_container_2_div_1_div_10_Template, 6, 3, "div", 64);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const field_r66 = ctx.$implicit;
    const j_r67 = ctx.index;
    const ctx_r229 = i0.ɵɵnextContext(3);
    const category_r49 = ctx_r229.$implicit;
    const i_r50 = ctx_r229.index;
    const ctx_r65 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("id", field_r66.key);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("disabled", !field_r66.deleteable);
    i0.ɵɵadvance(1);
    i0.ɵɵstyleProp("opacity", !field_r66.deleteable ? 0 : 1);
    i0.ɵɵadvance(2);
    i0.ɵɵclassMap(!field_r66.deleteable ? "disabled" : "");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("field", field_r66)("length", category_r49 == null ? null : category_r49.forms == null ? null : category_r49.forms.length)("i", i_r50)("j", j_r67)("conditionData", ctx_r65.conditionData);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", field_r66.expandMore);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", (category_r49 == null ? null : category_r49.forms == null ? null : category_r49.forms.length) - 1 === j_r67);
} }
function TemplateProfileCreateComponent_div_3_div_19_div_12_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, TemplateProfileCreateComponent_div_3_div_19_div_12_ng_container_2_div_1_Template, 11, 13, "div", 55);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const category_r49 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", category_r49.forms);
} }
function TemplateProfileCreateComponent_div_3_div_19_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r232 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 53, 54);
    i0.ɵɵlistener("cdkDropListDropped", function TemplateProfileCreateComponent_div_3_div_19_div_12_Template_div_cdkDropListDropped_0_listener($event) { i0.ɵɵrestoreView(_r232); const ctx_r231 = i0.ɵɵnextContext(3); return ctx_r231.drop($event); });
    i0.ɵɵtemplate(2, TemplateProfileCreateComponent_div_3_div_19_div_12_ng_container_2_Template, 2, 1, "ng-container", 40);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const category_r49 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("cdkDropListData", category_r49.forms);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", category_r49.expandMore);
} }
function TemplateProfileCreateComponent_div_3_div_19_mat_icon_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-icon");
    i0.ɵɵtext(1, "chevron_right");
    i0.ɵɵelementEnd();
} }
function TemplateProfileCreateComponent_div_3_div_19_mat_icon_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-icon");
    i0.ɵɵtext(1, "expand_more");
    i0.ɵɵelementEnd();
} }
function TemplateProfileCreateComponent_div_3_div_19_Template(rf, ctx) { if (rf & 1) {
    const _r235 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 42);
    i0.ɵɵelementStart(1, "div", 43);
    i0.ɵɵelementStart(2, "button", 44);
    i0.ɵɵlistener("click", function TemplateProfileCreateComponent_div_3_div_19_Template_button_click_2_listener($event) { i0.ɵɵrestoreView(_r235); const i_r50 = ctx.index; const ctx_r234 = i0.ɵɵnextContext(2); return ctx_r234.onRemoveCategory($event, i_r50); });
    i0.ɵɵelementStart(3, "mat-icon");
    i0.ɵɵtext(4, "delete");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 45);
    i0.ɵɵelementStart(6, "div", 46);
    i0.ɵɵelementStart(7, "input", 47);
    i0.ɵɵlistener("ngModelChange", function TemplateProfileCreateComponent_div_3_div_19_Template_input_ngModelChange_7_listener($event) { i0.ɵɵrestoreView(_r235); const category_r49 = ctx.$implicit; return category_r49.name = $event; });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "mat-form-field", 48);
    i0.ɵɵelementStart(9, "mat-label");
    i0.ɵɵtext(10, "\u00C9quipe");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(11, TemplateProfileCreateComponent_div_3_div_19_mat_select_11_Template, 2, 5, "mat-select", 49);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(12, TemplateProfileCreateComponent_div_3_div_19_div_12_Template, 3, 2, "div", 50);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "button", 51);
    i0.ɵɵlistener("click", function TemplateProfileCreateComponent_div_3_div_19_Template_button_click_13_listener($event) { i0.ɵɵrestoreView(_r235); const category_r49 = ctx.$implicit; const i_r50 = ctx.index; const ctx_r237 = i0.ɵɵnextContext(2); return ctx_r237.onExpendMore({ event: $event, field: category_r49 }, i_r50); });
    i0.ɵɵtemplate(14, TemplateProfileCreateComponent_div_3_div_19_mat_icon_14_Template, 2, 0, "mat-icon", 40);
    i0.ɵɵtemplate(15, TemplateProfileCreateComponent_div_3_div_19_mat_icon_15_Template, 2, 0, "mat-icon", 40);
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
    i0.ɵɵproperty("readonly", ctx_r21.categories.length < 4 || !category_r49.editable)("readonly", !category_r49.editable)("ngModel", category_r49.name)("ngModelOptions", i0.ɵɵpureFunction0(12, _c0));
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngIf", category_r49.selector);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", category_r49.forms);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", !category_r49.expandMore);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", category_r49.expandMore);
} }
function TemplateProfileCreateComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r239 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 21);
    i0.ɵɵelementStart(1, "div", 22);
    i0.ɵɵelementStart(2, "div", 23);
    i0.ɵɵelementStart(3, "h3");
    i0.ɵɵelementStart(4, "span");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "mat-icon", 19);
    i0.ɵɵlistener("click", function TemplateProfileCreateComponent_div_3_Template_mat_icon_click_6_listener() { i0.ɵɵrestoreView(_r239); const ctx_r238 = i0.ɵɵnextContext(); return ctx_r238.openDialog(); });
    i0.ɵɵtext(7, "edit");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "ol", 24);
    i0.ɵɵtemplate(9, TemplateProfileCreateComponent_div_3_li_9_Template, 8, 5, "li", 25);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "button", 26);
    i0.ɵɵlistener("click", function TemplateProfileCreateComponent_div_3_Template_button_click_10_listener($event) { i0.ɵɵrestoreView(_r239); const ctx_r240 = i0.ɵɵnextContext(); return ctx_r240.onAddNewCategory($event); });
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
    i0.ɵɵlistener("cdkDropListDropped", function TemplateProfileCreateComponent_div_3_Template_div_cdkDropListDropped_17_listener($event) { i0.ɵɵrestoreView(_r239); const ctx_r241 = i0.ɵɵnextContext(); return ctx_r241.drop($event); });
    i0.ɵɵtemplate(19, TemplateProfileCreateComponent_div_3_div_19_Template, 16, 13, "div", 31);
    i0.ɵɵelementStart(20, "div", 32);
    i0.ɵɵelementStart(21, "button", 19);
    i0.ɵɵlistener("click", function TemplateProfileCreateComponent_div_3_Template_button_click_21_listener($event) { i0.ɵɵrestoreView(_r239); const ctx_r242 = i0.ɵɵnextContext(); return ctx_r242.onAddNewCategory($event); });
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
                selector: {
                    label: "Company",
                    key: "Company",
                    defaultValue: [{ value: "Nowteam", checked: true }, { value: "Internal", checked: false }],
                    value: "Nowteam"
                },
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
                selector: {
                    label: "Company",
                    key: "Company",
                    defaultValue: [{ value: "Nowteam", checked: true }, { value: "Internal", checked: false }],
                    value: "Nowteam"
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
                        conditionLocation: {},
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
                        value: true,
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
                                value: true,
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
                selector: {
                    label: "Company",
                    key: "Company",
                    defaultValue: [{ value: "Nowteam", checked: true }, { value: "Internal", checked: false }],
                    value: "Nowteam"
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
                        conditionLocation: {},
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
                        conditionLocation: {},
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
                        conditionLocation: {},
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
                selector: {
                    label: "Company",
                    key: "Company",
                    defaultValue: [{ value: "Nowteam", checked: true }, { value: "Internal", checked: false }],
                    value: "Nowteam"
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
                        conditionLocation: {},
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
                selector: {
                    label: "Company",
                    key: "Company",
                    defaultValue: [{ value: "Nowteam", checked: true }, { value: "Internal", checked: false }],
                    value: "Nowteam"
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
                        conditionLocation: {},
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
                selector: {
                    label: "Company",
                    key: "Company",
                    defaultValue: [{ value: "Nowteam", checked: true }, { value: "Internal", checked: false }],
                    value: "Nowteam"
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
                        conditionLocation: {},
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
                selector: {
                    label: "Company",
                    key: "Company",
                    defaultValue: [{ value: "Nowteam", checked: true }, { value: "Internal", checked: false }],
                    value: "Nowteam"
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
                        conditionLocation: {},
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
                                value: true,
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
                selector: {
                    label: "Company",
                    key: "Company",
                    defaultValue: [{ value: "Nowteam", checked: true }, { value: "Internal", checked: false }],
                    value: "Nowteam"
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
        console.log(this.categories);
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
                const result = this.id !== "0"
                    ? yield this.service.updateProfil(Object.assign(Object.assign(Object.assign({}, this.currentProfil), this.form.value), { categories: this.categories }))
                    : yield this.service.createProfil(Object.assign(Object.assign({}, this.form.value), { categories: this.categories }));
                if (result) {
                    yield this.service.getAllProfil();
                    this.canExit = true;
                    this.router.navigate([this.service.mainPath + '/template']);
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
TemplateProfileCreateComponent.ɵcmp = i0.ɵɵdefineComponent({ type: TemplateProfileCreateComponent, selectors: [["onboarding-create-profile-template"]], decls: 4, vars: 3, consts: [[3, "formGroup", "submit"], ["class", "box-title", 4, "ngIf"], ["class", "category", 4, "ngIf"], [1, "box-title"], [1, "box-title-content"], [1, "title"], [1, "profil-name-content"], ["mat-raised-button", "", "color", "primary", 1, "add-picto", 3, "click"], ["appearance", "outline", 1, "example-full-width"], ["type", "text", "matInput", "", "formControlName", "Name", "placeholder", "Ex. Manager"], ["class", "list-picto", 4, "ngIf"], ["type", "text", "matInput", "", "formControlName", "Description", "rows", "4", "placeholder", ""], ["formControlName", "Tags", "required", ""], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "Status", 1, "form-field"], [1, "link-create-profil"], ["mat-raised-button", "", "color", "primary", 1, "link-add-profil", 3, "disabled", "click"], [1, "list-picto"], [3, "color", "click", 4, "ngFor", "ngForOf"], [3, "click"], [3, "value"], [1, "category"], [1, "side-bar"], [1, "summary"], ["type", "I"], ["class", "li-title", 4, "ngFor", "ngForOf"], ["mat-button", "", 1, "add-category", "transparent", 3, "click"], ["mat-button", "", "type", "submit", 1, "register-button"], ["cdkDropListGroup", "", 1, "fields"], ["cdkDropList", "", 1, "example-list", "mt-20", 3, "cdkDropListData", "cdkDropListDropped"], ["parentList", "cdkDropList"], ["class", "category-item", "cdkDrag", "", 3, "id", 4, "ngFor", "ngForOf"], [1, "add-button-container"], [1, "li-title"], [3, "ngxScrollTo", "click", 4, "ngIf"], ["type", "text", 3, "ngModel", "ngModelOptions", "blur", "ngModelChange", 4, "ngIf"], [4, "ngFor", "ngForOf"], [3, "ngxScrollTo", "click"], ["type", "text", 3, "ngModel", "ngModelOptions", "blur", "ngModelChange"], ["edit", ""], [4, "ngIf"], [3, "ngxScrollTo"], ["cdkDrag", "", 1, "category-item", 3, "id"], ["cdkDragHandle", "", 1, "left-action", "move-icons"], ["mat-raised-button", "", 1, "transparent-button", 3, "disabled", "click"], [1, "field-content"], [1, "field-item"], ["type", "text", "required", "", "placeholder", "Saisir le nom de la cat\u00E9gorie", 1, "example-full-width", "input-category-name", 3, "readonly", "ngModel", "ngModelOptions", "ngModelChange"], ["appearance", "outline", 1, "form-field", "field-size", 2, "float", "right", "width", "50%"], ["required", "", 3, "value", "ngModel", "ngModelOptions", "valueChange", "ngModelChange", 4, "ngIf"], ["cdkDropList", "", 3, "cdkDropListData", "cdkDropListDropped", 4, "ngIf"], ["mat-mini-fab", "", "color", "primary", 1, "expand-button", 3, "click"], ["required", "", 3, "value", "ngModel", "ngModelOptions", "valueChange", "ngModelChange"], ["cdkDropList", "", 3, "cdkDropListData", "cdkDropListDropped"], ["childList", "cdkDropList"], ["class", "field-box", 3, "id", 4, "ngFor", "ngForOf"], [1, "field-box", 3, "id"], ["cdkDrag", ""], [1, "fields-content"], [1, "button-action"], ["mat-mini-fab", "", "color", "warn", 1, "delete-field", "transparent-button", 3, "disabled", "click"], [1, "fields-container"], [3, "field", "length", "i", "j", "conditionData", "onAddKeywordFromInput", "onKeyPress", "onAddNewField", "onRemoveField", "onChangeType", "onRemoveKeyword", "onAddNewSubLevelField", "onExpendMore", "onChangeLabel", "onCheckedChip", "onDrop", "onCheckedDefault", "onGetConditionValues"], ["class", "child", 4, "ngIf"], ["class", "add-button-container add-button-sub-category", 4, "ngIf"], [1, "child"], ["class", "", "style", "margin-bottom:10px ;", 3, "id", 4, "ngFor", "ngForOf"], [1, "", 2, "margin-bottom", "10px", 3, "id"], [1, "button-action", "child-2-background"], ["class", "", 3, "id", 4, "ngFor", "ngForOf"], [1, "", 3, "id"], [1, "button-action", "child-3-background"], [1, "add-button-container", "add-button-sub-category"], ["mat-raised-button", "", "color", "primary", 2, "margin", "10px auto", 3, "disabled", "click"]], template: function TemplateProfileCreateComponent_Template(rf, ctx) { if (rf & 1) {
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
    } }, directives: [i1.ɵangular_packages_forms_forms_y, i1.NgControlStatusGroup, i1.FormGroupDirective, i5.NgIf, i6.MatButton, i7.MatIcon, i8.MatFormField, i8.MatLabel, i9.MatInput, i1.DefaultValueAccessor, i1.NgControlStatus, i1.FormControlName, i10.NativeElementInjectorDirective, i11.MatSelect, i1.RequiredValidator, i5.NgForOf, i12.MatCheckbox, i13.MatOption, i14.CdkDropListGroup, i14.CdkDropList, i15.ScrollToDirective, i1.NgModel, i14.CdkDrag, i14.CdkDragHandle, i16.SubTemplateProfileComponent], styles: ["main[_ngcontent-%COMP%]{background:no-repeat padding-box #f4f7f9;height:100vh;width:100%;display:flex;flex-direction:column;align-items:center}main[_ngcontent-%COMP%]   .disabled[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{background-color:transparent!important}main[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{display:flex;height:100%;width:100%;max-width:1500px}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]{width:786px;background:no-repeat padding-box #fff;border:1px solid #dce4e9;border-radius:6px;opacity:1;margin:auto;padding:0 25px;-ms-grid-row-align:center;align-self:center}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{text-align:center;font:900 32px/48px Nexa;letter-spacing:0;color:#171f26}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font:18px/24px Nexa Text;letter-spacing:0;color:#171f26}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .profil-name-content[_ngcontent-%COMP%]{display:flex;align-items:center;position:relative}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .profil-name-content[_ngcontent-%COMP%]   .add-picto[_ngcontent-%COMP%]{margin-right:15px;min-width:50px;width:30px;padding:9px 12px}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .profil-name-content[_ngcontent-%COMP%]   .add-picto[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin-right:10px}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .profil-name-content[_ngcontent-%COMP%]   .list-picto[_ngcontent-%COMP%]{position:absolute;height:200px;width:100%;background:no-repeat padding-box #fff;border:1px solid #171f26;border-radius:8px;top:100%;z-index:1}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .profil-name-content[_ngcontent-%COMP%]   .list-picto[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin:15px;border:none;font-size:40px}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .profil-name-content[_ngcontent-%COMP%]   .list-picto[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]:hover{color:#830b6b!important;cursor:pointer}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .box-title-content[_ngcontent-%COMP%]{width:100%;margin:25px auto}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font:900 32px/38px Nexa;letter-spacing:0;color:#171f26}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font:15px/26px Nexa Text;letter-spacing:0;color:#171f26;text-align:center}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .link-create-profil[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:center}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{text-align:center;border:1px solid #543cb6;border-radius:7px;padding:.7em 2em .5em;display:flex;align-items:center;background-color:transparent;font:bold 15px/17px Nexa;letter-spacing:0;color:#543cb6}main[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:space-between}.expand-button[_ngcontent-%COMP%]{color:#5a607f!important;background-color:transparent!important;box-shadow:none!important}.input-category-name[_ngcontent-%COMP%]{border:none;outline:0;text-align:left;font:bold 18px/48px Nexa Text;letter-spacing:0;color:#171f26}.example-full-width[_ngcontent-%COMP%]{width:100%}.field-action[_ngcontent-%COMP%]{width:10%}.field-size[_ngcontent-%COMP%]{width:90%;margin:auto 2% auto auto}  .mat-form-field-appearance-fill .mat-form-field-flex{background-color:#fff}  .mat-form-field-appearance-outline .mat-form-field-infix{padding:.5em 0}  .mat-select{padding:.5em 0}  .mat-form-field-appearance-fill .mat-form-field-underline::before{background-color:transparent}  .mat-form-field-wrapper{padding-bottom:0!important}[_nghost-%COMP%]     .cdk-drag-preview .input-category-name div.mat-form-field-outline-start, [_nghost-%COMP%]     .input-category-name div.mat-form-field-outline-start{border-color:0!important;border-width:0!important}[_nghost-%COMP%]     .input-category-name .mat-form-field-outline-gap{border-color:0!important;border-width:0!important}[_nghost-%COMP%]     .mat-checkbox-checked.mat-accent .mat-checkbox-background, [_nghost-%COMP%]     .mat-checkbox-indeterminate.mat-accent .mat-checkbox-background{background-color:transparent}[_nghost-%COMP%]     .input-category-name .mat-form-field-outline-end{border-color:0!important;border-width:0!important}[_nghost-%COMP%]     .input-category-name .mat-form-field-label-wrapper{display:none}[_nghost-%COMP%]     .input-category-name .mat-form-field-appearance-outline .mat-form-field-outline{color:transparent!important}[_nghost-%COMP%]     .input-category-name .mat-form-field-infix{border-top:none}.category-action[_ngcontent-%COMP%]{display:flex;width:100%}.delete-field[_ngcontent-%COMP%]{margin:auto 2%}.radio-group[_ngcontent-%COMP%]   .mat-radio-button[_ngcontent-%COMP%]{margin-right:10px}.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary[_ngcontent-%COMP%]{background-color:#3f51b5;color:#fff;min-height:20px;font-size:10px}.move-icons[_ngcontent-%COMP%]{cursor:move}.category-item[_ngcontent-%COMP%], .cdk-drag-placeholder[_ngcontent-%COMP%]{display:flex;align-items:baseline;width:100%;border:1px solid #dce4e9;border-radius:8px;background-color:#fff;margin-bottom:10px;margin-top:10px;min-height:60px}.category-item[_ngcontent-%COMP%]   .left-action[_ngcontent-%COMP%], .cdk-drag-placeholder[_ngcontent-%COMP%]   .left-action[_ngcontent-%COMP%]{height:auto;background-color:#49a094;padding-top:7px;width:40px;-ms-grid-row-align:stretch;align-self:stretch;border-top-left-radius:8px;border-bottom-left-radius:8px}.category-item[_ngcontent-%COMP%]   .left-action[_ngcontent-%COMP%]   .transparent-button[_ngcontent-%COMP%], .cdk-drag-placeholder[_ngcontent-%COMP%]   .left-action[_ngcontent-%COMP%]   .transparent-button[_ngcontent-%COMP%]{background-color:transparent;box-shadow:none;width:40px;padding:0;margin:0;min-width:auto;color:#fff}.category-item[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%], .cdk-drag-placeholder[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%]{width:100%;-ms-grid-row-align:center;align-self:center}.category-item[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%], .cdk-drag-placeholder[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;border:transparent!important}.category-item[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]   .mat-form-field-wrapper[_ngcontent-%COMP%]   .mat-form-field-flex[_ngcontent-%COMP%]   .mat-form-field-outline[_ngcontent-%COMP%], .cdk-drag-placeholder[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]   .mat-form-field-wrapper[_ngcontent-%COMP%]   .mat-form-field-flex[_ngcontent-%COMP%]   .mat-form-field-outline[_ngcontent-%COMP%]{color:transparent!important}.category-item[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%]   .field-box[_ngcontent-%COMP%], .cdk-drag-placeholder[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%]   .field-box[_ngcontent-%COMP%]{margin-bottom:15px}.category-item[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%]   .mat-form-field-outline[_ngcontent-%COMP%], .cdk-drag-placeholder[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%]   .mat-form-field-outline[_ngcontent-%COMP%]{color:transparent!important}.cdk-drag-preview[_ngcontent-%COMP%]{box-sizing:border-box;border-radius:4px;opacity:1}.cdk-drag-preview[_ngcontent-%COMP%]   .expand-button[_ngcontent-%COMP%]{color:#5a607f!important;background-color:transparent!important;box-shadow:none!important;margin-right:28px!important}.cdk-drag-placeholder[_ngcontent-%COMP%]{opacity:0}.cdk-drag-animating[_ngcontent-%COMP%], .example-list.cdk-drop-list-dragging[_ngcontent-%COMP%]   .category-item[_ngcontent-%COMP%]:not(.cdk-drag-placeholder){transition:transform 250ms cubic-bezier(0,0,.2,1)}.child[_ngcontent-%COMP%]{margin-left:0}.category[_ngcontent-%COMP%]{display:flex;flex-direction:row;width:100vw}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]{width:250px;background-color:#fff;margin:10px 20px;border-radius:5px;border:1px solid #dbcbcb96}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:25px;border-bottom:1px solid #dbcbcb96;margin:10px;padding-bottom:5px;font-family:\"Nexa Text\";display:flex;align-items:center}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin-left:15px;cursor:pointer}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]{font-weight:600;margin-left:-27px;font-size:15px;list-style-position:inside}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:5px;margin:5px auto;cursor:pointer;text-align:left;font:12px/19px Nexa Text;letter-spacing:0;color:#535760}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]{padding-left:0;margin-left:0}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.li-title[_ngcontent-%COMP%]{font-size:14px;font-weight:600}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.li-title[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:140px;outline:0;border:1px dashed grey}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.li-title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:inline-flex;align-items:center}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.li-title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin-left:10px;display:none}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.li-title[_ngcontent-%COMP%]:hover   mat-icon[_ngcontent-%COMP%]{display:initial!important}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.sub-title[_ngcontent-%COMP%]{list-style:none;padding-left:20px}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.sub-title.active[_ngcontent-%COMP%], .category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.sub-title.active[_ngcontent-%COMP%]::marker, .category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.sub-title[_ngcontent-%COMP%]:hover{font-weight:600;background:no-repeat padding-box #e5e8ee;border-radius:5px}.category[_ngcontent-%COMP%]   .fields[_ngcontent-%COMP%]{width:90%;max-height:85vh;overflow:auto;margin-right:.5%;overflow-x:hidden}.category[_ngcontent-%COMP%]   .disabled[_ngcontent-%COMP%]{background-color:#f4f7f9!important}.category[_ngcontent-%COMP%]   .expand-button[_ngcontent-%COMP%]{color:#5a607f!important;background-color:transparent!important;box-shadow:none!important;margin-right:28px!important}.category[_ngcontent-%COMP%]   .expand-button[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%]{font-size:40px}.category[_ngcontent-%COMP%]   .transparent-button[_ngcontent-%COMP%]{background-color:transparent;box-shadow:none;width:40px;padding:0;margin:0;margin-left:0!important;min-width:auto;color:#fff}.add-button-sub-category[_ngcontent-%COMP%]{width:95.5%!important;margin-bottom:22px;margin-left:22px}.add-button-container[_ngcontent-%COMP%]{background:no-repeat padding-box #fff;border:1px dashed #dce4e9;border-radius:8px;margin-top:10px;padding:10px;display:flex;justify-content:center;align-items:center;width:98.5%;margin-bottom:22px}.add-button-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{display:flex;align-items:center;background-color:transparent;border:none;cursor:pointer;font:17px/26px Nexa Text;letter-spacing:0;color:#c2c8d5;box-shadow:none}.add-category[_ngcontent-%COMP%]{border:1px dashed #c2c8d5;border-radius:5px;margin-left:10px;margin-bottom:10px;font:bold 12px/19px Nexa Text;letter-spacing:0;color:#c2c8d5;width:92%}.cdk-drag[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]{display:flex;height:100%;margin:0;width:100%;min-width:250px}.cdk-drag[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]   .button-action[_ngcontent-%COMP%]{background-color:#6fe8d7;-ms-grid-row-align:stretch;align-self:stretch;margin-top:0;margin-left:20px;border-bottom-left-radius:8px;border-top-left-radius:8px}.cdk-drag[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]   .button-action[_ngcontent-%COMP%]   .transparent-button[_ngcontent-%COMP%]{background-color:transparent;box-shadow:none;width:40px;padding:0;margin:0;min-width:auto;color:#fff}.cdk-drag[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]   .child-2-background[_ngcontent-%COMP%]{background-color:#cffaf4!important}.cdk-drag[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]   .child-3-background[_ngcontent-%COMP%]{background-color:#e5e8ee!important}.cdk-drag[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]   .fields-container[_ngcontent-%COMP%]{border:1px solid #dce4e9;border-radius:0 8px 8px 0;background-color:#fff;width:100%;padding-left:10px;padding-right:10px;padding-top:5px}.cdk-drag[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]   .fields-container[_ngcontent-%COMP%]   lib-sub-category[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;width:100%}.cdk-drag[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]   .fields-container[_ngcontent-%COMP%]   lib-sub-category[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]   .button-action[_ngcontent-%COMP%]{background-color:#6fe8d7;height:100%;margin:auto 15px auto auto;display:flex}.cdk-drag[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]   .fields-container[_ngcontent-%COMP%]   lib-sub-category[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]   .button-action[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{box-shadow:none;background-color:transparent;color:#fff}.side-bar[_ngcontent-%COMP%]{display:flex;flex-direction:column}.register-button[_ngcontent-%COMP%]{background:no-repeat padding-box #171f26!important;border:2px solid #192128!important;border-radius:8px;color:#fff!important;width:85%;margin-left:22px!important;border:none!important}.content-item[_ngcontent-%COMP%]{transition-property:border-image-slice border-image-source border-width;transition-timing-function:ease-in-out;transition-duration:.5s}.active-content[_ngcontent-%COMP%]{border-image-slice:1;border-width:2px;border-image-source:linear-gradient(to left,#9d107d,#4862ab)}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(TemplateProfileCreateComponent, [{
        type: Component,
        args: [{
                selector: "onboarding-create-profile-template",
                templateUrl: "./template-profile-create.component.html",
                styleUrls: ["./template-profile-create.component.scss"],
            }]
    }], function () { return [{ type: i1.FormBuilder }, { type: i2.OnboardingService }, { type: i3.ActivatedRoute }, { type: i3.Router }, { type: i4.MatDialog }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVtcGxhdGUtcHJvZmlsZS1jcmVhdGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vb25ib2FyZGluZy8iLCJzb3VyY2VzIjpbImxpYi90ZW1wbGF0ZS1wcm9maWxlLWNyZWF0ZS90ZW1wbGF0ZS1wcm9maWxlLWNyZWF0ZS5jb21wb25lbnQudHMiLCJsaWIvdGVtcGxhdGUtcHJvZmlsZS1jcmVhdGUvdGVtcGxhdGUtcHJvZmlsZS1jcmVhdGUuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQW9FLE1BQU0sZUFBZSxDQUFDO0FBQzVHLE9BQU8sRUFBMEIsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDcEUsT0FBTyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFJaEUsT0FBTyxFQUFlLGVBQWUsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRXpGLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHFEQUFxRCxDQUFDO0FBQzVGLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLG1EQUFtRCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ01qRSxvQ0FHSTtJQURBLHdSQUF5QztJQUN6QyxZQUNKO0lBQUEsaUJBQVc7Ozs7SUFIUCwrRkFBc0U7SUFFdEUsZUFDSjtJQURJLDhDQUNKOzs7SUFMSiwrQkFDSTtJQUFBLHVHQUdJO0lBRVIsaUJBQU07OztJQUxRLGVBQWdDO0lBQWhDLDRDQUFnQzs7O0lBYzFDLHNDQUFtRDtJQUFBLFlBQU87SUFBQSxpQkFBYTs7O0lBQWxDLCtCQUFhO0lBQUMsZUFBTztJQUFQLDZCQUFPOzs7O0lBM0IxRSw4QkFDSTtJQUFBLDhCQUNJO0lBQUEsNkJBQWtCO0lBQUEsd0VBQXlDO0lBQUEsaUJBQUs7SUFDaEUseUJBQUc7SUFBQSx5SEFBMEY7SUFBQSxpQkFBSTtJQUNqRyw4QkFDSTtJ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LENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2xRLEtBQUssQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEtBQUssT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzNGLDRCQUE0QjtJQUM5QixDQUFDO0lBRUQsWUFBWSxDQUFDLEtBQUssRUFBRSxHQUFHLE1BQU07UUFDM0IsSUFBSSxLQUFLLEVBQUU7WUFDVCxJQUFJLEtBQUssQ0FBQyxLQUFLLEVBQUU7Z0JBQ2YsS0FBSyxDQUFDLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQzthQUM5QjtZQUNELElBQUksS0FBSyxDQUFDLEtBQUssSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsVUFBVSxFQUFFO2dCQUMxQyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFN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Q0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLEVBQUU7Z0JBQzVGLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQzthQUNsRztpQkFBTTtnQkFDTCxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7Z0JBQzdDLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7Z0JBQzlELElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO2dCQUMvRSxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsR0FBRyxJQUFJ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QUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNsUSxLQUFLLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUE7SUFFMUIsQ0FBQztJQUNELGFBQWEsQ0FBQyxLQUFVLEVBQUUsR0FBRyxNQUFNO1FBQ2pDLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ3JCLE1BQU0sTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUM7UUFDN0IsTUFBTSxLQUFLLEdBQUcsTUFBTSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNsUSxNQUFNLEtBQUssR0FBRyxLQUFLLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssS0FBSyxLQUFLLENBQUMs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bnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzLCBEb0NoZWNrIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtQnVpbGRlciwgRm9ybUdyb3VwLCBWYWxpZGF0b3JzIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XG5pbXBvcnQgeyBFTlRFUiwgQ09NTUEsIFNFTUlDT0xPTiB9IGZyb20gXCJAYW5ndWxhci9jZGsva2V5Y29kZXNcIjtcbmltcG9ydCB7IE1hdENoaXBJbnB1dEV2ZW50IH0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsL2NoaXBzXCI7XG5pbXBvcnQgeyBPbmJvYXJkaW5nU2VydmljZSB9IGZyb20gXCIuLi9vbmJvYXJkaW5nLnNlcnZpY2VcIjtcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBDZGtEcmFnRHJvcCwgbW92ZUl0ZW1JbkFycmF5LCB0cmFuc2ZlckFycmF5SXRlbSB9IGZyb20gXCJAYW5ndWxhci9jZGsvZHJhZy1kcm9wXCI7XG5pbXBvcnQgeyBNYXREaWFsb2cgfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nXCI7XG5pbXBvcnQgeyBVcGRhdGVQcm9maWxDb21wb25lbnQgfSBmcm9tICcuLi9jb21wb25lbnRzL3VwZGF0ZS1wcm9maWwvdXBkYXRlLXByb2ZpbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgRXhpdENvbmZpcm1Db21wb25lbnQgfSBmcm9tICcuLi9jb21wb25lbnRzL2V4aXQtY29uZmlybS9leGl0LWNvbmZpcm0uY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcIm9uYm9hcmRpbmctY3JlYXRlLXByb2ZpbGUtdGVtcGxhdGVcIixcbiAgdGVtcGxhdGVVcmw6IFwiLi90ZW1wbGF0ZS1wcm9maWxlLWNyZWF0ZS5jb21wb25lbnQuaHRtbFwiLFxuICBzdHlsZVVybHM6IFtcIi4vdGVtcGxhdGUtcHJvZmlsZS1jcmVhdGUuY29tcG9uZW50LnNjc3NcIl0sXG59KVxuZXhwb3J0IGNsYXNzIFRlbXBsYXRlUHJvZmlsZUNyZWF0ZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGZvcm06IEZvcm1Hcm91cDtcbiAgdmFsaWRDYXRlZ29yeSA9IGZhbHNlO1xuICBzZXBhcmF0b3JLZXlzQ29kZXMgPSBbRU5URVIsIENPTU1BLCBTRU1JQ09MT05dO1xuICBjdXJyZW50UHJvZmlsOiBhbnkgPSB7fTtcbiAgY2FuRXhpdCA9IHRydWU7XG4gIHRhZ3MgPSBbXTtcbiAgaWQgPSBcIjBcIjtcbiAgcGFyZW50ID0gW107XG4gIGVkaXRJbmRleCA9IG51bGw7XG4gIHNob3dQcm9maWxlTmFtZSA9IGZhbHNlO1xuICBtYXRJY29uTGlzdCA9IFtcbiAgICB7IG5hbWU6ICdkZXZlbG9wZXJfYm9hcmQnIH0sXG4gICAgeyBuYW1lOiAnY29udGFjdF9waG9uZScgfSxcbiAgICB7IG5hbWU6ICdjb250YWN0X21haWwnIH0sXG4gICAgeyBuYW1lOiAncGxheV9jaXJjbGVfZmlsbGVkJyB9LFxuICAgIHsgbmFtZTogJ2NvbnRyb2xfY2FtZXJhJyB9LFxuICAgIHsgbmFtZTogJ2V4cGxpY2l0JyB9LFxuICAgIHsgbmFtZTogJ3BlcnNvbicgfSxcbiAgICB7IG5hbWU6ICd2aXNpYmlsaXR5JyB9LFxuICAgIHsgbmFtZTogJ3ZpZGVvX2xhYmVsJyB9LFxuICAgIHsgbmFtZTogJ2FkZF9jaXJjbGUnIH0sXG4gICAgeyBuYW1lOiAnd2F0Y2hfbGF0ZXInIH0sXG4gICAgeyBuYW1lOiAnd2hlcmVfdG9fdm90ZScgfSxcbiAgICB7IG5hbWU6ICd3b3JrJyB9LFxuICAgIHsgbmFtZTogJ3dlYicgfSxcbiAgICB7IG5hbWU6ICd3aGF0c2hvdCcgfSxcbiAgICB7IG5hbWU6ICd3aWZpJyB9LFxuICAgIHsgbmFtZTogJ3dvcmtzcGFjZXMnIH0sXG4gICAgeyBuYW1lOiAnd2JfY2xvdWR5JyB9LFxuICAgIHsgbmFtZTogJ3dhdmVzJyB9LFxuICAgIHsgbmFtZTogJ3dhcm5pbmcnIH0sXG4gICAgeyBuYW1lOiAnc3BhY2VfZGFzJyB9XG4gIF07XG4gIGlzUGljdG9MaXN0U2hvdzogYm9vbGVhbjtcbiAgcGljdG8gPSBcIlwiO1xuICBjb25kaXRpb25EYXRhOiBhbnlbXTtcbiAgY2F0ZWdvcmllcyA9IFtdXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZmI6IEZvcm1CdWlsZGVyLFxuICAgIHB1YmxpYyBzZXJ2aWNlOiBPbmJvYXJkaW5nU2VydmljZSxcbiAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgIHByaXZhdGUgZGlhbG9nOiBNYXREaWFsb2dcbiAgKSB7IH1cblxuICBkZWZhdWx0Q2F0ZWdvcmllOiBhbnkgPSBbXG4gICAge1xuICAgICAgbmFtZTogXCJVdGlsaXNhdGV1clwiLFxuICAgICAgZWRpdGFibGU6IGZhbHNlLFxuICAgICAgZGVsZXRlYWJsZTogZmFsc2UsXG4gICAgICBleHBhbmRNb3JlOiBmYWxzZSxcbiAgICAgIGV4cGFuZE9uYm9hcmRpbmc6IHRydWUsXG4gICAgICBkZWZhdWx0VmFsdWU6IGZhbHNlLFxuICAgICAgc3VmZml4RW5kcG9pbnQ6IFwiY2F0ZWdvcnkvdXNlclwiLFxuICAgICAgc2VsZWN0b3I6IHtcbiAgICAgICAgbGFiZWw6IFwiQ29tcGFueVwiLFxuICAgICAgICBrZXk6IFwiQ29tcGFueVwiLFxuICAgICAgICBkZWZhdWx0VmFsdWU6IFt7IHZhbHVlOiBcIk5vd3RlYW1cIiwgY2hlY2tlZDogdHJ1ZSB9LCB7IHZhbHVlOiBcIkludGVybmFsXCIsIGNoZWNrZWQ6IGZhbHNlIH1dLFxuICAgICAgICB2YWx1ZTogXCJOb3d0ZWFtXCJcbiAgICAgIH0sXG4gICAgICBmb3JtczogW1xuICAgICAgICB7XG4gICAgICAgICAgbGFiZWw6IFwiQ2l2aWxpdMOpXCIsXG4gICAgICAgICAga2V5OiBcIlNhbHV0YXRpb25cIixcbiAgICAgICAgICBleHBhbmRPbmJvYXJkaW5nOiB0cnVlLFxuICAgICAgICAgIGRlZmF1bHRWYWx1ZTogW3sgdmFsdWU6IFwiTS5cIiwgY2hlY2tlZDogZmFsc2UgfSwgeyB2YWx1ZTogXCJNbWVcIiwgY2hlY2tlZDogZmFsc2UgfV0sXG4gICAgICAgICAgdmFsdWU6IG51bGwsXG4gICAgICAgICAgc2l6ZTogMTAsXG4gICAgICAgICAgaXNNYW5kYXRvcnk6IHRydWUsXG4gICAgICAgICAgb3RoZXJWYWx1ZTogJycsXG4gICAgICAgICAgdHlwZTogXCJzZWxlY3RcIixcbiAgICAgICAgICBlZGl0YWJsZTogZmFsc2UsXG4gICAgICAgICAgZGVsZXRlYWJsZTogZmFsc2UsXG4gICAgICAgICAgc3ViTGV2ZWw6IDEsXG5cbiAgICAgICAgICBleHBhbmRNb3JlOiBmYWxzZSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGxhYmVsOiBcIlR5cGUgZGUgcHJvZmlsXCIsXG4gICAgICAgICAga2V5OiBcIlR5cGVfZGVfcHJvZmlsX05vd2JvYXJkX19jXCIsXG4gICAgICAgICAgZXhwYW5kT25ib2FyZGluZzogdHJ1ZSxcbiAgICAgICAgICBkZWZhdWx0VmFsdWU6IFt7IHZhbHVlOiBcIk1hbmFnZXJcIiwgY2hlY2tlZDogZmFsc2UgfSwgeyB2YWx1ZTogXCJVdGlsaXNhdGV1clwiLCBjaGVja2VkOiBmYWxzZSB9XSxcbiAgICAgICAgICB2YWx1ZTogbnVsbCxcbiAgICAgICAgICBzaXplOiAxMCxcbiAgICAgICAgICBpc01hbmRhdG9yeTogdHJ1ZSxcbiAgICAgICAgICBvdGhlclZhbHVlOiAnJyxcbiAgICAgICAgICB0eXBlOiBcInNlbGVjdFwiLFxuICAgICAgICAgIGVkaXRhYmxlOiBmYWxzZSxcbiAgICAgICAgICBkZWxldGVhYmxlOiBmYWxzZSxcbiAgICAgICAgICBzdWJMZXZlbDogMSxcbiAgICAgICAgICBleHBhbmRNb3JlOiBmYWxzZSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGxhYmVsOiBcIk5vbVwiLFxuICAgICAgICAgIGtleTogXCJMYXN0TmFtZVwiLFxuICAgICAgICAgIGV4cGFuZE9uYm9hcmRpbmc6IHRydWUsXG4gICAgICAgICAgZGVmYXVsdFZhbHVlOiBudWxsLFxuICAgICAgICAgIHZhbHVlOiBudWxsLFxuICAgICAgICAgIHNpemU6IDgwLFxuICAgICAgICAgIGlzTWFuZGF0b3J5OiB0cnVlLFxuICAgICAgICAgIG90aGVyVmFsdWU6ICcnLFxuICAgICAgICAgIHR5cGU6IFwidGV4dFwiLFxuICAgICAgICAgIGVkaXRhYmxlOiBmYWxzZSxcbiAgICAgICAgICBkZWxldGVhYmxlOiBmYWxzZSxcbiAgICAgICAgICBzdWJMZXZlbDogMSxcbiAgICAgICAgICBleHBhbmRNb3JlOiBmYWxzZSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGxhYmVsOiBcIlByw6lub21cIixcbiAgICAgICAgICBrZXk6IFwiRmlyc3ROYW1lXCIsXG4gICAgICAgICAgZXhwYW5kT25ib2FyZGluZzogdHJ1ZSxcbiAgICAgICAgICBkZWZhdWx0VmFsdWU6IG51bGwsXG4gICAgICAgICAgdmFsdWU6IG51bGwsXG4gICAgICAgICAgc2l6ZTogODAsXG4gICAgICAgICAgaXNNYW5kYXRvcnk6IHRydWUsXG4gICAgICAgICAgb3RoZXJWYWx1ZTogJycsXG4gICAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXG4gICAgICAgICAgZWRpdGFibGU6IGZhbHNlLFxuICAgICAgICAgIGRlbGV0ZWFibGU6IGZhbHNlLFxuICAgICAgICAgIHN1YkxldmVsOiAxLFxuICAgICAgICAgIGV4cGFuZE1vcmU6IGZhbHNlLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbGFiZWw6IFwiRW1haWxcIixcbiAgICAgICAgICBrZXk6IFwiRW1haWxcIixcbiAgICAgICAgICBleHBhbmRPbmJvYXJkaW5nOiB0cnVlLFxuICAgICAgICAgIGRlZmF1bHRWYWx1ZTogbnVsbCxcbiAgICAgICAgICB2YWx1ZTogbnVsbCxcbiAgICAgICAgICBzaXplOiA4MCxcbiAgICAgICAgICBpc01hbmRhdG9yeTogdHJ1ZSxcbiAgICAgICAgICBvdGhlclZhbHVlOiAnJyxcbiAgICAgICAgICB0eXBlOiBcImVtYWlsXCIsXG4gICAgICAgICAgZWRpdGFibGU6IGZhbHNlLFxuICAgICAgICAgIGRlbGV0ZWFibGU6IGZhbHNlLFxuICAgICAgICAgIHN1YkxldmVsOiAxLFxuICAgICAgICAgIGV4cGFuZE1vcmU6IGZhbHNlLFxuICAgICAgICB9LFxuXG4gICAgICAgIHtcbiAgICAgICAgICBsYWJlbDogXCJUw6lsw6lwaG9uZSBmaXhlXCIsXG4gICAgICAgICAga2V5OiBcIlBob25lXCIsXG4gICAgICAgICAgZXhwYW5kT25ib2FyZGluZzogdHJ1ZSxcbiAgICAgICAgICBkZWZhdWx0VmFsdWU6IG51bGwsXG4gICAgICAgICAgdmFsdWU6IG51bGwsXG4gICAgICAgICAgc2l6ZTogMjAsXG4gICAgICAgICAgaXNNYW5kYXRvcnk6IGZhbHNlLFxuICAgICAgICAgIG90aGVyVmFsdWU6ICcnLFxuICAgICAgICAgIHR5cGU6IFwidGVsXCIsXG4gICAgICAgICAgZWRpdGFibGU6IGZhbHNlLFxuICAgICAgICAgIGRlbGV0ZWFibGU6IGZhbHNlLFxuICAgICAgICAgIHN1YkxldmVsOiAxLFxuXG4gICAgICAgICAgZXhwYW5kTW9yZTogZmFsc2UsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBsYWJlbDogXCJUw6lsw6lwaG9uZSBwb3J0YWJsZVwiLFxuICAgICAgICAgIGtleTogXCJNb2JpbGVQaG9uZVwiLFxuICAgICAgICAgIGV4cGFuZE9uYm9hcmRpbmc6IHRydWUsXG4gICAgICAgICAgZGVmYXVsdFZhbHVlOiBudWxsLFxuICAgICAgICAgIHZhbHVlOiBudWxsLFxuICAgICAgICAgIHNpemU6IDIwLFxuICAgICAgICAgIGlzTWFuZGF0b3J5OiBmYWxzZSxcbiAgICAgICAgICBvdGhlclZhbHVlOiAnJyxcbiAgICAgICAgICB0eXBlOiBcInRlbFwiLFxuICAgICAgICAgIGVkaXRhYmxlOiBmYWxzZSxcbiAgICAgICAgICBkZWxldGVhYmxlOiBmYWxzZSxcbiAgICAgICAgICBzdWJMZXZlbDogMSxcblxuICAgICAgICAgIGV4cGFuZE1vcmU6IGZhbHNlLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbGFiZWw6IFwiRm9uY3Rpb25cIixcbiAgICAgICAgICBrZXk6IFwiVGl0bGVcIixcbiAgICAgICAgICBleHBhbmRPbmJvYXJkaW5nOiB0cnVlLFxuICAgICAgICAgIGRlZmF1bHRWYWx1ZTogbnVsbCxcbiAgICAgICAgICB2YWx1ZTogbnVsbCxcbiAgICAgICAgICBzaXplOiA4MCxcbiAgICAgICAgICBpc01hbmRhdG9yeTogdHJ1ZSxcbiAgICAgICAgICBvdGhlclZhbHVlOiAnJyxcbiAgICAgICAgICB0eXBlOiBcInRleHRcIixcbiAgICAgICAgICBlZGl0YWJsZTogZmFsc2UsXG4gICAgICAgICAgZGVsZXRlYWJsZTogZmFsc2UsXG4gICAgICAgICAgc3ViTGV2ZWw6IDEsXG4gICAgICAgICAgZXhwYW5kTW9yZTogZmFsc2UsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBsYWJlbDogXCJFdGFibGlzc2VtZW50IC8gU2l0ZVwiLFxuICAgICAgICAgIGtleTogXCJBY2NvdW50TmFtZVwiLFxuICAgICAgICAgIGV4cGFuZE9uYm9hcmRpbmc6IHRydWUsXG4gICAgICAgICAgZGVmYXVsdFZhbHVlOiBudWxsLFxuICAgICAgICAgIHZhbHVlOiBudWxsLFxuICAgICAgICAgIHNpemU6IDgwLFxuICAgICAgICAgIGlzTWFuZGF0b3J5OiB0cnVlLFxuICAgICAgICAgIG90aGVyVmFsdWU6ICcnLFxuICAgICAgICAgIHR5cGU6IFwidGV4dFwiLFxuICAgICAgICAgIGVkaXRhYmxlOiBmYWxzZSxcbiAgICAgICAgICBkZWxldGVhYmxlOiBmYWxzZSxcbiAgICAgICAgICBzdWJMZXZlbDogMSxcbiAgICAgICAgICBleHBhbmRNb3JlOiBmYWxzZSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGxhYmVsOiBcIkFjY8OocyBhdSBwb3J0YWlsXCIsXG4gICAgICAgICAga2V5OiBcIkFjY19zX2F1X3BvcnRhaWxfY2xpZW50X05vd0JvYXJkX19jXCIsXG4gICAgICAgICAgZXhwYW5kT25ib2FyZGluZzogdHJ1ZSxcbiAgICAgICAgICBkZWZhdWx0VmFsdWU6IFt7IHZhbHVlOiBcIk91aVwiLCBjaGVja2VkOiBmYWxzZSB9LCB7IHZhbHVlOiBcIk5vblwiLCBjaGVja2VkOiBmYWxzZSB9XSxcbiAgICAgICAgICB2YWx1ZTogbnVsbCxcbiAgICAgICAgICBzaXplOiAxMCxcbiAgICAgICAgICBpc01hbmRhdG9yeTogdHJ1ZSxcbiAgICAgICAgICBvdGhlclZhbHVlOiAnJyxcbiAgICAgICAgICB0eXBlOiBcInNlbGVjdFwiLFxuICAgICAgICAgIGVkaXRhYmxlOiBmYWxzZSxcbiAgICAgICAgICBkZWxldGVhYmxlOiBmYWxzZSxcbiAgICAgICAgICBzdWJMZXZlbDogMSxcblxuICAgICAgICAgIGV4cGFuZE1vcmU6IGZhbHNlLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbGFiZWw6IFwiTGFuZ3VlXCIsXG4gICAgICAgICAga2V5OiBcIkxhbmd1ZV9tYXRlcm5lbGxlX19jXCIsXG4gICAgICAgICAgZXhwYW5kT25ib2FyZGluZzogdHJ1ZSxcbiAgICAgICAgICBkZWZhdWx0VmFsdWU6IFt7IHZhbHVlOiBcIkZyYW7Dp2Fpc1wiLCBjaGVja2VkOiBmYWxzZSB9LCB7IHZhbHVlOiBcIkFuZ2xhaXNcIiwgY2hlY2tlZDogZmFsc2UgfV0sXG4gICAgICAgICAgdmFsdWU6IG51bGwsXG4gICAgICAgICAgc2l6ZTogMTAsXG4gICAgICAgICAgaXNNYW5kYXRvcnk6IHRydWUsXG4gICAgICAgICAgb3RoZXJWYWx1ZTogJycsXG4gICAgICAgICAgdHlwZTogXCJzZWxlY3RcIixcbiAgICAgICAgICBlZGl0YWJsZTogZmFsc2UsXG4gICAgICAgICAgZGVsZXRlYWJsZTogZmFsc2UsXG4gICAgICAgICAgc3ViTGV2ZWw6IDEsXG4gICAgICAgICAgZXhwYW5kTW9yZTogZmFsc2UsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBsYWJlbDogXCJBIHF1aXR0w6kgbGEgc29jacOpdMOpXCIsXG4gICAgICAgICAga2V5OiBcIkFfcXVpdHRfbGFfc29jaV90X19jXCIsXG4gICAgICAgICAgZXhwYW5kT25ib2FyZGluZzogdHJ1ZSxcbiAgICAgICAgICBkZWZhdWx0VmFsdWU6IFt7IHZhbHVlOiBcIk91aVwiLCBjaGVja2VkOiBmYWxzZSB9LCB7IHZhbHVlOiBcIk5vblwiLCBjaGVja2VkOiBmYWxzZSB9XSxcbiAgICAgICAgICB2YWx1ZTogbnVsbCxcbiAgICAgICAgICBzaXplOiAxMCxcbiAgICAgICAgICBpc01hbmRhdG9yeTogdHJ1ZSxcbiAgICAgICAgICBvdGhlclZhbHVlOiAnJyxcbiAgICAgICAgICB0eXBlOiBcInNlbGVjdFwiLFxuICAgICAgICAgIGVkaXRhYmxlOiBmYWxzZSxcbiAgICAgICAgICBkZWxldGVhYmxlOiBmYWxzZSxcbiAgICAgICAgICBzdWJMZXZlbDogMSxcbiAgICAgICAgICBleHBhbmRNb3JlOiBmYWxzZSxcbiAgICAgICAgfSxcblxuICAgICAgXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwiU2Vzc2lvbiBkJ3V0aWxpc2F0ZXVyXCIsXG4gICAgICBlZGl0YWJsZTogdHJ1ZSxcbiAgICAgIGlzQ29uZGl0aW9uYWw6IGZhbHNlLFxuICAgICAgY29uZGl0aW9uVmFsdWU6IFwiXCIsXG4gICAgICBjb25kaXRpb25Mb2NhdGlvbjoge30sXG4gICAgICBkZWxldGVhYmxlOiB0cnVlLFxuICAgICAgc2VsZWN0ZWQ6IHRydWUsXG4gICAgICBleHBhbmRNb3JlOiBmYWxzZSxcbiAgICAgIGV4cGFuZE9uYm9hcmRpbmc6IHRydWUsXG4gICAgICBkZWZhdWx0VmFsdWU6IGZhbHNlLFxuICAgICAgc3VmZml4RW5kcG9pbnQ6IFwiY2F0ZWdvcnkvdXNlci1zZXNzaW9uXCIsXG4gICAgICBzZWxlY3Rvcjoge1xuICAgICAgICBsYWJlbDogXCJDb21wYW55XCIsXG4gICAgICAgIGtleTogXCJDb21wYW55XCIsXG4gICAgICAgIGRlZmF1bHRWYWx1ZTogW3sgdmFsdWU6IFwiTm93dGVhbVwiLCBjaGVja2VkOiB0cnVlIH0sIHsgdmFsdWU6IFwiSW50ZXJuYWxcIiwgY2hlY2tlZDogZmFsc2UgfV0sXG4gICAgICAgIHZhbHVlOiBcIk5vd3RlYW1cIlxuICAgICAgfSxcbiAgICAgIGZvcm1zOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBsYWJlbDogXCJVdGlsaXNhdGV1ciBsb2NhbCDDoCBjcsOpZXJcIixcbiAgICAgICAgICBrZXk6IFwiVXNlckxvY2FsVG9DcmVhdGVcIixcbiAgICAgICAgICBleHBhbmRPbmJvYXJkaW5nOiB0cnVlLFxuICAgICAgICAgIGRlZmF1bHRWYWx1ZTogbnVsbCxcbiAgICAgICAgICB2YWx1ZTogdHJ1ZSxcbiAgICAgICAgICBzaXplOiA4MCxcbiAgICAgICAgICBpc01hbmRhdG9yeTogZmFsc2UsXG4gICAgICAgICAgb3RoZXJWYWx1ZTogJycsXG4gICAgICAgICAgdHlwZTogXCJjaGVja2JveFwiLFxuICAgICAgICAgIGVkaXRhYmxlOiB0cnVlLFxuICAgICAgICAgIGlzQ29uZGl0aW9uYWw6IGZhbHNlLFxuICAgICAgICAgIGNvbmRpdGlvblZhbHVlOiBcIlwiLFxuICAgICAgICAgIGNvbmRpdGlvbkxvY2F0aW9uOiB7fSxcbiAgICAgICAgICBkZWxldGVhYmxlOiB0cnVlLFxuICAgICAgICAgIHN1YkxldmVsOiAxLFxuICAgICAgICAgIGV4cGFuZE1vcmU6IGZhbHNlLFxuICAgICAgICAgIC8qc2VsZWN0b3I6IHtcbiAgICAgICAgICAgIGxhYmVsOiBcIkNvbXBhbnlcIixcbiAgICAgICAgICAgIGtleTogXCJDb21wYW55XCIsXG4gICAgICAgICAgICBkZWZhdWx0VmFsdWU6IFt7IHZhbHVlOiBcIk5vd3RlYW1cIiwgY2hlY2tlZDogdHJ1ZSB9LCB7IHZhbHVlOiBcIkludGVybmFsXCIsIGNoZWNrZWQ6IGZhbHNlIH1dLFxuICAgICAgICAgICAgdmFsdWU6IFwiTm93dGVhbVwiXG4gICAgICAgICAgfSwqL1xuICAgICAgICAgIGZvcm1zOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGxhYmVsOiBcIkxvZ2luXCIsXG4gICAgICAgICAgICAgIGtleTogXCJMb2dpblwiLFxuICAgICAgICAgICAgICBleHBhbmRPbmJvYXJkaW5nOiB0cnVlLFxuICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU6IG51bGwsXG4gICAgICAgICAgICAgIHZhbHVlOiBudWxsLFxuICAgICAgICAgICAgICBzaXplOiA4MCxcbiAgICAgICAgICAgICAgaXNNYW5kYXRvcnk6IHRydWUsXG4gICAgICAgICAgICAgIG90aGVyVmFsdWU6ICcnLFxuICAgICAgICAgICAgICB0eXBlOiBcInRleHRcIixcbiAgICAgICAgICAgICAgZWRpdGFibGU6IHRydWUsXG4gICAgICAgICAgICAgIGlzQ29uZGl0aW9uYWw6IGZhbHNlLFxuICAgICAgICAgICAgICBjb25kaXRpb25WYWx1ZTogXCJcIixcbiAgICAgICAgICAgICAgY29uZGl0aW9uTG9jYXRpb246IHt9LFxuICAgICAgICAgICAgICBkZWxldGVhYmxlOiBmYWxzZSxcbiAgICAgICAgICAgICAgc3ViTGV2ZWw6IDIsXG4gICAgICAgICAgICAgIGV4cGFuZE1vcmU6IGZhbHNlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbGFiZWw6IFwiTW90IGRlIHBhc3NlXCIsXG4gICAgICAgICAgICAgIGtleTogXCJQYXNzd29yZFwiLFxuICAgICAgICAgICAgICBleHBhbmRPbmJvYXJkaW5nOiB0cnVlLFxuICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU6IG51bGwsXG4gICAgICAgICAgICAgIHZhbHVlOiBudWxsLFxuICAgICAgICAgICAgICBzaXplOiA4MCxcbiAgICAgICAgICAgICAgaXNNYW5kYXRvcnk6IHRydWUsXG4gICAgICAgICAgICAgIG90aGVyVmFsdWU6ICcnLFxuICAgICAgICAgICAgICB0eXBlOiBcInBhc3N3b3JkXCIsXG4gICAgICAgICAgICAgIGVkaXRhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICBpc0NvbmRpdGlvbmFsOiBmYWxzZSxcbiAgICAgICAgICAgICAgY29uZGl0aW9uVmFsdWU6IFwiXCIsXG4gICAgICAgICAgICAgIGNvbmRpdGlvbkxvY2F0aW9uOiB7fSxcbiAgICAgICAgICAgICAgZGVsZXRlYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgc3ViTGV2ZWw6IDIsXG4gICAgICAgICAgICAgIGV4cGFuZE1vcmU6IGZhbHNlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbGFiZWw6IFwiVXRpbGlzYXRldXIgQUQgKHNlcnZldXIpIMOgIGNyw6llclwiLFxuICAgICAgICAgIGtleTogXCJVc2VyU2VydmVyVG9DcmVhdGVcIixcbiAgICAgICAgICBleHBhbmRPbmJvYXJkaW5nOiB0cnVlLFxuICAgICAgICAgIGRlZmF1bHRWYWx1ZTogbnVsbCxcbiAgICAgICAgICB2YWx1ZTogdHJ1ZSxcbiAgICAgICAgICBzaXplOiA4MCxcbiAgICAgICAgICBpc01hbmRhdG9yeTogZmFsc2UsXG4gICAgICAgICAgb3RoZXJWYWx1ZTogJycsXG4gICAgICAgICAgdHlwZTogXCJjaGVja2JveFwiLFxuICAgICAgICAgIGVkaXRhYmxlOiB0cnVlLFxuICAgICAgICAgIGlzQ29uZGl0aW9uYWw6IGZhbHNlLFxuICAgICAgICAgIGNvbmRpdGlvblZhbHVlOiBcIlwiLFxuICAgICAgICAgIGNvbmRpdGlvbkxvY2F0aW9uOiB7fSxcbiAgICAgICAgICBkZWxldGVhYmxlOiB0cnVlLFxuICAgICAgICAgIHN1YkxldmVsOiAxLFxuICAgICAgICAgIGV4cGFuZE1vcmU6IGZhbHNlLFxuICAgICAgICAgIGZvcm1zOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGxhYmVsOiBcIk5vbSBkZSBkb21haW5lXCIsXG4gICAgICAgICAgICAgIGtleTogXCJEb21haW5OYW1lXCIsXG4gICAgICAgICAgICAgIGV4cGFuZE9uYm9hcmRpbmc6IHRydWUsXG4gICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZTogbnVsbCxcbiAgICAgICAgICAgICAgdmFsdWU6IG51bGwsXG4gICAgICAgICAgICAgIHNpemU6IDgwLFxuICAgICAgICAgICAgICBpc01hbmRhdG9yeTogdHJ1ZSxcbiAgICAgICAgICAgICAgb3RoZXJWYWx1ZTogJycsXG4gICAgICAgICAgICAgIHR5cGU6IFwidGV4dFwiLFxuICAgICAgICAgICAgICBlZGl0YWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgaXNDb25kaXRpb25hbDogZmFsc2UsXG4gICAgICAgICAgICAgIGNvbmRpdGlvblZhbHVlOiBcIlwiLFxuICAgICAgICAgICAgICBjb25kaXRpb25Mb2NhdGlvbjoge30sXG4gICAgICAgICAgICAgIGRlbGV0ZWFibGU6IGZhbHNlLFxuICAgICAgICAgICAgICBzdWJMZXZlbDogMixcbiAgICAgICAgICAgICAgZXhwYW5kTW9yZTogZmFsc2UsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBsYWJlbDogXCJWb3RyZSBsb2dpblwiLFxuICAgICAgICAgICAgICBrZXk6IFwiWW91ckxvZ2luXCIsXG4gICAgICAgICAgICAgIGV4cGFuZE9uYm9hcmRpbmc6IHRydWUsXG4gICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZTogbnVsbCxcbiAgICAgICAgICAgICAgdmFsdWU6IG51bGwsXG4gICAgICAgICAgICAgIHNpemU6IDgwLFxuICAgICAgICAgICAgICBpc01hbmRhdG9yeTogdHJ1ZSxcbiAgICAgICAgICAgICAgb3RoZXJWYWx1ZTogJycsXG4gICAgICAgICAgICAgIHR5cGU6IFwidGV4dFwiLFxuICAgICAgICAgICAgICBlZGl0YWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgaXNDb25kaXRpb25hbDogZmFsc2UsXG4gICAgICAgICAgICAgIGNvbmRpdGlvblZhbHVlOiBcIlwiLFxuICAgICAgICAgICAgICBjb25kaXRpb25Mb2NhdGlvbjoge30sXG4gICAgICAgICAgICAgIGRlbGV0ZWFibGU6IHRydWUsXG4gICAgICAgICAgICAgIHN1YkxldmVsOiAyLFxuICAgICAgICAgICAgICBleHBhbmRNb3JlOiBmYWxzZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGxhYmVsOiBcIlZvdHJlIG1vdCBkZSBwYXNzZVwiLFxuICAgICAgICAgICAgICBrZXk6IFwiWW91clBhc3N3b3JkXCIsXG4gICAgICAgICAgICAgIGV4cGFuZE9uYm9hcmRpbmc6IHRydWUsXG4gICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZTogbnVsbCxcbiAgICAgICAgICAgICAgdmFsdWU6IG51bGwsXG4gICAgICAgICAgICAgIHNpemU6IDgwLFxuICAgICAgICAgICAgICBpc01hbmRhdG9yeTogdHJ1ZSxcbiAgICAgICAgICAgICAgb3RoZXJWYWx1ZTogJycsXG4gICAgICAgICAgICAgIHR5cGU6IFwicGFzc3dvcmRcIixcbiAgICAgICAgICAgICAgZWRpdGFibGU6IHRydWUsXG4gICAgICAgICAgICAgIGlzQ29uZGl0aW9uYWw6IGZhbHNlLFxuICAgICAgICAgICAgICBjb25kaXRpb25WYWx1ZTogXCJcIixcbiAgICAgICAgICAgICAgY29uZGl0aW9uTG9jYXRpb246IHt9LFxuICAgICAgICAgICAgICBkZWxldGVhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICBzdWJMZXZlbDogMixcbiAgICAgICAgICAgICAgZXhwYW5kTW9yZTogZmFsc2UsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBsYWJlbDogXCJHcm91cGUgZGUgc8OpY3VyaXTDqVwiLFxuICAgICAgICAgICAgICBrZXk6IFwiR3JvdXBTZWN1cml0eVwiLFxuICAgICAgICAgICAgICBleHBhbmRPbmJvYXJkaW5nOiB0cnVlLFxuICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU6IG51bGwsXG4gICAgICAgICAgICAgIHZhbHVlOiB0cnVlLFxuICAgICAgICAgICAgICBzaXplOiA4MCxcbiAgICAgICAgICAgICAgaXNNYW5kYXRvcnk6IHRydWUsXG4gICAgICAgICAgICAgIG90aGVyVmFsdWU6ICcnLFxuICAgICAgICAgICAgICB0eXBlOiBcImNoZWNrYm94XCIsXG4gICAgICAgICAgICAgIGVkaXRhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICBpc0NvbmRpdGlvbmFsOiBmYWxzZSxcbiAgICAgICAgICAgICAgY29uZGl0aW9uVmFsdWU6IFwiXCIsXG4gICAgICAgICAgICAgIGNvbmRpdGlvbkxvY2F0aW9uOiB7fSxcbiAgICAgICAgICAgICAgZGVsZXRlYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgc3ViTGV2ZWw6IDIsXG4gICAgICAgICAgICAgIGV4cGFuZE1vcmU6IGZhbHNlLFxuICAgICAgICAgICAgICBmb3JtczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIlV0aWxpc2F0ZXVyIGF2ZWMgbGVzIGRyb2l0cyBzaW1pbGFpcmVzICpcIixcbiAgICAgICAgICAgICAgICAgIGtleTogXCJVc2VyV2l0aFNpbWlsYXJBY2Nlc3NcIixcbiAgICAgICAgICAgICAgICAgIGV4cGFuZE9uYm9hcmRpbmc6IHRydWUsXG4gICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU6IG51bGwsXG4gICAgICAgICAgICAgICAgICB2YWx1ZTogbnVsbCxcbiAgICAgICAgICAgICAgICAgIHNpemU6IDgwLFxuICAgICAgICAgICAgICAgICAgaXNNYW5kYXRvcnk6IHRydWUsXG4gICAgICAgICAgICAgICAgICBvdGhlclZhbHVlOiAnJyxcbiAgICAgICAgICAgICAgICAgIHR5cGU6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgZWRpdGFibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICBpc0NvbmRpdGlvbmFsOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgIGNvbmRpdGlvblZhbHVlOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgY29uZGl0aW9uTG9jYXRpb246IHt9LFxuICAgICAgICAgICAgICAgICAgZGVsZXRlYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgIHN1YkxldmVsOiAzLFxuICAgICAgICAgICAgICAgICAgZXhwYW5kTW9yZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBsYWJlbDogXCJEZXNjcmlwdGlvbnNcIixcbiAgICAgICAgICAgICAgICAgIGtleTogXCJEZXNjcmlwdGlvblwiLFxuICAgICAgICAgICAgICAgICAgZXhwYW5kT25ib2FyZGluZzogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZTogbnVsbCxcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiBudWxsLFxuICAgICAgICAgICAgICAgICAgc2l6ZTogMjU1LFxuICAgICAgICAgICAgICAgICAgaXNNYW5kYXRvcnk6IHRydWUsXG4gICAgICAgICAgICAgICAgICBvdGhlclZhbHVlOiAnJyxcbiAgICAgICAgICAgICAgICAgIHR5cGU6IFwidGV4dGFyZWFcIixcbiAgICAgICAgICAgICAgICAgIGVkaXRhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgaXNDb25kaXRpb25hbDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICBjb25kaXRpb25WYWx1ZTogXCJcIixcbiAgICAgICAgICAgICAgICAgIGNvbmRpdGlvbkxvY2F0aW9uOiB7fSxcbiAgICAgICAgICAgICAgICAgIGRlbGV0ZWFibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICBzdWJMZXZlbDogMyxcbiAgICAgICAgICAgICAgICAgIGV4cGFuZE1vcmU6IGZhbHNlLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJNZXNzYWdlcmllXCIsXG4gICAgICBleHBhbmRNb3JlOiBmYWxzZSxcbiAgICAgIHN1ZmZpeEVuZHBvaW50OiBcImNhdGVnb3J5L21lc3NhZ2VyaWVcIixcbiAgICAgIHNlbGVjdGVkOiB0cnVlLFxuICAgICAgZWRpdGFibGU6IHRydWUsXG4gICAgICBpc0NvbmRpdGlvbmFsOiBmYWxzZSxcbiAgICAgIGNvbmRpdGlvblZhbHVlOiBcIlwiLFxuICAgICAgY29uZGl0aW9uTG9jYXRpb246IHt9LFxuICAgICAgZGVsZXRlYWJsZTogdHJ1ZSxcbiAgICAgIGV4cGFuZE9uYm9hcmRpbmc6IHRydWUsXG4gICAgICBkZWZhdWx0VmFsdWU6IGZhbHNlLFxuICAgICAgc2VsZWN0b3I6IHtcbiAgICAgICAgbGFiZWw6IFwiQ29tcGFueVwiLFxuICAgICAgICBrZXk6IFwiQ29tcGFueVwiLFxuICAgICAgICBkZWZhdWx0VmFsdWU6IFt7IHZhbHVlOiBcIk5vd3RlYW1cIiwgY2hlY2tlZDogdHJ1ZSB9LCB7IHZhbHVlOiBcIkludGVybmFsXCIsIGNoZWNrZWQ6IGZhbHNlIH1dLFxuICAgICAgICB2YWx1ZTogXCJOb3d0ZWFtXCJcbiAgICAgIH0sXG4gICAgICBmb3JtczogW1xuICAgICAgICB7XG4gICAgICAgICAgbGFiZWw6IFwiQWRyZXNzZSBtYWlsIMOgIGNyw6llclwiLFxuICAgICAgICAgIGtleTogXCJFbWFpbFRvQ3JlYXRlXCIsXG4gICAgICAgICAgZXhwYW5kT25ib2FyZGluZzogdHJ1ZSxcbiAgICAgICAgICBkZWZhdWx0VmFsdWU6IG51bGwsXG4gICAgICAgICAgdmFsdWU6IHRydWUsXG4gICAgICAgICAgc2l6ZTogODAsXG4gICAgICAgICAgaXNNYW5kYXRvcnk6IHRydWUsXG4gICAgICAgICAgb3RoZXJWYWx1ZTogJycsXG4gICAgICAgICAgdHlwZTogXCJjaGVja2JveFwiLFxuICAgICAgICAgIGVkaXRhYmxlOiB0cnVlLFxuICAgICAgICAgIGlzQ29uZGl0aW9uYWw6IGZhbHNlLFxuICAgICAgICAgIGNvbmRpdGlvblZhbHVlOiBcIlwiLFxuICAgICAgICAgIGNvbmRpdGlvbkxvY2F0aW9uOiB7fSxcbiAgICAgICAgICBkZWxldGVhYmxlOiB0cnVlLFxuICAgICAgICAgIHN1YkxldmVsOiAxLFxuICAgICAgICAgIGV4cGFuZE1vcmU6IGZhbHNlLFxuICAgICAgICAgIC8qc2VsZWN0b3I6IHtcbiAgICAgICAgICAgIGxhYmVsOiBcIkNvbXBhbnlcIixcbiAgICAgICAgICAgIGtleTogXCJDb21wYW55XCIsXG4gICAgICAgICAgICBkZWZhdWx0VmFsdWU6IFt7IHZhbHVlOiBcIk5vd3RlYW1cIiwgY2hlY2tlZDogdHJ1ZSB9LCB7IHZhbHVlOiBcIkludGVybmFsXCIsIGNoZWNrZWQ6IGZhbHNlIH1dLFxuICAgICAgICAgICAgdmFsdWU6IFwiTm93dGVhbVwiXG4gICAgICAgICAgfSwqL1xuICAgICAgICAgIGZvcm1zOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGxhYmVsOiBcIkFkcmVzc2UgbWFpbFwiLFxuICAgICAgICAgICAgICBrZXk6IFwiRW1haWxcIixcbiAgICAgICAgICAgICAgZXhwYW5kT25ib2FyZGluZzogdHJ1ZSxcbiAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlOiBudWxsLFxuICAgICAgICAgICAgICB2YWx1ZTogbnVsbCxcbiAgICAgICAgICAgICAgc2l6ZTogODAsXG4gICAgICAgICAgICAgIGlzTWFuZGF0b3J5OiB0cnVlLFxuICAgICAgICAgICAgICBvdGhlclZhbHVlOiAnJyxcbiAgICAgICAgICAgICAgdHlwZTogXCJlbWFpbFwiLFxuICAgICAgICAgICAgICBlZGl0YWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgaXNDb25kaXRpb25hbDogZmFsc2UsXG4gICAgICAgICAgICAgIGNvbmRpdGlvblZhbHVlOiBcIlwiLFxuICAgICAgICAgICAgICBjb25kaXRpb25Mb2NhdGlvbjoge30sXG4gICAgICAgICAgICAgIGRlbGV0ZWFibGU6IHRydWUsXG4gICAgICAgICAgICAgIHN1YkxldmVsOiAyLFxuICAgICAgICAgICAgICBleHBhbmRNb3JlOiBmYWxzZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGxhYmVsOiBcIlR5cGUgZGUgbGljZW5jZSAoc2kgZ8OpcsOpZXMgcGFyIGxlIGNsaWVudClcIixcbiAgICAgICAgICAgICAga2V5OiBcIlNlcmlhbEtleVwiLFxuICAgICAgICAgICAgICBleHBhbmRPbmJvYXJkaW5nOiB0cnVlLFxuICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU6IG51bGwsXG4gICAgICAgICAgICAgIHZhbHVlOiBudWxsLFxuICAgICAgICAgICAgICBzaXplOiAxMDAwLFxuICAgICAgICAgICAgICBpc01hbmRhdG9yeTogdHJ1ZSxcbiAgICAgICAgICAgICAgb3RoZXJWYWx1ZTogJycsXG4gICAgICAgICAgICAgIHR5cGU6IFwidGV4dFwiLFxuICAgICAgICAgICAgICBlZGl0YWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgaXNDb25kaXRpb25hbDogZmFsc2UsXG4gICAgICAgICAgICAgIGNvbmRpdGlvblZhbHVlOiBcIlwiLFxuICAgICAgICAgICAgICBjb25kaXRpb25Mb2NhdGlvbjoge30sXG4gICAgICAgICAgICAgIGRlbGV0ZWFibGU6IHRydWUsXG4gICAgICAgICAgICAgIHN1YkxldmVsOiAyLFxuICAgICAgICAgICAgICBleHBhbmRNb3JlOiBmYWxzZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGxhYmVsOiBcIkxpc3RlcyAgZGUgZGlzdHJpYnV0aW9uXCIsXG4gICAgICAgICAga2V5OiBcIkRpc3RyaWJ1dGlvbkxpc3RcIixcbiAgICAgICAgICBleHBhbmRPbmJvYXJkaW5nOiB0cnVlLFxuICAgICAgICAgIGRlZmF1bHRWYWx1ZTogbnVsbCxcbiAgICAgICAgICB2YWx1ZTogdHJ1ZSxcbiAgICAgICAgICBzaXplOiA4MCxcbiAgICAgICAgICBpc01hbmRhdG9yeTogdHJ1ZSxcbiAgICAgICAgICBvdGhlclZhbHVlOiAnJyxcbiAgICAgICAgICB0eXBlOiBcImNoZWNrYm94XCIsXG4gICAgICAgICAgZWRpdGFibGU6IHRydWUsXG4gICAgICAgICAgaXNDb25kaXRpb25hbDogZmFsc2UsXG4gICAgICAgICAgY29uZGl0aW9uVmFsdWU6IFwiXCIsXG4gICAgICAgICAgY29uZGl0aW9uTG9jYXRpb246IHt9LFxuICAgICAgICAgIGRlbGV0ZWFibGU6IHRydWUsXG4gICAgICAgICAgc3ViTGV2ZWw6IDEsXG4gICAgICAgICAgZXhwYW5kTW9yZTogZmFsc2UsXG4gICAgICAgICAgLypzZWxlY3Rvcjoge1xuICAgICAgICAgICAgbGFiZWw6IFwiQ29tcGFueVwiLFxuICAgICAgICAgICAga2V5OiBcIkNvbXBhbnlcIixcbiAgICAgICAgICAgIGRlZmF1bHRWYWx1ZTogW3sgdmFsdWU6IFwiTm93dGVhbVwiLCBjaGVja2VkOiB0cnVlIH0sIHsgdmFsdWU6IFwiSW50ZXJuYWxcIiwgY2hlY2tlZDogZmFsc2UgfV0sXG4gICAgICAgICAgICB2YWx1ZTogXCJOb3d0ZWFtXCJcbiAgICAgICAgICB9LCovXG4gICAgICAgICAgZm9ybXM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbGFiZWw6IFwiVXRpbGlzYXRldXIgYXZlYyBsZXMgbGlzdGVzIHNpbWlsYWlyZXMgKlwiLFxuICAgICAgICAgICAgICBrZXk6IFwiVXNlcldpdGhTaW1pbGFyTGlzdFwiLFxuICAgICAgICAgICAgICBleHBhbmRPbmJvYXJkaW5nOiB0cnVlLFxuICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU6IG51bGwsXG4gICAgICAgICAgICAgIHZhbHVlOiBudWxsLFxuICAgICAgICAgICAgICBzaXplOiA4MCxcbiAgICAgICAgICAgICAgaXNNYW5kYXRvcnk6IHRydWUsXG4gICAgICAgICAgICAgIG90aGVyVmFsdWU6ICcnLFxuICAgICAgICAgICAgICB0eXBlOiBcInRleHRcIixcbiAgICAgICAgICAgICAgZWRpdGFibGU6IHRydWUsXG4gICAgICAgICAgICAgIGlzQ29uZGl0aW9uYWw6IGZhbHNlLFxuICAgICAgICAgICAgICBjb25kaXRpb25WYWx1ZTogXCJcIixcbiAgICAgICAgICAgICAgY29uZGl0aW9uTG9jYXRpb246IHt9LFxuICAgICAgICAgICAgICBkZWxldGVhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICBzdWJMZXZlbDogMixcbiAgICAgICAgICAgICAgZXhwYW5kTW9yZTogZmFsc2UsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBsYWJlbDogXCJEZXNjcmlwdGlvbnNcIixcbiAgICAgICAgICAgICAga2V5OiBcIkRlc2NyaXB0aW9uXCIsXG4gICAgICAgICAgICAgIGV4cGFuZE9uYm9hcmRpbmc6IHRydWUsXG4gICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZTogbnVsbCxcbiAgICAgICAgICAgICAgdmFsdWU6IG51bGwsXG4gICAgICAgICAgICAgIHNpemU6IDEwMDAsXG4gICAgICAgICAgICAgIGlzTWFuZGF0b3J5OiB0cnVlLFxuICAgICAgICAgICAgICBvdGhlclZhbHVlOiAnJyxcbiAgICAgICAgICAgICAgdHlwZTogXCJ0ZXh0YXJlYVwiLFxuICAgICAgICAgICAgICBlZGl0YWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgaXNDb25kaXRpb25hbDogZmFsc2UsXG4gICAgICAgICAgICAgIGNvbmRpdGlvblZhbHVlOiBcIlwiLFxuICAgICAgICAgICAgICBjb25kaXRpb25Mb2NhdGlvbjoge30sXG4gICAgICAgICAgICAgIGRlbGV0ZWFibGU6IHRydWUsXG4gICAgICAgICAgICAgIHN1YkxldmVsOiAyLFxuICAgICAgICAgICAgICBleHBhbmRNb3JlOiBmYWxzZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGxhYmVsOiBcIkFqb3V0ZXIgZGVzIGJvaXRlcyBtYWlscyBkw6lsw6lndcOpc1wiLFxuICAgICAgICAgIGtleTogXCJBZGRJbmJveE1haWxEZWxlZ2F0ZVwiLFxuICAgICAgICAgIGV4cGFuZE9uYm9hcmRpbmc6IHRydWUsXG4gICAgICAgICAgZGVmYXVsdFZhbHVlOiBudWxsLFxuICAgICAgICAgIHZhbHVlOiB0cnVlLFxuICAgICAgICAgIHNpemU6IDgwLFxuICAgICAgICAgIGlzTWFuZGF0b3J5OiB0cnVlLFxuICAgICAgICAgIG90aGVyVmFsdWU6ICcnLFxuICAgICAgICAgIHR5cGU6IFwiY2hlY2tib3hcIixcbiAgICAgICAgICBlZGl0YWJsZTogdHJ1ZSxcbiAgICAgICAgICBpc0NvbmRpdGlvbmFsOiBmYWxzZSxcbiAgICAgICAgICBjb25kaXRpb25WYWx1ZTogXCJcIixcbiAgICAgICAgICBjb25kaXRpb25Mb2NhdGlvbjoge30sXG4gICAgICAgICAgZGVsZXRlYWJsZTogdHJ1ZSxcbiAgICAgICAgICBzdWJMZXZlbDogMSxcbiAgICAgICAgICBleHBhbmRNb3JlOiBmYWxzZSxcbiAgICAgICAgICAvKnNlbGVjdG9yOiB7XG4gICAgICAgICAgICBsYWJlbDogXCJDb21wYW55XCIsXG4gICAgICAgICAgICBrZXk6IFwiQ29tcGFueVwiLFxuICAgICAgICAgICAgZGVmYXVsdFZhbHVlOiBbeyB2YWx1ZTogXCJOb3d0ZWFtXCIsIGNoZWNrZWQ6IHRydWUgfSwgeyB2YWx1ZTogXCJJbnRlcm5hbFwiLCBjaGVja2VkOiBmYWxzZSB9XSxcbiAgICAgICAgICAgIHZhbHVlOiBcIk5vd3RlYW1cIlxuICAgICAgICAgIH0sKi9cbiAgICAgICAgICBmb3JtczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBsYWJlbDogXCJEZXNjcmlwdGlvbnNcIixcbiAgICAgICAgICAgICAga2V5OiBcIkRlc2NyaXB0aW9uXCIsXG4gICAgICAgICAgICAgIGV4cGFuZE9uYm9hcmRpbmc6IHRydWUsXG4gICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZTogbnVsbCxcbiAgICAgICAgICAgICAgdmFsdWU6IG51bGwsXG4gICAgICAgICAgICAgIHNpemU6IDEwMDAsXG4gICAgICAgICAgICAgIGlzTWFuZGF0b3J5OiB0cnVlLFxuICAgICAgICAgICAgICBvdGhlclZhbHVlOiAnJyxcbiAgICAgICAgICAgICAgdHlwZTogXCJ0ZXh0YXJlYVwiLFxuICAgICAgICAgICAgICBlZGl0YWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgaXNDb25kaXRpb25hbDogZmFsc2UsXG4gICAgICAgICAgICAgIGNvbmRpdGlvblZhbHVlOiBcIlwiLFxuICAgICAgICAgICAgICBjb25kaXRpb25Mb2NhdGlvbjoge30sXG4gICAgICAgICAgICAgIGRlbGV0ZWFibGU6IHRydWUsXG4gICAgICAgICAgICAgIHN1YkxldmVsOiAyLFxuICAgICAgICAgICAgICBleHBhbmRNb3JlOiBmYWxzZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcIlNlcnZldXJcIixcbiAgICAgIGV4cGFuZE1vcmU6IGZhbHNlLFxuICAgICAgc3VmZml4RW5kcG9pbnQ6IFwiY2F0ZWdvcnkvc2VydmV1clwiLFxuICAgICAgc2VsZWN0ZWQ6IHRydWUsXG4gICAgICBlZGl0YWJsZTogdHJ1ZSxcbiAgICAgIGlzQ29uZGl0aW9uYWw6IGZhbHNlLFxuICAgICAgY29uZGl0aW9uVmFsdWU6IFwiXCIsXG4gICAgICBjb25kaXRpb25Mb2NhdGlvbjoge30sXG4gICAgICBkZWxldGVhYmxlOiB0cnVlLFxuICAgICAgZXhwYW5kT25ib2FyZGluZzogdHJ1ZSxcbiAgICAgIGRlZmF1bHRWYWx1ZTogZmFsc2UsXG4gICAgICBzZWxlY3Rvcjoge1xuICAgICAgICBsYWJlbDogXCJDb21wYW55XCIsXG4gICAgICAgIGtleTogXCJDb21wYW55XCIsXG4gICAgICAgIGRlZmF1bHRWYWx1ZTogW3sgdmFsdWU6IFwiTm93dGVhbVwiLCBjaGVja2VkOiB0cnVlIH0sIHsgdmFsdWU6IFwiSW50ZXJuYWxcIiwgY2hlY2tlZDogZmFsc2UgfV0sXG4gICAgICAgIHZhbHVlOiBcIk5vd3RlYW1cIlxuICAgICAgfSxcbiAgICAgIGZvcm1zOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBsYWJlbDogXCJBY2PDqHMgYXV4IGxlY3RldXJzIHLDqXNlYXV4XCIsXG4gICAgICAgICAga2V5OiBcIlJlYWROZXR3b3JrQWNjZXNzXCIsXG4gICAgICAgICAgZXhwYW5kT25ib2FyZGluZzogdHJ1ZSxcbiAgICAgICAgICBkZWZhdWx0VmFsdWU6IG51bGwsXG4gICAgICAgICAgdmFsdWU6IHRydWUsXG4gICAgICAgICAgc2l6ZTogODAsXG4gICAgICAgICAgaXNNYW5kYXRvcnk6IGZhbHNlLFxuICAgICAgICAgIG90aGVyVmFsdWU6ICcnLFxuICAgICAgICAgIHR5cGU6IFwiY2hlY2tib3hcIixcbiAgICAgICAgICBlZGl0YWJsZTogdHJ1ZSxcbiAgICAgICAgICBpc0NvbmRpdGlvbmFsOiBmYWxzZSxcbiAgICAgICAgICBjb25kaXRpb25WYWx1ZTogXCJcIixcbiAgICAgICAgICBjb25kaXRpb25Mb2NhdGlvbjoge30sXG4gICAgICAgICAgZGVsZXRlYWJsZTogdHJ1ZSxcbiAgICAgICAgICBzdWJMZXZlbDogMSxcbiAgICAgICAgICBleHBhbmRNb3JlOiBmYWxzZSxcbiAgICAgICAgICAvKnNlbGVjdG9yOiB7XG4gICAgICAgICAgICBsYWJlbDogXCJDb21wYW55XCIsXG4gICAgICAgICAgICBrZXk6IFwiQ29tcGFueVwiLFxuICAgICAgICAgICAgZGVmYXVsdFZhbHVlOiBbeyB2YWx1ZTogXCJOb3d0ZWFtXCIsIGNoZWNrZWQ6IHRydWUgfSwgeyB2YWx1ZTogXCJJbnRlcm5hbFwiLCBjaGVja2VkOiBmYWxzZSB9XSxcbiAgICAgICAgICAgIHZhbHVlOiBcIk5vd3RlYW1cIlxuICAgICAgICAgIH0sKi9cbiAgICAgICAgICBmb3JtczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBsYWJlbDogXCJOb20gZHUgc2VydmV1clwiLFxuICAgICAgICAgICAgICBrZXk6IFwiU2VydmVyTmFtZVwiLFxuICAgICAgICAgICAgICBleHBhbmRPbmJvYXJkaW5nOiB0cnVlLFxuICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU6IG51bGwsXG4gICAgICAgICAgICAgIHZhbHVlOiBudWxsLFxuICAgICAgICAgICAgICBzaXplOiA4MCxcbiAgICAgICAgICAgICAgaXNNYW5kYXRvcnk6IHRydWUsXG4gICAgICAgICAgICAgIG90aGVyVmFsdWU6ICcnLFxuICAgICAgICAgICAgICB0eXBlOiBcInRleHRcIixcbiAgICAgICAgICAgICAgZWRpdGFibGU6IHRydWUsXG4gICAgICAgICAgICAgIGlzQ29uZGl0aW9uYWw6IGZhbHNlLFxuICAgICAgICAgICAgICBjb25kaXRpb25WYWx1ZTogXCJcIixcbiAgICAgICAgICAgICAgY29uZGl0aW9uTG9jYXRpb246IHt9LFxuICAgICAgICAgICAgICBkZWxldGVhYmxlOiBmYWxzZSxcbiAgICAgICAgICAgICAgc3ViTGV2ZWw6IDIsXG4gICAgICAgICAgICAgIGV4cGFuZE1vcmU6IGZhbHNlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbGFiZWw6IFwiQ2hlbWluIGR1IGRvc3NpZXJcIixcbiAgICAgICAgICAgICAga2V5OiBcIkZvbGRlclBhdGhcIixcbiAgICAgICAgICAgICAgZXhwYW5kT25ib2FyZGluZzogdHJ1ZSxcbiAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlOiBudWxsLFxuICAgICAgICAgICAgICB2YWx1ZTogbnVsbCxcbiAgICAgICAgICAgICAgc2l6ZTogODAsXG4gICAgICAgICAgICAgIGlzTWFuZGF0b3J5OiB0cnVlLFxuICAgICAgICAgICAgICBvdGhlclZhbHVlOiAnJyxcbiAgICAgICAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgIGVkaXRhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICBpc0NvbmRpdGlvbmFsOiBmYWxzZSxcbiAgICAgICAgICAgICAgY29uZGl0aW9uVmFsdWU6IFwiXCIsXG4gICAgICAgICAgICAgIGNvbmRpdGlvbkxvY2F0aW9uOiB7fSxcbiAgICAgICAgICAgICAgZGVsZXRlYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgc3ViTGV2ZWw6IDIsXG4gICAgICAgICAgICAgIGV4cGFuZE1vcmU6IGZhbHNlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbGFiZWw6IFwiTGV0dHJlIMOgIGF0dHJpYnVlclwiLFxuICAgICAgICAgICAgICBrZXk6IFwiQXR0cmlidXRMZXR0ZXJcIixcbiAgICAgICAgICAgICAgZXhwYW5kT25ib2FyZGluZzogdHJ1ZSxcbiAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlOiBudWxsLFxuICAgICAgICAgICAgICB2YWx1ZTogbnVsbCxcbiAgICAgICAgICAgICAgc2l6ZTogODAsXG4gICAgICAgICAgICAgIGlzTWFuZGF0b3J5OiB0cnVlLFxuICAgICAgICAgICAgICBvdGhlclZhbHVlOiAnJyxcbiAgICAgICAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgIGVkaXRhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICBpc0NvbmRpdGlvbmFsOiBmYWxzZSxcbiAgICAgICAgICAgICAgY29uZGl0aW9uVmFsdWU6IFwiXCIsXG4gICAgICAgICAgICAgIGNvbmRpdGlvbkxvY2F0aW9uOiB7fSxcbiAgICAgICAgICAgICAgZGVsZXRlYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgc3ViTGV2ZWw6IDIsXG4gICAgICAgICAgICAgIGV4cGFuZE1vcmU6IGZhbHNlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwiVlBOXCIsXG4gICAgICBleHBhbmRNb3JlOiBmYWxzZSxcbiAgICAgIHN1ZmZpeEVuZHBvaW50OiBcImNhdGVnb3J5L3ZwblwiLFxuICAgICAgc2VsZWN0ZWQ6IHRydWUsXG4gICAgICBleHBhbmRPbmJvYXJkaW5nOiB0cnVlLFxuICAgICAgZGVmYXVsdFZhbHVlOiBmYWxzZSxcbiAgICAgIGVkaXRhYmxlOiB0cnVlLFxuICAgICAgaXNDb25kaXRpb25hbDogZmFsc2UsXG4gICAgICBjb25kaXRpb25WYWx1ZTogXCJcIixcbiAgICAgIGNvbmRpdGlvbkxvY2F0aW9uOiB7fSxcbiAgICAgIGRlbGV0ZWFibGU6IHRydWUsXG4gICAgICBzZWxlY3Rvcjoge1xuICAgICAgICBsYWJlbDogXCJDb21wYW55XCIsXG4gICAgICAgIGtleTogXCJDb21wYW55XCIsXG4gICAgICAgIGRlZmF1bHRWYWx1ZTogW3sgdmFsdWU6IFwiTm93dGVhbVwiLCBjaGVja2VkOiB0cnVlIH0sIHsgdmFsdWU6IFwiSW50ZXJuYWxcIiwgY2hlY2tlZDogZmFsc2UgfV0sXG4gICAgICAgIHZhbHVlOiBcIk5vd3RlYW1cIlxuICAgICAgfSxcbiAgICAgIGZvcm1zOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBsYWJlbDogXCJBY2PDqHMgYXUgVlBOXCIsXG4gICAgICAgICAga2V5OiBcIlZwbkFjY2Vzc1wiLFxuICAgICAgICAgIGV4cGFuZE9uYm9hcmRpbmc6IHRydWUsXG4gICAgICAgICAgZGVmYXVsdFZhbHVlOiBudWxsLFxuICAgICAgICAgIHZhbHVlOiB0cnVlLFxuICAgICAgICAgIHNpemU6IDgwLFxuICAgICAgICAgIGlzTWFuZGF0b3J5OiBmYWxzZSxcbiAgICAgICAgICBvdGhlclZhbHVlOiAnJyxcbiAgICAgICAgICB0eXBlOiBcImNoZWNrYm94XCIsXG4gICAgICAgICAgZWRpdGFibGU6IHRydWUsXG4gICAgICAgICAgaXNDb25kaXRpb25hbDogZmFsc2UsXG4gICAgICAgICAgY29uZGl0aW9uVmFsdWU6IFwiXCIsXG4gICAgICAgICAgY29uZGl0aW9uTG9jYXRpb246IHt9LFxuICAgICAgICAgIGRlbGV0ZWFibGU6IHRydWUsXG4gICAgICAgICAgc3ViTGV2ZWw6IDEsXG4gICAgICAgICAgZXhwYW5kTW9yZTogZmFsc2UsXG4gICAgICAgICAgLy9mb3JtczogW11cbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcIkltcHJpbWFudGVzXCIsXG4gICAgICBleHBhbmRNb3JlOiBmYWxzZSxcbiAgICAgIHN1ZmZpeEVuZHBvaW50OiBcImNhdGVnb3J5L2ltcHJpbWVudGVcIixcbiAgICAgIHNlbGVjdGVkOiB0cnVlLFxuICAgICAgZWRpdGFibGU6IHRydWUsXG4gICAgICBpc0NvbmRpdGlvbmFsOiBmYWxzZSxcbiAgICAgIGNvbmRpdGlvblZhbHVlOiBcIlwiLFxuICAgICAgY29uZGl0aW9uTG9jYXRpb246IHt9LFxuICAgICAgZGVsZXRlYWJsZTogdHJ1ZSxcbiAgICAgIGV4cGFuZE9uYm9hcmRpbmc6IHRydWUsXG4gICAgICBkZWZhdWx0VmFsdWU6IGZhbHNlLFxuICAgICAgc2VsZWN0b3I6IHtcbiAgICAgICAgbGFiZWw6IFwiQ29tcGFueVwiLFxuICAgICAgICBrZXk6IFwiQ29tcGFueVwiLFxuICAgICAgICBkZWZhdWx0VmFsdWU6IFt7IHZhbHVlOiBcIk5vd3RlYW1cIiwgY2hlY2tlZDogdHJ1ZSB9LCB7IHZhbHVlOiBcIkludGVybmFsXCIsIGNoZWNrZWQ6IGZhbHNlIH1dLFxuICAgICAgICB2YWx1ZTogXCJOb3d0ZWFtXCJcbiAgICAgIH0sXG4gICAgICBmb3JtczogW1xuICAgICAgICB7XG4gICAgICAgICAgbGFiZWw6IFwiQWNjw6hzIGF1eCBpbXByaW1hbnRlc1wiLFxuICAgICAgICAgIGtleTogXCJQcmludGVyQWNjZXNzXCIsXG4gICAgICAgICAgZXhwYW5kT25ib2FyZGluZzogdHJ1ZSxcbiAgICAgICAgICBkZWZhdWx0VmFsdWU6IG51bGwsXG4gICAgICAgICAgdmFsdWU6IHRydWUsXG4gICAgICAgICAgc2l6ZTogODAsXG4gICAgICAgICAgaXNNYW5kYXRvcnk6IGZhbHNlLFxuICAgICAgICAgIG90aGVyVmFsdWU6ICcnLFxuICAgICAgICAgIHR5cGU6IFwiY2hlY2tib3hcIixcbiAgICAgICAgICBlZGl0YWJsZTogdHJ1ZSxcbiAgICAgICAgICBpc0NvbmRpdGlvbmFsOiBmYWxzZSxcbiAgICAgICAgICBjb25kaXRpb25WYWx1ZTogXCJcIixcbiAgICAgICAgICBjb25kaXRpb25Mb2NhdGlvbjoge30sXG4gICAgICAgICAgZGVsZXRlYWJsZTogdHJ1ZSxcbiAgICAgICAgICBzdWJMZXZlbDogMSxcbiAgICAgICAgICBleHBhbmRNb3JlOiBmYWxzZSxcbiAgICAgICAgICAvKnNlbGVjdG9yOiB7XG4gICAgICAgICAgICBsYWJlbDogXCJDb21wYW55XCIsXG4gICAgICAgICAgICBrZXk6IFwiQ29tcGFueVwiLFxuICAgICAgICAgICAgZGVmYXVsdFZhbHVlOiBbeyB2YWx1ZTogXCJOb3d0ZWFtXCIsIGNoZWNrZWQ6IHRydWUgfSwgeyB2YWx1ZTogXCJJbnRlcm5hbFwiLCBjaGVja2VkOiBmYWxzZSB9XSxcbiAgICAgICAgICAgIHZhbHVlOiBcIk5vd3RlYW1cIlxuICAgICAgICAgIH0sKi9cbiAgICAgICAgICBmb3JtczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBsYWJlbDogXCJOb20gLyBNb2TDqGxlIGRlIGwnaW1wcmltYW50ZSAvIGxvY2FsaXNhdGlvblwiLFxuICAgICAgICAgICAgICBrZXk6IFwiUHJpbnRlck5hbWVcIixcbiAgICAgICAgICAgICAgZXhwYW5kT25ib2FyZGluZzogdHJ1ZSxcbiAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlOiBudWxsLFxuICAgICAgICAgICAgICB2YWx1ZTogbnVsbCxcbiAgICAgICAgICAgICAgc2l6ZTogMTAwMCxcbiAgICAgICAgICAgICAgaXNNYW5kYXRvcnk6IHRydWUsXG4gICAgICAgICAgICAgIG90aGVyVmFsdWU6ICcnLFxuICAgICAgICAgICAgICB0eXBlOiBcInRleHRhcmVhXCIsXG4gICAgICAgICAgICAgIGVkaXRhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICBpc0NvbmRpdGlvbmFsOiBmYWxzZSxcbiAgICAgICAgICAgICAgY29uZGl0aW9uVmFsdWU6IFwiXCIsXG4gICAgICAgICAgICAgIGNvbmRpdGlvbkxvY2F0aW9uOiB7fSxcbiAgICAgICAgICAgICAgZGVsZXRlYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgc3ViTGV2ZWw6IDIsXG4gICAgICAgICAgICAgIGV4cGFuZE1vcmU6IGZhbHNlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwiQXBwbGljYXRpb25zXCIsXG4gICAgICBleHBhbmRNb3JlOiBmYWxzZSxcbiAgICAgIHN1ZmZpeEVuZHBvaW50OiBcImNhdGVnb3J5L2FwcGxpY2F0aW9uXCIsXG4gICAgICBzZWxlY3RlZDogdHJ1ZSxcbiAgICAgIGVkaXRhYmxlOiB0cnVlLFxuICAgICAgaXNDb25kaXRpb25hbDogZmFsc2UsXG4gICAgICBjb25kaXRpb25WYWx1ZTogXCJcIixcbiAgICAgIGNvbmRpdGlvbkxvY2F0aW9uOiB7fSxcbiAgICAgIGV4cGFuZE9uYm9hcmRpbmc6IHRydWUsXG4gICAgICBkZWZhdWx0VmFsdWU6IGZhbHNlLFxuICAgICAgZGVsZXRlYWJsZTogdHJ1ZSxcbiAgICAgIHNlbGVjdG9yOiB7XG4gICAgICAgIGxhYmVsOiBcIkNvbXBhbnlcIixcbiAgICAgICAga2V5OiBcIkNvbXBhbnlcIixcbiAgICAgICAgZGVmYXVsdFZhbHVlOiBbeyB2YWx1ZTogXCJOb3d0ZWFtXCIsIGNoZWNrZWQ6IHRydWUgfSwgeyB2YWx1ZTogXCJJbnRlcm5hbFwiLCBjaGVja2VkOiBmYWxzZSB9XSxcbiAgICAgICAgdmFsdWU6IFwiTm93dGVhbVwiXG4gICAgICB9LFxuICAgICAgZm9ybXM6IFtcbiAgICAgICAge1xuICAgICAgICAgIGxhYmVsOiBcIkFjY8OocyBhdXggYXBwbGljYXRpb25zID9cIixcbiAgICAgICAgICBrZXk6IFwiQXBwbGljYXRpb25BY2Nlc3NcIixcbiAgICAgICAgICBleHBhbmRPbmJvYXJkaW5nOiB0cnVlLFxuICAgICAgICAgIGRlZmF1bHRWYWx1ZTogbnVsbCxcbiAgICAgICAgICB2YWx1ZTogdHJ1ZSxcbiAgICAgICAgICBzaXplOiA4MCxcbiAgICAgICAgICBpc01hbmRhdG9yeTogZmFsc2UsXG4gICAgICAgICAgb3RoZXJWYWx1ZTogJycsXG4gICAgICAgICAgdHlwZTogXCJjaGVja2JveFwiLFxuICAgICAgICAgIGVkaXRhYmxlOiB0cnVlLFxuICAgICAgICAgIGlzQ29uZGl0aW9uYWw6IGZhbHNlLFxuICAgICAgICAgIGNvbmRpdGlvblZhbHVlOiBcIlwiLFxuICAgICAgICAgIGNvbmRpdGlvbkxvY2F0aW9uOiB7fSxcbiAgICAgICAgICBkZWxldGVhYmxlOiB0cnVlLFxuICAgICAgICAgIHN1YkxldmVsOiAxLFxuICAgICAgICAgIGV4cGFuZE1vcmU6IGZhbHNlLFxuICAgICAgICAgIC8qc2VsZWN0b3I6IHtcbiAgICAgICAgICAgIGxhYmVsOiBcIkNvbXBhbnlcIixcbiAgICAgICAgICAgIGtleTogXCJDb21wYW55XCIsXG4gICAgICAgICAgICBkZWZhdWx0VmFsdWU6IFt7IHZhbHVlOiBcIk5vd3RlYW1cIiwgY2hlY2tlZDogdHJ1ZSB9LCB7IHZhbHVlOiBcIkludGVybmFsXCIsIGNoZWNrZWQ6IGZhbHNlIH1dLFxuICAgICAgICAgICAgdmFsdWU6IFwiTm93dGVhbVwiXG4gICAgICAgICAgfSwqL1xuICAgICAgICAgIGZvcm1zOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGxhYmVsOiBcIkRlc2NyaXB0aW9uc1wiLFxuICAgICAgICAgICAgICBrZXk6IFwiRGVzY3JpcHRpb25cIixcbiAgICAgICAgICAgICAgZXhwYW5kT25ib2FyZGluZzogdHJ1ZSxcbiAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlOiBudWxsLFxuICAgICAgICAgICAgICB2YWx1ZTogbnVsbCxcbiAgICAgICAgICAgICAgc2l6ZTogMTAwMCxcbiAgICAgICAgICAgICAgaXNNYW5kYXRvcnk6IHRydWUsXG4gICAgICAgICAgICAgIG90aGVyVmFsdWU6ICcnLFxuICAgICAgICAgICAgICB0eXBlOiBcInRleHRhcmVhXCIsXG4gICAgICAgICAgICAgIGVkaXRhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICBpc0NvbmRpdGlvbmFsOiBmYWxzZSxcbiAgICAgICAgICAgICAgY29uZGl0aW9uVmFsdWU6IFwiXCIsXG4gICAgICAgICAgICAgIGNvbmRpdGlvbkxvY2F0aW9uOiB7fSxcbiAgICAgICAgICAgICAgZGVsZXRlYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgc3ViTGV2ZWw6IDIsXG4gICAgICAgICAgICAgIGV4cGFuZE1vcmU6IGZhbHNlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwiUG9zdGVcIixcbiAgICAgIGV4cGFuZE1vcmU6IGZhbHNlLFxuICAgICAgc3VmZml4RW5kcG9pbnQ6IFwiY2F0ZWdvcnkvcG9zdGVcIixcbiAgICAgIHNlbGVjdGVkOiB0cnVlLFxuICAgICAgZXhwYW5kT25ib2FyZGluZzogdHJ1ZSxcbiAgICAgIGRlZmF1bHRWYWx1ZTogZmFsc2UsXG4gICAgICBlZGl0YWJsZTogdHJ1ZSxcbiAgICAgIGlzQ29uZGl0aW9uYWw6IGZhbHNlLFxuICAgICAgY29uZGl0aW9uVmFsdWU6IFwiXCIsXG4gICAgICBjb25kaXRpb25Mb2NhdGlvbjoge30sXG4gICAgICBkZWxldGVhYmxlOiB0cnVlLFxuICAgICAgc2VsZWN0b3I6IHtcbiAgICAgICAgbGFiZWw6IFwiQ29tcGFueVwiLFxuICAgICAgICBrZXk6IFwiQ29tcGFueVwiLFxuICAgICAgICBkZWZhdWx0VmFsdWU6IFt7IHZhbHVlOiBcIk5vd3RlYW1cIiwgY2hlY2tlZDogdHJ1ZSB9LCB7IHZhbHVlOiBcIkludGVybmFsXCIsIGNoZWNrZWQ6IGZhbHNlIH1dLFxuICAgICAgICB2YWx1ZTogXCJOb3d0ZWFtXCJcbiAgICAgIH0sXG4gICAgICBmb3JtczogW1xuICAgICAgICB7XG4gICAgICAgICAgbGFiZWw6IFwiUGFyYW3DqXRyYWdlIGRlIHBvc3RlXCIsXG4gICAgICAgICAga2V5OiBcIlBvc3RQYXJhbWV0ZXJcIixcbiAgICAgICAgICBleHBhbmRPbmJvYXJkaW5nOiB0cnVlLFxuICAgICAgICAgIGRlZmF1bHRWYWx1ZTogbnVsbCxcbiAgICAgICAgICB2YWx1ZTogdHJ1ZSxcbiAgICAgICAgICBzaXplOiA4MCxcbiAgICAgICAgICBpc01hbmRhdG9yeTogZmFsc2UsXG4gICAgICAgICAgb3RoZXJWYWx1ZTogJycsXG4gICAgICAgICAgdHlwZTogXCJjaGVja2JveFwiLFxuICAgICAgICAgIGVkaXRhYmxlOiB0cnVlLFxuICAgICAgICAgIGlzQ29uZGl0aW9uYWw6IGZhbHNlLFxuICAgICAgICAgIGNvbmRpdGlvblZhbHVlOiBcIlwiLFxuICAgICAgICAgIGNvbmRpdGlvbkxvY2F0aW9uOiB7fSxcbiAgICAgICAgICBkZWxldGVhYmxlOiB0cnVlLFxuICAgICAgICAgIHN1YkxldmVsOiAxLFxuICAgICAgICAgIGV4cGFuZE1vcmU6IGZhbHNlLFxuICAgICAgICAgIC8qc2VsZWN0b3I6IHtcbiAgICAgICAgICAgIGxhYmVsOiBcIkNvbXBhbnlcIixcbiAgICAgICAgICAgIGtleTogXCJDb21wYW55XCIsXG4gICAgICAgICAgICBkZWZhdWx0VmFsdWU6IFt7IHZhbHVlOiBcIk5vd3RlYW1cIiwgY2hlY2tlZDogdHJ1ZSB9LCB7IHZhbHVlOiBcIkludGVybmFsXCIsIGNoZWNrZWQ6IGZhbHNlIH1dLFxuICAgICAgICAgICAgdmFsdWU6IFwiTm93dGVhbVwiXG4gICAgICAgICAgfSwqL1xuICAgICAgICAgIGZvcm1zOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGxhYmVsOiBcIlJlYWxvY2F0ZWRFcXVpcG1lbnRcIixcbiAgICAgICAgICAgICAga2V5OiBcIlwiLFxuICAgICAgICAgICAgICBleHBhbmRPbmJvYXJkaW5nOiB0cnVlLFxuICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU6IG51bGwsXG4gICAgICAgICAgICAgIHZhbHVlOiBudWxsLFxuICAgICAgICAgICAgICBzaXplOiAxMDAwLFxuICAgICAgICAgICAgICBpc01hbmRhdG9yeTogdHJ1ZSxcbiAgICAgICAgICAgICAgb3RoZXJWYWx1ZTogJycsXG4gICAgICAgICAgICAgIHR5cGU6IFwidGV4dGFyZWFcIixcbiAgICAgICAgICAgICAgZWRpdGFibGU6IHRydWUsXG4gICAgICAgICAgICAgIGlzQ29uZGl0aW9uYWw6IGZhbHNlLFxuICAgICAgICAgICAgICBjb25kaXRpb25WYWx1ZTogXCJcIixcbiAgICAgICAgICAgICAgY29uZGl0aW9uTG9jYXRpb246IHt9LFxuICAgICAgICAgICAgICBkZWxldGVhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICBzdWJMZXZlbDogMixcbiAgICAgICAgICAgICAgZXhwYW5kTW9yZTogZmFsc2UsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBsYWJlbDogXCJOb3V2ZWF1IHBvc3RlXCIsXG4gICAgICAgICAgICAgIGtleTogXCJOZXdQb3N0XCIsXG4gICAgICAgICAgICAgIGV4cGFuZE9uYm9hcmRpbmc6IHRydWUsXG4gICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZTogbnVsbCxcbiAgICAgICAgICAgICAgdmFsdWU6IHRydWUsXG4gICAgICAgICAgICAgIHNpemU6IDgwLFxuICAgICAgICAgICAgICBpc01hbmRhdG9yeTogdHJ1ZSxcbiAgICAgICAgICAgICAgb3RoZXJWYWx1ZTogJycsXG4gICAgICAgICAgICAgIHR5cGU6IFwiY2hlY2tib3hcIixcbiAgICAgICAgICAgICAgZWRpdGFibGU6IHRydWUsXG4gICAgICAgICAgICAgIGlzQ29uZGl0aW9uYWw6IGZhbHNlLFxuICAgICAgICAgICAgICBjb25kaXRpb25WYWx1ZTogXCJcIixcbiAgICAgICAgICAgICAgY29uZGl0aW9uTG9jYXRpb246IHt9LFxuICAgICAgICAgICAgICBkZWxldGVhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICBzdWJMZXZlbDogMixcbiAgICAgICAgICAgICAgZXhwYW5kTW9yZTogZmFsc2UsXG4gICAgICAgICAgICAgIGZvcm1zOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiQWNoZXTDqSBjaGV6IE5vd3RlYW1cIixcbiAgICAgICAgICAgICAgICAgIGtleTogXCJQdXJjaGFzZWRBdE5vd3RlYW1cIixcbiAgICAgICAgICAgICAgICAgIGV4cGFuZE9uYm9hcmRpbmc6IHRydWUsXG4gICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU6IG51bGwsXG4gICAgICAgICAgICAgICAgICB2YWx1ZTogbnVsbCxcbiAgICAgICAgICAgICAgICAgIHNpemU6IDEwMDAsXG4gICAgICAgICAgICAgICAgICBpc01hbmRhdG9yeTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgIG90aGVyVmFsdWU6ICcnLFxuICAgICAgICAgICAgICAgICAgdHlwZTogXCJ0ZXh0YXJlYVwiLFxuICAgICAgICAgICAgICAgICAgZWRpdGFibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICBpc0NvbmRpdGlvbmFsOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgIGNvbmRpdGlvblZhbHVlOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgY29uZGl0aW9uTG9jYXRpb246IHt9LFxuICAgICAgICAgICAgICAgICAgZGVsZXRlYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgIHN1YkxldmVsOiAzLFxuICAgICAgICAgICAgICAgICAgZXhwYW5kTW9yZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBsYWJlbDogXCJBdXRyZVwiLFxuICAgICAgICAgICAgICAgICAga2V5OiBcIk90aGVyXCIsXG4gICAgICAgICAgICAgICAgICBleHBhbmRPbmJvYXJkaW5nOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlOiBudWxsLFxuICAgICAgICAgICAgICAgICAgdmFsdWU6IG51bGwsXG4gICAgICAgICAgICAgICAgICBzaXplOiAxMDAwLFxuICAgICAgICAgICAgICAgICAgaXNNYW5kYXRvcnk6IHRydWUsXG4gICAgICAgICAgICAgICAgICBvdGhlclZhbHVlOiAnJyxcbiAgICAgICAgICAgICAgICAgIHR5cGU6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgZWRpdGFibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICBpc0NvbmRpdGlvbmFsOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgIGNvbmRpdGlvblZhbHVlOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgY29uZGl0aW9uTG9jYXRpb246IHt9LFxuICAgICAgICAgICAgICAgICAgZGVsZXRlYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgIHN1YkxldmVsOiAzLFxuICAgICAgICAgICAgICAgICAgZXhwYW5kTW9yZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcIkF1dHJlc1wiLFxuICAgICAgZXhwYW5kTW9yZTogZmFsc2UsXG4gICAgICBzdWZmaXhFbmRwb2ludDogXCJjYXRlZ29yeS9hdXRyZXNcIixcbiAgICAgIHNlbGVjdGVkOiB0cnVlLFxuICAgICAgZWRpdGFibGU6IHRydWUsXG4gICAgICBpc0NvbmRpdGlvbmFsOiBmYWxzZSxcbiAgICAgIGNvbmRpdGlvblZhbHVlOiBcIlwiLFxuICAgICAgY29uZGl0aW9uTG9jYXRpb246IHt9LFxuICAgICAgZXhwYW5kT25ib2FyZGluZzogdHJ1ZSxcbiAgICAgIGRlZmF1bHRWYWx1ZTogZmFsc2UsXG4gICAgICBkZWxldGVhYmxlOiB0cnVlLFxuICAgICAgc2VsZWN0b3I6IHtcbiAgICAgICAgbGFiZWw6IFwiQ29tcGFueVwiLFxuICAgICAgICBrZXk6IFwiQ29tcGFueVwiLFxuICAgICAgICBkZWZhdWx0VmFsdWU6IFt7IHZhbHVlOiBcIk5vd3RlYW1cIiwgY2hlY2tlZDogdHJ1ZSB9LCB7IHZhbHVlOiBcIkludGVybmFsXCIsIGNoZWNrZWQ6IGZhbHNlIH1dLFxuICAgICAgICB2YWx1ZTogXCJOb3d0ZWFtXCJcbiAgICAgIH0sXG4gICAgICBmb3JtczogW1xuICAgICAgICB7XG4gICAgICAgICAgbGFiZWw6IFwiRGVzY3JpcHRpb25zXCIsXG4gICAgICAgICAga2V5OiBcIkRlc2NyaXB0aW9uXCIsXG4gICAgICAgICAgZXhwYW5kT25ib2FyZGluZzogdHJ1ZSxcbiAgICAgICAgICBkZWZhdWx0VmFsdWU6IG51bGwsXG4gICAgICAgICAgdmFsdWU6IG51bGwsXG4gICAgICAgICAgc2l6ZTogMTAwMCxcbiAgICAgICAgICBpc01hbmRhdG9yeTogZmFsc2UsXG4gICAgICAgICAgb3RoZXJWYWx1ZTogJycsXG4gICAgICAgICAgdHlwZTogXCJ0ZXh0YXJlYVwiLFxuICAgICAgICAgIGVkaXRhYmxlOiB0cnVlLFxuICAgICAgICAgIGlzQ29uZGl0aW9uYWw6IGZhbHNlLFxuICAgICAgICAgIGNvbmRpdGlvblZhbHVlOiBcIlwiLFxuICAgICAgICAgIGNvbmRpdGlvbkxvY2F0aW9uOiB7fSxcbiAgICAgICAgICBkZWxldGVhYmxlOiB0cnVlLFxuICAgICAgICAgIHN1YkxldmVsOiAxLFxuICAgICAgICAgIGV4cGFuZE1vcmU6IGZhbHNlLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9LFxuICBdO1xuXG4gIGNhbkRlYWN0aXZhdGUoKSB7XG4gICAgaWYgKCF0aGlzLmNhbkV4aXQpIHtcbiAgICAgIHRoaXMuZGlhbG9nLm9wZW4oRXhpdENvbmZpcm1Db21wb25lbnQsIHtcbiAgICAgICAgZGF0YTogJydcbiAgICAgIH0pXG4gICAgICByZXR1cm4gdGhpcy5zZXJ2aWNlLmNhbkV4aXQkXG4gICAgfVxuICAgIHJldHVybiB0cnVlXG4gIH1cblxuICBhc3luYyBuZ09uSW5pdCgpIHtcblxuICAgIHRoaXMuaWQgPSB0aGlzLnJvdXRlLnNuYXBzaG90LnBhcmFtTWFwLmdldChcImlkXCIpO1xuICAgIHRoaXMuZm9ybSA9IHRoaXMuZmIuZ3JvdXAoe1xuICAgICAgTmFtZTogW1wiXCIsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgICAgUGljdG86IFtcIlwiXSxcbiAgICAgIERlc2NyaXB0aW9uOiBbXCJcIl0sXG4gICAgICBUYWdzOiBbXCJcIiwgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgICBTdGF0dXM6IFtmYWxzZSwgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgfSk7XG4gICAgdGhpcy5mb3JtLnZhbHVlQ2hhbmdlcy5zdWJzY3JpYmUoYyA9PiB7XG4gICAgICB0aGlzLmNhbkV4aXQgPSBmYWxzZTtcbiAgICB9KTtcblxuICAgIGlmICh0aGlzLmlkICE9PSBcIjBcIikge1xuICAgICAgc2V0VGltZW91dChhc3luYyAoKSA9PiB7XG4gICAgICAgIHRoaXMuY3VycmVudFByb2ZpbCA9IGF3YWl0IHRoaXMuc2VydmljZS5nZXRQcm9maWwodGhpcy5pZCk7XG4gICAgICAgIHRoaXMuZm9ybS5wYXRjaFZhbHVlKHRoaXMuY3VycmVudFByb2ZpbCk7XG4gICAgICAgIHRoaXMuY2F0ZWdvcmllcyA9IHRoaXMuY3VycmVudFByb2ZpbC5jYXRlZ29yaWVzO1xuICAgICAgfSwgNTAwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zaG93UHJvZmlsZU5hbWUgPSB0cnVlO1xuICAgICAgdGhpcy5jYXRlZ29yaWVzID0gdGhpcy5kZWZhdWx0Q2F0ZWdvcmllXG4gICAgfVxuICAgIHNldFRpbWVvdXQoYXN5bmMgKCkgPT4ge1xuICAgICAgdGhpcy50YWdzID0gYXdhaXQgdGhpcy5zZXJ2aWNlLmdldEFsbFRhZ3MoKTtcbiAgICB9LCA1MDApO1xuICB9XG5cbiAgb25BZGROZXdDYXRlZ29yeShlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMuY2FuRXhpdCA9IGZhbHNlO1xuICAgIHRoaXMuY2F0ZWdvcmllcy5wdXNoKHtcbiAgICAgIG5hbWU6IFwiXCIsXG4gICAgICBlZGl0YWJsZTogdHJ1ZSxcbiAgICAgIGlzQ29uZGl0aW9uYWw6IGZhbHNlLFxuICAgICAgY29uZGl0aW9uVmFsdWU6IFwiXCIsXG4gICAgICBjb25kaXRpb25Mb2NhdGlvbjoge30sXG4gICAgICBleHBhbmRPbmJvYXJkaW5nOiB0cnVlLFxuICAgICAgZGVsZXRlYWJsZTogdHJ1ZSxcbiAgICAgIGV4cGFuZE1vcmU6IHRydWUsXG4gICAgICBzdWZmaXhFbmRwb2ludDogXCJcIixcbiAgICAgIHNlbGVjdG9yOiB7XG4gICAgICAgIGxhYmVsOiBcIkNvbXBhbnlcIixcbiAgICAgICAga2V5OiBcIkNvbXBhbnlcIixcbiAgICAgICAgZGVmYXVsdFZhbHVlOiBbeyB2YWx1ZTogXCJOb3d0ZWFtXCIsIGNoZWNrZWQ6IHRydWUgfSwgeyB2YWx1ZTogXCJJbnRlcm5hbFwiLCBjaGVja2VkOiBmYWxzZSB9XSxcbiAgICAgICAgdmFsdWU6IFwiTm93dGVhbVwiXG4gICAgICB9LFxuICAgICAgZm9ybXM6IFtcbiAgICAgICAge1xuICAgICAgICAgIGxhYmVsOiBcIlwiLFxuICAgICAgICAgIGtleTogXCJcIixcbiAgICAgICAgICBleHBhbmRPbmJvYXJkaW5nOiB0cnVlLFxuICAgICAgICAgIGRlZmF1bHRWYWx1ZTogbnVsbCxcbiAgICAgICAgICB2YWx1ZTogbnVsbCxcbiAgICAgICAgICBzaXplOiA4MCxcbiAgICAgICAgICBpc01hbmRhdG9yeTogdHJ1ZSxcbiAgICAgICAgICBvdGhlclZhbHVlOiAnJyxcbiAgICAgICAgICB0eXBlOiBcInRleHRcIixcbiAgICAgICAgICBkZWxldGVhYmxlOiB0cnVlLFxuICAgICAgICAgIGVkaXRhYmxlOiB0cnVlLFxuICAgICAgICAgIGlzQ29uZGl0aW9uYWw6IGZhbHNlLFxuICAgICAgICAgIGNvbmRpdGlvblZhbHVlOiBcIlwiLFxuICAgICAgICAgIGNvbmRpdGlvbkxvY2F0aW9uOiB7fSxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfSk7XG4gICAgY29uc29sZS5sb2codGhpcy5jYXRlZ29yaWVzKTtcbiAgfVxuXG4gIG9uQWRkTmV3RmllbGQoLi4ucGFyYW1zKSB7XG4gICAgdGhpcy5jYW5FeGl0ID0gZmFsc2U7XG4gICAgY29uc3QgbGVuZ3RoID0gcGFyYW1zLmxlbmd0aDtcbiAgICBjb25zdCBmb3JtcyA9IGxlbmd0aCA9PT0gMSA/IHRoaXMuY2F0ZWdvcmllc1twYXJhbXNbMF1dLmZvcm1zIDogbGVuZ3RoID09PSAyID8gdGhpcy5jYXRlZ29yaWVzW3BhcmFtc1swXV0uZm9ybXNbcGFyYW1zWzFdXS5mb3JtcyA6IHRoaXMuY2F0ZWdvcmllc1twYXJhbXNbMF1dLmZvcm1zW3BhcmFtc1sxXV0uZm9ybXNbcGFyYW1zWzJdXS5mb3JtcztcbiAgICBmb3Jtcy5wdXNoKHtcbiAgICAgIGxhYmVsOiBcIlwiLFxuICAgICAga2V5OiBcIlwiLFxuICAgICAgZXhwYW5kT25ib2FyZGluZzogdHJ1ZSxcbiAgICAgIGRlZmF1bHRWYWx1ZTogbnVsbCxcbiAgICAgIHZhbHVlOiBudWxsLFxuICAgICAgc2l6ZTogODAsXG4gICAgICBpc01hbmRhdG9yeTogdHJ1ZSxcbiAgICAgIG90aGVyVmFsdWU6ICcnLFxuICAgICAgdHlwZTogXCJ0ZXh0XCIsXG4gICAgICBkZWxldGVhYmxlOiB0cnVlLFxuICAgICAgZWRpdGFibGU6IHRydWUsXG4gICAgICBpc0NvbmRpdGlvbmFsOiBmYWxzZSxcbiAgICAgIGNvbmRpdGlvblZhbHVlOiBcIlwiLFxuICAgICAgY29uZGl0aW9uTG9jYXRpb246IHt9LFxuICAgICAgc3ViTGV2ZWw6IHBhcmFtcy5sZW5ndGgsXG4gICAgICAvL2Zvcm1zOiBbXVxuICAgIH0pO1xuICB9XG5cbiAgb25BZGROZXdTdWJMZXZlbEZpZWxkKC4uLnBhcmFtcykge1xuICAgIHRoaXMuY2FuRXhpdCA9IGZhbHNlO1xuICAgIGNvbnN0IGxlbmd0aCA9IHBhcmFtcy5sZW5ndGg7XG4gICAgY29uc3QgZm9ybXMgPSBsZW5ndGggPT09IDIgPyB0aGlzLmNhdGVnb3JpZXNbcGFyYW1zWzBdXS5mb3Jtc1twYXJhbXNbbGVuZ3RoIC0gMV1dIDogbGVuZ3RoID09PSAzID8gdGhpcy5jYXRlZ29yaWVzW3BhcmFtc1swXV0uZm9ybXNbcGFyYW1zWzFdXS5mb3Jtc1twYXJhbXNbbGVuZ3RoIC0gMV1dIDogdGhpcy5jYXRlZ29yaWVzW3BhcmFtc1swXV0uZm9ybXNbcGFyYW1zWzFdXS5mb3Jtc1twYXJhbXNbMl1dLmZvcm1zW3BhcmFtc1tsZW5ndGggLSAxXV07XG4gICAgZm9ybXMuZXhwYW5kTW9yZSA9IHRydWU7XG4gICAgZm9ybXMuZm9ybXMgPSBbXTtcbiAgICBmb3Jtcy5mb3Jtcy5wdXNoKHtcbiAgICAgIGxhYmVsOiBcIlwiLFxuICAgICAga2V5OiBcIlwiLFxuICAgICAgZXhwYW5kT25ib2FyZGluZzogdHJ1ZSxcbiAgICAgIGRlZmF1bHRWYWx1ZTogbnVsbCxcbiAgICAgIHZhbHVlOiBudWxsLFxuICAgICAgc2l6ZTogODAsXG4gICAgICBpc01hbmRhdG9yeTogdHJ1ZSxcbiAgICAgIG90aGVyVmFsdWU6ICcnLFxuICAgICAgdHlwZTogXCJ0ZXh0XCIsXG4gICAgICBkZWxldGVhYmxlOiB0cnVlLFxuICAgICAgZWRpdGFibGU6IHRydWUsXG4gICAgICBpc0NvbmRpdGlvbmFsOiBmYWxzZSxcbiAgICAgIGNvbmRpdGlvblZhbHVlOiBcIlwiLFxuICAgICAgY29uZGl0aW9uTG9jYXRpb246IHt9LFxuICAgICAgc3ViTGV2ZWw6IHBhcmFtcy5sZW5ndGgsXG4gICAgICBleHBhbmRNb3JlOiB0cnVlLFxuICAgICAgLy9mb3JtczogW11cbiAgICB9KTtcbiAgfVxuXG4gIG9uUmVtb3ZlRmllbGQoLi4ucGFyYW1zKSB7XG4gICAgdGhpcy5jYW5FeGl0ID0gZmFsc2U7XG4gICAgY29uc3QgbGVuZ3RoID0gcGFyYW1zLmxlbmd0aDtcbiAgICBjb25zdCBmb3JtcyA9IGxlbmd0aCA9PT0gMiA/IHRoaXMuY2F0ZWdvcmllc1twYXJhbXNbMF1dLmZvcm1zIDogbGVuZ3RoID09PSAzID8gdGhpcy5jYXRlZ29yaWVzW3BhcmFtc1swXV0uZm9ybXNbcGFyYW1zWzFdXS5mb3JtcyA6IHRoaXMuY2F0ZWdvcmllc1twYXJhbXNbMF1dLmZvcm1zW3BhcmFtc1sxXV0uZm9ybXNbcGFyYW1zWzJdXS5mb3JtcztcbiAgICBmb3Jtcy5zcGxpY2UocGFyYW1zW2xlbmd0aCAtIDFdLCAxKTtcbiAgfVxuXG4gIG9uUmVtb3ZlQ2F0ZWdvcnkoZSwgaSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLmNhdGVnb3JpZXMuc3BsaWNlKGksIDEpO1xuICAgIHRoaXMuY2FuRXhpdCA9IGZhbHNlO1xuICB9XG5cbiAgb25DaGFuZ2VDYXRlZ29yeSgpIHtcbiAgICByZXR1cm4gdGhpcy5jYXRlZ29yaWVzLmV2ZXJ5KChjYXQpID0+IGNhdC5uYW1lICE9PSBcIlwiICYmIGNhdC5mb3Jtcy5ldmVyeSgoZmllbGQpID0+IGZpZWxkLmxhYmVsICE9PSBcIlwiICYmIGZpZWxkLnR5cGUgIT09IFwiXCIpKTtcbiAgfVxuXG4gIGFzeW5jIG9uU3VibWl0KCkge1xuICAgIGlmICh0aGlzLmZvcm0udmFsaWQgJiYgdGhpcy5vbkNoYW5nZUNhdGVnb3J5KCkpIHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9XG4gICAgICAgIHRoaXMuaWQgIT09IFwiMFwiXG4gICAgICAgICAgPyBhd2FpdCB0aGlzLnNlcnZpY2UudXBkYXRlUHJvZmlsKHtcbiAgICAgICAgICAgIC4uLnRoaXMuY3VycmVudFByb2ZpbCxcbiAgICAgICAgICAgIC4uLnRoaXMuZm9ybS52YWx1ZSxcbiAgICAgICAgICAgIGNhdGVnb3JpZXM6ICB0aGlzLmNhdGVnb3JpZXMsXG4gICAgICAgICAgfSlcbiAgICAgICAgICA6IGF3YWl0IHRoaXMuc2VydmljZS5jcmVhdGVQcm9maWwoe1xuICAgICAgICAgICAgLi4udGhpcy5mb3JtLnZhbHVlLFxuICAgICAgICAgICAgY2F0ZWdvcmllczogIHRoaXMuY2F0ZWdvcmllcyxcbiAgICAgICAgICB9KTtcbiAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgYXdhaXQgdGhpcy5zZXJ2aWNlLmdldEFsbFByb2ZpbCgpO1xuICAgICAgICB0aGlzLmNhbkV4aXQgPSB0cnVlO1xuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbdGhpcy5zZXJ2aWNlLm1haW5QYXRoKycvdGVtcGxhdGUnXSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmxvZyhcImVycnJvci4uLi4uLlwiKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBvbkNoYW5nZVR5cGUodHlwZTogc3RyaW5nLCAuLi5wYXJhbXMpIHtcblxuICAgIHRoaXMuY2FuRXhpdCA9IGZhbHNlO1xuICAgIGNvbnN0IGxlbmd0aCA9IHBhcmFtcy5sZW5ndGg7XG4gICAgY29uc3QgZm9ybXMgPSBsZW5ndGggPT09IDIgPyB0aGlzLmNhdGVnb3JpZXNbcGFyYW1zWzBdXS5mb3JtcyA6IGxlbmd0aCA9PT0gMyA/IHRoaXMuY2F0ZWdvcmllc1twYXJhbXNbMF1dLmZvcm1zW3BhcmFtc1sxXV0uZm9ybXMgOiB0aGlzLmNhdGVnb3JpZXNbcGFyYW1zWzBdXS5mb3Jtc1twYXJhbXNbMV1dLmZvcm1zW3BhcmFtc1syXV0uZm9ybXM7XG4gICAgaWYgKHR5cGUgPT09IFwic2VsZWN0XCIgfHwgdHlwZSA9PT0gXCJyYWRpb1wiIHx8IHR5cGUgPT09IFwiY2hlY2tib3hfbXVsdGlwbGVcIikge1xuICAgICAgZm9ybXNbcGFyYW1zW2xlbmd0aCAtIDFdXS5kZWZhdWx0VmFsdWUgPSBbXTtcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09IFwiY2hlY2tib3hcIikge1xuICAgICAgZm9ybXNbcGFyYW1zW2xlbmd0aCAtIDFdXS5kZWZhdWx0VmFsdWUgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBmb3Jtc1twYXJhbXNbbGVuZ3RoIC0gMV1dLmRlZmF1bHRWYWx1ZSA9IFwiXCI7XG4gICAgfVxuICB9XG5cbiAgb25LZXlQcmVzcyhldmVudDogYW55LCAuLi5wYXJhbXMpIHtcbiAgICB0aGlzLmNhbkV4aXQgPSBmYWxzZTtcbiAgICBjb25zdCBsZW5ndGggPSBwYXJhbXMubGVuZ3RoO1xuICAgIGNvbnN0IGZvcm1zID0gbGVuZ3RoID09PSAyID8gdGhpcy5jYXRlZ29yaWVzW3BhcmFtc1swXV0uZm9ybXNbcGFyYW1zW2xlbmd0aCAtIDFdXSA6IGxlbmd0aCA9PT0gMyA/IHRoaXMuY2F0ZWdvcmllc1twYXJhbXNbMF1dLmZvcm1zW3BhcmFtc1sxXV0uZm9ybXNbcGFyYW1zW2xlbmd0aCAtIDFdXSA6IHRoaXMuY2F0ZWdvcmllc1twYXJhbXNbMF1dLmZvcm1zW3BhcmFtc1sxXV0uZm9ybXNbcGFyYW1zWzJdXS5mb3Jtc1twYXJhbXNbbGVuZ3RoIC0gMV1dO1xuICAgIGlmIChldmVudC5rZXkgPT09IFwiO1wiKSB7XG4gICAgICBjb25zdCBleGlzdCA9IGZvcm1zLmRlZmF1bHRWYWx1ZS5maW5kKChvcHQpID0+IG9wdC52YWx1ZS50b0xvY2FsZUxvd2VyQ2FzZSgpID09PSBldmVudC50YXJnZXQudmFsdWUuc3BsaXQoXCI7XCIpWzBdLnRvTG9jYWxlTG93ZXJDYXNlKCkpO1xuICAgICAgaWYgKCFleGlzdCkge1xuICAgICAgICBmb3Jtcy5kZWZhdWx0VmFsdWUucHVzaCh7XG4gICAgICAgICAgdmFsdWU6IGV2ZW50LnRhcmdldC52YWx1ZS5zcGxpdChcIjtcIilbMF0sXG4gICAgICAgICAgY2hlY2tlZDogZmFsc2VcbiAgICAgICAgfSk7XG4gICAgICAgIGV2ZW50LnRhcmdldC52YWx1ZSA9IFwiXCI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBldmVudC50YXJnZXQudmFsdWUgPSBcIlwiO1xuICAgICAgfVxuICAgIH1cbiAgICAvLyB0aGlzLmdldENvbmRpdGlvblZhbHVlcygpXG4gIH1cblxuICByZW1vdmVLZXl3b3JkKGtleXdvcmQ6IGFueSwgLi4ucGFyYW1zKSB7XG4gICAgdGhpcy5jYW5FeGl0ID0gZmFsc2U7XG4gICAgY29uc3QgbGVuZ3RoID0gcGFyYW1zLmxlbmd0aDtcbiAgICBjb25zdCBmb3JtcyA9IGxlbmd0aCA9PT0gMiA/IHRoaXMuY2F0ZWdvcmllc1twYXJhbXNbMF1dLmZvcm1zW3BhcmFtc1tsZW5ndGggLSAxXV0gOiBsZW5ndGggPT09IDMgPyB0aGlzLmNhdGVnb3JpZXNbcGFyYW1zWzBdXS5mb3Jtc1twYXJhbXNbMV1dLmZvcm1zW3BhcmFtc1tsZW5ndGggLSAxXV0gOiB0aGlzLmNhdGVnb3JpZXNbcGFyYW1zWzBdXS5mb3Jtc1twYXJhbXNbMV1dLmZvcm1zW3BhcmFtc1syXV0uZm9ybXNbcGFyYW1zW2xlbmd0aCAtIDFdXTtcbiAgICBmb3Jtcy5kZWZhdWx0VmFsdWUgPSBmb3Jtcy5kZWZhdWx0VmFsdWUuZmlsdGVyKChvcHRpb24pID0+IG9wdGlvbi52YWx1ZSAhPT0ga2V5d29yZC52YWx1ZSk7XG4gICAgLy8gdGhpcy5nZXRDb25kaXRpb25WYWx1ZXMoKVxuICB9XG5cbiAgb25FeHBlbmRNb3JlKGV2ZW50LCAuLi5wYXJhbXMpIHtcbiAgICBpZiAoZXZlbnQpIHtcbiAgICAgIGlmIChldmVudC5ldmVudCkge1xuICAgICAgICBldmVudC5ldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgfVxuICAgICAgaWYgKGV2ZW50LmZpZWxkICYmICFldmVudC5maWVsZC5leHBhbmRNb3JlKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jYXRlZ29yaWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgdGhpcy5jYXRlZ29yaWVzW2ldLmV4cGFuZE1vcmUgPSBmYWxzZTtcbiAgICAgICAgICBpZiAodGhpcy5jYXRlZ29yaWVzW2ldLmZvcm1zKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMuY2F0ZWdvcmllc1tpXS5mb3Jtcy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICB0aGlzLmNhdGVnb3JpZXNbaV0uZm9ybXNbal0uZXhwYW5kTW9yZSA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgfVxuICAgIGlmIChwYXJhbXMubGVuZ3RoID09PSAxKSB7XG4gICAgICB0aGlzLmNhdGVnb3JpZXNbcGFyYW1zWzBdXS5leHBhbmRNb3JlID0gIXRoaXMuY2F0ZWdvcmllc1twYXJhbXNbMF1dLmV4cGFuZE1vcmU7XG4gICAgfSBlbHNlIGlmIChwYXJhbXMubGVuZ3RoID09PSAyKSB7XG4gICAgICBpZiAodGhpcy5jYXRlZ29yaWVzW3BhcmFtc1swXV0uZm9ybXNbcGFyYW1zWzFdXS5leHBhbmRNb3JlKSB7XG4gICAgICAgIHRoaXMuY2F0ZWdvcmllc1twYXJhbXNbMF1dLmZvcm1zW3BhcmFtc1sxXV0uZXhwYW5kTW9yZSA9IGZhbHNlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jYXRlZ29yaWVzW3BhcmFtc1swXV0uZXhwYW5kTW9yZSA9IHRydWU7XG4gICAgICAgIHRoaXMuY2F0ZWdvcmllc1twYXJhbXNbMF1dLmZvcm1zW3BhcmFtc1sxXV0uZXhwYW5kTW9yZSA9IHRydWU7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChwYXJhbXMubGVuZ3RoID09PSAzKSB7XG4gICAgICBpZiAodGhpcy5jYXRlZ29yaWVzW3BhcmFtc1swXV0uZm9ybXNbcGFyYW1zWzFdXS5mb3Jtc1twYXJhbXNbMl1dLmV4cGFuZE1vcmUpIHtcbiAgICAgICAgdGhpcy5jYXRlZ29yaWVzW3BhcmFtc1swXV0uZm9ybXNbcGFyYW1zWzFdXS5mb3Jtc1twYXJhbXNbMl1dLmV4cGFuZE1vcmUgPSBmYWxzZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY2F0ZWdvcmllc1twYXJhbXNbMF1dLmV4cGFuZE1vcmUgPSB0cnVlO1xuICAgICAgICB0aGlzLmNhdGVnb3JpZXNbcGFyYW1zWzBdXS5mb3Jtc1twYXJhbXNbMV1dLmV4cGFuZE1vcmUgPSB0cnVlO1xuICAgICAgICB0aGlzLmNhdGVnb3JpZXNbcGFyYW1zWzBdXS5mb3Jtc1twYXJhbXNbMV1dLmZvcm1zW3BhcmFtc1syXV0uZXhwYW5kTW9yZSA9IHRydWU7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0aGlzLmNhdGVnb3JpZXNbcGFyYW1zWzBdXS5mb3Jtc1twYXJhbXNbMV1dLmZvcm1zW3BhcmFtc1syXV0uZm9ybXNbcGFyYW1zWzNdXS5leHBhbmRNb3JlKSB7XG4gICAgICAgIHRoaXMuY2F0ZWdvcmllc1twYXJhbXNbMF1dLmZvcm1zW3BhcmFtc1sxXV0uZm9ybXNbcGFyYW1zWzJdXS5mb3Jtc1twYXJhbXNbM11dLmV4cGFuZE1vcmUgPSBmYWxzZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY2F0ZWdvcmllc1twYXJhbXNbMF1dLmV4cGFuZE1vcmUgPSB0cnVlO1xuICAgICAgICB0aGlzLmNhdGVnb3JpZXNbcGFyYW1zWzBdXS5mb3Jtc1twYXJhbXNbMV1dLmV4cGFuZE1vcmUgPSB0cnVlO1xuICAgICAgICB0aGlzLmNhdGVnb3JpZXNbcGFyYW1zWzBdXS5mb3Jtc1twYXJhbXNbMV1dLmZvcm1zW3BhcmFtc1syXV0uZXhwYW5kTW9yZSA9IHRydWU7XG4gICAgICAgIHRoaXMuY2F0ZWdvcmllc1twYXJhbXNbMF1dLmZvcm1zW3BhcmFtc1sxXV0uZm9ybXNbcGFyYW1zWzJdXS5mb3Jtc1twYXJhbXNbM11dLmV4cGFuZE1vcmUgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG9uQ2hlY2tlZERlZmF1bHQoZXZlbnQsIC4uLnBhcmFtcykge1xuICAgIGlmIChwYXJhbXMubGVuZ3RoID09PSAxKSB7XG4gICAgICB0aGlzLmNhdGVnb3JpZXNbcGFyYW1zWzBdXS5kZWZhdWx0VmFsdWUgPSBldmVudDtcbiAgICB9IGVsc2UgaWYgKHBhcmFtcy5sZW5ndGggPT09IDIpIHtcbiAgICAgIHRoaXMuY2F0ZWdvcmllc1twYXJhbXNbMF1dLmRlZmF1bHRWYWx1ZSA9IGV2ZW50O1xuICAgICAgdGhpcy5jYXRlZ29yaWVzW3BhcmFtc1swXV0uZm9ybXNbcGFyYW1zWzFdXS5kZWZhdWx0VmFsdWUgPSBldmVudDtcbiAgICB9IGVsc2UgaWYgKHBhcmFtcy5sZW5ndGggPT09IDMpIHtcbiAgICAgIHRoaXMuY2F0ZWdvcmllc1twYXJhbXNbMF1dLmRlZmF1bHRWYWx1ZSA9IGV2ZW50O1xuICAgICAgdGhpcy5jYXRlZ29yaWVzW3BhcmFtc1swXV0uZm9ybXNbcGFyYW1zWzFdXS5kZWZhdWx0VmFsdWUgPSBldmVudDtcbiAgICAgIHRoaXMuY2F0ZWdvcmllc1twYXJhbXNbMF1dLmZvcm1zW3BhcmFtc1sxXV0uZm9ybXNbcGFyYW1zWzJdXS5kZWZhdWx0VmFsdWUgPSBldmVudDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jYXRlZ29yaWVzW3BhcmFtc1swXV0uZGVmYXVsdFZhbHVlID0gZXZlbnQ7XG4gICAgICB0aGlzLmNhdGVnb3JpZXNbcGFyYW1zWzBdXS5mb3Jtc1twYXJhbXNbMV1dLmRlZmF1bHRWYWx1ZSA9IGV2ZW50O1xuICAgICAgdGhpcy5jYXRlZ29yaWVzW3BhcmFtc1swXV0uZm9ybXNbcGFyYW1zWzFdXS5mb3Jtc1twYXJhbXNbMl1dLmRlZmF1bHRWYWx1ZSA9IGV2ZW50O1xuICAgICAgdGhpcy5jYXRlZ29yaWVzW3BhcmFtc1swXV0uZm9ybXNbcGFyYW1zWzFdXS5mb3Jtc1twYXJhbXNbMl1dLmZvcm1zW3BhcmFtc1szXV0uZGVmYXVsdFZhbHVlID0gZXZlbnQ7XG4gICAgfVxuICAgIC8vIHRoaXMuZ2V0Q29uZGl0aW9uVmFsdWVzKClcbiAgfVxuXG4gIGFkZEtleXdvcmRGcm9tSW5wdXQoZXZlbnQ6IE1hdENoaXBJbnB1dEV2ZW50LCBwcmV2LCAuLi5wYXJhbXMpIHtcbiAgICB0aGlzLmNhbkV4aXQgPSBmYWxzZTtcbiAgICBjb25zdCBpbnB1dCA9IGV2ZW50LmlucHV0O1xuICAgIGNvbnN0IHZhbHVlID0gZXZlbnQudmFsdWU7XG4gICAgY29uc3QgbGVuZ3RoID0gcGFyYW1zLmxlbmd0aDtcbiAgICBjb25zdCBmb3JtcyA9IGxlbmd0aCA9PT0gMiA/IHRoaXMuY2F0ZWdvcmllc1twYXJhbXNbMF1dLmZvcm1zW3BhcmFtc1tsZW5ndGggLSAxXV0gOiBsZW5ndGggPT09IDMgPyB0aGlzLmNhdGVnb3JpZXNbcGFyYW1zWzBdXS5mb3Jtc1twYXJhbXNbMV1dLmZvcm1zW3BhcmFtc1tsZW5ndGggLSAxXV0gOiB0aGlzLmNhdGVnb3JpZXNbcGFyYW1zWzBdXS5mb3Jtc1twYXJhbXNbMV1dLmZvcm1zW3BhcmFtc1syXV0uZm9ybXNbcGFyYW1zW2xlbmd0aCAtIDFdXTtcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIGNvbnN0IHByZXZJbmRleCA9IGZvcm1zLmRlZmF1bHRWYWx1ZS5maW5kSW5kZXgoKG9wdCkgPT4gb3B0LnZhbHVlLnRvTG9jYWxlTG93ZXJDYXNlKCkgPT09IHByZXYudG9Mb2NhbGVMb3dlckNhc2UoKSk7XG4gICAgICBpZiAocHJldkluZGV4ICE9PSAtMSkge1xuICAgICAgICBmb3Jtcy5kZWZhdWx0VmFsdWVbcHJldkluZGV4XS52YWx1ZSA9IHZhbHVlLnRyaW0oKTtcbiAgICAgICAgaW5wdXQudmFsdWUgPSBcIlwiO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgZXhpc3QgPSBmb3Jtcy5kZWZhdWx0VmFsdWUuZmluZCgob3B0KSA9PiBvcHQudmFsdWUudG9Mb2NhbGVMb3dlckNhc2UoKSA9PT0gZXZlbnQudmFsdWUudG9Mb2NhbGVMb3dlckNhc2UoKSk7XG4gICAgICAgIGlmICghZXhpc3QpIHtcbiAgICAgICAgICBmb3Jtcy5kZWZhdWx0VmFsdWUucHVzaCh7IHZhbHVlOiB2YWx1ZS50cmltKCksIGNoZWNrZWQ6IGZhbHNlIH0pO1xuICAgICAgICAgIGlucHV0LnZhbHVlID0gXCJcIjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpbnB1dC52YWx1ZSA9IFwiXCI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgIH1cbiAgICAvLyB0aGlzLmdldENvbmRpdGlvblZhbHVlcygpXG4gIH1cblxuICBkcm9wKGV2ZW50OiBDZGtEcmFnRHJvcDxzdHJpbmdbXT4pIHtcbiAgICB0aGlzLmNhbkV4aXQgPSBmYWxzZTtcbiAgICBpZiAoZXZlbnQucHJldmlvdXNDb250YWluZXIgPT09IGV2ZW50LmNvbnRhaW5lcikge1xuICAgICAgbW92ZUl0ZW1JbkFycmF5KGV2ZW50LmNvbnRhaW5lci5kYXRhLCBldmVudC5wcmV2aW91c0luZGV4LCBldmVudC5jdXJyZW50SW5kZXgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0cmFuc2ZlckFycmF5SXRlbShldmVudC5wcmV2aW91c0NvbnRhaW5lci5kYXRhLCBldmVudC5jb250YWluZXIuZGF0YSwgZXZlbnQucHJldmlvdXNJbmRleCwgZXZlbnQuY3VycmVudEluZGV4KTtcbiAgICB9XG4gIH1cblxuICBpbmdvcmVEZWZhdWx0QWN0aW9uKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIH1cblxuICBvblNob3dDYXRlZ29yeSgpIHtcbiAgICB0aGlzLnNob3dQcm9maWxlTmFtZSA9ICF0aGlzLnNob3dQcm9maWxlTmFtZTtcbiAgfVxuXG4gIG9uU2VsZWN0UGljdG8oZSwgcGljdG8pIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5jYW5FeGl0ID0gZmFsc2U7XG4gICAgdGhpcy5mb3JtLnBhdGNoVmFsdWUoeyBQaWN0bzogcGljdG8gfSk7XG4gICAgdGhpcy5pc1BpY3RvTGlzdFNob3cgPSAhdGhpcy5pc1BpY3RvTGlzdFNob3c7XG4gIH1cbiAgb25TaG93UGljdG9MaXN0KGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5pc1BpY3RvTGlzdFNob3cgPSAhdGhpcy5pc1BpY3RvTGlzdFNob3c7XG4gIH1cbiAgb25DaGFuZ2VMYWJlbChldmVudDogYW55LCAuLi5wYXJhbXMpIHtcbiAgICBjb25zdCBhcnIgPSBldmVudC5sYWJlbC5zcGxpdChcIiBcIik7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgIGFycltpXSA9IGFycltpXS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIGFycltpXS5zbGljZSgxKTtcbiAgICB9XG4gICAgY29uc3QgbGVuZ3RoID0gcGFyYW1zLmxlbmd0aDtcbiAgICBjb25zdCBmb3JtcyA9IGxlbmd0aCA9PT0gMiA/IHRoaXMuY2F0ZWdvcmllc1twYXJhbXNbMF1dLmZvcm1zW3BhcmFtc1tsZW5ndGggLSAxXV0gOiBsZW5ndGggPT09IDMgPyB0aGlzLmNhdGVnb3JpZXNbcGFyYW1zWzBdXS5mb3Jtc1twYXJhbXNbMV1dLmZvcm1zW3BhcmFtc1tsZW5ndGggLSAxXV0gOiB0aGlzLmNhdGVnb3JpZXNbcGFyYW1zWzBdXS5mb3Jtc1twYXJhbXNbMV1dLmZvcm1zW3BhcmFtc1syXV0uZm9ybXNbcGFyYW1zW2xlbmd0aCAtIDFdXTtcbiAgICBmb3Jtcy5rZXkgPSBhcnIuam9pbignJylcblxuICB9XG4gIG9uQ2hlY2tlZENoaXAoZXZlbnQ6IGFueSwgLi4ucGFyYW1zKSB7XG4gICAgdGhpcy5jYW5FeGl0ID0gZmFsc2U7XG4gICAgY29uc3QgbGVuZ3RoID0gcGFyYW1zLmxlbmd0aDtcbiAgICBjb25zdCBmb3JtcyA9IGxlbmd0aCA9PT0gMiA/IHRoaXMuY2F0ZWdvcmllc1twYXJhbXNbMF1dLmZvcm1zW3BhcmFtc1tsZW5ndGggLSAxXV0gOiBsZW5ndGggPT09IDMgPyB0aGlzLmNhdGVnb3JpZXNbcGFyYW1zWzBdXS5mb3Jtc1twYXJhbXNbMV1dLmZvcm1zW3BhcmFtc1tsZW5ndGggLSAxXV0gOiB0aGlzLmNhdGVnb3JpZXNbcGFyYW1zWzBdXS5mb3Jtc1twYXJhbXNbMV1dLmZvcm1zW3BhcmFtc1syXV0uZm9ybXNbcGFyYW1zW2xlbmd0aCAtIDFdXTtcbiAgICBjb25zdCBpbmRleCA9IGZvcm1zLmRlZmF1bHRWYWx1ZS5maW5kSW5kZXgoKGNoaXApID0+IGNoaXAudmFsdWUgPT09IGV2ZW50LnZhbHVlKVxuICAgIGlmIChpbmRleCAhPT0gLTEgJiYgZm9ybXMudHlwZSA9PT0gJ2NoZWNrYm94X211bHRpcGxlJykge1xuICAgICAgZm9ybXMuZGVmYXVsdFZhbHVlW2luZGV4XS5jaGVja2VkID0gIWV2ZW50LmNoZWNrZWRcbiAgICB9IGVsc2UgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgZm9ybXMuZGVmYXVsdFZhbHVlLmZvckVhY2goKHZhbHVlKSA9PiB7XG4gICAgICAgIHZhbHVlLmNoZWNrZWQgPSBmYWxzZTtcbiAgICAgIH0pXG4gICAgICBmb3Jtcy5kZWZhdWx0VmFsdWVbaW5kZXhdLmNoZWNrZWQgPSAhZXZlbnQuY2hlY2tlZFxuICAgIH1cbiAgICAvLyB0aGlzLmdldENvbmRpdGlvblZhbHVlcygpXG4gIH1cblxuICBvcGVuRGlhbG9nKCkge1xuICAgIGNvbnN0IGRpYWxvZ1JlZiA9IHRoaXMuZGlhbG9nLm9wZW4oVXBkYXRlUHJvZmlsQ29tcG9uZW50LCB7XG4gICAgICBkYXRhOiB7XG4gICAgICAgIG1hdEljb25MaXN0OiB0aGlzLm1hdEljb25MaXN0LFxuICAgICAgICBmb3JtOiB0aGlzLmZvcm0sXG4gICAgICAgIHRhZ3M6IHRoaXMudGFnc1xuICAgICAgfVxuICAgIH0pO1xuICAgIGRpYWxvZ1JlZi5hZnRlckNsb3NlZCgpLnN1YnNjcmliZSgoY29uZmlybWVkOiBib29sZWFuKSA9PiB7XG4gICAgICBpZiAoY29uZmlybWVkKSB7XG5cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIG9uUGFzc0luRWRpdE1vZGUoaSkge1xuICAgIHRoaXMuY2FuRXhpdCA9IGZhbHNlO1xuICAgIHRoaXMuZWRpdEluZGV4ID0gaTtcbiAgfVxuXG4gIG9uRWRpdCgpIHtcbiAgICB0aGlzLmVkaXRJbmRleCA9IG51bGw7XG4gIH1cblxuICBvbkVkaXRDYXRlZ29yeU5hbWUoaSwgbmFtZSkge1xuICAgIHRoaXMuY2FuRXhpdCA9IGZhbHNlO1xuICAgIHRoaXMuY2F0ZWdvcmllc1tpXS5uYW1lID0gbmFtZTtcbiAgICAvLyB0aGlzLmdldENvbmRpdGlvblZhbHVlcygpXG4gIH1cbiAgb25BY3JlbGluayhlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICB9XG5cbiAgZ2V0Q29uZGl0aW9uVmFsdWVzKCkge1xuICAgIGNvbnN0IGNvbmRpdGlvbnNMaXN0ID0gW107XG4gICAgY29uc3QgdHlwZSA9IChmb3JtcykgPT4gZm9ybXMudHlwZSA9PT0gJ3NlbGVjdCcgfHwgZm9ybXMudHlwZSA9PT0gJ2NoZWNrb2J4JyB8fCBmb3Jtcy50eXBlID09PSAnY2hlY2tib3hfbXVsdGlwbGUnIHx8IGZvcm1zLnR5cGUgPT09ICdyYWRpbydcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY2F0ZWdvcmllcy5sZW5ndGg7IGkrKykge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLmNhdGVnb3JpZXNbaV0uZm9ybXMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgY29uc3QgZm9ybXMgPSB0aGlzLmNhdGVnb3JpZXNbaV0uZm9ybXNbal07XG4gICAgICAgIGlmICh0eXBlKGZvcm1zKSkge1xuICAgICAgICAgIGNvbmRpdGlvbnNMaXN0LnB1c2goe1xuICAgICAgICAgICAgbGV2ZWw6IDEsXG4gICAgICAgICAgICBjYXRlZ29yeUluZGV4OiBpLFxuICAgICAgICAgICAgY3VycmVudEluZGV4OiBqLFxuICAgICAgICAgICAgcG9zc2libGVWYWx1ZXM6IGZvcm1zLmRlZmF1bHRWYWx1ZSxcbiAgICAgICAgICAgIGxhYmVsOiBgJHt0aGlzLmNhdGVnb3JpZXNbaV0ubmFtZX0gPiAke2Zvcm1zLmxhYmVsfWBcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIGlmIChmb3Jtcy5mb3Jtcykge1xuICAgICAgICAgIGZvciAobGV0IGsgPSAwOyBrIDwgZm9ybXMuZm9ybXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHN1YiA9IGZvcm1zLmZvcm1zW2tdXG4gICAgICAgICAgICBpZiAoc3ViLnR5cGUgPT09ICdjaGVja2JveCcgfHwgc3ViLnR5cGUgPT09ICdzZWxlY3QnIHx8IHN1Yi50eXBlID09PSAncmFkaW8nIHx8IHN1Yi50eXBlID09PSAnY2hlY2tib3hfbXVsdGlwbGUnKSB7XG4gICAgICAgICAgICAgIGNvbmRpdGlvbnNMaXN0LnB1c2goe1xuICAgICAgICAgICAgICAgIGxldmVsOiAyLFxuICAgICAgICAgICAgICAgIGNhdGVnb3J5SW5kZXg6IGksXG4gICAgICAgICAgICAgICAgZm9ybUluZGV4OiBqLFxuICAgICAgICAgICAgICAgIGN1cnJlbnRJbmRleDogayxcbiAgICAgICAgICAgICAgICBwb3NzaWJsZVZhbHVlczogc3ViLmRlZmF1bHRWYWx1ZSxcbiAgICAgICAgICAgICAgICBsYWJlbDogYCR7dGhpcy5jYXRlZ29yaWVzW2ldLm5hbWV9ID4gJHtmb3Jtcy5sYWJlbH0gPiAke3N1Yi5sYWJlbH1gXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoc3ViLmZvcm1zKSB7XG4gICAgICAgICAgICAgIGZvciAobGV0IGwgPSAwOyBsIDwgc3ViLmZvcm1zLmxlbmd0aDsgbCsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY2hpbGQgPSBzdWIuZm9ybXNbbF1cbiAgICAgICAgICAgICAgICBpZiAoY2hpbGQudHlwZSA9PT0gJ2NoZWNrYm94JyB8fCBjaGlsZC50eXBlID09PSAnc2VsZWN0JyB8fCBjaGlsZC50eXBlID09PSAncmFkaW8nIHx8IGNoaWxkLnR5cGUgPT09ICdjaGVja2JveF9tdWx0aXBsZScpIHtcbiAgICAgICAgICAgICAgICAgIGNvbmRpdGlvbnNMaXN0LnB1c2goe1xuICAgICAgICAgICAgICAgICAgICBsZXZlbDogMyxcbiAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnlJbmRleDogaSxcbiAgICAgICAgICAgICAgICAgICAgZm9ybUluZGV4OiBqLFxuICAgICAgICAgICAgICAgICAgICBzdWJJbmRleDogbCxcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudEluZGV4OiBrLFxuICAgICAgICAgICAgICAgICAgICBwb3NzaWJsZVZhbHVlczogY2hpbGQuZGVmYXVsdFZhbHVlLFxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogYCR7dGhpcy5jYXRlZ29yaWVzW2ldLm5hbWV9ID4gJHtmb3Jtcy5sYWJlbH0gPiAke3N1Yi5sYWJlbH0gPiAgJHtjaGlsZC5sYWJlbH1gXG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICB9XG4gICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nLCBjb25kaXRpb25zTGlzdCk7XG4gICAgdGhpcy5jb25kaXRpb25EYXRhID0gY29uZGl0aW9uc0xpc3RcbiAgICBjb25zb2xlLmxvZyhjb25kaXRpb25zTGlzdCk7XG5cbiAgfVxufVxuIiwiPG1haW4+XG4gICAgPGZvcm0gW2Zvcm1Hcm91cF09XCJmb3JtXCIgKHN1Ym1pdCk9XCJvblN1Ym1pdCgpXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJib3gtdGl0bGVcIiAqbmdJZj1cInNob3dQcm9maWxlTmFtZVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJveC10aXRsZS1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzPVwidGl0bGVcIj5DcsOpYXRpb24gZOKAmXVuIG5vdXZlYXUgcHJvZmlsIGTigJlvbmJvYXJkaW5nPC9oMz5cbiAgICAgICAgICAgICAgICA8cD5Tw6lsZWN0aW9ubmV6IGzigJlpY29uIGRlIHZvdHJlIGNob2l4IGV0IGluZGlxdWV6IGxlIG5vbSBkZSB2b3RyZSBub3V2ZWF1IHByb2ZpbCBk4oCZb25ib2FyZGluZzwvcD5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJvZmlsLW5hbWUtY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYWRkLXBpY3RvXCIgbWF0LXJhaXNlZC1idXR0b24gY29sb3I9XCJwcmltYXJ5XCIgKGNsaWNrKT1cIm9uU2hvd1BpY3RvTGlzdCgkZXZlbnQpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bWF0LWljb24+e3tmb3JtLmdldCgnUGljdG8nKS52YWx1ZT09PVwiXCIgPyAnY29udGFjdF9waG9uZScgOmZvcm0uZ2V0KCdQaWN0bycpLnZhbHVlfX08L21hdC1pY29uPlxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPG1hdC1mb3JtLWZpZWxkIGNsYXNzPVwiZXhhbXBsZS1mdWxsLXdpZHRoXCIgYXBwZWFyYW5jZT1cIm91dGxpbmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxtYXQtbGFiZWw+Tm9tIGRlIHZvdHJlIG5vdXZlYXUgcHJvZmlsPC9tYXQtbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBtYXRJbnB1dCBmb3JtQ29udHJvbE5hbWU9XCJOYW1lXCIgcGxhY2Vob2xkZXI9XCJFeC4gTWFuYWdlclwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsaXN0LXBpY3RvXCIgKm5nSWY9XCJpc1BpY3RvTGlzdFNob3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxtYXQtaWNvbiAqbmdGb3I9XCJsZXQgaWNvbiBvZiBtYXRJY29uTGlzdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW3N0eWxlLmNvbG9yXT1cImZvcm0uZ2V0KCdQaWN0bycpLnZhbHVlPT09aWNvbi5uYW1lID8gJyM4MzBCNkInOicjMDAwJ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cIm9uU2VsZWN0UGljdG8oJGV2ZW50LGljb24ubmFtZSlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e2ljb24ubmFtZX19XG4gICAgICAgICAgICAgICAgICAgICAgICA8L21hdC1pY29uPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8bWF0LWZvcm0tZmllbGQgY2xhc3M9XCJleGFtcGxlLWZ1bGwtd2lkdGhcIiBhcHBlYXJhbmNlPVwib3V0bGluZVwiPlxuICAgICAgICAgICAgICAgICAgICA8bWF0LWxhYmVsPkRlc2NyaXB0aW9uPC9tYXQtbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSB0eXBlPVwidGV4dFwiIG1hdElucHV0IGZvcm1Db250cm9sTmFtZT1cIkRlc2NyaXB0aW9uXCIgcm93cz1cIjRcIiBwbGFjZWhvbGRlcj1cIlwiPjwvdGV4dGFyZWE+XG4gICAgICAgICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cbiAgICAgICAgICAgICAgICA8bWF0LWZvcm0tZmllbGQgY2xhc3M9XCJleGFtcGxlLWZ1bGwtd2lkdGhcIiBhcHBlYXJhbmNlPVwib3V0bGluZVwiPlxuICAgICAgICAgICAgICAgICAgICA8bWF0LWxhYmVsPlRhZ3M8L21hdC1sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPG1hdC1zZWxlY3QgZm9ybUNvbnRyb2xOYW1lPVwiVGFnc1wiIHJlcXVpcmVkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG1hdC1vcHRpb24gKm5nRm9yPVwibGV0IHRhZyBvZiB0YWdzXCIgW3ZhbHVlXT1cInRhZ1wiPnt7dGFnfX08L21hdC1vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgIDwvbWF0LXNlbGVjdD5cbiAgICAgICAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxuICAgICAgICAgICAgICAgIDxtYXQtY2hlY2tib3ggY2xhc3M9XCJmb3JtLWZpZWxkXCIgZm9ybUNvbnRyb2xOYW1lPVwiU3RhdHVzXCI+QWN0aXZlPC9tYXQtY2hlY2tib3g+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxpbmstY3JlYXRlLXByb2ZpbFwiPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwibGluay1hZGQtcHJvZmlsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtzdHlsZS5vcGFjaXR5XT1cIihmb3JtLmdldCgnTmFtZScpLnZhbHVlPT09JycgfHwgZm9ybS5nZXQoJ1RhZ3MnKS52YWx1ZT09JycpID8gMC40IDogMVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBbZGlzYWJsZWRdPVwiZm9ybS5nZXQoJ05hbWUnKS52YWx1ZT09PScnIHx8IGZvcm0uZ2V0KCdUYWdzJykudmFsdWU9PScnXCIgbWF0LXJhaXNlZC1idXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiIChjbGljayk9J29uU2hvd0NhdGVnb3J5KCknPlxuICAgICAgICAgICAgICAgICAgICAgICAge3tpZCAhPT0gXCIwXCIgPyAnTW9kaWZpZXIgdW4gcHJvZmlsJyA6J0Nyw6llciB1biBub3V2ZWF1IHByb2ZpbCd9fVxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNhdGVnb3J5XCIgKm5nSWY9XCIhc2hvd1Byb2ZpbGVOYW1lXCI+XG4gICAgICAgICAgICA8IS0tIDxkaXYgY2xhc3M9XCJjYXRlZ29yeVwiPiAtLT5cblxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNpZGUtYmFyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInN1bW1hcnlcIj5cbiAgICAgICAgICAgICAgICAgICAgPGgzPjxzcGFuPnt7dGhpcy5mb3JtLmdldCgnTmFtZScpLnZhbHVlfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bWF0LWljb24gKGNsaWNrKT1cIm9wZW5EaWFsb2coKVwiPmVkaXQ8L21hdC1pY29uPlxuICAgICAgICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgICAgICAgICA8b2wgdHlwZT1cIklcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cImxpLXRpdGxlXCIgKm5nRm9yPVwibGV0IGNhdCBvZiBjYXRlZ29yaWVzOyAgbGV0IGk9aW5kZXhcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBbY2xhc3NdPVwiZWRpdEluZGV4PT09aSA/ICdlZGl0aW9uLW1vZGUnOicnXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIFtuZ3hTY3JvbGxUb109XCInIycrY2F0Lm5hbWVcIiAoY2xpY2spPVwib25FeHBlbmRNb3JlKHtmaWVsZDpjYXR9LGkpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICpuZ0lmPVwiZWRpdEluZGV4IT09aVwiPnt7Y2F0Lm5hbWV9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IChibHVyKT1cIm9uRWRpdCgpXCIgI2VkaXQgKm5nSWY9XCJlZGl0SW5kZXg9PT1pXCIgdHlwZT1cInRleHRcIiBbKG5nTW9kZWwpXT1cImNhdC5uYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtuZ01vZGVsT3B0aW9uc109XCJ7c3RhbmRhbG9uZTogdHJ1ZX1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKG5nTW9kZWxDaGFuZ2UpPVwib25FZGl0Q2F0ZWdvcnlOYW1lKGksY2F0Lm5hbWUpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxtYXQtaWNvbiAoY2xpY2spPVwib25QYXNzSW5FZGl0TW9kZShpKVwiPmVkaXQ8L21hdC1pY29uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b2w+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IHN1YiBvZiBjYXQuZm9ybXM7bGV0IGo9aW5kZXhcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJzdWI/LmZvcm1zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIFtjbGFzc109XCJzdWIuZXhwYW5kTW9yZSA/ICdzdWItdGl0bGUgYWN0aXZlJyA6J3N1Yi10aXRsZSdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwib25FeHBlbmRNb3JlKHtmaWVsZDpzdWJ9LGksailcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gW25neFNjcm9sbFRvXT1cIicjJytzdWIua2V5XCI+e3tqKzF9fS4ge3tzdWIubGFiZWx9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvb2w+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8L29sPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG1hdC1idXR0b24gY2xhc3M9XCJhZGQtY2F0ZWdvcnkgdHJhbnNwYXJlbnRcIiAoY2xpY2spPSdvbkFkZE5ld0NhdGVnb3J5KCRldmVudCknPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG1hdC1pY29uPmFkZF9ib3g8L21hdC1pY29uPlxuICAgICAgICAgICAgICAgICAgICAgICAgQWpvdXRlciB1bmUgbm91dmVsbGUgY2F0w6lnb3JpZVxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIG1hdC1idXR0b24gY2xhc3M9XCJyZWdpc3Rlci1idXR0b25cIiB0eXBlPVwic3VibWl0XCI+XG4gICAgICAgICAgICAgICAgICAgIDwhLS0gPG1hdC1pY29uPmNoZWNrPC9tYXQtaWNvbj4gLS0+XG4gICAgICAgICAgICAgICAgICAgIEVucmVnaXN0cmVyIGxlIHByb2ZpbFxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmllbGRzXCIgY2RrRHJvcExpc3RHcm91cD5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXhhbXBsZS1saXN0IG10LTIwXCIgI3BhcmVudExpc3Q9XCJjZGtEcm9wTGlzdFwiIGNka0Ryb3BMaXN0IFtjZGtEcm9wTGlzdERhdGFdPVwiY2F0ZWdvcmllc1wiXG4gICAgICAgICAgICAgICAgICAgIChjZGtEcm9wTGlzdERyb3BwZWQpPVwiZHJvcCgkZXZlbnQpXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXRlZ29yeS1pdGVtXCIgKm5nRm9yPVwibGV0IGNhdGVnb3J5IG9mIGNhdGVnb3JpZXM7ICBsZXQgaT1pbmRleFwiIGNka0RyYWdcbiAgICAgICAgICAgICAgICAgICAgICAgIFtpZF09XCJjYXRlZ29yeS5uYW1lXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGVmdC1hY3Rpb24gbW92ZS1pY29uc1wiIGNka0RyYWdIYW5kbGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInRyYW5zcGFyZW50LWJ1dHRvblwiIFtkaXNhYmxlZF09XCIhY2F0ZWdvcnkuZGVsZXRlYWJsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJvblJlbW92ZUNhdGVnb3J5KCRldmVudCxpKVwiIG1hdC1yYWlzZWQtYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bWF0LWljb24gW3N0eWxlLm9wYWNpdHldPVwiIWNhdGVnb3J5LmRlbGV0ZWFibGUgPyAwIDoxXCI+ZGVsZXRlPC9tYXQtaWNvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpZWxkLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmllbGQtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJleGFtcGxlLWZ1bGwtd2lkdGggaW5wdXQtY2F0ZWdvcnktbmFtZVwiIHR5cGU9XCJ0ZXh0XCIgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtyZWFkb25seV09XCJjYXRlZ29yaWVzLmxlbmd0aDw0IHx8ICFjYXRlZ29yeS5lZGl0YWJsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbcmVhZG9ubHldPVwiIWNhdGVnb3J5LmVkaXRhYmxlXCIgWyhuZ01vZGVsKV09XCJjYXRlZ29yeS5uYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtuZ01vZGVsT3B0aW9uc109XCJ7c3RhbmRhbG9uZTogdHJ1ZX1cIiBwbGFjZWhvbGRlcj1cIlNhaXNpciBsZSBub20gZGUgbGEgY2F0w6lnb3JpZVwiIC8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG1hdC1mb3JtLWZpZWxkIGNsYXNzPVwiZm9ybS1maWVsZCBmaWVsZC1zaXplXCIgYXBwZWFyYW5jZT1cIm91dGxpbmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9XCJmbG9hdDogcmlnaHQ7IHdpZHRoOiA1MCU7XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bWF0LWxhYmVsPsOJcXVpcGU8L21hdC1sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxtYXQtc2VsZWN0IFsodmFsdWUpXT1cImNhdGVnb3J5LnNlbGVjdG9yLnZhbHVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbKG5nTW9kZWwpXT1cImNhdGVnb3J5LnNlbGVjdG9yLnZhbHVlXCIgW25nTW9kZWxPcHRpb25zXT1cIntzdGFuZGFsb25lOiB0cnVlfVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQgKm5nSWY9XCJjYXRlZ29yeS5zZWxlY3RvclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxtYXQtb3B0aW9uICpuZ0Zvcj1cImxldCBzZWxlY3Qgb2YgY2F0ZWdvcnkuc2VsZWN0b3IuZGVmYXVsdFZhbHVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3ZhbHVlXT1cInNlbGVjdC52YWx1ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e3NlbGVjdC52YWx1ZX19PC9tYXQtb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9tYXQtc2VsZWN0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgI2NoaWxkTGlzdD1cImNka0Ryb3BMaXN0XCIgKm5nSWY9XCJjYXRlZ29yeS5mb3Jtc1wiIFtjZGtEcm9wTGlzdERhdGFdPVwiY2F0ZWdvcnkuZm9ybXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZGtEcm9wTGlzdCAoY2RrRHJvcExpc3REcm9wcGVkKT1cImRyb3AoJGV2ZW50KVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiY2F0ZWdvcnkuZXhwYW5kTW9yZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpZWxkLWJveFwiICpuZ0Zvcj1cImxldCBmaWVsZCBvZiBjYXRlZ29yeS5mb3JtcztsZXQgaj1pbmRleFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2lkXT1cImZpZWxkLmtleVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2RrRHJhZz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpZWxkcy1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYnV0dG9uLWFjdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gW2Rpc2FibGVkXT1cIiFmaWVsZC5kZWxldGVhYmxlXCIgbWF0LW1pbmktZmFiIGNvbG9yPVwid2FyblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZGVsZXRlLWZpZWxkIHRyYW5zcGFyZW50LWJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJvblJlbW92ZUZpZWxkKGksailcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG1hdC1pY29uIFtzdHlsZS5vcGFjaXR5XT1cIiFmaWVsZC5kZWxldGVhYmxlID8gMCA6MVwiPmRlbGV0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L21hdC1pY29uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmllbGRzLWNvbnRhaW5lclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2NsYXNzXT1cIiFmaWVsZC5kZWxldGVhYmxlID8gJ2Rpc2FibGVkJyA6JydcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGliLXN1Yi1jYXRlZ29yeSBbZmllbGRdPVwiZmllbGRcIiBbbGVuZ3RoXT1cImNhdGVnb3J5Py5mb3Jtcz8ubGVuZ3RoXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2ldPVwiaVwiIFtqXT1cImpcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAob25BZGRLZXl3b3JkRnJvbUlucHV0KT1cImFkZEtleXdvcmRGcm9tSW5wdXQoJGV2ZW50LmV2ZW50LCRldmVudC5wcmV2LGksailcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAob25LZXlQcmVzcyk9XCJvbktleVByZXNzKCRldmVudC5ldmVudCxpLGopXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKG9uQWRkTmV3RmllbGQpPVwib25BZGROZXdGaWVsZChpKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChvblJlbW92ZUZpZWxkKT1cIm9uUmVtb3ZlRmllbGQoaSxqKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChvbkNoYW5nZVR5cGUpPVwib25DaGFuZ2VUeXBlKGZpZWxkLnR5cGUsaSxqKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChvblJlbW92ZUtleXdvcmQpPVwicmVtb3ZlS2V5d29yZCgkZXZlbnQuZXZlbnQsaSxqKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChvbkFkZE5ld1N1YkxldmVsRmllbGQpPVwib25BZGROZXdTdWJMZXZlbEZpZWxkKGksailcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAob25FeHBlbmRNb3JlKT1cIm9uRXhwZW5kTW9yZSgkZXZlbnQsaSxqKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChvbkNoYW5nZUxhYmVsKT1cIm9uQ2hhbmdlTGFiZWwoJGV2ZW50LGksailcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAob25DaGVja2VkQ2hpcCk9XCJvbkNoZWNrZWRDaGlwKCRldmVudCxpLGopXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKG9uRHJvcCk9XCJkcm9wKCRldmVudClcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAob25DaGVja2VkRGVmYXVsdCk9XCJvbkNoZWNrZWREZWZhdWx0KCRldmVudCxpLGopXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2NvbmRpdGlvbkRhdGFdPVwiY29uZGl0aW9uRGF0YVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChvbkdldENvbmRpdGlvblZhbHVlcyk9XCJnZXRDb25kaXRpb25WYWx1ZXMoKVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2ICpuZ0lmPVwiZmllbGQuZXhwYW5kTW9yZVwiIGNsYXNzPVwiY2hpbGRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgI2NoaWxkTGlzdD1cImNka0Ryb3BMaXN0XCIgKm5nSWY9XCJmaWVsZC5mb3Jtc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2Nka0Ryb3BMaXN0RGF0YV09XCJmaWVsZC5mb3Jtc1wiIGNka0Ryb3BMaXN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGNka0Ryb3BMaXN0RHJvcHBlZCk9XCJkcm9wKCRldmVudClcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiXCIgc3R5bGU9XCJtYXJnaW4tYm90dG9tOjEwcHggO1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICpuZ0Zvcj1cImxldCBjaGlsZCBvZiBmaWVsZC5mb3JtcztsZXQgaz1pbmRleFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtpZF09XCJjaGlsZC5rZXlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjZGtEcmFnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpZWxkcy1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImJ1dHRvbi1hY3Rpb24gY2hpbGQtMi1iYWNrZ3JvdW5kXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gW2Rpc2FibGVkXT1cIiFjaGlsZC5kZWxldGVhYmxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hdC1taW5pLWZhYiBjb2xvcj1cIndhcm5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJkZWxldGUtZmllbGQgdHJhbnNwYXJlbnQtYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJvblJlbW92ZUZpZWxkKGksaixrKVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG1hdC1pY29uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3N0eWxlLm9wYWNpdHldPVwiIWNoaWxkLmRlbGV0ZWFibGUgPyAwIDoxXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlPC9tYXQtaWNvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpZWxkcy1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpYi1zdWItY2F0ZWdvcnkgW2ZpZWxkXT1cImNoaWxkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtsZW5ndGhdPVwiZmllbGQ/LmZvcm1zPy5sZW5ndGhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2ldPVwialwiIFtqXT1cImtcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKG9uQWRkS2V5d29yZEZyb21JbnB1dCk9XCJhZGRLZXl3b3JkRnJvbUlucHV0KCRldmVudC5ldmVudCwkZXZlbnQucHJldixpLGosaylcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKG9uS2V5UHJlc3MpPVwib25LZXlQcmVzcygkZXZlbnQuZXZlbnQsaSxqLGspXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChvbkFkZE5ld0ZpZWxkKT1cIm9uQWRkTmV3RmllbGQoaSwgailcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKG9uUmVtb3ZlRmllbGQpPVwib25SZW1vdmVGaWVsZChpLGosaylcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKG9uQ2hhbmdlVHlwZSk9XCJvbkNoYW5nZVR5cGUoY2hpbGQudHlwZSxpLGosaylcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKG9uUmVtb3ZlS2V5d29yZCk9XCJyZW1vdmVLZXl3b3JkKCRldmVudC5ldmVudCxpLGosaylcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKG9uQWRkTmV3U3ViTGV2ZWxGaWVsZCk9XCJvbkFkZE5ld1N1YkxldmVsRmllbGQoaSxqLGspXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChvbkV4cGVuZE1vcmUpPVwib25FeHBlbmRNb3JlKCRldmVudCxpLGosaylcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKG9uQ2hhbmdlTGFiZWwpPVwib25DaGFuZ2VMYWJlbCgkZXZlbnQsaSxqLGspXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChvbkNoZWNrZWRDaGlwKT1cIm9uQ2hlY2tlZENoaXAoJGV2ZW50LGksaixrKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAob25Ecm9wKT1cImRyb3AoJGV2ZW50KVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAob25DaGVja2VkRGVmYXVsdCk9XCJvbkNoZWNrZWREZWZhdWx0KCRldmVudCxpLGosaylcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2NvbmRpdGlvbkRhdGFdPVwiY29uZGl0aW9uRGF0YVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAob25HZXRDb25kaXRpb25WYWx1ZXMpPVwiZ2V0Q29uZGl0aW9uVmFsdWVzKClcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgKm5nSWY9XCJjaGlsZC5leHBhbmRNb3JlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImNoaWxkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiAjY2hpbGRMaXN0PVwiY2RrRHJvcExpc3RcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqbmdJZj1cImNoaWxkLmZvcm1zXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2Nka0Ryb3BMaXN0RGF0YV09XCJjaGlsZC5mb3Jtc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNka0Ryb3BMaXN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjZGtEcm9wTGlzdERyb3BwZWQpPVwiZHJvcCgkZXZlbnQpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKm5nRm9yPVwibGV0IGMyIG9mIGNoaWxkLmZvcm1zO2xldCBsPWluZGV4XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtpZF09XCJjMi5rZXlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2RrRHJhZz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZmllbGRzLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJidXR0b24tYWN0aW9uIGNoaWxkLTMtYmFja2dyb3VuZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtkaXNhYmxlZF09XCIhZmllbGQuZGVsZXRlYWJsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF0LW1pbmktZmFiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJ3YXJuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImRlbGV0ZS1maWVsZCB0cmFuc3BhcmVudC1idXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJvblJlbW92ZUZpZWxkKGksaixrLGwpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG1hdC1pY29uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxldGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L21hdC1pY29uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZpZWxkcy1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaWItc3ViLWNhdGVnb3J5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2ZpZWxkXT1cImMyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbbGVuZ3RoXT1cImNoaWxkPy5mb3Jtcz8ubGVuZ3RoXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbaV09XCJrXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbal09XCJsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAob25BZGRLZXl3b3JkRnJvbUlucHV0KT1cImFkZEtleXdvcmRGcm9tSW5wdXQoJGV2ZW50LmV2ZW50LCAkZXZlbnQucHJldixpLGosayxsKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKG9uS2V5UHJlc3MpPVwib25LZXlQcmVzcygkZXZlbnQuZXZlbnQsaSxqLGssbClcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChvbkFkZE5ld0ZpZWxkKT1cIm9uQWRkTmV3RmllbGQoaSxqLGspXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAob25SZW1vdmVGaWVsZCk9XCJvblJlbW92ZUZpZWxkKGksaixrLGwpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAob25DaGFuZ2VUeXBlKT1cIm9uQ2hhbmdlVHlwZShjMi50eXBlLGksaixrLGwpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAob25SZW1vdmVLZXl3b3JkKT1cInJlbW92ZUtleXdvcmQoJGV2ZW50LmV2ZW50LGksaixrLGwpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAob25BZGROZXdTdWJMZXZlbEZpZWxkKT1cIm9uQWRkTmV3U3ViTGV2ZWxGaWVsZChpLGosayxsKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKG9uRXhwZW5kTW9yZSk9XCJvbkV4cGVuZE1vcmUoJGV2ZW50LGksaixrLGwpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAob25DaGFuZ2VMYWJlbCk9XCJvbkNoYW5nZUxhYmVsKCRldmVudCxpLGosayxsKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKG9uQ2hlY2tlZENoaXApPVwib25DaGVja2VkQ2hpcCgkZXZlbnQsaSxqLGssbClcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChvbkRyb3ApPVwiZHJvcCgkZXZlbnQpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAob25DaGVja2VkRGVmYXVsdCk9XCJvbkNoZWNrZWREZWZhdWx0KCRldmVudCxpLGosayxsKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2NvbmRpdGlvbkRhdGFdPVwiY29uZGl0aW9uRGF0YVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKG9uR2V0Q29uZGl0aW9uVmFsdWVzKT1cImdldENvbmRpdGlvblZhbHVlcygpXCI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiY2hpbGRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGliLXN1Yi1jYXRlZ29yeT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhZGQtYnV0dG9uLWNvbnRhaW5lciBhZGQtYnV0dG9uLXN1Yi1jYXRlZ29yeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJjaGlsZD8uZm9ybXM/Lmxlbmd0aC0xPT09bFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9XCJtYXJnaW46MTBweCBhdXRvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2Rpc2FibGVkXT1cImNoaWxkPy5mb3Jtcz8ubGVuZ3RoLTEhPT1sXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3N0eWxlLm9wYWNpdHldPVwiY2hpbGQ/LmZvcm1zPy5sZW5ndGgtMT09PWwgPyAxIDowXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF0LXJhaXNlZC1idXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT0nb25BZGROZXdGaWVsZChpLGosayknPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bWF0LWljb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRfYm94XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbWF0LWljb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPkFqb3V0ZXIgdW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYW1wPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGliLXN1Yi1jYXRlZ29yeT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFkZC1idXR0b24tY29udGFpbmVyIGFkZC1idXR0b24tc3ViLWNhdGVnb3J5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICpuZ0lmPVwiZmllbGQ/LmZvcm1zPy5sZW5ndGgtMT09PWtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gc3R5bGU9XCJtYXJnaW46MTBweCBhdXRvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbZGlzYWJsZWRdPVwiZmllbGQ/LmZvcm1zPy5sZW5ndGgtMSE9PWtcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtzdHlsZS5vcGFjaXR5XT1cImZpZWxkPy5mb3Jtcz8ubGVuZ3RoLTE9PT1rID8gMSA6MFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF0LXJhaXNlZC1idXR0b24gY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY2xpY2spPSdvbkFkZE5ld0ZpZWxkKGksaiknPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxtYXQtaWNvbj5hZGRfYm94PC9tYXQtaWNvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5Bam91dGVyIHVuIGNoYW1wPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGliLXN1Yi1jYXRlZ29yeT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhZGQtYnV0dG9uLWNvbnRhaW5lciBhZGQtYnV0dG9uLXN1Yi1jYXRlZ29yeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICpuZ0lmPVwiY2F0ZWdvcnk/LmZvcm1zPy5sZW5ndGgtMT09PWpcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBzdHlsZT1cIm1hcmdpbjoxMHB4IGF1dG9cIiBbZGlzYWJsZWRdPVwiY2F0ZWdvcnk/LmZvcm1zPy5sZW5ndGgtMSE9PWpcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3N0eWxlLm9wYWNpdHldPVwiY2F0ZWdvcnk/LmZvcm1zPy5sZW5ndGgtMT09PWogPyAxIDowXCIgbWF0LXJhaXNlZC1idXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiIChjbGljayk9J29uQWRkTmV3RmllbGQoaSknPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG1hdC1pY29uPmFkZF9ib3g8L21hdC1pY29uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+QWpvdXRlciB1biBjaGFtcDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBtYXQtbWluaS1mYWIgY29sb3I9XCJwcmltYXJ5XCIgY2xhc3M9XCJleHBhbmQtYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwib25FeHBlbmRNb3JlKHtldmVudDokZXZlbnQsIGZpZWxkOmNhdGVnb3J5fSxpKVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxtYXQtaWNvbiAqbmdJZj1cIiFjYXRlZ29yeS5leHBhbmRNb3JlXCI+Y2hldnJvbl9yaWdodDwvbWF0LWljb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG1hdC1pY29uICpuZ0lmPVwiY2F0ZWdvcnkuZXhwYW5kTW9yZVwiPmV4cGFuZF9tb3JlPC9tYXQtaWNvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYWRkLWJ1dHRvbi1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gKGNsaWNrKT0nb25BZGROZXdDYXRlZ29yeSgkZXZlbnQpJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bWF0LWljb24+YWRkPC9tYXQtaWNvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBBam91dGVyIHVuZSBjYXTDqWdvcmllXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG1hdC1pY29uPmNoZWNrPC9tYXQtaWNvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBFbnJlZ2lzdHJlclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+IC0tPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZm9ybT5cbjwvbWFpbj4iXX0=