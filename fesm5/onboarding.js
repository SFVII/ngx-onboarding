import { __awaiter, __generator, __assign } from 'tslib';
import { HttpHeaders, HttpClient, HttpClientModule } from '@angular/common/http';
import { EventEmitter, ɵɵinject, ɵɵdefineInjectable, ɵsetClassMetadata, Injectable, Inject, ɵɵdirectiveInject, ɵɵdefineComponent, ɵɵelement, Component, ɵɵgetCurrentView, ɵɵelementStart, ɵɵlistener, ɵɵrestoreView, ɵɵnextContext, ɵɵtext, ɵɵelementEnd, ɵɵadvance, ɵɵproperty, ɵɵpureFunction0, ɵɵtextInterpolate1, ɵɵtemplate, ɵɵreference, ɵɵprojectionDef, ɵɵelementContainerStart, ɵɵelementContainerEnd, ɵɵprojection, ɵɵclassMap, ɵɵstyleProp, Input, Output, ɵɵtextInterpolate, ɵɵtextInterpolate2, ElementRef, Renderer2, ɵɵdefineDirective, ɵɵNgOnChangesFeature, Directive, HostListener, ɵɵpureFunction1, ɵɵviewQuery, ɵɵqueryRefresh, ɵɵloadQuery, ViewChild, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule, Optional, SkipSelf } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router, RouterOutlet, ActivatedRoute, RouterLinkWithHref, RouterLink, RouterModule } from '@angular/router';
import { DefaultValueAccessor, RequiredValidator, NgControlStatus, NgModel, Validators, FormBuilder, ɵangular_packages_forms_forms_y, NgControlStatusGroup, FormGroupDirective, FormControlName, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ENTER, COMMA, SEMICOLON } from '@angular/cdk/keycodes';
import { moveItemInArray, transferArrayItem, CdkDropListGroup, CdkDropList, CdkDrag, CdkDragHandle, DragDropModule } from '@angular/cdk/drag-drop';
import { NgSwitch, NgSwitchCase, NgSwitchDefault, NgIf, NgForOf, CommonModule } from '@angular/common';
import { MatButton, MatAnchor, MatButtonModule } from '@angular/material/button';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatFormField, MatLabel, MatFormFieldModule } from '@angular/material/form-field';
import { MatInput, MatInputModule } from '@angular/material/input';
import { MatSelect, MatSelectModule } from '@angular/material/select';
import { MatCheckbox, MatCheckboxRequiredValidator, MatCheckboxModule } from '@angular/material/checkbox';
import { MatOption } from '@angular/material/core';
import { MatChipList, MatChipInput, MatChip, MatChipRemove, MatChipsModule } from '@angular/material/chips';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatHorizontalStepper, MatStep, MatStepLabel, MatStepperPrevious, MatStepperNext, MatStepperModule } from '@angular/material/stepper';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatRadioGroup, MatRadioButton, MatRadioModule } from '@angular/material/radio';
import { CdkTableModule } from '@angular/cdk/table';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';

var OnboardingService = /** @class */ (function () {
    function OnboardingService(config, http) {
        this.http = http;
        this.token = new BehaviorSubject(null);
        this._token = this.token.asObservable();
        this.templates = new BehaviorSubject(null);
        this._templates = this.templates.asObservable();
        this.onboarding = new BehaviorSubject(null);
        this._onboarding = this.onboarding.asObservable();
        this.contacts = new BehaviorSubject(null);
        this._contacts = this.contacts.asObservable();
        this.authentication = new EventEmitter();
        this.lang = new BehaviorSubject('');
        this.mainPath = "";
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
                    lang: config.lang,
                    token: config.token
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
                            _this.templates.next(data);
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
    OnboardingService.prototype.getContacts = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var options = {
                            headers: _this.header
                        };
                        _this._contacts.subscribe(function (contacts) {
                            if (!contacts) {
                                _this.http.get(_this.endpoint.split('/onboarding')[0] + "/contact/siteList", options)
                                    .subscribe(function (data) {
                                    _this.contacts.next(data.userList);
                                    resolve(data.userList);
                                });
                            }
                            else {
                                resolve(contacts);
                            }
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
    // CRUD ONBOARDING
    OnboardingService.prototype.createOnboarding = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var options = {
                            headers: _this.header
                        };
                        _this.http.post(_this.endpoint + "/onboarding", data, options)
                            .subscribe(function (data) {
                            resolve(data);
                        });
                    })];
            });
        });
    };
    OnboardingService.prototype.updateOnboarding = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var options = {
                            headers: _this.header
                        };
                        _this.http.put(_this.endpoint + "/onboarding", data, options)
                            .subscribe(function (data) {
                            resolve(data);
                        });
                    })];
            });
        });
    };
    OnboardingService.prototype.deleteOnboarding = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var options = {
                            headers: _this.header
                        };
                        _this.http.delete(_this.endpoint + "/onboarding/" + id, options)
                            .subscribe(function (data) {
                            resolve(data);
                        });
                    })];
            });
        });
    };
    OnboardingService.prototype.getOnboarding = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var options = {
                            headers: _this.header
                        };
                        _this.http.get(_this.endpoint + "/onboarding/" + id, options)
                            .subscribe(function (data) {
                            resolve(data);
                        });
                    })];
            });
        });
    };
    OnboardingService.prototype.getAllOnboarding = function (recall) {
        if (recall === void 0) { recall = false; }
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        _this._onboarding.subscribe(function (onboarding) {
                            if (!onboarding || recall) {
                                var options = {
                                    headers: _this.header
                                };
                                _this.http.get(_this.endpoint + "/onboarding", options)
                                    .subscribe(function (data) {
                                    _this.onboarding.next(data);
                                    resolve(data);
                                });
                            }
                            else {
                                resolve(onboarding);
                            }
                        });
                    })];
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
    function OnboardingComponent(service, router) {
        this.service = service;
        this.router = router;
    }
    OnboardingComponent.prototype.ngOnInit = function () {
        if (this.router.url.indexOf('onboarding') > -1) {
            this.service.mainPath = this.router.url.split('/onboarding')[0] + '/onboarding';
            console.log('--------------------------', this.service.mainPath);
        }
    };
    OnboardingComponent.ɵfac = function OnboardingComponent_Factory(t) { return new (t || OnboardingComponent)(ɵɵdirectiveInject(OnboardingService), ɵɵdirectiveInject(Router)); };
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
    }], function () { return [{ type: OnboardingService }, { type: Router }]; }, null); })();

var _c0 = function () { return { standalone: true }; };
function SubCategoryComponent_div_30_Template(rf, ctx) { if (rf & 1) {
    var _r536 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 20);
    ɵɵelementStart(1, "mat-checkbox", 21);
    ɵɵlistener("ngModelChange", function SubCategoryComponent_div_30_Template_mat_checkbox_ngModelChange_1_listener($event) { ɵɵrestoreView(_r536); var ctx_r535 = ɵɵnextContext(); return ctx_r535.field.value = $event; });
    ɵɵtext(2, "Valeur ");
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r530 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("ngModel", ctx_r530.field.value)("ngModelOptions", ɵɵpureFunction0(2, _c0));
} }
function SubCategoryComponent_mat_form_field_31_mat_chip_5_Template(rf, ctx) { if (rf & 1) {
    var _r542 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "mat-chip", 28);
    ɵɵlistener("removed", function SubCategoryComponent_mat_form_field_31_mat_chip_5_Template_mat_chip_removed_0_listener() { ɵɵrestoreView(_r542); var option_r540 = ctx.$implicit; var ctx_r541 = ɵɵnextContext(2); return ctx_r541.removeKeyword(option_r540, ctx_r541.i, ctx_r541.j); });
    ɵɵtext(1);
    ɵɵelementStart(2, "mat-icon", 29);
    ɵɵtext(3, "cancel");
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    var option_r540 = ctx.$implicit;
    ɵɵproperty("selected", option_r540)("value", option_r540)("removable", true);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", option_r540, " ");
} }
function SubCategoryComponent_mat_form_field_31_Template(rf, ctx) { if (rf & 1) {
    var _r544 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "mat-form-field", 22);
    ɵɵelementStart(1, "mat-label");
    ɵɵtext(2, " Valeur ");
    ɵɵelementEnd();
    ɵɵelementStart(3, "mat-chip-list", 23, 24);
    ɵɵtemplate(5, SubCategoryComponent_mat_form_field_31_mat_chip_5_Template, 4, 4, "mat-chip", 25);
    ɵɵelementStart(6, "input", 26, 27);
    ɵɵlistener("matChipInputTokenEnd", function SubCategoryComponent_mat_form_field_31_Template_input_matChipInputTokenEnd_6_listener($event) { ɵɵrestoreView(_r544); var ctx_r543 = ɵɵnextContext(); return ctx_r543.addKeywordFromInput($event, ctx_r543.i, ctx_r543.j); })("keyup", function SubCategoryComponent_mat_form_field_31_Template_input_keyup_6_listener($event) { ɵɵrestoreView(_r544); var ctx_r545 = ɵɵnextContext(); return ctx_r545.keyUp($event, ctx_r545.i, ctx_r545.j); });
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    var _r537 = ɵɵreference(4);
    var ctx_r531 = ɵɵnextContext();
    ɵɵadvance(5);
    ɵɵproperty("ngForOf", ctx_r531.field.defaultValue);
    ɵɵadvance(1);
    ɵɵproperty("matChipInputFor", _r537)("matChipInputAddOnBlur", true)("matChipInputSeparatorKeyCodes", ctx_r531.separatorKeysCodes);
} }
function SubCategoryComponent_mat_form_field_32_Template(rf, ctx) { if (rf & 1) {
    var _r547 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "mat-form-field", 1);
    ɵɵelementStart(1, "mat-label");
    ɵɵtext(2, "Valeur");
    ɵɵelementEnd();
    ɵɵelementStart(3, "input", 30);
    ɵɵlistener("ngModelChange", function SubCategoryComponent_mat_form_field_32_Template_input_ngModelChange_3_listener($event) { ɵɵrestoreView(_r547); var ctx_r546 = ɵɵnextContext(); return ctx_r546.field.defaultValue = $event; });
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r532 = ɵɵnextContext();
    ɵɵadvance(3);
    ɵɵproperty("type", ctx_r532.field.type)("ngModelOptions", ɵɵpureFunction0(3, _c0))("ngModel", ctx_r532.field.defaultValue);
} }
function SubCategoryComponent_mat_icon_39_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-icon");
    ɵɵtext(1, "expand_less");
    ɵɵelementEnd();
} }
function SubCategoryComponent_mat_icon_40_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-icon");
    ɵɵtext(1, "expand_more");
    ɵɵelementEnd();
} }
var _c1 = [[["", 8, "child"]]];
var _c2 = function () { return ["select", "radio"]; };
var _c3 = [".child"];
var SubCategoryComponent = /** @class */ (function () {
    function SubCategoryComponent() {
        this.onAddKeywordFromInput = new EventEmitter();
        this.onKeyPress = new EventEmitter();
        this.onDrop = new EventEmitter();
        this.onAddNewField = new EventEmitter();
        this.onRemoveField = new EventEmitter();
        this.onChangeType = new EventEmitter();
        this.onRemoveKeyword = new EventEmitter();
        this.onAddNewSubLevelField = new EventEmitter();
        this.onExpendMore = new EventEmitter();
        this.separatorKeysCodes = [ENTER, COMMA, SEMICOLON];
    }
    SubCategoryComponent.prototype.ngOnInit = function () {
    };
    SubCategoryComponent.prototype.drop = function (event) {
        this.onDrop.emit(event);
    };
    SubCategoryComponent.prototype.addKeywordFromInput = function (event, i, j) {
        this.onAddKeywordFromInput.emit({ event: event, i: i, j: j });
    };
    SubCategoryComponent.prototype.keyUp = function (event, i, j) {
        this.onKeyPress.emit({ event: event, i: i, j: j });
    };
    SubCategoryComponent.prototype.addNewField = function (event, i) {
        event.preventDefault();
        this.onAddNewField.emit({ event: event, i: i });
    };
    SubCategoryComponent.prototype.removeField = function (event, i, j) {
        event.preventDefault();
        this.onRemoveField.emit({ i: i, j: j });
    };
    SubCategoryComponent.prototype.changeType = function (type, i, j) {
        this.onChangeType.emit({ type: type, i: i, j: j });
    };
    SubCategoryComponent.prototype.removeKeyword = function (event, i, j) {
        this.onRemoveKeyword.emit({ event: event, i: i, j: j });
    };
    SubCategoryComponent.prototype.addNewSubLevelField = function (e) {
        e.preventDefault();
        this.onAddNewSubLevelField.emit(true);
    };
    SubCategoryComponent.prototype.expendMore = function (e, field) {
        e.preventDefault();
        this.onExpendMore.emit({ expand: true, field: field });
    };
    SubCategoryComponent.prototype.ingoreDefaultAction = function (e) {
        e.preventDefault();
    };
    SubCategoryComponent.ɵfac = function SubCategoryComponent_Factory(t) { return new (t || SubCategoryComponent)(); };
    SubCategoryComponent.ɵcmp = ɵɵdefineComponent({ type: SubCategoryComponent, selectors: [["lib-sub-category"]], inputs: { field: "field", length: "length", i: "i", j: "j" }, outputs: { onAddKeywordFromInput: "onAddKeywordFromInput", onKeyPress: "onKeyPress", onDrop: "onDrop", onAddNewField: "onAddNewField", onRemoveField: "onRemoveField", onChangeType: "onChangeType", onRemoveKeyword: "onRemoveKeyword", onAddNewSubLevelField: "onAddNewSubLevelField", onExpendMore: "onExpendMore" }, ngContentSelectors: _c3, decls: 42, vars: 31, consts: [[1, "field-item"], ["appearance", "outline", 1, "form-field", "field-size"], ["type", "text", "matInput", "", "required", "", "placeholder", "", 3, "readonly", "ngModelOptions", "ngModel", "ngModelChange"], ["required", "", 3, "disabled", "ngModel", "ngModelOptions", "ngModelChange"], ["value", "text"], ["value", "radio"], ["value", "select"], ["value", "checkbox"], ["value", "email"], ["value", "password"], ["value", "date"], ["value", "phone"], [3, "ngSwitch"], ["class", "flex-auto w-30 field-size", 4, "ngSwitchCase"], ["class", "flex-auto w-30 field-size", "appearance", "outline", 4, "ngSwitchCase"], ["class", "form-field field-size", "appearance", "outline", 4, "ngSwitchDefault"], [1, "form-field", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["mat-mini-fab", "", "color", "success", 1, "transparent-button", 3, "disabled", "click"], ["mat-mini-fab", "", "color", "primary", 1, "expand-button", 3, "disabled", "click"], [4, "ngIf"], [1, "flex-auto", "w-30", "field-size"], [3, "ngModel", "ngModelOptions", "ngModelChange"], ["appearance", "outline", 1, "flex-auto", "w-30", "field-size"], ["aria-label", "Video keywords; let index=index", "multiple", ""], ["chipList", ""], ["style", "min-height: 25px;", 3, "selected", "value", "removable", "removed", 4, "ngFor", "ngForOf"], ["placeholder", "add...", 3, "matChipInputFor", "matChipInputAddOnBlur", "matChipInputSeparatorKeyCodes", "matChipInputTokenEnd", "keyup"], ["chipsInput", ""], [2, "min-height", "25px", 3, "selected", "value", "removable", "removed"], ["matChipRemove", ""], ["matInput", "", "placeholder", "", 3, "type", "ngModelOptions", "ngModel", "ngModelChange"]], template: function SubCategoryComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵprojectionDef(_c1);
            ɵɵelementStart(0, "div", 0);
            ɵɵelementStart(1, "mat-form-field", 1);
            ɵɵelementStart(2, "mat-label");
            ɵɵtext(3, "Label");
            ɵɵelementEnd();
            ɵɵelementStart(4, "input", 2);
            ɵɵlistener("ngModelChange", function SubCategoryComponent_Template_input_ngModelChange_4_listener($event) { return ctx.field.label = $event; });
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(5, "mat-form-field", 1);
            ɵɵelementStart(6, "mat-label");
            ɵɵtext(7, "Cl\u00E9 du champ");
            ɵɵelementEnd();
            ɵɵelementStart(8, "input", 2);
            ɵɵlistener("ngModelChange", function SubCategoryComponent_Template_input_ngModelChange_8_listener($event) { return ctx.field.key = $event; });
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(9, "mat-form-field", 1);
            ɵɵelementStart(10, "mat-label");
            ɵɵtext(11, "Type");
            ɵɵelementEnd();
            ɵɵelementStart(12, "mat-select", 3);
            ɵɵlistener("ngModelChange", function SubCategoryComponent_Template_mat_select_ngModelChange_12_listener($event) { return ctx.field.type = $event; })("ngModelChange", function SubCategoryComponent_Template_mat_select_ngModelChange_12_listener() { return ctx.changeType(ctx.field.type, ctx.i, ctx.j); });
            ɵɵelementStart(13, "mat-option", 4);
            ɵɵtext(14, "Text");
            ɵɵelementEnd();
            ɵɵelementStart(15, "mat-option", 5);
            ɵɵtext(16, "Radio");
            ɵɵelementEnd();
            ɵɵelementStart(17, "mat-option", 6);
            ɵɵtext(18, "Selecteur");
            ɵɵelementEnd();
            ɵɵelementStart(19, "mat-option", 7);
            ɵɵtext(20, "Checkbox");
            ɵɵelementEnd();
            ɵɵelementStart(21, "mat-option", 8);
            ɵɵtext(22, "Email");
            ɵɵelementEnd();
            ɵɵelementStart(23, "mat-option", 9);
            ɵɵtext(24, "Password");
            ɵɵelementEnd();
            ɵɵelementStart(25, "mat-option", 10);
            ɵɵtext(26, "Date");
            ɵɵelementEnd();
            ɵɵelementStart(27, "mat-option", 11);
            ɵɵtext(28, "Phone");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementContainerStart(29, 12);
            ɵɵtemplate(30, SubCategoryComponent_div_30_Template, 3, 3, "div", 13);
            ɵɵtemplate(31, SubCategoryComponent_mat_form_field_31_Template, 8, 4, "mat-form-field", 14);
            ɵɵtemplate(32, SubCategoryComponent_mat_form_field_32_Template, 4, 4, "mat-form-field", 15);
            ɵɵelementContainerEnd();
            ɵɵelementStart(33, "mat-checkbox", 16);
            ɵɵlistener("ngModelChange", function SubCategoryComponent_Template_mat_checkbox_ngModelChange_33_listener($event) { return ctx.field.isMandatory = $event; });
            ɵɵtext(34, " obligatoire ");
            ɵɵelementEnd();
            ɵɵelementStart(35, "button", 17);
            ɵɵlistener("click", function SubCategoryComponent_Template_button_click_35_listener($event) { return ctx.addNewSubLevelField($event); });
            ɵɵelementStart(36, "mat-icon");
            ɵɵtext(37, "device_hub");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(38, "button", 18);
            ɵɵlistener("click", function SubCategoryComponent_Template_button_click_38_listener($event) { return ctx.expendMore($event, ctx.field); });
            ɵɵtemplate(39, SubCategoryComponent_mat_icon_39_Template, 2, 0, "mat-icon", 19);
            ɵɵtemplate(40, SubCategoryComponent_mat_icon_40_Template, 2, 0, "mat-icon", 19);
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵprojection(41);
        } if (rf & 2) {
            ɵɵadvance(1);
            ɵɵclassMap(!ctx.field.editable ? "readonly" : "");
            ɵɵadvance(3);
            ɵɵproperty("readonly", !ctx.field.editable)("ngModelOptions", ɵɵpureFunction0(26, _c0))("ngModel", ctx.field.label);
            ɵɵadvance(1);
            ɵɵclassMap(!ctx.field.editable ? "readonly" : "");
            ɵɵadvance(3);
            ɵɵproperty("readonly", !ctx.field.editable)("ngModelOptions", ɵɵpureFunction0(27, _c0))("ngModel", ctx.field.key);
            ɵɵadvance(4);
            ɵɵproperty("disabled", !ctx.field.editable)("ngModel", ctx.field.type)("ngModelOptions", ɵɵpureFunction0(28, _c0));
            ɵɵadvance(17);
            ɵɵproperty("ngSwitch", ctx.field.type);
            ɵɵadvance(1);
            ɵɵproperty("ngSwitchCase", "checkbox");
            ɵɵadvance(1);
            ɵɵproperty("ngSwitchCase", ɵɵpureFunction0(29, _c2).includes(ctx.field.type) ? ctx.field.type : !ctx.field.type);
            ɵɵadvance(2);
            ɵɵproperty("ngModel", ctx.field.isMandatory)("ngModelOptions", ɵɵpureFunction0(30, _c0));
            ɵɵadvance(2);
            ɵɵstyleProp("opacity", ctx.field.subLevel > 2 || !ctx.field.editable ? 0 : 1);
            ɵɵproperty("disabled", ctx.field.subLevel > 2 || !ctx.field.editable);
            ɵɵadvance(3);
            ɵɵstyleProp("opacity", ctx.field.forms && ctx.field.forms.length > 0 ? 1 : 0);
            ɵɵproperty("disabled", !(ctx.field.forms && ctx.field.forms.length > 0));
            ɵɵadvance(1);
            ɵɵproperty("ngIf", !ctx.field.expandMore);
            ɵɵadvance(1);
            ɵɵproperty("ngIf", ctx.field.expandMore);
        } }, directives: [MatFormField, MatLabel, MatInput, DefaultValueAccessor, RequiredValidator, NgControlStatus, NgModel, MatSelect, MatOption, NgSwitch, NgSwitchCase, NgSwitchDefault, MatCheckbox, MatButton, MatIcon, NgIf, MatChipList, NgForOf, MatChipInput, MatChip, MatChipRemove], styles: [".container[_ngcontent-%COMP%]{max-width:98%;margin:50px auto auto;padding-bottom:50px}.container[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:space-between}.input-category-name[_ngcontent-%COMP%]{font-size:15px;font-weight:500}.example-full-width[_ngcontent-%COMP%]{width:100%}.field-item[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;width:100%;flex-wrap:wrap}.field-item[_ngcontent-%COMP%]   .button-action[_ngcontent-%COMP%]{background-color:#6fe8d7;height:100%;margin:auto 15px auto auto;display:flex}.field-item[_ngcontent-%COMP%]   .button-action[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{box-shadow:none;background-color:transparent;color:#fff}.field-action[_ngcontent-%COMP%]{width:10%}hr[_ngcontent-%COMP%]{margin:50px 0}  .mat-form-field-appearance-fill .mat-form-field-flex{background-color:#fff}.category-action[_ngcontent-%COMP%]{display:flex;width:100%}.delete-field[_ngcontent-%COMP%]{margin:auto 2%}.radio-group[_ngcontent-%COMP%]   .mat-radio-button[_ngcontent-%COMP%]{margin-right:10px}.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary[_ngcontent-%COMP%]{background-color:#3f51b5;color:#fff;min-height:20px;font-size:10px}.move-icons[_ngcontent-%COMP%]{cursor:move}.category-item[_ngcontent-%COMP%]{display:flex;align-items:baseline;width:100%;border:1px solid #dce4e9;border-radius:8px}  mat-checkbox.form-field .mat-checkbox-checkmark-path{stroke:#000!important}  .readonly.mat-form-field-appearance-outline .mat-form-field-outline{color:transparent!important}.field-content[_ngcontent-%COMP%]{width:100%}.cdk-drag-preview[_ngcontent-%COMP%]{box-sizing:border-box;border-radius:4px;box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.cdk-drag-placeholder[_ngcontent-%COMP%]{opacity:0}.cdk-drag-animating[_ngcontent-%COMP%], .example-list.cdk-drop-list-dragging[_ngcontent-%COMP%]   .category-item[_ngcontent-%COMP%]:not(.cdk-drag-placeholder){transition:transform 250ms cubic-bezier(0,0,.2,1)}  .mat-form-field-appearance-fill.mat-form-field-disabled .mat-form-field-flex{background-color:rgba(0,0,0,.02);margin-bottom:-20px}  .mat-select{padding:0}.add-button-container[_ngcontent-%COMP%]{background:no-repeat padding-box #fff;border:1px dashed #dce4e9;border-radius:8px;margin-top:10px;padding:10px;display:flex;justify-content:space-between;width:98%;margin-left:0;margin-bottom:22px}.add-button-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{display:flex;align-items:center;background-color:transparent;border:none;margin:auto;cursor:pointer;font:17px/26px Nexa Text;letter-spacing:0;color:#c2c8d5;box-shadow:none}.expand-button[_ngcontent-%COMP%]{color:#5a607f;background-color:transparent;box-shadow:none}.expand-button[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%]{font-size:48px;margin-top:-20px;margin-right:15px}.transparent-button[_ngcontent-%COMP%]{background-color:transparent;box-shadow:none;width:40px;padding:0;margin:0;min-width:auto}"] });
    return SubCategoryComponent;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(SubCategoryComponent, [{
        type: Component,
        args: [{
                selector: 'lib-sub-category',
                templateUrl: './sub-category.component.html',
                styleUrls: ['./sub-category.component.scss']
            }]
    }], function () { return []; }, { field: [{
            type: Input
        }], length: [{
            type: Input
        }], i: [{
            type: Input
        }], j: [{
            type: Input
        }], onAddKeywordFromInput: [{
            type: Output
        }], onKeyPress: [{
            type: Output
        }], onDrop: [{
            type: Output
        }], onAddNewField: [{
            type: Output
        }], onRemoveField: [{
            type: Output
        }], onChangeType: [{
            type: Output
        }], onRemoveKeyword: [{
            type: Output
        }], onAddNewSubLevelField: [{
            type: Output
        }], onExpendMore: [{
            type: Output
        }] }); })();

