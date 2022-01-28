import { __awaiter, __generator, __assign, __values } from 'tslib';
import { HttpHeaders, HttpClient, HttpClientModule } from '@angular/common/http';
import { EventEmitter, ɵɵinject, ɵɵdefineInjectable, ɵsetClassMetadata, Injectable, Inject, ɵɵdirectiveInject, ɵɵdefineComponent, ɵɵelement, Component, ɵɵgetCurrentView, ɵɵelementStart, ɵɵlistener, ɵɵrestoreView, ɵɵnextContext, ɵɵtext, ɵɵelementEnd, ɵɵstyleProp, ɵɵadvance, ɵɵtextInterpolate1, ɵɵtemplate, ɵɵproperty, ɵɵtextInterpolate, ɵɵpureFunction0, ɵɵreference, ɵɵprojectionDef, ɵɵelementContainerStart, ɵɵelementContainerEnd, ɵɵprojection, ɵɵclassMap, Input, Output, ɵɵtextInterpolate2, ElementRef, Renderer2, ɵɵdefineDirective, ɵɵNgOnChangesFeature, Directive, HostListener, ɵɵpureFunction1, ɵɵviewQuery, ɵɵqueryRefresh, ɵɵloadQuery, ViewChild, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule, Optional, SkipSelf } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';
import { Router, RouterOutlet, ActivatedRoute, RouterLinkWithHref, RouterLink, RouterModule } from '@angular/router';
import { ɵangular_packages_forms_forms_y, NgControlStatusGroup, FormGroupDirective, DefaultValueAccessor, NgControlStatus, FormControlName, RequiredValidator, FormControl, NgModel, Validators, FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ENTER, COMMA, SEMICOLON } from '@angular/cdk/keycodes';
import { CdkDropList, CdkDrag, moveItemInArray, transferArrayItem, CdkDropListGroup, CdkDragHandle, DragDropModule } from '@angular/cdk/drag-drop';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogContent, MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatButton, MatAnchor, MatButtonModule } from '@angular/material/button';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatFormField, MatLabel, MatFormFieldModule } from '@angular/material/form-field';
import { MatInput, MatInputModule } from '@angular/material/input';
import { NgIf, NgForOf, NgSwitch, NgSwitchCase, NgSwitchDefault, CommonModule } from '@angular/common';
import { MatSelect, MatSelectModule } from '@angular/material/select';
import { MatCheckbox, MatCheckboxRequiredValidator, MatCheckboxModule } from '@angular/material/checkbox';
import { MatOption } from '@angular/material/core';
import { ScrollToDirective, ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { MatTooltip, MatTooltipModule } from '@angular/material/tooltip';
import { MatChipList, MatChipInput, MatChip, MatChipRemove, MatChipsModule } from '@angular/material/chips';
import { MatRadioGroup, MatRadioButton, MatRadioModule } from '@angular/material/radio';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatStepperModule } from '@angular/material/stepper';
import { MatGridListModule } from '@angular/material/grid-list';
import { CdkTableModule } from '@angular/cdk/table';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCardModule } from '@angular/material/card';

var OnboardingService = /** @class */ (function () {
    function OnboardingService(config, http) {
        this.http = http;
        this.canExit$ = new Subject();
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
            console.log(token);
            console.log('localstorage', localStorage.getItem('token'));
            console.log((token || localStorage.getItem('token')));
            var bearer = 'Bearer ' + (token || localStorage.getItem('token'));
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
                    console.log(user);
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

function UpdateProfilComponent_div_17_mat_icon_1_Template(rf, ctx) { if (rf & 1) {
    var _r364 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "mat-icon", 20);
    ɵɵlistener("click", function UpdateProfilComponent_div_17_mat_icon_1_Template_mat_icon_click_0_listener($event) { ɵɵrestoreView(_r364); var icon_r362 = ctx.$implicit; var ctx_r363 = ɵɵnextContext(2); return ctx_r363.onSelectPicto($event, icon_r362.name); });
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    var icon_r362 = ctx.$implicit;
    var ctx_r361 = ɵɵnextContext(2);
    ɵɵstyleProp("color", ctx_r361.form.get("Picto").value === icon_r362.name ? "#830B6B" : "#000");
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", icon_r362.name, " ");
} }
function UpdateProfilComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 18);
    ɵɵtemplate(1, UpdateProfilComponent_div_17_mat_icon_1_Template, 2, 3, "mat-icon", 19);
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r359 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ctx_r359.matIconList);
} }
function UpdateProfilComponent_mat_option_26_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-option", 21);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    var tag_r365 = ctx.$implicit;
    ɵɵproperty("value", tag_r365);
    ɵɵadvance(1);
    ɵɵtextInterpolate(tag_r365);
} }
var UpdateProfilComponent = /** @class */ (function () {
    function UpdateProfilComponent(data, dialogRef) {
        this.data = data;
        this.dialogRef = dialogRef;
        this.form = this.data.form;
        this.tags = this.data.tags;
        this.matIconList = this.data.matIconList;
    }
    UpdateProfilComponent.prototype.ngOnInit = function () {
    };
    UpdateProfilComponent.prototype.onConfirm = function () {
        this.dialogRef.close(true);
    };
    UpdateProfilComponent.prototype.onClose = function () {
        this.dialogRef.close(false);
    };
    UpdateProfilComponent.prototype.onSelectPicto = function (e, picto) {
        e.preventDefault();
        this.form.patchValue({ Picto: picto });
        this.isPictoListShow = !this.isPictoListShow;
    };
    UpdateProfilComponent.prototype.onShowPictoList = function (e) {
        e.preventDefault();
        this.isPictoListShow = !this.isPictoListShow;
    };
    UpdateProfilComponent.ɵfac = function UpdateProfilComponent_Factory(t) { return new (t || UpdateProfilComponent)(ɵɵdirectiveInject(MAT_DIALOG_DATA), ɵɵdirectiveInject(MatDialogRef)); };
    UpdateProfilComponent.ɵcmp = ɵɵdefineComponent({ type: UpdateProfilComponent, selectors: [["lib-update-profil"]], decls: 36, vars: 7, consts: [[3, "formGroup"], [1, "box-title"], [1, "box-title-content"], [1, "title"], [1, "profil-name-content"], ["mat-raised-button", "", "color", "primary", 1, "add-picto", 3, "click"], ["appearance", "outline", 1, "full-width"], ["type", "text", "matInput", "", "formControlName", "Name", "placeholder", "Ex. Manager"], ["class", "list-picto", 4, "ngIf"], ["type", "text", "matInput", "", "formControlName", "Description", "rows", "4", "placeholder", ""], ["appearance", "outline", 1, "full-width", "margin-top"], ["formControlName", "Tags", "required", ""], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "Status", 1, "form-field"], [1, "action"], [1, "link-create-profil"], ["mat-raised-button", "", "color", "primary", 1, "link-add-profil", 3, "click"], ["mat-raised-button", "", "color", "primary", 1, "link-add-profil", 3, "disabled", "click"], [1, "list-picto"], [3, "color", "click", 4, "ngFor", "ngForOf"], [3, "click"], [3, "value"]], template: function UpdateProfilComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵelementStart(0, "mat-dialog-content");
            ɵɵelementStart(1, "main");
            ɵɵelementStart(2, "form", 0);
            ɵɵelementStart(3, "div", 1);
            ɵɵelementStart(4, "div", 2);
            ɵɵelementStart(5, "h3", 3);
            ɵɵtext(6, "Modification votre profil d\u2019onboarding");
            ɵɵelementEnd();
            ɵɵelementStart(7, "p");
            ɵɵtext(8, "S\u00E9lectionnez l\u2019icon de votre choix et modifiez votre profil d\u2019onboarding");
            ɵɵelementEnd();
            ɵɵelementStart(9, "div", 4);
            ɵɵelementStart(10, "button", 5);
            ɵɵlistener("click", function UpdateProfilComponent_Template_button_click_10_listener($event) { return ctx.onShowPictoList($event); });
            ɵɵelementStart(11, "mat-icon");
            ɵɵtext(12);
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(13, "mat-form-field", 6);
            ɵɵelementStart(14, "mat-label");
            ɵɵtext(15, "Nom de votre nouveau profil");
            ɵɵelementEnd();
            ɵɵelement(16, "input", 7);
            ɵɵelementEnd();
            ɵɵtemplate(17, UpdateProfilComponent_div_17_Template, 2, 1, "div", 8);
            ɵɵelementEnd();
            ɵɵelementStart(18, "mat-form-field", 6);
            ɵɵelementStart(19, "mat-label");
            ɵɵtext(20, "D\u00E9scription");
            ɵɵelementEnd();
            ɵɵelement(21, "textarea", 9);
            ɵɵelementEnd();
            ɵɵelementStart(22, "mat-form-field", 10);
            ɵɵelementStart(23, "mat-label");
            ɵɵtext(24, "Tags");
            ɵɵelementEnd();
            ɵɵelementStart(25, "mat-select", 11);
            ɵɵtemplate(26, UpdateProfilComponent_mat_option_26_Template, 2, 2, "mat-option", 12);
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(27, "mat-checkbox", 13);
            ɵɵtext(28, "Active");
            ɵɵelementEnd();
            ɵɵelementStart(29, "div", 14);
            ɵɵelementStart(30, "div", 15);
            ɵɵelementStart(31, "button", 16);
            ɵɵlistener("click", function UpdateProfilComponent_Template_button_click_31_listener() { return ctx.onClose(); });
            ɵɵtext(32, " Annuler ");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(33, "div", 15);
            ɵɵelementStart(34, "button", 17);
            ɵɵlistener("click", function UpdateProfilComponent_Template_button_click_34_listener() { return ctx.onConfirm(); });
            ɵɵtext(35, " Modifier un profil ");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
        } if (rf & 2) {
            ɵɵadvance(2);
            ɵɵproperty("formGroup", ctx.form);
            ɵɵadvance(10);
            ɵɵtextInterpolate(ctx.form.get("Picto").value === "" ? "contact_phone" : ctx.form.get("Picto").value);
            ɵɵadvance(5);
            ɵɵproperty("ngIf", ctx.isPictoListShow);
            ɵɵadvance(9);
            ɵɵproperty("ngForOf", ctx.tags);
            ɵɵadvance(8);
            ɵɵstyleProp("opacity", ctx.form.get("Name").value === "" || ctx.form.get("Tags").value == "" ? 0.4 : 1);
            ɵɵproperty("disabled", ctx.form.get("Name").value === "" || ctx.form.get("Tags").value == "");
        } }, directives: [MatDialogContent, ɵangular_packages_forms_forms_y, NgControlStatusGroup, FormGroupDirective, MatButton, MatIcon, MatFormField, MatLabel, MatInput, DefaultValueAccessor, NgControlStatus, FormControlName, NgIf, MatSelect, RequiredValidator, NgForOf, MatCheckbox, MatOption], styles: ["main[_ngcontent-%COMP%]{width:100%;display:flex;flex-direction:column;align-items:center}main[_ngcontent-%COMP%]   .disabled[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{background-color:transparent!important}main[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{display:flex;height:100%;width:100%}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]{width:786px;background:no-repeat padding-box #fff;border:1px solid #dce4e9;border-radius:6px;opacity:1;margin:auto;padding:0 25px;-ms-grid-row-align:center;align-self:center}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{text-align:center;font:900 32px/48px Nexa;letter-spacing:0;color:#171f26}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font:18px/24px Nexa Text;letter-spacing:0;color:#171f26}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .profil-name-content[_ngcontent-%COMP%]{display:flex;align-items:center;position:relative;margin-bottom:10px}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .profil-name-content[_ngcontent-%COMP%]   .add-picto[_ngcontent-%COMP%]{margin-right:15px;min-width:50px;width:30px;padding:9px 12px;border:1px solid #171f26}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .profil-name-content[_ngcontent-%COMP%]   .add-picto[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin-right:10px}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .profil-name-content[_ngcontent-%COMP%]   .list-picto[_ngcontent-%COMP%]{position:absolute;height:200px;width:100%;background:no-repeat padding-box #fff;border:1px solid #171f26;border-radius:8px;top:100%;z-index:1}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .profil-name-content[_ngcontent-%COMP%]   .list-picto[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin:15px;border:none;font-size:40px}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .profil-name-content[_ngcontent-%COMP%]   .list-picto[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]:hover{color:#830b6b!important;cursor:pointer}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .box-title-content[_ngcontent-%COMP%]{width:100%;margin:25px auto}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font:900 32px/38px Nexa;letter-spacing:0;color:#171f26}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font:15px/26px Nexa Text;letter-spacing:0;color:#171f26;text-align:center}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .link-create-profil[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:center;margin-top:10px}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{text-align:center;border:1px solid #543cb6;border-radius:7px;padding:.7em 2em .5em;display:flex;align-items:center;background-color:transparent;font:bold 15px/17px Nexa;letter-spacing:0;color:#543cb6}main[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:space-between}.input-category-name[_ngcontent-%COMP%]{border:none;outline:0;text-align:left;font:bold 20px/48px Nexa Text;letter-spacing:0;color:#171f26}.full-width[_ngcontent-%COMP%]{width:100%}.field-action[_ngcontent-%COMP%]{width:10%}.field-size[_ngcontent-%COMP%]{width:90%;margin:auto 2% auto auto}.margin-top[_ngcontent-%COMP%]{margin-top:10px}.action[_ngcontent-%COMP%]{display:flex;align-items:center}"] });
    return UpdateProfilComponent;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(UpdateProfilComponent, [{
        type: Component,
        args: [{
                selector: 'lib-update-profil',
                templateUrl: './update-profil.component.html',
                styleUrls: ['./update-profil.component.scss']
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [MAT_DIALOG_DATA]
            }] }, { type: MatDialogRef }]; }, null); })();

var ExitConfirmComponent = /** @class */ (function () {
    function ExitConfirmComponent(data, dialogRef, service) {
        this.data = data;
        this.dialogRef = dialogRef;
        this.service = service;
    }
    ExitConfirmComponent.prototype.ngOnInit = function () {
    };
    ExitConfirmComponent.prototype.confirm = function () {
        this.dialogRef.close(true);
        this.service.canExit$.next(true);
    };
    ExitConfirmComponent.prototype.cancel = function () {
        this.dialogRef.close(false);
        this.service.canExit$.next(false);
    };
    ExitConfirmComponent.ɵfac = function ExitConfirmComponent_Factory(t) { return new (t || ExitConfirmComponent)(ɵɵdirectiveInject(MAT_DIALOG_DATA), ɵɵdirectiveInject(MatDialogRef), ɵɵdirectiveInject(OnboardingService)); };
    ExitConfirmComponent.ɵcmp = ɵɵdefineComponent({ type: ExitConfirmComponent, selectors: [["lib-exit-confirm"]], decls: 9, vars: 0, consts: [[1, "header"], ["mat-button", "", 1, "nowboard-btn", 2, "margin-top", "10px", 3, "click"], ["mat-button", "", 1, "cancel_btn", 3, "click"]], template: function ExitConfirmComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵelementStart(0, "mat-dialog-content");
            ɵɵelementStart(1, "div", 0);
            ɵɵtext(2, " Attention ! ");
            ɵɵelementEnd();
            ɵɵelementStart(3, "p");
            ɵɵtext(4, "Toutes vos donn\u00E9es seront perdues, \u00EAtes-vous certain de vouloir continuer ?");
            ɵɵelementEnd();
            ɵɵelementStart(5, "button", 1);
            ɵɵlistener("click", function ExitConfirmComponent_Template_button_click_5_listener() { return ctx.confirm(); });
            ɵɵtext(6, " Confirmer ");
            ɵɵelementEnd();
            ɵɵelementStart(7, "button", 2);
            ɵɵlistener("click", function ExitConfirmComponent_Template_button_click_7_listener() { return ctx.cancel(); });
            ɵɵtext(8, " Annuler ");
            ɵɵelementEnd();
            ɵɵelementEnd();
        } }, directives: [MatDialogContent, MatButton], styles: ["mat-dialog-content[_ngcontent-%COMP%]{display:flex!important;flex-direction:column!important}mat-dialog-content[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]{color:#171f26;font:900 28px/48px sans-serif;letter-spacing:0;margin-bottom:10px;margin-top:30px;padding:0 15px;text-align:center}mat-dialog-content[_ngcontent-%COMP%]   .nowboard-btn[_ngcontent-%COMP%]{background-color:transparent!important;background-image:linear-gradient(90deg,#9d107d,#8b3391,#7647a0,#5f56a8,#4862ab)!important;color:#fff}mat-dialog-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#171f26;font:18px/24px nexa,Text;letter-spacing:0;padding:0 50px;margin-bottom:2vh;text-align:center}mat-dialog-content[_ngcontent-%COMP%]   .cancel_btn[_ngcontent-%COMP%]{background-color:transparent!important;margin-top:10px}mat-dialog-content[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:50%;margin:auto}"] });
    return ExitConfirmComponent;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(ExitConfirmComponent, [{
        type: Component,
        args: [{
                selector: 'lib-exit-confirm',
                templateUrl: './exit-confirm.component.html',
                styleUrls: ['./exit-confirm.component.scss']
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [MAT_DIALOG_DATA]
            }] }, { type: MatDialogRef }, { type: OnboardingService }]; }, null); })();

