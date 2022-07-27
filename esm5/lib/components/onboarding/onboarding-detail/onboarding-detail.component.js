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
    var _r1054 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-icon", 20);
    i0.ɵɵlistener("click", function OnboardingDetailComponent_div_0_mat_icon_4_Template_mat_icon_click_0_listener() { i0.ɵɵrestoreView(_r1054); var ctx_r1053 = i0.ɵɵnextContext(2); return ctx_r1053.onEdit(); });
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
    var ctx_r1047 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1(" ", ctx_r1047.detailView == null ? null : ctx_r1047.detailView.user == null ? null : ctx_r1047.detailView.user.MobilePhone == null ? null : ctx_r1047.detailView.user.MobilePhone.internationalNumber, " ");
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
    var ctx_r1048 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1(" ", ctx_r1048.detailView == null ? null : ctx_r1048.detailView.user == null ? null : ctx_r1048.detailView.user.Phone == null ? null : ctx_r1048.detailView.user.Phone.internationalNumber, " ");
} }
function OnboardingDetailComponent_div_0_li_28_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li", 21);
    i0.ɵɵelementStart(1, "a");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var category_r1055 = ctx.$implicit;
    var i_r1056 = ctx.index;
    i0.ɵɵclassMap(i_r1056 === 0 ? "active" : "");
    i0.ɵɵproperty("ngxScrollTo", "#" + category_r1055.name)("id", category_r1055.name + "x");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(category_r1055.name);
} }
function OnboardingDetailComponent_div_0_section_30_div_9_ng_container_1_ng_container_3_li_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var item_r1066 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(item_r1066);
} }
function OnboardingDetailComponent_div_0_section_30_div_9_ng_container_1_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "ul", 31);
    i0.ɵɵtemplate(2, OnboardingDetailComponent_div_0_section_30_div_9_ng_container_1_ng_container_3_li_2_Template, 2, 1, "li", 32);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var forms_r1060 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", forms_r1060.value);
} }
function OnboardingDetailComponent_div_0_section_30_div_9_ng_container_1_h4_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h4");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var forms_r1060 = i0.ɵɵnextContext(2).$implicit;
    var ctx_r1064 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r1064.onFormatDisplayValue(forms_r1060.value).value, " ");
} }
function OnboardingDetailComponent_div_0_section_30_div_9_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "p", 30);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, OnboardingDetailComponent_div_0_section_30_div_9_ng_container_1_ng_container_3_Template, 3, 1, "ng-container", 10);
    i0.ɵɵtemplate(4, OnboardingDetailComponent_div_0_section_30_div_9_ng_container_1_h4_4_Template, 2, 1, "h4", 10);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var forms_r1060 = i0.ɵɵnextContext().$implicit;
    var ctx_r1061 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(forms_r1060.label);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1061.onFormatDisplayValue(forms_r1060.value).type === "array");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1061.onFormatDisplayValue(forms_r1060.value).type !== "array");
} }
function OnboardingDetailComponent_div_0_section_30_div_9_ng_container_2_div_3_ng_container_1_ng_container_3_li_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var item_r1077 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(item_r1077);
} }
function OnboardingDetailComponent_div_0_section_30_div_9_ng_container_2_div_3_ng_container_1_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "ul", 31);
    i0.ɵɵtemplate(2, OnboardingDetailComponent_div_0_section_30_div_9_ng_container_2_div_3_ng_container_1_ng_container_3_li_2_Template, 2, 1, "li", 32);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var sub_r1071 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", sub_r1071.value);
} }
function OnboardingDetailComponent_div_0_section_30_div_9_ng_container_2_div_3_ng_container_1_h4_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h4");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var sub_r1071 = i0.ɵɵnextContext(2).$implicit;
    var ctx_r1075 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r1075.onFormatDisplayValue(sub_r1071.value).value, "");
} }
function OnboardingDetailComponent_div_0_section_30_div_9_ng_container_2_div_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "p", 30);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, OnboardingDetailComponent_div_0_section_30_div_9_ng_container_2_div_3_ng_container_1_ng_container_3_Template, 3, 1, "ng-container", 10);
    i0.ɵɵtemplate(4, OnboardingDetailComponent_div_0_section_30_div_9_ng_container_2_div_3_ng_container_1_h4_4_Template, 2, 1, "h4", 10);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var sub_r1071 = i0.ɵɵnextContext().$implicit;
    var ctx_r1072 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(sub_r1071.label);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1072.onFormatDisplayValue(sub_r1071.value).type === "array");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1072.onFormatDisplayValue(sub_r1071.value).type !== "array");
} }
function OnboardingDetailComponent_div_0_section_30_div_9_ng_container_2_div_3_ng_container_2_div_3_ng_container_1_ng_container_3_li_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var item_r1088 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(item_r1088);
} }
function OnboardingDetailComponent_div_0_section_30_div_9_ng_container_2_div_3_ng_container_2_div_3_ng_container_1_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "ul", 31);
    i0.ɵɵtemplate(2, OnboardingDetailComponent_div_0_section_30_div_9_ng_container_2_div_3_ng_container_2_div_3_ng_container_1_ng_container_3_li_2_Template, 2, 1, "li", 32);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var child_r1082 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", child_r1082.value);
} }
function OnboardingDetailComponent_div_0_section_30_div_9_ng_container_2_div_3_ng_container_2_div_3_ng_container_1_h4_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h4");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var child_r1082 = i0.ɵɵnextContext(2).$implicit;
    var ctx_r1086 = i0.ɵɵnextContext(7);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r1086.onFormatDisplayValue(child_r1082.value).value, "");
} }
function OnboardingDetailComponent_div_0_section_30_div_9_ng_container_2_div_3_ng_container_2_div_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "p", 30);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, OnboardingDetailComponent_div_0_section_30_div_9_ng_container_2_div_3_ng_container_2_div_3_ng_container_1_ng_container_3_Template, 3, 1, "ng-container", 10);
    i0.ɵɵtemplate(4, OnboardingDetailComponent_div_0_section_30_div_9_ng_container_2_div_3_ng_container_2_div_3_ng_container_1_h4_4_Template, 2, 1, "h4", 10);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var child_r1082 = i0.ɵɵnextContext().$implicit;
    var ctx_r1083 = i0.ɵɵnextContext(7);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(child_r1082.label);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1083.onFormatDisplayValue(child_r1082.value).type === "array");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1083.onFormatDisplayValue(child_r1082.value).type !== "array");
} }
function OnboardingDetailComponent_div_0_section_30_div_9_ng_container_2_div_3_ng_container_2_div_3_ng_container_2_div_3_ng_container_3_li_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var item_r1097 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(item_r1097);
} }
function OnboardingDetailComponent_div_0_section_30_div_9_ng_container_2_div_3_ng_container_2_div_3_ng_container_2_div_3_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "ul", 31);
    i0.ɵɵtemplate(2, OnboardingDetailComponent_div_0_section_30_div_9_ng_container_2_div_3_ng_container_2_div_3_ng_container_2_div_3_ng_container_3_li_2_Template, 2, 1, "li", 32);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var c2_r1093 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", c2_r1093.value);
} }
function OnboardingDetailComponent_div_0_section_30_div_9_ng_container_2_div_3_ng_container_2_div_3_ng_container_2_div_3_h4_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h4");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var c2_r1093 = i0.ɵɵnextContext().$implicit;
    var ctx_r1095 = i0.ɵɵnextContext(9);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r1095.onFormatDisplayValue(c2_r1093.value).value, "");
} }
function OnboardingDetailComponent_div_0_section_30_div_9_ng_container_2_div_3_ng_container_2_div_3_ng_container_2_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 29);
    i0.ɵɵelementStart(1, "p", 30);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, OnboardingDetailComponent_div_0_section_30_div_9_ng_container_2_div_3_ng_container_2_div_3_ng_container_2_div_3_ng_container_3_Template, 3, 1, "ng-container", 10);
    i0.ɵɵtemplate(4, OnboardingDetailComponent_div_0_section_30_div_9_ng_container_2_div_3_ng_container_2_div_3_ng_container_2_div_3_h4_4_Template, 2, 1, "h4", 10);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var c2_r1093 = ctx.$implicit;
    var ctx_r1092 = i0.ɵɵnextContext(9);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(c2_r1093.label);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1092.onFormatDisplayValue(c2_r1093.value).type === "array");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1092.onFormatDisplayValue(c2_r1093.value).type !== "array");
} }
function OnboardingDetailComponent_div_0_section_30_div_9_ng_container_2_div_3_ng_container_2_div_3_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "h3");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, OnboardingDetailComponent_div_0_section_30_div_9_ng_container_2_div_3_ng_container_2_div_3_ng_container_2_div_3_Template, 5, 3, "div", 28);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var child_r1082 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(child_r1082.label);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", child_r1082.forms);
} }
function OnboardingDetailComponent_div_0_section_30_div_9_ng_container_2_div_3_ng_container_2_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 29);
    i0.ɵɵtemplate(1, OnboardingDetailComponent_div_0_section_30_div_9_ng_container_2_div_3_ng_container_2_div_3_ng_container_1_Template, 5, 3, "ng-container", 10);
    i0.ɵɵtemplate(2, OnboardingDetailComponent_div_0_section_30_div_9_ng_container_2_div_3_ng_container_2_div_3_ng_container_2_Template, 4, 2, "ng-container", 10);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var child_r1082 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !child_r1082.forms);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", child_r1082.forms);
} }
function OnboardingDetailComponent_div_0_section_30_div_9_ng_container_2_div_3_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "h3");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, OnboardingDetailComponent_div_0_section_30_div_9_ng_container_2_div_3_ng_container_2_div_3_Template, 3, 2, "div", 28);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var sub_r1071 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(sub_r1071.label);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", sub_r1071.forms);
} }
function OnboardingDetailComponent_div_0_section_30_div_9_ng_container_2_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 29);
    i0.ɵɵtemplate(1, OnboardingDetailComponent_div_0_section_30_div_9_ng_container_2_div_3_ng_container_1_Template, 5, 3, "ng-container", 10);
    i0.ɵɵtemplate(2, OnboardingDetailComponent_div_0_section_30_div_9_ng_container_2_div_3_ng_container_2_Template, 4, 2, "ng-container", 10);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var sub_r1071 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !sub_r1071.forms);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", sub_r1071.forms);
} }
function OnboardingDetailComponent_div_0_section_30_div_9_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "h3");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, OnboardingDetailComponent_div_0_section_30_div_9_ng_container_2_div_3_Template, 3, 2, "div", 28);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var forms_r1060 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(forms_r1060.label);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", forms_r1060.forms);
} }
function OnboardingDetailComponent_div_0_section_30_div_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 29);
    i0.ɵɵtemplate(1, OnboardingDetailComponent_div_0_section_30_div_9_ng_container_1_Template, 5, 3, "ng-container", 10);
    i0.ɵɵtemplate(2, OnboardingDetailComponent_div_0_section_30_div_9_ng_container_2_Template, 4, 2, "ng-container", 10);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var forms_r1060 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !forms_r1060.forms);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", forms_r1060.forms);
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
    var category_r1057 = ctx.$implicit;
    var ctx_r1050 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("id", category_r1057.name);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(category_r1057.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" Listes des informations n\u00E9cessaires pour la cr\u00E9ation de ", ctx_r1050.catNameStart(category_r1057.name) ? "l'" + category_r1057.name : category_r1057.name, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", category_r1057.forms);
} }
function OnboardingDetailComponent_div_0_ng_container_38_div_1_Template(rf, ctx) { if (rf & 1) {
    var _r1106 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 34);
    i0.ɵɵelementStart(1, "div", 35);
    i0.ɵɵelementStart(2, "button", 36);
    i0.ɵɵlistener("click", function OnboardingDetailComponent_div_0_ng_container_38_div_1_Template_button_click_2_listener() { i0.ɵɵrestoreView(_r1106); var ticket_r1104 = ctx.$implicit; var ctx_r1105 = i0.ɵɵnextContext(3); return ctx_r1105.onViewTicket(ticket_r1104.CaseNumber); });
    i0.ɵɵelementStart(3, "mat-icon", 9);
    i0.ɵɵtext(4, "list_alt");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "span", 37);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "button", 38);
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "p", 39);
    i0.ɵɵtext(10);
    i0.ɵɵpipe(11, "date");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "div", 40);
    i0.ɵɵelementStart(13, "h3");
    i0.ɵɵtext(14);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "button", 41);
    i0.ɵɵlistener("click", function OnboardingDetailComponent_div_0_ng_container_38_div_1_Template_button_click_15_listener() { i0.ɵɵrestoreView(_r1106); var ticket_r1104 = ctx.$implicit; var ctx_r1107 = i0.ɵɵnextContext(3); return ctx_r1107.openBottomSheet(ticket_r1104 == null ? null : ticket_r1104.vattachment); });
    i0.ɵɵtext(16, "T\u00E9l\u00E9charger le PDF r\u00E9capitulatif");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ticket_r1104 = ctx.$implicit;
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate1("Ticket ", ticket_r1104.CaseNumber, "");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ticket_r1104.Status);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(11, 4, ticket_r1104.CreatedDate, "dd/MM/yy"));
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ticket_r1104.Subject);
} }
function OnboardingDetailComponent_div_0_ng_container_38_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, OnboardingDetailComponent_div_0_ng_container_38_div_1_Template, 17, 7, "div", 33);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r1051 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r1051.detailView.tickets);
} }
function OnboardingDetailComponent_div_0_div_39_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 34);
    i0.ɵɵelementStart(1, "p", 42);
    i0.ɵɵtext(2, "\"Aucun tickets\"");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
function OnboardingDetailComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    var _r1109 = i0.ɵɵgetCurrentView();
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
    i0.ɵɵlistener("scroll", function OnboardingDetailComponent_div_0_Template_div_scroll_29_listener($event) { i0.ɵɵrestoreView(_r1109); var ctx_r1108 = i0.ɵɵnextContext(); return ctx_r1108.onScroll($event); });
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
    var ctx_r1045 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("Int\u00E9gration profil ", ctx_r1045.detailView == null ? null : ctx_r1045.detailView.Name, "");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r1045.detailView.Finished);
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate2("", ctx_r1045.detailView.user.FirstName, " ", ctx_r1045.detailView.user.LastName, " ");
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(15, 14, ctx_r1045.detailView.createdAt, "dd/MM/yy"));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("", ctx_r1045.detailView == null ? null : ctx_r1045.detailView.user == null ? null : ctx_r1045.detailView.user.AccountName, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r1045.detailView == null ? null : ctx_r1045.detailView.user == null ? null : ctx_r1045.detailView.user.Title, "");
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1("", ctx_r1045.detailView == null ? null : ctx_r1045.detailView.user == null ? null : ctx_r1045.detailView.user.Email, " ");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1045.detailView == null ? null : ctx_r1045.detailView.user == null ? null : ctx_r1045.detailView.user.MobilePhone == null ? null : ctx_r1045.detailView.user.MobilePhone.internationalNumber);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1045.detailView == null ? null : ctx_r1045.detailView.user == null ? null : ctx_r1045.detailView.user.Phone == null ? null : ctx_r1045.detailView.user.Phone.internationalNumber);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", ctx_r1045.detailView.categories);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r1045.detailView.categories);
    i0.ɵɵadvance(8);
    i0.ɵɵproperty("ngIf", ctx_r1045.detailView.tickets && ctx_r1045.detailView.tickets.length > 0);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r1045.detailView.tickets);
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
            data: Attachement && Attachement.length > 1 ? Attachement.find(function (attach) { return attach.Name.includes("Configuration"); }) : Attachement[0]
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
        if (Array.isArray(value)) {
            return {
                type: 'array',
                value: value
            };
        }
        return value === true ? { value: "Oui", type: 'string' } : value === false ? { value: "Non", type: 'string' } : { value: value, type: 'string' };
    };
    OnboardingDetailComponent.ɵfac = function OnboardingDetailComponent_Factory(t) { return new (t || OnboardingDetailComponent)(i0.ɵɵdirectiveInject(i1.Router), i0.ɵɵdirectiveInject(i2.OnboardingService), i0.ɵɵdirectiveInject(i3.MatBottomSheet)); };
    OnboardingDetailComponent.ɵcmp = i0.ɵɵdefineComponent({ type: OnboardingDetailComponent, selectors: [["lib-onboarding-detail"]], hostBindings: function OnboardingDetailComponent_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("scroll", function OnboardingDetailComponent_scroll_HostBindingHandler($event) { return ctx.onScroll($event); });
        } }, inputs: { detailView: "detailView" }, outputs: { onShowMode: "onShowMode" }, decls: 1, vars: 1, consts: [["class", "onboarding-detail", 4, "ngIf"], [1, "onboarding-detail"], [1, "title"], ["style", "margin-left: 20px; cursor: pointer;", 3, "click", 4, "ngIf"], [1, "view-content"], [1, "left-content"], [1, "user-info"], [1, "user-name"], [1, "contact"], ["fontSet", "material-icons-outlined"], [4, "ngIf"], ["id", "fields", 1, "fields"], ["class", "menu-item", 3, "ngxScrollTo", "class", "id", 4, "ngFor", "ngForOf"], [1, "category-view-container", 3, "scroll"], ["class", "category-item", 3, "id", 4, "ngFor", "ngForOf"], [2, "background-color", "transparent"], [2, "height", "450px"], [1, "right-content"], [1, "subtitle"], ["class", "box-ticket-info", 4, "ngIf"], [2, "margin-left", "20px", "cursor", "pointer", 3, "click"], [1, "menu-item", 3, "ngxScrollTo", "id"], [1, "category-item", 3, "id"], [1, "category-item-inner"], [1, "category-header"], [1, "title-content"], [1, "category-description"], [1, "progress-status"], ["class", "category-item-forms", 4, "ngFor", "ngForOf"], [1, "category-item-forms"], [1, "label"], [1, "ul-list"], [4, "ngFor", "ngForOf"], ["class", "box-ticket-info", 4, "ngFor", "ngForOf"], [1, "box-ticket-info"], [1, "d-flex-row", "box-header"], ["mat-button", "", 1, "d-flex-row", 2, "color", "#575F6E", "padding-left", "0", 3, "click"], [2, "font-weight", "400"], ["mat-button", "", 1, "progress"], [1, "date"], [1, "box-header"], ["mat-button", "", 1, "download-ticket", 3, "click"], [1, "description"]], template: function OnboardingDetailComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, OnboardingDetailComponent_div_0_Template, 40, 17, "div", 0);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.detailView);
        } }, directives: [i4.NgIf, i5.MatIcon, i4.NgForOf, i6.ScrollToDirective, i7.MatButton], pipes: [i4.DatePipe], styles: [".onboarding-detail[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .onboarding-detail[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .onboarding-detail[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .onboarding-detail[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], .onboarding-detail[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%], .onboarding-detail[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]{margin:0;font-family:Nexa;font-style:normal;font-weight:700;line-height:110%;display:flex;align-items:center;color:#242731}.onboarding-detail[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0}.onboarding-detail[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:24px}.onboarding-detail[_ngcontent-%COMP%]   h1.title[_ngcontent-%COMP%]{margin-bottom:33px;margin-top:10px}.onboarding-detail[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:20px}.onboarding-detail[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:18px}.onboarding-detail[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-size:16px}.onboarding-detail[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{font-size:14px}.onboarding-detail[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]{font-size:12px}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-between;background-color:#f4f7f9}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]{width:70%;border-radius:6px;margin-right:2%}@media (max-width:1200px){.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]{width:50%}}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]{background:0 0;border-radius:6px;padding:10px 10px 10px 0}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]::before{content:\".\";font-size:25px;margin:0 10px}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-weight:400;display:flex;align-items:center}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{padding-right:5px}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   p.contact[_ngcontent-%COMP%]{margin-top:10px}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .user-name[_ngcontent-%COMP%]{line-height:30px}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .user-name[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-weight:400;font-size:12px;margin-right:10px}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .user-contact[_ngcontent-%COMP%]{line-height:30px}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]{background:#fff;border-radius:8px;padding:15px;margin-bottom:30px}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   .category-item-inner[_ngcontent-%COMP%]   .category-description[_ngcontent-%COMP%]{font-family:Nexa;font-style:normal;font-weight:250;font-size:14px;line-height:16px;color:#575f6e;margin-top:5px}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   .category-item-inner[_ngcontent-%COMP%]   .category-item-forms[_ngcontent-%COMP%]{margin-top:20px}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   .category-item-inner[_ngcontent-%COMP%]   .category-item-forms[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]{font-family:Nexa;font-style:normal;font-weight:250;font-size:12px;line-height:16px;display:flex;align-items:center;color:#575f6e}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .right-content[_ngcontent-%COMP%]{background-color:#fff;border-radius:6px;padding:15px;overflow:auto;max-height:85.5vh;margin-right:20px}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .right-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#575f6e}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .right-content[_ngcontent-%COMP%]   .box-ticket-info[_ngcontent-%COMP%]{padding-bottom:20px;padding-top:20px;border-bottom:2px solid #e2e4e5}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .right-content[_ngcontent-%COMP%]   .box-ticket-info[_ngcontent-%COMP%]   .box-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .right-content[_ngcontent-%COMP%]   .box-ticket-info[_ngcontent-%COMP%]   .box-header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{min-width:auto;height:36px;border-radius:4px;font-family:Nexa;font-weight:500;font-size:16px;display:flex;align-items:center;text-transform:capitalize;color:#fff}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .right-content[_ngcontent-%COMP%]   .box-ticket-info[_ngcontent-%COMP%]   .box-header[_ngcontent-%COMP%]   .finished[_ngcontent-%COMP%]{background:#6fe8d7}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .right-content[_ngcontent-%COMP%]   .box-ticket-info[_ngcontent-%COMP%]   .box-header[_ngcontent-%COMP%]   .progress[_ngcontent-%COMP%]{background:#f3a124}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .right-content[_ngcontent-%COMP%]   .box-ticket-info[_ngcontent-%COMP%]   .download-ticket[_ngcontent-%COMP%]{margin-top:20px;background-color:#fff;border:1px solid #171f26}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .category-view-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;max-height:70vh;overflow:auto}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .category-view-container[_ngcontent-%COMP%]::-webkit-scrollbar, .onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .right-content[_ngcontent-%COMP%]::-webkit-scrollbar{display:none}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .category-view-container[_ngcontent-%COMP%], .onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .right-content[_ngcontent-%COMP%]{-ms-overflow-style:none;scrollbar-width:none}.fields[_ngcontent-%COMP%]{height:84%}.fields[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style:none;display:flex;margin:33px 0;padding:0;overflow:auto}.fields[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin-right:20px;padding-bottom:5px;border-bottom:3px solid transparent}.fields[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none;font-family:Nexa;font-style:normal;font-weight:700;font-size:14px;line-height:120%;color:#171f26;opacity:.5;overflow:hidden;display:-webkit-box;-webkit-line-clamp:1;-webkit-box-orient:vertical}.fields[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.menu-item.active[_ngcontent-%COMP%], .fields[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.menu-item[_ngcontent-%COMP%]:hover{cursor:pointer;border-bottom:3px solid #3c4252}.fields[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.menu-item.active[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .fields[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.menu-item[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%]{font-family:Nexa;font-style:normal;font-weight:700;font-size:14px;line-height:120%;opacity:1;text-decoration:none!important}.progress-status[_ngcontent-%COMP%]   .status[_ngcontent-%COMP%]{display:flex;align-items:center}.progress-status[_ngcontent-%COMP%]   .ongoing[_ngcontent-%COMP%]{color:#6fe8d7}.progress-status[_ngcontent-%COMP%]   .in-progress[_ngcontent-%COMP%]{padding-right:25px;color:#f3a124;font-weight:500;font-size:16px}  .progress-status{font-size:16px}  .progress-status .mat-progress-bar{display:block;height:20px;overflow:hidden;border-radius:50px;position:relative;transition:opacity 250ms linear;width:100%}  .progress-status .mat-progress-bar-fill::after{background-color:#6fe8d7}  .progress-status .mat-progress-bar-buffer{background-color:#ecf3f7}.category-header[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between}.d-flex-row[_ngcontent-%COMP%]{display:flex;align-items:center}.d-flex-row[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin-right:5px}  mat-bottom-sheet-container{width:100vw;max-width:100vw!important;height:150px;background:#f4f7f9!important;display:flex!important;flex-direction:column;justify-content:center}  mat-bottom-sheet-container .sheet-content{display:flex;align-items:center;justify-content:center}  mat-bottom-sheet-container h3{font-family:Nexa;font-style:normal;font-weight:700;font-size:20px;line-height:100%;color:#171f26;margin-bottom:0!important;margin-top:0!important}  mat-bottom-sheet-container button.download-button{width:277px;height:48px;background:#171f26;box-shadow:0 0 0 rgba(0,0,0,.2);border-radius:7px;color:#fff;margin:0 25px}  mat-bottom-sheet-container button.close-button{height:48px;background:#fff;box-shadow:0 0 0 rgba(0,0,0,.2);border-radius:7px;color:#171f26;border:1px solid #171f26}.ul-list[_ngcontent-%COMP%]{list-style:disc!important;display:block!important;margin-left:0!important;padding-left:0!important;margin-top:0!important}.ul-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]::before{content:\".\";font-size:40px}"] });
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
        } }, directives: [i7.MatButton], styles: [".onboarding-detail[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .onboarding-detail[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .onboarding-detail[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .onboarding-detail[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], .onboarding-detail[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%], .onboarding-detail[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]{margin:0;font-family:Nexa;font-style:normal;font-weight:700;line-height:110%;display:flex;align-items:center;color:#242731}.onboarding-detail[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0}.onboarding-detail[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:24px}.onboarding-detail[_ngcontent-%COMP%]   h1.title[_ngcontent-%COMP%]{margin-bottom:33px;margin-top:10px}.onboarding-detail[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:20px}.onboarding-detail[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:18px}.onboarding-detail[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-size:16px}.onboarding-detail[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{font-size:14px}.onboarding-detail[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]{font-size:12px}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-between;background-color:#f4f7f9}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]{width:70%;border-radius:6px;margin-right:2%}@media (max-width:1200px){.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]{width:50%}}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]{background:0 0;border-radius:6px;padding:10px 10px 10px 0}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]::before{content:\".\";font-size:25px;margin:0 10px}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-weight:400;display:flex;align-items:center}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{padding-right:5px}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   p.contact[_ngcontent-%COMP%]{margin-top:10px}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .user-name[_ngcontent-%COMP%]{line-height:30px}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .user-name[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-weight:400;font-size:12px;margin-right:10px}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .user-contact[_ngcontent-%COMP%]{line-height:30px}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]{background:#fff;border-radius:8px;padding:15px;margin-bottom:30px}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   .category-item-inner[_ngcontent-%COMP%]   .category-description[_ngcontent-%COMP%]{font-family:Nexa;font-style:normal;font-weight:250;font-size:14px;line-height:16px;color:#575f6e;margin-top:5px}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   .category-item-inner[_ngcontent-%COMP%]   .category-item-forms[_ngcontent-%COMP%]{margin-top:20px}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   .category-item-inner[_ngcontent-%COMP%]   .category-item-forms[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]{font-family:Nexa;font-style:normal;font-weight:250;font-size:12px;line-height:16px;display:flex;align-items:center;color:#575f6e}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .right-content[_ngcontent-%COMP%]{background-color:#fff;border-radius:6px;padding:15px;overflow:auto;max-height:85.5vh;margin-right:20px}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .right-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#575f6e}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .right-content[_ngcontent-%COMP%]   .box-ticket-info[_ngcontent-%COMP%]{padding-bottom:20px;padding-top:20px;border-bottom:2px solid #e2e4e5}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .right-content[_ngcontent-%COMP%]   .box-ticket-info[_ngcontent-%COMP%]   .box-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .right-content[_ngcontent-%COMP%]   .box-ticket-info[_ngcontent-%COMP%]   .box-header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{min-width:auto;height:36px;border-radius:4px;font-family:Nexa;font-weight:500;font-size:16px;display:flex;align-items:center;text-transform:capitalize;color:#fff}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .right-content[_ngcontent-%COMP%]   .box-ticket-info[_ngcontent-%COMP%]   .box-header[_ngcontent-%COMP%]   .finished[_ngcontent-%COMP%]{background:#6fe8d7}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .right-content[_ngcontent-%COMP%]   .box-ticket-info[_ngcontent-%COMP%]   .box-header[_ngcontent-%COMP%]   .progress[_ngcontent-%COMP%]{background:#f3a124}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .right-content[_ngcontent-%COMP%]   .box-ticket-info[_ngcontent-%COMP%]   .download-ticket[_ngcontent-%COMP%]{margin-top:20px;background-color:#fff;border:1px solid #171f26}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .category-view-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;max-height:70vh;overflow:auto}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .category-view-container[_ngcontent-%COMP%]::-webkit-scrollbar, .onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .right-content[_ngcontent-%COMP%]::-webkit-scrollbar{display:none}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .category-view-container[_ngcontent-%COMP%], .onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .right-content[_ngcontent-%COMP%]{-ms-overflow-style:none;scrollbar-width:none}.fields[_ngcontent-%COMP%]{height:84%}.fields[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style:none;display:flex;margin:33px 0;padding:0;overflow:auto}.fields[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin-right:20px;padding-bottom:5px;border-bottom:3px solid transparent}.fields[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none;font-family:Nexa;font-style:normal;font-weight:700;font-size:14px;line-height:120%;color:#171f26;opacity:.5;overflow:hidden;display:-webkit-box;-webkit-line-clamp:1;-webkit-box-orient:vertical}.fields[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.menu-item.active[_ngcontent-%COMP%], .fields[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.menu-item[_ngcontent-%COMP%]:hover{cursor:pointer;border-bottom:3px solid #3c4252}.fields[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.menu-item.active[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .fields[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.menu-item[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%]{font-family:Nexa;font-style:normal;font-weight:700;font-size:14px;line-height:120%;opacity:1;text-decoration:none!important}.progress-status[_ngcontent-%COMP%]   .status[_ngcontent-%COMP%]{display:flex;align-items:center}.progress-status[_ngcontent-%COMP%]   .ongoing[_ngcontent-%COMP%]{color:#6fe8d7}.progress-status[_ngcontent-%COMP%]   .in-progress[_ngcontent-%COMP%]{padding-right:25px;color:#f3a124;font-weight:500;font-size:16px}  .progress-status{font-size:16px}  .progress-status .mat-progress-bar{display:block;height:20px;overflow:hidden;border-radius:50px;position:relative;transition:opacity 250ms linear;width:100%}  .progress-status .mat-progress-bar-fill::after{background-color:#6fe8d7}  .progress-status .mat-progress-bar-buffer{background-color:#ecf3f7}.category-header[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between}.d-flex-row[_ngcontent-%COMP%]{display:flex;align-items:center}.d-flex-row[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin-right:5px}  mat-bottom-sheet-container{width:100vw;max-width:100vw!important;height:150px;background:#f4f7f9!important;display:flex!important;flex-direction:column;justify-content:center}  mat-bottom-sheet-container .sheet-content{display:flex;align-items:center;justify-content:center}  mat-bottom-sheet-container h3{font-family:Nexa;font-style:normal;font-weight:700;font-size:20px;line-height:100%;color:#171f26;margin-bottom:0!important;margin-top:0!important}  mat-bottom-sheet-container button.download-button{width:277px;height:48px;background:#171f26;box-shadow:0 0 0 rgba(0,0,0,.2);border-radius:7px;color:#fff;margin:0 25px}  mat-bottom-sheet-container button.close-button{height:48px;background:#fff;box-shadow:0 0 0 rgba(0,0,0,.2);border-radius:7px;color:#171f26;border:1px solid #171f26}.ul-list[_ngcontent-%COMP%]{list-style:disc!important;display:block!important;margin-left:0!important;padding-left:0!important;margin-top:0!important}.ul-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]::before{content:\".\";font-size:40px}"] });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib25ib2FyZGluZy1kZXRhaWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vb25ib2FyZGluZy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL29uYm9hcmRpbmcvb25ib2FyZGluZy1kZXRhaWwvb25ib2FyZGluZy1kZXRhaWwuY29tcG9uZW50LnRzIiwibGliL2NvbXBvbmVudHMvb25ib2FyZGluZy9vbmJvYXJkaW5nLWRldGFpbC9vbmJvYXJkaW5nLWRldGFpbC5jb21wb25lbnQuaHRtbCIsImxpYi9jb21wb25lbnRzL29uYm9hcmRpbmcvb25ib2FyZGluZy1kZXRhaWwvYm90dG9tLXNoZWV0Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7Ozs7Ozs7OztJQ0dyRixvQ0FBc0c7SUFBbkIsOE1BQWtCO0lBQUMscUJBQ3RHO0lBQUEsaUJBQVc7OztJQWNDLDZCQUNJO0lBQUEsdUJBQWE7SUFDYixtQ0FBNEM7SUFBQSxxQkFBSztJQUFBLGlCQUFXO0lBQzVELFlBQ0o7SUFBQSwwQkFBZTs7O0lBRFgsZUFDSjtJQURJLGtPQUNKOzs7SUFFQSw2QkFDSTtJQUFBLHVCQUFhO0lBQ2IsbUNBQTRDO0lBQUEsMEJBQVU7SUFBQSxpQkFBVztJQUNqRSxZQUNKO0lBQUEsMEJBQWU7OztJQURYLGVBQ0o7SUFESSxzTkFDSjs7O0lBUUEsOEJBRUk7SUFBQSx5QkFBRztJQUFBLFlBQWlCO0lBQUEsaUJBQUk7SUFDNUIsaUJBQUs7Ozs7SUFIbUQsNENBQTZCO0lBQWpGLHVEQUFpQyxpQ0FBQTtJQUU5QixlQUFpQjtJQUFqQix5Q0FBaUI7OztJQTJDQSwwQkFBc0M7SUFBQSxZQUFRO0lBQUEsaUJBQUs7OztJQUFiLGVBQVE7SUFBUixnQ0FBUTs7O0lBRnRELDZCQUNJO0lBQUEsOEJBQ0k7SUFBQSw4SEFBc0M7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ZUFBWTtZQUFaLGtDQUFZOztzQkZEbEI7Q0FvR0MsQUF6QkQsSUF5QkM7U0FwQlksV0FBVztrREFBWCxXQUFXO2NBTHZCLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsY0FBYztnQkFDeEIsV0FBVyxFQUFFLG1CQUFtQjtnQkFDaEMsU0FBUyxFQUFFLENBQUMsb0NBQW9DLENBQUM7YUFDbEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSG9zdExpc3RlbmVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1hdEJvdHRvbVNoZWV0LCBNYXRCb3R0b21TaGVldFJlZiB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2JvdHRvbS1zaGVldCc7XG5cbmltcG9ydCB7IE9uYm9hcmRpbmdTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vb25ib2FyZGluZy5zZXJ2aWNlJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1vbmJvYXJkaW5nLWRldGFpbCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9vbmJvYXJkaW5nLWRldGFpbC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL29uYm9hcmRpbmctZGV0YWlsLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgT25ib2FyZGluZ0RldGFpbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIGRldGFpbFZpZXc7XG4gIEBPdXRwdXQoKSBvblNob3dNb2RlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPih0cnVlKTtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBzZXJ2aWNlOiBPbmJvYXJkaW5nU2VydmljZSwgcHJpdmF0ZSBfYm90dG9tU2hlZXQ6IE1hdEJvdHRvbVNoZWV0KSB7IH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgfVxuICBvcGVuQm90dG9tU2hlZXQoQXR0YWNoZW1lbnQpOiB2b2lkIHtcbiAgICB0aGlzLl9ib3R0b21TaGVldC5vcGVuKEJvdHRvbVNoZWV0LCB7XG4gICAgICBkYXRhOiBBdHRhY2hlbWVudCAmJiBBdHRhY2hlbWVudC5sZW5ndGggPiAxID8gQXR0YWNoZW1lbnQuZmluZCgoYXR0YWNoOiBhbnkpID0+IGF0dGFjaC5OYW1lLmluY2x1ZGVzKFwiQ29uZmlndXJhdGlvblwiKSkgOiBBdHRhY2hlbWVudFswXVxuICAgIH0pO1xuICB9XG4gIEBIb3N0TGlzdGVuZXIoJ3Njcm9sbCcsIFsnJGV2ZW50J10pXG4gIG9uU2Nyb2xsKGV2ZW50KSB7XG4gICAgY29uc3Qgc2VjdGlvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwic2VjdGlvblwiKTtcbiAgICBjb25zdCBuYXZMaSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZmllbGRzIHVsIGxpXCIpO1xuXG4gICAgbGV0IGN1cnJlbnQgPSBcIlwiO1xuICAgIHNlY3Rpb25zLmZvckVhY2goKHNlY3Rpb24pID0+IHtcbiAgICAgIGNvbnN0IHNlY3Rpb25Ub3AgPSBzZWN0aW9uLm9mZnNldFRvcDtcbiAgICAgIGlmIChldmVudC50YXJnZXQuc2Nyb2xsVG9wID4gc2VjdGlvblRvcCAtIDMwMCkge1xuICAgICAgICBjdXJyZW50ID0gc2VjdGlvbi5nZXRBdHRyaWJ1dGUoXCJpZFwiKVxuICAgICAgfVxuICAgIH0pO1xuICAgIG5hdkxpLmZvckVhY2goKGxpKSA9PiB7XG4gICAgICBjb25zdCBpZCA9IGxpLmdldEF0dHJpYnV0ZSgnaWQnKVxuICAgICAgaWYgKGlkLnN1YnN0cmluZygwLCBpZC5sZW5ndGggLSAxKSA9PT0gY3VycmVudCkge1xuICAgICAgICBsaS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGkuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGNhdE5hbWVTdGFydChzdHI6IHN0cmluZykge1xuICAgIGNvbnN0IHZvd2VscyA9IFsnYScsICdlJywgJ2knLCAnbycsICd1JywgJ3knXTtcbiAgICByZXR1cm4gdm93ZWxzLmluY2x1ZGVzKHN0ci5zdWJzdHIoMCwgMSkudG9Mb2NhbGVMb3dlckNhc2UoKSlcbiAgfVxuICBvbkVkaXQoKSB7XG4gICAgdGhpcy5vblNob3dNb2RlLmVtaXQoZmFsc2UpXG4gIH1cblxuICBwcm9ncmVzcyhjb21wbGV0ZWQsIGxlbmd0aCkge1xuICAgIHJldHVybiAxMDAgKiBjb21wbGV0ZWQgLyBsZW5ndGhcbiAgfVxuXG4gIG9uVmlld1RpY2tldChDYXNlTnVtYmVyKSB7XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW2B0aWNrZXQvJHtDYXNlTnVtYmVyfWBdKVxuICB9XG5cbiAgb25Gb3JtYXREaXNwbGF5VmFsdWUodmFsdWUpIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6ICdhcnJheScsXG4gICAgICAgIHZhbHVlXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZSA9PT0gdHJ1ZSA/IHsgdmFsdWU6IFwiT3VpXCIsIHR5cGU6ICdzdHJpbmcnIH0gOiB2YWx1ZSA9PT0gZmFsc2UgPyB7IHZhbHVlOiBcIk5vblwiLCB0eXBlOiAnc3RyaW5nJyB9IDogeyB2YWx1ZSwgdHlwZTogJ3N0cmluZycgfVxuXG4gIH1cblxufVxuXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2JvdHRvbS1zaGVldCcsXG4gIHRlbXBsYXRlVXJsOiAnYm90dG9tLXNoZWV0Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9vbmJvYXJkaW5nLWRldGFpbC5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIEJvdHRvbVNoZWV0IGltcGxlbWVudHMgT25Jbml0IHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfYm90dG9tU2hlZXRSZWY6IE1hdEJvdHRvbVNoZWV0UmVmPEJvdHRvbVNoZWV0PiwgcHJpdmF0ZSBzZXJ2aWNlOiBPbmJvYXJkaW5nU2VydmljZSkgeyB9XG4gIGF0dGFjaCA9IG51bGw7XG4gIGZpbGVuYW1lID0gXCJcIlxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmF0dGFjaCA9IHRoaXMuX2JvdHRvbVNoZWV0UmVmLmNvbnRhaW5lckluc3RhbmNlLmJvdHRvbVNoZWV0Q29uZmlnLmRhdGFcbiAgICBjb25zdCB1cmxzID0gdGhpcy5hdHRhY2ggPyB0aGlzLmF0dGFjaC5Vcmwuc3BsaXQoXCIvXCIpIDogW11cbiAgICB0aGlzLmZpbGVuYW1lID0gdXJsc1t1cmxzLmxlbmd0aCAtIDFdXG4gIH1cblxuICBjbG9zZSgpOiB2b2lkIHtcbiAgICB0aGlzLl9ib3R0b21TaGVldFJlZi5kaXNtaXNzKCk7XG4gIH1cblxuICBhc3luYyBvbkRvd25sb2FkRmlsZSgpIHtcbiAgICBpZiAodGhpcy5hdHRhY2gpIHtcbiAgICAgIGF3YWl0IHRoaXMuc2VydmljZS5kb3dubG9hZEF0dGFjaG1lbnQodGhpcy5hdHRhY2guVXJsLCB0aGlzLmF0dGFjaC5Db250ZW50VHlwZSwgdGhpcy5maWxlbmFtZSk7XG4gICAgICB0aGlzLl9ib3R0b21TaGVldFJlZi5kaXNtaXNzKCk7XG4gICAgfVxuICB9XG59XG5cbiIsIjxkaXYgY2xhc3M9XCJvbmJvYXJkaW5nLWRldGFpbFwiICpuZ0lmPVwiZGV0YWlsVmlld1wiPlxuICAgIDxoMSBjbGFzcz1cInRpdGxlXCI+XG4gICAgICAgIDxwPkludMOpZ3JhdGlvbiBwcm9maWwge3tkZXRhaWxWaWV3Py5OYW1lfX08L3A+XG4gICAgICAgIDxtYXQtaWNvbiAqbmdJZj1cIiFkZXRhaWxWaWV3LkZpbmlzaGVkXCIgc3R5bGU9XCJtYXJnaW4tbGVmdDogMjBweDsgY3Vyc29yOiBwb2ludGVyO1wiIChjbGljayk9XCJvbkVkaXQoKVwiPmVkaXRcbiAgICAgICAgPC9tYXQtaWNvbj5cbiAgICA8L2gxPlxuICAgIDxkaXYgY2xhc3M9XCJ2aWV3LWNvbnRlbnRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImxlZnQtY29udGVudFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInVzZXItaW5mb1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ1c2VyLW5hbWVcIj5cbiAgICAgICAgICAgICAgICAgICAgPGgyPnt7ZGV0YWlsVmlldy51c2VyLkZpcnN0TmFtZSB9fSB7e2RldGFpbFZpZXcudXNlci5MYXN0TmFtZSB9fSA8c3Bhbj5hcnJpdsOpIGxlXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD57e2RldGFpbFZpZXcuY3JlYXRlZEF0IHwgZGF0ZTonZGQvTU0veXknIH19PC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiY29udGFjdFwiPnt7ZGV0YWlsVmlldz8udXNlcj8uQWNjb3VudE5hbWUgfX0gPHNwYW4+PC9zcGFuPiB7e2RldGFpbFZpZXc/LnVzZXI/LlRpdGxlfX08L3A+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJjb250YWN0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxtYXQtaWNvbiBmb250U2V0PVwibWF0ZXJpYWwtaWNvbnMtb3V0bGluZWRcIj5lbWFpbDwvbWF0LWljb24+e3tkZXRhaWxWaWV3Py51c2VyPy5FbWFpbCB9fVxuICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiZGV0YWlsVmlldz8udXNlcj8uTW9iaWxlUGhvbmU/LmludGVybmF0aW9uYWxOdW1iZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxtYXQtaWNvbiBmb250U2V0PVwibWF0ZXJpYWwtaWNvbnMtb3V0bGluZWRcIj5waG9uZTwvbWF0LWljb24+XG4gICAgICAgICAgICAgICAgICAgICAgICB7e2RldGFpbFZpZXc/LnVzZXI/Lk1vYmlsZVBob25lPy5pbnRlcm5hdGlvbmFsTnVtYmVyfX1cbiAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImRldGFpbFZpZXc/LnVzZXI/LlBob25lPy5pbnRlcm5hdGlvbmFsTnVtYmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bWF0LWljb24gZm9udFNldD1cIm1hdGVyaWFsLWljb25zLW91dGxpbmVkXCI+c21hcnRwaG9uZTwvbWF0LWljb24+XG4gICAgICAgICAgICAgICAgICAgICAgICB7e2RldGFpbFZpZXc/LnVzZXI/LlBob25lPy5pbnRlcm5hdGlvbmFsTnVtYmVyfX1cbiAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgICAgICAgICAgICA8L3A+XG5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGlkPVwiZmllbGRzXCIgY2xhc3M9XCJmaWVsZHNcIj5cbiAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgIDxsaSBbbmd4U2Nyb2xsVG9dPVwiJyMnK2NhdGVnb3J5Lm5hbWVcIiBjbGFzcz1cIm1lbnUtaXRlbVwiIFtjbGFzc109XCJpPT09MCA/ICdhY3RpdmUnOicnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICpuZ0Zvcj1cImxldCBjYXRlZ29yeSBvZiBkZXRhaWxWaWV3LmNhdGVnb3JpZXM7ICBsZXQgaT1pbmRleFwiIFtpZF09XCJjYXRlZ29yeS5uYW1lKyd4J1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGE+e3tjYXRlZ29yeS5uYW1lfX08L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2F0ZWdvcnktdmlldy1jb250YWluZXJcIiAoc2Nyb2xsKT1cIm9uU2Nyb2xsKCRldmVudClcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3M9XCJjYXRlZ29yeS1pdGVtXCIgKm5nRm9yPVwibGV0IGNhdGVnb3J5IG9mIGRldGFpbFZpZXcuY2F0ZWdvcmllczsgIGxldCBpPWluZGV4XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtpZF09XCJjYXRlZ29yeS5uYW1lXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2F0ZWdvcnktaXRlbS1pbm5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXRlZ29yeS1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRpdGxlLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMj57e2NhdGVnb3J5Lm5hbWV9fTwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImNhdGVnb3J5LWRlc2NyaXB0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTGlzdGVzIGRlcyBpbmZvcm1hdGlvbnMgbsOpY2Vzc2FpcmVzIHBvdXIgbGEgY3LDqWF0aW9uIGRlIHt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2F0TmFtZVN0YXJ0KGNhdGVnb3J5Lm5hbWUpID8gXCJsJ1wiICsgY2F0ZWdvcnkubmFtZSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnkubmFtZSB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByb2dyZXNzLXN0YXR1c1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSB7e2NhdGVnb3J5Py5maWVsZENvbXBsZXRlZH19IC8ge3tjYXRlZ29yeT8uZmllbGRMZW5ndGh9fSAtLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gPGRpdiAqbmdJZj1cImNhdGVnb3J5Py5maWVsZENvbXBsZXRlZD09PWNhdGVnb3J5Py5maWVsZExlbmd0aFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJzdGF0dXMgaW4tcHJvZ3Jlc3NcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5FbiBjb3VycyBkZSB0cmFpdGVtZW50PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaWItbG9hZGluZz48L2xpYi1sb2FkaW5nPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+IC0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSA8ZGl2ICpuZ0lmPVwiY2F0ZWdvcnk/LmZpZWxkQ29tcGxldGVkID09PWNhdGVnb3J5Py5maWVsZExlbmd0aFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJzdGF0dXMgb25nb2luZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPVwibWFyZ2luLXJpZ2h0OiAxMHB4O1wiPkVuIGNvdXJzPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxtYXQtaWNvbj5jaGVjazwvbWF0LWljb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gLS0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tIDxkaXYgKm5nSWY9XCJjYXRlZ29yeT8uZmllbGRDb21wbGV0ZWQgPCBjYXRlZ29yeT8uZmllbGRMZW5ndGhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwic3RhdHVzIHByb2dyZXNzLWJhclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPVwid2lkdGg6IDMwMHB4O1wiPnt7cHJvZ3Jlc3MoY2F0ZWdvcnk/LmZpZWxkQ29tcGxldGVkICxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnk/LmZpZWxkTGVuZ3RoKX19JSBUZXJtaW7DqTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bWF0LXByb2dyZXNzLWJhciBtb2RlPVwiZGV0ZXJtaW5hdGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbdmFsdWVdPVwicHJvZ3Jlc3MoY2F0ZWdvcnk/LmZpZWxkQ29tcGxldGVkICwgY2F0ZWdvcnk/LmZpZWxkTGVuZ3RoKVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbWF0LXByb2dyZXNzLWJhcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiAtLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhdGVnb3J5LWl0ZW0tZm9ybXNcIiAqbmdGb3I9XCJsZXQgZm9ybXMgb2YgY2F0ZWdvcnkuZm9ybXNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFmb3Jtcy5mb3Jtc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJsYWJlbFwiPnt7Zm9ybXMubGFiZWx9fTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJvbkZvcm1hdERpc3BsYXlWYWx1ZShmb3Jtcy52YWx1ZSkudHlwZT09PSdhcnJheSdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJ1bC1saXN0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSAqbmdGb3I9XCJsZXQgaXRlbSBvZiBmb3Jtcy52YWx1ZSBcIj57e2l0ZW19fTwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgKm5nSWY9XCJvbkZvcm1hdERpc3BsYXlWYWx1ZShmb3Jtcy52YWx1ZSkudHlwZSE9PSdhcnJheSdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e29uRm9ybWF0RGlzcGxheVZhbHVlKGZvcm1zLnZhbHVlKS52YWx1ZX19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImZvcm1zLmZvcm1zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+e3tmb3Jtcy5sYWJlbH19PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXRlZ29yeS1pdGVtLWZvcm1zXCIgKm5nRm9yPVwibGV0IHN1YiBvZiBmb3Jtcy5mb3Jtc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhc3ViLmZvcm1zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwibGFiZWxcIj57e3N1Yi5sYWJlbH19PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwib25Gb3JtYXREaXNwbGF5VmFsdWUoc3ViLnZhbHVlKS50eXBlPT09J2FycmF5J1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzPVwidWwtbGlzdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSAqbmdGb3I9XCJsZXQgaXRlbSBvZiBzdWIudmFsdWUgXCI+e3tpdGVtfX08L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCAqbmdJZj1cIm9uRm9ybWF0RGlzcGxheVZhbHVlKHN1Yi52YWx1ZSkudHlwZSE9PSdhcnJheSdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7b25Gb3JtYXREaXNwbGF5VmFsdWUoc3ViLnZhbHVlKS52YWx1ZX19PC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwic3ViLmZvcm1zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz57e3N1Yi5sYWJlbH19PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhdGVnb3J5LWl0ZW0tZm9ybXNcIiAqbmdGb3I9XCJsZXQgY2hpbGQgb2Ygc3ViLmZvcm1zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIWNoaWxkLmZvcm1zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJsYWJlbFwiPnt7Y2hpbGQubGFiZWx9fTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICpuZ0lmPVwib25Gb3JtYXREaXNwbGF5VmFsdWUoY2hpbGQudmFsdWUpLnR5cGU9PT0nYXJyYXknXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cInVsLWxpc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSAqbmdGb3I9XCJsZXQgaXRlbSBvZiBjaGlsZC52YWx1ZVwiPnt7aXRlbX19PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgKm5nSWY9XCJvbkZvcm1hdERpc3BsYXlWYWx1ZShjaGlsZC52YWx1ZSkudHlwZSE9PSdhcnJheSdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3tvbkZvcm1hdERpc3BsYXlWYWx1ZShjaGlsZC52YWx1ZSkudmFsdWV9fTwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJjaGlsZC5mb3Jtc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz57e2NoaWxkLmxhYmVsfX08L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXRlZ29yeS1pdGVtLWZvcm1zXCIgKm5nRm9yPVwibGV0IGMyIG9mIGNoaWxkLmZvcm1zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwibGFiZWxcIj57e2MyLmxhYmVsfX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICpuZ0lmPVwib25Gb3JtYXREaXNwbGF5VmFsdWUoYzIudmFsdWUpLnR5cGU9PT0nYXJyYXknXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJ1bC1saXN0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpICpuZ0Zvcj1cImxldCBpdGVtIG9mIGMyLnZhbHVlIFwiPnt7aXRlbX19PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgKm5nSWY9XCJvbkZvcm1hdERpc3BsYXlWYWx1ZShjMi52YWx1ZSkudHlwZSE9PSdhcnJheSdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7b25Gb3JtYXREaXNwbGF5VmFsdWUoYzIudmFsdWUpLnZhbHVlfX08L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24gc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT1cImhlaWdodDogNDUwcHg7XCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInJpZ2h0LWNvbnRlbnRcIj5cbiAgICAgICAgICAgIDxoMj5UaWNrZXRzIGxpw6lzIMOgIHZvdHJlIGRlbWFuZGU8L2gyPlxuICAgICAgICAgICAgPHAgY2xhc3M9XCJzdWJ0aXRsZVwiPlZvdXMgcmV0cm91dmVyZXogaWNpIHRvdXMgbGVzIHRpY2tldHMgY3LDqcOpcyBsb3JzIGRlIGxhIGNyw6lhdGlvbiBkZSB2b3RyZSBmaWNoZVxuICAgICAgICAgICAgICAgIGTigJlpbnTDqWdyYXRpb24uPC9wPlxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImRldGFpbFZpZXcudGlja2V0cyAmJiBkZXRhaWxWaWV3LnRpY2tldHMubGVuZ3RoPjBcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYm94LXRpY2tldC1pbmZvXCIgKm5nRm9yPVwibGV0IHRpY2tldCBvZiBkZXRhaWxWaWV3LnRpY2tldHNcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImQtZmxleC1yb3cgYm94LWhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBtYXQtYnV0dG9uIGNsYXNzPVwiZC1mbGV4LXJvd1wiIHN0eWxlPVwiY29sb3I6ICM1NzVGNkU7cGFkZGluZy1sZWZ0OiAwO1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cIm9uVmlld1RpY2tldCh0aWNrZXQuQ2FzZU51bWJlcilcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bWF0LWljb24gZm9udFNldD1cIm1hdGVyaWFsLWljb25zLW91dGxpbmVkXCI+bGlzdF9hbHQ8L21hdC1pY29uPjxzcGFuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPVwiZm9udC13ZWlnaHQ6IDQwMDtcIj5UaWNrZXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3t0aWNrZXQuQ2FzZU51bWJlcn19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG1hdC1idXR0b24gY2xhc3M9XCJwcm9ncmVzc1wiPnt7dGlja2V0LlN0YXR1c319PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImRhdGVcIj57e3RpY2tldC5DcmVhdGVkRGF0ZSB8IGRhdGUgOidkZC9NTS95eSd9fTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJveC1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMz57e3RpY2tldC5TdWJqZWN0fX08L2gzPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPCEtLSA8YnV0dG9uICpuZ0lmPVwidGlja2V0LkF0dGFjaG1lbnRzICYmIHRpY2tldC5BdHRhY2htZW50cy5sZW5ndGg+MFwiIG1hdC1idXR0b24gY2xhc3M9XCJkb3dubG9hZC10aWNrZXRcIiAtLT5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBtYXQtYnV0dG9uIGNsYXNzPVwiZG93bmxvYWQtdGlja2V0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJvcGVuQm90dG9tU2hlZXQodGlja2V0Py52YXR0YWNobWVudClcIj5Uw6lsw6ljaGFyZ2VyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZVxuICAgICAgICAgICAgICAgICAgICAgICAgUERGXG4gICAgICAgICAgICAgICAgICAgICAgICByw6ljYXBpdHVsYXRpZjwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYm94LXRpY2tldC1pbmZvXCIgKm5nSWY9XCIhZGV0YWlsVmlldy50aWNrZXRzXCI+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJkZXNjcmlwdGlvblwiPlwiQXVjdW4gdGlja2V0c1wiPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuPC9kaXY+IiwiPGRpdiBjbGFzcz1cInNoZWV0LWNvbnRlbnRcIj5cclxuICA8aDM+e3tmaWxlbmFtZX19PC9oMz5cclxuICA8YnV0dG9uIGNsYXNzPVwiZG93bmxvYWQtYnV0dG9uXCIgbWF0LWJ1dHRvbiAoY2xpY2spPVwib25Eb3dubG9hZEZpbGUoKVwiPlTDqWzDqWNoYXJnZXIgbGUgUERGIHLDqWNhcGl0dWxhdGlmPC9idXR0b24+XHJcbiAgPGJ1dHRvbiBjbGFzcz1cImNsb3NlLWJ1dHRvblwiIG1hdC1idXR0b24gKGNsaWNrKT1cImNsb3NlKClcIj5GZXJtZXI8L2J1dHRvbj5cclxuPC9kaXY+Il19