function CreateProfileTemplateComponent_div_2_div_14_mat_icon_1_Template(rf, ctx) { if (rf & 1) {
    var _r350 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "mat-icon", 19);
    ɵɵlistener("click", function CreateProfileTemplateComponent_div_2_div_14_mat_icon_1_Template_mat_icon_click_0_listener($event) { ɵɵrestoreView(_r350); var icon_r348 = ctx.$implicit; var ctx_r349 = ɵɵnextContext(3); return ctx_r349.onSelectPicto($event, icon_r348.name); });
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    var icon_r348 = ctx.$implicit;
    var ctx_r347 = ɵɵnextContext(3);
    ɵɵstyleProp("color", ctx_r347.form.get("Picto").value === icon_r348.name ? "#830B6B" : "#000");
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", icon_r348.name, " ");
} }
function CreateProfileTemplateComponent_div_2_div_14_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 17);
    ɵɵtemplate(1, CreateProfileTemplateComponent_div_2_div_14_mat_icon_1_Template, 2, 3, "mat-icon", 18);
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r345 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ctx_r345.matIconList);
} }
function CreateProfileTemplateComponent_div_2_mat_option_23_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-option", 20);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    var tag_r351 = ctx.$implicit;
    ɵɵproperty("value", tag_r351);
    ɵɵadvance(1);
    ɵɵtextInterpolate(tag_r351);
} }
function CreateProfileTemplateComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    var _r353 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 3);
    ɵɵelementStart(1, "div", 4);
    ɵɵelementStart(2, "h3", 5);
    ɵɵtext(3, "Cr\u00E9ation d\u2019un nouveau profil d\u2019onboarding");
    ɵɵelementEnd();
    ɵɵelementStart(4, "p");
    ɵɵtext(5, "S\u00E9lectionnez l\u2019icon de votre choix et indiquez le nom de votre nouveau profil d\u2019onboarding");
    ɵɵelementEnd();
    ɵɵelementStart(6, "div", 6);
    ɵɵelementStart(7, "button", 7);
    ɵɵlistener("click", function CreateProfileTemplateComponent_div_2_Template_button_click_7_listener($event) { ɵɵrestoreView(_r353); var ctx_r352 = ɵɵnextContext(); return ctx_r352.onShowPictoList($event); });
    ɵɵelementStart(8, "mat-icon");
    ɵɵtext(9);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(10, "mat-form-field", 8);
    ɵɵelementStart(11, "mat-label");
    ɵɵtext(12, "Nom de votre nouveau profil");
    ɵɵelementEnd();
    ɵɵelement(13, "input", 9);
    ɵɵelementEnd();
    ɵɵtemplate(14, CreateProfileTemplateComponent_div_2_div_14_Template, 2, 1, "div", 10);
    ɵɵelementEnd();
    ɵɵelementStart(15, "mat-form-field", 8);
    ɵɵelementStart(16, "mat-label");
    ɵɵtext(17, "D\u00E9scription");
    ɵɵelementEnd();
    ɵɵelement(18, "textarea", 11);
    ɵɵelementEnd();
    ɵɵelementStart(19, "mat-form-field", 8);
    ɵɵelementStart(20, "mat-label");
    ɵɵtext(21, "Tags");
    ɵɵelementEnd();
    ɵɵelementStart(22, "mat-select", 12);
    ɵɵtemplate(23, CreateProfileTemplateComponent_div_2_mat_option_23_Template, 2, 2, "mat-option", 13);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(24, "mat-checkbox", 14);
    ɵɵtext(25, "Active");
    ɵɵelementEnd();
    ɵɵelementStart(26, "div", 15);
    ɵɵelementStart(27, "button", 16);
    ɵɵlistener("click", function CreateProfileTemplateComponent_div_2_Template_button_click_27_listener() { ɵɵrestoreView(_r353); var ctx_r354 = ɵɵnextContext(); return ctx_r354.onShowCategory(); });
    ɵɵtext(28);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r343 = ɵɵnextContext();
    ɵɵadvance(9);
    ɵɵtextInterpolate(ctx_r343.form.get("Picto").value === "" ? "contact_phone" : ctx_r343.form.get("Picto").value);
    ɵɵadvance(5);
    ɵɵproperty("ngIf", ctx_r343.isPictoListShow);
    ɵɵadvance(9);
    ɵɵproperty("ngForOf", ctx_r343.tags);
    ɵɵadvance(4);
    ɵɵstyleProp("opacity", ctx_r343.form.get("Name").value === "" || ctx_r343.form.get("Tags").value == "" ? 0.4 : 1);
    ɵɵproperty("disabled", ctx_r343.form.get("Name").value === "" || ctx_r343.form.get("Tags").value == "");
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ctx_r343.id !== "0" ? "Modifier un profil" : "Cr\u00E9er un nouveau profil", " ");
} }
function CreateProfileTemplateComponent_div_3_li_6_ng_container_4_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    var _r366 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "li", 19);
    ɵɵlistener("click", function CreateProfileTemplateComponent_div_3_li_6_ng_container_4_ng_container_1_Template_li_click_1_listener() { ɵɵrestoreView(_r366); var ctx_r365 = ɵɵnextContext(); var sub_r361 = ctx_r365.$implicit; var j_r362 = ctx_r365.index; var i_r359 = ɵɵnextContext().index; var ctx_r364 = ɵɵnextContext(2); return ctx_r364.onExpendMore({ field: sub_r361 }, i_r359, j_r362); });
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r368 = ɵɵnextContext();
    var sub_r361 = ctx_r368.$implicit;
    var j_r362 = ctx_r368.index;
    ɵɵadvance(1);
    ɵɵclassMap(sub_r361.expandMore ? "sub-title active" : "sub-title");
    ɵɵadvance(1);
    ɵɵtextInterpolate2(" ", j_r362 + 1, ". ", sub_r361.label, " ");
} }
function CreateProfileTemplateComponent_div_3_li_6_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, CreateProfileTemplateComponent_div_3_li_6_ng_container_4_ng_container_1_Template, 3, 4, "ng-container", 35);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    var sub_r361 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵproperty("ngIf", sub_r361 == null ? null : sub_r361.forms);
} }
function CreateProfileTemplateComponent_div_3_li_6_Template(rf, ctx) { if (rf & 1) {
    var _r370 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "li", 33);
    ɵɵelementStart(1, "span", 19);
    ɵɵlistener("click", function CreateProfileTemplateComponent_div_3_li_6_Template_span_click_1_listener() { ɵɵrestoreView(_r370); var cat_r358 = ctx.$implicit; var i_r359 = ctx.index; var ctx_r369 = ɵɵnextContext(2); return ctx_r369.onExpendMore({ field: cat_r358 }, i_r359); });
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementStart(3, "ol");
    ɵɵtemplate(4, CreateProfileTemplateComponent_div_3_li_6_ng_container_4_Template, 2, 1, "ng-container", 34);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    var cat_r358 = ctx.$implicit;
    ɵɵadvance(2);
    ɵɵtextInterpolate(cat_r358.name);
    ɵɵadvance(2);
    ɵɵproperty("ngForOf", cat_r358.forms);
} }
function CreateProfileTemplateComponent_div_3_div_16_div_8_ng_container_2_div_1_div_9_div_1_div_2_div_9_div_1_div_2_div_10_Template(rf, ctx) { if (rf & 1) {
    var _r398 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 32);
    ɵɵelementStart(1, "button", 59);
    ɵɵlistener("click", function CreateProfileTemplateComponent_div_3_div_16_div_8_ng_container_2_div_1_div_9_div_1_div_2_div_9_div_1_div_2_div_10_Template_button_click_1_listener() { ɵɵrestoreView(_r398); var k_r387 = ɵɵnextContext(4).index; var j_r380 = ɵɵnextContext(3).index; var i_r372 = ɵɵnextContext(3).index; var ctx_r396 = ɵɵnextContext(2); return ctx_r396.onAddNewField(i_r372, j_r380, k_r387); });
    ɵɵelementStart(2, "mat-icon");
    ɵɵtext(3, " add_box ");
    ɵɵelementEnd();
    ɵɵelementStart(4, "span");
    ɵɵtext(5, "Ajouter un champ");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    var l_r394 = ɵɵnextContext().index;
    var child_r386 = ɵɵnextContext(3).$implicit;
    ɵɵadvance(1);
    ɵɵstyleProp("opacity", (child_r386 == null ? null : child_r386.forms == null ? null : child_r386.forms.length) - 1 === l_r394 ? 1 : 0);
    ɵɵproperty("disabled", (child_r386 == null ? null : child_r386.forms == null ? null : child_r386.forms.length) - 1 !== l_r394);
} }
function CreateProfileTemplateComponent_div_3_div_16_div_8_ng_container_2_div_1_div_9_div_1_div_2_div_9_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    var _r405 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 47);
    ɵɵelementStart(1, "div", 48);
    ɵɵelementStart(2, "div", 49);
    ɵɵelementStart(3, "div", 58);
    ɵɵelementStart(4, "button", 51);
    ɵɵlistener("click", function CreateProfileTemplateComponent_div_3_div_16_div_8_ng_container_2_div_1_div_9_div_1_div_2_div_9_div_1_div_2_Template_button_click_4_listener() { ɵɵrestoreView(_r405); var l_r394 = ctx.index; var k_r387 = ɵɵnextContext(3).index; var j_r380 = ɵɵnextContext(3).index; var i_r372 = ɵɵnextContext(3).index; var ctx_r403 = ɵɵnextContext(2); return ctx_r403.onRemoveField(i_r372, j_r380, k_r387, l_r394); });
    ɵɵelementStart(5, "mat-icon");
    ɵɵtext(6, " delete ");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(7, "div", 52);
    ɵɵelementStart(8, "lib-sub-category", 53);
    ɵɵlistener("onAddKeywordFromInput", function CreateProfileTemplateComponent_div_3_div_16_div_8_ng_container_2_div_1_div_9_div_1_div_2_div_9_div_1_div_2_Template_lib_sub_category_onAddKeywordFromInput_8_listener($event) { ɵɵrestoreView(_r405); var l_r394 = ctx.index; var k_r387 = ɵɵnextContext(3).index; var j_r380 = ɵɵnextContext(3).index; var i_r372 = ɵɵnextContext(3).index; var ctx_r408 = ɵɵnextContext(2); return ctx_r408.addKeywordFromInput($event.event, i_r372, j_r380, k_r387, l_r394); })("onKeyPress", function CreateProfileTemplateComponent_div_3_div_16_div_8_ng_container_2_div_1_div_9_div_1_div_2_div_9_div_1_div_2_Template_lib_sub_category_onKeyPress_8_listener($event) { ɵɵrestoreView(_r405); var l_r394 = ctx.index; var k_r387 = ɵɵnextContext(3).index; var j_r380 = ɵɵnextContext(3).index; var i_r372 = ɵɵnextContext(3).index; var ctx_r412 = ɵɵnextContext(2); return ctx_r412.onKeyPress($event.event, i_r372, j_r380, k_r387, l_r394); })("onAddNewField", function CreateProfileTemplateComponent_div_3_div_16_div_8_ng_container_2_div_1_div_9_div_1_div_2_div_9_div_1_div_2_Template_lib_sub_category_onAddNewField_8_listener() { ɵɵrestoreView(_r405); var k_r387 = ɵɵnextContext(3).index; var j_r380 = ɵɵnextContext(3).index; var i_r372 = ɵɵnextContext(3).index; var ctx_r416 = ɵɵnextContext(2); return ctx_r416.onAddNewField(i_r372, j_r380, k_r387); })("onRemoveField", function CreateProfileTemplateComponent_div_3_div_16_div_8_ng_container_2_div_1_div_9_div_1_div_2_div_9_div_1_div_2_Template_lib_sub_category_onRemoveField_8_listener() { ɵɵrestoreView(_r405); var l_r394 = ctx.index; var k_r387 = ɵɵnextContext(3).index; var j_r380 = ɵɵnextContext(3).index; var i_r372 = ɵɵnextContext(3).index; var ctx_r420 = ɵɵnextContext(2); return ctx_r420.onRemoveField(i_r372, j_r380, k_r387, l_r394); })("onChangeType", function CreateProfileTemplateComponent_div_3_div_16_div_8_ng_container_2_div_1_div_9_div_1_div_2_div_9_div_1_div_2_Template_lib_sub_category_onChangeType_8_listener() { ɵɵrestoreView(_r405); var c2_r393 = ctx.$implicit; var l_r394 = ctx.index; var k_r387 = ɵɵnextContext(3).index; var j_r380 = ɵɵnextContext(3).index; var i_r372 = ɵɵnextContext(3).index; var ctx_r424 = ɵɵnextContext(2); return ctx_r424.onChangeType(c2_r393.type, i_r372, j_r380, k_r387, l_r394); })("onRemoveKeyword", function CreateProfileTemplateComponent_div_3_div_16_div_8_ng_container_2_div_1_div_9_div_1_div_2_div_9_div_1_div_2_Template_lib_sub_category_onRemoveKeyword_8_listener($event) { ɵɵrestoreView(_r405); var l_r394 = ctx.index; var k_r387 = ɵɵnextContext(3).index; var j_r380 = ɵɵnextContext(3).index; var i_r372 = ɵɵnextContext(3).index; var ctx_r428 = ɵɵnextContext(2); return ctx_r428.removeKeyword($event.event, i_r372, j_r380, k_r387, l_r394); })("onAddNewSubLevelField", function CreateProfileTemplateComponent_div_3_div_16_div_8_ng_container_2_div_1_div_9_div_1_div_2_div_9_div_1_div_2_Template_lib_sub_category_onAddNewSubLevelField_8_listener() { ɵɵrestoreView(_r405); var l_r394 = ctx.index; var k_r387 = ɵɵnextContext(3).index; var j_r380 = ɵɵnextContext(3).index; var i_r372 = ɵɵnextContext(3).index; var ctx_r432 = ɵɵnextContext(2); return ctx_r432.onAddNewSubLevelField(i_r372, j_r380, k_r387, l_r394); })("onExpendMore", function CreateProfileTemplateComponent_div_3_div_16_div_8_ng_container_2_div_1_div_9_div_1_div_2_div_9_div_1_div_2_Template_lib_sub_category_onExpendMore_8_listener($event) { ɵɵrestoreView(_r405); var l_r394 = ctx.index; var k_r387 = ɵɵnextContext(3).index; var j_r380 = ɵɵnextContext(3).index; var i_r372 = ɵɵnextContext(3).index; var ctx_r436 = ɵɵnextContext(2); return ctx_r436.onExpendMore($event, i_r372, j_r380, k_r387, l_r394); });
    ɵɵelement(9, "div", 56);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵtemplate(10, CreateProfileTemplateComponent_div_3_div_16_div_8_ng_container_2_div_1_div_9_div_1_div_2_div_9_div_1_div_2_div_10_Template, 6, 3, "div", 55);
    ɵɵelementEnd();
} if (rf & 2) {
    var c2_r393 = ctx.$implicit;
    var l_r394 = ctx.index;
    var ctx_r441 = ɵɵnextContext(3);
    var child_r386 = ctx_r441.$implicit;
    var k_r387 = ctx_r441.index;
    var field_r379 = ɵɵnextContext(3).$implicit;
    ɵɵadvance(4);
    ɵɵproperty("disabled", !field_r379.deleteable);
    ɵɵadvance(4);
    ɵɵproperty("field", c2_r393)("length", child_r386 == null ? null : child_r386.forms == null ? null : child_r386.forms.length)("i", k_r387)("j", l_r394);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", (child_r386 == null ? null : child_r386.forms == null ? null : child_r386.forms.length) - 1 === l_r394);
} }
function CreateProfileTemplateComponent_div_3_div_16_div_8_ng_container_2_div_1_div_9_div_1_div_2_div_9_div_1_Template(rf, ctx) { if (rf & 1) {
    var _r443 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 44, 45);
    ɵɵlistener("cdkDropListDropped", function CreateProfileTemplateComponent_div_3_div_16_div_8_ng_container_2_div_1_div_9_div_1_div_2_div_9_div_1_Template_div_cdkDropListDropped_0_listener($event) { ɵɵrestoreView(_r443); var ctx_r442 = ɵɵnextContext(10); return ctx_r442.drop($event); });
    ɵɵtemplate(2, CreateProfileTemplateComponent_div_3_div_16_div_8_ng_container_2_div_1_div_9_div_1_div_2_div_9_div_1_div_2_Template, 11, 6, "div", 46);
    ɵɵelementEnd();
} if (rf & 2) {
    var child_r386 = ɵɵnextContext(2).$implicit;
    ɵɵproperty("cdkDropListData", child_r386.forms);
    ɵɵadvance(2);
    ɵɵproperty("ngForOf", child_r386.forms);
} }
function CreateProfileTemplateComponent_div_3_div_16_div_8_ng_container_2_div_1_div_9_div_1_div_2_div_9_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 56);
    ɵɵtemplate(1, CreateProfileTemplateComponent_div_3_div_16_div_8_ng_container_2_div_1_div_9_div_1_div_2_div_9_div_1_Template, 3, 2, "div", 42);
    ɵɵelementEnd();
} if (rf & 2) {
    var child_r386 = ɵɵnextContext().$implicit;
    ɵɵadvance(1);
    ɵɵproperty("ngIf", child_r386.forms);
} }
function CreateProfileTemplateComponent_div_3_div_16_div_8_ng_container_2_div_1_div_9_div_1_div_2_div_10_Template(rf, ctx) { if (rf & 1) {
    var _r448 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 32);
    ɵɵelementStart(1, "button", 59);
    ɵɵlistener("click", function CreateProfileTemplateComponent_div_3_div_16_div_8_ng_container_2_div_1_div_9_div_1_div_2_div_10_Template_button_click_1_listener() { ɵɵrestoreView(_r448); var j_r380 = ɵɵnextContext(4).index; var i_r372 = ɵɵnextContext(3).index; var ctx_r446 = ɵɵnextContext(2); return ctx_r446.onAddNewField(i_r372, j_r380); });
    ɵɵelementStart(2, "mat-icon");
    ɵɵtext(3, "add_box");
    ɵɵelementEnd();
    ɵɵelementStart(4, "span");
    ɵɵtext(5, "Ajouter un champ");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    var k_r387 = ɵɵnextContext().index;
    var field_r379 = ɵɵnextContext(3).$implicit;
    ɵɵadvance(1);
    ɵɵstyleProp("opacity", (field_r379 == null ? null : field_r379.forms == null ? null : field_r379.forms.length) - 1 === k_r387 ? 1 : 0);
    ɵɵproperty("disabled", (field_r379 == null ? null : field_r379.forms == null ? null : field_r379.forms.length) - 1 !== k_r387);
} }
function CreateProfileTemplateComponent_div_3_div_16_div_8_ng_container_2_div_1_div_9_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    var _r454 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 47);
    ɵɵelementStart(1, "div", 48);
    ɵɵelementStart(2, "div", 49);
    ɵɵelementStart(3, "div", 57);
    ɵɵelementStart(4, "button", 51);
    ɵɵlistener("click", function CreateProfileTemplateComponent_div_3_div_16_div_8_ng_container_2_div_1_div_9_div_1_div_2_Template_button_click_4_listener() { ɵɵrestoreView(_r454); var k_r387 = ctx.index; var j_r380 = ɵɵnextContext(3).index; var i_r372 = ɵɵnextContext(3).index; var ctx_r452 = ɵɵnextContext(2); return ctx_r452.onRemoveField(i_r372, j_r380, k_r387); });
    ɵɵelementStart(5, "mat-icon");
    ɵɵtext(6, " delete");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(7, "div", 52);
    ɵɵelementStart(8, "lib-sub-category", 53);
    ɵɵlistener("onAddKeywordFromInput", function CreateProfileTemplateComponent_div_3_div_16_div_8_ng_container_2_div_1_div_9_div_1_div_2_Template_lib_sub_category_onAddKeywordFromInput_8_listener($event) { ɵɵrestoreView(_r454); var k_r387 = ctx.index; var j_r380 = ɵɵnextContext(3).index; var i_r372 = ɵɵnextContext(3).index; var ctx_r456 = ɵɵnextContext(2); return ctx_r456.addKeywordFromInput($event.event, i_r372, j_r380, k_r387); })("onKeyPress", function CreateProfileTemplateComponent_div_3_div_16_div_8_ng_container_2_div_1_div_9_div_1_div_2_Template_lib_sub_category_onKeyPress_8_listener($event) { ɵɵrestoreView(_r454); var k_r387 = ctx.index; var j_r380 = ɵɵnextContext(3).index; var i_r372 = ɵɵnextContext(3).index; var ctx_r459 = ɵɵnextContext(2); return ctx_r459.onKeyPress($event.event, i_r372, j_r380, k_r387); })("onAddNewField", function CreateProfileTemplateComponent_div_3_div_16_div_8_ng_container_2_div_1_div_9_div_1_div_2_Template_lib_sub_category_onAddNewField_8_listener() { ɵɵrestoreView(_r454); var j_r380 = ɵɵnextContext(3).index; var i_r372 = ɵɵnextContext(3).index; var ctx_r462 = ɵɵnextContext(2); return ctx_r462.onAddNewField(i_r372, j_r380); })("onRemoveField", function CreateProfileTemplateComponent_div_3_div_16_div_8_ng_container_2_div_1_div_9_div_1_div_2_Template_lib_sub_category_onRemoveField_8_listener() { ɵɵrestoreView(_r454); var k_r387 = ctx.index; var j_r380 = ɵɵnextContext(3).index; var i_r372 = ɵɵnextContext(3).index; var ctx_r465 = ɵɵnextContext(2); return ctx_r465.onRemoveField(i_r372, j_r380, k_r387); })("onChangeType", function CreateProfileTemplateComponent_div_3_div_16_div_8_ng_container_2_div_1_div_9_div_1_div_2_Template_lib_sub_category_onChangeType_8_listener() { ɵɵrestoreView(_r454); var child_r386 = ctx.$implicit; var k_r387 = ctx.index; var j_r380 = ɵɵnextContext(3).index; var i_r372 = ɵɵnextContext(3).index; var ctx_r468 = ɵɵnextContext(2); return ctx_r468.onChangeType(child_r386.type, i_r372, j_r380, k_r387); })("onRemoveKeyword", function CreateProfileTemplateComponent_div_3_div_16_div_8_ng_container_2_div_1_div_9_div_1_div_2_Template_lib_sub_category_onRemoveKeyword_8_listener($event) { ɵɵrestoreView(_r454); var k_r387 = ctx.index; var j_r380 = ɵɵnextContext(3).index; var i_r372 = ɵɵnextContext(3).index; var ctx_r471 = ɵɵnextContext(2); return ctx_r471.removeKeyword($event.event, i_r372, j_r380, k_r387); })("onAddNewSubLevelField", function CreateProfileTemplateComponent_div_3_div_16_div_8_ng_container_2_div_1_div_9_div_1_div_2_Template_lib_sub_category_onAddNewSubLevelField_8_listener() { ɵɵrestoreView(_r454); var k_r387 = ctx.index; var j_r380 = ɵɵnextContext(3).index; var i_r372 = ɵɵnextContext(3).index; var ctx_r474 = ɵɵnextContext(2); return ctx_r474.onAddNewSubLevelField(i_r372, j_r380, k_r387); })("onExpendMore", function CreateProfileTemplateComponent_div_3_div_16_div_8_ng_container_2_div_1_div_9_div_1_div_2_Template_lib_sub_category_onExpendMore_8_listener($event) { ɵɵrestoreView(_r454); var k_r387 = ctx.index; var j_r380 = ɵɵnextContext(3).index; var i_r372 = ɵɵnextContext(3).index; var ctx_r477 = ɵɵnextContext(2); return ctx_r477.onExpendMore($event, i_r372, j_r380, k_r387); });
    ɵɵtemplate(9, CreateProfileTemplateComponent_div_3_div_16_div_8_ng_container_2_div_1_div_9_div_1_div_2_div_9_Template, 2, 1, "div", 54);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵtemplate(10, CreateProfileTemplateComponent_div_3_div_16_div_8_ng_container_2_div_1_div_9_div_1_div_2_div_10_Template, 6, 3, "div", 55);
    ɵɵelementEnd();
} if (rf & 2) {
    var child_r386 = ctx.$implicit;
    var k_r387 = ctx.index;
    var ctx_r480 = ɵɵnextContext(3);
    var field_r379 = ctx_r480.$implicit;
    var j_r380 = ctx_r480.index;
    ɵɵadvance(4);
    ɵɵproperty("disabled", !child_r386.deleteable);
    ɵɵadvance(1);
    ɵɵstyleProp("opacity", !child_r386.deleteable ? 0 : 1);
    ɵɵadvance(3);
    ɵɵproperty("field", child_r386)("length", field_r379 == null ? null : field_r379.forms == null ? null : field_r379.forms.length)("i", j_r380)("j", k_r387);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", child_r386.expandMore);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", (field_r379 == null ? null : field_r379.forms == null ? null : field_r379.forms.length) - 1 === k_r387);
} }
function CreateProfileTemplateComponent_div_3_div_16_div_8_ng_container_2_div_1_div_9_div_1_Template(rf, ctx) { if (rf & 1) {
    var _r482 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 44, 45);
    ɵɵlistener("cdkDropListDropped", function CreateProfileTemplateComponent_div_3_div_16_div_8_ng_container_2_div_1_div_9_div_1_Template_div_cdkDropListDropped_0_listener($event) { ɵɵrestoreView(_r482); var ctx_r481 = ɵɵnextContext(7); return ctx_r481.drop($event); });
    ɵɵtemplate(2, CreateProfileTemplateComponent_div_3_div_16_div_8_ng_container_2_div_1_div_9_div_1_div_2_Template, 11, 9, "div", 46);
    ɵɵelementEnd();
} if (rf & 2) {
    var field_r379 = ɵɵnextContext(2).$implicit;
    ɵɵproperty("cdkDropListData", field_r379.forms);
    ɵɵadvance(2);
    ɵɵproperty("ngForOf", field_r379.forms);
} }
function CreateProfileTemplateComponent_div_3_div_16_div_8_ng_container_2_div_1_div_9_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 56);
    ɵɵtemplate(1, CreateProfileTemplateComponent_div_3_div_16_div_8_ng_container_2_div_1_div_9_div_1_Template, 3, 2, "div", 42);
    ɵɵelementEnd();
} if (rf & 2) {
    var field_r379 = ɵɵnextContext().$implicit;
    ɵɵadvance(1);
    ɵɵproperty("ngIf", field_r379.forms);
} }
function CreateProfileTemplateComponent_div_3_div_16_div_8_ng_container_2_div_1_div_10_Template(rf, ctx) { if (rf & 1) {
    var _r487 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 32);
    ɵɵelementStart(1, "button", 59);
    ɵɵlistener("click", function CreateProfileTemplateComponent_div_3_div_16_div_8_ng_container_2_div_1_div_10_Template_button_click_1_listener() { ɵɵrestoreView(_r487); var i_r372 = ɵɵnextContext(4).index; var ctx_r485 = ɵɵnextContext(2); return ctx_r485.onAddNewField(i_r372); });
    ɵɵelementStart(2, "mat-icon");
    ɵɵtext(3, "add_box");
    ɵɵelementEnd();
    ɵɵelementStart(4, "span");
    ɵɵtext(5, "Ajouter un champ");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    var j_r380 = ɵɵnextContext().index;
    var category_r371 = ɵɵnextContext(3).$implicit;
    ɵɵadvance(1);
    ɵɵstyleProp("opacity", (category_r371 == null ? null : category_r371.forms == null ? null : category_r371.forms.length) - 1 === j_r380 ? 1 : 0);
    ɵɵproperty("disabled", (category_r371 == null ? null : category_r371.forms == null ? null : category_r371.forms.length) - 1 !== j_r380);
} }
function CreateProfileTemplateComponent_div_3_div_16_div_8_ng_container_2_div_1_Template(rf, ctx) { if (rf & 1) {
    var _r492 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 47);
    ɵɵelementStart(1, "div", 48);
    ɵɵelementStart(2, "div", 49);
    ɵɵelementStart(3, "div", 50);
    ɵɵelementStart(4, "button", 51);
    ɵɵlistener("click", function CreateProfileTemplateComponent_div_3_div_16_div_8_ng_container_2_div_1_Template_button_click_4_listener() { ɵɵrestoreView(_r492); var j_r380 = ctx.index; var i_r372 = ɵɵnextContext(3).index; var ctx_r490 = ɵɵnextContext(2); return ctx_r490.onRemoveField(i_r372, j_r380); });
    ɵɵelementStart(5, "mat-icon");
    ɵɵtext(6, "delete ");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(7, "div", 52);
    ɵɵelementStart(8, "lib-sub-category", 53);
    ɵɵlistener("onAddKeywordFromInput", function CreateProfileTemplateComponent_div_3_div_16_div_8_ng_container_2_div_1_Template_lib_sub_category_onAddKeywordFromInput_8_listener($event) { ɵɵrestoreView(_r492); var j_r380 = ctx.index; var i_r372 = ɵɵnextContext(3).index; var ctx_r493 = ɵɵnextContext(2); return ctx_r493.addKeywordFromInput($event.event, i_r372, j_r380); })("onKeyPress", function CreateProfileTemplateComponent_div_3_div_16_div_8_ng_container_2_div_1_Template_lib_sub_category_onKeyPress_8_listener($event) { ɵɵrestoreView(_r492); var j_r380 = ctx.index; var i_r372 = ɵɵnextContext(3).index; var ctx_r495 = ɵɵnextContext(2); return ctx_r495.onKeyPress($event.event, i_r372, j_r380); })("onAddNewField", function CreateProfileTemplateComponent_div_3_div_16_div_8_ng_container_2_div_1_Template_lib_sub_category_onAddNewField_8_listener() { ɵɵrestoreView(_r492); var i_r372 = ɵɵnextContext(3).index; var ctx_r497 = ɵɵnextContext(2); return ctx_r497.onAddNewField(i_r372); })("onRemoveField", function CreateProfileTemplateComponent_div_3_div_16_div_8_ng_container_2_div_1_Template_lib_sub_category_onRemoveField_8_listener() { ɵɵrestoreView(_r492); var j_r380 = ctx.index; var i_r372 = ɵɵnextContext(3).index; var ctx_r499 = ɵɵnextContext(2); return ctx_r499.onRemoveField(i_r372, j_r380); })("onChangeType", function CreateProfileTemplateComponent_div_3_div_16_div_8_ng_container_2_div_1_Template_lib_sub_category_onChangeType_8_listener() { ɵɵrestoreView(_r492); var field_r379 = ctx.$implicit; var j_r380 = ctx.index; var i_r372 = ɵɵnextContext(3).index; var ctx_r501 = ɵɵnextContext(2); return ctx_r501.onChangeType(field_r379.type, i_r372, j_r380); })("onRemoveKeyword", function CreateProfileTemplateComponent_div_3_div_16_div_8_ng_container_2_div_1_Template_lib_sub_category_onRemoveKeyword_8_listener($event) { ɵɵrestoreView(_r492); var j_r380 = ctx.index; var i_r372 = ɵɵnextContext(3).index; var ctx_r503 = ɵɵnextContext(2); return ctx_r503.removeKeyword($event.event, i_r372, j_r380); })("onAddNewSubLevelField", function CreateProfileTemplateComponent_div_3_div_16_div_8_ng_container_2_div_1_Template_lib_sub_category_onAddNewSubLevelField_8_listener() { ɵɵrestoreView(_r492); var j_r380 = ctx.index; var i_r372 = ɵɵnextContext(3).index; var ctx_r505 = ɵɵnextContext(2); return ctx_r505.onAddNewSubLevelField(i_r372, j_r380); })("onExpendMore", function CreateProfileTemplateComponent_div_3_div_16_div_8_ng_container_2_div_1_Template_lib_sub_category_onExpendMore_8_listener($event) { ɵɵrestoreView(_r492); var j_r380 = ctx.index; var i_r372 = ɵɵnextContext(3).index; var ctx_r507 = ɵɵnextContext(2); return ctx_r507.onExpendMore($event, i_r372, j_r380); });
    ɵɵtemplate(9, CreateProfileTemplateComponent_div_3_div_16_div_8_ng_container_2_div_1_div_9_Template, 2, 1, "div", 54);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵtemplate(10, CreateProfileTemplateComponent_div_3_div_16_div_8_ng_container_2_div_1_div_10_Template, 6, 3, "div", 55);
    ɵɵelementEnd();
} if (rf & 2) {
    var field_r379 = ctx.$implicit;
    var j_r380 = ctx.index;
    var ctx_r509 = ɵɵnextContext(3);
    var category_r371 = ctx_r509.$implicit;
    var i_r372 = ctx_r509.index;
    ɵɵadvance(4);
    ɵɵproperty("disabled", !field_r379.deleteable);
    ɵɵadvance(1);
    ɵɵstyleProp("opacity", !field_r379.deleteable ? 0 : 1);
    ɵɵadvance(2);
    ɵɵclassMap(!field_r379.deleteable ? "disabled" : "");
    ɵɵadvance(1);
    ɵɵproperty("field", field_r379)("length", category_r371 == null ? null : category_r371.forms == null ? null : category_r371.forms.length)("i", i_r372)("j", j_r380);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", field_r379.expandMore);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", (category_r371 == null ? null : category_r371.forms == null ? null : category_r371.forms.length) - 1 === j_r380);
} }
function CreateProfileTemplateComponent_div_3_div_16_div_8_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, CreateProfileTemplateComponent_div_3_div_16_div_8_ng_container_2_div_1_Template, 11, 11, "div", 46);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    var category_r371 = ɵɵnextContext(2).$implicit;
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", category_r371.forms);
} }
function CreateProfileTemplateComponent_div_3_div_16_div_8_Template(rf, ctx) { if (rf & 1) {
    var _r512 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 44, 45);
    ɵɵlistener("cdkDropListDropped", function CreateProfileTemplateComponent_div_3_div_16_div_8_Template_div_cdkDropListDropped_0_listener($event) { ɵɵrestoreView(_r512); var ctx_r511 = ɵɵnextContext(3); return ctx_r511.drop($event); });
    ɵɵtemplate(2, CreateProfileTemplateComponent_div_3_div_16_div_8_ng_container_2_Template, 2, 1, "ng-container", 35);
    ɵɵelementEnd();
} if (rf & 2) {
    var category_r371 = ɵɵnextContext().$implicit;
    ɵɵproperty("cdkDropListData", category_r371.forms);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", category_r371.expandMore);
} }
function CreateProfileTemplateComponent_div_3_div_16_mat_icon_10_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-icon");
    ɵɵtext(1, "chevron_right");
    ɵɵelementEnd();
} }
function CreateProfileTemplateComponent_div_3_div_16_mat_icon_11_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-icon");
    ɵɵtext(1, "expand_more");
    ɵɵelementEnd();
} }
var _c0$1 = function () { return { standalone: true }; };
function CreateProfileTemplateComponent_div_3_div_16_Template(rf, ctx) { if (rf & 1) {
    var _r515 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 36);
    ɵɵelementStart(1, "div", 37);
    ɵɵelementStart(2, "button", 38);
    ɵɵlistener("click", function CreateProfileTemplateComponent_div_3_div_16_Template_button_click_2_listener($event) { ɵɵrestoreView(_r515); var i_r372 = ctx.index; var ctx_r514 = ɵɵnextContext(2); return ctx_r514.onRemoveCategory($event, i_r372); });
    ɵɵelementStart(3, "mat-icon");
    ɵɵtext(4, "delete");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(5, "div", 39);
    ɵɵelementStart(6, "div", 40);
    ɵɵelementStart(7, "input", 41);
    ɵɵlistener("ngModelChange", function CreateProfileTemplateComponent_div_3_div_16_Template_input_ngModelChange_7_listener($event) { ɵɵrestoreView(_r515); var category_r371 = ctx.$implicit; return category_r371.name = $event; });
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵtemplate(8, CreateProfileTemplateComponent_div_3_div_16_div_8_Template, 3, 2, "div", 42);
    ɵɵelementEnd();
    ɵɵelementStart(9, "button", 43);
    ɵɵlistener("click", function CreateProfileTemplateComponent_div_3_div_16_Template_button_click_9_listener($event) { ɵɵrestoreView(_r515); var category_r371 = ctx.$implicit; var i_r372 = ctx.index; var ctx_r517 = ɵɵnextContext(2); return ctx_r517.onExpendMore({ event: $event, field: category_r371 }, i_r372); });
    ɵɵtemplate(10, CreateProfileTemplateComponent_div_3_div_16_mat_icon_10_Template, 2, 0, "mat-icon", 35);
    ɵɵtemplate(11, CreateProfileTemplateComponent_div_3_div_16_mat_icon_11_Template, 2, 0, "mat-icon", 35);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    var category_r371 = ctx.$implicit;
    var ctx_r357 = ɵɵnextContext(2);
    ɵɵadvance(2);
    ɵɵproperty("disabled", !category_r371.deleteable);
    ɵɵadvance(1);
    ɵɵstyleProp("opacity", !category_r371.deleteable ? 0 : 1);
    ɵɵadvance(4);
    ɵɵproperty("readonly", ctx_r357.categories.length < 4 || !category_r371.editable)("readonly", !category_r371.editable)("ngModel", category_r371.name)("ngModelOptions", ɵɵpureFunction0(10, _c0$1));
    ɵɵadvance(1);
    ɵɵproperty("ngIf", category_r371.forms);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", !category_r371.expandMore);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", category_r371.expandMore);
} }
function CreateProfileTemplateComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    var _r519 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 21);
    ɵɵelementStart(1, "div", 22);
    ɵɵelementStart(2, "div", 23);
    ɵɵelementStart(3, "h3");
    ɵɵtext(4);
    ɵɵelementEnd();
    ɵɵelementStart(5, "ol", 24);
    ɵɵtemplate(6, CreateProfileTemplateComponent_div_3_li_6_Template, 5, 2, "li", 25);
    ɵɵelementEnd();
    ɵɵelementStart(7, "button", 26);
    ɵɵlistener("click", function CreateProfileTemplateComponent_div_3_Template_button_click_7_listener($event) { ɵɵrestoreView(_r519); var ctx_r518 = ɵɵnextContext(); return ctx_r518.onAddNewCategory($event); });
    ɵɵelementStart(8, "mat-icon");
    ɵɵtext(9, "add_box");
    ɵɵelementEnd();
    ɵɵtext(10, " Ajouter une nouvelle cat\u00E9gorie ");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(11, "button", 27);
    ɵɵtext(12, " Enregistrer le profil ");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(13, "div", 28);
    ɵɵelementStart(14, "div", 29, 30);
    ɵɵlistener("cdkDropListDropped", function CreateProfileTemplateComponent_div_3_Template_div_cdkDropListDropped_14_listener($event) { ɵɵrestoreView(_r519); var ctx_r520 = ɵɵnextContext(); return ctx_r520.drop($event); });
    ɵɵtemplate(16, CreateProfileTemplateComponent_div_3_div_16_Template, 12, 11, "div", 31);
    ɵɵelementStart(17, "div", 32);
    ɵɵelementStart(18, "button", 19);
    ɵɵlistener("click", function CreateProfileTemplateComponent_div_3_Template_button_click_18_listener($event) { ɵɵrestoreView(_r519); var ctx_r521 = ɵɵnextContext(); return ctx_r521.onAddNewCategory($event); });
    ɵɵelementStart(19, "mat-icon");
    ɵɵtext(20, "add");
    ɵɵelementEnd();
    ɵɵtext(21, " Ajouter une cat\u00E9gorie ");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r344 = ɵɵnextContext();
    ɵɵadvance(4);
    ɵɵtextInterpolate(ctx_r344.form.get("Name").value);
    ɵɵadvance(2);
    ɵɵproperty("ngForOf", ctx_r344.categories);
    ɵɵadvance(8);
    ɵɵproperty("cdkDropListData", ctx_r344.categories);
    ɵɵadvance(2);
    ɵɵproperty("ngForOf", ctx_r344.categories);
} }
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
        this.id = "0";
        this.parent = [];
        this.showProfileName = true;
        this.matIconList = [
            { name: 'developer_board' },
            { name: 'contact_phone' },
            { name: 'person' },
            { name: 'visibility' },
            { name: 'watch_later' },
            { name: 'work' },
            { name: 'web' },
            { name: 'whatshot' },
            { name: 'wifi' },
            { name: 'workspaces' },
            { name: 'wb_cloudy' },
            { name: 'water' },
            { name: 'waves' },
            { name: 'warning' },
            { name: 'space_das' }
        ];
        this.picto = "";
        this.categories = [
            {
                name: "Utilisateur",
                editable: false,
                deleteable: false,
                expandMore: false,
                suffixEndpoint: "category/user",
                forms: [
                    {
                        label: "Civilité",
                        key: "Salutation",
                        defaultValue: ["Mr.", "Mme."],
                        value: null,
                        size: 10,
                        isMandatory: true,
                        type: "select",
                        editable: false,
                        deleteable: false,
                        subLevel: 1,
                        expandMore: false,
                    },
                    {
                        label: "Type de profil",
                        key: "Type",
                        defaultValue: ["Manager", "Utilisateur"],
                        value: null,
                        size: 10,
                        isMandatory: true,
                        type: "select",
                        editable: false,
                        deleteable: false,
                        subLevel: 1,
                        expandMore: false,
                    },
                    {
                        label: "Nom",
                        key: "LastName",
                        defaultValue: null,
                        value: null,
                        size: 80,
                        isMandatory: true,
                        type: "text",
                        editable: false,
                        deleteable: false,
                        subLevel: 1,
                        expandMore: false,
                    },
                    {
                        label: "Prénom",
                        key: "FirstName",
                        defaultValue: null,
                        value: null,
                        size: 80,
                        isMandatory: true,
                        type: "text",
                        editable: false,
                        deleteable: false,
                        subLevel: 1,
                        expandMore: false,
                    },
                    {
                        label: "Email",
                        key: "Email",
                        defaultValue: null,
                        value: null,
                        size: 80,
                        isMandatory: true,
                        type: "email",
                        editable: false,
                        deleteable: false,
                        subLevel: 1,
                        expandMore: false,
                    },
                    {
                        label: "Téléphone fixe",
                        key: "Phone",
                        defaultValue: null,
                        value: null,
                        size: 20,
                        isMandatory: true,
                        type: "phone",
                        editable: false,
                        deleteable: false,
                        subLevel: 1,
                        expandMore: false,
                    },
                    {
                        label: "Téléphone portable",
                        key: "MobilePhone",
                        defaultValue: null,
                        value: null,
                        size: 20,
                        isMandatory: true,
                        type: "phone",
                        editable: false,
                        deleteable: false,
                        subLevel: 1,
                        expandMore: false,
                    },
                    {
                        label: "Fonction",
                        key: "Title",
                        defaultValue: null,
                        value: null,
                        size: 80,
                        isMandatory: true,
                        type: "text",
                        editable: false,
                        deleteable: false,
                        subLevel: 1,
                        expandMore: false,
                    },
                    {
                        label: "Accès au portail",
                        key: "Acc_s_au_portail_client_NowBoard__c",
                        defaultValue: ["Oui", "Non"],
                        value: null,
                        size: 10,
                        isMandatory: true,
                        type: "select",
                        editable: false,
                        deleteable: false,
                        subLevel: 1,
                        expandMore: false,
                    },
                    {
                        label: "Langue",
                        key: "Langue_maternelle__c",
                        defaultValue: ["Français", "Anglais"],
                        value: null,
                        size: 10,
                        isMandatory: true,
                        type: "select",
                        editable: false,
                        deleteable: false,
                        subLevel: 1,
                        expandMore: false,
                    },
                ],
            },
            {
                name: "Session d'utilisateur",
                editable: true,
                deleteable: true,
                selected: true,
                expandMore: false,
                suffixEndpoint: "category/user-session",
                forms: [
                    {
                        label: "Utilisateur local à créer",
                        key: "UserLocalToCreate",
                        defaultValue: null,
                        value: null,
                        size: 80,
                        isMandatory: false,
                        type: "checkbox",
                        editable: true,
                        deleteable: true,
                        subLevel: 1,
                        expandMore: false,
                        forms: [
                            {
                                label: "Login",
                                key: "Login",
                                defaultValue: null,
                                value: null,
                                size: 80,
                                isMandatory: true,
                                type: "text",
                                editable: true,
                                deleteable: false,
                                subLevel: 2,
                                expandMore: false,
                            },
                            {
                                label: "Mot de passe",
                                key: "Password",
                                defaultValue: null,
                                value: null,
                                size: 80,
                                isMandatory: true,
                                type: "password",
                                editable: true,
                                deleteable: true,
                                subLevel: 2,
                                expandMore: false,
                            },
                        ],
                    },
                    {
                        label: "Utilisateur AD (serveur) à créer",
                        key: "UserServerToCreate",
                        defaultValue: null,
                        value: null,
                        size: 80,
                        isMandatory: false,
                        type: "checkbox",
                        editable: true,
                        deleteable: true,
                        subLevel: 1,
                        expandMore: false,
                        forms: [
                            {
                                label: "Nom de domaine",
                                key: "DomainName",
                                defaultValue: null,
                                value: null,
                                size: 80,
                                isMandatory: true,
                                type: "text",
                                editable: true,
                                deleteable: false,
                                subLevel: 2,
                                expandMore: false,
                            },
                            {
                                label: "Votre login",
                                key: "YourLogin",
                                defaultValue: null,
                                value: null,
                                size: 80,
                                isMandatory: true,
                                type: "text",
                                editable: true,
                                deleteable: true,
                                subLevel: 2,
                                expandMore: false,
                            },
                            {
                                label: "Votre mot de passe.",
                                key: "YourPassword",
                                defaultValue: null,
                                value: null,
                                size: 80,
                                isMandatory: true,
                                type: "password",
                                editable: true,
                                deleteable: true,
                                subLevel: 2,
                                expandMore: false,
                            },
                            {
                                label: "Groupe de sécurité",
                                key: "GroupSecurity",
                                defaultValue: null,
                                value: null,
                                size: 80,
                                isMandatory: true,
                                type: "checkbox",
                                editable: true,
                                deleteable: true,
                                subLevel: 2,
                                expandMore: false,
                                forms: [
                                    {
                                        label: "Utilisateur avec les droits similaires *",
                                        key: "UserWithSimilarAccess",
                                        defaultValue: null,
                                        value: null,
                                        size: 80,
                                        isMandatory: true,
                                        type: "text",
                                        editable: true,
                                        deleteable: true,
                                        subLevel: 3,
                                        expandMore: false,
                                    },
                                    {
                                        label: "Descriptions",
                                        key: "Description",
                                        defaultValue: null,
                                        value: null,
                                        size: 255,
                                        isMandatory: true,
                                        type: "text",
                                        editable: true,
                                        deleteable: true,
                                        subLevel: 3,
                                        expandMore: false,
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },
            {
                name: "Messagerie",
                expandMore: false,
                suffixEndpoint: "category/messagerie",
                selected: true,
                editable: true,
                deleteable: true,
                forms: [
                    {
                        label: "Adresse mail à créer.",
                        key: "EmailToCreate",
                        defaultValue: null,
                        value: null,
                        size: 80,
                        isMandatory: true,
                        type: "checkbox",
                        editable: true,
                        deleteable: true,
                        subLevel: 1,
                        expandMore: false,
                        forms: [
                            {
                                label: "Adresse mail",
                                key: "Email",
                                defaultValue: null,
                                value: null,
                                size: 80,
                                isMandatory: true,
                                type: "email",
                                editable: true,
                                deleteable: true,
                                subLevel: 2,
                                expandMore: false,
                            },
                            {
                                label: "Type de licence (si gérées par le client)",
                                key: "SerialKey",
                                defaultValue: null,
                                value: null,
                                size: 1000,
                                isMandatory: true,
                                type: "text",
                                editable: true,
                                deleteable: true,
                                subLevel: 2,
                                expandMore: false,
                            },
                        ],
                    },
                    {
                        label: "Listes  de distribution.",
                        key: "DistributionList",
                        defaultValue: null,
                        value: null,
                        size: 80,
                        isMandatory: true,
                        type: "checkbox",
                        editable: true,
                        deleteable: true,
                        subLevel: 1,
                        expandMore: false,
                        forms: [
                            {
                                label: "Utilisateur avec les listes similaires *",
                                key: "UserWithSimilarList",
                                defaultValue: null,
                                value: null,
                                size: 80,
                                isMandatory: true,
                                type: "text",
                                editable: true,
                                deleteable: true,
                                subLevel: 2,
                                expandMore: false,
                            },
                            {
                                label: "Descriptions.",
                                key: "Description",
                                defaultValue: null,
                                value: null,
                                size: 1000,
                                isMandatory: true,
                                type: "text",
                                editable: true,
                                deleteable: true,
                                subLevel: 2,
                                expandMore: false,
                            },
                        ],
                    },
                    {
                        label: "Ajouter des boites mails délégués.",
                        key: "AddInboxMailDelegate",
                        defaultValue: null,
                        value: null,
                        size: 80,
                        isMandatory: true,
                        type: "checkbox",
                        editable: true,
                        deleteable: true,
                        subLevel: 1,
                        expandMore: false,
                        forms: [
                            {
                                label: "Descriptions.",
                                key: "Description",
                                defaultValue: null,
                                value: null,
                                size: 1000,
                                isMandatory: true,
                                type: "text",
                                editable: true,
                                deleteable: true,
                                subLevel: 2,
                                expandMore: false,
                            },
                        ],
                    },
                ],
            },
            {
                name: "Serveur",
                expandMore: false,
                suffixEndpoint: "category/serveur",
                selected: true,
                editable: true,
                deleteable: true,
                forms: [
                    {
                        label: "Accès aux lecteurs réseaux.",
                        key: "ReadNetworkAccess",
                        defaultValue: null,
                        value: null,
                        size: 80,
                        isMandatory: false,
                        type: "checkbox",
                        editable: true,
                        deleteable: true,
                        subLevel: 1,
                        expandMore: false,
                        forms: [
                            {
                                label: "Nom du serveur",
                                key: "ServerName",
                                defaultValue: null,
                                value: null,
                                size: 80,
                                isMandatory: true,
                                type: "text",
                                editable: true,
                                deleteable: false,
                                subLevel: 2,
                                expandMore: false,
                            },
                            {
                                label: "Chemin du dossier",
                                key: "FolderPath",
                                defaultValue: null,
                                value: null,
                                size: 80,
                                isMandatory: true,
                                type: "text",
                                editable: true,
                                deleteable: true,
                                subLevel: 2,
                                expandMore: false,
                            },
                            {
                                label: "Lettre à attribuer",
                                key: "AttributLetter",
                                defaultValue: null,
                                value: null,
                                size: 80,
                                isMandatory: true,
                                type: "text",
                                editable: true,
                                deleteable: true,
                                subLevel: 2,
                                expandMore: false,
                            },
                        ],
                    },
                ],
            },
            {
                name: "VPN",
                expandMore: false,
                suffixEndpoint: "category/vpn",
                selected: true,
                editable: true,
                deleteable: true,
                forms: [
                    {
                        label: "Accès au VPN",
                        key: "VpnAccess",
                        defaultValue: null,
                        value: null,
                        size: 80,
                        isMandatory: false,
                        type: "checkbox",
                        editable: true,
                        deleteable: true,
                        subLevel: 1,
                        expandMore: false,
                    },
                ],
            },
            {
                name: "Imprimantes",
                expandMore: false,
                suffixEndpoint: "category/imprimente",
                selected: true,
                editable: true,
                deleteable: true,
                forms: [
                    {
                        label: "Accès aux imprimantes.",
                        key: "PrinterAccess",
                        defaultValue: null,
                        value: null,
                        size: 80,
                        isMandatory: false,
                        type: "checkbox",
                        editable: true,
                        deleteable: true,
                        subLevel: 1,
                        expandMore: false,
                        forms: [
                            {
                                label: "Nom / Modèle de l'imprimante / localisation",
                                key: "PrinterName",
                                defaultValue: null,
                                value: null,
                                size: 1000,
                                isMandatory: true,
                                type: "text",
                                editable: true,
                                deleteable: true,
                                subLevel: 2,
                                expandMore: false,
                            },
                        ],
                    },
                ],
            },
            {
                name: "Applications",
                expandMore: false,
                suffixEndpoint: "category/application",
                selected: true,
                editable: true,
                deleteable: true,
                forms: [
                    {
                        label: "Accès aux applications ?",
                        key: "ApplicationAccess",
                        defaultValue: null,
                        value: null,
                        size: 80,
                        isMandatory: false,
                        type: "checkbox",
                        editable: true,
                        deleteable: true,
                        subLevel: 1,
                        expandMore: false,
                        forms: [
                            {
                                label: "Descriptions",
                                key: "Description",
                                defaultValue: null,
                                value: null,
                                size: 1000,
                                isMandatory: true,
                                type: "text",
                                editable: true,
                                deleteable: true,
                                subLevel: 2,
                                expandMore: false,
                            },
                        ],
                    },
                ],
            },
            {
                name: "Poste",
                expandMore: false,
                suffixEndpoint: "category/poste",
                selected: true,
                editable: true,
                deleteable: true,
                forms: [
                    {
                        label: "Paramétrage de poste",
                        key: "PostParameter",
                        defaultValue: null,
                        value: null,
                        size: 80,
                        isMandatory: false,
                        type: "checkbox",
                        editable: true,
                        deleteable: true,
                        subLevel: 1,
                        expandMore: false,
                        forms: [
                            {
                                label: "RealocatedEquipment",
                                key: "",
                                defaultValue: null,
                                value: null,
                                size: 1000,
                                isMandatory: true,
                                type: "text",
                                editable: true,
                                deleteable: true,
                                subLevel: 2,
                                expandMore: false,
                            },
                            {
                                label: "Nouveau poste",
                                key: "NewPost",
                                defaultValue: null,
                                value: null,
                                size: 80,
                                isMandatory: true,
                                type: "checkbox",
                                editable: true,
                                deleteable: true,
                                subLevel: 2,
                                expandMore: false,
                                forms: [
                                    {
                                        label: "Acheté chez Nowteam",
                                        key: "PurchasedAtNowteam",
                                        defaultValue: null,
                                        value: null,
                                        size: 1000,
                                        isMandatory: true,
                                        type: "text",
                                        editable: true,
                                        deleteable: true,
                                        subLevel: 3,
                                        expandMore: false,
                                    },
                                    {
                                        label: "Autre",
                                        key: "Other",
                                        defaultValue: null,
                                        value: null,
                                        size: 1000,
                                        isMandatory: true,
                                        type: "text",
                                        editable: true,
                                        deleteable: true,
                                        subLevel: 3,
                                        expandMore: false,
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },
            {
                name: "Autres",
                expandMore: false,
                suffixEndpoint: "category/autres",
                selected: true,
                editable: true,
                deleteable: true,
                forms: [
                    {
                        label: "Descriptions",
                        key: "Description",
                        defaultValue: null,
                        value: null,
                        size: 1000,
                        isMandatory: false,
                        type: "text",
                        editable: true,
                        deleteable: true,
                        subLevel: 1,
                        expandMore: false,
                    },
                ],
            },
        ];
    }
    CreateProfileTemplateComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        this.form = this.fb.group({
                            Name: ["", Validators.required],
                            Picto: [""],
                            Description: [""],
                            Tags: ["", Validators.required],
                            Status: [false, Validators.required],
                        });
                        _a = this;
                        return [4 /*yield*/, this.service.getAllTags()];
                    case 1:
                        _a.tags = _c.sent();
                        this.id = this.route.snapshot.paramMap.get("id");
                        if (!(this.id !== "0")) return [3 /*break*/, 3];
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
            name: "",
            editable: true,
            deleteable: true,
            expandMore: true,
            suffixEndpoint: "",
            forms: [
                {
                    label: "",
                    key: "",
                    defaultValue: null,
                    value: null,
                    size: 80,
                    isMandatory: true,
                    type: "text",
                    deleteable: true,
                    editable: true,
                },
            ],
        });
    };
    CreateProfileTemplateComponent.prototype.onAddNewField = function () {
        var params = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            params[_i] = arguments[_i];
        }
        var length = params.length;
        var forms = length === 1 ? this.categories[params[0]].forms : length === 2 ? this.categories[params[0]].forms[params[1]].forms : this.categories[params[0]].forms[params[1]].forms[params[2]].forms;
        forms.push({
            label: "",
            key: "",
            defaultValue: null,
            value: null,
            size: 80,
            isMandatory: true,
            type: "text",
            deleteable: true,
            editable: true,
            subLevel: params.length,
        });
    };
    CreateProfileTemplateComponent.prototype.onAddNewSubLevelField = function () {
        var params = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            params[_i] = arguments[_i];
        }
        console.log(params.length - 1);
        var length = params.length;
        var forms = length === 2 ? this.categories[params[0]].forms[params[length - 1]] : length === 3 ? this.categories[params[0]].forms[params[1]].forms[params[length - 1]] : this.categories[params[0]].forms[params[1]].forms[params[2]].forms[params[length - 1]];
        forms.expandMore = true;
        forms.forms = [];
        forms.forms.push({
            label: "",
            key: "",
            defaultValue: null,
            value: null,
            size: 80,
            isMandatory: true,
            type: "text",
            deleteable: true,
            editable: true,
            subLevel: params.length,
            expandMore: true,
        });
        console.log(this.categories);
    };
    CreateProfileTemplateComponent.prototype.onRemoveField = function () {
        var params = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            params[_i] = arguments[_i];
        }
        var length = params.length;
        var forms = length === 2 ? this.categories[params[0]].forms : length === 3 ? this.categories[params[0]].forms[params[1]].forms : this.categories[params[0]].forms[params[1]].forms[params[2]].forms;
        forms.splice(params[length - 1], 1);
    };
    CreateProfileTemplateComponent.prototype.onRemoveCategory = function (e, i) {
        e.preventDefault();
        this.categories.splice(i, 1);
    };
    CreateProfileTemplateComponent.prototype.onChangeCategory = function () {
        return this.categories.every(function (cat) { return cat.name !== "" && cat.forms.every(function (field) { return field.label !== "" && field.type !== ""; }); });
    };
    CreateProfileTemplateComponent.prototype.onSubmit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!(this.form.valid && this.onChangeCategory())) return [3 /*break*/, 7];
                        if (!(this.id !== "0")) return [3 /*break*/, 2];
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
                        if (!result) return [3 /*break*/, 6];
                        return [4 /*yield*/, this.service.getAllProfil()];
                    case 5:
                        _b.sent();
                        this.router.navigate([this.service.mainPath]);
                        return [3 /*break*/, 7];
                    case 6:
                        console.log("errror......");
                        _b.label = 7;
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    CreateProfileTemplateComponent.prototype.onChangeType = function (type) {
        var params = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            params[_i - 1] = arguments[_i];
        }
        var length = params.length;
        var forms = length === 2 ? this.categories[params[0]].forms : length === 3 ? this.categories[params[0]].forms[params[1]].forms : this.categories[params[0]].forms[params[1]].forms[params[2]].forms;
        if (type === "select" || type === "radio") {
            forms[params[length - 1]].defaultValue = [];
        }
        else if (type === "text") {
            forms[params[length - 1]].defaultValue = "";
        }
        else {
            forms[params[length - 1]].defaultValue = false;
        }
    };
    CreateProfileTemplateComponent.prototype.onKeyPress = function (event) {
        var params = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            params[_i - 1] = arguments[_i];
        }
        var length = params.length;
        var forms = length === 2 ? this.categories[params[0]].forms[params[length - 1]] : length === 3 ? this.categories[params[0]].forms[params[1]].forms[params[length - 1]] : this.categories[params[0]].forms[params[1]].forms[params[2]].forms[params[length - 1]];
        if (event.key === ";") {
            var exist = forms.defaultValue.find(function (opt) { return opt.toLocaleLowerCase() === event.target.value.split(";")[0].toLocaleLowerCase(); });
            if (!exist) {
                forms.defaultValue.push(event.target.value.split(";")[0]);
                event.target.value = "";
            }
            else {
                event.target.value = "";
            }
        }
    };
    CreateProfileTemplateComponent.prototype.removeKeyword = function (keyword) {
        var params = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            params[_i - 1] = arguments[_i];
        }
        var length = params.length;
        var forms = length === 2 ? this.categories[params[0]].forms[params[length - 1]] : length === 3 ? this.categories[params[0]].forms[params[1]].forms[params[length - 1]] : this.categories[params[0]].forms[params[1]].forms[params[2]].forms[params[length - 1]];
        forms.defaultValue = forms.defaultValue.filter(function (option) { return option !== keyword; });
    };
    CreateProfileTemplateComponent.prototype.onExpendMore = function (event) {
        var params = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            params[_i - 1] = arguments[_i];
        }
        if (event) {
            if (event.event) {
                event.event.preventDefault();
            }
            if (event.field && !event.field.expandMore) {
                for (var i = 0; i < this.categories.length; i++) {
                    this.categories[i].expandMore = false;
                    if (this.categories[i].forms) {
                        for (var j = 0; j < this.categories[i].forms.length; j++) {
                            this.categories[i].forms[j].expandMore = false;
                        }
                    }
                }
            }
        }
        if (params.length === 1) {
            this.categories[params[0]].expandMore = !this.categories[params[0]].expandMore;
        }
        else if (params.length === 2) {
            if (this.categories[params[0]].forms[params[1]].expandMore) {
                this.categories[params[0]].forms[params[1]].expandMore = false;
            }
            else {
                this.categories[params[0]].expandMore = true;
                this.categories[params[0]].forms[params[1]].expandMore = true;
            }
        }
        else if (params.length === 3) {
            if (this.categories[params[0]].forms[params[1]].forms[params[2]].expandMore) {
                this.categories[params[0]].forms[params[1]].forms[params[2]].expandMore = false;
            }
            else {
                this.categories[params[0]].expandMore = true;
                this.categories[params[0]].forms[params[1]].expandMore = true;
                this.categories[params[0]].forms[params[1]].forms[params[2]].expandMore = true;
            }
        }
        else {
            if (this.categories[params[0]].forms[params[1]].forms[params[2]].forms[params[3]].expandMore) {
                this.categories[params[0]].forms[params[1]].forms[params[2]].forms[params[3]].expandMore = false;
            }
            else {
                this.categories[params[0]].expandMore = true;
                this.categories[params[0]].forms[params[1]].expandMore = true;
                this.categories[params[0]].forms[params[1]].forms[params[2]].expandMore = true;
                this.categories[params[0]].forms[params[1]].forms[params[2]].forms[params[3]].expandMore = true;
            }
        }
    };
    CreateProfileTemplateComponent.prototype.addKeywordFromInput = function (event) {
        var params = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            params[_i - 1] = arguments[_i];
        }
        var input = event.input;
        var value = event.value;
        var length = params.length;
        var forms = length === 2 ? this.categories[params[0]].forms[params[length - 1]] : length === 3 ? this.categories[params[0]].forms[params[1]].forms[params[length - 1]] : this.categories[params[0]].forms[params[1]].forms[params[2]].forms[params[length - 1]];
        if (value) {
            var exist = forms.defaultValue.find(function (opt) { return opt.toLocaleLowerCase() === event.value.toLocaleLowerCase(); });
            if (!exist) {
                forms.defaultValue.push(value.trim());
                input.value = "";
            }
            else {
                input.value = "";
            }
        }
    };
    CreateProfileTemplateComponent.prototype.drop = function (event) {
        console.log("log", this.categories);
        if (event.previousContainer === event.container) {
            moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
        }
        else {
            transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
        }
    };
    CreateProfileTemplateComponent.prototype.ingoreDefaultAction = function (e) {
        e.preventDefault();
    };
    CreateProfileTemplateComponent.prototype.onShowCategory = function () {
        this.showProfileName = !this.showProfileName;
    };
    CreateProfileTemplateComponent.prototype.onSelectPicto = function (e, picto) {
        e.preventDefault();
        this.form.patchValue({ Picto: picto });
        this.isPictoListShow = !this.isPictoListShow;
    };
    CreateProfileTemplateComponent.prototype.onShowPictoList = function (e) {
        e.preventDefault();
        this.isPictoListShow = !this.isPictoListShow;
    };
    CreateProfileTemplateComponent.ɵfac = function CreateProfileTemplateComponent_Factory(t) { return new (t || CreateProfileTemplateComponent)(ɵɵdirectiveInject(FormBuilder), ɵɵdirectiveInject(OnboardingService), ɵɵdirectiveInject(ActivatedRoute), ɵɵdirectiveInject(Router)); };
    CreateProfileTemplateComponent.ɵcmp = ɵɵdefineComponent({ type: CreateProfileTemplateComponent, selectors: [["onboarding-create-profile-template"]], decls: 4, vars: 3, consts: [[3, "formGroup", "submit"], ["class", "box-title", 4, "ngIf"], ["class", "category", 4, "ngIf"], [1, "box-title"], [1, "box-title-content"], [1, "title"], [1, "profil-name-content"], ["mat-raised-button", "", "color", "primary", 1, "add-picto", 3, "click"], ["appearance", "outline", 1, "example-full-width"], ["type", "text", "matInput", "", "formControlName", "Name", "placeholder", "Ex. Manager"], ["class", "list-picto", 4, "ngIf"], ["type", "text", "matInput", "", "formControlName", "Description", "rows", "4", "placeholder", ""], ["formControlName", "Tags", "required", ""], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "Status", 1, "form-field"], [1, "link-create-profil"], ["mat-raised-button", "", "color", "primary", 1, "link-add-profil", 3, "disabled", "click"], [1, "list-picto"], [3, "color", "click", 4, "ngFor", "ngForOf"], [3, "click"], [3, "value"], [1, "category"], [1, "side-bar"], [1, "summary"], ["type", "I"], ["class", "li-title", 4, "ngFor", "ngForOf"], ["mat-button", "", 1, "add-category", "transparent", 3, "click"], ["mat-button", "", "type", "submit", 1, "register-button"], ["cdkDropListGroup", "", 1, "fields"], ["cdkDropList", "", 1, "example-list", "mt-20", 3, "cdkDropListData", "cdkDropListDropped"], ["parentList", "cdkDropList"], ["class", "category-item", "cdkDrag", "", 4, "ngFor", "ngForOf"], [1, "add-button-container"], [1, "li-title"], [4, "ngFor", "ngForOf"], [4, "ngIf"], ["cdkDrag", "", 1, "category-item"], ["cdkDragHandle", "", 1, "left-action", "move-icons"], ["mat-raised-button", "", 1, "transparent-button", 3, "disabled", "click"], [1, "field-content"], [1, "field-item"], ["type", "text", "required", "", "placeholder", "Saisir le nom de la cat\u00E9gorie", 1, "example-full-width", "input-category-name", 3, "readonly", "ngModel", "ngModelOptions", "ngModelChange"], ["cdkDropList", "", 3, "cdkDropListData", "cdkDropListDropped", 4, "ngIf"], ["mat-mini-fab", "", "color", "primary", 1, "expand-button", 3, "click"], ["cdkDropList", "", 3, "cdkDropListData", "cdkDropListDropped"], ["childList", "cdkDropList"], ["class", "", 4, "ngFor", "ngForOf"], [1, ""], ["cdkDrag", ""], [1, "fields-content"], [1, "button-action"], ["mat-mini-fab", "", "color", "warn", 1, "delete-field", "transparent-button", 3, "disabled", "click"], [1, "fields-container"], [3, "field", "length", "i", "j", "onAddKeywordFromInput", "onKeyPress", "onAddNewField", "onRemoveField", "onChangeType", "onRemoveKeyword", "onAddNewSubLevelField", "onExpendMore"], ["class", "child", 4, "ngIf"], ["class", "add-button-container", 4, "ngIf"], [1, "child"], [1, "button-action", "child-2-background"], [1, "button-action", "child-3-background"], ["mat-raised-button", "", "color", "primary", 2, "margin", "10px auto", 3, "disabled", "click"]], template: function CreateProfileTemplateComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵelementStart(0, "main");
            ɵɵelementStart(1, "form", 0);
            ɵɵlistener("submit", function CreateProfileTemplateComponent_Template_form_submit_1_listener() { return ctx.onSubmit(); });
            ɵɵtemplate(2, CreateProfileTemplateComponent_div_2_Template, 29, 7, "div", 1);
            ɵɵtemplate(3, CreateProfileTemplateComponent_div_3_Template, 22, 4, "div", 2);
            ɵɵelementEnd();
            ɵɵelementEnd();
        } if (rf & 2) {
            ɵɵadvance(1);
            ɵɵproperty("formGroup", ctx.form);
            ɵɵadvance(1);
            ɵɵproperty("ngIf", ctx.showProfileName);
            ɵɵadvance(1);
            ɵɵproperty("ngIf", !ctx.showProfileName);
        } }, directives: [ɵangular_packages_forms_forms_y, NgControlStatusGroup, FormGroupDirective, NgIf, MatButton, MatIcon, MatFormField, MatLabel, MatInput, DefaultValueAccessor, NgControlStatus, FormControlName, MatSelect, RequiredValidator, NgForOf, MatCheckbox, MatOption, CdkDropListGroup, CdkDropList, CdkDrag, CdkDragHandle, NgModel, SubCategoryComponent], styles: ["main[_ngcontent-%COMP%]{background:no-repeat padding-box #f4f7f9;height:100vh;width:100%;display:flex;flex-direction:column;align-items:center}main[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;height:100%;width:100%}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]{width:786px;background:no-repeat padding-box #fff;border:1px solid #dce4e9;border-radius:6px;opacity:1;margin:auto;padding:0 25px}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{text-align:center;font:900 32px/48px Nexa;letter-spacing:0;color:#171f26}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font:18px/24px Nexa Text;letter-spacing:0;color:#171f26}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .profil-name-content[_ngcontent-%COMP%]{display:flex;align-items:center;position:relative}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .profil-name-content[_ngcontent-%COMP%]   .add-picto[_ngcontent-%COMP%]{margin-right:15px;min-width:50px;width:30px;padding:9px 12px}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .profil-name-content[_ngcontent-%COMP%]   .add-picto[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin-right:10px}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .profil-name-content[_ngcontent-%COMP%]   .list-picto[_ngcontent-%COMP%]{position:absolute;height:200px;width:100%;background:no-repeat padding-box #fff;border:1px solid #171f26;border-radius:8px;top:78%;z-index:1}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .profil-name-content[_ngcontent-%COMP%]   .list-picto[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin:15px;border:none;font-size:40px}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .profil-name-content[_ngcontent-%COMP%]   .list-picto[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]:hover{color:#830b6b!important;cursor:pointer}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .box-title-content[_ngcontent-%COMP%]{width:100%;margin:25px auto}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font:900 32px/38px Nexa;letter-spacing:0;color:#171f26}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font:15px/26px Nexa Text;letter-spacing:0;color:#171f26;text-align:center}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .link-create-profil[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:center}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{text-align:center;border:1px solid #543cb6;border-radius:7px;padding:.7em 2em .5em;display:flex;align-items:center;background-color:transparent;font:bold 15px/17px Nexa;letter-spacing:0;color:#543cb6}main[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:space-between}.input-category-name[_ngcontent-%COMP%]{border:none;outline:0;text-align:left;font:bold 20px/48px Nexa Text;letter-spacing:0;color:#171f26}.example-full-width[_ngcontent-%COMP%]{width:100%}.field-action[_ngcontent-%COMP%]{width:10%}.field-size[_ngcontent-%COMP%]{width:90%;margin:auto 2% auto auto}  .mat-form-field-appearance-fill .mat-form-field-flex{background-color:#fff}  .mat-form-field-appearance-outline .mat-form-field-infix{padding:.5em 0}  .mat-select{padding:.5em 0}  .mat-form-field-appearance-fill .mat-form-field-underline::before{background-color:transparent}  .mat-form-field-wrapper{padding-bottom:0!important}[_nghost-%COMP%]     .cdk-drag-preview .input-category-name div.mat-form-field-outline-start, [_nghost-%COMP%]     .input-category-name div.mat-form-field-outline-start{border-color:0!important;border-width:0!important}[_nghost-%COMP%]     .input-category-name .mat-form-field-outline-gap{border-color:0!important;border-width:0!important}  mat-checkbox.form-field .mat-checkbox-checkmark-path{stroke:#000!important}[_nghost-%COMP%]     .mat-checkbox-checked.mat-accent .mat-checkbox-background, [_nghost-%COMP%]     .mat-checkbox-indeterminate.mat-accent .mat-checkbox-background{background-color:transparent}[_nghost-%COMP%]     .input-category-name .mat-form-field-outline-end{border-color:0!important;border-width:0!important}[_nghost-%COMP%]     .input-category-name .mat-form-field-label-wrapper{display:none}[_nghost-%COMP%]     .input-category-name .mat-form-field-appearance-outline .mat-form-field-outline{color:transparent!important}[_nghost-%COMP%]     .input-category-name .mat-form-field-infix{border-top:none}[_nghost-%COMP%]     .input-category-name .mat-form-field-appearance-outline .mat-form-field-infix{padding:0 0 1em!important}.category-action[_ngcontent-%COMP%]{display:flex;width:100%}.delete-field[_ngcontent-%COMP%]{margin:auto 2%}.radio-group[_ngcontent-%COMP%]   .mat-radio-button[_ngcontent-%COMP%]{margin-right:10px}.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary[_ngcontent-%COMP%]{background-color:#3f51b5;color:#fff;min-height:20px;font-size:10px}.move-icons[_ngcontent-%COMP%]{cursor:move}.category-item[_ngcontent-%COMP%], .cdk-drag-placeholder[_ngcontent-%COMP%]{display:flex;align-items:baseline;width:100%;border:1px solid #dce4e9;border-radius:8px;background-color:#fff;margin-top:10px;min-height:60px}.category-item[_ngcontent-%COMP%]   .left-action[_ngcontent-%COMP%], .cdk-drag-placeholder[_ngcontent-%COMP%]   .left-action[_ngcontent-%COMP%]{height:auto;background-color:#49a094;padding-top:7px;width:40px;-ms-grid-row-align:stretch;align-self:stretch;border-top-left-radius:8px;border-bottom-left-radius:8px}.category-item[_ngcontent-%COMP%]   .left-action[_ngcontent-%COMP%]   .transparent-button[_ngcontent-%COMP%], .cdk-drag-placeholder[_ngcontent-%COMP%]   .left-action[_ngcontent-%COMP%]   .transparent-button[_ngcontent-%COMP%]{background-color:transparent;box-shadow:none;width:40px;padding:0;margin:0;min-width:auto;color:#fff}.category-item[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%], .cdk-drag-placeholder[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%]{width:100%;-ms-grid-row-align:center;align-self:center}.category-item[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%], .cdk-drag-placeholder[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;border:transparent!important}.category-item[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]   .mat-form-field-wrapper[_ngcontent-%COMP%]   .mat-form-field-flex[_ngcontent-%COMP%]   .mat-form-field-outline[_ngcontent-%COMP%], .category-item[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%]   .mat-form-field-outline[_ngcontent-%COMP%], .cdk-drag-placeholder[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]   .mat-form-field-wrapper[_ngcontent-%COMP%]   .mat-form-field-flex[_ngcontent-%COMP%]   .mat-form-field-outline[_ngcontent-%COMP%], .cdk-drag-placeholder[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%]   .mat-form-field-outline[_ngcontent-%COMP%]{color:transparent!important}.cdk-drag-preview[_ngcontent-%COMP%]{box-sizing:border-box;border-radius:4px;opacity:1}.cdk-drag-preview[_ngcontent-%COMP%]   .expand-button[_ngcontent-%COMP%]{color:#5a607f;background-color:transparent;box-shadow:none;margin-right:28px}.cdk-drag-placeholder[_ngcontent-%COMP%]{opacity:0}.cdk-drag-animating[_ngcontent-%COMP%], .example-list.cdk-drop-list-dragging[_ngcontent-%COMP%]   .category-item[_ngcontent-%COMP%]:not(.cdk-drag-placeholder){transition:transform 250ms cubic-bezier(0,0,.2,1)}.child[_ngcontent-%COMP%]{margin-left:0}.category[_ngcontent-%COMP%]{display:flex;flex-direction:row;width:100vw}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]{width:250px;background-color:#fff;margin:10px 20px;border-radius:5px;border:1px solid #dbcbcb96}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:25px;border-bottom:1px solid #dbcbcb96;margin:10px;padding-bottom:5px;font-family:\"Nexa Text\"}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]{font-weight:600;margin-left:-27px;font-size:15px;list-style-position:inside}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:5px;margin:5px auto;cursor:pointer;text-align:left;font:12px/19px Nexa Text;letter-spacing:0;color:#535760}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]{padding-left:0;margin-left:0}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.li-title[_ngcontent-%COMP%]{font-size:14px;font-weight:600}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.sub-title[_ngcontent-%COMP%]{list-style:none;padding-left:20px}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.sub-title.active[_ngcontent-%COMP%], .category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.sub-title.active[_ngcontent-%COMP%]::marker, .category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.sub-title[_ngcontent-%COMP%]:hover{font-weight:600;background:no-repeat padding-box #e5e8ee;border-radius:5px}.category[_ngcontent-%COMP%]   .fields[_ngcontent-%COMP%]{width:90%;max-height:100vh;overflow:auto;margin-right:.5%;overflow-x:hidden}.category[_ngcontent-%COMP%]   .disabled[_ngcontent-%COMP%]{background-color:#f4f7f9!important}.category[_ngcontent-%COMP%]   .expand-button[_ngcontent-%COMP%]{color:#5a607f;background-color:transparent;box-shadow:none;margin-right:28px}.category[_ngcontent-%COMP%]   .expand-button[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%]{font-size:40px}.category[_ngcontent-%COMP%]   .transparent-button[_ngcontent-%COMP%]{background-color:transparent;box-shadow:none;width:40px;padding:0;margin:0;min-width:auto;color:#fff}.add-button-container[_ngcontent-%COMP%]{background:no-repeat padding-box #fff;border:1px dashed #dce4e9;border-radius:8px;margin-top:10px;padding:10px;display:flex;justify-content:space-between;width:96.5%;margin-left:20px;margin-bottom:22px}.add-button-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{display:flex;align-items:center;background-color:transparent;border:none;margin:auto;cursor:pointer;font:17px/26px Nexa Text;letter-spacing:0;color:#c2c8d5;box-shadow:none}.add-category[_ngcontent-%COMP%]{border:1px dashed #c2c8d5;border-radius:5px;margin-left:10px;margin-bottom:10px;font:bold 12px/19px Nexa Text;letter-spacing:0;color:#c2c8d5}.cdk-drag[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]{display:flex;height:100%;margin:20px auto auto;width:100%}.cdk-drag[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]   .button-action[_ngcontent-%COMP%]{background-color:#6fe8d7;-ms-grid-row-align:stretch;align-self:stretch;margin-top:0;margin-left:20px;border-bottom-left-radius:8px;border-top-left-radius:8px}.cdk-drag[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]   .button-action[_ngcontent-%COMP%]   .transparent-button[_ngcontent-%COMP%]{background-color:transparent;box-shadow:none;width:40px;padding:0;margin:0;min-width:auto;color:#fff}.cdk-drag[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]   .child-2-background[_ngcontent-%COMP%]{background-color:#cffaf4!important}.cdk-drag[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]   .child-3-background[_ngcontent-%COMP%]{background-color:#e5e8ee!important}.cdk-drag[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]   .fields-container[_ngcontent-%COMP%]{border:1px solid #dce4e9;border-radius:0 8px 8px 0;background-color:#fff;width:100%;padding:10px}.cdk-drag[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]   .fields-container[_ngcontent-%COMP%]   lib-sub-category[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;width:100%}.cdk-drag[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]   .fields-container[_ngcontent-%COMP%]   lib-sub-category[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]   .button-action[_ngcontent-%COMP%]{background-color:#6fe8d7;height:100%;margin:auto 15px auto auto;display:flex}.cdk-drag[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]   .fields-container[_ngcontent-%COMP%]   lib-sub-category[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]   .button-action[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{box-shadow:none;background-color:transparent;color:#fff}.side-bar[_ngcontent-%COMP%]{display:flex;flex-direction:column}.register-button[_ngcontent-%COMP%]{background:no-repeat padding-box #171f26;border:2px solid #192128;border-radius:8px;color:#fff;width:88%;margin:10px auto;border:none}"] });
    return CreateProfileTemplateComponent;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(CreateProfileTemplateComponent, [{
        type: Component,
        args: [{
                selector: "onboarding-create-profile-template",
                templateUrl: "./create-profile-template.component.html",
                styleUrls: ["./create-profile-template.component.scss"],
            }]
    }], function () { return [{ type: FormBuilder }, { type: OnboardingService }, { type: ActivatedRoute }, { type: Router }]; }, null); })();