var _c0 = function () { return { standalone: true }; };
function SubTemplateProfileComponent_div_34_Template(rf, ctx) { if (rf & 1) {
    var _r611 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 28);
    ɵɵelementStart(1, "mat-checkbox", 24);
    ɵɵlistener("ngModelChange", function SubTemplateProfileComponent_div_34_Template_mat_checkbox_ngModelChange_1_listener($event) { ɵɵrestoreView(_r611); var ctx_r610 = ɵɵnextContext(); return ctx_r610.field.expandOnboarding = $event; });
    ɵɵtext(2, " Coch\u00E9 par default ");
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r601 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("ngModel", ctx_r601.field.expandOnboarding)("ngModelOptions", ɵɵpureFunction0(2, _c0));
} }
function SubTemplateProfileComponent_mat_form_field_35_mat_chip_6_Template(rf, ctx) { if (rf & 1) {
    var _r618 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "mat-chip", 35);
    ɵɵlistener("dblclick", function SubTemplateProfileComponent_mat_form_field_35_mat_chip_6_Template_mat_chip_dblclick_0_listener() { ɵɵrestoreView(_r618); var option_r616 = ctx.$implicit; var ctx_r617 = ɵɵnextContext(2); return ctx_r617.toggleChip(option_r616); })("click", function SubTemplateProfileComponent_mat_form_field_35_mat_chip_6_Template_mat_chip_click_0_listener() { ɵɵrestoreView(_r618); var option_r616 = ctx.$implicit; var ctx_r619 = ɵɵnextContext(2); return ctx_r619.onEditChip(option_r616); })("removed", function SubTemplateProfileComponent_mat_form_field_35_mat_chip_6_Template_mat_chip_removed_0_listener() { ɵɵrestoreView(_r618); var option_r616 = ctx.$implicit; var ctx_r620 = ɵɵnextContext(2); return ctx_r620.removeKeyword(option_r616, ctx_r620.i, ctx_r620.j); });
    ɵɵtext(1);
    ɵɵelementStart(2, "mat-icon", 36);
    ɵɵtext(3, "cancel");
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    var option_r616 = ctx.$implicit;
    ɵɵproperty("selected", option_r616.checked)("value", option_r616.value)("removable", true);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", option_r616.value, " ");
} }
function SubTemplateProfileComponent_mat_form_field_35_Template(rf, ctx) { if (rf & 1) {
    var _r622 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "mat-form-field", 29);
    ɵɵelementStart(1, "mat-label");
    ɵɵtext(2, " Valeur par default ");
    ɵɵelementEnd();
    ɵɵelementStart(3, "mat-chip-list", 30, 31);
    ɵɵlistener("cdkDropListDropped", function SubTemplateProfileComponent_mat_form_field_35_Template_mat_chip_list_cdkDropListDropped_3_listener($event) { ɵɵrestoreView(_r622); var ctx_r621 = ɵɵnextContext(); return ctx_r621.drop($event); });
    ɵɵtemplate(6, SubTemplateProfileComponent_mat_form_field_35_mat_chip_6_Template, 4, 4, "mat-chip", 32);
    ɵɵelementStart(7, "input", 33, 34);
    ɵɵlistener("matChipInputTokenEnd", function SubTemplateProfileComponent_mat_form_field_35_Template_input_matChipInputTokenEnd_7_listener($event) { ɵɵrestoreView(_r622); var ctx_r623 = ɵɵnextContext(); return ctx_r623.addKeywordFromInput($event, ctx_r623.i, ctx_r623.j); })("keyup", function SubTemplateProfileComponent_mat_form_field_35_Template_input_keyup_7_listener($event) { ɵɵrestoreView(_r622); var ctx_r624 = ɵɵnextContext(); return ctx_r624.keyUp($event, ctx_r624.i, ctx_r624.j); })("ngModelChange", function SubTemplateProfileComponent_mat_form_field_35_Template_input_ngModelChange_7_listener($event) { ɵɵrestoreView(_r622); var ctx_r625 = ɵɵnextContext(); return ctx_r625.currentChip = $event; });
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    var _r613 = ɵɵreference(5);
    var ctx_r602 = ɵɵnextContext();
    ɵɵadvance(3);
    ɵɵproperty("cdkDropListData", ctx_r602.field.defaultValue);
    ɵɵadvance(3);
    ɵɵproperty("ngForOf", ctx_r602.field.defaultValue);
    ɵɵadvance(1);
    ɵɵproperty("matChipInputFor", _r613)("matChipInputAddOnBlur", true)("matChipInputSeparatorKeyCodes", ctx_r602.separatorKeysCodes)("ngModel", ctx_r602.currentChip);
} }
function SubTemplateProfileComponent_mat_form_field_36_Template(rf, ctx) { if (rf & 1) {
    var _r627 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "mat-form-field", 1);
    ɵɵelementStart(1, "mat-label");
    ɵɵtext(2, "Valeur par default");
    ɵɵelementEnd();
    ɵɵelementStart(3, "input", 37);
    ɵɵlistener("ngModelChange", function SubTemplateProfileComponent_mat_form_field_36_Template_input_ngModelChange_3_listener($event) { ɵɵrestoreView(_r627); var ctx_r626 = ɵɵnextContext(); return ctx_r626.field.defaultValue = $event; });
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r603 = ɵɵnextContext();
    ɵɵadvance(3);
    ɵɵproperty("ngModelOptions", ɵɵpureFunction0(2, _c0))("ngModel", ctx_r603.field.defaultValue);
} }
function SubTemplateProfileComponent_mat_form_field_37_Template(rf, ctx) { if (rf & 1) {
    var _r629 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "mat-form-field", 1);
    ɵɵelementStart(1, "mat-label");
    ɵɵtext(2, "Valeur par default");
    ɵɵelementEnd();
    ɵɵelementStart(3, "input", 38);
    ɵɵlistener("ngModelChange", function SubTemplateProfileComponent_mat_form_field_37_Template_input_ngModelChange_3_listener($event) { ɵɵrestoreView(_r629); var ctx_r628 = ɵɵnextContext(); return ctx_r628.field.defaultValue = $event; });
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r604 = ɵɵnextContext();
    ɵɵstyleProp("opacity", ctx_r604.field.type !== "tel" ? 1 : 0);
    ɵɵadvance(3);
    ɵɵproperty("type", ctx_r604.field.type)("disabled", ctx_r604.field.type === "tel")("ngModelOptions", ɵɵpureFunction0(6, _c0))("ngModel", ctx_r604.field.defaultValue);
} }
function SubTemplateProfileComponent_mat_checkbox_39_Template(rf, ctx) { if (rf & 1) {
    var _r631 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "mat-checkbox", 24);
    ɵɵlistener("ngModelChange", function SubTemplateProfileComponent_mat_checkbox_39_Template_mat_checkbox_ngModelChange_0_listener($event) { ɵɵrestoreView(_r631); var ctx_r630 = ɵɵnextContext(); return ctx_r630.field.isConditional = $event; })("ngModelChange", function SubTemplateProfileComponent_mat_checkbox_39_Template_mat_checkbox_ngModelChange_0_listener() { ɵɵrestoreView(_r631); var ctx_r632 = ɵɵnextContext(); return ctx_r632.getConditionValues(); });
    ɵɵtext(1, " \u00E0 condition ");
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r605 = ɵɵnextContext();
    ɵɵproperty("ngModel", ctx_r605.field.isConditional)("ngModelOptions", ɵɵpureFunction0(2, _c0));
} }
function SubTemplateProfileComponent_div_40_mat_option_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-option", 46);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    var cond_r635 = ctx.$implicit;
    ɵɵproperty("value", cond_r635);
    ɵɵadvance(1);
    ɵɵtextInterpolate(cond_r635.label);
} }
function SubTemplateProfileComponent_div_40_mat_radio_button_7_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-radio-button", 47);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    var item_r636 = ctx.$implicit;
    ɵɵproperty("value", item_r636.value);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", item_r636.value, " ");
} }
function SubTemplateProfileComponent_div_40_Template(rf, ctx) { if (rf & 1) {
    var _r638 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 39);
    ɵɵelementStart(1, "mat-form-field", 40);
    ɵɵelementStart(2, "mat-label");
    ɵɵtext(3, "Champ de condition :");
    ɵɵelementEnd();
    ɵɵelementStart(4, "mat-select", 41);
    ɵɵlistener("ngModelChange", function SubTemplateProfileComponent_div_40_Template_mat_select_ngModelChange_4_listener($event) { ɵɵrestoreView(_r638); var ctx_r637 = ɵɵnextContext(); return ctx_r637.field.conditionLocation = $event; });
    ɵɵtemplate(5, SubTemplateProfileComponent_div_40_mat_option_5_Template, 2, 2, "mat-option", 42);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(6, "mat-radio-group", 43);
    ɵɵlistener("ngModelChange", function SubTemplateProfileComponent_div_40_Template_mat_radio_group_ngModelChange_6_listener($event) { ɵɵrestoreView(_r638); var ctx_r639 = ɵɵnextContext(); return ctx_r639.field.conditionValue = $event; });
    ɵɵtemplate(7, SubTemplateProfileComponent_div_40_mat_radio_button_7_Template, 2, 2, "mat-radio-button", 44);
    ɵɵelementEnd();
    ɵɵelementStart(8, "button", 45);
    ɵɵlistener("click", function SubTemplateProfileComponent_div_40_Template_button_click_8_listener($event) { ɵɵrestoreView(_r638); var ctx_r640 = ɵɵnextContext(); return ctx_r640.onShowCondition($event); });
    ɵɵelementStart(9, "mat-icon");
    ɵɵtext(10, "close");
    ɵɵelementEnd();
    ɵɵtext(11, "Fermer ");
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r606 = ɵɵnextContext();
    ɵɵadvance(4);
    ɵɵproperty("ngModel", ctx_r606.field.conditionLocation)("ngModelOptions", ɵɵpureFunction0(5, _c0));
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ctx_r606.conditionData);
    ɵɵadvance(1);
    ɵɵproperty("ngModel", ctx_r606.field.conditionValue);
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ctx_r606.field.conditionLocation.possibleValues);
} }
function SubTemplateProfileComponent_mat_icon_41_Template(rf, ctx) { if (rf & 1) {
    var _r642 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "mat-icon", 48);
    ɵɵlistener("click", function SubTemplateProfileComponent_mat_icon_41_Template_mat_icon_click_0_listener() { ɵɵrestoreView(_r642); var ctx_r641 = ɵɵnextContext(); return ctx_r641.onShowCondition(); });
    ɵɵtext(1, "help ");
    ɵɵelementEnd();
} }
function SubTemplateProfileComponent_mat_icon_48_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-icon");
    ɵɵtext(1, "expand_less");
    ɵɵelementEnd();
} }
function SubTemplateProfileComponent_mat_icon_49_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-icon");
    ɵɵtext(1, "expand_more");
    ɵɵelementEnd();
} }
var _c1 = [[["", 8, "child"]]];
var _c2 = function () { return ["select", "radio", "checkbox_multiple"]; };
var _c3 = [".child"];
var SubTemplateProfileComponent = /** @class */ (function () {
    function SubTemplateProfileComponent() {
        var _this = this;
        this.onAddKeywordFromInput = new EventEmitter();
        this.onKeyPress = new EventEmitter();
        this.onDrop = new EventEmitter();
        this.onAddNewField = new EventEmitter();
        this.onRemoveField = new EventEmitter();
        this.onChangeType = new EventEmitter();
        this.onRemoveKeyword = new EventEmitter();
        this.onAddNewSubLevelField = new EventEmitter();
        this.onExpendMore = new EventEmitter();
        this.onChangeLabel = new EventEmitter();
        this.onCheckedChip = new EventEmitter();
        this.onCheckedDefault = new EventEmitter();
        this.onGetConditionValues = new EventEmitter();
        this.conditionData = [];
        this.chipControl = new FormControl(new Set());
        this.separatorKeysCodes = [ENTER, COMMA, SEMICOLON];
        this.currentChip = "";
        this.prevValue = "";
        this.showCondition = false;
        this.toggleChip = function (chip) {
            _this.onCheckedChip.emit(chip);
        };
    }
    SubTemplateProfileComponent.prototype.ngOnInit = function () {
    };
    SubTemplateProfileComponent.prototype.drop = function (event) {
        this.onDrop.emit(event);
    };
    SubTemplateProfileComponent.prototype.addKeywordFromInput = function (event, i, j) {
        this.onAddKeywordFromInput.emit({ event: event, prev: this.prevValue, i: i, j: j });
    };
    SubTemplateProfileComponent.prototype.keyUp = function (event, i, j) {
        this.onKeyPress.emit({ event: event, i: i, j: j });
    };
    SubTemplateProfileComponent.prototype.addNewField = function (event, i) {
        event.preventDefault();
        this.onAddNewField.emit({ event: event, i: i });
    };
    SubTemplateProfileComponent.prototype.removeField = function (event, i, j) {
        event.preventDefault();
        this.onRemoveField.emit({ i: i, j: j });
    };
    SubTemplateProfileComponent.prototype.changeType = function (type, i, j) {
        this.onChangeType.emit({ type: type, i: i, j: j });
    };
    SubTemplateProfileComponent.prototype.removeKeyword = function (event, i, j) {
        this.onRemoveKeyword.emit({ event: event, i: i, j: j });
    };
    SubTemplateProfileComponent.prototype.addNewSubLevelField = function (e) {
        e.preventDefault();
        this.onAddNewSubLevelField.emit(true);
    };
    SubTemplateProfileComponent.prototype.expendMore = function (e, field) {
        e.preventDefault();
        this.onExpendMore.emit({ expand: true, field: field });
    };
    SubTemplateProfileComponent.prototype.getConditionValues = function () {
        this.onGetConditionValues.emit(true);
    };
    SubTemplateProfileComponent.prototype.ingoreDefaultAction = function (e) {
        e.preventDefault();
    };
    SubTemplateProfileComponent.prototype.changeLabel = function (label, key) {
        this.onChangeLabel.emit({ label: label, key: key });
    };
    SubTemplateProfileComponent.prototype.onEditChip = function (chip) {
        if (chip.value === this.currentChip) {
            this.currentChip = "";
            this.prevValue = "";
        }
        else {
            this.currentChip = chip.value;
            this.prevValue = chip.value;
        }
    };
    Object.defineProperty(SubTemplateProfileComponent.prototype, "chips", {
        get: function () { return this.chipControl.value; },
        enumerable: true,
        configurable: true
    });
    SubTemplateProfileComponent.prototype.checkedDefault = function (value) {
        this.onCheckedDefault.emit(value);
    };
    SubTemplateProfileComponent.prototype.onShowCondition = function (event) {
        if (event === void 0) { event = null; }
        if (event) {
            event.preventDefault();
        }
        this.showCondition = !this.showCondition;
    };
    SubTemplateProfileComponent.ɵfac = function SubTemplateProfileComponent_Factory(t) { return new (t || SubTemplateProfileComponent)(); };
    SubTemplateProfileComponent.ɵcmp = ɵɵdefineComponent({ type: SubTemplateProfileComponent, selectors: [["lib-sub-category"]], inputs: { field: "field", length: "length", i: "i", j: "j", conditionData: "conditionData" }, outputs: { onAddKeywordFromInput: "onAddKeywordFromInput", onKeyPress: "onKeyPress", onDrop: "onDrop", onAddNewField: "onAddNewField", onRemoveField: "onRemoveField", onChangeType: "onChangeType", onRemoveKeyword: "onRemoveKeyword", onAddNewSubLevelField: "onAddNewSubLevelField", onExpendMore: "onExpendMore", onChangeLabel: "onChangeLabel", onCheckedChip: "onCheckedChip", onCheckedDefault: "onCheckedDefault", onGetConditionValues: "onGetConditionValues" }, ngContentSelectors: _c3, decls: 51, vars: 35, consts: [[1, "field-item"], ["appearance", "outline", 1, "form-field", "field-size"], ["type", "text", "matInput", "", "required", "", "placeholder", "", 3, "readonly", "ngModelOptions", "ngModel", "ngModelChange"], ["appearance", "outline", 1, "form-field", "field-size", 2, "display", "none"], ["required", "", 3, "disabled", "ngModel", "ngModelOptions", "ngModelChange"], ["value", "text"], ["value", "textarea"], ["value", "radio"], ["value", "select"], ["value", "checkbox"], ["value", "checkbox_multiple"], ["value", "email"], ["value", "password"], ["value", "date"], ["value", "tel"], [3, "ngSwitch"], ["class", "flex-auto w-30 field-size", 4, "ngSwitchCase"], ["class", "flex-auto w-30 field-size", "appearance", "outline", 4, "ngSwitchCase"], ["class", "form-field field-size", "appearance", "outline", 4, "ngSwitchCase"], ["class", "form-field field-size", "appearance", "outline", 3, "opacity", 4, "ngSwitchDefault"], [1, "checkbox-condition"], ["class", "form-field", 3, "ngModel", "ngModelOptions", "ngModelChange", 4, "ngIf"], ["class", "condition-container", 4, "ngIf"], ["class", "condition-help", "matTooltip", "Param\u00E8trer la condition ici !", 3, "click", 4, "ngIf"], [1, "form-field", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["mat-mini-fab", "", "color", "success", "matTooltip", "Ajouter une sous-cat\u00E9gorie", 1, "transparent-button", 3, "disabled", "click"], ["mat-mini-fab", "", "color", "primary", 1, "expand-button", 3, "disabled", "click"], [4, "ngIf"], [1, "flex-auto", "w-30", "field-size"], ["appearance", "outline", 1, "flex-auto", "w-30", "field-size"], ["cdkDropList", "", "aria-label", "Video keywords; let index=index", "multiple", "", "selectable", "", 3, "cdkDropListData", "cdkDropListDropped"], ["childList", "cdkDropList", "chipList", ""], ["style", "min-height: 25px;", "cdkDrag", "", 3, "selected", "value", "removable", "dblclick", "click", "removed", 4, "ngFor", "ngForOf"], ["placeholder", "add...", 3, "matChipInputFor", "matChipInputAddOnBlur", "matChipInputSeparatorKeyCodes", "ngModel", "matChipInputTokenEnd", "keyup", "ngModelChange"], ["chipsInput", ""], ["cdkDrag", "", 2, "min-height", "25px", 3, "selected", "value", "removable", "dblclick", "click", "removed"], ["matChipRemove", ""], ["type", "text", "matInput", "", "placeholder", "Description...", 3, "ngModelOptions", "ngModel", "ngModelChange"], ["matInput", "", "placeholder", "", 3, "type", "disabled", "ngModelOptions", "ngModel", "ngModelChange"], [1, "condition-container"], ["appearance", "outline", 1, "form-field", "field-size", "full-width"], ["required", "", 3, "ngModel", "ngModelOptions", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], ["aria-labelledby", "example-radio-group-label", 1, "example-radio-group", 3, "ngModel", "ngModelChange"], ["class", "example-radio-button", 3, "value", 4, "ngFor", "ngForOf"], ["mat-button", "", "color", "primary", 3, "click"], [3, "value"], [1, "example-radio-button", 3, "value"], ["matTooltip", "Param\u00E8trer la condition ici !", 1, "condition-help", 3, "click"]], template: function SubTemplateProfileComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵprojectionDef(_c1);
            ɵɵelementStart(0, "div", 0);
            ɵɵelementStart(1, "mat-form-field", 1);
            ɵɵelementStart(2, "mat-label");
            ɵɵtext(3, "Label");
            ɵɵelementEnd();
            ɵɵelementStart(4, "input", 2);
            ɵɵlistener("ngModelChange", function SubTemplateProfileComponent_Template_input_ngModelChange_4_listener($event) { return ctx.field.label = $event; })("ngModelChange", function SubTemplateProfileComponent_Template_input_ngModelChange_4_listener() { return ctx.changeLabel(ctx.field.label, ctx.field.key); });
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(5, "mat-form-field", 3);
            ɵɵelementStart(6, "mat-label");
            ɵɵtext(7, "Cl\u00E9 du champ");
            ɵɵelementEnd();
            ɵɵelementStart(8, "input", 2);
            ɵɵlistener("ngModelChange", function SubTemplateProfileComponent_Template_input_ngModelChange_8_listener($event) { return ctx.field.key = $event; });
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(9, "mat-form-field", 1);
            ɵɵelementStart(10, "mat-label");
            ɵɵtext(11, "Type");
            ɵɵelementEnd();
            ɵɵelementStart(12, "mat-select", 4);
            ɵɵlistener("ngModelChange", function SubTemplateProfileComponent_Template_mat_select_ngModelChange_12_listener($event) { return ctx.field.type = $event; })("ngModelChange", function SubTemplateProfileComponent_Template_mat_select_ngModelChange_12_listener() { return ctx.changeType(ctx.field.type, ctx.i, ctx.j); });
            ɵɵelementStart(13, "mat-option", 5);
            ɵɵtext(14, "Text(80)");
            ɵɵelementEnd();
            ɵɵelementStart(15, "mat-option", 6);
            ɵɵtext(16, "Text(80+)");
            ɵɵelementEnd();
            ɵɵelementStart(17, "mat-option", 7);
            ɵɵtext(18, "Radio");
            ɵɵelementEnd();
            ɵɵelementStart(19, "mat-option", 8);
            ɵɵtext(20, "Selecteur");
            ɵɵelementEnd();
            ɵɵelementStart(21, "mat-option", 9);
            ɵɵtext(22, "Checkbox");
            ɵɵelementEnd();
            ɵɵelementStart(23, "mat-option", 10);
            ɵɵtext(24, "Checkbox multiple");
            ɵɵelementEnd();
            ɵɵelementStart(25, "mat-option", 11);
            ɵɵtext(26, "Email");
            ɵɵelementEnd();
            ɵɵelementStart(27, "mat-option", 12);
            ɵɵtext(28, "Password");
            ɵɵelementEnd();
            ɵɵelementStart(29, "mat-option", 13);
            ɵɵtext(30, "Date");
            ɵɵelementEnd();
            ɵɵelementStart(31, "mat-option", 14);
            ɵɵtext(32, "Phone");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementContainerStart(33, 15);
            ɵɵtemplate(34, SubTemplateProfileComponent_div_34_Template, 3, 3, "div", 16);
            ɵɵtemplate(35, SubTemplateProfileComponent_mat_form_field_35_Template, 9, 6, "mat-form-field", 17);
            ɵɵtemplate(36, SubTemplateProfileComponent_mat_form_field_36_Template, 4, 3, "mat-form-field", 18);
            ɵɵtemplate(37, SubTemplateProfileComponent_mat_form_field_37_Template, 4, 7, "mat-form-field", 19);
            ɵɵelementContainerEnd();
            ɵɵelementStart(38, "div", 20);
            ɵɵtemplate(39, SubTemplateProfileComponent_mat_checkbox_39_Template, 2, 3, "mat-checkbox", 21);
            ɵɵtemplate(40, SubTemplateProfileComponent_div_40_Template, 12, 6, "div", 22);
            ɵɵelementEnd();
            ɵɵtemplate(41, SubTemplateProfileComponent_mat_icon_41_Template, 2, 0, "mat-icon", 23);
            ɵɵelementStart(42, "mat-checkbox", 24);
            ɵɵlistener("ngModelChange", function SubTemplateProfileComponent_Template_mat_checkbox_ngModelChange_42_listener($event) { return ctx.field.isMandatory = $event; });
            ɵɵtext(43, " obligatoire ");
            ɵɵelementEnd();
            ɵɵelementStart(44, "button", 25);
            ɵɵlistener("click", function SubTemplateProfileComponent_Template_button_click_44_listener($event) { return ctx.addNewSubLevelField($event); });
            ɵɵelementStart(45, "mat-icon");
            ɵɵtext(46, "device_hub");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(47, "button", 26);
            ɵɵlistener("click", function SubTemplateProfileComponent_Template_button_click_47_listener($event) { return ctx.expendMore($event, ctx.field); });
            ɵɵtemplate(48, SubTemplateProfileComponent_mat_icon_48_Template, 2, 0, "mat-icon", 27);
            ɵɵtemplate(49, SubTemplateProfileComponent_mat_icon_49_Template, 2, 0, "mat-icon", 27);
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵprojection(50);
        } if (rf & 2) {
            ɵɵadvance(1);
            ɵɵclassMap(!ctx.field.editable ? "readonly" : "");
            ɵɵadvance(3);
            ɵɵproperty("readonly", !ctx.field.editable)("ngModelOptions", ɵɵpureFunction0(30, _c0))("ngModel", ctx.field.label);
            ɵɵadvance(1);
            ɵɵclassMap(!ctx.field.editable ? "readonly" : "");
            ɵɵadvance(3);
            ɵɵproperty("readonly", !ctx.field.editable)("ngModelOptions", ɵɵpureFunction0(31, _c0))("ngModel", ctx.field.key);
            ɵɵadvance(4);
            ɵɵproperty("disabled", !ctx.field.editable)("ngModel", ctx.field.type)("ngModelOptions", ɵɵpureFunction0(32, _c0));
            ɵɵadvance(21);
            ɵɵproperty("ngSwitch", ctx.field.type);
            ɵɵadvance(1);
            ɵɵproperty("ngSwitchCase", "checkbox");
            ɵɵadvance(1);
            ɵɵproperty("ngSwitchCase", ɵɵpureFunction0(33, _c2).includes(ctx.field.type) ? ctx.field.type : !ctx.field.type);
            ɵɵadvance(1);
            ɵɵproperty("ngSwitchCase", "textarea");
            ɵɵadvance(3);
            ɵɵproperty("ngIf", ctx.field.editable);
            ɵɵadvance(1);
            ɵɵproperty("ngIf", ctx.showCondition);
            ɵɵadvance(1);
            ɵɵproperty("ngIf", ctx.field.isConditional);
            ɵɵadvance(1);
            ɵɵproperty("ngModel", ctx.field.isMandatory)("ngModelOptions", ɵɵpureFunction0(34, _c0));
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
        } }, directives: [MatFormField, MatLabel, MatInput, DefaultValueAccessor, RequiredValidator, NgControlStatus, NgModel, MatSelect, MatOption, NgSwitch, NgSwitchCase, NgSwitchDefault, NgIf, MatCheckbox, MatButton, MatTooltip, MatIcon, MatChipList, CdkDropList, NgForOf, MatChipInput, MatChip, CdkDrag, MatChipRemove, MatRadioGroup, MatRadioButton], styles: [".container[_ngcontent-%COMP%]{max-width:98%;margin:50px auto auto;padding-bottom:50px}.container[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:space-between}.input-category-name[_ngcontent-%COMP%]{font-size:15px;font-weight:500}.full-width[_ngcontent-%COMP%]{width:100%}.field-item[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;width:100%;flex-wrap:wrap}.field-item[_ngcontent-%COMP%]   .button-action[_ngcontent-%COMP%]{background-color:#6fe8d7;height:100%;margin:auto 15px auto auto;display:flex}.field-item[_ngcontent-%COMP%]   .button-action[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{box-shadow:none;background-color:transparent;color:#fff}.field-action[_ngcontent-%COMP%]{width:10%}hr[_ngcontent-%COMP%]{margin:50px 0}  .mat-form-field-appearance-fill .mat-form-field-flex{background-color:#fff}.category-action[_ngcontent-%COMP%]{display:flex;width:100%}.delete-field[_ngcontent-%COMP%]{margin:auto 2%}.radio-group[_ngcontent-%COMP%]   .mat-radio-button[_ngcontent-%COMP%]{margin-right:10px}.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary[_ngcontent-%COMP%]{background-color:#3f51b5;color:#fff;min-height:20px;font-size:10px}.move-icons[_ngcontent-%COMP%]{cursor:move}.category-item[_ngcontent-%COMP%]{display:flex;align-items:baseline;width:100%;border:1px solid #dce4e9;border-radius:8px}  mat-checkbox.form-field .mat-checkbox-checkmark-path{stroke:#000!important}  .readonly.mat-form-field-appearance-outline .mat-form-field-outline{color:transparent!important}.field-content[_ngcontent-%COMP%]{width:100%}.cdk-drag-preview[_ngcontent-%COMP%]{box-sizing:border-box;border-radius:4px;box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.cdk-drag-placeholder[_ngcontent-%COMP%]{opacity:0}.cdk-drag-animating[_ngcontent-%COMP%], .example-list.cdk-drop-list-dragging[_ngcontent-%COMP%]   .category-item[_ngcontent-%COMP%]:not(.cdk-drag-placeholder){transition:transform 250ms cubic-bezier(0,0,.2,1)}  .mat-form-field-appearance-fill.mat-form-field-disabled .mat-form-field-flex{background-color:rgba(0,0,0,.02);margin-bottom:-20px}  .mat-select{padding:0}.add-button-container[_ngcontent-%COMP%]{background:no-repeat padding-box #fff;border:1px dashed #dce4e9;border-radius:8px;margin-top:10px;padding:10px;display:flex;justify-content:center;align-items:center;width:98%;margin-left:0;margin-bottom:22px}.add-button-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{display:flex;align-items:center;background-color:transparent;border:none;cursor:pointer;font:17px/26px Nexa Text;letter-spacing:0;color:#c2c8d5;box-shadow:none}.expand-button[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%]{font-size:48px;margin-top:-20px;margin-right:15px}.transparent-button[_ngcontent-%COMP%]{background-color:transparent!important;box-shadow:none!important;width:40px!important;padding:0!important;margin:0!important;min-width:auto!important}.expand-button[_ngcontent-%COMP%]{color:#5a607f!important;background-color:transparent!important;box-shadow:none!important}.checkbox-condition[_ngcontent-%COMP%]{position:relative}.checkbox-condition[_ngcontent-%COMP%]   .condition-container[_ngcontent-%COMP%]{position:absolute;top:30px;width:500px;height:150px;background-color:#fff;border:1px dashed #dce4e9;z-index:1;left:0;border-radius:5px}.checkbox-condition[_ngcontent-%COMP%]   .condition-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{position:absolute;bottom:5px;left:0}.condition-help[_ngcontent-%COMP%]{cursor:pointer}.cdk-overlay-pane[_ngcontent-%COMP%]{width:100%}"] });
    return SubTemplateProfileComponent;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(SubTemplateProfileComponent, [{
        type: Component,
        args: [{
                selector: 'lib-sub-category',
                templateUrl: './sub-template-profile.component.html',
                styleUrls: ['./sub-template-profile.component.scss']
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
        }], onChangeLabel: [{
            type: Output
        }], onCheckedChip: [{
            type: Output
        }], onCheckedDefault: [{
            type: Output
        }], onGetConditionValues: [{
            type: Output
        }], conditionData: [{
            type: Input
        }] }); })();

