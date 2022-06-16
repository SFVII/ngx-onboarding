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
    const category_r452 = ctx.$implicit;
    const i_r453 = ctx.index;
    i0.ɵɵclassMap(i_r453 === 0 ? "active" : "");
    i0.ɵɵproperty("ngxScrollTo", "#" + category_r452.name)("id", category_r452.name + "x");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(category_r452.name);
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
    const category_r454 = i0.ɵɵnextContext().$implicit;
    const ctx_r457 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", ctx_r457.progress(category_r454 == null ? null : category_r454.fieldCompleted, category_r454 == null ? null : category_r454.fieldLength), "% Termin\u00E9");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("value", ctx_r457.progress(category_r454 == null ? null : category_r454.fieldCompleted, category_r454 == null ? null : category_r454.fieldLength));
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
    const forms_r460 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(forms_r460.label);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(forms_r460.value);
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
    const sub_r465 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(sub_r465.label);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(sub_r465.value);
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
    const child_r470 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(child_r470.label);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(child_r470.value);
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
    const c2_r475 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(c2_r475.label);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(c2_r475.value);
} }
function OnboardingDetailComponent_div_0_section_24_div_11_ng_container_2_div_3_ng_container_2_div_3_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "h3");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, OnboardingDetailComponent_div_0_section_24_div_11_ng_container_2_div_3_ng_container_2_div_3_ng_container_2_div_3_Template, 5, 2, "div", 26);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const child_r470 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(child_r470.label);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", child_r470.forms);
} }
function OnboardingDetailComponent_div_0_section_24_div_11_ng_container_2_div_3_ng_container_2_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 31);
    i0.ɵɵtemplate(1, OnboardingDetailComponent_div_0_section_24_div_11_ng_container_2_div_3_ng_container_2_div_3_ng_container_1_Template, 5, 2, "ng-container", 15);
    i0.ɵɵtemplate(2, OnboardingDetailComponent_div_0_section_24_div_11_ng_container_2_div_3_ng_container_2_div_3_ng_container_2_Template, 4, 2, "ng-container", 15);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const child_r470 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !child_r470.forms);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", child_r470.forms);
} }
function OnboardingDetailComponent_div_0_section_24_div_11_ng_container_2_div_3_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "h3");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, OnboardingDetailComponent_div_0_section_24_div_11_ng_container_2_div_3_ng_container_2_div_3_Template, 3, 2, "div", 26);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const sub_r465 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(sub_r465.label);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", sub_r465.forms);
} }
function OnboardingDetailComponent_div_0_section_24_div_11_ng_container_2_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 31);
    i0.ɵɵtemplate(1, OnboardingDetailComponent_div_0_section_24_div_11_ng_container_2_div_3_ng_container_1_Template, 5, 2, "ng-container", 15);
    i0.ɵɵtemplate(2, OnboardingDetailComponent_div_0_section_24_div_11_ng_container_2_div_3_ng_container_2_Template, 4, 2, "ng-container", 15);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const sub_r465 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !sub_r465.forms);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", sub_r465.forms);
} }
function OnboardingDetailComponent_div_0_section_24_div_11_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "h3");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, OnboardingDetailComponent_div_0_section_24_div_11_ng_container_2_div_3_Template, 3, 2, "div", 26);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const forms_r460 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(forms_r460.label);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", forms_r460.forms);
} }
function OnboardingDetailComponent_div_0_section_24_div_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 31);
    i0.ɵɵtemplate(1, OnboardingDetailComponent_div_0_section_24_div_11_ng_container_1_Template, 5, 2, "ng-container", 15);
    i0.ɵɵtemplate(2, OnboardingDetailComponent_div_0_section_24_div_11_ng_container_2_Template, 4, 2, "ng-container", 15);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const forms_r460 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !forms_r460.forms);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", forms_r460.forms);
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
    const category_r454 = ctx.$implicit;
    const ctx_r449 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("id", category_r454.name);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(category_r454.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" Listes des informations n\u00E9cessaires pour la cr\u00E9ation de ", ctx_r449.catNameStart(category_r454.name) ? "l'" + category_r454.name : category_r454.name, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", (category_r454 == null ? null : category_r454.fieldCompleted) === (category_r454 == null ? null : category_r454.fieldLength));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", (category_r454 == null ? null : category_r454.fieldCompleted) < (category_r454 == null ? null : category_r454.fieldLength));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", category_r454.forms);
} }
function OnboardingDetailComponent_div_0_ng_container_30_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r482 = i0.ɵɵgetCurrentView();
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
    i0.ɵɵlistener("click", function OnboardingDetailComponent_div_0_ng_container_30_div_1_Template_button_click_7_listener() { i0.ɵɵrestoreView(_r482); const ticket_r480 = ctx.$implicit; const ctx_r481 = i0.ɵɵnextContext(3); return ctx_r481.onViewTicket(ticket_r480.CaseNumber); });
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "p", 38);
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ticket_r480 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(3, 4, ticket_r480.CreatedDate, "dd/MM/yy"));
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ticket_r480.Subject);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ticket_r480.Status);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ticket_r480.Description);
} }
function OnboardingDetailComponent_div_0_ng_container_30_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, OnboardingDetailComponent_div_0_ng_container_30_div_1_Template, 11, 7, "div", 33);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r450 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r450.detailView.tickets);
} }
function OnboardingDetailComponent_div_0_div_31_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 34);
    i0.ɵɵelementStart(1, "p", 38);
    i0.ɵɵtext(2, "\"Aucun tickets\"");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
function OnboardingDetailComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r484 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 1);
    i0.ɵɵelementStart(1, "h1", 2);
    i0.ɵɵelementStart(2, "p");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "mat-icon", 3);
    i0.ɵɵlistener("click", function OnboardingDetailComponent_div_0_Template_mat_icon_click_4_listener() { i0.ɵɵrestoreView(_r484); const ctx_r483 = i0.ɵɵnextContext(); return ctx_r483.onEdit(); });
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
    i0.ɵɵlistener("scroll", function OnboardingDetailComponent_div_0_Template_div_scroll_23_listener($event) { i0.ɵɵrestoreView(_r484); const ctx_r485 = i0.ɵɵnextContext(); return ctx_r485.onScroll($event); });
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
    const ctx_r447 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("Int\u00E9gration profil ", ctx_r447.detailView == null ? null : ctx_r447.detailView.Name, "");
    i0.ɵɵadvance(8);
    i0.ɵɵtextInterpolate2("", ctx_r447.detailView.user.FirstName, " ", ctx_r447.detailView.user.LastName, "");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(14, 10, ctx_r447.detailView.createdAt, "dd/MM/yy"));
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r447.detailView == null ? null : ctx_r447.detailView.user == null ? null : ctx_r447.detailView.user.Phone == null ? null : ctx_r447.detailView.user.Phone.internationalNumber);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r447.detailView.user.Email);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", ctx_r447.detailView.categories);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r447.detailView.categories);
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("ngIf", ctx_r447.detailView.tickets && ctx_r447.detailView.tickets.length > 0);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r447.detailView.tickets);
} }
export class OnboardingDetailComponent {
    constructor(router, service) {
        this.router = router;
        this.service = service;
        this.onShowMode = new EventEmitter(true);
    }
    ngOnInit() { }
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
        const route = [this.service.mainPath.includes('onboarding') ? this.service.mainPath.split('onboarding')[0] : this.service.mainPath, `tickets/${CaseNumber}`];
        console.log("route-----------", route);
        this.router.navigate(route);
    }
}
OnboardingDetailComponent.ɵfac = function OnboardingDetailComponent_Factory(t) { return new (t || OnboardingDetailComponent)(i0.ɵɵdirectiveInject(i1.Router), i0.ɵɵdirectiveInject(i2.OnboardingService)); };
OnboardingDetailComponent.ɵcmp = i0.ɵɵdefineComponent({ type: OnboardingDetailComponent, selectors: [["lib-onboarding-detail"]], hostBindings: function OnboardingDetailComponent_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("scroll", function OnboardingDetailComponent_scroll_HostBindingHandler($event) { return ctx.onScroll($event); });
    } }, inputs: { detailView: "detailView" }, outputs: { onShowMode: "onShowMode" }, decls: 1, vars: 1, consts: [["class", "onboarding-detail", 4, "ngIf"], [1, "onboarding-detail"], [1, "title"], [2, "margin-left", "20px", "cursor", "pointer", 3, "click"], [1, "view-content"], [1, "left-content"], [1, "user-info"], [1, "user-name"], [1, "user-contact"], ["id", "fields", 1, "fields"], ["class", "menu-item", 3, "ngxScrollTo", "class", "id", 4, "ngFor", "ngForOf"], [1, "category-view-container", 3, "scroll"], ["class", "category-item", 3, "id", 4, "ngFor", "ngForOf"], [1, "right-content"], [1, "subtitle"], [4, "ngIf"], ["class", "box-ticket-info", 4, "ngIf"], [1, "menu-item", 3, "ngxScrollTo", "id"], [1, "category-item", 3, "id"], [1, "category-item-inner"], [1, "category-header"], [1, "title-content"], [1, "category-description"], [1, "progress-status"], ["class", "status in-progress", 4, "ngIf"], ["class", "status progress-bar", 4, "ngIf"], ["class", "category-item-forms", 4, "ngFor", "ngForOf"], [1, "status", "in-progress"], [1, "status", "progress-bar"], [2, "width", "300px"], ["mode", "determinate", 3, "value"], [1, "category-item-forms"], [1, "label"], ["class", "box-ticket-info", 4, "ngFor", "ngForOf"], [1, "box-ticket-info"], [1, "date"], [1, "box-header"], ["mat-button", "", 1, "progress", 3, "click"], [1, "description"]], template: function OnboardingDetailComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, OnboardingDetailComponent_div_0_Template, 32, 13, "div", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.detailView);
    } }, directives: [i3.NgIf, i4.MatIcon, i3.NgForOf, i5.ScrollToDirective, i6.LoadingComponent, i7.MatProgressBar, i8.MatButton], pipes: [i3.DatePipe], styles: [".onboarding-detail[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .onboarding-detail[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .onboarding-detail[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .onboarding-detail[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], .onboarding-detail[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%], .onboarding-detail[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]{margin:0;font-family:Nexa;font-style:normal;font-weight:700;line-height:110%;display:flex;align-items:center;color:#242731}.onboarding-detail[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0}.onboarding-detail[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:24px}.onboarding-detail[_ngcontent-%COMP%]   h1.title[_ngcontent-%COMP%]{margin-bottom:33px;margin-top:10px}.onboarding-detail[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:20px}.onboarding-detail[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:18px}.onboarding-detail[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-size:16px}.onboarding-detail[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{font-size:14px}.onboarding-detail[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]{font-size:12px}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-between;background-color:#f4f7f9}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]{width:70%;border-radius:6px}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-between;height:90px;background:#fff;border-radius:6px;padding:10px;align-items:center}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .user-name[_ngcontent-%COMP%]{text-align:left;line-height:30px}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .user-contact[_ngcontent-%COMP%]{line-height:30px;text-align:right}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]{background:#fff;border-radius:8px;padding:15px;margin-bottom:30px}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   .category-item-inner[_ngcontent-%COMP%]   .category-description[_ngcontent-%COMP%]{font-family:Nexa;font-style:normal;font-weight:250;font-size:14px;line-height:16px;color:#575f6e;margin-top:5px}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   .category-item-inner[_ngcontent-%COMP%]   .category-item-forms[_ngcontent-%COMP%]{margin-top:20px}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   .category-item-inner[_ngcontent-%COMP%]   .category-item-forms[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]{font-family:Nexa;font-style:normal;font-weight:250;font-size:12px;line-height:16px;display:flex;align-items:center;color:#575f6e}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .right-content[_ngcontent-%COMP%]{width:25%;background-color:#fff;border-radius:6px;padding:15px;overflow:auto;max-height:85.5vh;margin-right:20px}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .right-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#575f6e}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .right-content[_ngcontent-%COMP%]   .box-ticket-info[_ngcontent-%COMP%]{padding-bottom:20px;padding-top:20px;border-bottom:2px solid #e2e4e5}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .right-content[_ngcontent-%COMP%]   .box-ticket-info[_ngcontent-%COMP%]   .box-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;margin-bottom:20px}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .right-content[_ngcontent-%COMP%]   .box-ticket-info[_ngcontent-%COMP%]   .box-header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{min-width:auto;height:36px;border-radius:4px;font-family:Nexa;font-weight:500;font-size:16px;display:flex;align-items:center;text-transform:capitalize;color:#fff}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .right-content[_ngcontent-%COMP%]   .box-ticket-info[_ngcontent-%COMP%]   .box-header[_ngcontent-%COMP%]   .finished[_ngcontent-%COMP%]{background:#6fe8d7}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .right-content[_ngcontent-%COMP%]   .box-ticket-info[_ngcontent-%COMP%]   .box-header[_ngcontent-%COMP%]   .progress[_ngcontent-%COMP%]{background:#f3a124}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .category-view-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;max-height:70vh;overflow:auto}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .category-view-container[_ngcontent-%COMP%]::-webkit-scrollbar, .onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .right-content[_ngcontent-%COMP%]::-webkit-scrollbar{display:none}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .category-view-container[_ngcontent-%COMP%], .onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .right-content[_ngcontent-%COMP%]{-ms-overflow-style:none;scrollbar-width:none}.fields[_ngcontent-%COMP%]{height:84%}.fields[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style:none;display:flex;margin:33px 0;padding:0}.fields[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin-right:20px;padding-bottom:5px;border-bottom:3px solid transparent}.fields[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none;font-family:Nexa;font-style:normal;font-weight:700;font-size:14px;line-height:120%;color:#171f26;opacity:.5}.fields[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.menu-item.active[_ngcontent-%COMP%], .fields[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.menu-item[_ngcontent-%COMP%]:hover{cursor:pointer;border-bottom:3px solid #3c4252}.fields[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.menu-item.active[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .fields[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.menu-item[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%]{font-family:Nexa;font-style:normal;font-weight:700;font-size:14px;line-height:120%;opacity:1;text-decoration:none!important}.progress-status[_ngcontent-%COMP%]   .status[_ngcontent-%COMP%]{display:flex;align-items:center}.progress-status[_ngcontent-%COMP%]   .ongoing[_ngcontent-%COMP%]{color:#6fe8d7}.progress-status[_ngcontent-%COMP%]   .in-progress[_ngcontent-%COMP%]{padding-right:25px;color:#f3a124;font-weight:500;font-size:16px}  .progress-status{font-size:16px}  .progress-status .mat-progress-bar{display:block;height:20px;overflow:hidden;border-radius:50px;position:relative;transition:opacity 250ms linear;width:100%}  .progress-status .mat-progress-bar-fill::after{background-color:#6fe8d7}  .progress-status .mat-progress-bar-buffer{background-color:#ecf3f7}.category-header[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between}"] });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib25ib2FyZGluZy1kZXRhaWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vb25ib2FyZGluZy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL29uYm9hcmRpbmcvb25ib2FyZGluZy1kZXRhaWwvb25ib2FyZGluZy1kZXRhaWwuY29tcG9uZW50LnRzIiwibGliL2NvbXBvbmVudHMvb25ib2FyZGluZy9vbmJvYXJkaW5nLWRldGFpbC9vbmJvYXJkaW5nLWRldGFpbC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7Ozs7SUNvQnpFLDhCQUVJO0lBQUEseUJBQUc7SUFBQSxZQUFpQjtJQUFBLGlCQUFJO0lBQzVCLGlCQUFLOzs7O0lBSG1ELDJDQUE2QjtJQUFqRixzREFBaUMsZ0NBQUE7SUFFOUIsZUFBaUI7SUFBakIsd0NBQWlCOzs7SUFrQlIsK0JBRUk7SUFBQSw0QkFBTTtJQUFBLHNDQUFzQjtJQUFBLGlCQUFPO0lBQ25DLDhCQUEyQjtJQUMvQixpQkFBTTs7O0lBTU4sK0JBRUk7SUFBQSxnQ0FBNEI7SUFBQSxZQUNTO0lBQUEsaUJBQU87SUFDNUMsdUNBRW1CO0lBQ3ZCLGlCQUFNOzs7O0lBTDBCLGVBQ1M7SUFEVCxxTEFDUztJQUVqQyxlQUFvRTtJQUFwRSxnS0FBb0U7OztJQU1oRiw2QkFDSTtJQUFBLDZCQUFpQjtJQUFBLFlBQWU7SUFBQSxpQkFBSTtJQUNwQywwQkFBSTtJQUFBLFlBQWU7SUFBQSxpQkFBSztJQUM1QiwwQkFBZTs7O0lBRk0sZUFBZTtJQUFmLHNDQUFlO0lBQzVCLGVBQWU7SUFBZixzQ0FBZTs7O0lBS2YsNkJBQ0k7SUFBQSw2QkFBaUI7SUFBQSxZQUFhO0lBQUEsaUJBQUk7SUFDbEMsMEJBQUk7SUFBQSxZQUFhO0lBQUEsaUJBQUs7SUFDMUIs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IEV2ZW50RW1pdHRlciwgSG9zdExpc3RlbmVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgT25ib2FyZGluZ1NlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9vbmJvYXJkaW5nLnNlcnZpY2UnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLW9uYm9hcmRpbmctZGV0YWlsJyxcbiAgdGVtcGxhdGVVcmw6ICcuL29uYm9hcmRpbmctZGV0YWlsLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vb25ib2FyZGluZy1kZXRhaWwuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBPbmJvYXJkaW5nRGV0YWlsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgZGV0YWlsVmlldztcbiAgQE91dHB1dCgpIG9uU2hvd01vZGUgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KHRydWUpO1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIHNlcnZpY2U6IE9uYm9hcmRpbmdTZXJ2aWNlKSB7IH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHsgfVxuICBASG9zdExpc3RlbmVyKCdzY3JvbGwnLCBbJyRldmVudCddKVxuICBvblNjcm9sbChldmVudCkge1xuICAgIGNvbnN0IHNlY3Rpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcInNlY3Rpb25cIik7XG4gICAgY29uc3QgbmF2TGkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmZpZWxkcyB1bCBsaVwiKTtcblxuICAgIGxldCBjdXJyZW50ID0gXCJcIjtcbiAgICBzZWN0aW9ucy5mb3JFYWNoKChzZWN0aW9uKSA9PiB7XG4gICAgICBjb25zdCBzZWN0aW9uVG9wID0gc2VjdGlvbi5vZmZzZXRUb3A7XG4gICAgICBpZiAoZXZlbnQudGFyZ2V0LnNjcm9sbFRvcCA+IHNlY3Rpb25Ub3AgLSAzMDApIHtcbiAgICAgICAgY3VycmVudCA9IHNlY3Rpb24uZ2V0QXR0cmlidXRlKFwiaWRcIilcbiAgICAgIH1cbiAgICB9KTtcbiAgICBuYXZMaS5mb3JFYWNoKChsaSkgPT4ge1xuICAgICAgY29uc3QgaWQgPSBsaS5nZXRBdHRyaWJ1dGUoJ2lkJylcbiAgICAgIGlmIChpZC5zdWJzdHJpbmcoMCwgaWQubGVuZ3RoIC0gMSkgPT09IGN1cnJlbnQpIHtcbiAgICAgICAgbGkuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxpLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBjYXROYW1lU3RhcnQoc3RyOiBzdHJpbmcpIHtcbiAgICBjb25zdCB2b3dlbHMgPSBbJ2EnLCAnZScsICdpJywgJ28nLCAndScsICd5J107XG4gICAgcmV0dXJuIHZvd2Vscy5pbmNsdWRlcyhzdHIuc3Vic3RyKDAsIDEpLnRvTG9jYWxlTG93ZXJDYXNlKCkpXG4gIH1cbiAgb25FZGl0KCkge1xuICAgIHRoaXMub25TaG93TW9kZS5lbWl0KGZhbHNlKVxuICB9XG5cbiAgcHJvZ3Jlc3MoY29tcGxldGVkLCBsZW5ndGgpIHtcbiAgICByZXR1cm4gMTAwICogY29tcGxldGVkIC8gbGVuZ3RoXG4gIH1cblxuICBvblZpZXdUaWNrZXQoQ2FzZU51bWJlcikge1xuICAgIGNvbnN0IHJvdXRlID0gW3RoaXMuc2VydmljZS5tYWluUGF0aC5pbmNsdWRlcygnb25ib2FyZGluZycpID8gdGhpcy5zZXJ2aWNlLm1haW5QYXRoLnNwbGl0KCdvbmJvYXJkaW5nJylbMF0gOiB0aGlzLnNlcnZpY2UubWFpblBhdGgsIGB0aWNrZXRzLyR7Q2FzZU51bWJlcn1gXVxuICAgIGNvbnNvbGUubG9nKFwicm91dGUtLS0tLS0tLS0tLVwiLCByb3V0ZSk7XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUocm91dGUpXG4gIH1cblxufVxuIiwiPGRpdiBjbGFzcz1cIm9uYm9hcmRpbmctZGV0YWlsXCIgKm5nSWY9XCJkZXRhaWxWaWV3XCI+XG4gICAgPGgxIGNsYXNzPVwidGl0bGVcIj5cbiAgICAgICAgPHA+SW50w6lncmF0aW9uIHByb2ZpbCB7e2RldGFpbFZpZXc/Lk5hbWV9fTwvcD5cbiAgICAgICAgPG1hdC1pY29uIHN0eWxlPVwibWFyZ2luLWxlZnQ6IDIwcHg7IGN1cnNvcjogcG9pbnRlcjtcIiAoY2xpY2spPVwib25FZGl0KClcIj5lZGl0PC9tYXQtaWNvbj5cbiAgICA8L2gxPlxuICAgIDxkaXYgY2xhc3M9XCJ2aWV3LWNvbnRlbnRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImxlZnQtY29udGVudFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInVzZXItaW5mb1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ1c2VyLW5hbWVcIj5cbiAgICAgICAgICAgICAgICAgICAgPGgyPnt7ZGV0YWlsVmlldy51c2VyLkZpcnN0TmFtZSB9fSB7e2RldGFpbFZpZXcudXNlci5MYXN0TmFtZSB9fTwvaDI+XG4gICAgICAgICAgICAgICAgICAgIDxwPnt7ZGV0YWlsVmlldy5jcmVhdGVkQXQgfCBkYXRlOidkZC9NTS95eScgfX08L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInVzZXItY29udGFjdFwiPlxuICAgICAgICAgICAgICAgICAgICA8cD57e2RldGFpbFZpZXc/LnVzZXI/LlBob25lPy5pbnRlcm5hdGlvbmFsTnVtYmVyIH19PC9wPlxuICAgICAgICAgICAgICAgICAgICA8cD57e2RldGFpbFZpZXcudXNlci5FbWFpbCB9fTwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGlkPVwiZmllbGRzXCIgY2xhc3M9XCJmaWVsZHNcIj5cbiAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgIDxsaSBbbmd4U2Nyb2xsVG9dPVwiJyMnK2NhdGVnb3J5Lm5hbWVcIiBjbGFzcz1cIm1lbnUtaXRlbVwiIFtjbGFzc109XCJpPT09MCA/ICdhY3RpdmUnOicnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICpuZ0Zvcj1cImxldCBjYXRlZ29yeSBvZiBkZXRhaWxWaWV3LmNhdGVnb3JpZXM7ICBsZXQgaT1pbmRleFwiIFtpZF09XCJjYXRlZ29yeS5uYW1lKyd4J1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGE+e3tjYXRlZ29yeS5uYW1lfX08L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2F0ZWdvcnktdmlldy1jb250YWluZXJcIiAoc2Nyb2xsKT1cIm9uU2Nyb2xsKCRldmVudClcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3M9XCJjYXRlZ29yeS1pdGVtXCIgKm5nRm9yPVwibGV0IGNhdGVnb3J5IG9mIGRldGFpbFZpZXcuY2F0ZWdvcmllczsgIGxldCBpPWluZGV4XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtpZF09XCJjYXRlZ29yeS5uYW1lXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2F0ZWdvcnktaXRlbS1pbm5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXRlZ29yeS1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRpdGxlLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMj57e2NhdGVnb3J5Lm5hbWV9fTwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImNhdGVnb3J5LWRlc2NyaXB0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTGlzdGVzIGRlcyBpbmZvcm1hdGlvbnMgbsOpY2Vzc2FpcmVzIHBvdXIgbGEgY3LDqWF0aW9uIGRlIHt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2F0TmFtZVN0YXJ0KGNhdGVnb3J5Lm5hbWUpID8gXCJsJ1wiICsgY2F0ZWdvcnkubmFtZSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnkubmFtZSB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByb2dyZXNzLXN0YXR1c1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSB7e2NhdGVnb3J5Py5maWVsZENvbXBsZXRlZH19IC8ge3tjYXRlZ29yeT8uZmllbGRMZW5ndGh9fSAtLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgKm5nSWY9XCJjYXRlZ29yeT8uZmllbGRDb21wbGV0ZWQ9PT1jYXRlZ29yeT8uZmllbGRMZW5ndGhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwic3RhdHVzIGluLXByb2dyZXNzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+RW4gY291cnMgZGUgdHJhaXRlbWVudDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGliLWxvYWRpbmc+PC9saWItbG9hZGluZz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSA8ZGl2ICpuZ0lmPVwiY2F0ZWdvcnk/LmZpZWxkQ29tcGxldGVkID09PWNhdGVnb3J5Py5maWVsZExlbmd0aFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJzdGF0dXMgb25nb2luZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPVwibWFyZ2luLXJpZ2h0OiAxMHB4O1wiPkVuIGNvdXJzPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxtYXQtaWNvbj5jaGVjazwvbWF0LWljb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gLS0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2ICpuZ0lmPVwiY2F0ZWdvcnk/LmZpZWxkQ29tcGxldGVkIDwgY2F0ZWdvcnk/LmZpZWxkTGVuZ3RoXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInN0YXR1cyBwcm9ncmVzcy1iYXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT1cIndpZHRoOiAzMDBweDtcIj57e3Byb2dyZXNzKGNhdGVnb3J5Py5maWVsZENvbXBsZXRlZCAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5Py5maWVsZExlbmd0aCl9fSUgVGVybWluw6k8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG1hdC1wcm9ncmVzcy1iYXIgbW9kZT1cImRldGVybWluYXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3ZhbHVlXT1cInByb2dyZXNzKGNhdGVnb3J5Py5maWVsZENvbXBsZXRlZCAsIGNhdGVnb3J5Py5maWVsZExlbmd0aClcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L21hdC1wcm9ncmVzcy1iYXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhdGVnb3J5LWl0ZW0tZm9ybXNcIiAqbmdGb3I9XCJsZXQgZm9ybXMgb2YgY2F0ZWdvcnkuZm9ybXNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFmb3Jtcy5mb3Jtc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJsYWJlbFwiPnt7Zm9ybXMubGFiZWx9fTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoND57e2Zvcm1zLnZhbHVlfX08L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImZvcm1zLmZvcm1zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+e3tmb3Jtcy5sYWJlbH19PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXRlZ29yeS1pdGVtLWZvcm1zXCIgKm5nRm9yPVwibGV0IHN1YiBvZiBmb3Jtcy5mb3Jtc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhc3ViLmZvcm1zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwibGFiZWxcIj57e3N1Yi5sYWJlbH19PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQ+e3tzdWIudmFsdWV9fTwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cInN1Yi5mb3Jtc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+e3tzdWIubGFiZWx9fTwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXRlZ29yeS1pdGVtLWZvcm1zXCIgKm5nRm9yPVwibGV0IGNoaWxkIG9mIHN1Yi5mb3Jtc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFjaGlsZC5mb3Jtc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwibGFiZWxcIj57e2NoaWxkLmxhYmVsfX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0Pnt7Y2hpbGQudmFsdWV9fTwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJjaGlsZC5mb3Jtc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz57e2NoaWxkLmxhYmVsfX08L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXRlZ29yeS1pdGVtLWZvcm1zXCIgKm5nRm9yPVwibGV0IGMyIG9mIGNoaWxkLmZvcm1zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwibGFiZWxcIj57e2MyLmxhYmVsfX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoND57e2MyLnZhbHVlfX08L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInJpZ2h0LWNvbnRlbnRcIj5cbiAgICAgICAgICAgIDxoMj5UaWNrZXRzIGxpw6lzIMOgIHZvdHJlIGRlbWFuZGU8L2gyPlxuICAgICAgICAgICAgPHAgY2xhc3M9XCJzdWJ0aXRsZVwiPlZvdXMgcmV0cm91dmVyZXogaWNpIHRvdXMgbGVzIHRpY2tldHMgY3LDqcOpcyBsb3JzIGRlIGxhIGNyw6lhdGlvbiBkZSB2b3RyZSBmaWNoZVxuICAgICAgICAgICAgICAgIGTigJlpbnTDqWdyYXRpb24uPC9wPlxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImRldGFpbFZpZXcudGlja2V0cyAmJiBkZXRhaWxWaWV3LnRpY2tldHMubGVuZ3RoPjBcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYm94LXRpY2tldC1pbmZvXCIgKm5nRm9yPVwibGV0IHRpY2tldCBvZiBkZXRhaWxWaWV3LnRpY2tldHNcIj5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJkYXRlXCI+e3t0aWNrZXQuQ3JlYXRlZERhdGUgfCBkYXRlIDonZGQvTU0veXknfX08L3A+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJib3gtaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDI+e3t0aWNrZXQuU3ViamVjdH19PC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gbWF0LWJ1dHRvbiBjbGFzcz1cInByb2dyZXNzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwib25WaWV3VGlja2V0KHRpY2tldC5DYXNlTnVtYmVyKVwiPnt7dGlja2V0LlN0YXR1c319PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImRlc2NyaXB0aW9uXCI+e3t0aWNrZXQuRGVzY3JpcHRpb259fTwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJveC10aWNrZXQtaW5mb1wiICpuZ0lmPVwiIWRldGFpbFZpZXcudGlja2V0c1wiPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiZGVzY3JpcHRpb25cIj5cIkF1Y3VuIHRpY2tldHNcIjwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuXG5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG48L2Rpdj4iXX0=