var MaterialElevationDirective = /** @class */ (function () {
    function MaterialElevationDirective(element, renderer) {
        this.element = element;
        this.renderer = renderer;
        this.defaultElevation = 2;
        this.raisedElevation = 8;
        this.setElevation(this.defaultElevation);
    }
    MaterialElevationDirective.prototype.ngOnChanges = function (_changes) {
        this.setElevation(this.defaultElevation);
    };
    MaterialElevationDirective.prototype.onMouseEnter = function () {
        this.setElevation(this.raisedElevation);
    };
    MaterialElevationDirective.prototype.onMouseLeave = function () {
        this.setElevation(this.defaultElevation);
    };
    MaterialElevationDirective.prototype.setElevation = function (amount) {
        var _this = this;
        // remove all elevation classes
        var classesToRemove = Array.from(this.element.nativeElement.classList).filter(function (c) { return c.startsWith('mat-elevation-z'); });
        classesToRemove.forEach(function (c) {
            _this.renderer.removeClass(_this.element.nativeElement, c);
        });
        // add the given elevation class
        var newClass = "mat-elevation-z" + amount;
        this.renderer.addClass(this.element.nativeElement, newClass);
    };
    MaterialElevationDirective.ɵfac = function MaterialElevationDirective_Factory(t) { return new (t || MaterialElevationDirective)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2)); };
    MaterialElevationDirective.ɵdir = ɵɵdefineDirective({ type: MaterialElevationDirective, selectors: [["", "appMaterialElevation", ""]], hostBindings: function MaterialElevationDirective_HostBindings(rf, ctx) { if (rf & 1) {
            ɵɵlistener("mouseenter", function MaterialElevationDirective_mouseenter_HostBindingHandler() { return ctx.onMouseEnter(); })("mouseleave", function MaterialElevationDirective_mouseleave_HostBindingHandler() { return ctx.onMouseLeave(); });
        } }, inputs: { defaultElevation: "defaultElevation", raisedElevation: "raisedElevation" }, features: [ɵɵNgOnChangesFeature] });
    return MaterialElevationDirective;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(MaterialElevationDirective, [{
        type: Directive,
        args: [{
                selector: '[appMaterialElevation]'
            }]
    }], function () { return [{ type: ElementRef }, { type: Renderer2 }]; }, { defaultElevation: [{
            type: Input
        }], raisedElevation: [{
            type: Input
        }], onMouseEnter: [{
            type: HostListener,
            args: ['mouseenter']
        }], onMouseLeave: [{
            type: HostListener,
            args: ['mouseleave']
        }] }); })();

