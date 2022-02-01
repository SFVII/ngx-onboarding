import { __awaiter, __decorate, __generator, __param } from "tslib";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable, EventEmitter } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
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
        { type: undefined, decorators: [{ type: Inject, args: ['__NgxOnboarding__',] }] },
        { type: HttpClient }
    ]; };
    OnboardingService = __decorate([
        Injectable(),
        __param(0, Inject('__NgxOnboarding__'))
    ], OnboardingService);
    return OnboardingService;
}());
export { OnboardingService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib25ib2FyZGluZy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vb25ib2FyZGluZy8iLCJzb3VyY2VzIjpbImxpYi9vbmJvYXJkaW5nLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDL0QsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pFLE9BQU8sRUFBRSxlQUFlLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBSWhEO0lBa0JFLDJCQUF5QyxNQUEyQixFQUFVLElBQWdCO1FBQWhCLFNBQUksR0FBSixJQUFJLENBQVk7UUFqQjlGLGFBQVEsR0FBcUIsSUFBSSxPQUFPLEVBQVcsQ0FBQztRQUM1QyxVQUFLLEdBQTRCLElBQUksZUFBZSxDQUFTLElBQUksQ0FBQyxDQUFDO1FBQ25FLFdBQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BDLGNBQVMsR0FBeUIsSUFBSSxlQUFlLENBQU0sSUFBSSxDQUFDLENBQUM7UUFDakUsZUFBVSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDM0MsZUFBVSxHQUF5QixJQUFJLGVBQWUsQ0FBTSxJQUFJLENBQUMsQ0FBQztRQUNsRSxnQkFBVyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDN0MsYUFBUSxHQUF5QixJQUFJLGVBQWUsQ0FBTSxJQUFJLENBQUMsQ0FBQztRQUNoRSxjQUFTLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUN6QyxtQkFBYyxHQUFpQyxJQUFJLFlBQVksRUFBa0IsQ0FBQztRQUtsRixTQUFJLEdBQUcsSUFBSSxlQUFlLENBQUMsRUFBRSxDQUFDLENBQUM7UUFFL0IsYUFBUSxHQUFXLEVB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cEI7d0JBQ0gsQ0FBQyxDQUFDLENBQUE7b0JBQ0osQ0FBQyxDQUFDLEVBQUM7OztLQUNKOztnREE1UFksTUFBTSxTQUFDLG1CQUFtQjtnQkFBNkMsVUFBVTs7SUFsQm5GLGlCQUFpQjtRQUQ3QixVQUFVLEVBQUU7UUFtQkUsV0FBQSxNQUFNLENBQUMsbUJBQW1CLENBQUMsQ0FBQTtPQWxCN0IsaUJBQWlCLENBK1E3QjtJQUFELHdCQUFDO0NBQUEsQUEvUUQsSUErUUM7U0EvUVksaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEhlYWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBPbmJvYXJkaW5nSW50ZXJmYWNlLCBPbmJvYXJkaW5nVXNlciB9IGZyb20gJy4uL2ludGVyZmFjZS9PbmJvYXJkaW5nSW50ZXJmYWNlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE9uYm9hcmRpbmdTZXJ2aWNlIHtcbiAgY2FuRXhpdCQ6IFN1YmplY3Q8Ym9vbGVhbj4gPSBuZXcgU3ViamVjdDxib29sZWFuPigpO1xuICBwcml2YXRlIHRva2VuOiBCZWhhdmlvclN1YmplY3Q8c3RyaW5nPiA9IG5ldyBCZWhhdmlvclN1YmplY3Q8c3RyaW5nPihudWxsKTtcbiAgcHJpdmF0ZSBfdG9rZW4gPSB0aGlzLnRva2VuLmFzT2JzZXJ2YWJsZSgpO1xuICBwdWJsaWMgdGVtcGxhdGVzOiBCZWhhdmlvclN1YmplY3Q8YW55PiA9IG5ldyBCZWhhdmlvclN1YmplY3Q8YW55PihudWxsKTtcbiAgcHVibGljIF90ZW1wbGF0ZXMgPSB0aGlzLnRlbXBsYXRlcy5hc09ic2VydmFibGUoKTtcbiAgcHVibGljIG9uYm9hcmRpbmc6IEJlaGF2aW9yU3ViamVjdDxhbnk+ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxhbnk+KG51bGwpO1xuICBwdWJsaWMgX29uYm9hcmRpbmcgPSB0aGlzLm9uYm9hcmRpbmcuYXNPYnNlcnZhYmxlKCk7XG4gIHB1YmxpYyBjb250YWN0czogQmVoYXZpb3JTdWJqZWN0PGFueT4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0PGFueT4obnVsbCk7XG4gIHB1YmxpYyBfY29udGFjdHMgPSB0aGlzLmNvbnRhY3RzLmFzT2JzZXJ2YWJsZSgpO1xuICBwdWJsaWMgYXV0aGVudGljYXRpb246IEV2ZW50RW1pdHRlcjxPbmJvYXJkaW5nVXNlcj4gPSBuZXcgRXZlbnRFbWl0dGVyPE9uYm9hcmRpbmdVc2VyPigpO1xuICBwcml2YXRlIGhlYWRlcjogSHR0cEhlYWRlcnM7XG4gIHB1YmxpYyBsb2NhbGU6IHN0cmluZztcbiAgcHJpdmF0ZSBlbmRwb2ludDogc3RyaW5nO1xuICBwcml2YXRlIHVzZXI6IE9uYm9hcmRpbmdVc2VyO1xuICBwdWJsaWMgbGFuZyA9IG5ldyBCZWhhdmlvclN1YmplY3QoJycpO1xuICBwdWJsaWMgX2F1dGg6IGJvb2xlYW47XG4gIHB1YmxpYyBtYWluUGF0aDogc3RyaW5nID0gXCJcIlxuICBjb25zdHJ1Y3RvcihASW5qZWN0KCdfX05neE9uYm9hcmRpbmdfXycpIGNvbmZpZzogT25ib2FyZGluZ0ludGVyZmFjZSwgcHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7XG4gICAgdGhpcy5idWlsZEhlYWRlcnMoKTtcbiAgICB0aGlzLmluaXRJbnN0YW5jZShjb25maWcpO1xuICB9XG5cblxuICAvKipcbiAqIEBwcml2YXRlXG4gKiBHZW5lcmF0ZSBIZWFkZXIgZm9yIGJhY2tlbmQgY2FsbFxuICovXG4gIHByaXZhdGUgYnVpbGRIZWFkZXJzKCkge1xuICAgIHRoaXMuX3Rva2VuLnN1YnNjcmliZSgodG9rZW46IHN0cmluZykgPT4ge1xuICAgICAgY29uc3QgYmVhcmVyOiBzdHJpbmcgPSAnQmVhcmVyICcgKyB0b2tlbjtcbiAgICAgIHRoaXMuaGVhZGVyID0gbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICAgJ0F1dGhvcml6YXRpb24nOiBiZWFyZXJcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cblxuICAvKipcbiAqIEBwYXJhbSBjb25maWdcbiAqIEBwcml2YXRlXG4gKiBJbml0aWFsaXplIERhdGEgZm9yIFVzZXIgSW5zdGFuY2VcbiAqL1xuICBwcml2YXRlIGluaXRJbnN0YW5jZShjb25maWc6IE9uYm9hcmRpbmdJbnRlcmZhY2UpIHtcbiAgICB0aGlzLl9hdXRoID0gISFjb25maWcuYXV0aDtcbiAgICBpZiAoY29uZmlnLmVuZHBvaW50KSB7XG4gICAgICB0aGlzLmVuZHBvaW50ID0gY29uZmlnLmVuZHBvaW50O1xuICAgICAgaWYgKGNvbmZpZy5hdXRoKSB7XG4gICAgICAgIHRoaXMuYXV0aGVudGljYXRpb24uc3Vic2NyaWJlKCh1c2VyOiBPbmJvYXJkaW5nVXNlcikgPT4ge1xuICAgICAgICAgIGlmICghdXNlci5sYW5nICYmIGNvbmZpZy5sYW5nKSB7XG4gICAgICAgICAgICB1c2VyLmxhbmcgPSBjb25maWcubGFuZztcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5sb2NhbGUgPSB1c2VyLmxhbmc7XG4gICAgICAgICAgdGhpcy5sYW5nLm5leHQodGhpcy5sb2NhbGUpO1xuICAgICAgICAgIGlmICh1c2VyLnRva2VuKSB7XG4gICAgICAgICAgICB0aGlzLnRva2VuLm5leHQodXNlci50b2tlbik7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMudXNlciA9IHVzZXI7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIGlmIChjb25maWcubGFuZykge1xuICAgICAgICB0aGlzLmxvY2FsZSA9IGNvbmZpZy5sYW5nO1xuICAgICAgICB0aGlzLmxhbmcubmV4dCh0aGlzLmxvY2FsZSk7XG4gICAgICAgIHRoaXMudXNlciA9IHtcbiAgICAgICAgICBsYW5nOiBjb25maWcubGFuZyxcbiAgICAgICAgICB0b2tlbjogY29uZmlnLnRva2VuXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgICBpZiAoY29uZmlnLnRva2VuKSB7XG4gICAgICAgIHRoaXMudG9rZW4ubmV4dChjb25maWcudG9rZW4pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbmV3IEVycm9yKCdQbGVhc2UgcHJvdmlkZSBlbmRwb2ludCcpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICogQHByaXZhdGVcbiAqIEdlbmVyYXRlIFJhbmRvbSB1bmlxIElkIGZvciBLb252ZXJzbyBJbnN0YW5jZVxuICovXG4gIHByaXZhdGUgZ3VpZCgpIHtcbiAgICBsZXQgcmFuZG9tID0gKCkgPT4ge1xuICAgICAgcmV0dXJuIE1hdGguZmxvb3IoKDEgKyBNYXRoLnJhbmRvbSgpKSAqIDB4MTAwMDApXG4gICAgICAgIC50b1N0cmluZygxNilcbiAgICAgICAgLnN1YnN0cmluZygxKTtcbiAgICB9O1xuICAgIHJldHVybiByYW5kb20oKSArIHJhbmRvbSgpICsgJy0nICsgcmFuZG9tKCkgKyAnLScgKyByYW5kb20oKSArICctJyArIHJhbmRvbSgpICsgJy0nICsgcmFuZG9tKCkgKyByYW5kb20oKSArIHJhbmRvbSgpO1xuICB9XG5cblxuXG4gIC8qKlxuICogU2VuZCBQcm9maWwgVG8gYmFja2VuZFxuICogQFBvc3QgUHJvZmlsXG4gKi9cbiAgcHVibGljIGFzeW5jIGNyZWF0ZVByb2ZpbChkYXRhOiBhbnkpOiBQcm9taXNlPHN0cmluZyB8IGFueT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBjb25zdCBvcHRpb25zOiBhbnkgPSB7XG4gICAgICAgIGhlYWRlcnM6IHRoaXMuaGVhZGVyXG4gICAgICB9O1xuICAgICAgdGhpcy5odHRwLnBvc3QoYCR7dGhpcy5lbmRwb2ludH0vcHJvZmlsc2AsIGRhdGEsIG9wdGlvbnMpXG4gICAgICAgIC5zdWJzY3JpYmUoKGRhdGE6IGFueSkgPT4ge1xuICAgICAgICAgIHJlc29sdmUoZGF0YSk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIGFzeW5jIHVwZGF0ZVByb2ZpbChkYXRhOiBhbnkpOiBQcm9taXNlPHN0cmluZyB8IGFueT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBjb25zdCBvcHRpb25zOiBhbnkgPSB7XG4gICAgICAgIGhlYWRlcnM6IHRoaXMuaGVhZGVyXG4gICAgICB9O1xuICAgICAgdGhpcy5odHRwLnB1dChgJHt0aGlzLmVuZHBvaW50fS9wcm9maWxzYCwgZGF0YSwgb3B0aW9ucylcbiAgICAgICAgLnN1YnNjcmliZSgoZGF0YTogYW55KSA9PiB7XG4gICAgICAgICAgcmVzb2x2ZShkYXRhKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgYXN5bmMgZGVsZXRlUHJvZmlsKGlkOiBhbnkpOiBQcm9taXNlPHN0cmluZyB8IGFueT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBjb25zdCBvcHRpb25zOiBhbnkgPSB7XG4gICAgICAgIGhlYWRlcnM6IHRoaXMuaGVhZGVyXG4gICAgICB9O1xuICAgICAgdGhpcy5odHRwLmRlbGV0ZShgJHt0aGlzLmVuZHBvaW50fS9wcm9maWxzLyR7aWR9YCwgb3B0aW9ucylcbiAgICAgICAgLnN1YnNjcmliZSgoZGF0YTogYW55KSA9PiB7XG4gICAgICAgICAgcmVzb2x2ZShkYXRhKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuXG4gIHB1YmxpYyBhc3luYyBnZXRQcm9maWwoaWQ6IGFueSk6IFByb21pc2U8c3RyaW5nIHwgYW55PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGNvbnN0IG9wdGlvbnM6IGFueSA9IHtcbiAgICAgICAgaGVhZGVyczogdGhpcy5oZWFkZXJcbiAgICAgIH07XG4gICAgICB0aGlzLmh0dHAuZ2V0KGAke3RoaXMuZW5kcG9pbnR9L3Byb2ZpbHMvJHtpZH1gLCBvcHRpb25zKVxuICAgICAgICAuc3Vic2NyaWJlKChkYXRhOiBhbnkpID0+IHtcbiAgICAgICAgICByZXNvbHZlKGRhdGEpO1xuICAgICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBhc3luYyBnZXRBbGxQcm9maWwoKTogUHJvbWlzZTxzdHJpbmcgfCBhbnk+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgY29uc3Qgb3B0aW9uczogYW55ID0ge1xuICAgICAgICBoZWFkZXJzOiB0aGlzLmhlYWRlclxuICAgICAgfTtcbiAgICAgIHRoaXMuaHR0cC5nZXQoYCR7dGhpcy5lbmRwb2ludH0vcHJvZmlsc2AsIG9wdGlvbnMpXG4gICAgICAgIC5zdWJzY3JpYmUoKGRhdGE6IGFueSkgPT4ge1xuICAgICAgICAgIHRoaXMudGVtcGxhdGVzLm5leHQoZGF0YSlcbiAgICAgICAgICByZXNvbHZlKGRhdGEpO1xuICAgICAgICB9KTtcbiAgICB9KTtcbiAgfVxuICBwdWJsaWMgYXN5bmMgZ2V0QWxsVGFncygpOiBQcm9taXNlPHN0cmluZyB8IGFueT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBjb25zdCBvcHRpb25zOiBhbnkgPSB7XG4gICAgICAgIGhlYWRlcnM6IHRoaXMuaGVhZGVyXG4gICAgICB9O1xuICAgICAgdGhpcy5odHRwLmdldChgJHt0aGlzLmVuZHBvaW50fS90YWdzYCwgb3B0aW9ucylcbiAgICAgICAgLnN1YnNjcmliZSgoZGF0YTogYW55KSA9PiB7XG4gICAgICAgICAgcmVzb2x2ZShkYXRhKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbiAgcHVibGljIGFzeW5jIGdldENvbnRhY3RzKCk6IFByb21pc2U8c3RyaW5nIHwgYW55PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGNvbnN0IG9wdGlvbnM6IGFueSA9IHtcbiAgICAgICAgaGVhZGVyczogdGhpcy5oZWFkZXJcbiAgICAgIH07XG4gICAgICB0aGlzLl9jb250YWN0cy5zdWJzY3JpYmUoKGNvbnRhY3RzKSA9PiB7XG4gICAgICAgIGlmICghY29udGFjdHMpIHtcbiAgICAgICAgICB0aGlzLmh0dHAuZ2V0KGAke3RoaXMuZW5kcG9pbnQuc3BsaXQoJy9vbmJvYXJkaW5nJylbMF19L2NvbnRhY3Qvc2l0ZUxpc3RgLCBvcHRpb25zKVxuICAgICAgICAgICAgLnN1YnNjcmliZSgoZGF0YTogYW55KSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMuY29udGFjdHMubmV4dChkYXRhLnVzZXJMaXN0KVxuICAgICAgICAgICAgICByZXNvbHZlKGRhdGEudXNlckxpc3QpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVzb2x2ZShjb250YWN0cylcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9KTtcbiAgfVxuXG5cblxuXG4gIGFzeW5jIGFzaWduUHJvZmlsKCkge1xuXG4gIH1cblxuICBhc3luYyBnZXRUYWdzKCkge1xuXG4gIH1cblxuXG4gIGFzeW5jIGdldENhdGVnb3J5KCkge1xuXG4gIH1cblxuXG4gIC8vIENSVUQgT05CT0FSRElOR1xuXG4gIHB1YmxpYyBhc3luYyBjcmVhdGVPbmJvYXJkaW5nKGRhdGE6IGFueSk6IFByb21pc2U8c3RyaW5nIHwgYW55PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGNvbnN0IG9wdGlvbnM6IGFueSA9IHtcbiAgICAgICAgaGVhZGVyczogdGhpcy5oZWFkZXJcbiAgICAgIH07XG4gICAgICB0aGlzLmh0dHAucG9zdChgJHt0aGlzLmVuZHBvaW50fS9vbmJvYXJkaW5nYCwgZGF0YSwgb3B0aW9ucylcbiAgICAgICAgLnN1YnNjcmliZSgoZGF0YTogYW55KSA9PiB7XG4gICAgICAgICAgcmVzb2x2ZShkYXRhKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgYXN5bmMgdXBkYXRlT25ib2FyZGluZyhkYXRhOiBhbnkpOiBQcm9taXNlPHN0cmluZyB8IGFueT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBjb25zdCBvcHRpb25zOiBhbnkgPSB7XG4gICAgICAgIGhlYWRlcnM6IHRoaXMuaGVhZGVyXG4gICAgICB9O1xuICAgICAgdGhpcy5odHRwLnB1dChgJHt0aGlzLmVuZHBvaW50fS9vbmJvYXJkaW5nYCwgZGF0YSwgb3B0aW9ucylcbiAgICAgICAgLnN1YnNjcmliZSgoZGF0YTogYW55KSA9PiB7XG4gICAgICAgICAgcmVzb2x2ZShkYXRhKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgYXN5bmMgZGVsZXRlT25ib2FyZGluZyhpZDogYW55KTogUHJvbWlzZTxzdHJpbmcgfCBhbnk+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgY29uc3Qgb3B0aW9uczogYW55ID0ge1xuICAgICAgICBoZWFkZXJzOiB0aGlzLmhlYWRlclxuICAgICAgfTtcbiAgICAgIHRoaXMuaHR0cC5kZWxldGUoYCR7dGhpcy5lbmRwb2ludH0vb25ib2FyZGluZy8ke2lkfWAsIG9wdGlvbnMpXG4gICAgICAgIC5zdWJzY3JpYmUoKGRhdGE6IGFueSkgPT4ge1xuICAgICAgICAgIHJlc29sdmUoZGF0YSk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cblxuICBwdWJsaWMgYXN5bmMgZ2V0T25ib2FyZGluZyhpZDogYW55KTogUHJvbWlzZTxzdHJpbmcgfCBhbnk+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgY29uc3Qgb3B0aW9uczogYW55ID0ge1xuICAgICAgICBoZWFkZXJzOiB0aGlzLmhlYWRlclxuICAgICAgfTtcbiAgICAgIHRoaXMuaHR0cC5nZXQoYCR7dGhpcy5lbmRwb2ludH0vb25ib2FyZGluZy8ke2lkfWAsIG9wdGlvbnMpXG4gICAgICAgIC5zdWJzY3JpYmUoKGRhdGE6IGFueSkgPT4ge1xuICAgICAgICAgIHJlc29sdmUoZGF0YSk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIGFzeW5jIGdldEFsbE9uYm9hcmRpbmcocmVjYWxsID0gZmFsc2UpOiBQcm9taXNlPHN0cmluZyB8IGFueT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB0aGlzLl9vbmJvYXJkaW5nLnN1YnNjcmliZSgob25ib2FyZGluZykgPT4ge1xuICAgICAgICBpZiAoIW9uYm9hcmRpbmcgfHwgcmVjYWxsKSB7XG4gICAgICAgICAgY29uc3Qgb3B0aW9uczogYW55ID0ge1xuICAgICAgICAgICAgaGVhZGVyczogdGhpcy5oZWFkZXJcbiAgICAgICAgICB9O1xuICAgICAgICAgIHRoaXMuaHR0cC5nZXQoYCR7dGhpcy5lbmRwb2ludH0vb25ib2FyZGluZ2AsIG9wdGlvbnMpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKChkYXRhOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5vbmJvYXJkaW5nLm5leHQoZGF0YSlcbiAgICAgICAgICAgICAgcmVzb2x2ZShkYXRhKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlc29sdmUob25ib2FyZGluZylcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9KTtcbiAgfVxufVxuIl19