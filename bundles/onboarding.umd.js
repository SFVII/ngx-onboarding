(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common/http'), require('@angular/core'), require('rxjs'), require('@angular/router'), require('@angular/forms'), require('@angular/cdk/keycodes'), require('@angular/material/form-field'), require('@angular/material/input'), require('@angular/common'), require('@angular/material/select'), require('@angular/material/checkbox'), require('@angular/material/button'), require('@angular/material/core'), require('@angular/material/icon'), require('@angular/material/chips'), require('@angular/material/paginator'), require('@angular/material/sort'), require('@angular/material/table'), require('@angular/platform-browser'), require('@angular/platform-browser/animations'), require('@angular/material/radio'), require('@angular/material/grid-list'), require('@angular/cdk/table')) :
    typeof define === 'function' && define.amd ? define('onboarding', ['exports', '@angular/common/http', '@angular/core', 'rxjs', '@angular/router', '@angular/forms', '@angular/cdk/keycodes', '@angular/material/form-field', '@angular/material/input', '@angular/common', '@angular/material/select', '@angular/material/checkbox', '@angular/material/button', '@angular/material/core', '@angular/material/icon', '@angular/material/chips', '@angular/material/paginator', '@angular/material/sort', '@angular/material/table', '@angular/platform-browser', '@angular/platform-browser/animations', '@angular/material/radio', '@angular/material/grid-list', '@angular/cdk/table'], factory) :
    (global = global || self, factory(global.onboarding = {}, global.ng.common.http, global.ng.core, global.rxjs, global.ng.router, global.ng.forms, global.ng.cdk.keycodes, global.ng.material.formField, global.ng.material.input, global.ng.common, global.ng.material.select, global.ng.material.checkbox, global.ng.material.button, global.ng.material.core, global.ng.material.icon, global.ng.material.chips, global.ng.material.paginator, global.ng.material.sort, global.ng.material.table, global.ng.platformBrowser, global.ng.platformBrowser.animations, global.ng.material.radio, global.ng.material.gridList, global.ng.cdk.table));
}(this, (function (exports, http, core, rxjs, router, forms, keycodes, formField, input, common, select, checkbox, button, core$1, icon, chips, paginator, sort, table, platformBrowser, animations, radio, gridList, table$1) { 'use strict';

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
        function OnboardingComponent(service) {
            this.service = service;
        }
        OnboardingComponent.prototype.ngOnInit = function () {
        };
        OnboardingComponent.ɵfac = function OnboardingComponent_Factory(t) { return new (t || OnboardingComponent)(core.ɵɵdirectiveInject(OnboardingService)); };
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
        }], function () { return [{ type: OnboardingService }]; }, null); })();

    function CreateProfileTemplateComponent_mat_error_8_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "mat-error");
        core.ɵɵtext(1, " Profil est ");
        core.ɵɵelementStart(2, "strong");
        core.ɵɵtext(3, "requis");
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } }
    function CreateProfileTemplateComponent_mat_option_17_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "mat-option", 15);
        core.ɵɵtext(1);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var tag_r57 = ctx.$implicit;
        core.ɵɵproperty("value", tag_r57);
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate(tag_r57);
    } }
    function CreateProfileTemplateComponent_div_24_mat_error_6_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "mat-error");
        core.ɵɵtext(1, " Cat\u00E9gorie est ");
        core.ɵɵelementStart(2, "strong");
        core.ɵɵtext(3, "requis");
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } }
    function CreateProfileTemplateComponent_div_24_div_10_mat_error_5_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "mat-error");
        core.ɵɵtext(1, " Label est ");
        core.ɵɵelementStart(2, "strong");
        core.ɵɵtext(3, "requis");
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } }
    var _c0 = function () { return { standalone: true }; };
    function CreateProfileTemplateComponent_div_24_div_10_mat_form_field_18_Template(rf, ctx) { if (rf & 1) {
        var _r70 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "mat-form-field", 22);
        core.ɵɵelementStart(1, "mat-label");
        core.ɵɵtext(2, "Valeur");
        core.ɵɵelementEnd();
        core.ɵɵelementStart(3, "input", 34);
        core.ɵɵlistener("ngModelChange", function CreateProfileTemplateComponent_div_24_div_10_mat_form_field_18_Template_input_ngModelChange_3_listener($event) { core.ɵɵrestoreView(_r70); var field_r62 = core.ɵɵnextContext().$implicit; return field_r62.value = $event; });
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var field_r62 = core.ɵɵnextContext().$implicit;
        core.ɵɵadvance(3);
        core.ɵɵproperty("ngModelOptions", core.ɵɵpureFunction0(2, _c0))("ngModel", field_r62.value);
    } }
    function CreateProfileTemplateComponent_div_24_div_10_div_19_Template(rf, ctx) { if (rf & 1) {
        var _r74 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "div", 35);
        core.ɵɵelementStart(1, "mat-checkbox", 36);
        core.ɵɵlistener("ngModelChange", function CreateProfileTemplateComponent_div_24_div_10_div_19_Template_mat_checkbox_ngModelChange_1_listener($event) { core.ɵɵrestoreView(_r74); var field_r62 = core.ɵɵnextContext().$implicit; return field_r62.value = $event; });
        core.ɵɵtext(2, "Valeur");
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var field_r62 = core.ɵɵnextContext().$implicit;
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngModel", field_r62.value)("ngModelOptions", core.ɵɵpureFunction0(2, _c0));
    } }
    function CreateProfileTemplateComponent_div_24_div_10_mat_form_field_20_mat_chip_5_Template(rf, ctx) { if (rf & 1) {
        var _r82 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "mat-chip", 42);
        core.ɵɵlistener("removed", function CreateProfileTemplateComponent_div_24_div_10_mat_form_field_20_mat_chip_5_Template_mat_chip_removed_0_listener() { core.ɵɵrestoreView(_r82); var option_r79 = ctx.$implicit; var j_r63 = core.ɵɵnextContext(2).index; var i_r59 = core.ɵɵnextContext().index; var ctx_r80 = core.ɵɵnextContext(); return ctx_r80.removeKeyword(option_r79, i_r59, j_r63); });
        core.ɵɵtext(1);
        core.ɵɵelementStart(2, "mat-icon", 43);
        core.ɵɵtext(3, "cancel");
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var option_r79 = ctx.$implicit;
        core.ɵɵproperty("selected", option_r79)("value", option_r79)("removable", true);
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate1(" ", option_r79, " ");
    } }
    function CreateProfileTemplateComponent_div_24_div_10_mat_form_field_20_Template(rf, ctx) { if (rf & 1) {
        var _r85 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "mat-form-field", 35);
        core.ɵɵelementStart(1, "mat-label");
        core.ɵɵtext(2, " Valeur ");
        core.ɵɵelementEnd();
        core.ɵɵelementStart(3, "mat-chip-list", 37, 38);
        core.ɵɵtemplate(5, CreateProfileTemplateComponent_div_24_div_10_mat_form_field_20_mat_chip_5_Template, 4, 4, "mat-chip", 39);
        core.ɵɵelementStart(6, "input", 40, 41);
        core.ɵɵlistener("matChipInputTokenEnd", function CreateProfileTemplateComponent_div_24_div_10_mat_form_field_20_Template_input_matChipInputTokenEnd_6_listener($event) { core.ɵɵrestoreView(_r85); var j_r63 = core.ɵɵnextContext().index; var i_r59 = core.ɵɵnextContext().index; var ctx_r84 = core.ɵɵnextContext(); return ctx_r84.addKeywordFromInput($event, i_r59, j_r63); })("keyup", function CreateProfileTemplateComponent_div_24_div_10_mat_form_field_20_Template_input_keyup_6_listener($event) { core.ɵɵrestoreView(_r85); var j_r63 = core.ɵɵnextContext().index; var i_r59 = core.ɵɵnextContext().index; var ctx_r88 = core.ɵɵnextContext(); return ctx_r88.onKeyPress($event, i_r59, j_r63); });
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var _r76 = core.ɵɵreference(4);
        var field_r62 = core.ɵɵnextContext().$implicit;
        var ctx_r67 = core.ɵɵnextContext(2);
        core.ɵɵadvance(5);
        core.ɵɵproperty("ngForOf", field_r62.value);
        core.ɵɵadvance(1);
        core.ɵɵproperty("matChipInputFor", _r76)("matChipInputAddOnBlur", true)("matChipInputSeparatorKeyCodes", ctx_r67.separatorKeysCodes);
    } }
    function CreateProfileTemplateComponent_div_24_div_10_Template(rf, ctx) { if (rf & 1) {
        var _r93 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "div", 17);
        core.ɵɵelementStart(1, "mat-form-field", 22);
        core.ɵɵelementStart(2, "mat-label");
        core.ɵɵtext(3, "Label");
        core.ɵɵelementEnd();
        core.ɵɵelementStart(4, "input", 23);
        core.ɵɵlistener("ngModelChange", function CreateProfileTemplateComponent_div_24_div_10_Template_input_ngModelChange_4_listener($event) { core.ɵɵrestoreView(_r93); var field_r62 = ctx.$implicit; return field_r62.label = $event; });
        core.ɵɵelementEnd();
        core.ɵɵtemplate(5, CreateProfileTemplateComponent_div_24_div_10_mat_error_5_Template, 4, 0, "mat-error", 4);
        core.ɵɵelementEnd();
        core.ɵɵelementStart(6, "mat-form-field", 22);
        core.ɵɵelementStart(7, "mat-label");
        core.ɵɵtext(8, "Type");
        core.ɵɵelementEnd();
        core.ɵɵelementStart(9, "mat-select", 24);
        core.ɵɵlistener("ngModelChange", function CreateProfileTemplateComponent_div_24_div_10_Template_mat_select_ngModelChange_9_listener($event) { core.ɵɵrestoreView(_r93); var field_r62 = ctx.$implicit; return field_r62.type = $event; })("ngModelChange", function CreateProfileTemplateComponent_div_24_div_10_Template_mat_select_ngModelChange_9_listener() { core.ɵɵrestoreView(_r93); var field_r62 = ctx.$implicit; var j_r63 = ctx.index; var i_r59 = core.ɵɵnextContext().index; var ctx_r95 = core.ɵɵnextContext(); return ctx_r95.onChangeType(field_r62.type, i_r59, j_r63); });
        core.ɵɵelementStart(10, "mat-option", 25);
        core.ɵɵtext(11, "Text");
        core.ɵɵelementEnd();
        core.ɵɵelementStart(12, "mat-option", 26);
        core.ɵɵtext(13, "Radio");
        core.ɵɵelementEnd();
        core.ɵɵelementStart(14, "mat-option", 27);
        core.ɵɵtext(15, "Selecteur");
        core.ɵɵelementEnd();
        core.ɵɵelementStart(16, "mat-option", 28);
        core.ɵɵtext(17, "Checkbox");
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵtemplate(18, CreateProfileTemplateComponent_div_24_div_10_mat_form_field_18_Template, 4, 3, "mat-form-field", 29);
        core.ɵɵtemplate(19, CreateProfileTemplateComponent_div_24_div_10_div_19_Template, 3, 3, "div", 30);
        core.ɵɵtemplate(20, CreateProfileTemplateComponent_div_24_div_10_mat_form_field_20_Template, 8, 4, "mat-form-field", 30);
        core.ɵɵelementStart(21, "button", 31);
        core.ɵɵlistener("click", function CreateProfileTemplateComponent_div_24_div_10_Template_button_click_21_listener($event) { core.ɵɵrestoreView(_r93); var i_r59 = core.ɵɵnextContext().index; var ctx_r97 = core.ɵɵnextContext(); return ctx_r97.onAddNewField($event, i_r59); });
        core.ɵɵelementStart(22, "mat-icon");
        core.ɵɵtext(23, "plus_one");
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementStart(24, "button", 32);
        core.ɵɵlistener("click", function CreateProfileTemplateComponent_div_24_div_10_Template_button_click_24_listener($event) { core.ɵɵrestoreView(_r93); var j_r63 = ctx.index; var i_r59 = core.ɵɵnextContext().index; var ctx_r99 = core.ɵɵnextContext(); return ctx_r99.onRemoveField($event, i_r59, j_r63); });
        core.ɵɵelementStart(25, "mat-icon");
        core.ɵɵtext(26, "delete");
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementStart(27, "mat-checkbox", 33);
        core.ɵɵlistener("ngModelChange", function CreateProfileTemplateComponent_div_24_div_10_Template_mat_checkbox_ngModelChange_27_listener($event) { core.ɵɵrestoreView(_r93); var field_r62 = ctx.$implicit; return field_r62.isMandatory = $event; });
        core.ɵɵtext(28, "obligatoire");
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var field_r62 = ctx.$implicit;
        var category_r58 = core.ɵɵnextContext().$implicit;
        core.ɵɵadvance(4);
        core.ɵɵproperty("ngModelOptions", core.ɵɵpureFunction0(11, _c0))("ngModel", field_r62.label);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", field_r62.label === "");
        core.ɵɵadvance(4);
        core.ɵɵproperty("ngModel", field_r62.type)("ngModelOptions", core.ɵɵpureFunction0(12, _c0));
        core.ɵɵadvance(9);
        core.ɵɵproperty("ngIf", field_r62.type === "text" || field_r62.type === "");
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", field_r62.type === "checkbox");
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", field_r62.type == "radio" || field_r62.type == "select");
        core.ɵɵadvance(4);
        core.ɵɵproperty("disabled", category_r58.forms.length < 2);
        core.ɵɵadvance(3);
        core.ɵɵproperty("ngModel", field_r62.isMandatory)("ngModelOptions", core.ɵɵpureFunction0(13, _c0));
    } }
    function CreateProfileTemplateComponent_div_24_Template(rf, ctx) { if (rf & 1) {
        var _r104 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "div", 16);
        core.ɵɵelementStart(1, "div", 17);
        core.ɵɵelementStart(2, "mat-form-field", 18);
        core.ɵɵelementStart(3, "mat-label");
        core.ɵɵtext(4, "Cat\u00E9gorie");
        core.ɵɵelementEnd();
        core.ɵɵelementStart(5, "input", 19);
        core.ɵɵlistener("ngModelChange", function CreateProfileTemplateComponent_div_24_Template_input_ngModelChange_5_listener($event) { core.ɵɵrestoreView(_r104); var category_r58 = ctx.$implicit; return category_r58.name = $event; });
        core.ɵɵelementEnd();
        core.ɵɵtemplate(6, CreateProfileTemplateComponent_div_24_mat_error_6_Template, 4, 0, "mat-error", 4);
        core.ɵɵelementEnd();
        core.ɵɵelementStart(7, "div");
        core.ɵɵelementStart(8, "button", 20);
        core.ɵɵlistener("click", function CreateProfileTemplateComponent_div_24_Template_button_click_8_listener($event) { core.ɵɵrestoreView(_r104); var i_r59 = ctx.index; var ctx_r105 = core.ɵɵnextContext(); return ctx_r105.onRemoveCategory($event, i_r59); });
        core.ɵɵtext(9, "Supprimer");
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵtemplate(10, CreateProfileTemplateComponent_div_24_div_10_Template, 29, 14, "div", 21);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var category_r58 = ctx.$implicit;
        var i_r59 = ctx.index;
        var ctx_r56 = core.ɵɵnextContext();
        core.ɵɵadvance(5);
        core.ɵɵproperty("readonly", ctx_r56.categories.length < 4)("ngModel", category_r58.name)("ngModelOptions", core.ɵɵpureFunction0(6, _c0));
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", category_r58.name == "");
        core.ɵɵadvance(2);
        core.ɵɵproperty("disabled", i_r59 < 3);
        core.ɵɵadvance(2);
        core.ɵɵproperty("ngForOf", category_r58.forms);
    } }
    var _c1 = function () { return ["/profil-list"]; };
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
                                Name: ['', forms.Validators.required],
                                Description: [''],
                                Tags: ['', forms.Validators.required],
                                Status: [false, forms.Validators.required]
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
        CreateProfileTemplateComponent.ɵfac = function CreateProfileTemplateComponent_Factory(t) { return new (t || CreateProfileTemplateComponent)(core.ɵɵdirectiveInject(forms.FormBuilder), core.ɵɵdirectiveInject(OnboardingService), core.ɵɵdirectiveInject(router.ActivatedRoute), core.ɵɵdirectiveInject(router.Router)); };
        CreateProfileTemplateComponent.ɵcmp = core.ɵɵdefineComponent({ type: CreateProfileTemplateComponent, selectors: [["onboarding-create-profile-template"]], decls: 32, vars: 6, consts: [[1, "container"], [3, "formGroup", "submit"], ["appearance", "fill", 1, "example-full-width"], ["type", "text", "matInput", "", "formControlName", "Name", "placeholder", "Ex. Manager"], [4, "ngIf"], ["type", "text", "matInput", "", "formControlName", "Description", "placeholder", ""], ["formControlName", "Tags", "required", ""], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "Status"], [1, "category"], ["class", "category-item", 4, "ngFor", "ngForOf"], [1, "action"], ["mat-raised-button", "", "color", "primary", 3, "click"], ["role", "button", "mat-raised-button", "", "color", "basic", 3, "routerLink"], ["mat-raised-button", "", "color", "basic", "type", "submit"], [3, "value"], [1, "category-item"], [1, "field-item"], ["appearance", "fill", 1, "example-full-width", "input-category-name"], ["type", "text", "required", "", "matInput", "", "placeholder", "", 3, "readonly", "ngModel", "ngModelOptions", "ngModelChange"], ["mat-raised-button", "", "color", "warn", 3, "disabled", "click"], ["class", "field-item", 4, "ngFor", "ngForOf"], ["appearance", "fill", 1, "form-field", "field-size"], ["type", "text", "matInput", "", "required", "", "placeholder", "", 3, "ngModelOptions", "ngModel", "ngModelChange"], ["required", "", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["value", "text"], ["value", "radio"], ["value", "select"], ["value", "checkbox"], ["class", "form-field field-size", "appearance", "fill", 4, "ngIf"], ["class", "flex-auto w-30 field-size", 4, "ngIf"], ["mat-mini-fab", "", "color", "success", 3, "click"], ["mat-mini-fab", "", "color", "warn", 1, "delete-field", 3, "disabled", "click"], [1, "form-field", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["type", "text", "matInput", "", "placeholder", "", 3, "ngModelOptions", "ngModel", "ngModelChange"], [1, "flex-auto", "w-30", "field-size"], [3, "ngModel", "ngModelOptions", "ngModelChange"], ["aria-label", "Video keywords; let index=index", "multiple", ""], ["chipList", ""], ["style", "min-height: 25px;", 3, "selected", "value", "removable", "removed", 4, "ngFor", "ngForOf"], ["placeholder", "add...", 3, "matChipInputFor", "matChipInputAddOnBlur", "matChipInputSeparatorKeyCodes", "matChipInputTokenEnd", "keyup"], ["chipsInput", ""], [2, "min-height", "25px", 3, "selected", "value", "removable", "removed"], ["matChipRemove", ""]], template: function CreateProfileTemplateComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵelementStart(0, "div", 0);
                core.ɵɵelementStart(1, "h3");
                core.ɵɵtext(2, "Cr\u00E9ation de profil");
                core.ɵɵelementEnd();
                core.ɵɵelementStart(3, "form", 1);
                core.ɵɵlistener("submit", function CreateProfileTemplateComponent_Template_form_submit_3_listener() { return ctx.onSubmit(); });
                core.ɵɵelementStart(4, "mat-form-field", 2);
                core.ɵɵelementStart(5, "mat-label");
                core.ɵɵtext(6, "Nom du profil");
                core.ɵɵelementEnd();
                core.ɵɵelement(7, "input", 3);
                core.ɵɵtemplate(8, CreateProfileTemplateComponent_mat_error_8_Template, 4, 0, "mat-error", 4);
                core.ɵɵelementEnd();
                core.ɵɵelementStart(9, "mat-form-field", 2);
                core.ɵɵelementStart(10, "mat-label");
                core.ɵɵtext(11, "D\u00E9scription");
                core.ɵɵelementEnd();
                core.ɵɵelement(12, "textarea", 5);
                core.ɵɵelementEnd();
                core.ɵɵelementStart(13, "mat-form-field", 2);
                core.ɵɵelementStart(14, "mat-label");
                core.ɵɵtext(15, "Tags");
                core.ɵɵelementEnd();
                core.ɵɵelementStart(16, "mat-select", 6);
                core.ɵɵtemplate(17, CreateProfileTemplateComponent_mat_option_17_Template, 2, 2, "mat-option", 7);
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
                core.ɵɵelementStart(18, "mat-checkbox", 8);
                core.ɵɵtext(19, "Active");
                core.ɵɵelementEnd();
                core.ɵɵelement(20, "hr");
                core.ɵɵelementStart(21, "div", 9);
                core.ɵɵelementStart(22, "h2");
                core.ɵɵtext(23, "Liste de cat\u00E9gories");
                core.ɵɵelementEnd();
                core.ɵɵtemplate(24, CreateProfileTemplateComponent_div_24_Template, 11, 7, "div", 10);
                core.ɵɵelementEnd();
                core.ɵɵelementStart(25, "div", 11);
                core.ɵɵelementStart(26, "button", 12);
                core.ɵɵlistener("click", function CreateProfileTemplateComponent_Template_button_click_26_listener($event) { return ctx.onAddNewCategory($event); });
                core.ɵɵtext(27, "Ajouter une cat\u00E9gorie");
                core.ɵɵelementEnd();
                core.ɵɵelementStart(28, "a", 13);
                core.ɵɵtext(29, "Liste des profils");
                core.ɵɵelementEnd();
                core.ɵɵelementStart(30, "button", 14);
                core.ɵɵtext(31, "Valider");
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
            } if (rf & 2) {
                core.ɵɵadvance(3);
                core.ɵɵproperty("formGroup", ctx.form);
                core.ɵɵadvance(5);
                core.ɵɵproperty("ngIf", ctx.form.get("Name").hasError("required"));
                core.ɵɵadvance(9);
                core.ɵɵproperty("ngForOf", ctx.tags);
                core.ɵɵadvance(7);
                core.ɵɵproperty("ngForOf", ctx.categories);
                core.ɵɵadvance(4);
                core.ɵɵproperty("routerLink", core.ɵɵpureFunction0(5, _c1));
            } }, directives: [forms.ɵangular_packages_forms_forms_y, forms.NgControlStatusGroup, forms.FormGroupDirective, formField.MatFormField, formField.MatLabel, input.MatInput, forms.DefaultValueAccessor, forms.NgControlStatus, forms.FormControlName, common.NgIf, select.MatSelect, forms.RequiredValidator, common.NgForOf, checkbox.MatCheckbox, button.MatButton, button.MatAnchor, router.RouterLinkWithHref, formField.MatError, core$1.MatOption, forms.NgModel, icon.MatIcon, chips.MatChipList, chips.MatChipInput, chips.MatChip, chips.MatChipRemove], styles: [".container[_ngcontent-%COMP%]{max-width:98%;margin:50px auto auto;padding-bottom:50px}.container[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:space-between}.input-category-name[_ngcontent-%COMP%]{font-size:15px;font-weight:500}.example-full-width[_ngcontent-%COMP%]{width:100%}.field-item[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center}.field-action[_ngcontent-%COMP%]{width:10%}.field-size[_ngcontent-%COMP%]{width:90%;margin:auto 2% auto auto}hr[_ngcontent-%COMP%]{margin:50px 0}  .mat-form-field-appearance-fill .mat-form-field-flex{background-color:#fff}.category-aciton[_ngcontent-%COMP%]{display:flex;width:100%}.delete-field[_ngcontent-%COMP%]{margin:auto 2%}.radio-group[_ngcontent-%COMP%]   .mat-radio-button[_ngcontent-%COMP%]{margin-right:10px}.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary[_ngcontent-%COMP%]{background-color:#3f51b5;color:#fff;min-height:20px;font-size:10px}"] });
        return CreateProfileTemplateComponent;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(CreateProfileTemplateComponent, [{
            type: core.Component,
            args: [{
                    selector: 'onboarding-create-profile-template',
                    templateUrl: './create-profile-template.component.html',
                    styleUrls: ['./create-profile-template.component.scss']
                }]
        }], function () { return [{ type: forms.FormBuilder }, { type: OnboardingService }, { type: router.ActivatedRoute }, { type: router.Router }]; }, null); })();

    var _c0$1 = function (a0) { return [a0]; };
    function ProfileListComponent_div_17_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "div", 7);
        core.ɵɵelement(1, "img", 8);
        core.ɵɵelementStart(2, "p");
        core.ɵɵtext(3);
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var d_r107 = ctx.$implicit;
        core.ɵɵproperty("routerLink", core.ɵɵpureFunction1(2, _c0$1, "/profil-form/" + d_r107._id));
        core.ɵɵadvance(3);
        core.ɵɵtextInterpolate1(" ", d_r107.Name, "");
    } }
    var _c1$1 = function () { return ["/profil-form/0"]; };
    var ProfileListComponent = /** @class */ (function () {
        function ProfileListComponent(service, router) {
            this.service = service;
            this.router = router;
            this.displayedColumns = ['Name', 'vcontacts', 'createdAt', 'updatedAt', 'action'];
            this.datas = [];
            this.dataSource = new table.MatTableDataSource([]);
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
                            this.dataSource = new table.MatTableDataSource(this.datas);
                            this.dataSource.paginator = this.paginator;
                            this.dataSource.sort = this.sort;
                            return [2 /*return*/];
                    }
                });
            });
        };
        ProfileListComponent.ɵfac = function ProfileListComponent_Factory(t) { return new (t || ProfileListComponent)(core.ɵɵdirectiveInject(OnboardingService), core.ɵɵdirectiveInject(router.Router)); };
        ProfileListComponent.ɵcmp = core.ɵɵdefineComponent({ type: ProfileListComponent, selectors: [["onboarding-profile-list"]], viewQuery: function ProfileListComponent_Query(rf, ctx) { if (rf & 1) {
                core.ɵɵviewQuery(paginator.MatPaginator, true);
                core.ɵɵviewQuery(sort.MatSort, true);
            } if (rf & 2) {
                var _t;
                core.ɵɵqueryRefresh(_t = core.ɵɵloadQuery()) && (ctx.paginator = _t.first);
                core.ɵɵqueryRefresh(_t = core.ɵɵloadQuery()) && (ctx.sort = _t.first);
            } }, decls: 18, vars: 3, consts: [[1, "main"], [1, "header-list"], [1, "content-list"], [1, "list"], [1, "box-template"], ["role", "button", "mat-raised-button", "", "color", "primary", 3, "routerLink"], ["class", "box-template", 3, "routerLink", 4, "ngFor", "ngForOf"], [1, "box-template", 3, "routerLink"], ["src", "data:image/png;base64,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", "alt", ""]], template: function ProfileListComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵelementStart(0, "div", 0);
                core.ɵɵelementStart(1, "div", 1);
                core.ɵɵelementStart(2, "h2");
                core.ɵɵtext(3, "On boarding");
                core.ɵɵelementEnd();
                core.ɵɵelementStart(4, "p");
                core.ɵɵtext(5, "Retrouvez ici, l\u2019ensemble des formulaires d\u2019on boarding que vous avez cr\u00E9\u00E9s");
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
                core.ɵɵelementStart(6, "div", 2);
                core.ɵɵelementStart(7, "h3");
                core.ɵɵtext(8, "Fiches collaborateurs");
                core.ɵɵelementEnd();
                core.ɵɵelementStart(9, "div", 3);
                core.ɵɵelementStart(10, "div", 4);
                core.ɵɵelementStart(11, "p");
                core.ɵɵtext(12, "Nouvelle cat\u00E9gorie");
                core.ɵɵelementEnd();
                core.ɵɵelementStart(13, "a", 5);
                core.ɵɵelementStart(14, "mat-icon");
                core.ɵɵtext(15, "add");
                core.ɵɵelementEnd();
                core.ɵɵtext(16, " Cr\u00E9er une fiche ");
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
                core.ɵɵtemplate(17, ProfileListComponent_div_17_Template, 4, 4, "div", 6);
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
            } if (rf & 2) {
                core.ɵɵadvance(13);
                core.ɵɵproperty("routerLink", core.ɵɵpureFunction0(2, _c1$1));
                core.ɵɵadvance(4);
                core.ɵɵproperty("ngForOf", ctx.datas);
            } }, directives: [button.MatAnchor, router.RouterLinkWithHref, icon.MatIcon, common.NgForOf, router.RouterLink], styles: [".main[_ngcontent-%COMP%]{background:no-repeat padding-box #f4f7f9;opacity:1;height:100%}.main[_ngcontent-%COMP%]   .header-list[_ngcontent-%COMP%]{margin-left:50px;padding-top:10px}.main[_ngcontent-%COMP%]   .header-list[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{text-align:left;font:bold 32px/30px Nexa Text;letter-spacing:0;color:#171f26;opacity:1}.main[_ngcontent-%COMP%]   .header-list[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{text-align:left;font:20px/26px Nexa Text;letter-spacing:0;color:#171f26;opacity:1}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]{background-color:#fff;border-radius:8px;opacity:1;margin:57px;height:80%;padding:49px}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{text-align:left;font:bold 23px/30px Nexa Text;letter-spacing:0;color:#171f26;opacity:1}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .box-template[_ngcontent-%COMP%]{width:328px;height:228px;margin-right:50px;margin-bottom:50px;background:no-repeat padding-box #f4f7f9;border:1px solid #dce4e9;border-radius:6px;opacity:1;display:flex;flex-direction:column;justify-content:center;align-items:center;cursor:pointer}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .box-template[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:81px;height:81px}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .box-template[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{text-align:center;font:bold 16px/25px Nexa Text;letter-spacing:.1px;color:#5a607f;opacity:1}.main[_ngcontent-%COMP%]   .content-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .box-template[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{background:no-repeat padding-box #5a607f;border-radius:7px;font-size:15px}"] });
        return ProfileListComponent;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(ProfileListComponent, [{
            type: core.Component,
            args: [{
                    selector: 'onboarding-profile-list',
                    templateUrl: './profile-list.component.html',
                    styleUrls: ['./profile-list.component.scss']
                }]
        }], function () { return [{ type: OnboardingService }, { type: router.Router }]; }, { paginator: [{
                type: core.ViewChild,
                args: [paginator.MatPaginator]
            }], sort: [{
                type: core.ViewChild,
                args: [sort.MatSort]
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
        OnboardingModule.ɵmod = core.ɵɵdefineNgModule({ type: OnboardingModule });
        OnboardingModule.ɵinj = core.ɵɵdefineInjector({ factory: function OnboardingModule_Factory(t) { return new (t || OnboardingModule)(core.ɵɵinject(OnboardingModule, 12)); }, providers: [OnboardingService], imports: [[
                    forms.FormsModule,
                    http.HttpClientModule,
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
                    router.RouterModule.forRoot(routes)
                ],
                http.HttpClientModule] });
        return OnboardingModule;
    }());
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && core.ɵɵsetNgModuleScope(OnboardingModule, { declarations: [OnboardingComponent, CreateProfileTemplateComponent, ProfileListComponent], imports: [forms.FormsModule,
            http.HttpClientModule,
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
            table.MatTableModule, router.RouterModule], exports: [OnboardingComponent, http.HttpClientModule, CreateProfileTemplateComponent, ProfileListComponent, OnboardingComponent] }); })();
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(OnboardingModule, [{
            type: core.NgModule,
            args: [{
                    declarations: [OnboardingComponent, CreateProfileTemplateComponent, ProfileListComponent],
                    imports: [
                        forms.FormsModule,
                        http.HttpClientModule,
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
                        router.RouterModule.forRoot(routes)
                    ],
                    providers: [OnboardingService],
                    exports: [OnboardingComponent, http.HttpClientModule, CreateProfileTemplateComponent, ProfileListComponent, OnboardingComponent]
                }]
        }], function () { return [{ type: OnboardingModule, decorators: [{
                    type: core.Optional
                }, {
                    type: core.SkipSelf
                }] }]; }, null); })();

    exports.CreateProfileTemplateComponent = CreateProfileTemplateComponent;
    exports.OnboardingComponent = OnboardingComponent;
    exports.OnboardingModule = OnboardingModule;
    exports.OnboardingService = OnboardingService;
    exports.ProfileListComponent = ProfileListComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=onboarding.umd.js.map
