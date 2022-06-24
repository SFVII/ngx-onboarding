(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common/http'), require('@angular/core'), require('rxjs'), require('@angular/router'), require('@angular/cdk/keycodes'), require('@angular/cdk/drag-drop'), require('@angular/forms'), require('@angular/material/dialog'), require('@angular/material/form-field'), require('@angular/material/input'), require('ngx-intl-tel-input'), require('@angular/material/select'), require('@angular/common'), require('@angular/material/button'), require('@angular/material/core'), require('@angular/material/icon'), require('@nicky-lenaers/ngx-scroll-to'), require('libphonenumber-js'), require('@angular/material/slide-toggle'), require('@angular/material/checkbox'), require('@angular/material/radio'), require('@angular/material/chips'), require('@angular/material/paginator'), require('@angular/material/sort'), require('@angular/material/table'), require('@angular/platform-browser'), require('@angular/platform-browser/animations'), require('@angular/material/stepper'), require('@angular/material/grid-list'), require('@angular/cdk/table'), require('@angular/material/progress-bar'), require('@angular/material/card'), require('@angular/material/tooltip'), require('moment'), require('table'), require('@angular/material/tabs')) :
    typeof define === 'function' && define.amd ? define('onboarding', ['exports', '@angular/common/http', '@angular/core', 'rxjs', '@angular/router', '@angular/cdk/keycodes', '@angular/cdk/drag-drop', '@angular/forms', '@angular/material/dialog', '@angular/material/form-field', '@angular/material/input', 'ngx-intl-tel-input', '@angular/material/select', '@angular/common', '@angular/material/button', '@angular/material/core', '@angular/material/icon', '@nicky-lenaers/ngx-scroll-to', 'libphonenumber-js', '@angular/material/slide-toggle', '@angular/material/checkbox', '@angular/material/radio', '@angular/material/chips', '@angular/material/paginator', '@angular/material/sort', '@angular/material/table', '@angular/platform-browser', '@angular/platform-browser/animations', '@angular/material/stepper', '@angular/material/grid-list', '@angular/cdk/table', '@angular/material/progress-bar', '@angular/material/card', '@angular/material/tooltip', 'moment', 'table', '@angular/material/tabs'], factory) :
    (global = global || self, factory(global.onboarding = {}, global.ng.common.http, global.ng.core, global.rxjs, global.ng.router, global.ng.cdk.keycodes, global.ng.cdk.dragDrop, global.ng.forms, global.ng.material.dialog, global.ng.material.formField, global.ng.material.input, global.ngxIntlTelInput, global.ng.material.select, global.ng.common, global.ng.material.button, global.ng.material.core, global.ng.material.icon, global.ngxScrollTo, global.libphonenumberJs, global.ng.material.slideToggle, global.ng.material.checkbox, global.ng.material.radio, global.ng.material.chips, global.ng.material.paginator, global.ng.material.sort, global.ng.material.table, global.ng.platformBrowser, global.ng.platformBrowser.animations, global.ng.material.stepper, global.ng.material.gridList, global.ng.cdk.table, global.ng.material.progressBar, global.ng.material.card, global.ng.material.tooltip, global.moment, global.table$2, global.ng.material.tabs));
}(this, (function (exports, http, core, rxjs, router, keycodes, dragDrop, forms, dialog, formField, input, ngxIntlTelInput, select, common, button, core$1, icon, ngxScrollTo, libphonenumberJs, slideToggle, checkbox, radio, chips, paginator, sort, table, platformBrowser, animations, stepper, gridList, table$1, progressBar, card, tooltip, moment, table$2, tabs) { 'use strict';

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
            this.canExit$ = new rxjs.Subject();
            this.token = new rxjs.BehaviorSubject(null);
            this._token = this.token.asObservable();
            this.templates = new rxjs.BehaviorSubject(null);
            this._templates = this.templates.asObservable();
            this.currentTemplate = new rxjs.BehaviorSubject(null);
            this._currentTemplate = this.currentTemplate.asObservable();
            this.currentOnboarding = new rxjs.BehaviorSubject(null);
            this._currentOnboarding = this.currentOnboarding.asObservable();
            this.onboarding = new rxjs.BehaviorSubject(null);
            this._onboarding = this.onboarding.asObservable();
            this.contacts = new rxjs.BehaviorSubject(null);
            this._contacts = this.contacts.asObservable();
            this.authentication = new core.EventEmitter();
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
                            }, function () {
                                resolve(false);
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
                            }, function () {
                                resolve(false);
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
                                _this.currentTemplate.next(data);
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
        OnboardingService.prototype.getAllOnboarding = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.http.get(this.endpoint + "/onboarding", {
                                headers: this.header
                            }).subscribe(function (data) {
                                _this.onboarding.next(data);
                            })];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        OnboardingService.ɵfac = function OnboardingService_Factory(t) { return new (t || OnboardingService)(core.ɵɵinject('__NgxOnboarding__'), core.ɵɵinject(http.HttpClient)); };
        OnboardingService.ɵprov = core.ɵɵdefineInjectable({ token: OnboardingService, factory: OnboardingService.ɵfac });
        return OnboardingService;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(OnboardingService, [{
            type: core.Injectable
        }], function () { return [{ type: undefined, decorators: [{
                    type: core.Inject,
                    args: ['__NgxOnboarding__']
                }] }, { type: http.HttpClient }]; }, null); })();

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
        OnboardingComponent.ɵfac = function OnboardingComponent_Factory(t) { return new (t || OnboardingComponent)(core.ɵɵdirectiveInject(OnboardingService), core.ɵɵdirectiveInject(router.Router)); };
        OnboardingComponent.ɵcmp = core.ɵɵdefineComponent({ type: OnboardingComponent, selectors: [["ngx-onboarding"]], decls: 1, vars: 0, template: function OnboardingComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵelement(0, "router-outlet");
            } }, directives: [router.RouterOutlet], styles: [".main[_ngcontent-%COMP%]{background-color:red!important}"] });
        return OnboardingComponent;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(OnboardingComponent, [{
            type: core.Component,
            args: [{
                    selector: 'ngx-onboarding',
                    templateUrl: 'onboarding.component.html',
                    styleUrls: ['../../assets/main.scss']
                }]
        }], function () { return [{ type: OnboardingService }, { type: router.Router }]; }, null); })();

    function DialogCreateTemplateComponent_mat_option_11_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "mat-option", 8);
        core.ɵɵtext(1);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var tag_r486 = ctx.$implicit;
        core.ɵɵproperty("value", tag_r486);
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate(tag_r486);
    } }
    var DialogCreateTemplateComponent = /** @class */ (function () {
        function DialogCreateTemplateComponent(data, dialogRef, service) {
            this.data = data;
            this.dialogRef = dialogRef;
            this.service = service;
            this.tags = [];
            this.profil = {
                Name: '',
                Tags: ''
            };
        }
        DialogCreateTemplateComponent.prototype.ngOnInit = function () {
            var _a;
            this.tags = this.data.tags;
            this.profil = ((_a = this.data) === null || _a === void 0 ? void 0 : _a.profil) || this.profil;
        };
        DialogCreateTemplateComponent.prototype.onSelect = function (type) {
            this.dialogRef.close(type);
        };
        DialogCreateTemplateComponent.prototype.createProfil = function () {
            if (!this.disabled()) {
                this.dialogRef.close(this.profil);
            }
        };
        DialogCreateTemplateComponent.prototype.close = function () {
            this.dialogRef.close(false);
        };
        DialogCreateTemplateComponent.prototype.disabled = function () {
            return !(this.profil.Name !== "" && this.profil.Tags !== "");
        };
        DialogCreateTemplateComponent.ɵfac = function DialogCreateTemplateComponent_Factory(t) { return new (t || DialogCreateTemplateComponent)(core.ɵɵdirectiveInject(dialog.MAT_DIALOG_DATA), core.ɵɵdirectiveInject(dialog.MatDialogRef), core.ɵɵdirectiveInject(OnboardingService)); };
        DialogCreateTemplateComponent.ɵcmp = core.ɵɵdefineComponent({ type: DialogCreateTemplateComponent, selectors: [["lib-dialog-create-template"]], decls: 17, vars: 4, consts: [[1, "title"], ["appearance", "outline", 1, "full-width"], ["type", "text", "matInput", "", "placeholder", "Ex. Manager", 3, "ngModel", "ngModelChange"], ["required", "", 3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], [1, "action-content"], ["mat-raised-button", "", 1, "create-profil", 3, "disabled", "click"], ["mat-raised-button", "", 1, "abandon-profil", 3, "click"], [3, "value"]], template: function DialogCreateTemplateComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵelementStart(0, "mat-dialog-content");
                core.ɵɵelementStart(1, "h3", 0);
                core.ɵɵtext(2, "Cr\u00E9ation d\u2019un nouveau profil");
                core.ɵɵelementEnd();
                core.ɵɵelementStart(3, "mat-form-field", 1);
                core.ɵɵelementStart(4, "mat-label");
                core.ɵɵtext(5, "Nom de votre nouveau profil");
                core.ɵɵelementEnd();
                core.ɵɵelementStart(6, "input", 2);
                core.ɵɵlistener("ngModelChange", function DialogCreateTemplateComponent_Template_input_ngModelChange_6_listener($event) { return ctx.profil.Name = $event; });
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
                core.ɵɵelementStart(7, "mat-form-field", 1);
                core.ɵɵelementStart(8, "mat-label");
                core.ɵɵtext(9, "Tags");
                core.ɵɵelementEnd();
                core.ɵɵelementStart(10, "mat-select", 3);
                core.ɵɵlistener("ngModelChange", function DialogCreateTemplateComponent_Template_mat_select_ngModelChange_10_listener($event) { return ctx.profil.Tags = $event; });
                core.ɵɵtemplate(11, DialogCreateTemplateComponent_mat_option_11_Template, 2, 2, "mat-option", 4);
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
                core.ɵɵelementStart(12, "div", 5);
                core.ɵɵelementStart(13, "button", 6);
                core.ɵɵlistener("click", function DialogCreateTemplateComponent_Template_button_click_13_listener() { return ctx.createProfil(); });
                core.ɵɵtext(14, " Cr\u00E9er profil ");
                core.ɵɵelementEnd();
                core.ɵɵelementStart(15, "button", 7);
                core.ɵɵlistener("click", function DialogCreateTemplateComponent_Template_button_click_15_listener() { return ctx.close(); });
                core.ɵɵtext(16, " Abandonner ");
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
            } if (rf & 2) {
                core.ɵɵadvance(6);
                core.ɵɵproperty("ngModel", ctx.profil.Name);
                core.ɵɵadvance(4);
                core.ɵɵproperty("ngModel", ctx.profil.Tags);
                core.ɵɵadvance(1);
                core.ɵɵproperty("ngForOf", ctx.tags);
                core.ɵɵadvance(2);
                core.ɵɵproperty("disabled", ctx.disabled());
            } }, directives: [dialog.MatDialogContent, formField.MatFormField, formField.MatLabel, input.MatInput, forms.DefaultValueAccessor, forms.NgControlStatus, forms.NgModel, ngxIntlTelInput.NativeElementInjectorDirective, select.MatSelect, forms.RequiredValidator, common.NgForOf, button.MatButton, core$1.MatOption], styles: ["mat-dialog-content[_ngcontent-%COMP%]{display:flex!important;flex-direction:column;justify-content:flex-start;max-width:555px;min-width:555px}mat-dialog-content[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{margin-bottom:10px}mat-dialog-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-family:Nexa;font-style:normal;font-weight:700;font-size:20px;line-height:110%;display:flex;align-items:center;color:#242731}mat-dialog-content[_ngcontent-%COMP%]   .abandon-profil[_ngcontent-%COMP%]{background-color:transparent;border:1px solid #171f26;color:#171f26;margin-left:20px}mat-dialog-content[_ngcontent-%COMP%]   .create-profil[_ngcontent-%COMP%]{background-color:#171f26;border:1px solid #171f26;color:#fff}mat-dialog-content[_ngcontent-%COMP%]   .action-content[_ngcontent-%COMP%]{margin-bottom:10px}mat-dialog-content[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled, mat-dialog-content[_ngcontent-%COMP%]   button[disabled][_ngcontent-%COMP%]{opacity:.5}"] });
        return DialogCreateTemplateComponent;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(DialogCreateTemplateComponent, [{
            type: core.Component,
            args: [{
                    selector: 'lib-dialog-create-template',
                    templateUrl: './dialog-create-template.component.html',
                    styleUrls: ['./dialog-create-template.component.scss']
                }]
        }], function () { return [{ type: undefined, decorators: [{
                    type: core.Inject,
                    args: [dialog.MAT_DIALOG_DATA]
                }] }, { type: dialog.MatDialogRef }, { type: OnboardingService }]; }, null); })();

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
        ExitConfirmComponent.ɵfac = function ExitConfirmComponent_Factory(t) { return new (t || ExitConfirmComponent)(core.ɵɵdirectiveInject(dialog.MAT_DIALOG_DATA), core.ɵɵdirectiveInject(dialog.MatDialogRef), core.ɵɵdirectiveInject(OnboardingService)); };
        ExitConfirmComponent.ɵcmp = core.ɵɵdefineComponent({ type: ExitConfirmComponent, selectors: [["lib-exit-confirm"]], decls: 9, vars: 0, consts: [[1, "header"], ["mat-button", "", 1, "nowboard-btn", 2, "margin-top", "10px", 3, "click"], ["mat-button", "", 1, "cancel_btn", 3, "click"]], template: function ExitConfirmComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵelementStart(0, "mat-dialog-content");
                core.ɵɵelementStart(1, "div", 0);
                core.ɵɵtext(2, " Attention ! ");
                core.ɵɵelementEnd();
                core.ɵɵelementStart(3, "p");
                core.ɵɵtext(4, "Toutes vos donn\u00E9es seront perdues, \u00EAtes-vous certain de vouloir continuer ?");
                core.ɵɵelementEnd();
                core.ɵɵelementStart(5, "button", 1);
                core.ɵɵlistener("click", function ExitConfirmComponent_Template_button_click_5_listener() { return ctx.confirm(); });
                core.ɵɵtext(6, " Confirmer ");
                core.ɵɵelementEnd();
                core.ɵɵelementStart(7, "button", 2);
                core.ɵɵlistener("click", function ExitConfirmComponent_Template_button_click_7_listener() { return ctx.cancel(); });
                core.ɵɵtext(8, " Annuler ");
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
            } }, directives: [dialog.MatDialogContent, button.MatButton], styles: ["mat-dialog-content[_ngcontent-%COMP%]{display:flex!important;flex-direction:column!important;justify-content:center;align-items:center}mat-dialog-content[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]{color:#171f26;font:900 28px/48px sans-serif;letter-spacing:0;margin-bottom:10px;margin-top:30px;padding:0 15px;text-align:center}mat-dialog-content[_ngcontent-%COMP%]   .nowboard-btn[_ngcontent-%COMP%]{background-color:transparent!important;background-image:linear-gradient(90deg,#9d107d,#8b3391,#7647a0,#5f56a8,#4862ab)!important;color:#fff}mat-dialog-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#171f26;font:18px/24px nexa,Text;letter-spacing:0;padding:0 50px;margin-bottom:2vh;text-align:center}mat-dialog-content[_ngcontent-%COMP%]   .cancel_btn[_ngcontent-%COMP%]{background-color:transparent!important;margin-top:10px}mat-dialog-content[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:50%}"] });
        return ExitConfirmComponent;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(ExitConfirmComponent, [{
            type: core.Component,
            args: [{
                    selector: 'lib-exit-confirm',
                    templateUrl: './exit-confirm.component.html',
                    styleUrls: ['./exit-confirm.component.scss']
                }]
        }], function () { return [{ type: undefined, decorators: [{
                    type: core.Inject,
                    args: [dialog.MAT_DIALOG_DATA]
                }] }, { type: dialog.MatDialogRef }, { type: OnboardingService }]; }, null); })();

    function TypeComponent_button_1_Template(rf, ctx) { if (rf & 1) {
        var _r490 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "button", 1);
        core.ɵɵlistener("click", function TypeComponent_button_1_Template_button_click_0_listener() { core.ɵɵrestoreView(_r490); var item_r488 = ctx.$implicit; var ctx_r489 = core.ɵɵnextContext(); return ctx_r489.onSelect(item_r488.value); });
        core.ɵɵtext(1);
        core.ɵɵelementStart(2, "mat-icon");
        core.ɵɵtext(3);
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var item_r488 = ctx.$implicit;
        var ctx_r487 = core.ɵɵnextContext();
        core.ɵɵclassMap(ctx_r487.selectedType === item_r488.value ? "active" : "");
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate1(" ", item_r488.label, " ");
        core.ɵɵadvance(2);
        core.ɵɵtextInterpolate(item_r488.icon);
    } }
    var TypeComponent = /** @class */ (function () {
        function TypeComponent(data, dialogRef, service) {
            this.data = data;
            this.dialogRef = dialogRef;
            this.service = service;
            this.typeList = [{
                    label: 'Text Court',
                    icon: 'list_alt',
                    value: 'text'
                },
                {
                    label: 'Text Long',
                    icon: 'description',
                    value: 'textarea'
                },
                {
                    label: 'Options à choix unique',
                    icon: 'radio_button_checked',
                    value: 'radio'
                },
                {
                    label: 'Bouton On/Off',
                    icon: 'check_box_outline_blank',
                    value: 'toggle'
                },
                {
                    label: 'Checkbox',
                    icon: 'check_box',
                    value: 'checkbox'
                },
                {
                    label: 'Checkbox multiple',
                    icon: 'check_box',
                    value: 'checkbox_multiple'
                },
                {
                    label: 'Liste déroulante',
                    icon: 'keyboard_arrow_down',
                    value: 'select'
                },
                {
                    label: 'Email',
                    icon: 'mail',
                    value: 'email'
                },
                {
                    label: 'Mot de passe',
                    icon: 'lock',
                    value: 'password'
                },
                {
                    label: 'Téléphone',
                    icon: 'phone',
                    value: 'tel'
                },
                {
                    label: 'Date',
                    icon: 'date_range',
                    value: 'date'
                }];
            this.selectedType = "";
            this.selectedType = this.data.selectedType;
        }
        TypeComponent.prototype.ngOnInit = function () {
        };
        TypeComponent.prototype.onSelect = function (type) {
            this.dialogRef.close(type);
        };
        TypeComponent.ɵfac = function TypeComponent_Factory(t) { return new (t || TypeComponent)(core.ɵɵdirectiveInject(dialog.MAT_DIALOG_DATA), core.ɵɵdirectiveInject(dialog.MatDialogRef), core.ɵɵdirectiveInject(OnboardingService)); };
        TypeComponent.ɵcmp = core.ɵɵdefineComponent({ type: TypeComponent, selectors: [["lib-type"]], decls: 2, vars: 1, consts: [["mat-button", "", "class", "type-btn", "style", "margin-top: 10px", 3, "class", "click", 4, "ngFor", "ngForOf"], ["mat-button", "", 1, "type-btn", 2, "margin-top", "10px", 3, "click"]], template: function TypeComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵelementStart(0, "mat-dialog-content");
                core.ɵɵtemplate(1, TypeComponent_button_1_Template, 4, 4, "button", 0);
                core.ɵɵelementEnd();
            } if (rf & 2) {
                core.ɵɵadvance(1);
                core.ɵɵproperty("ngForOf", ctx.typeList);
            } }, directives: [dialog.MatDialogContent, common.NgForOf, button.MatButton, icon.MatIcon], styles: ["mat-dialog-content[_ngcontent-%COMP%]{display:flex!important;justify-content:center;align-items:center;flex-wrap:wrap;max-width:555px;overflow:hidden}mat-dialog-content[_ngcontent-%COMP%]   .type-btn[_ngcontent-%COMP%]{background:#e5e8ee;border-radius:4px;margin:5px;height:48px}mat-dialog-content[_ngcontent-%COMP%]   .type-btn.active[_ngcontent-%COMP%], mat-dialog-content[_ngcontent-%COMP%]   .type-btn[_ngcontent-%COMP%]:hover{background-color:transparent!important;background-image:linear-gradient(90deg,#9d107d,#8b3391,#7647a0,#5f56a8,#4862ab)!important;color:#fff}"] });
        return TypeComponent;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(TypeComponent, [{
            type: core.Component,
            args: [{
                    selector: 'lib-type',
                    templateUrl: './type.component.html',
                    styleUrls: ['./type.component.scss']
                }]
        }], function () { return [{ type: undefined, decorators: [{
                    type: core.Inject,
                    args: [dialog.MAT_DIALOG_DATA]
                }] }, { type: dialog.MatDialogRef }, { type: OnboardingService }]; }, null); })();

    var _c0 = function () { return { standalone: true }; };
    var _c1 = function () { return { display: "inine-block" }; };
    function SubTemplateProfileComponent_div_0_div_5_Template(rf, ctx) { if (rf & 1) {
        var _r796 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "div", 11);
        core.ɵɵelementStart(1, "span");
        core.ɵɵtext(2);
        core.ɵɵelementEnd();
        core.ɵɵelementStart(3, "mat-slide-toggle", 12);
        core.ɵɵlistener("ngModelChange", function SubTemplateProfileComponent_div_0_div_5_Template_mat_slide_toggle_ngModelChange_3_listener($event) { core.ɵɵrestoreView(_r796); var ctx_r795 = core.ɵɵnextContext(2); return ctx_r795.field.defaultValue = $event; });
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r788 = core.ɵɵnextContext(2);
        core.ɵɵadvance(2);
        core.ɵɵtextInterpolate(ctx_r788.field.label);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngModel", ctx_r788.field.defaultValue)("ngModelOptions", core.ɵɵpureFunction0(4, _c0))("ngStyle", ctx_r788.field.selector && core.ɵɵpureFunction0(5, _c1));
    } }
    function SubTemplateProfileComponent_div_0_div_6_mat_error_4_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "mat-error");
        core.ɵɵtext(1, "Le t\u00E9l\u00E9phone est invalide");
        core.ɵɵelementEnd();
    } }
    function SubTemplateProfileComponent_div_0_div_6_Template(rf, ctx) { if (rf & 1) {
        var _r799 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "div", 13);
        core.ɵɵelementStart(1, "mat-label", 14);
        core.ɵɵtext(2);
        core.ɵɵelementEnd();
        core.ɵɵelementStart(3, "ngx-intl-tel-input", 15);
        core.ɵɵlistener("input", function SubTemplateProfileComponent_div_0_div_6_Template_ngx_intl_tel_input_input_3_listener() { core.ɵɵrestoreView(_r799); var ctx_r798 = core.ɵɵnextContext(2); return ctx_r798.checkPhone(ctx_r798.field.value); })("ngModelChange", function SubTemplateProfileComponent_div_0_div_6_Template_ngx_intl_tel_input_ngModelChange_3_listener($event) { core.ɵɵrestoreView(_r799); var ctx_r800 = core.ɵɵnextContext(2); return ctx_r800.field.value = $event; });
        core.ɵɵelementEnd();
        core.ɵɵtemplate(4, SubTemplateProfileComponent_div_0_div_6_mat_error_4_Template, 2, 0, "mat-error", 16);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r789 = core.ɵɵnextContext(2);
        core.ɵɵadvance(2);
        core.ɵɵtextInterpolate(ctx_r789.field.label);
        core.ɵɵadvance(1);
        core.ɵɵproperty("cssClass", "input-phone")("preferredCountries", ctx_r789.preferredCountries)("enableAutoCountrySelect", false)("enablePlaceholder", true)("customPlaceholder", "Phone")("selectFirstCountry", false)("selectedCountryISO", ctx_r789.flag(ctx_r789.field.value))("maxLength", 15)("inputId", ctx_r789.field.key)("phoneValidation", true)("separateDialCode", ctx_r789.separateDialCode)("numberFormat", ctx_r789.PhoneNumberFormat.National)("ngModelOptions", core.ɵɵpureFunction0(16, _c0))("ngModel", ctx_r789.field.value);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", ctx_r789.invalideValue);
    } }
    function SubTemplateProfileComponent_div_0_div_7_mat_select_3_mat_option_1_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "mat-option", 21);
        core.ɵɵtext(1);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var select_r803 = ctx.$implicit;
        core.ɵɵproperty("value", select_r803.value);
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate1(" ", select_r803.value, " ");
    } }
    function SubTemplateProfileComponent_div_0_div_7_mat_select_3_Template(rf, ctx) { if (rf & 1) {
        var _r805 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "mat-select", 19);
        core.ɵɵlistener("ngModelChange", function SubTemplateProfileComponent_div_0_div_7_mat_select_3_Template_mat_select_ngModelChange_0_listener($event) { core.ɵɵrestoreView(_r805); var ctx_r804 = core.ɵɵnextContext(3); return ctx_r804.field.selector.value = $event; });
        core.ɵɵtemplate(1, SubTemplateProfileComponent_div_0_div_7_mat_select_3_mat_option_1_Template, 2, 2, "mat-option", 20);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r801 = core.ɵɵnextContext(3);
        core.ɵɵproperty("ngModel", ctx_r801.field.selector.value)("ngModelOptions", core.ɵɵpureFunction0(3, _c0));
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngForOf", ctx_r801.field.selector.defaultValue);
    } }
    function SubTemplateProfileComponent_div_0_div_7_Template(rf, ctx) { if (rf & 1) {
        var _r807 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "div", 17);
        core.ɵɵelementStart(1, "mat-checkbox", 12);
        core.ɵɵlistener("ngModelChange", function SubTemplateProfileComponent_div_0_div_7_Template_mat_checkbox_ngModelChange_1_listener($event) { core.ɵɵrestoreView(_r807); var ctx_r806 = core.ɵɵnextContext(2); return ctx_r806.field.value = $event; });
        core.ɵɵtext(2);
        core.ɵɵelementEnd();
        core.ɵɵtemplate(3, SubTemplateProfileComponent_div_0_div_7_mat_select_3_Template, 2, 4, "mat-select", 18);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r790 = core.ɵɵnextContext(2);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngModel", ctx_r790.field.value)("ngModelOptions", core.ɵɵpureFunction0(5, _c0))("ngStyle", ctx_r790.field.selector && core.ɵɵpureFunction0(6, _c1));
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate1(" ", ctx_r790.field.label, " ");
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", ctx_r790.field.selector);
    } }
    function SubTemplateProfileComponent_div_0_div_8_mat_checkbox_4_Template(rf, ctx) { if (rf & 1) {
        var _r811 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "mat-checkbox", 25);
        core.ɵɵlistener("ngModelChange", function SubTemplateProfileComponent_div_0_div_8_mat_checkbox_4_Template_mat_checkbox_ngModelChange_0_listener($event) { core.ɵɵrestoreView(_r811); var opt_r809 = ctx.$implicit; return opt_r809.checked = $event; });
        core.ɵɵtext(1);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var opt_r809 = ctx.$implicit;
        core.ɵɵproperty("checked", opt_r809.checked)("ngModel", opt_r809.checked)("ngModelOptions", core.ɵɵpureFunction0(4, _c0));
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate1(" ", opt_r809.value, " ");
    } }
    function SubTemplateProfileComponent_div_0_div_8_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "div", 22);
        core.ɵɵelementStart(1, "label");
        core.ɵɵtext(2);
        core.ɵɵelementEnd();
        core.ɵɵelementStart(3, "div", 23);
        core.ɵɵtemplate(4, SubTemplateProfileComponent_div_0_div_8_mat_checkbox_4_Template, 2, 5, "mat-checkbox", 24);
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r791 = core.ɵɵnextContext(2);
        core.ɵɵadvance(2);
        core.ɵɵtextInterpolate(ctx_r791.field.label);
        core.ɵɵadvance(2);
        core.ɵɵproperty("ngForOf", ctx_r791.field.defaultValue);
    } }
    function SubTemplateProfileComponent_div_0_div_9_mat_radio_button_4_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "mat-radio-button", 29);
        core.ɵɵtext(1);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var opt_r813 = ctx.$implicit;
        core.ɵɵproperty("value", opt_r813.value);
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate1("", opt_r813.value, " ");
    } }
    function SubTemplateProfileComponent_div_0_div_9_Template(rf, ctx) { if (rf & 1) {
        var _r815 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "div", 17);
        core.ɵɵelementStart(1, "label", 26);
        core.ɵɵtext(2);
        core.ɵɵelementEnd();
        core.ɵɵelementStart(3, "mat-radio-group", 27);
        core.ɵɵlistener("ngModelChange", function SubTemplateProfileComponent_div_0_div_9_Template_mat_radio_group_ngModelChange_3_listener($event) { core.ɵɵrestoreView(_r815); var ctx_r814 = core.ɵɵnextContext(2); return ctx_r814.field.value = $event; });
        core.ɵɵtemplate(4, SubTemplateProfileComponent_div_0_div_9_mat_radio_button_4_Template, 2, 2, "mat-radio-button", 28);
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r792 = core.ɵɵnextContext(2);
        core.ɵɵadvance(2);
        core.ɵɵtextInterpolate1(" ", ctx_r792.field.label, " ");
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngModel", ctx_r792.field.value)("required", ctx_r792.field.isMandatory);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngForOf", ctx_r792.field.defaultValue);
    } }
    function SubTemplateProfileComponent_div_0_div_10_mat_option_5_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "mat-option", 21);
        core.ɵɵtext(1);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var opt_r817 = ctx.$implicit;
        core.ɵɵproperty("value", opt_r817.value);
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate(opt_r817.value);
    } }
    function SubTemplateProfileComponent_div_0_div_10_Template(rf, ctx) { if (rf & 1) {
        var _r819 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "div", 30);
        core.ɵɵelementStart(1, "mat-form-field", 31);
        core.ɵɵelementStart(2, "mat-label");
        core.ɵɵtext(3);
        core.ɵɵelementEnd();
        core.ɵɵelementStart(4, "mat-select", 32);
        core.ɵɵlistener("ngModelChange", function SubTemplateProfileComponent_div_0_div_10_Template_mat_select_ngModelChange_4_listener($event) { core.ɵɵrestoreView(_r819); var ctx_r818 = core.ɵɵnextContext(2); return ctx_r818.field.value = $event; });
        core.ɵɵtemplate(5, SubTemplateProfileComponent_div_0_div_10_mat_option_5_Template, 2, 2, "mat-option", 20);
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r793 = core.ɵɵnextContext(2);
        core.ɵɵadvance(3);
        core.ɵɵtextInterpolate1(" ", ctx_r793.field.label, " ");
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngModel", ctx_r793.field.value)("ngModelOptions", core.ɵɵpureFunction0(4, _c0));
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngForOf", ctx_r793.field.defaultValue);
    } }
    function SubTemplateProfileComponent_div_0_mat_form_field_11_Template(rf, ctx) { if (rf & 1) {
        var _r821 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "mat-form-field", 33);
        core.ɵɵelementStart(1, "mat-label");
        core.ɵɵtext(2);
        core.ɵɵelementEnd();
        core.ɵɵelementStart(3, "input", 34);
        core.ɵɵlistener("ngModelChange", function SubTemplateProfileComponent_div_0_mat_form_field_11_Template_input_ngModelChange_3_listener($event) { core.ɵɵrestoreView(_r821); var ctx_r820 = core.ɵɵnextContext(2); return ctx_r820.field.defaultValue = $event; });
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r794 = core.ɵɵnextContext(2);
        core.ɵɵadvance(2);
        core.ɵɵtextInterpolate(ctx_r794.field.label);
        core.ɵɵadvance(1);
        core.ɵɵproperty("type", ctx_r794.field.type)("ngModelOptions", core.ɵɵpureFunction0(4, _c0))("ngModel", ctx_r794.field.defaultValue);
    } }
    function SubTemplateProfileComponent_div_0_Template(rf, ctx) { if (rf & 1) {
        var _r823 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "div", 1);
        core.ɵɵelementStart(1, "button", 2);
        core.ɵɵlistener("click", function SubTemplateProfileComponent_div_0_Template_button_click_1_listener($event) { core.ɵɵrestoreView(_r823); var ctx_r822 = core.ɵɵnextContext(); return ctx_r822.editBLock($event); });
        core.ɵɵelementStart(2, "mat-icon", 3);
        core.ɵɵtext(3, "settings");
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementContainerStart(4, 4);
        core.ɵɵtemplate(5, SubTemplateProfileComponent_div_0_div_5_Template, 4, 6, "div", 5);
        core.ɵɵtemplate(6, SubTemplateProfileComponent_div_0_div_6_Template, 5, 17, "div", 6);
        core.ɵɵtemplate(7, SubTemplateProfileComponent_div_0_div_7_Template, 4, 7, "div", 7);
        core.ɵɵtemplate(8, SubTemplateProfileComponent_div_0_div_8_Template, 5, 2, "div", 8);
        core.ɵɵtemplate(9, SubTemplateProfileComponent_div_0_div_9_Template, 5, 4, "div", 7);
        core.ɵɵtemplate(10, SubTemplateProfileComponent_div_0_div_10_Template, 6, 5, "div", 9);
        core.ɵɵtemplate(11, SubTemplateProfileComponent_div_0_mat_form_field_11_Template, 4, 5, "mat-form-field", 10);
        core.ɵɵelementContainerEnd();
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r787 = core.ɵɵnextContext();
        core.ɵɵadvance(4);
        core.ɵɵproperty("ngSwitch", ctx_r787.field.type);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngSwitchCase", "toggle");
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngSwitchCase", "tel");
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngSwitchCase", "checkbox");
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngSwitchCase", "checkbox_multiple");
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngSwitchCase", "radio");
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngSwitchCase", "select");
    } }
    var _c2 = [[["", 8, "child"]]];
    var _c3 = [".child"];
    var SubTemplateProfileComponent = /** @class */ (function () {
        function SubTemplateProfileComponent() {
            var _this = this;
            this.onAddKeywordFromInput = new core.EventEmitter();
            this.onKeyPress = new core.EventEmitter();
            this.onDrop = new core.EventEmitter();
            this.onAddNewField = new core.EventEmitter();
            this.onRemoveField = new core.EventEmitter();
            this.onChangeType = new core.EventEmitter();
            this.onRemoveKeyword = new core.EventEmitter();
            this.onAddNewSubLevelField = new core.EventEmitter();
            this.onExpendMore = new core.EventEmitter();
            this.onChangeLabel = new core.EventEmitter();
            this.onCheckedChip = new core.EventEmitter();
            this.onCheckedDefault = new core.EventEmitter();
            this.onGetConditionValues = new core.EventEmitter();
            this.onEditBlock = new core.EventEmitter();
            this.conditionData = [];
            this.onCheckValue = new core.EventEmitter();
            this.chipControl = new forms.FormControl(new Set());
            this.preferredCountries = [ngxIntlTelInput.CountryISO.UnitedStates, ngxIntlTelInput.CountryISO.France];
            this.PhoneNumberFormat = ngxIntlTelInput.PhoneNumberFormat;
            this.separatorKeysCodes = [keycodes.ENTER, keycodes.COMMA, keycodes.SEMICOLON];
            this.invalideValue = false;
            this.currentChip = "";
            this.separateDialCode = false;
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
        // checked(locationValue,value){
        //   return locationValue.includes(value)
        // }
        SubTemplateProfileComponent.prototype.editBLock = function (event) {
            event.preventDefault();
            this.onEditBlock.emit(true);
        };
        SubTemplateProfileComponent.prototype.flag = function (value) {
            var valueString = String(value);
            return valueString && libphonenumberJs.isValidPhoneNumber(valueString) ? libphonenumberJs.parsePhoneNumber(valueString).country : ngxIntlTelInput.CountryISO.France;
        };
        SubTemplateProfileComponent.prototype.checkPhone = function (phone) {
            if (phone) {
                var regex = new RegExp(/\+(9[976]\d|8[987530]\d|6[987]\d|5[90]\d|42\d|3[875]\d|2[98654321]\d|9[8543210]|8[6421]|6[6543210]|5[87654321]|4[987654310]|3[9643210]|2[70]|7|1)\W*\d\W*\d\W*\d\W*\d\W*\d\W*\d\W*\d\W*\d\W*(\d{1,2})$/);
                this.invalideValue = !regex.test(phone['e164Number']);
                this.onCheckValue.emit(this.invalideValue);
            }
            if (phone && phone["nationalNumber"] && phone["nationalNumber"] != '') {
                var p = phone['nationalNumber'].replaceAll(' ', '');
                var newp = '';
                for (var i = 0; i < p.length; i++) {
                    if (p.split('')[i]) {
                        if (i % 2 == 0 && i > 0) {
                            newp += ' ';
                        }
                        newp += p.split('')[i];
                    }
                }
                this.field.value = phone["nationalNumber"];
            }
        };
        SubTemplateProfileComponent.ɵfac = function SubTemplateProfileComponent_Factory(t) { return new (t || SubTemplateProfileComponent)(); };
        SubTemplateProfileComponent.ɵcmp = core.ɵɵdefineComponent({ type: SubTemplateProfileComponent, selectors: [["lib-sub-category"]], inputs: { field: "field", length: "length", i: "i", j: "j", conditionData: "conditionData" }, outputs: { onAddKeywordFromInput: "onAddKeywordFromInput", onKeyPress: "onKeyPress", onDrop: "onDrop", onAddNewField: "onAddNewField", onRemoveField: "onRemoveField", onChangeType: "onChangeType", onRemoveKeyword: "onRemoveKeyword", onAddNewSubLevelField: "onAddNewSubLevelField", onExpendMore: "onExpendMore", onChangeLabel: "onChangeLabel", onCheckedChip: "onCheckedChip", onCheckedDefault: "onCheckedDefault", onGetConditionValues: "onGetConditionValues", onEditBlock: "onEditBlock", onCheckValue: "onCheckValue" }, ngContentSelectors: _c3, decls: 2, vars: 1, consts: [["class", "field-item", 4, "ngIf"], [1, "field-item"], ["mat-raised-button", "", 1, "transparent-button", "setting", 3, "click"], [1, "setting-icon"], [3, "ngSwitch"], ["class", "flex-auto field-size toggle-button", 4, "ngSwitchCase"], ["class", "form-field full-width tel-input", 4, "ngSwitchCase"], ["class", "flex-auto field-size", 4, "ngSwitchCase"], ["class", "flex-auto field-size", "style", "width: 100%;", 4, "ngSwitchCase"], ["class", "flex-auto field-size select-content", 4, "ngSwitchCase"], ["class", "form-field field-size", "appearance", "outline", 4, "ngSwitchDefault"], [1, "flex-auto", "field-size", "toggle-button"], [1, "form-field", 3, "ngModel", "ngModelOptions", "ngStyle", "ngModelChange"], [1, "form-field", "full-width", "tel-input"], [1, "tel-label"], ["id", "onboarding-phone-input", "name", "phone", 1, "phone-input-profile", 3, "cssClass", "preferredCountries", "enableAutoCountrySelect", "enablePlaceholder", "customPlaceholder", "selectFirstCountry", "selectedCountryISO", "maxLength", "inputId", "phoneValidation", "separateDialCode", "numberFormat", "ngModelOptions", "ngModel", "input", "ngModelChange"], [4, "ngIf"], [1, "flex-auto", "field-size"], ["placeholder", "Company", "style", "display: inline-block; width: 50%", 3, "ngModel", "ngModelOptions", "ngModelChange", 4, "ngIf"], ["placeholder", "Company", 2, "display", "inline-block", "width", "50%", 3, "ngModel", "ngModelOptions", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], [1, "flex-auto", "field-size", 2, "width", "100%"], [1, "onboarding-select", 2, "margin-top", "20px"], ["class", "form-field", "style", "display: block; margin-bottom: 5px; margin-top: 10px; margin-right: 10px;", 3, "checked", "ngModel", "ngModelOptions", "ngModelChange", 4, "ngFor", "ngForOf"], [1, "form-field", 2, "display", "block", "margin-bottom", "5px", "margin-top", "10px", "margin-right", "10px", 3, "checked", "ngModel", "ngModelOptions", "ngModelChange"], [2, "display", "block"], ["aria-label", "Select an option", 1, "form-field", "radio-group", "field-size", "onboarding-select", 3, "ngModel", "required", "ngModelChange"], ["style", "margin-bottom: 20px;", 3, "value", 4, "ngFor", "ngForOf"], [2, "margin-bottom", "20px", 3, "value"], [1, "flex-auto", "field-size", "select-content"], ["appearance", "outline", 1, "mat-select", "flex-auto", "field-size"], [3, "ngModel", "ngModelOptions", "ngModelChange"], ["appearance", "outline", 1, "form-field", "field-size"], ["matInput", "", "placeholder", "", 3, "type", "ngModelOptions", "ngModel", "ngModelChange"]], template: function SubTemplateProfileComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵprojectionDef(_c2);
                core.ɵɵtemplate(0, SubTemplateProfileComponent_div_0_Template, 12, 7, "div", 0);
                core.ɵɵprojection(1);
            } if (rf & 2) {
                core.ɵɵproperty("ngIf", !ctx.field.forms || ctx.field.forms.length === 0);
            } }, directives: [common.NgIf, button.MatButton, icon.MatIcon, common.NgSwitch, common.NgSwitchCase, common.NgSwitchDefault, slideToggle.MatSlideToggle, forms.NgControlStatus, forms.NgModel, ngxIntlTelInput.NativeElementInjectorDirective, common.NgStyle, formField.MatLabel, ngxIntlTelInput.NgxIntlTelInputComponent, formField.MatError, checkbox.MatCheckbox, select.MatSelect, common.NgForOf, core$1.MatOption, radio.MatRadioGroup, forms.RequiredValidator, radio.MatRadioButton, formField.MatFormField, input.MatInput, forms.DefaultValueAccessor], styles: [".container[_ngcontent-%COMP%]{max-width:98%;margin:50px auto auto;padding-bottom:50px}.container[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:space-between}.input-category-name[_ngcontent-%COMP%]{font-size:15px;font-weight:500}.full-width[_ngcontent-%COMP%]{width:100%}.field-item[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;width:100%;flex-wrap:wrap;position:relative;margin-top:10px}.field-item[_ngcontent-%COMP%]   .button-action[_ngcontent-%COMP%]{background-color:#6fe8d7;height:100%;margin:auto 15px auto auto;display:flex}.field-item[_ngcontent-%COMP%]   .button-action[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{box-shadow:none;background-color:transparent;color:#fff}.field-item[_ngcontent-%COMP%]   .setting[_ngcontent-%COMP%]{position:absolute;top:-5px;right:-12px;z-index:1;background-color:#d5d6d7!important;border-radius:50px;width:40px!important;height:40px!important;display:none}.field-item[_ngcontent-%COMP%]:hover   .setting[_ngcontent-%COMP%]{display:block}.field-action[_ngcontent-%COMP%]{width:10%}hr[_ngcontent-%COMP%]{margin:50px 0}  .mat-form-field-appearance-fill .mat-form-field-flex{background-color:#fff}.category-action[_ngcontent-%COMP%]{display:flex;width:100%}.delete-field[_ngcontent-%COMP%]{margin:auto 2%}.radio-group[_ngcontent-%COMP%]   .mat-radio-button[_ngcontent-%COMP%]{margin-right:10px}.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary[_ngcontent-%COMP%]{background-color:#3f51b5;color:#fff;min-height:20px;font-size:10px}.move-icons[_ngcontent-%COMP%]{cursor:move}.category-item[_ngcontent-%COMP%]{display:flex;align-items:baseline;width:100%;border:1px solid #dce4e9;border-radius:8px}  .readonly.mat-form-field-appearance-outline .mat-form-field-outline{color:transparent!important}.field-content[_ngcontent-%COMP%]{width:100%}.cdk-drag-preview[_ngcontent-%COMP%]{box-sizing:border-box;border-radius:4px;box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.cdk-drag-placeholder[_ngcontent-%COMP%]{opacity:0}.cdk-drag-animating[_ngcontent-%COMP%], .example-list.cdk-drop-list-dragging[_ngcontent-%COMP%]   .category-item[_ngcontent-%COMP%]:not(.cdk-drag-placeholder){transition:transform 250ms cubic-bezier(0,0,.2,1)}.add-button-container[_ngcontent-%COMP%]{background:no-repeat padding-box #fff;border:1px dashed #dce4e9;border-radius:8px;margin-top:10px;padding:10px;display:flex;justify-content:center;align-items:center;width:98%;margin-left:0;margin-bottom:22px}.add-button-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{display:flex;align-items:center;background-color:transparent;border:none;cursor:pointer;font:17px/26px Nexa Text;letter-spacing:0;color:#c2c8d5;box-shadow:none}.expand-button[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%]{font-size:48px;margin-top:-20px;margin-right:15px}.transparent-button[_ngcontent-%COMP%]{background-color:transparent!important;box-shadow:none!important;width:40px!important;padding:0!important;margin:0!important;min-width:auto!important}.expand-button[_ngcontent-%COMP%]{color:#5a607f!important;background-color:transparent!important;box-shadow:none!important}.checkbox-condition[_ngcontent-%COMP%]{position:relative}.checkbox-condition[_ngcontent-%COMP%]   .condition-container[_ngcontent-%COMP%]{position:absolute;top:30px;width:500px;height:150px;background-color:#fff;border:1px dashed #dce4e9;z-index:1;left:0;border-radius:5px}.checkbox-condition[_ngcontent-%COMP%]   .condition-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{position:absolute;bottom:5px;left:0}.condition-help[_ngcontent-%COMP%]{cursor:pointer}.cdk-overlay-pane[_ngcontent-%COMP%]{width:100%}.child[_ngcontent-%COMP%]{margin-left:0}.child[_ngcontent-%COMP%]   .cdk-drop-list[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap}.toggle-button[_ngcontent-%COMP%]{display:flex;align-items:center}.toggle-button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin-right:10px}.onboarding-select[_ngcontent-%COMP%]{display:-ms-grid;display:grid;-ms-grid-columns:(1fr)[6];grid-template-columns:repeat(6,1fr)}  .country-dropdown{min-width:unset!important}  .tel-input{position:relative}  .tel-input .tel-label{font-size:12px;color:rgba(0,0,0,.6);position:absolute;z-index:1;background-color:#fff;padding:0 2px;left:8px;top:-7px}  .phone-input-profile{padding-bottom:0;padding-top:0;display:block!important;max-width:100%;font:14px/20px \"Nexa Text\"!important;width:100%}  .phone-input-profile .iti{width:100%!important}  .phone-input-profile input{outline:0;padding:19px;border-radius:5px;border-width:1px;width:100%;border:1px solid rgba(0,0,0,.12)}"] });
        return SubTemplateProfileComponent;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(SubTemplateProfileComponent, [{
            type: core.Component,
            args: [{
                    selector: 'lib-sub-category',
                    templateUrl: './sub-template-profile.component.html',
                    styleUrls: ['./sub-template-profile.component.scss']
                }]
        }], function () { return []; }, { field: [{
                type: core.Input
            }], length: [{
                type: core.Input
            }], i: [{
                type: core.Input
            }], j: [{
                type: core.Input
            }], onAddKeywordFromInput: [{
                type: core.Output
            }], onKeyPress: [{
                type: core.Output
            }], onDrop: [{
                type: core.Output
            }], onAddNewField: [{
                type: core.Output
            }], onRemoveField: [{
                type: core.Output
            }], onChangeType: [{
                type: core.Output
            }], onRemoveKeyword: [{
                type: core.Output
            }], onAddNewSubLevelField: [{
                type: core.Output
            }], onExpendMore: [{
                type: core.Output
            }], onChangeLabel: [{
                type: core.Output
            }], onCheckedChip: [{
                type: core.Output
            }], onCheckedDefault: [{
                type: core.Output
            }], onGetConditionValues: [{
                type: core.Output
            }], onEditBlock: [{
                type: core.Output
            }], conditionData: [{
                type: core.Input
            }], onCheckValue: [{
                type: core.Output
            }] }); })();

    function TemplateProfileCreateComponent_li_11_Template(rf, ctx) { if (rf & 1) {
        var _r499 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "li", 17);
        core.ɵɵlistener("click", function TemplateProfileCreateComponent_li_11_Template_li_click_0_listener() { core.ɵɵrestoreView(_r499); var cat_r496 = ctx.$implicit; var i_r497 = ctx.index; var ctx_r498 = core.ɵɵnextContext(); return ctx_r498.onActiveMenu(cat_r496, i_r497); });
        core.ɵɵelementStart(1, "span");
        core.ɵɵelementStart(2, "span", 18);
        core.ɵɵtext(3);
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var cat_r496 = ctx.$implicit;
        var i_r497 = ctx.index;
        var ctx_r491 = core.ɵɵnextContext();
        core.ɵɵclassMap(ctx_r491.editIndex === i_r497 ? "active" : "");
        core.ɵɵadvance(2);
        core.ɵɵproperty("ngxScrollTo", "#" + cat_r496.name);
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate(cat_r496.name);
    } }
    function TemplateProfileCreateComponent_div_26_mat_icon_13_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "mat-icon");
        core.ɵɵtext(1, "chevron_right");
        core.ɵɵelementEnd();
    } }
    function TemplateProfileCreateComponent_div_26_mat_icon_14_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "mat-icon");
        core.ɵɵtext(1, "expand_more");
        core.ɵɵelementEnd();
    } }
    function TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_div_3_Template(rf, ctx) { if (rf & 1) {
        var _r515 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "div", 42);
        core.ɵɵelementStart(1, "button", 21);
        core.ɵɵlistener("click", function TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_div_3_Template_button_click_1_listener($event) { core.ɵɵrestoreView(_r515); return $event.preventDefault(); });
        core.ɵɵelementStart(2, "mat-icon", 22);
        core.ɵɵtext(3, "drag_indicator");
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } }
    function TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_div_5_mat_icon_11_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "mat-icon");
        core.ɵɵtext(1, "expand_less ");
        core.ɵɵelementEnd();
    } }
    function TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_div_5_mat_icon_12_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "mat-icon");
        core.ɵɵtext(1, "expand_more ");
        core.ɵɵelementEnd();
    } }
    function TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_div_5_Template(rf, ctx) { if (rf & 1) {
        var _r519 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "div", 43);
        core.ɵɵelementStart(1, "div", 44);
        core.ɵɵelementStart(2, "div");
        core.ɵɵelementStart(3, "p", 25);
        core.ɵɵtext(4);
        core.ɵɵelementEnd();
        core.ɵɵelementStart(5, "p", 26);
        core.ɵɵtext(6);
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementStart(7, "button", 45);
        core.ɵɵlistener("click", function TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_div_5_Template_button_click_7_listener($event) { core.ɵɵrestoreView(_r519); var ctx_r520 = core.ɵɵnextContext(); var field_r508 = ctx_r520.$implicit; var j_r509 = ctx_r520.index; var i_r501 = core.ɵɵnextContext(3).index; var ctx_r518 = core.ɵɵnextContext(); $event.preventDefault(); return ctx_r518.onEditBlock(field_r508, i_r501, j_r509); });
        core.ɵɵelementStart(8, "mat-icon", 46);
        core.ɵɵtext(9, "settings");
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementStart(10, "button", 47);
        core.ɵɵlistener("click", function TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_div_5_Template_button_click_10_listener($event) { core.ɵɵrestoreView(_r519); var ctx_r523 = core.ɵɵnextContext(); var field_r508 = ctx_r523.$implicit; var j_r509 = ctx_r523.index; var i_r501 = core.ɵɵnextContext(3).index; var ctx_r522 = core.ɵɵnextContext(); return ctx_r522.onExpendMore({ event: $event, field: field_r508 }, i_r501, j_r509); });
        core.ɵɵtemplate(11, TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_div_5_mat_icon_11_Template, 2, 0, "mat-icon", 28);
        core.ɵɵtemplate(12, TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_div_5_mat_icon_12_Template, 2, 0, "mat-icon", 28);
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var field_r508 = core.ɵɵnextContext().$implicit;
        var ctx_r511 = core.ɵɵnextContext(4);
        core.ɵɵadvance(4);
        core.ɵɵtextInterpolate1(" ", field_r508.label, " ");
        core.ɵɵadvance(2);
        core.ɵɵtextInterpolate1(" Listes des informations n\u00E9cessaires pour la cr\u00E9ation de ", ctx_r511.catNameStart(field_r508.label) ? "l'" + field_r508.label : field_r508.label, " ");
        core.ɵɵadvance(4);
        core.ɵɵstyleProp("opacity", field_r508.forms && field_r508.forms.length > 0 ? 1 : 0);
        core.ɵɵproperty("disabled", !(field_r508.forms && field_r508.forms.length > 0));
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", !field_r508.expandMore);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", field_r508.expandMore);
    } }
    function TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_div_7_div_1_div_2_div_3_Template(rf, ctx) { if (rf & 1) {
        var _r536 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "div", 55);
        core.ɵɵelementStart(1, "button", 21);
        core.ɵɵlistener("click", function TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_div_7_div_1_div_2_div_3_Template_button_click_1_listener($event) { core.ɵɵrestoreView(_r536); return $event.preventDefault(); });
        core.ɵɵelementStart(2, "mat-icon", 22);
        core.ɵɵtext(3, " drag_indicator");
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } }
    function TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_div_7_div_1_div_2_div_5_mat_icon_10_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "mat-icon");
        core.ɵɵtext(1, " expand_less ");
        core.ɵɵelementEnd();
    } }
    function TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_div_7_div_1_div_2_div_5_mat_icon_11_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "mat-icon");
        core.ɵɵtext(1, " expand_more ");
        core.ɵɵelementEnd();
    } }
    var _c0$1 = function () { return { standalone: true }; };
    function TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_div_7_div_1_div_2_div_5_Template(rf, ctx) { if (rf & 1) {
        var _r541 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "div", 43);
        core.ɵɵelementStart(1, "div", 44);
        core.ɵɵelementStart(2, "div");
        core.ɵɵelementStart(3, "input", 56);
        core.ɵɵlistener("ngModelChange", function TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_div_7_div_1_div_2_div_5_Template_input_ngModelChange_3_listener($event) { core.ɵɵrestoreView(_r541); var child_r529 = core.ɵɵnextContext().$implicit; return child_r529.label = $event; });
        core.ɵɵelementEnd();
        core.ɵɵelementStart(4, "p", 26);
        core.ɵɵtext(5);
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementStart(6, "button", 45);
        core.ɵɵlistener("click", function TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_div_7_div_1_div_2_div_5_Template_button_click_6_listener($event) { core.ɵɵrestoreView(_r541); var ctx_r543 = core.ɵɵnextContext(); var child_r529 = ctx_r543.$implicit; var k_r530 = ctx_r543.index; var j_r509 = core.ɵɵnextContext(3).index; var i_r501 = core.ɵɵnextContext(3).index; var ctx_r542 = core.ɵɵnextContext(); $event.preventDefault(); return ctx_r542.onEditBlock(child_r529, i_r501, j_r509, k_r530); });
        core.ɵɵelementStart(7, "mat-icon", 46);
        core.ɵɵtext(8, "settings");
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementStart(9, "button", 47);
        core.ɵɵlistener("click", function TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_div_7_div_1_div_2_div_5_Template_button_click_9_listener($event) { core.ɵɵrestoreView(_r541); var ctx_r547 = core.ɵɵnextContext(); var child_r529 = ctx_r547.$implicit; var k_r530 = ctx_r547.index; var j_r509 = core.ɵɵnextContext(3).index; var i_r501 = core.ɵɵnextContext(3).index; var ctx_r546 = core.ɵɵnextContext(); return ctx_r546.onExpendMore({ event: $event, field: child_r529 }, i_r501, j_r509, k_r530); });
        core.ɵɵtemplate(10, TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_div_7_div_1_div_2_div_5_mat_icon_10_Template, 2, 0, "mat-icon", 28);
        core.ɵɵtemplate(11, TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_div_7_div_1_div_2_div_5_mat_icon_11_Template, 2, 0, "mat-icon", 28);
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var child_r529 = core.ɵɵnextContext().$implicit;
        var category_r500 = core.ɵɵnextContext(6).$implicit;
        var ctx_r532 = core.ɵɵnextContext();
        core.ɵɵadvance(3);
        core.ɵɵproperty("readonly", ctx_r532.categories.length < 4 || !category_r500.editable)("readonly", !category_r500.editable)("ngModel", child_r529.label)("ngModelOptions", core.ɵɵpureFunction0(10, _c0$1));
        core.ɵɵadvance(2);
        core.ɵɵtextInterpolate1(" Listes des informations n\u00E9cessaires pour la cr\u00E9ation de ", ctx_r532.catNameStart(child_r529.label) ? "l'" + child_r529.label : child_r529.label, " ");
        core.ɵɵadvance(4);
        core.ɵɵstyleProp("opacity", child_r529.forms && child_r529.forms.length > 0 ? 1 : 0);
        core.ɵɵproperty("disabled", !(child_r529.forms && child_r529.forms.length > 0));
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", !child_r529.expandMore);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", child_r529.expandMore);
    } }
    function TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_div_7_div_1_div_2_div_7_div_1_div_2_div_3_Template(rf, ctx) { if (rf & 1) {
        var _r560 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "div", 60);
        core.ɵɵelementStart(1, "button", 21);
        core.ɵɵlistener("click", function TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_div_7_div_1_div_2_div_7_div_1_div_2_div_3_Template_button_click_1_listener($event) { core.ɵɵrestoreView(_r560); return $event.preventDefault(); });
        core.ɵɵelementStart(2, "mat-icon", 22);
        core.ɵɵtext(3, " drag_indicator ");
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } }
    function TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_div_7_div_1_div_2_div_7_div_1_div_2_div_7_Template(rf, ctx) { if (rf & 1) {
        var _r563 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "div", 61);
        core.ɵɵelementStart(1, "button", 62);
        core.ɵɵlistener("click", function TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_div_7_div_1_div_2_div_7_div_1_div_2_div_7_Template_button_click_1_listener() { core.ɵɵrestoreView(_r563); var k_r530 = core.ɵɵnextContext(4).index; var j_r509 = core.ɵɵnextContext(3).index; var i_r501 = core.ɵɵnextContext(3).index; var ctx_r561 = core.ɵɵnextContext(); return ctx_r561.onAddNewField(i_r501, j_r509, k_r530); });
        core.ɵɵelementStart(2, "span");
        core.ɵɵtext(3, "Ajouter un champ");
        core.ɵɵelementEnd();
        core.ɵɵelementStart(4, "mat-icon");
        core.ɵɵtext(5, " add ");
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } }
    function TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_div_7_div_1_div_2_div_7_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
        var _r567 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "div", 58);
        core.ɵɵelementStart(1, "div", 34);
        core.ɵɵelementStart(2, "div", 35);
        core.ɵɵtemplate(3, TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_div_7_div_1_div_2_div_7_div_1_div_2_div_3_Template, 4, 0, "div", 59);
        core.ɵɵelementStart(4, "div", 37);
        core.ɵɵelementStart(5, "lib-sub-category", 39);
        core.ɵɵlistener("onCheckValue", function TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_div_7_div_1_div_2_div_7_div_1_div_2_Template_lib_sub_category_onCheckValue_5_listener($event) { core.ɵɵrestoreView(_r567); var ctx_r566 = core.ɵɵnextContext(10); return ctx_r566.onCheckValue($event); })("onAddKeywordFromInput", function TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_div_7_div_1_div_2_div_7_div_1_div_2_Template_lib_sub_category_onAddKeywordFromInput_5_listener($event) { core.ɵɵrestoreView(_r567); var l_r556 = ctx.index; var k_r530 = core.ɵɵnextContext(3).index; var j_r509 = core.ɵɵnextContext(3).index; var i_r501 = core.ɵɵnextContext(3).index; var ctx_r568 = core.ɵɵnextContext(); return ctx_r568.addKeywordFromInput($event.event, $event.prev, i_r501, j_r509, k_r530, l_r556); })("onKeyPress", function TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_div_7_div_1_div_2_div_7_div_1_div_2_Template_lib_sub_category_onKeyPress_5_listener($event) { core.ɵɵrestoreView(_r567); var l_r556 = ctx.index; var k_r530 = core.ɵɵnextContext(3).index; var j_r509 = core.ɵɵnextContext(3).index; var i_r501 = core.ɵɵnextContext(3).index; var ctx_r572 = core.ɵɵnextContext(); return ctx_r572.onKeyPress($event.event, i_r501, j_r509, k_r530, l_r556); })("onAddNewField", function TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_div_7_div_1_div_2_div_7_div_1_div_2_Template_lib_sub_category_onAddNewField_5_listener() { core.ɵɵrestoreView(_r567); var k_r530 = core.ɵɵnextContext(3).index; var j_r509 = core.ɵɵnextContext(3).index; var i_r501 = core.ɵɵnextContext(3).index; var ctx_r576 = core.ɵɵnextContext(); return ctx_r576.onAddNewField(i_r501, j_r509, k_r530); })("onRemoveField", function TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_div_7_div_1_div_2_div_7_div_1_div_2_Template_lib_sub_category_onRemoveField_5_listener() { core.ɵɵrestoreView(_r567); var l_r556 = ctx.index; var k_r530 = core.ɵɵnextContext(3).index; var j_r509 = core.ɵɵnextContext(3).index; var i_r501 = core.ɵɵnextContext(3).index; var ctx_r580 = core.ɵɵnextContext(); return ctx_r580.onRemoveField(i_r501, j_r509, k_r530, l_r556); })("onChangeType", function TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_div_7_div_1_div_2_div_7_div_1_div_2_Template_lib_sub_category_onChangeType_5_listener() { core.ɵɵrestoreView(_r567); var c2_r555 = ctx.$implicit; var l_r556 = ctx.index; var k_r530 = core.ɵɵnextContext(3).index; var j_r509 = core.ɵɵnextContext(3).index; var i_r501 = core.ɵɵnextContext(3).index; var ctx_r584 = core.ɵɵnextContext(); return ctx_r584.onChangeType(c2_r555.type, i_r501, j_r509, k_r530, l_r556); })("onRemoveKeyword", function TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_div_7_div_1_div_2_div_7_div_1_div_2_Template_lib_sub_category_onRemoveKeyword_5_listener($event) { core.ɵɵrestoreView(_r567); var l_r556 = ctx.index; var k_r530 = core.ɵɵnextContext(3).index; var j_r509 = core.ɵɵnextContext(3).index; var i_r501 = core.ɵɵnextContext(3).index; var ctx_r588 = core.ɵɵnextContext(); return ctx_r588.removeKeyword($event.event, i_r501, j_r509, k_r530, l_r556); })("onAddNewSubLevelField", function TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_div_7_div_1_div_2_div_7_div_1_div_2_Template_lib_sub_category_onAddNewSubLevelField_5_listener() { core.ɵɵrestoreView(_r567); var l_r556 = ctx.index; var k_r530 = core.ɵɵnextContext(3).index; var j_r509 = core.ɵɵnextContext(3).index; var i_r501 = core.ɵɵnextContext(3).index; var ctx_r592 = core.ɵɵnextContext(); return ctx_r592.onAddNewSubLevelField(i_r501, j_r509, k_r530, l_r556); })("onExpendMore", function TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_div_7_div_1_div_2_div_7_div_1_div_2_Template_lib_sub_category_onExpendMore_5_listener($event) { core.ɵɵrestoreView(_r567); var l_r556 = ctx.index; var k_r530 = core.ɵɵnextContext(3).index; var j_r509 = core.ɵɵnextContext(3).index; var i_r501 = core.ɵɵnextContext(3).index; var ctx_r596 = core.ɵɵnextContext(); return ctx_r596.onExpendMore($event, i_r501, j_r509, k_r530, l_r556); })("onChangeLabel", function TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_div_7_div_1_div_2_div_7_div_1_div_2_Template_lib_sub_category_onChangeLabel_5_listener($event) { core.ɵɵrestoreView(_r567); var l_r556 = ctx.index; var k_r530 = core.ɵɵnextContext(3).index; var j_r509 = core.ɵɵnextContext(3).index; var i_r501 = core.ɵɵnextContext(3).index; var ctx_r600 = core.ɵɵnextContext(); return ctx_r600.onChangeLabel($event, i_r501, j_r509, k_r530, l_r556); })("onCheckedChip", function TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_div_7_div_1_div_2_div_7_div_1_div_2_Template_lib_sub_category_onCheckedChip_5_listener($event) { core.ɵɵrestoreView(_r567); var l_r556 = ctx.index; var k_r530 = core.ɵɵnextContext(3).index; var j_r509 = core.ɵɵnextContext(3).index; var i_r501 = core.ɵɵnextContext(3).index; var ctx_r604 = core.ɵɵnextContext(); return ctx_r604.onCheckedChip($event, i_r501, j_r509, k_r530, l_r556); })("onDrop", function TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_div_7_div_1_div_2_div_7_div_1_div_2_Template_lib_sub_category_onDrop_5_listener($event) { core.ɵɵrestoreView(_r567); var ctx_r608 = core.ɵɵnextContext(10); return ctx_r608.drop($event); })("onCheckedDefault", function TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_div_7_div_1_div_2_div_7_div_1_div_2_Template_lib_sub_category_onCheckedDefault_5_listener($event) { core.ɵɵrestoreView(_r567); var l_r556 = ctx.index; var k_r530 = core.ɵɵnextContext(3).index; var j_r509 = core.ɵɵnextContext(3).index; var i_r501 = core.ɵɵnextContext(3).index; var ctx_r609 = core.ɵɵnextContext(); return ctx_r609.onCheckedDefault($event, i_r501, j_r509, k_r530, l_r556); })("onEditBlock", function TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_div_7_div_1_div_2_div_7_div_1_div_2_Template_lib_sub_category_onEditBlock_5_listener() { core.ɵɵrestoreView(_r567); var c2_r555 = ctx.$implicit; var l_r556 = ctx.index; var k_r530 = core.ɵɵnextContext(3).index; var j_r509 = core.ɵɵnextContext(3).index; var i_r501 = core.ɵɵnextContext(3).index; var ctx_r613 = core.ɵɵnextContext(); return ctx_r613.onEditBlock(c2_r555, i_r501, j_r509, k_r530, l_r556); })("onGetConditionValues", function TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_div_7_div_1_div_2_div_7_div_1_div_2_Template_lib_sub_category_onGetConditionValues_5_listener() { core.ɵɵrestoreView(_r567); var ctx_r617 = core.ɵɵnextContext(10); return ctx_r617.getConditionValues(); });
        core.ɵɵelement(6, "div", 48);
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵtemplate(7, TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_div_7_div_1_div_2_div_7_div_1_div_2_div_7_Template, 6, 0, "div", 54);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var c2_r555 = ctx.$implicit;
        var l_r556 = ctx.index;
        var ctx_r618 = core.ɵɵnextContext(3);
        var child_r529 = ctx_r618.$implicit;
        var k_r530 = ctx_r618.index;
        var ctx_r554 = core.ɵɵnextContext(7);
        core.ɵɵstyleProp("width", c2_r555.forms && c2_r555.forms.length > 0 ? "100%" : ctx_r554.fieldWidth(c2_r555.type, child_r529.forms.length, l_r556));
        core.ɵɵproperty("id", c2_r555.key);
        core.ɵɵadvance(2);
        core.ɵɵclassMap(c2_r555.forms && c2_r555.forms.length > 0 ? "sub-category-forms" : "");
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", c2_r555.forms && c2_r555.forms.length > 0);
        core.ɵɵadvance(2);
        core.ɵɵproperty("field", c2_r555)("length", child_r529 == null ? null : child_r529.forms == null ? null : child_r529.forms.length)("i", k_r530)("j", l_r556)("conditionData", ctx_r554.conditionData);
        core.ɵɵadvance(2);
        core.ɵɵproperty("ngIf", (child_r529 == null ? null : child_r529.forms == null ? null : child_r529.forms.length) - 1 === l_r556);
    } }
    function TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_div_7_div_1_div_2_div_7_div_1_Template(rf, ctx) { if (rf & 1) {
        var _r620 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "div", 50, 31);
        core.ɵɵlistener("cdkDropListDropped", function TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_div_7_div_1_div_2_div_7_div_1_Template_div_cdkDropListDropped_0_listener($event) { core.ɵɵrestoreView(_r620); var ctx_r619 = core.ɵɵnextContext(9); return ctx_r619.drop($event); });
        core.ɵɵtemplate(2, TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_div_7_div_1_div_2_div_7_div_1_div_2_Template, 8, 12, "div", 57);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var child_r529 = core.ɵɵnextContext(2).$implicit;
        core.ɵɵproperty("cdkDropListData", child_r529.forms);
        core.ɵɵadvance(2);
        core.ɵɵproperty("ngForOf", child_r529.forms);
    } }
    function TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_div_7_div_1_div_2_div_7_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "div", 48);
        core.ɵɵtemplate(1, TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_div_7_div_1_div_2_div_7_div_1_Template, 3, 2, "div", 49);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var child_r529 = core.ɵɵnextContext().$implicit;
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", child_r529.forms && child_r529.forms.length > 0);
    } }
    function TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_div_7_div_1_div_2_div_8_Template(rf, ctx) { if (rf & 1) {
        var _r625 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "div", 61);
        core.ɵɵelementStart(1, "button", 62);
        core.ɵɵlistener("click", function TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_div_7_div_1_div_2_div_8_Template_button_click_1_listener() { core.ɵɵrestoreView(_r625); var j_r509 = core.ɵɵnextContext(4).index; var i_r501 = core.ɵɵnextContext(3).index; var ctx_r623 = core.ɵɵnextContext(); return ctx_r623.onAddNewField(i_r501, j_r509); });
        core.ɵɵelementStart(2, "span");
        core.ɵɵtext(3, "Ajouter un champ");
        core.ɵɵelementEnd();
        core.ɵɵelementStart(4, "mat-icon");
        core.ɵɵtext(5, "add");
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } }
    function TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_div_7_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
        var _r628 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "div", 52);
        core.ɵɵelementStart(1, "div", 34);
        core.ɵɵelementStart(2, "div", 35);
        core.ɵɵtemplate(3, TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_div_7_div_1_div_2_div_3_Template, 4, 0, "div", 53);
        core.ɵɵelementStart(4, "div", 37);
        core.ɵɵtemplate(5, TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_div_7_div_1_div_2_div_5_Template, 12, 11, "div", 38);
        core.ɵɵelementStart(6, "lib-sub-category", 39);
        core.ɵɵlistener("onCheckValue", function TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_div_7_div_1_div_2_Template_lib_sub_category_onCheckValue_6_listener($event) { core.ɵɵrestoreView(_r628); var ctx_r627 = core.ɵɵnextContext(7); return ctx_r627.onCheckValue($event); })("onAddKeywordFromInput", function TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_div_7_div_1_div_2_Template_lib_sub_category_onAddKeywordFromInput_6_listener($event) { core.ɵɵrestoreView(_r628); var k_r530 = ctx.index; var j_r509 = core.ɵɵnextContext(3).index; var i_r501 = core.ɵɵnextContext(3).index; var ctx_r629 = core.ɵɵnextContext(); return ctx_r629.addKeywordFromInput($event.event, $event.prev, i_r501, j_r509, k_r530); })("onKeyPress", function TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_div_7_div_1_div_2_Template_lib_sub_category_onKeyPress_6_listener($event) { core.ɵɵrestoreView(_r628); var k_r530 = ctx.index; var j_r509 = core.ɵɵnextContext(3).index; var i_r501 = core.ɵɵnextContext(3).index; var ctx_r632 = core.ɵɵnextContext(); return ctx_r632.onKeyPress($event.event, i_r501, j_r509, k_r530); })("onAddNewField", function TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_div_7_div_1_div_2_Template_lib_sub_category_onAddNewField_6_listener() { core.ɵɵrestoreView(_r628); var j_r509 = core.ɵɵnextContext(3).index; var i_r501 = core.ɵɵnextContext(3).index; var ctx_r635 = core.ɵɵnextContext(); return ctx_r635.onAddNewField(i_r501, j_r509); })("onRemoveField", function TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_div_7_div_1_div_2_Template_lib_sub_category_onRemoveField_6_listener() { core.ɵɵrestoreView(_r628); var k_r530 = ctx.index; var j_r509 = core.ɵɵnextContext(3).index; var i_r501 = core.ɵɵnextContext(3).index; var ctx_r638 = core.ɵɵnextContext(); return ctx_r638.onRemoveField(i_r501, j_r509, k_r530); })("onChangeType", function TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_div_7_div_1_div_2_Template_lib_sub_category_onChangeType_6_listener() { core.ɵɵrestoreView(_r628); var child_r529 = ctx.$implicit; var k_r530 = ctx.index; var j_r509 = core.ɵɵnextContext(3).index; var i_r501 = core.ɵɵnextContext(3).index; var ctx_r641 = core.ɵɵnextContext(); return ctx_r641.onChangeType(child_r529.type, i_r501, j_r509, k_r530); })("onRemoveKeyword", function TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_div_7_div_1_div_2_Template_lib_sub_category_onRemoveKeyword_6_listener($event) { core.ɵɵrestoreView(_r628); var k_r530 = ctx.index; var j_r509 = core.ɵɵnextContext(3).index; var i_r501 = core.ɵɵnextContext(3).index; var ctx_r644 = core.ɵɵnextContext(); return ctx_r644.removeKeyword($event.event, i_r501, j_r509, k_r530); })("onAddNewSubLevelField", function TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_div_7_div_1_div_2_Template_lib_sub_category_onAddNewSubLevelField_6_listener() { core.ɵɵrestoreView(_r628); var k_r530 = ctx.index; var j_r509 = core.ɵɵnextContext(3).index; var i_r501 = core.ɵɵnextContext(3).index; var ctx_r647 = core.ɵɵnextContext(); return ctx_r647.onAddNewSubLevelField(i_r501, j_r509, k_r530); })("onExpendMore", function TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_div_7_div_1_div_2_Template_lib_sub_category_onExpendMore_6_listener($event) { core.ɵɵrestoreView(_r628); var k_r530 = ctx.index; var j_r509 = core.ɵɵnextContext(3).index; var i_r501 = core.ɵɵnextContext(3).index; var ctx_r650 = core.ɵɵnextContext(); return ctx_r650.onExpendMore($event, i_r501, j_r509, k_r530); })("onChangeLabel", function TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_div_7_div_1_div_2_Template_lib_sub_category_onChangeLabel_6_listener($event) { core.ɵɵrestoreView(_r628); var k_r530 = ctx.index; var j_r509 = core.ɵɵnextContext(3).index; var i_r501 = core.ɵɵnextContext(3).index; var ctx_r653 = core.ɵɵnextContext(); return ctx_r653.onChangeLabel($event, i_r501, j_r509, k_r530); })("onCheckedChip", function TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_div_7_div_1_div_2_Template_lib_sub_category_onCheckedChip_6_listener($event) { core.ɵɵrestoreView(_r628); var k_r530 = ctx.index; var j_r509 = core.ɵɵnextContext(3).index; var i_r501 = core.ɵɵnextContext(3).index; var ctx_r656 = core.ɵɵnextContext(); return ctx_r656.onCheckedChip($event, i_r501, j_r509, k_r530); })("onDrop", function TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_div_7_div_1_div_2_Template_lib_sub_category_onDrop_6_listener($event) { core.ɵɵrestoreView(_r628); var ctx_r659 = core.ɵɵnextContext(7); return ctx_r659.drop($event); })("onCheckedDefault", function TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_div_7_div_1_div_2_Template_lib_sub_category_onCheckedDefault_6_listener($event) { core.ɵɵrestoreView(_r628); var k_r530 = ctx.index; var j_r509 = core.ɵɵnextContext(3).index; var i_r501 = core.ɵɵnextContext(3).index; var ctx_r660 = core.ɵɵnextContext(); return ctx_r660.onCheckedDefault($event, i_r501, j_r509, k_r530); })("onEditBlock", function TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_div_7_div_1_div_2_Template_lib_sub_category_onEditBlock_6_listener() { core.ɵɵrestoreView(_r628); var child_r529 = ctx.$implicit; var k_r530 = ctx.index; var j_r509 = core.ɵɵnextContext(3).index; var i_r501 = core.ɵɵnextContext(3).index; var ctx_r663 = core.ɵɵnextContext(); return ctx_r663.onEditBlock(child_r529, i_r501, j_r509, k_r530); })("onGetConditionValues", function TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_div_7_div_1_div_2_Template_lib_sub_category_onGetConditionValues_6_listener() { core.ɵɵrestoreView(_r628); var ctx_r666 = core.ɵɵnextContext(7); return ctx_r666.getConditionValues(); });
        core.ɵɵtemplate(7, TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_div_7_div_1_div_2_div_7_Template, 2, 1, "div", 40);
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵtemplate(8, TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_div_7_div_1_div_2_div_8_Template, 6, 0, "div", 54);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var child_r529 = ctx.$implicit;
        var k_r530 = ctx.index;
        var ctx_r667 = core.ɵɵnextContext(3);
        var field_r508 = ctx_r667.$implicit;
        var j_r509 = ctx_r667.index;
        var ctx_r528 = core.ɵɵnextContext(4);
        core.ɵɵstyleProp("width", child_r529.forms && child_r529.forms.length > 0 ? "100%" : ctx_r528.fieldWidth(child_r529.type, field_r508.forms.length, k_r530));
        core.ɵɵproperty("id", child_r529.key);
        core.ɵɵadvance(2);
        core.ɵɵclassMap(child_r529.forms && child_r529.forms.length > 0 ? "sub-category-forms" : "");
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", child_r529.forms && child_r529.forms.length > 0);
        core.ɵɵadvance(2);
        core.ɵɵproperty("ngIf", child_r529.forms && child_r529.forms.length > 0);
        core.ɵɵadvance(1);
        core.ɵɵproperty("field", child_r529)("length", field_r508 == null ? null : field_r508.forms == null ? null : field_r508.forms.length)("i", j_r509)("j", k_r530)("conditionData", ctx_r528.conditionData);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", child_r529.expandMore);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", (field_r508 == null ? null : field_r508.forms == null ? null : field_r508.forms.length) - 1 === k_r530);
    } }
    function TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_div_7_div_1_Template(rf, ctx) { if (rf & 1) {
        var _r669 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "div", 50, 31);
        core.ɵɵlistener("cdkDropListDropped", function TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_div_7_div_1_Template_div_cdkDropListDropped_0_listener($event) { core.ɵɵrestoreView(_r669); var ctx_r668 = core.ɵɵnextContext(6); return ctx_r668.drop($event); });
        core.ɵɵtemplate(2, TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_div_7_div_1_div_2_Template, 9, 14, "div", 51);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var field_r508 = core.ɵɵnextContext(2).$implicit;
        core.ɵɵproperty("cdkDropListData", field_r508.forms);
        core.ɵɵadvance(2);
        core.ɵɵproperty("ngForOf", field_r508.forms);
    } }
    function TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_div_7_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "div", 48);
        core.ɵɵtemplate(1, TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_div_7_div_1_Template, 3, 2, "div", 49);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var field_r508 = core.ɵɵnextContext().$implicit;
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", field_r508.forms);
    } }
    function TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_div_8_Template(rf, ctx) { if (rf & 1) {
        var _r674 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "div", 63);
        core.ɵɵelementStart(1, "button", 64);
        core.ɵɵlistener("click", function TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_div_8_Template_button_click_1_listener() { core.ɵɵrestoreView(_r674); var i_r501 = core.ɵɵnextContext(4).index; var ctx_r672 = core.ɵɵnextContext(); return ctx_r672.onAddNewField(i_r501); });
        core.ɵɵelementStart(2, "span");
        core.ɵɵtext(3, "Ajouter un champ");
        core.ɵɵelementEnd();
        core.ɵɵelementStart(4, "mat-icon");
        core.ɵɵtext(5, "add");
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var j_r509 = core.ɵɵnextContext().index;
        var category_r500 = core.ɵɵnextContext(3).$implicit;
        core.ɵɵadvance(1);
        core.ɵɵstyleProp("opacity", (category_r500 == null ? null : category_r500.forms == null ? null : category_r500.forms.length) - 1 === j_r509 ? 1 : 0);
        core.ɵɵproperty("disabled", (category_r500 == null ? null : category_r500.forms == null ? null : category_r500.forms.length) - 1 !== j_r509);
    } }
    function TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_Template(rf, ctx) { if (rf & 1) {
        var _r678 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "div", 33);
        core.ɵɵelementStart(1, "div", 34);
        core.ɵɵelementStart(2, "div", 35);
        core.ɵɵtemplate(3, TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_div_3_Template, 4, 0, "div", 36);
        core.ɵɵelementStart(4, "div", 37);
        core.ɵɵtemplate(5, TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_div_5_Template, 13, 7, "div", 38);
        core.ɵɵelementStart(6, "lib-sub-category", 39);
        core.ɵɵlistener("onCheckValue", function TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_Template_lib_sub_category_onCheckValue_6_listener($event) { core.ɵɵrestoreView(_r678); var ctx_r677 = core.ɵɵnextContext(4); return ctx_r677.onCheckValue($event); })("onAddKeywordFromInput", function TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_Template_lib_sub_category_onAddKeywordFromInput_6_listener($event) { core.ɵɵrestoreView(_r678); var j_r509 = ctx.index; var i_r501 = core.ɵɵnextContext(3).index; var ctx_r679 = core.ɵɵnextContext(); return ctx_r679.addKeywordFromInput($event.event, $event.prev, i_r501, j_r509); })("onKeyPress", function TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_Template_lib_sub_category_onKeyPress_6_listener($event) { core.ɵɵrestoreView(_r678); var j_r509 = ctx.index; var i_r501 = core.ɵɵnextContext(3).index; var ctx_r681 = core.ɵɵnextContext(); return ctx_r681.onKeyPress($event.event, i_r501, j_r509); })("onAddNewField", function TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_Template_lib_sub_category_onAddNewField_6_listener() { core.ɵɵrestoreView(_r678); var i_r501 = core.ɵɵnextContext(3).index; var ctx_r683 = core.ɵɵnextContext(); return ctx_r683.onAddNewField(i_r501); })("onRemoveField", function TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_Template_lib_sub_category_onRemoveField_6_listener() { core.ɵɵrestoreView(_r678); var j_r509 = ctx.index; var i_r501 = core.ɵɵnextContext(3).index; var ctx_r685 = core.ɵɵnextContext(); return ctx_r685.onRemoveField(i_r501, j_r509); })("onChangeType", function TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_Template_lib_sub_category_onChangeType_6_listener() { core.ɵɵrestoreView(_r678); var field_r508 = ctx.$implicit; var j_r509 = ctx.index; var i_r501 = core.ɵɵnextContext(3).index; var ctx_r687 = core.ɵɵnextContext(); return ctx_r687.onChangeType(field_r508.type, i_r501, j_r509); })("onRemoveKeyword", function TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_Template_lib_sub_category_onRemoveKeyword_6_listener($event) { core.ɵɵrestoreView(_r678); var j_r509 = ctx.index; var i_r501 = core.ɵɵnextContext(3).index; var ctx_r689 = core.ɵɵnextContext(); return ctx_r689.removeKeyword($event.event, i_r501, j_r509); })("onAddNewSubLevelField", function TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_Template_lib_sub_category_onAddNewSubLevelField_6_listener() { core.ɵɵrestoreView(_r678); var j_r509 = ctx.index; var i_r501 = core.ɵɵnextContext(3).index; var ctx_r691 = core.ɵɵnextContext(); return ctx_r691.onAddNewSubLevelField(i_r501, j_r509); })("onExpendMore", function TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_Template_lib_sub_category_onExpendMore_6_listener($event) { core.ɵɵrestoreView(_r678); var j_r509 = ctx.index; var i_r501 = core.ɵɵnextContext(3).index; var ctx_r693 = core.ɵɵnextContext(); return ctx_r693.onExpendMore($event, i_r501, j_r509); })("onChangeLabel", function TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_Template_lib_sub_category_onChangeLabel_6_listener($event) { core.ɵɵrestoreView(_r678); var j_r509 = ctx.index; var i_r501 = core.ɵɵnextContext(3).index; var ctx_r695 = core.ɵɵnextContext(); return ctx_r695.onChangeLabel($event, i_r501, j_r509); })("onCheckedChip", function TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_Template_lib_sub_category_onCheckedChip_6_listener($event) { core.ɵɵrestoreView(_r678); var j_r509 = ctx.index; var i_r501 = core.ɵɵnextContext(3).index; var ctx_r697 = core.ɵɵnextContext(); return ctx_r697.onCheckedChip($event, i_r501, j_r509); })("onDrop", function TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_Template_lib_sub_category_onDrop_6_listener($event) { core.ɵɵrestoreView(_r678); var ctx_r699 = core.ɵɵnextContext(4); return ctx_r699.drop($event); })("onCheckedDefault", function TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_Template_lib_sub_category_onCheckedDefault_6_listener($event) { core.ɵɵrestoreView(_r678); var j_r509 = ctx.index; var i_r501 = core.ɵɵnextContext(3).index; var ctx_r700 = core.ɵɵnextContext(); return ctx_r700.onCheckedDefault($event, i_r501, j_r509); })("onEditBlock", function TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_Template_lib_sub_category_onEditBlock_6_listener() { core.ɵɵrestoreView(_r678); var field_r508 = ctx.$implicit; var j_r509 = ctx.index; var i_r501 = core.ɵɵnextContext(3).index; var ctx_r702 = core.ɵɵnextContext(); return ctx_r702.onEditBlock(field_r508, i_r501, j_r509); })("onGetConditionValues", function TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_Template_lib_sub_category_onGetConditionValues_6_listener() { core.ɵɵrestoreView(_r678); var ctx_r704 = core.ɵɵnextContext(4); return ctx_r704.getConditionValues(); });
        core.ɵɵtemplate(7, TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_div_7_Template, 2, 1, "div", 40);
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵtemplate(8, TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_div_8_Template, 6, 3, "div", 41);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var field_r508 = ctx.$implicit;
        var j_r509 = ctx.index;
        var ctx_r705 = core.ɵɵnextContext(3);
        var category_r500 = ctx_r705.$implicit;
        var i_r501 = ctx_r705.index;
        var ctx_r507 = core.ɵɵnextContext();
        core.ɵɵstyleProp("width", field_r508.forms && field_r508.forms.length > 0 ? "100%" : ctx_r507.fieldWidth(field_r508.type, category_r500.forms.length, j_r509));
        core.ɵɵproperty("id", field_r508.key);
        core.ɵɵadvance(2);
        core.ɵɵclassMap(field_r508.forms && field_r508.forms.length > 0 ? "sub-category-forms" : "");
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", field_r508.forms);
        core.ɵɵadvance(2);
        core.ɵɵproperty("ngIf", field_r508.forms);
        core.ɵɵadvance(1);
        core.ɵɵproperty("field", field_r508)("length", category_r500 == null ? null : category_r500.forms == null ? null : category_r500.forms.length)("i", i_r501)("j", j_r509)("conditionData", ctx_r507.conditionData);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", field_r508.expandMore);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", (category_r500 == null ? null : category_r500.forms == null ? null : category_r500.forms.length) - 1 === j_r509);
    } }
    function TemplateProfileCreateComponent_div_26_div_15_ng_container_2_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainerStart(0);
        core.ɵɵtemplate(1, TemplateProfileCreateComponent_div_26_div_15_ng_container_2_div_1_Template, 9, 14, "div", 32);
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var category_r500 = core.ɵɵnextContext(2).$implicit;
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngForOf", category_r500.forms);
    } }
    function TemplateProfileCreateComponent_div_26_div_15_Template(rf, ctx) { if (rf & 1) {
        var _r708 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "div", 30, 31);
        core.ɵɵlistener("cdkDropListDropped", function TemplateProfileCreateComponent_div_26_div_15_Template_div_cdkDropListDropped_0_listener($event) { core.ɵɵrestoreView(_r708); var ctx_r707 = core.ɵɵnextContext(2); return ctx_r707.drop($event); });
        core.ɵɵtemplate(2, TemplateProfileCreateComponent_div_26_div_15_ng_container_2_Template, 2, 1, "ng-container", 28);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var category_r500 = core.ɵɵnextContext().$implicit;
        core.ɵɵproperty("cdkDropListData", category_r500.forms);
        core.ɵɵadvance(2);
        core.ɵɵproperty("ngIf", category_r500.expandMore);
    } }
    function TemplateProfileCreateComponent_div_26_Template(rf, ctx) { if (rf & 1) {
        var _r711 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "div", 19);
        core.ɵɵelementStart(1, "div", 20);
        core.ɵɵelementStart(2, "button", 21);
        core.ɵɵlistener("click", function TemplateProfileCreateComponent_div_26_Template_button_click_2_listener($event) { core.ɵɵrestoreView(_r711); return $event.preventDefault(); });
        core.ɵɵelementStart(3, "mat-icon", 22);
        core.ɵɵtext(4, "drag_indicator");
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementStart(5, "div", 23);
        core.ɵɵelementStart(6, "div", 24);
        core.ɵɵlistener("click", function TemplateProfileCreateComponent_div_26_Template_div_click_6_listener($event) { core.ɵɵrestoreView(_r711); var category_r500 = ctx.$implicit; var i_r501 = ctx.index; var ctx_r712 = core.ɵɵnextContext(); ctx_r712.onActiveMenu(category_r500, i_r501, $event); return ctx_r712.onExpendMore({ event: $event, field: category_r500 }, i_r501); });
        core.ɵɵelementStart(7, "div");
        core.ɵɵelementStart(8, "p", 25);
        core.ɵɵtext(9);
        core.ɵɵelementEnd();
        core.ɵɵelementStart(10, "p", 26);
        core.ɵɵtext(11);
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementStart(12, "button", 27);
        core.ɵɵlistener("click", function TemplateProfileCreateComponent_div_26_Template_button_click_12_listener($event) { core.ɵɵrestoreView(_r711); var category_r500 = ctx.$implicit; var i_r501 = ctx.index; var ctx_r713 = core.ɵɵnextContext(); return ctx_r713.onExpendMore({ event: $event, field: category_r500 }, i_r501); });
        core.ɵɵtemplate(13, TemplateProfileCreateComponent_div_26_mat_icon_13_Template, 2, 0, "mat-icon", 28);
        core.ɵɵtemplate(14, TemplateProfileCreateComponent_div_26_mat_icon_14_Template, 2, 0, "mat-icon", 28);
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵtemplate(15, TemplateProfileCreateComponent_div_26_div_15_Template, 3, 2, "div", 29);
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var category_r500 = ctx.$implicit;
        var i_r501 = ctx.index;
        var ctx_r493 = core.ɵɵnextContext();
        core.ɵɵclassMap(ctx_r493.editIndex === i_r501 ? "active" : "");
        core.ɵɵstyleProp("padding-bottom", category_r500.expandMore ? "50px" : "10px");
        core.ɵɵproperty("id", category_r500.name);
        core.ɵɵadvance(9);
        core.ɵɵtextInterpolate1(" ", category_r500.name, " ");
        core.ɵɵadvance(2);
        core.ɵɵtextInterpolate1(" Listes des informations n\u00E9cessaires pour la cr\u00E9ation de ", ctx_r493.catNameStart(category_r500.name) ? "l'" + category_r500.name : category_r500.name, " ");
        core.ɵɵadvance(2);
        core.ɵɵproperty("ngIf", !category_r500.expandMore);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", category_r500.expandMore);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", category_r500.forms);
    } }
    function TemplateProfileCreateComponent_div_33_div_35_Template(rf, ctx) { if (rf & 1) {
        var _r723 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "div", 98);
        core.ɵɵelementStart(1, "mat-slide-toggle", 99);
        core.ɵɵlistener("ngModelChange", function TemplateProfileCreateComponent_div_33_div_35_Template_mat_slide_toggle_ngModelChange_1_listener($event) { core.ɵɵrestoreView(_r723); var ctx_r722 = core.ɵɵnextContext(2); return ctx_r722.currentEditBlock.defaultValue = $event; });
        core.ɵɵelementEnd();
        core.ɵɵelementStart(2, "span", 100);
        core.ɵɵtext(3, "Valeur par d\u00E9faut");
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r714 = core.ɵɵnextContext(2);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngModel", ctx_r714.currentEditBlock.defaultValue)("ngModelOptions", core.ɵɵpureFunction0(2, _c0$1));
    } }
    function TemplateProfileCreateComponent_div_33_div_36_Template(rf, ctx) { if (rf & 1) {
        var _r725 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "div", 101);
        core.ɵɵelementStart(1, "mat-checkbox", 102);
        core.ɵɵlistener("ngModelChange", function TemplateProfileCreateComponent_div_33_div_36_Template_mat_checkbox_ngModelChange_1_listener($event) { core.ɵɵrestoreView(_r725); var ctx_r724 = core.ɵɵnextContext(2); return ctx_r724.currentEditBlock.value = $event; });
        core.ɵɵtext(2, " Coch\u00E9 par d\u00E9fault ");
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r715 = core.ɵɵnextContext(2);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngModel", ctx_r715.currentEditBlock.value)("ngModelOptions", core.ɵɵpureFunction0(2, _c0$1));
    } }
    function TemplateProfileCreateComponent_div_33_mat_form_field_37_mat_chip_6_Template(rf, ctx) { if (rf & 1) {
        var _r732 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "mat-chip", 109);
        core.ɵɵlistener("dblclick", function TemplateProfileCreateComponent_div_33_mat_form_field_37_mat_chip_6_Template_mat_chip_dblclick_0_listener() { core.ɵɵrestoreView(_r732); var option_r730 = ctx.$implicit; var ctx_r731 = core.ɵɵnextContext(3); return ctx_r731.onCheckedChipBlock(option_r730, ctx_r731.currentEditBlock); })("click", function TemplateProfileCreateComponent_div_33_mat_form_field_37_mat_chip_6_Template_mat_chip_click_0_listener() { core.ɵɵrestoreView(_r732); var option_r730 = ctx.$implicit; var ctx_r733 = core.ɵɵnextContext(3); return ctx_r733.onEditChip(option_r730); })("removed", function TemplateProfileCreateComponent_div_33_mat_form_field_37_mat_chip_6_Template_mat_chip_removed_0_listener() { core.ɵɵrestoreView(_r732); var option_r730 = ctx.$implicit; var ctx_r734 = core.ɵɵnextContext(3); return ctx_r734.removeKeywordBlock(option_r730, ctx_r734.currentEditBlock); });
        core.ɵɵtext(1);
        core.ɵɵelementStart(2, "mat-icon", 110);
        core.ɵɵtext(3, "cancel");
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var option_r730 = ctx.$implicit;
        core.ɵɵproperty("selected", option_r730.checked)("value", option_r730.value)("removable", true);
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate1(" ", option_r730.value, " ");
    } }
    function TemplateProfileCreateComponent_div_33_mat_form_field_37_Template(rf, ctx) { if (rf & 1) {
        var _r736 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "mat-form-field", 103);
        core.ɵɵelementStart(1, "mat-label");
        core.ɵɵtext(2, " Valeur par d\u00E9fault ");
        core.ɵɵelementEnd();
        core.ɵɵelementStart(3, "mat-chip-list", 104, 105);
        core.ɵɵlistener("cdkDropListDropped", function TemplateProfileCreateComponent_div_33_mat_form_field_37_Template_mat_chip_list_cdkDropListDropped_3_listener($event) { core.ɵɵrestoreView(_r736); var ctx_r735 = core.ɵɵnextContext(2); return ctx_r735.drop($event); });
        core.ɵɵtemplate(6, TemplateProfileCreateComponent_div_33_mat_form_field_37_mat_chip_6_Template, 4, 4, "mat-chip", 106);
        core.ɵɵelementStart(7, "input", 107, 108);
        core.ɵɵlistener("matChipInputTokenEnd", function TemplateProfileCreateComponent_div_33_mat_form_field_37_Template_input_matChipInputTokenEnd_7_listener($event) { core.ɵɵrestoreView(_r736); var ctx_r737 = core.ɵɵnextContext(2); return ctx_r737.addKeywordFromInputBlock($event, ctx_r737.currentEditBlock, ctx_r737.prevValue); })("keyup", function TemplateProfileCreateComponent_div_33_mat_form_field_37_Template_input_keyup_7_listener($event) { core.ɵɵrestoreView(_r736); var ctx_r738 = core.ɵɵnextContext(2); return ctx_r738.onKeyUpChip($event, ctx_r738.currentEditBlock); })("ngModelChange", function TemplateProfileCreateComponent_div_33_mat_form_field_37_Template_input_ngModelChange_7_listener($event) { core.ɵɵrestoreView(_r736); var ctx_r739 = core.ɵɵnextContext(2); return ctx_r739.currentChip = $event; });
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var _r727 = core.ɵɵreference(5);
        var ctx_r716 = core.ɵɵnextContext(2);
        core.ɵɵadvance(3);
        core.ɵɵproperty("cdkDropListData", ctx_r716.currentEditBlock.defaultValue);
        core.ɵɵadvance(3);
        core.ɵɵproperty("ngForOf", ctx_r716.currentEditBlock.defaultValue);
        core.ɵɵadvance(1);
        core.ɵɵproperty("matChipInputFor", _r727)("matChipInputAddOnBlur", true)("matChipInputSeparatorKeyCodes", ctx_r716.separatorKeysCodes)("ngModel", ctx_r716.currentChip)("ngModelOptions", core.ɵɵpureFunction0(7, _c0$1));
    } }
    function TemplateProfileCreateComponent_div_33_mat_form_field_38_Template(rf, ctx) { if (rf & 1) {
        var _r741 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "mat-form-field", 79);
        core.ɵɵelementStart(1, "mat-label");
        core.ɵɵtext(2, "Valeur par d\u00E9fault");
        core.ɵɵelementEnd();
        core.ɵɵelementStart(3, "input", 111);
        core.ɵɵlistener("ngModelChange", function TemplateProfileCreateComponent_div_33_mat_form_field_38_Template_input_ngModelChange_3_listener($event) { core.ɵɵrestoreView(_r741); var ctx_r740 = core.ɵɵnextContext(2); return ctx_r740.currentEditBlock.defaultValue = $event; });
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r717 = core.ɵɵnextContext(2);
        core.ɵɵadvance(3);
        core.ɵɵproperty("ngModelOptions", core.ɵɵpureFunction0(2, _c0$1))("ngModel", ctx_r717.currentEditBlock.defaultValue);
    } }
    function TemplateProfileCreateComponent_div_33_mat_form_field_39_Template(rf, ctx) { if (rf & 1) {
        var _r743 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "mat-form-field", 79);
        core.ɵɵelementStart(1, "mat-label");
        core.ɵɵtext(2, "Valeur par d\u00E9fault");
        core.ɵɵelementEnd();
        core.ɵɵelementStart(3, "input", 112);
        core.ɵɵlistener("ngModelChange", function TemplateProfileCreateComponent_div_33_mat_form_field_39_Template_input_ngModelChange_3_listener($event) { core.ɵɵrestoreView(_r743); var ctx_r742 = core.ɵɵnextContext(2); return ctx_r742.currentEditBlock.defaultValue = $event; });
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r718 = core.ɵɵnextContext(2);
        core.ɵɵstyleProp("opacity", ctx_r718.currentEditBlock.type !== "tel" ? 1 : 0);
        core.ɵɵadvance(3);
        core.ɵɵproperty("type", ctx_r718.currentEditBlock.type)("disabled", ctx_r718.currentEditBlock.type === "tel")("ngModelOptions", core.ɵɵpureFunction0(6, _c0$1))("ngModel", ctx_r718.currentEditBlock.defaultValue);
    } }
    function TemplateProfileCreateComponent_div_33_mat_form_field_50_mat_option_4_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "mat-option", 116);
        core.ɵɵtext(1);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var item_r745 = ctx.$implicit;
        core.ɵɵproperty("value", item_r745);
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate1("", item_r745.label, " ");
    } }
    function TemplateProfileCreateComponent_div_33_mat_form_field_50_Template(rf, ctx) { if (rf & 1) {
        var _r747 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "mat-form-field", 113);
        core.ɵɵelementStart(1, "mat-label");
        core.ɵɵtext(2, "Selectionnez la cat\u00E9gorie");
        core.ɵɵelementEnd();
        core.ɵɵelementStart(3, "mat-select", 114);
        core.ɵɵlistener("ngModelChange", function TemplateProfileCreateComponent_div_33_mat_form_field_50_Template_mat_select_ngModelChange_3_listener() { core.ɵɵrestoreView(_r747); var ctx_r746 = core.ɵɵnextContext(2); return ctx_r746.onSelectCondition(ctx_r746.currentEditBlock.conditionLocation); })("ngModelChange", function TemplateProfileCreateComponent_div_33_mat_form_field_50_Template_mat_select_ngModelChange_3_listener($event) { core.ɵɵrestoreView(_r747); var ctx_r748 = core.ɵɵnextContext(2); return ctx_r748.currentEditBlock.conditionLocation = $event; });
        core.ɵɵtemplate(4, TemplateProfileCreateComponent_div_33_mat_form_field_50_mat_option_4_Template, 2, 2, "mat-option", 115);
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r719 = core.ɵɵnextContext(2);
        core.ɵɵadvance(3);
        core.ɵɵproperty("ngModel", ctx_r719.currentEditBlock.conditionLocation)("ngModelOptions", core.ɵɵpureFunction0(3, _c0$1));
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngForOf", ctx_r719.conditionData);
    } }
    function TemplateProfileCreateComponent_div_33_mat_radio_button_52_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "mat-radio-button", 117);
        core.ɵɵtext(1);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var item_r749 = ctx.$implicit;
        core.ɵɵproperty("value", item_r749.value);
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate1(" ", item_r749.value, " ");
    } }
    function TemplateProfileCreateComponent_div_33_button_54_Template(rf, ctx) { if (rf & 1) {
        var _r751 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "button", 96);
        core.ɵɵlistener("click", function TemplateProfileCreateComponent_div_33_button_54_Template_button_click_0_listener($event) { core.ɵɵrestoreView(_r751); var ctx_r750 = core.ɵɵnextContext(2); return ctx_r750.onAddNewSubLevelFieldBlock($event); });
        core.ɵɵtext(1, "Sous-cat\u00E9gorie ");
        core.ɵɵelementStart(2, "mat-icon");
        core.ɵɵtext(3, "device_hub ");
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r721 = core.ɵɵnextContext(2);
        core.ɵɵproperty("disabled", !ctx_r721.currentEditBlock.editable);
    } }
    var _c1$1 = function () { return ["select", "radio", "checkbox_multiple"]; };
    function TemplateProfileCreateComponent_div_33_Template(rf, ctx) { if (rf & 1) {
        var _r753 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "div", 65);
        core.ɵɵelementStart(1, "h3");
        core.ɵɵtext(2);
        core.ɵɵelementEnd();
        core.ɵɵelementStart(3, "div");
        core.ɵɵelementStart(4, "mat-form-field", 66);
        core.ɵɵelementStart(5, "mat-label");
        core.ɵɵtext(6, "Type de bloc");
        core.ɵɵelementEnd();
        core.ɵɵelementStart(7, "mat-select", 67);
        core.ɵɵlistener("click", function TemplateProfileCreateComponent_div_33_Template_mat_select_click_7_listener() { core.ɵɵrestoreView(_r753); var ctx_r752 = core.ɵɵnextContext(); return ctx_r752.onOpenTypeDialog(ctx_r752.currentEditBlock); })("ngModelChange", function TemplateProfileCreateComponent_div_33_Template_mat_select_ngModelChange_7_listener($event) { core.ɵɵrestoreView(_r753); var ctx_r754 = core.ɵɵnextContext(); return ctx_r754.currentEditBlock.type = $event; })("ngModelChange", function TemplateProfileCreateComponent_div_33_Template_mat_select_ngModelChange_7_listener() { core.ɵɵrestoreView(_r753); var ctx_r755 = core.ɵɵnextContext(); return ctx_r755.onChangeTypeBlock(ctx_r755.currentEditBlock); });
        core.ɵɵelementStart(8, "mat-option", 68);
        core.ɵɵtext(9, "Text(80)");
        core.ɵɵelementEnd();
        core.ɵɵelementStart(10, "mat-option", 69);
        core.ɵɵtext(11, "Text(80+)");
        core.ɵɵelementEnd();
        core.ɵɵelementStart(12, "mat-option", 70);
        core.ɵɵtext(13, "Radio");
        core.ɵɵelementEnd();
        core.ɵɵelementStart(14, "mat-option", 71);
        core.ɵɵtext(15, "Selecteur");
        core.ɵɵelementEnd();
        core.ɵɵelementStart(16, "mat-option", 72);
        core.ɵɵtext(17, "Toggle");
        core.ɵɵelementEnd();
        core.ɵɵelementStart(18, "mat-option", 73);
        core.ɵɵtext(19, "Checkbox");
        core.ɵɵelementEnd();
        core.ɵɵelementStart(20, "mat-option", 74);
        core.ɵɵtext(21, "Checkbox multiple");
        core.ɵɵelementEnd();
        core.ɵɵelementStart(22, "mat-option", 75);
        core.ɵɵtext(23, "Email");
        core.ɵɵelementEnd();
        core.ɵɵelementStart(24, "mat-option", 76);
        core.ɵɵtext(25, "Password");
        core.ɵɵelementEnd();
        core.ɵɵelementStart(26, "mat-option", 77);
        core.ɵɵtext(27, "Date");
        core.ɵɵelementEnd();
        core.ɵɵelementStart(28, "mat-option", 78);
        core.ɵɵtext(29, "Phone");
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementStart(30, "mat-form-field", 79);
        core.ɵɵelementStart(31, "mat-label");
        core.ɵɵtext(32, "Nom / Label");
        core.ɵɵelementEnd();
        core.ɵɵelementStart(33, "input", 80);
        core.ɵɵlistener("ngModelChange", function TemplateProfileCreateComponent_div_33_Template_input_ngModelChange_33_listener($event) { core.ɵɵrestoreView(_r753); var ctx_r756 = core.ɵɵnextContext(); return ctx_r756.currentEditBlock.label = $event; });
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementContainerStart(34, 81);
        core.ɵɵtemplate(35, TemplateProfileCreateComponent_div_33_div_35_Template, 4, 3, "div", 82);
        core.ɵɵtemplate(36, TemplateProfileCreateComponent_div_33_div_36_Template, 3, 3, "div", 83);
        core.ɵɵtemplate(37, TemplateProfileCreateComponent_div_33_mat_form_field_37_Template, 9, 8, "mat-form-field", 84);
        core.ɵɵtemplate(38, TemplateProfileCreateComponent_div_33_mat_form_field_38_Template, 4, 3, "mat-form-field", 85);
        core.ɵɵtemplate(39, TemplateProfileCreateComponent_div_33_mat_form_field_39_Template, 4, 7, "mat-form-field", 86);
        core.ɵɵelementContainerEnd();
        core.ɵɵelementStart(40, "div", 87);
        core.ɵɵelementStart(41, "div", 88);
        core.ɵɵelementStart(42, "span");
        core.ɵɵtext(43, "Obligatoire");
        core.ɵɵelementEnd();
        core.ɵɵelementStart(44, "mat-slide-toggle", 89);
        core.ɵɵlistener("ngModelChange", function TemplateProfileCreateComponent_div_33_Template_mat_slide_toggle_ngModelChange_44_listener($event) { core.ɵɵrestoreView(_r753); var ctx_r757 = core.ɵɵnextContext(); return ctx_r757.currentEditBlock.isMandatory = $event; });
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementStart(45, "div", 90);
        core.ɵɵelementStart(46, "div", 88);
        core.ɵɵelementStart(47, "span");
        core.ɵɵtext(48, "Visibilit\u00E9 conditionnelle");
        core.ɵɵelementEnd();
        core.ɵɵelementStart(49, "mat-slide-toggle", 89);
        core.ɵɵlistener("ngModelChange", function TemplateProfileCreateComponent_div_33_Template_mat_slide_toggle_ngModelChange_49_listener() { core.ɵɵrestoreView(_r753); var ctx_r758 = core.ɵɵnextContext(); return ctx_r758.getConditionValues(); })("ngModelChange", function TemplateProfileCreateComponent_div_33_Template_mat_slide_toggle_ngModelChange_49_listener($event) { core.ɵɵrestoreView(_r753); var ctx_r759 = core.ɵɵnextContext(); return ctx_r759.currentEditBlock.isConditional = $event; });
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵtemplate(50, TemplateProfileCreateComponent_div_33_mat_form_field_50_Template, 5, 4, "mat-form-field", 91);
        core.ɵɵelementStart(51, "mat-radio-group", 92);
        core.ɵɵlistener("ngModelChange", function TemplateProfileCreateComponent_div_33_Template_mat_radio_group_ngModelChange_51_listener($event) { core.ɵɵrestoreView(_r753); var ctx_r760 = core.ɵɵnextContext(); return ctx_r760.currentEditBlock.conditionValue = $event; });
        core.ɵɵtemplate(52, TemplateProfileCreateComponent_div_33_mat_radio_button_52_Template, 2, 2, "mat-radio-button", 93);
        core.ɵɵelementEnd();
        core.ɵɵelementStart(53, "div", 94);
        core.ɵɵtemplate(54, TemplateProfileCreateComponent_div_33_button_54_Template, 4, 1, "button", 95);
        core.ɵɵelementStart(55, "button", 96);
        core.ɵɵlistener("click", function TemplateProfileCreateComponent_div_33_Template_button_click_55_listener($event) { core.ɵɵrestoreView(_r753); var ctx_r761 = core.ɵɵnextContext(); return ctx_r761.onDuplicatedBlock($event); });
        core.ɵɵtext(56, "Dupliquer le bloc");
        core.ɵɵelementStart(57, "mat-icon");
        core.ɵɵtext(58, "filter_none");
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementStart(59, "button", 97);
        core.ɵɵlistener("click", function TemplateProfileCreateComponent_div_33_Template_button_click_59_listener($event) { core.ɵɵrestoreView(_r753); var ctx_r762 = core.ɵɵnextContext(); return ctx_r762.onRemoveFieldBlock($event); });
        core.ɵɵtext(60, "Supprimer le bloc ");
        core.ɵɵelementStart(61, "mat-icon");
        core.ɵɵtext(62, " delete ");
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r494 = core.ɵɵnextContext();
        core.ɵɵadvance(2);
        core.ɵɵtextInterpolate1("Param\u00E8tre du bloc ", ctx_r494.currentEditBlock.label, "");
        core.ɵɵadvance(5);
        core.ɵɵproperty("ngModel", ctx_r494.currentEditBlock.type)("ngModelOptions", core.ɵɵpureFunction0(21, _c0$1));
        core.ɵɵadvance(26);
        core.ɵɵproperty("ngModel", ctx_r494.currentEditBlock.label)("ngModelOptions", core.ɵɵpureFunction0(22, _c0$1));
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngSwitch", ctx_r494.currentEditBlock.type);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngSwitchCase", "toggle");
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngSwitchCase", "checkbox");
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngSwitchCase", core.ɵɵpureFunction0(23, _c1$1).includes(ctx_r494.currentEditBlock.type) ? ctx_r494.currentEditBlock.type : !ctx_r494.currentEditBlock.type);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngSwitchCase", "textarea");
        core.ɵɵadvance(6);
        core.ɵɵproperty("ngModel", ctx_r494.currentEditBlock.isMandatory)("ngModelOptions", core.ɵɵpureFunction0(24, _c0$1));
        core.ɵɵadvance(5);
        core.ɵɵproperty("ngModel", ctx_r494.currentEditBlock.isConditional)("ngModelOptions", core.ɵɵpureFunction0(25, _c0$1));
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", ctx_r494.currentEditBlock == null ? null : ctx_r494.currentEditBlock.isConditional);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngModel", ctx_r494.currentEditBlock.conditionValue)("ngModelOptions", core.ɵɵpureFunction0(26, _c0$1));
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngForOf", ctx_r494.currentEditBlock == null ? null : ctx_r494.currentEditBlock.conditionLocation == null ? null : ctx_r494.currentEditBlock.conditionLocation.possibleValues);
        core.ɵɵadvance(2);
        core.ɵɵproperty("ngIf", ctx_r494.paramsIndex.length < 4);
        core.ɵɵadvance(1);
        core.ɵɵproperty("disabled", !ctx_r494.currentEditBlock.editable);
        core.ɵɵadvance(4);
        core.ɵɵproperty("disabled", !ctx_r494.currentEditBlock.editable);
    } }
    function TemplateProfileCreateComponent_div_34_mat_option_12_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "mat-option", 116);
        core.ɵɵtext(1);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var item_r764 = ctx.$implicit;
        core.ɵɵproperty("value", item_r764.value);
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate(item_r764.value);
    } }
    function TemplateProfileCreateComponent_div_34_Template(rf, ctx) { if (rf & 1) {
        var _r766 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "div", 65);
        core.ɵɵelementStart(1, "h3");
        core.ɵɵtext(2);
        core.ɵɵelementEnd();
        core.ɵɵelementStart(3, "div", 118);
        core.ɵɵelementStart(4, "mat-form-field", 79);
        core.ɵɵelementStart(5, "mat-label");
        core.ɵɵtext(6, "Nom de la section");
        core.ɵɵelementEnd();
        core.ɵɵelementStart(7, "input", 80);
        core.ɵɵlistener("ngModelChange", function TemplateProfileCreateComponent_div_34_Template_input_ngModelChange_7_listener($event) { core.ɵɵrestoreView(_r766); var ctx_r765 = core.ɵɵnextContext(); return ctx_r765.currentEditBlock.name = $event; });
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementStart(8, "mat-form-field", 113);
        core.ɵɵelementStart(9, "mat-label");
        core.ɵɵtext(10, "Equipe de gestion");
        core.ɵɵelementEnd();
        core.ɵɵelementStart(11, "mat-select", 114);
        core.ɵɵlistener("ngModelChange", function TemplateProfileCreateComponent_div_34_Template_mat_select_ngModelChange_11_listener($event) { core.ɵɵrestoreView(_r766); var ctx_r767 = core.ɵɵnextContext(); return ctx_r767.currentEditBlock.selector.value = $event; });
        core.ɵɵtemplate(12, TemplateProfileCreateComponent_div_34_mat_option_12_Template, 2, 2, "mat-option", 115);
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementStart(13, "div", 94);
        core.ɵɵelementStart(14, "button", 119);
        core.ɵɵlistener("click", function TemplateProfileCreateComponent_div_34_Template_button_click_14_listener($event) { core.ɵɵrestoreView(_r766); var ctx_r768 = core.ɵɵnextContext(); return ctx_r768.onAddNewSubLevelFieldBlock($event); });
        core.ɵɵtext(15, "Sous-cat\u00E9gorie ");
        core.ɵɵelementStart(16, "mat-icon");
        core.ɵɵtext(17, "device_hub ");
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementStart(18, "button", 119);
        core.ɵɵlistener("click", function TemplateProfileCreateComponent_div_34_Template_button_click_18_listener($event) { core.ɵɵrestoreView(_r766); var ctx_r769 = core.ɵɵnextContext(); return ctx_r769.onDuplicatedBlock($event); });
        core.ɵɵtext(19, "Dupliquer le bloc");
        core.ɵɵelementStart(20, "mat-icon");
        core.ɵɵtext(21, "filter_none");
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementStart(22, "button", 97);
        core.ɵɵlistener("click", function TemplateProfileCreateComponent_div_34_Template_button_click_22_listener($event) { core.ɵɵrestoreView(_r766); var ctx_r770 = core.ɵɵnextContext(); return ctx_r770.onRemoveFieldBlock($event); });
        core.ɵɵtext(23, "Supprimer le bloc ");
        core.ɵɵelementStart(24, "mat-icon");
        core.ɵɵtext(25, " delete");
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r495 = core.ɵɵnextContext();
        core.ɵɵadvance(2);
        core.ɵɵtextInterpolate1("Param\u00E8tre de la section ", ctx_r495.currentEditBlock.name, "");
        core.ɵɵadvance(5);
        core.ɵɵproperty("ngModel", ctx_r495.currentEditBlock.name)("ngModelOptions", core.ɵɵpureFunction0(7, _c0$1));
        core.ɵɵadvance(4);
        core.ɵɵproperty("ngModel", ctx_r495.currentEditBlock.selector.value)("ngModelOptions", core.ɵɵpureFunction0(8, _c0$1));
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngForOf", ctx_r495.currentEditBlock.selector.defaultValue);
        core.ɵɵadvance(10);
        core.ɵɵproperty("disabled", !ctx_r495.currentEditBlock.editable);
    } }
    var TemplateProfileCreateComponent = /** @class */ (function () {
        function TemplateProfileCreateComponent(fb, service, route, router, dialog, scrollToService) {
            var _this = this;
            this.fb = fb;
            this.service = service;
            this.route = route;
            this.router = router;
            this.dialog = dialog;
            this.scrollToService = scrollToService;
            this.validCategory = false;
            this.separatorKeysCodes = [keycodes.ENTER, keycodes.COMMA, keycodes.SEMICOLON];
            this.currentProfil = {};
            this.canExit = true;
            this.tags = [];
            this.id = "0";
            this.parent = [];
            this.editIndex = null;
            this.showProfileName = true;
            this.liveLabel = "Publier";
            this.draftLabel = "Enregistrer le brouillon";
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
            this.isBlock = false;
            this.isSection = false;
            this.currentChip = "";
            this.prevValue = "";
            this.historics = [];
            this.currentCanceledIndex = null;
            this.defaultCategorie = [
                {
                    name: "Utilisateur",
                    editable: false,
                    deleteable: false,
                    expandMore: false,
                    expandOnboarding: true,
                    defaultValue: false,
                    suffixEndpoint: "category/user",
                    selector: {
                        label: "Company",
                        key: "Company",
                        defaultValue: [{ value: "Nowteam", checked: true }, { value: "Internal", checked: false }],
                        value: "Nowteam"
                    },
                    ticketType: {
                        label: "Type de ticket",
                        key: "tycketType",
                        defaultValue: [{ value: "Création de compte", checked: true, key: "Creation_de_compte" }, { value: "Configuration de poste", checked: false, key: "Configuration_de_poste" }],
                        value: "Creation_de_compte"
                    },
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
                            label: "Fixe (opt)",
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
                            label: "Mobile",
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
                    selector: {
                        label: "Company",
                        key: "Company",
                        defaultValue: [{ value: "Nowteam", checked: true }, { value: "Internal", checked: false }],
                        value: "Nowteam"
                    },
                    ticketType: {
                        label: "Type de ticket",
                        key: "tycketType",
                        defaultValue: [{ value: "Création de compte", checked: true, key: "Creation_de_compte" }, { value: "Configuration de poste", checked: false, key: "Configuration_de_poste" }],
                        value: "Creation_de_compte"
                    },
                    forms: [
                        {
                            label: "Utilisateur local à créer",
                            key: "UserLocalToCreate",
                            expandOnboarding: true,
                            defaultValue: null,
                            value: true,
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
                            /*selector: {
                              label: "Company",
                              key: "Company",
                              defaultValue: [{ value: "Nowteam", checked: true }, { value: "Internal", checked: false }],
                              value: "Nowteam"
                            },*/
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
                            value: true,
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
                                    label: "Votre mot de passe",
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
                                    value: true,
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
                                            label: "Utilisateur avec les droits similaires",
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
                    selector: {
                        label: "Company",
                        key: "Company",
                        defaultValue: [{ value: "Nowteam", checked: true }, { value: "Internal", checked: false }],
                        value: "Nowteam"
                    },
                    ticketType: {
                        label: "Type de ticket",
                        key: "tycketType",
                        defaultValue: [{ value: "Création de compte", checked: true, key: "Creation_de_compte" }, { value: "Configuration de poste", checked: false, key: "Configuration_de_poste" }],
                        value: "Creation_de_compte"
                    },
                    forms: [
                        {
                            label: "Adresse mail à créer",
                            key: "EmailToCreate",
                            expandOnboarding: true,
                            defaultValue: null,
                            value: true,
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
                            /*selector: {
                              label: "Company",
                              key: "Company",
                              defaultValue: [{ value: "Nowteam", checked: true }, { value: "Internal", checked: false }],
                              value: "Nowteam"
                            },*/
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
                            label: "Listes  de distribution",
                            key: "DistributionList",
                            expandOnboarding: true,
                            defaultValue: null,
                            value: true,
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
                            /*selector: {
                              label: "Company",
                              key: "Company",
                              defaultValue: [{ value: "Nowteam", checked: true }, { value: "Internal", checked: false }],
                              value: "Nowteam"
                            },*/
                            forms: [
                                {
                                    label: "Utilisateur avec les listes similaires",
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
                        {
                            label: "Ajouter des boites mails délégués",
                            key: "AddInboxMailDelegate",
                            expandOnboarding: true,
                            defaultValue: null,
                            value: true,
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
                            /*selector: {
                              label: "Company",
                              key: "Company",
                              defaultValue: [{ value: "Nowteam", checked: true }, { value: "Internal", checked: false }],
                              value: "Nowteam"
                            },*/
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
                    selector: {
                        label: "Company",
                        key: "Company",
                        defaultValue: [{ value: "Nowteam", checked: true }, { value: "Internal", checked: false }],
                        value: "Nowteam"
                    },
                    ticketType: {
                        label: "Type de ticket",
                        key: "tycketType",
                        defaultValue: [{ value: "Création de compte", checked: true, key: "Creation_de_compte" }, { value: "Configuration de poste", checked: false, key: "Configuration_de_poste" }],
                        value: "Creation_de_compte"
                    },
                    forms: [
                        {
                            label: "Accès aux lecteurs réseaux",
                            key: "ReadNetworkAccess",
                            expandOnboarding: true,
                            defaultValue: null,
                            value: true,
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
                            /*selector: {
                              label: "Company",
                              key: "Company",
                              defaultValue: [{ value: "Nowteam", checked: true }, { value: "Internal", checked: false }],
                              value: "Nowteam"
                            },*/
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
                    selector: {
                        label: "Company",
                        key: "Company",
                        defaultValue: [{ value: "Nowteam", checked: true }, { value: "Internal", checked: false }],
                        value: "Nowteam"
                    },
                    ticketType: {
                        label: "Type de ticket",
                        key: "tycketType",
                        defaultValue: [{ value: "Création de compte", checked: true, key: "Creation_de_compte" }, { value: "Configuration de poste", checked: false, key: "Configuration_de_poste" }],
                        value: "Creation_de_compte"
                    },
                    forms: [
                        {
                            label: "Accès au VPN",
                            key: "VpnAccess",
                            expandOnboarding: true,
                            defaultValue: null,
                            value: true,
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
                    ticketType: {
                        label: "Type de ticket",
                        key: "tycketType",
                        defaultValue: [{ value: "Création de compte", checked: true, key: "Creation_de_compte" }, { value: "Configuration de poste", checked: false, key: "Configuration_de_poste" }],
                        value: "Creation_de_compte"
                    },
                    selector: {
                        label: "Company",
                        key: "Company",
                        defaultValue: [{ value: "Nowteam", checked: true }, { value: "Internal", checked: false }],
                        value: "Nowteam"
                    },
                    forms: [
                        {
                            label: "Accès aux imprimantes",
                            key: "PrinterAccess",
                            expandOnboarding: true,
                            defaultValue: null,
                            value: true,
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
                            /*selector: {
                              label: "Company",
                              key: "Company",
                              defaultValue: [{ value: "Nowteam", checked: true }, { value: "Internal", checked: false }],
                              value: "Nowteam"
                            },*/
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
                    selector: {
                        label: "Company",
                        key: "Company",
                        defaultValue: [{ value: "Nowteam", checked: true }, { value: "Internal", checked: false }],
                        value: "Nowteam"
                    },
                    ticketType: {
                        label: "Type de ticket",
                        key: "tycketType",
                        defaultValue: [{ value: "Création de compte", checked: true, key: "Creation_de_compte" }, { value: "Configuration de poste", checked: false, key: "Configuration_de_poste" }],
                        value: "Creation_de_compte"
                    },
                    forms: [
                        {
                            label: "Accès aux applications ?",
                            key: "ApplicationAccess",
                            expandOnboarding: true,
                            defaultValue: null,
                            value: true,
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
                            /*selector: {
                              label: "Company",
                              key: "Company",
                              defaultValue: [{ value: "Nowteam", checked: true }, { value: "Internal", checked: false }],
                              value: "Nowteam"
                            },*/
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
                    selector: {
                        label: "Company",
                        key: "Company",
                        defaultValue: [{ value: "Nowteam", checked: true }, { value: "Internal", checked: false }],
                        value: "Nowteam"
                    },
                    ticketType: {
                        label: "Type de ticket",
                        key: "tycketType",
                        defaultValue: [{ value: "Création de compte", checked: true, key: "Creation_de_compte" }, { value: "Configuration de poste", checked: false, key: "Configuration_de_poste" }],
                        value: "Creation_de_compte"
                    },
                    forms: [
                        {
                            label: "Paramétrage de poste",
                            key: "PostParameter",
                            expandOnboarding: true,
                            defaultValue: null,
                            value: true,
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
                            /*selector: {
                              label: "Company",
                              key: "Company",
                              defaultValue: [{ value: "Nowteam", checked: true }, { value: "Internal", checked: false }],
                              value: "Nowteam"
                            },*/
                            forms: [
                                {
                                    label: "Réallocation d'équipement",
                                    key: "RealocatedEquipment",
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
                                    value: true,
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
                    selector: {
                        label: "Company",
                        key: "Company",
                        defaultValue: [{ value: "Nowteam", checked: true }, { value: "Internal", checked: false }],
                        value: "Nowteam"
                    },
                    ticketType: {
                        label: "Type de ticket",
                        key: "tycketType",
                        defaultValue: [{ value: "Création de compte", checked: true, key: "Creation_de_compte" }, { value: "Configuration de poste", checked: false, key: "Configuration_de_poste" }],
                        value: "Creation_de_compte"
                    },
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
            this.service._currentTemplate.subscribe(function (profil) {
                _this.initForm();
                if (profil) {
                    _this.form.patchValue(profil);
                    localStorage.setItem('profil', JSON.stringify(profil));
                }
                else {
                    var profil_1 = JSON.parse(localStorage.getItem('profil'));
                    _this.form.patchValue(profil_1);
                }
            });
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
        TemplateProfileCreateComponent.prototype.initForm = function () {
            this.form = this.fb.group({
                Name: ["", forms.Validators.required],
                Picto: [""],
                Description: [""],
                Tags: ["", forms.Validators.required],
                Status: [false, forms.Validators.required],
            });
        };
        TemplateProfileCreateComponent.prototype.ngOnInit = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _this = this;
                return __generator(this, function (_a) {
                    this.id = this.route.snapshot.paramMap.get("id");
                    this.form.valueChanges.subscribe(function (c) {
                        _this.canExit = false;
                    });
                    if (this.id !== "0") {
                        setTimeout(function () { return __awaiter(_this, void 0, void 0, function () {
                            var _a;
                            return __generator(this, function (_b) {
                                switch (_b.label) {
                                    case 0:
                                        _a = this;
                                        return [4 /*yield*/, this.service.getProfil(this.id)];
                                    case 1:
                                        _a.currentProfil = _b.sent();
                                        this.form.patchValue(this.currentProfil);
                                        this.categories = this.currentProfil.categories;
                                        return [2 /*return*/];
                                }
                            });
                        }); }, 500);
                    }
                    else {
                        this.showProfileName = true;
                        this.categories = this.defaultCategorie;
                    }
                    setTimeout(function () { return __awaiter(_this, void 0, void 0, function () {
                        var _a;
                        return __generator(this, function (_b) {
                            switch (_b.label) {
                                case 0:
                                    _a = this;
                                    return [4 /*yield*/, this.service.getAllTags()];
                                case 1:
                                    _a.tags = _b.sent();
                                    return [2 /*return*/];
                            }
                        });
                    }); }, 500);
                    this.getConditionValues();
                    return [2 /*return*/];
                });
            });
        };
        TemplateProfileCreateComponent.prototype.onAddNewCategory = function (e) {
            var _this = this;
            e.preventDefault();
            this.canExit = false;
            var data = {
                name: "Nom de la catégorie" + this.categories.length,
                editable: true,
                isConditional: false,
                conditionValue: "",
                conditionLocation: {},
                expandOnboarding: true,
                deleteable: true,
                expandMore: true,
                suffixEndpoint: "",
                selector: {
                    label: "Company",
                    key: "Company",
                    defaultValue: [{ value: "Nowteam", checked: true }, { value: "Internal", checked: false }],
                    value: "Nowteam"
                },
                ticketType: {
                    label: "Type de ticket",
                    key: "tycketType",
                    defaultValue: [{ value: "Création de compte", checked: true, key: "Creation_de_compte" }, { value: "Configuration de poste", checked: false, key: "Configuration_de_poste" }],
                    value: "Creation_de_compte"
                },
                forms: [
                    {
                        label: "Label à renommer",
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
            };
            this.categories.push(data);
            this.onHistorics({
                form: data,
                method: 'push',
                location: 'category',
                params: [this.categories.length - 1]
            });
            setTimeout(function () {
                _this.scrollToService.scrollTo({
                    target: data.name,
                    container: 'categories-id',
                    duration: 650,
                    easing: 'easeOutElastic',
                    offset: 20
                });
                setTimeout(function () {
                    _this.onExpendMore({ field: data }, _this.categories.length - 1);
                    _this.onActiveMenu(data, _this.categories.length - 1);
                }, 300);
            }, 200);
        };
        TemplateProfileCreateComponent.prototype.onAddNewField = function () {
            var params = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                params[_i] = arguments[_i];
            }
            this.canExit = false;
            var length = params.length;
            var forms = length === 1 ? this.categories[params[0]].forms : length === 2 ? this.categories[params[0]].forms[params[1]].forms : this.categories[params[0]].forms[params[1]].forms[params[2]].forms;
            var data = {
                label: "Label à renommer",
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
            };
            forms.push(data);
            console.log("xxxxxxxxxxwwwwwwwwwww", params);
            this.onHistorics({
                form: data,
                method: 'push',
                location: 'forms',
                params: params
            });
            this.onEditBlock(forms.at(-1), params);
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
            var newForm = {
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
            };
            forms.forms.push(newForm);
            this.onHistorics({
                form: newForm,
                method: 'push',
                location: 'forms',
                params: params
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
            this.onHistorics({
                form: forms[params[length - 1]],
                location: 'forms',
                method: 'splice',
                params: params
            });
        };
        TemplateProfileCreateComponent.prototype.onRemoveCategory = function (e, i) {
            e.preventDefault();
            this.canExit = false;
            this.onHistorics({
                form: this.categories.splice(i, 1),
                method: 'splice',
                location: 'category',
                params: [i]
            });
        };
        TemplateProfileCreateComponent.prototype.onChangeCategory = function () {
            return this.categories.every(function (cat) { return cat.name !== "" && cat.forms.every(function (field) { return field.label !== "" && field.type !== ""; }); });
        };
        TemplateProfileCreateComponent.prototype.onSubmit = function (isPublish) {
            return __awaiter(this, void 0, void 0, function () {
                var result, _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            if (!(this.form.valid && this.onChangeCategory())) return [3 /*break*/, 8];
                            if (isPublish) {
                                this.liveLabel = "Chargement....";
                            }
                            else {
                                this.draftLabel = "Chargement...";
                            }
                            if (!(this.id !== "0")) return [3 /*break*/, 2];
                            return [4 /*yield*/, this.service.updateProfil(__assign(__assign(__assign({}, this.currentProfil), this.form.value), { Status: isPublish, categories: this.categories }))];
                        case 1:
                            _a = _b.sent();
                            return [3 /*break*/, 4];
                        case 2: return [4 /*yield*/, this.service.createProfil(__assign(__assign({}, this.form.value), { Status: isPublish, categories: this.categories }))];
                        case 3:
                            _a = _b.sent();
                            _b.label = 4;
                        case 4:
                            result = _a;
                            if (!result) return [3 /*break*/, 6];
                            localStorage.removeItem('profil');
                            return [4 /*yield*/, this.service.getAllProfil()];
                        case 5:
                            _b.sent();
                            this.canExit = true;
                            this.router.navigate([this.service.mainPath + '/template']);
                            return [3 /*break*/, 7];
                        case 6:
                            console.log("errror......");
                            _b.label = 7;
                        case 7:
                            if (isPublish) {
                                this.liveLabel = "Publié";
                            }
                            else {
                                this.draftLabel = "Enregistrer le brouillon";
                            }
                            _b.label = 8;
                        case 8: return [2 /*return*/];
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
            else if (type === "checkbox" || type === "toggle") {
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
            this.getConditionValues();
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
            this.getConditionValues();
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
            this.getConditionValues();
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
            this.getConditionValues();
        };
        TemplateProfileCreateComponent.prototype.drop = function (event) {
            this.canExit = false;
            if (event.previousContainer === event.container) {
                dragDrop.moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
            }
            else {
                dragDrop.transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
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
            this.getConditionValues();
        };
        TemplateProfileCreateComponent.prototype.openDialog = function () {
            var _this = this;
            var dialogRef = this.dialog.open(DialogCreateTemplateComponent, {
                data: {
                    tags: this.tags,
                    profil: this.form.value
                }
            });
            dialogRef.afterClosed().subscribe(function (current) {
                if (current) {
                    _this.service.currentTemplate.next(current);
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
            this.getConditionValues();
        };
        TemplateProfileCreateComponent.prototype.onAcrelink = function (e) {
            e.preventDefault();
        };
        TemplateProfileCreateComponent.prototype.getConditionValues = function () {
            var conditionsList = [];
            var type = function (forms) { return forms.type === 'select' || forms.type === 'toggle' || forms.type === 'checkobx' || forms.type === 'checkbox_multiple' || forms.type === 'radio'; };
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
                            if (sub.type === 'checkbox' || sub.type === 'toggle' || sub.type === 'select' || sub.type === 'radio' || sub.type === 'checkbox_multiple') {
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
                                    if (child.type === 'checkbox' || child.type === 'toggle' || child.type === 'select' || child.type === 'radio' || child.type === 'checkbox_multiple') {
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
            this.conditionData = conditionsList;
        };
        TemplateProfileCreateComponent.prototype.onActiveMenu = function (cat, i, event) {
            if (event === void 0) { event = null; }
            this.editIndex = i;
            this.paramsIndex = [i];
            this.onExpendMore({ field: cat }, i);
            this.onShowSection(event);
            this.currentEditBlock = cat;
        };
        TemplateProfileCreateComponent.prototype.catNameStart = function (str) {
            var vowels = ['a', 'e', 'i', 'o', 'u', 'y'];
            return vowels.includes(str.substr(0, 1).toLocaleLowerCase());
        };
        TemplateProfileCreateComponent.prototype.onShowSection = function (e) {
            if (e)
                e.stopPropagation();
            this.isSection = true;
            this.isBlock = false;
        };
        TemplateProfileCreateComponent.prototype.onEditBlock = function (block) {
            var params = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                params[_i - 1] = arguments[_i];
            }
            console.log(params);
            this.isBlock = true;
            this.currentEditBlock = block;
            this.isSection = false;
            this.paramsIndex = params;
        };
        TemplateProfileCreateComponent.prototype.onRemoveblock = function (event, block) {
            event.preventDefault();
        };
        TemplateProfileCreateComponent.prototype.onRemoveFieldBlock = function (event) {
            event.preventDefault();
            var length = this.paramsIndex.length;
            this.canExit = false;
            var forms = length === 1 ? this.categories : length === 2 ? this.categories[this.paramsIndex[0]].forms : length === 3 ? this.categories[this.paramsIndex[0]].forms[this.paramsIndex[1]].forms : this.categories[this.paramsIndex[0]].forms[this.paramsIndex[1]].forms[this.paramsIndex[2]].forms;
            this.currentEditBlock = null;
            this.isBlock = false;
            this.isSection = false;
            this.onHistorics({
                form: forms.splice(this.paramsIndex[length - 1], 1)[0],
                method: 'splice',
                location: length === 1 ? 'category' : 'forms',
                params: this.paramsIndex
            });
        };
        TemplateProfileCreateComponent.prototype.onDuplicatedBlock = function (event) {
            event.preventDefault();
            var length = this.paramsIndex.length;
            this.canExit = false;
            var forms = length === 1 ? this.categories : length === 2 ? this.categories[this.paramsIndex[0]].forms : length === 3 ? this.categories[this.paramsIndex[0]].forms[this.paramsIndex[1]].forms : this.categories[this.paramsIndex[0]].forms[this.paramsIndex[1]].forms[this.paramsIndex[2]].forms;
            var cloneEditable = this.onEditableBlock(__assign(__assign({}, this.currentEditBlock), { name: this.currentEditBlock.name + ' - copie' }));
            console.log('-------wwwwwwwww---------------', cloneEditable);
            var cloneBlock = JSON.stringify(cloneEditable);
            forms.push(JSON.parse(cloneBlock));
            this.currentEditBlock = forms.at(-1);
            var params = __spread(this.paramsIndex);
            params.pop();
            params.push(forms.length - 1);
            this.onHistorics({
                form: JSON.parse(cloneBlock),
                method: 'push',
                location: 'forms',
                params: params
            });
            // this.editIndex = forms.length - 1;
        };
        TemplateProfileCreateComponent.prototype.onEditableBlock = function (notEditableBlock) {
            var editableFormBlock = notEditableBlock.forms ? notEditableBlock.forms
                .map(function (cat) {
                if (cat.forms) {
                    var f = cat.forms
                        .map(function (sub) {
                        if (sub.forms) {
                            var s = sub.forms.map(function (child) {
                                if (child.forms) {
                                    return __assign(__assign({}, child), { editable: true });
                                }
                                return __assign(__assign({}, child), { editable: true });
                            });
                            return __assign(__assign({}, sub), { editable: true, forms: s });
                        }
                        return __assign(__assign({}, sub), { editable: true });
                    });
                    return __assign(__assign({}, cat), { editable: true, forms: f });
                }
                return __assign(__assign({}, cat), { editable: true });
            }) : null;
            return editableFormBlock ? __assign(__assign({}, notEditableBlock), { editable: true, forms: editableFormBlock }) : notEditableBlock;
        };
        TemplateProfileCreateComponent.prototype.onKeyUpChip = function (event, field) {
            this.canExit = false;
            if (event.key === ";") {
                var exist = field.defaultValue.find(function (opt) { return opt.value.toLocaleLowerCase() === event.target.value.split(";")[0].toLocaleLowerCase(); });
                if (!exist) {
                    field.defaultValue.push({
                        value: event.target.value.split(";")[0].slice(0, 20),
                        checked: false
                    });
                    event.target.value = "";
                }
                else {
                    event.target.value = "";
                }
            }
            this.getConditionValues();
        };
        TemplateProfileCreateComponent.prototype.onEditChip = function (chip) {
            if (chip.value === this.currentChip) {
                this.currentChip = "";
                this.prevValue = "";
            }
            else {
                this.currentChip = chip.value;
                this.prevValue = chip.value;
            }
        };
        TemplateProfileCreateComponent.prototype.addKeywordFromInputBlock = function (event, field, prev) {
            var _a;
            this.canExit = false;
            var input = event.input;
            var value = event.value;
            if (value) {
                var prevIndex = (_a = field.defaultValue) === null || _a === void 0 ? void 0 : _a.findIndex(function (opt) { return opt.value.toLocaleLowerCase() === prev.toLocaleLowerCase(); });
                if (prevIndex !== -1) {
                    field.defaultValue[prevIndex].value = value.trim();
                    input.value = "";
                }
                else {
                    var exist = field.defaultValue.find(function (opt) { return opt.value.toLocaleLowerCase() === event.value.toLocaleLowerCase(); });
                    if (!exist) {
                        field.defaultValue.push({ value: value.trim().slice(0, 15), checked: false });
                        input.value = "";
                    }
                    else {
                        input.value = "";
                    }
                }
            }
            this.getConditionValues();
        };
        TemplateProfileCreateComponent.prototype.onCheckedChipBlock = function (event, field) {
            this.canExit = false;
            var index = field.defaultValue.findIndex(function (chip) { return chip.value === event.value; });
            if (index !== -1 && field.type === 'checkbox_multiple') {
                field.defaultValue[index].checked = !event.checked;
            }
            else if (index !== -1) {
                field.defaultValue.forEach(function (value) {
                    value.checked = false;
                });
                field.defaultValue[index].checked = !event.checked;
            }
            this.getConditionValues();
        };
        TemplateProfileCreateComponent.prototype.removeKeywordBlock = function (keyword, field) {
            this.canExit = false;
            field.defaultValue = field.defaultValue.filter(function (option) { return option.value !== keyword.value; });
            this.getConditionValues();
        };
        TemplateProfileCreateComponent.prototype.onChangeTypeBlock = function (field) {
            this.canExit = false;
            if (field.type === "select" || field.type === "radio" || field.type === "checkbox_multiple") {
                field.defaultValue = [];
            }
            else if (field.type === "checkbox" || field.type === "toggle") {
                field.defaultValue = true;
                field.value = false;
            }
            else {
                field.defaultValue = "";
                field.value = "";
            }
        };
        TemplateProfileCreateComponent.prototype.onAddNewSubLevelFieldBlock = function (event) {
            event.preventDefault();
            this.canExit = false;
            var length = this.paramsIndex.length;
            var forms = length === 1 ? this.categories[this.paramsIndex[0]] : length === 2 ? this.categories[this.paramsIndex[0]].forms[this.paramsIndex[length - 1]] : length === 3 ? this.categories[this.paramsIndex[0]].forms[this.paramsIndex[1]].forms[this.paramsIndex[length - 1]] : this.categories[this.paramsIndex[0]].forms[this.paramsIndex[1]].forms[this.paramsIndex[2]].forms[this.paramsIndex[length - 1]];
            forms.expandMore = true;
            forms.forms = forms.forms || [];
            var data = {
                label: "Nouvelle sous catégorie à renommer",
                key: "Nouvellesouscatégorieàrenommer",
                expandOnboarding: true,
                defaultValue: null,
                value: true,
                size: 80,
                isMandatory: false,
                otherValue: '',
                type: "text",
                editable: true,
                isConditional: false,
                conditionValue: "",
                conditionLocation: {},
                deleteable: true,
                subLevel: 1,
                expandMore: false,
            };
            forms.forms.push(data);
            this.onHistorics({
                form: data,
                method: 'push',
                location: 'forms',
                params: this.paramsIndex
            });
        };
        TemplateProfileCreateComponent.prototype.onOpenTypeDialog = function (field) {
            var _this = this;
            var dialogRef = this.dialog.open(TypeComponent, {
                data: { selectedType: field.type }
            });
            dialogRef.afterClosed().subscribe(function (type) {
                if (type) {
                    field.type = type;
                    _this.onChangeTypeBlock(field);
                }
            });
        };
        TemplateProfileCreateComponent.prototype.onSelectCondition = function (conditionLocation) {
            this.currentEditBlock.conditionLocation = conditionLocation;
        };
        TemplateProfileCreateComponent.prototype.fieldWidth = function (type, length, index) {
            if (type === 'toggle') {
                return '50%';
            }
            else if (type === "text" || type == 'select' || type === 'tel' || type === 'email' || type === 'password' || type === 'textarea') {
                if (length < 3) {
                    return '50%';
                }
                else if (length === 3) {
                    return '33%';
                }
                else if (length === 4) {
                    return '50%';
                }
                else if (length === 5) {
                    return index <= 2 ? '33%' : '50%';
                }
                else if (length >= 6) {
                    return '33%';
                }
            }
            return '100%';
        };
        TemplateProfileCreateComponent.prototype.onCancel = function (left) {
            if (left) {
                var current = this.currentCanceledIndex === null ? this.historics.length - 1 : this.currentCanceledIndex;
                if (this.historics.length > 0 && current >= 0) {
                    this.currentCanceledIndex = current - 1;
                    console.log("🚀 ~ file: template-profile-create.component.ts ~ line 1902 ~ TemplateProfileCreateComponent ~ onCancel ~ this.currentCanceledIndex", this.currentCanceledIndex);
                    console.log(this.currentCanceledIndex);
                    var lastAction = this.historics[current];
                    console.log('lastAction left', lastAction);
                    var params = lastAction.params;
                    var length_1 = params.length;
                    console.log('length', length_1);
                    console.log('this.categories', this.categories);
                    var forms = length_1 === 1 ? this.categories : length_1 === 2 ? this.categories[params[0]].forms[params[1]].forms : this.categories[params[0]].forms[params[1]].forms[params[2]].forms;
                    if (lastAction.method === "splice") {
                        if (length_1 === 1 && lastAction.location === 'category') {
                            forms.push(lastAction.form);
                        }
                        else if (length_1 === 1 && lastAction.location === 'forms') {
                            forms[params[0]].forms.push(lastAction.form);
                        }
                        else {
                            forms.push(lastAction.form);
                        }
                        if (lastAction.location === 'category') {
                            this.onActiveMenu(forms[forms.length - 1], forms.length - 1);
                        }
                        else {
                            this.onEditBlock(forms[forms.length - 1], lastAction.params);
                        }
                    }
                    else {
                        if (length_1 === 1 && lastAction.location === 'category') {
                            forms.splice(params[length_1 - 1], 1);
                        }
                        else if (length_1 === 1 && lastAction.location === 'forms') {
                            forms[params[0]].forms.splice(params[length_1 - 1], 1);
                        }
                        else {
                            forms.splice(params[length_1 - 1], 1);
                        }
                        this.currentEditBlock = null;
                    }
                }
            }
            else {
                if (this.currentCanceledIndex !== null && this.historics.length > this.currentCanceledIndex) {
                    this.currentCanceledIndex += 1;
                    console.log("🚀 ~ file: template-profile-create.component.ts ~ line 1920 ~ TemplateProfileCreateComponent ~ onCancel ~ this.currentCanceledIndex", this.currentCanceledIndex);
                    var lastAction = this.historics[this.currentCanceledIndex];
                    console.log('lastAction right', lastAction);
                    var params = lastAction.params;
                    var length_2 = params.length;
                    console.log('length', length_2);
                    var forms = length_2 === 1 ? this.categories : length_2 === 2 ? this.categories[params[0]].forms[params[1]].forms : this.categories[params[0]].forms[params[1]].forms[params[2]].forms;
                    console.log('forms', forms);
                    if (lastAction.method === "push") {
                        if (length_2 === 1 && lastAction.location === 'category') {
                            forms.push(lastAction.form);
                        }
                        else if (length_2 === 1 && lastAction.location === 'forms') {
                            forms[params[0]].forms.push(lastAction.form);
                        }
                        else {
                            forms.push(lastAction.form);
                        }
                        if (lastAction.location === 'category') {
                            this.onActiveMenu(forms[forms.length - 1], forms.length - 1);
                        }
                        else {
                            this.onEditBlock(forms[forms.length - 1], lastAction.params);
                        }
                    }
                    else {
                        if (length_2 === 1 && lastAction.location === 'category') {
                            forms.splice(params[length_2 - 1], 1);
                        }
                        else if (length_2 === 1 && lastAction.location === 'forms') {
                            forms[params[0]].forms.splice(params[length_2 - 1], 1);
                        }
                        else {
                            forms.splice(params[length_2 - 1], 1);
                        }
                        this.currentEditBlock = null;
                    }
                }
            }
        };
        TemplateProfileCreateComponent.prototype.onCheckValue = function (event) {
            this.invalideValue = event;
        };
        TemplateProfileCreateComponent.prototype.onHistorics = function (data) {
            if (this.currentCanceledIndex !== null) {
                this.historics = [];
                this.currentCanceledIndex = null;
            }
            console.log(data);
            this.historics.push(data);
        };
        TemplateProfileCreateComponent.ɵfac = function TemplateProfileCreateComponent_Factory(t) { return new (t || TemplateProfileCreateComponent)(core.ɵɵdirectiveInject(forms.FormBuilder), core.ɵɵdirectiveInject(OnboardingService), core.ɵɵdirectiveInject(router.ActivatedRoute), core.ɵɵdirectiveInject(router.Router), core.ɵɵdirectiveInject(dialog.MatDialog), core.ɵɵdirectiveInject(ngxScrollTo.ScrollToService)); };
        TemplateProfileCreateComponent.ɵcmp = core.ɵɵdefineComponent({ type: TemplateProfileCreateComponent, selectors: [["onboarding-create-profile-template"]], decls: 35, vars: 11, consts: [[3, "formGroup"], [1, "category"], [1, "side-bar"], [1, "summary"], [3, "click"], ["class", "li-title", 3, "class", "click", 4, "ngFor", "ngForOf"], ["mat-button", "", "type", "submit", 1, "register-button", 3, "click"], ["mat-button", "", "type", "submit", 1, "register-button", "live-button", 3, "click"], [2, "display", "flex", "margin-right", "14px"], ["mat-button", "", "type", "submit", 1, "register-button", "live-button", 2, "margin-top", "10px", 3, "disabled", "click"], ["cdkDropListGroup", "", 1, "fields"], ["id", "categories-id", "cdkDropList", "", 1, "fields-inner", "example-list", "mt-10", 3, "cdkDropListData", "cdkDropListDropped"], ["parentList", "cdkDropList"], ["class", "category-item section-item", "cdkDrag", "", 3, "id", "paddingBottom", "class", 4, "ngFor", "ngForOf"], [1, "add-button-container", "add-category-button", "add-step"], [1, "field-property"], ["class", "property-content", 4, "ngIf"], [1, "li-title", 3, "click"], [3, "ngxScrollTo"], ["cdkDrag", "", 1, "category-item", "section-item", 3, "id"], ["cdkDragHandle", "", 1, "left-action", "move-icons"], ["mat-raised-button", "", 1, "transparent-button", 3, "click"], [1, "drag-icon"], [1, "field-content"], [1, "field-item", 3, "click"], [1, "full-width", "input-category-name"], [1, "sub-category-name"], ["mat-mini-fab", "", "color", "primary", 1, "expand-button", 3, "click"], [4, "ngIf"], ["class", "child-list", "cdkDropList", "", 3, "cdkDropListData", "cdkDropListDropped", 4, "ngIf"], ["cdkDropList", "", 1, "child-list", 3, "cdkDropListData", "cdkDropListDropped"], ["childList", "cdkDropList"], ["class", "field-box", 3, "id", "width", 4, "ngFor", "ngForOf"], [1, "field-box", 3, "id"], ["cdkDrag", ""], [1, "fields-content"], ["class", "button-action", 4, "ngIf"], [1, "fields-container"], ["class", "sub-header", 4, "ngIf"], [3, "field", "length", "i", "j", "conditionData", "onCheckValue", "onAddKeywordFromInput", "onKeyPress", "onAddNewField", "onRemoveField", "onChangeType", "onRemoveKeyword", "onAddNewSubLevelField", "onExpendMore", "onChangeLabel", "onCheckedChip", "onDrop", "onCheckedDefault", "onEditBlock", "onGetConditionValues"], ["class", "child", 4, "ngIf"], ["class", "add-button-container add-button-sub-category", 4, "ngIf"], [1, "button-action"], [1, "sub-header"], [1, "field-item"], ["mat-raised-button", "", 1, "transparent-button", "setting", 3, "click"], [1, "setting-icon"], ["mat-mini-fab", "", "color", "primary", 1, "expand-button", 3, "disabled", "click"], [1, "child"], ["class", "child-content", "cdkDropList", "", 3, "cdkDropListData", "cdkDropListDropped", 4, "ngIf"], ["cdkDropList", "", 1, "child-content", 3, "cdkDropListData", "cdkDropListDropped"], ["class", "", "style", "margin-bottom: 20px", 3, "id", "width", 4, "ngFor", "ngForOf"], [1, "", 2, "margin-bottom", "20px", 3, "id"], ["class", "button-action child-2-background", 4, "ngIf"], ["class", "add-button-sub-category", 4, "ngIf"], [1, "button-action", "child-2-background"], ["type", "text", "required", "", "placeholder", "Saisir le nom de la sous cat\u00E9gorie", 1, "full-width", "input-category-name", 3, "readonly", "ngModel", "ngModelOptions", "ngModelChange"], ["class", "", 3, "id", "width", 4, "ngFor", "ngForOf"], [1, "", 3, "id"], ["class", "button-action child-3-background", 4, "ngIf"], [1, "button-action", "child-3-background"], [1, "add-button-sub-category"], ["mat-raised-button", "", "color", "primary", 2, "margin", "10px auto", 3, "click"], [1, "add-button-container", "add-button-sub-category"], ["mat-raised-button", "", "color", "primary", 1, "add-button", 2, "margin", "10px auto", "padding", "10px 0", 3, "disabled", "click"], [1, "property-content"], ["appearance", "outline", 1, "form-field", "mat-select", "full-width", 2, "cursor", "pointer"], ["disabled", "true", "required", "", 1, "select-type-class", 3, "ngModel", "ngModelOptions", "click", "ngModelChange"], ["value", "text"], ["value", "textarea"], ["value", "radio"], ["value", "select"], ["value", "toggle"], ["value", "checkbox"], ["value", "checkbox_multiple"], ["value", "email"], ["value", "password"], ["value", "date"], ["value", "tel"], ["appearance", "outline", 1, "form-field", "full-width"], ["type", "text", "matInput", "", "required", "", "placeholder", "", 3, "ngModel", "ngModelOptions", "ngModelChange"], [3, "ngSwitch"], ["class", "flex-auto", "style", "display: flex;align-items: flex-end;margin: 10px 0;", 4, "ngSwitchCase"], ["class", "flex-auto", 4, "ngSwitchCase"], ["class", "flex-auto full-width", "appearance", "outline", 4, "ngSwitchCase"], ["class", "form-field full-width", "appearance", "outline", 4, "ngSwitchCase"], ["class", "form-field full-width", "appearance", "outline", 3, "opacity", 4, "ngSwitchDefault"], [1, "mandatory", "top-10", "bottom-10"], [1, "toogle-button"], ["color", "#6FE8D7", 3, "ngModel", "ngModelOptions", "ngModelChange"], [1, "mandatory", "top-10"], ["class", "form-field mat-select full-width", "appearance", "outline", 4, "ngIf"], ["aria-labelledby", "example-radio-group-label", 1, "example-radio-group", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["class", "example-radio-button", "style", "margin-right: 10px", 3, "value", 4, "ngFor", "ngForOf"], [1, "bloc-action"], ["mat-button", "", 3, "disabled", "click", 4, "ngIf"], ["mat-button", "", 3, "disabled", "click"], ["mat-button", "", 1, "delete-bloc", 3, "disabled", "click"], [1, "flex-auto", 2, "display", "flex", "align-items", "flex-end", "margin", "10px 0"], ["color", "#6FE8D7", 1, "form-field", 3, "ngModel", "ngModelOptions", "ngModelChange"], [2, "margin-left", "10px"], [1, "flex-auto"], [1, "form-field", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["appearance", "outline", 1, "flex-auto", "full-width"], ["cdkDropList", "", "aria-label", "Video keywords; let index=index", "multiple", "", "selectable", "", 3, "cdkDropListData", "cdkDropListDropped"], ["childList", "cdkDropList", "chipList", ""], ["style", "min-height: 25px;width: auto;", "cdkDrag", "", 3, "selected", "value", "removable", "dblclick", "click", "removed", 4, "ngFor", "ngForOf"], ["placeholder", "add...", 3, "matChipInputFor", "matChipInputAddOnBlur", "matChipInputSeparatorKeyCodes", "ngModel", "ngModelOptions", "matChipInputTokenEnd", "keyup", "ngModelChange"], ["chipsInput", ""], ["cdkDrag", "", 2, "min-height", "25px", "width", "auto", 3, "selected", "value", "removable", "dblclick", "click", "removed"], ["matChipRemove", ""], ["type", "text", "matInput", "", "placeholder", "Description...", 3, "ngModelOptions", "ngModel", "ngModelChange"], ["matInput", "", "placeholder", "", 3, "type", "disabled", "ngModelOptions", "ngModel", "ngModelChange"], ["appearance", "outline", 1, "form-field", "mat-select", "full-width"], ["required", "", 3, "ngModel", "ngModelOptions", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], [1, "example-radio-button", 2, "margin-right", "10px", 3, "value"], [1, ""], ["mat-button", "", 3, "click"]], template: function TemplateProfileCreateComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵelementStart(0, "main");
                core.ɵɵelementStart(1, "form", 0);
                core.ɵɵelementStart(2, "div", 1);
                core.ɵɵelementStart(3, "div", 2);
                core.ɵɵelementStart(4, "div", 3);
                core.ɵɵelementStart(5, "h3");
                core.ɵɵelementStart(6, "span");
                core.ɵɵtext(7);
                core.ɵɵelementEnd();
                core.ɵɵelementStart(8, "mat-icon", 4);
                core.ɵɵlistener("click", function TemplateProfileCreateComponent_Template_mat_icon_click_8_listener() { return ctx.openDialog(); });
                core.ɵɵtext(9, "edit");
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
                core.ɵɵelementStart(10, "ol");
                core.ɵɵtemplate(11, TemplateProfileCreateComponent_li_11_Template, 4, 4, "li", 5);
                core.ɵɵelementEnd();
                core.ɵɵelementStart(12, "button", 6);
                core.ɵɵlistener("click", function TemplateProfileCreateComponent_Template_button_click_12_listener() { return ctx.onSubmit(false); });
                core.ɵɵtext(13);
                core.ɵɵelementEnd();
                core.ɵɵelementStart(14, "button", 7);
                core.ɵɵlistener("click", function TemplateProfileCreateComponent_Template_button_click_14_listener() { return ctx.onSubmit(true); });
                core.ɵɵtext(15);
                core.ɵɵelementEnd();
                core.ɵɵelementStart(16, "div", 8);
                core.ɵɵelementStart(17, "button", 9);
                core.ɵɵlistener("click", function TemplateProfileCreateComponent_Template_button_click_17_listener() { return ctx.onCancel(true); });
                core.ɵɵelementStart(18, "mat-icon");
                core.ɵɵtext(19, "rotate_left");
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
                core.ɵɵelementStart(20, "button", 9);
                core.ɵɵlistener("click", function TemplateProfileCreateComponent_Template_button_click_20_listener() { return ctx.onCancel(false); });
                core.ɵɵelementStart(21, "mat-icon");
                core.ɵɵtext(22, "rotate_right");
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
                core.ɵɵelementStart(23, "div", 10);
                core.ɵɵelementStart(24, "div", 11, 12);
                core.ɵɵlistener("cdkDropListDropped", function TemplateProfileCreateComponent_Template_div_cdkDropListDropped_24_listener($event) { return ctx.drop($event); });
                core.ɵɵtemplate(26, TemplateProfileCreateComponent_div_26_Template, 16, 10, "div", 13);
                core.ɵɵelementStart(27, "div", 14);
                core.ɵɵelementStart(28, "button", 4);
                core.ɵɵlistener("click", function TemplateProfileCreateComponent_Template_button_click_28_listener($event) { return ctx.onAddNewCategory($event); });
                core.ɵɵtext(29, " Ajouter une \u00E9tape ");
                core.ɵɵelementStart(30, "mat-icon");
                core.ɵɵtext(31, "add");
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
                core.ɵɵelementStart(32, "div", 15);
                core.ɵɵtemplate(33, TemplateProfileCreateComponent_div_33_Template, 63, 27, "div", 16);
                core.ɵɵtemplate(34, TemplateProfileCreateComponent_div_34_Template, 26, 9, "div", 16);
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
            } if (rf & 2) {
                core.ɵɵadvance(1);
                core.ɵɵproperty("formGroup", ctx.form);
                core.ɵɵadvance(6);
                core.ɵɵtextInterpolate(ctx.form.get("Name").value);
                core.ɵɵadvance(4);
                core.ɵɵproperty("ngForOf", ctx.categories);
                core.ɵɵadvance(2);
                core.ɵɵtextInterpolate(ctx.draftLabel);
                core.ɵɵadvance(2);
                core.ɵɵtextInterpolate(ctx.liveLabel);
                core.ɵɵadvance(2);
                core.ɵɵproperty("disabled", ctx.currentCanceledIndex < 0 || ctx.historics.length === 0);
                core.ɵɵadvance(3);
                core.ɵɵproperty("disabled", ctx.currentCanceledIndex === ctx.historics.length - 1 || ctx.currentCanceledIndex === null);
                core.ɵɵadvance(4);
                core.ɵɵproperty("cdkDropListData", ctx.categories);
                core.ɵɵadvance(2);
                core.ɵɵproperty("ngForOf", ctx.categories);
                core.ɵɵadvance(7);
                core.ɵɵproperty("ngIf", ctx.isBlock && ctx.currentEditBlock);
                core.ɵɵadvance(1);
                core.ɵɵproperty("ngIf", ctx.isSection && ctx.currentEditBlock);
            } }, directives: [forms.ɵangular_packages_forms_forms_y, forms.NgControlStatusGroup, forms.FormGroupDirective, icon.MatIcon, common.NgForOf, button.MatButton, dragDrop.CdkDropListGroup, dragDrop.CdkDropList, common.NgIf, ngxScrollTo.ScrollToDirective, dragDrop.CdkDrag, dragDrop.CdkDragHandle, SubTemplateProfileComponent, forms.DefaultValueAccessor, forms.RequiredValidator, forms.NgControlStatus, forms.NgModel, ngxIntlTelInput.NativeElementInjectorDirective, formField.MatFormField, formField.MatLabel, select.MatSelect, core$1.MatOption, input.MatInput, common.NgSwitch, common.NgSwitchCase, common.NgSwitchDefault, slideToggle.MatSlideToggle, radio.MatRadioGroup, checkbox.MatCheckbox, chips.MatChipList, chips.MatChipInput, chips.MatChip, chips.MatChipRemove, radio.MatRadioButton], styles: ["main[_ngcontent-%COMP%]{background:no-repeat padding-box #f4f7f9;height:100vh;width:100%;display:flex;flex-direction:column;align-items:center}main[_ngcontent-%COMP%]   .disabled[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{background-color:transparent!important}main[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{display:flex;height:100%;width:100%;max-width:1500px}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]{width:786px;background:no-repeat padding-box #fff;border:1px solid #dce4e9;border-radius:6px;opacity:1;margin:auto;padding:0 25px;-ms-grid-row-align:center;align-self:center}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{text-align:center;font:900 32px/48px Nexa;letter-spacing:0;color:#171f26}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font:18px/24px Nexa Text;letter-spacing:0;color:#171f26}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .profil-name-content[_ngcontent-%COMP%]{display:flex;align-items:center;position:relative}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .profil-name-content[_ngcontent-%COMP%]   .add-picto[_ngcontent-%COMP%]{margin-right:15px;min-width:50px;width:30px;padding:9px 12px}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .profil-name-content[_ngcontent-%COMP%]   .add-picto[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin-right:10px}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .profil-name-content[_ngcontent-%COMP%]   .list-picto[_ngcontent-%COMP%]{position:absolute;height:200px;width:100%;background:no-repeat padding-box #fff;border:1px solid #171f26;border-radius:8px;top:100%;z-index:1}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .profil-name-content[_ngcontent-%COMP%]   .list-picto[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin:15px;border:none;font-size:40px}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .profil-name-content[_ngcontent-%COMP%]   .list-picto[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]:hover{color:#830b6b!important;cursor:pointer}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .box-title-content[_ngcontent-%COMP%]{width:100%;margin:25px auto}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font:900 32px/38px Nexa;letter-spacing:0;color:#171f26}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font:15px/26px Nexa Text;letter-spacing:0;color:#171f26;text-align:center}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .link-create-profil[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:center}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{text-align:center;border:1px solid #543cb6;border-radius:7px;padding:.7em 2em .5em;display:flex;align-items:center;background-color:transparent;font:bold 15px/17px Nexa;letter-spacing:0;color:#543cb6}main[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:space-between}.expand-button[_ngcontent-%COMP%]{color:#5a607f!important;background-color:transparent!important;box-shadow:none!important}.input-category-name[_ngcontent-%COMP%]{border:none;outline:0;text-align:left;font-family:Nexa;font-weight:700;font-size:20px;line-height:28px;color:#242731}.sub-category-name[_ngcontent-%COMP%]{font-family:Nexa;font-style:normal;font-weight:250;font-size:14px;line-height:16px;display:flex;align-items:center;color:#575f6e;word-break:break-word}.full-width[_ngcontent-%COMP%]{width:100%}.field-action[_ngcontent-%COMP%]{width:10%}.field-size[_ngcontent-%COMP%]{width:90%;margin:auto 2% auto auto}  .mat-form-field-appearance-fill .mat-form-field-flex{background-color:#fff}  .mat-select.mat-form-field-appearance-outline .mat-form-field-infix{padding:.5em 0}  .mat-select{padding:8px 0}  .mat-form-field-appearance-fill .mat-form-field-underline::before{background-color:transparent}  .mat-form-field-wrapper{padding-bottom:0!important}[_nghost-%COMP%]     .cdk-drag-preview .input-category-name div.mat-form-field-outline-start, [_nghost-%COMP%]     .input-category-name div.mat-form-field-outline-start{border-color:0!important;border-width:0!important}[_nghost-%COMP%]     .input-category-name .mat-form-field-outline-gap{border-color:0!important;border-width:0!important}[_nghost-%COMP%]     .mat-checkbox-checked.mat-accent .mat-checkbox-background, [_nghost-%COMP%]     .mat-checkbox-indeterminate.mat-accent .mat-checkbox-background{background-color:transparent}[_nghost-%COMP%]     .input-category-name .mat-form-field-outline-end{border-color:0!important;border-width:0!important}[_nghost-%COMP%]     .input-category-name .mat-form-field-label-wrapper{display:none}[_nghost-%COMP%]     .input-category-name .mat-form-field-appearance-outline .mat-form-field-outline{color:transparent!important}[_nghost-%COMP%]     .input-category-name .mat-form-field-infix{border-top:none}.category-action[_ngcontent-%COMP%]{display:flex;width:100%}.delete-field[_ngcontent-%COMP%]{margin:auto 2%}.radio-group[_ngcontent-%COMP%]   .mat-radio-button[_ngcontent-%COMP%]{margin-right:10px}.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary[_ngcontent-%COMP%]{background-color:#3f51b5;color:#fff;min-height:20px;font-size:10px}.move-icons[_ngcontent-%COMP%]{cursor:move}.category-item[_ngcontent-%COMP%], .cdk-drag-placeholder[_ngcontent-%COMP%]{display:flex;align-items:baseline;position:relative;width:calc(100% - 40px)!important;border-radius:8px;background-color:#fff;margin-bottom:15px;margin-right:5px;padding:6px 15px}.category-item[_ngcontent-%COMP%]   .left-action[_ngcontent-%COMP%], .cdk-drag-placeholder[_ngcontent-%COMP%]   .left-action[_ngcontent-%COMP%]{height:auto;width:40px;align-self:baseline;border-top-left-radius:8px;border-bottom-left-radius:8px}.category-item[_ngcontent-%COMP%]   .left-action[_ngcontent-%COMP%]   .transparent-button[_ngcontent-%COMP%], .cdk-drag-placeholder[_ngcontent-%COMP%]   .left-action[_ngcontent-%COMP%]   .transparent-button[_ngcontent-%COMP%]{background-color:transparent;box-shadow:none;width:40px;padding:0;margin:0;min-width:auto;color:#fff}.category-item[_ngcontent-%COMP%]   .left-action[_ngcontent-%COMP%]   .transparent-button[_ngcontent-%COMP%]   .drag-icon[_ngcontent-%COMP%], .cdk-drag-placeholder[_ngcontent-%COMP%]   .left-action[_ngcontent-%COMP%]   .transparent-button[_ngcontent-%COMP%]   .drag-icon[_ngcontent-%COMP%]{color:#171f26;cursor:move;margin-right:15px}.category-item[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%], .cdk-drag-placeholder[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%]{width:calc(100% - 40px);-ms-grid-row-align:center;align-self:center}.category-item[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%]   .child-list[_ngcontent-%COMP%], .cdk-drag-placeholder[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%]   .child-list[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;background-color:transparent;width:103%;position:relative;margin-left:-1.5%}.category-item[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%], .cdk-drag-placeholder[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:baseline;border:transparent!important}.category-item[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]   .mat-form-field-wrapper[_ngcontent-%COMP%]   .mat-form-field-flex[_ngcontent-%COMP%]   .mat-form-field-outline[_ngcontent-%COMP%], .category-item[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%]   .mat-form-field-outline[_ngcontent-%COMP%], .cdk-drag-placeholder[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]   .mat-form-field-wrapper[_ngcontent-%COMP%]   .mat-form-field-flex[_ngcontent-%COMP%]   .mat-form-field-outline[_ngcontent-%COMP%], .cdk-drag-placeholder[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%]   .mat-form-field-outline[_ngcontent-%COMP%]{color:transparent!important}.field-box[_ngcontent-%COMP%]{margin-bottom:15px;display:flex;align-items:center}.cdk-drag-preview[_ngcontent-%COMP%]{box-sizing:border-box;border-radius:4px;opacity:1}.cdk-drag-preview[_ngcontent-%COMP%]   .expand-button[_ngcontent-%COMP%]{color:#5a607f!important;background-color:transparent!important;box-shadow:none!important;margin-right:6px!important}.cdk-drag-placeholder[_ngcontent-%COMP%]{opacity:0}.cdk-drag-animating[_ngcontent-%COMP%], .example-list.cdk-drop-list-dragging[_ngcontent-%COMP%]   .category-item[_ngcontent-%COMP%]:not(.cdk-drag-placeholder){transition:transform 250ms cubic-bezier(0,0,.2,1)}.child[_ngcontent-%COMP%]{margin-left:0}.child-content[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;margin-bottom:30px}.sub-category-forms[_ngcontent-%COMP%]{margin-bottom:0!important;margin-top:10px!important}.category[_ngcontent-%COMP%]{display:flex;flex-direction:row;width:100vw;height:100%}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]{width:250px;background-color:#fff;margin:10px 20px;border-radius:5px;height:100%}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:25px;margin:10px;padding-bottom:5px;font-family:\"Nexa Text\";display:flex;align-items:center;justify-content:center}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{text-overflow:ellipsis;white-space:nowrap;overflow:hidden;font-family:Nexa;font-weight:700;font-size:24px;line-height:110%;text-align:center;color:#242731;text-transform:capitalize}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin-left:15px;cursor:pointer}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]{font-weight:600;font-size:15px;list-style-position:inside;padding-left:0}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:5px;margin:5px auto;cursor:pointer;text-align:left;font:12px/19px Nexa Text;letter-spacing:0;color:#535760}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]{padding-left:0;margin-left:0}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.li-title[_ngcontent-%COMP%]{text-align:center;list-style:none;font-family:Nexa;font-weight:700;font-size:18px;line-height:24px;text-transform:capitalize;height:48px}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.li-title[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:140px;outline:0;border:1px dashed grey}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.li-title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:inline-flex;align-items:center}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.li-title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin-left:10px;display:none}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.li-title.active[_ngcontent-%COMP%], .category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.li-title[_ngcontent-%COMP%]:hover{display:flex;flex-direction:row;justify-content:center;align-items:center;position:static;background:rgba(84,60,182,.5);flex:none;color:#fff}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.li-title.active[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%], .category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.li-title[_ngcontent-%COMP%]:hover   mat-icon[_ngcontent-%COMP%]{display:initial!important}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.sub-title[_ngcontent-%COMP%]{list-style:none;padding-left:20px}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.sub-title.active[_ngcontent-%COMP%], .category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.sub-title.active[_ngcontent-%COMP%]::marker, .category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.sub-title[_ngcontent-%COMP%]:hover{font-weight:600;background:no-repeat padding-box #e5e8ee;border-radius:5px}.category[_ngcontent-%COMP%]   .fields[_ngcontent-%COMP%]{width:100%;overflow:hidden;overflow-x:hidden;position:relative;padding-top:10px;height:calc(100% - 10px)}.category[_ngcontent-%COMP%]   .fields[_ngcontent-%COMP%]   .fields-inner[_ngcontent-%COMP%]{max-height:100%;height:100%;width:100%;overflow:auto}.category[_ngcontent-%COMP%]   .fields[_ngcontent-%COMP%]   .add-category-button[_ngcontent-%COMP%]{position:relative!important;width:calc(100% - 40px)!important;padding:20px 0}.category[_ngcontent-%COMP%]   .fields[_ngcontent-%COMP%]   .add-category-button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin-left:10px}.category[_ngcontent-%COMP%]   .fields[_ngcontent-%COMP%]   .add-step[_ngcontent-%COMP%]{bottom:0!important;top:0!important}.category[_ngcontent-%COMP%]   .disabled[_ngcontent-%COMP%]{background-color:#f4f7f9!important}.category[_ngcontent-%COMP%]   .expand-button[_ngcontent-%COMP%]{color:#5a607f!important;background-color:transparent!important;box-shadow:none!important;margin-right:6px!important}.category[_ngcontent-%COMP%]   .expand-button[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%]{font-size:40px}.category[_ngcontent-%COMP%]   .transparent-button[_ngcontent-%COMP%]{background-color:transparent;box-shadow:none;width:40px;padding:0;margin:0;margin-left:0!important;min-width:auto;color:#fff}.add-button-sub-category[_ngcontent-%COMP%]{width:93%;position:absolute;left:3%;bottom:-13px}.add-button-sub-category[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{width:100%}.add-button-container[_ngcontent-%COMP%]{background:no-repeat padding-box #fff;border-radius:8px;margin-top:10px;padding:10px 0;display:flex;justify-content:center;align-items:center;width:100%;margin-bottom:22px;position:absolute;left:0;top:100%}.add-button-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{display:flex;align-items:center;background-color:transparent;border:none;cursor:pointer;font:17px/26px Nexa Text;letter-spacing:0;color:#000;box-shadow:none}.add-button-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{width:100%}.add-category[_ngcontent-%COMP%]{background-color:#fcfcfe;border-radius:5px;margin-left:10px;margin-bottom:10px;font:bold 12px/19px Nexa Text;letter-spacing:0;color:#c2c8d5;width:92%}.cdk-drag[_ngcontent-%COMP%]{width:100%;position:relative}.cdk-drag[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]{display:flex;height:100%;margin:0;width:100%}.cdk-drag[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]   .button-action[_ngcontent-%COMP%]{align-self:baseline;margin-top:0;margin-left:3px;border-bottom-left-radius:8px;border-top-left-radius:8px}.cdk-drag[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]   .button-action[_ngcontent-%COMP%]   .transparent-button[_ngcontent-%COMP%]{background-color:transparent;box-shadow:none;width:40px;padding:0;margin:0;min-width:auto;color:#fff}.cdk-drag[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]   .button-action[_ngcontent-%COMP%]   .transparent-button[_ngcontent-%COMP%]   .drag-icon[_ngcontent-%COMP%]{color:#171f26;cursor:move;margin-right:15px}.cdk-drag[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]   .child-3-background[_ngcontent-%COMP%]{background-color:#e5e8ee!important}.cdk-drag[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]   .fields-container[_ngcontent-%COMP%]{border-radius:0 8px 8px 0;background-color:#fff;width:100%;padding-left:10px;padding-right:10px;padding-top:5px;position:relative;margin-bottom:10px}.cdk-drag[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]   .fields-container[_ngcontent-%COMP%]   lib-sub-category[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;width:100%}.cdk-drag[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]   .fields-container[_ngcontent-%COMP%]   lib-sub-category[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]   .button-action[_ngcontent-%COMP%]{background-color:#039be5!important;height:100%;margin:auto 15px auto auto;display:flex}.cdk-drag[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]   .fields-container[_ngcontent-%COMP%]   lib-sub-category[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]   .button-action[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{box-shadow:none;background-color:transparent;color:#fff}.side-bar[_ngcontent-%COMP%]{display:flex;flex-direction:column}.register-button[_ngcontent-%COMP%]{background:no-repeat padding-box #171f26!important;border:2px solid #171f26!important;border-radius:7px;color:#fff!important;width:85%;margin-left:22px!important;border:none!important;padding:5px;box-shadow:0 0 0 rgba(0,0,0,.2);margin:30px 0}.live-button[_ngcontent-%COMP%]{background-color:#fff!important;color:#171f26!important;border:2px solid #171f26!important}.content-item[_ngcontent-%COMP%]{transition-property:border-image-slice border-image-source border-width;transition-timing-function:ease-in-out;transition-duration:.5s}.active-content[_ngcontent-%COMP%]{border-image-slice:1;border-width:2px;border-image-source:linear-gradient(to left,#9d107d,#4862ab)}.field-property[_ngcontent-%COMP%]{padding:11px;height:calc(100% - 22px);min-width:350px}.field-property[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-family:Nexa;font-size:20px;line-height:110%;padding-top:10px;display:flex;align-items:center;color:#242731}.field-property[_ngcontent-%COMP%]   .property-content[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:flex-start;padding:0 20px;background:#fff;border-radius:8px 8px 0 0;min-height:100%;height:auto}.field-property[_ngcontent-%COMP%]   .bloc-action[_ngcontent-%COMP%], .field-property[_ngcontent-%COMP%]   .property-content[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{text-align:center}.field-property[_ngcontent-%COMP%]   .bloc-action[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:100%;padding:6px;margin-top:10px}.field-property[_ngcontent-%COMP%]   .bloc-action[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin-left:5px}.field-property[_ngcontent-%COMP%]   .bloc-action[_ngcontent-%COMP%]   .delete-bloc[_ngcontent-%COMP%]{background:#f44336;box-shadow:0 0 0 rgba(0,0,0,.2);border-radius:7px;color:#fff}[_ngcontent-%COMP%]::-webkit-scrollbar{width:5px}[_ngcontent-%COMP%]::-webkit-scrollbar-track{box-shadow:inset 0 0 2px transparent;border-radius:10px}[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background:0 0;border-radius:10px}[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover{background:0 0}.toogle-button[_ngcontent-%COMP%]{color:#707273!important;display:flex;align-items:center;font-family:Nexa;font-style:normal;font-weight:400;font-size:18px;line-height:18px}.toogle-button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{padding-right:10px}[_nghost-%COMP%]     .category .mat-slide-toggle.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar{background-color:#039be5!important;position:relative;width:42px;height:23px;flex-shrink:0;border-radius:14px}[_nghost-%COMP%]     .category .mat-slide-toggle:not(.mat-disabled) .mat-slide-toggle-bar{background-color:#707273!important;position:relative;width:42px;height:23px;flex-shrink:0;border-radius:14px}[_nghost-%COMP%]     .category .mat-slide-toggle.mat-checked:not(.mat-disabled) .mat-slide-toggle-thumb{background-color:#fff;margin-top:4px}[_nghost-%COMP%]     .category .mat-slide-toggle:not(.mat-disabled) .mat-slide-toggle-thumb{margin-top:4px;margin-left:4px}[_nghost-%COMP%]     .category .mat-slide-toggle.draft:not(.mat-disabled) .mat-slide-toggle-bar{background-color:#707273!important}[_nghost-%COMP%]     .category .mat-slide-toggle.draft.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar{background-color:#039be5!important}.top-10[_ngcontent-%COMP%]{margin-top:10px}.bottom-10[_ngcontent-%COMP%]{margin-bottom:10px}.section-item[_ngcontent-%COMP%]{border:2px solid transparent;overflow:hidden}.section-item.active[_ngcontent-%COMP%], .section-item[_ngcontent-%COMP%]:hover{border:2px solid #242731;border-radius:8px;cursor:pointer}  .select-type-class.mat-select-disabled .mat-select-value{color:#000!important;cursor:pointer}  .fields-content .mat-radio-button.mat-accent.mat-radio-checked .mat-radio-outer-circle,   .property-content .mat-radio-button.mat-accent.mat-radio-checked .mat-radio-outer-circle{border-color:#039be5!important}  .fields-content .mat-radio-button.mat-accent .mat-radio-inner-circle,   .fields-content .mat-radio-button.mat-accent .mat-radio-ripple .mat-ripple-element:not(.mat-radio-persistent-ripple),   .fields-content .mat-radio-button.mat-accent.mat-radio-checked .mat-radio-persistent-ripple,   .fields-content .mat-radio-button.mat-accent:active .mat-radio-persistent-ripple,   .property-content .mat-radio-button.mat-accent .mat-radio-inner-circle,   .property-content .mat-radio-button.mat-accent .mat-radio-ripple .mat-ripple-element:not(.mat-radio-persistent-ripple),   .property-content .mat-radio-button.mat-accent.mat-radio-checked .mat-radio-persistent-ripple,   .property-content .mat-radio-button.mat-accent:active .mat-radio-persistent-ripple{background-color:#039be5!important}  .fields-content .mat-checkbox-checkmark-path,   .property-content .mat-checkbox-checkmark-path{stroke:#039be5 !important!important}  .fields-content .mat-checkbox-frame,   .property-content .mat-checkbox-frame{border:2px solid #039be5!important}  .fields-content .mat-checkbox-inner-container,   .property-content .mat-checkbox-inner-container{height:20px!important;width:20px!important}  .field-content .mat-form-field,   .field-content .select-content{width:100%}  .field-content .mat-form-field-infix{display:block;position:relative;flex:auto;min-width:0;width:100%!important}.setting[_ngcontent-%COMP%]{z-index:1;background-color:#d5d6d7!important;border-radius:40px;width:42px!important;height:40px!important;padding:0 10px!important;align-items:center;justify-content:center;display:none}.setting[_ngcontent-%COMP%]   .setting-icon[_ngcontent-%COMP%], .setting[_ngcontent-%COMP%]   .transparent-button[_ngcontent-%COMP%]{color:#171f26}.sub-header[_ngcontent-%COMP%]:hover   .setting[_ngcontent-%COMP%]{display:flex}.add-button-sub-category[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin:10px auto;width:100%;color:#000;box-shadow:none;background-color:#fcfcfe;padding:5px span;padding-width:100%!important}  .add-button{padding:10px 0}  .add-button span{width:100%}  .mat-button[disabled]{opacity:.5!important}"] });
        return TemplateProfileCreateComponent;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(TemplateProfileCreateComponent, [{
            type: core.Component,
            args: [{
                    selector: "onboarding-create-profile-template",
                    templateUrl: "./template-profile-create.component.html",
                    styleUrls: ["./template-profile-create.component.scss"],
                }]
        }], function () { return [{ type: forms.FormBuilder }, { type: OnboardingService }, { type: router.ActivatedRoute }, { type: router.Router }, { type: dialog.MatDialog }, { type: ngxScrollTo.ScrollToService }]; }, null); })();

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
        MaterialElevationDirective.ɵfac = function MaterialElevationDirective_Factory(t) { return new (t || MaterialElevationDirective)(core.ɵɵdirectiveInject(core.ElementRef), core.ɵɵdirectiveInject(core.Renderer2)); };
        MaterialElevationDirective.ɵdir = core.ɵɵdefineDirective({ type: MaterialElevationDirective, selectors: [["", "appMaterialElevation", ""]], hostBindings: function MaterialElevationDirective_HostBindings(rf, ctx) { if (rf & 1) {
                core.ɵɵlistener("mouseenter", function MaterialElevationDirective_mouseenter_HostBindingHandler() { return ctx.onMouseEnter(); })("mouseleave", function MaterialElevationDirective_mouseleave_HostBindingHandler() { return ctx.onMouseLeave(); });
            } }, inputs: { defaultElevation: "defaultElevation", raisedElevation: "raisedElevation" }, features: [core.ɵɵNgOnChangesFeature] });
        return MaterialElevationDirective;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(MaterialElevationDirective, [{
            type: core.Directive,
            args: [{
                    selector: '[appMaterialElevation]'
                }]
        }], function () { return [{ type: core.ElementRef }, { type: core.Renderer2 }]; }, { defaultElevation: [{
                type: core.Input
            }], raisedElevation: [{
                type: core.Input
            }], onMouseEnter: [{
                type: core.HostListener,
                args: ['mouseenter']
            }], onMouseLeave: [{
                type: core.HostListener,
                args: ['mouseleave']
            }] }); })();

    var _c0$2 = function (a0) { return [a0]; };
    function TemplateProfileListComponent_div_32_Template(rf, ctx) { if (rf & 1) {
        var _r775 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "div", 13);
        core.ɵɵelementStart(1, "div", 14);
        core.ɵɵelementStart(2, "span");
        core.ɵɵtext(3, "Live");
        core.ɵɵelementEnd();
        core.ɵɵelementStart(4, "mat-slide-toggle", 15);
        core.ɵɵlistener("ngModelChange", function TemplateProfileListComponent_div_32_Template_mat_slide_toggle_ngModelChange_4_listener($event) { core.ɵɵrestoreView(_r775); var d_r773 = ctx.$implicit; return d_r773.Status = $event; })("ngModelChange", function TemplateProfileListComponent_div_32_Template_mat_slide_toggle_ngModelChange_4_listener() { core.ɵɵrestoreView(_r775); var d_r773 = ctx.$implicit; var ctx_r776 = core.ɵɵnextContext(); return ctx_r776.onChangeStatus(d_r773, false); });
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementStart(5, "div", 16);
        core.ɵɵelementStart(6, "p", 17);
        core.ɵɵtext(7);
        core.ɵɵelementEnd();
        core.ɵɵelementStart(8, "p", 18);
        core.ɵɵtext(9);
        core.ɵɵpipe(10, "date");
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementStart(11, "div", 19);
        core.ɵɵelementStart(12, "button", 20);
        core.ɵɵlistener("click", function TemplateProfileListComponent_div_32_Template_button_click_12_listener() { core.ɵɵrestoreView(_r775); var d_r773 = ctx.$implicit; var ctx_r777 = core.ɵɵnextContext(); return ctx_r777.onEditProfil(d_r773._id); });
        core.ɵɵelementStart(13, "mat-icon");
        core.ɵɵtext(14, "edit");
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementStart(15, "button", 20);
        core.ɵɵlistener("click", function TemplateProfileListComponent_div_32_Template_button_click_15_listener() { core.ɵɵrestoreView(_r775); var d_r773 = ctx.$implicit; var ctx_r778 = core.ɵɵnextContext(); return ctx_r778.copyTemplate(d_r773); });
        core.ɵɵelementStart(16, "mat-icon");
        core.ɵɵtext(17, "filter_none");
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementStart(18, "button", 20);
        core.ɵɵlistener("click", function TemplateProfileListComponent_div_32_Template_button_click_18_listener() { core.ɵɵrestoreView(_r775); var d_r773 = ctx.$implicit; var ctx_r779 = core.ɵɵnextContext(); return ctx_r779.onDelete(d_r773._id); });
        core.ɵɵelementStart(19, "mat-icon");
        core.ɵɵtext(20, "delete");
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var d_r773 = ctx.$implicit;
        var ctx_r771 = core.ɵɵnextContext();
        core.ɵɵproperty("defaultElevation", 0);
        core.ɵɵadvance(4);
        core.ɵɵproperty("ngModel", d_r773.Status);
        core.ɵɵadvance(1);
        core.ɵɵproperty("routerLink", core.ɵɵpureFunction1(8, _c0$2, ctx_r771.service.mainPath + "/template/" + d_r773._id));
        core.ɵɵadvance(2);
        core.ɵɵtextInterpolate1(" ", d_r773.Name, "");
        core.ɵɵadvance(2);
        core.ɵɵtextInterpolate1(" ", core.ɵɵpipeBind2(10, 5, d_r773.createdAt, "dd/MM/yy"), "");
    } }
    function TemplateProfileListComponent_div_34_Template(rf, ctx) { if (rf & 1) {
        var _r782 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "div", 13);
        core.ɵɵelementStart(1, "div", 21);
        core.ɵɵelementStart(2, "span");
        core.ɵɵtext(3, "Brouillon");
        core.ɵɵelementEnd();
        core.ɵɵelementStart(4, "mat-slide-toggle", 22);
        core.ɵɵlistener("ngModelChange", function TemplateProfileListComponent_div_34_Template_mat_slide_toggle_ngModelChange_4_listener($event) { core.ɵɵrestoreView(_r782); var d_r780 = ctx.$implicit; return d_r780.Status = $event; })("ngModelChange", function TemplateProfileListComponent_div_34_Template_mat_slide_toggle_ngModelChange_4_listener() { core.ɵɵrestoreView(_r782); var d_r780 = ctx.$implicit; var ctx_r783 = core.ɵɵnextContext(); return ctx_r783.onChangeStatus(d_r780, true); });
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementStart(5, "div", 16);
        core.ɵɵelementStart(6, "p", 17);
        core.ɵɵtext(7);
        core.ɵɵelementEnd();
        core.ɵɵelementStart(8, "p", 18);
        core.ɵɵtext(9);
        core.ɵɵpipe(10, "date");
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementStart(11, "div", 19);
        core.ɵɵelementStart(12, "button", 20);
        core.ɵɵlistener("click", function TemplateProfileListComponent_div_34_Template_button_click_12_listener() { core.ɵɵrestoreView(_r782); var d_r780 = ctx.$implicit; var ctx_r784 = core.ɵɵnextContext(); return ctx_r784.onEditProfil(d_r780._id); });
        core.ɵɵelementStart(13, "mat-icon");
        core.ɵɵtext(14, "edit");
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementStart(15, "button", 20);
        core.ɵɵlistener("click", function TemplateProfileListComponent_div_34_Template_button_click_15_listener() { core.ɵɵrestoreView(_r782); var d_r780 = ctx.$implicit; var ctx_r785 = core.ɵɵnextContext(); return ctx_r785.copyTemplate(d_r780); });
        core.ɵɵelementStart(16, "mat-icon");
        core.ɵɵtext(17, "filter_none");
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementStart(18, "button", 20);
        core.ɵɵlistener("click", function TemplateProfileListComponent_div_34_Template_button_click_18_listener() { core.ɵɵrestoreView(_r782); var d_r780 = ctx.$implicit; var ctx_r786 = core.ɵɵnextContext(); return ctx_r786.onDelete(d_r780._id); });
        core.ɵɵelementStart(19, "mat-icon");
        core.ɵɵtext(20, "delete");
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var d_r780 = ctx.$implicit;
        var ctx_r772 = core.ɵɵnextContext();
        core.ɵɵproperty("defaultElevation", 0);
        core.ɵɵadvance(4);
        core.ɵɵproperty("ngModel", d_r780.Status);
        core.ɵɵadvance(1);
        core.ɵɵproperty("routerLink", core.ɵɵpureFunction1(8, _c0$2, ctx_r772.service.mainPath + "/template/" + d_r780._id));
        core.ɵɵadvance(2);
        core.ɵɵtextInterpolate1(" ", d_r780.Name, "");
        core.ɵɵadvance(2);
        core.ɵɵtextInterpolate1(" ", core.ɵɵpipeBind2(10, 5, d_r780.createdAt, "dd/MM/yy"), "");
    } }
    var TemplateProfileListComponent = /** @class */ (function () {
        function TemplateProfileListComponent(service, router, dialog) {
            var _this = this;
            this.service = service;
            this.router = router;
            this.dialog = dialog;
            this.displayedColumns = ["Name", "vcontacts", "createdAt", "updatedAt", "action"];
            this.datas = [];
            this.publishTemplate = [];
            this.draftTemplate = [];
            this.dataSource = new table.MatTableDataSource([]);
            this.defaultElevation = 2;
            this.raisedElevation = 8;
            this.currentFilter = "all";
            this.tags = [];
            this.service.templates.subscribe(function (templates) {
                if (templates && templates.length > 0) {
                    _this.datas = templates;
                }
            });
        }
        TemplateProfileListComponent.prototype.ngOnInit = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _this = this;
                return __generator(this, function (_a) {
                    setTimeout(function () { return __awaiter(_this, void 0, void 0, function () {
                        var _a;
                        return __generator(this, function (_b) {
                            switch (_b.label) {
                                case 0: return [4 /*yield*/, this.getAllProfils()];
                                case 1:
                                    _b.sent();
                                    _a = this;
                                    return [4 /*yield*/, this.service.getAllTags()];
                                case 2:
                                    _a.tags = _b.sent();
                                    return [2 /*return*/];
                            }
                        });
                    }); }, 500);
                    return [2 /*return*/];
                });
            });
        };
        TemplateProfileListComponent.prototype.onAddProfil = function () {
            this.router.navigate(["onboarding/template/0"]);
        };
        TemplateProfileListComponent.prototype.onEditProfil = function (id) {
            this.router.navigate(["onboarding/template/", id]);
        };
        TemplateProfileListComponent.prototype.onChangeStatus = function (data, Status) {
            return __awaiter(this, void 0, void 0, function () {
                var result;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.service.updateProfil(__assign(__assign({}, data), { Status: Status }))];
                        case 1:
                            result = _a.sent();
                            this.publishTemplate = this.datas.filter(function (d) { return d.Status === true; });
                            this.draftTemplate = this.datas.filter(function (d) { return d.Status === false; });
                            if (!result) return [3 /*break*/, 3];
                            return [4 /*yield*/, this.getAllProfils()];
                        case 2:
                            _a.sent();
                            return [3 /*break*/, 4];
                        case 3:
                            console.log("errror......");
                            _a.label = 4;
                        case 4: return [2 /*return*/];
                    }
                });
            });
        };
        TemplateProfileListComponent.prototype.onDelete = function (id) {
            return __awaiter(this, void 0, void 0, function () {
                var result;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!confirm("Voulez vous supprimer cette template ?")) return [3 /*break*/, 3];
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
        TemplateProfileListComponent.prototype.getAllProfils = function () {
            return __awaiter(this, void 0, void 0, function () {
                var profile;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.service.getAllProfil()];
                        case 1:
                            profile = _a.sent();
                            this.datas = profile;
                            this.publishTemplate = this.datas.filter(function (d) { return d.Status === true; });
                            this.draftTemplate = this.datas.filter(function (d) { return d.Status === false; });
                            this.publishTemplateLength = this.publishTemplate.length;
                            this.draftTemplateLength = this.draftTemplate.length;
                            return [2 /*return*/];
                    }
                });
            });
        };
        TemplateProfileListComponent.prototype.filterTemplate = function (value, name) {
            this.currentFilter = name;
            if (this.currentFilter === 'all') {
                this.publishTemplate = this.datas.filter(function (d) { return d.Status === true; });
                this.draftTemplate = this.datas.filter(function (d) { return d.Status === false; });
            }
            else if (this.currentFilter === 'publish') {
                this.publishTemplate = this.datas.filter(function (d) { return d.Status === true; });
                this.draftTemplate = [];
            }
            else if (this.currentFilter === 'draft') {
                this.publishTemplate = [];
                this.draftTemplate = this.datas.filter(function (d) { return d.Status === false; });
            }
            else if (this.currentFilter === 'date') {
                this.publishTemplate = this.datas.filter(function (d) { return d.Status === true; });
                this.draftTemplate = this.datas.filter(function (d) { return d.Status === false; });
                this.publishTemplate.sort(function (a, b) { return value === 'desc' ? (new Date(b.createdAt).getTime() > new Date(a.createdAt).getTime() ? 1 : -1) : (new Date(b.createdAt).getTime() > new Date(a.createdAt).getTime() ? -1 : 1); });
                this.draftTemplate.sort(function (a, b) { return value === 'desc' ? (new Date(b.createdAt).getTime() > new Date(a.createdAt).getTime() ? 1 : -1) : (new Date(b.createdAt).getTime() > new Date(a.createdAt).getTime() ? -1 : 1); });
            }
            else {
                this.publishTemplate = this.datas.filter(function (d) { return d.Status === true; });
                this.draftTemplate = this.datas.filter(function (d) { return d.Status === false; });
                this.publishTemplate.sort(function (a, b) { return value === 'desc' ? (b.Name.toLowerCase() > a.Name.toLowerCase() ? 1 : -1) : (b.Name.toLowerCase() > a.Name.toLowerCase() ? -1 : 1); });
                this.draftTemplate.sort(function (a, b) { return value === 'desc' ? (b.Name.toLowerCase() > a.Name.toLowerCase() ? 1 : -1) : (b.Name.toLowerCase() > a.Name.toLowerCase() ? -1 : 1); });
            }
        };
        TemplateProfileListComponent.prototype.copyTemplate = function (data) {
            return __awaiter(this, void 0, void 0, function () {
                var _id, rest, result;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _id = data._id, rest = __rest(data, ["_id"]);
                            return [4 /*yield*/, this.service.createProfil(__assign(__assign({}, rest), { Name: data.Name + " - copie" }))];
                        case 1:
                            result = _a.sent();
                            if (!result) return [3 /*break*/, 3];
                            return [4 /*yield*/, this.getAllProfils()];
                        case 2:
                            _a.sent();
                            return [3 /*break*/, 4];
                        case 3:
                            console.log("errror......");
                            _a.label = 4;
                        case 4: return [2 /*return*/];
                    }
                });
            });
        };
        TemplateProfileListComponent.prototype.openDialog = function () {
            var _this = this;
            var dialogRef = this.dialog.open(DialogCreateTemplateComponent, {
                data: {
                    tags: this.tags,
                }
            });
            dialogRef.afterClosed().subscribe(function (current) {
                if (current) {
                    _this.service.currentTemplate.next(current);
                    _this.router.navigate([_this.service.mainPath + '/template/0']);
                }
            });
        };
        TemplateProfileListComponent.ɵfac = function TemplateProfileListComponent_Factory(t) { return new (t || TemplateProfileListComponent)(core.ɵɵdirectiveInject(OnboardingService), core.ɵɵdirectiveInject(router.Router), core.ɵɵdirectiveInject(dialog.MatDialog)); };
        TemplateProfileListComponent.ɵcmp = core.ɵɵdefineComponent({ type: TemplateProfileListComponent, selectors: [["onboarding-profile-list"]], viewQuery: function TemplateProfileListComponent_Query(rf, ctx) { if (rf & 1) {
                core.ɵɵviewQuery(paginator.MatPaginator, true);
                core.ɵɵviewQuery(sort.MatSort, true);
            } if (rf & 2) {
                var _t;
                core.ɵɵqueryRefresh(_t = core.ɵɵloadQuery()) && (ctx.paginator = _t.first);
                core.ɵɵqueryRefresh(_t = core.ɵɵloadQuery()) && (ctx.sort = _t.first);
            } }, decls: 35, vars: 15, consts: [[1, "main"], [1, "content-list"], [1, "list"], [1, "list-title"], [3, "click"], [2, "display", "flex", "align-items", "center"], [2, "display", "flex", "flex-direction", "column", "margin-left", "5px"], [2, "margin-bottom", "-3px", 3, "click"], [2, "margin-top", "-3px", 3, "click"], ["role", "button", "mat-raised-button", "", "color", "primary", 1, "add-profil", 3, "click"], [1, "live-template"], ["appMaterialElevation", "", "raisedElevation", "1", "class", "box-template", 3, "defaultElevation", 4, "ngFor", "ngForOf"], [1, "draft-template"], ["appMaterialElevation", "", "raisedElevation", "1", 1, "box-template", 3, "defaultElevation"], [1, "toogle-button"], ["color", "#6FE8D7", 3, "ngModel", "ngModelChange"], [1, "box-content", 3, "routerLink"], [1, "template-title"], [1, "template-date"], [1, "template-footer"], [1, "action-button", 2, "background-color", "transparent", 3, "click"], [1, "toogle-button", "draft"], [1, "draft", 3, "ngModel", "ngModelChange"]], template: function TemplateProfileListComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵelementStart(0, "div", 0);
                core.ɵɵelementStart(1, "div", 1);
                core.ɵɵelementStart(2, "div", 2);
                core.ɵɵelementStart(3, "div", 3);
                core.ɵɵelementStart(4, "ul");
                core.ɵɵelementStart(5, "li", 4);
                core.ɵɵlistener("click", function TemplateProfileListComponent_Template_li_click_5_listener() { return ctx.filterTemplate("", "all"); });
                core.ɵɵtext(6);
                core.ɵɵelementEnd();
                core.ɵɵelementStart(7, "li", 4);
                core.ɵɵlistener("click", function TemplateProfileListComponent_Template_li_click_7_listener() { return ctx.filterTemplate("", "publish"); });
                core.ɵɵtext(8);
                core.ɵɵelementEnd();
                core.ɵɵelementStart(9, "li", 4);
                core.ɵɵlistener("click", function TemplateProfileListComponent_Template_li_click_9_listener() { return ctx.filterTemplate("", "draft"); });
                core.ɵɵtext(10);
                core.ɵɵelementEnd();
                core.ɵɵelementStart(11, "li", 5);
                core.ɵɵelementStart(12, "span");
                core.ɵɵtext(13, "Date");
                core.ɵɵelementEnd();
                core.ɵɵelementStart(14, "span", 6);
                core.ɵɵelementStart(15, "mat-icon", 7);
                core.ɵɵlistener("click", function TemplateProfileListComponent_Template_mat_icon_click_15_listener() { return ctx.filterTemplate("asc", "date"); });
                core.ɵɵtext(16, " keyboard_arrow_up");
                core.ɵɵelementEnd();
                core.ɵɵelementStart(17, "mat-icon", 8);
                core.ɵɵlistener("click", function TemplateProfileListComponent_Template_mat_icon_click_17_listener() { return ctx.filterTemplate("desc", "date"); });
                core.ɵɵtext(18, " keyboard_arrow_down");
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
                core.ɵɵelementStart(19, "li", 5);
                core.ɵɵelementStart(20, "span");
                core.ɵɵtext(21, "Nom");
                core.ɵɵelementEnd();
                core.ɵɵelementStart(22, "span", 6);
                core.ɵɵelementStart(23, "mat-icon", 7);
                core.ɵɵlistener("click", function TemplateProfileListComponent_Template_mat_icon_click_23_listener() { return ctx.filterTemplate("asc", "name"); });
                core.ɵɵtext(24, " keyboard_arrow_up");
                core.ɵɵelementEnd();
                core.ɵɵelementStart(25, "mat-icon", 8);
                core.ɵɵlistener("click", function TemplateProfileListComponent_Template_mat_icon_click_25_listener() { return ctx.filterTemplate("desc", "name"); });
                core.ɵɵtext(26, " keyboard_arrow_down");
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
                core.ɵɵelementStart(27, "a", 9);
                core.ɵɵlistener("click", function TemplateProfileListComponent_Template_a_click_27_listener() { return ctx.openDialog(); });
                core.ɵɵtext(28, " Cr\u00E9er profil ");
                core.ɵɵelementStart(29, "mat-icon");
                core.ɵɵtext(30, "add");
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
                core.ɵɵelementStart(31, "div", 10);
                core.ɵɵtemplate(32, TemplateProfileListComponent_div_32_Template, 21, 10, "div", 11);
                core.ɵɵelementEnd();
                core.ɵɵelementStart(33, "div", 12);
                core.ɵɵtemplate(34, TemplateProfileListComponent_div_34_Template, 21, 10, "div", 11);
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
            } if (rf & 2) {
                core.ɵɵadvance(5);
                core.ɵɵclassMap(ctx.currentFilter === "all" ? "active" : "");
                core.ɵɵadvance(1);
                core.ɵɵtextInterpolate1(" Tous (", ctx.datas.length, ") ");
                core.ɵɵadvance(1);
                core.ɵɵclassMap(ctx.currentFilter === "publish" ? "active" : "");
                core.ɵɵadvance(1);
                core.ɵɵtextInterpolate1(" Publi\u00E9s (", ctx.publishTemplateLength, ") ");
                core.ɵɵadvance(1);
                core.ɵɵclassMap(ctx.currentFilter === "draft" ? "active" : "");
                core.ɵɵadvance(1);
                core.ɵɵtextInterpolate1(" Brouillons (", ctx.draftTemplateLength, ") ");
                core.ɵɵadvance(1);
                core.ɵɵclassMap(ctx.currentFilter === "date" ? "active" : "");
                core.ɵɵadvance(8);
                core.ɵɵclassMap(ctx.currentFilter === "name" ? "active" : "");
                core.ɵɵadvance(13);
                core.ɵɵproperty("ngForOf", ctx.publishTemplate);
                core.ɵɵadvance(2);
                core.ɵɵproperty("ngForOf", ctx.draftTemplate);
            } }, directives: [icon.MatIcon, button.MatAnchor, common.NgForOf, MaterialElevationDirective, slideToggle.MatSlideToggle, forms.NgControlStatus, forms.NgModel, ngxIntlTelInput.NativeElementInjectorDirective, router.RouterLink], pipes: [common.DatePipe], styles: [".main[_ngcontent-%COMP%]{background:no-repeat padding-box #f4f7f9;opacity:1;height:100%}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]{border-radius:8px;opacity:1;padding:42px 25px 42px 42px}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{text-align:left;font:bold 23px/30px Nexa Text;letter-spacing:0;color:#171f26;opacity:1;margin-bottom:0;margin-top:0}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   p.sub-title[_ngcontent-%COMP%]{margin-bottom:57px;font:20px/26px Nexa Text;letter-spacing:0;color:#171f26;width:300px}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .template-title[_ngcontent-%COMP%]{font-family:Nexa;font-style:normal;font-weight:700;font-size:24px;line-height:110%;text-align:center;color:#242731;overflow-wrap:break-word;padding:10px}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .template-date[_ngcontent-%COMP%]{font-family:Nexa;font-weight:250;font-size:14px;line-height:120%}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .list-title[_ngcontent-%COMP%]{font-family:Nexa;font-weight:700;font-size:14px;display:flex;align-items:center;justify-content:space-between;margin-bottom:30px}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .list-title[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{display:flex;align-items:center;list-style:none;padding-left:0}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .list-title[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin-right:20px;padding-bottom:10px;cursor:pointer}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .list-title[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]{border-bottom:4px solid #3c4252}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .list-title[_ngcontent-%COMP%]   .add-profil[_ngcontent-%COMP%]{margin-right:50px}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .draft-template[_ngcontent-%COMP%], .main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .live-template[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;justify-content:flex-start}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .box-template[_ngcontent-%COMP%]{width:266px;height:300px;position:relative;margin-right:50px;margin-bottom:50px;background:#fff;border-radius:8px;opacity:1;display:flex;flex-direction:column;justify-content:center;align-items:center;cursor:pointer}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .box-template[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:81px;height:81px}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .box-template[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{background:no-repeat padding-box #171f26;border-radius:7px;font-size:15px}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .box-template[_ngcontent-%COMP%]   .box-content[_ngcontent-%COMP%]{width:100%;text-align:center}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .box-template[_ngcontent-%COMP%]   .box-content[_ngcontent-%COMP%]   .picto-preview[_ngcontent-%COMP%]{width:113px;height:113px;background:no-repeat padding-box #fff;margin:auto;border-radius:113px;display:flex;align-items:center;justify-content:center}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .box-template[_ngcontent-%COMP%]   .box-content[_ngcontent-%COMP%]   .picto-preview[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:40px;color:#dce4e9}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .box-template[_ngcontent-%COMP%]   .toogle-button[_ngcontent-%COMP%]{position:absolute;right:20px;top:20px;color:#6fe8d7;display:flex;align-items:center;font-family:Nexa;font-style:normal;font-size:18px;line-height:18px}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .box-template[_ngcontent-%COMP%]   .toogle-button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{padding-right:10px}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .box-template[_ngcontent-%COMP%]   .toogle-button.draft[_ngcontent-%COMP%]{color:#f3a124}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .new-template[_ngcontent-%COMP%]{border:1px solid #dce4e9;border-radius:6px;background-color:transparent}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .add-profil[_ngcontent-%COMP%]{background-color:#171f26}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .template-footer[_ngcontent-%COMP%]{background:#543cb6;border-radius:0 0 8px 8px;width:100%;position:absolute;bottom:0;text-align:center;padding:5px 0;display:flex;justify-content:center;align-items:center}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .template-footer[_ngcontent-%COMP%]   button.action-button[_ngcontent-%COMP%]{margin:auto 5%;box-shadow:none;color:#fff;border:none;cursor:pointer}[_nghost-%COMP%]     .box-template .mat-slide-toggle.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar{background-color:#6fe8d7;position:relative;width:42px;height:23px;flex-shrink:0;border-radius:14px}[_nghost-%COMP%]     .box-template .mat-slide-toggle:not(.mat-disabled) .mat-slide-toggle-bar{background-color:#f3a124;position:relative;width:42px;height:23px;flex-shrink:0;border-radius:14px}[_nghost-%COMP%]     .box-template .mat-slide-toggle.mat-checked:not(.mat-disabled) .mat-slide-toggle-thumb{background-color:#fff;margin-top:4px}[_nghost-%COMP%]     .box-template .mat-slide-toggle:not(.mat-disabled) .mat-slide-toggle-thumb{margin-top:4px;margin-left:4px}[_nghost-%COMP%]     .box-template .mat-slide-toggle.draft:not(.mat-disabled) .mat-slide-toggle-bar{background-color:#f3a124}[_nghost-%COMP%]     .box-template .mat-slide-toggle.draft.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar{background-color:#6fe8d7}"] });
        return TemplateProfileListComponent;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(TemplateProfileListComponent, [{
            type: core.Component,
            args: [{
                    selector: "onboarding-profile-list",
                    templateUrl: "./template-profile-list.component.html",
                    styleUrls: ["./template-profile-list.component.scss"],
                }]
        }], function () { return [{ type: OnboardingService }, { type: router.Router }, { type: dialog.MatDialog }]; }, { paginator: [{
                type: core.ViewChild,
                args: [paginator.MatPaginator]
            }], sort: [{
                type: core.ViewChild,
                args: [sort.MatSort]
            }] }); })();

    var CanDeactivateGuard = /** @class */ (function () {
        function CanDeactivateGuard() {
        }
        CanDeactivateGuard.prototype.canDeactivate = function (component, route, state) {
            return component.canDeactivate ? component.canDeactivate() : true;
        };
        CanDeactivateGuard.ɵfac = function CanDeactivateGuard_Factory(t) { return new (t || CanDeactivateGuard)(); };
        CanDeactivateGuard.ɵprov = core.ɵɵdefineInjectable({ token: CanDeactivateGuard, factory: CanDeactivateGuard.ɵfac });
        return CanDeactivateGuard;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(CanDeactivateGuard, [{
            type: core.Injectable
        }], null, null); })();

    function fieldWidth(type, length, index) {
        if (type === 'textarea') {
            if (length === 1) {
                return '100%';
            }
            return '50%';
        }
        else if (type === 'toggle') {
            return '50%';
        }
        else if (type === "text" || type == 'select' || type === 'tel' || type === 'email' || type === 'password') {
            if (length < 3) {
                return '50%';
            }
            else if (length === 3) {
                return '33%';
            }
            else if (length === 4) {
                return '25%';
            }
            else if (length === 5) {
                return index <= 2 ? '33%' : '50%';
            }
            else if (length >= 6) {
                return '33%';
            }
        }
        return '100%';
    }

    var _c0$3 = function () { return { standalone: true }; };
    var _c1$2 = function () { return { display: "inine-block" }; };
    function SubOnboardingCreateComponent_div_2_Template(rf, ctx) { if (rf & 1) {
        var _r878 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "div", 8);
        core.ɵɵelementStart(1, "span");
        core.ɵɵtext(2);
        core.ɵɵelementEnd();
        core.ɵɵelementStart(3, "mat-slide-toggle", 9);
        core.ɵɵlistener("ngModelChange", function SubOnboardingCreateComponent_div_2_Template_mat_slide_toggle_ngModelChange_3_listener($event) { core.ɵɵrestoreView(_r878); var ctx_r877 = core.ɵɵnextContext(); return ctx_r877.field.defaultValue = $event; });
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r869 = core.ɵɵnextContext();
        core.ɵɵadvance(2);
        core.ɵɵtextInterpolate(ctx_r869.field.label);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngModel", ctx_r869.field.defaultValue)("ngModelOptions", core.ɵɵpureFunction0(4, _c0$3))("ngStyle", ctx_r869.field.selector && core.ɵɵpureFunction0(5, _c1$2));
    } }
    function SubOnboardingCreateComponent_div_3_mat_select_3_mat_option_1_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "mat-option", 15);
        core.ɵɵtext(1);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var select_r881 = ctx.$implicit;
        core.ɵɵproperty("value", select_r881.value);
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate1(" ", select_r881.value, "");
    } }
    function SubOnboardingCreateComponent_div_3_mat_select_3_Template(rf, ctx) { if (rf & 1) {
        var _r883 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "mat-select", 13);
        core.ɵɵlistener("ngModelChange", function SubOnboardingCreateComponent_div_3_mat_select_3_Template_mat_select_ngModelChange_0_listener($event) { core.ɵɵrestoreView(_r883); var ctx_r882 = core.ɵɵnextContext(2); return ctx_r882.field.selector.value = $event; });
        core.ɵɵtemplate(1, SubOnboardingCreateComponent_div_3_mat_select_3_mat_option_1_Template, 2, 2, "mat-option", 14);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r879 = core.ɵɵnextContext(2);
        core.ɵɵproperty("ngModel", ctx_r879.field.selector.value)("ngModelOptions", core.ɵɵpureFunction0(3, _c0$3));
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngForOf", ctx_r879.field.selector.defaultValue);
    } }
    var _c2$1 = function () { return { "display": "inine-block" }; };
    function SubOnboardingCreateComponent_div_3_Template(rf, ctx) { if (rf & 1) {
        var _r885 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "div", 10);
        core.ɵɵelementStart(1, "mat-checkbox", 11);
        core.ɵɵlistener("ngModelChange", function SubOnboardingCreateComponent_div_3_Template_mat_checkbox_ngModelChange_1_listener($event) { core.ɵɵrestoreView(_r885); var ctx_r884 = core.ɵɵnextContext(); return ctx_r884.field.value = $event; });
        core.ɵɵtext(2);
        core.ɵɵelementEnd();
        core.ɵɵtemplate(3, SubOnboardingCreateComponent_div_3_mat_select_3_Template, 2, 4, "mat-select", 12);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r870 = core.ɵɵnextContext();
        core.ɵɵadvance(1);
        core.ɵɵclassMap(ctx_r870.checkSubForm(ctx_r870.field) ? "checkbox-title-active" : "");
        core.ɵɵproperty("ngModel", ctx_r870.field.value)("required", ctx_r870.field.isMandatory)("ngModelOptions", core.ɵɵpureFunction0(8, _c0$3))("ngStyle", ctx_r870.field.selector && core.ɵɵpureFunction0(9, _c2$1));
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate1(" ", ctx_r870.field.label, " ");
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", ctx_r870.field.selector);
    } }
    function SubOnboardingCreateComponent_div_4_mat_checkbox_4_Template(rf, ctx) { if (rf & 1) {
        var _r889 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "mat-checkbox", 18);
        core.ɵɵlistener("ngModelChange", function SubOnboardingCreateComponent_div_4_mat_checkbox_4_Template_mat_checkbox_ngModelChange_0_listener($event) { core.ɵɵrestoreView(_r889); var opt_r887 = ctx.$implicit; return opt_r887.checked = $event; });
        core.ɵɵtext(1);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var opt_r887 = ctx.$implicit;
        var ctx_r886 = core.ɵɵnextContext(2);
        core.ɵɵproperty("checked", opt_r887.checked)("ngModel", opt_r887.checked)("required", ctx_r886.field.isMandatory)("ngModelOptions", core.ɵɵpureFunction0(5, _c0$3));
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate1(" ", opt_r887.value, " ");
    } }
    function SubOnboardingCreateComponent_div_4_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "div", 10);
        core.ɵɵelementStart(1, "label");
        core.ɵɵtext(2);
        core.ɵɵelementEnd();
        core.ɵɵelementStart(3, "div", 16);
        core.ɵɵtemplate(4, SubOnboardingCreateComponent_div_4_mat_checkbox_4_Template, 2, 6, "mat-checkbox", 17);
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r871 = core.ɵɵnextContext();
        core.ɵɵadvance(2);
        core.ɵɵtextInterpolate(ctx_r871.field.label);
        core.ɵɵadvance(2);
        core.ɵɵproperty("ngForOf", ctx_r871.field.defaultValue);
    } }
    function SubOnboardingCreateComponent_div_5_mat_radio_button_4_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "mat-radio-button", 15);
        core.ɵɵtext(1);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var opt_r892 = ctx.$implicit;
        core.ɵɵproperty("value", opt_r892.value);
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate1("", opt_r892.value, " ");
    } }
    function SubOnboardingCreateComponent_div_5_mat_form_field_5_Template(rf, ctx) { if (rf & 1) {
        var _r894 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "mat-form-field", 23);
        core.ɵɵelementStart(1, "mat-label");
        core.ɵɵtext(2, "Autre option");
        core.ɵɵelementEnd();
        core.ɵɵelementStart(3, "input", 24);
        core.ɵɵlistener("ngModelChange", function SubOnboardingCreateComponent_div_5_mat_form_field_5_Template_input_ngModelChange_3_listener($event) { core.ɵɵrestoreView(_r894); var ctx_r893 = core.ɵɵnextContext(2); return ctx_r893.field.otherValue = $event; });
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r891 = core.ɵɵnextContext(2);
        core.ɵɵadvance(3);
        core.ɵɵproperty("required", ctx_r891.field.isMandatory)("ngModelOptions", core.ɵɵpureFunction0(3, _c0$3))("ngModel", ctx_r891.field.otherValue);
    } }
    function SubOnboardingCreateComponent_div_5_Template(rf, ctx) { if (rf & 1) {
        var _r896 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "div", 19);
        core.ɵɵelementStart(1, "label", 20);
        core.ɵɵtext(2);
        core.ɵɵelementEnd();
        core.ɵɵelementStart(3, "mat-radio-group", 21);
        core.ɵɵlistener("ngModelChange", function SubOnboardingCreateComponent_div_5_Template_mat_radio_group_ngModelChange_3_listener($event) { core.ɵɵrestoreView(_r896); var ctx_r895 = core.ɵɵnextContext(); return ctx_r895.field.value = $event; });
        core.ɵɵtemplate(4, SubOnboardingCreateComponent_div_5_mat_radio_button_4_Template, 2, 2, "mat-radio-button", 14);
        core.ɵɵelementEnd();
        core.ɵɵtemplate(5, SubOnboardingCreateComponent_div_5_mat_form_field_5_Template, 4, 4, "mat-form-field", 22);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r872 = core.ɵɵnextContext();
        core.ɵɵadvance(2);
        core.ɵɵtextInterpolate1(" ", ctx_r872.field.label, " ");
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngModel", ctx_r872.field.value)("required", ctx_r872.field.isMandatory);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngForOf", ctx_r872.field.defaultValue);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", "autre" === ctx_r872.formatOther(ctx_r872.field.value));
    } }
    function SubOnboardingCreateComponent_div_6_mat_option_5_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "mat-option", 15);
        core.ɵɵtext(1);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var opt_r899 = ctx.$implicit;
        core.ɵɵproperty("value", opt_r899.value);
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate1(" ", opt_r899.value, "");
    } }
    function SubOnboardingCreateComponent_div_6_mat_form_field_6_Template(rf, ctx) { if (rf & 1) {
        var _r901 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "mat-form-field", 23);
        core.ɵɵelementStart(1, "mat-label");
        core.ɵɵtext(2, "Autre option");
        core.ɵɵelementEnd();
        core.ɵɵelementStart(3, "input", 24);
        core.ɵɵlistener("ngModelChange", function SubOnboardingCreateComponent_div_6_mat_form_field_6_Template_input_ngModelChange_3_listener($event) { core.ɵɵrestoreView(_r901); var ctx_r900 = core.ɵɵnextContext(2); return ctx_r900.field.otherValue = $event; });
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r898 = core.ɵɵnextContext(2);
        core.ɵɵadvance(3);
        core.ɵɵproperty("required", ctx_r898.field.isMandatory)("ngModelOptions", core.ɵɵpureFunction0(3, _c0$3))("ngModel", ctx_r898.field.otherValue);
    } }
    function SubOnboardingCreateComponent_div_6_Template(rf, ctx) { if (rf & 1) {
        var _r903 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "div", 19);
        core.ɵɵelementStart(1, "mat-form-field", 25);
        core.ɵɵelementStart(2, "mat-label");
        core.ɵɵtext(3);
        core.ɵɵelementEnd();
        core.ɵɵelementStart(4, "mat-select", 26);
        core.ɵɵlistener("ngModelChange", function SubOnboardingCreateComponent_div_6_Template_mat_select_ngModelChange_4_listener($event) { core.ɵɵrestoreView(_r903); var ctx_r902 = core.ɵɵnextContext(); return ctx_r902.field.value = $event; });
        core.ɵɵtemplate(5, SubOnboardingCreateComponent_div_6_mat_option_5_Template, 2, 2, "mat-option", 14);
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵtemplate(6, SubOnboardingCreateComponent_div_6_mat_form_field_6_Template, 4, 4, "mat-form-field", 22);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r873 = core.ɵɵnextContext();
        core.ɵɵadvance(3);
        core.ɵɵtextInterpolate1(" ", ctx_r873.field.label, " ");
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngModel", ctx_r873.field.value)("ngModelOptions", core.ɵɵpureFunction0(6, _c0$3))("required", ctx_r873.field.isMandatory);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngForOf", ctx_r873.field.defaultValue);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", "autre" === ctx_r873.formatOther(ctx_r873.field.value));
    } }
    function SubOnboardingCreateComponent_mat_form_field_7_Template(rf, ctx) { if (rf & 1) {
        var _r905 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "mat-form-field", 27);
        core.ɵɵelementStart(1, "mat-label");
        core.ɵɵtext(2);
        core.ɵɵelementEnd();
        core.ɵɵelementStart(3, "textarea", 28);
        core.ɵɵlistener("ngModelChange", function SubOnboardingCreateComponent_mat_form_field_7_Template_textarea_ngModelChange_3_listener($event) { core.ɵɵrestoreView(_r905); var ctx_r904 = core.ɵɵnextContext(); return ctx_r904.field.value = $event; });
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r874 = core.ɵɵnextContext();
        core.ɵɵadvance(2);
        core.ɵɵtextInterpolate(ctx_r874.field.label);
        core.ɵɵadvance(1);
        core.ɵɵproperty("required", ctx_r874.field.isMandatory)("ngModelOptions", core.ɵɵpureFunction0(4, _c0$3))("ngModel", ctx_r874.field.value);
    } }
    function SubOnboardingCreateComponent_div_8_mat_error_4_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "mat-error");
        core.ɵɵtext(1, "Le t\u00E9l\u00E9phone est invalide");
        core.ɵɵelementEnd();
    } }
    function SubOnboardingCreateComponent_div_8_Template(rf, ctx) { if (rf & 1) {
        var _r908 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "div", 29);
        core.ɵɵelementStart(1, "mat-label", 30);
        core.ɵɵtext(2);
        core.ɵɵelementEnd();
        core.ɵɵelementStart(3, "ngx-intl-tel-input", 31);
        core.ɵɵlistener("input", function SubOnboardingCreateComponent_div_8_Template_ngx_intl_tel_input_input_3_listener() { core.ɵɵrestoreView(_r908); var ctx_r907 = core.ɵɵnextContext(); return ctx_r907.checkPhone(ctx_r907.field.value); })("ngModelChange", function SubOnboardingCreateComponent_div_8_Template_ngx_intl_tel_input_ngModelChange_3_listener($event) { core.ɵɵrestoreView(_r908); var ctx_r909 = core.ɵɵnextContext(); return ctx_r909.field.value = $event; });
        core.ɵɵelementEnd();
        core.ɵɵtemplate(4, SubOnboardingCreateComponent_div_8_mat_error_4_Template, 2, 0, "mat-error", 32);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r875 = core.ɵɵnextContext();
        core.ɵɵadvance(2);
        core.ɵɵtextInterpolate(ctx_r875.field.label);
        core.ɵɵadvance(1);
        core.ɵɵproperty("cssClass", "input-phone")("preferredCountries", ctx_r875.preferredCountries)("enableAutoCountrySelect", false)("enablePlaceholder", true)("customPlaceholder", "Phone")("selectFirstCountry", false)("selectedCountryISO", ctx_r875.flag(ctx_r875.field.value))("maxLength", 15)("inputId", ctx_r875.field.key)("phoneValidation", true)("separateDialCode", ctx_r875.separateDialCode)("numberFormat", ctx_r875.PhoneNumberFormat.National)("ngModelOptions", core.ɵɵpureFunction0(16, _c0$3))("ngModel", ctx_r875.field.value);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", ctx_r875.invalideValue);
    } }
    function SubOnboardingCreateComponent_mat_form_field_9_Template(rf, ctx) { if (rf & 1) {
        var _r911 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "mat-form-field", 33);
        core.ɵɵelementStart(1, "mat-label");
        core.ɵɵtext(2);
        core.ɵɵelementEnd();
        core.ɵɵelementStart(3, "input", 34);
        core.ɵɵlistener("ngModelChange", function SubOnboardingCreateComponent_mat_form_field_9_Template_input_ngModelChange_3_listener($event) { core.ɵɵrestoreView(_r911); var ctx_r910 = core.ɵɵnextContext(); return ctx_r910.field.value = $event; });
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r876 = core.ɵɵnextContext();
        core.ɵɵadvance(2);
        core.ɵɵtextInterpolate(ctx_r876.field.label);
        core.ɵɵadvance(1);
        core.ɵɵproperty("type", ctx_r876.field.type)("required", ctx_r876.field.isMandatory)("ngModelOptions", core.ɵɵpureFunction0(5, _c0$3))("ngModel", ctx_r876.field.value);
    } }
    var _c3$1 = [[["", 8, "child"]]];
    var _c4 = [".child"];
    var SubOnboardingCreateComponent = /** @class */ (function () {
        function SubOnboardingCreateComponent() {
            var _this = this;
            this.onAddKeywordFromInput = new core.EventEmitter();
            this.onKeyPress = new core.EventEmitter();
            this.onDrop = new core.EventEmitter();
            this.onAddNewField = new core.EventEmitter();
            this.onRemoveField = new core.EventEmitter();
            this.onChangeType = new core.EventEmitter();
            this.onRemoveKeyword = new core.EventEmitter();
            this.onAddNewSubLevelField = new core.EventEmitter();
            this.onExpendMore = new core.EventEmitter();
            this.onChangeLabel = new core.EventEmitter();
            this.onCheckedChip = new core.EventEmitter();
            this.onCheckValue = new core.EventEmitter();
            this.chipControl = new forms.FormControl(new Set());
            this.preferredCountries = [ngxIntlTelInput.CountryISO.UnitedStates, ngxIntlTelInput.CountryISO.France];
            this.PhoneNumberFormat = ngxIntlTelInput.PhoneNumberFormat;
            this.separatorKeysCodes = [keycodes.ENTER, keycodes.COMMA, keycodes.SEMICOLON];
            this.invalideValue = false;
            this.currentChip = "";
            this.separateDialCode = false;
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
            var _a;
            if (other && typeof other !== 'boolean') {
                return (((_a = other) === null || _a === void 0 ? void 0 : _a.toLocaleLowerCase()) || '');
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
        SubOnboardingCreateComponent.prototype.flag = function (value) {
            var valueString = String(value);
            return valueString && libphonenumberJs.isValidPhoneNumber(valueString) ? libphonenumberJs.parsePhoneNumber(valueString).country : ngxIntlTelInput.CountryISO.France;
        };
        SubOnboardingCreateComponent.prototype.checkPhone = function (phone) {
            if (phone) {
                var regex = new RegExp(/\+(9[976]\d|8[987530]\d|6[987]\d|5[90]\d|42\d|3[875]\d|2[98654321]\d|9[8543210]|8[6421]|6[6543210]|5[87654321]|4[987654310]|3[9643210]|2[70]|7|1)\W*\d\W*\d\W*\d\W*\d\W*\d\W*\d\W*\d\W*\d\W*(\d{1,2})$/);
                this.invalideValue = !regex.test(phone['e164Number']);
                this.onCheckValue.emit(this.invalideValue);
            }
            if (phone && phone["nationalNumber"] && phone["nationalNumber"] != '') {
                var p = phone['nationalNumber'].replaceAll(' ', '');
                var newp = '';
                for (var i = 0; i < p.length; i++) {
                    if (p.split('')[i]) {
                        if (i % 2 == 0 && i > 0) {
                            newp += ' ';
                        }
                        newp += p.split('')[i];
                    }
                }
                this.field.value = phone["nationalNumber"];
            }
        };
        SubOnboardingCreateComponent.ɵfac = function SubOnboardingCreateComponent_Factory(t) { return new (t || SubOnboardingCreateComponent)(); };
        SubOnboardingCreateComponent.ɵcmp = core.ɵɵdefineComponent({ type: SubOnboardingCreateComponent, selectors: [["lib-sub-create-onboarding"]], inputs: { field: "field", length: "length", i: "i", j: "j" }, outputs: { onAddKeywordFromInput: "onAddKeywordFromInput", onKeyPress: "onKeyPress", onDrop: "onDrop", onAddNewField: "onAddNewField", onRemoveField: "onRemoveField", onChangeType: "onChangeType", onRemoveKeyword: "onRemoveKeyword", onAddNewSubLevelField: "onAddNewSubLevelField", onExpendMore: "onExpendMore", onChangeLabel: "onChangeLabel", onCheckedChip: "onCheckedChip", onCheckValue: "onCheckValue" }, ngContentSelectors: _c4, decls: 11, vars: 8, consts: [[1, "field-item"], [3, "ngSwitch"], ["class", "flex-auto field-size toggle-button", 4, "ngSwitchCase"], ["class", "flex-auto w-30", 4, "ngSwitchCase"], ["class", "flex-auto w-30 field-size", 4, "ngSwitchCase"], ["class", "form-field full-width", "appearance", "outline", 4, "ngSwitchCase"], ["class", "form-field full-width tel-input", 4, "ngSwitchCase"], ["class", "form-field field-size", "appearance", "outline", 4, "ngSwitchDefault"], [1, "flex-auto", "field-size", "toggle-button"], [1, "form-field", 3, "ngModel", "ngModelOptions", "ngStyle", "ngModelChange"], [1, "flex-auto", "w-30"], [1, "form-field", 2, "margin-right", "10px", 3, "ngModel", "required", "ngModelOptions", "ngStyle", "ngModelChange"], ["placeholder", "Company", "required", "", "style", "display: inline-block; width: 50%;", 3, "ngModel", "ngModelOptions", "ngModelChange", 4, "ngIf"], ["placeholder", "Company", "required", "", 2, "display", "inline-block", "width", "50%", 3, "ngModel", "ngModelOptions", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], [1, "onboarding-select", 2, "margin-top", "20px"], ["class", "form-field", "style", "display: block; margin-bottom: 5px; margin-top: 10px;margin-right: 10px;", 3, "checked", "ngModel", "required", "ngModelOptions", "ngModelChange", 4, "ngFor", "ngForOf"], [1, "form-field", 2, "display", "block", "margin-bottom", "5px", "margin-top", "10px", "margin-right", "10px", 3, "checked", "ngModel", "required", "ngModelOptions", "ngModelChange"], [1, "flex-auto", "w-30", "field-size"], [2, "display", "block"], ["aria-label", "Select an option", 1, "form-field", "radio-group", "field-size", 3, "ngModel", "required", "ngModelChange"], ["class", "form-field field-size other-option", "appearance", "outline", 4, "ngIf"], ["appearance", "outline", 1, "form-field", "field-size", "other-option"], ["type", "text", "matInput", "", "placeholder", "", 3, "required", "ngModelOptions", "ngModel", "ngModelChange"], ["appearance", "outline", 1, "mat-select", "flex-auto", "w-30", "field-size"], [3, "ngModel", "ngModelOptions", "required", "ngModelChange"], ["appearance", "outline", 1, "form-field", "full-width"], ["type", "text", "rows", "5", "matInput", "", "placeholder", "Description...", 3, "required", "ngModelOptions", "ngModel", "ngModelChange"], [1, "form-field", "full-width", "tel-input"], [1, "tel-label"], ["id", "onboarding-phone-input", "name", "phone", 1, "phone-input-profile", 3, "cssClass", "preferredCountries", "enableAutoCountrySelect", "enablePlaceholder", "customPlaceholder", "selectFirstCountry", "selectedCountryISO", "maxLength", "inputId", "phoneValidation", "separateDialCode", "numberFormat", "ngModelOptions", "ngModel", "input", "ngModelChange"], [4, "ngIf"], ["appearance", "outline", 1, "form-field", "field-size"], ["matInput", "", "placeholder", "", 3, "type", "required", "ngModelOptions", "ngModel", "ngModelChange"]], template: function SubOnboardingCreateComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵprojectionDef(_c3$1);
                core.ɵɵelementStart(0, "div", 0);
                core.ɵɵelementContainerStart(1, 1);
                core.ɵɵtemplate(2, SubOnboardingCreateComponent_div_2_Template, 4, 6, "div", 2);
                core.ɵɵtemplate(3, SubOnboardingCreateComponent_div_3_Template, 4, 10, "div", 3);
                core.ɵɵtemplate(4, SubOnboardingCreateComponent_div_4_Template, 5, 2, "div", 3);
                core.ɵɵtemplate(5, SubOnboardingCreateComponent_div_5_Template, 6, 5, "div", 4);
                core.ɵɵtemplate(6, SubOnboardingCreateComponent_div_6_Template, 7, 7, "div", 4);
                core.ɵɵtemplate(7, SubOnboardingCreateComponent_mat_form_field_7_Template, 4, 5, "mat-form-field", 5);
                core.ɵɵtemplate(8, SubOnboardingCreateComponent_div_8_Template, 5, 17, "div", 6);
                core.ɵɵtemplate(9, SubOnboardingCreateComponent_mat_form_field_9_Template, 4, 6, "mat-form-field", 7);
                core.ɵɵelementContainerEnd();
                core.ɵɵelementEnd();
                core.ɵɵprojection(10);
            } if (rf & 2) {
                core.ɵɵadvance(1);
                core.ɵɵproperty("ngSwitch", ctx.field.type);
                core.ɵɵadvance(1);
                core.ɵɵproperty("ngSwitchCase", "toggle");
                core.ɵɵadvance(1);
                core.ɵɵproperty("ngSwitchCase", "checkbox");
                core.ɵɵadvance(1);
                core.ɵɵproperty("ngSwitchCase", "checkbox_multiple");
                core.ɵɵadvance(1);
                core.ɵɵproperty("ngSwitchCase", "radio");
                core.ɵɵadvance(1);
                core.ɵɵproperty("ngSwitchCase", "select");
                core.ɵɵadvance(1);
                core.ɵɵproperty("ngSwitchCase", "textarea");
                core.ɵɵadvance(1);
                core.ɵɵproperty("ngSwitchCase", "tel");
            } }, directives: [common.NgSwitch, common.NgSwitchCase, common.NgSwitchDefault, slideToggle.MatSlideToggle, forms.NgControlStatus, forms.NgModel, ngxIntlTelInput.NativeElementInjectorDirective, common.NgStyle, checkbox.MatCheckbox, checkbox.MatCheckboxRequiredValidator, forms.RequiredValidator, common.NgIf, select.MatSelect, common.NgForOf, core$1.MatOption, radio.MatRadioGroup, radio.MatRadioButton, formField.MatFormField, formField.MatLabel, input.MatInput, forms.DefaultValueAccessor, ngxIntlTelInput.NgxIntlTelInputComponent, formField.MatError], styles: [".container[_ngcontent-%COMP%]{max-width:98%;margin:50px auto auto;padding-bottom:50px}.container[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:space-between}.input-category-name[_ngcontent-%COMP%]{font-size:15px;font-weight:500}.full-width[_ngcontent-%COMP%]{width:100%}.field-item[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;width:100%;flex-wrap:wrap;position:relative}.field-item[_ngcontent-%COMP%]   .button-action[_ngcontent-%COMP%]{background-color:#6fe8d7;height:100%;margin:auto 15px auto auto;display:flex}.field-item[_ngcontent-%COMP%]   .button-action[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{box-shadow:none;background-color:transparent;color:#fff}.field-action[_ngcontent-%COMP%]{width:10%}.field-size[_ngcontent-%COMP%]   mat-checkbox[_ngcontent-%COMP%]{margin:20px}hr[_ngcontent-%COMP%]{margin:50px 0}  .mat-form-field-appearance-fill .mat-form-field-flex{background-color:#fff}.category-action[_ngcontent-%COMP%]{display:flex;width:100%}.delete-field[_ngcontent-%COMP%]{margin:auto 2%}.radio-group[_ngcontent-%COMP%]   .mat-radio-button[_ngcontent-%COMP%]{margin-right:10px}.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary[_ngcontent-%COMP%]{background-color:#3f51b5;color:#fff;min-height:20px;font-size:10px}.move-icons[_ngcontent-%COMP%]{cursor:move}.category-item[_ngcontent-%COMP%]{display:flex;align-items:baseline;width:100%;border:1px solid #dce4e9;border-radius:8px}  .readonly.mat-form-field-appearance-outline .mat-form-field-outline{color:transparent!important}.field-content[_ngcontent-%COMP%]{width:100%}.cdk-drag-preview[_ngcontent-%COMP%]{box-sizing:border-box;border-radius:4px;box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.cdk-drag-placeholder[_ngcontent-%COMP%]{opacity:0}.cdk-drag-animating[_ngcontent-%COMP%], .example-list.cdk-drop-list-dragging[_ngcontent-%COMP%]   .category-item[_ngcontent-%COMP%]:not(.cdk-drag-placeholder){transition:transform 250ms cubic-bezier(0,0,.2,1)}.add-button-container[_ngcontent-%COMP%]{background:no-repeat padding-box #fff;border:1px dashed #dce4e9;border-radius:8px;margin-top:10px;padding:10px;display:flex;justify-content:center;align-items:center;width:98%;margin-left:0;margin-bottom:22px}.add-button-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{display:flex;align-items:center;background-color:transparent;border:none;cursor:pointer;font:17px/26px Nexa Text;letter-spacing:0;color:#c2c8d5;box-shadow:none}.expand-button[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%]{font-size:48px;margin-top:-20px;margin-right:15px}.transparent-button[_ngcontent-%COMP%]{background-color:transparent!important;box-shadow:none!important;width:40px!important;padding:0!important;margin:0!important;min-width:auto!important}.expand-button[_ngcontent-%COMP%]{color:#5a607f!important;background-color:transparent!important;box-shadow:none!important}.checkbox-title-active[_ngcontent-%COMP%]{font-weight:700}.other-option[_ngcontent-%COMP%]{margin-left:10px}.flex-auto[_ngcontent-%COMP%]{width:100%}  .country-dropdown{min-width:unset!important}  .tel-input{position:relative}  .tel-input .tel-label{font-size:12px;color:rgba(0,0,0,.6);position:absolute;z-index:1;background-color:#fff;padding:0 2px;left:8px;top:-3px}  .phone-input-profile{padding-bottom:0;padding-top:0;display:block!important;max-width:100%;font:14px/20px \"Nexa Text\"!important;width:100%}  .phone-input-profile .iti{width:100%!important}  .phone-input-profile .iti input[type=tel]{margin-top:4px!important}  .phone-input-profile input{outline:0;padding:17px;border-radius:5px;border-width:1px;width:100%;border:1px solid rgba(0,0,0,.12)}.toggle-button[_ngcontent-%COMP%]{padding-top:15px;display:flex;align-items:center}.toggle-button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin-right:10px}.onboarding-select[_ngcontent-%COMP%]{display:-ms-grid;display:grid;-ms-grid-columns:(1fr)[6];grid-template-columns:repeat(6,1fr)}"] });
        return SubOnboardingCreateComponent;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(SubOnboardingCreateComponent, [{
            type: core.Component,
            args: [{
                    selector: 'lib-sub-create-onboarding',
                    templateUrl: './sub-onboarding-create.component.html',
                    styleUrls: ['./sub-onboarding-create.component.scss']
                }]
        }], function () { return []; }, { field: [{
                type: core.Input
            }], length: [{
                type: core.Input
            }], i: [{
                type: core.Input
            }], j: [{
                type: core.Input
            }], onAddKeywordFromInput: [{
                type: core.Output
            }], onKeyPress: [{
                type: core.Output
            }], onDrop: [{
                type: core.Output
            }], onAddNewField: [{
                type: core.Output
            }], onRemoveField: [{
                type: core.Output
            }], onChangeType: [{
                type: core.Output
            }], onRemoveKeyword: [{
                type: core.Output
            }], onAddNewSubLevelField: [{
                type: core.Output
            }], onExpendMore: [{
                type: core.Output
            }], onChangeLabel: [{
                type: core.Output
            }], onCheckedChip: [{
                type: core.Output
            }], onCheckValue: [{
                type: core.Output
            }] }); })();

    function OnboardingDetailComponent_div_0_li_22_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "li", 19);
        core.ɵɵelementStart(1, "a");
        core.ɵɵtext(2);
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var category_r937 = ctx.$implicit;
        var i_r938 = ctx.index;
        core.ɵɵclassMap(i_r938 === 0 ? "active" : "");
        core.ɵɵproperty("ngxScrollTo", "#" + category_r937.name)("id", category_r937.name + "x");
        core.ɵɵadvance(2);
        core.ɵɵtextInterpolate(category_r937.name);
    } }
    function OnboardingDetailComponent_div_0_section_24_div_9_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "div", 28);
        core.ɵɵelementStart(1, "span", 29);
        core.ɵɵtext(2);
        core.ɵɵelementEnd();
        core.ɵɵelement(3, "mat-progress-bar", 30);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var category_r939 = core.ɵɵnextContext().$implicit;
        var ctx_r941 = core.ɵɵnextContext(2);
        core.ɵɵadvance(2);
        core.ɵɵtextInterpolate1("", ctx_r941.progress(category_r939 == null ? null : category_r939.fieldCompleted, category_r939 == null ? null : category_r939.fieldLength), "% Termin\u00E9");
        core.ɵɵadvance(1);
        core.ɵɵproperty("value", ctx_r941.progress(category_r939 == null ? null : category_r939.fieldCompleted, category_r939 == null ? null : category_r939.fieldLength));
    } }
    function OnboardingDetailComponent_div_0_section_24_div_10_ng_container_1_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainerStart(0);
        core.ɵɵelementStart(1, "p", 32);
        core.ɵɵtext(2);
        core.ɵɵelementEnd();
        core.ɵɵelementStart(3, "h4");
        core.ɵɵtext(4);
        core.ɵɵelementEnd();
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var forms_r944 = core.ɵɵnextContext().$implicit;
        var ctx_r945 = core.ɵɵnextContext(3);
        core.ɵɵadvance(2);
        core.ɵɵtextInterpolate(forms_r944.label);
        core.ɵɵadvance(2);
        core.ɵɵtextInterpolate1("", ctx_r945.onFormatDisplayValue(forms_r944.value), " ");
    } }
    function OnboardingDetailComponent_div_0_section_24_div_10_ng_container_2_div_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainerStart(0);
        core.ɵɵelementStart(1, "p", 32);
        core.ɵɵtext(2);
        core.ɵɵelementEnd();
        core.ɵɵelementStart(3, "h4");
        core.ɵɵtext(4);
        core.ɵɵelementEnd();
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var sub_r949 = core.ɵɵnextContext().$implicit;
        var ctx_r950 = core.ɵɵnextContext(5);
        core.ɵɵadvance(2);
        core.ɵɵtextInterpolate(sub_r949.label);
        core.ɵɵadvance(2);
        core.ɵɵtextInterpolate(ctx_r950.onFormatDisplayValue(sub_r949.value));
    } }
    function OnboardingDetailComponent_div_0_section_24_div_10_ng_container_2_div_3_ng_container_2_div_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainerStart(0);
        core.ɵɵelementStart(1, "p", 32);
        core.ɵɵtext(2);
        core.ɵɵelementEnd();
        core.ɵɵelementStart(3, "h4");
        core.ɵɵtext(4);
        core.ɵɵelementEnd();
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var child_r954 = core.ɵɵnextContext().$implicit;
        var ctx_r955 = core.ɵɵnextContext(7);
        core.ɵɵadvance(2);
        core.ɵɵtextInterpolate(child_r954.label);
        core.ɵɵadvance(2);
        core.ɵɵtextInterpolate(ctx_r955.onFormatDisplayValue(child_r954.value));
    } }
    function OnboardingDetailComponent_div_0_section_24_div_10_ng_container_2_div_3_ng_container_2_div_3_ng_container_2_div_3_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "div", 31);
        core.ɵɵelementStart(1, "p", 32);
        core.ɵɵtext(2);
        core.ɵɵelementEnd();
        core.ɵɵelementStart(3, "h4");
        core.ɵɵtext(4);
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var c2_r959 = ctx.$implicit;
        var ctx_r958 = core.ɵɵnextContext(9);
        core.ɵɵadvance(2);
        core.ɵɵtextInterpolate(c2_r959.label);
        core.ɵɵadvance(2);
        core.ɵɵtextInterpolate(ctx_r958.onFormatDisplayValue(c2_r959.value));
    } }
    function OnboardingDetailComponent_div_0_section_24_div_10_ng_container_2_div_3_ng_container_2_div_3_ng_container_2_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainerStart(0);
        core.ɵɵelementStart(1, "h3");
        core.ɵɵtext(2);
        core.ɵɵelementEnd();
        core.ɵɵtemplate(3, OnboardingDetailComponent_div_0_section_24_div_10_ng_container_2_div_3_ng_container_2_div_3_ng_container_2_div_3_Template, 5, 2, "div", 27);
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var child_r954 = core.ɵɵnextContext().$implicit;
        core.ɵɵadvance(2);
        core.ɵɵtextInterpolate(child_r954.label);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngForOf", child_r954.forms);
    } }
    function OnboardingDetailComponent_div_0_section_24_div_10_ng_container_2_div_3_ng_container_2_div_3_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "div", 31);
        core.ɵɵtemplate(1, OnboardingDetailComponent_div_0_section_24_div_10_ng_container_2_div_3_ng_container_2_div_3_ng_container_1_Template, 5, 2, "ng-container", 17);
        core.ɵɵtemplate(2, OnboardingDetailComponent_div_0_section_24_div_10_ng_container_2_div_3_ng_container_2_div_3_ng_container_2_Template, 4, 2, "ng-container", 17);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var child_r954 = ctx.$implicit;
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", !child_r954.forms);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", child_r954.forms);
    } }
    function OnboardingDetailComponent_div_0_section_24_div_10_ng_container_2_div_3_ng_container_2_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainerStart(0);
        core.ɵɵelementStart(1, "h3");
        core.ɵɵtext(2);
        core.ɵɵelementEnd();
        core.ɵɵtemplate(3, OnboardingDetailComponent_div_0_section_24_div_10_ng_container_2_div_3_ng_container_2_div_3_Template, 3, 2, "div", 27);
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var sub_r949 = core.ɵɵnextContext().$implicit;
        core.ɵɵadvance(2);
        core.ɵɵtextInterpolate(sub_r949.label);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngForOf", sub_r949.forms);
    } }
    function OnboardingDetailComponent_div_0_section_24_div_10_ng_container_2_div_3_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "div", 31);
        core.ɵɵtemplate(1, OnboardingDetailComponent_div_0_section_24_div_10_ng_container_2_div_3_ng_container_1_Template, 5, 2, "ng-container", 17);
        core.ɵɵtemplate(2, OnboardingDetailComponent_div_0_section_24_div_10_ng_container_2_div_3_ng_container_2_Template, 4, 2, "ng-container", 17);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var sub_r949 = ctx.$implicit;
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", !sub_r949.forms);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", sub_r949.forms);
    } }
    function OnboardingDetailComponent_div_0_section_24_div_10_ng_container_2_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainerStart(0);
        core.ɵɵelementStart(1, "h3");
        core.ɵɵtext(2);
        core.ɵɵelementEnd();
        core.ɵɵtemplate(3, OnboardingDetailComponent_div_0_section_24_div_10_ng_container_2_div_3_Template, 3, 2, "div", 27);
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var forms_r944 = core.ɵɵnextContext().$implicit;
        core.ɵɵadvance(2);
        core.ɵɵtextInterpolate(forms_r944.label);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngForOf", forms_r944.forms);
    } }
    function OnboardingDetailComponent_div_0_section_24_div_10_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "div", 31);
        core.ɵɵtemplate(1, OnboardingDetailComponent_div_0_section_24_div_10_ng_container_1_Template, 5, 2, "ng-container", 17);
        core.ɵɵtemplate(2, OnboardingDetailComponent_div_0_section_24_div_10_ng_container_2_Template, 4, 2, "ng-container", 17);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var forms_r944 = ctx.$implicit;
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", !forms_r944.forms);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", forms_r944.forms);
    } }
    function OnboardingDetailComponent_div_0_section_24_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "section", 20);
        core.ɵɵelementStart(1, "div", 21);
        core.ɵɵelementStart(2, "div", 22);
        core.ɵɵelementStart(3, "div", 23);
        core.ɵɵelementStart(4, "h2");
        core.ɵɵtext(5);
        core.ɵɵelementEnd();
        core.ɵɵelementStart(6, "p", 24);
        core.ɵɵtext(7);
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementStart(8, "div", 25);
        core.ɵɵtemplate(9, OnboardingDetailComponent_div_0_section_24_div_9_Template, 4, 2, "div", 26);
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵtemplate(10, OnboardingDetailComponent_div_0_section_24_div_10_Template, 3, 2, "div", 27);
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var category_r939 = ctx.$implicit;
        var ctx_r934 = core.ɵɵnextContext(2);
        core.ɵɵproperty("id", category_r939.name);
        core.ɵɵadvance(5);
        core.ɵɵtextInterpolate(category_r939.name);
        core.ɵɵadvance(2);
        core.ɵɵtextInterpolate1(" Listes des informations n\u00E9cessaires pour la cr\u00E9ation de ", ctx_r934.catNameStart(category_r939.name) ? "l'" + category_r939.name : category_r939.name, " ");
        core.ɵɵadvance(2);
        core.ɵɵproperty("ngIf", (category_r939 == null ? null : category_r939.fieldCompleted) < (category_r939 == null ? null : category_r939.fieldLength));
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngForOf", category_r939.forms);
    } }
    function OnboardingDetailComponent_div_0_ng_container_32_div_1_Template(rf, ctx) { if (rf & 1) {
        var _r966 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "div", 34);
        core.ɵɵelementStart(1, "p", 35);
        core.ɵɵtext(2);
        core.ɵɵpipe(3, "date");
        core.ɵɵelementEnd();
        core.ɵɵelementStart(4, "div", 36);
        core.ɵɵelementStart(5, "h3");
        core.ɵɵtext(6);
        core.ɵɵelementEnd();
        core.ɵɵelementStart(7, "button", 37);
        core.ɵɵlistener("click", function OnboardingDetailComponent_div_0_ng_container_32_div_1_Template_button_click_7_listener() { core.ɵɵrestoreView(_r966); var ticket_r964 = ctx.$implicit; var ctx_r965 = core.ɵɵnextContext(3); return ctx_r965.onViewTicket(ticket_r964.CaseNumber); });
        core.ɵɵtext(8);
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementStart(9, "p", 38);
        core.ɵɵtext(10);
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ticket_r964 = ctx.$implicit;
        core.ɵɵadvance(2);
        core.ɵɵtextInterpolate(core.ɵɵpipeBind2(3, 4, ticket_r964.CreatedDate, "dd/MM/yy"));
        core.ɵɵadvance(4);
        core.ɵɵtextInterpolate(ticket_r964.Subject);
        core.ɵɵadvance(2);
        core.ɵɵtextInterpolate(ticket_r964.Status);
        core.ɵɵadvance(2);
        core.ɵɵtextInterpolate(ticket_r964.Description);
    } }
    function OnboardingDetailComponent_div_0_ng_container_32_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainerStart(0);
        core.ɵɵtemplate(1, OnboardingDetailComponent_div_0_ng_container_32_div_1_Template, 11, 7, "div", 33);
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var ctx_r935 = core.ɵɵnextContext(2);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngForOf", ctx_r935.detailView.tickets);
    } }
    function OnboardingDetailComponent_div_0_div_33_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "div", 34);
        core.ɵɵelementStart(1, "p", 38);
        core.ɵɵtext(2, "\"Aucun tickets\"");
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } }
    function OnboardingDetailComponent_div_0_Template(rf, ctx) { if (rf & 1) {
        var _r968 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "div", 1);
        core.ɵɵelementStart(1, "h1", 2);
        core.ɵɵelementStart(2, "p");
        core.ɵɵtext(3);
        core.ɵɵelementEnd();
        core.ɵɵelementStart(4, "mat-icon", 3);
        core.ɵɵlistener("click", function OnboardingDetailComponent_div_0_Template_mat_icon_click_4_listener() { core.ɵɵrestoreView(_r968); var ctx_r967 = core.ɵɵnextContext(); return ctx_r967.onEdit(); });
        core.ɵɵtext(5, "edit");
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementStart(6, "div", 4);
        core.ɵɵelementStart(7, "div", 5);
        core.ɵɵelementStart(8, "div", 6);
        core.ɵɵelementStart(9, "div", 7);
        core.ɵɵelementStart(10, "h2");
        core.ɵɵtext(11);
        core.ɵɵelementEnd();
        core.ɵɵelementStart(12, "p");
        core.ɵɵtext(13);
        core.ɵɵpipe(14, "date");
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementStart(15, "div", 8);
        core.ɵɵelementStart(16, "p");
        core.ɵɵtext(17);
        core.ɵɵelementEnd();
        core.ɵɵelementStart(18, "p");
        core.ɵɵtext(19);
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementStart(20, "div", 9);
        core.ɵɵelementStart(21, "ul");
        core.ɵɵtemplate(22, OnboardingDetailComponent_div_0_li_22_Template, 3, 5, "li", 10);
        core.ɵɵelementEnd();
        core.ɵɵelementStart(23, "div", 11);
        core.ɵɵlistener("scroll", function OnboardingDetailComponent_div_0_Template_div_scroll_23_listener($event) { core.ɵɵrestoreView(_r968); var ctx_r969 = core.ɵɵnextContext(); return ctx_r969.onScroll($event); });
        core.ɵɵtemplate(24, OnboardingDetailComponent_div_0_section_24_Template, 11, 5, "section", 12);
        core.ɵɵelementStart(25, "section", 13);
        core.ɵɵelement(26, "div", 14);
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementStart(27, "div", 15);
        core.ɵɵelementStart(28, "h2");
        core.ɵɵtext(29, "Tickets li\u00E9s \u00E0 votre demande");
        core.ɵɵelementEnd();
        core.ɵɵelementStart(30, "p", 16);
        core.ɵɵtext(31, "Vous retrouverez ici tous les tickets cr\u00E9\u00E9s lors de la cr\u00E9ation de votre fiche d\u2019int\u00E9gration.");
        core.ɵɵelementEnd();
        core.ɵɵtemplate(32, OnboardingDetailComponent_div_0_ng_container_32_Template, 2, 1, "ng-container", 17);
        core.ɵɵtemplate(33, OnboardingDetailComponent_div_0_div_33_Template, 3, 0, "div", 18);
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r932 = core.ɵɵnextContext();
        core.ɵɵadvance(3);
        core.ɵɵtextInterpolate1("Int\u00E9gration profil ", ctx_r932.detailView == null ? null : ctx_r932.detailView.Name, "");
        core.ɵɵadvance(8);
        core.ɵɵtextInterpolate2("", ctx_r932.detailView.user.FirstName, " ", ctx_r932.detailView.user.LastName, "");
        core.ɵɵadvance(2);
        core.ɵɵtextInterpolate(core.ɵɵpipeBind2(14, 10, ctx_r932.detailView.createdAt, "dd/MM/yy"));
        core.ɵɵadvance(4);
        core.ɵɵtextInterpolate(ctx_r932.detailView == null ? null : ctx_r932.detailView.user == null ? null : ctx_r932.detailView.user.Phone == null ? null : ctx_r932.detailView.user.Phone.internationalNumber);
        core.ɵɵadvance(2);
        core.ɵɵtextInterpolate(ctx_r932.detailView.user.Email);
        core.ɵɵadvance(3);
        core.ɵɵproperty("ngForOf", ctx_r932.detailView.categories);
        core.ɵɵadvance(2);
        core.ɵɵproperty("ngForOf", ctx_r932.detailView.categories);
        core.ɵɵadvance(8);
        core.ɵɵproperty("ngIf", ctx_r932.detailView.tickets && ctx_r932.detailView.tickets.length > 0);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", !ctx_r932.detailView.tickets);
    } }
    var OnboardingDetailComponent = /** @class */ (function () {
        function OnboardingDetailComponent(router, service) {
            this.router = router;
            this.service = service;
            this.onShowMode = new core.EventEmitter(true);
        }
        OnboardingDetailComponent.prototype.ngOnInit = function () { };
        OnboardingDetailComponent.prototype.onScroll = function (event) {
            var sections = document.querySelectorAll("section");
            var navLi = document.querySelectorAll(".fields ul li");
            var current = "";
            sections.forEach(function (section) {
                var sectionTop = section.offsetTop;
                if (event.target.scrollTop > sectionTop - 300) {
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
        OnboardingDetailComponent.prototype.catNameStart = function (str) {
            var vowels = ['a', 'e', 'i', 'o', 'u', 'y'];
            return vowels.includes(str.substr(0, 1).toLocaleLowerCase());
        };
        OnboardingDetailComponent.prototype.onEdit = function () {
            this.onShowMode.emit(false);
        };
        OnboardingDetailComponent.prototype.progress = function (completed, length) {
            return 100 * completed / length;
        };
        OnboardingDetailComponent.prototype.onViewTicket = function (CaseNumber) {
            this.router.navigate(["ticket/" + CaseNumber]);
        };
        OnboardingDetailComponent.prototype.onFormatDisplayValue = function (value) {
            return value === true ? 'Oui' : value === false ? 'Non' : value;
        };
        OnboardingDetailComponent.ɵfac = function OnboardingDetailComponent_Factory(t) { return new (t || OnboardingDetailComponent)(core.ɵɵdirectiveInject(router.Router), core.ɵɵdirectiveInject(OnboardingService)); };
        OnboardingDetailComponent.ɵcmp = core.ɵɵdefineComponent({ type: OnboardingDetailComponent, selectors: [["lib-onboarding-detail"]], hostBindings: function OnboardingDetailComponent_HostBindings(rf, ctx) { if (rf & 1) {
                core.ɵɵlistener("scroll", function OnboardingDetailComponent_scroll_HostBindingHandler($event) { return ctx.onScroll($event); });
            } }, inputs: { detailView: "detailView" }, outputs: { onShowMode: "onShowMode" }, decls: 1, vars: 1, consts: [["class", "onboarding-detail", 4, "ngIf"], [1, "onboarding-detail"], [1, "title"], [2, "margin-left", "20px", "cursor", "pointer", 3, "click"], [1, "view-content"], [1, "left-content"], [1, "user-info"], [1, "user-name"], [1, "user-contact"], ["id", "fields", 1, "fields"], ["class", "menu-item", 3, "ngxScrollTo", "class", "id", 4, "ngFor", "ngForOf"], [1, "category-view-container", 3, "scroll"], ["class", "category-item", 3, "id", 4, "ngFor", "ngForOf"], [2, "background-color", "transparent"], [2, "height", "450px"], [1, "right-content"], [1, "subtitle"], [4, "ngIf"], ["class", "box-ticket-info", 4, "ngIf"], [1, "menu-item", 3, "ngxScrollTo", "id"], [1, "category-item", 3, "id"], [1, "category-item-inner"], [1, "category-header"], [1, "title-content"], [1, "category-description"], [1, "progress-status"], ["class", "status progress-bar", 4, "ngIf"], ["class", "category-item-forms", 4, "ngFor", "ngForOf"], [1, "status", "progress-bar"], [2, "width", "300px"], ["mode", "determinate", 3, "value"], [1, "category-item-forms"], [1, "label"], ["class", "box-ticket-info", 4, "ngFor", "ngForOf"], [1, "box-ticket-info"], [1, "date"], [1, "box-header"], ["mat-button", "", 1, "progress", 3, "click"], [1, "description"]], template: function OnboardingDetailComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵtemplate(0, OnboardingDetailComponent_div_0_Template, 34, 13, "div", 0);
            } if (rf & 2) {
                core.ɵɵproperty("ngIf", ctx.detailView);
            } }, directives: [common.NgIf, icon.MatIcon, common.NgForOf, ngxScrollTo.ScrollToDirective, progressBar.MatProgressBar, button.MatButton], pipes: [common.DatePipe], styles: [".onboarding-detail[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .onboarding-detail[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .onboarding-detail[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .onboarding-detail[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], .onboarding-detail[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%], .onboarding-detail[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]{margin:0;font-family:Nexa;font-style:normal;font-weight:700;line-height:110%;display:flex;align-items:center;color:#242731}.onboarding-detail[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0}.onboarding-detail[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:24px}.onboarding-detail[_ngcontent-%COMP%]   h1.title[_ngcontent-%COMP%]{margin-bottom:33px;margin-top:10px}.onboarding-detail[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:20px}.onboarding-detail[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:18px}.onboarding-detail[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-size:16px}.onboarding-detail[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{font-size:14px}.onboarding-detail[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]{font-size:12px}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-between;background-color:#f4f7f9}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]{width:70%;border-radius:6px;margin-right:2%}@media (max-width:1200px){.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]{width:50%}}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-between;height:90px;background:#fff;border-radius:6px;padding:10px;align-items:center}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .user-name[_ngcontent-%COMP%]{text-align:left;line-height:30px}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .user-contact[_ngcontent-%COMP%]{line-height:30px;text-align:right}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]{background:#fff;border-radius:8px;padding:15px;margin-bottom:30px}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   .category-item-inner[_ngcontent-%COMP%]   .category-description[_ngcontent-%COMP%]{font-family:Nexa;font-style:normal;font-weight:250;font-size:14px;line-height:16px;color:#575f6e;margin-top:5px}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   .category-item-inner[_ngcontent-%COMP%]   .category-item-forms[_ngcontent-%COMP%]{margin-top:20px}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   .category-item-inner[_ngcontent-%COMP%]   .category-item-forms[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]{font-family:Nexa;font-style:normal;font-weight:250;font-size:12px;line-height:16px;display:flex;align-items:center;color:#575f6e}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .right-content[_ngcontent-%COMP%]{background-color:#fff;border-radius:6px;padding:15px;overflow:auto;max-height:85.5vh;margin-right:20px}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .right-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#575f6e}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .right-content[_ngcontent-%COMP%]   .box-ticket-info[_ngcontent-%COMP%]{padding-bottom:20px;padding-top:20px;border-bottom:2px solid #e2e4e5}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .right-content[_ngcontent-%COMP%]   .box-ticket-info[_ngcontent-%COMP%]   .box-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;margin-bottom:20px}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .right-content[_ngcontent-%COMP%]   .box-ticket-info[_ngcontent-%COMP%]   .box-header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{min-width:auto;height:36px;border-radius:4px;font-family:Nexa;font-weight:500;font-size:16px;display:flex;align-items:center;text-transform:capitalize;color:#fff}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .right-content[_ngcontent-%COMP%]   .box-ticket-info[_ngcontent-%COMP%]   .box-header[_ngcontent-%COMP%]   .finished[_ngcontent-%COMP%]{background:#6fe8d7}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .right-content[_ngcontent-%COMP%]   .box-ticket-info[_ngcontent-%COMP%]   .box-header[_ngcontent-%COMP%]   .progress[_ngcontent-%COMP%]{background:#f3a124}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .category-view-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;max-height:70vh;overflow:auto}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .category-view-container[_ngcontent-%COMP%]::-webkit-scrollbar, .onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .right-content[_ngcontent-%COMP%]::-webkit-scrollbar{display:none}.onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .category-view-container[_ngcontent-%COMP%], .onboarding-detail[_ngcontent-%COMP%]   .view-content[_ngcontent-%COMP%]   .right-content[_ngcontent-%COMP%]{-ms-overflow-style:none;scrollbar-width:none}.fields[_ngcontent-%COMP%]{height:84%}.fields[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style:none;display:flex;margin:33px 0;padding:0;overflow:auto}.fields[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin-right:20px;padding-bottom:5px;border-bottom:3px solid transparent}.fields[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none;font-family:Nexa;font-style:normal;font-weight:700;font-size:14px;line-height:120%;color:#171f26;opacity:.5;overflow:hidden;display:-webkit-box;-webkit-line-clamp:1;-webkit-box-orient:vertical}.fields[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.menu-item.active[_ngcontent-%COMP%], .fields[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.menu-item[_ngcontent-%COMP%]:hover{cursor:pointer;border-bottom:3px solid #3c4252}.fields[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.menu-item.active[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .fields[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.menu-item[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%]{font-family:Nexa;font-style:normal;font-weight:700;font-size:14px;line-height:120%;opacity:1;text-decoration:none!important}.progress-status[_ngcontent-%COMP%]   .status[_ngcontent-%COMP%]{display:flex;align-items:center}.progress-status[_ngcontent-%COMP%]   .ongoing[_ngcontent-%COMP%]{color:#6fe8d7}.progress-status[_ngcontent-%COMP%]   .in-progress[_ngcontent-%COMP%]{padding-right:25px;color:#f3a124;font-weight:500;font-size:16px}  .progress-status{font-size:16px}  .progress-status .mat-progress-bar{display:block;height:20px;overflow:hidden;border-radius:50px;position:relative;transition:opacity 250ms linear;width:100%}  .progress-status .mat-progress-bar-fill::after{background-color:#6fe8d7}  .progress-status .mat-progress-bar-buffer{background-color:#ecf3f7}.category-header[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between}"] });
        return OnboardingDetailComponent;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(OnboardingDetailComponent, [{
            type: core.Component,
            args: [{
                    selector: 'lib-onboarding-detail',
                    templateUrl: './onboarding-detail.component.html',
                    styleUrls: ['./onboarding-detail.component.scss']
                }]
        }], function () { return [{ type: router.Router }, { type: OnboardingService }]; }, { detailView: [{
                type: core.Input
            }], onShowMode: [{
                type: core.Output
            }], onScroll: [{
                type: core.HostListener,
                args: ['scroll', ['$event']]
            }] }); })();

    function OnboardingCreateComponent_form_2_li_11_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "li", 18);
        core.ɵɵelementStart(1, "a");
        core.ɵɵtext(2);
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var category_r828 = ctx.$implicit;
        core.ɵɵproperty("ngxScrollTo", "#" + category_r828.name)("id", category_r828.name + "x");
        core.ɵɵadvance(2);
        core.ɵɵtextInterpolate(category_r828.name);
    } }
    function OnboardingCreateComponent_form_2_section_13_div_9_div_1_div_5_div_1_div_1_div_5_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
        var _r847 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "div", 28);
        core.ɵɵelementStart(1, "div", 29);
        core.ɵɵelementStart(2, "div", 30);
        core.ɵɵelementStart(3, "lib-sub-create-onboarding", 37);
        core.ɵɵlistener("onCheckValue", function OnboardingCreateComponent_form_2_section_13_div_9_div_1_div_5_div_1_div_1_div_5_div_1_div_1_Template_lib_sub_create_onboarding_onCheckValue_3_listener($event) { core.ɵɵrestoreView(_r847); var ctx_r846 = core.ɵɵnextContext(10); return ctx_r846.onCheckValue($event); });
        core.ɵɵelement(4, "div", 32);
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r848 = core.ɵɵnextContext();
        var c2_r843 = ctx_r848.$implicit;
        var l_r844 = ctx_r848.index;
        var ctx_r849 = core.ɵɵnextContext(3);
        var child_r838 = ctx_r849.$implicit;
        var k_r839 = ctx_r849.index;
        core.ɵɵadvance(3);
        core.ɵɵproperty("field", c2_r843)("length", child_r838 == null ? null : child_r838.forms == null ? null : child_r838.forms.length)("i", k_r839)("j", l_r844);
    } }
    function OnboardingCreateComponent_form_2_section_13_div_9_div_1_div_5_div_1_div_1_div_5_div_1_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "div", 36);
        core.ɵɵtemplate(1, OnboardingCreateComponent_form_2_section_13_div_9_div_1_div_5_div_1_div_1_div_5_div_1_div_1_Template, 5, 4, "div", 27);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var c2_r843 = ctx.$implicit;
        var l_r844 = ctx.index;
        var child_r838 = core.ɵɵnextContext(3).$implicit;
        var ctx_r842 = core.ɵɵnextContext(6);
        core.ɵɵstyleProp("width", c2_r843.forms ? "100%" : ctx_r842.fieldWidth(c2_r843.type, child_r838.forms.length, l_r844));
        core.ɵɵproperty("id", c2_r843.key);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", c2_r843.expandOnboarding && ctx_r842.onCheckConditionLocationValue(c2_r843.isConditional, c2_r843.conditionLocation, c2_r843.conditionValue));
    } }
    function OnboardingCreateComponent_form_2_section_13_div_9_div_1_div_5_div_1_div_1_div_5_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "div", 34);
        core.ɵɵtemplate(1, OnboardingCreateComponent_form_2_section_13_div_9_div_1_div_5_div_1_div_1_div_5_div_1_Template, 2, 4, "div", 35);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var child_r838 = core.ɵɵnextContext(2).$implicit;
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngForOf", child_r838.forms);
    } }
    function OnboardingCreateComponent_form_2_section_13_div_9_div_1_div_5_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
        var _r853 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "div", 28);
        core.ɵɵelementStart(1, "div", 29);
        core.ɵɵelementStart(2, "div", 30);
        core.ɵɵelementStart(3, "lib-sub-create-onboarding", 37);
        core.ɵɵlistener("onCheckValue", function OnboardingCreateComponent_form_2_section_13_div_9_div_1_div_5_div_1_div_1_Template_lib_sub_create_onboarding_onCheckValue_3_listener($event) { core.ɵɵrestoreView(_r853); var ctx_r852 = core.ɵɵnextContext(7); return ctx_r852.onCheckValue($event); });
        core.ɵɵelementStart(4, "div", 32);
        core.ɵɵtemplate(5, OnboardingCreateComponent_form_2_section_13_div_9_div_1_div_5_div_1_div_1_div_5_Template, 2, 1, "div", 33);
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r854 = core.ɵɵnextContext();
        var child_r838 = ctx_r854.$implicit;
        var k_r839 = ctx_r854.index;
        var ctx_r855 = core.ɵɵnextContext(3);
        var field_r833 = ctx_r855.$implicit;
        var j_r834 = ctx_r855.index;
        core.ɵɵadvance(3);
        core.ɵɵproperty("field", child_r838)("length", field_r833 == null ? null : field_r833.forms == null ? null : field_r833.forms.length)("i", j_r834)("j", k_r839);
        core.ɵɵadvance(2);
        core.ɵɵproperty("ngIf", child_r838.forms && child_r838.value);
    } }
    function OnboardingCreateComponent_form_2_section_13_div_9_div_1_div_5_div_1_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "div", 36);
        core.ɵɵtemplate(1, OnboardingCreateComponent_form_2_section_13_div_9_div_1_div_5_div_1_div_1_Template, 6, 5, "div", 27);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var child_r838 = ctx.$implicit;
        var k_r839 = ctx.index;
        var field_r833 = core.ɵɵnextContext(3).$implicit;
        var ctx_r837 = core.ɵɵnextContext(3);
        core.ɵɵstyleProp("width", child_r838.forms ? "100%" : ctx_r837.fieldWidth(child_r838.type, field_r833.forms.length, k_r839));
        core.ɵɵproperty("id", child_r838.key);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", child_r838.expandOnboarding && ctx_r837.onCheckConditionLocationValue(child_r838.isConditional, child_r838.conditionLocation, child_r838.conditionValue));
    } }
    function OnboardingCreateComponent_form_2_section_13_div_9_div_1_div_5_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "div", 34);
        core.ɵɵtemplate(1, OnboardingCreateComponent_form_2_section_13_div_9_div_1_div_5_div_1_Template, 2, 4, "div", 35);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var field_r833 = core.ɵɵnextContext(2).$implicit;
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngForOf", field_r833.forms);
    } }
    function OnboardingCreateComponent_form_2_section_13_div_9_div_1_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "div", 28);
        core.ɵɵelementStart(1, "div", 29);
        core.ɵɵelementStart(2, "div", 30);
        core.ɵɵelementStart(3, "lib-sub-create-onboarding", 31);
        core.ɵɵelementStart(4, "div", 32);
        core.ɵɵtemplate(5, OnboardingCreateComponent_form_2_section_13_div_9_div_1_div_5_Template, 2, 1, "div", 33);
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r858 = core.ɵɵnextContext();
        var field_r833 = ctx_r858.$implicit;
        var j_r834 = ctx_r858.index;
        var ctx_r859 = core.ɵɵnextContext();
        var category_r830 = ctx_r859.$implicit;
        var i_r831 = ctx_r859.index;
        core.ɵɵadvance(3);
        core.ɵɵproperty("field", field_r833)("length", category_r830 == null ? null : category_r830.forms == null ? null : category_r830.forms.length)("i", i_r831)("j", j_r834);
        core.ɵɵadvance(2);
        core.ɵɵproperty("ngIf", field_r833.forms && field_r833.value);
    } }
    function OnboardingCreateComponent_form_2_section_13_div_9_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "div", 26);
        core.ɵɵtemplate(1, OnboardingCreateComponent_form_2_section_13_div_9_div_1_Template, 6, 5, "div", 27);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var field_r833 = ctx.$implicit;
        var j_r834 = ctx.index;
        var category_r830 = core.ɵɵnextContext().$implicit;
        var ctx_r832 = core.ɵɵnextContext(2);
        core.ɵɵstyleProp("width", field_r833.forms ? "100%" : ctx_r832.fieldWidth(field_r833.type, category_r830.forms.length, j_r834));
        core.ɵɵproperty("id", field_r833.key);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", field_r833.expandOnboarding && ctx_r832.onCheckConditionLocationValue(field_r833.isConditional, field_r833.conditionLocation, field_r833.conditionValue));
    } }
    function OnboardingCreateComponent_form_2_section_13_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "section", 19);
        core.ɵɵelementStart(1, "div", 20);
        core.ɵɵelementStart(2, "div", 21);
        core.ɵɵelementStart(3, "div", 22);
        core.ɵɵelementStart(4, "h4", 23);
        core.ɵɵtext(5);
        core.ɵɵelementEnd();
        core.ɵɵelementStart(6, "p");
        core.ɵɵtext(7);
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementStart(8, "div", 24);
        core.ɵɵtemplate(9, OnboardingCreateComponent_form_2_section_13_div_9_Template, 2, 4, "div", 25);
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var category_r830 = ctx.$implicit;
        var ctx_r827 = core.ɵɵnextContext(2);
        core.ɵɵproperty("id", category_r830.name);
        core.ɵɵadvance(5);
        core.ɵɵtextInterpolate(category_r830.name);
        core.ɵɵadvance(2);
        core.ɵɵtextInterpolate1(" Listes des informations n\u00E9cessaires pour la cr\u00E9ation de ", ctx_r827.catNameStart(category_r830.name) ? "l'" + category_r830.name : category_r830.name, " ");
        core.ɵɵadvance(2);
        core.ɵɵproperty("ngForOf", category_r830.forms);
    } }
    function OnboardingCreateComponent_form_2_Template(rf, ctx) { if (rf & 1) {
        var _r862 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "form", 3);
        core.ɵɵlistener("submit", function OnboardingCreateComponent_form_2_Template_form_submit_0_listener() { core.ɵɵrestoreView(_r862); var ctx_r861 = core.ɵɵnextContext(); return ctx_r861.onSubmit(); });
        core.ɵɵelementStart(1, "div", 4);
        core.ɵɵelementStart(2, "div", 5);
        core.ɵɵelementStart(3, "h2");
        core.ɵɵtext(4);
        core.ɵɵelementStart(5, "mat-icon", 6);
        core.ɵɵlistener("click", function OnboardingCreateComponent_form_2_Template_mat_icon_click_5_listener() { core.ɵɵrestoreView(_r862); var ctx_r863 = core.ɵɵnextContext(); return ctx_r863.onShowMode(); });
        core.ɵɵtext(6, "visibility");
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementStart(7, "button", 7);
        core.ɵɵlistener("click", function OnboardingCreateComponent_form_2_Template_button_click_7_listener() { core.ɵɵrestoreView(_r862); var ctx_r864 = core.ɵɵnextContext(); return ctx_r864.onResumeLater(); });
        core.ɵɵtext(8);
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementStart(9, "div", 8);
        core.ɵɵelementStart(10, "ul");
        core.ɵɵtemplate(11, OnboardingCreateComponent_form_2_li_11_Template, 3, 3, "li", 9);
        core.ɵɵelementEnd();
        core.ɵɵelementStart(12, "div", 10);
        core.ɵɵlistener("scroll", function OnboardingCreateComponent_form_2_Template_div_scroll_12_listener($event) { core.ɵɵrestoreView(_r862); var ctx_r865 = core.ɵɵnextContext(); return ctx_r865.onScroll($event); });
        core.ɵɵtemplate(13, OnboardingCreateComponent_form_2_section_13_Template, 10, 4, "section", 11);
        core.ɵɵelementStart(14, "div", 12);
        core.ɵɵelementStart(15, "div", 13);
        core.ɵɵelementStart(16, "button", 14);
        core.ɵɵtext(17);
        core.ɵɵelementEnd();
        core.ɵɵelementStart(18, "button", 15);
        core.ɵɵlistener("click", function OnboardingCreateComponent_form_2_Template_button_click_18_listener() { core.ɵɵrestoreView(_r862); var ctx_r866 = core.ɵɵnextContext(); return ctx_r866.onResumeLater(); });
        core.ɵɵtext(19);
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementStart(20, "section", 16);
        core.ɵɵelement(21, "div", 17);
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r824 = core.ɵɵnextContext();
        core.ɵɵproperty("formGroup", ctx_r824.form);
        core.ɵɵadvance(4);
        core.ɵɵtextInterpolate1("Int\u00E9gration profil ", ctx_r824.currentTemplate == null ? null : ctx_r824.currentTemplate.Name, " ");
        core.ɵɵadvance(3);
        core.ɵɵproperty("disabled", ctx_r824.loading);
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate(ctx_r824.resumeLabel);
        core.ɵɵadvance(3);
        core.ɵɵproperty("ngForOf", ctx_r824.categories);
        core.ɵɵadvance(2);
        core.ɵɵproperty("ngForOf", ctx_r824.categories);
        core.ɵɵadvance(3);
        core.ɵɵproperty("disabled", ctx_r824.loading || !ctx_r824.form.valid);
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate(ctx_r824.submitLabel);
        core.ɵɵadvance(1);
        core.ɵɵproperty("disabled", ctx_r824.loading);
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate(ctx_r824.resumeLabel);
    } }
    function OnboardingCreateComponent_lib_onboarding_detail_3_Template(rf, ctx) { if (rf & 1) {
        var _r868 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "lib-onboarding-detail", 38);
        core.ɵɵlistener("onShowMode", function OnboardingCreateComponent_lib_onboarding_detail_3_Template_lib_onboarding_detail_onShowMode_0_listener() { core.ɵɵrestoreView(_r868); var ctx_r867 = core.ɵɵnextContext(); return ctx_r867.onShowMode(); });
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r825 = core.ɵɵnextContext();
        core.ɵɵproperty("detailView", ctx_r825.detailView);
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
                TemplateId: [0, forms.Validators.required]
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
        OnboardingCreateComponent.ɵfac = function OnboardingCreateComponent_Factory(t) { return new (t || OnboardingCreateComponent)(core.ɵɵdirectiveInject(forms.FormBuilder), core.ɵɵdirectiveInject(OnboardingService), core.ɵɵdirectiveInject(router.ActivatedRoute), core.ɵɵdirectiveInject(router.Router), core.ɵɵdirectiveInject(dialog.MatDialog)); };
        OnboardingCreateComponent.ɵcmp = core.ɵɵdefineComponent({ type: OnboardingCreateComponent, selectors: [["create-onboarding"]], hostBindings: function OnboardingCreateComponent_HostBindings(rf, ctx) { if (rf & 1) {
                core.ɵɵlistener("scroll", function OnboardingCreateComponent_scroll_HostBindingHandler($event) { return ctx.onScroll($event); });
            } }, decls: 4, vars: 2, consts: [[1, "content"], ["id", "form", 3, "formGroup", "submit", 4, "ngIf"], [3, "detailView", "onShowMode", 4, "ngIf"], ["id", "form", 3, "formGroup", "submit"], [1, "category"], [1, "title-group"], [2, "margin-left", "20px", "cursor", "pointer", 3, "click"], ["mat-button", "", "type", "button", 1, "register-button", 3, "disabled", "click"], ["id", "fields", 1, "fields"], ["class", "menu-item", 3, "ngxScrollTo", "id", 4, "ngFor", "ngForOf"], [1, "category-container", 3, "scroll"], ["class", "category-item content-item", 3, "id", 4, "ngFor", "ngForOf"], [1, "onboarding-create-footer"], [1, "actions-button", 2, "margin-bottom", "50px"], ["mat-button", "", "type", "submit", 1, "register-button", "send-form", 3, "disabled"], ["mat-button", "", "type", "button", 1, "register-button", "resume", 3, "disabled", "click"], [2, "background-color", "transparent"], [2, "height", "450px"], [1, "menu-item", 3, "ngxScrollTo", "id"], [1, "category-item", "content-item", 3, "id"], [1, "field-content"], [1, "field-item"], [1, "category-title-group"], [1, "category-name"], [1, "category-container"], ["class", "field-category", 3, "id", "width", 4, "ngFor", "ngForOf"], [1, "field-category", 3, "id"], ["class", "inner-loop", 4, "ngIf"], [1, "inner-loop"], [1, "fields-content"], [1, "fields-container"], [3, "field", "length", "i", "j"], [1, "child"], ["class", "inner-child", 4, "ngIf"], [1, "inner-child"], ["class", "inner-child-content", 3, "id", "width", 4, "ngFor", "ngForOf"], [1, "inner-child-content", 3, "id"], [3, "field", "length", "i", "j", "onCheckValue"], [3, "detailView", "onShowMode"]], template: function OnboardingCreateComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵelementStart(0, "main");
                core.ɵɵelementStart(1, "div", 0);
                core.ɵɵtemplate(2, OnboardingCreateComponent_form_2_Template, 22, 10, "form", 1);
                core.ɵɵtemplate(3, OnboardingCreateComponent_lib_onboarding_detail_3_Template, 1, 1, "lib-onboarding-detail", 2);
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
            } if (rf & 2) {
                core.ɵɵadvance(2);
                core.ɵɵproperty("ngIf", !ctx.showMode);
                core.ɵɵadvance(1);
                core.ɵɵproperty("ngIf", ctx.showMode);
            } }, directives: [common.NgIf, forms.ɵangular_packages_forms_forms_y, forms.NgControlStatusGroup, forms.FormGroupDirective, icon.MatIcon, button.MatButton, common.NgForOf, ngxScrollTo.ScrollToDirective, SubOnboardingCreateComponent, OnboardingDetailComponent], styles: ["main[_ngcontent-%COMP%]{background:no-repeat padding-box #f4f7f9;height:100vh;width:100%;display:flex;flex-direction:column;align-items:center}main[_ngcontent-%COMP%]   .disabled[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{background-color:transparent!important}main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{width:99%;height:100%;padding-left:1%}main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font:bold 32px/30px Nexa Text;letter-spacing:0;color:#171f26;padding-top:20px}main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font:20px/26px Nexa Text;letter-spacing:0;color:#171f26}main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   p.sub-title[_ngcontent-%COMP%]{max-width:400px}main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .select-contact[_ngcontent-%COMP%]{max-width:70%;margin:5% auto auto;background:no-repeat padding-box #fff;border:1px solid #dce4e9;border-radius:6px;padding:5%}main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .select-contact[_ngcontent-%COMP%]   .select-template[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;justify-content:space-between;margin-top:50px}main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .select-contact[_ngcontent-%COMP%]   .select-template[_ngcontent-%COMP%]   .full-width[_ngcontent-%COMP%]{width:40%}main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .select-contact[_ngcontent-%COMP%]   .select-template[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{float:right;text-align:center;border:1px solid #543cb6;border-radius:7px;padding:1em 2em;display:flex;align-items:center;background-color:transparent;font:bold 15px/17px Nexa;letter-spacing:0;color:#543cb6;-ms-grid-row-align:center;align-self:center;width:220px}main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .category[_ngcontent-%COMP%]   .onboarding-mat-stepper[_ngcontent-%COMP%]   mat-horizontal-stepper[_ngcontent-%COMP%]   .next-step[_ngcontent-%COMP%]{float:right}main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{display:flex;height:100%;width:100%;max-width:1500px;margin:auto;overflow:hidden}main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .select-contact[_ngcontent-%COMP%]{max-width:70%;margin:5% auto auto;background:no-repeat padding-box #fff;border:1px solid #dce4e9;border-radius:6px;padding:5%}main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .select-contact[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{float:right;text-align:center;border:1px solid #543cb6;border-radius:7px;padding:.7em 2em .5em;display:flex;align-items:center;background-color:transparent;font:bold 15px/17px Nexa;letter-spacing:0;color:#543cb6;align-self:flex-end}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]{width:786px;background:no-repeat padding-box #fff;border:1px solid #dce4e9;border-radius:6px;opacity:1;margin:auto;padding:0 25px;-ms-grid-row-align:center;align-self:center}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{text-align:center;font:900 32px/48px Nexa;letter-spacing:0;color:#171f26}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font:18px/24px Nexa Text;letter-spacing:0;color:#171f26}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .profil-name-content[_ngcontent-%COMP%]{display:flex;align-items:center;position:relative}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .profil-name-content[_ngcontent-%COMP%]   .add-picto[_ngcontent-%COMP%]{margin-right:15px;min-width:50px;width:30px;padding:9px 12px}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .profil-name-content[_ngcontent-%COMP%]   .add-picto[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin-right:10px}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .profil-name-content[_ngcontent-%COMP%]   .list-picto[_ngcontent-%COMP%]{position:absolute;height:200px;width:100%;background:no-repeat padding-box #fff;border:1px solid #171f26;border-radius:8px;top:100%;z-index:1}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .profil-name-content[_ngcontent-%COMP%]   .list-picto[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin:15px;border:none;font-size:40px}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .profil-name-content[_ngcontent-%COMP%]   .list-picto[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]:hover{color:#830b6b!important;cursor:pointer}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .box-title-content[_ngcontent-%COMP%]{width:100%;margin:25px auto}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font:900 32px/38px Nexa;letter-spacing:0;color:#171f26}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font:15px/26px Nexa Text;letter-spacing:0;color:#171f26;text-align:center}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .link-create-profil[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:center}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{text-align:center;border:1px solid #543cb6;border-radius:7px;padding:.7em 2em .5em;display:flex;align-items:center;background-color:transparent;font:bold 15px/17px Nexa;letter-spacing:0;color:#543cb6}main[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:space-between}.expand-button[_ngcontent-%COMP%]{color:#5a607f!important;background-color:transparent!important;box-shadow:none!important}.full-width[_ngcontent-%COMP%]{width:100%}.field-action[_ngcontent-%COMP%]{width:10%}.field-size[_ngcontent-%COMP%]{width:90%;margin:auto 2% auto auto}  .mat-form-field-appearance-fill .mat-form-field-flex{background-color:#fff}  .mat-select{padding:0}  .mat-form-field-appearance-fill .mat-form-field-underline::before{background-color:transparent}[_nghost-%COMP%]     .mat-checkbox-checked.mat-accent .mat-checkbox-background, [_nghost-%COMP%]     .mat-checkbox-indeterminate.mat-accent .mat-checkbox-background{background-color:transparent}.category-action[_ngcontent-%COMP%]{display:flex;width:100%;overflow:hidden}.delete-field[_ngcontent-%COMP%]{margin:auto 2%}.radio-group[_ngcontent-%COMP%]   .mat-radio-button[_ngcontent-%COMP%]{margin-right:10px}.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary[_ngcontent-%COMP%]{background-color:#3f51b5;color:#fff;min-height:20px;font-size:10px}.move-icons[_ngcontent-%COMP%]{cursor:move}.category-item[_ngcontent-%COMP%], .cdk-drag-placeholder[_ngcontent-%COMP%]{display:flex;align-items:baseline;width:100%;border:1px solid #dce4e9;border-radius:8px;background-color:#fff;margin-top:10px;padding:15px}.category-item[_ngcontent-%COMP%]   .left-action[_ngcontent-%COMP%], .cdk-drag-placeholder[_ngcontent-%COMP%]   .left-action[_ngcontent-%COMP%]{height:auto;background-color:#49a094;padding-top:7px;width:40px;-ms-grid-row-align:stretch;align-self:stretch;border-top-left-radius:8px;border-bottom-left-radius:8px}.category-item[_ngcontent-%COMP%]   .left-action[_ngcontent-%COMP%]   .transparent-button[_ngcontent-%COMP%], .cdk-drag-placeholder[_ngcontent-%COMP%]   .left-action[_ngcontent-%COMP%]   .transparent-button[_ngcontent-%COMP%]{background-color:transparent;box-shadow:none;width:40px;padding:0;margin:0;min-width:auto;color:#fff}.category-item[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%], .cdk-drag-placeholder[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%]{width:100%}.category-item[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%], .cdk-drag-placeholder[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]{display:-ms-grid;display:grid;-ms-grid-columns:1fr 1fr 1fr;grid-template-columns:1fr 1fr 1fr;align-items:center;border:transparent!important}.category-item[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]   .category-title-group[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .cdk-drag-placeholder[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]   .category-title-group[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-family:Nexa;font-style:normal;font-weight:250;font-size:14px;line-height:16px;color:#575f6e}.category-item[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]   .category-title-group[_ngcontent-%COMP%]   .category-name[_ngcontent-%COMP%], .cdk-drag-placeholder[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]   .category-title-group[_ngcontent-%COMP%]   .category-name[_ngcontent-%COMP%]{text-align:left;font:bold 22px/48px Nexa Text;letter-spacing:0;color:#171f26;margin:0}.category-item[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]   .mat-form-field-wrapper[_ngcontent-%COMP%]   .mat-form-field-flex[_ngcontent-%COMP%]   .mat-form-field-outline[_ngcontent-%COMP%], .category-item[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%]   .mat-form-field-outline[_ngcontent-%COMP%], .cdk-drag-placeholder[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]   .mat-form-field-wrapper[_ngcontent-%COMP%]   .mat-form-field-flex[_ngcontent-%COMP%]   .mat-form-field-outline[_ngcontent-%COMP%], .cdk-drag-placeholder[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%]   .mat-form-field-outline[_ngcontent-%COMP%]{color:transparent!important}.cdk-drag-preview[_ngcontent-%COMP%]{box-sizing:border-box;border-radius:4px;opacity:1}.cdk-drag-preview[_ngcontent-%COMP%]   .expand-button[_ngcontent-%COMP%]{color:#5a607f!important;background-color:transparent!important;box-shadow:none!important;margin-right:28px!important}.cdk-drag-placeholder[_ngcontent-%COMP%]{opacity:0}.cdk-drag-animating[_ngcontent-%COMP%], .example-list.cdk-drop-list-dragging[_ngcontent-%COMP%]   .category-item[_ngcontent-%COMP%]:not(.cdk-drag-placeholder){transition:transform 250ms cubic-bezier(0,0,.2,1)}.child[_ngcontent-%COMP%]{margin-left:0}.child[_ngcontent-%COMP%]   .inner-child[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap}.category[_ngcontent-%COMP%]{width:100%}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]{width:250px;background-color:#fff;margin:10px 20px;border-radius:5px;border:1px solid #dbcbcb96}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:15px;border-bottom:1px solid #dbcbcb96;margin:10px;padding-bottom:5px;padding-top:0;font-family:\"Nexa Text\";display:flex;flex-direction:column;justify-content:space-between;align-items:flex-start}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-weight:600;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;margin-top:-5px}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin-left:15px;cursor:pointer}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   h3.template-title[_ngcontent-%COMP%]{font:900 24px/36px Nexa Text;letter-spacing:0;color:#171f26}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]{font-weight:600;margin-left:-27px;font-size:15px;list-style:none}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:5px;margin:5px auto;cursor:pointer;text-align:left;font:12px/19px Nexa Text;letter-spacing:0;color:#535760}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]{padding-left:0;margin-left:0}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.li-title[_ngcontent-%COMP%]{font-size:14px;font-weight:600;margin-right:10px}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.li-title[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:140px;outline:0;border:1px dashed grey}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.li-title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:inline-flex;align-items:center;width:100%}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.li-title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin-left:10px}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.li-title.active[_ngcontent-%COMP%], .category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.li-title[_ngcontent-%COMP%]:hover{background:no-repeat padding-box #e5e8ee;border-radius:5px}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.sub-title[_ngcontent-%COMP%]{list-style:none;padding-left:20px}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.sub-title.active[_ngcontent-%COMP%], .category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.sub-title.active[_ngcontent-%COMP%]::marker, .category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.sub-title[_ngcontent-%COMP%]:hover{font-weight:600;background:no-repeat padding-box #e5e8ee;border-radius:5px}.category[_ngcontent-%COMP%]   .disabled[_ngcontent-%COMP%]{background-color:#f4f7f9!important}.category[_ngcontent-%COMP%]   .expand-button[_ngcontent-%COMP%]{color:#5a607f!important;background-color:transparent!important;box-shadow:none!important;margin-right:28px!important}.category[_ngcontent-%COMP%]   .expand-button[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%]{font-size:40px}.category[_ngcontent-%COMP%]   .transparent-button[_ngcontent-%COMP%]{background-color:transparent;box-shadow:none;width:40px;padding:0;margin:0;margin-left:0!important;min-width:auto;color:#fff}.category[_ngcontent-%COMP%]   .title-group[_ngcontent-%COMP%]{display:flex;justify-content:space-between;margin-top:10px}.category[_ngcontent-%COMP%]   .title-group[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0 0 8px;display:flex;align-items:center}.add-button-sub-category[_ngcontent-%COMP%]{width:95.5%!important;margin-bottom:22px;margin-left:22px}.add-button-container[_ngcontent-%COMP%]{background:no-repeat padding-box #fff;border:1px dashed #dce4e9;border-radius:8px;margin-top:10px;padding:10px;display:flex;justify-content:center;align-items:center;width:98.5%;margin-bottom:22px}.add-button-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{display:flex;align-items:center;background-color:transparent;border:none;cursor:pointer;font:17px/26px Nexa Text;letter-spacing:0;color:#c2c8d5;box-shadow:none}.add-category[_ngcontent-%COMP%]{border:1px dashed #c2c8d5;border-radius:5px;margin-left:10px;margin-bottom:10px;font:bold 12px/19px Nexa Text;letter-spacing:0;color:#c2c8d5;width:92%}.inner-loop[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]{display:flex;height:100%;margin:0;width:98%;margin-top:10px;margin-bottom:10px}.inner-loop[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]   .button-action[_ngcontent-%COMP%]{background-color:#6fe8d7;-ms-grid-row-align:stretch;align-self:stretch;margin-top:0;margin-left:20px;border-bottom-left-radius:8px;border-top-left-radius:8px}.inner-loop[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]   .button-action[_ngcontent-%COMP%]   .transparent-button[_ngcontent-%COMP%]{background-color:transparent;box-shadow:none;width:40px;padding:0;margin:0;min-width:auto;color:#fff}.inner-loop[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]   .child-2-background[_ngcontent-%COMP%]{background-color:#cffaf4!important}.inner-loop[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]   .child-3-background[_ngcontent-%COMP%]{background-color:#e5e8ee!important}.inner-loop[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]   .fields-container[_ngcontent-%COMP%]{width:100%;padding-right:10px;padding-top:5px}.inner-loop[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]   .fields-container[_ngcontent-%COMP%]   lib-sub-category[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;width:100%}.inner-loop[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]   .fields-container[_ngcontent-%COMP%]   lib-sub-category[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]   .button-action[_ngcontent-%COMP%]{background-color:#6fe8d7;height:100%;margin:auto 15px auto auto;display:flex}.inner-loop[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]   .fields-container[_ngcontent-%COMP%]   lib-sub-category[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]   .button-action[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{box-shadow:none;background-color:transparent;color:#fff}.side-bar[_ngcontent-%COMP%]{display:flex;flex-direction:column}.register-button[_ngcontent-%COMP%]{background:0 0;border:2px solid #192128!important;border-radius:8px;margin-left:22px!important;color:#000}.register-button[disabled][disabled][_ngcontent-%COMP%]{opacity:.5!important;background:no-repeat padding-box #dadee2!important}.content-item[_ngcontent-%COMP%]{transition-property:border-image-slice border-image-source border-width;transition-timing-function:ease-in-out;transition-duration:.5s}.active-content[_ngcontent-%COMP%]{border-image-slice:1;border-width:2px;border-image-source:linear-gradient(to left,#9d107d,#4862ab)}  .phone-input-view-collab{border-bottom:1px solid #949494!important;padding-bottom:.3em;padding-top:1em;display:block!important;max-width:100%;font:14px/20px \"Nexa Text\"!important;width:95%}  .country-dropdown{min-width:unset!important}  .iti{width:100%!important}  #phone{width:90%!important}  #mobile-phone{width:100%}  .fields{max-height:100vh;margin-right:.5%;overflow:hidden;width:100%}  .fields mat-tab-group{height:100%;width:100%;overflow:hidden}  .fields mat-tab-group .mat-tab-body-wrapper{height:100%;max-height:90vh;overflow:auto}  .fields mat-tab-group .mat-tab-body-wrapper .mat-tab-body{height:100%}  .fields mat-tab-group .mat-tab-body-wrapper .mat-tab-body .mat-tab-body-content{width:100%;overflow:hidden}.fields[_ngcontent-%COMP%]{height:95%}.fields[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style:none;display:flex;margin:0;padding:0;overflow:auto}.fields[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin-right:20px;padding-bottom:5px;border-bottom:3px solid transparent}.fields[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none;font-family:Nexa;font-style:normal;font-weight:700;font-size:14px;line-height:120%;color:#171f26;opacity:.5;overflow:hidden;display:-webkit-box;-webkit-line-clamp:1;-webkit-box-orient:vertical}.fields[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.menu-item.active[_ngcontent-%COMP%], .fields[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.menu-item[_ngcontent-%COMP%]:hover{cursor:pointer;border-bottom:3px solid #3c4252}.fields[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.menu-item.active[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .fields[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.menu-item[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%]{font-family:Nexa;font-style:normal;font-weight:700;font-size:14px;line-height:120%;opacity:1;text-decoration:none!important}  .category-container{overflow:auto;max-height:100%;display:flex;flex-wrap:wrap;-ms-overflow-style:none;scrollbar-width:none}  .category-container mat-form-field{width:100%}  .category-container .actions-button{margin-top:20px;margin-bottom:50px}  .category-container .actions-button .send-form{margin-left:0!important;background-color:#000;color:#fff}  .category-container .actions-button .resume{margin-left:25px!important}  .category-container::-webkit-scrollbar{display:none}  .category-item .mat-radio-button.mat-accent.mat-radio-checked .mat-radio-outer-circle{border-color:#039be5}  .category-item .mat-radio-button.mat-accent .mat-radio-inner-circle,   .category-item .mat-radio-button.mat-accent .mat-radio-ripple .mat-ripple-element:not(.mat-radio-persistent-ripple),   .category-item .mat-radio-button.mat-accent.mat-radio-checked .mat-radio-persistent-ripple,   .category-item .mat-radio-button.mat-accent:active .mat-radio-persistent-ripple{background-color:#039be5}  .category-item .mat-checkbox-checkmark-path{stroke:#fff!important}  .category-item .mat-checkbox-frame{border:2px solid #039be5!important}  .category-item .mat-checkbox-checked.mat-accent .mat-checkbox-background,   .category-item .mat-checkbox-indeterminate.mat-accent .mat-checkbox-background{background-color:#039be5!important}  .category-item .mat-checkbox-inner-container{height:20px!important;width:20px!important}[_nghost-%COMP%]     .category .mat-slide-toggle.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar{background-color:#039be5;position:relative;width:42px;height:23px;flex-shrink:0;border-radius:14px}[_nghost-%COMP%]     .category .mat-slide-toggle:not(.mat-disabled) .mat-slide-toggle-bar{background-color:#707273;position:relative;width:42px;height:23px;flex-shrink:0;border-radius:14px}[_nghost-%COMP%]     .category .mat-slide-toggle.mat-checked:not(.mat-disabled) .mat-slide-toggle-thumb{background-color:#fff;margin-top:4px}[_nghost-%COMP%]     .category .mat-slide-toggle:not(.mat-disabled) .mat-slide-toggle-thumb{margin-top:4px;margin-left:4px}[_nghost-%COMP%]     .category .mat-slide-toggle.draft:not(.mat-disabled) .mat-slide-toggle-bar{background-color:#707273}[_nghost-%COMP%]     .category .mat-slide-toggle.draft.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar{background-color:#039be5}.onboarding-create-footer[_ngcontent-%COMP%]{display:flex;flex-direction:column}"] });
        return OnboardingCreateComponent;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(OnboardingCreateComponent, [{
            type: core.Component,
            args: [{
                    selector: "create-onboarding",
                    templateUrl: "./onboarding-create.component.html",
                    styleUrls: ["./onboarding-create.component.scss"],
                }]
        }], function () { return [{ type: forms.FormBuilder }, { type: OnboardingService }, { type: router.ActivatedRoute }, { type: router.Router }, { type: dialog.MatDialog }]; }, { onScroll: [{
                type: core.HostListener,
                args: ['scroll', ['$event']]
            }] }); })();

    function DialogCreateOnboardingComponent_mat_option_7_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "mat-option", 7);
        core.ɵɵtext(1);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var template_r913 = ctx.$implicit;
        core.ɵɵproperty("value", template_r913._id);
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate(template_r913.Name);
    } }
    var DialogCreateOnboardingComponent = /** @class */ (function () {
        function DialogCreateOnboardingComponent(data, dialogRef, service) {
            var _this = this;
            this.data = data;
            this.dialogRef = dialogRef;
            this.service = service;
            this.templates = [];
            this.defaultUserForm = [
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
            ];
            this.userForm = [];
            this.onboarding = {
                TemplateId: 0,
            };
            this.service._templates.subscribe(function (data) {
                _this.templates = data;
            });
        }
        DialogCreateOnboardingComponent.prototype.ngOnInit = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.service.getAllProfil()];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
        DialogCreateOnboardingComponent.prototype.createOnboarding = function () {
            var _this = this;
            if (!this.disabled()) {
                var template = this.templates.find(function (temp) { return temp._id === _this.onboarding.TemplateId; });
                if (this.data.user) {
                    this.userForm = this.defaultUserForm.map(function (data) { return (__assign(__assign({}, data), { value: _this.data.user[data.key] })); });
                    var index = template.categories.findIndex(function (cat) { return cat.name === "Utilisateur"; });
                    if (index !== -1) {
                        template.categories[index].forms = this.userForm;
                    }
                }
                this.dialogRef.close(__assign(__assign({}, this.onboarding), { categories: template.categories }));
            }
        };
        DialogCreateOnboardingComponent.prototype.close = function () {
            this.dialogRef.close(false);
        };
        DialogCreateOnboardingComponent.prototype.disabled = function () {
            return !(this.onboarding.TemplateId);
        };
        DialogCreateOnboardingComponent.ɵfac = function DialogCreateOnboardingComponent_Factory(t) { return new (t || DialogCreateOnboardingComponent)(core.ɵɵdirectiveInject(dialog.MAT_DIALOG_DATA), core.ɵɵdirectiveInject(dialog.MatDialogRef), core.ɵɵdirectiveInject(OnboardingService)); };
        DialogCreateOnboardingComponent.ɵcmp = core.ɵɵdefineComponent({ type: DialogCreateOnboardingComponent, selectors: [["lib-dialog-create-onboarding"]], decls: 13, vars: 3, consts: [[1, "title"], ["appearance", "outline", 1, "full-width"], ["required", "", 3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], [1, "action-content"], ["mat-raised-button", "", 1, "create-profil", 3, "disabled", "click"], ["mat-raised-button", "", 1, "abandon-profil", 3, "click"], [3, "value"]], template: function DialogCreateOnboardingComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵelementStart(0, "mat-dialog-content");
                core.ɵɵelementStart(1, "h3", 0);
                core.ɵɵtext(2, "Cr\u00E9ation d\u2019une demande d'int\u00E9gration");
                core.ɵɵelementEnd();
                core.ɵɵelementStart(3, "mat-form-field", 1);
                core.ɵɵelementStart(4, "mat-label");
                core.ɵɵtext(5, "Type de profil");
                core.ɵɵelementEnd();
                core.ɵɵelementStart(6, "mat-select", 2);
                core.ɵɵlistener("ngModelChange", function DialogCreateOnboardingComponent_Template_mat_select_ngModelChange_6_listener($event) { return ctx.onboarding.TemplateId = $event; });
                core.ɵɵtemplate(7, DialogCreateOnboardingComponent_mat_option_7_Template, 2, 2, "mat-option", 3);
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
                core.ɵɵelementStart(8, "div", 4);
                core.ɵɵelementStart(9, "button", 5);
                core.ɵɵlistener("click", function DialogCreateOnboardingComponent_Template_button_click_9_listener() { return ctx.createOnboarding(); });
                core.ɵɵtext(10, " Lancer la demande ");
                core.ɵɵelementEnd();
                core.ɵɵelementStart(11, "button", 6);
                core.ɵɵlistener("click", function DialogCreateOnboardingComponent_Template_button_click_11_listener() { return ctx.close(); });
                core.ɵɵtext(12, " Abandonner ");
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
            } if (rf & 2) {
                core.ɵɵadvance(6);
                core.ɵɵproperty("ngModel", ctx.onboarding.TemplateId);
                core.ɵɵadvance(1);
                core.ɵɵproperty("ngForOf", ctx.templates);
                core.ɵɵadvance(2);
                core.ɵɵproperty("disabled", ctx.disabled());
            } }, directives: [dialog.MatDialogContent, formField.MatFormField, formField.MatLabel, select.MatSelect, forms.RequiredValidator, forms.NgControlStatus, forms.NgModel, ngxIntlTelInput.NativeElementInjectorDirective, common.NgForOf, button.MatButton, core$1.MatOption], styles: ["mat-dialog-content[_ngcontent-%COMP%]{display:flex!important;flex-direction:column;justify-content:flex-start;max-width:400px;min-width:400px}mat-dialog-content[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{margin-bottom:10px}mat-dialog-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-family:Nexa;font-style:normal;font-weight:700;font-size:20px;line-height:110%;display:flex;align-items:center;color:#242731}mat-dialog-content[_ngcontent-%COMP%]   .abandon-profil[_ngcontent-%COMP%]{background-color:transparent;border:1px solid #171f26;color:#171f26;margin-left:20px}mat-dialog-content[_ngcontent-%COMP%]   .create-profil[_ngcontent-%COMP%]{background-color:#171f26;border:1px solid #171f26;color:#fff}mat-dialog-content[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled, mat-dialog-content[_ngcontent-%COMP%]   button[disabled][_ngcontent-%COMP%]{opacity:.5}"] });
        return DialogCreateOnboardingComponent;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(DialogCreateOnboardingComponent, [{
            type: core.Component,
            args: [{
                    selector: 'lib-dialog-create-onboarding',
                    templateUrl: './dialog-create-onboarding.component.html',
                    styleUrls: ['./dialog-create-onboarding.component.scss']
                }]
        }], function () { return [{ type: undefined, decorators: [{
                    type: core.Inject,
                    args: [dialog.MAT_DIALOG_DATA]
                }] }, { type: dialog.MatDialogRef }, { type: OnboardingService }]; }, null); })();

    function OnboardingTableComponent_ngx_design_table_0_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelement(0, "ngx-design-table", 1);
    } if (rf & 2) {
        var ctx_r931 = core.ɵɵnextContext();
        core.ɵɵproperty("columnDefinitions", ctx_r931.columnDefinitions)("data", ctx_r931.data)("lang", ctx_r931.lang)("btnOverride", true)("displayDetail", true);
    } }
    var OnboardingTableComponent = /** @class */ (function () {
        function OnboardingTableComponent() {
        }
        OnboardingTableComponent.prototype.ngOnInit = function () {
        };
        OnboardingTableComponent.ɵfac = function OnboardingTableComponent_Factory(t) { return new (t || OnboardingTableComponent)(); };
        OnboardingTableComponent.ɵcmp = core.ɵɵdefineComponent({ type: OnboardingTableComponent, selectors: [["lib-onboarding-table"]], inputs: { _loading_table: "_loading_table", data: "data", columnDefinitions: "columnDefinitions", lang: "lang", inputSearch: "inputSearch" }, decls: 1, vars: 1, consts: [[3, "columnDefinitions", "data", "lang", "btnOverride", "displayDetail", 4, "ngIf"], [3, "columnDefinitions", "data", "lang", "btnOverride", "displayDetail"]], template: function OnboardingTableComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵtemplate(0, OnboardingTableComponent_ngx_design_table_0_Template, 1, 5, "ngx-design-table", 0);
            } if (rf & 2) {
                core.ɵɵproperty("ngIf", ctx.data);
            } }, directives: [common.NgIf, table$2.TableComponent], styles: ["ngx-design-table th span{margin:auto;font-family:Nexa;font-style:normal;font-weight:700;font-size:14px;line-height:120%;color:#171f26}  ngx-design-table .mat-header-row{background:#e5e8ee}  ngx-design-table .empty-row{height:0!important;background:no-repeat padding-box #f4f7f9}  ngx-design-table ngx-onboarding .detail-row .mat-column-expandedDetailX{display:none}  ngx-design-table .no-display-detail-empty-row{display:none}  ngx-design-table .mat-table{background:no-repeat padding-box #f4f7f9}  ngx-design-table .mat-table tbody tr.element-row{height:83px!important;border-radius:6px;margin:10px 0}  ngx-design-table .mat-table tbody td.mat-cell{border-bottom:7px solid #f4f7f9!important;border-top:7px solid #f4f7f9!important;background:#fff!important}  ngx-design-table .mat-table tbody td.mat-cell a{text-decoration:none!important}  ngx-design-table .mat-table tbody td.mat-cell span{font-family:Nexa;font-style:normal;font-weight:400}  ngx-design-table .mat-table tbody td.mat-cell app-is-mat-icon{width:100px}  ngx-design-table .mat-table tbody td.mat-cell:first-of-type{border-bottom-left-radius:10px;border-top-left-radius:10px}  ngx-design-table .mat-table tbody td.mat-cell:last-of-type{border-bottom-right-radius:10px;border-top-right-radius:10px}  ngx-design-table lib-custom-cell .custom-status{width:109px;height:36px;border-radius:4px;text-transform:capitalize;color:#fff;font-weight:500!important;font-size:16px;text-align:center;display:flex;flex-direction:column;align-items:center;justify-content:center}  ngx-design-table lib-custom-cell .custom-cell.finished{background:#6fe8d7}  ngx-design-table lib-custom-cell .custom-cell.to-finish{background:#f3a124}  ngx-design-table lib-custom-cell .custom-cell.last-name{display:flex;flex-direction:column}  ngx-design-table lib-custom-cell .custom-cell.last-name span:first-child{font-family:Nexa;font-style:normal;font-weight:700;font-size:14px;line-height:120%;display:flex;align-items:center;color:#242731}"] });
        return OnboardingTableComponent;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(OnboardingTableComponent, [{
            type: core.Component,
            args: [{
                    selector: 'lib-onboarding-table',
                    templateUrl: './onboarding-table.component.html',
                    styleUrls: ['./onboarding-table.component.scss']
                }]
        }], function () { return []; }, { _loading_table: [{
                type: core.Input
            }], data: [{
                type: core.Input
            }], columnDefinitions: [{
                type: core.Input
            }], lang: [{
                type: core.Input
            }], inputSearch: [{
                type: core.Input
            }] }); })();

    function OnboardingListComponent_div_1_ng_template_6_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵtext(0);
    } if (rf & 2) {
        var ctx_r915 = core.ɵɵnextContext(2);
        core.ɵɵtextInterpolate1(" Toutes (", ctx_r915.onboardingList.data == null ? null : ctx_r915.onboardingList.data.length, ") ");
    } }
    function OnboardingListComponent_div_1_ng_template_7_div_0_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelement(0, "div", 12);
    } }
    function OnboardingListComponent_div_1_ng_template_7_lib_onboarding_table_3_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelement(0, "lib-onboarding-table", 13);
    } if (rf & 2) {
        var ctx_r922 = core.ɵɵnextContext(3);
        core.ɵɵproperty("columnDefinitions", ctx_r922.columnDefinitions)("data", ctx_r922.onboardingList)("lang", ctx_r922.lang)("inputSearch", ctx_r922.inputSearch);
    } }
    var _c0$4 = function () { return { "margin-bottom": "100vh" }; };
    function OnboardingListComponent_div_1_ng_template_7_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵtemplate(0, OnboardingListComponent_div_1_ng_template_7_div_0_Template, 1, 0, "div", 9);
        core.ɵɵelement(1, "div", 10);
        core.ɵɵelementStart(2, "div");
        core.ɵɵtemplate(3, OnboardingListComponent_div_1_ng_template_7_lib_onboarding_table_3_Template, 1, 4, "lib-onboarding-table", 11);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r916 = core.ɵɵnextContext(2);
        core.ɵɵproperty("ngIf", ctx_r916._loading_table || !ctx_r916.onboardingList);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngStyle", ctx_r916._loading_table && core.ɵɵpureFunction0(5, _c0$4));
        core.ɵɵadvance(1);
        core.ɵɵclassProp("ticket-list", !ctx_r916._loading_table);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", ctx_r916.onboardingList);
    } }
    function OnboardingListComponent_div_1_ng_template_9_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵtext(0);
    } if (rf & 2) {
        var ctx_r917 = core.ɵɵnextContext(2);
        core.ɵɵtextInterpolate1(" Termin\u00E9es (", ctx_r917.onboardingFinished.data.length, ") ");
    } }
    function OnboardingListComponent_div_1_ng_template_10_div_0_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelement(0, "div", 12);
    } }
    function OnboardingListComponent_div_1_ng_template_10_lib_onboarding_table_3_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelement(0, "lib-onboarding-table", 13);
    } if (rf & 2) {
        var ctx_r924 = core.ɵɵnextContext(3);
        core.ɵɵproperty("columnDefinitions", ctx_r924.columnDefinitions)("data", ctx_r924.onboardingFinished)("lang", ctx_r924.lang)("inputSearch", ctx_r924.inputSearch);
    } }
    function OnboardingListComponent_div_1_ng_template_10_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵtemplate(0, OnboardingListComponent_div_1_ng_template_10_div_0_Template, 1, 0, "div", 9);
        core.ɵɵelement(1, "div", 10);
        core.ɵɵelementStart(2, "div");
        core.ɵɵtemplate(3, OnboardingListComponent_div_1_ng_template_10_lib_onboarding_table_3_Template, 1, 4, "lib-onboarding-table", 11);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r918 = core.ɵɵnextContext(2);
        core.ɵɵproperty("ngIf", ctx_r918._loading_table || !ctx_r918.onboardingFinished);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngStyle", ctx_r918._loading_table && core.ɵɵpureFunction0(5, _c0$4));
        core.ɵɵadvance(1);
        core.ɵɵclassProp("ticket-list", !ctx_r918._loading_table);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", ctx_r918.onboardingFinished);
    } }
    function OnboardingListComponent_div_1_ng_template_12_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵtext(0);
    } if (rf & 2) {
        var ctx_r919 = core.ɵɵnextContext(2);
        core.ɵɵtextInterpolate1(" A finaliser (", ctx_r919.onboardingToFinish.data.length, ") ");
    } }
    function OnboardingListComponent_div_1_ng_template_13_div_0_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelement(0, "div", 12);
    } }
    function OnboardingListComponent_div_1_ng_template_13_lib_onboarding_table_3_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelement(0, "lib-onboarding-table", 13);
    } if (rf & 2) {
        var ctx_r926 = core.ɵɵnextContext(3);
        core.ɵɵproperty("columnDefinitions", ctx_r926.columnDefinitions)("data", ctx_r926.onboardingToFinish)("lang", ctx_r926.lang)("inputSearch", ctx_r926.inputSearch);
    } }
    function OnboardingListComponent_div_1_ng_template_13_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵtemplate(0, OnboardingListComponent_div_1_ng_template_13_div_0_Template, 1, 0, "div", 9);
        core.ɵɵelement(1, "div", 10);
        core.ɵɵelementStart(2, "div");
        core.ɵɵtemplate(3, OnboardingListComponent_div_1_ng_template_13_lib_onboarding_table_3_Template, 1, 4, "lib-onboarding-table", 11);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r920 = core.ɵɵnextContext(2);
        core.ɵɵproperty("ngIf", ctx_r920._loading_table || !ctx_r920.onboardingToFinish);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngStyle", ctx_r920._loading_table && core.ɵɵpureFunction0(5, _c0$4));
        core.ɵɵadvance(1);
        core.ɵɵclassProp("ticket-list", !ctx_r920._loading_table);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", ctx_r920.onboardingToFinish);
    } }
    function OnboardingListComponent_div_1_Template(rf, ctx) { if (rf & 1) {
        var _r928 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "div", 2);
        core.ɵɵelementStart(1, "div", 3);
        core.ɵɵelementStart(2, "span", 4);
        core.ɵɵtext(3);
        core.ɵɵelementEnd();
        core.ɵɵelementStart(4, "mat-tab-group", 5);
        core.ɵɵlistener("selectedIndexChange", function OnboardingListComponent_div_1_Template_mat_tab_group_selectedIndexChange_4_listener($event) { core.ɵɵrestoreView(_r928); var ctx_r927 = core.ɵɵnextContext(); return ctx_r927.index = $event; })("selectedTabChange", function OnboardingListComponent_div_1_Template_mat_tab_group_selectedTabChange_4_listener($event) { core.ɵɵrestoreView(_r928); var ctx_r929 = core.ɵɵnextContext(); return ctx_r929.triggerChange($event); });
        core.ɵɵelementStart(5, "mat-tab");
        core.ɵɵtemplate(6, OnboardingListComponent_div_1_ng_template_6_Template, 1, 1, "ng-template", 6);
        core.ɵɵtemplate(7, OnboardingListComponent_div_1_ng_template_7_Template, 4, 6, "ng-template", 7);
        core.ɵɵelementEnd();
        core.ɵɵelementStart(8, "mat-tab");
        core.ɵɵtemplate(9, OnboardingListComponent_div_1_ng_template_9_Template, 1, 1, "ng-template", 6);
        core.ɵɵtemplate(10, OnboardingListComponent_div_1_ng_template_10_Template, 4, 6, "ng-template", 7);
        core.ɵɵelementEnd();
        core.ɵɵelementStart(11, "mat-tab");
        core.ɵɵtemplate(12, OnboardingListComponent_div_1_ng_template_12_Template, 1, 1, "ng-template", 6);
        core.ɵɵtemplate(13, OnboardingListComponent_div_1_ng_template_13_Template, 4, 6, "ng-template", 7);
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementStart(14, "a", 8);
        core.ɵɵlistener("click", function OnboardingListComponent_div_1_Template_a_click_14_listener() { core.ɵɵrestoreView(_r928); var ctx_r930 = core.ɵɵnextContext(); return ctx_r930.openDialog(); });
        core.ɵɵtext(15, " Nouvelle demande d\u2019int\u00E9gration ");
        core.ɵɵelementStart(16, "mat-icon");
        core.ɵɵtext(17, "add");
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r914 = core.ɵɵnextContext();
        core.ɵɵadvance(3);
        core.ɵɵtextInterpolate1("Vous avez actuellement ", ctx_r914.currentLength, " Demandes");
        core.ɵɵadvance(1);
        core.ɵɵproperty("@.disabled", true)("selectedIndex", ctx_r914.index);
    } }
    var _c1$3 = function () { return { "overflow-y": "hidden", "height": "100%", "display": "flex", "position": "absolute" }; };
    var OnboardingListComponent = /** @class */ (function () {
        function OnboardingListComponent(service, router, route, dialog) {
            var _this = this;
            this.service = service;
            this.router = router;
            this.route = route;
            this.dialog = dialog;
            this.inputSearch = '';
            this.currentLength = 0;
            this.currentFilter = 'all';
            this.search = '';
            this.onboardingFormatList = [];
            this.templates = [];
            this.columnDefinitions = [
                {
                    key: 'Name',
                    subTitle: "date",
                    value: 'Nom de famille',
                    order: 1,
                    class: 'u-7',
                    addClass: 'lastNameClass',
                    module: table$2.CellsComponentList.CustomCell,
                    sort: true,
                },
                {
                    key: 'Id',
                    value: 'Position',
                    order: 2,
                    class: 'u-4',
                    sort: true,
                }, {
                    key: 'Title',
                    value: 'Profil',
                    order: 2,
                    class: 'u-4',
                    sort: true,
                }, {
                    key: 'requestor',
                    value: 'Demandeur',
                    order: 4,
                    class: 'u-5',
                    sort: true,
                }, {
                    key: 'TemplateName',
                    value: 'Service',
                    order: 5,
                    class: 'u-5',
                    sort: true,
                },
                {
                    key: 'createdAt',
                    value: 'Date de création',
                    order: 6,
                    class: 'u-6',
                    module: table$2.CellsComponentList.DateFormat,
                    sort: true
                },
                {
                    key: 'Status',
                    value: "Statut",
                    order: 7,
                    addClass: 'CustomClass',
                    class: 'u-4',
                    sort: true,
                    module: table$2.CellsComponentList.CustomCell,
                },
                {
                    key: 'Action',
                    value: '',
                    order: 8,
                    class: 'u-4',
                    module: table$2.CellsComponentList.ButtonLink,
                    display: "Détail",
                    override: ["" + this.checkOnboardingPath(), 'TemplateId', '_id'],
                    align: 'center'
                }
            ];
            this._loading_table = true;
            this.HiddenIndex = 0;
            this.index = 0;
            this.lang = 'fr';
            this.service._templates.subscribe(function (data) {
                _this.templates = data;
            });
        }
        OnboardingListComponent.prototype.cancelSearch = function () {
            this.inputSearch = '';
        };
        OnboardingListComponent.prototype.checkOnboardingPath = function () {
            return this.service.mainPath.includes('onboarding') ? this.service.mainPath + "/requests/" : "/onboarding/requests/";
        };
        OnboardingListComponent.prototype.ngOnInit = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.service.getAllOnboarding()];
                        case 1:
                            _a.sent();
                            this.service.onboarding.subscribe(function (onboarding) {
                                setTimeout(function () {
                                    _this._loading_table = false;
                                }, 2000);
                                if (onboarding) {
                                    var x = onboarding.map(function (row, index) {
                                        var _a, _b, _c, _d, _e, _f;
                                        var user = row.categories.find(function (cat) { return cat.name === "Utilisateur"; });
                                        var formUser = user.forms.map(function (form) { return ({ key: form.key, value: form.value }); }).reduce(function (a, v) {
                                            var _a;
                                            return (__assign(__assign({}, a), (_a = {}, _a[v.key] = v.value, _a)));
                                        }, {});
                                        row.Status = row.Finished ? "Terminée" : "A finaliser";
                                        row.CustomClass = row.Finished ? "custom-status finished" : "custom-status to-finish";
                                        row.lastNameClass = "last-name";
                                        row.requestor = ((_b = (_a = row) === null || _a === void 0 ? void 0 : _a.vcontacts[0]) === null || _b === void 0 ? void 0 : _b.Name) || '';
                                        row.Name = row.ContactName = ((_c = formUser) === null || _c === void 0 ? void 0 : _c.LastName) + " " + ((_d = formUser) === null || _d === void 0 ? void 0 : _d.FirstName) || "";
                                        row.Title = ((_e = formUser) === null || _e === void 0 ? void 0 : _e.Title) || "";
                                        row.Email = ((_f = formUser) === null || _f === void 0 ? void 0 : _f.Email) || '';
                                        row.date = moment(row.createdAt).format('DD/MM/YY');
                                        row.TemplateName = row.vtemplates.length > 0 ? row.vtemplates[0].Name : '';
                                        row.Id = index + 1;
                                        // row.mainPath = this.service.mainPath.includes('onboarding') ? `${this.service.mainPath}/requests/` : `/onboarding/requests/`
                                        return row;
                                    });
                                    _this.onboardingFormatList = x;
                                    _this.onboardingList = new table$2.CoreMatTable(x, {
                                        active: 'Id', direction: 'desc'
                                    }, { active: '', valueStart: null, valueEnd: null }, 15, true, true);
                                    _this.currentLength = _this.onboardingList.data.length;
                                    _this.onboardingFinished = new table$2.CoreMatTable(x.filter(function (data) { return data.Finished; }), {
                                        active: 'Id', direction: 'desc'
                                    }, { active: '', valueStart: null, valueEnd: null }, 15, true, true);
                                    _this.onboardingToFinish = new table$2.CoreMatTable(x.filter(function (data) { return !data.Finished; }), {
                                        active: 'Id', direction: 'desc'
                                    }, { active: '', valueStart: null, valueEnd: null }, 15, true, true);
                                }
                            });
                            return [2 /*return*/];
                    }
                });
            });
        };
        OnboardingListComponent.prototype.triggerChange = function ($event) {
            var _this = this;
            console.log("this.onboardingToFifish", $event);
            if ($event.index === 0) {
                this.currentLength = this.onboardingList.data.length;
            }
            else if ($event.index === 1) {
                this.currentLength = this.onboardingFinished.data.length;
            }
            else if ($event.index === 2) {
                this.currentLength = this.onboardingToFinish.data.length;
            }
            if ($event.index !== this.HiddenIndex) {
                this._loading_table = true;
                this.index = $event.index;
                this.router.navigate([], {
                    relativeTo: this.route,
                    queryParams: { page: null, tab: $event.index + 1 },
                    queryParamsHandling: 'merge',
                });
                this.HiddenIndex = $event.index;
                setTimeout(function () {
                    _this._loading_table = false;
                }, 2000);
            }
        };
        OnboardingListComponent.prototype.openDialog = function () {
            var _this = this;
            var dialogRef = this.dialog.open(DialogCreateOnboardingComponent, {
                data: {}
            });
            dialogRef.afterClosed().subscribe(function (current) {
                if (current) {
                    _this.service.currentOnboarding.next(current);
                    _this.router.navigate([_this.service.mainPath + ("/requests/" + current.TemplateId + "/0")]);
                }
            });
        };
        OnboardingListComponent.ɵfac = function OnboardingListComponent_Factory(t) { return new (t || OnboardingListComponent)(core.ɵɵdirectiveInject(OnboardingService), core.ɵɵdirectiveInject(router.Router), core.ɵɵdirectiveInject(router.ActivatedRoute), core.ɵɵdirectiveInject(dialog.MatDialog)); };
        OnboardingListComponent.ɵcmp = core.ɵɵdefineComponent({ type: OnboardingListComponent, selectors: [["lib-onboarding-list"]], decls: 2, vars: 3, consts: [[1, "full-height", 2, "background", "#F4F7F9 0% 0% no-repeat padding-box", 3, "ngStyle"], ["class", "main-all-ticket-list onboarding-list-container", 4, "ngIf"], [1, "main-all-ticket-list", "onboarding-list-container"], [1, "content-view-list-ticket"], [1, "title-table", 2, "cursor", "default"], [1, "list-ticket-tab", 3, "selectedIndex", "selectedIndexChange", "selectedTabChange"], ["mat-tab-label", ""], ["matTabContent", ""], ["role", "button", "mat-raised-button", "", "color", "primary", 1, "add-onboarding", 3, "click"], ["class", "bt-spinner", 4, "ngIf"], [3, "ngStyle"], [3, "columnDefinitions", "data", "lang", "inputSearch", 4, "ngIf"], [1, "bt-spinner"], [3, "columnDefinitions", "data", "lang", "inputSearch"]], template: function OnboardingListComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵelementStart(0, "mat-card", 0);
                core.ɵɵtemplate(1, OnboardingListComponent_div_1_Template, 18, 3, "div", 1);
                core.ɵɵelementEnd();
            } if (rf & 2) {
                core.ɵɵproperty("ngStyle", ctx._loading_table && core.ɵɵpureFunction0(2, _c1$3));
                core.ɵɵadvance(1);
                core.ɵɵproperty("ngIf", ctx.onboardingList);
            } }, directives: [card.MatCard, common.NgStyle, common.NgIf, tabs.MatTabGroup, tabs.MatTab, tabs.MatTabLabel, tabs.MatTabContent, button.MatAnchor, icon.MatIcon, OnboardingTableComponent], styles: ["mat-card[_ngcontent-%COMP%]{display:block;width:98%}md-tooltip[_ngcontent-%COMP%]   ._md-content[_ngcontent-%COMP%], md-tooltip.tt-multiline[_ngcontent-%COMP%]   ._md-content[_ngcontent-%COMP%]{height:auto}table[_ngcontent-%COMP%]{width:100%}.element-detail[_ngcontent-%COMP%]   .inline[_ngcontent-%COMP%]{display:table;width:90%}.element-detail[_ngcontent-%COMP%]   .inline[_ngcontent-%COMP%]   .block1[_ngcontent-%COMP%]{display:inline-table;float:left;width:50%;text-align:left}.element-detail[_ngcontent-%COMP%]   .inline[_ngcontent-%COMP%]   .block1[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font:bold 13px/20px nexa;letter-spacing:0;color:#171f26}.element-detail[_ngcontent-%COMP%]   .inline[_ngcontent-%COMP%]   .block1[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .element-detail[_ngcontent-%COMP%]   .inline[_ngcontent-%COMP%]   .block1[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{font-size:13px!important;letter-spacing:0;color:#171f26}.main-all-ticket-list[_ngcontent-%COMP%]{display:block;grid-column-gap:0;grid-row-gap:0;max-width:1500px;margin-left:auto;margin-right:auto;width:100%;animation:.7s fadein!important;-moz-animation:.7s fadein!important;-webkit-animation:.7s fadein!important;-o-animation:.7s fadein!important}.main-all-ticket-list[_ngcontent-%COMP%]   .component-title[_ngcontent-%COMP%]{-ms-grid-row:1;-ms-grid-column:1;-ms-grid-column-span:2;grid-area:1/1/1/3;padding-left:5px;padding-top:40px;padding-bottom:40px;vertical-align:middle;width:100%}.main-all-ticket-list[_ngcontent-%COMP%]   .content-view-list-ticket[_ngcontent-%COMP%]{-ms-grid-row:2;-ms-grid-row-span:2;-ms-grid-column:1;-ms-grid-column-span:2;grid-area:2/1/4/3;margin-left:18px;padding-left:0;padding-right:0;padding-top:20px}.main-all-ticket-list[_ngcontent-%COMP%]   .content-view-list-ticket[_ngcontent-%COMP%]   table[_ngcontent-%COMP%], app-list-preview[_ngcontent-%COMP%]{width:100%}  .mat-tab-label-active{background:#b6d1cd;opacity:1!important}.col-lg-6[_ngcontent-%COMP%]{width:50%;vertical-align:top;display:inline-table}@-webkit-keyframes three-quarters-loader{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}@keyframes three-quarters-loader{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}.three-quarters-loader[_ngcontent-%COMP%]:not(:required){-webkit-animation:1.25s linear infinite three-quarters-loader;animation:1.25s linear infinite three-quarters-loader;border:4px solid #4285f4;border-right-color:transparent;border-radius:16px;box-sizing:border-box;display:inline-block;margin-left:10px;position:relative;overflow:hidden;text-indent:-9999px;width:20px;height:20px}@keyframes fadein{from{opacity:0;margin-top:20px}to{opacity:1;margin-top:0}}@-webkit-keyframes fadein{from{opacity:0;margin-top:20px}to{opacity:1;margin-top:0}}.mat-tab-left[_ngcontent-%COMP%]{color:#171f26;font:18px/20px \"Nexa Text\";letter-spacing:0;margin-left:48px;margin-top:15px;position:absolute;text-align:left}.mat-tab-left-count[_ngcontent-%COMP%]{color:#171f26;font:17px/20px \"Nexa Text Bold\";letter-spacing:0;text-align:left}.page-title-container[_ngcontent-%COMP%]{display:flex;margin-right:48px}.page-title[_ngcontent-%COMP%]{text-align:left;font:bold 32px/30px \"Nexa Text Bold\";letter-spacing:0;color:#171f26;margin-left:2em;margin-top:-8px}.page-search[_ngcontent-%COMP%]{margin-left:auto;position:relative;width:400px}.page-search[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{left:18%;margin-top:10px;position:absolute}.page-search[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{cursor:pointer;margin-top:10px;position:absolute;right:10px}.list-ticket-tab[_ngcontent-%COMP%]{padding-left:48px;padding-right:48px}.detail-view-ticket[_ngcontent-%COMP%]{float:right;margin-right:20px;margin-top:-30px}@media (min-width:1800px){.page-search[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{left:16%}}.ticket-list[_ngcontent-%COMP%]{animation:.7s fadein!important;-moz-animation:.7s fadein!important;-webkit-animation:.7s fadein!important;-o-animation:.7s fadein!important}.bt-spinner[_ngcontent-%COMP%]{width:75px;height:75px;border-radius:50%;background-color:transparent;border:none;border-top:2px solid #03a9f4;-webkit-animation:1s linear infinite spin;animation:1s linear infinite spin;position:relative;left:50%;top:25vh}@-webkit-keyframes spin{from{transform:rotate(0)}to{transform:rotate(360deg)}}@keyframes spin{from{transform:rotate(0)}to{transform:rotate(360deg)}}.list-ticket-tab[_ngcontent-%COMP%] > .mat-tab-header[_ngcontent-%COMP%] > .mat-tab-label-container[_ngcontent-%COMP%] > .mat-tab-list[_ngcontent-%COMP%] > .mat-tab-labels[_ngcontent-%COMP%] > .mat-tab-label-active[_ngcontent-%COMP%], .site-view-tab[_ngcontent-%COMP%] > .mat-tab-header[_ngcontent-%COMP%] > .mat-tab-label-container[_ngcontent-%COMP%] > .mat-tab-list[_ngcontent-%COMP%] > .mat-tab-labels[_ngcontent-%COMP%] > .mat-tab-label-active[_ngcontent-%COMP%]{background-image:none!important;color:#171f26!important}  .mat-tab-header{display:flex;overflow:hidden;position:relative;flex-shrink:0;width:500px;border:none;left:350px}  .mat-tab-header .mat-tab-label-active{background:0 0}  .mat-tab-header mat-ink-bar{height:4px;border-radius:3px;background-color:#171f26!important}  lib-onboarding-table{background-color:red!important}  lib-onboarding-table .link-btn{background:#e5e8ee!important;padding:2px!important;box-shadow:0 0 0 rgba(0,0,0,.2)!important;border-radius:4px!important;color:#707070!important;font-weight:700!important;font-size:16px!important;margin-left:10px!important}.onboarding-list-container[_ngcontent-%COMP%]{position:relative}.onboarding-list-container[_ngcontent-%COMP%]   .title-table[_ngcontent-%COMP%]{font-family:Nexa;font-weight:700;font-size:14px;position:absolute;left:72px;top:36px}.onboarding-list-container[_ngcontent-%COMP%]   .add-onboarding[_ngcontent-%COMP%]{background:#171f26;box-shadow:0 0 0 rgba(0,0,0,.2);border-radius:7px;position:absolute;right:48px;top:30px}.onboarding-list-container[_ngcontent-%COMP%]   .list-title[_ngcontent-%COMP%]{font-family:Nexa;font-weight:700;font-size:14px;display:flex;align-items:center;justify-content:space-between;margin-bottom:30px}.onboarding-list-container[_ngcontent-%COMP%]   .list-title[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{display:flex;align-items:center;list-style:none;padding-left:0}.onboarding-list-container[_ngcontent-%COMP%]   .list-title[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin-right:20px;padding-bottom:10px;cursor:pointer}.onboarding-list-container[_ngcontent-%COMP%]   .list-title[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]{border-bottom:4px solid #3c4252}"] });
        return OnboardingListComponent;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(OnboardingListComponent, [{
            type: core.Component,
            args: [{
                    selector: 'lib-onboarding-list',
                    templateUrl: './onboarding-list.component.html',
                    styleUrls: ['./onboarding-list.component.scss']
                }]
        }], function () { return [{ type: OnboardingService }, { type: router.Router }, { type: router.ActivatedRoute }, { type: dialog.MatDialog }]; }, null); })();

    var LoadingComponent = /** @class */ (function () {
        function LoadingComponent() {
        }
        LoadingComponent.prototype.ngOnInit = function () {
        };
        LoadingComponent.ɵfac = function LoadingComponent_Factory(t) { return new (t || LoadingComponent)(); };
        LoadingComponent.ɵcmp = core.ɵɵdefineComponent({ type: LoadingComponent, selectors: [["lib-loading"]], decls: 13, vars: 0, consts: [[1, "lds-spinner"]], template: function LoadingComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵelementStart(0, "div", 0);
                core.ɵɵelement(1, "div");
                core.ɵɵelement(2, "div");
                core.ɵɵelement(3, "div");
                core.ɵɵelement(4, "div");
                core.ɵɵelement(5, "div");
                core.ɵɵelement(6, "div");
                core.ɵɵelement(7, "div");
                core.ɵɵelement(8, "div");
                core.ɵɵelement(9, "div");
                core.ɵɵelement(10, "div");
                core.ɵɵelement(11, "div");
                core.ɵɵelement(12, "div");
                core.ɵɵelementEnd();
            } }, styles: [".lds-spinner[_ngcontent-%COMP%]{color:official;display:inline-block;position:relative;width:20px;height:20px}.lds-spinner[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{transform-origin:34px 15px;-webkit-animation:1.2s linear infinite lds-spinner;animation:1.2s linear infinite lds-spinner}.lds-spinner[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:after{content:\" \";display:block;position:absolute;top:4px;left:33px;width:2px;height:6px;border-radius:20%;background:#f3a124}.lds-spinner[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(1){transform:rotate(0);-webkit-animation-delay:-1.1s;animation-delay:-1.1s}.lds-spinner[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(2){transform:rotate(30deg);-webkit-animation-delay:-1s;animation-delay:-1s}.lds-spinner[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(3){transform:rotate(60deg);-webkit-animation-delay:-.9s;animation-delay:-.9s}.lds-spinner[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(4){transform:rotate(90deg);-webkit-animation-delay:-.8s;animation-delay:-.8s}.lds-spinner[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(5){transform:rotate(120deg);-webkit-animation-delay:-.7s;animation-delay:-.7s}.lds-spinner[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(6){transform:rotate(150deg);-webkit-animation-delay:-.6s;animation-delay:-.6s}.lds-spinner[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(7){transform:rotate(180deg);-webkit-animation-delay:-.5s;animation-delay:-.5s}.lds-spinner[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(8){transform:rotate(210deg);-webkit-animation-delay:-.4s;animation-delay:-.4s}.lds-spinner[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(9){transform:rotate(240deg);-webkit-animation-delay:-.3s;animation-delay:-.3s}.lds-spinner[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(10){transform:rotate(270deg);-webkit-animation-delay:-.2s;animation-delay:-.2s}.lds-spinner[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(11){transform:rotate(300deg);-webkit-animation-delay:-.1s;animation-delay:-.1s}.lds-spinner[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(12){transform:rotate(330deg);-webkit-animation-delay:0s;animation-delay:0s}@-webkit-keyframes lds-spinner{0%{opacity:1}100%{opacity:0}}@keyframes lds-spinner{0%{opacity:1}100%{opacity:0}}"] });
        return LoadingComponent;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(LoadingComponent, [{
            type: core.Component,
            args: [{
                    selector: 'lib-loading',
                    templateUrl: './loading.component.html',
                    styleUrls: ['./loading.component.scss']
                }]
        }], function () { return []; }, null); })();

    var DialogConfirmation = /** @class */ (function () {
        function DialogConfirmation(data, dialogRef) {
            this.data = data;
            this.dialogRef = dialogRef;
            this.message = '';
        }
        DialogConfirmation.prototype.ngOnInit = function () {
            this.message = this.data.message || '';
        };
        DialogConfirmation.prototype.close = function (status) {
            this.dialogRef.close(status);
        };
        DialogConfirmation.ɵfac = function DialogConfirmation_Factory(t) { return new (t || DialogConfirmation)(core.ɵɵdirectiveInject(dialog.MAT_DIALOG_DATA), core.ɵɵdirectiveInject(dialog.MatDialogRef)); };
        DialogConfirmation.ɵcmp = core.ɵɵdefineComponent({ type: DialogConfirmation, selectors: [["lib-dialog-confirmation"]], decls: 8, vars: 1, consts: [[1, "title"], [1, "action-content"], ["mat-raised-button", "", 1, "cancel", 3, "click"], ["mat-raised-button", "", 1, "confirm", 3, "click"]], template: function DialogConfirmation_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵelementStart(0, "mat-dialog-content");
                core.ɵɵelementStart(1, "h3", 0);
                core.ɵɵtext(2);
                core.ɵɵelementEnd();
                core.ɵɵelementStart(3, "div", 1);
                core.ɵɵelementStart(4, "button", 2);
                core.ɵɵlistener("click", function DialogConfirmation_Template_button_click_4_listener() { return ctx.close(false); });
                core.ɵɵtext(5, " Non ");
                core.ɵɵelementEnd();
                core.ɵɵelementStart(6, "button", 3);
                core.ɵɵlistener("click", function DialogConfirmation_Template_button_click_6_listener() { return ctx.close(true); });
                core.ɵɵtext(7, " Oui ");
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
            } if (rf & 2) {
                core.ɵɵadvance(2);
                core.ɵɵtextInterpolate(ctx.message);
            } }, directives: [dialog.MatDialogContent, button.MatButton], styles: ["mat-dialog-content[_ngcontent-%COMP%]{display:flex!important;flex-direction:column;justify-content:space-between;width:348px;height:204px;text-align:center;padding:12px 25px}mat-dialog-content[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{margin-bottom:10px}mat-dialog-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-family:Nexa;font-style:normal;font-weight:700;font-size:20px;line-height:110%;display:flex;align-items:center;color:#242731}mat-dialog-content[_ngcontent-%COMP%]   .action-content[_ngcontent-%COMP%]{display:flex;justify-content:space-around}mat-dialog-content[_ngcontent-%COMP%]   .confirm[_ngcontent-%COMP%]{background-color:#242731;color:#fff}mat-dialog-content[_ngcontent-%COMP%]   .cancel[_ngcontent-%COMP%]{box-shadow:none}"] });
        return DialogConfirmation;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(DialogConfirmation, [{
            type: core.Component,
            args: [{
                    selector: 'lib-dialog-confirmation',
                    templateUrl: './dialog-confirmation.component.html',
                    styleUrls: ['./dialog-confirmation.component.scss']
                }]
        }], function () { return [{ type: undefined, decorators: [{
                    type: core.Inject,
                    args: [dialog.MAT_DIALOG_DATA]
                }] }, { type: dialog.MatDialogRef }]; }, null); })();

    ;
    var onBoardingRoutes = [
        {
            path: 'onboarding',
            component: OnboardingComponent,
            children: [
                {
                    path: 'template/:id',
                    component: TemplateProfileCreateComponent,
                    canDeactivate: [CanDeactivateGuard],
                },
                {
                    path: 'template',
                    component: TemplateProfileListComponent
                },
                {
                    path: 'requests',
                    component: OnboardingListComponent
                },
                {
                    path: 'requests/:templateId/:onboardingId',
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
        OnboardingModule.ɵmod = core.ɵɵdefineNgModule({ type: OnboardingModule });
        OnboardingModule.ɵinj = core.ɵɵdefineInjector({ factory: function OnboardingModule_Factory(t) { return new (t || OnboardingModule)(core.ɵɵinject(OnboardingModule, 12)); }, providers: [OnboardingService, CanDeactivateGuard], imports: [[
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
                    ngxScrollTo.ScrollToModule.forRoot(),
                    dragDrop.DragDropModule,
                    card.MatCardModule,
                    dialog.MatDialogModule,
                    stepper.MatStepperModule,
                    progressBar.MatProgressBarModule,
                    tooltip.MatTooltipModule,
                    table$2.TableModule,
                    tabs.MatTabsModule,
                    ngxIntlTelInput.NgxIntlTelInputModule,
                    slideToggle.MatSlideToggleModule
                ],
                http.HttpClientModule,
                router.RouterModule,
                tabs.MatTabsModule] });
        return OnboardingModule;
    }());
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && core.ɵɵsetNgModuleScope(OnboardingModule, { declarations: [MaterialElevationDirective,
            OnboardingComponent,
            TemplateProfileCreateComponent,
            OnboardingCreateComponent,
            SubOnboardingCreateComponent,
            TemplateProfileListComponent,
            SubTemplateProfileComponent,
            ExitConfirmComponent,
            OnboardingListComponent,
            TypeComponent,
            OnboardingTableComponent,
            DialogCreateTemplateComponent,
            DialogCreateOnboardingComponent,
            OnboardingDetailComponent,
            LoadingComponent,
            DialogConfirmation], imports: [forms.FormsModule,
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
            table.MatTableModule, router.RouterModule, ngxScrollTo.ScrollToModule, dragDrop.DragDropModule,
            card.MatCardModule,
            dialog.MatDialogModule,
            stepper.MatStepperModule,
            progressBar.MatProgressBarModule,
            tooltip.MatTooltipModule,
            table$2.TableModule,
            tabs.MatTabsModule,
            ngxIntlTelInput.NgxIntlTelInputModule,
            slideToggle.MatSlideToggleModule], exports: [OnboardingComponent,
            http.HttpClientModule,
            TemplateProfileCreateComponent,
            TemplateProfileListComponent,
            OnboardingListComponent,
            OnboardingCreateComponent,
            DialogCreateOnboardingComponent,
            DialogConfirmation,
            router.RouterModule,
            tabs.MatTabsModule] }); })();
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(OnboardingModule, [{
            type: core.NgModule,
            args: [{
                    declarations: [
                        MaterialElevationDirective,
                        OnboardingComponent,
                        TemplateProfileCreateComponent,
                        OnboardingCreateComponent,
                        SubOnboardingCreateComponent,
                        TemplateProfileListComponent,
                        SubTemplateProfileComponent,
                        ExitConfirmComponent,
                        OnboardingListComponent,
                        TypeComponent,
                        OnboardingTableComponent,
                        DialogCreateTemplateComponent,
                        DialogCreateOnboardingComponent,
                        OnboardingDetailComponent,
                        LoadingComponent,
                        DialogConfirmation
                    ],
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
                        ngxScrollTo.ScrollToModule.forRoot(),
                        dragDrop.DragDropModule,
                        card.MatCardModule,
                        dialog.MatDialogModule,
                        stepper.MatStepperModule,
                        progressBar.MatProgressBarModule,
                        tooltip.MatTooltipModule,
                        table$2.TableModule,
                        tabs.MatTabsModule,
                        ngxIntlTelInput.NgxIntlTelInputModule,
                        slideToggle.MatSlideToggleModule
                    ],
                    providers: [OnboardingService, CanDeactivateGuard],
                    entryComponents: [ExitConfirmComponent, TypeComponent, DialogCreateTemplateComponent, DialogCreateOnboardingComponent, DialogConfirmation],
                    exports: [
                        OnboardingComponent,
                        http.HttpClientModule,
                        TemplateProfileCreateComponent,
                        TemplateProfileListComponent,
                        OnboardingListComponent,
                        OnboardingCreateComponent,
                        DialogCreateOnboardingComponent,
                        DialogConfirmation,
                        router.RouterModule,
                        tabs.MatTabsModule
                    ]
                }]
        }], function () { return [{ type: OnboardingModule, decorators: [{
                    type: core.Optional
                }, {
                    type: core.SkipSelf
                }] }]; }, null); })();

    exports.DialogConfirmation = DialogConfirmation;
    exports.DialogCreateOnboardingComponent = DialogCreateOnboardingComponent;
    exports.OnboardingComponent = OnboardingComponent;
    exports.OnboardingCreateComponent = OnboardingCreateComponent;
    exports.OnboardingListComponent = OnboardingListComponent;
    exports.OnboardingModule = OnboardingModule;
    exports.OnboardingService = OnboardingService;
    exports.TemplateProfileCreateComponent = TemplateProfileCreateComponent;
    exports.TemplateProfileListComponent = TemplateProfileListComponent;
    exports.onBoardingRoutes = onBoardingRoutes;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=onboarding.umd.js.map
