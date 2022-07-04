import { __awaiter } from "tslib";
import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "../../../onboarding.service";
import * as i3 from "@angular/material/bottom-sheet";
import * as i4 from "@angular/common";
import * as i5 from "@angular/material/icon";
import * as i6 from "@nicky-lenaers/ngx-scroll-to";
import * as i7 from "@angular/material/button";
function OnboardingDetailComponent_div_0_mat_icon_4_Template(rf, ctx) { if (rf & 1) {
    const _r482 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-icon", 20);
    i0.ɵɵlistener("click", function OnboardingDetailComponent_div_0_mat_icon_4_Template_mat_icon_click_0_listener() { i0.ɵɵrestoreView(_r482); const ctx_r481 = i0.ɵɵnextContext(2); return ctx_r481.onEdit(); });
    i0.ɵɵtext(1, "edit ");
    i0.ɵɵelementEnd();
} }
function OnboardingDetailComponent_div_0_ng_container_24_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "span");
    i0.ɵɵelementStart(2, "mat-icon", 9);
    i0.ɵɵtext(3, "phone");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(4);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r475 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1(" ", ctx_r475.detailView == null ? null : ctx_r475.detailView.user == null ? null : ctx_r475.detailView.user.MobilePhone == null ? null : ctx_r475.detailView.user.MobilePhone.internationalNumber, " ");
} }
function OnboardingDetailComponent_div_0_ng_container_25_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "span");
    i0.ɵɵelementStart(2, "mat-icon", 9);
    i0.ɵɵtext(3, "smartphone");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(4);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r476 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1(" ", ctx_r476.detailView == null ? null : ctx_r476.detailView.user == null ? null : ctx_r476.detailView.user.Phone == null ? null : ctx_r476.detailView.user.Phone.internationalNumber, " ");
} }
function OnboardingDetailComponent_div_0_li_28_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li", 21);
    i0.ɵɵelementStart(1, "a");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const category_r483 = ctx.$implicit;
    const i_r484 = ctx.index;
    i0.ɵɵclassMap(i_r484 === 0 ? "active" : "");
    i0.ɵɵproperty("ngxScrollTo", "#" + category_r483.name)("id", category_r483.name + "x");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(category_r483.name);
} }
function OnboardingDetailComponent_div_0_section_30_div_9_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "p", 30);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "h4");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const forms_r488 = i0.ɵɵnextContext().$implicit;
    const ctx_r489 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(forms_r488.label);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", ctx_r489.onFormatDisplayValue(forms_r488.value), " ");
} }
function OnboardingDetailComponent_div_0_section_30_div_9_ng_container_2_div_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "p", 30);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "h4");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const sub_r493 = i0.ɵɵnextContext().$implicit;
    const ctx_r494 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(sub_r493.label);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r494.onFormatDisplayValue(sub_r493.value));
} }
function OnboardingDetailComponent_div_0_section_30_div_9_ng_container_2_div_3_ng_container_2_div_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "p", 30);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "h4");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const child_r498 = i0.ɵɵnextContext().$implicit;
    const ctx_r499 = i0.ɵɵnextContext(7);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(child_r498.label);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r499.onFormatDisplayValue(child_r498.value));
} }
function OnboardingDetailComponent_div_0_section_30_div_9_ng_container_2_div_3_ng_container_2_div_3_ng_container_2_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 29);
    i0.ɵɵelementStart(1, "p", 30);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "h4");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const c2_r503 = ctx.$implicit;
    const ctx_r502 = i0.ɵɵnextContext(9);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(c2_r503.label);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r502.onFormatDisplayValue(c2_r503.value));
} }
function OnboardingDetailComponent_div_0_section_30_div_9_ng_container_2_div_3_ng_container_2_div_3_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "h3");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, OnboardingDetailComponent_div_0_section_30_div_9_ng_container_2_div_3_ng_container_2_div_3_ng_container_2_div_3_Template, 5, 2, "div", 28);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const child_r498 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(child_r498.label);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", child_r498.forms);
} }
function OnboardingDetailComponent_div_0_section_30_div_9_ng_container_2_div_3_ng_container_2_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 29);
    i0.ɵɵtemplate(1, OnboardingDetailComponent_div_0_section_30_div_9_ng_container_2_div_3_ng_container_2_div_3_ng_container_1_Template, 5, 2, "ng-container", 10);
    i0.ɵɵtemplate(2, OnboardingDetailComponent_div_0_section_30_div_9_ng_container_2_div_3_ng_container_2_div_3_ng_container_2_Template, 4, 2, "ng-container", 10);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const child_r498 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !child_r498.forms);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", child_r498.forms);
} }
function OnboardingDetailComponent_div_0_section_30_div_9_ng_container_2_div_3_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "h3");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, OnboardingDetailComponent_div_0_section_30_div_9_ng_container_2_div_3_ng_container_2_div_3_Template, 3, 2, "div", 28);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const sub_r493 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(sub_r493.label);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", sub_r493.forms);
} }
function OnboardingDetailComponent_div_0_section_30_div_9_ng_container_2_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 29);
    i0.ɵɵtemplate(1, OnboardingDetailComponent_div_0_section_30_div_9_ng_container_2_div_3_ng_container_1_Template, 5, 2, "ng-container", 10);
    i0.ɵɵtemplate(2, OnboardingDetailComponent_div_0_section_30_div_9_ng_container_2_div_3_ng_container_2_Template, 4, 2, "ng-container", 10);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const sub_r493 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !sub_r493.forms);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", sub_r493.forms);
} }
function OnboardingDetailComponent_div_0_section_30_div_9_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "h3");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, OnboardingDetailComponent_div_0_section_30_div_9_ng_container_2_div_3_Template, 3, 2, "div", 28);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const forms_r488 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(forms_r488.label);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", forms_r488.forms);
} }
function OnboardingDetailComponent_div_0_section_30_div_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 29);
    i0.ɵɵtemplate(1, OnboardingDetailComponent_div_0_section_30_div_9_ng_container_1_Template, 5, 2, "ng-container", 10);
    i0.ɵɵtemplate(2, OnboardingDetailComponent_div_0_section_30_div_9_ng_container_2_Template, 4, 2, "ng-container", 10);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const forms_r488 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !forms_r488.forms);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", forms_r488.forms);
} }
function OnboardingDetailComponent_div_0_section_30_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 22);
    i0.ɵɵelementStart(1, "div", 23);
    i0.ɵɵelementStart(2, "div", 24);
    i0.ɵɵelementStart(3, "div", 25);
    i0.ɵɵelementStart(4, "h2");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "p", 26);
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelement(8, "div", 27);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(9, OnboardingDetailComponent_div_0_section_30_div_9_Template, 3, 2, "div", 28);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const category_r485 = ctx.$implicit;
    const ctx_r478 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("id", category_r485.name);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(category_r485.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" Listes des informations n\u00E9cessaires pour la cr\u00E9ation de ", ctx_r478.catNameStart(category_r485.name) ? "l'" + category_r485.name : category_r485.name, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", category_r485.forms);
} }
function OnboardingDetailComponent_div_0_ng_container_38_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r510 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 32);
    i0.ɵɵelementStart(1, "div", 33);
    i0.ɵɵelementStart(2, "button", 34);
    i0.ɵɵlistener("click", function OnboardingDetailComponent_div_0_ng_container_38_div_1_Template_button_click_2_listener() { i0.ɵɵrestoreView(_r510); const ticket_r508 = ctx.$implicit; const ctx_r509 = i0.ɵɵnextContext(3); return ctx_r509.onViewTicket(ticket_r508.CaseNumber); });
    i0.ɵɵelementStart(3, "mat-icon", 9);
    i0.ɵɵtext(4, "list_alt");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "span", 35);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "button", 36);
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "p", 37);
    i0.ɵɵtext(10);
    i0.ɵɵpipe(11, "date");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "div", 38);
    i0.ɵɵelementStart(13, "h3");
    i0.ɵɵtext(14);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "button", 39);
    i0.ɵɵlistener("click", function OnboardingDetailComponent_div_0_ng_container_38_div_1_Template_button_click_15_listener() { i0.ɵɵrestoreView(_r510); const ticket_r508 = ctx.$implicit; const ctx_r511 = i0.ɵɵnextContext(3); return ctx_r511.openBottomSheet(ticket_r508 == null ? null : ticket_r508.Attachments); });
    i0.ɵɵtext(16, "T\u00E9l\u00E9charger le PDF r\u00E9capitulatif");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ticket_r508 = ctx.$implicit;
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate1("Ticket ", ticket_r508.CaseNumber, "");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ticket_r508.Status);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(11, 4, ticket_r508.CreatedDate, "dd/MM/yy"));
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ticket_r508.Subject);
} }
function OnboardingDetailComponent_div_0_ng_container_38_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, OnboardingDetailComponent_div_0_ng_container_38_div_1_Template, 17, 7, "div", 31);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r479 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r479.detailView.tickets);
} }
function OnboardingDetailComponent_div_0_div_39_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 32);
    i0.ɵɵelementStart(1, "p", 40);
    i0.ɵɵtext(2, "\"Aucun tickets\"");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
function OnboardingDetailComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r513 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 1);
    i0.ɵɵelementStart(1, "h1", 2);
    i0.ɵɵelementStart(2, "p");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(4, OnboardingDetailComponent_div_0_mat_icon_4_Template, 2, 0, "mat-icon", 3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 4);
    i0.ɵɵelementStart(6, "div", 5);
    i0.ɵɵelementStart(7, "div", 6);
    i0.ɵɵelementStart(8, "div", 7);
    i0.ɵɵelementStart(9, "h2");
    i0.ɵɵtext(10);
    i0.ɵɵelementStart(11, "span");
    i0.ɵɵtext(12, "arriv\u00E9 le ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "p");
    i0.ɵɵtext(14);
    i0.ɵɵpipe(15, "date");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "p", 8);
    i0.ɵɵtext(17);
    i0.ɵɵelement(18, "span");
    i0.ɵɵtext(19);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(20, "p", 8);
    i0.ɵɵelementStart(21, "mat-icon", 9);
    i0.ɵɵtext(22, "email");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(23);
    i0.ɵɵtemplate(24, OnboardingDetailComponent_div_0_ng_container_24_Template, 5, 1, "ng-container", 10);
    i0.ɵɵtemplate(25, OnboardingDetailComponent_div_0_ng_container_25_Template, 5, 1, "ng-container", 10);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(26, "div", 11);
    i0.ɵɵelementStart(27, "ul");
    i0.ɵɵtemplate(28, OnboardingDetailComponent_div_0_li_28_Template, 3, 5, "li", 12);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(29, "div", 13);
    i0.ɵɵlistener("scroll", function OnboardingDetailComponent_div_0_Template_div_scroll_29_listener($event) { i0.ɵɵrestoreView(_r513); const ctx_r512 = i0.ɵɵnextContext(); return ctx_r512.onScroll($event); });
    i0.ɵɵtemplate(30, OnboardingDetailComponent_div_0_section_30_Template, 10, 4, "section", 14);
    i0.ɵɵelementStart(31, "section", 15);
    i0.ɵɵelement(32, "div", 16);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(33, "div", 17);
    i0.ɵɵelementStart(34, "h2");
    i0.ɵɵtext(35, "Tickets li\u00E9s \u00E0 votre demande");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(36, "p", 18);
    i0.ɵɵtext(37, "Vous retrouverez ici tous les tickets cr\u00E9\u00E9s lors de la cr\u00E9ation de votre fiche d\u2019int\u00E9gration.");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(38, OnboardingDetailComponent_div_0_ng_container_38_Template, 2, 1, "ng-container", 10);
    i0.ɵɵtemplate(39, OnboardingDetailComponent_div_0_div_39_Template, 3, 0, "div", 19);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r473 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("Int\u00E9gration profil ", ctx_r473.detailView == null ? null : ctx_r473.detailView.Name, "");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r473.detailView.Finished);
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate2("", ctx_r473.detailView.user.FirstName, " ", ctx_r473.detailView.user.LastName, " ");
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(15, 14, ctx_r473.detailView.createdAt, "dd/MM/yy"));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("", ctx_r473.detailView == null ? null : ctx_r473.detailView.user == null ? null : ctx_r473.detailView.user.AccountName, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r473.detailView == null ? null : ctx_r473.detailView.user == null ? null : ctx_r473.detailView.user.Title, "");
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1("", ctx_r473.detailView == null ? null : ctx_r473.detailView.user == null ? null : ctx_r473.detailView.user.Email, " ");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r473.detailView == null ? null : ctx_r473.detailView.user == null ? null : ctx_r473.detailView.user.MobilePhone == null ? null : ctx_r473.detailView.user.MobilePhone.internationalNumber);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r473.detailView == null ? null : ctx_r473.detailView.user == null ? null : ctx_r473.detailView.user.Phone == null ? null : ctx_r473.detailView.user.Phone.internationalNumber);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", ctx_r473.detailView.categories);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r473.detailView.categories);
    i0.ɵɵadvance(8);
    i0.ɵɵproperty("ngIf", ctx_r473.detailView.tickets && ctx_r473.detailView.tickets.length > 0);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r473.detailView.tickets);
} }
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
            data: Attachement ? Attachement[0] : {
                ContentType: "image/jpeg",
                CreatedById: "0052o000009FBvvAAG",
                CreatedDate: "2022-07-01T13:12:54.467Z",
                Extension: "jpeg",
                Id: "0691q0000061cyFAAQ",
                IdContact__c: "0031q00000nwsQyAAI",
                LastModifiedDate: "2022-07-01T13:12:54.467Z",
                Name: "How-To-Become-A-Full-Stack-JavaScript-Developer",
                Origin: "Web",
                ParentId: "5001q00000IisuTAAR",
                Url: "/assets/5001q00000IisuTAAR_1656681172298.jpeg",
            }
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
            if (id.substring(0, id.length - 1) === current) {
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
    onViewTicket(CaseNumber) {
        this.router.navigate([`ticket/${CaseNumber}`]);
    }
    onFormatDisplayValue(value) {
        return value === true ? 'Oui' : value === false ? 'Non' : value;
    }
}
OnboardingDetailComponent.ɵfac = function OnboardingDetailComponent_Factory(t) { return new (t || OnboardingDetailComponent)(i0.ɵɵdirectiveInject(i1.Router), i0.ɵɵdirectiveInject(i2.OnboardingService), i0.ɵɵdirectiveInject(i3.MatBottomSheet)); };
OnboardingDetailComponent.ɵcmp = i0.ɵɵdefineComponent({ type: OnboardingDetailComponent, selectors: [["lib-onboarding-detail"]], hostBindings: function OnboardingDetailComponent_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("scroll", function OnboardingDetailComponent_scroll_HostBindingHandler($event) { return ctx.onScroll($event); });
    } }, inputs: { detailView: "detailView" }, outputs: { onShowMode: "onShowMode" }, decls: 1, vars: 1, consts: [["class", "onboarding-detail", 4, "ngIf"], [1, "onboarding-detail"], [1, "title"], ["style", "margin-left: 20px; cursor: pointer;", 3, "click", 4, "ngIf"], [1, "view-content"], [1, "left-content"], [1, "user-info"], [1, "user-name"], [1, "contact"], ["fontSet", "material-icons-outlined"], [4, "ngIf"], ["id", "fields", 1, "fields"], ["class", "menu-item", 3, "ngxScrollTo", "class", "id", 4, "ngFor", "ngForOf"], [1, "category-view-container", 3, "scroll"], ["class", "category-item", 3, "id", 4, "ngFor", "ngForOf"], [2, "background-color", "transparent"], [2, "height", "450px"], [1, "right-content"], [1, "subtitle"], ["class", "box-ticket-info", 4, "ngIf"], [2, "margin-left", "20px", "cursor", "pointer", 3, "click"], [1, "menu-item", 3, "ngxScrollTo", "id"], [1, "category-item", 3, "id"], [1, "category-item-inner"], [1, "category-header"], [1, "title-content"], [1, "category-description"], [1, "progress-status"], ["class", "category-item-forms", 4, "ngFor", "ngForOf"], [1, "category-item-forms"], [1, "label"], ["class", "box-ticket-info", 4, "ngFor", "ngForOf"], [1, "box-ticket-info"], [1, "d-flex-row", "box-header"], ["mat-button", "", 1, "d-flex-row", 2, "color", "#575F6E", "padding-left", "0", 3, "click"], [2, "font-weight", "400"], ["mat-button", "", 1, "progress"], [1, "date"], [1, "box-header"], ["mat-button", "", 1, "download-ticket", 3, "click"], [1, "description"]], template: function OnboardingDetailComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, OnboardingDetailComponent_div_0_Template, 40, 17, "div", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.detailView);
    } }, directives: [i4.NgIf, i5.MatIcon, i4.NgForOf, i6.ScrollToDirective, i7.MatButton], pipes: [i4.DatePipe], styles: [".onboarding-detail[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .onboarding-detail[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .onboarding-detail[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .onboarding-detail[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], .onboarding-detail[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%], .onboarding-detail[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]{margin:0;font-family:Nexa;font-style:normal;font-weight:700;line-height:110%;display:flex;align-items:center;color:#242731}.onboarding-detail[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0}.onboarding-detail[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:24px}.onboarding-detail[_ngcontent-%COMP%]   h1.title[_ngcontent-%COMP%]{margin-bottom:33px;margin-top:10px}.onboarding-detail[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:20px}.onboarding-detail[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:18px}.onboarding-detail[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-size:16px}.onboarding-detail[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{font-size:14px}.onboarding-detail[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]{font-size:12px}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-between;background-color:#f4f7f9}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]{width:70%;border-radius:6px;margin-right:2%}@media (max-width:1200px){.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]{width:50%}}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]{background:0 0;border-radius:6px;padding:10px 10px 10px 0}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]::before{content:\".\";font-size:25px;margin:0 10px}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-weight:400;display:flex;align-items:center}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{padding-right:5px}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   p.contact[_ngcontent-%COMP%]{margin-top:10px}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .user-name[_ngcontent-%COMP%]{line-height:30px}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .user-name[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-weight:400;font-size:12px;margin-right:10px}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .user-contact[_ngcontent-%COMP%]{line-height:30px}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]{background:#fff;border-radius:8px;padding:15px;margin-bottom:30px}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   .category-item-inner[_ngcontent-%COMP%]   .category-description[_ngcontent-%COMP%]{font-family:Nexa;font-style:normal;font-weight:250;font-size:14px;line-height:16px;color:#575f6e;margin-top:5px}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   .category-item-inner[_ngcontent-%COMP%]   .category-item-forms[_ngcontent-%COMP%]{margin-top:20px}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   .category-item-inner[_ngcontent-%COMP%]   .category-item-forms[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]{font-family:Nexa;font-style:normal;font-weight:250;font-size:12px;line-height:16px;display:flex;align-items:center;color:#575f6e}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .right-content[_ngcontent-%COMP%]{background-color:#fff;border-radius:6px;padding:15px;overflow:auto;max-height:85.5vh;margin-right:20px}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .right-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#575f6e}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .right-content[_ngcontent-%COMP%]   .box-ticket-info[_ngcontent-%COMP%]{padding-bottom:20px;padding-top:20px;border-bottom:2px solid #e2e4e5}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .right-content[_ngcontent-%COMP%]   .box-ticket-info[_ngcontent-%COMP%]   .box-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .right-content[_ngcontent-%COMP%]   .box-ticket-info[_ngcontent-%COMP%]   .box-header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{min-width:auto;height:36px;border-radius:4px;font-family:Nexa;font-weight:500;font-size:16px;display:flex;align-items:center;text-transform:capitalize;color:#fff}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .right-content[_ngcontent-%COMP%]   .box-ticket-info[_ngcontent-%COMP%]   .box-header[_ngcontent-%COMP%]   .finished[_ngcontent-%COMP%]{background:#6fe8d7}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .right-content[_ngcontent-%COMP%]   .box-ticket-info[_ngcontent-%COMP%]   .box-header[_ngcontent-%COMP%]   .progress[_ngcontent-%COMP%]{background:#f3a124}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .right-content[_ngcontent-%COMP%]   .box-ticket-info[_ngcontent-%COMP%]   .download-ticket[_ngcontent-%COMP%]{margin-top:20px;background-color:#fff;border:1px solid #171f26}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .category-view-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;max-height:70vh;overflow:auto}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .category-view-container[_ngcontent-%COMP%]::-webkit-scrollbar, .onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .right-content[_ngcontent-%COMP%]::-webkit-scrollbar{display:none}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .category-view-container[_ngcontent-%COMP%], .onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .right-content[_ngcontent-%COMP%]{-ms-overflow-style:none;scrollbar-width:none}.fields[_ngcontent-%COMP%]{height:84%}.fields[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style:none;display:flex;margin:33px 0;padding:0;overflow:auto}.fields[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin-right:20px;padding-bottom:5px;border-bottom:3px solid transparent}.fields[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none;font-family:Nexa;font-style:normal;font-weight:700;font-size:14px;line-height:120%;color:#171f26;opacity:.5;overflow:hidden;display:-webkit-box;-webkit-line-clamp:1;-webkit-box-orient:vertical}.fields[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.menu-item.active[_ngcontent-%COMP%], .fields[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.menu-item[_ngcontent-%COMP%]:hover{cursor:pointer;border-bottom:3px solid #3c4252}.fields[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.menu-item.active[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .fields[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.menu-item[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%]{font-family:Nexa;font-style:normal;font-weight:700;font-size:14px;line-height:120%;opacity:1;text-decoration:none!important}.progress-status[_ngcontent-%COMP%]   .status[_ngcontent-%COMP%]{display:flex;align-items:center}.progress-status[_ngcontent-%COMP%]   .ongoing[_ngcontent-%COMP%]{color:#6fe8d7}.progress-status[_ngcontent-%COMP%]   .in-progress[_ngcontent-%COMP%]{padding-right:25px;color:#f3a124;font-weight:500;font-size:16px}  .progress-status{font-size:16px}  .progress-status .mat-progress-bar{display:block;height:20px;overflow:hidden;border-radius:50px;position:relative;transition:opacity 250ms linear;width:100%}  .progress-status .mat-progress-bar-fill::after{background-color:#6fe8d7}  .progress-status .mat-progress-bar-buffer{background-color:#ecf3f7}.category-header[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between}.d-flex-row[_ngcontent-%COMP%]{display:flex;align-items:center}.d-flex-row[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin-right:5px}  mat-bottom-sheet-container{width:100vw;max-width:100vw!important;height:150px;background:#f4f7f9!important;display:flex!important;flex-direction:column;justify-content:center}  mat-bottom-sheet-container .sheet-content{display:flex;align-items:center;justify-content:center}  mat-bottom-sheet-container h3{font-family:Nexa;font-style:normal;font-weight:700;font-size:20px;line-height:100%;color:#171f26;margin-bottom:0!important}  mat-bottom-sheet-container button.download-button{width:277px;height:48px;background:#171f26;box-shadow:0 0 0 rgba(0,0,0,.2);border-radius:7px;color:#fff;margin:0 25px}  mat-bottom-sheet-container button.close-button{height:48px;background:#fff;box-shadow:0 0 0 rgba(0,0,0,.2);border-radius:7px;color:#171f26;border:1px solid #171f26}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(OnboardingDetailComponent, [{
        type: Component,
        args: [{
                selector: 'lib-onboarding-detail',
                templateUrl: './onboarding-detail.component.html',
                styleUrls: ['./onboarding-detail.component.scss']
            }]
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
    onDownloadFile() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.attach) {
                yield this.service.downloadAttachment(this.attach.Url, this.attach.ContentType, this.filename);
                this._bottomSheetRef.dismiss();
            }
        });
    }
}
BottomSheet.ɵfac = function BottomSheet_Factory(t) { return new (t || BottomSheet)(i0.ɵɵdirectiveInject(i3.MatBottomSheetRef), i0.ɵɵdirectiveInject(i2.OnboardingService)); };
BottomSheet.ɵcmp = i0.ɵɵdefineComponent({ type: BottomSheet, selectors: [["bottom-sheet"]], decls: 7, vars: 1, consts: [[1, "sheet-content"], ["mat-button", "", 1, "download-button", 3, "click"], ["mat-button", "", 1, "close-button", 3, "click"]], template: function BottomSheet_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "h3");
        i0.ɵɵtext(2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "button", 1);
        i0.ɵɵlistener("click", function BottomSheet_Template_button_click_3_listener() { return ctx.onDownloadFile(); });
        i0.ɵɵtext(4, "T\u00E9l\u00E9charger le PDF r\u00E9capitulatif");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "button", 2);
        i0.ɵɵlistener("click", function BottomSheet_Template_button_click_5_listener() { return ctx.close(); });
        i0.ɵɵtext(6, "Fermer");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate(ctx.filename);
    } }, directives: [i7.MatButton], styles: [".onboarding-detail[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .onboarding-detail[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .onboarding-detail[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .onboarding-detail[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], .onboarding-detail[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%], .onboarding-detail[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]{margin:0;font-family:Nexa;font-style:normal;font-weight:700;line-height:110%;display:flex;align-items:center;color:#242731}.onboarding-detail[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0}.onboarding-detail[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:24px}.onboarding-detail[_ngcontent-%COMP%]   h1.title[_ngcontent-%COMP%]{margin-bottom:33px;margin-top:10px}.onboarding-detail[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:20px}.onboarding-detail[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:18px}.onboarding-detail[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-size:16px}.onboarding-detail[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{font-size:14px}.onboarding-detail[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]{font-size:12px}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-between;background-color:#f4f7f9}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]{width:70%;border-radius:6px;margin-right:2%}@media (max-width:1200px){.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]{width:50%}}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]{background:0 0;border-radius:6px;padding:10px 10px 10px 0}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]::before{content:\".\";font-size:25px;margin:0 10px}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-weight:400;display:flex;align-items:center}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{padding-right:5px}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   p.contact[_ngcontent-%COMP%]{margin-top:10px}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .user-name[_ngcontent-%COMP%]{line-height:30px}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .user-name[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-weight:400;font-size:12px;margin-right:10px}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .user-contact[_ngcontent-%COMP%]{line-height:30px}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]{background:#fff;border-radius:8px;padding:15px;margin-bottom:30px}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   .category-item-inner[_ngcontent-%COMP%]   .category-description[_ngcontent-%COMP%]{font-family:Nexa;font-style:normal;font-weight:250;font-size:14px;line-height:16px;color:#575f6e;margin-top:5px}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   .category-item-inner[_ngcontent-%COMP%]   .category-item-forms[_ngcontent-%COMP%]{margin-top:20px}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   .category-item-inner[_ngcontent-%COMP%]   .category-item-forms[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]{font-family:Nexa;font-style:normal;font-weight:250;font-size:12px;line-height:16px;display:flex;align-items:center;color:#575f6e}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .right-content[_ngcontent-%COMP%]{background-color:#fff;border-radius:6px;padding:15px;overflow:auto;max-height:85.5vh;margin-right:20px}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .right-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#575f6e}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .right-content[_ngcontent-%COMP%]   .box-ticket-info[_ngcontent-%COMP%]{padding-bottom:20px;padding-top:20px;border-bottom:2px solid #e2e4e5}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .right-content[_ngcontent-%COMP%]   .box-ticket-info[_ngcontent-%COMP%]   .box-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .right-content[_ngcontent-%COMP%]   .box-ticket-info[_ngcontent-%COMP%]   .box-header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{min-width:auto;height:36px;border-radius:4px;font-family:Nexa;font-weight:500;font-size:16px;display:flex;align-items:center;text-transform:capitalize;color:#fff}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .right-content[_ngcontent-%COMP%]   .box-ticket-info[_ngcontent-%COMP%]   .box-header[_ngcontent-%COMP%]   .finished[_ngcontent-%COMP%]{background:#6fe8d7}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .right-content[_ngcontent-%COMP%]   .box-ticket-info[_ngcontent-%COMP%]   .box-header[_ngcontent-%COMP%]   .progress[_ngcontent-%COMP%]{background:#f3a124}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .right-content[_ngcontent-%COMP%]   .box-ticket-info[_ngcontent-%COMP%]   .download-ticket[_ngcontent-%COMP%]{margin-top:20px;background-color:#fff;border:1px solid #171f26}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .category-view-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;max-height:70vh;overflow:auto}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .category-view-container[_ngcontent-%COMP%]::-webkit-scrollbar, .onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .right-content[_ngcontent-%COMP%]::-webkit-scrollbar{display:none}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .category-view-container[_ngcontent-%COMP%], .onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .right-content[_ngcontent-%COMP%]{-ms-overflow-style:none;scrollbar-width:none}.fields[_ngcontent-%COMP%]{height:84%}.fields[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style:none;display:flex;margin:33px 0;padding:0;overflow:auto}.fields[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin-right:20px;padding-bottom:5px;border-bottom:3px solid transparent}.fields[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none;font-family:Nexa;font-style:normal;font-weight:700;font-size:14px;line-height:120%;color:#171f26;opacity:.5;overflow:hidden;display:-webkit-box;-webkit-line-clamp:1;-webkit-box-orient:vertical}.fields[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.menu-item.active[_ngcontent-%COMP%], .fields[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.menu-item[_ngcontent-%COMP%]:hover{cursor:pointer;border-bottom:3px solid #3c4252}.fields[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.menu-item.active[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .fields[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.menu-item[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%]{font-family:Nexa;font-style:normal;font-weight:700;font-size:14px;line-height:120%;opacity:1;text-decoration:none!important}.progress-status[_ngcontent-%COMP%]   .status[_ngcontent-%COMP%]{display:flex;align-items:center}.progress-status[_ngcontent-%COMP%]   .ongoing[_ngcontent-%COMP%]{color:#6fe8d7}.progress-status[_ngcontent-%COMP%]   .in-progress[_ngcontent-%COMP%]{padding-right:25px;color:#f3a124;font-weight:500;font-size:16px}  .progress-status{font-size:16px}  .progress-status .mat-progress-bar{display:block;height:20px;overflow:hidden;border-radius:50px;position:relative;transition:opacity 250ms linear;width:100%}  .progress-status .mat-progress-bar-fill::after{background-color:#6fe8d7}  .progress-status .mat-progress-bar-buffer{background-color:#ecf3f7}.category-header[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between}.d-flex-row[_ngcontent-%COMP%]{display:flex;align-items:center}.d-flex-row[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin-right:5px}  mat-bottom-sheet-container{width:100vw;max-width:100vw!important;height:150px;background:#f4f7f9!important;display:flex!important;flex-direction:column;justify-content:center}  mat-bottom-sheet-container .sheet-content{display:flex;align-items:center;justify-content:center}  mat-bottom-sheet-container h3{font-family:Nexa;font-style:normal;font-weight:700;font-size:20px;line-height:100%;color:#171f26;margin-bottom:0!important}  mat-bottom-sheet-container button.download-button{width:277px;height:48px;background:#171f26;box-shadow:0 0 0 rgba(0,0,0,.2);border-radius:7px;color:#fff;margin:0 25px}  mat-bottom-sheet-container button.close-button{height:48px;background:#fff;box-shadow:0 0 0 rgba(0,0,0,.2);border-radius:7px;color:#171f26;border:1px solid #171f26}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(BottomSheet, [{
        type: Component,
        args: [{
                selector: 'bottom-sheet',
                templateUrl: 'bottom-sheet.html',
                styleUrls: ['./onboarding-detail.component.scss']
            }]
    }], function () { return [{ type: i3.MatBottomSheetRef }, { type: i2.OnboardingService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib25ib2FyZGluZy1kZXRhaWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vb25ib2FyZGluZy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL29uYm9hcmRpbmcvb25ib2FyZGluZy1kZXRhaWwvb25ib2FyZGluZy1kZXRhaWwuY29tcG9uZW50LnRzIiwibGliL2NvbXBvbmVudHMvb25ib2FyZGluZy9vbmJvYXJkaW5nLWRldGFpbC9vbmJvYXJkaW5nLWRldGFpbC5jb21wb25lbnQuaHRtbCIsImxpYi9jb21wb25lbnRzL29uYm9hcmRpbmcvb25ib2FyZGluZy1kZXRhaWwvYm90dG9tLXNoZWV0Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7Ozs7Ozs7OztJQ0dyRixvQ0FBc0c7SUFBbkIsNk1BQWtCO0lBQUMscUJBQ3RHO0lBQUEsaUJBQVc7OztJQWNDLDZCQUNJO0lBQUEsdUJBQWE7SUFDYixtQ0FBNEM7SUFBQSxxQkFBSztJQUFBLGlCQUFXO0lBQzVELFlBQ0o7SUFBQSwwQkFBZTs7O0lBRFgsZUFDSjtJQURJLDhOQUNKOzs7SUFFQSw2QkFDSTtJQUFBLHVCQUFhO0lBQ2IsbUNBQTRDO0lBQUEsMEJBQVU7SUFBQSxpQkFBVztJQUNqRSxZQUNKO0lBQUEsMEJBQWU7OztJQURYLGVBQ0o7SUFESSxrTkFDSjs7O0lBUUEsOEJBRUk7SUFBQSx5QkFBRztJQUFBLFlBQWlCO0lBQUEsaUJBQUk7SUFDNUIsaUJBQUs7Ozs7SUFIbUQsMkNBQTZCO0lBQWpGLHNEQUFpQyxnQ0FBQTtJQUU5QixlQUFpQjtJQUFqQix3Q0FBaUI7OztJQXVDWiw2QkFDSTtJQUFBLDZCQUFpQjtJQUFBLFlBQWU7SUFBQSxpQkFBSTtJQUNwQywwQkFBSTtJQUFBLFlBQ0o7SUFBQSxpQkFBSztJQUNULDBCQUFlOzs7O0lB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c0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIEhvc3RMaXN0ZW5lciwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNYXRCb3R0b21TaGVldCwgTWF0Qm90dG9tU2hlZXRSZWYgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9ib3R0b20tc2hlZXQnO1xuXG5pbXBvcnQgeyBPbmJvYXJkaW5nU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL29uYm9hcmRpbmcuc2VydmljZSc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItb25ib2FyZGluZy1kZXRhaWwnLFxuICB0ZW1wbGF0ZVVybDogJy4vb25ib2FyZGluZy1kZXRhaWwuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9vbmJvYXJkaW5nLWRldGFpbC5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIE9uYm9hcmRpbmdEZXRhaWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBkZXRhaWxWaWV3O1xuICBAT3V0cHV0KCkgb25TaG93TW9kZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4odHJ1ZSk7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgc2VydmljZTogT25ib2FyZGluZ1NlcnZpY2UsIHByaXZhdGUgX2JvdHRvbVNoZWV0OiBNYXRCb3R0b21TaGVldCkgeyB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gIH1cbiAgb3BlbkJvdHRvbVNoZWV0KEF0dGFjaGVtZW50KTogdm9pZCB7XG4gICAgdGhpcy5fYm90dG9tU2hlZXQub3BlbihCb3R0b21TaGVldCwge1xuICAgICAgZGF0YTogQXR0YWNoZW1lbnQgPyBBdHRhY2hlbWVudFswXSA6IHtcbiAgICAgICAgQ29udGVudFR5cGU6IFwiaW1hZ2UvanBlZ1wiLFxuICAgICAgICBDcmVhdGVkQnlJZDogXCIwMDUybzAwMDAwOUZCdnZBQUdcIixcbiAgICAgICAgQ3JlYXRlZERhdGU6IFwiMjAyMi0wNy0wMVQxMzoxMjo1NC40NjdaXCIsXG4gICAgICAgIEV4dGVuc2lvbjogXCJqcGVnXCIsXG4gICAgICAgIElkOiBcIjA2OTFxMDAwMDA2MWN5RkFBUVwiLFxuICAgICAgICBJZENvbnRhY3RfX2M6IFwiMDAzMXEwMDAwMG53c1F5QUFJXCIsXG4gICAgICAgIExhc3RNb2RpZmllZERhdGU6IFwiMjAyMi0wNy0wMVQxMzoxMjo1NC40NjdaXCIsXG4gICAgICAgIE5hbWU6IFwiSG93LVRvLUJlY29tZS1BLUZ1bGwtU3RhY2stSmF2YVNjcmlwdC1EZXZlbG9wZXJcIixcbiAgICAgICAgT3JpZ2luOiBcIldlYlwiLFxuICAgICAgICBQYXJlbnRJZDogXCI1MDAxcTAwMDAwSWlzdVRBQVJcIixcbiAgICAgICAgVXJsOiBcIi9hc3NldHMvNTAwMXEwMDAwMElpc3VUQUFSXzE2NTY2ODExNzIyOTguanBlZ1wiLFxuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIEBIb3N0TGlzdGVuZXIoJ3Njcm9sbCcsIFsnJGV2ZW50J10pXG4gIG9uU2Nyb2xsKGV2ZW50KSB7XG4gICAgY29uc3Qgc2VjdGlvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwic2VjdGlvblwiKTtcbiAgICBjb25zdCBuYXZMaSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZmllbGRzIHVsIGxpXCIpO1xuXG4gICAgbGV0IGN1cnJlbnQgPSBcIlwiO1xuICAgIHNlY3Rpb25zLmZvckVhY2goKHNlY3Rpb24pID0+IHtcbiAgICAgIGNvbnN0IHNlY3Rpb25Ub3AgPSBzZWN0aW9uLm9mZnNldFRvcDtcbiAgICAgIGlmIChldmVudC50YXJnZXQuc2Nyb2xsVG9wID4gc2VjdGlvblRvcCAtIDMwMCkge1xuICAgICAgICBjdXJyZW50ID0gc2VjdGlvbi5nZXRBdHRyaWJ1dGUoXCJpZFwiKVxuICAgICAgfVxuICAgIH0pO1xuICAgIG5hdkxpLmZvckVhY2goKGxpKSA9PiB7XG4gICAgICBjb25zdCBpZCA9IGxpLmdldEF0dHJpYnV0ZSgnaWQnKVxuICAgICAgaWYgKGlkLnN1YnN0cmluZygwLCBpZC5sZW5ndGggLSAxKSA9PT0gY3VycmVudCkge1xuICAgICAgICBsaS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGkuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGNhdE5hbWVTdGFydChzdHI6IHN0cmluZykge1xuICAgIGNvbnN0IHZvd2VscyA9IFsnYScsICdlJywgJ2knLCAnbycsICd1JywgJ3knXTtcbiAgICByZXR1cm4gdm93ZWxzLmluY2x1ZGVzKHN0ci5zdWJzdHIoMCwgMSkudG9Mb2NhbGVMb3dlckNhc2UoKSlcbiAgfVxuICBvbkVkaXQoKSB7XG4gICAgdGhpcy5vblNob3dNb2RlLmVtaXQoZmFsc2UpXG4gIH1cblxuICBwcm9ncmVzcyhjb21wbGV0ZWQsIGxlbmd0aCkge1xuICAgIHJldHVybiAxMDAgKiBjb21wbGV0ZWQgLyBsZW5ndGhcbiAgfVxuXG4gIG9uVmlld1RpY2tldChDYXNlTnVtYmVyKSB7XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW2B0aWNrZXQvJHtDYXNlTnVtYmVyfWBdKVxuICB9XG5cbiAgb25Gb3JtYXREaXNwbGF5VmFsdWUodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUgPT09IHRydWUgPyAnT3VpJyA6IHZhbHVlID09PSBmYWxzZSA/ICdOb24nIDogdmFsdWVcblxuICB9XG5cbn1cblxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdib3R0b20tc2hlZXQnLFxuICB0ZW1wbGF0ZVVybDogJ2JvdHRvbS1zaGVldC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vb25ib2FyZGluZy1kZXRhaWwuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBCb3R0b21TaGVldCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2JvdHRvbVNoZWV0UmVmOiBNYXRCb3R0b21TaGVldFJlZjxCb3R0b21TaGVldD4sIHByaXZhdGUgc2VydmljZTogT25ib2FyZGluZ1NlcnZpY2UpIHsgfVxuICBhdHRhY2ggPSBudWxsO1xuICBmaWxlbmFtZSA9IFwiXCJcbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5hdHRhY2ggPSB0aGlzLl9ib3R0b21TaGVldFJlZi5jb250YWluZXJJbnN0YW5jZS5ib3R0b21TaGVldENvbmZpZy5kYXRhXG4gICAgY29uc3QgdXJscyA9IHRoaXMuYXR0YWNoID8gdGhpcy5hdHRhY2guVXJsLnNwbGl0KFwiL1wiKSA6IFtdXG4gICAgdGhpcy5maWxlbmFtZSA9IHVybHNbdXJscy5sZW5ndGggLSAxXVxuICB9XG5cbiAgY2xvc2UoKTogdm9pZCB7XG4gICAgdGhpcy5fYm90dG9tU2hlZXRSZWYuZGlzbWlzcygpO1xuICB9XG5cbiAgYXN5bmMgb25Eb3dubG9hZEZpbGUoKSB7XG4gICAgaWYgKHRoaXMuYXR0YWNoKSB7XG4gICAgICBhd2FpdCB0aGlzLnNlcnZpY2UuZG93bmxvYWRBdHRhY2htZW50KHRoaXMuYXR0YWNoLlVybCwgdGhpcy5hdHRhY2guQ29udGVudFR5cGUsIHRoaXMuZmlsZW5hbWUpO1xuICAgICAgdGhpcy5fYm90dG9tU2hlZXRSZWYuZGlzbWlzcygpO1xuICAgIH1cbiAgfVxufVxuXG4iLCI8ZGl2IGNsYXNzPVwib25ib2FyZGluZy1kZXRhaWxcIiAqbmdJZj1cImRldGFpbFZpZXdcIj5cbiAgICA8aDEgY2xhc3M9XCJ0aXRsZVwiPlxuICAgICAgICA8cD5JbnTDqWdyYXRpb24gcHJvZmlsIHt7ZGV0YWlsVmlldz8uTmFtZX19PC9wPlxuICAgICAgICA8bWF0LWljb24gKm5nSWY9XCIhZGV0YWlsVmlldy5GaW5pc2hlZFwiIHN0eWxlPVwibWFyZ2luLWxlZnQ6IDIwcHg7IGN1cnNvcjogcG9pbnRlcjtcIiAoY2xpY2spPVwib25FZGl0KClcIj5lZGl0XG4gICAgICAgIDwvbWF0LWljb24+XG4gICAgPC9oMT5cbiAgICA8ZGl2IGNsYXNzPVwidmlldy1jb250ZW50XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJsZWZ0LWNvbnRlbnRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ1c2VyLWluZm9cIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidXNlci1uYW1lXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMj57e2RldGFpbFZpZXcudXNlci5GaXJzdE5hbWUgfX0ge3tkZXRhaWxWaWV3LnVzZXIuTGFzdE5hbWUgfX0gPHNwYW4+YXJyaXbDqSBsZVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+e3tkZXRhaWxWaWV3LmNyZWF0ZWRBdCB8IGRhdGU6J2RkL01NL3l5JyB9fTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImNvbnRhY3RcIj57e2RldGFpbFZpZXc/LnVzZXI/LkFjY291bnROYW1lIH19IDxzcGFuPjwvc3Bhbj4ge3tkZXRhaWxWaWV3Py51c2VyPy5UaXRsZX19PC9wPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiY29udGFjdFwiPlxuICAgICAgICAgICAgICAgICAgICA8bWF0LWljb24gZm9udFNldD1cIm1hdGVyaWFsLWljb25zLW91dGxpbmVkXCI+ZW1haWw8L21hdC1pY29uPnt7ZGV0YWlsVmlldz8udXNlcj8uRW1haWwgfX1cbiAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImRldGFpbFZpZXc/LnVzZXI/Lk1vYmlsZVBob25lPy5pbnRlcm5hdGlvbmFsTnVtYmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bWF0LWljb24gZm9udFNldD1cIm1hdGVyaWFsLWljb25zLW91dGxpbmVkXCI+cGhvbmU8L21hdC1pY29uPlxuICAgICAgICAgICAgICAgICAgICAgICAge3tkZXRhaWxWaWV3Py51c2VyPy5Nb2JpbGVQaG9uZT8uaW50ZXJuYXRpb25hbE51bWJlcn19XG4gICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJkZXRhaWxWaWV3Py51c2VyPy5QaG9uZT8uaW50ZXJuYXRpb25hbE51bWJlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG1hdC1pY29uIGZvbnRTZXQ9XCJtYXRlcmlhbC1pY29ucy1vdXRsaW5lZFwiPnNtYXJ0cGhvbmU8L21hdC1pY29uPlxuICAgICAgICAgICAgICAgICAgICAgICAge3tkZXRhaWxWaWV3Py51c2VyPy5QaG9uZT8uaW50ZXJuYXRpb25hbE51bWJlcn19XG4gICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgICAgICAgICAgICAgPC9wPlxuXG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBpZD1cImZpZWxkc1wiIGNsYXNzPVwiZmllbGRzXCI+XG4gICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICA8bGkgW25neFNjcm9sbFRvXT1cIicjJytjYXRlZ29yeS5uYW1lXCIgY2xhc3M9XCJtZW51LWl0ZW1cIiBbY2xhc3NdPVwiaT09PTAgPyAnYWN0aXZlJzonJ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAqbmdGb3I9XCJsZXQgY2F0ZWdvcnkgb2YgZGV0YWlsVmlldy5jYXRlZ29yaWVzOyAgbGV0IGk9aW5kZXhcIiBbaWRdPVwiY2F0ZWdvcnkubmFtZSsneCdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhPnt7Y2F0ZWdvcnkubmFtZX19PC9hPlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhdGVnb3J5LXZpZXctY29udGFpbmVyXCIgKHNjcm9sbCk9XCJvblNjcm9sbCgkZXZlbnQpXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzPVwiY2F0ZWdvcnktaXRlbVwiICpuZ0Zvcj1cImxldCBjYXRlZ29yeSBvZiBkZXRhaWxWaWV3LmNhdGVnb3JpZXM7ICBsZXQgaT1pbmRleFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBbaWRdPVwiY2F0ZWdvcnkubmFtZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhdGVnb3J5LWl0ZW0taW5uZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2F0ZWdvcnktaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0aXRsZS1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDI+e3tjYXRlZ29yeS5uYW1lfX08L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJjYXRlZ29yeS1kZXNjcmlwdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIExpc3RlcyBkZXMgaW5mb3JtYXRpb25zIG7DqWNlc3NhaXJlcyBwb3VyIGxhIGNyw6lhdGlvbiBkZSB7e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhdE5hbWVTdGFydChjYXRlZ29yeS5uYW1lKSA/IFwibCdcIiArIGNhdGVnb3J5Lm5hbWUgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5Lm5hbWUgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcm9ncmVzcy1zdGF0dXNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0ge3tjYXRlZ29yeT8uZmllbGRDb21wbGV0ZWR9fSAvIHt7Y2F0ZWdvcnk/LmZpZWxkTGVuZ3RofX0gLS0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tIDxkaXYgKm5nSWY9XCJjYXRlZ29yeT8uZmllbGRDb21wbGV0ZWQ9PT1jYXRlZ29yeT8uZmllbGRMZW5ndGhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwic3RhdHVzIGluLXByb2dyZXNzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+RW4gY291cnMgZGUgdHJhaXRlbWVudDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGliLWxvYWRpbmc+PC9saWItbG9hZGluZz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiAtLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gPGRpdiAqbmdJZj1cImNhdGVnb3J5Py5maWVsZENvbXBsZXRlZCA9PT1jYXRlZ29yeT8uZmllbGRMZW5ndGhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwic3RhdHVzIG9uZ29pbmdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT1cIm1hcmdpbi1yaWdodDogMTBweDtcIj5FbiBjb3Vyczwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bWF0LWljb24+Y2hlY2s8L21hdC1pY29uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+IC0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSA8ZGl2ICpuZ0lmPVwiY2F0ZWdvcnk/LmZpZWxkQ29tcGxldGVkIDwgY2F0ZWdvcnk/LmZpZWxkTGVuZ3RoXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInN0YXR1cyBwcm9ncmVzcy1iYXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT1cIndpZHRoOiAzMDBweDtcIj57e3Byb2dyZXNzKGNhdGVnb3J5Py5maWVsZENvbXBsZXRlZCAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5Py5maWVsZExlbmd0aCl9fSUgVGVybWluw6k8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG1hdC1wcm9ncmVzcy1iYXIgbW9kZT1cImRldGVybWluYXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3ZhbHVlXT1cInByb2dyZXNzKGNhdGVnb3J5Py5maWVsZENvbXBsZXRlZCAsIGNhdGVnb3J5Py5maWVsZExlbmd0aClcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L21hdC1wcm9ncmVzcy1iYXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gLS0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXRlZ29yeS1pdGVtLWZvcm1zXCIgKm5nRm9yPVwibGV0IGZvcm1zIG9mIGNhdGVnb3J5LmZvcm1zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhZm9ybXMuZm9ybXNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwibGFiZWxcIj57e2Zvcm1zLmxhYmVsfX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQ+e3tvbkZvcm1hdERpc3BsYXlWYWx1ZShmb3Jtcy52YWx1ZSl9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJmb3Jtcy5mb3Jtc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPnt7Zm9ybXMubGFiZWx9fTwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2F0ZWdvcnktaXRlbS1mb3Jtc1wiICpuZ0Zvcj1cImxldCBzdWIgb2YgZm9ybXMuZm9ybXNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIXN1Yi5mb3Jtc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImxhYmVsXCI+e3tzdWIubGFiZWx9fTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0Pnt7b25Gb3JtYXREaXNwbGF5VmFsdWUoc3ViLnZhbHVlKX19PC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwic3ViLmZvcm1zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz57e3N1Yi5sYWJlbH19PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhdGVnb3J5LWl0ZW0tZm9ybXNcIiAqbmdGb3I9XCJsZXQgY2hpbGQgb2Ygc3ViLmZvcm1zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIWNoaWxkLmZvcm1zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJsYWJlbFwiPnt7Y2hpbGQubGFiZWx9fTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQ+e3tvbkZvcm1hdERpc3BsYXlWYWx1ZShjaGlsZC52YWx1ZSl9fTwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJjaGlsZC5mb3Jtc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz57e2NoaWxkLmxhYmVsfX08L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXRlZ29yeS1pdGVtLWZvcm1zXCIgKm5nRm9yPVwibGV0IGMyIG9mIGNoaWxkLmZvcm1zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwibGFiZWxcIj57e2MyLmxhYmVsfX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoND57e29uRm9ybWF0RGlzcGxheVZhbHVlKGMyLnZhbHVlKX19PC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9XCJoZWlnaHQ6IDQ1MHB4O1wiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJyaWdodC1jb250ZW50XCI+XG4gICAgICAgICAgICA8aDI+VGlja2V0cyBsacOpcyDDoCB2b3RyZSBkZW1hbmRlPC9oMj5cbiAgICAgICAgICAgIDxwIGNsYXNzPVwic3VidGl0bGVcIj5Wb3VzIHJldHJvdXZlcmV6IGljaSB0b3VzIGxlcyB0aWNrZXRzIGNyw6nDqXMgbG9ycyBkZSBsYSBjcsOpYXRpb24gZGUgdm90cmUgZmljaGVcbiAgICAgICAgICAgICAgICBk4oCZaW50w6lncmF0aW9uLjwvcD5cbiAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJkZXRhaWxWaWV3LnRpY2tldHMgJiYgZGV0YWlsVmlldy50aWNrZXRzLmxlbmd0aD4wXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJveC10aWNrZXQtaW5mb1wiICpuZ0Zvcj1cImxldCB0aWNrZXQgb2YgZGV0YWlsVmlldy50aWNrZXRzXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkLWZsZXgtcm93IGJveC1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gbWF0LWJ1dHRvbiBjbGFzcz1cImQtZmxleC1yb3dcIiBzdHlsZT1cImNvbG9yOiAjNTc1RjZFO3BhZGRpbmctbGVmdDogMDtcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJvblZpZXdUaWNrZXQodGlja2V0LkNhc2VOdW1iZXIpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG1hdC1pY29uIGZvbnRTZXQ9XCJtYXRlcmlhbC1pY29ucy1vdXRsaW5lZFwiPmxpc3RfYWx0PC9tYXQtaWNvbj48c3BhblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT1cImZvbnQtd2VpZ2h0OiA0MDA7XCI+VGlja2V0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7dGlja2V0LkNhc2VOdW1iZXJ9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBtYXQtYnV0dG9uIGNsYXNzPVwicHJvZ3Jlc3NcIj57e3RpY2tldC5TdGF0dXN9fTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJkYXRlXCI+e3t0aWNrZXQuQ3JlYXRlZERhdGUgfCBkYXRlIDonZGQvTU0veXknfX08L3A+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJib3gtaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDM+e3t0aWNrZXQuU3ViamVjdH19PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwhLS0gPGJ1dHRvbiAqbmdJZj1cInRpY2tldC5BdHRhY2htZW50cyAmJiB0aWNrZXQuQXR0YWNobWVudHMubGVuZ3RoPjBcIiBtYXQtYnV0dG9uIGNsYXNzPVwiZG93bmxvYWQtdGlja2V0XCIgLS0+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gbWF0LWJ1dHRvbiBjbGFzcz1cImRvd25sb2FkLXRpY2tldFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwib3BlbkJvdHRvbVNoZWV0KHRpY2tldD8uQXR0YWNobWVudHMpXCI+VMOpbMOpY2hhcmdlclxuICAgICAgICAgICAgICAgICAgICAgICAgbGVcbiAgICAgICAgICAgICAgICAgICAgICAgIFBERlxuICAgICAgICAgICAgICAgICAgICAgICAgcsOpY2FwaXR1bGF0aWY8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJveC10aWNrZXQtaW5mb1wiICpuZ0lmPVwiIWRldGFpbFZpZXcudGlja2V0c1wiPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiZGVzY3JpcHRpb25cIj5cIkF1Y3VuIHRpY2tldHNcIjwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbjwvZGl2PiIsIjxkaXYgY2xhc3M9XCJzaGVldC1jb250ZW50XCI+XHJcbiAgPGgzPnt7ZmlsZW5hbWV9fTwvaDM+XHJcbiAgPGJ1dHRvbiBjbGFzcz1cImRvd25sb2FkLWJ1dHRvblwiIG1hdC1idXR0b24gKGNsaWNrKT1cIm9uRG93bmxvYWRGaWxlKClcIj5Uw6lsw6ljaGFyZ2VyIGxlIFBERiByw6ljYXBpdHVsYXRpZjwvYnV0dG9uPlxyXG4gIDxidXR0b24gY2xhc3M9XCJjbG9zZS1idXR0b25cIiBtYXQtYnV0dG9uIChjbGljayk9XCJjbG9zZSgpXCI+RmVybWVyPC9idXR0b24+XHJcbjwvZGl2PiJdfQ==