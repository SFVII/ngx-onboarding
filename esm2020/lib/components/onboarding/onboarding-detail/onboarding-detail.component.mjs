import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { locales } from '../../../i18n';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "../../../onboarding.service";
import * as i3 from "@angular/material/bottom-sheet";
import * as i4 from "@angular/common";
import * as i5 from "@angular/material/icon";
import * as i6 from "@nicky-lenaers/ngx-scroll-to";
import * as i7 from "@angular/material/button";
function OnboardingDetailComponent_mat_icon_4_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-icon", 19);
    i0.ɵɵlistener("click", function OnboardingDetailComponent_mat_icon_4_Template_mat_icon_click_0_listener() { i0.ɵɵrestoreView(_r8); const ctx_r7 = i0.ɵɵnextContext(); return ctx_r7.onEdit(); });
    i0.ɵɵtext(1, "edit ");
    i0.ɵɵelementEnd();
} }
function OnboardingDetailComponent_ng_container_24_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "span");
    i0.ɵɵelementStart(2, "mat-icon", 8);
    i0.ɵɵtext(3, "phone");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(4);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1(" ", ctx_r1.detailView == null ? null : ctx_r1.detailView.user == null ? null : ctx_r1.detailView.user.MobilePhone == null ? null : ctx_r1.detailView.user.MobilePhone.internationalNumber, " ");
} }
function OnboardingDetailComponent_ng_container_25_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "span");
    i0.ɵɵelementStart(2, "mat-icon", 8);
    i0.ɵɵtext(3, "smartphone");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(4);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1(" ", ctx_r2.detailView == null ? null : ctx_r2.detailView.user == null ? null : ctx_r2.detailView.user.Phone == null ? null : ctx_r2.detailView.user.Phone.internationalNumber, " ");
} }
function OnboardingDetailComponent_li_28_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li", 20)(1, "a");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const category_r9 = ctx.$implicit;
    const i_r10 = ctx.index;
    i0.ɵɵclassMap(i_r10 === 0 ? "active" : "");
    i0.ɵɵproperty("ngxScrollTo", "#" + category_r9.name)("id", category_r9.name + "x");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(category_r9.name);
} }
function OnboardingDetailComponent_section_30_div_9_ng_container_1_ng_container_3_li_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r20 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(item_r20);
} }
function OnboardingDetailComponent_section_30_div_9_ng_container_1_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "ul", 30);
    i0.ɵɵtemplate(2, OnboardingDetailComponent_section_30_div_9_ng_container_1_ng_container_3_li_2_Template, 2, 1, "li", 31);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const forms_r14 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", forms_r14.value);
} }
function OnboardingDetailComponent_section_30_div_9_ng_container_1_h4_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h4");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const forms_r14 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r18 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r18.onFormatDisplayValue(forms_r14.value).value, " ");
} }
function OnboardingDetailComponent_section_30_div_9_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "p", 29);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, OnboardingDetailComponent_section_30_div_9_ng_container_1_ng_container_3_Template, 3, 1, "ng-container", 9);
    i0.ɵɵtemplate(4, OnboardingDetailComponent_section_30_div_9_ng_container_1_h4_4_Template, 2, 1, "h4", 9);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const forms_r14 = i0.ɵɵnextContext().$implicit;
    const ctx_r15 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(forms_r14.label);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r15.onFormatDisplayValue(forms_r14.value).type === "array");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r15.onFormatDisplayValue(forms_r14.value).type !== "array");
} }
function OnboardingDetailComponent_section_30_div_9_ng_container_2_div_3_ng_container_1_ng_container_3_li_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r31 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(item_r31);
} }
function OnboardingDetailComponent_section_30_div_9_ng_container_2_div_3_ng_container_1_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "ul", 30);
    i0.ɵɵtemplate(2, OnboardingDetailComponent_section_30_div_9_ng_container_2_div_3_ng_container_1_ng_container_3_li_2_Template, 2, 1, "li", 31);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const sub_r25 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", sub_r25.value);
} }
function OnboardingDetailComponent_section_30_div_9_ng_container_2_div_3_ng_container_1_h4_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h4");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const sub_r25 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r29 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r29.onFormatDisplayValue(sub_r25.value).value, "");
} }
function OnboardingDetailComponent_section_30_div_9_ng_container_2_div_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "p", 29);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, OnboardingDetailComponent_section_30_div_9_ng_container_2_div_3_ng_container_1_ng_container_3_Template, 3, 1, "ng-container", 9);
    i0.ɵɵtemplate(4, OnboardingDetailComponent_section_30_div_9_ng_container_2_div_3_ng_container_1_h4_4_Template, 2, 1, "h4", 9);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const sub_r25 = i0.ɵɵnextContext().$implicit;
    const ctx_r26 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(sub_r25.label);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r26.onFormatDisplayValue(sub_r25.value).type === "array");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r26.onFormatDisplayValue(sub_r25.value).type !== "array");
} }
function OnboardingDetailComponent_section_30_div_9_ng_container_2_div_3_ng_container_2_div_3_ng_container_1_ng_container_3_li_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r42 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(item_r42);
} }
function OnboardingDetailComponent_section_30_div_9_ng_container_2_div_3_ng_container_2_div_3_ng_container_1_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "ul", 30);
    i0.ɵɵtemplate(2, OnboardingDetailComponent_section_30_div_9_ng_container_2_div_3_ng_container_2_div_3_ng_container_1_ng_container_3_li_2_Template, 2, 1, "li", 31);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const child_r36 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", child_r36.value);
} }
function OnboardingDetailComponent_section_30_div_9_ng_container_2_div_3_ng_container_2_div_3_ng_container_1_h4_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h4");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const child_r36 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r40 = i0.ɵɵnextContext(6);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r40.onFormatDisplayValue(child_r36.value).value, "");
} }
function OnboardingDetailComponent_section_30_div_9_ng_container_2_div_3_ng_container_2_div_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "p", 29);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, OnboardingDetailComponent_section_30_div_9_ng_container_2_div_3_ng_container_2_div_3_ng_container_1_ng_container_3_Template, 3, 1, "ng-container", 9);
    i0.ɵɵtemplate(4, OnboardingDetailComponent_section_30_div_9_ng_container_2_div_3_ng_container_2_div_3_ng_container_1_h4_4_Template, 2, 1, "h4", 9);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const child_r36 = i0.ɵɵnextContext().$implicit;
    const ctx_r37 = i0.ɵɵnextContext(6);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(child_r36.label);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r37.onFormatDisplayValue(child_r36.value).type === "array");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r37.onFormatDisplayValue(child_r36.value).type !== "array");
} }
function OnboardingDetailComponent_section_30_div_9_ng_container_2_div_3_ng_container_2_div_3_ng_container_2_div_3_ng_container_3_li_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r51 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(item_r51);
} }
function OnboardingDetailComponent_section_30_div_9_ng_container_2_div_3_ng_container_2_div_3_ng_container_2_div_3_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "ul", 30);
    i0.ɵɵtemplate(2, OnboardingDetailComponent_section_30_div_9_ng_container_2_div_3_ng_container_2_div_3_ng_container_2_div_3_ng_container_3_li_2_Template, 2, 1, "li", 31);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const c2_r47 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", c2_r47.value);
} }
function OnboardingDetailComponent_section_30_div_9_ng_container_2_div_3_ng_container_2_div_3_ng_container_2_div_3_h4_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h4");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const c2_r47 = i0.ɵɵnextContext().$implicit;
    const ctx_r49 = i0.ɵɵnextContext(8);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r49.onFormatDisplayValue(c2_r47.value).value, "");
} }
function OnboardingDetailComponent_section_30_div_9_ng_container_2_div_3_ng_container_2_div_3_ng_container_2_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 28)(1, "p", 29);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, OnboardingDetailComponent_section_30_div_9_ng_container_2_div_3_ng_container_2_div_3_ng_container_2_div_3_ng_container_3_Template, 3, 1, "ng-container", 9);
    i0.ɵɵtemplate(4, OnboardingDetailComponent_section_30_div_9_ng_container_2_div_3_ng_container_2_div_3_ng_container_2_div_3_h4_4_Template, 2, 1, "h4", 9);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const c2_r47 = ctx.$implicit;
    const ctx_r46 = i0.ɵɵnextContext(8);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(c2_r47.label);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r46.onFormatDisplayValue(c2_r47.value).type === "array");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r46.onFormatDisplayValue(c2_r47.value).type !== "array");
} }
function OnboardingDetailComponent_section_30_div_9_ng_container_2_div_3_ng_container_2_div_3_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "h3");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, OnboardingDetailComponent_section_30_div_9_ng_container_2_div_3_ng_container_2_div_3_ng_container_2_div_3_Template, 5, 3, "div", 27);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const child_r36 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(child_r36.label);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", child_r36.forms);
} }
function OnboardingDetailComponent_section_30_div_9_ng_container_2_div_3_ng_container_2_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 28);
    i0.ɵɵtemplate(1, OnboardingDetailComponent_section_30_div_9_ng_container_2_div_3_ng_container_2_div_3_ng_container_1_Template, 5, 3, "ng-container", 9);
    i0.ɵɵtemplate(2, OnboardingDetailComponent_section_30_div_9_ng_container_2_div_3_ng_container_2_div_3_ng_container_2_Template, 4, 2, "ng-container", 9);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const child_r36 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !child_r36.forms);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", child_r36.forms);
} }
function OnboardingDetailComponent_section_30_div_9_ng_container_2_div_3_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "h3");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, OnboardingDetailComponent_section_30_div_9_ng_container_2_div_3_ng_container_2_div_3_Template, 3, 2, "div", 27);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const sub_r25 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(sub_r25.label);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", sub_r25.forms);
} }
function OnboardingDetailComponent_section_30_div_9_ng_container_2_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 28);
    i0.ɵɵtemplate(1, OnboardingDetailComponent_section_30_div_9_ng_container_2_div_3_ng_container_1_Template, 5, 3, "ng-container", 9);
    i0.ɵɵtemplate(2, OnboardingDetailComponent_section_30_div_9_ng_container_2_div_3_ng_container_2_Template, 4, 2, "ng-container", 9);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const sub_r25 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !sub_r25.forms);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", sub_r25.forms);
} }
function OnboardingDetailComponent_section_30_div_9_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "h3");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, OnboardingDetailComponent_section_30_div_9_ng_container_2_div_3_Template, 3, 2, "div", 27);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const forms_r14 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(forms_r14.label);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", forms_r14.forms);
} }
function OnboardingDetailComponent_section_30_div_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 28);
    i0.ɵɵtemplate(1, OnboardingDetailComponent_section_30_div_9_ng_container_1_Template, 5, 3, "ng-container", 9);
    i0.ɵɵtemplate(2, OnboardingDetailComponent_section_30_div_9_ng_container_2_Template, 4, 2, "ng-container", 9);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const forms_r14 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !forms_r14.forms);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", forms_r14.forms);
} }
function OnboardingDetailComponent_section_30_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 21)(1, "div", 22)(2, "div", 23)(3, "div", 24)(4, "h2");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "p", 25);
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd()();
    i0.ɵɵelement(8, "div", 26);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(9, OnboardingDetailComponent_section_30_div_9_Template, 3, 2, "div", 27);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const category_r11 = ctx.$implicit;
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵproperty("id", category_r11.name);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(category_r11.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2(" ", ctx_r4.locale == null ? null : ctx_r4.locale.CATEGORY_SUBTITLE, " ", ctx_r4.catNameStart(category_r11.name) ? "l'" + category_r11.name : category_r11.name, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", category_r11.forms);
} }
function OnboardingDetailComponent_ng_container_38_div_1_button_19_Template(rf, ctx) { if (rf & 1) {
    const _r62 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 45);
    i0.ɵɵlistener("click", function OnboardingDetailComponent_ng_container_38_div_1_button_19_Template_button_click_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r62); const attach_r60 = restoredCtx.$implicit; const ctx_r61 = i0.ɵɵnextContext(3); return ctx_r61.openBottomSheet(attach_r60); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const attach_r60 = ctx.$implicit;
    const ctx_r59 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r59.substr(attach_r60.Name), ".pdf ");
} }
function OnboardingDetailComponent_ng_container_38_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r64 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 33)(1, "div", 34)(2, "button", 35);
    i0.ɵɵlistener("click", function OnboardingDetailComponent_ng_container_38_div_1_Template_button_click_2_listener() { const restoredCtx = i0.ɵɵrestoreView(_r64); const ticket_r58 = restoredCtx.$implicit; const ctx_r63 = i0.ɵɵnextContext(2); return ctx_r63.onViewTicket(ticket_r58); });
    i0.ɵɵelementStart(3, "mat-icon", 8);
    i0.ɵɵtext(4, "list_alt");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "span", 36);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "button", 37);
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(9, "p", 38);
    i0.ɵɵtext(10);
    i0.ɵɵpipe(11, "date");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "div", 39)(13, "h3", 40);
    i0.ɵɵtext(14);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(15, "div", 41);
    i0.ɵɵelement(16, "progress", 42);
    i0.ɵɵelementStart(17, "span", 43);
    i0.ɵɵtext(18);
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(19, OnboardingDetailComponent_ng_container_38_div_1_button_19_Template, 2, 1, "button", 44);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ticket_r58 = ctx.$implicit;
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate1("Ticket ", ticket_r58.CaseNumber, "");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ticket_r58.Status);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(11, 7, ticket_r58.CreatedDate, "dd/MM/yy"));
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ticket_r58.Subject);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("value", ticket_r58.WorkflowProgress || 0);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", ticket_r58.WorkflowProgress, " %");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ticket_r58.Attachments);
} }
function OnboardingDetailComponent_ng_container_38_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, OnboardingDetailComponent_ng_container_38_div_1_Template, 20, 10, "div", 32);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r5.detailView == null ? null : ctx_r5.detailView.tickets);
} }
function OnboardingDetailComponent_div_39_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 33)(1, "p", 46);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r6 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("\"", ctx_r6.locale == null ? null : ctx_r6.locale.NO_TICKET, "\"");
} }
const _c0 = ".onboarding-detail[_ngcontent-%COMP%]{padding-top:30px}.onboarding-detail[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .onboarding-detail[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .onboarding-detail[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .onboarding-detail[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], .onboarding-detail[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%], .onboarding-detail[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]{margin:0;font-style:normal;font-weight:700;line-height:110%;display:flex;align-items:center;color:#242731}.onboarding-detail[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0}.onboarding-detail[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:24px}.onboarding-detail[_ngcontent-%COMP%]   h1.title[_ngcontent-%COMP%]{margin-bottom:33px;margin-top:10px}.onboarding-detail[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:20px}.onboarding-detail[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:18px}.onboarding-detail[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-size:16px}.onboarding-detail[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{font-size:14px}.onboarding-detail[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]{font-size:12px}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-between;background-color:#f4f7f9}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]{width:70%;border-radius:6px;margin-right:2%}@media (max-width: 1200px){.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]{width:50%}}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]{background:transparent;border-radius:6px;padding:10px 10px 10px 0}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:before{content:\".\";font-size:25px;margin:0 10px}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-weight:400;display:flex;align-items:center}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{padding-right:5px}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   p.contact[_ngcontent-%COMP%]{margin-top:10px}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .user-name[_ngcontent-%COMP%]{line-height:30px}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .user-name[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-weight:400;font-size:12px;margin-right:10px}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .user-contact[_ngcontent-%COMP%]{line-height:30px}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]{background:#FFFFFF;border-radius:8px;padding:15px;margin-bottom:30px}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   .category-item-inner[_ngcontent-%COMP%]   .category-description[_ngcontent-%COMP%]{font-style:normal;font-weight:250;font-size:14px;line-height:16px;color:#575f6e;margin-top:5px}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   .category-item-inner[_ngcontent-%COMP%]   .category-item-forms[_ngcontent-%COMP%]{margin-top:20px}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   .category-item-inner[_ngcontent-%COMP%]   .category-item-forms[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]{font-style:normal;font-weight:250;font-size:12px;line-height:16px;display:flex;align-items:center;color:#575f6e}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .right-content[_ngcontent-%COMP%]{background-color:#fff;border-radius:6px;padding:15px;overflow:auto;max-height:85.5vh;margin-right:20px}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .right-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#575f6e}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .right-content[_ngcontent-%COMP%]   .box-ticket-info[_ngcontent-%COMP%]{padding-bottom:20px;padding-top:20px;border-bottom:2px solid #E2E4E5}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .right-content[_ngcontent-%COMP%]   .box-ticket-info[_ngcontent-%COMP%]   .box-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .right-content[_ngcontent-%COMP%]   .box-ticket-info[_ngcontent-%COMP%]   .box-header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{min-width:auto;height:36px;border-radius:4px;font-weight:500;font-size:16px;display:flex;align-items:center;text-transform:capitalize;color:#fff}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .right-content[_ngcontent-%COMP%]   .box-ticket-info[_ngcontent-%COMP%]   .box-header[_ngcontent-%COMP%]   .finished[_ngcontent-%COMP%]{background:#6FE8D7}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .right-content[_ngcontent-%COMP%]   .box-ticket-info[_ngcontent-%COMP%]   .box-header[_ngcontent-%COMP%]   .progress[_ngcontent-%COMP%]{background:#F3A124}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .right-content[_ngcontent-%COMP%]   .box-ticket-info[_ngcontent-%COMP%]   .download-ticket[_ngcontent-%COMP%]{margin-top:20px;background-color:#fff;border:1px solid #171F26;display:block}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .category-view-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;max-height:70vh;overflow:auto}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .right-content[_ngcontent-%COMP%]::-webkit-scrollbar, .onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .category-view-container[_ngcontent-%COMP%]::-webkit-scrollbar{display:none}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .right-content[_ngcontent-%COMP%], .onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .category-view-container[_ngcontent-%COMP%]{-ms-overflow-style:none;scrollbar-width:none}.fields[_ngcontent-%COMP%]{height:84%}.fields[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style:none;display:flex;margin:33px 0;padding:0;overflow:auto}.fields[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin-right:20px;padding-bottom:5px;border-bottom:3px solid transparent}.fields[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none;font-style:normal;font-weight:700;font-size:14px;line-height:120%;color:#171f26;opacity:.5;overflow:hidden;display:-webkit-box;-webkit-line-clamp:1;-webkit-box-orient:vertical}.fields[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.menu-item[_ngcontent-%COMP%]:hover, .fields[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.menu-item.active[_ngcontent-%COMP%]{cursor:pointer;border-bottom:3px solid #3C4252}.fields[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.menu-item[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%], .fields[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.menu-item.active[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-style:normal;font-weight:700;font-size:14px;line-height:120%;opacity:1;text-decoration:none!important}.progress-status[_ngcontent-%COMP%]   .status[_ngcontent-%COMP%]{display:flex;align-items:center}.progress-status[_ngcontent-%COMP%]   .ongoing[_ngcontent-%COMP%]{color:#6fe8d7}.progress-status[_ngcontent-%COMP%]   .in-progress[_ngcontent-%COMP%]{padding-right:25px;color:#f3a124;font-weight:500;font-size:16px}  .progress-status{font-size:16px}  .progress-status .mat-progress-bar{display:block;height:20px;overflow:hidden;border-radius:50px;position:relative;transition:opacity .25s linear;width:100%}  .progress-status .mat-progress-bar-fill:after{background-color:#6fe8d7}  .progress-status .mat-progress-bar-buffer{background-color:#ecf3f7}.category-header[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between}.d-flex-row[_ngcontent-%COMP%]{display:flex;align-items:center}.d-flex-row[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin-right:5px}  mat-bottom-sheet-container{width:100vw;max-width:100vw!important;height:150px;background:#F4F7F9!important;display:flex!important;flex-direction:column;justify-content:center}  mat-bottom-sheet-container .sheet-content{display:flex;align-items:center;justify-content:center}  mat-bottom-sheet-container h3{font-style:normal;font-weight:700;font-size:20px;line-height:100%;color:#171f26;margin-bottom:0!important;margin-top:0!important}  mat-bottom-sheet-container button.download-button{width:277px;height:48px;background:#171F26;box-shadow:0 0 #0003;border-radius:7px;color:#fff;margin:0 25px}  mat-bottom-sheet-container button.close-button{height:48px;background:#fff;box-shadow:0 0 #0003;border-radius:7px;color:#171f26;border:1px solid #171F26}.ul-list[_ngcontent-%COMP%]{list-style:disc!important;display:block!important;margin-left:0!important;padding-left:0!important;margin-top:0!important}.ul-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:before{content:\".\";font-size:40px}";
export class OnboardingDetailComponent {
    constructor(router, service, _bottomSheet) {
        this.router = router;
        this.service = service;
        this._bottomSheet = _bottomSheet;
        this.onShowMode = new EventEmitter(true);
        this.locale = {};
        this.service._lang.subscribe((locale) => {
            this.locale = locales[locale].REQUEST;
        });
    }
    ngOnInit() {
    }
    openBottomSheet(attach) {
        this._bottomSheet.open(BottomSheet, {
            data: attach
            // data: Attachement && Attachement.length > 1 ? Attachement.find((attach: any) => attach.Name.includes("Configuration")) : Attachement[0]
        });
    }
    onScroll(event) {
        const sections = document.querySelectorAll("section");
        const navLi = document.querySelectorAll(".fields ul li");
        let current = "";
        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            if (event.target.scrollTop > sectionTop - 300) {
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
    catNameStart(str) {
        const vowels = ['a', 'e', 'i', 'o', 'u', 'y'];
        return vowels.includes(str.substr(0, 1).toLocaleLowerCase());
    }
    onEdit() {
        this.onShowMode.emit(false);
    }
    progress(completed, length) {
        return 100 * completed / length;
    }
    substr(name) {
        return name.length > 30 ? `${name.slice(0, 15)}...${name.slice(-15)}` : name;
    }
    onViewTicket(Case) {
        this.router.navigate([`reporting/dashboard/${Case._id}`]);
    }
    onFormatDisplayValue(value) {
        if (Array.isArray(value)) {
            return {
                type: 'array',
                value
            };
        }
        return value === true ? { value: "Oui", type: 'string' } : value === false ? { value: "Non", type: 'string' } : { value, type: 'string' };
    }
}
OnboardingDetailComponent.ɵfac = function OnboardingDetailComponent_Factory(t) { return new (t || OnboardingDetailComponent)(i0.ɵɵdirectiveInject(i1.Router), i0.ɵɵdirectiveInject(i2.OnboardingService), i0.ɵɵdirectiveInject(i3.MatBottomSheet)); };
OnboardingDetailComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: OnboardingDetailComponent, selectors: [["lib-onboarding-detail"]], hostBindings: function OnboardingDetailComponent_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("scroll", function OnboardingDetailComponent_scroll_HostBindingHandler($event) { return ctx.onScroll($event); });
    } }, inputs: { detailView: "detailView" }, outputs: { onShowMode: "onShowMode" }, decls: 40, vars: 21, consts: [[1, "onboarding-detail"], [1, "title"], ["style", "margin-left: 20px; cursor: pointer;", 3, "click", 4, "ngIf"], [1, "view-content"], [1, "left-content"], [1, "user-info"], [1, "user-name"], [1, "contact"], ["fontSet", "material-icons-outlined"], [4, "ngIf"], ["id", "fields", 1, "fields"], ["class", "menu-item", 3, "ngxScrollTo", "class", "id", 4, "ngFor", "ngForOf"], [1, "category-view-container", 3, "scroll"], ["class", "category-item", 3, "id", 4, "ngFor", "ngForOf"], [2, "background-color", "transparent"], [2, "height", "450px"], [1, "right-content"], [1, "subtitle"], ["class", "box-ticket-info", 4, "ngIf"], [2, "margin-left", "20px", "cursor", "pointer", 3, "click"], [1, "menu-item", 3, "ngxScrollTo", "id"], [1, "category-item", 3, "id"], [1, "category-item-inner"], [1, "category-header"], [1, "title-content"], [1, "category-description"], [1, "progress-status"], ["class", "category-item-forms", 4, "ngFor", "ngForOf"], [1, "category-item-forms"], [1, "label"], [1, "ul-list"], [4, "ngFor", "ngForOf"], ["class", "box-ticket-info", 4, "ngFor", "ngForOf"], [1, "box-ticket-info"], [1, "d-flex-row", "box-header"], ["mat-button", "", 1, "d-flex-row", 2, "color", "#575F6E", "padding-left", "0", 3, "click"], [2, "font-weight", "400"], ["mat-button", "", 1, "progress"], [1, "date"], [1, "box-header"], [2, "width", "70%", "margin-top", "10px"], [1, "d-flex-row", 2, "gap", "10px", "width", "70%", "margin-top", "10px", "margin-top", "10px"], ["id", "file", "max", "100", 2, "width", "88%", 3, "value"], [1, "percentage", 2, "width", "100px"], ["mat-button", "", "class", "download-ticket", 3, "click", 4, "ngFor", "ngForOf"], ["mat-button", "", 1, "download-ticket", 3, "click"], [1, "description"]], template: function OnboardingDetailComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0)(1, "h1", 1)(2, "p");
        i0.ɵɵtext(3);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(4, OnboardingDetailComponent_mat_icon_4_Template, 2, 0, "mat-icon", 2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "div", 3)(6, "div", 4)(7, "div", 5)(8, "div", 6)(9, "h2");
        i0.ɵɵtext(10);
        i0.ɵɵelementStart(11, "span");
        i0.ɵɵtext(12);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(13, "p");
        i0.ɵɵtext(14);
        i0.ɵɵpipe(15, "date");
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementStart(16, "p", 7);
        i0.ɵɵtext(17);
        i0.ɵɵelement(18, "span");
        i0.ɵɵtext(19);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(20, "p", 7)(21, "mat-icon", 8);
        i0.ɵɵtext(22, "email");
        i0.ɵɵelementEnd();
        i0.ɵɵtext(23);
        i0.ɵɵtemplate(24, OnboardingDetailComponent_ng_container_24_Template, 5, 1, "ng-container", 9);
        i0.ɵɵtemplate(25, OnboardingDetailComponent_ng_container_25_Template, 5, 1, "ng-container", 9);
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(26, "div", 10)(27, "ul");
        i0.ɵɵtemplate(28, OnboardingDetailComponent_li_28_Template, 3, 5, "li", 11);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(29, "div", 12);
        i0.ɵɵlistener("scroll", function OnboardingDetailComponent_Template_div_scroll_29_listener($event) { return ctx.onScroll($event); });
        i0.ɵɵtemplate(30, OnboardingDetailComponent_section_30_Template, 10, 5, "section", 13);
        i0.ɵɵelementStart(31, "section", 14);
        i0.ɵɵelement(32, "div", 15);
        i0.ɵɵelementEnd()()()();
        i0.ɵɵelementStart(33, "div", 16)(34, "h2");
        i0.ɵɵtext(35);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(36, "p", 17);
        i0.ɵɵtext(37);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(38, OnboardingDetailComponent_ng_container_38_Template, 2, 1, "ng-container", 9);
        i0.ɵɵtemplate(39, OnboardingDetailComponent_div_39_Template, 3, 1, "div", 18);
        i0.ɵɵelementEnd()()();
    } if (rf & 2) {
        i0.ɵɵadvance(3);
        i0.ɵɵtextInterpolate2("", ctx.locale == null ? null : ctx.locale.INTEGRATION_OF_PROFILE, " ", ctx.detailView == null ? null : ctx.detailView.Name, "");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !(ctx.detailView == null ? null : ctx.detailView.Finished));
        i0.ɵɵadvance(6);
        i0.ɵɵtextInterpolate2("", ctx.detailView == null ? null : ctx.detailView.user.FirstName, " ", ctx.detailView == null ? null : ctx.detailView.user.LastName, " ");
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate1("", ctx.locale == null ? null : ctx.locale.ARRIVED_ON, " ");
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(15, 18, ctx.detailView == null ? null : ctx.detailView.createdAt, "dd/MM/yy"));
        i0.ɵɵadvance(3);
        i0.ɵɵtextInterpolate1("", ctx.detailView == null ? null : ctx.detailView.user == null ? null : ctx.detailView.user.AccountName, " ");
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate1(" ", ctx.detailView == null ? null : ctx.detailView.user == null ? null : ctx.detailView.user.Title, "");
        i0.ɵɵadvance(4);
        i0.ɵɵtextInterpolate1("", ctx.detailView == null ? null : ctx.detailView.user == null ? null : ctx.detailView.user.Email, " ");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.detailView == null ? null : ctx.detailView.user == null ? null : ctx.detailView.user.MobilePhone == null ? null : ctx.detailView.user.MobilePhone.internationalNumber);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.detailView == null ? null : ctx.detailView.user == null ? null : ctx.detailView.user.Phone == null ? null : ctx.detailView.user.Phone.internationalNumber);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngForOf", ctx.detailView == null ? null : ctx.detailView.categories);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngForOf", ctx.detailView == null ? null : ctx.detailView.categories);
        i0.ɵɵadvance(5);
        i0.ɵɵtextInterpolate(ctx.locale == null ? null : ctx.locale.TICKET_RELATED);
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate(ctx.locale == null ? null : ctx.locale.HERE_YOU_WILL);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", (ctx.detailView == null ? null : ctx.detailView.tickets) && (ctx.detailView == null ? null : ctx.detailView.tickets.length) > 0);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !(ctx.detailView == null ? null : ctx.detailView.tickets));
    } }, directives: [i4.NgIf, i5.MatIcon, i4.NgForOf, i6.ScrollToDirective, i7.MatButton], pipes: [i4.DatePipe], styles: [_c0] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(OnboardingDetailComponent, [{
        type: Component,
        args: [{ selector: 'lib-onboarding-detail', template: "<div class=\"onboarding-detail\">\n    <h1 class=\"title\">\n        <p>{{locale?.INTEGRATION_OF_PROFILE}} {{detailView?.Name}}</p>\n        <mat-icon *ngIf=\"!detailView?.Finished\" style=\"margin-left: 20px; cursor: pointer;\" (click)=\"onEdit()\">edit\n        </mat-icon>\n    </h1>\n    <div class=\"view-content\">\n        <div class=\"left-content\">\n            <div class=\"user-info\">\n                <div class=\"user-name\">\n                    <h2>{{detailView?.user.FirstName }} {{detailView?.user.LastName }} <span>{{locale?.ARRIVED_ON}}\n                        </span>\n                        <p>{{detailView?.createdAt | date:'dd/MM/yy' }}</p>\n                    </h2>\n                </div>\n                <p class=\"contact\">{{detailView?.user?.AccountName }} <span></span> {{detailView?.user?.Title}}</p>\n                <p class=\"contact\">\n                    <mat-icon fontSet=\"material-icons-outlined\">email</mat-icon>{{detailView?.user?.Email }}\n                    <ng-container *ngIf=\"detailView?.user?.MobilePhone?.internationalNumber\">\n                        <span></span>\n                        <mat-icon fontSet=\"material-icons-outlined\">phone</mat-icon>\n                        {{detailView?.user?.MobilePhone?.internationalNumber}}\n                    </ng-container>\n\n                    <ng-container *ngIf=\"detailView?.user?.Phone?.internationalNumber\">\n                        <span></span>\n                        <mat-icon fontSet=\"material-icons-outlined\">smartphone</mat-icon>\n                        {{detailView?.user?.Phone?.internationalNumber}}\n                    </ng-container>\n\n                </p>\n\n            </div>\n\n            <div id=\"fields\" class=\"fields\">\n                <ul>\n                    <li [ngxScrollTo]=\"'#'+category.name\" class=\"menu-item\" [class]=\"i===0 ? 'active':''\"\n                        *ngFor=\"let category of detailView?.categories;  let i=index\" [id]=\"category.name+'x'\">\n                        <a>{{category.name}}</a>\n                    </li>\n                </ul>\n                <div class=\"category-view-container\" (scroll)=\"onScroll($event)\">\n                    <section class=\"category-item\" *ngFor=\"let category of detailView?.categories;  let i=index\"\n                        [id]=\"category.name\">\n                        <div class=\"category-item-inner\">\n                            <div class=\"category-header\">\n                                <div class=\"title-content\">\n                                    <h2>{{category.name}}</h2>\n                                    <p class=\"category-description\">\n                                        {{locale?.CATEGORY_SUBTITLE}} {{\n                                        catNameStart(category.name) ? \"l'\" + category.name :\n                                        category.name }}\n                                    </p>\n                                </div>\n                                <div class=\"progress-status\">\n                                    <!-- {{category?.fieldCompleted}} / {{category?.fieldLength}} -->\n                                    <!-- <div *ngIf=\"category?.fieldCompleted===category?.fieldLength\"\n                                        class=\"status in-progress\">\n                                        <span>En cours de traitement</span>\n                                        <lib-loading></lib-loading>\n                                    </div> -->\n                                    <!-- <div *ngIf=\"category?.fieldCompleted ===category?.fieldLength\"\n                                        class=\"status ongoing\">\n                                        <span style=\"margin-right: 10px;\">En cours</span>\n                                        <mat-icon>check</mat-icon>\n                                    </div> -->\n                                    <!-- <div *ngIf=\"category?.fieldCompleted < category?.fieldLength\"\n                                        class=\"status progress-bar\">\n                                        <span style=\"width: 300px;\">{{progress(category?.fieldCompleted ,\n                                            category?.fieldLength)}}% Termin\u00E9</span>\n                                        <mat-progress-bar mode=\"determinate\"\n                                            [value]=\"progress(category?.fieldCompleted , category?.fieldLength)\">\n                                        </mat-progress-bar>\n                                    </div> -->\n                                </div>\n                            </div>\n                            <div class=\"category-item-forms\" *ngFor=\"let forms of category.forms\">\n                                <ng-container *ngIf=\"!forms.forms\">\n                                    <p class=\"label\">{{forms.label}}</p>\n                                    <ng-container *ngIf=\"onFormatDisplayValue(forms.value).type==='array'\">\n                                        <ul class=\"ul-list\">\n                                            <li *ngFor=\"let item of forms.value \">{{item}}</li>\n                                        </ul>\n                                    </ng-container>\n\n                                    <h4 *ngIf=\"onFormatDisplayValue(forms.value).type!=='array'\">\n                                        {{onFormatDisplayValue(forms.value).value}}\n                                    </h4>\n                                </ng-container>\n                                <ng-container *ngIf=\"forms.forms\">\n                                    <h3>{{forms.label}}</h3>\n                                    <div class=\"category-item-forms\" *ngFor=\"let sub of forms.forms\">\n                                        <ng-container *ngIf=\"!sub.forms\">\n                                            <p class=\"label\">{{sub.label}}</p>\n                                            <ng-container *ngIf=\"onFormatDisplayValue(sub.value).type==='array'\">\n                                                <ul class=\"ul-list\">\n                                                    <li *ngFor=\"let item of sub.value \">{{item}}</li>\n                                                </ul>\n                                            </ng-container>\n                                            <h4 *ngIf=\"onFormatDisplayValue(sub.value).type!=='array'\">\n                                                {{onFormatDisplayValue(sub.value).value}}</h4>\n                                        </ng-container>\n                                        <ng-container *ngIf=\"sub.forms\">\n                                            <h3>{{sub.label}}</h3>\n                                            <div class=\"category-item-forms\" *ngFor=\"let child of sub.forms\">\n                                                <ng-container *ngIf=\"!child.forms\">\n                                                    <p class=\"label\">{{child.label}}</p>\n                                                    <ng-container\n                                                        *ngIf=\"onFormatDisplayValue(child.value).type==='array'\">\n                                                        <ul class=\"ul-list\">\n                                                            <li *ngFor=\"let item of child.value\">{{item}}</li>\n                                                        </ul>\n                                                    </ng-container>\n                                                    <h4 *ngIf=\"onFormatDisplayValue(child.value).type!=='array'\">\n                                                        {{onFormatDisplayValue(child.value).value}}</h4>\n                                                </ng-container>\n                                                <ng-container *ngIf=\"child.forms\">\n                                                    <h3>{{child.label}}</h3>\n                                                    <div class=\"category-item-forms\" *ngFor=\"let c2 of child.forms\">\n                                                        <p class=\"label\">{{c2.label}}</p>\n                                                        <ng-container\n                                                            *ngIf=\"onFormatDisplayValue(c2.value).type==='array'\">\n                                                            <ul class=\"ul-list\">\n                                                                <li *ngFor=\"let item of c2.value \">{{item}}</li>\n                                                            </ul>\n                                                        </ng-container>\n                                                        <h4 *ngIf=\"onFormatDisplayValue(c2.value).type!=='array'\">\n                                                            {{onFormatDisplayValue(c2.value).value}}</h4>\n                                                    </div>\n                                                </ng-container>\n                                            </div>\n                                        </ng-container>\n                                    </div>\n                                </ng-container>\n                            </div>\n                        </div>\n                    </section>\n                    <section style=\"background-color: transparent\">\n                        <div style=\"height: 450px;\"></div>\n                    </section>\n                </div>\n            </div>\n        </div>\n        <div class=\"right-content\">\n            <h2>{{locale?.TICKET_RELATED}}</h2>\n            <p class=\"subtitle\">{{locale?.HERE_YOU_WILL}}</p>\n            <ng-container *ngIf=\"detailView?.tickets && detailView?.tickets.length>0\">\n                <div class=\"box-ticket-info\" *ngFor=\"let ticket of detailView?.tickets\">\n                    <div class=\"d-flex-row box-header\">\n                        <button mat-button class=\"d-flex-row\" style=\"color: #575F6E;padding-left: 0;\"\n                            (click)=\"onViewTicket(ticket)\">\n                            <mat-icon fontSet=\"material-icons-outlined\">list_alt</mat-icon><span\n                                style=\"font-weight: 400;\">Ticket\n                                {{ticket.CaseNumber}}</span>\n                        </button>\n                        <button mat-button class=\"progress\">{{ticket.Status}}</button>\n                    </div>\n                    <p class=\"date\">{{ticket.CreatedDate | date :'dd/MM/yy'}}</p>\n                    <div class=\"box-header\">\n                        <h3 style=\"width: 70%;margin-top: 10px;\">{{ticket.Subject}}</h3>\n                    </div>\n                    <div class=\"d-flex-row\" style=\"gap: 10px;width: 70%;margin-top: 10px;margin-top: 10px;\">\n                        <progress style=\"width: 88%;\" id=\"file\" max=\"100\"\n                            [value]=\"ticket.WorkflowProgress || 0\"></progress>\n                        <span class=\"percentage\" style=\"width: 100px;\">{{ticket.WorkflowProgress}} %</span>\n                    </div>\n                    <!-- <button *ngIf=\"ticket.Attachments && ticket.Attachments.length>0\" mat-button class=\"download-ticket\" -->\n                    <button *ngFor=\"let attach of ticket.Attachments\" mat-button class=\"download-ticket\"\n                        (click)=\"openBottomSheet(attach)\"> {{substr(attach.Name)}}.pdf\n                    </button>\n                </div>\n            </ng-container>\n            <div class=\"box-ticket-info\" *ngIf=\"!detailView?.tickets\">\n                <p class=\"description\">\"{{locale?.NO_TICKET}}\"</p>\n            </div>\n        </div>\n    </div>\n</div>", styles: [".onboarding-detail{padding-top:30px}.onboarding-detail h1,.onboarding-detail h2,.onboarding-detail h3,.onboarding-detail h4,.onboarding-detail h5,.onboarding-detail h6{margin:0;font-style:normal;font-weight:700;line-height:110%;display:flex;align-items:center;color:#242731}.onboarding-detail p{margin:0}.onboarding-detail h1{font-size:24px}.onboarding-detail h1.title{margin-bottom:33px;margin-top:10px}.onboarding-detail h2{font-size:20px}.onboarding-detail h3{font-size:18px}.onboarding-detail h4{font-size:16px}.onboarding-detail h5{font-size:14px}.onboarding-detail h6{font-size:12px}.onboarding-detail .view-content{display:flex;flex-direction:row;justify-content:space-between;background-color:#f4f7f9}.onboarding-detail .view-content .left-content{width:70%;border-radius:6px;margin-right:2%}@media (max-width: 1200px){.onboarding-detail .view-content .left-content{width:50%}}.onboarding-detail .view-content .left-content .user-info{background:transparent;border-radius:6px;padding:10px 10px 10px 0}.onboarding-detail .view-content .left-content .user-info span:before{content:\".\";font-size:25px;margin:0 10px}.onboarding-detail .view-content .left-content .user-info p{font-weight:400;display:flex;align-items:center}.onboarding-detail .view-content .left-content .user-info p mat-icon{padding-right:5px}.onboarding-detail .view-content .left-content .user-info p.contact{margin-top:10px}.onboarding-detail .view-content .left-content .user-info .user-name{line-height:30px}.onboarding-detail .view-content .left-content .user-info .user-name span{font-weight:400;font-size:12px;margin-right:10px}.onboarding-detail .view-content .left-content .user-info .user-contact{line-height:30px}.onboarding-detail .view-content .left-content section{background:#FFFFFF;border-radius:8px;padding:15px;margin-bottom:30px}.onboarding-detail .view-content .left-content section .category-item-inner .category-description{font-style:normal;font-weight:250;font-size:14px;line-height:16px;color:#575f6e;margin-top:5px}.onboarding-detail .view-content .left-content section .category-item-inner .category-item-forms{margin-top:20px}.onboarding-detail .view-content .left-content section .category-item-inner .category-item-forms .label{font-style:normal;font-weight:250;font-size:12px;line-height:16px;display:flex;align-items:center;color:#575f6e}.onboarding-detail .view-content .right-content{background-color:#fff;border-radius:6px;padding:15px;overflow:auto;max-height:85.5vh;margin-right:20px}.onboarding-detail .view-content .right-content p{color:#575f6e}.onboarding-detail .view-content .right-content .box-ticket-info{padding-bottom:20px;padding-top:20px;border-bottom:2px solid #E2E4E5}.onboarding-detail .view-content .right-content .box-ticket-info .box-header{display:flex;justify-content:space-between;align-items:center}.onboarding-detail .view-content .right-content .box-ticket-info .box-header button{min-width:auto;height:36px;border-radius:4px;font-weight:500;font-size:16px;display:flex;align-items:center;text-transform:capitalize;color:#fff}.onboarding-detail .view-content .right-content .box-ticket-info .box-header .finished{background:#6FE8D7}.onboarding-detail .view-content .right-content .box-ticket-info .box-header .progress{background:#F3A124}.onboarding-detail .view-content .right-content .box-ticket-info .download-ticket{margin-top:20px;background-color:#fff;border:1px solid #171F26;display:block}.onboarding-detail .view-content .category-view-container{display:flex;flex-direction:column;max-height:70vh;overflow:auto}.onboarding-detail .view-content .right-content::-webkit-scrollbar,.onboarding-detail .view-content .category-view-container::-webkit-scrollbar{display:none}.onboarding-detail .view-content .right-content,.onboarding-detail .view-content .category-view-container{-ms-overflow-style:none;scrollbar-width:none}.fields{height:84%}.fields ul{list-style:none;display:flex;margin:33px 0;padding:0;overflow:auto}.fields ul li{margin-right:20px;padding-bottom:5px;border-bottom:3px solid transparent}.fields ul li a{text-decoration:none;font-style:normal;font-weight:700;font-size:14px;line-height:120%;color:#171f26;opacity:.5;overflow:hidden;display:-webkit-box;-webkit-line-clamp:1;-webkit-box-orient:vertical}.fields ul li.menu-item:hover,.fields ul li.menu-item.active{cursor:pointer;border-bottom:3px solid #3C4252}.fields ul li.menu-item:hover a,.fields ul li.menu-item.active a{font-style:normal;font-weight:700;font-size:14px;line-height:120%;opacity:1;text-decoration:none!important}.progress-status .status{display:flex;align-items:center}.progress-status .ongoing{color:#6fe8d7}.progress-status .in-progress{padding-right:25px;color:#f3a124;font-weight:500;font-size:16px}::ng-deep .progress-status{font-size:16px}::ng-deep .progress-status .mat-progress-bar{display:block;height:20px;overflow:hidden;border-radius:50px;position:relative;transition:opacity .25s linear;width:100%}::ng-deep .progress-status .mat-progress-bar-fill:after{background-color:#6fe8d7}::ng-deep .progress-status .mat-progress-bar-buffer{background-color:#ecf3f7}.category-header{display:flex;align-items:center;justify-content:space-between}.d-flex-row{display:flex;align-items:center}.d-flex-row mat-icon{margin-right:5px}::ng-deep mat-bottom-sheet-container{width:100vw;max-width:100vw!important;height:150px;background:#F4F7F9!important;display:flex!important;flex-direction:column;justify-content:center}::ng-deep mat-bottom-sheet-container .sheet-content{display:flex;align-items:center;justify-content:center}::ng-deep mat-bottom-sheet-container h3{font-style:normal;font-weight:700;font-size:20px;line-height:100%;color:#171f26;margin-bottom:0!important;margin-top:0!important}::ng-deep mat-bottom-sheet-container button.download-button{width:277px;height:48px;background:#171F26;box-shadow:0 0 #0003;border-radius:7px;color:#fff;margin:0 25px}::ng-deep mat-bottom-sheet-container button.close-button{height:48px;background:#fff;box-shadow:0 0 #0003;border-radius:7px;color:#171f26;border:1px solid #171F26}.ul-list{list-style:disc!important;display:block!important;margin-left:0!important;padding-left:0!important;margin-top:0!important}.ul-list li:before{content:\".\";font-size:40px}\n"] }]
    }], function () { return [{ type: i1.Router }, { type: i2.OnboardingService }, { type: i3.MatBottomSheet }]; }, { detailView: [{
            type: Input
        }], onShowMode: [{
            type: Output
        }], onScroll: [{
            type: HostListener,
            args: ['scroll', ['$event']]
        }] }); })();
