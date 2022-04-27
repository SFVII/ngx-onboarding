import { __awaiter } from "tslib";
import { Component, HostListener } from '@angular/core';
import { Validators } from "@angular/forms";
import { ExitConfirmComponent } from '../../components/exit-confirm/exit-confirm.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "../../onboarding.service";
import * as i3 from "@angular/router";
import * as i4 from "@angular/material/dialog";
import * as i5 from "@angular/common";
import * as i6 from "@angular/material/icon";
import * as i7 from "@angular/material/button";
import * as i8 from "@nicky-lenaers/ngx-scroll-to";
import * as i9 from "@angular/material/select";
import * as i10 from "ngx-intl-tel-input";
import * as i11 from "@angular/material/core";
import * as i12 from "../../components/onboarding/sub-onboarding-create/sub-onboarding-create.component";
import * as i13 from "../../components/onboarding/onboarding-detail/onboarding-detail.component";
function OnboardingCreateComponent_form_2_li_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li", 15);
    i0.ɵɵelementStart(1, "a");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const category_r324 = ctx.$implicit;
    i0.ɵɵproperty("ngxScrollTo", "#" + category_r324.name)("id", category_r324.name + "x");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(category_r324.name);
} }
function OnboardingCreateComponent_form_2_section_13_mat_select_8_mat_option_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 27);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const select_r332 = ctx.$implicit;
    i0.ɵɵproperty("value", select_r332.value);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", select_r332.value, "");
} }
const _c0 = function () { return { standalone: true }; };
function OnboardingCreateComponent_form_2_section_13_mat_select_8_Template(rf, ctx) { if (rf & 1) {
    const _r335 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-select", 25);
    i0.ɵɵlistener("ngModelChange", function OnboardingCreateComponent_form_2_section_13_mat_select_8_Template_mat_select_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r335); const category_r326 = i0.ɵɵnextContext().$implicit; return category_r326.selector.value = $event; });
    i0.ɵɵtemplate(1, OnboardingCreateComponent_form_2_section_13_mat_select_8_mat_option_1_Template, 2, 2, "mat-option", 26);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const category_r326 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("ngModel", category_r326.selector.value)("ngModelOptions", i0.ɵɵpureFunction0(3, _c0));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", category_r326.selector.defaultValue);
} }
function OnboardingCreateComponent_form_2_section_13_mat_select_9_mat_option_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 27);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const select_r338 = ctx.$implicit;
    i0.ɵɵproperty("value", select_r338.key);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", select_r338.value, "");
} }
function OnboardingCreateComponent_form_2_section_13_mat_select_9_Template(rf, ctx) { if (rf & 1) {
    const _r341 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-select", 28);
    i0.ɵɵlistener("ngModelChange", function OnboardingCreateComponent_form_2_section_13_mat_select_9_Template_mat_select_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r341); const category_r326 = i0.ɵɵnextContext().$implicit; return category_r326.ticketType.value = $event; });
    i0.ɵɵtemplate(1, OnboardingCreateComponent_form_2_section_13_mat_select_9_mat_option_1_Template, 2, 2, "mat-option", 26);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const category_r326 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("ngModel", category_r326.ticketType.value)("ngModelOptions", i0.ɵɵpureFunction0(3, _c0));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", category_r326.ticketType.defaultValue);
} }
function OnboardingCreateComponent_form_2_section_13_div_11_div_1_div_5_div_1_div_1_div_5_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r357 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 31);
    i0.ɵɵelementStart(1, "div", 32);
    i0.ɵɵelementStart(2, "div", 33);
    i0.ɵɵelementStart(3, "lib-sub-create-onboarding", 40);
    i0.ɵɵlistener("onCheckValue", function OnboardingCreateComponent_form_2_section_13_div_11_div_1_div_5_div_1_div_1_div_5_div_1_div_1_Template_lib_sub_create_onboarding_onCheckValue_3_listener($event) { i0.ɵɵrestoreView(_r357); const ctx_r356 = i0.ɵɵnextContext(10); return ctx_r356.onCheckValue($event); });
    i0.ɵɵelement(4, "div", 35);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r358 = i0.ɵɵnextContext();
    const c2_r353 = ctx_r358.$implicit;
    const l_r354 = ctx_r358.index;
    const ctx_r359 = i0.ɵɵnextContext(3);
    const child_r348 = ctx_r359.$implicit;
    const k_r349 = ctx_r359.index;
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("field", c2_r353)("length", child_r348 == null ? null : child_r348.forms == null ? null : child_r348.forms.length)("i", k_r349)("j", l_r354);
} }
function OnboardingCreateComponent_form_2_section_13_div_11_div_1_div_5_div_1_div_1_div_5_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 39);
    i0.ɵɵtemplate(1, OnboardingCreateComponent_form_2_section_13_div_11_div_1_div_5_div_1_div_1_div_5_div_1_div_1_Template, 5, 4, "div", 30);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const c2_r353 = ctx.$implicit;
    const child_r348 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r352 = i0.ɵɵnextContext(6);
    i0.ɵɵstyleProp("width", c2_r353.forms || c2_r353.type === "textarea" ? "100%" : ctx_r352.fieldWidth(child_r348.forms.length));
    i0.ɵɵproperty("id", c2_r353.key);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", c2_r353.expandOnboarding && ctx_r352.onCheckConditionLocationValue(c2_r353.isConditional, c2_r353.conditionLocation, c2_r353.conditionValue));
} }
function OnboardingCreateComponent_form_2_section_13_div_11_div_1_div_5_div_1_div_1_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 37);
    i0.ɵɵtemplate(1, OnboardingCreateComponent_form_2_section_13_div_11_div_1_div_5_div_1_div_1_div_5_div_1_Template, 2, 4, "div", 38);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const child_r348 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", child_r348.forms);
} }
function OnboardingCreateComponent_form_2_section_13_div_11_div_1_div_5_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r363 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 31);
    i0.ɵɵelementStart(1, "div", 32);
    i0.ɵɵelementStart(2, "div", 33);
    i0.ɵɵelementStart(3, "lib-sub-create-onboarding", 40);
    i0.ɵɵlistener("onCheckValue", function OnboardingCreateComponent_form_2_section_13_div_11_div_1_div_5_div_1_div_1_Template_lib_sub_create_onboarding_onCheckValue_3_listener($event) { i0.ɵɵrestoreView(_r363); const ctx_r362 = i0.ɵɵnextContext(7); return ctx_r362.onCheckValue($event); });
    i0.ɵɵelementStart(4, "div", 35);
    i0.ɵɵtemplate(5, OnboardingCreateComponent_form_2_section_13_div_11_div_1_div_5_div_1_div_1_div_5_Template, 2, 1, "div", 36);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r364 = i0.ɵɵnextContext();
    const child_r348 = ctx_r364.$implicit;
    const k_r349 = ctx_r364.index;
    const ctx_r365 = i0.ɵɵnextContext(3);
    const field_r343 = ctx_r365.$implicit;
    const j_r344 = ctx_r365.index;
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("field", child_r348)("length", field_r343 == null ? null : field_r343.forms == null ? null : field_r343.forms.length)("i", j_r344)("j", k_r349);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", child_r348.forms && child_r348.value);
} }
function OnboardingCreateComponent_form_2_section_13_div_11_div_1_div_5_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 39);
    i0.ɵɵtemplate(1, OnboardingCreateComponent_form_2_section_13_div_11_div_1_div_5_div_1_div_1_Template, 6, 5, "div", 30);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const child_r348 = ctx.$implicit;
    const field_r343 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r347 = i0.ɵɵnextContext(3);
    i0.ɵɵstyleProp("width", child_r348.forms || child_r348.type === "textarea" ? "100%" : ctx_r347.fieldWidth(field_r343.forms.length));
    i0.ɵɵproperty("id", child_r348.key);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", child_r348.expandOnboarding && ctx_r347.onCheckConditionLocationValue(child_r348.isConditional, child_r348.conditionLocation, child_r348.conditionValue));
} }
function OnboardingCreateComponent_form_2_section_13_div_11_div_1_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 37);
    i0.ɵɵtemplate(1, OnboardingCreateComponent_form_2_section_13_div_11_div_1_div_5_div_1_Template, 2, 4, "div", 38);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const field_r343 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", field_r343.forms);
} }
function OnboardingCreateComponent_form_2_section_13_div_11_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 31);
    i0.ɵɵelementStart(1, "div", 32);
    i0.ɵɵelementStart(2, "div", 33);
    i0.ɵɵelementStart(3, "lib-sub-create-onboarding", 34);
    i0.ɵɵelementStart(4, "div", 35);
    i0.ɵɵtemplate(5, OnboardingCreateComponent_form_2_section_13_div_11_div_1_div_5_Template, 2, 1, "div", 36);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r368 = i0.ɵɵnextContext();
    const field_r343 = ctx_r368.$implicit;
    const j_r344 = ctx_r368.index;
    const ctx_r369 = i0.ɵɵnextContext();
    const category_r326 = ctx_r369.$implicit;
    const i_r327 = ctx_r369.index;
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("field", field_r343)("length", category_r326 == null ? null : category_r326.forms == null ? null : category_r326.forms.length)("i", i_r327)("j", j_r344);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", field_r343.forms && field_r343.value);
} }
function OnboardingCreateComponent_form_2_section_13_div_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 29);
    i0.ɵɵtemplate(1, OnboardingCreateComponent_form_2_section_13_div_11_div_1_Template, 6, 5, "div", 30);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const field_r343 = ctx.$implicit;
    const category_r326 = i0.ɵɵnextContext().$implicit;
    const ctx_r330 = i0.ɵɵnextContext(2);
    i0.ɵɵstyleProp("width", field_r343.forms || field_r343.type === "textarea" ? "100%" : ctx_r330.fieldWidth(category_r326.forms.length));
    i0.ɵɵproperty("id", field_r343.key);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", field_r343.expandOnboarding && ctx_r330.onCheckConditionLocationValue(field_r343.isConditional, field_r343.conditionLocation, field_r343.conditionValue));
} }
function OnboardingCreateComponent_form_2_section_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 16);
    i0.ɵɵelementStart(1, "div", 17);
    i0.ɵɵelementStart(2, "div", 18);
    i0.ɵɵelementStart(3, "div", 19);
    i0.ɵɵelementStart(4, "h4", 20);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "p");
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(8, OnboardingCreateComponent_form_2_section_13_mat_select_8_Template, 2, 4, "mat-select", 21);
    i0.ɵɵtemplate(9, OnboardingCreateComponent_form_2_section_13_mat_select_9_Template, 2, 4, "mat-select", 22);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "div", 23);
    i0.ɵɵtemplate(11, OnboardingCreateComponent_form_2_section_13_div_11_Template, 2, 4, "div", 24);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const category_r326 = ctx.$implicit;
    const ctx_r323 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("id", category_r326.name);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(category_r326.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" Listes des informations n\u00E9cessaires pour la cr\u00E9ation de ", ctx_r323.catNameStart(category_r326.name) ? "l'" + category_r326.name : category_r326.name, " ");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", category_r326.selector);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", (category_r326.ticketType == null ? null : category_r326.ticketType.value) && category_r326.selector.value === "Nowteam");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", category_r326.forms);
} }
function OnboardingCreateComponent_form_2_Template(rf, ctx) { if (rf & 1) {
    const _r372 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "form", 3);
    i0.ɵɵlistener("submit", function OnboardingCreateComponent_form_2_Template_form_submit_0_listener() { i0.ɵɵrestoreView(_r372); const ctx_r371 = i0.ɵɵnextContext(); return ctx_r371.onSubmit(); });
    i0.ɵɵelementStart(1, "div", 4);
    i0.ɵɵelementStart(2, "div", 5);
    i0.ɵɵelementStart(3, "h2");
    i0.ɵɵtext(4);
    i0.ɵɵelementStart(5, "mat-icon", 6);
    i0.ɵɵlistener("click", function OnboardingCreateComponent_form_2_Template_mat_icon_click_5_listener() { i0.ɵɵrestoreView(_r372); const ctx_r373 = i0.ɵɵnextContext(); return ctx_r373.onShowMode(); });
    i0.ɵɵtext(6, "visibility");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "button", 7);
    i0.ɵɵlistener("click", function OnboardingCreateComponent_form_2_Template_button_click_7_listener() { i0.ɵɵrestoreView(_r372); const ctx_r374 = i0.ɵɵnextContext(); return ctx_r374.onResumeLater(); });
    i0.ɵɵtext(8, "Reprendre plus tard");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "div", 8);
    i0.ɵɵelementStart(10, "ul");
    i0.ɵɵtemplate(11, OnboardingCreateComponent_form_2_li_11_Template, 3, 3, "li", 9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "div", 10);
    i0.ɵɵlistener("scroll", function OnboardingCreateComponent_form_2_Template_div_scroll_12_listener($event) { i0.ɵɵrestoreView(_r372); const ctx_r375 = i0.ɵɵnextContext(); return ctx_r375.onScroll($event); });
    i0.ɵɵtemplate(13, OnboardingCreateComponent_form_2_section_13_Template, 12, 6, "section", 11);
    i0.ɵɵelementStart(14, "div", 12);
    i0.ɵɵelementStart(15, "button", 13);
    i0.ɵɵtext(16, "Envoyer ma fiche");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "button", 14);
    i0.ɵɵlistener("click", function OnboardingCreateComponent_form_2_Template_button_click_17_listener() { i0.ɵɵrestoreView(_r372); const ctx_r376 = i0.ɵɵnextContext(); return ctx_r376.onResumeLater(); });
    i0.ɵɵtext(18, "Reprendre plus tard");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r320 = i0.ɵɵnextContext();
    i0.ɵɵproperty("formGroup", ctx_r320.form);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1("Int\u00E9gration profil ", ctx_r320.currentTemplate == null ? null : ctx_r320.currentTemplate.Name, " ");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("disabled", ctx_r320.loading);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngForOf", ctx_r320.categories);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r320.categories);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("disabled", ctx_r320.loading || !ctx_r320.form.valid);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("disabled", ctx_r320.loading);
} }
function OnboardingCreateComponent_lib_onboarding_detail_3_Template(rf, ctx) { if (rf & 1) {
    const _r378 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "lib-onboarding-detail", 41);
    i0.ɵɵlistener("onShowMode", function OnboardingCreateComponent_lib_onboarding_detail_3_Template_lib_onboarding_detail_onShowMode_0_listener() { i0.ɵɵrestoreView(_r378); const ctx_r377 = i0.ɵɵnextContext(); return ctx_r377.onShowMode(); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r321 = i0.ɵɵnextContext();
    i0.ɵɵproperty("detailView", ctx_r321.detailView);
} }
export class OnboardingCreateComponent {
    constructor(fb, service, route, router, dialog) {
        this.fb = fb;
        this.service = service;
        this.route = route;
        this.router = router;
        this.dialog = dialog;
        this.currentProfil = {};
        this.canExit = true;
        this.tags = [];
        this.onboardingId = "0";
        this.templateId = "0";
        this.parent = [];
        this.selectedMenu = 0;
        this.showMode = false;
        this.selectedCategoryIndex = null;
        this.loading = false;
        this.service._currentOnboarding.subscribe((onboarding) => __awaiter(this, void 0, void 0, function* () {
            this.onCreateDynamicForm();
            this.isSelected = true;
            if (onboarding) {
                this.form.patchValue({
                    TemplateId: onboarding.TemplateId
                });
                yield this.onSelect(onboarding.TemplateId, onboarding);
            }
            else {
                this.templateId = this.route.snapshot.paramMap.get("templateId");
                this.form.patchValue({
                    TemplateId: this.templateId
                });
                yield this.onSelect(this.templateId, null);
            }
        }));
    }
    isObject(obj) {
        return obj !== undefined && obj !== null && obj.constructor == Object;
    }
    canDeactivate() {
        if (!this.canExit) {
            this.dialog.open(ExitConfirmComponent, {
                data: ''
            });
            return this.service.canExit$;
        }
        return true;
    }
    onScroll(event) {
        const sections = document.querySelectorAll("section");
        const navLi = document.querySelectorAll(".fields ul li");
        let current = "";
        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            if (event.target.scrollTop > sectionTop - 200) {
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
    ngOnInit() {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            this.templateId = this.route.snapshot.paramMap.get("templateId");
            this.onboardingId = this.route.snapshot.paramMap.get("onboardingId");
            if (this.onboardingId && this.onboardingId !== "0") {
                this.showMode = true;
                this.currentOnboarding = yield this.service.getOnboarding(this.onboardingId);
                this.form.patchValue(this.currentOnboarding);
                this.categories = this.currentOnboarding.categories;
                this.onLoadViewDetail(this.categories);
                this.currentTemplate = (_a = this.currentOnboarding) === null || _a === void 0 ? void 0 : _a.vtemplates[0];
                if (this.currentOnboarding.TemplateId) {
                    this.isSelected = true;
                }
            }
        });
    }
    onLoadViewDetail(categories) {
        var _a, _b, _c, _d;
        const user = {};
        const categoriesView = categories.map((category) => {
            const { name, expandOnboarding } = category;
            let categoryForm = [];
            let fieldCompleted = 0;
            let fieldLength = 0;
            if (category.forms) {
                categoryForm = category.forms.map((form) => {
                    var _a, _b;
                    if (form.isMandatory) {
                        fieldLength += 1;
                    }
                    if (form.isMandatory && !!form.value) {
                        fieldCompleted += 1;
                    }
                    const newsubforms = {
                        label: form.label,
                        value: form.type !== "tel" ? form.value : ((_b = (_a = form) === null || _a === void 0 ? void 0 : _a.value) === null || _b === void 0 ? void 0 : _b.internationalNumber) || '',
                        key: form.key
                    };
                    if (categories.name = "Utilisateur") {
                        user[form.key] = form.value;
                    }
                    let subForm = [];
                    if (form.forms) {
                        subForm = form.forms.map((subForm) => {
                            var _a, _b;
                            if (subForm.isMandatory) {
                                fieldLength += 1;
                            }
                            if (subForm.isMandatory && !!subForm.value) {
                                fieldCompleted += 1;
                            }
                            const childforms = {
                                label: subForm.label,
                                value: subForm.type !== "tel" ? subForm.value : ((_b = (_a = subForm) === null || _a === void 0 ? void 0 : _a.value) === null || _b === void 0 ? void 0 : _b.internationalNumber) || '',
                                key: subForm.key
                            };
                            let child2 = [];
                            if (subForm.forms) {
                                child2 = subForm.forms.map((c2) => {
                                    var _a, _b;
                                    if (c2.isMandatory) {
                                        fieldLength += 1;
                                    }
                                    if (c2.isMandatory && !!c2.value) {
                                        fieldCompleted += 1;
                                    }
                                    return {
                                        label: c2.label,
                                        value: c2.type !== "tel" ? c2.value : ((_b = (_a = c2) === null || _a === void 0 ? void 0 : _a.value) === null || _b === void 0 ? void 0 : _b.internationalNumber) || '',
                                        key: c2.key
                                    };
                                });
                                return Object.assign(Object.assign({}, childforms), { expandOnboarding: subForm.expandOnboarding, forms: child2, key: form.key });
                            }
                            else {
                                return childforms;
                            }
                        });
                        return Object.assign(Object.assign({}, newsubforms), { expandOnboarding: form.expandOnboarding, forms: subForm, key: form.key });
                    }
                    else {
                        return newsubforms;
                    }
                });
            }
            return {
                name, expandOnboarding,
                forms: categoryForm,
                key: category.key,
                fieldCompleted,
                fieldLength
            };
        });
        this.detailView = {
            categories: categoriesView,
            // view: this.currentOnboarding.view,
            createdAt: ((_a = this.currentOnboarding) === null || _a === void 0 ? void 0 : _a.createdAt) || new Date().toISOString(),
            user: user,
            Name: ((_c = (_b = this.currentOnboarding) === null || _b === void 0 ? void 0 : _b.vtemplates[0]) === null || _c === void 0 ? void 0 : _c.Name) || ((_d = this.currentTemplate) === null || _d === void 0 ? void 0 : _d.Name)
        };
    }
    onCreateDynamicForm() {
        this.form = this.fb.group({
            TemplateId: [0, Validators.required]
        });
    }
    catNameStart(str) {
        const vowels = ['a', 'e', 'i', 'o', 'u', 'y'];
        return vowels.includes(str.substr(0, 1).toLocaleLowerCase());
    }
    onSelect(id, onboarding) {
        return __awaiter(this, void 0, void 0, function* () {
            if (id) {
                this.currentTemplate = yield this.service.getProfil(id);
                this.categories = onboarding ? onboarding.categories : this.currentTemplate.categories
                    .filter((cat) => cat.expandOnboarding)
                    .map((cat) => {
                    if (cat.forms) {
                        const f = cat.forms
                            .filter((form) => form.expandOnboarding)
                            .map((sub) => {
                            if (sub.forms) {
                                const s = sub.forms.filter((child) => {
                                    if (child.forms) {
                                        const c = child.forms.filter((ch) => ch.expandOnboarding);
                                        return Object.assign(Object.assign({}, child), { forms: c });
                                    }
                                    return child;
                                });
                                return Object.assign(Object.assign({}, sub), { forms: s });
                            }
                            return sub;
                        });
                        return Object.assign(Object.assign({}, cat), { forms: f });
                    }
                    return cat;
                });
            }
        });
    }
    existSubForm(forms) {
        let exist = false;
        if (forms) {
            for (const sub of forms) {
                if (sub.forms) {
                    exist = true;
                }
            }
        }
        return exist;
    }
    onChangeCategory() {
        const checkMandatory = (field) => !!field.value && field.isMandatory && field.type !== "checkbox_multiple" || field.isConditional || !field.isMandatory || field.type === "checkbox_multiple";
        return this.categories.every((cat) => cat.forms.every((field) => {
            if (field.forms) {
                return field.forms.every((form) => {
                    if (form.forms) {
                        return form.forms.every((child) => {
                            return checkMandatory(child);
                        });
                    }
                    return checkMandatory(form);
                });
            }
            return checkMandatory(field);
        }));
    }
    onSubmit() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.form.valid && this.onChangeCategory()) {
                this.loading = true;
                const result = this.onboardingId && this.onboardingId !== "0"
                    ? yield this.service.updateOnboarding(Object.assign(Object.assign({}, this.form.value), { categories: this.categories, Finished: true, _id: this.onboardingId }))
                    : yield this.service.createOnboarding(Object.assign(Object.assign({}, this.form.value), { categories: this.categories, Finished: true }));
                if (result) {
                    if (this.onboardingId && this.onboardingId !== "0") {
                        this.categories = result.categories;
                        this.currentOnboarding = result;
                    }
                    yield this.service.getAllProfil();
                    this.loading = false;
                    this.canExit = true;
                    this.showMode = true;
                    this.router.navigate([this.service.mainPath + '/requests']);
                }
                else {
                    console.log("errror......");
                    this.loading = false;
                }
            }
        });
    }
    onResumeLater() {
        return __awaiter(this, void 0, void 0, function* () {
            this.loading = true;
            const result = this.onboardingId && this.onboardingId !== "0"
                ? yield this.service.updateOnboarding(Object.assign(Object.assign({}, this.form.value), { categories: this.categories, Finished: false, _id: this.onboardingId }))
                : yield this.service.createOnboarding(Object.assign(Object.assign({}, this.form.value), { categories: this.categories, Finished: false }));
            if (result) {
                if (this.onboardingId && this.onboardingId !== "0") {
                    this.categories = result.categories;
                    this.currentOnboarding = result;
                }
                yield this.service.getAllProfil();
                this.loading = false;
                this.canExit = true;
                this.showMode = true;
                this.router.navigate([this.service.mainPath + '/requests']);
            }
            else {
                console.log("errror......");
                this.loading = false;
            }
        });
    }
    ingoreDefaultAction(e) {
        e.preventDefault();
    }
    onCheckConditionLocationValue(iscondition, location, conditionValue) {
        if (!iscondition) {
            return true;
        }
        if (location.level === 1) {
            if (this.categories[location.categoryIndex].forms[location.currentIndex].type === 'checkbox_multiple') {
                const array = this.categories[location.categoryIndex].forms[location.currentIndex].defaultValue.filter((check) => check.checked);
                let checked = false;
                for (var i = 0; i < array.length; i++) {
                    if (array[i].value == conditionValue) {
                        checked = true;
                        break;
                    }
                }
                return checked;
            }
            else {
                return this.categories[location.categoryIndex].forms[location.currentIndex].value === conditionValue;
            }
        }
        else if (location.level === 2) {
            if (this.categories[location.categoryIndex].forms[location.formIndex].forms[location.currentIndex].type === 'checkbox_multiple') {
                const array = this.categories[location.categoryIndex].forms[location.formIndex].forms[location.currentIndex].defaultValue.filter((check) => check.checked);
                let checked = false;
                for (var i = 0; i < array.length; i++) {
                    if (array[i].value == conditionValue) {
                        checked = true;
                        break;
                    }
                }
                return checked;
            }
            else {
                return this.categories[location.categoryIndex].forms[location.formIndex].forms[location.currentIndex].value === conditionValue;
            }
        }
        else if (location.level === 3) {
            if (this.categories[location.categoryIndex].forms[location.formIndex].forms[location.subIndex].forms[location.currentIndex].type === 'checkbox_multiple') {
                const array = this.categories[location.categoryIndex].forms[location.formIndex].forms[location.subIndex].forms[location.currentIndex].defaultValue.filter((check) => check.checked);
                let checked = false;
                for (var i = 0; i < array.length; i++) {
                    if (array[i].value == conditionValue) {
                        checked = true;
                        break;
                    }
                }
                return checked;
            }
            else {
                return this.categories[location.categoryIndex].forms[location.formIndex].forms[location.subIndex].forms[location.currentIndex].value === conditionValue;
            }
        }
        else {
            return true;
        }
    }
    checkSubForm(forms) {
        let hasSubForm = false;
        for (const form of forms) {
            if (form.forms && form.forms.length > 0) {
                hasSubForm = true;
                break;
            }
        }
        return hasSubForm;
    }
    onSelectMenu(i) {
        this.selectedMenu = i;
        this.selectedCategoryIndex = i;
        setTimeout(() => {
            this.selectedCategoryIndex = null;
        }, 2000);
    }
    onCheckValue(event) {
        this.invalideValue = event;
    }
    onLink(e) {
        e.preventDefault();
    }
    fieldWidth(length) {
        if (length === 1) {
            return '50%';
        }
        else if (length === 2) {
            return '50%';
        }
        else if (length === 3) {
            return '33%';
        }
        else if (length === 4) {
            return '25%';
        }
        else if (length === 5) {
            return '33%';
        }
        else if (length >= 6) {
            return '33%';
        }
    }
    onShowMode() {
        this.showMode = !this.showMode;
        this.onLoadViewDetail(this.categories);
    }
}
OnboardingCreateComponent.ɵfac = function OnboardingCreateComponent_Factory(t) { return new (t || OnboardingCreateComponent)(i0.ɵɵdirectiveInject(i1.FormBuilder), i0.ɵɵdirectiveInject(i2.OnboardingService), i0.ɵɵdirectiveInject(i3.ActivatedRoute), i0.ɵɵdirectiveInject(i3.Router), i0.ɵɵdirectiveInject(i4.MatDialog)); };
OnboardingCreateComponent.ɵcmp = i0.ɵɵdefineComponent({ type: OnboardingCreateComponent, selectors: [["create-onboarding"]], hostBindings: function OnboardingCreateComponent_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("scroll", function OnboardingCreateComponent_scroll_HostBindingHandler($event) { return ctx.onScroll($event); });
    } }, decls: 4, vars: 2, consts: [[1, "content"], [3, "formGroup", "submit", 4, "ngIf"], [3, "detailView", "onShowMode", 4, "ngIf"], [3, "formGroup", "submit"], [1, "category"], [1, "title-group"], [2, "margin-left", "20px", "cursor", "pointer", 3, "click"], ["mat-button", "", "type", "button", 1, "register-button", 3, "disabled", "click"], ["id", "fields", 1, "fields"], ["class", "menu-item", 3, "ngxScrollTo", "id", 4, "ngFor", "ngForOf"], [1, "category-container", 3, "scroll"], ["class", "category-item content-item", 3, "id", 4, "ngFor", "ngForOf"], [1, "actions-button", 2, "margin-bottom", "50px"], ["mat-button", "", "type", "submit", 1, "register-button", "send-form", 3, "disabled"], ["mat-button", "", "type", "button", 1, "register-button", "resume", 3, "disabled", "click"], [1, "menu-item", 3, "ngxScrollTo", "id"], [1, "category-item", "content-item", 3, "id"], [1, "field-content"], [1, "field-item"], [1, "category-title-group"], [1, "category-name"], ["placeholder", "Company", "required", "", "style", "width: 150px;", 3, "ngModel", "ngModelOptions", "ngModelChange", 4, "ngIf"], ["placeholder", "Type de ticket", "required", "", "style", "width: 150px;", 3, "ngModel", "ngModelOptions", "ngModelChange", 4, "ngIf"], [1, "category-container"], ["class", "field-category", 3, "id", "width", 4, "ngFor", "ngForOf"], ["placeholder", "Company", "required", "", 2, "width", "150px", 3, "ngModel", "ngModelOptions", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["placeholder", "Type de ticket", "required", "", 2, "width", "150px", 3, "ngModel", "ngModelOptions", "ngModelChange"], [1, "field-category", 3, "id"], ["class", "inner-loop", 4, "ngIf"], [1, "inner-loop"], [1, "fields-content"], [1, "fields-container"], [3, "field", "length", "i", "j"], [1, "child"], ["class", "inner-child", 4, "ngIf"], [1, "inner-child"], ["class", "inner-child-content", 3, "id", "width", 4, "ngFor", "ngForOf"], [1, "inner-child-content", 3, "id"], [3, "field", "length", "i", "j", "onCheckValue"], [3, "detailView", "onShowMode"]], template: function OnboardingCreateComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "main");
        i0.ɵɵelementStart(1, "div", 0);
        i0.ɵɵtemplate(2, OnboardingCreateComponent_form_2_Template, 19, 7, "form", 1);
        i0.ɵɵtemplate(3, OnboardingCreateComponent_lib_onboarding_detail_3_Template, 1, 1, "lib-onboarding-detail", 2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", !ctx.showMode);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.showMode);
    } }, directives: [i5.NgIf, i1.ɵangular_packages_forms_forms_y, i1.NgControlStatusGroup, i1.FormGroupDirective, i6.MatIcon, i7.MatButton, i5.NgForOf, i8.ScrollToDirective, i9.MatSelect, i1.RequiredValidator, i1.NgControlStatus, i1.NgModel, i10.NativeElementInjectorDirective, i11.MatOption, i12.SubOnboardingCreateComponent, i13.OnboardingDetailComponent], styles: ["main[_ngcontent-%COMP%]{background:no-repeat padding-box #f4f7f9;height:100vh;width:100%;display:flex;flex-direction:column;align-items:center}main[_ngcontent-%COMP%]   .disabled[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{background-color:transparent!important}main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{width:99%;height:100%;padding-left:1%}main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font:bold 32px/30px Nexa Text;letter-spacing:0;color:#171f26;padding-top:20px}main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font:20px/26px Nexa Text;letter-spacing:0;color:#171f26}main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   p.sub-title[_ngcontent-%COMP%]{max-width:400px}main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .select-contact[_ngcontent-%COMP%]{max-width:70%;margin:5% auto auto;background:no-repeat padding-box #fff;border:1px solid #dce4e9;border-radius:6px;padding:5%}main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .select-contact[_ngcontent-%COMP%]   .select-template[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;justify-content:space-between;margin-top:50px}main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .select-contact[_ngcontent-%COMP%]   .select-template[_ngcontent-%COMP%]   .full-width[_ngcontent-%COMP%]{width:40%}main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .select-contact[_ngcontent-%COMP%]   .select-template[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{float:right;text-align:center;border:1px solid #543cb6;border-radius:7px;padding:1em 2em;display:flex;align-items:center;background-color:transparent;font:bold 15px/17px Nexa;letter-spacing:0;color:#543cb6;-ms-grid-row-align:center;align-self:center;width:220px}main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .category[_ngcontent-%COMP%]   .onboarding-mat-stepper[_ngcontent-%COMP%]   mat-horizontal-stepper[_ngcontent-%COMP%]   .next-step[_ngcontent-%COMP%]{float:right}main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{display:flex;height:100%;width:100%;max-width:1500px;margin:auto;overflow:hidden}main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .select-contact[_ngcontent-%COMP%]{max-width:70%;margin:5% auto auto;background:no-repeat padding-box #fff;border:1px solid #dce4e9;border-radius:6px;padding:5%}main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .select-contact[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{float:right;text-align:center;border:1px solid #543cb6;border-radius:7px;padding:.7em 2em .5em;display:flex;align-items:center;background-color:transparent;font:bold 15px/17px Nexa;letter-spacing:0;color:#543cb6;align-self:flex-end}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]{width:786px;background:no-repeat padding-box #fff;border:1px solid #dce4e9;border-radius:6px;opacity:1;margin:auto;padding:0 25px;-ms-grid-row-align:center;align-self:center}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{text-align:center;font:900 32px/48px Nexa;letter-spacing:0;color:#171f26}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font:18px/24px Nexa Text;letter-spacing:0;color:#171f26}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .profil-name-content[_ngcontent-%COMP%]{display:flex;align-items:center;position:relative}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .profil-name-content[_ngcontent-%COMP%]   .add-picto[_ngcontent-%COMP%]{margin-right:15px;min-width:50px;width:30px;padding:9px 12px}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .profil-name-content[_ngcontent-%COMP%]   .add-picto[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin-right:10px}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .profil-name-content[_ngcontent-%COMP%]   .list-picto[_ngcontent-%COMP%]{position:absolute;height:200px;width:100%;background:no-repeat padding-box #fff;border:1px solid #171f26;border-radius:8px;top:100%;z-index:1}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .profil-name-content[_ngcontent-%COMP%]   .list-picto[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin:15px;border:none;font-size:40px}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .profil-name-content[_ngcontent-%COMP%]   .list-picto[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]:hover{color:#830b6b!important;cursor:pointer}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .box-title-content[_ngcontent-%COMP%]{width:100%;margin:25px auto}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font:900 32px/38px Nexa;letter-spacing:0;color:#171f26}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font:15px/26px Nexa Text;letter-spacing:0;color:#171f26;text-align:center}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .link-create-profil[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:center}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{text-align:center;border:1px solid #543cb6;border-radius:7px;padding:.7em 2em .5em;display:flex;align-items:center;background-color:transparent;font:bold 15px/17px Nexa;letter-spacing:0;color:#543cb6}main[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:space-between}.expand-button[_ngcontent-%COMP%]{color:#5a607f!important;background-color:transparent!important;box-shadow:none!important}.full-width[_ngcontent-%COMP%]{width:100%}.field-action[_ngcontent-%COMP%]{width:10%}.field-size[_ngcontent-%COMP%]{width:90%;margin:auto 2% auto auto}  .mat-form-field-appearance-fill .mat-form-field-flex{background-color:#fff}  .mat-form-field-appearance-fill .mat-form-field-underline::before{background-color:transparent}[_nghost-%COMP%]     .mat-checkbox-checked.mat-accent .mat-checkbox-background, [_nghost-%COMP%]     .mat-checkbox-indeterminate.mat-accent .mat-checkbox-background{background-color:transparent}.category-action[_ngcontent-%COMP%]{display:flex;width:100%;overflow:hidden}.delete-field[_ngcontent-%COMP%]{margin:auto 2%}.radio-group[_ngcontent-%COMP%]   .mat-radio-button[_ngcontent-%COMP%]{margin-right:10px}.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary[_ngcontent-%COMP%]{background-color:#3f51b5;color:#fff;min-height:20px;font-size:10px}.move-icons[_ngcontent-%COMP%]{cursor:move}.category-item[_ngcontent-%COMP%], .cdk-drag-placeholder[_ngcontent-%COMP%]{display:flex;align-items:baseline;width:100%;border:1px solid #dce4e9;border-radius:8px;background-color:#fff;margin-top:10px;padding:15px}.category-item[_ngcontent-%COMP%]   .left-action[_ngcontent-%COMP%], .cdk-drag-placeholder[_ngcontent-%COMP%]   .left-action[_ngcontent-%COMP%]{height:auto;background-color:#49a094;padding-top:7px;width:40px;-ms-grid-row-align:stretch;align-self:stretch;border-top-left-radius:8px;border-bottom-left-radius:8px}.category-item[_ngcontent-%COMP%]   .left-action[_ngcontent-%COMP%]   .transparent-button[_ngcontent-%COMP%], .cdk-drag-placeholder[_ngcontent-%COMP%]   .left-action[_ngcontent-%COMP%]   .transparent-button[_ngcontent-%COMP%]{background-color:transparent;box-shadow:none;width:40px;padding:0;margin:0;min-width:auto;color:#fff}.category-item[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%], .cdk-drag-placeholder[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%]{width:100%}.category-item[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%], .cdk-drag-placeholder[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]{display:-ms-grid;display:grid;-ms-grid-columns:1fr 1fr 1fr;grid-template-columns:1fr 1fr 1fr;align-items:center;border:transparent!important}.category-item[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]   .category-title-group[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .cdk-drag-placeholder[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]   .category-title-group[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-family:Nexa;font-style:normal;font-weight:250;font-size:14px;line-height:16px;color:#575f6e}.category-item[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]   .category-title-group[_ngcontent-%COMP%]   .category-name[_ngcontent-%COMP%], .cdk-drag-placeholder[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]   .category-title-group[_ngcontent-%COMP%]   .category-name[_ngcontent-%COMP%]{text-align:left;font:bold 22px/48px Nexa Text;letter-spacing:0;color:#171f26;margin:0}.category-item[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]   .mat-form-field-wrapper[_ngcontent-%COMP%]   .mat-form-field-flex[_ngcontent-%COMP%]   .mat-form-field-outline[_ngcontent-%COMP%], .category-item[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%]   .mat-form-field-outline[_ngcontent-%COMP%], .cdk-drag-placeholder[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]   .mat-form-field-wrapper[_ngcontent-%COMP%]   .mat-form-field-flex[_ngcontent-%COMP%]   .mat-form-field-outline[_ngcontent-%COMP%], .cdk-drag-placeholder[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%]   .mat-form-field-outline[_ngcontent-%COMP%]{color:transparent!important}.cdk-drag-preview[_ngcontent-%COMP%]{box-sizing:border-box;border-radius:4px;opacity:1}.cdk-drag-preview[_ngcontent-%COMP%]   .expand-button[_ngcontent-%COMP%]{color:#5a607f!important;background-color:transparent!important;box-shadow:none!important;margin-right:28px!important}.cdk-drag-placeholder[_ngcontent-%COMP%]{opacity:0}.cdk-drag-animating[_ngcontent-%COMP%], .example-list.cdk-drop-list-dragging[_ngcontent-%COMP%]   .category-item[_ngcontent-%COMP%]:not(.cdk-drag-placeholder){transition:transform 250ms cubic-bezier(0,0,.2,1)}.child[_ngcontent-%COMP%]{margin-left:0}.child[_ngcontent-%COMP%]   .inner-child[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap}.category[_ngcontent-%COMP%]{width:100%}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]{width:250px;background-color:#fff;margin:10px 20px;border-radius:5px;border:1px solid #dbcbcb96}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:15px;border-bottom:1px solid #dbcbcb96;margin:10px;padding-bottom:5px;padding-top:0;font-family:\"Nexa Text\";display:flex;flex-direction:column;justify-content:space-between;align-items:flex-start}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-weight:600;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;margin-top:-5px}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin-left:15px;cursor:pointer}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   h3.template-title[_ngcontent-%COMP%]{font:900 24px/36px Nexa Text;letter-spacing:0;color:#171f26}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]{font-weight:600;margin-left:-27px;font-size:15px;list-style:none}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:5px;margin:5px auto;cursor:pointer;text-align:left;font:12px/19px Nexa Text;letter-spacing:0;color:#535760}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]{padding-left:0;margin-left:0}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.li-title[_ngcontent-%COMP%]{font-size:14px;font-weight:600;margin-right:10px}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.li-title[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:140px;outline:0;border:1px dashed grey}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.li-title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:inline-flex;align-items:center;width:100%}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.li-title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin-left:10px}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.li-title.active[_ngcontent-%COMP%], .category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.li-title[_ngcontent-%COMP%]:hover{background:no-repeat padding-box #e5e8ee;border-radius:5px}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.sub-title[_ngcontent-%COMP%]{list-style:none;padding-left:20px}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.sub-title.active[_ngcontent-%COMP%], .category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.sub-title.active[_ngcontent-%COMP%]::marker, .category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.sub-title[_ngcontent-%COMP%]:hover{font-weight:600;background:no-repeat padding-box #e5e8ee;border-radius:5px}.category[_ngcontent-%COMP%]   .disabled[_ngcontent-%COMP%]{background-color:#f4f7f9!important}.category[_ngcontent-%COMP%]   .expand-button[_ngcontent-%COMP%]{color:#5a607f!important;background-color:transparent!important;box-shadow:none!important;margin-right:28px!important}.category[_ngcontent-%COMP%]   .expand-button[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%]{font-size:40px}.category[_ngcontent-%COMP%]   .transparent-button[_ngcontent-%COMP%]{background-color:transparent;box-shadow:none;width:40px;padding:0;margin:0;margin-left:0!important;min-width:auto;color:#fff}.category[_ngcontent-%COMP%]   .title-group[_ngcontent-%COMP%]{display:flex;justify-content:space-between;margin-top:10px}.category[_ngcontent-%COMP%]   .title-group[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0 0 8px;display:flex;align-items:center}.add-button-sub-category[_ngcontent-%COMP%]{width:95.5%!important;margin-bottom:22px;margin-left:22px}.add-button-container[_ngcontent-%COMP%]{background:no-repeat padding-box #fff;border:1px dashed #dce4e9;border-radius:8px;margin-top:10px;padding:10px;display:flex;justify-content:center;align-items:center;width:98.5%;margin-bottom:22px}.add-button-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{display:flex;align-items:center;background-color:transparent;border:none;cursor:pointer;font:17px/26px Nexa Text;letter-spacing:0;color:#c2c8d5;box-shadow:none}.add-category[_ngcontent-%COMP%]{border:1px dashed #c2c8d5;border-radius:5px;margin-left:10px;margin-bottom:10px;font:bold 12px/19px Nexa Text;letter-spacing:0;color:#c2c8d5;width:92%}.inner-loop[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]{display:flex;height:100%;margin:0;width:100%;margin-top:10px;margin-bottom:10px}.inner-loop[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]   .button-action[_ngcontent-%COMP%]{background-color:#6fe8d7;-ms-grid-row-align:stretch;align-self:stretch;margin-top:0;margin-left:20px;border-bottom-left-radius:8px;border-top-left-radius:8px}.inner-loop[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]   .button-action[_ngcontent-%COMP%]   .transparent-button[_ngcontent-%COMP%]{background-color:transparent;box-shadow:none;width:40px;padding:0;margin:0;min-width:auto;color:#fff}.inner-loop[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]   .child-2-background[_ngcontent-%COMP%]{background-color:#cffaf4!important}.inner-loop[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]   .child-3-background[_ngcontent-%COMP%]{background-color:#e5e8ee!important}.inner-loop[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]   .fields-container[_ngcontent-%COMP%]{width:100%;padding-right:10px;padding-top:5px}.inner-loop[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]   .fields-container[_ngcontent-%COMP%]   lib-sub-category[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;width:100%}.inner-loop[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]   .fields-container[_ngcontent-%COMP%]   lib-sub-category[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]   .button-action[_ngcontent-%COMP%]{background-color:#6fe8d7;height:100%;margin:auto 15px auto auto;display:flex}.inner-loop[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]   .fields-container[_ngcontent-%COMP%]   lib-sub-category[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]   .button-action[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{box-shadow:none;background-color:transparent;color:#fff}.side-bar[_ngcontent-%COMP%]{display:flex;flex-direction:column}.register-button[_ngcontent-%COMP%]{background:0 0;border:2px solid #192128!important;border-radius:8px;margin-left:22px!important;color:#000}.register-button[disabled][disabled][_ngcontent-%COMP%]{opacity:.5!important;background:no-repeat padding-box #dadee2!important}.content-item[_ngcontent-%COMP%]{transition-property:border-image-slice border-image-source border-width;transition-timing-function:ease-in-out;transition-duration:.5s}.active-content[_ngcontent-%COMP%]{border-image-slice:1;border-width:2px;border-image-source:linear-gradient(to left,#9d107d,#4862ab)}  .phone-input-view-collab{border-bottom:1px solid #949494!important;padding-bottom:.3em;padding-top:1em;display:block!important;max-width:100%;font:14px/20px \"Nexa Text\"!important;width:95%}  .country-dropdown{min-width:unset!important}  .iti{width:100%!important}  #phone{width:90%!important}  #mobile-phone{width:100%}  .fields{max-height:100vh;margin-right:.5%;overflow:hidden;width:100%}  .fields mat-tab-group{height:100%;width:100%;overflow:hidden}  .fields mat-tab-group .mat-tab-body-wrapper{height:100%;max-height:90vh;overflow:auto}  .fields mat-tab-group .mat-tab-body-wrapper .mat-tab-body{height:100%}  .fields mat-tab-group .mat-tab-body-wrapper .mat-tab-body .mat-tab-body-content{width:100%;overflow:hidden}.fields[_ngcontent-%COMP%]{height:95%}.fields[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style:none;display:flex;margin:0;padding:0}.fields[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin-right:20px;padding-bottom:5px;border-bottom:3px solid transparent}.fields[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none;font-family:Nexa;font-style:normal;font-weight:700;font-size:14px;line-height:120%;color:#171f26;opacity:.5}.fields[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.menu-item.active[_ngcontent-%COMP%], .fields[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.menu-item[_ngcontent-%COMP%]:hover{cursor:pointer;border-bottom:3px solid #3c4252}.fields[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.menu-item.active[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .fields[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.menu-item[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%]{font-family:Nexa;font-style:normal;font-weight:700;font-size:14px;line-height:120%;opacity:1;text-decoration:none!important}  .category-container{overflow:auto;max-height:100%;display:flex;flex-wrap:wrap;-ms-overflow-style:none;scrollbar-width:none}  .category-container mat-form-field{width:100%}  .category-container .actions-button{margin-top:20px;margin-bottom:50px}  .category-container .actions-button .send-form{margin-left:0!important;background-color:#000;color:#fff}  .category-container .actions-button .resume{margin-left:25px!important}  .category-container::-webkit-scrollbar{display:none}  .category-item .mat-radio-button.mat-accent.mat-radio-checked .mat-radio-outer-circle{border-color:#039be5}  .category-item .mat-radio-button.mat-accent .mat-radio-inner-circle,   .category-item .mat-radio-button.mat-accent .mat-radio-ripple .mat-ripple-element:not(.mat-radio-persistent-ripple),   .category-item .mat-radio-button.mat-accent.mat-radio-checked .mat-radio-persistent-ripple,   .category-item .mat-radio-button.mat-accent:active .mat-radio-persistent-ripple{background-color:#039be5}  .category-item .mat-checkbox-checkmark-path{stroke:#fff!important}  .category-item .mat-checkbox-frame{border:2px solid #039be5!important}  .category-item .mat-checkbox-checked.mat-accent .mat-checkbox-background,   .category-item .mat-checkbox-indeterminate.mat-accent .mat-checkbox-background{background-color:#039be5!important}  .category-item .mat-checkbox-inner-container{height:20px!important;width:20px!important}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(OnboardingCreateComponent, [{
        type: Component,
        args: [{
                selector: "create-onboarding",
                templateUrl: "./onboarding-create.component.html",
                styleUrls: ["./onboarding-create.component.scss"],
            }]
    }], function () { return [{ type: i1.FormBuilder }, { type: i2.OnboardingService }, { type: i3.ActivatedRoute }, { type: i3.Router }, { type: i4.MatDialog }]; }, { onScroll: [{
            type: HostListener,
            args: ['scroll', ['$event']]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib25ib2FyZGluZy1jcmVhdGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vb25ib2FyZGluZy8iLCJzb3VyY2VzIjpbImxpYi9wYWdlcy9vbmJvYXJkaW5nLWNyZWF0ZS9vbmJvYXJkaW5nLWNyZWF0ZS5jb21wb25lbnQudHMiLCJsaWIvcGFnZXMvb25ib2FyZGluZy1jcmVhdGUvb25ib2FyZGluZy1jcmVhdGUuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ2hFLE9BQU8sRUFBMEIsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFcEUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sc0RBQXNELENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7SUNVcEUsOEJBRUk7SUFBQSx5QkFBRztJQUFBLFlBQWlCO0lBQUEsaUJBQUk7SUFDNUIsaUJBQUs7OztJQUhELHNEQUFpQyxnQ0FBQTtJQUU5QixlQUFpQjtJQUFqQix3Q0FBaUI7OztJQW1CUixzQ0FFSTtJQUFBLFlBQWdCO0lBQUEsaUJBQWE7OztJQUQ3Qix5Q0FBc0I7SUFDdEIsZUFBZ0I7SUFBaEIsaURBQWdCOzs7OztJQUx4QixzQ0FHSTtJQUg4QixxUkFBcUM7SUFHbkUsd0hBRUk7SUFDUixpQkFBYTs7O0lBTnFCLHNEQUFxQyw4Q0FBQTtJQUd2RCxlQUFxRDtJQUFyRCw2REFBcUQ7OztJQVFqRSxzQ0FFSTtJQUFBLFlBQWdCO0lBQUEsaUJBQWE7OztJQUQ3Qix1Q0FBb0I7SUFDcEIsZUFBZ0I7SUFBaEIsaURBQWdCOzs7O0lBTnhCLHNDQUlJO0lBRjZCLHVSQUF1QztJQUVwRSx3SEFFSTtJQUNSLGlCQUFhOzs7SUFMb0Isd0RBQXVDLDhDQUFBO0lBRXhELGVBQXVEO0lBQXZELCtEQUF1RDs7OztJQXNDWCwrQkFFSTtJQUFBLCtCQUVJO0lBQUEsK0JBRUk7SUFBQSxxREFNSTtJQURBLGlUQUFxQztJQUNyQywwQkFFTTtJQUNWLGlCQUE0QjtJQUNoQyxpQkFBTTtJQUNWLGlCQUFNO0lBQ1YsaUJBQU07Ozs7Ozs7O0lBWFUsZUFBWTtJQUFaLCtCQUFZLGlHQUFBLGFBQUEsYUFBQTs7O0lBWGhDLCtCQUlJO0lBQUEsd0lBRUk7SUFpQlIsaUJBQU07Ozs7O0lBcEJGLDZIQUE0RjtJQUQ1RixnQ0FBYTtJQUdULGVBQXFIO0lBQXJILG1LQUFxSDs7O0lBUGpJLCtCQUVJO0lBQUEsa0lBSUk7SUFvQlIsaUJBQU07OztJQXZCRSxlQUEwQztJQUExQywwQ0FBMEM7Ozs7SUFkdEUsK0JBRUk7SUFBQSwrQkFFSTtJQUFBLCtCQUNJO0lBQUEscURBS0k7SUFEQSw4UkFBcUM7SUFDckMsK0JBQ0k7SUFBQSw0SEFFSTtJQXlCUixpQkFBTTtJQUNWLGlCQUE0QjtJQUNoQyxpQkFBTTtJQUNWLGlCQUFNO0lBQ1YsaUJBQU07Ozs7Ozs7O0lBcENVLGVBQWU7SUFBZixrQ0FBZSxpR0FBQSxhQUFBLGFBQUE7SUFNUCxlQUFrQztJQUFsQywyREFBa0M7OztJQWhCOUQsK0JBSUk7SUFBQSxzSEFFSTtJQXlDUixpQkFBTTs7Ozs7SUE1Q0YsbUlBQWtHO0lBRGxHLG1DQUFnQjtJQUdaLGVBQWlJO0lBQWpJLCtLQUFpSTs7O0lBTjdJLCtCQUNJO0lBQUEsZ0hBSUk7SUE0Q1IsaUJBQU07OztJQS9DRSxlQUE2QztJQUE3QywwQ0FBNkM7OztJQVR6RSwrQkFFSTtJQUFBLCtCQUNJO0lBQUEsK0JBQ0k7SUFBQSxxREFFSTtJQUFBLCtCQUNJO0lBQUEsMEdBQ0k7SUFpRFIsaUJBQU07SUFDVixpQkFBNEI7SUFFaEMsaUJBQU07SUFDVixpQkFBTTtJQUNWLGlCQUFNOzs7Ozs7OztJQTFEaUMsZUFBZTtJQUFmLGtDQUFlLDBHQUFBLGFBQUEsYUFBQTtJQUdULGVBQWtDO0lBQWxDLDJEQUFrQzs7O0lBVm5GLCtCQUdJO0lBQUEsb0dBRUk7SUE2RFIsaUJBQU07Ozs7O0lBaEVGLHNJQUFxRztJQURyRyxtQ0FBZ0I7SUFHWixlQUFpSTtJQUFqSSwrS0FBaUk7OztJQWpDckosbUNBRUk7SUFBQSwrQkFDSTtJQUFBLCtCQUNJO0lBQUEsK0JBQ0k7SUFBQSw4QkFBMEI7SUFBQSxZQUFpQjtJQUFBLGlCQUFLO0lBQ2hELHlCQUNJO0lBQUEsWUFHSjtJQUFBLGlCQUFJO0lBQ1IsaUJBQU07SUFDTiwyR0FHSTtJQUlKLDJHQUlJO0lBSVIsaUJBQU07SUFDTixnQ0FDSTtJQUFBLCtGQUdJO0lBaUVSLGlCQUFNO0lBQ1YsaUJBQU07SUFDVixpQkFBVTs7OztJQWxHTix1Q0FBb0I7SUFJa0IsZUFBaUI7SUFBakIsd0NBQWlCO0lBRXZDLGVBR0o7SUFISSw2TEFHSjtJQUcrQyxlQUF5QjtJQUF6Qiw2Q0FBeUI7SUFPeEUsZUFBeUU7SUFBekUsK0lBQXlFO0lBU2pELGVBQWdEO0lBQWhELDZDQUFnRDs7OztJQS9DeEcsK0JBQ0k7SUFEdUMsa01BQXFCO0lBQzVELDhCQUNJO0lBQUEsOEJBQ0k7SUFBQSwwQkFBSTtJQUFBLFlBQTZDO0lBQUEsbUNBQzBCO0lBQXZCLHNNQUFzQjtJQUFDLDBCQUFVO0lBQUEsaUJBQVc7SUFDaEcsaUJBQUs7SUFDTCxpQ0FDOEI7SUFBMUIsdU1BQXlCO0lBQUMsbUNBQ3RCO0lBQUEsaUJBQVM7SUFDckIsaUJBQU07SUFDTiw4QkFDSTtJQUFBLDJCQUNJO0lBQUEsaUZBRUk7SUFFUixpQkFBSztJQUNMLGdDQUNJO0lBRDRCLDhNQUEyQjtJQUN2RCw2RkFFSTtJQW1HSixnQ0FDSTtJQUFBLG1DQUNrQjtJQUFBLGlDQUFnQjtJQUFBLGlCQUFTO0lBQzNDLG1DQUM4QjtJQUExQix3TUFBeUI7SUFBQyxvQ0FBbUI7SUFBQSxpQkFBUztJQUM5RCxpQkFBTTtJQUVWLGlCQUFNO0lBQ1YsaUJBQU07SUFDVixpQkFBTTtJQUNWLGlCQUFPOzs7SUFqSWlCLHlDQUFrQjtJQUcxQixlQUE2QztJQUE3QywrSEFBNkM7SUFHOUIsZUFBb0I7SUFBcEIsMkNBQW9CO0lBTy9CLGVBQWlEO0lBQWpELDZDQUFpRDtJQUtULGVBQWlEO0lBQWpELDZDQUFpRDtJQXNHakYsZUFBbUM7SUFBbkMsbUVBQW1DO0lBRW5DLGVBQW9CO0lBQXBCLDJDQUFvQjs7OztJQVFoRCxpREFDd0I7SUFEZ0IsOE9BQTJCO0lBQ25FLGlCQUF3Qjs7O0lBRDRDLGdEQUF5Qjs7QUR2SHJHLE1BQU0sT0FBTyx5QkFBeUI7SUFzQnBDLFlBQ1UsRUFBZSxFQUNoQixPQUEwQixFQUN6QixLQUFxQixFQUNyQixNQUFjLEVBQ2QsTUFBaUI7UUFKakIsT0FBRSxHQUFGLEVBQUUsQ0FBYTtRQUNoQixZQUFPLEdBQVAsT0FBTyxDQUFtQjtRQUN6QixVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUNyQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsV0FBTSxHQUFOLE1BQU0sQ0FBVztRQXpCM0Isa0JBQWEsR0FBUSxFQUFFLENBQUM7UUFDeEIsWUFBTyxHQUFHLElBQUksQ0FBQztRQUNmLFNBQUksR0FBRyxFQUFFLENBQUM7UUFDVixpQkFBWSxHQUFHLEdBQUcsQ0FBQztRQUNuQixlQUFVLEdBQUcsR0FBRyxDQUFDO1FBQ2pCLFdBQU0sR0FBRyxFQUFFLENBQUM7UUFDWixpQkFBWSxHQUFHLENBQUMsQ0FBQztRQVFqQixhQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ2pCLDBCQUFxQixHQUFHLElBQUksQ0FBQztRQUM3QixZQUFPLEdBQUcsS0FBSyxDQUFDO1FBV2QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxTQUFTLENBQUMsQ0FBTyxVQUFVLEVBQUUsRUFBRTtZQUM3RCxJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQTtZQUMxQixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztZQUN2QixJQUFJLFVBQVUsRUFBRTtnQkFDZCxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztvQkFDbkIsVUFBVSxFQUFFLFVBQVUsQ0FBQyxVQUFVO2lCQUNsQyxDQUFDLENBQUM7Z0JBQ0gsTUFBTSxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxVQUFVLEVBQUUsVUFBVSxDQUFDLENBQUE7YUFDdkQ7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFBO2dCQUNoRSxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztvQkFDbkIsVUFBVSxFQUFFLElBQUksQ0FBQyxVQUFVO2lCQUM1QixDQUFDLENBQUM7Z0JBQ0gsTUFBTSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUE7YUFDM0M7UUFDSCxDQUFDLENBQUEsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUVELFFBQVEsQ0FBQyxHQUFHO1FBQ1YsT0FBTyxHQUFHLEtBQUssU0FBUyxJQUFJLEdBQUcsS0FBSyxJQUFJLElBQUksR0FBRyxDQUFDLFdBQVcsSUFBSSxNQUFNLENBQUM7SUFDeEUsQ0FBQztJQUVELGFBQWE7UUFDWCxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNqQixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsRUFBRTtnQkFDckMsSUFBSSxFQUFFLEVBQUU7YUFDVCxDQUFDLENBQUE7WUFDRixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFBO1NBQzdCO1FBQ0QsT0FBTyxJQUFJLENBQUE7SUFDYixDQUFDO0lBR0QsUUFBUSxDQUFDLEtBQUs7UUFDWixNQUFNLFFBQVEsR0FBRyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDdEQsTUFBTSxLQUFLLEdBQUcsUUFBUSxDQUFDLGdCQUFnQixDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQ3pELElBQUksT0FBTyxHQUFHLEVBQUUsQ0FBQztRQUNqQixRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQUU7WUFDM0IsTUFBTSxVQUFVLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQztZQUNyQyxJQUFJLEtBQUssQ0FBQyxNQUFNLENBQUMsU0FBUyxHQUFHLFVBQVUsR0FBRyxHQUFHLEVBQUU7Z0JBQzdDLE9BQU8sR0FBRyxPQUFPLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFBO2FBQ3JDO1FBQ0gsQ0FBQyxDQUFDLENBQUM7UUFDSCxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUU7WUFDbkIsTUFBTSxFQUFFLEdBQUcsRUFBRSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQTtZQUNoQyxJQUFJLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLEtBQUssT0FBTyxFQUFFO2dCQUM5QyxFQUFFLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQzthQUM1QjtpQkFBTTtnQkFDTCxFQUFFLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQTthQUM5QjtRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVLLFFBQVE7OztZQUNaLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUNqRSxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUM7WUFDckUsSUFBSSxJQUFJLENBQUMsWUFBWSxJQUFJLElBQUksQ0FBQyxZQUFZLEtBQUssR0FBRyxFQUFFO2dCQUNsRCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztnQkFDckIsSUFBSSxDQUFDLGlCQUFpQixHQUFHLE1BQU0sSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO2dCQUM3RSxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQTtnQkFDNUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsVUFBVSxDQUFDO2dCQUNwRCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFBO2dCQUV0QyxJQUFJLENBQUMsZUFBZSxTQUFHLElBQUksQ0FBQyxpQkFBaUIsMENBQUUsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFBO2dCQUM1RCxJQUFJLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxVQUFVLEVBQUU7b0JBQ3JDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO2lCQUN4QjthQUNGOztLQUNGO0lBR0QsZ0JBQWdCLENBQUMsVUFBVTs7UUFDekIsTUFBTSxJQUFJLEdBQUcsRUFBRSxDQUFBO1FBQ2YsTUFBTSxjQUFjLEdBQUcsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsRUFBRSxFQUFFO1lBQ2pELE1BQU0sRUFBRSxJQUFJLEVBQUUsZ0JBQWdCLEVBQUUsR0FBRyxRQUFRLENBQUM7WUFDNUMsSUFBSSxZQUFZLEdBQUcsRUFBRSxDQUFBO1lBQ3JCLElBQUksY0FBYyxHQUFHLENBQUMsQ0FBQztZQUN2QixJQUFJLFdBQVcsR0FBRyxDQUFDLENBQUM7WUFDcEIsSUFBSSxRQUFRLENBQUMsS0FBSyxFQUFFO2dCQUNsQixZQUFZLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTs7b0JBQ3pDLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTt3QkFDcEIsV0FBVyxJQUFJLENBQUMsQ0FBQztxQkFDbEI7b0JBQ0QsSUFBSSxJQUFJLENBQUMsV0FBVyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFO3dCQUNwQyxjQUFjLElBQUksQ0FBQyxDQUFDO3FCQUNyQjtvQkFDRCxNQUFNLFdBQVcsR0FBRzt3QkFDbEIsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO3dCQUNqQixLQUFLLEVBQUUsSUFBSSxDQUFDLElBQUksS0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLGFBQUEsSUFBSSwwQ0FBRSxLQUFLLDBDQUFFLG1CQUFtQixLQUFJLEVBQUU7d0JBQ2hGLEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRztxQkFDZCxDQUFBO29CQUNELElBQUksVUFBVSxDQUFDLElBQUksR0FBRyxhQUFhLEVBQUU7d0JBQ25DLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztxQkFDN0I7b0JBQ0QsSUFBSSxPQUFPLEdBQUcsRUFBRSxDQUFBO29CQUNoQixJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7d0JBQ2QsT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQUU7OzRCQUNuQyxJQUFJLE9BQU8sQ0FBQyxXQUFXLEVBQUU7Z0NBQ3ZCLFdBQVcsSUFBSSxDQUFDLENBQUM7NkJBQ2xCOzRCQUNELElBQUksT0FBTyxDQUFDLFdBQVcsSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRTtnQ0FDMUMsY0FBYyxJQUFJLENBQUMsQ0FBQzs2QkFDckI7NEJBQ0QsTUFBTSxVQUFVLEdBQUc7Z0NBQ2pCLEtBQUssRUFBRSxPQUFPLENBQUMsS0FBSztnQ0FDcEIsS0FBSyxFQUFFLE9BQU8sQ0FBQyxJQUFJLEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxhQUFBLE9BQU8sMENBQUUsS0FBSywwQ0FBRSxtQkFBbUIsS0FBSSxFQUFFO2dDQUN6RixHQUFHLEVBQUUsT0FBTyxDQUFDLEdBQUc7NkJBQ2pCLENBQUE7NEJBRUQsSUFBSSxNQUFNLEdBQUcsRUFBRSxDQUFBOzRCQUNmLElBQUksT0FBTyxDQUFDLEtBQUssRUFBRTtnQ0FDakIsTUFBTSxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUU7O29DQUNoQyxJQUFJLEVBQUUsQ0FBQyxXQUFXLEVBQUU7d0NBQ2xCLFdBQVcsSUFBSSxDQUFDLENBQUM7cUNBQ2xCO29DQUNELElBQUksRUFBRSxDQUFDLFdBQVcsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssRUFBRTt3Q0FDaEMsY0FBYyxJQUFJLENBQUMsQ0FBQztxQ0FDckI7b0NBQ0QsT0FBTzt3Q0FDTCxLQUFLLEVBQUUsRUFBRSxDQUFDLEtBQUs7d0NBQ2YsS0FBSyxFQUFFLEVBQUUsQ0FBQyxJQUFJLEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxhQUFBLEVBQUUsMENBQUUsS0FBSywwQ0FBRSxtQkFBbUIsS0FBSSxFQUFFO3dDQUMxRSxHQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUc7cUNBQ1osQ0FBQTtnQ0FDSCxDQUFDLENBQUMsQ0FBQTtnQ0FDRix1Q0FDSyxVQUFVLEtBQ2IsZ0JBQWdCLEVBQUUsT0FBTyxDQUFDLGdCQUFnQixFQUMxQyxLQUFLLEVBQUUsTUFBTSxFQUNiLEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRyxJQUNkOzZCQUNGO2lDQUFNO2dDQUNMLE9BQU8sVUFBVSxDQUFBOzZCQUNsQjt3QkFDSCxDQUFDLENBQUMsQ0FBQTt3QkFDRix1Q0FDSyxXQUFXLEtBQUUsZ0JBQWdCLEVBQzVCLElBQUksQ0FBQyxnQkFBZ0IsRUFDekIsS0FBSyxFQUFFLE9BQU8sRUFDZCxHQUFHLEVBQUUsSUFBSSxDQUFDLEdBQUcsSUFDZDtxQkFDRjt5QkFBTTt3QkFDTCxPQUFPLFdBQVcsQ0FBQTtxQkFDbkI7Z0JBQ0gsQ0FBQyxDQUFDLENBQUE7YUFDSDtZQUNELE9BQU87Z0JBQ0wsSUFBSSxFQUFFLGdCQUFnQjtnQkFDdEIsS0FBSyxFQUFFLFlBQVk7Z0JBQ25CLEdBQUcsRUFBRSxRQUFRLENBQUMsR0FBRztnQkFDakIsY0FBYztnQkFDZCxXQUFXO2FBQ1osQ0FBQTtRQUNILENBQUMsQ0FBQyxDQUFBO1FBQ0YsSUFBSSxDQUFDLFVBQVUsR0FBRztZQUNoQixVQUFVLEVBQUUsY0FBYztZQUMxQixxQ0FBcUM7WUFDckMsU0FBUyxFQUFFLE9BQUEsSUFBSSxDQUFDLGlCQUFpQiwwQ0FBRSxTQUFTLEtBQUksSUFBSSxJQUFJLEVBQUUsQ0FBQyxXQUFXLEVBQUU7WUFDeEUsSUFBSSxFQUFFLElBQUk7WUFDVixJQUFJLEVBQUUsYUFBQSxJQUFJLENBQUMsaUJBQWlCLDBDQUFFLFVBQVUsQ0FBQyxDQUFDLDJDQUFHLElBQUksWUFBSSxJQUFJLENBQUMsZUFBZSwwQ0FBRSxJQUFJLENBQUE7U0FDaEYsQ0FBQTtJQUVILENBQUM7SUFFRCxtQkFBbUI7UUFDakIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztZQUN4QixVQUFVLEVBQUUsQ0FBQyxDQUFDLEVBQUUsVUFBVSxDQUFDLFFBQVEsQ0FBQztTQUNyQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsWUFBWSxDQUFDLEdBQVc7UUFDdEIsTUFBTSxNQUFNLEdBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQzlDLE9BQU8sTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLENBQUE7SUFDOUQsQ0FBQztJQUVLLFFBQVEsQ0FBQyxFQUFFLEVBQUUsVUFBVTs7WUFDM0IsSUFBSSxFQUFFLEVBQUU7Z0JBQ04sSUFBSSxDQUFDLGVBQWUsR0FBRyxNQUFNLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUN4RCxJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVO3FCQUNuRixNQUFNLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQztxQkFDckMsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUU7b0JBQ1gsSUFBSSxHQUFHLENBQUMsS0FBSyxFQUFFO3dCQUNiLE1BQU0sQ0FBQyxHQUFHLEdBQUcsQ0FBQyxLQUFLOzZCQUNoQixNQUFNLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQzs2QkFDdkMsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUU7NEJBQ1gsSUFBSSxHQUFHLENBQUMsS0FBSyxFQUFFO2dDQUNiLE1BQU0sQ0FBQyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUU7b0NBQ25DLElBQUksS0FBSyxDQUFDLEtBQUssRUFBRTt3Q0FDZixNQUFNLENBQUMsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLGdCQUFnQixDQUFDLENBQUE7d0NBQ3pELHVDQUNLLEtBQUssS0FDUixLQUFLLEVBQUUsQ0FBQyxJQUNUO3FDQUNGO29DQUNELE9BQU8sS0FBSyxDQUFDO2dDQUNmLENBQUMsQ0FBQyxDQUFDO2dDQUNILHVDQUNLLEdBQUcsS0FDTixLQUFLLEVBQUUsQ0FBQyxJQUNUOzZCQUNGOzRCQUNELE9BQU8sR0FBRyxDQUFDO3dCQUNiLENBQUMsQ0FBQyxDQUFBO3dCQUNKLHVDQUNLLEdBQUcsS0FDTixLQUFLLEVBQUUsQ0FBQyxJQUNUO3FCQUNGO29CQUNELE9BQU8sR0FBRyxDQUFBO2dCQUNaLENBQUMsQ0FBQyxDQUFBO2FBQ0w7UUFDSCxDQUFDO0tBQUE7SUFFRCxZQUFZLENBQUMsS0FBSztRQUNoQixJQUFJLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbEIsSUFBSSxLQUFLLEVBQUU7WUFDVCxLQUFLLE1BQU0sR0FBRyxJQUFJLEtBQUssRUFBRTtnQkFDdkIsSUFBSSxHQUFHLENBQUMsS0FBSyxFQUFFO29CQUNiLEtBQUssR0FBRyxJQUFJLENBQUM7aUJBQ2Q7YUFDRjtTQUNGO1FBQ0QsT0FBTyxLQUFLLENBQUE7SUFDZCxDQUFDO0lBRUQsZ0JBQWdCO1FBQ2QsTUFBTSxjQUFjLEdBQUcsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxJQUFJLEtBQUssQ0FBQyxXQUFXLElBQUksS0FBSyxDQUFDLElBQUksS0FBSyxtQkFBbUIsSUFBSSxLQUFLLENBQUMsYUFBYSxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsSUFBSSxLQUFLLENBQUMsSUFBSSxLQUFLLG1CQUFtQixDQUFBO1FBQzdMLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUU7WUFDOUQsSUFBSSxLQUFLLENBQUMsS0FBSyxFQUFFO2dCQUNmLE9BQU8sS0FBSyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTtvQkFDaEMsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO3dCQUNkLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRTs0QkFDaEMsT0FBTyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUE7d0JBQzlCLENBQUMsQ0FBQyxDQUFBO3FCQUNIO29CQUNELE9BQU8sY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFBO2dCQUM3QixDQUFDLENBQUMsQ0FBQTthQUNIO1lBQ0QsT0FBTyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDOUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNOLENBQUM7SUFFSyxRQUFROztZQUNaLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLGdCQUFnQixFQUFFLEVBQUU7Z0JBQzlDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO2dCQUNwQixNQUFNLE1BQU0sR0FDVixJQUFJLENBQUMsWUFBWSxJQUFJLElBQUksQ0FBQyxZQUFZLEtBQUssR0FBRztvQkFDNUMsQ0FBQyxDQUFDLE1BQU0sSUFBSSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsaUNBQ2hDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxLQUNsQixVQUFVLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFDM0IsUUFBUSxFQUFFLElBQUksRUFDZCxHQUFHLEVBQUUsSUFBSSxDQUFDLFlBQVksSUFDdEI7b0JBQ0YsQ0FBQyxDQUFDLE1BQU0sSUFBSSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsaUNBQ2hDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxLQUNsQixVQUFVLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFDM0IsUUFBUSxFQUFFLElBQUksSUFDZCxDQUFDO2dCQUVQLElBQUksTUFBTSxFQUFFO29CQUNWLElBQUksSUFBSSxDQUFDLFlBQVksSUFBSSxJQUFJLENBQUMsWUFBWSxLQUFLLEdBQUcsRUFBRTt3QkFDbEQsSUFBSSxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDO3dCQUNwQyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsTUFBTSxDQUFDO3FCQUNqQztvQkFDRCxNQUFNLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxFQUFFLENBQUM7b0JBQ2xDLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO29CQUNyQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztvQkFDcEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7b0JBQ3JCLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEdBQUcsV0FBVyxDQUFDLENBQUMsQ0FBQztpQkFDN0Q7cUJBQU07b0JBQ0wsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQztvQkFDNUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7aUJBQ3RCO2FBQ0Y7UUFDSCxDQUFDO0tBQUE7SUFFSyxhQUFhOztZQUNqQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztZQUNwQixNQUFNLE1BQU0sR0FDVixJQUFJLENBQUMsWUFBWSxJQUFJLElBQUksQ0FBQyxZQUFZLEtBQUssR0FBRztnQkFDNUMsQ0FBQyxDQUFDLE1BQU0sSUFBSSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsaUNBQ2hDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxLQUNsQixVQUFVLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFDM0IsUUFBUSxFQUFFLEtBQUssRUFDZixHQUFHLEVBQUUsSUFBSSxDQUFDLFlBQVksSUFDdEI7Z0JBQ0YsQ0FBQyxDQUFDLE1BQU0sSUFBSSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsaUNBQ2hDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxLQUNsQixVQUFVLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFDM0IsUUFBUSxFQUFFLEtBQUssSUFDZixDQUFDO1lBRVAsSUFBSSxNQUFNLEVBQUU7Z0JBQ1YsSUFBSSxJQUFJLENBQUMsWUFBWSxJQUFJLElBQUksQ0FBQyxZQUFZLEtBQUssR0FBRyxFQUFFO29CQUNsRCxJQUFJLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUM7b0JBQ3BDLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxNQUFNLENBQUM7aUJBQ2pDO2dCQUNELE1BQU0sSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLEVBQUUsQ0FBQztnQkFDbEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7Z0JBQ3JCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO2dCQUNwQixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztnQkFDckIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsR0FBRyxXQUFXLENBQUMsQ0FBQyxDQUFDO2FBQzdEO2lCQUFNO2dCQUNMLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUM7Z0JBQzVCLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO2FBQ3RCO1FBQ0gsQ0FBQztLQUFBO0lBRUQsbUJBQW1CLENBQUMsQ0FBQztRQUNuQixDQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUdELDZCQUE2QixDQUFDLFdBQVcsRUFBRSxRQUFRLEVBQUUsY0FBYztRQUNqRSxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ2hCLE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFDRCxJQUFJLFFBQVEsQ0FBQyxLQUFLLEtBQUssQ0FBQyxFQUFFO1lBQ3hCLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsQ0FBQyxJQUFJLEtBQUssbUJBQW1CLEVBQUU7Z0JBQ3JHLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFBO2dCQUNoSSxJQUFJLE9BQU8sR0FBRyxLQUFLLENBQUM7Z0JBQ3BCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO29CQUNyQyxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLElBQUksY0FBYyxFQUFFO3dCQUNwQyxPQUFPLEdBQUcsSUFBSSxDQUFDO3dCQUNmLE1BQU07cUJBQ1A7aUJBQ0Y7Z0JBQ0QsT0FBTyxPQUFPLENBQUM7YUFDaEI7aUJBQU07Z0JBQ0wsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDLEtBQUssS0FBSyxjQUFjLENBQUE7YUFDckc7U0FDRjthQUFNLElBQUksUUFBUSxDQUFDLEtBQUssS0FBSyxDQUFDLEVBQUU7WUFDL0IsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLENBQUMsSUFBSSxLQUFLLG1CQUFtQixFQUFFO2dCQUMvSCxNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFBO2dCQUMxSixJQUFJLE9BQU8sR0FBRyxLQUFLLENBQUM7Z0JBQ3BCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO29CQUNyQyxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLElBQUksY0FBYyxFQUFFO3dCQUNwQyxPQUFPLEdBQUcsSUFBSSxDQUFDO3dCQUNmLE1BQU07cUJBQ1A7aUJBQ0Y7Z0JBQ0QsT0FBTyxPQUFPLENBQUM7YUFDaEI7aUJBQU07Z0JBQ0wsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLENBQUMsS0FBSyxLQUFLLGNBQWMsQ0FBQTthQUMvSDtTQUNGO2FBQU0sSUFBSSxRQUFRLENBQUMsS0FBSyxLQUFLLENBQUMsRUFBRTtZQUMvQixJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDLElBQUksS0FBSyxtQkFBbUIsRUFBRTtnQkFDeEosTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFBO2dCQUNuTCxJQUFJLE9BQU8sR0FBRyxLQUFLLENBQUM7Z0JBQ3BCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO29CQUNyQyxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLElBQUksY0FBYyxFQUFFO3dCQUNwQyxPQUFPLEdBQUcsSUFBSSxDQUFDO3dCQUNmLE1BQU07cUJBQ1A7aUJBQ0Y7Z0JBQ0QsT0FBTyxPQUFPLENBQUM7YUFDaEI7aUJBQU07Z0JBQ0wsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsQ0FBQyxLQUFLLEtBQUssY0FBYyxDQUFBO2FBQ3hKO1NBQ0Y7YUFBTTtZQUNMLE9BQU8sSUFBSSxDQUFBO1NBQ1o7SUFFSCxDQUFDO0lBRUQsWUFBWSxDQUFDLEtBQUs7UUFDaEIsSUFBSSxVQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ3ZCLEtBQUssTUFBTSxJQUFJLElBQUksS0FBSyxFQUFFO1lBQ3hCLElBQUksSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7Z0JBQ3ZDLFVBQVUsR0FBRyxJQUFJLENBQUM7Z0JBQ2xCLE1BQU07YUFDUDtTQUNGO1FBQ0QsT0FBTyxVQUFVLENBQUE7SUFDbkIsQ0FBQztJQUVELFlBQVksQ0FBQyxDQUFDO1FBQ1osSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUM7UUFDdEIsSUFBSSxDQUFDLHFCQUFxQixHQUFHLENBQUMsQ0FBQztRQUMvQixVQUFVLENBQUMsR0FBRyxFQUFFO1lBQ2QsSUFBSSxDQUFDLHFCQUFxQixHQUFHLElBQUksQ0FBQztRQUNwQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDWCxDQUFDO0lBRUQsWUFBWSxDQUFDLEtBQWM7UUFDekIsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7SUFFN0IsQ0FBQztJQUVELE1BQU0sQ0FBQyxDQUFDO1FBQ04sQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFBO0lBQ3BCLENBQUM7SUFFRCxVQUFVLENBQUMsTUFBYztRQUN2QixJQUFJLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFDaEIsT0FBTyxLQUFLLENBQUE7U0FDYjthQUFNLElBQUksTUFBTSxLQUFLLENBQUMsRUFBRTtZQUN2QixPQUFPLEtBQUssQ0FBQTtTQUNiO2FBQU0sSUFBSSxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBQ3ZCLE9BQU8sS0FBSyxDQUFBO1NBQ2I7YUFBTSxJQUFJLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFDdkIsT0FBTyxLQUFLLENBQUE7U0FDYjthQUFNLElBQUksTUFBTSxLQUFLLENBQUMsRUFBRTtZQUN2QixPQUFPLEtBQUssQ0FBQTtTQUNiO2FBQU0sSUFBSSxNQUFNLElBQUksQ0FBQyxFQUFFO1lBQ3RCLE9BQU8sS0FBSyxDQUFBO1NBQ2I7SUFDSCxDQUFDO0lBRUQsVUFBVTtRQUNSLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQy9CLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUE7SUFDeEMsQ0FBQzs7a0dBeGJVLHlCQUF5Qjs4REFBekIseUJBQXlCOzs7UUNidEMsNEJBQ0k7UUFBQSw4QkFDSTtRQUFBLDZFQUNJO1FBaUlKLDhHQUNBO1FBQ0osaUJBQU07UUFFVixpQkFBTzs7UUF0SU8sZUFBaUI7UUFBakIsb0NBQWlCO1FBa0lBLGVBQWdCO1FBQWhCLG1DQUFnQjs7a0REdkhsQyx5QkFBeUI7Y0FMckMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxtQkFBbUI7Z0JBQzdCLFdBQVcsRUFBRSxvQ0FBb0M7Z0JBQ2pELFNBQVMsRUFBRSxDQUFDLG9DQUFvQyxDQUFDO2FBQ2xEOztrQkE4REUsWUFBWTttQkFBQyxRQUFRLEVBQUUsQ0FBQyxRQUFRLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBDb21wb25lbnQsIEhvc3RMaXN0ZW5lciwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZvcm1CdWlsZGVyLCBGb3JtR3JvdXAsIFZhbGlkYXRvcnMgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuXHJcbmltcG9ydCB7IEV4aXRDb25maXJtQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9leGl0LWNvbmZpcm0vZXhpdC1jb25maXJtLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE1hdERpYWxvZyB9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbC9kaWFsb2dcIjtcclxuaW1wb3J0IHsgT25ib2FyZGluZ1NlcnZpY2UgfSBmcm9tIFwiLi4vLi4vb25ib2FyZGluZy5zZXJ2aWNlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogXCJjcmVhdGUtb25ib2FyZGluZ1wiLFxyXG4gIHRlbXBsYXRlVXJsOiBcIi4vb25ib2FyZGluZy1jcmVhdGUuY29tcG9uZW50Lmh0bWxcIixcclxuICBzdHlsZVVybHM6IFtcIi4vb25ib2FyZGluZy1jcmVhdGUuY29tcG9uZW50LnNjc3NcIl0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBPbmJvYXJkaW5nQ3JlYXRlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBmb3JtOiBGb3JtR3JvdXA7XHJcbiAgY3VycmVudFByb2ZpbDogYW55ID0ge307XHJcbiAgY2FuRXhpdCA9IHRydWU7XHJcbiAgdGFncyA9IFtdO1xyXG4gIG9uYm9hcmRpbmdJZCA9IFwiMFwiO1xyXG4gIHRlbXBsYXRlSWQgPSBcIjBcIjtcclxuICBwYXJlbnQgPSBbXTtcclxuICBzZWxlY3RlZE1lbnUgPSAwO1xyXG4gIHRlbXBsYXRlczogYW55O1xyXG4gIGNvbnRhY3RzOiBhbnk7XHJcbiAgY3VycmVudE9uYm9hcmRpbmc6IGFueTtcclxuICBjdXJyZW50VGVtcGxhdGU6IGFueTtcclxuICBpc1NlbGVjdGVkOiBib29sZWFuO1xyXG4gIGN1cnJlbnRVc2VyOiBhbnk7XHJcbiAgY3VycmVudEFjdGl2ZTogYW55O1xyXG4gIHNob3dNb2RlID0gZmFsc2U7XHJcbiAgc2VsZWN0ZWRDYXRlZ29yeUluZGV4ID0gbnVsbDtcclxuICBsb2FkaW5nID0gZmFsc2U7XHJcbiAgaW52YWxpZGVWYWx1ZTogYm9vbGVhbjtcclxuICBkZXRhaWxWaWV3OiBhbnk7XHJcbiAgY2F0ZWdvcmllczogYW55XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGZiOiBGb3JtQnVpbGRlcixcclxuICAgIHB1YmxpYyBzZXJ2aWNlOiBPbmJvYXJkaW5nU2VydmljZSxcclxuICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxyXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcclxuICAgIHByaXZhdGUgZGlhbG9nOiBNYXREaWFsb2dcclxuICApIHtcclxuICAgIHRoaXMuc2VydmljZS5fY3VycmVudE9uYm9hcmRpbmcuc3Vic2NyaWJlKGFzeW5jIChvbmJvYXJkaW5nKSA9PiB7XHJcbiAgICAgIHRoaXMub25DcmVhdGVEeW5hbWljRm9ybSgpXHJcbiAgICAgIHRoaXMuaXNTZWxlY3RlZCA9IHRydWU7XHJcbiAgICAgIGlmIChvbmJvYXJkaW5nKSB7XHJcbiAgICAgICAgdGhpcy5mb3JtLnBhdGNoVmFsdWUoe1xyXG4gICAgICAgICAgVGVtcGxhdGVJZDogb25ib2FyZGluZy5UZW1wbGF0ZUlkXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgYXdhaXQgdGhpcy5vblNlbGVjdChvbmJvYXJkaW5nLlRlbXBsYXRlSWQsIG9uYm9hcmRpbmcpXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy50ZW1wbGF0ZUlkID0gdGhpcy5yb3V0ZS5zbmFwc2hvdC5wYXJhbU1hcC5nZXQoXCJ0ZW1wbGF0ZUlkXCIpXHJcbiAgICAgICAgdGhpcy5mb3JtLnBhdGNoVmFsdWUoe1xyXG4gICAgICAgICAgVGVtcGxhdGVJZDogdGhpcy50ZW1wbGF0ZUlkXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgYXdhaXQgdGhpcy5vblNlbGVjdCh0aGlzLnRlbXBsYXRlSWQsIG51bGwpXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBpc09iamVjdChvYmopIHtcclxuICAgIHJldHVybiBvYmogIT09IHVuZGVmaW5lZCAmJiBvYmogIT09IG51bGwgJiYgb2JqLmNvbnN0cnVjdG9yID09IE9iamVjdDtcclxuICB9XHJcblxyXG4gIGNhbkRlYWN0aXZhdGUoKSB7XHJcbiAgICBpZiAoIXRoaXMuY2FuRXhpdCkge1xyXG4gICAgICB0aGlzLmRpYWxvZy5vcGVuKEV4aXRDb25maXJtQ29tcG9uZW50LCB7XHJcbiAgICAgICAgZGF0YTogJydcclxuICAgICAgfSlcclxuICAgICAgcmV0dXJuIHRoaXMuc2VydmljZS5jYW5FeGl0JFxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRydWVcclxuICB9XHJcblxyXG4gIEBIb3N0TGlzdGVuZXIoJ3Njcm9sbCcsIFsnJGV2ZW50J10pXHJcbiAgb25TY3JvbGwoZXZlbnQpIHtcclxuICAgIGNvbnN0IHNlY3Rpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcInNlY3Rpb25cIik7XHJcbiAgICBjb25zdCBuYXZMaSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZmllbGRzIHVsIGxpXCIpO1xyXG4gICAgbGV0IGN1cnJlbnQgPSBcIlwiO1xyXG4gICAgc2VjdGlvbnMuZm9yRWFjaCgoc2VjdGlvbikgPT4ge1xyXG4gICAgICBjb25zdCBzZWN0aW9uVG9wID0gc2VjdGlvbi5vZmZzZXRUb3A7XHJcbiAgICAgIGlmIChldmVudC50YXJnZXQuc2Nyb2xsVG9wID4gc2VjdGlvblRvcCAtIDIwMCkge1xyXG4gICAgICAgIGN1cnJlbnQgPSBzZWN0aW9uLmdldEF0dHJpYnV0ZShcImlkXCIpXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgbmF2TGkuZm9yRWFjaCgobGkpID0+IHtcclxuICAgICAgY29uc3QgaWQgPSBsaS5nZXRBdHRyaWJ1dGUoJ2lkJylcclxuICAgICAgaWYgKGlkLnN1YnN0cmluZygwLCBpZC5sZW5ndGggLSAxKSA9PT0gY3VycmVudCkge1xyXG4gICAgICAgIGxpLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbGkuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBhc3luYyBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMudGVtcGxhdGVJZCA9IHRoaXMucm91dGUuc25hcHNob3QucGFyYW1NYXAuZ2V0KFwidGVtcGxhdGVJZFwiKTtcclxuICAgIHRoaXMub25ib2FyZGluZ0lkID0gdGhpcy5yb3V0ZS5zbmFwc2hvdC5wYXJhbU1hcC5nZXQoXCJvbmJvYXJkaW5nSWRcIik7XHJcbiAgICBpZiAodGhpcy5vbmJvYXJkaW5nSWQgJiYgdGhpcy5vbmJvYXJkaW5nSWQgIT09IFwiMFwiKSB7XHJcbiAgICAgIHRoaXMuc2hvd01vZGUgPSB0cnVlO1xyXG4gICAgICB0aGlzLmN1cnJlbnRPbmJvYXJkaW5nID0gYXdhaXQgdGhpcy5zZXJ2aWNlLmdldE9uYm9hcmRpbmcodGhpcy5vbmJvYXJkaW5nSWQpO1xyXG4gICAgICB0aGlzLmZvcm0ucGF0Y2hWYWx1ZSh0aGlzLmN1cnJlbnRPbmJvYXJkaW5nKVxyXG4gICAgICB0aGlzLmNhdGVnb3JpZXMgPSB0aGlzLmN1cnJlbnRPbmJvYXJkaW5nLmNhdGVnb3JpZXM7XHJcbiAgICAgIHRoaXMub25Mb2FkVmlld0RldGFpbCh0aGlzLmNhdGVnb3JpZXMpXHJcblxyXG4gICAgICB0aGlzLmN1cnJlbnRUZW1wbGF0ZSA9IHRoaXMuY3VycmVudE9uYm9hcmRpbmc/LnZ0ZW1wbGF0ZXNbMF1cclxuICAgICAgaWYgKHRoaXMuY3VycmVudE9uYm9hcmRpbmcuVGVtcGxhdGVJZCkge1xyXG4gICAgICAgIHRoaXMuaXNTZWxlY3RlZCA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuICBvbkxvYWRWaWV3RGV0YWlsKGNhdGVnb3JpZXMpIHtcclxuICAgIGNvbnN0IHVzZXIgPSB7fVxyXG4gICAgY29uc3QgY2F0ZWdvcmllc1ZpZXcgPSBjYXRlZ29yaWVzLm1hcCgoY2F0ZWdvcnkpID0+IHtcclxuICAgICAgY29uc3QgeyBuYW1lLCBleHBhbmRPbmJvYXJkaW5nIH0gPSBjYXRlZ29yeTtcclxuICAgICAgbGV0IGNhdGVnb3J5Rm9ybSA9IFtdXHJcbiAgICAgIGxldCBmaWVsZENvbXBsZXRlZCA9IDA7XHJcbiAgICAgIGxldCBmaWVsZExlbmd0aCA9IDA7XHJcbiAgICAgIGlmIChjYXRlZ29yeS5mb3Jtcykge1xyXG4gICAgICAgIGNhdGVnb3J5Rm9ybSA9IGNhdGVnb3J5LmZvcm1zLm1hcCgoZm9ybSkgPT4ge1xyXG4gICAgICAgICAgaWYgKGZvcm0uaXNNYW5kYXRvcnkpIHtcclxuICAgICAgICAgICAgZmllbGRMZW5ndGggKz0gMTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmIChmb3JtLmlzTWFuZGF0b3J5ICYmICEhZm9ybS52YWx1ZSkge1xyXG4gICAgICAgICAgICBmaWVsZENvbXBsZXRlZCArPSAxO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgY29uc3QgbmV3c3ViZm9ybXMgPSB7XHJcbiAgICAgICAgICAgIGxhYmVsOiBmb3JtLmxhYmVsLFxyXG4gICAgICAgICAgICB2YWx1ZTogZm9ybS50eXBlICE9PSBcInRlbFwiID8gZm9ybS52YWx1ZSA6IGZvcm0/LnZhbHVlPy5pbnRlcm5hdGlvbmFsTnVtYmVyIHx8ICcnLFxyXG4gICAgICAgICAgICBrZXk6IGZvcm0ua2V5XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAoY2F0ZWdvcmllcy5uYW1lID0gXCJVdGlsaXNhdGV1clwiKSB7XHJcbiAgICAgICAgICAgIHVzZXJbZm9ybS5rZXldID0gZm9ybS52YWx1ZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGxldCBzdWJGb3JtID0gW11cclxuICAgICAgICAgIGlmIChmb3JtLmZvcm1zKSB7XHJcbiAgICAgICAgICAgIHN1YkZvcm0gPSBmb3JtLmZvcm1zLm1hcCgoc3ViRm9ybSkgPT4ge1xyXG4gICAgICAgICAgICAgIGlmIChzdWJGb3JtLmlzTWFuZGF0b3J5KSB7XHJcbiAgICAgICAgICAgICAgICBmaWVsZExlbmd0aCArPSAxO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBpZiAoc3ViRm9ybS5pc01hbmRhdG9yeSAmJiAhIXN1YkZvcm0udmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIGZpZWxkQ29tcGxldGVkICs9IDE7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGNvbnN0IGNoaWxkZm9ybXMgPSB7XHJcbiAgICAgICAgICAgICAgICBsYWJlbDogc3ViRm9ybS5sYWJlbCxcclxuICAgICAgICAgICAgICAgIHZhbHVlOiBzdWJGb3JtLnR5cGUgIT09IFwidGVsXCIgPyBzdWJGb3JtLnZhbHVlIDogc3ViRm9ybT8udmFsdWU/LmludGVybmF0aW9uYWxOdW1iZXIgfHwgJycsXHJcbiAgICAgICAgICAgICAgICBrZXk6IHN1YkZvcm0ua2V5XHJcbiAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICBsZXQgY2hpbGQyID0gW11cclxuICAgICAgICAgICAgICBpZiAoc3ViRm9ybS5mb3Jtcykge1xyXG4gICAgICAgICAgICAgICAgY2hpbGQyID0gc3ViRm9ybS5mb3Jtcy5tYXAoKGMyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIGlmIChjMi5pc01hbmRhdG9yeSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGZpZWxkTGVuZ3RoICs9IDE7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgaWYgKGMyLmlzTWFuZGF0b3J5ICYmICEhYzIudmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBmaWVsZENvbXBsZXRlZCArPSAxO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6IGMyLmxhYmVsLFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBjMi50eXBlICE9PSBcInRlbFwiID8gYzIudmFsdWUgOiBjMj8udmFsdWU/LmludGVybmF0aW9uYWxOdW1iZXIgfHwgJycsXHJcbiAgICAgICAgICAgICAgICAgICAga2V5OiBjMi5rZXlcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgIC4uLmNoaWxkZm9ybXMsXHJcbiAgICAgICAgICAgICAgICAgIGV4cGFuZE9uYm9hcmRpbmc6IHN1YkZvcm0uZXhwYW5kT25ib2FyZGluZyxcclxuICAgICAgICAgICAgICAgICAgZm9ybXM6IGNoaWxkMixcclxuICAgICAgICAgICAgICAgICAga2V5OiBmb3JtLmtleVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gY2hpbGRmb3Jtc1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAuLi5uZXdzdWJmb3JtcywgZXhwYW5kT25ib2FyZGluZ1xyXG4gICAgICAgICAgICAgICAgOiBmb3JtLmV4cGFuZE9uYm9hcmRpbmcsXHJcbiAgICAgICAgICAgICAgZm9ybXM6IHN1YkZvcm0sXHJcbiAgICAgICAgICAgICAga2V5OiBmb3JtLmtleVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3c3ViZm9ybXNcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgbmFtZSwgZXhwYW5kT25ib2FyZGluZyxcclxuICAgICAgICBmb3JtczogY2F0ZWdvcnlGb3JtLFxyXG4gICAgICAgIGtleTogY2F0ZWdvcnkua2V5LFxyXG4gICAgICAgIGZpZWxkQ29tcGxldGVkLFxyXG4gICAgICAgIGZpZWxkTGVuZ3RoXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgICB0aGlzLmRldGFpbFZpZXcgPSB7XHJcbiAgICAgIGNhdGVnb3JpZXM6IGNhdGVnb3JpZXNWaWV3LFxyXG4gICAgICAvLyB2aWV3OiB0aGlzLmN1cnJlbnRPbmJvYXJkaW5nLnZpZXcsXHJcbiAgICAgIGNyZWF0ZWRBdDogdGhpcy5jdXJyZW50T25ib2FyZGluZz8uY3JlYXRlZEF0IHx8IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSxcclxuICAgICAgdXNlcjogdXNlcixcclxuICAgICAgTmFtZTogdGhpcy5jdXJyZW50T25ib2FyZGluZz8udnRlbXBsYXRlc1swXT8uTmFtZSB8fCB0aGlzLmN1cnJlbnRUZW1wbGF0ZT8uTmFtZVxyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG4gIG9uQ3JlYXRlRHluYW1pY0Zvcm0oKSB7XHJcbiAgICB0aGlzLmZvcm0gPSB0aGlzLmZiLmdyb3VwKHtcclxuICAgICAgVGVtcGxhdGVJZDogWzAsIFZhbGlkYXRvcnMucmVxdWlyZWRdXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGNhdE5hbWVTdGFydChzdHI6IHN0cmluZykge1xyXG4gICAgY29uc3Qgdm93ZWxzID0gWydhJywgJ2UnLCAnaScsICdvJywgJ3UnLCAneSddO1xyXG4gICAgcmV0dXJuIHZvd2Vscy5pbmNsdWRlcyhzdHIuc3Vic3RyKDAsIDEpLnRvTG9jYWxlTG93ZXJDYXNlKCkpXHJcbiAgfVxyXG5cclxuICBhc3luYyBvblNlbGVjdChpZCwgb25ib2FyZGluZykge1xyXG4gICAgaWYgKGlkKSB7XHJcbiAgICAgIHRoaXMuY3VycmVudFRlbXBsYXRlID0gYXdhaXQgdGhpcy5zZXJ2aWNlLmdldFByb2ZpbChpZCk7XHJcbiAgICAgIHRoaXMuY2F0ZWdvcmllcyA9IG9uYm9hcmRpbmcgPyBvbmJvYXJkaW5nLmNhdGVnb3JpZXMgOiB0aGlzLmN1cnJlbnRUZW1wbGF0ZS5jYXRlZ29yaWVzXHJcbiAgICAgICAgLmZpbHRlcigoY2F0KSA9PiBjYXQuZXhwYW5kT25ib2FyZGluZylcclxuICAgICAgICAubWFwKChjYXQpID0+IHtcclxuICAgICAgICAgIGlmIChjYXQuZm9ybXMpIHtcclxuICAgICAgICAgICAgY29uc3QgZiA9IGNhdC5mb3Jtc1xyXG4gICAgICAgICAgICAgIC5maWx0ZXIoKGZvcm0pID0+IGZvcm0uZXhwYW5kT25ib2FyZGluZylcclxuICAgICAgICAgICAgICAubWFwKChzdWIpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChzdWIuZm9ybXMpIHtcclxuICAgICAgICAgICAgICAgICAgY29uc3QgcyA9IHN1Yi5mb3Jtcy5maWx0ZXIoKGNoaWxkKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNoaWxkLmZvcm1zKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjID0gY2hpbGQuZm9ybXMuZmlsdGVyKChjaCkgPT4gY2guZXhwYW5kT25ib2FyZGluZylcclxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLmNoaWxkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JtczogY1xyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY2hpbGQ7XHJcbiAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC4uLnN1YixcclxuICAgICAgICAgICAgICAgICAgICBmb3Jtczogc1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc3ViO1xyXG4gICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgLi4uY2F0LFxyXG4gICAgICAgICAgICAgIGZvcm1zOiBmXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHJldHVybiBjYXRcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZXhpc3RTdWJGb3JtKGZvcm1zKSB7XHJcbiAgICBsZXQgZXhpc3QgPSBmYWxzZTtcclxuICAgIGlmIChmb3Jtcykge1xyXG4gICAgICBmb3IgKGNvbnN0IHN1YiBvZiBmb3Jtcykge1xyXG4gICAgICAgIGlmIChzdWIuZm9ybXMpIHtcclxuICAgICAgICAgIGV4aXN0ID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBleGlzdFxyXG4gIH1cclxuXHJcbiAgb25DaGFuZ2VDYXRlZ29yeSgpIHtcclxuICAgIGNvbnN0IGNoZWNrTWFuZGF0b3J5ID0gKGZpZWxkKSA9PiAhIWZpZWxkLnZhbHVlICYmIGZpZWxkLmlzTWFuZGF0b3J5ICYmIGZpZWxkLnR5cGUgIT09IFwiY2hlY2tib3hfbXVsdGlwbGVcIiB8fCBmaWVsZC5pc0NvbmRpdGlvbmFsIHx8ICFmaWVsZC5pc01hbmRhdG9yeSB8fCBmaWVsZC50eXBlID09PSBcImNoZWNrYm94X211bHRpcGxlXCJcclxuICAgIHJldHVybiB0aGlzLmNhdGVnb3JpZXMuZXZlcnkoKGNhdCkgPT4gY2F0LmZvcm1zLmV2ZXJ5KChmaWVsZCkgPT4ge1xyXG4gICAgICBpZiAoZmllbGQuZm9ybXMpIHtcclxuICAgICAgICByZXR1cm4gZmllbGQuZm9ybXMuZXZlcnkoKGZvcm0pID0+IHtcclxuICAgICAgICAgIGlmIChmb3JtLmZvcm1zKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmb3JtLmZvcm1zLmV2ZXJ5KChjaGlsZCkgPT4ge1xyXG4gICAgICAgICAgICAgIHJldHVybiBjaGVja01hbmRhdG9yeShjaGlsZClcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHJldHVybiBjaGVja01hbmRhdG9yeShmb3JtKVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGNoZWNrTWFuZGF0b3J5KGZpZWxkKVxyXG4gICAgfSkpO1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgb25TdWJtaXQoKSB7XHJcbiAgICBpZiAodGhpcy5mb3JtLnZhbGlkICYmIHRoaXMub25DaGFuZ2VDYXRlZ29yeSgpKSB7XHJcbiAgICAgIHRoaXMubG9hZGluZyA9IHRydWU7XHJcbiAgICAgIGNvbnN0IHJlc3VsdCA9XHJcbiAgICAgICAgdGhpcy5vbmJvYXJkaW5nSWQgJiYgdGhpcy5vbmJvYXJkaW5nSWQgIT09IFwiMFwiXHJcbiAgICAgICAgICA/IGF3YWl0IHRoaXMuc2VydmljZS51cGRhdGVPbmJvYXJkaW5nKHtcclxuICAgICAgICAgICAgLi4udGhpcy5mb3JtLnZhbHVlLFxyXG4gICAgICAgICAgICBjYXRlZ29yaWVzOiB0aGlzLmNhdGVnb3JpZXMsXHJcbiAgICAgICAgICAgIEZpbmlzaGVkOiB0cnVlLFxyXG4gICAgICAgICAgICBfaWQ6IHRoaXMub25ib2FyZGluZ0lkXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgOiBhd2FpdCB0aGlzLnNlcnZpY2UuY3JlYXRlT25ib2FyZGluZyh7XHJcbiAgICAgICAgICAgIC4uLnRoaXMuZm9ybS52YWx1ZSxcclxuICAgICAgICAgICAgY2F0ZWdvcmllczogdGhpcy5jYXRlZ29yaWVzLFxyXG4gICAgICAgICAgICBGaW5pc2hlZDogdHJ1ZSxcclxuICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgaWYgKHJlc3VsdCkge1xyXG4gICAgICAgIGlmICh0aGlzLm9uYm9hcmRpbmdJZCAmJiB0aGlzLm9uYm9hcmRpbmdJZCAhPT0gXCIwXCIpIHtcclxuICAgICAgICAgIHRoaXMuY2F0ZWdvcmllcyA9IHJlc3VsdC5jYXRlZ29yaWVzO1xyXG4gICAgICAgICAgdGhpcy5jdXJyZW50T25ib2FyZGluZyA9IHJlc3VsdDtcclxuICAgICAgICB9XHJcbiAgICAgICAgYXdhaXQgdGhpcy5zZXJ2aWNlLmdldEFsbFByb2ZpbCgpO1xyXG4gICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuY2FuRXhpdCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5zaG93TW9kZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW3RoaXMuc2VydmljZS5tYWluUGF0aCArICcvcmVxdWVzdHMnXSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJlcnJyb3IuLi4uLi5cIik7XHJcbiAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGFzeW5jIG9uUmVzdW1lTGF0ZXIoKSB7XHJcbiAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xyXG4gICAgY29uc3QgcmVzdWx0ID1cclxuICAgICAgdGhpcy5vbmJvYXJkaW5nSWQgJiYgdGhpcy5vbmJvYXJkaW5nSWQgIT09IFwiMFwiXHJcbiAgICAgICAgPyBhd2FpdCB0aGlzLnNlcnZpY2UudXBkYXRlT25ib2FyZGluZyh7XHJcbiAgICAgICAgICAuLi50aGlzLmZvcm0udmFsdWUsXHJcbiAgICAgICAgICBjYXRlZ29yaWVzOiB0aGlzLmNhdGVnb3JpZXMsXHJcbiAgICAgICAgICBGaW5pc2hlZDogZmFsc2UsXHJcbiAgICAgICAgICBfaWQ6IHRoaXMub25ib2FyZGluZ0lkXHJcbiAgICAgICAgfSlcclxuICAgICAgICA6IGF3YWl0IHRoaXMuc2VydmljZS5jcmVhdGVPbmJvYXJkaW5nKHtcclxuICAgICAgICAgIC4uLnRoaXMuZm9ybS52YWx1ZSxcclxuICAgICAgICAgIGNhdGVnb3JpZXM6IHRoaXMuY2F0ZWdvcmllcyxcclxuICAgICAgICAgIEZpbmlzaGVkOiBmYWxzZSxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICBpZiAocmVzdWx0KSB7XHJcbiAgICAgIGlmICh0aGlzLm9uYm9hcmRpbmdJZCAmJiB0aGlzLm9uYm9hcmRpbmdJZCAhPT0gXCIwXCIpIHtcclxuICAgICAgICB0aGlzLmNhdGVnb3JpZXMgPSByZXN1bHQuY2F0ZWdvcmllcztcclxuICAgICAgICB0aGlzLmN1cnJlbnRPbmJvYXJkaW5nID0gcmVzdWx0O1xyXG4gICAgICB9XHJcbiAgICAgIGF3YWl0IHRoaXMuc2VydmljZS5nZXRBbGxQcm9maWwoKTtcclxuICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuY2FuRXhpdCA9IHRydWU7XHJcbiAgICAgIHRoaXMuc2hvd01vZGUgPSB0cnVlO1xyXG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbdGhpcy5zZXJ2aWNlLm1haW5QYXRoICsgJy9yZXF1ZXN0cyddKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiZXJycm9yLi4uLi4uXCIpO1xyXG4gICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGluZ29yZURlZmF1bHRBY3Rpb24oZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIH1cclxuXHJcblxyXG4gIG9uQ2hlY2tDb25kaXRpb25Mb2NhdGlvblZhbHVlKGlzY29uZGl0aW9uLCBsb2NhdGlvbiwgY29uZGl0aW9uVmFsdWUpIHtcclxuICAgIGlmICghaXNjb25kaXRpb24pIHtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICBpZiAobG9jYXRpb24ubGV2ZWwgPT09IDEpIHtcclxuICAgICAgaWYgKHRoaXMuY2F0ZWdvcmllc1tsb2NhdGlvbi5jYXRlZ29yeUluZGV4XS5mb3Jtc1tsb2NhdGlvbi5jdXJyZW50SW5kZXhdLnR5cGUgPT09ICdjaGVja2JveF9tdWx0aXBsZScpIHtcclxuICAgICAgICBjb25zdCBhcnJheSA9IHRoaXMuY2F0ZWdvcmllc1tsb2NhdGlvbi5jYXRlZ29yeUluZGV4XS5mb3Jtc1tsb2NhdGlvbi5jdXJyZW50SW5kZXhdLmRlZmF1bHRWYWx1ZS5maWx0ZXIoKGNoZWNrKSA9PiBjaGVjay5jaGVja2VkKVxyXG4gICAgICAgIGxldCBjaGVja2VkID0gZmFsc2U7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgaWYgKGFycmF5W2ldLnZhbHVlID09IGNvbmRpdGlvblZhbHVlKSB7XHJcbiAgICAgICAgICAgIGNoZWNrZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGNoZWNrZWQ7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY2F0ZWdvcmllc1tsb2NhdGlvbi5jYXRlZ29yeUluZGV4XS5mb3Jtc1tsb2NhdGlvbi5jdXJyZW50SW5kZXhdLnZhbHVlID09PSBjb25kaXRpb25WYWx1ZVxyXG4gICAgICB9XHJcbiAgICB9IGVsc2UgaWYgKGxvY2F0aW9uLmxldmVsID09PSAyKSB7XHJcbiAgICAgIGlmICh0aGlzLmNhdGVnb3JpZXNbbG9jYXRpb24uY2F0ZWdvcnlJbmRleF0uZm9ybXNbbG9jYXRpb24uZm9ybUluZGV4XS5mb3Jtc1tsb2NhdGlvbi5jdXJyZW50SW5kZXhdLnR5cGUgPT09ICdjaGVja2JveF9tdWx0aXBsZScpIHtcclxuICAgICAgICBjb25zdCBhcnJheSA9IHRoaXMuY2F0ZWdvcmllc1tsb2NhdGlvbi5jYXRlZ29yeUluZGV4XS5mb3Jtc1tsb2NhdGlvbi5mb3JtSW5kZXhdLmZvcm1zW2xvY2F0aW9uLmN1cnJlbnRJbmRleF0uZGVmYXVsdFZhbHVlLmZpbHRlcigoY2hlY2spID0+IGNoZWNrLmNoZWNrZWQpXHJcbiAgICAgICAgbGV0IGNoZWNrZWQgPSBmYWxzZTtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICBpZiAoYXJyYXlbaV0udmFsdWUgPT0gY29uZGl0aW9uVmFsdWUpIHtcclxuICAgICAgICAgICAgY2hlY2tlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gY2hlY2tlZDtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jYXRlZ29yaWVzW2xvY2F0aW9uLmNhdGVnb3J5SW5kZXhdLmZvcm1zW2xvY2F0aW9uLmZvcm1JbmRleF0uZm9ybXNbbG9jYXRpb24uY3VycmVudEluZGV4XS52YWx1ZSA9PT0gY29uZGl0aW9uVmFsdWVcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIGlmIChsb2NhdGlvbi5sZXZlbCA9PT0gMykge1xyXG4gICAgICBpZiAodGhpcy5jYXRlZ29yaWVzW2xvY2F0aW9uLmNhdGVnb3J5SW5kZXhdLmZvcm1zW2xvY2F0aW9uLmZvcm1JbmRleF0uZm9ybXNbbG9jYXRpb24uc3ViSW5kZXhdLmZvcm1zW2xvY2F0aW9uLmN1cnJlbnRJbmRleF0udHlwZSA9PT0gJ2NoZWNrYm94X211bHRpcGxlJykge1xyXG4gICAgICAgIGNvbnN0IGFycmF5ID0gdGhpcy5jYXRlZ29yaWVzW2xvY2F0aW9uLmNhdGVnb3J5SW5kZXhdLmZvcm1zW2xvY2F0aW9uLmZvcm1JbmRleF0uZm9ybXNbbG9jYXRpb24uc3ViSW5kZXhdLmZvcm1zW2xvY2F0aW9uLmN1cnJlbnRJbmRleF0uZGVmYXVsdFZhbHVlLmZpbHRlcigoY2hlY2spID0+IGNoZWNrLmNoZWNrZWQpXHJcbiAgICAgICAgbGV0IGNoZWNrZWQgPSBmYWxzZTtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICBpZiAoYXJyYXlbaV0udmFsdWUgPT0gY29uZGl0aW9uVmFsdWUpIHtcclxuICAgICAgICAgICAgY2hlY2tlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gY2hlY2tlZDtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jYXRlZ29yaWVzW2xvY2F0aW9uLmNhdGVnb3J5SW5kZXhdLmZvcm1zW2xvY2F0aW9uLmZvcm1JbmRleF0uZm9ybXNbbG9jYXRpb24uc3ViSW5kZXhdLmZvcm1zW2xvY2F0aW9uLmN1cnJlbnRJbmRleF0udmFsdWUgPT09IGNvbmRpdGlvblZhbHVlXHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiB0cnVlXHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcbiAgY2hlY2tTdWJGb3JtKGZvcm1zKSB7XHJcbiAgICBsZXQgaGFzU3ViRm9ybSA9IGZhbHNlO1xyXG4gICAgZm9yIChjb25zdCBmb3JtIG9mIGZvcm1zKSB7XHJcbiAgICAgIGlmIChmb3JtLmZvcm1zICYmIGZvcm0uZm9ybXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIGhhc1N1YkZvcm0gPSB0cnVlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gaGFzU3ViRm9ybVxyXG4gIH1cclxuXHJcbiAgb25TZWxlY3RNZW51KGkpIHtcclxuICAgIHRoaXMuc2VsZWN0ZWRNZW51ID0gaTtcclxuICAgIHRoaXMuc2VsZWN0ZWRDYXRlZ29yeUluZGV4ID0gaTtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICB0aGlzLnNlbGVjdGVkQ2F0ZWdvcnlJbmRleCA9IG51bGw7XHJcbiAgICB9LCAyMDAwKTtcclxuICB9XHJcblxyXG4gIG9uQ2hlY2tWYWx1ZShldmVudDogYm9vbGVhbikge1xyXG4gICAgdGhpcy5pbnZhbGlkZVZhbHVlID0gZXZlbnQ7XHJcblxyXG4gIH1cclxuXHJcbiAgb25MaW5rKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gIH1cclxuXHJcbiAgZmllbGRXaWR0aChsZW5ndGg6IG51bWJlcikge1xyXG4gICAgaWYgKGxlbmd0aCA9PT0gMSkge1xyXG4gICAgICByZXR1cm4gJzUwJSdcclxuICAgIH0gZWxzZSBpZiAobGVuZ3RoID09PSAyKSB7XHJcbiAgICAgIHJldHVybiAnNTAlJ1xyXG4gICAgfSBlbHNlIGlmIChsZW5ndGggPT09IDMpIHtcclxuICAgICAgcmV0dXJuICczMyUnXHJcbiAgICB9IGVsc2UgaWYgKGxlbmd0aCA9PT0gNCkge1xyXG4gICAgICByZXR1cm4gJzI1JSdcclxuICAgIH0gZWxzZSBpZiAobGVuZ3RoID09PSA1KSB7XHJcbiAgICAgIHJldHVybiAnMzMlJ1xyXG4gICAgfSBlbHNlIGlmIChsZW5ndGggPj0gNikge1xyXG4gICAgICByZXR1cm4gJzMzJSdcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uU2hvd01vZGUoKSB7XHJcbiAgICB0aGlzLnNob3dNb2RlID0gIXRoaXMuc2hvd01vZGU7XHJcbiAgICB0aGlzLm9uTG9hZFZpZXdEZXRhaWwodGhpcy5jYXRlZ29yaWVzKVxyXG4gIH1cclxuXHJcbn1cclxuIiwiPG1haW4+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY29udGVudFwiPlxyXG4gICAgICAgIDxmb3JtICpuZ0lmPVwiIXNob3dNb2RlXCIgW2Zvcm1Hcm91cF09XCJmb3JtXCIgKHN1Ym1pdCk9XCJvblN1Ym1pdCgpXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXRlZ29yeVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRpdGxlLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgyPkludMOpZ3JhdGlvbiBwcm9maWwge3tjdXJyZW50VGVtcGxhdGU/Lk5hbWV9fSA8bWF0LWljb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPVwibWFyZ2luLWxlZnQ6IDIwcHg7IGN1cnNvcjogcG9pbnRlcjtcIiAoY2xpY2spPVwib25TaG93TW9kZSgpXCI+dmlzaWJpbGl0eTwvbWF0LWljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG1hdC1idXR0b24gW2Rpc2FibGVkXT1cImxvYWRpbmdcIiBjbGFzcz1cInJlZ2lzdGVyLWJ1dHRvblwiIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwib25SZXN1bWVMYXRlcigpXCI+UmVwcmVuZHJlIHBsdXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiZmllbGRzXCIgY2xhc3M9XCJmaWVsZHNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBbbmd4U2Nyb2xsVG9dPVwiJyMnK2NhdGVnb3J5Lm5hbWVcIiBjbGFzcz1cIm1lbnUtaXRlbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAqbmdGb3I9XCJsZXQgY2F0ZWdvcnkgb2YgY2F0ZWdvcmllczsgIGxldCBpPWluZGV4XCIgW2lkXT1cImNhdGVnb3J5Lm5hbWUrJ3gnXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT57e2NhdGVnb3J5Lm5hbWV9fTwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXRlZ29yeS1jb250YWluZXJcIiAoc2Nyb2xsKT1cIm9uU2Nyb2xsKCRldmVudClcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3M9XCJjYXRlZ29yeS1pdGVtIGNvbnRlbnQtaXRlbVwiICpuZ0Zvcj1cImxldCBjYXRlZ29yeSBvZiBjYXRlZ29yaWVzOyAgbGV0IGk9aW5kZXhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW2lkXT1cImNhdGVnb3J5Lm5hbWVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpZWxkLWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhdGVnb3J5LXRpdGxlLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3M9XCJjYXRlZ29yeS1uYW1lXCI+e3tjYXRlZ29yeS5uYW1lfX08L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTGlzdGVzIGRlcyBpbmZvcm1hdGlvbnMgbsOpY2Vzc2FpcmVzIHBvdXIgbGEgY3LDqWF0aW9uIGRlIHt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2F0TmFtZVN0YXJ0KGNhdGVnb3J5Lm5hbWUpID8gXCJsJ1wiICsgY2F0ZWdvcnkubmFtZSA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnkubmFtZSB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG1hdC1zZWxlY3QgcGxhY2Vob2xkZXI9XCJDb21wYW55XCIgWyhuZ01vZGVsKV09XCJjYXRlZ29yeS5zZWxlY3Rvci52YWx1ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbbmdNb2RlbE9wdGlvbnNdPVwie3N0YW5kYWxvbmU6IHRydWV9XCIgcmVxdWlyZWQgKm5nSWY9XCJjYXRlZ29yeS5zZWxlY3RvclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT1cIndpZHRoOiAxNTBweDtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxtYXQtb3B0aW9uICpuZ0Zvcj1cImxldCBzZWxlY3Qgb2YgY2F0ZWdvcnkuc2VsZWN0b3IuZGVmYXVsdFZhbHVlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbdmFsdWVdPVwic2VsZWN0LnZhbHVlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3tzZWxlY3QudmFsdWV9fTwvbWF0LW9wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9tYXQtc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bWF0LXNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJjYXRlZ29yeS50aWNrZXRUeXBlPy52YWx1ZSAmJiBjYXRlZ29yeS5zZWxlY3Rvci52YWx1ZT09PSdOb3d0ZWFtJ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlR5cGUgZGUgdGlja2V0XCIgWyhuZ01vZGVsKV09XCJjYXRlZ29yeS50aWNrZXRUeXBlLnZhbHVlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtuZ01vZGVsT3B0aW9uc109XCJ7c3RhbmRhbG9uZTogdHJ1ZX1cIiByZXF1aXJlZCBzdHlsZT1cIndpZHRoOiAxNTBweDtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxtYXQtb3B0aW9uICpuZ0Zvcj1cImxldCBzZWxlY3Qgb2YgY2F0ZWdvcnkudGlja2V0VHlwZS5kZWZhdWx0VmFsdWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFt2YWx1ZV09XCJzZWxlY3Qua2V5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3tzZWxlY3QudmFsdWV9fTwvbWF0LW9wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9tYXQtc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXRlZ29yeS1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpZWxkLWNhdGVnb3J5XCIgKm5nRm9yPVwibGV0IGZpZWxkIG9mIGNhdGVnb3J5LmZvcm1zO2xldCBqPWluZGV4XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtpZF09XCJmaWVsZC5rZXlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3N0eWxlLndpZHRoXT1cIihmaWVsZC5mb3JtcyB8fCBmaWVsZC50eXBlPT09J3RleHRhcmVhJykgPyAnMTAwJScgOiBmaWVsZFdpZHRoKGNhdGVnb3J5LmZvcm1zLmxlbmd0aClcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbm5lci1sb29wXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqbmdJZj1cImZpZWxkLmV4cGFuZE9uYm9hcmRpbmcgJiYgb25DaGVja0NvbmRpdGlvbkxvY2F0aW9uVmFsdWUoZmllbGQuaXNDb25kaXRpb25hbCxmaWVsZC5jb25kaXRpb25Mb2NhdGlvbixmaWVsZC5jb25kaXRpb25WYWx1ZSlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmllbGRzLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpZWxkcy1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaWItc3ViLWNyZWF0ZS1vbmJvYXJkaW5nIFtmaWVsZF09XCJmaWVsZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2xlbmd0aF09XCJjYXRlZ29yeT8uZm9ybXM/Lmxlbmd0aFwiIFtpXT1cImlcIiBbal09XCJqXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNoaWxkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbm5lci1jaGlsZFwiICpuZ0lmPVwiZmllbGQuZm9ybXMgJiYgZmllbGQudmFsdWVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbm5lci1jaGlsZC1jb250ZW50XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqbmdGb3I9XCJsZXQgY2hpbGQgb2YgZmllbGQuZm9ybXM7bGV0IGs9aW5kZXhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtpZF09XCJjaGlsZC5rZXlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtzdHlsZS53aWR0aF09XCIoY2hpbGQuZm9ybXMgfHwgY2hpbGQudHlwZT09PSd0ZXh0YXJlYScpID8gJzEwMCUnIDogZmllbGRXaWR0aChmaWVsZC5mb3Jtcy5sZW5ndGgpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlubmVyLWxvb3BcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqbmdJZj1cImNoaWxkLmV4cGFuZE9uYm9hcmRpbmcgJiYgb25DaGVja0NvbmRpdGlvbkxvY2F0aW9uVmFsdWUoY2hpbGQuaXNDb25kaXRpb25hbCxjaGlsZC5jb25kaXRpb25Mb2NhdGlvbixjaGlsZC5jb25kaXRpb25WYWx1ZSlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpZWxkcy1jb250ZW50XCI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpZWxkcy1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGliLXN1Yi1jcmVhdGUtb25ib2FyZGluZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbZmllbGRdPVwiY2hpbGRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbbGVuZ3RoXT1cImZpZWxkPy5mb3Jtcz8ubGVuZ3RoXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2ldPVwialwiIFtqXT1cImtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAob25DaGVja1ZhbHVlKT1cIm9uQ2hlY2tWYWx1ZSgkZXZlbnQpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjaGlsZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlubmVyLWNoaWxkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqbmdJZj1cImNoaWxkLmZvcm1zICYmIGNoaWxkLnZhbHVlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlubmVyLWNoaWxkLWNvbnRlbnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqbmdGb3I9XCJsZXQgYzIgb2YgY2hpbGQuZm9ybXM7bGV0IGw9aW5kZXhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbaWRdPVwiYzIua2V5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3N0eWxlLndpZHRoXT1cIihjMi5mb3JtcyB8fCBjMi50eXBlPT09J3RleHRhcmVhJykgPyAnMTAwJScgOiBmaWVsZFdpZHRoKGNoaWxkLmZvcm1zLmxlbmd0aClcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlubmVyLWxvb3BcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJjMi5leHBhbmRPbmJvYXJkaW5nICYmIG9uQ2hlY2tDb25kaXRpb25Mb2NhdGlvblZhbHVlKGMyLmlzQ29uZGl0aW9uYWwsYzIuY29uZGl0aW9uTG9jYXRpb24sYzIuY29uZGl0aW9uVmFsdWUpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmaWVsZHMtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmaWVsZHMtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaWItc3ViLWNyZWF0ZS1vbmJvYXJkaW5nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbZmllbGRdPVwiYzJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2xlbmd0aF09XCJjaGlsZD8uZm9ybXM/Lmxlbmd0aFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbaV09XCJrXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtqXT1cImxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKG9uQ2hlY2tWYWx1ZSk9XCJvbkNoZWNrVmFsdWUoJGV2ZW50KVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiY2hpbGRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpYi1zdWItY3JlYXRlLW9uYm9hcmRpbmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saWItc3ViLWNyZWF0ZS1vbmJvYXJkaW5nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saWItc3ViLWNyZWF0ZS1vbmJvYXJkaW5nPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhY3Rpb25zLWJ1dHRvblwiIHN0eWxlPVwibWFyZ2luLWJvdHRvbTogNTBweDtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gW2Rpc2FibGVkXT1cImxvYWRpbmcgfHwgIWZvcm0udmFsaWRcIiBtYXQtYnV0dG9uIGNsYXNzPVwicmVnaXN0ZXItYnV0dG9uIHNlbmQtZm9ybVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiPkVudm95ZXIgbWEgZmljaGU8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gW2Rpc2FibGVkXT1cImxvYWRpbmdcIiBtYXQtYnV0dG9uIGNsYXNzPVwicmVnaXN0ZXItYnV0dG9uIHJlc3VtZVwiIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJvblJlc3VtZUxhdGVyKClcIj5SZXByZW5kcmUgcGx1cyB0YXJkPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPGxpYi1vbmJvYXJkaW5nLWRldGFpbCAqbmdJZj1cInNob3dNb2RlXCIgKG9uU2hvd01vZGUpPVwib25TaG93TW9kZSgpXCIgW2RldGFpbFZpZXddPVwiZGV0YWlsVmlld1wiPlxyXG4gICAgICAgIDwvbGliLW9uYm9hcmRpbmctZGV0YWlsPlxyXG4gICAgPC9kaXY+XHJcblxyXG48L21haW4+Il19