function TemplateProfileCreateComponent_div_2_div_14_mat_icon_1_Template(rf, ctx) { if (rf & 1) {
    var _r373 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "mat-icon", 19);
    ɵɵlistener("click", function TemplateProfileCreateComponent_div_2_div_14_mat_icon_1_Template_mat_icon_click_0_listener($event) { ɵɵrestoreView(_r373); var icon_r371 = ctx.$implicit; var ctx_r372 = ɵɵnextContext(3); return ctx_r372.onSelectPicto($event, icon_r371.name); });
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    var icon_r371 = ctx.$implicit;
    var ctx_r370 = ɵɵnextContext(3);
    ɵɵstyleProp("color", ctx_r370.form.get("Picto").value === icon_r371.name ? "#830B6B" : "#000");
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", icon_r371.name, " ");
} }
function TemplateProfileCreateComponent_div_2_div_14_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 17);
    ɵɵtemplate(1, TemplateProfileCreateComponent_div_2_div_14_mat_icon_1_Template, 2, 3, "mat-icon", 18);
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r368 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ctx_r368.matIconList);
} }
function TemplateProfileCreateComponent_div_2_mat_option_23_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-option", 20);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    var tag_r374 = ctx.$implicit;
    ɵɵproperty("value", tag_r374);
    ɵɵadvance(1);
    ɵɵtextInterpolate(tag_r374);
} }
function TemplateProfileCreateComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    var _r376 = ɵɵgetCurrentView();
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
    ɵɵlistener("click", function TemplateProfileCreateComponent_div_2_Template_button_click_7_listener($event) { ɵɵrestoreView(_r376); var ctx_r375 = ɵɵnextContext(); return ctx_r375.onShowPictoList($event); });
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
    ɵɵtemplate(14, TemplateProfileCreateComponent_div_2_div_14_Template, 2, 1, "div", 10);
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
    ɵɵtemplate(23, TemplateProfileCreateComponent_div_2_mat_option_23_Template, 2, 2, "mat-option", 13);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(24, "mat-checkbox", 14);
    ɵɵtext(25, "Active");
    ɵɵelementEnd();
    ɵɵelementStart(26, "div", 15);
    ɵɵelementStart(27, "button", 16);
    ɵɵlistener("click", function TemplateProfileCreateComponent_div_2_Template_button_click_27_listener() { ɵɵrestoreView(_r376); var ctx_r377 = ɵɵnextContext(); return ctx_r377.onShowCategory(); });
    ɵɵtext(28);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r366 = ɵɵnextContext();
    ɵɵadvance(9);
    ɵɵtextInterpolate(ctx_r366.form.get("Picto").value === "" ? "contact_phone" : ctx_r366.form.get("Picto").value);
    ɵɵadvance(5);
    ɵɵproperty("ngIf", ctx_r366.isPictoListShow);
    ɵɵadvance(9);
    ɵɵproperty("ngForOf", ctx_r366.tags);
    ɵɵadvance(4);
    ɵɵstyleProp("opacity", ctx_r366.form.get("Name").value === "" || ctx_r366.form.get("Tags").value == "" ? 0.4 : 1);
    ɵɵproperty("disabled", ctx_r366.form.get("Name").value === "" || ctx_r366.form.get("Tags").value == "");
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ctx_r366.id !== "0" ? "Modifier un profil" : "Cr\u00E9er un nouveau profil", " ");
} }
function TemplateProfileCreateComponent_div_3_li_9_span_2_Template(rf, ctx) { if (rf & 1) {
    var _r388 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "span", 37);
    ɵɵlistener("click", function TemplateProfileCreateComponent_div_3_li_9_span_2_Template_span_click_0_listener() { ɵɵrestoreView(_r388); var ctx_r387 = ɵɵnextContext(); var cat_r381 = ctx_r387.$implicit; var i_r382 = ctx_r387.index; var ctx_r386 = ɵɵnextContext(2); return ctx_r386.onExpendMore({ field: cat_r381 }, i_r382); });
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    var cat_r381 = ɵɵnextContext().$implicit;
    ɵɵproperty("ngxScrollTo", "#" + cat_r381.name);
    ɵɵadvance(1);
    ɵɵtextInterpolate(cat_r381.name);
} }
var _c0$1 = function () { return { standalone: true }; };
function TemplateProfileCreateComponent_div_3_li_9_input_3_Template(rf, ctx) { if (rf & 1) {
    var _r392 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "input", 38, 39);
    ɵɵlistener("blur", function TemplateProfileCreateComponent_div_3_li_9_input_3_Template_input_blur_0_listener() { ɵɵrestoreView(_r392); var ctx_r391 = ɵɵnextContext(3); return ctx_r391.onEdit(); })("ngModelChange", function TemplateProfileCreateComponent_div_3_li_9_input_3_Template_input_ngModelChange_0_listener($event) { ɵɵrestoreView(_r392); var cat_r381 = ɵɵnextContext().$implicit; return cat_r381.name = $event; })("ngModelChange", function TemplateProfileCreateComponent_div_3_li_9_input_3_Template_input_ngModelChange_0_listener() { ɵɵrestoreView(_r392); var ctx_r396 = ɵɵnextContext(); var i_r382 = ctx_r396.index; var cat_r381 = ctx_r396.$implicit; var ctx_r395 = ɵɵnextContext(2); return ctx_r395.onEditCategoryName(i_r382, cat_r381.name); });
    ɵɵelementEnd();
} if (rf & 2) {
    var cat_r381 = ɵɵnextContext().$implicit;
    ɵɵproperty("ngModel", cat_r381.name)("ngModelOptions", ɵɵpureFunction0(2, _c0$1));
} }
function TemplateProfileCreateComponent_div_3_li_9_ng_container_7_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    var _r403 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "li", 19);
    ɵɵlistener("click", function TemplateProfileCreateComponent_div_3_li_9_ng_container_7_ng_container_1_Template_li_click_1_listener() { ɵɵrestoreView(_r403); var ctx_r402 = ɵɵnextContext(); var sub_r398 = ctx_r402.$implicit; var j_r399 = ctx_r402.index; var i_r382 = ɵɵnextContext().index; var ctx_r401 = ɵɵnextContext(2); return ctx_r401.onExpendMore({ field: sub_r398 }, i_r382, j_r399); });
    ɵɵelementStart(2, "span", 41);
    ɵɵtext(3);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r405 = ɵɵnextContext();
    var sub_r398 = ctx_r405.$implicit;
    var j_r399 = ctx_r405.index;
    ɵɵadvance(1);
    ɵɵclassMap(sub_r398.expandMore ? "sub-title active" : "sub-title");
    ɵɵadvance(1);
    ɵɵproperty("ngxScrollTo", "#" + sub_r398.key);
    ɵɵadvance(1);
    ɵɵtextInterpolate2("", j_r399 + 1, ". ", sub_r398.label, "");
} }
function TemplateProfileCreateComponent_div_3_li_9_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, TemplateProfileCreateComponent_div_3_li_9_ng_container_7_ng_container_1_Template, 4, 5, "ng-container", 40);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    var sub_r398 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵproperty("ngIf", sub_r398 == null ? null : sub_r398.forms);
} }
function TemplateProfileCreateComponent_div_3_li_9_Template(rf, ctx) { if (rf & 1) {
    var _r407 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "li", 33);
    ɵɵelementStart(1, "span");
    ɵɵtemplate(2, TemplateProfileCreateComponent_div_3_li_9_span_2_Template, 2, 2, "span", 34);
    ɵɵtemplate(3, TemplateProfileCreateComponent_div_3_li_9_input_3_Template, 2, 3, "input", 35);
    ɵɵelementStart(4, "mat-icon", 19);
    ɵɵlistener("click", function TemplateProfileCreateComponent_div_3_li_9_Template_mat_icon_click_4_listener() { ɵɵrestoreView(_r407); var i_r382 = ctx.index; var ctx_r406 = ɵɵnextContext(2); return ctx_r406.onPassInEditMode(i_r382); });
    ɵɵtext(5, "edit");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(6, "ol");
    ɵɵtemplate(7, TemplateProfileCreateComponent_div_3_li_9_ng_container_7_Template, 2, 1, "ng-container", 36);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    var cat_r381 = ctx.$implicit;
    var i_r382 = ctx.index;
    var ctx_r378 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵclassMap(ctx_r378.editIndex === i_r382 ? "edition-mode" : "");
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r378.editIndex !== i_r382);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r378.editIndex === i_r382);
    ɵɵadvance(4);
    ɵɵproperty("ngForOf", cat_r381.forms);
} }
function TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_div_9_div_1_div_2_div_9_div_1_div_2_div_10_Template(rf, ctx) { if (rf & 1) {
    var _r435 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 65);
    ɵɵelementStart(1, "button", 66);
    ɵɵlistener("click", function TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_div_9_div_1_div_2_div_9_div_1_div_2_div_10_Template_button_click_1_listener() { ɵɵrestoreView(_r435); var k_r424 = ɵɵnextContext(4).index; var j_r417 = ɵɵnextContext(3).index; var i_r409 = ɵɵnextContext(3).index; var ctx_r433 = ɵɵnextContext(2); return ctx_r433.onAddNewField(i_r409, j_r417, k_r424); });
    ɵɵelementStart(2, "mat-icon");
    ɵɵtext(3, " add_box ");
    ɵɵelementEnd();
    ɵɵelementStart(4, "span");
    ɵɵtext(5, "Ajouter un champ");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    var l_r431 = ɵɵnextContext().index;
    var child_r423 = ɵɵnextContext(3).$implicit;
    ɵɵadvance(1);
    ɵɵstyleProp("opacity", (child_r423 == null ? null : child_r423.forms == null ? null : child_r423.forms.length) - 1 === l_r431 ? 1 : 0);
    ɵɵproperty("disabled", (child_r423 == null ? null : child_r423.forms == null ? null : child_r423.forms.length) - 1 !== l_r431);
} }
function TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_div_9_div_1_div_2_div_9_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    var _r442 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 53);
    ɵɵelementStart(1, "div", 54);
    ɵɵelementStart(2, "div", 55);
    ɵɵelementStart(3, "div", 64);
    ɵɵelementStart(4, "button", 57);
    ɵɵlistener("click", function TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_div_9_div_1_div_2_div_9_div_1_div_2_Template_button_click_4_listener() { ɵɵrestoreView(_r442); var l_r431 = ctx.index; var k_r424 = ɵɵnextContext(3).index; var j_r417 = ɵɵnextContext(3).index; var i_r409 = ɵɵnextContext(3).index; var ctx_r440 = ɵɵnextContext(2); return ctx_r440.onRemoveField(i_r409, j_r417, k_r424, l_r431); });
    ɵɵelementStart(5, "mat-icon");
    ɵɵtext(6, " delete ");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(7, "div", 58);
    ɵɵelementStart(8, "lib-sub-category", 59);
    ɵɵlistener("onAddKeywordFromInput", function TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_div_9_div_1_div_2_div_9_div_1_div_2_Template_lib_sub_category_onAddKeywordFromInput_8_listener($event) { ɵɵrestoreView(_r442); var l_r431 = ctx.index; var k_r424 = ɵɵnextContext(3).index; var j_r417 = ɵɵnextContext(3).index; var i_r409 = ɵɵnextContext(3).index; var ctx_r445 = ɵɵnextContext(2); return ctx_r445.addKeywordFromInput($event.event, $event.prev, i_r409, j_r417, k_r424, l_r431); })("onKeyPress", function TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_div_9_div_1_div_2_div_9_div_1_div_2_Template_lib_sub_category_onKeyPress_8_listener($event) { ɵɵrestoreView(_r442); var l_r431 = ctx.index; var k_r424 = ɵɵnextContext(3).index; var j_r417 = ɵɵnextContext(3).index; var i_r409 = ɵɵnextContext(3).index; var ctx_r449 = ɵɵnextContext(2); return ctx_r449.onKeyPress($event.event, i_r409, j_r417, k_r424, l_r431); })("onAddNewField", function TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_div_9_div_1_div_2_div_9_div_1_div_2_Template_lib_sub_category_onAddNewField_8_listener() { ɵɵrestoreView(_r442); var k_r424 = ɵɵnextContext(3).index; var j_r417 = ɵɵnextContext(3).index; var i_r409 = ɵɵnextContext(3).index; var ctx_r453 = ɵɵnextContext(2); return ctx_r453.onAddNewField(i_r409, j_r417, k_r424); })("onRemoveField", function TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_div_9_div_1_div_2_div_9_div_1_div_2_Template_lib_sub_category_onRemoveField_8_listener() { ɵɵrestoreView(_r442); var l_r431 = ctx.index; var k_r424 = ɵɵnextContext(3).index; var j_r417 = ɵɵnextContext(3).index; var i_r409 = ɵɵnextContext(3).index; var ctx_r457 = ɵɵnextContext(2); return ctx_r457.onRemoveField(i_r409, j_r417, k_r424, l_r431); })("onChangeType", function TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_div_9_div_1_div_2_div_9_div_1_div_2_Template_lib_sub_category_onChangeType_8_listener() { ɵɵrestoreView(_r442); var c2_r430 = ctx.$implicit; var l_r431 = ctx.index; var k_r424 = ɵɵnextContext(3).index; var j_r417 = ɵɵnextContext(3).index; var i_r409 = ɵɵnextContext(3).index; var ctx_r461 = ɵɵnextContext(2); return ctx_r461.onChangeType(c2_r430.type, i_r409, j_r417, k_r424, l_r431); })("onRemoveKeyword", function TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_div_9_div_1_div_2_div_9_div_1_div_2_Template_lib_sub_category_onRemoveKeyword_8_listener($event) { ɵɵrestoreView(_r442); var l_r431 = ctx.index; var k_r424 = ɵɵnextContext(3).index; var j_r417 = ɵɵnextContext(3).index; var i_r409 = ɵɵnextContext(3).index; var ctx_r465 = ɵɵnextContext(2); return ctx_r465.removeKeyword($event.event, i_r409, j_r417, k_r424, l_r431); })("onAddNewSubLevelField", function TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_div_9_div_1_div_2_div_9_div_1_div_2_Template_lib_sub_category_onAddNewSubLevelField_8_listener() { ɵɵrestoreView(_r442); var l_r431 = ctx.index; var k_r424 = ɵɵnextContext(3).index; var j_r417 = ɵɵnextContext(3).index; var i_r409 = ɵɵnextContext(3).index; var ctx_r469 = ɵɵnextContext(2); return ctx_r469.onAddNewSubLevelField(i_r409, j_r417, k_r424, l_r431); })("onExpendMore", function TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_div_9_div_1_div_2_div_9_div_1_div_2_Template_lib_sub_category_onExpendMore_8_listener($event) { ɵɵrestoreView(_r442); var l_r431 = ctx.index; var k_r424 = ɵɵnextContext(3).index; var j_r417 = ɵɵnextContext(3).index; var i_r409 = ɵɵnextContext(3).index; var ctx_r473 = ɵɵnextContext(2); return ctx_r473.onExpendMore($event, i_r409, j_r417, k_r424, l_r431); })("onChangeLabel", function TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_div_9_div_1_div_2_div_9_div_1_div_2_Template_lib_sub_category_onChangeLabel_8_listener($event) { ɵɵrestoreView(_r442); var l_r431 = ctx.index; var k_r424 = ɵɵnextContext(3).index; var j_r417 = ɵɵnextContext(3).index; var i_r409 = ɵɵnextContext(3).index; var ctx_r477 = ɵɵnextContext(2); return ctx_r477.onChangeLabel($event, i_r409, j_r417, k_r424, l_r431); })("onCheckedChip", function TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_div_9_div_1_div_2_div_9_div_1_div_2_Template_lib_sub_category_onCheckedChip_8_listener($event) { ɵɵrestoreView(_r442); var l_r431 = ctx.index; var k_r424 = ɵɵnextContext(3).index; var j_r417 = ɵɵnextContext(3).index; var i_r409 = ɵɵnextContext(3).index; var ctx_r481 = ɵɵnextContext(2); return ctx_r481.onCheckedChip($event, i_r409, j_r417, k_r424, l_r431); })("onDrop", function TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_div_9_div_1_div_2_div_9_div_1_div_2_Template_lib_sub_category_onDrop_8_listener($event) { ɵɵrestoreView(_r442); var ctx_r485 = ɵɵnextContext(11); return ctx_r485.drop($event); })("onCheckedDefault", function TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_div_9_div_1_div_2_div_9_div_1_div_2_Template_lib_sub_category_onCheckedDefault_8_listener($event) { ɵɵrestoreView(_r442); var l_r431 = ctx.index; var k_r424 = ɵɵnextContext(3).index; var j_r417 = ɵɵnextContext(3).index; var i_r409 = ɵɵnextContext(3).index; var ctx_r486 = ɵɵnextContext(2); return ctx_r486.onCheckedDefault($event, i_r409, j_r417, k_r424, l_r431); })("onGetConditionValues", function TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_div_9_div_1_div_2_div_9_div_1_div_2_Template_lib_sub_category_onGetConditionValues_8_listener() { ɵɵrestoreView(_r442); var ctx_r490 = ɵɵnextContext(11); return ctx_r490.getConditionValues(); });
    ɵɵelement(9, "div", 62);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵtemplate(10, TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_div_9_div_1_div_2_div_9_div_1_div_2_div_10_Template, 6, 3, "div", 61);
    ɵɵelementEnd();
} if (rf & 2) {
    var c2_r430 = ctx.$implicit;
    var l_r431 = ctx.index;
    var ctx_r492 = ɵɵnextContext(3);
    var child_r423 = ctx_r492.$implicit;
    var k_r424 = ctx_r492.index;
    var field_r416 = ɵɵnextContext(3).$implicit;
    var ctx_r429 = ɵɵnextContext(5);
    ɵɵproperty("id", c2_r430.key);
    ɵɵadvance(4);
    ɵɵproperty("disabled", !field_r416.deleteable);
    ɵɵadvance(4);
    ɵɵproperty("field", c2_r430)("length", child_r423 == null ? null : child_r423.forms == null ? null : child_r423.forms.length)("i", k_r424)("j", l_r431)("conditionData", ctx_r429.conditionData);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", (child_r423 == null ? null : child_r423.forms == null ? null : child_r423.forms.length) - 1 === l_r431);
} }
function TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_div_9_div_1_div_2_div_9_div_1_Template(rf, ctx) { if (rf & 1) {
    var _r494 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 50, 51);
    ɵɵlistener("cdkDropListDropped", function TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_div_9_div_1_div_2_div_9_div_1_Template_div_cdkDropListDropped_0_listener($event) { ɵɵrestoreView(_r494); var ctx_r493 = ɵɵnextContext(10); return ctx_r493.drop($event); });
    ɵɵtemplate(2, TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_div_9_div_1_div_2_div_9_div_1_div_2_Template, 11, 8, "div", 52);
    ɵɵelementEnd();
} if (rf & 2) {
    var child_r423 = ɵɵnextContext(2).$implicit;
    ɵɵproperty("cdkDropListData", child_r423.forms);
    ɵɵadvance(2);
    ɵɵproperty("ngForOf", child_r423.forms);
} }
function TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_div_9_div_1_div_2_div_9_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 62);
    ɵɵtemplate(1, TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_div_9_div_1_div_2_div_9_div_1_Template, 3, 2, "div", 48);
    ɵɵelementEnd();
} if (rf & 2) {
    var child_r423 = ɵɵnextContext().$implicit;
    ɵɵadvance(1);
    ɵɵproperty("ngIf", child_r423.forms);
} }
function TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_div_9_div_1_div_2_div_10_Template(rf, ctx) { if (rf & 1) {
    var _r499 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 65);
    ɵɵelementStart(1, "button", 66);
    ɵɵlistener("click", function TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_div_9_div_1_div_2_div_10_Template_button_click_1_listener() { ɵɵrestoreView(_r499); var j_r417 = ɵɵnextContext(4).index; var i_r409 = ɵɵnextContext(3).index; var ctx_r497 = ɵɵnextContext(2); return ctx_r497.onAddNewField(i_r409, j_r417); });
    ɵɵelementStart(2, "mat-icon");
    ɵɵtext(3, "add_box");
    ɵɵelementEnd();
    ɵɵelementStart(4, "span");
    ɵɵtext(5, "Ajouter un champ");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    var k_r424 = ɵɵnextContext().index;
    var field_r416 = ɵɵnextContext(3).$implicit;
    ɵɵadvance(1);
    ɵɵstyleProp("opacity", (field_r416 == null ? null : field_r416.forms == null ? null : field_r416.forms.length) - 1 === k_r424 ? 1 : 0);
    ɵɵproperty("disabled", (field_r416 == null ? null : field_r416.forms == null ? null : field_r416.forms.length) - 1 !== k_r424);
} }
function TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_div_9_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    var _r505 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 53);
    ɵɵelementStart(1, "div", 54);
    ɵɵelementStart(2, "div", 55);
    ɵɵelementStart(3, "div", 63);
    ɵɵelementStart(4, "button", 57);
    ɵɵlistener("click", function TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_div_9_div_1_div_2_Template_button_click_4_listener() { ɵɵrestoreView(_r505); var k_r424 = ctx.index; var j_r417 = ɵɵnextContext(3).index; var i_r409 = ɵɵnextContext(3).index; var ctx_r503 = ɵɵnextContext(2); return ctx_r503.onRemoveField(i_r409, j_r417, k_r424); });
    ɵɵelementStart(5, "mat-icon");
    ɵɵtext(6, " delete");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(7, "div", 58);
    ɵɵelementStart(8, "lib-sub-category", 59);
    ɵɵlistener("onAddKeywordFromInput", function TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_div_9_div_1_div_2_Template_lib_sub_category_onAddKeywordFromInput_8_listener($event) { ɵɵrestoreView(_r505); var k_r424 = ctx.index; var j_r417 = ɵɵnextContext(3).index; var i_r409 = ɵɵnextContext(3).index; var ctx_r507 = ɵɵnextContext(2); return ctx_r507.addKeywordFromInput($event.event, $event.prev, i_r409, j_r417, k_r424); })("onKeyPress", function TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_div_9_div_1_div_2_Template_lib_sub_category_onKeyPress_8_listener($event) { ɵɵrestoreView(_r505); var k_r424 = ctx.index; var j_r417 = ɵɵnextContext(3).index; var i_r409 = ɵɵnextContext(3).index; var ctx_r510 = ɵɵnextContext(2); return ctx_r510.onKeyPress($event.event, i_r409, j_r417, k_r424); })("onAddNewField", function TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_div_9_div_1_div_2_Template_lib_sub_category_onAddNewField_8_listener() { ɵɵrestoreView(_r505); var j_r417 = ɵɵnextContext(3).index; var i_r409 = ɵɵnextContext(3).index; var ctx_r513 = ɵɵnextContext(2); return ctx_r513.onAddNewField(i_r409, j_r417); })("onRemoveField", function TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_div_9_div_1_div_2_Template_lib_sub_category_onRemoveField_8_listener() { ɵɵrestoreView(_r505); var k_r424 = ctx.index; var j_r417 = ɵɵnextContext(3).index; var i_r409 = ɵɵnextContext(3).index; var ctx_r516 = ɵɵnextContext(2); return ctx_r516.onRemoveField(i_r409, j_r417, k_r424); })("onChangeType", function TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_div_9_div_1_div_2_Template_lib_sub_category_onChangeType_8_listener() { ɵɵrestoreView(_r505); var child_r423 = ctx.$implicit; var k_r424 = ctx.index; var j_r417 = ɵɵnextContext(3).index; var i_r409 = ɵɵnextContext(3).index; var ctx_r519 = ɵɵnextContext(2); return ctx_r519.onChangeType(child_r423.type, i_r409, j_r417, k_r424); })("onRemoveKeyword", function TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_div_9_div_1_div_2_Template_lib_sub_category_onRemoveKeyword_8_listener($event) { ɵɵrestoreView(_r505); var k_r424 = ctx.index; var j_r417 = ɵɵnextContext(3).index; var i_r409 = ɵɵnextContext(3).index; var ctx_r522 = ɵɵnextContext(2); return ctx_r522.removeKeyword($event.event, i_r409, j_r417, k_r424); })("onAddNewSubLevelField", function TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_div_9_div_1_div_2_Template_lib_sub_category_onAddNewSubLevelField_8_listener() { ɵɵrestoreView(_r505); var k_r424 = ctx.index; var j_r417 = ɵɵnextContext(3).index; var i_r409 = ɵɵnextContext(3).index; var ctx_r525 = ɵɵnextContext(2); return ctx_r525.onAddNewSubLevelField(i_r409, j_r417, k_r424); })("onExpendMore", function TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_div_9_div_1_div_2_Template_lib_sub_category_onExpendMore_8_listener($event) { ɵɵrestoreView(_r505); var k_r424 = ctx.index; var j_r417 = ɵɵnextContext(3).index; var i_r409 = ɵɵnextContext(3).index; var ctx_r528 = ɵɵnextContext(2); return ctx_r528.onExpendMore($event, i_r409, j_r417, k_r424); })("onChangeLabel", function TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_div_9_div_1_div_2_Template_lib_sub_category_onChangeLabel_8_listener($event) { ɵɵrestoreView(_r505); var k_r424 = ctx.index; var j_r417 = ɵɵnextContext(3).index; var i_r409 = ɵɵnextContext(3).index; var ctx_r531 = ɵɵnextContext(2); return ctx_r531.onChangeLabel($event, i_r409, j_r417, k_r424); })("onCheckedChip", function TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_div_9_div_1_div_2_Template_lib_sub_category_onCheckedChip_8_listener($event) { ɵɵrestoreView(_r505); var k_r424 = ctx.index; var j_r417 = ɵɵnextContext(3).index; var i_r409 = ɵɵnextContext(3).index; var ctx_r534 = ɵɵnextContext(2); return ctx_r534.onCheckedChip($event, i_r409, j_r417, k_r424); })("onDrop", function TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_div_9_div_1_div_2_Template_lib_sub_category_onDrop_8_listener($event) { ɵɵrestoreView(_r505); var ctx_r537 = ɵɵnextContext(8); return ctx_r537.drop($event); })("onCheckedDefault", function TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_div_9_div_1_div_2_Template_lib_sub_category_onCheckedDefault_8_listener($event) { ɵɵrestoreView(_r505); var k_r424 = ctx.index; var j_r417 = ɵɵnextContext(3).index; var i_r409 = ɵɵnextContext(3).index; var ctx_r538 = ɵɵnextContext(2); return ctx_r538.onCheckedDefault($event, i_r409, j_r417, k_r424); })("onGetConditionValues", function TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_div_9_div_1_div_2_Template_lib_sub_category_onGetConditionValues_8_listener() { ɵɵrestoreView(_r505); var ctx_r541 = ɵɵnextContext(8); return ctx_r541.getConditionValues(); });
    ɵɵtemplate(9, TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_div_9_div_1_div_2_div_9_Template, 2, 1, "div", 60);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵtemplate(10, TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_div_9_div_1_div_2_div_10_Template, 6, 3, "div", 61);
    ɵɵelementEnd();
} if (rf & 2) {
    var child_r423 = ctx.$implicit;
    var k_r424 = ctx.index;
    var ctx_r542 = ɵɵnextContext(3);
    var field_r416 = ctx_r542.$implicit;
    var j_r417 = ctx_r542.index;
    var ctx_r422 = ɵɵnextContext(5);
    ɵɵproperty("id", child_r423.key);
    ɵɵadvance(4);
    ɵɵproperty("disabled", !child_r423.deleteable);
    ɵɵadvance(1);
    ɵɵstyleProp("opacity", !child_r423.deleteable ? 0 : 1);
    ɵɵadvance(3);
    ɵɵproperty("field", child_r423)("length", field_r416 == null ? null : field_r416.forms == null ? null : field_r416.forms.length)("i", j_r417)("j", k_r424)("conditionData", ctx_r422.conditionData);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", child_r423.expandMore);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", (field_r416 == null ? null : field_r416.forms == null ? null : field_r416.forms.length) - 1 === k_r424);
} }
function TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_div_9_div_1_Template(rf, ctx) { if (rf & 1) {
    var _r544 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 50, 51);
    ɵɵlistener("cdkDropListDropped", function TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_div_9_div_1_Template_div_cdkDropListDropped_0_listener($event) { ɵɵrestoreView(_r544); var ctx_r543 = ɵɵnextContext(7); return ctx_r543.drop($event); });
    ɵɵtemplate(2, TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_div_9_div_1_div_2_Template, 11, 11, "div", 52);
    ɵɵelementEnd();
} if (rf & 2) {
    var field_r416 = ɵɵnextContext(2).$implicit;
    ɵɵproperty("cdkDropListData", field_r416.forms);
    ɵɵadvance(2);
    ɵɵproperty("ngForOf", field_r416.forms);
} }
function TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_div_9_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 62);
    ɵɵtemplate(1, TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_div_9_div_1_Template, 3, 2, "div", 48);
    ɵɵelementEnd();
} if (rf & 2) {
    var field_r416 = ɵɵnextContext().$implicit;
    ɵɵadvance(1);
    ɵɵproperty("ngIf", field_r416.forms);
} }
function TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_div_10_Template(rf, ctx) { if (rf & 1) {
    var _r549 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 65);
    ɵɵelementStart(1, "button", 66);
    ɵɵlistener("click", function TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_div_10_Template_button_click_1_listener() { ɵɵrestoreView(_r549); var i_r409 = ɵɵnextContext(4).index; var ctx_r547 = ɵɵnextContext(2); return ctx_r547.onAddNewField(i_r409); });
    ɵɵelementStart(2, "mat-icon");
    ɵɵtext(3, "add_box");
    ɵɵelementEnd();
    ɵɵelementStart(4, "span");
    ɵɵtext(5, "Ajouter un champ");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    var j_r417 = ɵɵnextContext().index;
    var category_r408 = ɵɵnextContext(3).$implicit;
    ɵɵadvance(1);
    ɵɵstyleProp("opacity", (category_r408 == null ? null : category_r408.forms == null ? null : category_r408.forms.length) - 1 === j_r417 ? 1 : 0);
    ɵɵproperty("disabled", (category_r408 == null ? null : category_r408.forms == null ? null : category_r408.forms.length) - 1 !== j_r417);
} }
function TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_Template(rf, ctx) { if (rf & 1) {
    var _r554 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 53);
    ɵɵelementStart(1, "div", 54);
    ɵɵelementStart(2, "div", 55);
    ɵɵelementStart(3, "div", 56);
    ɵɵelementStart(4, "button", 57);
    ɵɵlistener("click", function TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_Template_button_click_4_listener() { ɵɵrestoreView(_r554); var j_r417 = ctx.index; var i_r409 = ɵɵnextContext(3).index; var ctx_r552 = ɵɵnextContext(2); return ctx_r552.onRemoveField(i_r409, j_r417); });
    ɵɵelementStart(5, "mat-icon");
    ɵɵtext(6, "delete ");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(7, "div", 58);
    ɵɵelementStart(8, "lib-sub-category", 59);
    ɵɵlistener("onAddKeywordFromInput", function TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_Template_lib_sub_category_onAddKeywordFromInput_8_listener($event) { ɵɵrestoreView(_r554); var j_r417 = ctx.index; var i_r409 = ɵɵnextContext(3).index; var ctx_r555 = ɵɵnextContext(2); return ctx_r555.addKeywordFromInput($event.event, $event.prev, i_r409, j_r417); })("onKeyPress", function TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_Template_lib_sub_category_onKeyPress_8_listener($event) { ɵɵrestoreView(_r554); var j_r417 = ctx.index; var i_r409 = ɵɵnextContext(3).index; var ctx_r557 = ɵɵnextContext(2); return ctx_r557.onKeyPress($event.event, i_r409, j_r417); })("onAddNewField", function TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_Template_lib_sub_category_onAddNewField_8_listener() { ɵɵrestoreView(_r554); var i_r409 = ɵɵnextContext(3).index; var ctx_r559 = ɵɵnextContext(2); return ctx_r559.onAddNewField(i_r409); })("onRemoveField", function TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_Template_lib_sub_category_onRemoveField_8_listener() { ɵɵrestoreView(_r554); var j_r417 = ctx.index; var i_r409 = ɵɵnextContext(3).index; var ctx_r561 = ɵɵnextContext(2); return ctx_r561.onRemoveField(i_r409, j_r417); })("onChangeType", function TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_Template_lib_sub_category_onChangeType_8_listener() { ɵɵrestoreView(_r554); var field_r416 = ctx.$implicit; var j_r417 = ctx.index; var i_r409 = ɵɵnextContext(3).index; var ctx_r563 = ɵɵnextContext(2); return ctx_r563.onChangeType(field_r416.type, i_r409, j_r417); })("onRemoveKeyword", function TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_Template_lib_sub_category_onRemoveKeyword_8_listener($event) { ɵɵrestoreView(_r554); var j_r417 = ctx.index; var i_r409 = ɵɵnextContext(3).index; var ctx_r565 = ɵɵnextContext(2); return ctx_r565.removeKeyword($event.event, i_r409, j_r417); })("onAddNewSubLevelField", function TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_Template_lib_sub_category_onAddNewSubLevelField_8_listener() { ɵɵrestoreView(_r554); var j_r417 = ctx.index; var i_r409 = ɵɵnextContext(3).index; var ctx_r567 = ɵɵnextContext(2); return ctx_r567.onAddNewSubLevelField(i_r409, j_r417); })("onExpendMore", function TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_Template_lib_sub_category_onExpendMore_8_listener($event) { ɵɵrestoreView(_r554); var j_r417 = ctx.index; var i_r409 = ɵɵnextContext(3).index; var ctx_r569 = ɵɵnextContext(2); return ctx_r569.onExpendMore($event, i_r409, j_r417); })("onChangeLabel", function TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_Template_lib_sub_category_onChangeLabel_8_listener($event) { ɵɵrestoreView(_r554); var j_r417 = ctx.index; var i_r409 = ɵɵnextContext(3).index; var ctx_r571 = ɵɵnextContext(2); return ctx_r571.onChangeLabel($event, i_r409, j_r417); })("onCheckedChip", function TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_Template_lib_sub_category_onCheckedChip_8_listener($event) { ɵɵrestoreView(_r554); var j_r417 = ctx.index; var i_r409 = ɵɵnextContext(3).index; var ctx_r573 = ɵɵnextContext(2); return ctx_r573.onCheckedChip($event, i_r409, j_r417); })("onDrop", function TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_Template_lib_sub_category_onDrop_8_listener($event) { ɵɵrestoreView(_r554); var ctx_r575 = ɵɵnextContext(5); return ctx_r575.drop($event); })("onCheckedDefault", function TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_Template_lib_sub_category_onCheckedDefault_8_listener($event) { ɵɵrestoreView(_r554); var j_r417 = ctx.index; var i_r409 = ɵɵnextContext(3).index; var ctx_r576 = ɵɵnextContext(2); return ctx_r576.onCheckedDefault($event, i_r409, j_r417); })("onGetConditionValues", function TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_Template_lib_sub_category_onGetConditionValues_8_listener() { ɵɵrestoreView(_r554); var ctx_r578 = ɵɵnextContext(5); return ctx_r578.getConditionValues(); });
    ɵɵtemplate(9, TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_div_9_Template, 2, 1, "div", 60);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵtemplate(10, TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_div_10_Template, 6, 3, "div", 61);
    ɵɵelementEnd();
} if (rf & 2) {
    var field_r416 = ctx.$implicit;
    var j_r417 = ctx.index;
    var ctx_r579 = ɵɵnextContext(3);
    var category_r408 = ctx_r579.$implicit;
    var i_r409 = ctx_r579.index;
    var ctx_r415 = ɵɵnextContext(2);
    ɵɵproperty("id", field_r416.key);
    ɵɵadvance(4);
    ɵɵproperty("disabled", !field_r416.deleteable);
    ɵɵadvance(1);
    ɵɵstyleProp("opacity", !field_r416.deleteable ? 0 : 1);
    ɵɵadvance(2);
    ɵɵclassMap(!field_r416.deleteable ? "disabled" : "");
    ɵɵadvance(1);
    ɵɵproperty("field", field_r416)("length", category_r408 == null ? null : category_r408.forms == null ? null : category_r408.forms.length)("i", i_r409)("j", j_r417)("conditionData", ctx_r415.conditionData);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", field_r416.expandMore);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", (category_r408 == null ? null : category_r408.forms == null ? null : category_r408.forms.length) - 1 === j_r417);
} }
function TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_Template, 11, 13, "div", 52);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    var category_r408 = ɵɵnextContext(2).$implicit;
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", category_r408.forms);
} }
function TemplateProfileCreateComponent_div_3_div_19_div_8_Template(rf, ctx) { if (rf & 1) {
    var _r582 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 50, 51);
    ɵɵlistener("cdkDropListDropped", function TemplateProfileCreateComponent_div_3_div_19_div_8_Template_div_cdkDropListDropped_0_listener($event) { ɵɵrestoreView(_r582); var ctx_r581 = ɵɵnextContext(3); return ctx_r581.drop($event); });
    ɵɵtemplate(2, TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_Template, 2, 1, "ng-container", 40);
    ɵɵelementEnd();
} if (rf & 2) {
    var category_r408 = ɵɵnextContext().$implicit;
    ɵɵproperty("cdkDropListData", category_r408.forms);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", category_r408.expandMore);
} }
function TemplateProfileCreateComponent_div_3_div_19_mat_icon_10_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-icon");
    ɵɵtext(1, "chevron_right");
    ɵɵelementEnd();
} }
function TemplateProfileCreateComponent_div_3_div_19_mat_icon_11_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-icon");
    ɵɵtext(1, "expand_more");
    ɵɵelementEnd();
} }
function TemplateProfileCreateComponent_div_3_div_19_Template(rf, ctx) { if (rf & 1) {
    var _r585 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 42);
    ɵɵelementStart(1, "div", 43);
    ɵɵelementStart(2, "button", 44);
    ɵɵlistener("click", function TemplateProfileCreateComponent_div_3_div_19_Template_button_click_2_listener($event) { ɵɵrestoreView(_r585); var i_r409 = ctx.index; var ctx_r584 = ɵɵnextContext(2); return ctx_r584.onRemoveCategory($event, i_r409); });
    ɵɵelementStart(3, "mat-icon");
    ɵɵtext(4, "delete");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(5, "div", 45);
    ɵɵelementStart(6, "div", 46);
    ɵɵelementStart(7, "input", 47);
    ɵɵlistener("ngModelChange", function TemplateProfileCreateComponent_div_3_div_19_Template_input_ngModelChange_7_listener($event) { ɵɵrestoreView(_r585); var category_r408 = ctx.$implicit; return category_r408.name = $event; });
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵtemplate(8, TemplateProfileCreateComponent_div_3_div_19_div_8_Template, 3, 2, "div", 48);
    ɵɵelementEnd();
    ɵɵelementStart(9, "button", 49);
    ɵɵlistener("click", function TemplateProfileCreateComponent_div_3_div_19_Template_button_click_9_listener($event) { ɵɵrestoreView(_r585); var category_r408 = ctx.$implicit; var i_r409 = ctx.index; var ctx_r587 = ɵɵnextContext(2); return ctx_r587.onExpendMore({ event: $event, field: category_r408 }, i_r409); });
    ɵɵtemplate(10, TemplateProfileCreateComponent_div_3_div_19_mat_icon_10_Template, 2, 0, "mat-icon", 40);
    ɵɵtemplate(11, TemplateProfileCreateComponent_div_3_div_19_mat_icon_11_Template, 2, 0, "mat-icon", 40);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    var category_r408 = ctx.$implicit;
    var ctx_r380 = ɵɵnextContext(2);
    ɵɵproperty("id", category_r408.name);
    ɵɵadvance(2);
    ɵɵproperty("disabled", !category_r408.deleteable);
    ɵɵadvance(1);
    ɵɵstyleProp("opacity", !category_r408.deleteable ? 0 : 1);
    ɵɵadvance(4);
    ɵɵproperty("readonly", ctx_r380.categories.length < 4 || !category_r408.editable)("readonly", !category_r408.editable)("ngModel", category_r408.name)("ngModelOptions", ɵɵpureFunction0(11, _c0$1));
    ɵɵadvance(1);
    ɵɵproperty("ngIf", category_r408.forms);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", !category_r408.expandMore);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", category_r408.expandMore);
} }
function TemplateProfileCreateComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    var _r589 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 21);
    ɵɵelementStart(1, "div", 22);
    ɵɵelementStart(2, "div", 23);
    ɵɵelementStart(3, "h3");
    ɵɵelementStart(4, "span");
    ɵɵtext(5);
    ɵɵelementEnd();
    ɵɵelementStart(6, "mat-icon", 19);
    ɵɵlistener("click", function TemplateProfileCreateComponent_div_3_Template_mat_icon_click_6_listener() { ɵɵrestoreView(_r589); var ctx_r588 = ɵɵnextContext(); return ctx_r588.openDialog(); });
    ɵɵtext(7, "edit");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(8, "ol", 24);
    ɵɵtemplate(9, TemplateProfileCreateComponent_div_3_li_9_Template, 8, 5, "li", 25);
    ɵɵelementEnd();
    ɵɵelementStart(10, "button", 26);
    ɵɵlistener("click", function TemplateProfileCreateComponent_div_3_Template_button_click_10_listener($event) { ɵɵrestoreView(_r589); var ctx_r590 = ɵɵnextContext(); return ctx_r590.onAddNewCategory($event); });
    ɵɵelementStart(11, "mat-icon");
    ɵɵtext(12, "add_box");
    ɵɵelementEnd();
    ɵɵtext(13, " Ajouter une nouvelle cat\u00E9gorie ");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(14, "button", 27);
    ɵɵtext(15, " Enregistrer le profil ");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(16, "div", 28);
    ɵɵelementStart(17, "div", 29, 30);
    ɵɵlistener("cdkDropListDropped", function TemplateProfileCreateComponent_div_3_Template_div_cdkDropListDropped_17_listener($event) { ɵɵrestoreView(_r589); var ctx_r591 = ɵɵnextContext(); return ctx_r591.drop($event); });
    ɵɵtemplate(19, TemplateProfileCreateComponent_div_3_div_19_Template, 12, 12, "div", 31);
    ɵɵelementStart(20, "div", 32);
    ɵɵelementStart(21, "button", 19);
    ɵɵlistener("click", function TemplateProfileCreateComponent_div_3_Template_button_click_21_listener($event) { ɵɵrestoreView(_r589); var ctx_r592 = ɵɵnextContext(); return ctx_r592.onAddNewCategory($event); });
    ɵɵelementStart(22, "mat-icon");
    ɵɵtext(23, "add");
    ɵɵelementEnd();
    ɵɵtext(24, " Ajouter une cat\u00E9gorie ");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r367 = ɵɵnextContext();
    ɵɵadvance(5);
    ɵɵtextInterpolate(ctx_r367.form.get("Name").value);
    ɵɵadvance(4);
    ɵɵproperty("ngForOf", ctx_r367.categories);
    ɵɵadvance(8);
    ɵɵproperty("cdkDropListData", ctx_r367.categories);
    ɵɵadvance(2);
    ɵɵproperty("ngForOf", ctx_r367.categories);
} }
var TemplateProfileCreateComponent = /** @class */ (function () {
    function TemplateProfileCreateComponent(fb, service, route, router, dialog) {
        this.fb = fb;
        this.service = service;
        this.route = route;
        this.router = router;
        this.dialog = dialog;
        this.validCategory = false;
        this.separatorKeysCodes = [ENTER, COMMA, SEMICOLON];
        this.currentProfil = {};
        this.canExit = true;
        this.tags = [];
        this.id = "0";
        this.parent = [];
        this.editIndex = null;
        this.showProfileName = false;
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
        this.categories = [];
        this.defaultCategorie = [
            {
                name: "Utilisateur",
                editable: false,
                deleteable: false,
                expandMore: false,
                expandOnboarding: true,
                defaultValue: false,
                suffixEndpoint: "category/user",
                forms: [
                    {
                        label: "Civilité",
                        key: "Salutation",
                        expandOnboarding: true,
                        defaultValue: [{ value: "M.", checked: false }, { value: "Mme", checked: false }],
                        value: null,
                        size: 10,
                        isMandatory: true,
                        otherValue: '',
                        type: "select",
                        editable: false,
                        deleteable: false,
                        subLevel: 1,
                        expandMore: false,
                    },
                    {
                        label: "Type de profil",
                        key: "Type_de_profil_Nowboard__c",
                        expandOnboarding: true,
                        defaultValue: [{ value: "Manager", checked: false }, { value: "Utilisateur", checked: false }],
                        value: null,
                        size: 10,
                        isMandatory: true,
                        otherValue: '',
                        type: "select",
                        editable: false,
                        deleteable: false,
                        subLevel: 1,
                        expandMore: false,
                    },
                    {
                        label: "Nom",
                        key: "LastName",
                        expandOnboarding: true,
                        defaultValue: null,
                        value: null,
                        size: 80,
                        isMandatory: true,
                        otherValue: '',
                        type: "text",
                        editable: false,
                        deleteable: false,
                        subLevel: 1,
                        expandMore: false,
                    },
                    {
                        label: "Prénom",
                        key: "FirstName",
                        expandOnboarding: true,
                        defaultValue: null,
                        value: null,
                        size: 80,
                        isMandatory: true,
                        otherValue: '',
                        type: "text",
                        editable: false,
                        deleteable: false,
                        subLevel: 1,
                        expandMore: false,
                    },
                    {
                        label: "Email",
                        key: "Email",
                        expandOnboarding: true,
                        defaultValue: null,
                        value: null,
                        size: 80,
                        isMandatory: true,
                        otherValue: '',
                        type: "email",
                        editable: false,
                        deleteable: false,
                        subLevel: 1,
                        expandMore: false,
                    },
                    {
                        label: "Téléphone fixe",
                        key: "Phone",
                        expandOnboarding: true,
                        defaultValue: null,
                        value: null,
                        size: 20,
                        isMandatory: false,
                        otherValue: '',
                        type: "tel",
                        editable: false,
                        deleteable: false,
                        subLevel: 1,
                        expandMore: false,
                    },
                    {
                        label: "Téléphone portable",
                        key: "MobilePhone",
                        expandOnboarding: true,
                        defaultValue: null,
                        value: null,
                        size: 20,
                        isMandatory: false,
                        otherValue: '',
                        type: "tel",
                        editable: false,
                        deleteable: false,
                        subLevel: 1,
                        expandMore: false,
                    },
                    {
                        label: "Fonction",
                        key: "Title",
                        expandOnboarding: true,
                        defaultValue: null,
                        value: null,
                        size: 80,
                        isMandatory: true,
                        otherValue: '',
                        type: "text",
                        editable: false,
                        deleteable: false,
                        subLevel: 1,
                        expandMore: false,
                    },
                    {
                        label: "Etablissement / Site",
                        key: "AccountName",
                        expandOnboarding: true,
                        defaultValue: null,
                        value: null,
                        size: 80,
                        isMandatory: true,
                        otherValue: '',
                        type: "text",
                        editable: false,
                        deleteable: false,
                        subLevel: 1,
                        expandMore: false,
                    },
                    // {
                    //   label: "ID",
                    //   key: "Id",
                    //   expandOnboarding:true,
                    //   defaultValue: null,
                    //   value: null,
                    //   size: 80,
                    //   isMandatory: true,
                    //   otherValue:'',
                    //   type: "text",
                    //   editable: false,
                    //   deleteable: false,
                    //   subLevel: 1,
                    //   expandMore: false,
                    // }, {
                    //   label: "Etablissement ID",
                    //   key: "AccountId",
                    //   expandOnboarding:true,
                    //   defaultValue: null,
                    //   value: null,
                    //   size: 80,
                    //   isMandatory: true,
                    //   otherValue:'',
                    //   type: "text",
                    //   editable: false,
                    //   deleteable: false,
                    //   subLevel: 1,
                    //   expandMore: false,
                    // },
                    {
                        label: "Accès au portail",
                        key: "Acc_s_au_portail_client_NowBoard__c",
                        expandOnboarding: true,
                        defaultValue: [{ value: "Oui", checked: false }, { value: "Non", checked: false }],
                        value: null,
                        size: 10,
                        isMandatory: true,
                        otherValue: '',
                        type: "select",
                        editable: false,
                        deleteable: false,
                        subLevel: 1,
                        expandMore: false,
                    },
                    {
                        label: "Langue",
                        key: "Langue_maternelle__c",
                        expandOnboarding: true,
                        defaultValue: [{ value: "Français", checked: false }, { value: "Anglais", checked: false }],
                        value: null,
                        size: 10,
                        isMandatory: true,
                        otherValue: '',
                        type: "select",
                        editable: false,
                        deleteable: false,
                        subLevel: 1,
                        expandMore: false,
                    },
                    {
                        label: "A quitté la société",
                        key: "A_quitt_la_soci_t__c",
                        expandOnboarding: true,
                        defaultValue: [{ value: "Oui", checked: false }, { value: "Non", checked: false }],
                        value: null,
                        size: 10,
                        isMandatory: true,
                        otherValue: '',
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
                isConditional: false,
                conditionValue: "",
                conditionLocation: {},
                deleteable: true,
                selected: true,
                expandMore: false,
                expandOnboarding: true,
                defaultValue: false,
                suffixEndpoint: "category/user-session",
                forms: [
                    {
                        label: "Utilisateur local à créer",
                        key: "UserLocalToCreate",
                        expandOnboarding: true,
                        defaultValue: null,
                        value: null,
                        size: 80,
                        isMandatory: false,
                        otherValue: '',
                        type: "checkbox",
                        editable: true,
                        isConditional: false,
                        conditionValue: "",
                        conditionLocation: {},
                        deleteable: true,
                        subLevel: 1,
                        expandMore: false,
                        forms: [
                            {
                                label: "Login",
                                key: "Login",
                                expandOnboarding: true,
                                defaultValue: null,
                                value: null,
                                size: 80,
                                isMandatory: true,
                                otherValue: '',
                                type: "text",
                                editable: true,
                                isConditional: false,
                                conditionValue: "",
                                conditionLocation: {},
                                deleteable: false,
                                subLevel: 2,
                                expandMore: false,
                            },
                            {
                                label: "Mot de passe",
                                key: "Password",
                                expandOnboarding: true,
                                defaultValue: null,
                                value: null,
                                size: 80,
                                isMandatory: true,
                                otherValue: '',
                                type: "password",
                                editable: true,
                                isConditional: false,
                                conditionValue: "",
                                conditionLocation: {},
                                deleteable: true,
                                subLevel: 2,
                                expandMore: false,
                            },
                        ],
                    },
                    {
                        label: "Utilisateur AD (serveur) à créer",
                        key: "UserServerToCreate",
                        expandOnboarding: true,
                        defaultValue: null,
                        value: null,
                        size: 80,
                        isMandatory: false,
                        otherValue: '',
                        type: "checkbox",
                        editable: true,
                        isConditional: false,
                        conditionValue: "",
                        conditionLocation: {},
                        deleteable: true,
                        subLevel: 1,
                        expandMore: false,
                        forms: [
                            {
                                label: "Nom de domaine",
                                key: "DomainName",
                                expandOnboarding: true,
                                defaultValue: null,
                                value: null,
                                size: 80,
                                isMandatory: true,
                                otherValue: '',
                                type: "text",
                                editable: true,
                                isConditional: false,
                                conditionValue: "",
                                conditionLocation: {},
                                deleteable: false,
                                subLevel: 2,
                                expandMore: false,
                            },
                            {
                                label: "Votre login",
                                key: "YourLogin",
                                expandOnboarding: true,
                                defaultValue: null,
                                value: null,
                                size: 80,
                                isMandatory: true,
                                otherValue: '',
                                type: "text",
                                editable: true,
                                isConditional: false,
                                conditionValue: "",
                                conditionLocation: {},
                                deleteable: true,
                                subLevel: 2,
                                expandMore: false,
                            },
                            {
                                label: "Votre mot de passe.",
                                key: "YourPassword",
                                expandOnboarding: true,
                                defaultValue: null,
                                value: null,
                                size: 80,
                                isMandatory: true,
                                otherValue: '',
                                type: "password",
                                editable: true,
                                isConditional: false,
                                conditionValue: "",
                                conditionLocation: {},
                                deleteable: true,
                                subLevel: 2,
                                expandMore: false,
                            },
                            {
                                label: "Groupe de sécurité",
                                key: "GroupSecurity",
                                expandOnboarding: true,
                                defaultValue: null,
                                value: null,
                                size: 80,
                                isMandatory: true,
                                otherValue: '',
                                type: "checkbox",
                                editable: true,
                                isConditional: false,
                                conditionValue: "",
                                conditionLocation: {},
                                deleteable: true,
                                subLevel: 2,
                                expandMore: false,
                                forms: [
                                    {
                                        label: "Utilisateur avec les droits similaires *",
                                        key: "UserWithSimilarAccess",
                                        expandOnboarding: true,
                                        defaultValue: null,
                                        value: null,
                                        size: 80,
                                        isMandatory: true,
                                        otherValue: '',
                                        type: "text",
                                        editable: true,
                                        isConditional: false,
                                        conditionValue: "",
                                        conditionLocation: {},
                                        deleteable: true,
                                        subLevel: 3,
                                        expandMore: false,
                                    },
                                    {
                                        label: "Descriptions",
                                        key: "Description",
                                        expandOnboarding: true,
                                        defaultValue: null,
                                        value: null,
                                        size: 255,
                                        isMandatory: true,
                                        otherValue: '',
                                        type: "textarea",
                                        editable: true,
                                        isConditional: false,
                                        conditionValue: "",
                                        conditionLocation: {},
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
                isConditional: false,
                conditionValue: "",
                conditionLocation: {},
                deleteable: true,
                expandOnboarding: true,
                defaultValue: false,
                forms: [
                    {
                        label: "Adresse mail à créer.",
                        key: "EmailToCreate",
                        expandOnboarding: true,
                        defaultValue: null,
                        value: null,
                        size: 80,
                        isMandatory: true,
                        otherValue: '',
                        type: "checkbox",
                        editable: true,
                        isConditional: false,
                        conditionValue: "",
                        conditionLocation: {},
                        deleteable: true,
                        subLevel: 1,
                        expandMore: false,
                        forms: [
                            {
                                label: "Adresse mail",
                                key: "Email",
                                expandOnboarding: true,
                                defaultValue: null,
                                value: null,
                                size: 80,
                                isMandatory: true,
                                otherValue: '',
                                type: "email",
                                editable: true,
                                isConditional: false,
                                conditionValue: "",
                                conditionLocation: {},
                                deleteable: true,
                                subLevel: 2,
                                expandMore: false,
                            },
                            {
                                label: "Type de licence (si gérées par le client)",
                                key: "SerialKey",
                                expandOnboarding: true,
                                defaultValue: null,
                                value: null,
                                size: 1000,
                                isMandatory: true,
                                otherValue: '',
                                type: "text",
                                editable: true,
                                isConditional: false,
                                conditionValue: "",
                                conditionLocation: {},
                                deleteable: true,
                                subLevel: 2,
                                expandMore: false,
                            },
                        ],
                    },
                    {
                        label: "Listes  de distribution.",
                        key: "DistributionList",
                        expandOnboarding: true,
                        defaultValue: null,
                        value: null,
                        size: 80,
                        isMandatory: true,
                        otherValue: '',
                        type: "checkbox",
                        editable: true,
                        isConditional: false,
                        conditionValue: "",
                        conditionLocation: {},
                        deleteable: true,
                        subLevel: 1,
                        expandMore: false,
                        forms: [
                            {
                                label: "Utilisateur avec les listes similaires *",
                                key: "UserWithSimilarList",
                                expandOnboarding: true,
                                defaultValue: null,
                                value: null,
                                size: 80,
                                isMandatory: true,
                                otherValue: '',
                                type: "text",
                                editable: true,
                                isConditional: false,
                                conditionValue: "",
                                conditionLocation: {},
                                deleteable: true,
                                subLevel: 2,
                                expandMore: false,
                            },
                            {
                                label: "Descriptions.",
                                key: "Description",
                                expandOnboarding: true,
                                defaultValue: null,
                                value: null,
                                size: 1000,
                                isMandatory: true,
                                otherValue: '',
                                type: "textarea",
                                editable: true,
                                isConditional: false,
                                conditionValue: "",
                                conditionLocation: {},
                                deleteable: true,
                                subLevel: 2,
                                expandMore: false,
                            },
                        ],
                    },
                    {
                        label: "Ajouter des boites mails délégués.",
                        key: "AddInboxMailDelegate",
                        expandOnboarding: true,
                        defaultValue: null,
                        value: null,
                        size: 80,
                        isMandatory: true,
                        otherValue: '',
                        type: "checkbox",
                        editable: true,
                        isConditional: false,
                        conditionValue: "",
                        conditionLocation: {},
                        deleteable: true,
                        subLevel: 1,
                        expandMore: false,
                        forms: [
                            {
                                label: "Descriptions.",
                                key: "Description",
                                expandOnboarding: true,
                                defaultValue: null,
                                value: null,
                                size: 1000,
                                isMandatory: true,
                                otherValue: '',
                                type: "textarea",
                                editable: true,
                                isConditional: false,
                                conditionValue: "",
                                conditionLocation: {},
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
                isConditional: false,
                conditionValue: "",
                conditionLocation: {},
                deleteable: true,
                expandOnboarding: true,
                defaultValue: false,
                forms: [
                    {
                        label: "Accès aux lecteurs réseaux.",
                        key: "ReadNetworkAccess",
                        expandOnboarding: true,
                        defaultValue: null,
                        value: null,
                        size: 80,
                        isMandatory: false,
                        otherValue: '',
                        type: "checkbox",
                        editable: true,
                        isConditional: false,
                        conditionValue: "",
                        conditionLocation: {},
                        deleteable: true,
                        subLevel: 1,
                        expandMore: false,
                        forms: [
                            {
                                label: "Nom du serveur",
                                key: "ServerName",
                                expandOnboarding: true,
                                defaultValue: null,
                                value: null,
                                size: 80,
                                isMandatory: true,
                                otherValue: '',
                                type: "text",
                                editable: true,
                                isConditional: false,
                                conditionValue: "",
                                conditionLocation: {},
                                deleteable: false,
                                subLevel: 2,
                                expandMore: false,
                            },
                            {
                                label: "Chemin du dossier",
                                key: "FolderPath",
                                expandOnboarding: true,
                                defaultValue: null,
                                value: null,
                                size: 80,
                                isMandatory: true,
                                otherValue: '',
                                type: "text",
                                editable: true,
                                isConditional: false,
                                conditionValue: "",
                                conditionLocation: {},
                                deleteable: true,
                                subLevel: 2,
                                expandMore: false,
                            },
                            {
                                label: "Lettre à attribuer",
                                key: "AttributLetter",
                                expandOnboarding: true,
                                defaultValue: null,
                                value: null,
                                size: 80,
                                isMandatory: true,
                                otherValue: '',
                                type: "text",
                                editable: true,
                                isConditional: false,
                                conditionValue: "",
                                conditionLocation: {},
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
                expandOnboarding: true,
                defaultValue: false,
                editable: true,
                isConditional: false,
                conditionValue: "",
                conditionLocation: {},
                deleteable: true,
                forms: [
                    {
                        label: "Accès au VPN",
                        key: "VpnAccess",
                        expandOnboarding: true,
                        defaultValue: null,
                        value: null,
                        size: 80,
                        isMandatory: false,
                        otherValue: '',
                        type: "checkbox",
                        editable: true,
                        isConditional: false,
                        conditionValue: "",
                        conditionLocation: {},
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
                isConditional: false,
                conditionValue: "",
                conditionLocation: {},
                deleteable: true,
                expandOnboarding: true,
                defaultValue: false,
                forms: [
                    {
                        label: "Accès aux imprimantes.",
                        key: "PrinterAccess",
                        expandOnboarding: true,
                        defaultValue: null,
                        value: null,
                        size: 80,
                        isMandatory: false,
                        otherValue: '',
                        type: "checkbox",
                        editable: true,
                        isConditional: false,
                        conditionValue: "",
                        conditionLocation: {},
                        deleteable: true,
                        subLevel: 1,
                        expandMore: false,
                        forms: [
                            {
                                label: "Nom / Modèle de l'imprimante / localisation",
                                key: "PrinterName",
                                expandOnboarding: true,
                                defaultValue: null,
                                value: null,
                                size: 1000,
                                isMandatory: true,
                                otherValue: '',
                                type: "textarea",
                                editable: true,
                                isConditional: false,
                                conditionValue: "",
                                conditionLocation: {},
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
                isConditional: false,
                conditionValue: "",
                conditionLocation: {},
                expandOnboarding: true,
                defaultValue: false,
                deleteable: true,
                forms: [
                    {
                        label: "Accès aux applications ?",
                        key: "ApplicationAccess",
                        expandOnboarding: true,
                        defaultValue: null,
                        value: null,
                        size: 80,
                        isMandatory: false,
                        otherValue: '',
                        type: "checkbox",
                        editable: true,
                        isConditional: false,
                        conditionValue: "",
                        conditionLocation: {},
                        deleteable: true,
                        subLevel: 1,
                        expandMore: false,
                        forms: [
                            {
                                label: "Descriptions",
                                key: "Description",
                                expandOnboarding: true,
                                defaultValue: null,
                                value: null,
                                size: 1000,
                                isMandatory: true,
                                otherValue: '',
                                type: "textarea",
                                editable: true,
                                isConditional: false,
                                conditionValue: "",
                                conditionLocation: {},
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
                expandOnboarding: true,
                defaultValue: false,
                editable: true,
                isConditional: false,
                conditionValue: "",
                conditionLocation: {},
                deleteable: true,
                forms: [
                    {
                        label: "Paramétrage de poste",
                        key: "PostParameter",
                        expandOnboarding: true,
                        defaultValue: null,
                        value: null,
                        size: 80,
                        isMandatory: false,
                        otherValue: '',
                        type: "checkbox",
                        editable: true,
                        isConditional: false,
                        conditionValue: "",
                        conditionLocation: {},
                        deleteable: true,
                        subLevel: 1,
                        expandMore: false,
                        forms: [
                            {
                                label: "RealocatedEquipment",
                                key: "",
                                expandOnboarding: true,
                                defaultValue: null,
                                value: null,
                                size: 1000,
                                isMandatory: true,
                                otherValue: '',
                                type: "textarea",
                                editable: true,
                                isConditional: false,
                                conditionValue: "",
                                conditionLocation: {},
                                deleteable: true,
                                subLevel: 2,
                                expandMore: false,
                            },
                            {
                                label: "Nouveau poste",
                                key: "NewPost",
                                expandOnboarding: true,
                                defaultValue: null,
                                value: null,
                                size: 80,
                                isMandatory: true,
                                otherValue: '',
                                type: "checkbox",
                                editable: true,
                                isConditional: false,
                                conditionValue: "",
                                conditionLocation: {},
                                deleteable: true,
                                subLevel: 2,
                                expandMore: false,
                                forms: [
                                    {
                                        label: "Acheté chez Nowteam",
                                        key: "PurchasedAtNowteam",
                                        expandOnboarding: true,
                                        defaultValue: null,
                                        value: null,
                                        size: 1000,
                                        isMandatory: true,
                                        otherValue: '',
                                        type: "textarea",
                                        editable: true,
                                        isConditional: false,
                                        conditionValue: "",
                                        conditionLocation: {},
                                        deleteable: true,
                                        subLevel: 3,
                                        expandMore: false,
                                    },
                                    {
                                        label: "Autre",
                                        key: "Other",
                                        expandOnboarding: true,
                                        defaultValue: null,
                                        value: null,
                                        size: 1000,
                                        isMandatory: true,
                                        otherValue: '',
                                        type: "text",
                                        editable: true,
                                        isConditional: false,
                                        conditionValue: "",
                                        conditionLocation: {},
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
                isConditional: false,
                conditionValue: "",
                conditionLocation: {},
                expandOnboarding: true,
                defaultValue: false,
                deleteable: true,
                forms: [
                    {
                        label: "Descriptions",
                        key: "Description",
                        expandOnboarding: true,
                        defaultValue: null,
                        value: null,
                        size: 1000,
                        isMandatory: false,
                        otherValue: '',
                        type: "textarea",
                        editable: true,
                        isConditional: false,
                        conditionValue: "",
                        conditionLocation: {},
                        deleteable: true,
                        subLevel: 1,
                        expandMore: false,
                    },
                ],
            },
        ];
    }
    TemplateProfileCreateComponent.prototype.canDeactivate = function () {
        if (!this.canExit) {
            this.dialog.open(ExitConfirmComponent, {
                data: ''
            });
            return this.service.canExit$;
        }
        return true;
    };
    TemplateProfileCreateComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            var _this = this;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        this.id = this.route.snapshot.paramMap.get("id");
                        this.form = this.fb.group({
                            Name: ["", Validators.required],
                            Picto: [""],
                            Description: [""],
                            Tags: ["", Validators.required],
                            Status: [false, Validators.required],
                        });
                        this.form.valueChanges.subscribe(function (c) {
                            _this.canExit = false;
                        });
                        if (!(this.id !== "0")) return [3 /*break*/, 2];
                        _a = this;
                        return [4 /*yield*/, this.service.getProfil(this.id)];
                    case 1:
                        _a.currentProfil = _c.sent();
                        this.form.patchValue(this.currentProfil);
                        this.categories = this.currentProfil.categories;
                        return [3 /*break*/, 3];
                    case 2:
                        this.showProfileName = true;
                        this.categories = this.defaultCategorie;
                        _c.label = 3;
                    case 3:
                        _b = this;
                        return [4 /*yield*/, this.service.getAllTags()];
                    case 4:
                        _b.tags = _c.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    TemplateProfileCreateComponent.prototype.onAddNewCategory = function (e) {
        e.preventDefault();
        this.canExit = false;
        this.categories.push({
            name: "",
            editable: true,
            isConditional: false,
            conditionValue: "",
            conditionLocation: {},
            deleteable: true,
            expandMore: true,
            suffixEndpoint: "",
            forms: [
                {
                    label: "",
                    key: "",
                    expandOnboarding: true,
                    defaultValue: null,
                    value: null,
                    size: 80,
                    isMandatory: true,
                    otherValue: '',
                    type: "text",
                    deleteable: true,
                    editable: true,
                    isConditional: false,
                    conditionValue: "",
                    conditionLocation: {},
                },
            ],
        });
    };
    TemplateProfileCreateComponent.prototype.onAddNewField = function () {
        var params = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            params[_i] = arguments[_i];
        }
        this.canExit = false;
        var length = params.length;
        var forms = length === 1 ? this.categories[params[0]].forms : length === 2 ? this.categories[params[0]].forms[params[1]].forms : this.categories[params[0]].forms[params[1]].forms[params[2]].forms;
        forms.push({
            label: "",
            key: "",
            expandOnboarding: true,
            defaultValue: null,
            value: null,
            size: 80,
            isMandatory: true,
            otherValue: '',
            type: "text",
            deleteable: true,
            editable: true,
            isConditional: false,
            conditionValue: "",
            conditionLocation: {},
            subLevel: params.length,
        });
    };
    TemplateProfileCreateComponent.prototype.onAddNewSubLevelField = function () {
        var params = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            params[_i] = arguments[_i];
        }
        this.canExit = false;
        var length = params.length;
        var forms = length === 2 ? this.categories[params[0]].forms[params[length - 1]] : length === 3 ? this.categories[params[0]].forms[params[1]].forms[params[length - 1]] : this.categories[params[0]].forms[params[1]].forms[params[2]].forms[params[length - 1]];
        forms.expandMore = true;
        forms.forms = [];
        forms.forms.push({
            label: "",
            key: "",
            expandOnboarding: true,
            defaultValue: null,
            value: null,
            size: 80,
            isMandatory: true,
            otherValue: '',
            type: "text",
            deleteable: true,
            editable: true,
            isConditional: false,
            conditionValue: "",
            conditionLocation: {},
            subLevel: params.length,
            expandMore: true,
        });
    };
    TemplateProfileCreateComponent.prototype.onRemoveField = function () {
        var params = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            params[_i] = arguments[_i];
        }
        this.canExit = false;
        var length = params.length;
        var forms = length === 2 ? this.categories[params[0]].forms : length === 3 ? this.categories[params[0]].forms[params[1]].forms : this.categories[params[0]].forms[params[1]].forms[params[2]].forms;
        forms.splice(params[length - 1], 1);
    };
    TemplateProfileCreateComponent.prototype.onRemoveCategory = function (e, i) {
        e.preventDefault();
        this.categories.splice(i, 1);
        this.canExit = false;
    };
    TemplateProfileCreateComponent.prototype.onChangeCategory = function () {
        return this.categories.every(function (cat) { return cat.name !== "" && cat.forms.every(function (field) { return field.label !== "" && field.type !== ""; }); });
    };
    TemplateProfileCreateComponent.prototype.onSubmit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var expandCategories, result, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!(this.form.valid && this.onChangeCategory())) return [3 /*break*/, 7];
                        expandCategories = this.categories
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
                        if (!(this.id !== "0")) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.service.updateProfil(__assign(__assign(__assign({}, this.currentProfil), this.form.value), { categories: expandCategories }))];
                    case 1:
                        _a = _b.sent();
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, this.service.createProfil(__assign(__assign({}, this.form.value), { categories: expandCategories }))];
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
    TemplateProfileCreateComponent.prototype.onChangeType = function (type) {
        var params = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            params[_i - 1] = arguments[_i];
        }
        this.canExit = false;
        var length = params.length;
        var forms = length === 2 ? this.categories[params[0]].forms : length === 3 ? this.categories[params[0]].forms[params[1]].forms : this.categories[params[0]].forms[params[1]].forms[params[2]].forms;
        if (type === "select" || type === "radio" || type === "checkbox_multiple") {
            forms[params[length - 1]].defaultValue = [];
        }
        else if (type === "checkbox") {
            forms[params[length - 1]].defaultValue = true;
        }
        else {
            forms[params[length - 1]].defaultValue = "";
        }
    };
    TemplateProfileCreateComponent.prototype.onKeyPress = function (event) {
        var params = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            params[_i - 1] = arguments[_i];
        }
        this.canExit = false;
        var length = params.length;
        var forms = length === 2 ? this.categories[params[0]].forms[params[length - 1]] : length === 3 ? this.categories[params[0]].forms[params[1]].forms[params[length - 1]] : this.categories[params[0]].forms[params[1]].forms[params[2]].forms[params[length - 1]];
        if (event.key === ";") {
            var exist = forms.defaultValue.find(function (opt) { return opt.value.toLocaleLowerCase() === event.target.value.split(";")[0].toLocaleLowerCase(); });
            if (!exist) {
                forms.defaultValue.push({
                    value: event.target.value.split(";")[0],
                    checked: false
                });
                event.target.value = "";
            }
            else {
                event.target.value = "";
            }
        }
        // this.getConditionValues()
    };
    TemplateProfileCreateComponent.prototype.removeKeyword = function (keyword) {
        var params = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            params[_i - 1] = arguments[_i];
        }
        this.canExit = false;
        var length = params.length;
        var forms = length === 2 ? this.categories[params[0]].forms[params[length - 1]] : length === 3 ? this.categories[params[0]].forms[params[1]].forms[params[length - 1]] : this.categories[params[0]].forms[params[1]].forms[params[2]].forms[params[length - 1]];
        forms.defaultValue = forms.defaultValue.filter(function (option) { return option.value !== keyword.value; });
        // this.getConditionValues()
    };
    TemplateProfileCreateComponent.prototype.onExpendMore = function (event) {
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
    TemplateProfileCreateComponent.prototype.onCheckedDefault = function (event) {
        var params = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            params[_i - 1] = arguments[_i];
        }
        if (params.length === 1) {
            this.categories[params[0]].defaultValue = event;
        }
        else if (params.length === 2) {
            this.categories[params[0]].defaultValue = event;
            this.categories[params[0]].forms[params[1]].defaultValue = event;
        }
        else if (params.length === 3) {
            this.categories[params[0]].defaultValue = event;
            this.categories[params[0]].forms[params[1]].defaultValue = event;
            this.categories[params[0]].forms[params[1]].forms[params[2]].defaultValue = event;
        }
        else {
            this.categories[params[0]].defaultValue = event;
            this.categories[params[0]].forms[params[1]].defaultValue = event;
            this.categories[params[0]].forms[params[1]].forms[params[2]].defaultValue = event;
            this.categories[params[0]].forms[params[1]].forms[params[2]].forms[params[3]].defaultValue = event;
        }
        // this.getConditionValues()
    };
    TemplateProfileCreateComponent.prototype.addKeywordFromInput = function (event, prev) {
        var params = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            params[_i - 2] = arguments[_i];
        }
        this.canExit = false;
        var input = event.input;
        var value = event.value;
        var length = params.length;
        var forms = length === 2 ? this.categories[params[0]].forms[params[length - 1]] : length === 3 ? this.categories[params[0]].forms[params[1]].forms[params[length - 1]] : this.categories[params[0]].forms[params[1]].forms[params[2]].forms[params[length - 1]];
        if (value) {
            var prevIndex = forms.defaultValue.findIndex(function (opt) { return opt.value.toLocaleLowerCase() === prev.toLocaleLowerCase(); });
            if (prevIndex !== -1) {
                forms.defaultValue[prevIndex].value = value.trim();
                input.value = "";
            }
            else {
                var exist = forms.defaultValue.find(function (opt) { return opt.value.toLocaleLowerCase() === event.value.toLocaleLowerCase(); });
                if (!exist) {
                    forms.defaultValue.push({ value: value.trim(), checked: false });
                    input.value = "";
                }
                else {
                    input.value = "";
                }
            }
        }
        // this.getConditionValues()
    };
    TemplateProfileCreateComponent.prototype.drop = function (event) {
        this.canExit = false;
        if (event.previousContainer === event.container) {
            moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
        }
        else {
            transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
        }
    };
    TemplateProfileCreateComponent.prototype.ingoreDefaultAction = function (e) {
        e.preventDefault();
    };
    TemplateProfileCreateComponent.prototype.onShowCategory = function () {
        this.showProfileName = !this.showProfileName;
    };
    TemplateProfileCreateComponent.prototype.onSelectPicto = function (e, picto) {
        e.preventDefault();
        this.canExit = false;
        this.form.patchValue({ Picto: picto });
        this.isPictoListShow = !this.isPictoListShow;
    };
    TemplateProfileCreateComponent.prototype.onShowPictoList = function (e) {
        e.preventDefault();
        this.isPictoListShow = !this.isPictoListShow;
    };
    TemplateProfileCreateComponent.prototype.onChangeLabel = function (event) {
        var params = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            params[_i - 1] = arguments[_i];
        }
        var arr = event.label.split(" ");
        for (var i = 0; i < arr.length; i++) {
            arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
        }
        var length = params.length;
        var forms = length === 2 ? this.categories[params[0]].forms[params[length - 1]] : length === 3 ? this.categories[params[0]].forms[params[1]].forms[params[length - 1]] : this.categories[params[0]].forms[params[1]].forms[params[2]].forms[params[length - 1]];
        forms.key = arr.join('');
    };
    TemplateProfileCreateComponent.prototype.onCheckedChip = function (event) {
        var params = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            params[_i - 1] = arguments[_i];
        }
        this.canExit = false;
        var length = params.length;
        var forms = length === 2 ? this.categories[params[0]].forms[params[length - 1]] : length === 3 ? this.categories[params[0]].forms[params[1]].forms[params[length - 1]] : this.categories[params[0]].forms[params[1]].forms[params[2]].forms[params[length - 1]];
        var index = forms.defaultValue.findIndex(function (chip) { return chip.value === event.value; });
        if (index !== -1 && forms.type === 'checkbox_multiple') {
            forms.defaultValue[index].checked = !event.checked;
        }
        else if (index !== -1) {
            forms.defaultValue.forEach(function (value) {
                value.checked = false;
            });
            forms.defaultValue[index].checked = !event.checked;
        }
        // this.getConditionValues()
    };
    TemplateProfileCreateComponent.prototype.openDialog = function () {
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
    TemplateProfileCreateComponent.prototype.onPassInEditMode = function (i) {
        this.canExit = false;
        this.editIndex = i;
    };
    TemplateProfileCreateComponent.prototype.onEdit = function () {
        this.editIndex = null;
    };
    TemplateProfileCreateComponent.prototype.onEditCategoryName = function (i, name) {
        this.canExit = false;
        this.categories[i].name = name;
        // this.getConditionValues()
    };
    TemplateProfileCreateComponent.prototype.onAcrelink = function (e) {
        e.preventDefault();
    };
    TemplateProfileCreateComponent.prototype.getConditionValues = function () {
        var conditionsList = [];
        var type = function (forms) { return forms.type === 'select' || forms.type === 'checkobx' || forms.type === 'checkbox_multiple' || forms.type === 'radio'; };
        for (var i = 0; i < this.categories.length; i++) {
            for (var j = 0; j < this.categories[i].forms.length; j++) {
                var forms = this.categories[i].forms[j];
                if (type(forms)) {
                    conditionsList.push({
                        level: 1,
                        categoryIndex: i,
                        currentIndex: j,
                        possibleValues: forms.defaultValue,
                        label: this.categories[i].name + " > " + forms.label
                    });
                }
                if (forms.forms) {
                    for (var k = 0; k < forms.forms.length; k++) {
                        var sub = forms.forms[k];
                        if (sub.type === 'checkbox' || sub.type === 'select' || sub.type === 'radio' || sub.type === 'checkbox_multiple') {
                            conditionsList.push({
                                level: 2,
                                categoryIndex: i,
                                formIndex: j,
                                currentIndex: k,
                                possibleValues: sub.defaultValue,
                                label: this.categories[i].name + " > " + forms.label + " > " + sub.label
                            });
                        }
                        if (sub.forms) {
                            for (var l = 0; l < sub.forms.length; l++) {
                                var child = sub.forms[l];
                                if (child.type === 'checkbox' || child.type === 'select' || child.type === 'radio' || child.type === 'checkbox_multiple') {
                                    conditionsList.push({
                                        level: 3,
                                        categoryIndex: i,
                                        formIndex: j,
                                        subIndex: l,
                                        currentIndex: k,
                                        possibleValues: child.defaultValue,
                                        label: this.categories[i].name + " > " + forms.label + " > " + sub.label + " >  " + child.label
                                    });
                                }
                            }
                        }
                    }
                }
            }
        }
        console.log('----------------------', conditionsList);
        this.conditionData = conditionsList;
        console.log(conditionsList);
    };
    TemplateProfileCreateComponent.ɵfac = function TemplateProfileCreateComponent_Factory(t) { return new (t || TemplateProfileCreateComponent)(ɵɵdirectiveInject(FormBuilder), ɵɵdirectiveInject(OnboardingService), ɵɵdirectiveInject(ActivatedRoute), ɵɵdirectiveInject(Router), ɵɵdirectiveInject(MatDialog)); };
    TemplateProfileCreateComponent.ɵcmp = ɵɵdefineComponent({ type: TemplateProfileCreateComponent, selectors: [["onboarding-create-profile-template"]], decls: 4, vars: 3, consts: [[3, "formGroup", "submit"], ["class", "box-title", 4, "ngIf"], ["class", "category", 4, "ngIf"], [1, "box-title"], [1, "box-title-content"], [1, "title"], [1, "profil-name-content"], ["mat-raised-button", "", "color", "primary", 1, "add-picto", 3, "click"], ["appearance", "outline", 1, "example-full-width"], ["type", "text", "matInput", "", "formControlName", "Name", "placeholder", "Ex. Manager"], ["class", "list-picto", 4, "ngIf"], ["type", "text", "matInput", "", "formControlName", "Description", "rows", "4", "placeholder", ""], ["formControlName", "Tags", "required", ""], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "Status", 1, "form-field"], [1, "link-create-profil"], ["mat-raised-button", "", "color", "primary", 1, "link-add-profil", 3, "disabled", "click"], [1, "list-picto"], [3, "color", "click", 4, "ngFor", "ngForOf"], [3, "click"], [3, "value"], [1, "category"], [1, "side-bar"], [1, "summary"], ["type", "I"], ["class", "li-title", 4, "ngFor", "ngForOf"], ["mat-button", "", 1, "add-category", "transparent", 3, "click"], ["mat-button", "", "type", "submit", 1, "register-button"], ["cdkDropListGroup", "", 1, "fields"], ["cdkDropList", "", 1, "example-list", "mt-20", 3, "cdkDropListData", "cdkDropListDropped"], ["parentList", "cdkDropList"], ["class", "category-item", "cdkDrag", "", 3, "id", 4, "ngFor", "ngForOf"], [1, "add-button-container"], [1, "li-title"], [3, "ngxScrollTo", "click", 4, "ngIf"], ["type", "text", 3, "ngModel", "ngModelOptions", "blur", "ngModelChange", 4, "ngIf"], [4, "ngFor", "ngForOf"], [3, "ngxScrollTo", "click"], ["type", "text", 3, "ngModel", "ngModelOptions", "blur", "ngModelChange"], ["edit", ""], [4, "ngIf"], [3, "ngxScrollTo"], ["cdkDrag", "", 1, "category-item", 3, "id"], ["cdkDragHandle", "", 1, "left-action", "move-icons"], ["mat-raised-button", "", 1, "transparent-button", 3, "disabled", "click"], [1, "field-content"], [1, "field-item"], ["type", "text", "required", "", "placeholder", "Saisir le nom de la cat\u00E9gorie", 1, "example-full-width", "input-category-name", 3, "readonly", "ngModel", "ngModelOptions", "ngModelChange"], ["cdkDropList", "", 3, "cdkDropListData", "cdkDropListDropped", 4, "ngIf"], ["mat-mini-fab", "", "color", "primary", 1, "expand-button", 3, "click"], ["cdkDropList", "", 3, "cdkDropListData", "cdkDropListDropped"], ["childList", "cdkDropList"], ["class", "", 3, "id", 4, "ngFor", "ngForOf"], [1, "", 3, "id"], ["cdkDrag", ""], [1, "fields-content"], [1, "button-action"], ["mat-mini-fab", "", "color", "warn", 1, "delete-field", "transparent-button", 3, "disabled", "click"], [1, "fields-container"], [3, "field", "length", "i", "j", "conditionData", "onAddKeywordFromInput", "onKeyPress", "onAddNewField", "onRemoveField", "onChangeType", "onRemoveKeyword", "onAddNewSubLevelField", "onExpendMore", "onChangeLabel", "onCheckedChip", "onDrop", "onCheckedDefault", "onGetConditionValues"], ["class", "child", 4, "ngIf"], ["class", "add-button-container add-button-sub-category", 4, "ngIf"], [1, "child"], [1, "button-action", "child-2-background"], [1, "button-action", "child-3-background"], [1, "add-button-container", "add-button-sub-category"], ["mat-raised-button", "", "color", "primary", 2, "margin", "10px auto", 3, "disabled", "click"]], template: function TemplateProfileCreateComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵelementStart(0, "main");
            ɵɵelementStart(1, "form", 0);
            ɵɵlistener("submit", function TemplateProfileCreateComponent_Template_form_submit_1_listener() { return ctx.onSubmit(); });
            ɵɵtemplate(2, TemplateProfileCreateComponent_div_2_Template, 29, 7, "div", 1);
            ɵɵtemplate(3, TemplateProfileCreateComponent_div_3_Template, 25, 4, "div", 2);
            ɵɵelementEnd();
            ɵɵelementEnd();
        } if (rf & 2) {
            ɵɵadvance(1);
            ɵɵproperty("formGroup", ctx.form);
            ɵɵadvance(1);
            ɵɵproperty("ngIf", ctx.showProfileName);
            ɵɵadvance(1);
            ɵɵproperty("ngIf", !ctx.showProfileName);
        } }, directives: [ɵangular_packages_forms_forms_y, NgControlStatusGroup, FormGroupDirective, NgIf, MatButton, MatIcon, MatFormField, MatLabel, MatInput, DefaultValueAccessor, NgControlStatus, FormControlName, MatSelect, RequiredValidator, NgForOf, MatCheckbox, MatOption, CdkDropListGroup, CdkDropList, ScrollToDirective, NgModel, CdkDrag, CdkDragHandle, SubTemplateProfileComponent], styles: ["main[_ngcontent-%COMP%]{background:no-repeat padding-box #f4f7f9;height:100vh;width:100%;display:flex;flex-direction:column;align-items:center}main[_ngcontent-%COMP%]   .disabled[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{background-color:transparent!important}main[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{display:flex;height:100%;width:100%}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]{width:786px;background:no-repeat padding-box #fff;border:1px solid #dce4e9;border-radius:6px;opacity:1;margin:auto;padding:0 25px;-ms-grid-row-align:center;align-self:center}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{text-align:center;font:900 32px/48px Nexa;letter-spacing:0;color:#171f26}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font:18px/24px Nexa Text;letter-spacing:0;color:#171f26}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .profil-name-content[_ngcontent-%COMP%]{display:flex;align-items:center;position:relative}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .profil-name-content[_ngcontent-%COMP%]   .add-picto[_ngcontent-%COMP%]{margin-right:15px;min-width:50px;width:30px;padding:9px 12px}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .profil-name-content[_ngcontent-%COMP%]   .add-picto[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin-right:10px}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .profil-name-content[_ngcontent-%COMP%]   .list-picto[_ngcontent-%COMP%]{position:absolute;height:200px;width:100%;background:no-repeat padding-box #fff;border:1px solid #171f26;border-radius:8px;top:100%;z-index:1}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .profil-name-content[_ngcontent-%COMP%]   .list-picto[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin:15px;border:none;font-size:40px}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .profil-name-content[_ngcontent-%COMP%]   .list-picto[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]:hover{color:#830b6b!important;cursor:pointer}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .box-title-content[_ngcontent-%COMP%]{width:100%;margin:25px auto}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font:900 32px/38px Nexa;letter-spacing:0;color:#171f26}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font:15px/26px Nexa Text;letter-spacing:0;color:#171f26;text-align:center}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .link-create-profil[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:center}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{text-align:center;border:1px solid #543cb6;border-radius:7px;padding:.7em 2em .5em;display:flex;align-items:center;background-color:transparent;font:bold 15px/17px Nexa;letter-spacing:0;color:#543cb6}main[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:space-between}.expand-button[_ngcontent-%COMP%]{color:#5a607f!important;background-color:transparent!important;box-shadow:none!important}.input-category-name[_ngcontent-%COMP%]{border:none;outline:0;text-align:left;font:bold 18px/48px Nexa Text;letter-spacing:0;color:#171f26}.example-full-width[_ngcontent-%COMP%]{width:100%}.field-action[_ngcontent-%COMP%]{width:10%}.field-size[_ngcontent-%COMP%]{width:90%;margin:auto 2% auto auto}  .mat-form-field-appearance-fill .mat-form-field-flex{background-color:#fff}  .mat-form-field-appearance-outline .mat-form-field-infix{padding:.5em 0}  .mat-select{padding:.5em 0}  .mat-form-field-appearance-fill .mat-form-field-underline::before{background-color:transparent}  .mat-form-field-wrapper{padding-bottom:0!important}[_nghost-%COMP%]     .cdk-drag-preview .input-category-name div.mat-form-field-outline-start, [_nghost-%COMP%]     .input-category-name div.mat-form-field-outline-start{border-color:0!important;border-width:0!important}[_nghost-%COMP%]     .input-category-name .mat-form-field-outline-gap{border-color:0!important;border-width:0!important}  mat-checkbox.form-field .mat-checkbox-checkmark-path{stroke:#000!important}[_nghost-%COMP%]     .mat-checkbox-checked.mat-accent .mat-checkbox-background, [_nghost-%COMP%]     .mat-checkbox-indeterminate.mat-accent .mat-checkbox-background{background-color:transparent}[_nghost-%COMP%]     .input-category-name .mat-form-field-outline-end{border-color:0!important;border-width:0!important}[_nghost-%COMP%]     .input-category-name .mat-form-field-label-wrapper{display:none}[_nghost-%COMP%]     .input-category-name .mat-form-field-appearance-outline .mat-form-field-outline{color:transparent!important}[_nghost-%COMP%]     .input-category-name .mat-form-field-infix{border-top:none}[_nghost-%COMP%]     .input-category-name .mat-form-field-appearance-outline .mat-form-field-infix{padding:0 0 1em!important}.category-action[_ngcontent-%COMP%]{display:flex;width:100%}.delete-field[_ngcontent-%COMP%]{margin:auto 2%}.radio-group[_ngcontent-%COMP%]   .mat-radio-button[_ngcontent-%COMP%]{margin-right:10px}.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary[_ngcontent-%COMP%]{background-color:#3f51b5;color:#fff;min-height:20px;font-size:10px}.move-icons[_ngcontent-%COMP%]{cursor:move}.category-item[_ngcontent-%COMP%], .cdk-drag-placeholder[_ngcontent-%COMP%]{display:flex;align-items:baseline;width:100%;border:1px solid #dce4e9;border-radius:8px;background-color:#fff;margin-top:10px;min-height:60px}.category-item[_ngcontent-%COMP%]   .left-action[_ngcontent-%COMP%], .cdk-drag-placeholder[_ngcontent-%COMP%]   .left-action[_ngcontent-%COMP%]{height:auto;background-color:#49a094;padding-top:7px;width:40px;-ms-grid-row-align:stretch;align-self:stretch;border-top-left-radius:8px;border-bottom-left-radius:8px}.category-item[_ngcontent-%COMP%]   .left-action[_ngcontent-%COMP%]   .transparent-button[_ngcontent-%COMP%], .cdk-drag-placeholder[_ngcontent-%COMP%]   .left-action[_ngcontent-%COMP%]   .transparent-button[_ngcontent-%COMP%]{background-color:transparent;box-shadow:none;width:40px;padding:0;margin:0;min-width:auto;color:#fff}.category-item[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%], .cdk-drag-placeholder[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%]{width:100%;-ms-grid-row-align:center;align-self:center}.category-item[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%], .cdk-drag-placeholder[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;border:transparent!important}.category-item[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]   .mat-form-field-wrapper[_ngcontent-%COMP%]   .mat-form-field-flex[_ngcontent-%COMP%]   .mat-form-field-outline[_ngcontent-%COMP%], .category-item[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%]   .mat-form-field-outline[_ngcontent-%COMP%], .cdk-drag-placeholder[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]   .mat-form-field-wrapper[_ngcontent-%COMP%]   .mat-form-field-flex[_ngcontent-%COMP%]   .mat-form-field-outline[_ngcontent-%COMP%], .cdk-drag-placeholder[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%]   .mat-form-field-outline[_ngcontent-%COMP%]{color:transparent!important}.cdk-drag-preview[_ngcontent-%COMP%]{box-sizing:border-box;border-radius:4px;opacity:1}.cdk-drag-preview[_ngcontent-%COMP%]   .expand-button[_ngcontent-%COMP%]{color:#5a607f!important;background-color:transparent!important;box-shadow:none!important;margin-right:28px!important}.cdk-drag-placeholder[_ngcontent-%COMP%]{opacity:0}.cdk-drag-animating[_ngcontent-%COMP%], .example-list.cdk-drop-list-dragging[_ngcontent-%COMP%]   .category-item[_ngcontent-%COMP%]:not(.cdk-drag-placeholder){transition:transform 250ms cubic-bezier(0,0,.2,1)}.child[_ngcontent-%COMP%]{margin-left:0}.category[_ngcontent-%COMP%]{display:flex;flex-direction:row;width:100vw}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]{width:250px;background-color:#fff;margin:10px 20px;border-radius:5px;border:1px solid #dbcbcb96}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:25px;border-bottom:1px solid #dbcbcb96;margin:10px;padding-bottom:5px;font-family:\"Nexa Text\";display:flex;align-items:center}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin-left:15px;cursor:pointer}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]{font-weight:600;margin-left:-27px;font-size:15px;list-style-position:inside}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:5px;margin:5px auto;cursor:pointer;text-align:left;font:12px/19px Nexa Text;letter-spacing:0;color:#535760}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]{padding-left:0;margin-left:0}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.li-title[_ngcontent-%COMP%]{font-size:14px;font-weight:600}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.li-title[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:140px;outline:0;border:1px dashed grey}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.li-title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:inline-flex;align-items:center}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.li-title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin-left:10px;display:none}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.li-title[_ngcontent-%COMP%]:hover   mat-icon[_ngcontent-%COMP%]{display:initial!important}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.sub-title[_ngcontent-%COMP%]{list-style:none;padding-left:20px}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.sub-title.active[_ngcontent-%COMP%], .category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.sub-title.active[_ngcontent-%COMP%]::marker, .category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.sub-title[_ngcontent-%COMP%]:hover{font-weight:600;background:no-repeat padding-box #e5e8ee;border-radius:5px}.category[_ngcontent-%COMP%]   .fields[_ngcontent-%COMP%]{width:90%;max-height:100vh;overflow:auto;margin-right:.5%;overflow-x:hidden}.category[_ngcontent-%COMP%]   .disabled[_ngcontent-%COMP%]{background-color:#f4f7f9!important}.category[_ngcontent-%COMP%]   .expand-button[_ngcontent-%COMP%]{color:#5a607f!important;background-color:transparent!important;box-shadow:none!important;margin-right:28px!important}.category[_ngcontent-%COMP%]   .expand-button[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%]{font-size:40px}.category[_ngcontent-%COMP%]   .transparent-button[_ngcontent-%COMP%]{background-color:transparent;box-shadow:none;width:40px;padding:0;margin:0;margin-left:0!important;min-width:auto;color:#fff}.add-button-sub-category[_ngcontent-%COMP%]{width:95.5%!important;margin-bottom:22px;margin-left:22px}.add-button-container[_ngcontent-%COMP%]{background:no-repeat padding-box #fff;border:1px dashed #dce4e9;border-radius:8px;margin-top:10px;padding:10px;display:flex;justify-content:center;align-items:center;width:98.5%;margin-bottom:22px}.add-button-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{display:flex;align-items:center;background-color:transparent;border:none;cursor:pointer;font:17px/26px Nexa Text;letter-spacing:0;color:#c2c8d5;box-shadow:none}.add-category[_ngcontent-%COMP%]{border:1px dashed #c2c8d5;border-radius:5px;margin-left:10px;margin-bottom:10px;font:bold 12px/19px Nexa Text;letter-spacing:0;color:#c2c8d5;width:92%}.cdk-drag[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]{display:flex;height:100%;margin:20px auto auto;width:100%;min-width:250px}.cdk-drag[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]   .button-action[_ngcontent-%COMP%]{background-color:#6fe8d7;-ms-grid-row-align:stretch;align-self:stretch;margin-top:0;margin-left:20px;border-bottom-left-radius:8px;border-top-left-radius:8px}.cdk-drag[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]   .button-action[_ngcontent-%COMP%]   .transparent-button[_ngcontent-%COMP%]{background-color:transparent;box-shadow:none;width:40px;padding:0;margin:0;min-width:auto;color:#fff}.cdk-drag[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]   .child-2-background[_ngcontent-%COMP%]{background-color:#cffaf4!important}.cdk-drag[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]   .child-3-background[_ngcontent-%COMP%]{background-color:#e5e8ee!important}.cdk-drag[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]   .fields-container[_ngcontent-%COMP%]{border:1px solid #dce4e9;border-radius:0 8px 8px 0;background-color:#fff;width:100%;padding:10px}.cdk-drag[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]   .fields-container[_ngcontent-%COMP%]   lib-sub-category[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;width:100%}.cdk-drag[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]   .fields-container[_ngcontent-%COMP%]   lib-sub-category[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]   .button-action[_ngcontent-%COMP%]{background-color:#6fe8d7;height:100%;margin:auto 15px auto auto;display:flex}.cdk-drag[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]   .fields-container[_ngcontent-%COMP%]   lib-sub-category[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]   .button-action[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{box-shadow:none;background-color:transparent;color:#fff}.side-bar[_ngcontent-%COMP%]{display:flex;flex-direction:column}.register-button[_ngcontent-%COMP%]{background:no-repeat padding-box #171f26!important;border:2px solid #192128!important;border-radius:8px;color:#fff!important;width:85%;margin-left:22px!important;border:none!important}"] });
    return TemplateProfileCreateComponent;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(TemplateProfileCreateComponent, [{
        type: Component,
        args: [{
                selector: "onboarding-create-profile-template",
                templateUrl: "./template-profile-create.component.html",
                styleUrls: ["./template-profile-create.component.scss"],
            }]
    }], function () { return [{ type: FormBuilder }, { type: OnboardingService }, { type: ActivatedRoute }, { type: Router }, { type: MatDialog }]; }, null); })();

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

function TemplateProfileListComponent_div_13_div_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 13);
    ɵɵelementStart(1, "mat-icon", 14);
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    var d_r594 = ɵɵnextContext().$implicit;
    ɵɵadvance(2);
    ɵɵtextInterpolate(d_r594 == null ? null : d_r594.Picto);
} }
function TemplateProfileListComponent_div_13_div_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 13);
    ɵɵelementStart(1, "h3");
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    var d_r594 = ɵɵnextContext().$implicit;
    ɵɵadvance(2);
    ɵɵtextInterpolate(d_r594.Name.substr(0, 2));
} }
var _c0$2 = function (a0) { return [a0]; };
function TemplateProfileListComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    var _r600 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 9);
    ɵɵelementStart(1, "div", 10);
    ɵɵtemplate(2, TemplateProfileListComponent_div_13_div_2_Template, 3, 1, "div", 11);
    ɵɵtemplate(3, TemplateProfileListComponent_div_13_div_3_Template, 3, 1, "div", 11);
    ɵɵelementStart(4, "p");
    ɵɵtext(5);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(6, "button", 12);
    ɵɵlistener("click", function TemplateProfileListComponent_div_13_Template_button_click_6_listener($event) { ɵɵrestoreView(_r600); var d_r594 = ctx.$implicit; var ctx_r599 = ɵɵnextContext(); return ctx_r599.onDelete($event, d_r594._id); });
    ɵɵelementStart(7, "mat-icon");
    ɵɵtext(8, "close");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    var d_r594 = ctx.$implicit;
    var ctx_r593 = ɵɵnextContext();
    ɵɵproperty("defaultElevation", 0);
    ɵɵadvance(1);
    ɵɵproperty("routerLink", ɵɵpureFunction1(6, _c0$2, ctx_r593.service.mainPath + "/template-builder/" + d_r594._id));
    ɵɵadvance(1);
    ɵɵproperty("ngIf", d_r594 == null ? null : d_r594.Picto);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !(d_r594 == null ? null : d_r594.Picto));
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", d_r594.Name, "");
    ɵɵadvance(1);
    ɵɵproperty("defaultElevation", ctx_r593.defaultElevation);
} }
var TemplateProfileListComponent = /** @class */ (function () {
    function TemplateProfileListComponent(service, router) {
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
    TemplateProfileListComponent.prototype.ngOnInit = function () {
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
    TemplateProfileListComponent.prototype.onAddProfil = function () {
        this.router.navigate(['onboarding/template-builder/0']);
    };
    TemplateProfileListComponent.prototype.onDelete = function (e, id) {
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
    TemplateProfileListComponent.prototype.getAllProfils = function (recall) {
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
    TemplateProfileListComponent.ɵfac = function TemplateProfileListComponent_Factory(t) { return new (t || TemplateProfileListComponent)(ɵɵdirectiveInject(OnboardingService), ɵɵdirectiveInject(Router)); };
    TemplateProfileListComponent.ɵcmp = ɵɵdefineComponent({ type: TemplateProfileListComponent, selectors: [["onboarding-profile-list"]], viewQuery: function TemplateProfileListComponent_Query(rf, ctx) { if (rf & 1) {
            ɵɵviewQuery(MatPaginator, true);
            ɵɵviewQuery(MatSort, true);
        } if (rf & 2) {
            var _t;
            ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.paginator = _t.first);
            ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.sort = _t.first);
        } }, decls: 14, vars: 4, consts: [[1, "main"], [1, "header-list"], [1, "title"], [1, "sub-title"], [1, "content-list"], [1, "list"], [1, "box-template", "new-template"], ["role", "button", "mat-raised-button", "", "color", "primary", 1, "add-profil", 3, "routerLink"], ["appMaterialElevation", "", "raisedElevation", "1", "class", "box-template", 3, "defaultElevation", 4, "ngFor", "ngForOf"], ["appMaterialElevation", "", "raisedElevation", "1", 1, "box-template", 3, "defaultElevation"], [1, "box-content", 3, "routerLink"], ["class", "picto-preview", 4, "ngIf"], ["mat-mini-fab", "", "color", "accent", "appMaterialElevation", "", "raisedElevation", "16", 3, "defaultElevation", "click"], [1, "picto-preview"], [2, "font-size", "50px", "width", "43%", "height", "40%"]], template: function TemplateProfileListComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵelementStart(0, "div", 0);
            ɵɵelementStart(1, "div", 1);
            ɵɵelementStart(2, "h3", 2);
            ɵɵtext(3, "Profils");
            ɵɵelementEnd();
            ɵɵelementStart(4, "p", 3);
            ɵɵtext(5, "Retrouvez ici, l\u2019ensemble des profils d\u2019onboarding que vous avez cr\u00E9\u00E9s");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(6, "div", 4);
            ɵɵelementStart(7, "div", 5);
            ɵɵelementStart(8, "div", 6);
            ɵɵelementStart(9, "p");
            ɵɵtext(10, "Nouveau profil");
            ɵɵelementEnd();
            ɵɵelementStart(11, "a", 7);
            ɵɵtext(12, " Cr\u00E9er un nouveau profil ");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵtemplate(13, TemplateProfileListComponent_div_13_Template, 9, 8, "div", 8);
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
        } if (rf & 2) {
            ɵɵadvance(11);
            ɵɵproperty("routerLink", ɵɵpureFunction1(2, _c0$2, ctx.service.mainPath + "/template-builder/0"));
            ɵɵadvance(2);
            ɵɵproperty("ngForOf", ctx.datas);
        } }, directives: [MatAnchor, RouterLinkWithHref, NgForOf, MaterialElevationDirective, RouterLink, NgIf, MatButton, MatIcon], styles: [".main[_ngcontent-%COMP%]{background:no-repeat padding-box #f4f7f9;opacity:1;height:100%}.main[_ngcontent-%COMP%]   .header-list[_ngcontent-%COMP%]{margin-left:50px;padding-top:10px}.main[_ngcontent-%COMP%]   .header-list[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{text-align:left;font:bold 32px/30px Nexa Text;letter-spacing:0;color:#171f26;opacity:1}.main[_ngcontent-%COMP%]   .header-list[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{text-align:left;font:20px/26px Nexa Text;letter-spacing:0;color:#171f26;opacity:1;max-width:300px}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]{background-color:#fff;border-radius:8px;opacity:1;margin:57px;height:80%;padding:49px}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{text-align:left;font:bold 23px/30px Nexa Text;letter-spacing:0;color:#171f26;opacity:1;margin-bottom:0;margin-top:0}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   p.sub-title[_ngcontent-%COMP%]{margin-bottom:57px;font:20px/26px Nexa Text;letter-spacing:0;color:#171f26;width:300px}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .box-template[_ngcontent-%COMP%]{width:328px;position:relative;height:228px;margin-right:50px;margin-bottom:50px;background:no-repeat padding-box #f4f7f9;border:1px solid #dce4e9;border-radius:6px;opacity:1;display:flex;flex-direction:column;justify-content:center;align-items:center;cursor:pointer}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .box-template[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:81px;height:81px}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .box-template[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{text-align:center;font:bold 16px/25px Nexa Text;letter-spacing:.1px;color:#000;opacity:1;margin-top:17px}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .box-template[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{background:no-repeat padding-box #171f26;border-radius:7px;font-size:15px}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .box-template[_ngcontent-%COMP%]   .mat-mini-fab[_ngcontent-%COMP%]{display:none}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .box-template[_ngcontent-%COMP%]   .box-content[_ngcontent-%COMP%]{width:100%;height:90%;text-align:center;margin-top:10%}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .box-template[_ngcontent-%COMP%]   .box-content[_ngcontent-%COMP%]   .picto-preview[_ngcontent-%COMP%]{width:113px;height:113px;background:no-repeat padding-box #fff;margin:auto;border-radius:113px;display:flex;align-items:center;justify-content:center}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .box-template[_ngcontent-%COMP%]   .box-content[_ngcontent-%COMP%]   .picto-preview[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:40px;color:#dce4e9}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .new-template[_ngcontent-%COMP%]{border:1px solid #dce4e9;border-radius:6px;background-color:transparent}  .box-template:hover .mat-mini-fab .mat-button-wrapper{padding:0!important;display:inline-block;line-height:0}  .box-template:hover .mat-mini-fab{display:initial!important;position:absolute;right:6px;top:7px;background-color:red;width:25px;height:25px}  .box-template:hover .mat-mini-fab .mat-icon{background-repeat:no-repeat;display:inline-block;fill:currentColor;height:37px;width:24px}"] });
    return TemplateProfileListComponent;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(TemplateProfileListComponent, [{
        type: Component,
        args: [{
                selector: 'onboarding-profile-list',
                templateUrl: './template-profile-list.component.html',
                styleUrls: ['./template-profile-list.component.scss']
            }]
    }], function () { return [{ type: OnboardingService }, { type: Router }]; }, { paginator: [{
            type: ViewChild,
            args: [MatPaginator]
        }], sort: [{
            type: ViewChild,
            args: [MatSort]
        }] }); })();

var CanDeactivateGuard = /** @class */ (function () {
    function CanDeactivateGuard() {
    }
    CanDeactivateGuard.prototype.canDeactivate = function (component, route, state) {
        //let url: string = state.url;
        return component.canDeactivate ? component.canDeactivate() : true;
    };
    CanDeactivateGuard.ɵfac = function CanDeactivateGuard_Factory(t) { return new (t || CanDeactivateGuard)(); };
    CanDeactivateGuard.ɵprov = ɵɵdefineInjectable({ token: CanDeactivateGuard, factory: CanDeactivateGuard.ɵfac });
    return CanDeactivateGuard;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(CanDeactivateGuard, [{
        type: Injectable
    }], null, null); })();

var _c0$3 = function () { return { standalone: true }; };
function SubOnboardingCreateComponent_div_2_div_1_Template(rf, ctx) { if (rf & 1) {
    var _r695 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 5);
    ɵɵelementStart(1, "mat-checkbox", 6);
    ɵɵlistener("ngModelChange", function SubOnboardingCreateComponent_div_2_div_1_Template_mat_checkbox_ngModelChange_1_listener($event) { ɵɵrestoreView(_r695); var ctx_r694 = ɵɵnextContext(2); return ctx_r694.field.value = $event; });
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r693 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵclassMap(ctx_r693.checkSubForm(ctx_r693.field) ? "checkbox-title-active" : "");
    ɵɵproperty("ngModel", ctx_r693.field.value)("required", ctx_r693.field.isMandatory)("ngModelOptions", ɵɵpureFunction0(6, _c0$3));
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ctx_r693.field.label, " ");
} }
function SubOnboardingCreateComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 5);
    ɵɵtemplate(1, SubOnboardingCreateComponent_div_2_div_1_Template, 3, 7, "div", 2);
    ɵɵelementEnd();
} if (rf & 2) {
    ɵɵadvance(1);
    ɵɵproperty("ngSwitchCase", "checkbox");
} }
function SubOnboardingCreateComponent_div_3_mat_checkbox_4_Template(rf, ctx) { if (rf & 1) {
    var _r699 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "mat-checkbox", 9);
    ɵɵlistener("ngModelChange", function SubOnboardingCreateComponent_div_3_mat_checkbox_4_Template_mat_checkbox_ngModelChange_0_listener($event) { ɵɵrestoreView(_r699); var opt_r697 = ctx.$implicit; return opt_r697.checked = $event; });
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    var opt_r697 = ctx.$implicit;
    var ctx_r696 = ɵɵnextContext(2);
    ɵɵproperty("checked", opt_r697.checked)("ngModel", opt_r697.checked)("required", ctx_r696.field.isMandatory)("ngModelOptions", ɵɵpureFunction0(5, _c0$3));
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", opt_r697.value, " ");
} }
function SubOnboardingCreateComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 5);
    ɵɵelementStart(1, "label");
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementStart(3, "div", 7);
    ɵɵtemplate(4, SubOnboardingCreateComponent_div_3_mat_checkbox_4_Template, 2, 6, "mat-checkbox", 8);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r688 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵtextInterpolate(ctx_r688.field.label);
    ɵɵadvance(2);
    ɵɵproperty("ngForOf", ctx_r688.field.defaultValue);
} }
function SubOnboardingCreateComponent_div_4_mat_radio_button_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-radio-button", 14);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    var opt_r702 = ctx.$implicit;
    ɵɵproperty("value", opt_r702.value);
    ɵɵadvance(1);
    ɵɵtextInterpolate1("", opt_r702.value, " ");
} }
function SubOnboardingCreateComponent_div_4_mat_form_field_5_Template(rf, ctx) { if (rf & 1) {
    var _r704 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "mat-form-field", 15);
    ɵɵelementStart(1, "mat-label");
    ɵɵtext(2, "Autre option");
    ɵɵelementEnd();
    ɵɵelementStart(3, "input", 16);
    ɵɵlistener("ngModelChange", function SubOnboardingCreateComponent_div_4_mat_form_field_5_Template_input_ngModelChange_3_listener($event) { ɵɵrestoreView(_r704); var ctx_r703 = ɵɵnextContext(2); return ctx_r703.field.otherValue = $event; });
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r701 = ɵɵnextContext(2);
    ɵɵadvance(3);
    ɵɵproperty("required", ctx_r701.field.isMandatory)("ngModelOptions", ɵɵpureFunction0(3, _c0$3))("ngModel", ctx_r701.field.otherValue);
} }
function SubOnboardingCreateComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    var _r706 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 5);
    ɵɵelementStart(1, "label", 10);
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementStart(3, "mat-radio-group", 11);
    ɵɵlistener("ngModelChange", function SubOnboardingCreateComponent_div_4_Template_mat_radio_group_ngModelChange_3_listener($event) { ɵɵrestoreView(_r706); var ctx_r705 = ɵɵnextContext(); return ctx_r705.field.value = $event; });
    ɵɵtemplate(4, SubOnboardingCreateComponent_div_4_mat_radio_button_4_Template, 2, 2, "mat-radio-button", 12);
    ɵɵelementEnd();
    ɵɵtemplate(5, SubOnboardingCreateComponent_div_4_mat_form_field_5_Template, 4, 4, "mat-form-field", 13);
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r689 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ctx_r689.field.label, " ");
    ɵɵadvance(1);
    ɵɵproperty("ngModel", ctx_r689.field.value)("required", ctx_r689.field.isMandatory);
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ctx_r689.field.defaultValue);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", "autre" === ctx_r689.formatOther(ctx_r689.field.value));
} }
function SubOnboardingCreateComponent_div_5_mat_option_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-option", 14);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    var opt_r709 = ctx.$implicit;
    ɵɵproperty("value", opt_r709.value);
    ɵɵadvance(1);
    ɵɵtextInterpolate(opt_r709.value);
} }
function SubOnboardingCreateComponent_div_5_mat_form_field_6_Template(rf, ctx) { if (rf & 1) {
    var _r711 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "mat-form-field", 15);
    ɵɵelementStart(1, "mat-label");
    ɵɵtext(2, "Autre option");
    ɵɵelementEnd();
    ɵɵelementStart(3, "input", 16);
    ɵɵlistener("ngModelChange", function SubOnboardingCreateComponent_div_5_mat_form_field_6_Template_input_ngModelChange_3_listener($event) { ɵɵrestoreView(_r711); var ctx_r710 = ɵɵnextContext(2); return ctx_r710.field.otherValue = $event; });
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r708 = ɵɵnextContext(2);
    ɵɵadvance(3);
    ɵɵproperty("required", ctx_r708.field.isMandatory)("ngModelOptions", ɵɵpureFunction0(3, _c0$3))("ngModel", ctx_r708.field.otherValue);
} }
function SubOnboardingCreateComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    var _r713 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 5);
    ɵɵelementStart(1, "mat-form-field", 17);
    ɵɵelementStart(2, "mat-label");
    ɵɵtext(3);
    ɵɵelementEnd();
    ɵɵelementStart(4, "mat-select", 18);
    ɵɵlistener("ngModelChange", function SubOnboardingCreateComponent_div_5_Template_mat_select_ngModelChange_4_listener($event) { ɵɵrestoreView(_r713); var ctx_r712 = ɵɵnextContext(); return ctx_r712.field.value = $event; });
    ɵɵtemplate(5, SubOnboardingCreateComponent_div_5_mat_option_5_Template, 2, 2, "mat-option", 12);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵtemplate(6, SubOnboardingCreateComponent_div_5_mat_form_field_6_Template, 4, 4, "mat-form-field", 13);
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r690 = ɵɵnextContext();
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ctx_r690.field.label, " ");
    ɵɵadvance(1);
    ɵɵproperty("ngModel", ctx_r690.field.value)("ngModelOptions", ɵɵpureFunction0(6, _c0$3))("required", ctx_r690.field.isMandatory);
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ctx_r690.field.defaultValue);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", "autre" === ctx_r690.formatOther(ctx_r690.field.value));
} }
function SubOnboardingCreateComponent_mat_form_field_6_Template(rf, ctx) { if (rf & 1) {
    var _r715 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "mat-form-field", 19);
    ɵɵelementStart(1, "mat-label");
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementStart(3, "textarea", 20);
    ɵɵlistener("ngModelChange", function SubOnboardingCreateComponent_mat_form_field_6_Template_textarea_ngModelChange_3_listener($event) { ɵɵrestoreView(_r715); var ctx_r714 = ɵɵnextContext(); return ctx_r714.field.value = $event; });
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r691 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵtextInterpolate(ctx_r691.field.label);
    ɵɵadvance(1);
    ɵɵproperty("required", ctx_r691.field.isMandatory)("ngModelOptions", ɵɵpureFunction0(4, _c0$3))("ngModel", ctx_r691.field.value);
} }
function SubOnboardingCreateComponent_mat_form_field_7_Template(rf, ctx) { if (rf & 1) {
    var _r717 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "mat-form-field", 21);
    ɵɵelementStart(1, "mat-label");
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementStart(3, "input", 22);
    ɵɵlistener("ngModelChange", function SubOnboardingCreateComponent_mat_form_field_7_Template_input_ngModelChange_3_listener($event) { ɵɵrestoreView(_r717); var ctx_r716 = ɵɵnextContext(); return ctx_r716.field.value = $event; });
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r692 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵtextInterpolate(ctx_r692.field.label);
    ɵɵadvance(1);
    ɵɵproperty("type", ctx_r692.field.type)("required", ctx_r692.field.isMandatory)("ngModelOptions", ɵɵpureFunction0(5, _c0$3))("ngModel", ctx_r692.field.value);
} }
var _c1$1 = [[["", 8, "child"]]];
var _c2$1 = [".child"];
var SubOnboardingCreateComponent = /** @class */ (function () {
    function SubOnboardingCreateComponent() {
        var _this = this;
        this.onAddKeywordFromInput = new EventEmitter();
        this.onKeyPress = new EventEmitter();
        this.onDrop = new EventEmitter();
        this.onAddNewField = new EventEmitter();
        this.onRemoveField = new EventEmitter();
        this.onChangeType = new EventEmitter();
        this.onRemoveKeyword = new EventEmitter();
        this.onAddNewSubLevelField = new EventEmitter();
        this.onExpendMore = new EventEmitter();
        this.onChangeLabel = new EventEmitter();
        this.onCheckedChip = new EventEmitter();
        this.chipControl = new FormControl(new Set());
        this.separatorKeysCodes = [ENTER, COMMA, SEMICOLON];
        this.currentChip = "";
        this.prevValue = "";
        this.toggleChip = function (chip) {
            _this.onCheckedChip.emit(chip);
            // const addChip = () => { this.chips.add(chip); };
            // const removeChip = () => { this.chips.delete(chip); };
            // this.chips.has(chip) ? removeChip() : addChip();
        };
    }
    SubOnboardingCreateComponent.prototype.ngOnInit = function () {
    };
    SubOnboardingCreateComponent.prototype.drop = function (event) {
        this.onDrop.emit(event);
    };
    SubOnboardingCreateComponent.prototype.addKeywordFromInput = function (event, i, j) {
        this.onAddKeywordFromInput.emit({ event: event, prev: this.prevValue, i: i, j: j });
    };
    SubOnboardingCreateComponent.prototype.keyUp = function (event, i, j) {
        this.onKeyPress.emit({ event: event, i: i, j: j });
    };
    SubOnboardingCreateComponent.prototype.addNewField = function (event, i) {
        event.preventDefault();
        this.onAddNewField.emit({ event: event, i: i });
    };
    SubOnboardingCreateComponent.prototype.removeField = function (event, i, j) {
        event.preventDefault();
        this.onRemoveField.emit({ i: i, j: j });
    };
    SubOnboardingCreateComponent.prototype.changeType = function (type, i, j) {
        this.onChangeType.emit({ type: type, i: i, j: j });
    };
    SubOnboardingCreateComponent.prototype.removeKeyword = function (event, i, j) {
        this.onRemoveKeyword.emit({ event: event, i: i, j: j });
    };
    SubOnboardingCreateComponent.prototype.addNewSubLevelField = function (e) {
        e.preventDefault();
        this.onAddNewSubLevelField.emit(true);
    };
    SubOnboardingCreateComponent.prototype.expendMore = function (e, field) {
        e.preventDefault();
        this.onExpendMore.emit({ expand: true, field: field });
    };
    SubOnboardingCreateComponent.prototype.ingoreDefaultAction = function (e) {
        e.preventDefault();
    };
    SubOnboardingCreateComponent.prototype.changeLabel = function (label, key) {
        this.onChangeLabel.emit({ label: label, key: key });
    };
    SubOnboardingCreateComponent.prototype.onEditChip = function (chip) {
        if (chip.value === this.currentChip) {
            this.currentChip = "";
            this.prevValue = "";
        }
        else {
            this.currentChip = chip.value;
            this.prevValue = chip.value;
        }
    };
    Object.defineProperty(SubOnboardingCreateComponent.prototype, "chips", {
        get: function () { return this.chipControl.value; },
        enumerable: true,
        configurable: true
    });
    SubOnboardingCreateComponent.prototype.formatOther = function (other) {
        if (other) {
            return other.toLocaleLowerCase();
        }
        return '';
    };
    SubOnboardingCreateComponent.prototype.checkSubForm = function (forms) {
        var hasSubForm = false;
        if (forms.forms && forms.forms.length) {
            hasSubForm = true;
        }
        return hasSubForm;
    };
    SubOnboardingCreateComponent.ɵfac = function SubOnboardingCreateComponent_Factory(t) { return new (t || SubOnboardingCreateComponent)(); };
    SubOnboardingCreateComponent.ɵcmp = ɵɵdefineComponent({ type: SubOnboardingCreateComponent, selectors: [["lib-sub-create-onboarding"]], inputs: { field: "field", length: "length", i: "i", j: "j" }, outputs: { onAddKeywordFromInput: "onAddKeywordFromInput", onKeyPress: "onKeyPress", onDrop: "onDrop", onAddNewField: "onAddNewField", onRemoveField: "onRemoveField", onChangeType: "onChangeType", onRemoveKeyword: "onRemoveKeyword", onAddNewSubLevelField: "onAddNewSubLevelField", onExpendMore: "onExpendMore", onChangeLabel: "onChangeLabel", onCheckedChip: "onCheckedChip" }, ngContentSelectors: _c2$1, decls: 9, vars: 6, consts: [[1, "field-item"], [3, "ngSwitch"], ["class", "flex-auto w-30 field-size", 4, "ngSwitchCase"], ["class", "form-field full-width", "appearance", "outline", 4, "ngSwitchCase"], ["class", "form-field field-size", "appearance", "outline", 4, "ngSwitchDefault"], [1, "flex-auto", "w-30", "field-size"], [1, "form-field", 3, "ngModel", "required", "ngModelOptions", "ngModelChange"], [2, "margin-top", "20px", "display", "block"], ["class", "form-field", 3, "checked", "ngModel", "required", "ngModelOptions", "ngModelChange", 4, "ngFor", "ngForOf"], [1, "form-field", 3, "checked", "ngModel", "required", "ngModelOptions", "ngModelChange"], [2, "display", "block"], ["aria-label", "Select an option", 1, "form-field", "radio-group", "field-size", 3, "ngModel", "required", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], ["class", "form-field field-size other-option", "appearance", "outline", 4, "ngIf"], [3, "value"], ["appearance", "outline", 1, "form-field", "field-size", "other-option"], ["type", "text", "matInput", "", "placeholder", "", 3, "required", "ngModelOptions", "ngModel", "ngModelChange"], ["appearance", "outline", 1, "flex-auto", "w-30", "field-size"], [3, "ngModel", "ngModelOptions", "required", "ngModelChange"], ["appearance", "outline", 1, "form-field", "full-width"], ["type", "text", "rows", "5", "matInput", "", "placeholder", "Description...", 3, "required", "ngModelOptions", "ngModel", "ngModelChange"], ["appearance", "outline", 1, "form-field", "field-size"], ["matInput", "", "placeholder", "", 3, "type", "required", "ngModelOptions", "ngModel", "ngModelChange"]], template: function SubOnboardingCreateComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵprojectionDef(_c1$1);
            ɵɵelementStart(0, "div", 0);
            ɵɵelementContainerStart(1, 1);
            ɵɵtemplate(2, SubOnboardingCreateComponent_div_2_Template, 2, 1, "div", 2);
            ɵɵtemplate(3, SubOnboardingCreateComponent_div_3_Template, 5, 2, "div", 2);
            ɵɵtemplate(4, SubOnboardingCreateComponent_div_4_Template, 6, 5, "div", 2);
            ɵɵtemplate(5, SubOnboardingCreateComponent_div_5_Template, 7, 7, "div", 2);
            ɵɵtemplate(6, SubOnboardingCreateComponent_mat_form_field_6_Template, 4, 5, "mat-form-field", 3);
            ɵɵtemplate(7, SubOnboardingCreateComponent_mat_form_field_7_Template, 4, 6, "mat-form-field", 4);
            ɵɵelementContainerEnd();
            ɵɵelementEnd();
            ɵɵprojection(8);
        } if (rf & 2) {
            ɵɵadvance(1);
            ɵɵproperty("ngSwitch", ctx.field.type);
            ɵɵadvance(1);
            ɵɵproperty("ngSwitchCase", "checkbox");
            ɵɵadvance(1);
            ɵɵproperty("ngSwitchCase", "checkbox_multiple");
            ɵɵadvance(1);
            ɵɵproperty("ngSwitchCase", "radio");
            ɵɵadvance(1);
            ɵɵproperty("ngSwitchCase", "select");
            ɵɵadvance(1);
            ɵɵproperty("ngSwitchCase", "textarea");
        } }, directives: [NgSwitch, NgSwitchCase, NgSwitchDefault, MatCheckbox, MatCheckboxRequiredValidator, NgControlStatus, NgModel, RequiredValidator, NgForOf, MatRadioGroup, NgIf, MatRadioButton, MatFormField, MatLabel, MatInput, DefaultValueAccessor, MatSelect, MatOption], styles: [".container[_ngcontent-%COMP%]{max-width:98%;margin:50px auto auto;padding-bottom:50px}.container[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:space-between}.input-category-name[_ngcontent-%COMP%]{font-size:15px;font-weight:500}.full-width[_ngcontent-%COMP%]{width:100%}.field-item[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;width:100%;flex-wrap:wrap;min-width:250px;position:relative}.field-item[_ngcontent-%COMP%]   .button-action[_ngcontent-%COMP%]{background-color:#6fe8d7;height:100%;margin:auto 15px auto auto;display:flex}.field-item[_ngcontent-%COMP%]   .button-action[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{box-shadow:none;background-color:transparent;color:#fff}.field-action[_ngcontent-%COMP%]{width:10%}.field-size[_ngcontent-%COMP%]   mat-checkbox[_ngcontent-%COMP%]{margin:20px}hr[_ngcontent-%COMP%]{margin:50px 0}  .mat-form-field-appearance-fill .mat-form-field-flex{background-color:#fff}.category-action[_ngcontent-%COMP%]{display:flex;width:100%}.delete-field[_ngcontent-%COMP%]{margin:auto 2%}.radio-group[_ngcontent-%COMP%]   .mat-radio-button[_ngcontent-%COMP%]{margin-right:10px}.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary[_ngcontent-%COMP%]{background-color:#3f51b5;color:#fff;min-height:20px;font-size:10px}.move-icons[_ngcontent-%COMP%]{cursor:move}.category-item[_ngcontent-%COMP%]{display:flex;align-items:baseline;width:100%;border:1px solid #dce4e9;border-radius:8px}  mat-checkbox.form-field .mat-checkbox-checkmark-path{stroke:#000!important}  .readonly.mat-form-field-appearance-outline .mat-form-field-outline{color:transparent!important}.field-content[_ngcontent-%COMP%]{width:100%}.cdk-drag-preview[_ngcontent-%COMP%]{box-sizing:border-box;border-radius:4px;box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.cdk-drag-placeholder[_ngcontent-%COMP%]{opacity:0}.cdk-drag-animating[_ngcontent-%COMP%], .example-list.cdk-drop-list-dragging[_ngcontent-%COMP%]   .category-item[_ngcontent-%COMP%]:not(.cdk-drag-placeholder){transition:transform 250ms cubic-bezier(0,0,.2,1)}  .mat-form-field-appearance-fill.mat-form-field-disabled .mat-form-field-flex{background-color:rgba(0,0,0,.02);margin-bottom:-20px}  .mat-select{padding:0}.add-button-container[_ngcontent-%COMP%]{background:no-repeat padding-box #fff;border:1px dashed #dce4e9;border-radius:8px;margin-top:10px;padding:10px;display:flex;justify-content:center;align-items:center;width:98%;margin-left:0;margin-bottom:22px}.add-button-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{display:flex;align-items:center;background-color:transparent;border:none;cursor:pointer;font:17px/26px Nexa Text;letter-spacing:0;color:#c2c8d5;box-shadow:none}.expand-button[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%]{font-size:48px;margin-top:-20px;margin-right:15px}.transparent-button[_ngcontent-%COMP%]{background-color:transparent!important;box-shadow:none!important;width:40px!important;padding:0!important;margin:0!important;min-width:auto!important}.expand-button[_ngcontent-%COMP%]{color:#5a607f!important;background-color:transparent!important;box-shadow:none!important}.checkbox-title-active[_ngcontent-%COMP%]{font-weight:700}.other-option[_ngcontent-%COMP%]{margin-left:10px}"] });
    return SubOnboardingCreateComponent;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(SubOnboardingCreateComponent, [{
        type: Component,
        args: [{
                selector: 'lib-sub-create-onboarding',
                templateUrl: './sub-onboarding-create.component.html',
                styleUrls: ['./sub-onboarding-create.component.scss']
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
        }], onChangeLabel: [{
            type: Output
        }], onCheckedChip: [{
            type: Output
        }] }); })();

