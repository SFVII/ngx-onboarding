(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common/http'), require('@angular/core'), require('rxjs'), require('@angular/router'), require('@angular/forms'), require('@angular/cdk/keycodes'), require('@angular/cdk/drag-drop'), require('@angular/material/paginator'), require('@angular/material/sort'), require('@angular/material/table'), require('@angular/common'), require('@angular/platform-browser'), require('@angular/platform-browser/animations'), require('@angular/material/form-field'), require('@angular/material/button'), require('@angular/material/stepper'), require('@angular/material/checkbox'), require('@angular/material/icon'), require('@angular/material/select'), require('@angular/material/chips'), require('@angular/material/input'), require('@angular/material/grid-list'), require('@angular/material/radio'), require('@angular/cdk/table'), require('@angular/material/card'), require('@angular/material/dialog')) :
    typeof define === 'function' && define.amd ? define('onboarding', ['exports', '@angular/common/http', '@angular/core', 'rxjs', '@angular/router', '@angular/forms', '@angular/cdk/keycodes', '@angular/cdk/drag-drop', '@angular/material/paginator', '@angular/material/sort', '@angular/material/table', '@angular/common', '@angular/platform-browser', '@angular/platform-browser/animations', '@angular/material/form-field', '@angular/material/button', '@angular/material/stepper', '@angular/material/checkbox', '@angular/material/icon', '@angular/material/select', '@angular/material/chips', '@angular/material/input', '@angular/material/grid-list', '@angular/material/radio', '@angular/cdk/table', '@angular/material/card', '@angular/material/dialog'], factory) :
    (global = global || self, factory(global.onboarding = {}, global.ng.common.http, global.ng.core, global.rxjs, global.ng.router, global.ng.forms, global.ng.cdk.keycodes, global.ng.cdk.dragDrop, global.ng.material.paginator, global.ng.material.sort, global.ng.material.table, global.ng.common, global.ng.platformBrowser, global.ng.platformBrowser.animations, global.ng.material.formField, global.ng.material.button, global.ng.material.stepper, global.ng.material.checkbox, global.ng.material.icon, global.ng.material.select, global.ng.material.chips, global.ng.material.input, global.ng.material.gridList, global.ng.material.radio, global.ng.cdk.table, global.ng.material.card, global.ng.material.dialog));
}(this, (function (exports, http, core, rxjs, router, forms, keycodes, dragDrop, paginator, sort, table, common, platformBrowser, animations, formField, button, stepper, checkbox, icon, select, chips, input, gridList, radio, table$1, card, dialog) { 'use strict';

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
            this.id = "0";
            this.parent = [];
            this.showProfileName = true;
            this.matIconList = [
                { name: 'developer_board' },
                { name: 'contact_phone' },
                { name: 'manage_accounts' },
                { name: 'person' },
                { name: 'paid' },
                { name: 'visibility' },
                { name: 'watch_later' },
                { name: 'work' },
                { name: 'wysiwyg' },
                { name: 'web' },
                { name: 'water_drop' },
                { name: 'whatshot' },
                { name: 'whatsapp' },
                { name: 'wifi' },
                { name: 'workspaces' },
                { name: 'yard' },
                { name: 'wysiwyg' },
                { name: 'wb_cloudy' },
                { name: 'water' },
                { name: 'waves' },
                { name: 'warning' },
                { name: 'space_das' },
                { name: 'speed' },
                { name: 'sports_ba' },
                { name: 'stadium' },
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
                                Name: ["", forms.Validators.required],
                                Picto: [""],
                                Description: [""],
                                Tags: ["", forms.Validators.required],
                                Status: [false, forms.Validators.required],
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
                dragDrop.moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
            }
            else {
                dragDrop.transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
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
        CreateProfileTemplateComponent.ctorParameters = function () { return [
            { type: forms.FormBuilder },
            { type: OnboardingService },
            { type: router.ActivatedRoute },
            { type: router.Router }
        ]; };
        CreateProfileTemplateComponent = __decorate([
            core.Component({
                selector: "onboarding-create-profile-template",
                template: "<main>\n    <form [formGroup]=\"form\" (submit)=\"onSubmit()\">\n        <div class=\"box-title\" *ngIf=\"showProfileName\">\n            <div class=\"box-title-content\">\n                <h3 class=\"title\">Cr\u00E9ation d\u2019un nouveau profil d\u2019onboarding</h3>\n                <p>S\u00E9lectionnez l\u2019icon de votre choix et indiquez le nom de votre nouveau profil d\u2019onboarding</p>\n                <div class=\"profil-name-content\">\n                    <button class=\"add-picto\" mat-raised-button color=\"primary\" (click)=\"onShowPictoList($event)\">\n                        <mat-icon>{{form.get('Picto').value===\"\" ? 'contact_phone' :form.get('Picto').value}}</mat-icon>\n                    </button>\n                    <mat-form-field class=\"example-full-width\" appearance=\"outline\">\n                        <mat-label>Nom de votre nouveau profil</mat-label>\n                        <input type=\"text\" matInput formControlName=\"Name\" placeholder=\"Ex. Manager\" />\n                    </mat-form-field>\n                    <div class=\"list-picto\" *ngIf=\"isPictoListShow\">\n                        <mat-icon *ngFor=\"let icon of matIconList\"\n                            [style.color]=\"form.get('Picto').value===icon.name ? '#830B6B':'#000'\"\n                            (click)=\"onSelectPicto($event,icon.name)\">\n                            {{icon.name}}\n                        </mat-icon>\n                    </div>\n                </div>\n                <mat-form-field class=\"example-full-width\" appearance=\"outline\">\n                    <mat-label>D\u00E9scription</mat-label>\n                    <textarea type=\"text\" matInput formControlName=\"Description\" rows=\"4\" placeholder=\"\"></textarea>\n                </mat-form-field>\n                <mat-form-field class=\"example-full-width\" appearance=\"outline\">\n                    <mat-label>Tags</mat-label>\n                    <mat-select formControlName=\"Tags\" required>\n                        <mat-option *ngFor=\"let tag of tags\" [value]=\"tag\">{{tag}}</mat-option>\n                    </mat-select>\n                </mat-form-field>\n                <mat-checkbox class=\"form-field\" formControlName=\"Status\">Active</mat-checkbox>\n                <button class=\"link-add-profil\"\n                    [style.opacity]=\"(form.get('Name').value==='' || form.get('Tags').value=='') ? 0.4 : 1\"\n                    [disabled]=\"form.get('Name').value==='' || form.get('Tags').value==''\" mat-raised-button\n                    color=\"primary\" (click)='onShowCategory()'>\n                    {{id !== \"0\" ? 'Modifier un profil' :'Cr\u00E9er un nouveau profil'}}\n                </button>\n            </div>\n        </div>\n        <div class=\"category\" *ngIf=\"!showProfileName\">\n            <!-- <div class=\"category\"> -->\n\n            <div class=\"side-bar\">\n                <div class=\"summary\">\n                    <h3>{{this.form.get('Name').value}}</h3>\n                    <ol type=\"I\">\n                        <li class=\"li-title\" *ngFor=\"let cat of categories;  let i=index\"> <span\n                                (click)=\"onExpendMore({field:cat},i)\">{{cat.name}}</span>\n                            <ol>\n                                <ng-container *ngFor=\"let sub of cat.forms;let j=index\">\n                                    <ng-container *ngIf=\"sub?.forms\">\n                                        <li [class]=\"sub.expandMore ? 'sub-title active' :'sub-title'\"\n                                            (click)=\"onExpendMore({field:sub},i,j)\">\n                                            {{j+1}}. {{sub.label}}\n                                        </li>\n                                    </ng-container>\n                                </ng-container>\n                            </ol>\n                        </li>\n                    </ol>\n                    <button mat-button class=\"add-category transparent\" (click)='onAddNewCategory($event)'>\n                        <mat-icon>add_box</mat-icon>\n                        Ajouter une nouvelle cat\u00E9gorie\n                    </button>\n                </div>\n                <button mat-button class=\"register-button\" type=\"submit\">\n                    <!-- <mat-icon>check</mat-icon> -->\n                    Enregistrer le profil\n                </button>\n            </div>\n            <div class=\"fields\" cdkDropListGroup>\n                <div class=\"example-list mt-20\" #parentList=\"cdkDropList\" cdkDropList [cdkDropListData]=\"categories\"\n                    (cdkDropListDropped)=\"drop($event)\">\n                    <div class=\"category-item\" *ngFor=\"let category of categories;  let i=index\" cdkDrag>\n                        <div class=\"left-action move-icons\" cdkDragHandle>\n                            <button class=\"transparent-button\" [disabled]=\"!category.deleteable\"\n                                (click)=\"onRemoveCategory($event,i)\" mat-raised-button>\n                                <mat-icon [style.opacity]=\"!category.deleteable ? 0 :1\">delete</mat-icon>\n                            </button>\n                            <!-- <button mat-raised-button class=\"move-icons transparent-button\"\n                                (click)=\"ingoreDefaultAction($event)\">\n                                <mat-icon cdkDragHandle>swap_vert</mat-icon>\n                            </button> -->\n                        </div>\n                        <div class=\"field-content\">\n                            <div class=\"field-item\">\n                                <input class=\"example-full-width input-category-name\" type=\"text\" required\n                                    [readonly]=\"categories.length<4 || !category.editable\"\n                                    [readonly]=\"!category.editable\" [(ngModel)]=\"category.name\"\n                                    [ngModelOptions]=\"{standalone: true}\" placeholder=\"Saisir le nom de la cat\u00E9gorie\" />\n                            </div>\n                            <div #childList=\"cdkDropList\" *ngIf=\"category.forms\" [cdkDropListData]=\"category.forms\"\n                                cdkDropList (cdkDropListDropped)=\"drop($event)\">\n                                <ng-container *ngIf=\"category.expandMore\">\n                                    <div class=\"\" *ngFor=\"let field of category.forms;let j=index\">\n                                        <div cdkDrag>\n                                            <div class=\"fields-content\">\n                                                <div class=\"button-action\">\n                                                    <button [disabled]=\"!field.deleteable\" mat-mini-fab color=\"warn\"\n                                                        class=\"delete-field transparent-button\"\n                                                        (click)=\"onRemoveField(i,j)\">\n                                                        <mat-icon [style.opacity]=\"!field.deleteable ? 0 :1\">delete\n                                                        </mat-icon>\n                                                    </button>\n                                                </div>\n                                                <div class=\"fields-container\"\n                                                    [class]=\"!field.deleteable ? 'disabled' :''\">\n                                                    <lib-sub-category [field]=\"field\" [length]=\"category?.forms?.length\"\n                                                        [i]=\"i\" [j]=\"j\"\n                                                        (onAddKeywordFromInput)=\"addKeywordFromInput($event.event,i,j)\"\n                                                        (onKeyPress)=\"onKeyPress($event.event,i,j)\"\n                                                        (onAddNewField)=\"onAddNewField(i)\"\n                                                        (onRemoveField)=\"onRemoveField(i,j)\"\n                                                        (onChangeType)=\"onChangeType(field.type,i,j)\"\n                                                        (onRemoveKeyword)=\"removeKeyword($event.event,i,j)\"\n                                                        (onAddNewSubLevelField)=\"onAddNewSubLevelField(i,j)\"\n                                                        (onExpendMore)=\"onExpendMore($event,i,j)\">\n                                                        <div *ngIf=\"field.expandMore\" class=\"child\">\n                                                            <div #childList=\"cdkDropList\" *ngIf=\"field.forms\"\n                                                                [cdkDropListData]=\"field.forms\" cdkDropList\n                                                                (cdkDropListDropped)=\"drop($event)\">\n                                                                <div class=\"\"\n                                                                    *ngFor=\"let child of field.forms;let k=index\">\n                                                                    <div cdkDrag>\n                                                                        <div class=\"fields-content\">\n                                                                            <div\n                                                                                class=\"button-action child-2-background\">\n                                                                                <button [disabled]=\"!child.deleteable\"\n                                                                                    mat-mini-fab color=\"warn\"\n                                                                                    class=\"delete-field transparent-button\"\n                                                                                    (click)=\"onRemoveField(i,j,k)\">\n                                                                                    <mat-icon\n                                                                                        [style.opacity]=\"!child.deleteable ? 0 :1\">\n                                                                                        delete</mat-icon>\n                                                                                </button>\n                                                                            </div>\n                                                                            <div class=\"fields-container\">\n                                                                                <lib-sub-category [field]=\"child\"\n                                                                                    [length]=\"field?.forms?.length\"\n                                                                                    [i]=\"j\" [j]=\"k\"\n                                                                                    (onAddKeywordFromInput)=\"addKeywordFromInput($event.event,i,j,k)\"\n                                                                                    (onKeyPress)=\"onKeyPress($event.event,i,j,k)\"\n                                                                                    (onAddNewField)=\"onAddNewField(i, j)\"\n                                                                                    (onRemoveField)=\"onRemoveField(i,j,k)\"\n                                                                                    (onChangeType)=\"onChangeType(child.type,i,j,k)\"\n                                                                                    (onRemoveKeyword)=\"removeKeyword($event.event,i,j,k)\"\n                                                                                    (onAddNewSubLevelField)=\"onAddNewSubLevelField(i,j,k)\"\n                                                                                    (onExpendMore)=\"onExpendMore($event,i,j,k)\">\n                                                                                    <div *ngIf=\"child.expandMore\"\n                                                                                        class=\"child\">\n                                                                                        <div #childList=\"cdkDropList\"\n                                                                                            *ngIf=\"child.forms\"\n                                                                                            [cdkDropListData]=\"child.forms\"\n                                                                                            cdkDropList\n                                                                                            (cdkDropListDropped)=\"drop($event)\">\n                                                                                            <div class=\"\"\n                                                                                                *ngFor=\"let c2 of child.forms;let l=index\">\n                                                                                                <div cdkDrag>\n                                                                                                    <div\n                                                                                                        class=\"fields-content\">\n                                                                                                        <div\n                                                                                                            class=\"button-action child-3-background\">\n                                                                                                            <button\n                                                                                                                [disabled]=\"!field.deleteable\"\n                                                                                                                mat-mini-fab\n                                                                                                                color=\"warn\"\n                                                                                                                class=\"delete-field transparent-button\"\n                                                                                                                (click)=\"onRemoveField(i,j,k,l)\">\n                                                                                                                <mat-icon>\n                                                                                                                    delete\n                                                                                                                </mat-icon>\n                                                                                                            </button>\n                                                                                                        </div>\n                                                                                                        <div\n                                                                                                            class=\"fields-container\">\n                                                                                                            <lib-sub-category\n                                                                                                                [field]=\"c2\"\n                                                                                                                [length]=\"child?.forms?.length\"\n                                                                                                                [i]=\"k\"\n                                                                                                                [j]=\"l\"\n                                                                                                                (onAddKeywordFromInput)=\"addKeywordFromInput($event.event,i,j,k,l)\"\n                                                                                                                (onKeyPress)=\"onKeyPress($event.event,i,j,k,l)\"\n                                                                                                                (onAddNewField)=\"onAddNewField(i,j,k)\"\n                                                                                                                (onRemoveField)=\"onRemoveField(i,j,k,l)\"\n                                                                                                                (onChangeType)=\"onChangeType(c2.type,i,j,k,l)\"\n                                                                                                                (onRemoveKeyword)=\"removeKeyword($event.event,i,j,k,l)\"\n                                                                                                                (onAddNewSubLevelField)=\"onAddNewSubLevelField(i,j,k,l)\"\n                                                                                                                (onExpendMore)=\"onExpendMore($event,i,j,k,l)\">\n                                                                                                                <div\n                                                                                                                    class=\"child\">\n                                                                                                                </div>\n                                                                                                            </lib-sub-category>\n                                                                                                        </div>\n                                                                                                    </div>\n                                                                                                </div>\n                                                                                                <div class=\"add-button-container\"\n                                                                                                    *ngIf=\"child?.forms?.length-1===l\">\n                                                                                                    <button\n                                                                                                        style=\"margin:10px auto\"\n                                                                                                        [disabled]=\"child?.forms?.length-1!==l\"\n                                                                                                        [style.opacity]=\"child?.forms?.length-1===l ? 1 :0\"\n                                                                                                        mat-raised-button\n                                                                                                        color=\"primary\"\n                                                                                                        (click)='onAddNewField(i,j,k)'>\n                                                                                                        <mat-icon>\n                                                                                                            add_box\n                                                                                                        </mat-icon>\n                                                                                                        <span>Ajouter un\n                                                                                                            champ</span>\n                                                                                                    </button>\n                                                                                                </div>\n                                                                                            </div>\n                                                                                        </div>\n                                                                                    </div>\n                                                                                </lib-sub-category>\n                                                                            </div>\n                                                                        </div>\n                                                                    </div>\n                                                                    <div class=\"add-button-container\"\n                                                                        *ngIf=\"field?.forms?.length-1===k\">\n                                                                        <button style=\"margin:10px auto\"\n                                                                            [disabled]=\"field?.forms?.length-1!==k\"\n                                                                            [style.opacity]=\"field?.forms?.length-1===k ? 1 :0\"\n                                                                            mat-raised-button color=\"primary\"\n                                                                            (click)='onAddNewField(i,j)'>\n                                                                            <mat-icon>add_box</mat-icon>\n                                                                            <span>Ajouter un champ</span>\n                                                                        </button>\n                                                                    </div>\n                                                                </div>\n                                                            </div>\n                                                        </div>\n                                                    </lib-sub-category>\n\n                                                </div>\n                                            </div>\n                                        </div>\n                                        <div class=\"add-button-container\" *ngIf=\"category?.forms?.length-1===j\">\n                                            <button style=\"margin:10px auto\" [disabled]=\"category?.forms?.length-1!==j\"\n                                                [style.opacity]=\"category?.forms?.length-1===j ? 1 :0\" mat-raised-button\n                                                color=\"primary\" (click)='onAddNewField(i)'>\n                                                <mat-icon>add_box</mat-icon>\n                                                <span>Ajouter un champ</span>\n                                            </button>\n                                        </div>\n                                    </div>\n                                </ng-container>\n\n                            </div>\n                        </div>\n                        <button mat-mini-fab color=\"primary\" class=\"expand-button\"\n                            (click)=\"onExpendMore({event:$event, field:category},i)\">\n                            <mat-icon *ngIf=\"!category.expandMore\">chevron_right</mat-icon>\n                            <mat-icon *ngIf=\"category.expandMore\">expand_more</mat-icon>\n                        </button>\n                    </div>\n\n                    <div class=\"add-button-container\">\n                        <button (click)='onAddNewCategory($event)'>\n                            <mat-icon>add</mat-icon>\n                            Ajouter une cat\u00E9gorie\n                        </button>\n                        <!-- <button type=\"submit\">\n                            <mat-icon>check</mat-icon>\n                            Enregistrer\n                        </button> -->\n                    </div>\n                </div>\n\n            </div>\n        </div>\n    </form>\n</main>",
                styles: ["main{background:no-repeat padding-box #f4f7f9;height:100vh;width:100%;display:flex;flex-direction:column;align-items:center}main .box-title{background:no-repeat padding-box #fff;border:1px solid #dce4e9;border-radius:6px;margin:20vh auto auto}main .box-title .profil-name-content{display:flex;align-items:center;position:relative}main .box-title .profil-name-content .add-picto{margin-right:15px;min-width:50px;width:30px;padding:9px 12px}main .box-title .profil-name-content .add-picto mat-icon{margin-right:10px}main .box-title .profil-name-content .list-picto{position:absolute;height:200px;width:100%;background:no-repeat padding-box #fff;border:1px solid #171f26;border-radius:8px;top:78%;z-index:1}main .box-title .profil-name-content .list-picto mat-icon{margin:15px;border:none;font-size:40px}main .box-title .profil-name-content .list-picto mat-icon:hover{color:#830b6b!important;cursor:pointer}main .box-title .box-title-content{width:80%;margin:25px auto}main .box-title .title{font:900 32px/38px Nexa;letter-spacing:0;color:#171f26}main .box-title p{font:15px/26px Nexa Text;letter-spacing:0;color:#171f26;text-align:center}main .box-title button{margin:30px auto;text-align:center;border:1px solid #543cb6;border-radius:7px;padding:.7em 2em .5em;display:flex;align-items:center;background-color:transparent;font:bold 15px/17px Nexa;letter-spacing:0;color:#543cb6}main .action{width:100%;display:flex;justify-content:space-between}.input-category-name{border:none;outline:0;text-align:left;font:bold 20px/48px Nexa Text;letter-spacing:0;color:#171f26}.example-full-width{width:100%}.field-action{width:10%}.field-size{width:90%;margin:auto 2% auto auto}::ng-deep .mat-form-field-appearance-fill .mat-form-field-flex{background-color:#fff}::ng-deep .mat-form-field-appearance-outline .mat-form-field-infix{padding:.5em 0}::ng-deep .mat-select{padding:.5em 0}::ng-deep .mat-form-field-appearance-fill .mat-form-field-underline::before{background-color:transparent}::ng-deep .mat-form-field-wrapper{padding-bottom:0!important}:host ::ng-deep .cdk-drag-preview .input-category-name div.mat-form-field-outline-start,:host ::ng-deep .input-category-name div.mat-form-field-outline-start{border-color:0!important;border-width:0!important}:host ::ng-deep .input-category-name .mat-form-field-outline-gap{border-color:0!important;border-width:0!important}::ng-deep mat-checkbox.form-field .mat-checkbox-checkmark-path{stroke:#000!important}:host ::ng-deep .mat-checkbox-checked.mat-accent .mat-checkbox-background,:host ::ng-deep .mat-checkbox-indeterminate.mat-accent .mat-checkbox-background{background-color:transparent}:host ::ng-deep .input-category-name .mat-form-field-outline-end{border-color:0!important;border-width:0!important}:host ::ng-deep .input-category-name .mat-form-field-label-wrapper{display:none}:host ::ng-deep .input-category-name .mat-form-field-appearance-outline .mat-form-field-outline{color:transparent!important}:host ::ng-deep .input-category-name .mat-form-field-infix{border-top:none}:host ::ng-deep .input-category-name .mat-form-field-appearance-outline .mat-form-field-infix{padding:0 0 1em!important}.category-action{display:flex;width:100%}.delete-field{margin:auto 2%}.radio-group .mat-radio-button{margin-right:10px}.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary{background-color:#3f51b5;color:#fff;min-height:20px;font-size:10px}.move-icons{cursor:move}.category-item,.cdk-drag-placeholder{display:flex;align-items:baseline;width:100%;border:1px solid #dce4e9;border-radius:8px;background-color:#fff;margin-top:10px;min-height:60px}.category-item .left-action,.cdk-drag-placeholder .left-action{height:auto;background-color:#49a094;padding-top:7px;width:40px;-ms-grid-row-align:stretch;align-self:stretch;border-top-left-radius:8px;border-bottom-left-radius:8px}.category-item .left-action .transparent-button,.cdk-drag-placeholder .left-action .transparent-button{background-color:transparent;box-shadow:none;width:40px;padding:0;margin:0;min-width:auto;color:#fff}.category-item .field-content,.cdk-drag-placeholder .field-content{width:100%;-ms-grid-row-align:center;align-self:center}.category-item .field-content .field-item,.cdk-drag-placeholder .field-content .field-item{display:flex;justify-content:space-between;align-items:center;border:transparent!important}.category-item .field-content .field-item mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-outline,.category-item .field-content .mat-form-field-outline,.cdk-drag-placeholder .field-content .field-item mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-outline,.cdk-drag-placeholder .field-content .mat-form-field-outline{color:transparent!important}.cdk-drag-preview{box-sizing:border-box;border-radius:4px;opacity:1}.cdk-drag-preview .expand-button{color:#5a607f;background-color:transparent;box-shadow:none;margin-right:28px}.cdk-drag-placeholder{opacity:0}.cdk-drag-animating,.example-list.cdk-drop-list-dragging .category-item:not(.cdk-drag-placeholder){transition:transform 250ms cubic-bezier(0,0,.2,1)}.child{margin-left:0}.box-title{width:786px;height:488px;background:no-repeat padding-box #fff;border:1px solid #dce4e9;border-radius:6px;opacity:1;margin:auto;padding:0 25px}.box-title h3{text-align:center;font:900 32px/48px Nexa;letter-spacing:0;color:#171f26}.box-title input,.box-title label{font:18px/24px Nexa Text;letter-spacing:0;color:#171f26}.category{display:flex;flex-direction:row;width:100vw}.category .summary{width:250px;background-color:#fff;margin:10px 20px;border-radius:5px;border:1px solid #dbcbcb96}.category .summary h3{font-size:25px;border-bottom:1px solid #dbcbcb96;margin:10px;padding-bottom:5px;font-family:\"Nexa Text\"}.category .summary ol{font-weight:600;margin-left:-27px;font-size:15px;list-style-position:inside}.category .summary ol li{padding:5px;margin:5px auto;cursor:pointer;text-align:left;font:12px/19px Nexa Text;letter-spacing:0;color:#535760}.category .summary ol li ol{padding-left:0;margin-left:0}.category .summary ol li.li-title{font-size:14px;font-weight:600}.category .summary ol li.sub-title{list-style:none;padding-left:20px}.category .summary ol li.sub-title.active,.category .summary ol li.sub-title.active::marker,.category .summary ol li.sub-title:hover{font-weight:600;background:no-repeat padding-box #e5e8ee;border-radius:5px}.category .fields{width:90%;max-height:100vh;overflow:auto;margin-right:.5%;overflow-x:hidden}.category .disabled{background-color:#f4f7f9!important}.category .expand-button{color:#5a607f;background-color:transparent;box-shadow:none;margin-right:28px}.category .expand-button .material-icons{font-size:40px}.category .transparent-button{background-color:transparent;box-shadow:none;width:40px;padding:0;margin:0;min-width:auto;color:#fff}.add-button-container{background:no-repeat padding-box #fff;border:1px dashed #dce4e9;border-radius:8px;margin-top:10px;padding:10px;display:flex;justify-content:space-between;width:96.5%;margin-left:20px;margin-bottom:22px}.add-button-container button{display:flex;align-items:center;background-color:transparent;border:none;margin:auto;cursor:pointer;font:17px/26px Nexa Text;letter-spacing:0;color:#c2c8d5;box-shadow:none}.add-category{border:1px dashed #c2c8d5;border-radius:5px;margin-left:10px;margin-bottom:10px;font:bold 12px/19px Nexa Text;letter-spacing:0;color:#c2c8d5}.cdk-drag .fields-content{display:flex;height:100%;margin:20px auto auto;width:100%}.cdk-drag .fields-content .button-action{background-color:#6fe8d7;-ms-grid-row-align:stretch;align-self:stretch;margin-top:0;margin-left:20px;border-bottom-left-radius:8px;border-top-left-radius:8px}.cdk-drag .fields-content .button-action .transparent-button{background-color:transparent;box-shadow:none;width:40px;padding:0;margin:0;min-width:auto;color:#fff}.cdk-drag .fields-content .child-2-background{background-color:#cffaf4!important}.cdk-drag .fields-content .child-3-background{background-color:#e5e8ee!important}.cdk-drag .fields-content .fields-container{border:1px solid #dce4e9;border-radius:0 8px 8px 0;background-color:#fff;width:100%;padding:10px}.cdk-drag .fields-content .fields-container lib-sub-category .field-item{display:flex;justify-content:space-between;align-items:center;width:100%}.cdk-drag .fields-content .fields-container lib-sub-category .field-item .button-action{background-color:#6fe8d7;height:100%;margin:auto 15px auto auto;display:flex}.cdk-drag .fields-content .fields-container lib-sub-category .field-item .button-action button{box-shadow:none;background-color:transparent;color:#fff}.side-bar{display:flex;flex-direction:column}.register-button{background:no-repeat padding-box #171f26;border:2px solid #192128;border-radius:8px;color:#fff;width:88%;margin:10px auto;border:none}"]
            })
        ], CreateProfileTemplateComponent);
        return CreateProfileTemplateComponent;
    }());

    var ProfileListComponent = /** @class */ (function () {
        function ProfileListComponent(service, router) {
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
                template: "<div class=\"main\">\n    <div class=\"header-list\">\n        <h2>On boarding</h2>\n        <p>Retrouvez ici, l\u2019ensemble des formulaires d\u2019on boarding que vous avez cr\u00E9\u00E9s</p>\n        <!-- <button mat-raised-button color=\"primary\" (click)='onAddProfil()'>Ajouter un prifil</button> -->\n    </div>\n    <div class=\"content-list\">\n        <h3 class=\"title\">Profils</h3>\n        <p class=\"sub-title\">Retrouvez ici, l\u2019ensemble des profils d\u2019onboarding que vous avez cr\u00E9\u00E9s</p>\n        <div class=\"list\">\n            <div class=\"box-template new-template\">\n                <p>Nouveau profil</p>\n                <a role=\"button\" class=\"add-profil\" [routerLink]=\"[this.service.mainPath+'/template-builder/0']\"\n                    mat-raised-button color=\"primary\">\n                    Cr\u00E9er un nouveau profil\n                </a>\n            </div>\n            <div appMaterialElevation [defaultElevation]=\"defaultElevation\" raisedElevation=\"16\" class=\"box-template\"\n                *ngFor=\"let d of datas\">\n                <div class=\"box-content\" [routerLink]=\"[this.service.mainPath+'/template-builder/'+d._id]\">\n                    <div *ngIf=\"d?.Picto\" class=\"picto-preview\">\n                        <mat-icon style=\"font-size:50px ;width: 100%; height: 40%;\">{{d?.Picto}}</mat-icon>\n                    </div>\n                    <div *ngIf=\"!d?.Picto\" class=\"picto-preview\">\n                        <h3>{{d.Name.substr(0,2)}}</h3>\n                    </div>\n                    <p> {{d.Name}}</p>\n                </div>\n                <button (click)=\"onDelete($event,d._id)\" mat-mini-fab color=\"accent\" appMaterialElevation\n                    [defaultElevation]=\"defaultElevation\" raisedElevation=\"16\">\n                    <mat-icon>close</mat-icon>\n                </button>\n            </div>\n        </div>\n    </div>\n</div>",
                styles: [".main{background:no-repeat padding-box #f4f7f9;opacity:1;height:100%}.main .header-list{margin-left:50px;padding-top:10px}.main .header-list h2{text-align:left;font:bold 32px/30px Nexa Text;letter-spacing:0;color:#171f26;opacity:1}.main .header-list p{text-align:left;font:20px/26px Nexa Text;letter-spacing:0;color:#171f26;opacity:1}.main .content-list{background-color:#fff;border-radius:8px;opacity:1;margin:57px;height:80%;padding:49px}.main .content-list h3{text-align:left;font:bold 23px/30px Nexa Text;letter-spacing:0;color:#171f26;opacity:1;margin-bottom:0}.main .content-list p.sub-title{margin-bottom:57px;font:20px/26px Nexa Text;letter-spacing:0;color:#171f26;width:300px}.main .content-list .list{display:flex;flex-wrap:wrap}.main .content-list .list .box-template{width:328px;position:relative;height:228px;margin-right:50px;margin-bottom:50px;background:no-repeat padding-box #f4f7f9;border:1px solid #dce4e9;border-radius:6px;opacity:1;display:flex;flex-direction:column;justify-content:center;align-items:center;cursor:pointer}.main .content-list .list .box-template img{width:81px;height:81px}.main .content-list .list .box-template p{text-align:center;font:bold 16px/25px Nexa Text;letter-spacing:.1px;color:#000;opacity:1;margin-top:17px}.main .content-list .list .box-template a{background:no-repeat padding-box #171f26;border-radius:7px;font-size:15px}.main .content-list .list .box-template .mat-mini-fab{display:none}.main .content-list .list .box-template .box-content{width:100%;height:90%;text-align:center;margin-top:10%}.main .content-list .list .box-template .box-content .picto-preview{width:113px;height:113px;background:no-repeat padding-box #fff;margin:auto;border-radius:113px;display:flex;align-items:center;justify-content:center}.main .content-list .list .box-template .box-content .picto-preview h3{font-size:40px;color:#dce4e9}.main .content-list .list .new-template{border:1px solid #dce4e9;border-radius:6px;background-color:transparent}::ng-deep .box-template:hover .mat-mini-fab .mat-button-wrapper{padding:0!important;display:inline-block;line-height:0}::ng-deep .box-template:hover .mat-mini-fab{display:initial!important;position:absolute;right:6px;top:7px;background-color:red;width:25px;height:25px}::ng-deep .box-template:hover .mat-mini-fab .mat-icon{background-repeat:no-repeat;display:inline-block;fill:currentColor;height:37px;width:24px}"]
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
        SubCategoryComponent.prototype.expendMore = function (e, field) {
            e.preventDefault();
            this.onExpendMore.emit({ expand: true, field: field });
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
                template: "<div class=\"field-item\">\n    <mat-form-field class=\"form-field field-size\" [class]=\"!field.editable ? 'readonly' :'' \" appearance=\"outline\">\n        <mat-label>Label</mat-label>\n        <input type=\"text\" [readonly]=\"!field.editable\" matInput required [ngModelOptions]=\"{standalone: true}\"\n            [(ngModel)]=\"field.label\" placeholder=\"\" />\n    </mat-form-field>\n\n    <mat-form-field class=\"form-field field-size\" [class]=\"!field.editable ? 'readonly' :'' \" appearance=\"outline\">\n        <mat-label>Cl\u00E9 du champ</mat-label>\n        <input type=\"text\" [readonly]=\"!field.editable\" matInput required [ngModelOptions]=\"{standalone: true}\"\n            [(ngModel)]=\"field.key\" placeholder=\"\" />\n    </mat-form-field>\n\n    <mat-form-field class=\"form-field field-size\" appearance=\"outline\">\n        <mat-label>Type</mat-label>\n        <mat-select [disabled]=\"!field.editable\" [(ngModel)]=\"field.type\" required [ngModelOptions]=\"{standalone: true}\"\n            (ngModelChange)=\"changeType(field.type,i,j)\">\n            <mat-option value=\"text\">Text</mat-option>\n            <mat-option value=\"radio\">Radio</mat-option>\n            <mat-option value=\"select\">Selecteur</mat-option>\n            <mat-option value=\"checkbox\">Checkbox</mat-option>\n            <mat-option value=\"email\">Email</mat-option>\n            <mat-option value=\"password\">Password</mat-option>\n            <mat-option value=\"date\">Date</mat-option>\n            <mat-option value=\"phone\">Phone</mat-option>\n        </mat-select>\n    </mat-form-field>\n    <ng-container [ngSwitch]=\"field.type\">\n        <div *ngSwitchCase=\"'checkbox'\" class=\"flex-auto w-30 field-size\">\n            <mat-checkbox [(ngModel)]=\"field.value\" [ngModelOptions]=\"{standalone: true}\">Valeur\n            </mat-checkbox>\n        </div>\n        <mat-form-field *ngSwitchCase=\"['select', 'radio'].includes(field.type) ? field.type : !field.type\"\n            class=\"flex-auto w-30 field-size\" appearance=\"outline\">\n            <mat-label> Valeur </mat-label>\n            <mat-chip-list #chipList aria-label=\"Video keywords; let index=index\" multiple>\n                <mat-chip style=\"min-height: 25px;\" *ngFor=\"let option of field.defaultValue\" [selected]=\"option\"\n                    [value]=\"option\" [removable]=\"true\" (removed)=\"removeKeyword(option, i,j)\">\n                    {{option}}\n                    <mat-icon matChipRemove>cancel</mat-icon>\n                </mat-chip>\n                <input #chipsInput placeholder=\"add...\" [matChipInputFor]=\"chipList\" [matChipInputAddOnBlur]=\"true\"\n                    (matChipInputTokenEnd)=\"addKeywordFromInput($event, i,j)\"\n                    [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\" (keyup)=\"keyUp($event,i,j)\">\n            </mat-chip-list>\n        </mat-form-field>\n        <mat-form-field *ngSwitchDefault class=\"form-field field-size\" appearance=\"outline\">\n            <mat-label>Valeur</mat-label>\n            <input [type]=\"field.type\" matInput [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"field.defaultValue\"\n                placeholder=\"\">\n        </mat-form-field>\n    </ng-container>\n\n    <mat-checkbox class=\"form-field\" [(ngModel)]=\"field.isMandatory\" [ngModelOptions]=\"{standalone: true}\">\n        obligatoire\n    </mat-checkbox>\n    <button class=\"transparent-button\" [disabled]=\"field.subLevel>2 || !field.editable\"\n        [style.opacity]=\"(field.subLevel>2 || !field.editable) ? 0 :1\" mat-mini-fab color=\"success\"\n        (click)='addNewSubLevelField($event)'>\n        <mat-icon>device_hub</mat-icon>\n    </button>\n\n    <button class=\"expand-button\" [disabled]=\"!(field.forms && field.forms.length>0)\"\n        [style.opacity]=\"field.forms && field.forms.length>0 ? 1 :0\" mat-mini-fab color=\"primary\"\n        (click)=\"expendMore($event,field)\">\n        <mat-icon *ngIf=\"!field.expandMore\">expand_less</mat-icon>\n        <mat-icon *ngIf=\"field.expandMore\">expand_more</mat-icon>\n    </button>\n</div>\n\n<!-- <div class=\"add-button-container\" *ngIf=\"length-1===j\">\n    <button style=\"margin:10px auto\" [disabled]=\"length-1!==j\" [style.opacity]=\"length-1===j ? 1 :0\" mat-raised-button\n        color=\"primary\" (click)='addNewField($event,i)'>\n        <mat-icon>add_box</mat-icon>\n        <span>Ajouter un champ</span>\n    </button>\n</div> -->\n\n<ng-content select=\".child\"></ng-content>",
                styles: [".container{max-width:98%;margin:50px auto auto;padding-bottom:50px}.container .action{width:100%;display:flex;justify-content:space-between}.input-category-name{font-size:15px;font-weight:500}.example-full-width{width:100%}.field-item{display:flex;justify-content:space-between;align-items:center;width:100%}.field-item .button-action{background-color:#6fe8d7;height:100%;margin:auto 15px auto auto;display:flex}.field-item .button-action button{box-shadow:none;background-color:transparent;color:#fff}.field-action{width:10%}.field-size{width:90%;margin:auto 2% auto auto}hr{margin:50px 0}::ng-deep .mat-form-field-appearance-fill .mat-form-field-flex{background-color:#fff}.category-action{display:flex;width:100%}.delete-field{margin:auto 2%}.radio-group .mat-radio-button{margin-right:10px}.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary{background-color:#3f51b5;color:#fff;min-height:20px;font-size:10px}.move-icons{cursor:move}.category-item{display:flex;align-items:baseline;width:100%;border:1px solid #dce4e9;border-radius:8px}::ng-deep mat-checkbox.form-field .mat-checkbox-checkmark-path{stroke:#000!important}::ng-deep .readonly.mat-form-field-appearance-outline .mat-form-field-outline{color:transparent!important}.field-content{width:100%}.cdk-drag-preview{box-sizing:border-box;border-radius:4px;box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.cdk-drag-placeholder{opacity:0}.cdk-drag-animating,.example-list.cdk-drop-list-dragging .category-item:not(.cdk-drag-placeholder){transition:transform 250ms cubic-bezier(0,0,.2,1)}::ng-deep .mat-form-field-appearance-fill.mat-form-field-disabled .mat-form-field-flex{background-color:rgba(0,0,0,.02);margin-bottom:-20px}::ng-deep .mat-select{padding:0}.add-button-container{background:no-repeat padding-box #fff;border:1px dashed #dce4e9;border-radius:8px;margin-top:10px;padding:10px;display:flex;justify-content:space-between;width:98%;margin-left:0;margin-bottom:22px}.add-button-container button{display:flex;align-items:center;background-color:transparent;border:none;margin:auto;cursor:pointer;font:17px/26px Nexa Text;letter-spacing:0;color:#c2c8d5;box-shadow:none}.expand-button{color:#5a607f;background-color:transparent;box-shadow:none}.expand-button .material-icons{font-size:48px;margin-top:-20px;margin-right:15px}.transparent-button{background-color:transparent;box-shadow:none;width:40px;padding:0;margin:0;min-width:auto}"]
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
                contactId: ['', forms.Validators.required],
                templateId: [0, forms.Validators.required]
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
                dragDrop.moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
            }
            else {
                dragDrop.transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
            }
        };
        OnboardingFormComponent.prototype.ingoreDefaultAction = function (e) {
            e.preventDefault();
        };
        OnboardingFormComponent.ctorParameters = function () { return [
            { type: OnboardingService },
            { type: forms.FormBuilder },
            { type: router.ActivatedRoute }
        ]; };
        OnboardingFormComponent = __decorate([
            core.Component({
                selector: 'lib-onboarding-form',
                template: "<div class=\"container\">\n    <div class=\"content\">\n        <h3>Nouvel Onboarding</h3>\n        <p class=\"sub-title\">Cr\u00E9ez ici, l\u2019onboarding de votre nouveau collaborateur.</p>\n        <form [formGroup]=\"onboardingForm\">\n            <div class=\"select-contact\" *ngIf=\"!isSelected\">\n                <h3>\n                    Onboarding de votre nouveau collaborateur\n                </h3>\n                <p>S\u00E9lectionnez le nom de votre nouveau collaborateur afin de pouvoir d\u00E9marrer son onboarding.</p>\n                <mat-form-field class=\"example-full-width\" appearance=\"outline\">\n                    <mat-label>Contact</mat-label>\n                    <mat-select formControlName=\"contactId\" required (selectionChange)=\"onSelectUser($event.value)\">\n                        <mat-option *ngFor=\"let contact of contacts\" [value]=\"contact.Id\">{{contact.Name}}</mat-option>\n                    </mat-select>\n                </mat-form-field>\n                <mat-form-field class=\"example-full-width\" appearance=\"outline\">\n                    <mat-label>Template</mat-label>\n                    <mat-select formControlName=\"templateId\" required (selectionChange)=\"onSelect($event.value)\">\n                        <mat-option *ngFor=\"let template of templates\" [value]=\"template._id\">{{template.Name}}\n                        </mat-option>\n                    </mat-select>\n                </mat-form-field>\n\n                <button\n                    [style.opacity]=\"(onboardingForm.get('ContactId')?.value==='' || onboardingForm.get('templateId')?.value=='') ? 0.4 : 1\"\n                    [disabled]=\"onboardingForm.get('ContactId')?.value==='' || onboardingForm.get('templateId')?.value==''\"\n                    mat-raised-button color=\"primary\" (click)='onSelectContactTemplate()'>\n                    {{id !== \"0\" ? 'Modifier l\u2019onboarding' :'D\u00E9marrer l\u2019onboarding'}}\n                </button>\n            </div>\n\n            <div class=\"category\" *ngIf=\"isSelected\">\n                <div cdkDropListGroup>\n                    <div class=\"example-list mt-20 onboarding-mat-stepper\" #parentList=\"cdkDropList\" cdkDropList\n                        [cdkDropListData]=\"categories\" (cdkDropListDropped)=\"drop($event)\">\n                        <mat-horizontal-stepper [linear]=\"true\" #stepper labelPosition=\"bottom\">\n                            <mat-step *ngFor=\"let category of categories;  let i=index\" [stepControl]=\"onboardingForm\"\n                                [label]=\"category.name\" class=\"category-item\">\n                                <div class=\"field-content\">\n                                    <div class=\"field-item\">\n                                        <h2>{{category.name}}</h2>\n                                    </div>\n\n                                    <div #childList=\"cdkDropList\" *ngIf=\"category.forms\"\n                                        [cdkDropListData]=\"category.forms\" cdkDropList\n                                        (cdkDropListDropped)=\"drop($event)\">\n                                        <ng-container>\n                                            <div class=\"field\" *ngFor=\"let field of category.forms;let j=index\" cdkDrag>\n                                                <lib-sub-onboarding [field]=\"field\" [length]=\"category?.forms?.length\"\n                                                    [i]=\"i\" [j]=\"j\"\n                                                    (onAddKeywordFromInput)=\"addKeywordFromInput($event.event,i,j)\"\n                                                    (onKeyPress)=\"onKeyPress($event.event,i,j)\"\n                                                    (onAddNewField)=\"onAddNewField(i)\"\n                                                    (onRemoveField)=\"onRemoveField(i,j)\"\n                                                    (onChangeType)=\"onChangeType(field.type,i,j)\"\n                                                    (onRemoveKeyword)=\"removeKeyword($event.event,i,j)\"\n                                                    (onAddNewSubLevelField)=\"onAddNewSubLevelField(i,j)\"\n                                                    (onExpendMore)=\"onExpendMore(null,i,j)\">\n                                                    <div class=\"child\">\n                                                        <div #childList=\"cdkDropList\" *ngIf=\"field.forms\"\n                                                            [cdkDropListData]=\"field.forms\" cdkDropList\n                                                            (cdkDropListDropped)=\"drop($event)\">\n                                                            <div class=\"field\"\n                                                                *ngFor=\"let child of field.forms;let k=index\" cdkDrag>\n                                                                <lib-sub-onboarding [field]=\"child\"\n                                                                    [length]=\"field?.forms?.length\" [i]=\"j\" [j]=\"k\"\n                                                                    (onAddKeywordFromInput)=\"addKeywordFromInput($event.event,i,j,k)\"\n                                                                    (onKeyPress)=\"onKeyPress($event.event,i,j,k)\"\n                                                                    (onAddNewField)=\"onAddNewField(i, j)\"\n                                                                    (onRemoveField)=\"onRemoveField(i,j,k)\"\n                                                                    (onChangeType)=\"onChangeType(child.type,i,j,k)\"\n                                                                    (onRemoveKeyword)=\"removeKeyword($event.event,i,j,k)\"\n                                                                    (onAddNewSubLevelField)=\"onAddNewSubLevelField(i,j,k)\"\n                                                                    (onExpendMore)=\"onExpendMore(null,i,j,k)\">\n                                                                    <div class=\"child\">\n                                                                        <div #childList=\"cdkDropList\"\n                                                                            *ngIf=\"child.forms\"\n                                                                            [cdkDropListData]=\"child.forms\" cdkDropList\n                                                                            (cdkDropListDropped)=\"drop($event)\">\n                                                                            <div class=\"field\"\n                                                                                *ngFor=\"let c2 of child.forms;let l=index\"\n                                                                                cdkDrag>\n                                                                                <lib-sub-onboarding [field]=\"c2\"\n                                                                                    [length]=\"child?.forms?.length\"\n                                                                                    [i]=\"k\" [j]=\"l\"\n                                                                                    (onAddKeywordFromInput)=\"addKeywordFromInput($event.event,i,j,k,l)\"\n                                                                                    (onKeyPress)=\"onKeyPress($event.event,i,j,k,l)\"\n                                                                                    (onAddNewField)=\"onAddNewField(i,j,k)\"\n                                                                                    (onRemoveField)=\"onRemoveField(i,j,k,l)\"\n                                                                                    (onChangeType)=\"onChangeType(c2.type,i,j,k,l)\"\n                                                                                    (onRemoveKeyword)=\"removeKeyword($event.event,i,j,k,l)\"\n                                                                                    (onAddNewSubLevelField)=\"onAddNewSubLevelField(i,j,k,l)\"\n                                                                                    (onExpendMore)=\"onExpendMore(null,i,j,k,l)\">\n                                                                                    <div class=\"child\">\n                                                                                    </div>\n                                                                                </lib-sub-onboarding>\n                                                                            </div>\n                                                                        </div>\n                                                                    </div>\n                                                                </lib-sub-onboarding>\n                                                            </div>\n                                                        </div>\n                                                    </div>\n                                                </lib-sub-onboarding>\n                                            </div>\n                                        </ng-container>\n\n                                    </div>\n                                    <button mat-raised-button style=\"float: left;\" class=\"next-step\" color=\"primary\"\n                                        matStepperPrevious>Pr\u00E9c\u00E9dent</button>\n                                    <button mat-raised-button class=\"next-step\" color=\"primary\"\n                                        matStepperNext>Suivant</button>\n                                </div>\n\n                            </mat-step>\n                            <mat-step>\n                                <ng-template matStepLabel>Review</ng-template>\n                                <h5>You are now done.</h5>\n                                <div>\n                                    <button mat-raised-button color=\"primary\" matStepperPrevious>Back</button> &nbsp;\n                                    &nbsp;\n                                    <button mat-raised-button color=\"accent\" type=\"submit\">Submit</button> &nbsp; &nbsp;\n                                    <button mat-raised-button color=\"warn\" (click)=\"stepper.reset()\">Reset</button>\n                                </div>\n                            </mat-step>\n                            <!-- <ng-template matStepperIcon=\"phone\">\n                              <mat-icon>phone</mat-icon>\n                          </ng-template> -->\n\n                        </mat-horizontal-stepper>\n                        <!-- <div class=\"category-item\" *ngFor=\"let category of categories;  let i=index\" cdkDrag>\n                            <div class=\"field-content\">\n                                <div class=\"field-item\">\n                                    <h2>{{category.name}}</h2>\n                                </div>\n\n                                <div #childList=\"cdkDropList\" *ngIf=\"category.forms\" [cdkDropListData]=\"category.forms\"\n                                    cdkDropList (cdkDropListDropped)=\"drop($event)\">\n                                    <ng-container>\n                                        <div class=\"field\" *ngFor=\"let field of category.forms;let j=index\" cdkDrag>\n                                            <lib-sub-onboarding [field]=\"field\" [length]=\"category?.forms?.length\"\n                                                [i]=\"i\" [j]=\"j\"\n                                                (onAddKeywordFromInput)=\"addKeywordFromInput($event.event,i,j)\"\n                                                (onKeyPress)=\"onKeyPress($event.event,i,j)\"\n                                                (onAddNewField)=\"onAddNewField(i)\" (onRemoveField)=\"onRemoveField(i,j)\"\n                                                (onChangeType)=\"onChangeType(field.type,i,j)\"\n                                                (onRemoveKeyword)=\"removeKeyword($event.event,i,j)\"\n                                                (onAddNewSubLevelField)=\"onAddNewSubLevelField(i,j)\"\n                                                (onExpendMore)=\"onExpendMore(null,i,j)\">\n                                                <div class=\"child\">\n                                                    <div #childList=\"cdkDropList\" *ngIf=\"field.forms\"\n                                                        [cdkDropListData]=\"field.forms\" cdkDropList\n                                                        (cdkDropListDropped)=\"drop($event)\">\n                                                        <div class=\"field\" *ngFor=\"let child of field.forms;let k=index\"\n                                                            cdkDrag>\n                                                            <lib-sub-onboarding [field]=\"child\"\n                                                                [length]=\"field?.forms?.length\" [i]=\"j\" [j]=\"k\"\n                                                                (onAddKeywordFromInput)=\"addKeywordFromInput($event.event,i,j,k)\"\n                                                                (onKeyPress)=\"onKeyPress($event.event,i,j,k)\"\n                                                                (onAddNewField)=\"onAddNewField(i, j)\"\n                                                                (onRemoveField)=\"onRemoveField(i,j,k)\"\n                                                                (onChangeType)=\"onChangeType(child.type,i,j,k)\"\n                                                                (onRemoveKeyword)=\"removeKeyword($event.event,i,j,k)\"\n                                                                (onAddNewSubLevelField)=\"onAddNewSubLevelField(i,j,k)\"\n                                                                (onExpendMore)=\"onExpendMore(null,i,j,k)\">\n                                                                <div class=\"child\">\n                                                                    <div #childList=\"cdkDropList\" *ngIf=\"child.forms\"\n                                                                        [cdkDropListData]=\"child.forms\" cdkDropList\n                                                                        (cdkDropListDropped)=\"drop($event)\">\n                                                                        <div class=\"field\"\n                                                                            *ngFor=\"let c2 of child.forms;let l=index\"\n                                                                            cdkDrag>\n                                                                            <lib-sub-onboarding [field]=\"c2\"\n                                                                                [length]=\"child?.forms?.length\" [i]=\"k\"\n                                                                                [j]=\"l\"\n                                                                                (onAddKeywordFromInput)=\"addKeywordFromInput($event.event,i,j,k,l)\"\n                                                                                (onKeyPress)=\"onKeyPress($event.event,i,j,k,l)\"\n                                                                                (onAddNewField)=\"onAddNewField(i,j,k)\"\n                                                                                (onRemoveField)=\"onRemoveField(i,j,k,l)\"\n                                                                                (onChangeType)=\"onChangeType(c2.type,i,j,k,l)\"\n                                                                                (onRemoveKeyword)=\"removeKeyword($event.event,i,j,k,l)\"\n                                                                                (onAddNewSubLevelField)=\"onAddNewSubLevelField(i,j,k,l)\"\n                                                                                (onExpendMore)=\"onExpendMore(null,i,j,k,l)\">\n                                                                                <div class=\"child\">\n                                                                                </div>\n                                                                            </lib-sub-onboarding>\n                                                                        </div>\n                                                                    </div>\n                                                                </div>\n                                                            </lib-sub-onboarding>\n                                                        </div>\n                                                    </div>\n                                                </div>\n                                            </lib-sub-onboarding>\n                                        </div>\n                                    </ng-container>\n\n                                </div>\n\n                            </div>\n                        </div> -->\n                    </div>\n\n                </div>\n                <!-- <div class=\"action\">\n                    <a [routerLink]=\"[service.mainPath]\" role=\"button\" mat-raised-button color=\"basic\">Liste des\n                        onboarding</a>\n                    <button mat-raised-button color=\"basic\" type=\"submit\">Valider</button>\n                </div> -->\n            </div>\n\n        </form>\n    </div>\n</div>",
                styles: ["::ng-deep .onboarding-mat-stepper .mat-horizontal-stepper-header-container{display:none!important}.container{background:no-repeat padding-box #f4f7f9;width:100%;height:auto;min-height:100%}.container .content{width:99%;height:100%;padding-left:1%}.container .content h3{font:bold 32px/30px Nexa Text;letter-spacing:0;color:#171f26;padding-top:20px}.container .content p{font:20px/26px Nexa Text;letter-spacing:0;color:#171f26}.container .content p.sub-title{max-width:300px}.container .content .select-contact{max-width:70%;margin:5% auto auto;background:no-repeat padding-box #fff;border:1px solid #dce4e9;border-radius:6px;padding:5%}.container .content .select-contact button{float:right;text-align:center;border:1px solid #543cb6;border-radius:7px;padding:.7em 2em .5em;display:flex;align-items:center;background-color:transparent;font:bold 15px/17px Nexa;letter-spacing:0;color:#543cb6;align-self:flex-end}.container .content .category .onboarding-mat-stepper mat-horizontal-stepper .next-step{float:right}.container .action{width:100%;display:flex;justify-content:space-between}.input-category-name{font-size:15px;font-weight:500}.example-full-width{width:100%}.field-item{display:flex;justify-content:space-between;align-items:center}.field-action{width:10%}.field-size{width:90%;margin:auto 2% auto auto}hr{margin:50px 0}::ng-deep .mat-form-field-appearance-fill .mat-form-field-flex{background-color:#fff}.category-action{display:flex;width:100%}.delete-field{margin:auto 2%}.radio-group .mat-radio-button{margin-right:10px}.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary{background-color:#3f51b5;color:#fff;min-height:20px;font-size:10px}.move-icons{cursor:move}.category-item{display:flex;align-items:baseline;width:100%}.field-content{width:100%}.cdk-drag-preview{box-sizing:border-box;border-radius:4px;box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.cdk-drag-placeholder{opacity:0}.cdk-drag-animating,.example-list.cdk-drop-list-dragging .category-item:not(.cdk-drag-placeholder){transition:transform 250ms cubic-bezier(0,0,.2,1)}.child{margin-left:5%}"]
            })
        ], OnboardingFormComponent);
        return OnboardingFormComponent;
    }());

    var SubOnboaringComponent = /** @class */ (function () {
        function SubOnboaringComponent() {
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
        __decorate([
            core.Input()
        ], SubOnboaringComponent.prototype, "field", void 0);
        __decorate([
            core.Input()
        ], SubOnboaringComponent.prototype, "length", void 0);
        __decorate([
            core.Input()
        ], SubOnboaringComponent.prototype, "i", void 0);
        __decorate([
            core.Input()
        ], SubOnboaringComponent.prototype, "j", void 0);
        __decorate([
            core.Output()
        ], SubOnboaringComponent.prototype, "onAddKeywordFromInput", void 0);
        __decorate([
            core.Output()
        ], SubOnboaringComponent.prototype, "onKeyPress", void 0);
        __decorate([
            core.Output()
        ], SubOnboaringComponent.prototype, "onDrop", void 0);
        __decorate([
            core.Output()
        ], SubOnboaringComponent.prototype, "onAddNewField", void 0);
        __decorate([
            core.Output()
        ], SubOnboaringComponent.prototype, "onRemoveField", void 0);
        __decorate([
            core.Output()
        ], SubOnboaringComponent.prototype, "onChangeType", void 0);
        __decorate([
            core.Output()
        ], SubOnboaringComponent.prototype, "onRemoveKeyword", void 0);
        __decorate([
            core.Output()
        ], SubOnboaringComponent.prototype, "onAddNewSubLevelField", void 0);
        __decorate([
            core.Output()
        ], SubOnboaringComponent.prototype, "onExpendMore", void 0);
        SubOnboaringComponent = __decorate([
            core.Component({
                selector: 'lib-sub-onboarding',
                template: "<div class=\"field-item\">\n    <ng-container [ngSwitch]=\"field.type\">\n        <div *ngSwitchCase=\"'checkbox'\" class=\"flex-auto w-30 field-size\">\n            <mat-checkbox [(ngModel)]=\"field.value\" [required]=\"field.isMandatory\"\n                [ngModelOptions]=\"{standalone: true}\">\n                {{field.label}}\n            </mat-checkbox>\n        </div>\n        <mat-form-field *ngSwitchCase=\"'radio'\" class=\"flex-auto w-30 field-size\">\n            <mat-label> {{field.label}} </mat-label>\n            <mat-radio-group class=\"form-field radio-group field-size\" [(ngModel)]=\"field.value\"\n                aria-label=\"Select an option\" *ngIf=\"field.type==='radio'\">\n                <mat-radio-button *ngFor=\"let opt of field.defaultValue\" [value]=\"opt\">{{opt}}</mat-radio-button>\n            </mat-radio-group>\n        </mat-form-field>\n        <mat-form-field *ngSwitchCase=\"'select'\" class=\"flex-auto w-30 field-size\">\n            <mat-label> {{field.label}} </mat-label>\n            <mat-select [(ngModel)]=\"field.value\" [ngModelOptions]=\"{standalone: true}\" [required]=\"field.isMandatory\">\n                <mat-option *ngFor=\"let opt of field.defaultValue\" [value]=\"opt\">{{opt}}</mat-option>\n            </mat-select>\n        </mat-form-field>\n        <mat-form-field *ngSwitchDefault class=\"form-field field-size\" appearance=\"fill\">\n            <mat-label>{{field.label}}</mat-label>\n            <input [type]=\"field.type\" [required]=\"field.isMandatory\" matInput [ngModelOptions]=\"{standalone: true}\"\n                [(ngModel)]=\"field.value\" placeholder=\"\">\n        </mat-form-field>\n    </ng-container>\n</div>\n\n<ng-content select=\".child\"></ng-content>",
                styles: [".container{max-width:98%;margin:50px auto auto;padding-bottom:50px}.container .action{width:100%;display:flex;justify-content:space-between}.input-category-name{font-size:15px;font-weight:500}.example-full-width{width:100%}.field-item{display:flex;justify-content:space-between;align-items:center}.field-action{width:10%}.field-size{width:90%;margin:auto 2% auto auto}hr{margin:50px 0}::ng-deep .mat-form-field-appearance-fill .mat-form-field-flex{background-color:#fff}.category-action{display:flex;width:100%}.delete-field{margin:auto 2%}.radio-group .mat-radio-button{margin-right:10px}.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary{background-color:#3f51b5;color:#fff;min-height:20px;font-size:10px}.move-icons{cursor:move}.category-item{display:flex;align-items:baseline;width:100%}.field-content{width:100%}.cdk-drag-preview{box-sizing:border-box;border-radius:4px;box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.cdk-drag-placeholder{opacity:0}.cdk-drag-animating,.example-list.cdk-drop-list-dragging .category-item:not(.cdk-drag-placeholder){transition:transform 250ms cubic-bezier(0,0,.2,1)}::ng-deep .mat-form-field-appearance-fill.mat-form-field-disabled .mat-form-field-flex{background-color:rgba(0,0,0,.02);margin-bottom:-20px}"]
            })
        ], SubOnboaringComponent);
        return SubOnboaringComponent;
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
                    dialog.MatDialogModule,
                    stepper.MatStepperModule
                ],
                providers: [OnboardingService],
                exports: [
                    OnboardingComponent,
                    http.HttpClientModule,
                    CreateProfileTemplateComponent,
                    ProfileListComponent,
                    OnboardingComponent,
                    router.RouterModule
                ]
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
    exports.ɵa = OnboardingFormComponent;
    exports.ɵb = MaterialElevationDirective;
    exports.ɵc = SubCategoryComponent;
    exports.ɵd = SubOnboaringComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=onboarding.umd.js.map
