(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common/http'), require('@angular/core'), require('rxjs'), require('@angular/router'), require('@angular/forms'), require('@angular/cdk/keycodes'), require('@angular/cdk/drag-drop'), require('@angular/material/paginator'), require('@angular/material/sort'), require('@angular/material/table'), require('@angular/common'), require('@angular/platform-browser'), require('@angular/platform-browser/animations'), require('@angular/material/form-field'), require('@angular/material/button'), require('@angular/material/checkbox'), require('@angular/material/icon'), require('@angular/material/select'), require('@angular/material/chips'), require('@angular/material/input'), require('@angular/material/grid-list'), require('@angular/material/radio'), require('@angular/cdk/table'), require('@angular/material/card'), require('@angular/material/dialog')) :
    typeof define === 'function' && define.amd ? define('onboarding', ['exports', '@angular/common/http', '@angular/core', 'rxjs', '@angular/router', '@angular/forms', '@angular/cdk/keycodes', '@angular/cdk/drag-drop', '@angular/material/paginator', '@angular/material/sort', '@angular/material/table', '@angular/common', '@angular/platform-browser', '@angular/platform-browser/animations', '@angular/material/form-field', '@angular/material/button', '@angular/material/checkbox', '@angular/material/icon', '@angular/material/select', '@angular/material/chips', '@angular/material/input', '@angular/material/grid-list', '@angular/material/radio', '@angular/cdk/table', '@angular/material/card', '@angular/material/dialog'], factory) :
    (global = global || self, factory(global.onboarding = {}, global.ng.common.http, global.ng.core, global.rxjs, global.ng.router, global.ng.forms, global.ng.cdk.keycodes, global.ng.cdk.dragDrop, global.ng.material.paginator, global.ng.material.sort, global.ng.material.table, global.ng.common, global.ng.platformBrowser, global.ng.platformBrowser.animations, global.ng.material.formField, global.ng.material.button, global.ng.material.checkbox, global.ng.material.icon, global.ng.material.select, global.ng.material.chips, global.ng.material.input, global.ng.material.gridList, global.ng.material.radio, global.ng.cdk.table, global.ng.material.card, global.ng.material.dialog));
}(this, (function (exports, http, core, rxjs, router, forms, keycodes, dragDrop, paginator, sort, table, common, platformBrowser, animations, formField, button, checkbox, icon, select, chips, input, gridList, radio, table$1, card, dialog) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __createBinding(o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
    }

    function __exportStar(m, exports) {
        for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m) return m.call(o);
        if (o && typeof o.length === "number") return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result.default = mod;
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to get private field on non-instance");
        }
        return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to set private field on non-instance");
        }
        privateMap.set(receiver, value);
        return value;
    }

    var OnboardingService = /** @class */ (function () {
        function OnboardingService(config, http) {
            this.http = http;
            this.token = new rxjs.BehaviorSubject(null);
            this.authentication = new core.EventEmitter();
            this._token = this.token.asObservable();
            this.lang = new rxjs.BehaviorSubject('');
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
                _this.header = new http.HttpHeaders({
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
            { type: undefined, decorators: [{ type: core.Inject, args: ['__NgxOnboarding__',] }] },
            { type: http.HttpClient }
        ]; };
        OnboardingService = __decorate([
            core.Injectable(),
            __param(0, core.Inject('__NgxOnboarding__'))
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
            { type: router.Router }
        ]; };
        OnboardingComponent = __decorate([
            core.Component({
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
            this.separatorKeysCodes = [keycodes.ENTER, keycodes.COMMA, keycodes.SEMICOLON];
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
                                Name: ["", forms.Validators.required],
                                Description: [""],
                                Tags: ["", forms.Validators.required],
                                Status: [false, forms.Validators.required],
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
                dragDrop.moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
            }
            else {
                dragDrop.transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
            }
        };
        CreateProfileTemplateComponent.prototype.ingoreDefaultAction = function (e) {
            e.preventDefault();
        };
        CreateProfileTemplateComponent.ctorParameters = function () { return [
            { type: forms.FormBuilder },
            { type: OnboardingService },
            { type: router.ActivatedRoute },
            { type: router.Router }
        ]; };
        CreateProfileTemplateComponent = __decorate([
            core.Component({
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
            this.dataSource = new table.MatTableDataSource([]);
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
                            this.dataSource = new table.MatTableDataSource(this.datas);
                            this.dataSource.paginator = this.paginator;
                            this.dataSource.sort = this.sort;
                            return [2 /*return*/];
                    }
                });
            });
        };
        ProfileListComponent.ctorParameters = function () { return [
            { type: OnboardingService },
            { type: router.Router }
        ]; };
        __decorate([
            core.ViewChild(paginator.MatPaginator)
        ], ProfileListComponent.prototype, "paginator", void 0);
        __decorate([
            core.ViewChild(sort.MatSort)
        ], ProfileListComponent.prototype, "sort", void 0);
        ProfileListComponent = __decorate([
            core.Component({
                selector: 'onboarding-profile-list',
                template: "<div class=\"main\">\n  <div class=\"header-list\">\n    <h2>On boarding</h2>\n    <p>Retrouvez ici, l\u2019ensemble des formulaires d\u2019on boarding que vous avez cr\u00E9\u00E9s</p>\n    <!-- <button mat-raised-button color=\"primary\" (click)='onAddProfil()'>Ajouter un prifil</button> -->\n  </div>\n  <div class=\"content-list\">\n    <h3>Fiches collaborateurs</h3>\n    <div class=\"list\">\n      <div class=\"box-template\">\n        <p>Nouvelle cat\u00E9gorie</p>\n        <a role=\"button\" [routerLink]=\"[this.service.mainPath+'/template-builder/0']\" mat-raised-button color=\"primary\">\n          <mat-icon>add</mat-icon>\n          Cr\u00E9er une fiche\n        </a>\n      </div>\n      <div appMaterialElevation [defaultElevation]=\"defaultElevation\" raisedElevation=\"16\" class=\"box-template\"\n        *ngFor=\"let d of datas\">\n        <div class=\"box-content\" [routerLink]=\"[this.service.mainPath+'/template-builder/'+d._id]\">\n          <img\n            src=\"data:image/png;base64,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\"\n            alt=\"\">\n          <p> {{d.Name}}</p>\n        </div>\n        <button (click)=\"onDelete($event,d._id)\" mat-mini-fab color=\"accent\" appMaterialElevation\n          [defaultElevation]=\"defaultElevation\" raisedElevation=\"16\">\n          <mat-icon>close</mat-icon>\n        </button>\n      </div>\n    </div>\n  </div>\n</div>",
                styles: [".main{background:no-repeat padding-box #f4f7f9;opacity:1;height:100%}.main .header-list{margin-left:50px;padding-top:10px}.main .header-list h2{text-align:left;font:bold 32px/30px Nexa Text;letter-spacing:0;color:#171f26;opacity:1}.main .header-list p{text-align:left;font:20px/26px Nexa Text;letter-spacing:0;color:#171f26;opacity:1}.main .content-list{background-color:#fff;border-radius:8px;opacity:1;margin:57px;height:80%;padding:49px}.main .content-list .list{display:flex;flex-wrap:wrap}.main .content-list .list h3{text-align:left;font:bold 23px/30px Nexa Text;letter-spacing:0;color:#171f26;opacity:1}.main .content-list .list .box-template{width:328px;position:relative;height:228px;margin-right:50px;margin-bottom:50px;background:no-repeat padding-box #f4f7f9;border:1px solid #dce4e9;border-radius:6px;opacity:1;display:flex;flex-direction:column;justify-content:center;align-items:center;cursor:pointer}.main .content-list .list .box-template img{width:81px;height:81px}.main .content-list .list .box-template p{text-align:center;font:bold 16px/25px Nexa Text;letter-spacing:.1px;color:#5a607f;opacity:1}.main .content-list .list .box-template a{background:no-repeat padding-box #5a607f;border-radius:7px;font-size:15px}.main .content-list .list .box-template .mat-mini-fab{display:none}::ng-deep .box-template:hover .mat-mini-fab .mat-button-wrapper{padding:0!important;display:inline-block;line-height:0}::ng-deep .box-template:hover .mat-mini-fab{display:initial!important;position:absolute;right:6px;top:7px;background-color:red;width:25px;height:25px}::ng-deep .box-template:hover .mat-mini-fab .mat-icon{background-repeat:no-repeat;display:inline-block;fill:currentColor;height:37px;width:24px}.box-content{width:100%;height:90%;text-align:center;margin-top:15%}"]
            })
        ], ProfileListComponent);
        return ProfileListComponent;
    }());

    var SubCategoryComponent = /** @class */ (function () {
        function SubCategoryComponent() {
            this.onAddKeywordFromInput = new core.EventEmitter();
            this.onKeyPress = new core.EventEmitter();
            this.onDrop = new core.EventEmitter();
            this.onAddNewField = new core.EventEmitter();
            this.onRemoveField = new core.EventEmitter();
            this.onChangeType = new core.EventEmitter();
            this.onRemoveKeyword = new core.EventEmitter();
            this.onAddNewSubLevelField = new core.EventEmitter();
            this.onExpendMore = new core.EventEmitter();
            this.separatorKeysCodes = [keycodes.ENTER, keycodes.COMMA, keycodes.SEMICOLON];
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
            core.Input()
        ], SubCategoryComponent.prototype, "field", void 0);
        __decorate([
            core.Input()
        ], SubCategoryComponent.prototype, "length", void 0);
        __decorate([
            core.Input()
        ], SubCategoryComponent.prototype, "i", void 0);
        __decorate([
            core.Input()
        ], SubCategoryComponent.prototype, "j", void 0);
        __decorate([
            core.Output()
        ], SubCategoryComponent.prototype, "onAddKeywordFromInput", void 0);
        __decorate([
            core.Output()
        ], SubCategoryComponent.prototype, "onKeyPress", void 0);
        __decorate([
            core.Output()
        ], SubCategoryComponent.prototype, "onDrop", void 0);
        __decorate([
            core.Output()
        ], SubCategoryComponent.prototype, "onAddNewField", void 0);
        __decorate([
            core.Output()
        ], SubCategoryComponent.prototype, "onRemoveField", void 0);
        __decorate([
            core.Output()
        ], SubCategoryComponent.prototype, "onChangeType", void 0);
        __decorate([
            core.Output()
        ], SubCategoryComponent.prototype, "onRemoveKeyword", void 0);
        __decorate([
            core.Output()
        ], SubCategoryComponent.prototype, "onAddNewSubLevelField", void 0);
        __decorate([
            core.Output()
        ], SubCategoryComponent.prototype, "onExpendMore", void 0);
        SubCategoryComponent = __decorate([
            core.Component({
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
            { type: core.ElementRef },
            { type: core.Renderer2 }
        ]; };
        __decorate([
            core.Input()
        ], MaterialElevationDirective.prototype, "defaultElevation", void 0);
        __decorate([
            core.Input()
        ], MaterialElevationDirective.prototype, "raisedElevation", void 0);
        __decorate([
            core.HostListener('mouseenter')
        ], MaterialElevationDirective.prototype, "onMouseEnter", null);
        __decorate([
            core.HostListener('mouseleave')
        ], MaterialElevationDirective.prototype, "onMouseLeave", null);
        MaterialElevationDirective = __decorate([
            core.Directive({
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
            { type: OnboardingModule, decorators: [{ type: core.Optional }, { type: core.SkipSelf }] }
        ]; };
        OnboardingModule = OnboardingModule_1 = __decorate([
            core.NgModule({
                declarations: [MaterialElevationDirective, OnboardingComponent, CreateProfileTemplateComponent, ProfileListComponent, SubCategoryComponent],
                imports: [
                    forms.FormsModule,
                    formField.MatFormFieldModule,
                    button.MatButtonModule,
                    common.CommonModule,
                    platformBrowser.BrowserModule,
                    animations.BrowserAnimationsModule,
                    forms.FormsModule,
                    forms.ReactiveFormsModule,
                    checkbox.MatCheckboxModule,
                    icon.MatIconModule,
                    select.MatSelectModule,
                    input.MatInputModule,
                    chips.MatChipsModule,
                    gridList.MatGridListModule,
                    radio.MatRadioModule,
                    paginator.MatPaginatorModule,
                    table$1.CdkTableModule,
                    sort.MatSortModule,
                    table.MatTableModule,
                    router.RouterModule.forChild(onBoardingRoutes),
                    dragDrop.DragDropModule,
                    card.MatCardModule,
                    dialog.MatDialogModule
                ],
                providers: [OnboardingService],
                exports: [OnboardingComponent, http.HttpClientModule, CreateProfileTemplateComponent, ProfileListComponent, OnboardingComponent, router.RouterModule]
            }),
            __param(0, core.Optional()), __param(0, core.SkipSelf())
        ], OnboardingModule);
        return OnboardingModule;
    }());

    exports.CreateProfileTemplateComponent = CreateProfileTemplateComponent;
    exports.OnboardingComponent = OnboardingComponent;
    exports.OnboardingModule = OnboardingModule;
    exports.OnboardingService = OnboardingService;
    exports.ProfileListComponent = ProfileListComponent;
    exports.onBoardingRoutes = onBoardingRoutes;
    exports.ɵa = MaterialElevationDirective;
    exports.ɵb = SubCategoryComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=onboarding.umd.js.map
