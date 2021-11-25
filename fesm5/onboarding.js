import { __awaiter, __generator, __assign } from 'tslib';
import { HttpHeaders, HttpClient, HttpClientModule } from '@angular/common/http';
import { EventEmitter, ɵɵinject, ɵɵdefineInjectable, ɵsetClassMetadata, Injectable, Inject, ɵɵdirectiveInject, ɵɵdefineComponent, ɵɵelement, Component, ɵɵelementStart, ɵɵtext, ɵɵelementEnd, ɵɵproperty, ɵɵadvance, ɵɵtextInterpolate, ɵɵgetCurrentView, ɵɵlistener, ɵɵrestoreView, ɵɵnextContext, ɵɵpureFunction0, ɵɵtextInterpolate1, ɵɵtemplate, ɵɵreference, ɵɵpureFunction1, ɵɵviewQuery, ɵɵqueryRefresh, ɵɵloadQuery, ViewChild, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule, Optional, SkipSelf } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { RouterOutlet, ActivatedRoute, Router, RouterLinkWithHref, RouterLink, RouterModule } from '@angular/router';
import { Validators, FormBuilder, ɵangular_packages_forms_forms_y, NgControlStatusGroup, FormGroupDirective, DefaultValueAccessor, NgControlStatus, FormControlName, RequiredValidator, NgModel, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ENTER, COMMA, SEMICOLON } from '@angular/cdk/keycodes';
import { MatFormField, MatLabel, MatError, MatFormFieldModule } from '@angular/material/form-field';
import { MatInput, MatInputModule } from '@angular/material/input';
import { NgIf, NgForOf, CommonModule } from '@angular/common';
import { MatSelect, MatSelectModule } from '@angular/material/select';
import { MatCheckbox, MatCheckboxModule } from '@angular/material/checkbox';
import { MatButton, MatAnchor, MatButtonModule } from '@angular/material/button';
import { MatOption } from '@angular/material/core';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatChipList, MatChipInput, MatChip, MatChipRemove, MatChipsModule } from '@angular/material/chips';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatRadioModule } from '@angular/material/radio';
import { MatGridListModule } from '@angular/material/grid-list';
import { CdkTableModule } from '@angular/cdk/table';

var OnboardingService = /** @class */ (function () {
    function OnboardingService(config, http) {
        this.http = http;
        this.token = new BehaviorSubject(null);
        this.authentication = new EventEmitter();
        this._token = this.token.asObservable();
        this.lang = new BehaviorSubject('');
        this.buildHeaders();
        this.initInstance(config);
    }
    /**
   * @private
   * Generate Header for backend call
   */
    OnboardingService.prototype.buildHeaders = function () {
        var _this = this;
        this._token.subscribe(function (token) {
            var bearer = 'Bearer ' + token;
            _this.header = new HttpHeaders({
                'Authorization': bearer
            });
        });
    };
    /**
   * @param config
   * @private
   * Initialize Data for User Instance
   */
    OnboardingService.prototype.initInstance = function (config) {
        var _this = this;
        this._auth = !!config.auth;
        if (config.endpoint) {
            this.endpoint = config.endpoint;
            if (config.auth) {
                this.authentication.subscribe(function (user) {
                    if (!user.lang && config.lang) {
                        user.lang = config.lang;
                    }
                    _this.locale = user.lang;
                    _this.lang.next(_this.locale);
                    if (user.token) {
                        _this.token.next(user.token);
                    }
                    _this.user = user;
                });
            }
            else if (config.lang) {
                this.locale = config.lang;
                this.lang.next(this.locale);
                this.user = {
                    userId: this.guid(),
                    lang: config.lang
                };
            }
            if (config.token) {
                this.token.next(config.token);
            }
        }
        else {
            return new Error('Please provide endpoint');
        }
    };
    /**
   * @private
   * Generate Random uniq Id for Konverso Instance
   */
    OnboardingService.prototype.guid = function () {
        var random = function () {
            return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1);
        };
        return random() + random() + '-' + random() + '-' + random() + '-' + random() + '-' + random() + random() + random();
    };
    /**
   * Send Profil To backend
   * @Post Profil
   */
    OnboardingService.prototype.createProfil = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var options = {
                            headers: _this.header
                        };
                        _this.http.post(_this.endpoint + "/profils", data, options)
                            .subscribe(function (data) {
                            resolve(data);
                        });
                    })];
            });
        });
    };
    OnboardingService.prototype.updateProfil = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var options = {
                            headers: _this.header
                        };
                        _this.http.put(_this.endpoint + "/profils", data, options)
                            .subscribe(function (data) {
                            resolve(data);
                        });
                    })];
            });
        });
    };
    OnboardingService.prototype.deleteProfil = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var options = {
                            headers: _this.header
                        };
                        _this.http.delete(_this.endpoint + "/profils/" + id, options)
                            .subscribe(function (data) {
                            resolve(data);
                        });
                    })];
            });
        });
    };
    OnboardingService.prototype.getProfil = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var options = {
                            headers: _this.header
                        };
                        _this.http.get(_this.endpoint + "/profils/" + id, options)
                            .subscribe(function (data) {
                            resolve(data);
                        });
                    })];
            });
        });
    };
    OnboardingService.prototype.getAllProfil = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var options = {
                            headers: _this.header
                        };
                        _this.http.get(_this.endpoint + "/profils", options)
                            .subscribe(function (data) {
                            resolve(data);
                        });
                    })];
            });
        });
    };
    OnboardingService.prototype.getAllTags = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var options = {
                            headers: _this.header
                        };
                        _this.http.get(_this.endpoint + "/tags", options)
                            .subscribe(function (data) {
                            resolve(data);
                        });
                    })];
            });
        });
    };
    OnboardingService.prototype.asignProfil = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    OnboardingService.prototype.getTags = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    OnboardingService.prototype.getCategory = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    OnboardingService.ɵfac = function OnboardingService_Factory(t) { return new (t || OnboardingService)(ɵɵinject('__NgxOnboarding__'), ɵɵinject(HttpClient)); };
    OnboardingService.ɵprov = ɵɵdefineInjectable({ token: OnboardingService, factory: OnboardingService.ɵfac });
    return OnboardingService;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(OnboardingService, [{
        type: Injectable
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: ['__NgxOnboarding__']
            }] }, { type: HttpClient }]; }, null); })();

