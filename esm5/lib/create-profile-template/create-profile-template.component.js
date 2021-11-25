import { __assign, __awaiter, __generator } from "tslib";
import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { ENTER, COMMA, SEMICOLON } from '@angular/cdk/keycodes';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "../onboarding.service";
import * as i3 from "@angular/router";
import * as i4 from "@angular/material/form-field";
import * as i5 from "@angular/material/input";
import * as i6 from "@angular/common";
import * as i7 from "@angular/material/select";
import * as i8 from "@angular/material/checkbox";
import * as i9 from "@angular/material/button";
import * as i10 from "@angular/material/core";
import * as i11 from "@angular/material/icon";
import * as i12 from "@angular/material/chips";
function CreateProfileTemplateComponent_mat_error_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-error");
    i0.ɵɵtext(1, " Profil est ");
    i0.ɵɵelementStart(2, "strong");
    i0.ɵɵtext(3, "requis");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
function CreateProfileTemplateComponent_mat_option_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 15);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var tag_r57 = ctx.$implicit;
    i0.ɵɵproperty("value", tag_r57);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(tag_r57);
} }
function CreateProfileTemplateComponent_div_24_mat_error_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-error");
    i0.ɵɵtext(1, " Cat\u00E9gorie est ");
    i0.ɵɵelementStart(2, "strong");
    i0.ɵɵtext(3, "requis");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
function CreateProfileTemplateComponent_div_24_div_10_mat_error_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-error");
    i0.ɵɵtext(1, " Label est ");
    i0.ɵɵelementStart(2, "strong");
    i0.ɵɵtext(3, "requis");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
