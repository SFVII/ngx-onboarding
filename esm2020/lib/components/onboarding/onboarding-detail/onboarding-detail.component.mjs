import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "../../../onboarding.service";
import * as i3 from "@angular/material/bottom-sheet";
import * as i4 from "@angular/material/icon";
import * as i5 from "@angular/common";
import * as i6 from "@nicky-lenaers/ngx-scroll-to";
import * as i7 from "@angular/material/button";
function OnboardingDetailComponent_ng_container_20_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "span");
    i0.ɵɵelementStart(2, "mat-icon", 6);
    i0.ɵɵtext(3, "phone");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(4);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.detailView == null ? null : ctx_r0.detailView.user == null ? null : ctx_r0.detailView.user.MobilePhone == null ? null : ctx_r0.detailView.user.MobilePhone.internationalNumber, " ");
} }
function OnboardingDetailComponent_ng_container_21_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "span");
    i0.ɵɵelementStart(2, "mat-icon", 6);
    i0.ɵɵtext(3, "smartphone");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(4);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1(" ", ctx_r1.detailView == null ? null : ctx_r1.detailView.user == null ? null : ctx_r1.detailView.user.Phone == null ? null : ctx_r1.detailView.user.Phone.internationalNumber, " ");
} }
function OnboardingDetailComponent_li_24_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li", 17)(1, "a");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const category_r6 = ctx.$implicit;
    const i_r7 = ctx.index;
    i0.ɵɵclassMap(i_r7 === 0 ? "active" : "");
    i0.ɵɵproperty("ngxScrollTo", "#" + category_r6.name)("id", category_r6.name + "x");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(category_r6.name);
} }
function OnboardingDetailComponent_section_26_div_9_ng_container_1_ng_container_3_li_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r17 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(item_r17);
} }
function OnboardingDetailComponent_section_26_div_9_ng_container_1_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "ul", 27);
    i0.ɵɵtemplate(2, OnboardingDetailComponent_section_26_div_9_ng_container_1_ng_container_3_li_2_Template, 2, 1, "li", 28);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const forms_r11 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", forms_r11.value);
} }
function OnboardingDetailComponent_section_26_div_9_ng_container_1_h4_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h4");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const forms_r11 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r15 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r15.onFormatDisplayValue(forms_r11.value).value, " ");
} }
function OnboardingDetailComponent_section_26_div_9_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "p", 26);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, OnboardingDetailComponent_section_26_div_9_ng_container_1_ng_container_3_Template, 3, 1, "ng-container", 7);
    i0.ɵɵtemplate(4, OnboardingDetailComponent_section_26_div_9_ng_container_1_h4_4_Template, 2, 1, "h4", 7);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const forms_r11 = i0.ɵɵnextContext().$implicit;
    const ctx_r12 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(forms_r11.label);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r12.onFormatDisplayValue(forms_r11.value).type === "array");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r12.onFormatDisplayValue(forms_r11.value).type !== "array");
} }
function OnboardingDetailComponent_section_26_div_9_ng_container_2_div_3_ng_container_1_ng_container_3_li_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r28 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(item_r28);
} }
function OnboardingDetailComponent_section_26_div_9_ng_container_2_div_3_ng_container_1_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "ul", 27);
    i0.ɵɵtemplate(2, OnboardingDetailComponent_section_26_div_9_ng_container_2_div_3_ng_container_1_ng_container_3_li_2_Template, 2, 1, "li", 28);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const sub_r22 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", sub_r22.value);
} }
function OnboardingDetailComponent_section_26_div_9_ng_container_2_div_3_ng_container_1_h4_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h4");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const sub_r22 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r26 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r26.onFormatDisplayValue(sub_r22.value).value, "");
} }
function OnboardingDetailComponent_section_26_div_9_ng_container_2_div_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "p", 26);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, OnboardingDetailComponent_section_26_div_9_ng_container_2_div_3_ng_container_1_ng_container_3_Template, 3, 1, "ng-container", 7);
    i0.ɵɵtemplate(4, OnboardingDetailComponent_section_26_div_9_ng_container_2_div_3_ng_container_1_h4_4_Template, 2, 1, "h4", 7);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const sub_r22 = i0.ɵɵnextContext().$implicit;
    const ctx_r23 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(sub_r22.label);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r23.onFormatDisplayValue(sub_r22.value).type === "array");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r23.onFormatDisplayValue(sub_r22.value).type !== "array");
} }
function OnboardingDetailComponent_section_26_div_9_ng_container_2_div_3_ng_container_2_div_3_ng_container_1_ng_container_3_li_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r39 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(item_r39);
} }
function OnboardingDetailComponent_section_26_div_9_ng_container_2_div_3_ng_container_2_div_3_ng_container_1_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "ul", 27);
    i0.ɵɵtemplate(2, OnboardingDetailComponent_section_26_div_9_ng_container_2_div_3_ng_container_2_div_3_ng_container_1_ng_container_3_li_2_Template, 2, 1, "li", 28);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const child_r33 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", child_r33.value);
} }
function OnboardingDetailComponent_section_26_div_9_ng_container_2_div_3_ng_container_2_div_3_ng_container_1_h4_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h4");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const child_r33 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r37 = i0.ɵɵnextContext(6);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r37.onFormatDisplayValue(child_r33.value).value, "");
} }
function OnboardingDetailComponent_section_26_div_9_ng_container_2_div_3_ng_container_2_div_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "p", 26);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, OnboardingDetailComponent_section_26_div_9_ng_container_2_div_3_ng_container_2_div_3_ng_container_1_ng_container_3_Template, 3, 1, "ng-container", 7);
    i0.ɵɵtemplate(4, OnboardingDetailComponent_section_26_div_9_ng_container_2_div_3_ng_container_2_div_3_ng_container_1_h4_4_Template, 2, 1, "h4", 7);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const child_r33 = i0.ɵɵnextContext().$implicit;
    const ctx_r34 = i0.ɵɵnextContext(6);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(child_r33.label);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r34.onFormatDisplayValue(child_r33.value).type === "array");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r34.onFormatDisplayValue(child_r33.value).type !== "array");
} }
function OnboardingDetailComponent_section_26_div_9_ng_container_2_div_3_ng_container_2_div_3_ng_container_2_div_3_ng_container_3_li_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r48 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(item_r48);
} }
function OnboardingDetailComponent_section_26_div_9_ng_container_2_div_3_ng_container_2_div_3_ng_container_2_div_3_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "ul", 27);
    i0.ɵɵtemplate(2, OnboardingDetailComponent_section_26_div_9_ng_container_2_div_3_ng_container_2_div_3_ng_container_2_div_3_ng_container_3_li_2_Template, 2, 1, "li", 28);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const c2_r44 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", c2_r44.value);
} }
function OnboardingDetailComponent_section_26_div_9_ng_container_2_div_3_ng_container_2_div_3_ng_container_2_div_3_h4_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h4");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const c2_r44 = i0.ɵɵnextContext().$implicit;
    const ctx_r46 = i0.ɵɵnextContext(8);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r46.onFormatDisplayValue(c2_r44.value).value, "");
} }
function OnboardingDetailComponent_section_26_div_9_ng_container_2_div_3_ng_container_2_div_3_ng_container_2_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 25)(1, "p", 26);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, OnboardingDetailComponent_section_26_div_9_ng_container_2_div_3_ng_container_2_div_3_ng_container_2_div_3_ng_container_3_Template, 3, 1, "ng-container", 7);
    i0.ɵɵtemplate(4, OnboardingDetailComponent_section_26_div_9_ng_container_2_div_3_ng_container_2_div_3_ng_container_2_div_3_h4_4_Template, 2, 1, "h4", 7);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const c2_r44 = ctx.$implicit;
    const ctx_r43 = i0.ɵɵnextContext(8);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(c2_r44.label);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r43.onFormatDisplayValue(c2_r44.value).type === "array");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r43.onFormatDisplayValue(c2_r44.value).type !== "array");
} }
function OnboardingDetailComponent_section_26_div_9_ng_container_2_div_3_ng_container_2_div_3_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "h3");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, OnboardingDetailComponent_section_26_div_9_ng_container_2_div_3_ng_container_2_div_3_ng_container_2_div_3_Template, 5, 3, "div", 24);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const child_r33 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(child_r33.label);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", child_r33.forms);
} }
function OnboardingDetailComponent_section_26_div_9_ng_container_2_div_3_ng_container_2_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 25);
    i0.ɵɵtemplate(1, OnboardingDetailComponent_section_26_div_9_ng_container_2_div_3_ng_container_2_div_3_ng_container_1_Template, 5, 3, "ng-container", 7);
    i0.ɵɵtemplate(2, OnboardingDetailComponent_section_26_div_9_ng_container_2_div_3_ng_container_2_div_3_ng_container_2_Template, 4, 2, "ng-container", 7);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const child_r33 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !child_r33.forms);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", child_r33.forms);
} }
function OnboardingDetailComponent_section_26_div_9_ng_container_2_div_3_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "h3");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, OnboardingDetailComponent_section_26_div_9_ng_container_2_div_3_ng_container_2_div_3_Template, 3, 2, "div", 24);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const sub_r22 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(sub_r22.label);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", sub_r22.forms);
} }
function OnboardingDetailComponent_section_26_div_9_ng_container_2_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 25);
    i0.ɵɵtemplate(1, OnboardingDetailComponent_section_26_div_9_ng_container_2_div_3_ng_container_1_Template, 5, 3, "ng-container", 7);
    i0.ɵɵtemplate(2, OnboardingDetailComponent_section_26_div_9_ng_container_2_div_3_ng_container_2_Template, 4, 2, "ng-container", 7);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const sub_r22 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !sub_r22.forms);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", sub_r22.forms);
} }
function OnboardingDetailComponent_section_26_div_9_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "h3");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, OnboardingDetailComponent_section_26_div_9_ng_container_2_div_3_Template, 3, 2, "div", 24);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const forms_r11 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(forms_r11.label);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", forms_r11.forms);
} }
function OnboardingDetailComponent_section_26_div_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 25);
    i0.ɵɵtemplate(1, OnboardingDetailComponent_section_26_div_9_ng_container_1_Template, 5, 3, "ng-container", 7);
    i0.ɵɵtemplate(2, OnboardingDetailComponent_section_26_div_9_ng_container_2_Template, 4, 2, "ng-container", 7);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const forms_r11 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !forms_r11.forms);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", forms_r11.forms);
} }
function OnboardingDetailComponent_section_26_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 18)(1, "div", 19)(2, "div", 20)(3, "div", 21)(4, "h2");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "p", 22);
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd()();
    i0.ɵɵelement(8, "div", 23);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(9, OnboardingDetailComponent_section_26_div_9_Template, 3, 2, "div", 24);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const category_r8 = ctx.$implicit;
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵproperty("id", category_r8.name);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(category_r8.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" Listes des informations n\u00E9cessaires pour la cr\u00E9ation de ", ctx_r3.catNameStart(category_r8.name) ? "l'" + category_r8.name : category_r8.name, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", category_r8.forms);
} }
function OnboardingDetailComponent_ng_container_34_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r57 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 30)(1, "div", 31)(2, "button", 32);
    i0.ɵɵlistener("click", function OnboardingDetailComponent_ng_container_34_div_1_Template_button_click_2_listener() { const restoredCtx = i0.ɵɵrestoreView(_r57); const ticket_r55 = restoredCtx.$implicit; const ctx_r56 = i0.ɵɵnextContext(2); return ctx_r56.onViewTicket(ticket_r55); });
    i0.ɵɵelementStart(3, "mat-icon", 6);
    i0.ɵɵtext(4, "list_alt");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "span", 33);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "button", 34);
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(9, "p", 35);
    i0.ɵɵtext(10);
    i0.ɵɵpipe(11, "date");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "div", 36)(13, "h3");
    i0.ɵɵtext(14);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(15, "button", 37);
    i0.ɵɵlistener("click", function OnboardingDetailComponent_ng_container_34_div_1_Template_button_click_15_listener() { const restoredCtx = i0.ɵɵrestoreView(_r57); const ticket_r55 = restoredCtx.$implicit; const ctx_r58 = i0.ɵɵnextContext(2); return ctx_r58.openBottomSheet(ticket_r55 == null ? null : ticket_r55.vattachment); });
    i0.ɵɵtext(16, "T\u00E9l\u00E9charger le PDF r\u00E9capitulatif");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ticket_r55 = ctx.$implicit;
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate1("Ticket ", ticket_r55.CaseNumber, "");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ticket_r55.Status);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(11, 4, ticket_r55.CreatedDate, "dd/MM/yy"));
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ticket_r55.Subject);
} }
function OnboardingDetailComponent_ng_container_34_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, OnboardingDetailComponent_ng_container_34_div_1_Template, 17, 7, "div", 29);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r4.detailView == null ? null : ctx_r4.detailView.tickets);
} }
function OnboardingDetailComponent_div_35_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 30)(1, "p", 38);
    i0.ɵɵtext(2, "\"Aucun tickets\"");
    i0.ɵɵelementEnd()();
} }
const _c0 = ".onboarding-detail[_ngcontent-%COMP%]{padding-top:30px}.onboarding-detail[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .onboarding-detail[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .onboarding-detail[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .onboarding-detail[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], .onboarding-detail[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%], .onboarding-detail[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]{margin:0;font-style:normal;font-weight:700;line-height:110%;display:flex;align-items:center;color:#242731}.onboarding-detail[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0}.onboarding-detail[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:24px}.onboarding-detail[_ngcontent-%COMP%]   h1.title[_ngcontent-%COMP%]{margin-bottom:33px;margin-top:10px}.onboarding-detail[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:20px}.onboarding-detail[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:18px}.onboarding-detail[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-size:16px}.onboarding-detail[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{font-size:14px}.onboarding-detail[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]{font-size:12px}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-between;background-color:#f4f7f9}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]{width:70%;border-radius:6px;margin-right:2%}@media (max-width: 1200px){.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]{width:50%}}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]{background:transparent;border-radius:6px;padding:10px 10px 10px 0}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:before{content:\".\";font-size:25px;margin:0 10px}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-weight:400;display:flex;align-items:center}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{padding-right:5px}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   p.contact[_ngcontent-%COMP%]{margin-top:10px}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .user-name[_ngcontent-%COMP%]{line-height:30px}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .user-name[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-weight:400;font-size:12px;margin-right:10px}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .user-contact[_ngcontent-%COMP%]{line-height:30px}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]{background:#FFFFFF;border-radius:8px;padding:15px;margin-bottom:30px}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   .category-item-inner[_ngcontent-%COMP%]   .category-description[_ngcontent-%COMP%]{font-style:normal;font-weight:250;font-size:14px;line-height:16px;color:#575f6e;margin-top:5px}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   .category-item-inner[_ngcontent-%COMP%]   .category-item-forms[_ngcontent-%COMP%]{margin-top:20px}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   .category-item-inner[_ngcontent-%COMP%]   .category-item-forms[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]{font-style:normal;font-weight:250;font-size:12px;line-height:16px;display:flex;align-items:center;color:#575f6e}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .right-content[_ngcontent-%COMP%]{background-color:#fff;border-radius:6px;padding:15px;overflow:auto;max-height:85.5vh;margin-right:20px}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .right-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#575f6e}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .right-content[_ngcontent-%COMP%]   .box-ticket-info[_ngcontent-%COMP%]{padding-bottom:20px;padding-top:20px;border-bottom:2px solid #E2E4E5}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .right-content[_ngcontent-%COMP%]   .box-ticket-info[_ngcontent-%COMP%]   .box-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .right-content[_ngcontent-%COMP%]   .box-ticket-info[_ngcontent-%COMP%]   .box-header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{min-width:auto;height:36px;border-radius:4px;font-weight:500;font-size:16px;display:flex;align-items:center;text-transform:capitalize;color:#fff}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .right-content[_ngcontent-%COMP%]   .box-ticket-info[_ngcontent-%COMP%]   .box-header[_ngcontent-%COMP%]   .finished[_ngcontent-%COMP%]{background:#6FE8D7}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .right-content[_ngcontent-%COMP%]   .box-ticket-info[_ngcontent-%COMP%]   .box-header[_ngcontent-%COMP%]   .progress[_ngcontent-%COMP%]{background:#F3A124}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .right-content[_ngcontent-%COMP%]   .box-ticket-info[_ngcontent-%COMP%]   .download-ticket[_ngcontent-%COMP%]{margin-top:20px;background-color:#fff;border:1px solid #171F26}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .category-view-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;max-height:70vh;overflow:auto}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .right-content[_ngcontent-%COMP%]::-webkit-scrollbar, .onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .category-view-container[_ngcontent-%COMP%]::-webkit-scrollbar{display:none}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .right-content[_ngcontent-%COMP%], .onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .category-view-container[_ngcontent-%COMP%]{-ms-overflow-style:none;scrollbar-width:none}.fields[_ngcontent-%COMP%]{height:84%}.fields[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style:none;display:flex;margin:33px 0;padding:0;overflow:auto}.fields[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin-right:20px;padding-bottom:5px;border-bottom:3px solid transparent}.fields[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none;font-style:normal;font-weight:700;font-size:14px;line-height:120%;color:#171f26;opacity:.5;overflow:hidden;display:-webkit-box;-webkit-line-clamp:1;-webkit-box-orient:vertical}.fields[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.menu-item[_ngcontent-%COMP%]:hover, .fields[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.menu-item.active[_ngcontent-%COMP%]{cursor:pointer;border-bottom:3px solid #3C4252}.fields[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.menu-item[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%], .fields[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.menu-item.active[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-style:normal;font-weight:700;font-size:14px;line-height:120%;opacity:1;text-decoration:none!important}.progress-status[_ngcontent-%COMP%]   .status[_ngcontent-%COMP%]{display:flex;align-items:center}.progress-status[_ngcontent-%COMP%]   .ongoing[_ngcontent-%COMP%]{color:#6fe8d7}.progress-status[_ngcontent-%COMP%]   .in-progress[_ngcontent-%COMP%]{padding-right:25px;color:#f3a124;font-weight:500;font-size:16px}  .progress-status{font-size:16px}  .progress-status .mat-progress-bar{display:block;height:20px;overflow:hidden;border-radius:50px;position:relative;transition:opacity .25s linear;width:100%}  .progress-status .mat-progress-bar-fill:after{background-color:#6fe8d7}  .progress-status .mat-progress-bar-buffer{background-color:#ecf3f7}.category-header[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between}.d-flex-row[_ngcontent-%COMP%]{display:flex;align-items:center}.d-flex-row[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin-right:5px}  mat-bottom-sheet-container{width:100vw;max-width:100vw!important;height:150px;background:#F4F7F9!important;display:flex!important;flex-direction:column;justify-content:center}  mat-bottom-sheet-container .sheet-content{display:flex;align-items:center;justify-content:center}  mat-bottom-sheet-container h3{font-style:normal;font-weight:700;font-size:20px;line-height:100%;color:#171f26;margin-bottom:0!important;margin-top:0!important}  mat-bottom-sheet-container button.download-button{width:277px;height:48px;background:#171F26;box-shadow:0 0 #0003;border-radius:7px;color:#fff;margin:0 25px}  mat-bottom-sheet-container button.close-button{height:48px;background:#fff;box-shadow:0 0 #0003;border-radius:7px;color:#171f26;border:1px solid #171F26}.ul-list[_ngcontent-%COMP%]{list-style:disc!important;display:block!important;margin-left:0!important;padding-left:0!important;margin-top:0!important}.ul-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:before{content:\".\";font-size:40px}";
export class OnboardingDetailComponent {
    constructor(router, service, _bottomSheet) {
        this.router = router;
        this.service = service;
        this._bottomSheet = _bottomSheet;
        this.onShowMode = new EventEmitter(true);
    }
    ngOnInit() {
    }
    openBottomSheet(Attachement) {
        this._bottomSheet.open(BottomSheet, {
            data: Attachement && Attachement.length > 1 ? Attachement.find((attach) => attach.Name.includes("Configuration")) : Attachement[0]
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
    onViewTicket(Case) {
        this.router.navigate([`ticket?state=open&id=${Case._id}`]);
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
    } }, inputs: { detailView: "detailView" }, outputs: { onShowMode: "onShowMode" }, decls: 36, vars: 15, consts: [[1, "onboarding-detail"], [1, "view-content"], [1, "left-content"], [1, "user-info"], [1, "user-name"], [1, "contact"], ["fontSet", "material-icons-outlined"], [4, "ngIf"], ["id", "fields", 1, "fields"], ["class", "menu-item", 3, "ngxScrollTo", "class", "id", 4, "ngFor", "ngForOf"], [1, "category-view-container", 3, "scroll"], ["class", "category-item", 3, "id", 4, "ngFor", "ngForOf"], [2, "background-color", "transparent"], [2, "height", "450px"], [1, "right-content"], [1, "subtitle"], ["class", "box-ticket-info", 4, "ngIf"], [1, "menu-item", 3, "ngxScrollTo", "id"], [1, "category-item", 3, "id"], [1, "category-item-inner"], [1, "category-header"], [1, "title-content"], [1, "category-description"], [1, "progress-status"], ["class", "category-item-forms", 4, "ngFor", "ngForOf"], [1, "category-item-forms"], [1, "label"], [1, "ul-list"], [4, "ngFor", "ngForOf"], ["class", "box-ticket-info", 4, "ngFor", "ngForOf"], [1, "box-ticket-info"], [1, "d-flex-row", "box-header"], ["mat-button", "", 1, "d-flex-row", 2, "color", "#575F6E", "padding-left", "0", 3, "click"], [2, "font-weight", "400"], ["mat-button", "", 1, "progress"], [1, "date"], [1, "box-header"], ["mat-button", "", 1, "download-ticket", 3, "click"], [1, "description"]], template: function OnboardingDetailComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h2");
        i0.ɵɵtext(6);
        i0.ɵɵelementStart(7, "span");
        i0.ɵɵtext(8, "arriv\u00E9 le ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(9, "p");
        i0.ɵɵtext(10);
        i0.ɵɵpipe(11, "date");
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementStart(12, "p", 5);
        i0.ɵɵtext(13);
        i0.ɵɵelement(14, "span");
        i0.ɵɵtext(15);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(16, "p", 5)(17, "mat-icon", 6);
        i0.ɵɵtext(18, "email");
        i0.ɵɵelementEnd();
        i0.ɵɵtext(19);
        i0.ɵɵtemplate(20, OnboardingDetailComponent_ng_container_20_Template, 5, 1, "ng-container", 7);
        i0.ɵɵtemplate(21, OnboardingDetailComponent_ng_container_21_Template, 5, 1, "ng-container", 7);
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(22, "div", 8)(23, "ul");
        i0.ɵɵtemplate(24, OnboardingDetailComponent_li_24_Template, 3, 5, "li", 9);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(25, "div", 10);
        i0.ɵɵlistener("scroll", function OnboardingDetailComponent_Template_div_scroll_25_listener($event) { return ctx.onScroll($event); });
        i0.ɵɵtemplate(26, OnboardingDetailComponent_section_26_Template, 10, 4, "section", 11);
        i0.ɵɵelementStart(27, "section", 12);
        i0.ɵɵelement(28, "div", 13);
        i0.ɵɵelementEnd()()()();
        i0.ɵɵelementStart(29, "div", 14)(30, "h2");
        i0.ɵɵtext(31, "Tickets li\u00E9s \u00E0 votre demande");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(32, "p", 15);
        i0.ɵɵtext(33, "Vous retrouverez ici tous les tickets cr\u00E9\u00E9s lors de la cr\u00E9ation de votre fiche d\u2019int\u00E9gration.");
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(34, OnboardingDetailComponent_ng_container_34_Template, 2, 1, "ng-container", 7);
        i0.ɵɵtemplate(35, OnboardingDetailComponent_div_35_Template, 3, 0, "div", 16);
        i0.ɵɵelementEnd()()();
    } if (rf & 2) {
        i0.ɵɵadvance(6);
        i0.ɵɵtextInterpolate2("", ctx.detailView == null ? null : ctx.detailView.user.FirstName, " ", ctx.detailView == null ? null : ctx.detailView.user.LastName, " ");
        i0.ɵɵadvance(4);
        i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(11, 12, ctx.detailView == null ? null : ctx.detailView.createdAt, "dd/MM/yy"));
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
    } }, directives: [i4.MatIcon, i5.NgIf, i5.NgForOf, i6.ScrollToDirective, i7.MatButton], pipes: [i5.DatePipe], styles: [_c0] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(OnboardingDetailComponent, [{
        type: Component,
        args: [{ selector: 'lib-onboarding-detail', template: "<div class=\"onboarding-detail\">\n    <!-- <h1 class=\"title\">\n        <p>Int\u00E9gration profil {{detailView?.Name}}</p>\n        <mat-icon *ngIf=\"!detailView?.Finished\" style=\"margin-left: 20px; cursor: pointer;\" (click)=\"onEdit()\">edit\n        </mat-icon>\n    </h1> -->\n    <div class=\"view-content\">\n        <div class=\"left-content\">\n            <div class=\"user-info\">\n                <div class=\"user-name\">\n                    <h2>{{detailView?.user.FirstName }} {{detailView?.user.LastName }} <span>arriv\u00E9 le\n                        </span>\n                        <p>{{detailView?.createdAt | date:'dd/MM/yy' }}</p>\n                    </h2>\n                </div>\n                <p class=\"contact\">{{detailView?.user?.AccountName }} <span></span> {{detailView?.user?.Title}}</p>\n                <p class=\"contact\">\n                    <mat-icon fontSet=\"material-icons-outlined\">email</mat-icon>{{detailView?.user?.Email }}\n                    <ng-container *ngIf=\"detailView?.user?.MobilePhone?.internationalNumber\">\n                        <span></span>\n                        <mat-icon fontSet=\"material-icons-outlined\">phone</mat-icon>\n                        {{detailView?.user?.MobilePhone?.internationalNumber}}\n                    </ng-container>\n\n                    <ng-container *ngIf=\"detailView?.user?.Phone?.internationalNumber\">\n                        <span></span>\n                        <mat-icon fontSet=\"material-icons-outlined\">smartphone</mat-icon>\n                        {{detailView?.user?.Phone?.internationalNumber}}\n                    </ng-container>\n\n                </p>\n\n            </div>\n\n            <div id=\"fields\" class=\"fields\">\n                <ul>\n                    <li [ngxScrollTo]=\"'#'+category.name\" class=\"menu-item\" [class]=\"i===0 ? 'active':''\"\n                        *ngFor=\"let category of detailView?.categories;  let i=index\" [id]=\"category.name+'x'\">\n                        <a>{{category.name}}</a>\n                    </li>\n                </ul>\n                <div class=\"category-view-container\" (scroll)=\"onScroll($event)\">\n                    <section class=\"category-item\" *ngFor=\"let category of detailView?.categories;  let i=index\"\n                        [id]=\"category.name\">\n                        <div class=\"category-item-inner\">\n                            <div class=\"category-header\">\n                                <div class=\"title-content\">\n                                    <h2>{{category.name}}</h2>\n                                    <p class=\"category-description\">\n                                        Listes des informations n\u00E9cessaires pour la cr\u00E9ation de {{\n                                        catNameStart(category.name) ? \"l'\" + category.name :\n                                        category.name }}\n                                    </p>\n                                </div>\n                                <div class=\"progress-status\">\n                                    <!-- {{category?.fieldCompleted}} / {{category?.fieldLength}} -->\n                                    <!-- <div *ngIf=\"category?.fieldCompleted===category?.fieldLength\"\n                                        class=\"status in-progress\">\n                                        <span>En cours de traitement</span>\n                                        <lib-loading></lib-loading>\n                                    </div> -->\n                                    <!-- <div *ngIf=\"category?.fieldCompleted ===category?.fieldLength\"\n                                        class=\"status ongoing\">\n                                        <span style=\"margin-right: 10px;\">En cours</span>\n                                        <mat-icon>check</mat-icon>\n                                    </div> -->\n                                    <!-- <div *ngIf=\"category?.fieldCompleted < category?.fieldLength\"\n                                        class=\"status progress-bar\">\n                                        <span style=\"width: 300px;\">{{progress(category?.fieldCompleted ,\n                                            category?.fieldLength)}}% Termin\u00E9</span>\n                                        <mat-progress-bar mode=\"determinate\"\n                                            [value]=\"progress(category?.fieldCompleted , category?.fieldLength)\">\n                                        </mat-progress-bar>\n                                    </div> -->\n                                </div>\n                            </div>\n                            <div class=\"category-item-forms\" *ngFor=\"let forms of category.forms\">\n                                <ng-container *ngIf=\"!forms.forms\">\n                                    <p class=\"label\">{{forms.label}}</p>\n                                    <ng-container *ngIf=\"onFormatDisplayValue(forms.value).type==='array'\">\n                                        <ul class=\"ul-list\">\n                                            <li *ngFor=\"let item of forms.value \">{{item}}</li>\n                                        </ul>\n                                    </ng-container>\n\n                                    <h4 *ngIf=\"onFormatDisplayValue(forms.value).type!=='array'\">\n                                        {{onFormatDisplayValue(forms.value).value}}\n                                    </h4>\n                                </ng-container>\n                                <ng-container *ngIf=\"forms.forms\">\n                                    <h3>{{forms.label}}</h3>\n                                    <div class=\"category-item-forms\" *ngFor=\"let sub of forms.forms\">\n                                        <ng-container *ngIf=\"!sub.forms\">\n                                            <p class=\"label\">{{sub.label}}</p>\n                                            <ng-container *ngIf=\"onFormatDisplayValue(sub.value).type==='array'\">\n                                                <ul class=\"ul-list\">\n                                                    <li *ngFor=\"let item of sub.value \">{{item}}</li>\n                                                </ul>\n                                            </ng-container>\n                                            <h4 *ngIf=\"onFormatDisplayValue(sub.value).type!=='array'\">\n                                                {{onFormatDisplayValue(sub.value).value}}</h4>\n                                        </ng-container>\n                                        <ng-container *ngIf=\"sub.forms\">\n                                            <h3>{{sub.label}}</h3>\n                                            <div class=\"category-item-forms\" *ngFor=\"let child of sub.forms\">\n                                                <ng-container *ngIf=\"!child.forms\">\n                                                    <p class=\"label\">{{child.label}}</p>\n                                                    <ng-container\n                                                        *ngIf=\"onFormatDisplayValue(child.value).type==='array'\">\n                                                        <ul class=\"ul-list\">\n                                                            <li *ngFor=\"let item of child.value\">{{item}}</li>\n                                                        </ul>\n                                                    </ng-container>\n                                                    <h4 *ngIf=\"onFormatDisplayValue(child.value).type!=='array'\">\n                                                        {{onFormatDisplayValue(child.value).value}}</h4>\n                                                </ng-container>\n                                                <ng-container *ngIf=\"child.forms\">\n                                                    <h3>{{child.label}}</h3>\n                                                    <div class=\"category-item-forms\" *ngFor=\"let c2 of child.forms\">\n                                                        <p class=\"label\">{{c2.label}}</p>\n                                                        <ng-container\n                                                            *ngIf=\"onFormatDisplayValue(c2.value).type==='array'\">\n                                                            <ul class=\"ul-list\">\n                                                                <li *ngFor=\"let item of c2.value \">{{item}}</li>\n                                                            </ul>\n                                                        </ng-container>\n                                                        <h4 *ngIf=\"onFormatDisplayValue(c2.value).type!=='array'\">\n                                                            {{onFormatDisplayValue(c2.value).value}}</h4>\n                                                    </div>\n                                                </ng-container>\n                                            </div>\n                                        </ng-container>\n                                    </div>\n                                </ng-container>\n                            </div>\n                        </div>\n                    </section>\n                    <section style=\"background-color: transparent\">\n                        <div style=\"height: 450px;\"></div>\n                    </section>\n                </div>\n            </div>\n        </div>\n        <div class=\"right-content\">\n            <h2>Tickets li\u00E9s \u00E0 votre demande</h2>\n            <p class=\"subtitle\">Vous retrouverez ici tous les tickets cr\u00E9\u00E9s lors de la cr\u00E9ation de votre fiche\n                d\u2019int\u00E9gration.</p>\n            <ng-container *ngIf=\"detailView?.tickets && detailView?.tickets.length>0\">\n                <div class=\"box-ticket-info\" *ngFor=\"let ticket of detailView?.tickets\">\n                    <div class=\"d-flex-row box-header\">\n                        <button mat-button class=\"d-flex-row\" style=\"color: #575F6E;padding-left: 0;\"\n                            (click)=\"onViewTicket(ticket)\">\n                            <mat-icon fontSet=\"material-icons-outlined\">list_alt</mat-icon><span\n                                style=\"font-weight: 400;\">Ticket\n                                {{ticket.CaseNumber}}</span>\n                        </button>\n                        <button mat-button class=\"progress\">{{ticket.Status}}</button>\n                    </div>\n                    <p class=\"date\">{{ticket.CreatedDate | date :'dd/MM/yy'}}</p>\n                    <div class=\"box-header\">\n                        <h3>{{ticket.Subject}}</h3>\n                    </div>\n                    <!-- <button *ngIf=\"ticket.Attachments && ticket.Attachments.length>0\" mat-button class=\"download-ticket\" -->\n                    <button mat-button class=\"download-ticket\"\n                        (click)=\"openBottomSheet(ticket?.vattachment)\">T\u00E9l\u00E9charger\n                        le\n                        PDF\n                        r\u00E9capitulatif</button>\n                </div>\n            </ng-container>\n            <div class=\"box-ticket-info\" *ngIf=\"!detailView?.tickets\">\n                <p class=\"description\">\"Aucun tickets\"</p>\n            </div>\n        </div>\n    </div>\n</div>", styles: [".onboarding-detail{padding-top:30px}.onboarding-detail h1,.onboarding-detail h2,.onboarding-detail h3,.onboarding-detail h4,.onboarding-detail h5,.onboarding-detail h6{margin:0;font-style:normal;font-weight:700;line-height:110%;display:flex;align-items:center;color:#242731}.onboarding-detail p{margin:0}.onboarding-detail h1{font-size:24px}.onboarding-detail h1.title{margin-bottom:33px;margin-top:10px}.onboarding-detail h2{font-size:20px}.onboarding-detail h3{font-size:18px}.onboarding-detail h4{font-size:16px}.onboarding-detail h5{font-size:14px}.onboarding-detail h6{font-size:12px}.onboarding-detail .view-content{display:flex;flex-direction:row;justify-content:space-between;background-color:#f4f7f9}.onboarding-detail .view-content .left-content{width:70%;border-radius:6px;margin-right:2%}@media (max-width: 1200px){.onboarding-detail .view-content .left-content{width:50%}}.onboarding-detail .view-content .left-content .user-info{background:transparent;border-radius:6px;padding:10px 10px 10px 0}.onboarding-detail .view-content .left-content .user-info span:before{content:\".\";font-size:25px;margin:0 10px}.onboarding-detail .view-content .left-content .user-info p{font-weight:400;display:flex;align-items:center}.onboarding-detail .view-content .left-content .user-info p mat-icon{padding-right:5px}.onboarding-detail .view-content .left-content .user-info p.contact{margin-top:10px}.onboarding-detail .view-content .left-content .user-info .user-name{line-height:30px}.onboarding-detail .view-content .left-content .user-info .user-name span{font-weight:400;font-size:12px;margin-right:10px}.onboarding-detail .view-content .left-content .user-info .user-contact{line-height:30px}.onboarding-detail .view-content .left-content section{background:#FFFFFF;border-radius:8px;padding:15px;margin-bottom:30px}.onboarding-detail .view-content .left-content section .category-item-inner .category-description{font-style:normal;font-weight:250;font-size:14px;line-height:16px;color:#575f6e;margin-top:5px}.onboarding-detail .view-content .left-content section .category-item-inner .category-item-forms{margin-top:20px}.onboarding-detail .view-content .left-content section .category-item-inner .category-item-forms .label{font-style:normal;font-weight:250;font-size:12px;line-height:16px;display:flex;align-items:center;color:#575f6e}.onboarding-detail .view-content .right-content{background-color:#fff;border-radius:6px;padding:15px;overflow:auto;max-height:85.5vh;margin-right:20px}.onboarding-detail .view-content .right-content p{color:#575f6e}.onboarding-detail .view-content .right-content .box-ticket-info{padding-bottom:20px;padding-top:20px;border-bottom:2px solid #E2E4E5}.onboarding-detail .view-content .right-content .box-ticket-info .box-header{display:flex;justify-content:space-between;align-items:center}.onboarding-detail .view-content .right-content .box-ticket-info .box-header button{min-width:auto;height:36px;border-radius:4px;font-weight:500;font-size:16px;display:flex;align-items:center;text-transform:capitalize;color:#fff}.onboarding-detail .view-content .right-content .box-ticket-info .box-header .finished{background:#6FE8D7}.onboarding-detail .view-content .right-content .box-ticket-info .box-header .progress{background:#F3A124}.onboarding-detail .view-content .right-content .box-ticket-info .download-ticket{margin-top:20px;background-color:#fff;border:1px solid #171F26}.onboarding-detail .view-content .category-view-container{display:flex;flex-direction:column;max-height:70vh;overflow:auto}.onboarding-detail .view-content .right-content::-webkit-scrollbar,.onboarding-detail .view-content .category-view-container::-webkit-scrollbar{display:none}.onboarding-detail .view-content .right-content,.onboarding-detail .view-content .category-view-container{-ms-overflow-style:none;scrollbar-width:none}.fields{height:84%}.fields ul{list-style:none;display:flex;margin:33px 0;padding:0;overflow:auto}.fields ul li{margin-right:20px;padding-bottom:5px;border-bottom:3px solid transparent}.fields ul li a{text-decoration:none;font-style:normal;font-weight:700;font-size:14px;line-height:120%;color:#171f26;opacity:.5;overflow:hidden;display:-webkit-box;-webkit-line-clamp:1;-webkit-box-orient:vertical}.fields ul li.menu-item:hover,.fields ul li.menu-item.active{cursor:pointer;border-bottom:3px solid #3C4252}.fields ul li.menu-item:hover a,.fields ul li.menu-item.active a{font-style:normal;font-weight:700;font-size:14px;line-height:120%;opacity:1;text-decoration:none!important}.progress-status .status{display:flex;align-items:center}.progress-status .ongoing{color:#6fe8d7}.progress-status .in-progress{padding-right:25px;color:#f3a124;font-weight:500;font-size:16px}::ng-deep .progress-status{font-size:16px}::ng-deep .progress-status .mat-progress-bar{display:block;height:20px;overflow:hidden;border-radius:50px;position:relative;transition:opacity .25s linear;width:100%}::ng-deep .progress-status .mat-progress-bar-fill:after{background-color:#6fe8d7}::ng-deep .progress-status .mat-progress-bar-buffer{background-color:#ecf3f7}.category-header{display:flex;align-items:center;justify-content:space-between}.d-flex-row{display:flex;align-items:center}.d-flex-row mat-icon{margin-right:5px}::ng-deep mat-bottom-sheet-container{width:100vw;max-width:100vw!important;height:150px;background:#F4F7F9!important;display:flex!important;flex-direction:column;justify-content:center}::ng-deep mat-bottom-sheet-container .sheet-content{display:flex;align-items:center;justify-content:center}::ng-deep mat-bottom-sheet-container h3{font-style:normal;font-weight:700;font-size:20px;line-height:100%;color:#171f26;margin-bottom:0!important;margin-top:0!important}::ng-deep mat-bottom-sheet-container button.download-button{width:277px;height:48px;background:#171F26;box-shadow:0 0 #0003;border-radius:7px;color:#fff;margin:0 25px}::ng-deep mat-bottom-sheet-container button.close-button{height:48px;background:#fff;box-shadow:0 0 #0003;border-radius:7px;color:#171f26;border:1px solid #171F26}.ul-list{list-style:disc!important;display:block!important;margin-left:0!important;padding-left:0!important;margin-top:0!important}.ul-list li:before{content:\".\";font-size:40px}\n"] }]
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
    }
    ngOnInit() {
        this.attach = this._bottomSheetRef.containerInstance.bottomSheetConfig.data;
        const urls = this.attach ? this.attach.Url.split("/") : [];
        this.filename = urls[urls.length - 1];
    }
    close() {
        this._bottomSheetRef.dismiss();
    }
    async onDownloadFile() {
        if (this.attach) {
            await this.service.downloadAttachment(this.attach.Url, this.attach.ContentType, this.filename);
            this._bottomSheetRef.dismiss();
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
        i0.ɵɵtextInterpolate(ctx.filename);
    } }, directives: [i7.MatButton], styles: [_c0] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BottomSheet, [{
        type: Component,
        args: [{ selector: 'bottom-sheet', template: "<div class=\"sheet-content\">\r\n  <h3>{{filename}}</h3>\r\n  <button class=\"download-button\" mat-button (click)=\"onDownloadFile()\">T\u00E9l\u00E9charger le PDF r\u00E9capitulatif</button>\r\n  <button class=\"close-button\" mat-button (click)=\"close()\">Fermer</button>\r\n</div>", styles: [".onboarding-detail{padding-top:30px}.onboarding-detail h1,.onboarding-detail h2,.onboarding-detail h3,.onboarding-detail h4,.onboarding-detail h5,.onboarding-detail h6{margin:0;font-style:normal;font-weight:700;line-height:110%;display:flex;align-items:center;color:#242731}.onboarding-detail p{margin:0}.onboarding-detail h1{font-size:24px}.onboarding-detail h1.title{margin-bottom:33px;margin-top:10px}.onboarding-detail h2{font-size:20px}.onboarding-detail h3{font-size:18px}.onboarding-detail h4{font-size:16px}.onboarding-detail h5{font-size:14px}.onboarding-detail h6{font-size:12px}.onboarding-detail .view-content{display:flex;flex-direction:row;justify-content:space-between;background-color:#f4f7f9}.onboarding-detail .view-content .left-content{width:70%;border-radius:6px;margin-right:2%}@media (max-width: 1200px){.onboarding-detail .view-content .left-content{width:50%}}.onboarding-detail .view-content .left-content .user-info{background:transparent;border-radius:6px;padding:10px 10px 10px 0}.onboarding-detail .view-content .left-content .user-info span:before{content:\".\";font-size:25px;margin:0 10px}.onboarding-detail .view-content .left-content .user-info p{font-weight:400;display:flex;align-items:center}.onboarding-detail .view-content .left-content .user-info p mat-icon{padding-right:5px}.onboarding-detail .view-content .left-content .user-info p.contact{margin-top:10px}.onboarding-detail .view-content .left-content .user-info .user-name{line-height:30px}.onboarding-detail .view-content .left-content .user-info .user-name span{font-weight:400;font-size:12px;margin-right:10px}.onboarding-detail .view-content .left-content .user-info .user-contact{line-height:30px}.onboarding-detail .view-content .left-content section{background:#FFFFFF;border-radius:8px;padding:15px;margin-bottom:30px}.onboarding-detail .view-content .left-content section .category-item-inner .category-description{font-style:normal;font-weight:250;font-size:14px;line-height:16px;color:#575f6e;margin-top:5px}.onboarding-detail .view-content .left-content section .category-item-inner .category-item-forms{margin-top:20px}.onboarding-detail .view-content .left-content section .category-item-inner .category-item-forms .label{font-style:normal;font-weight:250;font-size:12px;line-height:16px;display:flex;align-items:center;color:#575f6e}.onboarding-detail .view-content .right-content{background-color:#fff;border-radius:6px;padding:15px;overflow:auto;max-height:85.5vh;margin-right:20px}.onboarding-detail .view-content .right-content p{color:#575f6e}.onboarding-detail .view-content .right-content .box-ticket-info{padding-bottom:20px;padding-top:20px;border-bottom:2px solid #E2E4E5}.onboarding-detail .view-content .right-content .box-ticket-info .box-header{display:flex;justify-content:space-between;align-items:center}.onboarding-detail .view-content .right-content .box-ticket-info .box-header button{min-width:auto;height:36px;border-radius:4px;font-weight:500;font-size:16px;display:flex;align-items:center;text-transform:capitalize;color:#fff}.onboarding-detail .view-content .right-content .box-ticket-info .box-header .finished{background:#6FE8D7}.onboarding-detail .view-content .right-content .box-ticket-info .box-header .progress{background:#F3A124}.onboarding-detail .view-content .right-content .box-ticket-info .download-ticket{margin-top:20px;background-color:#fff;border:1px solid #171F26}.onboarding-detail .view-content .category-view-container{display:flex;flex-direction:column;max-height:70vh;overflow:auto}.onboarding-detail .view-content .right-content::-webkit-scrollbar,.onboarding-detail .view-content .category-view-container::-webkit-scrollbar{display:none}.onboarding-detail .view-content .right-content,.onboarding-detail .view-content .category-view-container{-ms-overflow-style:none;scrollbar-width:none}.fields{height:84%}.fields ul{list-style:none;display:flex;margin:33px 0;padding:0;overflow:auto}.fields ul li{margin-right:20px;padding-bottom:5px;border-bottom:3px solid transparent}.fields ul li a{text-decoration:none;font-style:normal;font-weight:700;font-size:14px;line-height:120%;color:#171f26;opacity:.5;overflow:hidden;display:-webkit-box;-webkit-line-clamp:1;-webkit-box-orient:vertical}.fields ul li.menu-item:hover,.fields ul li.menu-item.active{cursor:pointer;border-bottom:3px solid #3C4252}.fields ul li.menu-item:hover a,.fields ul li.menu-item.active a{font-style:normal;font-weight:700;font-size:14px;line-height:120%;opacity:1;text-decoration:none!important}.progress-status .status{display:flex;align-items:center}.progress-status .ongoing{color:#6fe8d7}.progress-status .in-progress{padding-right:25px;color:#f3a124;font-weight:500;font-size:16px}::ng-deep .progress-status{font-size:16px}::ng-deep .progress-status .mat-progress-bar{display:block;height:20px;overflow:hidden;border-radius:50px;position:relative;transition:opacity .25s linear;width:100%}::ng-deep .progress-status .mat-progress-bar-fill:after{background-color:#6fe8d7}::ng-deep .progress-status .mat-progress-bar-buffer{background-color:#ecf3f7}.category-header{display:flex;align-items:center;justify-content:space-between}.d-flex-row{display:flex;align-items:center}.d-flex-row mat-icon{margin-right:5px}::ng-deep mat-bottom-sheet-container{width:100vw;max-width:100vw!important;height:150px;background:#F4F7F9!important;display:flex!important;flex-direction:column;justify-content:center}::ng-deep mat-bottom-sheet-container .sheet-content{display:flex;align-items:center;justify-content:center}::ng-deep mat-bottom-sheet-container h3{font-style:normal;font-weight:700;font-size:20px;line-height:100%;color:#171f26;margin-bottom:0!important;margin-top:0!important}::ng-deep mat-bottom-sheet-container button.download-button{width:277px;height:48px;background:#171F26;box-shadow:0 0 #0003;border-radius:7px;color:#fff;margin:0 25px}::ng-deep mat-bottom-sheet-container button.close-button{height:48px;background:#fff;box-shadow:0 0 #0003;border-radius:7px;color:#171f26;border:1px solid #171F26}.ul-list{list-style:disc!important;display:block!important;margin-left:0!important;padding-left:0!important;margin-top:0!important}.ul-list li:before{content:\".\";font-size:40px}\n"] }]
    }], function () { return [{ type: i3.MatBottomSheetRef }, { type: i2.OnboardingService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib25ib2FyZGluZy1kZXRhaWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvb25ib2FyZGluZy9zcmMvbGliL2NvbXBvbmVudHMvb25ib2FyZGluZy9vbmJvYXJkaW5nLWRldGFpbC9vbmJvYXJkaW5nLWRldGFpbC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9vbmJvYXJkaW5nL3NyYy9saWIvY29tcG9uZW50cy9vbmJvYXJkaW5nL29uYm9hcmRpbmctZGV0YWlsL29uYm9hcmRpbmctZGV0YWlsLmNvbXBvbmVudC5odG1sIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvb25ib2FyZGluZy9zcmMvbGliL2NvbXBvbmVudHMvb25ib2FyZGluZy9vbmJvYXJkaW5nLWRldGFpbC9ib3R0b20tc2hlZXQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7OztJQ2tCekUsNkJBQXlFO0lBQ3JFLHVCQUFhO0lBQ2IsbUNBQTRDO0lBQUEscUJBQUs7SUFBQSxpQkFBVztJQUM1RCxZQUNKO0lBQUEsMEJBQWU7OztJQURYLGVBQ0o7SUFESSxzTkFDSjs7O0lBRUEsNkJBQW1FO0lBQy9ELHVCQUFhO0lBQ2IsbUNBQTRDO0lBQUEsMEJBQVU7SUFBQSxpQkFBVztJQUNqRSxZQUNKO0lBQUEsMEJBQWU7OztJQURYLGVBQ0o7SUFESSwwTUFDSjs7O0lBUUEsOEJBQzJGLFFBQUE7SUFDcEYsWUFBaUI7SUFBQSxpQkFBSSxFQUFBOzs7O0lBRjRCLHlDQUE2QjtJQUFqRixvREFBaUMsOEJBQUE7SUFFOUIsZUFBaUI7SUFBakIsc0NBQWlCOzs7SUEyQ0EsMEJBQXNDO0lBQUEsWUFBUTtJQUFBLGlCQUFL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Q0FBQyxDQUFDLEVBQUUsQ0FBQTtRQUMxRCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFBO0lBQ3ZDLENBQUM7SUFFRCxLQUFLO1FBQ0gsSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNqQyxDQUFDO0lBRUQsS0FBSyxDQUFDLGNBQWM7UUFDbEIsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2YsTUFBTSxJQUFJLENBQUMsT0FBTyxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUMvRixJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sRUFBRSxDQUFDO1NBQ2hDO0lBQ0gsQ0FBQzs7c0VBbkJVLFdBQVc7OERBQVgsV0FBVztRRS9FeEIsOEJBQTJCLFNBQUE7UUFDckIsWUFBWTtRQUFBLGlCQUFLO1FBQ3JCLGlDQUFzRTtRQUEzQix3RkFBUyxvQkFBZ0IsSUFBQztRQUFDLCtEQUFnQztRQUFBLGlCQUFTO1FBQy9HLGlDQUEwRDtRQUFsQix3RkFBUyxXQUFPLElBQUM7UUFBQyxzQkFBTTtRQUFBLGlCQUFTLEVBQUE7O1FBRnJFLGVBQVk7UUFBWixrQ0FBWTs7dUZGOEVMLFdBQVc7Y0FMdkIsU0FBUzsyQkFDRSxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIEhvc3RMaXN0ZW5lciwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNYXRCb3R0b21TaGVldCwgTWF0Qm90dG9tU2hlZXRSZWYgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9ib3R0b20tc2hlZXQnO1xuXG5pbXBvcnQgeyBPbmJvYXJkaW5nU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL29uYm9hcmRpbmcuc2VydmljZSc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItb25ib2FyZGluZy1kZXRhaWwnLFxuICB0ZW1wbGF0ZVVybDogJy4vb25ib2FyZGluZy1kZXRhaWwuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9vbmJvYXJkaW5nLWRldGFpbC5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIE9uYm9hcmRpbmdEZXRhaWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBkZXRhaWxWaWV3O1xuICBAT3V0cHV0KCkgb25TaG93TW9kZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4odHJ1ZSk7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgc2VydmljZTogT25ib2FyZGluZ1NlcnZpY2UsIHByaXZhdGUgX2JvdHRvbVNoZWV0OiBNYXRCb3R0b21TaGVldCkgeyB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gIH1cbiAgb3BlbkJvdHRvbVNoZWV0KEF0dGFjaGVtZW50KTogdm9pZCB7XG4gICAgdGhpcy5fYm90dG9tU2hlZXQub3BlbihCb3R0b21TaGVldCwge1xuICAgICAgZGF0YTogQXR0YWNoZW1lbnQgJiYgQXR0YWNoZW1lbnQubGVuZ3RoID4gMSA/IEF0dGFjaGVtZW50LmZpbmQoKGF0dGFjaDogYW55KSA9PiBhdHRhY2guTmFtZS5pbmNsdWRlcyhcIkNvbmZpZ3VyYXRpb25cIikpIDogQXR0YWNoZW1lbnRbMF1cbiAgICB9KTtcbiAgfVxuICBASG9zdExpc3RlbmVyKCdzY3JvbGwnLCBbJyRldmVudCddKVxuICBvblNjcm9sbChldmVudCkge1xuICAgIGNvbnN0IHNlY3Rpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcInNlY3Rpb25cIik7XG4gICAgY29uc3QgbmF2TGkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmZpZWxkcyB1bCBsaVwiKTtcblxuICAgIGxldCBjdXJyZW50ID0gXCJcIjtcbiAgICBzZWN0aW9ucy5mb3JFYWNoKChzZWN0aW9uKSA9PiB7XG4gICAgICBjb25zdCBzZWN0aW9uVG9wID0gc2VjdGlvbi5vZmZzZXRUb3A7XG4gICAgICBpZiAoZXZlbnQudGFyZ2V0LnNjcm9sbFRvcCA+IHNlY3Rpb25Ub3AgLSAzMDApIHtcbiAgICAgICAgY3VycmVudCA9IHNlY3Rpb24uZ2V0QXR0cmlidXRlKFwiaWRcIilcbiAgICAgIH1cbiAgICB9KTtcbiAgICBuYXZMaS5mb3JFYWNoKChsaSkgPT4ge1xuICAgICAgY29uc3QgaWQgPSBsaS5nZXRBdHRyaWJ1dGUoJ2lkJylcbiAgICAgIGlmIChpZD8uc3Vic3RyaW5nKDAsIGlkLmxlbmd0aCAtIDEpID09PSBjdXJyZW50KSB7XG4gICAgICAgIGxpLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsaS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgY2F0TmFtZVN0YXJ0KHN0cjogc3RyaW5nKSB7XG4gICAgY29uc3Qgdm93ZWxzID0gWydhJywgJ2UnLCAnaScsICdvJywgJ3UnLCAneSddO1xuICAgIHJldHVybiB2b3dlbHMuaW5jbHVkZXMoc3RyLnN1YnN0cigwLCAxKS50b0xvY2FsZUxvd2VyQ2FzZSgpKVxuICB9XG4gIG9uRWRpdCgpIHtcbiAgICB0aGlzLm9uU2hvd01vZGUuZW1pdChmYWxzZSlcbiAgfVxuXG4gIHByb2dyZXNzKGNvbXBsZXRlZCwgbGVuZ3RoKSB7XG4gICAgcmV0dXJuIDEwMCAqIGNvbXBsZXRlZCAvIGxlbmd0aFxuICB9XG5cbiAgb25WaWV3VGlja2V0KENhc2UpIHtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbYHRpY2tldD9zdGF0ZT1vcGVuJmlkPSR7Q2FzZS5faWR9YF0pXG4gIH1cbiAgb25Gb3JtYXREaXNwbGF5VmFsdWUodmFsdWUpIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6ICdhcnJheScsXG4gICAgICAgIHZhbHVlXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZSA9PT0gdHJ1ZSA/IHsgdmFsdWU6IFwiT3VpXCIsIHR5cGU6ICdzdHJpbmcnIH0gOiB2YWx1ZSA9PT0gZmFsc2UgPyB7IHZhbHVlOiBcIk5vblwiLCB0eXBlOiAnc3RyaW5nJyB9IDogeyB2YWx1ZSwgdHlwZTogJ3N0cmluZycgfVxuXG4gIH1cblxufVxuXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2JvdHRvbS1zaGVldCcsXG4gIHRlbXBsYXRlVXJsOiAnYm90dG9tLXNoZWV0Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9vbmJvYXJkaW5nLWRldGFpbC5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIEJvdHRvbVNoZWV0IGltcGxlbWVudHMgT25Jbml0IHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfYm90dG9tU2hlZXRSZWY6IE1hdEJvdHRvbVNoZWV0UmVmPEJvdHRvbVNoZWV0PiwgcHJpdmF0ZSBzZXJ2aWNlOiBPbmJvYXJkaW5nU2VydmljZSkgeyB9XG4gIGF0dGFjaCA9IG51bGw7XG4gIGZpbGVuYW1lID0gXCJcIlxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmF0dGFjaCA9IHRoaXMuX2JvdHRvbVNoZWV0UmVmLmNvbnRhaW5lckluc3RhbmNlLmJvdHRvbVNoZWV0Q29uZmlnLmRhdGFcbiAgICBjb25zdCB1cmxzID0gdGhpcy5hdHRhY2ggPyB0aGlzLmF0dGFjaC5Vcmwuc3BsaXQoXCIvXCIpIDogW11cbiAgICB0aGlzLmZpbGVuYW1lID0gdXJsc1t1cmxzLmxlbmd0aCAtIDFdXG4gIH1cblxuICBjbG9zZSgpOiB2b2lkIHtcbiAgICB0aGlzLl9ib3R0b21TaGVldFJlZi5kaXNtaXNzKCk7XG4gIH1cblxuICBhc3luYyBvbkRvd25sb2FkRmlsZSgpIHtcbiAgICBpZiAodGhpcy5hdHRhY2gpIHtcbiAgICAgIGF3YWl0IHRoaXMuc2VydmljZS5kb3dubG9hZEF0dGFjaG1lbnQodGhpcy5hdHRhY2guVXJsLCB0aGlzLmF0dGFjaC5Db250ZW50VHlwZSwgdGhpcy5maWxlbmFtZSk7XG4gICAgICB0aGlzLl9ib3R0b21TaGVldFJlZi5kaXNtaXNzKCk7XG4gICAgfVxuICB9XG59XG5cbiIsIjxkaXYgY2xhc3M9XCJvbmJvYXJkaW5nLWRldGFpbFwiPlxuICAgIDwhLS0gPGgxIGNsYXNzPVwidGl0bGVcIj5cbiAgICAgICAgPHA+SW50w6lncmF0aW9uIHByb2ZpbCB7e2RldGFpbFZpZXc/Lk5hbWV9fTwvcD5cbiAgICAgICAgPG1hdC1pY29uICpuZ0lmPVwiIWRldGFpbFZpZXc/LkZpbmlzaGVkXCIgc3R5bGU9XCJtYXJnaW4tbGVmdDogMjBweDsgY3Vyc29yOiBwb2ludGVyO1wiIChjbGljayk9XCJvbkVkaXQoKVwiPmVkaXRcbiAgICAgICAgPC9tYXQtaWNvbj5cbiAgICA8L2gxPiAtLT5cbiAgICA8ZGl2IGNsYXNzPVwidmlldy1jb250ZW50XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJsZWZ0LWNvbnRlbnRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ1c2VyLWluZm9cIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidXNlci1uYW1lXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMj57e2RldGFpbFZpZXc/LnVzZXIuRmlyc3ROYW1lIH19IHt7ZGV0YWlsVmlldz8udXNlci5MYXN0TmFtZSB9fSA8c3Bhbj5hcnJpdsOpIGxlXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD57e2RldGFpbFZpZXc/LmNyZWF0ZWRBdCB8IGRhdGU6J2RkL01NL3l5JyB9fTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImNvbnRhY3RcIj57e2RldGFpbFZpZXc/LnVzZXI/LkFjY291bnROYW1lIH19IDxzcGFuPjwvc3Bhbj4ge3tkZXRhaWxWaWV3Py51c2VyPy5UaXRsZX19PC9wPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiY29udGFjdFwiPlxuICAgICAgICAgICAgICAgICAgICA8bWF0LWljb24gZm9udFNldD1cIm1hdGVyaWFsLWljb25zLW91dGxpbmVkXCI+ZW1haWw8L21hdC1pY29uPnt7ZGV0YWlsVmlldz8udXNlcj8uRW1haWwgfX1cbiAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImRldGFpbFZpZXc/LnVzZXI/Lk1vYmlsZVBob25lPy5pbnRlcm5hdGlvbmFsTnVtYmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bWF0LWljb24gZm9udFNldD1cIm1hdGVyaWFsLWljb25zLW91dGxpbmVkXCI+cGhvbmU8L21hdC1pY29uPlxuICAgICAgICAgICAgICAgICAgICAgICAge3tkZXRhaWxWaWV3Py51c2VyPy5Nb2JpbGVQaG9uZT8uaW50ZXJuYXRpb25hbE51bWJlcn19XG4gICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJkZXRhaWxWaWV3Py51c2VyPy5QaG9uZT8uaW50ZXJuYXRpb25hbE51bWJlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG1hdC1pY29uIGZvbnRTZXQ9XCJtYXRlcmlhbC1pY29ucy1vdXRsaW5lZFwiPnNtYXJ0cGhvbmU8L21hdC1pY29uPlxuICAgICAgICAgICAgICAgICAgICAgICAge3tkZXRhaWxWaWV3Py51c2VyPy5QaG9uZT8uaW50ZXJuYXRpb25hbE51bWJlcn19XG4gICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgICAgICAgICAgICAgPC9wPlxuXG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBpZD1cImZpZWxkc1wiIGNsYXNzPVwiZmllbGRzXCI+XG4gICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICA8bGkgW25neFNjcm9sbFRvXT1cIicjJytjYXRlZ29yeS5uYW1lXCIgY2xhc3M9XCJtZW51LWl0ZW1cIiBbY2xhc3NdPVwiaT09PTAgPyAnYWN0aXZlJzonJ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAqbmdGb3I9XCJsZXQgY2F0ZWdvcnkgb2YgZGV0YWlsVmlldz8uY2F0ZWdvcmllczsgIGxldCBpPWluZGV4XCIgW2lkXT1cImNhdGVnb3J5Lm5hbWUrJ3gnXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YT57e2NhdGVnb3J5Lm5hbWV9fTwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXRlZ29yeS12aWV3LWNvbnRhaW5lclwiIChzY3JvbGwpPVwib25TY3JvbGwoJGV2ZW50KVwiPlxuICAgICAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzcz1cImNhdGVnb3J5LWl0ZW1cIiAqbmdGb3I9XCJsZXQgY2F0ZWdvcnkgb2YgZGV0YWlsVmlldz8uY2F0ZWdvcmllczsgIGxldCBpPWluZGV4XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtpZF09XCJjYXRlZ29yeS5uYW1lXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2F0ZWdvcnktaXRlbS1pbm5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXRlZ29yeS1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRpdGxlLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMj57e2NhdGVnb3J5Lm5hbWV9fTwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImNhdGVnb3J5LWRlc2NyaXB0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTGlzdGVzIGRlcyBpbmZvcm1hdGlvbnMgbsOpY2Vzc2FpcmVzIHBvdXIgbGEgY3LDqWF0aW9uIGRlIHt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2F0TmFtZVN0YXJ0KGNhdGVnb3J5Lm5hbWUpID8gXCJsJ1wiICsgY2F0ZWdvcnkubmFtZSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnkubmFtZSB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByb2dyZXNzLXN0YXR1c1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSB7e2NhdGVnb3J5Py5maWVsZENvbXBsZXRlZH19IC8ge3tjYXRlZ29yeT8uZmllbGRMZW5ndGh9fSAtLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gPGRpdiAqbmdJZj1cImNhdGVnb3J5Py5maWVsZENvbXBsZXRlZD09PWNhdGVnb3J5Py5maWVsZExlbmd0aFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJzdGF0dXMgaW4tcHJvZ3Jlc3NcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5FbiBjb3VycyBkZSB0cmFpdGVtZW50PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaWItbG9hZGluZz48L2xpYi1sb2FkaW5nPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+IC0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSA8ZGl2ICpuZ0lmPVwiY2F0ZWdvcnk/LmZpZWxkQ29tcGxldGVkID09PWNhdGVnb3J5Py5maWVsZExlbmd0aFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJzdGF0dXMgb25nb2luZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPVwibWFyZ2luLXJpZ2h0OiAxMHB4O1wiPkVuIGNvdXJzPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxtYXQtaWNvbj5jaGVjazwvbWF0LWljb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gLS0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tIDxkaXYgKm5nSWY9XCJjYXRlZ29yeT8uZmllbGRDb21wbGV0ZWQgPCBjYXRlZ29yeT8uZmllbGRMZW5ndGhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwic3RhdHVzIHByb2dyZXNzLWJhclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPVwid2lkdGg6IDMwMHB4O1wiPnt7cHJvZ3Jlc3MoY2F0ZWdvcnk/LmZpZWxkQ29tcGxldGVkICxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnk/LmZpZWxkTGVuZ3RoKX19JSBUZXJtaW7DqTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bWF0LXByb2dyZXNzLWJhciBtb2RlPVwiZGV0ZXJtaW5hdGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbdmFsdWVdPVwicHJvZ3Jlc3MoY2F0ZWdvcnk/LmZpZWxkQ29tcGxldGVkICwgY2F0ZWdvcnk/LmZpZWxkTGVuZ3RoKVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbWF0LXByb2dyZXNzLWJhcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiAtLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhdGVnb3J5LWl0ZW0tZm9ybXNcIiAqbmdGb3I9XCJsZXQgZm9ybXMgb2YgY2F0ZWdvcnkuZm9ybXNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFmb3Jtcy5mb3Jtc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJsYWJlbFwiPnt7Zm9ybXMubGFiZWx9fTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJvbkZvcm1hdERpc3BsYXlWYWx1ZShmb3Jtcy52YWx1ZSkudHlwZT09PSdhcnJheSdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJ1bC1saXN0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSAqbmdGb3I9XCJsZXQgaXRlbSBvZiBmb3Jtcy52YWx1ZSBcIj57e2l0ZW19fTwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgKm5nSWY9XCJvbkZvcm1hdERpc3BsYXlWYWx1ZShmb3Jtcy52YWx1ZSkudHlwZSE9PSdhcnJheSdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e29uRm9ybWF0RGlzcGxheVZhbHVlKGZvcm1zLnZhbHVlKS52YWx1ZX19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImZvcm1zLmZvcm1zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+e3tmb3Jtcy5sYWJlbH19PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXRlZ29yeS1pdGVtLWZvcm1zXCIgKm5nRm9yPVwibGV0IHN1YiBvZiBmb3Jtcy5mb3Jtc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhc3ViLmZvcm1zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwibGFiZWxcIj57e3N1Yi5sYWJlbH19PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwib25Gb3JtYXREaXNwbGF5VmFsdWUoc3ViLnZhbHVlKS50eXBlPT09J2FycmF5J1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzPVwidWwtbGlzdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSAqbmdGb3I9XCJsZXQgaXRlbSBvZiBzdWIudmFsdWUgXCI+e3tpdGVtfX08L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCAqbmdJZj1cIm9uRm9ybWF0RGlzcGxheVZhbHVlKHN1Yi52YWx1ZSkudHlwZSE9PSdhcnJheSdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7b25Gb3JtYXREaXNwbGF5VmFsdWUoc3ViLnZhbHVlKS52YWx1ZX19PC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwic3ViLmZvcm1zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz57e3N1Yi5sYWJlbH19PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhdGVnb3J5LWl0ZW0tZm9ybXNcIiAqbmdGb3I9XCJsZXQgY2hpbGQgb2Ygc3ViLmZvcm1zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIWNoaWxkLmZvcm1zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJsYWJlbFwiPnt7Y2hpbGQubGFiZWx9fTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICpuZ0lmPVwib25Gb3JtYXREaXNwbGF5VmFsdWUoY2hpbGQudmFsdWUpLnR5cGU9PT0nYXJyYXknXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cInVsLWxpc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSAqbmdGb3I9XCJsZXQgaXRlbSBvZiBjaGlsZC52YWx1ZVwiPnt7aXRlbX19PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgKm5nSWY9XCJvbkZvcm1hdERpc3BsYXlWYWx1ZShjaGlsZC52YWx1ZSkudHlwZSE9PSdhcnJheSdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3tvbkZvcm1hdERpc3BsYXlWYWx1ZShjaGlsZC52YWx1ZSkudmFsdWV9fTwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJjaGlsZC5mb3Jtc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz57e2NoaWxkLmxhYmVsfX08L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXRlZ29yeS1pdGVtLWZvcm1zXCIgKm5nRm9yPVwibGV0IGMyIG9mIGNoaWxkLmZvcm1zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwibGFiZWxcIj57e2MyLmxhYmVsfX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICpuZ0lmPVwib25Gb3JtYXREaXNwbGF5VmFsdWUoYzIudmFsdWUpLnR5cGU9PT0nYXJyYXknXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJ1bC1saXN0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpICpuZ0Zvcj1cImxldCBpdGVtIG9mIGMyLnZhbHVlIFwiPnt7aXRlbX19PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgKm5nSWY9XCJvbkZvcm1hdERpc3BsYXlWYWx1ZShjMi52YWx1ZSkudHlwZSE9PSdhcnJheSdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7b25Gb3JtYXREaXNwbGF5VmFsdWUoYzIudmFsdWUpLnZhbHVlfX08L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24gc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT1cImhlaWdodDogNDUwcHg7XCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInJpZ2h0LWNvbnRlbnRcIj5cbiAgICAgICAgICAgIDxoMj5UaWNrZXRzIGxpw6lzIMOgIHZvdHJlIGRlbWFuZGU8L2gyPlxuICAgICAgICAgICAgPHAgY2xhc3M9XCJzdWJ0aXRsZVwiPlZvdXMgcmV0cm91dmVyZXogaWNpIHRvdXMgbGVzIHRpY2tldHMgY3LDqcOpcyBsb3JzIGRlIGxhIGNyw6lhdGlvbiBkZSB2b3RyZSBmaWNoZVxuICAgICAgICAgICAgICAgIGTigJlpbnTDqWdyYXRpb24uPC9wPlxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImRldGFpbFZpZXc/LnRpY2tldHMgJiYgZGV0YWlsVmlldz8udGlja2V0cy5sZW5ndGg+MFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJib3gtdGlja2V0LWluZm9cIiAqbmdGb3I9XCJsZXQgdGlja2V0IG9mIGRldGFpbFZpZXc/LnRpY2tldHNcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImQtZmxleC1yb3cgYm94LWhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBtYXQtYnV0dG9uIGNsYXNzPVwiZC1mbGV4LXJvd1wiIHN0eWxlPVwiY29sb3I6ICM1NzVGNkU7cGFkZGluZy1sZWZ0OiAwO1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cIm9uVmlld1RpY2tldCh0aWNrZXQpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG1hdC1pY29uIGZvbnRTZXQ9XCJtYXRlcmlhbC1pY29ucy1vdXRsaW5lZFwiPmxpc3RfYWx0PC9tYXQtaWNvbj48c3BhblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT1cImZvbnQtd2VpZ2h0OiA0MDA7XCI+VGlja2V0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7dGlja2V0LkNhc2VOdW1iZXJ9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBtYXQtYnV0dG9uIGNsYXNzPVwicHJvZ3Jlc3NcIj57e3RpY2tldC5TdGF0dXN9fTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJkYXRlXCI+e3t0aWNrZXQuQ3JlYXRlZERhdGUgfCBkYXRlIDonZGQvTU0veXknfX08L3A+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJib3gtaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDM+e3t0aWNrZXQuU3ViamVjdH19PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwhLS0gPGJ1dHRvbiAqbmdJZj1cInRpY2tldC5BdHRhY2htZW50cyAmJiB0aWNrZXQuQXR0YWNobWVudHMubGVuZ3RoPjBcIiBtYXQtYnV0dG9uIGNsYXNzPVwiZG93bmxvYWQtdGlja2V0XCIgLS0+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gbWF0LWJ1dHRvbiBjbGFzcz1cImRvd25sb2FkLXRpY2tldFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwib3BlbkJvdHRvbVNoZWV0KHRpY2tldD8udmF0dGFjaG1lbnQpXCI+VMOpbMOpY2hhcmdlclxuICAgICAgICAgICAgICAgICAgICAgICAgbGVcbiAgICAgICAgICAgICAgICAgICAgICAgIFBERlxuICAgICAgICAgICAgICAgICAgICAgICAgcsOpY2FwaXR1bGF0aWY8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJveC10aWNrZXQtaW5mb1wiICpuZ0lmPVwiIWRldGFpbFZpZXc/LnRpY2tldHNcIj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImRlc2NyaXB0aW9uXCI+XCJBdWN1biB0aWNrZXRzXCI8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG48L2Rpdj4iLCI8ZGl2IGNsYXNzPVwic2hlZXQtY29udGVudFwiPlxyXG4gIDxoMz57e2ZpbGVuYW1lfX08L2gzPlxyXG4gIDxidXR0b24gY2xhc3M9XCJkb3dubG9hZC1idXR0b25cIiBtYXQtYnV0dG9uIChjbGljayk9XCJvbkRvd25sb2FkRmlsZSgpXCI+VMOpbMOpY2hhcmdlciBsZSBQREYgcsOpY2FwaXR1bGF0aWY8L2J1dHRvbj5cclxuICA8YnV0dG9uIGNsYXNzPVwiY2xvc2UtYnV0dG9uXCIgbWF0LWJ1dHRvbiAoY2xpY2spPVwiY2xvc2UoKVwiPkZlcm1lcjwvYnV0dG9uPlxyXG48L2Rpdj4iXX0=