function ProfileListComponent_div_17_div_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 13);
    ɵɵelementStart(1, "mat-icon", 14);
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    var d_r523 = ɵɵnextContext().$implicit;
    ɵɵadvance(2);
    ɵɵtextInterpolate(d_r523 == null ? null : d_r523.Picto);
} }
function ProfileListComponent_div_17_div_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 13);
    ɵɵelementStart(1, "h3");
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    var d_r523 = ɵɵnextContext().$implicit;
    ɵɵadvance(2);
    ɵɵtextInterpolate(d_r523.Name.substr(0, 2));
} }
var _c0$2 = function (a0) { return [a0]; };
function ProfileListComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    var _r529 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 9);
    ɵɵelementStart(1, "div", 10);
    ɵɵtemplate(2, ProfileListComponent_div_17_div_2_Template, 3, 1, "div", 11);
    ɵɵtemplate(3, ProfileListComponent_div_17_div_3_Template, 3, 1, "div", 11);
    ɵɵelementStart(4, "p");
    ɵɵtext(5);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(6, "button", 12);
    ɵɵlistener("click", function ProfileListComponent_div_17_Template_button_click_6_listener($event) { ɵɵrestoreView(_r529); var d_r523 = ctx.$implicit; var ctx_r528 = ɵɵnextContext(); return ctx_r528.onDelete($event, d_r523._id); });
    ɵɵelementStart(7, "mat-icon");
    ɵɵtext(8, "close");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    var d_r523 = ctx.$implicit;
    var ctx_r522 = ɵɵnextContext();
    ɵɵproperty("defaultElevation", ctx_r522.defaultElevation);
    ɵɵadvance(1);
    ɵɵproperty("routerLink", ɵɵpureFunction1(6, _c0$2, ctx_r522.service.mainPath + "/template-builder/" + d_r523._id));
    ɵɵadvance(1);
    ɵɵproperty("ngIf", d_r523 == null ? null : d_r523.Picto);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !(d_r523 == null ? null : d_r523.Picto));
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", d_r523.Name, "");
    ɵɵadvance(1);
    ɵɵproperty("defaultElevation", ctx_r522.defaultElevation);
} }
var ProfileListComponent = /** @class */ (function () {
    function ProfileListComponent(service, router) {
        var _this = this;
        this.service = service;
        this.router = router;
        this.displayedColumns = ['Name', 'vcontacts', 'createdAt', 'updatedAt', 'action'];
        this.datas = [];
        this.dataSource = new MatTableDataSource([]);
        this.defaultElevation = 2;
        this.raisedElevation = 8;
        this.service.templates.subscribe(function (templates) {
            if (templates.length > 0) {
                _this.datas = templates;
            }
        });
    }
    ProfileListComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getAllProfils(true)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ProfileListComponent.prototype.onAddProfil = function () {
        this.router.navigate(['onboarding/template-builder/0']);
    };
    ProfileListComponent.prototype.onDelete = function (e, id) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        e.stopPropagation();
                        if (!confirm('Voulez vous supprimer cette template ?')) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.service.deleteProfil(id)];
                    case 1:
                        result = _a.sent();
                        if (result) {
                            this.datas = this.datas.filter(function (data) { return data._id !== id; });
                        }
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    ProfileListComponent.prototype.getAllProfils = function (recall) {
        return __awaiter(this, void 0, void 0, function () {
            var profile;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.datas.length === 0)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.service.getAllProfil()];
                    case 1:
                        profile = _a.sent();
                        this.datas = profile;
                        _a.label = 2;
                    case 2:
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
        } }, decls: 18, vars: 4, consts: [[1, "main"], [1, "header-list"], [1, "content-list"], [1, "title"], [1, "sub-title"], [1, "list"], [1, "box-template", "new-template"], ["role", "button", "mat-raised-button", "", "color", "primary", 1, "add-profil", 3, "routerLink"], ["appMaterialElevation", "", "raisedElevation", "16", "class", "box-template", 3, "defaultElevation", 4, "ngFor", "ngForOf"], ["appMaterialElevation", "", "raisedElevation", "16", 1, "box-template", 3, "defaultElevation"], [1, "box-content", 3, "routerLink"], ["class", "picto-preview", 4, "ngIf"], ["mat-mini-fab", "", "color", "accent", "appMaterialElevation", "", "raisedElevation", "16", 3, "defaultElevation", "click"], [1, "picto-preview"], [2, "font-size", "50px", "width", "100%", "height", "40%"]], template: function ProfileListComponent_Template(rf, ctx) { if (rf & 1) {
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
            ɵɵelementStart(7, "h3", 3);
            ɵɵtext(8, "Profils");
            ɵɵelementEnd();
            ɵɵelementStart(9, "p", 4);
            ɵɵtext(10, "Retrouvez ici, l\u2019ensemble des profils d\u2019onboarding que vous avez cr\u00E9\u00E9s");
            ɵɵelementEnd();
            ɵɵelementStart(11, "div", 5);
            ɵɵelementStart(12, "div", 6);
            ɵɵelementStart(13, "p");
            ɵɵtext(14, "Nouveau profil");
            ɵɵelementEnd();
            ɵɵelementStart(15, "a", 7);
            ɵɵtext(16, " Cr\u00E9er un nouveau profil ");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵtemplate(17, ProfileListComponent_div_17_Template, 9, 8, "div", 8);
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
        } if (rf & 2) {
            ɵɵadvance(15);
            ɵɵproperty("routerLink", ɵɵpureFunction1(2, _c0$2, ctx.service.mainPath + "/template-builder/0"));
            ɵɵadvance(2);
            ɵɵproperty("ngForOf", ctx.datas);
        } }, directives: [MatAnchor, RouterLinkWithHref, NgForOf, MaterialElevationDirective, RouterLink, NgIf, MatButton, MatIcon], styles: [".main[_ngcontent-%COMP%]{background:no-repeat padding-box #f4f7f9;opacity:1;height:100%}.main[_ngcontent-%COMP%]   .header-list[_ngcontent-%COMP%]{margin-left:50px;padding-top:10px}.main[_ngcontent-%COMP%]   .header-list[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{text-align:left;font:bold 32px/30px Nexa Text;letter-spacing:0;color:#171f26;opacity:1}.main[_ngcontent-%COMP%]   .header-list[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{text-align:left;font:20px/26px Nexa Text;letter-spacing:0;color:#171f26;opacity:1}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]{background-color:#fff;border-radius:8px;opacity:1;margin:57px;height:80%;padding:49px}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{text-align:left;font:bold 23px/30px Nexa Text;letter-spacing:0;color:#171f26;opacity:1;margin-bottom:0}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   p.sub-title[_ngcontent-%COMP%]{margin-bottom:57px;font:20px/26px Nexa Text;letter-spacing:0;color:#171f26;width:300px}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .box-template[_ngcontent-%COMP%]{width:328px;position:relative;height:228px;margin-right:50px;margin-bottom:50px;background:no-repeat padding-box #f4f7f9;border:1px solid #dce4e9;border-radius:6px;opacity:1;display:flex;flex-direction:column;justify-content:center;align-items:center;cursor:pointer}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .box-template[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:81px;height:81px}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .box-template[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{text-align:center;font:bold 16px/25px Nexa Text;letter-spacing:.1px;color:#000;opacity:1;margin-top:17px}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .box-template[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{background:no-repeat padding-box #171f26;border-radius:7px;font-size:15px}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .box-template[_ngcontent-%COMP%]   .mat-mini-fab[_ngcontent-%COMP%]{display:none}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .box-template[_ngcontent-%COMP%]   .box-content[_ngcontent-%COMP%]{width:100%;height:90%;text-align:center;margin-top:10%}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .box-template[_ngcontent-%COMP%]   .box-content[_ngcontent-%COMP%]   .picto-preview[_ngcontent-%COMP%]{width:113px;height:113px;background:no-repeat padding-box #fff;margin:auto;border-radius:113px;display:flex;align-items:center;justify-content:center}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .box-template[_ngcontent-%COMP%]   .box-content[_ngcontent-%COMP%]   .picto-preview[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:40px;color:#dce4e9}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .new-template[_ngcontent-%COMP%]{border:1px solid #dce4e9;border-radius:6px;background-color:transparent}  .box-template:hover .mat-mini-fab .mat-button-wrapper{padding:0!important;display:inline-block;line-height:0}  .box-template:hover .mat-mini-fab{display:initial!important;position:absolute;right:6px;top:7px;background-color:red;width:25px;height:25px}  .box-template:hover .mat-mini-fab .mat-icon{background-repeat:no-repeat;display:inline-block;fill:currentColor;height:37px;width:24px}"] });
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

