import { __assign, __awaiter, __generator, __values } from "tslib";
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
import * as i9 from "ngx-intl-tel-input";
import * as i10 from "@angular/material/core";
import * as i11 from "@nicky-lenaers/ngx-scroll-to";
import * as i12 from "@angular/material/icon";
import * as i13 from "../components/sub-onboarding-create/sub-onboarding-create.component";
function OnboardingCreateComponent_ng_container_2_div_1_div_6_div_7_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelement(2, "br");
    i0.ɵɵelement(3, "br");
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var field_r726 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", field_r726.value, " ");
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
    var subf_r732 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", subf_r732.key, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", subf_r732.value, " ");
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
    var subfsub_r737 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", subfsub_r737.key, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", subfsub_r737.value, " ");
} }
function OnboardingCreateComponent_ng_container_2_div_1_div_6_div_7_ng_container_8_ng_container_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, OnboardingCreateComponent_ng_container_2_div_1_div_6_div_7_ng_container_8_ng_container_1_ng_container_2_ng_container_1_Template, 7, 2, "ng-container", 21);
    i0.ɵɵpipe(2, "keyvalue");
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var subf_r732 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(2, 1, subf_r732.value));
} }
function OnboardingCreateComponent_ng_container_2_div_1_div_6_div_7_ng_container_8_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, OnboardingCreateComponent_ng_container_2_div_1_div_6_div_7_ng_container_8_ng_container_1_ng_container_1_Template, 7, 2, "ng-container", 1);
    i0.ɵɵtemplate(2, OnboardingCreateComponent_ng_container_2_div_1_div_6_div_7_ng_container_8_ng_container_1_ng_container_2_Template, 3, 3, "ng-container", 1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var subf_r732 = ctx.$implicit;
    var ctx_r731 = i0.ɵɵnextContext(6);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r731.isObject(subf_r732.value));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r731.isObject(subf_r732.value));
} }
function OnboardingCreateComponent_ng_container_2_div_1_div_6_div_7_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, OnboardingCreateComponent_ng_container_2_div_1_div_6_div_7_ng_container_8_ng_container_1_Template, 3, 2, "ng-container", 21);
    i0.ɵɵpipe(2, "keyvalue");
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var field_r726 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(2, 1, field_r726.value));
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
    var field_r726 = ctx.$implicit;
    var ctx_r725 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("id", field_r726.key);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(field_r726.key);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", !ctx_r725.isObject(field_r726.value));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r725.isObject(field_r726.value));
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
    var category_r723 = ctx.$implicit;
    i0.ɵɵproperty("id", category_r723.name);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(category_r723.key);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(8, 3, category_r723.value));
} }
function OnboardingCreateComponent_ng_container_2_div_1_Template(rf, ctx) { if (rf & 1) {
    var _r741 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 5);
    i0.ɵɵelementStart(1, "div", 6);
    i0.ɵɵelementStart(2, "button", 7);
    i0.ɵɵlistener("click", function OnboardingCreateComponent_ng_container_2_div_1_Template_button_click_2_listener() { i0.ɵɵrestoreView(_r741); var ctx_r740 = i0.ɵɵnextContext(2); return ctx_r740.showMode = false; });
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
    var ctx_r721 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(7, 1, ctx_r721.currentOnboarding.view));
} }
function OnboardingCreateComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, OnboardingCreateComponent_ng_container_2_div_1_Template, 8, 3, "div", 4);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r718 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r718.isSelected);
} }
function OnboardingCreateComponent_div_4_mat_option_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 28);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var template_r743 = ctx.$implicit;
    i0.ɵɵproperty("value", template_r743._id);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1("", template_r743.Name, " ");
} }
function OnboardingCreateComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    var _r745 = i0.ɵɵgetCurrentView();
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
    i0.ɵɵlistener("selectionChange", function OnboardingCreateComponent_div_4_Template_mat_select_selectionChange_9_listener($event) { i0.ɵɵrestoreView(_r745); var ctx_r744 = i0.ɵɵnextContext(); return ctx_r744.onSelect($event.value); });
    i0.ɵɵtemplate(10, OnboardingCreateComponent_div_4_mat_option_10_Template, 2, 2, "mat-option", 26);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "button", 27);
    i0.ɵɵlistener("click", function OnboardingCreateComponent_div_4_Template_button_click_11_listener() { i0.ɵɵrestoreView(_r745); var ctx_r746 = i0.ɵɵnextContext(); return ctx_r746.onSelectContactTemplate(); });
    i0.ɵɵtext(12);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r719 = i0.ɵɵnextContext();
    var tmp_1_0 = null;
    var currVal_1 = ((tmp_1_0 = ctx_r719.form.get("TemplateId")) == null ? null : tmp_1_0.value) == "" ? 0.4 : 1;
    var tmp_2_0 = null;
    var currVal_2 = ((tmp_2_0 = ctx_r719.form.get("TemplateId")) == null ? null : tmp_2_0.value) == "";
    i0.ɵɵadvance(10);
    i0.ɵɵproperty("ngForOf", ctx_r719.templates);
    i0.ɵɵadvance(1);
    i0.ɵɵstyleProp("opacity", currVal_1);
    i0.ɵɵproperty("disabled", currVal_2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r719.id && ctx_r719.id !== "0" ? "Modifier l\u2019onboarding" : "D\u00E9marrer l\u2019onboarding", " ");
} }
function OnboardingCreateComponent_div_5_li_7_mat_icon_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-icon");
    i0.ɵɵtext(1, "keyboard_arrow_right");
    i0.ɵɵelementEnd();
} }
function OnboardingCreateComponent_div_5_li_7_Template(rf, ctx) { if (rf & 1) {
    var _r755 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 35);
    i0.ɵɵlistener("click", function OnboardingCreateComponent_div_5_li_7_Template_li_click_0_listener() { i0.ɵɵrestoreView(_r755); var i_r752 = ctx.index; var ctx_r754 = i0.ɵɵnextContext(2); return ctx_r754.onSelectMenu(i_r752); });
    i0.ɵɵelementStart(1, "span");
    i0.ɵɵelementStart(2, "span", 36);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(4, OnboardingCreateComponent_div_5_li_7_mat_icon_4_Template, 2, 0, "mat-icon", 1);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var cat_r751 = ctx.$implicit;
    var i_r752 = ctx.index;
    var ctx_r747 = i0.ɵɵnextContext(2);
    i0.ɵɵclassMap(ctx_r747.selectedMenu === i_r752 ? "active" : "");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngxScrollTo", "#" + cat_r751.name);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(cat_r751.name);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r747.checkSubForm(cat_r751.forms));
} }
function OnboardingCreateComponent_div_5_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1, "Soumission en cours...");
    i0.ɵɵelementContainerEnd();
} }
function OnboardingCreateComponent_div_5_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1, " Soumettre ma fiche de poste");
    i0.ɵɵelementContainerEnd();
} }
function OnboardingCreateComponent_div_5_div_13_mat_select_5_mat_option_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 28);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var select_r761 = ctx.$implicit;
    i0.ɵɵproperty("value", select_r761.value);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", select_r761.value, "");
} }
var _c0 = function () { return { standalone: true }; };
function OnboardingCreateComponent_div_5_div_13_mat_select_5_Template(rf, ctx) { if (rf & 1) {
    var _r764 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-select", 40);
    i0.ɵɵlistener("ngModelChange", function OnboardingCreateComponent_div_5_div_13_mat_select_5_Template_mat_select_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r764); var category_r756 = i0.ɵɵnextContext().$implicit; return category_r756.selector.value = $event; });
    i0.ɵɵtemplate(1, OnboardingCreateComponent_div_5_div_13_mat_select_5_mat_option_1_Template, 2, 2, "mat-option", 26);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var category_r756 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("ngModel", category_r756.selector.value)("ngModelOptions", i0.ɵɵpureFunction0(3, _c0));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", category_r756.selector.defaultValue);
} }
function OnboardingCreateComponent_div_5_div_13_div_8_div_1_div_5_div_1_div_1_div_5_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    var _r780 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 18);
    i0.ɵɵelementStart(1, "div", 19);
    i0.ɵɵelementStart(2, "div", 20);
    i0.ɵɵelementStart(3, "lib-sub-create-onboarding", 42);
    i0.ɵɵlistener("onDrop", function OnboardingCreateComponent_div_5_div_13_div_8_div_1_div_5_div_1_div_1_div_5_div_1_div_1_Template_lib_sub_create_onboarding_onDrop_3_listener($event) { i0.ɵɵrestoreView(_r780); var ctx_r779 = i0.ɵɵnextContext(10); return ctx_r779.drop($event); })("onCheckValue", function OnboardingCreateComponent_div_5_div_13_div_8_div_1_div_5_div_1_div_1_div_5_div_1_div_1_Template_lib_sub_create_onboarding_onCheckValue_3_listener($event) { i0.ɵɵrestoreView(_r780); var ctx_r781 = i0.ɵɵnextContext(10); return ctx_r781.onCheckValue($event); });
    i0.ɵɵelement(4, "div", 43);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r782 = i0.ɵɵnextContext();
    var c2_r776 = ctx_r782.$implicit;
    var l_r777 = ctx_r782.index;
    var ctx_r783 = i0.ɵɵnextContext(3);
    var child_r771 = ctx_r783.$implicit;
    var k_r772 = ctx_r783.index;
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("field", c2_r776)("length", child_r771 == null ? null : child_r771.forms == null ? null : child_r771.forms.length)("i", k_r772)("j", l_r777);
} }
function OnboardingCreateComponent_div_5_div_13_div_8_div_1_div_5_div_1_div_1_div_5_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 47);
    i0.ɵɵtemplate(1, OnboardingCreateComponent_div_5_div_13_div_8_div_1_div_5_div_1_div_1_div_5_div_1_div_1_Template, 5, 4, "div", 41);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var c2_r776 = ctx.$implicit;
    var ctx_r775 = i0.ɵɵnextContext(9);
    i0.ɵɵproperty("id", c2_r776.key);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", c2_r776.expandOnboarding && ctx_r775.onCheckConditionLocationValue(c2_r776.isConditional, c2_r776.conditionLocation, c2_r776.conditionValue));
} }
function OnboardingCreateComponent_div_5_div_13_div_8_div_1_div_5_div_1_div_1_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 45);
    i0.ɵɵtemplate(1, OnboardingCreateComponent_div_5_div_13_div_8_div_1_div_5_div_1_div_1_div_5_div_1_Template, 2, 2, "div", 46);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var child_r771 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", child_r771.forms);
} }
function OnboardingCreateComponent_div_5_div_13_div_8_div_1_div_5_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    var _r786 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 18);
    i0.ɵɵelementStart(1, "div", 19);
    i0.ɵɵelementStart(2, "div", 20);
    i0.ɵɵelementStart(3, "lib-sub-create-onboarding", 42);
    i0.ɵɵlistener("onDrop", function OnboardingCreateComponent_div_5_div_13_div_8_div_1_div_5_div_1_div_1_Template_lib_sub_create_onboarding_onDrop_3_listener($event) { i0.ɵɵrestoreView(_r786); var ctx_r785 = i0.ɵɵnextContext(7); return ctx_r785.drop($event); })("onCheckValue", function OnboardingCreateComponent_div_5_div_13_div_8_div_1_div_5_div_1_div_1_Template_lib_sub_create_onboarding_onCheckValue_3_listener($event) { i0.ɵɵrestoreView(_r786); var ctx_r787 = i0.ɵɵnextContext(7); return ctx_r787.onCheckValue($event); });
    i0.ɵɵelementStart(4, "div", 43);
    i0.ɵɵtemplate(5, OnboardingCreateComponent_div_5_div_13_div_8_div_1_div_5_div_1_div_1_div_5_Template, 2, 1, "div", 44);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r788 = i0.ɵɵnextContext();
    var child_r771 = ctx_r788.$implicit;
    var k_r772 = ctx_r788.index;
    var ctx_r789 = i0.ɵɵnextContext(3);
    var field_r766 = ctx_r789.$implicit;
    var j_r767 = ctx_r789.index;
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("field", child_r771)("length", field_r766 == null ? null : field_r766.forms == null ? null : field_r766.forms.length)("i", j_r767)("j", k_r772);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", child_r771.forms && child_r771.value);
} }
function OnboardingCreateComponent_div_5_div_13_div_8_div_1_div_5_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 47);
    i0.ɵɵtemplate(1, OnboardingCreateComponent_div_5_div_13_div_8_div_1_div_5_div_1_div_1_Template, 6, 5, "div", 41);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var child_r771 = ctx.$implicit;
    var ctx_r770 = i0.ɵɵnextContext(6);
    i0.ɵɵproperty("id", child_r771.key);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", child_r771.expandOnboarding && ctx_r770.onCheckConditionLocationValue(child_r771.isConditional, child_r771.conditionLocation, child_r771.conditionValue));
} }
function OnboardingCreateComponent_div_5_div_13_div_8_div_1_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 45);
    i0.ɵɵtemplate(1, OnboardingCreateComponent_div_5_div_13_div_8_div_1_div_5_div_1_Template, 2, 2, "div", 46);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var field_r766 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", field_r766.forms);
} }
function OnboardingCreateComponent_div_5_div_13_div_8_div_1_Template(rf, ctx) { if (rf & 1) {
    var _r792 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 18);
    i0.ɵɵelementStart(1, "div", 19);
    i0.ɵɵelementStart(2, "div", 20);
    i0.ɵɵelementStart(3, "lib-sub-create-onboarding", 42);
    i0.ɵɵlistener("onDrop", function OnboardingCreateComponent_div_5_div_13_div_8_div_1_Template_lib_sub_create_onboarding_onDrop_3_listener($event) { i0.ɵɵrestoreView(_r792); var ctx_r791 = i0.ɵɵnextContext(4); return ctx_r791.drop($event); })("onCheckValue", function OnboardingCreateComponent_div_5_div_13_div_8_div_1_Template_lib_sub_create_onboarding_onCheckValue_3_listener($event) { i0.ɵɵrestoreView(_r792); var ctx_r793 = i0.ɵɵnextContext(4); return ctx_r793.onCheckValue($event); });
    i0.ɵɵelementStart(4, "div", 43);
    i0.ɵɵtemplate(5, OnboardingCreateComponent_div_5_div_13_div_8_div_1_div_5_Template, 2, 1, "div", 44);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r794 = i0.ɵɵnextContext();
    var field_r766 = ctx_r794.$implicit;
    var j_r767 = ctx_r794.index;
    var ctx_r795 = i0.ɵɵnextContext();
    var category_r756 = ctx_r795.$implicit;
    var i_r757 = ctx_r795.index;
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("field", field_r766)("length", category_r756 == null ? null : category_r756.forms == null ? null : category_r756.forms.length)("i", i_r757)("j", j_r767);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", field_r766.forms && field_r766.value);
} }
function OnboardingCreateComponent_div_5_div_13_div_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 17);
    i0.ɵɵtemplate(1, OnboardingCreateComponent_div_5_div_13_div_8_div_1_Template, 6, 5, "div", 41);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var field_r766 = ctx.$implicit;
    var ctx_r759 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("id", field_r766.key);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", field_r766.expandOnboarding && ctx_r759.onCheckConditionLocationValue(field_r766.isConditional, field_r766.conditionLocation, field_r766.conditionValue));
} }
function OnboardingCreateComponent_div_5_div_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 37);
    i0.ɵɵelementStart(1, "div", 12);
    i0.ɵɵelementStart(2, "div", 13);
    i0.ɵɵelementStart(3, "h4", 14);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(5, OnboardingCreateComponent_div_5_div_13_mat_select_5_Template, 2, 4, "mat-select", 38);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "div", 39);
    i0.ɵɵelementContainerStart(7);
    i0.ɵɵtemplate(8, OnboardingCreateComponent_div_5_div_13_div_8_Template, 2, 2, "div", 16);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var category_r756 = ctx.$implicit;
    var i_r757 = ctx.index;
    var ctx_r750 = i0.ɵɵnextContext(2);
    i0.ɵɵclassMap(i_r757 === ctx_r750.selectedCategoryIndex ? "active-content" : "");
    i0.ɵɵproperty("id", category_r756.name);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(category_r756.name);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", category_r756.selector);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", category_r756.forms);
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
    i0.ɵɵtemplate(9, OnboardingCreateComponent_div_5_ng_container_9_Template, 2, 0, "ng-container", 1);
    i0.ɵɵtemplate(10, OnboardingCreateComponent_div_5_ng_container_10_Template, 2, 0, "ng-container", 1);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "div", 33);
    i0.ɵɵelementStart(12, "div", 9);
    i0.ɵɵtemplate(13, OnboardingCreateComponent_div_5_div_13_Template, 9, 6, "div", 34);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r720 = i0.ɵɵnextContext();
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate1(" ", ctx_r720.currentTemplate == null ? null : ctx_r720.currentTemplate.Name, "");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r720.categories);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("disabled", ctx_r720.loading || ctx_r720.invalideValue);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r720.loading);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r720.loading);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", ctx_r720.categories);
} }
var _c1 = function () { return { "display": "none" }; };
var OnboardingCreateComponent = /** @class */ (function () {
    function OnboardingCreateComponent(fb, service, route, router, dialog) {
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
        this.loading = false;
    }
    OnboardingCreateComponent.prototype.isObject = function (obj) {
        return obj !== undefined && obj !== null && obj.constructor == Object;
    };
    OnboardingCreateComponent.prototype.canDeactivate = function () {
        if (!this.canExit) {
            this.dialog.open(ExitConfirmComponent, {
                data: ''
            });
            return this.service.canExit$;
        }
        return true;
    };
    OnboardingCreateComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.onCreateDynamicForm();
                this.id = this.route.snapshot.paramMap.get("id");
                setTimeout(function () { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, this.service.getAllProfil()];
                            case 1:
                                _a.sent();
                                return [2 /*return*/];
                        }
                    });
                }); }, 500);
                this.service._templates.subscribe(function (data) {
                    _this.templates = data;
                });
                this.id = this.route.snapshot.paramMap.get("id");
                if (this.id && this.id !== "0") {
                    this.showMode = true;
                    setTimeout(function () { return __awaiter(_this, void 0, void 0, function () {
                        var _a;
                        var _b;
                        return __generator(this, function (_c) {
                            switch (_c.label) {
                                case 0:
                                    _a = this;
                                    return [4 /*yield*/, this.service.getOnboarding(this.id)];
                                case 1:
                                    _a.currentOnboarding = _c.sent();
                                    //console.log(this.currentOnboarding);
                                    this.form.patchValue(this.currentOnboarding);
                                    this.categories = this.currentOnboarding.categories;
                                    this.currentTemplate = (_b = this.currentOnboarding) === null || _b === void 0 ? void 0 : _b.vtemplates[0];
                                    if (this.currentOnboarding.TemplateId) {
                                        this.onSelectContactTemplate();
                                    }
                                    return [2 /*return*/];
                            }
                        });
                    }); }, 500);
                }
                else {
                    setTimeout(function () { return __awaiter(_this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            return [2 /*return*/];
                        });
                    }); }, 500);
                }
                return [2 /*return*/];
            });
        });
    };
    OnboardingCreateComponent.prototype.onCreateDynamicForm = function () {
        this.form = this.fb.group({
            TemplateId: [0, Validators.required]
        });
    };
    OnboardingCreateComponent.prototype.onSelectContactTemplate = function () {
        this.isSelected = true;
    };
    OnboardingCreateComponent.prototype.onSelect = function (id) {
        this.currentTemplate = this.templates.find(function (t) { return t._id === id; });
        this.categories = this.currentTemplate.categories
            .filter(function (cat) { return cat.expandOnboarding; })
            .map(function (cat) {
            if (cat.forms) {
                var f = cat.forms
                    .filter(function (form) { return form.expandOnboarding; })
                    .map(function (sub) {
                    if (sub.forms) {
                        var s = sub.forms.filter(function (child) {
                            if (child.forms) {
                                var c = child.forms.filter(function (ch) { return ch.expandOnboarding; });
                                return __assign(__assign({}, child), { forms: c });
                            }
                            return child;
                        });
                        return __assign(__assign({}, sub), { forms: s });
                    }
                    return sub;
                });
                return __assign(__assign({}, cat), { forms: f });
            }
            return cat;
        });
    };
    OnboardingCreateComponent.prototype.existSubForm = function (forms) {
        var e_1, _a;
        var exist = false;
        if (forms) {
            try {
                for (var forms_1 = __values(forms), forms_1_1 = forms_1.next(); !forms_1_1.done; forms_1_1 = forms_1.next()) {
                    var sub = forms_1_1.value;
                    if (sub.forms) {
                        exist = true;
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (forms_1_1 && !forms_1_1.done && (_a = forms_1.return)) _a.call(forms_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
        return exist;
    };
    OnboardingCreateComponent.prototype.onChangeCategory = function () {
        var checkMandatory = function (field) { return !!field.value && field.isMandatory && field.type !== "checkbox_multiple" || field.isConditional || !field.isMandatory || field.type === "checkbox_multiple"; };
        return this.categories.every(function (cat) { return cat.forms.every(function (field) {
            if (field.forms) {
                return field.forms.every(function (form) {
                    if (form.forms) {
                        return form.forms.every(function (child) {
                            return checkMandatory(child);
                        });
                    }
                    return checkMandatory(form);
                });
            }
            return checkMandatory(field);
        }); });
    };
    OnboardingCreateComponent.prototype.onSubmit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!(this.form.valid && this.onChangeCategory())) return [3 /*break*/, 7];
                        this.loading = true;
                        if (!(this.id && this.id !== "0")) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.service.updateOnboarding(__assign(__assign({}, this.form.value), { categories: this.categories, _id: this.id }))];
                    case 1:
                        _a = _b.sent();
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, this.service.createOnboarding(__assign(__assign({}, this.form.value), { categories: this.categories }))];
                    case 3:
                        _a = _b.sent();
                        _b.label = 4;
                    case 4:
                        result = _a;
                        if (!result) return [3 /*break*/, 6];
                        if (this.id && this.id !== "0") {
                            this.categories = result.categories;
                            this.currentOnboarding = result;
                        }
                        return [4 /*yield*/, this.service.getAllProfil()];
                    case 5:
                        _b.sent();
                        this.loading = false;
                        this.canExit = true;
                        this.showMode = true;
                        this.router.navigate([this.service.mainPath + '/requests']);
                        return [3 /*break*/, 7];
                    case 6:
                        console.log("errror......");
                        this.loading = false;
                        _b.label = 7;
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    OnboardingCreateComponent.prototype.onExpendMore = function (event) {
        var params = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            params[_i - 1] = arguments[_i];
        }
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
    };
    OnboardingCreateComponent.prototype.drop = function (event) {
        this.canExit = false;
        if (event.previousContainer === event.container) {
            moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
        }
        else {
            transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
        }
    };
    OnboardingCreateComponent.prototype.ingoreDefaultAction = function (e) {
        e.preventDefault();
    };
    OnboardingCreateComponent.prototype.onShowCategory = function () {
        this.showProfileName = !this.showProfileName;
    };
    OnboardingCreateComponent.prototype.onSelectPicto = function (e, picto) {
        e.preventDefault();
        this.canExit = false;
        this.form.patchValue({ Picto: picto });
        this.isPictoListShow = !this.isPictoListShow;
    };
    OnboardingCreateComponent.prototype.onShowPictoList = function (e) {
        e.preventDefault();
        this.isPictoListShow = !this.isPictoListShow;
    };
    OnboardingCreateComponent.prototype.openDialog = function () {
        var dialogRef = this.dialog.open(UpdateProfilComponent, {
            data: {
                matIconList: this.matIconList,
                form: this.form,
                tags: this.tags
            }
        });
        dialogRef.afterClosed().subscribe(function (confirmed) {
            if (confirmed) {
            }
        });
    };
    OnboardingCreateComponent.prototype.isExpanded = function (forms) {
        var e_2, _a;
        var isExpend = false;
        try {
            for (var forms_2 = __values(forms), forms_2_1 = forms_2.next(); !forms_2_1.done; forms_2_1 = forms_2.next()) {
                var form = forms_2_1.value;
                if (form.defaultValue) {
                    isExpend = true;
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (forms_2_1 && !forms_2_1.done && (_a = forms_2.return)) _a.call(forms_2);
            }
            finally { if (e_2) throw e_2.error; }
        }
    };
    OnboardingCreateComponent.prototype.onCheckConditionLocationValue = function (iscondition, location, conditionValue) {
        if (!iscondition) {
            return true;
        }
        if (location.level === 1) {
            if (this.categories[location.categoryIndex].forms[location.currentIndex].type === 'checkbox_multiple') {
                var array = this.categories[location.categoryIndex].forms[location.currentIndex].defaultValue.filter(function (check) { return check.checked; });
                var checked = false;
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
                var array = this.categories[location.categoryIndex].forms[location.formIndex].forms[location.currentIndex].defaultValue.filter(function (check) { return check.checked; });
                var checked = false;
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
                var array = this.categories[location.categoryIndex].forms[location.formIndex].forms[location.subIndex].forms[location.currentIndex].defaultValue.filter(function (check) { return check.checked; });
                var checked = false;
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
    };
    OnboardingCreateComponent.prototype.checkSubForm = function (forms) {
        var e_3, _a;
        var hasSubForm = false;
        try {
            for (var forms_3 = __values(forms), forms_3_1 = forms_3.next(); !forms_3_1.done; forms_3_1 = forms_3.next()) {
                var form = forms_3_1.value;
                if (form.forms && form.forms.length > 0) {
                    hasSubForm = true;
                    break;
                }
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (forms_3_1 && !forms_3_1.done && (_a = forms_3.return)) _a.call(forms_3);
            }
            finally { if (e_3) throw e_3.error; }
        }
        return hasSubForm;
    };
    OnboardingCreateComponent.prototype.onSelectMenu = function (i) {
        var _this = this;
        this.selectedMenu = i;
        this.selectedCategoryIndex = i;
        setTimeout(function () {
            _this.selectedCategoryIndex = null;
        }, 2000);
    };
    OnboardingCreateComponent.prototype.onCheckValue = function (event) {
        this.invalideValue = event;
    };
    OnboardingCreateComponent.ɵfac = function OnboardingCreateComponent_Factory(t) { return new (t || OnboardingCreateComponent)(i0.ɵɵdirectiveInject(i1.FormBuilder), i0.ɵɵdirectiveInject(i2.OnboardingService), i0.ɵɵdirectiveInject(i3.ActivatedRoute), i0.ɵɵdirectiveInject(i3.Router), i0.ɵɵdirectiveInject(i4.MatDialog)); };
    OnboardingCreateComponent.ɵcmp = i0.ɵɵdefineComponent({ type: OnboardingCreateComponent, selectors: [["create-onboarding"]], decls: 6, vars: 6, consts: [[1, "content"], [4, "ngIf"], [3, "ngStyle", "formGroup", "submit"], ["class", "select-contact", 4, "ngIf"], ["class", "category", 4, "ngIf"], [1, "category"], [1, "side-bar"], ["mat-button", "", 1, "register-button", 3, "click"], [1, "fields", 2, "height", "85vh", "margin-left", "20px", "width", "85%"], [1, "example-list", "mt-20"], ["class", "category-item", 3, "id", 4, "ngFor", "ngForOf"], [1, "category-item", 3, "id"], [1, "field-content"], [1, "field-item"], [1, "category-name"], [1, ""], ["class", "field-category", 3, "id", 4, "ngFor", "ngForOf"], [1, "field-category", 3, "id"], [1, "inner-loop"], [1, "fields-content"], [1, "fields-container"], [4, "ngFor", "ngForOf"], [1, "select-contact"], [1, "select-template"], ["appearance", "outline", 1, "full-width"], ["formControlName", "TemplateId", "required", "", 3, "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], ["mat-raised-button", "", "color", "primary", 3, "disabled", "click"], [3, "value"], [1, "summary"], [1, "template-title"], ["class", "li-title", 3, "class", "click", 4, "ngFor", "ngForOf"], ["mat-button", "", "type", "submit", 1, "register-button", 3, "disabled"], [1, "fields", 2, "height", "85vh"], ["class", "category-item content-item", 3, "class", "id", 4, "ngFor", "ngForOf"], [1, "li-title", 3, "click"], [3, "ngxScrollTo"], [1, "category-item", "content-item", 3, "id"], ["placeholder", "Company", "required", "", "style", "width: 150px;", 3, "ngModel", "ngModelOptions", "ngModelChange", 4, "ngIf"], [1, "category-container"], ["placeholder", "Company", "required", "", 2, "width", "150px", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["class", "inner-loop", 4, "ngIf"], [3, "field", "length", "i", "j", "onDrop", "onCheckValue"], [1, "child"], ["class", "inner-child", 4, "ngIf"], [1, "inner-child"], ["class", "inner-child-content", 3, "id", 4, "ngFor", "ngForOf"], [1, "inner-child-content", 3, "id"]], template: function OnboardingCreateComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "main");
            i0.ɵɵelementStart(1, "div", 0);
            i0.ɵɵtemplate(2, OnboardingCreateComponent_ng_container_2_Template, 2, 1, "ng-container", 1);
            i0.ɵɵelementStart(3, "form", 2);
            i0.ɵɵlistener("submit", function OnboardingCreateComponent_Template_form_submit_3_listener() { return ctx.onSubmit(); });
            i0.ɵɵtemplate(4, OnboardingCreateComponent_div_4_Template, 13, 5, "div", 3);
            i0.ɵɵtemplate(5, OnboardingCreateComponent_div_5_Template, 14, 6, "div", 4);
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
        } }, directives: [i5.NgIf, i1.ɵangular_packages_forms_forms_y, i1.NgControlStatusGroup, i5.NgStyle, i1.FormGroupDirective, i6.MatButton, i5.NgForOf, i7.MatFormField, i7.MatLabel, i8.MatSelect, i1.NgControlStatus, i1.FormControlName, i9.NativeElementInjectorDirective, i1.RequiredValidator, i10.MatOption, i11.ScrollToDirective, i12.MatIcon, i1.NgModel, i13.SubOnboardingCreateComponent], pipes: [i5.KeyValuePipe], styles: ["main[_ngcontent-%COMP%]{background:no-repeat padding-box #f4f7f9;height:100vh;width:100%;display:flex;flex-direction:column;align-items:center}main[_ngcontent-%COMP%]   .disabled[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{background-color:transparent!important}main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{width:99%;height:100%;padding-left:1%}main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font:bold 32px/30px Nexa Text;letter-spacing:0;color:#171f26;padding-top:20px}main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font:20px/26px Nexa Text;letter-spacing:0;color:#171f26}main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   p.sub-title[_ngcontent-%COMP%]{max-width:400px}main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .select-contact[_ngcontent-%COMP%]{max-width:70%;margin:5% auto auto;background:no-repeat padding-box #fff;border:1px solid #dce4e9;border-radius:6px;padding:5%}main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .select-contact[_ngcontent-%COMP%]   .select-template[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;justify-content:space-between;margin-top:50px}main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .select-contact[_ngcontent-%COMP%]   .select-template[_ngcontent-%COMP%]   .full-width[_ngcontent-%COMP%]{width:40%}main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .select-contact[_ngcontent-%COMP%]   .select-template[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{float:right;text-align:center;border:1px solid #543cb6;border-radius:7px;padding:1em 2em;display:flex;align-items:center;background-color:transparent;font:bold 15px/17px Nexa;letter-spacing:0;color:#543cb6;-ms-grid-row-align:center;align-self:center;width:220px}main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .category[_ngcontent-%COMP%]   .onboarding-mat-stepper[_ngcontent-%COMP%]   mat-horizontal-stepper[_ngcontent-%COMP%]   .next-step[_ngcontent-%COMP%]{float:right}main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{display:flex;height:100%;width:100%;max-width:1500px}main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .select-contact[_ngcontent-%COMP%]{max-width:70%;margin:5% auto auto;background:no-repeat padding-box #fff;border:1px solid #dce4e9;border-radius:6px;padding:5%}main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .select-contact[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{float:right;text-align:center;border:1px solid #543cb6;border-radius:7px;padding:.7em 2em .5em;display:flex;align-items:center;background-color:transparent;font:bold 15px/17px Nexa;letter-spacing:0;color:#543cb6;align-self:flex-end}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]{width:786px;background:no-repeat padding-box #fff;border:1px solid #dce4e9;border-radius:6px;opacity:1;margin:auto;padding:0 25px;-ms-grid-row-align:center;align-self:center}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{text-align:center;font:900 32px/48px Nexa;letter-spacing:0;color:#171f26}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font:18px/24px Nexa Text;letter-spacing:0;color:#171f26}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .profil-name-content[_ngcontent-%COMP%]{display:flex;align-items:center;position:relative}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .profil-name-content[_ngcontent-%COMP%]   .add-picto[_ngcontent-%COMP%]{margin-right:15px;min-width:50px;width:30px;padding:9px 12px}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .profil-name-content[_ngcontent-%COMP%]   .add-picto[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin-right:10px}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .profil-name-content[_ngcontent-%COMP%]   .list-picto[_ngcontent-%COMP%]{position:absolute;height:200px;width:100%;background:no-repeat padding-box #fff;border:1px solid #171f26;border-radius:8px;top:100%;z-index:1}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .profil-name-content[_ngcontent-%COMP%]   .list-picto[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin:15px;border:none;font-size:40px}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .profil-name-content[_ngcontent-%COMP%]   .list-picto[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]:hover{color:#830b6b!important;cursor:pointer}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .box-title-content[_ngcontent-%COMP%]{width:100%;margin:25px auto}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font:900 32px/38px Nexa;letter-spacing:0;color:#171f26}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font:15px/26px Nexa Text;letter-spacing:0;color:#171f26;text-align:center}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .link-create-profil[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:center}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{text-align:center;border:1px solid #543cb6;border-radius:7px;padding:.7em 2em .5em;display:flex;align-items:center;background-color:transparent;font:bold 15px/17px Nexa;letter-spacing:0;color:#543cb6}main[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:space-between}.expand-button[_ngcontent-%COMP%]{color:#5a607f!important;background-color:transparent!important;box-shadow:none!important}.category-name[_ngcontent-%COMP%]{text-align:left;font:bold 22px/48px Nexa Text;letter-spacing:0;color:#171f26;padding-left:15px}.full-width[_ngcontent-%COMP%]{width:100%}.field-action[_ngcontent-%COMP%]{width:10%}.field-size[_ngcontent-%COMP%]{width:90%;margin:auto 2% auto auto}  .mat-form-field-appearance-fill .mat-form-field-flex{background-color:#fff}  .mat-form-field-appearance-fill .mat-form-field-underline::before{background-color:transparent}[_nghost-%COMP%]     .mat-checkbox-checked.mat-accent .mat-checkbox-background, [_nghost-%COMP%]     .mat-checkbox-indeterminate.mat-accent .mat-checkbox-background{background-color:transparent}.category-action[_ngcontent-%COMP%]{display:flex;width:100%}.delete-field[_ngcontent-%COMP%]{margin:auto 2%}.radio-group[_ngcontent-%COMP%]   .mat-radio-button[_ngcontent-%COMP%]{margin-right:10px}.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary[_ngcontent-%COMP%]{background-color:#3f51b5;color:#fff;min-height:20px;font-size:10px}.move-icons[_ngcontent-%COMP%]{cursor:move}.category-item[_ngcontent-%COMP%], .cdk-drag-placeholder[_ngcontent-%COMP%]{display:flex;align-items:baseline;width:98%;border:1px solid #dce4e9;border-radius:8px;background-color:#fff;padding-bottom:10px;margin-top:10px;min-height:60px}.category-item[_ngcontent-%COMP%]   .left-action[_ngcontent-%COMP%], .cdk-drag-placeholder[_ngcontent-%COMP%]   .left-action[_ngcontent-%COMP%]{height:auto;background-color:#49a094;padding-top:7px;width:40px;-ms-grid-row-align:stretch;align-self:stretch;border-top-left-radius:8px;border-bottom-left-radius:8px}.category-item[_ngcontent-%COMP%]   .left-action[_ngcontent-%COMP%]   .transparent-button[_ngcontent-%COMP%], .cdk-drag-placeholder[_ngcontent-%COMP%]   .left-action[_ngcontent-%COMP%]   .transparent-button[_ngcontent-%COMP%]{background-color:transparent;box-shadow:none;width:40px;padding:0;margin:0;min-width:auto;color:#fff}.category-item[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%], .cdk-drag-placeholder[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%]{width:100%;-ms-grid-row-align:center;align-self:center}.category-item[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%], .cdk-drag-placeholder[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;border:transparent!important}.category-item[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]   .mat-form-field-wrapper[_ngcontent-%COMP%]   .mat-form-field-flex[_ngcontent-%COMP%]   .mat-form-field-outline[_ngcontent-%COMP%], .category-item[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%]   .mat-form-field-outline[_ngcontent-%COMP%], .cdk-drag-placeholder[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]   .mat-form-field-wrapper[_ngcontent-%COMP%]   .mat-form-field-flex[_ngcontent-%COMP%]   .mat-form-field-outline[_ngcontent-%COMP%], .cdk-drag-placeholder[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%]   .mat-form-field-outline[_ngcontent-%COMP%]{color:transparent!important}.category-item[_ngcontent-%COMP%]   .category-container[_ngcontent-%COMP%], .cdk-drag-placeholder[_ngcontent-%COMP%]   .category-container[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;justify-content:flex-start;align-items:flex-start}.cdk-drag-preview[_ngcontent-%COMP%]{box-sizing:border-box;border-radius:4px;opacity:1}.cdk-drag-preview[_ngcontent-%COMP%]   .expand-button[_ngcontent-%COMP%]{color:#5a607f!important;background-color:transparent!important;box-shadow:none!important;margin-right:28px!important}.cdk-drag-placeholder[_ngcontent-%COMP%]{opacity:0}.cdk-drag-animating[_ngcontent-%COMP%], .example-list.cdk-drop-list-dragging[_ngcontent-%COMP%]   .category-item[_ngcontent-%COMP%]:not(.cdk-drag-placeholder){transition:transform 250ms cubic-bezier(0,0,.2,1)}.child[_ngcontent-%COMP%]{margin-left:0}.child[_ngcontent-%COMP%]   .inner-child[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap}.category[_ngcontent-%COMP%]{display:flex;flex-direction:row;width:100vw}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]{width:250px;background-color:#fff;margin:10px 20px;border-radius:5px;border:1px solid #dbcbcb96}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:15px;border-bottom:1px solid #dbcbcb96;margin:10px;padding-bottom:5px;padding-top:0;font-family:\"Nexa Text\";display:flex;flex-direction:column;justify-content:space-between;align-items:flex-start}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-weight:600;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;margin-top:-5px}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin-left:15px;cursor:pointer}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   h3.template-title[_ngcontent-%COMP%]{font:900 24px/36px Nexa Text;letter-spacing:0;color:#171f26}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]{font-weight:600;margin-left:-27px;font-size:15px;list-style:none}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:5px;margin:5px auto;cursor:pointer;text-align:left;font:12px/19px Nexa Text;letter-spacing:0;color:#535760}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]{padding-left:0;margin-left:0}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.li-title[_ngcontent-%COMP%]{font-size:14px;font-weight:600;margin-right:10px}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.li-title[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:140px;outline:0;border:1px dashed grey}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.li-title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:inline-flex;align-items:center;width:100%}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.li-title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin-left:10px}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.li-title.active[_ngcontent-%COMP%], .category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.li-title[_ngcontent-%COMP%]:hover{background:no-repeat padding-box #e5e8ee;border-radius:5px}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.sub-title[_ngcontent-%COMP%]{list-style:none;padding-left:20px}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.sub-title.active[_ngcontent-%COMP%], .category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.sub-title.active[_ngcontent-%COMP%]::marker, .category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.sub-title[_ngcontent-%COMP%]:hover{font-weight:600;background:no-repeat padding-box #e5e8ee;border-radius:5px}.category[_ngcontent-%COMP%]   .fields[_ngcontent-%COMP%]{width:90%;max-height:100vh;overflow:auto;margin-right:.5%;overflow-x:hidden}.category[_ngcontent-%COMP%]   .disabled[_ngcontent-%COMP%]{background-color:#f4f7f9!important}.category[_ngcontent-%COMP%]   .expand-button[_ngcontent-%COMP%]{color:#5a607f!important;background-color:transparent!important;box-shadow:none!important;margin-right:28px!important}.category[_ngcontent-%COMP%]   .expand-button[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%]{font-size:40px}.category[_ngcontent-%COMP%]   .transparent-button[_ngcontent-%COMP%]{background-color:transparent;box-shadow:none;width:40px;padding:0;margin:0;margin-left:0!important;min-width:auto;color:#fff}.add-button-sub-category[_ngcontent-%COMP%]{width:95.5%!important;margin-bottom:22px;margin-left:22px}.add-button-container[_ngcontent-%COMP%]{background:no-repeat padding-box #fff;border:1px dashed #dce4e9;border-radius:8px;margin-top:10px;padding:10px;display:flex;justify-content:center;align-items:center;width:98.5%;margin-bottom:22px}.add-button-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{display:flex;align-items:center;background-color:transparent;border:none;cursor:pointer;font:17px/26px Nexa Text;letter-spacing:0;color:#c2c8d5;box-shadow:none}.add-category[_ngcontent-%COMP%]{border:1px dashed #c2c8d5;border-radius:5px;margin-left:10px;margin-bottom:10px;font:bold 12px/19px Nexa Text;letter-spacing:0;color:#c2c8d5;width:92%}.inner-loop[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]{display:flex;height:100%;margin:0;width:100%;margin-top:10px;margin-bottom:10px}.inner-loop[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]   .button-action[_ngcontent-%COMP%]{background-color:#6fe8d7;-ms-grid-row-align:stretch;align-self:stretch;margin-top:0;margin-left:20px;border-bottom-left-radius:8px;border-top-left-radius:8px}.inner-loop[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]   .button-action[_ngcontent-%COMP%]   .transparent-button[_ngcontent-%COMP%]{background-color:transparent;box-shadow:none;width:40px;padding:0;margin:0;min-width:auto;color:#fff}.inner-loop[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]   .child-2-background[_ngcontent-%COMP%]{background-color:#cffaf4!important}.inner-loop[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]   .child-3-background[_ngcontent-%COMP%]{background-color:#e5e8ee!important}.inner-loop[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]   .fields-container[_ngcontent-%COMP%]{width:100%;padding-left:10px;padding-right:10px;padding-top:5px}.inner-loop[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]   .fields-container[_ngcontent-%COMP%]   lib-sub-category[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;width:100%}.inner-loop[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]   .fields-container[_ngcontent-%COMP%]   lib-sub-category[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]   .button-action[_ngcontent-%COMP%]{background-color:#6fe8d7;height:100%;margin:auto 15px auto auto;display:flex}.inner-loop[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]   .fields-container[_ngcontent-%COMP%]   lib-sub-category[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]   .button-action[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{box-shadow:none;background-color:transparent;color:#fff}.side-bar[_ngcontent-%COMP%]{display:flex;flex-direction:column}.register-button[_ngcontent-%COMP%]{background:no-repeat padding-box #171f26!important;border:2px solid #192128!important;border-radius:8px;color:#fff!important;width:85%;margin-left:22px!important;border:none!important;margin-top:10px}.register-button[disabled][disabled][_ngcontent-%COMP%]{opacity:.5!important;background:no-repeat padding-box #dadee2!important}.content-item[_ngcontent-%COMP%]{transition-property:border-image-slice border-image-source border-width;transition-timing-function:ease-in-out;transition-duration:.5s}.active-content[_ngcontent-%COMP%]{border-image-slice:1;border-width:2px;border-image-source:linear-gradient(to left,#9d107d,#4862ab)}  .phone-input-view-collab{border-bottom:1px solid #949494!important;padding-bottom:.3em;padding-top:1em;display:block!important;max-width:100%;font:14px/20px \"Nexa Text\"!important;width:95%}  .country-dropdown{min-width:unset!important}  .iti{width:100%!important}  #phone{width:90%!important}  #mobile-phone{width:100%}"] });
    return OnboardingCreateComponent;
}());
export { OnboardingCreateComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(OnboardingCreateComponent, [{
        type: Component,
        args: [{
                selector: "create-onboarding",
                templateUrl: "./onboarding-create.component.html",
                styleUrls: ["./onboarding-create.component.scss"],
            }]
    }], function () { return [{ type: i1.FormBuilder }, { type: i2.OnboardingService }, { type: i3.ActivatedRoute }, { type: i3.Router }, { type: i4.MatDialog }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib25ib2FyZGluZy1jcmVhdGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vb25ib2FyZGluZy8iLCJzb3VyY2VzIjpbImxpYi9vbmJvYXJkaW5nLWNyZWF0ZS9vbmJvYXJkaW5nLWNyZWF0ZS5jb21wb25lbnQudHMiLCJsaWIvb25ib2FyZGluZy1jcmVhdGUvb25ib2FyZGluZy1jcmVhdGUuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDbEQsT0FBTyxFQUEwQixVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUdwRSxPQUFPLEVBQWUsZUFBZSxFQUFFLGlCQUFpQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFekYsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0scURBQXFELENBQUM7QUFDNUYsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sbURBQW1ELENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7SUNzQ2pDLDZCQUNJO0lBQUEsWUFBZ0I7SUFBQSxxQkFBSztJQUFBLHFCQUN6QjtJQUFBLDBCQUFlOzs7SUFEWCxlQUFnQjtJQUFoQixpREFBZ0I7OztJQU1aLDZCQUNJO0lBQUEsOEJBQ0k7SUFBQSxZQUNKO0lBQUEsaUJBQVM7SUFBQyxxQkFDVjtJQUFBLFlBQWU7SUFBQSxxQkFBSztJQUFBLHFCQUN4QjtJQUFBLDBCQUFlOzs7SUFIUCxlQUNKO0lBREksOENBQ0o7SUFDQSxlQUFlO0lBQWYsZ0RBQWU7OztJQUlmLDZCQUVJO0lBQUEsOEJBQ0k7SUFBQSxZQUNKO0lBQUEsaUJBQVM7SUFBQyxxQkFFVjtJQUFBLFlBQWtCO0lBQUEscUJBQUk7SUFBQSxxQkFDMUI7SUFBQSwwQkFBZTs7O0lBSlAsZUFDSjtJQURJLGlEQUNKO0lBRUEsZUFBa0I7SUFBbEIsbURBQWtCOzs7SUFQMUIsNkJBQ0k7SUFBQSwyS0FFSTs7SUFNUiwwQkFBZTs7O0lBUFAsZUFB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QU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7Z0JBQy9DLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7Z0JBQ2hFLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO2FBQ2xGO1NBQ0Y7YUFBTTtZQUNMLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLEVBQUU7Z0JBQzlGLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQzthQUNwRztpQkFBTTtnQkFDTCxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7Z0JBQy9DLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMs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T25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtQnVpbGRlciwgRm9ybUdyb3VwLCBWYWxpZGF0b3JzIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XG5pbXBvcnQgeyBPbmJvYXJkaW5nU2VydmljZSB9IGZyb20gXCIuLi9vbmJvYXJkaW5nLnNlcnZpY2VcIjtcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBDZGtEcmFnRHJvcCwgbW92ZUl0ZW1JbkFycmF5LCB0cmFuc2ZlckFycmF5SXRlbSB9IGZyb20gXCJAYW5ndWxhci9jZGsvZHJhZy1kcm9wXCI7XG5pbXBvcnQgeyBNYXREaWFsb2cgfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nXCI7XG5pbXBvcnQgeyBVcGRhdGVQcm9maWxDb21wb25lbnQgfSBmcm9tICcuLi9jb21wb25lbnRzL3VwZGF0ZS1wcm9maWwvdXBkYXRlLXByb2ZpbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgRXhpdENvbmZpcm1Db21wb25lbnQgfSBmcm9tICcuLi9jb21wb25lbnRzL2V4aXQtY29uZmlybS9leGl0LWNvbmZpcm0uY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcImNyZWF0ZS1vbmJvYXJkaW5nXCIsXG4gIHRlbXBsYXRlVXJsOiBcIi4vb25ib2FyZGluZy1jcmVhdGUuY29tcG9uZW50Lmh0bWxcIixcbiAgc3R5bGVVcmxzOiBbXCIuL29uYm9hcmRpbmctY3JlYXRlLmNvbXBvbmVudC5zY3NzXCJdLFxufSlcbmV4cG9ydCBjbGFzcyBPbmJvYXJkaW5nQ3JlYXRlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgZm9ybTogRm9ybUdyb3VwO1xuICBjdXJyZW50UHJvZmlsOiBhbnkgPSB7fTtcbiAgY2FuRXhpdD10cnVlO1xuICB0YWdzID0gW107XG4gIGlkID0gXCIwXCI7XG4gIHBhcmVudCA9IFtdO1xuICBlZGl0SW5kZXg9bnVsbDtcbiAgc2hvd1Byb2ZpbGVOYW1lID0gZmFsc2U7XG4gIHNlbGVjdGVkTWVudT0wO1xuICB0ZW1wbGF0ZXM6IGFueTtcbiAgY29udGFjdHM6IGFueTtcbiAgbWF0SWNvbkxpc3QgPSBbXG4gICAgeyBuYW1lOiAnZGV2ZWxvcGVyX2JvYXJkJyB9LFxuICAgIHsgbmFtZTogJ2NvbnRhY3RfcGhvbmUnIH0sXG4gICAgeyBuYW1lOiAnY29udGFjdF9tYWlsJyB9LFxuICAgIHsgbmFtZTogJ3BsYXlfY2lyY2xlX2ZpbGxlZCcgfSxcbiAgICB7IG5hbWU6ICdjb250cm9sX2NhbWVyYScgfSxcbiAgICB7IG5hbWU6ICdleHBsaWNpdCcgfSxcbiAgICB7IG5hbWU6ICdwZXJzb24nIH0sXG4gICAgeyBuYW1lOiAndmlzaWJpbGl0eScgfSxcbiAgICB7IG5hbWU6ICd2aWRlb19sYWJlbCcgfSxcbiAgICB7IG5hbWU6ICdhZGRfY2lyY2xlJyB9LFxuICAgIHsgbmFtZTogJ3dhdGNoX2xhdGVyJyB9LFxuICAgIHsgbmFtZTogJ3doZXJlX3RvX3ZvdGUnIH0sXG4gICAgeyBuYW1lOiAnd29yaycgfSxcbiAgICB7IG5hbWU6ICd3ZWInIH0sXG4gICAgeyBuYW1lOiAnd2hhdHNob3QnIH0sXG4gICAgeyBuYW1lOiAnd2lmaScgfSxcbiAgICB7IG5hbWU6ICd3b3Jrc3BhY2VzJyB9LFxuICAgIHsgbmFtZTogJ3diX2Nsb3VkeScgfSxcbiAgICB7IG5hbWU6ICd3YXZlcycgfSxcbiAgICB7IG5hbWU6ICd3YXJuaW5nJyB9LFxuICAgIHsgbmFtZTogJ3NwYWNlX2RhcycgfVxuICBdO1xuICBpc1BpY3RvTGlzdFNob3c6IGJvb2xlYW47XG4gIHBpY3RvID0gXCJcIjtcbiAgY3VycmVudE9uYm9hcmRpbmc6IGFueTtcbiAgY3VycmVudFRlbXBsYXRlOmFueVxuICBpc1NlbGVjdGVkOiBib29sZWFuO1xuICBjdXJyZW50VXNlcjogYW55O1xuICBjdXJyZW50QWN0aXZlOiBhbnk7XG4gIHNob3dNb2RlID0gZmFsc2U7XG4gIHNlbGVjdGVkQ2F0ZWdvcnlJbmRleD1udWxsO1xuICBsb2FkaW5nPWZhbHNlO1xuICBpbnZhbGlkZVZhbHVlOiBib29sZWFuO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZmI6IEZvcm1CdWlsZGVyLCBcbiAgICBwdWJsaWMgc2VydmljZTogT25ib2FyZGluZ1NlcnZpY2UsIFxuICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLCBcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgIHByaXZhdGUgZGlhbG9nOiBNYXREaWFsb2dcbiAgICApIHsgfVxuICBcbiAgY2F0ZWdvcmllczogYW55XG5cbiAgIGlzT2JqZWN0KG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAhPT0gdW5kZWZpbmVkICYmIG9iaiAhPT0gbnVsbCAmJiBvYmouY29uc3RydWN0b3IgPT0gT2JqZWN0O1xuICAgIH1cblxuICBjYW5EZWFjdGl2YXRlKCl7XG4gICAgaWYoIXRoaXMuY2FuRXhpdCl7XG4gICAgICB0aGlzLmRpYWxvZy5vcGVuKEV4aXRDb25maXJtQ29tcG9uZW50LHtcbiAgICAgICAgZGF0YTonJ1xuICAgICAgfSlcbiAgICAgIHJldHVybiB0aGlzLnNlcnZpY2UuY2FuRXhpdCRcbiAgICB9XG4gICAgcmV0dXJuIHRydWUgICAgXG4gIH1cbiAgXG4gIGFzeW5jIG5nT25Jbml0KCkge1xuXG4gICAgdGhpcy5vbkNyZWF0ZUR5bmFtaWNGb3JtKCk7XG4gICAgdGhpcy5pZCA9IHRoaXMucm91dGUuc25hcHNob3QucGFyYW1NYXAuZ2V0KFwiaWRcIik7XG5cbiAgICBzZXRUaW1lb3V0KGFzeW5jICgpID0+IHtcbiAgICAgIGF3YWl0IHRoaXMuc2VydmljZS5nZXRBbGxQcm9maWwoKTsgICAgICBcbiAgICB9LCA1MDApO1xuXG4gICAgdGhpcy5zZXJ2aWNlLl90ZW1wbGF0ZXMuc3Vic2NyaWJlKChkYXRhKSA9PiB7XG4gICAgICB0aGlzLnRlbXBsYXRlcyA9IGRhdGE7XG4gICAgfSk7XG4gICAgdGhpcy5pZCA9IHRoaXMucm91dGUuc25hcHNob3QucGFyYW1NYXAuZ2V0KFwiaWRcIik7XG4gICAgaWYgKHRoaXMuaWQgJiYgdGhpcy5pZCAhPT0gXCIwXCIpIHtcbiAgICAgIHRoaXMuc2hvd01vZGUgPSB0cnVlO1xuICAgICAgc2V0VGltZW91dChhc3luYyAoKSA9PiB7XG4gICAgICAgIHRoaXMuY3VycmVudE9uYm9hcmRpbmcgPSBhd2FpdCB0aGlzLnNlcnZpY2UuZ2V0T25ib2FyZGluZyh0aGlzLmlkKTtcbiAgICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLmN1cnJlbnRPbmJvYXJkaW5nKTtcbiAgICAgICAgdGhpcy5mb3JtLnBhdGNoVmFsdWUodGhpcy5jdXJyZW50T25ib2FyZGluZylcbiAgICAgICAgdGhpcy5jYXRlZ29yaWVzPXRoaXMuY3VycmVudE9uYm9hcmRpbmcuY2F0ZWdvcmllcztcbiAgICAgICAgdGhpcy5jdXJyZW50VGVtcGxhdGU9dGhpcy5jdXJyZW50T25ib2FyZGluZz8udnRlbXBsYXRlc1swXVxuICAgICAgICBpZiAodGhpcy5jdXJyZW50T25ib2FyZGluZy5UZW1wbGF0ZUlkKSB7XG4gICAgICAgICAgdGhpcy5vblNlbGVjdENvbnRhY3RUZW1wbGF0ZSgpXG4gICAgICAgIH1cbiAgICAgIH0sIDUwMCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldFRpbWVvdXQoYXN5bmMgKCkgPT4ge1xuICAgICAgICAvL3RoaXMuY3VycmVudE9uYm9hcmRpbmcgPSBhd2FpdCB0aGlzLnNlcnZpY2UuZ2V0T25ib2FyZGluZyh0aGlzLmlkKTtcbiAgICAgICAgLy90aGlzLmZvcm0ucGF0Y2hWYWx1ZSh0aGlzLmN1cnJlbnRPbmJvYXJkaW5nKVxuICAgICAgICAvL3RoaXMuY2F0ZWdvcmllcz10aGlzLmN1cnJlbnRPbmJvYXJkaW5nLmNhdGVnb3JpZXM7XG4gICAgICAgIC8vdGhpcy5jdXJyZW50VGVtcGxhdGU9dGhpcy5jdXJyZW50T25ib2FyZGluZz8udnRlbXBsYXRlc1swXVxuICAgICAgICAvL3RoaXMub25TZWxlY3RDb250YWN0VGVtcGxhdGUoKVxuICAgICAgfSwgNTAwKTtcbiAgICB9XG4gIH1cblxuICBvbkNyZWF0ZUR5bmFtaWNGb3JtKCkge1xuICAgIHRoaXMuZm9ybSA9IHRoaXMuZmIuZ3JvdXAoe1xuICAgICAgVGVtcGxhdGVJZDogWzAsIFZhbGlkYXRvcnMucmVxdWlyZWRdXG4gICAgfSk7XG4gIH1cblxuICBvblNlbGVjdENvbnRhY3RUZW1wbGF0ZSgpIHtcbiAgICB0aGlzLmlzU2VsZWN0ZWQgPSB0cnVlO1xuICB9XG5cblxuICBvblNlbGVjdChpZCkge1xuICAgIHRoaXMuY3VycmVudFRlbXBsYXRlPSB0aGlzLnRlbXBsYXRlcy5maW5kKCh0KSA9PiB0Ll9pZCA9PT0gaWQpO1xuICAgIHRoaXMuY2F0ZWdvcmllcyA9dGhpcy5jdXJyZW50VGVtcGxhdGUuY2F0ZWdvcmllc1xuICAgIC5maWx0ZXIoKGNhdCkgPT4gY2F0LmV4cGFuZE9uYm9hcmRpbmcpXG4gICAgLm1hcCgoY2F0KSA9PiB7XG4gICAgICBpZiAoY2F0LmZvcm1zKSB7XG4gICAgICAgIGNvbnN0IGYgPSBjYXQuZm9ybXNcbiAgICAgICAgICAuZmlsdGVyKChmb3JtKSA9PiBmb3JtLmV4cGFuZE9uYm9hcmRpbmcpXG4gICAgICAgICAgLm1hcCgoc3ViKSA9PiB7XG4gICAgICAgICAgICBpZiAoc3ViLmZvcm1zKSB7XG4gICAgICAgICAgICAgIGNvbnN0IHMgPSBzdWIuZm9ybXMuZmlsdGVyKChjaGlsZCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChjaGlsZC5mb3Jtcykge1xuICAgICAgICAgICAgICAgICAgY29uc3QgYyA9IGNoaWxkLmZvcm1zLmZpbHRlcigoY2gpID0+IGNoLmV4cGFuZE9uYm9hcmRpbmcpXG4gICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAuLi5jaGlsZCxcbiAgICAgICAgICAgICAgICAgICAgZm9ybXM6IGNcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNoaWxkO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5zdWIsXG4gICAgICAgICAgICAgICAgZm9ybXM6IHNcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHN1YjtcbiAgICAgICAgICB9KVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIC4uLmNhdCxcbiAgICAgICAgICBmb3JtczogZlxuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gY2F0XG4gICAgfSlcbiAgfVxuXG4gIGV4aXN0U3ViRm9ybShmb3Jtcyl7XG4gICAgbGV0IGV4aXN0PWZhbHNlO1xuICAgIGlmKGZvcm1zKXtcbiAgICAgIGZvciAoY29uc3Qgc3ViIG9mIGZvcm1zKSB7XG4gICAgICAgIGlmKHN1Yi5mb3Jtcyl7XG4gICAgICAgICAgZXhpc3Q9dHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZXhpc3RcbiAgfVxuXG4gIG9uQ2hhbmdlQ2F0ZWdvcnkoKSB7XG4gICAgY29uc3QgY2hlY2tNYW5kYXRvcnk9KGZpZWxkKT0+ICEhZmllbGQudmFsdWUgJiYgZmllbGQuaXNNYW5kYXRvcnkgJiYgZmllbGQudHlwZSE9PVwiY2hlY2tib3hfbXVsdGlwbGVcIiAgfHwgZmllbGQuaXNDb25kaXRpb25hbCAgfHwgIWZpZWxkLmlzTWFuZGF0b3J5IHx8IGZpZWxkLnR5cGU9PT1cImNoZWNrYm94X211bHRpcGxlXCJcbiAgICByZXR1cm4gdGhpcy5jYXRlZ29yaWVzLmV2ZXJ5KChjYXQpID0+IGNhdC5mb3Jtcy5ldmVyeSgoZmllbGQpID0+IHsgXG4gICAgICBpZihmaWVsZC5mb3Jtcyl7XG4gICAgICAgICByZXR1cm4gZmllbGQuZm9ybXMuZXZlcnkoKGZvcm0pPT57XG4gICAgICAgICAgIGlmKGZvcm0uZm9ybXMpe1xuICAgICAgICAgICAgICByZXR1cm4gZm9ybS5mb3Jtcy5ldmVyeSgoY2hpbGQpPT57XG4gICAgICAgICAgICAgICAgICByZXR1cm4gY2hlY2tNYW5kYXRvcnkoY2hpbGQpXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgIH1cbiAgICAgICAgICAgcmV0dXJuIGNoZWNrTWFuZGF0b3J5KGZvcm0pXG4gICAgICAgICB9KVxuICAgICAgfVxuICAgICAgcmV0dXJuIGNoZWNrTWFuZGF0b3J5KGZpZWxkKVxuICAgIH0pKTtcbiAgfVxuXG5cbiAgYXN5bmMgb25TdWJtaXQoKSB7XG4gICAgaWYgKHRoaXMuZm9ybS52YWxpZCAmJiB0aGlzLm9uQ2hhbmdlQ2F0ZWdvcnkoKSkgeyBcbiAgICAgIHRoaXMubG9hZGluZz10cnVlO1xuICAgICAgY29uc3QgcmVzdWx0ID1cbiAgICAgICAgdGhpcy5pZCAmJiB0aGlzLmlkICE9PSBcIjBcIlxuICAgICAgICAgID8gYXdhaXQgdGhpcy5zZXJ2aWNlLnVwZGF0ZU9uYm9hcmRpbmcoe1xuICAgICAgICAgICAgLi4udGhpcy5mb3JtLnZhbHVlLFxuICAgICAgICAgICAgY2F0ZWdvcmllczogdGhpcy5jYXRlZ29yaWVzLFxuICAgICAgICAgICAgX2lkOnRoaXMuaWRcbiAgICAgICAgICB9KVxuICAgICAgICAgIDogYXdhaXQgdGhpcy5zZXJ2aWNlLmNyZWF0ZU9uYm9hcmRpbmcoe1xuICAgICAgICAgICAgLi4udGhpcy5mb3JtLnZhbHVlLFxuICAgICAgICAgICAgY2F0ZWdvcmllczogdGhpcy5jYXRlZ29yaWVzXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgXG4gICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgIGlmICh0aGlzLmlkICYmIHRoaXMuaWQgIT09IFwiMFwiKSB7XG4gICAgICAgICAgdGhpcy5jYXRlZ29yaWVzID0gcmVzdWx0LmNhdGVnb3JpZXM7XG4gICAgICAgICAgdGhpcy5jdXJyZW50T25ib2FyZGluZyA9IHJlc3VsdDtcbiAgICAgICAgfVxuICAgICAgICBhd2FpdCB0aGlzLnNlcnZpY2UuZ2V0QWxsUHJvZmlsKCk7XG4gICAgICAgIHRoaXMubG9hZGluZz1mYWxzZTtcbiAgICAgICAgdGhpcy5jYW5FeGl0PXRydWU7IFxuICAgICAgICB0aGlzLnNob3dNb2RlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW3RoaXMuc2VydmljZS5tYWluUGF0aCsnL3JlcXVlc3RzJ10pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJlcnJyb3IuLi4uLi5cIik7XG4gICAgICAgIHRoaXMubG9hZGluZz1mYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuXG4gIG9uRXhwZW5kTW9yZShldmVudCwgLi4ucGFyYW1zKSB7XG4gICAgaWYgKGV2ZW50KSB7XG4gICAgICBpZiAoZXZlbnQuZXZlbnQpIHtcbiAgICAgICAgZXZlbnQuZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIH1cbiAgICAgIC8vIGlmIChldmVudC5maWVsZCAmJiAhZXZlbnQuZmllbGQuZXhwYW5kTW9yZSkge1xuICAgICAgLy8gICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY2F0ZWdvcmllcy5sZW5ndGg7IGkrKykge1xuICAgICAgLy8gICAgIHRoaXMuY2F0ZWdvcmllc1tpXS5leHBhbmRNb3JlID0gZmFsc2U7XG4gICAgICAvLyAgICAgaWYgKHRoaXMuY2F0ZWdvcmllc1tpXS5mb3Jtcykge1xuICAgICAgLy8gICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLmNhdGVnb3JpZXNbaV0uZm9ybXMubGVuZ3RoOyBqKyspIHtcbiAgICAgIC8vICAgICAgICAgdGhpcy5jYXRlZ29yaWVzW2ldLmZvcm1zW2pdLmV4cGFuZE1vcmUgPSBmYWxzZTtcbiAgICAgIC8vICAgICAgIH1cbiAgICAgIC8vICAgICB9XG4gICAgICAvLyAgIH1cbiAgICAgIC8vIH1cblxuICAgIH1cbiAgICBpZiAocGFyYW1zLmxlbmd0aCA9PT0gMSkge1xuICAgICAgdGhpcy5jYXRlZ29yaWVzW3BhcmFtc1swXV0uZGVmYXVsdFZhbHVlID0gIXRoaXMuY2F0ZWdvcmllc1twYXJhbXNbMF1dLmRlZmF1bHRWYWx1ZTtcbiAgICB9IGVsc2UgaWYgKHBhcmFtcy5sZW5ndGggPT09IDIpIHtcbiAgICAgIHRoaXMuY3VycmVudEFjdGl2ZT1TdHJpbmcocGFyYW1zWzBdKSArIFN0cmluZyhwYXJhbXNbMV0pXG4gICAgICBpZiAodGhpcy5jYXRlZ29yaWVzW3BhcmFtc1swXV0uZm9ybXNbcGFyYW1zWzFdXS5kZWZhdWx0VmFsdWUpIHtcbiAgICAgICAgdGhpcy5jYXRlZ29yaWVzW3BhcmFtc1swXV0uZm9ybXNbcGFyYW1zWzFdXS5kZWZhdWx0VmFsdWUgPSBmYWxzZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY2F0ZWdvcmllc1twYXJhbXNbMF1dLmRlZmF1bHRWYWx1ZSA9IHRydWU7XG4gICAgICAgIHRoaXMuY2F0ZWdvcmllc1twYXJhbXNbMF1dLmZvcm1zW3BhcmFtc1sxXV0uZGVmYXVsdFZhbHVlID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHBhcmFtcy5sZW5ndGggPT09IDMpIHtcbiAgICAgIGlmICh0aGlzLmNhdGVnb3JpZXNbcGFyYW1zWzBdXS5mb3Jtc1twYXJhbXNbMV1dLmZvcm1zW3BhcmFtc1syXV0uZGVmYXVsdFZhbHVlKSB7XG4gICAgICAgIHRoaXMuY2F0ZWdvcmllc1twYXJhbXNbMF1dLmZvcm1zW3BhcmFtc1sxXV0uZm9ybXNbcGFyYW1zWzJdXS5kZWZhdWx0VmFsdWUgPSBmYWxzZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY2F0ZWdvcmllc1twYXJhbXNbMF1dLmRlZmF1bHRWYWx1ZSA9IHRydWU7XG4gICAgICAgIHRoaXMuY2F0ZWdvcmllc1twYXJhbXNbMF1dLmZvcm1zW3BhcmFtc1sxXV0uZGVmYXVsdFZhbHVlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5jYXRlZ29yaWVzW3BhcmFtc1swXV0uZm9ybXNbcGFyYW1zWzFdXS5mb3Jtc1twYXJhbXNbMl1dLmRlZmF1bHRWYWx1ZSA9IHRydWU7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0aGlzLmNhdGVnb3JpZXNbcGFyYW1zWzBdXS5mb3Jtc1twYXJhbXNbMV1dLmZvcm1zW3BhcmFtc1syXV0uZm9ybXNbcGFyYW1zWzNdXS5kZWZhdWx0VmFsdWUpIHtcbiAgICAgICAgdGhpcy5jYXRlZ29yaWVzW3BhcmFtc1swXV0uZm9ybXNbcGFyYW1zWzFdXS5mb3Jtc1twYXJhbXNbMl1dLmZvcm1zW3BhcmFtc1szXV0uZGVmYXVsdFZhbHVlID0gZmFsc2U7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNhdGVnb3JpZXNbcGFyYW1zWzBdXS5kZWZhdWx0VmFsdWUgPSB0cnVlO1xuICAgICAgICB0aGlzLmNhdGVnb3JpZXNbcGFyYW1zWzBdXS5mb3Jtc1twYXJhbXNbMV1dLmRlZmF1bHRWYWx1ZSA9IHRydWU7XG4gICAgICAgIHRoaXMuY2F0ZWdvcmllc1twYXJhbXNbMF1dLmZvcm1zW3BhcmFtc1sxXV0uZm9ybXNbcGFyYW1zWzJdXS5kZWZhdWx0VmFsdWUgPSB0cnVlO1xuICAgICAgICB0aGlzLmNhdGVnb3JpZXNbcGFyYW1zWzBdXS5mb3Jtc1twYXJhbXNbMV1dLmZvcm1zW3BhcmFtc1syXV0uZm9ybXNbcGFyYW1zWzNdXS5kZWZhdWx0VmFsdWUgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGRyb3AoZXZlbnQ6IENka0RyYWdEcm9wPHN0cmluZ1tdPikge1xuICAgIHRoaXMuY2FuRXhpdD1mYWxzZTsgIFxuICAgIGlmIChldmVudC5wcmV2aW91c0NvbnRhaW5lciA9PT0gZXZlbnQuY29udGFpbmVyKSB7XG4gICAgICBtb3ZlSXRlbUluQXJyYXkoZXZlbnQuY29udGFpbmVyLmRhdGEsIGV2ZW50LnByZXZpb3VzSW5kZXgsIGV2ZW50LmN1cnJlbnRJbmRleCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRyYW5zZmVyQXJyYXlJdGVtKGV2ZW50LnByZXZpb3VzQ29udGFpbmVyLmRhdGEsIGV2ZW50LmNvbnRhaW5lci5kYXRhLCBldmVudC5wcmV2aW91c0luZGV4LCBldmVudC5jdXJyZW50SW5kZXgpO1xuICAgIH1cbiAgfVxuXG4gIGluZ29yZURlZmF1bHRBY3Rpb24oZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgfVxuICBvblNob3dDYXRlZ29yeSgpIHtcbiAgICB0aGlzLnNob3dQcm9maWxlTmFtZSA9ICF0aGlzLnNob3dQcm9maWxlTmFtZTtcbiAgfVxuXG4gIG9uU2VsZWN0UGljdG8oZSwgcGljdG8pIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5jYW5FeGl0PWZhbHNlOyAgXG4gICAgdGhpcy5mb3JtLnBhdGNoVmFsdWUoeyBQaWN0bzogcGljdG8gfSk7XG4gICAgdGhpcy5pc1BpY3RvTGlzdFNob3cgPSAhdGhpcy5pc1BpY3RvTGlzdFNob3c7XG4gIH1cblxuICBvblNob3dQaWN0b0xpc3QoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLmlzUGljdG9MaXN0U2hvdyA9ICF0aGlzLmlzUGljdG9MaXN0U2hvdztcbiAgfVxuIFxuICBvcGVuRGlhbG9nKCkge1xuICAgIGNvbnN0IGRpYWxvZ1JlZiA9IHRoaXMuZGlhbG9nLm9wZW4oVXBkYXRlUHJvZmlsQ29tcG9uZW50LHtcbiAgICAgIGRhdGE6e1xuICAgICAgICBtYXRJY29uTGlzdDp0aGlzLm1hdEljb25MaXN0LFxuICAgICAgICBmb3JtOnRoaXMuZm9ybSxcbiAgICAgICAgdGFnczp0aGlzLnRhZ3NcbiAgICAgIH1cbiAgICB9KTtcbiAgICBkaWFsb2dSZWYuYWZ0ZXJDbG9zZWQoKS5zdWJzY3JpYmUoKGNvbmZpcm1lZDogYm9vbGVhbikgPT4ge1xuICAgICAgaWYgKGNvbmZpcm1lZCkge1xuICAgICAgICBcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGlzRXhwYW5kZWQoZm9ybXM6YW55W10pe1xuICAgbGV0IGlzRXhwZW5kPWZhbHNlO1xuICAgIGZvciAoY29uc3QgZm9ybSBvZiBmb3Jtcykge1xuICAgICAgaWYoZm9ybS5kZWZhdWx0VmFsdWUpe1xuICAgICAgICBpc0V4cGVuZD10cnVlO1xuICAgICAgfVxuICAgICAgXG4gICAgfVxuICB9XG5cbiAgb25DaGVja0NvbmRpdGlvbkxvY2F0aW9uVmFsdWUoaXNjb25kaXRpb24sbG9jYXRpb24sIGNvbmRpdGlvblZhbHVlKXtcbiAgICBpZighaXNjb25kaXRpb24pe1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGlmKGxvY2F0aW9uLmxldmVsPT09MSl7XG4gICAgICBpZih0aGlzLmNhdGVnb3JpZXNbbG9jYXRpb24uY2F0ZWdvcnlJbmRleF0uZm9ybXNbbG9jYXRpb24uY3VycmVudEluZGV4XS50eXBlPT09J2NoZWNrYm94X211bHRpcGxlJyl7XG4gICAgICAgIGNvbnN0IGFycmF5PXRoaXMuY2F0ZWdvcmllc1tsb2NhdGlvbi5jYXRlZ29yeUluZGV4XS5mb3Jtc1tsb2NhdGlvbi5jdXJyZW50SW5kZXhdLmRlZmF1bHRWYWx1ZS5maWx0ZXIoKGNoZWNrKT0+Y2hlY2suY2hlY2tlZClcbiAgICAgICAgbGV0IGNoZWNrZWQ9ZmFsc2U7XG4gICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGlmIChhcnJheVtpXS52YWx1ZSA9PSBjb25kaXRpb25WYWx1ZSkge1xuICAgICAgICAgICAgICBjaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNoZWNrZWQ7XG4gICAgICB9ZWxzZXtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2F0ZWdvcmllc1tsb2NhdGlvbi5jYXRlZ29yeUluZGV4XS5mb3Jtc1tsb2NhdGlvbi5jdXJyZW50SW5kZXhdLnZhbHVlPT09Y29uZGl0aW9uVmFsdWVcbiAgICAgIH0gICAgIFxuICAgIH1lbHNlIGlmKGxvY2F0aW9uLmxldmVsPT09Mil7XG4gICAgICBpZih0aGlzLmNhdGVnb3JpZXNbbG9jYXRpb24uY2F0ZWdvcnlJbmRleF0uZm9ybXNbbG9jYXRpb24uZm9ybUluZGV4XS5mb3Jtc1tsb2NhdGlvbi5jdXJyZW50SW5kZXhdLnR5cGU9PT0nY2hlY2tib3hfbXVsdGlwbGUnKXtcbiAgICAgICAgY29uc3QgYXJyYXk9dGhpcy5jYXRlZ29yaWVzW2xvY2F0aW9uLmNhdGVnb3J5SW5kZXhdLmZvcm1zW2xvY2F0aW9uLmZvcm1JbmRleF0uZm9ybXNbbG9jYXRpb24uY3VycmVudEluZGV4XS5kZWZhdWx0VmFsdWUuZmlsdGVyKChjaGVjayk9PmNoZWNrLmNoZWNrZWQpXG4gICAgICAgIGxldCBjaGVja2VkPWZhbHNlO1xuICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBpZiAoYXJyYXlbaV0udmFsdWUgPT0gY29uZGl0aW9uVmFsdWUpIHtcbiAgICAgICAgICAgICAgY2hlY2tlZCA9IHRydWU7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjaGVja2VkO1xuICAgICAgfWVsc2V7XG4gICAgICAgIHJldHVybiB0aGlzLmNhdGVnb3JpZXNbbG9jYXRpb24uY2F0ZWdvcnlJbmRleF0uZm9ybXNbbG9jYXRpb24uZm9ybUluZGV4XS5mb3Jtc1tsb2NhdGlvbi5jdXJyZW50SW5kZXhdLnZhbHVlPT09Y29uZGl0aW9uVmFsdWVcbiAgICAgIH1cbiAgICB9ZWxzZSBpZihsb2NhdGlvbi5sZXZlbD09PTMpe1xuICAgICAgaWYodGhpcy5jYXRlZ29yaWVzW2xvY2F0aW9uLmNhdGVnb3J5SW5kZXhdLmZvcm1zW2xvY2F0aW9uLmZvcm1JbmRleF0uZm9ybXNbbG9jYXRpb24uc3ViSW5kZXhdLmZvcm1zW2xvY2F0aW9uLmN1cnJlbnRJbmRleF0udHlwZT09PSdjaGVja2JveF9tdWx0aXBsZScpe1xuICAgICAgICBjb25zdCBhcnJheT10aGlzLmNhdGVnb3JpZXNbbG9jYXRpb24uY2F0ZWdvcnlJbmRleF0uZm9ybXNbbG9jYXRpb24uZm9ybUluZGV4XS5mb3Jtc1tsb2NhdGlvbi5zdWJJbmRleF0uZm9ybXNbbG9jYXRpb24uY3VycmVudEluZGV4XS5kZWZhdWx0VmFsdWUuZmlsdGVyKChjaGVjayk9PmNoZWNrLmNoZWNrZWQpXG4gICAgICAgIGxldCBjaGVja2VkPWZhbHNlO1xuICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBpZiAoYXJyYXlbaV0udmFsdWUgPT0gY29uZGl0aW9uVmFsdWUpIHtcbiAgICAgICAgICAgICAgY2hlY2tlZCA9IHRydWU7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjaGVja2VkO1xuICAgICAgfWVsc2V7XG4gICAgICAgIHJldHVybiB0aGlzLmNhdGVnb3JpZXNbbG9jYXRpb24uY2F0ZWdvcnlJbmRleF0uZm9ybXNbbG9jYXRpb24uZm9ybUluZGV4XS5mb3Jtc1tsb2NhdGlvbi5zdWJJbmRleF0uZm9ybXNbbG9jYXRpb24uY3VycmVudEluZGV4XS52YWx1ZT09PWNvbmRpdGlvblZhbHVlXG4gICAgICB9XG4gICAgfWVsc2V7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cbiBcbiAgfVxuXG4gIGNoZWNrU3ViRm9ybShmb3Jtcyl7XG4gICAgbGV0IGhhc1N1YkZvcm09ZmFsc2U7XG4gICAgZm9yIChjb25zdCBmb3JtIG9mIGZvcm1zKSB7XG4gICAgICBpZihmb3JtLmZvcm1zICYmIGZvcm0uZm9ybXMubGVuZ3RoPjApe1xuICAgICAgICBoYXNTdWJGb3JtPXRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gaGFzU3ViRm9ybVxuICB9XG5cbiAgb25TZWxlY3RNZW51KGkpe1xuICAgIHRoaXMuc2VsZWN0ZWRNZW51PWk7XG4gICAgdGhpcy5zZWxlY3RlZENhdGVnb3J5SW5kZXg9aTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5zZWxlY3RlZENhdGVnb3J5SW5kZXg9bnVsbDtcbiAgICB9LCAyMDAwKTtcbiAgfVxuXG4gIG9uQ2hlY2tWYWx1ZShldmVudDpib29sZWFuKXtcbiAgICB0aGlzLmludmFsaWRlVmFsdWU9ZXZlbnQ7XG4gICAgXG4gIH1cblxufVxuIiwiPG1haW4+XG4gICAgPGRpdiBjbGFzcz1cImNvbnRlbnRcIj5cbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cInNob3dNb2RlXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2F0ZWdvcnlcIiAqbmdJZj1cImlzU2VsZWN0ZWRcIj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzaWRlLWJhclwiPlxuICAgICAgICAgICAgICAgICAgICA8IS0tPGRpdiBjbGFzcz1cInN1bW1hcnlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzcz1cInRlbXBsYXRlLXRpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3tjdXJyZW50VGVtcGxhdGU/Lk5hbWV9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJsaS10aXRsZVwiICpuZ0Zvcj1cImxldCBjYXQgb2YgY2F0ZWdvcmllczsgIGxldCBpPWluZGV4XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2NsYXNzXT1cInNlbGVjdGVkTWVudT09PWkgPydhY3RpdmUnOicnXCIgKGNsaWNrKT1cIm9uU2VsZWN0TWVudShpKVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIFtuZ3hTY3JvbGxUb109XCInIycrY2F0Lm5hbWVcIj57e2NhdC5uYW1lfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bWF0LWljb24gKm5nSWY9XCJjaGVja1N1YkZvcm0oY2F0LmZvcm1zKVwiPmtleWJvYXJkX2Fycm93X3JpZ2h0PC9tYXQtaWNvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L29sPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj4tLT5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiAoY2xpY2spPVwic2hvd01vZGUgPSBmYWxzZVwiIG1hdC1idXR0b24gY2xhc3M9XCJyZWdpc3Rlci1idXR0b25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIE1vZGlmaWVyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZHNcIiBzdHlsZT1cImhlaWdodDogODV2aDsgbWFyZ2luLWxlZnQ6IDIwcHg7IHdpZHRoOiA4NSU7XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJleGFtcGxlLWxpc3QgbXQtMjBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXRlZ29yeS1pdGVtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAqbmdGb3I9XCJsZXQgY2F0ZWdvcnkgb2YgY3VycmVudE9uYm9hcmRpbmcudmlldyB8IGtleXZhbHVlOyBsZXQgaT1pbmRleDsgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbaWRdPVwiY2F0ZWdvcnkubmFtZVwiPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpZWxkLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpZWxkLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzcz1cImNhdGVnb3J5LW5hbWVcIj57e2NhdGVnb3J5LmtleX19PC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpZWxkLWNhdGVnb3J5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKm5nRm9yPVwibGV0IGZpZWxkIG9mIGNhdGVnb3J5LnZhbHVlIHwga2V5dmFsdWU7bGV0IGo9aW5kZXhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbaWRdPVwiZmllbGQua2V5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbm5lci1sb29wXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmllbGRzLWNvbnRlbnRcIj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZHMtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+e3tmaWVsZC5rZXl9fTwvc3Ryb25nPiA8YnI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFpc09iamVjdChmaWVsZC52YWx1ZSlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7ZmllbGQudmFsdWV9fSA8YnI+IDxicj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImlzT2JqZWN0KGZpZWxkLnZhbHVlKVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgc3ViZiBvZiBmaWVsZC52YWx1ZSB8IGtleXZhbHVlXCI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIWlzT2JqZWN0KHN1YmYudmFsdWUpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e3N1YmYua2V5fX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdHJvbmc+IDxicj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3tzdWJmLnZhbHVlfX0gPGJyPiA8YnI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiaXNPYmplY3Qoc3ViZi52YWx1ZSlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKm5nRm9yPVwibGV0IHN1YmZzdWIgb2Ygc3ViZi52YWx1ZSB8IGtleXZhbHVlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7c3ViZnN1Yi5rZXl9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdHJvbmc+IDxicj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3tzdWJmc3ViLnZhbHVlfX0gPGJyPjxicj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS08bGliLXN1Yi1jcmVhdGUtb25ib2FyZGluZyBbZmllbGRdPVwiZmllbGRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2xlbmd0aF09XCJjYXRlZ29yeT8uZm9ybXM/Lmxlbmd0aFwiIFtpXT1cImlcIiBbal09XCJqXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChvbkRyb3ApPVwiZHJvcCgkZXZlbnQpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2hpbGRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5uZXItY2hpbGRcIiAqbmdJZj1cImZpZWxkLmZvcm1zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbm5lci1jaGlsZC1jb250ZW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICpuZ0Zvcj1cImxldCBjaGlsZCBvZiBmaWVsZC5mb3JtcztsZXQgaz1pbmRleFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbaWRdPVwiY2hpbGQua2V5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5uZXItbG9vcFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJjaGlsZC5leHBhbmRPbmJvYXJkaW5nICYmIG9uQ2hlY2tDb25kaXRpb25Mb2NhdGlvblZhbHVlKGNoaWxkLmlzQ29uZGl0aW9uYWwsY2hpbGQuY29uZGl0aW9uTG9jYXRpb24sY2hpbGQuY29uZGl0aW9uVmFsdWUpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpZWxkcy1jb250ZW50XCI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpZWxkcy1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaWItc3ViLWNyZWF0ZS1vbmJvYXJkaW5nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2ZpZWxkXT1cImNoaWxkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbbGVuZ3RoXT1cImZpZWxkPy5mb3Jtcz8ubGVuZ3RoXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbaV09XCJqXCIgW2pdPVwia1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKG9uRHJvcCk9XCJkcm9wKCRldmVudClcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2hpbGRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlubmVyLWNoaWxkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICpuZ0lmPVwiY2hpbGQuZm9ybXNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbm5lci1jaGlsZC1jb250ZW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqbmdGb3I9XCJsZXQgYzIgb2YgY2hpbGQuZm9ybXM7bGV0IGw9aW5kZXhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtpZF09XCJjMi5rZXlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5uZXItbG9vcFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICpuZ0lmPVwiYzIuZXhwYW5kT25ib2FyZGluZyAmJiBvbkNoZWNrQ29uZGl0aW9uTG9jYXRpb25WYWx1ZShjMi5pc0NvbmRpdGlvbmFsLGMyLmNvbmRpdGlvbkxvY2F0aW9uLGMyLmNvbmRpdGlvblZhbHVlKVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZpZWxkcy1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmaWVsZHMtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpYi1zdWItY3JlYXRlLW9uYm9hcmRpbmdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2ZpZWxkXT1cImMyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2xlbmd0aF09XCJjaGlsZD8uZm9ybXM/Lmxlbmd0aFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtpXT1cImtcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbal09XCJsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKG9uRHJvcCk9XCJkcm9wKCRldmVudClcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJjaGlsZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpYi1zdWItY3JlYXRlLW9uYm9hcmRpbmc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpYi1zdWItY3JlYXRlLW9uYm9hcmRpbmc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGliLXN1Yi1jcmVhdGUtb25ib2FyZGluZz4tLT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgICAgICA8Zm9ybSBbbmdTdHlsZV09XCJzaG93TW9kZSAmJiB7J2Rpc3BsYXknOiAnbm9uZSd9XCIgW2Zvcm1Hcm91cF09XCJmb3JtXCIgKHN1Ym1pdCk9XCJvblN1Ym1pdCgpXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2VsZWN0LWNvbnRhY3RcIiAqbmdJZj1cIiFpc1NlbGVjdGVkXCI+XG4gICAgICAgICAgICAgICAgPGgzPlxuICAgICAgICAgICAgICAgICAgICBPbmJvYXJkaW5nIGRlIHZvdHJlIG5vdXZlYXUgY29sbGFib3JhdGV1clxuICAgICAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICAgICAgPHA+U8OpbGVjdGlvbm5leiBsZSBub20gZGUgdm90cmUgcHJvZmlsIGFmaW4gZGUgcG91dm9pciBkw6ltYXJyZXIgc29uIG9uYm9hcmRpbmcuPC9wPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZWxlY3QtdGVtcGxhdGVcIj5cbiAgICAgICAgICAgICAgICAgICAgPG1hdC1mb3JtLWZpZWxkIGNsYXNzPVwiZnVsbC13aWR0aFwiIGFwcGVhcmFuY2U9XCJvdXRsaW5lXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bWF0LWxhYmVsPlByb2ZpbDwvbWF0LWxhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG1hdC1zZWxlY3QgZm9ybUNvbnRyb2xOYW1lPVwiVGVtcGxhdGVJZFwiIHJlcXVpcmVkIChzZWxlY3Rpb25DaGFuZ2UpPVwib25TZWxlY3QoJGV2ZW50LnZhbHVlKVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxtYXQtb3B0aW9uICpuZ0Zvcj1cImxldCB0ZW1wbGF0ZSBvZiB0ZW1wbGF0ZXNcIiBbdmFsdWVdPVwidGVtcGxhdGUuX2lkXCI+e3t0ZW1wbGF0ZS5OYW1lfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L21hdC1vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L21hdC1zZWxlY3Q+XG4gICAgICAgICAgICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gW3N0eWxlLm9wYWNpdHldPVwiZm9ybS5nZXQoJ1RlbXBsYXRlSWQnKT8udmFsdWU9PScnID8gMC40IDogMVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBbZGlzYWJsZWRdPVwiZm9ybS5nZXQoJ1RlbXBsYXRlSWQnKT8udmFsdWU9PScnXCIgbWF0LXJhaXNlZC1idXR0b24gY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIChjbGljayk9J29uU2VsZWN0Q29udGFjdFRlbXBsYXRlKCknPlxuICAgICAgICAgICAgICAgICAgICAgICAge3tpZCAmJiBpZCAhPT0gXCIwXCIgPyAnTW9kaWZpZXIgbOKAmW9uYm9hcmRpbmcnIDonRMOpbWFycmVyIGzigJlvbmJvYXJkaW5nJ319XG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2F0ZWdvcnlcIiAqbmdJZj1cImlzU2VsZWN0ZWRcIj5cbiAgICAgICAgICAgICAgICA8IS0tIDxkaXYgY2xhc3M9XCJjYXRlZ29yeVwiPiAtLT5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzaWRlLWJhclwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3VtbWFyeVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzPVwidGVtcGxhdGUtdGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj4ge3tjdXJyZW50VGVtcGxhdGU/Lk5hbWV9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b2w+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwibGktdGl0bGVcIiAqbmdGb3I9XCJsZXQgY2F0IG9mIGNhdGVnb3JpZXM7ICBsZXQgaT1pbmRleFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtjbGFzc109XCJzZWxlY3RlZE1lbnU9PT1pID8nYWN0aXZlJzonJ1wiIChjbGljayk9XCJvblNlbGVjdE1lbnUoaSlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBbbmd4U2Nyb2xsVG9dPVwiJyMnK2NhdC5uYW1lXCI+e3tjYXQubmFtZX19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG1hdC1pY29uICpuZ0lmPVwiY2hlY2tTdWJGb3JtKGNhdC5mb3JtcylcIj5rZXlib2FyZF9hcnJvd19yaWdodDwvbWF0LWljb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9vbD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gbWF0LWJ1dHRvbiBbZGlzYWJsZWRdPVwibG9hZGluZyB8fCBpbnZhbGlkZVZhbHVlXCIgY2xhc3M9XCJyZWdpc3Rlci1idXR0b25cIiB0eXBlPVwic3VibWl0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwibG9hZGluZ1wiPlNvdW1pc3Npb24gZW4gY291cnMuLi48L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhbG9hZGluZ1wiPiBTb3VtZXR0cmUgbWEgZmljaGUgZGUgcG9zdGU8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpZWxkc1wiIHN0eWxlPVwiaGVpZ2h0OiA4NXZoO1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXhhbXBsZS1saXN0IG10LTIwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2F0ZWdvcnktaXRlbSBjb250ZW50LWl0ZW1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtjbGFzc109XCJpPT09c2VsZWN0ZWRDYXRlZ29yeUluZGV4ID8gJ2FjdGl2ZS1jb250ZW50JzonJ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKm5nRm9yPVwibGV0IGNhdGVnb3J5IG9mIGNhdGVnb3JpZXM7ICBsZXQgaT1pbmRleFwiIFtpZF09XCJjYXRlZ29yeS5uYW1lXCI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmllbGQtY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmllbGQtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzPVwiY2F0ZWdvcnktbmFtZVwiPnt7Y2F0ZWdvcnkubmFtZX19PC9oND5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG1hdC1zZWxlY3QgcGxhY2Vob2xkZXI9XCJDb21wYW55XCIgWyhuZ01vZGVsKV09XCJjYXRlZ29yeS5zZWxlY3Rvci52YWx1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW25nTW9kZWxPcHRpb25zXT1cIntzdGFuZGFsb25lOiB0cnVlfVwiIHJlcXVpcmVkICpuZ0lmPVwiY2F0ZWdvcnkuc2VsZWN0b3JcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPVwid2lkdGg6IDE1MHB4O1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxtYXQtb3B0aW9uICpuZ0Zvcj1cImxldCBzZWxlY3Qgb2YgY2F0ZWdvcnkuc2VsZWN0b3IuZGVmYXVsdFZhbHVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3ZhbHVlXT1cInNlbGVjdC52YWx1ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e3NlbGVjdC52YWx1ZX19PC9tYXQtb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9tYXQtc2VsZWN0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhdGVnb3J5LWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmllbGQtY2F0ZWdvcnlcIiAqbmdGb3I9XCJsZXQgZmllbGQgb2YgY2F0ZWdvcnkuZm9ybXM7bGV0IGo9aW5kZXhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbaWRdPVwiZmllbGQua2V5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbm5lci1sb29wXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICpuZ0lmPVwiZmllbGQuZXhwYW5kT25ib2FyZGluZyAmJiBvbkNoZWNrQ29uZGl0aW9uTG9jYXRpb25WYWx1ZShmaWVsZC5pc0NvbmRpdGlvbmFsLGZpZWxkLmNvbmRpdGlvbkxvY2F0aW9uLGZpZWxkLmNvbmRpdGlvblZhbHVlKVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpZWxkcy1jb250ZW50XCI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmllbGRzLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGliLXN1Yi1jcmVhdGUtb25ib2FyZGluZyBbZmllbGRdPVwiZmllbGRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2xlbmd0aF09XCJjYXRlZ29yeT8uZm9ybXM/Lmxlbmd0aFwiIFtpXT1cImlcIiBbal09XCJqXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChvbkRyb3ApPVwiZHJvcCgkZXZlbnQpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChvbkNoZWNrVmFsdWUpPVwib25DaGVja1ZhbHVlKCRldmVudClcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjaGlsZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbm5lci1jaGlsZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICpuZ0lmPVwiZmllbGQuZm9ybXMgJiYgZmllbGQudmFsdWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlubmVyLWNoaWxkLWNvbnRlbnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKm5nRm9yPVwibGV0IGNoaWxkIG9mIGZpZWxkLmZvcm1zO2xldCBrPWluZGV4XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtpZF09XCJjaGlsZC5rZXlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbm5lci1sb29wXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqbmdJZj1cImNoaWxkLmV4cGFuZE9uYm9hcmRpbmcgJiYgb25DaGVja0NvbmRpdGlvbkxvY2F0aW9uVmFsdWUoY2hpbGQuaXNDb25kaXRpb25hbCxjaGlsZC5jb25kaXRpb25Mb2NhdGlvbixjaGlsZC5jb25kaXRpb25WYWx1ZSlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmllbGRzLWNvbnRlbnRcIj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmllbGRzLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpYi1zdWItY3JlYXRlLW9uYm9hcmRpbmdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbZmllbGRdPVwiY2hpbGRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtsZW5ndGhdPVwiZmllbGQ/LmZvcm1zPy5sZW5ndGhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtpXT1cImpcIiBbal09XCJrXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAob25Ecm9wKT1cImRyb3AoJGV2ZW50KVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKG9uQ2hlY2tWYWx1ZSk9XCJvbkNoZWNrVmFsdWUoJGV2ZW50KVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjaGlsZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5uZXItY2hpbGRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJjaGlsZC5mb3JtcyAmJiBjaGlsZC52YWx1ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlubmVyLWNoaWxkLWNvbnRlbnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICpuZ0Zvcj1cImxldCBjMiBvZiBjaGlsZC5mb3JtcztsZXQgbD1pbmRleFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2lkXT1cImMyLmtleVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbm5lci1sb29wXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJjMi5leHBhbmRPbmJvYXJkaW5nICYmIG9uQ2hlY2tDb25kaXRpb25Mb2NhdGlvblZhbHVlKGMyLmlzQ29uZGl0aW9uYWwsYzIuY29uZGl0aW9uTG9jYXRpb24sYzIuY29uZGl0aW9uVmFsdWUpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZmllbGRzLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZpZWxkcy1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGliLXN1Yi1jcmVhdGUtb25ib2FyZGluZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbZmllbGRdPVwiYzJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbbGVuZ3RoXT1cImNoaWxkPy5mb3Jtcz8ubGVuZ3RoXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2ldPVwia1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtqXT1cImxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAob25Ecm9wKT1cImRyb3AoJGV2ZW50KVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChvbkNoZWNrVmFsdWUpPVwib25DaGVja1ZhbHVlKCRldmVudClcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJjaGlsZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpYi1zdWItY3JlYXRlLW9uYm9hcmRpbmc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpYi1zdWItY3JlYXRlLW9uYm9hcmRpbmc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGliLXN1Yi1jcmVhdGUtb25ib2FyZGluZz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Zvcm0+XG4gICAgPC9kaXY+XG5cbjwvbWFpbj4iXX0=