function OnboardingCreateComponent_div_3_mat_option_10_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-option", 10);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    var template_r646 = ctx.$implicit;
    ɵɵproperty("value", template_r646._id);
    ɵɵadvance(1);
    ɵɵtextInterpolate1("", template_r646.Name, " ");
} }
function OnboardingCreateComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    var _r648 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 4);
    ɵɵelementStart(1, "h3");
    ɵɵtext(2, " Onboarding de votre nouveau collaborateur ");
    ɵɵelementEnd();
    ɵɵelementStart(3, "p");
    ɵɵtext(4, "S\u00E9lectionnez le nom de votre profil afin de pouvoir d\u00E9marrer son onboarding.");
    ɵɵelementEnd();
    ɵɵelementStart(5, "div", 5);
    ɵɵelementStart(6, "mat-form-field", 6);
    ɵɵelementStart(7, "mat-label");
    ɵɵtext(8, "Profil");
    ɵɵelementEnd();
    ɵɵelementStart(9, "mat-select", 7);
    ɵɵlistener("selectionChange", function OnboardingCreateComponent_div_3_Template_mat_select_selectionChange_9_listener($event) { ɵɵrestoreView(_r648); var ctx_r647 = ɵɵnextContext(); return ctx_r647.onSelect($event.value); });
    ɵɵtemplate(10, OnboardingCreateComponent_div_3_mat_option_10_Template, 2, 2, "mat-option", 8);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(11, "button", 9);
    ɵɵlistener("click", function OnboardingCreateComponent_div_3_Template_button_click_11_listener() { ɵɵrestoreView(_r648); var ctx_r649 = ɵɵnextContext(); return ctx_r649.onSelectContactTemplate(); });
    ɵɵtext(12);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r643 = ɵɵnextContext();
    var tmp_1_0 = null;
    var currVal_1 = ((tmp_1_0 = ctx_r643.form.get("TemplateId")) == null ? null : tmp_1_0.value) == "" ? 0.4 : 1;
    var tmp_2_0 = null;
    var currVal_2 = ((tmp_2_0 = ctx_r643.form.get("TemplateId")) == null ? null : tmp_2_0.value) == "";
    ɵɵadvance(10);
    ɵɵproperty("ngForOf", ctx_r643.templates);
    ɵɵadvance(1);
    ɵɵstyleProp("opacity", currVal_1);
    ɵɵproperty("disabled", currVal_2);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ctx_r643.id !== "0" ? "Modifier l\u2019onboarding" : "D\u00E9marrer l\u2019onboarding", " ");
} }
function OnboardingCreateComponent_div_4_li_6_mat_icon_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-icon");
    ɵɵtext(1, "keyboard_arrow_right");
    ɵɵelementEnd();
} }
function OnboardingCreateComponent_div_4_li_6_Template(rf, ctx) { if (rf & 1) {
    var _r656 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "li", 20);
    ɵɵlistener("click", function OnboardingCreateComponent_div_4_li_6_Template_li_click_0_listener() { ɵɵrestoreView(_r656); var i_r653 = ctx.index; var ctx_r655 = ɵɵnextContext(2); return ctx_r655.onSelectMenu(i_r653); });
    ɵɵelementStart(1, "span");
    ɵɵelementStart(2, "span", 21);
    ɵɵtext(3);
    ɵɵelementEnd();
    ɵɵtemplate(4, OnboardingCreateComponent_div_4_li_6_mat_icon_4_Template, 2, 0, "mat-icon", 22);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    var cat_r652 = ctx.$implicit;
    var i_r653 = ctx.index;
    var ctx_r650 = ɵɵnextContext(2);
    ɵɵclassMap(ctx_r650.selectedMenu === i_r653 ? "active" : "");
    ɵɵadvance(2);
    ɵɵproperty("ngxScrollTo", "#" + cat_r652.name);
    ɵɵadvance(1);
    ɵɵtextInterpolate(cat_r652.name);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r650.checkSubForm(cat_r652.forms));
} }
function OnboardingCreateComponent_div_4_div_11_div_7_div_1_div_5_div_1_div_1_div_5_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    var _r674 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 31);
    ɵɵelementStart(1, "div", 32);
    ɵɵelementStart(2, "div", 33);
    ɵɵelementStart(3, "lib-sub-create-onboarding", 34);
    ɵɵlistener("onDrop", function OnboardingCreateComponent_div_4_div_11_div_7_div_1_div_5_div_1_div_1_div_5_div_1_div_1_Template_lib_sub_create_onboarding_onDrop_3_listener($event) { ɵɵrestoreView(_r674); var ctx_r673 = ɵɵnextContext(10); return ctx_r673.drop($event); });
    ɵɵelement(4, "div", 35);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r675 = ɵɵnextContext();
    var c2_r670 = ctx_r675.$implicit;
    var l_r671 = ctx_r675.index;
    var ctx_r676 = ɵɵnextContext(3);
    var child_r665 = ctx_r676.$implicit;
    var k_r666 = ctx_r676.index;
    ɵɵadvance(3);
    ɵɵproperty("field", c2_r670)("length", child_r665 == null ? null : child_r665.forms == null ? null : child_r665.forms.length)("i", k_r666)("j", l_r671);
} }
function OnboardingCreateComponent_div_4_div_11_div_7_div_1_div_5_div_1_div_1_div_5_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 39);
    ɵɵtemplate(1, OnboardingCreateComponent_div_4_div_11_div_7_div_1_div_5_div_1_div_1_div_5_div_1_div_1_Template, 5, 4, "div", 30);
    ɵɵelementEnd();
} if (rf & 2) {
    var c2_r670 = ctx.$implicit;
    var ctx_r669 = ɵɵnextContext(9);
    ɵɵproperty("id", c2_r670.key);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", c2_r670.expandOnboarding && ctx_r669.onCheckConditionLocationValue(c2_r670.isConditional, c2_r670.conditionLocation, c2_r670.conditionValue));
} }
function OnboardingCreateComponent_div_4_div_11_div_7_div_1_div_5_div_1_div_1_div_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 37);
    ɵɵtemplate(1, OnboardingCreateComponent_div_4_div_11_div_7_div_1_div_5_div_1_div_1_div_5_div_1_Template, 2, 2, "div", 38);
    ɵɵelementEnd();
} if (rf & 2) {
    var child_r665 = ɵɵnextContext(2).$implicit;
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", child_r665.forms);
} }
function OnboardingCreateComponent_div_4_div_11_div_7_div_1_div_5_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    var _r679 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 31);
    ɵɵelementStart(1, "div", 32);
    ɵɵelementStart(2, "div", 33);
    ɵɵelementStart(3, "lib-sub-create-onboarding", 34);
    ɵɵlistener("onDrop", function OnboardingCreateComponent_div_4_div_11_div_7_div_1_div_5_div_1_div_1_Template_lib_sub_create_onboarding_onDrop_3_listener($event) { ɵɵrestoreView(_r679); var ctx_r678 = ɵɵnextContext(7); return ctx_r678.drop($event); });
    ɵɵelementStart(4, "div", 35);
    ɵɵtemplate(5, OnboardingCreateComponent_div_4_div_11_div_7_div_1_div_5_div_1_div_1_div_5_Template, 2, 1, "div", 36);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r680 = ɵɵnextContext();
    var child_r665 = ctx_r680.$implicit;
    var k_r666 = ctx_r680.index;
    var ctx_r681 = ɵɵnextContext(3);
    var field_r660 = ctx_r681.$implicit;
    var j_r661 = ctx_r681.index;
    ɵɵadvance(3);
    ɵɵproperty("field", child_r665)("length", field_r660 == null ? null : field_r660.forms == null ? null : field_r660.forms.length)("i", j_r661)("j", k_r666);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", child_r665.forms);
} }
function OnboardingCreateComponent_div_4_div_11_div_7_div_1_div_5_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 39);
    ɵɵtemplate(1, OnboardingCreateComponent_div_4_div_11_div_7_div_1_div_5_div_1_div_1_Template, 6, 5, "div", 30);
    ɵɵelementEnd();
} if (rf & 2) {
    var child_r665 = ctx.$implicit;
    var ctx_r664 = ɵɵnextContext(6);
    ɵɵproperty("id", child_r665.key);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", child_r665.expandOnboarding && ctx_r664.onCheckConditionLocationValue(child_r665.isConditional, child_r665.conditionLocation, child_r665.conditionValue));
} }
function OnboardingCreateComponent_div_4_div_11_div_7_div_1_div_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 37);
    ɵɵtemplate(1, OnboardingCreateComponent_div_4_div_11_div_7_div_1_div_5_div_1_Template, 2, 2, "div", 38);
    ɵɵelementEnd();
} if (rf & 2) {
    var field_r660 = ɵɵnextContext(2).$implicit;
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", field_r660.forms);
} }
function OnboardingCreateComponent_div_4_div_11_div_7_div_1_Template(rf, ctx) { if (rf & 1) {
    var _r684 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 31);
    ɵɵelementStart(1, "div", 32);
    ɵɵelementStart(2, "div", 33);
    ɵɵelementStart(3, "lib-sub-create-onboarding", 34);
    ɵɵlistener("onDrop", function OnboardingCreateComponent_div_4_div_11_div_7_div_1_Template_lib_sub_create_onboarding_onDrop_3_listener($event) { ɵɵrestoreView(_r684); var ctx_r683 = ɵɵnextContext(4); return ctx_r683.drop($event); });
    ɵɵelementStart(4, "div", 35);
    ɵɵtemplate(5, OnboardingCreateComponent_div_4_div_11_div_7_div_1_div_5_Template, 2, 1, "div", 36);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r685 = ɵɵnextContext();
    var field_r660 = ctx_r685.$implicit;
    var j_r661 = ctx_r685.index;
    var ctx_r686 = ɵɵnextContext();
    var category_r657 = ctx_r686.$implicit;
    var i_r658 = ctx_r686.index;
    ɵɵadvance(3);
    ɵɵproperty("field", field_r660)("length", category_r657 == null ? null : category_r657.forms == null ? null : category_r657.forms.length)("i", i_r658)("j", j_r661);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", field_r660.forms);
} }
function OnboardingCreateComponent_div_4_div_11_div_7_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 29);
    ɵɵtemplate(1, OnboardingCreateComponent_div_4_div_11_div_7_div_1_Template, 6, 5, "div", 30);
    ɵɵelementEnd();
} if (rf & 2) {
    var field_r660 = ctx.$implicit;
    var ctx_r659 = ɵɵnextContext(3);
    ɵɵproperty("id", field_r660.key);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", field_r660.expandOnboarding && ctx_r659.onCheckConditionLocationValue(field_r660.isConditional, field_r660.conditionLocation, field_r660.conditionValue));
} }
function OnboardingCreateComponent_div_4_div_11_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 23);
    ɵɵelementStart(1, "div", 24);
    ɵɵelementStart(2, "div", 25);
    ɵɵelementStart(3, "h4", 26);
    ɵɵtext(4);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(5, "div", 27);
    ɵɵelementContainerStart(6);
    ɵɵtemplate(7, OnboardingCreateComponent_div_4_div_11_div_7_Template, 2, 2, "div", 28);
    ɵɵelementContainerEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    var category_r657 = ctx.$implicit;
    ɵɵproperty("id", category_r657.name);
    ɵɵadvance(4);
    ɵɵtextInterpolate(category_r657.name);
    ɵɵadvance(3);
    ɵɵproperty("ngForOf", category_r657.forms);
} }
function OnboardingCreateComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 11);
    ɵɵelementStart(1, "div", 12);
    ɵɵelementStart(2, "div", 13);
    ɵɵelementStart(3, "h3", 14);
    ɵɵtext(4);
    ɵɵelementEnd();
    ɵɵelementStart(5, "ol");
    ɵɵtemplate(6, OnboardingCreateComponent_div_4_li_6_Template, 5, 5, "li", 15);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(7, "button", 16);
    ɵɵtext(8, " Soumettre ma fiche de poste ");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(9, "div", 17);
    ɵɵelementStart(10, "div", 18);
    ɵɵtemplate(11, OnboardingCreateComponent_div_4_div_11_Template, 8, 3, "div", 19);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r644 = ɵɵnextContext();
    ɵɵadvance(4);
    ɵɵtextInterpolate1(" ", ctx_r644.currentTemplate == null ? null : ctx_r644.currentTemplate.Name, " ");
    ɵɵadvance(2);
    ɵɵproperty("ngForOf", ctx_r644.categories);
    ɵɵadvance(5);
    ɵɵproperty("ngForOf", ctx_r644.categories);
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
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var _b;
            var _this = this;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        this.onCreateDynamicForm();
                        this.id = this.route.snapshot.paramMap.get("id");
                        return [4 /*yield*/, this.service.getAllProfil()];
                    case 1:
                        _c.sent();
                        this.service._templates.subscribe(function (data) {
                            _this.templates = data;
                        });
                        this.id = this.route.snapshot.paramMap.get("id");
                        if (!(this.id !== "0")) return [3 /*break*/, 3];
                        _b = this;
                        return [4 /*yield*/, this.service.getOnboarding(this.id)];
                    case 2:
                        _b.currentOnboarding = _c.sent();
                        this.form.patchValue(this.currentOnboarding);
                        this.categories = this.currentOnboarding.categories;
                        this.currentTemplate = (_a = this.currentOnboarding) === null || _a === void 0 ? void 0 : _a.vtemplates[0];
                        this.onSelectContactTemplate();
                        _c.label = 3;
                    case 3: return [2 /*return*/];
                }
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
                        this.router.navigate([this.service.mainPath + '/onboarding']);
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
    OnboardingCreateComponent.ɵfac = function OnboardingCreateComponent_Factory(t) { return new (t || OnboardingCreateComponent)(ɵɵdirectiveInject(FormBuilder), ɵɵdirectiveInject(OnboardingService), ɵɵdirectiveInject(ActivatedRoute), ɵɵdirectiveInject(Router), ɵɵdirectiveInject(MatDialog)); };
    OnboardingCreateComponent.ɵcmp = ɵɵdefineComponent({ type: OnboardingCreateComponent, selectors: [["create-onboarding"]], decls: 5, vars: 3, consts: [[1, "content"], [3, "formGroup", "submit"], ["class", "select-contact", 4, "ngIf"], ["class", "category", 4, "ngIf"], [1, "select-contact"], [1, "select-template"], ["appearance", "outline", 1, "full-width"], ["formControlName", "TemplateId", "required", "", 3, "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], ["mat-raised-button", "", "color", "primary", 3, "disabled", "click"], [3, "value"], [1, "category"], [1, "side-bar"], [1, "summary"], [1, "template-title"], ["class", "li-title", 3, "class", "click", 4, "ngFor", "ngForOf"], ["mat-button", "", "type", "submit", 1, "register-button"], [1, "fields"], [1, "example-list", "mt-20"], ["class", "category-item", 3, "id", 4, "ngFor", "ngForOf"], [1, "li-title", 3, "click"], [3, "ngxScrollTo"], [4, "ngIf"], [1, "category-item", 3, "id"], [1, "field-content"], [1, "field-item"], [1, "category-name"], [1, "category-container"], ["class", "field-category", 3, "id", 4, "ngFor", "ngForOf"], [1, "field-category", 3, "id"], ["class", "inner-loop", 4, "ngIf"], [1, "inner-loop"], [1, "fields-content"], [1, "fields-container"], [3, "field", "length", "i", "j", "onDrop"], [1, "child"], ["class", "inner-child", 4, "ngIf"], [1, "inner-child"], ["class", "inner-child-content", 3, "id", 4, "ngFor", "ngForOf"], [1, "inner-child-content", 3, "id"]], template: function OnboardingCreateComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵelementStart(0, "main");
            ɵɵelementStart(1, "div", 0);
            ɵɵelementStart(2, "form", 1);
            ɵɵlistener("submit", function OnboardingCreateComponent_Template_form_submit_2_listener() { return ctx.onSubmit(); });
            ɵɵtemplate(3, OnboardingCreateComponent_div_3_Template, 13, 5, "div", 2);
            ɵɵtemplate(4, OnboardingCreateComponent_div_4_Template, 12, 3, "div", 3);
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
        } if (rf & 2) {
            ɵɵadvance(2);
            ɵɵproperty("formGroup", ctx.form);
            ɵɵadvance(1);
            ɵɵproperty("ngIf", !ctx.isSelected);
            ɵɵadvance(1);
            ɵɵproperty("ngIf", ctx.isSelected);
        } }, directives: [ɵangular_packages_forms_forms_y, NgControlStatusGroup, FormGroupDirective, NgIf, MatFormField, MatLabel, MatSelect, NgControlStatus, FormControlName, RequiredValidator, NgForOf, MatButton, MatOption, ScrollToDirective, MatIcon, SubOnboardingCreateComponent], styles: ["main[_ngcontent-%COMP%]{background:no-repeat padding-box #f4f7f9;height:100vh;width:100%;display:flex;flex-direction:column;align-items:center}main[_ngcontent-%COMP%]   .disabled[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{background-color:transparent!important}main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{width:99%;height:100%;padding-left:1%}main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font:bold 32px/30px Nexa Text;letter-spacing:0;color:#171f26;padding-top:20px}main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font:20px/26px Nexa Text;letter-spacing:0;color:#171f26}main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   p.sub-title[_ngcontent-%COMP%]{max-width:400px}main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .select-contact[_ngcontent-%COMP%]{max-width:70%;margin:5% auto auto;background:no-repeat padding-box #fff;border:1px solid #dce4e9;border-radius:6px;padding:5%}main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .select-contact[_ngcontent-%COMP%]   .select-template[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;justify-content:space-between;margin-top:50px}main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .select-contact[_ngcontent-%COMP%]   .select-template[_ngcontent-%COMP%]   .full-width[_ngcontent-%COMP%]{width:40%}main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .select-contact[_ngcontent-%COMP%]   .select-template[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{float:right;text-align:center;border:1px solid #543cb6;border-radius:7px;padding:1em 2em;display:flex;align-items:center;background-color:transparent;font:bold 15px/17px Nexa;letter-spacing:0;color:#543cb6;-ms-grid-row-align:center;align-self:center;width:220px}main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .category[_ngcontent-%COMP%]   .onboarding-mat-stepper[_ngcontent-%COMP%]   mat-horizontal-stepper[_ngcontent-%COMP%]   .next-step[_ngcontent-%COMP%]{float:right}main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{display:flex;height:100%;width:100%}main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .select-contact[_ngcontent-%COMP%]{max-width:70%;margin:5% auto auto;background:no-repeat padding-box #fff;border:1px solid #dce4e9;border-radius:6px;padding:5%}main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .select-contact[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{float:right;text-align:center;border:1px solid #543cb6;border-radius:7px;padding:.7em 2em .5em;display:flex;align-items:center;background-color:transparent;font:bold 15px/17px Nexa;letter-spacing:0;color:#543cb6;align-self:flex-end}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]{width:786px;background:no-repeat padding-box #fff;border:1px solid #dce4e9;border-radius:6px;opacity:1;margin:auto;padding:0 25px;-ms-grid-row-align:center;align-self:center}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{text-align:center;font:900 32px/48px Nexa;letter-spacing:0;color:#171f26}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font:18px/24px Nexa Text;letter-spacing:0;color:#171f26}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .profil-name-content[_ngcontent-%COMP%]{display:flex;align-items:center;position:relative}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .profil-name-content[_ngcontent-%COMP%]   .add-picto[_ngcontent-%COMP%]{margin-right:15px;min-width:50px;width:30px;padding:9px 12px}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .profil-name-content[_ngcontent-%COMP%]   .add-picto[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin-right:10px}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .profil-name-content[_ngcontent-%COMP%]   .list-picto[_ngcontent-%COMP%]{position:absolute;height:200px;width:100%;background:no-repeat padding-box #fff;border:1px solid #171f26;border-radius:8px;top:100%;z-index:1}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .profil-name-content[_ngcontent-%COMP%]   .list-picto[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin:15px;border:none;font-size:40px}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .profil-name-content[_ngcontent-%COMP%]   .list-picto[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]:hover{color:#830b6b!important;cursor:pointer}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .box-title-content[_ngcontent-%COMP%]{width:100%;margin:25px auto}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font:900 32px/38px Nexa;letter-spacing:0;color:#171f26}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font:15px/26px Nexa Text;letter-spacing:0;color:#171f26;text-align:center}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .link-create-profil[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:center}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{text-align:center;border:1px solid #543cb6;border-radius:7px;padding:.7em 2em .5em;display:flex;align-items:center;background-color:transparent;font:bold 15px/17px Nexa;letter-spacing:0;color:#543cb6}main[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:space-between}.expand-button[_ngcontent-%COMP%]{color:#5a607f!important;background-color:transparent!important;box-shadow:none!important}.category-name[_ngcontent-%COMP%]{text-align:left;font:bold 22px/48px Nexa Text;letter-spacing:0;color:#171f26;padding-left:15px}.full-width[_ngcontent-%COMP%]{width:100%}.field-action[_ngcontent-%COMP%]{width:10%}.field-size[_ngcontent-%COMP%]{width:90%;margin:auto 2% auto auto}  .mat-form-field-appearance-fill .mat-form-field-flex{background-color:#fff}  .mat-form-field-appearance-outline .mat-form-field-infix{padding:.5em 0}  .mat-select{padding:.5em 0}  .mat-form-field-appearance-fill .mat-form-field-underline::before{background-color:transparent}  .mat-form-field-wrapper{padding-bottom:0!important}  mat-checkbox.form-field .mat-checkbox-checkmark-path{stroke:#000!important}[_nghost-%COMP%]     .mat-checkbox-checked.mat-accent .mat-checkbox-background, [_nghost-%COMP%]     .mat-checkbox-indeterminate.mat-accent .mat-checkbox-background{background-color:transparent}.category-action[_ngcontent-%COMP%]{display:flex;width:100%}.delete-field[_ngcontent-%COMP%]{margin:auto 2%}.radio-group[_ngcontent-%COMP%]   .mat-radio-button[_ngcontent-%COMP%]{margin-right:10px}.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary[_ngcontent-%COMP%]{background-color:#3f51b5;color:#fff;min-height:20px;font-size:10px}.move-icons[_ngcontent-%COMP%]{cursor:move}.category-item[_ngcontent-%COMP%], .cdk-drag-placeholder[_ngcontent-%COMP%]{display:flex;align-items:baseline;width:100%;border:1px solid #dce4e9;border-radius:8px;background-color:#fff;margin-top:10px;min-height:60px}.category-item[_ngcontent-%COMP%]   .left-action[_ngcontent-%COMP%], .cdk-drag-placeholder[_ngcontent-%COMP%]   .left-action[_ngcontent-%COMP%]{height:auto;background-color:#49a094;padding-top:7px;width:40px;-ms-grid-row-align:stretch;align-self:stretch;border-top-left-radius:8px;border-bottom-left-radius:8px}.category-item[_ngcontent-%COMP%]   .left-action[_ngcontent-%COMP%]   .transparent-button[_ngcontent-%COMP%], .cdk-drag-placeholder[_ngcontent-%COMP%]   .left-action[_ngcontent-%COMP%]   .transparent-button[_ngcontent-%COMP%]{background-color:transparent;box-shadow:none;width:40px;padding:0;margin:0;min-width:auto;color:#fff}.category-item[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%], .cdk-drag-placeholder[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%]{width:100%;-ms-grid-row-align:center;align-self:center}.category-item[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%], .cdk-drag-placeholder[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;border:transparent!important}.category-item[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]   .mat-form-field-wrapper[_ngcontent-%COMP%]   .mat-form-field-flex[_ngcontent-%COMP%]   .mat-form-field-outline[_ngcontent-%COMP%], .category-item[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%]   .mat-form-field-outline[_ngcontent-%COMP%], .cdk-drag-placeholder[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]   .mat-form-field-wrapper[_ngcontent-%COMP%]   .mat-form-field-flex[_ngcontent-%COMP%]   .mat-form-field-outline[_ngcontent-%COMP%], .cdk-drag-placeholder[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%]   .mat-form-field-outline[_ngcontent-%COMP%]{color:transparent!important}.category-item[_ngcontent-%COMP%]   .category-container[_ngcontent-%COMP%], .cdk-drag-placeholder[_ngcontent-%COMP%]   .category-container[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;justify-content:flex-start;align-items:flex-end}.cdk-drag-preview[_ngcontent-%COMP%]{box-sizing:border-box;border-radius:4px;opacity:1}.cdk-drag-preview[_ngcontent-%COMP%]   .expand-button[_ngcontent-%COMP%]{color:#5a607f!important;background-color:transparent!important;box-shadow:none!important;margin-right:28px!important}.cdk-drag-placeholder[_ngcontent-%COMP%]{opacity:0}.cdk-drag-animating[_ngcontent-%COMP%], .example-list.cdk-drop-list-dragging[_ngcontent-%COMP%]   .category-item[_ngcontent-%COMP%]:not(.cdk-drag-placeholder){transition:transform 250ms cubic-bezier(0,0,.2,1)}.child[_ngcontent-%COMP%]{margin-left:0}.child[_ngcontent-%COMP%]   .inner-child[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap}.category[_ngcontent-%COMP%]{display:flex;flex-direction:row;width:100vw}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]{width:250px;background-color:#fff;margin:10px 20px;border-radius:5px;border:1px solid #dbcbcb96}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:15px;border-bottom:1px solid #dbcbcb96;margin:10px;padding-bottom:5px;font-family:\"Nexa Text\";display:flex;flex-direction:column;justify-content:space-between;align-items:flex-start}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-weight:600}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin-left:15px;cursor:pointer}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   h3.template-title[_ngcontent-%COMP%]{font:900 24px/36px Nexa Text;letter-spacing:0;color:#171f26}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]{font-weight:600;margin-left:-27px;font-size:15px;list-style:none}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:5px;margin:5px auto;cursor:pointer;text-align:left;font:12px/19px Nexa Text;letter-spacing:0;color:#535760}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]{padding-left:0;margin-left:0}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.li-title[_ngcontent-%COMP%]{font-size:14px;font-weight:600;margin-right:10px}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.li-title[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:140px;outline:0;border:1px dashed grey}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.li-title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:inline-flex;align-items:center;width:100%}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.li-title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin-left:10px}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.li-title.active[_ngcontent-%COMP%], .category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.li-title[_ngcontent-%COMP%]:hover{background:no-repeat padding-box #e5e8ee;border-radius:5px}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.sub-title[_ngcontent-%COMP%]{list-style:none;padding-left:20px}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.sub-title.active[_ngcontent-%COMP%], .category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.sub-title.active[_ngcontent-%COMP%]::marker, .category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.sub-title[_ngcontent-%COMP%]:hover{font-weight:600;background:no-repeat padding-box #e5e8ee;border-radius:5px}.category[_ngcontent-%COMP%]   .fields[_ngcontent-%COMP%]{width:90%;max-height:100vh;overflow:auto;margin-right:.5%;overflow-x:hidden}.category[_ngcontent-%COMP%]   .disabled[_ngcontent-%COMP%]{background-color:#f4f7f9!important}.category[_ngcontent-%COMP%]   .expand-button[_ngcontent-%COMP%]{color:#5a607f!important;background-color:transparent!important;box-shadow:none!important;margin-right:28px!important}.category[_ngcontent-%COMP%]   .expand-button[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%]{font-size:40px}.category[_ngcontent-%COMP%]   .transparent-button[_ngcontent-%COMP%]{background-color:transparent;box-shadow:none;width:40px;padding:0;margin:0;margin-left:0!important;min-width:auto;color:#fff}.add-button-sub-category[_ngcontent-%COMP%]{width:95.5%!important;margin-bottom:22px;margin-left:22px}.add-button-container[_ngcontent-%COMP%]{background:no-repeat padding-box #fff;border:1px dashed #dce4e9;border-radius:8px;margin-top:10px;padding:10px;display:flex;justify-content:center;align-items:center;width:98.5%;margin-bottom:22px}.add-button-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{display:flex;align-items:center;background-color:transparent;border:none;cursor:pointer;font:17px/26px Nexa Text;letter-spacing:0;color:#c2c8d5;box-shadow:none}.add-category[_ngcontent-%COMP%]{border:1px dashed #c2c8d5;border-radius:5px;margin-left:10px;margin-bottom:10px;font:bold 12px/19px Nexa Text;letter-spacing:0;color:#c2c8d5;width:92%}.inner-loop[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]{display:flex;height:100%;margin:auto auto 20px;width:100%}.inner-loop[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]   .button-action[_ngcontent-%COMP%]{background-color:#6fe8d7;-ms-grid-row-align:stretch;align-self:stretch;margin-top:0;margin-left:20px;border-bottom-left-radius:8px;border-top-left-radius:8px}.inner-loop[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]   .button-action[_ngcontent-%COMP%]   .transparent-button[_ngcontent-%COMP%]{background-color:transparent;box-shadow:none;width:40px;padding:0;margin:0;min-width:auto;color:#fff}.inner-loop[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]   .child-2-background[_ngcontent-%COMP%]{background-color:#cffaf4!important}.inner-loop[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]   .child-3-background[_ngcontent-%COMP%]{background-color:#e5e8ee!important}.inner-loop[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]   .fields-container[_ngcontent-%COMP%]{width:100%;padding:10px}.inner-loop[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]   .fields-container[_ngcontent-%COMP%]   lib-sub-category[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;width:100%}.inner-loop[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]   .fields-container[_ngcontent-%COMP%]   lib-sub-category[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]   .button-action[_ngcontent-%COMP%]{background-color:#6fe8d7;height:100%;margin:auto 15px auto auto;display:flex}.inner-loop[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]   .fields-container[_ngcontent-%COMP%]   lib-sub-category[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]   .button-action[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{box-shadow:none;background-color:transparent;color:#fff}.side-bar[_ngcontent-%COMP%]{display:flex;flex-direction:column}.register-button[_ngcontent-%COMP%]{background:no-repeat padding-box #171f26!important;border:2px solid #192128!important;border-radius:8px;color:#fff!important;width:85%;margin-left:22px!important;border:none!important}"] });
    return OnboardingCreateComponent;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(OnboardingCreateComponent, [{
        type: Component,
        args: [{
                selector: "create-onboarding",
                templateUrl: "./onboarding-create.component.html",
                styleUrls: ["./onboarding-create.component.scss"],
            }]
    }], function () { return [{ type: FormBuilder }, { type: OnboardingService }, { type: ActivatedRoute }, { type: Router }, { type: MatDialog }]; }, null); })();