var _c0 = function () { return { standalone: true }; };
function CreateProfileTemplateComponent_div_24_div_10_mat_form_field_18_Template(rf, ctx) { if (rf & 1) {
    var _r70 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-form-field", 22);
    i0.ɵɵelementStart(1, "mat-label");
    i0.ɵɵtext(2, "Valeur");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "input", 34);
    i0.ɵɵlistener("ngModelChange", function CreateProfileTemplateComponent_div_24_div_10_mat_form_field_18_Template_input_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r70); var field_r62 = i0.ɵɵnextContext().$implicit; return field_r62.value = $event; });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var field_r62 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngModelOptions", i0.ɵɵpureFunction0(2, _c0))("ngModel", field_r62.value);
} }
function CreateProfileTemplateComponent_div_24_div_10_div_19_Template(rf, ctx) { if (rf & 1) {
    var _r74 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 35);
    i0.ɵɵelementStart(1, "mat-checkbox", 36);
    i0.ɵɵlistener("ngModelChange", function CreateProfileTemplateComponent_div_24_div_10_div_19_Template_mat_checkbox_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r74); var field_r62 = i0.ɵɵnextContext().$implicit; return field_r62.value = $event; });
    i0.ɵɵtext(2, "Valeur");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var field_r62 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", field_r62.value)("ngModelOptions", i0.ɵɵpureFunction0(2, _c0));
} }
function CreateProfileTemplateComponent_div_24_div_10_mat_form_field_20_mat_chip_5_Template(rf, ctx) { if (rf & 1) {
    var _r82 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-chip", 42);
    i0.ɵɵlistener("removed", function CreateProfileTemplateComponent_div_24_div_10_mat_form_field_20_mat_chip_5_Template_mat_chip_removed_0_listener() { i0.ɵɵrestoreView(_r82); var option_r79 = ctx.$implicit; var j_r63 = i0.ɵɵnextContext(2).index; var i_r59 = i0.ɵɵnextContext().index; var ctx_r80 = i0.ɵɵnextContext(); return ctx_r80.removeKeyword(option_r79, i_r59, j_r63); });
    i0.ɵɵtext(1);
    i0.ɵɵelementStart(2, "mat-icon", 43);
    i0.ɵɵtext(3, "cancel");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var option_r79 = ctx.$implicit;
    i0.ɵɵproperty("selected", option_r79)("value", option_r79)("removable", true);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", option_r79, " ");
} }
function CreateProfileTemplateComponent_div_24_div_10_mat_form_field_20_Template(rf, ctx) { if (rf & 1) {
    var _r85 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-form-field", 35);
    i0.ɵɵelementStart(1, "mat-label");
    i0.ɵɵtext(2, " Valeur ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "mat-chip-list", 37, 38);
    i0.ɵɵtemplate(5, CreateProfileTemplateComponent_div_24_div_10_mat_form_field_20_mat_chip_5_Template, 4, 4, "mat-chip", 39);
    i0.ɵɵelementStart(6, "input", 40, 41);
    i0.ɵɵlistener("matChipInputTokenEnd", function CreateProfileTemplateComponent_div_24_div_10_mat_form_field_20_Template_input_matChipInputTokenEnd_6_listener($event) { i0.ɵɵrestoreView(_r85); var j_r63 = i0.ɵɵnextContext().index; var i_r59 = i0.ɵɵnextContext().index; var ctx_r84 = i0.ɵɵnextContext(); return ctx_r84.addKeywordFromInput($event, i_r59, j_r63); })("keyup", function CreateProfileTemplateComponent_div_24_div_10_mat_form_field_20_Template_input_keyup_6_listener($event) { i0.ɵɵrestoreView(_r85); var j_r63 = i0.ɵɵnextContext().index; var i_r59 = i0.ɵɵnextContext().index; var ctx_r88 = i0.ɵɵnextContext(); return ctx_r88.onKeyPress($event, i_r59, j_r63); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var _r76 = i0.ɵɵreference(4);
    var field_r62 = i0.ɵɵnextContext().$implicit;
    var ctx_r67 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngForOf", field_r62.value);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("matChipInputFor", _r76)("matChipInputAddOnBlur", true)("matChipInputSeparatorKeyCodes", ctx_r67.separatorKeysCodes);
} }
function CreateProfileTemplateComponent_div_24_div_10_Template(rf, ctx) { if (rf & 1) {
    var _r93 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 17);
    i0.ɵɵelementStart(1, "mat-form-field", 22);
    i0.ɵɵelementStart(2, "mat-label");
    i0.ɵɵtext(3, "Label");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "input", 23);
    i0.ɵɵlistener("ngModelChange", function CreateProfileTemplateComponent_div_24_div_10_Template_input_ngModelChange_4_listener($event) { i0.ɵɵrestoreView(_r93); var field_r62 = ctx.$implicit; return field_r62.label = $event; });
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(5, CreateProfileTemplateComponent_div_24_div_10_mat_error_5_Template, 4, 0, "mat-error", 4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "mat-form-field", 22);
    i0.ɵɵelementStart(7, "mat-label");
    i0.ɵɵtext(8, "Type");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "mat-select", 24);
    i0.ɵɵlistener("ngModelChange", function CreateProfileTemplateComponent_div_24_div_10_Template_mat_select_ngModelChange_9_listener($event) { i0.ɵɵrestoreView(_r93); var field_r62 = ctx.$implicit; return field_r62.type = $event; })("ngModelChange", function CreateProfileTemplateComponent_div_24_div_10_Template_mat_select_ngModelChange_9_listener() { i0.ɵɵrestoreView(_r93); var field_r62 = ctx.$implicit; var j_r63 = ctx.index; var i_r59 = i0.ɵɵnextContext().index; var ctx_r95 = i0.ɵɵnextContext(); return ctx_r95.onChangeType(field_r62.type, i_r59, j_r63); });
    i0.ɵɵelementStart(10, "mat-option", 25);
    i0.ɵɵtext(11, "Text");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "mat-option", 26);
    i0.ɵɵtext(13, "Radio");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "mat-option", 27);
    i0.ɵɵtext(15, "Selecteur");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "mat-option", 28);
    i0.ɵɵtext(17, "Checkbox");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(18, CreateProfileTemplateComponent_div_24_div_10_mat_form_field_18_Template, 4, 3, "mat-form-field", 29);
    i0.ɵɵtemplate(19, CreateProfileTemplateComponent_div_24_div_10_div_19_Template, 3, 3, "div", 30);
    i0.ɵɵtemplate(20, CreateProfileTemplateComponent_div_24_div_10_mat_form_field_20_Template, 8, 4, "mat-form-field", 30);
    i0.ɵɵelementStart(21, "button", 31);
    i0.ɵɵlistener("click", function CreateProfileTemplateComponent_div_24_div_10_Template_button_click_21_listener($event) { i0.ɵɵrestoreView(_r93); var i_r59 = i0.ɵɵnextContext().index; var ctx_r97 = i0.ɵɵnextContext(); return ctx_r97.onAddNewField($event, i_r59); });
    i0.ɵɵelementStart(22, "mat-icon");
    i0.ɵɵtext(23, "plus_one");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(24, "button", 32);
    i0.ɵɵlistener("click", function CreateProfileTemplateComponent_div_24_div_10_Template_button_click_24_listener($event) { i0.ɵɵrestoreView(_r93); var j_r63 = ctx.index; var i_r59 = i0.ɵɵnextContext().index; var ctx_r99 = i0.ɵɵnextContext(); return ctx_r99.onRemoveField($event, i_r59, j_r63); });
    i0.ɵɵelementStart(25, "mat-icon");
    i0.ɵɵtext(26, "delete");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(27, "mat-checkbox", 33);
    i0.ɵɵlistener("ngModelChange", function CreateProfileTemplateComponent_div_24_div_10_Template_mat_checkbox_ngModelChange_27_listener($event) { i0.ɵɵrestoreView(_r93); var field_r62 = ctx.$implicit; return field_r62.isMandatory = $event; });
    i0.ɵɵtext(28, "obligatoire");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var field_r62 = ctx.$implicit;
    var category_r58 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngModelOptions", i0.ɵɵpureFunction0(11, _c0))("ngModel", field_r62.label);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", field_r62.label === "");
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngModel", field_r62.type)("ngModelOptions", i0.ɵɵpureFunction0(12, _c0));
    i0.ɵɵadvance(9);
    i0.ɵɵproperty("ngIf", field_r62.type === "text" || field_r62.type === "");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", field_r62.type === "checkbox");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", field_r62.type == "radio" || field_r62.type == "select");
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("disabled", category_r58.forms.length < 2);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngModel", field_r62.isMandatory)("ngModelOptions", i0.ɵɵpureFunction0(13, _c0));
} }
function CreateProfileTemplateComponent_div_24_Template(rf, ctx) { if (rf & 1) {
    var _r104 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 16);
    i0.ɵɵelementStart(1, "div", 17);
    i0.ɵɵelementStart(2, "mat-form-field", 18);
    i0.ɵɵelementStart(3, "mat-label");
    i0.ɵɵtext(4, "Cat\u00E9gorie");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "input", 19);
    i0.ɵɵlistener("ngModelChange", function CreateProfileTemplateComponent_div_24_Template_input_ngModelChange_5_listener($event) { i0.ɵɵrestoreView(_r104); var category_r58 = ctx.$implicit; return category_r58.name = $event; });
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(6, CreateProfileTemplateComponent_div_24_mat_error_6_Template, 4, 0, "mat-error", 4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "div");
    i0.ɵɵelementStart(8, "button", 20);
    i0.ɵɵlistener("click", function CreateProfileTemplateComponent_div_24_Template_button_click_8_listener($event) { i0.ɵɵrestoreView(_r104); var i_r59 = ctx.index; var ctx_r105 = i0.ɵɵnextContext(); return ctx_r105.onRemoveCategory($event, i_r59); });
    i0.ɵɵtext(9, "Supprimer");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(10, CreateProfileTemplateComponent_div_24_div_10_Template, 29, 14, "div", 21);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var category_r58 = ctx.$implicit;
    var i_r59 = ctx.index;
    var ctx_r56 = i0.ɵɵnextContext();
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("readonly", ctx_r56.categories.length < 4)("ngModel", category_r58.name)("ngModelOptions", i0.ɵɵpureFunction0(6, _c0));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", category_r58.name == "");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("disabled", i_r59 < 3);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", category_r58.forms);
} }
var _c1 = function () { return ["/profil-list"]; };
var CreateProfileTemplateComponent = /** @class */ (function () {
    function CreateProfileTemplateComponent(fb, service, route, router) {
        this.fb = fb;
        this.service = service;
        this.route = route;
        this.router = router;
        this.validCategory = false;
        this.separatorKeysCodes = [ENTER, COMMA, SEMICOLON];
        this.currentProfil = {};
        this.tags = [];
        this.id = '';
        this.categories = [
            {
                name: 'Software',
                suffixEndpoint: 'category/software',
                forms: [
                    {
                        label: '',
                        value: null,
                        isMandatory: true,
                        type: 'text',
                    }
                ]
            },
            {
                name: 'Hardware',
                suffixEndpoint: 'category/hardware',
                forms: [
                    {
                        label: '',
                        value: null,
                        isMandatory: true,
                        type: 'text',
                    }
                ]
            },
            {
                name: 'Network',
                suffixEndpoint: 'category/network',
                forms: [
                    {
                        label: '',
                        value: null,
                        isMandatory: true,
                        type: 'text',
                    }
                ]
            }
        ];
    }
    CreateProfileTemplateComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        this.form = this.fb.group({
                            Name: ['', Validators.required],
                            Description: [''],
                            Tags: ['', Validators.required],
                            Status: [false, Validators.required]
                        });
                        _a = this;
                        return [4 /*yield*/, this.service.getAllTags()];
                    case 1:
                        _a.tags = _c.sent();
                        this.id = this.route.snapshot.paramMap.get('id');
                        if (!(this.id != '0')) return [3 /*break*/, 3];
                        _b = this;
                        return [4 /*yield*/, this.service.getProfil(this.id)];
                    case 2:
                        _b.currentProfil = _c.sent();
                        this.form.patchValue(this.currentProfil);
                        this.categories = this.currentProfil.categories;
                        _c.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    CreateProfileTemplateComponent.prototype.onAddNewCategory = function (e) {
        e.preventDefault();
        this.categories.push({
            name: '',
            forms: [
                {
                    label: '',
                    value: null,
                    isMandatory: true,
                    type: 'text',
                }
            ]
        });
    };
    CreateProfileTemplateComponent.prototype.onAddNewField = function (e, i) {
        e.preventDefault();
        this.categories[i].forms.push({
            label: '',
            value: null,
            isMandatory: true,
            type: 'text',
        });
    };
    CreateProfileTemplateComponent.prototype.onRemoveField = function (e, categoryIndex, fieldIndex) {
        e.preventDefault();
        this.categories[categoryIndex].forms.splice(fieldIndex, 1);
    };
    CreateProfileTemplateComponent.prototype.onRemoveCategory = function (e, i) {
        e.preventDefault();
        this.categories.splice(i, 1);
    };
    CreateProfileTemplateComponent.prototype.onChangeCategory = function () {
        return this.categories.every(function (cat) { return cat.name !== '' && cat.forms.every(function (field) { return field.label !== '' && field.type !== ''; }); });
    };
    CreateProfileTemplateComponent.prototype.onSubmit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!(this.form.valid && this.onChangeCategory())) return [3 /*break*/, 5];
                        console.log(this.form.value);
                        console.log(this.categories);
                        if (!(this.id !== '0')) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.service.updateProfil(__assign(__assign(__assign({}, this.currentProfil), this.form.value), { categories: this.categories }))];
                    case 1:
                        _a = _b.sent();
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, this.service.createProfil(__assign(__assign({}, this.form.value), { categories: this.categories }))];
                    case 3:
                        _a = _b.sent();
                        _b.label = 4;
                    case 4:
                        result = _a;
                        if (result) {
                            this.router.navigate(['/profil-list']);
                        }
                        else {
                            console.log('errror......');
                        }
                        return [3 /*break*/, 6];
                    case 5:
                        console.log('xxxxxxxxxxxxxxxxx', this.form.value);
                        _b.label = 6;
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    CreateProfileTemplateComponent.prototype.onChangeType = function (type, indexCategory, indexField) {
        if (type === 'select' || type === 'radio') {
            this.categories[indexCategory].forms[indexField].value = [];
        }
        else if (type === 'text') {
            this.categories[indexCategory].forms[indexField].value = '';
        }
        else {
            this.categories[indexCategory].forms[indexField].value = false;
        }
    };
    CreateProfileTemplateComponent.prototype.onKeyPress = function (event, indexCategory, indexField) {
        if (event.key === ';') {
            var exist = this.categories[indexCategory].forms[indexField].value.find(function (opt) {
                return opt.toLocaleLowerCase() ===
                    event.target.value.split(';')[0].toLocaleLowerCase();
            });
            if (!exist) {
                this.categories[indexCategory].forms[indexField].value.push(event.target.value.split(';')[0]);
                event.target.value = '';
            }
            else {
                event.target.value = '';
            }
        }
    };
    CreateProfileTemplateComponent.prototype.removeKeyword = function (keyword, indexCategory, indexField) {
        this.categories[indexCategory].forms[indexField].value = this.categories[indexCategory].forms[indexField].value.filter(function (option) { return option !== keyword; });
    };
    CreateProfileTemplateComponent.prototype.addKeywordFromInput = function (event, indexCategory, indexField) {
        var input = event.input;
        var value = event.value;
        if (value) {
            var exist = this.categories[indexCategory].forms[indexField].value.find(function (opt) {
                return opt.toLocaleLowerCase() === event.value.toLocaleLowerCase();
            });
            if (!exist) {
                this.categories[indexCategory].forms[indexField].value.push(value.trim());
                input.value = '';
                console.log("WWWWWWWWWWWW", event);
            }
            else {
                input.value = '';
                console.log("AAAAAAAAAAA", event);
            }
        }
    };
    CreateProfileTemplateComponent.ɵfac = function CreateProfileTemplateComponent_Factory(t) { return new (t || CreateProfileTemplateComponent)(i0.ɵɵdirectiveInject(i1.FormBuilder), i0.ɵɵdirectiveInject(i2.OnboardingService), i0.ɵɵdirectiveInject(i3.ActivatedRoute), i0.ɵɵdirectiveInject(i3.Router)); };
    CreateProfileTemplateComponent.ɵcmp = i0.ɵɵdefineComponent({ type: CreateProfileTemplateComponent, selectors: [["onboarding-create-profile-template"]], decls: 32, vars: 6, consts: [[1, "container"], [3, "formGroup", "submit"], ["appearance", "fill", 1, "example-full-width"], ["type", "text", "matInput", "", "formControlName", "Name", "placeholder", "Ex. Manager"], [4, "ngIf"], ["type", "text", "matInput", "", "formControlName", "Description", "placeholder", ""], ["formControlName", "Tags", "required", ""], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "Status"], [1, "category"], ["class", "category-item", 4, "ngFor", "ngForOf"], [1, "action"], ["mat-raised-button", "", "color", "primary", 3, "click"], ["role", "button", "mat-raised-button", "", "color", "basic", 3, "routerLink"], ["mat-raised-button", "", "color", "basic", "type", "submit"], [3, "value"], [1, "category-item"], [1, "field-item"], ["appearance", "fill", 1, "example-full-width", "input-category-name"], ["type", "text", "required", "", "matInput", "", "placeholder", "", 3, "readonly", "ngModel", "ngModelOptions", "ngModelChange"], ["mat-raised-button", "", "color", "warn", 3, "disabled", "click"], ["class", "field-item", 4, "ngFor", "ngForOf"], ["appearance", "fill", 1, "form-field", "field-size"], ["type", "text", "matInput", "", "required", "", "placeholder", "", 3, "ngModelOptions", "ngModel", "ngModelChange"], ["required", "", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["value", "text"], ["value", "radio"], ["value", "select"], ["value", "checkbox"], ["class", "form-field field-size", "appearance", "fill", 4, "ngIf"], ["class", "flex-auto w-30 field-size", 4, "ngIf"], ["mat-mini-fab", "", "color", "success", 3, "click"], ["mat-mini-fab", "", "color", "warn", 1, "delete-field", 3, "disabled", "click"], [1, "form-field", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["type", "text", "matInput", "", "placeholder", "", 3, "ngModelOptions", "ngModel", "ngModelChange"], [1, "flex-auto", "w-30", "field-size"], [3, "ngModel", "ngModelOptions", "ngModelChange"], ["aria-label", "Video keywords; let index=index", "multiple", ""], ["chipList", ""], ["style", "min-height: 25px;", 3, "selected", "value", "removable", "removed", 4, "ngFor", "ngForOf"], ["placeholder", "add...", 3, "matChipInputFor", "matChipInputAddOnBlur", "matChipInputSeparatorKeyCodes", "matChipInputTokenEnd", "keyup"], ["chipsInput", ""], [2, "min-height", "25px", 3, "selected", "value", "removable", "removed"], ["matChipRemove", ""]], template: function CreateProfileTemplateComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵelementStart(1, "h3");
            i0.ɵɵtext(2, "Cr\u00E9ation de profil");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "form", 1);
            i0.ɵɵlistener("submit", function CreateProfileTemplateComponent_Template_form_submit_3_listener() { return ctx.onSubmit(); });
            i0.ɵɵelementStart(4, "mat-form-field", 2);
            i0.ɵɵelementStart(5, "mat-label");
            i0.ɵɵtext(6, "Nom du profil");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(7, "input", 3);
            i0.ɵɵtemplate(8, CreateProfileTemplateComponent_mat_error_8_Template, 4, 0, "mat-error", 4);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(9, "mat-form-field", 2);
            i0.ɵɵelementStart(10, "mat-label");
            i0.ɵɵtext(11, "D\u00E9scription");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(12, "textarea", 5);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(13, "mat-form-field", 2);
            i0.ɵɵelementStart(14, "mat-label");
            i0.ɵɵtext(15, "Tags");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(16, "mat-select", 6);
            i0.ɵɵtemplate(17, CreateProfileTemplateComponent_mat_option_17_Template, 2, 2, "mat-option", 7);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(18, "mat-checkbox", 8);
            i0.ɵɵtext(19, "Active");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(20, "hr");
            i0.ɵɵelementStart(21, "div", 9);
            i0.ɵɵelementStart(22, "h2");
            i0.ɵɵtext(23, "Liste de cat\u00E9gories");
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(24, CreateProfileTemplateComponent_div_24_Template, 11, 7, "div", 10);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(25, "div", 11);
            i0.ɵɵelementStart(26, "button", 12);
            i0.ɵɵlistener("click", function CreateProfileTemplateComponent_Template_button_click_26_listener($event) { return ctx.onAddNewCategory($event); });
            i0.ɵɵtext(27, "Ajouter une cat\u00E9gorie");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(28, "a", 13);
            i0.ɵɵtext(29, "Liste des profils");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(30, "button", 14);
            i0.ɵɵtext(31, "Valider");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("formGroup", ctx.form);
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("ngIf", ctx.form.get("Name").hasError("required"));
            i0.ɵɵadvance(9);
            i0.ɵɵproperty("ngForOf", ctx.tags);
            i0.ɵɵadvance(7);
            i0.ɵɵproperty("ngForOf", ctx.categories);
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction0(5, _c1));
        } }, directives: [i1.ɵangular_packages_forms_forms_y, i1.NgControlStatusGroup, i1.FormGroupDirective, i4.MatFormField, i4.MatLabel, i5.MatInput, i1.DefaultValueAccessor, i1.NgControlStatus, i1.FormControlName, i6.NgIf, i7.MatSelect, i1.RequiredValidator, i6.NgForOf, i8.MatCheckbox, i9.MatButton, i9.MatAnchor, i3.RouterLinkWithHref, i4.MatError, i10.MatOption, i1.NgModel, i11.MatIcon, i12.MatChipList, i12.MatChipInput, i12.MatChip, i12.MatChipRemove], styles: [".container[_ngcontent-%COMP%]{max-width:98%;margin:50px auto auto;padding-bottom:50px}.container[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:space-between}.input-category-name[_ngcontent-%COMP%]{font-size:15px;font-weight:500}.example-full-width[_ngcontent-%COMP%]{width:100%}.field-item[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center}.field-action[_ngcontent-%COMP%]{width:10%}.field-size[_ngcontent-%COMP%]{width:90%;margin:auto 2% auto auto}hr[_ngcontent-%COMP%]{margin:50px 0}  .mat-form-field-appearance-fill .mat-form-field-flex{background-color:#fff}.category-aciton[_ngcontent-%COMP%]{display:flex;width:100%}.delete-field[_ngcontent-%COMP%]{margin:auto 2%}.radio-group[_ngcontent-%COMP%]   .mat-radio-button[_ngcontent-%COMP%]{margin-right:10px}.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary[_ngcontent-%COMP%]{background-color:#3f51b5;color:#fff;min-height:20px;font-size:10px}"] });
    return CreateProfileTemplateComponent;
}());
export { CreateProfileTemplateComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CreateProfileTemplateComponent, [{
        type: Component,
        args: [{
                selector: 'onboarding-create-profile-template',
                templateUrl: './create-profile-template.component.html',
                styleUrls: ['./create-profile-template.component.scss']
            }]
    }], function () { return [{ type: i1.FormBuilder }, { type: i2.OnboardingService }, { type: i3.ActivatedRoute }, { type: i3.Router }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLXByb2ZpbGUtdGVtcGxhdGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vb25ib2FyZGluZy8iLCJzb3VyY2VzIjpbImxpYi9jcmVhdGUtcHJvZmlsZS10ZW1wbGF0ZS9jcmVhdGUtcHJvZmlsZS10ZW1wbGF0ZS5jb21wb25lbnQudHMiLCJsaWIvY3JlYXRlLXByb2ZpbGUtdGVtcGxhdGUvY3JlYXRlLXByb2ZpbGUtdGVtcGxhdGUuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDbEQsT0FBTyxFQUEwQixVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNwRSxPQUFPLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0lDUzFELGlDQUNFO0lBQUEsNEJBQVc7SUFBQSw4QkFBUTtJQUFBLHNCQUFNO0lBQUEsaUJBQVM7SUFDcEMsaUJBQVk7OztJQWNWLHNDQUFtRDtJQUFBLFlBQU87SUFBQSxpQkFBYTs7O0lBQWxDLCtCQUFhO0lBQUMsZUFBTztJQUFQLDZCQUFPOzs7SUFxQnRELGlDQUNFO0lBQUEsb0NBQWM7SUFBQSw4QkFBUTtJQUFBLHNCQUFNO0lBQUEsaUJBQVM7SUFDdkMsaUJBQVk7OztJQWlCWixpQ0FDRTtJQUFBLDJCQUFVO0lBQUEsOEJBQVE7SUFBQSxzQkFBTTtJQUFBLGlCQUFTO0lBQ25DLGlCQUFZOzs7OztJQVlkLDBDQUNFO0lBQUEsaUNBQVc7SUFBQSxzQkFBTTtJQUFBLGlCQUFZO0lBQzdCLGlDQU9GO0lBSEksa1FBQXlCO0lBSjNCLGlCQU9GO0lBQUEsaUJBQWlCOzs7SUFKYixlQUFxQztJQUFyQywyREFBcUMsNEJBQUE7Ozs7SUFhekMsK0JBQ0U7SUFBQSx3Q0FBK0U7SUFBakUsOFBBQXlCO0lBQXdDLHNCQUFNO0lBQUEsaUJBQWU7SUFDdEcs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b21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUJ1aWxkZXIsIEZvcm1Hcm91cCwgVmFsaWRhdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEVOVEVSLCBDT01NQSwgU0VNSUNPTE9OIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2tleWNvZGVzJztcbmltcG9ydCB7IE1hdENoaXBJbnB1dEV2ZW50IH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY2hpcHMnO1xuaW1wb3J0IHsgT25ib2FyZGluZ1NlcnZpY2UgfSBmcm9tICcuLi9vbmJvYXJkaW5nLnNlcnZpY2UnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ29uYm9hcmRpbmctY3JlYXRlLXByb2ZpbGUtdGVtcGxhdGUnLFxuICB0ZW1wbGF0ZVVybDogJy4vY3JlYXRlLXByb2ZpbGUtdGVtcGxhdGUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9jcmVhdGUtcHJvZmlsZS10ZW1wbGF0ZS5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIENyZWF0ZVByb2ZpbGVUZW1wbGF0ZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGZvcm06IEZvcm1Hcm91cFxuICB2YWxpZENhdGVnb3J5ID0gZmFsc2VcbiAgc2VwYXJhdG9yS2V5c0NvZGVzID0gW0VOVEVSLCBDT01NQSwgU0VNSUNPTE9OXTtcbiAgY3VycmVudFByb2ZpbDogYW55ID0ge31cbiAgdGFncyA9IFtdXG4gIGlkOiBzdHJpbmcgPSAnJztcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBmYjogRm9ybUJ1aWxkZXIsIHByaXZhdGUgc2VydmljZTogT25ib2FyZGluZ1NlcnZpY2UsIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7IH1cbiAgY2F0ZWdvcmllczogYW55ID0gW1xuICAgIHtcbiAgICAgIG5hbWU6ICdTb2Z0d2FyZScsXG4gICAgICBzdWZmaXhFbmRwb2ludDogJ2NhdGVnb3J5L3NvZnR3YXJlJyxcbiAgICAgIGZvcm1zOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBsYWJlbDogJycsXG4gICAgICAgICAgdmFsdWU6IG51bGwsXG4gICAgICAgICAgaXNNYW5kYXRvcnk6IHRydWUsXG4gICAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgICB9XG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnSGFyZHdhcmUnLFxuICAgICAgc3VmZml4RW5kcG9pbnQ6ICdjYXRlZ29yeS9oYXJkd2FyZScsXG4gICAgICBmb3JtczogW1xuICAgICAgICB7XG4gICAgICAgICAgbGFiZWw6ICcnLFxuICAgICAgICAgIHZhbHVlOiBudWxsLFxuICAgICAgICAgIGlzTWFuZGF0b3J5OiB0cnVlLFxuICAgICAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ05ldHdvcmsnLFxuICAgICAgc3VmZml4RW5kcG9pbnQ6ICdjYXRlZ29yeS9uZXR3b3JrJyxcbiAgICAgIGZvcm1zOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBsYWJlbDogJycsXG4gICAgICAgICAgdmFsdWU6IG51bGwsXG4gICAgICAgICAgaXNNYW5kYXRvcnk6IHRydWUsXG4gICAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgICB9XG4gICAgICBdXG4gICAgfVxuICBdXG4gIGFzeW5jIG5nT25Jbml0KCkge1xuXG4gICAgdGhpcy5mb3JtID0gdGhpcy5mYi5ncm91cCh7XG4gICAgICBOYW1lOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgICAgRGVzY3JpcHRpb246IFsnJ10sXG4gICAgICBUYWdzOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgICAgU3RhdHVzOiBbZmFsc2UsIFZhbGlkYXRvcnMucmVxdWlyZWRdXG4gICAgfSlcbiAgICB0aGlzLnRhZ3MgPSBhd2FpdCB0aGlzLnNlcnZpY2UuZ2V0QWxsVGFncygpO1xuICAgIHRoaXMuaWQgPSB0aGlzLnJvdXRlLnNuYXBzaG90LnBhcmFtTWFwLmdldCgnaWQnKTtcbiAgICBpZiAodGhpcy5pZCAhPSAnMCcpIHtcbiAgICAgIHRoaXMuY3VycmVudFByb2ZpbCA9IGF3YWl0IHRoaXMuc2VydmljZS5nZXRQcm9maWwodGhpcy5pZCk7XG4gICAgICB0aGlzLmZvcm0ucGF0Y2hWYWx1ZSh0aGlzLmN1cnJlbnRQcm9maWwpO1xuICAgICAgdGhpcy5jYXRlZ29yaWVzID0gdGhpcy5jdXJyZW50UHJvZmlsLmNhdGVnb3JpZXM7XG4gICAgfVxuXG4gIH1cblxuICBvbkFkZE5ld0NhdGVnb3J5KGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICB0aGlzLmNhdGVnb3JpZXMucHVzaCh7XG4gICAgICBuYW1lOiAnJyxcbiAgICAgIGZvcm1zOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBsYWJlbDogJycsXG4gICAgICAgICAgdmFsdWU6IG51bGwsXG4gICAgICAgICAgaXNNYW5kYXRvcnk6IHRydWUsXG4gICAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgICB9XG4gICAgICBdXG4gICAgfSlcbiAgfVxuXG4gIG9uQWRkTmV3RmllbGQoZSwgaSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIHRoaXMuY2F0ZWdvcmllc1tpXS5mb3Jtcy5wdXNoKFxuICAgICAge1xuICAgICAgICBsYWJlbDogJycsXG4gICAgICAgIHZhbHVlOiBudWxsLFxuICAgICAgICBpc01hbmRhdG9yeTogdHJ1ZSxcbiAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgfVxuICAgIClcbiAgfVxuXG5cbiAgb25SZW1vdmVGaWVsZChlLCBjYXRlZ29yeUluZGV4LCBmaWVsZEluZGV4KSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgdGhpcy5jYXRlZ29yaWVzW2NhdGVnb3J5SW5kZXhdLmZvcm1zLnNwbGljZShmaWVsZEluZGV4LCAxKVxuICB9XG5cbiAgb25SZW1vdmVDYXRlZ29yeShlLCBpKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgdGhpcy5jYXRlZ29yaWVzLnNwbGljZShpLCAxKVxuICB9XG5cbiAgb25DaGFuZ2VDYXRlZ29yeSgpIHtcbiAgICByZXR1cm4gdGhpcy5jYXRlZ29yaWVzLmV2ZXJ5KChjYXQpID0+IGNhdC5uYW1lICE9PSAnJyAmJiBjYXQuZm9ybXMuZXZlcnkoKGZpZWxkKSA9PiBmaWVsZC5sYWJlbCAhPT0gJycgJiYgZmllbGQudHlwZSAhPT0gJycpXG4gICAgKTtcbiAgfVxuXG4gIGFzeW5jIG9uU3VibWl0KCkge1xuICAgIGlmICh0aGlzLmZvcm0udmFsaWQgJiYgdGhpcy5vbkNoYW5nZUNhdGVnb3J5KCkpIHtcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMuZm9ybS52YWx1ZSk7XG4gICAgICBjb25zb2xlLmxvZyh0aGlzLmNhdGVnb3JpZXMpO1xuICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5pZCAhPT0gJzAnID9cbiAgICAgICAgYXdhaXQgdGhpcy5zZXJ2aWNlLnVwZGF0ZVByb2ZpbCh7IC4uLnRoaXMuY3VycmVudFByb2ZpbCwgLi4uIHRoaXMuZm9ybS52YWx1ZSwgY2F0ZWdvcmllczogdGhpcy5jYXRlZ29yaWVzIH0pIDpcbiAgICAgICAgYXdhaXQgdGhpcy5zZXJ2aWNlLmNyZWF0ZVByb2ZpbCh7IC4uLiB0aGlzLmZvcm0udmFsdWUsIGNhdGVnb3JpZXM6IHRoaXMuY2F0ZWdvcmllcyB9KTtcbiAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvcHJvZmlsLWxpc3QnXSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdlcnJyb3IuLi4uLi4nKTtcblxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmxvZygneHh4eHh4eHh4eHh4eHh4eHgnLCB0aGlzLmZvcm0udmFsdWUpO1xuXG4gICAgfVxuICB9XG5cblxuICBvbkNoYW5nZVR5cGUodHlwZTogc3RyaW5nLCBpbmRleENhdGVnb3J5OiBudW1iZXIsIGluZGV4RmllbGQpIHtcbiAgICBpZiAodHlwZSA9PT0gJ3NlbGVjdCcgfHwgdHlwZSA9PT0gJ3JhZGlvJykge1xuICAgICAgdGhpcy5jYXRlZ29yaWVzW2luZGV4Q2F0ZWdvcnldLmZvcm1zW2luZGV4RmllbGRdLnZhbHVlID0gW107XG4gICAgfSBlbHNlIGlmICh0eXBlID09PSAndGV4dCcpIHtcbiAgICAgIHRoaXMuY2F0ZWdvcmllc1tpbmRleENhdGVnb3J5XS5mb3Jtc1tpbmRleEZpZWxkXS52YWx1ZSA9ICcnO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNhdGVnb3JpZXNbaW5kZXhDYXRlZ29yeV0uZm9ybXNbaW5kZXhGaWVsZF0udmFsdWUgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBvbktleVByZXNzKGV2ZW50OiBhbnksIGluZGV4Q2F0ZWdvcnksIGluZGV4RmllbGQpIHtcbiAgICBpZiAoZXZlbnQua2V5ID09PSAnOycpIHtcbiAgICAgIGNvbnN0IGV4aXN0ID0gdGhpcy5jYXRlZ29yaWVzW2luZGV4Q2F0ZWdvcnldLmZvcm1zW2luZGV4RmllbGRdLnZhbHVlLmZpbmQoXG4gICAgICAgIChvcHQpID0+XG4gICAgICAgICAgb3B0LnRvTG9jYWxlTG93ZXJDYXNlKCkgPT09XG4gICAgICAgICAgZXZlbnQudGFyZ2V0LnZhbHVlLnNwbGl0KCc7JylbMF0udG9Mb2NhbGVMb3dlckNhc2UoKVxuICAgICAgKTtcbiAgICAgIGlmICghZXhpc3QpIHtcbiAgICAgICAgdGhpcy5jYXRlZ29yaWVzW2luZGV4Q2F0ZWdvcnldLmZvcm1zW2luZGV4RmllbGRdLnZhbHVlLnB1c2goXG4gICAgICAgICAgZXZlbnQudGFyZ2V0LnZhbHVlLnNwbGl0KCc7JylbMF1cbiAgICAgICAgKTtcbiAgICAgICAgZXZlbnQudGFyZ2V0LnZhbHVlID0gJyc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBldmVudC50YXJnZXQudmFsdWUgPSAnJztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZW1vdmVLZXl3b3JkKGtleXdvcmQ6IHN0cmluZywgaW5kZXhDYXRlZ29yeTogbnVtYmVyLCBpbmRleEZpZWxkKSB7XG4gICAgdGhpcy5jYXRlZ29yaWVzW2luZGV4Q2F0ZWdvcnldLmZvcm1zW2luZGV4RmllbGRdLnZhbHVlID0gdGhpcy5jYXRlZ29yaWVzW1xuICAgICAgaW5kZXhDYXRlZ29yeVxuICAgIF0uZm9ybXNbaW5kZXhGaWVsZF0udmFsdWUuZmlsdGVyKChvcHRpb24pID0+IG9wdGlvbiAhPT0ga2V5d29yZCk7XG4gIH1cblxuICBhZGRLZXl3b3JkRnJvbUlucHV0KGV2ZW50OiBNYXRDaGlwSW5wdXRFdmVudCwgaW5kZXhDYXRlZ29yeTogbnVtYmVyLCBpbmRleEZpZWxkKSB7XG4gICAgY29uc3QgaW5wdXQgPSBldmVudC5pbnB1dDtcbiAgICBjb25zdCB2YWx1ZSA9IGV2ZW50LnZhbHVlO1xuICAgIGlmICh2YWx1ZSkge1xuICAgICAgY29uc3QgZXhpc3QgPSB0aGlzLmNhdGVnb3JpZXNbaW5kZXhDYXRlZ29yeV0uZm9ybXNbaW5kZXhGaWVsZF0udmFsdWUuZmluZChcbiAgICAgICAgKG9wdCkgPT5cbiAgICAgICAgICBvcHQudG9Mb2NhbGVMb3dlckNhc2UoKSA9PT0gZXZlbnQudmFsdWUudG9Mb2NhbGVMb3dlckNhc2UoKVxuICAgICAgKTtcbiAgICAgIGlmICghZXhpc3QpIHtcbiAgICAgICAgdGhpcy5jYXRlZ29yaWVzW2luZGV4Q2F0ZWdvcnldLmZvcm1zW2luZGV4RmllbGRdLnZhbHVlLnB1c2godmFsdWUudHJpbSgpKTtcbiAgICAgICAgaW5wdXQudmFsdWUgPSAnJzsgY29uc29sZS5sb2coXCJXV1dXV1dXV1dXV1dcIiwgZXZlbnQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaW5wdXQudmFsdWUgPSAnJztcbiAgICAgICAgY29uc29sZS5sb2coXCJBQUFBQUFBQUFBQVwiLCBldmVudCk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCI8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG4gIDxoMz5DcsOpYXRpb24gZGUgcHJvZmlsPC9oMz5cbiAgPGZvcm0gW2Zvcm1Hcm91cF09XCJmb3JtXCIgKHN1Ym1pdCk9XCJvblN1Ym1pdCgpXCI+XG4gICAgPG1hdC1mb3JtLWZpZWxkIGNsYXNzPVwiZXhhbXBsZS1mdWxsLXdpZHRoXCIgYXBwZWFyYW5jZT1cImZpbGxcIj5cbiAgICAgIDxtYXQtbGFiZWw+Tm9tIGR1IHByb2ZpbDwvbWF0LWxhYmVsPlxuICAgICAgPGlucHV0XG4gICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgbWF0SW5wdXRcbiAgICAgICAgZm9ybUNvbnRyb2xOYW1lPVwiTmFtZVwiXG4gICAgICAgIHBsYWNlaG9sZGVyPVwiRXguIE1hbmFnZXJcIlxuICAgICAgLz5cbiAgICAgIDxtYXQtZXJyb3IgKm5nSWY9XCJmb3JtLmdldCgnTmFtZScpLmhhc0Vycm9yKCdyZXF1aXJlZCcpXCI+XG4gICAgICAgIFByb2ZpbCBlc3QgPHN0cm9uZz5yZXF1aXM8L3N0cm9uZz5cbiAgICAgIDwvbWF0LWVycm9yPlxuICAgIDwvbWF0LWZvcm0tZmllbGQ+XG4gICAgPG1hdC1mb3JtLWZpZWxkIGNsYXNzPVwiZXhhbXBsZS1mdWxsLXdpZHRoXCIgYXBwZWFyYW5jZT1cImZpbGxcIj5cbiAgICAgIDxtYXQtbGFiZWw+RMOpc2NyaXB0aW9uPC9tYXQtbGFiZWw+XG4gICAgICA8dGV4dGFyZWFcbiAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICBtYXRJbnB1dFxuICAgICAgICBmb3JtQ29udHJvbE5hbWU9XCJEZXNjcmlwdGlvblwiXG4gICAgICAgIHBsYWNlaG9sZGVyPVwiXCJcbiAgICAgID48L3RleHRhcmVhPlxuICAgIDwvbWF0LWZvcm0tZmllbGQ+ICBcbiAgICA8bWF0LWZvcm0tZmllbGQgY2xhc3M9XCJleGFtcGxlLWZ1bGwtd2lkdGhcIiBhcHBlYXJhbmNlPVwiZmlsbFwiPlxuICAgICAgPG1hdC1sYWJlbD5UYWdzPC9tYXQtbGFiZWw+XG4gICAgICA8bWF0LXNlbGVjdCBmb3JtQ29udHJvbE5hbWU9XCJUYWdzXCIgcmVxdWlyZWQ+XG4gICAgICAgIDxtYXQtb3B0aW9uICpuZ0Zvcj1cImxldCB0YWcgb2YgdGFnc1wiIFt2YWx1ZV09XCJ0YWdcIj57e3RhZ319PC9tYXQtb3B0aW9uPlxuICAgICAgPC9tYXQtc2VsZWN0PlxuICAgIDwvbWF0LWZvcm0tZmllbGQ+XG4gICAgPG1hdC1jaGVja2JveCBmb3JtQ29udHJvbE5hbWU9XCJTdGF0dXNcIj5BY3RpdmU8L21hdC1jaGVja2JveD5cblxuICAgIDxociAvPlxuICAgIDxkaXYgY2xhc3M9XCJjYXRlZ29yeVwiPlxuICAgICAgPGgyPkxpc3RlIGRlIGNhdMOpZ29yaWVzPC9oMj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjYXRlZ29yeS1pdGVtXCIgKm5nRm9yPVwibGV0IGNhdGVnb3J5IG9mIGNhdGVnb3JpZXM7ICBsZXQgaT1pbmRleFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZmllbGQtaXRlbVwiPlxuICAgICAgICAgIDxtYXQtZm9ybS1maWVsZCBjbGFzcz1cImV4YW1wbGUtZnVsbC13aWR0aCBpbnB1dC1jYXRlZ29yeS1uYW1lXCIgIGFwcGVhcmFuY2U9XCJmaWxsXCI+XG4gICAgICAgICAgICA8bWF0LWxhYmVsPkNhdMOpZ29yaWU8L21hdC1sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgIFtyZWFkb25seV09XCJjYXRlZ29yaWVzLmxlbmd0aDw0XCJcbiAgICAgICAgICAgICAgbWF0SW5wdXRcbiAgICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJjYXRlZ29yeS5uYW1lXCJcbiAgICAgICAgICAgICAgW25nTW9kZWxPcHRpb25zXT1cIntzdGFuZGFsb25lOiB0cnVlfVwiXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8bWF0LWVycm9yICpuZ0lmPVwiY2F0ZWdvcnkubmFtZSA9PSAnJ1wiPlxuICAgICAgICAgICAgICBDYXTDqWdvcmllIGVzdCA8c3Ryb25nPnJlcXVpczwvc3Ryb25nPlxuICAgICAgICAgICAgPC9tYXQtZXJyb3I+XG4gICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGJ1dHRvbiBbZGlzYWJsZWRdPVwiaTwzXCIgKGNsaWNrKT1cIm9uUmVtb3ZlQ2F0ZWdvcnkoJGV2ZW50LGkpXCIgbWF0LXJhaXNlZC1idXR0b24gY29sb3I9XCJ3YXJuXCI+U3VwcHJpbWVyPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZmllbGQtaXRlbVwiICpuZ0Zvcj1cImxldCBmaWVsZCBvZiBjYXRlZ29yeS5mb3JtcztsZXQgaj1pbmRleFwiPlxuICAgICAgICAgIDxtYXQtZm9ybS1maWVsZCBjbGFzcz1cImZvcm0tZmllbGQgZmllbGQtc2l6ZVwiIGFwcGVhcmFuY2U9XCJmaWxsXCI+XG4gICAgICAgICAgICA8bWF0LWxhYmVsPkxhYmVsPC9tYXQtbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICBtYXRJbnB1dFxuICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICBbbmdNb2RlbE9wdGlvbnNdPVwie3N0YW5kYWxvbmU6IHRydWV9XCJcbiAgICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJmaWVsZC5sYWJlbFwiXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8bWF0LWVycm9yICpuZ0lmPVwiZmllbGQubGFiZWwgPT09ICcnXCI+XG4gICAgICAgICAgICAgIExhYmVsIGVzdCA8c3Ryb25nPnJlcXVpczwvc3Ryb25nPlxuICAgICAgICAgICAgPC9tYXQtZXJyb3I+XG4gICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cblxuICAgICAgICAgIDxtYXQtZm9ybS1maWVsZCBjbGFzcz1cImZvcm0tZmllbGQgZmllbGQtc2l6ZVwiIGFwcGVhcmFuY2U9XCJmaWxsXCI+XG4gICAgICAgICAgICA8bWF0LWxhYmVsPlR5cGU8L21hdC1sYWJlbD5cbiAgICAgICAgICAgIDxtYXQtc2VsZWN0IFsobmdNb2RlbCldPVwiZmllbGQudHlwZVwiIHJlcXVpcmVkIFtuZ01vZGVsT3B0aW9uc109XCJ7c3RhbmRhbG9uZTogdHJ1ZX1cIiAobmdNb2RlbENoYW5nZSk9XCJvbkNoYW5nZVR5cGUoZmllbGQudHlwZSxpLGopXCI+XG4gICAgICAgICAgICAgIDxtYXQtb3B0aW9uIHZhbHVlPVwidGV4dFwiPlRleHQ8L21hdC1vcHRpb24+XG4gICAgICAgICAgICAgIDxtYXQtb3B0aW9uIHZhbHVlPVwicmFkaW9cIj5SYWRpbzwvbWF0LW9wdGlvbj5cbiAgICAgICAgICAgICAgPG1hdC1vcHRpb24gdmFsdWU9XCJzZWxlY3RcIj5TZWxlY3RldXI8L21hdC1vcHRpb24+XG4gICAgICAgICAgICAgIDxtYXQtb3B0aW9uIHZhbHVlPVwiY2hlY2tib3hcIj5DaGVja2JveDwvbWF0LW9wdGlvbj5cbiAgICAgICAgICAgIDwvbWF0LXNlbGVjdD5cbiAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxuICAgICAgICAgIDxtYXQtZm9ybS1maWVsZCBjbGFzcz1cImZvcm0tZmllbGQgZmllbGQtc2l6ZVwiIGFwcGVhcmFuY2U9XCJmaWxsXCIgKm5nSWY9XCJmaWVsZC50eXBlPT09J3RleHQnIHx8IGZpZWxkLnR5cGU9PT0nJ1wiPlxuICAgICAgICAgICAgPG1hdC1sYWJlbD5WYWxldXI8L21hdC1sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgIG1hdElucHV0XG4gICAgICAgICAgICAgIFtuZ01vZGVsT3B0aW9uc109XCJ7c3RhbmRhbG9uZTogdHJ1ZX1cIlxuICAgICAgICAgICAgICBbKG5nTW9kZWwpXT1cImZpZWxkLnZhbHVlXCJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XG48IS0tIFxuICAgICAgICAgIDxtYXQtZm9ybS1maWVsZCBjbGFzcz1cImZvcm0tZmllbGQgZmllbGQtc2l6ZVwiIGFwcGVhcmFuY2U9XCJmaWxsXCIgKm5nSWY9XCJmaWVsZC50eXBlPT09J3NlbGVjdCdcIj5cbiAgICAgICAgICAgIDxtYXQtbGFiZWw+VmFsZXVyPC9tYXQtbGFiZWw+XG4gICAgICAgICAgICA8bWF0LXNlbGVjdCBbKG5nTW9kZWwpXT1cImZpZWxkLnZhbHVlXCIgW25nTW9kZWxPcHRpb25zXT1cIntzdGFuZGFsb25lOiB0cnVlfVwiPlxuICAgICAgICAgICAgICA8bWF0LW9wdGlvbiAqbmdGb3I9XCJsZXQgb3B0IG9mIGZpZWxkLnZhbHVlXCIgW3ZhbHVlXT1cIm9wdFwiPnt7b3B0fX08L21hdC1vcHRpb24+XG4gICAgICAgICAgICA8L21hdC1zZWxlY3Q+XG4gICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD4gLS0+XG4gICAgICAgICAgXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImZsZXgtYXV0byB3LTMwIGZpZWxkLXNpemVcIiAqbmdJZj1cImZpZWxkLnR5cGU9PT0nY2hlY2tib3gnXCI+XG4gICAgICAgICAgICA8bWF0LWNoZWNrYm94IFsobmdNb2RlbCldPVwiZmllbGQudmFsdWVcIiBbbmdNb2RlbE9wdGlvbnNdPVwie3N0YW5kYWxvbmU6IHRydWV9XCIgPlZhbGV1cjwvbWF0LWNoZWNrYm94PlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPCEtLSA8bWF0LXJhZGlvLWdyb3VwIGNsYXNzPVwiZm9ybS1maWVsZCByYWRpby1ncm91cCBmaWVsZC1zaXplXCIgYXJpYS1sYWJlbD1cIlNlbGVjdCBhbiBvcHRpb25cIiAqbmdJZj1cImZpZWxkLnR5cGU9PT0ncmFkaW8nXCI+XG4gICAgICAgICAgICA8bWF0LXJhZGlvLWJ1dHRvbiAqbmdGb3I9XCJsZXQgb3B0IG9mIGZpZWxkLnZhbHVlXCIgW3ZhbHVlXT1cIm9wdFwiPnt7b3B0fX08L21hdC1yYWRpby1idXR0b24+XG4gICAgICAgICAgPC9tYXQtcmFkaW8tZ3JvdXA+IC0tPlxuICAgICAgICAgIFxuICAgICAgICAgIDxtYXQtZm9ybS1maWVsZCAqbmdJZj1cImZpZWxkLnR5cGU9PSdyYWRpbycgfHwgZmllbGQudHlwZT09J3NlbGVjdCdcIiBjbGFzcz1cImZsZXgtYXV0byB3LTMwIGZpZWxkLXNpemVcIj5cbiAgICAgICAgICAgIDxtYXQtbGFiZWw+IFZhbGV1ciA8L21hdC1sYWJlbD5cbiAgICAgICAgICAgIDxtYXQtY2hpcC1saXN0ICNjaGlwTGlzdCBhcmlhLWxhYmVsPVwiVmlkZW8ga2V5d29yZHM7IGxldCBpbmRleD1pbmRleFwiIG11bHRpcGxlPlxuICAgICAgICAgICAgICA8bWF0LWNoaXAgc3R5bGU9XCJtaW4taGVpZ2h0OiAyNXB4O1wiICpuZ0Zvcj1cImxldCBvcHRpb24gb2YgZmllbGQudmFsdWVcIiBbc2VsZWN0ZWRdPVwib3B0aW9uXCJcbiAgICAgICAgICAgICAgICBbdmFsdWVdPVwib3B0aW9uXCIgW3JlbW92YWJsZV09XCJ0cnVlXCIgKHJlbW92ZWQpPVwicmVtb3ZlS2V5d29yZChvcHRpb24sIGksailcIj5cbiAgICAgICAgICAgICAgICB7e29wdGlvbn19XG4gICAgICAgICAgICAgICAgPG1hdC1pY29uIG1hdENoaXBSZW1vdmU+Y2FuY2VsPC9tYXQtaWNvbj5cbiAgICAgICAgICAgICAgPC9tYXQtY2hpcD5cbiAgICAgICAgICAgICAgPGlucHV0ICNjaGlwc0lucHV0IHBsYWNlaG9sZGVyPVwiYWRkLi4uXCIgW21hdENoaXBJbnB1dEZvcl09XCJjaGlwTGlzdFwiIFttYXRDaGlwSW5wdXRBZGRPbkJsdXJdPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgKG1hdENoaXBJbnB1dFRva2VuRW5kKT1cImFkZEtleXdvcmRGcm9tSW5wdXQoJGV2ZW50LCBpLGopXCJcbiAgICAgICAgICAgICAgICBbbWF0Q2hpcElucHV0U2VwYXJhdG9yS2V5Q29kZXNdPVwic2VwYXJhdG9yS2V5c0NvZGVzXCIgKGtleXVwKT1cIm9uS2V5UHJlc3MoJGV2ZW50LGksailcIj5cbiAgICAgICAgICAgIDwvbWF0LWNoaXAtbGlzdD5cbiAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxuICAgICAgICAgICAgICA8YnV0dG9uIG1hdC1taW5pLWZhYiBjb2xvcj1cInN1Y2Nlc3NcIiAgKGNsaWNrKT0nb25BZGROZXdGaWVsZCgkZXZlbnQsaSknPlxuICAgICAgICAgICAgPG1hdC1pY29uPnBsdXNfb25lPC9tYXQtaWNvbj5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uIG1hdC1taW5pLWZhYiBjb2xvcj1cIndhcm5cIiBjbGFzcz1cImRlbGV0ZS1maWVsZFwiIChjbGljayk9XCJvblJlbW92ZUZpZWxkKCRldmVudCxpLGopXCIgW2Rpc2FibGVkXT1cImNhdGVnb3J5LmZvcm1zLmxlbmd0aDwyXCI+XG4gICAgICAgICAgICA8bWF0LWljb24+ZGVsZXRlPC9tYXQtaWNvbj5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8bWF0LWNoZWNrYm94IGNsYXNzPVwiZm9ybS1maWVsZFwiIFsobmdNb2RlbCldPVwiZmllbGQuaXNNYW5kYXRvcnlcIiBbbmdNb2RlbE9wdGlvbnNdPVwie3N0YW5kYWxvbmU6IHRydWV9XCI+b2JsaWdhdG9pcmU8L21hdC1jaGVja2JveD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJhY3Rpb25cIj5cbiAgICAgIDxidXR0b24gbWF0LXJhaXNlZC1idXR0b24gY29sb3I9XCJwcmltYXJ5XCIgKGNsaWNrKT0nb25BZGROZXdDYXRlZ29yeSgkZXZlbnQpJz5Bam91dGVyIHVuZSBjYXTDqWdvcmllPC9idXR0b24+XG4gICAgICA8YSBbcm91dGVyTGlua109XCJbJy9wcm9maWwtbGlzdCddXCIgIHJvbGU9XCJidXR0b25cIiBtYXQtcmFpc2VkLWJ1dHRvbiBjb2xvcj1cImJhc2ljXCI+TGlzdGUgZGVzIHByb2ZpbHM8L2E+XG4gICAgICA8YnV0dG9uIG1hdC1yYWlzZWQtYnV0dG9uIGNvbG9yPVwiYmFzaWNcIiB0eXBlPVwic3VibWl0XCI+VmFsaWRlcjwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICA8L2Zvcm0+XG48L2Rpdj5cbiJdfQ==