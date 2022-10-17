import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { locales } from '../../../i18n';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "../../../onboarding.service";
import * as i3 from "@angular/material/bottom-sheet";
import * as i4 from "@angular/material/button";
import * as i5 from "@angular/common";
import * as i6 from "@angular/material/icon";
import * as i7 from "@nicky-lenaers/ngx-scroll-to";
function OnboardingDetailComponent_mat_icon_4_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-icon", 19);
    i0.ɵɵlistener("click", function OnboardingDetailComponent_mat_icon_4_Template_mat_icon_click_0_listener() { i0.ɵɵrestoreView(_r8); const ctx_r7 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r7.onEdit()); });
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
    i0.ɵɵlistener("click", function OnboardingDetailComponent_ng_container_38_div_1_button_19_Template_button_click_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r62); const attach_r60 = restoredCtx.$implicit; const ctx_r61 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r61.openBottomSheet(attach_r60)); });
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
    i0.ɵɵlistener("click", function OnboardingDetailComponent_ng_container_38_div_1_Template_button_click_2_listener() { const restoredCtx = i0.ɵɵrestoreView(_r64); const ticket_r58 = restoredCtx.$implicit; const ctx_r63 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r63.onViewTicket(ticket_r58)); });
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
    } }, dependencies: [i4.MatButton, i5.NgForOf, i5.NgIf, i6.MatIcon, i7.ScrollToDirective, i5.DatePipe], styles: [_c0] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(OnboardingDetailComponent, [{
        type: Component,
        args: [{ selector: 'lib-onboarding-detail', template: "<div class=\"onboarding-detail\">\r\n    <h1 class=\"title\">\r\n        <p>{{locale?.INTEGRATION_OF_PROFILE}} {{detailView?.Name}}</p>\r\n        <mat-icon *ngIf=\"!detailView?.Finished\" style=\"margin-left: 20px; cursor: pointer;\" (click)=\"onEdit()\">edit\r\n        </mat-icon>\r\n    </h1>\r\n    <div class=\"view-content\">\r\n        <div class=\"left-content\">\r\n            <div class=\"user-info\">\r\n                <div class=\"user-name\">\r\n                    <h2>{{detailView?.user.FirstName }} {{detailView?.user.LastName }} <span>{{locale?.ARRIVED_ON}}\r\n                        </span>\r\n                        <p>{{detailView?.createdAt | date:'dd/MM/yy' }}</p>\r\n                    </h2>\r\n                </div>\r\n                <p class=\"contact\">{{detailView?.user?.AccountName }} <span></span> {{detailView?.user?.Title}}</p>\r\n                <p class=\"contact\">\r\n                    <mat-icon fontSet=\"material-icons-outlined\">email</mat-icon>{{detailView?.user?.Email }}\r\n                    <ng-container *ngIf=\"detailView?.user?.MobilePhone?.internationalNumber\">\r\n                        <span></span>\r\n                        <mat-icon fontSet=\"material-icons-outlined\">phone</mat-icon>\r\n                        {{detailView?.user?.MobilePhone?.internationalNumber}}\r\n                    </ng-container>\r\n\r\n                    <ng-container *ngIf=\"detailView?.user?.Phone?.internationalNumber\">\r\n                        <span></span>\r\n                        <mat-icon fontSet=\"material-icons-outlined\">smartphone</mat-icon>\r\n                        {{detailView?.user?.Phone?.internationalNumber}}\r\n                    </ng-container>\r\n\r\n                </p>\r\n\r\n            </div>\r\n\r\n            <div id=\"fields\" class=\"fields\">\r\n                <ul>\r\n                    <li [ngxScrollTo]=\"'#'+category.name\" class=\"menu-item\" [class]=\"i===0 ? 'active':''\"\r\n                        *ngFor=\"let category of detailView?.categories;  let i=index\" [id]=\"category.name+'x'\">\r\n                        <a>{{category.name}}</a>\r\n                    </li>\r\n                </ul>\r\n                <div class=\"category-view-container\" (scroll)=\"onScroll($event)\">\r\n                    <section class=\"category-item\" *ngFor=\"let category of detailView?.categories;  let i=index\"\r\n                        [id]=\"category.name\">\r\n                        <div class=\"category-item-inner\">\r\n                            <div class=\"category-header\">\r\n                                <div class=\"title-content\">\r\n                                    <h2>{{category.name}}</h2>\r\n                                    <p class=\"category-description\">\r\n                                        {{locale?.CATEGORY_SUBTITLE}} {{\r\n                                        catNameStart(category.name) ? \"l'\" + category.name :\r\n                                        category.name }}\r\n                                    </p>\r\n                                </div>\r\n                                <div class=\"progress-status\">\r\n                                    <!-- {{category?.fieldCompleted}} / {{category?.fieldLength}} -->\r\n                                    <!-- <div *ngIf=\"category?.fieldCompleted===category?.fieldLength\"\r\n                                        class=\"status in-progress\">\r\n                                        <span>En cours de traitement</span>\r\n                                        <lib-loading></lib-loading>\r\n                                    </div> -->\r\n                                    <!-- <div *ngIf=\"category?.fieldCompleted ===category?.fieldLength\"\r\n                                        class=\"status ongoing\">\r\n                                        <span style=\"margin-right: 10px;\">En cours</span>\r\n                                        <mat-icon>check</mat-icon>\r\n                                    </div> -->\r\n                                    <!-- <div *ngIf=\"category?.fieldCompleted < category?.fieldLength\"\r\n                                        class=\"status progress-bar\">\r\n                                        <span style=\"width: 300px;\">{{progress(category?.fieldCompleted ,\r\n                                            category?.fieldLength)}}% Termin\u00E9</span>\r\n                                        <mat-progress-bar mode=\"determinate\"\r\n                                            [value]=\"progress(category?.fieldCompleted , category?.fieldLength)\">\r\n                                        </mat-progress-bar>\r\n                                    </div> -->\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"category-item-forms\" *ngFor=\"let forms of category.forms\">\r\n                                <ng-container *ngIf=\"!forms.forms\">\r\n                                    <p class=\"label\">{{forms.label}}</p>\r\n                                    <ng-container *ngIf=\"onFormatDisplayValue(forms.value).type==='array'\">\r\n                                        <ul class=\"ul-list\">\r\n                                            <li *ngFor=\"let item of forms.value \">{{item}}</li>\r\n                                        </ul>\r\n                                    </ng-container>\r\n\r\n                                    <h4 *ngIf=\"onFormatDisplayValue(forms.value).type!=='array'\">\r\n                                        {{onFormatDisplayValue(forms.value).value}}\r\n                                    </h4>\r\n                                </ng-container>\r\n                                <ng-container *ngIf=\"forms.forms\">\r\n                                    <h3>{{forms.label}}</h3>\r\n                                    <div class=\"category-item-forms\" *ngFor=\"let sub of forms.forms\">\r\n                                        <ng-container *ngIf=\"!sub.forms\">\r\n                                            <p class=\"label\">{{sub.label}}</p>\r\n                                            <ng-container *ngIf=\"onFormatDisplayValue(sub.value).type==='array'\">\r\n                                                <ul class=\"ul-list\">\r\n                                                    <li *ngFor=\"let item of sub.value \">{{item}}</li>\r\n                                                </ul>\r\n                                            </ng-container>\r\n                                            <h4 *ngIf=\"onFormatDisplayValue(sub.value).type!=='array'\">\r\n                                                {{onFormatDisplayValue(sub.value).value}}</h4>\r\n                                        </ng-container>\r\n                                        <ng-container *ngIf=\"sub.forms\">\r\n                                            <h3>{{sub.label}}</h3>\r\n                                            <div class=\"category-item-forms\" *ngFor=\"let child of sub.forms\">\r\n                                                <ng-container *ngIf=\"!child.forms\">\r\n                                                    <p class=\"label\">{{child.label}}</p>\r\n                                                    <ng-container\r\n                                                        *ngIf=\"onFormatDisplayValue(child.value).type==='array'\">\r\n                                                        <ul class=\"ul-list\">\r\n                                                            <li *ngFor=\"let item of child.value\">{{item}}</li>\r\n                                                        </ul>\r\n                                                    </ng-container>\r\n                                                    <h4 *ngIf=\"onFormatDisplayValue(child.value).type!=='array'\">\r\n                                                        {{onFormatDisplayValue(child.value).value}}</h4>\r\n                                                </ng-container>\r\n                                                <ng-container *ngIf=\"child.forms\">\r\n                                                    <h3>{{child.label}}</h3>\r\n                                                    <div class=\"category-item-forms\" *ngFor=\"let c2 of child.forms\">\r\n                                                        <p class=\"label\">{{c2.label}}</p>\r\n                                                        <ng-container\r\n                                                            *ngIf=\"onFormatDisplayValue(c2.value).type==='array'\">\r\n                                                            <ul class=\"ul-list\">\r\n                                                                <li *ngFor=\"let item of c2.value \">{{item}}</li>\r\n                                                            </ul>\r\n                                                        </ng-container>\r\n                                                        <h4 *ngIf=\"onFormatDisplayValue(c2.value).type!=='array'\">\r\n                                                            {{onFormatDisplayValue(c2.value).value}}</h4>\r\n                                                    </div>\r\n                                                </ng-container>\r\n                                            </div>\r\n                                        </ng-container>\r\n                                    </div>\r\n                                </ng-container>\r\n                            </div>\r\n                        </div>\r\n                    </section>\r\n                    <section style=\"background-color: transparent\">\r\n                        <div style=\"height: 450px;\"></div>\r\n                    </section>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"right-content\">\r\n            <h2>{{locale?.TICKET_RELATED}}</h2>\r\n            <p class=\"subtitle\">{{locale?.HERE_YOU_WILL}}</p>\r\n            <ng-container *ngIf=\"detailView?.tickets && detailView?.tickets.length>0\">\r\n                <div class=\"box-ticket-info\" *ngFor=\"let ticket of detailView?.tickets\">\r\n                    <div class=\"d-flex-row box-header\">\r\n                        <button mat-button class=\"d-flex-row\" style=\"color: #575F6E;padding-left: 0;\"\r\n                            (click)=\"onViewTicket(ticket)\">\r\n                            <mat-icon fontSet=\"material-icons-outlined\">list_alt</mat-icon><span\r\n                                style=\"font-weight: 400;\">Ticket\r\n                                {{ticket.CaseNumber}}</span>\r\n                        </button>\r\n                        <button mat-button class=\"progress\">{{ticket.Status}}</button>\r\n                    </div>\r\n                    <p class=\"date\">{{ticket.CreatedDate | date :'dd/MM/yy'}}</p>\r\n                    <div class=\"box-header\">\r\n                        <h3 style=\"width: 70%;margin-top: 10px;\">{{ticket.Subject}}</h3>\r\n                    </div>\r\n                    <div class=\"d-flex-row\" style=\"gap: 10px;width: 70%;margin-top: 10px;margin-top: 10px;\">\r\n                        <progress style=\"width: 88%;\" id=\"file\" max=\"100\"\r\n                            [value]=\"ticket.WorkflowProgress || 0\"></progress>\r\n                        <span class=\"percentage\" style=\"width: 100px;\">{{ticket.WorkflowProgress}} %</span>\r\n                    </div>\r\n                    <!-- <button *ngIf=\"ticket.Attachments && ticket.Attachments.length>0\" mat-button class=\"download-ticket\" -->\r\n                    <button *ngFor=\"let attach of ticket.Attachments\" mat-button class=\"download-ticket\"\r\n                        (click)=\"openBottomSheet(attach)\"> {{substr(attach.Name)}}.pdf\r\n                    </button>\r\n                </div>\r\n            </ng-container>\r\n            <div class=\"box-ticket-info\" *ngIf=\"!detailView?.tickets\">\r\n                <p class=\"description\">\"{{locale?.NO_TICKET}}\"</p>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>", styles: [".onboarding-detail{padding-top:30px}.onboarding-detail h1,.onboarding-detail h2,.onboarding-detail h3,.onboarding-detail h4,.onboarding-detail h5,.onboarding-detail h6{margin:0;font-style:normal;font-weight:700;line-height:110%;display:flex;align-items:center;color:#242731}.onboarding-detail p{margin:0}.onboarding-detail h1{font-size:24px}.onboarding-detail h1.title{margin-bottom:33px;margin-top:10px}.onboarding-detail h2{font-size:20px}.onboarding-detail h3{font-size:18px}.onboarding-detail h4{font-size:16px}.onboarding-detail h5{font-size:14px}.onboarding-detail h6{font-size:12px}.onboarding-detail .view-content{display:flex;flex-direction:row;justify-content:space-between;background-color:#f4f7f9}.onboarding-detail .view-content .left-content{width:70%;border-radius:6px;margin-right:2%}@media (max-width: 1200px){.onboarding-detail .view-content .left-content{width:50%}}.onboarding-detail .view-content .left-content .user-info{background:transparent;border-radius:6px;padding:10px 10px 10px 0}.onboarding-detail .view-content .left-content .user-info span:before{content:\".\";font-size:25px;margin:0 10px}.onboarding-detail .view-content .left-content .user-info p{font-weight:400;display:flex;align-items:center}.onboarding-detail .view-content .left-content .user-info p mat-icon{padding-right:5px}.onboarding-detail .view-content .left-content .user-info p.contact{margin-top:10px}.onboarding-detail .view-content .left-content .user-info .user-name{line-height:30px}.onboarding-detail .view-content .left-content .user-info .user-name span{font-weight:400;font-size:12px;margin-right:10px}.onboarding-detail .view-content .left-content .user-info .user-contact{line-height:30px}.onboarding-detail .view-content .left-content section{background:#FFFFFF;border-radius:8px;padding:15px;margin-bottom:30px}.onboarding-detail .view-content .left-content section .category-item-inner .category-description{font-style:normal;font-weight:250;font-size:14px;line-height:16px;color:#575f6e;margin-top:5px}.onboarding-detail .view-content .left-content section .category-item-inner .category-item-forms{margin-top:20px}.onboarding-detail .view-content .left-content section .category-item-inner .category-item-forms .label{font-style:normal;font-weight:250;font-size:12px;line-height:16px;display:flex;align-items:center;color:#575f6e}.onboarding-detail .view-content .right-content{background-color:#fff;border-radius:6px;padding:15px;overflow:auto;max-height:85.5vh;margin-right:20px}.onboarding-detail .view-content .right-content p{color:#575f6e}.onboarding-detail .view-content .right-content .box-ticket-info{padding-bottom:20px;padding-top:20px;border-bottom:2px solid #E2E4E5}.onboarding-detail .view-content .right-content .box-ticket-info .box-header{display:flex;justify-content:space-between;align-items:center}.onboarding-detail .view-content .right-content .box-ticket-info .box-header button{min-width:auto;height:36px;border-radius:4px;font-weight:500;font-size:16px;display:flex;align-items:center;text-transform:capitalize;color:#fff}.onboarding-detail .view-content .right-content .box-ticket-info .box-header .finished{background:#6FE8D7}.onboarding-detail .view-content .right-content .box-ticket-info .box-header .progress{background:#F3A124}.onboarding-detail .view-content .right-content .box-ticket-info .download-ticket{margin-top:20px;background-color:#fff;border:1px solid #171F26;display:block}.onboarding-detail .view-content .category-view-container{display:flex;flex-direction:column;max-height:70vh;overflow:auto}.onboarding-detail .view-content .right-content::-webkit-scrollbar,.onboarding-detail .view-content .category-view-container::-webkit-scrollbar{display:none}.onboarding-detail .view-content .right-content,.onboarding-detail .view-content .category-view-container{-ms-overflow-style:none;scrollbar-width:none}.fields{height:84%}.fields ul{list-style:none;display:flex;margin:33px 0;padding:0;overflow:auto}.fields ul li{margin-right:20px;padding-bottom:5px;border-bottom:3px solid transparent}.fields ul li a{text-decoration:none;font-style:normal;font-weight:700;font-size:14px;line-height:120%;color:#171f26;opacity:.5;overflow:hidden;display:-webkit-box;-webkit-line-clamp:1;-webkit-box-orient:vertical}.fields ul li.menu-item:hover,.fields ul li.menu-item.active{cursor:pointer;border-bottom:3px solid #3C4252}.fields ul li.menu-item:hover a,.fields ul li.menu-item.active a{font-style:normal;font-weight:700;font-size:14px;line-height:120%;opacity:1;text-decoration:none!important}.progress-status .status{display:flex;align-items:center}.progress-status .ongoing{color:#6fe8d7}.progress-status .in-progress{padding-right:25px;color:#f3a124;font-weight:500;font-size:16px}::ng-deep .progress-status{font-size:16px}::ng-deep .progress-status .mat-progress-bar{display:block;height:20px;overflow:hidden;border-radius:50px;position:relative;transition:opacity .25s linear;width:100%}::ng-deep .progress-status .mat-progress-bar-fill:after{background-color:#6fe8d7}::ng-deep .progress-status .mat-progress-bar-buffer{background-color:#ecf3f7}.category-header{display:flex;align-items:center;justify-content:space-between}.d-flex-row{display:flex;align-items:center}.d-flex-row mat-icon{margin-right:5px}::ng-deep mat-bottom-sheet-container{width:100vw;max-width:100vw!important;height:150px;background:#F4F7F9!important;display:flex!important;flex-direction:column;justify-content:center}::ng-deep mat-bottom-sheet-container .sheet-content{display:flex;align-items:center;justify-content:center}::ng-deep mat-bottom-sheet-container h3{font-style:normal;font-weight:700;font-size:20px;line-height:100%;color:#171f26;margin-bottom:0!important;margin-top:0!important}::ng-deep mat-bottom-sheet-container button.download-button{width:277px;height:48px;background:#171F26;box-shadow:0 0 #0003;border-radius:7px;color:#fff;margin:0 25px}::ng-deep mat-bottom-sheet-container button.close-button{height:48px;background:#fff;box-shadow:0 0 #0003;border-radius:7px;color:#171f26;border:1px solid #171F26}.ul-list{list-style:disc!important;display:block!important;margin-left:0!important;padding-left:0!important;margin-top:0!important}.ul-list li:before{content:\".\";font-size:40px}\n"] }]
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
        this.attach = this._bottomSheetRef.containerInstance._config.data;
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
    } }, dependencies: [i4.MatButton], styles: [_c0] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BottomSheet, [{
        type: Component,
        args: [{ selector: 'bottom-sheet', template: "<div class=\"sheet-content\">\r\n  <h3>\r\n    {{attach.Name}}.pdf\r\n  </h3>\r\n  <button class=\"download-button\" mat-button (click)=\"onDownloadFile()\">{{locale?.DONWLOAD_THE_PDF}}</button>\r\n  <button class=\"close-button\" mat-button (click)=\"close()\">{{locale?.CLOSE}}</button>\r\n\r\n</div>", styles: [".onboarding-detail{padding-top:30px}.onboarding-detail h1,.onboarding-detail h2,.onboarding-detail h3,.onboarding-detail h4,.onboarding-detail h5,.onboarding-detail h6{margin:0;font-style:normal;font-weight:700;line-height:110%;display:flex;align-items:center;color:#242731}.onboarding-detail p{margin:0}.onboarding-detail h1{font-size:24px}.onboarding-detail h1.title{margin-bottom:33px;margin-top:10px}.onboarding-detail h2{font-size:20px}.onboarding-detail h3{font-size:18px}.onboarding-detail h4{font-size:16px}.onboarding-detail h5{font-size:14px}.onboarding-detail h6{font-size:12px}.onboarding-detail .view-content{display:flex;flex-direction:row;justify-content:space-between;background-color:#f4f7f9}.onboarding-detail .view-content .left-content{width:70%;border-radius:6px;margin-right:2%}@media (max-width: 1200px){.onboarding-detail .view-content .left-content{width:50%}}.onboarding-detail .view-content .left-content .user-info{background:transparent;border-radius:6px;padding:10px 10px 10px 0}.onboarding-detail .view-content .left-content .user-info span:before{content:\".\";font-size:25px;margin:0 10px}.onboarding-detail .view-content .left-content .user-info p{font-weight:400;display:flex;align-items:center}.onboarding-detail .view-content .left-content .user-info p mat-icon{padding-right:5px}.onboarding-detail .view-content .left-content .user-info p.contact{margin-top:10px}.onboarding-detail .view-content .left-content .user-info .user-name{line-height:30px}.onboarding-detail .view-content .left-content .user-info .user-name span{font-weight:400;font-size:12px;margin-right:10px}.onboarding-detail .view-content .left-content .user-info .user-contact{line-height:30px}.onboarding-detail .view-content .left-content section{background:#FFFFFF;border-radius:8px;padding:15px;margin-bottom:30px}.onboarding-detail .view-content .left-content section .category-item-inner .category-description{font-style:normal;font-weight:250;font-size:14px;line-height:16px;color:#575f6e;margin-top:5px}.onboarding-detail .view-content .left-content section .category-item-inner .category-item-forms{margin-top:20px}.onboarding-detail .view-content .left-content section .category-item-inner .category-item-forms .label{font-style:normal;font-weight:250;font-size:12px;line-height:16px;display:flex;align-items:center;color:#575f6e}.onboarding-detail .view-content .right-content{background-color:#fff;border-radius:6px;padding:15px;overflow:auto;max-height:85.5vh;margin-right:20px}.onboarding-detail .view-content .right-content p{color:#575f6e}.onboarding-detail .view-content .right-content .box-ticket-info{padding-bottom:20px;padding-top:20px;border-bottom:2px solid #E2E4E5}.onboarding-detail .view-content .right-content .box-ticket-info .box-header{display:flex;justify-content:space-between;align-items:center}.onboarding-detail .view-content .right-content .box-ticket-info .box-header button{min-width:auto;height:36px;border-radius:4px;font-weight:500;font-size:16px;display:flex;align-items:center;text-transform:capitalize;color:#fff}.onboarding-detail .view-content .right-content .box-ticket-info .box-header .finished{background:#6FE8D7}.onboarding-detail .view-content .right-content .box-ticket-info .box-header .progress{background:#F3A124}.onboarding-detail .view-content .right-content .box-ticket-info .download-ticket{margin-top:20px;background-color:#fff;border:1px solid #171F26;display:block}.onboarding-detail .view-content .category-view-container{display:flex;flex-direction:column;max-height:70vh;overflow:auto}.onboarding-detail .view-content .right-content::-webkit-scrollbar,.onboarding-detail .view-content .category-view-container::-webkit-scrollbar{display:none}.onboarding-detail .view-content .right-content,.onboarding-detail .view-content .category-view-container{-ms-overflow-style:none;scrollbar-width:none}.fields{height:84%}.fields ul{list-style:none;display:flex;margin:33px 0;padding:0;overflow:auto}.fields ul li{margin-right:20px;padding-bottom:5px;border-bottom:3px solid transparent}.fields ul li a{text-decoration:none;font-style:normal;font-weight:700;font-size:14px;line-height:120%;color:#171f26;opacity:.5;overflow:hidden;display:-webkit-box;-webkit-line-clamp:1;-webkit-box-orient:vertical}.fields ul li.menu-item:hover,.fields ul li.menu-item.active{cursor:pointer;border-bottom:3px solid #3C4252}.fields ul li.menu-item:hover a,.fields ul li.menu-item.active a{font-style:normal;font-weight:700;font-size:14px;line-height:120%;opacity:1;text-decoration:none!important}.progress-status .status{display:flex;align-items:center}.progress-status .ongoing{color:#6fe8d7}.progress-status .in-progress{padding-right:25px;color:#f3a124;font-weight:500;font-size:16px}::ng-deep .progress-status{font-size:16px}::ng-deep .progress-status .mat-progress-bar{display:block;height:20px;overflow:hidden;border-radius:50px;position:relative;transition:opacity .25s linear;width:100%}::ng-deep .progress-status .mat-progress-bar-fill:after{background-color:#6fe8d7}::ng-deep .progress-status .mat-progress-bar-buffer{background-color:#ecf3f7}.category-header{display:flex;align-items:center;justify-content:space-between}.d-flex-row{display:flex;align-items:center}.d-flex-row mat-icon{margin-right:5px}::ng-deep mat-bottom-sheet-container{width:100vw;max-width:100vw!important;height:150px;background:#F4F7F9!important;display:flex!important;flex-direction:column;justify-content:center}::ng-deep mat-bottom-sheet-container .sheet-content{display:flex;align-items:center;justify-content:center}::ng-deep mat-bottom-sheet-container h3{font-style:normal;font-weight:700;font-size:20px;line-height:100%;color:#171f26;margin-bottom:0!important;margin-top:0!important}::ng-deep mat-bottom-sheet-container button.download-button{width:277px;height:48px;background:#171F26;box-shadow:0 0 #0003;border-radius:7px;color:#fff;margin:0 25px}::ng-deep mat-bottom-sheet-container button.close-button{height:48px;background:#fff;box-shadow:0 0 #0003;border-radius:7px;color:#171f26;border:1px solid #171F26}.ul-list{list-style:disc!important;display:block!important;margin-left:0!important;padding-left:0!important;margin-top:0!important}.ul-list li:before{content:\".\";font-size:40px}\n"] }]
    }], function () { return [{ type: i3.MatBottomSheetRef }, { type: i2.OnboardingService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib25ib2FyZGluZy1kZXRhaWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvb25ib2FyZGluZy9zcmMvbGliL2NvbXBvbmVudHMvb25ib2FyZGluZy9vbmJvYXJkaW5nLWRldGFpbC9vbmJvYXJkaW5nLWRldGFpbC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9vbmJvYXJkaW5nL3NyYy9saWIvY29tcG9uZW50cy9vbmJvYXJkaW5nL29uYm9hcmRpbmctZGV0YWlsL29uYm9hcmRpbmctZGV0YWlsLmNvbXBvbmVudC5odG1sIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvb25ib2FyZGluZy9zcmMvbGliL2NvbXBvbmVudHMvb25ib2FyZGluZy9vbmJvYXJkaW5nLWRldGFpbC9ib3R0b20tc2hlZXQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUs3RixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7Ozs7Ozs7OztJQ0ZoQyxvQ0FBdUc7SUFBbkIsNktBQVMsZUFBQSxlQUFRLENBQUEsSUFBQztJQUFDLHFCQUN2RztJQUFBLGlCQUFXOzs7SUFjQyw2QkFBeUU7SUFDckUsdUJBQWE7SUFDYixtQ0FBNEM7SUFBQSxxQkFBSztJQUFBLGlCQUFXO0lBQzVELFlBQ0o7SUFBQSwwQkFBZTs7O0lBRFgsZUFDSjtJQURJLHNOQUNKOzs7SUFFQSw2QkFBbUU7SUFDL0QsdUJBQWE7SUFDYixtQ0FBNEM7SUFBQSwwQkFBVTtJQUFBLGlCQUFXO0lBQ2pFLFlBQ0o7SUFBQSwwQkFBZTs7O0lBRFgsZUFDSjtJQURJLDBNQUNKOzs7SUFRQSw4QkFDMkYsUUFBQTtJQUNwRixZQUFpQjtJ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SUFFRCxLQUFLLENBQUMsY0FBYztRQUNsQixJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDZixNQUFNLE1BQU0sR0FBRyxNQUFNLElBQUksQ0FBQyxPQUFPLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ2xFLElBQUksQ0FBQyxNQUFNLEVBQUU7Z0JBQ1gsSUFBSSxDQUFDLFNBQVMsR0FBRyxvQkFBb0IsQ0FBQTtnQkFDckMsVUFBVSxDQUFDLEdBQUcsRUFBRTtvQkFDZCxJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sRUFBRSxDQUFDO29CQUMvQixJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQTtnQkFDckIsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO2FBQ1Y7U0FFRjtJQUNILENBQUM7O3NFQS9CVSxXQUFXOzhEQUFYLFdBQVc7UUUxRnhCLDhCQUEyQixTQUFBO1FBRXZCLFlBQ0Y7UUFBQSxpQkFBSztRQUNMLGlDQUFzRTtRQUEzQix3RkFBUyxvQkFBZ0IsSUFBQztRQUFDLFlBQTRCO1FBQUEsaUJBQVM7UUFDM0csaUNBQTBEO1FBQWxCLHdGQUFTLFdBQU8sSUFBQztRQUFDLFlBQWlCO1FBQUEsaUJBQVMsRUFBQTs7UUFIbEYsZUFDRjtRQURFLG9EQUNGO1FBQ3NFLGVBQTRCO1FBQTVCLDZFQUE0QjtRQUN4QyxlQUFpQjtRQUFqQixrRUFBaUI7O3VGRnFGaEUsV0FBVztjQUx2QixTQUFTOzJCQUNFLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSG9zdExpc3RlbmVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTWF0Qm90dG9tU2hlZXQsIE1hdEJvdHRvbVNoZWV0UmVmIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvYm90dG9tLXNoZWV0JztcclxuXHJcbmltcG9ydCB7IE9uYm9hcmRpbmdTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vb25ib2FyZGluZy5zZXJ2aWNlJztcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgbG9jYWxlcyB9IGZyb20gJy4uLy4uLy4uL2kxOG4nO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdsaWItb25ib2FyZGluZy1kZXRhaWwnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9vbmJvYXJkaW5nLWRldGFpbC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vb25ib2FyZGluZy1kZXRhaWwuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgT25ib2FyZGluZ0RldGFpbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgQElucHV0KCkgZGV0YWlsVmlldztcclxuICBAT3V0cHV0KCkgb25TaG93TW9kZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4odHJ1ZSk7XHJcbiAgbG9jYWxlOiBhbnkgPSB7fVxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgc2VydmljZTogT25ib2FyZGluZ1NlcnZpY2UsIHByaXZhdGUgX2JvdHRvbVNoZWV0OiBNYXRCb3R0b21TaGVldCkge1xyXG4gICAgdGhpcy5zZXJ2aWNlLl9sYW5nLnN1YnNjcmliZSgobG9jYWxlKSA9PiB7XHJcbiAgICAgIHRoaXMubG9jYWxlID0gbG9jYWxlc1tsb2NhbGVdLlJFUVVFU1Q7XHJcbiAgICB9KVxyXG4gIH1cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICB9XHJcblxyXG4gIG9wZW5Cb3R0b21TaGVldChhdHRhY2gpOiB2b2lkIHtcclxuICAgIHRoaXMuX2JvdHRvbVNoZWV0Lm9wZW4oQm90dG9tU2hlZXQsIHtcclxuICAgICAgZGF0YTogYXR0YWNoXHJcbiAgICAgIC8vIGRhdGE6IEF0dGFjaGVtZW50ICYmIEF0dGFjaGVtZW50Lmxlbmd0aCA+IDEgPyBBdHRhY2hlbWVudC5maW5kKChhdHRhY2g6IGFueSkgPT4gYXR0YWNoLk5hbWUuaW5jbHVkZXMoXCJDb25maWd1cmF0aW9uXCIpKSA6IEF0dGFjaGVtZW50WzBdXHJcbiAgICB9KTtcclxuICB9XHJcbiAgQEhvc3RMaXN0ZW5lcignc2Nyb2xsJywgWyckZXZlbnQnXSlcclxuICBvblNjcm9sbChldmVudCkge1xyXG4gICAgY29uc3Qgc2VjdGlvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwic2VjdGlvblwiKTtcclxuICAgIGNvbnN0IG5hdkxpID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5maWVsZHMgdWwgbGlcIik7XHJcblxyXG4gICAgbGV0IGN1cnJlbnQgPSBcIlwiO1xyXG4gICAgc2VjdGlvbnMuZm9yRWFjaCgoc2VjdGlvbikgPT4ge1xyXG4gICAgICBjb25zdCBzZWN0aW9uVG9wID0gc2VjdGlvbi5vZmZzZXRUb3A7XHJcbiAgICAgIGlmIChldmVudC50YXJnZXQuc2Nyb2xsVG9wID4gc2VjdGlvblRvcCAtIDMwMCkge1xyXG4gICAgICAgIGN1cnJlbnQgPSBzZWN0aW9uLmdldEF0dHJpYnV0ZShcImlkXCIpXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgbmF2TGkuZm9yRWFjaCgobGkpID0+IHtcclxuICAgICAgY29uc3QgaWQgPSBsaS5nZXRBdHRyaWJ1dGUoJ2lkJylcclxuICAgICAgaWYgKGlkPy5zdWJzdHJpbmcoMCwgaWQubGVuZ3RoIC0gMSkgPT09IGN1cnJlbnQpIHtcclxuICAgICAgICBsaS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGxpLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgY2F0TmFtZVN0YXJ0KHN0cjogc3RyaW5nKSB7XHJcbiAgICBjb25zdCB2b3dlbHMgPSBbJ2EnLCAnZScsICdpJywgJ28nLCAndScsICd5J107XHJcbiAgICByZXR1cm4gdm93ZWxzLmluY2x1ZGVzKHN0ci5zdWJzdHIoMCwgMSkudG9Mb2NhbGVMb3dlckNhc2UoKSlcclxuICB9XHJcbiAgb25FZGl0KCkge1xyXG4gICAgdGhpcy5vblNob3dNb2RlLmVtaXQoZmFsc2UpXHJcbiAgfVxyXG5cclxuICBwcm9ncmVzcyhjb21wbGV0ZWQsIGxlbmd0aCkge1xyXG4gICAgcmV0dXJuIDEwMCAqIGNvbXBsZXRlZCAvIGxlbmd0aFxyXG4gIH1cclxuXHJcbiAgc3Vic3RyKG5hbWU6IHN0cmluZykge1xyXG4gICAgcmV0dXJuIG5hbWUubGVuZ3RoID4gMzAgPyBgJHtuYW1lLnNsaWNlKDAsIDE1KX0uLi4ke25hbWUuc2xpY2UoLTE1KX1gIDogbmFtZVxyXG4gIH1cclxuXHJcbiAgb25WaWV3VGlja2V0KENhc2UpIHtcclxuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtgcmVwb3J0aW5nL2Rhc2hib2FyZC8ke0Nhc2UuX2lkfWBdKVxyXG4gIH1cclxuICBvbkZvcm1hdERpc3BsYXlWYWx1ZSh2YWx1ZSkge1xyXG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgdHlwZTogJ2FycmF5JyxcclxuICAgICAgICB2YWx1ZVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdmFsdWUgPT09IHRydWUgPyB7IHZhbHVlOiBcIk91aVwiLCB0eXBlOiAnc3RyaW5nJyB9IDogdmFsdWUgPT09IGZhbHNlID8geyB2YWx1ZTogXCJOb25cIiwgdHlwZTogJ3N0cmluZycgfSA6IHsgdmFsdWUsIHR5cGU6ICdzdHJpbmcnIH1cclxuXHJcbiAgfVxyXG5cclxufVxyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYm90dG9tLXNoZWV0JyxcclxuICB0ZW1wbGF0ZVVybDogJ2JvdHRvbS1zaGVldC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9vbmJvYXJkaW5nLWRldGFpbC5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBCb3R0b21TaGVldCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgYXR0YWNoID0gbnVsbDtcclxuICBmaWxlbmFtZSA9IFwiXCJcclxuICBub3RfZm91bmQgPSBcIlwiXHJcbiAgbG9jYWxlOiBhbnkgPSB7fVxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2JvdHRvbVNoZWV0UmVmOiBNYXRCb3R0b21TaGVldFJlZjxCb3R0b21TaGVldD4sIHByaXZhdGUgc2VydmljZTogT25ib2FyZGluZ1NlcnZpY2UpIHtcclxuICAgIHRoaXMuc2VydmljZS5fbGFuZy5zdWJzY3JpYmUoKGxvY2FsZSkgPT4ge1xyXG4gICAgICB0aGlzLmxvY2FsZSA9IGxvY2FsZXNbbG9jYWxlXS5SRVFVRVNUO1xyXG4gICAgfSlcclxuXHJcbiAgfVxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5hdHRhY2ggPSB0aGlzLl9ib3R0b21TaGVldFJlZi5jb250YWluZXJJbnN0YW5jZS5fY29uZmlnLmRhdGE7XHJcbiAgfVxyXG5cclxuICBjbG9zZSgpOiB2b2lkIHtcclxuICAgIHRoaXMuX2JvdHRvbVNoZWV0UmVmLmRpc21pc3MoKTtcclxuICB9XHJcblxyXG4gIGFzeW5jIG9uRG93bmxvYWRGaWxlKCkge1xyXG4gICAgaWYgKHRoaXMuYXR0YWNoKSB7XHJcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMuc2VydmljZS5kb3dubG9hZEF0dGFjaG1lbnQodGhpcy5hdHRhY2gpO1xyXG4gICAgICBpZiAoIXJlc3VsdCkge1xyXG4gICAgICAgIHRoaXMubm90X2ZvdW5kID0gXCJmaWNoaWVyIG5vbiB0cm91dsOpXCJcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgIHRoaXMuX2JvdHRvbVNoZWV0UmVmLmRpc21pc3MoKTtcclxuICAgICAgICAgIHRoaXMubm90X2ZvdW5kID0gXCJcIlxyXG4gICAgICAgIH0sIDMwMDApO1xyXG4gICAgICB9XHJcblxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuIiwiPGRpdiBjbGFzcz1cIm9uYm9hcmRpbmctZGV0YWlsXCI+XHJcbiAgICA8aDEgY2xhc3M9XCJ0aXRsZVwiPlxyXG4gICAgICAgIDxwPnt7bG9jYWxlPy5JTlRFR1JBVElPTl9PRl9QUk9GSUxFfX0ge3tkZXRhaWxWaWV3Py5OYW1lfX08L3A+XHJcbiAgICAgICAgPG1hdC1pY29uICpuZ0lmPVwiIWRldGFpbFZpZXc/LkZpbmlzaGVkXCIgc3R5bGU9XCJtYXJnaW4tbGVmdDogMjBweDsgY3Vyc29yOiBwb2ludGVyO1wiIChjbGljayk9XCJvbkVkaXQoKVwiPmVkaXRcclxuICAgICAgICA8L21hdC1pY29uPlxyXG4gICAgPC9oMT5cclxuICAgIDxkaXYgY2xhc3M9XCJ2aWV3LWNvbnRlbnRcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwibGVmdC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ1c2VyLWluZm9cIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ1c2VyLW5hbWVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDI+e3tkZXRhaWxWaWV3Py51c2VyLkZpcnN0TmFtZSB9fSB7e2RldGFpbFZpZXc/LnVzZXIuTGFzdE5hbWUgfX0gPHNwYW4+e3tsb2NhbGU/LkFSUklWRURfT059fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPnt7ZGV0YWlsVmlldz8uY3JlYXRlZEF0IHwgZGF0ZTonZGQvTU0veXknIH19PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiY29udGFjdFwiPnt7ZGV0YWlsVmlldz8udXNlcj8uQWNjb3VudE5hbWUgfX0gPHNwYW4+PC9zcGFuPiB7e2RldGFpbFZpZXc/LnVzZXI/LlRpdGxlfX08L3A+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImNvbnRhY3RcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bWF0LWljb24gZm9udFNldD1cIm1hdGVyaWFsLWljb25zLW91dGxpbmVkXCI+ZW1haWw8L21hdC1pY29uPnt7ZGV0YWlsVmlldz8udXNlcj8uRW1haWwgfX1cclxuICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiZGV0YWlsVmlldz8udXNlcj8uTW9iaWxlUGhvbmU/LmludGVybmF0aW9uYWxOdW1iZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bWF0LWljb24gZm9udFNldD1cIm1hdGVyaWFsLWljb25zLW91dGxpbmVkXCI+cGhvbmU8L21hdC1pY29uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7e2RldGFpbFZpZXc/LnVzZXI/Lk1vYmlsZVBob25lPy5pbnRlcm5hdGlvbmFsTnVtYmVyfX1cclxuICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImRldGFpbFZpZXc/LnVzZXI/LlBob25lPy5pbnRlcm5hdGlvbmFsTnVtYmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG1hdC1pY29uIGZvbnRTZXQ9XCJtYXRlcmlhbC1pY29ucy1vdXRsaW5lZFwiPnNtYXJ0cGhvbmU8L21hdC1pY29uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7e2RldGFpbFZpZXc/LnVzZXI/LlBob25lPy5pbnRlcm5hdGlvbmFsTnVtYmVyfX1cclxuICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuXHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcblxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJmaWVsZHNcIiBjbGFzcz1cImZpZWxkc1wiPlxyXG4gICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBbbmd4U2Nyb2xsVG9dPVwiJyMnK2NhdGVnb3J5Lm5hbWVcIiBjbGFzcz1cIm1lbnUtaXRlbVwiIFtjbGFzc109XCJpPT09MCA/ICdhY3RpdmUnOicnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgKm5nRm9yPVwibGV0IGNhdGVnb3J5IG9mIGRldGFpbFZpZXc/LmNhdGVnb3JpZXM7ICBsZXQgaT1pbmRleFwiIFtpZF09XCJjYXRlZ29yeS5uYW1lKyd4J1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YT57e2NhdGVnb3J5Lm5hbWV9fTwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXRlZ29yeS12aWV3LWNvbnRhaW5lclwiIChzY3JvbGwpPVwib25TY3JvbGwoJGV2ZW50KVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzPVwiY2F0ZWdvcnktaXRlbVwiICpuZ0Zvcj1cImxldCBjYXRlZ29yeSBvZiBkZXRhaWxWaWV3Py5jYXRlZ29yaWVzOyAgbGV0IGk9aW5kZXhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbaWRdPVwiY2F0ZWdvcnkubmFtZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2F0ZWdvcnktaXRlbS1pbm5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhdGVnb3J5LWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0aXRsZS1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMj57e2NhdGVnb3J5Lm5hbWV9fTwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiY2F0ZWdvcnktZGVzY3JpcHRpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7bG9jYWxlPy5DQVRFR09SWV9TVUJUSVRMRX19IHt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXROYW1lU3RhcnQoY2F0ZWdvcnkubmFtZSkgPyBcImwnXCIgKyBjYXRlZ29yeS5uYW1lIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5Lm5hbWUgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcm9ncmVzcy1zdGF0dXNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSB7e2NhdGVnb3J5Py5maWVsZENvbXBsZXRlZH19IC8ge3tjYXRlZ29yeT8uZmllbGRMZW5ndGh9fSAtLT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSA8ZGl2ICpuZ0lmPVwiY2F0ZWdvcnk/LmZpZWxkQ29tcGxldGVkPT09Y2F0ZWdvcnk/LmZpZWxkTGVuZ3RoXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwic3RhdHVzIGluLXByb2dyZXNzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5FbiBjb3VycyBkZSB0cmFpdGVtZW50PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpYi1sb2FkaW5nPjwvbGliLWxvYWRpbmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiAtLT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSA8ZGl2ICpuZ0lmPVwiY2F0ZWdvcnk/LmZpZWxkQ29tcGxldGVkID09PWNhdGVnb3J5Py5maWVsZExlbmd0aFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInN0YXR1cyBvbmdvaW5nXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT1cIm1hcmdpbi1yaWdodDogMTBweDtcIj5FbiBjb3Vyczwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxtYXQtaWNvbj5jaGVjazwvbWF0LWljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiAtLT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSA8ZGl2ICpuZ0lmPVwiY2F0ZWdvcnk/LmZpZWxkQ29tcGxldGVkIDwgY2F0ZWdvcnk/LmZpZWxkTGVuZ3RoXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwic3RhdHVzIHByb2dyZXNzLWJhclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9XCJ3aWR0aDogMzAwcHg7XCI+e3twcm9ncmVzcyhjYXRlZ29yeT8uZmllbGRDb21wbGV0ZWQgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5Py5maWVsZExlbmd0aCl9fSUgVGVybWluw6k8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bWF0LXByb2dyZXNzLWJhciBtb2RlPVwiZGV0ZXJtaW5hdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFt2YWx1ZV09XCJwcm9ncmVzcyhjYXRlZ29yeT8uZmllbGRDb21wbGV0ZWQgLCBjYXRlZ29yeT8uZmllbGRMZW5ndGgpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L21hdC1wcm9ncmVzcy1iYXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiAtLT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhdGVnb3J5LWl0ZW0tZm9ybXNcIiAqbmdGb3I9XCJsZXQgZm9ybXMgb2YgY2F0ZWdvcnkuZm9ybXNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIWZvcm1zLmZvcm1zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwibGFiZWxcIj57e2Zvcm1zLmxhYmVsfX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJvbkZvcm1hdERpc3BsYXlWYWx1ZShmb3Jtcy52YWx1ZSkudHlwZT09PSdhcnJheSdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cInVsLWxpc3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgKm5nRm9yPVwibGV0IGl0ZW0gb2YgZm9ybXMudmFsdWUgXCI+e3tpdGVtfX08L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgKm5nSWY9XCJvbkZvcm1hdERpc3BsYXlWYWx1ZShmb3Jtcy52YWx1ZSkudHlwZSE9PSdhcnJheSdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7b25Gb3JtYXREaXNwbGF5VmFsdWUoZm9ybXMudmFsdWUpLnZhbHVlfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiZm9ybXMuZm9ybXNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPnt7Zm9ybXMubGFiZWx9fTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXRlZ29yeS1pdGVtLWZvcm1zXCIgKm5nRm9yPVwibGV0IHN1YiBvZiBmb3Jtcy5mb3Jtc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFzdWIuZm9ybXNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImxhYmVsXCI+e3tzdWIubGFiZWx9fTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwib25Gb3JtYXREaXNwbGF5VmFsdWUoc3ViLnZhbHVlKS50eXBlPT09J2FycmF5J1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJ1bC1saXN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgKm5nRm9yPVwibGV0IGl0ZW0gb2Ygc3ViLnZhbHVlIFwiPnt7aXRlbX19PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgKm5nSWY9XCJvbkZvcm1hdERpc3BsYXlWYWx1ZShzdWIudmFsdWUpLnR5cGUhPT0nYXJyYXknXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7b25Gb3JtYXREaXNwbGF5VmFsdWUoc3ViLnZhbHVlKS52YWx1ZX19PC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cInN1Yi5mb3Jtc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz57e3N1Yi5sYWJlbH19PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2F0ZWdvcnktaXRlbS1mb3Jtc1wiICpuZ0Zvcj1cImxldCBjaGlsZCBvZiBzdWIuZm9ybXNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFjaGlsZC5mb3Jtc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJsYWJlbFwiPnt7Y2hpbGQubGFiZWx9fTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqbmdJZj1cIm9uRm9ybWF0RGlzcGxheVZhbHVlKGNoaWxkLnZhbHVlKS50eXBlPT09J2FycmF5J1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cInVsLWxpc3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpICpuZ0Zvcj1cImxldCBpdGVtIG9mIGNoaWxkLnZhbHVlXCI+e3tpdGVtfX08L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCAqbmdJZj1cIm9uRm9ybWF0RGlzcGxheVZhbHVlKGNoaWxkLnZhbHVlKS50eXBlIT09J2FycmF5J1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7b25Gb3JtYXREaXNwbGF5VmFsdWUoY2hpbGQudmFsdWUpLnZhbHVlfX08L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImNoaWxkLmZvcm1zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+e3tjaGlsZC5sYWJlbH19PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXRlZ29yeS1pdGVtLWZvcm1zXCIgKm5nRm9yPVwibGV0IGMyIG9mIGNoaWxkLmZvcm1zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJsYWJlbFwiPnt7YzIubGFiZWx9fTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICpuZ0lmPVwib25Gb3JtYXREaXNwbGF5VmFsdWUoYzIudmFsdWUpLnR5cGU9PT0nYXJyYXknXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cInVsLWxpc3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSAqbmdGb3I9XCJsZXQgaXRlbSBvZiBjMi52YWx1ZSBcIj57e2l0ZW19fTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0ICpuZ0lmPVwib25Gb3JtYXREaXNwbGF5VmFsdWUoYzIudmFsdWUpLnR5cGUhPT0nYXJyYXknXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7b25Gb3JtYXREaXNwbGF5VmFsdWUoYzIudmFsdWUpLnZhbHVlfX08L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8c2VjdGlvbiBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9XCJoZWlnaHQ6IDQ1MHB4O1wiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwicmlnaHQtY29udGVudFwiPlxyXG4gICAgICAgICAgICA8aDI+e3tsb2NhbGU/LlRJQ0tFVF9SRUxBVEVEfX08L2gyPlxyXG4gICAgICAgICAgICA8cCBjbGFzcz1cInN1YnRpdGxlXCI+e3tsb2NhbGU/LkhFUkVfWU9VX1dJTEx9fTwvcD5cclxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImRldGFpbFZpZXc/LnRpY2tldHMgJiYgZGV0YWlsVmlldz8udGlja2V0cy5sZW5ndGg+MFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJveC10aWNrZXQtaW5mb1wiICpuZ0Zvcj1cImxldCB0aWNrZXQgb2YgZGV0YWlsVmlldz8udGlja2V0c1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkLWZsZXgtcm93IGJveC1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBtYXQtYnV0dG9uIGNsYXNzPVwiZC1mbGV4LXJvd1wiIHN0eWxlPVwiY29sb3I6ICM1NzVGNkU7cGFkZGluZy1sZWZ0OiAwO1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwib25WaWV3VGlja2V0KHRpY2tldClcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxtYXQtaWNvbiBmb250U2V0PVwibWF0ZXJpYWwtaWNvbnMtb3V0bGluZWRcIj5saXN0X2FsdDwvbWF0LWljb24+PHNwYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT1cImZvbnQtd2VpZ2h0OiA0MDA7XCI+VGlja2V0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3t0aWNrZXQuQ2FzZU51bWJlcn19PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBtYXQtYnV0dG9uIGNsYXNzPVwicHJvZ3Jlc3NcIj57e3RpY2tldC5TdGF0dXN9fTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiZGF0ZVwiPnt7dGlja2V0LkNyZWF0ZWREYXRlIHwgZGF0ZSA6J2RkL01NL3l5J319PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJib3gtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBzdHlsZT1cIndpZHRoOiA3MCU7bWFyZ2luLXRvcDogMTBweDtcIj57e3RpY2tldC5TdWJqZWN0fX08L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkLWZsZXgtcm93XCIgc3R5bGU9XCJnYXA6IDEwcHg7d2lkdGg6IDcwJTttYXJnaW4tdG9wOiAxMHB4O21hcmdpbi10b3A6IDEwcHg7XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwcm9ncmVzcyBzdHlsZT1cIndpZHRoOiA4OCU7XCIgaWQ9XCJmaWxlXCIgbWF4PVwiMTAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFt2YWx1ZV09XCJ0aWNrZXQuV29ya2Zsb3dQcm9ncmVzcyB8fCAwXCI+PC9wcm9ncmVzcz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJwZXJjZW50YWdlXCIgc3R5bGU9XCJ3aWR0aDogMTAwcHg7XCI+e3t0aWNrZXQuV29ya2Zsb3dQcm9ncmVzc319ICU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPCEtLSA8YnV0dG9uICpuZ0lmPVwidGlja2V0LkF0dGFjaG1lbnRzICYmIHRpY2tldC5BdHRhY2htZW50cy5sZW5ndGg+MFwiIG1hdC1idXR0b24gY2xhc3M9XCJkb3dubG9hZC10aWNrZXRcIiAtLT5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uICpuZ0Zvcj1cImxldCBhdHRhY2ggb2YgdGlja2V0LkF0dGFjaG1lbnRzXCIgbWF0LWJ1dHRvbiBjbGFzcz1cImRvd25sb2FkLXRpY2tldFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJvcGVuQm90dG9tU2hlZXQoYXR0YWNoKVwiPiB7e3N1YnN0cihhdHRhY2guTmFtZSl9fS5wZGZcclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJveC10aWNrZXQtaW5mb1wiICpuZ0lmPVwiIWRldGFpbFZpZXc/LnRpY2tldHNcIj5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiZGVzY3JpcHRpb25cIj5cInt7bG9jYWxlPy5OT19USUNLRVR9fVwiPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG48L2Rpdj4iLCI8ZGl2IGNsYXNzPVwic2hlZXQtY29udGVudFwiPlxyXG4gIDxoMz5cclxuICAgIHt7YXR0YWNoLk5hbWV9fS5wZGZcclxuICA8L2gzPlxyXG4gIDxidXR0b24gY2xhc3M9XCJkb3dubG9hZC1idXR0b25cIiBtYXQtYnV0dG9uIChjbGljayk9XCJvbkRvd25sb2FkRmlsZSgpXCI+e3tsb2NhbGU/LkRPTldMT0FEX1RIRV9QREZ9fTwvYnV0dG9uPlxyXG4gIDxidXR0b24gY2xhc3M9XCJjbG9zZS1idXR0b25cIiBtYXQtYnV0dG9uIChjbGljayk9XCJjbG9zZSgpXCI+e3tsb2NhbGU/LkNMT1NFfX08L2J1dHRvbj5cclxuXHJcbjwvZGl2PiJdfQ==