var OnboardingListComponent = /** @class */ (function () {
    function OnboardingListComponent(service) {
        this.service = service;
    }
    OnboardingListComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.service.getAllOnboarding()];
                    case 1:
                        _a.sent();
                        this.service.onboarding.subscribe(function (onboarding) {
                            console.log(onboarding);
                            if (onboarding) {
                                _this.onboardingList = onboarding;
                            }
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    OnboardingListComponent.ɵfac = function OnboardingListComponent_Factory(t) { return new (t || OnboardingListComponent)(ɵɵdirectiveInject(OnboardingService)); };
    OnboardingListComponent.ɵcmp = ɵɵdefineComponent({ type: OnboardingListComponent, selectors: [["lib-onboarding-list"]], decls: 1, vars: 0, template: function OnboardingListComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵtext(0, " List onboarding");
        } }, styles: [""] });
    return OnboardingListComponent;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(OnboardingListComponent, [{
        type: Component,
        args: [{
                selector: 'lib-onboarding-list',
                templateUrl: './onboarding-list.component.html',
                styleUrls: ['./onboarding-list.component.scss']
            }]
    }], function () { return [{ type: OnboardingService }]; }, null); })();

;
var onBoardingRoutes = [
    {
        path: 'onboarding',
        component: OnboardingComponent,
        children: [
            {
                path: 'template-builder/:id',
                component: TemplateProfileCreateComponent,
                canDeactivate: [CanDeactivateGuard],
            },
            {
                path: '',
                component: TemplateProfileListComponent
            },
            {
                path: 'onboarding',
                component: OnboardingListComponent
            },
            {
                path: 'onboarding/:id',
                component: OnboardingCreateComponent
            }
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
    OnboardingModule.ɵinj = ɵɵdefineInjector({ factory: function OnboardingModule_Factory(t) { return new (t || OnboardingModule)(ɵɵinject(OnboardingModule, 12)); }, providers: [OnboardingService, CanDeactivateGuard], imports: [[
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
                ScrollToModule.forRoot(),
                DragDropModule,
                MatCardModule,
                MatDialogModule,
                MatStepperModule,
                MatProgressBarModule,
                MatTooltipModule
            ],
            HttpClientModule,
            RouterModule] });
    return OnboardingModule;
}());
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(OnboardingModule, { declarations: [MaterialElevationDirective,
        OnboardingComponent,
        TemplateProfileCreateComponent,
        OnboardingCreateComponent,
        SubOnboardingCreateComponent,
        TemplateProfileListComponent,
        SubTemplateProfileComponent,
        UpdateProfilComponent,
        ExitConfirmComponent,
        OnboardingListComponent], imports: [FormsModule,
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
        MatTableModule, RouterModule, ScrollToModule, DragDropModule,
        MatCardModule,
        MatDialogModule,
        MatStepperModule,
        MatProgressBarModule,
        MatTooltipModule], exports: [OnboardingComponent,
        HttpClientModule,
        TemplateProfileCreateComponent,
        TemplateProfileListComponent,
        OnboardingListComponent,
        OnboardingCreateComponent,
        RouterModule] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(OnboardingModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    MaterialElevationDirective,
                    OnboardingComponent,
                    TemplateProfileCreateComponent,
                    OnboardingCreateComponent,
                    SubOnboardingCreateComponent,
                    TemplateProfileListComponent,
                    SubTemplateProfileComponent,
                    UpdateProfilComponent,
                    ExitConfirmComponent,
                    OnboardingListComponent
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
                    ScrollToModule.forRoot(),
                    DragDropModule,
                    MatCardModule,
                    MatDialogModule,
                    MatStepperModule,
                    MatProgressBarModule,
                    MatTooltipModule
                ],
                providers: [OnboardingService, CanDeactivateGuard],
                entryComponents: [UpdateProfilComponent, ExitConfirmComponent],
                exports: [
                    OnboardingComponent,
                    HttpClientModule,
                    TemplateProfileCreateComponent,
                    TemplateProfileListComponent,
                    OnboardingListComponent,
                    OnboardingCreateComponent,
                    RouterModule,
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

export { OnboardingComponent, OnboardingCreateComponent, OnboardingListComponent, OnboardingModule, OnboardingService, TemplateProfileCreateComponent, TemplateProfileListComponent, onBoardingRoutes };
//# sourceMappingURL=onboarding.js.map
