import { __awaiter, __generator, __decorate, __param, __assign } from 'tslib';
import { HttpHeaders, HttpClient, HttpClientModule } from '@angular/common/http';
import { EventEmitter, Inject, Injectable, Component, Optional, SkipSelf, NgModule } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Validators, FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TagInputModule } from 'ngx-chips';

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
    function OnboardingComponent(service) {
        this.service = service;
    }
    OnboardingComponent.prototype.ngOnInit = function () {
    };
    OnboardingComponent.ctorParameters = function () { return [
        { type: OnboardingService }
    ]; };
    OnboardingComponent = __decorate([
        Component({
            selector: 'ngx-onboarding',
            template: "<!-- <onboarding-create-profile-template></onboarding-create-profile-template> -->\n<router-outlet></router-outlet>",
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
    CreateProfileTemplateComponent.ctorParameters = function () { return [
        { type: FormBuilder },
        { type: OnboardingService },
        { type: ActivatedRoute },
        { type: Router }
    ]; };
    CreateProfileTemplateComponent = __decorate([
        Component({
            selector: 'onboarding-create-profile-template',
            template: "<div class=\"container\">\n  <h3>Cr\u00E9ation de profil</h3>\n  <form [formGroup]=\"form\" (submit)=\"onSubmit()\">\n    <div class=\"full-width\">\n      <label>Nom du profil</label>\n      <input\n        type=\"text\"\n        class=\"form-control\"\n        formControlName=\"Name\"\n        placeholder=\"Ex. Manager\"\n      />\n      <p class=\"error\" *ngIf=\"form.get('Name').hasError('required')\">\n        Profil est <strong>requis</strong>\n      </p>\n    </div>\n    <div class=\"full-width\">\n      <label>D\u00E9scription</label>\n      <textarea\n        type=\"text\"\n        class=\"form-control\"\n        formControlName=\"Description\"\n        placeholder=\"\"\n      ></textarea>\n    </div>  \n    <div class=\"full-width\">\n      <label>Tags</label>\n      <select formControlName=\"Tags\" required>\n        <option *ngFor=\"let tag of tags\" [value]=\"tag\">{{tag}}</option>\n      </select>\n    </div>\n    <div>\n    <input type=\"checkbox\" name=\"status\" formControlName=\"Status\">\n    <label for=\"status\">Active</label>\n    </div>\n\n    <hr />\n    <div class=\"category\">\n      <h2>Liste de cat\u00E9gories</h2>\n      <div class=\"category-item\" *ngFor=\"let category of categories;  let i=index\">\n        <div class=\"field-item\">\n          <div class=\"full-width input-category-name\" >\n            <label>Cat\u00E9gorie</label>\n            <input\n              type=\"text\"\n              required\n              [readonly]=\"categories.length<4\"\n              [(ngModel)]=\"category.name\"\n              [ngModelOptions]=\"{standalone: true}\"\n              placeholder=\"\"\n            />\n            <p class=\"error\" *ngIf=\"category.name == ''\">\n              Cat\u00E9gorie est <strong>requis</strong>\n            </p>\n          </div>\n          <div>\n            <button [disabled]=\"i<3\" (click)=\"onRemoveCategory($event,i)\" class=\"danger\">Supprimer</button>\n          </div>\n        </div>\n        <div class=\"field-item\" *ngFor=\"let field of category.forms;let j=index\">\n          <div class=\"full-width field-size\">\n            <label>Label</label>\n            <input\n              type=\"text\"\n              required\n              [ngModelOptions]=\"{standalone: true}\"\n              [(ngModel)]=\"field.label\"\n              placeholder=\"\"\n            />\n            <p class=\"error\" *ngIf=\"field.label === ''\">\n              Label est <strong>requis</strong>\n            </p>\n          </div>\n\n          <div class=\"full-width field-size\">\n            <label>Type</label>\n            <select [(ngModel)]=\"field.type\" required [ngModelOptions]=\"{standalone: true}\" (ngModelChange)=\"onChangeType(field.type,i,j)\">\n              <option value=\"text\">Text</option>\n              <option value=\"radio\">Radio</option>\n              <option value=\"select\">Selecteur</option>\n              <option value=\"checkbox\">Checkbox</option>\n            </select>\n          </div>\n          <div class=\"full-width field-size\" *ngIf=\"field.type==='text' || field.type===''\">\n            <label>Valeur</label>\n            <input\n              type=\"text\"\n              matInput\n              [ngModelOptions]=\"{standalone: true}\"\n              [(ngModel)]=\"field.value\"\n              placeholder=\"\"\n            >\n          </div>\n          \n          <div class=\"flex-auto w-30 field-size\" *ngIf=\"field.type==='checkbox'\">\n            <input name=\"value\" type=\"checkbox\" [(ngModel)]=\"field.value\" [ngModelOptions]=\"{standalone: true}\" >\n            <label for=\"value\">Valeur</label>\n          </div>\n          \n          <div *ngIf=\"field.type=='radio' || field.type=='select'\" class=\"flex-auto w-30 field-size\">\n            <label> Valeur </label>\n\n            <tag-input [(ngModel)]='field.value' placeholder=\"add...\" [ngModelOptions]=\"{standalone: true}\" ></tag-input>\n          </div>\n              <button  (click)='onAddNewField($event,i)'>\n            add\n          </button>\n          <button class=\"delete-field\" (click)=\"onRemoveField($event,i,j)\" [disabled]=\"category.forms.length<2\">\n             suppr\n          </button>\n      <div class=\"flex-auto w-30 field-size\">\n            <input name=\"value\" type=\"checkbox\"  [(ngModel)]=\"field.isMandatory\" [ngModelOptions]=\"{standalone: true}\" >\n            <label for=\"value\">Obligatoire</label>\n          </div>\n          </div>\n      </div>\n    </div>\n    <div class=\"action\">\n      <button (click)='onAddNewCategory($event)'>Ajouter une cat\u00E9gorie</button>\n      <a [routerLink]=\"['/profil-list']\"  role=\"button\">Liste des profils</a>\n      <button type=\"submit\">Valider</button>\n    </div>\n  </form>\n</div>\n",
            styles: [".container{max-width:98%;margin:50px auto auto;padding-bottom:50px}.container .action{width:100%;display:flex;justify-content:space-between}.input-category-name{font-size:15px;font-weight:500}.example-full-width{width:100%}.field-item{display:flex;justify-content:space-between;align-items:center}.field-action{width:10%}.field-size{width:90%;margin:auto 2% auto auto}hr{margin:50px 0}::ng-deep .mat-form-field-appearance-fill .mat-form-field-flex{background-color:#fff}.category-aciton{display:flex;width:100%}.delete-field{margin:auto 2%}.radio-group .mat-radio-button{margin-right:10px}.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary{background-color:#3f51b5;color:#fff;min-height:20px;font-size:10px}.form-control{border:1px solid grey;border-radius:3px;padding:5px;margin:2px}.error{color:red}.ng-invalid{border-color:red}.full-width{width:100%}"]
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
                        return [2 /*return*/];
                }
            });
        });
    };
    ProfileListComponent.ctorParameters = function () { return [
        { type: OnboardingService },
        { type: Router }
    ]; };
    ProfileListComponent = __decorate([
        Component({
            selector: 'onboarding-profile-list',
            template: "<div class=\"main\">\n  <div class=\"header-list\">\n    <h2>On boarding</h2>\n    <p>Retrouvez ici, l\u2019ensemble des formulaires d\u2019on boarding que vous avez cr\u00E9\u00E9s</p>\n    <!-- <button mat-raised-button color=\"primary\" (click)='onAddProfil()'>Ajouter un prifil</button> -->\n  </div>\n  <div class=\"content-list\">\n    <h3>Fiches collaborateurs</h3>\n    <div class=\"list\">\n      <div class=\"box-template\">\n        <p>Nouvelle cat\u00E9gorie</p>\n        <a role=\"button\" [routerLink]=\"['/profil-form/0']\"   mat-raised-button color=\"primary\">\n          <span>add</span>\n          Cr\u00E9er une fiche\n        </a>\n      </div>\n      <div class=\"box-template\" *ngFor=\"let d of datas\" [routerLink]=\"['/profil-form/'+ d._id]\">\n        <img src=\"data:image/png;base64,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\" alt=\"\">\n        <p> {{d.Name}}</p>\n      </div>\n    </div>\n    </div>\n</div>",
            styles: [".main{background:no-repeat padding-box #f4f7f9;opacity:1;height:100%}.main .header-list{margin-left:50px;padding-top:10px}.main .header-list h2{text-align:left;font:bold 32px/30px Nexa Text;letter-spacing:0;color:#171f26;opacity:1}.main .header-list p{text-align:left;font:20px/26px Nexa Text;letter-spacing:0;color:#171f26;opacity:1}.main .content-list{background-color:#fff;border-radius:8px;opacity:1;margin:57px;height:80%;padding:49px}.main .content-list .list{display:flex;flex-wrap:wrap}.main .content-list .list h3{text-align:left;font:bold 23px/30px Nexa Text;letter-spacing:0;color:#171f26;opacity:1}.main .content-list .list .box-template{width:328px;height:228px;margin-right:50px;margin-bottom:50px;background:no-repeat padding-box #f4f7f9;border:1px solid #dce4e9;border-radius:6px;opacity:1;display:flex;flex-direction:column;justify-content:center;align-items:center;cursor:pointer}.main .content-list .list .box-template img{width:81px;height:81px}.main .content-list .list .box-template p{text-align:center;font:bold 16px/25px Nexa Text;letter-spacing:.1px;color:#5a607f;opacity:1}.main .content-list .list .box-template a{background:no-repeat padding-box #5a607f;border-radius:7px;font-size:15px}"]
        })
    ], ProfileListComponent);
    return ProfileListComponent;
}());

;
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
            declarations: [OnboardingComponent, CreateProfileTemplateComponent, ProfileListComponent],
            imports: [
                FormsModule,
                HttpClientModule,
                CommonModule,
                BrowserModule,
                BrowserAnimationsModule,
                FormsModule,
                ReactiveFormsModule,
                TagInputModule,
                RouterModule.forRoot(routes)
            ],
            providers: [OnboardingService],
            exports: [OnboardingComponent, HttpClientModule, CreateProfileTemplateComponent, ProfileListComponent, OnboardingComponent]
        }),
        __param(0, Optional()), __param(0, SkipSelf())
    ], OnboardingModule);
    return OnboardingModule;
}());

/**
 * Generated bundle index. Do not edit.
 */

export { CreateProfileTemplateComponent, OnboardingComponent, OnboardingModule, OnboardingService, ProfileListComponent };
//# sourceMappingURL=onboarding.js.map
