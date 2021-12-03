import { __awaiter, __generator, __decorate, __param, __assign } from 'tslib';
import { HttpHeaders, HttpClient, HttpClientModule } from '@angular/common/http';
import { EventEmitter, Inject, Injectable, Component, ViewChild, Input, Output, ElementRef, Renderer2, HostListener, Directive, Optional, SkipSelf, NgModule } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router, ActivatedRoute, RouterModule } from '@angular/router';
import { Validators, FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ENTER, COMMA, SEMICOLON } from '@angular/cdk/keycodes';
import { moveItemInArray, transferArrayItem, DragDropModule } from '@angular/cdk/drag-drop';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatChipsModule } from '@angular/material/chips';
import { MatInputModule } from '@angular/material/input';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatRadioModule } from '@angular/material/radio';
import { CdkTableModule } from '@angular/cdk/table';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';

var OnboardingService = /** @class */ (function () {
    function OnboardingService(config, http) {
        this.http = http;
        this.token = new BehaviorSubject(null);
        this.authentication = new EventEmitter();
        this._token = this.token.asObservable();
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
    OnboardingService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: ['__NgxOnboarding__',] }] },
        { type: HttpClient }
    ]; };
    OnboardingService = __decorate([
        Injectable(),
        __param(0, Inject('__NgxOnboarding__'))
    ], OnboardingService);
    return OnboardingService;
}());

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
    OnboardingComponent.ctorParameters = function () { return [
        { type: OnboardingService },
        { type: Router }
    ]; };
    OnboardingComponent = __decorate([
        Component({
            selector: 'ngx-onboarding',
            template: "<router-outlet></router-outlet>",
            styles: [".main{background-color:red!important}"]
        })
    ], OnboardingComponent);
    return OnboardingComponent;
}());

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
        this.id = "";
        this.parent = [];
        this.categories = [
            {
                name: "Utilisateur",
                editable: false,
                deleteable: false,
                expandMore: false,
                suffixEndpoint: "category/user",
                forms: [
                    {
                        label: "Nom",
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
                        label: "Fonction",
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
                        label: "Date d'entrée",
                        value: null,
                        size: 20,
                        isMandatory: true,
                        type: "date",
                        editable: false,
                        deleteable: false,
                        subLevel: 1,
                        expandMore: false,
                    },
                    {
                        label: "Langue",
                        value: ["fr", "en"],
                        size: 10,
                        isMandatory: true,
                        type: "select",
                        editable: false,
                        deleteable: false,
                        subLevel: 1,
                        expandMore: false,
                    },
                    {
                        label: "Téléphone portable",
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
                        label: "Téléphone fixe",
                        value: null,
                        size: 20,
                        isMandatory: true,
                        type: "phone",
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
                                label: "Equipement à réatribuer",
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
                            Description: [""],
                            Tags: ["", Validators.required],
                            Status: [false, Validators.required],
                        });
                        _a = this;
                        return [4 /*yield*/, this.service.getAllTags()];
                    case 1:
                        _a.tags = _c.sent();
                        this.id = this.route.snapshot.paramMap.get("id");
                        if (!(this.id != "0")) return [3 /*break*/, 3];
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
    CreateProfileTemplateComponent.prototype.onAddNewField = function () {
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
    CreateProfileTemplateComponent.prototype.onAddNewSubLevelField = function () {
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
    CreateProfileTemplateComponent.prototype.onRemoveField = function () {
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
    CreateProfileTemplateComponent.prototype.onRemoveCategory = function (e, i) {
        e.preventDefault();
        this.categories.splice(i, 1);
    };
    CreateProfileTemplateComponent.prototype.onChangeCategory = function () {
        return this.categories.every(function (cat) {
            return cat.name !== "" &&
                cat.forms.every(function (field) { return field.label !== "" && field.type !== ""; });
        });
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
                        if (result) {
                            this.router.navigate([this.service.mainPath]);
                        }
                        else {
                            console.log("errror......");
                        }
                        _b.label = 5;
                    case 5: return [2 /*return*/];
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
    CreateProfileTemplateComponent.prototype.onKeyPress = function (event) {
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
    CreateProfileTemplateComponent.prototype.removeKeyword = function (keyword) {
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
    CreateProfileTemplateComponent.prototype.onExpendMore = function (event) {
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
    CreateProfileTemplateComponent.prototype.addKeywordFromInput = function (event) {
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
    CreateProfileTemplateComponent.ctorParameters = function () { return [
        { type: FormBuilder },
        { type: OnboardingService },
        { type: ActivatedRoute },
        { type: Router }
    ]; };
    CreateProfileTemplateComponent = __decorate([
        Component({
            selector: "onboarding-create-profile-template",
            template: "<div class=\"container\">\n  <h3>Cr\u00E9ation de profil</h3>\n  <form [formGroup]=\"form\" (submit)=\"onSubmit()\">\n    <mat-form-field class=\"example-full-width\" appearance=\"fill\">\n      <mat-label>Nom du profil</mat-label>\n      <input type=\"text\" matInput formControlName=\"Name\" placeholder=\"Ex. Manager\" />\n      <mat-error *ngIf=\"form.get('Name').hasError('required')\">\n        Profil est <strong>requis</strong>\n      </mat-error>\n    </mat-form-field>\n    <mat-form-field class=\"example-full-width\" appearance=\"fill\">\n      <mat-label>D\u00E9scription</mat-label>\n      <textarea type=\"text\" matInput formControlName=\"Description\" placeholder=\"\"></textarea>\n    </mat-form-field>\n    <mat-form-field class=\"example-full-width\" appearance=\"fill\">\n      <mat-label>Tags</mat-label>\n      <mat-select formControlName=\"Tags\" required>\n        <mat-option *ngFor=\"let tag of tags\" [value]=\"tag\">{{tag}}</mat-option>\n      </mat-select>\n    </mat-form-field>\n    <mat-checkbox formControlName=\"Status\">Active</mat-checkbox>\n\n    <hr />\n    <div class=\"category\">\n      <h2>Liste de cat\u00E9gories</h2>\n      <div cdkDropListGroup>\n        <div class=\"example-list mt-20\" #parentList=\"cdkDropList\" cdkDropList [cdkDropListData]=\"categories\"\n          (cdkDropListDropped)=\"drop($event)\">\n          <div class=\"category-item\" *ngFor=\"let category of categories;  let i=index\" cdkDrag>\n            <button mat-mini-fab color=\"primary\" (click)=\"onExpendMore($event,i)\">\n              <mat-icon *ngIf=\"!category.expandMore\">expand_less</mat-icon>\n              <mat-icon *ngIf=\"category.expandMore\">expand_more</mat-icon>\n            </button>\n            <button mat-raised-button class=\"move-icons\" (click)=\"ingoreDefaultAction($event)\">\n              <mat-icon cdkDragHandle>swap_vert</mat-icon>\n            </button>\n            <div class=\"field-content\">\n              <div class=\"field-item\">\n                <mat-form-field class=\"example-full-width input-category-name\" appearance=\"fill\">\n                  <mat-label>Cat\u00E9gorie</mat-label>\n                  <input type=\"text\" required [readonly]=\"categories.length<4 || !category.editable\"\n                    [disabled]=\"!category.editable\" matInput [(ngModel)]=\"category.name\"\n                    [ngModelOptions]=\"{standalone: true}\" placeholder=\"\" />\n                  <mat-error *ngIf=\"category.name == ''\">\n                    Cat\u00E9gorie est <strong>requis</strong>\n                  </mat-error>\n                </mat-form-field>\n                <div>\n                  <button [disabled]=\"!category.deleteable\" (click)=\"onRemoveCategory($event,i)\" mat-raised-button\n                    color=\"warn\">Supprimer</button>\n                </div>\n              </div>\n\n              <div #childList=\"cdkDropList\" *ngIf=\"category.forms\" [cdkDropListData]=\"category.forms\" cdkDropList\n                (cdkDropListDropped)=\"drop($event)\">\n                <ng-container *ngIf=\"category.expandMore\">\n                  <div class=\"field\" *ngFor=\"let field of category.forms;let j=index\" cdkDrag>\n                    <lib-sub-category [field]=\"field\" [length]=\"category?.forms?.length\" [i]=\"i\" [j]=\"j\"\n                      (onAddKeywordFromInput)=\"addKeywordFromInput($event.event,i,j)\"\n                      (onKeyPress)=\"onKeyPress($event.event,i,j)\" (onAddNewField)=\"onAddNewField(i)\"\n                      (onRemoveField)=\"onRemoveField(i,j)\" (onChangeType)=\"onChangeType(field.type,i,j)\"\n                      (onRemoveKeyword)=\"removeKeyword($event.event,i,j)\"\n                      (onAddNewSubLevelField)=\"onAddNewSubLevelField(i,j)\" (onExpendMore)=\"onExpendMore(null,i,j)\">\n                      <div *ngIf=\"field.expandMore\" class=\"child\">\n                        <div #childList=\"cdkDropList\" *ngIf=\"field.forms\" [cdkDropListData]=\"field.forms\" cdkDropList\n                          (cdkDropListDropped)=\"drop($event)\">\n                          <div class=\"field\" *ngFor=\"let child of field.forms;let k=index\" cdkDrag>\n                            <lib-sub-category [field]=\"child\" [length]=\"field?.forms?.length\" [i]=\"j\" [j]=\"k\"\n                              (onAddKeywordFromInput)=\"addKeywordFromInput($event.event,i,j,k)\"\n                              (onKeyPress)=\"onKeyPress($event.event,i,j,k)\" (onAddNewField)=\"onAddNewField(i, j)\"\n                              (onRemoveField)=\"onRemoveField(i,j,k)\" (onChangeType)=\"onChangeType(child.type,i,j,k)\"\n                              (onRemoveKeyword)=\"removeKeyword($event.event,i,j,k)\"\n                              (onAddNewSubLevelField)=\"onAddNewSubLevelField(i,j,k)\"\n                              (onExpendMore)=\"onExpendMore(null,i,j,k)\">\n                              <div *ngIf=\"child.expandMore\" class=\"child\">\n                                <div #childList=\"cdkDropList\" *ngIf=\"child.forms\" [cdkDropListData]=\"child.forms\"\n                                  cdkDropList (cdkDropListDropped)=\"drop($event)\">\n                                  <div class=\"field\" *ngFor=\"let c2 of child.forms;let l=index\" cdkDrag>\n                                    <lib-sub-category [field]=\"c2\" [length]=\"child?.forms?.length\" [i]=\"k\" [j]=\"l\"\n                                      (onAddKeywordFromInput)=\"addKeywordFromInput($event.event,i,j,k,l)\"\n                                      (onKeyPress)=\"onKeyPress($event.event,i,j,k,l)\"\n                                      (onAddNewField)=\"onAddNewField(i,j,k)\" (onRemoveField)=\"onRemoveField(i,j,k,l)\"\n                                      (onChangeType)=\"onChangeType(c2.type,i,j,k,l)\"\n                                      (onRemoveKeyword)=\"removeKeyword($event.event,i,j,k,l)\"\n                                      (onAddNewSubLevelField)=\"onAddNewSubLevelField(i,j,k,l)\"\n                                      (onExpendMore)=\"onExpendMore(null,i,j,k,l)\">\n                                      <div class=\"child\">\n                                      </div>\n                                    </lib-sub-category>\n                                  </div>\n                                </div>\n                              </div>\n                            </lib-sub-category>\n                          </div>\n                        </div>\n                      </div>\n                    </lib-sub-category>\n                  </div>\n                </ng-container>\n\n              </div>\n\n            </div>\n          </div>\n        </div>\n\n      </div>\n    </div>\n    <div class=\"action\">\n      <button mat-raised-button color=\"primary\" (click)='onAddNewCategory($event)'>Ajouter une cat\u00E9gorie</button>\n      <a [routerLink]=\"[service.mainPath]\" role=\"button\" mat-raised-button color=\"basic\">Liste des profils</a>\n      <button mat-raised-button color=\"basic\" type=\"submit\">Valider</button>\n    </div>\n  </form>\n</div>",
            styles: [".container{max-width:98%;margin:50px auto auto;padding-bottom:50px}.container .action{width:100%;display:flex;justify-content:space-between}.input-category-name{font-size:15px;font-weight:500}.example-full-width{width:100%}.field-item{display:flex;justify-content:space-between;align-items:center}.field-action{width:10%}.field-size{width:90%;margin:auto 2% auto auto}hr{margin:50px 0}::ng-deep .mat-form-field-appearance-fill .mat-form-field-flex{background-color:#fff}.category-action{display:flex;width:100%}.delete-field{margin:auto 2%}.radio-group .mat-radio-button{margin-right:10px}.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary{background-color:#3f51b5;color:#fff;min-height:20px;font-size:10px}.move-icons{cursor:move}.category-item{display:flex;align-items:baseline;width:100%}.field-content{width:100%}.cdk-drag-preview{box-sizing:border-box;border-radius:4px;box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.cdk-drag-placeholder{opacity:0}.cdk-drag-animating,.example-list.cdk-drop-list-dragging .category-item:not(.cdk-drag-placeholder){transition:transform 250ms cubic-bezier(0,0,.2,1)}.child{margin-left:5%}"]
        })
    ], CreateProfileTemplateComponent);
    return CreateProfileTemplateComponent;
}());

var ProfileListComponent = /** @class */ (function () {
    function ProfileListComponent(service, router) {
        this.service = service;
        this.router = router;
        this.displayedColumns = ['Name', 'vcontacts', 'createdAt', 'updatedAt', 'action'];
        this.datas = [];
        this.dataSource = new MatTableDataSource([]);
        this.defaultElevation = 2;
        this.raisedElevation = 8;
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
        this.router.navigate(['onboarding/template-builder/0']);
    };
    ProfileListComponent.prototype.onDelete = function (e, id) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        e.stopPropagation();
                        if (!confirm('Voulez vous supprimer cette template ?')) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.service.deleteProfil(id)];
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
    ProfileListComponent.ctorParameters = function () { return [
        { type: OnboardingService },
        { type: Router }
    ]; };
    __decorate([
        ViewChild(MatPaginator)
    ], ProfileListComponent.prototype, "paginator", void 0);
    __decorate([
        ViewChild(MatSort)
    ], ProfileListComponent.prototype, "sort", void 0);
    ProfileListComponent = __decorate([
        Component({
            selector: 'onboarding-profile-list',
            template: "<div class=\"main\">\n  <div class=\"header-list\">\n    <h2>On boarding</h2>\n    <p>Retrouvez ici, l\u2019ensemble des formulaires d\u2019on boarding que vous avez cr\u00E9\u00E9s</p>\n    <!-- <button mat-raised-button color=\"primary\" (click)='onAddProfil()'>Ajouter un prifil</button> -->\n  </div>\n  <div class=\"content-list\">\n    <h3>Fiches collaborateurs</h3>\n    <div class=\"list\">\n      <div class=\"box-template\">\n        <p>Nouvelle cat\u00E9gorie</p>\n        <a role=\"button\" [routerLink]=\"[this.service.mainPath+'/template-builder/0']\" mat-raised-button color=\"primary\">\n          <mat-icon>add</mat-icon>\n          Cr\u00E9er une fiche\n        </a>\n      </div>\n      <div appMaterialElevation [defaultElevation]=\"defaultElevation\" raisedElevation=\"16\" class=\"box-template\"\n        *ngFor=\"let d of datas\">\n        <div class=\"box-content\" [routerLink]=\"[this.service.mainPath+'/template-builder/'+d._id]\">\n          <img\n            src=\"data:image/png;base64,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\"\n            alt=\"\">\n          <p> {{d.Name}}</p>\n        </div>\n        <button (click)=\"onDelete($event,d._id)\" mat-mini-fab color=\"accent\" appMaterialElevation\n          [defaultElevation]=\"defaultElevation\" raisedElevation=\"16\">\n          <mat-icon>close</mat-icon>\n        </button>\n      </div>\n    </div>\n  </div>\n</div>",
            styles: [".main{background:no-repeat padding-box #f4f7f9;opacity:1;height:100%}.main .header-list{margin-left:50px;padding-top:10px}.main .header-list h2{text-align:left;font:bold 32px/30px Nexa Text;letter-spacing:0;color:#171f26;opacity:1}.main .header-list p{text-align:left;font:20px/26px Nexa Text;letter-spacing:0;color:#171f26;opacity:1}.main .content-list{background-color:#fff;border-radius:8px;opacity:1;margin:57px;height:80%;padding:49px}.main .content-list .list{display:flex;flex-wrap:wrap}.main .content-list .list h3{text-align:left;font:bold 23px/30px Nexa Text;letter-spacing:0;color:#171f26;opacity:1}.main .content-list .list .box-template{width:328px;position:relative;height:228px;margin-right:50px;margin-bottom:50px;background:no-repeat padding-box #f4f7f9;border:1px solid #dce4e9;border-radius:6px;opacity:1;display:flex;flex-direction:column;justify-content:center;align-items:center;cursor:pointer}.main .content-list .list .box-template img{width:81px;height:81px}.main .content-list .list .box-template p{text-align:center;font:bold 16px/25px Nexa Text;letter-spacing:.1px;color:#5a607f;opacity:1}.main .content-list .list .box-template a{background:no-repeat padding-box #5a607f;border-radius:7px;font-size:15px}.main .content-list .list .box-template .mat-mini-fab{display:none}::ng-deep .box-template:hover .mat-mini-fab .mat-button-wrapper{padding:0!important;display:inline-block;line-height:0}::ng-deep .box-template:hover .mat-mini-fab{display:initial!important;position:absolute;right:6px;top:7px;background-color:red;width:25px;height:25px}::ng-deep .box-template:hover .mat-mini-fab .mat-icon{background-repeat:no-repeat;display:inline-block;fill:currentColor;height:37px;width:24px}.box-content{width:100%;height:90%;text-align:center;margin-top:15%}"]
        })
    ], ProfileListComponent);
    return ProfileListComponent;
}());

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
    SubCategoryComponent.prototype.expendMore = function (e) {
        e.preventDefault();
        this.onExpendMore.emit(true);
    };
    SubCategoryComponent.prototype.ingoreDefaultAction = function (e) {
        e.preventDefault();
    };
    __decorate([
        Input()
    ], SubCategoryComponent.prototype, "field", void 0);
    __decorate([
        Input()
    ], SubCategoryComponent.prototype, "length", void 0);
    __decorate([
        Input()
    ], SubCategoryComponent.prototype, "i", void 0);
    __decorate([
        Input()
    ], SubCategoryComponent.prototype, "j", void 0);
    __decorate([
        Output()
    ], SubCategoryComponent.prototype, "onAddKeywordFromInput", void 0);
    __decorate([
        Output()
    ], SubCategoryComponent.prototype, "onKeyPress", void 0);
    __decorate([
        Output()
    ], SubCategoryComponent.prototype, "onDrop", void 0);
    __decorate([
        Output()
    ], SubCategoryComponent.prototype, "onAddNewField", void 0);
    __decorate([
        Output()
    ], SubCategoryComponent.prototype, "onRemoveField", void 0);
    __decorate([
        Output()
    ], SubCategoryComponent.prototype, "onChangeType", void 0);
    __decorate([
        Output()
    ], SubCategoryComponent.prototype, "onRemoveKeyword", void 0);
    __decorate([
        Output()
    ], SubCategoryComponent.prototype, "onAddNewSubLevelField", void 0);
    __decorate([
        Output()
    ], SubCategoryComponent.prototype, "onExpendMore", void 0);
    SubCategoryComponent = __decorate([
        Component({
            selector: 'lib-sub-category',
            template: "<div class=\"field-item\">\n    <!-- {{ j + 1 }} -->\n    <button [disabled]=\"!(field.forms && field.forms.length>0)\"\n        [style.opacity]=\"field.forms && field.forms.length>0 ? 1 :0\" mat-mini-fab color=\"primary\"\n        (click)=\"expendMore($event)\">\n        <mat-icon *ngIf=\"!field.expandMore\">expand_less</mat-icon>\n        <mat-icon *ngIf=\"field.expandMore\">expand_more</mat-icon>\n    </button>\n    <button mat-raised-button class=\"move-icons\" (click)=\"ingoreDefaultAction($event)\">\n        <mat-icon cdkDragHandle>swap_vert</mat-icon>\n    </button>\n    <mat-form-field class=\"form-field field-size\" appearance=\"fill\">\n        <mat-label>Label</mat-label>\n        <input type=\"text\" [disabled]=\"!field.editable\" matInput required [ngModelOptions]=\"{standalone: true}\"\n            [(ngModel)]=\"field.label\" placeholder=\"\" />\n        <mat-error *ngIf=\"field.label === ''\">\n            Label est <strong>requis</strong>\n        </mat-error>\n    </mat-form-field>\n\n    <mat-form-field class=\"form-field field-size\" appearance=\"fill\">\n        <mat-label>Type</mat-label>\n        <mat-select [disabled]=\"!field.editable\" [(ngModel)]=\"field.type\" required [ngModelOptions]=\"{standalone: true}\"\n            (ngModelChange)=\"changeType(field.type,i,j)\">\n            <mat-option value=\"text\">Text</mat-option>\n            <mat-option value=\"radio\">Radio</mat-option>\n            <mat-option value=\"select\">Selecteur</mat-option>\n            <mat-option value=\"checkbox\">Checkbox</mat-option>\n            <mat-option value=\"email\">Email</mat-option>\n            <mat-option value=\"password\">Password</mat-option>\n            <mat-option value=\"date\">Date</mat-option>\n            <mat-option value=\"phone\">Phone</mat-option>\n        </mat-select>\n    </mat-form-field>\n    <ng-container [ngSwitch]=\"field.type\">\n        <div *ngSwitchCase=\"'checkbox'\" class=\"flex-auto w-30 field-size\">\n            <mat-checkbox [(ngModel)]=\"field.value\" [ngModelOptions]=\"{standalone: true}\">Valeur\n            </mat-checkbox>\n        </div>\n        <mat-form-field *ngSwitchCase=\"['select', 'radio'].includes(field.type) ? field.type : !field.type\"\n            class=\"flex-auto w-30 field-size\">\n            <mat-label> Valeur </mat-label>\n            <mat-chip-list #chipList aria-label=\"Video keywords; let index=index\" multiple>\n                <mat-chip style=\"min-height: 25px;\" *ngFor=\"let option of field.value\" [selected]=\"option\"\n                    [value]=\"option\" [removable]=\"true\" (removed)=\"removeKeyword(option, i,j)\">\n                    {{option}}\n                    <mat-icon matChipRemove>cancel</mat-icon>\n                </mat-chip>\n                <input #chipsInput placeholder=\"add...\" [matChipInputFor]=\"chipList\" [matChipInputAddOnBlur]=\"true\"\n                    (matChipInputTokenEnd)=\"addKeywordFromInput($event, i,j)\"\n                    [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\" (keyup)=\"keyUp($event,i,j)\">\n            </mat-chip-list>\n        </mat-form-field>\n        <mat-form-field *ngSwitchDefault class=\"form-field field-size\" appearance=\"fill\">\n            <mat-label>Valeur</mat-label>\n            <input [type]=\"field.type\" matInput [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"field.value\"\n                placeholder=\"\">\n        </mat-form-field>\n    </ng-container>\n    <button [disabled]=\"field.subLevel>2\" [style.opacity]=\"field.subLevel>2 ? 0 :1\" mat-mini-fab color=\"success\"\n        (click)='addNewSubLevelField($event)'>\n        <mat-icon>device_hub</mat-icon>\n    </button>\n\n    <button [disabled]=\"!field.deleteable\" mat-mini-fab color=\"warn\" class=\"delete-field\"\n        (click)=\"removeField($event,i,j)\">\n        <!-- [disabled]=\"length<2 || !field.deleteable\" -->\n        <mat-icon>delete</mat-icon>\n    </button>\n    <mat-checkbox class=\"form-field\" [(ngModel)]=\"field.isMandatory\" [ngModelOptions]=\"{standalone: true}\">\n        obligatoire\n    </mat-checkbox>\n</div>\n<button style=\"margin:10px auto\" [disabled]=\"length-1!==j\" [style.opacity]=\"length-1===j ? 1 :0\" mat-raised-button\n    color=\"primary\" (click)='addNewField($event,i)'>\n    <mat-icon>plus_one</mat-icon>\n    <span>Ajouter un champ</span>\n</button>\n<ng-content select=\".child\"></ng-content>",
            styles: [".container{max-width:98%;margin:50px auto auto;padding-bottom:50px}.container .action{width:100%;display:flex;justify-content:space-between}.input-category-name{font-size:15px;font-weight:500}.example-full-width{width:100%}.field-item{display:flex;justify-content:space-between;align-items:center}.field-action{width:10%}.field-size{width:90%;margin:auto 2% auto auto}hr{margin:50px 0}::ng-deep .mat-form-field-appearance-fill .mat-form-field-flex{background-color:#fff}.category-action{display:flex;width:100%}.delete-field{margin:auto 2%}.radio-group .mat-radio-button{margin-right:10px}.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary{background-color:#3f51b5;color:#fff;min-height:20px;font-size:10px}.move-icons{cursor:move}.category-item{display:flex;align-items:baseline;width:100%}.field-content{width:100%}.cdk-drag-preview{box-sizing:border-box;border-radius:4px;box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.cdk-drag-placeholder{opacity:0}.cdk-drag-animating,.example-list.cdk-drop-list-dragging .category-item:not(.cdk-drag-placeholder){transition:transform 250ms cubic-bezier(0,0,.2,1)}::ng-deep .mat-form-field-appearance-fill.mat-form-field-disabled .mat-form-field-flex{background-color:rgba(0,0,0,.02);margin-bottom:-20px}"]
        })
    ], SubCategoryComponent);
    return SubCategoryComponent;
}());

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
    MaterialElevationDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    __decorate([
        Input()
    ], MaterialElevationDirective.prototype, "defaultElevation", void 0);
    __decorate([
        Input()
    ], MaterialElevationDirective.prototype, "raisedElevation", void 0);
    __decorate([
        HostListener('mouseenter')
    ], MaterialElevationDirective.prototype, "onMouseEnter", null);
    __decorate([
        HostListener('mouseleave')
    ], MaterialElevationDirective.prototype, "onMouseLeave", null);
    MaterialElevationDirective = __decorate([
        Directive({
            selector: '[appMaterialElevation]'
        })
    ], MaterialElevationDirective);
    return MaterialElevationDirective;
}());

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
        ]
    },
];
var OnboardingModule = /** @class */ (function () {
    function OnboardingModule(parentModule) {
        if (parentModule) {
            throw new Error('OnboardingModule is already loaded. Import it in the AppModule only');
        }
    }
    OnboardingModule_1 = OnboardingModule;
    OnboardingModule.forRoot = function (config) {
        return {
            ngModule: OnboardingModule_1,
            providers: [
                { provide: '__NgxOnboarding__', useValue: config },
                OnboardingService
            ]
        };
    };
    var OnboardingModule_1;
    OnboardingModule.ctorParameters = function () { return [
        { type: OnboardingModule, decorators: [{ type: Optional }, { type: SkipSelf }] }
    ]; };
    OnboardingModule = OnboardingModule_1 = __decorate([
        NgModule({
            declarations: [MaterialElevationDirective, OnboardingComponent, CreateProfileTemplateComponent, ProfileListComponent, SubCategoryComponent],
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
                MatDialogModule
            ],
            providers: [OnboardingService],
            exports: [OnboardingComponent, HttpClientModule, CreateProfileTemplateComponent, ProfileListComponent, OnboardingComponent, RouterModule]
        }),
        __param(0, Optional()), __param(0, SkipSelf())
    ], OnboardingModule);
    return OnboardingModule;
}());

/**
 * Generated bundle index. Do not edit.
 */

export { CreateProfileTemplateComponent, OnboardingComponent, OnboardingModule, OnboardingService, ProfileListComponent, onBoardingRoutes, MaterialElevationDirective as ɵa, SubCategoryComponent as ɵb };
//# sourceMappingURL=onboarding.js.map
