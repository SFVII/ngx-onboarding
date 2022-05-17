import { __assign, __awaiter, __generator, __values } from "tslib";
import { Component, HostListener } from '@angular/core';
import { Validators } from "@angular/forms";
import { ExitConfirmComponent } from '../../components/exit-confirm/exit-confirm.component';
import { fieldWidth } from "../../utils/utils";
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "../../onboarding.service";
import * as i3 from "@angular/router";
import * as i4 from "@angular/material/dialog";
import * as i5 from "@angular/common";
import * as i6 from "@angular/material/icon";
import * as i7 from "@angular/material/button";
import * as i8 from "@nicky-lenaers/ngx-scroll-to";
import * as i9 from "@angular/material/select";
import * as i10 from "ngx-intl-tel-input";
import * as i11 from "@angular/material/core";
import * as i12 from "../../components/onboarding/sub-onboarding-create/sub-onboarding-create.component";
import * as i13 from "../../components/onboarding/onboarding-detail/onboarding-detail.component";
function OnboardingCreateComponent_form_2_li_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li", 15);
    i0.ɵɵelementStart(1, "a");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var category_r841 = ctx.$implicit;
    i0.ɵɵproperty("ngxScrollTo", "#" + category_r841.name)("id", category_r841.name + "x");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(category_r841.name);
} }
function OnboardingCreateComponent_form_2_section_13_mat_select_8_mat_option_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 27);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var select_r849 = ctx.$implicit;
    i0.ɵɵproperty("value", select_r849.value);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", select_r849.value, "");
} }
var _c0 = function () { return { standalone: true }; };
function OnboardingCreateComponent_form_2_section_13_mat_select_8_Template(rf, ctx) { if (rf & 1) {
    var _r852 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-select", 25);
    i0.ɵɵlistener("ngModelChange", function OnboardingCreateComponent_form_2_section_13_mat_select_8_Template_mat_select_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r852); var category_r843 = i0.ɵɵnextContext().$implicit; return category_r843.selector.value = $event; });
    i0.ɵɵtemplate(1, OnboardingCreateComponent_form_2_section_13_mat_select_8_mat_option_1_Template, 2, 2, "mat-option", 26);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var category_r843 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("ngModel", category_r843.selector.value)("ngModelOptions", i0.ɵɵpureFunction0(3, _c0));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", category_r843.selector.defaultValue);
} }
function OnboardingCreateComponent_form_2_section_13_mat_select_9_mat_option_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 27);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var select_r855 = ctx.$implicit;
    i0.ɵɵproperty("value", select_r855.key);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", select_r855.value, "");
} }
function OnboardingCreateComponent_form_2_section_13_mat_select_9_Template(rf, ctx) { if (rf & 1) {
    var _r858 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-select", 28);
    i0.ɵɵlistener("ngModelChange", function OnboardingCreateComponent_form_2_section_13_mat_select_9_Template_mat_select_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r858); var category_r843 = i0.ɵɵnextContext().$implicit; return category_r843.ticketType.value = $event; });
    i0.ɵɵtemplate(1, OnboardingCreateComponent_form_2_section_13_mat_select_9_mat_option_1_Template, 2, 2, "mat-option", 26);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var category_r843 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("ngModel", category_r843.ticketType.value)("ngModelOptions", i0.ɵɵpureFunction0(3, _c0));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", category_r843.ticketType.defaultValue);
} }
function OnboardingCreateComponent_form_2_section_13_div_11_div_1_div_5_div_1_div_1_div_5_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    var _r874 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 31);
    i0.ɵɵelementStart(1, "div", 32);
    i0.ɵɵelementStart(2, "div", 33);
    i0.ɵɵelementStart(3, "lib-sub-create-onboarding", 40);
    i0.ɵɵlistener("onCheckValue", function OnboardingCreateComponent_form_2_section_13_div_11_div_1_div_5_div_1_div_1_div_5_div_1_div_1_Template_lib_sub_create_onboarding_onCheckValue_3_listener($event) { i0.ɵɵrestoreView(_r874); var ctx_r873 = i0.ɵɵnextContext(10); return ctx_r873.onCheckValue($event); });
    i0.ɵɵelement(4, "div", 35);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r875 = i0.ɵɵnextContext();
    var c2_r870 = ctx_r875.$implicit;
    var l_r871 = ctx_r875.index;
    var ctx_r876 = i0.ɵɵnextContext(3);
    var child_r865 = ctx_r876.$implicit;
    var k_r866 = ctx_r876.index;
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("field", c2_r870)("length", child_r865 == null ? null : child_r865.forms == null ? null : child_r865.forms.length)("i", k_r866)("j", l_r871);
} }
function OnboardingCreateComponent_form_2_section_13_div_11_div_1_div_5_div_1_div_1_div_5_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 39);
    i0.ɵɵtemplate(1, OnboardingCreateComponent_form_2_section_13_div_11_div_1_div_5_div_1_div_1_div_5_div_1_div_1_Template, 5, 4, "div", 30);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var c2_r870 = ctx.$implicit;
    var l_r871 = ctx.index;
    var child_r865 = i0.ɵɵnextContext(3).$implicit;
    var ctx_r869 = i0.ɵɵnextContext(6);
    i0.ɵɵstyleProp("width", c2_r870.forms ? "100%" : ctx_r869.fieldWidth(c2_r870.type, child_r865.forms.length, l_r871));
    i0.ɵɵproperty("id", c2_r870.key);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", c2_r870.expandOnboarding && ctx_r869.onCheckConditionLocationValue(c2_r870.isConditional, c2_r870.conditionLocation, c2_r870.conditionValue));
} }
function OnboardingCreateComponent_form_2_section_13_div_11_div_1_div_5_div_1_div_1_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 37);
    i0.ɵɵtemplate(1, OnboardingCreateComponent_form_2_section_13_div_11_div_1_div_5_div_1_div_1_div_5_div_1_Template, 2, 4, "div", 38);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var child_r865 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", child_r865.forms);
} }
function OnboardingCreateComponent_form_2_section_13_div_11_div_1_div_5_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    var _r880 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 31);
    i0.ɵɵelementStart(1, "div", 32);
    i0.ɵɵelementStart(2, "div", 33);
    i0.ɵɵelementStart(3, "lib-sub-create-onboarding", 40);
    i0.ɵɵlistener("onCheckValue", function OnboardingCreateComponent_form_2_section_13_div_11_div_1_div_5_div_1_div_1_Template_lib_sub_create_onboarding_onCheckValue_3_listener($event) { i0.ɵɵrestoreView(_r880); var ctx_r879 = i0.ɵɵnextContext(7); return ctx_r879.onCheckValue($event); });
    i0.ɵɵelementStart(4, "div", 35);
    i0.ɵɵtemplate(5, OnboardingCreateComponent_form_2_section_13_div_11_div_1_div_5_div_1_div_1_div_5_Template, 2, 1, "div", 36);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r881 = i0.ɵɵnextContext();
    var child_r865 = ctx_r881.$implicit;
    var k_r866 = ctx_r881.index;
    var ctx_r882 = i0.ɵɵnextContext(3);
    var field_r860 = ctx_r882.$implicit;
    var j_r861 = ctx_r882.index;
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("field", child_r865)("length", field_r860 == null ? null : field_r860.forms == null ? null : field_r860.forms.length)("i", j_r861)("j", k_r866);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", child_r865.forms && child_r865.value);
} }
function OnboardingCreateComponent_form_2_section_13_div_11_div_1_div_5_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 39);
    i0.ɵɵtemplate(1, OnboardingCreateComponent_form_2_section_13_div_11_div_1_div_5_div_1_div_1_Template, 6, 5, "div", 30);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var child_r865 = ctx.$implicit;
    var k_r866 = ctx.index;
    var field_r860 = i0.ɵɵnextContext(3).$implicit;
    var ctx_r864 = i0.ɵɵnextContext(3);
    i0.ɵɵstyleProp("width", child_r865.forms ? "100%" : ctx_r864.fieldWidth(child_r865.type, field_r860.forms.length, k_r866));
    i0.ɵɵproperty("id", child_r865.key);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", child_r865.expandOnboarding && ctx_r864.onCheckConditionLocationValue(child_r865.isConditional, child_r865.conditionLocation, child_r865.conditionValue));
} }
function OnboardingCreateComponent_form_2_section_13_div_11_div_1_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 37);
    i0.ɵɵtemplate(1, OnboardingCreateComponent_form_2_section_13_div_11_div_1_div_5_div_1_Template, 2, 4, "div", 38);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var field_r860 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", field_r860.forms);
} }
function OnboardingCreateComponent_form_2_section_13_div_11_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 31);
    i0.ɵɵelementStart(1, "div", 32);
    i0.ɵɵelementStart(2, "div", 33);
    i0.ɵɵelementStart(3, "lib-sub-create-onboarding", 34);
    i0.ɵɵelementStart(4, "div", 35);
    i0.ɵɵtemplate(5, OnboardingCreateComponent_form_2_section_13_div_11_div_1_div_5_Template, 2, 1, "div", 36);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r885 = i0.ɵɵnextContext();
    var field_r860 = ctx_r885.$implicit;
    var j_r861 = ctx_r885.index;
    var ctx_r886 = i0.ɵɵnextContext();
    var category_r843 = ctx_r886.$implicit;
    var i_r844 = ctx_r886.index;
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("field", field_r860)("length", category_r843 == null ? null : category_r843.forms == null ? null : category_r843.forms.length)("i", i_r844)("j", j_r861);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", field_r860.forms && field_r860.value);
} }
function OnboardingCreateComponent_form_2_section_13_div_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 29);
    i0.ɵɵtemplate(1, OnboardingCreateComponent_form_2_section_13_div_11_div_1_Template, 6, 5, "div", 30);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var field_r860 = ctx.$implicit;
    var j_r861 = ctx.index;
    var category_r843 = i0.ɵɵnextContext().$implicit;
    var ctx_r847 = i0.ɵɵnextContext(2);
    i0.ɵɵstyleProp("width", field_r860.forms ? "100%" : ctx_r847.fieldWidth(field_r860.type, category_r843.forms.length, j_r861));
    i0.ɵɵproperty("id", field_r860.key);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", field_r860.expandOnboarding && ctx_r847.onCheckConditionLocationValue(field_r860.isConditional, field_r860.conditionLocation, field_r860.conditionValue));
} }
function OnboardingCreateComponent_form_2_section_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 16);
    i0.ɵɵelementStart(1, "div", 17);
    i0.ɵɵelementStart(2, "div", 18);
    i0.ɵɵelementStart(3, "div", 19);
    i0.ɵɵelementStart(4, "h4", 20);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "p");
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(8, OnboardingCreateComponent_form_2_section_13_mat_select_8_Template, 2, 4, "mat-select", 21);
    i0.ɵɵtemplate(9, OnboardingCreateComponent_form_2_section_13_mat_select_9_Template, 2, 4, "mat-select", 22);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "div", 23);
    i0.ɵɵtemplate(11, OnboardingCreateComponent_form_2_section_13_div_11_Template, 2, 4, "div", 24);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var category_r843 = ctx.$implicit;
    var ctx_r840 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("id", category_r843.name);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(category_r843.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" Listes des informations n\u00E9cessaires pour la cr\u00E9ation de ", ctx_r840.catNameStart(category_r843.name) ? "l'" + category_r843.name : category_r843.name, " ");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", category_r843.selector);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", (category_r843.ticketType == null ? null : category_r843.ticketType.value) && category_r843.selector.value === "Nowteam");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", category_r843.forms);
} }
function OnboardingCreateComponent_form_2_Template(rf, ctx) { if (rf & 1) {
    var _r889 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "form", 3);
    i0.ɵɵlistener("submit", function OnboardingCreateComponent_form_2_Template_form_submit_0_listener() { i0.ɵɵrestoreView(_r889); var ctx_r888 = i0.ɵɵnextContext(); return ctx_r888.onSubmit(); });
    i0.ɵɵelementStart(1, "div", 4);
    i0.ɵɵelementStart(2, "div", 5);
    i0.ɵɵelementStart(3, "h2");
    i0.ɵɵtext(4);
    i0.ɵɵelementStart(5, "mat-icon", 6);
    i0.ɵɵlistener("click", function OnboardingCreateComponent_form_2_Template_mat_icon_click_5_listener() { i0.ɵɵrestoreView(_r889); var ctx_r890 = i0.ɵɵnextContext(); return ctx_r890.onShowMode(); });
    i0.ɵɵtext(6, "visibility");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "button", 7);
    i0.ɵɵlistener("click", function OnboardingCreateComponent_form_2_Template_button_click_7_listener() { i0.ɵɵrestoreView(_r889); var ctx_r891 = i0.ɵɵnextContext(); return ctx_r891.onResumeLater(); });
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "div", 8);
    i0.ɵɵelementStart(10, "ul");
    i0.ɵɵtemplate(11, OnboardingCreateComponent_form_2_li_11_Template, 3, 3, "li", 9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "div", 10);
    i0.ɵɵlistener("scroll", function OnboardingCreateComponent_form_2_Template_div_scroll_12_listener($event) { i0.ɵɵrestoreView(_r889); var ctx_r892 = i0.ɵɵnextContext(); return ctx_r892.onScroll($event); });
    i0.ɵɵtemplate(13, OnboardingCreateComponent_form_2_section_13_Template, 12, 6, "section", 11);
    i0.ɵɵelementStart(14, "div", 12);
    i0.ɵɵelementStart(15, "button", 13);
    i0.ɵɵtext(16);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "button", 14);
    i0.ɵɵlistener("click", function OnboardingCreateComponent_form_2_Template_button_click_17_listener() { i0.ɵɵrestoreView(_r889); var ctx_r893 = i0.ɵɵnextContext(); return ctx_r893.onResumeLater(); });
    i0.ɵɵtext(18);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r837 = i0.ɵɵnextContext();
    i0.ɵɵproperty("formGroup", ctx_r837.form);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1("Int\u00E9gration profil ", ctx_r837.currentTemplate == null ? null : ctx_r837.currentTemplate.Name, " ");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("disabled", ctx_r837.loading);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r837.resumeLabel);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", ctx_r837.categories);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r837.categories);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("disabled", ctx_r837.loading || !ctx_r837.form.valid);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r837.submitLabel);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("disabled", ctx_r837.loading);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r837.resumeLabel);
} }
function OnboardingCreateComponent_lib_onboarding_detail_3_Template(rf, ctx) { if (rf & 1) {
    var _r895 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "lib-onboarding-detail", 41);
    i0.ɵɵlistener("onShowMode", function OnboardingCreateComponent_lib_onboarding_detail_3_Template_lib_onboarding_detail_onShowMode_0_listener() { i0.ɵɵrestoreView(_r895); var ctx_r894 = i0.ɵɵnextContext(); return ctx_r894.onShowMode(); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r838 = i0.ɵɵnextContext();
    i0.ɵɵproperty("detailView", ctx_r838.detailView);
} }
var OnboardingCreateComponent = /** @class */ (function () {
    function OnboardingCreateComponent(fb, service, route, router, dialog) {
        var _this = this;
        this.fb = fb;
        this.service = service;
        this.route = route;
        this.router = router;
        this.dialog = dialog;
        this.currentProfil = {};
        this.canExit = true;
        this.tags = [];
        this.onboardingId = "0";
        this.templateId = "0";
        this.parent = [];
        this.selectedMenu = 0;
        this.showMode = false;
        this.selectedCategoryIndex = null;
        this.loading = false;
        this.fieldWidth = fieldWidth;
        this.submitLabel = 'Envoyer ma fiche';
        this.resumeLabel = 'Reprendre plus tard';
        this.service._currentOnboarding.subscribe(function (onboarding) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.onCreateDynamicForm();
                        this.isSelected = true;
                        if (!onboarding) return [3 /*break*/, 2];
                        this.form.patchValue({
                            TemplateId: onboarding.TemplateId
                        });
                        return [4 /*yield*/, this.onSelect(onboarding.TemplateId, onboarding)];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 2:
                        this.templateId = this.route.snapshot.paramMap.get("templateId");
                        this.form.patchValue({
                            TemplateId: this.templateId
                        });
                        return [4 /*yield*/, this.onSelect(this.templateId, null)];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        }); });
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
    OnboardingCreateComponent.prototype.onScroll = function (event) {
        var sections = document.querySelectorAll("section");
        var navLi = document.querySelectorAll(".fields ul li");
        var current = "";
        sections.forEach(function (section) {
            var sectionTop = section.offsetTop;
            if (event.target.scrollTop > sectionTop - 200) {
                current = section.getAttribute("id");
            }
        });
        navLi.forEach(function (li) {
            var id = li.getAttribute('id');
            if (id.substring(0, id.length - 1) === current) {
                li.classList.add("active");
            }
            else {
                li.classList.remove('active');
            }
        });
    };
    OnboardingCreateComponent.prototype.ngOnInit = function () {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        this.templateId = this.route.snapshot.paramMap.get("templateId");
                        this.onboardingId = this.route.snapshot.paramMap.get("onboardingId");
                        if (!(this.onboardingId && this.onboardingId !== "0")) return [3 /*break*/, 2];
                        this.showMode = true;
                        _b = this;
                        return [4 /*yield*/, this.service.getOnboarding(this.onboardingId)];
                    case 1:
                        _b.currentOnboarding = _c.sent();
                        this.form.patchValue(this.currentOnboarding);
                        this.categories = this.currentOnboarding.categories;
                        this.onLoadViewDetail(this.categories);
                        this.currentTemplate = (_a = this.currentOnboarding) === null || _a === void 0 ? void 0 : _a.vtemplates[0];
                        if (this.currentOnboarding.TemplateId) {
                            this.isSelected = true;
                        }
                        _c.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    OnboardingCreateComponent.prototype.onLoadViewDetail = function (categories) {
        var _a, _b, _c, _d, _e;
        var user = {};
        var categoriesView = categories.map(function (category) {
            var name = category.name, expandOnboarding = category.expandOnboarding;
            var categoryForm = [];
            var fieldCompleted = 0;
            var fieldLength = 0;
            if (category.forms) {
                categoryForm = category.forms.map(function (form) {
                    var _a, _b;
                    if (form.isMandatory) {
                        fieldLength += 1;
                    }
                    if (form.isMandatory && !!form.value) {
                        fieldCompleted += 1;
                    }
                    var newsubforms = {
                        label: form.label,
                        value: form.type !== "tel" ? form.value : ((_b = (_a = form) === null || _a === void 0 ? void 0 : _a.value) === null || _b === void 0 ? void 0 : _b.internationalNumber) || '',
                        key: form.key
                    };
                    if (category.name === "Utilisateur") {
                        user[form.key] = form.value;
                    }
                    var subForm = [];
                    if (form.forms) {
                        subForm = form.forms.map(function (subForm) {
                            var _a, _b;
                            if (subForm.isMandatory) {
                                fieldLength += 1;
                            }
                            if (subForm.isMandatory && !!subForm.value) {
                                fieldCompleted += 1;
                            }
                            var childforms = {
                                label: subForm.label,
                                value: subForm.type !== "tel" ? subForm.value : ((_b = (_a = subForm) === null || _a === void 0 ? void 0 : _a.value) === null || _b === void 0 ? void 0 : _b.internationalNumber) || '',
                                key: subForm.key
                            };
                            var child2 = [];
                            if (subForm.forms) {
                                child2 = subForm.forms.map(function (c2) {
                                    var _a, _b;
                                    if (c2.isMandatory) {
                                        fieldLength += 1;
                                    }
                                    if (c2.isMandatory && !!c2.value) {
                                        fieldCompleted += 1;
                                    }
                                    return {
                                        label: c2.label,
                                        value: c2.type !== "tel" ? c2.value : ((_b = (_a = c2) === null || _a === void 0 ? void 0 : _a.value) === null || _b === void 0 ? void 0 : _b.internationalNumber) || '',
                                        key: c2.key
                                    };
                                });
                                return __assign(__assign({}, childforms), { expandOnboarding: subForm.expandOnboarding, forms: child2, key: form.key });
                            }
                            else {
                                return childforms;
                            }
                        });
                        return __assign(__assign({}, newsubforms), { expandOnboarding: form.expandOnboarding, forms: subForm, key: form.key });
                    }
                    else {
                        return newsubforms;
                    }
                });
            }
            return {
                name: name, expandOnboarding: expandOnboarding,
                forms: categoryForm,
                key: category.key,
                fieldCompleted: fieldCompleted,
                fieldLength: fieldLength
            };
        });
        this.detailView = {
            categories: categoriesView,
            // view: this.currentOnboarding.view,
            tickets: (_a = this.currentOnboarding) === null || _a === void 0 ? void 0 : _a.vtickets,
            createdAt: ((_b = this.currentOnboarding) === null || _b === void 0 ? void 0 : _b.createdAt) || new Date().toISOString(),
            user: user,
            Name: ((_d = (_c = this.currentOnboarding) === null || _c === void 0 ? void 0 : _c.vtemplates[0]) === null || _d === void 0 ? void 0 : _d.Name) || ((_e = this.currentTemplate) === null || _e === void 0 ? void 0 : _e.Name)
        };
    };
    OnboardingCreateComponent.prototype.onCreateDynamicForm = function () {
        this.form = this.fb.group({
            TemplateId: [0, Validators.required]
        });
    };
    OnboardingCreateComponent.prototype.catNameStart = function (str) {
        var vowels = ['a', 'e', 'i', 'o', 'u', 'y'];
        return vowels.includes(str.substr(0, 1).toLocaleLowerCase());
    };
    OnboardingCreateComponent.prototype.onSelect = function (id, onboarding) {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!id) return [3 /*break*/, 2];
                        _a = this;
                        return [4 /*yield*/, this.service.getProfil(id)];
                    case 1:
                        _a.currentTemplate = _b.sent();
                        this.categories = onboarding ? onboarding.categories : this.currentTemplate.categories
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
                        _b.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
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
    OnboardingCreateComponent.prototype.scrollToFirstInvalidControl = function () {
        var form = document.getElementById('form');
        var firstInvalidControl = form.getElementsByClassName('ng-invalid')[0];
        firstInvalidControl.scrollIntoView({ behavior: 'smooth', block: 'center' });
        firstInvalidControl.focus();
    };
    OnboardingCreateComponent.prototype.onChangeCategory = function () {
        var checkMandatory = function (field) { return !!field.value && field.isMandatory && (field.type !== "checkbox_multiple" || field.type !== 'checkbox') || !field.isMandatory || field.type === "checkbox_multiple" || field.type === 'checkbox' || field.type === 'toggle'; };
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
        var _a, _b;
        return __awaiter(this, void 0, void 0, function () {
            var result, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        if (!(this.form.valid && this.onChangeCategory())) return [3 /*break*/, 8];
                        this.loading = true;
                        this.submitLabel = "Chargement...";
                        if (!(this.onboardingId && this.onboardingId !== "0")) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.service.updateOnboarding(__assign(__assign({}, this.form.value), { categories: this.categories, Finished: true, _id: this.onboardingId, tickets: (_b = (_a = this.currentOnboarding) === null || _a === void 0 ? void 0 : _a.vtickets) === null || _b === void 0 ? void 0 : _b.map(function (ticket) { return ticket.Id; }) }))];
                    case 1:
                        _c = _d.sent();
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, this.service.createOnboarding(__assign(__assign({}, this.form.value), { categories: this.categories, Finished: true }))];
                    case 3:
                        _c = _d.sent();
                        _d.label = 4;
                    case 4:
                        result = _c;
                        if (!result) return [3 /*break*/, 6];
                        if (this.onboardingId && this.onboardingId !== "0") {
                            this.categories = result.categories;
                            this.currentOnboarding = result;
                        }
                        return [4 /*yield*/, this.service.getAllProfil()];
                    case 5:
                        _d.sent();
                        this.loading = false;
                        this.submitLabel = "Envoyer ma fiche";
                        this.canExit = true;
                        this.showMode = true;
                        this.router.navigate([this.service.mainPath + '/requests']);
                        return [3 /*break*/, 7];
                    case 6:
                        console.log("errror......");
                        this.loading = false;
                        this.submitLabel = "Envoyer ma fiche";
                        _d.label = 7;
                    case 7: return [3 /*break*/, 9];
                    case 8:
                        this.scrollToFirstInvalidControl();
                        _d.label = 9;
                    case 9: return [2 /*return*/];
                }
            });
        });
    };
    OnboardingCreateComponent.prototype.onResumeLater = function () {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function () {
            var result, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        this.loading = true;
                        this.resumeLabel = "Chargement...";
                        if (!(this.onboardingId && this.onboardingId !== "0")) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.service.updateOnboarding(__assign(__assign({}, this.form.value), { categories: this.categories, Finished: true, _id: this.onboardingId, tickets: (_b = (_a = this.currentOnboarding) === null || _a === void 0 ? void 0 : _a.vtickets) === null || _b === void 0 ? void 0 : _b.map(function (ticket) { return ticket.Id; }) }))];
                    case 1:
                        _c = _d.sent();
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, this.service.createOnboarding(__assign(__assign({}, this.form.value), { categories: this.categories, Finished: false }))];
                    case 3:
                        _c = _d.sent();
                        _d.label = 4;
                    case 4:
                        result = _c;
                        if (!result) return [3 /*break*/, 6];
                        if (this.onboardingId && this.onboardingId !== "0") {
                            this.categories = result.categories;
                            this.currentOnboarding = result;
                        }
                        return [4 /*yield*/, this.service.getAllProfil()];
                    case 5:
                        _d.sent();
                        this.loading = false;
                        this.canExit = true;
                        this.showMode = true;
                        this.resumeLabel = "Reprendre plus tard";
                        this.router.navigate([this.service.mainPath + '/requests']);
                        return [3 /*break*/, 7];
                    case 6:
                        console.log("errror......");
                        this.loading = false;
                        this.resumeLabel = "Reprendre plus tard";
                        _d.label = 7;
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    OnboardingCreateComponent.prototype.ingoreDefaultAction = function (e) {
        e.preventDefault();
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
        var e_2, _a;
        var hasSubForm = false;
        try {
            for (var forms_2 = __values(forms), forms_2_1 = forms_2.next(); !forms_2_1.done; forms_2_1 = forms_2.next()) {
                var form = forms_2_1.value;
                if (form.forms && form.forms.length > 0) {
                    hasSubForm = true;
                    break;
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
    OnboardingCreateComponent.prototype.onLink = function (e) {
        e.preventDefault();
    };
    OnboardingCreateComponent.prototype.onShowMode = function () {
        this.showMode = !this.showMode;
        this.onLoadViewDetail(this.categories);
    };
    OnboardingCreateComponent.ɵfac = function OnboardingCreateComponent_Factory(t) { return new (t || OnboardingCreateComponent)(i0.ɵɵdirectiveInject(i1.FormBuilder), i0.ɵɵdirectiveInject(i2.OnboardingService), i0.ɵɵdirectiveInject(i3.ActivatedRoute), i0.ɵɵdirectiveInject(i3.Router), i0.ɵɵdirectiveInject(i4.MatDialog)); };
    OnboardingCreateComponent.ɵcmp = i0.ɵɵdefineComponent({ type: OnboardingCreateComponent, selectors: [["create-onboarding"]], hostBindings: function OnboardingCreateComponent_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("scroll", function OnboardingCreateComponent_scroll_HostBindingHandler($event) { return ctx.onScroll($event); });
        } }, decls: 4, vars: 2, consts: [[1, "content"], ["id", "form", 3, "formGroup", "submit", 4, "ngIf"], [3, "detailView", "onShowMode", 4, "ngIf"], ["id", "form", 3, "formGroup", "submit"], [1, "category"], [1, "title-group"], [2, "margin-left", "20px", "cursor", "pointer", 3, "click"], ["mat-button", "", "type", "button", 1, "register-button", 3, "disabled", "click"], ["id", "fields", 1, "fields"], ["class", "menu-item", 3, "ngxScrollTo", "id", 4, "ngFor", "ngForOf"], [1, "category-container", 3, "scroll"], ["class", "category-item content-item", 3, "id", 4, "ngFor", "ngForOf"], [1, "actions-button", 2, "margin-bottom", "50px"], ["mat-button", "", "type", "submit", 1, "register-button", "send-form", 3, "disabled"], ["mat-button", "", "type", "button", 1, "register-button", "resume", 3, "disabled", "click"], [1, "menu-item", 3, "ngxScrollTo", "id"], [1, "category-item", "content-item", 3, "id"], [1, "field-content"], [1, "field-item"], [1, "category-title-group"], [1, "category-name"], ["placeholder", "Company", "required", "", "style", "width: 150px;", 3, "ngModel", "ngModelOptions", "ngModelChange", 4, "ngIf"], ["placeholder", "Type de ticket", "required", "", "style", "width: 150px;", 3, "ngModel", "ngModelOptions", "ngModelChange", 4, "ngIf"], [1, "category-container"], ["class", "field-category", 3, "id", "width", 4, "ngFor", "ngForOf"], ["placeholder", "Company", "required", "", 2, "width", "150px", 3, "ngModel", "ngModelOptions", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["placeholder", "Type de ticket", "required", "", 2, "width", "150px", 3, "ngModel", "ngModelOptions", "ngModelChange"], [1, "field-category", 3, "id"], ["class", "inner-loop", 4, "ngIf"], [1, "inner-loop"], [1, "fields-content"], [1, "fields-container"], [3, "field", "length", "i", "j"], [1, "child"], ["class", "inner-child", 4, "ngIf"], [1, "inner-child"], ["class", "inner-child-content", 3, "id", "width", 4, "ngFor", "ngForOf"], [1, "inner-child-content", 3, "id"], [3, "field", "length", "i", "j", "onCheckValue"], [3, "detailView", "onShowMode"]], template: function OnboardingCreateComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "main");
            i0.ɵɵelementStart(1, "div", 0);
            i0.ɵɵtemplate(2, OnboardingCreateComponent_form_2_Template, 19, 10, "form", 1);
            i0.ɵɵtemplate(3, OnboardingCreateComponent_lib_onboarding_detail_3_Template, 1, 1, "lib-onboarding-detail", 2);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", !ctx.showMode);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.showMode);
        } }, directives: [i5.NgIf, i1.ɵangular_packages_forms_forms_y, i1.NgControlStatusGroup, i1.FormGroupDirective, i6.MatIcon, i7.MatButton, i5.NgForOf, i8.ScrollToDirective, i9.MatSelect, i1.RequiredValidator, i1.NgControlStatus, i1.NgModel, i10.NativeElementInjectorDirective, i11.MatOption, i12.SubOnboardingCreateComponent, i13.OnboardingDetailComponent], styles: ["main[_ngcontent-%COMP%]{background:no-repeat padding-box #f4f7f9;height:100vh;width:100%;display:flex;flex-direction:column;align-items:center}main[_ngcontent-%COMP%]   .disabled[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{background-color:transparent!important}main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{width:99%;height:100%;padding-left:1%}main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font:bold 32px/30px Nexa Text;letter-spacing:0;color:#171f26;padding-top:20px}main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font:20px/26px Nexa Text;letter-spacing:0;color:#171f26}main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   p.sub-title[_ngcontent-%COMP%]{max-width:400px}main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .select-contact[_ngcontent-%COMP%]{max-width:70%;margin:5% auto auto;background:no-repeat padding-box #fff;border:1px solid #dce4e9;border-radius:6px;padding:5%}main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .select-contact[_ngcontent-%COMP%]   .select-template[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;justify-content:space-between;margin-top:50px}main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .select-contact[_ngcontent-%COMP%]   .select-template[_ngcontent-%COMP%]   .full-width[_ngcontent-%COMP%]{width:40%}main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .select-contact[_ngcontent-%COMP%]   .select-template[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{float:right;text-align:center;border:1px solid #543cb6;border-radius:7px;padding:1em 2em;display:flex;align-items:center;background-color:transparent;font:bold 15px/17px Nexa;letter-spacing:0;color:#543cb6;-ms-grid-row-align:center;align-self:center;width:220px}main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .category[_ngcontent-%COMP%]   .onboarding-mat-stepper[_ngcontent-%COMP%]   mat-horizontal-stepper[_ngcontent-%COMP%]   .next-step[_ngcontent-%COMP%]{float:right}main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{display:flex;height:100%;width:100%;max-width:1500px;margin:auto;overflow:hidden}main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .select-contact[_ngcontent-%COMP%]{max-width:70%;margin:5% auto auto;background:no-repeat padding-box #fff;border:1px solid #dce4e9;border-radius:6px;padding:5%}main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .select-contact[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{float:right;text-align:center;border:1px solid #543cb6;border-radius:7px;padding:.7em 2em .5em;display:flex;align-items:center;background-color:transparent;font:bold 15px/17px Nexa;letter-spacing:0;color:#543cb6;align-self:flex-end}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]{width:786px;background:no-repeat padding-box #fff;border:1px solid #dce4e9;border-radius:6px;opacity:1;margin:auto;padding:0 25px;-ms-grid-row-align:center;align-self:center}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{text-align:center;font:900 32px/48px Nexa;letter-spacing:0;color:#171f26}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font:18px/24px Nexa Text;letter-spacing:0;color:#171f26}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .profil-name-content[_ngcontent-%COMP%]{display:flex;align-items:center;position:relative}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .profil-name-content[_ngcontent-%COMP%]   .add-picto[_ngcontent-%COMP%]{margin-right:15px;min-width:50px;width:30px;padding:9px 12px}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .profil-name-content[_ngcontent-%COMP%]   .add-picto[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin-right:10px}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .profil-name-content[_ngcontent-%COMP%]   .list-picto[_ngcontent-%COMP%]{position:absolute;height:200px;width:100%;background:no-repeat padding-box #fff;border:1px solid #171f26;border-radius:8px;top:100%;z-index:1}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .profil-name-content[_ngcontent-%COMP%]   .list-picto[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin:15px;border:none;font-size:40px}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .profil-name-content[_ngcontent-%COMP%]   .list-picto[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]:hover{color:#830b6b!important;cursor:pointer}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .box-title-content[_ngcontent-%COMP%]{width:100%;margin:25px auto}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font:900 32px/38px Nexa;letter-spacing:0;color:#171f26}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font:15px/26px Nexa Text;letter-spacing:0;color:#171f26;text-align:center}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .link-create-profil[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:center}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{text-align:center;border:1px solid #543cb6;border-radius:7px;padding:.7em 2em .5em;display:flex;align-items:center;background-color:transparent;font:bold 15px/17px Nexa;letter-spacing:0;color:#543cb6}main[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:space-between}.expand-button[_ngcontent-%COMP%]{color:#5a607f!important;background-color:transparent!important;box-shadow:none!important}.full-width[_ngcontent-%COMP%]{width:100%}.field-action[_ngcontent-%COMP%]{width:10%}.field-size[_ngcontent-%COMP%]{width:90%;margin:auto 2% auto auto}  .mat-form-field-appearance-fill .mat-form-field-flex{background-color:#fff}  .mat-form-field-appearance-fill .mat-form-field-underline::before{background-color:transparent}[_nghost-%COMP%]     .mat-checkbox-checked.mat-accent .mat-checkbox-background, [_nghost-%COMP%]     .mat-checkbox-indeterminate.mat-accent .mat-checkbox-background{background-color:transparent}.category-action[_ngcontent-%COMP%]{display:flex;width:100%;overflow:hidden}.delete-field[_ngcontent-%COMP%]{margin:auto 2%}.radio-group[_ngcontent-%COMP%]   .mat-radio-button[_ngcontent-%COMP%]{margin-right:10px}.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary[_ngcontent-%COMP%]{background-color:#3f51b5;color:#fff;min-height:20px;font-size:10px}.move-icons[_ngcontent-%COMP%]{cursor:move}.category-item[_ngcontent-%COMP%], .cdk-drag-placeholder[_ngcontent-%COMP%]{display:flex;align-items:baseline;width:100%;border:1px solid #dce4e9;border-radius:8px;background-color:#fff;margin-top:10px;padding:15px}.category-item[_ngcontent-%COMP%]   .left-action[_ngcontent-%COMP%], .cdk-drag-placeholder[_ngcontent-%COMP%]   .left-action[_ngcontent-%COMP%]{height:auto;background-color:#49a094;padding-top:7px;width:40px;-ms-grid-row-align:stretch;align-self:stretch;border-top-left-radius:8px;border-bottom-left-radius:8px}.category-item[_ngcontent-%COMP%]   .left-action[_ngcontent-%COMP%]   .transparent-button[_ngcontent-%COMP%], .cdk-drag-placeholder[_ngcontent-%COMP%]   .left-action[_ngcontent-%COMP%]   .transparent-button[_ngcontent-%COMP%]{background-color:transparent;box-shadow:none;width:40px;padding:0;margin:0;min-width:auto;color:#fff}.category-item[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%], .cdk-drag-placeholder[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%]{width:100%}.category-item[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%], .cdk-drag-placeholder[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]{display:-ms-grid;display:grid;-ms-grid-columns:1fr 1fr 1fr;grid-template-columns:1fr 1fr 1fr;align-items:center;border:transparent!important}.category-item[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]   .category-title-group[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .cdk-drag-placeholder[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]   .category-title-group[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-family:Nexa;font-style:normal;font-weight:250;font-size:14px;line-height:16px;color:#575f6e}.category-item[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]   .category-title-group[_ngcontent-%COMP%]   .category-name[_ngcontent-%COMP%], .cdk-drag-placeholder[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]   .category-title-group[_ngcontent-%COMP%]   .category-name[_ngcontent-%COMP%]{text-align:left;font:bold 22px/48px Nexa Text;letter-spacing:0;color:#171f26;margin:0}.category-item[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]   .mat-form-field-wrapper[_ngcontent-%COMP%]   .mat-form-field-flex[_ngcontent-%COMP%]   .mat-form-field-outline[_ngcontent-%COMP%], .category-item[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%]   .mat-form-field-outline[_ngcontent-%COMP%], .cdk-drag-placeholder[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]   .mat-form-field-wrapper[_ngcontent-%COMP%]   .mat-form-field-flex[_ngcontent-%COMP%]   .mat-form-field-outline[_ngcontent-%COMP%], .cdk-drag-placeholder[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%]   .mat-form-field-outline[_ngcontent-%COMP%]{color:transparent!important}.cdk-drag-preview[_ngcontent-%COMP%]{box-sizing:border-box;border-radius:4px;opacity:1}.cdk-drag-preview[_ngcontent-%COMP%]   .expand-button[_ngcontent-%COMP%]{color:#5a607f!important;background-color:transparent!important;box-shadow:none!important;margin-right:28px!important}.cdk-drag-placeholder[_ngcontent-%COMP%]{opacity:0}.cdk-drag-animating[_ngcontent-%COMP%], .example-list.cdk-drop-list-dragging[_ngcontent-%COMP%]   .category-item[_ngcontent-%COMP%]:not(.cdk-drag-placeholder){transition:transform 250ms cubic-bezier(0,0,.2,1)}.child[_ngcontent-%COMP%]{margin-left:0}.child[_ngcontent-%COMP%]   .inner-child[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap}.category[_ngcontent-%COMP%]{width:100%}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]{width:250px;background-color:#fff;margin:10px 20px;border-radius:5px;border:1px solid #dbcbcb96}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:15px;border-bottom:1px solid #dbcbcb96;margin:10px;padding-bottom:5px;padding-top:0;font-family:\"Nexa Text\";display:flex;flex-direction:column;justify-content:space-between;align-items:flex-start}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-weight:600;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;margin-top:-5px}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin-left:15px;cursor:pointer}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   h3.template-title[_ngcontent-%COMP%]{font:900 24px/36px Nexa Text;letter-spacing:0;color:#171f26}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]{font-weight:600;margin-left:-27px;font-size:15px;list-style:none}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:5px;margin:5px auto;cursor:pointer;text-align:left;font:12px/19px Nexa Text;letter-spacing:0;color:#535760}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]{padding-left:0;margin-left:0}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.li-title[_ngcontent-%COMP%]{font-size:14px;font-weight:600;margin-right:10px}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.li-title[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:140px;outline:0;border:1px dashed grey}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.li-title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:inline-flex;align-items:center;width:100%}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.li-title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin-left:10px}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.li-title.active[_ngcontent-%COMP%], .category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.li-title[_ngcontent-%COMP%]:hover{background:no-repeat padding-box #e5e8ee;border-radius:5px}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.sub-title[_ngcontent-%COMP%]{list-style:none;padding-left:20px}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.sub-title.active[_ngcontent-%COMP%], .category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.sub-title.active[_ngcontent-%COMP%]::marker, .category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.sub-title[_ngcontent-%COMP%]:hover{font-weight:600;background:no-repeat padding-box #e5e8ee;border-radius:5px}.category[_ngcontent-%COMP%]   .disabled[_ngcontent-%COMP%]{background-color:#f4f7f9!important}.category[_ngcontent-%COMP%]   .expand-button[_ngcontent-%COMP%]{color:#5a607f!important;background-color:transparent!important;box-shadow:none!important;margin-right:28px!important}.category[_ngcontent-%COMP%]   .expand-button[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%]{font-size:40px}.category[_ngcontent-%COMP%]   .transparent-button[_ngcontent-%COMP%]{background-color:transparent;box-shadow:none;width:40px;padding:0;margin:0;margin-left:0!important;min-width:auto;color:#fff}.category[_ngcontent-%COMP%]   .title-group[_ngcontent-%COMP%]{display:flex;justify-content:space-between;margin-top:10px}.category[_ngcontent-%COMP%]   .title-group[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0 0 8px;display:flex;align-items:center}.add-button-sub-category[_ngcontent-%COMP%]{width:95.5%!important;margin-bottom:22px;margin-left:22px}.add-button-container[_ngcontent-%COMP%]{background:no-repeat padding-box #fff;border:1px dashed #dce4e9;border-radius:8px;margin-top:10px;padding:10px;display:flex;justify-content:center;align-items:center;width:98.5%;margin-bottom:22px}.add-button-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{display:flex;align-items:center;background-color:transparent;border:none;cursor:pointer;font:17px/26px Nexa Text;letter-spacing:0;color:#c2c8d5;box-shadow:none}.add-category[_ngcontent-%COMP%]{border:1px dashed #c2c8d5;border-radius:5px;margin-left:10px;margin-bottom:10px;font:bold 12px/19px Nexa Text;letter-spacing:0;color:#c2c8d5;width:92%}.inner-loop[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]{display:flex;height:100%;margin:0;width:100%;margin-top:10px;margin-bottom:10px}.inner-loop[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]   .button-action[_ngcontent-%COMP%]{background-color:#6fe8d7;-ms-grid-row-align:stretch;align-self:stretch;margin-top:0;margin-left:20px;border-bottom-left-radius:8px;border-top-left-radius:8px}.inner-loop[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]   .button-action[_ngcontent-%COMP%]   .transparent-button[_ngcontent-%COMP%]{background-color:transparent;box-shadow:none;width:40px;padding:0;margin:0;min-width:auto;color:#fff}.inner-loop[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]   .child-2-background[_ngcontent-%COMP%]{background-color:#cffaf4!important}.inner-loop[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]   .child-3-background[_ngcontent-%COMP%]{background-color:#e5e8ee!important}.inner-loop[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]   .fields-container[_ngcontent-%COMP%]{width:100%;padding-right:10px;padding-top:5px}.inner-loop[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]   .fields-container[_ngcontent-%COMP%]   lib-sub-category[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;width:100%}.inner-loop[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]   .fields-container[_ngcontent-%COMP%]   lib-sub-category[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]   .button-action[_ngcontent-%COMP%]{background-color:#6fe8d7;height:100%;margin:auto 15px auto auto;display:flex}.inner-loop[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]   .fields-container[_ngcontent-%COMP%]   lib-sub-category[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]   .button-action[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{box-shadow:none;background-color:transparent;color:#fff}.side-bar[_ngcontent-%COMP%]{display:flex;flex-direction:column}.register-button[_ngcontent-%COMP%]{background:0 0;border:2px solid #192128!important;border-radius:8px;margin-left:22px!important;color:#000}.register-button[disabled][disabled][_ngcontent-%COMP%]{opacity:.5!important;background:no-repeat padding-box #dadee2!important}.content-item[_ngcontent-%COMP%]{transition-property:border-image-slice border-image-source border-width;transition-timing-function:ease-in-out;transition-duration:.5s}.active-content[_ngcontent-%COMP%]{border-image-slice:1;border-width:2px;border-image-source:linear-gradient(to left,#9d107d,#4862ab)}  .phone-input-view-collab{border-bottom:1px solid #949494!important;padding-bottom:.3em;padding-top:1em;display:block!important;max-width:100%;font:14px/20px \"Nexa Text\"!important;width:95%}  .country-dropdown{min-width:unset!important}  .iti{width:100%!important}  #phone{width:90%!important}  #mobile-phone{width:100%}  .fields{max-height:100vh;margin-right:.5%;overflow:hidden;width:100%}  .fields mat-tab-group{height:100%;width:100%;overflow:hidden}  .fields mat-tab-group .mat-tab-body-wrapper{height:100%;max-height:90vh;overflow:auto}  .fields mat-tab-group .mat-tab-body-wrapper .mat-tab-body{height:100%}  .fields mat-tab-group .mat-tab-body-wrapper .mat-tab-body .mat-tab-body-content{width:100%;overflow:hidden}.fields[_ngcontent-%COMP%]{height:95%}.fields[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style:none;display:flex;margin:0;padding:0}.fields[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin-right:20px;padding-bottom:5px;border-bottom:3px solid transparent}.fields[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none;font-family:Nexa;font-style:normal;font-weight:700;font-size:14px;line-height:120%;color:#171f26;opacity:.5}.fields[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.menu-item.active[_ngcontent-%COMP%], .fields[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.menu-item[_ngcontent-%COMP%]:hover{cursor:pointer;border-bottom:3px solid #3c4252}.fields[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.menu-item.active[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .fields[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.menu-item[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%]{font-family:Nexa;font-style:normal;font-weight:700;font-size:14px;line-height:120%;opacity:1;text-decoration:none!important}  .category-container{overflow:auto;max-height:100%;display:flex;flex-wrap:wrap;-ms-overflow-style:none;scrollbar-width:none}  .category-container mat-form-field{width:100%}  .category-container .actions-button{margin-top:20px;margin-bottom:50px}  .category-container .actions-button .send-form{margin-left:0!important;background-color:#000;color:#fff}  .category-container .actions-button .resume{margin-left:25px!important}  .category-container::-webkit-scrollbar{display:none}  .category-item .mat-radio-button.mat-accent.mat-radio-checked .mat-radio-outer-circle{border-color:#039be5}  .category-item .mat-radio-button.mat-accent .mat-radio-inner-circle,   .category-item .mat-radio-button.mat-accent .mat-radio-ripple .mat-ripple-element:not(.mat-radio-persistent-ripple),   .category-item .mat-radio-button.mat-accent.mat-radio-checked .mat-radio-persistent-ripple,   .category-item .mat-radio-button.mat-accent:active .mat-radio-persistent-ripple{background-color:#039be5}  .category-item .mat-checkbox-checkmark-path{stroke:#fff!important}  .category-item .mat-checkbox-frame{border:2px solid #039be5!important}  .category-item .mat-checkbox-checked.mat-accent .mat-checkbox-background,   .category-item .mat-checkbox-indeterminate.mat-accent .mat-checkbox-background{background-color:#039be5!important}  .category-item .mat-checkbox-inner-container{height:20px!important;width:20px!important}[_nghost-%COMP%]     .category .mat-slide-toggle.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar{background-color:#039be5;position:relative;width:42px;height:23px;flex-shrink:0;border-radius:14px}[_nghost-%COMP%]     .category .mat-slide-toggle:not(.mat-disabled) .mat-slide-toggle-bar{background-color:#707273;position:relative;width:42px;height:23px;flex-shrink:0;border-radius:14px}[_nghost-%COMP%]     .category .mat-slide-toggle.mat-checked:not(.mat-disabled) .mat-slide-toggle-thumb{background-color:#fff;margin-top:4px}[_nghost-%COMP%]     .category .mat-slide-toggle:not(.mat-disabled) .mat-slide-toggle-thumb{margin-top:4px;margin-left:4px}[_nghost-%COMP%]     .category .mat-slide-toggle.draft:not(.mat-disabled) .mat-slide-toggle-bar{background-color:#707273}[_nghost-%COMP%]     .category .mat-slide-toggle.draft.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar{background-color:#039be5}"] });
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
    }], function () { return [{ type: i1.FormBuilder }, { type: i2.OnboardingService }, { type: i3.ActivatedRoute }, { type: i3.Router }, { type: i4.MatDialog }]; }, { onScroll: [{
            type: HostListener,
            args: ['scroll', ['$event']]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib25ib2FyZGluZy1jcmVhdGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vb25ib2FyZGluZy8iLCJzb3VyY2VzIjpbImxpYi9wYWdlcy9vbmJvYXJkaW5nLWNyZWF0ZS9vbmJvYXJkaW5nLWNyZWF0ZS5jb21wb25lbnQudHMiLCJsaWIvcGFnZXMvb25ib2FyZGluZy1jcmVhdGUvb25ib2FyZGluZy1jcmVhdGUuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ2hFLE9BQU8sRUFBMEIsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFcEUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sc0RBQXNELENBQUM7QUFHNUYsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0lDTXZCLDhCQUVJO0lBQUEseUJBQUc7SUFBQSxZQUFpQjtJQUFBLGlCQUFJO0lBQzVCLGlCQUFLOzs7SUFIRCxzREFBaUMsZ0NBQUE7SUFFOUIsZUFBaUI7SUFBakIsd0NBQWlCOzs7SUFtQlIsc0NBRUk7SUFBQSxZQUFnQjtJQUFBLGlCQUFhOzs7SUFEN0IseUNBQXNCO0lBQ3RCLGVBQWdCO0lBQWhCLGlEQUFnQjs7Ozs7SUFMeEIsc0NBR0k7SUFIOEIsbVJBQXFDO0lBR25FLHdIQUVJO0lBQ1IsaUJBQWE7OztJQU5xQixzREFBcUMsOENBQUE7SUFHdkQsZUFBcUQ7SUFBckQsNkRBQXFEOzs7SUFRakUsc0NBRUk7SUFBQSxZQUFnQjtJQUFBLGlCQUFhOzs7SUFEN0IsdUNBQW9CO0lBQ3BCLGVBQWdCO0lBQWhCLGlEQUFnQjs7OztJQU54QixzQ0FJSTtJQUY2QixxUkFBdUM7SUFFcEUsd0hBRUk7SUFDUixpQkFBYTs7O0lBTG9CLHdEQUF1Qyw4Q0FBQTtJQUV4RCxlQUF1RDtJQUF2RCwrREFBdUQ7Ozs7SUFxQ1gs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LElBQUksQ0FBQztRQUNwQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDWCxDQUFDO0lBRUQsZ0RBQVksR0FBWixVQUFhLEtBQWM7UUFDekIsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7SUFDN0IsQ0FBQztJQUVELDBDQUFNLEdBQU4sVUFBTyxDQUFDO1FBQ04sQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFBO0lBQ3BCLENBQUM7SUFFRCw4Q0FBVSxHQUFWO1FBQ0UsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDL0IsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQTtJQUN4QyxDQUFDO3NHQTdiVSx5QkFBeUI7a0VBQXpCLHlCQUF5Qjs7O1lDZHRDLDRCQUNJO1lBQUEsOEJBQ0k7WUFBQSw4RUFDSTtZQStISiw4R0FDQTtZQUNKLGlCQUFNO1lBRVYsaUJBQU87O1lBcElPLGVBQWlCO1lBQWpCLG9DQUFpQjtZQWdJQSxlQUFnQjtZQUFoQixtQ0FBZ0I7O29DRGxJL0M7Q0E2Y0MsQUFwY0QsSUFvY0M7U0EvYlkseUJBQXlCO2tEQUF6Qix5QkFBeUI7Y0FMckMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxtQkFBbUI7Z0JBQzdCLFdBQVcsRUFBRSxvQ0FBb0M7Z0JBQ2pELFNBQVMsRUFBRSxDQUFDLG9DQUFvQyxDQUFDO2FBQ2xEOztrQkFpRUUsWUFBWTttQkFBQyxRQUFRLEVBQUUsQ0FBQyxRQUFRLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBDb21wb25lbnQsIEhvc3RMaXN0ZW5lciwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZvcm1CdWlsZGVyLCBGb3JtR3JvdXAsIFZhbGlkYXRvcnMgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuXHJcbmltcG9ydCB7IEV4aXRDb25maXJtQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9leGl0LWNvbmZpcm0vZXhpdC1jb25maXJtLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE1hdERpYWxvZyB9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbC9kaWFsb2dcIjtcclxuaW1wb3J0IHsgT25ib2FyZGluZ1NlcnZpY2UgfSBmcm9tIFwiLi4vLi4vb25ib2FyZGluZy5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IGZpZWxkV2lkdGggfSBmcm9tIFwiLi4vLi4vdXRpbHMvdXRpbHNcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiBcImNyZWF0ZS1vbmJvYXJkaW5nXCIsXHJcbiAgdGVtcGxhdGVVcmw6IFwiLi9vbmJvYXJkaW5nLWNyZWF0ZS5jb21wb25lbnQuaHRtbFwiLFxyXG4gIHN0eWxlVXJsczogW1wiLi9vbmJvYXJkaW5nLWNyZWF0ZS5jb21wb25lbnQuc2Nzc1wiXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIE9uYm9hcmRpbmdDcmVhdGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIGZvcm06IEZvcm1Hcm91cDtcclxuICBjdXJyZW50UHJvZmlsOiBhbnkgPSB7fTtcclxuICBjYW5FeGl0ID0gdHJ1ZTtcclxuICB0YWdzID0gW107XHJcbiAgb25ib2FyZGluZ0lkID0gXCIwXCI7XHJcbiAgdGVtcGxhdGVJZCA9IFwiMFwiO1xyXG4gIHBhcmVudCA9IFtdO1xyXG4gIHNlbGVjdGVkTWVudSA9IDA7XHJcbiAgdGVtcGxhdGVzOiBhbnk7XHJcbiAgY29udGFjdHM6IGFueTtcclxuICBjdXJyZW50T25ib2FyZGluZzogYW55O1xyXG4gIGN1cnJlbnRUZW1wbGF0ZTogYW55O1xyXG4gIGlzU2VsZWN0ZWQ6IGJvb2xlYW47XHJcbiAgY3VycmVudFVzZXI6IGFueTtcclxuICBjdXJyZW50QWN0aXZlOiBhbnk7XHJcbiAgc2hvd01vZGUgPSBmYWxzZTtcclxuICBzZWxlY3RlZENhdGVnb3J5SW5kZXggPSBudWxsO1xyXG4gIGxvYWRpbmcgPSBmYWxzZTtcclxuICBpbnZhbGlkZVZhbHVlOiBib29sZWFuO1xyXG4gIGRldGFpbFZpZXc6IGFueTtcclxuICBmaWVsZFdpZHRoID0gZmllbGRXaWR0aFxyXG4gIGNhdGVnb3JpZXM6IGFueVxyXG4gIHN1Ym1pdExhYmVsID0gJ0Vudm95ZXIgbWEgZmljaGUnXHJcbiAgcmVzdW1lTGFiZWwgPSAnUmVwcmVuZHJlIHBsdXMgdGFyZCdcclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgZmI6IEZvcm1CdWlsZGVyLFxyXG4gICAgcHVibGljIHNlcnZpY2U6IE9uYm9hcmRpbmdTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXHJcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxyXG4gICAgcHJpdmF0ZSBkaWFsb2c6IE1hdERpYWxvZ1xyXG4gICkge1xyXG4gICAgdGhpcy5zZXJ2aWNlLl9jdXJyZW50T25ib2FyZGluZy5zdWJzY3JpYmUoYXN5bmMgKG9uYm9hcmRpbmcpID0+IHtcclxuICAgICAgdGhpcy5vbkNyZWF0ZUR5bmFtaWNGb3JtKClcclxuICAgICAgdGhpcy5pc1NlbGVjdGVkID0gdHJ1ZTtcclxuICAgICAgaWYgKG9uYm9hcmRpbmcpIHtcclxuICAgICAgICB0aGlzLmZvcm0ucGF0Y2hWYWx1ZSh7XHJcbiAgICAgICAgICBUZW1wbGF0ZUlkOiBvbmJvYXJkaW5nLlRlbXBsYXRlSWRcclxuICAgICAgICB9KTtcclxuICAgICAgICBhd2FpdCB0aGlzLm9uU2VsZWN0KG9uYm9hcmRpbmcuVGVtcGxhdGVJZCwgb25ib2FyZGluZylcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnRlbXBsYXRlSWQgPSB0aGlzLnJvdXRlLnNuYXBzaG90LnBhcmFtTWFwLmdldChcInRlbXBsYXRlSWRcIilcclxuICAgICAgICB0aGlzLmZvcm0ucGF0Y2hWYWx1ZSh7XHJcbiAgICAgICAgICBUZW1wbGF0ZUlkOiB0aGlzLnRlbXBsYXRlSWRcclxuICAgICAgICB9KTtcclxuICAgICAgICBhd2FpdCB0aGlzLm9uU2VsZWN0KHRoaXMudGVtcGxhdGVJZCwgbnVsbClcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIGlzT2JqZWN0KG9iaikge1xyXG4gICAgcmV0dXJuIG9iaiAhPT0gdW5kZWZpbmVkICYmIG9iaiAhPT0gbnVsbCAmJiBvYmouY29uc3RydWN0b3IgPT0gT2JqZWN0O1xyXG4gIH1cclxuXHJcbiAgY2FuRGVhY3RpdmF0ZSgpIHtcclxuICAgIGlmICghdGhpcy5jYW5FeGl0KSB7XHJcbiAgICAgIHRoaXMuZGlhbG9nLm9wZW4oRXhpdENvbmZpcm1Db21wb25lbnQsIHtcclxuICAgICAgICBkYXRhOiAnJ1xyXG4gICAgICB9KVxyXG4gICAgICByZXR1cm4gdGhpcy5zZXJ2aWNlLmNhbkV4aXQkXHJcbiAgICB9XHJcbiAgICByZXR1cm4gdHJ1ZVxyXG4gIH1cclxuXHJcbiAgQEhvc3RMaXN0ZW5lcignc2Nyb2xsJywgWyckZXZlbnQnXSlcclxuICBvblNjcm9sbChldmVudCkge1xyXG4gICAgY29uc3Qgc2VjdGlvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwic2VjdGlvblwiKTtcclxuICAgIGNvbnN0IG5hdkxpID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5maWVsZHMgdWwgbGlcIik7XHJcbiAgICBsZXQgY3VycmVudCA9IFwiXCI7XHJcbiAgICBzZWN0aW9ucy5mb3JFYWNoKChzZWN0aW9uKSA9PiB7XHJcbiAgICAgIGNvbnN0IHNlY3Rpb25Ub3AgPSBzZWN0aW9uLm9mZnNldFRvcDtcclxuICAgICAgaWYgKGV2ZW50LnRhcmdldC5zY3JvbGxUb3AgPiBzZWN0aW9uVG9wIC0gMjAwKSB7XHJcbiAgICAgICAgY3VycmVudCA9IHNlY3Rpb24uZ2V0QXR0cmlidXRlKFwiaWRcIilcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBuYXZMaS5mb3JFYWNoKChsaSkgPT4ge1xyXG4gICAgICBjb25zdCBpZCA9IGxpLmdldEF0dHJpYnV0ZSgnaWQnKVxyXG4gICAgICBpZiAoaWQuc3Vic3RyaW5nKDAsIGlkLmxlbmd0aCAtIDEpID09PSBjdXJyZW50KSB7XHJcbiAgICAgICAgbGkuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBsaS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGFzeW5jIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy50ZW1wbGF0ZUlkID0gdGhpcy5yb3V0ZS5zbmFwc2hvdC5wYXJhbU1hcC5nZXQoXCJ0ZW1wbGF0ZUlkXCIpO1xyXG4gICAgdGhpcy5vbmJvYXJkaW5nSWQgPSB0aGlzLnJvdXRlLnNuYXBzaG90LnBhcmFtTWFwLmdldChcIm9uYm9hcmRpbmdJZFwiKTtcclxuICAgIGlmICh0aGlzLm9uYm9hcmRpbmdJZCAmJiB0aGlzLm9uYm9hcmRpbmdJZCAhPT0gXCIwXCIpIHtcclxuICAgICAgdGhpcy5zaG93TW9kZSA9IHRydWU7XHJcbiAgICAgIHRoaXMuY3VycmVudE9uYm9hcmRpbmcgPSBhd2FpdCB0aGlzLnNlcnZpY2UuZ2V0T25ib2FyZGluZyh0aGlzLm9uYm9hcmRpbmdJZCk7XHJcbiAgICAgIHRoaXMuZm9ybS5wYXRjaFZhbHVlKHRoaXMuY3VycmVudE9uYm9hcmRpbmcpXHJcbiAgICAgIHRoaXMuY2F0ZWdvcmllcyA9IHRoaXMuY3VycmVudE9uYm9hcmRpbmcuY2F0ZWdvcmllcztcclxuICAgICAgdGhpcy5vbkxvYWRWaWV3RGV0YWlsKHRoaXMuY2F0ZWdvcmllcylcclxuXHJcbiAgICAgIHRoaXMuY3VycmVudFRlbXBsYXRlID0gdGhpcy5jdXJyZW50T25ib2FyZGluZz8udnRlbXBsYXRlc1swXVxyXG4gICAgICBpZiAodGhpcy5jdXJyZW50T25ib2FyZGluZy5UZW1wbGF0ZUlkKSB7XHJcbiAgICAgICAgdGhpcy5pc1NlbGVjdGVkID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG4gIG9uTG9hZFZpZXdEZXRhaWwoY2F0ZWdvcmllcykge1xyXG4gICAgY29uc3QgdXNlciA9IHt9XHJcbiAgICBjb25zdCBjYXRlZ29yaWVzVmlldyA9IGNhdGVnb3JpZXMubWFwKChjYXRlZ29yeSkgPT4ge1xyXG4gICAgICBjb25zdCB7IG5hbWUsIGV4cGFuZE9uYm9hcmRpbmcgfSA9IGNhdGVnb3J5O1xyXG4gICAgICBsZXQgY2F0ZWdvcnlGb3JtID0gW11cclxuICAgICAgbGV0IGZpZWxkQ29tcGxldGVkID0gMDtcclxuICAgICAgbGV0IGZpZWxkTGVuZ3RoID0gMDtcclxuICAgICAgaWYgKGNhdGVnb3J5LmZvcm1zKSB7XHJcbiAgICAgICAgY2F0ZWdvcnlGb3JtID0gY2F0ZWdvcnkuZm9ybXMubWFwKChmb3JtKSA9PiB7XHJcbiAgICAgICAgICBpZiAoZm9ybS5pc01hbmRhdG9yeSkge1xyXG4gICAgICAgICAgICBmaWVsZExlbmd0aCArPSAxO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKGZvcm0uaXNNYW5kYXRvcnkgJiYgISFmb3JtLnZhbHVlKSB7XHJcbiAgICAgICAgICAgIGZpZWxkQ29tcGxldGVkICs9IDE7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBjb25zdCBuZXdzdWJmb3JtcyA9IHtcclxuICAgICAgICAgICAgbGFiZWw6IGZvcm0ubGFiZWwsXHJcbiAgICAgICAgICAgIHZhbHVlOiBmb3JtLnR5cGUgIT09IFwidGVsXCIgPyBmb3JtLnZhbHVlIDogZm9ybT8udmFsdWU/LmludGVybmF0aW9uYWxOdW1iZXIgfHwgJycsXHJcbiAgICAgICAgICAgIGtleTogZm9ybS5rZXlcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmIChjYXRlZ29yeS5uYW1lID09PSBcIlV0aWxpc2F0ZXVyXCIpIHtcclxuICAgICAgICAgICAgdXNlcltmb3JtLmtleV0gPSBmb3JtLnZhbHVlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgbGV0IHN1YkZvcm0gPSBbXVxyXG4gICAgICAgICAgaWYgKGZvcm0uZm9ybXMpIHtcclxuICAgICAgICAgICAgc3ViRm9ybSA9IGZvcm0uZm9ybXMubWFwKChzdWJGb3JtKSA9PiB7XHJcbiAgICAgICAgICAgICAgaWYgKHN1YkZvcm0uaXNNYW5kYXRvcnkpIHtcclxuICAgICAgICAgICAgICAgIGZpZWxkTGVuZ3RoICs9IDE7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGlmIChzdWJGb3JtLmlzTWFuZGF0b3J5ICYmICEhc3ViRm9ybS52YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgZmllbGRDb21wbGV0ZWQgKz0gMTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgY29uc3QgY2hpbGRmb3JtcyA9IHtcclxuICAgICAgICAgICAgICAgIGxhYmVsOiBzdWJGb3JtLmxhYmVsLFxyXG4gICAgICAgICAgICAgICAgdmFsdWU6IHN1YkZvcm0udHlwZSAhPT0gXCJ0ZWxcIiA/IHN1YkZvcm0udmFsdWUgOiBzdWJGb3JtPy52YWx1ZT8uaW50ZXJuYXRpb25hbE51bWJlciB8fCAnJyxcclxuICAgICAgICAgICAgICAgIGtleTogc3ViRm9ybS5rZXlcclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgIGxldCBjaGlsZDIgPSBbXVxyXG4gICAgICAgICAgICAgIGlmIChzdWJGb3JtLmZvcm1zKSB7XHJcbiAgICAgICAgICAgICAgICBjaGlsZDIgPSBzdWJGb3JtLmZvcm1zLm1hcCgoYzIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgaWYgKGMyLmlzTWFuZGF0b3J5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZmllbGRMZW5ndGggKz0gMTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICBpZiAoYzIuaXNNYW5kYXRvcnkgJiYgISFjMi52YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGZpZWxkQ29tcGxldGVkICs9IDE7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogYzIubGFiZWwsXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGMyLnR5cGUgIT09IFwidGVsXCIgPyBjMi52YWx1ZSA6IGMyPy52YWx1ZT8uaW50ZXJuYXRpb25hbE51bWJlciB8fCAnJyxcclxuICAgICAgICAgICAgICAgICAgICBrZXk6IGMyLmtleVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgLi4uY2hpbGRmb3JtcyxcclxuICAgICAgICAgICAgICAgICAgZXhwYW5kT25ib2FyZGluZzogc3ViRm9ybS5leHBhbmRPbmJvYXJkaW5nLFxyXG4gICAgICAgICAgICAgICAgICBmb3JtczogY2hpbGQyLFxyXG4gICAgICAgICAgICAgICAgICBrZXk6IGZvcm0ua2V5XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBjaGlsZGZvcm1zXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgIC4uLm5ld3N1YmZvcm1zLCBleHBhbmRPbmJvYXJkaW5nXHJcbiAgICAgICAgICAgICAgICA6IGZvcm0uZXhwYW5kT25ib2FyZGluZyxcclxuICAgICAgICAgICAgICBmb3Jtczogc3ViRm9ybSxcclxuICAgICAgICAgICAgICBrZXk6IGZvcm0ua2V5XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXdzdWJmb3Jtc1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBuYW1lLCBleHBhbmRPbmJvYXJkaW5nLFxyXG4gICAgICAgIGZvcm1zOiBjYXRlZ29yeUZvcm0sXHJcbiAgICAgICAga2V5OiBjYXRlZ29yeS5rZXksXHJcbiAgICAgICAgZmllbGRDb21wbGV0ZWQsXHJcbiAgICAgICAgZmllbGRMZW5ndGhcclxuICAgICAgfVxyXG4gICAgfSlcclxuICAgIHRoaXMuZGV0YWlsVmlldyA9IHtcclxuICAgICAgY2F0ZWdvcmllczogY2F0ZWdvcmllc1ZpZXcsXHJcbiAgICAgIC8vIHZpZXc6IHRoaXMuY3VycmVudE9uYm9hcmRpbmcudmlldyxcclxuICAgICAgdGlja2V0czogdGhpcy5jdXJyZW50T25ib2FyZGluZz8udnRpY2tldHMsXHJcbiAgICAgIGNyZWF0ZWRBdDogdGhpcy5jdXJyZW50T25ib2FyZGluZz8uY3JlYXRlZEF0IHx8IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSxcclxuICAgICAgdXNlcjogdXNlcixcclxuICAgICAgTmFtZTogdGhpcy5jdXJyZW50T25ib2FyZGluZz8udnRlbXBsYXRlc1swXT8uTmFtZSB8fCB0aGlzLmN1cnJlbnRUZW1wbGF0ZT8uTmFtZVxyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG4gIG9uQ3JlYXRlRHluYW1pY0Zvcm0oKSB7XHJcbiAgICB0aGlzLmZvcm0gPSB0aGlzLmZiLmdyb3VwKHtcclxuICAgICAgVGVtcGxhdGVJZDogWzAsIFZhbGlkYXRvcnMucmVxdWlyZWRdXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGNhdE5hbWVTdGFydChzdHI6IHN0cmluZykge1xyXG4gICAgY29uc3Qgdm93ZWxzID0gWydhJywgJ2UnLCAnaScsICdvJywgJ3UnLCAneSddO1xyXG4gICAgcmV0dXJuIHZvd2Vscy5pbmNsdWRlcyhzdHIuc3Vic3RyKDAsIDEpLnRvTG9jYWxlTG93ZXJDYXNlKCkpXHJcbiAgfVxyXG5cclxuICBhc3luYyBvblNlbGVjdChpZCwgb25ib2FyZGluZykge1xyXG4gICAgaWYgKGlkKSB7XHJcbiAgICAgIHRoaXMuY3VycmVudFRlbXBsYXRlID0gYXdhaXQgdGhpcy5zZXJ2aWNlLmdldFByb2ZpbChpZCk7XHJcbiAgICAgIHRoaXMuY2F0ZWdvcmllcyA9IG9uYm9hcmRpbmcgPyBvbmJvYXJkaW5nLmNhdGVnb3JpZXMgOiB0aGlzLmN1cnJlbnRUZW1wbGF0ZS5jYXRlZ29yaWVzXHJcbiAgICAgICAgLmZpbHRlcigoY2F0KSA9PiBjYXQuZXhwYW5kT25ib2FyZGluZylcclxuICAgICAgICAubWFwKChjYXQpID0+IHtcclxuICAgICAgICAgIGlmIChjYXQuZm9ybXMpIHtcclxuICAgICAgICAgICAgY29uc3QgZiA9IGNhdC5mb3Jtc1xyXG4gICAgICAgICAgICAgIC5maWx0ZXIoKGZvcm0pID0+IGZvcm0uZXhwYW5kT25ib2FyZGluZylcclxuICAgICAgICAgICAgICAubWFwKChzdWIpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChzdWIuZm9ybXMpIHtcclxuICAgICAgICAgICAgICAgICAgY29uc3QgcyA9IHN1Yi5mb3Jtcy5maWx0ZXIoKGNoaWxkKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNoaWxkLmZvcm1zKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjID0gY2hpbGQuZm9ybXMuZmlsdGVyKChjaCkgPT4gY2guZXhwYW5kT25ib2FyZGluZylcclxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLmNoaWxkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JtczogY1xyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY2hpbGQ7XHJcbiAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC4uLnN1YixcclxuICAgICAgICAgICAgICAgICAgICBmb3Jtczogc1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc3ViO1xyXG4gICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgLi4uY2F0LFxyXG4gICAgICAgICAgICAgIGZvcm1zOiBmXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHJldHVybiBjYXRcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZXhpc3RTdWJGb3JtKGZvcm1zKSB7XHJcbiAgICBsZXQgZXhpc3QgPSBmYWxzZTtcclxuICAgIGlmIChmb3Jtcykge1xyXG4gICAgICBmb3IgKGNvbnN0IHN1YiBvZiBmb3Jtcykge1xyXG4gICAgICAgIGlmIChzdWIuZm9ybXMpIHtcclxuICAgICAgICAgIGV4aXN0ID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBleGlzdFxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzY3JvbGxUb0ZpcnN0SW52YWxpZENvbnRyb2woKSB7XHJcbiAgICBsZXQgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb3JtJyk7XHJcbiAgICBsZXQgZmlyc3RJbnZhbGlkQ29udHJvbCA9IGZvcm0uZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbmctaW52YWxpZCcpWzBdO1xyXG4gICAgZmlyc3RJbnZhbGlkQ29udHJvbC5zY3JvbGxJbnRvVmlldyh7IGJlaGF2aW9yOiAnc21vb3RoJywgYmxvY2s6ICdjZW50ZXInIH0pO1xyXG4gICAgKGZpcnN0SW52YWxpZENvbnRyb2wgYXMgSFRNTEVsZW1lbnQpLmZvY3VzKCk7XHJcbiAgfVxyXG5cclxuICBvbkNoYW5nZUNhdGVnb3J5KCkge1xyXG4gICAgY29uc3QgY2hlY2tNYW5kYXRvcnkgPSAoZmllbGQpID0+ICEhZmllbGQudmFsdWUgJiYgZmllbGQuaXNNYW5kYXRvcnkgJiYgKGZpZWxkLnR5cGUgIT09IFwiY2hlY2tib3hfbXVsdGlwbGVcIiB8fCBmaWVsZC50eXBlICE9PSAnY2hlY2tib3gnKSB8fCAhZmllbGQuaXNNYW5kYXRvcnkgfHwgZmllbGQudHlwZSA9PT0gXCJjaGVja2JveF9tdWx0aXBsZVwiIHx8IGZpZWxkLnR5cGUgPT09ICdjaGVja2JveCcgfHwgZmllbGQudHlwZSA9PT0gJ3RvZ2dsZSdcclxuICAgIHJldHVybiB0aGlzLmNhdGVnb3JpZXMuZXZlcnkoKGNhdCkgPT4gY2F0LmZvcm1zLmV2ZXJ5KChmaWVsZCkgPT4ge1xyXG4gICAgICBpZiAoZmllbGQuZm9ybXMpIHtcclxuICAgICAgICByZXR1cm4gZmllbGQuZm9ybXMuZXZlcnkoKGZvcm0pID0+IHtcclxuICAgICAgICAgIGlmIChmb3JtLmZvcm1zKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmb3JtLmZvcm1zLmV2ZXJ5KChjaGlsZCkgPT4ge1xyXG4gICAgICAgICAgICAgIHJldHVybiBjaGVja01hbmRhdG9yeShjaGlsZClcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHJldHVybiBjaGVja01hbmRhdG9yeShmb3JtKVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGNoZWNrTWFuZGF0b3J5KGZpZWxkKVxyXG4gICAgfSkpO1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgb25TdWJtaXQoKSB7XHJcbiAgICBpZiAodGhpcy5mb3JtLnZhbGlkICYmIHRoaXMub25DaGFuZ2VDYXRlZ29yeSgpKSB7XHJcbiAgICAgIHRoaXMubG9hZGluZyA9IHRydWU7XHJcbiAgICAgIHRoaXMuc3VibWl0TGFiZWwgPSBcIkNoYXJnZW1lbnQuLi5cIlxyXG4gICAgICBjb25zdCByZXN1bHQgPVxyXG4gICAgICAgIHRoaXMub25ib2FyZGluZ0lkICYmIHRoaXMub25ib2FyZGluZ0lkICE9PSBcIjBcIlxyXG4gICAgICAgICAgPyBhd2FpdCB0aGlzLnNlcnZpY2UudXBkYXRlT25ib2FyZGluZyh7XHJcbiAgICAgICAgICAgIC4uLnRoaXMuZm9ybS52YWx1ZSxcclxuICAgICAgICAgICAgY2F0ZWdvcmllczogdGhpcy5jYXRlZ29yaWVzLFxyXG4gICAgICAgICAgICBGaW5pc2hlZDogdHJ1ZSxcclxuICAgICAgICAgICAgX2lkOiB0aGlzLm9uYm9hcmRpbmdJZCxcclxuICAgICAgICAgICAgdGlja2V0czogdGhpcy5jdXJyZW50T25ib2FyZGluZz8udnRpY2tldHM/Lm1hcCgodGlja2V0KSA9PiB0aWNrZXQuSWQpXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgOiBhd2FpdCB0aGlzLnNlcnZpY2UuY3JlYXRlT25ib2FyZGluZyh7XHJcbiAgICAgICAgICAgIC4uLnRoaXMuZm9ybS52YWx1ZSxcclxuICAgICAgICAgICAgY2F0ZWdvcmllczogdGhpcy5jYXRlZ29yaWVzLFxyXG4gICAgICAgICAgICBGaW5pc2hlZDogdHJ1ZSxcclxuICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgaWYgKHJlc3VsdCkge1xyXG4gICAgICAgIGlmICh0aGlzLm9uYm9hcmRpbmdJZCAmJiB0aGlzLm9uYm9hcmRpbmdJZCAhPT0gXCIwXCIpIHtcclxuICAgICAgICAgIHRoaXMuY2F0ZWdvcmllcyA9IHJlc3VsdC5jYXRlZ29yaWVzO1xyXG4gICAgICAgICAgdGhpcy5jdXJyZW50T25ib2FyZGluZyA9IHJlc3VsdDtcclxuICAgICAgICB9XHJcbiAgICAgICAgYXdhaXQgdGhpcy5zZXJ2aWNlLmdldEFsbFByb2ZpbCgpO1xyXG4gICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuc3VibWl0TGFiZWwgPSBcIkVudm95ZXIgbWEgZmljaGVcIlxyXG4gICAgICAgIHRoaXMuY2FuRXhpdCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5zaG93TW9kZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW3RoaXMuc2VydmljZS5tYWluUGF0aCArICcvcmVxdWVzdHMnXSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJlcnJyb3IuLi4uLi5cIik7XHJcbiAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5zdWJtaXRMYWJlbCA9IFwiRW52b3llciBtYSBmaWNoZVwiXHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuc2Nyb2xsVG9GaXJzdEludmFsaWRDb250cm9sKClcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGFzeW5jIG9uUmVzdW1lTGF0ZXIoKSB7XHJcbiAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xyXG4gICAgdGhpcy5yZXN1bWVMYWJlbCA9IFwiQ2hhcmdlbWVudC4uLlwiXHJcbiAgICBjb25zdCByZXN1bHQgPVxyXG4gICAgICB0aGlzLm9uYm9hcmRpbmdJZCAmJiB0aGlzLm9uYm9hcmRpbmdJZCAhPT0gXCIwXCJcclxuICAgICAgICA/IGF3YWl0IHRoaXMuc2VydmljZS51cGRhdGVPbmJvYXJkaW5nKHtcclxuICAgICAgICAgIC4uLnRoaXMuZm9ybS52YWx1ZSxcclxuICAgICAgICAgIGNhdGVnb3JpZXM6IHRoaXMuY2F0ZWdvcmllcyxcclxuICAgICAgICAgIEZpbmlzaGVkOiB0cnVlLFxyXG4gICAgICAgICAgX2lkOiB0aGlzLm9uYm9hcmRpbmdJZCxcclxuICAgICAgICAgIHRpY2tldHM6IHRoaXMuY3VycmVudE9uYm9hcmRpbmc/LnZ0aWNrZXRzPy5tYXAoKHRpY2tldCkgPT4gdGlja2V0LklkKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgOiBhd2FpdCB0aGlzLnNlcnZpY2UuY3JlYXRlT25ib2FyZGluZyh7XHJcbiAgICAgICAgICAuLi50aGlzLmZvcm0udmFsdWUsXHJcbiAgICAgICAgICBjYXRlZ29yaWVzOiB0aGlzLmNhdGVnb3JpZXMsXHJcbiAgICAgICAgICBGaW5pc2hlZDogZmFsc2UsXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgaWYgKHJlc3VsdCkge1xyXG4gICAgICBpZiAodGhpcy5vbmJvYXJkaW5nSWQgJiYgdGhpcy5vbmJvYXJkaW5nSWQgIT09IFwiMFwiKSB7XHJcbiAgICAgICAgdGhpcy5jYXRlZ29yaWVzID0gcmVzdWx0LmNhdGVnb3JpZXM7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50T25ib2FyZGluZyA9IHJlc3VsdDtcclxuICAgICAgfVxyXG4gICAgICBhd2FpdCB0aGlzLnNlcnZpY2UuZ2V0QWxsUHJvZmlsKCk7XHJcbiAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICB0aGlzLmNhbkV4aXQgPSB0cnVlO1xyXG4gICAgICB0aGlzLnNob3dNb2RlID0gdHJ1ZTtcclxuICAgICAgdGhpcy5yZXN1bWVMYWJlbCA9IFwiUmVwcmVuZHJlIHBsdXMgdGFyZFwiXHJcbiAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFt0aGlzLnNlcnZpY2UubWFpblBhdGggKyAnL3JlcXVlc3RzJ10pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc29sZS5sb2coXCJlcnJyb3IuLi4uLi5cIik7XHJcbiAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICB0aGlzLnJlc3VtZUxhYmVsID0gXCJSZXByZW5kcmUgcGx1cyB0YXJkXCJcclxuXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpbmdvcmVEZWZhdWx0QWN0aW9uKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICB9XHJcblxyXG5cclxuICBvbkNoZWNrQ29uZGl0aW9uTG9jYXRpb25WYWx1ZShpc2NvbmRpdGlvbiwgbG9jYXRpb24sIGNvbmRpdGlvblZhbHVlKSB7XHJcbiAgICBpZiAoIWlzY29uZGl0aW9uKSB7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgaWYgKGxvY2F0aW9uLmxldmVsID09PSAxKSB7XHJcbiAgICAgIGlmICh0aGlzLmNhdGVnb3JpZXNbbG9jYXRpb24uY2F0ZWdvcnlJbmRleF0uZm9ybXNbbG9jYXRpb24uY3VycmVudEluZGV4XS50eXBlID09PSAnY2hlY2tib3hfbXVsdGlwbGUnKSB7XHJcbiAgICAgICAgY29uc3QgYXJyYXkgPSB0aGlzLmNhdGVnb3JpZXNbbG9jYXRpb24uY2F0ZWdvcnlJbmRleF0uZm9ybXNbbG9jYXRpb24uY3VycmVudEluZGV4XS5kZWZhdWx0VmFsdWUuZmlsdGVyKChjaGVjaykgPT4gY2hlY2suY2hlY2tlZClcclxuICAgICAgICBsZXQgY2hlY2tlZCA9IGZhbHNlO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgIGlmIChhcnJheVtpXS52YWx1ZSA9PSBjb25kaXRpb25WYWx1ZSkge1xyXG4gICAgICAgICAgICBjaGVja2VkID0gdHJ1ZTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBjaGVja2VkO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNhdGVnb3JpZXNbbG9jYXRpb24uY2F0ZWdvcnlJbmRleF0uZm9ybXNbbG9jYXRpb24uY3VycmVudEluZGV4XS52YWx1ZSA9PT0gY29uZGl0aW9uVmFsdWVcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIGlmIChsb2NhdGlvbi5sZXZlbCA9PT0gMikge1xyXG4gICAgICBpZiAodGhpcy5jYXRlZ29yaWVzW2xvY2F0aW9uLmNhdGVnb3J5SW5kZXhdLmZvcm1zW2xvY2F0aW9uLmZvcm1JbmRleF0uZm9ybXNbbG9jYXRpb24uY3VycmVudEluZGV4XS50eXBlID09PSAnY2hlY2tib3hfbXVsdGlwbGUnKSB7XHJcbiAgICAgICAgY29uc3QgYXJyYXkgPSB0aGlzLmNhdGVnb3JpZXNbbG9jYXRpb24uY2F0ZWdvcnlJbmRleF0uZm9ybXNbbG9jYXRpb24uZm9ybUluZGV4XS5mb3Jtc1tsb2NhdGlvbi5jdXJyZW50SW5kZXhdLmRlZmF1bHRWYWx1ZS5maWx0ZXIoKGNoZWNrKSA9PiBjaGVjay5jaGVja2VkKVxyXG4gICAgICAgIGxldCBjaGVja2VkID0gZmFsc2U7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgaWYgKGFycmF5W2ldLnZhbHVlID09IGNvbmRpdGlvblZhbHVlKSB7XHJcbiAgICAgICAgICAgIGNoZWNrZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGNoZWNrZWQ7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY2F0ZWdvcmllc1tsb2NhdGlvbi5jYXRlZ29yeUluZGV4XS5mb3Jtc1tsb2NhdGlvbi5mb3JtSW5kZXhdLmZvcm1zW2xvY2F0aW9uLmN1cnJlbnRJbmRleF0udmFsdWUgPT09IGNvbmRpdGlvblZhbHVlXHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSBpZiAobG9jYXRpb24ubGV2ZWwgPT09IDMpIHtcclxuICAgICAgaWYgKHRoaXMuY2F0ZWdvcmllc1tsb2NhdGlvbi5jYXRlZ29yeUluZGV4XS5mb3Jtc1tsb2NhdGlvbi5mb3JtSW5kZXhdLmZvcm1zW2xvY2F0aW9uLnN1YkluZGV4XS5mb3Jtc1tsb2NhdGlvbi5jdXJyZW50SW5kZXhdLnR5cGUgPT09ICdjaGVja2JveF9tdWx0aXBsZScpIHtcclxuICAgICAgICBjb25zdCBhcnJheSA9IHRoaXMuY2F0ZWdvcmllc1tsb2NhdGlvbi5jYXRlZ29yeUluZGV4XS5mb3Jtc1tsb2NhdGlvbi5mb3JtSW5kZXhdLmZvcm1zW2xvY2F0aW9uLnN1YkluZGV4XS5mb3Jtc1tsb2NhdGlvbi5jdXJyZW50SW5kZXhdLmRlZmF1bHRWYWx1ZS5maWx0ZXIoKGNoZWNrKSA9PiBjaGVjay5jaGVja2VkKVxyXG4gICAgICAgIGxldCBjaGVja2VkID0gZmFsc2U7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgaWYgKGFycmF5W2ldLnZhbHVlID09IGNvbmRpdGlvblZhbHVlKSB7XHJcbiAgICAgICAgICAgIGNoZWNrZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGNoZWNrZWQ7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY2F0ZWdvcmllc1tsb2NhdGlvbi5jYXRlZ29yeUluZGV4XS5mb3Jtc1tsb2NhdGlvbi5mb3JtSW5kZXhdLmZvcm1zW2xvY2F0aW9uLnN1YkluZGV4XS5mb3Jtc1tsb2NhdGlvbi5jdXJyZW50SW5kZXhdLnZhbHVlID09PSBjb25kaXRpb25WYWx1ZVxyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG4gIGNoZWNrU3ViRm9ybShmb3Jtcykge1xyXG4gICAgbGV0IGhhc1N1YkZvcm0gPSBmYWxzZTtcclxuICAgIGZvciAoY29uc3QgZm9ybSBvZiBmb3Jtcykge1xyXG4gICAgICBpZiAoZm9ybS5mb3JtcyAmJiBmb3JtLmZvcm1zLmxlbmd0aCA+IDApIHtcclxuICAgICAgICBoYXNTdWJGb3JtID0gdHJ1ZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGhhc1N1YkZvcm1cclxuICB9XHJcblxyXG4gIG9uU2VsZWN0TWVudShpKSB7XHJcbiAgICB0aGlzLnNlbGVjdGVkTWVudSA9IGk7XHJcbiAgICB0aGlzLnNlbGVjdGVkQ2F0ZWdvcnlJbmRleCA9IGk7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgdGhpcy5zZWxlY3RlZENhdGVnb3J5SW5kZXggPSBudWxsO1xyXG4gICAgfSwgMjAwMCk7XHJcbiAgfVxyXG5cclxuICBvbkNoZWNrVmFsdWUoZXZlbnQ6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuaW52YWxpZGVWYWx1ZSA9IGV2ZW50O1xyXG4gIH1cclxuXHJcbiAgb25MaW5rKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gIH1cclxuXHJcbiAgb25TaG93TW9kZSgpIHtcclxuICAgIHRoaXMuc2hvd01vZGUgPSAhdGhpcy5zaG93TW9kZTtcclxuICAgIHRoaXMub25Mb2FkVmlld0RldGFpbCh0aGlzLmNhdGVnb3JpZXMpXHJcbiAgfVxyXG5cclxufVxyXG4iLCI8bWFpbj5cclxuICAgIDxkaXYgY2xhc3M9XCJjb250ZW50XCI+XHJcbiAgICAgICAgPGZvcm0gKm5nSWY9XCIhc2hvd01vZGVcIiBbZm9ybUdyb3VwXT1cImZvcm1cIiBpZD1cImZvcm1cIiAoc3VibWl0KT1cIm9uU3VibWl0KClcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhdGVnb3J5XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGl0bGUtZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDI+SW50w6lncmF0aW9uIHByb2ZpbCB7e2N1cnJlbnRUZW1wbGF0ZT8uTmFtZX19IDxtYXQtaWNvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9XCJtYXJnaW4tbGVmdDogMjBweDsgY3Vyc29yOiBwb2ludGVyO1wiIChjbGljayk9XCJvblNob3dNb2RlKClcIj52aXNpYmlsaXR5PC9tYXQtaWNvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gbWF0LWJ1dHRvbiBbZGlzYWJsZWRdPVwibG9hZGluZ1wiIGNsYXNzPVwicmVnaXN0ZXItYnV0dG9uXCIgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJvblJlc3VtZUxhdGVyKClcIj57e3Jlc3VtZUxhYmVsfX08L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cImZpZWxkc1wiIGNsYXNzPVwiZmllbGRzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgW25neFNjcm9sbFRvXT1cIicjJytjYXRlZ29yeS5uYW1lXCIgY2xhc3M9XCJtZW51LWl0ZW1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKm5nRm9yPVwibGV0IGNhdGVnb3J5IG9mIGNhdGVnb3JpZXM7ICBsZXQgaT1pbmRleFwiIFtpZF09XCJjYXRlZ29yeS5uYW1lKyd4J1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+e3tjYXRlZ29yeS5uYW1lfX08L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2F0ZWdvcnktY29udGFpbmVyXCIgKHNjcm9sbCk9XCJvblNjcm9sbCgkZXZlbnQpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzPVwiY2F0ZWdvcnktaXRlbSBjb250ZW50LWl0ZW1cIiAqbmdGb3I9XCJsZXQgY2F0ZWdvcnkgb2YgY2F0ZWdvcmllczsgIGxldCBpPWluZGV4XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtpZF09XCJjYXRlZ29yeS5uYW1lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmllbGQtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZC1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXRlZ29yeS10aXRsZS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzPVwiY2F0ZWdvcnktbmFtZVwiPnt7Y2F0ZWdvcnkubmFtZX19PC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIExpc3RlcyBkZXMgaW5mb3JtYXRpb25zIG7DqWNlc3NhaXJlcyBwb3VyIGxhIGNyw6lhdGlvbiBkZSB7e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhdE5hbWVTdGFydChjYXRlZ29yeS5uYW1lKSA/IFwibCdcIiArIGNhdGVnb3J5Lm5hbWUgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5Lm5hbWUgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxtYXQtc2VsZWN0IHBsYWNlaG9sZGVyPVwiQ29tcGFueVwiIFsobmdNb2RlbCldPVwiY2F0ZWdvcnkuc2VsZWN0b3IudmFsdWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW25nTW9kZWxPcHRpb25zXT1cIntzdGFuZGFsb25lOiB0cnVlfVwiIHJlcXVpcmVkICpuZ0lmPVwiY2F0ZWdvcnkuc2VsZWN0b3JcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9XCJ3aWR0aDogMTUwcHg7XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bWF0LW9wdGlvbiAqbmdGb3I9XCJsZXQgc2VsZWN0IG9mIGNhdGVnb3J5LnNlbGVjdG9yLmRlZmF1bHRWYWx1ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3ZhbHVlXT1cInNlbGVjdC52YWx1ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7c2VsZWN0LnZhbHVlfX08L21hdC1vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbWF0LXNlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG1hdC1zZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICpuZ0lmPVwiY2F0ZWdvcnkudGlja2V0VHlwZT8udmFsdWUgJiYgY2F0ZWdvcnkuc2VsZWN0b3IudmFsdWU9PT0nTm93dGVhbSdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJUeXBlIGRlIHRpY2tldFwiIFsobmdNb2RlbCldPVwiY2F0ZWdvcnkudGlja2V0VHlwZS52YWx1ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbbmdNb2RlbE9wdGlvbnNdPVwie3N0YW5kYWxvbmU6IHRydWV9XCIgcmVxdWlyZWQgc3R5bGU9XCJ3aWR0aDogMTUwcHg7XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bWF0LW9wdGlvbiAqbmdGb3I9XCJsZXQgc2VsZWN0IG9mIGNhdGVnb3J5LnRpY2tldFR5cGUuZGVmYXVsdFZhbHVlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbdmFsdWVdPVwic2VsZWN0LmtleVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7c2VsZWN0LnZhbHVlfX08L21hdC1vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbWF0LXNlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2F0ZWdvcnktY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZC1jYXRlZ29yeVwiICpuZ0Zvcj1cImxldCBmaWVsZCBvZiBjYXRlZ29yeS5mb3JtcztsZXQgaj1pbmRleFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbaWRdPVwiZmllbGQua2V5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtzdHlsZS53aWR0aF09XCJmaWVsZC5mb3JtcyA/ICcxMDAlJyA6IGZpZWxkV2lkdGgoZmllbGQudHlwZSxjYXRlZ29yeS5mb3Jtcy5sZW5ndGgsailcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbm5lci1sb29wXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqbmdJZj1cImZpZWxkLmV4cGFuZE9uYm9hcmRpbmcgJiYgb25DaGVja0NvbmRpdGlvbkxvY2F0aW9uVmFsdWUoZmllbGQuaXNDb25kaXRpb25hbCxmaWVsZC5jb25kaXRpb25Mb2NhdGlvbixmaWVsZC5jb25kaXRpb25WYWx1ZSlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmllbGRzLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpZWxkcy1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaWItc3ViLWNyZWF0ZS1vbmJvYXJkaW5nIFtmaWVsZF09XCJmaWVsZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2xlbmd0aF09XCJjYXRlZ29yeT8uZm9ybXM/Lmxlbmd0aFwiIFtpXT1cImlcIiBbal09XCJqXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNoaWxkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbm5lci1jaGlsZFwiICpuZ0lmPVwiZmllbGQuZm9ybXMgJiYgZmllbGQudmFsdWVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbm5lci1jaGlsZC1jb250ZW50XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqbmdGb3I9XCJsZXQgY2hpbGQgb2YgZmllbGQuZm9ybXM7bGV0IGs9aW5kZXhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtpZF09XCJjaGlsZC5rZXlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtzdHlsZS53aWR0aF09XCJjaGlsZC5mb3JtcyA/ICcxMDAlJyA6IGZpZWxkV2lkdGgoY2hpbGQudHlwZSxmaWVsZC5mb3Jtcy5sZW5ndGgsaylcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5uZXItbG9vcFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICpuZ0lmPVwiY2hpbGQuZXhwYW5kT25ib2FyZGluZyAmJiBvbkNoZWNrQ29uZGl0aW9uTG9jYXRpb25WYWx1ZShjaGlsZC5pc0NvbmRpdGlvbmFsLGNoaWxkLmNvbmRpdGlvbkxvY2F0aW9uLGNoaWxkLmNvbmRpdGlvblZhbHVlKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmllbGRzLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZHMtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpYi1zdWItY3JlYXRlLW9uYm9hcmRpbmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2ZpZWxkXT1cImNoaWxkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2xlbmd0aF09XCJmaWVsZD8uZm9ybXM/Lmxlbmd0aFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtpXT1cImpcIiBbal09XCJrXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKG9uQ2hlY2tWYWx1ZSk9XCJvbkNoZWNrVmFsdWUoJGV2ZW50KVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2hpbGRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbm5lci1jaGlsZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJjaGlsZC5mb3JtcyAmJiBjaGlsZC52YWx1ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbm5lci1jaGlsZC1jb250ZW50XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKm5nRm9yPVwibGV0IGMyIG9mIGNoaWxkLmZvcm1zO2xldCBsPWluZGV4XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2lkXT1cImMyLmtleVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtzdHlsZS53aWR0aF09XCJjMi5mb3JtcyA/ICcxMDAlJyA6IGZpZWxkV2lkdGgoYzIudHlwZSxjaGlsZC5mb3Jtcy5sZW5ndGgsbClcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlubmVyLWxvb3BcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJjMi5leHBhbmRPbmJvYXJkaW5nICYmIG9uQ2hlY2tDb25kaXRpb25Mb2NhdGlvblZhbHVlKGMyLmlzQ29uZGl0aW9uYWwsYzIuY29uZGl0aW9uTG9jYXRpb24sYzIuY29uZGl0aW9uVmFsdWUpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmaWVsZHMtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmaWVsZHMtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaWItc3ViLWNyZWF0ZS1vbmJvYXJkaW5nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbZmllbGRdPVwiYzJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2xlbmd0aF09XCJjaGlsZD8uZm9ybXM/Lmxlbmd0aFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbaV09XCJrXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtqXT1cImxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKG9uQ2hlY2tWYWx1ZSk9XCJvbkNoZWNrVmFsdWUoJGV2ZW50KVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiY2hpbGRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpYi1zdWItY3JlYXRlLW9uYm9hcmRpbmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saWItc3ViLWNyZWF0ZS1vbmJvYXJkaW5nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saWItc3ViLWNyZWF0ZS1vbmJvYXJkaW5nPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhY3Rpb25zLWJ1dHRvblwiIHN0eWxlPVwibWFyZ2luLWJvdHRvbTogNTBweDtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gW2Rpc2FibGVkXT1cImxvYWRpbmcgfHwgIWZvcm0udmFsaWRcIiBtYXQtYnV0dG9uIGNsYXNzPVwicmVnaXN0ZXItYnV0dG9uIHNlbmQtZm9ybVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiPnt7c3VibWl0TGFiZWx9fTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBbZGlzYWJsZWRdPVwibG9hZGluZ1wiIG1hdC1idXR0b24gY2xhc3M9XCJyZWdpc3Rlci1idXR0b24gcmVzdW1lXCIgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cIm9uUmVzdW1lTGF0ZXIoKVwiPnt7cmVzdW1lTGFiZWx9fTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDxsaWItb25ib2FyZGluZy1kZXRhaWwgKm5nSWY9XCJzaG93TW9kZVwiIChvblNob3dNb2RlKT1cIm9uU2hvd01vZGUoKVwiIFtkZXRhaWxWaWV3XT1cImRldGFpbFZpZXdcIj5cclxuICAgICAgICA8L2xpYi1vbmJvYXJkaW5nLWRldGFpbD5cclxuICAgIDwvZGl2PlxyXG5cclxuPC9tYWluPiJdfQ==