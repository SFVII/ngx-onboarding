import { __awaiter } from "tslib";
import { Component } from '@angular/core';
import { Validators } from "@angular/forms";
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
import * as i7 from "@angular/material/form-field";
import * as i8 from "@angular/material/select";
import * as i9 from "@angular/material/core";
import * as i10 from "@nicky-lenaers/ngx-scroll-to";
import * as i11 from "@angular/material/icon";
import * as i12 from "../components/sub-onboarding-create/sub-onboarding-create.component";
function OnboardingCreateComponent_ng_container_2_div_1_div_6_div_7_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelement(2, "br");
    i0.ɵɵelement(3, "br");
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const field_r301 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", field_r301.value, " ");
} }
function OnboardingCreateComponent_ng_container_2_div_1_div_6_div_7_ng_container_8_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "strong");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(3, "br");
    i0.ɵɵtext(4);
    i0.ɵɵelement(5, "br");
    i0.ɵɵelement(6, "br");
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const subf_r307 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", subf_r307.key, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", subf_r307.value, " ");
} }
function OnboardingCreateComponent_ng_container_2_div_1_div_6_div_7_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, OnboardingCreateComponent_ng_container_2_div_1_div_6_div_7_ng_container_8_ng_container_1_Template, 7, 2, "ng-container", 21);
    i0.ɵɵpipe(2, "keyvalue");
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const field_r301 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(2, 1, field_r301.value));
} }
function OnboardingCreateComponent_ng_container_2_div_1_div_6_div_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 17);
    i0.ɵɵelementStart(1, "div", 18);
    i0.ɵɵelementStart(2, "div", 19);
    i0.ɵɵelementStart(3, "div", 20);
    i0.ɵɵelementStart(4, "strong");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(6, "br");
    i0.ɵɵtemplate(7, OnboardingCreateComponent_ng_container_2_div_1_div_6_div_7_ng_container_7_Template, 4, 1, "ng-container", 1);
    i0.ɵɵtemplate(8, OnboardingCreateComponent_ng_container_2_div_1_div_6_div_7_ng_container_8_Template, 3, 3, "ng-container", 1);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const field_r301 = ctx.$implicit;
    const ctx_r300 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("id", field_r301.key);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(field_r301.key);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", !ctx_r300.isObject(field_r301.value));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r300.isObject(field_r301.value));
} }
function OnboardingCreateComponent_ng_container_2_div_1_div_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 11);
    i0.ɵɵelementStart(1, "div", 12);
    i0.ɵɵelementStart(2, "div", 13);
    i0.ɵɵelementStart(3, "h4", 14);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 15);
    i0.ɵɵelementContainerStart(6);
    i0.ɵɵtemplate(7, OnboardingCreateComponent_ng_container_2_div_1_div_6_div_7_Template, 9, 4, "div", 16);
    i0.ɵɵpipe(8, "keyvalue");
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const category_r298 = ctx.$implicit;
    i0.ɵɵproperty("id", category_r298.name);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(category_r298.key);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(8, 3, category_r298.value));
} }
function OnboardingCreateComponent_ng_container_2_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r310 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 5);
    i0.ɵɵelementStart(1, "div", 6);
    i0.ɵɵelementStart(2, "button", 7);
    i0.ɵɵlistener("click", function OnboardingCreateComponent_ng_container_2_div_1_Template_button_click_2_listener() { i0.ɵɵrestoreView(_r310); const ctx_r309 = i0.ɵɵnextContext(2); return ctx_r309.showMode = false; });
    i0.ɵɵtext(3, " Modifier ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 8);
    i0.ɵɵelementStart(5, "div", 9);
    i0.ɵɵtemplate(6, OnboardingCreateComponent_ng_container_2_div_1_div_6_Template, 9, 5, "div", 10);
    i0.ɵɵpipe(7, "keyvalue");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r296 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(7, 1, ctx_r296.currentOnboarding.view));
} }
function OnboardingCreateComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, OnboardingCreateComponent_ng_container_2_div_1_Template, 8, 3, "div", 4);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r293 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r293.isSelected);
} }
function OnboardingCreateComponent_div_4_mat_option_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 28);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const template_r312 = ctx.$implicit;
    i0.ɵɵproperty("value", template_r312._id);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1("", template_r312.Name, " ");
} }
function OnboardingCreateComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r314 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 22);
    i0.ɵɵelementStart(1, "h3");
    i0.ɵɵtext(2, " Onboarding de votre nouveau collaborateur ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "p");
    i0.ɵɵtext(4, "S\u00E9lectionnez le nom de votre profil afin de pouvoir d\u00E9marrer son onboarding.");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 23);
    i0.ɵɵelementStart(6, "mat-form-field", 24);
    i0.ɵɵelementStart(7, "mat-label");
    i0.ɵɵtext(8, "Profil");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "mat-select", 25);
    i0.ɵɵlistener("selectionChange", function OnboardingCreateComponent_div_4_Template_mat_select_selectionChange_9_listener($event) { i0.ɵɵrestoreView(_r314); const ctx_r313 = i0.ɵɵnextContext(); return ctx_r313.onSelect($event.value); });
    i0.ɵɵtemplate(10, OnboardingCreateComponent_div_4_mat_option_10_Template, 2, 2, "mat-option", 26);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "button", 27);
    i0.ɵɵlistener("click", function OnboardingCreateComponent_div_4_Template_button_click_11_listener() { i0.ɵɵrestoreView(_r314); const ctx_r315 = i0.ɵɵnextContext(); return ctx_r315.onSelectContactTemplate(); });
    i0.ɵɵtext(12);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r294 = i0.ɵɵnextContext();
    var tmp_1_0 = null;
    const currVal_1 = ((tmp_1_0 = ctx_r294.form.get("TemplateId")) == null ? null : tmp_1_0.value) == "" ? 0.4 : 1;
    var tmp_2_0 = null;
    const currVal_2 = ((tmp_2_0 = ctx_r294.form.get("TemplateId")) == null ? null : tmp_2_0.value) == "";
    i0.ɵɵadvance(10);
    i0.ɵɵproperty("ngForOf", ctx_r294.templates);
    i0.ɵɵadvance(1);
    i0.ɵɵstyleProp("opacity", currVal_1);
    i0.ɵɵproperty("disabled", currVal_2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r294.id && ctx_r294.id !== "0" ? "Modifier l\u2019onboarding" : "D\u00E9marrer l\u2019onboarding", " ");
} }
function OnboardingCreateComponent_div_5_li_6_mat_icon_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-icon");
    i0.ɵɵtext(1, "keyboard_arrow_right");
    i0.ɵɵelementEnd();
} }
function OnboardingCreateComponent_div_5_li_6_Template(rf, ctx) { if (rf & 1) {
    const _r322 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 34);
    i0.ɵɵlistener("click", function OnboardingCreateComponent_div_5_li_6_Template_li_click_0_listener() { i0.ɵɵrestoreView(_r322); const i_r319 = ctx.index; const ctx_r321 = i0.ɵɵnextContext(2); return ctx_r321.onSelectMenu(i_r319); });
    i0.ɵɵelementStart(1, "span");
    i0.ɵɵelementStart(2, "span", 35);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(4, OnboardingCreateComponent_div_5_li_6_mat_icon_4_Template, 2, 0, "mat-icon", 1);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const cat_r318 = ctx.$implicit;
    const i_r319 = ctx.index;
    const ctx_r316 = i0.ɵɵnextContext(2);
    i0.ɵɵclassMap(ctx_r316.selectedMenu === i_r319 ? "active" : "");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngxScrollTo", "#" + cat_r318.name);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(cat_r318.name);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r316.checkSubForm(cat_r318.forms));
} }
function OnboardingCreateComponent_div_5_div_11_mat_select_5_mat_option_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 28);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const select_r328 = ctx.$implicit;
    i0.ɵɵproperty("value", select_r328.value);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", select_r328.value, "");
} }
const _c0 = function () { return { standalone: true }; };
function OnboardingCreateComponent_div_5_div_11_mat_select_5_Template(rf, ctx) { if (rf & 1) {
    const _r331 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-select", 38);
    i0.ɵɵlistener("ngModelChange", function OnboardingCreateComponent_div_5_div_11_mat_select_5_Template_mat_select_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r331); const category_r323 = i0.ɵɵnextContext().$implicit; return category_r323.selector.value = $event; });
    i0.ɵɵtemplate(1, OnboardingCreateComponent_div_5_div_11_mat_select_5_mat_option_1_Template, 2, 2, "mat-option", 26);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const category_r323 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("ngModel", category_r323.selector.value)("ngModelOptions", i0.ɵɵpureFunction0(3, _c0));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", category_r323.selector.defaultValue);
} }
function OnboardingCreateComponent_div_5_div_11_div_8_div_1_div_5_div_1_div_1_div_5_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r347 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 18);
    i0.ɵɵelementStart(1, "div", 19);
    i0.ɵɵelementStart(2, "div", 20);
    i0.ɵɵelementStart(3, "lib-sub-create-onboarding", 40);
    i0.ɵɵlistener("onDrop", function OnboardingCreateComponent_div_5_div_11_div_8_div_1_div_5_div_1_div_1_div_5_div_1_div_1_Template_lib_sub_create_onboarding_onDrop_3_listener($event) { i0.ɵɵrestoreView(_r347); const ctx_r346 = i0.ɵɵnextContext(10); return ctx_r346.drop($event); });
    i0.ɵɵelement(4, "div", 41);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r348 = i0.ɵɵnextContext();
    const c2_r343 = ctx_r348.$implicit;
    const l_r344 = ctx_r348.index;
    const ctx_r349 = i0.ɵɵnextContext(3);
    const child_r338 = ctx_r349.$implicit;
    const k_r339 = ctx_r349.index;
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("field", c2_r343)("length", child_r338 == null ? null : child_r338.forms == null ? null : child_r338.forms.length)("i", k_r339)("j", l_r344);
} }
function OnboardingCreateComponent_div_5_div_11_div_8_div_1_div_5_div_1_div_1_div_5_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 45);
    i0.ɵɵtemplate(1, OnboardingCreateComponent_div_5_div_11_div_8_div_1_div_5_div_1_div_1_div_5_div_1_div_1_Template, 5, 4, "div", 39);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const c2_r343 = ctx.$implicit;
    const ctx_r342 = i0.ɵɵnextContext(9);
    i0.ɵɵproperty("id", c2_r343.key);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", c2_r343.expandOnboarding && ctx_r342.onCheckConditionLocationValue(c2_r343.isConditional, c2_r343.conditionLocation, c2_r343.conditionValue));
} }
function OnboardingCreateComponent_div_5_div_11_div_8_div_1_div_5_div_1_div_1_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 43);
    i0.ɵɵtemplate(1, OnboardingCreateComponent_div_5_div_11_div_8_div_1_div_5_div_1_div_1_div_5_div_1_Template, 2, 2, "div", 44);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const child_r338 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", child_r338.forms);
} }
function OnboardingCreateComponent_div_5_div_11_div_8_div_1_div_5_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r352 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 18);
    i0.ɵɵelementStart(1, "div", 19);
    i0.ɵɵelementStart(2, "div", 20);
    i0.ɵɵelementStart(3, "lib-sub-create-onboarding", 40);
    i0.ɵɵlistener("onDrop", function OnboardingCreateComponent_div_5_div_11_div_8_div_1_div_5_div_1_div_1_Template_lib_sub_create_onboarding_onDrop_3_listener($event) { i0.ɵɵrestoreView(_r352); const ctx_r351 = i0.ɵɵnextContext(7); return ctx_r351.drop($event); });
    i0.ɵɵelementStart(4, "div", 41);
    i0.ɵɵtemplate(5, OnboardingCreateComponent_div_5_div_11_div_8_div_1_div_5_div_1_div_1_div_5_Template, 2, 1, "div", 42);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r353 = i0.ɵɵnextContext();
    const child_r338 = ctx_r353.$implicit;
    const k_r339 = ctx_r353.index;
    const ctx_r354 = i0.ɵɵnextContext(3);
    const field_r333 = ctx_r354.$implicit;
    const j_r334 = ctx_r354.index;
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("field", child_r338)("length", field_r333 == null ? null : field_r333.forms == null ? null : field_r333.forms.length)("i", j_r334)("j", k_r339);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", child_r338.forms);
} }
function OnboardingCreateComponent_div_5_div_11_div_8_div_1_div_5_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 45);
    i0.ɵɵtemplate(1, OnboardingCreateComponent_div_5_div_11_div_8_div_1_div_5_div_1_div_1_Template, 6, 5, "div", 39);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const child_r338 = ctx.$implicit;
    const ctx_r337 = i0.ɵɵnextContext(6);
    i0.ɵɵproperty("id", child_r338.key);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", child_r338.expandOnboarding && ctx_r337.onCheckConditionLocationValue(child_r338.isConditional, child_r338.conditionLocation, child_r338.conditionValue));
} }
function OnboardingCreateComponent_div_5_div_11_div_8_div_1_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 43);
    i0.ɵɵtemplate(1, OnboardingCreateComponent_div_5_div_11_div_8_div_1_div_5_div_1_Template, 2, 2, "div", 44);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const field_r333 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", field_r333.forms);
} }
function OnboardingCreateComponent_div_5_div_11_div_8_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r357 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 18);
    i0.ɵɵelementStart(1, "div", 19);
    i0.ɵɵelementStart(2, "div", 20);
    i0.ɵɵelementStart(3, "lib-sub-create-onboarding", 40);
    i0.ɵɵlistener("onDrop", function OnboardingCreateComponent_div_5_div_11_div_8_div_1_Template_lib_sub_create_onboarding_onDrop_3_listener($event) { i0.ɵɵrestoreView(_r357); const ctx_r356 = i0.ɵɵnextContext(4); return ctx_r356.drop($event); });
    i0.ɵɵelementStart(4, "div", 41);
    i0.ɵɵtemplate(5, OnboardingCreateComponent_div_5_div_11_div_8_div_1_div_5_Template, 2, 1, "div", 42);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r358 = i0.ɵɵnextContext();
    const field_r333 = ctx_r358.$implicit;
    const j_r334 = ctx_r358.index;
    const ctx_r359 = i0.ɵɵnextContext();
    const category_r323 = ctx_r359.$implicit;
    const i_r324 = ctx_r359.index;
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("field", field_r333)("length", category_r323 == null ? null : category_r323.forms == null ? null : category_r323.forms.length)("i", i_r324)("j", j_r334);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", field_r333.forms);
} }
function OnboardingCreateComponent_div_5_div_11_div_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 17);
    i0.ɵɵtemplate(1, OnboardingCreateComponent_div_5_div_11_div_8_div_1_Template, 6, 5, "div", 39);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const field_r333 = ctx.$implicit;
    const ctx_r326 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("id", field_r333.key);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", field_r333.expandOnboarding && ctx_r326.onCheckConditionLocationValue(field_r333.isConditional, field_r333.conditionLocation, field_r333.conditionValue));
} }
function OnboardingCreateComponent_div_5_div_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 11);
    i0.ɵɵelementStart(1, "div", 12);
    i0.ɵɵelementStart(2, "div", 13);
    i0.ɵɵelementStart(3, "h4", 14);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(5, OnboardingCreateComponent_div_5_div_11_mat_select_5_Template, 2, 4, "mat-select", 36);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "div", 37);
    i0.ɵɵelementContainerStart(7);
    i0.ɵɵtemplate(8, OnboardingCreateComponent_div_5_div_11_div_8_Template, 2, 2, "div", 16);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const category_r323 = ctx.$implicit;
    i0.ɵɵproperty("id", category_r323.name);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(category_r323.name);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", category_r323.selector);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", category_r323.forms);
} }
function OnboardingCreateComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 5);
    i0.ɵɵelementStart(1, "div", 6);
    i0.ɵɵelementStart(2, "div", 29);
    i0.ɵɵelementStart(3, "h3", 30);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "ol");
    i0.ɵɵtemplate(6, OnboardingCreateComponent_div_5_li_6_Template, 5, 5, "li", 31);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "button", 32);
    i0.ɵɵtext(8, " Soumettre ma fiche de poste ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "div", 33);
    i0.ɵɵelementStart(10, "div", 9);
    i0.ɵɵtemplate(11, OnboardingCreateComponent_div_5_div_11_Template, 9, 4, "div", 10);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r295 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1(" ", ctx_r295.currentTemplate == null ? null : ctx_r295.currentTemplate.Name, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r295.categories);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngForOf", ctx_r295.categories);
} }
const _c1 = function () { return { "display": "none" }; };
export class OnboardingCreateComponent {
    constructor(fb, service, route, router, dialog) {
        this.fb = fb;
        this.service = service;
        this.route = route;
        this.router = router;
        this.dialog = dialog;
        this.currentProfil = {};
        this.canExit = true;
        this.tags = [];
        this.id = "0";
        this.parent = [];
        this.editIndex = null;
        this.showProfileName = false;
        this.selectedMenu = 0;
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
        this.showMode = false;
    }
    isObject(obj) {
        return obj !== undefined && obj !== null && obj.constructor == Object;
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
            this.onCreateDynamicForm();
            this.id = this.route.snapshot.paramMap.get("id");
            setTimeout(() => __awaiter(this, void 0, void 0, function* () {
                yield this.service.getAllProfil();
            }), 500);
            this.service._templates.subscribe((data) => {
                this.templates = data;
            });
            this.id = this.route.snapshot.paramMap.get("id");
            if (this.id && this.id !== "0") {
                this.showMode = true;
                setTimeout(() => __awaiter(this, void 0, void 0, function* () {
                    var _a;
                    this.currentOnboarding = yield this.service.getOnboarding(this.id);
                    //console.log(this.currentOnboarding);
                    this.form.patchValue(this.currentOnboarding);
                    this.categories = this.currentOnboarding.categories;
                    this.currentTemplate = (_a = this.currentOnboarding) === null || _a === void 0 ? void 0 : _a.vtemplates[0];
                    if (this.currentOnboarding.TemplateId) {
                        this.onSelectContactTemplate();
                    }
                }), 500);
            }
            else {
                setTimeout(() => __awaiter(this, void 0, void 0, function* () {
                    //this.currentOnboarding = await this.service.getOnboarding(this.id);
                    //this.form.patchValue(this.currentOnboarding)
                    //this.categories=this.currentOnboarding.categories;
                    //this.currentTemplate=this.currentOnboarding?.vtemplates[0]
                    //this.onSelectContactTemplate()
                }), 500);
            }
        });
    }
    onCreateDynamicForm() {
        this.form = this.fb.group({
            TemplateId: [0, Validators.required]
        });
    }
    onSelectContactTemplate() {
        this.isSelected = true;
    }
    onSelect(id) {
        this.currentTemplate = this.templates.find((t) => t._id === id);
        this.categories = this.currentTemplate.categories
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
    }
    existSubForm(forms) {
        let exist = false;
        if (forms) {
            for (const sub of forms) {
                if (sub.forms) {
                    exist = true;
                }
            }
        }
        return exist;
    }
    onChangeCategory() {
        const checkMandatory = (field) => !!field.value && field.isMandatory && field.type !== "checkbox_multiple" || field.isConditional || !field.isMandatory || field.type === "checkbox_multiple";
        return this.categories.every((cat) => cat.forms.every((field) => {
            if (field.forms) {
                return field.forms.every((form) => {
                    if (form.forms) {
                        return form.forms.every((child) => {
                            return checkMandatory(child);
                        });
                    }
                    return checkMandatory(form);
                });
            }
            return checkMandatory(field);
        }));
    }
    onSubmit() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.form.valid && this.onChangeCategory()) {
                const result = this.id && this.id !== "0"
                    ? yield this.service.updateOnboarding(Object.assign(Object.assign({}, this.form.value), { categories: this.categories, _id: this.id }))
                    : yield this.service.createOnboarding(Object.assign(Object.assign({}, this.form.value), { categories: this.categories }));
                if (result) {
                    if (this.id && this.id !== "0") {
                        this.categories = result.categories;
                        this.currentOnboarding = result;
                    }
                    yield this.service.getAllProfil();
                    this.canExit = true;
                    this.showMode = true;
                    this.router.navigate([this.service.mainPath + '/requests']);
                }
                else {
                    console.log("errror......");
                }
            }
        });
    }
    onExpendMore(event, ...params) {
        if (event) {
            if (event.event) {
                event.event.preventDefault();
            }
            // if (event.field && !event.field.expandMore) {
            //   for (let i = 0; i < this.categories.length; i++) {
            //     this.categories[i].expandMore = false;
            //     if (this.categories[i].forms) {
            //       for (let j = 0; j < this.categories[i].forms.length; j++) {
            //         this.categories[i].forms[j].expandMore = false;
            //       }
            //     }
            //   }
            // }
        }
        if (params.length === 1) {
            this.categories[params[0]].defaultValue = !this.categories[params[0]].defaultValue;
        }
        else if (params.length === 2) {
            this.currentActive = String(params[0]) + String(params[1]);
            if (this.categories[params[0]].forms[params[1]].defaultValue) {
                this.categories[params[0]].forms[params[1]].defaultValue = false;
            }
            else {
                this.categories[params[0]].defaultValue = true;
                this.categories[params[0]].forms[params[1]].defaultValue = true;
            }
        }
        else if (params.length === 3) {
            if (this.categories[params[0]].forms[params[1]].forms[params[2]].defaultValue) {
                this.categories[params[0]].forms[params[1]].forms[params[2]].defaultValue = false;
            }
            else {
                this.categories[params[0]].defaultValue = true;
                this.categories[params[0]].forms[params[1]].defaultValue = true;
                this.categories[params[0]].forms[params[1]].forms[params[2]].defaultValue = true;
            }
        }
        else {
            if (this.categories[params[0]].forms[params[1]].forms[params[2]].forms[params[3]].defaultValue) {
                this.categories[params[0]].forms[params[1]].forms[params[2]].forms[params[3]].defaultValue = false;
            }
            else {
                this.categories[params[0]].defaultValue = true;
                this.categories[params[0]].forms[params[1]].defaultValue = true;
                this.categories[params[0]].forms[params[1]].forms[params[2]].defaultValue = true;
                this.categories[params[0]].forms[params[1]].forms[params[2]].forms[params[3]].defaultValue = true;
            }
        }
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
    isExpanded(forms) {
        let isExpend = false;
        for (const form of forms) {
            if (form.defaultValue) {
                isExpend = true;
            }
        }
    }
    onCheckConditionLocationValue(iscondition, location, conditionValue) {
        if (!iscondition) {
            return true;
        }
        if (location.level === 1) {
            if (this.categories[location.categoryIndex].forms[location.currentIndex].type === 'checkbox_multiple') {
                const array = this.categories[location.categoryIndex].forms[location.currentIndex].defaultValue.filter((check) => check.checked);
                let checked = false;
                for (var i = 0; i < array.length; i++) {
                    if (array[i].value == conditionValue) {
                        checked = true;
                        break;
                    }
                }
                return checked;
            }
            else {
                return this.categories[location.categoryIndex].forms[location.currentIndex].value === conditionValue;
            }
        }
        else if (location.level === 2) {
            if (this.categories[location.categoryIndex].forms[location.formIndex].forms[location.currentIndex].type === 'checkbox_multiple') {
                const array = this.categories[location.categoryIndex].forms[location.formIndex].forms[location.currentIndex].defaultValue.filter((check) => check.checked);
                let checked = false;
                for (var i = 0; i < array.length; i++) {
                    if (array[i].value == conditionValue) {
                        checked = true;
                        break;
                    }
                }
                return checked;
            }
            else {
                return this.categories[location.categoryIndex].forms[location.formIndex].forms[location.currentIndex].value === conditionValue;
            }
        }
        else if (location.level === 3) {
            if (this.categories[location.categoryIndex].forms[location.formIndex].forms[location.subIndex].forms[location.currentIndex].type === 'checkbox_multiple') {
                const array = this.categories[location.categoryIndex].forms[location.formIndex].forms[location.subIndex].forms[location.currentIndex].defaultValue.filter((check) => check.checked);
                let checked = false;
                for (var i = 0; i < array.length; i++) {
                    if (array[i].value == conditionValue) {
                        checked = true;
                        break;
                    }
                }
                return checked;
            }
            else {
                return this.categories[location.categoryIndex].forms[location.formIndex].forms[location.subIndex].forms[location.currentIndex].value === conditionValue;
            }
        }
        else {
            return true;
        }
    }
    checkSubForm(forms) {
        let hasSubForm = false;
        for (const form of forms) {
            if (form.forms && form.forms.length > 0) {
                hasSubForm = true;
                break;
            }
        }
        return hasSubForm;
    }
    onSelectMenu(i) {
        this.selectedMenu = i;
    }
}
OnboardingCreateComponent.ɵfac = function OnboardingCreateComponent_Factory(t) { return new (t || OnboardingCreateComponent)(i0.ɵɵdirectiveInject(i1.FormBuilder), i0.ɵɵdirectiveInject(i2.OnboardingService), i0.ɵɵdirectiveInject(i3.ActivatedRoute), i0.ɵɵdirectiveInject(i3.Router), i0.ɵɵdirectiveInject(i4.MatDialog)); };
OnboardingCreateComponent.ɵcmp = i0.ɵɵdefineComponent({ type: OnboardingCreateComponent, selectors: [["create-onboarding"]], decls: 6, vars: 6, consts: [[1, "content"], [4, "ngIf"], [3, "ngStyle", "formGroup", "submit"], ["class", "select-contact", 4, "ngIf"], ["class", "category", 4, "ngIf"], [1, "category"], [1, "side-bar"], ["mat-button", "", 1, "register-button", 3, "click"], [1, "fields", 2, "height", "85vh", "margin-left", "20px", "width", "85%"], [1, "example-list", "mt-20"], ["class", "category-item", 3, "id", 4, "ngFor", "ngForOf"], [1, "category-item", 3, "id"], [1, "field-content"], [1, "field-item"], [1, "category-name"], [1, ""], ["class", "field-category", 3, "id", 4, "ngFor", "ngForOf"], [1, "field-category", 3, "id"], [1, "inner-loop"], [1, "fields-content"], [1, "fields-container"], [4, "ngFor", "ngForOf"], [1, "select-contact"], [1, "select-template"], ["appearance", "outline", 1, "full-width"], ["formControlName", "TemplateId", "required", "", 3, "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], ["mat-raised-button", "", "color", "primary", 3, "disabled", "click"], [3, "value"], [1, "summary"], [1, "template-title"], ["class", "li-title", 3, "class", "click", 4, "ngFor", "ngForOf"], ["mat-button", "", "type", "submit", 1, "register-button"], [1, "fields", 2, "height", "85vh"], [1, "li-title", 3, "click"], [3, "ngxScrollTo"], ["placeholder", "Company", "required", "", "style", "width: 70%;", 3, "ngModel", "ngModelOptions", "ngModelChange", 4, "ngIf"], [1, "category-container"], ["placeholder", "Company", "required", "", 2, "width", "70%", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["class", "inner-loop", 4, "ngIf"], [3, "field", "length", "i", "j", "onDrop"], [1, "child"], ["class", "inner-child", 4, "ngIf"], [1, "inner-child"], ["class", "inner-child-content", 3, "id", 4, "ngFor", "ngForOf"], [1, "inner-child-content", 3, "id"]], template: function OnboardingCreateComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "main");
        i0.ɵɵelementStart(1, "div", 0);
        i0.ɵɵtemplate(2, OnboardingCreateComponent_ng_container_2_Template, 2, 1, "ng-container", 1);
        i0.ɵɵelementStart(3, "form", 2);
        i0.ɵɵlistener("submit", function OnboardingCreateComponent_Template_form_submit_3_listener() { return ctx.onSubmit(); });
        i0.ɵɵtemplate(4, OnboardingCreateComponent_div_4_Template, 13, 5, "div", 3);
        i0.ɵɵtemplate(5, OnboardingCreateComponent_div_5_Template, 12, 3, "div", 4);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", ctx.showMode);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngStyle", ctx.showMode && i0.ɵɵpureFunction0(5, _c1))("formGroup", ctx.form);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !ctx.isSelected);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.isSelected);
    } }, directives: [i5.NgIf, i1.ɵangular_packages_forms_forms_y, i1.NgControlStatusGroup, i5.NgStyle, i1.FormGroupDirective, i6.MatButton, i5.NgForOf, i7.MatFormField, i7.MatLabel, i8.MatSelect, i1.NgControlStatus, i1.FormControlName, i1.RequiredValidator, i9.MatOption, i10.ScrollToDirective, i11.MatIcon, i1.NgModel, i12.SubOnboardingCreateComponent], pipes: [i5.KeyValuePipe], styles: ["main[_ngcontent-%COMP%]{background:no-repeat padding-box #f4f7f9;height:100vh;width:100%;display:flex;flex-direction:column;align-items:center}main[_ngcontent-%COMP%]   .disabled[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{background-color:transparent!important}main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{width:99%;height:100%;padding-left:1%}main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font:bold 32px/30px Nexa Text;letter-spacing:0;color:#171f26;padding-top:20px}main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font:20px/26px Nexa Text;letter-spacing:0;color:#171f26}main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   p.sub-title[_ngcontent-%COMP%]{max-width:400px}main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .select-contact[_ngcontent-%COMP%]{max-width:70%;margin:5% auto auto;background:no-repeat padding-box #fff;border:1px solid #dce4e9;border-radius:6px;padding:5%}main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .select-contact[_ngcontent-%COMP%]   .select-template[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;justify-content:space-between;margin-top:50px}main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .select-contact[_ngcontent-%COMP%]   .select-template[_ngcontent-%COMP%]   .full-width[_ngcontent-%COMP%]{width:40%}main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .select-contact[_ngcontent-%COMP%]   .select-template[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{float:right;text-align:center;border:1px solid #543cb6;border-radius:7px;padding:1em 2em;display:flex;align-items:center;background-color:transparent;font:bold 15px/17px Nexa;letter-spacing:0;color:#543cb6;-ms-grid-row-align:center;align-self:center;width:220px}main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .category[_ngcontent-%COMP%]   .onboarding-mat-stepper[_ngcontent-%COMP%]   mat-horizontal-stepper[_ngcontent-%COMP%]   .next-step[_ngcontent-%COMP%]{float:right}main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{display:flex;height:100%;width:100%}main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .select-contact[_ngcontent-%COMP%]{max-width:70%;margin:5% auto auto;background:no-repeat padding-box #fff;border:1px solid #dce4e9;border-radius:6px;padding:5%}main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .select-contact[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{float:right;text-align:center;border:1px solid #543cb6;border-radius:7px;padding:.7em 2em .5em;display:flex;align-items:center;background-color:transparent;font:bold 15px/17px Nexa;letter-spacing:0;color:#543cb6;align-self:flex-end}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]{width:786px;background:no-repeat padding-box #fff;border:1px solid #dce4e9;border-radius:6px;opacity:1;margin:auto;padding:0 25px;-ms-grid-row-align:center;align-self:center}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{text-align:center;font:900 32px/48px Nexa;letter-spacing:0;color:#171f26}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font:18px/24px Nexa Text;letter-spacing:0;color:#171f26}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .profil-name-content[_ngcontent-%COMP%]{display:flex;align-items:center;position:relative}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .profil-name-content[_ngcontent-%COMP%]   .add-picto[_ngcontent-%COMP%]{margin-right:15px;min-width:50px;width:30px;padding:9px 12px}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .profil-name-content[_ngcontent-%COMP%]   .add-picto[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin-right:10px}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .profil-name-content[_ngcontent-%COMP%]   .list-picto[_ngcontent-%COMP%]{position:absolute;height:200px;width:100%;background:no-repeat padding-box #fff;border:1px solid #171f26;border-radius:8px;top:100%;z-index:1}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .profil-name-content[_ngcontent-%COMP%]   .list-picto[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin:15px;border:none;font-size:40px}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .profil-name-content[_ngcontent-%COMP%]   .list-picto[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]:hover{color:#830b6b!important;cursor:pointer}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .box-title-content[_ngcontent-%COMP%]{width:100%;margin:25px auto}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font:900 32px/38px Nexa;letter-spacing:0;color:#171f26}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font:15px/26px Nexa Text;letter-spacing:0;color:#171f26;text-align:center}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .link-create-profil[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:center}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{text-align:center;border:1px solid #543cb6;border-radius:7px;padding:.7em 2em .5em;display:flex;align-items:center;background-color:transparent;font:bold 15px/17px Nexa;letter-spacing:0;color:#543cb6}main[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:space-between}.expand-button[_ngcontent-%COMP%]{color:#5a607f!important;background-color:transparent!important;box-shadow:none!important}.category-name[_ngcontent-%COMP%]{text-align:left;font:bold 22px/48px Nexa Text;letter-spacing:0;color:#171f26;padding-left:15px}.full-width[_ngcontent-%COMP%]{width:100%}.field-action[_ngcontent-%COMP%]{width:10%}.field-size[_ngcontent-%COMP%]{width:90%;margin:auto 2% auto auto}  .mat-form-field-appearance-fill .mat-form-field-flex{background-color:#fff}  .mat-form-field-appearance-fill .mat-form-field-underline::before{background-color:transparent}[_nghost-%COMP%]     .mat-checkbox-checked.mat-accent .mat-checkbox-background, [_nghost-%COMP%]     .mat-checkbox-indeterminate.mat-accent .mat-checkbox-background{background-color:transparent}.category-action[_ngcontent-%COMP%]{display:flex;width:100%}.delete-field[_ngcontent-%COMP%]{margin:auto 2%}.radio-group[_ngcontent-%COMP%]   .mat-radio-button[_ngcontent-%COMP%]{margin-right:10px}.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary[_ngcontent-%COMP%]{background-color:#3f51b5;color:#fff;min-height:20px;font-size:10px}.move-icons[_ngcontent-%COMP%]{cursor:move}.category-item[_ngcontent-%COMP%], .cdk-drag-placeholder[_ngcontent-%COMP%]{display:flex;align-items:baseline;width:100%;border:1px solid #dce4e9;border-radius:8px;background-color:#fff;margin-top:10px;min-height:60px}.category-item[_ngcontent-%COMP%]   .left-action[_ngcontent-%COMP%], .cdk-drag-placeholder[_ngcontent-%COMP%]   .left-action[_ngcontent-%COMP%]{height:auto;background-color:#49a094;padding-top:7px;width:40px;-ms-grid-row-align:stretch;align-self:stretch;border-top-left-radius:8px;border-bottom-left-radius:8px}.category-item[_ngcontent-%COMP%]   .left-action[_ngcontent-%COMP%]   .transparent-button[_ngcontent-%COMP%], .cdk-drag-placeholder[_ngcontent-%COMP%]   .left-action[_ngcontent-%COMP%]   .transparent-button[_ngcontent-%COMP%]{background-color:transparent;box-shadow:none;width:40px;padding:0;margin:0;min-width:auto;color:#fff}.category-item[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%], .cdk-drag-placeholder[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%]{width:100%;-ms-grid-row-align:center;align-self:center}.category-item[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%], .cdk-drag-placeholder[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;border:transparent!important}.category-item[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]   .mat-form-field-wrapper[_ngcontent-%COMP%]   .mat-form-field-flex[_ngcontent-%COMP%]   .mat-form-field-outline[_ngcontent-%COMP%], .category-item[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%]   .mat-form-field-outline[_ngcontent-%COMP%], .cdk-drag-placeholder[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]   .mat-form-field-wrapper[_ngcontent-%COMP%]   .mat-form-field-flex[_ngcontent-%COMP%]   .mat-form-field-outline[_ngcontent-%COMP%], .cdk-drag-placeholder[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%]   .mat-form-field-outline[_ngcontent-%COMP%]{color:transparent!important}.category-item[_ngcontent-%COMP%]   .category-container[_ngcontent-%COMP%], .cdk-drag-placeholder[_ngcontent-%COMP%]   .category-container[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;justify-content:flex-start;align-items:flex-end}.cdk-drag-preview[_ngcontent-%COMP%]{box-sizing:border-box;border-radius:4px;opacity:1}.cdk-drag-preview[_ngcontent-%COMP%]   .expand-button[_ngcontent-%COMP%]{color:#5a607f!important;background-color:transparent!important;box-shadow:none!important;margin-right:28px!important}.cdk-drag-placeholder[_ngcontent-%COMP%]{opacity:0}.cdk-drag-animating[_ngcontent-%COMP%], .example-list.cdk-drop-list-dragging[_ngcontent-%COMP%]   .category-item[_ngcontent-%COMP%]:not(.cdk-drag-placeholder){transition:transform 250ms cubic-bezier(0,0,.2,1)}.child[_ngcontent-%COMP%]{margin-left:0}.child[_ngcontent-%COMP%]   .inner-child[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap}.category[_ngcontent-%COMP%]{display:flex;flex-direction:row;width:100vw}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]{width:250px;background-color:#fff;margin:10px 20px;border-radius:5px;border:1px solid #dbcbcb96}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:15px;border-bottom:1px solid #dbcbcb96;margin:10px;padding-bottom:5px;font-family:\"Nexa Text\";display:flex;flex-direction:column;justify-content:space-between;align-items:flex-start}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-weight:600}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin-left:15px;cursor:pointer}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   h3.template-title[_ngcontent-%COMP%]{font:900 24px/36px Nexa Text;letter-spacing:0;color:#171f26}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]{font-weight:600;margin-left:-27px;font-size:15px;list-style:none}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:5px;margin:5px auto;cursor:pointer;text-align:left;font:12px/19px Nexa Text;letter-spacing:0;color:#535760}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]{padding-left:0;margin-left:0}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.li-title[_ngcontent-%COMP%]{font-size:14px;font-weight:600;margin-right:10px}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.li-title[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:140px;outline:0;border:1px dashed grey}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.li-title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:inline-flex;align-items:center;width:100%}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.li-title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin-left:10px}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.li-title.active[_ngcontent-%COMP%], .category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.li-title[_ngcontent-%COMP%]:hover{background:no-repeat padding-box #e5e8ee;border-radius:5px}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.sub-title[_ngcontent-%COMP%]{list-style:none;padding-left:20px}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.sub-title.active[_ngcontent-%COMP%], .category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.sub-title.active[_ngcontent-%COMP%]::marker, .category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.sub-title[_ngcontent-%COMP%]:hover{font-weight:600;background:no-repeat padding-box #e5e8ee;border-radius:5px}.category[_ngcontent-%COMP%]   .fields[_ngcontent-%COMP%]{width:90%;max-height:100vh;overflow:auto;margin-right:.5%;overflow-x:hidden}.category[_ngcontent-%COMP%]   .disabled[_ngcontent-%COMP%]{background-color:#f4f7f9!important}.category[_ngcontent-%COMP%]   .expand-button[_ngcontent-%COMP%]{color:#5a607f!important;background-color:transparent!important;box-shadow:none!important;margin-right:28px!important}.category[_ngcontent-%COMP%]   .expand-button[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%]{font-size:40px}.category[_ngcontent-%COMP%]   .transparent-button[_ngcontent-%COMP%]{background-color:transparent;box-shadow:none;width:40px;padding:0;margin:0;margin-left:0!important;min-width:auto;color:#fff}.add-button-sub-category[_ngcontent-%COMP%]{width:95.5%!important;margin-bottom:22px;margin-left:22px}.add-button-container[_ngcontent-%COMP%]{background:no-repeat padding-box #fff;border:1px dashed #dce4e9;border-radius:8px;margin-top:10px;padding:10px;display:flex;justify-content:center;align-items:center;width:98.5%;margin-bottom:22px}.add-button-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{display:flex;align-items:center;background-color:transparent;border:none;cursor:pointer;font:17px/26px Nexa Text;letter-spacing:0;color:#c2c8d5;box-shadow:none}.add-category[_ngcontent-%COMP%]{border:1px dashed #c2c8d5;border-radius:5px;margin-left:10px;margin-bottom:10px;font:bold 12px/19px Nexa Text;letter-spacing:0;color:#c2c8d5;width:92%}.inner-loop[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]{display:flex;height:100%;margin:0;width:100%}.inner-loop[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]   .button-action[_ngcontent-%COMP%]{background-color:#6fe8d7;-ms-grid-row-align:stretch;align-self:stretch;margin-top:0;margin-left:20px;border-bottom-left-radius:8px;border-top-left-radius:8px}.inner-loop[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]   .button-action[_ngcontent-%COMP%]   .transparent-button[_ngcontent-%COMP%]{background-color:transparent;box-shadow:none;width:40px;padding:0;margin:0;min-width:auto;color:#fff}.inner-loop[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]   .child-2-background[_ngcontent-%COMP%]{background-color:#cffaf4!important}.inner-loop[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]   .child-3-background[_ngcontent-%COMP%]{background-color:#e5e8ee!important}.inner-loop[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]   .fields-container[_ngcontent-%COMP%]{width:100%;padding-left:10px;padding-right:10px;padding-top:5px}.inner-loop[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]   .fields-container[_ngcontent-%COMP%]   lib-sub-category[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;width:100%}.inner-loop[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]   .fields-container[_ngcontent-%COMP%]   lib-sub-category[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]   .button-action[_ngcontent-%COMP%]{background-color:#6fe8d7;height:100%;margin:auto 15px auto auto;display:flex}.inner-loop[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]   .fields-container[_ngcontent-%COMP%]   lib-sub-category[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]   .button-action[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{box-shadow:none;background-color:transparent;color:#fff}.side-bar[_ngcontent-%COMP%]{display:flex;flex-direction:column}.register-button[_ngcontent-%COMP%]{background:no-repeat padding-box #171f26!important;border:2px solid #192128!important;border-radius:8px;color:#fff!important;width:85%;margin-left:22px!important;border:none!important}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(OnboardingCreateComponent, [{
        type: Component,
        args: [{
                selector: "create-onboarding",
                templateUrl: "./onboarding-create.component.html",
                styleUrls: ["./onboarding-create.component.scss"],
            }]
    }], function () { return [{ type: i1.FormBuilder }, { type: i2.OnboardingService }, { type: i3.ActivatedRoute }, { type: i3.Router }, { type: i4.MatDialog }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib25ib2FyZGluZy1jcmVhdGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vb25ib2FyZGluZy8iLCJzb3VyY2VzIjpbImxpYi9vbmJvYXJkaW5nLWNyZWF0ZS9vbmJvYXJkaW5nLWNyZWF0ZS5jb21wb25lbnQudHMiLCJsaWIvb25ib2FyZGluZy1jcmVhdGUvb25ib2FyZGluZy1jcmVhdGUuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDbEQsT0FBTyxFQUEwQixVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUdwRSxPQUFPLEVBQWUsZUFBZSxFQUFFLGlCQUFpQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFekYsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0scURBQXFELENBQUM7QUFDNUYsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sbURBQW1ELENBQUM7Ozs7Ozs7Ozs7Ozs7OztJQ29DakMsNkJBQ0k7SUFBQSxZQUFnQjtJQUFBLHFCQUFLO0lBQUEscUJBQ3pCO0lBQUEsMEJBQWU7OztJQURYLGVBQWdCO0lBQWhCLGlEQUFnQjs7O0lBSWhCLDZCQUNJO0lBQUEsOEJBQ0k7SUFBQSxZQUNKO0lBQUEsaUJBQVM7SUFBQyxxQkFFVjtJQUFBLFlBQWU7SUFBQSxxQkFBSTtJQUFBLHFCQUN2QjtJQUFBLDBCQUFlOzs7SUFKUCxlQUNKO0lBREksOENBQ0o7SUFFQSxlQUFlO0lBQWYsZ0RBQWU7OztJQU52Qiw2QkFDSTtJQUFBLDZJQUNJOztJQU1SLDBCQUFlOzs7SUFQRyxlQUEyQztJQUEzQyxnRUFBMkM7OztJQWI3RSwrQkFFSTtJQUFBLCtCQUNJO0lBQUEsK0JBRUk7SUFBQSwrQkFDSTtJQUFBLDhCQUFRO0lBQUEsWUFBYTtJQUFBLGlCQUFTO0lBQUMscUJBRS9CO0lBQUEsNkhBQ0k7SUFHSiw2SEFDSTtJQStEUixpQkFBTTtJQUNWLGlC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R0FBQyxDQUFDLEVBQUM7Z0JBQ25DLFVBQVUsR0FBQyxJQUFJLENBQUM7Z0JBQ2hCLE1BQU07YUFDUDtTQUNGO1FBQ0QsT0FBTyxVQUFVLENBQUE7SUFDbkIsQ0FBQztJQUVELFlBQVksQ0FBQyxDQUFDO1FBQ1osSUFBSSxDQUFDLFlBQVksR0FBQyxDQUFDLENBQUE7SUFDckIsQ0FBQzs7a0dBeFhVLHlCQUF5Qjs4REFBekIseUJBQXlCO1FDZHRDLDRCQUNJO1FBQUEsOEJBQ0k7UUFBQSw0RkFDSTtRQTJISiwrQkFDSTtRQURpRSxzR0FBVSxjQUFVLElBQUM7UUFDdEYsMkVBQ0k7UUFtQkosMkVBQ0k7UUFpSFIsaUJBQU87UUFDWCxpQkFBTTtRQUVWLGlCQUFPOztRQXRRZSxlQUFnQjtRQUFoQixtQ0FBZ0I7UUE0SHhCLGVBQTJDO1FBQTNDLG9FQUEyQyx1QkFBQTtRQUNqQixlQUFtQjtRQUFuQixzQ0FBbUI7UUFvQnpCLGVBQWtCO1FBQWxCLHFDQUFrQjs7a0REckl2Qyx5QkFBeUI7Y0FMckMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxtQkFBbUI7Z0JBQzdCLFdBQVcsRUFBRSxvQ0FBb0M7Z0JBQ2pELFNBQVMsRUFBRSxDQUFDLG9DQUFvQyxDQUFDO2FBQ2xEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1CdWlsZGVyLCBGb3JtR3JvdXAsIFZhbGlkYXRvcnMgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcbmltcG9ydCB7IE9uYm9hcmRpbmdTZXJ2aWNlIH0gZnJvbSBcIi4uL29uYm9hcmRpbmcuc2VydmljZVwiO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IENka0RyYWdEcm9wLCBtb3ZlSXRlbUluQXJyYXksIHRyYW5zZmVyQXJyYXlJdGVtIH0gZnJvbSBcIkBhbmd1bGFyL2Nkay9kcmFnLWRyb3BcIjtcbmltcG9ydCB7IE1hdERpYWxvZyB9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbC9kaWFsb2dcIjtcbmltcG9ydCB7IFVwZGF0ZVByb2ZpbENvbXBvbmVudCB9IGZyb20gJy4uL2NvbXBvbmVudHMvdXBkYXRlLXByb2ZpbC91cGRhdGUtcHJvZmlsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBFeGl0Q29uZmlybUNvbXBvbmVudCB9IGZyb20gJy4uL2NvbXBvbmVudHMvZXhpdC1jb25maXJtL2V4aXQtY29uZmlybS5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwiY3JlYXRlLW9uYm9hcmRpbmdcIixcbiAgdGVtcGxhdGVVcmw6IFwiLi9vbmJvYXJkaW5nLWNyZWF0ZS5jb21wb25lbnQuaHRtbFwiLFxuICBzdHlsZVVybHM6IFtcIi4vb25ib2FyZGluZy1jcmVhdGUuY29tcG9uZW50LnNjc3NcIl0sXG59KVxuZXhwb3J0IGNsYXNzIE9uYm9hcmRpbmdDcmVhdGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBmb3JtOiBGb3JtR3JvdXA7XG4gIGN1cnJlbnRQcm9maWw6IGFueSA9IHt9O1xuICBjYW5FeGl0PXRydWU7XG4gIHRhZ3MgPSBbXTtcbiAgaWQgPSBcIjBcIjtcbiAgcGFyZW50ID0gW107XG4gIGVkaXRJbmRleD1udWxsO1xuICBzaG93UHJvZmlsZU5hbWUgPSBmYWxzZTtcbiAgc2VsZWN0ZWRNZW51PTA7XG4gIHRlbXBsYXRlczogYW55O1xuICBjb250YWN0czogYW55O1xuICBtYXRJY29uTGlzdCA9IFtcbiAgICB7IG5hbWU6ICdkZXZlbG9wZXJfYm9hcmQnIH0sXG4gICAgeyBuYW1lOiAnY29udGFjdF9waG9uZScgfSxcbiAgICB7IG5hbWU6ICdjb250YWN0X21haWwnIH0sXG4gICAgeyBuYW1lOiAncGxheV9jaXJjbGVfZmlsbGVkJyB9LFxuICAgIHsgbmFtZTogJ2NvbnRyb2xfY2FtZXJhJyB9LFxuICAgIHsgbmFtZTogJ2V4cGxpY2l0JyB9LFxuICAgIHsgbmFtZTogJ3BlcnNvbicgfSxcbiAgICB7IG5hbWU6ICd2aXNpYmlsaXR5JyB9LFxuICAgIHsgbmFtZTogJ3ZpZGVvX2xhYmVsJyB9LFxuICAgIHsgbmFtZTogJ2FkZF9jaXJjbGUnIH0sXG4gICAgeyBuYW1lOiAnd2F0Y2hfbGF0ZXInIH0sXG4gICAgeyBuYW1lOiAnd2hlcmVfdG9fdm90ZScgfSxcbiAgICB7IG5hbWU6ICd3b3JrJyB9LFxuICAgIHsgbmFtZTogJ3dlYicgfSxcbiAgICB7IG5hbWU6ICd3aGF0c2hvdCcgfSxcbiAgICB7IG5hbWU6ICd3aWZpJyB9LFxuICAgIHsgbmFtZTogJ3dvcmtzcGFjZXMnIH0sXG4gICAgeyBuYW1lOiAnd2JfY2xvdWR5JyB9LFxuICAgIHsgbmFtZTogJ3dhdmVzJyB9LFxuICAgIHsgbmFtZTogJ3dhcm5pbmcnIH0sXG4gICAgeyBuYW1lOiAnc3BhY2VfZGFzJyB9XG4gIF07XG4gIGlzUGljdG9MaXN0U2hvdzogYm9vbGVhbjtcbiAgcGljdG8gPSBcIlwiO1xuICBjdXJyZW50T25ib2FyZGluZzogYW55O1xuICBjdXJyZW50VGVtcGxhdGU6YW55XG4gIGlzU2VsZWN0ZWQ6IGJvb2xlYW47XG4gIGN1cnJlbnRVc2VyOiBhbnk7XG4gIGN1cnJlbnRBY3RpdmU6IGFueTtcbiAgc2hvd01vZGUgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGZiOiBGb3JtQnVpbGRlciwgXG4gICAgcHVibGljIHNlcnZpY2U6IE9uYm9hcmRpbmdTZXJ2aWNlLCBcbiAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSwgXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICBwcml2YXRlIGRpYWxvZzogTWF0RGlhbG9nXG4gICAgKSB7IH1cbiAgXG4gIGNhdGVnb3JpZXM6IGFueVxuXG4gICBpc09iamVjdChvYmopIHtcbiAgICAgIHJldHVybiBvYmogIT09IHVuZGVmaW5lZCAmJiBvYmogIT09IG51bGwgJiYgb2JqLmNvbnN0cnVjdG9yID09IE9iamVjdDtcbiAgICB9XG5cbiAgY2FuRGVhY3RpdmF0ZSgpe1xuICAgIGlmKCF0aGlzLmNhbkV4aXQpe1xuICAgICAgdGhpcy5kaWFsb2cub3BlbihFeGl0Q29uZmlybUNvbXBvbmVudCx7XG4gICAgICAgIGRhdGE6JydcbiAgICAgIH0pXG4gICAgICByZXR1cm4gdGhpcy5zZXJ2aWNlLmNhbkV4aXQkXG4gICAgfVxuICAgIHJldHVybiB0cnVlICAgIFxuICB9XG4gIFxuICBhc3luYyBuZ09uSW5pdCgpIHtcblxuICAgIHRoaXMub25DcmVhdGVEeW5hbWljRm9ybSgpO1xuICAgIHRoaXMuaWQgPSB0aGlzLnJvdXRlLnNuYXBzaG90LnBhcmFtTWFwLmdldChcImlkXCIpO1xuXG4gICAgc2V0VGltZW91dChhc3luYyAoKSA9PiB7XG4gICAgICBhd2FpdCB0aGlzLnNlcnZpY2UuZ2V0QWxsUHJvZmlsKCk7ICAgICAgXG4gICAgfSwgNTAwKTtcblxuICAgIHRoaXMuc2VydmljZS5fdGVtcGxhdGVzLnN1YnNjcmliZSgoZGF0YSkgPT4ge1xuICAgICAgdGhpcy50ZW1wbGF0ZXMgPSBkYXRhO1xuICAgIH0pO1xuICAgIHRoaXMuaWQgPSB0aGlzLnJvdXRlLnNuYXBzaG90LnBhcmFtTWFwLmdldChcImlkXCIpO1xuICAgIGlmICh0aGlzLmlkICYmIHRoaXMuaWQgIT09IFwiMFwiKSB7XG4gICAgICB0aGlzLnNob3dNb2RlID0gdHJ1ZTtcbiAgICAgIHNldFRpbWVvdXQoYXN5bmMgKCkgPT4ge1xuICAgICAgICB0aGlzLmN1cnJlbnRPbmJvYXJkaW5nID0gYXdhaXQgdGhpcy5zZXJ2aWNlLmdldE9uYm9hcmRpbmcodGhpcy5pZCk7XG4gICAgICAgIC8vY29uc29sZS5sb2codGhpcy5jdXJyZW50T25ib2FyZGluZyk7XG4gICAgICAgIHRoaXMuZm9ybS5wYXRjaFZhbHVlKHRoaXMuY3VycmVudE9uYm9hcmRpbmcpXG4gICAgICAgIHRoaXMuY2F0ZWdvcmllcz10aGlzLmN1cnJlbnRPbmJvYXJkaW5nLmNhdGVnb3JpZXM7XG4gICAgICAgIHRoaXMuY3VycmVudFRlbXBsYXRlPXRoaXMuY3VycmVudE9uYm9hcmRpbmc/LnZ0ZW1wbGF0ZXNbMF1cbiAgICAgICAgaWYgKHRoaXMuY3VycmVudE9uYm9hcmRpbmcuVGVtcGxhdGVJZCkge1xuICAgICAgICAgIHRoaXMub25TZWxlY3RDb250YWN0VGVtcGxhdGUoKVxuICAgICAgICB9XG4gICAgICB9LCA1MDApO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXRUaW1lb3V0KGFzeW5jICgpID0+IHtcbiAgICAgICAgLy90aGlzLmN1cnJlbnRPbmJvYXJkaW5nID0gYXdhaXQgdGhpcy5zZXJ2aWNlLmdldE9uYm9hcmRpbmcodGhpcy5pZCk7XG4gICAgICAgIC8vdGhpcy5mb3JtLnBhdGNoVmFsdWUodGhpcy5jdXJyZW50T25ib2FyZGluZylcbiAgICAgICAgLy90aGlzLmNhdGVnb3JpZXM9dGhpcy5jdXJyZW50T25ib2FyZGluZy5jYXRlZ29yaWVzO1xuICAgICAgICAvL3RoaXMuY3VycmVudFRlbXBsYXRlPXRoaXMuY3VycmVudE9uYm9hcmRpbmc/LnZ0ZW1wbGF0ZXNbMF1cbiAgICAgICAgLy90aGlzLm9uU2VsZWN0Q29udGFjdFRlbXBsYXRlKClcbiAgICAgIH0sIDUwMCk7XG4gICAgfVxuICB9XG5cbiAgb25DcmVhdGVEeW5hbWljRm9ybSgpIHtcbiAgICB0aGlzLmZvcm0gPSB0aGlzLmZiLmdyb3VwKHtcbiAgICAgIFRlbXBsYXRlSWQ6IFswLCBWYWxpZGF0b3JzLnJlcXVpcmVkXVxuICAgIH0pO1xuICB9XG5cbiAgb25TZWxlY3RDb250YWN0VGVtcGxhdGUoKSB7XG4gICAgdGhpcy5pc1NlbGVjdGVkID0gdHJ1ZTtcbiAgfVxuXG5cbiAgb25TZWxlY3QoaWQpIHtcbiAgICB0aGlzLmN1cnJlbnRUZW1wbGF0ZT0gdGhpcy50ZW1wbGF0ZXMuZmluZCgodCkgPT4gdC5faWQgPT09IGlkKTtcbiAgICB0aGlzLmNhdGVnb3JpZXMgPXRoaXMuY3VycmVudFRlbXBsYXRlLmNhdGVnb3JpZXNcbiAgICAuZmlsdGVyKChjYXQpID0+IGNhdC5leHBhbmRPbmJvYXJkaW5nKVxuICAgIC5tYXAoKGNhdCkgPT4ge1xuICAgICAgaWYgKGNhdC5mb3Jtcykge1xuICAgICAgICBjb25zdCBmID0gY2F0LmZvcm1zXG4gICAgICAgICAgLmZpbHRlcigoZm9ybSkgPT4gZm9ybS5leHBhbmRPbmJvYXJkaW5nKVxuICAgICAgICAgIC5tYXAoKHN1YikgPT4ge1xuICAgICAgICAgICAgaWYgKHN1Yi5mb3Jtcykge1xuICAgICAgICAgICAgICBjb25zdCBzID0gc3ViLmZvcm1zLmZpbHRlcigoY2hpbGQpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoY2hpbGQuZm9ybXMpIHtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGMgPSBjaGlsZC5mb3Jtcy5maWx0ZXIoKGNoKSA9PiBjaC5leHBhbmRPbmJvYXJkaW5nKVxuICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgLi4uY2hpbGQsXG4gICAgICAgICAgICAgICAgICAgIGZvcm1zOiBjXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBjaGlsZDtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uc3ViLFxuICAgICAgICAgICAgICAgIGZvcm1zOiBzXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBzdWI7XG4gICAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAuLi5jYXQsXG4gICAgICAgICAgZm9ybXM6IGZcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGNhdFxuICAgIH0pXG4gIH1cblxuICBleGlzdFN1YkZvcm0oZm9ybXMpe1xuICAgIGxldCBleGlzdD1mYWxzZTtcbiAgICBpZihmb3Jtcyl7XG4gICAgICBmb3IgKGNvbnN0IHN1YiBvZiBmb3Jtcykge1xuICAgICAgICBpZihzdWIuZm9ybXMpe1xuICAgICAgICAgIGV4aXN0PXRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGV4aXN0XG4gIH1cblxuICBvbkNoYW5nZUNhdGVnb3J5KCkge1xuICAgIGNvbnN0IGNoZWNrTWFuZGF0b3J5PShmaWVsZCk9PiAhIWZpZWxkLnZhbHVlICYmIGZpZWxkLmlzTWFuZGF0b3J5ICYmIGZpZWxkLnR5cGUhPT1cImNoZWNrYm94X211bHRpcGxlXCIgIHx8IGZpZWxkLmlzQ29uZGl0aW9uYWwgIHx8ICFmaWVsZC5pc01hbmRhdG9yeSB8fCBmaWVsZC50eXBlPT09XCJjaGVja2JveF9tdWx0aXBsZVwiXG4gICAgcmV0dXJuIHRoaXMuY2F0ZWdvcmllcy5ldmVyeSgoY2F0KSA9PiBjYXQuZm9ybXMuZXZlcnkoKGZpZWxkKSA9PiB7IFxuICAgICAgaWYoZmllbGQuZm9ybXMpe1xuICAgICAgICAgcmV0dXJuIGZpZWxkLmZvcm1zLmV2ZXJ5KChmb3JtKT0+e1xuICAgICAgICAgICBpZihmb3JtLmZvcm1zKXtcbiAgICAgICAgICAgICAgcmV0dXJuIGZvcm0uZm9ybXMuZXZlcnkoKGNoaWxkKT0+e1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIGNoZWNrTWFuZGF0b3J5KGNoaWxkKVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICB9XG4gICAgICAgICAgIHJldHVybiBjaGVja01hbmRhdG9yeShmb3JtKVxuICAgICAgICAgfSlcbiAgICAgIH1cbiAgICAgIHJldHVybiBjaGVja01hbmRhdG9yeShmaWVsZClcbiAgICB9KSk7XG4gIH1cblxuXG4gIGFzeW5jIG9uU3VibWl0KCkge1xuICAgIGlmICh0aGlzLmZvcm0udmFsaWQgJiYgdGhpcy5vbkNoYW5nZUNhdGVnb3J5KCkpIHsgXG4gICAgICBjb25zdCByZXN1bHQgPVxuICAgICAgICB0aGlzLmlkICYmIHRoaXMuaWQgIT09IFwiMFwiXG4gICAgICAgICAgPyBhd2FpdCB0aGlzLnNlcnZpY2UudXBkYXRlT25ib2FyZGluZyh7XG4gICAgICAgICAgICAuLi50aGlzLmZvcm0udmFsdWUsXG4gICAgICAgICAgICBjYXRlZ29yaWVzOiB0aGlzLmNhdGVnb3JpZXMsXG4gICAgICAgICAgICBfaWQ6dGhpcy5pZFxuICAgICAgICAgIH0pXG4gICAgICAgICAgOiBhd2FpdCB0aGlzLnNlcnZpY2UuY3JlYXRlT25ib2FyZGluZyh7XG4gICAgICAgICAgICAuLi50aGlzLmZvcm0udmFsdWUsXG4gICAgICAgICAgICBjYXRlZ29yaWVzOiB0aGlzLmNhdGVnb3JpZXNcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBcbiAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgaWYgKHRoaXMuaWQgJiYgdGhpcy5pZCAhPT0gXCIwXCIpIHtcbiAgICAgICAgICB0aGlzLmNhdGVnb3JpZXMgPSByZXN1bHQuY2F0ZWdvcmllcztcbiAgICAgICAgICB0aGlzLmN1cnJlbnRPbmJvYXJkaW5nID0gcmVzdWx0O1xuICAgICAgICB9XG4gICAgICAgIGF3YWl0IHRoaXMuc2VydmljZS5nZXRBbGxQcm9maWwoKTtcbiAgICAgICAgdGhpcy5jYW5FeGl0PXRydWU7IFxuICAgICAgICB0aGlzLnNob3dNb2RlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW3RoaXMuc2VydmljZS5tYWluUGF0aCsnL3JlcXVlc3RzJ10pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJlcnJyb3IuLi4uLi5cIik7XG4gICAgICB9XG4gICAgfVxuICB9XG5cblxuICBvbkV4cGVuZE1vcmUoZXZlbnQsIC4uLnBhcmFtcykge1xuICAgIGlmIChldmVudCkge1xuICAgICAgaWYgKGV2ZW50LmV2ZW50KSB7XG4gICAgICAgIGV2ZW50LmV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB9XG4gICAgICAvLyBpZiAoZXZlbnQuZmllbGQgJiYgIWV2ZW50LmZpZWxkLmV4cGFuZE1vcmUpIHtcbiAgICAgIC8vICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmNhdGVnb3JpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIC8vICAgICB0aGlzLmNhdGVnb3JpZXNbaV0uZXhwYW5kTW9yZSA9IGZhbHNlO1xuICAgICAgLy8gICAgIGlmICh0aGlzLmNhdGVnb3JpZXNbaV0uZm9ybXMpIHtcbiAgICAgIC8vICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5jYXRlZ29yaWVzW2ldLmZvcm1zLmxlbmd0aDsgaisrKSB7XG4gICAgICAvLyAgICAgICAgIHRoaXMuY2F0ZWdvcmllc1tpXS5mb3Jtc1tqXS5leHBhbmRNb3JlID0gZmFsc2U7XG4gICAgICAvLyAgICAgICB9XG4gICAgICAvLyAgICAgfVxuICAgICAgLy8gICB9XG4gICAgICAvLyB9XG5cbiAgICB9XG4gICAgaWYgKHBhcmFtcy5sZW5ndGggPT09IDEpIHtcbiAgICAgIHRoaXMuY2F0ZWdvcmllc1twYXJhbXNbMF1dLmRlZmF1bHRWYWx1ZSA9ICF0aGlzLmNhdGVnb3JpZXNbcGFyYW1zWzBdXS5kZWZhdWx0VmFsdWU7XG4gICAgfSBlbHNlIGlmIChwYXJhbXMubGVuZ3RoID09PSAyKSB7XG4gICAgICB0aGlzLmN1cnJlbnRBY3RpdmU9U3RyaW5nKHBhcmFtc1swXSkgKyBTdHJpbmcocGFyYW1zWzFdKVxuICAgICAgaWYgKHRoaXMuY2F0ZWdvcmllc1twYXJhbXNbMF1dLmZvcm1zW3BhcmFtc1sxXV0uZGVmYXVsdFZhbHVlKSB7XG4gICAgICAgIHRoaXMuY2F0ZWdvcmllc1twYXJhbXNbMF1dLmZvcm1zW3BhcmFtc1sxXV0uZGVmYXVsdFZhbHVlID0gZmFsc2U7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNhdGVnb3JpZXNbcGFyYW1zWzBdXS5kZWZhdWx0VmFsdWUgPSB0cnVlO1xuICAgICAgICB0aGlzLmNhdGVnb3JpZXNbcGFyYW1zWzBdXS5mb3Jtc1twYXJhbXNbMV1dLmRlZmF1bHRWYWx1ZSA9IHRydWU7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChwYXJhbXMubGVuZ3RoID09PSAzKSB7XG4gICAgICBpZiAodGhpcy5jYXRlZ29yaWVzW3BhcmFtc1swXV0uZm9ybXNbcGFyYW1zWzFdXS5mb3Jtc1twYXJhbXNbMl1dLmRlZmF1bHRWYWx1ZSkge1xuICAgICAgICB0aGlzLmNhdGVnb3JpZXNbcGFyYW1zWzBdXS5mb3Jtc1twYXJhbXNbMV1dLmZvcm1zW3BhcmFtc1syXV0uZGVmYXVsdFZhbHVlID0gZmFsc2U7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNhdGVnb3JpZXNbcGFyYW1zWzBdXS5kZWZhdWx0VmFsdWUgPSB0cnVlO1xuICAgICAgICB0aGlzLmNhdGVnb3JpZXNbcGFyYW1zWzBdXS5mb3Jtc1twYXJhbXNbMV1dLmRlZmF1bHRWYWx1ZSA9IHRydWU7XG4gICAgICAgIHRoaXMuY2F0ZWdvcmllc1twYXJhbXNbMF1dLmZvcm1zW3BhcmFtc1sxXV0uZm9ybXNbcGFyYW1zWzJdXS5kZWZhdWx0VmFsdWUgPSB0cnVlO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodGhpcy5jYXRlZ29yaWVzW3BhcmFtc1swXV0uZm9ybXNbcGFyYW1zWzFdXS5mb3Jtc1twYXJhbXNbMl1dLmZvcm1zW3BhcmFtc1szXV0uZGVmYXVsdFZhbHVlKSB7XG4gICAgICAgIHRoaXMuY2F0ZWdvcmllc1twYXJhbXNbMF1dLmZvcm1zW3BhcmFtc1sxXV0uZm9ybXNbcGFyYW1zWzJdXS5mb3Jtc1twYXJhbXNbM11dLmRlZmF1bHRWYWx1ZSA9IGZhbHNlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jYXRlZ29yaWVzW3BhcmFtc1swXV0uZGVmYXVsdFZhbHVlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5jYXRlZ29yaWVzW3BhcmFtc1swXV0uZm9ybXNbcGFyYW1zWzFdXS5kZWZhdWx0VmFsdWUgPSB0cnVlO1xuICAgICAgICB0aGlzLmNhdGVnb3JpZXNbcGFyYW1zWzBdXS5mb3Jtc1twYXJhbXNbMV1dLmZvcm1zW3BhcmFtc1syXV0uZGVmYXVsdFZhbHVlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5jYXRlZ29yaWVzW3BhcmFtc1swXV0uZm9ybXNbcGFyYW1zWzFdXS5mb3Jtc1twYXJhbXNbMl1dLmZvcm1zW3BhcmFtc1szXV0uZGVmYXVsdFZhbHVlID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBkcm9wKGV2ZW50OiBDZGtEcmFnRHJvcDxzdHJpbmdbXT4pIHtcbiAgICB0aGlzLmNhbkV4aXQ9ZmFsc2U7ICBcbiAgICBpZiAoZXZlbnQucHJldmlvdXNDb250YWluZXIgPT09IGV2ZW50LmNvbnRhaW5lcikge1xuICAgICAgbW92ZUl0ZW1JbkFycmF5KGV2ZW50LmNvbnRhaW5lci5kYXRhLCBldmVudC5wcmV2aW91c0luZGV4LCBldmVudC5jdXJyZW50SW5kZXgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0cmFuc2ZlckFycmF5SXRlbShldmVudC5wcmV2aW91c0NvbnRhaW5lci5kYXRhLCBldmVudC5jb250YWluZXIuZGF0YSwgZXZlbnQucHJldmlvdXNJbmRleCwgZXZlbnQuY3VycmVudEluZGV4KTtcbiAgICB9XG4gIH1cblxuICBpbmdvcmVEZWZhdWx0QWN0aW9uKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIH1cbiAgb25TaG93Q2F0ZWdvcnkoKSB7XG4gICAgdGhpcy5zaG93UHJvZmlsZU5hbWUgPSAhdGhpcy5zaG93UHJvZmlsZU5hbWU7XG4gIH1cblxuICBvblNlbGVjdFBpY3RvKGUsIHBpY3RvKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMuY2FuRXhpdD1mYWxzZTsgIFxuICAgIHRoaXMuZm9ybS5wYXRjaFZhbHVlKHsgUGljdG86IHBpY3RvIH0pO1xuICAgIHRoaXMuaXNQaWN0b0xpc3RTaG93ID0gIXRoaXMuaXNQaWN0b0xpc3RTaG93O1xuICB9XG5cbiAgb25TaG93UGljdG9MaXN0KGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5pc1BpY3RvTGlzdFNob3cgPSAhdGhpcy5pc1BpY3RvTGlzdFNob3c7XG4gIH1cbiBcbiAgb3BlbkRpYWxvZygpIHtcbiAgICBjb25zdCBkaWFsb2dSZWYgPSB0aGlzLmRpYWxvZy5vcGVuKFVwZGF0ZVByb2ZpbENvbXBvbmVudCx7XG4gICAgICBkYXRhOntcbiAgICAgICAgbWF0SWNvbkxpc3Q6dGhpcy5tYXRJY29uTGlzdCxcbiAgICAgICAgZm9ybTp0aGlzLmZvcm0sXG4gICAgICAgIHRhZ3M6dGhpcy50YWdzXG4gICAgICB9XG4gICAgfSk7XG4gICAgZGlhbG9nUmVmLmFmdGVyQ2xvc2VkKCkuc3Vic2NyaWJlKChjb25maXJtZWQ6IGJvb2xlYW4pID0+IHtcbiAgICAgIGlmIChjb25maXJtZWQpIHtcbiAgICAgICAgXG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBpc0V4cGFuZGVkKGZvcm1zOmFueVtdKXtcbiAgIGxldCBpc0V4cGVuZD1mYWxzZTtcbiAgICBmb3IgKGNvbnN0IGZvcm0gb2YgZm9ybXMpIHtcbiAgICAgIGlmKGZvcm0uZGVmYXVsdFZhbHVlKXtcbiAgICAgICAgaXNFeHBlbmQ9dHJ1ZTtcbiAgICAgIH1cbiAgICAgIFxuICAgIH1cbiAgfVxuXG4gIG9uQ2hlY2tDb25kaXRpb25Mb2NhdGlvblZhbHVlKGlzY29uZGl0aW9uLGxvY2F0aW9uLCBjb25kaXRpb25WYWx1ZSl7XG4gICAgaWYoIWlzY29uZGl0aW9uKXtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBpZihsb2NhdGlvbi5sZXZlbD09PTEpe1xuICAgICAgaWYodGhpcy5jYXRlZ29yaWVzW2xvY2F0aW9uLmNhdGVnb3J5SW5kZXhdLmZvcm1zW2xvY2F0aW9uLmN1cnJlbnRJbmRleF0udHlwZT09PSdjaGVja2JveF9tdWx0aXBsZScpe1xuICAgICAgICBjb25zdCBhcnJheT10aGlzLmNhdGVnb3JpZXNbbG9jYXRpb24uY2F0ZWdvcnlJbmRleF0uZm9ybXNbbG9jYXRpb24uY3VycmVudEluZGV4XS5kZWZhdWx0VmFsdWUuZmlsdGVyKChjaGVjayk9PmNoZWNrLmNoZWNrZWQpXG4gICAgICAgIGxldCBjaGVja2VkPWZhbHNlO1xuICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBpZiAoYXJyYXlbaV0udmFsdWUgPT0gY29uZGl0aW9uVmFsdWUpIHtcbiAgICAgICAgICAgICAgY2hlY2tlZCA9IHRydWU7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjaGVja2VkO1xuICAgICAgfWVsc2V7XG4gICAgICAgIHJldHVybiB0aGlzLmNhdGVnb3JpZXNbbG9jYXRpb24uY2F0ZWdvcnlJbmRleF0uZm9ybXNbbG9jYXRpb24uY3VycmVudEluZGV4XS52YWx1ZT09PWNvbmRpdGlvblZhbHVlXG4gICAgICB9ICAgICBcbiAgICB9ZWxzZSBpZihsb2NhdGlvbi5sZXZlbD09PTIpe1xuICAgICAgaWYodGhpcy5jYXRlZ29yaWVzW2xvY2F0aW9uLmNhdGVnb3J5SW5kZXhdLmZvcm1zW2xvY2F0aW9uLmZvcm1JbmRleF0uZm9ybXNbbG9jYXRpb24uY3VycmVudEluZGV4XS50eXBlPT09J2NoZWNrYm94X211bHRpcGxlJyl7XG4gICAgICAgIGNvbnN0IGFycmF5PXRoaXMuY2F0ZWdvcmllc1tsb2NhdGlvbi5jYXRlZ29yeUluZGV4XS5mb3Jtc1tsb2NhdGlvbi5mb3JtSW5kZXhdLmZvcm1zW2xvY2F0aW9uLmN1cnJlbnRJbmRleF0uZGVmYXVsdFZhbHVlLmZpbHRlcigoY2hlY2spPT5jaGVjay5jaGVja2VkKVxuICAgICAgICBsZXQgY2hlY2tlZD1mYWxzZTtcbiAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgaWYgKGFycmF5W2ldLnZhbHVlID09IGNvbmRpdGlvblZhbHVlKSB7XG4gICAgICAgICAgICAgIGNoZWNrZWQgPSB0cnVlO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY2hlY2tlZDtcbiAgICAgIH1lbHNle1xuICAgICAgICByZXR1cm4gdGhpcy5jYXRlZ29yaWVzW2xvY2F0aW9uLmNhdGVnb3J5SW5kZXhdLmZvcm1zW2xvY2F0aW9uLmZvcm1JbmRleF0uZm9ybXNbbG9jYXRpb24uY3VycmVudEluZGV4XS52YWx1ZT09PWNvbmRpdGlvblZhbHVlXG4gICAgICB9XG4gICAgfWVsc2UgaWYobG9jYXRpb24ubGV2ZWw9PT0zKXtcbiAgICAgIGlmKHRoaXMuY2F0ZWdvcmllc1tsb2NhdGlvbi5jYXRlZ29yeUluZGV4XS5mb3Jtc1tsb2NhdGlvbi5mb3JtSW5kZXhdLmZvcm1zW2xvY2F0aW9uLnN1YkluZGV4XS5mb3Jtc1tsb2NhdGlvbi5jdXJyZW50SW5kZXhdLnR5cGU9PT0nY2hlY2tib3hfbXVsdGlwbGUnKXtcbiAgICAgICAgY29uc3QgYXJyYXk9dGhpcy5jYXRlZ29yaWVzW2xvY2F0aW9uLmNhdGVnb3J5SW5kZXhdLmZvcm1zW2xvY2F0aW9uLmZvcm1JbmRleF0uZm9ybXNbbG9jYXRpb24uc3ViSW5kZXhdLmZvcm1zW2xvY2F0aW9uLmN1cnJlbnRJbmRleF0uZGVmYXVsdFZhbHVlLmZpbHRlcigoY2hlY2spPT5jaGVjay5jaGVja2VkKVxuICAgICAgICBsZXQgY2hlY2tlZD1mYWxzZTtcbiAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgaWYgKGFycmF5W2ldLnZhbHVlID09IGNvbmRpdGlvblZhbHVlKSB7XG4gICAgICAgICAgICAgIGNoZWNrZWQgPSB0cnVlO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY2hlY2tlZDtcbiAgICAgIH1lbHNle1xuICAgICAgICByZXR1cm4gdGhpcy5jYXRlZ29yaWVzW2xvY2F0aW9uLmNhdGVnb3J5SW5kZXhdLmZvcm1zW2xvY2F0aW9uLmZvcm1JbmRleF0uZm9ybXNbbG9jYXRpb24uc3ViSW5kZXhdLmZvcm1zW2xvY2F0aW9uLmN1cnJlbnRJbmRleF0udmFsdWU9PT1jb25kaXRpb25WYWx1ZVxuICAgICAgfVxuICAgIH1lbHNle1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG4gXG4gIH1cblxuICBjaGVja1N1YkZvcm0oZm9ybXMpe1xuICAgIGxldCBoYXNTdWJGb3JtPWZhbHNlO1xuICAgIGZvciAoY29uc3QgZm9ybSBvZiBmb3Jtcykge1xuICAgICAgaWYoZm9ybS5mb3JtcyAmJiBmb3JtLmZvcm1zLmxlbmd0aD4wKXtcbiAgICAgICAgaGFzU3ViRm9ybT10cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGhhc1N1YkZvcm1cbiAgfVxuXG4gIG9uU2VsZWN0TWVudShpKXtcbiAgICB0aGlzLnNlbGVjdGVkTWVudT1pXG4gIH1cblxufVxuIiwiPG1haW4+XG4gICAgPGRpdiBjbGFzcz1cImNvbnRlbnRcIj5cbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cInNob3dNb2RlXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2F0ZWdvcnlcIiAqbmdJZj1cImlzU2VsZWN0ZWRcIj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzaWRlLWJhclwiPlxuICAgICAgICAgICAgICAgICAgICA8IS0tPGRpdiBjbGFzcz1cInN1bW1hcnlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzcz1cInRlbXBsYXRlLXRpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3tjdXJyZW50VGVtcGxhdGU/Lk5hbWV9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJsaS10aXRsZVwiICpuZ0Zvcj1cImxldCBjYXQgb2YgY2F0ZWdvcmllczsgIGxldCBpPWluZGV4XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2NsYXNzXT1cInNlbGVjdGVkTWVudT09PWkgPydhY3RpdmUnOicnXCIgKGNsaWNrKT1cIm9uU2VsZWN0TWVudShpKVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIFtuZ3hTY3JvbGxUb109XCInIycrY2F0Lm5hbWVcIj57e2NhdC5uYW1lfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bWF0LWljb24gKm5nSWY9XCJjaGVja1N1YkZvcm0oY2F0LmZvcm1zKVwiPmtleWJvYXJkX2Fycm93X3JpZ2h0PC9tYXQtaWNvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L29sPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj4tLT5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiAoY2xpY2spPVwic2hvd01vZGUgPSBmYWxzZVwiIG1hdC1idXR0b24gY2xhc3M9XCJyZWdpc3Rlci1idXR0b25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIE1vZGlmaWVyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZHNcIiBzdHlsZT1cImhlaWdodDogODV2aDsgbWFyZ2luLWxlZnQ6IDIwcHg7IHdpZHRoOiA4NSU7XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJleGFtcGxlLWxpc3QgbXQtMjBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXRlZ29yeS1pdGVtXCIgKm5nRm9yPVwibGV0IGNhdGVnb3J5IG9mIGN1cnJlbnRPbmJvYXJkaW5nLnZpZXcgfCBrZXl2YWx1ZTsgbGV0IGk9aW5kZXg7IFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW2lkXT1cImNhdGVnb3J5Lm5hbWVcIj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZC1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZC1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3M9XCJjYXRlZ29yeS1uYW1lXCI+e3tjYXRlZ29yeS5rZXl9fTwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZC1jYXRlZ29yeVwiICpuZ0Zvcj1cImxldCBmaWVsZCBvZiBjYXRlZ29yeS52YWx1ZSB8IGtleXZhbHVlO2xldCBqPWluZGV4XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2lkXT1cImZpZWxkLmtleVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5uZXItbG9vcFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpZWxkcy1jb250ZW50XCI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmllbGRzLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPnt7ZmllbGQua2V5fX08L3N0cm9uZz4gPGJyPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhaXNPYmplY3QoZmllbGQudmFsdWUpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e2ZpZWxkLnZhbHVlfX0gPGJyPiA8YnI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJpc09iamVjdChmaWVsZC52YWx1ZSlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IHN1YmYgb2YgZmllbGQudmFsdWUgfCBrZXl2YWx1ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7c3ViZi5rZXl9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Ryb25nPiA8YnI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e3N1YmYudmFsdWV9fSA8YnI+PGJyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tPGxpYi1zdWItY3JlYXRlLW9uYm9hcmRpbmcgW2ZpZWxkXT1cImZpZWxkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtsZW5ndGhdPVwiY2F0ZWdvcnk/LmZvcm1zPy5sZW5ndGhcIiBbaV09XCJpXCIgW2pdPVwialwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAob25Ecm9wKT1cImRyb3AoJGV2ZW50KVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNoaWxkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlubmVyLWNoaWxkXCIgKm5nSWY9XCJmaWVsZC5mb3Jtc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5uZXItY2hpbGQtY29udGVudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqbmdGb3I9XCJsZXQgY2hpbGQgb2YgZmllbGQuZm9ybXM7bGV0IGs9aW5kZXhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2lkXT1cImNoaWxkLmtleVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlubmVyLWxvb3BcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICpuZ0lmPVwiY2hpbGQuZXhwYW5kT25ib2FyZGluZyAmJiBvbkNoZWNrQ29uZGl0aW9uTG9jYXRpb25WYWx1ZShjaGlsZC5pc0NvbmRpdGlvbmFsLGNoaWxkLmNvbmRpdGlvbkxvY2F0aW9uLGNoaWxkLmNvbmRpdGlvblZhbHVlKVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZHMtY29udGVudFwiPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZHMtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGliLXN1Yi1jcmVhdGUtb25ib2FyZGluZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtmaWVsZF09XCJjaGlsZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2xlbmd0aF09XCJmaWVsZD8uZm9ybXM/Lmxlbmd0aFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2ldPVwialwiIFtqXT1cImtcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChvbkRyb3ApPVwiZHJvcCgkZXZlbnQpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNoaWxkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbm5lci1jaGlsZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqbmdJZj1cImNoaWxkLmZvcm1zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5uZXItY2hpbGQtY29udGVudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKm5nRm9yPVwibGV0IGMyIG9mIGNoaWxkLmZvcm1zO2xldCBsPWluZGV4XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbaWRdPVwiYzIua2V5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlubmVyLWxvb3BcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqbmdJZj1cImMyLmV4cGFuZE9uYm9hcmRpbmcgJiYgb25DaGVja0NvbmRpdGlvbkxvY2F0aW9uVmFsdWUoYzIuaXNDb25kaXRpb25hbCxjMi5jb25kaXRpb25Mb2NhdGlvbixjMi5jb25kaXRpb25WYWx1ZSlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmaWVsZHMtY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZmllbGRzLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaWItc3ViLWNyZWF0ZS1vbmJvYXJkaW5nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtmaWVsZF09XCJjMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtsZW5ndGhdPVwiY2hpbGQ/LmZvcm1zPy5sZW5ndGhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbaV09XCJrXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2pdPVwibFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChvbkRyb3ApPVwiZHJvcCgkZXZlbnQpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiY2hpbGRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saWItc3ViLWNyZWF0ZS1vbmJvYXJkaW5nPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saWItc3ViLWNyZWF0ZS1vbmJvYXJkaW5nPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpYi1zdWItY3JlYXRlLW9uYm9hcmRpbmc+LS0+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgICAgPGZvcm0gW25nU3R5bGVdPVwic2hvd01vZGUgJiYgeydkaXNwbGF5JzogJ25vbmUnfVwiIFtmb3JtR3JvdXBdPVwiZm9ybVwiIChzdWJtaXQpPVwib25TdWJtaXQoKVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNlbGVjdC1jb250YWN0XCIgKm5nSWY9XCIhaXNTZWxlY3RlZFwiPlxuICAgICAgICAgICAgICAgIDxoMz5cbiAgICAgICAgICAgICAgICAgICAgT25ib2FyZGluZyBkZSB2b3RyZSBub3V2ZWF1IGNvbGxhYm9yYXRldXJcbiAgICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgICAgIDxwPlPDqWxlY3Rpb25uZXogbGUgbm9tIGRlIHZvdHJlIHByb2ZpbCBhZmluIGRlIHBvdXZvaXIgZMOpbWFycmVyIHNvbiBvbmJvYXJkaW5nLjwvcD5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2VsZWN0LXRlbXBsYXRlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxtYXQtZm9ybS1maWVsZCBjbGFzcz1cImZ1bGwtd2lkdGhcIiBhcHBlYXJhbmNlPVwib3V0bGluZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG1hdC1sYWJlbD5Qcm9maWw8L21hdC1sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxtYXQtc2VsZWN0IGZvcm1Db250cm9sTmFtZT1cIlRlbXBsYXRlSWRcIiByZXF1aXJlZCAoc2VsZWN0aW9uQ2hhbmdlKT1cIm9uU2VsZWN0KCRldmVudC52YWx1ZSlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bWF0LW9wdGlvbiAqbmdGb3I9XCJsZXQgdGVtcGxhdGUgb2YgdGVtcGxhdGVzXCIgW3ZhbHVlXT1cInRlbXBsYXRlLl9pZFwiPnt7dGVtcGxhdGUuTmFtZX19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9tYXQtb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9tYXQtc2VsZWN0PlxuICAgICAgICAgICAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIFtzdHlsZS5vcGFjaXR5XT1cImZvcm0uZ2V0KCdUZW1wbGF0ZUlkJyk/LnZhbHVlPT0nJyA/IDAuNCA6IDFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgW2Rpc2FibGVkXT1cImZvcm0uZ2V0KCdUZW1wbGF0ZUlkJyk/LnZhbHVlPT0nJ1wiIG1hdC1yYWlzZWQtYnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAoY2xpY2spPSdvblNlbGVjdENvbnRhY3RUZW1wbGF0ZSgpJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt7aWQgJiYgaWQgIT09IFwiMFwiID8gJ01vZGlmaWVyIGzigJlvbmJvYXJkaW5nJyA6J0TDqW1hcnJlciBs4oCZb25ib2FyZGluZyd9fVxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhdGVnb3J5XCIgKm5nSWY9XCJpc1NlbGVjdGVkXCI+XG4gICAgICAgICAgICAgICAgPCEtLSA8ZGl2IGNsYXNzPVwiY2F0ZWdvcnlcIj4gLS0+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2lkZS1iYXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInN1bW1hcnlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzcz1cInRlbXBsYXRlLXRpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3tjdXJyZW50VGVtcGxhdGU/Lk5hbWV9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJsaS10aXRsZVwiICpuZ0Zvcj1cImxldCBjYXQgb2YgY2F0ZWdvcmllczsgIGxldCBpPWluZGV4XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2NsYXNzXT1cInNlbGVjdGVkTWVudT09PWkgPydhY3RpdmUnOicnXCIgKGNsaWNrKT1cIm9uU2VsZWN0TWVudShpKVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIFtuZ3hTY3JvbGxUb109XCInIycrY2F0Lm5hbWVcIj57e2NhdC5uYW1lfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bWF0LWljb24gKm5nSWY9XCJjaGVja1N1YkZvcm0oY2F0LmZvcm1zKVwiPmtleWJvYXJkX2Fycm93X3JpZ2h0PC9tYXQtaWNvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L29sPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBtYXQtYnV0dG9uIGNsYXNzPVwicmVnaXN0ZXItYnV0dG9uXCIgdHlwZT1cInN1Ym1pdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSA8bWF0LWljb24+Y2hlY2s8L21hdC1pY29uPiAtLT5cbiAgICAgICAgICAgICAgICAgICAgICAgIFNvdW1ldHRyZSBtYSBmaWNoZSBkZSBwb3N0ZVxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmllbGRzXCIgc3R5bGU9XCJoZWlnaHQ6IDg1dmg7XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJleGFtcGxlLWxpc3QgbXQtMjBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXRlZ29yeS1pdGVtXCIgKm5nRm9yPVwibGV0IGNhdGVnb3J5IG9mIGNhdGVnb3JpZXM7ICBsZXQgaT1pbmRleFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW2lkXT1cImNhdGVnb3J5Lm5hbWVcIj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZC1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZC1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3M9XCJjYXRlZ29yeS1uYW1lXCI+e3tjYXRlZ29yeS5uYW1lfX08L2g0PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bWF0LXNlbGVjdCBwbGFjZWhvbGRlcj1cIkNvbXBhbnlcIiBbKG5nTW9kZWwpXT1cImNhdGVnb3J5LnNlbGVjdG9yLnZhbHVlXCIgW25nTW9kZWxPcHRpb25zXT1cIntzdGFuZGFsb25lOiB0cnVlfVwiIHJlcXVpcmVkICpuZ0lmPVwiY2F0ZWdvcnkuc2VsZWN0b3JcIiBzdHlsZT1cIndpZHRoOiA3MCU7XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG1hdC1vcHRpb24gKm5nRm9yPVwibGV0IHNlbGVjdCBvZiBjYXRlZ29yeS5zZWxlY3Rvci5kZWZhdWx0VmFsdWVcIiBbdmFsdWVdPVwic2VsZWN0LnZhbHVlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7c2VsZWN0LnZhbHVlfX08L21hdC1vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L21hdC1zZWxlY3Q+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2F0ZWdvcnktY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZC1jYXRlZ29yeVwiICpuZ0Zvcj1cImxldCBmaWVsZCBvZiBjYXRlZ29yeS5mb3JtcztsZXQgaj1pbmRleFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtpZF09XCJmaWVsZC5rZXlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlubmVyLWxvb3BcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJmaWVsZC5leHBhbmRPbmJvYXJkaW5nICYmIG9uQ2hlY2tDb25kaXRpb25Mb2NhdGlvblZhbHVlKGZpZWxkLmlzQ29uZGl0aW9uYWwsZmllbGQuY29uZGl0aW9uTG9jYXRpb24sZmllbGQuY29uZGl0aW9uVmFsdWUpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmllbGRzLWNvbnRlbnRcIj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZHMtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaWItc3ViLWNyZWF0ZS1vbmJvYXJkaW5nIFtmaWVsZF09XCJmaWVsZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbbGVuZ3RoXT1cImNhdGVnb3J5Py5mb3Jtcz8ubGVuZ3RoXCIgW2ldPVwiaVwiIFtqXT1cImpcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKG9uRHJvcCk9XCJkcm9wKCRldmVudClcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjaGlsZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbm5lci1jaGlsZFwiICpuZ0lmPVwiZmllbGQuZm9ybXNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlubmVyLWNoaWxkLWNvbnRlbnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKm5nRm9yPVwibGV0IGNoaWxkIG9mIGZpZWxkLmZvcm1zO2xldCBrPWluZGV4XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtpZF09XCJjaGlsZC5rZXlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbm5lci1sb29wXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqbmdJZj1cImNoaWxkLmV4cGFuZE9uYm9hcmRpbmcgJiYgb25DaGVja0NvbmRpdGlvbkxvY2F0aW9uVmFsdWUoY2hpbGQuaXNDb25kaXRpb25hbCxjaGlsZC5jb25kaXRpb25Mb2NhdGlvbixjaGlsZC5jb25kaXRpb25WYWx1ZSlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmllbGRzLWNvbnRlbnRcIj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmllbGRzLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpYi1zdWItY3JlYXRlLW9uYm9hcmRpbmdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbZmllbGRdPVwiY2hpbGRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtsZW5ndGhdPVwiZmllbGQ/LmZvcm1zPy5sZW5ndGhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtpXT1cImpcIiBbal09XCJrXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAob25Ecm9wKT1cImRyb3AoJGV2ZW50KVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjaGlsZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5uZXItY2hpbGRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJjaGlsZC5mb3Jtc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlubmVyLWNoaWxkLWNvbnRlbnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICpuZ0Zvcj1cImxldCBjMiBvZiBjaGlsZC5mb3JtcztsZXQgbD1pbmRleFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2lkXT1cImMyLmtleVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbm5lci1sb29wXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJjMi5leHBhbmRPbmJvYXJkaW5nICYmIG9uQ2hlY2tDb25kaXRpb25Mb2NhdGlvblZhbHVlKGMyLmlzQ29uZGl0aW9uYWwsYzIuY29uZGl0aW9uTG9jYXRpb24sYzIuY29uZGl0aW9uVmFsdWUpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZmllbGRzLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZpZWxkcy1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGliLXN1Yi1jcmVhdGUtb25ib2FyZGluZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbZmllbGRdPVwiYzJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbbGVuZ3RoXT1cImNoaWxkPy5mb3Jtcz8ubGVuZ3RoXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2ldPVwia1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtqXT1cImxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAob25Ecm9wKT1cImRyb3AoJGV2ZW50KVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImNoaWxkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGliLXN1Yi1jcmVhdGUtb25ib2FyZGluZz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGliLXN1Yi1jcmVhdGUtb25ib2FyZGluZz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saWItc3ViLWNyZWF0ZS1vbmJvYXJkaW5nPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZm9ybT5cbiAgICA8L2Rpdj5cblxuPC9tYWluPiJdfQ==