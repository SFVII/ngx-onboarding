import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "../../../onboarding.service";
import * as i3 from "@angular/common";
import * as i4 from "@angular/material/icon";
import * as i5 from "@nicky-lenaers/ngx-scroll-to";
import * as i6 from "../loading/loading.component";
import * as i7 from "@angular/material/progress-bar";
import * as i8 from "@angular/material/button";
function OnboardingDetailComponent_div_0_li_22_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li", 17);
    i0.ɵɵelementStart(1, "a");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var category_r938 = ctx.$implicit;
    var i_r939 = ctx.index;
    i0.ɵɵclassMap(i_r939 === 0 ? "active" : "");
    i0.ɵɵproperty("ngxScrollTo", "#" + category_r938.name)("id", category_r938.name + "x");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(category_r938.name);
} }
function OnboardingDetailComponent_div_0_section_24_div_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 27);
    i0.ɵɵelementStart(1, "span");
    i0.ɵɵtext(2, "En cours de traitement");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(3, "lib-loading");
    i0.ɵɵelementEnd();
} }
function OnboardingDetailComponent_div_0_section_24_div_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 28);
    i0.ɵɵelementStart(1, "span", 29);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(3, "mat-progress-bar", 30);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var category_r940 = i0.ɵɵnextContext().$implicit;
    var ctx_r943 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", ctx_r943.progress(category_r940 == null ? null : category_r940.fieldCompleted, category_r940 == null ? null : category_r940.fieldLength), "% Termin\u00E9");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("value", ctx_r943.progress(category_r940 == null ? null : category_r940.fieldCompleted, category_r940 == null ? null : category_r940.fieldLength));
} }
function OnboardingDetailComponent_div_0_section_24_div_11_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "p", 32);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "h4");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var forms_r946 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(forms_r946.label);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(forms_r946.value);
} }
function OnboardingDetailComponent_div_0_section_24_div_11_ng_container_2_div_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "p", 32);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "h4");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var sub_r951 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(sub_r951.label);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(sub_r951.value);
} }
function OnboardingDetailComponent_div_0_section_24_div_11_ng_container_2_div_3_ng_container_2_div_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "p", 32);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "h4");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var child_r956 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(child_r956.label);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(child_r956.value);
} }
function OnboardingDetailComponent_div_0_section_24_div_11_ng_container_2_div_3_ng_container_2_div_3_ng_container_2_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 31);
    i0.ɵɵelementStart(1, "p", 32);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "h4");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var c2_r961 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(c2_r961.label);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(c2_r961.value);
} }
function OnboardingDetailComponent_div_0_section_24_div_11_ng_container_2_div_3_ng_container_2_div_3_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "h3");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, OnboardingDetailComponent_div_0_section_24_div_11_ng_container_2_div_3_ng_container_2_div_3_ng_container_2_div_3_Template, 5, 2, "div", 26);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var child_r956 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(child_r956.label);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", child_r956.forms);
} }
function OnboardingDetailComponent_div_0_section_24_div_11_ng_container_2_div_3_ng_container_2_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 31);
    i0.ɵɵtemplate(1, OnboardingDetailComponent_div_0_section_24_div_11_ng_container_2_div_3_ng_container_2_div_3_ng_container_1_Template, 5, 2, "ng-container", 15);
    i0.ɵɵtemplate(2, OnboardingDetailComponent_div_0_section_24_div_11_ng_container_2_div_3_ng_container_2_div_3_ng_container_2_Template, 4, 2, "ng-container", 15);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var child_r956 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !child_r956.forms);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", child_r956.forms);
} }
function OnboardingDetailComponent_div_0_section_24_div_11_ng_container_2_div_3_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "h3");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, OnboardingDetailComponent_div_0_section_24_div_11_ng_container_2_div_3_ng_container_2_div_3_Template, 3, 2, "div", 26);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var sub_r951 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(sub_r951.label);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", sub_r951.forms);
} }
function OnboardingDetailComponent_div_0_section_24_div_11_ng_container_2_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 31);
    i0.ɵɵtemplate(1, OnboardingDetailComponent_div_0_section_24_div_11_ng_container_2_div_3_ng_container_1_Template, 5, 2, "ng-container", 15);
    i0.ɵɵtemplate(2, OnboardingDetailComponent_div_0_section_24_div_11_ng_container_2_div_3_ng_container_2_Template, 4, 2, "ng-container", 15);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var sub_r951 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !sub_r951.forms);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", sub_r951.forms);
} }
function OnboardingDetailComponent_div_0_section_24_div_11_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "h3");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, OnboardingDetailComponent_div_0_section_24_div_11_ng_container_2_div_3_Template, 3, 2, "div", 26);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var forms_r946 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(forms_r946.label);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", forms_r946.forms);
} }
function OnboardingDetailComponent_div_0_section_24_div_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 31);
    i0.ɵɵtemplate(1, OnboardingDetailComponent_div_0_section_24_div_11_ng_container_1_Template, 5, 2, "ng-container", 15);
    i0.ɵɵtemplate(2, OnboardingDetailComponent_div_0_section_24_div_11_ng_container_2_Template, 4, 2, "ng-container", 15);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var forms_r946 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !forms_r946.forms);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", forms_r946.forms);
} }
function OnboardingDetailComponent_div_0_section_24_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 18);
    i0.ɵɵelementStart(1, "div", 19);
    i0.ɵɵelementStart(2, "div", 20);
    i0.ɵɵelementStart(3, "div", 21);
    i0.ɵɵelementStart(4, "h2");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "p", 22);
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "div", 23);
    i0.ɵɵtemplate(9, OnboardingDetailComponent_div_0_section_24_div_9_Template, 4, 0, "div", 24);
    i0.ɵɵtemplate(10, OnboardingDetailComponent_div_0_section_24_div_10_Template, 4, 2, "div", 25);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(11, OnboardingDetailComponent_div_0_section_24_div_11_Template, 3, 2, "div", 26);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var category_r940 = ctx.$implicit;
    var ctx_r935 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("id", category_r940.name);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(category_r940.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" Listes des informations n\u00E9cessaires pour la cr\u00E9ation de ", ctx_r935.catNameStart(category_r940.name) ? "l'" + category_r940.name : category_r940.name, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", (category_r940 == null ? null : category_r940.fieldCompleted) === (category_r940 == null ? null : category_r940.fieldLength));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", (category_r940 == null ? null : category_r940.fieldCompleted) < (category_r940 == null ? null : category_r940.fieldLength));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", category_r940.forms);
} }
function OnboardingDetailComponent_div_0_ng_container_30_div_1_Template(rf, ctx) { if (rf & 1) {
    var _r968 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 34);
    i0.ɵɵelementStart(1, "p", 35);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "date");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 36);
    i0.ɵɵelementStart(5, "h2");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "button", 37);
    i0.ɵɵlistener("click", function OnboardingDetailComponent_div_0_ng_container_30_div_1_Template_button_click_7_listener() { i0.ɵɵrestoreView(_r968); var ticket_r966 = ctx.$implicit; var ctx_r967 = i0.ɵɵnextContext(3); return ctx_r967.onViewTicket(ticket_r966.CaseNumber); });
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "p", 38);
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ticket_r966 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(3, 4, ticket_r966.CreatedDate, "dd/MM/yy"));
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ticket_r966.Subject);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ticket_r966.Status);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ticket_r966.Description);
} }
function OnboardingDetailComponent_div_0_ng_container_30_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, OnboardingDetailComponent_div_0_ng_container_30_div_1_Template, 11, 7, "div", 33);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r936 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r936.detailView.tickets);
} }
function OnboardingDetailComponent_div_0_div_31_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 34);
    i0.ɵɵelementStart(1, "p", 38);
    i0.ɵɵtext(2, "\"Aucun tickets\"");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
function OnboardingDetailComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    var _r970 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 1);
    i0.ɵɵelementStart(1, "h1", 2);
    i0.ɵɵelementStart(2, "p");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "mat-icon", 3);
    i0.ɵɵlistener("click", function OnboardingDetailComponent_div_0_Template_mat_icon_click_4_listener() { i0.ɵɵrestoreView(_r970); var ctx_r969 = i0.ɵɵnextContext(); return ctx_r969.onEdit(); });
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
    i0.ɵɵlistener("scroll", function OnboardingDetailComponent_div_0_Template_div_scroll_23_listener($event) { i0.ɵɵrestoreView(_r970); var ctx_r971 = i0.ɵɵnextContext(); return ctx_r971.onScroll($event); });
    i0.ɵɵtemplate(24, OnboardingDetailComponent_div_0_section_24_Template, 12, 6, "section", 12);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(25, "div", 13);
    i0.ɵɵelementStart(26, "h2");
    i0.ɵɵtext(27, "Tickets li\u00E9s \u00E0 votre demande");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(28, "p", 14);
    i0.ɵɵtext(29, "Vous retrouverez ici tous les tickets cr\u00E9\u00E9s lors de la cr\u00E9ation de votre fiche d\u2019int\u00E9gration.");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(30, OnboardingDetailComponent_div_0_ng_container_30_Template, 2, 1, "ng-container", 15);
    i0.ɵɵtemplate(31, OnboardingDetailComponent_div_0_div_31_Template, 3, 0, "div", 16);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r933 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("Int\u00E9gration profil ", ctx_r933.detailView == null ? null : ctx_r933.detailView.Name, "");
    i0.ɵɵadvance(8);
    i0.ɵɵtextInterpolate2("", ctx_r933.detailView.user.FirstName, " ", ctx_r933.detailView.user.LastName, "");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(14, 10, ctx_r933.detailView.createdAt, "dd/MM/yy"));
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r933.detailView == null ? null : ctx_r933.detailView.user == null ? null : ctx_r933.detailView.user.Phone == null ? null : ctx_r933.detailView.user.Phone.internationalNumber);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r933.detailView.user.Email);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", ctx_r933.detailView.categories);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r933.detailView.categories);
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("ngIf", ctx_r933.detailView.tickets && ctx_r933.detailView.tickets.length > 0);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r933.detailView.tickets);
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
        var route = [this.service.mainPath.includes('onboarding') ? this.service.mainPath.split('onboarding')[0] : this.service.mainPath, "tickets/" + CaseNumber];
        console.log("route-----------", route);
        this.router.navigate(route);
    };
    OnboardingDetailComponent.ɵfac = function OnboardingDetailComponent_Factory(t) { return new (t || OnboardingDetailComponent)(i0.ɵɵdirectiveInject(i1.Router), i0.ɵɵdirectiveInject(i2.OnboardingService)); };
    OnboardingDetailComponent.ɵcmp = i0.ɵɵdefineComponent({ type: OnboardingDetailComponent, selectors: [["lib-onboarding-detail"]], hostBindings: function OnboardingDetailComponent_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("scroll", function OnboardingDetailComponent_scroll_HostBindingHandler($event) { return ctx.onScroll($event); });
        } }, inputs: { detailView: "detailView" }, outputs: { onShowMode: "onShowMode" }, decls: 1, vars: 1, consts: [["class", "onboarding-detail", 4, "ngIf"], [1, "onboarding-detail"], [1, "title"], [2, "margin-left", "20px", "cursor", "pointer", 3, "click"], [1, "view-content"], [1, "left-content"], [1, "user-info"], [1, "user-name"], [1, "user-contact"], ["id", "fields", 1, "fields"], ["class", "menu-item", 3, "ngxScrollTo", "class", "id", 4, "ngFor", "ngForOf"], [1, "category-view-container", 3, "scroll"], ["class", "category-item", 3, "id", 4, "ngFor", "ngForOf"], [1, "right-content"], [1, "subtitle"], [4, "ngIf"], ["class", "box-ticket-info", 4, "ngIf"], [1, "menu-item", 3, "ngxScrollTo", "id"], [1, "category-item", 3, "id"], [1, "category-item-inner"], [1, "category-header"], [1, "title-content"], [1, "category-description"], [1, "progress-status"], ["class", "status in-progress", 4, "ngIf"], ["class", "status progress-bar", 4, "ngIf"], ["class", "category-item-forms", 4, "ngFor", "ngForOf"], [1, "status", "in-progress"], [1, "status", "progress-bar"], [2, "width", "300px"], ["mode", "determinate", 3, "value"], [1, "category-item-forms"], [1, "label"], ["class", "box-ticket-info", 4, "ngFor", "ngForOf"], [1, "box-ticket-info"], [1, "date"], [1, "box-header"], ["mat-button", "", 1, "progress", 3, "click"], [1, "description"]], template: function OnboardingDetailComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, OnboardingDetailComponent_div_0_Template, 32, 13, "div", 0);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.detailView);
        } }, directives: [i3.NgIf, i4.MatIcon, i3.NgForOf, i5.ScrollToDirective, i6.LoadingComponent, i7.MatProgressBar, i8.MatButton], pipes: [i3.DatePipe], styles: [".onboarding-detail[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .onboarding-detail[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .onboarding-detail[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .onboarding-detail[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], .onboarding-detail[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%], .onboarding-detail[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]{margin:0;font-family:Nexa;font-style:normal;font-weight:700;line-height:110%;display:flex;align-items:center;color:#242731}.onboarding-detail[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0}.onboarding-detail[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:24px}.onboarding-detail[_ngcontent-%COMP%]   h1.title[_ngcontent-%COMP%]{margin-bottom:33px;margin-top:10px}.onboarding-detail[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:20px}.onboarding-detail[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:18px}.onboarding-detail[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-size:16px}.onboarding-detail[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{font-size:14px}.onboarding-detail[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]{font-size:12px}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-between;background-color:#f4f7f9}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]{width:70%;border-radius:6px}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-between;height:90px;background:#fff;border-radius:6px;padding:10px;align-items:center}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .user-name[_ngcontent-%COMP%]{text-align:left;line-height:30px}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .user-contact[_ngcontent-%COMP%]{line-height:30px;text-align:right}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]{background:#fff;border-radius:8px;padding:15px;margin-bottom:30px}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   .category-item-inner[_ngcontent-%COMP%]   .category-description[_ngcontent-%COMP%]{font-family:Nexa;font-style:normal;font-weight:250;font-size:14px;line-height:16px;color:#575f6e;margin-top:5px}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   .category-item-inner[_ngcontent-%COMP%]   .category-item-forms[_ngcontent-%COMP%]{margin-top:20px}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   .category-item-inner[_ngcontent-%COMP%]   .category-item-forms[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]{font-family:Nexa;font-style:normal;font-weight:250;font-size:12px;line-height:16px;display:flex;align-items:center;color:#575f6e}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .right-content[_ngcontent-%COMP%]{width:25%;background-color:#fff;border-radius:6px;padding:15px;overflow:auto;max-height:85.5vh;margin-right:20px}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .right-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#575f6e}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .right-content[_ngcontent-%COMP%]   .box-ticket-info[_ngcontent-%COMP%]{padding-bottom:20px;padding-top:20px;border-bottom:2px solid #e2e4e5}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .right-content[_ngcontent-%COMP%]   .box-ticket-info[_ngcontent-%COMP%]   .box-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;margin-bottom:20px}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .right-content[_ngcontent-%COMP%]   .box-ticket-info[_ngcontent-%COMP%]   .box-header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{min-width:auto;height:36px;border-radius:4px;font-family:Nexa;font-weight:500;font-size:16px;display:flex;align-items:center;text-transform:capitalize;color:#fff}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .right-content[_ngcontent-%COMP%]   .box-ticket-info[_ngcontent-%COMP%]   .box-header[_ngcontent-%COMP%]   .finished[_ngcontent-%COMP%]{background:#6fe8d7}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .right-content[_ngcontent-%COMP%]   .box-ticket-info[_ngcontent-%COMP%]   .box-header[_ngcontent-%COMP%]   .progress[_ngcontent-%COMP%]{background:#f3a124}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .category-view-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;max-height:70vh;overflow:auto}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .category-view-container[_ngcontent-%COMP%]::-webkit-scrollbar, .onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .right-content[_ngcontent-%COMP%]::-webkit-scrollbar{display:none}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .category-view-container[_ngcontent-%COMP%], .onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .right-content[_ngcontent-%COMP%]{-ms-overflow-style:none;scrollbar-width:none}.fields[_ngcontent-%COMP%]{height:84%}.fields[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style:none;display:flex;margin:33px 0;padding:0}.fields[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin-right:20px;padding-bottom:5px;border-bottom:3px solid transparent}.fields[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none;font-family:Nexa;font-style:normal;font-weight:700;font-size:14px;line-height:120%;color:#171f26;opacity:.5}.fields[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.menu-item.active[_ngcontent-%COMP%], .fields[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.menu-item[_ngcontent-%COMP%]:hover{cursor:pointer;border-bottom:3px solid #3c4252}.fields[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.menu-item.active[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .fields[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.menu-item[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%]{font-family:Nexa;font-style:normal;font-weight:700;font-size:14px;line-height:120%;opacity:1;text-decoration:none!important}.progress-status[_ngcontent-%COMP%]   .status[_ngcontent-%COMP%]{display:flex;align-items:center}.progress-status[_ngcontent-%COMP%]   .ongoing[_ngcontent-%COMP%]{color:#6fe8d7}.progress-status[_ngcontent-%COMP%]   .in-progress[_ngcontent-%COMP%]{padding-right:25px;color:#f3a124;font-weight:500;font-size:16px}  .progress-status{font-size:16px}  .progress-status .mat-progress-bar{display:block;height:20px;overflow:hidden;border-radius:50px;position:relative;transition:opacity 250ms linear;width:100%}  .progress-status .mat-progress-bar-fill::after{background-color:#6fe8d7}  .progress-status .mat-progress-bar-buffer{background-color:#ecf3f7}.category-header[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between}"] });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib25ib2FyZGluZy1kZXRhaWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vb25ib2FyZGluZy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL29uYm9hcmRpbmcvb25ib2FyZGluZy1kZXRhaWwvb25ib2FyZGluZy1kZXRhaWwuY29tcG9uZW50LnRzIiwibGliL2NvbXBvbmVudHMvb25ib2FyZGluZy9vbmJvYXJkaW5nLWRldGFpbC9vbmJvYXJkaW5nLWRldGFpbC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7Ozs7SUNvQnpFLDhCQUVJO0lBQUEseUJBQUc7SUFBQSxZQUFpQjtJQUFBLGlCQUFJO0lBQzVCLGlCQUFLOzs7O0lBSG1ELDJDQUE2QjtJQUFqRixzREFBaUMsZ0NBQUE7SUFFOUIsZUFBaUI7SUFBakIsd0NBQWlCOzs7SUFrQlIsK0JBRUk7SUFBQSw0QkFBTTtJQUFBLHNDQUFzQjtJQUFBLGlCQUFPO0lBQ25DLDhCQUEyQjtJQUMvQixpQkFBTTs7O0lBTU4sK0JBRUk7SUFBQSxnQ0FBNEI7SUFBQSxZQUNTO0lBQUEsaUJBQU87SUFDNUMsdUNBRW1CO0lBQ3ZCLGlCQUFNOzs7O0lBTDBCLGVBQ1M7SUFEVCxxTEFDUztJQUVqQyxlQUFvRTtJQUFwRSxnS0FBb0U7OztJQU1oRiw2QkFDSTtJQUFBLDZCQUFpQjtJQUFBLFlBQWU7SUFBQSxpQkFBSTtJQUNwQywwQkFBSTtJQUFBLFlBQWU7SUFBQSxpQkFBSztJQUM1QiwwQkFBZTs7O0lBRk0sZUFBZTtJQUFmLHNDQUFlO0lBQzVCLGVBQWU7SUFBZixzQ0FBZTs7O0lBS2YsNkJBQ0k7SUFBQSw2QkFBaUI7SUFBQSxZQUFhO0lBQUEsaUJBQUk7SUFDbEMsMEJBQUk7SUFBQSxZQUFhO0lBQUEsaUJBQUs7SUFDMUIsMEJBQWU7OztJQUZNLGVBQWE7SUFBYixvQ0FBYTtJQUMxQixlQUFhO0lBQWIsb0NBQWE7OztJQUtiLDZCQUNJO0lBQUEsNkJBQWlCO0lBQUEsWUFBZTtJQUFBLGlCQUFJO0lBQ3BDLDBCQUFJO0lBQUEsWUFBZTtJQUFBLGlCQUFLO0lBQzVCLDBCQUFlOzs7SUFGTSxlQUFlO0lBQWYsc0NBQWU7SUFDNUIsZUFBZTtJQUFmLHNDQUFlOzs7SUFJbkIsK0JBQ0k7SUFBQSw2QkFBaUI7SUFBQSxZQUFZO0lBQUEsaUJBQUk7SUFDakMsMEJBQUk7SUFBQSxZQUFZO0lBQUEsaUJBQUs7SUFDekIsaUJBQU07OztJQUZlLGVBQVk7SUFBWixtQ0FBWTtJQUN6QixlQUFZO0lBQVosbUNBQVk7OztJQUp4Qiw2QkFDSTtJQUFBLDBCQUFJO0lBQUEsWUFBZTtJQUFBLGlCQUFLO0lBQ3hCLDRKQUNJO0lBR1IsMEJBQWU7OztJQUxQLGVBQWU7SUFBZixzQ0FBZTtJQUNjLGVBQThCO0lBQTlCLDBDQUE4Qjs7O0lBUHZFLCtCQUNJO0lBQUEsK0pBQ0k7SUFHSiwrSkFDSTtJQU1SLGlCQUFNOzs7SUFYWSxlQUFvQjtJQUFwQix3Q0FBb0I7SUFJcEIsZUFBbUI7SUFBbkIsdUNBQW1COzs7SUFQekMsNkJBQ0k7SUFBQSwwQkFBSTtJQUFBLFlBQWE7SUFBQSxpQkFBSztJQUN0Qix1SUFDSTtJQVlSLDBCQUFlOzs7SUFkUCxlQUFhO0lBQWIsb0NBQWE7SUFDZ0IsZUFBK0I7SUFBL0Isd0NBQStCOzs7SUFQeEUsK0JBQ0k7SUFBQSwwSUFDSTtJQUdKLDBJQUNJO0lBZVIsaUJBQU07OztJQXBCWSxlQUFrQjtJQUFsQixzQ0FBa0I7SUFJbEIsZUFBaUI7SUFBakIscUNBQWlCOzs7SUFQdkMsNkJBQ0k7SUFBQSwwQkFBSTtJQUFBLFlBQWU7SUFBQSxpQkFBSztJQUN4QixrSEFDSTtJQXFCUiwwQkFBZTs7O0lBdkJQLGVBQWU7SUFBZixzQ0FBZTtJQUNjLGVBQStCO0lBQS9CLDBDQUErQjs7O0lBUHhFLCtCQUNJO0lBQUEscUhBQ0k7SUFHSixxSEFDSTtJQXdCUixpQkFBTTs7O0lBN0JZLGVBQW9CO0lBQXBCLHdDQUFvQjtJQUlwQixlQUFtQjtJQUFuQix1Q0FBbUI7OztJQXZDN0MsbUNBRUk7SUFBQSwrQkFDSTtJQUFBLCtCQUNJO0lBQUEsK0JBQ0k7SUFBQSwwQkFBSTtJQUFBLFlBQWlCO0lBQUEsaUJBQUs7SUFDMUIsNkJBQ0k7SUFBQSxZQUdKO0lBQUEsaUJBQUk7SUFDUixpQkFBTTtJQUNOLCtCQUNJO0lBQ0EsNEZBRUk7SUFRSiw4RkFFSTtJQU1SLGlCQUFNO0lBQ1YsaUJBQU07SUFDTiw4RkFDSTtJQThCUixpQkFBTTtJQUNWLGlCQUFVOzs7O0lBakVOLHVDQUFvQjtJQUlKLGVBQWlCO0lBQWpCLHdDQUFpQjtJQUVqQixlQUdKO0lBSEksNkxBR0o7SUFJSyxlQUF3RDtJQUF4RCxtSkFBd0Q7SUFVeEQsZUFBd0Q7SUFBeEQsaUpBQXdEO0lBVXBDLGVBQW9DO0lBQXBDLDZDQUFvQzs7OztJQXlDakYsK0JBQ0k7SUFBQSw2QkFBZ0I7SUFBQSxZQUF5Qzs7SUFBQSxpQkFBSTtJQUM3RCwrQkFDSTtJQUFBLDBCQUFJO0lBQUEsWUFBa0I7SUFBQSxpQkFBSztJQUMzQixrQ0FDOEM7SUFBMUMsaVJBQXlDO0lBQUMsWUFBaUI7SUFBQSxpQkFBUztJQUM1RSxpQkFBTTtJQUNOLDZCQUF1QjtJQUFBLGFBQXNCO0lBQUEsaUJBQUk7SUFDckQsaUJBQU07OztJQVBjLGVBQXlDO0lBQXpDLCtFQUF5QztJQUVqRCxlQUFrQjtJQUFsQix5Q0FBa0I7SUFFd0IsZUFBaUI7SUFBakIsd0NBQWlCO0lBRTVDLGVBQXNCO0lBQXRCLDZDQUFzQjs7O0lBUnJELDZCQUNJO0lBQUEsa0dBQ0k7SUFRUiwwQkFBZTs7O0lBVGtCLGVBQXlDO0lBQXpDLHFEQUF5Qzs7O0lBVTFFLCtCQUNJO0lBQUEsNkJBQXVCO0lBQUEsaUNBQWU7SUFBQSxpQkFBSTtJQUM5QyxpQkFBTTs7OztJQWpIbEIsOEJBQ0k7SUFBQSw2QkFDSTtJQUFBLHlCQUFHO0lBQUEsWUFBdUM7SUFBQSxpQkFBSTtJQUM5QyxtQ0FBeUU7SUFBbkIsK0xBQWtCO0lBQUMsb0JBQUk7SUFBQSxpQkFBVztJQUM1RixpQkFBSztJQUNMLDhCQUNJO0lBQUEsOEJBQ0k7SUFBQSw4QkFDSTtJQUFBLDhCQUNJO0lBQUEsMkJBQUk7SUFBQSxhQUE0RDtJQUFBLGlCQUFLO0lBQ3JFLDBCQUFHO0lBQUEsYUFBMkM7O0lBQUEsaUJBQUk7SUFDdEQsaUJBQU07SUFDTiwrQkFDSTtJQUFBLDBCQUFHO0lBQUEsYUFBaUQ7SUFBQSxpQkFBSTtJQUN4RCwwQkFBRztJQUFBLGFBQTBCO0lBQUEsaUJBQUk7SUFDckMsaUJBQU07SUFDVixpQkFBTTtJQUVOLCtCQUNJO0lBQUEsMkJBQ0k7SUFBQSxpRkFFSTtJQUVSLGlCQUFLO0lBQ0wsZ0NBQ0k7SUFEaUMsMk1BQTJCO0lBQzVELDRGQUVJO0lBaUVSLGlCQUFNO0lBQ1YsaUJBQU07SUFDVixpQkFBTTtJQUNOLGdDQUNJO0lBQUEsMkJBQUk7SUFBQSx1REFBNEI7SUFBQSxpQkFBSztJQUNyQyw4QkFBb0I7SUFBQSx1SUFDRjtJQUFBLGlCQUFJO0lBQ3RCLHFHQUNJO0lBVUosbUZBQ0k7SUFJUixpQkFBTTtJQUNWLGlCQUFNO0lBQ1YsaUJBQU07OztJQXBISyxlQUF1QztJQUF2QyxvSEFBdUM7SUFPMUIsZUFBNEQ7SUFBNUQseUdBQTREO0lBQzdELGVBQTJDO0lBQTNDLHVGQUEyQztJQUczQyxlQUFpRDtJQUFqRCx1TUFBaUQ7SUFDakQsZUFBMEI7SUFBMUIsb0RBQTBCO0lBT3pCLGVBQTREO0lBQTVELHdEQUE0RDtJQUtqQyxlQUE0RDtJQUE1RCx3REFBNEQ7SUEwRXJGLGVBQXlEO0lBQXpELDRGQUF5RDtJQVcxQyxlQUEyQjtJQUEzQixtREFBMkI7O0FEMUdwRTtJQVFFLG1DQUFvQixNQUFjLEVBQVUsT0FBMEI7UUFBbEQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLFlBQU8sR0FBUCxPQUFPLENBQW1CO1FBRDVELGVBQVUsR0FBRyxJQUFJLFlBQVksQ0FBVSxJQUFJLENBQUMsQ0FBQztJQUNtQixDQUFDO0lBRTNFLDRDQUFRLEdBQVIsY0FBbUIsQ0FBQztJQUVwQiw0Q0FBUSxHQURSLFVBQ1MsS0FBSztRQUNaLElBQU0sUUFBUSxHQUFHLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUN0RCxJQUFNLEtBQUssR0FBRyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsZUFBZSxDQUFDLENBQUM7UUFFekQsSUFBSSxPQUFPLEdBQUcsRUFBRSxDQUFDO1FBQ2pCLFFBQVEsQ0FBQyxPQUFPLENBQUMsVUFBQyxPQUFPO1lBQ3ZCLElBQU0sVUFBVSxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUM7WUFDckMsSUFBSSxLQUFLLENBQUMsTUFBTSxDQUFDLFNBQVMsR0FBRyxVQUFVLEdBQUcsR0FBRyxFQUFFO2dCQUM3QyxPQUFPLEdBQUcsT0FBTyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQTthQUNyQztRQUNILENBQUMsQ0FBQyxDQUFDO1FBQ0gsS0FBSyxDQUFDLE9BQU8sQ0FBQyxVQUFDLEVBQUU7WUFDZixJQUFNLEVBQUUsR0FBRyxFQUFFLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFBO1lBQ2hDLElBQUksRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsS0FBSyxPQUFPLEVBQUU7Z0JBQzlDLEVBQUUsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO2FBQzVCO2lCQUFNO2dCQUNMLEVBQUUsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFBO2FBQzlCO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsZ0RBQVksR0FBWixVQUFhLEdBQVc7UUFDdEIsSUFBTSxNQUFNLEdBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQzlDLE9BQU8sTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLENBQUE7SUFDOUQsQ0FBQztJQUNELDBDQUFNLEdBQU47UUFDRSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUM3QixDQUFDO0lBRUQsNENBQVEsR0FBUixVQUFTLFNBQVMsRUFBRSxNQUFNO1FBQ3hCLE9BQU8sR0FBRyxHQUFHLFNBQVMsR0FBRyxNQUFNLENBQUE7SUFDakMsQ0FBQztJQUVELGdEQUFZLEdBQVosVUFBYSxVQUFVO1FBQ3JCLElBQU0sS0FBSyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLGFBQVcsVUFBWSxDQUFDLENBQUE7UUFDNUosT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUN2QyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUM3QixDQUFDO3NHQTVDVSx5QkFBeUI7a0VBQXpCLHlCQUF5Qjs7O1lDVnRDLDRFQUNJOztZQUQyQixxQ0FBa0I7O29DREFqRDtDQXdEQyxBQW5ERCxJQW1EQztTQTlDWSx5QkFBeUI7a0RBQXpCLHlCQUF5QjtjQUxyQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLHVCQUF1QjtnQkFDakMsV0FBVyxFQUFFLG9DQUFvQztnQkFDakQsU0FBUyxFQUFFLENBQUMsb0NBQW9DLENBQUM7YUFDbEQ7O2tCQUVFLEtBQUs7O2tCQUNMLE1BQU07O2tCQUlOLFlBQVk7bUJBQUMsUUFBUSxFQUFFLENBQUMsUUFBUSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIEhvc3RMaXN0ZW5lciwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE9uYm9hcmRpbmdTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vb25ib2FyZGluZy5zZXJ2aWNlJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1vbmJvYXJkaW5nLWRldGFpbCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9vbmJvYXJkaW5nLWRldGFpbC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL29uYm9hcmRpbmctZGV0YWlsLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgT25ib2FyZGluZ0RldGFpbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIGRldGFpbFZpZXc7XG4gIEBPdXRwdXQoKSBvblNob3dNb2RlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPih0cnVlKTtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBzZXJ2aWNlOiBPbmJvYXJkaW5nU2VydmljZSkgeyB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7IH1cbiAgQEhvc3RMaXN0ZW5lcignc2Nyb2xsJywgWyckZXZlbnQnXSlcbiAgb25TY3JvbGwoZXZlbnQpIHtcbiAgICBjb25zdCBzZWN0aW9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJzZWN0aW9uXCIpO1xuICAgIGNvbnN0IG5hdkxpID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5maWVsZHMgdWwgbGlcIik7XG5cbiAgICBsZXQgY3VycmVudCA9IFwiXCI7XG4gICAgc2VjdGlvbnMuZm9yRWFjaCgoc2VjdGlvbikgPT4ge1xuICAgICAgY29uc3Qgc2VjdGlvblRvcCA9IHNlY3Rpb24ub2Zmc2V0VG9wO1xuICAgICAgaWYgKGV2ZW50LnRhcmdldC5zY3JvbGxUb3AgPiBzZWN0aW9uVG9wIC0gMzAwKSB7XG4gICAgICAgIGN1cnJlbnQgPSBzZWN0aW9uLmdldEF0dHJpYnV0ZShcImlkXCIpXG4gICAgICB9XG4gICAgfSk7XG4gICAgbmF2TGkuZm9yRWFjaCgobGkpID0+IHtcbiAgICAgIGNvbnN0IGlkID0gbGkuZ2V0QXR0cmlidXRlKCdpZCcpXG4gICAgICBpZiAoaWQuc3Vic3RyaW5nKDAsIGlkLmxlbmd0aCAtIDEpID09PSBjdXJyZW50KSB7XG4gICAgICAgIGxpLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsaS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgY2F0TmFtZVN0YXJ0KHN0cjogc3RyaW5nKSB7XG4gICAgY29uc3Qgdm93ZWxzID0gWydhJywgJ2UnLCAnaScsICdvJywgJ3UnLCAneSddO1xuICAgIHJldHVybiB2b3dlbHMuaW5jbHVkZXMoc3RyLnN1YnN0cigwLCAxKS50b0xvY2FsZUxvd2VyQ2FzZSgpKVxuICB9XG4gIG9uRWRpdCgpIHtcbiAgICB0aGlzLm9uU2hvd01vZGUuZW1pdChmYWxzZSlcbiAgfVxuXG4gIHByb2dyZXNzKGNvbXBsZXRlZCwgbGVuZ3RoKSB7XG4gICAgcmV0dXJuIDEwMCAqIGNvbXBsZXRlZCAvIGxlbmd0aFxuICB9XG5cbiAgb25WaWV3VGlja2V0KENhc2VOdW1iZXIpIHtcbiAgICBjb25zdCByb3V0ZSA9IFt0aGlzLnNlcnZpY2UubWFpblBhdGguaW5jbHVkZXMoJ29uYm9hcmRpbmcnKSA/IHRoaXMuc2VydmljZS5tYWluUGF0aC5zcGxpdCgnb25ib2FyZGluZycpWzBdIDogdGhpcy5zZXJ2aWNlLm1haW5QYXRoLCBgdGlja2V0cy8ke0Nhc2VOdW1iZXJ9YF1cbiAgICBjb25zb2xlLmxvZyhcInJvdXRlLS0tLS0tLS0tLS1cIiwgcm91dGUpO1xuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKHJvdXRlKVxuICB9XG5cbn1cbiIsIjxkaXYgY2xhc3M9XCJvbmJvYXJkaW5nLWRldGFpbFwiICpuZ0lmPVwiZGV0YWlsVmlld1wiPlxuICAgIDxoMSBjbGFzcz1cInRpdGxlXCI+XG4gICAgICAgIDxwPkludMOpZ3JhdGlvbiBwcm9maWwge3tkZXRhaWxWaWV3Py5OYW1lfX08L3A+XG4gICAgICAgIDxtYXQtaWNvbiBzdHlsZT1cIm1hcmdpbi1sZWZ0OiAyMHB4OyBjdXJzb3I6IHBvaW50ZXI7XCIgKGNsaWNrKT1cIm9uRWRpdCgpXCI+ZWRpdDwvbWF0LWljb24+XG4gICAgPC9oMT5cbiAgICA8ZGl2IGNsYXNzPVwidmlldy1jb250ZW50XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJsZWZ0LWNvbnRlbnRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ1c2VyLWluZm9cIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidXNlci1uYW1lXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMj57e2RldGFpbFZpZXcudXNlci5GaXJzdE5hbWUgfX0ge3tkZXRhaWxWaWV3LnVzZXIuTGFzdE5hbWUgfX08L2gyPlxuICAgICAgICAgICAgICAgICAgICA8cD57e2RldGFpbFZpZXcuY3JlYXRlZEF0IHwgZGF0ZTonZGQvTU0veXknIH19PC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ1c2VyLWNvbnRhY3RcIj5cbiAgICAgICAgICAgICAgICAgICAgPHA+e3tkZXRhaWxWaWV3Py51c2VyPy5QaG9uZT8uaW50ZXJuYXRpb25hbE51bWJlciB9fTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPHA+e3tkZXRhaWxWaWV3LnVzZXIuRW1haWwgfX08L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBpZD1cImZpZWxkc1wiIGNsYXNzPVwiZmllbGRzXCI+XG4gICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICA8bGkgW25neFNjcm9sbFRvXT1cIicjJytjYXRlZ29yeS5uYW1lXCIgY2xhc3M9XCJtZW51LWl0ZW1cIiBbY2xhc3NdPVwiaT09PTAgPyAnYWN0aXZlJzonJ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAqbmdGb3I9XCJsZXQgY2F0ZWdvcnkgb2YgZGV0YWlsVmlldy5jYXRlZ29yaWVzOyAgbGV0IGk9aW5kZXhcIiBbaWRdPVwiY2F0ZWdvcnkubmFtZSsneCdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhPnt7Y2F0ZWdvcnkubmFtZX19PC9hPlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhdGVnb3J5LXZpZXctY29udGFpbmVyXCIgKHNjcm9sbCk9XCJvblNjcm9sbCgkZXZlbnQpXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzPVwiY2F0ZWdvcnktaXRlbVwiICpuZ0Zvcj1cImxldCBjYXRlZ29yeSBvZiBkZXRhaWxWaWV3LmNhdGVnb3JpZXM7ICBsZXQgaT1pbmRleFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBbaWRdPVwiY2F0ZWdvcnkubmFtZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhdGVnb3J5LWl0ZW0taW5uZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2F0ZWdvcnktaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0aXRsZS1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDI+e3tjYXRlZ29yeS5uYW1lfX08L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJjYXRlZ29yeS1kZXNjcmlwdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIExpc3RlcyBkZXMgaW5mb3JtYXRpb25zIG7DqWNlc3NhaXJlcyBwb3VyIGxhIGNyw6lhdGlvbiBkZSB7e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhdE5hbWVTdGFydChjYXRlZ29yeS5uYW1lKSA/IFwibCdcIiArIGNhdGVnb3J5Lm5hbWUgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5Lm5hbWUgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcm9ncmVzcy1zdGF0dXNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0ge3tjYXRlZ29yeT8uZmllbGRDb21wbGV0ZWR9fSAvIHt7Y2F0ZWdvcnk/LmZpZWxkTGVuZ3RofX0gLS0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2ICpuZ0lmPVwiY2F0ZWdvcnk/LmZpZWxkQ29tcGxldGVkPT09Y2F0ZWdvcnk/LmZpZWxkTGVuZ3RoXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInN0YXR1cyBpbi1wcm9ncmVzc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPkVuIGNvdXJzIGRlIHRyYWl0ZW1lbnQ8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpYi1sb2FkaW5nPjwvbGliLWxvYWRpbmc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gPGRpdiAqbmdJZj1cImNhdGVnb3J5Py5maWVsZENvbXBsZXRlZCA9PT1jYXRlZ29yeT8uZmllbGRMZW5ndGhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwic3RhdHVzIG9uZ29pbmdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT1cIm1hcmdpbi1yaWdodDogMTBweDtcIj5FbiBjb3Vyczwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bWF0LWljb24+Y2hlY2s8L21hdC1pY29uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+IC0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiAqbmdJZj1cImNhdGVnb3J5Py5maWVsZENvbXBsZXRlZCA8IGNhdGVnb3J5Py5maWVsZExlbmd0aFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJzdGF0dXMgcHJvZ3Jlc3MtYmFyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9XCJ3aWR0aDogMzAwcHg7XCI+e3twcm9ncmVzcyhjYXRlZ29yeT8uZmllbGRDb21wbGV0ZWQgLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeT8uZmllbGRMZW5ndGgpfX0lIFRlcm1pbsOpPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxtYXQtcHJvZ3Jlc3MtYmFyIG1vZGU9XCJkZXRlcm1pbmF0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFt2YWx1ZV09XCJwcm9ncmVzcyhjYXRlZ29yeT8uZmllbGRDb21wbGV0ZWQgLCBjYXRlZ29yeT8uZmllbGRMZW5ndGgpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9tYXQtcHJvZ3Jlc3MtYmFyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXRlZ29yeS1pdGVtLWZvcm1zXCIgKm5nRm9yPVwibGV0IGZvcm1zIG9mIGNhdGVnb3J5LmZvcm1zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhZm9ybXMuZm9ybXNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwibGFiZWxcIj57e2Zvcm1zLmxhYmVsfX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQ+e3tmb3Jtcy52YWx1ZX19PC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJmb3Jtcy5mb3Jtc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPnt7Zm9ybXMubGFiZWx9fTwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2F0ZWdvcnktaXRlbS1mb3Jtc1wiICpuZ0Zvcj1cImxldCBzdWIgb2YgZm9ybXMuZm9ybXNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIXN1Yi5mb3Jtc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImxhYmVsXCI+e3tzdWIubGFiZWx9fTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0Pnt7c3ViLnZhbHVlfX08L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJzdWIuZm9ybXNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPnt7c3ViLmxhYmVsfX08L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2F0ZWdvcnktaXRlbS1mb3Jtc1wiICpuZ0Zvcj1cImxldCBjaGlsZCBvZiBzdWIuZm9ybXNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhY2hpbGQuZm9ybXNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImxhYmVsXCI+e3tjaGlsZC5sYWJlbH19PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoND57e2NoaWxkLnZhbHVlfX08L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiY2hpbGQuZm9ybXNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+e3tjaGlsZC5sYWJlbH19PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2F0ZWdvcnktaXRlbS1mb3Jtc1wiICpuZ0Zvcj1cImxldCBjMiBvZiBjaGlsZC5mb3Jtc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImxhYmVsXCI+e3tjMi5sYWJlbH19PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQ+e3tjMi52YWx1ZX19PC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJyaWdodC1jb250ZW50XCI+XG4gICAgICAgICAgICA8aDI+VGlja2V0cyBsacOpcyDDoCB2b3RyZSBkZW1hbmRlPC9oMj5cbiAgICAgICAgICAgIDxwIGNsYXNzPVwic3VidGl0bGVcIj5Wb3VzIHJldHJvdXZlcmV6IGljaSB0b3VzIGxlcyB0aWNrZXRzIGNyw6nDqXMgbG9ycyBkZSBsYSBjcsOpYXRpb24gZGUgdm90cmUgZmljaGVcbiAgICAgICAgICAgICAgICBk4oCZaW50w6lncmF0aW9uLjwvcD5cbiAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJkZXRhaWxWaWV3LnRpY2tldHMgJiYgZGV0YWlsVmlldy50aWNrZXRzLmxlbmd0aD4wXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJveC10aWNrZXQtaW5mb1wiICpuZ0Zvcj1cImxldCB0aWNrZXQgb2YgZGV0YWlsVmlldy50aWNrZXRzXCI+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiZGF0ZVwiPnt7dGlja2V0LkNyZWF0ZWREYXRlIHwgZGF0ZSA6J2RkL01NL3l5J319PC9wPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYm94LWhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyPnt7dGlja2V0LlN1YmplY3R9fTwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG1hdC1idXR0b24gY2xhc3M9XCJwcm9ncmVzc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cIm9uVmlld1RpY2tldCh0aWNrZXQuQ2FzZU51bWJlcilcIj57e3RpY2tldC5TdGF0dXN9fTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJkZXNjcmlwdGlvblwiPnt7dGlja2V0LkRlc2NyaXB0aW9ufX08L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJib3gtdGlja2V0LWluZm9cIiAqbmdJZj1cIiFkZXRhaWxWaWV3LnRpY2tldHNcIj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImRlc2NyaXB0aW9uXCI+XCJBdWN1biB0aWNrZXRzXCI8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cblxuXG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuPC9kaXY+Il19