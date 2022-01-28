(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common/http'), require('@angular/core'), require('rxjs'), require('@angular/router'), require('@angular/forms'), require('@angular/cdk/keycodes'), require('@angular/cdk/drag-drop'), require('@angular/material/dialog'), require('@angular/material/button'), require('@angular/material/icon'), require('@angular/material/form-field'), require('@angular/material/input'), require('@angular/common'), require('@angular/material/select'), require('@angular/material/checkbox'), require('@angular/material/core'), require('@nicky-lenaers/ngx-scroll-to'), require('@angular/material/tooltip'), require('@angular/material/chips'), require('@angular/material/radio'), require('@angular/material/paginator'), require('@angular/material/sort'), require('@angular/material/table'), require('@angular/platform-browser'), require('@angular/platform-browser/animations'), require('@angular/material/stepper'), require('@angular/material/grid-list'), require('@angular/cdk/table'), require('@angular/material/progress-bar'), require('@angular/material/card')) :
    typeof define === 'function' && define.amd ? define('onboarding', ['exports', '@angular/common/http', '@angular/core', 'rxjs', '@angular/router', '@angular/forms', '@angular/cdk/keycodes', '@angular/cdk/drag-drop', '@angular/material/dialog', '@angular/material/button', '@angular/material/icon', '@angular/material/form-field', '@angular/material/input', '@angular/common', '@angular/material/select', '@angular/material/checkbox', '@angular/material/core', '@nicky-lenaers/ngx-scroll-to', '@angular/material/tooltip', '@angular/material/chips', '@angular/material/radio', '@angular/material/paginator', '@angular/material/sort', '@angular/material/table', '@angular/platform-browser', '@angular/platform-browser/animations', '@angular/material/stepper', '@angular/material/grid-list', '@angular/cdk/table', '@angular/material/progress-bar', '@angular/material/card'], factory) :
    (global = global || self, factory(global.onboarding = {}, global.ng.common.http, global.ng.core, global.rxjs, global.ng.router, global.ng.forms, global.ng.cdk.keycodes, global.ng.cdk.dragDrop, global.ng.material.dialog, global.ng.material.button, global.ng.material.icon, global.ng.material.formField, global.ng.material.input, global.ng.common, global.ng.material.select, global.ng.material.checkbox, global.ng.material.core, global.ngxScrollTo, global.ng.material.tooltip, global.ng.material.chips, global.ng.material.radio, global.ng.material.paginator, global.ng.material.sort, global.ng.material.table, global.ng.platformBrowser, global.ng.platformBrowser.animations, global.ng.material.stepper, global.ng.material.gridList, global.ng.cdk.table, global.ng.material.progressBar, global.ng.material.card));
}(this, (function (exports, http, core, rxjs, router, forms, keycodes, dragDrop, dialog, button, icon, formField, input, common, select, checkbox, core$1, ngxScrollTo, tooltip, chips, radio, paginator, sort, table, platformBrowser, animations, stepper, gridList, table$1, progressBar, card) { 'use strict';

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
                console.log(token);
                console.log('localstorage', localStorage.getItem('token'));
                var bearer = 'Bearer ' + (token || localStorage.getItem('token'));
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
        var _r364 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "mat-icon", 20);
        core.ɵɵlistener("click", function UpdateProfilComponent_div_17_mat_icon_1_Template_mat_icon_click_0_listener($event) { core.ɵɵrestoreView(_r364); var icon_r362 = ctx.$implicit; var ctx_r363 = core.ɵɵnextContext(2); return ctx_r363.onSelectPicto($event, icon_r362.name); });
        core.ɵɵtext(1);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var icon_r362 = ctx.$implicit;
        var ctx_r361 = core.ɵɵnextContext(2);
        core.ɵɵstyleProp("color", ctx_r361.form.get("Picto").value === icon_r362.name ? "#830B6B" : "#000");
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate1(" ", icon_r362.name, " ");
    } }
    function UpdateProfilComponent_div_17_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "div", 18);
        core.ɵɵtemplate(1, UpdateProfilComponent_div_17_mat_icon_1_Template, 2, 3, "mat-icon", 19);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r359 = core.ɵɵnextContext();
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngForOf", ctx_r359.matIconList);
    } }
    function UpdateProfilComponent_mat_option_26_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "mat-option", 21);
        core.ɵɵtext(1);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var tag_r365 = ctx.$implicit;
        core.ɵɵproperty("value", tag_r365);
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate(tag_r365);
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
                core.ɵɵtext(20, "D\u00E9scription");
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
            } }, directives: [dialog.MatDialogContent, button.MatButton], styles: ["mat-dialog-content[_ngcontent-%COMP%]{display:flex!important;flex-direction:column!important}mat-dialog-content[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]{color:#171f26;font:900 28px/48px sans-serif;letter-spacing:0;margin-bottom:10px;margin-top:30px;padding:0 15px;text-align:center}mat-dialog-content[_ngcontent-%COMP%]   .nowboard-btn[_ngcontent-%COMP%]{background-color:transparent!important;background-image:linear-gradient(90deg,#9d107d,#8b3391,#7647a0,#5f56a8,#4862ab)!important;color:#fff}mat-dialog-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#171f26;font:18px/24px nexa,Text;letter-spacing:0;padding:0 50px;margin-bottom:2vh;text-align:center}mat-dialog-content[_ngcontent-%COMP%]   .cancel_btn[_ngcontent-%COMP%]{background-color:transparent!important;margin-top:10px}mat-dialog-content[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:50%;margin:auto}"] });
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
        var _r611 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "div", 28);
        core.ɵɵelementStart(1, "mat-checkbox", 24);
        core.ɵɵlistener("ngModelChange", function SubTemplateProfileComponent_div_34_Template_mat_checkbox_ngModelChange_1_listener($event) { core.ɵɵrestoreView(_r611); var ctx_r610 = core.ɵɵnextContext(); return ctx_r610.field.expandOnboarding = $event; });
        core.ɵɵtext(2, " Coch\u00E9 par default ");
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r601 = core.ɵɵnextContext();
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngModel", ctx_r601.field.expandOnboarding)("ngModelOptions", core.ɵɵpureFunction0(2, _c0));
    } }
    function SubTemplateProfileComponent_mat_form_field_35_mat_chip_6_Template(rf, ctx) { if (rf & 1) {
        var _r618 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "mat-chip", 35);
        core.ɵɵlistener("dblclick", function SubTemplateProfileComponent_mat_form_field_35_mat_chip_6_Template_mat_chip_dblclick_0_listener() { core.ɵɵrestoreView(_r618); var option_r616 = ctx.$implicit; var ctx_r617 = core.ɵɵnextContext(2); return ctx_r617.toggleChip(option_r616); })("click", function SubTemplateProfileComponent_mat_form_field_35_mat_chip_6_Template_mat_chip_click_0_listener() { core.ɵɵrestoreView(_r618); var option_r616 = ctx.$implicit; var ctx_r619 = core.ɵɵnextContext(2); return ctx_r619.onEditChip(option_r616); })("removed", function SubTemplateProfileComponent_mat_form_field_35_mat_chip_6_Template_mat_chip_removed_0_listener() { core.ɵɵrestoreView(_r618); var option_r616 = ctx.$implicit; var ctx_r620 = core.ɵɵnextContext(2); return ctx_r620.removeKeyword(option_r616, ctx_r620.i, ctx_r620.j); });
        core.ɵɵtext(1);
        core.ɵɵelementStart(2, "mat-icon", 36);
        core.ɵɵtext(3, "cancel");
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var option_r616 = ctx.$implicit;
        core.ɵɵproperty("selected", option_r616.checked)("value", option_r616.value)("removable", true);
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate1(" ", option_r616.value, " ");
    } }
    function SubTemplateProfileComponent_mat_form_field_35_Template(rf, ctx) { if (rf & 1) {
        var _r622 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "mat-form-field", 29);
        core.ɵɵelementStart(1, "mat-label");
        core.ɵɵtext(2, " Valeur par default ");
        core.ɵɵelementEnd();
        core.ɵɵelementStart(3, "mat-chip-list", 30, 31);
        core.ɵɵlistener("cdkDropListDropped", function SubTemplateProfileComponent_mat_form_field_35_Template_mat_chip_list_cdkDropListDropped_3_listener($event) { core.ɵɵrestoreView(_r622); var ctx_r621 = core.ɵɵnextContext(); return ctx_r621.drop($event); });
        core.ɵɵtemplate(6, SubTemplateProfileComponent_mat_form_field_35_mat_chip_6_Template, 4, 4, "mat-chip", 32);
        core.ɵɵelementStart(7, "input", 33, 34);
        core.ɵɵlistener("matChipInputTokenEnd", function SubTemplateProfileComponent_mat_form_field_35_Template_input_matChipInputTokenEnd_7_listener($event) { core.ɵɵrestoreView(_r622); var ctx_r623 = core.ɵɵnextContext(); return ctx_r623.addKeywordFromInput($event, ctx_r623.i, ctx_r623.j); })("keyup", function SubTemplateProfileComponent_mat_form_field_35_Template_input_keyup_7_listener($event) { core.ɵɵrestoreView(_r622); var ctx_r624 = core.ɵɵnextContext(); return ctx_r624.keyUp($event, ctx_r624.i, ctx_r624.j); })("ngModelChange", function SubTemplateProfileComponent_mat_form_field_35_Template_input_ngModelChange_7_listener($event) { core.ɵɵrestoreView(_r622); var ctx_r625 = core.ɵɵnextContext(); return ctx_r625.currentChip = $event; });
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var _r613 = core.ɵɵreference(5);
        var ctx_r602 = core.ɵɵnextContext();
        core.ɵɵadvance(3);
        core.ɵɵproperty("cdkDropListData", ctx_r602.field.defaultValue);
        core.ɵɵadvance(3);
        core.ɵɵproperty("ngForOf", ctx_r602.field.defaultValue);
        core.ɵɵadvance(1);
        core.ɵɵproperty("matChipInputFor", _r613)("matChipInputAddOnBlur", true)("matChipInputSeparatorKeyCodes", ctx_r602.separatorKeysCodes)("ngModel", ctx_r602.currentChip);
    } }
    function SubTemplateProfileComponent_mat_form_field_36_Template(rf, ctx) { if (rf & 1) {
        var _r627 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "mat-form-field", 1);
        core.ɵɵelementStart(1, "mat-label");
        core.ɵɵtext(2, "Valeur par default");
        core.ɵɵelementEnd();
        core.ɵɵelementStart(3, "input", 37);
        core.ɵɵlistener("ngModelChange", function SubTemplateProfileComponent_mat_form_field_36_Template_input_ngModelChange_3_listener($event) { core.ɵɵrestoreView(_r627); var ctx_r626 = core.ɵɵnextContext(); return ctx_r626.field.defaultValue = $event; });
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r603 = core.ɵɵnextContext();
        core.ɵɵadvance(3);
        core.ɵɵproperty("ngModelOptions", core.ɵɵpureFunction0(2, _c0))("ngModel", ctx_r603.field.defaultValue);
    } }
    function SubTemplateProfileComponent_mat_form_field_37_Template(rf, ctx) { if (rf & 1) {
        var _r629 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "mat-form-field", 1);
        core.ɵɵelementStart(1, "mat-label");
        core.ɵɵtext(2, "Valeur par default");
        core.ɵɵelementEnd();
        core.ɵɵelementStart(3, "input", 38);
        core.ɵɵlistener("ngModelChange", function SubTemplateProfileComponent_mat_form_field_37_Template_input_ngModelChange_3_listener($event) { core.ɵɵrestoreView(_r629); var ctx_r628 = core.ɵɵnextContext(); return ctx_r628.field.defaultValue = $event; });
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r604 = core.ɵɵnextContext();
        core.ɵɵstyleProp("opacity", ctx_r604.field.type !== "tel" ? 1 : 0);
        core.ɵɵadvance(3);
        core.ɵɵproperty("type", ctx_r604.field.type)("disabled", ctx_r604.field.type === "tel")("ngModelOptions", core.ɵɵpureFunction0(6, _c0))("ngModel", ctx_r604.field.defaultValue);
    } }
    function SubTemplateProfileComponent_mat_checkbox_39_Template(rf, ctx) { if (rf & 1) {
        var _r631 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "mat-checkbox", 24);
        core.ɵɵlistener("ngModelChange", function SubTemplateProfileComponent_mat_checkbox_39_Template_mat_checkbox_ngModelChange_0_listener($event) { core.ɵɵrestoreView(_r631); var ctx_r630 = core.ɵɵnextContext(); return ctx_r630.field.isConditional = $event; })("ngModelChange", function SubTemplateProfileComponent_mat_checkbox_39_Template_mat_checkbox_ngModelChange_0_listener() { core.ɵɵrestoreView(_r631); var ctx_r632 = core.ɵɵnextContext(); return ctx_r632.getConditionValues(); });
        core.ɵɵtext(1, " \u00E0 condition ");
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r605 = core.ɵɵnextContext();
        core.ɵɵproperty("ngModel", ctx_r605.field.isConditional)("ngModelOptions", core.ɵɵpureFunction0(2, _c0));
    } }
    function SubTemplateProfileComponent_div_40_mat_option_5_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "mat-option", 46);
        core.ɵɵtext(1);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var cond_r635 = ctx.$implicit;
        core.ɵɵproperty("value", cond_r635);
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate(cond_r635.label);
    } }
    function SubTemplateProfileComponent_div_40_mat_radio_button_7_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "mat-radio-button", 47);
        core.ɵɵtext(1);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var item_r636 = ctx.$implicit;
        core.ɵɵproperty("value", item_r636.value);
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate1(" ", item_r636.value, " ");
    } }
    function SubTemplateProfileComponent_div_40_Template(rf, ctx) { if (rf & 1) {
        var _r638 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "div", 39);
        core.ɵɵelementStart(1, "mat-form-field", 40);
        core.ɵɵelementStart(2, "mat-label");
        core.ɵɵtext(3, "Champ de condition :");
        core.ɵɵelementEnd();
        core.ɵɵelementStart(4, "mat-select", 41);
        core.ɵɵlistener("ngModelChange", function SubTemplateProfileComponent_div_40_Template_mat_select_ngModelChange_4_listener($event) { core.ɵɵrestoreView(_r638); var ctx_r637 = core.ɵɵnextContext(); return ctx_r637.field.conditionLocation = $event; });
        core.ɵɵtemplate(5, SubTemplateProfileComponent_div_40_mat_option_5_Template, 2, 2, "mat-option", 42);
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementStart(6, "mat-radio-group", 43);
        core.ɵɵlistener("ngModelChange", function SubTemplateProfileComponent_div_40_Template_mat_radio_group_ngModelChange_6_listener($event) { core.ɵɵrestoreView(_r638); var ctx_r639 = core.ɵɵnextContext(); return ctx_r639.field.conditionValue = $event; });
        core.ɵɵtemplate(7, SubTemplateProfileComponent_div_40_mat_radio_button_7_Template, 2, 2, "mat-radio-button", 44);
        core.ɵɵelementEnd();
        core.ɵɵelementStart(8, "button", 45);
        core.ɵɵlistener("click", function SubTemplateProfileComponent_div_40_Template_button_click_8_listener($event) { core.ɵɵrestoreView(_r638); var ctx_r640 = core.ɵɵnextContext(); return ctx_r640.onShowCondition($event); });
        core.ɵɵelementStart(9, "mat-icon");
        core.ɵɵtext(10, "close");
        core.ɵɵelementEnd();
        core.ɵɵtext(11, "Fermer ");
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r606 = core.ɵɵnextContext();
        core.ɵɵadvance(4);
        core.ɵɵproperty("ngModel", ctx_r606.field.conditionLocation)("ngModelOptions", core.ɵɵpureFunction0(5, _c0));
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngForOf", ctx_r606.conditionData);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngModel", ctx_r606.field.conditionValue);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngForOf", ctx_r606.field.conditionLocation.possibleValues);
    } }
    function SubTemplateProfileComponent_mat_icon_41_Template(rf, ctx) { if (rf & 1) {
        var _r642 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "mat-icon", 48);
        core.ɵɵlistener("click", function SubTemplateProfileComponent_mat_icon_41_Template_mat_icon_click_0_listener() { core.ɵɵrestoreView(_r642); var ctx_r641 = core.ɵɵnextContext(); return ctx_r641.onShowCondition(); });
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
        SubTemplateProfileComponent.ɵcmp = core.ɵɵdefineComponent({ type: SubTemplateProfileComponent, selectors: [["lib-sub-category"]], inputs: { field: "field", length: "length", i: "i", j: "j", conditionData: "conditionData" }, outputs: { onAddKeywordFromInput: "onAddKeywordFromInput", onKeyPress: "onKeyPress", onDrop: "onDrop", onAddNewField: "onAddNewField", onRemoveField: "onRemoveField", onChangeType: "onChangeType", onRemoveKeyword: "onRemoveKeyword", onAddNewSubLevelField: "onAddNewSubLevelField", onExpendMore: "onExpendMore", onChangeLabel: "onChangeLabel", onCheckedChip: "onCheckedChip", onCheckedDefault: "onCheckedDefault", onGetConditionValues: "onGetConditionValues" }, ngContentSelectors: _c3, decls: 51, vars: 35, consts: [[1, "field-item"], ["appearance", "outline", 1, "form-field", "field-size"], ["type", "text", "matInput", "", "required", "", "placeholder", "", 3, "readonly", "ngModelOptions", "ngModel", "ngModelChange"], ["appearance", "outline", 1, "form-field", "field-size", 2, "display", "none"], ["required", "", 3, "disabled", "ngModel", "ngModelOptions", "ngModelChange"], ["value", "text"], ["value", "textarea"], ["value", "radio"], ["value", "select"], ["value", "checkbox"], ["value", "checkbox_multiple"], ["value", "email"], ["value", "password"], ["value", "date"], ["value", "tel"], [3, "ngSwitch"], ["class", "flex-auto w-30 field-size", 4, "ngSwitchCase"], ["class", "flex-auto w-30 field-size", "appearance", "outline", 4, "ngSwitchCase"], ["class", "form-field field-size", "appearance", "outline", 4, "ngSwitchCase"], ["class", "form-field field-size", "appearance", "outline", 3, "opacity", 4, "ngSwitchDefault"], [1, "checkbox-condition"], ["class", "form-field", 3, "ngModel", "ngModelOptions", "ngModelChange", 4, "ngIf"], ["class", "condition-container", 4, "ngIf"], ["class", "condition-help", "matTooltip", "Param\u00E8trer la condition ici !", 3, "click", 4, "ngIf"], [1, "form-field", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["mat-mini-fab", "", "color", "success", "matTooltip", "Ajouter une sous-cat\u00E9gorie", 1, "transparent-button", 3, "disabled", "click"], ["mat-mini-fab", "", "color", "primary", 1, "expand-button", 3, "disabled", "click"], [4, "ngIf"], [1, "flex-auto", "w-30", "field-size"], ["appearance", "outline", 1, "flex-auto", "w-30", "field-size"], ["cdkDropList", "", "aria-label", "Video keywords; let index=index", "multiple", "", "selectable", "", 3, "cdkDropListData", "cdkDropListDropped"], ["childList", "cdkDropList", "chipList", ""], ["style", "min-height: 25px;", "cdkDrag", "", 3, "selected", "value", "removable", "dblclick", "click", "removed", 4, "ngFor", "ngForOf"], ["placeholder", "add...", 3, "matChipInputFor", "matChipInputAddOnBlur", "matChipInputSeparatorKeyCodes", "ngModel", "matChipInputTokenEnd", "keyup", "ngModelChange"], ["chipsInput", ""], ["cdkDrag", "", 2, "min-height", "25px", 3, "selected", "value", "removable", "dblclick", "click", "removed"], ["matChipRemove", ""], ["type", "text", "matInput", "", "placeholder", "Description...", 3, "ngModelOptions", "ngModel", "ngModelChange"], ["matInput", "", "placeholder", "", 3, "type", "disabled", "ngModelOptions", "ngModel", "ngModelChange"], [1, "condition-container"], ["appearance", "outline", 1, "form-field", "field-size", "full-width"], ["required", "", 3, "ngModel", "ngModelOptions", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], ["aria-labelledby", "example-radio-group-label", 1, "example-radio-group", 3, "ngModel", "ngModelChange"], ["class", "example-radio-button", 3, "value", 4, "ngFor", "ngForOf"], ["mat-button", "", "color", "primary", 3, "click"], [3, "value"], [1, "example-radio-button", 3, "value"], ["matTooltip", "Param\u00E8trer la condition ici !", 1, "condition-help", 3, "click"]], template: function SubTemplateProfileComponent_Template(rf, ctx) { if (rf & 1) {
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
                core.ɵɵtemplate(35, SubTemplateProfileComponent_mat_form_field_35_Template, 9, 6, "mat-form-field", 17);
                core.ɵɵtemplate(36, SubTemplateProfileComponent_mat_form_field_36_Template, 4, 3, "mat-form-field", 18);
                core.ɵɵtemplate(37, SubTemplateProfileComponent_mat_form_field_37_Template, 4, 7, "mat-form-field", 19);
                core.ɵɵelementContainerEnd();
                core.ɵɵelementStart(38, "div", 20);
                core.ɵɵtemplate(39, SubTemplateProfileComponent_mat_checkbox_39_Template, 2, 3, "mat-checkbox", 21);
                core.ɵɵtemplate(40, SubTemplateProfileComponent_div_40_Template, 12, 6, "div", 22);
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
            } }, directives: [formField.MatFormField, formField.MatLabel, input.MatInput, forms.DefaultValueAccessor, forms.RequiredValidator, forms.NgControlStatus, forms.NgModel, select.MatSelect, core$1.MatOption, common.NgSwitch, common.NgSwitchCase, common.NgSwitchDefault, common.NgIf, checkbox.MatCheckbox, button.MatButton, tooltip.MatTooltip, icon.MatIcon, chips.MatChipList, dragDrop.CdkDropList, common.NgForOf, chips.MatChipInput, chips.MatChip, dragDrop.CdkDrag, chips.MatChipRemove, radio.MatRadioGroup, radio.MatRadioButton], styles: [".container[_ngcontent-%COMP%]{max-width:98%;margin:50px auto auto;padding-bottom:50px}.container[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:space-between}.input-category-name[_ngcontent-%COMP%]{font-size:15px;font-weight:500}.full-width[_ngcontent-%COMP%]{width:100%}.field-item[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;width:100%;flex-wrap:wrap}.field-item[_ngcontent-%COMP%]   .button-action[_ngcontent-%COMP%]{background-color:#6fe8d7;height:100%;margin:auto 15px auto auto;display:flex}.field-item[_ngcontent-%COMP%]   .button-action[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{box-shadow:none;background-color:transparent;color:#fff}.field-action[_ngcontent-%COMP%]{width:10%}hr[_ngcontent-%COMP%]{margin:50px 0}  .mat-form-field-appearance-fill .mat-form-field-flex{background-color:#fff}.category-action[_ngcontent-%COMP%]{display:flex;width:100%}.delete-field[_ngcontent-%COMP%]{margin:auto 2%}.radio-group[_ngcontent-%COMP%]   .mat-radio-button[_ngcontent-%COMP%]{margin-right:10px}.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary[_ngcontent-%COMP%]{background-color:#3f51b5;color:#fff;min-height:20px;font-size:10px}.move-icons[_ngcontent-%COMP%]{cursor:move}.category-item[_ngcontent-%COMP%]{display:flex;align-items:baseline;width:100%;border:1px solid #dce4e9;border-radius:8px}  mat-checkbox.form-field .mat-checkbox-checkmark-path{stroke:#000!important}  .readonly.mat-form-field-appearance-outline .mat-form-field-outline{color:transparent!important}.field-content[_ngcontent-%COMP%]{width:100%}.cdk-drag-preview[_ngcontent-%COMP%]{box-sizing:border-box;border-radius:4px;box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.cdk-drag-placeholder[_ngcontent-%COMP%]{opacity:0}.cdk-drag-animating[_ngcontent-%COMP%], .example-list.cdk-drop-list-dragging[_ngcontent-%COMP%]   .category-item[_ngcontent-%COMP%]:not(.cdk-drag-placeholder){transition:transform 250ms cubic-bezier(0,0,.2,1)}  .mat-form-field-appearance-fill.mat-form-field-disabled .mat-form-field-flex{background-color:rgba(0,0,0,.02);margin-bottom:-20px}  .mat-select{padding:0}.add-button-container[_ngcontent-%COMP%]{background:no-repeat padding-box #fff;border:1px dashed #dce4e9;border-radius:8px;margin-top:10px;padding:10px;display:flex;justify-content:center;align-items:center;width:98%;margin-left:0;margin-bottom:22px}.add-button-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{display:flex;align-items:center;background-color:transparent;border:none;cursor:pointer;font:17px/26px Nexa Text;letter-spacing:0;color:#c2c8d5;box-shadow:none}.expand-button[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%]{font-size:48px;margin-top:-20px;margin-right:15px}.transparent-button[_ngcontent-%COMP%]{background-color:transparent!important;box-shadow:none!important;width:40px!important;padding:0!important;margin:0!important;min-width:auto!important}.expand-button[_ngcontent-%COMP%]{color:#5a607f!important;background-color:transparent!important;box-shadow:none!important}.checkbox-condition[_ngcontent-%COMP%]{position:relative}.checkbox-condition[_ngcontent-%COMP%]   .condition-container[_ngcontent-%COMP%]{position:absolute;top:30px;width:500px;height:150px;background-color:#fff;border:1px dashed #dce4e9;z-index:1;left:0;border-radius:5px}.checkbox-condition[_ngcontent-%COMP%]   .condition-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{position:absolute;bottom:5px;left:0}.condition-help[_ngcontent-%COMP%]{cursor:pointer}.cdk-overlay-pane[_ngcontent-%COMP%]{width:100%}"] });
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
        var _r373 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "mat-icon", 19);
        core.ɵɵlistener("click", function TemplateProfileCreateComponent_div_2_div_14_mat_icon_1_Template_mat_icon_click_0_listener($event) { core.ɵɵrestoreView(_r373); var icon_r371 = ctx.$implicit; var ctx_r372 = core.ɵɵnextContext(3); return ctx_r372.onSelectPicto($event, icon_r371.name); });
        core.ɵɵtext(1);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var icon_r371 = ctx.$implicit;
        var ctx_r370 = core.ɵɵnextContext(3);
        core.ɵɵstyleProp("color", ctx_r370.form.get("Picto").value === icon_r371.name ? "#830B6B" : "#000");
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate1(" ", icon_r371.name, " ");
    } }
    function TemplateProfileCreateComponent_div_2_div_14_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "div", 17);
        core.ɵɵtemplate(1, TemplateProfileCreateComponent_div_2_div_14_mat_icon_1_Template, 2, 3, "mat-icon", 18);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r368 = core.ɵɵnextContext(2);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngForOf", ctx_r368.matIconList);
    } }
    function TemplateProfileCreateComponent_div_2_mat_option_23_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "mat-option", 20);
        core.ɵɵtext(1);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var tag_r374 = ctx.$implicit;
        core.ɵɵproperty("value", tag_r374);
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate(tag_r374);
    } }
    function TemplateProfileCreateComponent_div_2_Template(rf, ctx) { if (rf & 1) {
        var _r376 = core.ɵɵgetCurrentView();
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
        core.ɵɵlistener("click", function TemplateProfileCreateComponent_div_2_Template_button_click_7_listener($event) { core.ɵɵrestoreView(_r376); var ctx_r375 = core.ɵɵnextContext(); return ctx_r375.onShowPictoList($event); });
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
        core.ɵɵtext(17, "D\u00E9scription");
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
        core.ɵɵlistener("click", function TemplateProfileCreateComponent_div_2_Template_button_click_27_listener() { core.ɵɵrestoreView(_r376); var ctx_r377 = core.ɵɵnextContext(); return ctx_r377.onShowCategory(); });
        core.ɵɵtext(28);
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r366 = core.ɵɵnextContext();
        core.ɵɵadvance(9);
        core.ɵɵtextInterpolate(ctx_r366.form.get("Picto").value === "" ? "contact_phone" : ctx_r366.form.get("Picto").value);
        core.ɵɵadvance(5);
        core.ɵɵproperty("ngIf", ctx_r366.isPictoListShow);
        core.ɵɵadvance(9);
        core.ɵɵproperty("ngForOf", ctx_r366.tags);
        core.ɵɵadvance(4);
        core.ɵɵstyleProp("opacity", ctx_r366.form.get("Name").value === "" || ctx_r366.form.get("Tags").value == "" ? 0.4 : 1);
        core.ɵɵproperty("disabled", ctx_r366.form.get("Name").value === "" || ctx_r366.form.get("Tags").value == "");
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate1(" ", ctx_r366.id !== "0" ? "Modifier un profil" : "Cr\u00E9er un nouveau profil", " ");
    } }
    function TemplateProfileCreateComponent_div_3_li_9_span_2_Template(rf, ctx) { if (rf & 1) {
        var _r388 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "span", 37);
        core.ɵɵlistener("click", function TemplateProfileCreateComponent_div_3_li_9_span_2_Template_span_click_0_listener() { core.ɵɵrestoreView(_r388); var ctx_r387 = core.ɵɵnextContext(); var cat_r381 = ctx_r387.$implicit; var i_r382 = ctx_r387.index; var ctx_r386 = core.ɵɵnextContext(2); return ctx_r386.onExpendMore({ field: cat_r381 }, i_r382); });
        core.ɵɵtext(1);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var cat_r381 = core.ɵɵnextContext().$implicit;
        core.ɵɵproperty("ngxScrollTo", "#" + cat_r381.name);
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate(cat_r381.name);
    } }
    var _c0$1 = function () { return { standalone: true }; };
    function TemplateProfileCreateComponent_div_3_li_9_input_3_Template(rf, ctx) { if (rf & 1) {
        var _r392 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "input", 38, 39);
        core.ɵɵlistener("blur", function TemplateProfileCreateComponent_div_3_li_9_input_3_Template_input_blur_0_listener() { core.ɵɵrestoreView(_r392); var ctx_r391 = core.ɵɵnextContext(3); return ctx_r391.onEdit(); })("ngModelChange", function TemplateProfileCreateComponent_div_3_li_9_input_3_Template_input_ngModelChange_0_listener($event) { core.ɵɵrestoreView(_r392); var cat_r381 = core.ɵɵnextContext().$implicit; return cat_r381.name = $event; })("ngModelChange", function TemplateProfileCreateComponent_div_3_li_9_input_3_Template_input_ngModelChange_0_listener() { core.ɵɵrestoreView(_r392); var ctx_r396 = core.ɵɵnextContext(); var i_r382 = ctx_r396.index; var cat_r381 = ctx_r396.$implicit; var ctx_r395 = core.ɵɵnextContext(2); return ctx_r395.onEditCategoryName(i_r382, cat_r381.name); });
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var cat_r381 = core.ɵɵnextContext().$implicit;
        core.ɵɵproperty("ngModel", cat_r381.name)("ngModelOptions", core.ɵɵpureFunction0(2, _c0$1));
    } }
    function TemplateProfileCreateComponent_div_3_li_9_ng_container_7_ng_container_1_Template(rf, ctx) { if (rf & 1) {
        var _r403 = core.ɵɵgetCurrentView();
        core.ɵɵelementContainerStart(0);
        core.ɵɵelementStart(1, "li", 19);
        core.ɵɵlistener("click", function TemplateProfileCreateComponent_div_3_li_9_ng_container_7_ng_container_1_Template_li_click_1_listener() { core.ɵɵrestoreView(_r403); var ctx_r402 = core.ɵɵnextContext(); var sub_r398 = ctx_r402.$implicit; var j_r399 = ctx_r402.index; var i_r382 = core.ɵɵnextContext().index; var ctx_r401 = core.ɵɵnextContext(2); return ctx_r401.onExpendMore({ field: sub_r398 }, i_r382, j_r399); });
        core.ɵɵelementStart(2, "span", 41);
        core.ɵɵtext(3);
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var ctx_r405 = core.ɵɵnextContext();
        var sub_r398 = ctx_r405.$implicit;
        var j_r399 = ctx_r405.index;
        core.ɵɵadvance(1);
        core.ɵɵclassMap(sub_r398.expandMore ? "sub-title active" : "sub-title");
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngxScrollTo", "#" + sub_r398.key);
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate2("", j_r399 + 1, ". ", sub_r398.label, "");
    } }
    function TemplateProfileCreateComponent_div_3_li_9_ng_container_7_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainerStart(0);
        core.ɵɵtemplate(1, TemplateProfileCreateComponent_div_3_li_9_ng_container_7_ng_container_1_Template, 4, 5, "ng-container", 40);
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var sub_r398 = ctx.$implicit;
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", sub_r398 == null ? null : sub_r398.forms);
    } }
    function TemplateProfileCreateComponent_div_3_li_9_Template(rf, ctx) { if (rf & 1) {
        var _r407 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "li", 33);
        core.ɵɵelementStart(1, "span");
        core.ɵɵtemplate(2, TemplateProfileCreateComponent_div_3_li_9_span_2_Template, 2, 2, "span", 34);
        core.ɵɵtemplate(3, TemplateProfileCreateComponent_div_3_li_9_input_3_Template, 2, 3, "input", 35);
        core.ɵɵelementStart(4, "mat-icon", 19);
        core.ɵɵlistener("click", function TemplateProfileCreateComponent_div_3_li_9_Template_mat_icon_click_4_listener() { core.ɵɵrestoreView(_r407); var i_r382 = ctx.index; var ctx_r406 = core.ɵɵnextContext(2); return ctx_r406.onPassInEditMode(i_r382); });
        core.ɵɵtext(5, "edit");
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementStart(6, "ol");
        core.ɵɵtemplate(7, TemplateProfileCreateComponent_div_3_li_9_ng_container_7_Template, 2, 1, "ng-container", 36);
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var cat_r381 = ctx.$implicit;
        var i_r382 = ctx.index;
        var ctx_r378 = core.ɵɵnextContext(2);
        core.ɵɵadvance(1);
        core.ɵɵclassMap(ctx_r378.editIndex === i_r382 ? "edition-mode" : "");
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", ctx_r378.editIndex !== i_r382);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", ctx_r378.editIndex === i_r382);
        core.ɵɵadvance(4);
        core.ɵɵproperty("ngForOf", cat_r381.forms);
    } }
    function TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_div_9_div_1_div_2_div_9_div_1_div_2_div_10_Template(rf, ctx) { if (rf & 1) {
        var _r435 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "div", 65);
        core.ɵɵelementStart(1, "button", 66);
        core.ɵɵlistener("click", function TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_div_9_div_1_div_2_div_9_div_1_div_2_div_10_Template_button_click_1_listener() { core.ɵɵrestoreView(_r435); var k_r424 = core.ɵɵnextContext(4).index; var j_r417 = core.ɵɵnextContext(3).index; var i_r409 = core.ɵɵnextContext(3).index; var ctx_r433 = core.ɵɵnextContext(2); return ctx_r433.onAddNewField(i_r409, j_r417, k_r424); });
        core.ɵɵelementStart(2, "mat-icon");
        core.ɵɵtext(3, " add_box ");
        core.ɵɵelementEnd();
        core.ɵɵelementStart(4, "span");
        core.ɵɵtext(5, "Ajouter un champ");
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var l_r431 = core.ɵɵnextContext().index;
        var child_r423 = core.ɵɵnextContext(3).$implicit;
        core.ɵɵadvance(1);
        core.ɵɵstyleProp("opacity", (child_r423 == null ? null : child_r423.forms == null ? null : child_r423.forms.length) - 1 === l_r431 ? 1 : 0);
        core.ɵɵproperty("disabled", (child_r423 == null ? null : child_r423.forms == null ? null : child_r423.forms.length) - 1 !== l_r431);
    } }
    function TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_div_9_div_1_div_2_div_9_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
        var _r442 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "div", 53);
        core.ɵɵelementStart(1, "div", 54);
        core.ɵɵelementStart(2, "div", 55);
        core.ɵɵelementStart(3, "div", 64);
        core.ɵɵelementStart(4, "button", 57);
        core.ɵɵlistener("click", function TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_div_9_div_1_div_2_div_9_div_1_div_2_Template_button_click_4_listener() { core.ɵɵrestoreView(_r442); var l_r431 = ctx.index; var k_r424 = core.ɵɵnextContext(3).index; var j_r417 = core.ɵɵnextContext(3).index; var i_r409 = core.ɵɵnextContext(3).index; var ctx_r440 = core.ɵɵnextContext(2); return ctx_r440.onRemoveField(i_r409, j_r417, k_r424, l_r431); });
        core.ɵɵelementStart(5, "mat-icon");
        core.ɵɵtext(6, " delete ");
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementStart(7, "div", 58);
        core.ɵɵelementStart(8, "lib-sub-category", 59);
        core.ɵɵlistener("onAddKeywordFromInput", function TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_div_9_div_1_div_2_div_9_div_1_div_2_Template_lib_sub_category_onAddKeywordFromInput_8_listener($event) { core.ɵɵrestoreView(_r442); var l_r431 = ctx.index; var k_r424 = core.ɵɵnextContext(3).index; var j_r417 = core.ɵɵnextContext(3).index; var i_r409 = core.ɵɵnextContext(3).index; var ctx_r445 = core.ɵɵnextContext(2); return ctx_r445.addKeywordFromInput($event.event, $event.prev, i_r409, j_r417, k_r424, l_r431); })("onKeyPress", function TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_div_9_div_1_div_2_div_9_div_1_div_2_Template_lib_sub_category_onKeyPress_8_listener($event) { core.ɵɵrestoreView(_r442); var l_r431 = ctx.index; var k_r424 = core.ɵɵnextContext(3).index; var j_r417 = core.ɵɵnextContext(3).index; var i_r409 = core.ɵɵnextContext(3).index; var ctx_r449 = core.ɵɵnextContext(2); return ctx_r449.onKeyPress($event.event, i_r409, j_r417, k_r424, l_r431); })("onAddNewField", function TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_div_9_div_1_div_2_div_9_div_1_div_2_Template_lib_sub_category_onAddNewField_8_listener() { core.ɵɵrestoreView(_r442); var k_r424 = core.ɵɵnextContext(3).index; var j_r417 = core.ɵɵnextContext(3).index; var i_r409 = core.ɵɵnextContext(3).index; var ctx_r453 = core.ɵɵnextContext(2); return ctx_r453.onAddNewField(i_r409, j_r417, k_r424); })("onRemoveField", function TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_div_9_div_1_div_2_div_9_div_1_div_2_Template_lib_sub_category_onRemoveField_8_listener() { core.ɵɵrestoreView(_r442); var l_r431 = ctx.index; var k_r424 = core.ɵɵnextContext(3).index; var j_r417 = core.ɵɵnextContext(3).index; var i_r409 = core.ɵɵnextContext(3).index; var ctx_r457 = core.ɵɵnextContext(2); return ctx_r457.onRemoveField(i_r409, j_r417, k_r424, l_r431); })("onChangeType", function TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_div_9_div_1_div_2_div_9_div_1_div_2_Template_lib_sub_category_onChangeType_8_listener() { core.ɵɵrestoreView(_r442); var c2_r430 = ctx.$implicit; var l_r431 = ctx.index; var k_r424 = core.ɵɵnextContext(3).index; var j_r417 = core.ɵɵnextContext(3).index; var i_r409 = core.ɵɵnextContext(3).index; var ctx_r461 = core.ɵɵnextContext(2); return ctx_r461.onChangeType(c2_r430.type, i_r409, j_r417, k_r424, l_r431); })("onRemoveKeyword", function TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_div_9_div_1_div_2_div_9_div_1_div_2_Template_lib_sub_category_onRemoveKeyword_8_listener($event) { core.ɵɵrestoreView(_r442); var l_r431 = ctx.index; var k_r424 = core.ɵɵnextContext(3).index; var j_r417 = core.ɵɵnextContext(3).index; var i_r409 = core.ɵɵnextContext(3).index; var ctx_r465 = core.ɵɵnextContext(2); return ctx_r465.removeKeyword($event.event, i_r409, j_r417, k_r424, l_r431); })("onAddNewSubLevelField", function TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_div_9_div_1_div_2_div_9_div_1_div_2_Template_lib_sub_category_onAddNewSubLevelField_8_listener() { core.ɵɵrestoreView(_r442); var l_r431 = ctx.index; var k_r424 = core.ɵɵnextContext(3).index; var j_r417 = core.ɵɵnextContext(3).index; var i_r409 = core.ɵɵnextContext(3).index; var ctx_r469 = core.ɵɵnextContext(2); return ctx_r469.onAddNewSubLevelField(i_r409, j_r417, k_r424, l_r431); })("onExpendMore", function TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_div_9_div_1_div_2_div_9_div_1_div_2_Template_lib_sub_category_onExpendMore_8_listener($event) { core.ɵɵrestoreView(_r442); var l_r431 = ctx.index; var k_r424 = core.ɵɵnextContext(3).index; var j_r417 = core.ɵɵnextContext(3).index; var i_r409 = core.ɵɵnextContext(3).index; var ctx_r473 = core.ɵɵnextContext(2); return ctx_r473.onExpendMore($event, i_r409, j_r417, k_r424, l_r431); })("onChangeLabel", function TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_div_9_div_1_div_2_div_9_div_1_div_2_Template_lib_sub_category_onChangeLabel_8_listener($event) { core.ɵɵrestoreView(_r442); var l_r431 = ctx.index; var k_r424 = core.ɵɵnextContext(3).index; var j_r417 = core.ɵɵnextContext(3).index; var i_r409 = core.ɵɵnextContext(3).index; var ctx_r477 = core.ɵɵnextContext(2); return ctx_r477.onChangeLabel($event, i_r409, j_r417, k_r424, l_r431); })("onCheckedChip", function TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_div_9_div_1_div_2_div_9_div_1_div_2_Template_lib_sub_category_onCheckedChip_8_listener($event) { core.ɵɵrestoreView(_r442); var l_r431 = ctx.index; var k_r424 = core.ɵɵnextContext(3).index; var j_r417 = core.ɵɵnextContext(3).index; var i_r409 = core.ɵɵnextContext(3).index; var ctx_r481 = core.ɵɵnextContext(2); return ctx_r481.onCheckedChip($event, i_r409, j_r417, k_r424, l_r431); })("onDrop", function TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_div_9_div_1_div_2_div_9_div_1_div_2_Template_lib_sub_category_onDrop_8_listener($event) { core.ɵɵrestoreView(_r442); var ctx_r485 = core.ɵɵnextContext(11); return ctx_r485.drop($event); })("onCheckedDefault", function TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_div_9_div_1_div_2_div_9_div_1_div_2_Template_lib_sub_category_onCheckedDefault_8_listener($event) { core.ɵɵrestoreView(_r442); var l_r431 = ctx.index; var k_r424 = core.ɵɵnextContext(3).index; var j_r417 = core.ɵɵnextContext(3).index; var i_r409 = core.ɵɵnextContext(3).index; var ctx_r486 = core.ɵɵnextContext(2); return ctx_r486.onCheckedDefault($event, i_r409, j_r417, k_r424, l_r431); })("onGetConditionValues", function TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_div_9_div_1_div_2_div_9_div_1_div_2_Template_lib_sub_category_onGetConditionValues_8_listener() { core.ɵɵrestoreView(_r442); var ctx_r490 = core.ɵɵnextContext(11); return ctx_r490.getConditionValues(); });
        core.ɵɵelement(9, "div", 62);
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵtemplate(10, TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_div_9_div_1_div_2_div_9_div_1_div_2_div_10_Template, 6, 3, "div", 61);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var c2_r430 = ctx.$implicit;
        var l_r431 = ctx.index;
        var ctx_r492 = core.ɵɵnextContext(3);
        var child_r423 = ctx_r492.$implicit;
        var k_r424 = ctx_r492.index;
        var field_r416 = core.ɵɵnextContext(3).$implicit;
        var ctx_r429 = core.ɵɵnextContext(5);
        core.ɵɵproperty("id", c2_r430.key);
        core.ɵɵadvance(4);
        core.ɵɵproperty("disabled", !field_r416.deleteable);
        core.ɵɵadvance(4);
        core.ɵɵproperty("field", c2_r430)("length", child_r423 == null ? null : child_r423.forms == null ? null : child_r423.forms.length)("i", k_r424)("j", l_r431)("conditionData", ctx_r429.conditionData);
        core.ɵɵadvance(2);
        core.ɵɵproperty("ngIf", (child_r423 == null ? null : child_r423.forms == null ? null : child_r423.forms.length) - 1 === l_r431);
    } }
    function TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_div_9_div_1_div_2_div_9_div_1_Template(rf, ctx) { if (rf & 1) {
        var _r494 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "div", 50, 51);
        core.ɵɵlistener("cdkDropListDropped", function TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_div_9_div_1_div_2_div_9_div_1_Template_div_cdkDropListDropped_0_listener($event) { core.ɵɵrestoreView(_r494); var ctx_r493 = core.ɵɵnextContext(10); return ctx_r493.drop($event); });
        core.ɵɵtemplate(2, TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_div_9_div_1_div_2_div_9_div_1_div_2_Template, 11, 8, "div", 52);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var child_r423 = core.ɵɵnextContext(2).$implicit;
        core.ɵɵproperty("cdkDropListData", child_r423.forms);
        core.ɵɵadvance(2);
        core.ɵɵproperty("ngForOf", child_r423.forms);
    } }
    function TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_div_9_div_1_div_2_div_9_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "div", 62);
        core.ɵɵtemplate(1, TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_div_9_div_1_div_2_div_9_div_1_Template, 3, 2, "div", 48);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var child_r423 = core.ɵɵnextContext().$implicit;
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", child_r423.forms);
    } }
    function TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_div_9_div_1_div_2_div_10_Template(rf, ctx) { if (rf & 1) {
        var _r499 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "div", 65);
        core.ɵɵelementStart(1, "button", 66);
        core.ɵɵlistener("click", function TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_div_9_div_1_div_2_div_10_Template_button_click_1_listener() { core.ɵɵrestoreView(_r499); var j_r417 = core.ɵɵnextContext(4).index; var i_r409 = core.ɵɵnextContext(3).index; var ctx_r497 = core.ɵɵnextContext(2); return ctx_r497.onAddNewField(i_r409, j_r417); });
        core.ɵɵelementStart(2, "mat-icon");
        core.ɵɵtext(3, "add_box");
        core.ɵɵelementEnd();
        core.ɵɵelementStart(4, "span");
        core.ɵɵtext(5, "Ajouter un champ");
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var k_r424 = core.ɵɵnextContext().index;
        var field_r416 = core.ɵɵnextContext(3).$implicit;
        core.ɵɵadvance(1);
        core.ɵɵstyleProp("opacity", (field_r416 == null ? null : field_r416.forms == null ? null : field_r416.forms.length) - 1 === k_r424 ? 1 : 0);
        core.ɵɵproperty("disabled", (field_r416 == null ? null : field_r416.forms == null ? null : field_r416.forms.length) - 1 !== k_r424);
    } }
    function TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_div_9_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
        var _r505 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "div", 53);
        core.ɵɵelementStart(1, "div", 54);
        core.ɵɵelementStart(2, "div", 55);
        core.ɵɵelementStart(3, "div", 63);
        core.ɵɵelementStart(4, "button", 57);
        core.ɵɵlistener("click", function TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_div_9_div_1_div_2_Template_button_click_4_listener() { core.ɵɵrestoreView(_r505); var k_r424 = ctx.index; var j_r417 = core.ɵɵnextContext(3).index; var i_r409 = core.ɵɵnextContext(3).index; var ctx_r503 = core.ɵɵnextContext(2); return ctx_r503.onRemoveField(i_r409, j_r417, k_r424); });
        core.ɵɵelementStart(5, "mat-icon");
        core.ɵɵtext(6, " delete");
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementStart(7, "div", 58);
        core.ɵɵelementStart(8, "lib-sub-category", 59);
        core.ɵɵlistener("onAddKeywordFromInput", function TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_div_9_div_1_div_2_Template_lib_sub_category_onAddKeywordFromInput_8_listener($event) { core.ɵɵrestoreView(_r505); var k_r424 = ctx.index; var j_r417 = core.ɵɵnextContext(3).index; var i_r409 = core.ɵɵnextContext(3).index; var ctx_r507 = core.ɵɵnextContext(2); return ctx_r507.addKeywordFromInput($event.event, $event.prev, i_r409, j_r417, k_r424); })("onKeyPress", function TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_div_9_div_1_div_2_Template_lib_sub_category_onKeyPress_8_listener($event) { core.ɵɵrestoreView(_r505); var k_r424 = ctx.index; var j_r417 = core.ɵɵnextContext(3).index; var i_r409 = core.ɵɵnextContext(3).index; var ctx_r510 = core.ɵɵnextContext(2); return ctx_r510.onKeyPress($event.event, i_r409, j_r417, k_r424); })("onAddNewField", function TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_div_9_div_1_div_2_Template_lib_sub_category_onAddNewField_8_listener() { core.ɵɵrestoreView(_r505); var j_r417 = core.ɵɵnextContext(3).index; var i_r409 = core.ɵɵnextContext(3).index; var ctx_r513 = core.ɵɵnextContext(2); return ctx_r513.onAddNewField(i_r409, j_r417); })("onRemoveField", function TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_div_9_div_1_div_2_Template_lib_sub_category_onRemoveField_8_listener() { core.ɵɵrestoreView(_r505); var k_r424 = ctx.index; var j_r417 = core.ɵɵnextContext(3).index; var i_r409 = core.ɵɵnextContext(3).index; var ctx_r516 = core.ɵɵnextContext(2); return ctx_r516.onRemoveField(i_r409, j_r417, k_r424); })("onChangeType", function TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_div_9_div_1_div_2_Template_lib_sub_category_onChangeType_8_listener() { core.ɵɵrestoreView(_r505); var child_r423 = ctx.$implicit; var k_r424 = ctx.index; var j_r417 = core.ɵɵnextContext(3).index; var i_r409 = core.ɵɵnextContext(3).index; var ctx_r519 = core.ɵɵnextContext(2); return ctx_r519.onChangeType(child_r423.type, i_r409, j_r417, k_r424); })("onRemoveKeyword", function TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_div_9_div_1_div_2_Template_lib_sub_category_onRemoveKeyword_8_listener($event) { core.ɵɵrestoreView(_r505); var k_r424 = ctx.index; var j_r417 = core.ɵɵnextContext(3).index; var i_r409 = core.ɵɵnextContext(3).index; var ctx_r522 = core.ɵɵnextContext(2); return ctx_r522.removeKeyword($event.event, i_r409, j_r417, k_r424); })("onAddNewSubLevelField", function TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_div_9_div_1_div_2_Template_lib_sub_category_onAddNewSubLevelField_8_listener() { core.ɵɵrestoreView(_r505); var k_r424 = ctx.index; var j_r417 = core.ɵɵnextContext(3).index; var i_r409 = core.ɵɵnextContext(3).index; var ctx_r525 = core.ɵɵnextContext(2); return ctx_r525.onAddNewSubLevelField(i_r409, j_r417, k_r424); })("onExpendMore", function TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_div_9_div_1_div_2_Template_lib_sub_category_onExpendMore_8_listener($event) { core.ɵɵrestoreView(_r505); var k_r424 = ctx.index; var j_r417 = core.ɵɵnextContext(3).index; var i_r409 = core.ɵɵnextContext(3).index; var ctx_r528 = core.ɵɵnextContext(2); return ctx_r528.onExpendMore($event, i_r409, j_r417, k_r424); })("onChangeLabel", function TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_div_9_div_1_div_2_Template_lib_sub_category_onChangeLabel_8_listener($event) { core.ɵɵrestoreView(_r505); var k_r424 = ctx.index; var j_r417 = core.ɵɵnextContext(3).index; var i_r409 = core.ɵɵnextContext(3).index; var ctx_r531 = core.ɵɵnextContext(2); return ctx_r531.onChangeLabel($event, i_r409, j_r417, k_r424); })("onCheckedChip", function TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_div_9_div_1_div_2_Template_lib_sub_category_onCheckedChip_8_listener($event) { core.ɵɵrestoreView(_r505); var k_r424 = ctx.index; var j_r417 = core.ɵɵnextContext(3).index; var i_r409 = core.ɵɵnextContext(3).index; var ctx_r534 = core.ɵɵnextContext(2); return ctx_r534.onCheckedChip($event, i_r409, j_r417, k_r424); })("onDrop", function TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_div_9_div_1_div_2_Template_lib_sub_category_onDrop_8_listener($event) { core.ɵɵrestoreView(_r505); var ctx_r537 = core.ɵɵnextContext(8); return ctx_r537.drop($event); })("onCheckedDefault", function TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_div_9_div_1_div_2_Template_lib_sub_category_onCheckedDefault_8_listener($event) { core.ɵɵrestoreView(_r505); var k_r424 = ctx.index; var j_r417 = core.ɵɵnextContext(3).index; var i_r409 = core.ɵɵnextContext(3).index; var ctx_r538 = core.ɵɵnextContext(2); return ctx_r538.onCheckedDefault($event, i_r409, j_r417, k_r424); })("onGetConditionValues", function TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_div_9_div_1_div_2_Template_lib_sub_category_onGetConditionValues_8_listener() { core.ɵɵrestoreView(_r505); var ctx_r541 = core.ɵɵnextContext(8); return ctx_r541.getConditionValues(); });
        core.ɵɵtemplate(9, TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_div_9_div_1_div_2_div_9_Template, 2, 1, "div", 60);
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵtemplate(10, TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_div_9_div_1_div_2_div_10_Template, 6, 3, "div", 61);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var child_r423 = ctx.$implicit;
        var k_r424 = ctx.index;
        var ctx_r542 = core.ɵɵnextContext(3);
        var field_r416 = ctx_r542.$implicit;
        var j_r417 = ctx_r542.index;
        var ctx_r422 = core.ɵɵnextContext(5);
        core.ɵɵproperty("id", child_r423.key);
        core.ɵɵadvance(4);
        core.ɵɵproperty("disabled", !child_r423.deleteable);
        core.ɵɵadvance(1);
        core.ɵɵstyleProp("opacity", !child_r423.deleteable ? 0 : 1);
        core.ɵɵadvance(3);
        core.ɵɵproperty("field", child_r423)("length", field_r416 == null ? null : field_r416.forms == null ? null : field_r416.forms.length)("i", j_r417)("j", k_r424)("conditionData", ctx_r422.conditionData);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", child_r423.expandMore);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", (field_r416 == null ? null : field_r416.forms == null ? null : field_r416.forms.length) - 1 === k_r424);
    } }
    function TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_div_9_div_1_Template(rf, ctx) { if (rf & 1) {
        var _r544 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "div", 50, 51);
        core.ɵɵlistener("cdkDropListDropped", function TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_div_9_div_1_Template_div_cdkDropListDropped_0_listener($event) { core.ɵɵrestoreView(_r544); var ctx_r543 = core.ɵɵnextContext(7); return ctx_r543.drop($event); });
        core.ɵɵtemplate(2, TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_div_9_div_1_div_2_Template, 11, 11, "div", 52);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var field_r416 = core.ɵɵnextContext(2).$implicit;
        core.ɵɵproperty("cdkDropListData", field_r416.forms);
        core.ɵɵadvance(2);
        core.ɵɵproperty("ngForOf", field_r416.forms);
    } }
    function TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_div_9_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "div", 62);
        core.ɵɵtemplate(1, TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_div_9_div_1_Template, 3, 2, "div", 48);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var field_r416 = core.ɵɵnextContext().$implicit;
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", field_r416.forms);
    } }
    function TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_div_10_Template(rf, ctx) { if (rf & 1) {
        var _r549 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "div", 65);
        core.ɵɵelementStart(1, "button", 66);
        core.ɵɵlistener("click", function TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_div_10_Template_button_click_1_listener() { core.ɵɵrestoreView(_r549); var i_r409 = core.ɵɵnextContext(4).index; var ctx_r547 = core.ɵɵnextContext(2); return ctx_r547.onAddNewField(i_r409); });
        core.ɵɵelementStart(2, "mat-icon");
        core.ɵɵtext(3, "add_box");
        core.ɵɵelementEnd();
        core.ɵɵelementStart(4, "span");
        core.ɵɵtext(5, "Ajouter un champ");
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var j_r417 = core.ɵɵnextContext().index;
        var category_r408 = core.ɵɵnextContext(3).$implicit;
        core.ɵɵadvance(1);
        core.ɵɵstyleProp("opacity", (category_r408 == null ? null : category_r408.forms == null ? null : category_r408.forms.length) - 1 === j_r417 ? 1 : 0);
        core.ɵɵproperty("disabled", (category_r408 == null ? null : category_r408.forms == null ? null : category_r408.forms.length) - 1 !== j_r417);
    } }
    function TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_Template(rf, ctx) { if (rf & 1) {
        var _r554 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "div", 53);
        core.ɵɵelementStart(1, "div", 54);
        core.ɵɵelementStart(2, "div", 55);
        core.ɵɵelementStart(3, "div", 56);
        core.ɵɵelementStart(4, "button", 57);
        core.ɵɵlistener("click", function TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_Template_button_click_4_listener() { core.ɵɵrestoreView(_r554); var j_r417 = ctx.index; var i_r409 = core.ɵɵnextContext(3).index; var ctx_r552 = core.ɵɵnextContext(2); return ctx_r552.onRemoveField(i_r409, j_r417); });
        core.ɵɵelementStart(5, "mat-icon");
        core.ɵɵtext(6, "delete ");
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementStart(7, "div", 58);
        core.ɵɵelementStart(8, "lib-sub-category", 59);
        core.ɵɵlistener("onAddKeywordFromInput", function TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_Template_lib_sub_category_onAddKeywordFromInput_8_listener($event) { core.ɵɵrestoreView(_r554); var j_r417 = ctx.index; var i_r409 = core.ɵɵnextContext(3).index; var ctx_r555 = core.ɵɵnextContext(2); return ctx_r555.addKeywordFromInput($event.event, $event.prev, i_r409, j_r417); })("onKeyPress", function TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_Template_lib_sub_category_onKeyPress_8_listener($event) { core.ɵɵrestoreView(_r554); var j_r417 = ctx.index; var i_r409 = core.ɵɵnextContext(3).index; var ctx_r557 = core.ɵɵnextContext(2); return ctx_r557.onKeyPress($event.event, i_r409, j_r417); })("onAddNewField", function TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_Template_lib_sub_category_onAddNewField_8_listener() { core.ɵɵrestoreView(_r554); var i_r409 = core.ɵɵnextContext(3).index; var ctx_r559 = core.ɵɵnextContext(2); return ctx_r559.onAddNewField(i_r409); })("onRemoveField", function TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_Template_lib_sub_category_onRemoveField_8_listener() { core.ɵɵrestoreView(_r554); var j_r417 = ctx.index; var i_r409 = core.ɵɵnextContext(3).index; var ctx_r561 = core.ɵɵnextContext(2); return ctx_r561.onRemoveField(i_r409, j_r417); })("onChangeType", function TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_Template_lib_sub_category_onChangeType_8_listener() { core.ɵɵrestoreView(_r554); var field_r416 = ctx.$implicit; var j_r417 = ctx.index; var i_r409 = core.ɵɵnextContext(3).index; var ctx_r563 = core.ɵɵnextContext(2); return ctx_r563.onChangeType(field_r416.type, i_r409, j_r417); })("onRemoveKeyword", function TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_Template_lib_sub_category_onRemoveKeyword_8_listener($event) { core.ɵɵrestoreView(_r554); var j_r417 = ctx.index; var i_r409 = core.ɵɵnextContext(3).index; var ctx_r565 = core.ɵɵnextContext(2); return ctx_r565.removeKeyword($event.event, i_r409, j_r417); })("onAddNewSubLevelField", function TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_Template_lib_sub_category_onAddNewSubLevelField_8_listener() { core.ɵɵrestoreView(_r554); var j_r417 = ctx.index; var i_r409 = core.ɵɵnextContext(3).index; var ctx_r567 = core.ɵɵnextContext(2); return ctx_r567.onAddNewSubLevelField(i_r409, j_r417); })("onExpendMore", function TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_Template_lib_sub_category_onExpendMore_8_listener($event) { core.ɵɵrestoreView(_r554); var j_r417 = ctx.index; var i_r409 = core.ɵɵnextContext(3).index; var ctx_r569 = core.ɵɵnextContext(2); return ctx_r569.onExpendMore($event, i_r409, j_r417); })("onChangeLabel", function TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_Template_lib_sub_category_onChangeLabel_8_listener($event) { core.ɵɵrestoreView(_r554); var j_r417 = ctx.index; var i_r409 = core.ɵɵnextContext(3).index; var ctx_r571 = core.ɵɵnextContext(2); return ctx_r571.onChangeLabel($event, i_r409, j_r417); })("onCheckedChip", function TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_Template_lib_sub_category_onCheckedChip_8_listener($event) { core.ɵɵrestoreView(_r554); var j_r417 = ctx.index; var i_r409 = core.ɵɵnextContext(3).index; var ctx_r573 = core.ɵɵnextContext(2); return ctx_r573.onCheckedChip($event, i_r409, j_r417); })("onDrop", function TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_Template_lib_sub_category_onDrop_8_listener($event) { core.ɵɵrestoreView(_r554); var ctx_r575 = core.ɵɵnextContext(5); return ctx_r575.drop($event); })("onCheckedDefault", function TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_Template_lib_sub_category_onCheckedDefault_8_listener($event) { core.ɵɵrestoreView(_r554); var j_r417 = ctx.index; var i_r409 = core.ɵɵnextContext(3).index; var ctx_r576 = core.ɵɵnextContext(2); return ctx_r576.onCheckedDefault($event, i_r409, j_r417); })("onGetConditionValues", function TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_Template_lib_sub_category_onGetConditionValues_8_listener() { core.ɵɵrestoreView(_r554); var ctx_r578 = core.ɵɵnextContext(5); return ctx_r578.getConditionValues(); });
        core.ɵɵtemplate(9, TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_div_9_Template, 2, 1, "div", 60);
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵtemplate(10, TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_div_10_Template, 6, 3, "div", 61);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var field_r416 = ctx.$implicit;
        var j_r417 = ctx.index;
        var ctx_r579 = core.ɵɵnextContext(3);
        var category_r408 = ctx_r579.$implicit;
        var i_r409 = ctx_r579.index;
        var ctx_r415 = core.ɵɵnextContext(2);
        core.ɵɵproperty("id", field_r416.key);
        core.ɵɵadvance(4);
        core.ɵɵproperty("disabled", !field_r416.deleteable);
        core.ɵɵadvance(1);
        core.ɵɵstyleProp("opacity", !field_r416.deleteable ? 0 : 1);
        core.ɵɵadvance(2);
        core.ɵɵclassMap(!field_r416.deleteable ? "disabled" : "");
        core.ɵɵadvance(1);
        core.ɵɵproperty("field", field_r416)("length", category_r408 == null ? null : category_r408.forms == null ? null : category_r408.forms.length)("i", i_r409)("j", j_r417)("conditionData", ctx_r415.conditionData);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", field_r416.expandMore);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", (category_r408 == null ? null : category_r408.forms == null ? null : category_r408.forms.length) - 1 === j_r417);
    } }
    function TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainerStart(0);
        core.ɵɵtemplate(1, TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_div_1_Template, 11, 13, "div", 52);
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var category_r408 = core.ɵɵnextContext(2).$implicit;
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngForOf", category_r408.forms);
    } }
    function TemplateProfileCreateComponent_div_3_div_19_div_8_Template(rf, ctx) { if (rf & 1) {
        var _r582 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "div", 50, 51);
        core.ɵɵlistener("cdkDropListDropped", function TemplateProfileCreateComponent_div_3_div_19_div_8_Template_div_cdkDropListDropped_0_listener($event) { core.ɵɵrestoreView(_r582); var ctx_r581 = core.ɵɵnextContext(3); return ctx_r581.drop($event); });
        core.ɵɵtemplate(2, TemplateProfileCreateComponent_div_3_div_19_div_8_ng_container_2_Template, 2, 1, "ng-container", 40);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var category_r408 = core.ɵɵnextContext().$implicit;
        core.ɵɵproperty("cdkDropListData", category_r408.forms);
        core.ɵɵadvance(2);
        core.ɵɵproperty("ngIf", category_r408.expandMore);
    } }
    function TemplateProfileCreateComponent_div_3_div_19_mat_icon_10_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "mat-icon");
        core.ɵɵtext(1, "chevron_right");
        core.ɵɵelementEnd();
    } }
    function TemplateProfileCreateComponent_div_3_div_19_mat_icon_11_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "mat-icon");
        core.ɵɵtext(1, "expand_more");
        core.ɵɵelementEnd();
    } }
    function TemplateProfileCreateComponent_div_3_div_19_Template(rf, ctx) { if (rf & 1) {
        var _r585 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "div", 42);
        core.ɵɵelementStart(1, "div", 43);
        core.ɵɵelementStart(2, "button", 44);
        core.ɵɵlistener("click", function TemplateProfileCreateComponent_div_3_div_19_Template_button_click_2_listener($event) { core.ɵɵrestoreView(_r585); var i_r409 = ctx.index; var ctx_r584 = core.ɵɵnextContext(2); return ctx_r584.onRemoveCategory($event, i_r409); });
        core.ɵɵelementStart(3, "mat-icon");
        core.ɵɵtext(4, "delete");
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementStart(5, "div", 45);
        core.ɵɵelementStart(6, "div", 46);
        core.ɵɵelementStart(7, "input", 47);
        core.ɵɵlistener("ngModelChange", function TemplateProfileCreateComponent_div_3_div_19_Template_input_ngModelChange_7_listener($event) { core.ɵɵrestoreView(_r585); var category_r408 = ctx.$implicit; return category_r408.name = $event; });
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵtemplate(8, TemplateProfileCreateComponent_div_3_div_19_div_8_Template, 3, 2, "div", 48);
        core.ɵɵelementEnd();
        core.ɵɵelementStart(9, "button", 49);
        core.ɵɵlistener("click", function TemplateProfileCreateComponent_div_3_div_19_Template_button_click_9_listener($event) { core.ɵɵrestoreView(_r585); var category_r408 = ctx.$implicit; var i_r409 = ctx.index; var ctx_r587 = core.ɵɵnextContext(2); return ctx_r587.onExpendMore({ event: $event, field: category_r408 }, i_r409); });
        core.ɵɵtemplate(10, TemplateProfileCreateComponent_div_3_div_19_mat_icon_10_Template, 2, 0, "mat-icon", 40);
        core.ɵɵtemplate(11, TemplateProfileCreateComponent_div_3_div_19_mat_icon_11_Template, 2, 0, "mat-icon", 40);
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var category_r408 = ctx.$implicit;
        var ctx_r380 = core.ɵɵnextContext(2);
        core.ɵɵproperty("id", category_r408.name);
        core.ɵɵadvance(2);
        core.ɵɵproperty("disabled", !category_r408.deleteable);
        core.ɵɵadvance(1);
        core.ɵɵstyleProp("opacity", !category_r408.deleteable ? 0 : 1);
        core.ɵɵadvance(4);
        core.ɵɵproperty("readonly", ctx_r380.categories.length < 4 || !category_r408.editable)("readonly", !category_r408.editable)("ngModel", category_r408.name)("ngModelOptions", core.ɵɵpureFunction0(11, _c0$1));
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", category_r408.forms);
        core.ɵɵadvance(2);
        core.ɵɵproperty("ngIf", !category_r408.expandMore);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", category_r408.expandMore);
    } }
    function TemplateProfileCreateComponent_div_3_Template(rf, ctx) { if (rf & 1) {
        var _r589 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "div", 21);
        core.ɵɵelementStart(1, "div", 22);
        core.ɵɵelementStart(2, "div", 23);
        core.ɵɵelementStart(3, "h3");
        core.ɵɵelementStart(4, "span");
        core.ɵɵtext(5);
        core.ɵɵelementEnd();
        core.ɵɵelementStart(6, "mat-icon", 19);
        core.ɵɵlistener("click", function TemplateProfileCreateComponent_div_3_Template_mat_icon_click_6_listener() { core.ɵɵrestoreView(_r589); var ctx_r588 = core.ɵɵnextContext(); return ctx_r588.openDialog(); });
        core.ɵɵtext(7, "edit");
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementStart(8, "ol", 24);
        core.ɵɵtemplate(9, TemplateProfileCreateComponent_div_3_li_9_Template, 8, 5, "li", 25);
        core.ɵɵelementEnd();
        core.ɵɵelementStart(10, "button", 26);
        core.ɵɵlistener("click", function TemplateProfileCreateComponent_div_3_Template_button_click_10_listener($event) { core.ɵɵrestoreView(_r589); var ctx_r590 = core.ɵɵnextContext(); return ctx_r590.onAddNewCategory($event); });
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
        core.ɵɵlistener("cdkDropListDropped", function TemplateProfileCreateComponent_div_3_Template_div_cdkDropListDropped_17_listener($event) { core.ɵɵrestoreView(_r589); var ctx_r591 = core.ɵɵnextContext(); return ctx_r591.drop($event); });
        core.ɵɵtemplate(19, TemplateProfileCreateComponent_div_3_div_19_Template, 12, 12, "div", 31);
        core.ɵɵelementStart(20, "div", 32);
        core.ɵɵelementStart(21, "button", 19);
        core.ɵɵlistener("click", function TemplateProfileCreateComponent_div_3_Template_button_click_21_listener($event) { core.ɵɵrestoreView(_r589); var ctx_r592 = core.ɵɵnextContext(); return ctx_r592.onAddNewCategory($event); });
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
        var ctx_r367 = core.ɵɵnextContext();
        core.ɵɵadvance(5);
        core.ɵɵtextInterpolate(ctx_r367.form.get("Name").value);
        core.ɵɵadvance(4);
        core.ɵɵproperty("ngForOf", ctx_r367.categories);
        core.ɵɵadvance(8);
        core.ɵɵproperty("cdkDropListData", ctx_r367.categories);
        core.ɵɵadvance(2);
        core.ɵɵproperty("ngForOf", ctx_r367.categories);
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
                                Name: ["", forms.Validators.required],
                                Picto: [""],
                                Description: [""],
                                Tags: ["", forms.Validators.required],
                                Status: [false, forms.Validators.required],
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
        TemplateProfileCreateComponent.ɵcmp = core.ɵɵdefineComponent({ type: TemplateProfileCreateComponent, selectors: [["onboarding-create-profile-template"]], decls: 4, vars: 3, consts: [[3, "formGroup", "submit"], ["class", "box-title", 4, "ngIf"], ["class", "category", 4, "ngIf"], [1, "box-title"], [1, "box-title-content"], [1, "title"], [1, "profil-name-content"], ["mat-raised-button", "", "color", "primary", 1, "add-picto", 3, "click"], ["appearance", "outline", 1, "example-full-width"], ["type", "text", "matInput", "", "formControlName", "Name", "placeholder", "Ex. Manager"], ["class", "list-picto", 4, "ngIf"], ["type", "text", "matInput", "", "formControlName", "Description", "rows", "4", "placeholder", ""], ["formControlName", "Tags", "required", ""], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "Status", 1, "form-field"], [1, "link-create-profil"], ["mat-raised-button", "", "color", "primary", 1, "link-add-profil", 3, "disabled", "click"], [1, "list-picto"], [3, "color", "click", 4, "ngFor", "ngForOf"], [3, "click"], [3, "value"], [1, "category"], [1, "side-bar"], [1, "summary"], ["type", "I"], ["class", "li-title", 4, "ngFor", "ngForOf"], ["mat-button", "", 1, "add-category", "transparent", 3, "click"], ["mat-button", "", "type", "submit", 1, "register-button"], ["cdkDropListGroup", "", 1, "fields"], ["cdkDropList", "", 1, "example-list", "mt-20", 3, "cdkDropListData", "cdkDropListDropped"], ["parentList", "cdkDropList"], ["class", "category-item", "cdkDrag", "", 3, "id", 4, "ngFor", "ngForOf"], [1, "add-button-container"], [1, "li-title"], [3, "ngxScrollTo", "click", 4, "ngIf"], ["type", "text", 3, "ngModel", "ngModelOptions", "blur", "ngModelChange", 4, "ngIf"], [4, "ngFor", "ngForOf"], [3, "ngxScrollTo", "click"], ["type", "text", 3, "ngModel", "ngModelOptions", "blur", "ngModelChange"], ["edit", ""], [4, "ngIf"], [3, "ngxScrollTo"], ["cdkDrag", "", 1, "category-item", 3, "id"], ["cdkDragHandle", "", 1, "left-action", "move-icons"], ["mat-raised-button", "", 1, "transparent-button", 3, "disabled", "click"], [1, "field-content"], [1, "field-item"], ["type", "text", "required", "", "placeholder", "Saisir le nom de la cat\u00E9gorie", 1, "example-full-width", "input-category-name", 3, "readonly", "ngModel", "ngModelOptions", "ngModelChange"], ["cdkDropList", "", 3, "cdkDropListData", "cdkDropListDropped", 4, "ngIf"], ["mat-mini-fab", "", "color", "primary", 1, "expand-button", 3, "click"], ["cdkDropList", "", 3, "cdkDropListData", "cdkDropListDropped"], ["childList", "cdkDropList"], ["class", "", 3, "id", 4, "ngFor", "ngForOf"], [1, "", 3, "id"], ["cdkDrag", ""], [1, "fields-content"], [1, "button-action"], ["mat-mini-fab", "", "color", "warn", 1, "delete-field", "transparent-button", 3, "disabled", "click"], [1, "fields-container"], [3, "field", "length", "i", "j", "conditionData", "onAddKeywordFromInput", "onKeyPress", "onAddNewField", "onRemoveField", "onChangeType", "onRemoveKeyword", "onAddNewSubLevelField", "onExpendMore", "onChangeLabel", "onCheckedChip", "onDrop", "onCheckedDefault", "onGetConditionValues"], ["class", "child", 4, "ngIf"], ["class", "add-button-container add-button-sub-category", 4, "ngIf"], [1, "child"], [1, "button-action", "child-2-background"], [1, "button-action", "child-3-background"], [1, "add-button-container", "add-button-sub-category"], ["mat-raised-button", "", "color", "primary", 2, "margin", "10px auto", 3, "disabled", "click"]], template: function TemplateProfileCreateComponent_Template(rf, ctx) { if (rf & 1) {
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
            } }, directives: [forms.ɵangular_packages_forms_forms_y, forms.NgControlStatusGroup, forms.FormGroupDirective, common.NgIf, button.MatButton, icon.MatIcon, formField.MatFormField, formField.MatLabel, input.MatInput, forms.DefaultValueAccessor, forms.NgControlStatus, forms.FormControlName, select.MatSelect, forms.RequiredValidator, common.NgForOf, checkbox.MatCheckbox, core$1.MatOption, dragDrop.CdkDropListGroup, dragDrop.CdkDropList, ngxScrollTo.ScrollToDirective, forms.NgModel, dragDrop.CdkDrag, dragDrop.CdkDragHandle, SubTemplateProfileComponent], styles: ["main[_ngcontent-%COMP%]{background:no-repeat padding-box #f4f7f9;height:100vh;width:100%;display:flex;flex-direction:column;align-items:center}main[_ngcontent-%COMP%]   .disabled[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{background-color:transparent!important}main[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{display:flex;height:100%;width:100%}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]{width:786px;background:no-repeat padding-box #fff;border:1px solid #dce4e9;border-radius:6px;opacity:1;margin:auto;padding:0 25px;-ms-grid-row-align:center;align-self:center}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{text-align:center;font:900 32px/48px Nexa;letter-spacing:0;color:#171f26}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font:18px/24px Nexa Text;letter-spacing:0;color:#171f26}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .profil-name-content[_ngcontent-%COMP%]{display:flex;align-items:center;position:relative}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .profil-name-content[_ngcontent-%COMP%]   .add-picto[_ngcontent-%COMP%]{margin-right:15px;min-width:50px;width:30px;padding:9px 12px}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .profil-name-content[_ngcontent-%COMP%]   .add-picto[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin-right:10px}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .profil-name-content[_ngcontent-%COMP%]   .list-picto[_ngcontent-%COMP%]{position:absolute;height:200px;width:100%;background:no-repeat padding-box #fff;border:1px solid #171f26;border-radius:8px;top:100%;z-index:1}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .profil-name-content[_ngcontent-%COMP%]   .list-picto[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin:15px;border:none;font-size:40px}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .profil-name-content[_ngcontent-%COMP%]   .list-picto[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]:hover{color:#830b6b!important;cursor:pointer}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .box-title-content[_ngcontent-%COMP%]{width:100%;margin:25px auto}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font:900 32px/38px Nexa;letter-spacing:0;color:#171f26}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font:15px/26px Nexa Text;letter-spacing:0;color:#171f26;text-align:center}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .link-create-profil[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:center}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{text-align:center;border:1px solid #543cb6;border-radius:7px;padding:.7em 2em .5em;display:flex;align-items:center;background-color:transparent;font:bold 15px/17px Nexa;letter-spacing:0;color:#543cb6}main[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:space-between}.expand-button[_ngcontent-%COMP%]{color:#5a607f!important;background-color:transparent!important;box-shadow:none!important}.input-category-name[_ngcontent-%COMP%]{border:none;outline:0;text-align:left;font:bold 18px/48px Nexa Text;letter-spacing:0;color:#171f26}.example-full-width[_ngcontent-%COMP%]{width:100%}.field-action[_ngcontent-%COMP%]{width:10%}.field-size[_ngcontent-%COMP%]{width:90%;margin:auto 2% auto auto}  .mat-form-field-appearance-fill .mat-form-field-flex{background-color:#fff}  .mat-form-field-appearance-outline .mat-form-field-infix{padding:.5em 0}  .mat-select{padding:.5em 0}  .mat-form-field-appearance-fill .mat-form-field-underline::before{background-color:transparent}  .mat-form-field-wrapper{padding-bottom:0!important}[_nghost-%COMP%]     .cdk-drag-preview .input-category-name div.mat-form-field-outline-start, [_nghost-%COMP%]     .input-category-name div.mat-form-field-outline-start{border-color:0!important;border-width:0!important}[_nghost-%COMP%]     .input-category-name .mat-form-field-outline-gap{border-color:0!important;border-width:0!important}  mat-checkbox.form-field .mat-checkbox-checkmark-path{stroke:#000!important}[_nghost-%COMP%]     .mat-checkbox-checked.mat-accent .mat-checkbox-background, [_nghost-%COMP%]     .mat-checkbox-indeterminate.mat-accent .mat-checkbox-background{background-color:transparent}[_nghost-%COMP%]     .input-category-name .mat-form-field-outline-end{border-color:0!important;border-width:0!important}[_nghost-%COMP%]     .input-category-name .mat-form-field-label-wrapper{display:none}[_nghost-%COMP%]     .input-category-name .mat-form-field-appearance-outline .mat-form-field-outline{color:transparent!important}[_nghost-%COMP%]     .input-category-name .mat-form-field-infix{border-top:none}[_nghost-%COMP%]     .input-category-name .mat-form-field-appearance-outline .mat-form-field-infix{padding:0 0 1em!important}.category-action[_ngcontent-%COMP%]{display:flex;width:100%}.delete-field[_ngcontent-%COMP%]{margin:auto 2%}.radio-group[_ngcontent-%COMP%]   .mat-radio-button[_ngcontent-%COMP%]{margin-right:10px}.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary[_ngcontent-%COMP%]{background-color:#3f51b5;color:#fff;min-height:20px;font-size:10px}.move-icons[_ngcontent-%COMP%]{cursor:move}.category-item[_ngcontent-%COMP%], .cdk-drag-placeholder[_ngcontent-%COMP%]{display:flex;align-items:baseline;width:100%;border:1px solid #dce4e9;border-radius:8px;background-color:#fff;margin-top:10px;min-height:60px}.category-item[_ngcontent-%COMP%]   .left-action[_ngcontent-%COMP%], .cdk-drag-placeholder[_ngcontent-%COMP%]   .left-action[_ngcontent-%COMP%]{height:auto;background-color:#49a094;padding-top:7px;width:40px;-ms-grid-row-align:stretch;align-self:stretch;border-top-left-radius:8px;border-bottom-left-radius:8px}.category-item[_ngcontent-%COMP%]   .left-action[_ngcontent-%COMP%]   .transparent-button[_ngcontent-%COMP%], .cdk-drag-placeholder[_ngcontent-%COMP%]   .left-action[_ngcontent-%COMP%]   .transparent-button[_ngcontent-%COMP%]{background-color:transparent;box-shadow:none;width:40px;padding:0;margin:0;min-width:auto;color:#fff}.category-item[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%], .cdk-drag-placeholder[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%]{width:100%;-ms-grid-row-align:center;align-self:center}.category-item[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%], .cdk-drag-placeholder[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;border:transparent!important}.category-item[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]   .mat-form-field-wrapper[_ngcontent-%COMP%]   .mat-form-field-flex[_ngcontent-%COMP%]   .mat-form-field-outline[_ngcontent-%COMP%], .category-item[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%]   .mat-form-field-outline[_ngcontent-%COMP%], .cdk-drag-placeholder[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]   .mat-form-field-wrapper[_ngcontent-%COMP%]   .mat-form-field-flex[_ngcontent-%COMP%]   .mat-form-field-outline[_ngcontent-%COMP%], .cdk-drag-placeholder[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%]   .mat-form-field-outline[_ngcontent-%COMP%]{color:transparent!important}.cdk-drag-preview[_ngcontent-%COMP%]{box-sizing:border-box;border-radius:4px;opacity:1}.cdk-drag-preview[_ngcontent-%COMP%]   .expand-button[_ngcontent-%COMP%]{color:#5a607f!important;background-color:transparent!important;box-shadow:none!important;margin-right:28px!important}.cdk-drag-placeholder[_ngcontent-%COMP%]{opacity:0}.cdk-drag-animating[_ngcontent-%COMP%], .example-list.cdk-drop-list-dragging[_ngcontent-%COMP%]   .category-item[_ngcontent-%COMP%]:not(.cdk-drag-placeholder){transition:transform 250ms cubic-bezier(0,0,.2,1)}.child[_ngcontent-%COMP%]{margin-left:0}.category[_ngcontent-%COMP%]{display:flex;flex-direction:row;width:100vw}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]{width:250px;background-color:#fff;margin:10px 20px;border-radius:5px;border:1px solid #dbcbcb96}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:25px;border-bottom:1px solid #dbcbcb96;margin:10px;padding-bottom:5px;font-family:\"Nexa Text\";display:flex;align-items:center}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin-left:15px;cursor:pointer}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]{font-weight:600;margin-left:-27px;font-size:15px;list-style-position:inside}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:5px;margin:5px auto;cursor:pointer;text-align:left;font:12px/19px Nexa Text;letter-spacing:0;color:#535760}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]{padding-left:0;margin-left:0}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.li-title[_ngcontent-%COMP%]{font-size:14px;font-weight:600}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.li-title[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:140px;outline:0;border:1px dashed grey}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.li-title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:inline-flex;align-items:center}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.li-title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin-left:10px;display:none}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.li-title[_ngcontent-%COMP%]:hover   mat-icon[_ngcontent-%COMP%]{display:initial!important}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.sub-title[_ngcontent-%COMP%]{list-style:none;padding-left:20px}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.sub-title.active[_ngcontent-%COMP%], .category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.sub-title.active[_ngcontent-%COMP%]::marker, .category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.sub-title[_ngcontent-%COMP%]:hover{font-weight:600;background:no-repeat padding-box #e5e8ee;border-radius:5px}.category[_ngcontent-%COMP%]   .fields[_ngcontent-%COMP%]{width:90%;max-height:100vh;overflow:auto;margin-right:.5%;overflow-x:hidden}.category[_ngcontent-%COMP%]   .disabled[_ngcontent-%COMP%]{background-color:#f4f7f9!important}.category[_ngcontent-%COMP%]   .expand-button[_ngcontent-%COMP%]{color:#5a607f!important;background-color:transparent!important;box-shadow:none!important;margin-right:28px!important}.category[_ngcontent-%COMP%]   .expand-button[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%]{font-size:40px}.category[_ngcontent-%COMP%]   .transparent-button[_ngcontent-%COMP%]{background-color:transparent;box-shadow:none;width:40px;padding:0;margin:0;margin-left:0!important;min-width:auto;color:#fff}.add-button-sub-category[_ngcontent-%COMP%]{width:95.5%!important;margin-bottom:22px;margin-left:22px}.add-button-container[_ngcontent-%COMP%]{background:no-repeat padding-box #fff;border:1px dashed #dce4e9;border-radius:8px;margin-top:10px;padding:10px;display:flex;justify-content:center;align-items:center;width:98.5%;margin-bottom:22px}.add-button-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{display:flex;align-items:center;background-color:transparent;border:none;cursor:pointer;font:17px/26px Nexa Text;letter-spacing:0;color:#c2c8d5;box-shadow:none}.add-category[_ngcontent-%COMP%]{border:1px dashed #c2c8d5;border-radius:5px;margin-left:10px;margin-bottom:10px;font:bold 12px/19px Nexa Text;letter-spacing:0;color:#c2c8d5;width:92%}.cdk-drag[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]{display:flex;height:100%;margin:20px auto auto;width:100%;min-width:250px}.cdk-drag[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]   .button-action[_ngcontent-%COMP%]{background-color:#6fe8d7;-ms-grid-row-align:stretch;align-self:stretch;margin-top:0;margin-left:20px;border-bottom-left-radius:8px;border-top-left-radius:8px}.cdk-drag[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]   .button-action[_ngcontent-%COMP%]   .transparent-button[_ngcontent-%COMP%]{background-color:transparent;box-shadow:none;width:40px;padding:0;margin:0;min-width:auto;color:#fff}.cdk-drag[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]   .child-2-background[_ngcontent-%COMP%]{background-color:#cffaf4!important}.cdk-drag[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]   .child-3-background[_ngcontent-%COMP%]{background-color:#e5e8ee!important}.cdk-drag[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]   .fields-container[_ngcontent-%COMP%]{border:1px solid #dce4e9;border-radius:0 8px 8px 0;background-color:#fff;width:100%;padding:10px}.cdk-drag[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]   .fields-container[_ngcontent-%COMP%]   lib-sub-category[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;width:100%}.cdk-drag[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]   .fields-container[_ngcontent-%COMP%]   lib-sub-category[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]   .button-action[_ngcontent-%COMP%]{background-color:#6fe8d7;height:100%;margin:auto 15px auto auto;display:flex}.cdk-drag[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]   .fields-container[_ngcontent-%COMP%]   lib-sub-category[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]   .button-action[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{box-shadow:none;background-color:transparent;color:#fff}.side-bar[_ngcontent-%COMP%]{display:flex;flex-direction:column}.register-button[_ngcontent-%COMP%]{background:no-repeat padding-box #171f26!important;border:2px solid #192128!important;border-radius:8px;color:#fff!important;width:85%;margin-left:22px!important;border:none!important}"] });
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
        var d_r594 = core.ɵɵnextContext().$implicit;
        core.ɵɵadvance(2);
        core.ɵɵtextInterpolate(d_r594 == null ? null : d_r594.Picto);
    } }
    function TemplateProfileListComponent_div_13_div_3_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "div", 13);
        core.ɵɵelementStart(1, "h3");
        core.ɵɵtext(2);
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var d_r594 = core.ɵɵnextContext().$implicit;
        core.ɵɵadvance(2);
        core.ɵɵtextInterpolate(d_r594.Name.substr(0, 2));
    } }
    var _c0$2 = function (a0) { return [a0]; };
    function TemplateProfileListComponent_div_13_Template(rf, ctx) { if (rf & 1) {
        var _r600 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "div", 9);
        core.ɵɵelementStart(1, "div", 10);
        core.ɵɵtemplate(2, TemplateProfileListComponent_div_13_div_2_Template, 3, 1, "div", 11);
        core.ɵɵtemplate(3, TemplateProfileListComponent_div_13_div_3_Template, 3, 1, "div", 11);
        core.ɵɵelementStart(4, "p");
        core.ɵɵtext(5);
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementStart(6, "button", 12);
        core.ɵɵlistener("click", function TemplateProfileListComponent_div_13_Template_button_click_6_listener($event) { core.ɵɵrestoreView(_r600); var d_r594 = ctx.$implicit; var ctx_r599 = core.ɵɵnextContext(); return ctx_r599.onDelete($event, d_r594._id); });
        core.ɵɵelementStart(7, "mat-icon");
        core.ɵɵtext(8, "close");
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var d_r594 = ctx.$implicit;
        var ctx_r593 = core.ɵɵnextContext();
        core.ɵɵproperty("defaultElevation", 0);
        core.ɵɵadvance(1);
        core.ɵɵproperty("routerLink", core.ɵɵpureFunction1(6, _c0$2, ctx_r593.service.mainPath + "/template-builder/" + d_r594._id));
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", d_r594 == null ? null : d_r594.Picto);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", !(d_r594 == null ? null : d_r594.Picto));
        core.ɵɵadvance(2);
        core.ɵɵtextInterpolate1(" ", d_r594.Name, "");
        core.ɵɵadvance(1);
        core.ɵɵproperty("defaultElevation", ctx_r593.defaultElevation);
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
                core.ɵɵproperty("routerLink", core.ɵɵpureFunction1(2, _c0$2, ctx.service.mainPath + "/template-builder/0"));
                core.ɵɵadvance(2);
                core.ɵɵproperty("ngForOf", ctx.datas);
            } }, directives: [button.MatAnchor, router.RouterLinkWithHref, common.NgForOf, MaterialElevationDirective, router.RouterLink, common.NgIf, button.MatButton, icon.MatIcon], styles: [".main[_ngcontent-%COMP%]{background:no-repeat padding-box #f4f7f9;opacity:1;height:100%}.main[_ngcontent-%COMP%]   .header-list[_ngcontent-%COMP%]{margin-left:50px;padding-top:10px}.main[_ngcontent-%COMP%]   .header-list[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{text-align:left;font:bold 32px/30px Nexa Text;letter-spacing:0;color:#171f26;opacity:1}.main[_ngcontent-%COMP%]   .header-list[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{text-align:left;font:20px/26px Nexa Text;letter-spacing:0;color:#171f26;opacity:1;max-width:300px}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]{background-color:#fff;border-radius:8px;opacity:1;margin:57px;height:80%;padding:49px}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{text-align:left;font:bold 23px/30px Nexa Text;letter-spacing:0;color:#171f26;opacity:1;margin-bottom:0;margin-top:0}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   p.sub-title[_ngcontent-%COMP%]{margin-bottom:57px;font:20px/26px Nexa Text;letter-spacing:0;color:#171f26;width:300px}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .box-template[_ngcontent-%COMP%]{width:328px;position:relative;height:228px;margin-right:50px;margin-bottom:50px;background:no-repeat padding-box #f4f7f9;border:1px solid #dce4e9;border-radius:6px;opacity:1;display:flex;flex-direction:column;justify-content:center;align-items:center;cursor:pointer}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .box-template[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:81px;height:81px}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .box-template[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{text-align:center;font:bold 16px/25px Nexa Text;letter-spacing:.1px;color:#000;opacity:1;margin-top:17px}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .box-template[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{background:no-repeat padding-box #171f26;border-radius:7px;font-size:15px}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .box-template[_ngcontent-%COMP%]   .mat-mini-fab[_ngcontent-%COMP%]{display:none}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .box-template[_ngcontent-%COMP%]   .box-content[_ngcontent-%COMP%]{width:100%;height:90%;text-align:center;margin-top:10%}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .box-template[_ngcontent-%COMP%]   .box-content[_ngcontent-%COMP%]   .picto-preview[_ngcontent-%COMP%]{width:113px;height:113px;background:no-repeat padding-box #fff;margin:auto;border-radius:113px;display:flex;align-items:center;justify-content:center}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .box-template[_ngcontent-%COMP%]   .box-content[_ngcontent-%COMP%]   .picto-preview[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:40px;color:#dce4e9}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .new-template[_ngcontent-%COMP%]{border:1px solid #dce4e9;border-radius:6px;background-color:transparent}  .box-template:hover .mat-mini-fab .mat-button-wrapper{padding:0!important;display:inline-block;line-height:0}  .box-template:hover .mat-mini-fab{display:initial!important;position:absolute;right:6px;top:7px;background-color:red;width:25px;height:25px}  .box-template:hover .mat-mini-fab .mat-icon{background-repeat:no-repeat;display:inline-block;fill:currentColor;height:37px;width:24px}"] });
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

    var _c0$3 = function () { return { standalone: true }; };
    function SubOnboardingCreateComponent_div_2_div_1_Template(rf, ctx) { if (rf & 1) {
        var _r695 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "div", 5);
        core.ɵɵelementStart(1, "mat-checkbox", 6);
        core.ɵɵlistener("ngModelChange", function SubOnboardingCreateComponent_div_2_div_1_Template_mat_checkbox_ngModelChange_1_listener($event) { core.ɵɵrestoreView(_r695); var ctx_r694 = core.ɵɵnextContext(2); return ctx_r694.field.value = $event; });
        core.ɵɵtext(2);
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r693 = core.ɵɵnextContext(2);
        core.ɵɵadvance(1);
        core.ɵɵclassMap(ctx_r693.checkSubForm(ctx_r693.field) ? "checkbox-title-active" : "");
        core.ɵɵproperty("ngModel", ctx_r693.field.value)("required", ctx_r693.field.isMandatory)("ngModelOptions", core.ɵɵpureFunction0(6, _c0$3));
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate1(" ", ctx_r693.field.label, " ");
    } }
    function SubOnboardingCreateComponent_div_2_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "div", 5);
        core.ɵɵtemplate(1, SubOnboardingCreateComponent_div_2_div_1_Template, 3, 7, "div", 2);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngSwitchCase", "checkbox");
    } }
    function SubOnboardingCreateComponent_div_3_mat_checkbox_4_Template(rf, ctx) { if (rf & 1) {
        var _r699 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "mat-checkbox", 9);
        core.ɵɵlistener("ngModelChange", function SubOnboardingCreateComponent_div_3_mat_checkbox_4_Template_mat_checkbox_ngModelChange_0_listener($event) { core.ɵɵrestoreView(_r699); var opt_r697 = ctx.$implicit; return opt_r697.checked = $event; });
        core.ɵɵtext(1);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var opt_r697 = ctx.$implicit;
        var ctx_r696 = core.ɵɵnextContext(2);
        core.ɵɵproperty("checked", opt_r697.checked)("ngModel", opt_r697.checked)("required", ctx_r696.field.isMandatory)("ngModelOptions", core.ɵɵpureFunction0(5, _c0$3));
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate1(" ", opt_r697.value, " ");
    } }
    function SubOnboardingCreateComponent_div_3_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "div", 5);
        core.ɵɵelementStart(1, "label");
        core.ɵɵtext(2);
        core.ɵɵelementEnd();
        core.ɵɵelementStart(3, "div", 7);
        core.ɵɵtemplate(4, SubOnboardingCreateComponent_div_3_mat_checkbox_4_Template, 2, 6, "mat-checkbox", 8);
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r688 = core.ɵɵnextContext();
        core.ɵɵadvance(2);
        core.ɵɵtextInterpolate(ctx_r688.field.label);
        core.ɵɵadvance(2);
        core.ɵɵproperty("ngForOf", ctx_r688.field.defaultValue);
    } }
    function SubOnboardingCreateComponent_div_4_mat_radio_button_4_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "mat-radio-button", 14);
        core.ɵɵtext(1);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var opt_r702 = ctx.$implicit;
        core.ɵɵproperty("value", opt_r702.value);
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate1("", opt_r702.value, " ");
    } }
    function SubOnboardingCreateComponent_div_4_mat_form_field_5_Template(rf, ctx) { if (rf & 1) {
        var _r704 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "mat-form-field", 15);
        core.ɵɵelementStart(1, "mat-label");
        core.ɵɵtext(2, "Autre option");
        core.ɵɵelementEnd();
        core.ɵɵelementStart(3, "input", 16);
        core.ɵɵlistener("ngModelChange", function SubOnboardingCreateComponent_div_4_mat_form_field_5_Template_input_ngModelChange_3_listener($event) { core.ɵɵrestoreView(_r704); var ctx_r703 = core.ɵɵnextContext(2); return ctx_r703.field.otherValue = $event; });
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r701 = core.ɵɵnextContext(2);
        core.ɵɵadvance(3);
        core.ɵɵproperty("required", ctx_r701.field.isMandatory)("ngModelOptions", core.ɵɵpureFunction0(3, _c0$3))("ngModel", ctx_r701.field.otherValue);
    } }
    function SubOnboardingCreateComponent_div_4_Template(rf, ctx) { if (rf & 1) {
        var _r706 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "div", 5);
        core.ɵɵelementStart(1, "label", 10);
        core.ɵɵtext(2);
        core.ɵɵelementEnd();
        core.ɵɵelementStart(3, "mat-radio-group", 11);
        core.ɵɵlistener("ngModelChange", function SubOnboardingCreateComponent_div_4_Template_mat_radio_group_ngModelChange_3_listener($event) { core.ɵɵrestoreView(_r706); var ctx_r705 = core.ɵɵnextContext(); return ctx_r705.field.value = $event; });
        core.ɵɵtemplate(4, SubOnboardingCreateComponent_div_4_mat_radio_button_4_Template, 2, 2, "mat-radio-button", 12);
        core.ɵɵelementEnd();
        core.ɵɵtemplate(5, SubOnboardingCreateComponent_div_4_mat_form_field_5_Template, 4, 4, "mat-form-field", 13);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r689 = core.ɵɵnextContext();
        core.ɵɵadvance(2);
        core.ɵɵtextInterpolate1(" ", ctx_r689.field.label, " ");
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngModel", ctx_r689.field.value)("required", ctx_r689.field.isMandatory);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngForOf", ctx_r689.field.defaultValue);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", "autre" === ctx_r689.formatOther(ctx_r689.field.value));
    } }
    function SubOnboardingCreateComponent_div_5_mat_option_5_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "mat-option", 14);
        core.ɵɵtext(1);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var opt_r709 = ctx.$implicit;
        core.ɵɵproperty("value", opt_r709.value);
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate(opt_r709.value);
    } }
    function SubOnboardingCreateComponent_div_5_mat_form_field_6_Template(rf, ctx) { if (rf & 1) {
        var _r711 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "mat-form-field", 15);
        core.ɵɵelementStart(1, "mat-label");
        core.ɵɵtext(2, "Autre option");
        core.ɵɵelementEnd();
        core.ɵɵelementStart(3, "input", 16);
        core.ɵɵlistener("ngModelChange", function SubOnboardingCreateComponent_div_5_mat_form_field_6_Template_input_ngModelChange_3_listener($event) { core.ɵɵrestoreView(_r711); var ctx_r710 = core.ɵɵnextContext(2); return ctx_r710.field.otherValue = $event; });
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r708 = core.ɵɵnextContext(2);
        core.ɵɵadvance(3);
        core.ɵɵproperty("required", ctx_r708.field.isMandatory)("ngModelOptions", core.ɵɵpureFunction0(3, _c0$3))("ngModel", ctx_r708.field.otherValue);
    } }
    function SubOnboardingCreateComponent_div_5_Template(rf, ctx) { if (rf & 1) {
        var _r713 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "div", 5);
        core.ɵɵelementStart(1, "mat-form-field", 17);
        core.ɵɵelementStart(2, "mat-label");
        core.ɵɵtext(3);
        core.ɵɵelementEnd();
        core.ɵɵelementStart(4, "mat-select", 18);
        core.ɵɵlistener("ngModelChange", function SubOnboardingCreateComponent_div_5_Template_mat_select_ngModelChange_4_listener($event) { core.ɵɵrestoreView(_r713); var ctx_r712 = core.ɵɵnextContext(); return ctx_r712.field.value = $event; });
        core.ɵɵtemplate(5, SubOnboardingCreateComponent_div_5_mat_option_5_Template, 2, 2, "mat-option", 12);
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵtemplate(6, SubOnboardingCreateComponent_div_5_mat_form_field_6_Template, 4, 4, "mat-form-field", 13);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r690 = core.ɵɵnextContext();
        core.ɵɵadvance(3);
        core.ɵɵtextInterpolate1(" ", ctx_r690.field.label, " ");
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngModel", ctx_r690.field.value)("ngModelOptions", core.ɵɵpureFunction0(6, _c0$3))("required", ctx_r690.field.isMandatory);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngForOf", ctx_r690.field.defaultValue);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", "autre" === ctx_r690.formatOther(ctx_r690.field.value));
    } }
    function SubOnboardingCreateComponent_mat_form_field_6_Template(rf, ctx) { if (rf & 1) {
        var _r715 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "mat-form-field", 19);
        core.ɵɵelementStart(1, "mat-label");
        core.ɵɵtext(2);
        core.ɵɵelementEnd();
        core.ɵɵelementStart(3, "textarea", 20);
        core.ɵɵlistener("ngModelChange", function SubOnboardingCreateComponent_mat_form_field_6_Template_textarea_ngModelChange_3_listener($event) { core.ɵɵrestoreView(_r715); var ctx_r714 = core.ɵɵnextContext(); return ctx_r714.field.value = $event; });
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r691 = core.ɵɵnextContext();
        core.ɵɵadvance(2);
        core.ɵɵtextInterpolate(ctx_r691.field.label);
        core.ɵɵadvance(1);
        core.ɵɵproperty("required", ctx_r691.field.isMandatory)("ngModelOptions", core.ɵɵpureFunction0(4, _c0$3))("ngModel", ctx_r691.field.value);
    } }
    function SubOnboardingCreateComponent_mat_form_field_7_Template(rf, ctx) { if (rf & 1) {
        var _r717 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "mat-form-field", 21);
        core.ɵɵelementStart(1, "mat-label");
        core.ɵɵtext(2);
        core.ɵɵelementEnd();
        core.ɵɵelementStart(3, "input", 22);
        core.ɵɵlistener("ngModelChange", function SubOnboardingCreateComponent_mat_form_field_7_Template_input_ngModelChange_3_listener($event) { core.ɵɵrestoreView(_r717); var ctx_r716 = core.ɵɵnextContext(); return ctx_r716.field.value = $event; });
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r692 = core.ɵɵnextContext();
        core.ɵɵadvance(2);
        core.ɵɵtextInterpolate(ctx_r692.field.label);
        core.ɵɵadvance(1);
        core.ɵɵproperty("type", ctx_r692.field.type)("required", ctx_r692.field.isMandatory)("ngModelOptions", core.ɵɵpureFunction0(5, _c0$3))("ngModel", ctx_r692.field.value);
    } }
    var _c1$1 = [[["", 8, "child"]]];
    var _c2$1 = [".child"];
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
        SubOnboardingCreateComponent.ɵcmp = core.ɵɵdefineComponent({ type: SubOnboardingCreateComponent, selectors: [["lib-sub-create-onboarding"]], inputs: { field: "field", length: "length", i: "i", j: "j" }, outputs: { onAddKeywordFromInput: "onAddKeywordFromInput", onKeyPress: "onKeyPress", onDrop: "onDrop", onAddNewField: "onAddNewField", onRemoveField: "onRemoveField", onChangeType: "onChangeType", onRemoveKeyword: "onRemoveKeyword", onAddNewSubLevelField: "onAddNewSubLevelField", onExpendMore: "onExpendMore", onChangeLabel: "onChangeLabel", onCheckedChip: "onCheckedChip" }, ngContentSelectors: _c2$1, decls: 9, vars: 6, consts: [[1, "field-item"], [3, "ngSwitch"], ["class", "flex-auto w-30 field-size", 4, "ngSwitchCase"], ["class", "form-field full-width", "appearance", "outline", 4, "ngSwitchCase"], ["class", "form-field field-size", "appearance", "outline", 4, "ngSwitchDefault"], [1, "flex-auto", "w-30", "field-size"], [1, "form-field", 3, "ngModel", "required", "ngModelOptions", "ngModelChange"], [2, "margin-top", "20px", "display", "block"], ["class", "form-field", 3, "checked", "ngModel", "required", "ngModelOptions", "ngModelChange", 4, "ngFor", "ngForOf"], [1, "form-field", 3, "checked", "ngModel", "required", "ngModelOptions", "ngModelChange"], [2, "display", "block"], ["aria-label", "Select an option", 1, "form-field", "radio-group", "field-size", 3, "ngModel", "required", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], ["class", "form-field field-size other-option", "appearance", "outline", 4, "ngIf"], [3, "value"], ["appearance", "outline", 1, "form-field", "field-size", "other-option"], ["type", "text", "matInput", "", "placeholder", "", 3, "required", "ngModelOptions", "ngModel", "ngModelChange"], ["appearance", "outline", 1, "flex-auto", "w-30", "field-size"], [3, "ngModel", "ngModelOptions", "required", "ngModelChange"], ["appearance", "outline", 1, "form-field", "full-width"], ["type", "text", "rows", "5", "matInput", "", "placeholder", "Description...", 3, "required", "ngModelOptions", "ngModel", "ngModelChange"], ["appearance", "outline", 1, "form-field", "field-size"], ["matInput", "", "placeholder", "", 3, "type", "required", "ngModelOptions", "ngModel", "ngModelChange"]], template: function SubOnboardingCreateComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵprojectionDef(_c1$1);
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
            } }, directives: [common.NgSwitch, common.NgSwitchCase, common.NgSwitchDefault, checkbox.MatCheckbox, checkbox.MatCheckboxRequiredValidator, forms.NgControlStatus, forms.NgModel, forms.RequiredValidator, common.NgForOf, radio.MatRadioGroup, common.NgIf, radio.MatRadioButton, formField.MatFormField, formField.MatLabel, input.MatInput, forms.DefaultValueAccessor, select.MatSelect, core$1.MatOption], styles: [".container[_ngcontent-%COMP%]{max-width:98%;margin:50px auto auto;padding-bottom:50px}.container[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:space-between}.input-category-name[_ngcontent-%COMP%]{font-size:15px;font-weight:500}.full-width[_ngcontent-%COMP%]{width:100%}.field-item[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;width:100%;flex-wrap:wrap;min-width:250px;position:relative}.field-item[_ngcontent-%COMP%]   .button-action[_ngcontent-%COMP%]{background-color:#6fe8d7;height:100%;margin:auto 15px auto auto;display:flex}.field-item[_ngcontent-%COMP%]   .button-action[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{box-shadow:none;background-color:transparent;color:#fff}.field-action[_ngcontent-%COMP%]{width:10%}.field-size[_ngcontent-%COMP%]   mat-checkbox[_ngcontent-%COMP%]{margin:20px}hr[_ngcontent-%COMP%]{margin:50px 0}  .mat-form-field-appearance-fill .mat-form-field-flex{background-color:#fff}.category-action[_ngcontent-%COMP%]{display:flex;width:100%}.delete-field[_ngcontent-%COMP%]{margin:auto 2%}.radio-group[_ngcontent-%COMP%]   .mat-radio-button[_ngcontent-%COMP%]{margin-right:10px}.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary[_ngcontent-%COMP%]{background-color:#3f51b5;color:#fff;min-height:20px;font-size:10px}.move-icons[_ngcontent-%COMP%]{cursor:move}.category-item[_ngcontent-%COMP%]{display:flex;align-items:baseline;width:100%;border:1px solid #dce4e9;border-radius:8px}  mat-checkbox.form-field .mat-checkbox-checkmark-path{stroke:#000!important}  .readonly.mat-form-field-appearance-outline .mat-form-field-outline{color:transparent!important}.field-content[_ngcontent-%COMP%]{width:100%}.cdk-drag-preview[_ngcontent-%COMP%]{box-sizing:border-box;border-radius:4px;box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.cdk-drag-placeholder[_ngcontent-%COMP%]{opacity:0}.cdk-drag-animating[_ngcontent-%COMP%], .example-list.cdk-drop-list-dragging[_ngcontent-%COMP%]   .category-item[_ngcontent-%COMP%]:not(.cdk-drag-placeholder){transition:transform 250ms cubic-bezier(0,0,.2,1)}  .mat-form-field-appearance-fill.mat-form-field-disabled .mat-form-field-flex{background-color:rgba(0,0,0,.02);margin-bottom:-20px}  .mat-select{padding:0}.add-button-container[_ngcontent-%COMP%]{background:no-repeat padding-box #fff;border:1px dashed #dce4e9;border-radius:8px;margin-top:10px;padding:10px;display:flex;justify-content:center;align-items:center;width:98%;margin-left:0;margin-bottom:22px}.add-button-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{display:flex;align-items:center;background-color:transparent;border:none;cursor:pointer;font:17px/26px Nexa Text;letter-spacing:0;color:#c2c8d5;box-shadow:none}.expand-button[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%]{font-size:48px;margin-top:-20px;margin-right:15px}.transparent-button[_ngcontent-%COMP%]{background-color:transparent!important;box-shadow:none!important;width:40px!important;padding:0!important;margin:0!important;min-width:auto!important}.expand-button[_ngcontent-%COMP%]{color:#5a607f!important;background-color:transparent!important;box-shadow:none!important}.checkbox-title-active[_ngcontent-%COMP%]{font-weight:700}.other-option[_ngcontent-%COMP%]{margin-left:10px}"] });
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

    function OnboardingCreateComponent_div_3_mat_option_10_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "mat-option", 10);
        core.ɵɵtext(1);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var template_r646 = ctx.$implicit;
        core.ɵɵproperty("value", template_r646._id);
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate1("", template_r646.Name, " ");
    } }
    function OnboardingCreateComponent_div_3_Template(rf, ctx) { if (rf & 1) {
        var _r648 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "div", 4);
        core.ɵɵelementStart(1, "h3");
        core.ɵɵtext(2, " Onboarding de votre nouveau collaborateur ");
        core.ɵɵelementEnd();
        core.ɵɵelementStart(3, "p");
        core.ɵɵtext(4, "S\u00E9lectionnez le nom de votre profil afin de pouvoir d\u00E9marrer son onboarding.");
        core.ɵɵelementEnd();
        core.ɵɵelementStart(5, "div", 5);
        core.ɵɵelementStart(6, "mat-form-field", 6);
        core.ɵɵelementStart(7, "mat-label");
        core.ɵɵtext(8, "Profil");
        core.ɵɵelementEnd();
        core.ɵɵelementStart(9, "mat-select", 7);
        core.ɵɵlistener("selectionChange", function OnboardingCreateComponent_div_3_Template_mat_select_selectionChange_9_listener($event) { core.ɵɵrestoreView(_r648); var ctx_r647 = core.ɵɵnextContext(); return ctx_r647.onSelect($event.value); });
        core.ɵɵtemplate(10, OnboardingCreateComponent_div_3_mat_option_10_Template, 2, 2, "mat-option", 8);
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementStart(11, "button", 9);
        core.ɵɵlistener("click", function OnboardingCreateComponent_div_3_Template_button_click_11_listener() { core.ɵɵrestoreView(_r648); var ctx_r649 = core.ɵɵnextContext(); return ctx_r649.onSelectContactTemplate(); });
        core.ɵɵtext(12);
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r643 = core.ɵɵnextContext();
        var tmp_1_0 = null;
        var currVal_1 = ((tmp_1_0 = ctx_r643.form.get("TemplateId")) == null ? null : tmp_1_0.value) == "" ? 0.4 : 1;
        var tmp_2_0 = null;
        var currVal_2 = ((tmp_2_0 = ctx_r643.form.get("TemplateId")) == null ? null : tmp_2_0.value) == "";
        core.ɵɵadvance(10);
        core.ɵɵproperty("ngForOf", ctx_r643.templates);
        core.ɵɵadvance(1);
        core.ɵɵstyleProp("opacity", currVal_1);
        core.ɵɵproperty("disabled", currVal_2);
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate1(" ", ctx_r643.id !== "0" ? "Modifier l\u2019onboarding" : "D\u00E9marrer l\u2019onboarding", " ");
    } }
    function OnboardingCreateComponent_div_4_li_6_mat_icon_4_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "mat-icon");
        core.ɵɵtext(1, "keyboard_arrow_right");
        core.ɵɵelementEnd();
    } }
    function OnboardingCreateComponent_div_4_li_6_Template(rf, ctx) { if (rf & 1) {
        var _r656 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "li", 20);
        core.ɵɵlistener("click", function OnboardingCreateComponent_div_4_li_6_Template_li_click_0_listener() { core.ɵɵrestoreView(_r656); var i_r653 = ctx.index; var ctx_r655 = core.ɵɵnextContext(2); return ctx_r655.onSelectMenu(i_r653); });
        core.ɵɵelementStart(1, "span");
        core.ɵɵelementStart(2, "span", 21);
        core.ɵɵtext(3);
        core.ɵɵelementEnd();
        core.ɵɵtemplate(4, OnboardingCreateComponent_div_4_li_6_mat_icon_4_Template, 2, 0, "mat-icon", 22);
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var cat_r652 = ctx.$implicit;
        var i_r653 = ctx.index;
        var ctx_r650 = core.ɵɵnextContext(2);
        core.ɵɵclassMap(ctx_r650.selectedMenu === i_r653 ? "active" : "");
        core.ɵɵadvance(2);
        core.ɵɵproperty("ngxScrollTo", "#" + cat_r652.name);
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate(cat_r652.name);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", ctx_r650.checkSubForm(cat_r652.forms));
    } }
    function OnboardingCreateComponent_div_4_div_11_div_7_div_1_div_5_div_1_div_1_div_5_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
        var _r674 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "div", 31);
        core.ɵɵelementStart(1, "div", 32);
        core.ɵɵelementStart(2, "div", 33);
        core.ɵɵelementStart(3, "lib-sub-create-onboarding", 34);
        core.ɵɵlistener("onDrop", function OnboardingCreateComponent_div_4_div_11_div_7_div_1_div_5_div_1_div_1_div_5_div_1_div_1_Template_lib_sub_create_onboarding_onDrop_3_listener($event) { core.ɵɵrestoreView(_r674); var ctx_r673 = core.ɵɵnextContext(10); return ctx_r673.drop($event); });
        core.ɵɵelement(4, "div", 35);
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r675 = core.ɵɵnextContext();
        var c2_r670 = ctx_r675.$implicit;
        var l_r671 = ctx_r675.index;
        var ctx_r676 = core.ɵɵnextContext(3);
        var child_r665 = ctx_r676.$implicit;
        var k_r666 = ctx_r676.index;
        core.ɵɵadvance(3);
        core.ɵɵproperty("field", c2_r670)("length", child_r665 == null ? null : child_r665.forms == null ? null : child_r665.forms.length)("i", k_r666)("j", l_r671);
    } }
    function OnboardingCreateComponent_div_4_div_11_div_7_div_1_div_5_div_1_div_1_div_5_div_1_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "div", 39);
        core.ɵɵtemplate(1, OnboardingCreateComponent_div_4_div_11_div_7_div_1_div_5_div_1_div_1_div_5_div_1_div_1_Template, 5, 4, "div", 30);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var c2_r670 = ctx.$implicit;
        var ctx_r669 = core.ɵɵnextContext(9);
        core.ɵɵproperty("id", c2_r670.key);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", c2_r670.expandOnboarding && ctx_r669.onCheckConditionLocationValue(c2_r670.isConditional, c2_r670.conditionLocation, c2_r670.conditionValue));
    } }
    function OnboardingCreateComponent_div_4_div_11_div_7_div_1_div_5_div_1_div_1_div_5_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "div", 37);
        core.ɵɵtemplate(1, OnboardingCreateComponent_div_4_div_11_div_7_div_1_div_5_div_1_div_1_div_5_div_1_Template, 2, 2, "div", 38);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var child_r665 = core.ɵɵnextContext(2).$implicit;
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngForOf", child_r665.forms);
    } }
    function OnboardingCreateComponent_div_4_div_11_div_7_div_1_div_5_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
        var _r679 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "div", 31);
        core.ɵɵelementStart(1, "div", 32);
        core.ɵɵelementStart(2, "div", 33);
        core.ɵɵelementStart(3, "lib-sub-create-onboarding", 34);
        core.ɵɵlistener("onDrop", function OnboardingCreateComponent_div_4_div_11_div_7_div_1_div_5_div_1_div_1_Template_lib_sub_create_onboarding_onDrop_3_listener($event) { core.ɵɵrestoreView(_r679); var ctx_r678 = core.ɵɵnextContext(7); return ctx_r678.drop($event); });
        core.ɵɵelementStart(4, "div", 35);
        core.ɵɵtemplate(5, OnboardingCreateComponent_div_4_div_11_div_7_div_1_div_5_div_1_div_1_div_5_Template, 2, 1, "div", 36);
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r680 = core.ɵɵnextContext();
        var child_r665 = ctx_r680.$implicit;
        var k_r666 = ctx_r680.index;
        var ctx_r681 = core.ɵɵnextContext(3);
        var field_r660 = ctx_r681.$implicit;
        var j_r661 = ctx_r681.index;
        core.ɵɵadvance(3);
        core.ɵɵproperty("field", child_r665)("length", field_r660 == null ? null : field_r660.forms == null ? null : field_r660.forms.length)("i", j_r661)("j", k_r666);
        core.ɵɵadvance(2);
        core.ɵɵproperty("ngIf", child_r665.forms);
    } }
    function OnboardingCreateComponent_div_4_div_11_div_7_div_1_div_5_div_1_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "div", 39);
        core.ɵɵtemplate(1, OnboardingCreateComponent_div_4_div_11_div_7_div_1_div_5_div_1_div_1_Template, 6, 5, "div", 30);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var child_r665 = ctx.$implicit;
        var ctx_r664 = core.ɵɵnextContext(6);
        core.ɵɵproperty("id", child_r665.key);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", child_r665.expandOnboarding && ctx_r664.onCheckConditionLocationValue(child_r665.isConditional, child_r665.conditionLocation, child_r665.conditionValue));
    } }
    function OnboardingCreateComponent_div_4_div_11_div_7_div_1_div_5_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "div", 37);
        core.ɵɵtemplate(1, OnboardingCreateComponent_div_4_div_11_div_7_div_1_div_5_div_1_Template, 2, 2, "div", 38);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var field_r660 = core.ɵɵnextContext(2).$implicit;
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngForOf", field_r660.forms);
    } }
    function OnboardingCreateComponent_div_4_div_11_div_7_div_1_Template(rf, ctx) { if (rf & 1) {
        var _r684 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "div", 31);
        core.ɵɵelementStart(1, "div", 32);
        core.ɵɵelementStart(2, "div", 33);
        core.ɵɵelementStart(3, "lib-sub-create-onboarding", 34);
        core.ɵɵlistener("onDrop", function OnboardingCreateComponent_div_4_div_11_div_7_div_1_Template_lib_sub_create_onboarding_onDrop_3_listener($event) { core.ɵɵrestoreView(_r684); var ctx_r683 = core.ɵɵnextContext(4); return ctx_r683.drop($event); });
        core.ɵɵelementStart(4, "div", 35);
        core.ɵɵtemplate(5, OnboardingCreateComponent_div_4_div_11_div_7_div_1_div_5_Template, 2, 1, "div", 36);
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r685 = core.ɵɵnextContext();
        var field_r660 = ctx_r685.$implicit;
        var j_r661 = ctx_r685.index;
        var ctx_r686 = core.ɵɵnextContext();
        var category_r657 = ctx_r686.$implicit;
        var i_r658 = ctx_r686.index;
        core.ɵɵadvance(3);
        core.ɵɵproperty("field", field_r660)("length", category_r657 == null ? null : category_r657.forms == null ? null : category_r657.forms.length)("i", i_r658)("j", j_r661);
        core.ɵɵadvance(2);
        core.ɵɵproperty("ngIf", field_r660.forms);
    } }
    function OnboardingCreateComponent_div_4_div_11_div_7_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "div", 29);
        core.ɵɵtemplate(1, OnboardingCreateComponent_div_4_div_11_div_7_div_1_Template, 6, 5, "div", 30);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var field_r660 = ctx.$implicit;
        var ctx_r659 = core.ɵɵnextContext(3);
        core.ɵɵproperty("id", field_r660.key);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", field_r660.expandOnboarding && ctx_r659.onCheckConditionLocationValue(field_r660.isConditional, field_r660.conditionLocation, field_r660.conditionValue));
    } }
    function OnboardingCreateComponent_div_4_div_11_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "div", 23);
        core.ɵɵelementStart(1, "div", 24);
        core.ɵɵelementStart(2, "div", 25);
        core.ɵɵelementStart(3, "h4", 26);
        core.ɵɵtext(4);
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementStart(5, "div", 27);
        core.ɵɵelementContainerStart(6);
        core.ɵɵtemplate(7, OnboardingCreateComponent_div_4_div_11_div_7_Template, 2, 2, "div", 28);
        core.ɵɵelementContainerEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var category_r657 = ctx.$implicit;
        core.ɵɵproperty("id", category_r657.name);
        core.ɵɵadvance(4);
        core.ɵɵtextInterpolate(category_r657.name);
        core.ɵɵadvance(3);
        core.ɵɵproperty("ngForOf", category_r657.forms);
    } }
    function OnboardingCreateComponent_div_4_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "div", 11);
        core.ɵɵelementStart(1, "div", 12);
        core.ɵɵelementStart(2, "div", 13);
        core.ɵɵelementStart(3, "h3", 14);
        core.ɵɵtext(4);
        core.ɵɵelementEnd();
        core.ɵɵelementStart(5, "ol");
        core.ɵɵtemplate(6, OnboardingCreateComponent_div_4_li_6_Template, 5, 5, "li", 15);
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementStart(7, "button", 16);
        core.ɵɵtext(8, " Soumettre ma fiche de poste ");
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementStart(9, "div", 17);
        core.ɵɵelementStart(10, "div", 18);
        core.ɵɵtemplate(11, OnboardingCreateComponent_div_4_div_11_Template, 8, 3, "div", 19);
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r644 = core.ɵɵnextContext();
        core.ɵɵadvance(4);
        core.ɵɵtextInterpolate1(" ", ctx_r644.currentTemplate == null ? null : ctx_r644.currentTemplate.Name, " ");
        core.ɵɵadvance(2);
        core.ɵɵproperty("ngForOf", ctx_r644.categories);
        core.ɵɵadvance(5);
        core.ɵɵproperty("ngForOf", ctx_r644.categories);
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
                TemplateId: [0, forms.Validators.required]
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
            this.selectedMenu = i;
        };
        OnboardingCreateComponent.ɵfac = function OnboardingCreateComponent_Factory(t) { return new (t || OnboardingCreateComponent)(core.ɵɵdirectiveInject(forms.FormBuilder), core.ɵɵdirectiveInject(OnboardingService), core.ɵɵdirectiveInject(router.ActivatedRoute), core.ɵɵdirectiveInject(router.Router), core.ɵɵdirectiveInject(dialog.MatDialog)); };
        OnboardingCreateComponent.ɵcmp = core.ɵɵdefineComponent({ type: OnboardingCreateComponent, selectors: [["create-onboarding"]], decls: 5, vars: 3, consts: [[1, "content"], [3, "formGroup", "submit"], ["class", "select-contact", 4, "ngIf"], ["class", "category", 4, "ngIf"], [1, "select-contact"], [1, "select-template"], ["appearance", "outline", 1, "full-width"], ["formControlName", "TemplateId", "required", "", 3, "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], ["mat-raised-button", "", "color", "primary", 3, "disabled", "click"], [3, "value"], [1, "category"], [1, "side-bar"], [1, "summary"], [1, "template-title"], ["class", "li-title", 3, "class", "click", 4, "ngFor", "ngForOf"], ["mat-button", "", "type", "submit", 1, "register-button"], [1, "fields"], [1, "example-list", "mt-20"], ["class", "category-item", 3, "id", 4, "ngFor", "ngForOf"], [1, "li-title", 3, "click"], [3, "ngxScrollTo"], [4, "ngIf"], [1, "category-item", 3, "id"], [1, "field-content"], [1, "field-item"], [1, "category-name"], [1, "category-container"], ["class", "field-category", 3, "id", 4, "ngFor", "ngForOf"], [1, "field-category", 3, "id"], ["class", "inner-loop", 4, "ngIf"], [1, "inner-loop"], [1, "fields-content"], [1, "fields-container"], [3, "field", "length", "i", "j", "onDrop"], [1, "child"], ["class", "inner-child", 4, "ngIf"], [1, "inner-child"], ["class", "inner-child-content", 3, "id", 4, "ngFor", "ngForOf"], [1, "inner-child-content", 3, "id"]], template: function OnboardingCreateComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵelementStart(0, "main");
                core.ɵɵelementStart(1, "div", 0);
                core.ɵɵelementStart(2, "form", 1);
                core.ɵɵlistener("submit", function OnboardingCreateComponent_Template_form_submit_2_listener() { return ctx.onSubmit(); });
                core.ɵɵtemplate(3, OnboardingCreateComponent_div_3_Template, 13, 5, "div", 2);
                core.ɵɵtemplate(4, OnboardingCreateComponent_div_4_Template, 12, 3, "div", 3);
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
            } if (rf & 2) {
                core.ɵɵadvance(2);
                core.ɵɵproperty("formGroup", ctx.form);
                core.ɵɵadvance(1);
                core.ɵɵproperty("ngIf", !ctx.isSelected);
                core.ɵɵadvance(1);
                core.ɵɵproperty("ngIf", ctx.isSelected);
            } }, directives: [forms.ɵangular_packages_forms_forms_y, forms.NgControlStatusGroup, forms.FormGroupDirective, common.NgIf, formField.MatFormField, formField.MatLabel, select.MatSelect, forms.NgControlStatus, forms.FormControlName, forms.RequiredValidator, common.NgForOf, button.MatButton, core$1.MatOption, ngxScrollTo.ScrollToDirective, icon.MatIcon, SubOnboardingCreateComponent], styles: ["main[_ngcontent-%COMP%]{background:no-repeat padding-box #f4f7f9;height:100vh;width:100%;display:flex;flex-direction:column;align-items:center}main[_ngcontent-%COMP%]   .disabled[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{background-color:transparent!important}main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{width:99%;height:100%;padding-left:1%}main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font:bold 32px/30px Nexa Text;letter-spacing:0;color:#171f26;padding-top:20px}main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font:20px/26px Nexa Text;letter-spacing:0;color:#171f26}main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   p.sub-title[_ngcontent-%COMP%]{max-width:400px}main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .select-contact[_ngcontent-%COMP%]{max-width:70%;margin:5% auto auto;background:no-repeat padding-box #fff;border:1px solid #dce4e9;border-radius:6px;padding:5%}main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .select-contact[_ngcontent-%COMP%]   .select-template[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;justify-content:space-between;margin-top:50px}main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .select-contact[_ngcontent-%COMP%]   .select-template[_ngcontent-%COMP%]   .full-width[_ngcontent-%COMP%]{width:40%}main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .select-contact[_ngcontent-%COMP%]   .select-template[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{float:right;text-align:center;border:1px solid #543cb6;border-radius:7px;padding:1em 2em;display:flex;align-items:center;background-color:transparent;font:bold 15px/17px Nexa;letter-spacing:0;color:#543cb6;-ms-grid-row-align:center;align-self:center;width:220px}main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .category[_ngcontent-%COMP%]   .onboarding-mat-stepper[_ngcontent-%COMP%]   mat-horizontal-stepper[_ngcontent-%COMP%]   .next-step[_ngcontent-%COMP%]{float:right}main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{display:flex;height:100%;width:100%}main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .select-contact[_ngcontent-%COMP%]{max-width:70%;margin:5% auto auto;background:no-repeat padding-box #fff;border:1px solid #dce4e9;border-radius:6px;padding:5%}main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .select-contact[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{float:right;text-align:center;border:1px solid #543cb6;border-radius:7px;padding:.7em 2em .5em;display:flex;align-items:center;background-color:transparent;font:bold 15px/17px Nexa;letter-spacing:0;color:#543cb6;align-self:flex-end}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]{width:786px;background:no-repeat padding-box #fff;border:1px solid #dce4e9;border-radius:6px;opacity:1;margin:auto;padding:0 25px;-ms-grid-row-align:center;align-self:center}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{text-align:center;font:900 32px/48px Nexa;letter-spacing:0;color:#171f26}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font:18px/24px Nexa Text;letter-spacing:0;color:#171f26}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .profil-name-content[_ngcontent-%COMP%]{display:flex;align-items:center;position:relative}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .profil-name-content[_ngcontent-%COMP%]   .add-picto[_ngcontent-%COMP%]{margin-right:15px;min-width:50px;width:30px;padding:9px 12px}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .profil-name-content[_ngcontent-%COMP%]   .add-picto[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin-right:10px}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .profil-name-content[_ngcontent-%COMP%]   .list-picto[_ngcontent-%COMP%]{position:absolute;height:200px;width:100%;background:no-repeat padding-box #fff;border:1px solid #171f26;border-radius:8px;top:100%;z-index:1}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .profil-name-content[_ngcontent-%COMP%]   .list-picto[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin:15px;border:none;font-size:40px}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .profil-name-content[_ngcontent-%COMP%]   .list-picto[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]:hover{color:#830b6b!important;cursor:pointer}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .box-title-content[_ngcontent-%COMP%]{width:100%;margin:25px auto}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font:900 32px/38px Nexa;letter-spacing:0;color:#171f26}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font:15px/26px Nexa Text;letter-spacing:0;color:#171f26;text-align:center}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   .link-create-profil[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:center}main[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{text-align:center;border:1px solid #543cb6;border-radius:7px;padding:.7em 2em .5em;display:flex;align-items:center;background-color:transparent;font:bold 15px/17px Nexa;letter-spacing:0;color:#543cb6}main[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:space-between}.expand-button[_ngcontent-%COMP%]{color:#5a607f!important;background-color:transparent!important;box-shadow:none!important}.category-name[_ngcontent-%COMP%]{text-align:left;font:bold 22px/48px Nexa Text;letter-spacing:0;color:#171f26;padding-left:15px}.full-width[_ngcontent-%COMP%]{width:100%}.field-action[_ngcontent-%COMP%]{width:10%}.field-size[_ngcontent-%COMP%]{width:90%;margin:auto 2% auto auto}  .mat-form-field-appearance-fill .mat-form-field-flex{background-color:#fff}  .mat-form-field-appearance-outline .mat-form-field-infix{padding:.5em 0}  .mat-select{padding:.5em 0}  .mat-form-field-appearance-fill .mat-form-field-underline::before{background-color:transparent}  .mat-form-field-wrapper{padding-bottom:0!important}  mat-checkbox.form-field .mat-checkbox-checkmark-path{stroke:#000!important}[_nghost-%COMP%]     .mat-checkbox-checked.mat-accent .mat-checkbox-background, [_nghost-%COMP%]     .mat-checkbox-indeterminate.mat-accent .mat-checkbox-background{background-color:transparent}.category-action[_ngcontent-%COMP%]{display:flex;width:100%}.delete-field[_ngcontent-%COMP%]{margin:auto 2%}.radio-group[_ngcontent-%COMP%]   .mat-radio-button[_ngcontent-%COMP%]{margin-right:10px}.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary[_ngcontent-%COMP%]{background-color:#3f51b5;color:#fff;min-height:20px;font-size:10px}.move-icons[_ngcontent-%COMP%]{cursor:move}.category-item[_ngcontent-%COMP%], .cdk-drag-placeholder[_ngcontent-%COMP%]{display:flex;align-items:baseline;width:100%;border:1px solid #dce4e9;border-radius:8px;background-color:#fff;margin-top:10px;min-height:60px}.category-item[_ngcontent-%COMP%]   .left-action[_ngcontent-%COMP%], .cdk-drag-placeholder[_ngcontent-%COMP%]   .left-action[_ngcontent-%COMP%]{height:auto;background-color:#49a094;padding-top:7px;width:40px;-ms-grid-row-align:stretch;align-self:stretch;border-top-left-radius:8px;border-bottom-left-radius:8px}.category-item[_ngcontent-%COMP%]   .left-action[_ngcontent-%COMP%]   .transparent-button[_ngcontent-%COMP%], .cdk-drag-placeholder[_ngcontent-%COMP%]   .left-action[_ngcontent-%COMP%]   .transparent-button[_ngcontent-%COMP%]{background-color:transparent;box-shadow:none;width:40px;padding:0;margin:0;min-width:auto;color:#fff}.category-item[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%], .cdk-drag-placeholder[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%]{width:100%;-ms-grid-row-align:center;align-self:center}.category-item[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%], .cdk-drag-placeholder[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;border:transparent!important}.category-item[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]   .mat-form-field-wrapper[_ngcontent-%COMP%]   .mat-form-field-flex[_ngcontent-%COMP%]   .mat-form-field-outline[_ngcontent-%COMP%], .category-item[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%]   .mat-form-field-outline[_ngcontent-%COMP%], .cdk-drag-placeholder[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]   .mat-form-field-wrapper[_ngcontent-%COMP%]   .mat-form-field-flex[_ngcontent-%COMP%]   .mat-form-field-outline[_ngcontent-%COMP%], .cdk-drag-placeholder[_ngcontent-%COMP%]   .field-content[_ngcontent-%COMP%]   .mat-form-field-outline[_ngcontent-%COMP%]{color:transparent!important}.category-item[_ngcontent-%COMP%]   .category-container[_ngcontent-%COMP%], .cdk-drag-placeholder[_ngcontent-%COMP%]   .category-container[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;justify-content:flex-start;align-items:flex-end}.cdk-drag-preview[_ngcontent-%COMP%]{box-sizing:border-box;border-radius:4px;opacity:1}.cdk-drag-preview[_ngcontent-%COMP%]   .expand-button[_ngcontent-%COMP%]{color:#5a607f!important;background-color:transparent!important;box-shadow:none!important;margin-right:28px!important}.cdk-drag-placeholder[_ngcontent-%COMP%]{opacity:0}.cdk-drag-animating[_ngcontent-%COMP%], .example-list.cdk-drop-list-dragging[_ngcontent-%COMP%]   .category-item[_ngcontent-%COMP%]:not(.cdk-drag-placeholder){transition:transform 250ms cubic-bezier(0,0,.2,1)}.child[_ngcontent-%COMP%]{margin-left:0}.child[_ngcontent-%COMP%]   .inner-child[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap}.category[_ngcontent-%COMP%]{display:flex;flex-direction:row;width:100vw}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]{width:250px;background-color:#fff;margin:10px 20px;border-radius:5px;border:1px solid #dbcbcb96}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:15px;border-bottom:1px solid #dbcbcb96;margin:10px;padding-bottom:5px;font-family:\"Nexa Text\";display:flex;flex-direction:column;justify-content:space-between;align-items:flex-start}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-weight:600}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin-left:15px;cursor:pointer}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   h3.template-title[_ngcontent-%COMP%]{font:900 24px/36px Nexa Text;letter-spacing:0;color:#171f26}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]{font-weight:600;margin-left:-27px;font-size:15px;list-style:none}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:5px;margin:5px auto;cursor:pointer;text-align:left;font:12px/19px Nexa Text;letter-spacing:0;color:#535760}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]{padding-left:0;margin-left:0}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.li-title[_ngcontent-%COMP%]{font-size:14px;font-weight:600;margin-right:10px}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.li-title[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:140px;outline:0;border:1px dashed grey}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.li-title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:inline-flex;align-items:center;width:100%}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.li-title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin-left:10px}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.li-title.active[_ngcontent-%COMP%], .category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.li-title[_ngcontent-%COMP%]:hover{background:no-repeat padding-box #e5e8ee;border-radius:5px}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.sub-title[_ngcontent-%COMP%]{list-style:none;padding-left:20px}.category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.sub-title.active[_ngcontent-%COMP%], .category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.sub-title.active[_ngcontent-%COMP%]::marker, .category[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.sub-title[_ngcontent-%COMP%]:hover{font-weight:600;background:no-repeat padding-box #e5e8ee;border-radius:5px}.category[_ngcontent-%COMP%]   .fields[_ngcontent-%COMP%]{width:90%;max-height:100vh;overflow:auto;margin-right:.5%;overflow-x:hidden}.category[_ngcontent-%COMP%]   .disabled[_ngcontent-%COMP%]{background-color:#f4f7f9!important}.category[_ngcontent-%COMP%]   .expand-button[_ngcontent-%COMP%]{color:#5a607f!important;background-color:transparent!important;box-shadow:none!important;margin-right:28px!important}.category[_ngcontent-%COMP%]   .expand-button[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%]{font-size:40px}.category[_ngcontent-%COMP%]   .transparent-button[_ngcontent-%COMP%]{background-color:transparent;box-shadow:none;width:40px;padding:0;margin:0;margin-left:0!important;min-width:auto;color:#fff}.add-button-sub-category[_ngcontent-%COMP%]{width:95.5%!important;margin-bottom:22px;margin-left:22px}.add-button-container[_ngcontent-%COMP%]{background:no-repeat padding-box #fff;border:1px dashed #dce4e9;border-radius:8px;margin-top:10px;padding:10px;display:flex;justify-content:center;align-items:center;width:98.5%;margin-bottom:22px}.add-button-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{display:flex;align-items:center;background-color:transparent;border:none;cursor:pointer;font:17px/26px Nexa Text;letter-spacing:0;color:#c2c8d5;box-shadow:none}.add-category[_ngcontent-%COMP%]{border:1px dashed #c2c8d5;border-radius:5px;margin-left:10px;margin-bottom:10px;font:bold 12px/19px Nexa Text;letter-spacing:0;color:#c2c8d5;width:92%}.inner-loop[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]{display:flex;height:100%;margin:auto auto 20px;width:100%}.inner-loop[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]   .button-action[_ngcontent-%COMP%]{background-color:#6fe8d7;-ms-grid-row-align:stretch;align-self:stretch;margin-top:0;margin-left:20px;border-bottom-left-radius:8px;border-top-left-radius:8px}.inner-loop[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]   .button-action[_ngcontent-%COMP%]   .transparent-button[_ngcontent-%COMP%]{background-color:transparent;box-shadow:none;width:40px;padding:0;margin:0;min-width:auto;color:#fff}.inner-loop[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]   .child-2-background[_ngcontent-%COMP%]{background-color:#cffaf4!important}.inner-loop[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]   .child-3-background[_ngcontent-%COMP%]{background-color:#e5e8ee!important}.inner-loop[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]   .fields-container[_ngcontent-%COMP%]{width:100%;padding:10px}.inner-loop[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]   .fields-container[_ngcontent-%COMP%]   lib-sub-category[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;width:100%}.inner-loop[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]   .fields-container[_ngcontent-%COMP%]   lib-sub-category[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]   .button-action[_ngcontent-%COMP%]{background-color:#6fe8d7;height:100%;margin:auto 15px auto auto;display:flex}.inner-loop[_ngcontent-%COMP%]   .fields-content[_ngcontent-%COMP%]   .fields-container[_ngcontent-%COMP%]   lib-sub-category[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]   .button-action[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{box-shadow:none;background-color:transparent;color:#fff}.side-bar[_ngcontent-%COMP%]{display:flex;flex-direction:column}.register-button[_ngcontent-%COMP%]{background:no-repeat padding-box #171f26!important;border:2px solid #192128!important;border-radius:8px;color:#fff!important;width:85%;margin-left:22px!important;border:none!important}"] });
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
        OnboardingListComponent.ɵfac = function OnboardingListComponent_Factory(t) { return new (t || OnboardingListComponent)(core.ɵɵdirectiveInject(OnboardingService)); };
        OnboardingListComponent.ɵcmp = core.ɵɵdefineComponent({ type: OnboardingListComponent, selectors: [["lib-onboarding-list"]], decls: 1, vars: 0, template: function OnboardingListComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵtext(0, " List onboarding");
            } }, styles: [""] });
        return OnboardingListComponent;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(OnboardingListComponent, [{
            type: core.Component,
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
                    tooltip.MatTooltipModule
                ],
                http.HttpClientModule,
                router.RouterModule] });
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
            tooltip.MatTooltipModule], exports: [OnboardingComponent,
            http.HttpClientModule,
            TemplateProfileCreateComponent,
            TemplateProfileListComponent,
            OnboardingListComponent,
            OnboardingCreateComponent,
            router.RouterModule] }); })();
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
                        tooltip.MatTooltipModule
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