// @ts-ignore
var OnboardingComponent = /** @class */ (function () {
    function OnboardingComponent(service) {
        this.service = service;
    }
    OnboardingComponent.prototype.ngOnInit = function () {
    };
    OnboardingComponent.ɵfac = function OnboardingComponent_Factory(t) { return new (t || OnboardingComponent)(ɵɵdirectiveInject(OnboardingService)); };
    OnboardingComponent.ɵcmp = ɵɵdefineComponent({ type: OnboardingComponent, selectors: [["ngx-onboarding"]], decls: 1, vars: 0, template: function OnboardingComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵelement(0, "router-outlet");
        } }, directives: [RouterOutlet], styles: [".main[_ngcontent-%COMP%]{background-color:red!important}"] });
    return OnboardingComponent;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(OnboardingComponent, [{
        type: Component,
        args: [{
                selector: 'ngx-onboarding',
                templateUrl: 'onboarding.component.html',
                styleUrls: ['../../assets/main.scss']
            }]
    }], function () { return [{ type: OnboardingService }]; }, null); })();

function CreateProfileTemplateComponent_mat_error_8_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-error");
    ɵɵtext(1, " Profil est ");
    ɵɵelementStart(2, "strong");
    ɵɵtext(3, "requis");
    ɵɵelementEnd();
    ɵɵelementEnd();
} }
function CreateProfileTemplateComponent_mat_option_17_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-option", 15);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    var tag_r57 = ctx.$implicit;
    ɵɵproperty("value", tag_r57);
    ɵɵadvance(1);
    ɵɵtextInterpolate(tag_r57);
} }
function CreateProfileTemplateComponent_div_24_mat_error_6_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-error");
    ɵɵtext(1, " Cat\u00E9gorie est ");
    ɵɵelementStart(2, "strong");
    ɵɵtext(3, "requis");
    ɵɵelementEnd();
    ɵɵelementEnd();
} }
function CreateProfileTemplateComponent_div_24_div_10_mat_error_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-error");
    ɵɵtext(1, " Label est ");
    ɵɵelementStart(2, "strong");
    ɵɵtext(3, "requis");
    ɵɵelementEnd();
    ɵɵelementEnd();
} }
var _c0 = function () { return { standalone: true }; };
function CreateProfileTemplateComponent_div_24_div_10_mat_form_field_18_Template(rf, ctx) { if (rf & 1) {
    var _r70 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "mat-form-field", 22);
    ɵɵelementStart(1, "mat-label");
    ɵɵtext(2, "Valeur");
    ɵɵelementEnd();
    ɵɵelementStart(3, "input", 34);
    ɵɵlistener("ngModelChange", function CreateProfileTemplateComponent_div_24_div_10_mat_form_field_18_Template_input_ngModelChange_3_listener($event) { ɵɵrestoreView(_r70); var field_r62 = ɵɵnextContext().$implicit; return field_r62.value = $event; });
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    var field_r62 = ɵɵnextContext().$implicit;
    ɵɵadvance(3);
    ɵɵproperty("ngModelOptions", ɵɵpureFunction0(2, _c0))("ngModel", field_r62.value);
} }
function CreateProfileTemplateComponent_div_24_div_10_div_19_Template(rf, ctx) { if (rf & 1) {
    var _r74 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 35);
    ɵɵelementStart(1, "mat-checkbox", 36);
    ɵɵlistener("ngModelChange", function CreateProfileTemplateComponent_div_24_div_10_div_19_Template_mat_checkbox_ngModelChange_1_listener($event) { ɵɵrestoreView(_r74); var field_r62 = ɵɵnextContext().$implicit; return field_r62.value = $event; });
    ɵɵtext(2, "Valeur");
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    var field_r62 = ɵɵnextContext().$implicit;
    ɵɵadvance(1);
    ɵɵproperty("ngModel", field_r62.value)("ngModelOptions", ɵɵpureFunction0(2, _c0));
} }
function CreateProfileTemplateComponent_div_24_div_10_mat_form_field_20_mat_chip_5_Template(rf, ctx) { if (rf & 1) {
    var _r82 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "mat-chip", 42);
    ɵɵlistener("removed", function CreateProfileTemplateComponent_div_24_div_10_mat_form_field_20_mat_chip_5_Template_mat_chip_removed_0_listener() { ɵɵrestoreView(_r82); var option_r79 = ctx.$implicit; var j_r63 = ɵɵnextContext(2).index; var i_r59 = ɵɵnextContext().index; var ctx_r80 = ɵɵnextContext(); return ctx_r80.removeKeyword(option_r79, i_r59, j_r63); });
    ɵɵtext(1);
    ɵɵelementStart(2, "mat-icon", 43);
    ɵɵtext(3, "cancel");
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    var option_r79 = ctx.$implicit;
    ɵɵproperty("selected", option_r79)("value", option_r79)("removable", true);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", option_r79, " ");
} }
function CreateProfileTemplateComponent_div_24_div_10_mat_form_field_20_Template(rf, ctx) { if (rf & 1) {
    var _r85 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "mat-form-field", 35);
    ɵɵelementStart(1, "mat-label");
    ɵɵtext(2, " Valeur ");
    ɵɵelementEnd();
    ɵɵelementStart(3, "mat-chip-list", 37, 38);
    ɵɵtemplate(5, CreateProfileTemplateComponent_div_24_div_10_mat_form_field_20_mat_chip_5_Template, 4, 4, "mat-chip", 39);
    ɵɵelementStart(6, "input", 40, 41);
    ɵɵlistener("matChipInputTokenEnd", function CreateProfileTemplateComponent_div_24_div_10_mat_form_field_20_Template_input_matChipInputTokenEnd_6_listener($event) { ɵɵrestoreView(_r85); var j_r63 = ɵɵnextContext().index; var i_r59 = ɵɵnextContext().index; var ctx_r84 = ɵɵnextContext(); return ctx_r84.addKeywordFromInput($event, i_r59, j_r63); })("keyup", function CreateProfileTemplateComponent_div_24_div_10_mat_form_field_20_Template_input_keyup_6_listener($event) { ɵɵrestoreView(_r85); var j_r63 = ɵɵnextContext().index; var i_r59 = ɵɵnextContext().index; var ctx_r88 = ɵɵnextContext(); return ctx_r88.onKeyPress($event, i_r59, j_r63); });
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    var _r76 = ɵɵreference(4);
    var field_r62 = ɵɵnextContext().$implicit;
    var ctx_r67 = ɵɵnextContext(2);
    ɵɵadvance(5);
    ɵɵproperty("ngForOf", field_r62.value);
    ɵɵadvance(1);
    ɵɵproperty("matChipInputFor", _r76)("matChipInputAddOnBlur", true)("matChipInputSeparatorKeyCodes", ctx_r67.separatorKeysCodes);
} }
function CreateProfileTemplateComponent_div_24_div_10_Template(rf, ctx) { if (rf & 1) {
    var _r93 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 17);
    ɵɵelementStart(1, "mat-form-field", 22);
    ɵɵelementStart(2, "mat-label");
    ɵɵtext(3, "Label");
    ɵɵelementEnd();
    ɵɵelementStart(4, "input", 23);
    ɵɵlistener("ngModelChange", function CreateProfileTemplateComponent_div_24_div_10_Template_input_ngModelChange_4_listener($event) { ɵɵrestoreView(_r93); var field_r62 = ctx.$implicit; return field_r62.label = $event; });
    ɵɵelementEnd();
    ɵɵtemplate(5, CreateProfileTemplateComponent_div_24_div_10_mat_error_5_Template, 4, 0, "mat-error", 4);
    ɵɵelementEnd();
    ɵɵelementStart(6, "mat-form-field", 22);
    ɵɵelementStart(7, "mat-label");
    ɵɵtext(8, "Type");
    ɵɵelementEnd();
    ɵɵelementStart(9, "mat-select", 24);
    ɵɵlistener("ngModelChange", function CreateProfileTemplateComponent_div_24_div_10_Template_mat_select_ngModelChange_9_listener($event) { ɵɵrestoreView(_r93); var field_r62 = ctx.$implicit; return field_r62.type = $event; })("ngModelChange", function CreateProfileTemplateComponent_div_24_div_10_Template_mat_select_ngModelChange_9_listener() { ɵɵrestoreView(_r93); var field_r62 = ctx.$implicit; var j_r63 = ctx.index; var i_r59 = ɵɵnextContext().index; var ctx_r95 = ɵɵnextContext(); return ctx_r95.onChangeType(field_r62.type, i_r59, j_r63); });
    ɵɵelementStart(10, "mat-option", 25);
    ɵɵtext(11, "Text");
    ɵɵelementEnd();
    ɵɵelementStart(12, "mat-option", 26);
    ɵɵtext(13, "Radio");
    ɵɵelementEnd();
    ɵɵelementStart(14, "mat-option", 27);
    ɵɵtext(15, "Selecteur");
    ɵɵelementEnd();
    ɵɵelementStart(16, "mat-option", 28);
    ɵɵtext(17, "Checkbox");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵtemplate(18, CreateProfileTemplateComponent_div_24_div_10_mat_form_field_18_Template, 4, 3, "mat-form-field", 29);
    ɵɵtemplate(19, CreateProfileTemplateComponent_div_24_div_10_div_19_Template, 3, 3, "div", 30);
    ɵɵtemplate(20, CreateProfileTemplateComponent_div_24_div_10_mat_form_field_20_Template, 8, 4, "mat-form-field", 30);
    ɵɵelementStart(21, "button", 31);
    ɵɵlistener("click", function CreateProfileTemplateComponent_div_24_div_10_Template_button_click_21_listener($event) { ɵɵrestoreView(_r93); var i_r59 = ɵɵnextContext().index; var ctx_r97 = ɵɵnextContext(); return ctx_r97.onAddNewField($event, i_r59); });
    ɵɵelementStart(22, "mat-icon");
    ɵɵtext(23, "plus_one");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(24, "button", 32);
    ɵɵlistener("click", function CreateProfileTemplateComponent_div_24_div_10_Template_button_click_24_listener($event) { ɵɵrestoreView(_r93); var j_r63 = ctx.index; var i_r59 = ɵɵnextContext().index; var ctx_r99 = ɵɵnextContext(); return ctx_r99.onRemoveField($event, i_r59, j_r63); });
    ɵɵelementStart(25, "mat-icon");
    ɵɵtext(26, "delete");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(27, "mat-checkbox", 33);
    ɵɵlistener("ngModelChange", function CreateProfileTemplateComponent_div_24_div_10_Template_mat_checkbox_ngModelChange_27_listener($event) { ɵɵrestoreView(_r93); var field_r62 = ctx.$implicit; return field_r62.isMandatory = $event; });
    ɵɵtext(28, "obligatoire");
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    var field_r62 = ctx.$implicit;
    var category_r58 = ɵɵnextContext().$implicit;
    ɵɵadvance(4);
    ɵɵproperty("ngModelOptions", ɵɵpureFunction0(11, _c0))("ngModel", field_r62.label);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", field_r62.label === "");
    ɵɵadvance(4);
    ɵɵproperty("ngModel", field_r62.type)("ngModelOptions", ɵɵpureFunction0(12, _c0));
    ɵɵadvance(9);
    ɵɵproperty("ngIf", field_r62.type === "text" || field_r62.type === "");
    ɵɵadvance(1);
    ɵɵproperty("ngIf", field_r62.type === "checkbox");
    ɵɵadvance(1);
    ɵɵproperty("ngIf", field_r62.type == "radio" || field_r62.type == "select");
    ɵɵadvance(4);
    ɵɵproperty("disabled", category_r58.forms.length < 2);
    ɵɵadvance(3);
    ɵɵproperty("ngModel", field_r62.isMandatory)("ngModelOptions", ɵɵpureFunction0(13, _c0));
} }
function CreateProfileTemplateComponent_div_24_Template(rf, ctx) { if (rf & 1) {
    var _r104 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 16);
    ɵɵelementStart(1, "div", 17);
    ɵɵelementStart(2, "mat-form-field", 18);
    ɵɵelementStart(3, "mat-label");
    ɵɵtext(4, "Cat\u00E9gorie");
    ɵɵelementEnd();
    ɵɵelementStart(5, "input", 19);
    ɵɵlistener("ngModelChange", function CreateProfileTemplateComponent_div_24_Template_input_ngModelChange_5_listener($event) { ɵɵrestoreView(_r104); var category_r58 = ctx.$implicit; return category_r58.name = $event; });
    ɵɵelementEnd();
    ɵɵtemplate(6, CreateProfileTemplateComponent_div_24_mat_error_6_Template, 4, 0, "mat-error", 4);
    ɵɵelementEnd();
    ɵɵelementStart(7, "div");
    ɵɵelementStart(8, "button", 20);
    ɵɵlistener("click", function CreateProfileTemplateComponent_div_24_Template_button_click_8_listener($event) { ɵɵrestoreView(_r104); var i_r59 = ctx.index; var ctx_r105 = ɵɵnextContext(); return ctx_r105.onRemoveCategory($event, i_r59); });
    ɵɵtext(9, "Supprimer");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵtemplate(10, CreateProfileTemplateComponent_div_24_div_10_Template, 29, 14, "div", 21);
    ɵɵelementEnd();
} if (rf & 2) {
    var category_r58 = ctx.$implicit;
    var i_r59 = ctx.index;
    var ctx_r56 = ɵɵnextContext();
    ɵɵadvance(5);
    ɵɵproperty("readonly", ctx_r56.categories.length < 4)("ngModel", category_r58.name)("ngModelOptions", ɵɵpureFunction0(6, _c0));
    ɵɵadvance(1);
    ɵɵproperty("ngIf", category_r58.name == "");
    ɵɵadvance(2);
    ɵɵproperty("disabled", i_r59 < 3);
    ɵɵadvance(2);
    ɵɵproperty("ngForOf", category_r58.forms);
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
    CreateProfileTemplateComponent.ɵfac = function CreateProfileTemplateComponent_Factory(t) { return new (t || CreateProfileTemplateComponent)(ɵɵdirectiveInject(FormBuilder), ɵɵdirectiveInject(OnboardingService), ɵɵdirectiveInject(ActivatedRoute), ɵɵdirectiveInject(Router)); };
    CreateProfileTemplateComponent.ɵcmp = ɵɵdefineComponent({ type: CreateProfileTemplateComponent, selectors: [["onboarding-create-profile-template"]], decls: 32, vars: 6, consts: [[1, "container"], [3, "formGroup", "submit"], ["appearance", "fill", 1, "example-full-width"], ["type", "text", "matInput", "", "formControlName", "Name", "placeholder", "Ex. Manager"], [4, "ngIf"], ["type", "text", "matInput", "", "formControlName", "Description", "placeholder", ""], ["formControlName", "Tags", "required", ""], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "Status"], [1, "category"], ["class", "category-item", 4, "ngFor", "ngForOf"], [1, "action"], ["mat-raised-button", "", "color", "primary", 3, "click"], ["role", "button", "mat-raised-button", "", "color", "basic", 3, "routerLink"], ["mat-raised-button", "", "color", "basic", "type", "submit"], [3, "value"], [1, "category-item"], [1, "field-item"], ["appearance", "fill", 1, "example-full-width", "input-category-name"], ["type", "text", "required", "", "matInput", "", "placeholder", "", 3, "readonly", "ngModel", "ngModelOptions", "ngModelChange"], ["mat-raised-button", "", "color", "warn", 3, "disabled", "click"], ["class", "field-item", 4, "ngFor", "ngForOf"], ["appearance", "fill", 1, "form-field", "field-size"], ["type", "text", "matInput", "", "required", "", "placeholder", "", 3, "ngModelOptions", "ngModel", "ngModelChange"], ["required", "", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["value", "text"], ["value", "radio"], ["value", "select"], ["value", "checkbox"], ["class", "form-field field-size", "appearance", "fill", 4, "ngIf"], ["class", "flex-auto w-30 field-size", 4, "ngIf"], ["mat-mini-fab", "", "color", "success", 3, "click"], ["mat-mini-fab", "", "color", "warn", 1, "delete-field", 3, "disabled", "click"], [1, "form-field", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["type", "text", "matInput", "", "placeholder", "", 3, "ngModelOptions", "ngModel", "ngModelChange"], [1, "flex-auto", "w-30", "field-size"], [3, "ngModel", "ngModelOptions", "ngModelChange"], ["aria-label", "Video keywords; let index=index", "multiple", ""], ["chipList", ""], ["style", "min-height: 25px;", 3, "selected", "value", "removable", "removed", 4, "ngFor", "ngForOf"], ["placeholder", "add...", 3, "matChipInputFor", "matChipInputAddOnBlur", "matChipInputSeparatorKeyCodes", "matChipInputTokenEnd", "keyup"], ["chipsInput", ""], [2, "min-height", "25px", 3, "selected", "value", "removable", "removed"], ["matChipRemove", ""]], template: function CreateProfileTemplateComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵelementStart(0, "div", 0);
            ɵɵelementStart(1, "h3");
            ɵɵtext(2, "Cr\u00E9ation de profil");
            ɵɵelementEnd();
            ɵɵelementStart(3, "form", 1);
            ɵɵlistener("submit", function CreateProfileTemplateComponent_Template_form_submit_3_listener() { return ctx.onSubmit(); });
            ɵɵelementStart(4, "mat-form-field", 2);
            ɵɵelementStart(5, "mat-label");
            ɵɵtext(6, "Nom du profil");
            ɵɵelementEnd();
            ɵɵelement(7, "input", 3);
            ɵɵtemplate(8, CreateProfileTemplateComponent_mat_error_8_Template, 4, 0, "mat-error", 4);
            ɵɵelementEnd();
            ɵɵelementStart(9, "mat-form-field", 2);
            ɵɵelementStart(10, "mat-label");
            ɵɵtext(11, "D\u00E9scription");
            ɵɵelementEnd();
            ɵɵelement(12, "textarea", 5);
            ɵɵelementEnd();
            ɵɵelementStart(13, "mat-form-field", 2);
            ɵɵelementStart(14, "mat-label");
            ɵɵtext(15, "Tags");
            ɵɵelementEnd();
            ɵɵelementStart(16, "mat-select", 6);
            ɵɵtemplate(17, CreateProfileTemplateComponent_mat_option_17_Template, 2, 2, "mat-option", 7);
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(18, "mat-checkbox", 8);
            ɵɵtext(19, "Active");
            ɵɵelementEnd();
            ɵɵelement(20, "hr");
            ɵɵelementStart(21, "div", 9);
            ɵɵelementStart(22, "h2");
            ɵɵtext(23, "Liste de cat\u00E9gories");
            ɵɵelementEnd();
            ɵɵtemplate(24, CreateProfileTemplateComponent_div_24_Template, 11, 7, "div", 10);
            ɵɵelementEnd();
            ɵɵelementStart(25, "div", 11);
            ɵɵelementStart(26, "button", 12);
            ɵɵlistener("click", function CreateProfileTemplateComponent_Template_button_click_26_listener($event) { return ctx.onAddNewCategory($event); });
            ɵɵtext(27, "Ajouter une cat\u00E9gorie");
            ɵɵelementEnd();
            ɵɵelementStart(28, "a", 13);
            ɵɵtext(29, "Liste des profils");
            ɵɵelementEnd();
            ɵɵelementStart(30, "button", 14);
            ɵɵtext(31, "Valider");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
        } if (rf & 2) {
            ɵɵadvance(3);
            ɵɵproperty("formGroup", ctx.form);
            ɵɵadvance(5);
            ɵɵproperty("ngIf", ctx.form.get("Name").hasError("required"));
            ɵɵadvance(9);
            ɵɵproperty("ngForOf", ctx.tags);
            ɵɵadvance(7);
            ɵɵproperty("ngForOf", ctx.categories);
            ɵɵadvance(4);
            ɵɵproperty("routerLink", ɵɵpureFunction0(5, _c1));
        } }, directives: [ɵangular_packages_forms_forms_y, NgControlStatusGroup, FormGroupDirective, MatFormField, MatLabel, MatInput, DefaultValueAccessor, NgControlStatus, FormControlName, NgIf, MatSelect, RequiredValidator, NgForOf, MatCheckbox, MatButton, MatAnchor, RouterLinkWithHref, MatError, MatOption, NgModel, MatIcon, MatChipList, MatChipInput, MatChip, MatChipRemove], styles: [".container[_ngcontent-%COMP%]{max-width:98%;margin:50px auto auto;padding-bottom:50px}.container[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:space-between}.input-category-name[_ngcontent-%COMP%]{font-size:15px;font-weight:500}.example-full-width[_ngcontent-%COMP%]{width:100%}.field-item[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center}.field-action[_ngcontent-%COMP%]{width:10%}.field-size[_ngcontent-%COMP%]{width:90%;margin:auto 2% auto auto}hr[_ngcontent-%COMP%]{margin:50px 0}  .mat-form-field-appearance-fill .mat-form-field-flex{background-color:#fff}.category-aciton[_ngcontent-%COMP%]{display:flex;width:100%}.delete-field[_ngcontent-%COMP%]{margin:auto 2%}.radio-group[_ngcontent-%COMP%]   .mat-radio-button[_ngcontent-%COMP%]{margin-right:10px}.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary[_ngcontent-%COMP%]{background-color:#3f51b5;color:#fff;min-height:20px;font-size:10px}"] });
    return CreateProfileTemplateComponent;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(CreateProfileTemplateComponent, [{
        type: Component,
        args: [{
                selector: 'onboarding-create-profile-template',
                templateUrl: './create-profile-template.component.html',
                styleUrls: ['./create-profile-template.component.scss']
            }]
    }], function () { return [{ type: FormBuilder }, { type: OnboardingService }, { type: ActivatedRoute }, { type: Router }]; }, null); })();