var _c0$3 = function () { return { standalone: true }; };
function SubOnboaringComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    var _r674 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 4);
    ɵɵelementStart(1, "mat-checkbox", 5);
    ɵɵlistener("ngModelChange", function SubOnboaringComponent_div_2_Template_mat_checkbox_ngModelChange_1_listener($event) { ɵɵrestoreView(_r674); var ctx_r673 = ɵɵnextContext(); return ctx_r673.field.value = $event; });
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r669 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("ngModel", ctx_r669.field.value)("required", ctx_r669.field.isMandatory)("ngModelOptions", ɵɵpureFunction0(4, _c0$3));
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ctx_r669.field.label, " ");
} }
function SubOnboaringComponent_mat_form_field_3_mat_radio_group_3_mat_radio_button_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-radio-button", 9);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    var opt_r677 = ctx.$implicit;
    ɵɵproperty("value", opt_r677);
    ɵɵadvance(1);
    ɵɵtextInterpolate(opt_r677);
} }
function SubOnboaringComponent_mat_form_field_3_mat_radio_group_3_Template(rf, ctx) { if (rf & 1) {
    var _r679 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "mat-radio-group", 7);
    ɵɵlistener("ngModelChange", function SubOnboaringComponent_mat_form_field_3_mat_radio_group_3_Template_mat_radio_group_ngModelChange_0_listener($event) { ɵɵrestoreView(_r679); var ctx_r678 = ɵɵnextContext(2); return ctx_r678.field.value = $event; });
    ɵɵtemplate(1, SubOnboaringComponent_mat_form_field_3_mat_radio_group_3_mat_radio_button_1_Template, 2, 2, "mat-radio-button", 8);
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r675 = ɵɵnextContext(2);
    ɵɵproperty("ngModel", ctx_r675.field.value);
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ctx_r675.field.defaultValue);
} }
function SubOnboaringComponent_mat_form_field_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-form-field", 4);
    ɵɵelementStart(1, "mat-label");
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵtemplate(3, SubOnboaringComponent_mat_form_field_3_mat_radio_group_3_Template, 2, 2, "mat-radio-group", 6);
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r670 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ctx_r670.field.label, " ");
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r670.field.type === "radio");
} }
function SubOnboaringComponent_mat_form_field_4_mat_option_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-option", 9);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    var opt_r681 = ctx.$implicit;
    ɵɵproperty("value", opt_r681);
    ɵɵadvance(1);
    ɵɵtextInterpolate(opt_r681);
} }
function SubOnboaringComponent_mat_form_field_4_Template(rf, ctx) { if (rf & 1) {
    var _r683 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "mat-form-field", 4);
    ɵɵelementStart(1, "mat-label");
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementStart(3, "mat-select", 10);
    ɵɵlistener("ngModelChange", function SubOnboaringComponent_mat_form_field_4_Template_mat_select_ngModelChange_3_listener($event) { ɵɵrestoreView(_r683); var ctx_r682 = ɵɵnextContext(); return ctx_r682.field.value = $event; });
    ɵɵtemplate(4, SubOnboaringComponent_mat_form_field_4_mat_option_4_Template, 2, 2, "mat-option", 8);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r671 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ctx_r671.field.label, " ");
    ɵɵadvance(1);
    ɵɵproperty("ngModel", ctx_r671.field.value)("ngModelOptions", ɵɵpureFunction0(5, _c0$3))("required", ctx_r671.field.isMandatory);
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ctx_r671.field.defaultValue);
} }
function SubOnboaringComponent_mat_form_field_5_Template(rf, ctx) { if (rf & 1) {
    var _r685 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "mat-form-field", 11);
    ɵɵelementStart(1, "mat-label");
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementStart(3, "input", 12);
    ɵɵlistener("ngModelChange", function SubOnboaringComponent_mat_form_field_5_Template_input_ngModelChange_3_listener($event) { ɵɵrestoreView(_r685); var ctx_r684 = ɵɵnextContext(); return ctx_r684.field.value = $event; });
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r672 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵtextInterpolate(ctx_r672.field.label);
    ɵɵadvance(1);
    ɵɵproperty("type", ctx_r672.field.type)("required", ctx_r672.field.isMandatory)("ngModelOptions", ɵɵpureFunction0(5, _c0$3))("ngModel", ctx_r672.field.value);
} }
var _c1$1 = [[["", 8, "child"]]];
var _c2$1 = [".child"];
var SubOnboaringComponent = /** @class */ (function () {
    function SubOnboaringComponent() {
        this.onAddKeywordFromInput = new EventEmitter();
        this.onKeyPress = new EventEmitter();
        this.onDrop = new EventEmitter();
        this.onAddNewField = new EventEmitter();
        this.onRemoveField = new EventEmitter();
        this.onChangeType = new EventEmitter();
        this.onRemoveKeyword = new EventEmitter();
        this.onAddNewSubLevelField = new EventEmitter();
        this.onExpendMore = new EventEmitter();
        this.separatorKeysCodes = [ENTER, COMMA, SEMICOLON];
    }
    SubOnboaringComponent.prototype.ngOnInit = function () {
    };
    SubOnboaringComponent.prototype.drop = function (event) {
        this.onDrop.emit(event);
    };
    SubOnboaringComponent.prototype.addKeywordFromInput = function (event, i, j) {
        this.onAddKeywordFromInput.emit({ event: event, i: i, j: j });
    };
    SubOnboaringComponent.prototype.keyUp = function (event, i, j) {
        this.onKeyPress.emit({ event: event, i: i, j: j });
    };
    SubOnboaringComponent.prototype.addNewField = function (event, i) {
        event.preventDefault();
        this.onAddNewField.emit({ event: event, i: i });
    };
    SubOnboaringComponent.prototype.removeField = function (event, i, j) {
        event.preventDefault();
        this.onRemoveField.emit({ i: i, j: j });
    };
    SubOnboaringComponent.prototype.changeType = function (type, i, j) {
        this.onChangeType.emit({ type: type, i: i, j: j });
    };
    SubOnboaringComponent.prototype.removeKeyword = function (event, i, j) {
        this.onRemoveKeyword.emit({ event: event, i: i, j: j });
    };
    SubOnboaringComponent.prototype.addNewSubLevelField = function (e) {
        e.preventDefault();
        this.onAddNewSubLevelField.emit(true);
    };
    SubOnboaringComponent.prototype.expendMore = function (e) {
        e.preventDefault();
        this.onExpendMore.emit(true);
    };
    SubOnboaringComponent.prototype.ingoreDefaultAction = function (e) {
        e.preventDefault();
    };
    SubOnboaringComponent.ɵfac = function SubOnboaringComponent_Factory(t) { return new (t || SubOnboaringComponent)(); };
    SubOnboaringComponent.ɵcmp = ɵɵdefineComponent({ type: SubOnboaringComponent, selectors: [["lib-sub-onboarding"]], inputs: { field: "field", length: "length", i: "i", j: "j" }, outputs: { onAddKeywordFromInput: "onAddKeywordFromInput", onKeyPress: "onKeyPress", onDrop: "onDrop", onAddNewField: "onAddNewField", onRemoveField: "onRemoveField", onChangeType: "onChangeType", onRemoveKeyword: "onRemoveKeyword", onAddNewSubLevelField: "onAddNewSubLevelField", onExpendMore: "onExpendMore" }, ngContentSelectors: _c2$1, decls: 7, vars: 4, consts: [[1, "field-item"], [3, "ngSwitch"], ["class", "flex-auto w-30 field-size", 4, "ngSwitchCase"], ["class", "form-field field-size", "appearance", "fill", 4, "ngSwitchDefault"], [1, "flex-auto", "w-30", "field-size"], [3, "ngModel", "required", "ngModelOptions", "ngModelChange"], ["class", "form-field radio-group field-size", "aria-label", "Select an option", 3, "ngModel", "ngModelChange", 4, "ngIf"], ["aria-label", "Select an option", 1, "form-field", "radio-group", "field-size", 3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], [3, "ngModel", "ngModelOptions", "required", "ngModelChange"], ["appearance", "fill", 1, "form-field", "field-size"], ["matInput", "", "placeholder", "", 3, "type", "required", "ngModelOptions", "ngModel", "ngModelChange"]], template: function SubOnboaringComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵprojectionDef(_c1$1);
            ɵɵelementStart(0, "div", 0);
            ɵɵelementContainerStart(1, 1);
            ɵɵtemplate(2, SubOnboaringComponent_div_2_Template, 3, 5, "div", 2);
            ɵɵtemplate(3, SubOnboaringComponent_mat_form_field_3_Template, 4, 2, "mat-form-field", 2);
            ɵɵtemplate(4, SubOnboaringComponent_mat_form_field_4_Template, 5, 6, "mat-form-field", 2);
            ɵɵtemplate(5, SubOnboaringComponent_mat_form_field_5_Template, 4, 6, "mat-form-field", 3);
            ɵɵelementContainerEnd();
            ɵɵelementEnd();
            ɵɵprojection(6);
        } if (rf & 2) {
            ɵɵadvance(1);
            ɵɵproperty("ngSwitch", ctx.field.type);
            ɵɵadvance(1);
            ɵɵproperty("ngSwitchCase", "checkbox");
            ɵɵadvance(1);
            ɵɵproperty("ngSwitchCase", "radio");
            ɵɵadvance(1);
            ɵɵproperty("ngSwitchCase", "select");
        } }, directives: [NgSwitch, NgSwitchCase, NgSwitchDefault, MatCheckbox, MatCheckboxRequiredValidator, NgControlStatus, NgModel, RequiredValidator, MatFormField, MatLabel, NgIf, MatRadioGroup, NgForOf, MatRadioButton, MatSelect, MatOption, MatInput, DefaultValueAccessor], styles: [".container[_ngcontent-%COMP%]{max-width:98%;margin:50px auto auto;padding-bottom:50px}.container[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:space-between}.input-category-name[_ngcontent-%COMP%]{font-size:15px;font-weight:500}.example-full-width[_ngcontent-%COMP%]{width:100%}.field-item[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center}.field-action[_ngcontent-%COMP%]{width:10%}.field-size[_ngcontent-%COMP%]{width:90%;margin:auto 2% auto auto}hr[_ngcontent-%COMP%]{margin:50px 0}  .mat-form-field-appearance-fill .mat-form-field-flex{background-color:#fff}.category-action[_ngcontent-%COMP%]{display:flex;width:100%}.delete-field[_ngcontent-%COMP%]{margin:auto 2%}.radio-group[_ngcontent-%COMP%]   .mat-radio-button[_ngcontent-%COMP%]{margin-right:10px}.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary[_ngcontent-%COMP%]{background-color:#3f51b5;color:#fff;min-height:20px;font-size:10px}.move-icons[_ngcontent-%COMP%]{cursor:move}.category-item[_ngcontent-%COMP%]{display:flex;align-items:baseline;width:100%}.field-content[_ngcontent-%COMP%]{width:100%}.cdk-drag-preview[_ngcontent-%COMP%]{box-sizing:border-box;border-radius:4px;box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.cdk-drag-placeholder[_ngcontent-%COMP%]{opacity:0}.cdk-drag-animating[_ngcontent-%COMP%], .example-list.cdk-drop-list-dragging[_ngcontent-%COMP%]   .category-item[_ngcontent-%COMP%]:not(.cdk-drag-placeholder){transition:transform 250ms cubic-bezier(0,0,.2,1)}  .mat-form-field-appearance-fill.mat-form-field-disabled .mat-form-field-flex{background-color:rgba(0,0,0,.02);margin-bottom:-20px}"] });
    return SubOnboaringComponent;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(SubOnboaringComponent, [{
        type: Component,
        args: [{
                selector: 'lib-sub-onboarding',
                templateUrl: './sub-onboarding.component.html',
                styleUrls: ['./sub-onboarding.component.scss']
            }]
    }], function () { return []; }, { field: [{
            type: Input
        }], length: [{
            type: Input
        }], i: [{
            type: Input
        }], j: [{
            type: Input
        }], onAddKeywordFromInput: [{
            type: Output
        }], onKeyPress: [{
            type: Output
        }], onDrop: [{
            type: Output
        }], onAddNewField: [{
            type: Output
        }], onRemoveField: [{
            type: Output
        }], onChangeType: [{
            type: Output
        }], onRemoveKeyword: [{
            type: Output
        }], onAddNewSubLevelField: [{
            type: Output
        }], onExpendMore: [{
            type: Output
        }] }); })();

