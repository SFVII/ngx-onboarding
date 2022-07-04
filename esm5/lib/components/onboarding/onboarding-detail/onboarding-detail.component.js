import { __awaiter, __generator } from "tslib";
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
    var _r996 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-icon", 20);
    i0.ɵɵlistener("click", function OnboardingDetailComponent_div_0_mat_icon_4_Template_mat_icon_click_0_listener() { i0.ɵɵrestoreView(_r996); var ctx_r995 = i0.ɵɵnextContext(2); return ctx_r995.onEdit(); });
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
    var ctx_r989 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1(" ", ctx_r989.detailView == null ? null : ctx_r989.detailView.user == null ? null : ctx_r989.detailView.user.MobilePhone == null ? null : ctx_r989.detailView.user.MobilePhone.internationalNumber, " ");
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
    var ctx_r990 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1(" ", ctx_r990.detailView == null ? null : ctx_r990.detailView.user == null ? null : ctx_r990.detailView.user.Phone == null ? null : ctx_r990.detailView.user.Phone.internationalNumber, " ");
} }
function OnboardingDetailComponent_div_0_li_28_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li", 21);
    i0.ɵɵelementStart(1, "a");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var category_r997 = ctx.$implicit;
    var i_r998 = ctx.index;
    i0.ɵɵclassMap(i_r998 === 0 ? "active" : "");
    i0.ɵɵproperty("ngxScrollTo", "#" + category_r997.name)("id", category_r997.name + "x");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(category_r997.name);
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
    var forms_r1002 = i0.ɵɵnextContext().$implicit;
    var ctx_r1003 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(forms_r1002.label);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", ctx_r1003.onFormatDisplayValue(forms_r1002.value), " ");
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
    var sub_r1007 = i0.ɵɵnextContext().$implicit;
    var ctx_r1008 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(sub_r1007.label);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1008.onFormatDisplayValue(sub_r1007.value));
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
    var child_r1012 = i0.ɵɵnextContext().$implicit;
    var ctx_r1013 = i0.ɵɵnextContext(7);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(child_r1012.label);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1013.onFormatDisplayValue(child_r1012.value));
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
    var c2_r1017 = ctx.$implicit;
    var ctx_r1016 = i0.ɵɵnextContext(9);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(c2_r1017.label);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1016.onFormatDisplayValue(c2_r1017.value));
} }
function OnboardingDetailComponent_div_0_section_30_div_9_ng_container_2_div_3_ng_container_2_div_3_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "h3");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, OnboardingDetailComponent_div_0_section_30_div_9_ng_container_2_div_3_ng_container_2_div_3_ng_container_2_div_3_Template, 5, 2, "div", 28);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var child_r1012 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(child_r1012.label);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", child_r1012.forms);
} }
function OnboardingDetailComponent_div_0_section_30_div_9_ng_container_2_div_3_ng_container_2_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 29);
    i0.ɵɵtemplate(1, OnboardingDetailComponent_div_0_section_30_div_9_ng_container_2_div_3_ng_container_2_div_3_ng_container_1_Template, 5, 2, "ng-container", 10);
    i0.ɵɵtemplate(2, OnboardingDetailComponent_div_0_section_30_div_9_ng_container_2_div_3_ng_container_2_div_3_ng_container_2_Template, 4, 2, "ng-container", 10);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var child_r1012 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !child_r1012.forms);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", child_r1012.forms);
} }
function OnboardingDetailComponent_div_0_section_30_div_9_ng_container_2_div_3_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "h3");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, OnboardingDetailComponent_div_0_section_30_div_9_ng_container_2_div_3_ng_container_2_div_3_Template, 3, 2, "div", 28);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var sub_r1007 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(sub_r1007.label);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", sub_r1007.forms);
} }
function OnboardingDetailComponent_div_0_section_30_div_9_ng_container_2_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 29);
    i0.ɵɵtemplate(1, OnboardingDetailComponent_div_0_section_30_div_9_ng_container_2_div_3_ng_container_1_Template, 5, 2, "ng-container", 10);
    i0.ɵɵtemplate(2, OnboardingDetailComponent_div_0_section_30_div_9_ng_container_2_div_3_ng_container_2_Template, 4, 2, "ng-container", 10);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var sub_r1007 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !sub_r1007.forms);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", sub_r1007.forms);
} }
function OnboardingDetailComponent_div_0_section_30_div_9_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "h3");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, OnboardingDetailComponent_div_0_section_30_div_9_ng_container_2_div_3_Template, 3, 2, "div", 28);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var forms_r1002 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(forms_r1002.label);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", forms_r1002.forms);
} }
function OnboardingDetailComponent_div_0_section_30_div_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 29);
    i0.ɵɵtemplate(1, OnboardingDetailComponent_div_0_section_30_div_9_ng_container_1_Template, 5, 2, "ng-container", 10);
    i0.ɵɵtemplate(2, OnboardingDetailComponent_div_0_section_30_div_9_ng_container_2_Template, 4, 2, "ng-container", 10);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var forms_r1002 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !forms_r1002.forms);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", forms_r1002.forms);
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
    var category_r999 = ctx.$implicit;
    var ctx_r992 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("id", category_r999.name);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(category_r999.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" Listes des informations n\u00E9cessaires pour la cr\u00E9ation de ", ctx_r992.catNameStart(category_r999.name) ? "l'" + category_r999.name : category_r999.name, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", category_r999.forms);
} }
function OnboardingDetailComponent_div_0_ng_container_38_div_1_Template(rf, ctx) { if (rf & 1) {
    var _r1024 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 32);
    i0.ɵɵelementStart(1, "div", 33);
    i0.ɵɵelementStart(2, "button", 34);
    i0.ɵɵlistener("click", function OnboardingDetailComponent_div_0_ng_container_38_div_1_Template_button_click_2_listener() { i0.ɵɵrestoreView(_r1024); var ticket_r1022 = ctx.$implicit; var ctx_r1023 = i0.ɵɵnextContext(3); return ctx_r1023.onViewTicket(ticket_r1022.CaseNumber); });
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
    i0.ɵɵlistener("click", function OnboardingDetailComponent_div_0_ng_container_38_div_1_Template_button_click_15_listener() { i0.ɵɵrestoreView(_r1024); var ticket_r1022 = ctx.$implicit; var ctx_r1025 = i0.ɵɵnextContext(3); return ctx_r1025.openBottomSheet(ticket_r1022 == null ? null : ticket_r1022.Attachments); });
    i0.ɵɵtext(16, "T\u00E9l\u00E9charger le PDF r\u00E9capitulatif");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ticket_r1022 = ctx.$implicit;
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate1("Ticket ", ticket_r1022.CaseNumber, "");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ticket_r1022.Status);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(11, 4, ticket_r1022.CreatedDate, "dd/MM/yy"));
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ticket_r1022.Subject);
} }
function OnboardingDetailComponent_div_0_ng_container_38_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, OnboardingDetailComponent_div_0_ng_container_38_div_1_Template, 17, 7, "div", 31);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r993 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r993.detailView.tickets);
} }
function OnboardingDetailComponent_div_0_div_39_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 32);
    i0.ɵɵelementStart(1, "p", 40);
    i0.ɵɵtext(2, "\"Aucun tickets\"");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
function OnboardingDetailComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    var _r1027 = i0.ɵɵgetCurrentView();
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
    i0.ɵɵlistener("scroll", function OnboardingDetailComponent_div_0_Template_div_scroll_29_listener($event) { i0.ɵɵrestoreView(_r1027); var ctx_r1026 = i0.ɵɵnextContext(); return ctx_r1026.onScroll($event); });
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
    var ctx_r987 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("Int\u00E9gration profil ", ctx_r987.detailView == null ? null : ctx_r987.detailView.Name, "");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r987.detailView.Finished);
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate2("", ctx_r987.detailView.user.FirstName, " ", ctx_r987.detailView.user.LastName, " ");
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(15, 14, ctx_r987.detailView.createdAt, "dd/MM/yy"));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("", ctx_r987.detailView == null ? null : ctx_r987.detailView.user == null ? null : ctx_r987.detailView.user.AccountName, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r987.detailView == null ? null : ctx_r987.detailView.user == null ? null : ctx_r987.detailView.user.Title, "");
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1("", ctx_r987.detailView == null ? null : ctx_r987.detailView.user == null ? null : ctx_r987.detailView.user.Email, " ");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r987.detailView == null ? null : ctx_r987.detailView.user == null ? null : ctx_r987.detailView.user.MobilePhone == null ? null : ctx_r987.detailView.user.MobilePhone.internationalNumber);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r987.detailView == null ? null : ctx_r987.detailView.user == null ? null : ctx_r987.detailView.user.Phone == null ? null : ctx_r987.detailView.user.Phone.internationalNumber);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", ctx_r987.detailView.categories);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r987.detailView.categories);
    i0.ɵɵadvance(8);
    i0.ɵɵproperty("ngIf", ctx_r987.detailView.tickets && ctx_r987.detailView.tickets.length > 0);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r987.detailView.tickets);
} }
var OnboardingDetailComponent = /** @class */ (function () {
    function OnboardingDetailComponent(router, service, _bottomSheet) {
        this.router = router;
        this.service = service;
        this._bottomSheet = _bottomSheet;
        this.onShowMode = new EventEmitter(true);
    }
    OnboardingDetailComponent.prototype.ngOnInit = function () {
    };
    OnboardingDetailComponent.prototype.openBottomSheet = function (Attachement) {
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
    };
    OnboardingDetailComponent.prototype.onScroll = function (event) {
        var sections = document.querySelectorAll("section");
        var navLi = document.querySelectorAll(".fields ul li");
        var current = "";
        sections.forEach(function (section) {
            var sectionTop = section.offsetTop;
            if (event.target.scrollTop > sectionTop - 300) {
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
    OnboardingDetailComponent.prototype.catNameStart = function (str) {
        var vowels = ['a', 'e', 'i', 'o', 'u', 'y'];
        return vowels.includes(str.substr(0, 1).toLocaleLowerCase());
    };
    OnboardingDetailComponent.prototype.onEdit = function () {
        this.onShowMode.emit(false);
    };
    OnboardingDetailComponent.prototype.progress = function (completed, length) {
        return 100 * completed / length;
    };
    OnboardingDetailComponent.prototype.onViewTicket = function (CaseNumber) {
        this.router.navigate(["ticket/" + CaseNumber]);
    };
    OnboardingDetailComponent.prototype.onFormatDisplayValue = function (value) {
        return value === true ? 'Oui' : value === false ? 'Non' : value;
    };
    OnboardingDetailComponent.ɵfac = function OnboardingDetailComponent_Factory(t) { return new (t || OnboardingDetailComponent)(i0.ɵɵdirectiveInject(i1.Router), i0.ɵɵdirectiveInject(i2.OnboardingService), i0.ɵɵdirectiveInject(i3.MatBottomSheet)); };
    OnboardingDetailComponent.ɵcmp = i0.ɵɵdefineComponent({ type: OnboardingDetailComponent, selectors: [["lib-onboarding-detail"]], hostBindings: function OnboardingDetailComponent_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("scroll", function OnboardingDetailComponent_scroll_HostBindingHandler($event) { return ctx.onScroll($event); });
        } }, inputs: { detailView: "detailView" }, outputs: { onShowMode: "onShowMode" }, decls: 1, vars: 1, consts: [["class", "onboarding-detail", 4, "ngIf"], [1, "onboarding-detail"], [1, "title"], ["style", "margin-left: 20px; cursor: pointer;", 3, "click", 4, "ngIf"], [1, "view-content"], [1, "left-content"], [1, "user-info"], [1, "user-name"], [1, "contact"], ["fontSet", "material-icons-outlined"], [4, "ngIf"], ["id", "fields", 1, "fields"], ["class", "menu-item", 3, "ngxScrollTo", "class", "id", 4, "ngFor", "ngForOf"], [1, "category-view-container", 3, "scroll"], ["class", "category-item", 3, "id", 4, "ngFor", "ngForOf"], [2, "background-color", "transparent"], [2, "height", "450px"], [1, "right-content"], [1, "subtitle"], ["class", "box-ticket-info", 4, "ngIf"], [2, "margin-left", "20px", "cursor", "pointer", 3, "click"], [1, "menu-item", 3, "ngxScrollTo", "id"], [1, "category-item", 3, "id"], [1, "category-item-inner"], [1, "category-header"], [1, "title-content"], [1, "category-description"], [1, "progress-status"], ["class", "category-item-forms", 4, "ngFor", "ngForOf"], [1, "category-item-forms"], [1, "label"], ["class", "box-ticket-info", 4, "ngFor", "ngForOf"], [1, "box-ticket-info"], [1, "d-flex-row", "box-header"], ["mat-button", "", 1, "d-flex-row", 2, "color", "#575F6E", "padding-left", "0", 3, "click"], [2, "font-weight", "400"], ["mat-button", "", 1, "progress"], [1, "date"], [1, "box-header"], ["mat-button", "", 1, "download-ticket", 3, "click"], [1, "description"]], template: function OnboardingDetailComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, OnboardingDetailComponent_div_0_Template, 40, 17, "div", 0);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.detailView);
        } }, directives: [i4.NgIf, i5.MatIcon, i4.NgForOf, i6.ScrollToDirective, i7.MatButton], pipes: [i4.DatePipe], styles: [".onboarding-detail[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .onboarding-detail[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .onboarding-detail[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .onboarding-detail[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], .onboarding-detail[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%], .onboarding-detail[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]{margin:0;font-family:Nexa;font-style:normal;font-weight:700;line-height:110%;display:flex;align-items:center;color:#242731}.onboarding-detail[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0}.onboarding-detail[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:24px}.onboarding-detail[_ngcontent-%COMP%]   h1.title[_ngcontent-%COMP%]{margin-bottom:33px;margin-top:10px}.onboarding-detail[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:20px}.onboarding-detail[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:18px}.onboarding-detail[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-size:16px}.onboarding-detail[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{font-size:14px}.onboarding-detail[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]{font-size:12px}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-between;background-color:#f4f7f9}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]{width:70%;border-radius:6px;margin-right:2%}@media (max-width:1200px){.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]{width:50%}}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]{background:0 0;border-radius:6px;padding:10px 10px 10px 0}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]::before{content:\".\";font-size:25px;margin:0 10px}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-weight:400;display:flex;align-items:center}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{padding-right:5px}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   p.contact[_ngcontent-%COMP%]{margin-top:10px}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .user-name[_ngcontent-%COMP%]{line-height:30px}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .user-name[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-weight:400;font-size:12px;margin-right:10px}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .user-contact[_ngcontent-%COMP%]{line-height:30px}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]{background:#fff;border-radius:8px;padding:15px;margin-bottom:30px}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   .category-item-inner[_ngcontent-%COMP%]   .category-description[_ngcontent-%COMP%]{font-family:Nexa;font-style:normal;font-weight:250;font-size:14px;line-height:16px;color:#575f6e;margin-top:5px}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   .category-item-inner[_ngcontent-%COMP%]   .category-item-forms[_ngcontent-%COMP%]{margin-top:20px}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   .category-item-inner[_ngcontent-%COMP%]   .category-item-forms[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]{font-family:Nexa;font-style:normal;font-weight:250;font-size:12px;line-height:16px;display:flex;align-items:center;color:#575f6e}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .right-content[_ngcontent-%COMP%]{background-color:#fff;border-radius:6px;padding:15px;overflow:auto;max-height:85.5vh;margin-right:20px}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .right-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#575f6e}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .right-content[_ngcontent-%COMP%]   .box-ticket-info[_ngcontent-%COMP%]{padding-bottom:20px;padding-top:20px;border-bottom:2px solid #e2e4e5}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .right-content[_ngcontent-%COMP%]   .box-ticket-info[_ngcontent-%COMP%]   .box-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .right-content[_ngcontent-%COMP%]   .box-ticket-info[_ngcontent-%COMP%]   .box-header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{min-width:auto;height:36px;border-radius:4px;font-family:Nexa;font-weight:500;font-size:16px;display:flex;align-items:center;text-transform:capitalize;color:#fff}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .right-content[_ngcontent-%COMP%]   .box-ticket-info[_ngcontent-%COMP%]   .box-header[_ngcontent-%COMP%]   .finished[_ngcontent-%COMP%]{background:#6fe8d7}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .right-content[_ngcontent-%COMP%]   .box-ticket-info[_ngcontent-%COMP%]   .box-header[_ngcontent-%COMP%]   .progress[_ngcontent-%COMP%]{background:#f3a124}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .right-content[_ngcontent-%COMP%]   .box-ticket-info[_ngcontent-%COMP%]   .download-ticket[_ngcontent-%COMP%]{margin-top:20px;background-color:#fff;border:1px solid #171f26}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .category-view-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;max-height:70vh;overflow:auto}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .category-view-container[_ngcontent-%COMP%]::-webkit-scrollbar, .onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .right-content[_ngcontent-%COMP%]::-webkit-scrollbar{display:none}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .category-view-container[_ngcontent-%COMP%], .onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .right-content[_ngcontent-%COMP%]{-ms-overflow-style:none;scrollbar-width:none}.fields[_ngcontent-%COMP%]{height:84%}.fields[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style:none;display:flex;margin:33px 0;padding:0;overflow:auto}.fields[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin-right:20px;padding-bottom:5px;border-bottom:3px solid transparent}.fields[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none;font-family:Nexa;font-style:normal;font-weight:700;font-size:14px;line-height:120%;color:#171f26;opacity:.5;overflow:hidden;display:-webkit-box;-webkit-line-clamp:1;-webkit-box-orient:vertical}.fields[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.menu-item.active[_ngcontent-%COMP%], .fields[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.menu-item[_ngcontent-%COMP%]:hover{cursor:pointer;border-bottom:3px solid #3c4252}.fields[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.menu-item.active[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .fields[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.menu-item[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%]{font-family:Nexa;font-style:normal;font-weight:700;font-size:14px;line-height:120%;opacity:1;text-decoration:none!important}.progress-status[_ngcontent-%COMP%]   .status[_ngcontent-%COMP%]{display:flex;align-items:center}.progress-status[_ngcontent-%COMP%]   .ongoing[_ngcontent-%COMP%]{color:#6fe8d7}.progress-status[_ngcontent-%COMP%]   .in-progress[_ngcontent-%COMP%]{padding-right:25px;color:#f3a124;font-weight:500;font-size:16px}  .progress-status{font-size:16px}  .progress-status .mat-progress-bar{display:block;height:20px;overflow:hidden;border-radius:50px;position:relative;transition:opacity 250ms linear;width:100%}  .progress-status .mat-progress-bar-fill::after{background-color:#6fe8d7}  .progress-status .mat-progress-bar-buffer{background-color:#ecf3f7}.category-header[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between}.d-flex-row[_ngcontent-%COMP%]{display:flex;align-items:center}.d-flex-row[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin-right:5px}  mat-bottom-sheet-container{width:100vw;max-width:100vw!important;height:150px;background:#f4f7f9!important;display:flex!important;flex-direction:column;justify-content:center}  mat-bottom-sheet-container .sheet-content{display:flex;align-items:center;justify-content:center}  mat-bottom-sheet-container h3{font-family:Nexa;font-style:normal;font-weight:700;font-size:20px;line-height:100%;color:#171f26;margin-bottom:0!important}  mat-bottom-sheet-container button.download-button{width:277px;height:48px;background:#171f26;box-shadow:0 0 0 rgba(0,0,0,.2);border-radius:7px;color:#fff;margin:0 25px}  mat-bottom-sheet-container button.close-button{height:48px;background:#fff;box-shadow:0 0 0 rgba(0,0,0,.2);border-radius:7px;color:#171f26;border:1px solid #171f26}"] });
    return OnboardingDetailComponent;
}());
export { OnboardingDetailComponent };
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
var BottomSheet = /** @class */ (function () {
    function BottomSheet(_bottomSheetRef, service) {
        this._bottomSheetRef = _bottomSheetRef;
        this.service = service;
        this.attach = null;
        this.filename = "";
    }
    BottomSheet.prototype.ngOnInit = function () {
        this.attach = this._bottomSheetRef.containerInstance.bottomSheetConfig.data;
        var urls = this.attach ? this.attach.Url.split("/") : [];
        this.filename = urls[urls.length - 1];
    };
    BottomSheet.prototype.close = function () {
        this._bottomSheetRef.dismiss();
    };
    BottomSheet.prototype.onDownloadFile = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.attach) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.service.downloadAttachment(this.attach.Url, this.attach.ContentType, this.filename)];
                    case 1:
                        _a.sent();
                        this._bottomSheetRef.dismiss();
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
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
    return BottomSheet;
}());
export { BottomSheet };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(BottomSheet, [{
        type: Component,
        args: [{
                selector: 'bottom-sheet',
                templateUrl: 'bottom-sheet.html',
                styleUrls: ['./onboarding-detail.component.scss']
            }]
    }], function () { return [{ type: i3.MatBottomSheetRef }, { type: i2.OnboardingService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib25ib2FyZGluZy1kZXRhaWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vb25ib2FyZGluZy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL29uYm9hcmRpbmcvb25ib2FyZGluZy1kZXRhaWwvb25ib2FyZGluZy1kZXRhaWwuY29tcG9uZW50LnRzIiwibGliL2NvbXBvbmVudHMvb25ib2FyZGluZy9vbmJvYXJkaW5nLWRldGFpbC9vbmJvYXJkaW5nLWRldGFpbC5jb21wb25lbnQuaHRtbCIsImxpYi9jb21wb25lbnRzL29uYm9hcmRpbmcvb25ib2FyZGluZy1kZXRhaWwvYm90dG9tLXNoZWV0Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7Ozs7Ozs7OztJQ0dyRixvQ0FBc0c7SUFBbkIsMk1BQWtCO0lBQUMscUJBQ3RHO0lBQUEsaUJBQVc7OztJQWNDLDZCQUNJO0lBQUEsdUJBQWE7SUFDYixtQ0FBNEM7SUFBQSxxQkFBSztJQUFBLGlCQUFXO0lBQzVELFlBQ0o7SUFBQSwwQkFBZTs7O0lBRFgsZUFDSjtJQURJLDhOQUNKOzs7SUFFQSw2QkFDSTtJQUFBLHVCQUFhO0lBQ2IsbUNBQTRDO0lBQUEsMEJBQVU7SUFBQSxpQkFBVztJQUNqRSxZQUNKO0lBQUEsMEJBQWU7OztJQURYLGVBQ0o7SUFESSxrTkFDSjs7O0lBUUEsOEJBRUk7SUFBQSx5QkFBRztJQUFBLFlBQWlCO0lBQUEsaUJBQUk7SUFDNUIsaUJBQUs7Ozs7SUFIbUQsMkNBQTZCO0lBQWpGLHNEQUFpQyxnQ0FBQTtJQUU5QixlQUFpQjtJQUFqQix3Q0FBaUI7OztJQXVDWiw2QkFDSTtJQUFBLDZCQUFpQjtJQUFBLFlBQWU7SUFBQSxpQkFBSTtJQUNwQywwQkFBSTtJQUFBLFlBQ0o7SUFBQSxpQkFBSztJQUNULDBCQUFlOzs7O0lBSE0sZUFBZTtJQUFmLHVDQUFlO0lBQzVCLGVBQ0o7SUFESSxpRkFDSjs7O0lBS0ksNkJBQ0k7SUFBQSw2QkFBaUI7SUFBQSxZQUFhO0lBQUEsaUJBQUk7SUFDbEMsMEJBQUk7SUFBQSxZQUFtQztJQUFBLGlCQUFLO0lBQ2hELDBCQUFlOzs7O0lBRk0sZUFBYTtJQUFiLHFDQUFhO0lBQzFCLGVBQW1DO0lBQW5DLHFFQUFtQzs7O0lBS25DLDZCQUNJO0lBQUEsNkJBQWlCO0lBQUEsWUFBZTtJQUFBLGlCQUFJO0lBQ3BDLDBCQUFJO0lBQUEsWUFBcUM7SUFBQSxpQkFBSztJQUNsRCwwQkFBZTs7OztJQUZNLGVBQWU7SUFBZix1Q0FBZTtJQUM1QixlQUFxQztJQUFyQyx1RUFBcUM7OztJQUl6QywrQkFDSTtJQUFBLDZCQUFpQjtJQUFBLFlBQVk7SUFBQSxpQkFBSTtJQUNqQywwQkFBSTtJQUFBLFlBQWtDO0lBQUEsaUJBQUs7SUFDL0MsaUJBQU07Ozs7SUFGZSxlQUFZO0lBQVosb0NBQVk7SUFDekIsZUFBa0M7SUFBbEMsb0VBQWtDOzs7SUFKOUMsNkJBQ0k7SUFBQSwwQkFBSTtJQUFBLFlBQWU7SUFBQSxpQkFBSztJQUN4QiwySkFDSTtJQUdSLDBCQUFlOzs7SUFMUCxlQUFlO0lBQWYsdUNBQWU7SUFDYyxlQUE4QjtJQUE5QiwyQ0FBOEI7OztJQVB2RSwrQkFDSTtJQUFBLDhKQUNJO0lBR0osOEpBQ0k7SUFNUixpQkFBTTs7O0lBWFksZUFBb0I7SUFBcEIseUNBQW9CO0lBSXBCLGVBQW1CO0lBQW5CLHdDQUFtQjs7O0lBUHpDLDZCQUNJO0lBQUEsMEJBQUk7SUFBQSxZQUFhO0lBQUEsaUJBQUs7SUFDdEIsc0lBQ0k7SUFZUiwwQkFBZTs7O0lBZFAsZUFBYTtJQUFiLHFDQUFhO0lBQ2dCLGVBQStCO0lBQS9CLHlDQUErQjs7O0lBUHhFLCtCQUNJO0lBQUEseUlBQ0k7SUFHSix5SUFDSTtJQWVSLGlCQUFNOzs7SUFwQlksZUFBa0I7SUFBbEIsdUNBQWtCO0lBSWxCLGVBQWlCO0lBQWpCLHNDQUFpQjs7O0lBUHZDLDZCQUNJO0lBQUEsMEJBQUk7SUFBQSxZQUFlO0lBQUEsaUJBQUs7SUFDeEIsaUhBQ0k7SUFxQlIsMEJBQWU7OztJQXZCUCxlQUFlO0lBQWYsdUNBQWU7SUFDYyxlQUErQjtJQUEvQiwyQ0FBK0I7OztJQVJ4RSwrQkFDSTtJQUFBLG9IQUNJO0lBSUosb0hBQ0k7SUF3QlIsaUJBQU07OztJQTlCWSxlQUFvQjtJQUFwQix5Q0FBb0I7SUFLcEIsZUFBbUI7SUFBbkIsd0NBQW1COzs7SUF4QzdDLG1DQUVJO0lBQUEsK0JBQ0k7SUFBQSwrQkFDSTtJQUFBLCtCQUNJO0lBQUEsMEJBQUk7SUFBQSxZQUFpQjtJQUFBLGlCQUFLO0lBQzFCLDZCQUNJO0lBQUEsWUFHSjtJQUFBLGlCQUFJO0lBQ1IsaUJBQU07SUFDTiwwQkFvQk07SUFDVixpQkFBTTtJQUNOLDRGQUNJO0lBK0JSLGlCQUFNO0lBQ1YsaUJBQVU7Ozs7SUFsRU4sdUNBQW9CO0lBSUosZUFBaUI7SUFBakIsd0NBQWlCO0lBRWpCLGVBR0o7SUFISSw2TEFHSjtJQXdCeUIsZUFBb0M7SUFBcEMsNkNBQW9DOzs7O0lBNkNqRiwrQkFDSTtJQUFBLCtCQUNJO0lBQUEsa0NBRUk7SUFEQSxzUkFBeUM7SUFDekMsbUNBQTRDO0lBQUEsd0JBQVE7SUFBQSxpQkFBVztJQUFBLGdDQUNqQztJQUFBLFlBQ0w7SUFBQSxpQkFBTztJQUNwQyxpQkFBUztJQUNULGtDQUFvQztJQUFBLFlBQWlCO0lBQUEsaUJBQVM7SUFDbEUsaUJBQU07SUFDTiw2QkFBZ0I7SUFBQSxhQUF5Qzs7SUFBQSxpQkFBSTtJQUM3RCxnQ0FDSTtJQUFBLDJCQUFJO0lBQUEsYUFBa0I7SUFBQSxpQkFBSztJQUMvQixpQkFBTTtJQUVOLG1DQUNtRDtJQUEvQyx5VEFBOEM7SUFBQyxnRUFHbEM7SUFBQSxpQkFBUztJQUM5QixpQkFBTTs7O0lBZm9DLGVBQ0w7SUFESyw2REFDTDtJQUVPLGVBQWlCO0lBQWpCLHlDQUFpQjtJQUV6QyxlQUF5QztJQUF6QyxpRkFBeUM7SUFFakQsZUFBa0I7SUFBbEIsMENBQWtCOzs7SUFibEMsNkJBQ0k7SUFBQSxrR0FDSTtJQW9CUiwwQkFBZTs7O0lBckJrQixlQUF5QztJQUF6QyxxREFBeUM7OztJQXNCMUUsK0JBQ0k7SUFBQSw2QkFBdUI7SUFBQSxpQ0FBZTtJQUFBLGlCQUFJO0lBQzlDLGlCQUFNOzs7O0lBakpsQiw4QkFDSTtJQUFBLDZCQUNJO0lBQUEseUJBQUc7SUFBQSxZQUF1QztJQUFBLGlCQUFJO0lBQzlDLDBGQUFzRztJQUUxRyxpQkFBSztJQUNMLDhCQUNJO0lBQUEsOEJBQ0k7SUFBQSw4QkFDSTtJQUFBLDhCQUNJO0lBQUEsMEJBQUk7SUFBQSxhQUE2RDtJQUFBLDZCQUFNO0lBQUEsZ0NBQ25FO0lBQUEsaUJBQU87SUFDUCwwQkFBRztJQUFBLGFBQTJDOztJQUFBLGlCQUFJO0lBQ3RELGlCQUFLO0lBQ1QsaUJBQU07SUFDTiw2QkFBbUI7SUFBQSxhQUFtQztJQUFBLHdCQUFhO0lBQUMsYUFBMkI7SUFBQSxpQkFBSTtJQUNuRyw2QkFDSTtJQUFBLG9DQUE0QztJQUFBLHNCQUFLO0lBQUEsaUJBQVc7SUFBQSxhQUM1RDtJQUFBLHFHQUNJO0lBS0oscUdBQ0k7SUFLUixpQkFBSTtJQUVSLGlCQUFNO0lBRU4sZ0NBQ0k7SUFBQSwyQkFDSTtJQUFBLGlGQUVJO0lBRVIsaUJBQUs7SUFDTCxnQ0FDSTtJQURpQyw4TUFBMkI7SUFDNUQsNEZBRUk7SUFrRUosb0NBQ0k7SUFBQSwyQkFBa0M7SUFDdEMsaUJBQVU7SUFDZCxpQkFBTTtJQUNWLGlCQUFNO0lBQ1YsaUJBQU07SUFDTixnQ0FDSTtJQUFBLDJCQUFJO0lBQUEsdURBQTRCO0lBQUEsaUJBQUs7SUFDckMsOEJBQW9CO0lBQUEsdUlBQ0Y7SUFBQSxpQkFBSTtJQUN0QixxR0FDSTtJQXNCSixtRkFDSTtJQUVSLGlCQUFNO0lBQ1YsaUJBQU07SUFDVixpQkFBTTs7O0lBbEpLLGVBQXVDO0lBQXZDLG9IQUF1QztJQUNoQyxlQUE0QjtJQUE1QixvREFBNEI7SUFPdEIsZUFBNkQ7SUFBN0QsMEdBQTZEO0lBRTFELGVBQTJDO0lBQTNDLHVGQUEyQztJQUduQyxlQUFtQztJQUFuQyxtSkFBbUM7SUFBYyxlQUEyQjtJQUEzQiw2SUFBMkI7SUFFL0IsZUFDNUQ7SUFENEQsNklBQzVEO0lBQWMsZUFBMEQ7SUFBMUQsb05BQTBEO0lBTTFELGVBQW9EO0lBQXBELHdNQUFvRDtJQWE5RCxlQUE0RDtJQUE1RCx3REFBNEQ7SUFLakMsZUFBNEQ7SUFBNUQsd0RBQTREO0lBOEVyRixlQUF5RDtJQUF6RCw0RkFBeUQ7SUF1QjFDLGVBQTJCO0lBQTNCLG1EQUEyQjs7QUR6SXBFO0lBUUUsbUNBQW9CLE1BQWMsRUFBVSxPQUEwQixFQUFVLFlBQTRCO1FBQXhGLFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVSxZQUFPLEdBQVAsT0FBTyxDQUFtQjtRQUFVLGlCQUFZLEdBQVosWUFBWSxDQUFnQjtRQURsRyxlQUFVLEdBQUcsSUFBSSxZQUFZLENBQVUsSUFBSSxDQUFDLENBQUM7SUFDeUQsQ0FBQztJQUVqSCw0Q0FBUSxHQUFSO0lBQ0EsQ0FBQztJQUNELG1EQUFlLEdBQWYsVUFBZ0IsV0FBVztRQUN6QixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDbEMsSUFBSSxFQUFFLFdBQVcsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDbkMsV0FBVyxFQUFFLFlBQVk7Z0JBQ3pCLFdBQVcsRUFBRSxvQkFBb0I7Z0JBQ2pDLFdBQVcsRUFBRSwwQkFBMEI7Z0JBQ3ZDLFNBQVMsRUFBRSxNQUFNO2dCQUNqQixFQUFFLEVBQUUsb0JBQW9CO2dCQUN4QixZQUFZLEVBQUUsb0JBQW9CO2dCQUNsQyxnQkFBZ0IsRUFBRSwwQkFBMEI7Z0JBQzVDLElBQUksRUFBRSxpREFBaUQ7Z0JBQ3ZELE1BQU0sRUFBRSxLQUFLO2dCQUNiLFFBQVEsRUFBRSxvQkFBb0I7Z0JBQzlCLEdBQUcsRUFBRSwrQ0FBK0M7YUFDckQ7U0FDRixDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsNENBQVEsR0FEUixVQUNTLEtBQUs7UUFDWixJQUFNLFFBQVEsR0FBRyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDdEQsSUFBTSxLQUFLLEdBQUcsUUFBUSxDQUFDLGdCQUFnQixDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBRXpELElBQUksT0FBTyxHQUFHLEVBQUUsQ0FBQztRQUNqQixRQUFRLENBQUMsT0FBTyxDQUFDLFVBQUMsT0FBTztZQUN2QixJQUFNLFVBQVUsR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDO1lBQ3JDLElBQUksS0FBSyxDQUFDLE1BQU0sQ0FBQyxTQUFTLEdBQUcsVUFBVSxHQUFHLEdBQUcsRUFBRTtnQkFDN0MsT0FBTyxHQUFHLE9BQU8sQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUE7YUFDckM7UUFDSCxDQUFDLENBQUMsQ0FBQztRQUNILEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBQyxFQUFFO1lBQ2YsSUFBTSxFQUFFLEdBQUcsRUFBRSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQTtZQUNoQyxJQUFJLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLEtBQUssT0FBTyxFQUFFO2dCQUM5QyxFQUFFLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQzthQUM1QjtpQkFBTTtnQkFDTCxFQUFFLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQTthQUM5QjtRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELGdEQUFZLEdBQVosVUFBYSxHQUFXO1FBQ3RCLElBQU0sTUFBTSxHQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUM5QyxPQUFPLE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxDQUFBO0lBQzlELENBQUM7SUFDRCwwQ0FBTSxHQUFOO1FBQ0UsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUE7SUFDN0IsQ0FBQztJQUVELDRDQUFRLEdBQVIsVUFBUyxTQUFTLEVBQUUsTUFBTTtRQUN4QixPQUFPLEdBQUcsR0FBRyxTQUFTLEdBQUcsTUFBTSxDQUFBO0lBQ2pDLENBQUM7SUFFRCxnREFBWSxHQUFaLFVBQWEsVUFBVTtRQUNyQixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFlBQVUsVUFBWSxDQUFDLENBQUMsQ0FBQTtJQUNoRCxDQUFDO0lBRUQsd0RBQW9CLEdBQXBCLFVBQXFCLEtBQUs7UUFDeEIsT0FBTyxLQUFLLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssS0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFBO0lBRWpFLENBQUM7c0dBakVVLHlCQUF5QjtrRUFBekIseUJBQXlCOzs7WUNYdEMsNEVBQ0k7O1lBRDJCLHFDQUFrQjs7b0NEQWpEO0NBOEVDLEFBeEVELElBd0VDO1NBbkVZLHlCQUF5QjtrREFBekIseUJBQXlCO2NBTHJDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsdUJBQXVCO2dCQUNqQyxXQUFXLEVBQUUsb0NBQW9DO2dCQUNqRCxTQUFTLEVBQUUsQ0FBQyxvQ0FBb0MsQ0FBQzthQUNsRDs7a0JBRUUsS0FBSzs7a0JBQ0wsTUFBTTs7a0JBc0JOLFlBQVk7bUJBQUMsUUFBUSxFQUFFLENBQUMsUUFBUSxDQUFDOztBQThDcEM7SUFNRSxxQkFBb0IsZUFBK0MsRUFBVSxPQUEwQjtRQUFuRixvQkFBZSxHQUFmLGVBQWUsQ0FBZ0M7UUFBVSxZQUFPLEdBQVAsT0FBTyxDQUFtQjtRQUN2RyxXQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ2QsYUFBUSxHQUFHLEVBQUUsQ0FBQTtJQUY4RixDQUFDO0lBRzVHLDhCQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsaUJBQWlCLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFBO1FBQzNFLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFBO1FBQzFELElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUE7SUFDdkMsQ0FBQztJQUVELDJCQUFLLEdBQUw7UUFDRSxJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ2pDLENBQUM7SUFFSyxvQ0FBYyxHQUFwQjs7Ozs7NkJBQ00sSUFBSSxDQUFDLE1BQU0sRUFBWCx3QkFBVzt3QkFDYixxQkFBTSxJQUFJLENBQUMsT0FBTyxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBQTs7d0JBQTlGLFNBQThGLENBQUM7d0JBQy9GLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxFQUFFLENBQUM7Ozs7OztLQUVsQzswRUFuQlUsV0FBVztvREFBWCxXQUFXO1lFdEZ4Qiw4QkFDRTtZQUFBLDBCQUFJO1lBQUEsWUFBWTtZQUFBLGlCQUFLO1lBQ3JCLGlDQUFzRTtZQUEzQix3RkFBUyxvQkFBZ0IsSUFBQztZQUFDLCtEQUFnQztZQUFBLGlCQUFTO1lBQy9HLGlDQUEwRDtZQUFsQix3RkFBUyxXQUFPLElBQUM7WUFBQyxzQkFBTTtZQUFBLGlCQUFTO1lBQzNFLGlCQUFNOztZQUhBLGVBQVk7WUFBWixrQ0FBWTs7c0JGRGxCO0NBMEdDLEFBekJELElBeUJDO1NBcEJZLFdBQVc7a0RBQVgsV0FBVztjQUx2QixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGNBQWM7Z0JBQ3hCLFdBQVcsRUFBRSxtQkFBbUI7Z0JBQ2hDLFNBQVMsRUFBRSxDQUFDLG9DQUFvQyxDQUFDO2FBQ2xEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIEhvc3RMaXN0ZW5lciwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNYXRCb3R0b21TaGVldCwgTWF0Qm90dG9tU2hlZXRSZWYgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9ib3R0b20tc2hlZXQnO1xuXG5pbXBvcnQgeyBPbmJvYXJkaW5nU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL29uYm9hcmRpbmcuc2VydmljZSc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItb25ib2FyZGluZy1kZXRhaWwnLFxuICB0ZW1wbGF0ZVVybDogJy4vb25ib2FyZGluZy1kZXRhaWwuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9vbmJvYXJkaW5nLWRldGFpbC5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIE9uYm9hcmRpbmdEZXRhaWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBkZXRhaWxWaWV3O1xuICBAT3V0cHV0KCkgb25TaG93TW9kZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4odHJ1ZSk7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgc2VydmljZTogT25ib2FyZGluZ1NlcnZpY2UsIHByaXZhdGUgX2JvdHRvbVNoZWV0OiBNYXRCb3R0b21TaGVldCkgeyB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gIH1cbiAgb3BlbkJvdHRvbVNoZWV0KEF0dGFjaGVtZW50KTogdm9pZCB7XG4gICAgdGhpcy5fYm90dG9tU2hlZXQub3BlbihCb3R0b21TaGVldCwge1xuICAgICAgZGF0YTogQXR0YWNoZW1lbnQgPyBBdHRhY2hlbWVudFswXSA6IHtcbiAgICAgICAgQ29udGVudFR5cGU6IFwiaW1hZ2UvanBlZ1wiLFxuICAgICAgICBDcmVhdGVkQnlJZDogXCIwMDUybzAwMDAwOUZCdnZBQUdcIixcbiAgICAgICAgQ3JlYXRlZERhdGU6IFwiMjAyMi0wNy0wMVQxMzoxMjo1NC40NjdaXCIsXG4gICAgICAgIEV4dGVuc2lvbjogXCJqcGVnXCIsXG4gICAgICAgIElkOiBcIjA2OTFxMDAwMDA2MWN5RkFBUVwiLFxuICAgICAgICBJZENvbnRhY3RfX2M6IFwiMDAzMXEwMDAwMG53c1F5QUFJXCIsXG4gICAgICAgIExhc3RNb2RpZmllZERhdGU6IFwiMjAyMi0wNy0wMVQxMzoxMjo1NC40NjdaXCIsXG4gICAgICAgIE5hbWU6IFwiSG93LVRvLUJlY29tZS1BLUZ1bGwtU3RhY2stSmF2YVNjcmlwdC1EZXZlbG9wZXJcIixcbiAgICAgICAgT3JpZ2luOiBcIldlYlwiLFxuICAgICAgICBQYXJlbnRJZDogXCI1MDAxcTAwMDAwSWlzdVRBQVJcIixcbiAgICAgICAgVXJsOiBcIi9hc3NldHMvNTAwMXEwMDAwMElpc3VUQUFSXzE2NTY2ODExNzIyOTguanBlZ1wiLFxuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIEBIb3N0TGlzdGVuZXIoJ3Njcm9sbCcsIFsnJGV2ZW50J10pXG4gIG9uU2Nyb2xsKGV2ZW50KSB7XG4gICAgY29uc3Qgc2VjdGlvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwic2VjdGlvblwiKTtcbiAgICBjb25zdCBuYXZMaSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZmllbGRzIHVsIGxpXCIpO1xuXG4gICAgbGV0IGN1cnJlbnQgPSBcIlwiO1xuICAgIHNlY3Rpb25zLmZvckVhY2goKHNlY3Rpb24pID0+IHtcbiAgICAgIGNvbnN0IHNlY3Rpb25Ub3AgPSBzZWN0aW9uLm9mZnNldFRvcDtcbiAgICAgIGlmIChldmVudC50YXJnZXQuc2Nyb2xsVG9wID4gc2VjdGlvblRvcCAtIDMwMCkge1xuICAgICAgICBjdXJyZW50ID0gc2VjdGlvbi5nZXRBdHRyaWJ1dGUoXCJpZFwiKVxuICAgICAgfVxuICAgIH0pO1xuICAgIG5hdkxpLmZvckVhY2goKGxpKSA9PiB7XG4gICAgICBjb25zdCBpZCA9IGxpLmdldEF0dHJpYnV0ZSgnaWQnKVxuICAgICAgaWYgKGlkLnN1YnN0cmluZygwLCBpZC5sZW5ndGggLSAxKSA9PT0gY3VycmVudCkge1xuICAgICAgICBsaS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGkuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGNhdE5hbWVTdGFydChzdHI6IHN0cmluZykge1xuICAgIGNvbnN0IHZvd2VscyA9IFsnYScsICdlJywgJ2knLCAnbycsICd1JywgJ3knXTtcbiAgICByZXR1cm4gdm93ZWxzLmluY2x1ZGVzKHN0ci5zdWJzdHIoMCwgMSkudG9Mb2NhbGVMb3dlckNhc2UoKSlcbiAgfVxuICBvbkVkaXQoKSB7XG4gICAgdGhpcy5vblNob3dNb2RlLmVtaXQoZmFsc2UpXG4gIH1cblxuICBwcm9ncmVzcyhjb21wbGV0ZWQsIGxlbmd0aCkge1xuICAgIHJldHVybiAxMDAgKiBjb21wbGV0ZWQgLyBsZW5ndGhcbiAgfVxuXG4gIG9uVmlld1RpY2tldChDYXNlTnVtYmVyKSB7XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW2B0aWNrZXQvJHtDYXNlTnVtYmVyfWBdKVxuICB9XG5cbiAgb25Gb3JtYXREaXNwbGF5VmFsdWUodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUgPT09IHRydWUgPyAnT3VpJyA6IHZhbHVlID09PSBmYWxzZSA/ICdOb24nIDogdmFsdWVcblxuICB9XG5cbn1cblxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdib3R0b20tc2hlZXQnLFxuICB0ZW1wbGF0ZVVybDogJ2JvdHRvbS1zaGVldC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vb25ib2FyZGluZy1kZXRhaWwuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBCb3R0b21TaGVldCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2JvdHRvbVNoZWV0UmVmOiBNYXRCb3R0b21TaGVldFJlZjxCb3R0b21TaGVldD4sIHByaXZhdGUgc2VydmljZTogT25ib2FyZGluZ1NlcnZpY2UpIHsgfVxuICBhdHRhY2ggPSBudWxsO1xuICBmaWxlbmFtZSA9IFwiXCJcbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5hdHRhY2ggPSB0aGlzLl9ib3R0b21TaGVldFJlZi5jb250YWluZXJJbnN0YW5jZS5ib3R0b21TaGVldENvbmZpZy5kYXRhXG4gICAgY29uc3QgdXJscyA9IHRoaXMuYXR0YWNoID8gdGhpcy5hdHRhY2guVXJsLnNwbGl0KFwiL1wiKSA6IFtdXG4gICAgdGhpcy5maWxlbmFtZSA9IHVybHNbdXJscy5sZW5ndGggLSAxXVxuICB9XG5cbiAgY2xvc2UoKTogdm9pZCB7XG4gICAgdGhpcy5fYm90dG9tU2hlZXRSZWYuZGlzbWlzcygpO1xuICB9XG5cbiAgYXN5bmMgb25Eb3dubG9hZEZpbGUoKSB7XG4gICAgaWYgKHRoaXMuYXR0YWNoKSB7XG4gICAgICBhd2FpdCB0aGlzLnNlcnZpY2UuZG93bmxvYWRBdHRhY2htZW50KHRoaXMuYXR0YWNoLlVybCwgdGhpcy5hdHRhY2guQ29udGVudFR5cGUsIHRoaXMuZmlsZW5hbWUpO1xuICAgICAgdGhpcy5fYm90dG9tU2hlZXRSZWYuZGlzbWlzcygpO1xuICAgIH1cbiAgfVxufVxuXG4iLCI8ZGl2IGNsYXNzPVwib25ib2FyZGluZy1kZXRhaWxcIiAqbmdJZj1cImRldGFpbFZpZXdcIj5cbiAgICA8aDEgY2xhc3M9XCJ0aXRsZVwiPlxuICAgICAgICA8cD5JbnTDqWdyYXRpb24gcHJvZmlsIHt7ZGV0YWlsVmlldz8uTmFtZX19PC9wPlxuICAgICAgICA8bWF0LWljb24gKm5nSWY9XCIhZGV0YWlsVmlldy5GaW5pc2hlZFwiIHN0eWxlPVwibWFyZ2luLWxlZnQ6IDIwcHg7IGN1cnNvcjogcG9pbnRlcjtcIiAoY2xpY2spPVwib25FZGl0KClcIj5lZGl0XG4gICAgICAgIDwvbWF0LWljb24+XG4gICAgPC9oMT5cbiAgICA8ZGl2IGNsYXNzPVwidmlldy1jb250ZW50XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJsZWZ0LWNvbnRlbnRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ1c2VyLWluZm9cIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidXNlci1uYW1lXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMj57e2RldGFpbFZpZXcudXNlci5GaXJzdE5hbWUgfX0ge3tkZXRhaWxWaWV3LnVzZXIuTGFzdE5hbWUgfX0gPHNwYW4+YXJyaXbDqSBsZVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+e3tkZXRhaWxWaWV3LmNyZWF0ZWRBdCB8IGRhdGU6J2RkL01NL3l5JyB9fTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImNvbnRhY3RcIj57e2RldGFpbFZpZXc/LnVzZXI/LkFjY291bnROYW1lIH19IDxzcGFuPjwvc3Bhbj4ge3tkZXRhaWxWaWV3Py51c2VyPy5UaXRsZX19PC9wPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiY29udGFjdFwiPlxuICAgICAgICAgICAgICAgICAgICA8bWF0LWljb24gZm9udFNldD1cIm1hdGVyaWFsLWljb25zLW91dGxpbmVkXCI+ZW1haWw8L21hdC1pY29uPnt7ZGV0YWlsVmlldz8udXNlcj8uRW1haWwgfX1cbiAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImRldGFpbFZpZXc/LnVzZXI/Lk1vYmlsZVBob25lPy5pbnRlcm5hdGlvbmFsTnVtYmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bWF0LWljb24gZm9udFNldD1cIm1hdGVyaWFsLWljb25zLW91dGxpbmVkXCI+cGhvbmU8L21hdC1pY29uPlxuICAgICAgICAgICAgICAgICAgICAgICAge3tkZXRhaWxWaWV3Py51c2VyPy5Nb2JpbGVQaG9uZT8uaW50ZXJuYXRpb25hbE51bWJlcn19XG4gICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJkZXRhaWxWaWV3Py51c2VyPy5QaG9uZT8uaW50ZXJuYXRpb25hbE51bWJlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG1hdC1pY29uIGZvbnRTZXQ9XCJtYXRlcmlhbC1pY29ucy1vdXRsaW5lZFwiPnNtYXJ0cGhvbmU8L21hdC1pY29uPlxuICAgICAgICAgICAgICAgICAgICAgICAge3tkZXRhaWxWaWV3Py51c2VyPy5QaG9uZT8uaW50ZXJuYXRpb25hbE51bWJlcn19XG4gICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgICAgICAgICAgICAgPC9wPlxuXG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBpZD1cImZpZWxkc1wiIGNsYXNzPVwiZmllbGRzXCI+XG4gICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICA8bGkgW25neFNjcm9sbFRvXT1cIicjJytjYXRlZ29yeS5uYW1lXCIgY2xhc3M9XCJtZW51LWl0ZW1cIiBbY2xhc3NdPVwiaT09PTAgPyAnYWN0aXZlJzonJ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAqbmdGb3I9XCJsZXQgY2F0ZWdvcnkgb2YgZGV0YWlsVmlldy5jYXRlZ29yaWVzOyAgbGV0IGk9aW5kZXhcIiBbaWRdPVwiY2F0ZWdvcnkubmFtZSsneCdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhPnt7Y2F0ZWdvcnkubmFtZX19PC9hPlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhdGVnb3J5LXZpZXctY29udGFpbmVyXCIgKHNjcm9sbCk9XCJvblNjcm9sbCgkZXZlbnQpXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzPVwiY2F0ZWdvcnktaXRlbVwiICpuZ0Zvcj1cImxldCBjYXRlZ29yeSBvZiBkZXRhaWxWaWV3LmNhdGVnb3JpZXM7ICBsZXQgaT1pbmRleFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBbaWRdPVwiY2F0ZWdvcnkubmFtZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhdGVnb3J5LWl0ZW0taW5uZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2F0ZWdvcnktaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0aXRsZS1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDI+e3tjYXRlZ29yeS5uYW1lfX08L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJjYXRlZ29yeS1kZXNjcmlwdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIExpc3RlcyBkZXMgaW5mb3JtYXRpb25zIG7DqWNlc3NhaXJlcyBwb3VyIGxhIGNyw6lhdGlvbiBkZSB7e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhdE5hbWVTdGFydChjYXRlZ29yeS5uYW1lKSA/IFwibCdcIiArIGNhdGVnb3J5Lm5hbWUgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5Lm5hbWUgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcm9ncmVzcy1zdGF0dXNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0ge3tjYXRlZ29yeT8uZmllbGRDb21wbGV0ZWR9fSAvIHt7Y2F0ZWdvcnk/LmZpZWxkTGVuZ3RofX0gLS0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tIDxkaXYgKm5nSWY9XCJjYXRlZ29yeT8uZmllbGRDb21wbGV0ZWQ9PT1jYXRlZ29yeT8uZmllbGRMZW5ndGhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwic3RhdHVzIGluLXByb2dyZXNzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+RW4gY291cnMgZGUgdHJhaXRlbWVudDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGliLWxvYWRpbmc+PC9saWItbG9hZGluZz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiAtLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gPGRpdiAqbmdJZj1cImNhdGVnb3J5Py5maWVsZENvbXBsZXRlZCA9PT1jYXRlZ29yeT8uZmllbGRMZW5ndGhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwic3RhdHVzIG9uZ29pbmdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT1cIm1hcmdpbi1yaWdodDogMTBweDtcIj5FbiBjb3Vyczwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bWF0LWljb24+Y2hlY2s8L21hdC1pY29uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+IC0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSA8ZGl2ICpuZ0lmPVwiY2F0ZWdvcnk/LmZpZWxkQ29tcGxldGVkIDwgY2F0ZWdvcnk/LmZpZWxkTGVuZ3RoXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInN0YXR1cyBwcm9ncmVzcy1iYXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT1cIndpZHRoOiAzMDBweDtcIj57e3Byb2dyZXNzKGNhdGVnb3J5Py5maWVsZENvbXBsZXRlZCAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5Py5maWVsZExlbmd0aCl9fSUgVGVybWluw6k8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG1hdC1wcm9ncmVzcy1iYXIgbW9kZT1cImRldGVybWluYXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3ZhbHVlXT1cInByb2dyZXNzKGNhdGVnb3J5Py5maWVsZENvbXBsZXRlZCAsIGNhdGVnb3J5Py5maWVsZExlbmd0aClcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L21hdC1wcm9ncmVzcy1iYXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gLS0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXRlZ29yeS1pdGVtLWZvcm1zXCIgKm5nRm9yPVwibGV0IGZvcm1zIG9mIGNhdGVnb3J5LmZvcm1zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhZm9ybXMuZm9ybXNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwibGFiZWxcIj57e2Zvcm1zLmxhYmVsfX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQ+e3tvbkZvcm1hdERpc3BsYXlWYWx1ZShmb3Jtcy52YWx1ZSl9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJmb3Jtcy5mb3Jtc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPnt7Zm9ybXMubGFiZWx9fTwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2F0ZWdvcnktaXRlbS1mb3Jtc1wiICpuZ0Zvcj1cImxldCBzdWIgb2YgZm9ybXMuZm9ybXNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIXN1Yi5mb3Jtc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImxhYmVsXCI+e3tzdWIubGFiZWx9fTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0Pnt7b25Gb3JtYXREaXNwbGF5VmFsdWUoc3ViLnZhbHVlKX19PC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwic3ViLmZvcm1zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz57e3N1Yi5sYWJlbH19PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhdGVnb3J5LWl0ZW0tZm9ybXNcIiAqbmdGb3I9XCJsZXQgY2hpbGQgb2Ygc3ViLmZvcm1zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIWNoaWxkLmZvcm1zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJsYWJlbFwiPnt7Y2hpbGQubGFiZWx9fTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQ+e3tvbkZvcm1hdERpc3BsYXlWYWx1ZShjaGlsZC52YWx1ZSl9fTwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJjaGlsZC5mb3Jtc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz57e2NoaWxkLmxhYmVsfX08L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXRlZ29yeS1pdGVtLWZvcm1zXCIgKm5nRm9yPVwibGV0IGMyIG9mIGNoaWxkLmZvcm1zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwibGFiZWxcIj57e2MyLmxhYmVsfX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoND57e29uRm9ybWF0RGlzcGxheVZhbHVlKGMyLnZhbHVlKX19PC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9XCJoZWlnaHQ6IDQ1MHB4O1wiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJyaWdodC1jb250ZW50XCI+XG4gICAgICAgICAgICA8aDI+VGlja2V0cyBsacOpcyDDoCB2b3RyZSBkZW1hbmRlPC9oMj5cbiAgICAgICAgICAgIDxwIGNsYXNzPVwic3VidGl0bGVcIj5Wb3VzIHJldHJvdXZlcmV6IGljaSB0b3VzIGxlcyB0aWNrZXRzIGNyw6nDqXMgbG9ycyBkZSBsYSBjcsOpYXRpb24gZGUgdm90cmUgZmljaGVcbiAgICAgICAgICAgICAgICBk4oCZaW50w6lncmF0aW9uLjwvcD5cbiAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJkZXRhaWxWaWV3LnRpY2tldHMgJiYgZGV0YWlsVmlldy50aWNrZXRzLmxlbmd0aD4wXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJveC10aWNrZXQtaW5mb1wiICpuZ0Zvcj1cImxldCB0aWNrZXQgb2YgZGV0YWlsVmlldy50aWNrZXRzXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkLWZsZXgtcm93IGJveC1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gbWF0LWJ1dHRvbiBjbGFzcz1cImQtZmxleC1yb3dcIiBzdHlsZT1cImNvbG9yOiAjNTc1RjZFO3BhZGRpbmctbGVmdDogMDtcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJvblZpZXdUaWNrZXQodGlja2V0LkNhc2VOdW1iZXIpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG1hdC1pY29uIGZvbnRTZXQ9XCJtYXRlcmlhbC1pY29ucy1vdXRsaW5lZFwiPmxpc3RfYWx0PC9tYXQtaWNvbj48c3BhblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT1cImZvbnQtd2VpZ2h0OiA0MDA7XCI+VGlja2V0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7dGlja2V0LkNhc2VOdW1iZXJ9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBtYXQtYnV0dG9uIGNsYXNzPVwicHJvZ3Jlc3NcIj57e3RpY2tldC5TdGF0dXN9fTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJkYXRlXCI+e3t0aWNrZXQuQ3JlYXRlZERhdGUgfCBkYXRlIDonZGQvTU0veXknfX08L3A+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJib3gtaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDM+e3t0aWNrZXQuU3ViamVjdH19PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwhLS0gPGJ1dHRvbiAqbmdJZj1cInRpY2tldC5BdHRhY2htZW50cyAmJiB0aWNrZXQuQXR0YWNobWVudHMubGVuZ3RoPjBcIiBtYXQtYnV0dG9uIGNsYXNzPVwiZG93bmxvYWQtdGlja2V0XCIgLS0+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gbWF0LWJ1dHRvbiBjbGFzcz1cImRvd25sb2FkLXRpY2tldFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwib3BlbkJvdHRvbVNoZWV0KHRpY2tldD8uQXR0YWNobWVudHMpXCI+VMOpbMOpY2hhcmdlclxuICAgICAgICAgICAgICAgICAgICAgICAgbGVcbiAgICAgICAgICAgICAgICAgICAgICAgIFBERlxuICAgICAgICAgICAgICAgICAgICAgICAgcsOpY2FwaXR1bGF0aWY8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJveC10aWNrZXQtaW5mb1wiICpuZ0lmPVwiIWRldGFpbFZpZXcudGlja2V0c1wiPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiZGVzY3JpcHRpb25cIj5cIkF1Y3VuIHRpY2tldHNcIjwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbjwvZGl2PiIsIjxkaXYgY2xhc3M9XCJzaGVldC1jb250ZW50XCI+XHJcbiAgPGgzPnt7ZmlsZW5hbWV9fTwvaDM+XHJcbiAgPGJ1dHRvbiBjbGFzcz1cImRvd25sb2FkLWJ1dHRvblwiIG1hdC1idXR0b24gKGNsaWNrKT1cIm9uRG93bmxvYWRGaWxlKClcIj5Uw6lsw6ljaGFyZ2VyIGxlIFBERiByw6ljYXBpdHVsYXRpZjwvYnV0dG9uPlxyXG4gIDxidXR0b24gY2xhc3M9XCJjbG9zZS1idXR0b25cIiBtYXQtYnV0dG9uIChjbGljayk9XCJjbG9zZSgpXCI+RmVybWVyPC9idXR0b24+XHJcbjwvZGl2PiJdfQ==