var _c0$1 = function (a0) { return [a0]; };
function ProfileListComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 7);
    ɵɵelement(1, "img", 8);
    ɵɵelementStart(2, "p");
    ɵɵtext(3);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    var d_r107 = ctx.$implicit;
    ɵɵproperty("routerLink", ɵɵpureFunction1(2, _c0$1, "/profil-form/" + d_r107._id));
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", d_r107.Name, "");
} }
var _c1$1 = function () { return ["/profil-form/0"]; };
var ProfileListComponent = /** @class */ (function () {
    function ProfileListComponent(service, router) {
        this.service = service;
        this.router = router;
        this.displayedColumns = ['Name', 'vcontacts', 'createdAt', 'updatedAt', 'action'];
        this.datas = [];
        this.dataSource = new MatTableDataSource([]);
    }
    ProfileListComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getAllProfils()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ProfileListComponent.prototype.onAddProfil = function () {
        this.router.navigate(['/profil-form/0']);
    };
    ProfileListComponent.prototype.onDelete = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.service.deleteProfil(id)];
                    case 1:
                        result = _a.sent();
                        if (!result) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.getAllProfils()];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ProfileListComponent.prototype.getAllProfils = function () {
        return __awaiter(this, void 0, void 0, function () {
            var profile;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.service.getAllProfil()];
                    case 1:
                        profile = _a.sent();
                        this.datas = profile;
                        this.dataSource = new MatTableDataSource(this.datas);
                        this.dataSource.paginator = this.paginator;
                        this.dataSource.sort = this.sort;
                        return [2 /*return*/];
                }
            });
        });
    };
    ProfileListComponent.ɵfac = function ProfileListComponent_Factory(t) { return new (t || ProfileListComponent)(ɵɵdirectiveInject(OnboardingService), ɵɵdirectiveInject(Router)); };
    ProfileListComponent.ɵcmp = ɵɵdefineComponent({ type: ProfileListComponent, selectors: [["onboarding-profile-list"]], viewQuery: function ProfileListComponent_Query(rf, ctx) { if (rf & 1) {
            ɵɵviewQuery(MatPaginator, true);
            ɵɵviewQuery(MatSort, true);
        } if (rf & 2) {
            var _t;
            ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.paginator = _t.first);
            ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.sort = _t.first);
        } }, decls: 18, vars: 3, consts: [[1, "main"], [1, "header-list"], [1, "content-list"], [1, "list"], [1, "box-template"], ["role", "button", "mat-raised-button", "", "color", "primary", 3, "routerLink"], ["class", "box-template", 3, "routerLink", 4, "ngFor", "ngForOf"], [1, "box-template", 3, "routerLink"], ["src", "data:image/png;base64,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", "alt", ""]], template: function ProfileListComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵelementStart(0, "div", 0);
            ɵɵelementStart(1, "div", 1);
            ɵɵelementStart(2, "h2");
            ɵɵtext(3, "On boarding");
            ɵɵelementEnd();
            ɵɵelementStart(4, "p");
            ɵɵtext(5, "Retrouvez ici, l\u2019ensemble des formulaires d\u2019on boarding que vous avez cr\u00E9\u00E9s");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(6, "div", 2);
            ɵɵelementStart(7, "h3");
            ɵɵtext(8, "Fiches collaborateurs");
            ɵɵelementEnd();
            ɵɵelementStart(9, "div", 3);
            ɵɵelementStart(10, "div", 4);
            ɵɵelementStart(11, "p");
            ɵɵtext(12, "Nouvelle cat\u00E9gorie");
            ɵɵelementEnd();
            ɵɵelementStart(13, "a", 5);
            ɵɵelementStart(14, "mat-icon");
            ɵɵtext(15, "add");
            ɵɵelementEnd();
            ɵɵtext(16, " Cr\u00E9er une fiche ");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵtemplate(17, ProfileListComponent_div_17_Template, 4, 4, "div", 6);
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
        } if (rf & 2) {
            ɵɵadvance(13);
            ɵɵproperty("routerLink", ɵɵpureFunction0(2, _c1$1));
            ɵɵadvance(4);
            ɵɵproperty("ngForOf", ctx.datas);
        } }, directives: [MatAnchor, RouterLinkWithHref, MatIcon, NgForOf, RouterLink], styles: [".main[_ngcontent-%COMP%]{background:no-repeat padding-box #f4f7f9;opacity:1;height:100%}.main[_ngcontent-%COMP%]   .header-list[_ngcontent-%COMP%]{margin-left:50px;padding-top:10px}.main[_ngcontent-%COMP%]   .header-list[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{text-align:left;font:bold 32px/30px Nexa Text;letter-spacing:0;color:#171f26;opacity:1}.main[_ngcontent-%COMP%]   .header-list[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{text-align:left;font:20px/26px Nexa Text;letter-spacing:0;color:#171f26;opacity:1}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]{background-color:#fff;border-radius:8px;opacity:1;margin:57px;height:80%;padding:49px}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{text-align:left;font:bold 23px/30px Nexa Text;letter-spacing:0;color:#171f26;opacity:1}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .box-template[_ngcontent-%COMP%]{width:328px;height:228px;margin-right:50px;margin-bottom:50px;background:no-repeat padding-box #f4f7f9;border:1px solid #dce4e9;border-radius:6px;opacity:1;display:flex;flex-direction:column;justify-content:center;align-items:center;cursor:pointer}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .box-template[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:81px;height:81px}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .box-template[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{text-align:center;font:bold 16px/25px Nexa Text;letter-spacing:.1px;color:#5a607f;opacity:1}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .box-template[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{background:no-repeat padding-box #5a607f;border-radius:7px;font-size:15px}"] });
    return ProfileListComponent;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(ProfileListComponent, [{
        type: Component,
        args: [{
                selector: 'onboarding-profile-list',
                templateUrl: './profile-list.component.html',
                styleUrls: ['./profile-list.component.scss']
            }]
    }], function () { return [{ type: OnboardingService }, { type: Router }]; }, { paginator: [{
            type: ViewChild,
            args: [MatPaginator]
        }], sort: [{
            type: ViewChild,
            args: [MatSort]
        }] }); })();

