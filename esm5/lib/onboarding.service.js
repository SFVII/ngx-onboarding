import { __awaiter, __generator } from "tslib";
import { HttpHeaders } from '@angular/common/http';
import { Inject, Injectable, EventEmitter } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { downLoadFile } from './global.library';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
var OnboardingService = /** @class */ (function () {
    function OnboardingService(config, http) {
        this.http = http;
        this.canExit$ = new Subject();
        this.token = new BehaviorSubject(null);
        this._token = this.token.asObservable();
        this.mediaTokenSubject = new BehaviorSubject(null);
        this._mediaTokenSubject = this.mediaTokenSubject.asObservable();
        this.templates = new BehaviorSubject(null);
        this._templates = this.templates.asObservable();
        this.currentTemplate = new BehaviorSubject(null);
        this._currentTemplate = this.currentTemplate.asObservable();
        this.currentOnboarding = new BehaviorSubject(null);
        this._currentOnboarding = this.currentOnboarding.asObservable();
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
    OnboardingService.prototype.getCookie = function (name) {
        var ca = document.cookie.split(';');
        var caLen = ca.length;
        var cookieName = name + "=";
        var c;
        for (var i = 0; i < caLen; i += 1) {
            c = ca[i].replace(/^\s+/g, '');
            if (c.indexOf(cookieName) == 0) {
                return c.substring(cookieName.length, c.length);
            }
        }
    };
    /**
   * @private
   * Generate Header for backend call
   */
    OnboardingService.prototype.buildHeaders = function () {
        var _this = this;
        this._token.subscribe(function (token) {
            if (token) {
                var bearer = 'Bearer ' + token;
                _this.header = new HttpHeaders({
                    'Authorization': bearer
                });
            }
            else {
                var token_1 = _this.getCookie('authentication');
                var bearer = 'Bearer ' + token_1;
                _this.header = new HttpHeaders({
                    'Authorization': bearer
                });
            }
        });
        this._mediaTokenSubject.subscribe(function (token) {
            if (token) {
                _this.mediaToken = token;
            }
            else {
                _this.mediaToken = _this.getCookie('media-token');
            }
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
            this.mediaToken = config.mediaToken;
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
                    if (user.mediaToken) {
                        _this.mediaTokenSubject.next(user.mediaToken);
                    }
                    _this.user = user;
                });
            }
            else if (config.lang) {
                this.locale = config.lang;
                this.lang.next(this.locale);
                this.user = {
                    lang: config.lang,
                    token: config.token,
                    mediaToken: config.mediaToken
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
    OnboardingService.prototype.getBuffer = function (endpoint) {
        return this.http.get(endpoint, { responseType: 'arraybuffer' });
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
    OnboardingService.prototype.downloadAttachment = function (url, contentType, name) {
        return __awaiter(this, void 0, void 0, function () {
            var path;
            return __generator(this, function (_a) {
                path = this.endpoint.split('onboarding')[0] + "cases/getfile/sf?path=" + url + "&token=" + this.mediaToken;
                this.getBuffer(path)
                    .subscribe(function (response) { return downLoadFile(response, (contentType), name); });
                return [2 /*return*/];
            });
        });
    };
    // Create collab
    OnboardingService.prototype.createContact = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var options = {
                            headers: _this.header
                        };
                        _this.http.post(_this.endpoint + "/contact", data, options)
                            .subscribe(function (data) {
                            resolve({ data: data, success: true });
                        }, function (error) { return resolve({ error: error, success: false }); });
                    })];
            });
        });
    };
    OnboardingService.ɵfac = function OnboardingService_Factory(t) { return new (t || OnboardingService)(i0.ɵɵinject('__NgxOnboarding__'), i0.ɵɵinject(i1.HttpClient)); };
    OnboardingService.ɵprov = i0.ɵɵdefineInjectable({ token: OnboardingService, factory: OnboardingService.ɵfac });
    return OnboardingService;
}());
export { OnboardingService };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(OnboardingService, [{
        type: Injectable
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: ['__NgxOnboarding__']
            }] }, { type: i1.HttpClient }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib25ib2FyZGluZy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vb25ib2FyZGluZy8iLCJzb3VyY2VzIjpbImxpYi9vbmJvYXJkaW5nLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBYyxXQUFXLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUMvRCxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakUsT0FBTyxFQUFFLGVBQWUsRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFaEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGtCQUFrQixDQUFDOzs7QUFFaEQ7SUEwQkUsMkJBQXlDLE1BQTJCLEVBQVUsSUFBZ0I7UUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTtRQXhCOUYsYUFBUSxHQUFxQixJQUFJLE9BQU8sRUFBVyxDQUFDO1FBQzVDLFVBQUssR0FBNEIsSUFBSSxlQUFlLENBQVMsSUFBSSxDQUFDLENBQUM7UUFDbkUsV0FBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDbkMsc0JBQWlCLEdBQTRCLElBQUksZUFBZSxDQUFTLElBQUksQ0FBQyxDQUFDO1FBQy9FLHVCQUFrQixHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUM1RCxjQUFTLEdBQXlCLElBQUksZUFBZSxDQUFNLElBQUksQ0FBQyxDQUFDO1FBQ2pFLGVBQVUsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQzNDLG9CQUFlLEdBQXlCLElBQUksZUFBZSxDQUFNLElBQUksQ0FBQyxDQUFDO1FBQ3ZFLHFCQUFnQixHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDdkQsc0JBQWlCLEdBQXlCLElBQUksZUFBZSxDQUFNLElBQUksQ0FBQyxDQUFDO1FBQ3pFLHVCQUFr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RUQsZ0JBQWdCO0lBRUgseUNBQWEsR0FBMUIsVUFBMkIsSUFBUzs7OztnQkFDbEMsc0JBQU8sSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTTt3QkFDakMsSUFBTSxPQUFPLEdBQVE7NEJBQ25CLE9BQU8sRUFBRSxLQUFJLENBQUMsTUFBTTt5QkFDckIsQ0FBQzt3QkFDRixLQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBSSxLQUFJLENBQUMsUUFBUSxhQUFVLEVBQUUsSUFBSSxFQUFFLE9BQU8sQ0FBQzs2QkFDdEQsU0FBUyxDQUFDLFVBQUMsSUFBUzs0QkFDbkIsT0FBTyxDQUFDLEVBQUUsSUFBSSxNQUFBLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7d0JBQ25DLENBQUMsRUFBRSxVQUFBLEtBQUssSUFBSSxPQUFBLE9BQU8sQ0FBQyxFQUFFLEtBQUssT0FBQSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFsQyxDQUFrQyxDQUFDLENBQUE7b0JBQ25ELENBQUMsQ0FBQyxFQUFDOzs7S0FDSjtzRkE1VVUsaUJBQWlCLGNBeUJSLG1CQUFtQjs2REF6QjVCLGlCQUFpQixXQUFqQixpQkFBaUI7NEJBUDlCO0NBb1ZDLEFBOVVELElBOFVDO1NBN1VZLGlCQUFpQjtrREFBakIsaUJBQWlCO2NBRDdCLFVBQVU7O3NCQTBCSSxNQUFNO3VCQUFDLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBIZWFkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgT25ib2FyZGluZ0ludGVyZmFjZSwgT25ib2FyZGluZ1VzZXIgfSBmcm9tICcuLi9pbnRlcmZhY2UvT25ib2FyZGluZ0ludGVyZmFjZSc7XHJcbmltcG9ydCB7IGRvd25Mb2FkRmlsZSB9IGZyb20gJy4vZ2xvYmFsLmxpYnJhcnknO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgT25ib2FyZGluZ1NlcnZpY2Uge1xyXG4gIGNhbkV4aXQkOiBTdWJqZWN0PGJvb2xlYW4+ID0gbmV3IFN1YmplY3Q8Ym9vbGVhbj4oKTtcclxuICBwcml2YXRlIHRva2VuOiBCZWhhdmlvclN1YmplY3Q8c3RyaW5nPiA9IG5ldyBCZWhhdmlvclN1YmplY3Q8c3RyaW5nPihudWxsKTtcclxuICBwcml2YXRlIF90b2tlbiA9IHRoaXMudG9rZW4uYXNPYnNlcnZhYmxlKCk7XHJcbiAgcHJpdmF0ZSBtZWRpYVRva2VuU3ViamVjdDogQmVoYXZpb3JTdWJqZWN0PHN0cmluZz4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0PHN0cmluZz4obnVsbCk7XHJcbiAgcHJpdmF0ZSBfbWVkaWFUb2tlblN1YmplY3QgPSB0aGlzLm1lZGlhVG9rZW5TdWJqZWN0LmFzT2JzZXJ2YWJsZSgpO1xyXG4gIHB1YmxpYyB0ZW1wbGF0ZXM6IEJlaGF2aW9yU3ViamVjdDxhbnk+ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxhbnk+KG51bGwpO1xyXG4gIHB1YmxpYyBfdGVtcGxhdGVzID0gdGhpcy50ZW1wbGF0ZXMuYXNPYnNlcnZhYmxlKCk7XHJcbiAgcHVibGljIGN1cnJlbnRUZW1wbGF0ZTogQmVoYXZpb3JTdWJqZWN0PGFueT4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0PGFueT4obnVsbCk7XHJcbiAgcHVibGljIF9jdXJyZW50VGVtcGxhdGUgPSB0aGlzLmN1cnJlbnRUZW1wbGF0ZS5hc09ic2VydmFibGUoKTtcclxuICBwdWJsaWMgY3VycmVudE9uYm9hcmRpbmc6IEJlaGF2aW9yU3ViamVjdDxhbnk+ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxhbnk+KG51bGwpO1xyXG4gIHB1YmxpYyBfY3VycmVudE9uYm9hcmRpbmcgPSB0aGlzLmN1cnJlbnRPbmJvYXJkaW5nLmFzT2JzZXJ2YWJsZSgpO1xyXG4gIHB1YmxpYyBvbmJvYXJkaW5nOiBCZWhhdmlvclN1YmplY3Q8YW55PiA9IG5ldyBCZWhhdmlvclN1YmplY3Q8YW55PihudWxsKTtcclxuICBwdWJsaWMgX29uYm9hcmRpbmcgPSB0aGlzLm9uYm9hcmRpbmcuYXNPYnNlcnZhYmxlKCk7XHJcbiAgcHVibGljIGNvbnRhY3RzOiBCZWhhdmlvclN1YmplY3Q8YW55PiA9IG5ldyBCZWhhdmlvclN1YmplY3Q8YW55PihudWxsKTtcclxuICBwdWJsaWMgX2NvbnRhY3RzID0gdGhpcy5jb250YWN0cy5hc09ic2VydmFibGUoKTtcclxuICBwdWJsaWMgYXV0aGVudGljYXRpb246IEV2ZW50RW1pdHRlcjxPbmJvYXJkaW5nVXNlcj4gPSBuZXcgRXZlbnRFbWl0dGVyPE9uYm9hcmRpbmdVc2VyPigpO1xyXG4gIHByaXZhdGUgaGVhZGVyOiBIdHRwSGVhZGVycztcclxuICBwdWJsaWMgbG9jYWxlOiBzdHJpbmc7XHJcbiAgcHJpdmF0ZSBlbmRwb2ludDogc3RyaW5nO1xyXG4gIHByaXZhdGUgbWVkaWFUb2tlbjogc3RyaW5nO1xyXG4gIHByaXZhdGUgdXNlcjogT25ib2FyZGluZ1VzZXI7XHJcbiAgcHVibGljIGxhbmcgPSBuZXcgQmVoYXZpb3JTdWJqZWN0KCcnKTtcclxuICBwdWJsaWMgX2F1dGg6IGJvb2xlYW47XHJcbiAgcHVibGljIG1haW5QYXRoOiBzdHJpbmcgPSBcIlwiXHJcbiAgY29uc3RydWN0b3IoQEluamVjdCgnX19OZ3hPbmJvYXJkaW5nX18nKSBjb25maWc6IE9uYm9hcmRpbmdJbnRlcmZhY2UsIHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkge1xyXG4gICAgdGhpcy5idWlsZEhlYWRlcnMoKTtcclxuICAgIHRoaXMuaW5pdEluc3RhbmNlKGNvbmZpZyk7XHJcbiAgfVxyXG5cclxuXHJcbiAgcHJpdmF0ZSBnZXRDb29raWUobmFtZTogc3RyaW5nKSB7XHJcbiAgICBsZXQgY2E6IEFycmF5PHN0cmluZz4gPSBkb2N1bWVudC5jb29raWUuc3BsaXQoJzsnKTtcclxuICAgIGxldCBjYUxlbjogbnVtYmVyID0gY2EubGVuZ3RoO1xyXG4gICAgbGV0IGNvb2tpZU5hbWUgPSBgJHtuYW1lfT1gO1xyXG4gICAgbGV0IGM6IHN0cmluZztcclxuXHJcbiAgICBmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgY2FMZW47IGkgKz0gMSkge1xyXG4gICAgICBjID0gY2FbaV0ucmVwbGFjZSgvXlxccysvZywgJycpO1xyXG4gICAgICBpZiAoYy5pbmRleE9mKGNvb2tpZU5hbWUpID09IDApIHtcclxuICAgICAgICByZXR1cm4gYy5zdWJzdHJpbmcoY29va2llTmFtZS5sZW5ndGgsIGMubGVuZ3RoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAqIEBwcml2YXRlXHJcbiAqIEdlbmVyYXRlIEhlYWRlciBmb3IgYmFja2VuZCBjYWxsXHJcbiAqL1xyXG4gIHByaXZhdGUgYnVpbGRIZWFkZXJzKCkge1xyXG4gICAgdGhpcy5fdG9rZW4uc3Vic2NyaWJlKCh0b2tlbjogc3RyaW5nKSA9PiB7XHJcbiAgICAgIGlmICh0b2tlbikge1xyXG4gICAgICAgIGNvbnN0IGJlYXJlcjogc3RyaW5nID0gJ0JlYXJlciAnICsgdG9rZW47XHJcbiAgICAgICAgdGhpcy5oZWFkZXIgPSBuZXcgSHR0cEhlYWRlcnMoe1xyXG4gICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiBiZWFyZXJcclxuICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zdCB0b2tlbiA9IHRoaXMuZ2V0Q29va2llKCdhdXRoZW50aWNhdGlvbicpO1xyXG4gICAgICAgIGNvbnN0IGJlYXJlcjogc3RyaW5nID0gJ0JlYXJlciAnICsgdG9rZW47XHJcbiAgICAgICAgdGhpcy5oZWFkZXIgPSBuZXcgSHR0cEhlYWRlcnMoe1xyXG4gICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiBiZWFyZXJcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG5cclxuICAgIH0pO1xyXG4gICAgdGhpcy5fbWVkaWFUb2tlblN1YmplY3Quc3Vic2NyaWJlKCh0b2tlbjogc3RyaW5nKSA9PiB7XHJcbiAgICAgIGlmICh0b2tlbikge1xyXG4gICAgICAgIHRoaXMubWVkaWFUb2tlbiA9IHRva2VuXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5tZWRpYVRva2VuID0gdGhpcy5nZXRDb29raWUoJ21lZGlhLXRva2VuJyk7XHJcbiAgICAgIH1cclxuXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG5cclxuICAvKipcclxuICogQHBhcmFtIGNvbmZpZ1xyXG4gKiBAcHJpdmF0ZVxyXG4gKiBJbml0aWFsaXplIERhdGEgZm9yIFVzZXIgSW5zdGFuY2VcclxuICovXHJcbiAgcHJpdmF0ZSBpbml0SW5zdGFuY2UoY29uZmlnOiBPbmJvYXJkaW5nSW50ZXJmYWNlKSB7XHJcbiAgICB0aGlzLl9hdXRoID0gISFjb25maWcuYXV0aDtcclxuICAgIGlmIChjb25maWcuZW5kcG9pbnQpIHtcclxuICAgICAgdGhpcy5lbmRwb2ludCA9IGNvbmZpZy5lbmRwb2ludDtcclxuICAgICAgdGhpcy5tZWRpYVRva2VuID0gY29uZmlnLm1lZGlhVG9rZW47XHJcbiAgICAgIGlmIChjb25maWcuYXV0aCkge1xyXG4gICAgICAgIHRoaXMuYXV0aGVudGljYXRpb24uc3Vic2NyaWJlKCh1c2VyOiBPbmJvYXJkaW5nVXNlcikgPT4ge1xyXG4gICAgICAgICAgaWYgKCF1c2VyLmxhbmcgJiYgY29uZmlnLmxhbmcpIHtcclxuICAgICAgICAgICAgdXNlci5sYW5nID0gY29uZmlnLmxhbmc7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB0aGlzLmxvY2FsZSA9IHVzZXIubGFuZztcclxuICAgICAgICAgIHRoaXMubGFuZy5uZXh0KHRoaXMubG9jYWxlKTtcclxuICAgICAgICAgIGlmICh1c2VyLnRva2VuKSB7XHJcbiAgICAgICAgICAgIHRoaXMudG9rZW4ubmV4dCh1c2VyLnRva2VuKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmICh1c2VyLm1lZGlhVG9rZW4pIHtcclxuICAgICAgICAgICAgdGhpcy5tZWRpYVRva2VuU3ViamVjdC5uZXh0KHVzZXIubWVkaWFUb2tlbik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB0aGlzLnVzZXIgPSB1c2VyO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IGVsc2UgaWYgKGNvbmZpZy5sYW5nKSB7XHJcbiAgICAgICAgdGhpcy5sb2NhbGUgPSBjb25maWcubGFuZztcclxuICAgICAgICB0aGlzLmxhbmcubmV4dCh0aGlzLmxvY2FsZSk7XHJcbiAgICAgICAgdGhpcy51c2VyID0ge1xyXG4gICAgICAgICAgbGFuZzogY29uZmlnLmxhbmcsXHJcbiAgICAgICAgICB0b2tlbjogY29uZmlnLnRva2VuLFxyXG4gICAgICAgICAgbWVkaWFUb2tlbjogY29uZmlnLm1lZGlhVG9rZW5cclxuICAgICAgICB9O1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChjb25maWcudG9rZW4pIHtcclxuICAgICAgICB0aGlzLnRva2VuLm5leHQoY29uZmlnLnRva2VuKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIG5ldyBFcnJvcignUGxlYXNlIHByb3ZpZGUgZW5kcG9pbnQnKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gKiBAcHJpdmF0ZVxyXG4gKiBHZW5lcmF0ZSBSYW5kb20gdW5pcSBJZCBmb3IgS29udmVyc28gSW5zdGFuY2VcclxuICovXHJcbiAgcHJpdmF0ZSBndWlkKCkge1xyXG4gICAgbGV0IHJhbmRvbSA9ICgpID0+IHtcclxuICAgICAgcmV0dXJuIE1hdGguZmxvb3IoKDEgKyBNYXRoLnJhbmRvbSgpKSAqIDB4MTAwMDApXHJcbiAgICAgICAgLnRvU3RyaW5nKDE2KVxyXG4gICAgICAgIC5zdWJzdHJpbmcoMSk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIHJhbmRvbSgpICsgcmFuZG9tKCkgKyAnLScgKyByYW5kb20oKSArICctJyArIHJhbmRvbSgpICsgJy0nICsgcmFuZG9tKCkgKyAnLScgKyByYW5kb20oKSArIHJhbmRvbSgpICsgcmFuZG9tKCk7XHJcbiAgfVxyXG5cclxuXHJcblxyXG4gIC8qKlxyXG4gKiBTZW5kIFByb2ZpbCBUbyBiYWNrZW5kXHJcbiAqIEBQb3N0IFByb2ZpbFxyXG4gKi9cclxuICBwdWJsaWMgYXN5bmMgY3JlYXRlUHJvZmlsKGRhdGE6IGFueSk6IFByb21pc2U8c3RyaW5nIHwgYW55PiB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICBjb25zdCBvcHRpb25zOiBhbnkgPSB7XHJcbiAgICAgICAgaGVhZGVyczogdGhpcy5oZWFkZXJcclxuICAgICAgfTtcclxuICAgICAgdGhpcy5odHRwLnBvc3QoYCR7dGhpcy5lbmRwb2ludH0vcHJvZmlsc2AsIGRhdGEsIG9wdGlvbnMpXHJcbiAgICAgICAgLnN1YnNjcmliZSgoZGF0YTogYW55KSA9PiB7XHJcbiAgICAgICAgICByZXNvbHZlKGRhdGEpO1xyXG4gICAgICAgIH0sICgpID0+IHtcclxuICAgICAgICAgIHJlc29sdmUoZmFsc2UpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgYXN5bmMgdXBkYXRlUHJvZmlsKGRhdGE6IGFueSk6IFByb21pc2U8c3RyaW5nIHwgYW55PiB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICBjb25zdCBvcHRpb25zOiBhbnkgPSB7XHJcbiAgICAgICAgaGVhZGVyczogdGhpcy5oZWFkZXJcclxuICAgICAgfTtcclxuICAgICAgdGhpcy5odHRwLnB1dChgJHt0aGlzLmVuZHBvaW50fS9wcm9maWxzYCwgZGF0YSwgb3B0aW9ucylcclxuICAgICAgICAuc3Vic2NyaWJlKChkYXRhOiBhbnkpID0+IHtcclxuICAgICAgICAgIHJlc29sdmUoZGF0YSk7XHJcbiAgICAgICAgfSwgKCkgPT4ge1xyXG4gICAgICAgICAgcmVzb2x2ZShmYWxzZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBhc3luYyBkZWxldGVQcm9maWwoaWQ6IGFueSk6IFByb21pc2U8c3RyaW5nIHwgYW55PiB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICBjb25zdCBvcHRpb25zOiBhbnkgPSB7XHJcbiAgICAgICAgaGVhZGVyczogdGhpcy5oZWFkZXJcclxuICAgICAgfTtcclxuICAgICAgdGhpcy5odHRwLmRlbGV0ZShgJHt0aGlzLmVuZHBvaW50fS9wcm9maWxzLyR7aWR9YCwgb3B0aW9ucylcclxuICAgICAgICAuc3Vic2NyaWJlKChkYXRhOiBhbnkpID0+IHtcclxuICAgICAgICAgIHJlc29sdmUoZGF0YSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG5cclxuICBwdWJsaWMgZ2V0QnVmZmVyKGVuZHBvaW50OiBzdHJpbmcpIHtcclxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KGVuZHBvaW50LCB7IHJlc3BvbnNlVHlwZTogJ2FycmF5YnVmZmVyJyB9KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBhc3luYyBnZXRQcm9maWwoaWQ6IGFueSk6IFByb21pc2U8c3RyaW5nIHwgYW55PiB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICBjb25zdCBvcHRpb25zOiBhbnkgPSB7XHJcbiAgICAgICAgaGVhZGVyczogdGhpcy5oZWFkZXJcclxuICAgICAgfTtcclxuICAgICAgdGhpcy5odHRwLmdldChgJHt0aGlzLmVuZHBvaW50fS9wcm9maWxzLyR7aWR9YCwgb3B0aW9ucylcclxuICAgICAgICAuc3Vic2NyaWJlKChkYXRhOiBhbnkpID0+IHtcclxuICAgICAgICAgIHRoaXMuY3VycmVudFRlbXBsYXRlLm5leHQoZGF0YSlcclxuICAgICAgICAgIHJlc29sdmUoZGF0YSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBhc3luYyBnZXRBbGxQcm9maWwoKTogUHJvbWlzZTxzdHJpbmcgfCBhbnk+IHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIGNvbnN0IG9wdGlvbnM6IGFueSA9IHtcclxuICAgICAgICBoZWFkZXJzOiB0aGlzLmhlYWRlclxyXG4gICAgICB9O1xyXG4gICAgICB0aGlzLmh0dHAuZ2V0KGAke3RoaXMuZW5kcG9pbnR9L3Byb2ZpbHNgLCBvcHRpb25zKVxyXG4gICAgICAgIC5zdWJzY3JpYmUoKGRhdGE6IGFueSkgPT4ge1xyXG4gICAgICAgICAgdGhpcy50ZW1wbGF0ZXMubmV4dChkYXRhKVxyXG4gICAgICAgICAgcmVzb2x2ZShkYXRhKTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuICBwdWJsaWMgYXN5bmMgZ2V0QWxsVGFncygpOiBQcm9taXNlPHN0cmluZyB8IGFueT4ge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgY29uc3Qgb3B0aW9uczogYW55ID0ge1xyXG4gICAgICAgIGhlYWRlcnM6IHRoaXMuaGVhZGVyXHJcbiAgICAgIH07XHJcbiAgICAgIHRoaXMuaHR0cC5nZXQoYCR7dGhpcy5lbmRwb2ludH0vdGFnc2AsIG9wdGlvbnMpXHJcbiAgICAgICAgLnN1YnNjcmliZSgoZGF0YTogYW55KSA9PiB7XHJcbiAgICAgICAgICByZXNvbHZlKGRhdGEpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gIHB1YmxpYyBhc3luYyBnZXRDb250YWN0cygpOiBQcm9taXNlPHN0cmluZyB8IGFueT4ge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgY29uc3Qgb3B0aW9uczogYW55ID0ge1xyXG4gICAgICAgIGhlYWRlcnM6IHRoaXMuaGVhZGVyXHJcbiAgICAgIH07XHJcbiAgICAgIHRoaXMuX2NvbnRhY3RzLnN1YnNjcmliZSgoY29udGFjdHMpID0+IHtcclxuICAgICAgICBpZiAoIWNvbnRhY3RzKSB7XHJcbiAgICAgICAgICB0aGlzLmh0dHAuZ2V0KGAke3RoaXMuZW5kcG9pbnQuc3BsaXQoJy9vbmJvYXJkaW5nJylbMF19L2NvbnRhY3Qvc2l0ZUxpc3RgLCBvcHRpb25zKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKChkYXRhOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICB0aGlzLmNvbnRhY3RzLm5leHQoZGF0YS51c2VyTGlzdClcclxuICAgICAgICAgICAgICByZXNvbHZlKGRhdGEudXNlckxpc3QpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcmVzb2x2ZShjb250YWN0cylcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG5cclxuXHJcblxyXG4gIGFzeW5jIGFzaWduUHJvZmlsKCkge1xyXG5cclxuICB9XHJcblxyXG4gIGFzeW5jIGdldFRhZ3MoKSB7XHJcblxyXG4gIH1cclxuXHJcblxyXG4gIGFzeW5jIGdldENhdGVnb3J5KCkge1xyXG5cclxuICB9XHJcblxyXG5cclxuICAvLyBDUlVEIE9OQk9BUkRJTkdcclxuXHJcbiAgcHVibGljIGFzeW5jIGNyZWF0ZU9uYm9hcmRpbmcoZGF0YTogYW55KTogUHJvbWlzZTxzdHJpbmcgfCBhbnk+IHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIGNvbnN0IG9wdGlvbnM6IGFueSA9IHtcclxuICAgICAgICBoZWFkZXJzOiB0aGlzLmhlYWRlclxyXG4gICAgICB9O1xyXG4gICAgICB0aGlzLmh0dHAucG9zdChgJHt0aGlzLmVuZHBvaW50fS9vbmJvYXJkaW5nYCwgZGF0YSwgb3B0aW9ucylcclxuICAgICAgICAuc3Vic2NyaWJlKChkYXRhOiBhbnkpID0+IHtcclxuICAgICAgICAgIHJlc29sdmUoZGF0YSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBhc3luYyB1cGRhdGVPbmJvYXJkaW5nKGRhdGE6IGFueSk6IFByb21pc2U8c3RyaW5nIHwgYW55PiB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICBjb25zdCBvcHRpb25zOiBhbnkgPSB7XHJcbiAgICAgICAgaGVhZGVyczogdGhpcy5oZWFkZXJcclxuICAgICAgfTtcclxuICAgICAgdGhpcy5odHRwLnB1dChgJHt0aGlzLmVuZHBvaW50fS9vbmJvYXJkaW5nYCwgZGF0YSwgb3B0aW9ucylcclxuICAgICAgICAuc3Vic2NyaWJlKChkYXRhOiBhbnkpID0+IHtcclxuICAgICAgICAgIHJlc29sdmUoZGF0YSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBhc3luYyBkZWxldGVPbmJvYXJkaW5nKGlkOiBhbnkpOiBQcm9taXNlPHN0cmluZyB8IGFueT4ge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgY29uc3Qgb3B0aW9uczogYW55ID0ge1xyXG4gICAgICAgIGhlYWRlcnM6IHRoaXMuaGVhZGVyXHJcbiAgICAgIH07XHJcbiAgICAgIHRoaXMuaHR0cC5kZWxldGUoYCR7dGhpcy5lbmRwb2ludH0vb25ib2FyZGluZy8ke2lkfWAsIG9wdGlvbnMpXHJcbiAgICAgICAgLnN1YnNjcmliZSgoZGF0YTogYW55KSA9PiB7XHJcbiAgICAgICAgICByZXNvbHZlKGRhdGEpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuXHJcbiAgcHVibGljIGFzeW5jIGdldE9uYm9hcmRpbmcoaWQ6IGFueSk6IFByb21pc2U8c3RyaW5nIHwgYW55PiB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICBjb25zdCBvcHRpb25zOiBhbnkgPSB7XHJcbiAgICAgICAgaGVhZGVyczogdGhpcy5oZWFkZXJcclxuICAgICAgfTtcclxuICAgICAgdGhpcy5odHRwLmdldChgJHt0aGlzLmVuZHBvaW50fS9vbmJvYXJkaW5nLyR7aWR9YCwgb3B0aW9ucylcclxuICAgICAgICAuc3Vic2NyaWJlKChkYXRhOiBhbnkpID0+IHtcclxuICAgICAgICAgIHJlc29sdmUoZGF0YSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBhc3luYyBnZXRBbGxPbmJvYXJkaW5nKCk6IFByb21pc2U8c3RyaW5nIHwgYW55PiB7XHJcbiAgICByZXR1cm4gYXdhaXQgdGhpcy5odHRwLmdldChgJHt0aGlzLmVuZHBvaW50fS9vbmJvYXJkaW5nYCwge1xyXG4gICAgICBoZWFkZXJzOiB0aGlzLmhlYWRlclxyXG4gICAgfSkuc3Vic2NyaWJlKChkYXRhOiBhbnkpID0+IHtcclxuICAgICAgdGhpcy5vbmJvYXJkaW5nLm5leHQoZGF0YSlcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcblxyXG4gIHB1YmxpYyBhc3luYyBkb3dubG9hZEF0dGFjaG1lbnQodXJsOiBzdHJpbmcsIGNvbnRlbnRUeXBlOiBzdHJpbmcsIG5hbWU6IHN0cmluZykge1xyXG4gICAgY29uc3QgcGF0aCA9IGAke3RoaXMuZW5kcG9pbnQuc3BsaXQoJ29uYm9hcmRpbmcnKVswXX1jYXNlcy9nZXRmaWxlL3NmP3BhdGg9JHt1cmx9JnRva2VuPSR7dGhpcy5tZWRpYVRva2VufWA7XHJcbiAgICB0aGlzLmdldEJ1ZmZlcihwYXRoKVxyXG4gICAgICAuc3Vic2NyaWJlKHJlc3BvbnNlID0+IGRvd25Mb2FkRmlsZShyZXNwb25zZSwgKGNvbnRlbnRUeXBlKSwgbmFtZSkpO1xyXG4gIH1cclxuXHJcbiAgLy8gQ3JlYXRlIGNvbGxhYlxyXG5cclxuICBwdWJsaWMgYXN5bmMgY3JlYXRlQ29udGFjdChkYXRhOiBhbnkpOiBQcm9taXNlPHN0cmluZyB8IGFueT4ge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgY29uc3Qgb3B0aW9uczogYW55ID0ge1xyXG4gICAgICAgIGhlYWRlcnM6IHRoaXMuaGVhZGVyXHJcbiAgICAgIH07XHJcbiAgICAgIHRoaXMuaHR0cC5wb3N0KGAke3RoaXMuZW5kcG9pbnR9L2NvbnRhY3RgLCBkYXRhLCBvcHRpb25zKVxyXG4gICAgICAgIC5zdWJzY3JpYmUoKGRhdGE6IGFueSkgPT4ge1xyXG4gICAgICAgICAgcmVzb2x2ZSh7IGRhdGEsIHN1Y2Nlc3M6IHRydWUgfSk7XHJcbiAgICAgICAgfSwgZXJyb3IgPT4gcmVzb2x2ZSh7IGVycm9yLCBzdWNjZXNzOiBmYWxzZSB9KSlcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuXHJcbiJdfQ==