import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/material/icon";
import * as i3 from "@angular/material/button";
import * as i4 from "@nicky-lenaers/ngx-scroll-to";
import * as i5 from "../loading/loading.component";
import * as i6 from "@angular/material/progress-bar";
function OnboardingDetailComponent_div_0_li_22_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li", 21);
    i0.ɵɵelementStart(1, "a");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var category_r914 = ctx.$implicit;
    var i_r915 = ctx.index;
    i0.ɵɵclassMap(i_r915 === 0 ? "active" : "");
    i0.ɵɵproperty("ngxScrollTo", "#" + category_r914.name)("id", category_r914.name + "x");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(category_r914.name);
} }
function OnboardingDetailComponent_div_0_section_24_div_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 31);
    i0.ɵɵelementStart(1, "span");
    i0.ɵɵtext(2, "En cours de traitement");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(3, "lib-loading");
    i0.ɵɵelementEnd();
} }
function OnboardingDetailComponent_div_0_section_24_div_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 32);
    i0.ɵɵelementStart(1, "span", 33);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(3, "mat-progress-bar", 34);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var category_r916 = i0.ɵɵnextContext().$implicit;
    var ctx_r919 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", ctx_r919.progress(category_r916 == null ? null : category_r916.fieldCompleted, category_r916 == null ? null : category_r916.fieldLength), "% Termin\u00E9");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("value", ctx_r919.progress(category_r916 == null ? null : category_r916.fieldCompleted, category_r916 == null ? null : category_r916.fieldLength));
} }
function OnboardingDetailComponent_div_0_section_24_div_11_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "p", 37);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "h4");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var forms_r922 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(forms_r922.label);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(forms_r922.value);
} }
function OnboardingDetailComponent_div_0_section_24_div_11_ng_container_2_div_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "p", 37);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "h4");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var sub_r927 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(sub_r927.label);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(sub_r927.value);
} }
function OnboardingDetailComponent_div_0_section_24_div_11_ng_container_2_div_3_ng_container_2_div_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "p", 37);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "h4");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var child_r932 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(child_r932.label);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(child_r932.value);
} }
function OnboardingDetailComponent_div_0_section_24_div_11_ng_container_2_div_3_ng_container_2_div_3_ng_container_2_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 35);
    i0.ɵɵelementStart(1, "p", 37);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "h4");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var c2_r937 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(c2_r937.label);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(c2_r937.value);
} }
function OnboardingDetailComponent_div_0_section_24_div_11_ng_container_2_div_3_ng_container_2_div_3_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "h5");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, OnboardingDetailComponent_div_0_section_24_div_11_ng_container_2_div_3_ng_container_2_div_3_ng_container_2_div_3_Template, 5, 2, "div", 30);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var child_r932 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(child_r932.label);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", child_r932.forms);
} }
function OnboardingDetailComponent_div_0_section_24_div_11_ng_container_2_div_3_ng_container_2_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 35);
    i0.ɵɵtemplate(1, OnboardingDetailComponent_div_0_section_24_div_11_ng_container_2_div_3_ng_container_2_div_3_ng_container_1_Template, 5, 2, "ng-container", 36);
    i0.ɵɵtemplate(2, OnboardingDetailComponent_div_0_section_24_div_11_ng_container_2_div_3_ng_container_2_div_3_ng_container_2_Template, 4, 2, "ng-container", 36);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var child_r932 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !child_r932.forms);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", child_r932.forms);
} }
function OnboardingDetailComponent_div_0_section_24_div_11_ng_container_2_div_3_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "h4");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, OnboardingDetailComponent_div_0_section_24_div_11_ng_container_2_div_3_ng_container_2_div_3_Template, 3, 2, "div", 30);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var sub_r927 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(sub_r927.label);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", sub_r927.forms);
} }
function OnboardingDetailComponent_div_0_section_24_div_11_ng_container_2_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 35);
    i0.ɵɵtemplate(1, OnboardingDetailComponent_div_0_section_24_div_11_ng_container_2_div_3_ng_container_1_Template, 5, 2, "ng-container", 36);
    i0.ɵɵtemplate(2, OnboardingDetailComponent_div_0_section_24_div_11_ng_container_2_div_3_ng_container_2_Template, 4, 2, "ng-container", 36);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var sub_r927 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !sub_r927.forms);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", sub_r927.forms);
} }
function OnboardingDetailComponent_div_0_section_24_div_11_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "h3");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, OnboardingDetailComponent_div_0_section_24_div_11_ng_container_2_div_3_Template, 3, 2, "div", 30);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var forms_r922 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(forms_r922.label);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", forms_r922.forms);
} }
function OnboardingDetailComponent_div_0_section_24_div_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 35);
    i0.ɵɵtemplate(1, OnboardingDetailComponent_div_0_section_24_div_11_ng_container_1_Template, 5, 2, "ng-container", 36);
    i0.ɵɵtemplate(2, OnboardingDetailComponent_div_0_section_24_div_11_ng_container_2_Template, 4, 2, "ng-container", 36);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var forms_r922 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !forms_r922.forms);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", forms_r922.forms);
} }
function OnboardingDetailComponent_div_0_section_24_Template(rf, ctx) { if (rf & 1) {
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
    i0.ɵɵelementStart(8, "div", 27);
    i0.ɵɵtemplate(9, OnboardingDetailComponent_div_0_section_24_div_9_Template, 4, 0, "div", 28);
    i0.ɵɵtemplate(10, OnboardingDetailComponent_div_0_section_24_div_10_Template, 4, 2, "div", 29);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(11, OnboardingDetailComponent_div_0_section_24_div_11_Template, 3, 2, "div", 30);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var category_r916 = ctx.$implicit;
    var ctx_r913 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("id", category_r916.name);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(category_r916.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" Listes des informations n\u00E9cessaires pour la cr\u00E9ation de ", ctx_r913.catNameStart(category_r916.name) ? "l'" + category_r916.name : category_r916.name, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", (category_r916 == null ? null : category_r916.fieldCompleted) === (category_r916 == null ? null : category_r916.fieldLength));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", (category_r916 == null ? null : category_r916.fieldCompleted) < (category_r916 == null ? null : category_r916.fieldLength));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", category_r916.forms);
} }
function OnboardingDetailComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    var _r942 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 1);
    i0.ɵɵelementStart(1, "h1", 2);
    i0.ɵɵelementStart(2, "p");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "mat-icon", 3);
    i0.ɵɵlistener("click", function OnboardingDetailComponent_div_0_Template_mat_icon_click_4_listener() { i0.ɵɵrestoreView(_r942); var ctx_r941 = i0.ɵɵnextContext(); return ctx_r941.onEdit(); });
    i0.ɵɵtext(5, "edit");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "div", 4);
    i0.ɵɵelementStart(7, "div", 5);
    i0.ɵɵelementStart(8, "div", 6);
    i0.ɵɵelementStart(9, "div", 7);
    i0.ɵɵelementStart(10, "h1");
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "p");
    i0.ɵɵtext(13);
    i0.ɵɵpipe(14, "date");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "div", 8);
    i0.ɵɵelementStart(16, "p");
    i0.ɵɵtext(17);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "p");
    i0.ɵɵtext(19);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(20, "div", 9);
    i0.ɵɵelementStart(21, "ul");
    i0.ɵɵtemplate(22, OnboardingDetailComponent_div_0_li_22_Template, 3, 5, "li", 10);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(23, "div", 11);
    i0.ɵɵlistener("scroll", function OnboardingDetailComponent_div_0_Template_div_scroll_23_listener($event) { i0.ɵɵrestoreView(_r942); var ctx_r943 = i0.ɵɵnextContext(); return ctx_r943.onScroll($event); });
    i0.ɵɵtemplate(24, OnboardingDetailComponent_div_0_section_24_Template, 12, 6, "section", 12);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(25, "div", 13);
    i0.ɵɵelementStart(26, "h1");
    i0.ɵɵtext(27, "Tickets li\u00E9s \u00E0 votre demande");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(28, "p", 14);
    i0.ɵɵtext(29, "Vous retrouverez ici tous les tickets cr\u00E9\u00E9s lors de la cr\u00E9ation de votre fiche d\u2019int\u00E9gration.");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(30, "div", 15);
    i0.ɵɵelementStart(31, "p", 16);
    i0.ɵɵtext(32, "01/01/22");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(33, "div", 17);
    i0.ɵɵelementStart(34, "h2");
    i0.ɵɵtext(35, "Nom ticket");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(36, "button", 18);
    i0.ɵɵtext(37, "En cours");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(38, "p", 19);
    i0.ɵɵtext(39, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(40, "div", 15);
    i0.ɵɵelementStart(41, "p", 16);
    i0.ɵɵtext(42, "01/01/22");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(43, "div", 17);
    i0.ɵɵelementStart(44, "h2");
    i0.ɵɵtext(45, "Nom ticket");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(46, "button", 18);
    i0.ɵɵtext(47, "Termin\u00E9e");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(48, "p", 19);
    i0.ɵɵtext(49, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(50, "div", 15);
    i0.ɵɵelementStart(51, "p", 16);
    i0.ɵɵtext(52, "01/01/22");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(53, "div", 17);
    i0.ɵɵelementStart(54, "h2");
    i0.ɵɵtext(55, "Nom ticket");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(56, "button", 20);
    i0.ɵɵtext(57, "Termin\u00E9e");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(58, "p", 19);
    i0.ɵɵtext(59, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(60, "div", 15);
    i0.ɵɵelementStart(61, "p", 16);
    i0.ɵɵtext(62, "01/01/22");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(63, "h2");
    i0.ɵɵtext(64, "Nom ticket");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(65, "p", 19);
    i0.ɵɵtext(66, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r911 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("Int\u00E9gration profil ", ctx_r911.detailView == null ? null : ctx_r911.detailView.Name, "");
    i0.ɵɵadvance(8);
    i0.ɵɵtextInterpolate2("", ctx_r911.detailView.user.FirstName, " ", ctx_r911.detailView.user.LastName, "");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(14, 8, ctx_r911.detailView.createdAt, "dd/MM/yy"));
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r911.detailView == null ? null : ctx_r911.detailView.user == null ? null : ctx_r911.detailView.user.Phone == null ? null : ctx_r911.detailView.user.Phone.internationalNumber);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r911.detailView.user.Email);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", ctx_r911.detailView.categories);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r911.detailView.categories);
} }
var OnboardingDetailComponent = /** @class */ (function () {
    function OnboardingDetailComponent() {
        this.onShowMode = new EventEmitter(true);
    }
    OnboardingDetailComponent.prototype.ngOnInit = function () { };
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
    OnboardingDetailComponent.ɵfac = function OnboardingDetailComponent_Factory(t) { return new (t || OnboardingDetailComponent)(); };
    OnboardingDetailComponent.ɵcmp = i0.ɵɵdefineComponent({ type: OnboardingDetailComponent, selectors: [["lib-onboarding-detail"]], hostBindings: function OnboardingDetailComponent_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("scroll", function OnboardingDetailComponent_scroll_HostBindingHandler($event) { return ctx.onScroll($event); });
        } }, inputs: { detailView: "detailView" }, outputs: { onShowMode: "onShowMode" }, decls: 1, vars: 1, consts: [["class", "onboarding-detail", 4, "ngIf"], [1, "onboarding-detail"], [1, "title"], [2, "margin-left", "20px", "cursor", "pointer", 3, "click"], [1, "view-content"], [1, "left-content"], [1, "user-info"], [1, "user-name"], [1, "user-contact"], ["id", "fields", 1, "fields"], ["class", "menu-item", 3, "ngxScrollTo", "class", "id", 4, "ngFor", "ngForOf"], [1, "category-view-container", 3, "scroll"], ["class", "category-item", 3, "id", 4, "ngFor", "ngForOf"], [1, "right-content"], [1, "subtitle"], [1, "box-ticket-info"], [1, "date"], [1, "box-header"], ["mat-button", "", 1, "progress"], [1, "description"], ["mat-button", "", 1, "finished"], [1, "menu-item", 3, "ngxScrollTo", "id"], [1, "category-item", 3, "id"], [1, "category-item-inner"], [1, "category-header"], [1, "title-content"], [1, "category-description"], [1, "progress-status"], ["class", "status in-progress", 4, "ngIf"], ["class", "status progress-bar", 4, "ngIf"], ["class", "category-item-forms", 4, "ngFor", "ngForOf"], [1, "status", "in-progress"], [1, "status", "progress-bar"], [2, "width", "300px"], ["mode", "determinate", 3, "value"], [1, "category-item-forms"], [4, "ngIf"], [1, "label"]], template: function OnboardingDetailComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, OnboardingDetailComponent_div_0_Template, 67, 11, "div", 0);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.detailView);
        } }, directives: [i1.NgIf, i2.MatIcon, i1.NgForOf, i3.MatButton, i4.ScrollToDirective, i5.LoadingComponent, i6.MatProgressBar], pipes: [i1.DatePipe], styles: [".onboarding-detail[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .onboarding-detail[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .onboarding-detail[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .onboarding-detail[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], .onboarding-detail[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%], .onboarding-detail[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]{margin:0;font-family:Nexa;font-style:normal;font-weight:700;line-height:110%;display:flex;align-items:center;color:#242731}.onboarding-detail[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0}.onboarding-detail[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:24px}.onboarding-detail[_ngcontent-%COMP%]   h1.title[_ngcontent-%COMP%]{margin-bottom:33px;margin-top:10px}.onboarding-detail[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:20px}.onboarding-detail[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-size:16px}.onboarding-detail[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{font-size:14px}.onboarding-detail[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]{font-size:12px}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-between;background-color:#f4f7f9}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]{width:70%;border-radius:6px}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-between;height:90px;background:#fff;border-radius:6px;padding:10px;align-items:center}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .user-name[_ngcontent-%COMP%]{text-align:left;line-height:30px}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .user-contact[_ngcontent-%COMP%]{line-height:30px;text-align:right}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]{background:#fff;border-radius:8px;padding:15px;margin-bottom:30px}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   .category-item-inner[_ngcontent-%COMP%]   .category-description[_ngcontent-%COMP%]{font-family:Nexa;font-style:normal;font-weight:250;font-size:14px;line-height:16px;color:#575f6e;margin-top:5px}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   .category-item-inner[_ngcontent-%COMP%]   .category-item-forms[_ngcontent-%COMP%]{margin-top:20px}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   .category-item-inner[_ngcontent-%COMP%]   .category-item-forms[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]{font-family:Nexa;font-style:normal;font-weight:250;font-size:12px;line-height:16px;display:flex;align-items:center;color:#575f6e}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .right-content[_ngcontent-%COMP%]{width:25%;background-color:#fff;border-radius:6px;padding:15px;overflow:auto;max-height:85.5vh;margin-right:20px}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .right-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#575f6e}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .right-content[_ngcontent-%COMP%]   .box-ticket-info[_ngcontent-%COMP%]{padding-bottom:20px;padding-top:20px;border-bottom:2px solid #e2e4e5}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .right-content[_ngcontent-%COMP%]   .box-ticket-info[_ngcontent-%COMP%]   .box-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;margin-bottom:20px}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .right-content[_ngcontent-%COMP%]   .box-ticket-info[_ngcontent-%COMP%]   .box-header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:103px;height:36px;border-radius:4px;font-family:Nexa;font-weight:500;font-size:16px;display:flex;align-items:center;text-transform:capitalize;color:#fff}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .right-content[_ngcontent-%COMP%]   .box-ticket-info[_ngcontent-%COMP%]   .box-header[_ngcontent-%COMP%]   .finished[_ngcontent-%COMP%]{background:#6fe8d7}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .right-content[_ngcontent-%COMP%]   .box-ticket-info[_ngcontent-%COMP%]   .box-header[_ngcontent-%COMP%]   .progress[_ngcontent-%COMP%]{background:#f3a124}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .category-view-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;max-height:70vh;overflow:auto}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .category-view-container[_ngcontent-%COMP%]::-webkit-scrollbar, .onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .right-content[_ngcontent-%COMP%]::-webkit-scrollbar{display:none}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .category-view-container[_ngcontent-%COMP%], .onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .right-content[_ngcontent-%COMP%]{-ms-overflow-style:none;scrollbar-width:none}.fields[_ngcontent-%COMP%]{height:84%}.fields[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style:none;display:flex;margin:33px 0;padding:0}.fields[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin-right:20px;padding-bottom:5px;border-bottom:3px solid transparent}.fields[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none;font-family:Nexa;font-style:normal;font-weight:700;font-size:14px;line-height:120%;color:#171f26;opacity:.5}.fields[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.menu-item.active[_ngcontent-%COMP%], .fields[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.menu-item[_ngcontent-%COMP%]:hover{cursor:pointer;border-bottom:3px solid #3c4252}.fields[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.menu-item.active[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .fields[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.menu-item[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%]{font-family:Nexa;font-style:normal;font-weight:700;font-size:14px;line-height:120%;opacity:1;text-decoration:none!important}.progress-status[_ngcontent-%COMP%]   .status[_ngcontent-%COMP%]{display:flex;align-items:center}.progress-status[_ngcontent-%COMP%]   .ongoing[_ngcontent-%COMP%]{color:#6fe8d7}.progress-status[_ngcontent-%COMP%]   .in-progress[_ngcontent-%COMP%]{padding-right:25px;color:#f3a124;font-weight:500;font-size:16px}  .progress-status{font-size:16px}  .progress-status .mat-progress-bar{display:block;height:20px;overflow:hidden;border-radius:50px;position:relative;transition:opacity 250ms linear;width:100%}  .progress-status .mat-progress-bar-fill::after{background-color:#6fe8d7}  .progress-status .mat-progress-bar-buffer{background-color:#ecf3f7}.category-header[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between}"] });
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
    }], function () { return []; }, { detailView: [{
            type: Input
        }], onShowMode: [{
            type: Output
        }], onScroll: [{
            type: HostListener,
            args: ['scroll', ['$event']]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib25ib2FyZGluZy1kZXRhaWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vb25ib2FyZGluZy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL29uYm9hcmRpbmcvb25ib2FyZGluZy1kZXRhaWwvb25ib2FyZGluZy1kZXRhaWwuY29tcG9uZW50LnRzIiwibGliL2NvbXBvbmVudHMvb25ib2FyZGluZy9vbmJvYXJkaW5nLWRldGFpbC9vbmJvYXJkaW5nLWRldGFpbC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7O0lDb0J6RSw4QkFFSTtJQUFBLHlCQUFHO0lBQUEsWUFBaUI7SUFBQSxpQkFBSTtJQUM1QixpQkFBSzs7OztJQUhtRCwyQ0FBNkI7SUFBakYsc0RBQWlDLGdDQUFBO0lBRTlCLGVBQWlCO0lBQWpCLHdDQUFpQjs7O0lBa0JSLCtCQUVJO0lBQUEsNEJBQU07SUFBQSxzQ0FBc0I7SUFBQSxpQkFBTztJQUNuQyw4QkFBMkI7SUFDL0IsaUJBQU07OztJQU1OLCtCQUVJO0lBQUEsZ0NBQTRCO0lBQUEsWUFDUztJQUFBLGlCQUFPO0lBQzVDLHVDQUVtQjtJQUN2QixpQkFBTTs7OztJQUwwQixlQUNTO0lBRFQscUxBQ1M7SUFFakMsZUFBb0U7SUFBcEUsZ0tBQW9FOzs7SUFNaEYsNkJBQ0k7SUFBQSw2QkFBaUI7SUFBQSxZQUFlO0lBQUEsaUJBQUk7SUFDcEMsMEJBQUk7SUFBQSxZQUFlO0lBQUEsaUJBQUs7SUFDNUIsMEJBQWU7OztJQUZNLGVBQWU7SUFBZixzQ0FBZTtJQUM1QixlQUFlO0lBQWYsc0NBQWU7OztJQUtmLDZCQUNJO0lBQUEsNkJBQWlCO0lBQUEsWUFBYTtJQUFBLGlCQUFJO0lBQ2xDLDBCQUFJO0lBQUEsWUFBYTtJQUFBLGlCQUFLO0lBQzFCLDBC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R0FBRyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDOUMsT0FBTyxNQUFNLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLGlCQUFpQixFQUFFLENBQUMsQ0FBQTtJQUM5RCxDQUFDO0lBQ0QsMENBQU0sR0FBTjtRQUNFLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFBO0lBQzdCLENBQUM7SUFFRCw0Q0FBUSxHQUFSLFVBQVMsU0FBUyxFQUFFLE1BQU07UUFDeEIsT0FBTyxHQUFHLEdBQUcsU0FBUyxHQUFHLE1BQU0sQ0FBQTtJQUNqQyxDQUFDO3NHQXRDVSx5QkFBeUI7a0VBQXpCLHlCQUF5Qjs7O1lDUHRDLDRFQUNJOztZQUQyQixxQ0FBa0I7O29DREFqRDtDQStDQyxBQTdDRCxJQTZDQztTQXhDWSx5QkFBeUI7a0RBQXpCLHlCQUF5QjtjQUxyQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLHVCQUF1QjtnQkFDakMsV0FBVyxFQUFFLG9DQUFvQztnQkFDakQsU0FBUyxFQUFFLENBQUMsb0NBQW9DLENBQUM7YUFDbEQ7O2tCQUVFLEtBQUs7O2tCQUNMLE1BQU07O2tCQUlOLFlBQVk7bUJBQUMsUUFBUSxFQUFFLENBQUMsUUFBUSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIEhvc3RMaXN0ZW5lciwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1vbmJvYXJkaW5nLWRldGFpbCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9vbmJvYXJkaW5nLWRldGFpbC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL29uYm9hcmRpbmctZGV0YWlsLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgT25ib2FyZGluZ0RldGFpbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIGRldGFpbFZpZXc7XG4gIEBPdXRwdXQoKSBvblNob3dNb2RlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPih0cnVlKTtcbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHsgfVxuICBASG9zdExpc3RlbmVyKCdzY3JvbGwnLCBbJyRldmVudCddKVxuICBvblNjcm9sbChldmVudCkge1xuICAgIGNvbnN0IHNlY3Rpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcInNlY3Rpb25cIik7XG4gICAgY29uc3QgbmF2TGkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmZpZWxkcyB1bCBsaVwiKTtcblxuICAgIGxldCBjdXJyZW50ID0gXCJcIjtcbiAgICBzZWN0aW9ucy5mb3JFYWNoKChzZWN0aW9uKSA9PiB7XG4gICAgICBjb25zdCBzZWN0aW9uVG9wID0gc2VjdGlvbi5vZmZzZXRUb3A7XG4gICAgICBpZiAoZXZlbnQudGFyZ2V0LnNjcm9sbFRvcCA+IHNlY3Rpb25Ub3AgLSAzMDApIHtcbiAgICAgICAgY3VycmVudCA9IHNlY3Rpb24uZ2V0QXR0cmlidXRlKFwiaWRcIilcbiAgICAgIH1cbiAgICB9KTtcbiAgICBuYXZMaS5mb3JFYWNoKChsaSkgPT4ge1xuICAgICAgY29uc3QgaWQgPSBsaS5nZXRBdHRyaWJ1dGUoJ2lkJylcbiAgICAgIGlmIChpZC5zdWJzdHJpbmcoMCwgaWQubGVuZ3RoIC0gMSkgPT09IGN1cnJlbnQpIHtcbiAgICAgICAgbGkuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxpLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBjYXROYW1lU3RhcnQoc3RyOiBzdHJpbmcpIHtcbiAgICBjb25zdCB2b3dlbHMgPSBbJ2EnLCAnZScsICdpJywgJ28nLCAndScsICd5J107XG4gICAgcmV0dXJuIHZvd2Vscy5pbmNsdWRlcyhzdHIuc3Vic3RyKDAsIDEpLnRvTG9jYWxlTG93ZXJDYXNlKCkpXG4gIH1cbiAgb25FZGl0KCkge1xuICAgIHRoaXMub25TaG93TW9kZS5lbWl0KGZhbHNlKVxuICB9XG5cbiAgcHJvZ3Jlc3MoY29tcGxldGVkLCBsZW5ndGgpIHtcbiAgICByZXR1cm4gMTAwICogY29tcGxldGVkIC8gbGVuZ3RoXG4gIH1cblxufVxuIiwiPGRpdiBjbGFzcz1cIm9uYm9hcmRpbmctZGV0YWlsXCIgKm5nSWY9XCJkZXRhaWxWaWV3XCI+XG4gICAgPGgxIGNsYXNzPVwidGl0bGVcIj5cbiAgICAgICAgPHA+SW50w6lncmF0aW9uIHByb2ZpbCB7e2RldGFpbFZpZXc/Lk5hbWV9fTwvcD5cbiAgICAgICAgPG1hdC1pY29uIHN0eWxlPVwibWFyZ2luLWxlZnQ6IDIwcHg7IGN1cnNvcjogcG9pbnRlcjtcIiAoY2xpY2spPVwib25FZGl0KClcIj5lZGl0PC9tYXQtaWNvbj5cbiAgICA8L2gxPlxuICAgIDxkaXYgY2xhc3M9XCJ2aWV3LWNvbnRlbnRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImxlZnQtY29udGVudFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInVzZXItaW5mb1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ1c2VyLW5hbWVcIj5cbiAgICAgICAgICAgICAgICAgICAgPGgxPnt7ZGV0YWlsVmlldy51c2VyLkZpcnN0TmFtZSB9fSB7e2RldGFpbFZpZXcudXNlci5MYXN0TmFtZSB9fTwvaDE+XG4gICAgICAgICAgICAgICAgICAgIDxwPnt7ZGV0YWlsVmlldy5jcmVhdGVkQXQgfCBkYXRlOidkZC9NTS95eScgfX08L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInVzZXItY29udGFjdFwiPlxuICAgICAgICAgICAgICAgICAgICA8cD57e2RldGFpbFZpZXc/LnVzZXI/LlBob25lPy5pbnRlcm5hdGlvbmFsTnVtYmVyIH19PC9wPlxuICAgICAgICAgICAgICAgICAgICA8cD57e2RldGFpbFZpZXcudXNlci5FbWFpbCB9fTwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGlkPVwiZmllbGRzXCIgY2xhc3M9XCJmaWVsZHNcIj5cbiAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgIDxsaSBbbmd4U2Nyb2xsVG9dPVwiJyMnK2NhdGVnb3J5Lm5hbWVcIiBjbGFzcz1cIm1lbnUtaXRlbVwiIFtjbGFzc109XCJpPT09MCA/ICdhY3RpdmUnOicnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICpuZ0Zvcj1cImxldCBjYXRlZ29yeSBvZiBkZXRhaWxWaWV3LmNhdGVnb3JpZXM7ICBsZXQgaT1pbmRleFwiIFtpZF09XCJjYXRlZ29yeS5uYW1lKyd4J1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGE+e3tjYXRlZ29yeS5uYW1lfX08L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2F0ZWdvcnktdmlldy1jb250YWluZXJcIiAoc2Nyb2xsKT1cIm9uU2Nyb2xsKCRldmVudClcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3M9XCJjYXRlZ29yeS1pdGVtXCIgKm5nRm9yPVwibGV0IGNhdGVnb3J5IG9mIGRldGFpbFZpZXcuY2F0ZWdvcmllczsgIGxldCBpPWluZGV4XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtpZF09XCJjYXRlZ29yeS5uYW1lXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2F0ZWdvcnktaXRlbS1pbm5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXRlZ29yeS1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRpdGxlLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMj57e2NhdGVnb3J5Lm5hbWV9fTwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImNhdGVnb3J5LWRlc2NyaXB0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTGlzdGVzIGRlcyBpbmZvcm1hdGlvbnMgbsOpY2Vzc2FpcmVzIHBvdXIgbGEgY3LDqWF0aW9uIGRlIHt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2F0TmFtZVN0YXJ0KGNhdGVnb3J5Lm5hbWUpID8gXCJsJ1wiICsgY2F0ZWdvcnkubmFtZSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnkubmFtZSB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByb2dyZXNzLXN0YXR1c1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSB7e2NhdGVnb3J5Py5maWVsZENvbXBsZXRlZH19IC8ge3tjYXRlZ29yeT8uZmllbGRMZW5ndGh9fSAtLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgKm5nSWY9XCJjYXRlZ29yeT8uZmllbGRDb21wbGV0ZWQ9PT1jYXRlZ29yeT8uZmllbGRMZW5ndGhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwic3RhdHVzIGluLXByb2dyZXNzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+RW4gY291cnMgZGUgdHJhaXRlbWVudDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGliLWxvYWRpbmc+PC9saWItbG9hZGluZz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSA8ZGl2ICpuZ0lmPVwiY2F0ZWdvcnk/LmZpZWxkQ29tcGxldGVkID09PWNhdGVnb3J5Py5maWVsZExlbmd0aFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJzdGF0dXMgb25nb2luZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPVwibWFyZ2luLXJpZ2h0OiAxMHB4O1wiPkVuIGNvdXJzPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxtYXQtaWNvbj5jaGVjazwvbWF0LWljb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gLS0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2ICpuZ0lmPVwiY2F0ZWdvcnk/LmZpZWxkQ29tcGxldGVkIDwgY2F0ZWdvcnk/LmZpZWxkTGVuZ3RoXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInN0YXR1cyBwcm9ncmVzcy1iYXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT1cIndpZHRoOiAzMDBweDtcIj57e3Byb2dyZXNzKGNhdGVnb3J5Py5maWVsZENvbXBsZXRlZCAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5Py5maWVsZExlbmd0aCl9fSUgVGVybWluw6k8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG1hdC1wcm9ncmVzcy1iYXIgbW9kZT1cImRldGVybWluYXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3ZhbHVlXT1cInByb2dyZXNzKGNhdGVnb3J5Py5maWVsZENvbXBsZXRlZCAsIGNhdGVnb3J5Py5maWVsZExlbmd0aClcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L21hdC1wcm9ncmVzcy1iYXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhdGVnb3J5LWl0ZW0tZm9ybXNcIiAqbmdGb3I9XCJsZXQgZm9ybXMgb2YgY2F0ZWdvcnkuZm9ybXNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFmb3Jtcy5mb3Jtc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJsYWJlbFwiPnt7Zm9ybXMubGFiZWx9fTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoND57e2Zvcm1zLnZhbHVlfX08L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImZvcm1zLmZvcm1zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+e3tmb3Jtcy5sYWJlbH19PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXRlZ29yeS1pdGVtLWZvcm1zXCIgKm5nRm9yPVwibGV0IHN1YiBvZiBmb3Jtcy5mb3Jtc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhc3ViLmZvcm1zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwibGFiZWxcIj57e3N1Yi5sYWJlbH19PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQ+e3tzdWIudmFsdWV9fTwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cInN1Yi5mb3Jtc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQ+e3tzdWIubGFiZWx9fTwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXRlZ29yeS1pdGVtLWZvcm1zXCIgKm5nRm9yPVwibGV0IGNoaWxkIG9mIHN1Yi5mb3Jtc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFjaGlsZC5mb3Jtc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwibGFiZWxcIj57e2NoaWxkLmxhYmVsfX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0Pnt7Y2hpbGQudmFsdWV9fTwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJjaGlsZC5mb3Jtc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNT57e2NoaWxkLmxhYmVsfX08L2g1PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXRlZ29yeS1pdGVtLWZvcm1zXCIgKm5nRm9yPVwibGV0IGMyIG9mIGNoaWxkLmZvcm1zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwibGFiZWxcIj57e2MyLmxhYmVsfX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoND57e2MyLnZhbHVlfX08L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInJpZ2h0LWNvbnRlbnRcIj5cbiAgICAgICAgICAgIDxoMT5UaWNrZXRzIGxpw6lzIMOgIHZvdHJlIGRlbWFuZGU8L2gxPlxuICAgICAgICAgICAgPHAgY2xhc3M9XCJzdWJ0aXRsZVwiPlZvdXMgcmV0cm91dmVyZXogaWNpIHRvdXMgbGVzIHRpY2tldHMgY3LDqcOpcyBsb3JzIGRlIGxhIGNyw6lhdGlvbiBkZSB2b3RyZSBmaWNoZVxuICAgICAgICAgICAgICAgIGTigJlpbnTDqWdyYXRpb24uPC9wPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJveC10aWNrZXQtaW5mb1wiPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiZGF0ZVwiPjAxLzAxLzIyPC9wPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJib3gtaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMj5Ob20gdGlja2V0PC9oMj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBtYXQtYnV0dG9uIGNsYXNzPVwicHJvZ3Jlc3NcIj5FbiBjb3VyczwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiZGVzY3JpcHRpb25cIj5Mb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LCBzZWQgZG8gZWl1c21vZCB0ZW1wb3JcbiAgICAgICAgICAgICAgICAgICAgaW5jaWRpZHVudCB1dCBsYWJvcmVcbiAgICAgICAgICAgICAgICAgICAgZXQgZG9sb3JlIG1hZ25hXG4gICAgICAgICAgICAgICAgICAgIGFsaXF1YS4gVXQgZW5pbSBhZCBtaW5pbSB2ZW5pYW0sIHF1aXMgbm9zdHJ1ZCBleGVyY2l0YXRpb24gdWxsYW1jbyBsYWJvcmlzIG5pc2kgdXQgYWxpcXVpcCBleCBlYVxuICAgICAgICAgICAgICAgICAgICBjb21tb2RvIGNvbnNlcXVhdC48L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJib3gtdGlja2V0LWluZm9cIj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImRhdGVcIj4wMS8wMS8yMjwvcD5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYm94LWhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8aDI+Tm9tIHRpY2tldDwvaDI+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gbWF0LWJ1dHRvbiBjbGFzcz1cInByb2dyZXNzXCI+VGVybWluw6llPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJkZXNjcmlwdGlvblwiPkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kIHRlbXBvclxuICAgICAgICAgICAgICAgICAgICBpbmNpZGlkdW50IHV0IGxhYm9yZVxuICAgICAgICAgICAgICAgICAgICBldCBkb2xvcmUgbWFnbmFcbiAgICAgICAgICAgICAgICAgICAgYWxpcXVhLiBVdCBlbmltIGFkIG1pbmltIHZlbmlhbSwgcXVpcyBub3N0cnVkIGV4ZXJjaXRhdGlvbiB1bGxhbWNvIGxhYm9yaXMgbmlzaSB1dCBhbGlxdWlwIGV4IGVhXG4gICAgICAgICAgICAgICAgICAgIGNvbW1vZG8gY29uc2VxdWF0LjwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJveC10aWNrZXQtaW5mb1wiPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiZGF0ZVwiPjAxLzAxLzIyPC9wPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJib3gtaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMj5Ob20gdGlja2V0PC9oMj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBtYXQtYnV0dG9uIGNsYXNzPVwiZmluaXNoZWRcIj5UZXJtaW7DqWU8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImRlc2NyaXB0aW9uXCI+TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCwgc2VkIGRvIGVpdXNtb2QgdGVtcG9yXG4gICAgICAgICAgICAgICAgICAgIGluY2lkaWR1bnQgdXQgbGFib3JlXG4gICAgICAgICAgICAgICAgICAgIGV0IGRvbG9yZSBtYWduYVxuICAgICAgICAgICAgICAgICAgICBhbGlxdWEuIFV0IGVuaW0gYWQgbWluaW0gdmVuaWFtLCBxdWlzIG5vc3RydWQgZXhlcmNpdGF0aW9uIHVsbGFtY28gbGFib3JpcyBuaXNpIHV0IGFsaXF1aXAgZXggZWFcbiAgICAgICAgICAgICAgICAgICAgY29tbW9kbyBjb25zZXF1YXQuPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYm94LXRpY2tldC1pbmZvXCI+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJkYXRlXCI+MDEvMDEvMjI8L3A+XG4gICAgICAgICAgICAgICAgPGgyPk5vbSB0aWNrZXQ8L2gyPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiZGVzY3JpcHRpb25cIj5Mb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LCBzZWQgZG8gZWl1c21vZCB0ZW1wb3JcbiAgICAgICAgICAgICAgICAgICAgaW5jaWRpZHVudCB1dCBsYWJvcmVcbiAgICAgICAgICAgICAgICAgICAgZXQgZG9sb3JlIG1hZ25hXG4gICAgICAgICAgICAgICAgICAgIGFsaXF1YS4gVXQgZW5pbSBhZCBtaW5pbSB2ZW5pYW0sIHF1aXMgbm9zdHJ1ZCBleGVyY2l0YXRpb24gdWxsYW1jbyBsYWJvcmlzIG5pc2kgdXQgYWxpcXVpcCBleCBlYVxuICAgICAgICAgICAgICAgICAgICBjb21tb2RvIGNvbnNlcXVhdC48L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG48L2Rpdj4iXX0=