var routes = [
    { path: 'profil-form/:id', component: CreateProfileTemplateComponent },
    { path: 'profil-list', component: ProfileListComponent },
    { path: '', redirectTo: '/profil-list', pathMatch: 'full' },
];
var OnboardingModule = /** @class */ (function () {
    function OnboardingModule(parentModule) {
        if (parentModule) {
            throw new Error('OnboardingModule is already loaded. Import it in the AppModule only');
        }
    }
    OnboardingModule.forRoot = function (config) {
        return {
            ngModule: OnboardingModule,
            providers: [
                { provide: '__NgxOnboarding__', useValue: config },
                OnboardingService
            ]
        };
    };
    OnboardingModule.ɵmod = ɵɵdefineNgModule({ type: OnboardingModule });
    OnboardingModule.ɵinj = ɵɵdefineInjector({ factory: function OnboardingModule_Factory(t) { return new (t || OnboardingModule)(ɵɵinject(OnboardingModule, 12)); }, providers: [OnboardingService], imports: [[
                FormsModule,
                HttpClientModule,
                MatFormFieldModule,
                MatButtonModule,
                CommonModule,
                BrowserModule,
                BrowserAnimationsModule,
                FormsModule,
                ReactiveFormsModule,
                MatCheckboxModule,
                MatIconModule,
                MatSelectModule,
                MatInputModule,
                MatChipsModule,
                MatGridListModule,
                MatRadioModule,
                MatPaginatorModule,
                CdkTableModule,
                MatSortModule,
                MatTableModule,
                RouterModule.forRoot(routes)
            ],
            HttpClientModule] });
    return OnboardingModule;
}());
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(OnboardingModule, { declarations: [OnboardingComponent, CreateProfileTemplateComponent, ProfileListComponent], imports: [FormsModule,
        HttpClientModule,
        MatFormFieldModule,
        MatButtonModule,
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        MatCheckboxModule,
        MatIconModule,
        MatSelectModule,
        MatInputModule,
        MatChipsModule,
        MatGridListModule,
        MatRadioModule,
        MatPaginatorModule,
        CdkTableModule,
        MatSortModule,
        MatTableModule, RouterModule], exports: [OnboardingComponent, HttpClientModule, CreateProfileTemplateComponent, ProfileListComponent, OnboardingComponent] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(OnboardingModule, [{
        type: NgModule,
        args: [{
                declarations: [OnboardingComponent, CreateProfileTemplateComponent, ProfileListComponent],
                imports: [
                    FormsModule,
                    HttpClientModule,
                    MatFormFieldModule,
                    MatButtonModule,
                    CommonModule,
                    BrowserModule,
                    BrowserAnimationsModule,
                    FormsModule,
                    ReactiveFormsModule,
                    MatCheckboxModule,
                    MatIconModule,
                    MatSelectModule,
                    MatInputModule,
                    MatChipsModule,
                    MatGridListModule,
                    MatRadioModule,
                    MatPaginatorModule,
                    CdkTableModule,
                    MatSortModule,
                    MatTableModule,
                    RouterModule.forRoot(routes)
                ],
                providers: [OnboardingService],
                exports: [OnboardingComponent, HttpClientModule, CreateProfileTemplateComponent, ProfileListComponent, OnboardingComponent]
            }]
    }], function () { return [{ type: OnboardingModule, decorators: [{
                type: Optional
            }, {
                type: SkipSelf
            }] }]; }, null); })();

/**
 * Generated bundle index. Do not edit.
 */

export { CreateProfileTemplateComponent, OnboardingComponent, OnboardingModule, OnboardingService, ProfileListComponent };
//# sourceMappingURL=onboarding.js.map
