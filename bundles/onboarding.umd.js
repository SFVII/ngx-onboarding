(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common/http'), require('@angular/core'), require('rxjs'), require('@angular/router'), require('@angular/forms'), require('@angular/cdk/keycodes'), require('@angular/cdk/drag-drop'), require('@angular/material/dialog'), require('@angular/material/button'), require('@angular/material/icon'), require('@angular/material/form-field'), require('@angular/material/input'), require('@angular/common'), require('@angular/material/select'), require('@angular/material/checkbox'), require('@angular/material/core'), require('@nicky-lenaers/ngx-scroll-to'), require('@angular/material/tooltip'), require('@angular/material/chips'), require('@angular/material/radio'), require('@angular/material/paginator'), require('@angular/material/sort'), require('@angular/material/table'), require('@angular/platform-browser'), require('@angular/platform-browser/animations'), require('@angular/material/stepper'), require('@angular/material/grid-list'), require('@angular/cdk/table'), require('@angular/material/progress-bar'), require('@angular/material/card'), require('table'), require('@angular/material/tabs')) :
    typeof define === 'function' && define.amd ? define('onboarding', ['exports', '@angular/common/http', '@angular/core', 'rxjs', '@angular/router', '@angular/forms', '@angular/cdk/keycodes', '@angular/cdk/drag-drop', '@angular/material/dialog', '@angular/material/button', '@angular/material/icon', '@angular/material/form-field', '@angular/material/input', '@angular/common', '@angular/material/select', '@angular/material/checkbox', '@angular/material/core', '@nicky-lenaers/ngx-scroll-to', '@angular/material/tooltip', '@angular/material/chips', '@angular/material/radio', '@angular/material/paginator', '@angular/material/sort', '@angular/material/table', '@angular/platform-browser', '@angular/platform-browser/animations', '@angular/material/stepper', '@angular/material/grid-list', '@angular/cdk/table', '@angular/material/progress-bar', '@angular/material/card', 'table', '@angular/material/tabs'], factory) :
    (global = global || self, factory(global.onboarding = {}, global.ng.common.http, global.ng.core, global.rxjs, global.ng.router, global.ng.forms, global.ng.cdk.keycodes, global.ng.cdk.dragDrop, global.ng.material.dialog, global.ng.material.button, global.ng.material.icon, global.ng.material.formField, global.ng.material.input, global.ng.common, global.ng.material.select, global.ng.material.checkbox, global.ng.material.core, global.ngxScrollTo, global.ng.material.tooltip, global.ng.material.chips, global.ng.material.radio, global.ng.material.paginator, global.ng.material.sort, global.ng.material.table, global.ng.platformBrowser, global.ng.platformBrowser.animations, global.ng.material.stepper, global.ng.material.gridList, global.ng.cdk.table, global.ng.material.progressBar, global.ng.material.card, global.table$2, global.ng.material.tabs));
}(this, (function (exports, http, core, rxjs, router, forms, keycodes, dragDrop, dialog, button, icon, formField, input, common, select, checkbox, core$1, ngxScrollTo, tooltip, chips, radio, paginator, sort, table, platformBrowser, animations, stepper, gridList, table$1, progressBar, card, table$2, tabs) { 'use strict';

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

    function UpdateProfilComponent_div_17_mat_icon_1_Template(rf, ctx) { if (rf & 1) {
        var _r414 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "mat-icon", 20);
        core.ɵɵlistener("click", function UpdateProfilComponent_div_17_mat_icon_1_Template_mat_icon_click_0_listener($event) { core.ɵɵrestoreView(_r414); var icon_r412 = ctx.$implicit; var ctx_r413 = core.ɵɵnextContext(2); return ctx_r413.onSelectPicto($event, icon_r412.name); });
        core.ɵɵtext(1);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var icon_r412 = ctx.$implicit;
        var ctx_r411 = core.ɵɵnextContext(2);
        core.ɵɵstyleProp("color", ctx_r411.form.get("Picto").value === icon_r412.name ? "#830B6B" : "#000");
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate1(" ", icon_r412.name, " ");
    } }
    function UpdateProfilComponent_div_17_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "div", 18);
        core.ɵɵtemplate(1, UpdateProfilComponent_div_17_mat_icon_1_Template, 2, 3, "mat-icon", 19);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r409 = core.ɵɵnextContext();
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngForOf", ctx_r409.matIconList);
    } }
    function UpdateProfilComponent_mat_option_26_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "mat-option", 21);
        core.ɵɵtext(1);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var tag_r415 = ctx.$implicit;
        core.ɵɵproperty("value", tag_r415);
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate(tag_r415);
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
        UpdateProfilComponent.ɵfac = function UpdateProfilComponent_Factory(t) { return new (t || UpdateProfilComponent)(core.ɵɵdirectiveInject(dialog.MAT_DIALOG_DATA), core.ɵɵdirectiveInject(dialog.MatDialogRef)); };
        UpdateProfilComponent.ɵcmp = core.ɵɵdefineComponent({ type: UpdateProfilComponent, selectors: [["lib-update-profil"]], decls: 36, vars: 7, consts: [[3, "formGroup"], [1, "box-title"], [1, "box-title-content"], [1, "title"], [1, "profil-name-content"], ["mat-raised-button", "", "color", "primary", 1, "add-picto", 3, "click"], ["appearance", "outline", 1, "full-width"], ["type", "text", "matInput", "", "formControlName", "Name", "placeholder", "Ex. Manager"], ["class", "list-picto", 4, "ngIf"], ["type", "text", "matInput", "", "formControlName", "Description", "rows", "4", "placeholder", ""], ["appearance", "outline", 1, "full-width", "margin-top"], ["formControlName", "Tags", "required", ""], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "Status", 1, "form-field"], [1, "action"], [1, "link-create-profil"], ["mat-raised-button", "", "color", "primary", 1, "link-add-profil", 3, "click"], ["mat-raised-button", "", "color", "primary", 1, "link-add-profil", 3, "disabled", "click"], [1, "list-picto"], [3, "color", "click", 4, "ngFor", "ngForOf"], [3, "click"], [3, "value"]], template: function UpdateProfilComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵelementStart(0, "mat-dialog-content");
                core.ɵɵelementStart(1, "main");
                core.ɵɵelementStart(2, "form", 0);
                core.ɵɵelementStart(3, "div", 1);
                core.ɵɵelementStart(4, "div", 2);
                core.ɵɵelementStart(5, "h3", 3);
                core.ɵɵtext(6, "Modification votre profil d\u2019onboarding");
                core.ɵɵelementEnd();
                core.ɵɵelementStart(7, "p");
                core.ɵɵtext(8, "S\u00E9lectionnez l\u2019icon de votre choix et modifiez votre profil d\u2019onboarding");
                core.ɵɵelementEnd();
                core.ɵɵelementStart(9, "div", 4);
                core.ɵɵelementStart(10, "button", 5);
                core.ɵɵlistener("click", function UpdateProfilComponent_Template_button_click_10_listener($event) { return ctx.onShowPictoList($event); });
                core.ɵɵelementStart(11, "mat-icon");
                core.ɵɵtext(12);
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
                core.ɵɵelementStart(13, "mat-form-field", 6);
                core.ɵɵelementStart(14, "mat-label");
                core.ɵɵtext(15, "Nom de votre nouveau profil");
                core.ɵɵelementEnd();
                core.ɵɵelement(16, "input", 7);
                core.ɵɵelementEnd();
                core.ɵɵtemplate(17, UpdateProfilComponent_div_17_Template, 2, 1, "div", 8);
                core.ɵɵelementEnd();
                core.ɵɵelementStart(18, "mat-form-field", 6);
                core.ɵɵelementStart(19, "mat-label");
                core.ɵɵtext(20, "Description");
                core.ɵɵelementEnd();
                core.ɵɵelement(21, "textarea", 9);
                core.ɵɵelementEnd();
                core.ɵɵelementStart(22, "mat-form-field", 10);
                core.ɵɵelementStart(23, "mat-label");
                core.ɵɵtext(24, "Tags");
                core.ɵɵelementEnd();
                core.ɵɵelementStart(25, "mat-select", 11);
                core.ɵɵtemplate(26, UpdateProfilComponent_mat_option_26_Template, 2, 2, "mat-option", 12);
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
                core.ɵɵelementStart(27, "mat-checkbox", 13);
                core.ɵɵtext(28, "Active");
                core.ɵɵelementEnd();
                core.ɵɵelementStart(29, "div", 14);
                core.ɵɵelementStart(30, "div", 15);
                core.ɵɵelementStart(31, "button", 16);
                core.ɵɵlistener("click", function UpdateProfilComponent_Template_button_click_31_listener() { return ctx.onClose(); });
                core.ɵɵtext(32, " Annuler ");
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
                core.ɵɵelementStart(33, "div", 15);
                core.ɵɵelementStart(34, "button", 17);
                core.ɵɵlistener("click", function UpdateProfilComponent_Template_button_click_34_listener() { return ctx.onConfirm(); });
                core.ɵɵtext(35, " Modifier un profil ");
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
            } if (rf & 2) {
                core.ɵɵadvance(2);
                core.ɵɵproperty("formGroup", ctx.form);
                core.ɵɵadvance(10);
                core.ɵɵtextInterpolate(ctx.form.get("Picto").value === "" ? "contact_phone" : ctx.form.get("Picto").value);
                core.ɵɵadvance(5);
                core.ɵɵproperty("ngIf", ctx.isPictoListShow);
                core.ɵɵadvance(9);
                core.ɵɵproperty("ngForOf", ctx.tags);
                core.ɵɵadvance(8);
                core.ɵɵstyleProp("opacity", ctx.form.get("Name").value === "" || ctx.form.get("Tags").value == "" ? 0.4 : 1);
                core.ɵɵproperty("disabled", ctx.form.get("Name").value === "" || ctx.form.get("Tags").value == "");
            } }, directives: [dialog.MatDialogContent, forms.ɵangular_packages_forms_forms_y, forms.NgControlStatusGroup, forms.FormGroupDirective, button.MatButton, icon.MatIcon, formField.MatFormField, formField.MatLabel, input.MatInput, forms.DefaultValueAccessor, forms.NgControlStatus, forms.FormControlName, common.NgIf, select.MatSelect, forms.RequiredValidator, common.NgForOf, checkbox.MatCheckbox, core$1.MatOption], styles: ["main[_ngcontent-%COMP%]{width:100%;display:flex;flex-direction:column;align-items:center}main[_ngcontent-%COMP%]   .disabled[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{background-color:transparent!important}main[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{display:flex;height:100%;width:100%}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]{width:786px;background:no-repeat padding-box #fff;border:1px solid #dce4e9;border-radius:6px;opacity:1;margin:auto;padding:0 25px;-ms-grid-row-align:center;align-self:center}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{text-align:center;font:900 32px/48px Nexa;letter-spacing:0;color:#171f26}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font:18px/24px Nexa Text;letter-spacing:0;color:#171f26}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .profil-name-content[_ngcontent-%COMP%]{display:flex;align-items:center;position:relative;margin-bottom:10px}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .profil-name-content[_ngcontent-%COMP%]   .add-picto[_ngcontent-%COMP%]{margin-right:15px;min-width:50px;width:30px;padding:9px 12px;border:1px solid #171f26}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .profil-name-content[_ngcontent-%COMP%]   .add-picto[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin-right:10px}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .profil-name-content[_ngcontent-%COMP%]   .list-picto[_ngcontent-%COMP%]{position:absolute;height:200px;width:100%;background:no-repeat padding-box #fff;border:1px solid #171f26;border-radius:8px;top:100%;z-index:1}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .profil-name-content[_ngcontent-%COMP%]   .list-picto[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin:15px;border:none;font-size:40px}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .profil-name-content[_ngcontent-%COMP%]   .list-picto[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]:hover{color:#830b6b!important;cursor:pointer}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .box-title-content[_ngcontent-%COMP%]{width:100%;margin:25px auto}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font:900 32px/38px Nexa;letter-spacing:0;color:#171f26}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font:15px/26px Nexa Text;letter-spacing:0;color:#171f26;text-align:center}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .link-create-profil[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:center;margin-top:10px}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{text-align:center;border:1px solid #543cb6;border-radius:7px;padding:.7em 2em .5em;display:flex;align-items:center;background-color:transparent;font:bold 15px/17px Nexa;letter-spacing:0;color:#543cb6}main[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:space-between}.input-category-name[_ngcontent-%COMP%]{border:none;outline:0;text-align:left;font:bold 20px/48px Nexa Text;letter-spacing:0;color:#171f26}.full-width[_ngcontent-%COMP%]{width:100%}.field-action[_ngcontent-%COMP%]{width:10%}.field-size[_ngcontent-%COMP%]{width:90%;margin:auto 2% auto auto}.margin-top[_ngcontent-%COMP%]{margin-top:10px}.action[_ngcontent-%COMP%]{display:flex;align-items:center}"] });
        return UpdateProfilComponent;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(UpdateProfilComponent, [{
            type: core.Component,
            args: [{
                    selector: 'lib-update-profil',
                    templateUrl: './update-profil.component.html',
                    styleUrls: ['./update-profil.component.scss']
                }]
        }], function () { return [{ type: undefined, decorators: [{
                    type: core.Inject,
                    args: [dialog.MAT_DIALOG_DATA]
                }] }, { type: dialog.MatDialogRef }]; }, null); })();

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

    var _c0 = function () { return { standalone: true }; };
    function SubTemplateProfileComponent_div_34_Template(rf, ctx) { if (rf & 1) {
        var _r670 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "div", 28);
        core.ɵɵelementStart(1, "mat-checkbox", 24);
        core.ɵɵlistener("ngModelChange", function SubTemplateProfileComponent_div_34_Template_mat_checkbox_ngModelChange_1_listener($event) { core.ɵɵrestoreView(_r670); var ctx_r669 = core.ɵɵnextContext(); return ctx_r669.field.expandOnboarding = $event; });
        core.ɵɵtext(2, " Coch\u00E9 par default ");
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r660 = core.ɵɵnextContext();
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngModel", ctx_r660.field.expandOnboarding)("ngModelOptions", core.ɵɵpureFunction0(2, _c0));
    } }
    function SubTemplateProfileComponent_mat_form_field_35_mat_chip_6_Template(rf, ctx) { if (rf & 1) {
        var _r677 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "mat-chip", 35);
        core.ɵɵlistener("dblclick", function SubTemplateProfileComponent_mat_form_field_35_mat_chip_6_Template_mat_chip_dblclick_0_listener() { core.ɵɵrestoreView(_r677); var option_r675 = ctx.$implicit; var ctx_r676 = core.ɵɵnextContext(2); return ctx_r676.toggleChip(option_r675); })("click", function SubTemplateProfileComponent_mat_form_field_35_mat_chip_6_Template_mat_chip_click_0_listener() { core.ɵɵrestoreView(_r677); var option_r675 = ctx.$implicit; var ctx_r678 = core.ɵɵnextContext(2); return ctx_r678.onEditChip(option_r675); })("removed", function SubTemplateProfileComponent_mat_form_field_35_mat_chip_6_Template_mat_chip_removed_0_listener() { core.ɵɵrestoreView(_r677); var option_r675 = ctx.$implicit; var ctx_r679 = core.ɵɵnextContext(2); return ctx_r679.removeKeyword(option_r675, ctx_r679.i, ctx_r679.j); });
        core.ɵɵtext(1);
        core.ɵɵelementStart(2, "mat-icon", 36);
        core.ɵɵtext(3, "cancel");
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var option_r675 = ctx.$implicit;
        core.ɵɵproperty("selected", option_r675.checked)("value", option_r675.value)("removable", true);
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate1(" ", option_r675.value, " ");
    } }
    function SubTemplateProfileComponent_mat_form_field_35_Template(rf, ctx) { if (rf & 1) {
        var _r681 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "mat-form-field", 29);
        core.ɵɵelementStart(1, "mat-label");
        core.ɵɵtext(2, " Valeur par default ");
        core.ɵɵelementEnd();
        core.ɵɵelementStart(3, "mat-chip-list", 30, 31);
        core.ɵɵlistener("cdkDropListDropped", function SubTemplateProfileComponent_mat_form_field_35_Template_mat_chip_list_cdkDropListDropped_3_listener($event) { core.ɵɵrestoreView(_r681); var ctx_r680 = core.ɵɵnextContext(); return ctx_r680.drop($event); });
        core.ɵɵtemplate(6, SubTemplateProfileComponent_mat_form_field_35_mat_chip_6_Template, 4, 4, "mat-chip", 32);
        core.ɵɵelementStart(7, "input", 33, 34);
        core.ɵɵlistener("matChipInputTokenEnd", function SubTemplateProfileComponent_mat_form_field_35_Template_input_matChipInputTokenEnd_7_listener($event) { core.ɵɵrestoreView(_r681); var ctx_r682 = core.ɵɵnextContext(); return ctx_r682.addKeywordFromInput($event, ctx_r682.i, ctx_r682.j); })("keyup", function SubTemplateProfileComponent_mat_form_field_35_Template_input_keyup_7_listener($event) { core.ɵɵrestoreView(_r681); var ctx_r683 = core.ɵɵnextContext(); return ctx_r683.keyUp($event, ctx_r683.i, ctx_r683.j); })("ngModelChange", function SubTemplateProfileComponent_mat_form_field_35_Template_input_ngModelChange_7_listener($event) { core.ɵɵrestoreView(_r681); var ctx_r684 = core.ɵɵnextContext(); return ctx_r684.currentChip = $event; });
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var _r672 = core.ɵɵreference(5);
        var ctx_r661 = core.ɵɵnextContext();
        core.ɵɵadvance(3);
        core.ɵɵproperty("cdkDropListData", ctx_r661.field.defaultValue);
        core.ɵɵadvance(3);
        core.ɵɵproperty("ngForOf", ctx_r661.field.defaultValue);
        core.ɵɵadvance(1);
        core.ɵɵproperty("matChipInputFor", _r672)("matChipInputAddOnBlur", true)("matChipInputSeparatorKeyCodes", ctx_r661.separatorKeysCodes)("ngModel", ctx_r661.currentChip)("ngModelOptions", core.ɵɵpureFunction0(7, _c0));
    } }
    function SubTemplateProfileComponent_mat_form_field_36_Template(rf, ctx) { if (rf & 1) {
        var _r686 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "mat-form-field", 1);
        core.ɵɵelementStart(1, "mat-label");
        core.ɵɵtext(2, "Valeur par default");
        core.ɵɵelementEnd();
        core.ɵɵelementStart(3, "input", 37);
        core.ɵɵlistener("ngModelChange", function SubTemplateProfileComponent_mat_form_field_36_Template_input_ngModelChange_3_listener($event) { core.ɵɵrestoreView(_r686); var ctx_r685 = core.ɵɵnextContext(); return ctx_r685.field.defaultValue = $event; });
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r662 = core.ɵɵnextContext();
        core.ɵɵadvance(3);
        core.ɵɵproperty("ngModelOptions", core.ɵɵpureFunction0(2, _c0))("ngModel", ctx_r662.field.defaultValue);
    } }
    function SubTemplateProfileComponent_mat_form_field_37_Template(rf, ctx) { if (rf & 1) {
        var _r688 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "mat-form-field", 1);
        core.ɵɵelementStart(1, "mat-label");
        core.ɵɵtext(2, "Valeur par default");
        core.ɵɵelementEnd();
        core.ɵɵelementStart(3, "input", 38);
        core.ɵɵlistener("ngModelChange", function SubTemplateProfileComponent_mat_form_field_37_Template_input_ngModelChange_3_listener($event) { core.ɵɵrestoreView(_r688); var ctx_r687 = core.ɵɵnextContext(); return ctx_r687.field.defaultValue = $event; });
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r663 = core.ɵɵnextContext();
        core.ɵɵstyleProp("opacity", ctx_r663.field.type !== "tel" ? 1 : 0);
        core.ɵɵadvance(3);
        core.ɵɵproperty("type", ctx_r663.field.type)("disabled", ctx_r663.field.type === "tel")("ngModelOptions", core.ɵɵpureFunction0(6, _c0))("ngModel", ctx_r663.field.defaultValue);
    } }
    function SubTemplateProfileComponent_mat_checkbox_39_Template(rf, ctx) { if (rf & 1) {
        var _r690 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "mat-checkbox", 24);
        core.ɵɵlistener("ngModelChange", function SubTemplateProfileComponent_mat_checkbox_39_Template_mat_checkbox_ngModelChange_0_listener($event) { core.ɵɵrestoreView(_r690); var ctx_r689 = core.ɵɵnextContext(); return ctx_r689.field.isConditional = $event; })("ngModelChange", function SubTemplateProfileComponent_mat_checkbox_39_Template_mat_checkbox_ngModelChange_0_listener() { core.ɵɵrestoreView(_r690); var ctx_r691 = core.ɵɵnextContext(); return ctx_r691.getConditionValues(); });
        core.ɵɵtext(1, " \u00E0 condition ");
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r664 = core.ɵɵnextContext();
        core.ɵɵproperty("ngModel", ctx_r664.field.isConditional)("ngModelOptions", core.ɵɵpureFunction0(2, _c0));
    } }
    function SubTemplateProfileComponent_div_40_mat_option_5_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "mat-option", 46);
        core.ɵɵtext(1);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var cond_r694 = ctx.$implicit;
        core.ɵɵproperty("value", cond_r694);
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate(cond_r694.label);
    } }
    function SubTemplateProfileComponent_div_40_mat_radio_button_7_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "mat-radio-button", 47);
        core.ɵɵtext(1);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var item_r695 = ctx.$implicit;
        core.ɵɵproperty("value", item_r695.value);
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate1(" ", item_r695.value, " ");
    } }
    function SubTemplateProfileComponent_div_40_Template(rf, ctx) { if (rf & 1) {
        var _r697 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "div", 39);
        core.ɵɵelementStart(1, "mat-form-field", 40);
        core.ɵɵelementStart(2, "mat-label");
        core.ɵɵtext(3, "Champ de condition :");
        core.ɵɵelementEnd();
        core.ɵɵelementStart(4, "mat-select", 41);
        core.ɵɵlistener("ngModelChange", function SubTemplateProfileComponent_div_40_Template_mat_select_ngModelChange_4_listener($event) { core.ɵɵrestoreView(_r697); var ctx_r696 = core.ɵɵnextContext(); return ctx_r696.field.conditionLocation = $event; });
        core.ɵɵtemplate(5, SubTemplateProfileComponent_div_40_mat_option_5_Template, 2, 2, "mat-option", 42);
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementStart(6, "mat-radio-group", 43);
        core.ɵɵlistener("ngModelChange", function SubTemplateProfileComponent_div_40_Template_mat_radio_group_ngModelChange_6_listener($event) { core.ɵɵrestoreView(_r697); var ctx_r698 = core.ɵɵnextContext(); return ctx_r698.field.conditionValue = $event; });
        core.ɵɵtemplate(7, SubTemplateProfileComponent_div_40_mat_radio_button_7_Template, 2, 2, "mat-radio-button", 44);
        core.ɵɵelementEnd();
        core.ɵɵelementStart(8, "button", 45);
        core.ɵɵlistener("click", function SubTemplateProfileComponent_div_40_Template_button_click_8_listener($event) { core.ɵɵrestoreView(_r697); var ctx_r699 = core.ɵɵnextContext(); return ctx_r699.onShowCondition($event); });
        core.ɵɵelementStart(9, "mat-icon");
        core.ɵɵtext(10, "close");
        core.ɵɵelementEnd();
        core.ɵɵtext(11, "Fermer ");
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r665 = core.ɵɵnextContext();
        core.ɵɵadvance(4);
        core.ɵɵproperty("ngModel", ctx_r665.field.conditionLocation)("ngModelOptions", core.ɵɵpureFunction0(6, _c0));
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngForOf", ctx_r665.conditionData);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngModel", ctx_r665.field.conditionValue)("ngModelOptions", core.ɵɵpureFunction0(7, _c0));
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngForOf", ctx_r665.field.conditionLocation.possibleValues);
    } }
    function SubTemplateProfileComponent_mat_icon_41_Template(rf, ctx) { if (rf & 1) {
        var _r701 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "mat-icon", 48);
        core.ɵɵlistener("click", function SubTemplateProfileComponent_mat_icon_41_Template_mat_icon_click_0_listener() { core.ɵɵrestoreView(_r701); var ctx_r700 = core.ɵɵnextContext(); return ctx_r700.onShowCondition(); });
        core.ɵɵtext(1, "help ");
        core.ɵɵelementEnd();
    } }
    function SubTemplateProfileComponent_mat_icon_48_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "mat-icon");
        core.ɵɵtext(1, "expand_less");
        core.ɵɵelementEnd();
    } }
    function SubTemplateProfileComponent_mat_icon_49_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "mat-icon");
        core.ɵɵtext(1, "expand_more");
        core.ɵɵelementEnd();
    } }
    var _c1 = [[["", 8, "child"]]];
    var _c2 = function () { return ["select", "radio", "checkbox_multiple"]; };
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
            this.conditionData = [];
            this.chipControl = new forms.FormControl(new Set());
            this.separatorKeysCodes = [keycodes.ENTER, keycodes.COMMA, keycodes.SEMICOLON];
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
        SubTemplateProfileComponent.ɵcmp = core.ɵɵdefineComponent({ type: SubTemplateProfileComponent, selectors: [["lib-sub-category"]], inputs: { field: "field", length: "length", i: "i", j: "j", conditionData: "conditionData" }, outputs: { onAddKeywordFromInput: "onAddKeywordFromInput", onKeyPress: "onKeyPress", onDrop: "onDrop", onAddNewField: "onAddNewField", onRemoveField: "onRemoveField", onChangeType: "onChangeType", onRemoveKeyword: "onRemoveKeyword", onAddNewSubLevelField: "onAddNewSubLevelField", onExpendMore: "onExpendMore", onChangeLabel: "onChangeLabel", onCheckedChip: "onCheckedChip", onCheckedDefault: "onCheckedDefault", onGetConditionValues: "onGetConditionValues" }, ngContentSelectors: _c3, decls: 51, vars: 35, consts: [[1, "field-item"], ["appearance", "outline", 1, "form-field", "field-size"], ["type", "text", "matInput", "", "required", "", "placeholder", "", 3, "readonly", "ngModelOptions", "ngModel", "ngModelChange"], ["appearance", "outline", 1, "form-field", "field-size", 2, "display", "none"], ["required", "", 3, "disabled", "ngModel", "ngModelOptions", "ngModelChange"], ["value", "text"], ["value", "textarea"], ["value", "radio"], ["value", "select"], ["value", "checkbox"], ["value", "checkbox_multiple"], ["value", "email"], ["value", "password"], ["value", "date"], ["value", "tel"], [3, "ngSwitch"], ["class", "flex-auto w-30 field-size", 4, "ngSwitchCase"], ["class", "flex-auto w-30 field-size", "appearance", "outline", 4, "ngSwitchCase"], ["class", "form-field field-size", "appearance", "outline", 4, "ngSwitchCase"], ["class", "form-field field-size", "appearance", "outline", 3, "opacity", 4, "ngSwitchDefault"], [1, "checkbox-condition"], ["class", "form-field", 3, "ngModel", "ngModelOptions", "ngModelChange", 4, "ngIf"], ["class", "condition-container", 4, "ngIf"], ["class", "condition-help", "matTooltip", "Param\u00E8trer la condition ici !", 3, "click", 4, "ngIf"], [1, "form-field", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["mat-mini-fab", "", "color", "success", "matTooltip", "Ajouter une sous-cat\u00E9gorie", 1, "transparent-button", 3, "disabled", "click"], ["mat-mini-fab", "", "color", "primary", 1, "expand-button", 3, "disabled", "click"], [4, "ngIf"], [1, "flex-auto", "w-30", "field-size"], ["appearance", "outline", 1, "flex-auto", "w-30", "field-size"], ["cdkDropList", "", "aria-label", "Video keywords; let index=index", "multiple", "", "selectable", "", 3, "cdkDropListData", "cdkDropListDropped"], ["childList", "cdkDropList", "chipList", ""], ["style", "min-height: 25px;", "cdkDrag", "", 3, "selected", "value", "removable", "dblclick", "click", "removed", 4, "ngFor", "ngForOf"], ["placeholder", "add...", 3, "matChipInputFor", "matChipInputAddOnBlur", "matChipInputSeparatorKeyCodes", "ngModel", "ngModelOptions", "matChipInputTokenEnd", "keyup", "ngModelChange"], ["chipsInput", ""], ["cdkDrag", "", 2, "min-height", "25px", 3, "selected", "value", "removable", "dblclick", "click", "removed"], ["matChipRemove", ""], ["type", "text", "matInput", "", "placeholder", "Description...", 3, "ngModelOptions", "ngModel", "ngModelChange"], ["matInput", "", "placeholder", "", 3, "type", "disabled", "ngModelOptions", "ngModel", "ngModelChange"], [1, "condition-container"], ["appearance", "outline", 1, "form-field", "field-size", "full-width"], ["required", "", 3, "ngModel", "ngModelOptions", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], ["aria-labelledby", "example-radio-group-label", 1, "example-radio-group", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["class", "example-radio-button", 3, "value", 4, "ngFor", "ngForOf"], ["mat-button", "", "color", "primary", 3, "click"], [3, "value"], [1, "example-radio-button", 3, "value"], ["matTooltip", "Param\u00E8trer la condition ici !", 1, "condition-help", 3, "click"]], template: function SubTemplateProfileComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵprojectionDef(_c1);
                core.ɵɵelementStart(0, "div", 0);
                core.ɵɵelementStart(1, "mat-form-field", 1);
                core.ɵɵelementStart(2, "mat-label");
                core.ɵɵtext(3, "Label");
                core.ɵɵelementEnd();
                core.ɵɵelementStart(4, "input", 2);
                core.ɵɵlistener("ngModelChange", function SubTemplateProfileComponent_Template_input_ngModelChange_4_listener($event) { return ctx.field.label = $event; })("ngModelChange", function SubTemplateProfileComponent_Template_input_ngModelChange_4_listener() { return ctx.changeLabel(ctx.field.label, ctx.field.key); });
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
                core.ɵɵelementStart(5, "mat-form-field", 3);
                core.ɵɵelementStart(6, "mat-label");
                core.ɵɵtext(7, "Cl\u00E9 du champ");
                core.ɵɵelementEnd();
                core.ɵɵelementStart(8, "input", 2);
                core.ɵɵlistener("ngModelChange", function SubTemplateProfileComponent_Template_input_ngModelChange_8_listener($event) { return ctx.field.key = $event; });
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
                core.ɵɵelementStart(9, "mat-form-field", 1);
                core.ɵɵelementStart(10, "mat-label");
                core.ɵɵtext(11, "Type");
                core.ɵɵelementEnd();
                core.ɵɵelementStart(12, "mat-select", 4);
                core.ɵɵlistener("ngModelChange", function SubTemplateProfileComponent_Template_mat_select_ngModelChange_12_listener($event) { return ctx.field.type = $event; })("ngModelChange", function SubTemplateProfileComponent_Template_mat_select_ngModelChange_12_listener() { return ctx.changeType(ctx.field.type, ctx.i, ctx.j); });
                core.ɵɵelementStart(13, "mat-option", 5);
                core.ɵɵtext(14, "Text(80)");
                core.ɵɵelementEnd();
                core.ɵɵelementStart(15, "mat-option", 6);
                core.ɵɵtext(16, "Text(80+)");
                core.ɵɵelementEnd();
                core.ɵɵelementStart(17, "mat-option", 7);
                core.ɵɵtext(18, "Radio");
                core.ɵɵelementEnd();
                core.ɵɵelementStart(19, "mat-option", 8);
                core.ɵɵtext(20, "Selecteur");
                core.ɵɵelementEnd();
                core.ɵɵelementStart(21, "mat-option", 9);
                core.ɵɵtext(22, "Checkbox");
                core.ɵɵelementEnd();
                core.ɵɵelementStart(23, "mat-option", 10);
                core.ɵɵtext(24, "Checkbox multiple");
                core.ɵɵelementEnd();
                core.ɵɵelementStart(25, "mat-option", 11);
                core.ɵɵtext(26, "Email");
                core.ɵɵelementEnd();
                core.ɵɵelementStart(27, "mat-option", 12);
                core.ɵɵtext(28, "Password");
                core.ɵɵelementEnd();
                core.ɵɵelementStart(29, "mat-option", 13);
                core.ɵɵtext(30, "Date");
                core.ɵɵelementEnd();
                core.ɵɵelementStart(31, "mat-option", 14);
                core.ɵɵtext(32, "Phone");
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
                core.ɵɵelementContainerStart(33, 15);
                core.ɵɵtemplate(34, SubTemplateProfileComponent_div_34_Template, 3, 3, "div", 16);
                core.ɵɵtemplate(35, SubTemplateProfileComponent_mat_form_field_35_Template, 9, 8, "mat-form-field", 17);
                core.ɵɵtemplate(36, SubTemplateProfileComponent_mat_form_field_36_Template, 4, 3, "mat-form-field", 18);
                core.ɵɵtemplate(37, SubTemplateProfileComponent_mat_form_field_37_Template, 4, 7, "mat-form-field", 19);
                core.ɵɵelementContainerEnd();
                core.ɵɵelementStart(38, "div", 20);
                core.ɵɵtemplate(39, SubTemplateProfileComponent_mat_checkbox_39_Template, 2, 3, "mat-checkbox", 21);
                core.ɵɵtemplate(40, SubTemplateProfileComponent_div_40_Template, 12, 8, "div", 22);
                core.ɵɵelementEnd();
                core.ɵɵtemplate(41, SubTemplateProfileComponent_mat_icon_41_Template, 2, 0, "mat-icon", 23);
                core.ɵɵelementStart(42, "mat-checkbox", 24);
                core.ɵɵlistener("ngModelChange", function SubTemplateProfileComponent_Template_mat_checkbox_ngModelChange_42_listener($event) { return ctx.field.isMandatory = $event; });
                core.ɵɵtext(43, " obligatoire ");
                core.ɵɵelementEnd();
                core.ɵɵelementStart(44, "button", 25);
                core.ɵɵlistener("click", function SubTemplateProfileComponent_Template_button_click_44_listener($event) { return ctx.addNewSubLevelField($event); });
                core.ɵɵelementStart(45, "mat-icon");
                core.ɵɵtext(46, "device_hub");
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
                core.ɵɵelementStart(47, "button", 26);
                core.ɵɵlistener("click", function SubTemplateProfileComponent_Template_button_click_47_listener($event) { return ctx.expendMore($event, ctx.field); });
                core.ɵɵtemplate(48, SubTemplateProfileComponent_mat_icon_48_Template, 2, 0, "mat-icon", 27);
                core.ɵɵtemplate(49, SubTemplateProfileComponent_mat_icon_49_Template, 2, 0, "mat-icon", 27);
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
                core.ɵɵprojection(50);
            } if (rf & 2) {
                core.ɵɵadvance(1);
                core.ɵɵclassMap(!ctx.field.editable ? "readonly" : "");
                core.ɵɵadvance(3);
                core.ɵɵproperty("readonly", !ctx.field.editable)("ngModelOptions", core.ɵɵpureFunction0(30, _c0))("ngModel", ctx.field.label);
                core.ɵɵadvance(1);
                core.ɵɵclassMap(!ctx.field.editable ? "readonly" : "");
                core.ɵɵadvance(3);
                core.ɵɵproperty("readonly", !ctx.field.editable)("ngModelOptions", core.ɵɵpureFunction0(31, _c0))("ngModel", ctx.field.key);
                core.ɵɵadvance(4);
                core.ɵɵproperty("disabled", !ctx.field.editable)("ngModel", ctx.field.type)("ngModelOptions", core.ɵɵpureFunction0(32, _c0));
                core.ɵɵadvance(21);
                core.ɵɵproperty("ngSwitch", ctx.field.type);
                core.ɵɵadvance(1);
                core.ɵɵproperty("ngSwitchCase", "checkbox");
                core.ɵɵadvance(1);
                core.ɵɵproperty("ngSwitchCase", core.ɵɵpureFunction0(33, _c2).includes(ctx.field.type) ? ctx.field.type : !ctx.field.type);
                core.ɵɵadvance(1);
                core.ɵɵproperty("ngSwitchCase", "textarea");
                core.ɵɵadvance(3);
                core.ɵɵproperty("ngIf", ctx.field.editable);
                core.ɵɵadvance(1);
                core.ɵɵproperty("ngIf", ctx.showCondition);
                core.ɵɵadvance(1);
                core.ɵɵproperty("ngIf", ctx.field.isConditional);
                core.ɵɵadvance(1);
                core.ɵɵproperty("ngModel", ctx.field.isMandatory)("ngModelOptions", core.ɵɵpureFunction0(34, _c0));
                core.ɵɵadvance(2);
                core.ɵɵstyleProp("opacity", ctx.field.subLevel > 2 || !ctx.field.editable ? 0 : 1);
                core.ɵɵproperty("disabled", ctx.field.subLevel > 2 || !ctx.field.editable);
                core.ɵɵadvance(3);
                core.ɵɵstyleProp("opacity", ctx.field.forms && ctx.field.forms.length > 0 ? 1 : 0);
                core.ɵɵproperty("disabled", !(ctx.field.forms && ctx.field.forms.length > 0));
                core.ɵɵadvance(1);
                core.ɵɵproperty("ngIf", !ctx.field.expandMore);
                core.ɵɵadvance(1);
                core.ɵɵproperty("ngIf", ctx.field.expandMore);
            } }, directives: [formField.MatFormField, formField.MatLabel, input.MatInput, forms.DefaultValueAccessor, forms.RequiredValidator, forms.NgControlStatus, forms.NgModel, select.MatSelect, core$1.MatOption, common.NgSwitch, common.NgSwitchCase, common.NgSwitchDefault, common.NgIf, checkbox.MatCheckbox, button.MatButton, tooltip.MatTooltip, icon.MatIcon, chips.MatChipList, dragDrop.CdkDropList, common.NgForOf, chips.MatChipInput, chips.MatChip, dragDrop.CdkDrag, chips.MatChipRemove, radio.MatRadioGroup, radio.MatRadioButton], styles: [".container[_ngcontent-%COMP%]{max-width:98%;margin:50px auto auto;padding-bottom:50px}.container[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:space-between}.input-category-name[_ngcontent-%COMP%]{font-size:15px;font-weight:500}.full-width[_ngcontent-%COMP%]{width:100%}.field-item[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;width:100%;flex-wrap:wrap}.field-item[_ngcontent-%COMP%]   .button-action[_ngcontent-%COMP%]{background-color:#6fe8d7;height:100%;margin:auto 15px auto auto;display:flex}.field-item[_ngcontent-%COMP%]   .button-action[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{box-shadow:none;background-color:transparent;color:#fff}.field-action[_ngcontent-%COMP%]{width:10%}hr[_ngcontent-%COMP%]{margin:50px 0}  .mat-form-field-appearance-fill .mat-form-field-flex{background-color:#fff}.category-action[_ngcontent-%COMP%]{display:flex;width:100%}.delete-field[_ngcontent-%COMP%]{margin:auto 2%}.radio-group[_ngcontent-%COMP%]   .mat-radio-button[_ngcontent-%COMP%]{margin-right:10px}.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary[_ngcontent-%COMP%]{background-color:#3f51b5;color:#fff;min-height:20px;font-size:10px}.move-icons[_ngcontent-%COMP%]{cursor:move}.category-item[_ngcontent-%COMP%]{display:flex;align-items:baseline;width:100%;border:1px solid #dce4e9;border-radius:8px}  .readonly.mat-form-field-appearance-outline .mat-form-field-outline{color:transparent!important}.field-content[_ngcontent-%COMP%]{width:100%}.cdk-drag-preview[_ngcontent-%COMP%]{box-sizing:border-box;border-radius:4px;box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.cdk-drag-placeholder[_ngcontent-%COMP%]{opacity:0}.cdk-drag-animating[_ngcontent-%COMP%], .example-list.cdk-drop-list-dragging[_ngcontent-%COMP%]   .category-item[_ngcontent-%COMP%]:not(.cdk-drag-placeholder){transition:transform 250ms cubic-bezier(0,0,.2,1)}.add-button-container[_ngcontent-%COMP%]{background:no-repeat padding-box #fff;border:1px dashed #dce4e9;border-radius:8px;margin-top:10px;padding:10px;display:flex;justify-content:center;align-items:center;width:98%;margin-left:0;margin-bottom:22px}.add-button-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{display:flex;align-items:center;background-color:transparent;border:none;cursor:pointer;font:17px/26px Nexa Text;letter-spacing:0;color:#c2c8d5;box-shadow:none}.expand-button[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%]{font-size:48px;margin-top:-20px;margin-right:15px}.transparent-button[_ngcontent-%COMP%]{background-color:transparent!important;box-shadow:none!important;width:40px!important;padding:0!important;margin:0!important;min-width:auto!important}.expand-button[_ngcontent-%COMP%]{color:#5a607f!important;background-color:transparent!important;box-shadow:none!important}.checkbox-condition[_ngcontent-%COMP%]{position:relative}.checkbox-condition[_ngcontent-%COMP%]   .condition-container[_ngcontent-%COMP%]{position:absolute;top:30px;width:500px;height:150px;background-color:#fff;border:1px dashed #dce4e9;z-index:1;left:0;border-radius:5px}.checkbox-condition[_ngcontent-%COMP%]   .condition-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{position:absolute;bottom:5px;left:0}.condition-help[_ngcontent-%COMP%]{cursor:pointer}.cdk-overlay-pane[_ngcontent-%COMP%]{width:100%}"] });
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
            }], conditionData: [{
                type: core.Input
            }] }); })();

    function TemplateProfileCreateComponent_div_2_div_14_mat_icon_1_Template(rf, ctx) { if (rf & 1) {
        var _r423 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "mat-icon", 19);
        core.ɵɵlistener("click", function TemplateProfileCreateComponent_div_2_div_14_mat_icon_1_Template_mat_icon_click_0_listener($event) { core.ɵɵrestoreView(_r423); var icon_r421 = ctx.$implicit; var ctx_r422 = core.ɵɵnextContext(3); return ctx_r422.onSelectPicto($event, icon_r421.name); });
        core.ɵɵtext(1);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var icon_r421 = ctx.$implicit;
        var ctx_r420 = core.ɵɵnextContext(3);
        core.ɵɵstyleProp("color", ctx_r420.form.get("Picto").value === icon_r421.name ? "#830B6B" : "#000");
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate1(" ", icon_r421.name, " ");
    } }
    function TemplateProfileCreateComponent_div_2_div_14_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "div", 17);
        core.ɵɵtemplate(1, TemplateProfileCreateComponent_div_2_div_14_mat_icon_1_Template, 2, 3, "mat-icon", 18);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r418 = core.ɵɵnextContext(2);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngForOf", ctx_r418.matIconList);
    } }
    function TemplateProfileCreateComponent_div_2_mat_option_23_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "mat-option", 20);
        core.ɵɵtext(1);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var tag_r424 = ctx.$implicit;
        core.ɵɵproperty("value", tag_r424);
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate(tag_r424);
    } }
    function TemplateProfileCreateComponent_div_2_Template(rf, ctx) { if (rf & 1) {
        var _r426 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "div", 3);
        core.ɵɵelementStart(1, "div", 4);
        core.ɵɵelementStart(2, "h3", 5);
        core.ɵɵtext(3, "Cr\u00E9ation d\u2019un nouveau profil d\u2019onboarding");
        core.ɵɵelementEnd();
        core.ɵɵelementStart(4, "p");
        core.ɵɵtext(5, "S\u00E9lectionnez l\u2019icon de votre choix et indiquez le nom de votre nouveau profil d\u2019onboarding");
        core.ɵɵelementEnd();
        core.ɵɵelementStart(6, "div", 6);
        core.ɵɵelementStart(7, "button", 7);
        core.ɵɵlistener("click", function TemplateProfileCreateComponent_div_2_Template_button_click_7_listener($event) { core.ɵɵrestoreView(_r426); var ctx_r425 = core.ɵɵnextContext(); return ctx_r425.onShowPictoList($event); });
        core.ɵɵelementStart(8, "mat-icon");
        core.ɵɵtext(9);
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementStart(10, "mat-form-field", 8);
        core.ɵɵelementStart(11, "mat-label");
        core.ɵɵtext(12, "Nom de votre nouveau profil");
        core.ɵɵelementEnd();
        core.ɵɵelement(13, "input", 9);
        core.ɵɵelementEnd();
        core.ɵɵtemplate(14, TemplateProfileCreateComponent_div_2_div_14_Template, 2, 1, "div", 10);
        core.ɵɵelementEnd();
        core.ɵɵelementStart(15, "mat-form-field", 8);
        core.ɵɵelementStart(16, "mat-label");
        core.ɵɵtext(17, "Description");
        core.ɵɵelementEnd();
        core.ɵɵelement(18, "textarea", 11);
        core.ɵɵelementEnd();
        core.ɵɵelementStart(19, "mat-form-field", 8);
        core.ɵɵelementStart(20, "mat-label");
        core.ɵɵtext(21, "Tags");
        core.ɵɵelementEnd();
        core.ɵɵelementStart(22, "mat-select", 12);
        core.ɵɵtemplate(23, TemplateProfileCreateComponent_div_2_mat_option_23_Template, 2, 2, "mat-option", 13);
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementStart(24, "mat-checkbox", 14);
        core.ɵɵtext(25, "Active");
        core.ɵɵelementEnd();
        core.ɵɵelementStart(26, "div", 15);
        core.ɵɵelementStart(27, "button", 16);
        core.ɵɵlistener("click", function TemplateProfileCreateComponent_div_2_Template_button_click_27_listener() { core.ɵɵrestoreView(_r426); var ctx_r427 = core.ɵɵnextContext(); return ctx_r427.onShowCategory(); });
        core.ɵɵtext(28);
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r416 = core.ɵɵnextContext();
        core.ɵɵadvance(9);
        core.ɵɵtextInterpolate(ctx_r416.form.get("Picto").value === "" ? "contact_phone" : ctx_r416.form.get("Picto").value);
        core.ɵɵadvance(5);
        core.ɵɵproperty("ngIf", ctx_r416.isPictoListShow);
        core.ɵɵadvance(9);
        core.ɵɵproperty("ngForOf", ctx_r416.tags);
        core.ɵɵadvance(4);
        core.ɵɵstyleProp("opacity", ctx_r416.form.get("Name").value === "" || ctx_r416.form.get("Tags").value == "" ? 0.4 : 1);
        core.ɵɵproperty("disabled", ctx_r416.form.get("Name").value === "" || ctx_r416.form.get("Tags").value == "");
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate1(" ", ctx_r416.id !== "0" ? "Modifier un profil" : "Cr\u00E9er un nouveau profil", " ");
    } }
    function TemplateProfileCreateComponent_div_3_li_9_span_2_Template(rf, ctx) { if (rf & 1) {
        var _r438 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "span", 37);
        core.ɵɵlistener("click", function TemplateProfileCreateComponent_div_3_li_9_span_2_Template_span_click_0_listener() { core.ɵɵrestoreView(_r438); var ctx_r437 = core.ɵɵnextContext(); var cat_r431 = ctx_r437.$implicit; var i_r432 = ctx_r437.index; var ctx_r436 = core.ɵɵnextContext(2); return ctx_r436.onExpendMore({ field: cat_r431 }, i_r432); });
        core.ɵɵtext(1);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var cat_r431 = core.ɵɵnextContext().$implicit;
        core.ɵɵproperty("ngxScrollTo", "#" + cat_r431.name);
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate(cat_r431.name);
    } }
    var _c0$1 = function () { return { standalone: true }; };
    function TemplateProfileCreateComponent_div_3_li_9_input_3_Template(rf, ctx) { if (rf & 1) {
        var _r442 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "input", 38, 39);
        core.ɵɵlistener("blur", function TemplateProfileCreateComponent_div_3_li_9_input_3_Template_input_blur_0_listener() { core.ɵɵrestoreView(_r442); var ctx_r441 = core.ɵɵnextContext(3); return ctx_r441.onEdit(); })("ngModelChange", function TemplateProfileCreateComponent_div_3_li_9_input_3_Template_input_ngModelChange_0_listener($event) { core.ɵɵrestoreView(_r442); var cat_r431 = core.ɵɵnextContext().$implicit; return cat_r431.name = $event; })("ngModelChange", function TemplateProfileCreateComponent_div_3_li_9_input_3_Template_input_ngModelChange_0_listener() { core.ɵɵrestoreView(_r442); var ctx_r446 = core.ɵɵnextContext(); var i_r432 = ctx_r446.index; var cat_r431 = ctx_r446.$implicit; var ctx_r445 = core.ɵɵnextContext(2); return ctx_r445.onEditCategoryName(i_r432, cat_r431.name); });
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var cat_r431 = core.ɵɵnextContext().$implicit;
        core.ɵɵproperty("ngModel", cat_r431.name)("ngModelOptions", core.ɵɵpureFunction0(2, _c0$1));
    } }
    function TemplateProfileCreateComponent_div_3_li_9_ng_container_7_ng_container_1_Template(rf, ctx) { if (rf & 1) {
        var _r453 = core.ɵɵgetCurrentView();
        core.ɵɵelementContainerStart(0);
        core.ɵɵelementStart(1, "li", 19);
        core.ɵɵlistener("click", function TemplateProfileCreateComponent_div_3_li_9_ng_container_7_ng_container_1_Template_li_click_1_listener() { core.ɵɵrestoreView(_r453); var ctx_r452 = core.ɵɵnextContext(); var sub_r448 = ctx_r452.$implicit; var j_r449 = ctx_r452.index; var i_r432 = core.ɵɵnextContext().index; var ctx_r451 = core.ɵɵnextContext(2); return ctx_r451.onExpendMore({ field: sub_r448 }, i_r432, j_r449); });
        core.ɵɵelementStart(2, "span", 41);
        core.ɵɵtext(3);
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var ctx_r455 = core.ɵɵnextContext();
        var sub_r448 = ctx_r455.$implicit;
        var j_r449 = ctx_r455.index;
        core.ɵɵadvance(1);
        core.ɵɵclassMap(sub_r448.expandMore ? "sub-title active" : "sub-title");
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngxScrollTo", "#" + sub_r448.key);
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate2("", j_r449 + 1, ". ", sub_r448.label, "");
    } }
    function TemplateProfileCreateComponent_div_3_li_9_ng_container_7_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainerStart(0);
        core.ɵɵtemplate(1, TemplateProfileCreateComponent_div_3_li_9_ng_container_7_ng_container_1_Template, 4, 5, "ng-container", 40);
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var sub_r448 = ctx.$implicit;
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", sub_r448 == null ? null : sub_r448.forms);
    } }
    function TemplateProfileCreateComponent_div_3_li_9_Template(rf, ctx) { if (rf & 1) {
        var _r457 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "li", 33);
        core.ɵɵelementStart(1, "span");
        core.ɵɵtemplate(2, TemplateProfileCreateComponent_div_3_li_9_span_2_Template, 2, 2, "span", 34);
        core.ɵɵtemplate(3, TemplateProfileCreateComponent_div_3_li_9_input_3_Template, 2, 3, "input", 35);
        core.ɵɵelementStart(4, "mat-icon", 19);
        core.ɵɵlistener("click", function TemplateProfileCreateComponent_div_3_li_9_Template_mat_icon_click_4_listener() { core.ɵɵrestoreView(_r457); var i_r432 = ctx.index; var ctx_r456 = core.ɵɵnextContext(2); return ctx_r456.onPassInEditMode(i_r432); });
        core.ɵɵtext(5, "edit");
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementStart(6, "ol");
        core.ɵɵtemplate(7, TemplateProfileCreateComponent_div_3_li_9_ng_container_7_Template, 2, 1, "ng-container", 36);
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var cat_r431 = ctx.$implicit;
        var i_r432 = ctx.index;
        var ctx_r428 = core.ɵɵnextContext(2);
        core.ɵɵadvance(1);
        core.ɵɵclassMap(ctx_r428.editIndex === i_r432 ? "edition-mode" : "");
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", ctx_r428.editIndex !== i_r432);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", ctx_r428.editIndex === i_r432);
        core.ɵɵadvance(4);
        core.ɵɵproperty("ngForOf", cat_r431.forms);
    } }
    function TemplateProfileCreateComponent_div_3_div_19_mat_select_11_mat_option_1_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "mat-option", 20);
        core.ɵɵtext(1);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var select_r465 = ctx.$implicit;
        core.ɵɵproperty("value", select_r465.value);
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate1(" ", select_r465.value, "");
    } }
    function TemplateProfileCreateComponent_div_3_div_19_mat_select_11_Template(rf, ctx) { if (rf & 1) {
        var _r468 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "mat-select", 52);
        core.ɵɵlistener("valueChange", function TemplateProfileCreateComponent_div_3_div_19_mat_select_11_Template_mat_select_valueChange_0_listener($event) { core.ɵɵrestoreView(_r468); var category_r458 = core.ɵɵnextContext().$implicit; return category_r458.selector.value = $event; })("ngModelChange", function TemplateProfileCreateComponent_div_3_div_19_mat_select_11_Template_mat_select_ngModelChange_0_listener($event) { core.ɵɵrestoreView(_r468); var category_r458 = core.ɵɵnextContext().$implicit; return category_r458.selector.value = $event; });
        core.ɵɵtemplate(1, TemplateProfileCreateComponent_div_3_div_19_mat_select_11_mat_option_1_Template, 2, 2, "mat-option", 13);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var category_r458 = core.ɵɵnextContext().$implicit;
        core.ɵɵproperty("value", category_r458.selector.value)("ngModel", category_r458.selector.value)("ngModelOptions", core.ɵɵpureFunction0(4, _c0$1));
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngForOf", category_r458.selector.defaultValue);
    } }
    function TemplateProfileCreateComponent_div_3_div_19_div_12_ng_container_2_div_1_div_9_div_1_div_2_div_9_div_1_div_2_div_10_Template(rf, ctx) { if (rf & 1) {
        var _r494 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "div", 70);
        core.ɵɵelementStart(1, "button", 71);
        core.ɵɵlistener("click", function TemplateProfileCreateComponent_div_3_div_19_div_12_ng_container_2_div_1_div_9_div_1_div_2_div_9_div_1_div_2_div_10_Template_button_click_1_listener() { core.ɵɵrestoreView(_r494); var k_r483 = core.ɵɵnextContext(4).index; var j_r476 = core.ɵɵnextContext(3).index; var i_r459 = core.ɵɵnextContext(3).index; var ctx_r492 = core.ɵɵnextContext(2); return ctx_r492.onAddNewField(i_r459, j_r476, k_r483); });
        core.ɵɵelementStart(2, "mat-icon");
        core.ɵɵtext(3, " add_box ");
        core.ɵɵelementEnd();
        core.ɵɵelementStart(4, "span");
        core.ɵɵtext(5, "Ajouter un champ");
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var l_r490 = core.ɵɵnextContext().index;
        var child_r482 = core.ɵɵnextContext(3).$implicit;
        core.ɵɵadvance(1);
        core.ɵɵstyleProp("opacity", (child_r482 == null ? null : child_r482.forms == null ? null : child_r482.forms.length) - 1 === l_r490 ? 1 : 0);
        core.ɵɵproperty("disabled", (child_r482 == null ? null : child_r482.forms == null ? null : child_r482.forms.length) - 1 !== l_r490);
    } }
    function TemplateProfileCreateComponent_div_3_div_19_div_12_ng_container_2_div_1_div_9_div_1_div_2_div_9_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
        var _r501 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "div", 67);
        core.ɵɵelementStart(1, "div", 57);
        core.ɵɵelementStart(2, "div", 58);
        core.ɵɵelementStart(3, "div", 69);
        core.ɵɵelementStart(4, "button", 60);
        core.ɵɵlistener("click", function TemplateProfileCreateComponent_div_3_div_19_div_12_ng_container_2_div_1_div_9_div_1_div_2_div_9_div_1_div_2_Template_button_click_4_listener() { core.ɵɵrestoreView(_r501); var l_r490 = ctx.index; var k_r483 = core.ɵɵnextContext(3).index; var j_r476 = core.ɵɵnextContext(3).index; var i_r459 = core.ɵɵnextContext(3).index; var ctx_r499 = core.ɵɵnextContext(2); return ctx_r499.onRemoveField(i_r459, j_r476, k_r483, l_r490); });
        core.ɵɵelementStart(5, "mat-icon");
        core.ɵɵtext(6, " delete ");
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementStart(7, "div", 61);
        core.ɵɵelementStart(8, "lib-sub-category", 62);
        core.ɵɵlistener("onAddKeywordFromInput", function TemplateProfileCreateComponent_div_3_div_19_div_12_ng_container_2_div_1_div_9_div_1_div_2_div_9_div_1_div_2_Template_lib_sub_category_onAddKeywordFromInput_8_listener($event) { core.ɵɵrestoreView(_r501); var l_r490 = ctx.index; var k_r483 = core.ɵɵnextContext(3).index; var j_r476 = core.ɵɵnextContext(3).index; var i_r459 = core.ɵɵnextContext(3).index; var ctx_r504 = core.ɵɵnextContext(2); return ctx_r504.addKeywordFromInput($event.event, $event.prev, i_r459, j_r476, k_r483, l_r490); })("onKeyPress", function TemplateProfileCreateComponent_div_3_div_19_div_12_ng_container_2_div_1_div_9_div_1_div_2_div_9_div_1_div_2_Template_lib_sub_category_onKeyPress_8_listener($event) { core.ɵɵrestoreView(_r501); var l_r490 = ctx.index; var k_r483 = core.ɵɵnextContext(3).index; var j_r476 = core.ɵɵnextContext(3).index; var i_r459 = core.ɵɵnextContext(3).index; var ctx_r508 = core.ɵɵnextContext(2); return ctx_r508.onKeyPress($event.event, i_r459, j_r476, k_r483, l_r490); })("onAddNewField", function TemplateProfileCreateComponent_div_3_div_19_div_12_ng_container_2_div_1_div_9_div_1_div_2_div_9_div_1_div_2_Template_lib_sub_category_onAddNewField_8_listener() { core.ɵɵrestoreView(_r501); var k_r483 = core.ɵɵnextContext(3).index; var j_r476 = core.ɵɵnextContext(3).index; var i_r459 = core.ɵɵnextContext(3).index; var ctx_r512 = core.ɵɵnextContext(2); return ctx_r512.onAddNewField(i_r459, j_r476, k_r483); })("onRemoveField", function TemplateProfileCreateComponent_div_3_div_19_div_12_ng_container_2_div_1_div_9_div_1_div_2_div_9_div_1_div_2_Template_lib_sub_category_onRemoveField_8_listener() { core.ɵɵrestoreView(_r501); var l_r490 = ctx.index; var k_r483 = core.ɵɵnextContext(3).index; var j_r476 = core.ɵɵnextContext(3).index; var i_r459 = core.ɵɵnextContext(3).index; var ctx_r516 = core.ɵɵnextContext(2); return ctx_r516.onRemoveField(i_r459, j_r476, k_r483, l_r490); })("onChangeType", function TemplateProfileCreateComponent_div_3_div_19_div_12_ng_container_2_div_1_div_9_div_1_div_2_div_9_div_1_div_2_Template_lib_sub_category_onChangeType_8_listener() { core.ɵɵrestoreView(_r501); var c2_r489 = ctx.$implicit; var l_r490 = ctx.index; var k_r483 = core.ɵɵnextContext(3).index; var j_r476 = core.ɵɵnextContext(3).index; var i_r459 = core.ɵɵnextContext(3).index; var ctx_r520 = core.ɵɵnextContext(2); return ctx_r520.onChangeType(c2_r489.type, i_r459, j_r476, k_r483, l_r490); })("onRemoveKeyword", function TemplateProfileCreateComponent_div_3_div_19_div_12_ng_container_2_div_1_div_9_div_1_div_2_div_9_div_1_div_2_Template_lib_sub_category_onRemoveKeyword_8_listener($event) { core.ɵɵrestoreView(_r501); var l_r490 = ctx.index; var k_r483 = core.ɵɵnextContext(3).index; var j_r476 = core.ɵɵnextContext(3).index; var i_r459 = core.ɵɵnextContext(3).index; var ctx_r524 = core.ɵɵnextContext(2); return ctx_r524.removeKeyword($event.event, i_r459, j_r476, k_r483, l_r490); })("onAddNewSubLevelField", function TemplateProfileCreateComponent_div_3_div_19_div_12_ng_container_2_div_1_div_9_div_1_div_2_div_9_div_1_div_2_Template_lib_sub_category_onAddNewSubLevelField_8_listener() { core.ɵɵrestoreView(_r501); var l_r490 = ctx.index; var k_r483 = core.ɵɵnextContext(3).index; var j_r476 = core.ɵɵnextContext(3).index; var i_r459 = core.ɵɵnextContext(3).index; var ctx_r528 = core.ɵɵnextContext(2); return ctx_r528.onAddNewSubLevelField(i_r459, j_r476, k_r483, l_r490); })("onExpendMore", function TemplateProfileCreateComponent_div_3_div_19_div_12_ng_container_2_div_1_div_9_div_1_div_2_div_9_div_1_div_2_Template_lib_sub_category_onExpendMore_8_listener($event) { core.ɵɵrestoreView(_r501); var l_r490 = ctx.index; var k_r483 = core.ɵɵnextContext(3).index; var j_r476 = core.ɵɵnextContext(3).index; var i_r459 = core.ɵɵnextContext(3).index; var ctx_r532 = core.ɵɵnextContext(2); return ctx_r532.onExpendMore($event, i_r459, j_r476, k_r483, l_r490); })("onChangeLabel", function TemplateProfileCreateComponent_div_3_div_19_div_12_ng_container_2_div_1_div_9_div_1_div_2_div_9_div_1_div_2_Template_lib_sub_category_onChangeLabel_8_listener($event) { core.ɵɵrestoreView(_r501); var l_r490 = ctx.index; var k_r483 = core.ɵɵnextContext(3).index; var j_r476 = core.ɵɵnextContext(3).index; var i_r459 = core.ɵɵnextContext(3).index; var ctx_r536 = core.ɵɵnextContext(2); return ctx_r536.onChangeLabel($event, i_r459, j_r476, k_r483, l_r490); })("onCheckedChip", function TemplateProfileCreateComponent_div_3_div_19_div_12_ng_container_2_div_1_div_9_div_1_div_2_div_9_div_1_div_2_Template_lib_sub_category_onCheckedChip_8_listener($event) { core.ɵɵrestoreView(_r501); var l_r490 = ctx.index; var k_r483 = core.ɵɵnextContext(3).index; var j_r476 = core.ɵɵnextContext(3).index; var i_r459 = core.ɵɵnextContext(3).index; var ctx_r540 = core.ɵɵnextContext(2); return ctx_r540.onCheckedChip($event, i_r459, j_r476, k_r483, l_r490); })("onDrop", function TemplateProfileCreateComponent_div_3_div_19_div_12_ng_container_2_div_1_div_9_div_1_div_2_div_9_div_1_div_2_Template_lib_sub_category_onDrop_8_listener($event) { core.ɵɵrestoreView(_r501); var ctx_r544 = core.ɵɵnextContext(11); return ctx_r544.drop($event); })("onCheckedDefault", function TemplateProfileCreateComponent_div_3_div_19_div_12_ng_container_2_div_1_div_9_div_1_div_2_div_9_div_1_div_2_Template_lib_sub_category_onCheckedDefault_8_listener($event) { core.ɵɵrestoreView(_r501); var l_r490 = ctx.index; var k_r483 = core.ɵɵnextContext(3).index; var j_r476 = core.ɵɵnextContext(3).index; var i_r459 = core.ɵɵnextContext(3).index; var ctx_r545 = core.ɵɵnextContext(2); return ctx_r545.onCheckedDefault($event, i_r459, j_r476, k_r483, l_r490); })("onGetConditionValues", function TemplateProfileCreateComponent_div_3_div_19_div_12_ng_container_2_div_1_div_9_div_1_div_2_div_9_div_1_div_2_Template_lib_sub_category_onGetConditionValues_8_listener() { core.ɵɵrestoreView(_r501); var ctx_r549 = core.ɵɵnextContext(11); return ctx_r549.getConditionValues(); });
        core.ɵɵelement(9, "div", 65);
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵtemplate(10, TemplateProfileCreateComponent_div_3_div_19_div_12_ng_container_2_div_1_div_9_div_1_div_2_div_9_div_1_div_2_div_10_Template, 6, 3, "div", 64);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var c2_r489 = ctx.$implicit;
        var l_r490 = ctx.index;
        var ctx_r551 = core.ɵɵnextContext(3);
        var child_r482 = ctx_r551.$implicit;
        var k_r483 = ctx_r551.index;
        var field_r475 = core.ɵɵnextContext(3).$implicit;
        var ctx_r488 = core.ɵɵnextContext(5);
        core.ɵɵproperty("id", c2_r489.key);
        core.ɵɵadvance(4);
        core.ɵɵproperty("disabled", !field_r475.deleteable);
        core.ɵɵadvance(4);
        core.ɵɵproperty("field", c2_r489)("length", child_r482 == null ? null : child_r482.forms == null ? null : child_r482.forms.length)("i", k_r483)("j", l_r490)("conditionData", ctx_r488.conditionData);
        core.ɵɵadvance(2);
        core.ɵɵproperty("ngIf", (child_r482 == null ? null : child_r482.forms == null ? null : child_r482.forms.length) - 1 === l_r490);
    } }
    function TemplateProfileCreateComponent_div_3_div_19_div_12_ng_container_2_div_1_div_9_div_1_div_2_div_9_div_1_Template(rf, ctx) { if (rf & 1) {
        var _r553 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "div", 53, 54);
        core.ɵɵlistener("cdkDropListDropped", function TemplateProfileCreateComponent_div_3_div_19_div_12_ng_container_2_div_1_div_9_div_1_div_2_div_9_div_1_Template_div_cdkDropListDropped_0_listener($event) { core.ɵɵrestoreView(_r553); var ctx_r552 = core.ɵɵnextContext(10); return ctx_r552.drop($event); });
        core.ɵɵtemplate(2, TemplateProfileCreateComponent_div_3_div_19_div_12_ng_container_2_div_1_div_9_div_1_div_2_div_9_div_1_div_2_Template, 11, 8, "div", 66);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var child_r482 = core.ɵɵnextContext(2).$implicit;
        core.ɵɵproperty("cdkDropListData", child_r482.forms);
        core.ɵɵadvance(2);
        core.ɵɵproperty("ngForOf", child_r482.forms);
    } }
    function TemplateProfileCreateComponent_div_3_div_19_div_12_ng_container_2_div_1_div_9_div_1_div_2_div_9_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "div", 65);
        core.ɵɵtemplate(1, TemplateProfileCreateComponent_div_3_div_19_div_12_ng_container_2_div_1_div_9_div_1_div_2_div_9_div_1_Template, 3, 2, "div", 50);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var child_r482 = core.ɵɵnextContext().$implicit;
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", child_r482.forms);
    } }
    function TemplateProfileCreateComponent_div_3_div_19_div_12_ng_container_2_div_1_div_9_div_1_div_2_div_10_Template(rf, ctx) { if (rf & 1) {
        var _r558 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "div", 70);
        core.ɵɵelementStart(1, "button", 71);
        core.ɵɵlistener("click", function TemplateProfileCreateComponent_div_3_div_19_div_12_ng_container_2_div_1_div_9_div_1_div_2_div_10_Template_button_click_1_listener() { core.ɵɵrestoreView(_r558); var j_r476 = core.ɵɵnextContext(4).index; var i_r459 = core.ɵɵnextContext(3).index; var ctx_r556 = core.ɵɵnextContext(2); return ctx_r556.onAddNewField(i_r459, j_r476); });
        core.ɵɵelementStart(2, "mat-icon");
        core.ɵɵtext(3, "add_box");
        core.ɵɵelementEnd();
        core.ɵɵelementStart(4, "span");
        core.ɵɵtext(5, "Ajouter un champ");
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var k_r483 = core.ɵɵnextContext().index;
        var field_r475 = core.ɵɵnextContext(3).$implicit;
        core.ɵɵadvance(1);
        core.ɵɵstyleProp("opacity", (field_r475 == null ? null : field_r475.forms == null ? null : field_r475.forms.length) - 1 === k_r483 ? 1 : 0);
        core.ɵɵproperty("disabled", (field_r475 == null ? null : field_r475.forms == null ? null : field_r475.forms.length) - 1 !== k_r483);
    } }
    function TemplateProfileCreateComponent_div_3_div_19_div_12_ng_container_2_div_1_div_9_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
        var _r564 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "div", 67);
        core.ɵɵelementStart(1, "div", 57);
        core.ɵɵelementStart(2, "div", 58);
        core.ɵɵelementStart(3, "div", 68);
        core.ɵɵelementStart(4, "button", 60);
        core.ɵɵlistener("click", function TemplateProfileCreateComponent_div_3_div_19_div_12_ng_container_2_div_1_div_9_div_1_div_2_Template_button_click_4_listener() { core.ɵɵrestoreView(_r564); var k_r483 = ctx.index; var j_r476 = core.ɵɵnextContext(3).index; var i_r459 = core.ɵɵnextContext(3).index; var ctx_r562 = core.ɵɵnextContext(2); return ctx_r562.onRemoveField(i_r459, j_r476, k_r483); });
        core.ɵɵelementStart(5, "mat-icon");
        core.ɵɵtext(6, " delete");
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementStart(7, "div", 61);
        core.ɵɵelementStart(8, "lib-sub-category", 62);
        core.ɵɵlistener("onAddKeywordFromInput", function TemplateProfileCreateComponent_div_3_div_19_div_12_ng_container_2_div_1_div_9_div_1_div_2_Template_lib_sub_category_onAddKeywordFromInput_8_listener($event) { core.ɵɵrestoreView(_r564); var k_r483 = ctx.index; var j_r476 = core.ɵɵnextContext(3).index; var i_r459 = core.ɵɵnextContext(3).index; var ctx_r566 = core.ɵɵnextContext(2); return ctx_r566.addKeywordFromInput($event.event, $event.prev, i_r459, j_r476, k_r483); })("onKeyPress", function TemplateProfileCreateComponent_div_3_div_19_div_12_ng_container_2_div_1_div_9_div_1_div_2_Template_lib_sub_category_onKeyPress_8_listener($event) { core.ɵɵrestoreView(_r564); var k_r483 = ctx.index; var j_r476 = core.ɵɵnextContext(3).index; var i_r459 = core.ɵɵnextContext(3).index; var ctx_r569 = core.ɵɵnextContext(2); return ctx_r569.onKeyPress($event.event, i_r459, j_r476, k_r483); })("onAddNewField", function TemplateProfileCreateComponent_div_3_div_19_div_12_ng_container_2_div_1_div_9_div_1_div_2_Template_lib_sub_category_onAddNewField_8_listener() { core.ɵɵrestoreView(_r564); var j_r476 = core.ɵɵnextContext(3).index; var i_r459 = core.ɵɵnextContext(3).index; var ctx_r572 = core.ɵɵnextContext(2); return ctx_r572.onAddNewField(i_r459, j_r476); })("onRemoveField", function TemplateProfileCreateComponent_div_3_div_19_div_12_ng_container_2_div_1_div_9_div_1_div_2_Template_lib_sub_category_onRemoveField_8_listener() { core.ɵɵrestoreView(_r564); var k_r483 = ctx.index; var j_r476 = core.ɵɵnextContext(3).index; var i_r459 = core.ɵɵnextContext(3).index; var ctx_r575 = core.ɵɵnextContext(2); return ctx_r575.onRemoveField(i_r459, j_r476, k_r483); })("onChangeType", function TemplateProfileCreateComponent_div_3_div_19_div_12_ng_container_2_div_1_div_9_div_1_div_2_Template_lib_sub_category_onChangeType_8_listener() { core.ɵɵrestoreView(_r564); var child_r482 = ctx.$implicit; var k_r483 = ctx.index; var j_r476 = core.ɵɵnextContext(3).index; var i_r459 = core.ɵɵnextContext(3).index; var ctx_r578 = core.ɵɵnextContext(2); return ctx_r578.onChangeType(child_r482.type, i_r459, j_r476, k_r483); })("onRemoveKeyword", function TemplateProfileCreateComponent_div_3_div_19_div_12_ng_container_2_div_1_div_9_div_1_div_2_Template_lib_sub_category_onRemoveKeyword_8_listener($event) { core.ɵɵrestoreView(_r564); var k_r483 = ctx.index; var j_r476 = core.ɵɵnextContext(3).index; var i_r459 = core.ɵɵnextContext(3).index; var ctx_r581 = core.ɵɵnextContext(2); return ctx_r581.removeKeyword($event.event, i_r459, j_r476, k_r483); })("onAddNewSubLevelField", function TemplateProfileCreateComponent_div_3_div_19_div_12_ng_container_2_div_1_div_9_div_1_div_2_Template_lib_sub_category_onAddNewSubLevelField_8_listener() { core.ɵɵrestoreView(_r564); var k_r483 = ctx.index; var j_r476 = core.ɵɵnextContext(3).index; var i_r459 = core.ɵɵnextContext(3).index; var ctx_r584 = core.ɵɵnextContext(2); return ctx_r584.onAddNewSubLevelField(i_r459, j_r476, k_r483); })("onExpendMore", function TemplateProfileCreateComponent_div_3_div_19_div_12_ng_container_2_div_1_div_9_div_1_div_2_Template_lib_sub_category_onExpendMore_8_listener($event) { core.ɵɵrestoreView(_r564); var k_r483 = ctx.index; var j_r476 = core.ɵɵnextContext(3).index; var i_r459 = core.ɵɵnextContext(3).index; var ctx_r587 = core.ɵɵnextContext(2); return ctx_r587.onExpendMore($event, i_r459, j_r476, k_r483); })("onChangeLabel", function TemplateProfileCreateComponent_div_3_div_19_div_12_ng_container_2_div_1_div_9_div_1_div_2_Template_lib_sub_category_onChangeLabel_8_listener($event) { core.ɵɵrestoreView(_r564); var k_r483 = ctx.index; var j_r476 = core.ɵɵnextContext(3).index; var i_r459 = core.ɵɵnextContext(3).index; var ctx_r590 = core.ɵɵnextContext(2); return ctx_r590.onChangeLabel($event, i_r459, j_r476, k_r483); })("onCheckedChip", function TemplateProfileCreateComponent_div_3_div_19_div_12_ng_container_2_div_1_div_9_div_1_div_2_Template_lib_sub_category_onCheckedChip_8_listener($event) { core.ɵɵrestoreView(_r564); var k_r483 = ctx.index; var j_r476 = core.ɵɵnextContext(3).index; var i_r459 = core.ɵɵnextContext(3).index; var ctx_r593 = core.ɵɵnextContext(2); return ctx_r593.onCheckedChip($event, i_r459, j_r476, k_r483); })("onDrop", function TemplateProfileCreateComponent_div_3_div_19_div_12_ng_container_2_div_1_div_9_div_1_div_2_Template_lib_sub_category_onDrop_8_listener($event) { core.ɵɵrestoreView(_r564); var ctx_r596 = core.ɵɵnextContext(8); return ctx_r596.drop($event); })("onCheckedDefault", function TemplateProfileCreateComponent_div_3_div_19_div_12_ng_container_2_div_1_div_9_div_1_div_2_Template_lib_sub_category_onCheckedDefault_8_listener($event) { core.ɵɵrestoreView(_r564); var k_r483 = ctx.index; var j_r476 = core.ɵɵnextContext(3).index; var i_r459 = core.ɵɵnextContext(3).index; var ctx_r597 = core.ɵɵnextContext(2); return ctx_r597.onCheckedDefault($event, i_r459, j_r476, k_r483); })("onGetConditionValues", function TemplateProfileCreateComponent_div_3_div_19_div_12_ng_container_2_div_1_div_9_div_1_div_2_Template_lib_sub_category_onGetConditionValues_8_listener() { core.ɵɵrestoreView(_r564); var ctx_r600 = core.ɵɵnextContext(8); return ctx_r600.getConditionValues(); });
        core.ɵɵtemplate(9, TemplateProfileCreateComponent_div_3_div_19_div_12_ng_container_2_div_1_div_9_div_1_div_2_div_9_Template, 2, 1, "div", 63);
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵtemplate(10, TemplateProfileCreateComponent_div_3_div_19_div_12_ng_container_2_div_1_div_9_div_1_div_2_div_10_Template, 6, 3, "div", 64);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var child_r482 = ctx.$implicit;
        var k_r483 = ctx.index;
        var ctx_r601 = core.ɵɵnextContext(3);
        var field_r475 = ctx_r601.$implicit;
        var j_r476 = ctx_r601.index;
        var ctx_r481 = core.ɵɵnextContext(5);
        core.ɵɵproperty("id", child_r482.key);
        core.ɵɵadvance(4);
        core.ɵɵproperty("disabled", !child_r482.deleteable);
        core.ɵɵadvance(1);
        core.ɵɵstyleProp("opacity", !child_r482.deleteable ? 0 : 1);
        core.ɵɵadvance(3);
        core.ɵɵproperty("field", child_r482)("length", field_r475 == null ? null : field_r475.forms == null ? null : field_r475.forms.length)("i", j_r476)("j", k_r483)("conditionData", ctx_r481.conditionData);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", child_r482.expandMore);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", (field_r475 == null ? null : field_r475.forms == null ? null : field_r475.forms.length) - 1 === k_r483);
    } }
    function TemplateProfileCreateComponent_div_3_div_19_div_12_ng_container_2_div_1_div_9_div_1_Template(rf, ctx) { if (rf & 1) {
        var _r603 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "div", 53, 54);
        core.ɵɵlistener("cdkDropListDropped", function TemplateProfileCreateComponent_div_3_div_19_div_12_ng_container_2_div_1_div_9_div_1_Template_div_cdkDropListDropped_0_listener($event) { core.ɵɵrestoreView(_r603); var ctx_r602 = core.ɵɵnextContext(7); return ctx_r602.drop($event); });
        core.ɵɵtemplate(2, TemplateProfileCreateComponent_div_3_div_19_div_12_ng_container_2_div_1_div_9_div_1_div_2_Template, 11, 11, "div", 66);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var field_r475 = core.ɵɵnextContext(2).$implicit;
        core.ɵɵproperty("cdkDropListData", field_r475.forms);
        core.ɵɵadvance(2);
        core.ɵɵproperty("ngForOf", field_r475.forms);
    } }
    function TemplateProfileCreateComponent_div_3_div_19_div_12_ng_container_2_div_1_div_9_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "div", 65);
        core.ɵɵtemplate(1, TemplateProfileCreateComponent_div_3_div_19_div_12_ng_container_2_div_1_div_9_div_1_Template, 3, 2, "div", 50);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var field_r475 = core.ɵɵnextContext().$implicit;
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", field_r475.forms);
    } }
    function TemplateProfileCreateComponent_div_3_div_19_div_12_ng_container_2_div_1_div_10_Template(rf, ctx) { if (rf & 1) {
        var _r608 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "div", 70);
        core.ɵɵelementStart(1, "button", 71);
        core.ɵɵlistener("click", function TemplateProfileCreateComponent_div_3_div_19_div_12_ng_container_2_div_1_div_10_Template_button_click_1_listener() { core.ɵɵrestoreView(_r608); var i_r459 = core.ɵɵnextContext(4).index; var ctx_r606 = core.ɵɵnextContext(2); return ctx_r606.onAddNewField(i_r459); });
        core.ɵɵelementStart(2, "mat-icon");
        core.ɵɵtext(3, "add_box");
        core.ɵɵelementEnd();
        core.ɵɵelementStart(4, "span");
        core.ɵɵtext(5, "Ajouter un champ");
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var j_r476 = core.ɵɵnextContext().index;
        var category_r458 = core.ɵɵnextContext(3).$implicit;
        core.ɵɵadvance(1);
        core.ɵɵstyleProp("opacity", (category_r458 == null ? null : category_r458.forms == null ? null : category_r458.forms.length) - 1 === j_r476 ? 1 : 0);
        core.ɵɵproperty("disabled", (category_r458 == null ? null : category_r458.forms == null ? null : category_r458.forms.length) - 1 !== j_r476);
    } }
    function TemplateProfileCreateComponent_div_3_div_19_div_12_ng_container_2_div_1_Template(rf, ctx) { if (rf & 1) {
        var _r613 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "div", 56);
        core.ɵɵelementStart(1, "div", 57);
        core.ɵɵelementStart(2, "div", 58);
        core.ɵɵelementStart(3, "div", 59);
        core.ɵɵelementStart(4, "button", 60);
        core.ɵɵlistener("click", function TemplateProfileCreateComponent_div_3_div_19_div_12_ng_container_2_div_1_Template_button_click_4_listener() { core.ɵɵrestoreView(_r613); var j_r476 = ctx.index; var i_r459 = core.ɵɵnextContext(3).index; var ctx_r611 = core.ɵɵnextContext(2); return ctx_r611.onRemoveField(i_r459, j_r476); });
        core.ɵɵelementStart(5, "mat-icon");
        core.ɵɵtext(6, "delete ");
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementStart(7, "div", 61);
        core.ɵɵelementStart(8, "lib-sub-category", 62);
        core.ɵɵlistener("onAddKeywordFromInput", function TemplateProfileCreateComponent_div_3_div_19_div_12_ng_container_2_div_1_Template_lib_sub_category_onAddKeywordFromInput_8_listener($event) { core.ɵɵrestoreView(_r613); var j_r476 = ctx.index; var i_r459 = core.ɵɵnextContext(3).index; var ctx_r614 = core.ɵɵnextContext(2); return ctx_r614.addKeywordFromInput($event.event, $event.prev, i_r459, j_r476); })("onKeyPress", function TemplateProfileCreateComponent_div_3_div_19_div_12_ng_container_2_div_1_Template_lib_sub_category_onKeyPress_8_listener($event) { core.ɵɵrestoreView(_r613); var j_r476 = ctx.index; var i_r459 = core.ɵɵnextContext(3).index; var ctx_r616 = core.ɵɵnextContext(2); return ctx_r616.onKeyPress($event.event, i_r459, j_r476); })("onAddNewField", function TemplateProfileCreateComponent_div_3_div_19_div_12_ng_container_2_div_1_Template_lib_sub_category_onAddNewField_8_listener() { core.ɵɵrestoreView(_r613); var i_r459 = core.ɵɵnextContext(3).index; var ctx_r618 = core.ɵɵnextContext(2); return ctx_r618.onAddNewField(i_r459); })("onRemoveField", function TemplateProfileCreateComponent_div_3_div_19_div_12_ng_container_2_div_1_Template_lib_sub_category_onRemoveField_8_listener() { core.ɵɵrestoreView(_r613); var j_r476 = ctx.index; var i_r459 = core.ɵɵnextContext(3).index; var ctx_r620 = core.ɵɵnextContext(2); return ctx_r620.onRemoveField(i_r459, j_r476); })("onChangeType", function TemplateProfileCreateComponent_div_3_div_19_div_12_ng_container_2_div_1_Template_lib_sub_category_onChangeType_8_listener() { core.ɵɵrestoreView(_r613); var field_r475 = ctx.$implicit; var j_r476 = ctx.index; var i_r459 = core.ɵɵnextContext(3).index; var ctx_r622 = core.ɵɵnextContext(2); return ctx_r622.onChangeType(field_r475.type, i_r459, j_r476); })("onRemoveKeyword", function TemplateProfileCreateComponent_div_3_div_19_div_12_ng_container_2_div_1_Template_lib_sub_category_onRemoveKeyword_8_listener($event) { core.ɵɵrestoreView(_r613); var j_r476 = ctx.index; var i_r459 = core.ɵɵnextContext(3).index; var ctx_r624 = core.ɵɵnextContext(2); return ctx_r624.removeKeyword($event.event, i_r459, j_r476); })("onAddNewSubLevelField", function TemplateProfileCreateComponent_div_3_div_19_div_12_ng_container_2_div_1_Template_lib_sub_category_onAddNewSubLevelField_8_listener() { core.ɵɵrestoreView(_r613); var j_r476 = ctx.index; var i_r459 = core.ɵɵnextContext(3).index; var ctx_r626 = core.ɵɵnextContext(2); return ctx_r626.onAddNewSubLevelField(i_r459, j_r476); })("onExpendMore", function TemplateProfileCreateComponent_div_3_div_19_div_12_ng_container_2_div_1_Template_lib_sub_category_onExpendMore_8_listener($event) { core.ɵɵrestoreView(_r613); var j_r476 = ctx.index; var i_r459 = core.ɵɵnextContext(3).index; var ctx_r628 = core.ɵɵnextContext(2); return ctx_r628.onExpendMore($event, i_r459, j_r476); })("onChangeLabel", function TemplateProfileCreateComponent_div_3_div_19_div_12_ng_container_2_div_1_Template_lib_sub_category_onChangeLabel_8_listener($event) { core.ɵɵrestoreView(_r613); var j_r476 = ctx.index; var i_r459 = core.ɵɵnextContext(3).index; var ctx_r630 = core.ɵɵnextContext(2); return ctx_r630.onChangeLabel($event, i_r459, j_r476); })("onCheckedChip", function TemplateProfileCreateComponent_div_3_div_19_div_12_ng_container_2_div_1_Template_lib_sub_category_onCheckedChip_8_listener($event) { core.ɵɵrestoreView(_r613); var j_r476 = ctx.index; var i_r459 = core.ɵɵnextContext(3).index; var ctx_r632 = core.ɵɵnextContext(2); return ctx_r632.onCheckedChip($event, i_r459, j_r476); })("onDrop", function TemplateProfileCreateComponent_div_3_div_19_div_12_ng_container_2_div_1_Template_lib_sub_category_onDrop_8_listener($event) { core.ɵɵrestoreView(_r613); var ctx_r634 = core.ɵɵnextContext(5); return ctx_r634.drop($event); })("onCheckedDefault", function TemplateProfileCreateComponent_div_3_div_19_div_12_ng_container_2_div_1_Template_lib_sub_category_onCheckedDefault_8_listener($event) { core.ɵɵrestoreView(_r613); var j_r476 = ctx.index; var i_r459 = core.ɵɵnextContext(3).index; var ctx_r635 = core.ɵɵnextContext(2); return ctx_r635.onCheckedDefault($event, i_r459, j_r476); })("onGetConditionValues", function TemplateProfileCreateComponent_div_3_div_19_div_12_ng_container_2_div_1_Template_lib_sub_category_onGetConditionValues_8_listener() { core.ɵɵrestoreView(_r613); var ctx_r637 = core.ɵɵnextContext(5); return ctx_r637.getConditionValues(); });
        core.ɵɵtemplate(9, TemplateProfileCreateComponent_div_3_div_19_div_12_ng_container_2_div_1_div_9_Template, 2, 1, "div", 63);
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵtemplate(10, TemplateProfileCreateComponent_div_3_div_19_div_12_ng_container_2_div_1_div_10_Template, 6, 3, "div", 64);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var field_r475 = ctx.$implicit;
        var j_r476 = ctx.index;
        var ctx_r638 = core.ɵɵnextContext(3);
        var category_r458 = ctx_r638.$implicit;
        var i_r459 = ctx_r638.index;
        var ctx_r474 = core.ɵɵnextContext(2);
        core.ɵɵproperty("id", field_r475.key);
        core.ɵɵadvance(4);
        core.ɵɵproperty("disabled", !field_r475.deleteable);
        core.ɵɵadvance(1);
        core.ɵɵstyleProp("opacity", !field_r475.deleteable ? 0 : 1);
        core.ɵɵadvance(2);
        core.ɵɵclassMap(!field_r475.deleteable ? "disabled" : "");
        core.ɵɵadvance(1);
        core.ɵɵproperty("field", field_r475)("length", category_r458 == null ? null : category_r458.forms == null ? null : category_r458.forms.length)("i", i_r459)("j", j_r476)("conditionData", ctx_r474.conditionData);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", field_r475.expandMore);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", (category_r458 == null ? null : category_r458.forms == null ? null : category_r458.forms.length) - 1 === j_r476);
    } }
    function TemplateProfileCreateComponent_div_3_div_19_div_12_ng_container_2_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainerStart(0);
        core.ɵɵtemplate(1, TemplateProfileCreateComponent_div_3_div_19_div_12_ng_container_2_div_1_Template, 11, 13, "div", 55);
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var category_r458 = core.ɵɵnextContext(2).$implicit;
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngForOf", category_r458.forms);
    } }
    function TemplateProfileCreateComponent_div_3_div_19_div_12_Template(rf, ctx) { if (rf & 1) {
        var _r641 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "div", 53, 54);
        core.ɵɵlistener("cdkDropListDropped", function TemplateProfileCreateComponent_div_3_div_19_div_12_Template_div_cdkDropListDropped_0_listener($event) { core.ɵɵrestoreView(_r641); var ctx_r640 = core.ɵɵnextContext(3); return ctx_r640.drop($event); });
        core.ɵɵtemplate(2, TemplateProfileCreateComponent_div_3_div_19_div_12_ng_container_2_Template, 2, 1, "ng-container", 40);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var category_r458 = core.ɵɵnextContext().$implicit;
        core.ɵɵproperty("cdkDropListData", category_r458.forms);
        core.ɵɵadvance(2);
        core.ɵɵproperty("ngIf", category_r458.expandMore);
    } }
    function TemplateProfileCreateComponent_div_3_div_19_mat_icon_14_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "mat-icon");
        core.ɵɵtext(1, "chevron_right");
        core.ɵɵelementEnd();
    } }
    function TemplateProfileCreateComponent_div_3_div_19_mat_icon_15_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "mat-icon");
        core.ɵɵtext(1, "expand_more");
        core.ɵɵelementEnd();
    } }
    function TemplateProfileCreateComponent_div_3_div_19_Template(rf, ctx) { if (rf & 1) {
        var _r644 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "div", 42);
        core.ɵɵelementStart(1, "div", 43);
        core.ɵɵelementStart(2, "button", 44);
        core.ɵɵlistener("click", function TemplateProfileCreateComponent_div_3_div_19_Template_button_click_2_listener($event) { core.ɵɵrestoreView(_r644); var i_r459 = ctx.index; var ctx_r643 = core.ɵɵnextContext(2); return ctx_r643.onRemoveCategory($event, i_r459); });
        core.ɵɵelementStart(3, "mat-icon");
        core.ɵɵtext(4, "delete");
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementStart(5, "div", 45);
        core.ɵɵelementStart(6, "div", 46);
        core.ɵɵelementStart(7, "input", 47);
        core.ɵɵlistener("ngModelChange", function TemplateProfileCreateComponent_div_3_div_19_Template_input_ngModelChange_7_listener($event) { core.ɵɵrestoreView(_r644); var category_r458 = ctx.$implicit; return category_r458.name = $event; });
        core.ɵɵelementEnd();
        core.ɵɵelementStart(8, "mat-form-field", 48);
        core.ɵɵelementStart(9, "mat-label");
        core.ɵɵtext(10, "\u00C9quipe");
        core.ɵɵelementEnd();
        core.ɵɵtemplate(11, TemplateProfileCreateComponent_div_3_div_19_mat_select_11_Template, 2, 5, "mat-select", 49);
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵtemplate(12, TemplateProfileCreateComponent_div_3_div_19_div_12_Template, 3, 2, "div", 50);
        core.ɵɵelementEnd();
        core.ɵɵelementStart(13, "button", 51);
        core.ɵɵlistener("click", function TemplateProfileCreateComponent_div_3_div_19_Template_button_click_13_listener($event) { core.ɵɵrestoreView(_r644); var category_r458 = ctx.$implicit; var i_r459 = ctx.index; var ctx_r646 = core.ɵɵnextContext(2); return ctx_r646.onExpendMore({ event: $event, field: category_r458 }, i_r459); });
        core.ɵɵtemplate(14, TemplateProfileCreateComponent_div_3_div_19_mat_icon_14_Template, 2, 0, "mat-icon", 40);
        core.ɵɵtemplate(15, TemplateProfileCreateComponent_div_3_div_19_mat_icon_15_Template, 2, 0, "mat-icon", 40);
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var category_r458 = ctx.$implicit;
        var ctx_r430 = core.ɵɵnextContext(2);
        core.ɵɵproperty("id", category_r458.name);
        core.ɵɵadvance(2);
        core.ɵɵproperty("disabled", !category_r458.deleteable);
        core.ɵɵadvance(1);
        core.ɵɵstyleProp("opacity", !category_r458.deleteable ? 0 : 1);
        core.ɵɵadvance(4);
        core.ɵɵproperty("readonly", ctx_r430.categories.length < 4 || !category_r458.editable)("readonly", !category_r458.editable)("ngModel", category_r458.name)("ngModelOptions", core.ɵɵpureFunction0(12, _c0$1));
        core.ɵɵadvance(4);
        core.ɵɵproperty("ngIf", category_r458.selector);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", category_r458.forms);
        core.ɵɵadvance(2);
        core.ɵɵproperty("ngIf", !category_r458.expandMore);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", category_r458.expandMore);
    } }
    function TemplateProfileCreateComponent_div_3_Template(rf, ctx) { if (rf & 1) {
        var _r648 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "div", 21);
        core.ɵɵelementStart(1, "div", 22);
        core.ɵɵelementStart(2, "div", 23);
        core.ɵɵelementStart(3, "h3");
        core.ɵɵelementStart(4, "span");
        core.ɵɵtext(5);
        core.ɵɵelementEnd();
        core.ɵɵelementStart(6, "mat-icon", 19);
        core.ɵɵlistener("click", function TemplateProfileCreateComponent_div_3_Template_mat_icon_click_6_listener() { core.ɵɵrestoreView(_r648); var ctx_r647 = core.ɵɵnextContext(); return ctx_r647.openDialog(); });
        core.ɵɵtext(7, "edit");
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementStart(8, "ol", 24);
        core.ɵɵtemplate(9, TemplateProfileCreateComponent_div_3_li_9_Template, 8, 5, "li", 25);
        core.ɵɵelementEnd();
        core.ɵɵelementStart(10, "button", 26);
        core.ɵɵlistener("click", function TemplateProfileCreateComponent_div_3_Template_button_click_10_listener($event) { core.ɵɵrestoreView(_r648); var ctx_r649 = core.ɵɵnextContext(); return ctx_r649.onAddNewCategory($event); });
        core.ɵɵelementStart(11, "mat-icon");
        core.ɵɵtext(12, "add_box");
        core.ɵɵelementEnd();
        core.ɵɵtext(13, " Ajouter une nouvelle cat\u00E9gorie ");
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementStart(14, "button", 27);
        core.ɵɵtext(15, " Enregistrer le profil ");
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementStart(16, "div", 28);
        core.ɵɵelementStart(17, "div", 29, 30);
        core.ɵɵlistener("cdkDropListDropped", function TemplateProfileCreateComponent_div_3_Template_div_cdkDropListDropped_17_listener($event) { core.ɵɵrestoreView(_r648); var ctx_r650 = core.ɵɵnextContext(); return ctx_r650.drop($event); });
        core.ɵɵtemplate(19, TemplateProfileCreateComponent_div_3_div_19_Template, 16, 13, "div", 31);
        core.ɵɵelementStart(20, "div", 32);
        core.ɵɵelementStart(21, "button", 19);
        core.ɵɵlistener("click", function TemplateProfileCreateComponent_div_3_Template_button_click_21_listener($event) { core.ɵɵrestoreView(_r648); var ctx_r651 = core.ɵɵnextContext(); return ctx_r651.onAddNewCategory($event); });
        core.ɵɵelementStart(22, "mat-icon");
        core.ɵɵtext(23, "add");
        core.ɵɵelementEnd();
        core.ɵɵtext(24, " Ajouter une cat\u00E9gorie ");
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r417 = core.ɵɵnextContext();
        core.ɵɵadvance(5);
        core.ɵɵtextInterpolate(ctx_r417.form.get("Name").value);
        core.ɵɵadvance(4);
        core.ɵɵproperty("ngForOf", ctx_r417.categories);
        core.ɵɵadvance(8);
        core.ɵɵproperty("cdkDropListData", ctx_r417.categories);
        core.ɵɵadvance(2);
        core.ɵɵproperty("ngForOf", ctx_r417.categories);
    } }
    var TemplateProfileCreateComponent = /** @class */ (function () {
        function TemplateProfileCreateComponent(fb, service, route, router, dialog) {
            this.fb = fb;
            this.service = service;
            this.route = route;
            this.router = router;
            this.dialog = dialog;
            this.validCategory = false;
            this.separatorKeysCodes = [keycodes.ENTER, keycodes.COMMA, keycodes.SEMICOLON];
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
                    selector: {
                        label: "Company",
                        key: "Company",
                        defaultValue: [{ value: "Nowteam", checked: true }, { value: "Internal", checked: false }],
                        value: "Nowteam"
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
                    selector: {
                        label: "Company",
                        key: "Company",
                        defaultValue: [{ value: "Nowteam", checked: true }, { value: "Internal", checked: false }],
                        value: "Nowteam"
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
                var _this = this;
                return __generator(this, function (_a) {
                    this.id = this.route.snapshot.paramMap.get("id");
                    this.form = this.fb.group({
                        Name: ["", forms.Validators.required],
                        Picto: [""],
                        Description: [""],
                        Tags: ["", forms.Validators.required],
                        Status: [false, forms.Validators.required],
                    });
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
                    return [2 /*return*/];
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
            console.log(this.categories);
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
                            this.canExit = true;
                            this.router.navigate([this.service.mainPath + '/template']);
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
        TemplateProfileCreateComponent.ɵfac = function TemplateProfileCreateComponent_Factory(t) { return new (t || TemplateProfileCreateComponent)(core.ɵɵdirectiveInject(forms.FormBuilder), core.ɵɵdirectiveInject(OnboardingService), core.ɵɵdirectiveInject(router.ActivatedRoute), core.ɵɵdirectiveInject(router.Router), core.ɵɵdirectiveInject(dialog.MatDialog)); };
        TemplateProfileCreateComponent.ɵcmp = core.ɵɵdefineComponent({ type: TemplateProfileCreateComponent, selectors: [["onboarding-create-profile-template"]], decls: 4, vars: 3, consts: [[3, "formGroup", "submit"], ["class", "box-title", 4, "ngIf"], ["class", "category", 4, "ngIf"], [1, "box-title"], [1, "box-title-content"], [1, "title"], [1, "profil-name-content"], ["mat-raised-button", "", "color", "primary", 1, "add-picto", 3, "click"], ["appearance", "outline", 1, "example-full-width"], ["type", "text", "matInput", "", "formControlName", "Name", "placeholder", "Ex. Manager"], ["class", "list-picto", 4, "ngIf"], ["type", "text", "matInput", "", "formControlName", "Description", "rows", "4", "placeholder", ""], ["formControlName", "Tags", "required", ""], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "Status", 1, "form-field"], [1, "link-create-profil"], ["mat-raised-button", "", "color", "primary", 1, "link-add-profil", 3, "disabled", "click"], [1, "list-picto"], [3, "color", "click", 4, "ngFor", "ngForOf"], [3, "click"], [3, "value"], [1, "category"], [1, "side-bar"], [1, "summary"], ["type", "I"], ["class", "li-title", 4, "ngFor", "ngForOf"], ["mat-button", "", 1, "add-category", "transparent", 3, "click"], ["mat-button", "", "type", "submit", 1, "register-button"], ["cdkDropListGroup", "", 1, "fields"], ["cdkDropList", "", 1, "example-list", "mt-20", 3, "cdkDropListData", "cdkDropListDropped"], ["parentList", "cdkDropList"], ["class", "category-item", "cdkDrag", "", 3, "id", 4, "ngFor", "ngForOf"], [1, "add-button-container"], [1, "li-title"], [3, "ngxScrollTo", "click", 4, "ngIf"], ["type", "text", 3, "ngModel", "ngModelOptions", "blur", "ngModelChange", 4, "ngIf"], [4, "ngFor", "ngForOf"], [3, "ngxScrollTo", "click"], ["type", "text", 3, "ngModel", "ngModelOptions", "blur", "ngModelChange"], ["edit", ""], [4, "ngIf"], [3, "ngxScrollTo"], ["cdkDrag", "", 1, "category-item", 3, "id"], ["cdkDragHandle", "", 1, "left-action", "move-icons"], ["mat-raised-button", "", 1, "transparent-button", 3, "disabled", "click"], [1, "field-content"], [1, "field-item"], ["type", "text", "required", "", "placeholder", "Saisir le nom de la cat\u00E9gorie", 1, "example-full-width", "input-category-name", 3, "readonly", "ngModel", "ngModelOptions", "ngModelChange"], ["appearance", "outline", 1, "form-field", "field-size", 2, "float", "right", "width", "50%"], ["required", "", 3, "value", "ngModel", "ngModelOptions", "valueChange", "ngModelChange", 4, "ngIf"], ["cdkDropList", "", 3, "cdkDropListData", "cdkDropListDropped", 4, "ngIf"], ["mat-mini-fab", "", "color", "primary", 1, "expand-button", 3, "click"], ["required", "", 3, "value", "ngModel", "ngModelOptions", "valueChange", "ngModelChange"], ["cdkDropList", "", 3, "cdkDropListData", "cdkDropListDropped"], ["childList", "cdkDropList"], ["class", "field-box", 3, "id", 4, "ngFor", "ngForOf"], [1, "field-box", 3, "id"], ["cdkDrag", ""], [1, "fields-content"], [1, "button-action"], ["mat-mini-fab", "", "color", "warn", 1, "delete-field", "transparent-button", 3, "disabled", "click"], [1, "fields-container"], [3, "field", "length", "i", "j", "conditionData", "onAddKeywordFromInput", "onKeyPress", "onAddNewField", "onRemoveField", "onChangeType", "onRemoveKeyword", "onAddNewSubLevelField", "onExpendMore", "onChangeLabel", "onCheckedChip", "onDrop", "onCheckedDefault", "onGetConditionValues"], ["class", "child", 4, "ngIf"], ["class", "add-button-container add-button-sub-category", 4, "ngIf"], [1, "child"], ["class", "", 3, "id", 4, "ngFor", "ngForOf"], [1, "", 3, "id"], [1, "button-action", "child-2-background"], [1, "button-action", "child-3-background"], [1, "add-button-container", "add-button-sub-category"], ["mat-raised-button", "", "color", "primary", 2, "margin", "10px auto", 3, "disabled", "click"]], template: function TemplateProfileCreateComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵelementStart(0, "main");
                core.ɵɵelementStart(1, "form", 0);
                core.ɵɵlistener("submit", function TemplateProfileCreateComponent_Template_form_submit_1_listener() { return ctx.onSubmit(); });
                core.ɵɵtemplate(2, TemplateProfileCreateComponent_div_2_Template, 29, 7, "div", 1);
                core.ɵɵtemplate(3, TemplateProfileCreateComponent_div_3_Template, 25, 4, "div", 2);
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
            } if (rf & 2) {
                core.ɵɵadvance(1);
                core.ɵɵproperty("formGroup", ctx.form);
                core.ɵɵadvance(1);
                core.ɵɵproperty("ngIf", ctx.showProfileName);
                core.ɵɵadvance(1);
                core.ɵɵproperty("ngIf", !ctx.showProfileName);
            } }, directives: [forms.ɵangular_packages_forms_forms_y, forms.NgControlStatusGroup, forms.FormGroupDirective, common.NgIf, button.MatButton, icon.MatIcon, formField.MatFormField, formField.MatLabel, input.MatInput, forms.DefaultValueAccessor, forms.NgControlStatus, forms.FormControlName, select.MatSelect, forms.RequiredValidator, common.NgForOf, checkbox.MatCheckbox, core$1.MatOption, dragDrop.CdkDropListGroup, dragDrop.CdkDropList, ngxScrollTo.ScrollToDirective, forms.NgModel, dragDrop.CdkDrag, dragDrop.CdkDragHandle, SubTemplateProfileComponent], styles: ["main[_ngcontent-%COMP%]{background:no-repeat padding-box #f4f7f9;height:100vh;width:100%;display:flex;flex-direction:column;align-items:center}main[_ngcontent-%COMP%]   .disabled[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{background-color:transparent!important}main[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{display:flex;height:100%;width:100%;max-width:1500px}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]{width:786px;background:no-repeat padding-box #fff;border:1px solid #dce4e9;border-radius:6px;opacity:1;margin:auto;padding:0 25px;-ms-grid-row-align:center;align-self:center}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{text-align:center;font:900 32px/48px Nexa;letter-spacing:0;color:#171f26}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font:18px/24px Nexa Text;letter-spacing:0;color:#171f26}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .profil-name-content[_ngcontent-%COMP%]{display:flex;align-items:center;position:relative}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .profil-name-content[_ngcontent-%COMP%]   .add-picto[_ngcontent-%COMP%]{margin-right:15px;min-width:50px;width:30px;padding:9px 12px}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .profil-name-content[_ngcontent-%COMP%]   .add-picto[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin-right:10px}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .profil-name-content[_ngcontent-%COMP%]   .list-picto[_ngcontent-%COMP%]{position:absolute;height:200px;width:100%;background:no-repeat padding-box #fff;border:1px solid #171f26;border-radius:8px;top:100%;z-index:1}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .profil-name-content[_ngcontent-%COMP%]   .list-picto[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin:15px;border:none;font-size:40px}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .profil-name-content[_ngcontent-%COMP%]   .list-picto[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]:hover{color:#830b6b!important;cursor:pointer}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .box-title-content[_ngcontent-%COMP%]{width:100%;margin:25px auto}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font:900 32px/38px Nexa;letter-spacing:0;color:#171f26}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font:15px/26px Nexa Text;letter-spacing:0;color:#171f26;text-align:center}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .link-create-profil[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:center}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{text-align:center;border:1px solid #543cb6;border-radius:7px;padding:.7em 2em .5em;display:flex;align-items:center;background-color:transparent;font:bold 15px/17px Nexa;letter-spacing:0;color:#543cb6}main[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:space-between}.expand-button[_ngcontent-%COMP%]{color:#5a607f!important;background-color:transparent!important;box-shadow:none!important}.input-category-name[_ngcontent-%COMP%]{border:none;outline:0;text-align:left;font:bold 18px/48px Nexa Text;letter-spacing:0;color:#171f26}.example-full-width[_ngcontent-%COMP%]{width:100%}.field-action[_ngcontent-%COMP%]{width:10%}.field-size[_ngcontent-%COMP%]{width:90%;margin:auto 2% auto auto}  .mat-form-field-appearance-fill .mat-form-field-flex{background-color:#fff}  .mat-form-field-appearance-outline .mat-form-field-infix{padding:.5em 0}  .mat-select{padding:.5em 0}  .mat-form-field-appearance-fill .mat-form-field-underline::before{background-color:transparent}  .mat-form-field-wrapper{padding-bottom:0!important}[_nghost-%COMP%]     .cdk-drag-preview .input-category-name div.mat-form-field-outline-start, [_nghost-%COMP%]     .input-category-name div.mat-form-field-outline-start{border-color:0!important;border-width:0!important}[_nghost-%COMP%]     .input-category-name .mat-form-field-outline-gap{border-color:0!important;border-width:0!important}[_nghost-%COMP%]     .mat-checkbox-checked.mat-accent .mat-checkbox-background, [_nghost-%COMP%]     .mat-checkbox-indeterminate.mat-accent .mat-checkbox-background{background-color:transparent}[_nghost-%COMP%]     .input-category-name .mat-form-field-outline-end{border-color:0!important;border-width:0!important}[_nghost-%COMP%]     .input-category-name .mat-form-field-label-wrapper{display:none}[_nghost-%COMP%]     .input-category-name .mat-form-field-appearance-outline .mat-form-field-outline{color:transparent!important}[_nghost-%COMP%]     .input-category-name .mat-form-field-infix{border-top:none}.category-action[_ngcontent-%COMP%]{display:flex;width:100%}.delete-field[_ngcontent-%COMP%]{margin:auto 2%}.radio-group[_ngcontent-%COMP%]   .mat-radio-button[_ngcontent-%COMP%]{margin-right:10px}.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary[_ngcontent-%COMP%]{background-color:#3f51b5;color:#fff;min-height:20px;font-size:10px}.move-icons[_ngcontent-%COMP%]{cursor:move}.category-item[_ngcontent-%COMP%], .cdk-drag-placeholder[_ngcontent-%COMP%]{display:flex;align-items:baseline;width:100%;border:1px solid #dce4e9;border-radius:8px;background-color:#fff;margin-bottom:10px;margin-top:10px;padding-bottom:10px;min-height:60px}.category-item[_ngcontent-%COMP%]   .left-action[_ngcontent-%COMP%], .cdk-drag-placeholder[_ngcontent-%COMP%]   .left-action[_ngcontent-%COMP%]{height:auto;background-color:#49a094;padding-top:7px;width:40px;-ms-grid-row-align:stretch;align-self:stretch;border-top-left-radius:8px;border-bottom-left-radius:8px}.category-item[_ngcontent-%COMP%]   .left-action[_ngcontent-%COMP%]   .transparent-button[_ngcontent-%COMP%], .cdk-drag-placeholder[_ngcontent-%COMP%]   .left-action[_ngcontent-%COMP%]   .transparent-button[_ngcontent-%COMP%]{background-color:transparent;box-shadow:none;width:40px;padding:0;margin:0;min-width:auto;color:#fff}.category-item[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%], .cdk-drag-placeholder[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%]{width:100%;-ms-grid-row-align:center;align-self:center}.category-item[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%], .cdk-drag-placeholder[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;border:transparent!important}.category-item[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]   .mat-form-field-wrapper[_ngcontent-%COMP%]   .mat-form-field-flex[_ngcontent-%COMP%]   .mat-form-field-outline[_ngcontent-%COMP%], .cdk-drag-placeholder[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]   .mat-form-field-wrapper[_ngcontent-%COMP%]   .mat-form-field-flex[_ngcontent-%COMP%]   .mat-form-field-outline[_ngcontent-%COMP%]{color:transparent!important}.category-item[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%]   .field-box[_ngcontent-%COMP%], .cdk-drag-placeholder[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%]   .field-box[_ngcontent-%COMP%]{margin-bottom:15px}.category-item[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%]   .mat-form-field-outline[_ngcontent-%COMP%], .cdk-drag-placeholder[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%]   .mat-form-field-outline[_ngcontent-%COMP%]{color:transparent!important}.cdk-drag-preview[_ngcontent-%COMP%]{box-sizing:border-box;border-radius:4px;opacity:1}.cdk-drag-preview[_ngcontent-%COMP%]   .expand-button[_ngcontent-%COMP%]{color:#5a607f!important;background-color:transparent!important;box-shadow:none!important;margin-right:28px!important}.cdk-drag-placeholder[_ngcontent-%COMP%]{opacity:0}.cdk-drag-animating[_ngcontent-%COMP%], .example-list.cdk-drop-list-dragging[_ngcontent-%COMP%]   .category-item[_ngcontent-%COMP%]:not(.cdk-drag-placeholder){transition:transform 250ms cubic-bezier(0,0,.2,1)}.child[_ngcontent-%COMP%]{margin-left:0}.category[_ngcontent-%COMP%]{display:flex;flex-direction:row;width:100vw}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]{width:250px;background-color:#fff;margin:10px 20px;border-radius:5px;border:1px solid #dbcbcb96}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:25px;border-bottom:1px solid #dbcbcb96;margin:10px;padding-bottom:5px;font-family:\"Nexa Text\";display:flex;align-items:center}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin-left:15px;cursor:pointer}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]{font-weight:600;margin-left:-27px;font-size:15px;list-style-position:inside}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:5px;margin:5px auto;cursor:pointer;text-align:left;font:12px/19px Nexa Text;letter-spacing:0;color:#535760}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]{padding-left:0;margin-left:0}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.li-title[_ngcontent-%COMP%]{font-size:14px;font-weight:600}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.li-title[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:140px;outline:0;border:1px dashed grey}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.li-title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:inline-flex;align-items:center}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.li-title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin-left:10px;display:none}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.li-title[_ngcontent-%COMP%]:hover   mat-icon[_ngcontent-%COMP%]{display:initial!important}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.sub-title[_ngcontent-%COMP%]{list-style:none;padding-left:20px}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.sub-title.active[_ngcontent-%COMP%], .category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.sub-title.active[_ngcontent-%COMP%]::marker, .category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.sub-title[_ngcontent-%COMP%]:hover{font-weight:600;background:no-repeat padding-box #e5e8ee;border-radius:5px}.category[_ngcontent-%COMP%]   .fields[_ngcontent-%COMP%]{width:90%;max-height:85vh;overflow:auto;margin-right:.5%;overflow-x:hidden}.category[_ngcontent-%COMP%]   .disabled[_ngcontent-%COMP%]{background-color:#f4f7f9!important}.category[_ngcontent-%COMP%]   .expand-button[_ngcontent-%COMP%]{color:#5a607f!important;background-color:transparent!important;box-shadow:none!important;margin-right:28px!important}.category[_ngcontent-%COMP%]   .expand-button[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%]{font-size:40px}.category[_ngcontent-%COMP%]   .transparent-button[_ngcontent-%COMP%]{background-color:transparent;box-shadow:none;width:40px;padding:0;margin:0;margin-left:0!important;min-width:auto;color:#fff}.add-button-sub-category[_ngcontent-%COMP%]{width:95.5%!important;margin-bottom:22px;margin-left:22px}.add-button-container[_ngcontent-%COMP%]{background:no-repeat padding-box #fff;border:1px dashed #dce4e9;border-radius:8px;margin-top:10px;padding:10px;display:flex;justify-content:center;align-items:center;width:98.5%;margin-bottom:22px}.add-button-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{display:flex;align-items:center;background-color:transparent;border:none;cursor:pointer;font:17px/26px Nexa Text;letter-spacing:0;color:#c2c8d5;box-shadow:none}.add-category[_ngcontent-%COMP%]{border:1px dashed #c2c8d5;border-radius:5px;margin-left:10px;margin-bottom:10px;font:bold 12px/19px Nexa Text;letter-spacing:0;color:#c2c8d5;width:92%}.cdk-drag[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]{display:flex;height:100%;margin:0;width:100%;min-width:250px}.cdk-drag[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]   .button-action[_ngcontent-%COMP%]{background-color:#6fe8d7;-ms-grid-row-align:stretch;align-self:stretch;margin-top:0;margin-left:20px;border-bottom-left-radius:8px;border-top-left-radius:8px}.cdk-drag[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]   .button-action[_ngcontent-%COMP%]   .transparent-button[_ngcontent-%COMP%]{background-color:transparent;box-shadow:none;width:40px;padding:0;margin:0;min-width:auto;color:#fff}.cdk-drag[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]   .child-2-background[_ngcontent-%COMP%]{background-color:#cffaf4!important}.cdk-drag[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]   .child-3-background[_ngcontent-%COMP%]{background-color:#e5e8ee!important}.cdk-drag[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]   .fields-container[_ngcontent-%COMP%]{border:1px solid #dce4e9;border-radius:0 8px 8px 0;background-color:#fff;width:100%;padding-left:10px;padding-right:10px;padding-top:5px}.cdk-drag[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]   .fields-container[_ngcontent-%COMP%]   lib-sub-category[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;width:100%}.cdk-drag[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]   .fields-container[_ngcontent-%COMP%]   lib-sub-category[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]   .button-action[_ngcontent-%COMP%]{background-color:#6fe8d7;height:100%;margin:auto 15px auto auto;display:flex}.cdk-drag[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]   .fields-container[_ngcontent-%COMP%]   lib-sub-category[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]   .button-action[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{box-shadow:none;background-color:transparent;color:#fff}.side-bar[_ngcontent-%COMP%]{display:flex;flex-direction:column}.register-button[_ngcontent-%COMP%]{background:no-repeat padding-box #171f26!important;border:2px solid #192128!important;border-radius:8px;color:#fff!important;width:85%;margin-left:22px!important;border:none!important}.content-item[_ngcontent-%COMP%]{transition-property:border-image-slice border-image-source border-width;transition-timing-function:ease-in-out;transition-duration:.5s}.active-content[_ngcontent-%COMP%]{border-image-slice:1;border-width:2px;border-image-source:linear-gradient(to left,#9d107d,#4862ab)}"] });
        return TemplateProfileCreateComponent;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(TemplateProfileCreateComponent, [{
            type: core.Component,
            args: [{
                    selector: "onboarding-create-profile-template",
                    templateUrl: "./template-profile-create.component.html",
                    styleUrls: ["./template-profile-create.component.scss"],
                }]
        }], function () { return [{ type: forms.FormBuilder }, { type: OnboardingService }, { type: router.ActivatedRoute }, { type: router.Router }, { type: dialog.MatDialog }]; }, null); })();

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

    function TemplateProfileListComponent_div_13_div_2_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "div", 13);
        core.ɵɵelementStart(1, "mat-icon", 14);
        core.ɵɵtext(2);
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var d_r653 = core.ɵɵnextContext().$implicit;
        core.ɵɵadvance(2);
        core.ɵɵtextInterpolate(d_r653 == null ? null : d_r653.Picto);
    } }
    function TemplateProfileListComponent_div_13_div_3_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "div", 13);
        core.ɵɵelementStart(1, "h3");
        core.ɵɵtext(2);
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var d_r653 = core.ɵɵnextContext().$implicit;
        core.ɵɵadvance(2);
        core.ɵɵtextInterpolate(d_r653.Name.substr(0, 2));
    } }
    var _c0$2 = function (a0) { return [a0]; };
    function TemplateProfileListComponent_div_13_Template(rf, ctx) { if (rf & 1) {
        var _r659 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "div", 9);
        core.ɵɵelementStart(1, "div", 10);
        core.ɵɵtemplate(2, TemplateProfileListComponent_div_13_div_2_Template, 3, 1, "div", 11);
        core.ɵɵtemplate(3, TemplateProfileListComponent_div_13_div_3_Template, 3, 1, "div", 11);
        core.ɵɵelementStart(4, "p");
        core.ɵɵtext(5);
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementStart(6, "button", 12);
        core.ɵɵlistener("click", function TemplateProfileListComponent_div_13_Template_button_click_6_listener($event) { core.ɵɵrestoreView(_r659); var d_r653 = ctx.$implicit; var ctx_r658 = core.ɵɵnextContext(); return ctx_r658.onDelete($event, d_r653._id); });
        core.ɵɵelementStart(7, "mat-icon");
        core.ɵɵtext(8, "close");
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var d_r653 = ctx.$implicit;
        var ctx_r652 = core.ɵɵnextContext();
        core.ɵɵproperty("defaultElevation", 0);
        core.ɵɵadvance(1);
        core.ɵɵproperty("routerLink", core.ɵɵpureFunction1(6, _c0$2, ctx_r652.service.mainPath + "/template/" + d_r653._id));
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", d_r653 == null ? null : d_r653.Picto);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", !(d_r653 == null ? null : d_r653.Picto));
        core.ɵɵadvance(2);
        core.ɵɵtextInterpolate1(" ", d_r653.Name, "");
        core.ɵɵadvance(1);
        core.ɵɵproperty("defaultElevation", ctx_r652.defaultElevation);
    } }
    var TemplateProfileListComponent = /** @class */ (function () {
        function TemplateProfileListComponent(service, router) {
            var _this = this;
            this.service = service;
            this.router = router;
            this.displayedColumns = ['Name', 'vcontacts', 'createdAt', 'updatedAt', 'action'];
            this.datas = [];
            this.dataSource = new table.MatTableDataSource([]);
            this.defaultElevation = 2;
            this.raisedElevation = 8;
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
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, this.getAllProfils(true)];
                                case 1:
                                    _a.sent();
                                    return [2 /*return*/];
                            }
                        });
                    }); }, 500);
                    return [2 /*return*/];
                });
            });
        };
        TemplateProfileListComponent.prototype.onAddProfil = function () {
            this.router.navigate(['onboarding/template/0']);
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
                            this.dataSource = new table.MatTableDataSource(this.datas);
                            this.dataSource.paginator = this.paginator;
                            this.dataSource.sort = this.sort;
                            return [2 /*return*/];
                    }
                });
            });
        };
        TemplateProfileListComponent.ɵfac = function TemplateProfileListComponent_Factory(t) { return new (t || TemplateProfileListComponent)(core.ɵɵdirectiveInject(OnboardingService), core.ɵɵdirectiveInject(router.Router)); };
        TemplateProfileListComponent.ɵcmp = core.ɵɵdefineComponent({ type: TemplateProfileListComponent, selectors: [["onboarding-profile-list"]], viewQuery: function TemplateProfileListComponent_Query(rf, ctx) { if (rf & 1) {
                core.ɵɵviewQuery(paginator.MatPaginator, true);
                core.ɵɵviewQuery(sort.MatSort, true);
            } if (rf & 2) {
                var _t;
                core.ɵɵqueryRefresh(_t = core.ɵɵloadQuery()) && (ctx.paginator = _t.first);
                core.ɵɵqueryRefresh(_t = core.ɵɵloadQuery()) && (ctx.sort = _t.first);
            } }, decls: 14, vars: 4, consts: [[1, "main"], [1, "header-list"], [1, "title"], [1, "sub-title"], [1, "content-list"], [1, "list"], [1, "box-template", "new-template"], ["role", "button", "mat-raised-button", "", "color", "primary", 1, "add-profil", 3, "routerLink"], ["appMaterialElevation", "", "raisedElevation", "1", "class", "box-template", 3, "defaultElevation", 4, "ngFor", "ngForOf"], ["appMaterialElevation", "", "raisedElevation", "1", 1, "box-template", 3, "defaultElevation"], [1, "box-content", 3, "routerLink"], ["class", "picto-preview", 4, "ngIf"], ["mat-mini-fab", "", "color", "accent", "appMaterialElevation", "", "raisedElevation", "16", 3, "defaultElevation", "click"], [1, "picto-preview"], [2, "font-size", "50px", "width", "43%", "height", "40%"]], template: function TemplateProfileListComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵelementStart(0, "div", 0);
                core.ɵɵelementStart(1, "div", 1);
                core.ɵɵelementStart(2, "h3", 2);
                core.ɵɵtext(3, "Profils");
                core.ɵɵelementEnd();
                core.ɵɵelementStart(4, "p", 3);
                core.ɵɵtext(5, "Retrouvez ici, l\u2019ensemble des profils d\u2019onboarding que vous avez cr\u00E9\u00E9s");
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
                core.ɵɵelementStart(6, "div", 4);
                core.ɵɵelementStart(7, "div", 5);
                core.ɵɵelementStart(8, "div", 6);
                core.ɵɵelementStart(9, "p");
                core.ɵɵtext(10, "Nouveau profil");
                core.ɵɵelementEnd();
                core.ɵɵelementStart(11, "a", 7);
                core.ɵɵtext(12, " Cr\u00E9er un nouveau profil ");
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
                core.ɵɵtemplate(13, TemplateProfileListComponent_div_13_Template, 9, 8, "div", 8);
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
            } if (rf & 2) {
                core.ɵɵadvance(11);
                core.ɵɵproperty("routerLink", core.ɵɵpureFunction1(2, _c0$2, ctx.service.mainPath + "/template/0"));
                core.ɵɵadvance(2);
                core.ɵɵproperty("ngForOf", ctx.datas);
            } }, directives: [button.MatAnchor, router.RouterLinkWithHref, common.NgForOf, MaterialElevationDirective, router.RouterLink, common.NgIf, button.MatButton, icon.MatIcon], styles: [".main[_ngcontent-%COMP%]{background:no-repeat padding-box #f4f7f9;opacity:1;height:100%}.main[_ngcontent-%COMP%]   .header-list[_ngcontent-%COMP%]{margin-left:50px;padding-top:10px}.main[_ngcontent-%COMP%]   .header-list[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{text-align:left;font:bold 32px/30px Nexa Text;letter-spacing:0;color:#171f26;opacity:1}.main[_ngcontent-%COMP%]   .header-list[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{text-align:left;font:20px/26px Nexa Text;letter-spacing:0;color:#171f26;opacity:1;max-width:300px}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]{background-color:#fff;border-radius:8px;opacity:1;margin:57px;padding:49px}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{text-align:left;font:bold 23px/30px Nexa Text;letter-spacing:0;color:#171f26;opacity:1;margin-bottom:0;margin-top:0}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   p.sub-title[_ngcontent-%COMP%]{margin-bottom:57px;font:20px/26px Nexa Text;letter-spacing:0;color:#171f26;width:300px}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .box-template[_ngcontent-%COMP%]{width:328px;position:relative;height:228px;margin-right:50px;margin-bottom:50px;background:no-repeat padding-box #f4f7f9;border:1px solid #dce4e9;border-radius:6px;opacity:1;display:flex;flex-direction:column;justify-content:center;align-items:center;cursor:pointer}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .box-template[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:81px;height:81px}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .box-template[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{text-align:center;font:bold 16px/25px Nexa Text;letter-spacing:.1px;color:#000;opacity:1;margin-top:17px}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .box-template[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{background:no-repeat padding-box #171f26;border-radius:7px;font-size:15px}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .box-template[_ngcontent-%COMP%]   .mat-mini-fab[_ngcontent-%COMP%]{display:none}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .box-template[_ngcontent-%COMP%]   .box-content[_ngcontent-%COMP%]{width:100%;height:90%;text-align:center;margin-top:10%}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .box-template[_ngcontent-%COMP%]   .box-content[_ngcontent-%COMP%]   .picto-preview[_ngcontent-%COMP%]{width:113px;height:113px;background:no-repeat padding-box #fff;margin:auto;border-radius:113px;display:flex;align-items:center;justify-content:center}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .box-template[_ngcontent-%COMP%]   .box-content[_ngcontent-%COMP%]   .picto-preview[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:40px;color:#dce4e9}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .new-template[_ngcontent-%COMP%]{border:1px solid #dce4e9;border-radius:6px;background-color:transparent}  .box-template:hover .mat-mini-fab .mat-button-wrapper{padding:0!important;display:inline-block;line-height:0}  .box-template:hover .mat-mini-fab{display:initial!important;position:absolute;right:6px;top:7px;background-color:red;width:25px;height:25px}  .box-template:hover .mat-mini-fab .mat-icon{background-repeat:no-repeat;display:inline-block;fill:currentColor;height:37px;width:24px}"] });
        return TemplateProfileListComponent;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(TemplateProfileListComponent, [{
            type: core.Component,
            args: [{
                    selector: 'onboarding-profile-list',
                    templateUrl: './template-profile-list.component.html',
                    styleUrls: ['./template-profile-list.component.scss']
                }]
        }], function () { return [{ type: OnboardingService }, { type: router.Router }]; }, { paginator: [{
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
            //let url: string = state.url;
            return component.canDeactivate ? component.canDeactivate() : true;
        };
        CanDeactivateGuard.ɵfac = function CanDeactivateGuard_Factory(t) { return new (t || CanDeactivateGuard)(); };
        CanDeactivateGuard.ɵprov = core.ɵɵdefineInjectable({ token: CanDeactivateGuard, factory: CanDeactivateGuard.ɵfac });
        return CanDeactivateGuard;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(CanDeactivateGuard, [{
            type: core.Injectable
        }], null, null); })();

    function SubOnboardingCreateComponent_div_2_div_1_mat_select_3_mat_option_1_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "mat-option", 10);
        core.ɵɵtext(1);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var select_r778 = ctx.$implicit;
        core.ɵɵproperty("value", select_r778.value);
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate1(" ", select_r778.value, "");
    } }
    var _c0$3 = function () { return { standalone: true }; };
    function SubOnboardingCreateComponent_div_2_div_1_mat_select_3_Template(rf, ctx) { if (rf & 1) {
        var _r780 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "mat-select", 8);
        core.ɵɵlistener("ngModelChange", function SubOnboardingCreateComponent_div_2_div_1_mat_select_3_Template_mat_select_ngModelChange_0_listener($event) { core.ɵɵrestoreView(_r780); var ctx_r779 = core.ɵɵnextContext(3); return ctx_r779.field.selector.value = $event; });
        core.ɵɵtemplate(1, SubOnboardingCreateComponent_div_2_div_1_mat_select_3_mat_option_1_Template, 2, 2, "mat-option", 9);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r776 = core.ɵɵnextContext(3);
        core.ɵɵproperty("ngModel", ctx_r776.field.selector.value)("ngModelOptions", core.ɵɵpureFunction0(3, _c0$3));
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngForOf", ctx_r776.field.selector.defaultValue);
    } }
    var _c1$1 = function () { return { "display": "inine-block" }; };
    function SubOnboardingCreateComponent_div_2_div_1_Template(rf, ctx) { if (rf & 1) {
        var _r782 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "div", 5);
        core.ɵɵelementStart(1, "mat-checkbox", 6);
        core.ɵɵlistener("ngModelChange", function SubOnboardingCreateComponent_div_2_div_1_Template_mat_checkbox_ngModelChange_1_listener($event) { core.ɵɵrestoreView(_r782); var ctx_r781 = core.ɵɵnextContext(2); return ctx_r781.field.value = $event; });
        core.ɵɵtext(2);
        core.ɵɵelementEnd();
        core.ɵɵtemplate(3, SubOnboardingCreateComponent_div_2_div_1_mat_select_3_Template, 2, 4, "mat-select", 7);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r775 = core.ɵɵnextContext(2);
        core.ɵɵadvance(1);
        core.ɵɵclassMap(ctx_r775.checkSubForm(ctx_r775.field) ? "checkbox-title-active" : "");
        core.ɵɵproperty("ngModel", ctx_r775.field.value)("required", ctx_r775.field.isMandatory)("ngModelOptions", core.ɵɵpureFunction0(8, _c0$3))("ngStyle", ctx_r775.field.selector && core.ɵɵpureFunction0(9, _c1$1));
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate1(" ", ctx_r775.field.label, " ");
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", ctx_r775.field.selector);
    } }
    function SubOnboardingCreateComponent_div_2_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "div", 5);
        core.ɵɵtemplate(1, SubOnboardingCreateComponent_div_2_div_1_Template, 4, 10, "div", 2);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngSwitchCase", "checkbox");
    } }
    function SubOnboardingCreateComponent_div_3_mat_checkbox_4_Template(rf, ctx) { if (rf & 1) {
        var _r786 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "mat-checkbox", 13);
        core.ɵɵlistener("ngModelChange", function SubOnboardingCreateComponent_div_3_mat_checkbox_4_Template_mat_checkbox_ngModelChange_0_listener($event) { core.ɵɵrestoreView(_r786); var opt_r784 = ctx.$implicit; return opt_r784.checked = $event; });
        core.ɵɵtext(1);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var opt_r784 = ctx.$implicit;
        var ctx_r783 = core.ɵɵnextContext(2);
        core.ɵɵproperty("checked", opt_r784.checked)("ngModel", opt_r784.checked)("required", ctx_r783.field.isMandatory)("ngModelOptions", core.ɵɵpureFunction0(5, _c0$3));
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate1(" ", opt_r784.value, " ");
    } }
    function SubOnboardingCreateComponent_div_3_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "div", 5);
        core.ɵɵelementStart(1, "label");
        core.ɵɵtext(2);
        core.ɵɵelementEnd();
        core.ɵɵelementStart(3, "div", 11);
        core.ɵɵtemplate(4, SubOnboardingCreateComponent_div_3_mat_checkbox_4_Template, 2, 6, "mat-checkbox", 12);
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r770 = core.ɵɵnextContext();
        core.ɵɵadvance(2);
        core.ɵɵtextInterpolate(ctx_r770.field.label);
        core.ɵɵadvance(2);
        core.ɵɵproperty("ngForOf", ctx_r770.field.defaultValue);
    } }
    function SubOnboardingCreateComponent_div_4_mat_radio_button_4_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "mat-radio-button", 10);
        core.ɵɵtext(1);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var opt_r789 = ctx.$implicit;
        core.ɵɵproperty("value", opt_r789.value);
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate1("", opt_r789.value, " ");
    } }
    function SubOnboardingCreateComponent_div_4_mat_form_field_5_Template(rf, ctx) { if (rf & 1) {
        var _r791 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "mat-form-field", 17);
        core.ɵɵelementStart(1, "mat-label");
        core.ɵɵtext(2, "Autre option");
        core.ɵɵelementEnd();
        core.ɵɵelementStart(3, "input", 18);
        core.ɵɵlistener("ngModelChange", function SubOnboardingCreateComponent_div_4_mat_form_field_5_Template_input_ngModelChange_3_listener($event) { core.ɵɵrestoreView(_r791); var ctx_r790 = core.ɵɵnextContext(2); return ctx_r790.field.otherValue = $event; });
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r788 = core.ɵɵnextContext(2);
        core.ɵɵadvance(3);
        core.ɵɵproperty("required", ctx_r788.field.isMandatory)("ngModelOptions", core.ɵɵpureFunction0(3, _c0$3))("ngModel", ctx_r788.field.otherValue);
    } }
    function SubOnboardingCreateComponent_div_4_Template(rf, ctx) { if (rf & 1) {
        var _r793 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "div", 5);
        core.ɵɵelementStart(1, "label", 14);
        core.ɵɵtext(2);
        core.ɵɵelementEnd();
        core.ɵɵelementStart(3, "mat-radio-group", 15);
        core.ɵɵlistener("ngModelChange", function SubOnboardingCreateComponent_div_4_Template_mat_radio_group_ngModelChange_3_listener($event) { core.ɵɵrestoreView(_r793); var ctx_r792 = core.ɵɵnextContext(); return ctx_r792.field.value = $event; });
        core.ɵɵtemplate(4, SubOnboardingCreateComponent_div_4_mat_radio_button_4_Template, 2, 2, "mat-radio-button", 9);
        core.ɵɵelementEnd();
        core.ɵɵtemplate(5, SubOnboardingCreateComponent_div_4_mat_form_field_5_Template, 4, 4, "mat-form-field", 16);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r771 = core.ɵɵnextContext();
        core.ɵɵadvance(2);
        core.ɵɵtextInterpolate1(" ", ctx_r771.field.label, " ");
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngModel", ctx_r771.field.value)("required", ctx_r771.field.isMandatory);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngForOf", ctx_r771.field.defaultValue);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", "autre" === ctx_r771.formatOther(ctx_r771.field.value));
    } }
    function SubOnboardingCreateComponent_div_5_mat_option_5_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "mat-option", 10);
        core.ɵɵtext(1);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var opt_r796 = ctx.$implicit;
        core.ɵɵproperty("value", opt_r796.value);
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate(opt_r796.value);
    } }
    function SubOnboardingCreateComponent_div_5_mat_form_field_6_Template(rf, ctx) { if (rf & 1) {
        var _r798 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "mat-form-field", 17);
        core.ɵɵelementStart(1, "mat-label");
        core.ɵɵtext(2, "Autre option");
        core.ɵɵelementEnd();
        core.ɵɵelementStart(3, "input", 18);
        core.ɵɵlistener("ngModelChange", function SubOnboardingCreateComponent_div_5_mat_form_field_6_Template_input_ngModelChange_3_listener($event) { core.ɵɵrestoreView(_r798); var ctx_r797 = core.ɵɵnextContext(2); return ctx_r797.field.otherValue = $event; });
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r795 = core.ɵɵnextContext(2);
        core.ɵɵadvance(3);
        core.ɵɵproperty("required", ctx_r795.field.isMandatory)("ngModelOptions", core.ɵɵpureFunction0(3, _c0$3))("ngModel", ctx_r795.field.otherValue);
    } }
    function SubOnboardingCreateComponent_div_5_Template(rf, ctx) { if (rf & 1) {
        var _r800 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "div", 5);
        core.ɵɵelementStart(1, "mat-form-field", 19);
        core.ɵɵelementStart(2, "mat-label");
        core.ɵɵtext(3);
        core.ɵɵelementEnd();
        core.ɵɵelementStart(4, "mat-select", 20);
        core.ɵɵlistener("ngModelChange", function SubOnboardingCreateComponent_div_5_Template_mat_select_ngModelChange_4_listener($event) { core.ɵɵrestoreView(_r800); var ctx_r799 = core.ɵɵnextContext(); return ctx_r799.field.value = $event; });
        core.ɵɵtemplate(5, SubOnboardingCreateComponent_div_5_mat_option_5_Template, 2, 2, "mat-option", 9);
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵtemplate(6, SubOnboardingCreateComponent_div_5_mat_form_field_6_Template, 4, 4, "mat-form-field", 16);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r772 = core.ɵɵnextContext();
        core.ɵɵadvance(3);
        core.ɵɵtextInterpolate1(" ", ctx_r772.field.label, " ");
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngModel", ctx_r772.field.value)("ngModelOptions", core.ɵɵpureFunction0(6, _c0$3))("required", ctx_r772.field.isMandatory);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngForOf", ctx_r772.field.defaultValue);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", "autre" === ctx_r772.formatOther(ctx_r772.field.value));
    } }
    function SubOnboardingCreateComponent_mat_form_field_6_Template(rf, ctx) { if (rf & 1) {
        var _r802 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "mat-form-field", 21);
        core.ɵɵelementStart(1, "mat-label");
        core.ɵɵtext(2);
        core.ɵɵelementEnd();
        core.ɵɵelementStart(3, "textarea", 22);
        core.ɵɵlistener("ngModelChange", function SubOnboardingCreateComponent_mat_form_field_6_Template_textarea_ngModelChange_3_listener($event) { core.ɵɵrestoreView(_r802); var ctx_r801 = core.ɵɵnextContext(); return ctx_r801.field.value = $event; });
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r773 = core.ɵɵnextContext();
        core.ɵɵadvance(2);
        core.ɵɵtextInterpolate(ctx_r773.field.label);
        core.ɵɵadvance(1);
        core.ɵɵproperty("required", ctx_r773.field.isMandatory)("ngModelOptions", core.ɵɵpureFunction0(4, _c0$3))("ngModel", ctx_r773.field.value);
    } }
    function SubOnboardingCreateComponent_mat_form_field_7_Template(rf, ctx) { if (rf & 1) {
        var _r804 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "mat-form-field", 23);
        core.ɵɵelementStart(1, "mat-label");
        core.ɵɵtext(2);
        core.ɵɵelementEnd();
        core.ɵɵelementStart(3, "input", 24);
        core.ɵɵlistener("ngModelChange", function SubOnboardingCreateComponent_mat_form_field_7_Template_input_ngModelChange_3_listener($event) { core.ɵɵrestoreView(_r804); var ctx_r803 = core.ɵɵnextContext(); return ctx_r803.field.value = $event; });
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r774 = core.ɵɵnextContext();
        core.ɵɵadvance(2);
        core.ɵɵtextInterpolate(ctx_r774.field.label);
        core.ɵɵadvance(1);
        core.ɵɵproperty("type", ctx_r774.field.type)("required", ctx_r774.field.isMandatory)("ngModelOptions", core.ɵɵpureFunction0(5, _c0$3))("ngModel", ctx_r774.field.value);
    } }
    var _c2$1 = [[["", 8, "child"]]];
    var _c3$1 = [".child"];
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
            this.chipControl = new forms.FormControl(new Set());
            this.separatorKeysCodes = [keycodes.ENTER, keycodes.COMMA, keycodes.SEMICOLON];
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
        SubOnboardingCreateComponent.ɵcmp = core.ɵɵdefineComponent({ type: SubOnboardingCreateComponent, selectors: [["lib-sub-create-onboarding"]], inputs: { field: "field", length: "length", i: "i", j: "j" }, outputs: { onAddKeywordFromInput: "onAddKeywordFromInput", onKeyPress: "onKeyPress", onDrop: "onDrop", onAddNewField: "onAddNewField", onRemoveField: "onRemoveField", onChangeType: "onChangeType", onRemoveKeyword: "onRemoveKeyword", onAddNewSubLevelField: "onAddNewSubLevelField", onExpendMore: "onExpendMore", onChangeLabel: "onChangeLabel", onCheckedChip: "onCheckedChip" }, ngContentSelectors: _c3$1, decls: 9, vars: 6, consts: [[1, "field-item"], [3, "ngSwitch"], ["class", "flex-auto w-30 field-size", 4, "ngSwitchCase"], ["class", "form-field full-width", "appearance", "outline", 4, "ngSwitchCase"], ["class", "form-field field-size", "appearance", "outline", 4, "ngSwitchDefault"], [1, "flex-auto", "w-30", "field-size"], [1, "form-field", 3, "ngModel", "required", "ngModelOptions", "ngStyle", "ngModelChange"], ["placeholder", "Company", "required", "", "style", "display: inline-block; width: 50%;", 3, "ngModel", "ngModelOptions", "ngModelChange", 4, "ngIf"], ["placeholder", "Company", "required", "", 2, "display", "inline-block", "width", "50%", 3, "ngModel", "ngModelOptions", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], [2, "margin-top", "20px"], ["class", "form-field", "style", "display: block; margin-bottom: 5px; margin-top: 10px", 3, "checked", "ngModel", "required", "ngModelOptions", "ngModelChange", 4, "ngFor", "ngForOf"], [1, "form-field", 2, "display", "block", "margin-bottom", "5px", "margin-top", "10px", 3, "checked", "ngModel", "required", "ngModelOptions", "ngModelChange"], [2, "display", "block"], ["aria-label", "Select an option", 1, "form-field", "radio-group", "field-size", 3, "ngModel", "required", "ngModelChange"], ["class", "form-field field-size other-option", "appearance", "outline", 4, "ngIf"], ["appearance", "outline", 1, "form-field", "field-size", "other-option"], ["type", "text", "matInput", "", "placeholder", "", 3, "required", "ngModelOptions", "ngModel", "ngModelChange"], ["appearance", "outline", 1, "flex-auto", "w-30", "field-size"], [3, "ngModel", "ngModelOptions", "required", "ngModelChange"], ["appearance", "outline", 1, "form-field", "full-width"], ["type", "text", "rows", "5", "matInput", "", "placeholder", "Description...", 3, "required", "ngModelOptions", "ngModel", "ngModelChange"], ["appearance", "outline", 1, "form-field", "field-size"], ["matInput", "", "placeholder", "", 3, "type", "required", "ngModelOptions", "ngModel", "ngModelChange"]], template: function SubOnboardingCreateComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵprojectionDef(_c2$1);
                core.ɵɵelementStart(0, "div", 0);
                core.ɵɵelementContainerStart(1, 1);
                core.ɵɵtemplate(2, SubOnboardingCreateComponent_div_2_Template, 2, 1, "div", 2);
                core.ɵɵtemplate(3, SubOnboardingCreateComponent_div_3_Template, 5, 2, "div", 2);
                core.ɵɵtemplate(4, SubOnboardingCreateComponent_div_4_Template, 6, 5, "div", 2);
                core.ɵɵtemplate(5, SubOnboardingCreateComponent_div_5_Template, 7, 7, "div", 2);
                core.ɵɵtemplate(6, SubOnboardingCreateComponent_mat_form_field_6_Template, 4, 5, "mat-form-field", 3);
                core.ɵɵtemplate(7, SubOnboardingCreateComponent_mat_form_field_7_Template, 4, 6, "mat-form-field", 4);
                core.ɵɵelementContainerEnd();
                core.ɵɵelementEnd();
                core.ɵɵprojection(8);
            } if (rf & 2) {
                core.ɵɵadvance(1);
                core.ɵɵproperty("ngSwitch", ctx.field.type);
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
            } }, directives: [common.NgSwitch, common.NgSwitchCase, common.NgSwitchDefault, checkbox.MatCheckbox, checkbox.MatCheckboxRequiredValidator, forms.NgControlStatus, forms.NgModel, forms.RequiredValidator, common.NgStyle, common.NgIf, select.MatSelect, common.NgForOf, core$1.MatOption, radio.MatRadioGroup, radio.MatRadioButton, formField.MatFormField, formField.MatLabel, input.MatInput, forms.DefaultValueAccessor], styles: [".container[_ngcontent-%COMP%]{max-width:98%;margin:50px auto auto;padding-bottom:50px}.container[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:space-between}.input-category-name[_ngcontent-%COMP%]{font-size:15px;font-weight:500}.full-width[_ngcontent-%COMP%]{width:100%}.field-item[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;width:100%;flex-wrap:wrap;min-width:250px;position:relative}.field-item[_ngcontent-%COMP%]   .button-action[_ngcontent-%COMP%]{background-color:#6fe8d7;height:100%;margin:auto 15px auto auto;display:flex}.field-item[_ngcontent-%COMP%]   .button-action[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{box-shadow:none;background-color:transparent;color:#fff}.field-action[_ngcontent-%COMP%]{width:10%}.field-size[_ngcontent-%COMP%]   mat-checkbox[_ngcontent-%COMP%]{margin:20px}hr[_ngcontent-%COMP%]{margin:50px 0}  .mat-form-field-appearance-fill .mat-form-field-flex{background-color:#fff}.category-action[_ngcontent-%COMP%]{display:flex;width:100%}.delete-field[_ngcontent-%COMP%]{margin:auto 2%}.radio-group[_ngcontent-%COMP%]   .mat-radio-button[_ngcontent-%COMP%]{margin-right:10px}.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary[_ngcontent-%COMP%]{background-color:#3f51b5;color:#fff;min-height:20px;font-size:10px}.move-icons[_ngcontent-%COMP%]{cursor:move}.category-item[_ngcontent-%COMP%]{display:flex;align-items:baseline;width:100%;border:1px solid #dce4e9;border-radius:8px}  .readonly.mat-form-field-appearance-outline .mat-form-field-outline{color:transparent!important}.field-content[_ngcontent-%COMP%]{width:100%}.cdk-drag-preview[_ngcontent-%COMP%]{box-sizing:border-box;border-radius:4px;box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.cdk-drag-placeholder[_ngcontent-%COMP%]{opacity:0}.cdk-drag-animating[_ngcontent-%COMP%], .example-list.cdk-drop-list-dragging[_ngcontent-%COMP%]   .category-item[_ngcontent-%COMP%]:not(.cdk-drag-placeholder){transition:transform 250ms cubic-bezier(0,0,.2,1)}.add-button-container[_ngcontent-%COMP%]{background:no-repeat padding-box #fff;border:1px dashed #dce4e9;border-radius:8px;margin-top:10px;padding:10px;display:flex;justify-content:center;align-items:center;width:98%;margin-left:0;margin-bottom:22px}.add-button-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{display:flex;align-items:center;background-color:transparent;border:none;cursor:pointer;font:17px/26px Nexa Text;letter-spacing:0;color:#c2c8d5;box-shadow:none}.expand-button[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%]{font-size:48px;margin-top:-20px;margin-right:15px}.transparent-button[_ngcontent-%COMP%]{background-color:transparent!important;box-shadow:none!important;width:40px!important;padding:0!important;margin:0!important;min-width:auto!important}.expand-button[_ngcontent-%COMP%]{color:#5a607f!important;background-color:transparent!important;box-shadow:none!important}.checkbox-title-active[_ngcontent-%COMP%]{font-weight:700}.other-option[_ngcontent-%COMP%]{margin-left:10px}.flex-auto[_ngcontent-%COMP%]{width:100%}.flex-auto[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{width:80%}"] });
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
            }] }); })();

    function OnboardingCreateComponent_ng_container_2_div_1_div_6_div_7_ng_container_7_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainerStart(0);
        core.ɵɵtext(1);
        core.ɵɵelement(2, "br");
        core.ɵɵelement(3, "br");
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var field_r710 = core.ɵɵnextContext().$implicit;
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate1(" ", field_r710.value, " ");
    } }
    function OnboardingCreateComponent_ng_container_2_div_1_div_6_div_7_ng_container_8_ng_container_1_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainerStart(0);
        core.ɵɵelementStart(1, "strong");
        core.ɵɵtext(2);
        core.ɵɵelementEnd();
        core.ɵɵelement(3, "br");
        core.ɵɵtext(4);
        core.ɵɵelement(5, "br");
        core.ɵɵelement(6, "br");
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var subf_r716 = ctx.$implicit;
        core.ɵɵadvance(2);
        core.ɵɵtextInterpolate1(" ", subf_r716.key, " ");
        core.ɵɵadvance(2);
        core.ɵɵtextInterpolate1(" ", subf_r716.value, " ");
    } }
    function OnboardingCreateComponent_ng_container_2_div_1_div_6_div_7_ng_container_8_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainerStart(0);
        core.ɵɵtemplate(1, OnboardingCreateComponent_ng_container_2_div_1_div_6_div_7_ng_container_8_ng_container_1_Template, 7, 2, "ng-container", 21);
        core.ɵɵpipe(2, "keyvalue");
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var field_r710 = core.ɵɵnextContext().$implicit;
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngForOf", core.ɵɵpipeBind1(2, 1, field_r710.value));
    } }
    function OnboardingCreateComponent_ng_container_2_div_1_div_6_div_7_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "div", 17);
        core.ɵɵelementStart(1, "div", 18);
        core.ɵɵelementStart(2, "div", 19);
        core.ɵɵelementStart(3, "div", 20);
        core.ɵɵelementStart(4, "strong");
        core.ɵɵtext(5);
        core.ɵɵelementEnd();
        core.ɵɵelement(6, "br");
        core.ɵɵtemplate(7, OnboardingCreateComponent_ng_container_2_div_1_div_6_div_7_ng_container_7_Template, 4, 1, "ng-container", 1);
        core.ɵɵtemplate(8, OnboardingCreateComponent_ng_container_2_div_1_div_6_div_7_ng_container_8_Template, 3, 3, "ng-container", 1);
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var field_r710 = ctx.$implicit;
        var ctx_r709 = core.ɵɵnextContext(4);
        core.ɵɵproperty("id", field_r710.key);
        core.ɵɵadvance(5);
        core.ɵɵtextInterpolate(field_r710.key);
        core.ɵɵadvance(2);
        core.ɵɵproperty("ngIf", !ctx_r709.isObject(field_r710.value));
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", ctx_r709.isObject(field_r710.value));
    } }
    function OnboardingCreateComponent_ng_container_2_div_1_div_6_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "div", 11);
        core.ɵɵelementStart(1, "div", 12);
        core.ɵɵelementStart(2, "div", 13);
        core.ɵɵelementStart(3, "h4", 14);
        core.ɵɵtext(4);
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementStart(5, "div", 15);
        core.ɵɵelementContainerStart(6);
        core.ɵɵtemplate(7, OnboardingCreateComponent_ng_container_2_div_1_div_6_div_7_Template, 9, 4, "div", 16);
        core.ɵɵpipe(8, "keyvalue");
        core.ɵɵelementContainerEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var category_r707 = ctx.$implicit;
        core.ɵɵproperty("id", category_r707.name);
        core.ɵɵadvance(4);
        core.ɵɵtextInterpolate(category_r707.key);
        core.ɵɵadvance(3);
        core.ɵɵproperty("ngForOf", core.ɵɵpipeBind1(8, 3, category_r707.value));
    } }
    function OnboardingCreateComponent_ng_container_2_div_1_Template(rf, ctx) { if (rf & 1) {
        var _r719 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "div", 5);
        core.ɵɵelementStart(1, "div", 6);
        core.ɵɵelementStart(2, "button", 7);
        core.ɵɵlistener("click", function OnboardingCreateComponent_ng_container_2_div_1_Template_button_click_2_listener() { core.ɵɵrestoreView(_r719); var ctx_r718 = core.ɵɵnextContext(2); return ctx_r718.showMode = false; });
        core.ɵɵtext(3, " Modifier ");
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementStart(4, "div", 8);
        core.ɵɵelementStart(5, "div", 9);
        core.ɵɵtemplate(6, OnboardingCreateComponent_ng_container_2_div_1_div_6_Template, 9, 5, "div", 10);
        core.ɵɵpipe(7, "keyvalue");
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r705 = core.ɵɵnextContext(2);
        core.ɵɵadvance(6);
        core.ɵɵproperty("ngForOf", core.ɵɵpipeBind1(7, 1, ctx_r705.currentOnboarding.view));
    } }
    function OnboardingCreateComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainerStart(0);
        core.ɵɵtemplate(1, OnboardingCreateComponent_ng_container_2_div_1_Template, 8, 3, "div", 4);
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var ctx_r702 = core.ɵɵnextContext();
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", ctx_r702.isSelected);
    } }
    function OnboardingCreateComponent_div_4_mat_option_10_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "mat-option", 28);
        core.ɵɵtext(1);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var template_r721 = ctx.$implicit;
        core.ɵɵproperty("value", template_r721._id);
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate1("", template_r721.Name, " ");
    } }
    function OnboardingCreateComponent_div_4_Template(rf, ctx) { if (rf & 1) {
        var _r723 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "div", 22);
        core.ɵɵelementStart(1, "h3");
        core.ɵɵtext(2, " Onboarding de votre nouveau collaborateur ");
        core.ɵɵelementEnd();
        core.ɵɵelementStart(3, "p");
        core.ɵɵtext(4, "S\u00E9lectionnez le nom de votre profil afin de pouvoir d\u00E9marrer son onboarding.");
        core.ɵɵelementEnd();
        core.ɵɵelementStart(5, "div", 23);
        core.ɵɵelementStart(6, "mat-form-field", 24);
        core.ɵɵelementStart(7, "mat-label");
        core.ɵɵtext(8, "Profil");
        core.ɵɵelementEnd();
        core.ɵɵelementStart(9, "mat-select", 25);
        core.ɵɵlistener("selectionChange", function OnboardingCreateComponent_div_4_Template_mat_select_selectionChange_9_listener($event) { core.ɵɵrestoreView(_r723); var ctx_r722 = core.ɵɵnextContext(); return ctx_r722.onSelect($event.value); });
        core.ɵɵtemplate(10, OnboardingCreateComponent_div_4_mat_option_10_Template, 2, 2, "mat-option", 26);
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementStart(11, "button", 27);
        core.ɵɵlistener("click", function OnboardingCreateComponent_div_4_Template_button_click_11_listener() { core.ɵɵrestoreView(_r723); var ctx_r724 = core.ɵɵnextContext(); return ctx_r724.onSelectContactTemplate(); });
        core.ɵɵtext(12);
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r703 = core.ɵɵnextContext();
        var tmp_1_0 = null;
        var currVal_1 = ((tmp_1_0 = ctx_r703.form.get("TemplateId")) == null ? null : tmp_1_0.value) == "" ? 0.4 : 1;
        var tmp_2_0 = null;
        var currVal_2 = ((tmp_2_0 = ctx_r703.form.get("TemplateId")) == null ? null : tmp_2_0.value) == "";
        core.ɵɵadvance(10);
        core.ɵɵproperty("ngForOf", ctx_r703.templates);
        core.ɵɵadvance(1);
        core.ɵɵstyleProp("opacity", currVal_1);
        core.ɵɵproperty("disabled", currVal_2);
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate1(" ", ctx_r703.id && ctx_r703.id !== "0" ? "Modifier l\u2019onboarding" : "D\u00E9marrer l\u2019onboarding", " ");
    } }
    function OnboardingCreateComponent_div_5_li_6_mat_icon_4_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "mat-icon");
        core.ɵɵtext(1, "keyboard_arrow_right");
        core.ɵɵelementEnd();
    } }
    function OnboardingCreateComponent_div_5_li_6_Template(rf, ctx) { if (rf & 1) {
        var _r731 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "li", 35);
        core.ɵɵlistener("click", function OnboardingCreateComponent_div_5_li_6_Template_li_click_0_listener() { core.ɵɵrestoreView(_r731); var i_r728 = ctx.index; var ctx_r730 = core.ɵɵnextContext(2); return ctx_r730.onSelectMenu(i_r728); });
        core.ɵɵelementStart(1, "span");
        core.ɵɵelementStart(2, "span", 36);
        core.ɵɵtext(3);
        core.ɵɵelementEnd();
        core.ɵɵtemplate(4, OnboardingCreateComponent_div_5_li_6_mat_icon_4_Template, 2, 0, "mat-icon", 1);
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var cat_r727 = ctx.$implicit;
        var i_r728 = ctx.index;
        var ctx_r725 = core.ɵɵnextContext(2);
        core.ɵɵclassMap(ctx_r725.selectedMenu === i_r728 ? "active" : "");
        core.ɵɵadvance(2);
        core.ɵɵproperty("ngxScrollTo", "#" + cat_r727.name);
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate(cat_r727.name);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", ctx_r725.checkSubForm(cat_r727.forms));
    } }
    function OnboardingCreateComponent_div_5_div_11_mat_select_5_mat_option_1_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "mat-option", 28);
        core.ɵɵtext(1);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var select_r737 = ctx.$implicit;
        core.ɵɵproperty("value", select_r737.value);
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate1(" ", select_r737.value, "");
    } }
    var _c0$4 = function () { return { standalone: true }; };
    function OnboardingCreateComponent_div_5_div_11_mat_select_5_Template(rf, ctx) { if (rf & 1) {
        var _r740 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "mat-select", 40);
        core.ɵɵlistener("ngModelChange", function OnboardingCreateComponent_div_5_div_11_mat_select_5_Template_mat_select_ngModelChange_0_listener($event) { core.ɵɵrestoreView(_r740); var category_r732 = core.ɵɵnextContext().$implicit; return category_r732.selector.value = $event; });
        core.ɵɵtemplate(1, OnboardingCreateComponent_div_5_div_11_mat_select_5_mat_option_1_Template, 2, 2, "mat-option", 26);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var category_r732 = core.ɵɵnextContext().$implicit;
        core.ɵɵproperty("ngModel", category_r732.selector.value)("ngModelOptions", core.ɵɵpureFunction0(3, _c0$4));
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngForOf", category_r732.selector.defaultValue);
    } }
    function OnboardingCreateComponent_div_5_div_11_div_8_div_1_div_5_div_1_div_1_div_5_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
        var _r756 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "div", 18);
        core.ɵɵelementStart(1, "div", 19);
        core.ɵɵelementStart(2, "div", 20);
        core.ɵɵelementStart(3, "lib-sub-create-onboarding", 42);
        core.ɵɵlistener("onDrop", function OnboardingCreateComponent_div_5_div_11_div_8_div_1_div_5_div_1_div_1_div_5_div_1_div_1_Template_lib_sub_create_onboarding_onDrop_3_listener($event) { core.ɵɵrestoreView(_r756); var ctx_r755 = core.ɵɵnextContext(10); return ctx_r755.drop($event); });
        core.ɵɵelement(4, "div", 43);
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r757 = core.ɵɵnextContext();
        var c2_r752 = ctx_r757.$implicit;
        var l_r753 = ctx_r757.index;
        var ctx_r758 = core.ɵɵnextContext(3);
        var child_r747 = ctx_r758.$implicit;
        var k_r748 = ctx_r758.index;
        core.ɵɵadvance(3);
        core.ɵɵproperty("field", c2_r752)("length", child_r747 == null ? null : child_r747.forms == null ? null : child_r747.forms.length)("i", k_r748)("j", l_r753);
    } }
    function OnboardingCreateComponent_div_5_div_11_div_8_div_1_div_5_div_1_div_1_div_5_div_1_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "div", 47);
        core.ɵɵtemplate(1, OnboardingCreateComponent_div_5_div_11_div_8_div_1_div_5_div_1_div_1_div_5_div_1_div_1_Template, 5, 4, "div", 41);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var c2_r752 = ctx.$implicit;
        var ctx_r751 = core.ɵɵnextContext(9);
        core.ɵɵproperty("id", c2_r752.key);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", c2_r752.expandOnboarding && ctx_r751.onCheckConditionLocationValue(c2_r752.isConditional, c2_r752.conditionLocation, c2_r752.conditionValue));
    } }
    function OnboardingCreateComponent_div_5_div_11_div_8_div_1_div_5_div_1_div_1_div_5_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "div", 45);
        core.ɵɵtemplate(1, OnboardingCreateComponent_div_5_div_11_div_8_div_1_div_5_div_1_div_1_div_5_div_1_Template, 2, 2, "div", 46);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var child_r747 = core.ɵɵnextContext(2).$implicit;
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngForOf", child_r747.forms);
    } }
    function OnboardingCreateComponent_div_5_div_11_div_8_div_1_div_5_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
        var _r761 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "div", 18);
        core.ɵɵelementStart(1, "div", 19);
        core.ɵɵelementStart(2, "div", 20);
        core.ɵɵelementStart(3, "lib-sub-create-onboarding", 42);
        core.ɵɵlistener("onDrop", function OnboardingCreateComponent_div_5_div_11_div_8_div_1_div_5_div_1_div_1_Template_lib_sub_create_onboarding_onDrop_3_listener($event) { core.ɵɵrestoreView(_r761); var ctx_r760 = core.ɵɵnextContext(7); return ctx_r760.drop($event); });
        core.ɵɵelementStart(4, "div", 43);
        core.ɵɵtemplate(5, OnboardingCreateComponent_div_5_div_11_div_8_div_1_div_5_div_1_div_1_div_5_Template, 2, 1, "div", 44);
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r762 = core.ɵɵnextContext();
        var child_r747 = ctx_r762.$implicit;
        var k_r748 = ctx_r762.index;
        var ctx_r763 = core.ɵɵnextContext(3);
        var field_r742 = ctx_r763.$implicit;
        var j_r743 = ctx_r763.index;
        core.ɵɵadvance(3);
        core.ɵɵproperty("field", child_r747)("length", field_r742 == null ? null : field_r742.forms == null ? null : field_r742.forms.length)("i", j_r743)("j", k_r748);
        core.ɵɵadvance(2);
        core.ɵɵproperty("ngIf", child_r747.forms && child_r747.value);
    } }
    function OnboardingCreateComponent_div_5_div_11_div_8_div_1_div_5_div_1_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "div", 47);
        core.ɵɵtemplate(1, OnboardingCreateComponent_div_5_div_11_div_8_div_1_div_5_div_1_div_1_Template, 6, 5, "div", 41);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var child_r747 = ctx.$implicit;
        var ctx_r746 = core.ɵɵnextContext(6);
        core.ɵɵproperty("id", child_r747.key);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", child_r747.expandOnboarding && ctx_r746.onCheckConditionLocationValue(child_r747.isConditional, child_r747.conditionLocation, child_r747.conditionValue));
    } }
    function OnboardingCreateComponent_div_5_div_11_div_8_div_1_div_5_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "div", 45);
        core.ɵɵtemplate(1, OnboardingCreateComponent_div_5_div_11_div_8_div_1_div_5_div_1_Template, 2, 2, "div", 46);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var field_r742 = core.ɵɵnextContext(2).$implicit;
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngForOf", field_r742.forms);
    } }
    function OnboardingCreateComponent_div_5_div_11_div_8_div_1_Template(rf, ctx) { if (rf & 1) {
        var _r766 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "div", 18);
        core.ɵɵelementStart(1, "div", 19);
        core.ɵɵelementStart(2, "div", 20);
        core.ɵɵelementStart(3, "lib-sub-create-onboarding", 42);
        core.ɵɵlistener("onDrop", function OnboardingCreateComponent_div_5_div_11_div_8_div_1_Template_lib_sub_create_onboarding_onDrop_3_listener($event) { core.ɵɵrestoreView(_r766); var ctx_r765 = core.ɵɵnextContext(4); return ctx_r765.drop($event); });
        core.ɵɵelementStart(4, "div", 43);
        core.ɵɵtemplate(5, OnboardingCreateComponent_div_5_div_11_div_8_div_1_div_5_Template, 2, 1, "div", 44);
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r767 = core.ɵɵnextContext();
        var field_r742 = ctx_r767.$implicit;
        var j_r743 = ctx_r767.index;
        var ctx_r768 = core.ɵɵnextContext();
        var category_r732 = ctx_r768.$implicit;
        var i_r733 = ctx_r768.index;
        core.ɵɵadvance(3);
        core.ɵɵproperty("field", field_r742)("length", category_r732 == null ? null : category_r732.forms == null ? null : category_r732.forms.length)("i", i_r733)("j", j_r743);
        core.ɵɵadvance(2);
        core.ɵɵproperty("ngIf", field_r742.forms && field_r742.value);
    } }
    function OnboardingCreateComponent_div_5_div_11_div_8_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "div", 17);
        core.ɵɵtemplate(1, OnboardingCreateComponent_div_5_div_11_div_8_div_1_Template, 6, 5, "div", 41);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var field_r742 = ctx.$implicit;
        var ctx_r735 = core.ɵɵnextContext(3);
        core.ɵɵproperty("id", field_r742.key);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", field_r742.expandOnboarding && ctx_r735.onCheckConditionLocationValue(field_r742.isConditional, field_r742.conditionLocation, field_r742.conditionValue));
    } }
    function OnboardingCreateComponent_div_5_div_11_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "div", 37);
        core.ɵɵelementStart(1, "div", 12);
        core.ɵɵelementStart(2, "div", 13);
        core.ɵɵelementStart(3, "h4", 14);
        core.ɵɵtext(4);
        core.ɵɵelementEnd();
        core.ɵɵtemplate(5, OnboardingCreateComponent_div_5_div_11_mat_select_5_Template, 2, 4, "mat-select", 38);
        core.ɵɵelementEnd();
        core.ɵɵelementStart(6, "div", 39);
        core.ɵɵelementContainerStart(7);
        core.ɵɵtemplate(8, OnboardingCreateComponent_div_5_div_11_div_8_Template, 2, 2, "div", 16);
        core.ɵɵelementContainerEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var category_r732 = ctx.$implicit;
        var i_r733 = ctx.index;
        var ctx_r726 = core.ɵɵnextContext(2);
        core.ɵɵclassMap(i_r733 === ctx_r726.selectedCategoryIndex ? "active-content" : "");
        core.ɵɵproperty("id", category_r732.name);
        core.ɵɵadvance(4);
        core.ɵɵtextInterpolate(category_r732.name);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", category_r732.selector);
        core.ɵɵadvance(3);
        core.ɵɵproperty("ngForOf", category_r732.forms);
    } }
    function OnboardingCreateComponent_div_5_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "div", 5);
        core.ɵɵelementStart(1, "div", 6);
        core.ɵɵelementStart(2, "div", 29);
        core.ɵɵelementStart(3, "h3", 30);
        core.ɵɵtext(4);
        core.ɵɵelementEnd();
        core.ɵɵelementStart(5, "ol");
        core.ɵɵtemplate(6, OnboardingCreateComponent_div_5_li_6_Template, 5, 5, "li", 31);
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementStart(7, "button", 32);
        core.ɵɵtext(8, " Soumettre ma fiche de poste ");
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementStart(9, "div", 33);
        core.ɵɵelementStart(10, "div", 9);
        core.ɵɵtemplate(11, OnboardingCreateComponent_div_5_div_11_Template, 9, 6, "div", 34);
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r704 = core.ɵɵnextContext();
        core.ɵɵadvance(4);
        core.ɵɵtextInterpolate1(" ", ctx_r704.currentTemplate == null ? null : ctx_r704.currentTemplate.Name, " ");
        core.ɵɵadvance(2);
        core.ɵɵproperty("ngForOf", ctx_r704.categories);
        core.ɵɵadvance(5);
        core.ɵɵproperty("ngForOf", ctx_r704.categories);
    } }
    var _c1$2 = function () { return { "display": "none" }; };
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
            this.showMode = false;
            this.selectedCategoryIndex = null;
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
                    if (this.id && this.id !== "0") {
                        this.showMode = true;
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
                                        //console.log(this.currentOnboarding);
                                        this.form.patchValue(this.currentOnboarding);
                                        this.categories = this.currentOnboarding.categories;
                                        this.currentTemplate = (_b = this.currentOnboarding) === null || _b === void 0 ? void 0 : _b.vtemplates[0];
                                        if (this.currentOnboarding.TemplateId) {
                                            this.onSelectContactTemplate();
                                        }
                                        return [2 /*return*/];
                                }
                            });
                        }); }, 500);
                    }
                    else {
                        setTimeout(function () { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                return [2 /*return*/];
                            });
                        }); }, 500);
                    }
                    return [2 /*return*/];
                });
            });
        };
        OnboardingCreateComponent.prototype.onCreateDynamicForm = function () {
            this.form = this.fb.group({
                TemplateId: [0, forms.Validators.required]
            });
        };
        OnboardingCreateComponent.prototype.onSelectContactTemplate = function () {
            this.isSelected = true;
        };
        OnboardingCreateComponent.prototype.onSelect = function (id) {
            this.currentTemplate = this.templates.find(function (t) { return t._id === id; });
            this.categories = this.currentTemplate.categories
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
                            if (!(this.form.valid && this.onChangeCategory())) return [3 /*break*/, 7];
                            if (!(this.id && this.id !== "0")) return [3 /*break*/, 2];
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
                            if (this.id && this.id !== "0") {
                                this.categories = result.categories;
                                this.currentOnboarding = result;
                            }
                            return [4 /*yield*/, this.service.getAllProfil()];
                        case 5:
                            _b.sent();
                            this.canExit = true;
                            this.showMode = true;
                            this.router.navigate([this.service.mainPath + '/requests']);
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
                dragDrop.moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
            }
            else {
                dragDrop.transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
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
            var _this = this;
            this.selectedMenu = i;
            this.selectedCategoryIndex = i;
            setTimeout(function () {
                _this.selectedCategoryIndex = null;
            }, 2000);
        };
        OnboardingCreateComponent.ɵfac = function OnboardingCreateComponent_Factory(t) { return new (t || OnboardingCreateComponent)(core.ɵɵdirectiveInject(forms.FormBuilder), core.ɵɵdirectiveInject(OnboardingService), core.ɵɵdirectiveInject(router.ActivatedRoute), core.ɵɵdirectiveInject(router.Router), core.ɵɵdirectiveInject(dialog.MatDialog)); };
        OnboardingCreateComponent.ɵcmp = core.ɵɵdefineComponent({ type: OnboardingCreateComponent, selectors: [["create-onboarding"]], decls: 6, vars: 6, consts: [[1, "content"], [4, "ngIf"], [3, "ngStyle", "formGroup", "submit"], ["class", "select-contact", 4, "ngIf"], ["class", "category", 4, "ngIf"], [1, "category"], [1, "side-bar"], ["mat-button", "", 1, "register-button", 3, "click"], [1, "fields", 2, "height", "85vh", "margin-left", "20px", "width", "85%"], [1, "example-list", "mt-20"], ["class", "category-item", 3, "id", 4, "ngFor", "ngForOf"], [1, "category-item", 3, "id"], [1, "field-content"], [1, "field-item"], [1, "category-name"], [1, ""], ["class", "field-category", 3, "id", 4, "ngFor", "ngForOf"], [1, "field-category", 3, "id"], [1, "inner-loop"], [1, "fields-content"], [1, "fields-container"], [4, "ngFor", "ngForOf"], [1, "select-contact"], [1, "select-template"], ["appearance", "outline", 1, "full-width"], ["formControlName", "TemplateId", "required", "", 3, "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], ["mat-raised-button", "", "color", "primary", 3, "disabled", "click"], [3, "value"], [1, "summary"], [1, "template-title"], ["class", "li-title", 3, "class", "click", 4, "ngFor", "ngForOf"], ["mat-button", "", "type", "submit", 1, "register-button"], [1, "fields", 2, "height", "85vh"], ["class", "category-item content-item", 3, "class", "id", 4, "ngFor", "ngForOf"], [1, "li-title", 3, "click"], [3, "ngxScrollTo"], [1, "category-item", "content-item", 3, "id"], ["placeholder", "Company", "required", "", "style", "width: 150px;", 3, "ngModel", "ngModelOptions", "ngModelChange", 4, "ngIf"], [1, "category-container"], ["placeholder", "Company", "required", "", 2, "width", "150px", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["class", "inner-loop", 4, "ngIf"], [3, "field", "length", "i", "j", "onDrop"], [1, "child"], ["class", "inner-child", 4, "ngIf"], [1, "inner-child"], ["class", "inner-child-content", 3, "id", 4, "ngFor", "ngForOf"], [1, "inner-child-content", 3, "id"]], template: function OnboardingCreateComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵelementStart(0, "main");
                core.ɵɵelementStart(1, "div", 0);
                core.ɵɵtemplate(2, OnboardingCreateComponent_ng_container_2_Template, 2, 1, "ng-container", 1);
                core.ɵɵelementStart(3, "form", 2);
                core.ɵɵlistener("submit", function OnboardingCreateComponent_Template_form_submit_3_listener() { return ctx.onSubmit(); });
                core.ɵɵtemplate(4, OnboardingCreateComponent_div_4_Template, 13, 5, "div", 3);
                core.ɵɵtemplate(5, OnboardingCreateComponent_div_5_Template, 12, 3, "div", 4);
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
            } if (rf & 2) {
                core.ɵɵadvance(2);
                core.ɵɵproperty("ngIf", ctx.showMode);
                core.ɵɵadvance(1);
                core.ɵɵproperty("ngStyle", ctx.showMode && core.ɵɵpureFunction0(5, _c1$2))("formGroup", ctx.form);
                core.ɵɵadvance(1);
                core.ɵɵproperty("ngIf", !ctx.isSelected);
                core.ɵɵadvance(1);
                core.ɵɵproperty("ngIf", ctx.isSelected);
            } }, directives: [common.NgIf, forms.ɵangular_packages_forms_forms_y, forms.NgControlStatusGroup, common.NgStyle, forms.FormGroupDirective, button.MatButton, common.NgForOf, formField.MatFormField, formField.MatLabel, select.MatSelect, forms.NgControlStatus, forms.FormControlName, forms.RequiredValidator, core$1.MatOption, ngxScrollTo.ScrollToDirective, icon.MatIcon, forms.NgModel, SubOnboardingCreateComponent], pipes: [common.KeyValuePipe], styles: ["main[_ngcontent-%COMP%]{background:no-repeat padding-box #f4f7f9;height:100vh;width:100%;display:flex;flex-direction:column;align-items:center}main[_ngcontent-%COMP%]   .disabled[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{background-color:transparent!important}main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{width:99%;height:100%;padding-left:1%}main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font:bold 32px/30px Nexa Text;letter-spacing:0;color:#171f26;padding-top:20px}main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font:20px/26px Nexa Text;letter-spacing:0;color:#171f26}main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   p.sub-title[_ngcontent-%COMP%]{max-width:400px}main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .select-contact[_ngcontent-%COMP%]{max-width:70%;margin:5% auto auto;background:no-repeat padding-box #fff;border:1px solid #dce4e9;border-radius:6px;padding:5%}main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .select-contact[_ngcontent-%COMP%]   .select-template[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;justify-content:space-between;margin-top:50px}main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .select-contact[_ngcontent-%COMP%]   .select-template[_ngcontent-%COMP%]   .full-width[_ngcontent-%COMP%]{width:40%}main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .select-contact[_ngcontent-%COMP%]   .select-template[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{float:right;text-align:center;border:1px solid #543cb6;border-radius:7px;padding:1em 2em;display:flex;align-items:center;background-color:transparent;font:bold 15px/17px Nexa;letter-spacing:0;color:#543cb6;-ms-grid-row-align:center;align-self:center;width:220px}main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .category[_ngcontent-%COMP%]   .onboarding-mat-stepper[_ngcontent-%COMP%]   mat-horizontal-stepper[_ngcontent-%COMP%]   .next-step[_ngcontent-%COMP%]{float:right}main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{display:flex;height:100%;width:100%;max-width:1500px}main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .select-contact[_ngcontent-%COMP%]{max-width:70%;margin:5% auto auto;background:no-repeat padding-box #fff;border:1px solid #dce4e9;border-radius:6px;padding:5%}main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .select-contact[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{float:right;text-align:center;border:1px solid #543cb6;border-radius:7px;padding:.7em 2em .5em;display:flex;align-items:center;background-color:transparent;font:bold 15px/17px Nexa;letter-spacing:0;color:#543cb6;align-self:flex-end}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]{width:786px;background:no-repeat padding-box #fff;border:1px solid #dce4e9;border-radius:6px;opacity:1;margin:auto;padding:0 25px;-ms-grid-row-align:center;align-self:center}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{text-align:center;font:900 32px/48px Nexa;letter-spacing:0;color:#171f26}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font:18px/24px Nexa Text;letter-spacing:0;color:#171f26}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .profil-name-content[_ngcontent-%COMP%]{display:flex;align-items:center;position:relative}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .profil-name-content[_ngcontent-%COMP%]   .add-picto[_ngcontent-%COMP%]{margin-right:15px;min-width:50px;width:30px;padding:9px 12px}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .profil-name-content[_ngcontent-%COMP%]   .add-picto[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin-right:10px}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .profil-name-content[_ngcontent-%COMP%]   .list-picto[_ngcontent-%COMP%]{position:absolute;height:200px;width:100%;background:no-repeat padding-box #fff;border:1px solid #171f26;border-radius:8px;top:100%;z-index:1}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .profil-name-content[_ngcontent-%COMP%]   .list-picto[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin:15px;border:none;font-size:40px}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .profil-name-content[_ngcontent-%COMP%]   .list-picto[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]:hover{color:#830b6b!important;cursor:pointer}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .box-title-content[_ngcontent-%COMP%]{width:100%;margin:25px auto}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font:900 32px/38px Nexa;letter-spacing:0;color:#171f26}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font:15px/26px Nexa Text;letter-spacing:0;color:#171f26;text-align:center}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .link-create-profil[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:center}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{text-align:center;border:1px solid #543cb6;border-radius:7px;padding:.7em 2em .5em;display:flex;align-items:center;background-color:transparent;font:bold 15px/17px Nexa;letter-spacing:0;color:#543cb6}main[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:space-between}.expand-button[_ngcontent-%COMP%]{color:#5a607f!important;background-color:transparent!important;box-shadow:none!important}.category-name[_ngcontent-%COMP%]{text-align:left;font:bold 22px/48px Nexa Text;letter-spacing:0;color:#171f26;padding-left:15px}.full-width[_ngcontent-%COMP%]{width:100%}.field-action[_ngcontent-%COMP%]{width:10%}.field-size[_ngcontent-%COMP%]{width:90%;margin:auto 2% auto auto}  .mat-form-field-appearance-fill .mat-form-field-flex{background-color:#fff}  .mat-form-field-appearance-fill .mat-form-field-underline::before{background-color:transparent}[_nghost-%COMP%]     .mat-checkbox-checked.mat-accent .mat-checkbox-background, [_nghost-%COMP%]     .mat-checkbox-indeterminate.mat-accent .mat-checkbox-background{background-color:transparent}.category-action[_ngcontent-%COMP%]{display:flex;width:100%}.delete-field[_ngcontent-%COMP%]{margin:auto 2%}.radio-group[_ngcontent-%COMP%]   .mat-radio-button[_ngcontent-%COMP%]{margin-right:10px}.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary[_ngcontent-%COMP%]{background-color:#3f51b5;color:#fff;min-height:20px;font-size:10px}.move-icons[_ngcontent-%COMP%]{cursor:move}.category-item[_ngcontent-%COMP%], .cdk-drag-placeholder[_ngcontent-%COMP%]{display:flex;align-items:baseline;width:98%;border:1px solid #dce4e9;border-radius:8px;background-color:#fff;padding-bottom:10px;margin-top:10px;min-height:60px}.category-item[_ngcontent-%COMP%]   .left-action[_ngcontent-%COMP%], .cdk-drag-placeholder[_ngcontent-%COMP%]   .left-action[_ngcontent-%COMP%]{height:auto;background-color:#49a094;padding-top:7px;width:40px;-ms-grid-row-align:stretch;align-self:stretch;border-top-left-radius:8px;border-bottom-left-radius:8px}.category-item[_ngcontent-%COMP%]   .left-action[_ngcontent-%COMP%]   .transparent-button[_ngcontent-%COMP%], .cdk-drag-placeholder[_ngcontent-%COMP%]   .left-action[_ngcontent-%COMP%]   .transparent-button[_ngcontent-%COMP%]{background-color:transparent;box-shadow:none;width:40px;padding:0;margin:0;min-width:auto;color:#fff}.category-item[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%], .cdk-drag-placeholder[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%]{width:100%;-ms-grid-row-align:center;align-self:center}.category-item[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%], .cdk-drag-placeholder[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;border:transparent!important}.category-item[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]   .mat-form-field-wrapper[_ngcontent-%COMP%]   .mat-form-field-flex[_ngcontent-%COMP%]   .mat-form-field-outline[_ngcontent-%COMP%], .category-item[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%]   .mat-form-field-outline[_ngcontent-%COMP%], .cdk-drag-placeholder[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]   .mat-form-field-wrapper[_ngcontent-%COMP%]   .mat-form-field-flex[_ngcontent-%COMP%]   .mat-form-field-outline[_ngcontent-%COMP%], .cdk-drag-placeholder[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%]   .mat-form-field-outline[_ngcontent-%COMP%]{color:transparent!important}.category-item[_ngcontent-%COMP%]   .category-container[_ngcontent-%COMP%], .cdk-drag-placeholder[_ngcontent-%COMP%]   .category-container[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;justify-content:flex-start;align-items:flex-start}.cdk-drag-preview[_ngcontent-%COMP%]{box-sizing:border-box;border-radius:4px;opacity:1}.cdk-drag-preview[_ngcontent-%COMP%]   .expand-button[_ngcontent-%COMP%]{color:#5a607f!important;background-color:transparent!important;box-shadow:none!important;margin-right:28px!important}.cdk-drag-placeholder[_ngcontent-%COMP%]{opacity:0}.cdk-drag-animating[_ngcontent-%COMP%], .example-list.cdk-drop-list-dragging[_ngcontent-%COMP%]   .category-item[_ngcontent-%COMP%]:not(.cdk-drag-placeholder){transition:transform 250ms cubic-bezier(0,0,.2,1)}.child[_ngcontent-%COMP%]{margin-left:0}.child[_ngcontent-%COMP%]   .inner-child[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap}.category[_ngcontent-%COMP%]{display:flex;flex-direction:row;width:100vw}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]{width:250px;background-color:#fff;margin:10px 20px;border-radius:5px;border:1px solid #dbcbcb96}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:15px;border-bottom:1px solid #dbcbcb96;margin:10px;padding-bottom:5px;font-family:\"Nexa Text\";display:flex;flex-direction:column;justify-content:space-between;align-items:flex-start}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-weight:600}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin-left:15px;cursor:pointer}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   h3.template-title[_ngcontent-%COMP%]{font:900 24px/36px Nexa Text;letter-spacing:0;color:#171f26}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]{font-weight:600;margin-left:-27px;font-size:15px;list-style:none}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:5px;margin:5px auto;cursor:pointer;text-align:left;font:12px/19px Nexa Text;letter-spacing:0;color:#535760}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]{padding-left:0;margin-left:0}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.li-title[_ngcontent-%COMP%]{font-size:14px;font-weight:600;margin-right:10px}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.li-title[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:140px;outline:0;border:1px dashed grey}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.li-title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:inline-flex;align-items:center;width:100%}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.li-title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin-left:10px}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.li-title.active[_ngcontent-%COMP%], .category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.li-title[_ngcontent-%COMP%]:hover{background:no-repeat padding-box #e5e8ee;border-radius:5px}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.sub-title[_ngcontent-%COMP%]{list-style:none;padding-left:20px}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.sub-title.active[_ngcontent-%COMP%], .category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.sub-title.active[_ngcontent-%COMP%]::marker, .category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.sub-title[_ngcontent-%COMP%]:hover{font-weight:600;background:no-repeat padding-box #e5e8ee;border-radius:5px}.category[_ngcontent-%COMP%]   .fields[_ngcontent-%COMP%]{width:90%;max-height:100vh;overflow:auto;margin-right:.5%;overflow-x:hidden}.category[_ngcontent-%COMP%]   .disabled[_ngcontent-%COMP%]{background-color:#f4f7f9!important}.category[_ngcontent-%COMP%]   .expand-button[_ngcontent-%COMP%]{color:#5a607f!important;background-color:transparent!important;box-shadow:none!important;margin-right:28px!important}.category[_ngcontent-%COMP%]   .expand-button[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%]{font-size:40px}.category[_ngcontent-%COMP%]   .transparent-button[_ngcontent-%COMP%]{background-color:transparent;box-shadow:none;width:40px;padding:0;margin:0;margin-left:0!important;min-width:auto;color:#fff}.add-button-sub-category[_ngcontent-%COMP%]{width:95.5%!important;margin-bottom:22px;margin-left:22px}.add-button-container[_ngcontent-%COMP%]{background:no-repeat padding-box #fff;border:1px dashed #dce4e9;border-radius:8px;margin-top:10px;padding:10px;display:flex;justify-content:center;align-items:center;width:98.5%;margin-bottom:22px}.add-button-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{display:flex;align-items:center;background-color:transparent;border:none;cursor:pointer;font:17px/26px Nexa Text;letter-spacing:0;color:#c2c8d5;box-shadow:none}.add-category[_ngcontent-%COMP%]{border:1px dashed #c2c8d5;border-radius:5px;margin-left:10px;margin-bottom:10px;font:bold 12px/19px Nexa Text;letter-spacing:0;color:#c2c8d5;width:92%}.inner-loop[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]{display:flex;height:100%;margin:0;width:100%}.inner-loop[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]   .button-action[_ngcontent-%COMP%]{background-color:#6fe8d7;-ms-grid-row-align:stretch;align-self:stretch;margin-top:0;margin-left:20px;border-bottom-left-radius:8px;border-top-left-radius:8px}.inner-loop[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]   .button-action[_ngcontent-%COMP%]   .transparent-button[_ngcontent-%COMP%]{background-color:transparent;box-shadow:none;width:40px;padding:0;margin:0;min-width:auto;color:#fff}.inner-loop[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]   .child-2-background[_ngcontent-%COMP%]{background-color:#cffaf4!important}.inner-loop[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]   .child-3-background[_ngcontent-%COMP%]{background-color:#e5e8ee!important}.inner-loop[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]   .fields-container[_ngcontent-%COMP%]{width:100%;padding-left:10px;padding-right:10px;padding-top:5px}.inner-loop[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]   .fields-container[_ngcontent-%COMP%]   lib-sub-category[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;width:100%}.inner-loop[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]   .fields-container[_ngcontent-%COMP%]   lib-sub-category[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]   .button-action[_ngcontent-%COMP%]{background-color:#6fe8d7;height:100%;margin:auto 15px auto auto;display:flex}.inner-loop[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]   .fields-container[_ngcontent-%COMP%]   lib-sub-category[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]   .button-action[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{box-shadow:none;background-color:transparent;color:#fff}.side-bar[_ngcontent-%COMP%]{display:flex;flex-direction:column}.register-button[_ngcontent-%COMP%]{background:no-repeat padding-box #171f26!important;border:2px solid #192128!important;border-radius:8px;color:#fff!important;width:85%;margin-left:22px!important;border:none!important}.content-item[_ngcontent-%COMP%]{transition-property:border-image-slice border-image-source border-width;transition-timing-function:ease-in-out;transition-duration:.5s}.active-content[_ngcontent-%COMP%]{border-image-slice:1;border-width:2px;border-image-source:linear-gradient(to left,#9d107d,#4862ab)}"] });
        return OnboardingCreateComponent;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(OnboardingCreateComponent, [{
            type: core.Component,
            args: [{
                    selector: "create-onboarding",
                    templateUrl: "./onboarding-create.component.html",
                    styleUrls: ["./onboarding-create.component.scss"],
                }]
        }], function () { return [{ type: forms.FormBuilder }, { type: OnboardingService }, { type: router.ActivatedRoute }, { type: router.Router }, { type: dialog.MatDialog }]; }, null); })();

    function OnboardingListComponent_div_1_img_8_Template(rf, ctx) { if (rf & 1) {
        var _r811 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "img", 15);
        core.ɵɵlistener("click", function OnboardingListComponent_div_1_img_8_Template_img_click_0_listener() { core.ɵɵrestoreView(_r811); var ctx_r810 = core.ɵɵnextContext(2); return ctx_r810.cancelSearch(); });
        core.ɵɵelementEnd();
    } if (rf & 2) {
        core.ɵɵproperty("src", "/assets/icons/search_off-24px.svg", core.ɵɵsanitizeUrl);
    } }
    function OnboardingListComponent_div_1_span_12_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "span", 16);
        core.ɵɵtext(1);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r807 = core.ɵɵnextContext(2);
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate1(" ", ctx_r807.onboardingList == null ? null : ctx_r807.onboardingList.totalElements, " ticket(s) ");
    } }
    function OnboardingListComponent_div_1_ng_template_15_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵtext(0);
    } if (rf & 2) {
        var ctx_r808 = core.ɵɵnextContext(2);
        core.ɵɵtextInterpolate1(" Onboarding (", (ctx_r808.onboardingList == null ? null : ctx_r808.onboardingList.totalElements) || (ctx_r808.onboardingList == null ? null : ctx_r808.onboardingList.data == null ? null : ctx_r808.onboardingList.data.length), ") ");
    } }
    function OnboardingListComponent_div_1_ng_template_16_div_0_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelement(0, "div", 20);
    } }
    function OnboardingListComponent_div_1_ng_template_16_ngx_design_table_3_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelement(0, "ngx-design-table", 21);
    } if (rf & 2) {
        var ctx_r813 = core.ɵɵnextContext(3);
        core.ɵɵproperty("columnDefinitions", ctx_r813.columnDefinitions)("displayDetail", false)("data", ctx_r813.onboardingList)("lang", ctx_r813.lang)("btnOverride", true)("inputSearch", ctx_r813.inputSearch)("EmptyRow", true)("displayDetail", true)("blockDetails", true);
    } }
    var _c0$5 = function () { return { "margin-bottom": "100vh" }; };
    function OnboardingListComponent_div_1_ng_template_16_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵtemplate(0, OnboardingListComponent_div_1_ng_template_16_div_0_Template, 1, 0, "div", 17);
        core.ɵɵelement(1, "div", 18);
        core.ɵɵelementStart(2, "div");
        core.ɵɵtemplate(3, OnboardingListComponent_div_1_ng_template_16_ngx_design_table_3_Template, 1, 9, "ngx-design-table", 19);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r809 = core.ɵɵnextContext(2);
        core.ɵɵproperty("ngIf", ctx_r809._loading_table || !ctx_r809.onboardingList);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngStyle", ctx_r809._loading_table && core.ɵɵpureFunction0(5, _c0$5));
        core.ɵɵadvance(1);
        core.ɵɵclassProp("ticket-list", !ctx_r809._loading_table);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", ctx_r809.onboardingList);
    } }
    function OnboardingListComponent_div_1_Template(rf, ctx) { if (rf & 1) {
        var _r815 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "div", 2);
        core.ɵɵelementStart(1, "div", 3);
        core.ɵɵelementStart(2, "div", 4);
        core.ɵɵtext(3, " Suivi des demandes ");
        core.ɵɵelementEnd();
        core.ɵɵelementStart(4, "div", 5);
        core.ɵɵelementStart(5, "mat-icon");
        core.ɵɵtext(6, "search");
        core.ɵɵelementEnd();
        core.ɵɵelementStart(7, "input", 6);
        core.ɵɵlistener("ngModelChange", function OnboardingListComponent_div_1_Template_input_ngModelChange_7_listener($event) { core.ɵɵrestoreView(_r815); var ctx_r814 = core.ɵɵnextContext(); return ctx_r814.inputSearch = $event; });
        core.ɵɵelementEnd();
        core.ɵɵtemplate(8, OnboardingListComponent_div_1_img_8_Template, 1, 1, "img", 7);
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementStart(9, "div", 8);
        core.ɵɵelementStart(10, "span", 9);
        core.ɵɵtext(11, " Vous avez actuellement ");
        core.ɵɵtemplate(12, OnboardingListComponent_div_1_span_12_Template, 2, 1, "span", 10);
        core.ɵɵelementEnd();
        core.ɵɵelementStart(13, "mat-tab-group", 11);
        core.ɵɵlistener("selectedIndexChange", function OnboardingListComponent_div_1_Template_mat_tab_group_selectedIndexChange_13_listener($event) { core.ɵɵrestoreView(_r815); var ctx_r816 = core.ɵɵnextContext(); return ctx_r816.index = $event; })("selectedTabChange", function OnboardingListComponent_div_1_Template_mat_tab_group_selectedTabChange_13_listener($event) { core.ɵɵrestoreView(_r815); var ctx_r817 = core.ɵɵnextContext(); return ctx_r817.triggerChange($event); });
        core.ɵɵelementStart(14, "mat-tab", 12);
        core.ɵɵtemplate(15, OnboardingListComponent_div_1_ng_template_15_Template, 1, 1, "ng-template", 13);
        core.ɵɵtemplate(16, OnboardingListComponent_div_1_ng_template_16_Template, 4, 6, "ng-template", 14);
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r805 = core.ɵɵnextContext();
        core.ɵɵadvance(7);
        core.ɵɵproperty("ngModel", ctx_r805.inputSearch);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", ctx_r805.inputSearch && ctx_r805.inputSearch != "");
        core.ɵɵadvance(4);
        core.ɵɵproperty("ngIf", ctx_r805.index == 0);
        core.ɵɵadvance(1);
        core.ɵɵproperty("@.disabled", true)("selectedIndex", ctx_r805.index);
    } }
    var _c1$3 = function () { return { "overflow-y": "hidden", "height": "100%", "display": "flex", "position": "absolute" }; };
    var OnboardingListComponent = /** @class */ (function () {
        function OnboardingListComponent(service, router, route) {
            this.service = service;
            this.router = router;
            this.route = route;
            this.inputSearch = '';
            this.search = '';
            this.columnDefinitions = [
                {
                    key: 'Id',
                    value: 'Id',
                    order: 1,
                    class: 'u-1',
                    module: table$2.CellsComponentList.ButtonLink,
                    sort: true,
                    override: [this.service.mainPath + "/request", '_id']
                },
                {
                    key: 'createdAt',
                    value: 'Date de création',
                    order: 2,
                    class: 'u-2',
                    module: table$2.CellsComponentList.DateFormat,
                    sort: true
                },
                {
                    key: 'ContactName',
                    value: 'Contact',
                    order: 3,
                    class: 'u-2',
                    sort: true,
                    module: table$2.CellsComponentList.NameAvatar,
                    override: ['ContactName', 'Email'],
                },
                {
                    key: 'TemplateName',
                    value: 'Template',
                    order: 4,
                    class: 'u-2'
                }
            ];
            this._loading_table = true;
            this.HiddenIndex = 0;
            this.index = 0;
            this.lang = 'fr';
        }
        OnboardingListComponent.prototype.cancelSearch = function () {
            this.inputSearch = '';
        };
        OnboardingListComponent.prototype.ngOnInit = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _this = this;
                return __generator(this, function (_a) {
                    setTimeout(function () { return __awaiter(_this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, this.service.getAllOnboarding()];
                                case 1:
                                    _a.sent();
                                    return [2 /*return*/];
                            }
                        });
                    }); }, 500);
                    this.service.onboarding.subscribe(function (onboarding) {
                        console.log(onboarding);
                        setTimeout(function () {
                            _this._loading_table = false;
                        }, 2000);
                        if (onboarding) {
                            //this.onboardingList=onboarding;
                            var x = onboarding.map(function (row, index) {
                                var _a, _b, _c, _d;
                                row.ContactName = ((_b = (_a = row) === null || _a === void 0 ? void 0 : _a.vcontacts[0]) === null || _b === void 0 ? void 0 : _b.Name) || '';
                                row.Email = ((_d = (_c = row) === null || _c === void 0 ? void 0 : _c.vcontacts[0]) === null || _d === void 0 ? void 0 : _d.Email) || '';
                                row.TemplateName = row.vtemplates.length > 0 ? row.vtemplates[0].Name : '';
                                row.Id = index + 1;
                                return row;
                            });
                            _this.onboardingList = new table$2.CoreMatTable(x, {
                                active: 'Id', direction: 'desc'
                            }, { active: '', valueStart: null, valueEnd: null }, 15, true, true);
                        }
                    });
                    return [2 /*return*/];
                });
            });
        };
        OnboardingListComponent.prototype.triggerChange = function ($event) {
            var _this = this;
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
        OnboardingListComponent.ɵfac = function OnboardingListComponent_Factory(t) { return new (t || OnboardingListComponent)(core.ɵɵdirectiveInject(OnboardingService), core.ɵɵdirectiveInject(router.Router), core.ɵɵdirectiveInject(router.ActivatedRoute)); };
        OnboardingListComponent.ɵcmp = core.ɵɵdefineComponent({ type: OnboardingListComponent, selectors: [["lib-onboarding-list"]], decls: 2, vars: 3, consts: [[1, "full-height", 2, "background", "#F4F7F9 0% 0% no-repeat padding-box", 3, "ngStyle"], ["class", "main-all-ticket-list", 4, "ngIf"], [1, "main-all-ticket-list"], [1, "page-title-container"], [1, "page-title"], [1, "page-search"], ["placeholder", "Recherche", "type", "text", 1, "search-box", 3, "ngModel", "ngModelChange"], [3, "src", "click", 4, "ngIf"], [1, "content-view-list-ticket"], [1, "mat-tab-left"], ["class", "mat-tab-left-count", 4, "ngIf"], [1, "list-ticket-tab", 3, "selectedIndex", "selectedIndexChange", "selectedTabChange"], [2, "background-image", "none"], ["mat-tab-label", ""], ["matTabContent", ""], [3, "src", "click"], [1, "mat-tab-left-count"], ["class", "bt-spinner", 4, "ngIf"], [3, "ngStyle"], [3, "columnDefinitions", "displayDetail", "data", "lang", "btnOverride", "inputSearch", "EmptyRow", "blockDetails", 4, "ngIf"], [1, "bt-spinner"], [3, "columnDefinitions", "displayDetail", "data", "lang", "btnOverride", "inputSearch", "EmptyRow", "blockDetails"]], template: function OnboardingListComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵelementStart(0, "mat-card", 0);
                core.ɵɵtemplate(1, OnboardingListComponent_div_1_Template, 17, 5, "div", 1);
                core.ɵɵelementEnd();
            } if (rf & 2) {
                core.ɵɵproperty("ngStyle", ctx._loading_table && core.ɵɵpureFunction0(2, _c1$3));
                core.ɵɵadvance(1);
                core.ɵɵproperty("ngIf", ctx.onboardingList);
            } }, directives: [card.MatCard, common.NgStyle, common.NgIf, icon.MatIcon, forms.DefaultValueAccessor, forms.NgControlStatus, forms.NgModel, tabs.MatTabGroup, tabs.MatTab, tabs.MatTabLabel, tabs.MatTabContent, table$2.TableComponent], styles: ["mat-card[_ngcontent-%COMP%]{display:block;width:100%}md-tooltip[_ngcontent-%COMP%]   ._md-content[_ngcontent-%COMP%], md-tooltip.tt-multiline[_ngcontent-%COMP%]   ._md-content[_ngcontent-%COMP%]{height:auto}table[_ngcontent-%COMP%]{width:100%}.element-detail[_ngcontent-%COMP%]   .inline[_ngcontent-%COMP%]{display:table;width:90%}.element-detail[_ngcontent-%COMP%]   .inline[_ngcontent-%COMP%]   .block1[_ngcontent-%COMP%]{display:inline-table;float:left;width:50%;text-align:left}.element-detail[_ngcontent-%COMP%]   .inline[_ngcontent-%COMP%]   .block1[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font:bold 13px/20px nexa;letter-spacing:0;color:#171f26}.element-detail[_ngcontent-%COMP%]   .inline[_ngcontent-%COMP%]   .block1[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .element-detail[_ngcontent-%COMP%]   .inline[_ngcontent-%COMP%]   .block1[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{font-size:13px!important;letter-spacing:0;color:#171f26}.main-all-ticket-list[_ngcontent-%COMP%]{display:block;grid-column-gap:0;grid-row-gap:0;max-width:1500px;margin-left:auto;margin-right:auto;width:100%;animation:.7s fadein!important;-moz-animation:.7s fadein!important;-webkit-animation:.7s fadein!important;-o-animation:.7s fadein!important}.main-all-ticket-list[_ngcontent-%COMP%]   .component-title[_ngcontent-%COMP%]{-ms-grid-row:1;-ms-grid-column:1;-ms-grid-column-span:2;grid-area:1/1/1/3;padding-left:5px;padding-top:40px;padding-bottom:40px;vertical-align:middle;width:100%}.main-all-ticket-list[_ngcontent-%COMP%]   .content-view-list-ticket[_ngcontent-%COMP%]{-ms-grid-row:2;-ms-grid-row-span:2;-ms-grid-column:1;-ms-grid-column-span:2;grid-area:2/1/4/3;margin-left:18px;padding-left:0;padding-right:0;padding-top:20px}.main-all-ticket-list[_ngcontent-%COMP%]   .content-view-list-ticket[_ngcontent-%COMP%]   table[_ngcontent-%COMP%], app-list-preview[_ngcontent-%COMP%]{width:100%}  .mat-tab-label-active{background:#b6d1cd;opacity:1!important}.col-lg-6[_ngcontent-%COMP%]{width:50%;vertical-align:top;display:inline-table}@-webkit-keyframes three-quarters-loader{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}@keyframes three-quarters-loader{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}.three-quarters-loader[_ngcontent-%COMP%]:not(:required){-webkit-animation:1.25s linear infinite three-quarters-loader;animation:1.25s linear infinite three-quarters-loader;border:4px solid #4285f4;border-right-color:transparent;border-radius:16px;box-sizing:border-box;display:inline-block;margin-left:10px;position:relative;overflow:hidden;text-indent:-9999px;width:20px;height:20px}@keyframes fadein{from{opacity:0;margin-top:20px}to{opacity:1;margin-top:0}}@-webkit-keyframes fadein{from{opacity:0;margin-top:20px}to{opacity:1;margin-top:0}}.mat-tab-left[_ngcontent-%COMP%]{color:#171f26;font:18px/20px \"Nexa Text\";letter-spacing:0;margin-left:48px;margin-top:15px;position:absolute;text-align:left}.mat-tab-left-count[_ngcontent-%COMP%]{color:#171f26;font:17px/20px \"Nexa Text Bold\";letter-spacing:0;text-align:left}.page-title-container[_ngcontent-%COMP%]{display:flex;margin-right:48px}.page-title[_ngcontent-%COMP%]{text-align:left;font:bold 32px/30px \"Nexa Text Bold\";letter-spacing:0;color:#171f26;margin-left:2em;margin-top:-8px}.page-search[_ngcontent-%COMP%]{margin-left:auto;position:relative;width:400px}.page-search[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{left:18%;margin-top:10px;position:absolute}.page-search[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{cursor:pointer;margin-top:10px;position:absolute;right:10px}.list-ticket-tab[_ngcontent-%COMP%]{padding-left:48px;padding-right:48px}.detail-view-ticket[_ngcontent-%COMP%]{float:right;margin-right:20px;margin-top:-30px}@media (min-width:1800px){.page-search[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{left:16%}}.ticket-list[_ngcontent-%COMP%]{animation:.7s fadein!important;-moz-animation:.7s fadein!important;-webkit-animation:.7s fadein!important;-o-animation:.7s fadein!important}.bt-spinner[_ngcontent-%COMP%]{width:75px;height:75px;border-radius:50%;background-color:transparent;border:none;border-top:2px solid #03a9f4;-webkit-animation:1s linear infinite spin;animation:1s linear infinite spin;position:relative;left:50%;top:25vh}@-webkit-keyframes spin{from{transform:rotate(0)}to{transform:rotate(360deg)}}@keyframes spin{from{transform:rotate(0)}to{transform:rotate(360deg)}}.list-ticket-tab[_ngcontent-%COMP%] > .mat-tab-header[_ngcontent-%COMP%] > .mat-tab-label-container[_ngcontent-%COMP%] > .mat-tab-list[_ngcontent-%COMP%] > .mat-tab-labels[_ngcontent-%COMP%] > .mat-tab-label-active[_ngcontent-%COMP%], .site-view-tab[_ngcontent-%COMP%] > .mat-tab-header[_ngcontent-%COMP%] > .mat-tab-label-container[_ngcontent-%COMP%] > .mat-tab-list[_ngcontent-%COMP%] > .mat-tab-labels[_ngcontent-%COMP%] > .mat-tab-label-active[_ngcontent-%COMP%]{background-image:none!important;color:#171f26!important}"] });
        return OnboardingListComponent;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(OnboardingListComponent, [{
            type: core.Component,
            args: [{
                    selector: 'lib-onboarding-list',
                    templateUrl: './onboarding-list.component.html',
                    styleUrls: ['./onboarding-list.component.scss']
                }]
        }], function () { return [{ type: OnboardingService }, { type: router.Router }, { type: router.ActivatedRoute }]; }, null); })();

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
                    path: 'request/:id',
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
                    tabs.MatTabsModule
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
            UpdateProfilComponent,
            ExitConfirmComponent,
            OnboardingListComponent], imports: [forms.FormsModule,
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
            tabs.MatTabsModule], exports: [OnboardingComponent,
            http.HttpClientModule,
            TemplateProfileCreateComponent,
            TemplateProfileListComponent,
            OnboardingListComponent,
            OnboardingCreateComponent,
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
                        UpdateProfilComponent,
                        ExitConfirmComponent,
                        OnboardingListComponent
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
                        tabs.MatTabsModule
                    ],
                    providers: [OnboardingService, CanDeactivateGuard],
                    entryComponents: [UpdateProfilComponent, ExitConfirmComponent],
                    exports: [
                        OnboardingComponent,
                        http.HttpClientModule,
                        TemplateProfileCreateComponent,
                        TemplateProfileListComponent,
                        OnboardingListComponent,
                        OnboardingCreateComponent,
                        router.RouterModule,
                        tabs.MatTabsModule
                    ]
                }]
        }], function () { return [{ type: OnboardingModule, decorators: [{
                    type: core.Optional
                }, {
                    type: core.SkipSelf
                }] }]; }, null); })();

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
