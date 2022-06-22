import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "../../../onboarding.service";
import * as i3 from "@angular/common";
import * as i4 from "@angular/material/icon";
import * as i5 from "@nicky-lenaers/ngx-scroll-to";
import * as i6 from "@angular/material/progress-bar";
import * as i7 from "@angular/material/button";
function OnboardingDetailComponent_div_0_li_22_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li", 19);
    i0.ɵɵelementStart(1, "a");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var category_r937 = ctx.$implicit;
    var i_r938 = ctx.index;
    i0.ɵɵclassMap(i_r938 === 0 ? "active" : "");
    i0.ɵɵproperty("ngxScrollTo", "#" + category_r937.name)("id", category_r937.name + "x");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(category_r937.name);
} }
function OnboardingDetailComponent_div_0_section_24_div_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 28);
    i0.ɵɵelementStart(1, "span", 29);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(3, "mat-progress-bar", 30);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var category_r939 = i0.ɵɵnextContext().$implicit;
    var ctx_r941 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", ctx_r941.progress(category_r939 == null ? null : category_r939.fieldCompleted, category_r939 == null ? null : category_r939.fieldLength), "% Termin\u00E9");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("value", ctx_r941.progress(category_r939 == null ? null : category_r939.fieldCompleted, category_r939 == null ? null : category_r939.fieldLength));
} }
function OnboardingDetailComponent_div_0_section_24_div_10_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "p", 32);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "h4");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var forms_r944 = i0.ɵɵnextContext().$implicit;
    var ctx_r945 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(forms_r944.label);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", ctx_r945.onFormatDisplayValue(forms_r944.value), " ");
} }
function OnboardingDetailComponent_div_0_section_24_div_10_ng_container_2_div_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "p", 32);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "h4");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var sub_r949 = i0.ɵɵnextContext().$implicit;
    var ctx_r950 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(sub_r949.label);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r950.onFormatDisplayValue(sub_r949.value));
} }
function OnboardingDetailComponent_div_0_section_24_div_10_ng_container_2_div_3_ng_container_2_div_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "p", 32);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "h4");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var child_r954 = i0.ɵɵnextContext().$implicit;
    var ctx_r955 = i0.ɵɵnextContext(7);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(child_r954.label);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r955.onFormatDisplayValue(child_r954.value));
} }
function OnboardingDetailComponent_div_0_section_24_div_10_ng_container_2_div_3_ng_container_2_div_3_ng_container_2_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 31);
    i0.ɵɵelementStart(1, "p", 32);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "h4");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var c2_r959 = ctx.$implicit;
    var ctx_r958 = i0.ɵɵnextContext(9);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(c2_r959.label);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r958.onFormatDisplayValue(c2_r959.value));
} }
function OnboardingDetailComponent_div_0_section_24_div_10_ng_container_2_div_3_ng_container_2_div_3_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "h3");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, OnboardingDetailComponent_div_0_section_24_div_10_ng_container_2_div_3_ng_container_2_div_3_ng_container_2_div_3_Template, 5, 2, "div", 27);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var child_r954 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(child_r954.label);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", child_r954.forms);
} }
function OnboardingDetailComponent_div_0_section_24_div_10_ng_container_2_div_3_ng_container_2_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 31);
    i0.ɵɵtemplate(1, OnboardingDetailComponent_div_0_section_24_div_10_ng_container_2_div_3_ng_container_2_div_3_ng_container_1_Template, 5, 2, "ng-container", 17);
    i0.ɵɵtemplate(2, OnboardingDetailComponent_div_0_section_24_div_10_ng_container_2_div_3_ng_container_2_div_3_ng_container_2_Template, 4, 2, "ng-container", 17);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var child_r954 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !child_r954.forms);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", child_r954.forms);
} }
function OnboardingDetailComponent_div_0_section_24_div_10_ng_container_2_div_3_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "h3");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, OnboardingDetailComponent_div_0_section_24_div_10_ng_container_2_div_3_ng_container_2_div_3_Template, 3, 2, "div", 27);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var sub_r949 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(sub_r949.label);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", sub_r949.forms);
} }
function OnboardingDetailComponent_div_0_section_24_div_10_ng_container_2_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 31);
    i0.ɵɵtemplate(1, OnboardingDetailComponent_div_0_section_24_div_10_ng_container_2_div_3_ng_container_1_Template, 5, 2, "ng-container", 17);
    i0.ɵɵtemplate(2, OnboardingDetailComponent_div_0_section_24_div_10_ng_container_2_div_3_ng_container_2_Template, 4, 2, "ng-container", 17);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var sub_r949 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !sub_r949.forms);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", sub_r949.forms);
} }
function OnboardingDetailComponent_div_0_section_24_div_10_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "h3");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, OnboardingDetailComponent_div_0_section_24_div_10_ng_container_2_div_3_Template, 3, 2, "div", 27);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var forms_r944 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(forms_r944.label);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", forms_r944.forms);
} }
function OnboardingDetailComponent_div_0_section_24_div_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 31);
    i0.ɵɵtemplate(1, OnboardingDetailComponent_div_0_section_24_div_10_ng_container_1_Template, 5, 2, "ng-container", 17);
    i0.ɵɵtemplate(2, OnboardingDetailComponent_div_0_section_24_div_10_ng_container_2_Template, 4, 2, "ng-container", 17);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var forms_r944 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !forms_r944.forms);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", forms_r944.forms);
} }
function OnboardingDetailComponent_div_0_section_24_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 20);
    i0.ɵɵelementStart(1, "div", 21);
    i0.ɵɵelementStart(2, "div", 22);
    i0.ɵɵelementStart(3, "div", 23);
    i0.ɵɵelementStart(4, "h2");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "p", 24);
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "div", 25);
    i0.ɵɵtemplate(9, OnboardingDetailComponent_div_0_section_24_div_9_Template, 4, 2, "div", 26);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(10, OnboardingDetailComponent_div_0_section_24_div_10_Template, 3, 2, "div", 27);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var category_r939 = ctx.$implicit;
    var ctx_r934 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("id", category_r939.name);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(category_r939.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" Listes des informations n\u00E9cessaires pour la cr\u00E9ation de ", ctx_r934.catNameStart(category_r939.name) ? "l'" + category_r939.name : category_r939.name, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", (category_r939 == null ? null : category_r939.fieldCompleted) < (category_r939 == null ? null : category_r939.fieldLength));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", category_r939.forms);
} }
function OnboardingDetailComponent_div_0_ng_container_32_div_1_Template(rf, ctx) { if (rf & 1) {
    var _r966 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 34);
    i0.ɵɵelementStart(1, "p", 35);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "date");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 36);
    i0.ɵɵelementStart(5, "h3");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "button", 37);
    i0.ɵɵlistener("click", function OnboardingDetailComponent_div_0_ng_container_32_div_1_Template_button_click_7_listener() { i0.ɵɵrestoreView(_r966); var ticket_r964 = ctx.$implicit; var ctx_r965 = i0.ɵɵnextContext(3); return ctx_r965.onViewTicket(ticket_r964.CaseNumber); });
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "p", 38);
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ticket_r964 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(3, 4, ticket_r964.CreatedDate, "dd/MM/yy"));
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ticket_r964.Subject);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ticket_r964.Status);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ticket_r964.Description);
} }
function OnboardingDetailComponent_div_0_ng_container_32_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, OnboardingDetailComponent_div_0_ng_container_32_div_1_Template, 11, 7, "div", 33);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r935 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r935.detailView.tickets);
} }
function OnboardingDetailComponent_div_0_div_33_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 34);
    i0.ɵɵelementStart(1, "p", 38);
    i0.ɵɵtext(2, "\"Aucun tickets\"");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
function OnboardingDetailComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    var _r968 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 1);
    i0.ɵɵelementStart(1, "h1", 2);
    i0.ɵɵelementStart(2, "p");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "mat-icon", 3);
    i0.ɵɵlistener("click", function OnboardingDetailComponent_div_0_Template_mat_icon_click_4_listener() { i0.ɵɵrestoreView(_r968); var ctx_r967 = i0.ɵɵnextContext(); return ctx_r967.onEdit(); });
    i0.ɵɵtext(5, "edit");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "div", 4);
    i0.ɵɵelementStart(7, "div", 5);
    i0.ɵɵelementStart(8, "div", 6);
    i0.ɵɵelementStart(9, "div", 7);
    i0.ɵɵelementStart(10, "h2");
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
    i0.ɵɵlistener("scroll", function OnboardingDetailComponent_div_0_Template_div_scroll_23_listener($event) { i0.ɵɵrestoreView(_r968); var ctx_r969 = i0.ɵɵnextContext(); return ctx_r969.onScroll($event); });
    i0.ɵɵtemplate(24, OnboardingDetailComponent_div_0_section_24_Template, 11, 5, "section", 12);
    i0.ɵɵelementStart(25, "section", 13);
    i0.ɵɵelement(26, "div", 14);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(27, "div", 15);
    i0.ɵɵelementStart(28, "h2");
    i0.ɵɵtext(29, "Tickets li\u00E9s \u00E0 votre demande");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(30, "p", 16);
    i0.ɵɵtext(31, "Vous retrouverez ici tous les tickets cr\u00E9\u00E9s lors de la cr\u00E9ation de votre fiche d\u2019int\u00E9gration.");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(32, OnboardingDetailComponent_div_0_ng_container_32_Template, 2, 1, "ng-container", 17);
    i0.ɵɵtemplate(33, OnboardingDetailComponent_div_0_div_33_Template, 3, 0, "div", 18);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r932 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("Int\u00E9gration profil ", ctx_r932.detailView == null ? null : ctx_r932.detailView.Name, "");
    i0.ɵɵadvance(8);
    i0.ɵɵtextInterpolate2("", ctx_r932.detailView.user.FirstName, " ", ctx_r932.detailView.user.LastName, "");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(14, 10, ctx_r932.detailView.createdAt, "dd/MM/yy"));
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r932.detailView == null ? null : ctx_r932.detailView.user == null ? null : ctx_r932.detailView.user.Phone == null ? null : ctx_r932.detailView.user.Phone.internationalNumber);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r932.detailView.user.Email);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", ctx_r932.detailView.categories);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r932.detailView.categories);
    i0.ɵɵadvance(8);
    i0.ɵɵproperty("ngIf", ctx_r932.detailView.tickets && ctx_r932.detailView.tickets.length > 0);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r932.detailView.tickets);
} }
var OnboardingDetailComponent = /** @class */ (function () {
    function OnboardingDetailComponent(router, service) {
        this.router = router;
        this.service = service;
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
    OnboardingDetailComponent.prototype.onViewTicket = function (CaseNumber) {
        this.router.navigate(["ticket/" + CaseNumber]);
    };
    OnboardingDetailComponent.prototype.onFormatDisplayValue = function (value) {
        return value === true ? 'Oui' : value === false ? 'Non' : value;
    };
    OnboardingDetailComponent.ɵfac = function OnboardingDetailComponent_Factory(t) { return new (t || OnboardingDetailComponent)(i0.ɵɵdirectiveInject(i1.Router), i0.ɵɵdirectiveInject(i2.OnboardingService)); };
    OnboardingDetailComponent.ɵcmp = i0.ɵɵdefineComponent({ type: OnboardingDetailComponent, selectors: [["lib-onboarding-detail"]], hostBindings: function OnboardingDetailComponent_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("scroll", function OnboardingDetailComponent_scroll_HostBindingHandler($event) { return ctx.onScroll($event); });
        } }, inputs: { detailView: "detailView" }, outputs: { onShowMode: "onShowMode" }, decls: 1, vars: 1, consts: [["class", "onboarding-detail", 4, "ngIf"], [1, "onboarding-detail"], [1, "title"], [2, "margin-left", "20px", "cursor", "pointer", 3, "click"], [1, "view-content"], [1, "left-content"], [1, "user-info"], [1, "user-name"], [1, "user-contact"], ["id", "fields", 1, "fields"], ["class", "menu-item", 3, "ngxScrollTo", "class", "id", 4, "ngFor", "ngForOf"], [1, "category-view-container", 3, "scroll"], ["class", "category-item", 3, "id", 4, "ngFor", "ngForOf"], [2, "background-color", "transparent"], [2, "height", "450px"], [1, "right-content"], [1, "subtitle"], [4, "ngIf"], ["class", "box-ticket-info", 4, "ngIf"], [1, "menu-item", 3, "ngxScrollTo", "id"], [1, "category-item", 3, "id"], [1, "category-item-inner"], [1, "category-header"], [1, "title-content"], [1, "category-description"], [1, "progress-status"], ["class", "status progress-bar", 4, "ngIf"], ["class", "category-item-forms", 4, "ngFor", "ngForOf"], [1, "status", "progress-bar"], [2, "width", "300px"], ["mode", "determinate", 3, "value"], [1, "category-item-forms"], [1, "label"], ["class", "box-ticket-info", 4, "ngFor", "ngForOf"], [1, "box-ticket-info"], [1, "date"], [1, "box-header"], ["mat-button", "", 1, "progress", 3, "click"], [1, "description"]], template: function OnboardingDetailComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, OnboardingDetailComponent_div_0_Template, 34, 13, "div", 0);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.detailView);
        } }, directives: [i3.NgIf, i4.MatIcon, i3.NgForOf, i5.ScrollToDirective, i6.MatProgressBar, i7.MatButton], pipes: [i3.DatePipe], styles: [".onboarding-detail[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .onboarding-detail[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .onboarding-detail[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .onboarding-detail[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], .onboarding-detail[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%], .onboarding-detail[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]{margin:0;font-family:Nexa;font-style:normal;font-weight:700;line-height:110%;display:flex;align-items:center;color:#242731}.onboarding-detail[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0}.onboarding-detail[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:24px}.onboarding-detail[_ngcontent-%COMP%]   h1.title[_ngcontent-%COMP%]{margin-bottom:33px;margin-top:10px}.onboarding-detail[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:20px}.onboarding-detail[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:18px}.onboarding-detail[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-size:16px}.onboarding-detail[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{font-size:14px}.onboarding-detail[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]{font-size:12px}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-between;background-color:#f4f7f9}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]{width:70%;border-radius:6px;margin-right:2%}@media (max-width:1200px){.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]{width:50%}}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-between;height:90px;background:#fff;border-radius:6px;padding:10px;align-items:center}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .user-name[_ngcontent-%COMP%]{text-align:left;line-height:30px}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .user-contact[_ngcontent-%COMP%]{line-height:30px;text-align:right}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]{background:#fff;border-radius:8px;padding:15px;margin-bottom:30px}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   .category-item-inner[_ngcontent-%COMP%]   .category-description[_ngcontent-%COMP%]{font-family:Nexa;font-style:normal;font-weight:250;font-size:14px;line-height:16px;color:#575f6e;margin-top:5px}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   .category-item-inner[_ngcontent-%COMP%]   .category-item-forms[_ngcontent-%COMP%]{margin-top:20px}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   .category-item-inner[_ngcontent-%COMP%]   .category-item-forms[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]{font-family:Nexa;font-style:normal;font-weight:250;font-size:12px;line-height:16px;display:flex;align-items:center;color:#575f6e}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .right-content[_ngcontent-%COMP%]{background-color:#fff;border-radius:6px;padding:15px;overflow:auto;max-height:85.5vh;margin-right:20px}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .right-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#575f6e}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .right-content[_ngcontent-%COMP%]   .box-ticket-info[_ngcontent-%COMP%]{padding-bottom:20px;padding-top:20px;border-bottom:2px solid #e2e4e5}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .right-content[_ngcontent-%COMP%]   .box-ticket-info[_ngcontent-%COMP%]   .box-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;margin-bottom:20px}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .right-content[_ngcontent-%COMP%]   .box-ticket-info[_ngcontent-%COMP%]   .box-header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{min-width:auto;height:36px;border-radius:4px;font-family:Nexa;font-weight:500;font-size:16px;display:flex;align-items:center;text-transform:capitalize;color:#fff}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .right-content[_ngcontent-%COMP%]   .box-ticket-info[_ngcontent-%COMP%]   .box-header[_ngcontent-%COMP%]   .finished[_ngcontent-%COMP%]{background:#6fe8d7}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .right-content[_ngcontent-%COMP%]   .box-ticket-info[_ngcontent-%COMP%]   .box-header[_ngcontent-%COMP%]   .progress[_ngcontent-%COMP%]{background:#f3a124}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .category-view-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;max-height:70vh;overflow:auto}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .category-view-container[_ngcontent-%COMP%]::-webkit-scrollbar, .onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .right-content[_ngcontent-%COMP%]::-webkit-scrollbar{display:none}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .category-view-container[_ngcontent-%COMP%], .onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .right-content[_ngcontent-%COMP%]{-ms-overflow-style:none;scrollbar-width:none}.fields[_ngcontent-%COMP%]{height:84%}.fields[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style:none;display:flex;margin:33px 0;padding:0;overflow:auto}.fields[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin-right:20px;padding-bottom:5px;border-bottom:3px solid transparent}.fields[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none;font-family:Nexa;font-style:normal;font-weight:700;font-size:14px;line-height:120%;color:#171f26;opacity:.5;overflow:hidden;display:-webkit-box;-webkit-line-clamp:1;-webkit-box-orient:vertical}.fields[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.menu-item.active[_ngcontent-%COMP%], .fields[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.menu-item[_ngcontent-%COMP%]:hover{cursor:pointer;border-bottom:3px solid #3c4252}.fields[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.menu-item.active[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .fields[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.menu-item[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%]{font-family:Nexa;font-style:normal;font-weight:700;font-size:14px;line-height:120%;opacity:1;text-decoration:none!important}.progress-status[_ngcontent-%COMP%]   .status[_ngcontent-%COMP%]{display:flex;align-items:center}.progress-status[_ngcontent-%COMP%]   .ongoing[_ngcontent-%COMP%]{color:#6fe8d7}.progress-status[_ngcontent-%COMP%]   .in-progress[_ngcontent-%COMP%]{padding-right:25px;color:#f3a124;font-weight:500;font-size:16px}  .progress-status{font-size:16px}  .progress-status .mat-progress-bar{display:block;height:20px;overflow:hidden;border-radius:50px;position:relative;transition:opacity 250ms linear;width:100%}  .progress-status .mat-progress-bar-fill::after{background-color:#6fe8d7}  .progress-status .mat-progress-bar-buffer{background-color:#ecf3f7}.category-header[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between}"] });
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
    }], function () { return [{ type: i1.Router }, { type: i2.OnboardingService }]; }, { detailView: [{
            type: Input
        }], onShowMode: [{
            type: Output
        }], onScroll: [{
            type: HostListener,
            args: ['scroll', ['$event']]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib25ib2FyZGluZy1kZXRhaWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vb25ib2FyZGluZy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL29uYm9hcmRpbmcvb25ib2FyZGluZy1kZXRhaWwvb25ib2FyZGluZy1kZXRhaWwuY29tcG9uZW50LnRzIiwibGliL2NvbXBvbmVudHMvb25ib2FyZGluZy9vbmJvYXJkaW5nLWRldGFpbC9vbmJvYXJkaW5nLWRldGFpbC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7OztJQ29CekUsOEJBRUk7SUFBQSx5QkFBRztJQUFBLFlBQWlCO0lBQUEsaUJBQUk7SUFDNUIsaUJBQUs7Ozs7SUFIbUQsMkNBQTZCO0lBQWpGLHNEQUFpQyxnQ0FBQTtJQUU5QixlQUFpQjtJQUFqQix3Q0FBaUI7OztJQTRCUiwrQkFFSTtJQUFBLGdDQUE0QjtJQUFBLFlBQ1M7SUFBQSxpQkFBTztJQUM1Qyx1Q0FFbUI7SUFDdkIsaUJBQU07Ozs7SUFMMEIsZUFDUztJQURULHFMQUNTO0lBRWpDLGVBQW9FO0lBQXBFLGdLQUFvRTs7O0lBTWhGLDZCQUNJO0lBQUEsNkJBQWlCO0lBQUEsWUFBZTtJQUFBLGlCQUFJO0lBQ3BDLDBCQUFJO0lBQUEsWUFDSjtJQUFBLGlCQUFLO0lBQ1QsMEJBQWU7Ozs7SUFITSxlQUFlO0lBQWYsc0NBQWU7SUFDNUIsZUFDSjtJQURJLCtFQUNKOzs7SUFLSSw2QkFDSTtJQUFBLDZCQUFpQjtJQUFBLFlBQWE7SUFBQSxpQkFBSTtJQUNsQywwQkFBSTtJQUFBLFlBQW1DO0lBQUEsaUJBQUs7SUFDaEQsMEJBQWU7Ozs7SUFGTSxlQUFhO0lBQWIsb0NBQWE7SUFDMUIsZUFBbUM7SUFBbkMsbUVBQW1DOzs7SUFLbkMsNkJBQ0k7SUFB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QixFQUFFLENBQUMsQ0FBQTtJQUM5RCxDQUFDO0lBQ0QsMENBQU0sR0FBTjtRQUNFLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFBO0lBQzdCLENBQUM7SUFFRCw0Q0FBUSxHQUFSLFVBQVMsU0FBUyxFQUFFLE1BQU07UUFDeEIsT0FBTyxHQUFHLEdBQUcsU0FBUyxHQUFHLE1BQU0sQ0FBQTtJQUNqQyxDQUFDO0lBRUQsZ0RBQVksR0FBWixVQUFhLFVBQVU7UUFDckIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxZQUFVLFVBQVksQ0FBQyxDQUFDLENBQUE7SUFDaEQsQ0FBQztJQUVELHdEQUFvQixHQUFwQixVQUFxQixLQUFLO1FBQ3hCLE9BQU8sS0FBSyxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQTtJQUVqRSxDQUFDO3NHQS9DVSx5QkFBeUI7a0VBQXpCLHlCQUF5Qjs7O1lDVnRDLDRFQUNJOztZQUQyQixxQ0FBa0I7O29DREFqRDtDQTJEQyxBQXRERCxJQXNEQztTQWpEWSx5QkFBeUI7a0RBQXpCLHlCQUF5QjtjQUxyQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLHVCQUF1QjtnQkFDakMsV0FBVyxFQUFFLG9DQUFvQztnQkFDakQsU0FBUyxFQUFFLENBQUMsb0NBQW9DLENBQUM7YUFDbEQ7O2tCQUVFLEtBQUs7O2tCQUNMLE1BQU07O2tCQUlOLFlBQVk7bUJBQUMsUUFBUSxFQUFFLENBQUMsUUFBUSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIEhvc3RMaXN0ZW5lciwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE9uYm9hcmRpbmdTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vb25ib2FyZGluZy5zZXJ2aWNlJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1vbmJvYXJkaW5nLWRldGFpbCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9vbmJvYXJkaW5nLWRldGFpbC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL29uYm9hcmRpbmctZGV0YWlsLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgT25ib2FyZGluZ0RldGFpbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIGRldGFpbFZpZXc7XG4gIEBPdXRwdXQoKSBvblNob3dNb2RlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPih0cnVlKTtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBzZXJ2aWNlOiBPbmJvYXJkaW5nU2VydmljZSkgeyB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7IH1cbiAgQEhvc3RMaXN0ZW5lcignc2Nyb2xsJywgWyckZXZlbnQnXSlcbiAgb25TY3JvbGwoZXZlbnQpIHtcbiAgICBjb25zdCBzZWN0aW9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJzZWN0aW9uXCIpO1xuICAgIGNvbnN0IG5hdkxpID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5maWVsZHMgdWwgbGlcIik7XG5cbiAgICBsZXQgY3VycmVudCA9IFwiXCI7XG4gICAgc2VjdGlvbnMuZm9yRWFjaCgoc2VjdGlvbikgPT4ge1xuICAgICAgY29uc3Qgc2VjdGlvblRvcCA9IHNlY3Rpb24ub2Zmc2V0VG9wO1xuICAgICAgaWYgKGV2ZW50LnRhcmdldC5zY3JvbGxUb3AgPiBzZWN0aW9uVG9wIC0gMzAwKSB7XG4gICAgICAgIGN1cnJlbnQgPSBzZWN0aW9uLmdldEF0dHJpYnV0ZShcImlkXCIpXG4gICAgICB9XG4gICAgfSk7XG4gICAgbmF2TGkuZm9yRWFjaCgobGkpID0+IHtcbiAgICAgIGNvbnN0IGlkID0gbGkuZ2V0QXR0cmlidXRlKCdpZCcpXG4gICAgICBpZiAoaWQuc3Vic3RyaW5nKDAsIGlkLmxlbmd0aCAtIDEpID09PSBjdXJyZW50KSB7XG4gICAgICAgIGxpLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsaS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgY2F0TmFtZVN0YXJ0KHN0cjogc3RyaW5nKSB7XG4gICAgY29uc3Qgdm93ZWxzID0gWydhJywgJ2UnLCAnaScsICdvJywgJ3UnLCAneSddO1xuICAgIHJldHVybiB2b3dlbHMuaW5jbHVkZXMoc3RyLnN1YnN0cigwLCAxKS50b0xvY2FsZUxvd2VyQ2FzZSgpKVxuICB9XG4gIG9uRWRpdCgpIHtcbiAgICB0aGlzLm9uU2hvd01vZGUuZW1pdChmYWxzZSlcbiAgfVxuXG4gIHByb2dyZXNzKGNvbXBsZXRlZCwgbGVuZ3RoKSB7XG4gICAgcmV0dXJuIDEwMCAqIGNvbXBsZXRlZCAvIGxlbmd0aFxuICB9XG5cbiAgb25WaWV3VGlja2V0KENhc2VOdW1iZXIpIHtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbYHRpY2tldC8ke0Nhc2VOdW1iZXJ9YF0pXG4gIH1cblxuICBvbkZvcm1hdERpc3BsYXlWYWx1ZSh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZSA9PT0gdHJ1ZSA/ICdPdWknIDogdmFsdWUgPT09IGZhbHNlID8gJ05vbicgOiB2YWx1ZVxuXG4gIH1cblxufVxuIiwiPGRpdiBjbGFzcz1cIm9uYm9hcmRpbmctZGV0YWlsXCIgKm5nSWY9XCJkZXRhaWxWaWV3XCI+XG4gICAgPGgxIGNsYXNzPVwidGl0bGVcIj5cbiAgICAgICAgPHA+SW50w6lncmF0aW9uIHByb2ZpbCB7e2RldGFpbFZpZXc/Lk5hbWV9fTwvcD5cbiAgICAgICAgPG1hdC1pY29uIHN0eWxlPVwibWFyZ2luLWxlZnQ6IDIwcHg7IGN1cnNvcjogcG9pbnRlcjtcIiAoY2xpY2spPVwib25FZGl0KClcIj5lZGl0PC9tYXQtaWNvbj5cbiAgICA8L2gxPlxuICAgIDxkaXYgY2xhc3M9XCJ2aWV3LWNvbnRlbnRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImxlZnQtY29udGVudFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInVzZXItaW5mb1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ1c2VyLW5hbWVcIj5cbiAgICAgICAgICAgICAgICAgICAgPGgyPnt7ZGV0YWlsVmlldy51c2VyLkZpcnN0TmFtZSB9fSB7e2RldGFpbFZpZXcudXNlci5MYXN0TmFtZSB9fTwvaDI+XG4gICAgICAgICAgICAgICAgICAgIDxwPnt7ZGV0YWlsVmlldy5jcmVhdGVkQXQgfCBkYXRlOidkZC9NTS95eScgfX08L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInVzZXItY29udGFjdFwiPlxuICAgICAgICAgICAgICAgICAgICA8cD57e2RldGFpbFZpZXc/LnVzZXI/LlBob25lPy5pbnRlcm5hdGlvbmFsTnVtYmVyIH19PC9wPlxuICAgICAgICAgICAgICAgICAgICA8cD57e2RldGFpbFZpZXcudXNlci5FbWFpbCB9fTwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGlkPVwiZmllbGRzXCIgY2xhc3M9XCJmaWVsZHNcIj5cbiAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgIDxsaSBbbmd4U2Nyb2xsVG9dPVwiJyMnK2NhdGVnb3J5Lm5hbWVcIiBjbGFzcz1cIm1lbnUtaXRlbVwiIFtjbGFzc109XCJpPT09MCA/ICdhY3RpdmUnOicnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICpuZ0Zvcj1cImxldCBjYXRlZ29yeSBvZiBkZXRhaWxWaWV3LmNhdGVnb3JpZXM7ICBsZXQgaT1pbmRleFwiIFtpZF09XCJjYXRlZ29yeS5uYW1lKyd4J1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGE+e3tjYXRlZ29yeS5uYW1lfX08L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2F0ZWdvcnktdmlldy1jb250YWluZXJcIiAoc2Nyb2xsKT1cIm9uU2Nyb2xsKCRldmVudClcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3M9XCJjYXRlZ29yeS1pdGVtXCIgKm5nRm9yPVwibGV0IGNhdGVnb3J5IG9mIGRldGFpbFZpZXcuY2F0ZWdvcmllczsgIGxldCBpPWluZGV4XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtpZF09XCJjYXRlZ29yeS5uYW1lXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2F0ZWdvcnktaXRlbS1pbm5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXRlZ29yeS1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRpdGxlLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMj57e2NhdGVnb3J5Lm5hbWV9fTwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImNhdGVnb3J5LWRlc2NyaXB0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTGlzdGVzIGRlcyBpbmZvcm1hdGlvbnMgbsOpY2Vzc2FpcmVzIHBvdXIgbGEgY3LDqWF0aW9uIGRlIHt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2F0TmFtZVN0YXJ0KGNhdGVnb3J5Lm5hbWUpID8gXCJsJ1wiICsgY2F0ZWdvcnkubmFtZSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnkubmFtZSB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByb2dyZXNzLXN0YXR1c1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSB7e2NhdGVnb3J5Py5maWVsZENvbXBsZXRlZH19IC8ge3tjYXRlZ29yeT8uZmllbGRMZW5ndGh9fSAtLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gPGRpdiAqbmdJZj1cImNhdGVnb3J5Py5maWVsZENvbXBsZXRlZD09PWNhdGVnb3J5Py5maWVsZExlbmd0aFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJzdGF0dXMgaW4tcHJvZ3Jlc3NcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5FbiBjb3VycyBkZSB0cmFpdGVtZW50PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaWItbG9hZGluZz48L2xpYi1sb2FkaW5nPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+IC0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSA8ZGl2ICpuZ0lmPVwiY2F0ZWdvcnk/LmZpZWxkQ29tcGxldGVkID09PWNhdGVnb3J5Py5maWVsZExlbmd0aFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJzdGF0dXMgb25nb2luZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPVwibWFyZ2luLXJpZ2h0OiAxMHB4O1wiPkVuIGNvdXJzPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxtYXQtaWNvbj5jaGVjazwvbWF0LWljb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gLS0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2ICpuZ0lmPVwiY2F0ZWdvcnk/LmZpZWxkQ29tcGxldGVkIDwgY2F0ZWdvcnk/LmZpZWxkTGVuZ3RoXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInN0YXR1cyBwcm9ncmVzcy1iYXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT1cIndpZHRoOiAzMDBweDtcIj57e3Byb2dyZXNzKGNhdGVnb3J5Py5maWVsZENvbXBsZXRlZCAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5Py5maWVsZExlbmd0aCl9fSUgVGVybWluw6k8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG1hdC1wcm9ncmVzcy1iYXIgbW9kZT1cImRldGVybWluYXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3ZhbHVlXT1cInByb2dyZXNzKGNhdGVnb3J5Py5maWVsZENvbXBsZXRlZCAsIGNhdGVnb3J5Py5maWVsZExlbmd0aClcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L21hdC1wcm9ncmVzcy1iYXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhdGVnb3J5LWl0ZW0tZm9ybXNcIiAqbmdGb3I9XCJsZXQgZm9ybXMgb2YgY2F0ZWdvcnkuZm9ybXNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFmb3Jtcy5mb3Jtc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJsYWJlbFwiPnt7Zm9ybXMubGFiZWx9fTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoND57e29uRm9ybWF0RGlzcGxheVZhbHVlKGZvcm1zLnZhbHVlKX19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImZvcm1zLmZvcm1zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+e3tmb3Jtcy5sYWJlbH19PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXRlZ29yeS1pdGVtLWZvcm1zXCIgKm5nRm9yPVwibGV0IHN1YiBvZiBmb3Jtcy5mb3Jtc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhc3ViLmZvcm1zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwibGFiZWxcIj57e3N1Yi5sYWJlbH19PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQ+e3tvbkZvcm1hdERpc3BsYXlWYWx1ZShzdWIudmFsdWUpfX08L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJzdWIuZm9ybXNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPnt7c3ViLmxhYmVsfX08L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2F0ZWdvcnktaXRlbS1mb3Jtc1wiICpuZ0Zvcj1cImxldCBjaGlsZCBvZiBzdWIuZm9ybXNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhY2hpbGQuZm9ybXNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImxhYmVsXCI+e3tjaGlsZC5sYWJlbH19PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoND57e29uRm9ybWF0RGlzcGxheVZhbHVlKGNoaWxkLnZhbHVlKX19PC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImNoaWxkLmZvcm1zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPnt7Y2hpbGQubGFiZWx9fTwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhdGVnb3J5LWl0ZW0tZm9ybXNcIiAqbmdGb3I9XCJsZXQgYzIgb2YgY2hpbGQuZm9ybXNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJsYWJlbFwiPnt7YzIubGFiZWx9fTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0Pnt7b25Gb3JtYXREaXNwbGF5VmFsdWUoYzIudmFsdWUpfX08L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24gc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT1cImhlaWdodDogNDUwcHg7XCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInJpZ2h0LWNvbnRlbnRcIj5cbiAgICAgICAgICAgIDxoMj5UaWNrZXRzIGxpw6lzIMOgIHZvdHJlIGRlbWFuZGU8L2gyPlxuICAgICAgICAgICAgPHAgY2xhc3M9XCJzdWJ0aXRsZVwiPlZvdXMgcmV0cm91dmVyZXogaWNpIHRvdXMgbGVzIHRpY2tldHMgY3LDqcOpcyBsb3JzIGRlIGxhIGNyw6lhdGlvbiBkZSB2b3RyZSBmaWNoZVxuICAgICAgICAgICAgICAgIGTigJlpbnTDqWdyYXRpb24uPC9wPlxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImRldGFpbFZpZXcudGlja2V0cyAmJiBkZXRhaWxWaWV3LnRpY2tldHMubGVuZ3RoPjBcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYm94LXRpY2tldC1pbmZvXCIgKm5nRm9yPVwibGV0IHRpY2tldCBvZiBkZXRhaWxWaWV3LnRpY2tldHNcIj5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJkYXRlXCI+e3t0aWNrZXQuQ3JlYXRlZERhdGUgfCBkYXRlIDonZGQvTU0veXknfX08L3A+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJib3gtaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDM+e3t0aWNrZXQuU3ViamVjdH19PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gbWF0LWJ1dHRvbiBjbGFzcz1cInByb2dyZXNzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwib25WaWV3VGlja2V0KHRpY2tldC5DYXNlTnVtYmVyKVwiPnt7dGlja2V0LlN0YXR1c319PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImRlc2NyaXB0aW9uXCI+e3t0aWNrZXQuRGVzY3JpcHRpb259fTwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJveC10aWNrZXQtaW5mb1wiICpuZ0lmPVwiIWRldGFpbFZpZXcudGlja2V0c1wiPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiZGVzY3JpcHRpb25cIj5cIkF1Y3VuIHRpY2tldHNcIjwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuXG5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG48L2Rpdj4iXX0=