export class BottomSheet {
    constructor(_bottomSheetRef, service) {
        this._bottomSheetRef = _bottomSheetRef;
        this.service = service;
        this.attach = null;
        this.filename = "";
        this.not_found = "";
        this.locale = {};
        this.service._lang.subscribe((locale) => {
            this.locale = locales[locale].REQUEST;
        });
    }
    ngOnInit() {
        this.attach = this._bottomSheetRef.containerInstance.bottomSheetConfig.data;
    }
    close() {
        this._bottomSheetRef.dismiss();
    }
    async onDownloadFile() {
        if (this.attach) {
            const result = await this.service.downloadAttachment(this.attach);
            if (!result) {
                this.not_found = "fichier non trouvé";
                setTimeout(() => {
                    this._bottomSheetRef.dismiss();
                    this.not_found = "";
                }, 3000);
            }
        }
    }
}
BottomSheet.ɵfac = function BottomSheet_Factory(t) { return new (t || BottomSheet)(i0.ɵɵdirectiveInject(i3.MatBottomSheetRef), i0.ɵɵdirectiveInject(i2.OnboardingService)); };
BottomSheet.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: BottomSheet, selectors: [["bottom-sheet"]], decls: 7, vars: 3, consts: [[1, "sheet-content"], ["mat-button", "", 1, "download-button", 3, "click"], ["mat-button", "", 1, "close-button", 3, "click"]], template: function BottomSheet_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0)(1, "h3");
        i0.ɵɵtext(2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "button", 1);
        i0.ɵɵlistener("click", function BottomSheet_Template_button_click_3_listener() { return ctx.onDownloadFile(); });
        i0.ɵɵtext(4);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "button", 2);
        i0.ɵɵlistener("click", function BottomSheet_Template_button_click_5_listener() { return ctx.close(); });
        i0.ɵɵtext(6);
        i0.ɵɵelementEnd()();
    } if (rf & 2) {
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate1(" ", ctx.attach.Name, ".pdf ");
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate(ctx.locale == null ? null : ctx.locale.DONWLOAD_THE_PDF);
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate(ctx.locale == null ? null : ctx.locale.CLOSE);
    } }, directives: [i7.MatButton], styles: [_c0] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BottomSheet, [{
        type: Component,
        args: [{ selector: 'bottom-sheet', template: "<div class=\"sheet-content\">\r\n  <h3>\r\n    {{attach.Name}}.pdf\r\n  </h3>\r\n  <button class=\"download-button\" mat-button (click)=\"onDownloadFile()\">{{locale?.DONWLOAD_THE_PDF}}</button>\r\n  <button class=\"close-button\" mat-button (click)=\"close()\">{{locale?.CLOSE}}</button>\r\n\r\n</div>", styles: [".onboarding-detail{padding-top:30px}.onboarding-detail h1,.onboarding-detail h2,.onboarding-detail h3,.onboarding-detail h4,.onboarding-detail h5,.onboarding-detail h6{margin:0;font-style:normal;font-weight:700;line-height:110%;display:flex;align-items:center;color:#242731}.onboarding-detail p{margin:0}.onboarding-detail h1{font-size:24px}.onboarding-detail h1.title{margin-bottom:33px;margin-top:10px}.onboarding-detail h2{font-size:20px}.onboarding-detail h3{font-size:18px}.onboarding-detail h4{font-size:16px}.onboarding-detail h5{font-size:14px}.onboarding-detail h6{font-size:12px}.onboarding-detail .view-content{display:flex;flex-direction:row;justify-content:space-between;background-color:#f4f7f9}.onboarding-detail .view-content .left-content{width:70%;border-radius:6px;margin-right:2%}@media (max-width: 1200px){.onboarding-detail .view-content .left-content{width:50%}}.onboarding-detail .view-content .left-content .user-info{background:transparent;border-radius:6px;padding:10px 10px 10px 0}.onboarding-detail .view-content .left-content .user-info span:before{content:\".\";font-size:25px;margin:0 10px}.onboarding-detail .view-content .left-content .user-info p{font-weight:400;display:flex;align-items:center}.onboarding-detail .view-content .left-content .user-info p mat-icon{padding-right:5px}.onboarding-detail .view-content .left-content .user-info p.contact{margin-top:10px}.onboarding-detail .view-content .left-content .user-info .user-name{line-height:30px}.onboarding-detail .view-content .left-content .user-info .user-name span{font-weight:400;font-size:12px;margin-right:10px}.onboarding-detail .view-content .left-content .user-info .user-contact{line-height:30px}.onboarding-detail .view-content .left-content section{background:#FFFFFF;border-radius:8px;padding:15px;margin-bottom:30px}.onboarding-detail .view-content .left-content section .category-item-inner .category-description{font-style:normal;font-weight:250;font-size:14px;line-height:16px;color:#575f6e;margin-top:5px}.onboarding-detail .view-content .left-content section .category-item-inner .category-item-forms{margin-top:20px}.onboarding-detail .view-content .left-content section .category-item-inner .category-item-forms .label{font-style:normal;font-weight:250;font-size:12px;line-height:16px;display:flex;align-items:center;color:#575f6e}.onboarding-detail .view-content .right-content{background-color:#fff;border-radius:6px;padding:15px;overflow:auto;max-height:85.5vh;margin-right:20px}.onboarding-detail .view-content .right-content p{color:#575f6e}.onboarding-detail .view-content .right-content .box-ticket-info{padding-bottom:20px;padding-top:20px;border-bottom:2px solid #E2E4E5}.onboarding-detail .view-content .right-content .box-ticket-info .box-header{display:flex;justify-content:space-between;align-items:center}.onboarding-detail .view-content .right-content .box-ticket-info .box-header button{min-width:auto;height:36px;border-radius:4px;font-weight:500;font-size:16px;display:flex;align-items:center;text-transform:capitalize;color:#fff}.onboarding-detail .view-content .right-content .box-ticket-info .box-header .finished{background:#6FE8D7}.onboarding-detail .view-content .right-content .box-ticket-info .box-header .progress{background:#F3A124}.onboarding-detail .view-content .right-content .box-ticket-info .download-ticket{margin-top:20px;background-color:#fff;border:1px solid #171F26;display:block}.onboarding-detail .view-content .category-view-container{display:flex;flex-direction:column;max-height:70vh;overflow:auto}.onboarding-detail .view-content .right-content::-webkit-scrollbar,.onboarding-detail .view-content .category-view-container::-webkit-scrollbar{display:none}.onboarding-detail .view-content .right-content,.onboarding-detail .view-content .category-view-container{-ms-overflow-style:none;scrollbar-width:none}.fields{height:84%}.fields ul{list-style:none;display:flex;margin:33px 0;padding:0;overflow:auto}.fields ul li{margin-right:20px;padding-bottom:5px;border-bottom:3px solid transparent}.fields ul li a{text-decoration:none;font-style:normal;font-weight:700;font-size:14px;line-height:120%;color:#171f26;opacity:.5;overflow:hidden;display:-webkit-box;-webkit-line-clamp:1;-webkit-box-orient:vertical}.fields ul li.menu-item:hover,.fields ul li.menu-item.active{cursor:pointer;border-bottom:3px solid #3C4252}.fields ul li.menu-item:hover a,.fields ul li.menu-item.active a{font-style:normal;font-weight:700;font-size:14px;line-height:120%;opacity:1;text-decoration:none!important}.progress-status .status{display:flex;align-items:center}.progress-status .ongoing{color:#6fe8d7}.progress-status .in-progress{padding-right:25px;color:#f3a124;font-weight:500;font-size:16px}::ng-deep .progress-status{font-size:16px}::ng-deep .progress-status .mat-progress-bar{display:block;height:20px;overflow:hidden;border-radius:50px;position:relative;transition:opacity .25s linear;width:100%}::ng-deep .progress-status .mat-progress-bar-fill:after{background-color:#6fe8d7}::ng-deep .progress-status .mat-progress-bar-buffer{background-color:#ecf3f7}.category-header{display:flex;align-items:center;justify-content:space-between}.d-flex-row{display:flex;align-items:center}.d-flex-row mat-icon{margin-right:5px}::ng-deep mat-bottom-sheet-container{width:100vw;max-width:100vw!important;height:150px;background:#F4F7F9!important;display:flex!important;flex-direction:column;justify-content:center}::ng-deep mat-bottom-sheet-container .sheet-content{display:flex;align-items:center;justify-content:center}::ng-deep mat-bottom-sheet-container h3{font-style:normal;font-weight:700;font-size:20px;line-height:100%;color:#171f26;margin-bottom:0!important;margin-top:0!important}::ng-deep mat-bottom-sheet-container button.download-button{width:277px;height:48px;background:#171F26;box-shadow:0 0 #0003;border-radius:7px;color:#fff;margin:0 25px}::ng-deep mat-bottom-sheet-container button.close-button{height:48px;background:#fff;box-shadow:0 0 #0003;border-radius:7px;color:#171f26;border:1px solid #171F26}.ul-list{list-style:disc!important;display:block!important;margin-left:0!important;padding-left:0!important;margin-top:0!important}.ul-list li:before{content:\".\";font-size:40px}\n"] }]
    }], function () { return [{ type: i3.MatBottomSheetRef }, { type: i2.OnboardingService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib25ib2FyZGluZy1kZXRhaWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvb25ib2FyZGluZy9zcmMvbGliL2NvbXBvbmVudHMvb25ib2FyZGluZy9vbmJvYXJkaW5nLWRldGFpbC9vbmJvYXJkaW5nLWRldGFpbC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9vbmJvYXJkaW5nL3NyYy9saWIvY29tcG9uZW50cy9vbmJvYXJkaW5nL29uYm9hcmRpbmctZGV0YWlsL29uYm9hcmRpbmctZGV0YWlsLmNvbXBvbmVudC5odG1sIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvb25ib2FyZGluZy9zcmMvbGliL2NvbXBvbmVudHMvb25ib2FyZGluZy9vbmJvYXJkaW5nLWRldGFpbC9ib3R0b20tc2hlZXQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUs3RixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7Ozs7Ozs7OztJQ0ZoQyxvQ0FBdUc7SUFBbkIsNktBQVMsZUFBUSxJQUFDO0lBQUMscUJBQ3ZHO0lBQUEsaUJBQVc7OztJQWNDLDZCQUF5RTtJQUNyRSx1QkFBYTtJQUNiLG1DQUE0QztJQUFBLHFCQUFLO0lBQUEsaUJBQVc7SUFDNUQsWUFDSjtJQUFBLDBCQUFlOzs7SUFEWCxlQUNKO0lBREksc05BQ0o7OztJQUVBLDZCQUFtRTtJQUMvRCx1QkFBYTtJQUNiLG1DQUE0QztJQUFBLDBCQUFVO0lBQUEsaUJBQVc7SUFDakUsWUFDSjtJQUFBLDBCQUFlOzs7SUFEWCxlQUNKO0lBREksME1BQ0o7OztJQVFBLDhCQUMyRixRQUFBO0lBQ3BGLFlBQWlCO0lBQUEsaUJBQUks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QUksSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNmLE1BQU0sTUFBTSxHQUFHLE1BQU0sSUFBSSxDQUFDLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDbEUsSUFBSSxDQUFDLE1BQU0sRUFBRTtnQkFDWCxJQUFJLENBQUMsU0FBUyxHQUFHLG9CQUFvQixDQUFBO2dCQUNyQyxVQUFVLENBQUMsR0FBRyxFQUFFO29CQUNkLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxFQUFFLENBQUM7b0JBQy9CLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFBO2dCQUNyQixDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7YUFDVjtTQUVGO0lBQ0gsQ0FBQzs7c0VBL0JVLFdBQVc7OERBQVgsV0FBVztRRTFGeEIsOEJBQTJCLFNBQUE7UUFFdkIsWUFDRjtRQUFBLGlCQUFLO1FBQ0wsaUNBQXNFO1FBQTNCLHdGQUFTLG9CQUFnQixJQUFDO1FBQUMsWUFBNEI7UUFBQSxpQkFBUztRQUMzRyxpQ0FBMEQ7UUFBbEIsd0ZBQVMsV0FBTyxJQUFDO1FBQUMsWUFBaUI7UUFBQSxpQkFBUyxFQUFBOztRQUhsRixlQUNGO1FBREUsb0RBQ0Y7UUFDc0UsZUFBNEI7UUFBNUIsNkVBQTRCO1FBQ3hDLGVBQWlCO1FBQWpCLGtFQUFpQjs7dUZGcUZoRSxXQUFXO2NBTHZCLFNBQVM7MkJBQ0UsY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBIb3N0TGlzdGVuZXIsIElucHV0LCBPbkluaXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWF0Qm90dG9tU2hlZXQsIE1hdEJvdHRvbVNoZWV0UmVmIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvYm90dG9tLXNoZWV0JztcblxuaW1wb3J0IHsgT25ib2FyZGluZ1NlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9vbmJvYXJkaW5nLnNlcnZpY2UnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IGxvY2FsZXMgfSBmcm9tICcuLi8uLi8uLi9pMThuJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLW9uYm9hcmRpbmctZGV0YWlsJyxcbiAgdGVtcGxhdGVVcmw6ICcuL29uYm9hcmRpbmctZGV0YWlsLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vb25ib2FyZGluZy1kZXRhaWwuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBPbmJvYXJkaW5nRGV0YWlsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgZGV0YWlsVmlldztcbiAgQE91dHB1dCgpIG9uU2hvd01vZGUgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KHRydWUpO1xuICBsb2NhbGU6IGFueSA9IHt9XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgc2VydmljZTogT25ib2FyZGluZ1NlcnZpY2UsIHByaXZhdGUgX2JvdHRvbVNoZWV0OiBNYXRCb3R0b21TaGVldCkge1xuICAgIHRoaXMuc2VydmljZS5fbGFuZy5zdWJzY3JpYmUoKGxvY2FsZSkgPT4ge1xuICAgICAgdGhpcy5sb2NhbGUgPSBsb2NhbGVzW2xvY2FsZV0uUkVRVUVTVDtcbiAgICB9KVxuICB9XG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICB9XG5cbiAgb3BlbkJvdHRvbVNoZWV0KGF0dGFjaCk6IHZvaWQge1xuICAgIHRoaXMuX2JvdHRvbVNoZWV0Lm9wZW4oQm90dG9tU2hlZXQsIHtcbiAgICAgIGRhdGE6IGF0dGFjaFxuICAgICAgLy8gZGF0YTogQXR0YWNoZW1lbnQgJiYgQXR0YWNoZW1lbnQubGVuZ3RoID4gMSA/IEF0dGFjaGVtZW50LmZpbmQoKGF0dGFjaDogYW55KSA9PiBhdHRhY2guTmFtZS5pbmNsdWRlcyhcIkNvbmZpZ3VyYXRpb25cIikpIDogQXR0YWNoZW1lbnRbMF1cbiAgICB9KTtcbiAgfVxuICBASG9zdExpc3RlbmVyKCdzY3JvbGwnLCBbJyRldmVudCddKVxuICBvblNjcm9sbChldmVudCkge1xuICAgIGNvbnN0IHNlY3Rpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcInNlY3Rpb25cIik7XG4gICAgY29uc3QgbmF2TGkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmZpZWxkcyB1bCBsaVwiKTtcblxuICAgIGxldCBjdXJyZW50ID0gXCJcIjtcbiAgICBzZWN0aW9ucy5mb3JFYWNoKChzZWN0aW9uKSA9PiB7XG4gICAgICBjb25zdCBzZWN0aW9uVG9wID0gc2VjdGlvbi5vZmZzZXRUb3A7XG4gICAgICBpZiAoZXZlbnQudGFyZ2V0LnNjcm9sbFRvcCA+IHNlY3Rpb25Ub3AgLSAzMDApIHtcbiAgICAgICAgY3VycmVudCA9IHNlY3Rpb24uZ2V0QXR0cmlidXRlKFwiaWRcIilcbiAgICAgIH1cbiAgICB9KTtcbiAgICBuYXZMaS5mb3JFYWNoKChsaSkgPT4ge1xuICAgICAgY29uc3QgaWQgPSBsaS5nZXRBdHRyaWJ1dGUoJ2lkJylcbiAgICAgIGlmIChpZD8uc3Vic3RyaW5nKDAsIGlkLmxlbmd0aCAtIDEpID09PSBjdXJyZW50KSB7XG4gICAgICAgIGxpLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsaS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgY2F0TmFtZVN0YXJ0KHN0cjogc3RyaW5nKSB7XG4gICAgY29uc3Qgdm93ZWxzID0gWydhJywgJ2UnLCAnaScsICdvJywgJ3UnLCAneSddO1xuICAgIHJldHVybiB2b3dlbHMuaW5jbHVkZXMoc3RyLnN1YnN0cigwLCAxKS50b0xvY2FsZUxvd2VyQ2FzZSgpKVxuICB9XG4gIG9uRWRpdCgpIHtcbiAgICB0aGlzLm9uU2hvd01vZGUuZW1pdChmYWxzZSlcbiAgfVxuXG4gIHByb2dyZXNzKGNvbXBsZXRlZCwgbGVuZ3RoKSB7XG4gICAgcmV0dXJuIDEwMCAqIGNvbXBsZXRlZCAvIGxlbmd0aFxuICB9XG5cbiAgc3Vic3RyKG5hbWU6IHN0cmluZykge1xuICAgIHJldHVybiBuYW1lLmxlbmd0aCA+IDMwID8gYCR7bmFtZS5zbGljZSgwLCAxNSl9Li4uJHtuYW1lLnNsaWNlKC0xNSl9YCA6IG5hbWVcbiAgfVxuXG4gIG9uVmlld1RpY2tldChDYXNlKSB7XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW2ByZXBvcnRpbmcvZGFzaGJvYXJkLyR7Q2FzZS5faWR9YF0pXG4gIH1cbiAgb25Gb3JtYXREaXNwbGF5VmFsdWUodmFsdWUpIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6ICdhcnJheScsXG4gICAgICAgIHZhbHVlXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZSA9PT0gdHJ1ZSA/IHsgdmFsdWU6IFwiT3VpXCIsIHR5cGU6ICdzdHJpbmcnIH0gOiB2YWx1ZSA9PT0gZmFsc2UgPyB7IHZhbHVlOiBcIk5vblwiLCB0eXBlOiAnc3RyaW5nJyB9IDogeyB2YWx1ZSwgdHlwZTogJ3N0cmluZycgfVxuXG4gIH1cblxufVxuXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2JvdHRvbS1zaGVldCcsXG4gIHRlbXBsYXRlVXJsOiAnYm90dG9tLXNoZWV0Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9vbmJvYXJkaW5nLWRldGFpbC5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIEJvdHRvbVNoZWV0IGltcGxlbWVudHMgT25Jbml0IHtcbiAgYXR0YWNoID0gbnVsbDtcbiAgZmlsZW5hbWUgPSBcIlwiXG4gIG5vdF9mb3VuZCA9IFwiXCJcbiAgbG9jYWxlOiBhbnkgPSB7fVxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9ib3R0b21TaGVldFJlZjogTWF0Qm90dG9tU2hlZXRSZWY8Qm90dG9tU2hlZXQ+LCBwcml2YXRlIHNlcnZpY2U6IE9uYm9hcmRpbmdTZXJ2aWNlKSB7XG4gICAgdGhpcy5zZXJ2aWNlLl9sYW5nLnN1YnNjcmliZSgobG9jYWxlKSA9PiB7XG4gICAgICB0aGlzLmxvY2FsZSA9IGxvY2FsZXNbbG9jYWxlXS5SRVFVRVNUO1xuICAgIH0pXG5cbiAgfVxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmF0dGFjaCA9IHRoaXMuX2JvdHRvbVNoZWV0UmVmLmNvbnRhaW5lckluc3RhbmNlLmJvdHRvbVNoZWV0Q29uZmlnLmRhdGFcbiAgfVxuXG4gIGNsb3NlKCk6IHZvaWQge1xuICAgIHRoaXMuX2JvdHRvbVNoZWV0UmVmLmRpc21pc3MoKTtcbiAgfVxuXG4gIGFzeW5jIG9uRG93bmxvYWRGaWxlKCkge1xuICAgIGlmICh0aGlzLmF0dGFjaCkge1xuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5zZXJ2aWNlLmRvd25sb2FkQXR0YWNobWVudCh0aGlzLmF0dGFjaCk7XG4gICAgICBpZiAoIXJlc3VsdCkge1xuICAgICAgICB0aGlzLm5vdF9mb3VuZCA9IFwiZmljaGllciBub24gdHJvdXbDqVwiXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHRoaXMuX2JvdHRvbVNoZWV0UmVmLmRpc21pc3MoKTtcbiAgICAgICAgICB0aGlzLm5vdF9mb3VuZCA9IFwiXCJcbiAgICAgICAgfSwgMzAwMCk7XG4gICAgICB9XG5cbiAgICB9XG4gIH1cbn1cblxuIiwiPGRpdiBjbGFzcz1cIm9uYm9hcmRpbmctZGV0YWlsXCI+XG4gICAgPGgxIGNsYXNzPVwidGl0bGVcIj5cbiAgICAgICAgPHA+e3tsb2NhbGU/LklOVEVHUkFUSU9OX09GX1BST0ZJTEV9fSB7e2RldGFpbFZpZXc/Lk5hbWV9fTwvcD5cbiAgICAgICAgPG1hdC1pY29uICpuZ0lmPVwiIWRldGFpbFZpZXc/LkZpbmlzaGVkXCIgc3R5bGU9XCJtYXJnaW4tbGVmdDogMjBweDsgY3Vyc29yOiBwb2ludGVyO1wiIChjbGljayk9XCJvbkVkaXQoKVwiPmVkaXRcbiAgICAgICAgPC9tYXQtaWNvbj5cbiAgICA8L2gxPlxuICAgIDxkaXYgY2xhc3M9XCJ2aWV3LWNvbnRlbnRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImxlZnQtY29udGVudFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInVzZXItaW5mb1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ1c2VyLW5hbWVcIj5cbiAgICAgICAgICAgICAgICAgICAgPGgyPnt7ZGV0YWlsVmlldz8udXNlci5GaXJzdE5hbWUgfX0ge3tkZXRhaWxWaWV3Py51c2VyLkxhc3ROYW1lIH19IDxzcGFuPnt7bG9jYWxlPy5BUlJJVkVEX09OfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPnt7ZGV0YWlsVmlldz8uY3JlYXRlZEF0IHwgZGF0ZTonZGQvTU0veXknIH19PC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiY29udGFjdFwiPnt7ZGV0YWlsVmlldz8udXNlcj8uQWNjb3VudE5hbWUgfX0gPHNwYW4+PC9zcGFuPiB7e2RldGFpbFZpZXc/LnVzZXI/LlRpdGxlfX08L3A+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJjb250YWN0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxtYXQtaWNvbiBmb250U2V0PVwibWF0ZXJpYWwtaWNvbnMtb3V0bGluZWRcIj5lbWFpbDwvbWF0LWljb24+e3tkZXRhaWxWaWV3Py51c2VyPy5FbWFpbCB9fVxuICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiZGV0YWlsVmlldz8udXNlcj8uTW9iaWxlUGhvbmU/LmludGVybmF0aW9uYWxOdW1iZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxtYXQtaWNvbiBmb250U2V0PVwibWF0ZXJpYWwtaWNvbnMtb3V0bGluZWRcIj5waG9uZTwvbWF0LWljb24+XG4gICAgICAgICAgICAgICAgICAgICAgICB7e2RldGFpbFZpZXc/LnVzZXI/Lk1vYmlsZVBob25lPy5pbnRlcm5hdGlvbmFsTnVtYmVyfX1cbiAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImRldGFpbFZpZXc/LnVzZXI/LlBob25lPy5pbnRlcm5hdGlvbmFsTnVtYmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bWF0LWljb24gZm9udFNldD1cIm1hdGVyaWFsLWljb25zLW91dGxpbmVkXCI+c21hcnRwaG9uZTwvbWF0LWljb24+XG4gICAgICAgICAgICAgICAgICAgICAgICB7e2RldGFpbFZpZXc/LnVzZXI/LlBob25lPy5pbnRlcm5hdGlvbmFsTnVtYmVyfX1cbiAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgICAgICAgICAgICA8L3A+XG5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGlkPVwiZmllbGRzXCIgY2xhc3M9XCJmaWVsZHNcIj5cbiAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgIDxsaSBbbmd4U2Nyb2xsVG9dPVwiJyMnK2NhdGVnb3J5Lm5hbWVcIiBjbGFzcz1cIm1lbnUtaXRlbVwiIFtjbGFzc109XCJpPT09MCA/ICdhY3RpdmUnOicnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICpuZ0Zvcj1cImxldCBjYXRlZ29yeSBvZiBkZXRhaWxWaWV3Py5jYXRlZ29yaWVzOyAgbGV0IGk9aW5kZXhcIiBbaWRdPVwiY2F0ZWdvcnkubmFtZSsneCdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhPnt7Y2F0ZWdvcnkubmFtZX19PC9hPlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhdGVnb3J5LXZpZXctY29udGFpbmVyXCIgKHNjcm9sbCk9XCJvblNjcm9sbCgkZXZlbnQpXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzPVwiY2F0ZWdvcnktaXRlbVwiICpuZ0Zvcj1cImxldCBjYXRlZ29yeSBvZiBkZXRhaWxWaWV3Py5jYXRlZ29yaWVzOyAgbGV0IGk9aW5kZXhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgW2lkXT1cImNhdGVnb3J5Lm5hbWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXRlZ29yeS1pdGVtLWlubmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhdGVnb3J5LWhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGl0bGUtY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyPnt7Y2F0ZWdvcnkubmFtZX19PC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiY2F0ZWdvcnktZGVzY3JpcHRpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e2xvY2FsZT8uQ0FURUdPUllfU1VCVElUTEV9fSB7e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhdE5hbWVTdGFydChjYXRlZ29yeS5uYW1lKSA/IFwibCdcIiArIGNhdGVnb3J5Lm5hbWUgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5Lm5hbWUgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcm9ncmVzcy1zdGF0dXNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0ge3tjYXRlZ29yeT8uZmllbGRDb21wbGV0ZWR9fSAvIHt7Y2F0ZWdvcnk/LmZpZWxkTGVuZ3RofX0gLS0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tIDxkaXYgKm5nSWY9XCJjYXRlZ29yeT8uZmllbGRDb21wbGV0ZWQ9PT1jYXRlZ29yeT8uZmllbGRMZW5ndGhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwic3RhdHVzIGluLXByb2dyZXNzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+RW4gY291cnMgZGUgdHJhaXRlbWVudDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGliLWxvYWRpbmc+PC9saWItbG9hZGluZz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiAtLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gPGRpdiAqbmdJZj1cImNhdGVnb3J5Py5maWVsZENvbXBsZXRlZCA9PT1jYXRlZ29yeT8uZmllbGRMZW5ndGhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwic3RhdHVzIG9uZ29pbmdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT1cIm1hcmdpbi1yaWdodDogMTBweDtcIj5FbiBjb3Vyczwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bWF0LWljb24+Y2hlY2s8L21hdC1pY29uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+IC0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSA8ZGl2ICpuZ0lmPVwiY2F0ZWdvcnk/LmZpZWxkQ29tcGxldGVkIDwgY2F0ZWdvcnk/LmZpZWxkTGVuZ3RoXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInN0YXR1cyBwcm9ncmVzcy1iYXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT1cIndpZHRoOiAzMDBweDtcIj57e3Byb2dyZXNzKGNhdGVnb3J5Py5maWVsZENvbXBsZXRlZCAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5Py5maWVsZExlbmd0aCl9fSUgVGVybWluw6k8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG1hdC1wcm9ncmVzcy1iYXIgbW9kZT1cImRldGVybWluYXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3ZhbHVlXT1cInByb2dyZXNzKGNhdGVnb3J5Py5maWVsZENvbXBsZXRlZCAsIGNhdGVnb3J5Py5maWVsZExlbmd0aClcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L21hdC1wcm9ncmVzcy1iYXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gLS0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXRlZ29yeS1pdGVtLWZvcm1zXCIgKm5nRm9yPVwibGV0IGZvcm1zIG9mIGNhdGVnb3J5LmZvcm1zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhZm9ybXMuZm9ybXNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwibGFiZWxcIj57e2Zvcm1zLmxhYmVsfX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwib25Gb3JtYXREaXNwbGF5VmFsdWUoZm9ybXMudmFsdWUpLnR5cGU9PT0nYXJyYXknXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzPVwidWwtbGlzdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgKm5nRm9yPVwibGV0IGl0ZW0gb2YgZm9ybXMudmFsdWUgXCI+e3tpdGVtfX08L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0ICpuZ0lmPVwib25Gb3JtYXREaXNwbGF5VmFsdWUoZm9ybXMudmFsdWUpLnR5cGUhPT0nYXJyYXknXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3tvbkZvcm1hdERpc3BsYXlWYWx1ZShmb3Jtcy52YWx1ZSkudmFsdWV9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJmb3Jtcy5mb3Jtc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPnt7Zm9ybXMubGFiZWx9fTwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2F0ZWdvcnktaXRlbS1mb3Jtc1wiICpuZ0Zvcj1cImxldCBzdWIgb2YgZm9ybXMuZm9ybXNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIXN1Yi5mb3Jtc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImxhYmVsXCI+e3tzdWIubGFiZWx9fTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIm9uRm9ybWF0RGlzcGxheVZhbHVlKHN1Yi52YWx1ZSkudHlwZT09PSdhcnJheSdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cInVsLWxpc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgKm5nRm9yPVwibGV0IGl0ZW0gb2Ygc3ViLnZhbHVlIFwiPnt7aXRlbX19PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgKm5nSWY9XCJvbkZvcm1hdERpc3BsYXlWYWx1ZShzdWIudmFsdWUpLnR5cGUhPT0nYXJyYXknXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e29uRm9ybWF0RGlzcGxheVZhbHVlKHN1Yi52YWx1ZSkudmFsdWV9fTwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cInN1Yi5mb3Jtc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+e3tzdWIubGFiZWx9fTwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXRlZ29yeS1pdGVtLWZvcm1zXCIgKm5nRm9yPVwibGV0IGNoaWxkIG9mIHN1Yi5mb3Jtc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFjaGlsZC5mb3Jtc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwibGFiZWxcIj57e2NoaWxkLmxhYmVsfX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqbmdJZj1cIm9uRm9ybWF0RGlzcGxheVZhbHVlKGNoaWxkLnZhbHVlKS50eXBlPT09J2FycmF5J1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJ1bC1saXN0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgKm5nRm9yPVwibGV0IGl0ZW0gb2YgY2hpbGQudmFsdWVcIj57e2l0ZW19fTwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0ICpuZ0lmPVwib25Gb3JtYXREaXNwbGF5VmFsdWUoY2hpbGQudmFsdWUpLnR5cGUhPT0nYXJyYXknXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7b25Gb3JtYXREaXNwbGF5VmFsdWUoY2hpbGQudmFsdWUpLnZhbHVlfX08L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiY2hpbGQuZm9ybXNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+e3tjaGlsZC5sYWJlbH19PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2F0ZWdvcnktaXRlbS1mb3Jtc1wiICpuZ0Zvcj1cImxldCBjMiBvZiBjaGlsZC5mb3Jtc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImxhYmVsXCI+e3tjMi5sYWJlbH19PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqbmdJZj1cIm9uRm9ybWF0RGlzcGxheVZhbHVlKGMyLnZhbHVlKS50eXBlPT09J2FycmF5J1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzPVwidWwtbGlzdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSAqbmdGb3I9XCJsZXQgaXRlbSBvZiBjMi52YWx1ZSBcIj57e2l0ZW19fTwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0ICpuZ0lmPVwib25Gb3JtYXREaXNwbGF5VmFsdWUoYzIudmFsdWUpLnR5cGUhPT0nYXJyYXknXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e29uRm9ybWF0RGlzcGxheVZhbHVlKGMyLnZhbHVlKS52YWx1ZX19PC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9XCJoZWlnaHQ6IDQ1MHB4O1wiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJyaWdodC1jb250ZW50XCI+XG4gICAgICAgICAgICA8aDI+e3tsb2NhbGU/LlRJQ0tFVF9SRUxBVEVEfX08L2gyPlxuICAgICAgICAgICAgPHAgY2xhc3M9XCJzdWJ0aXRsZVwiPnt7bG9jYWxlPy5IRVJFX1lPVV9XSUxMfX08L3A+XG4gICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiZGV0YWlsVmlldz8udGlja2V0cyAmJiBkZXRhaWxWaWV3Py50aWNrZXRzLmxlbmd0aD4wXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJveC10aWNrZXQtaW5mb1wiICpuZ0Zvcj1cImxldCB0aWNrZXQgb2YgZGV0YWlsVmlldz8udGlja2V0c1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZC1mbGV4LXJvdyBib3gtaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG1hdC1idXR0b24gY2xhc3M9XCJkLWZsZXgtcm93XCIgc3R5bGU9XCJjb2xvcjogIzU3NUY2RTtwYWRkaW5nLWxlZnQ6IDA7XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwib25WaWV3VGlja2V0KHRpY2tldClcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bWF0LWljb24gZm9udFNldD1cIm1hdGVyaWFsLWljb25zLW91dGxpbmVkXCI+bGlzdF9hbHQ8L21hdC1pY29uPjxzcGFuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPVwiZm9udC13ZWlnaHQ6IDQwMDtcIj5UaWNrZXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3t0aWNrZXQuQ2FzZU51bWJlcn19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG1hdC1idXR0b24gY2xhc3M9XCJwcm9ncmVzc1wiPnt7dGlja2V0LlN0YXR1c319PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImRhdGVcIj57e3RpY2tldC5DcmVhdGVkRGF0ZSB8IGRhdGUgOidkZC9NTS95eSd9fTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJveC1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBzdHlsZT1cIndpZHRoOiA3MCU7bWFyZ2luLXRvcDogMTBweDtcIj57e3RpY2tldC5TdWJqZWN0fX08L2gzPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImQtZmxleC1yb3dcIiBzdHlsZT1cImdhcDogMTBweDt3aWR0aDogNzAlO21hcmdpbi10b3A6IDEwcHg7bWFyZ2luLXRvcDogMTBweDtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwcm9ncmVzcyBzdHlsZT1cIndpZHRoOiA4OCU7XCIgaWQ9XCJmaWxlXCIgbWF4PVwiMTAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbdmFsdWVdPVwidGlja2V0LldvcmtmbG93UHJvZ3Jlc3MgfHwgMFwiPjwvcHJvZ3Jlc3M+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInBlcmNlbnRhZ2VcIiBzdHlsZT1cIndpZHRoOiAxMDBweDtcIj57e3RpY2tldC5Xb3JrZmxvd1Byb2dyZXNzfX0gJTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwhLS0gPGJ1dHRvbiAqbmdJZj1cInRpY2tldC5BdHRhY2htZW50cyAmJiB0aWNrZXQuQXR0YWNobWVudHMubGVuZ3RoPjBcIiBtYXQtYnV0dG9uIGNsYXNzPVwiZG93bmxvYWQtdGlja2V0XCIgLS0+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gKm5nRm9yPVwibGV0IGF0dGFjaCBvZiB0aWNrZXQuQXR0YWNobWVudHNcIiBtYXQtYnV0dG9uIGNsYXNzPVwiZG93bmxvYWQtdGlja2V0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJvcGVuQm90dG9tU2hlZXQoYXR0YWNoKVwiPiB7e3N1YnN0cihhdHRhY2guTmFtZSl9fS5wZGZcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJib3gtdGlja2V0LWluZm9cIiAqbmdJZj1cIiFkZXRhaWxWaWV3Py50aWNrZXRzXCI+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJkZXNjcmlwdGlvblwiPlwie3tsb2NhbGU/Lk5PX1RJQ0tFVH19XCI8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG48L2Rpdj4iLCI8ZGl2IGNsYXNzPVwic2hlZXQtY29udGVudFwiPlxyXG4gIDxoMz5cclxuICAgIHt7YXR0YWNoLk5hbWV9fS5wZGZcclxuICA8L2gzPlxyXG4gIDxidXR0b24gY2xhc3M9XCJkb3dubG9hZC1idXR0b25cIiBtYXQtYnV0dG9uIChjbGljayk9XCJvbkRvd25sb2FkRmlsZSgpXCI+e3tsb2NhbGU/LkRPTldMT0FEX1RIRV9QREZ9fTwvYnV0dG9uPlxyXG4gIDxidXR0b24gY2xhc3M9XCJjbG9zZS1idXR0b25cIiBtYXQtYnV0dG9uIChjbGljayk9XCJjbG9zZSgpXCI+e3tsb2NhbGU/LkNMT1NFfX08L2J1dHRvbj5cclxuXHJcbjwvZGl2PiJdfQ==