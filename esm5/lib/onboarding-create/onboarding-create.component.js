import { __assign, __awaiter, __generator, __values } from "tslib";
import { Component } from '@angular/core';
import { Validators } from "@angular/forms";
import { moveItemInArray, transferArrayItem } from "@angular/cdk/drag-drop";
import { UpdateProfilComponent } from '../components/update-profil/update-profil.component';
import { ExitConfirmComponent } from '../components/exit-confirm/exit-confirm.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "../onboarding.service";
import * as i3 from "@angular/router";
import * as i4 from "@angular/material/dialog";
import * as i5 from "@angular/common";
import * as i6 from "@angular/material/form-field";
import * as i7 from "@angular/material/select";
import * as i8 from "@angular/material/button";
import * as i9 from "@angular/material/core";
import * as i10 from "@nicky-lenaers/ngx-scroll-to";
import * as i11 from "@angular/material/icon";
import * as i12 from "../components/sub-onboarding-create/sub-onboarding-create.component";
function OnboardingCreateComponent_div_3_mat_option_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 10);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var template_r659 = ctx.$implicit;
    i0.ɵɵproperty("value", template_r659._id);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1("", template_r659.Name, " ");
} }
function OnboardingCreateComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    var _r661 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 4);
    i0.ɵɵelementStart(1, "h3");
    i0.ɵɵtext(2, " Onboarding de votre nouveau collaborateur ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "p");
    i0.ɵɵtext(4, "S\u00E9lectionnez le nom de votre profil afin de pouvoir d\u00E9marrer son onboarding.");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 5);
    i0.ɵɵelementStart(6, "mat-form-field", 6);
    i0.ɵɵelementStart(7, "mat-label");
    i0.ɵɵtext(8, "Profil");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "mat-select", 7);
    i0.ɵɵlistener("selectionChange", function OnboardingCreateComponent_div_3_Template_mat_select_selectionChange_9_listener($event) { i0.ɵɵrestoreView(_r661); var ctx_r660 = i0.ɵɵnextContext(); return ctx_r660.onSelect($event.value); });
    i0.ɵɵtemplate(10, OnboardingCreateComponent_div_3_mat_option_10_Template, 2, 2, "mat-option", 8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "button", 9);
    i0.ɵɵlistener("click", function OnboardingCreateComponent_div_3_Template_button_click_11_listener() { i0.ɵɵrestoreView(_r661); var ctx_r662 = i0.ɵɵnextContext(); return ctx_r662.onSelectContactTemplate(); });
    i0.ɵɵtext(12);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r656 = i0.ɵɵnextContext();
    var tmp_1_0 = null;
    var currVal_1 = ((tmp_1_0 = ctx_r656.form.get("TemplateId")) == null ? null : tmp_1_0.value) == "" ? 0.4 : 1;
    var tmp_2_0 = null;
    var currVal_2 = ((tmp_2_0 = ctx_r656.form.get("TemplateId")) == null ? null : tmp_2_0.value) == "";
    i0.ɵɵadvance(10);
    i0.ɵɵproperty("ngForOf", ctx_r656.templates);
    i0.ɵɵadvance(1);
    i0.ɵɵstyleProp("opacity", currVal_1);
    i0.ɵɵproperty("disabled", currVal_2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r656.id !== "0" ? "Modifier l\u2019onboarding" : "D\u00E9marrer l\u2019onboarding", " ");
} }
function OnboardingCreateComponent_div_4_li_6_mat_icon_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-icon");
    i0.ɵɵtext(1, "keyboard_arrow_right");
    i0.ɵɵelementEnd();
} }
function OnboardingCreateComponent_div_4_li_6_Template(rf, ctx) { if (rf & 1) {
    var _r669 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 20);
    i0.ɵɵlistener("click", function OnboardingCreateComponent_div_4_li_6_Template_li_click_0_listener() { i0.ɵɵrestoreView(_r669); var i_r666 = ctx.index; var ctx_r668 = i0.ɵɵnextContext(2); return ctx_r668.onSelectMenu(i_r666); });
    i0.ɵɵelementStart(1, "span");
    i0.ɵɵelementStart(2, "span", 21);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(4, OnboardingCreateComponent_div_4_li_6_mat_icon_4_Template, 2, 0, "mat-icon", 22);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var cat_r665 = ctx.$implicit;
    var i_r666 = ctx.index;
    var ctx_r663 = i0.ɵɵnextContext(2);
    i0.ɵɵclassMap(ctx_r663.selectedMenu === i_r666 ? "active" : "");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngxScrollTo", "#" + cat_r665.name);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(cat_r665.name);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r663.checkSubForm(cat_r665.forms));
} }
function OnboardingCreateComponent_div_4_div_11_div_7_div_1_div_5_div_1_div_1_div_5_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    var _r687 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 31);
    i0.ɵɵelementStart(1, "div", 32);
    i0.ɵɵelementStart(2, "div", 33);
    i0.ɵɵelementStart(3, "lib-sub-create-onboarding", 34);
    i0.ɵɵlistener("onDrop", function OnboardingCreateComponent_div_4_div_11_div_7_div_1_div_5_div_1_div_1_div_5_div_1_div_1_Template_lib_sub_create_onboarding_onDrop_3_listener($event) { i0.ɵɵrestoreView(_r687); var ctx_r686 = i0.ɵɵnextContext(10); return ctx_r686.drop($event); });
    i0.ɵɵelement(4, "div", 35);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r688 = i0.ɵɵnextContext();
    var c2_r683 = ctx_r688.$implicit;
    var l_r684 = ctx_r688.index;
    var ctx_r689 = i0.ɵɵnextContext(3);
    var child_r678 = ctx_r689.$implicit;
    var k_r679 = ctx_r689.index;
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("field", c2_r683)("length", child_r678 == null ? null : child_r678.forms == null ? null : child_r678.forms.length)("i", k_r679)("j", l_r684);
} }
function OnboardingCreateComponent_div_4_div_11_div_7_div_1_div_5_div_1_div_1_div_5_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 39);
    i0.ɵɵtemplate(1, OnboardingCreateComponent_div_4_div_11_div_7_div_1_div_5_div_1_div_1_div_5_div_1_div_1_Template, 5, 4, "div", 30);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var c2_r683 = ctx.$implicit;
    var ctx_r682 = i0.ɵɵnextContext(9);
    i0.ɵɵproperty("id", c2_r683.key);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", c2_r683.expandOnboarding && ctx_r682.onCheckConditionLocationValue(c2_r683.isConditional, c2_r683.conditionLocation, c2_r683.conditionValue));
} }
function OnboardingCreateComponent_div_4_div_11_div_7_div_1_div_5_div_1_div_1_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 37);
    i0.ɵɵtemplate(1, OnboardingCreateComponent_div_4_div_11_div_7_div_1_div_5_div_1_div_1_div_5_div_1_Template, 2, 2, "div", 38);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var child_r678 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", child_r678.forms);
} }
function OnboardingCreateComponent_div_4_div_11_div_7_div_1_div_5_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    var _r692 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 31);
    i0.ɵɵelementStart(1, "div", 32);
    i0.ɵɵelementStart(2, "div", 33);
    i0.ɵɵelementStart(3, "lib-sub-create-onboarding", 34);
    i0.ɵɵlistener("onDrop", function OnboardingCreateComponent_div_4_div_11_div_7_div_1_div_5_div_1_div_1_Template_lib_sub_create_onboarding_onDrop_3_listener($event) { i0.ɵɵrestoreView(_r692); var ctx_r691 = i0.ɵɵnextContext(7); return ctx_r691.drop($event); });
    i0.ɵɵelementStart(4, "div", 35);
    i0.ɵɵtemplate(5, OnboardingCreateComponent_div_4_div_11_div_7_div_1_div_5_div_1_div_1_div_5_Template, 2, 1, "div", 36);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r693 = i0.ɵɵnextContext();
    var child_r678 = ctx_r693.$implicit;
    var k_r679 = ctx_r693.index;
    var ctx_r694 = i0.ɵɵnextContext(3);
    var field_r673 = ctx_r694.$implicit;
    var j_r674 = ctx_r694.index;
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("field", child_r678)("length", field_r673 == null ? null : field_r673.forms == null ? null : field_r673.forms.length)("i", j_r674)("j", k_r679);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", child_r678.forms);
} }
function OnboardingCreateComponent_div_4_div_11_div_7_div_1_div_5_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 39);
    i0.ɵɵtemplate(1, OnboardingCreateComponent_div_4_div_11_div_7_div_1_div_5_div_1_div_1_Template, 6, 5, "div", 30);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var child_r678 = ctx.$implicit;
    var ctx_r677 = i0.ɵɵnextContext(6);
    i0.ɵɵproperty("id", child_r678.key);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", child_r678.expandOnboarding && ctx_r677.onCheckConditionLocationValue(child_r678.isConditional, child_r678.conditionLocation, child_r678.conditionValue));
} }
function OnboardingCreateComponent_div_4_div_11_div_7_div_1_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 37);
    i0.ɵɵtemplate(1, OnboardingCreateComponent_div_4_div_11_div_7_div_1_div_5_div_1_Template, 2, 2, "div", 38);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var field_r673 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", field_r673.forms);
} }
function OnboardingCreateComponent_div_4_div_11_div_7_div_1_Template(rf, ctx) { if (rf & 1) {
    var _r697 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 31);
    i0.ɵɵelementStart(1, "div", 32);
    i0.ɵɵelementStart(2, "div", 33);
    i0.ɵɵelementStart(3, "lib-sub-create-onboarding", 34);
    i0.ɵɵlistener("onDrop", function OnboardingCreateComponent_div_4_div_11_div_7_div_1_Template_lib_sub_create_onboarding_onDrop_3_listener($event) { i0.ɵɵrestoreView(_r697); var ctx_r696 = i0.ɵɵnextContext(4); return ctx_r696.drop($event); });
    i0.ɵɵelementStart(4, "div", 35);
    i0.ɵɵtemplate(5, OnboardingCreateComponent_div_4_div_11_div_7_div_1_div_5_Template, 2, 1, "div", 36);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r698 = i0.ɵɵnextContext();
    var field_r673 = ctx_r698.$implicit;
    var j_r674 = ctx_r698.index;
    var ctx_r699 = i0.ɵɵnextContext();
    var category_r670 = ctx_r699.$implicit;
    var i_r671 = ctx_r699.index;
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("field", field_r673)("length", category_r670 == null ? null : category_r670.forms == null ? null : category_r670.forms.length)("i", i_r671)("j", j_r674);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", field_r673.forms);
} }
function OnboardingCreateComponent_div_4_div_11_div_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 29);
    i0.ɵɵtemplate(1, OnboardingCreateComponent_div_4_div_11_div_7_div_1_Template, 6, 5, "div", 30);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var field_r673 = ctx.$implicit;
    var ctx_r672 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("id", field_r673.key);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", field_r673.expandOnboarding && ctx_r672.onCheckConditionLocationValue(field_r673.isConditional, field_r673.conditionLocation, field_r673.conditionValue));
} }
function OnboardingCreateComponent_div_4_div_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 23);
    i0.ɵɵelementStart(1, "div", 24);
    i0.ɵɵelementStart(2, "div", 25);
    i0.ɵɵelementStart(3, "h4", 26);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 27);
    i0.ɵɵelementContainerStart(6);
    i0.ɵɵtemplate(7, OnboardingCreateComponent_div_4_div_11_div_7_Template, 2, 2, "div", 28);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var category_r670 = ctx.$implicit;
    i0.ɵɵproperty("id", category_r670.name);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(category_r670.name);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", category_r670.forms);
} }
function OnboardingCreateComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 11);
    i0.ɵɵelementStart(1, "div", 12);
    i0.ɵɵelementStart(2, "div", 13);
    i0.ɵɵelementStart(3, "h3", 14);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "ol");
    i0.ɵɵtemplate(6, OnboardingCreateComponent_div_4_li_6_Template, 5, 5, "li", 15);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "button", 16);
    i0.ɵɵtext(8, " Soumettre ma fiche de poste ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "div", 17);
    i0.ɵɵelementStart(10, "div", 18);
    i0.ɵɵtemplate(11, OnboardingCreateComponent_div_4_div_11_Template, 8, 3, "div", 19);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r657 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1(" ", ctx_r657.currentTemplate == null ? null : ctx_r657.currentTemplate.Name, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r657.categories);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngForOf", ctx_r657.categories);
} }
var OnboardingCreateComponent = /** @class */ (function () {
    function OnboardingCreateComponent(fb, service, route, router, dialog) {
        this.fb = fb;
        this.service = service;
        this.route = route;
        this.router = router;
        this.dialog = dialog;
        this.currentProfil = {};
        this.canExit = true;
        this.tags = [];
        this.id = "0";
        this.parent = [];
        this.editIndex = null;
        this.showProfileName = false;
        this.selectedMenu = 0;
        this.matIconList = [
            { name: 'developer_board' },
            { name: 'contact_phone' },
            { name: 'contact_mail' },
            { name: 'play_circle_filled' },
            { name: 'control_camera' },
            { name: 'explicit' },
            { name: 'person' },
            { name: 'visibility' },
            { name: 'video_label' },
            { name: 'add_circle' },
            { name: 'watch_later' },
            { name: 'where_to_vote' },
            { name: 'work' },
            { name: 'web' },
            { name: 'whatshot' },
            { name: 'wifi' },
            { name: 'workspaces' },
            { name: 'wb_cloudy' },
            { name: 'waves' },
            { name: 'warning' },
            { name: 'space_das' }
        ];
        this.picto = "";
    }
    OnboardingCreateComponent.prototype.canDeactivate = function () {
        if (!this.canExit) {
            this.dialog.open(ExitConfirmComponent, {
                data: ''
            });
            return this.service.canExit$;
        }
        return true;
    };
    OnboardingCreateComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.onCreateDynamicForm();
                this.id = this.route.snapshot.paramMap.get("id");
                setTimeout(function () { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, this.service.getAllProfil()];
                            case 1:
                                _a.sent();
                                return [2 /*return*/];
                        }
                    });
                }); }, 500);
                this.service._templates.subscribe(function (data) {
                    _this.templates = data;
                });
                this.id = this.route.snapshot.paramMap.get("id");
                console.log(this.id);
                if (this.id !== "0") {
                    setTimeout(function () { return __awaiter(_this, void 0, void 0, function () {
                        var _a;
                        var _b;
                        return __generator(this, function (_c) {
                            switch (_c.label) {
                                case 0:
                                    _a = this;
                                    return [4 /*yield*/, this.service.getOnboarding(this.id)];
                                case 1:
                                    _a.currentOnboarding = _c.sent();
                                    console.log(this.currentOnboarding);
                                    this.form.patchValue(this.currentOnboarding);
                                    this.categories = this.currentOnboarding.categories;
                                    this.currentTemplate = (_b = this.currentOnboarding) === null || _b === void 0 ? void 0 : _b.vtemplates[0];
                                    this.onSelectContactTemplate();
                                    return [2 /*return*/];
                            }
                        });
                    }); }, 500);
                }
                return [2 /*return*/];
            });
        });
    };
    OnboardingCreateComponent.prototype.onCreateDynamicForm = function () {
        this.form = this.fb.group({
            TemplateId: [0, Validators.required]
        });
    };
    OnboardingCreateComponent.prototype.onSelectContactTemplate = function () {
        this.isSelected = true;
    };
    OnboardingCreateComponent.prototype.onSelect = function (id) {
        this.currentTemplate = this.templates.find(function (t) { return t._id === id; });
        this.categories = this.currentTemplate.categories;
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
    OnboardingCreateComponent.prototype.onChangeCategory = function () {
        var checkMandatory = function (field) { return !!field.value && field.isMandatory && field.type !== "checkbox_multiple" || field.isConditional || !field.isMandatory || field.type === "checkbox_multiple"; };
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
        return __awaiter(this, void 0, void 0, function () {
            var result, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        console.log(this.categories);
                        if (!(this.form.valid && this.onChangeCategory())) return [3 /*break*/, 7];
                        if (!(this.id !== "0")) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.service.updateOnboarding(__assign(__assign({}, this.form.value), { categories: this.categories, _id: this.id }))];
                    case 1:
                        _a = _b.sent();
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, this.service.createOnboarding(__assign(__assign({}, this.form.value), { categories: this.categories }))];
                    case 3:
                        _a = _b.sent();
                        _b.label = 4;
                    case 4:
                        result = _a;
                        if (!result) return [3 /*break*/, 6];
                        return [4 /*yield*/, this.service.getAllProfil()];
                    case 5:
                        _b.sent();
                        this.canExit = true;
                        console.log(this.service.mainPath + '/onboarding');
                        return [3 /*break*/, 7];
                    case 6:
                        console.log("errror......");
                        _b.label = 7;
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    OnboardingCreateComponent.prototype.onExpendMore = function (event) {
        var params = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            params[_i - 1] = arguments[_i];
        }
        if (event) {
            if (event.event) {
                event.event.preventDefault();
            }
            // if (event.field && !event.field.expandMore) {
            //   for (let i = 0; i < this.categories.length; i++) {
            //     this.categories[i].expandMore = false;
            //     if (this.categories[i].forms) {
            //       for (let j = 0; j < this.categories[i].forms.length; j++) {
            //         this.categories[i].forms[j].expandMore = false;
            //       }
            //     }
            //   }
            // }
        }
        if (params.length === 1) {
            this.categories[params[0]].defaultValue = !this.categories[params[0]].defaultValue;
        }
        else if (params.length === 2) {
            this.currentActive = String(params[0]) + String(params[1]);
            if (this.categories[params[0]].forms[params[1]].defaultValue) {
                this.categories[params[0]].forms[params[1]].defaultValue = false;
            }
            else {
                this.categories[params[0]].defaultValue = true;
                this.categories[params[0]].forms[params[1]].defaultValue = true;
            }
        }
        else if (params.length === 3) {
            if (this.categories[params[0]].forms[params[1]].forms[params[2]].defaultValue) {
                this.categories[params[0]].forms[params[1]].forms[params[2]].defaultValue = false;
            }
            else {
                this.categories[params[0]].defaultValue = true;
                this.categories[params[0]].forms[params[1]].defaultValue = true;
                this.categories[params[0]].forms[params[1]].forms[params[2]].defaultValue = true;
            }
        }
        else {
            if (this.categories[params[0]].forms[params[1]].forms[params[2]].forms[params[3]].defaultValue) {
                this.categories[params[0]].forms[params[1]].forms[params[2]].forms[params[3]].defaultValue = false;
            }
            else {
                this.categories[params[0]].defaultValue = true;
                this.categories[params[0]].forms[params[1]].defaultValue = true;
                this.categories[params[0]].forms[params[1]].forms[params[2]].defaultValue = true;
                this.categories[params[0]].forms[params[1]].forms[params[2]].forms[params[3]].defaultValue = true;
            }
        }
    };
    OnboardingCreateComponent.prototype.drop = function (event) {
        this.canExit = false;
        if (event.previousContainer === event.container) {
            moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
        }
        else {
            transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
        }
    };
    OnboardingCreateComponent.prototype.ingoreDefaultAction = function (e) {
        e.preventDefault();
    };
    OnboardingCreateComponent.prototype.onShowCategory = function () {
        this.showProfileName = !this.showProfileName;
    };
    OnboardingCreateComponent.prototype.onSelectPicto = function (e, picto) {
        e.preventDefault();
        this.canExit = false;
        this.form.patchValue({ Picto: picto });
        this.isPictoListShow = !this.isPictoListShow;
    };
    OnboardingCreateComponent.prototype.onShowPictoList = function (e) {
        e.preventDefault();
        this.isPictoListShow = !this.isPictoListShow;
    };
    OnboardingCreateComponent.prototype.openDialog = function () {
        var dialogRef = this.dialog.open(UpdateProfilComponent, {
            data: {
                matIconList: this.matIconList,
                form: this.form,
                tags: this.tags
            }
        });
        dialogRef.afterClosed().subscribe(function (confirmed) {
            if (confirmed) {
            }
        });
    };
    OnboardingCreateComponent.prototype.isExpanded = function (forms) {
        var e_2, _a;
        var isExpend = false;
        try {
            for (var forms_2 = __values(forms), forms_2_1 = forms_2.next(); !forms_2_1.done; forms_2_1 = forms_2.next()) {
                var form = forms_2_1.value;
                if (form.defaultValue) {
                    isExpend = true;
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
        var e_3, _a;
        var hasSubForm = false;
        try {
            for (var forms_3 = __values(forms), forms_3_1 = forms_3.next(); !forms_3_1.done; forms_3_1 = forms_3.next()) {
                var form = forms_3_1.value;
                if (form.forms && form.forms.length > 0) {
                    hasSubForm = true;
                    break;
                }
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (forms_3_1 && !forms_3_1.done && (_a = forms_3.return)) _a.call(forms_3);
            }
            finally { if (e_3) throw e_3.error; }
        }
        return hasSubForm;
    };
    OnboardingCreateComponent.prototype.onSelectMenu = function (i) {
        this.selectedMenu = i;
    };
    OnboardingCreateComponent.ɵfac = function OnboardingCreateComponent_Factory(t) { return new (t || OnboardingCreateComponent)(i0.ɵɵdirectiveInject(i1.FormBuilder), i0.ɵɵdirectiveInject(i2.OnboardingService), i0.ɵɵdirectiveInject(i3.ActivatedRoute), i0.ɵɵdirectiveInject(i3.Router), i0.ɵɵdirectiveInject(i4.MatDialog)); };
    OnboardingCreateComponent.ɵcmp = i0.ɵɵdefineComponent({ type: OnboardingCreateComponent, selectors: [["create-onboarding"]], decls: 5, vars: 3, consts: [[1, "content"], [3, "formGroup", "submit"], ["class", "select-contact", 4, "ngIf"], ["class", "category", 4, "ngIf"], [1, "select-contact"], [1, "select-template"], ["appearance", "outline", 1, "full-width"], ["formControlName", "TemplateId", "required", "", 3, "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], ["mat-raised-button", "", "color", "primary", 3, "disabled", "click"], [3, "value"], [1, "category"], [1, "side-bar"], [1, "summary"], [1, "template-title"], ["class", "li-title", 3, "class", "click", 4, "ngFor", "ngForOf"], ["mat-button", "", "type", "submit", 1, "register-button"], [1, "fields"], [1, "example-list", "mt-20"], ["class", "category-item", 3, "id", 4, "ngFor", "ngForOf"], [1, "li-title", 3, "click"], [3, "ngxScrollTo"], [4, "ngIf"], [1, "category-item", 3, "id"], [1, "field-content"], [1, "field-item"], [1, "category-name"], [1, "category-container"], ["class", "field-category", 3, "id", 4, "ngFor", "ngForOf"], [1, "field-category", 3, "id"], ["class", "inner-loop", 4, "ngIf"], [1, "inner-loop"], [1, "fields-content"], [1, "fields-container"], [3, "field", "length", "i", "j", "onDrop"], [1, "child"], ["class", "inner-child", 4, "ngIf"], [1, "inner-child"], ["class", "inner-child-content", 3, "id", 4, "ngFor", "ngForOf"], [1, "inner-child-content", 3, "id"]], template: function OnboardingCreateComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "main");
            i0.ɵɵelementStart(1, "div", 0);
            i0.ɵɵelementStart(2, "form", 1);
            i0.ɵɵlistener("submit", function OnboardingCreateComponent_Template_form_submit_2_listener() { return ctx.onSubmit(); });
            i0.ɵɵtemplate(3, OnboardingCreateComponent_div_3_Template, 13, 5, "div", 2);
            i0.ɵɵtemplate(4, OnboardingCreateComponent_div_4_Template, 12, 3, "div", 3);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("formGroup", ctx.form);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", !ctx.isSelected);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.isSelected);
        } }, directives: [i1.ɵangular_packages_forms_forms_y, i1.NgControlStatusGroup, i1.FormGroupDirective, i5.NgIf, i6.MatFormField, i6.MatLabel, i7.MatSelect, i1.NgControlStatus, i1.FormControlName, i1.RequiredValidator, i5.NgForOf, i8.MatButton, i9.MatOption, i10.ScrollToDirective, i11.MatIcon, i12.SubOnboardingCreateComponent], styles: ["main[_ngcontent-%COMP%]{background:no-repeat padding-box #f4f7f9;height:100vh;width:100%;display:flex;flex-direction:column;align-items:center}main[_ngcontent-%COMP%]   .disabled[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{background-color:transparent!important}main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{width:99%;height:100%;padding-left:1%}main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font:bold 32px/30px Nexa Text;letter-spacing:0;color:#171f26;padding-top:20px}main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font:20px/26px Nexa Text;letter-spacing:0;color:#171f26}main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   p.sub-title[_ngcontent-%COMP%]{max-width:400px}main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .select-contact[_ngcontent-%COMP%]{max-width:70%;margin:5% auto auto;background:no-repeat padding-box #fff;border:1px solid #dce4e9;border-radius:6px;padding:5%}main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .select-contact[_ngcontent-%COMP%]   .select-template[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;justify-content:space-between;margin-top:50px}main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .select-contact[_ngcontent-%COMP%]   .select-template[_ngcontent-%COMP%]   .full-width[_ngcontent-%COMP%]{width:40%}main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .select-contact[_ngcontent-%COMP%]   .select-template[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{float:right;text-align:center;border:1px solid #543cb6;border-radius:7px;padding:1em 2em;display:flex;align-items:center;background-color:transparent;font:bold 15px/17px Nexa;letter-spacing:0;color:#543cb6;-ms-grid-row-align:center;align-self:center;width:220px}main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .category[_ngcontent-%COMP%]   .onboarding-mat-stepper[_ngcontent-%COMP%]   mat-horizontal-stepper[_ngcontent-%COMP%]   .next-step[_ngcontent-%COMP%]{float:right}main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{display:flex;height:100%;width:100%}main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .select-contact[_ngcontent-%COMP%]{max-width:70%;margin:5% auto auto;background:no-repeat padding-box #fff;border:1px solid #dce4e9;border-radius:6px;padding:5%}main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .select-contact[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{float:right;text-align:center;border:1px solid #543cb6;border-radius:7px;padding:.7em 2em .5em;display:flex;align-items:center;background-color:transparent;font:bold 15px/17px Nexa;letter-spacing:0;color:#543cb6;align-self:flex-end}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]{width:786px;background:no-repeat padding-box #fff;border:1px solid #dce4e9;border-radius:6px;opacity:1;margin:auto;padding:0 25px;-ms-grid-row-align:center;align-self:center}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{text-align:center;font:900 32px/48px Nexa;letter-spacing:0;color:#171f26}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font:18px/24px Nexa Text;letter-spacing:0;color:#171f26}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .profil-name-content[_ngcontent-%COMP%]{display:flex;align-items:center;position:relative}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .profil-name-content[_ngcontent-%COMP%]   .add-picto[_ngcontent-%COMP%]{margin-right:15px;min-width:50px;width:30px;padding:9px 12px}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .profil-name-content[_ngcontent-%COMP%]   .add-picto[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin-right:10px}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .profil-name-content[_ngcontent-%COMP%]   .list-picto[_ngcontent-%COMP%]{position:absolute;height:200px;width:100%;background:no-repeat padding-box #fff;border:1px solid #171f26;border-radius:8px;top:100%;z-index:1}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .profil-name-content[_ngcontent-%COMP%]   .list-picto[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin:15px;border:none;font-size:40px}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .profil-name-content[_ngcontent-%COMP%]   .list-picto[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]:hover{color:#830b6b!important;cursor:pointer}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .box-title-content[_ngcontent-%COMP%]{width:100%;margin:25px auto}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font:900 32px/38px Nexa;letter-spacing:0;color:#171f26}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font:15px/26px Nexa Text;letter-spacing:0;color:#171f26;text-align:center}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .link-create-profil[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:center}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{text-align:center;border:1px solid #543cb6;border-radius:7px;padding:.7em 2em .5em;display:flex;align-items:center;background-color:transparent;font:bold 15px/17px Nexa;letter-spacing:0;color:#543cb6}main[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:space-between}.expand-button[_ngcontent-%COMP%]{color:#5a607f!important;background-color:transparent!important;box-shadow:none!important}.category-name[_ngcontent-%COMP%]{text-align:left;font:bold 22px/48px Nexa Text;letter-spacing:0;color:#171f26;padding-left:15px}.full-width[_ngcontent-%COMP%]{width:100%}.field-action[_ngcontent-%COMP%]{width:10%}.field-size[_ngcontent-%COMP%]{width:90%;margin:auto 2% auto auto}  .mat-form-field-appearance-fill .mat-form-field-flex{background-color:#fff}  .mat-form-field-appearance-outline .mat-form-field-infix{padding:.5em 0}  .mat-select{padding:.5em 0}  .mat-form-field-appearance-fill .mat-form-field-underline::before{background-color:transparent}  .mat-form-field-wrapper{padding-bottom:0!important}  mat-checkbox.form-field .mat-checkbox-checkmark-path{stroke:#000!important}[_nghost-%COMP%]     .mat-checkbox-checked.mat-accent .mat-checkbox-background, [_nghost-%COMP%]     .mat-checkbox-indeterminate.mat-accent .mat-checkbox-background{background-color:transparent}.category-action[_ngcontent-%COMP%]{display:flex;width:100%}.delete-field[_ngcontent-%COMP%]{margin:auto 2%}.radio-group[_ngcontent-%COMP%]   .mat-radio-button[_ngcontent-%COMP%]{margin-right:10px}.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary[_ngcontent-%COMP%]{background-color:#3f51b5;color:#fff;min-height:20px;font-size:10px}.move-icons[_ngcontent-%COMP%]{cursor:move}.category-item[_ngcontent-%COMP%], .cdk-drag-placeholder[_ngcontent-%COMP%]{display:flex;align-items:baseline;width:100%;border:1px solid #dce4e9;border-radius:8px;background-color:#fff;margin-top:10px;min-height:60px}.category-item[_ngcontent-%COMP%]   .left-action[_ngcontent-%COMP%], .cdk-drag-placeholder[_ngcontent-%COMP%]   .left-action[_ngcontent-%COMP%]{height:auto;background-color:#49a094;padding-top:7px;width:40px;-ms-grid-row-align:stretch;align-self:stretch;border-top-left-radius:8px;border-bottom-left-radius:8px}.category-item[_ngcontent-%COMP%]   .left-action[_ngcontent-%COMP%]   .transparent-button[_ngcontent-%COMP%], .cdk-drag-placeholder[_ngcontent-%COMP%]   .left-action[_ngcontent-%COMP%]   .transparent-button[_ngcontent-%COMP%]{background-color:transparent;box-shadow:none;width:40px;padding:0;margin:0;min-width:auto;color:#fff}.category-item[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%], .cdk-drag-placeholder[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%]{width:100%;-ms-grid-row-align:center;align-self:center}.category-item[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%], .cdk-drag-placeholder[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;border:transparent!important}.category-item[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]   .mat-form-field-wrapper[_ngcontent-%COMP%]   .mat-form-field-flex[_ngcontent-%COMP%]   .mat-form-field-outline[_ngcontent-%COMP%], .category-item[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%]   .mat-form-field-outline[_ngcontent-%COMP%], .cdk-drag-placeholder[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]   .mat-form-field-wrapper[_ngcontent-%COMP%]   .mat-form-field-flex[_ngcontent-%COMP%]   .mat-form-field-outline[_ngcontent-%COMP%], .cdk-drag-placeholder[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%]   .mat-form-field-outline[_ngcontent-%COMP%]{color:transparent!important}.category-item[_ngcontent-%COMP%]   .category-container[_ngcontent-%COMP%], .cdk-drag-placeholder[_ngcontent-%COMP%]   .category-container[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;justify-content:flex-start;align-items:flex-end}.cdk-drag-preview[_ngcontent-%COMP%]{box-sizing:border-box;border-radius:4px;opacity:1}.cdk-drag-preview[_ngcontent-%COMP%]   .expand-button[_ngcontent-%COMP%]{color:#5a607f!important;background-color:transparent!important;box-shadow:none!important;margin-right:28px!important}.cdk-drag-placeholder[_ngcontent-%COMP%]{opacity:0}.cdk-drag-animating[_ngcontent-%COMP%], .example-list.cdk-drop-list-dragging[_ngcontent-%COMP%]   .category-item[_ngcontent-%COMP%]:not(.cdk-drag-placeholder){transition:transform 250ms cubic-bezier(0,0,.2,1)}.child[_ngcontent-%COMP%]{margin-left:0}.child[_ngcontent-%COMP%]   .inner-child[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap}.category[_ngcontent-%COMP%]{display:flex;flex-direction:row;width:100vw}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]{width:250px;background-color:#fff;margin:10px 20px;border-radius:5px;border:1px solid #dbcbcb96}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:15px;border-bottom:1px solid #dbcbcb96;margin:10px;padding-bottom:5px;font-family:\"Nexa Text\";display:flex;flex-direction:column;justify-content:space-between;align-items:flex-start}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-weight:600}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin-left:15px;cursor:pointer}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   h3.template-title[_ngcontent-%COMP%]{font:900 24px/36px Nexa Text;letter-spacing:0;color:#171f26}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]{font-weight:600;margin-left:-27px;font-size:15px;list-style:none}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:5px;margin:5px auto;cursor:pointer;text-align:left;font:12px/19px Nexa Text;letter-spacing:0;color:#535760}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]{padding-left:0;margin-left:0}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.li-title[_ngcontent-%COMP%]{font-size:14px;font-weight:600;margin-right:10px}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.li-title[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:140px;outline:0;border:1px dashed grey}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.li-title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:inline-flex;align-items:center;width:100%}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.li-title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin-left:10px}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.li-title.active[_ngcontent-%COMP%], .category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.li-title[_ngcontent-%COMP%]:hover{background:no-repeat padding-box #e5e8ee;border-radius:5px}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.sub-title[_ngcontent-%COMP%]{list-style:none;padding-left:20px}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.sub-title.active[_ngcontent-%COMP%], .category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.sub-title.active[_ngcontent-%COMP%]::marker, .category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.sub-title[_ngcontent-%COMP%]:hover{font-weight:600;background:no-repeat padding-box #e5e8ee;border-radius:5px}.category[_ngcontent-%COMP%]   .fields[_ngcontent-%COMP%]{width:90%;max-height:100vh;overflow:auto;margin-right:.5%;overflow-x:hidden}.category[_ngcontent-%COMP%]   .disabled[_ngcontent-%COMP%]{background-color:#f4f7f9!important}.category[_ngcontent-%COMP%]   .expand-button[_ngcontent-%COMP%]{color:#5a607f!important;background-color:transparent!important;box-shadow:none!important;margin-right:28px!important}.category[_ngcontent-%COMP%]   .expand-button[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%]{font-size:40px}.category[_ngcontent-%COMP%]   .transparent-button[_ngcontent-%COMP%]{background-color:transparent;box-shadow:none;width:40px;padding:0;margin:0;margin-left:0!important;min-width:auto;color:#fff}.add-button-sub-category[_ngcontent-%COMP%]{width:95.5%!important;margin-bottom:22px;margin-left:22px}.add-button-container[_ngcontent-%COMP%]{background:no-repeat padding-box #fff;border:1px dashed #dce4e9;border-radius:8px;margin-top:10px;padding:10px;display:flex;justify-content:center;align-items:center;width:98.5%;margin-bottom:22px}.add-button-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{display:flex;align-items:center;background-color:transparent;border:none;cursor:pointer;font:17px/26px Nexa Text;letter-spacing:0;color:#c2c8d5;box-shadow:none}.add-category[_ngcontent-%COMP%]{border:1px dashed #c2c8d5;border-radius:5px;margin-left:10px;margin-bottom:10px;font:bold 12px/19px Nexa Text;letter-spacing:0;color:#c2c8d5;width:92%}.inner-loop[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]{display:flex;height:100%;margin:auto auto 20px;width:100%}.inner-loop[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]   .button-action[_ngcontent-%COMP%]{background-color:#6fe8d7;-ms-grid-row-align:stretch;align-self:stretch;margin-top:0;margin-left:20px;border-bottom-left-radius:8px;border-top-left-radius:8px}.inner-loop[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]   .button-action[_ngcontent-%COMP%]   .transparent-button[_ngcontent-%COMP%]{background-color:transparent;box-shadow:none;width:40px;padding:0;margin:0;min-width:auto;color:#fff}.inner-loop[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]   .child-2-background[_ngcontent-%COMP%]{background-color:#cffaf4!important}.inner-loop[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]   .child-3-background[_ngcontent-%COMP%]{background-color:#e5e8ee!important}.inner-loop[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]   .fields-container[_ngcontent-%COMP%]{width:100%;padding:10px}.inner-loop[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]   .fields-container[_ngcontent-%COMP%]   lib-sub-category[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;width:100%}.inner-loop[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]   .fields-container[_ngcontent-%COMP%]   lib-sub-category[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]   .button-action[_ngcontent-%COMP%]{background-color:#6fe8d7;height:100%;margin:auto 15px auto auto;display:flex}.inner-loop[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]   .fields-container[_ngcontent-%COMP%]   lib-sub-category[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]   .button-action[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{box-shadow:none;background-color:transparent;color:#fff}.side-bar[_ngcontent-%COMP%]{display:flex;flex-direction:column}.register-button[_ngcontent-%COMP%]{background:no-repeat padding-box #171f26!important;border:2px solid #192128!important;border-radius:8px;color:#fff!important;width:85%;margin-left:22px!important;border:none!important}"] });
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
    }], function () { return [{ type: i1.FormBuilder }, { type: i2.OnboardingService }, { type: i3.ActivatedRoute }, { type: i3.Router }, { type: i4.MatDialog }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib25ib2FyZGluZy1jcmVhdGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vb25ib2FyZGluZy8iLCJzb3VyY2VzIjpbImxpYi9vbmJvYXJkaW5nLWNyZWF0ZS9vbmJvYXJkaW5nLWNyZWF0ZS5jb21wb25lbnQudHMiLCJsaWIvb25ib2FyZGluZy1jcmVhdGUvb25ib2FyZGluZy1jcmVhdGUuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDbEQsT0FBTyxFQUEwQixVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUdwRSxPQUFPLEVBQWUsZUFBZSxFQUFFLGlCQUFpQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFekYsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0scURBQXFELENBQUM7QUFDNUYsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sbURBQW1ELENBQUM7Ozs7Ozs7Ozs7Ozs7OztJQ0s3RCxzQ0FBc0U7SUFBQSxZQUN0RTtJQUFBLGlCQUFhOzs7SUFEa0MseUNBQXNCO0lBQUMsZUFDdEU7SUFEc0Usa0RBQ3RFOzs7O0lBVmhCLDhCQUNJO0lBQUEsMEJBQ0k7SUFBQSwyREFDSjtJQUFBLGlCQUFLO0lBQ0wseUJBQUc7SUFBQSxzR0FBNEU7SUFBQSxpQkFBSTtJQUNuRiw4QkFDSTtJQUFBLHlDQUNJO0lBQUEsaUNBQVc7SUFBQSxzQkFBTTtJQUFBLGlCQUFZO0lBQzdCLHFDQUNJO0lBRDhDLHlPQUEwQztJQUN4RixnR0FBc0U7SUFFMUUsaUJBQWE7SUFDakIsaUJBQWlCO0lBQ2pCLGtDQUdJO0lBREEsK01BQW1DO0lBQ25DLGFBQ0o7SUFBQSxpQkFBUztJQUNiLGlCQUFNO0lBQ1YsaUJBQU07Ozs7Ozs7SUFWc0IsZ0JBQWtDO0lBQWxDLDRDQUFrQztJQUk5QyxlQUE2RDtJQUE3RCxvQ0FBNkQ7SUFDakUsb0NBQThDO0lBRTlDLGVBQ0o7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QUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksRUFBRTtnQkFDOUYsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO2FBQ3BHO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztnQkFDL0MsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztnQkFDaEUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7Z0JBQ2pGLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQzth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QUFrQjtZQUFsQixvQ0FBa0I7WUFDUSxlQUFtQjtZQUFuQixzQ0FBbUI7WUFvQnpCLGVBQWtCO1lBQWxCLHFDQUFrQjs7b0NEdkJwRDtDQXNWQyxBQTdVRCxJQTZVQztTQXhVWSx5QkFBeUI7a0RBQXpCLHlCQUF5QjtjQUxyQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjtnQkFDN0IsV0FBVyxFQUFFLG9DQUFvQztnQkFDakQsU0FBUyxFQUFFLENBQUMsb0NBQW9DLENBQUM7YUFDbEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUJ1aWxkZXIsIEZvcm1Hcm91cCwgVmFsaWRhdG9ycyB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xuaW1wb3J0IHsgT25ib2FyZGluZ1NlcnZpY2UgfSBmcm9tIFwiLi4vb25ib2FyZGluZy5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgQ2RrRHJhZ0Ryb3AsIG1vdmVJdGVtSW5BcnJheSwgdHJhbnNmZXJBcnJheUl0ZW0gfSBmcm9tIFwiQGFuZ3VsYXIvY2RrL2RyYWctZHJvcFwiO1xuaW1wb3J0IHsgTWF0RGlhbG9nIH0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsL2RpYWxvZ1wiO1xuaW1wb3J0IHsgVXBkYXRlUHJvZmlsQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tcG9uZW50cy91cGRhdGUtcHJvZmlsL3VwZGF0ZS1wcm9maWwuY29tcG9uZW50JztcbmltcG9ydCB7IEV4aXRDb25maXJtQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tcG9uZW50cy9leGl0LWNvbmZpcm0vZXhpdC1jb25maXJtLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJjcmVhdGUtb25ib2FyZGluZ1wiLFxuICB0ZW1wbGF0ZVVybDogXCIuL29uYm9hcmRpbmctY3JlYXRlLmNvbXBvbmVudC5odG1sXCIsXG4gIHN0eWxlVXJsczogW1wiLi9vbmJvYXJkaW5nLWNyZWF0ZS5jb21wb25lbnQuc2Nzc1wiXSxcbn0pXG5leHBvcnQgY2xhc3MgT25ib2FyZGluZ0NyZWF0ZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGZvcm06IEZvcm1Hcm91cDtcbiAgY3VycmVudFByb2ZpbDogYW55ID0ge307XG4gIGNhbkV4aXQ9dHJ1ZTtcbiAgdGFncyA9IFtdO1xuICBpZCA9IFwiMFwiO1xuICBwYXJlbnQgPSBbXTtcbiAgZWRpdEluZGV4PW51bGw7XG4gIHNob3dQcm9maWxlTmFtZSA9IGZhbHNlO1xuICBzZWxlY3RlZE1lbnU9MDtcbiAgdGVtcGxhdGVzOiBhbnk7XG4gIGNvbnRhY3RzOiBhbnk7XG4gIG1hdEljb25MaXN0ID0gW1xuICAgIHsgbmFtZTogJ2RldmVsb3Blcl9ib2FyZCcgfSxcbiAgICB7IG5hbWU6ICdjb250YWN0X3Bob25lJyB9LFxuICAgIHsgbmFtZTogJ2NvbnRhY3RfbWFpbCcgfSxcbiAgICB7IG5hbWU6ICdwbGF5X2NpcmNsZV9maWxsZWQnIH0sXG4gICAgeyBuYW1lOiAnY29udHJvbF9jYW1lcmEnIH0sXG4gICAgeyBuYW1lOiAnZXhwbGljaXQnIH0sXG4gICAgeyBuYW1lOiAncGVyc29uJyB9LFxuICAgIHsgbmFtZTogJ3Zpc2liaWxpdHknIH0sXG4gICAgeyBuYW1lOiAndmlkZW9fbGFiZWwnIH0sXG4gICAgeyBuYW1lOiAnYWRkX2NpcmNsZScgfSxcbiAgICB7IG5hbWU6ICd3YXRjaF9sYXRlcicgfSxcbiAgICB7IG5hbWU6ICd3aGVyZV90b192b3RlJyB9LFxuICAgIHsgbmFtZTogJ3dvcmsnIH0sXG4gICAgeyBuYW1lOiAnd2ViJyB9LFxuICAgIHsgbmFtZTogJ3doYXRzaG90JyB9LFxuICAgIHsgbmFtZTogJ3dpZmknIH0sXG4gICAgeyBuYW1lOiAnd29ya3NwYWNlcycgfSxcbiAgICB7IG5hbWU6ICd3Yl9jbG91ZHknIH0sXG4gICAgeyBuYW1lOiAnd2F2ZXMnIH0sXG4gICAgeyBuYW1lOiAnd2FybmluZycgfSxcbiAgICB7IG5hbWU6ICdzcGFjZV9kYXMnIH1cbiAgXTtcbiAgaXNQaWN0b0xpc3RTaG93OiBib29sZWFuO1xuICBwaWN0byA9IFwiXCI7XG4gIGN1cnJlbnRPbmJvYXJkaW5nOiBhbnk7XG4gIGN1cnJlbnRUZW1wbGF0ZTphbnlcbiAgaXNTZWxlY3RlZDogYm9vbGVhbjtcbiAgY3VycmVudFVzZXI6IGFueTtcbiAgY3VycmVudEFjdGl2ZTogYW55O1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGZiOiBGb3JtQnVpbGRlciwgXG4gICAgcHVibGljIHNlcnZpY2U6IE9uYm9hcmRpbmdTZXJ2aWNlLCBcbiAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSwgXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICBwcml2YXRlIGRpYWxvZzogTWF0RGlhbG9nXG4gICAgKSB7IH1cbiAgXG4gIGNhdGVnb3JpZXM6IGFueVxuXG4gIGNhbkRlYWN0aXZhdGUoKXtcbiAgICBpZighdGhpcy5jYW5FeGl0KXtcbiAgICAgIHRoaXMuZGlhbG9nLm9wZW4oRXhpdENvbmZpcm1Db21wb25lbnQse1xuICAgICAgICBkYXRhOicnXG4gICAgICB9KVxuICAgICAgcmV0dXJuIHRoaXMuc2VydmljZS5jYW5FeGl0JFxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZSAgICBcbiAgfVxuICBcbiAgYXN5bmMgbmdPbkluaXQoKSB7XG5cbiAgICB0aGlzLm9uQ3JlYXRlRHluYW1pY0Zvcm0oKTtcbiAgICB0aGlzLmlkID0gdGhpcy5yb3V0ZS5zbmFwc2hvdC5wYXJhbU1hcC5nZXQoXCJpZFwiKTtcblxuICAgIHNldFRpbWVvdXQoYXN5bmMgKCkgPT4ge1xuICAgICAgYXdhaXQgdGhpcy5zZXJ2aWNlLmdldEFsbFByb2ZpbCgpOyAgICAgIFxuICAgIH0sIDUwMCk7XG5cbiAgICB0aGlzLnNlcnZpY2UuX3RlbXBsYXRlcy5zdWJzY3JpYmUoKGRhdGEpID0+IHtcbiAgICAgIHRoaXMudGVtcGxhdGVzID0gZGF0YTtcbiAgICB9KTtcbiAgICB0aGlzLmlkID0gdGhpcy5yb3V0ZS5zbmFwc2hvdC5wYXJhbU1hcC5nZXQoXCJpZFwiKTtcbiAgICBjb25zb2xlLmxvZyh0aGlzLmlkKTtcbiAgICBpZiAodGhpcy5pZCAhPT0gXCIwXCIpIHtcbiAgICAgIHNldFRpbWVvdXQoYXN5bmMgKCkgPT4ge1xuICAgICAgICB0aGlzLmN1cnJlbnRPbmJvYXJkaW5nID0gYXdhaXQgdGhpcy5zZXJ2aWNlLmdldE9uYm9hcmRpbmcodGhpcy5pZCk7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuY3VycmVudE9uYm9hcmRpbmcpO1xuICAgICAgICB0aGlzLmZvcm0ucGF0Y2hWYWx1ZSh0aGlzLmN1cnJlbnRPbmJvYXJkaW5nKVxuICAgICAgICB0aGlzLmNhdGVnb3JpZXM9dGhpcy5jdXJyZW50T25ib2FyZGluZy5jYXRlZ29yaWVzO1xuICAgICAgICB0aGlzLmN1cnJlbnRUZW1wbGF0ZT10aGlzLmN1cnJlbnRPbmJvYXJkaW5nPy52dGVtcGxhdGVzWzBdXG4gICAgICAgIHRoaXMub25TZWxlY3RDb250YWN0VGVtcGxhdGUoKVxuICAgICAgfSwgNTAwKTtcbiAgICB9XG4gIH1cblxuICBvbkNyZWF0ZUR5bmFtaWNGb3JtKCkge1xuICAgIHRoaXMuZm9ybSA9IHRoaXMuZmIuZ3JvdXAoe1xuICAgICAgVGVtcGxhdGVJZDogWzAsIFZhbGlkYXRvcnMucmVxdWlyZWRdXG4gICAgfSk7XG4gIH1cblxuICBvblNlbGVjdENvbnRhY3RUZW1wbGF0ZSgpIHtcbiAgICB0aGlzLmlzU2VsZWN0ZWQgPSB0cnVlO1xuICB9XG5cblxuICBvblNlbGVjdChpZCkge1xuICAgIHRoaXMuY3VycmVudFRlbXBsYXRlPSB0aGlzLnRlbXBsYXRlcy5maW5kKCh0KSA9PiB0Ll9pZCA9PT0gaWQpO1xuICAgIHRoaXMuY2F0ZWdvcmllcyA9dGhpcy5jdXJyZW50VGVtcGxhdGUuY2F0ZWdvcmllc1xuICB9XG5cbiAgZXhpc3RTdWJGb3JtKGZvcm1zKXtcbiAgICBsZXQgZXhpc3Q9ZmFsc2U7XG4gICAgaWYoZm9ybXMpe1xuICAgICAgZm9yIChjb25zdCBzdWIgb2YgZm9ybXMpIHtcbiAgICAgICAgaWYoc3ViLmZvcm1zKXtcbiAgICAgICAgICBleGlzdD10cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBleGlzdFxuICB9XG5cbiAgb25DaGFuZ2VDYXRlZ29yeSgpIHtcbiAgICBjb25zdCBjaGVja01hbmRhdG9yeT0oZmllbGQpPT4gISFmaWVsZC52YWx1ZSAmJiBmaWVsZC5pc01hbmRhdG9yeSAmJiBmaWVsZC50eXBlIT09XCJjaGVja2JveF9tdWx0aXBsZVwiICB8fCBmaWVsZC5pc0NvbmRpdGlvbmFsICB8fCAhZmllbGQuaXNNYW5kYXRvcnkgfHwgZmllbGQudHlwZT09PVwiY2hlY2tib3hfbXVsdGlwbGVcIlxuICAgIHJldHVybiB0aGlzLmNhdGVnb3JpZXMuZXZlcnkoKGNhdCkgPT4gY2F0LmZvcm1zLmV2ZXJ5KChmaWVsZCkgPT4geyBcbiAgICAgIGlmKGZpZWxkLmZvcm1zKXtcbiAgICAgICAgIHJldHVybiBmaWVsZC5mb3Jtcy5ldmVyeSgoZm9ybSk9PntcbiAgICAgICAgICAgaWYoZm9ybS5mb3Jtcyl7XG4gICAgICAgICAgICAgIHJldHVybiBmb3JtLmZvcm1zLmV2ZXJ5KChjaGlsZCk9PntcbiAgICAgICAgICAgICAgICAgIHJldHVybiBjaGVja01hbmRhdG9yeShjaGlsZClcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgfVxuICAgICAgICAgICByZXR1cm4gY2hlY2tNYW5kYXRvcnkoZm9ybSlcbiAgICAgICAgIH0pXG4gICAgICB9XG4gICAgICByZXR1cm4gY2hlY2tNYW5kYXRvcnkoZmllbGQpXG4gICAgfSkpO1xuICB9XG5cblxuICBhc3luYyBvblN1Ym1pdCgpIHtcbiAgICBjb25zb2xlLmxvZyh0aGlzLmNhdGVnb3JpZXMpO1xuICAgIFxuICAgIGlmICh0aGlzLmZvcm0udmFsaWQgJiYgdGhpcy5vbkNoYW5nZUNhdGVnb3J5KCkpIHsgXG4gICAgICBjb25zdCByZXN1bHQgPVxuICAgICAgICB0aGlzLmlkICE9PSBcIjBcIlxuICAgICAgICAgID8gYXdhaXQgdGhpcy5zZXJ2aWNlLnVwZGF0ZU9uYm9hcmRpbmcoe1xuICAgICAgICAgICAgLi4udGhpcy5mb3JtLnZhbHVlLFxuICAgICAgICAgICAgY2F0ZWdvcmllczogdGhpcy5jYXRlZ29yaWVzLFxuICAgICAgICAgICAgX2lkOnRoaXMuaWRcbiAgICAgICAgICB9KVxuICAgICAgICAgIDogYXdhaXQgdGhpcy5zZXJ2aWNlLmNyZWF0ZU9uYm9hcmRpbmcoe1xuICAgICAgICAgICAgLi4udGhpcy5mb3JtLnZhbHVlLFxuICAgICAgICAgICAgY2F0ZWdvcmllczogdGhpcy5jYXRlZ29yaWVzXG4gICAgICAgICAgfSk7XG4gICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgIGF3YWl0IHRoaXMuc2VydmljZS5nZXRBbGxQcm9maWwoKTtcbiAgICAgICAgdGhpcy5jYW5FeGl0PXRydWU7IFxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnNlcnZpY2UubWFpblBhdGgrJy9vbmJvYXJkaW5nJyk7XG4gICAgICAgIC8vdGhpcy5yb3V0ZXIubmF2aWdhdGUoW3RoaXMuc2VydmljZS5tYWluUGF0aCsnL29uYm9hcmRpbmcnXSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmxvZyhcImVycnJvci4uLi4uLlwiKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuXG4gIG9uRXhwZW5kTW9yZShldmVudCwgLi4ucGFyYW1zKSB7XG4gICAgaWYgKGV2ZW50KSB7XG4gICAgICBpZiAoZXZlbnQuZXZlbnQpIHtcbiAgICAgICAgZXZlbnQuZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIH1cbiAgICAgIC8vIGlmIChldmVudC5maWVsZCAmJiAhZXZlbnQuZmllbGQuZXhwYW5kTW9yZSkge1xuICAgICAgLy8gICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY2F0ZWdvcmllcy5sZW5ndGg7IGkrKykge1xuICAgICAgLy8gICAgIHRoaXMuY2F0ZWdvcmllc1tpXS5leHBhbmRNb3JlID0gZmFsc2U7XG4gICAgICAvLyAgICAgaWYgKHRoaXMuY2F0ZWdvcmllc1tpXS5mb3Jtcykge1xuICAgICAgLy8gICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLmNhdGVnb3JpZXNbaV0uZm9ybXMubGVuZ3RoOyBqKyspIHtcbiAgICAgIC8vICAgICAgICAgdGhpcy5jYXRlZ29yaWVzW2ldLmZvcm1zW2pdLmV4cGFuZE1vcmUgPSBmYWxzZTtcbiAgICAgIC8vICAgICAgIH1cbiAgICAgIC8vICAgICB9XG4gICAgICAvLyAgIH1cbiAgICAgIC8vIH1cblxuICAgIH1cbiAgICBpZiAocGFyYW1zLmxlbmd0aCA9PT0gMSkge1xuICAgICAgdGhpcy5jYXRlZ29yaWVzW3BhcmFtc1swXV0uZGVmYXVsdFZhbHVlID0gIXRoaXMuY2F0ZWdvcmllc1twYXJhbXNbMF1dLmRlZmF1bHRWYWx1ZTtcbiAgICB9IGVsc2UgaWYgKHBhcmFtcy5sZW5ndGggPT09IDIpIHtcbiAgICAgIHRoaXMuY3VycmVudEFjdGl2ZT1TdHJpbmcocGFyYW1zWzBdKSArIFN0cmluZyhwYXJhbXNbMV0pXG4gICAgICBpZiAodGhpcy5jYXRlZ29yaWVzW3BhcmFtc1swXV0uZm9ybXNbcGFyYW1zWzFdXS5kZWZhdWx0VmFsdWUpIHtcbiAgICAgICAgdGhpcy5jYXRlZ29yaWVzW3BhcmFtc1swXV0uZm9ybXNbcGFyYW1zWzFdXS5kZWZhdWx0VmFsdWUgPSBmYWxzZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY2F0ZWdvcmllc1twYXJhbXNbMF1dLmRlZmF1bHRWYWx1ZSA9IHRydWU7XG4gICAgICAgIHRoaXMuY2F0ZWdvcmllc1twYXJhbXNbMF1dLmZvcm1zW3BhcmFtc1sxXV0uZGVmYXVsdFZhbHVlID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHBhcmFtcy5sZW5ndGggPT09IDMpIHtcbiAgICAgIGlmICh0aGlzLmNhdGVnb3JpZXNbcGFyYW1zWzBdXS5mb3Jtc1twYXJhbXNbMV1dLmZvcm1zW3BhcmFtc1syXV0uZGVmYXVsdFZhbHVlKSB7XG4gICAgICAgIHRoaXMuY2F0ZWdvcmllc1twYXJhbXNbMF1dLmZvcm1zW3BhcmFtc1sxXV0uZm9ybXNbcGFyYW1zWzJdXS5kZWZhdWx0VmFsdWUgPSBmYWxzZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY2F0ZWdvcmllc1twYXJhbXNbMF1dLmRlZmF1bHRWYWx1ZSA9IHRydWU7XG4gICAgICAgIHRoaXMuY2F0ZWdvcmllc1twYXJhbXNbMF1dLmZvcm1zW3BhcmFtc1sxXV0uZGVmYXVsdFZhbHVlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5jYXRlZ29yaWVzW3BhcmFtc1swXV0uZm9ybXNbcGFyYW1zWzFdXS5mb3Jtc1twYXJhbXNbMl1dLmRlZmF1bHRWYWx1ZSA9IHRydWU7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0aGlzLmNhdGVnb3JpZXNbcGFyYW1zWzBdXS5mb3Jtc1twYXJhbXNbMV1dLmZvcm1zW3BhcmFtc1syXV0uZm9ybXNbcGFyYW1zWzNdXS5kZWZhdWx0VmFsdWUpIHtcbiAgICAgICAgdGhpcy5jYXRlZ29yaWVzW3BhcmFtc1swXV0uZm9ybXNbcGFyYW1zWzFdXS5mb3Jtc1twYXJhbXNbMl1dLmZvcm1zW3BhcmFtc1szXV0uZGVmYXVsdFZhbHVlID0gZmFsc2U7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNhdGVnb3JpZXNbcGFyYW1zWzBdXS5kZWZhdWx0VmFsdWUgPSB0cnVlO1xuICAgICAgICB0aGlzLmNhdGVnb3JpZXNbcGFyYW1zWzBdXS5mb3Jtc1twYXJhbXNbMV1dLmRlZmF1bHRWYWx1ZSA9IHRydWU7XG4gICAgICAgIHRoaXMuY2F0ZWdvcmllc1twYXJhbXNbMF1dLmZvcm1zW3BhcmFtc1sxXV0uZm9ybXNbcGFyYW1zWzJdXS5kZWZhdWx0VmFsdWUgPSB0cnVlO1xuICAgICAgICB0aGlzLmNhdGVnb3JpZXNbcGFyYW1zWzBdXS5mb3Jtc1twYXJhbXNbMV1dLmZvcm1zW3BhcmFtc1syXV0uZm9ybXNbcGFyYW1zWzNdXS5kZWZhdWx0VmFsdWUgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGRyb3AoZXZlbnQ6IENka0RyYWdEcm9wPHN0cmluZ1tdPikge1xuICAgIHRoaXMuY2FuRXhpdD1mYWxzZTsgIFxuICAgIGlmIChldmVudC5wcmV2aW91c0NvbnRhaW5lciA9PT0gZXZlbnQuY29udGFpbmVyKSB7XG4gICAgICBtb3ZlSXRlbUluQXJyYXkoZXZlbnQuY29udGFpbmVyLmRhdGEsIGV2ZW50LnByZXZpb3VzSW5kZXgsIGV2ZW50LmN1cnJlbnRJbmRleCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRyYW5zZmVyQXJyYXlJdGVtKGV2ZW50LnByZXZpb3VzQ29udGFpbmVyLmRhdGEsIGV2ZW50LmNvbnRhaW5lci5kYXRhLCBldmVudC5wcmV2aW91c0luZGV4LCBldmVudC5jdXJyZW50SW5kZXgpO1xuICAgIH1cbiAgfVxuXG4gIGluZ29yZURlZmF1bHRBY3Rpb24oZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgfVxuICBvblNob3dDYXRlZ29yeSgpIHtcbiAgICB0aGlzLnNob3dQcm9maWxlTmFtZSA9ICF0aGlzLnNob3dQcm9maWxlTmFtZTtcbiAgfVxuXG4gIG9uU2VsZWN0UGljdG8oZSwgcGljdG8pIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5jYW5FeGl0PWZhbHNlOyAgXG4gICAgdGhpcy5mb3JtLnBhdGNoVmFsdWUoeyBQaWN0bzogcGljdG8gfSk7XG4gICAgdGhpcy5pc1BpY3RvTGlzdFNob3cgPSAhdGhpcy5pc1BpY3RvTGlzdFNob3c7XG4gIH1cblxuICBvblNob3dQaWN0b0xpc3QoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLmlzUGljdG9MaXN0U2hvdyA9ICF0aGlzLmlzUGljdG9MaXN0U2hvdztcbiAgfVxuIFxuICBvcGVuRGlhbG9nKCkge1xuICAgIGNvbnN0IGRpYWxvZ1JlZiA9IHRoaXMuZGlhbG9nLm9wZW4oVXBkYXRlUHJvZmlsQ29tcG9uZW50LHtcbiAgICAgIGRhdGE6e1xuICAgICAgICBtYXRJY29uTGlzdDp0aGlzLm1hdEljb25MaXN0LFxuICAgICAgICBmb3JtOnRoaXMuZm9ybSxcbiAgICAgICAgdGFnczp0aGlzLnRhZ3NcbiAgICAgIH1cbiAgICB9KTtcbiAgICBkaWFsb2dSZWYuYWZ0ZXJDbG9zZWQoKS5zdWJzY3JpYmUoKGNvbmZpcm1lZDogYm9vbGVhbikgPT4ge1xuICAgICAgaWYgKGNvbmZpcm1lZCkge1xuICAgICAgICBcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGlzRXhwYW5kZWQoZm9ybXM6YW55W10pe1xuICAgbGV0IGlzRXhwZW5kPWZhbHNlO1xuICAgIGZvciAoY29uc3QgZm9ybSBvZiBmb3Jtcykge1xuICAgICAgaWYoZm9ybS5kZWZhdWx0VmFsdWUpe1xuICAgICAgICBpc0V4cGVuZD10cnVlO1xuICAgICAgfVxuICAgICAgXG4gICAgfVxuICB9XG5cbiAgb25DaGVja0NvbmRpdGlvbkxvY2F0aW9uVmFsdWUoaXNjb25kaXRpb24sbG9jYXRpb24sIGNvbmRpdGlvblZhbHVlKXtcbiAgICBpZighaXNjb25kaXRpb24pe1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGlmKGxvY2F0aW9uLmxldmVsPT09MSl7XG4gICAgICBpZih0aGlzLmNhdGVnb3JpZXNbbG9jYXRpb24uY2F0ZWdvcnlJbmRleF0uZm9ybXNbbG9jYXRpb24uY3VycmVudEluZGV4XS50eXBlPT09J2NoZWNrYm94X211bHRpcGxlJyl7XG4gICAgICAgIGNvbnN0IGFycmF5PXRoaXMuY2F0ZWdvcmllc1tsb2NhdGlvbi5jYXRlZ29yeUluZGV4XS5mb3Jtc1tsb2NhdGlvbi5jdXJyZW50SW5kZXhdLmRlZmF1bHRWYWx1ZS5maWx0ZXIoKGNoZWNrKT0+Y2hlY2suY2hlY2tlZClcbiAgICAgICAgbGV0IGNoZWNrZWQ9ZmFsc2U7XG4gICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGlmIChhcnJheVtpXS52YWx1ZSA9PSBjb25kaXRpb25WYWx1ZSkge1xuICAgICAgICAgICAgICBjaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNoZWNrZWQ7XG4gICAgICB9ZWxzZXtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2F0ZWdvcmllc1tsb2NhdGlvbi5jYXRlZ29yeUluZGV4XS5mb3Jtc1tsb2NhdGlvbi5jdXJyZW50SW5kZXhdLnZhbHVlPT09Y29uZGl0aW9uVmFsdWVcbiAgICAgIH0gICAgIFxuICAgIH1lbHNlIGlmKGxvY2F0aW9uLmxldmVsPT09Mil7XG4gICAgICBpZih0aGlzLmNhdGVnb3JpZXNbbG9jYXRpb24uY2F0ZWdvcnlJbmRleF0uZm9ybXNbbG9jYXRpb24uZm9ybUluZGV4XS5mb3Jtc1tsb2NhdGlvbi5jdXJyZW50SW5kZXhdLnR5cGU9PT0nY2hlY2tib3hfbXVsdGlwbGUnKXtcbiAgICAgICAgY29uc3QgYXJyYXk9dGhpcy5jYXRlZ29yaWVzW2xvY2F0aW9uLmNhdGVnb3J5SW5kZXhdLmZvcm1zW2xvY2F0aW9uLmZvcm1JbmRleF0uZm9ybXNbbG9jYXRpb24uY3VycmVudEluZGV4XS5kZWZhdWx0VmFsdWUuZmlsdGVyKChjaGVjayk9PmNoZWNrLmNoZWNrZWQpXG4gICAgICAgIGxldCBjaGVja2VkPWZhbHNlO1xuICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBpZiAoYXJyYXlbaV0udmFsdWUgPT0gY29uZGl0aW9uVmFsdWUpIHtcbiAgICAgICAgICAgICAgY2hlY2tlZCA9IHRydWU7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjaGVja2VkO1xuICAgICAgfWVsc2V7XG4gICAgICAgIHJldHVybiB0aGlzLmNhdGVnb3JpZXNbbG9jYXRpb24uY2F0ZWdvcnlJbmRleF0uZm9ybXNbbG9jYXRpb24uZm9ybUluZGV4XS5mb3Jtc1tsb2NhdGlvbi5jdXJyZW50SW5kZXhdLnZhbHVlPT09Y29uZGl0aW9uVmFsdWVcbiAgICAgIH1cbiAgICB9ZWxzZSBpZihsb2NhdGlvbi5sZXZlbD09PTMpe1xuICAgICAgaWYodGhpcy5jYXRlZ29yaWVzW2xvY2F0aW9uLmNhdGVnb3J5SW5kZXhdLmZvcm1zW2xvY2F0aW9uLmZvcm1JbmRleF0uZm9ybXNbbG9jYXRpb24uc3ViSW5kZXhdLmZvcm1zW2xvY2F0aW9uLmN1cnJlbnRJbmRleF0udHlwZT09PSdjaGVja2JveF9tdWx0aXBsZScpe1xuICAgICAgICBjb25zdCBhcnJheT10aGlzLmNhdGVnb3JpZXNbbG9jYXRpb24uY2F0ZWdvcnlJbmRleF0uZm9ybXNbbG9jYXRpb24uZm9ybUluZGV4XS5mb3Jtc1tsb2NhdGlvbi5zdWJJbmRleF0uZm9ybXNbbG9jYXRpb24uY3VycmVudEluZGV4XS5kZWZhdWx0VmFsdWUuZmlsdGVyKChjaGVjayk9PmNoZWNrLmNoZWNrZWQpXG4gICAgICAgIGxldCBjaGVja2VkPWZhbHNlO1xuICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBpZiAoYXJyYXlbaV0udmFsdWUgPT0gY29uZGl0aW9uVmFsdWUpIHtcbiAgICAgICAgICAgICAgY2hlY2tlZCA9IHRydWU7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjaGVja2VkO1xuICAgICAgfWVsc2V7XG4gICAgICAgIHJldHVybiB0aGlzLmNhdGVnb3JpZXNbbG9jYXRpb24uY2F0ZWdvcnlJbmRleF0uZm9ybXNbbG9jYXRpb24uZm9ybUluZGV4XS5mb3Jtc1tsb2NhdGlvbi5zdWJJbmRleF0uZm9ybXNbbG9jYXRpb24uY3VycmVudEluZGV4XS52YWx1ZT09PWNvbmRpdGlvblZhbHVlXG4gICAgICB9XG4gICAgfWVsc2V7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cbiBcbiAgfVxuXG4gIGNoZWNrU3ViRm9ybShmb3Jtcyl7XG4gICAgbGV0IGhhc1N1YkZvcm09ZmFsc2U7XG4gICAgZm9yIChjb25zdCBmb3JtIG9mIGZvcm1zKSB7XG4gICAgICBpZihmb3JtLmZvcm1zICYmIGZvcm0uZm9ybXMubGVuZ3RoPjApe1xuICAgICAgICBoYXNTdWJGb3JtPXRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gaGFzU3ViRm9ybVxuICB9XG5cbiAgb25TZWxlY3RNZW51KGkpe1xuICAgIHRoaXMuc2VsZWN0ZWRNZW51PWlcbiAgfVxuXG59XG4iLCI8bWFpbj5cbiAgICA8ZGl2IGNsYXNzPVwiY29udGVudFwiPlxuICAgICAgICA8Zm9ybSBbZm9ybUdyb3VwXT1cImZvcm1cIiAoc3VibWl0KT1cIm9uU3VibWl0KClcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZWxlY3QtY29udGFjdFwiICpuZ0lmPVwiIWlzU2VsZWN0ZWRcIj5cbiAgICAgICAgICAgICAgICA8aDM+XG4gICAgICAgICAgICAgICAgICAgIE9uYm9hcmRpbmcgZGUgdm90cmUgbm91dmVhdSBjb2xsYWJvcmF0ZXVyXG4gICAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgICA8cD5Tw6lsZWN0aW9ubmV6IGxlIG5vbSBkZSB2b3RyZSBwcm9maWwgYWZpbiBkZSBwb3V2b2lyIGTDqW1hcnJlciBzb24gb25ib2FyZGluZy48L3A+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNlbGVjdC10ZW1wbGF0ZVwiPlxuICAgICAgICAgICAgICAgICAgICA8bWF0LWZvcm0tZmllbGQgY2xhc3M9XCJmdWxsLXdpZHRoXCIgYXBwZWFyYW5jZT1cIm91dGxpbmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxtYXQtbGFiZWw+UHJvZmlsPC9tYXQtbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bWF0LXNlbGVjdCBmb3JtQ29udHJvbE5hbWU9XCJUZW1wbGF0ZUlkXCIgcmVxdWlyZWQgKHNlbGVjdGlvbkNoYW5nZSk9XCJvblNlbGVjdCgkZXZlbnQudmFsdWUpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG1hdC1vcHRpb24gKm5nRm9yPVwibGV0IHRlbXBsYXRlIG9mIHRlbXBsYXRlc1wiIFt2YWx1ZV09XCJ0ZW1wbGF0ZS5faWRcIj57e3RlbXBsYXRlLk5hbWV9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbWF0LW9wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbWF0LXNlbGVjdD5cbiAgICAgICAgICAgICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBbc3R5bGUub3BhY2l0eV09XCJmb3JtLmdldCgnVGVtcGxhdGVJZCcpPy52YWx1ZT09JycgPyAwLjQgOiAxXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtkaXNhYmxlZF09XCJmb3JtLmdldCgnVGVtcGxhdGVJZCcpPy52YWx1ZT09JydcIiBtYXQtcmFpc2VkLWJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT0nb25TZWxlY3RDb250YWN0VGVtcGxhdGUoKSc+XG4gICAgICAgICAgICAgICAgICAgICAgICB7e2lkICE9PSBcIjBcIiA/ICdNb2RpZmllciBs4oCZb25ib2FyZGluZycgOidEw6ltYXJyZXIgbOKAmW9uYm9hcmRpbmcnfX1cbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXRlZ29yeVwiICpuZ0lmPVwiaXNTZWxlY3RlZFwiPlxuICAgICAgICAgICAgICAgIDwhLS0gPGRpdiBjbGFzcz1cImNhdGVnb3J5XCI+IC0tPlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNpZGUtYmFyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdW1tYXJ5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3M9XCJ0ZW1wbGF0ZS10aXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7Y3VycmVudFRlbXBsYXRlPy5OYW1lfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b2w+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwibGktdGl0bGVcIiAqbmdGb3I9XCJsZXQgY2F0IG9mIGNhdGVnb3JpZXM7ICBsZXQgaT1pbmRleFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtjbGFzc109XCJzZWxlY3RlZE1lbnU9PT1pID8nYWN0aXZlJzonJ1wiIChjbGljayk9XCJvblNlbGVjdE1lbnUoaSlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBbbmd4U2Nyb2xsVG9dPVwiJyMnK2NhdC5uYW1lXCI+e3tjYXQubmFtZX19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG1hdC1pY29uICpuZ0lmPVwiY2hlY2tTdWJGb3JtKGNhdC5mb3JtcylcIj5rZXlib2FyZF9hcnJvd19yaWdodDwvbWF0LWljb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9vbD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gbWF0LWJ1dHRvbiBjbGFzcz1cInJlZ2lzdGVyLWJ1dHRvblwiIHR5cGU9XCJzdWJtaXRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gPG1hdC1pY29uPmNoZWNrPC9tYXQtaWNvbj4gLS0+XG4gICAgICAgICAgICAgICAgICAgICAgICBTb3VtZXR0cmUgbWEgZmljaGUgZGUgcG9zdGVcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpZWxkc1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXhhbXBsZS1saXN0IG10LTIwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2F0ZWdvcnktaXRlbVwiICpuZ0Zvcj1cImxldCBjYXRlZ29yeSBvZiBjYXRlZ29yaWVzOyAgbGV0IGk9aW5kZXhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtpZF09XCJjYXRlZ29yeS5uYW1lXCI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmllbGQtY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmllbGQtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzPVwiY2F0ZWdvcnktbmFtZVwiPnt7Y2F0ZWdvcnkubmFtZX19PC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXRlZ29yeS1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpZWxkLWNhdGVnb3J5XCIgKm5nRm9yPVwibGV0IGZpZWxkIG9mIGNhdGVnb3J5LmZvcm1zO2xldCBqPWluZGV4XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2lkXT1cImZpZWxkLmtleVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5uZXItbG9vcFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqbmdJZj1cImZpZWxkLmV4cGFuZE9uYm9hcmRpbmcgJiYgb25DaGVja0NvbmRpdGlvbkxvY2F0aW9uVmFsdWUoZmllbGQuaXNDb25kaXRpb25hbCxmaWVsZC5jb25kaXRpb25Mb2NhdGlvbixmaWVsZC5jb25kaXRpb25WYWx1ZSlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZHMtY29udGVudFwiPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpZWxkcy1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpYi1zdWItY3JlYXRlLW9uYm9hcmRpbmcgW2ZpZWxkXT1cImZpZWxkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtsZW5ndGhdPVwiY2F0ZWdvcnk/LmZvcm1zPy5sZW5ndGhcIiBbaV09XCJpXCIgW2pdPVwialwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAob25Ecm9wKT1cImRyb3AoJGV2ZW50KVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNoaWxkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlubmVyLWNoaWxkXCIgKm5nSWY9XCJmaWVsZC5mb3Jtc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5uZXItY2hpbGQtY29udGVudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqbmdGb3I9XCJsZXQgY2hpbGQgb2YgZmllbGQuZm9ybXM7bGV0IGs9aW5kZXhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2lkXT1cImNoaWxkLmtleVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlubmVyLWxvb3BcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICpuZ0lmPVwiY2hpbGQuZXhwYW5kT25ib2FyZGluZyAmJiBvbkNoZWNrQ29uZGl0aW9uTG9jYXRpb25WYWx1ZShjaGlsZC5pc0NvbmRpdGlvbmFsLGNoaWxkLmNvbmRpdGlvbkxvY2F0aW9uLGNoaWxkLmNvbmRpdGlvblZhbHVlKVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZHMtY29udGVudFwiPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZHMtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGliLXN1Yi1jcmVhdGUtb25ib2FyZGluZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtmaWVsZF09XCJjaGlsZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2xlbmd0aF09XCJmaWVsZD8uZm9ybXM/Lmxlbmd0aFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2ldPVwialwiIFtqXT1cImtcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChvbkRyb3ApPVwiZHJvcCgkZXZlbnQpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNoaWxkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbm5lci1jaGlsZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqbmdJZj1cImNoaWxkLmZvcm1zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5uZXItY2hpbGQtY29udGVudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKm5nRm9yPVwibGV0IGMyIG9mIGNoaWxkLmZvcm1zO2xldCBsPWluZGV4XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbaWRdPVwiYzIua2V5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlubmVyLWxvb3BcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqbmdJZj1cImMyLmV4cGFuZE9uYm9hcmRpbmcgJiYgb25DaGVja0NvbmRpdGlvbkxvY2F0aW9uVmFsdWUoYzIuaXNDb25kaXRpb25hbCxjMi5jb25kaXRpb25Mb2NhdGlvbixjMi5jb25kaXRpb25WYWx1ZSlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmaWVsZHMtY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZmllbGRzLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaWItc3ViLWNyZWF0ZS1vbmJvYXJkaW5nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtmaWVsZF09XCJjMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtsZW5ndGhdPVwiY2hpbGQ/LmZvcm1zPy5sZW5ndGhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbaV09XCJrXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2pdPVwibFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChvbkRyb3ApPVwiZHJvcCgkZXZlbnQpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiY2hpbGRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saWItc3ViLWNyZWF0ZS1vbmJvYXJkaW5nPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saWItc3ViLWNyZWF0ZS1vbmJvYXJkaW5nPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpYi1zdWItY3JlYXRlLW9uYm9hcmRpbmc+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9mb3JtPlxuICAgIDwvZGl2PlxuXG48L21haW4+Il19