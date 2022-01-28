import { __awaiter, __generator } from "tslib";
import { HttpHeaders } from '@angular/common/http';
import { Inject, Injectable, EventEmitter } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
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
    OnboardingService.prototype.checkHeaderNull = function () {
        if (!this.token) {
            this.buildHeaders();
        }
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
                        console.log(options);
                        console.log(_this.token);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib25ib2FyZGluZy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vb25ib2FyZGluZy8iLCJzb3VyY2VzIjpbImxpYi9vbmJvYXJkaW5nLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBYyxXQUFXLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUMvRCxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakUsT0FBTyxFQUFFLGVBQWUsRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7OztBQUdoRDtJQW1CRSwyQkFBeUMsTUFBMkIsRUFBVSxJQUFnQjtRQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZO1FBakI5RixhQUFRLEdBQXFCLElBQUksT0FBTyxFQUFXLENBQUM7UUFDNUMsVUFBSyxHQUE0QixJQUFJLGVBQWUsQ0FBUyxJQUFJLENBQUMsQ0FBQztRQUNuRSxXQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQyxjQUFTLEdBQXlCLElBQUksZUFBZSxDQUFNLElBQUksQ0FBQyxDQUFDO1FBQ2pFLGVBQVUsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQzNDLGVBQVUsR0FBeUIsSUFBSSxlQUFlLENBQU0sSUFBSSxDQUFDLENBQUM7UUFDbEUsZ0JBQVcsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQzdDLGFBQVEsR0FBeUIsSUFBSSxlQUFlLENBQU0sSUFBSSxDQUFDLENBQUM7UUFDaEUsY0FBUyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDekMsbUJBQWMsR0FBaUMsSUFBSSxZQUFZLEVBQWtCLENBQUM7UUFLbEYsU0FBSSxHQUFHLElBQUksZUFBZSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBRS9CLGFBQVEsR0FBVyxFQUFFLENBQUE7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T0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU07d0JBQ2pDLEtBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLFVBQUMsVUFBVTs0QkFDcEMsSUFBSSxDQUFDLFVBQVUsSUFBSSxNQUFNLEVBQUU7Z0NBQ3pCLElBQU0sT0FBTyxHQUFRO29DQUNuQixPQUFPLEVBQUUsS0FBSSxDQUFDLE1BQU07aUNBQ3JCLENBQUM7Z0NBQ0YsS0FBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUksS0FBSSxDQUFDLFFBQVEsZ0JBQWEsRUFBRSxPQUFPLENBQUM7cUNBQ2xELFNBQVMsQ0FBQyxVQUFDLElBQVM7b0NBQ25CLEtBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO29DQUMxQixPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7Z0NBQ2hCLENBQUMsQ0FBQyxDQUFDOzZCQUNOO2lDQUFNO2dDQUNMLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQTs2QkFDcEI7d0JBQ0gsQ0FBQyxDQUFDLENBQUE7b0JBQ0osQ0FBQyxDQUFDLEVBQUM7OztLQUNKO3NGQXhSVSxpQkFBaUIsY0FrQlIsbUJBQW1COzZEQWxCNUIsaUJBQWlCLFdBQWpCLGlCQUFpQjs0QkFOOUI7Q0ErUkMsQUExUkQsSUEwUkM7U0F6UlksaUJBQWlCO2tEQUFqQixpQkFBaUI7Y0FEN0IsVUFBVTs7c0JBbUJJLE1BQU07dUJBQUMsbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEhlYWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBPbmJvYXJkaW5nSW50ZXJmYWNlLCBPbmJvYXJkaW5nVXNlciB9IGZyb20gJy4uL2ludGVyZmFjZS9PbmJvYXJkaW5nSW50ZXJmYWNlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE9uYm9hcmRpbmdTZXJ2aWNlIHtcbiAgY2FuRXhpdCQ6IFN1YmplY3Q8Ym9vbGVhbj4gPSBuZXcgU3ViamVjdDxib29sZWFuPigpO1xuICBwcml2YXRlIHRva2VuOiBCZWhhdmlvclN1YmplY3Q8c3RyaW5nPiA9IG5ldyBCZWhhdmlvclN1YmplY3Q8c3RyaW5nPihudWxsKTtcbiAgcHJpdmF0ZSBfdG9rZW4gPSB0aGlzLnRva2VuLmFzT2JzZXJ2YWJsZSgpO1xuICBwdWJsaWMgdGVtcGxhdGVzOiBCZWhhdmlvclN1YmplY3Q8YW55PiA9IG5ldyBCZWhhdmlvclN1YmplY3Q8YW55PihudWxsKTtcbiAgcHVibGljIF90ZW1wbGF0ZXMgPSB0aGlzLnRlbXBsYXRlcy5hc09ic2VydmFibGUoKTtcbiAgcHVibGljIG9uYm9hcmRpbmc6IEJlaGF2aW9yU3ViamVjdDxhbnk+ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxhbnk+KG51bGwpO1xuICBwdWJsaWMgX29uYm9hcmRpbmcgPSB0aGlzLm9uYm9hcmRpbmcuYXNPYnNlcnZhYmxlKCk7XG4gIHB1YmxpYyBjb250YWN0czogQmVoYXZpb3JTdWJqZWN0PGFueT4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0PGFueT4obnVsbCk7XG4gIHB1YmxpYyBfY29udGFjdHMgPSB0aGlzLmNvbnRhY3RzLmFzT2JzZXJ2YWJsZSgpO1xuICBwdWJsaWMgYXV0aGVudGljYXRpb246IEV2ZW50RW1pdHRlcjxPbmJvYXJkaW5nVXNlcj4gPSBuZXcgRXZlbnRFbWl0dGVyPE9uYm9hcmRpbmdVc2VyPigpO1xuICBwcml2YXRlIGhlYWRlcjogSHR0cEhlYWRlcnM7XG4gIHB1YmxpYyBsb2NhbGU6IHN0cmluZztcbiAgcHJpdmF0ZSBlbmRwb2ludDogc3RyaW5nO1xuICBwcml2YXRlIHVzZXI6IE9uYm9hcmRpbmdVc2VyO1xuICBwdWJsaWMgbGFuZyA9IG5ldyBCZWhhdmlvclN1YmplY3QoJycpO1xuICBwdWJsaWMgX2F1dGg6IGJvb2xlYW47XG4gIHB1YmxpYyBtYWluUGF0aDogc3RyaW5nID0gXCJcIlxuICBjb25zdHJ1Y3RvcihASW5qZWN0KCdfX05neE9uYm9hcmRpbmdfXycpIGNvbmZpZzogT25ib2FyZGluZ0ludGVyZmFjZSwgcHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7XG4gICAgdGhpcy5idWlsZEhlYWRlcnMoKTtcbiAgICB0aGlzLmluaXRJbnN0YW5jZShjb25maWcpO1xuICB9XG5cblxuICAvKipcbiAqIEBwcml2YXRlXG4gKiBHZW5lcmF0ZSBIZWFkZXIgZm9yIGJhY2tlbmQgY2FsbFxuICovXG4gIHByaXZhdGUgYnVpbGRIZWFkZXJzKCkge1xuICAgIHRoaXMuX3Rva2VuLnN1YnNjcmliZSgodG9rZW46IHN0cmluZykgPT4ge1xuICAgICAgY29uc29sZS5sb2codG9rZW4pO1xuICAgICAgY29uc29sZS5sb2coJ2xvY2Fsc3RvcmFnZScsIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpKTtcbiAgICAgIGNvbnNvbGUubG9nKCh0b2tlbiB8fCBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKSkpO1xuICAgICAgY29uc3QgYmVhcmVyOiBzdHJpbmcgPSAnQmVhcmVyICcgKyAodG9rZW4gfHwgbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJykpO1xuICAgICAgdGhpcy5oZWFkZXIgPSBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgICAnQXV0aG9yaXphdGlvbic6IGJlYXJlclxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbiAgXG4gIHByaXZhdGUgY2hlY2tIZWFkZXJOdWxsKCkge1xuICAgIGlmICghdGhpcy50b2tlbikge1xuICAgICAgdGhpcy5idWlsZEhlYWRlcnMoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAqIEBwYXJhbSBjb25maWdcbiAqIEBwcml2YXRlXG4gKiBJbml0aWFsaXplIERhdGEgZm9yIFVzZXIgSW5zdGFuY2VcbiAqL1xuICBwcml2YXRlIGluaXRJbnN0YW5jZShjb25maWc6IE9uYm9hcmRpbmdJbnRlcmZhY2UpIHtcbiAgICB0aGlzLl9hdXRoID0gISFjb25maWcuYXV0aDtcbiAgICBpZiAoY29uZmlnLmVuZHBvaW50KSB7XG4gICAgICB0aGlzLmVuZHBvaW50ID0gY29uZmlnLmVuZHBvaW50O1xuICAgICAgaWYgKGNvbmZpZy5hdXRoKSB7XG4gICAgICAgIHRoaXMuYXV0aGVudGljYXRpb24uc3Vic2NyaWJlKCh1c2VyOiBPbmJvYXJkaW5nVXNlcikgPT4ge1xuICAgICAgICAgIGlmICghdXNlci5sYW5nICYmIGNvbmZpZy5sYW5nKSB7XG4gICAgICAgICAgICB1c2VyLmxhbmcgPSBjb25maWcubGFuZztcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5sb2NhbGUgPSB1c2VyLmxhbmc7XG4gICAgICAgICAgdGhpcy5sYW5nLm5leHQodGhpcy5sb2NhbGUpO1xuICAgICAgICAgIGlmICh1c2VyLnRva2VuKSB7XG4gICAgICAgICAgICB0aGlzLnRva2VuLm5leHQodXNlci50b2tlbik7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMudXNlciA9IHVzZXI7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIGlmIChjb25maWcubGFuZykge1xuICAgICAgICB0aGlzLmxvY2FsZSA9IGNvbmZpZy5sYW5nO1xuICAgICAgICB0aGlzLmxhbmcubmV4dCh0aGlzLmxvY2FsZSk7XG4gICAgICAgIHRoaXMudXNlciA9IHtcbiAgICAgICAgICBsYW5nOiBjb25maWcubGFuZyxcbiAgICAgICAgICB0b2tlbjogY29uZmlnLnRva2VuXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgICBpZiAoY29uZmlnLnRva2VuKSB7XG4gICAgICAgIHRoaXMudG9rZW4ubmV4dChjb25maWcudG9rZW4pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbmV3IEVycm9yKCdQbGVhc2UgcHJvdmlkZSBlbmRwb2ludCcpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICogQHByaXZhdGVcbiAqIEdlbmVyYXRlIFJhbmRvbSB1bmlxIElkIGZvciBLb252ZXJzbyBJbnN0YW5jZVxuICovXG4gIHByaXZhdGUgZ3VpZCgpIHtcbiAgICBsZXQgcmFuZG9tID0gKCkgPT4ge1xuICAgICAgcmV0dXJuIE1hdGguZmxvb3IoKDEgKyBNYXRoLnJhbmRvbSgpKSAqIDB4MTAwMDApXG4gICAgICAgIC50b1N0cmluZygxNilcbiAgICAgICAgLnN1YnN0cmluZygxKTtcbiAgICB9O1xuICAgIHJldHVybiByYW5kb20oKSArIHJhbmRvbSgpICsgJy0nICsgcmFuZG9tKCkgKyAnLScgKyByYW5kb20oKSArICctJyArIHJhbmRvbSgpICsgJy0nICsgcmFuZG9tKCkgKyByYW5kb20oKSArIHJhbmRvbSgpO1xuICB9XG5cblxuXG4gIC8qKlxuICogU2VuZCBQcm9maWwgVG8gYmFja2VuZFxuICogQFBvc3QgUHJvZmlsXG4gKi9cbiAgcHVibGljIGFzeW5jIGNyZWF0ZVByb2ZpbChkYXRhOiBhbnkpOiBQcm9taXNlPHN0cmluZyB8IGFueT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBjb25zdCBvcHRpb25zOiBhbnkgPSB7XG4gICAgICAgIGhlYWRlcnM6IHRoaXMuaGVhZGVyXG4gICAgICB9O1xuICAgICAgdGhpcy5odHRwLnBvc3QoYCR7dGhpcy5lbmRwb2ludH0vcHJvZmlsc2AsIGRhdGEsIG9wdGlvbnMpXG4gICAgICAgIC5zdWJzY3JpYmUoKGRhdGE6IGFueSkgPT4ge1xuICAgICAgICAgIHJlc29sdmUoZGF0YSk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIGFzeW5jIHVwZGF0ZVByb2ZpbChkYXRhOiBhbnkpOiBQcm9taXNlPHN0cmluZyB8IGFueT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBjb25zdCBvcHRpb25zOiBhbnkgPSB7XG4gICAgICAgIGhlYWRlcnM6IHRoaXMuaGVhZGVyXG4gICAgICB9O1xuICAgICAgdGhpcy5odHRwLnB1dChgJHt0aGlzLmVuZHBvaW50fS9wcm9maWxzYCwgZGF0YSwgb3B0aW9ucylcbiAgICAgICAgLnN1YnNjcmliZSgoZGF0YTogYW55KSA9PiB7XG4gICAgICAgICAgcmVzb2x2ZShkYXRhKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgYXN5bmMgZGVsZXRlUHJvZmlsKGlkOiBhbnkpOiBQcm9taXNlPHN0cmluZyB8IGFueT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBjb25zdCBvcHRpb25zOiBhbnkgPSB7XG4gICAgICAgIGhlYWRlcnM6IHRoaXMuaGVhZGVyXG4gICAgICB9O1xuICAgICAgdGhpcy5odHRwLmRlbGV0ZShgJHt0aGlzLmVuZHBvaW50fS9wcm9maWxzLyR7aWR9YCwgb3B0aW9ucylcbiAgICAgICAgLnN1YnNjcmliZSgoZGF0YTogYW55KSA9PiB7XG4gICAgICAgICAgcmVzb2x2ZShkYXRhKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuXG4gIHB1YmxpYyBhc3luYyBnZXRQcm9maWwoaWQ6IGFueSk6IFByb21pc2U8c3RyaW5nIHwgYW55PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGNvbnN0IG9wdGlvbnM6IGFueSA9IHtcbiAgICAgICAgaGVhZGVyczogdGhpcy5oZWFkZXJcbiAgICAgIH07XG4gICAgICB0aGlzLmh0dHAuZ2V0KGAke3RoaXMuZW5kcG9pbnR9L3Byb2ZpbHMvJHtpZH1gLCBvcHRpb25zKVxuICAgICAgICAuc3Vic2NyaWJlKChkYXRhOiBhbnkpID0+IHtcbiAgICAgICAgICByZXNvbHZlKGRhdGEpO1xuICAgICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBhc3luYyBnZXRBbGxQcm9maWwoKTogUHJvbWlzZTxzdHJpbmcgfCBhbnk+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgY29uc3Qgb3B0aW9uczogYW55ID0ge1xuICAgICAgICBoZWFkZXJzOiB0aGlzLmhlYWRlclxuICAgICAgfTtcbiAgICAgIGNvbnNvbGUubG9nKG9wdGlvbnMpO1xuICAgICAgY29uc29sZS5sb2codGhpcy50b2tlbik7XG4gICAgICB0aGlzLmh0dHAuZ2V0KGAke3RoaXMuZW5kcG9pbnR9L3Byb2ZpbHNgLCBvcHRpb25zKVxuICAgICAgICAuc3Vic2NyaWJlKChkYXRhOiBhbnkpID0+IHtcbiAgICAgICAgICB0aGlzLnRlbXBsYXRlcy5uZXh0KGRhdGEpXG4gICAgICAgICAgcmVzb2x2ZShkYXRhKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbiAgcHVibGljIGFzeW5jIGdldEFsbFRhZ3MoKTogUHJvbWlzZTxzdHJpbmcgfCBhbnk+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgY29uc3Qgb3B0aW9uczogYW55ID0ge1xuICAgICAgICBoZWFkZXJzOiB0aGlzLmhlYWRlclxuICAgICAgfTtcbiAgICAgIHRoaXMuaHR0cC5nZXQoYCR7dGhpcy5lbmRwb2ludH0vdGFnc2AsIG9wdGlvbnMpXG4gICAgICAgIC5zdWJzY3JpYmUoKGRhdGE6IGFueSkgPT4ge1xuICAgICAgICAgIHJlc29sdmUoZGF0YSk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICB9XG4gIHB1YmxpYyBhc3luYyBnZXRDb250YWN0cygpOiBQcm9taXNlPHN0cmluZyB8IGFueT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBjb25zdCBvcHRpb25zOiBhbnkgPSB7XG4gICAgICAgIGhlYWRlcnM6IHRoaXMuaGVhZGVyXG4gICAgICB9O1xuICAgICAgdGhpcy5fY29udGFjdHMuc3Vic2NyaWJlKChjb250YWN0cykgPT4ge1xuICAgICAgICBpZiAoIWNvbnRhY3RzKSB7XG4gICAgICAgICAgdGhpcy5odHRwLmdldChgJHt0aGlzLmVuZHBvaW50LnNwbGl0KCcvb25ib2FyZGluZycpWzBdfS9jb250YWN0L3NpdGVMaXN0YCwgb3B0aW9ucylcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoKGRhdGE6IGFueSkgPT4ge1xuICAgICAgICAgICAgICB0aGlzLmNvbnRhY3RzLm5leHQoZGF0YS51c2VyTGlzdClcbiAgICAgICAgICAgICAgcmVzb2x2ZShkYXRhLnVzZXJMaXN0KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlc29sdmUoY29udGFjdHMpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSk7XG4gIH1cblxuXG5cblxuICBhc3luYyBhc2lnblByb2ZpbCgpIHtcblxuICB9XG5cbiAgYXN5bmMgZ2V0VGFncygpIHtcblxuICB9XG5cblxuICBhc3luYyBnZXRDYXRlZ29yeSgpIHtcblxuICB9XG5cblxuICAvLyBDUlVEIE9OQk9BUkRJTkdcblxuICBwdWJsaWMgYXN5bmMgY3JlYXRlT25ib2FyZGluZyhkYXRhOiBhbnkpOiBQcm9taXNlPHN0cmluZyB8IGFueT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBjb25zdCBvcHRpb25zOiBhbnkgPSB7XG4gICAgICAgIGhlYWRlcnM6IHRoaXMuaGVhZGVyXG4gICAgICB9O1xuICAgICAgdGhpcy5odHRwLnBvc3QoYCR7dGhpcy5lbmRwb2ludH0vb25ib2FyZGluZ2AsIGRhdGEsIG9wdGlvbnMpXG4gICAgICAgIC5zdWJzY3JpYmUoKGRhdGE6IGFueSkgPT4ge1xuICAgICAgICAgIHJlc29sdmUoZGF0YSk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIGFzeW5jIHVwZGF0ZU9uYm9hcmRpbmcoZGF0YTogYW55KTogUHJvbWlzZTxzdHJpbmcgfCBhbnk+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgY29uc3Qgb3B0aW9uczogYW55ID0ge1xuICAgICAgICBoZWFkZXJzOiB0aGlzLmhlYWRlclxuICAgICAgfTtcbiAgICAgIHRoaXMuaHR0cC5wdXQoYCR7dGhpcy5lbmRwb2ludH0vb25ib2FyZGluZ2AsIGRhdGEsIG9wdGlvbnMpXG4gICAgICAgIC5zdWJzY3JpYmUoKGRhdGE6IGFueSkgPT4ge1xuICAgICAgICAgIHJlc29sdmUoZGF0YSk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIGFzeW5jIGRlbGV0ZU9uYm9hcmRpbmcoaWQ6IGFueSk6IFByb21pc2U8c3RyaW5nIHwgYW55PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGNvbnN0IG9wdGlvbnM6IGFueSA9IHtcbiAgICAgICAgaGVhZGVyczogdGhpcy5oZWFkZXJcbiAgICAgIH07XG4gICAgICB0aGlzLmh0dHAuZGVsZXRlKGAke3RoaXMuZW5kcG9pbnR9L29uYm9hcmRpbmcvJHtpZH1gLCBvcHRpb25zKVxuICAgICAgICAuc3Vic2NyaWJlKChkYXRhOiBhbnkpID0+IHtcbiAgICAgICAgICByZXNvbHZlKGRhdGEpO1xuICAgICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG5cbiAgcHVibGljIGFzeW5jIGdldE9uYm9hcmRpbmcoaWQ6IGFueSk6IFByb21pc2U8c3RyaW5nIHwgYW55PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGNvbnN0IG9wdGlvbnM6IGFueSA9IHtcbiAgICAgICAgaGVhZGVyczogdGhpcy5oZWFkZXJcbiAgICAgIH07XG4gICAgICB0aGlzLmh0dHAuZ2V0KGAke3RoaXMuZW5kcG9pbnR9L29uYm9hcmRpbmcvJHtpZH1gLCBvcHRpb25zKVxuICAgICAgICAuc3Vic2NyaWJlKChkYXRhOiBhbnkpID0+IHtcbiAgICAgICAgICByZXNvbHZlKGRhdGEpO1xuICAgICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBhc3luYyBnZXRBbGxPbmJvYXJkaW5nKHJlY2FsbCA9IGZhbHNlKTogUHJvbWlzZTxzdHJpbmcgfCBhbnk+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgdGhpcy5fb25ib2FyZGluZy5zdWJzY3JpYmUoKG9uYm9hcmRpbmcpID0+IHtcbiAgICAgICAgaWYgKCFvbmJvYXJkaW5nIHx8IHJlY2FsbCkge1xuICAgICAgICAgIGNvbnN0IG9wdGlvbnM6IGFueSA9IHtcbiAgICAgICAgICAgIGhlYWRlcnM6IHRoaXMuaGVhZGVyXG4gICAgICAgICAgfTtcbiAgICAgICAgICB0aGlzLmh0dHAuZ2V0KGAke3RoaXMuZW5kcG9pbnR9L29uYm9hcmRpbmdgLCBvcHRpb25zKVxuICAgICAgICAgICAgLnN1YnNjcmliZSgoZGF0YTogYW55KSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMub25ib2FyZGluZy5uZXh0KGRhdGEpXG4gICAgICAgICAgICAgIHJlc29sdmUoZGF0YSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXNvbHZlKG9uYm9hcmRpbmcpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==