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
function OnboardingCreateComponent_ng_container_2_div_1_div_6_div_7_ng_container_8_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
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
    const subf_r307 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", subf_r307.key, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", subf_r307.value, " ");
} }
function OnboardingCreateComponent_ng_container_2_div_1_div_6_div_7_ng_container_8_ng_container_1_ng_container_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
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
    const subfsub_r312 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", subfsub_r312.key, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", subfsub_r312.value, " ");
} }
function OnboardingCreateComponent_ng_container_2_div_1_div_6_div_7_ng_container_8_ng_container_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, OnboardingCreateComponent_ng_container_2_div_1_div_6_div_7_ng_container_8_ng_container_1_ng_container_2_ng_container_1_Template, 7, 2, "ng-container", 21);
    i0.ɵɵpipe(2, "keyvalue");
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const subf_r307 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(2, 1, subf_r307.value));
} }
function OnboardingCreateComponent_ng_container_2_div_1_div_6_div_7_ng_container_8_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, OnboardingCreateComponent_ng_container_2_div_1_div_6_div_7_ng_container_8_ng_container_1_ng_container_1_Template, 7, 2, "ng-container", 1);
    i0.ɵɵtemplate(2, OnboardingCreateComponent_ng_container_2_div_1_div_6_div_7_ng_container_8_ng_container_1_ng_container_2_Template, 3, 3, "ng-container", 1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const subf_r307 = ctx.$implicit;
    const ctx_r306 = i0.ɵɵnextContext(6);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r306.isObject(subf_r307.value));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r306.isObject(subf_r307.value));
} }
function OnboardingCreateComponent_ng_container_2_div_1_div_6_div_7_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, OnboardingCreateComponent_ng_container_2_div_1_div_6_div_7_ng_container_8_ng_container_1_Template, 3, 2, "ng-container", 21);
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
    const _r316 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 5);
    i0.ɵɵelementStart(1, "div", 6);
    i0.ɵɵelementStart(2, "button", 7);
    i0.ɵɵlistener("click", function OnboardingCreateComponent_ng_container_2_div_1_Template_button_click_2_listener() { i0.ɵɵrestoreView(_r316); const ctx_r315 = i0.ɵɵnextContext(2); return ctx_r315.showMode = false; });
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
    const template_r318 = ctx.$implicit;
    i0.ɵɵproperty("value", template_r318._id);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1("", template_r318.Name, " ");
} }
function OnboardingCreateComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r320 = i0.ɵɵgetCurrentView();
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
    i0.ɵɵlistener("selectionChange", function OnboardingCreateComponent_div_4_Template_mat_select_selectionChange_9_listener($event) { i0.ɵɵrestoreView(_r320); const ctx_r319 = i0.ɵɵnextContext(); return ctx_r319.onSelect($event.value); });
    i0.ɵɵtemplate(10, OnboardingCreateComponent_div_4_mat_option_10_Template, 2, 2, "mat-option", 26);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "button", 27);
    i0.ɵɵlistener("click", function OnboardingCreateComponent_div_4_Template_button_click_11_listener() { i0.ɵɵrestoreView(_r320); const ctx_r321 = i0.ɵɵnextContext(); return ctx_r321.onSelectContactTemplate(); });
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
function OnboardingCreateComponent_div_5_li_7_mat_icon_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-icon");
    i0.ɵɵtext(1, "keyboard_arrow_right");
    i0.ɵɵelementEnd();
} }
function OnboardingCreateComponent_div_5_li_7_Template(rf, ctx) { if (rf & 1) {
    const _r328 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 35);
    i0.ɵɵlistener("click", function OnboardingCreateComponent_div_5_li_7_Template_li_click_0_listener() { i0.ɵɵrestoreView(_r328); const i_r325 = ctx.index; const ctx_r327 = i0.ɵɵnextContext(2); return ctx_r327.onSelectMenu(i_r325); });
    i0.ɵɵelementStart(1, "span");
    i0.ɵɵelementStart(2, "span", 36);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(4, OnboardingCreateComponent_div_5_li_7_mat_icon_4_Template, 2, 0, "mat-icon", 1);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const cat_r324 = ctx.$implicit;
    const i_r325 = ctx.index;
    const ctx_r322 = i0.ɵɵnextContext(2);
    i0.ɵɵclassMap(ctx_r322.selectedMenu === i_r325 ? "active" : "");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngxScrollTo", "#" + cat_r324.name);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(cat_r324.name);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r322.checkSubForm(cat_r324.forms));
} }
function OnboardingCreateComponent_div_5_div_12_mat_select_5_mat_option_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 28);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const select_r334 = ctx.$implicit;
    i0.ɵɵproperty("value", select_r334.value);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", select_r334.value, "");
} }
const _c0 = function () { return { standalone: true }; };
function OnboardingCreateComponent_div_5_div_12_mat_select_5_Template(rf, ctx) { if (rf & 1) {
    const _r337 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-select", 40);
    i0.ɵɵlistener("ngModelChange", function OnboardingCreateComponent_div_5_div_12_mat_select_5_Template_mat_select_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r337); const category_r329 = i0.ɵɵnextContext().$implicit; return category_r329.selector.value = $event; });
    i0.ɵɵtemplate(1, OnboardingCreateComponent_div_5_div_12_mat_select_5_mat_option_1_Template, 2, 2, "mat-option", 26);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const category_r329 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("ngModel", category_r329.selector.value)("ngModelOptions", i0.ɵɵpureFunction0(3, _c0));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", category_r329.selector.defaultValue);
} }
function OnboardingCreateComponent_div_5_div_12_div_8_div_1_div_5_div_1_div_1_div_5_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r353 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 18);
    i0.ɵɵelementStart(1, "div", 19);
    i0.ɵɵelementStart(2, "div", 20);
    i0.ɵɵelementStart(3, "lib-sub-create-onboarding", 42);
    i0.ɵɵlistener("onDrop", function OnboardingCreateComponent_div_5_div_12_div_8_div_1_div_5_div_1_div_1_div_5_div_1_div_1_Template_lib_sub_create_onboarding_onDrop_3_listener($event) { i0.ɵɵrestoreView(_r353); const ctx_r352 = i0.ɵɵnextContext(10); return ctx_r352.drop($event); });
    i0.ɵɵelement(4, "div", 43);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r354 = i0.ɵɵnextContext();
    const c2_r349 = ctx_r354.$implicit;
    const l_r350 = ctx_r354.index;
    const ctx_r355 = i0.ɵɵnextContext(3);
    const child_r344 = ctx_r355.$implicit;
    const k_r345 = ctx_r355.index;
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("field", c2_r349)("length", child_r344 == null ? null : child_r344.forms == null ? null : child_r344.forms.length)("i", k_r345)("j", l_r350);
} }
function OnboardingCreateComponent_div_5_div_12_div_8_div_1_div_5_div_1_div_1_div_5_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 47);
    i0.ɵɵtemplate(1, OnboardingCreateComponent_div_5_div_12_div_8_div_1_div_5_div_1_div_1_div_5_div_1_div_1_Template, 5, 4, "div", 41);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const c2_r349 = ctx.$implicit;
    const ctx_r348 = i0.ɵɵnextContext(9);
    i0.ɵɵproperty("id", c2_r349.key);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", c2_r349.expandOnboarding && ctx_r348.onCheckConditionLocationValue(c2_r349.isConditional, c2_r349.conditionLocation, c2_r349.conditionValue));
} }
function OnboardingCreateComponent_div_5_div_12_div_8_div_1_div_5_div_1_div_1_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 45);
    i0.ɵɵtemplate(1, OnboardingCreateComponent_div_5_div_12_div_8_div_1_div_5_div_1_div_1_div_5_div_1_Template, 2, 2, "div", 46);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const child_r344 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", child_r344.forms);
} }
function OnboardingCreateComponent_div_5_div_12_div_8_div_1_div_5_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r358 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 18);
    i0.ɵɵelementStart(1, "div", 19);
    i0.ɵɵelementStart(2, "div", 20);
    i0.ɵɵelementStart(3, "lib-sub-create-onboarding", 42);
    i0.ɵɵlistener("onDrop", function OnboardingCreateComponent_div_5_div_12_div_8_div_1_div_5_div_1_div_1_Template_lib_sub_create_onboarding_onDrop_3_listener($event) { i0.ɵɵrestoreView(_r358); const ctx_r357 = i0.ɵɵnextContext(7); return ctx_r357.drop($event); });
    i0.ɵɵelementStart(4, "div", 43);
    i0.ɵɵtemplate(5, OnboardingCreateComponent_div_5_div_12_div_8_div_1_div_5_div_1_div_1_div_5_Template, 2, 1, "div", 44);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r359 = i0.ɵɵnextContext();
    const child_r344 = ctx_r359.$implicit;
    const k_r345 = ctx_r359.index;
    const ctx_r360 = i0.ɵɵnextContext(3);
    const field_r339 = ctx_r360.$implicit;
    const j_r340 = ctx_r360.index;
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("field", child_r344)("length", field_r339 == null ? null : field_r339.forms == null ? null : field_r339.forms.length)("i", j_r340)("j", k_r345);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", child_r344.forms && child_r344.value);
} }
function OnboardingCreateComponent_div_5_div_12_div_8_div_1_div_5_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 47);
    i0.ɵɵtemplate(1, OnboardingCreateComponent_div_5_div_12_div_8_div_1_div_5_div_1_div_1_Template, 6, 5, "div", 41);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const child_r344 = ctx.$implicit;
    const ctx_r343 = i0.ɵɵnextContext(6);
    i0.ɵɵproperty("id", child_r344.key);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", child_r344.expandOnboarding && ctx_r343.onCheckConditionLocationValue(child_r344.isConditional, child_r344.conditionLocation, child_r344.conditionValue));
} }
function OnboardingCreateComponent_div_5_div_12_div_8_div_1_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 45);
    i0.ɵɵtemplate(1, OnboardingCreateComponent_div_5_div_12_div_8_div_1_div_5_div_1_Template, 2, 2, "div", 46);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const field_r339 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", field_r339.forms);
} }
function OnboardingCreateComponent_div_5_div_12_div_8_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r363 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 18);
    i0.ɵɵelementStart(1, "div", 19);
    i0.ɵɵelementStart(2, "div", 20);
    i0.ɵɵelementStart(3, "lib-sub-create-onboarding", 42);
    i0.ɵɵlistener("onDrop", function OnboardingCreateComponent_div_5_div_12_div_8_div_1_Template_lib_sub_create_onboarding_onDrop_3_listener($event) { i0.ɵɵrestoreView(_r363); const ctx_r362 = i0.ɵɵnextContext(4); return ctx_r362.drop($event); });
    i0.ɵɵelementStart(4, "div", 43);
    i0.ɵɵtemplate(5, OnboardingCreateComponent_div_5_div_12_div_8_div_1_div_5_Template, 2, 1, "div", 44);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r364 = i0.ɵɵnextContext();
    const field_r339 = ctx_r364.$implicit;
    const j_r340 = ctx_r364.index;
    const ctx_r365 = i0.ɵɵnextContext();
    const category_r329 = ctx_r365.$implicit;
    const i_r330 = ctx_r365.index;
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("field", field_r339)("length", category_r329 == null ? null : category_r329.forms == null ? null : category_r329.forms.length)("i", i_r330)("j", j_r340);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", field_r339.forms && field_r339.value);
} }
function OnboardingCreateComponent_div_5_div_12_div_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 17);
    i0.ɵɵtemplate(1, OnboardingCreateComponent_div_5_div_12_div_8_div_1_Template, 6, 5, "div", 41);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const field_r339 = ctx.$implicit;
    const ctx_r332 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("id", field_r339.key);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", field_r339.expandOnboarding && ctx_r332.onCheckConditionLocationValue(field_r339.isConditional, field_r339.conditionLocation, field_r339.conditionValue));
} }
function OnboardingCreateComponent_div_5_div_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 37);
    i0.ɵɵelementStart(1, "div", 12);
    i0.ɵɵelementStart(2, "div", 13);
    i0.ɵɵelementStart(3, "h4", 14);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(5, OnboardingCreateComponent_div_5_div_12_mat_select_5_Template, 2, 4, "mat-select", 38);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "div", 39);
    i0.ɵɵelementContainerStart(7);
    i0.ɵɵtemplate(8, OnboardingCreateComponent_div_5_div_12_div_8_Template, 2, 2, "div", 16);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const category_r329 = ctx.$implicit;
    const i_r330 = ctx.index;
    const ctx_r323 = i0.ɵɵnextContext(2);
    i0.ɵɵclassMap(i_r330 === ctx_r323.selectedCategoryIndex ? "active-content" : "");
    i0.ɵɵproperty("id", category_r329.name);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(category_r329.name);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", category_r329.selector);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", category_r329.forms);
} }
function OnboardingCreateComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 5);
    i0.ɵɵelementStart(1, "div", 6);
    i0.ɵɵelementStart(2, "div", 29);
    i0.ɵɵelementStart(3, "h3", 30);
    i0.ɵɵelementStart(4, "span");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "ol");
    i0.ɵɵtemplate(7, OnboardingCreateComponent_div_5_li_7_Template, 5, 5, "li", 31);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "button", 32);
    i0.ɵɵtext(9, " Soumettre ma fiche de poste ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "div", 33);
    i0.ɵɵelementStart(11, "div", 9);
    i0.ɵɵtemplate(12, OnboardingCreateComponent_div_5_div_12_Template, 9, 6, "div", 34);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r295 = i0.ɵɵnextContext();
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate1(" ", ctx_r295.currentTemplate == null ? null : ctx_r295.currentTemplate.Name, "");
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
        this.selectedCategoryIndex = null;
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
        this.selectedCategoryIndex = i;
        setTimeout(() => {
            this.selectedCategoryIndex = null;
        }, 2000);
    }
}
OnboardingCreateComponent.ɵfac = function OnboardingCreateComponent_Factory(t) { return new (t || OnboardingCreateComponent)(i0.ɵɵdirectiveInject(i1.FormBuilder), i0.ɵɵdirectiveInject(i2.OnboardingService), i0.ɵɵdirectiveInject(i3.ActivatedRoute), i0.ɵɵdirectiveInject(i3.Router), i0.ɵɵdirectiveInject(i4.MatDialog)); };
OnboardingCreateComponent.ɵcmp = i0.ɵɵdefineComponent({ type: OnboardingCreateComponent, selectors: [["create-onboarding"]], decls: 6, vars: 6, consts: [[1, "content"], [4, "ngIf"], [3, "ngStyle", "formGroup", "submit"], ["class", "select-contact", 4, "ngIf"], ["class", "category", 4, "ngIf"], [1, "category"], [1, "side-bar"], ["mat-button", "", 1, "register-button", 3, "click"], [1, "fields", 2, "height", "85vh", "margin-left", "20px", "width", "85%"], [1, "example-list", "mt-20"], ["class", "category-item", 3, "id", 4, "ngFor", "ngForOf"], [1, "category-item", 3, "id"], [1, "field-content"], [1, "field-item"], [1, "category-name"], [1, ""], ["class", "field-category", 3, "id", 4, "ngFor", "ngForOf"], [1, "field-category", 3, "id"], [1, "inner-loop"], [1, "fields-content"], [1, "fields-container"], [4, "ngFor", "ngForOf"], [1, "select-contact"], [1, "select-template"], ["appearance", "outline", 1, "full-width"], ["formControlName", "TemplateId", "required", "", 3, "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], ["mat-raised-button", "", "color", "primary", 3, "disabled", "click"], [3, "value"], [1, "summary"], [1, "template-title"], ["class", "li-title", 3, "class", "click", 4, "ngFor", "ngForOf"], ["mat-button", "", "type", "submit", 1, "register-button"], [1, "fields", 2, "height", "85vh"], ["class", "category-item content-item", 3, "class", "id", 4, "ngFor", "ngForOf"], [1, "li-title", 3, "click"], [3, "ngxScrollTo"], [1, "category-item", "content-item", 3, "id"], ["placeholder", "Company", "required", "", "style", "width: 150px;", 3, "ngModel", "ngModelOptions", "ngModelChange", 4, "ngIf"], [1, "category-container"], ["placeholder", "Company", "required", "", 2, "width", "150px", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["class", "inner-loop", 4, "ngIf"], [3, "field", "length", "i", "j", "onDrop"], [1, "child"], ["class", "inner-child", 4, "ngIf"], [1, "inner-child"], ["class", "inner-child-content", 3, "id", 4, "ngFor", "ngForOf"], [1, "inner-child-content", 3, "id"]], template: function OnboardingCreateComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "main");
        i0.ɵɵelementStart(1, "div", 0);
        i0.ɵɵtemplate(2, OnboardingCreateComponent_ng_container_2_Template, 2, 1, "ng-container", 1);
        i0.ɵɵelementStart(3, "form", 2);
        i0.ɵɵlistener("submit", function OnboardingCreateComponent_Template_form_submit_3_listener() { return ctx.onSubmit(); });
        i0.ɵɵtemplate(4, OnboardingCreateComponent_div_4_Template, 13, 5, "div", 3);
        i0.ɵɵtemplate(5, OnboardingCreateComponent_div_5_Template, 13, 3, "div", 4);
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
    } }, directives: [i5.NgIf, i1.ɵangular_packages_forms_forms_y, i1.NgControlStatusGroup, i5.NgStyle, i1.FormGroupDirective, i6.MatButton, i5.NgForOf, i7.MatFormField, i7.MatLabel, i8.MatSelect, i1.NgControlStatus, i1.FormControlName, i1.RequiredValidator, i9.MatOption, i10.ScrollToDirective, i11.MatIcon, i1.NgModel, i12.SubOnboardingCreateComponent], pipes: [i5.KeyValuePipe], styles: ["main[_ngcontent-%COMP%]{background:no-repeat padding-box #f4f7f9;height:100vh;width:100%;display:flex;flex-direction:column;align-items:center}main[_ngcontent-%COMP%]   .disabled[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{background-color:transparent!important}main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{width:99%;height:100%;padding-left:1%}main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font:bold 32px/30px Nexa Text;letter-spacing:0;color:#171f26;padding-top:20px}main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font:20px/26px Nexa Text;letter-spacing:0;color:#171f26}main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   p.sub-title[_ngcontent-%COMP%]{max-width:400px}main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .select-contact[_ngcontent-%COMP%]{max-width:70%;margin:5% auto auto;background:no-repeat padding-box #fff;border:1px solid #dce4e9;border-radius:6px;padding:5%}main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .select-contact[_ngcontent-%COMP%]   .select-template[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;justify-content:space-between;margin-top:50px}main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .select-contact[_ngcontent-%COMP%]   .select-template[_ngcontent-%COMP%]   .full-width[_ngcontent-%COMP%]{width:40%}main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .select-contact[_ngcontent-%COMP%]   .select-template[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{float:right;text-align:center;border:1px solid #543cb6;border-radius:7px;padding:1em 2em;display:flex;align-items:center;background-color:transparent;font:bold 15px/17px Nexa;letter-spacing:0;color:#543cb6;-ms-grid-row-align:center;align-self:center;width:220px}main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .category[_ngcontent-%COMP%]   .onboarding-mat-stepper[_ngcontent-%COMP%]   mat-horizontal-stepper[_ngcontent-%COMP%]   .next-step[_ngcontent-%COMP%]{float:right}main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{display:flex;height:100%;width:100%;max-width:1500px}main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .select-contact[_ngcontent-%COMP%]{max-width:70%;margin:5% auto auto;background:no-repeat padding-box #fff;border:1px solid #dce4e9;border-radius:6px;padding:5%}main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .select-contact[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{float:right;text-align:center;border:1px solid #543cb6;border-radius:7px;padding:.7em 2em .5em;display:flex;align-items:center;background-color:transparent;font:bold 15px/17px Nexa;letter-spacing:0;color:#543cb6;align-self:flex-end}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]{width:786px;background:no-repeat padding-box #fff;border:1px solid #dce4e9;border-radius:6px;opacity:1;margin:auto;padding:0 25px;-ms-grid-row-align:center;align-self:center}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{text-align:center;font:900 32px/48px Nexa;letter-spacing:0;color:#171f26}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font:18px/24px Nexa Text;letter-spacing:0;color:#171f26}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .profil-name-content[_ngcontent-%COMP%]{display:flex;align-items:center;position:relative}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .profil-name-content[_ngcontent-%COMP%]   .add-picto[_ngcontent-%COMP%]{margin-right:15px;min-width:50px;width:30px;padding:9px 12px}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .profil-name-content[_ngcontent-%COMP%]   .add-picto[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin-right:10px}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .profil-name-content[_ngcontent-%COMP%]   .list-picto[_ngcontent-%COMP%]{position:absolute;height:200px;width:100%;background:no-repeat padding-box #fff;border:1px solid #171f26;border-radius:8px;top:100%;z-index:1}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .profil-name-content[_ngcontent-%COMP%]   .list-picto[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin:15px;border:none;font-size:40px}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .profil-name-content[_ngcontent-%COMP%]   .list-picto[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]:hover{color:#830b6b!important;cursor:pointer}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .box-title-content[_ngcontent-%COMP%]{width:100%;margin:25px auto}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font:900 32px/38px Nexa;letter-spacing:0;color:#171f26}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font:15px/26px Nexa Text;letter-spacing:0;color:#171f26;text-align:center}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .link-create-profil[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:center}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{text-align:center;border:1px solid #543cb6;border-radius:7px;padding:.7em 2em .5em;display:flex;align-items:center;background-color:transparent;font:bold 15px/17px Nexa;letter-spacing:0;color:#543cb6}main[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:space-between}.expand-button[_ngcontent-%COMP%]{color:#5a607f!important;background-color:transparent!important;box-shadow:none!important}.category-name[_ngcontent-%COMP%]{text-align:left;font:bold 22px/48px Nexa Text;letter-spacing:0;color:#171f26;padding-left:15px}.full-width[_ngcontent-%COMP%]{width:100%}.field-action[_ngcontent-%COMP%]{width:10%}.field-size[_ngcontent-%COMP%]{width:90%;margin:auto 2% auto auto}  .mat-form-field-appearance-fill .mat-form-field-flex{background-color:#fff}  .mat-form-field-appearance-fill .mat-form-field-underline::before{background-color:transparent}[_nghost-%COMP%]     .mat-checkbox-checked.mat-accent .mat-checkbox-background, [_nghost-%COMP%]     .mat-checkbox-indeterminate.mat-accent .mat-checkbox-background{background-color:transparent}.category-action[_ngcontent-%COMP%]{display:flex;width:100%}.delete-field[_ngcontent-%COMP%]{margin:auto 2%}.radio-group[_ngcontent-%COMP%]   .mat-radio-button[_ngcontent-%COMP%]{margin-right:10px}.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary[_ngcontent-%COMP%]{background-color:#3f51b5;color:#fff;min-height:20px;font-size:10px}.move-icons[_ngcontent-%COMP%]{cursor:move}.category-item[_ngcontent-%COMP%], .cdk-drag-placeholder[_ngcontent-%COMP%]{display:flex;align-items:baseline;width:98%;border:1px solid #dce4e9;border-radius:8px;background-color:#fff;padding-bottom:10px;margin-top:10px;min-height:60px}.category-item[_ngcontent-%COMP%]   .left-action[_ngcontent-%COMP%], .cdk-drag-placeholder[_ngcontent-%COMP%]   .left-action[_ngcontent-%COMP%]{height:auto;background-color:#49a094;padding-top:7px;width:40px;-ms-grid-row-align:stretch;align-self:stretch;border-top-left-radius:8px;border-bottom-left-radius:8px}.category-item[_ngcontent-%COMP%]   .left-action[_ngcontent-%COMP%]   .transparent-button[_ngcontent-%COMP%], .cdk-drag-placeholder[_ngcontent-%COMP%]   .left-action[_ngcontent-%COMP%]   .transparent-button[_ngcontent-%COMP%]{background-color:transparent;box-shadow:none;width:40px;padding:0;margin:0;min-width:auto;color:#fff}.category-item[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%], .cdk-drag-placeholder[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%]{width:100%;-ms-grid-row-align:center;align-self:center}.category-item[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%], .cdk-drag-placeholder[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;border:transparent!important}.category-item[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]   .mat-form-field-wrapper[_ngcontent-%COMP%]   .mat-form-field-flex[_ngcontent-%COMP%]   .mat-form-field-outline[_ngcontent-%COMP%], .category-item[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%]   .mat-form-field-outline[_ngcontent-%COMP%], .cdk-drag-placeholder[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]   .mat-form-field-wrapper[_ngcontent-%COMP%]   .mat-form-field-flex[_ngcontent-%COMP%]   .mat-form-field-outline[_ngcontent-%COMP%], .cdk-drag-placeholder[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%]   .mat-form-field-outline[_ngcontent-%COMP%]{color:transparent!important}.category-item[_ngcontent-%COMP%]   .category-container[_ngcontent-%COMP%], .cdk-drag-placeholder[_ngcontent-%COMP%]   .category-container[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;justify-content:flex-start;align-items:flex-start}.cdk-drag-preview[_ngcontent-%COMP%]{box-sizing:border-box;border-radius:4px;opacity:1}.cdk-drag-preview[_ngcontent-%COMP%]   .expand-button[_ngcontent-%COMP%]{color:#5a607f!important;background-color:transparent!important;box-shadow:none!important;margin-right:28px!important}.cdk-drag-placeholder[_ngcontent-%COMP%]{opacity:0}.cdk-drag-animating[_ngcontent-%COMP%], .example-list.cdk-drop-list-dragging[_ngcontent-%COMP%]   .category-item[_ngcontent-%COMP%]:not(.cdk-drag-placeholder){transition:transform 250ms cubic-bezier(0,0,.2,1)}.child[_ngcontent-%COMP%]{margin-left:0}.child[_ngcontent-%COMP%]   .inner-child[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap}.category[_ngcontent-%COMP%]{display:flex;flex-direction:row;width:100vw}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]{width:250px;background-color:#fff;margin:10px 20px;border-radius:5px;border:1px solid #dbcbcb96}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:15px;border-bottom:1px solid #dbcbcb96;margin:10px;padding-bottom:5px;padding-top:0;font-family:\"Nexa Text\";display:flex;flex-direction:column;justify-content:space-between;align-items:flex-start}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-weight:600;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;margin-top:-5px}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin-left:15px;cursor:pointer}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   h3.template-title[_ngcontent-%COMP%]{font:900 24px/36px Nexa Text;letter-spacing:0;color:#171f26}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]{font-weight:600;margin-left:-27px;font-size:15px;list-style:none}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:5px;margin:5px auto;cursor:pointer;text-align:left;font:12px/19px Nexa Text;letter-spacing:0;color:#535760}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]{padding-left:0;margin-left:0}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.li-title[_ngcontent-%COMP%]{font-size:14px;font-weight:600;margin-right:10px}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.li-title[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:140px;outline:0;border:1px dashed grey}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.li-title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:inline-flex;align-items:center;width:100%}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.li-title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin-left:10px}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.li-title.active[_ngcontent-%COMP%], .category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.li-title[_ngcontent-%COMP%]:hover{background:no-repeat padding-box #e5e8ee;border-radius:5px}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.sub-title[_ngcontent-%COMP%]{list-style:none;padding-left:20px}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.sub-title.active[_ngcontent-%COMP%], .category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.sub-title.active[_ngcontent-%COMP%]::marker, .category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.sub-title[_ngcontent-%COMP%]:hover{font-weight:600;background:no-repeat padding-box #e5e8ee;border-radius:5px}.category[_ngcontent-%COMP%]   .fields[_ngcontent-%COMP%]{width:90%;max-height:100vh;overflow:auto;margin-right:.5%;overflow-x:hidden}.category[_ngcontent-%COMP%]   .disabled[_ngcontent-%COMP%]{background-color:#f4f7f9!important}.category[_ngcontent-%COMP%]   .expand-button[_ngcontent-%COMP%]{color:#5a607f!important;background-color:transparent!important;box-shadow:none!important;margin-right:28px!important}.category[_ngcontent-%COMP%]   .expand-button[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%]{font-size:40px}.category[_ngcontent-%COMP%]   .transparent-button[_ngcontent-%COMP%]{background-color:transparent;box-shadow:none;width:40px;padding:0;margin:0;margin-left:0!important;min-width:auto;color:#fff}.add-button-sub-category[_ngcontent-%COMP%]{width:95.5%!important;margin-bottom:22px;margin-left:22px}.add-button-container[_ngcontent-%COMP%]{background:no-repeat padding-box #fff;border:1px dashed #dce4e9;border-radius:8px;margin-top:10px;padding:10px;display:flex;justify-content:center;align-items:center;width:98.5%;margin-bottom:22px}.add-button-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{display:flex;align-items:center;background-color:transparent;border:none;cursor:pointer;font:17px/26px Nexa Text;letter-spacing:0;color:#c2c8d5;box-shadow:none}.add-category[_ngcontent-%COMP%]{border:1px dashed #c2c8d5;border-radius:5px;margin-left:10px;margin-bottom:10px;font:bold 12px/19px Nexa Text;letter-spacing:0;color:#c2c8d5;width:92%}.inner-loop[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]{display:flex;height:100%;margin:0;width:100%;margin-top:10px;margin-bottom:10px}.inner-loop[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]   .button-action[_ngcontent-%COMP%]{background-color:#6fe8d7;-ms-grid-row-align:stretch;align-self:stretch;margin-top:0;margin-left:20px;border-bottom-left-radius:8px;border-top-left-radius:8px}.inner-loop[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]   .button-action[_ngcontent-%COMP%]   .transparent-button[_ngcontent-%COMP%]{background-color:transparent;box-shadow:none;width:40px;padding:0;margin:0;min-width:auto;color:#fff}.inner-loop[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]   .child-2-background[_ngcontent-%COMP%]{background-color:#cffaf4!important}.inner-loop[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]   .child-3-background[_ngcontent-%COMP%]{background-color:#e5e8ee!important}.inner-loop[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]   .fields-container[_ngcontent-%COMP%]{width:100%;padding-left:10px;padding-right:10px;padding-top:5px}.inner-loop[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]   .fields-container[_ngcontent-%COMP%]   lib-sub-category[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;width:100%}.inner-loop[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]   .fields-container[_ngcontent-%COMP%]   lib-sub-category[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]   .button-action[_ngcontent-%COMP%]{background-color:#6fe8d7;height:100%;margin:auto 15px auto auto;display:flex}.inner-loop[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]   .fields-container[_ngcontent-%COMP%]   lib-sub-category[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]   .button-action[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{box-shadow:none;background-color:transparent;color:#fff}.side-bar[_ngcontent-%COMP%]{display:flex;flex-direction:column}.register-button[_ngcontent-%COMP%]{background:no-repeat padding-box #171f26!important;border:2px solid #192128!important;border-radius:8px;color:#fff!important;width:85%;margin-left:22px!important;border:none!important;margin-top:10px}.content-item[_ngcontent-%COMP%]{transition-property:border-image-slice border-image-source border-width;transition-timing-function:ease-in-out;transition-duration:.5s}.active-content[_ngcontent-%COMP%]{border-image-slice:1;border-width:2px;border-image-source:linear-gradient(to left,#9d107d,#4862ab)}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(OnboardingCreateComponent, [{
        type: Component,
        args: [{
                selector: "create-onboarding",
                templateUrl: "./onboarding-create.component.html",
                styleUrls: ["./onboarding-create.component.scss"],
            }]
    }], function () { return [{ type: i1.FormBuilder }, { type: i2.OnboardingService }, { type: i3.ActivatedRoute }, { type: i3.Router }, { type: i4.MatDialog }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib25ib2FyZGluZy1jcmVhdGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vb25ib2FyZGluZy8iLCJzb3VyY2VzIjpbImxpYi9vbmJvYXJkaW5nLWNyZWF0ZS9vbmJvYXJkaW5nLWNyZWF0ZS5jb21wb25lbnQudHMiLCJsaWIvb25ib2FyZGluZy1jcmVhdGUvb25ib2FyZGluZy1jcmVhdGUuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDbEQsT0FBTyxFQUEwQixVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUdwRSxPQUFPLEVBQWUsZUFBZSxFQUFFLGlCQUFpQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFekYsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0scURBQXFELENBQUM7QUFDNUYsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sbURBQW1ELENBQUM7Ozs7Ozs7Ozs7Ozs7OztJQ3NDakMsNkJBQ0k7SUFBQSxZQUFnQjtJQUFBLHFCQUFLO0lBQUEscUJBQ3pCO0lBQUEsMEJBQWU7OztJQURYLGVBQWdCO0lBQWhCLGlEQUFnQjs7O0lBTVosNkJBQ0k7SUFBQSw4QkFDSTtJQUFBLFlBQ0o7SUFBQSxpQkFBUztJQUFDLHFCQUNWO0lBQUEsWUFBZTtJQUFBLHFCQUFLO0lBQUEscUJBQ3hCO0lBQUEsMEJBQWU7OztJQUhQLGVBQ0o7SUFESSw4Q0FDSjtJQUNBLGVBQWU7SUFBZixnREFBZTs7O0lBSWYsNkJBRUk7SUFBQSw4QkFDSTtJQUFBLFlBQ0o7SUFBQSxpQkFBUztJQUFDLHFCQUVWO0lBQUEsWUFBa0I7SUFBQSxxQkFBSTtJQUFBLHFCQUMxQjtJQUFBLDBCQUFlOzs7SUFKUCxlQUNKO0lBREksaURBQ0o7SUFFQSxlQUFrQjtJQUFsQixtREFBa0I7OztJQVAxQiw2QkFDSTtJQUFBLDJLQUVJOztJQU1SLDBCQUFlOzs7SUFQUCxlQUE2QztJQUE3QywrREFBNkM7OztJQVh6RCw2QkFFSTtJQUFBLDJKQUNJO0lBTUosMkpBQ0k7SUFTUiwwQkFBZTs7OztJQWpCRyxlQUE2QjtJQUE3QiwwREFBNkI7SUFPN0IsZUFBNEI7SUFBNUIseURBQTRCOzs7SUFWbEQsNkJBQ0k7SUFBQSw2SUFFSTs7SUFrQlIsMEJBQWU7OztJQXBCRyxlQUEyQztJQUEzQyxnRUFBMkM7OztJQWQ3RSwrQkFHSTtJQUFBLCtCQUNJO0lBQUEsK0JBRUk7SUFBQSwrQkFDSTtJQUFBLDhCQUFRO0lBQUEsWUFBYTtJQUFBLGlCQUFTO0lBQUMscUJBRS9CO0lBQUEsNkhBQ0k7SUFHSiw2SEFDSTtJQTRFUixpQkFBTTtJQUNWLGlCQUFNO0lBQ1YsaUJBQU07SUFDVixpQkFBTTs7OztJQTNGRixtQ0FBZ0I7SUFLSSxlQUFhO0lBQWIsb0NBQWE7SUFFUCxlQUE4QjtJQUE5QiwyREFBOEI7SUFJOUIsZUFBNkI7SUFBN0IsMERBQTZCOzs7SUF2QjNFLCtCQUlJO0lBQUEsK0JBQ0k7SUFBQSwrQkFDSTtJQUFBLDhCQUEwQjtJQUFBLFlBQWdCO0lBQUEsaUJBQUs7SUFDbkQsaUJBQU07SUFDTiwrQkFDSTtJQUFBLDZCQUNJO0lBQUEsc0dBR0k7O0lBMkZSLDBCQUFlO0lBRW5CLGlCQUFNO0lBQ1YsaUJBQU07SUFDVixpQkFBTTs7O0lBMUdGLHVDQUFvQjtJQUljLGVBQWdCO0lBQWhCLHVDQUFnQjtJQUtsQyxlQUEyRDtJQUEzRCxtRUFBMkQ7Ozs7SUFsQzNGLDhCQUVJO0lBQUEsOEJBQ0k7SUFjQSxpQ0FDSTtJQURJLDhNQUFvQixLQUFLLElBQUM7SUFDOUIsMEJBQ0o7SUFBQSxpQkFBUztJQUNiLGlCQUFNO0lBQ04sOEJBQ0k7SUFBQSw4QkFDSTtJQUFBLGdHQUlJOztJQXlHUixpQkFBTTtJQUVWLGlCQUFNO0lBQ1YsaUJBQU07OztJQS9HVSxlQUF5RTtJQUF6RSwrRUFBeUU7OztJQXpCN0YsNkJBQ0k7SUFBQSx5RkFFSTtJQXNJUiwwQkFBZTs7O0lBeElXLGVBQWtCO0lBQWxCLDBDQUFrQjs7O0lBb0p4QixzQ0FBc0U7SUFBQSxZQUN0RTtJQUFBLGlCQUFhOzs7SUFEa0MseUNBQXNCO0lBQUMsZUFDdEU7SUFEc0Usa0RBQ3RFOzs7O0lBVmhCLCtCQUNJO0lBQUEsMEJBQ0k7SUFBQSwyREFDSjtJQUFBLGlCQUFLO0lBQ0wseUJBQUc7SUFBQSxzR0FBNEU7SUFBQSxpQkFBSTtJQUNuRiwrQkFDSTtJQUFBLDBDQUNJO0lBQUEsaUNBQVc7SUFBQSxzQkFBTTtJQUFBLGlCQUFZO0lBQzdCLHNDQUNJO0lBRDhDLDJPQUEwQztJQUN4RixpR0FBc0U7SUFFMUUsaUJBQWE7SUFDakIsaUJBQWlCO0lBQ2pCLG1DQUdJO0lBREEsaU5BQW1DO0lBQ25DLGFBQ0o7SUFBQSxpQkFBUztJQUNiLGlCQUFNO0lBQ1YsaUJBQU07Ozs7Ozs7SUFWc0IsZ0JBQWtDO0lBQWxDLDRDQUFrQztJQUk5QyxlQUE2RDtJQUE3RCxvQ0FBNkQ7SUFDakUsb0NBQThDO0lBRTlDLGVBQ0o7SUFESSxzSUFDSjs7O0lBZ0JnQixnQ0FBMEM7SUFBQSxvQ0FBb0I7SUFBQSxpQkFBVzs7OztJQUpqRiw4QkFFSTtJQUR3Qyx1T0FBeUI7SUFDakUsNEJBQ0k7SUFBQSxnQ0FBbUM7SUFBQSxZQUFZO0lBQUEsaUJBQU87SUFDdEQsK0ZBQTBDO0lBQzlDLGlCQUFPO0lBQ1gsaUJBQUs7Ozs7O0lBTEQsK0RBQXVDO0lBRTdCLGVBQTRCO0lBQTVCLGlEQUE0QjtJQUFDLGVBQVk7SUFBWixtQ0FBWTtJQUNyQyxlQUErQjtJQUEvQiw0REFBK0I7OztJQXVCckMsc0NBRUk7SUFBQSxZQUFnQjtJQUFBLGlCQUFhOzs7SUFEN0IseUNBQXNCO0lBQ3RCLGVBQWdCO0lBQWhCLGlEQUFnQjs7Ozs7SUFMeEIsc0NBR0k7SUFIOEIsZ1JBQXFDO0lBR25FLG1IQUVJO0lBQ1IsaUJBQWE7OztJQU5xQixzREFBcUMsOENBQUE7SUFHdkQsZUFBcUQ7SUFBckQsNkRBQXFEOzs7O0lBdUNMLCtCQUVJO0lBQUEsK0JBRUk7SUFBQSwrQkFFSTtJQUFBLHFEQU1JO0lBREEsdVJBQXVCO0lBQ3ZCLDBCQUVNO0lBQ1YsaUJBQTRCO0lBQ2hDLGlCQUFNO0lBQ1YsaUJBQU07SUFDVixpQkFBTTs7Ozs7Ozs7SUFYVSxlQUFZO0lBQVosK0JBQVksaUdBQUEsYUFBQSxhQUFBOzs7SUFWaEMsK0JBR0k7SUFBQSxrSUFFSTtJQWlCUixpQkFBTTs7OztJQXBCRixnQ0FBYTtJQUVULGVBQXFIO0lBQXJILG1LQUFxSDs7O0lBTmpJLCtCQUVJO0lBQUEsNEhBR0k7SUFvQlIsaUJBQU07OztJQXRCRSxlQUEwQztJQUExQywwQ0FBMEM7Ozs7SUFkdEUsK0JBRUk7SUFBQSwrQkFFSTtJQUFBLCtCQUNJO0lBQUEscURBS0k7SUFEQSxvUUFBdUI7SUFDdkIsK0JBQ0k7SUFBQSxzSEFFSTtJQXdCUixpQkFBTTtJQUNWLGlCQUE0QjtJQUNoQyxpQkFBTTtJQUNWLGlCQUFNO0lBQ1YsaUJBQU07Ozs7Ozs7O0lBbkNVLGVBQWU7SUFBZixrQ0FBZSxpR0FBQSxhQUFBLGFBQUE7SUFNUCxlQUFrQztJQUFsQywyREFBa0M7OztJQWY5RCwrQkFHSTtJQUFBLGdIQUVJO0lBd0NSLGlCQUFNOzs7O0lBM0NGLG1DQUFnQjtJQUVaLGVBQWlJO0lBQWpJLCtLQUFpSTs7O0lBTjdJLCtCQUVJO0lBQUEsMEdBR0k7SUEyQ1IsaUJBQU07OztJQTdDRSxlQUE2QztJQUE3QywwQ0FBNkM7Ozs7SUFaekUsK0JBRUk7SUFBQSwrQkFFSTtJQUFBLCtCQUNJO0lBQUEscURBR0k7SUFEQSxrUEFBdUI7SUFDdkIsK0JBQ0k7SUFBQSxvR0FFSTtJQStDUixpQkFBTTtJQUNWLGlCQUE0QjtJQUVoQyxpQkFBTTtJQUNWLGlCQUFNO0lBQ1YsaUJBQU07Ozs7Ozs7O0lBMURpQyxlQUFlO0lBQWYsa0NBQWUsMEdBQUEsYUFBQSxhQUFBO0lBSzlCLGVBQWtDO0lBQWxDLDJEQUFrQzs7O0lBWjlELCtCQUVJO0lBQUEsOEZBRUk7SUE4RFIsaUJBQU07Ozs7SUFqRUYsbUNBQWdCO0lBRVosZUFBaUk7SUFBakksK0tBQWlJOzs7SUFyQnpKLCtCQUlJO0lBQUEsK0JBQ0k7SUFBQSwrQkFDSTtJQUFBLDhCQUEwQjtJQUFBLFlBQWlCO0lBQUEsaUJBQUs7SUFFaEQsc0dBR0k7SUFJUixpQkFBTTtJQUNOLCtCQUNJO0lBQUEsNkJBQ0k7SUFBQSx3RkFFSTtJQWlFUiwwQkFBZTtJQUVuQixpQkFBTTtJQUNWLGlCQUFNO0lBQ1YsaUJBQU07Ozs7O0lBeEZGLGdGQUF5RDtJQUNQLHVDQUFvQjtJQUlwQyxlQUFpQjtJQUFqQix3Q0FBaUI7SUFHUSxlQUF5QjtJQUF6Qiw2Q0FBeUI7SUFTNUMsZUFBZ0Q7SUFBaEQsNkNBQWdEOzs7SUEzQ3hHLDhCQUNJO0lBRUEsOEJBQ0k7SUFBQSwrQkFDSTtJQUFBLDhCQUNJO0lBQUEsNEJBQU87SUFBQSxZQUF5QjtJQUFBLGlCQUFPO0lBQzNDLGlCQUFLO0lBQ0wsMEJBQ0k7SUFBQSwrRUFFSTtJQUtSLGlCQUFLO0lBQ1QsaUJBQU07SUFDTixrQ0FDSTtJQUNBLDZDQUNKO0lBQUEsaUJBQVM7SUFDYixpQkFBTTtJQUNOLGdDQUNJO0lBQUEsK0JBQ0k7SUFBQSxtRkFJSTtJQXNGUixpQkFBTTtJQUVWLGlCQUFNO0lBQ1YsaUJBQU07OztJQWhIaUIsZUFBeUI7SUFBekIsdUdBQXlCO0lBR1gsZUFBNEM7SUFBNUMsNkNBQTRDO0lBa0JqRSxlQUFpRDtJQUFqRCw2Q0FBaUQ7OztBRC9LN0UsTUFBTSxPQUFPLHlCQUF5QjtJQTZDcEMsWUFDVSxFQUFlLEVBQ2hCLE9BQTBCLEVBQ3pCLEtBQXFCLEVBQ3JCLE1BQWMsRUFDZCxNQUFpQjtRQUpqQixPQUFFLEdBQUYsRUFBRSxDQUFhO1FBQ2hCLFlBQU8sR0FBUCxPQUFPLENBQW1CO1FBQ3pCLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQ3JCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxXQUFNLEdBQU4sTUFBTSxDQUFXO1FBaEQzQixrQkFBYSxHQUFRLEVBQUUsQ0FBQztRQUN4QixZQUFPLEdBQUMsSUFBSSxDQUFDO1FBQ2IsU0FBSSxHQUFHLEVBQUUsQ0FBQztRQUNWLE9BQUUsR0FBRyxHQUFHLENBQUM7UUFDVCxXQUFNLEdBQUcsRUFBRSxDQUFDO1FBQ1osY0FBUyxHQUFDLElBQUksQ0FBQztRQUNmLG9CQUFlLEdBQUcsS0FBSyxDQUFDO1FBQ3hCLGlCQUFZLEdBQUMsQ0FBQyxDQUFDO1FBR2YsZ0JBQVcsR0FBRztZQUNaLEVBQUUsSUFBSSxFQUFFLGlCQUFpQixFQUFFO1lBQzNCLEVBQUUsSUFBSSxFQUFFLGVBQWUsRUFBRTtZQUN6QixFQUFFLElBQUksRUFBRSxjQUFjLEVBQUU7WUFDeEIsRUFBRSxJQUFJLEVBQUUsb0JBQW9CLEVBQUU7WUFDOUIsRUFBRSxJQUFJLEVBQUUsZ0JBQWdCLEVBQUU7WUFDMUIsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFO1lBQ3BCLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRTtZQUNsQixFQUFFLElBQUksRUFBRSxZQUFZLEVBQUU7WUFDdEIsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFO1lBQ3ZCLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRTtZQUN0QixFQUFFLElBQUksRUFBRSxhQUFhLEVBQUU7WUFDdkIsRUFBRSxJQUFJLEVBQUUsZUFBZSxFQUFFO1lBQ3pCLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRTtZQUNoQixFQUFFLElBQUksRUFBRSxLQUFLLEVBQUU7WUFDZixFQUFFLElBQUksRUFBRSxVQUFVLEVBQUU7WUFDcEIsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFO1lBQ2hCLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRTtZQUN0QixFQUFFLElBQUksRUFBRSxXQUFXLEVBQUU7WUFDckIsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFO1lBQ2pCLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRTtZQUNuQixFQUFFLElBQUksRUFBRSxXQUFXLEVBQUU7U0FDdEIsQ0FBQztRQUVGLFVBQUssR0FBRyxFQUFFLENBQUM7UUFNWCxhQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ2pCLDBCQUFxQixHQUFDLElBQUksQ0FBQztJQVFyQixDQUFDO0lBSU4sUUFBUSxDQUFDLEdBQUc7UUFDVCxPQUFPLEdBQUcsS0FBSyxTQUFTLElBQUksR0FBRyxLQUFLLElBQUksSUFBSSxHQUFHLENBQUMsV0FBVyxJQUFJLE1BQU0sQ0FBQztJQUN4RSxDQUFDO0lBRUgsYUFBYTtRQUNYLElBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFDO1lBQ2YsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsb0JBQW9CLEVBQUM7Z0JBQ3BDLElBQUksRUFBQyxFQUFFO2FBQ1IsQ0FBQyxDQUFBO1lBQ0YsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQTtTQUM3QjtRQUNELE9BQU8sSUFBSSxDQUFBO0lBQ2IsQ0FBQztJQUVLLFFBQVE7O1lBRVosSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7WUFDM0IsSUFBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBRWpELFVBQVUsQ0FBQyxHQUFTLEVBQUU7Z0JBQ3BCLE1BQU0sSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUNwQyxDQUFDLENBQUEsRUFBRSxHQUFHLENBQUMsQ0FBQztZQUVSLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFO2dCQUN6QyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztZQUN4QixDQUFDLENBQUMsQ0FBQztZQUNILElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNqRCxJQUFJLElBQUksQ0FBQyxFQUFFLElBQUksSUFBSSxDQUFDLEVBQUUsS0FBSyxHQUFHLEVBQUU7Z0JBQzlCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO2dCQUNyQixVQUFVLENBQUMsR0FBUyxFQUFFOztvQkFDcEIsSUFBSSxDQUFDLGlCQUFpQixHQUFHLE1BQU0sSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO29CQUNuRSxzQ0FBc0M7b0JBQ3RDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFBO29CQUM1QyxJQUFJLENBQUMsVUFBVSxHQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxVQUFVLENBQUM7b0JBQ2xELElBQUksQ0FBQyxlQUFlLFNBQUMsSUFBSSxDQUFDLGlCQUFpQiwwQ0FBRSxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUE7b0JBQzFELElBQUksSUFBSSxDQUFDLGlCQUFpQixDQUFDLFVBQVUsRUFBRTt3QkFDckMsSUFBSSxDQUFDLHVCQUF1QixFQUFFLENBQUE7cUJBQy9CO2dCQUNILENBQUMsQ0FBQSxFQUFFLEdBQUcsQ0FBQyxDQUFDO2FBQ1Q7aUJBQU07Z0JBQ0wsVUFBVSxDQUFDLEdBQVMsRUFBRTtvQkFDcEIscUVBQXFFO29CQUNyRSw4Q0FBOEM7b0JBQzlDLG9EQUFvRDtvQkFDcEQsNERBQTREO29CQUM1RCxnQ0FBZ0M7Z0JBQ2xDLENBQUMsQ0FBQSxFQUFFLEdBQUcsQ0FBQyxDQUFDO2FBQ1Q7UUFDSCxDQUFDO0tBQUE7SUFFRCxtQkFBbUI7UUFDakIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztZQUN4QixVQUFVLEVBQUUsQ0FBQyxDQUFDLEVBQUUsVUFBVSxDQUFDLFFBQVEsQ0FBQztTQUNyQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsdUJBQXVCO1FBQ3JCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO0lBQ3pCLENBQUM7SUFHRCxRQUFRLENBQUMsRUFBRTtRQUNULElBQUksQ0FBQyxlQUFlLEdBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssRUFBRSxDQUFDLENBQUM7UUFDL0QsSUFBSSxDQUFDLFVBQVUsR0FBRSxJQUFJLENBQUMsZUFBZSxDQUFDLFVBQVU7YUFDL0MsTUFBTSxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUM7YUFDckMsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUU7WUFDWCxJQUFJLEdBQUcsQ0FBQyxLQUFLLEVBQUU7Z0JBQ2IsTUFBTSxDQUFDLEdBQUcsR0FBRyxDQUFDLEtBQUs7cUJBQ2hCLE1BQU0sQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDO3FCQUN2QyxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRTtvQkFDWCxJQUFJLEdBQUcsQ0FBQyxLQUFLLEVBQUU7d0JBQ2IsTUFBTSxDQUFDLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRTs0QkFDbkMsSUFBSSxLQUFLLENBQUMsS0FBSyxFQUFFO2dDQUNmLE1BQU0sQ0FBQyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsZ0JBQWdCLENBQUMsQ0FBQTtnQ0FDekQsdUNBQ0ssS0FBSyxLQUNSLEtBQUssRUFBRSxDQUFDLElBQ1Q7NkJBQ0Y7NEJBQ0QsT0FBTyxLQUFLLENBQUM7d0JBQ2YsQ0FBQyxDQUFDLENBQUM7d0JBQ0gsdUNBQ0ssR0FBRyxLQUNOLEtBQUssRUFBRSxDQUFDLElBQ1Q7cUJBQ0Y7b0JBQ0QsT0FBTyxHQUFHLENBQUM7Z0JBQ2IsQ0FBQyxDQUFDLENBQUE7Z0JBQ0osdUNBQ0ssR0FBRyxLQUNOLEtBQUssRUFBRSxDQUFDLElBQ1Q7YUFDRjtZQUNELE9BQU8sR0FBRyxDQUFBO1FBQ1osQ0FBQyxDQUFDLENBQUE7SUFDSixDQUFDO0lBRUQsWUFBWSxDQUFDLEtBQUs7UUFDaEIsSUFBSSxLQUFLLEdBQUMsS0FBSyxDQUFDO1FBQ2hCLElBQUcsS0FBSyxFQUFDO1lBQ1AsS0FBSyxNQUFNLEdBQUcsSUFBSSxLQUFLLEVBQUU7Z0JBQ3ZCLElBQUcsR0FBRyxDQUFDLEtBQUssRUFBQztvQkFDWCxLQUFLLEdBQUMsSUFBSSxDQUFDO2lCQUNaO2FBQ0Y7U0FDRjtRQUNELE9BQU8sS0FBSyxDQUFBO0lBQ2QsQ0FBQztJQUVELGdCQUFnQjtRQUNkLE1BQU0sY0FBYyxHQUFDLENBQUMsS0FBSyxFQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEtBQUssSUFBSSxLQUFLLENBQUMsV0FBVyxJQUFJLEtBQUssQ0FBQyxJQUFJLEtBQUcsbUJBQW1CLElBQUssS0FBSyxDQUFDLGFBQWEsSUFBSyxDQUFDLEtBQUssQ0FBQyxXQUFXLElBQUksS0FBSyxDQUFDLElBQUksS0FBRyxtQkFBbUIsQ0FBQTtRQUN4TCxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFO1lBQzlELElBQUcsS0FBSyxDQUFDLEtBQUssRUFBQztnQkFDWixPQUFPLEtBQUssQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxFQUFDLEVBQUU7b0JBQy9CLElBQUcsSUFBSSxDQUFDLEtBQUssRUFBQzt3QkFDWCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxFQUFDLEVBQUU7NEJBQzdCLE9BQU8sY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFBO3dCQUNoQyxDQUFDLENBQUMsQ0FBQTtxQkFDSjtvQkFDRCxPQUFPLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQTtnQkFDN0IsQ0FBQyxDQUFDLENBQUE7YUFDSjtZQUNELE9BQU8sY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFBO1FBQzlCLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDTixDQUFDO0lBR0ssUUFBUTs7WUFDWixJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxFQUFFO2dCQUM5QyxNQUFNLE1BQU0sR0FDVixJQUFJLENBQUMsRUFBRSxJQUFJLElBQUksQ0FBQyxFQUFFLEtBQUssR0FBRztvQkFDeEIsQ0FBQyxDQUFDLE1BQU0sSUFBSSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsaUNBQ2hDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxLQUNsQixVQUFVLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFDM0IsR0FBRyxFQUFDLElBQUksQ0FBQyxFQUFFLElBQ1g7b0JBQ0YsQ0FBQyxDQUFDLE1BQU0sSUFBSSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsaUNBQ2hDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxLQUNsQixVQUFVLEVBQUUsSUFBSSxDQUFDLFVBQVUsSUFDM0IsQ0FBQztnQkFFUCxJQUFJLE1BQU0sRUFBRTtvQkFDVixJQUFJLElBQUksQ0FBQyxFQUFFLElBQUksSUFBSSxDQUFDLEVBQUUsS0FBSyxHQUFHLEVBQUU7d0JBQzlCLElBQUksQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQzt3QkFDcEMsSUFBSSxDQUFDLGlCQUFpQixHQUFHLE1BQU0sQ0FBQztxQkFDakM7b0JBQ0QsTUFBTSxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksRUFBRSxDQUFDO29CQUNsQyxJQUFJLENBQUMsT0FBTyxHQUFDLElBQUksQ0FBQztvQkFDbEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7b0JBQ3JCLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEdBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztpQkFDM0Q7cUJBQU07b0JBQ0wsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQztpQkFDN0I7YUFDRjtRQUNILENBQUM7S0FBQTtJQUdELFlBQVksQ0FBQyxLQUFLLEVBQUUsR0FBRyxNQUFNO1FBQzNCLElBQUksS0FBSyxFQUFFO1lBQ1QsSUFBSSxLQUFLLENBQUMsS0FBSyxFQUFFO2dCQUNmLEtBQUssQ0FBQyxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7YUFDOUI7WUFDRCxnREFBZ0Q7WUFDaEQsdURBQXVEO1lBQ3ZELDZDQUE2QztZQUM3QyxzQ0FBc0M7WUFDdEMsb0VBQW9FO1lBQ3BFLDBEQUEwRDtZQUMxRCxVQUFVO1lBQ1YsUUFBUTtZQUNSLE1BQU07WUFDTixJQUFJO1NBRUw7UUFDRCxJQUFJLE1BQU0sQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUM7U0FDcEY7YUFBTSxJQUFJLE1BQU0sQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBQzlCLElBQUksQ0FBQyxhQUFhLEdBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtZQUN4RCxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksRUFBRTtnQkFDNUQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQzthQUNsRTtpQkFBTTtnQkFDTCxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7Z0JBQy9DLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7YUFDakU7U0FDRjthQUFNLElBQUksTUFBTSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFDOUIsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxFQUFFO2dCQUM3RSxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQzthQUNuRjtpQkFBTTtnQkFDTCxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7Z0JBQy9DLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7Z0JBQ2hFLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO2FBQ2xGO1NBQ0Y7YUFBTTtZQUNMLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLEVBQUU7Z0JBQzlGLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQzthQUNwRztpQkFBTTtnQkFDTCxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7Z0JBQy9DLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7Z0JBQ2hFLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO2dCQUNqRixJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7YUFDbkc7U0FDRjtJQUNILENBQUM7SUFFRCxJQUFJLENBQUMsS0FBNEI7UUFDL0IsSUFBSSxDQUFDLE9BQU8sR0FBQyxLQUFLLENBQUM7UUFDbkIsSUFBSSxLQUFLLENBQUMsaUJBQWlCLEtBQUssS0FBSyxDQUFDLFNBQVMsRUFBRTtZQUMvQyxlQUFlLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLGFBQWEsRUFBRSxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUM7U0FDaEY7YUFBTTtZQUNMLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLGFBQWEsRUFBRSxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUM7U0FDaEg7SUFDSCxDQUFDO0lBRUQsbUJBQW1CLENBQUMsQ0FBQztRQUNuQixDQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUNELGNBQWM7UUFDWixJQUFJLENBQUMsZUFBZSxHQUFHLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQztJQUMvQyxDQUFDO0lBRUQsYUFBYSxDQUFDLENBQUMsRUFBRSxLQUFLO1FBQ3BCLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMsT0FBTyxHQUFDLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxlQUFlLEdBQUcsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDO0lBQy9DLENBQUM7SUFFRCxlQUFlLENBQUMsQ0FBQztRQUNmLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMsZUFBZSxHQUFHLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQztJQUMvQyxDQUFDO0lBRUQsVUFBVTtRQUNSLE1BQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLHFCQUFxQixFQUFDO1lBQ3ZELElBQUksRUFBQztnQkFDSCxXQUFXLEVBQUMsSUFBSSxDQUFDLFdBQVc7Z0JBQzVCLElBQUksRUFBQyxJQUFJLENBQUMsSUFBSTtnQkFDZCxJQUFJLEVBQUMsSUFBSSxDQUFDLElBQUk7YUFDZjtTQUNGLENBQUMsQ0FBQztRQUNILFNBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxTQUFrQixFQUFFLEVBQUU7WUFDdkQsSUFBSSxTQUFTLEVBQUU7YUFFZDtRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELFVBQVUsQ0FBQyxLQUFXO1FBQ3JCLElBQUksUUFBUSxHQUFDLEtBQUssQ0FBQztRQUNsQixLQUFLLE1BQU0sSUFBSSxJQUFJLEtBQUssRUFBRTtZQUN4QixJQUFHLElBQUksQ0FBQyxZQUFZLEVBQUM7Z0JBQ25CLFFBQVEsR0FBQyxJQUFJLENBQUM7YUFDZjtTQUVGO0lBQ0gsQ0FBQztJQUVELDZCQUE2QixDQUFDLFdBQVcsRUFBQyxRQUFRLEVBQUUsY0FBYztRQUNoRSxJQUFHLENBQUMsV0FBVyxFQUFDO1lBQ2QsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUNELElBQUcsUUFBUSxDQUFDLEtBQUssS0FBRyxDQUFDLEVBQUM7WUFDcEIsSUFBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDLElBQUksS0FBRyxtQkFBbUIsRUFBQztnQkFDakcsTUFBTSxLQUFLLEdBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUMsS0FBSyxFQUFDLEVBQUUsQ0FBQSxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUE7Z0JBQzVILElBQUksT0FBTyxHQUFDLEtBQUssQ0FBQztnQkFDbEIsS0FBSSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7b0JBQ3BDLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssSUFBSSxjQUFjLEVBQUU7d0JBQ2xDLE9BQU8sR0FBRyxJQUFJLENBQUM7d0JBQ2YsTUFBTTtxQkFDUDtpQkFDSjtnQkFDRCxPQUFPLE9BQU8sQ0FBQzthQUNoQjtpQkFBSTtnQkFDSCxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLENBQUMsS0FBSyxLQUFHLGNBQWMsQ0FBQTthQUNuRztTQUNGO2FBQUssSUFBRyxRQUFRLENBQUMsS0FBSyxLQUFHLENBQUMsRUFBQztZQUMxQixJQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsQ0FBQyxJQUFJLEtBQUcsbUJBQW1CLEVBQUM7Z0JBQzNILE1BQU0sS0FBSyxHQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUMsS0FBSyxFQUFDLEVBQUUsQ0FBQSxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUE7Z0JBQ3RKLElBQUksT0FBTyxHQUFDLEtBQUssQ0FBQztnQkFDbEIsS0FBSSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7b0JBQ3BDLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssSUFBSSxjQUFjLEVBQUU7d0JBQ2xDLE9BQU8sR0FBRyxJQUFJLENBQUM7d0JBQ2YsTUFBTTtxQkFDUDtpQkFDSjtnQkFDRCxPQUFPLE9BQU8sQ0FBQzthQUNoQjtpQkFBSTtnQkFDSCxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsQ0FBQyxLQUFLLEtBQUcsY0FBYyxDQUFBO2FBQzdIO1NBQ0Y7YUFBSyxJQUFHLFFBQVEsQ0FBQyxLQUFLLEtBQUcsQ0FBQyxFQUFDO1lBQzFCLElBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLENBQUMsSUFBSSxLQUFHLG1CQUFtQixFQUFDO2dCQUNwSixNQUFNLEtBQUssR0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUMsS0FBSyxFQUFDLEVBQUUsQ0FBQSxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUE7Z0JBQy9LLElBQUksT0FBTyxHQUFDLEtBQUssQ0FBQztnQkFDbEIsS0FBSSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7b0JBQ3BDLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssSUFBSSxjQUFjLEVBQUU7d0JBQ2xDLE9BQU8sR0FBRyxJQUFJLENBQUM7d0JBQ2YsTUFBTTtxQkFDUDtpQkFDSjtnQkFDRCxPQUFPLE9BQU8sQ0FBQzthQUNoQjtpQkFBSTtnQkFDSCxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDLEtBQUssS0FBRyxjQUFjLENBQUE7YUFDdEo7U0FDRjthQUFJO1lBQ0gsT0FBTyxJQUFJLENBQUE7U0FDWjtJQUVILENBQUM7SUFFRCxZQUFZLENBQUMsS0FBSztRQUNoQixJQUFJLFVBQVUsR0FBQyxLQUFLLENBQUM7UUFDckIsS0FBSyxNQUFNLElBQUksSUFBSSxLQUFLLEVBQUU7WUFDeEIsSUFBRyxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFDLENBQUMsRUFBQztnQkFDbkMsVUFBVSxHQUFDLElBQUksQ0FBQztnQkFDaEIsTUFBTTthQUNQO1NBQ0Y7UUFDRCxPQUFPLFVBQVUsQ0FBQTtJQUNuQixDQUFDO0lBRUQsWUFBWSxDQUFDLENBQUM7UUFDWixJQUFJLENBQUMsWUFBWSxHQUFDLENBQUMsQ0FBQztRQUNwQixJQUFJLENBQUMscUJBQXFCLEdBQUMsQ0FBQyxDQUFDO1FBQzdCLFVBQVUsQ0FBQyxHQUFHLEVBQUU7WUFDWixJQUFJLENBQUMscUJBQXFCLEdBQUMsSUFBSSxDQUFDO1FBQ3BDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNYLENBQUM7O2tHQTdYVSx5QkFBeUI7OERBQXpCLHlCQUF5QjtRQ2R0Qyw0QkFDSTtRQUFBLDhCQUNJO1FBQUEsNEZBQ0k7UUEwSUosK0JBQ0k7UUFEaUUsc0dBQVUsY0FBVSxJQUFDO1FBQ3RGLDJFQUNJO1FBbUJKLDJFQUNJO1FBc0hSLGlCQUFPO1FBQ1gsaUJBQU07UUFFVixpQkFBTzs7UUExUmUsZUFBZ0I7UUFBaEIsbUNBQWdCO1FBMkl4QixlQUEyQztRQUEzQyxvRUFBMkMsdUJBQUE7UUFDakIsZUFBbUI7UUFBbkIsc0NBQW1CO1FBb0J6QixlQUFrQjtRQUFsQixxQ0FBa0I7O2tERHBKdkMseUJBQXlCO2NBTHJDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsbUJBQW1CO2dCQUM3QixXQUFXLEVBQUUsb0NBQW9DO2dCQUNqRCxTQUFTLEVBQUUsQ0FBQyxvQ0FBb0MsQ0FBQzthQUNsRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtQnVpbGRlciwgRm9ybUdyb3VwLCBWYWxpZGF0b3JzIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XG5pbXBvcnQgeyBPbmJvYXJkaW5nU2VydmljZSB9IGZyb20gXCIuLi9vbmJvYXJkaW5nLnNlcnZpY2VcIjtcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBDZGtEcmFnRHJvcCwgbW92ZUl0ZW1JbkFycmF5LCB0cmFuc2ZlckFycmF5SXRlbSB9IGZyb20gXCJAYW5ndWxhci9jZGsvZHJhZy1kcm9wXCI7XG5pbXBvcnQgeyBNYXREaWFsb2cgfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nXCI7XG5pbXBvcnQgeyBVcGRhdGVQcm9maWxDb21wb25lbnQgfSBmcm9tICcuLi9jb21wb25lbnRzL3VwZGF0ZS1wcm9maWwvdXBkYXRlLXByb2ZpbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgRXhpdENvbmZpcm1Db21wb25lbnQgfSBmcm9tICcuLi9jb21wb25lbnRzL2V4aXQtY29uZmlybS9leGl0LWNvbmZpcm0uY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcImNyZWF0ZS1vbmJvYXJkaW5nXCIsXG4gIHRlbXBsYXRlVXJsOiBcIi4vb25ib2FyZGluZy1jcmVhdGUuY29tcG9uZW50Lmh0bWxcIixcbiAgc3R5bGVVcmxzOiBbXCIuL29uYm9hcmRpbmctY3JlYXRlLmNvbXBvbmVudC5zY3NzXCJdLFxufSlcbmV4cG9ydCBjbGFzcyBPbmJvYXJkaW5nQ3JlYXRlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgZm9ybTogRm9ybUdyb3VwO1xuICBjdXJyZW50UHJvZmlsOiBhbnkgPSB7fTtcbiAgY2FuRXhpdD10cnVlO1xuICB0YWdzID0gW107XG4gIGlkID0gXCIwXCI7XG4gIHBhcmVudCA9IFtdO1xuICBlZGl0SW5kZXg9bnVsbDtcbiAgc2hvd1Byb2ZpbGVOYW1lID0gZmFsc2U7XG4gIHNlbGVjdGVkTWVudT0wO1xuICB0ZW1wbGF0ZXM6IGFueTtcbiAgY29udGFjdHM6IGFueTtcbiAgbWF0SWNvbkxpc3QgPSBbXG4gICAgeyBuYW1lOiAnZGV2ZWxvcGVyX2JvYXJkJyB9LFxuICAgIHsgbmFtZTogJ2NvbnRhY3RfcGhvbmUnIH0sXG4gICAgeyBuYW1lOiAnY29udGFjdF9tYWlsJyB9LFxuICAgIHsgbmFtZTogJ3BsYXlfY2lyY2xlX2ZpbGxlZCcgfSxcbiAgICB7IG5hbWU6ICdjb250cm9sX2NhbWVyYScgfSxcbiAgICB7IG5hbWU6ICdleHBsaWNpdCcgfSxcbiAgICB7IG5hbWU6ICdwZXJzb24nIH0sXG4gICAgeyBuYW1lOiAndmlzaWJpbGl0eScgfSxcbiAgICB7IG5hbWU6ICd2aWRlb19sYWJlbCcgfSxcbiAgICB7IG5hbWU6ICdhZGRfY2lyY2xlJyB9LFxuICAgIHsgbmFtZTogJ3dhdGNoX2xhdGVyJyB9LFxuICAgIHsgbmFtZTogJ3doZXJlX3RvX3ZvdGUnIH0sXG4gICAgeyBuYW1lOiAnd29yaycgfSxcbiAgICB7IG5hbWU6ICd3ZWInIH0sXG4gICAgeyBuYW1lOiAnd2hhdHNob3QnIH0sXG4gICAgeyBuYW1lOiAnd2lmaScgfSxcbiAgICB7IG5hbWU6ICd3b3Jrc3BhY2VzJyB9LFxuICAgIHsgbmFtZTogJ3diX2Nsb3VkeScgfSxcbiAgICB7IG5hbWU6ICd3YXZlcycgfSxcbiAgICB7IG5hbWU6ICd3YXJuaW5nJyB9LFxuICAgIHsgbmFtZTogJ3NwYWNlX2RhcycgfVxuICBdO1xuICBpc1BpY3RvTGlzdFNob3c6IGJvb2xlYW47XG4gIHBpY3RvID0gXCJcIjtcbiAgY3VycmVudE9uYm9hcmRpbmc6IGFueTtcbiAgY3VycmVudFRlbXBsYXRlOmFueVxuICBpc1NlbGVjdGVkOiBib29sZWFuO1xuICBjdXJyZW50VXNlcjogYW55O1xuICBjdXJyZW50QWN0aXZlOiBhbnk7XG4gIHNob3dNb2RlID0gZmFsc2U7XG4gIHNlbGVjdGVkQ2F0ZWdvcnlJbmRleD1udWxsO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZmI6IEZvcm1CdWlsZGVyLCBcbiAgICBwdWJsaWMgc2VydmljZTogT25ib2FyZGluZ1NlcnZpY2UsIFxuICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLCBcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgIHByaXZhdGUgZGlhbG9nOiBNYXREaWFsb2dcbiAgICApIHsgfVxuICBcbiAgY2F0ZWdvcmllczogYW55XG5cbiAgIGlzT2JqZWN0KG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAhPT0gdW5kZWZpbmVkICYmIG9iaiAhPT0gbnVsbCAmJiBvYmouY29uc3RydWN0b3IgPT0gT2JqZWN0O1xuICAgIH1cblxuICBjYW5EZWFjdGl2YXRlKCl7XG4gICAgaWYoIXRoaXMuY2FuRXhpdCl7XG4gICAgICB0aGlzLmRpYWxvZy5vcGVuKEV4aXRDb25maXJtQ29tcG9uZW50LHtcbiAgICAgICAgZGF0YTonJ1xuICAgICAgfSlcbiAgICAgIHJldHVybiB0aGlzLnNlcnZpY2UuY2FuRXhpdCRcbiAgICB9XG4gICAgcmV0dXJuIHRydWUgICAgXG4gIH1cbiAgXG4gIGFzeW5jIG5nT25Jbml0KCkge1xuXG4gICAgdGhpcy5vbkNyZWF0ZUR5bmFtaWNGb3JtKCk7XG4gICAgdGhpcy5pZCA9IHRoaXMucm91dGUuc25hcHNob3QucGFyYW1NYXAuZ2V0KFwiaWRcIik7XG5cbiAgICBzZXRUaW1lb3V0KGFzeW5jICgpID0+IHtcbiAgICAgIGF3YWl0IHRoaXMuc2VydmljZS5nZXRBbGxQcm9maWwoKTsgICAgICBcbiAgICB9LCA1MDApO1xuXG4gICAgdGhpcy5zZXJ2aWNlLl90ZW1wbGF0ZXMuc3Vic2NyaWJlKChkYXRhKSA9PiB7XG4gICAgICB0aGlzLnRlbXBsYXRlcyA9IGRhdGE7XG4gICAgfSk7XG4gICAgdGhpcy5pZCA9IHRoaXMucm91dGUuc25hcHNob3QucGFyYW1NYXAuZ2V0KFwiaWRcIik7XG4gICAgaWYgKHRoaXMuaWQgJiYgdGhpcy5pZCAhPT0gXCIwXCIpIHtcbiAgICAgIHRoaXMuc2hvd01vZGUgPSB0cnVlO1xuICAgICAgc2V0VGltZW91dChhc3luYyAoKSA9PiB7XG4gICAgICAgIHRoaXMuY3VycmVudE9uYm9hcmRpbmcgPSBhd2FpdCB0aGlzLnNlcnZpY2UuZ2V0T25ib2FyZGluZyh0aGlzLmlkKTtcbiAgICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLmN1cnJlbnRPbmJvYXJkaW5nKTtcbiAgICAgICAgdGhpcy5mb3JtLnBhdGNoVmFsdWUodGhpcy5jdXJyZW50T25ib2FyZGluZylcbiAgICAgICAgdGhpcy5jYXRlZ29yaWVzPXRoaXMuY3VycmVudE9uYm9hcmRpbmcuY2F0ZWdvcmllcztcbiAgICAgICAgdGhpcy5jdXJyZW50VGVtcGxhdGU9dGhpcy5jdXJyZW50T25ib2FyZGluZz8udnRlbXBsYXRlc1swXVxuICAgICAgICBpZiAodGhpcy5jdXJyZW50T25ib2FyZGluZy5UZW1wbGF0ZUlkKSB7XG4gICAgICAgICAgdGhpcy5vblNlbGVjdENvbnRhY3RUZW1wbGF0ZSgpXG4gICAgICAgIH1cbiAgICAgIH0sIDUwMCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldFRpbWVvdXQoYXN5bmMgKCkgPT4ge1xuICAgICAgICAvL3RoaXMuY3VycmVudE9uYm9hcmRpbmcgPSBhd2FpdCB0aGlzLnNlcnZpY2UuZ2V0T25ib2FyZGluZyh0aGlzLmlkKTtcbiAgICAgICAgLy90aGlzLmZvcm0ucGF0Y2hWYWx1ZSh0aGlzLmN1cnJlbnRPbmJvYXJkaW5nKVxuICAgICAgICAvL3RoaXMuY2F0ZWdvcmllcz10aGlzLmN1cnJlbnRPbmJvYXJkaW5nLmNhdGVnb3JpZXM7XG4gICAgICAgIC8vdGhpcy5jdXJyZW50VGVtcGxhdGU9dGhpcy5jdXJyZW50T25ib2FyZGluZz8udnRlbXBsYXRlc1swXVxuICAgICAgICAvL3RoaXMub25TZWxlY3RDb250YWN0VGVtcGxhdGUoKVxuICAgICAgfSwgNTAwKTtcbiAgICB9XG4gIH1cblxuICBvbkNyZWF0ZUR5bmFtaWNGb3JtKCkge1xuICAgIHRoaXMuZm9ybSA9IHRoaXMuZmIuZ3JvdXAoe1xuICAgICAgVGVtcGxhdGVJZDogWzAsIFZhbGlkYXRvcnMucmVxdWlyZWRdXG4gICAgfSk7XG4gIH1cblxuICBvblNlbGVjdENvbnRhY3RUZW1wbGF0ZSgpIHtcbiAgICB0aGlzLmlzU2VsZWN0ZWQgPSB0cnVlO1xuICB9XG5cblxuICBvblNlbGVjdChpZCkge1xuICAgIHRoaXMuY3VycmVudFRlbXBsYXRlPSB0aGlzLnRlbXBsYXRlcy5maW5kKCh0KSA9PiB0Ll9pZCA9PT0gaWQpO1xuICAgIHRoaXMuY2F0ZWdvcmllcyA9dGhpcy5jdXJyZW50VGVtcGxhdGUuY2F0ZWdvcmllc1xuICAgIC5maWx0ZXIoKGNhdCkgPT4gY2F0LmV4cGFuZE9uYm9hcmRpbmcpXG4gICAgLm1hcCgoY2F0KSA9PiB7XG4gICAgICBpZiAoY2F0LmZvcm1zKSB7XG4gICAgICAgIGNvbnN0IGYgPSBjYXQuZm9ybXNcbiAgICAgICAgICAuZmlsdGVyKChmb3JtKSA9PiBmb3JtLmV4cGFuZE9uYm9hcmRpbmcpXG4gICAgICAgICAgLm1hcCgoc3ViKSA9PiB7XG4gICAgICAgICAgICBpZiAoc3ViLmZvcm1zKSB7XG4gICAgICAgICAgICAgIGNvbnN0IHMgPSBzdWIuZm9ybXMuZmlsdGVyKChjaGlsZCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChjaGlsZC5mb3Jtcykge1xuICAgICAgICAgICAgICAgICAgY29uc3QgYyA9IGNoaWxkLmZvcm1zLmZpbHRlcigoY2gpID0+IGNoLmV4cGFuZE9uYm9hcmRpbmcpXG4gICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAuLi5jaGlsZCxcbiAgICAgICAgICAgICAgICAgICAgZm9ybXM6IGNcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNoaWxkO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5zdWIsXG4gICAgICAgICAgICAgICAgZm9ybXM6IHNcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHN1YjtcbiAgICAgICAgICB9KVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIC4uLmNhdCxcbiAgICAgICAgICBmb3JtczogZlxuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gY2F0XG4gICAgfSlcbiAgfVxuXG4gIGV4aXN0U3ViRm9ybShmb3Jtcyl7XG4gICAgbGV0IGV4aXN0PWZhbHNlO1xuICAgIGlmKGZvcm1zKXtcbiAgICAgIGZvciAoY29uc3Qgc3ViIG9mIGZvcm1zKSB7XG4gICAgICAgIGlmKHN1Yi5mb3Jtcyl7XG4gICAgICAgICAgZXhpc3Q9dHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZXhpc3RcbiAgfVxuXG4gIG9uQ2hhbmdlQ2F0ZWdvcnkoKSB7XG4gICAgY29uc3QgY2hlY2tNYW5kYXRvcnk9KGZpZWxkKT0+ICEhZmllbGQudmFsdWUgJiYgZmllbGQuaXNNYW5kYXRvcnkgJiYgZmllbGQudHlwZSE9PVwiY2hlY2tib3hfbXVsdGlwbGVcIiAgfHwgZmllbGQuaXNDb25kaXRpb25hbCAgfHwgIWZpZWxkLmlzTWFuZGF0b3J5IHx8IGZpZWxkLnR5cGU9PT1cImNoZWNrYm94X211bHRpcGxlXCJcbiAgICByZXR1cm4gdGhpcy5jYXRlZ29yaWVzLmV2ZXJ5KChjYXQpID0+IGNhdC5mb3Jtcy5ldmVyeSgoZmllbGQpID0+IHsgXG4gICAgICBpZihmaWVsZC5mb3Jtcyl7XG4gICAgICAgICByZXR1cm4gZmllbGQuZm9ybXMuZXZlcnkoKGZvcm0pPT57XG4gICAgICAgICAgIGlmKGZvcm0uZm9ybXMpe1xuICAgICAgICAgICAgICByZXR1cm4gZm9ybS5mb3Jtcy5ldmVyeSgoY2hpbGQpPT57XG4gICAgICAgICAgICAgICAgICByZXR1cm4gY2hlY2tNYW5kYXRvcnkoY2hpbGQpXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgIH1cbiAgICAgICAgICAgcmV0dXJuIGNoZWNrTWFuZGF0b3J5KGZvcm0pXG4gICAgICAgICB9KVxuICAgICAgfVxuICAgICAgcmV0dXJuIGNoZWNrTWFuZGF0b3J5KGZpZWxkKVxuICAgIH0pKTtcbiAgfVxuXG5cbiAgYXN5bmMgb25TdWJtaXQoKSB7XG4gICAgaWYgKHRoaXMuZm9ybS52YWxpZCAmJiB0aGlzLm9uQ2hhbmdlQ2F0ZWdvcnkoKSkgeyBcbiAgICAgIGNvbnN0IHJlc3VsdCA9XG4gICAgICAgIHRoaXMuaWQgJiYgdGhpcy5pZCAhPT0gXCIwXCJcbiAgICAgICAgICA/IGF3YWl0IHRoaXMuc2VydmljZS51cGRhdGVPbmJvYXJkaW5nKHtcbiAgICAgICAgICAgIC4uLnRoaXMuZm9ybS52YWx1ZSxcbiAgICAgICAgICAgIGNhdGVnb3JpZXM6IHRoaXMuY2F0ZWdvcmllcyxcbiAgICAgICAgICAgIF9pZDp0aGlzLmlkXG4gICAgICAgICAgfSlcbiAgICAgICAgICA6IGF3YWl0IHRoaXMuc2VydmljZS5jcmVhdGVPbmJvYXJkaW5nKHtcbiAgICAgICAgICAgIC4uLnRoaXMuZm9ybS52YWx1ZSxcbiAgICAgICAgICAgIGNhdGVnb3JpZXM6IHRoaXMuY2F0ZWdvcmllc1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIFxuICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICBpZiAodGhpcy5pZCAmJiB0aGlzLmlkICE9PSBcIjBcIikge1xuICAgICAgICAgIHRoaXMuY2F0ZWdvcmllcyA9IHJlc3VsdC5jYXRlZ29yaWVzO1xuICAgICAgICAgIHRoaXMuY3VycmVudE9uYm9hcmRpbmcgPSByZXN1bHQ7XG4gICAgICAgIH1cbiAgICAgICAgYXdhaXQgdGhpcy5zZXJ2aWNlLmdldEFsbFByb2ZpbCgpO1xuICAgICAgICB0aGlzLmNhbkV4aXQ9dHJ1ZTsgXG4gICAgICAgIHRoaXMuc2hvd01vZGUgPSB0cnVlO1xuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbdGhpcy5zZXJ2aWNlLm1haW5QYXRoKycvcmVxdWVzdHMnXSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmxvZyhcImVycnJvci4uLi4uLlwiKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuXG4gIG9uRXhwZW5kTW9yZShldmVudCwgLi4ucGFyYW1zKSB7XG4gICAgaWYgKGV2ZW50KSB7XG4gICAgICBpZiAoZXZlbnQuZXZlbnQpIHtcbiAgICAgICAgZXZlbnQuZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIH1cbiAgICAgIC8vIGlmIChldmVudC5maWVsZCAmJiAhZXZlbnQuZmllbGQuZXhwYW5kTW9yZSkge1xuICAgICAgLy8gICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY2F0ZWdvcmllcy5sZW5ndGg7IGkrKykge1xuICAgICAgLy8gICAgIHRoaXMuY2F0ZWdvcmllc1tpXS5leHBhbmRNb3JlID0gZmFsc2U7XG4gICAgICAvLyAgICAgaWYgKHRoaXMuY2F0ZWdvcmllc1tpXS5mb3Jtcykge1xuICAgICAgLy8gICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLmNhdGVnb3JpZXNbaV0uZm9ybXMubGVuZ3RoOyBqKyspIHtcbiAgICAgIC8vICAgICAgICAgdGhpcy5jYXRlZ29yaWVzW2ldLmZvcm1zW2pdLmV4cGFuZE1vcmUgPSBmYWxzZTtcbiAgICAgIC8vICAgICAgIH1cbiAgICAgIC8vICAgICB9XG4gICAgICAvLyAgIH1cbiAgICAgIC8vIH1cblxuICAgIH1cbiAgICBpZiAocGFyYW1zLmxlbmd0aCA9PT0gMSkge1xuICAgICAgdGhpcy5jYXRlZ29yaWVzW3BhcmFtc1swXV0uZGVmYXVsdFZhbHVlID0gIXRoaXMuY2F0ZWdvcmllc1twYXJhbXNbMF1dLmRlZmF1bHRWYWx1ZTtcbiAgICB9IGVsc2UgaWYgKHBhcmFtcy5sZW5ndGggPT09IDIpIHtcbiAgICAgIHRoaXMuY3VycmVudEFjdGl2ZT1TdHJpbmcocGFyYW1zWzBdKSArIFN0cmluZyhwYXJhbXNbMV0pXG4gICAgICBpZiAodGhpcy5jYXRlZ29yaWVzW3BhcmFtc1swXV0uZm9ybXNbcGFyYW1zWzFdXS5kZWZhdWx0VmFsdWUpIHtcbiAgICAgICAgdGhpcy5jYXRlZ29yaWVzW3BhcmFtc1swXV0uZm9ybXNbcGFyYW1zWzFdXS5kZWZhdWx0VmFsdWUgPSBmYWxzZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY2F0ZWdvcmllc1twYXJhbXNbMF1dLmRlZmF1bHRWYWx1ZSA9IHRydWU7XG4gICAgICAgIHRoaXMuY2F0ZWdvcmllc1twYXJhbXNbMF1dLmZvcm1zW3BhcmFtc1sxXV0uZGVmYXVsdFZhbHVlID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHBhcmFtcy5sZW5ndGggPT09IDMpIHtcbiAgICAgIGlmICh0aGlzLmNhdGVnb3JpZXNbcGFyYW1zWzBdXS5mb3Jtc1twYXJhbXNbMV1dLmZvcm1zW3BhcmFtc1syXV0uZGVmYXVsdFZhbHVlKSB7XG4gICAgICAgIHRoaXMuY2F0ZWdvcmllc1twYXJhbXNbMF1dLmZvcm1zW3BhcmFtc1sxXV0uZm9ybXNbcGFyYW1zWzJdXS5kZWZhdWx0VmFsdWUgPSBmYWxzZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY2F0ZWdvcmllc1twYXJhbXNbMF1dLmRlZmF1bHRWYWx1ZSA9IHRydWU7XG4gICAgICAgIHRoaXMuY2F0ZWdvcmllc1twYXJhbXNbMF1dLmZvcm1zW3BhcmFtc1sxXV0uZGVmYXVsdFZhbHVlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5jYXRlZ29yaWVzW3BhcmFtc1swXV0uZm9ybXNbcGFyYW1zWzFdXS5mb3Jtc1twYXJhbXNbMl1dLmRlZmF1bHRWYWx1ZSA9IHRydWU7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0aGlzLmNhdGVnb3JpZXNbcGFyYW1zWzBdXS5mb3Jtc1twYXJhbXNbMV1dLmZvcm1zW3BhcmFtc1syXV0uZm9ybXNbcGFyYW1zWzNdXS5kZWZhdWx0VmFsdWUpIHtcbiAgICAgICAgdGhpcy5jYXRlZ29yaWVzW3BhcmFtc1swXV0uZm9ybXNbcGFyYW1zWzFdXS5mb3Jtc1twYXJhbXNbMl1dLmZvcm1zW3BhcmFtc1szXV0uZGVmYXVsdFZhbHVlID0gZmFsc2U7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNhdGVnb3JpZXNbcGFyYW1zWzBdXS5kZWZhdWx0VmFsdWUgPSB0cnVlO1xuICAgICAgICB0aGlzLmNhdGVnb3JpZXNbcGFyYW1zWzBdXS5mb3Jtc1twYXJhbXNbMV1dLmRlZmF1bHRWYWx1ZSA9IHRydWU7XG4gICAgICAgIHRoaXMuY2F0ZWdvcmllc1twYXJhbXNbMF1dLmZvcm1zW3BhcmFtc1sxXV0uZm9ybXNbcGFyYW1zWzJdXS5kZWZhdWx0VmFsdWUgPSB0cnVlO1xuICAgICAgICB0aGlzLmNhdGVnb3JpZXNbcGFyYW1zWzBdXS5mb3Jtc1twYXJhbXNbMV1dLmZvcm1zW3BhcmFtc1syXV0uZm9ybXNbcGFyYW1zWzNdXS5kZWZhdWx0VmFsdWUgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGRyb3AoZXZlbnQ6IENka0RyYWdEcm9wPHN0cmluZ1tdPikge1xuICAgIHRoaXMuY2FuRXhpdD1mYWxzZTsgIFxuICAgIGlmIChldmVudC5wcmV2aW91c0NvbnRhaW5lciA9PT0gZXZlbnQuY29udGFpbmVyKSB7XG4gICAgICBtb3ZlSXRlbUluQXJyYXkoZXZlbnQuY29udGFpbmVyLmRhdGEsIGV2ZW50LnByZXZpb3VzSW5kZXgsIGV2ZW50LmN1cnJlbnRJbmRleCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRyYW5zZmVyQXJyYXlJdGVtKGV2ZW50LnByZXZpb3VzQ29udGFpbmVyLmRhdGEsIGV2ZW50LmNvbnRhaW5lci5kYXRhLCBldmVudC5wcmV2aW91c0luZGV4LCBldmVudC5jdXJyZW50SW5kZXgpO1xuICAgIH1cbiAgfVxuXG4gIGluZ29yZURlZmF1bHRBY3Rpb24oZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgfVxuICBvblNob3dDYXRlZ29yeSgpIHtcbiAgICB0aGlzLnNob3dQcm9maWxlTmFtZSA9ICF0aGlzLnNob3dQcm9maWxlTmFtZTtcbiAgfVxuXG4gIG9uU2VsZWN0UGljdG8oZSwgcGljdG8pIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5jYW5FeGl0PWZhbHNlOyAgXG4gICAgdGhpcy5mb3JtLnBhdGNoVmFsdWUoeyBQaWN0bzogcGljdG8gfSk7XG4gICAgdGhpcy5pc1BpY3RvTGlzdFNob3cgPSAhdGhpcy5pc1BpY3RvTGlzdFNob3c7XG4gIH1cblxuICBvblNob3dQaWN0b0xpc3QoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLmlzUGljdG9MaXN0U2hvdyA9ICF0aGlzLmlzUGljdG9MaXN0U2hvdztcbiAgfVxuIFxuICBvcGVuRGlhbG9nKCkge1xuICAgIGNvbnN0IGRpYWxvZ1JlZiA9IHRoaXMuZGlhbG9nLm9wZW4oVXBkYXRlUHJvZmlsQ29tcG9uZW50LHtcbiAgICAgIGRhdGE6e1xuICAgICAgICBtYXRJY29uTGlzdDp0aGlzLm1hdEljb25MaXN0LFxuICAgICAgICBmb3JtOnRoaXMuZm9ybSxcbiAgICAgICAgdGFnczp0aGlzLnRhZ3NcbiAgICAgIH1cbiAgICB9KTtcbiAgICBkaWFsb2dSZWYuYWZ0ZXJDbG9zZWQoKS5zdWJzY3JpYmUoKGNvbmZpcm1lZDogYm9vbGVhbikgPT4ge1xuICAgICAgaWYgKGNvbmZpcm1lZCkge1xuICAgICAgICBcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGlzRXhwYW5kZWQoZm9ybXM6YW55W10pe1xuICAgbGV0IGlzRXhwZW5kPWZhbHNlO1xuICAgIGZvciAoY29uc3QgZm9ybSBvZiBmb3Jtcykge1xuICAgICAgaWYoZm9ybS5kZWZhdWx0VmFsdWUpe1xuICAgICAgICBpc0V4cGVuZD10cnVlO1xuICAgICAgfVxuICAgICAgXG4gICAgfVxuICB9XG5cbiAgb25DaGVja0NvbmRpdGlvbkxvY2F0aW9uVmFsdWUoaXNjb25kaXRpb24sbG9jYXRpb24sIGNvbmRpdGlvblZhbHVlKXtcbiAgICBpZighaXNjb25kaXRpb24pe1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGlmKGxvY2F0aW9uLmxldmVsPT09MSl7XG4gICAgICBpZih0aGlzLmNhdGVnb3JpZXNbbG9jYXRpb24uY2F0ZWdvcnlJbmRleF0uZm9ybXNbbG9jYXRpb24uY3VycmVudEluZGV4XS50eXBlPT09J2NoZWNrYm94X211bHRpcGxlJyl7XG4gICAgICAgIGNvbnN0IGFycmF5PXRoaXMuY2F0ZWdvcmllc1tsb2NhdGlvbi5jYXRlZ29yeUluZGV4XS5mb3Jtc1tsb2NhdGlvbi5jdXJyZW50SW5kZXhdLmRlZmF1bHRWYWx1ZS5maWx0ZXIoKGNoZWNrKT0+Y2hlY2suY2hlY2tlZClcbiAgICAgICAgbGV0IGNoZWNrZWQ9ZmFsc2U7XG4gICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGlmIChhcnJheVtpXS52YWx1ZSA9PSBjb25kaXRpb25WYWx1ZSkge1xuICAgICAgICAgICAgICBjaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNoZWNrZWQ7XG4gICAgICB9ZWxzZXtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2F0ZWdvcmllc1tsb2NhdGlvbi5jYXRlZ29yeUluZGV4XS5mb3Jtc1tsb2NhdGlvbi5jdXJyZW50SW5kZXhdLnZhbHVlPT09Y29uZGl0aW9uVmFsdWVcbiAgICAgIH0gICAgIFxuICAgIH1lbHNlIGlmKGxvY2F0aW9uLmxldmVsPT09Mil7XG4gICAgICBpZih0aGlzLmNhdGVnb3JpZXNbbG9jYXRpb24uY2F0ZWdvcnlJbmRleF0uZm9ybXNbbG9jYXRpb24uZm9ybUluZGV4XS5mb3Jtc1tsb2NhdGlvbi5jdXJyZW50SW5kZXhdLnR5cGU9PT0nY2hlY2tib3hfbXVsdGlwbGUnKXtcbiAgICAgICAgY29uc3QgYXJyYXk9dGhpcy5jYXRlZ29yaWVzW2xvY2F0aW9uLmNhdGVnb3J5SW5kZXhdLmZvcm1zW2xvY2F0aW9uLmZvcm1JbmRleF0uZm9ybXNbbG9jYXRpb24uY3VycmVudEluZGV4XS5kZWZhdWx0VmFsdWUuZmlsdGVyKChjaGVjayk9PmNoZWNrLmNoZWNrZWQpXG4gICAgICAgIGxldCBjaGVja2VkPWZhbHNlO1xuICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBpZiAoYXJyYXlbaV0udmFsdWUgPT0gY29uZGl0aW9uVmFsdWUpIHtcbiAgICAgICAgICAgICAgY2hlY2tlZCA9IHRydWU7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjaGVja2VkO1xuICAgICAgfWVsc2V7XG4gICAgICAgIHJldHVybiB0aGlzLmNhdGVnb3JpZXNbbG9jYXRpb24uY2F0ZWdvcnlJbmRleF0uZm9ybXNbbG9jYXRpb24uZm9ybUluZGV4XS5mb3Jtc1tsb2NhdGlvbi5jdXJyZW50SW5kZXhdLnZhbHVlPT09Y29uZGl0aW9uVmFsdWVcbiAgICAgIH1cbiAgICB9ZWxzZSBpZihsb2NhdGlvbi5sZXZlbD09PTMpe1xuICAgICAgaWYodGhpcy5jYXRlZ29yaWVzW2xvY2F0aW9uLmNhdGVnb3J5SW5kZXhdLmZvcm1zW2xvY2F0aW9uLmZvcm1JbmRleF0uZm9ybXNbbG9jYXRpb24uc3ViSW5kZXhdLmZvcm1zW2xvY2F0aW9uLmN1cnJlbnRJbmRleF0udHlwZT09PSdjaGVja2JveF9tdWx0aXBsZScpe1xuICAgICAgICBjb25zdCBhcnJheT10aGlzLmNhdGVnb3JpZXNbbG9jYXRpb24uY2F0ZWdvcnlJbmRleF0uZm9ybXNbbG9jYXRpb24uZm9ybUluZGV4XS5mb3Jtc1tsb2NhdGlvbi5zdWJJbmRleF0uZm9ybXNbbG9jYXRpb24uY3VycmVudEluZGV4XS5kZWZhdWx0VmFsdWUuZmlsdGVyKChjaGVjayk9PmNoZWNrLmNoZWNrZWQpXG4gICAgICAgIGxldCBjaGVja2VkPWZhbHNlO1xuICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBpZiAoYXJyYXlbaV0udmFsdWUgPT0gY29uZGl0aW9uVmFsdWUpIHtcbiAgICAgICAgICAgICAgY2hlY2tlZCA9IHRydWU7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjaGVja2VkO1xuICAgICAgfWVsc2V7XG4gICAgICAgIHJldHVybiB0aGlzLmNhdGVnb3JpZXNbbG9jYXRpb24uY2F0ZWdvcnlJbmRleF0uZm9ybXNbbG9jYXRpb24uZm9ybUluZGV4XS5mb3Jtc1tsb2NhdGlvbi5zdWJJbmRleF0uZm9ybXNbbG9jYXRpb24uY3VycmVudEluZGV4XS52YWx1ZT09PWNvbmRpdGlvblZhbHVlXG4gICAgICB9XG4gICAgfWVsc2V7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cbiBcbiAgfVxuXG4gIGNoZWNrU3ViRm9ybShmb3Jtcyl7XG4gICAgbGV0IGhhc1N1YkZvcm09ZmFsc2U7XG4gICAgZm9yIChjb25zdCBmb3JtIG9mIGZvcm1zKSB7XG4gICAgICBpZihmb3JtLmZvcm1zICYmIGZvcm0uZm9ybXMubGVuZ3RoPjApe1xuICAgICAgICBoYXNTdWJGb3JtPXRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gaGFzU3ViRm9ybVxuICB9XG5cbiAgb25TZWxlY3RNZW51KGkpe1xuICAgIHRoaXMuc2VsZWN0ZWRNZW51PWk7XG4gICAgdGhpcy5zZWxlY3RlZENhdGVnb3J5SW5kZXg9aTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5zZWxlY3RlZENhdGVnb3J5SW5kZXg9bnVsbDtcbiAgICB9LCAyMDAwKTtcbiAgfVxuXG59XG4iLCI8bWFpbj5cbiAgICA8ZGl2IGNsYXNzPVwiY29udGVudFwiPlxuICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwic2hvd01vZGVcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXRlZ29yeVwiICpuZ0lmPVwiaXNTZWxlY3RlZFwiPlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNpZGUtYmFyXCI+XG4gICAgICAgICAgICAgICAgICAgIDwhLS08ZGl2IGNsYXNzPVwic3VtbWFyeVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzPVwidGVtcGxhdGUtdGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e2N1cnJlbnRUZW1wbGF0ZT8uTmFtZX19XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9sPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cImxpLXRpdGxlXCIgKm5nRm9yPVwibGV0IGNhdCBvZiBjYXRlZ29yaWVzOyAgbGV0IGk9aW5kZXhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbY2xhc3NdPVwic2VsZWN0ZWRNZW51PT09aSA/J2FjdGl2ZSc6JydcIiAoY2xpY2spPVwib25TZWxlY3RNZW51KGkpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gW25neFNjcm9sbFRvXT1cIicjJytjYXQubmFtZVwiPnt7Y2F0Lm5hbWV9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxtYXQtaWNvbiAqbmdJZj1cImNoZWNrU3ViRm9ybShjYXQuZm9ybXMpXCI+a2V5Ym9hcmRfYXJyb3dfcmlnaHQ8L21hdC1pY29uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvb2w+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2Pi0tPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIChjbGljayk9XCJzaG93TW9kZSA9IGZhbHNlXCIgbWF0LWJ1dHRvbiBjbGFzcz1cInJlZ2lzdGVyLWJ1dHRvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgTW9kaWZpZXJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpZWxkc1wiIHN0eWxlPVwiaGVpZ2h0OiA4NXZoOyBtYXJnaW4tbGVmdDogMjBweDsgd2lkdGg6IDg1JTtcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImV4YW1wbGUtbGlzdCBtdC0yMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhdGVnb3J5LWl0ZW1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICpuZ0Zvcj1cImxldCBjYXRlZ29yeSBvZiBjdXJyZW50T25ib2FyZGluZy52aWV3IHwga2V5dmFsdWU7IGxldCBpPWluZGV4OyBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtpZF09XCJjYXRlZ29yeS5uYW1lXCI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmllbGQtY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmllbGQtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzPVwiY2F0ZWdvcnktbmFtZVwiPnt7Y2F0ZWdvcnkua2V5fX08L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmllbGQtY2F0ZWdvcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqbmdGb3I9XCJsZXQgZmllbGQgb2YgY2F0ZWdvcnkudmFsdWUgfCBrZXl2YWx1ZTtsZXQgaj1pbmRleFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtpZF09XCJmaWVsZC5rZXlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlubmVyLWxvb3BcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZHMtY29udGVudFwiPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpZWxkcy1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz57e2ZpZWxkLmtleX19PC9zdHJvbmc+IDxicj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIWlzT2JqZWN0KGZpZWxkLnZhbHVlKVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3tmaWVsZC52YWx1ZX19IDxicj4gPGJyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiaXNPYmplY3QoZmllbGQudmFsdWUpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBzdWJmIG9mIGZpZWxkLnZhbHVlIHwga2V5dmFsdWVcIj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhaXNPYmplY3Qoc3ViZi52YWx1ZSlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7c3ViZi5rZXl9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N0cm9uZz4gPGJyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e3N1YmYudmFsdWV9fSA8YnI+IDxicj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJpc09iamVjdChzdWJmLnZhbHVlKVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqbmdGb3I9XCJsZXQgc3ViZnN1YiBvZiBzdWJmLnZhbHVlIHwga2V5dmFsdWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3tzdWJmc3ViLmtleX19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N0cm9uZz4gPGJyPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e3N1YmZzdWIudmFsdWV9fSA8YnI+PGJyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLTxsaWItc3ViLWNyZWF0ZS1vbmJvYXJkaW5nIFtmaWVsZF09XCJmaWVsZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbbGVuZ3RoXT1cImNhdGVnb3J5Py5mb3Jtcz8ubGVuZ3RoXCIgW2ldPVwiaVwiIFtqXT1cImpcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKG9uRHJvcCk9XCJkcm9wKCRldmVudClcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjaGlsZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbm5lci1jaGlsZFwiICpuZ0lmPVwiZmllbGQuZm9ybXNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlubmVyLWNoaWxkLWNvbnRlbnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKm5nRm9yPVwibGV0IGNoaWxkIG9mIGZpZWxkLmZvcm1zO2xldCBrPWluZGV4XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtpZF09XCJjaGlsZC5rZXlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbm5lci1sb29wXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqbmdJZj1cImNoaWxkLmV4cGFuZE9uYm9hcmRpbmcgJiYgb25DaGVja0NvbmRpdGlvbkxvY2F0aW9uVmFsdWUoY2hpbGQuaXNDb25kaXRpb25hbCxjaGlsZC5jb25kaXRpb25Mb2NhdGlvbixjaGlsZC5jb25kaXRpb25WYWx1ZSlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmllbGRzLWNvbnRlbnRcIj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmllbGRzLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpYi1zdWItY3JlYXRlLW9uYm9hcmRpbmdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbZmllbGRdPVwiY2hpbGRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtsZW5ndGhdPVwiZmllbGQ/LmZvcm1zPy5sZW5ndGhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtpXT1cImpcIiBbal09XCJrXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAob25Ecm9wKT1cImRyb3AoJGV2ZW50KVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjaGlsZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5uZXItY2hpbGRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJjaGlsZC5mb3Jtc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlubmVyLWNoaWxkLWNvbnRlbnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICpuZ0Zvcj1cImxldCBjMiBvZiBjaGlsZC5mb3JtcztsZXQgbD1pbmRleFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2lkXT1cImMyLmtleVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbm5lci1sb29wXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJjMi5leHBhbmRPbmJvYXJkaW5nICYmIG9uQ2hlY2tDb25kaXRpb25Mb2NhdGlvblZhbHVlKGMyLmlzQ29uZGl0aW9uYWwsYzIuY29uZGl0aW9uTG9jYXRpb24sYzIuY29uZGl0aW9uVmFsdWUpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZmllbGRzLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZpZWxkcy1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGliLXN1Yi1jcmVhdGUtb25ib2FyZGluZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbZmllbGRdPVwiYzJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbbGVuZ3RoXT1cImNoaWxkPy5mb3Jtcz8ubGVuZ3RoXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2ldPVwia1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtqXT1cImxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAob25Ecm9wKT1cImRyb3AoJGV2ZW50KVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImNoaWxkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGliLXN1Yi1jcmVhdGUtb25ib2FyZGluZz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGliLXN1Yi1jcmVhdGUtb25ib2FyZGluZz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saWItc3ViLWNyZWF0ZS1vbmJvYXJkaW5nPi0tPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgICAgIDxmb3JtIFtuZ1N0eWxlXT1cInNob3dNb2RlICYmIHsnZGlzcGxheSc6ICdub25lJ31cIiBbZm9ybUdyb3VwXT1cImZvcm1cIiAoc3VibWl0KT1cIm9uU3VibWl0KClcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZWxlY3QtY29udGFjdFwiICpuZ0lmPVwiIWlzU2VsZWN0ZWRcIj5cbiAgICAgICAgICAgICAgICA8aDM+XG4gICAgICAgICAgICAgICAgICAgIE9uYm9hcmRpbmcgZGUgdm90cmUgbm91dmVhdSBjb2xsYWJvcmF0ZXVyXG4gICAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgICA8cD5Tw6lsZWN0aW9ubmV6IGxlIG5vbSBkZSB2b3RyZSBwcm9maWwgYWZpbiBkZSBwb3V2b2lyIGTDqW1hcnJlciBzb24gb25ib2FyZGluZy48L3A+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNlbGVjdC10ZW1wbGF0ZVwiPlxuICAgICAgICAgICAgICAgICAgICA8bWF0LWZvcm0tZmllbGQgY2xhc3M9XCJmdWxsLXdpZHRoXCIgYXBwZWFyYW5jZT1cIm91dGxpbmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxtYXQtbGFiZWw+UHJvZmlsPC9tYXQtbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bWF0LXNlbGVjdCBmb3JtQ29udHJvbE5hbWU9XCJUZW1wbGF0ZUlkXCIgcmVxdWlyZWQgKHNlbGVjdGlvbkNoYW5nZSk9XCJvblNlbGVjdCgkZXZlbnQudmFsdWUpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG1hdC1vcHRpb24gKm5nRm9yPVwibGV0IHRlbXBsYXRlIG9mIHRlbXBsYXRlc1wiIFt2YWx1ZV09XCJ0ZW1wbGF0ZS5faWRcIj57e3RlbXBsYXRlLk5hbWV9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbWF0LW9wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbWF0LXNlbGVjdD5cbiAgICAgICAgICAgICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBbc3R5bGUub3BhY2l0eV09XCJmb3JtLmdldCgnVGVtcGxhdGVJZCcpPy52YWx1ZT09JycgPyAwLjQgOiAxXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtkaXNhYmxlZF09XCJmb3JtLmdldCgnVGVtcGxhdGVJZCcpPy52YWx1ZT09JydcIiBtYXQtcmFpc2VkLWJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT0nb25TZWxlY3RDb250YWN0VGVtcGxhdGUoKSc+XG4gICAgICAgICAgICAgICAgICAgICAgICB7e2lkICYmIGlkICE9PSBcIjBcIiA/ICdNb2RpZmllciBs4oCZb25ib2FyZGluZycgOidEw6ltYXJyZXIgbOKAmW9uYm9hcmRpbmcnfX1cbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXRlZ29yeVwiICpuZ0lmPVwiaXNTZWxlY3RlZFwiPlxuICAgICAgICAgICAgICAgIDwhLS0gPGRpdiBjbGFzcz1cImNhdGVnb3J5XCI+IC0tPlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNpZGUtYmFyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdW1tYXJ5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3M9XCJ0ZW1wbGF0ZS10aXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPiB7e2N1cnJlbnRUZW1wbGF0ZT8uTmFtZX19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJsaS10aXRsZVwiICpuZ0Zvcj1cImxldCBjYXQgb2YgY2F0ZWdvcmllczsgIGxldCBpPWluZGV4XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2NsYXNzXT1cInNlbGVjdGVkTWVudT09PWkgPydhY3RpdmUnOicnXCIgKGNsaWNrKT1cIm9uU2VsZWN0TWVudShpKVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIFtuZ3hTY3JvbGxUb109XCInIycrY2F0Lm5hbWVcIj57e2NhdC5uYW1lfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bWF0LWljb24gKm5nSWY9XCJjaGVja1N1YkZvcm0oY2F0LmZvcm1zKVwiPmtleWJvYXJkX2Fycm93X3JpZ2h0PC9tYXQtaWNvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L29sPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBtYXQtYnV0dG9uIGNsYXNzPVwicmVnaXN0ZXItYnV0dG9uXCIgdHlwZT1cInN1Ym1pdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSA8bWF0LWljb24+Y2hlY2s8L21hdC1pY29uPiAtLT5cbiAgICAgICAgICAgICAgICAgICAgICAgIFNvdW1ldHRyZSBtYSBmaWNoZSBkZSBwb3N0ZVxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmllbGRzXCIgc3R5bGU9XCJoZWlnaHQ6IDg1dmg7XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJleGFtcGxlLWxpc3QgbXQtMjBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXRlZ29yeS1pdGVtIGNvbnRlbnQtaXRlbVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW2NsYXNzXT1cImk9PT1zZWxlY3RlZENhdGVnb3J5SW5kZXggPyAnYWN0aXZlLWNvbnRlbnQnOicnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAqbmdGb3I9XCJsZXQgY2F0ZWdvcnkgb2YgY2F0ZWdvcmllczsgIGxldCBpPWluZGV4XCIgW2lkXT1cImNhdGVnb3J5Lm5hbWVcIj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZC1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZC1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3M9XCJjYXRlZ29yeS1uYW1lXCI+e3tjYXRlZ29yeS5uYW1lfX08L2g0PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bWF0LXNlbGVjdCBwbGFjZWhvbGRlcj1cIkNvbXBhbnlcIiBbKG5nTW9kZWwpXT1cImNhdGVnb3J5LnNlbGVjdG9yLnZhbHVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbbmdNb2RlbE9wdGlvbnNdPVwie3N0YW5kYWxvbmU6IHRydWV9XCIgcmVxdWlyZWQgKm5nSWY9XCJjYXRlZ29yeS5zZWxlY3RvclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9XCJ3aWR0aDogMTUwcHg7XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG1hdC1vcHRpb24gKm5nRm9yPVwibGV0IHNlbGVjdCBvZiBjYXRlZ29yeS5zZWxlY3Rvci5kZWZhdWx0VmFsdWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbdmFsdWVdPVwic2VsZWN0LnZhbHVlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7c2VsZWN0LnZhbHVlfX08L21hdC1vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L21hdC1zZWxlY3Q+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2F0ZWdvcnktY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZC1jYXRlZ29yeVwiICpuZ0Zvcj1cImxldCBmaWVsZCBvZiBjYXRlZ29yeS5mb3JtcztsZXQgaj1pbmRleFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtpZF09XCJmaWVsZC5rZXlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlubmVyLWxvb3BcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJmaWVsZC5leHBhbmRPbmJvYXJkaW5nICYmIG9uQ2hlY2tDb25kaXRpb25Mb2NhdGlvblZhbHVlKGZpZWxkLmlzQ29uZGl0aW9uYWwsZmllbGQuY29uZGl0aW9uTG9jYXRpb24sZmllbGQuY29uZGl0aW9uVmFsdWUpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmllbGRzLWNvbnRlbnRcIj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZHMtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaWItc3ViLWNyZWF0ZS1vbmJvYXJkaW5nIFtmaWVsZF09XCJmaWVsZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbbGVuZ3RoXT1cImNhdGVnb3J5Py5mb3Jtcz8ubGVuZ3RoXCIgW2ldPVwiaVwiIFtqXT1cImpcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKG9uRHJvcCk9XCJkcm9wKCRldmVudClcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjaGlsZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbm5lci1jaGlsZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICpuZ0lmPVwiZmllbGQuZm9ybXMgJiYgZmllbGQudmFsdWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlubmVyLWNoaWxkLWNvbnRlbnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKm5nRm9yPVwibGV0IGNoaWxkIG9mIGZpZWxkLmZvcm1zO2xldCBrPWluZGV4XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtpZF09XCJjaGlsZC5rZXlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbm5lci1sb29wXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqbmdJZj1cImNoaWxkLmV4cGFuZE9uYm9hcmRpbmcgJiYgb25DaGVja0NvbmRpdGlvbkxvY2F0aW9uVmFsdWUoY2hpbGQuaXNDb25kaXRpb25hbCxjaGlsZC5jb25kaXRpb25Mb2NhdGlvbixjaGlsZC5jb25kaXRpb25WYWx1ZSlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmllbGRzLWNvbnRlbnRcIj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmllbGRzLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpYi1zdWItY3JlYXRlLW9uYm9hcmRpbmdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbZmllbGRdPVwiY2hpbGRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtsZW5ndGhdPVwiZmllbGQ/LmZvcm1zPy5sZW5ndGhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtpXT1cImpcIiBbal09XCJrXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAob25Ecm9wKT1cImRyb3AoJGV2ZW50KVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjaGlsZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5uZXItY2hpbGRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJjaGlsZC5mb3JtcyAmJiBjaGlsZC52YWx1ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlubmVyLWNoaWxkLWNvbnRlbnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICpuZ0Zvcj1cImxldCBjMiBvZiBjaGlsZC5mb3JtcztsZXQgbD1pbmRleFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2lkXT1cImMyLmtleVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbm5lci1sb29wXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJjMi5leHBhbmRPbmJvYXJkaW5nICYmIG9uQ2hlY2tDb25kaXRpb25Mb2NhdGlvblZhbHVlKGMyLmlzQ29uZGl0aW9uYWwsYzIuY29uZGl0aW9uTG9jYXRpb24sYzIuY29uZGl0aW9uVmFsdWUpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZmllbGRzLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZpZWxkcy1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGliLXN1Yi1jcmVhdGUtb25ib2FyZGluZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbZmllbGRdPVwiYzJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbbGVuZ3RoXT1cImNoaWxkPy5mb3Jtcz8ubGVuZ3RoXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2ldPVwia1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtqXT1cImxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAob25Ecm9wKT1cImRyb3AoJGV2ZW50KVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImNoaWxkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGliLXN1Yi1jcmVhdGUtb25ib2FyZGluZz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGliLXN1Yi1jcmVhdGUtb25ib2FyZGluZz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saWItc3ViLWNyZWF0ZS1vbmJvYXJkaW5nPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZm9ybT5cbiAgICA8L2Rpdj5cblxuPC9tYWluPiJdfQ==