function OnboardingFormComponent_div_7_mat_option_9_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-option", 12);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    var contact_r552 = ctx.$implicit;
    ɵɵproperty("value", contact_r552.Id);
    ɵɵadvance(1);
    ɵɵtextInterpolate(contact_r552.Name);
} }
function OnboardingFormComponent_div_7_mat_option_14_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-option", 12);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    var template_r553 = ctx.$implicit;
    ɵɵproperty("value", template_r553._id);
    ɵɵadvance(1);
    ɵɵtextInterpolate1("", template_r553.Name, " ");
} }
function OnboardingFormComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    var _r555 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 6);
    ɵɵelementStart(1, "h3");
    ɵɵtext(2, " Onboarding de votre nouveau collaborateur ");
    ɵɵelementEnd();
    ɵɵelementStart(3, "p");
    ɵɵtext(4, "S\u00E9lectionnez le nom de votre nouveau collaborateur afin de pouvoir d\u00E9marrer son onboarding.");
    ɵɵelementEnd();
    ɵɵelementStart(5, "mat-form-field", 7);
    ɵɵelementStart(6, "mat-label");
    ɵɵtext(7, "Contact");
    ɵɵelementEnd();
    ɵɵelementStart(8, "mat-select", 8);
    ɵɵlistener("selectionChange", function OnboardingFormComponent_div_7_Template_mat_select_selectionChange_8_listener($event) { ɵɵrestoreView(_r555); var ctx_r554 = ɵɵnextContext(); return ctx_r554.onSelectUser($event.value); });
    ɵɵtemplate(9, OnboardingFormComponent_div_7_mat_option_9_Template, 2, 2, "mat-option", 9);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(10, "mat-form-field", 7);
    ɵɵelementStart(11, "mat-label");
    ɵɵtext(12, "Template");
    ɵɵelementEnd();
    ɵɵelementStart(13, "mat-select", 10);
    ɵɵlistener("selectionChange", function OnboardingFormComponent_div_7_Template_mat_select_selectionChange_13_listener($event) { ɵɵrestoreView(_r555); var ctx_r556 = ɵɵnextContext(); return ctx_r556.onSelect($event.value); });
    ɵɵtemplate(14, OnboardingFormComponent_div_7_mat_option_14_Template, 2, 2, "mat-option", 9);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(15, "button", 11);
    ɵɵlistener("click", function OnboardingFormComponent_div_7_Template_button_click_15_listener() { ɵɵrestoreView(_r555); var ctx_r557 = ɵɵnextContext(); return ctx_r557.onSelectContactTemplate(); });
    ɵɵtext(16);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r548 = ɵɵnextContext();
    var tmp_2_0 = null;
    var currVal_2 = ((tmp_2_0 = ctx_r548.onboardingForm.get("ContactId")) == null ? null : tmp_2_0.value) === "" || ((tmp_2_0 = ctx_r548.onboardingForm.get("templateId")) == null ? null : tmp_2_0.value) == "" ? 0.4 : 1;
    var tmp_3_0 = null;
    var currVal_3 = ((tmp_3_0 = ctx_r548.onboardingForm.get("ContactId")) == null ? null : tmp_3_0.value) === "" || ((tmp_3_0 = ctx_r548.onboardingForm.get("templateId")) == null ? null : tmp_3_0.value) == "";
    ɵɵadvance(9);
    ɵɵproperty("ngForOf", ctx_r548.contacts);
    ɵɵadvance(5);
    ɵɵproperty("ngForOf", ctx_r548.templates);
    ɵɵadvance(1);
    ɵɵstyleProp("opacity", currVal_2);
    ɵɵproperty("disabled", currVal_3);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ctx_r548.id !== "0" ? "Modifier l\u2019onboarding" : "D\u00E9marrer l\u2019onboarding", " ");
} }
function OnboardingFormComponent_div_8_mat_step_6_div_5_div_3_div_3_div_2_div_3_div_2_Template(rf, ctx) { if (rf & 1) {
    var _r580 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 33);
    ɵɵelementStart(1, "lib-sub-onboarding", 34);
    ɵɵlistener("onAddKeywordFromInput", function OnboardingFormComponent_div_8_mat_step_6_div_5_div_3_div_3_div_2_div_3_div_2_Template_lib_sub_onboarding_onAddKeywordFromInput_1_listener($event) { ɵɵrestoreView(_r580); var l_r578 = ctx.index; var k_r573 = ɵɵnextContext(2).index; var j_r568 = ɵɵnextContext(2).index; var i_r563 = ɵɵnextContext(2).index; var ctx_r579 = ɵɵnextContext(2); return ctx_r579.addKeywordFromInput($event.event, i_r563, j_r568, k_r573, l_r578); })("onKeyPress", function OnboardingFormComponent_div_8_mat_step_6_div_5_div_3_div_3_div_2_div_3_div_2_Template_lib_sub_onboarding_onKeyPress_1_listener($event) { ɵɵrestoreView(_r580); var l_r578 = ctx.index; var k_r573 = ɵɵnextContext(2).index; var j_r568 = ɵɵnextContext(2).index; var i_r563 = ɵɵnextContext(2).index; var ctx_r584 = ɵɵnextContext(2); return ctx_r584.onKeyPress($event.event, i_r563, j_r568, k_r573, l_r578); })("onAddNewField", function OnboardingFormComponent_div_8_mat_step_6_div_5_div_3_div_3_div_2_div_3_div_2_Template_lib_sub_onboarding_onAddNewField_1_listener() { ɵɵrestoreView(_r580); var k_r573 = ɵɵnextContext(2).index; var j_r568 = ɵɵnextContext(2).index; var i_r563 = ɵɵnextContext(2).index; var ctx_r588 = ɵɵnextContext(2); return ctx_r588.onAddNewField(i_r563, j_r568, k_r573); })("onRemoveField", function OnboardingFormComponent_div_8_mat_step_6_div_5_div_3_div_3_div_2_div_3_div_2_Template_lib_sub_onboarding_onRemoveField_1_listener() { ɵɵrestoreView(_r580); var l_r578 = ctx.index; var k_r573 = ɵɵnextContext(2).index; var j_r568 = ɵɵnextContext(2).index; var i_r563 = ɵɵnextContext(2).index; var ctx_r592 = ɵɵnextContext(2); return ctx_r592.onRemoveField(i_r563, j_r568, k_r573, l_r578); })("onChangeType", function OnboardingFormComponent_div_8_mat_step_6_div_5_div_3_div_3_div_2_div_3_div_2_Template_lib_sub_onboarding_onChangeType_1_listener() { ɵɵrestoreView(_r580); var c2_r577 = ctx.$implicit; var l_r578 = ctx.index; var k_r573 = ɵɵnextContext(2).index; var j_r568 = ɵɵnextContext(2).index; var i_r563 = ɵɵnextContext(2).index; var ctx_r596 = ɵɵnextContext(2); return ctx_r596.onChangeType(c2_r577.type, i_r563, j_r568, k_r573, l_r578); })("onRemoveKeyword", function OnboardingFormComponent_div_8_mat_step_6_div_5_div_3_div_3_div_2_div_3_div_2_Template_lib_sub_onboarding_onRemoveKeyword_1_listener($event) { ɵɵrestoreView(_r580); var l_r578 = ctx.index; var k_r573 = ɵɵnextContext(2).index; var j_r568 = ɵɵnextContext(2).index; var i_r563 = ɵɵnextContext(2).index; var ctx_r600 = ɵɵnextContext(2); return ctx_r600.removeKeyword($event.event, i_r563, j_r568, k_r573, l_r578); })("onAddNewSubLevelField", function OnboardingFormComponent_div_8_mat_step_6_div_5_div_3_div_3_div_2_div_3_div_2_Template_lib_sub_onboarding_onAddNewSubLevelField_1_listener() { ɵɵrestoreView(_r580); var l_r578 = ctx.index; var k_r573 = ɵɵnextContext(2).index; var j_r568 = ɵɵnextContext(2).index; var i_r563 = ɵɵnextContext(2).index; var ctx_r604 = ɵɵnextContext(2); return ctx_r604.onAddNewSubLevelField(i_r563, j_r568, k_r573, l_r578); })("onExpendMore", function OnboardingFormComponent_div_8_mat_step_6_div_5_div_3_div_3_div_2_div_3_div_2_Template_lib_sub_onboarding_onExpendMore_1_listener() { ɵɵrestoreView(_r580); var l_r578 = ctx.index; var k_r573 = ɵɵnextContext(2).index; var j_r568 = ɵɵnextContext(2).index; var i_r563 = ɵɵnextContext(2).index; var ctx_r608 = ɵɵnextContext(2); return ctx_r608.onExpendMore(null, i_r563, j_r568, k_r573, l_r578); });
    ɵɵelement(2, "div", 35);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    var c2_r577 = ctx.$implicit;
    var l_r578 = ctx.index;
    var ctx_r612 = ɵɵnextContext(2);
    var child_r572 = ctx_r612.$implicit;
    var k_r573 = ctx_r612.index;
    ɵɵadvance(1);
    ɵɵproperty("field", c2_r577)("length", child_r572 == null ? null : child_r572.forms == null ? null : child_r572.forms.length)("i", k_r573)("j", l_r578);
} }
function OnboardingFormComponent_div_8_mat_step_6_div_5_div_3_div_3_div_2_div_3_Template(rf, ctx) { if (rf & 1) {
    var _r614 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 30, 31);
    ɵɵlistener("cdkDropListDropped", function OnboardingFormComponent_div_8_mat_step_6_div_5_div_3_div_3_div_2_div_3_Template_div_cdkDropListDropped_0_listener($event) { ɵɵrestoreView(_r614); var ctx_r613 = ɵɵnextContext(7); return ctx_r613.drop($event); });
    ɵɵtemplate(2, OnboardingFormComponent_div_8_mat_step_6_div_5_div_3_div_3_div_2_div_3_div_2_Template, 3, 4, "div", 32);
    ɵɵelementEnd();
} if (rf & 2) {
    var child_r572 = ɵɵnextContext().$implicit;
    ɵɵproperty("cdkDropListData", child_r572.forms);
    ɵɵadvance(2);
    ɵɵproperty("ngForOf", child_r572.forms);
} }
function OnboardingFormComponent_div_8_mat_step_6_div_5_div_3_div_3_div_2_Template(rf, ctx) { if (rf & 1) {
    var _r617 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 33);
    ɵɵelementStart(1, "lib-sub-onboarding", 34);
    ɵɵlistener("onAddKeywordFromInput", function OnboardingFormComponent_div_8_mat_step_6_div_5_div_3_div_3_div_2_Template_lib_sub_onboarding_onAddKeywordFromInput_1_listener($event) { ɵɵrestoreView(_r617); var k_r573 = ctx.index; var j_r568 = ɵɵnextContext(2).index; var i_r563 = ɵɵnextContext(2).index; var ctx_r616 = ɵɵnextContext(2); return ctx_r616.addKeywordFromInput($event.event, i_r563, j_r568, k_r573); })("onKeyPress", function OnboardingFormComponent_div_8_mat_step_6_div_5_div_3_div_3_div_2_Template_lib_sub_onboarding_onKeyPress_1_listener($event) { ɵɵrestoreView(_r617); var k_r573 = ctx.index; var j_r568 = ɵɵnextContext(2).index; var i_r563 = ɵɵnextContext(2).index; var ctx_r620 = ɵɵnextContext(2); return ctx_r620.onKeyPress($event.event, i_r563, j_r568, k_r573); })("onAddNewField", function OnboardingFormComponent_div_8_mat_step_6_div_5_div_3_div_3_div_2_Template_lib_sub_onboarding_onAddNewField_1_listener() { ɵɵrestoreView(_r617); var j_r568 = ɵɵnextContext(2).index; var i_r563 = ɵɵnextContext(2).index; var ctx_r623 = ɵɵnextContext(2); return ctx_r623.onAddNewField(i_r563, j_r568); })("onRemoveField", function OnboardingFormComponent_div_8_mat_step_6_div_5_div_3_div_3_div_2_Template_lib_sub_onboarding_onRemoveField_1_listener() { ɵɵrestoreView(_r617); var k_r573 = ctx.index; var j_r568 = ɵɵnextContext(2).index; var i_r563 = ɵɵnextContext(2).index; var ctx_r626 = ɵɵnextContext(2); return ctx_r626.onRemoveField(i_r563, j_r568, k_r573); })("onChangeType", function OnboardingFormComponent_div_8_mat_step_6_div_5_div_3_div_3_div_2_Template_lib_sub_onboarding_onChangeType_1_listener() { ɵɵrestoreView(_r617); var child_r572 = ctx.$implicit; var k_r573 = ctx.index; var j_r568 = ɵɵnextContext(2).index; var i_r563 = ɵɵnextContext(2).index; var ctx_r629 = ɵɵnextContext(2); return ctx_r629.onChangeType(child_r572.type, i_r563, j_r568, k_r573); })("onRemoveKeyword", function OnboardingFormComponent_div_8_mat_step_6_div_5_div_3_div_3_div_2_Template_lib_sub_onboarding_onRemoveKeyword_1_listener($event) { ɵɵrestoreView(_r617); var k_r573 = ctx.index; var j_r568 = ɵɵnextContext(2).index; var i_r563 = ɵɵnextContext(2).index; var ctx_r632 = ɵɵnextContext(2); return ctx_r632.removeKeyword($event.event, i_r563, j_r568, k_r573); })("onAddNewSubLevelField", function OnboardingFormComponent_div_8_mat_step_6_div_5_div_3_div_3_div_2_Template_lib_sub_onboarding_onAddNewSubLevelField_1_listener() { ɵɵrestoreView(_r617); var k_r573 = ctx.index; var j_r568 = ɵɵnextContext(2).index; var i_r563 = ɵɵnextContext(2).index; var ctx_r635 = ɵɵnextContext(2); return ctx_r635.onAddNewSubLevelField(i_r563, j_r568, k_r573); })("onExpendMore", function OnboardingFormComponent_div_8_mat_step_6_div_5_div_3_div_3_div_2_Template_lib_sub_onboarding_onExpendMore_1_listener() { ɵɵrestoreView(_r617); var k_r573 = ctx.index; var j_r568 = ɵɵnextContext(2).index; var i_r563 = ɵɵnextContext(2).index; var ctx_r638 = ɵɵnextContext(2); return ctx_r638.onExpendMore(null, i_r563, j_r568, k_r573); });
    ɵɵelementStart(2, "div", 35);
    ɵɵtemplate(3, OnboardingFormComponent_div_8_mat_step_6_div_5_div_3_div_3_div_2_div_3_Template, 3, 2, "div", 27);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    var child_r572 = ctx.$implicit;
    var k_r573 = ctx.index;
    var ctx_r641 = ɵɵnextContext(2);
    var field_r567 = ctx_r641.$implicit;
    var j_r568 = ctx_r641.index;
    ɵɵadvance(1);
    ɵɵproperty("field", child_r572)("length", field_r567 == null ? null : field_r567.forms == null ? null : field_r567.forms.length)("i", j_r568)("j", k_r573);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", child_r572.forms);
} }
function OnboardingFormComponent_div_8_mat_step_6_div_5_div_3_div_3_Template(rf, ctx) { if (rf & 1) {
    var _r643 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 30, 31);
    ɵɵlistener("cdkDropListDropped", function OnboardingFormComponent_div_8_mat_step_6_div_5_div_3_div_3_Template_div_cdkDropListDropped_0_listener($event) { ɵɵrestoreView(_r643); var ctx_r642 = ɵɵnextContext(5); return ctx_r642.drop($event); });
    ɵɵtemplate(2, OnboardingFormComponent_div_8_mat_step_6_div_5_div_3_div_3_div_2_Template, 4, 5, "div", 32);
    ɵɵelementEnd();
} if (rf & 2) {
    var field_r567 = ɵɵnextContext().$implicit;
    ɵɵproperty("cdkDropListData", field_r567.forms);
    ɵɵadvance(2);
    ɵɵproperty("ngForOf", field_r567.forms);
} }
function OnboardingFormComponent_div_8_mat_step_6_div_5_div_3_Template(rf, ctx) { if (rf & 1) {
    var _r646 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 33);
    ɵɵelementStart(1, "lib-sub-onboarding", 34);
    ɵɵlistener("onAddKeywordFromInput", function OnboardingFormComponent_div_8_mat_step_6_div_5_div_3_Template_lib_sub_onboarding_onAddKeywordFromInput_1_listener($event) { ɵɵrestoreView(_r646); var j_r568 = ctx.index; var i_r563 = ɵɵnextContext(2).index; var ctx_r645 = ɵɵnextContext(2); return ctx_r645.addKeywordFromInput($event.event, i_r563, j_r568); })("onKeyPress", function OnboardingFormComponent_div_8_mat_step_6_div_5_div_3_Template_lib_sub_onboarding_onKeyPress_1_listener($event) { ɵɵrestoreView(_r646); var j_r568 = ctx.index; var i_r563 = ɵɵnextContext(2).index; var ctx_r648 = ɵɵnextContext(2); return ctx_r648.onKeyPress($event.event, i_r563, j_r568); })("onAddNewField", function OnboardingFormComponent_div_8_mat_step_6_div_5_div_3_Template_lib_sub_onboarding_onAddNewField_1_listener() { ɵɵrestoreView(_r646); var i_r563 = ɵɵnextContext(2).index; var ctx_r650 = ɵɵnextContext(2); return ctx_r650.onAddNewField(i_r563); })("onRemoveField", function OnboardingFormComponent_div_8_mat_step_6_div_5_div_3_Template_lib_sub_onboarding_onRemoveField_1_listener() { ɵɵrestoreView(_r646); var j_r568 = ctx.index; var i_r563 = ɵɵnextContext(2).index; var ctx_r652 = ɵɵnextContext(2); return ctx_r652.onRemoveField(i_r563, j_r568); })("onChangeType", function OnboardingFormComponent_div_8_mat_step_6_div_5_div_3_Template_lib_sub_onboarding_onChangeType_1_listener() { ɵɵrestoreView(_r646); var field_r567 = ctx.$implicit; var j_r568 = ctx.index; var i_r563 = ɵɵnextContext(2).index; var ctx_r654 = ɵɵnextContext(2); return ctx_r654.onChangeType(field_r567.type, i_r563, j_r568); })("onRemoveKeyword", function OnboardingFormComponent_div_8_mat_step_6_div_5_div_3_Template_lib_sub_onboarding_onRemoveKeyword_1_listener($event) { ɵɵrestoreView(_r646); var j_r568 = ctx.index; var i_r563 = ɵɵnextContext(2).index; var ctx_r656 = ɵɵnextContext(2); return ctx_r656.removeKeyword($event.event, i_r563, j_r568); })("onAddNewSubLevelField", function OnboardingFormComponent_div_8_mat_step_6_div_5_div_3_Template_lib_sub_onboarding_onAddNewSubLevelField_1_listener() { ɵɵrestoreView(_r646); var j_r568 = ctx.index; var i_r563 = ɵɵnextContext(2).index; var ctx_r658 = ɵɵnextContext(2); return ctx_r658.onAddNewSubLevelField(i_r563, j_r568); })("onExpendMore", function OnboardingFormComponent_div_8_mat_step_6_div_5_div_3_Template_lib_sub_onboarding_onExpendMore_1_listener() { ɵɵrestoreView(_r646); var j_r568 = ctx.index; var i_r563 = ɵɵnextContext(2).index; var ctx_r660 = ɵɵnextContext(2); return ctx_r660.onExpendMore(null, i_r563, j_r568); });
    ɵɵelementStart(2, "div", 35);
    ɵɵtemplate(3, OnboardingFormComponent_div_8_mat_step_6_div_5_div_3_div_3_Template, 3, 2, "div", 27);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    var field_r567 = ctx.$implicit;
    var j_r568 = ctx.index;
    var ctx_r662 = ɵɵnextContext(2);
    var category_r562 = ctx_r662.$implicit;
    var i_r563 = ctx_r662.index;
    ɵɵadvance(1);
    ɵɵproperty("field", field_r567)("length", category_r562 == null ? null : category_r562.forms == null ? null : category_r562.forms.length)("i", i_r563)("j", j_r568);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", field_r567.forms);
} }
function OnboardingFormComponent_div_8_mat_step_6_div_5_Template(rf, ctx) { if (rf & 1) {
    var _r664 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 30, 31);
    ɵɵlistener("cdkDropListDropped", function OnboardingFormComponent_div_8_mat_step_6_div_5_Template_div_cdkDropListDropped_0_listener($event) { ɵɵrestoreView(_r664); var ctx_r663 = ɵɵnextContext(3); return ctx_r663.drop($event); });
    ɵɵelementContainerStart(2);
    ɵɵtemplate(3, OnboardingFormComponent_div_8_mat_step_6_div_5_div_3_Template, 4, 5, "div", 32);
    ɵɵelementContainerEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    var category_r562 = ɵɵnextContext().$implicit;
    ɵɵproperty("cdkDropListData", category_r562.forms);
    ɵɵadvance(3);
    ɵɵproperty("ngForOf", category_r562.forms);
} }
function OnboardingFormComponent_div_8_mat_step_6_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-step", 24);
    ɵɵelementStart(1, "div", 25);
    ɵɵelementStart(2, "div", 26);
    ɵɵelementStart(3, "h2");
    ɵɵtext(4);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵtemplate(5, OnboardingFormComponent_div_8_mat_step_6_div_5_Template, 4, 2, "div", 27);
    ɵɵelementStart(6, "button", 28);
    ɵɵtext(7, "Pr\u00E9c\u00E9dent");
    ɵɵelementEnd();
    ɵɵelementStart(8, "button", 29);
    ɵɵtext(9, "Suivant");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    var category_r562 = ctx.$implicit;
    var ctx_r560 = ɵɵnextContext(2);
    ɵɵproperty("stepControl", ctx_r560.onboardingForm)("label", category_r562.name);
    ɵɵadvance(4);
    ɵɵtextInterpolate(category_r562.name);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", category_r562.forms);
} }
function OnboardingFormComponent_div_8_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    ɵɵtext(0, "Review");
} }
function OnboardingFormComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    var _r667 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 13);
    ɵɵelementStart(1, "div", 14);
    ɵɵelementStart(2, "div", 15, 16);
    ɵɵlistener("cdkDropListDropped", function OnboardingFormComponent_div_8_Template_div_cdkDropListDropped_2_listener($event) { ɵɵrestoreView(_r667); var ctx_r666 = ɵɵnextContext(); return ctx_r666.drop($event); });
    ɵɵelementStart(4, "mat-horizontal-stepper", 17, 18);
    ɵɵtemplate(6, OnboardingFormComponent_div_8_mat_step_6_Template, 10, 4, "mat-step", 19);
    ɵɵelementStart(7, "mat-step");
    ɵɵtemplate(8, OnboardingFormComponent_div_8_ng_template_8_Template, 1, 0, "ng-template", 20);
    ɵɵelementStart(9, "h5");
    ɵɵtext(10, "You are now done.");
    ɵɵelementEnd();
    ɵɵelementStart(11, "div");
    ɵɵelementStart(12, "button", 21);
    ɵɵtext(13, "Back");
    ɵɵelementEnd();
    ɵɵtext(14, " \u00A0 \u00A0 ");
    ɵɵelementStart(15, "button", 22);
    ɵɵtext(16, "Submit");
    ɵɵelementEnd();
    ɵɵtext(17, " \u00A0 \u00A0 ");
    ɵɵelementStart(18, "button", 23);
    ɵɵlistener("click", function OnboardingFormComponent_div_8_Template_button_click_18_listener() { ɵɵrestoreView(_r667); var _r559 = ɵɵreference(5); return _r559.reset(); });
    ɵɵtext(19, "Reset");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r549 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵproperty("cdkDropListData", ctx_r549.categories);
    ɵɵadvance(2);
    ɵɵproperty("linear", true);
    ɵɵadvance(2);
    ɵɵproperty("ngForOf", ctx_r549.categories);
} }
var OnboardingFormComponent = /** @class */ (function () {
    function OnboardingFormComponent(service, fb, route) {
        this.service = service;
        this.fb = fb;
        this.route = route;
        this.isSelected = false;
        this.id = "0";
    }
    OnboardingFormComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.onCreateDynamicForm();
                        return [4 /*yield*/, this.service.getContacts()];
                    case 1:
                        _b.sent();
                        return [4 /*yield*/, this.service.getAllProfil()];
                    case 2:
                        _b.sent();
                        this.service._contacts.subscribe(function (contacts) { return _this.contacts = contacts; });
                        this.service._templates.subscribe(function (data) { return _this.templates = data; });
                        this.id = this.route.snapshot.paramMap.get("id");
                        if (!(this.id !== "0")) return [3 /*break*/, 4];
                        _a = this;
                        return [4 /*yield*/, this.service.getOnboarding(this.id)];
                    case 3:
                        _a.currentOnboarding = _b.sent();
                        _b.label = 4;
                    case 4:
                        console.log(this.templates);
                        return [2 /*return*/];
                }
            });
        });
    };
    OnboardingFormComponent.prototype.onSelectContactTemplate = function () {
        this.isSelected = true;
    };
    OnboardingFormComponent.prototype.onCreateDynamicForm = function () {
        this.onboardingForm = this.fb.group({
            contactId: ['', Validators.required],
            templateId: [0, Validators.required]
        });
    };
    OnboardingFormComponent.prototype.onPopulateValue = function () {
        var _this = this;
        var user = this.categories[0].forms;
        var populateContact = user.map(function (u) { return (__assign(__assign({}, u), { value: _this.currentUser[u.key] })); });
        this.categories[0].forms = populateContact;
    };
    OnboardingFormComponent.prototype.onSelect = function (id) {
        this.categories = this.templates.find(function (t) { return t._id === id; }).categories;
        if (this.contacts) {
            this.onPopulateValue();
        }
    };
    OnboardingFormComponent.prototype.onSelectUser = function (Id) {
        this.currentUser = this.contacts.find(function (u) { return u.Id === Id; });
        if (this.categories) {
            this.onPopulateValue();
        }
    };
    OnboardingFormComponent.prototype.onAddNewCategory = function (e) {
        e.preventDefault();
        this.categories.push({
            name: "",
            editable: true,
            deleteable: true,
            expandMore: true,
            suffixEndpoint: "",
            forms: [
                {
                    label: "",
                    value: null,
                    size: 80,
                    isMandatory: true,
                    type: "text",
                    deleteable: true,
                    editable: true
                },
            ],
        });
    };
    OnboardingFormComponent.prototype.onAddNewField = function () {
        var params = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            params[_i] = arguments[_i];
        }
        var length = params.length;
        var forms = length === 1
            ? this.categories[params[0]].forms
            : length === 2
                ? this.categories[params[0]].forms[params[1]].forms
                : this.categories[params[0]].forms[params[1]].forms[params[2]].forms;
        forms.push({
            label: "",
            value: null,
            size: 80,
            isMandatory: true,
            type: "text",
            deleteable: true,
            editable: true,
            subLevel: params.length
        });
    };
    OnboardingFormComponent.prototype.onAddNewSubLevelField = function () {
        var params = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            params[_i] = arguments[_i];
        }
        console.log(params.length - 1);
        var length = params.length;
        var forms = length === 2
            ? this.categories[params[0]].forms[params[length - 1]]
            : length === 3
                ? this.categories[params[0]].forms[params[1]].forms[params[length - 1]]
                : this.categories[params[0]].forms[params[1]].forms[params[2]].forms[params[length - 1]];
        forms.expandMore = true;
        forms.forms = [];
        forms.forms.push({
            label: "",
            value: null,
            size: 80,
            isMandatory: true,
            type: "text",
            deleteable: true,
            editable: true,
            subLevel: params.length,
            expandMore: true
        });
        console.log(this.categories);
    };
    OnboardingFormComponent.prototype.onRemoveField = function () {
        var params = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            params[_i] = arguments[_i];
        }
        var length = params.length;
        var forms = length === 2
            ? this.categories[params[0]].forms
            : length === 3
                ? this.categories[params[0]].forms[params[1]].forms
                : this.categories[params[0]].forms[params[1]].forms[params[2]].forms;
        forms.splice(params[length - 1], 1);
    };
    OnboardingFormComponent.prototype.onRemoveCategory = function (e, i) {
        e.preventDefault();
        this.categories.splice(i, 1);
    };
    OnboardingFormComponent.prototype.onChangeCategory = function () {
        return this.categories.every(function (cat) {
            return cat.name !== "" &&
                cat.forms.every(function (field) { return field.label !== "" && field.type !== ""; });
        });
    };
    OnboardingFormComponent.prototype.onChangeType = function (type) {
        var params = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            params[_i - 1] = arguments[_i];
        }
        var length = params.length;
        var forms = length === 2
            ? this.categories[params[0]].forms
            : length === 3
                ? this.categories[params[0]].forms[params[1]].forms
                : this.categories[params[0]].forms[params[1]].forms[params[2]].forms;
        if (type === "select" || type === "radio") {
            forms[params[length - 1]].value = [];
        }
        else if (type === "text") {
            forms[params[length - 1]].value = "";
        }
        else {
            forms[params[length - 1]].value = false;
        }
    };
    OnboardingFormComponent.prototype.onKeyPress = function (event) {
        var params = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            params[_i - 1] = arguments[_i];
        }
        var length = params.length;
        var forms = length === 2
            ? this.categories[params[0]].forms[params[length - 1]]
            : length === 3
                ? this.categories[params[0]].forms[params[1]].forms[params[length - 1]]
                : this.categories[params[0]].forms[params[1]].forms[params[2]].forms[params[length - 1]];
        if (event.key === ";") {
            var exist = forms.value.find(function (opt) {
                return opt.toLocaleLowerCase() ===
                    event.target.value.split(";")[0].toLocaleLowerCase();
            });
            if (!exist) {
                forms.value.push(event.target.value.split(";")[0]);
                event.target.value = "";
            }
            else {
                event.target.value = "";
            }
        }
    };
    OnboardingFormComponent.prototype.removeKeyword = function (keyword) {
        var params = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            params[_i - 1] = arguments[_i];
        }
        var length = params.length;
        var forms = length === 2
            ? this.categories[params[0]].forms[params[length - 1]]
            : length === 3
                ? this.categories[params[0]].forms[params[1]].forms[params[length - 1]]
                : this.categories[params[0]].forms[params[1]].forms[params[2]].forms[params[length - 1]];
        forms.value = forms.value.filter(function (option) { return option !== keyword; });
    };
    OnboardingFormComponent.prototype.onExpendMore = function (event) {
        var params = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            params[_i - 1] = arguments[_i];
        }
        if (event) {
            event.preventDefault();
        }
        console.log(event);
        var length = params.length;
        var forms = length === 1
            ? this.categories[params[0]] :
            length === 2 ? this.categories[params[0]].forms[params[length - 1]] :
                length === 3 ? this.categories[params[0]].forms[params[1]].forms[params[length - 1]] :
                    this.categories[params[0]].forms[params[1]].forms[params[2]].forms[params[length - 1]];
        forms.expandMore = !forms.expandMore;
    };
    OnboardingFormComponent.prototype.addKeywordFromInput = function (event) {
        var params = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            params[_i - 1] = arguments[_i];
        }
        var input = event.input;
        var value = event.value;
        var length = params.length;
        var forms = length === 2
            ? this.categories[params[0]].forms[params[length - 1]]
            : length === 3
                ? this.categories[params[0]].forms[params[1]].forms[params[length - 1]]
                : this.categories[params[0]].forms[params[1]].forms[params[2]].forms[params[length - 1]];
        if (value) {
            var exist = forms.value.find(function (opt) { return opt.toLocaleLowerCase() === event.value.toLocaleLowerCase(); });
            if (!exist) {
                forms.value.push(value.trim());
                input.value = "";
            }
            else {
                input.value = "";
            }
        }
    };
    OnboardingFormComponent.prototype.drop = function (event) {
        console.log("log", this.categories);
        if (event.previousContainer === event.container) {
            moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
        }
        else {
            transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
        }
    };
    OnboardingFormComponent.prototype.ingoreDefaultAction = function (e) {
        e.preventDefault();
    };
    OnboardingFormComponent.ɵfac = function OnboardingFormComponent_Factory(t) { return new (t || OnboardingFormComponent)(ɵɵdirectiveInject(OnboardingService), ɵɵdirectiveInject(FormBuilder), ɵɵdirectiveInject(ActivatedRoute)); };
    OnboardingFormComponent.ɵcmp = ɵɵdefineComponent({ type: OnboardingFormComponent, selectors: [["lib-onboarding-form"]], decls: 9, vars: 3, consts: [[1, "container"], [1, "content"], [1, "sub-title"], [3, "formGroup"], ["class", "select-contact", 4, "ngIf"], ["class", "category", 4, "ngIf"], [1, "select-contact"], ["appearance", "outline", 1, "example-full-width"], ["formControlName", "contactId", "required", "", 3, "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "templateId", "required", "", 3, "selectionChange"], ["mat-raised-button", "", "color", "primary", 3, "disabled", "click"], [3, "value"], [1, "category"], ["cdkDropListGroup", ""], ["cdkDropList", "", 1, "example-list", "mt-20", "onboarding-mat-stepper", 3, "cdkDropListData", "cdkDropListDropped"], ["parentList", "cdkDropList"], ["labelPosition", "bottom", 3, "linear"], ["stepper", ""], ["class", "category-item", 3, "stepControl", "label", 4, "ngFor", "ngForOf"], ["matStepLabel", ""], ["mat-raised-button", "", "color", "primary", "matStepperPrevious", ""], ["mat-raised-button", "", "color", "accent", "type", "submit"], ["mat-raised-button", "", "color", "warn", 3, "click"], [1, "category-item", 3, "stepControl", "label"], [1, "field-content"], [1, "field-item"], ["cdkDropList", "", 3, "cdkDropListData", "cdkDropListDropped", 4, "ngIf"], ["mat-raised-button", "", "color", "primary", "matStepperPrevious", "", 1, "next-step", 2, "float", "left"], ["mat-raised-button", "", "color", "primary", "matStepperNext", "", 1, "next-step"], ["cdkDropList", "", 3, "cdkDropListData", "cdkDropListDropped"], ["childList", "cdkDropList"], ["class", "field", "cdkDrag", "", 4, "ngFor", "ngForOf"], ["cdkDrag", "", 1, "field"], [3, "field", "length", "i", "j", "onAddKeywordFromInput", "onKeyPress", "onAddNewField", "onRemoveField", "onChangeType", "onRemoveKeyword", "onAddNewSubLevelField", "onExpendMore"], [1, "child"]], template: function OnboardingFormComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵelementStart(0, "div", 0);
            ɵɵelementStart(1, "div", 1);
            ɵɵelementStart(2, "h3");
            ɵɵtext(3, "Nouvel Onboarding");
            ɵɵelementEnd();
            ɵɵelementStart(4, "p", 2);
            ɵɵtext(5, "Cr\u00E9ez ici, l\u2019onboarding de votre nouveau collaborateur.");
            ɵɵelementEnd();
            ɵɵelementStart(6, "form", 3);
            ɵɵtemplate(7, OnboardingFormComponent_div_7_Template, 17, 6, "div", 4);
            ɵɵtemplate(8, OnboardingFormComponent_div_8_Template, 20, 3, "div", 5);
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
        } if (rf & 2) {
            ɵɵadvance(6);
            ɵɵproperty("formGroup", ctx.onboardingForm);
            ɵɵadvance(1);
            ɵɵproperty("ngIf", !ctx.isSelected);
            ɵɵadvance(1);
            ɵɵproperty("ngIf", ctx.isSelected);
        } }, directives: [ɵangular_packages_forms_forms_y, NgControlStatusGroup, FormGroupDirective, NgIf, MatFormField, MatLabel, MatSelect, NgControlStatus, FormControlName, RequiredValidator, NgForOf, MatButton, MatOption, CdkDropListGroup, CdkDropList, MatHorizontalStepper, MatStep, MatStepLabel, MatStepperPrevious, MatStepperNext, CdkDrag, SubOnboaringComponent], styles: [".onboarding-mat-stepper .mat-horizontal-stepper-header-container{display:none!important}.container[_ngcontent-%COMP%]{background:no-repeat padding-box #f4f7f9;width:100%;height:auto;min-height:100%}.container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{width:99%;height:100%;padding-left:1%}.container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font:bold 32px/30px Nexa Text;letter-spacing:0;color:#171f26;padding-top:20px}.container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font:20px/26px Nexa Text;letter-spacing:0;color:#171f26}.container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   p.sub-title[_ngcontent-%COMP%]{max-width:300px}.container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .select-contact[_ngcontent-%COMP%]{max-width:70%;margin:5% auto auto;background:no-repeat padding-box #fff;border:1px solid #dce4e9;border-radius:6px;padding:5%}.container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .select-contact[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{float:right;text-align:center;border:1px solid #543cb6;border-radius:7px;padding:.7em 2em .5em;display:flex;align-items:center;background-color:transparent;font:bold 15px/17px Nexa;letter-spacing:0;color:#543cb6;align-self:flex-end}.container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .category[_ngcontent-%COMP%]   .onboarding-mat-stepper[_ngcontent-%COMP%]   mat-horizontal-stepper[_ngcontent-%COMP%]   .next-step[_ngcontent-%COMP%]{float:right}.container[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:space-between}.input-category-name[_ngcontent-%COMP%]{font-size:15px;font-weight:500}.example-full-width[_ngcontent-%COMP%]{width:100%}.field-item[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center}.field-action[_ngcontent-%COMP%]{width:10%}.field-size[_ngcontent-%COMP%]{width:90%;margin:auto 2% auto auto}hr[_ngcontent-%COMP%]{margin:50px 0}  .mat-form-field-appearance-fill .mat-form-field-flex{background-color:#fff}.category-action[_ngcontent-%COMP%]{display:flex;width:100%}.delete-field[_ngcontent-%COMP%]{margin:auto 2%}.radio-group[_ngcontent-%COMP%]   .mat-radio-button[_ngcontent-%COMP%]{margin-right:10px}.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary[_ngcontent-%COMP%]{background-color:#3f51b5;color:#fff;min-height:20px;font-size:10px}.move-icons[_ngcontent-%COMP%]{cursor:move}.category-item[_ngcontent-%COMP%]{display:flex;align-items:baseline;width:100%}.field-content[_ngcontent-%COMP%]{width:100%}.cdk-drag-preview[_ngcontent-%COMP%]{box-sizing:border-box;border-radius:4px;box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.cdk-drag-placeholder[_ngcontent-%COMP%]{opacity:0}.cdk-drag-animating[_ngcontent-%COMP%], .example-list.cdk-drop-list-dragging[_ngcontent-%COMP%]   .category-item[_ngcontent-%COMP%]:not(.cdk-drag-placeholder){transition:transform 250ms cubic-bezier(0,0,.2,1)}.child[_ngcontent-%COMP%]{margin-left:5%}"] });
    return OnboardingFormComponent;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(OnboardingFormComponent, [{
        type: Component,
        args: [{
                selector: 'lib-onboarding-form',
                templateUrl: './onboarding-form.component.html',
                styleUrls: ['./onboarding-form.component.scss']
            }]
    }], function () { return [{ type: OnboardingService }, { type: FormBuilder }, { type: ActivatedRoute }]; }, null); })();

