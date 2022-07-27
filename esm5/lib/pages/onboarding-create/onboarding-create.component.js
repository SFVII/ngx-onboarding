import { __assign, __awaiter, __generator, __rest, __values } from "tslib";
import { Component, HostListener } from '@angular/core';
import { Validators } from "@angular/forms";
import { DialogConfirmation } from '../../components/dialog-confirmation/dialog-confirmation.component';
import { ExitConfirmComponent } from '../../components/exit-confirm/exit-confirm.component';
import { fieldWidth } from "../../utils/utils";
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "../../onboarding.service";
import * as i3 from "@angular/router";
import * as i4 from "@angular/material/dialog";
import * as i5 from "@angular/common";
import * as i6 from "@angular/material/icon";
import * as i7 from "@angular/material/button";
import * as i8 from "../../components/loading/loading.component";
import * as i9 from "@nicky-lenaers/ngx-scroll-to";
import * as i10 from "../../components/onboarding/sub-onboarding-create/sub-onboarding-create.component";
import * as i11 from "../../components/onboarding/onboarding-detail/onboarding-detail.component";
function OnboardingCreateComponent_form_2_lib_loading_page_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "lib-loading-page");
} }
function OnboardingCreateComponent_form_2_li_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li", 19);
    i0.ɵɵelementStart(1, "a");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var category_r940 = ctx.$implicit;
    i0.ɵɵproperty("ngxScrollTo", "#" + category_r940.name)("id", category_r940.name + "x");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(category_r940.name);
} }
function OnboardingCreateComponent_form_2_section_14_div_9_div_1_div_5_div_1_div_1_div_5_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    var _r959 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 29);
    i0.ɵɵelementStart(1, "div", 30);
    i0.ɵɵelementStart(2, "div", 31);
    i0.ɵɵelementStart(3, "lib-sub-create-onboarding", 38);
    i0.ɵɵlistener("onCheckValue", function OnboardingCreateComponent_form_2_section_14_div_9_div_1_div_5_div_1_div_1_div_5_div_1_div_1_Template_lib_sub_create_onboarding_onCheckValue_3_listener($event) { i0.ɵɵrestoreView(_r959); var ctx_r958 = i0.ɵɵnextContext(10); return ctx_r958.onCheckValue($event); });
    i0.ɵɵelement(4, "div", 33);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r960 = i0.ɵɵnextContext();
    var c2_r955 = ctx_r960.$implicit;
    var l_r956 = ctx_r960.index;
    var ctx_r961 = i0.ɵɵnextContext(3);
    var child_r950 = ctx_r961.$implicit;
    var k_r951 = ctx_r961.index;
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("field", c2_r955)("length", child_r950 == null ? null : child_r950.forms == null ? null : child_r950.forms.length)("i", k_r951)("j", l_r956);
} }
function OnboardingCreateComponent_form_2_section_14_div_9_div_1_div_5_div_1_div_1_div_5_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 37);
    i0.ɵɵtemplate(1, OnboardingCreateComponent_form_2_section_14_div_9_div_1_div_5_div_1_div_1_div_5_div_1_div_1_Template, 5, 4, "div", 28);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var c2_r955 = ctx.$implicit;
    var l_r956 = ctx.index;
    var child_r950 = i0.ɵɵnextContext(3).$implicit;
    var ctx_r954 = i0.ɵɵnextContext(6);
    i0.ɵɵstyleProp("width", c2_r955.forms ? "100%" : ctx_r954.fieldWidth(c2_r955.type, child_r950.forms.length, l_r956));
    i0.ɵɵproperty("id", c2_r955.key);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", c2_r955.expandOnboarding && ctx_r954.onCheckConditionLocationValue(c2_r955.isConditional, c2_r955 == null ? null : c2_r955.condition));
} }
function OnboardingCreateComponent_form_2_section_14_div_9_div_1_div_5_div_1_div_1_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 35);
    i0.ɵɵtemplate(1, OnboardingCreateComponent_form_2_section_14_div_9_div_1_div_5_div_1_div_1_div_5_div_1_Template, 2, 4, "div", 36);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var child_r950 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", child_r950.forms);
} }
function OnboardingCreateComponent_form_2_section_14_div_9_div_1_div_5_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    var _r965 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 29);
    i0.ɵɵelementStart(1, "div", 30);
    i0.ɵɵelementStart(2, "div", 31);
    i0.ɵɵelementStart(3, "lib-sub-create-onboarding", 38);
    i0.ɵɵlistener("onCheckValue", function OnboardingCreateComponent_form_2_section_14_div_9_div_1_div_5_div_1_div_1_Template_lib_sub_create_onboarding_onCheckValue_3_listener($event) { i0.ɵɵrestoreView(_r965); var ctx_r964 = i0.ɵɵnextContext(7); return ctx_r964.onCheckValue($event); });
    i0.ɵɵelementStart(4, "div", 33);
    i0.ɵɵtemplate(5, OnboardingCreateComponent_form_2_section_14_div_9_div_1_div_5_div_1_div_1_div_5_Template, 2, 1, "div", 34);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r966 = i0.ɵɵnextContext();
    var child_r950 = ctx_r966.$implicit;
    var k_r951 = ctx_r966.index;
    var ctx_r967 = i0.ɵɵnextContext(3);
    var field_r945 = ctx_r967.$implicit;
    var j_r946 = ctx_r967.index;
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("field", child_r950)("length", field_r945 == null ? null : field_r945.forms == null ? null : field_r945.forms.length)("i", j_r946)("j", k_r951);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", child_r950.forms && child_r950.value);
} }
function OnboardingCreateComponent_form_2_section_14_div_9_div_1_div_5_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 37);
    i0.ɵɵtemplate(1, OnboardingCreateComponent_form_2_section_14_div_9_div_1_div_5_div_1_div_1_Template, 6, 5, "div", 28);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var child_r950 = ctx.$implicit;
    var k_r951 = ctx.index;
    var field_r945 = i0.ɵɵnextContext(3).$implicit;
    var ctx_r949 = i0.ɵɵnextContext(3);
    i0.ɵɵstyleProp("width", child_r950.forms ? "100%" : ctx_r949.fieldWidth(child_r950.type, field_r945.forms.length, k_r951));
    i0.ɵɵproperty("id", child_r950.key);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", child_r950.expandOnboarding && ctx_r949.onCheckConditionLocationValue(child_r950.isConditional, child_r950 == null ? null : child_r950.condition));
} }
function OnboardingCreateComponent_form_2_section_14_div_9_div_1_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 35);
    i0.ɵɵtemplate(1, OnboardingCreateComponent_form_2_section_14_div_9_div_1_div_5_div_1_Template, 2, 4, "div", 36);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var field_r945 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", field_r945.forms);
} }
function OnboardingCreateComponent_form_2_section_14_div_9_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 29);
    i0.ɵɵelementStart(1, "div", 30);
    i0.ɵɵelementStart(2, "div", 31);
    i0.ɵɵelementStart(3, "lib-sub-create-onboarding", 32);
    i0.ɵɵelementStart(4, "div", 33);
    i0.ɵɵtemplate(5, OnboardingCreateComponent_form_2_section_14_div_9_div_1_div_5_Template, 2, 1, "div", 34);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r970 = i0.ɵɵnextContext();
    var field_r945 = ctx_r970.$implicit;
    var j_r946 = ctx_r970.index;
    var ctx_r971 = i0.ɵɵnextContext();
    var category_r942 = ctx_r971.$implicit;
    var i_r943 = ctx_r971.index;
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("field", field_r945)("length", category_r942 == null ? null : category_r942.forms == null ? null : category_r942.forms.length)("i", i_r943)("j", j_r946);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", field_r945.forms && field_r945.value);
} }
function OnboardingCreateComponent_form_2_section_14_div_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 27);
    i0.ɵɵtemplate(1, OnboardingCreateComponent_form_2_section_14_div_9_div_1_Template, 6, 5, "div", 28);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var field_r945 = ctx.$implicit;
    var j_r946 = ctx.index;
    var category_r942 = i0.ɵɵnextContext().$implicit;
    var ctx_r944 = i0.ɵɵnextContext(2);
    i0.ɵɵstyleProp("width", field_r945.forms ? "100%" : ctx_r944.fieldWidth(field_r945.type, category_r942.forms.length, j_r946));
    i0.ɵɵproperty("id", field_r945.key);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", field_r945.expandOnboarding && ctx_r944.onCheckConditionLocationValue(field_r945.isConditional, field_r945 == null ? null : field_r945.condition));
} }
function OnboardingCreateComponent_form_2_section_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 20);
    i0.ɵɵelementStart(1, "div", 21);
    i0.ɵɵelementStart(2, "div", 22);
    i0.ɵɵelementStart(3, "div", 23);
    i0.ɵɵelementStart(4, "h4", 24);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "p");
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "div", 25);
    i0.ɵɵtemplate(9, OnboardingCreateComponent_form_2_section_14_div_9_Template, 2, 4, "div", 26);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var category_r942 = ctx.$implicit;
    var ctx_r937 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("id", category_r942.name);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(category_r942.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" Listes des informations n\u00E9cessaires pour la cr\u00E9ation de ", ctx_r937.catNameStart(category_r942.name) ? "l'" + category_r942.name : category_r942.name, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", category_r942.forms);
} }
function OnboardingCreateComponent_form_2_lib_loading_page_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "lib-loading-page");
} }
function OnboardingCreateComponent_form_2_lib_loading_page_21_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "lib-loading-page");
} }
function OnboardingCreateComponent_form_2_Template(rf, ctx) { if (rf & 1) {
    var _r974 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "form", 3);
    i0.ɵɵlistener("submit", function OnboardingCreateComponent_form_2_Template_form_submit_0_listener() { i0.ɵɵrestoreView(_r974); var ctx_r973 = i0.ɵɵnextContext(); return ctx_r973.onSubmit(true); });
    i0.ɵɵelementStart(1, "div", 4);
    i0.ɵɵelementStart(2, "div", 5);
    i0.ɵɵelementStart(3, "h2");
    i0.ɵɵtext(4);
    i0.ɵɵelementStart(5, "mat-icon", 6);
    i0.ɵɵlistener("click", function OnboardingCreateComponent_form_2_Template_mat_icon_click_5_listener() { i0.ɵɵrestoreView(_r974); var ctx_r975 = i0.ɵɵnextContext(); return ctx_r975.onShowMode(); });
    i0.ɵɵtext(6, "visibility");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "button", 7);
    i0.ɵɵlistener("click", function OnboardingCreateComponent_form_2_Template_button_click_7_listener() { i0.ɵɵrestoreView(_r974); var ctx_r976 = i0.ɵɵnextContext(); return ctx_r976.onSubmit(false); });
    i0.ɵɵtemplate(8, OnboardingCreateComponent_form_2_lib_loading_page_8_Template, 1, 0, "lib-loading-page", 8);
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "div", 9);
    i0.ɵɵelementStart(11, "ul");
    i0.ɵɵtemplate(12, OnboardingCreateComponent_form_2_li_12_Template, 3, 3, "li", 10);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "div", 11);
    i0.ɵɵlistener("scroll", function OnboardingCreateComponent_form_2_Template_div_scroll_13_listener($event) { i0.ɵɵrestoreView(_r974); var ctx_r977 = i0.ɵɵnextContext(); return ctx_r977.onScroll($event); });
    i0.ɵɵtemplate(14, OnboardingCreateComponent_form_2_section_14_Template, 10, 4, "section", 12);
    i0.ɵɵelementStart(15, "div", 13);
    i0.ɵɵelementStart(16, "div", 14);
    i0.ɵɵelementStart(17, "button", 15);
    i0.ɵɵtemplate(18, OnboardingCreateComponent_form_2_lib_loading_page_18_Template, 1, 0, "lib-loading-page", 8);
    i0.ɵɵtext(19);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(20, "button", 16);
    i0.ɵɵlistener("click", function OnboardingCreateComponent_form_2_Template_button_click_20_listener() { i0.ɵɵrestoreView(_r974); var ctx_r978 = i0.ɵɵnextContext(); return ctx_r978.onSubmit(false); });
    i0.ɵɵtemplate(21, OnboardingCreateComponent_form_2_lib_loading_page_21_Template, 1, 0, "lib-loading-page", 8);
    i0.ɵɵtext(22);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(23, "section", 17);
    i0.ɵɵelement(24, "div", 18);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r933 = i0.ɵɵnextContext();
    i0.ɵɵproperty("formGroup", ctx_r933.form);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1("Int\u00E9gration profil ", ctx_r933.currentTemplate == null ? null : ctx_r933.currentTemplate.Name, " ");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("disabled", ctx_r933.loading);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r933.loading && !ctx_r933.isSubmitted);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1("", ctx_r933.resumeLabel, " ");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", ctx_r933.categories);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r933.categories);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("disabled", ctx_r933.loading || !ctx_r933.form.valid);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r933.loading && ctx_r933.isSubmitted);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1("", ctx_r933.submitLabel, " ");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("disabled", ctx_r933.loading);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r933.loading && !ctx_r933.isSubmitted);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1("", ctx_r933.resumeLabel, " ");
} }
function OnboardingCreateComponent_lib_onboarding_detail_3_Template(rf, ctx) { if (rf & 1) {
    var _r980 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "lib-onboarding-detail", 39);
    i0.ɵɵlistener("onShowMode", function OnboardingCreateComponent_lib_onboarding_detail_3_Template_lib_onboarding_detail_onShowMode_0_listener() { i0.ɵɵrestoreView(_r980); var ctx_r979 = i0.ɵɵnextContext(); return ctx_r979.onShowMode(); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r934 = i0.ɵɵnextContext();
    i0.ɵɵproperty("detailView", ctx_r934.detailView);
} }
var OnboardingCreateComponent = /** @class */ (function () {
    function OnboardingCreateComponent(fb, service, route, router, dialog) {
        var _this = this;
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
        this.fieldWidth = fieldWidth;
        this.submitLabel = 'Envoyer ma fiche';
        this.resumeLabel = 'Reprendre plus tard';
        this.service._currentOnboarding.subscribe(function (onboarding) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.onCreateDynamicForm();
                        this.isSelected = true;
                        if (!onboarding) return [3 /*break*/, 2];
                        this.form.patchValue({
                            TemplateId: onboarding.TemplateId
                        });
                        return [4 /*yield*/, this.onSelect(onboarding.TemplateId, onboarding)];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 2:
                        this.templateId = this.route.snapshot.paramMap.get("templateId");
                        this.form.patchValue({
                            TemplateId: this.templateId
                        });
                        return [4 /*yield*/, this.onSelect(this.templateId, null)];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        }); });
    }
    OnboardingCreateComponent.prototype.isObject = function (obj) {
        return obj !== undefined && obj !== null && obj.constructor == Object;
    };
    OnboardingCreateComponent.prototype.canDeactivate = function () {
        if (!this.canExit) {
            this.dialog.open(ExitConfirmComponent, {
                data: ''
            });
            return this.service.canExit$;
        }
        return true;
    };
    OnboardingCreateComponent.prototype.onScroll = function (event) {
        var sections = document.querySelectorAll("section");
        var navLi = document.querySelectorAll(".fields ul li");
        var current = "";
        sections.forEach(function (section) {
            var sectionTop = section.offsetTop;
            if (event.target.scrollTop > sectionTop - 200) {
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
    OnboardingCreateComponent.prototype.ngOnInit = function () {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        this.templateId = this.route.snapshot.paramMap.get("templateId");
                        this.onboardingId = this.onboardingId !== "0" ? this.onboardingId : this.route.snapshot.paramMap.get("onboardingId");
                        if (!(this.onboardingId && this.onboardingId !== "0")) return [3 /*break*/, 2];
                        this.showMode = true;
                        _b = this;
                        return [4 /*yield*/, this.service.getOnboarding(this.onboardingId)];
                    case 1:
                        _b.currentOnboarding = _c.sent();
                        this.form.patchValue(this.currentOnboarding);
                        this.categories = this.currentOnboarding.categories;
                        this.onLoadViewDetail(this.categories);
                        this.currentTemplate = (_a = this.currentOnboarding) === null || _a === void 0 ? void 0 : _a.vtemplates[0];
                        if (this.currentOnboarding.TemplateId) {
                            this.isSelected = true;
                        }
                        _c.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    OnboardingCreateComponent.prototype.onLoadViewDetail = function (categories) {
        var _a, _b, _c, _d, _e, _f;
        var user = {};
        var displayUser = ["Salutation", "Type_de_profil_Nowboard__c", "Acc_s_au_portail_client_NowBoard__c", "Langue_maternelle__c"];
        var categoriesView = categories.map(function (category) {
            var name = category.name, expandOnboarding = category.expandOnboarding;
            var categoryForm = [];
            var fieldCompleted = 0;
            var fieldLength = 0;
            if (category.forms) {
                categoryForm = category.forms.map(function (form) {
                    var _a, _b;
                    if (form.isMandatory) {
                        fieldLength += 1;
                    }
                    if (form.isMandatory && !!form.value) {
                        fieldCompleted += 1;
                    }
                    var newsubforms = {
                        label: form.label,
                        value: form.type === "checkbox_multiple" ? form.defaultValue.filter(function (v) { return v.checked; }).map(function (m) { return m.value; }) : form.type !== "tel" ? form.value : (_b = (_a = form) === null || _a === void 0 ? void 0 : _a.value) === null || _b === void 0 ? void 0 : _b.internationalNumber,
                        key: form.key
                    };
                    if (category.name === "Utilisateur") {
                        user[form.key] = form.value;
                    }
                    var subForm = [];
                    if (form.forms) {
                        subForm = form.forms.map(function (subForm) {
                            var _a, _b;
                            if (subForm.isMandatory) {
                                fieldLength += 1;
                            }
                            if (subForm.isMandatory && !!subForm.value) {
                                fieldCompleted += 1;
                            }
                            var childforms = {
                                label: subForm.label,
                                value: form.type === "checkbox_multiple" ? form.defaultValue.filter(function (v) { return v.checked; }).map(function (m) { return m.value; }) : subForm.type !== "tel" ? subForm.value : ((_b = (_a = subForm) === null || _a === void 0 ? void 0 : _a.value) === null || _b === void 0 ? void 0 : _b.internationalNumber) || '',
                                key: subForm.key
                            };
                            var child2 = [];
                            if (subForm.forms) {
                                child2 = subForm.forms.map(function (c2) {
                                    var _a, _b;
                                    if (c2.isMandatory) {
                                        fieldLength += 1;
                                    }
                                    if (c2.isMandatory && !!c2.value) {
                                        fieldCompleted += 1;
                                    }
                                    return {
                                        label: c2.label,
                                        value: form.type === "checkbox_multiple" ? form.defaultValue.filter(function (v) { return v.checked; }).map(function (m) { return m.value; }) : c2.type !== "tel" ? c2.value : ((_b = (_a = c2) === null || _a === void 0 ? void 0 : _a.value) === null || _b === void 0 ? void 0 : _b.internationalNumber) || '',
                                        key: c2.key
                                    };
                                });
                                return __assign(__assign({}, childforms), { expandOnboarding: subForm.expandOnboarding, forms: child2, key: form.key });
                            }
                            else {
                                return childforms;
                            }
                        });
                        return __assign(__assign({}, newsubforms), { expandOnboarding: form.expandOnboarding, forms: subForm, key: form.key });
                    }
                    else {
                        return newsubforms;
                    }
                });
            }
            return {
                name: name, expandOnboarding: expandOnboarding,
                forms: categoryForm,
                key: category.key,
                fieldCompleted: fieldCompleted,
                fieldLength: fieldLength
            };
        });
        var index = categoriesView.findIndex(function (cat) { return cat.name === "Utilisateur"; });
        if (index !== -1) {
            categoriesView[index].forms = categoriesView[index].forms.filter(function (form) { return displayUser.includes(form.key); });
        }
        this.detailView = {
            Finished: (_a = this.currentOnboarding) === null || _a === void 0 ? void 0 : _a.Finished,
            categories: categoriesView,
            // view: this.currentOnboarding.view,
            tickets: (_b = this.currentOnboarding) === null || _b === void 0 ? void 0 : _b.vtickets,
            createdAt: ((_c = this.currentOnboarding) === null || _c === void 0 ? void 0 : _c.createdAt) || new Date().toISOString(),
            user: user,
            Name: ((_e = (_d = this.currentOnboarding) === null || _d === void 0 ? void 0 : _d.vtemplates[0]) === null || _e === void 0 ? void 0 : _e.Name) || ((_f = this.currentTemplate) === null || _f === void 0 ? void 0 : _f.Name)
        };
        console.log('detailView--------', this.detailView);
    };
    OnboardingCreateComponent.prototype.onCreateDynamicForm = function () {
        this.form = this.fb.group({
            TemplateId: [0, Validators.required]
        });
    };
    OnboardingCreateComponent.prototype.catNameStart = function (str) {
        var vowels = ['a', 'e', 'i', 'o', 'u', 'y'];
        return vowels.includes(str.substr(0, 1).toLocaleLowerCase());
    };
    OnboardingCreateComponent.prototype.onSelect = function (id, onboarding) {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!id) return [3 /*break*/, 2];
                        _a = this;
                        return [4 /*yield*/, this.service.getProfil(id)];
                    case 1:
                        _a.currentTemplate = _b.sent();
                        this.categories = onboarding ? onboarding.categories : this.currentTemplate.categories
                            .filter(function (cat) { return cat.expandOnboarding; })
                            .map(function (cat) {
                            if (cat.forms) {
                                var f = cat.forms
                                    .filter(function (form) { return form.expandOnboarding; })
                                    .map(function (sub) {
                                    if (sub.forms) {
                                        var s = sub.forms.filter(function (child) {
                                            if (child.forms) {
                                                var c = child.forms.filter(function (ch) { return ch.expandOnboarding; });
                                                return __assign(__assign({}, child), { forms: c });
                                            }
                                            return child;
                                        });
                                        return __assign(__assign({}, sub), { forms: s });
                                    }
                                    return sub;
                                });
                                return __assign(__assign({}, cat), { forms: f });
                            }
                            return cat;
                        });
                        _b.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    OnboardingCreateComponent.prototype.existSubForm = function (forms) {
        var e_1, _a;
        var exist = false;
        if (forms) {
            try {
                for (var forms_1 = __values(forms), forms_1_1 = forms_1.next(); !forms_1_1.done; forms_1_1 = forms_1.next()) {
                    var sub = forms_1_1.value;
                    if (sub.forms) {
                        exist = true;
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (forms_1_1 && !forms_1_1.done && (_a = forms_1.return)) _a.call(forms_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
        return exist;
    };
    OnboardingCreateComponent.prototype.scrollToFirstInvalidControl = function () {
        var form = document.getElementById('form');
        var firstInvalidControl = form.getElementsByClassName('ng-invalid')[0];
        firstInvalidControl.scrollIntoView({ behavior: 'smooth', block: 'center' });
        firstInvalidControl.focus();
    };
    OnboardingCreateComponent.prototype.onChangeCategory = function () {
        var checkMandatory = function (field) { return !!field.value && field.isMandatory && (field.type !== "checkbox_multiple" || field.type !== 'checkbox') || !field.isMandatory || field.type === "checkbox_multiple" || field.type === 'checkbox' || field.type === 'toggle'; };
        return this.categories.every(function (cat) { return cat.forms.every(function (field) {
            if (field.forms) {
                if (field.value) {
                    return field.forms.every(function (form) {
                        if (form.forms) {
                            return form.forms.every(function (child) {
                                return checkMandatory(child);
                            });
                        }
                        return checkMandatory(form);
                    });
                }
                return true;
            }
            return checkMandatory(field);
        }); });
    };
    OnboardingCreateComponent.prototype.onSubmit = function (submit) {
        if (submit === void 0) { submit = false; }
        var _a, _b, _c, _d, _e, _f, _g, _h;
        return __awaiter(this, void 0, void 0, function () {
            var user, userData_1, result, _j, resultContact;
            return __generator(this, function (_k) {
                switch (_k.label) {
                    case 0:
                        if (!(this.form.valid && this.onChangeCategory() && submit || !submit)) return [3 /*break*/, 11];
                        this.isSubmitted = submit;
                        user = this.categories.find(function (cat) { return cat.name === "Utilisateur"; });
                        userData_1 = {};
                        (_b = (_a = user) === null || _a === void 0 ? void 0 : _a.forms) === null || _b === void 0 ? void 0 : _b.map(function (form) {
                            userData_1[form.key] = form.value;
                        });
                        this.loading = true;
                        this.submitLabel = "Chargement...";
                        if (!(this.onboardingId && this.onboardingId !== "0")) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.service.updateOnboarding(__assign(__assign({}, this.form.value), { user: userData_1, categories: this.categories, Finished: submit, _id: this.onboardingId, tickets: (_d = (_c = this.currentOnboarding) === null || _c === void 0 ? void 0 : _c.vtickets) === null || _d === void 0 ? void 0 : _d.map(function (ticket) { return ticket.Id; }) }))];
                    case 1:
                        _j = _k.sent();
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, this.service.createOnboarding(__assign(__assign({}, this.form.value), { user: userData_1, categories: this.categories, Finished: submit }))];
                    case 3:
                        _j = _k.sent();
                        _k.label = 4;
                    case 4:
                        result = _j;
                        if (!result) return [3 /*break*/, 9];
                        if (this.onboardingId && this.onboardingId !== "0") {
                            this.categories = result.categories;
                            this.currentOnboarding = result;
                        }
                        return [4 /*yield*/, this.service.getAllProfil()];
                    case 5:
                        _k.sent();
                        this.onboardingId = result._id;
                        this.loading = false;
                        this.submitLabel = "Envoyer ma fiche";
                        this.canExit = true;
                        this.showMode = true;
                        if (!submit) return [3 /*break*/, 7];
                        return [4 /*yield*/, this.service.createContact(__assign(__assign({}, userData_1), { A_quitt_la_soci_t__c: "false", Phone: (_f = (_e = userData_1) === null || _e === void 0 ? void 0 : _e.Phone) === null || _f === void 0 ? void 0 : _f.e164Number, MobilePhone: (_h = (_g = userData_1) === null || _g === void 0 ? void 0 : _g.MobilePhone) === null || _h === void 0 ? void 0 : _h.e164Number }))];
                    case 6:
                        resultContact = _k.sent();
                        console.log("---------------resultContact--------------", resultContact);
                        this.router.navigate(["" + this.checkOnboardingPath(), result.TemplateId, result._id]);
                        this.ngOnInit();
                        this.onCreateConfirm();
                        return [3 /*break*/, 8];
                    case 7:
                        this.router.navigate(["" + this.checkOnboardingPath(), result.TemplateId, result._id]);
                        _k.label = 8;
                    case 8: return [3 /*break*/, 10];
                    case 9:
                        console.log("errror......");
                        this.loading = false;
                        this.submitLabel = "Envoyer ma fiche";
                        _k.label = 10;
                    case 10: return [3 /*break*/, 12];
                    case 11:
                        this.scrollToFirstInvalidControl();
                        _k.label = 12;
                    case 12: return [2 /*return*/];
                }
            });
        });
    };
    OnboardingCreateComponent.prototype.checkOnboardingPath = function () {
        return this.service.mainPath.includes('onboarding') ? this.service.mainPath + "/requests/" : "/onboarding/requests/";
    };
    // async onResumeLater() {
    //   this.loading = true;
    //   this.resumeLabel = "Chargement..."
    //   const result =
    //     this.onboardingId && this.onboardingId !== "0"
    //       ? await this.service.updateOnboarding({
    //         ...this.form.value,
    //         categories: this.categories,
    //         Finished: true,
    //         _id: this.onboardingId,
    //         tickets: this.currentOnboarding?.vtickets?.map((ticket) => ticket.Id)
    //       })
    //       : await this.service.createOnboarding({
    //         ...this.form.value,
    //         categories: this.categories,
    //         Finished: false,
    //       });
    //   if (result) {
    //     if (this.onboardingId && this.onboardingId !== "0") {
    //       this.categories = result.categories;
    //       this.currentOnboarding = result;
    //     }
    //     await this.service.getAllProfil();
    //     this.loading = false;
    //     this.canExit = true;
    //     this.showMode = true;
    //     this.resumeLabel = "Reprendre plus tard"
    //     this.router.navigate([this.service.mainPath + '/requests']);
    //   } else {
    //     console.log("errror......");
    //     this.loading = false;
    //     this.resumeLabel = "Reprendre plus tard"
    //   }
    // }
    OnboardingCreateComponent.prototype.ingoreDefaultAction = function (e) {
        e.preventDefault();
    };
    OnboardingCreateComponent.prototype.onCheckConditionLocationValue = function (iscondition, condition) {
        var _a;
        if (!iscondition || !((_a = condition) === null || _a === void 0 ? void 0 : _a.location)) {
            return true;
        }
        var _b = condition.location, s0Index = _b.s0Index, rest = __rest(_b, ["s0Index"]);
        var currentData = this.categories[s0Index];
        for (var key in rest) {
            if (currentData.forms[rest[key]]) {
                currentData = currentData.forms[rest[key]];
            }
        }
        return currentData.defaultValue ? currentData.value === condition.value : !!currentData.value;
        // if (location.level === 1) {
        //   if (this.categories[location.s0Index].forms[location.s1Index].type === 'checkbox_multiple') {
        //     const array = this.categories[location.s0Index].forms[location.s1Index].defaultValue.filter((check) => check.checked)
        //     let checked = false;
        //     for (var i = 0; i < array.length; i++) {
        //       if (array[i].value === conditionValue) {
        //         checked = true;
        //         break;
        //       }
        //     }
        //     return checked;
        //   } else {
        //     return this.categories[location.s0Index].forms[location.s1Index].value === conditionValue
        //   }
        // } else if (location.level === 2) {
        //   if (this.categories[location.s0Index].forms[location.s1Index].forms[location.s2Index].type === 'checkbox_multiple') {
        //     const array = this.categories[location.s0Index].forms[location.s1Index].forms[location.s2Index].defaultValue.filter((check) => check.checked)
        //     let checked = false;
        //     for (var i = 0; i < array.length; i++) {
        //       if (array[i].value == conditionValue) {
        //         checked = true;
        //         break;
        //       }
        //     }
        //     return checked;
        //   } else {
        //     return this.categories[location.s0Index].forms[location.s1Index].forms[location.s2Index].value === conditionValue
        //   }
        // } else if (location.level === 3) {
        //   if (this.categories[location.s0Index].forms[location.s1Index].forms[location.s3Index].forms[location.s4Index].type === 'checkbox_multiple') {
        //     const array = this.categories[location.s0Index].forms[location.s1Index].forms[location.s3Index].forms[location.s4Index].defaultValue.filter((check) => check.checked)
        //     let checked = false;
        //     for (var i = 0; i < array.length; i++) {
        //       if (array[i].value == conditionValue) {
        //         checked = true;
        //         break;
        //       }
        //     }
        //     return checked;
        //   } else {
        //     return this.categories[location.s0Index].forms[location.s1Index].forms[location.s3Index].forms[location.s4Index].value === conditionValue
        //   }
        // } else {
        //   return true
        // }
    };
    OnboardingCreateComponent.prototype.checkSubForm = function (forms) {
        var e_2, _a;
        var hasSubForm = false;
        try {
            for (var forms_2 = __values(forms), forms_2_1 = forms_2.next(); !forms_2_1.done; forms_2_1 = forms_2.next()) {
                var form = forms_2_1.value;
                if (form.forms && form.forms.length > 0) {
                    hasSubForm = true;
                    break;
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (forms_2_1 && !forms_2_1.done && (_a = forms_2.return)) _a.call(forms_2);
            }
            finally { if (e_2) throw e_2.error; }
        }
        return hasSubForm;
    };
    OnboardingCreateComponent.prototype.onSelectMenu = function (i) {
        var _this = this;
        this.selectedMenu = i;
        this.selectedCategoryIndex = i;
        setTimeout(function () {
            _this.selectedCategoryIndex = null;
        }, 2000);
    };
    OnboardingCreateComponent.prototype.onCheckValue = function (event) {
        this.invalideValue = event;
    };
    OnboardingCreateComponent.prototype.onLink = function (e) {
        e.preventDefault();
    };
    OnboardingCreateComponent.prototype.onShowMode = function () {
        this.showMode = !this.showMode;
        this.onLoadViewDetail(this.categories);
    };
    OnboardingCreateComponent.prototype.onCreateConfirm = function () {
        var _this = this;
        var dialogRef = this.dialog.open(DialogConfirmation, {
            data: {
                message: "Le profil de " + this.detailView.user.FirstName + " " + this.detailView.user.LastName + " a \u00E9t\u00E9 bien cr\u00E9e",
                confirmText: 'Télécharger le PDF récapitulatif',
                cancelText: 'Fermer'
            }
        });
        dialogRef.afterClosed().subscribe(function (current) { return __awaiter(_this, void 0, void 0, function () {
            var attach;
            var _a, _b, _c, _d, _e;
            return __generator(this, function (_f) {
                switch (_f.label) {
                    case 0:
                        attach = ((_a = this.detailView) === null || _a === void 0 ? void 0 : _a.vtickets) && ((_c = (_b = this.detailView) === null || _b === void 0 ? void 0 : _b.vtickets[0]) === null || _c === void 0 ? void 0 : _c.vattachment) ? (_e = (_d = this.detailView) === null || _d === void 0 ? void 0 : _d.vtickets[0]) === null || _e === void 0 ? void 0 : _e.vattachment[0] : null;
                        if (!(current && attach)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.service.downloadAttachment(attach.Url, attach.ContentType, attach.Url.split('/').join('-'))];
                    case 1:
                        _f.sent();
                        _f.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        }); });
    };
    OnboardingCreateComponent.ɵfac = function OnboardingCreateComponent_Factory(t) { return new (t || OnboardingCreateComponent)(i0.ɵɵdirectiveInject(i1.FormBuilder), i0.ɵɵdirectiveInject(i2.OnboardingService), i0.ɵɵdirectiveInject(i3.ActivatedRoute), i0.ɵɵdirectiveInject(i3.Router), i0.ɵɵdirectiveInject(i4.MatDialog)); };
    OnboardingCreateComponent.ɵcmp = i0.ɵɵdefineComponent({ type: OnboardingCreateComponent, selectors: [["create-onboarding"]], hostBindings: function OnboardingCreateComponent_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("scroll", function OnboardingCreateComponent_scroll_HostBindingHandler($event) { return ctx.onScroll($event); });
        } }, decls: 4, vars: 2, consts: [[1, "content"], ["id", "form", 3, "formGroup", "submit", 4, "ngIf"], [3, "detailView", "onShowMode", 4, "ngIf"], ["id", "form", 3, "formGroup", "submit"], [1, "category"], [1, "title-group"], [2, "margin-left", "20px", "cursor", "pointer", 3, "click"], ["mat-button", "", "type", "button", 1, "register-button", 3, "disabled", "click"], [4, "ngIf"], ["id", "fields", 1, "fields"], ["class", "menu-item", 3, "ngxScrollTo", "id", 4, "ngFor", "ngForOf"], [1, "category-container", 3, "scroll"], ["class", "category-item content-item", 3, "id", 4, "ngFor", "ngForOf"], [1, "onboarding-create-footer"], [1, "actions-button", 2, "margin-bottom", "50px", "display", "flex"], ["mat-button", "", "type", "submit", 1, "register-button", "send-form", 3, "disabled"], ["mat-button", "", "type", "button", 1, "register-button", "resume", 3, "disabled", "click"], [2, "background-color", "transparent"], [2, "height", "450px"], [1, "menu-item", 3, "ngxScrollTo", "id"], [1, "category-item", "content-item", 3, "id"], [1, "field-content"], [1, "field-item"], [1, "category-title-group"], [1, "category-name"], [1, "category-container"], ["class", "field-category", 3, "id", "width", 4, "ngFor", "ngForOf"], [1, "field-category", 3, "id"], ["class", "inner-loop", 4, "ngIf"], [1, "inner-loop"], [1, "fields-content"], [1, "fields-container"], [3, "field", "length", "i", "j"], [1, "child"], ["class", "inner-child", 4, "ngIf"], [1, "inner-child"], ["class", "inner-child-content", 3, "id", "width", 4, "ngFor", "ngForOf"], [1, "inner-child-content", 3, "id"], [3, "field", "length", "i", "j", "onCheckValue"], [3, "detailView", "onShowMode"]], template: function OnboardingCreateComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "main");
            i0.ɵɵelementStart(1, "div", 0);
            i0.ɵɵtemplate(2, OnboardingCreateComponent_form_2_Template, 25, 13, "form", 1);
            i0.ɵɵtemplate(3, OnboardingCreateComponent_lib_onboarding_detail_3_Template, 1, 1, "lib-onboarding-detail", 2);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", !ctx.showMode);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.showMode);
        } }, directives: [i5.NgIf, i1.ɵangular_packages_forms_forms_y, i1.NgControlStatusGroup, i1.FormGroupDirective, i6.MatIcon, i7.MatButton, i5.NgForOf, i8.LoadingPageComponent, i9.ScrollToDirective, i10.SubOnboardingCreateComponent, i11.OnboardingDetailComponent], styles: ["main[_ngcontent-%COMP%]{background:no-repeat padding-box #f4f7f9;height:100vh;width:100%;display:flex;flex-direction:column;align-items:center}main[_ngcontent-%COMP%]   .disabled[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{background-color:transparent!important}main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{width:96%;height:100%;padding-left:2%;padding-right:2%}main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font:bold 32px/30px Nexa Text;letter-spacing:0;color:#171f26;padding-top:20px}main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font:20px/26px Nexa Text;letter-spacing:0;color:#171f26}main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   p.sub-title[_ngcontent-%COMP%]{max-width:400px}main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .select-contact[_ngcontent-%COMP%]{max-width:70%;margin:5% auto auto;background:no-repeat padding-box #fff;border:1px solid #dce4e9;border-radius:6px;padding:5%}main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .select-contact[_ngcontent-%COMP%]   .select-template[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;justify-content:space-between;margin-top:50px}main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .select-contact[_ngcontent-%COMP%]   .select-template[_ngcontent-%COMP%]   .full-width[_ngcontent-%COMP%]{width:40%}main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .select-contact[_ngcontent-%COMP%]   .select-template[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{float:right;text-align:center;border:1px solid #543cb6;border-radius:7px;padding:1em 2em;display:flex;align-items:center;background-color:transparent;font:bold 15px/17px Nexa;letter-spacing:0;color:#543cb6;-ms-grid-row-align:center;align-self:center;width:220px}main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .category[_ngcontent-%COMP%]   .onboarding-mat-stepper[_ngcontent-%COMP%]   mat-horizontal-stepper[_ngcontent-%COMP%]   .next-step[_ngcontent-%COMP%]{float:right}main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{display:flex;height:100%;width:100%;max-width:1500px;margin:auto;overflow:hidden}main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .select-contact[_ngcontent-%COMP%]{max-width:70%;margin:5% auto auto;background:no-repeat padding-box #fff;border:1px solid #dce4e9;border-radius:6px;padding:5%}main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .select-contact[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{float:right;text-align:center;border:1px solid #543cb6;border-radius:7px;padding:.7em 2em .5em;display:flex;align-items:center;background-color:transparent;font:bold 15px/17px Nexa;letter-spacing:0;color:#543cb6;align-self:flex-end}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]{width:786px;background:no-repeat padding-box #fff;border:1px solid #dce4e9;border-radius:6px;opacity:1;margin:auto;padding:0 25px;-ms-grid-row-align:center;align-self:center}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{text-align:center;font:900 32px/48px Nexa;letter-spacing:0;color:#171f26}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font:18px/24px Nexa Text;letter-spacing:0;color:#171f26}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .profil-name-content[_ngcontent-%COMP%]{display:flex;align-items:center;position:relative}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .profil-name-content[_ngcontent-%COMP%]   .add-picto[_ngcontent-%COMP%]{margin-right:15px;min-width:50px;width:30px;padding:9px 12px}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .profil-name-content[_ngcontent-%COMP%]   .add-picto[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin-right:10px}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .profil-name-content[_ngcontent-%COMP%]   .list-picto[_ngcontent-%COMP%]{position:absolute;height:200px;width:100%;background:no-repeat padding-box #fff;border:1px solid #171f26;border-radius:8px;top:100%;z-index:1}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .profil-name-content[_ngcontent-%COMP%]   .list-picto[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin:15px;border:none;font-size:40px}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .profil-name-content[_ngcontent-%COMP%]   .list-picto[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]:hover{color:#830b6b!important;cursor:pointer}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .box-title-content[_ngcontent-%COMP%]{width:100%;margin:25px auto}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font:900 32px/38px Nexa;letter-spacing:0;color:#171f26}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font:15px/26px Nexa Text;letter-spacing:0;color:#171f26;text-align:center}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .link-create-profil[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:center}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{text-align:center;border:1px solid #543cb6;border-radius:7px;padding:.7em 2em .5em;display:flex;align-items:center;background-color:transparent;font:bold 15px/17px Nexa;letter-spacing:0;color:#543cb6}main[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:space-between}.expand-button[_ngcontent-%COMP%]{color:#5a607f!important;background-color:transparent!important;box-shadow:none!important}.full-width[_ngcontent-%COMP%]{width:100%}.field-action[_ngcontent-%COMP%]{width:10%}.field-size[_ngcontent-%COMP%]{width:90%;margin:auto 2% auto auto}  .mat-form-field-appearance-fill .mat-form-field-flex{background-color:#fff}  .mat-select{padding:0}  .mat-form-field-appearance-fill .mat-form-field-underline::before{background-color:transparent}[_nghost-%COMP%]     .mat-checkbox-checked.mat-accent .mat-checkbox-background, [_nghost-%COMP%]     .mat-checkbox-indeterminate.mat-accent .mat-checkbox-background{background-color:transparent}.category-action[_ngcontent-%COMP%]{display:flex;width:100%;overflow:hidden}.delete-field[_ngcontent-%COMP%]{margin:auto 2%}.radio-group[_ngcontent-%COMP%]   .mat-radio-button[_ngcontent-%COMP%]{margin-right:10px}.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary[_ngcontent-%COMP%]{background-color:#3f51b5;color:#fff;min-height:20px;font-size:10px}.move-icons[_ngcontent-%COMP%]{cursor:move}.category-item[_ngcontent-%COMP%], .cdk-drag-placeholder[_ngcontent-%COMP%]{display:flex;align-items:baseline;width:100%;border:1px solid #dce4e9;border-radius:8px;background-color:#fff;margin-top:10px;padding:15px}.category-item[_ngcontent-%COMP%]   .left-action[_ngcontent-%COMP%], .cdk-drag-placeholder[_ngcontent-%COMP%]   .left-action[_ngcontent-%COMP%]{height:auto;background-color:#49a094;padding-top:7px;width:40px;-ms-grid-row-align:stretch;align-self:stretch;border-top-left-radius:8px;border-bottom-left-radius:8px}.category-item[_ngcontent-%COMP%]   .left-action[_ngcontent-%COMP%]   .transparent-button[_ngcontent-%COMP%], .cdk-drag-placeholder[_ngcontent-%COMP%]   .left-action[_ngcontent-%COMP%]   .transparent-button[_ngcontent-%COMP%]{background-color:transparent;box-shadow:none;width:40px;padding:0;margin:0;min-width:auto;color:#fff}.category-item[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%], .cdk-drag-placeholder[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%]{width:100%}.category-item[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%], .cdk-drag-placeholder[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]{display:-ms-grid;display:grid;-ms-grid-columns:1fr 1fr 1fr;grid-template-columns:1fr 1fr 1fr;align-items:center;border:transparent!important}.category-item[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]   .category-title-group[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .cdk-drag-placeholder[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]   .category-title-group[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-family:Nexa;font-style:normal;font-weight:250;font-size:14px;line-height:16px;color:#575f6e}.category-item[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]   .category-title-group[_ngcontent-%COMP%]   .category-name[_ngcontent-%COMP%], .cdk-drag-placeholder[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]   .category-title-group[_ngcontent-%COMP%]   .category-name[_ngcontent-%COMP%]{text-align:left;font:bold 22px/48px Nexa Text;letter-spacing:0;color:#171f26;margin:0}.category-item[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]   .mat-form-field-wrapper[_ngcontent-%COMP%]   .mat-form-field-flex[_ngcontent-%COMP%]   .mat-form-field-outline[_ngcontent-%COMP%], .category-item[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%]   .mat-form-field-outline[_ngcontent-%COMP%], .cdk-drag-placeholder[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]   .mat-form-field-wrapper[_ngcontent-%COMP%]   .mat-form-field-flex[_ngcontent-%COMP%]   .mat-form-field-outline[_ngcontent-%COMP%], .cdk-drag-placeholder[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%]   .mat-form-field-outline[_ngcontent-%COMP%]{color:transparent!important}.cdk-drag-preview[_ngcontent-%COMP%]{box-sizing:border-box;border-radius:4px;opacity:1}.cdk-drag-preview[_ngcontent-%COMP%]   .expand-button[_ngcontent-%COMP%]{color:#5a607f!important;background-color:transparent!important;box-shadow:none!important;margin-right:28px!important}.cdk-drag-placeholder[_ngcontent-%COMP%]{opacity:0}.cdk-drag-animating[_ngcontent-%COMP%], .example-list.cdk-drop-list-dragging[_ngcontent-%COMP%]   .category-item[_ngcontent-%COMP%]:not(.cdk-drag-placeholder){transition:transform 250ms cubic-bezier(0,0,.2,1)}.child[_ngcontent-%COMP%]{margin-left:0}.child[_ngcontent-%COMP%]   .inner-child[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap}.category[_ngcontent-%COMP%]{width:100%}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]{width:250px;background-color:#fff;margin:10px 20px;border-radius:5px;border:1px solid #dbcbcb96}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:15px;border-bottom:1px solid #dbcbcb96;margin:10px;padding-bottom:5px;padding-top:0;font-family:\"Nexa Text\";display:flex;flex-direction:column;justify-content:space-between;align-items:flex-start}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-weight:600;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;margin-top:-5px}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin-left:15px;cursor:pointer}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   h3.template-title[_ngcontent-%COMP%]{font:900 24px/36px Nexa Text;letter-spacing:0;color:#171f26}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]{font-weight:600;margin-left:-27px;font-size:15px;list-style:none}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:5px;margin:5px auto;cursor:pointer;text-align:left;font:12px/19px Nexa Text;letter-spacing:0;color:#535760}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]{padding-left:0;margin-left:0}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.li-title[_ngcontent-%COMP%]{font-size:14px;font-weight:600;margin-right:10px}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.li-title[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:140px;outline:0;border:1px dashed grey}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.li-title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:inline-flex;align-items:center;width:100%}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.li-title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin-left:10px}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.li-title.active[_ngcontent-%COMP%], .category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.li-title[_ngcontent-%COMP%]:hover{background:no-repeat padding-box #e5e8ee;border-radius:5px}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.sub-title[_ngcontent-%COMP%]{list-style:none;padding-left:20px}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.sub-title.active[_ngcontent-%COMP%], .category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.sub-title.active[_ngcontent-%COMP%]::marker, .category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.sub-title[_ngcontent-%COMP%]:hover{font-weight:600;background:no-repeat padding-box #e5e8ee;border-radius:5px}.category[_ngcontent-%COMP%]   .disabled[_ngcontent-%COMP%]{background-color:#f4f7f9!important}.category[_ngcontent-%COMP%]   .expand-button[_ngcontent-%COMP%]{color:#5a607f!important;background-color:transparent!important;box-shadow:none!important;margin-right:28px!important}.category[_ngcontent-%COMP%]   .expand-button[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%]{font-size:40px}.category[_ngcontent-%COMP%]   .transparent-button[_ngcontent-%COMP%]{background-color:transparent;box-shadow:none;width:40px;padding:0;margin:0;margin-left:0!important;min-width:auto;color:#fff}.category[_ngcontent-%COMP%]   .title-group[_ngcontent-%COMP%]{display:flex;justify-content:space-between;margin-top:10px}.category[_ngcontent-%COMP%]   .title-group[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0 0 8px;display:flex;align-items:center}.add-button-sub-category[_ngcontent-%COMP%]{width:95.5%!important;margin-bottom:22px;margin-left:22px}.add-button-container[_ngcontent-%COMP%]{background:no-repeat padding-box #fff;border:1px dashed #dce4e9;border-radius:8px;margin-top:10px;padding:10px;display:flex;justify-content:center;align-items:center;width:98.5%;margin-bottom:22px}.add-button-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{display:flex;align-items:center;background-color:transparent;border:none;cursor:pointer;font:17px/26px Nexa Text;letter-spacing:0;color:#c2c8d5;box-shadow:none}.add-category[_ngcontent-%COMP%]{border:1px dashed #c2c8d5;border-radius:5px;margin-left:10px;margin-bottom:10px;font:bold 12px/19px Nexa Text;letter-spacing:0;color:#c2c8d5;width:92%}.inner-loop[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]{display:flex;height:100%;margin:0;width:98%;margin-top:10px;margin-bottom:10px}.inner-loop[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]   .button-action[_ngcontent-%COMP%]{background-color:#6fe8d7;-ms-grid-row-align:stretch;align-self:stretch;margin-top:0;margin-left:20px;border-bottom-left-radius:8px;border-top-left-radius:8px}.inner-loop[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]   .button-action[_ngcontent-%COMP%]   .transparent-button[_ngcontent-%COMP%]{background-color:transparent;box-shadow:none;width:40px;padding:0;margin:0;min-width:auto;color:#fff}.inner-loop[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]   .child-2-background[_ngcontent-%COMP%]{background-color:#cffaf4!important}.inner-loop[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]   .child-3-background[_ngcontent-%COMP%]{background-color:#e5e8ee!important}.inner-loop[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]   .fields-container[_ngcontent-%COMP%]{width:100%;padding-right:10px;padding-top:5px}.inner-loop[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]   .fields-container[_ngcontent-%COMP%]   lib-sub-category[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;width:100%}.inner-loop[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]   .fields-container[_ngcontent-%COMP%]   lib-sub-category[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]   .button-action[_ngcontent-%COMP%]{background-color:#6fe8d7;height:100%;margin:auto 15px auto auto;display:flex}.inner-loop[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]   .fields-container[_ngcontent-%COMP%]   lib-sub-category[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]   .button-action[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{box-shadow:none;background-color:transparent;color:#fff}.side-bar[_ngcontent-%COMP%]{display:flex;flex-direction:column}.register-button[_ngcontent-%COMP%]{background:0 0;border:2px solid #192128!important;border-radius:8px;margin-left:22px!important;color:#000;padding:10px!important}.register-button[disabled][disabled][_ngcontent-%COMP%]{opacity:.5!important;background:no-repeat padding-box #dadee2!important}.content-item[_ngcontent-%COMP%]{transition-property:border-image-slice border-image-source border-width;transition-timing-function:ease-in-out;transition-duration:.5s}.active-content[_ngcontent-%COMP%]{border-image-slice:1;border-width:2px;border-image-source:linear-gradient(to left,#9d107d,#4862ab)}  .phone-input-view-collab{border-bottom:1px solid #949494!important;padding-bottom:.3em;padding-top:1em;display:block!important;max-width:100%;font:14px/20px \"Nexa Text\"!important;width:95%}  .country-dropdown{min-width:unset!important}  .iti{width:100%!important}  #phone{width:90%!important}  #mobile-phone{width:100%}  .fields{max-height:100vh;margin-right:.5%;overflow:hidden;width:100%}  .fields mat-tab-group{height:100%;width:100%;overflow:hidden}  .fields mat-tab-group .mat-tab-body-wrapper{height:100%;max-height:90vh;overflow:auto}  .fields mat-tab-group .mat-tab-body-wrapper .mat-tab-body{height:100%}  .fields mat-tab-group .mat-tab-body-wrapper .mat-tab-body .mat-tab-body-content{width:100%;overflow:hidden}.fields[_ngcontent-%COMP%]{height:95%}.fields[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style:none;display:flex;margin:0;padding:0;overflow:auto}.fields[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin-right:20px;padding-bottom:5px;border-bottom:3px solid transparent}.fields[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none;font-family:Nexa;font-style:normal;font-weight:700;font-size:14px;line-height:120%;color:#171f26;opacity:.5;overflow:hidden;display:-webkit-box;-webkit-line-clamp:1;-webkit-box-orient:vertical}.fields[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.menu-item.active[_ngcontent-%COMP%], .fields[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.menu-item[_ngcontent-%COMP%]:hover{cursor:pointer;border-bottom:3px solid #3c4252}.fields[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.menu-item.active[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .fields[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.menu-item[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%]{font-family:Nexa;font-style:normal;font-weight:700;font-size:14px;line-height:120%;opacity:1;text-decoration:none!important}  .category-container{overflow:auto;max-height:100%;display:flex;flex-wrap:wrap;-ms-overflow-style:none;scrollbar-width:none}  .category-container mat-form-field{width:100%}  .category-container .actions-button{margin-top:20px;margin-bottom:50px}  .category-container .actions-button .send-form{margin-left:0!important;background-color:#000;color:#fff;padding:10px!important}  .category-container .actions-button .resume{margin-left:25px!important}  .category-container::-webkit-scrollbar{display:none}  .category-item .mat-radio-button.mat-accent.mat-radio-checked .mat-radio-outer-circle{border-color:#039be5}  .category-item .mat-radio-button.mat-accent .mat-radio-inner-circle,   .category-item .mat-radio-button.mat-accent .mat-radio-ripple .mat-ripple-element:not(.mat-radio-persistent-ripple),   .category-item .mat-radio-button.mat-accent.mat-radio-checked .mat-radio-persistent-ripple,   .category-item .mat-radio-button.mat-accent:active .mat-radio-persistent-ripple{background-color:#039be5}  .category-item .mat-checkbox-checkmark-path{stroke:#fff!important}  .category-item .mat-checkbox-frame{border:2px solid #039be5!important}  .category-item .mat-checkbox-checked.mat-accent .mat-checkbox-background,   .category-item .mat-checkbox-indeterminate.mat-accent .mat-checkbox-background{background-color:#039be5!important}  .category-item .mat-checkbox-inner-container{height:20px!important;width:20px!important}  button .mat-button-wrapper{display:flex;align-items:center;justify-content:center}[_nghost-%COMP%]     .category .mat-slide-toggle.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar{background-color:#039be5;position:relative;width:42px;height:23px;flex-shrink:0;border-radius:14px}[_nghost-%COMP%]     .category .mat-slide-toggle:not(.mat-disabled) .mat-slide-toggle-bar{background-color:#707273;position:relative;width:42px;height:23px;flex-shrink:0;border-radius:14px}[_nghost-%COMP%]     .category .mat-slide-toggle.mat-checked:not(.mat-disabled) .mat-slide-toggle-thumb{background-color:#fff;margin-top:4px}[_nghost-%COMP%]     .category .mat-slide-toggle:not(.mat-disabled) .mat-slide-toggle-thumb{margin-top:4px;margin-left:4px}[_nghost-%COMP%]     .category .mat-slide-toggle.draft:not(.mat-disabled) .mat-slide-toggle-bar{background-color:#707273}[_nghost-%COMP%]     .category .mat-slide-toggle.draft.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar{background-color:#039be5}.onboarding-create-footer[_ngcontent-%COMP%]{display:flex;flex-direction:column}div.page[_ngcontent-%COMP%]{background:#fff;display:block;margin:0 auto .5cm;box-shadow:0 0 .5cm rgba(0,0,0,.5)}div.page[size=A4][_ngcontent-%COMP%]{width:210cm;height:29.7cm}div.page[size=A4][layout=portrait][_ngcontent-%COMP%]{width:29.7cm;height:21cm}@media print{body[_ngcontent-%COMP%], div.page[_ngcontent-%COMP%]{margin:0;box-shadow:0}}"] });
    return OnboardingCreateComponent;
}());
export { OnboardingCreateComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib25ib2FyZGluZy1jcmVhdGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vb25ib2FyZGluZy8iLCJzb3VyY2VzIjpbImxpYi9wYWdlcy9vbmJvYXJkaW5nLWNyZWF0ZS9vbmJvYXJkaW5nLWNyZWF0ZS5jb21wb25lbnQudHMiLCJsaWIvcGFnZXMvb25ib2FyZGluZy1jcmVhdGUvb25ib2FyZGluZy1jcmVhdGUuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ2hFLE9BQU8sRUFBMEIsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFcEUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sb0VBQW9FLENBQUM7QUFDeEcsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sc0RBQXNELENBQUM7QUFHNUYsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDOzs7Ozs7Ozs7Ozs7OztJQ0V2QixtQ0FBcUU7OztJQUtyRSw4QkFFSTtJQUFBLHlCQUFHO0lBQUEsWUFBaUI7SUFBQSxpQkFBSTtJQUM1QixpQkFBSzs7O0lBSEQsc0RBQWlDLGdDQUFBO0lBRTlCLGVBQWlCO0lBQWpCLHdDQUFpQjs7OztJQWlEZ0QsK0JBRUk7SUFBQSwrQkFFSTtJQUFBLCtCQUVJO0lBQUEscURBTUk7SUFEQSw4U0FBcUM7SUFDckMsMEJBRU07SUFDVixpQkFBNEI7SUFDaEMsaUJBQU07SUFDVixpQkFBTTtJQUNWLGlCQUFNOzs7Ozs7OztJQVhVLGVBQVk7SUFBWiwrQkFBWSxpR0FBQSxhQUFBLGFBQUE7OztJQVhoQywrQkFJSTtJQUFBLHVJQUVJO0lBaUJSLGlCQUFNOzs7Ozs7SUFwQkYsb0hBQTRFO0lBRDVFLGdDQUFhO0lBR1QsZUFBNEY7SUFBNUYsNEpBQTRGOzs7SUFQeEcsK0JBRUk7SUFBQSxpSUFJSTtJQW9CUixpQkFBTTs7O0lBdkJF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LElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFBOzt3QkFBdEcsU0FBc0csQ0FBQTs7Ozs7YUFFekcsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztzR0F4ZlUseUJBQXlCO2tFQUF6Qix5QkFBeUI7OztZQ2Z0Qyw0QkFDSTtZQUFBLDhCQUNJO1lBQUEsOEVBQ0k7WUEySEosOEdBQ0E7WUFDSixpQkFBTTtZQUVWLGlCQUFPOztZQWhJTyxlQUFpQjtZQUFqQixvQ0FBaUI7WUE0SEEsZUFBZ0I7WUFBaEIsbUNBQWdCOztvQ0Q5SC9DO0NBeWdCQyxBQS9mRCxJQStmQztTQTFmWSx5QkFBeUI7a0RBQXpCLHlCQUF5QjtjQUxyQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjtnQkFDN0IsV0FBVyxFQUFFLG9DQUFvQztnQkFDakQsU0FBUyxFQUFFLENBQUMsb0NBQW9DLENBQUM7YUFDbEQ7O2tCQWtFRSxZQUFZO21CQUFDLFFBQVEsRUFBRSxDQUFDLFFBQVEsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IENvbXBvbmVudCwgSG9zdExpc3RlbmVyLCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRm9ybUJ1aWxkZXIsIEZvcm1Hcm91cCwgVmFsaWRhdG9ycyB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5cclxuaW1wb3J0IHsgRGlhbG9nQ29uZmlybWF0aW9uIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9kaWFsb2ctY29uZmlybWF0aW9uL2RpYWxvZy1jb25maXJtYXRpb24uY29tcG9uZW50JztcclxuaW1wb3J0IHsgRXhpdENvbmZpcm1Db21wb25lbnQgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL2V4aXQtY29uZmlybS9leGl0LWNvbmZpcm0uY29tcG9uZW50JztcclxuaW1wb3J0IHsgTWF0RGlhbG9nIH0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsL2RpYWxvZ1wiO1xyXG5pbXBvcnQgeyBPbmJvYXJkaW5nU2VydmljZSB9IGZyb20gXCIuLi8uLi9vbmJvYXJkaW5nLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgZmllbGRXaWR0aCB9IGZyb20gXCIuLi8uLi91dGlscy91dGlsc1wiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6IFwiY3JlYXRlLW9uYm9hcmRpbmdcIixcclxuICB0ZW1wbGF0ZVVybDogXCIuL29uYm9hcmRpbmctY3JlYXRlLmNvbXBvbmVudC5odG1sXCIsXHJcbiAgc3R5bGVVcmxzOiBbXCIuL29uYm9hcmRpbmctY3JlYXRlLmNvbXBvbmVudC5zY3NzXCJdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgT25ib2FyZGluZ0NyZWF0ZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgZm9ybTogRm9ybUdyb3VwO1xyXG4gIGN1cnJlbnRQcm9maWw6IGFueSA9IHt9O1xyXG4gIGNhbkV4aXQgPSB0cnVlO1xyXG4gIHRhZ3MgPSBbXTtcclxuICBvbmJvYXJkaW5nSWQgPSBcIjBcIjtcclxuICB0ZW1wbGF0ZUlkID0gXCIwXCI7XHJcbiAgcGFyZW50ID0gW107XHJcbiAgc2VsZWN0ZWRNZW51ID0gMDtcclxuICB0ZW1wbGF0ZXM6IGFueTtcclxuICBjb250YWN0czogYW55O1xyXG4gIGN1cnJlbnRPbmJvYXJkaW5nOiBhbnk7XHJcbiAgY3VycmVudFRlbXBsYXRlOiBhbnk7XHJcbiAgaXNTZWxlY3RlZDogYm9vbGVhbjtcclxuICBjdXJyZW50VXNlcjogYW55O1xyXG4gIGN1cnJlbnRBY3RpdmU6IGFueTtcclxuICBzaG93TW9kZSA9IGZhbHNlO1xyXG4gIHNlbGVjdGVkQ2F0ZWdvcnlJbmRleCA9IG51bGw7XHJcbiAgbG9hZGluZyA9IGZhbHNlO1xyXG4gIGludmFsaWRlVmFsdWU6IGJvb2xlYW47XHJcbiAgZGV0YWlsVmlldzogYW55O1xyXG4gIGZpZWxkV2lkdGggPSBmaWVsZFdpZHRoXHJcbiAgY2F0ZWdvcmllczogYW55XHJcbiAgc3VibWl0TGFiZWwgPSAnRW52b3llciBtYSBmaWNoZSdcclxuICByZXN1bWVMYWJlbCA9ICdSZXByZW5kcmUgcGx1cyB0YXJkJ1xyXG4gIGlzU3VibWl0dGVkOiBib29sZWFuO1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBmYjogRm9ybUJ1aWxkZXIsXHJcbiAgICBwdWJsaWMgc2VydmljZTogT25ib2FyZGluZ1NlcnZpY2UsXHJcbiAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcclxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXHJcbiAgICBwcml2YXRlIGRpYWxvZzogTWF0RGlhbG9nXHJcbiAgKSB7XHJcbiAgICB0aGlzLnNlcnZpY2UuX2N1cnJlbnRPbmJvYXJkaW5nLnN1YnNjcmliZShhc3luYyAob25ib2FyZGluZykgPT4ge1xyXG4gICAgICB0aGlzLm9uQ3JlYXRlRHluYW1pY0Zvcm0oKVxyXG4gICAgICB0aGlzLmlzU2VsZWN0ZWQgPSB0cnVlO1xyXG4gICAgICBpZiAob25ib2FyZGluZykge1xyXG4gICAgICAgIHRoaXMuZm9ybS5wYXRjaFZhbHVlKHtcclxuICAgICAgICAgIFRlbXBsYXRlSWQ6IG9uYm9hcmRpbmcuVGVtcGxhdGVJZFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGF3YWl0IHRoaXMub25TZWxlY3Qob25ib2FyZGluZy5UZW1wbGF0ZUlkLCBvbmJvYXJkaW5nKVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMudGVtcGxhdGVJZCA9IHRoaXMucm91dGUuc25hcHNob3QucGFyYW1NYXAuZ2V0KFwidGVtcGxhdGVJZFwiKVxyXG4gICAgICAgIHRoaXMuZm9ybS5wYXRjaFZhbHVlKHtcclxuICAgICAgICAgIFRlbXBsYXRlSWQ6IHRoaXMudGVtcGxhdGVJZFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGF3YWl0IHRoaXMub25TZWxlY3QodGhpcy50ZW1wbGF0ZUlkLCBudWxsKVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgaXNPYmplY3Qob2JqKSB7XHJcbiAgICByZXR1cm4gb2JqICE9PSB1bmRlZmluZWQgJiYgb2JqICE9PSBudWxsICYmIG9iai5jb25zdHJ1Y3RvciA9PSBPYmplY3Q7XHJcbiAgfVxyXG5cclxuICBjYW5EZWFjdGl2YXRlKCkge1xyXG4gICAgaWYgKCF0aGlzLmNhbkV4aXQpIHtcclxuICAgICAgdGhpcy5kaWFsb2cub3BlbihFeGl0Q29uZmlybUNvbXBvbmVudCwge1xyXG4gICAgICAgIGRhdGE6ICcnXHJcbiAgICAgIH0pXHJcbiAgICAgIHJldHVybiB0aGlzLnNlcnZpY2UuY2FuRXhpdCRcclxuICAgIH1cclxuICAgIHJldHVybiB0cnVlXHJcbiAgfVxyXG5cclxuICBASG9zdExpc3RlbmVyKCdzY3JvbGwnLCBbJyRldmVudCddKVxyXG4gIG9uU2Nyb2xsKGV2ZW50KSB7XHJcbiAgICBjb25zdCBzZWN0aW9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJzZWN0aW9uXCIpO1xyXG4gICAgY29uc3QgbmF2TGkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmZpZWxkcyB1bCBsaVwiKTtcclxuICAgIGxldCBjdXJyZW50ID0gXCJcIjtcclxuICAgIHNlY3Rpb25zLmZvckVhY2goKHNlY3Rpb24pID0+IHtcclxuICAgICAgY29uc3Qgc2VjdGlvblRvcCA9IHNlY3Rpb24ub2Zmc2V0VG9wO1xyXG4gICAgICBpZiAoZXZlbnQudGFyZ2V0LnNjcm9sbFRvcCA+IHNlY3Rpb25Ub3AgLSAyMDApIHtcclxuICAgICAgICBjdXJyZW50ID0gc2VjdGlvbi5nZXRBdHRyaWJ1dGUoXCJpZFwiKVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIG5hdkxpLmZvckVhY2goKGxpKSA9PiB7XHJcbiAgICAgIGNvbnN0IGlkID0gbGkuZ2V0QXR0cmlidXRlKCdpZCcpXHJcbiAgICAgIGlmIChpZC5zdWJzdHJpbmcoMCwgaWQubGVuZ3RoIC0gMSkgPT09IGN1cnJlbnQpIHtcclxuICAgICAgICBsaS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGxpLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLnRlbXBsYXRlSWQgPSB0aGlzLnJvdXRlLnNuYXBzaG90LnBhcmFtTWFwLmdldChcInRlbXBsYXRlSWRcIik7XHJcbiAgICB0aGlzLm9uYm9hcmRpbmdJZCA9IHRoaXMub25ib2FyZGluZ0lkICE9PSBcIjBcIiA/IHRoaXMub25ib2FyZGluZ0lkIDogdGhpcy5yb3V0ZS5zbmFwc2hvdC5wYXJhbU1hcC5nZXQoXCJvbmJvYXJkaW5nSWRcIik7XHJcbiAgICBpZiAodGhpcy5vbmJvYXJkaW5nSWQgJiYgdGhpcy5vbmJvYXJkaW5nSWQgIT09IFwiMFwiKSB7XHJcbiAgICAgIHRoaXMuc2hvd01vZGUgPSB0cnVlO1xyXG4gICAgICB0aGlzLmN1cnJlbnRPbmJvYXJkaW5nID0gYXdhaXQgdGhpcy5zZXJ2aWNlLmdldE9uYm9hcmRpbmcodGhpcy5vbmJvYXJkaW5nSWQpO1xyXG4gICAgICB0aGlzLmZvcm0ucGF0Y2hWYWx1ZSh0aGlzLmN1cnJlbnRPbmJvYXJkaW5nKVxyXG4gICAgICB0aGlzLmNhdGVnb3JpZXMgPSB0aGlzLmN1cnJlbnRPbmJvYXJkaW5nLmNhdGVnb3JpZXM7XHJcbiAgICAgIHRoaXMub25Mb2FkVmlld0RldGFpbCh0aGlzLmNhdGVnb3JpZXMpXHJcblxyXG4gICAgICB0aGlzLmN1cnJlbnRUZW1wbGF0ZSA9IHRoaXMuY3VycmVudE9uYm9hcmRpbmc/LnZ0ZW1wbGF0ZXNbMF1cclxuICAgICAgaWYgKHRoaXMuY3VycmVudE9uYm9hcmRpbmcuVGVtcGxhdGVJZCkge1xyXG4gICAgICAgIHRoaXMuaXNTZWxlY3RlZCA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuICBvbkxvYWRWaWV3RGV0YWlsKGNhdGVnb3JpZXMpIHtcclxuICAgIGNvbnN0IHVzZXIgPSB7fVxyXG4gICAgY29uc3QgZGlzcGxheVVzZXIgPSBbXCJTYWx1dGF0aW9uXCIsIFwiVHlwZV9kZV9wcm9maWxfTm93Ym9hcmRfX2NcIiwgXCJBY2Nfc19hdV9wb3J0YWlsX2NsaWVudF9Ob3dCb2FyZF9fY1wiLCBcIkxhbmd1ZV9tYXRlcm5lbGxlX19jXCJdXHJcbiAgICBjb25zdCBjYXRlZ29yaWVzVmlldyA9IGNhdGVnb3JpZXMubWFwKChjYXRlZ29yeSkgPT4ge1xyXG4gICAgICBjb25zdCB7IG5hbWUsIGV4cGFuZE9uYm9hcmRpbmcgfSA9IGNhdGVnb3J5O1xyXG4gICAgICBsZXQgY2F0ZWdvcnlGb3JtID0gW11cclxuICAgICAgbGV0IGZpZWxkQ29tcGxldGVkID0gMDtcclxuICAgICAgbGV0IGZpZWxkTGVuZ3RoID0gMDtcclxuICAgICAgaWYgKGNhdGVnb3J5LmZvcm1zKSB7XHJcbiAgICAgICAgY2F0ZWdvcnlGb3JtID0gY2F0ZWdvcnkuZm9ybXMubWFwKChmb3JtKSA9PiB7XHJcbiAgICAgICAgICBpZiAoZm9ybS5pc01hbmRhdG9yeSkge1xyXG4gICAgICAgICAgICBmaWVsZExlbmd0aCArPSAxO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKGZvcm0uaXNNYW5kYXRvcnkgJiYgISFmb3JtLnZhbHVlKSB7XHJcbiAgICAgICAgICAgIGZpZWxkQ29tcGxldGVkICs9IDE7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBjb25zdCBuZXdzdWJmb3JtcyA9IHtcclxuICAgICAgICAgICAgbGFiZWw6IGZvcm0ubGFiZWwsXHJcbiAgICAgICAgICAgIHZhbHVlOiBmb3JtLnR5cGUgPT09IFwiY2hlY2tib3hfbXVsdGlwbGVcIiA/IGZvcm0uZGVmYXVsdFZhbHVlLmZpbHRlcigodjogYW55KSA9PiB2LmNoZWNrZWQpLm1hcCgobSkgPT4gbS52YWx1ZSkgOiBmb3JtLnR5cGUgIT09IFwidGVsXCIgPyBmb3JtLnZhbHVlIDogZm9ybT8udmFsdWU/LmludGVybmF0aW9uYWxOdW1iZXIsXHJcbiAgICAgICAgICAgIGtleTogZm9ybS5rZXlcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmIChjYXRlZ29yeS5uYW1lID09PSBcIlV0aWxpc2F0ZXVyXCIpIHtcclxuICAgICAgICAgICAgdXNlcltmb3JtLmtleV0gPSBmb3JtLnZhbHVlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgbGV0IHN1YkZvcm0gPSBbXVxyXG4gICAgICAgICAgaWYgKGZvcm0uZm9ybXMpIHtcclxuICAgICAgICAgICAgc3ViRm9ybSA9IGZvcm0uZm9ybXMubWFwKChzdWJGb3JtKSA9PiB7XHJcbiAgICAgICAgICAgICAgaWYgKHN1YkZvcm0uaXNNYW5kYXRvcnkpIHtcclxuICAgICAgICAgICAgICAgIGZpZWxkTGVuZ3RoICs9IDE7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGlmIChzdWJGb3JtLmlzTWFuZGF0b3J5ICYmICEhc3ViRm9ybS52YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgZmllbGRDb21wbGV0ZWQgKz0gMTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgY29uc3QgY2hpbGRmb3JtcyA9IHtcclxuICAgICAgICAgICAgICAgIGxhYmVsOiBzdWJGb3JtLmxhYmVsLFxyXG4gICAgICAgICAgICAgICAgdmFsdWU6IGZvcm0udHlwZSA9PT0gXCJjaGVja2JveF9tdWx0aXBsZVwiID8gZm9ybS5kZWZhdWx0VmFsdWUuZmlsdGVyKCh2OiBhbnkpID0+IHYuY2hlY2tlZCkubWFwKChtKSA9PiBtLnZhbHVlKSA6IHN1YkZvcm0udHlwZSAhPT0gXCJ0ZWxcIiA/IHN1YkZvcm0udmFsdWUgOiBzdWJGb3JtPy52YWx1ZT8uaW50ZXJuYXRpb25hbE51bWJlciB8fCAnJyxcclxuICAgICAgICAgICAgICAgIGtleTogc3ViRm9ybS5rZXlcclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgIGxldCBjaGlsZDIgPSBbXVxyXG4gICAgICAgICAgICAgIGlmIChzdWJGb3JtLmZvcm1zKSB7XHJcbiAgICAgICAgICAgICAgICBjaGlsZDIgPSBzdWJGb3JtLmZvcm1zLm1hcCgoYzIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgaWYgKGMyLmlzTWFuZGF0b3J5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZmllbGRMZW5ndGggKz0gMTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICBpZiAoYzIuaXNNYW5kYXRvcnkgJiYgISFjMi52YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGZpZWxkQ29tcGxldGVkICs9IDE7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogYzIubGFiZWwsXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGZvcm0udHlwZSA9PT0gXCJjaGVja2JveF9tdWx0aXBsZVwiID8gZm9ybS5kZWZhdWx0VmFsdWUuZmlsdGVyKCh2OiBhbnkpID0+IHYuY2hlY2tlZCkubWFwKChtKSA9PiBtLnZhbHVlKSA6IGMyLnR5cGUgIT09IFwidGVsXCIgPyBjMi52YWx1ZSA6IGMyPy52YWx1ZT8uaW50ZXJuYXRpb25hbE51bWJlciB8fCAnJyxcclxuICAgICAgICAgICAgICAgICAgICBrZXk6IGMyLmtleVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgLi4uY2hpbGRmb3JtcyxcclxuICAgICAgICAgICAgICAgICAgZXhwYW5kT25ib2FyZGluZzogc3ViRm9ybS5leHBhbmRPbmJvYXJkaW5nLFxyXG4gICAgICAgICAgICAgICAgICBmb3JtczogY2hpbGQyLFxyXG4gICAgICAgICAgICAgICAgICBrZXk6IGZvcm0ua2V5XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBjaGlsZGZvcm1zXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgIC4uLm5ld3N1YmZvcm1zLCBleHBhbmRPbmJvYXJkaW5nXHJcbiAgICAgICAgICAgICAgICA6IGZvcm0uZXhwYW5kT25ib2FyZGluZyxcclxuICAgICAgICAgICAgICBmb3Jtczogc3ViRm9ybSxcclxuICAgICAgICAgICAgICBrZXk6IGZvcm0ua2V5XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXdzdWJmb3Jtc1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBuYW1lLCBleHBhbmRPbmJvYXJkaW5nLFxyXG4gICAgICAgIGZvcm1zOiBjYXRlZ29yeUZvcm0sXHJcbiAgICAgICAga2V5OiBjYXRlZ29yeS5rZXksXHJcbiAgICAgICAgZmllbGRDb21wbGV0ZWQsXHJcbiAgICAgICAgZmllbGRMZW5ndGhcclxuICAgICAgfVxyXG4gICAgfSlcclxuICAgIGNvbnN0IGluZGV4ID0gY2F0ZWdvcmllc1ZpZXcuZmluZEluZGV4KChjYXQ6IGFueSkgPT4gY2F0Lm5hbWUgPT09IFwiVXRpbGlzYXRldXJcIilcclxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcclxuICAgICAgY2F0ZWdvcmllc1ZpZXdbaW5kZXhdLmZvcm1zID0gY2F0ZWdvcmllc1ZpZXdbaW5kZXhdLmZvcm1zLmZpbHRlcigoZm9ybTogYW55KSA9PiBkaXNwbGF5VXNlci5pbmNsdWRlcyhmb3JtLmtleSkpXHJcbiAgICB9XHJcbiAgICB0aGlzLmRldGFpbFZpZXcgPSB7XHJcbiAgICAgIEZpbmlzaGVkOiB0aGlzLmN1cnJlbnRPbmJvYXJkaW5nPy5GaW5pc2hlZCxcclxuICAgICAgY2F0ZWdvcmllczogY2F0ZWdvcmllc1ZpZXcsXHJcbiAgICAgIC8vIHZpZXc6IHRoaXMuY3VycmVudE9uYm9hcmRpbmcudmlldyxcclxuICAgICAgdGlja2V0czogdGhpcy5jdXJyZW50T25ib2FyZGluZz8udnRpY2tldHMsXHJcbiAgICAgIGNyZWF0ZWRBdDogdGhpcy5jdXJyZW50T25ib2FyZGluZz8uY3JlYXRlZEF0IHx8IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSxcclxuICAgICAgdXNlcjogdXNlcixcclxuICAgICAgTmFtZTogdGhpcy5jdXJyZW50T25ib2FyZGluZz8udnRlbXBsYXRlc1swXT8uTmFtZSB8fCB0aGlzLmN1cnJlbnRUZW1wbGF0ZT8uTmFtZVxyXG4gICAgfVxyXG4gICAgY29uc29sZS5sb2coJ2RldGFpbFZpZXctLS0tLS0tLScsIHRoaXMuZGV0YWlsVmlldyk7XHJcblxyXG5cclxuICB9XHJcblxyXG4gIG9uQ3JlYXRlRHluYW1pY0Zvcm0oKSB7XHJcbiAgICB0aGlzLmZvcm0gPSB0aGlzLmZiLmdyb3VwKHtcclxuICAgICAgVGVtcGxhdGVJZDogWzAsIFZhbGlkYXRvcnMucmVxdWlyZWRdXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGNhdE5hbWVTdGFydChzdHI6IHN0cmluZykge1xyXG4gICAgY29uc3Qgdm93ZWxzID0gWydhJywgJ2UnLCAnaScsICdvJywgJ3UnLCAneSddO1xyXG4gICAgcmV0dXJuIHZvd2Vscy5pbmNsdWRlcyhzdHIuc3Vic3RyKDAsIDEpLnRvTG9jYWxlTG93ZXJDYXNlKCkpXHJcbiAgfVxyXG5cclxuICBhc3luYyBvblNlbGVjdChpZCwgb25ib2FyZGluZykge1xyXG4gICAgaWYgKGlkKSB7XHJcbiAgICAgIHRoaXMuY3VycmVudFRlbXBsYXRlID0gYXdhaXQgdGhpcy5zZXJ2aWNlLmdldFByb2ZpbChpZCk7XHJcbiAgICAgIHRoaXMuY2F0ZWdvcmllcyA9IG9uYm9hcmRpbmcgPyBvbmJvYXJkaW5nLmNhdGVnb3JpZXMgOiB0aGlzLmN1cnJlbnRUZW1wbGF0ZS5jYXRlZ29yaWVzXHJcbiAgICAgICAgLmZpbHRlcigoY2F0KSA9PiBjYXQuZXhwYW5kT25ib2FyZGluZylcclxuICAgICAgICAubWFwKChjYXQpID0+IHtcclxuICAgICAgICAgIGlmIChjYXQuZm9ybXMpIHtcclxuICAgICAgICAgICAgY29uc3QgZiA9IGNhdC5mb3Jtc1xyXG4gICAgICAgICAgICAgIC5maWx0ZXIoKGZvcm0pID0+IGZvcm0uZXhwYW5kT25ib2FyZGluZylcclxuICAgICAgICAgICAgICAubWFwKChzdWIpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChzdWIuZm9ybXMpIHtcclxuICAgICAgICAgICAgICAgICAgY29uc3QgcyA9IHN1Yi5mb3Jtcy5maWx0ZXIoKGNoaWxkKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNoaWxkLmZvcm1zKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjID0gY2hpbGQuZm9ybXMuZmlsdGVyKChjaCkgPT4gY2guZXhwYW5kT25ib2FyZGluZylcclxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLmNoaWxkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JtczogY1xyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY2hpbGQ7XHJcbiAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC4uLnN1YixcclxuICAgICAgICAgICAgICAgICAgICBmb3Jtczogc1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc3ViO1xyXG4gICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgLi4uY2F0LFxyXG4gICAgICAgICAgICAgIGZvcm1zOiBmXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHJldHVybiBjYXRcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZXhpc3RTdWJGb3JtKGZvcm1zKSB7XHJcbiAgICBsZXQgZXhpc3QgPSBmYWxzZTtcclxuICAgIGlmIChmb3Jtcykge1xyXG4gICAgICBmb3IgKGNvbnN0IHN1YiBvZiBmb3Jtcykge1xyXG4gICAgICAgIGlmIChzdWIuZm9ybXMpIHtcclxuICAgICAgICAgIGV4aXN0ID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBleGlzdFxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzY3JvbGxUb0ZpcnN0SW52YWxpZENvbnRyb2woKSB7XHJcbiAgICBsZXQgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb3JtJyk7XHJcbiAgICBsZXQgZmlyc3RJbnZhbGlkQ29udHJvbCA9IGZvcm0uZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbmctaW52YWxpZCcpWzBdO1xyXG4gICAgZmlyc3RJbnZhbGlkQ29udHJvbC5zY3JvbGxJbnRvVmlldyh7IGJlaGF2aW9yOiAnc21vb3RoJywgYmxvY2s6ICdjZW50ZXInIH0pO1xyXG4gICAgKGZpcnN0SW52YWxpZENvbnRyb2wgYXMgSFRNTEVsZW1lbnQpLmZvY3VzKCk7XHJcbiAgfVxyXG5cclxuICBvbkNoYW5nZUNhdGVnb3J5KCkge1xyXG4gICAgY29uc3QgY2hlY2tNYW5kYXRvcnkgPSAoZmllbGQpID0+ICEhZmllbGQudmFsdWUgJiYgZmllbGQuaXNNYW5kYXRvcnkgJiYgKGZpZWxkLnR5cGUgIT09IFwiY2hlY2tib3hfbXVsdGlwbGVcIiB8fCBmaWVsZC50eXBlICE9PSAnY2hlY2tib3gnKSB8fCAhZmllbGQuaXNNYW5kYXRvcnkgfHwgZmllbGQudHlwZSA9PT0gXCJjaGVja2JveF9tdWx0aXBsZVwiIHx8IGZpZWxkLnR5cGUgPT09ICdjaGVja2JveCcgfHwgZmllbGQudHlwZSA9PT0gJ3RvZ2dsZSdcclxuICAgIHJldHVybiB0aGlzLmNhdGVnb3JpZXMuZXZlcnkoKGNhdCkgPT4gY2F0LmZvcm1zLmV2ZXJ5KChmaWVsZCkgPT4ge1xyXG4gICAgICBpZiAoZmllbGQuZm9ybXMpIHtcclxuICAgICAgICBpZiAoZmllbGQudmFsdWUpIHtcclxuICAgICAgICAgIHJldHVybiBmaWVsZC5mb3Jtcy5ldmVyeSgoZm9ybSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZm9ybS5mb3Jtcykge1xyXG4gICAgICAgICAgICAgIHJldHVybiBmb3JtLmZvcm1zLmV2ZXJ5KChjaGlsZCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGNoZWNrTWFuZGF0b3J5KGNoaWxkKVxyXG4gICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGNoZWNrTWFuZGF0b3J5KGZvcm0pXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gY2hlY2tNYW5kYXRvcnkoZmllbGQpXHJcbiAgICB9KSk7XHJcbiAgfVxyXG5cclxuICBhc3luYyBvblN1Ym1pdChzdWJtaXQgPSBmYWxzZSkge1xyXG4gICAgaWYgKHRoaXMuZm9ybS52YWxpZCAmJiB0aGlzLm9uQ2hhbmdlQ2F0ZWdvcnkoKSAmJiBzdWJtaXQgfHwgIXN1Ym1pdCkge1xyXG4gICAgICB0aGlzLmlzU3VibWl0dGVkID0gc3VibWl0XHJcbiAgICAgIGNvbnN0IHVzZXIgPSB0aGlzLmNhdGVnb3JpZXMuZmluZCgoY2F0KSA9PiBjYXQubmFtZSA9PT0gXCJVdGlsaXNhdGV1clwiKVxyXG4gICAgICBjb25zdCB1c2VyRGF0YTogYW55ID0ge31cclxuICAgICAgdXNlcj8uZm9ybXM/Lm1hcCgoZm9ybSkgPT4ge1xyXG4gICAgICAgIHVzZXJEYXRhW2Zvcm0ua2V5XSA9IGZvcm0udmFsdWVcclxuICAgICAgfSlcclxuICAgICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgdGhpcy5zdWJtaXRMYWJlbCA9IFwiQ2hhcmdlbWVudC4uLlwiXHJcbiAgICAgIGNvbnN0IHJlc3VsdCA9XHJcbiAgICAgICAgdGhpcy5vbmJvYXJkaW5nSWQgJiYgdGhpcy5vbmJvYXJkaW5nSWQgIT09IFwiMFwiXHJcbiAgICAgICAgICA/IGF3YWl0IHRoaXMuc2VydmljZS51cGRhdGVPbmJvYXJkaW5nKHtcclxuICAgICAgICAgICAgLi4udGhpcy5mb3JtLnZhbHVlLFxyXG4gICAgICAgICAgICB1c2VyOiB1c2VyRGF0YSxcclxuICAgICAgICAgICAgY2F0ZWdvcmllczogdGhpcy5jYXRlZ29yaWVzLFxyXG4gICAgICAgICAgICBGaW5pc2hlZDogc3VibWl0LFxyXG4gICAgICAgICAgICBfaWQ6IHRoaXMub25ib2FyZGluZ0lkLFxyXG4gICAgICAgICAgICB0aWNrZXRzOiB0aGlzLmN1cnJlbnRPbmJvYXJkaW5nPy52dGlja2V0cz8ubWFwKCh0aWNrZXQpID0+IHRpY2tldC5JZClcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICA6IGF3YWl0IHRoaXMuc2VydmljZS5jcmVhdGVPbmJvYXJkaW5nKHtcclxuICAgICAgICAgICAgLi4udGhpcy5mb3JtLnZhbHVlLFxyXG4gICAgICAgICAgICB1c2VyOiB1c2VyRGF0YSxcclxuICAgICAgICAgICAgY2F0ZWdvcmllczogdGhpcy5jYXRlZ29yaWVzLFxyXG4gICAgICAgICAgICBGaW5pc2hlZDogc3VibWl0LFxyXG4gICAgICAgICAgfSk7XHJcblxyXG4gICAgICBpZiAocmVzdWx0KSB7XHJcbiAgICAgICAgaWYgKHRoaXMub25ib2FyZGluZ0lkICYmIHRoaXMub25ib2FyZGluZ0lkICE9PSBcIjBcIikge1xyXG4gICAgICAgICAgdGhpcy5jYXRlZ29yaWVzID0gcmVzdWx0LmNhdGVnb3JpZXM7XHJcbiAgICAgICAgICB0aGlzLmN1cnJlbnRPbmJvYXJkaW5nID0gcmVzdWx0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBhd2FpdCB0aGlzLnNlcnZpY2UuZ2V0QWxsUHJvZmlsKCk7XHJcbiAgICAgICAgdGhpcy5vbmJvYXJkaW5nSWQgPSByZXN1bHQuX2lkO1xyXG4gICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuc3VibWl0TGFiZWwgPSBcIkVudm95ZXIgbWEgZmljaGVcIlxyXG4gICAgICAgIHRoaXMuY2FuRXhpdCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5zaG93TW9kZSA9IHRydWU7XHJcbiAgICAgICAgaWYgKHN1Ym1pdCkge1xyXG4gICAgICAgICAgY29uc3QgcmVzdWx0Q29udGFjdCA9IGF3YWl0IHRoaXMuc2VydmljZS5jcmVhdGVDb250YWN0KHsgLi4udXNlckRhdGEsIEFfcXVpdHRfbGFfc29jaV90X19jOiBcImZhbHNlXCIsIFBob25lOiB1c2VyRGF0YT8uUGhvbmU/LmUxNjROdW1iZXIsIE1vYmlsZVBob25lOiB1c2VyRGF0YT8uTW9iaWxlUGhvbmU/LmUxNjROdW1iZXIgfSk7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIi0tLS0tLS0tLS0tLS0tLXJlc3VsdENvbnRhY3QtLS0tLS0tLS0tLS0tLVwiLCByZXN1bHRDb250YWN0KTtcclxuICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtgJHt0aGlzLmNoZWNrT25ib2FyZGluZ1BhdGgoKX1gLCByZXN1bHQuVGVtcGxhdGVJZCwgcmVzdWx0Ll9pZF0pO1xyXG4gICAgICAgICAgdGhpcy5uZ09uSW5pdCgpXHJcbiAgICAgICAgICB0aGlzLm9uQ3JlYXRlQ29uZmlybSgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbYCR7dGhpcy5jaGVja09uYm9hcmRpbmdQYXRoKCl9YCwgcmVzdWx0LlRlbXBsYXRlSWQsIHJlc3VsdC5faWRdKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZXJycm9yLi4uLi4uXCIpO1xyXG4gICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuc3VibWl0TGFiZWwgPSBcIkVudm95ZXIgbWEgZmljaGVcIlxyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnNjcm9sbFRvRmlyc3RJbnZhbGlkQ29udHJvbCgpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjaGVja09uYm9hcmRpbmdQYXRoKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuc2VydmljZS5tYWluUGF0aC5pbmNsdWRlcygnb25ib2FyZGluZycpID8gYCR7dGhpcy5zZXJ2aWNlLm1haW5QYXRofS9yZXF1ZXN0cy9gIDogYC9vbmJvYXJkaW5nL3JlcXVlc3RzL2BcclxuICB9XHJcblxyXG4gIC8vIGFzeW5jIG9uUmVzdW1lTGF0ZXIoKSB7XHJcbiAgLy8gICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xyXG4gIC8vICAgdGhpcy5yZXN1bWVMYWJlbCA9IFwiQ2hhcmdlbWVudC4uLlwiXHJcbiAgLy8gICBjb25zdCByZXN1bHQgPVxyXG4gIC8vICAgICB0aGlzLm9uYm9hcmRpbmdJZCAmJiB0aGlzLm9uYm9hcmRpbmdJZCAhPT0gXCIwXCJcclxuICAvLyAgICAgICA/IGF3YWl0IHRoaXMuc2VydmljZS51cGRhdGVPbmJvYXJkaW5nKHtcclxuICAvLyAgICAgICAgIC4uLnRoaXMuZm9ybS52YWx1ZSxcclxuICAvLyAgICAgICAgIGNhdGVnb3JpZXM6IHRoaXMuY2F0ZWdvcmllcyxcclxuICAvLyAgICAgICAgIEZpbmlzaGVkOiB0cnVlLFxyXG4gIC8vICAgICAgICAgX2lkOiB0aGlzLm9uYm9hcmRpbmdJZCxcclxuICAvLyAgICAgICAgIHRpY2tldHM6IHRoaXMuY3VycmVudE9uYm9hcmRpbmc/LnZ0aWNrZXRzPy5tYXAoKHRpY2tldCkgPT4gdGlja2V0LklkKVxyXG4gIC8vICAgICAgIH0pXHJcbiAgLy8gICAgICAgOiBhd2FpdCB0aGlzLnNlcnZpY2UuY3JlYXRlT25ib2FyZGluZyh7XHJcbiAgLy8gICAgICAgICAuLi50aGlzLmZvcm0udmFsdWUsXHJcbiAgLy8gICAgICAgICBjYXRlZ29yaWVzOiB0aGlzLmNhdGVnb3JpZXMsXHJcbiAgLy8gICAgICAgICBGaW5pc2hlZDogZmFsc2UsXHJcbiAgLy8gICAgICAgfSk7XHJcblxyXG4gIC8vICAgaWYgKHJlc3VsdCkge1xyXG4gIC8vICAgICBpZiAodGhpcy5vbmJvYXJkaW5nSWQgJiYgdGhpcy5vbmJvYXJkaW5nSWQgIT09IFwiMFwiKSB7XHJcbiAgLy8gICAgICAgdGhpcy5jYXRlZ29yaWVzID0gcmVzdWx0LmNhdGVnb3JpZXM7XHJcbiAgLy8gICAgICAgdGhpcy5jdXJyZW50T25ib2FyZGluZyA9IHJlc3VsdDtcclxuICAvLyAgICAgfVxyXG4gIC8vICAgICBhd2FpdCB0aGlzLnNlcnZpY2UuZ2V0QWxsUHJvZmlsKCk7XHJcbiAgLy8gICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xyXG4gIC8vICAgICB0aGlzLmNhbkV4aXQgPSB0cnVlO1xyXG4gIC8vICAgICB0aGlzLnNob3dNb2RlID0gdHJ1ZTtcclxuICAvLyAgICAgdGhpcy5yZXN1bWVMYWJlbCA9IFwiUmVwcmVuZHJlIHBsdXMgdGFyZFwiXHJcbiAgLy8gICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFt0aGlzLnNlcnZpY2UubWFpblBhdGggKyAnL3JlcXVlc3RzJ10pO1xyXG4gIC8vICAgfSBlbHNlIHtcclxuICAvLyAgICAgY29uc29sZS5sb2coXCJlcnJyb3IuLi4uLi5cIik7XHJcbiAgLy8gICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xyXG4gIC8vICAgICB0aGlzLnJlc3VtZUxhYmVsID0gXCJSZXByZW5kcmUgcGx1cyB0YXJkXCJcclxuXHJcbiAgLy8gICB9XHJcbiAgLy8gfVxyXG5cclxuICBpbmdvcmVEZWZhdWx0QWN0aW9uKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICB9XHJcblxyXG5cclxuICBvbkNoZWNrQ29uZGl0aW9uTG9jYXRpb25WYWx1ZShpc2NvbmRpdGlvbiwgY29uZGl0aW9uKSB7XHJcbiAgICBpZiAoIWlzY29uZGl0aW9uIHx8ICFjb25kaXRpb24/LmxvY2F0aW9uKSB7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgY29uc3QgeyBzMEluZGV4LCAuLi5yZXN0IH0gPSBjb25kaXRpb24ubG9jYXRpb25cclxuICAgIGxldCBjdXJyZW50RGF0YSA9IHRoaXMuY2F0ZWdvcmllc1tzMEluZGV4XTtcclxuICAgIGZvciAoY29uc3Qga2V5IGluIHJlc3QpIHtcclxuICAgICAgaWYgKGN1cnJlbnREYXRhLmZvcm1zW3Jlc3Rba2V5XV0pIHtcclxuICAgICAgICBjdXJyZW50RGF0YSA9IGN1cnJlbnREYXRhLmZvcm1zW3Jlc3Rba2V5XV1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGN1cnJlbnREYXRhLmRlZmF1bHRWYWx1ZSA/IGN1cnJlbnREYXRhLnZhbHVlID09PSBjb25kaXRpb24udmFsdWUgOiAhIWN1cnJlbnREYXRhLnZhbHVlXHJcblxyXG4gICAgLy8gaWYgKGxvY2F0aW9uLmxldmVsID09PSAxKSB7XHJcbiAgICAvLyAgIGlmICh0aGlzLmNhdGVnb3JpZXNbbG9jYXRpb24uczBJbmRleF0uZm9ybXNbbG9jYXRpb24uczFJbmRleF0udHlwZSA9PT0gJ2NoZWNrYm94X211bHRpcGxlJykge1xyXG4gICAgLy8gICAgIGNvbnN0IGFycmF5ID0gdGhpcy5jYXRlZ29yaWVzW2xvY2F0aW9uLnMwSW5kZXhdLmZvcm1zW2xvY2F0aW9uLnMxSW5kZXhdLmRlZmF1bHRWYWx1ZS5maWx0ZXIoKGNoZWNrKSA9PiBjaGVjay5jaGVja2VkKVxyXG4gICAgLy8gICAgIGxldCBjaGVja2VkID0gZmFsc2U7XHJcbiAgICAvLyAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKykge1xyXG4gICAgLy8gICAgICAgaWYgKGFycmF5W2ldLnZhbHVlID09PSBjb25kaXRpb25WYWx1ZSkge1xyXG4gICAgLy8gICAgICAgICBjaGVja2VkID0gdHJ1ZTtcclxuICAgIC8vICAgICAgICAgYnJlYWs7XHJcbiAgICAvLyAgICAgICB9XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gICAgIHJldHVybiBjaGVja2VkO1xyXG4gICAgLy8gICB9IGVsc2Uge1xyXG4gICAgLy8gICAgIHJldHVybiB0aGlzLmNhdGVnb3JpZXNbbG9jYXRpb24uczBJbmRleF0uZm9ybXNbbG9jYXRpb24uczFJbmRleF0udmFsdWUgPT09IGNvbmRpdGlvblZhbHVlXHJcbiAgICAvLyAgIH1cclxuICAgIC8vIH0gZWxzZSBpZiAobG9jYXRpb24ubGV2ZWwgPT09IDIpIHtcclxuICAgIC8vICAgaWYgKHRoaXMuY2F0ZWdvcmllc1tsb2NhdGlvbi5zMEluZGV4XS5mb3Jtc1tsb2NhdGlvbi5zMUluZGV4XS5mb3Jtc1tsb2NhdGlvbi5zMkluZGV4XS50eXBlID09PSAnY2hlY2tib3hfbXVsdGlwbGUnKSB7XHJcbiAgICAvLyAgICAgY29uc3QgYXJyYXkgPSB0aGlzLmNhdGVnb3JpZXNbbG9jYXRpb24uczBJbmRleF0uZm9ybXNbbG9jYXRpb24uczFJbmRleF0uZm9ybXNbbG9jYXRpb24uczJJbmRleF0uZGVmYXVsdFZhbHVlLmZpbHRlcigoY2hlY2spID0+IGNoZWNrLmNoZWNrZWQpXHJcbiAgICAvLyAgICAgbGV0IGNoZWNrZWQgPSBmYWxzZTtcclxuICAgIC8vICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAvLyAgICAgICBpZiAoYXJyYXlbaV0udmFsdWUgPT0gY29uZGl0aW9uVmFsdWUpIHtcclxuICAgIC8vICAgICAgICAgY2hlY2tlZCA9IHRydWU7XHJcbiAgICAvLyAgICAgICAgIGJyZWFrO1xyXG4gICAgLy8gICAgICAgfVxyXG4gICAgLy8gICAgIH1cclxuICAgIC8vICAgICByZXR1cm4gY2hlY2tlZDtcclxuICAgIC8vICAgfSBlbHNlIHtcclxuICAgIC8vICAgICByZXR1cm4gdGhpcy5jYXRlZ29yaWVzW2xvY2F0aW9uLnMwSW5kZXhdLmZvcm1zW2xvY2F0aW9uLnMxSW5kZXhdLmZvcm1zW2xvY2F0aW9uLnMySW5kZXhdLnZhbHVlID09PSBjb25kaXRpb25WYWx1ZVxyXG4gICAgLy8gICB9XHJcbiAgICAvLyB9IGVsc2UgaWYgKGxvY2F0aW9uLmxldmVsID09PSAzKSB7XHJcbiAgICAvLyAgIGlmICh0aGlzLmNhdGVnb3JpZXNbbG9jYXRpb24uczBJbmRleF0uZm9ybXNbbG9jYXRpb24uczFJbmRleF0uZm9ybXNbbG9jYXRpb24uczNJbmRleF0uZm9ybXNbbG9jYXRpb24uczRJbmRleF0udHlwZSA9PT0gJ2NoZWNrYm94X211bHRpcGxlJykge1xyXG4gICAgLy8gICAgIGNvbnN0IGFycmF5ID0gdGhpcy5jYXRlZ29yaWVzW2xvY2F0aW9uLnMwSW5kZXhdLmZvcm1zW2xvY2F0aW9uLnMxSW5kZXhdLmZvcm1zW2xvY2F0aW9uLnMzSW5kZXhdLmZvcm1zW2xvY2F0aW9uLnM0SW5kZXhdLmRlZmF1bHRWYWx1ZS5maWx0ZXIoKGNoZWNrKSA9PiBjaGVjay5jaGVja2VkKVxyXG4gICAgLy8gICAgIGxldCBjaGVja2VkID0gZmFsc2U7XHJcbiAgICAvLyAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKykge1xyXG4gICAgLy8gICAgICAgaWYgKGFycmF5W2ldLnZhbHVlID09IGNvbmRpdGlvblZhbHVlKSB7XHJcbiAgICAvLyAgICAgICAgIGNoZWNrZWQgPSB0cnVlO1xyXG4gICAgLy8gICAgICAgICBicmVhaztcclxuICAgIC8vICAgICAgIH1cclxuICAgIC8vICAgICB9XHJcbiAgICAvLyAgICAgcmV0dXJuIGNoZWNrZWQ7XHJcbiAgICAvLyAgIH0gZWxzZSB7XHJcbiAgICAvLyAgICAgcmV0dXJuIHRoaXMuY2F0ZWdvcmllc1tsb2NhdGlvbi5zMEluZGV4XS5mb3Jtc1tsb2NhdGlvbi5zMUluZGV4XS5mb3Jtc1tsb2NhdGlvbi5zM0luZGV4XS5mb3Jtc1tsb2NhdGlvbi5zNEluZGV4XS52YWx1ZSA9PT0gY29uZGl0aW9uVmFsdWVcclxuICAgIC8vICAgfVxyXG4gICAgLy8gfSBlbHNlIHtcclxuICAgIC8vICAgcmV0dXJuIHRydWVcclxuICAgIC8vIH1cclxuXHJcbiAgfVxyXG5cclxuICBjaGVja1N1YkZvcm0oZm9ybXMpIHtcclxuICAgIGxldCBoYXNTdWJGb3JtID0gZmFsc2U7XHJcbiAgICBmb3IgKGNvbnN0IGZvcm0gb2YgZm9ybXMpIHtcclxuICAgICAgaWYgKGZvcm0uZm9ybXMgJiYgZm9ybS5mb3Jtcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgaGFzU3ViRm9ybSA9IHRydWU7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBoYXNTdWJGb3JtXHJcbiAgfVxyXG5cclxuICBvblNlbGVjdE1lbnUoaSkge1xyXG4gICAgdGhpcy5zZWxlY3RlZE1lbnUgPSBpO1xyXG4gICAgdGhpcy5zZWxlY3RlZENhdGVnb3J5SW5kZXggPSBpO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHRoaXMuc2VsZWN0ZWRDYXRlZ29yeUluZGV4ID0gbnVsbDtcclxuICAgIH0sIDIwMDApO1xyXG4gIH1cclxuXHJcbiAgb25DaGVja1ZhbHVlKGV2ZW50OiBib29sZWFuKSB7XHJcbiAgICB0aGlzLmludmFsaWRlVmFsdWUgPSBldmVudDtcclxuICB9XHJcblxyXG4gIG9uTGluayhlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICB9XHJcblxyXG4gIG9uU2hvd01vZGUoKSB7XHJcbiAgICB0aGlzLnNob3dNb2RlID0gIXRoaXMuc2hvd01vZGU7XHJcbiAgICB0aGlzLm9uTG9hZFZpZXdEZXRhaWwodGhpcy5jYXRlZ29yaWVzKVxyXG4gIH1cclxuXHJcbiAgb25DcmVhdGVDb25maXJtKCkge1xyXG4gICAgY29uc3QgZGlhbG9nUmVmID0gdGhpcy5kaWFsb2cub3BlbihEaWFsb2dDb25maXJtYXRpb24sIHtcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIG1lc3NhZ2U6IGBMZSBwcm9maWwgZGUgJHt0aGlzLmRldGFpbFZpZXcudXNlci5GaXJzdE5hbWV9ICR7dGhpcy5kZXRhaWxWaWV3LnVzZXIuTGFzdE5hbWV9IGEgw6l0w6kgYmllbiBjcsOpZWAsXHJcbiAgICAgICAgY29uZmlybVRleHQ6ICdUw6lsw6ljaGFyZ2VyIGxlIFBERiByw6ljYXBpdHVsYXRpZicsXHJcbiAgICAgICAgY2FuY2VsVGV4dDogJ0Zlcm1lcidcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBkaWFsb2dSZWYuYWZ0ZXJDbG9zZWQoKS5zdWJzY3JpYmUoYXN5bmMgKGN1cnJlbnQ6IGFueSkgPT4ge1xyXG4gICAgICBjb25zdCBhdHRhY2ggPSB0aGlzLmRldGFpbFZpZXc/LnZ0aWNrZXRzICYmIHRoaXMuZGV0YWlsVmlldz8udnRpY2tldHNbMF0/LnZhdHRhY2htZW50ID8gdGhpcy5kZXRhaWxWaWV3Py52dGlja2V0c1swXT8udmF0dGFjaG1lbnRbMF0gOiBudWxsXHJcbiAgICAgIGlmIChjdXJyZW50ICYmIGF0dGFjaCkge1xyXG4gICAgICAgIGF3YWl0IHRoaXMuc2VydmljZS5kb3dubG9hZEF0dGFjaG1lbnQoYXR0YWNoLlVybCwgYXR0YWNoLkNvbnRlbnRUeXBlLCBhdHRhY2guVXJsLnNwbGl0KCcvJykuam9pbignLScpKVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG59XHJcbiIsIjxtYWluPlxyXG4gICAgPGRpdiBjbGFzcz1cImNvbnRlbnRcIj5cclxuICAgICAgICA8Zm9ybSAqbmdJZj1cIiFzaG93TW9kZVwiIFtmb3JtR3JvdXBdPVwiZm9ybVwiIGlkPVwiZm9ybVwiIChzdWJtaXQpPVwib25TdWJtaXQodHJ1ZSlcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhdGVnb3J5XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGl0bGUtZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDI+SW50w6lncmF0aW9uIHByb2ZpbCB7e2N1cnJlbnRUZW1wbGF0ZT8uTmFtZX19IDxtYXQtaWNvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9XCJtYXJnaW4tbGVmdDogMjBweDsgY3Vyc29yOiBwb2ludGVyO1wiIChjbGljayk9XCJvblNob3dNb2RlKClcIj52aXNpYmlsaXR5PC9tYXQtaWNvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gbWF0LWJ1dHRvbiBbZGlzYWJsZWRdPVwibG9hZGluZ1wiIGNsYXNzPVwicmVnaXN0ZXItYnV0dG9uXCIgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJvblN1Ym1pdChmYWxzZSlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpYi1sb2FkaW5nLXBhZ2UgKm5nSWY9XCJsb2FkaW5nICYmICFpc1N1Ym1pdHRlZFwiPjwvbGliLWxvYWRpbmctcGFnZT57e3Jlc3VtZUxhYmVsfX1cclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cImZpZWxkc1wiIGNsYXNzPVwiZmllbGRzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgW25neFNjcm9sbFRvXT1cIicjJytjYXRlZ29yeS5uYW1lXCIgY2xhc3M9XCJtZW51LWl0ZW1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKm5nRm9yPVwibGV0IGNhdGVnb3J5IG9mIGNhdGVnb3JpZXM7ICBsZXQgaT1pbmRleFwiIFtpZF09XCJjYXRlZ29yeS5uYW1lKyd4J1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+e3tjYXRlZ29yeS5uYW1lfX08L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2F0ZWdvcnktY29udGFpbmVyXCIgKHNjcm9sbCk9XCJvblNjcm9sbCgkZXZlbnQpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzPVwiY2F0ZWdvcnktaXRlbSBjb250ZW50LWl0ZW1cIiAqbmdGb3I9XCJsZXQgY2F0ZWdvcnkgb2YgY2F0ZWdvcmllczsgIGxldCBpPWluZGV4XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtpZF09XCJjYXRlZ29yeS5uYW1lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmllbGQtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZC1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXRlZ29yeS10aXRsZS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzPVwiY2F0ZWdvcnktbmFtZVwiPnt7Y2F0ZWdvcnkubmFtZX19PC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIExpc3RlcyBkZXMgaW5mb3JtYXRpb25zIG7DqWNlc3NhaXJlcyBwb3VyIGxhIGNyw6lhdGlvbiBkZSB7e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhdE5hbWVTdGFydChjYXRlZ29yeS5uYW1lKSA/IFwibCdcIiArIGNhdGVnb3J5Lm5hbWUgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5Lm5hbWUgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhdGVnb3J5LWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmllbGQtY2F0ZWdvcnlcIiAqbmdGb3I9XCJsZXQgZmllbGQgb2YgY2F0ZWdvcnkuZm9ybXM7bGV0IGo9aW5kZXhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2lkXT1cImZpZWxkLmtleVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbc3R5bGUud2lkdGhdPVwiZmllbGQuZm9ybXMgPyAnMTAwJScgOiBmaWVsZFdpZHRoKGZpZWxkLnR5cGUsY2F0ZWdvcnkuZm9ybXMubGVuZ3RoLGopXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5uZXItbG9vcFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJmaWVsZC5leHBhbmRPbmJvYXJkaW5nICYmIG9uQ2hlY2tDb25kaXRpb25Mb2NhdGlvblZhbHVlKGZpZWxkLmlzQ29uZGl0aW9uYWwsZmllbGQ/LmNvbmRpdGlvbilcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmllbGRzLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpZWxkcy1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaWItc3ViLWNyZWF0ZS1vbmJvYXJkaW5nIFtmaWVsZF09XCJmaWVsZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2xlbmd0aF09XCJjYXRlZ29yeT8uZm9ybXM/Lmxlbmd0aFwiIFtpXT1cImlcIiBbal09XCJqXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNoaWxkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbm5lci1jaGlsZFwiICpuZ0lmPVwiZmllbGQuZm9ybXMgJiYgZmllbGQudmFsdWVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbm5lci1jaGlsZC1jb250ZW50XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqbmdGb3I9XCJsZXQgY2hpbGQgb2YgZmllbGQuZm9ybXM7bGV0IGs9aW5kZXhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtpZF09XCJjaGlsZC5rZXlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtzdHlsZS53aWR0aF09XCJjaGlsZC5mb3JtcyA/ICcxMDAlJyA6IGZpZWxkV2lkdGgoY2hpbGQudHlwZSxmaWVsZC5mb3Jtcy5sZW5ndGgsaylcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5uZXItbG9vcFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICpuZ0lmPVwiY2hpbGQuZXhwYW5kT25ib2FyZGluZyAmJiBvbkNoZWNrQ29uZGl0aW9uTG9jYXRpb25WYWx1ZShjaGlsZC5pc0NvbmRpdGlvbmFsLGNoaWxkPy5jb25kaXRpb24pXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZHMtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpZWxkcy1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGliLXN1Yi1jcmVhdGUtb25ib2FyZGluZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbZmllbGRdPVwiY2hpbGRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbbGVuZ3RoXT1cImZpZWxkPy5mb3Jtcz8ubGVuZ3RoXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2ldPVwialwiIFtqXT1cImtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAob25DaGVja1ZhbHVlKT1cIm9uQ2hlY2tWYWx1ZSgkZXZlbnQpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjaGlsZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlubmVyLWNoaWxkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqbmdJZj1cImNoaWxkLmZvcm1zICYmIGNoaWxkLnZhbHVlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlubmVyLWNoaWxkLWNvbnRlbnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqbmdGb3I9XCJsZXQgYzIgb2YgY2hpbGQuZm9ybXM7bGV0IGw9aW5kZXhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbaWRdPVwiYzIua2V5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3N0eWxlLndpZHRoXT1cImMyLmZvcm1zID8gJzEwMCUnIDogZmllbGRXaWR0aChjMi50eXBlLGNoaWxkLmZvcm1zLmxlbmd0aCxsKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5uZXItbG9vcFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqbmdJZj1cImMyLmV4cGFuZE9uYm9hcmRpbmcgJiYgb25DaGVja0NvbmRpdGlvbkxvY2F0aW9uVmFsdWUoYzIuaXNDb25kaXRpb25hbCxjMj8uY29uZGl0aW9uKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZmllbGRzLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZmllbGRzLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGliLXN1Yi1jcmVhdGUtb25ib2FyZGluZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2ZpZWxkXT1cImMyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtsZW5ndGhdPVwiY2hpbGQ/LmZvcm1zPy5sZW5ndGhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2ldPVwia1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbal09XCJsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChvbkNoZWNrVmFsdWUpPVwib25DaGVja1ZhbHVlKCRldmVudClcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImNoaWxkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saWItc3ViLWNyZWF0ZS1vbmJvYXJkaW5nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGliLXN1Yi1jcmVhdGUtb25ib2FyZGluZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGliLXN1Yi1jcmVhdGUtb25ib2FyZGluZz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJvbmJvYXJkaW5nLWNyZWF0ZS1mb290ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhY3Rpb25zLWJ1dHRvblwiIHN0eWxlPVwibWFyZ2luLWJvdHRvbTogNTBweDtkaXNwbGF5OiBmbGV4O1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gW2Rpc2FibGVkXT1cImxvYWRpbmcgfHwgIWZvcm0udmFsaWRcIiBtYXQtYnV0dG9uIGNsYXNzPVwicmVnaXN0ZXItYnV0dG9uIHNlbmQtZm9ybVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpYi1sb2FkaW5nLXBhZ2UgKm5nSWY9XCJsb2FkaW5nICYmIGlzU3VibWl0dGVkXCI+PC9saWItbG9hZGluZy1wYWdlPnt7c3VibWl0TGFiZWx9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gW2Rpc2FibGVkXT1cImxvYWRpbmdcIiBtYXQtYnV0dG9uIGNsYXNzPVwicmVnaXN0ZXItYnV0dG9uIHJlc3VtZVwiIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwib25TdWJtaXQoZmFsc2UpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaWItbG9hZGluZy1wYWdlICpuZ0lmPVwibG9hZGluZyAmJiAhaXNTdWJtaXR0ZWRcIj48L2xpYi1sb2FkaW5nLXBhZ2U+e3tyZXN1bWVMYWJlbH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPVwiaGVpZ2h0OiA0NTBweDtcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPGxpYi1vbmJvYXJkaW5nLWRldGFpbCAqbmdJZj1cInNob3dNb2RlXCIgKG9uU2hvd01vZGUpPVwib25TaG93TW9kZSgpXCIgW2RldGFpbFZpZXddPVwiZGV0YWlsVmlld1wiPlxyXG4gICAgICAgIDwvbGliLW9uYm9hcmRpbmctZGV0YWlsPlxyXG4gICAgPC9kaXY+XHJcblxyXG48L21haW4+Il19