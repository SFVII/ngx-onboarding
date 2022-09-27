import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';
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
    i0.ɵɵtextInterpolate1(" Listes des informations n\u00E9cessaires pour la cr\u00E9ation de ", ctx_r4.catNameStart(category_r11.name) ? "l'" + category_r11.name : category_r11.name, " ");
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
    i0.ɵɵtextInterpolate1("T\u00E9l\u00E9charger (", ctx_r59.substr(attach_r60.Name), ".pdf) ");
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
    i0.ɵɵtext(2, "\"Aucun tickets\"");
    i0.ɵɵelementEnd()();
} }
const _c0 = ".onboarding-detail[_ngcontent-%COMP%]{padding-top:30px}.onboarding-detail[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .onboarding-detail[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .onboarding-detail[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .onboarding-detail[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], .onboarding-detail[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%], .onboarding-detail[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]{margin:0;font-style:normal;font-weight:700;line-height:110%;display:flex;align-items:center;color:#242731}.onboarding-detail[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0}.onboarding-detail[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:24px}.onboarding-detail[_ngcontent-%COMP%]   h1.title[_ngcontent-%COMP%]{margin-bottom:33px;margin-top:10px}.onboarding-detail[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:20px}.onboarding-detail[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:18px}.onboarding-detail[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-size:16px}.onboarding-detail[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{font-size:14px}.onboarding-detail[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]{font-size:12px}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-between;background-color:#f4f7f9}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]{width:70%;border-radius:6px;margin-right:2%}@media (max-width: 1200px){.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]{width:50%}}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]{background:transparent;border-radius:6px;padding:10px 10px 10px 0}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:before{content:\".\";font-size:25px;margin:0 10px}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-weight:400;display:flex;align-items:center}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{padding-right:5px}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   p.contact[_ngcontent-%COMP%]{margin-top:10px}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .user-name[_ngcontent-%COMP%]{line-height:30px}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .user-name[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-weight:400;font-size:12px;margin-right:10px}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .user-contact[_ngcontent-%COMP%]{line-height:30px}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]{background:#FFFFFF;border-radius:8px;padding:15px;margin-bottom:30px}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   .category-item-inner[_ngcontent-%COMP%]   .category-description[_ngcontent-%COMP%]{font-style:normal;font-weight:250;font-size:14px;line-height:16px;color:#575f6e;margin-top:5px}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   .category-item-inner[_ngcontent-%COMP%]   .category-item-forms[_ngcontent-%COMP%]{margin-top:20px}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   .category-item-inner[_ngcontent-%COMP%]   .category-item-forms[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]{font-style:normal;font-weight:250;font-size:12px;line-height:16px;display:flex;align-items:center;color:#575f6e}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .right-content[_ngcontent-%COMP%]{background-color:#fff;border-radius:6px;padding:15px;overflow:auto;max-height:85.5vh;margin-right:20px}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .right-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#575f6e}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .right-content[_ngcontent-%COMP%]   .box-ticket-info[_ngcontent-%COMP%]{padding-bottom:20px;padding-top:20px;border-bottom:2px solid #E2E4E5}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .right-content[_ngcontent-%COMP%]   .box-ticket-info[_ngcontent-%COMP%]   .box-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .right-content[_ngcontent-%COMP%]   .box-ticket-info[_ngcontent-%COMP%]   .box-header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{min-width:auto;height:36px;border-radius:4px;font-weight:500;font-size:16px;display:flex;align-items:center;text-transform:capitalize;color:#fff}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .right-content[_ngcontent-%COMP%]   .box-ticket-info[_ngcontent-%COMP%]   .box-header[_ngcontent-%COMP%]   .finished[_ngcontent-%COMP%]{background:#6FE8D7}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .right-content[_ngcontent-%COMP%]   .box-ticket-info[_ngcontent-%COMP%]   .box-header[_ngcontent-%COMP%]   .progress[_ngcontent-%COMP%]{background:#F3A124}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .right-content[_ngcontent-%COMP%]   .box-ticket-info[_ngcontent-%COMP%]   .download-ticket[_ngcontent-%COMP%]{margin-top:20px;background-color:#fff;border:1px solid #171F26;display:block}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .category-view-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;max-height:70vh;overflow:auto}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .right-content[_ngcontent-%COMP%]::-webkit-scrollbar, .onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .category-view-container[_ngcontent-%COMP%]::-webkit-scrollbar{display:none}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .right-content[_ngcontent-%COMP%], .onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .category-view-container[_ngcontent-%COMP%]{-ms-overflow-style:none;scrollbar-width:none}.fields[_ngcontent-%COMP%]{height:84%}.fields[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style:none;display:flex;margin:33px 0;padding:0;overflow:auto}.fields[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin-right:20px;padding-bottom:5px;border-bottom:3px solid transparent}.fields[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none;font-style:normal;font-weight:700;font-size:14px;line-height:120%;color:#171f26;opacity:.5;overflow:hidden;display:-webkit-box;-webkit-line-clamp:1;-webkit-box-orient:vertical}.fields[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.menu-item[_ngcontent-%COMP%]:hover, .fields[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.menu-item.active[_ngcontent-%COMP%]{cursor:pointer;border-bottom:3px solid #3C4252}.fields[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.menu-item[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%], .fields[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.menu-item.active[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-style:normal;font-weight:700;font-size:14px;line-height:120%;opacity:1;text-decoration:none!important}.progress-status[_ngcontent-%COMP%]   .status[_ngcontent-%COMP%]{display:flex;align-items:center}.progress-status[_ngcontent-%COMP%]   .ongoing[_ngcontent-%COMP%]{color:#6fe8d7}.progress-status[_ngcontent-%COMP%]   .in-progress[_ngcontent-%COMP%]{padding-right:25px;color:#f3a124;font-weight:500;font-size:16px}  .progress-status{font-size:16px}  .progress-status .mat-progress-bar{display:block;height:20px;overflow:hidden;border-radius:50px;position:relative;transition:opacity .25s linear;width:100%}  .progress-status .mat-progress-bar-fill:after{background-color:#6fe8d7}  .progress-status .mat-progress-bar-buffer{background-color:#ecf3f7}.category-header[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between}.d-flex-row[_ngcontent-%COMP%]{display:flex;align-items:center}.d-flex-row[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin-right:5px}  mat-bottom-sheet-container{width:100vw;max-width:100vw!important;height:150px;background:#F4F7F9!important;display:flex!important;flex-direction:column;justify-content:center}  mat-bottom-sheet-container .sheet-content{display:flex;align-items:center;justify-content:center}  mat-bottom-sheet-container h3{font-style:normal;font-weight:700;font-size:20px;line-height:100%;color:#171f26;margin-bottom:0!important;margin-top:0!important}  mat-bottom-sheet-container button.download-button{width:277px;height:48px;background:#171F26;box-shadow:0 0 #0003;border-radius:7px;color:#fff;margin:0 25px}  mat-bottom-sheet-container button.close-button{height:48px;background:#fff;box-shadow:0 0 #0003;border-radius:7px;color:#171f26;border:1px solid #171F26}.ul-list[_ngcontent-%COMP%]{list-style:disc!important;display:block!important;margin-left:0!important;padding-left:0!important;margin-top:0!important}.ul-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:before{content:\".\";font-size:40px}";
export class OnboardingDetailComponent {
    constructor(router, service, _bottomSheet) {
        this.router = router;
        this.service = service;
        this._bottomSheet = _bottomSheet;
        this.onShowMode = new EventEmitter(true);
    }
    ngOnInit() {
    }
    ngOnChanges() {
        console.log('---------------detailView', this.detailView);
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
    } }, inputs: { detailView: "detailView" }, outputs: { onShowMode: "onShowMode" }, features: [i0.ɵɵNgOnChangesFeature], decls: 40, vars: 17, consts: [[1, "onboarding-detail"], [1, "title"], ["style", "margin-left: 20px; cursor: pointer;", 3, "click", 4, "ngIf"], [1, "view-content"], [1, "left-content"], [1, "user-info"], [1, "user-name"], [1, "contact"], ["fontSet", "material-icons-outlined"], [4, "ngIf"], ["id", "fields", 1, "fields"], ["class", "menu-item", 3, "ngxScrollTo", "class", "id", 4, "ngFor", "ngForOf"], [1, "category-view-container", 3, "scroll"], ["class", "category-item", 3, "id", 4, "ngFor", "ngForOf"], [2, "background-color", "transparent"], [2, "height", "450px"], [1, "right-content"], [1, "subtitle"], ["class", "box-ticket-info", 4, "ngIf"], [2, "margin-left", "20px", "cursor", "pointer", 3, "click"], [1, "menu-item", 3, "ngxScrollTo", "id"], [1, "category-item", 3, "id"], [1, "category-item-inner"], [1, "category-header"], [1, "title-content"], [1, "category-description"], [1, "progress-status"], ["class", "category-item-forms", 4, "ngFor", "ngForOf"], [1, "category-item-forms"], [1, "label"], [1, "ul-list"], [4, "ngFor", "ngForOf"], ["class", "box-ticket-info", 4, "ngFor", "ngForOf"], [1, "box-ticket-info"], [1, "d-flex-row", "box-header"], ["mat-button", "", 1, "d-flex-row", 2, "color", "#575F6E", "padding-left", "0", 3, "click"], [2, "font-weight", "400"], ["mat-button", "", 1, "progress"], [1, "date"], [1, "box-header"], [2, "width", "70%", "margin-top", "10px"], [1, "d-flex-row", 2, "gap", "10px", "width", "70%", "margin-top", "10px", "margin-top", "10px"], ["id", "file", "max", "100", 2, "width", "88%", 3, "value"], [1, "percentage"], ["mat-button", "", "class", "download-ticket", 3, "click", 4, "ngFor", "ngForOf"], ["mat-button", "", 1, "download-ticket", 3, "click"], [1, "description"]], template: function OnboardingDetailComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0)(1, "h1", 1)(2, "p");
        i0.ɵɵtext(3);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(4, OnboardingDetailComponent_mat_icon_4_Template, 2, 0, "mat-icon", 2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "div", 3)(6, "div", 4)(7, "div", 5)(8, "div", 6)(9, "h2");
        i0.ɵɵtext(10);
        i0.ɵɵelementStart(11, "span");
        i0.ɵɵtext(12, "arriv\u00E9 le ");
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
        i0.ɵɵtemplate(30, OnboardingDetailComponent_section_30_Template, 10, 4, "section", 13);
        i0.ɵɵelementStart(31, "section", 14);
        i0.ɵɵelement(32, "div", 15);
        i0.ɵɵelementEnd()()()();
        i0.ɵɵelementStart(33, "div", 16)(34, "h2");
        i0.ɵɵtext(35, "Tickets li\u00E9s \u00E0 votre demande");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(36, "p", 17);
        i0.ɵɵtext(37, "Vous retrouverez ici tous les tickets cr\u00E9\u00E9s lors de la cr\u00E9ation de votre fiche d\u2019int\u00E9gration.");
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(38, OnboardingDetailComponent_ng_container_38_Template, 2, 1, "ng-container", 9);
        i0.ɵɵtemplate(39, OnboardingDetailComponent_div_39_Template, 3, 0, "div", 18);
        i0.ɵɵelementEnd()()();
    } if (rf & 2) {
        i0.ɵɵadvance(3);
        i0.ɵɵtextInterpolate1("Int\u00E9gration profil ", ctx.detailView == null ? null : ctx.detailView.Name, "");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !(ctx.detailView == null ? null : ctx.detailView.Finished));
        i0.ɵɵadvance(6);
        i0.ɵɵtextInterpolate2("", ctx.detailView == null ? null : ctx.detailView.user.FirstName, " ", ctx.detailView == null ? null : ctx.detailView.user.LastName, " ");
        i0.ɵɵadvance(4);
        i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(15, 14, ctx.detailView == null ? null : ctx.detailView.createdAt, "dd/MM/yy"));
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
        i0.ɵɵadvance(8);
        i0.ɵɵproperty("ngIf", (ctx.detailView == null ? null : ctx.detailView.tickets) && (ctx.detailView == null ? null : ctx.detailView.tickets.length) > 0);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !(ctx.detailView == null ? null : ctx.detailView.tickets));
    } }, directives: [i4.NgIf, i5.MatIcon, i4.NgForOf, i6.ScrollToDirective, i7.MatButton], pipes: [i4.DatePipe], styles: [_c0] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(OnboardingDetailComponent, [{
        type: Component,
        args: [{ selector: 'lib-onboarding-detail', template: "<div class=\"onboarding-detail\">\n    <h1 class=\"title\">\n        <p>Int\u00E9gration profil {{detailView?.Name}}</p>\n        <mat-icon *ngIf=\"!detailView?.Finished\" style=\"margin-left: 20px; cursor: pointer;\" (click)=\"onEdit()\">edit\n        </mat-icon>\n    </h1>\n    <div class=\"view-content\">\n        <div class=\"left-content\">\n            <div class=\"user-info\">\n                <div class=\"user-name\">\n                    <h2>{{detailView?.user.FirstName }} {{detailView?.user.LastName }} <span>arriv\u00E9 le\n                        </span>\n                        <p>{{detailView?.createdAt | date:'dd/MM/yy' }}</p>\n                    </h2>\n                </div>\n                <p class=\"contact\">{{detailView?.user?.AccountName }} <span></span> {{detailView?.user?.Title}}</p>\n                <p class=\"contact\">\n                    <mat-icon fontSet=\"material-icons-outlined\">email</mat-icon>{{detailView?.user?.Email }}\n                    <ng-container *ngIf=\"detailView?.user?.MobilePhone?.internationalNumber\">\n                        <span></span>\n                        <mat-icon fontSet=\"material-icons-outlined\">phone</mat-icon>\n                        {{detailView?.user?.MobilePhone?.internationalNumber}}\n                    </ng-container>\n\n                    <ng-container *ngIf=\"detailView?.user?.Phone?.internationalNumber\">\n                        <span></span>\n                        <mat-icon fontSet=\"material-icons-outlined\">smartphone</mat-icon>\n                        {{detailView?.user?.Phone?.internationalNumber}}\n                    </ng-container>\n\n                </p>\n\n            </div>\n\n            <div id=\"fields\" class=\"fields\">\n                <ul>\n                    <li [ngxScrollTo]=\"'#'+category.name\" class=\"menu-item\" [class]=\"i===0 ? 'active':''\"\n                        *ngFor=\"let category of detailView?.categories;  let i=index\" [id]=\"category.name+'x'\">\n                        <a>{{category.name}}</a>\n                    </li>\n                </ul>\n                <div class=\"category-view-container\" (scroll)=\"onScroll($event)\">\n                    <section class=\"category-item\" *ngFor=\"let category of detailView?.categories;  let i=index\"\n                        [id]=\"category.name\">\n                        <div class=\"category-item-inner\">\n                            <div class=\"category-header\">\n                                <div class=\"title-content\">\n                                    <h2>{{category.name}}</h2>\n                                    <p class=\"category-description\">\n                                        Listes des informations n\u00E9cessaires pour la cr\u00E9ation de {{\n                                        catNameStart(category.name) ? \"l'\" + category.name :\n                                        category.name }}\n                                    </p>\n                                </div>\n                                <div class=\"progress-status\">\n                                    <!-- {{category?.fieldCompleted}} / {{category?.fieldLength}} -->\n                                    <!-- <div *ngIf=\"category?.fieldCompleted===category?.fieldLength\"\n                                        class=\"status in-progress\">\n                                        <span>En cours de traitement</span>\n                                        <lib-loading></lib-loading>\n                                    </div> -->\n                                    <!-- <div *ngIf=\"category?.fieldCompleted ===category?.fieldLength\"\n                                        class=\"status ongoing\">\n                                        <span style=\"margin-right: 10px;\">En cours</span>\n                                        <mat-icon>check</mat-icon>\n                                    </div> -->\n                                    <!-- <div *ngIf=\"category?.fieldCompleted < category?.fieldLength\"\n                                        class=\"status progress-bar\">\n                                        <span style=\"width: 300px;\">{{progress(category?.fieldCompleted ,\n                                            category?.fieldLength)}}% Termin\u00E9</span>\n                                        <mat-progress-bar mode=\"determinate\"\n                                            [value]=\"progress(category?.fieldCompleted , category?.fieldLength)\">\n                                        </mat-progress-bar>\n                                    </div> -->\n                                </div>\n                            </div>\n                            <div class=\"category-item-forms\" *ngFor=\"let forms of category.forms\">\n                                <ng-container *ngIf=\"!forms.forms\">\n                                    <p class=\"label\">{{forms.label}}</p>\n                                    <ng-container *ngIf=\"onFormatDisplayValue(forms.value).type==='array'\">\n                                        <ul class=\"ul-list\">\n                                            <li *ngFor=\"let item of forms.value \">{{item}}</li>\n                                        </ul>\n                                    </ng-container>\n\n                                    <h4 *ngIf=\"onFormatDisplayValue(forms.value).type!=='array'\">\n                                        {{onFormatDisplayValue(forms.value).value}}\n                                    </h4>\n                                </ng-container>\n                                <ng-container *ngIf=\"forms.forms\">\n                                    <h3>{{forms.label}}</h3>\n                                    <div class=\"category-item-forms\" *ngFor=\"let sub of forms.forms\">\n                                        <ng-container *ngIf=\"!sub.forms\">\n                                            <p class=\"label\">{{sub.label}}</p>\n                                            <ng-container *ngIf=\"onFormatDisplayValue(sub.value).type==='array'\">\n                                                <ul class=\"ul-list\">\n                                                    <li *ngFor=\"let item of sub.value \">{{item}}</li>\n                                                </ul>\n                                            </ng-container>\n                                            <h4 *ngIf=\"onFormatDisplayValue(sub.value).type!=='array'\">\n                                                {{onFormatDisplayValue(sub.value).value}}</h4>\n                                        </ng-container>\n                                        <ng-container *ngIf=\"sub.forms\">\n                                            <h3>{{sub.label}}</h3>\n                                            <div class=\"category-item-forms\" *ngFor=\"let child of sub.forms\">\n                                                <ng-container *ngIf=\"!child.forms\">\n                                                    <p class=\"label\">{{child.label}}</p>\n                                                    <ng-container\n                                                        *ngIf=\"onFormatDisplayValue(child.value).type==='array'\">\n                                                        <ul class=\"ul-list\">\n                                                            <li *ngFor=\"let item of child.value\">{{item}}</li>\n                                                        </ul>\n                                                    </ng-container>\n                                                    <h4 *ngIf=\"onFormatDisplayValue(child.value).type!=='array'\">\n                                                        {{onFormatDisplayValue(child.value).value}}</h4>\n                                                </ng-container>\n                                                <ng-container *ngIf=\"child.forms\">\n                                                    <h3>{{child.label}}</h3>\n                                                    <div class=\"category-item-forms\" *ngFor=\"let c2 of child.forms\">\n                                                        <p class=\"label\">{{c2.label}}</p>\n                                                        <ng-container\n                                                            *ngIf=\"onFormatDisplayValue(c2.value).type==='array'\">\n                                                            <ul class=\"ul-list\">\n                                                                <li *ngFor=\"let item of c2.value \">{{item}}</li>\n                                                            </ul>\n                                                        </ng-container>\n                                                        <h4 *ngIf=\"onFormatDisplayValue(c2.value).type!=='array'\">\n                                                            {{onFormatDisplayValue(c2.value).value}}</h4>\n                                                    </div>\n                                                </ng-container>\n                                            </div>\n                                        </ng-container>\n                                    </div>\n                                </ng-container>\n                            </div>\n                        </div>\n                    </section>\n                    <section style=\"background-color: transparent\">\n                        <div style=\"height: 450px;\"></div>\n                    </section>\n                </div>\n            </div>\n        </div>\n        <div class=\"right-content\">\n            <h2>Tickets li\u00E9s \u00E0 votre demande</h2>\n            <p class=\"subtitle\">Vous retrouverez ici tous les tickets cr\u00E9\u00E9s lors de la cr\u00E9ation de votre fiche\n                d\u2019int\u00E9gration.</p>\n            <ng-container *ngIf=\"detailView?.tickets && detailView?.tickets.length>0\">\n                <div class=\"box-ticket-info\" *ngFor=\"let ticket of detailView?.tickets\">\n                    <div class=\"d-flex-row box-header\">\n                        <button mat-button class=\"d-flex-row\" style=\"color: #575F6E;padding-left: 0;\"\n                            (click)=\"onViewTicket(ticket)\">\n                            <mat-icon fontSet=\"material-icons-outlined\">list_alt</mat-icon><span\n                                style=\"font-weight: 400;\">Ticket\n                                {{ticket.CaseNumber}}</span>\n                        </button>\n                        <button mat-button class=\"progress\">{{ticket.Status}}</button>\n                    </div>\n                    <p class=\"date\">{{ticket.CreatedDate | date :'dd/MM/yy'}}</p>\n                    <div class=\"box-header\">\n                        <h3 style=\"width: 70%;margin-top: 10px;\">{{ticket.Subject}}</h3>\n                    </div>\n                    <div class=\"d-flex-row\" style=\"gap: 10px;width: 70%;margin-top: 10px;margin-top: 10px;\">\n                        <progress style=\"width: 88%;\" id=\"file\" max=\"100\"\n                            [value]=\"ticket.WorkflowProgress || 0\"></progress>\n                        <span class=\"percentage\">{{ticket.WorkflowProgress}} %</span>\n                    </div>\n                    <!-- <button *ngIf=\"ticket.Attachments && ticket.Attachments.length>0\" mat-button class=\"download-ticket\" -->\n                    <button *ngFor=\"let attach of ticket.Attachments\" mat-button class=\"download-ticket\"\n                        (click)=\"openBottomSheet(attach)\">T\u00E9l\u00E9charger ({{substr(attach.Name)}}.pdf)\n                    </button>\n                </div>\n            </ng-container>\n            <div class=\"box-ticket-info\" *ngIf=\"!detailView?.tickets\">\n                <p class=\"description\">\"Aucun tickets\"</p>\n            </div>\n        </div>\n    </div>\n</div>", styles: [".onboarding-detail{padding-top:30px}.onboarding-detail h1,.onboarding-detail h2,.onboarding-detail h3,.onboarding-detail h4,.onboarding-detail h5,.onboarding-detail h6{margin:0;font-style:normal;font-weight:700;line-height:110%;display:flex;align-items:center;color:#242731}.onboarding-detail p{margin:0}.onboarding-detail h1{font-size:24px}.onboarding-detail h1.title{margin-bottom:33px;margin-top:10px}.onboarding-detail h2{font-size:20px}.onboarding-detail h3{font-size:18px}.onboarding-detail h4{font-size:16px}.onboarding-detail h5{font-size:14px}.onboarding-detail h6{font-size:12px}.onboarding-detail .view-content{display:flex;flex-direction:row;justify-content:space-between;background-color:#f4f7f9}.onboarding-detail .view-content .left-content{width:70%;border-radius:6px;margin-right:2%}@media (max-width: 1200px){.onboarding-detail .view-content .left-content{width:50%}}.onboarding-detail .view-content .left-content .user-info{background:transparent;border-radius:6px;padding:10px 10px 10px 0}.onboarding-detail .view-content .left-content .user-info span:before{content:\".\";font-size:25px;margin:0 10px}.onboarding-detail .view-content .left-content .user-info p{font-weight:400;display:flex;align-items:center}.onboarding-detail .view-content .left-content .user-info p mat-icon{padding-right:5px}.onboarding-detail .view-content .left-content .user-info p.contact{margin-top:10px}.onboarding-detail .view-content .left-content .user-info .user-name{line-height:30px}.onboarding-detail .view-content .left-content .user-info .user-name span{font-weight:400;font-size:12px;margin-right:10px}.onboarding-detail .view-content .left-content .user-info .user-contact{line-height:30px}.onboarding-detail .view-content .left-content section{background:#FFFFFF;border-radius:8px;padding:15px;margin-bottom:30px}.onboarding-detail .view-content .left-content section .category-item-inner .category-description{font-style:normal;font-weight:250;font-size:14px;line-height:16px;color:#575f6e;margin-top:5px}.onboarding-detail .view-content .left-content section .category-item-inner .category-item-forms{margin-top:20px}.onboarding-detail .view-content .left-content section .category-item-inner .category-item-forms .label{font-style:normal;font-weight:250;font-size:12px;line-height:16px;display:flex;align-items:center;color:#575f6e}.onboarding-detail .view-content .right-content{background-color:#fff;border-radius:6px;padding:15px;overflow:auto;max-height:85.5vh;margin-right:20px}.onboarding-detail .view-content .right-content p{color:#575f6e}.onboarding-detail .view-content .right-content .box-ticket-info{padding-bottom:20px;padding-top:20px;border-bottom:2px solid #E2E4E5}.onboarding-detail .view-content .right-content .box-ticket-info .box-header{display:flex;justify-content:space-between;align-items:center}.onboarding-detail .view-content .right-content .box-ticket-info .box-header button{min-width:auto;height:36px;border-radius:4px;font-weight:500;font-size:16px;display:flex;align-items:center;text-transform:capitalize;color:#fff}.onboarding-detail .view-content .right-content .box-ticket-info .box-header .finished{background:#6FE8D7}.onboarding-detail .view-content .right-content .box-ticket-info .box-header .progress{background:#F3A124}.onboarding-detail .view-content .right-content .box-ticket-info .download-ticket{margin-top:20px;background-color:#fff;border:1px solid #171F26;display:block}.onboarding-detail .view-content .category-view-container{display:flex;flex-direction:column;max-height:70vh;overflow:auto}.onboarding-detail .view-content .right-content::-webkit-scrollbar,.onboarding-detail .view-content .category-view-container::-webkit-scrollbar{display:none}.onboarding-detail .view-content .right-content,.onboarding-detail .view-content .category-view-container{-ms-overflow-style:none;scrollbar-width:none}.fields{height:84%}.fields ul{list-style:none;display:flex;margin:33px 0;padding:0;overflow:auto}.fields ul li{margin-right:20px;padding-bottom:5px;border-bottom:3px solid transparent}.fields ul li a{text-decoration:none;font-style:normal;font-weight:700;font-size:14px;line-height:120%;color:#171f26;opacity:.5;overflow:hidden;display:-webkit-box;-webkit-line-clamp:1;-webkit-box-orient:vertical}.fields ul li.menu-item:hover,.fields ul li.menu-item.active{cursor:pointer;border-bottom:3px solid #3C4252}.fields ul li.menu-item:hover a,.fields ul li.menu-item.active a{font-style:normal;font-weight:700;font-size:14px;line-height:120%;opacity:1;text-decoration:none!important}.progress-status .status{display:flex;align-items:center}.progress-status .ongoing{color:#6fe8d7}.progress-status .in-progress{padding-right:25px;color:#f3a124;font-weight:500;font-size:16px}::ng-deep .progress-status{font-size:16px}::ng-deep .progress-status .mat-progress-bar{display:block;height:20px;overflow:hidden;border-radius:50px;position:relative;transition:opacity .25s linear;width:100%}::ng-deep .progress-status .mat-progress-bar-fill:after{background-color:#6fe8d7}::ng-deep .progress-status .mat-progress-bar-buffer{background-color:#ecf3f7}.category-header{display:flex;align-items:center;justify-content:space-between}.d-flex-row{display:flex;align-items:center}.d-flex-row mat-icon{margin-right:5px}::ng-deep mat-bottom-sheet-container{width:100vw;max-width:100vw!important;height:150px;background:#F4F7F9!important;display:flex!important;flex-direction:column;justify-content:center}::ng-deep mat-bottom-sheet-container .sheet-content{display:flex;align-items:center;justify-content:center}::ng-deep mat-bottom-sheet-container h3{font-style:normal;font-weight:700;font-size:20px;line-height:100%;color:#171f26;margin-bottom:0!important;margin-top:0!important}::ng-deep mat-bottom-sheet-container button.download-button{width:277px;height:48px;background:#171F26;box-shadow:0 0 #0003;border-radius:7px;color:#fff;margin:0 25px}::ng-deep mat-bottom-sheet-container button.close-button{height:48px;background:#fff;box-shadow:0 0 #0003;border-radius:7px;color:#171f26;border:1px solid #171F26}.ul-list{list-style:disc!important;display:block!important;margin-left:0!important;padding-left:0!important;margin-top:0!important}.ul-list li:before{content:\".\";font-size:40px}\n"] }]
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
BottomSheet.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: BottomSheet, selectors: [["bottom-sheet"]], decls: 7, vars: 1, consts: [[1, "sheet-content"], ["mat-button", "", 1, "download-button", 3, "click"], ["mat-button", "", 1, "close-button", 3, "click"]], template: function BottomSheet_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0)(1, "h3");
        i0.ɵɵtext(2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "button", 1);
        i0.ɵɵlistener("click", function BottomSheet_Template_button_click_3_listener() { return ctx.onDownloadFile(); });
        i0.ɵɵtext(4, "T\u00E9l\u00E9charger le PDF r\u00E9capitulatif");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "button", 2);
        i0.ɵɵlistener("click", function BottomSheet_Template_button_click_5_listener() { return ctx.close(); });
        i0.ɵɵtext(6, "Fermer");
        i0.ɵɵelementEnd()();
    } if (rf & 2) {
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate1(" ", ctx.attach.Name, ".pdf ");
    } }, directives: [i7.MatButton], styles: [_c0] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BottomSheet, [{
        type: Component,
        args: [{ selector: 'bottom-sheet', template: "<div class=\"sheet-content\">\r\n  <h3>\r\n    {{attach.Name}}.pdf\r\n  </h3>\r\n  <button class=\"download-button\" mat-button (click)=\"onDownloadFile()\">T\u00E9l\u00E9charger le PDF r\u00E9capitulatif</button>\r\n  <button class=\"close-button\" mat-button (click)=\"close()\">Fermer</button>\r\n\r\n</div>", styles: [".onboarding-detail{padding-top:30px}.onboarding-detail h1,.onboarding-detail h2,.onboarding-detail h3,.onboarding-detail h4,.onboarding-detail h5,.onboarding-detail h6{margin:0;font-style:normal;font-weight:700;line-height:110%;display:flex;align-items:center;color:#242731}.onboarding-detail p{margin:0}.onboarding-detail h1{font-size:24px}.onboarding-detail h1.title{margin-bottom:33px;margin-top:10px}.onboarding-detail h2{font-size:20px}.onboarding-detail h3{font-size:18px}.onboarding-detail h4{font-size:16px}.onboarding-detail h5{font-size:14px}.onboarding-detail h6{font-size:12px}.onboarding-detail .view-content{display:flex;flex-direction:row;justify-content:space-between;background-color:#f4f7f9}.onboarding-detail .view-content .left-content{width:70%;border-radius:6px;margin-right:2%}@media (max-width: 1200px){.onboarding-detail .view-content .left-content{width:50%}}.onboarding-detail .view-content .left-content .user-info{background:transparent;border-radius:6px;padding:10px 10px 10px 0}.onboarding-detail .view-content .left-content .user-info span:before{content:\".\";font-size:25px;margin:0 10px}.onboarding-detail .view-content .left-content .user-info p{font-weight:400;display:flex;align-items:center}.onboarding-detail .view-content .left-content .user-info p mat-icon{padding-right:5px}.onboarding-detail .view-content .left-content .user-info p.contact{margin-top:10px}.onboarding-detail .view-content .left-content .user-info .user-name{line-height:30px}.onboarding-detail .view-content .left-content .user-info .user-name span{font-weight:400;font-size:12px;margin-right:10px}.onboarding-detail .view-content .left-content .user-info .user-contact{line-height:30px}.onboarding-detail .view-content .left-content section{background:#FFFFFF;border-radius:8px;padding:15px;margin-bottom:30px}.onboarding-detail .view-content .left-content section .category-item-inner .category-description{font-style:normal;font-weight:250;font-size:14px;line-height:16px;color:#575f6e;margin-top:5px}.onboarding-detail .view-content .left-content section .category-item-inner .category-item-forms{margin-top:20px}.onboarding-detail .view-content .left-content section .category-item-inner .category-item-forms .label{font-style:normal;font-weight:250;font-size:12px;line-height:16px;display:flex;align-items:center;color:#575f6e}.onboarding-detail .view-content .right-content{background-color:#fff;border-radius:6px;padding:15px;overflow:auto;max-height:85.5vh;margin-right:20px}.onboarding-detail .view-content .right-content p{color:#575f6e}.onboarding-detail .view-content .right-content .box-ticket-info{padding-bottom:20px;padding-top:20px;border-bottom:2px solid #E2E4E5}.onboarding-detail .view-content .right-content .box-ticket-info .box-header{display:flex;justify-content:space-between;align-items:center}.onboarding-detail .view-content .right-content .box-ticket-info .box-header button{min-width:auto;height:36px;border-radius:4px;font-weight:500;font-size:16px;display:flex;align-items:center;text-transform:capitalize;color:#fff}.onboarding-detail .view-content .right-content .box-ticket-info .box-header .finished{background:#6FE8D7}.onboarding-detail .view-content .right-content .box-ticket-info .box-header .progress{background:#F3A124}.onboarding-detail .view-content .right-content .box-ticket-info .download-ticket{margin-top:20px;background-color:#fff;border:1px solid #171F26;display:block}.onboarding-detail .view-content .category-view-container{display:flex;flex-direction:column;max-height:70vh;overflow:auto}.onboarding-detail .view-content .right-content::-webkit-scrollbar,.onboarding-detail .view-content .category-view-container::-webkit-scrollbar{display:none}.onboarding-detail .view-content .right-content,.onboarding-detail .view-content .category-view-container{-ms-overflow-style:none;scrollbar-width:none}.fields{height:84%}.fields ul{list-style:none;display:flex;margin:33px 0;padding:0;overflow:auto}.fields ul li{margin-right:20px;padding-bottom:5px;border-bottom:3px solid transparent}.fields ul li a{text-decoration:none;font-style:normal;font-weight:700;font-size:14px;line-height:120%;color:#171f26;opacity:.5;overflow:hidden;display:-webkit-box;-webkit-line-clamp:1;-webkit-box-orient:vertical}.fields ul li.menu-item:hover,.fields ul li.menu-item.active{cursor:pointer;border-bottom:3px solid #3C4252}.fields ul li.menu-item:hover a,.fields ul li.menu-item.active a{font-style:normal;font-weight:700;font-size:14px;line-height:120%;opacity:1;text-decoration:none!important}.progress-status .status{display:flex;align-items:center}.progress-status .ongoing{color:#6fe8d7}.progress-status .in-progress{padding-right:25px;color:#f3a124;font-weight:500;font-size:16px}::ng-deep .progress-status{font-size:16px}::ng-deep .progress-status .mat-progress-bar{display:block;height:20px;overflow:hidden;border-radius:50px;position:relative;transition:opacity .25s linear;width:100%}::ng-deep .progress-status .mat-progress-bar-fill:after{background-color:#6fe8d7}::ng-deep .progress-status .mat-progress-bar-buffer{background-color:#ecf3f7}.category-header{display:flex;align-items:center;justify-content:space-between}.d-flex-row{display:flex;align-items:center}.d-flex-row mat-icon{margin-right:5px}::ng-deep mat-bottom-sheet-container{width:100vw;max-width:100vw!important;height:150px;background:#F4F7F9!important;display:flex!important;flex-direction:column;justify-content:center}::ng-deep mat-bottom-sheet-container .sheet-content{display:flex;align-items:center;justify-content:center}::ng-deep mat-bottom-sheet-container h3{font-style:normal;font-weight:700;font-size:20px;line-height:100%;color:#171f26;margin-bottom:0!important;margin-top:0!important}::ng-deep mat-bottom-sheet-container button.download-button{width:277px;height:48px;background:#171F26;box-shadow:0 0 #0003;border-radius:7px;color:#fff;margin:0 25px}::ng-deep mat-bottom-sheet-container button.close-button{height:48px;background:#fff;box-shadow:0 0 #0003;border-radius:7px;color:#171f26;border:1px solid #171F26}.ul-list{list-style:disc!important;display:block!important;margin-left:0!important;padding-left:0!important;margin-top:0!important}.ul-list li:before{content:\".\";font-size:40px}\n"] }]
    }], function () { return [{ type: i3.MatBottomSheetRef }, { type: i2.OnboardingService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib25ib2FyZGluZy1kZXRhaWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvb25ib2FyZGluZy9zcmMvbGliL2NvbXBvbmVudHMvb25ib2FyZGluZy9vbmJvYXJkaW5nLWRldGFpbC9vbmJvYXJkaW5nLWRldGFpbC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9vbmJvYXJkaW5nL3NyYy9saWIvY29tcG9uZW50cy9vbmJvYXJkaW5nL29uYm9hcmRpbmctZGV0YWlsL29uYm9hcmRpbmctZGV0YWlsLmNvbXBvbmVudC5odG1sIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvb25ib2FyZGluZy9zcmMvbGliL2NvbXBvbmVudHMvb25ib2FyZGluZy9vbmJvYXJkaW5nLWRldGFpbC9ib3R0b20tc2hlZXQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7Ozs7SUNHckYsb0NBQXVHO0lBQW5CLDZLQUFTLGVBQVEsSUFBQztJQUFDLHFCQUN2RztJQUFBLGlCQUFXOzs7SUFjQyw2QkFBeUU7SUFDckUsdUJBQWE7SUFDYixtQ0FBNEM7SUFBQSxxQkFBSztJQUFBLGlCQUFXO0lBQzVELFlBQ0o7SUFBQSwwQkFBZTs7O0lBRFgsZUFDSjtJQURJLHNOQUNKOzs7SUFFQSw2QkFBbUU7SUFDL0QsdUJBQWE7SUFDYixtQ0FBNEM7SUFBQSwwQkFBVTtJQUFBLGlCQUFXO0lBQ2pFLFlBQ0o7SUFBQSwwQkFBZTs7O0lBRFgsZUFDSjtJQURJLDBNQUNKOzs7SUFRQSw4QkFDMkYsUUFBQTtJQUNwRixZQUFpQjtJQUFBLGlCQUFJLEVBQUE7Ozs7SUFGNEIsMENBQTZCO0lBQWpGLG9EQUFpQyw4QkFBQTtJ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aUNBQXNFO1FBQTNCLHdGQUFTLG9CQUFnQixJQUFDO1FBQUMsK0RBQWdDO1FBQUEsaUJBQVM7UUFDL0csaUNBQTBEO1FBQWxCLHdGQUFTLFdBQU8sSUFBQztRQUFDLHNCQUFNO1FBQUEsaUJBQVMsRUFBQTs7UUFIdkUsZUFDRjtRQURFLG9EQUNGOzt1RkZvRlcsV0FBVztjQUx2QixTQUFTOzJCQUNFLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSG9zdExpc3RlbmVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1hdEJvdHRvbVNoZWV0LCBNYXRCb3R0b21TaGVldFJlZiB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2JvdHRvbS1zaGVldCc7XG5cbmltcG9ydCB7IE9uYm9hcmRpbmdTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vb25ib2FyZGluZy5zZXJ2aWNlJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1vbmJvYXJkaW5nLWRldGFpbCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9vbmJvYXJkaW5nLWRldGFpbC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL29uYm9hcmRpbmctZGV0YWlsLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgT25ib2FyZGluZ0RldGFpbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIGRldGFpbFZpZXc7XG4gIEBPdXRwdXQoKSBvblNob3dNb2RlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPih0cnVlKTtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBzZXJ2aWNlOiBPbmJvYXJkaW5nU2VydmljZSwgcHJpdmF0ZSBfYm90dG9tU2hlZXQ6IE1hdEJvdHRvbVNoZWV0KSB7IH1cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gIH1cbiAgbmdPbkNoYW5nZXMoKTogdm9pZCB7XG4gICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLWRldGFpbFZpZXcnLCB0aGlzLmRldGFpbFZpZXcpO1xuXG4gIH1cbiAgb3BlbkJvdHRvbVNoZWV0KGF0dGFjaCk6IHZvaWQge1xuICAgIHRoaXMuX2JvdHRvbVNoZWV0Lm9wZW4oQm90dG9tU2hlZXQsIHtcbiAgICAgIGRhdGE6IGF0dGFjaFxuICAgICAgLy8gZGF0YTogQXR0YWNoZW1lbnQgJiYgQXR0YWNoZW1lbnQubGVuZ3RoID4gMSA/IEF0dGFjaGVtZW50LmZpbmQoKGF0dGFjaDogYW55KSA9PiBhdHRhY2guTmFtZS5pbmNsdWRlcyhcIkNvbmZpZ3VyYXRpb25cIikpIDogQXR0YWNoZW1lbnRbMF1cbiAgICB9KTtcbiAgfVxuICBASG9zdExpc3RlbmVyKCdzY3JvbGwnLCBbJyRldmVudCddKVxuICBvblNjcm9sbChldmVudCkge1xuICAgIGNvbnN0IHNlY3Rpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcInNlY3Rpb25cIik7XG4gICAgY29uc3QgbmF2TGkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmZpZWxkcyB1bCBsaVwiKTtcblxuICAgIGxldCBjdXJyZW50ID0gXCJcIjtcbiAgICBzZWN0aW9ucy5mb3JFYWNoKChzZWN0aW9uKSA9PiB7XG4gICAgICBjb25zdCBzZWN0aW9uVG9wID0gc2VjdGlvbi5vZmZzZXRUb3A7XG4gICAgICBpZiAoZXZlbnQudGFyZ2V0LnNjcm9sbFRvcCA+IHNlY3Rpb25Ub3AgLSAzMDApIHtcbiAgICAgICAgY3VycmVudCA9IHNlY3Rpb24uZ2V0QXR0cmlidXRlKFwiaWRcIilcbiAgICAgIH1cbiAgICB9KTtcbiAgICBuYXZMaS5mb3JFYWNoKChsaSkgPT4ge1xuICAgICAgY29uc3QgaWQgPSBsaS5nZXRBdHRyaWJ1dGUoJ2lkJylcbiAgICAgIGlmIChpZD8uc3Vic3RyaW5nKDAsIGlkLmxlbmd0aCAtIDEpID09PSBjdXJyZW50KSB7XG4gICAgICAgIGxpLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsaS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgY2F0TmFtZVN0YXJ0KHN0cjogc3RyaW5nKSB7XG4gICAgY29uc3Qgdm93ZWxzID0gWydhJywgJ2UnLCAnaScsICdvJywgJ3UnLCAneSddO1xuICAgIHJldHVybiB2b3dlbHMuaW5jbHVkZXMoc3RyLnN1YnN0cigwLCAxKS50b0xvY2FsZUxvd2VyQ2FzZSgpKVxuICB9XG4gIG9uRWRpdCgpIHtcbiAgICB0aGlzLm9uU2hvd01vZGUuZW1pdChmYWxzZSlcbiAgfVxuXG4gIHByb2dyZXNzKGNvbXBsZXRlZCwgbGVuZ3RoKSB7XG4gICAgcmV0dXJuIDEwMCAqIGNvbXBsZXRlZCAvIGxlbmd0aFxuICB9XG5cbiAgc3Vic3RyKG5hbWU6IHN0cmluZykge1xuICAgIHJldHVybiBuYW1lLmxlbmd0aCA+IDMwID8gYCR7bmFtZS5zbGljZSgwLCAxNSl9Li4uJHtuYW1lLnNsaWNlKC0xNSl9YCA6IG5hbWVcbiAgfVxuXG4gIG9uVmlld1RpY2tldChDYXNlKSB7XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW2ByZXBvcnRpbmcvZGFzaGJvYXJkLyR7Q2FzZS5faWR9YF0pXG4gIH1cbiAgb25Gb3JtYXREaXNwbGF5VmFsdWUodmFsdWUpIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6ICdhcnJheScsXG4gICAgICAgIHZhbHVlXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZSA9PT0gdHJ1ZSA/IHsgdmFsdWU6IFwiT3VpXCIsIHR5cGU6ICdzdHJpbmcnIH0gOiB2YWx1ZSA9PT0gZmFsc2UgPyB7IHZhbHVlOiBcIk5vblwiLCB0eXBlOiAnc3RyaW5nJyB9IDogeyB2YWx1ZSwgdHlwZTogJ3N0cmluZycgfVxuXG4gIH1cblxufVxuXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2JvdHRvbS1zaGVldCcsXG4gIHRlbXBsYXRlVXJsOiAnYm90dG9tLXNoZWV0Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9vbmJvYXJkaW5nLWRldGFpbC5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIEJvdHRvbVNoZWV0IGltcGxlbWVudHMgT25Jbml0IHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfYm90dG9tU2hlZXRSZWY6IE1hdEJvdHRvbVNoZWV0UmVmPEJvdHRvbVNoZWV0PiwgcHJpdmF0ZSBzZXJ2aWNlOiBPbmJvYXJkaW5nU2VydmljZSkgeyB9XG4gIGF0dGFjaCA9IG51bGw7XG4gIGZpbGVuYW1lID0gXCJcIlxuICBub3RfZm91bmQgPSBcIlwiXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuYXR0YWNoID0gdGhpcy5fYm90dG9tU2hlZXRSZWYuY29udGFpbmVySW5zdGFuY2UuYm90dG9tU2hlZXRDb25maWcuZGF0YVxuICB9XG5cbiAgY2xvc2UoKTogdm9pZCB7XG4gICAgdGhpcy5fYm90dG9tU2hlZXRSZWYuZGlzbWlzcygpO1xuICB9XG5cbiAgYXN5bmMgb25Eb3dubG9hZEZpbGUoKSB7XG4gICAgaWYgKHRoaXMuYXR0YWNoKSB7XG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLnNlcnZpY2UuZG93bmxvYWRBdHRhY2htZW50KHRoaXMuYXR0YWNoKTtcbiAgICAgIGlmICghcmVzdWx0KSB7XG4gICAgICAgIHRoaXMubm90X2ZvdW5kID0gXCJmaWNoaWVyIG5vbiB0cm91dsOpXCJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5fYm90dG9tU2hlZXRSZWYuZGlzbWlzcygpO1xuICAgICAgICAgIHRoaXMubm90X2ZvdW5kID0gXCJcIlxuICAgICAgICB9LCAzMDAwKTtcbiAgICAgIH1cblxuICAgIH1cbiAgfVxufVxuXG4iLCI8ZGl2IGNsYXNzPVwib25ib2FyZGluZy1kZXRhaWxcIj5cbiAgICA8aDEgY2xhc3M9XCJ0aXRsZVwiPlxuICAgICAgICA8cD5JbnTDqWdyYXRpb24gcHJvZmlsIHt7ZGV0YWlsVmlldz8uTmFtZX19PC9wPlxuICAgICAgICA8bWF0LWljb24gKm5nSWY9XCIhZGV0YWlsVmlldz8uRmluaXNoZWRcIiBzdHlsZT1cIm1hcmdpbi1sZWZ0OiAyMHB4OyBjdXJzb3I6IHBvaW50ZXI7XCIgKGNsaWNrKT1cIm9uRWRpdCgpXCI+ZWRpdFxuICAgICAgICA8L21hdC1pY29uPlxuICAgIDwvaDE+XG4gICAgPGRpdiBjbGFzcz1cInZpZXctY29udGVudFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibGVmdC1jb250ZW50XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidXNlci1pbmZvXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInVzZXItbmFtZVwiPlxuICAgICAgICAgICAgICAgICAgICA8aDI+e3tkZXRhaWxWaWV3Py51c2VyLkZpcnN0TmFtZSB9fSB7e2RldGFpbFZpZXc/LnVzZXIuTGFzdE5hbWUgfX0gPHNwYW4+YXJyaXbDqSBsZVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+e3tkZXRhaWxWaWV3Py5jcmVhdGVkQXQgfCBkYXRlOidkZC9NTS95eScgfX08L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJjb250YWN0XCI+e3tkZXRhaWxWaWV3Py51c2VyPy5BY2NvdW50TmFtZSB9fSA8c3Bhbj48L3NwYW4+IHt7ZGV0YWlsVmlldz8udXNlcj8uVGl0bGV9fTwvcD5cbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImNvbnRhY3RcIj5cbiAgICAgICAgICAgICAgICAgICAgPG1hdC1pY29uIGZvbnRTZXQ9XCJtYXRlcmlhbC1pY29ucy1vdXRsaW5lZFwiPmVtYWlsPC9tYXQtaWNvbj57e2RldGFpbFZpZXc/LnVzZXI/LkVtYWlsIH19XG4gICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJkZXRhaWxWaWV3Py51c2VyPy5Nb2JpbGVQaG9uZT8uaW50ZXJuYXRpb25hbE51bWJlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG1hdC1pY29uIGZvbnRTZXQ9XCJtYXRlcmlhbC1pY29ucy1vdXRsaW5lZFwiPnBob25lPC9tYXQtaWNvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt7ZGV0YWlsVmlldz8udXNlcj8uTW9iaWxlUGhvbmU/LmludGVybmF0aW9uYWxOdW1iZXJ9fVxuICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiZGV0YWlsVmlldz8udXNlcj8uUGhvbmU/LmludGVybmF0aW9uYWxOdW1iZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxtYXQtaWNvbiBmb250U2V0PVwibWF0ZXJpYWwtaWNvbnMtb3V0bGluZWRcIj5zbWFydHBob25lPC9tYXQtaWNvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt7ZGV0YWlsVmlldz8udXNlcj8uUGhvbmU/LmludGVybmF0aW9uYWxOdW1iZXJ9fVxuICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgICAgICAgICAgICAgIDwvcD5cblxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgaWQ9XCJmaWVsZHNcIiBjbGFzcz1cImZpZWxkc1wiPlxuICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgPGxpIFtuZ3hTY3JvbGxUb109XCInIycrY2F0ZWdvcnkubmFtZVwiIGNsYXNzPVwibWVudS1pdGVtXCIgW2NsYXNzXT1cImk9PT0wID8gJ2FjdGl2ZSc6JydcIlxuICAgICAgICAgICAgICAgICAgICAgICAgKm5nRm9yPVwibGV0IGNhdGVnb3J5IG9mIGRldGFpbFZpZXc/LmNhdGVnb3JpZXM7ICBsZXQgaT1pbmRleFwiIFtpZF09XCJjYXRlZ29yeS5uYW1lKyd4J1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGE+e3tjYXRlZ29yeS5uYW1lfX08L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2F0ZWdvcnktdmlldy1jb250YWluZXJcIiAoc2Nyb2xsKT1cIm9uU2Nyb2xsKCRldmVudClcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3M9XCJjYXRlZ29yeS1pdGVtXCIgKm5nRm9yPVwibGV0IGNhdGVnb3J5IG9mIGRldGFpbFZpZXc/LmNhdGVnb3JpZXM7ICBsZXQgaT1pbmRleFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBbaWRdPVwiY2F0ZWdvcnkubmFtZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhdGVnb3J5LWl0ZW0taW5uZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2F0ZWdvcnktaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0aXRsZS1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDI+e3tjYXRlZ29yeS5uYW1lfX08L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJjYXRlZ29yeS1kZXNjcmlwdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIExpc3RlcyBkZXMgaW5mb3JtYXRpb25zIG7DqWNlc3NhaXJlcyBwb3VyIGxhIGNyw6lhdGlvbiBkZSB7e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhdE5hbWVTdGFydChjYXRlZ29yeS5uYW1lKSA/IFwibCdcIiArIGNhdGVnb3J5Lm5hbWUgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5Lm5hbWUgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcm9ncmVzcy1zdGF0dXNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0ge3tjYXRlZ29yeT8uZmllbGRDb21wbGV0ZWR9fSAvIHt7Y2F0ZWdvcnk/LmZpZWxkTGVuZ3RofX0gLS0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tIDxkaXYgKm5nSWY9XCJjYXRlZ29yeT8uZmllbGRDb21wbGV0ZWQ9PT1jYXRlZ29yeT8uZmllbGRMZW5ndGhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwic3RhdHVzIGluLXByb2dyZXNzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+RW4gY291cnMgZGUgdHJhaXRlbWVudDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGliLWxvYWRpbmc+PC9saWItbG9hZGluZz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiAtLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gPGRpdiAqbmdJZj1cImNhdGVnb3J5Py5maWVsZENvbXBsZXRlZCA9PT1jYXRlZ29yeT8uZmllbGRMZW5ndGhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwic3RhdHVzIG9uZ29pbmdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT1cIm1hcmdpbi1yaWdodDogMTBweDtcIj5FbiBjb3Vyczwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bWF0LWljb24+Y2hlY2s8L21hdC1pY29uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+IC0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSA8ZGl2ICpuZ0lmPVwiY2F0ZWdvcnk/LmZpZWxkQ29tcGxldGVkIDwgY2F0ZWdvcnk/LmZpZWxkTGVuZ3RoXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInN0YXR1cyBwcm9ncmVzcy1iYXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT1cIndpZHRoOiAzMDBweDtcIj57e3Byb2dyZXNzKGNhdGVnb3J5Py5maWVsZENvbXBsZXRlZCAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5Py5maWVsZExlbmd0aCl9fSUgVGVybWluw6k8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG1hdC1wcm9ncmVzcy1iYXIgbW9kZT1cImRldGVybWluYXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3ZhbHVlXT1cInByb2dyZXNzKGNhdGVnb3J5Py5maWVsZENvbXBsZXRlZCAsIGNhdGVnb3J5Py5maWVsZExlbmd0aClcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L21hdC1wcm9ncmVzcy1iYXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gLS0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXRlZ29yeS1pdGVtLWZvcm1zXCIgKm5nRm9yPVwibGV0IGZvcm1zIG9mIGNhdGVnb3J5LmZvcm1zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhZm9ybXMuZm9ybXNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwibGFiZWxcIj57e2Zvcm1zLmxhYmVsfX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwib25Gb3JtYXREaXNwbGF5VmFsdWUoZm9ybXMudmFsdWUpLnR5cGU9PT0nYXJyYXknXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzPVwidWwtbGlzdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgKm5nRm9yPVwibGV0IGl0ZW0gb2YgZm9ybXMudmFsdWUgXCI+e3tpdGVtfX08L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0ICpuZ0lmPVwib25Gb3JtYXREaXNwbGF5VmFsdWUoZm9ybXMudmFsdWUpLnR5cGUhPT0nYXJyYXknXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3tvbkZvcm1hdERpc3BsYXlWYWx1ZShmb3Jtcy52YWx1ZSkudmFsdWV9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJmb3Jtcy5mb3Jtc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPnt7Zm9ybXMubGFiZWx9fTwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2F0ZWdvcnktaXRlbS1mb3Jtc1wiICpuZ0Zvcj1cImxldCBzdWIgb2YgZm9ybXMuZm9ybXNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIXN1Yi5mb3Jtc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImxhYmVsXCI+e3tzdWIubGFiZWx9fTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIm9uRm9ybWF0RGlzcGxheVZhbHVlKHN1Yi52YWx1ZSkudHlwZT09PSdhcnJheSdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cInVsLWxpc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgKm5nRm9yPVwibGV0IGl0ZW0gb2Ygc3ViLnZhbHVlIFwiPnt7aXRlbX19PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgKm5nSWY9XCJvbkZvcm1hdERpc3BsYXlWYWx1ZShzdWIudmFsdWUpLnR5cGUhPT0nYXJyYXknXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e29uRm9ybWF0RGlzcGxheVZhbHVlKHN1Yi52YWx1ZSkudmFsdWV9fTwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cInN1Yi5mb3Jtc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+e3tzdWIubGFiZWx9fTwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXRlZ29yeS1pdGVtLWZvcm1zXCIgKm5nRm9yPVwibGV0IGNoaWxkIG9mIHN1Yi5mb3Jtc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFjaGlsZC5mb3Jtc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwibGFiZWxcIj57e2NoaWxkLmxhYmVsfX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqbmdJZj1cIm9uRm9ybWF0RGlzcGxheVZhbHVlKGNoaWxkLnZhbHVlKS50eXBlPT09J2FycmF5J1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJ1bC1saXN0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgKm5nRm9yPVwibGV0IGl0ZW0gb2YgY2hpbGQudmFsdWVcIj57e2l0ZW19fTwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0ICpuZ0lmPVwib25Gb3JtYXREaXNwbGF5VmFsdWUoY2hpbGQudmFsdWUpLnR5cGUhPT0nYXJyYXknXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7b25Gb3JtYXREaXNwbGF5VmFsdWUoY2hpbGQudmFsdWUpLnZhbHVlfX08L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiY2hpbGQuZm9ybXNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+e3tjaGlsZC5sYWJlbH19PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2F0ZWdvcnktaXRlbS1mb3Jtc1wiICpuZ0Zvcj1cImxldCBjMiBvZiBjaGlsZC5mb3Jtc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImxhYmVsXCI+e3tjMi5sYWJlbH19PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqbmdJZj1cIm9uRm9ybWF0RGlzcGxheVZhbHVlKGMyLnZhbHVlKS50eXBlPT09J2FycmF5J1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzPVwidWwtbGlzdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSAqbmdGb3I9XCJsZXQgaXRlbSBvZiBjMi52YWx1ZSBcIj57e2l0ZW19fTwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0ICpuZ0lmPVwib25Gb3JtYXREaXNwbGF5VmFsdWUoYzIudmFsdWUpLnR5cGUhPT0nYXJyYXknXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e29uRm9ybWF0RGlzcGxheVZhbHVlKGMyLnZhbHVlKS52YWx1ZX19PC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9XCJoZWlnaHQ6IDQ1MHB4O1wiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJyaWdodC1jb250ZW50XCI+XG4gICAgICAgICAgICA8aDI+VGlja2V0cyBsacOpcyDDoCB2b3RyZSBkZW1hbmRlPC9oMj5cbiAgICAgICAgICAgIDxwIGNsYXNzPVwic3VidGl0bGVcIj5Wb3VzIHJldHJvdXZlcmV6IGljaSB0b3VzIGxlcyB0aWNrZXRzIGNyw6nDqXMgbG9ycyBkZSBsYSBjcsOpYXRpb24gZGUgdm90cmUgZmljaGVcbiAgICAgICAgICAgICAgICBk4oCZaW50w6lncmF0aW9uLjwvcD5cbiAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJkZXRhaWxWaWV3Py50aWNrZXRzICYmIGRldGFpbFZpZXc/LnRpY2tldHMubGVuZ3RoPjBcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYm94LXRpY2tldC1pbmZvXCIgKm5nRm9yPVwibGV0IHRpY2tldCBvZiBkZXRhaWxWaWV3Py50aWNrZXRzXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkLWZsZXgtcm93IGJveC1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gbWF0LWJ1dHRvbiBjbGFzcz1cImQtZmxleC1yb3dcIiBzdHlsZT1cImNvbG9yOiAjNTc1RjZFO3BhZGRpbmctbGVmdDogMDtcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJvblZpZXdUaWNrZXQodGlja2V0KVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxtYXQtaWNvbiBmb250U2V0PVwibWF0ZXJpYWwtaWNvbnMtb3V0bGluZWRcIj5saXN0X2FsdDwvbWF0LWljb24+PHNwYW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9XCJmb250LXdlaWdodDogNDAwO1wiPlRpY2tldFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e3RpY2tldC5DYXNlTnVtYmVyfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gbWF0LWJ1dHRvbiBjbGFzcz1cInByb2dyZXNzXCI+e3t0aWNrZXQuU3RhdHVzfX08L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiZGF0ZVwiPnt7dGlja2V0LkNyZWF0ZWREYXRlIHwgZGF0ZSA6J2RkL01NL3l5J319PC9wPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYm94LWhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzIHN0eWxlPVwid2lkdGg6IDcwJTttYXJnaW4tdG9wOiAxMHB4O1wiPnt7dGlja2V0LlN1YmplY3R9fTwvaDM+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZC1mbGV4LXJvd1wiIHN0eWxlPVwiZ2FwOiAxMHB4O3dpZHRoOiA3MCU7bWFyZ2luLXRvcDogMTBweDttYXJnaW4tdG9wOiAxMHB4O1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHByb2dyZXNzIHN0eWxlPVwid2lkdGg6IDg4JTtcIiBpZD1cImZpbGVcIiBtYXg9XCIxMDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFt2YWx1ZV09XCJ0aWNrZXQuV29ya2Zsb3dQcm9ncmVzcyB8fCAwXCI+PC9wcm9ncmVzcz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicGVyY2VudGFnZVwiPnt7dGlja2V0LldvcmtmbG93UHJvZ3Jlc3N9fSAlPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPCEtLSA8YnV0dG9uICpuZ0lmPVwidGlja2V0LkF0dGFjaG1lbnRzICYmIHRpY2tldC5BdHRhY2htZW50cy5sZW5ndGg+MFwiIG1hdC1idXR0b24gY2xhc3M9XCJkb3dubG9hZC10aWNrZXRcIiAtLT5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiAqbmdGb3I9XCJsZXQgYXR0YWNoIG9mIHRpY2tldC5BdHRhY2htZW50c1wiIG1hdC1idXR0b24gY2xhc3M9XCJkb3dubG9hZC10aWNrZXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cIm9wZW5Cb3R0b21TaGVldChhdHRhY2gpXCI+VMOpbMOpY2hhcmdlciAoe3tzdWJzdHIoYXR0YWNoLk5hbWUpfX0ucGRmKVxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJveC10aWNrZXQtaW5mb1wiICpuZ0lmPVwiIWRldGFpbFZpZXc/LnRpY2tldHNcIj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImRlc2NyaXB0aW9uXCI+XCJBdWN1biB0aWNrZXRzXCI8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG48L2Rpdj4iLCI8ZGl2IGNsYXNzPVwic2hlZXQtY29udGVudFwiPlxyXG4gIDxoMz5cclxuICAgIHt7YXR0YWNoLk5hbWV9fS5wZGZcclxuICA8L2gzPlxyXG4gIDxidXR0b24gY2xhc3M9XCJkb3dubG9hZC1idXR0b25cIiBtYXQtYnV0dG9uIChjbGljayk9XCJvbkRvd25sb2FkRmlsZSgpXCI+VMOpbMOpY2hhcmdlciBsZSBQREYgcsOpY2FwaXR1bGF0aWY8L2J1dHRvbj5cclxuICA8YnV0dG9uIGNsYXNzPVwiY2xvc2UtYnV0dG9uXCIgbWF0LWJ1dHRvbiAoY2xpY2spPVwiY2xvc2UoKVwiPkZlcm1lcjwvYnV0dG9uPlxyXG5cclxuPC9kaXY+Il19