;
var onBoardingRoutes = [
    {
        path: 'onboarding',
        component: OnboardingComponent,
        children: [
            {
                path: 'template-builder/:id',
                component: CreateProfileTemplateComponent
            },
            {
                path: '',
                component: ProfileListComponent
            },
            // {
            //   path: 'onboarding',
            //   component: OnboardingFormComponent
            // },
            {
                path: ':id',
                component: OnboardingFormComponent
            },
        ]
    },
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
                RouterModule.forChild(onBoardingRoutes),
                DragDropModule,
                MatCardModule,
                MatDialogModule,
                MatStepperModule
            ],
            HttpClientModule,
            RouterModule] });
    return OnboardingModule;
}());
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(OnboardingModule, { declarations: [MaterialElevationDirective,
        OnboardingComponent,
        CreateProfileTemplateComponent,
        ProfileListComponent,
        SubCategoryComponent,
        SubOnboaringComponent,
        OnboardingFormComponent], imports: [FormsModule,
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
        MatTableModule, RouterModule, DragDropModule,
        MatCardModule,
        MatDialogModule,
        MatStepperModule], exports: [OnboardingComponent,
        HttpClientModule,
        CreateProfileTemplateComponent,
        ProfileListComponent,
        OnboardingComponent,
        RouterModule] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(OnboardingModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    MaterialElevationDirective,
                    OnboardingComponent,
                    CreateProfileTemplateComponent,
                    ProfileListComponent,
                    SubCategoryComponent,
                    SubOnboaringComponent,
                    OnboardingFormComponent
                ],
                imports: [
                    FormsModule,
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
                    RouterModule.forChild(onBoardingRoutes),
                    DragDropModule,
                    MatCardModule,
                    MatDialogModule,
                    MatStepperModule
                ],
                providers: [OnboardingService],
                exports: [
                    OnboardingComponent,
                    HttpClientModule,
                    CreateProfileTemplateComponent,
                    ProfileListComponent,
                    OnboardingComponent,
                    RouterModule
                ]
            }]
    }], function () { return [{ type: OnboardingModule, decorators: [{
                type: Optional
            }, {
                type: SkipSelf
            }] }]; }, null); })();

/**
 * Generated bundle index. Do not edit.
 */

export { CreateProfileTemplateComponent, OnboardingComponent, OnboardingModule, OnboardingService, ProfileListComponent, onBoardingRoutes };
//# sourceMappingURL=onboarding.js.map
