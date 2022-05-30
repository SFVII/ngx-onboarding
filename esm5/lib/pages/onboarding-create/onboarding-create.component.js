import { __assign, __awaiter, __generator, __values } from "tslib";
import { Component, HostListener } from '@angular/core';
import { Validators } from "@angular/forms";
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
import * as i8 from "@nicky-lenaers/ngx-scroll-to";
import * as i9 from "../../components/onboarding/sub-onboarding-create/sub-onboarding-create.component";
import * as i10 from "../../components/onboarding/onboarding-detail/onboarding-detail.component";
function OnboardingCreateComponent_form_2_li_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li", 15);
    i0.ɵɵelementStart(1, "a");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var category_r827 = ctx.$implicit;
    i0.ɵɵproperty("ngxScrollTo", "#" + category_r827.name)("id", category_r827.name + "x");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(category_r827.name);
} }
function OnboardingCreateComponent_form_2_section_13_div_9_div_1_div_5_div_1_div_1_div_5_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    var _r846 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 25);
    i0.ɵɵelementStart(1, "div", 26);
    i0.ɵɵelementStart(2, "div", 27);
    i0.ɵɵelementStart(3, "lib-sub-create-onboarding", 34);
    i0.ɵɵlistener("onCheckValue", function OnboardingCreateComponent_form_2_section_13_div_9_div_1_div_5_div_1_div_1_div_5_div_1_div_1_Template_lib_sub_create_onboarding_onCheckValue_3_listener($event) { i0.ɵɵrestoreView(_r846); var ctx_r845 = i0.ɵɵnextContext(10); return ctx_r845.onCheckValue($event); });
    i0.ɵɵelement(4, "div", 29);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r847 = i0.ɵɵnextContext();
    var c2_r842 = ctx_r847.$implicit;
    var l_r843 = ctx_r847.index;
    var ctx_r848 = i0.ɵɵnextContext(3);
    var child_r837 = ctx_r848.$implicit;
    var k_r838 = ctx_r848.index;
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("field", c2_r842)("length", child_r837 == null ? null : child_r837.forms == null ? null : child_r837.forms.length)("i", k_r838)("j", l_r843);
} }
function OnboardingCreateComponent_form_2_section_13_div_9_div_1_div_5_div_1_div_1_div_5_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 33);
    i0.ɵɵtemplate(1, OnboardingCreateComponent_form_2_section_13_div_9_div_1_div_5_div_1_div_1_div_5_div_1_div_1_Template, 5, 4, "div", 24);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var c2_r842 = ctx.$implicit;
    var l_r843 = ctx.index;
    var child_r837 = i0.ɵɵnextContext(3).$implicit;
    var ctx_r841 = i0.ɵɵnextContext(6);
    i0.ɵɵstyleProp("width", c2_r842.forms ? "100%" : ctx_r841.fieldWidth(c2_r842.type, child_r837.forms.length, l_r843));
    i0.ɵɵproperty("id", c2_r842.key);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", c2_r842.expandOnboarding && ctx_r841.onCheckConditionLocationValue(c2_r842.isConditional, c2_r842.conditionLocation, c2_r842.conditionValue));
} }
function OnboardingCreateComponent_form_2_section_13_div_9_div_1_div_5_div_1_div_1_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 31);
    i0.ɵɵtemplate(1, OnboardingCreateComponent_form_2_section_13_div_9_div_1_div_5_div_1_div_1_div_5_div_1_Template, 2, 4, "div", 32);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var child_r837 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", child_r837.forms);
} }
function OnboardingCreateComponent_form_2_section_13_div_9_div_1_div_5_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    var _r852 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 25);
    i0.ɵɵelementStart(1, "div", 26);
    i0.ɵɵelementStart(2, "div", 27);
    i0.ɵɵelementStart(3, "lib-sub-create-onboarding", 34);
    i0.ɵɵlistener("onCheckValue", function OnboardingCreateComponent_form_2_section_13_div_9_div_1_div_5_div_1_div_1_Template_lib_sub_create_onboarding_onCheckValue_3_listener($event) { i0.ɵɵrestoreView(_r852); var ctx_r851 = i0.ɵɵnextContext(7); return ctx_r851.onCheckValue($event); });
    i0.ɵɵelementStart(4, "div", 29);
    i0.ɵɵtemplate(5, OnboardingCreateComponent_form_2_section_13_div_9_div_1_div_5_div_1_div_1_div_5_Template, 2, 1, "div", 30);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r853 = i0.ɵɵnextContext();
    var child_r837 = ctx_r853.$implicit;
    var k_r838 = ctx_r853.index;
    var ctx_r854 = i0.ɵɵnextContext(3);
    var field_r832 = ctx_r854.$implicit;
    var j_r833 = ctx_r854.index;
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("field", child_r837)("length", field_r832 == null ? null : field_r832.forms == null ? null : field_r832.forms.length)("i", j_r833)("j", k_r838);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", child_r837.forms && child_r837.value);
} }
function OnboardingCreateComponent_form_2_section_13_div_9_div_1_div_5_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 33);
    i0.ɵɵtemplate(1, OnboardingCreateComponent_form_2_section_13_div_9_div_1_div_5_div_1_div_1_Template, 6, 5, "div", 24);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var child_r837 = ctx.$implicit;
    var k_r838 = ctx.index;
    var field_r832 = i0.ɵɵnextContext(3).$implicit;
    var ctx_r836 = i0.ɵɵnextContext(3);
    i0.ɵɵstyleProp("width", child_r837.forms ? "100%" : ctx_r836.fieldWidth(child_r837.type, field_r832.forms.length, k_r838));
    i0.ɵɵproperty("id", child_r837.key);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", child_r837.expandOnboarding && ctx_r836.onCheckConditionLocationValue(child_r837.isConditional, child_r837.conditionLocation, child_r837.conditionValue));
} }
function OnboardingCreateComponent_form_2_section_13_div_9_div_1_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 31);
    i0.ɵɵtemplate(1, OnboardingCreateComponent_form_2_section_13_div_9_div_1_div_5_div_1_Template, 2, 4, "div", 32);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var field_r832 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", field_r832.forms);
} }
function OnboardingCreateComponent_form_2_section_13_div_9_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 25);
    i0.ɵɵelementStart(1, "div", 26);
    i0.ɵɵelementStart(2, "div", 27);
    i0.ɵɵelementStart(3, "lib-sub-create-onboarding", 28);
    i0.ɵɵelementStart(4, "div", 29);
    i0.ɵɵtemplate(5, OnboardingCreateComponent_form_2_section_13_div_9_div_1_div_5_Template, 2, 1, "div", 30);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r857 = i0.ɵɵnextContext();
    var field_r832 = ctx_r857.$implicit;
    var j_r833 = ctx_r857.index;
    var ctx_r858 = i0.ɵɵnextContext();
    var category_r829 = ctx_r858.$implicit;
    var i_r830 = ctx_r858.index;
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("field", field_r832)("length", category_r829 == null ? null : category_r829.forms == null ? null : category_r829.forms.length)("i", i_r830)("j", j_r833);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", field_r832.forms && field_r832.value);
} }
function OnboardingCreateComponent_form_2_section_13_div_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 23);
    i0.ɵɵtemplate(1, OnboardingCreateComponent_form_2_section_13_div_9_div_1_Template, 6, 5, "div", 24);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var field_r832 = ctx.$implicit;
    var j_r833 = ctx.index;
    var category_r829 = i0.ɵɵnextContext().$implicit;
    var ctx_r831 = i0.ɵɵnextContext(2);
    i0.ɵɵstyleProp("width", field_r832.forms ? "100%" : ctx_r831.fieldWidth(field_r832.type, category_r829.forms.length, j_r833));
    i0.ɵɵproperty("id", field_r832.key);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", field_r832.expandOnboarding && ctx_r831.onCheckConditionLocationValue(field_r832.isConditional, field_r832.conditionLocation, field_r832.conditionValue));
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
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "div", 21);
    i0.ɵɵtemplate(9, OnboardingCreateComponent_form_2_section_13_div_9_Template, 2, 4, "div", 22);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var category_r829 = ctx.$implicit;
    var ctx_r826 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("id", category_r829.name);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(category_r829.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" Listes des informations n\u00E9cessaires pour la cr\u00E9ation de ", ctx_r826.catNameStart(category_r829.name) ? "l'" + category_r829.name : category_r829.name, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", category_r829.forms);
} }
function OnboardingCreateComponent_form_2_Template(rf, ctx) { if (rf & 1) {
    var _r861 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "form", 3);
    i0.ɵɵlistener("submit", function OnboardingCreateComponent_form_2_Template_form_submit_0_listener() { i0.ɵɵrestoreView(_r861); var ctx_r860 = i0.ɵɵnextContext(); return ctx_r860.onSubmit(); });
    i0.ɵɵelementStart(1, "div", 4);
    i0.ɵɵelementStart(2, "div", 5);
    i0.ɵɵelementStart(3, "h2");
    i0.ɵɵtext(4);
    i0.ɵɵelementStart(5, "mat-icon", 6);
    i0.ɵɵlistener("click", function OnboardingCreateComponent_form_2_Template_mat_icon_click_5_listener() { i0.ɵɵrestoreView(_r861); var ctx_r862 = i0.ɵɵnextContext(); return ctx_r862.onShowMode(); });
    i0.ɵɵtext(6, "visibility");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "button", 7);
    i0.ɵɵlistener("click", function OnboardingCreateComponent_form_2_Template_button_click_7_listener() { i0.ɵɵrestoreView(_r861); var ctx_r863 = i0.ɵɵnextContext(); return ctx_r863.onResumeLater(); });
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "div", 8);
    i0.ɵɵelementStart(10, "ul");
    i0.ɵɵtemplate(11, OnboardingCreateComponent_form_2_li_11_Template, 3, 3, "li", 9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "div", 10);
    i0.ɵɵlistener("scroll", function OnboardingCreateComponent_form_2_Template_div_scroll_12_listener($event) { i0.ɵɵrestoreView(_r861); var ctx_r864 = i0.ɵɵnextContext(); return ctx_r864.onScroll($event); });
    i0.ɵɵtemplate(13, OnboardingCreateComponent_form_2_section_13_Template, 10, 4, "section", 11);
    i0.ɵɵelementStart(14, "div", 12);
    i0.ɵɵelementStart(15, "button", 13);
    i0.ɵɵtext(16);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "button", 14);
    i0.ɵɵlistener("click", function OnboardingCreateComponent_form_2_Template_button_click_17_listener() { i0.ɵɵrestoreView(_r861); var ctx_r865 = i0.ɵɵnextContext(); return ctx_r865.onResumeLater(); });
    i0.ɵɵtext(18);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r823 = i0.ɵɵnextContext();
    i0.ɵɵproperty("formGroup", ctx_r823.form);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1("Int\u00E9gration profil ", ctx_r823.currentTemplate == null ? null : ctx_r823.currentTemplate.Name, " ");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("disabled", ctx_r823.loading);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r823.resumeLabel);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", ctx_r823.categories);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r823.categories);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("disabled", ctx_r823.loading || !ctx_r823.form.valid);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r823.submitLabel);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("disabled", ctx_r823.loading);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r823.resumeLabel);
} }
function OnboardingCreateComponent_lib_onboarding_detail_3_Template(rf, ctx) { if (rf & 1) {
    var _r867 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "lib-onboarding-detail", 35);
    i0.ɵɵlistener("onShowMode", function OnboardingCreateComponent_lib_onboarding_detail_3_Template_lib_onboarding_detail_onShowMode_0_listener() { i0.ɵɵrestoreView(_r867); var ctx_r866 = i0.ɵɵnextContext(); return ctx_r866.onShowMode(); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r824 = i0.ɵɵnextContext();
    i0.ɵɵproperty("detailView", ctx_r824.detailView);
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
                        this.onboardingId = this.route.snapshot.paramMap.get("onboardingId");
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
        var _a, _b, _c, _d, _e;
        var user = {};
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
                        value: form.type !== "tel" ? form.value : ((_b = (_a = form) === null || _a === void 0 ? void 0 : _a.value) === null || _b === void 0 ? void 0 : _b.internationalNumber) || '',
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
                                value: subForm.type !== "tel" ? subForm.value : ((_b = (_a = subForm) === null || _a === void 0 ? void 0 : _a.value) === null || _b === void 0 ? void 0 : _b.internationalNumber) || '',
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
                                        value: c2.type !== "tel" ? c2.value : ((_b = (_a = c2) === null || _a === void 0 ? void 0 : _a.value) === null || _b === void 0 ? void 0 : _b.internationalNumber) || '',
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
        this.detailView = {
            categories: categoriesView,
            // view: this.currentOnboarding.view,
            tickets: (_a = this.currentOnboarding) === null || _a === void 0 ? void 0 : _a.vtickets,
            createdAt: ((_b = this.currentOnboarding) === null || _b === void 0 ? void 0 : _b.createdAt) || new Date().toISOString(),
            user: user,
            Name: ((_d = (_c = this.currentOnboarding) === null || _c === void 0 ? void 0 : _c.vtemplates[0]) === null || _d === void 0 ? void 0 : _d.Name) || ((_e = this.currentTemplate) === null || _e === void 0 ? void 0 : _e.Name)
        };
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
                return field.forms.every(function (form) {
                    if (form.forms) {
                        return form.forms.every(function (child) {
                            return checkMandatory(child);
                        });
                    }
                    return checkMandatory(form);
                });
            }
            return checkMandatory(field);
        }); });
    };
    OnboardingCreateComponent.prototype.onSubmit = function () {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function () {
            var result, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        if (!(this.form.valid && this.onChangeCategory())) return [3 /*break*/, 8];
                        this.loading = true;
                        this.submitLabel = "Chargement...";
                        if (!(this.onboardingId && this.onboardingId !== "0")) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.service.updateOnboarding(__assign(__assign({}, this.form.value), { categories: this.categories, Finished: true, _id: this.onboardingId, tickets: (_b = (_a = this.currentOnboarding) === null || _a === void 0 ? void 0 : _a.vtickets) === null || _b === void 0 ? void 0 : _b.map(function (ticket) { return ticket.Id; }) }))];
                    case 1:
                        _c = _d.sent();
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, this.service.createOnboarding(__assign(__assign({}, this.form.value), { categories: this.categories, Finished: true }))];
                    case 3:
                        _c = _d.sent();
                        _d.label = 4;
                    case 4:
                        result = _c;
                        if (!result) return [3 /*break*/, 6];
                        if (this.onboardingId && this.onboardingId !== "0") {
                            this.categories = result.categories;
                            this.currentOnboarding = result;
                        }
                        return [4 /*yield*/, this.service.getAllProfil()];
                    case 5:
                        _d.sent();
                        this.loading = false;
                        this.submitLabel = "Envoyer ma fiche";
                        this.canExit = true;
                        this.showMode = true;
                        this.router.navigate([this.service.mainPath + '/requests']);
                        return [3 /*break*/, 7];
                    case 6:
                        console.log("errror......");
                        this.loading = false;
                        this.submitLabel = "Envoyer ma fiche";
                        _d.label = 7;
                    case 7: return [3 /*break*/, 9];
                    case 8:
                        this.scrollToFirstInvalidControl();
                        _d.label = 9;
                    case 9: return [2 /*return*/];
                }
            });
        });
    };
    OnboardingCreateComponent.prototype.onResumeLater = function () {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function () {
            var result, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        this.loading = true;
                        this.resumeLabel = "Chargement...";
                        if (!(this.onboardingId && this.onboardingId !== "0")) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.service.updateOnboarding(__assign(__assign({}, this.form.value), { categories: this.categories, Finished: true, _id: this.onboardingId, tickets: (_b = (_a = this.currentOnboarding) === null || _a === void 0 ? void 0 : _a.vtickets) === null || _b === void 0 ? void 0 : _b.map(function (ticket) { return ticket.Id; }) }))];
                    case 1:
                        _c = _d.sent();
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, this.service.createOnboarding(__assign(__assign({}, this.form.value), { categories: this.categories, Finished: false }))];
                    case 3:
                        _c = _d.sent();
                        _d.label = 4;
                    case 4:
                        result = _c;
                        if (!result) return [3 /*break*/, 6];
                        if (this.onboardingId && this.onboardingId !== "0") {
                            this.categories = result.categories;
                            this.currentOnboarding = result;
                        }
                        return [4 /*yield*/, this.service.getAllProfil()];
                    case 5:
                        _d.sent();
                        this.loading = false;
                        this.canExit = true;
                        this.showMode = true;
                        this.resumeLabel = "Reprendre plus tard";
                        this.router.navigate([this.service.mainPath + '/requests']);
                        return [3 /*break*/, 7];
                    case 6:
                        console.log("errror......");
                        this.loading = false;
                        this.resumeLabel = "Reprendre plus tard";
                        _d.label = 7;
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    OnboardingCreateComponent.prototype.ingoreDefaultAction = function (e) {
        e.preventDefault();
    };
    OnboardingCreateComponent.prototype.onCheckConditionLocationValue = function (iscondition, location, conditionValue) {
        if (!iscondition) {
            return true;
        }
        if (location.level === 1) {
            if (this.categories[location.categoryIndex].forms[location.currentIndex].type === 'checkbox_multiple') {
                var array = this.categories[location.categoryIndex].forms[location.currentIndex].defaultValue.filter(function (check) { return check.checked; });
                var checked = false;
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
                var array = this.categories[location.categoryIndex].forms[location.formIndex].forms[location.currentIndex].defaultValue.filter(function (check) { return check.checked; });
                var checked = false;
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
                var array = this.categories[location.categoryIndex].forms[location.formIndex].forms[location.subIndex].forms[location.currentIndex].defaultValue.filter(function (check) { return check.checked; });
                var checked = false;
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
    OnboardingCreateComponent.ɵfac = function OnboardingCreateComponent_Factory(t) { return new (t || OnboardingCreateComponent)(i0.ɵɵdirectiveInject(i1.FormBuilder), i0.ɵɵdirectiveInject(i2.OnboardingService), i0.ɵɵdirectiveInject(i3.ActivatedRoute), i0.ɵɵdirectiveInject(i3.Router), i0.ɵɵdirectiveInject(i4.MatDialog)); };
    OnboardingCreateComponent.ɵcmp = i0.ɵɵdefineComponent({ type: OnboardingCreateComponent, selectors: [["create-onboarding"]], hostBindings: function OnboardingCreateComponent_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("scroll", function OnboardingCreateComponent_scroll_HostBindingHandler($event) { return ctx.onScroll($event); });
        } }, decls: 4, vars: 2, consts: [[1, "content"], ["id", "form", 3, "formGroup", "submit", 4, "ngIf"], [3, "detailView", "onShowMode", 4, "ngIf"], ["id", "form", 3, "formGroup", "submit"], [1, "category"], [1, "title-group"], [2, "margin-left", "20px", "cursor", "pointer", 3, "click"], ["mat-button", "", "type", "button", 1, "register-button", 3, "disabled", "click"], ["id", "fields", 1, "fields"], ["class", "menu-item", 3, "ngxScrollTo", "id", 4, "ngFor", "ngForOf"], [1, "category-container", 3, "scroll"], ["class", "category-item content-item", 3, "id", 4, "ngFor", "ngForOf"], [1, "actions-button", 2, "margin-bottom", "50px"], ["mat-button", "", "type", "submit", 1, "register-button", "send-form", 3, "disabled"], ["mat-button", "", "type", "button", 1, "register-button", "resume", 3, "disabled", "click"], [1, "menu-item", 3, "ngxScrollTo", "id"], [1, "category-item", "content-item", 3, "id"], [1, "field-content"], [1, "field-item"], [1, "category-title-group"], [1, "category-name"], [1, "category-container"], ["class", "field-category", 3, "id", "width", 4, "ngFor", "ngForOf"], [1, "field-category", 3, "id"], ["class", "inner-loop", 4, "ngIf"], [1, "inner-loop"], [1, "fields-content"], [1, "fields-container"], [3, "field", "length", "i", "j"], [1, "child"], ["class", "inner-child", 4, "ngIf"], [1, "inner-child"], ["class", "inner-child-content", 3, "id", "width", 4, "ngFor", "ngForOf"], [1, "inner-child-content", 3, "id"], [3, "field", "length", "i", "j", "onCheckValue"], [3, "detailView", "onShowMode"]], template: function OnboardingCreateComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "main");
            i0.ɵɵelementStart(1, "div", 0);
            i0.ɵɵtemplate(2, OnboardingCreateComponent_form_2_Template, 19, 10, "form", 1);
            i0.ɵɵtemplate(3, OnboardingCreateComponent_lib_onboarding_detail_3_Template, 1, 1, "lib-onboarding-detail", 2);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", !ctx.showMode);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.showMode);
        } }, directives: [i5.NgIf, i1.ɵangular_packages_forms_forms_y, i1.NgControlStatusGroup, i1.FormGroupDirective, i6.MatIcon, i7.MatButton, i5.NgForOf, i8.ScrollToDirective, i9.SubOnboardingCreateComponent, i10.OnboardingDetailComponent], styles: ["main[_ngcontent-%COMP%]{background:no-repeat padding-box #f4f7f9;height:100vh;width:100%;display:flex;flex-direction:column;align-items:center}main[_ngcontent-%COMP%]   .disabled[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{background-color:transparent!important}main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{width:99%;height:100%;padding-left:1%}main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font:bold 32px/30px Nexa Text;letter-spacing:0;color:#171f26;padding-top:20px}main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font:20px/26px Nexa Text;letter-spacing:0;color:#171f26}main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   p.sub-title[_ngcontent-%COMP%]{max-width:400px}main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .select-contact[_ngcontent-%COMP%]{max-width:70%;margin:5% auto auto;background:no-repeat padding-box #fff;border:1px solid #dce4e9;border-radius:6px;padding:5%}main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .select-contact[_ngcontent-%COMP%]   .select-template[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;justify-content:space-between;margin-top:50px}main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .select-contact[_ngcontent-%COMP%]   .select-template[_ngcontent-%COMP%]   .full-width[_ngcontent-%COMP%]{width:40%}main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .select-contact[_ngcontent-%COMP%]   .select-template[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{float:right;text-align:center;border:1px solid #543cb6;border-radius:7px;padding:1em 2em;display:flex;align-items:center;background-color:transparent;font:bold 15px/17px Nexa;letter-spacing:0;color:#543cb6;-ms-grid-row-align:center;align-self:center;width:220px}main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .category[_ngcontent-%COMP%]   .onboarding-mat-stepper[_ngcontent-%COMP%]   mat-horizontal-stepper[_ngcontent-%COMP%]   .next-step[_ngcontent-%COMP%]{float:right}main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{display:flex;height:100%;width:100%;max-width:1500px;margin:auto;overflow:hidden}main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .select-contact[_ngcontent-%COMP%]{max-width:70%;margin:5% auto auto;background:no-repeat padding-box #fff;border:1px solid #dce4e9;border-radius:6px;padding:5%}main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .select-contact[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{float:right;text-align:center;border:1px solid #543cb6;border-radius:7px;padding:.7em 2em .5em;display:flex;align-items:center;background-color:transparent;font:bold 15px/17px Nexa;letter-spacing:0;color:#543cb6;align-self:flex-end}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]{width:786px;background:no-repeat padding-box #fff;border:1px solid #dce4e9;border-radius:6px;opacity:1;margin:auto;padding:0 25px;-ms-grid-row-align:center;align-self:center}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{text-align:center;font:900 32px/48px Nexa;letter-spacing:0;color:#171f26}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font:18px/24px Nexa Text;letter-spacing:0;color:#171f26}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .profil-name-content[_ngcontent-%COMP%]{display:flex;align-items:center;position:relative}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .profil-name-content[_ngcontent-%COMP%]   .add-picto[_ngcontent-%COMP%]{margin-right:15px;min-width:50px;width:30px;padding:9px 12px}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .profil-name-content[_ngcontent-%COMP%]   .add-picto[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin-right:10px}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .profil-name-content[_ngcontent-%COMP%]   .list-picto[_ngcontent-%COMP%]{position:absolute;height:200px;width:100%;background:no-repeat padding-box #fff;border:1px solid #171f26;border-radius:8px;top:100%;z-index:1}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .profil-name-content[_ngcontent-%COMP%]   .list-picto[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin:15px;border:none;font-size:40px}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .profil-name-content[_ngcontent-%COMP%]   .list-picto[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]:hover{color:#830b6b!important;cursor:pointer}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .box-title-content[_ngcontent-%COMP%]{width:100%;margin:25px auto}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font:900 32px/38px Nexa;letter-spacing:0;color:#171f26}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font:15px/26px Nexa Text;letter-spacing:0;color:#171f26;text-align:center}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .link-create-profil[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:center}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{text-align:center;border:1px solid #543cb6;border-radius:7px;padding:.7em 2em .5em;display:flex;align-items:center;background-color:transparent;font:bold 15px/17px Nexa;letter-spacing:0;color:#543cb6}main[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:space-between}.expand-button[_ngcontent-%COMP%]{color:#5a607f!important;background-color:transparent!important;box-shadow:none!important}.full-width[_ngcontent-%COMP%]{width:100%}.field-action[_ngcontent-%COMP%]{width:10%}.field-size[_ngcontent-%COMP%]{width:90%;margin:auto 2% auto auto}  .mat-form-field-appearance-fill .mat-form-field-flex{background-color:#fff}  .mat-select{padding:0}  .mat-form-field-appearance-fill .mat-form-field-underline::before{background-color:transparent}[_nghost-%COMP%]     .mat-checkbox-checked.mat-accent .mat-checkbox-background, [_nghost-%COMP%]     .mat-checkbox-indeterminate.mat-accent .mat-checkbox-background{background-color:transparent}.category-action[_ngcontent-%COMP%]{display:flex;width:100%;overflow:hidden}.delete-field[_ngcontent-%COMP%]{margin:auto 2%}.radio-group[_ngcontent-%COMP%]   .mat-radio-button[_ngcontent-%COMP%]{margin-right:10px}.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary[_ngcontent-%COMP%]{background-color:#3f51b5;color:#fff;min-height:20px;font-size:10px}.move-icons[_ngcontent-%COMP%]{cursor:move}.category-item[_ngcontent-%COMP%], .cdk-drag-placeholder[_ngcontent-%COMP%]{display:flex;align-items:baseline;width:100%;border:1px solid #dce4e9;border-radius:8px;background-color:#fff;margin-top:10px;padding:15px}.category-item[_ngcontent-%COMP%]   .left-action[_ngcontent-%COMP%], .cdk-drag-placeholder[_ngcontent-%COMP%]   .left-action[_ngcontent-%COMP%]{height:auto;background-color:#49a094;padding-top:7px;width:40px;-ms-grid-row-align:stretch;align-self:stretch;border-top-left-radius:8px;border-bottom-left-radius:8px}.category-item[_ngcontent-%COMP%]   .left-action[_ngcontent-%COMP%]   .transparent-button[_ngcontent-%COMP%], .cdk-drag-placeholder[_ngcontent-%COMP%]   .left-action[_ngcontent-%COMP%]   .transparent-button[_ngcontent-%COMP%]{background-color:transparent;box-shadow:none;width:40px;padding:0;margin:0;min-width:auto;color:#fff}.category-item[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%], .cdk-drag-placeholder[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%]{width:100%}.category-item[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%], .cdk-drag-placeholder[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]{display:-ms-grid;display:grid;-ms-grid-columns:1fr 1fr 1fr;grid-template-columns:1fr 1fr 1fr;align-items:center;border:transparent!important}.category-item[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]   .category-title-group[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .cdk-drag-placeholder[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]   .category-title-group[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-family:Nexa;font-style:normal;font-weight:250;font-size:14px;line-height:16px;color:#575f6e}.category-item[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]   .category-title-group[_ngcontent-%COMP%]   .category-name[_ngcontent-%COMP%], .cdk-drag-placeholder[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]   .category-title-group[_ngcontent-%COMP%]   .category-name[_ngcontent-%COMP%]{text-align:left;font:bold 22px/48px Nexa Text;letter-spacing:0;color:#171f26;margin:0}.category-item[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]   .mat-form-field-wrapper[_ngcontent-%COMP%]   .mat-form-field-flex[_ngcontent-%COMP%]   .mat-form-field-outline[_ngcontent-%COMP%], .category-item[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%]   .mat-form-field-outline[_ngcontent-%COMP%], .cdk-drag-placeholder[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]   .mat-form-field-wrapper[_ngcontent-%COMP%]   .mat-form-field-flex[_ngcontent-%COMP%]   .mat-form-field-outline[_ngcontent-%COMP%], .cdk-drag-placeholder[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%]   .mat-form-field-outline[_ngcontent-%COMP%]{color:transparent!important}.cdk-drag-preview[_ngcontent-%COMP%]{box-sizing:border-box;border-radius:4px;opacity:1}.cdk-drag-preview[_ngcontent-%COMP%]   .expand-button[_ngcontent-%COMP%]{color:#5a607f!important;background-color:transparent!important;box-shadow:none!important;margin-right:28px!important}.cdk-drag-placeholder[_ngcontent-%COMP%]{opacity:0}.cdk-drag-animating[_ngcontent-%COMP%], .example-list.cdk-drop-list-dragging[_ngcontent-%COMP%]   .category-item[_ngcontent-%COMP%]:not(.cdk-drag-placeholder){transition:transform 250ms cubic-bezier(0,0,.2,1)}.child[_ngcontent-%COMP%]{margin-left:0}.child[_ngcontent-%COMP%]   .inner-child[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap}.category[_ngcontent-%COMP%]{width:100%}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]{width:250px;background-color:#fff;margin:10px 20px;border-radius:5px;border:1px solid #dbcbcb96}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:15px;border-bottom:1px solid #dbcbcb96;margin:10px;padding-bottom:5px;padding-top:0;font-family:\"Nexa Text\";display:flex;flex-direction:column;justify-content:space-between;align-items:flex-start}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-weight:600;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;margin-top:-5px}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin-left:15px;cursor:pointer}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   h3.template-title[_ngcontent-%COMP%]{font:900 24px/36px Nexa Text;letter-spacing:0;color:#171f26}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]{font-weight:600;margin-left:-27px;font-size:15px;list-style:none}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:5px;margin:5px auto;cursor:pointer;text-align:left;font:12px/19px Nexa Text;letter-spacing:0;color:#535760}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]{padding-left:0;margin-left:0}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.li-title[_ngcontent-%COMP%]{font-size:14px;font-weight:600;margin-right:10px}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.li-title[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:140px;outline:0;border:1px dashed grey}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.li-title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:inline-flex;align-items:center;width:100%}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.li-title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin-left:10px}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.li-title.active[_ngcontent-%COMP%], .category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.li-title[_ngcontent-%COMP%]:hover{background:no-repeat padding-box #e5e8ee;border-radius:5px}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.sub-title[_ngcontent-%COMP%]{list-style:none;padding-left:20px}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.sub-title.active[_ngcontent-%COMP%], .category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.sub-title.active[_ngcontent-%COMP%]::marker, .category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.sub-title[_ngcontent-%COMP%]:hover{font-weight:600;background:no-repeat padding-box #e5e8ee;border-radius:5px}.category[_ngcontent-%COMP%]   .disabled[_ngcontent-%COMP%]{background-color:#f4f7f9!important}.category[_ngcontent-%COMP%]   .expand-button[_ngcontent-%COMP%]{color:#5a607f!important;background-color:transparent!important;box-shadow:none!important;margin-right:28px!important}.category[_ngcontent-%COMP%]   .expand-button[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%]{font-size:40px}.category[_ngcontent-%COMP%]   .transparent-button[_ngcontent-%COMP%]{background-color:transparent;box-shadow:none;width:40px;padding:0;margin:0;margin-left:0!important;min-width:auto;color:#fff}.category[_ngcontent-%COMP%]   .title-group[_ngcontent-%COMP%]{display:flex;justify-content:space-between;margin-top:10px}.category[_ngcontent-%COMP%]   .title-group[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0 0 8px;display:flex;align-items:center}.add-button-sub-category[_ngcontent-%COMP%]{width:95.5%!important;margin-bottom:22px;margin-left:22px}.add-button-container[_ngcontent-%COMP%]{background:no-repeat padding-box #fff;border:1px dashed #dce4e9;border-radius:8px;margin-top:10px;padding:10px;display:flex;justify-content:center;align-items:center;width:98.5%;margin-bottom:22px}.add-button-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{display:flex;align-items:center;background-color:transparent;border:none;cursor:pointer;font:17px/26px Nexa Text;letter-spacing:0;color:#c2c8d5;box-shadow:none}.add-category[_ngcontent-%COMP%]{border:1px dashed #c2c8d5;border-radius:5px;margin-left:10px;margin-bottom:10px;font:bold 12px/19px Nexa Text;letter-spacing:0;color:#c2c8d5;width:92%}.inner-loop[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]{display:flex;height:100%;margin:0;width:100%;margin-top:10px;margin-bottom:10px}.inner-loop[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]   .button-action[_ngcontent-%COMP%]{background-color:#6fe8d7;-ms-grid-row-align:stretch;align-self:stretch;margin-top:0;margin-left:20px;border-bottom-left-radius:8px;border-top-left-radius:8px}.inner-loop[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]   .button-action[_ngcontent-%COMP%]   .transparent-button[_ngcontent-%COMP%]{background-color:transparent;box-shadow:none;width:40px;padding:0;margin:0;min-width:auto;color:#fff}.inner-loop[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]   .child-2-background[_ngcontent-%COMP%]{background-color:#cffaf4!important}.inner-loop[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]   .child-3-background[_ngcontent-%COMP%]{background-color:#e5e8ee!important}.inner-loop[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]   .fields-container[_ngcontent-%COMP%]{width:100%;padding-right:10px;padding-top:5px}.inner-loop[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]   .fields-container[_ngcontent-%COMP%]   lib-sub-category[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;width:100%}.inner-loop[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]   .fields-container[_ngcontent-%COMP%]   lib-sub-category[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]   .button-action[_ngcontent-%COMP%]{background-color:#6fe8d7;height:100%;margin:auto 15px auto auto;display:flex}.inner-loop[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]   .fields-container[_ngcontent-%COMP%]   lib-sub-category[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]   .button-action[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{box-shadow:none;background-color:transparent;color:#fff}.side-bar[_ngcontent-%COMP%]{display:flex;flex-direction:column}.register-button[_ngcontent-%COMP%]{background:0 0;border:2px solid #192128!important;border-radius:8px;margin-left:22px!important;color:#000}.register-button[disabled][disabled][_ngcontent-%COMP%]{opacity:.5!important;background:no-repeat padding-box #dadee2!important}.content-item[_ngcontent-%COMP%]{transition-property:border-image-slice border-image-source border-width;transition-timing-function:ease-in-out;transition-duration:.5s}.active-content[_ngcontent-%COMP%]{border-image-slice:1;border-width:2px;border-image-source:linear-gradient(to left,#9d107d,#4862ab)}  .phone-input-view-collab{border-bottom:1px solid #949494!important;padding-bottom:.3em;padding-top:1em;display:block!important;max-width:100%;font:14px/20px \"Nexa Text\"!important;width:95%}  .country-dropdown{min-width:unset!important}  .iti{width:100%!important}  #phone{width:90%!important}  #mobile-phone{width:100%}  .fields{max-height:100vh;margin-right:.5%;overflow:hidden;width:100%}  .fields mat-tab-group{height:100%;width:100%;overflow:hidden}  .fields mat-tab-group .mat-tab-body-wrapper{height:100%;max-height:90vh;overflow:auto}  .fields mat-tab-group .mat-tab-body-wrapper .mat-tab-body{height:100%}  .fields mat-tab-group .mat-tab-body-wrapper .mat-tab-body .mat-tab-body-content{width:100%;overflow:hidden}.fields[_ngcontent-%COMP%]{height:95%}.fields[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style:none;display:flex;margin:0;padding:0}.fields[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin-right:20px;padding-bottom:5px;border-bottom:3px solid transparent}.fields[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none;font-family:Nexa;font-style:normal;font-weight:700;font-size:14px;line-height:120%;color:#171f26;opacity:.5}.fields[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.menu-item.active[_ngcontent-%COMP%], .fields[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.menu-item[_ngcontent-%COMP%]:hover{cursor:pointer;border-bottom:3px solid #3c4252}.fields[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.menu-item.active[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .fields[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.menu-item[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%]{font-family:Nexa;font-style:normal;font-weight:700;font-size:14px;line-height:120%;opacity:1;text-decoration:none!important}  .category-container{overflow:auto;max-height:100%;display:flex;flex-wrap:wrap;-ms-overflow-style:none;scrollbar-width:none}  .category-container mat-form-field{width:100%}  .category-container .actions-button{margin-top:20px;margin-bottom:50px}  .category-container .actions-button .send-form{margin-left:0!important;background-color:#000;color:#fff}  .category-container .actions-button .resume{margin-left:25px!important}  .category-container::-webkit-scrollbar{display:none}  .category-item .mat-radio-button.mat-accent.mat-radio-checked .mat-radio-outer-circle{border-color:#039be5}  .category-item .mat-radio-button.mat-accent .mat-radio-inner-circle,   .category-item .mat-radio-button.mat-accent .mat-radio-ripple .mat-ripple-element:not(.mat-radio-persistent-ripple),   .category-item .mat-radio-button.mat-accent.mat-radio-checked .mat-radio-persistent-ripple,   .category-item .mat-radio-button.mat-accent:active .mat-radio-persistent-ripple{background-color:#039be5}  .category-item .mat-checkbox-checkmark-path{stroke:#fff!important}  .category-item .mat-checkbox-frame{border:2px solid #039be5!important}  .category-item .mat-checkbox-checked.mat-accent .mat-checkbox-background,   .category-item .mat-checkbox-indeterminate.mat-accent .mat-checkbox-background{background-color:#039be5!important}  .category-item .mat-checkbox-inner-container{height:20px!important;width:20px!important}[_nghost-%COMP%]     .category .mat-slide-toggle.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar{background-color:#039be5;position:relative;width:42px;height:23px;flex-shrink:0;border-radius:14px}[_nghost-%COMP%]     .category .mat-slide-toggle:not(.mat-disabled) .mat-slide-toggle-bar{background-color:#707273;position:relative;width:42px;height:23px;flex-shrink:0;border-radius:14px}[_nghost-%COMP%]     .category .mat-slide-toggle.mat-checked:not(.mat-disabled) .mat-slide-toggle-thumb{background-color:#fff;margin-top:4px}[_nghost-%COMP%]     .category .mat-slide-toggle:not(.mat-disabled) .mat-slide-toggle-thumb{margin-top:4px;margin-left:4px}[_nghost-%COMP%]     .category .mat-slide-toggle.draft:not(.mat-disabled) .mat-slide-toggle-bar{background-color:#707273}[_nghost-%COMP%]     .category .mat-slide-toggle.draft.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar{background-color:#039be5}"] });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib25ib2FyZGluZy1jcmVhdGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vb25ib2FyZGluZy8iLCJzb3VyY2VzIjpbImxpYi9wYWdlcy9vbmJvYXJkaW5nLWNyZWF0ZS9vbmJvYXJkaW5nLWNyZWF0ZS5jb21wb25lbnQudHMiLCJsaWIvcGFnZXMvb25ib2FyZGluZy1jcmVhdGUvb25ib2FyZGluZy1jcmVhdGUuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ2hFLE9BQU8sRUFBMEIsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFcEUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sc0RBQXNELENBQUM7QUFHNUYsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDOzs7Ozs7Ozs7Ozs7O0lDTXZCLDhCQUVJO0lBQUEseUJBQUc7SUFBQSxZQUFpQjtJQUFBLGlCQUFJO0lBQzVCLGlCQUFLOzs7SUFIRCxzREFBaUMsZ0NBQUE7SUFFOUIsZUFBaUI7SUFBakIsd0NBQWlCOzs7O0lBZ0VnRCwrQkFFSTtJQUFBLCtCQUVJO0lBQUEsK0JBRUk7SUFBQSxxREFNSTtJQURBLDhTQUFxQztJQUNyQywwQkFFTTtJQUNWLGlCQUE0QjtJQUNoQyxpQkFBTTtJQUNWLGlCQUFNO0lBQ1YsaUJBQU07Ozs7Ozs7O0lBWFUsZUFBWTtJQUFaLCtCQUFZLGlHQUFBLGFBQUEsYUFBQTs7O0lBWGhDLCtCQUlJO0lBQUEsdUlBRUk7SUFpQlIsaUJBQU07Ozs7OztJQXBCRixvSEFBNEU7SUFENUUsZ0NBQWE7SUFHVCxlQUFxSDtJQUFySCxtS0FBcUg7OztJQVBqSSwrQkFFSTtJQUFBLGlJQUlJO0lBb0JSLGlCQUFNOzs7SUF2QkUsZUFBMEM7SUFBMUMsMENBQTBDOzs7O0lBYnRFLCtCQUVJO0lBQUEsK0JBQ0k7SUFBQSwrQkFDSTtJQUFB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OztZQXBJTyxlQUFpQjtZQUFqQixvQ0FBaUI7WUFnSUEsZUFBZ0I7WUFBaEIsbUNBQWdCOztvQ0RsSS9DO0NBNmNDLEFBcGNELElBb2NDO1NBL2JZLHlCQUF5QjtrREFBekIseUJBQXlCO2NBTHJDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsbUJBQW1CO2dCQUM3QixXQUFXLEVBQUUsb0NBQW9DO2dCQUNqRCxTQUFTLEVBQUUsQ0FBQyxvQ0FBb0MsQ0FBQzthQUNsRDs7a0JBaUVFLFlBQVk7bUJBQUMsUUFBUSxFQUFFLENBQUMsUUFBUSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgQ29tcG9uZW50LCBIb3N0TGlzdGVuZXIsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGb3JtQnVpbGRlciwgRm9ybUdyb3VwLCBWYWxpZGF0b3JzIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcblxyXG5pbXBvcnQgeyBFeGl0Q29uZmlybUNvbXBvbmVudCB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvZXhpdC1jb25maXJtL2V4aXQtY29uZmlybS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBNYXREaWFsb2cgfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nXCI7XHJcbmltcG9ydCB7IE9uYm9hcmRpbmdTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL29uYm9hcmRpbmcuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBmaWVsZFdpZHRoIH0gZnJvbSBcIi4uLy4uL3V0aWxzL3V0aWxzXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogXCJjcmVhdGUtb25ib2FyZGluZ1wiLFxyXG4gIHRlbXBsYXRlVXJsOiBcIi4vb25ib2FyZGluZy1jcmVhdGUuY29tcG9uZW50Lmh0bWxcIixcclxuICBzdHlsZVVybHM6IFtcIi4vb25ib2FyZGluZy1jcmVhdGUuY29tcG9uZW50LnNjc3NcIl0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBPbmJvYXJkaW5nQ3JlYXRlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBmb3JtOiBGb3JtR3JvdXA7XHJcbiAgY3VycmVudFByb2ZpbDogYW55ID0ge307XHJcbiAgY2FuRXhpdCA9IHRydWU7XHJcbiAgdGFncyA9IFtdO1xyXG4gIG9uYm9hcmRpbmdJZCA9IFwiMFwiO1xyXG4gIHRlbXBsYXRlSWQgPSBcIjBcIjtcclxuICBwYXJlbnQgPSBbXTtcclxuICBzZWxlY3RlZE1lbnUgPSAwO1xyXG4gIHRlbXBsYXRlczogYW55O1xyXG4gIGNvbnRhY3RzOiBhbnk7XHJcbiAgY3VycmVudE9uYm9hcmRpbmc6IGFueTtcclxuICBjdXJyZW50VGVtcGxhdGU6IGFueTtcclxuICBpc1NlbGVjdGVkOiBib29sZWFuO1xyXG4gIGN1cnJlbnRVc2VyOiBhbnk7XHJcbiAgY3VycmVudEFjdGl2ZTogYW55O1xyXG4gIHNob3dNb2RlID0gZmFsc2U7XHJcbiAgc2VsZWN0ZWRDYXRlZ29yeUluZGV4ID0gbnVsbDtcclxuICBsb2FkaW5nID0gZmFsc2U7XHJcbiAgaW52YWxpZGVWYWx1ZTogYm9vbGVhbjtcclxuICBkZXRhaWxWaWV3OiBhbnk7XHJcbiAgZmllbGRXaWR0aCA9IGZpZWxkV2lkdGhcclxuICBjYXRlZ29yaWVzOiBhbnlcclxuICBzdWJtaXRMYWJlbCA9ICdFbnZveWVyIG1hIGZpY2hlJ1xyXG4gIHJlc3VtZUxhYmVsID0gJ1JlcHJlbmRyZSBwbHVzIHRhcmQnXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGZiOiBGb3JtQnVpbGRlcixcclxuICAgIHB1YmxpYyBzZXJ2aWNlOiBPbmJvYXJkaW5nU2VydmljZSxcclxuICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxyXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcclxuICAgIHByaXZhdGUgZGlhbG9nOiBNYXREaWFsb2dcclxuICApIHtcclxuICAgIHRoaXMuc2VydmljZS5fY3VycmVudE9uYm9hcmRpbmcuc3Vic2NyaWJlKGFzeW5jIChvbmJvYXJkaW5nKSA9PiB7XHJcbiAgICAgIHRoaXMub25DcmVhdGVEeW5hbWljRm9ybSgpXHJcbiAgICAgIHRoaXMuaXNTZWxlY3RlZCA9IHRydWU7XHJcbiAgICAgIGlmIChvbmJvYXJkaW5nKSB7XHJcbiAgICAgICAgdGhpcy5mb3JtLnBhdGNoVmFsdWUoe1xyXG4gICAgICAgICAgVGVtcGxhdGVJZDogb25ib2FyZGluZy5UZW1wbGF0ZUlkXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgYXdhaXQgdGhpcy5vblNlbGVjdChvbmJvYXJkaW5nLlRlbXBsYXRlSWQsIG9uYm9hcmRpbmcpXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy50ZW1wbGF0ZUlkID0gdGhpcy5yb3V0ZS5zbmFwc2hvdC5wYXJhbU1hcC5nZXQoXCJ0ZW1wbGF0ZUlkXCIpXHJcbiAgICAgICAgdGhpcy5mb3JtLnBhdGNoVmFsdWUoe1xyXG4gICAgICAgICAgVGVtcGxhdGVJZDogdGhpcy50ZW1wbGF0ZUlkXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgYXdhaXQgdGhpcy5vblNlbGVjdCh0aGlzLnRlbXBsYXRlSWQsIG51bGwpXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBpc09iamVjdChvYmopIHtcclxuICAgIHJldHVybiBvYmogIT09IHVuZGVmaW5lZCAmJiBvYmogIT09IG51bGwgJiYgb2JqLmNvbnN0cnVjdG9yID09IE9iamVjdDtcclxuICB9XHJcblxyXG4gIGNhbkRlYWN0aXZhdGUoKSB7XHJcbiAgICBpZiAoIXRoaXMuY2FuRXhpdCkge1xyXG4gICAgICB0aGlzLmRpYWxvZy5vcGVuKEV4aXRDb25maXJtQ29tcG9uZW50LCB7XHJcbiAgICAgICAgZGF0YTogJydcclxuICAgICAgfSlcclxuICAgICAgcmV0dXJuIHRoaXMuc2VydmljZS5jYW5FeGl0JFxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRydWVcclxuICB9XHJcblxyXG4gIEBIb3N0TGlzdGVuZXIoJ3Njcm9sbCcsIFsnJGV2ZW50J10pXHJcbiAgb25TY3JvbGwoZXZlbnQpIHtcclxuICAgIGNvbnN0IHNlY3Rpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcInNlY3Rpb25cIik7XHJcbiAgICBjb25zdCBuYXZMaSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZmllbGRzIHVsIGxpXCIpO1xyXG4gICAgbGV0IGN1cnJlbnQgPSBcIlwiO1xyXG4gICAgc2VjdGlvbnMuZm9yRWFjaCgoc2VjdGlvbikgPT4ge1xyXG4gICAgICBjb25zdCBzZWN0aW9uVG9wID0gc2VjdGlvbi5vZmZzZXRUb3A7XHJcbiAgICAgIGlmIChldmVudC50YXJnZXQuc2Nyb2xsVG9wID4gc2VjdGlvblRvcCAtIDIwMCkge1xyXG4gICAgICAgIGN1cnJlbnQgPSBzZWN0aW9uLmdldEF0dHJpYnV0ZShcImlkXCIpXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgbmF2TGkuZm9yRWFjaCgobGkpID0+IHtcclxuICAgICAgY29uc3QgaWQgPSBsaS5nZXRBdHRyaWJ1dGUoJ2lkJylcclxuICAgICAgaWYgKGlkLnN1YnN0cmluZygwLCBpZC5sZW5ndGggLSAxKSA9PT0gY3VycmVudCkge1xyXG4gICAgICAgIGxpLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbGkuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBhc3luYyBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMudGVtcGxhdGVJZCA9IHRoaXMucm91dGUuc25hcHNob3QucGFyYW1NYXAuZ2V0KFwidGVtcGxhdGVJZFwiKTtcclxuICAgIHRoaXMub25ib2FyZGluZ0lkID0gdGhpcy5yb3V0ZS5zbmFwc2hvdC5wYXJhbU1hcC5nZXQoXCJvbmJvYXJkaW5nSWRcIik7XHJcbiAgICBpZiAodGhpcy5vbmJvYXJkaW5nSWQgJiYgdGhpcy5vbmJvYXJkaW5nSWQgIT09IFwiMFwiKSB7XHJcbiAgICAgIHRoaXMuc2hvd01vZGUgPSB0cnVlO1xyXG4gICAgICB0aGlzLmN1cnJlbnRPbmJvYXJkaW5nID0gYXdhaXQgdGhpcy5zZXJ2aWNlLmdldE9uYm9hcmRpbmcodGhpcy5vbmJvYXJkaW5nSWQpO1xyXG4gICAgICB0aGlzLmZvcm0ucGF0Y2hWYWx1ZSh0aGlzLmN1cnJlbnRPbmJvYXJkaW5nKVxyXG4gICAgICB0aGlzLmNhdGVnb3JpZXMgPSB0aGlzLmN1cnJlbnRPbmJvYXJkaW5nLmNhdGVnb3JpZXM7XHJcbiAgICAgIHRoaXMub25Mb2FkVmlld0RldGFpbCh0aGlzLmNhdGVnb3JpZXMpXHJcblxyXG4gICAgICB0aGlzLmN1cnJlbnRUZW1wbGF0ZSA9IHRoaXMuY3VycmVudE9uYm9hcmRpbmc/LnZ0ZW1wbGF0ZXNbMF1cclxuICAgICAgaWYgKHRoaXMuY3VycmVudE9uYm9hcmRpbmcuVGVtcGxhdGVJZCkge1xyXG4gICAgICAgIHRoaXMuaXNTZWxlY3RlZCA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuICBvbkxvYWRWaWV3RGV0YWlsKGNhdGVnb3JpZXMpIHtcclxuICAgIGNvbnN0IHVzZXIgPSB7fVxyXG4gICAgY29uc3QgY2F0ZWdvcmllc1ZpZXcgPSBjYXRlZ29yaWVzLm1hcCgoY2F0ZWdvcnkpID0+IHtcclxuICAgICAgY29uc3QgeyBuYW1lLCBleHBhbmRPbmJvYXJkaW5nIH0gPSBjYXRlZ29yeTtcclxuICAgICAgbGV0IGNhdGVnb3J5Rm9ybSA9IFtdXHJcbiAgICAgIGxldCBmaWVsZENvbXBsZXRlZCA9IDA7XHJcbiAgICAgIGxldCBmaWVsZExlbmd0aCA9IDA7XHJcbiAgICAgIGlmIChjYXRlZ29yeS5mb3Jtcykge1xyXG4gICAgICAgIGNhdGVnb3J5Rm9ybSA9IGNhdGVnb3J5LmZvcm1zLm1hcCgoZm9ybSkgPT4ge1xyXG4gICAgICAgICAgaWYgKGZvcm0uaXNNYW5kYXRvcnkpIHtcclxuICAgICAgICAgICAgZmllbGRMZW5ndGggKz0gMTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmIChmb3JtLmlzTWFuZGF0b3J5ICYmICEhZm9ybS52YWx1ZSkge1xyXG4gICAgICAgICAgICBmaWVsZENvbXBsZXRlZCArPSAxO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgY29uc3QgbmV3c3ViZm9ybXMgPSB7XHJcbiAgICAgICAgICAgIGxhYmVsOiBmb3JtLmxhYmVsLFxyXG4gICAgICAgICAgICB2YWx1ZTogZm9ybS50eXBlICE9PSBcInRlbFwiID8gZm9ybS52YWx1ZSA6IGZvcm0/LnZhbHVlPy5pbnRlcm5hdGlvbmFsTnVtYmVyIHx8ICcnLFxyXG4gICAgICAgICAgICBrZXk6IGZvcm0ua2V5XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAoY2F0ZWdvcnkubmFtZSA9PT0gXCJVdGlsaXNhdGV1clwiKSB7XHJcbiAgICAgICAgICAgIHVzZXJbZm9ybS5rZXldID0gZm9ybS52YWx1ZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGxldCBzdWJGb3JtID0gW11cclxuICAgICAgICAgIGlmIChmb3JtLmZvcm1zKSB7XHJcbiAgICAgICAgICAgIHN1YkZvcm0gPSBmb3JtLmZvcm1zLm1hcCgoc3ViRm9ybSkgPT4ge1xyXG4gICAgICAgICAgICAgIGlmIChzdWJGb3JtLmlzTWFuZGF0b3J5KSB7XHJcbiAgICAgICAgICAgICAgICBmaWVsZExlbmd0aCArPSAxO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBpZiAoc3ViRm9ybS5pc01hbmRhdG9yeSAmJiAhIXN1YkZvcm0udmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIGZpZWxkQ29tcGxldGVkICs9IDE7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGNvbnN0IGNoaWxkZm9ybXMgPSB7XHJcbiAgICAgICAgICAgICAgICBsYWJlbDogc3ViRm9ybS5sYWJlbCxcclxuICAgICAgICAgICAgICAgIHZhbHVlOiBzdWJGb3JtLnR5cGUgIT09IFwidGVsXCIgPyBzdWJGb3JtLnZhbHVlIDogc3ViRm9ybT8udmFsdWU/LmludGVybmF0aW9uYWxOdW1iZXIgfHwgJycsXHJcbiAgICAgICAgICAgICAgICBrZXk6IHN1YkZvcm0ua2V5XHJcbiAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICBsZXQgY2hpbGQyID0gW11cclxuICAgICAgICAgICAgICBpZiAoc3ViRm9ybS5mb3Jtcykge1xyXG4gICAgICAgICAgICAgICAgY2hpbGQyID0gc3ViRm9ybS5mb3Jtcy5tYXAoKGMyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIGlmIChjMi5pc01hbmRhdG9yeSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGZpZWxkTGVuZ3RoICs9IDE7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgaWYgKGMyLmlzTWFuZGF0b3J5ICYmICEhYzIudmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBmaWVsZENvbXBsZXRlZCArPSAxO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6IGMyLmxhYmVsLFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBjMi50eXBlICE9PSBcInRlbFwiID8gYzIudmFsdWUgOiBjMj8udmFsdWU/LmludGVybmF0aW9uYWxOdW1iZXIgfHwgJycsXHJcbiAgICAgICAgICAgICAgICAgICAga2V5OiBjMi5rZXlcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgIC4uLmNoaWxkZm9ybXMsXHJcbiAgICAgICAgICAgICAgICAgIGV4cGFuZE9uYm9hcmRpbmc6IHN1YkZvcm0uZXhwYW5kT25ib2FyZGluZyxcclxuICAgICAgICAgICAgICAgICAgZm9ybXM6IGNoaWxkMixcclxuICAgICAgICAgICAgICAgICAga2V5OiBmb3JtLmtleVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gY2hpbGRmb3Jtc1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAuLi5uZXdzdWJmb3JtcywgZXhwYW5kT25ib2FyZGluZ1xyXG4gICAgICAgICAgICAgICAgOiBmb3JtLmV4cGFuZE9uYm9hcmRpbmcsXHJcbiAgICAgICAgICAgICAgZm9ybXM6IHN1YkZvcm0sXHJcbiAgICAgICAgICAgICAga2V5OiBmb3JtLmtleVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3c3ViZm9ybXNcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgbmFtZSwgZXhwYW5kT25ib2FyZGluZyxcclxuICAgICAgICBmb3JtczogY2F0ZWdvcnlGb3JtLFxyXG4gICAgICAgIGtleTogY2F0ZWdvcnkua2V5LFxyXG4gICAgICAgIGZpZWxkQ29tcGxldGVkLFxyXG4gICAgICAgIGZpZWxkTGVuZ3RoXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgICB0aGlzLmRldGFpbFZpZXcgPSB7XHJcbiAgICAgIGNhdGVnb3JpZXM6IGNhdGVnb3JpZXNWaWV3LFxyXG4gICAgICAvLyB2aWV3OiB0aGlzLmN1cnJlbnRPbmJvYXJkaW5nLnZpZXcsXHJcbiAgICAgIHRpY2tldHM6IHRoaXMuY3VycmVudE9uYm9hcmRpbmc/LnZ0aWNrZXRzLFxyXG4gICAgICBjcmVhdGVkQXQ6IHRoaXMuY3VycmVudE9uYm9hcmRpbmc/LmNyZWF0ZWRBdCB8fCBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCksXHJcbiAgICAgIHVzZXI6IHVzZXIsXHJcbiAgICAgIE5hbWU6IHRoaXMuY3VycmVudE9uYm9hcmRpbmc/LnZ0ZW1wbGF0ZXNbMF0/Lk5hbWUgfHwgdGhpcy5jdXJyZW50VGVtcGxhdGU/Lk5hbWVcclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxuICBvbkNyZWF0ZUR5bmFtaWNGb3JtKCkge1xyXG4gICAgdGhpcy5mb3JtID0gdGhpcy5mYi5ncm91cCh7XHJcbiAgICAgIFRlbXBsYXRlSWQ6IFswLCBWYWxpZGF0b3JzLnJlcXVpcmVkXVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBjYXROYW1lU3RhcnQoc3RyOiBzdHJpbmcpIHtcclxuICAgIGNvbnN0IHZvd2VscyA9IFsnYScsICdlJywgJ2knLCAnbycsICd1JywgJ3knXTtcclxuICAgIHJldHVybiB2b3dlbHMuaW5jbHVkZXMoc3RyLnN1YnN0cigwLCAxKS50b0xvY2FsZUxvd2VyQ2FzZSgpKVxyXG4gIH1cclxuXHJcbiAgYXN5bmMgb25TZWxlY3QoaWQsIG9uYm9hcmRpbmcpIHtcclxuICAgIGlmIChpZCkge1xyXG4gICAgICB0aGlzLmN1cnJlbnRUZW1wbGF0ZSA9IGF3YWl0IHRoaXMuc2VydmljZS5nZXRQcm9maWwoaWQpO1xyXG4gICAgICB0aGlzLmNhdGVnb3JpZXMgPSBvbmJvYXJkaW5nID8gb25ib2FyZGluZy5jYXRlZ29yaWVzIDogdGhpcy5jdXJyZW50VGVtcGxhdGUuY2F0ZWdvcmllc1xyXG4gICAgICAgIC5maWx0ZXIoKGNhdCkgPT4gY2F0LmV4cGFuZE9uYm9hcmRpbmcpXHJcbiAgICAgICAgLm1hcCgoY2F0KSA9PiB7XHJcbiAgICAgICAgICBpZiAoY2F0LmZvcm1zKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGYgPSBjYXQuZm9ybXNcclxuICAgICAgICAgICAgICAuZmlsdGVyKChmb3JtKSA9PiBmb3JtLmV4cGFuZE9uYm9hcmRpbmcpXHJcbiAgICAgICAgICAgICAgLm1hcCgoc3ViKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoc3ViLmZvcm1zKSB7XHJcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHMgPSBzdWIuZm9ybXMuZmlsdGVyKChjaGlsZCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjaGlsZC5mb3Jtcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgYyA9IGNoaWxkLmZvcm1zLmZpbHRlcigoY2gpID0+IGNoLmV4cGFuZE9uYm9hcmRpbmcpXHJcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAuLi5jaGlsZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybXM6IGNcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNoaWxkO1xyXG4gICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICAuLi5zdWIsXHJcbiAgICAgICAgICAgICAgICAgICAgZm9ybXM6IHNcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHN1YjtcclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgIC4uLmNhdCxcclxuICAgICAgICAgICAgICBmb3JtczogZlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICByZXR1cm4gY2F0XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGV4aXN0U3ViRm9ybShmb3Jtcykge1xyXG4gICAgbGV0IGV4aXN0ID0gZmFsc2U7XHJcbiAgICBpZiAoZm9ybXMpIHtcclxuICAgICAgZm9yIChjb25zdCBzdWIgb2YgZm9ybXMpIHtcclxuICAgICAgICBpZiAoc3ViLmZvcm1zKSB7XHJcbiAgICAgICAgICBleGlzdCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZXhpc3RcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2Nyb2xsVG9GaXJzdEludmFsaWRDb250cm9sKCkge1xyXG4gICAgbGV0IGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9ybScpO1xyXG4gICAgbGV0IGZpcnN0SW52YWxpZENvbnRyb2wgPSBmb3JtLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ25nLWludmFsaWQnKVswXTtcclxuICAgIGZpcnN0SW52YWxpZENvbnRyb2wuc2Nyb2xsSW50b1ZpZXcoeyBiZWhhdmlvcjogJ3Ntb290aCcsIGJsb2NrOiAnY2VudGVyJyB9KTtcclxuICAgIChmaXJzdEludmFsaWRDb250cm9sIGFzIEhUTUxFbGVtZW50KS5mb2N1cygpO1xyXG4gIH1cclxuXHJcbiAgb25DaGFuZ2VDYXRlZ29yeSgpIHtcclxuICAgIGNvbnN0IGNoZWNrTWFuZGF0b3J5ID0gKGZpZWxkKSA9PiAhIWZpZWxkLnZhbHVlICYmIGZpZWxkLmlzTWFuZGF0b3J5ICYmIChmaWVsZC50eXBlICE9PSBcImNoZWNrYm94X211bHRpcGxlXCIgfHwgZmllbGQudHlwZSAhPT0gJ2NoZWNrYm94JykgfHwgIWZpZWxkLmlzTWFuZGF0b3J5IHx8IGZpZWxkLnR5cGUgPT09IFwiY2hlY2tib3hfbXVsdGlwbGVcIiB8fCBmaWVsZC50eXBlID09PSAnY2hlY2tib3gnIHx8IGZpZWxkLnR5cGUgPT09ICd0b2dnbGUnXHJcbiAgICByZXR1cm4gdGhpcy5jYXRlZ29yaWVzLmV2ZXJ5KChjYXQpID0+IGNhdC5mb3Jtcy5ldmVyeSgoZmllbGQpID0+IHtcclxuICAgICAgaWYgKGZpZWxkLmZvcm1zKSB7XHJcbiAgICAgICAgcmV0dXJuIGZpZWxkLmZvcm1zLmV2ZXJ5KChmb3JtKSA9PiB7XHJcbiAgICAgICAgICBpZiAoZm9ybS5mb3Jtcykge1xyXG4gICAgICAgICAgICByZXR1cm4gZm9ybS5mb3Jtcy5ldmVyeSgoY2hpbGQpID0+IHtcclxuICAgICAgICAgICAgICByZXR1cm4gY2hlY2tNYW5kYXRvcnkoY2hpbGQpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICByZXR1cm4gY2hlY2tNYW5kYXRvcnkoZm9ybSlcclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBjaGVja01hbmRhdG9yeShmaWVsZClcclxuICAgIH0pKTtcclxuICB9XHJcblxyXG4gIGFzeW5jIG9uU3VibWl0KCkge1xyXG4gICAgaWYgKHRoaXMuZm9ybS52YWxpZCAmJiB0aGlzLm9uQ2hhbmdlQ2F0ZWdvcnkoKSkge1xyXG4gICAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xyXG4gICAgICB0aGlzLnN1Ym1pdExhYmVsID0gXCJDaGFyZ2VtZW50Li4uXCJcclxuICAgICAgY29uc3QgcmVzdWx0ID1cclxuICAgICAgICB0aGlzLm9uYm9hcmRpbmdJZCAmJiB0aGlzLm9uYm9hcmRpbmdJZCAhPT0gXCIwXCJcclxuICAgICAgICAgID8gYXdhaXQgdGhpcy5zZXJ2aWNlLnVwZGF0ZU9uYm9hcmRpbmcoe1xyXG4gICAgICAgICAgICAuLi50aGlzLmZvcm0udmFsdWUsXHJcbiAgICAgICAgICAgIGNhdGVnb3JpZXM6IHRoaXMuY2F0ZWdvcmllcyxcclxuICAgICAgICAgICAgRmluaXNoZWQ6IHRydWUsXHJcbiAgICAgICAgICAgIF9pZDogdGhpcy5vbmJvYXJkaW5nSWQsXHJcbiAgICAgICAgICAgIHRpY2tldHM6IHRoaXMuY3VycmVudE9uYm9hcmRpbmc/LnZ0aWNrZXRzPy5tYXAoKHRpY2tldCkgPT4gdGlja2V0LklkKVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIDogYXdhaXQgdGhpcy5zZXJ2aWNlLmNyZWF0ZU9uYm9hcmRpbmcoe1xyXG4gICAgICAgICAgICAuLi50aGlzLmZvcm0udmFsdWUsXHJcbiAgICAgICAgICAgIGNhdGVnb3JpZXM6IHRoaXMuY2F0ZWdvcmllcyxcclxuICAgICAgICAgICAgRmluaXNoZWQ6IHRydWUsXHJcbiAgICAgICAgICB9KTtcclxuXHJcbiAgICAgIGlmIChyZXN1bHQpIHtcclxuICAgICAgICBpZiAodGhpcy5vbmJvYXJkaW5nSWQgJiYgdGhpcy5vbmJvYXJkaW5nSWQgIT09IFwiMFwiKSB7XHJcbiAgICAgICAgICB0aGlzLmNhdGVnb3JpZXMgPSByZXN1bHQuY2F0ZWdvcmllcztcclxuICAgICAgICAgIHRoaXMuY3VycmVudE9uYm9hcmRpbmcgPSByZXN1bHQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGF3YWl0IHRoaXMuc2VydmljZS5nZXRBbGxQcm9maWwoKTtcclxuICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnN1Ym1pdExhYmVsID0gXCJFbnZveWVyIG1hIGZpY2hlXCJcclxuICAgICAgICB0aGlzLmNhbkV4aXQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuc2hvd01vZGUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFt0aGlzLnNlcnZpY2UubWFpblBhdGggKyAnL3JlcXVlc3RzJ10pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZXJycm9yLi4uLi4uXCIpO1xyXG4gICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuc3VibWl0TGFiZWwgPSBcIkVudm95ZXIgbWEgZmljaGVcIlxyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnNjcm9sbFRvRmlyc3RJbnZhbGlkQ29udHJvbCgpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhc3luYyBvblJlc3VtZUxhdGVyKCkge1xyXG4gICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcclxuICAgIHRoaXMucmVzdW1lTGFiZWwgPSBcIkNoYXJnZW1lbnQuLi5cIlxyXG4gICAgY29uc3QgcmVzdWx0ID1cclxuICAgICAgdGhpcy5vbmJvYXJkaW5nSWQgJiYgdGhpcy5vbmJvYXJkaW5nSWQgIT09IFwiMFwiXHJcbiAgICAgICAgPyBhd2FpdCB0aGlzLnNlcnZpY2UudXBkYXRlT25ib2FyZGluZyh7XHJcbiAgICAgICAgICAuLi50aGlzLmZvcm0udmFsdWUsXHJcbiAgICAgICAgICBjYXRlZ29yaWVzOiB0aGlzLmNhdGVnb3JpZXMsXHJcbiAgICAgICAgICBGaW5pc2hlZDogdHJ1ZSxcclxuICAgICAgICAgIF9pZDogdGhpcy5vbmJvYXJkaW5nSWQsXHJcbiAgICAgICAgICB0aWNrZXRzOiB0aGlzLmN1cnJlbnRPbmJvYXJkaW5nPy52dGlja2V0cz8ubWFwKCh0aWNrZXQpID0+IHRpY2tldC5JZClcclxuICAgICAgICB9KVxyXG4gICAgICAgIDogYXdhaXQgdGhpcy5zZXJ2aWNlLmNyZWF0ZU9uYm9hcmRpbmcoe1xyXG4gICAgICAgICAgLi4udGhpcy5mb3JtLnZhbHVlLFxyXG4gICAgICAgICAgY2F0ZWdvcmllczogdGhpcy5jYXRlZ29yaWVzLFxyXG4gICAgICAgICAgRmluaXNoZWQ6IGZhbHNlLFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIGlmIChyZXN1bHQpIHtcclxuICAgICAgaWYgKHRoaXMub25ib2FyZGluZ0lkICYmIHRoaXMub25ib2FyZGluZ0lkICE9PSBcIjBcIikge1xyXG4gICAgICAgIHRoaXMuY2F0ZWdvcmllcyA9IHJlc3VsdC5jYXRlZ29yaWVzO1xyXG4gICAgICAgIHRoaXMuY3VycmVudE9uYm9hcmRpbmcgPSByZXN1bHQ7XHJcbiAgICAgIH1cclxuICAgICAgYXdhaXQgdGhpcy5zZXJ2aWNlLmdldEFsbFByb2ZpbCgpO1xyXG4gICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgdGhpcy5jYW5FeGl0ID0gdHJ1ZTtcclxuICAgICAgdGhpcy5zaG93TW9kZSA9IHRydWU7XHJcbiAgICAgIHRoaXMucmVzdW1lTGFiZWwgPSBcIlJlcHJlbmRyZSBwbHVzIHRhcmRcIlxyXG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbdGhpcy5zZXJ2aWNlLm1haW5QYXRoICsgJy9yZXF1ZXN0cyddKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiZXJycm9yLi4uLi4uXCIpO1xyXG4gICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgdGhpcy5yZXN1bWVMYWJlbCA9IFwiUmVwcmVuZHJlIHBsdXMgdGFyZFwiXHJcblxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaW5nb3JlRGVmYXVsdEFjdGlvbihlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgfVxyXG5cclxuXHJcbiAgb25DaGVja0NvbmRpdGlvbkxvY2F0aW9uVmFsdWUoaXNjb25kaXRpb24sIGxvY2F0aW9uLCBjb25kaXRpb25WYWx1ZSkge1xyXG4gICAgaWYgKCFpc2NvbmRpdGlvbikge1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIGlmIChsb2NhdGlvbi5sZXZlbCA9PT0gMSkge1xyXG4gICAgICBpZiAodGhpcy5jYXRlZ29yaWVzW2xvY2F0aW9uLmNhdGVnb3J5SW5kZXhdLmZvcm1zW2xvY2F0aW9uLmN1cnJlbnRJbmRleF0udHlwZSA9PT0gJ2NoZWNrYm94X211bHRpcGxlJykge1xyXG4gICAgICAgIGNvbnN0IGFycmF5ID0gdGhpcy5jYXRlZ29yaWVzW2xvY2F0aW9uLmNhdGVnb3J5SW5kZXhdLmZvcm1zW2xvY2F0aW9uLmN1cnJlbnRJbmRleF0uZGVmYXVsdFZhbHVlLmZpbHRlcigoY2hlY2spID0+IGNoZWNrLmNoZWNrZWQpXHJcbiAgICAgICAgbGV0IGNoZWNrZWQgPSBmYWxzZTtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICBpZiAoYXJyYXlbaV0udmFsdWUgPT0gY29uZGl0aW9uVmFsdWUpIHtcclxuICAgICAgICAgICAgY2hlY2tlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gY2hlY2tlZDtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jYXRlZ29yaWVzW2xvY2F0aW9uLmNhdGVnb3J5SW5kZXhdLmZvcm1zW2xvY2F0aW9uLmN1cnJlbnRJbmRleF0udmFsdWUgPT09IGNvbmRpdGlvblZhbHVlXHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSBpZiAobG9jYXRpb24ubGV2ZWwgPT09IDIpIHtcclxuICAgICAgaWYgKHRoaXMuY2F0ZWdvcmllc1tsb2NhdGlvbi5jYXRlZ29yeUluZGV4XS5mb3Jtc1tsb2NhdGlvbi5mb3JtSW5kZXhdLmZvcm1zW2xvY2F0aW9uLmN1cnJlbnRJbmRleF0udHlwZSA9PT0gJ2NoZWNrYm94X211bHRpcGxlJykge1xyXG4gICAgICAgIGNvbnN0IGFycmF5ID0gdGhpcy5jYXRlZ29yaWVzW2xvY2F0aW9uLmNhdGVnb3J5SW5kZXhdLmZvcm1zW2xvY2F0aW9uLmZvcm1JbmRleF0uZm9ybXNbbG9jYXRpb24uY3VycmVudEluZGV4XS5kZWZhdWx0VmFsdWUuZmlsdGVyKChjaGVjaykgPT4gY2hlY2suY2hlY2tlZClcclxuICAgICAgICBsZXQgY2hlY2tlZCA9IGZhbHNlO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgIGlmIChhcnJheVtpXS52YWx1ZSA9PSBjb25kaXRpb25WYWx1ZSkge1xyXG4gICAgICAgICAgICBjaGVja2VkID0gdHJ1ZTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBjaGVja2VkO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNhdGVnb3JpZXNbbG9jYXRpb24uY2F0ZWdvcnlJbmRleF0uZm9ybXNbbG9jYXRpb24uZm9ybUluZGV4XS5mb3Jtc1tsb2NhdGlvbi5jdXJyZW50SW5kZXhdLnZhbHVlID09PSBjb25kaXRpb25WYWx1ZVxyXG4gICAgICB9XHJcbiAgICB9IGVsc2UgaWYgKGxvY2F0aW9uLmxldmVsID09PSAzKSB7XHJcbiAgICAgIGlmICh0aGlzLmNhdGVnb3JpZXNbbG9jYXRpb24uY2F0ZWdvcnlJbmRleF0uZm9ybXNbbG9jYXRpb24uZm9ybUluZGV4XS5mb3Jtc1tsb2NhdGlvbi5zdWJJbmRleF0uZm9ybXNbbG9jYXRpb24uY3VycmVudEluZGV4XS50eXBlID09PSAnY2hlY2tib3hfbXVsdGlwbGUnKSB7XHJcbiAgICAgICAgY29uc3QgYXJyYXkgPSB0aGlzLmNhdGVnb3JpZXNbbG9jYXRpb24uY2F0ZWdvcnlJbmRleF0uZm9ybXNbbG9jYXRpb24uZm9ybUluZGV4XS5mb3Jtc1tsb2NhdGlvbi5zdWJJbmRleF0uZm9ybXNbbG9jYXRpb24uY3VycmVudEluZGV4XS5kZWZhdWx0VmFsdWUuZmlsdGVyKChjaGVjaykgPT4gY2hlY2suY2hlY2tlZClcclxuICAgICAgICBsZXQgY2hlY2tlZCA9IGZhbHNlO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgIGlmIChhcnJheVtpXS52YWx1ZSA9PSBjb25kaXRpb25WYWx1ZSkge1xyXG4gICAgICAgICAgICBjaGVja2VkID0gdHJ1ZTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBjaGVja2VkO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNhdGVnb3JpZXNbbG9jYXRpb24uY2F0ZWdvcnlJbmRleF0uZm9ybXNbbG9jYXRpb24uZm9ybUluZGV4XS5mb3Jtc1tsb2NhdGlvbi5zdWJJbmRleF0uZm9ybXNbbG9jYXRpb24uY3VycmVudEluZGV4XS52YWx1ZSA9PT0gY29uZGl0aW9uVmFsdWVcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIHRydWVcclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxuICBjaGVja1N1YkZvcm0oZm9ybXMpIHtcclxuICAgIGxldCBoYXNTdWJGb3JtID0gZmFsc2U7XHJcbiAgICBmb3IgKGNvbnN0IGZvcm0gb2YgZm9ybXMpIHtcclxuICAgICAgaWYgKGZvcm0uZm9ybXMgJiYgZm9ybS5mb3Jtcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgaGFzU3ViRm9ybSA9IHRydWU7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBoYXNTdWJGb3JtXHJcbiAgfVxyXG5cclxuICBvblNlbGVjdE1lbnUoaSkge1xyXG4gICAgdGhpcy5zZWxlY3RlZE1lbnUgPSBpO1xyXG4gICAgdGhpcy5zZWxlY3RlZENhdGVnb3J5SW5kZXggPSBpO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHRoaXMuc2VsZWN0ZWRDYXRlZ29yeUluZGV4ID0gbnVsbDtcclxuICAgIH0sIDIwMDApO1xyXG4gIH1cclxuXHJcbiAgb25DaGVja1ZhbHVlKGV2ZW50OiBib29sZWFuKSB7XHJcbiAgICB0aGlzLmludmFsaWRlVmFsdWUgPSBldmVudDtcclxuICB9XHJcblxyXG4gIG9uTGluayhlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICB9XHJcblxyXG4gIG9uU2hvd01vZGUoKSB7XHJcbiAgICB0aGlzLnNob3dNb2RlID0gIXRoaXMuc2hvd01vZGU7XHJcbiAgICB0aGlzLm9uTG9hZFZpZXdEZXRhaWwodGhpcy5jYXRlZ29yaWVzKVxyXG4gIH1cclxuXHJcbn1cclxuIiwiPG1haW4+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY29udGVudFwiPlxyXG4gICAgICAgIDxmb3JtICpuZ0lmPVwiIXNob3dNb2RlXCIgW2Zvcm1Hcm91cF09XCJmb3JtXCIgaWQ9XCJmb3JtXCIgKHN1Ym1pdCk9XCJvblN1Ym1pdCgpXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXRlZ29yeVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRpdGxlLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgyPkludMOpZ3JhdGlvbiBwcm9maWwge3tjdXJyZW50VGVtcGxhdGU/Lk5hbWV9fSA8bWF0LWljb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPVwibWFyZ2luLWxlZnQ6IDIwcHg7IGN1cnNvcjogcG9pbnRlcjtcIiAoY2xpY2spPVwib25TaG93TW9kZSgpXCI+dmlzaWJpbGl0eTwvbWF0LWljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG1hdC1idXR0b24gW2Rpc2FibGVkXT1cImxvYWRpbmdcIiBjbGFzcz1cInJlZ2lzdGVyLWJ1dHRvblwiIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwib25SZXN1bWVMYXRlcigpXCI+e3tyZXN1bWVMYWJlbH19PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJmaWVsZHNcIiBjbGFzcz1cImZpZWxkc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIFtuZ3hTY3JvbGxUb109XCInIycrY2F0ZWdvcnkubmFtZVwiIGNsYXNzPVwibWVudS1pdGVtXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICpuZ0Zvcj1cImxldCBjYXRlZ29yeSBvZiBjYXRlZ29yaWVzOyAgbGV0IGk9aW5kZXhcIiBbaWRdPVwiY2F0ZWdvcnkubmFtZSsneCdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPnt7Y2F0ZWdvcnkubmFtZX19PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhdGVnb3J5LWNvbnRhaW5lclwiIChzY3JvbGwpPVwib25TY3JvbGwoJGV2ZW50KVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzcz1cImNhdGVnb3J5LWl0ZW0gY29udGVudC1pdGVtXCIgKm5nRm9yPVwibGV0IGNhdGVnb3J5IG9mIGNhdGVnb3JpZXM7ICBsZXQgaT1pbmRleFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbaWRdPVwiY2F0ZWdvcnkubmFtZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpZWxkLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmllbGQtaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2F0ZWdvcnktdGl0bGUtZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzcz1cImNhdGVnb3J5LW5hbWVcIj57e2NhdGVnb3J5Lm5hbWV9fTwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBMaXN0ZXMgZGVzIGluZm9ybWF0aW9ucyBuw6ljZXNzYWlyZXMgcG91ciBsYSBjcsOpYXRpb24gZGUge3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXROYW1lU3RhcnQoY2F0ZWdvcnkubmFtZSkgPyBcImwnXCIgKyBjYXRlZ29yeS5uYW1lIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeS5uYW1lIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tIDxtYXQtc2VsZWN0IHBsYWNlaG9sZGVyPVwiQ29tcGFueVwiIFsobmdNb2RlbCldPVwiY2F0ZWdvcnkuc2VsZWN0b3IudmFsdWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW25nTW9kZWxPcHRpb25zXT1cIntzdGFuZGFsb25lOiB0cnVlfVwiIHJlcXVpcmVkICpuZ0lmPVwiY2F0ZWdvcnkuc2VsZWN0b3JcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9XCJ3aWR0aDogMTUwcHg7XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bWF0LW9wdGlvbiAqbmdGb3I9XCJsZXQgc2VsZWN0IG9mIGNhdGVnb3J5LnNlbGVjdG9yLmRlZmF1bHRWYWx1ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3ZhbHVlXT1cInNlbGVjdC52YWx1ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7c2VsZWN0LnZhbHVlfX08L21hdC1vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbWF0LXNlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG1hdC1zZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICpuZ0lmPVwiY2F0ZWdvcnkudGlja2V0VHlwZT8udmFsdWUgJiYgY2F0ZWdvcnkuc2VsZWN0b3IudmFsdWU9PT0nTm93dGVhbSdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJUeXBlIGRlIHRpY2tldFwiIFsobmdNb2RlbCldPVwiY2F0ZWdvcnkudGlja2V0VHlwZS52YWx1ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbbmdNb2RlbE9wdGlvbnNdPVwie3N0YW5kYWxvbmU6IHRydWV9XCIgcmVxdWlyZWQgc3R5bGU9XCJ3aWR0aDogMTUwcHg7XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bWF0LW9wdGlvbiAqbmdGb3I9XCJsZXQgc2VsZWN0IG9mIGNhdGVnb3J5LnRpY2tldFR5cGUuZGVmYXVsdFZhbHVlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbdmFsdWVdPVwic2VsZWN0LmtleVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7c2VsZWN0LnZhbHVlfX08L21hdC1vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbWF0LXNlbGVjdD4gLS0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhdGVnb3J5LWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmllbGQtY2F0ZWdvcnlcIiAqbmdGb3I9XCJsZXQgZmllbGQgb2YgY2F0ZWdvcnkuZm9ybXM7bGV0IGo9aW5kZXhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2lkXT1cImZpZWxkLmtleVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbc3R5bGUud2lkdGhdPVwiZmllbGQuZm9ybXMgPyAnMTAwJScgOiBmaWVsZFdpZHRoKGZpZWxkLnR5cGUsY2F0ZWdvcnkuZm9ybXMubGVuZ3RoLGopXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5uZXItbG9vcFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJmaWVsZC5leHBhbmRPbmJvYXJkaW5nICYmIG9uQ2hlY2tDb25kaXRpb25Mb2NhdGlvblZhbHVlKGZpZWxkLmlzQ29uZGl0aW9uYWwsZmllbGQuY29uZGl0aW9uTG9jYXRpb24sZmllbGQuY29uZGl0aW9uVmFsdWUpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpZWxkcy1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZHMtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGliLXN1Yi1jcmVhdGUtb25ib2FyZGluZyBbZmllbGRdPVwiZmllbGRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtsZW5ndGhdPVwiY2F0ZWdvcnk/LmZvcm1zPy5sZW5ndGhcIiBbaV09XCJpXCIgW2pdPVwialwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjaGlsZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5uZXItY2hpbGRcIiAqbmdJZj1cImZpZWxkLmZvcm1zICYmIGZpZWxkLnZhbHVlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5uZXItY2hpbGQtY29udGVudFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKm5nRm9yPVwibGV0IGNoaWxkIG9mIGZpZWxkLmZvcm1zO2xldCBrPWluZGV4XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbaWRdPVwiY2hpbGQua2V5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbc3R5bGUud2lkdGhdPVwiY2hpbGQuZm9ybXMgPyAnMTAwJScgOiBmaWVsZFdpZHRoKGNoaWxkLnR5cGUsZmllbGQuZm9ybXMubGVuZ3RoLGspXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlubmVyLWxvb3BcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqbmdJZj1cImNoaWxkLmV4cGFuZE9uYm9hcmRpbmcgJiYgb25DaGVja0NvbmRpdGlvbkxvY2F0aW9uVmFsdWUoY2hpbGQuaXNDb25kaXRpb25hbCxjaGlsZC5jb25kaXRpb25Mb2NhdGlvbixjaGlsZC5jb25kaXRpb25WYWx1ZSlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpZWxkcy1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmllbGRzLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaWItc3ViLWNyZWF0ZS1vbmJvYXJkaW5nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtmaWVsZF09XCJjaGlsZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtsZW5ndGhdPVwiZmllbGQ/LmZvcm1zPy5sZW5ndGhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbaV09XCJqXCIgW2pdPVwia1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChvbkNoZWNrVmFsdWUpPVwib25DaGVja1ZhbHVlKCRldmVudClcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNoaWxkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5uZXItY2hpbGRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICpuZ0lmPVwiY2hpbGQuZm9ybXMgJiYgY2hpbGQudmFsdWVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5uZXItY2hpbGQtY29udGVudFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICpuZ0Zvcj1cImxldCBjMiBvZiBjaGlsZC5mb3JtcztsZXQgbD1pbmRleFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtpZF09XCJjMi5rZXlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbc3R5bGUud2lkdGhdPVwiYzIuZm9ybXMgPyAnMTAwJScgOiBmaWVsZFdpZHRoKGMyLnR5cGUsY2hpbGQuZm9ybXMubGVuZ3RoLGwpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbm5lci1sb29wXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICpuZ0lmPVwiYzIuZXhwYW5kT25ib2FyZGluZyAmJiBvbkNoZWNrQ29uZGl0aW9uTG9jYXRpb25WYWx1ZShjMi5pc0NvbmRpdGlvbmFsLGMyLmNvbmRpdGlvbkxvY2F0aW9uLGMyLmNvbmRpdGlvblZhbHVlKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZmllbGRzLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZmllbGRzLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGliLXN1Yi1jcmVhdGUtb25ib2FyZGluZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2ZpZWxkXT1cImMyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtsZW5ndGhdPVwiY2hpbGQ/LmZvcm1zPy5sZW5ndGhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2ldPVwia1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbal09XCJsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChvbkNoZWNrVmFsdWUpPVwib25DaGVja1ZhbHVlKCRldmVudClcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImNoaWxkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saWItc3ViLWNyZWF0ZS1vbmJvYXJkaW5nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGliLXN1Yi1jcmVhdGUtb25ib2FyZGluZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGliLXN1Yi1jcmVhdGUtb25ib2FyZGluZz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYWN0aW9ucy1idXR0b25cIiBzdHlsZT1cIm1hcmdpbi1ib3R0b206IDUwcHg7XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIFtkaXNhYmxlZF09XCJsb2FkaW5nIHx8ICFmb3JtLnZhbGlkXCIgbWF0LWJ1dHRvbiBjbGFzcz1cInJlZ2lzdGVyLWJ1dHRvbiBzZW5kLWZvcm1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIj57e3N1Ym1pdExhYmVsfX08L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gW2Rpc2FibGVkXT1cImxvYWRpbmdcIiBtYXQtYnV0dG9uIGNsYXNzPVwicmVnaXN0ZXItYnV0dG9uIHJlc3VtZVwiIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJvblJlc3VtZUxhdGVyKClcIj57e3Jlc3VtZUxhYmVsfX08L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8bGliLW9uYm9hcmRpbmctZGV0YWlsICpuZ0lmPVwic2hvd01vZGVcIiAob25TaG93TW9kZSk9XCJvblNob3dNb2RlKClcIiBbZGV0YWlsVmlld109XCJkZXRhaWxWaWV3XCI+XHJcbiAgICAgICAgPC9saWItb25ib2FyZGluZy1kZXRhaWw+XHJcbiAgICA8L2Rpdj5cclxuXHJcbjwvbWFpbj4iXX0=