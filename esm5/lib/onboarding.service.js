import { __awaiter, __decorate, __generator, __param } from "tslib";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable, EventEmitter } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
var OnboardingService = /** @class */ (function () {
    function OnboardingService(config, http) {
        this.http = http;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib25ib2FyZGluZy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vb25ib2FyZGluZy8iLCJzb3VyY2VzIjpbImxpYi9vbmJvYXJkaW5nLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDL0QsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFJdkM7SUFpQkUsMkJBQXlDLE1BQTJCLEVBQVUsSUFBZ0I7UUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTtRQWhCdEYsVUFBSyxHQUE0QixJQUFJLGVBQWUsQ0FBUyxJQUFJLENBQUMsQ0FBQztRQUNuRSxXQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQyxjQUFTLEdBQXlCLElBQUksZUFBZSxDQUFNLElBQUksQ0FBQyxDQUFDO1FBQ2pFLGVBQVUsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQzNDLGVBQVUsR0FBeUIsSUFBSSxlQUFlLENBQU0sSUFBSSxDQUFDLENBQUM7UUFDbEUsZ0JBQVcsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQzdDLGFBQVEsR0FBeUIsSUFBSSxlQUFlLENBQU0sSUFBSSxDQUFDLENBQUM7UUFDaEUsY0FBUyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDekMsbUJBQWMsR0FBaUMsSUFBSSxZQUFZLEVBQWtCLENBQUM7UUFLbEYsU0FBSSxHQUFHLElBQUksZUFBZSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBRS9CLGFBQVEsR0FBVyxFQUFFLENBQUE7UUFFMUIsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BCLElB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S0FDSjs7Z0RBOVBZLE1BQU0sU0FBQyxtQkFBbUI7Z0JBQTZDLFVBQVU7O0lBakJuRixpQkFBaUI7UUFEN0IsVUFBVSxFQUFFO1FBa0JFLFdBQUEsTUFBTSxDQUFDLG1CQUFtQixDQUFDLENBQUE7T0FqQjdCLGlCQUFpQixDQWdSN0I7SUFBRCx3QkFBQztDQUFBLEFBaFJELElBZ1JDO1NBaFJZLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBIZWFkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlLCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgT25ib2FyZGluZ0ludGVyZmFjZSwgT25ib2FyZGluZ1VzZXIgfSBmcm9tICcuLi9pbnRlcmZhY2UvT25ib2FyZGluZ0ludGVyZmFjZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBPbmJvYXJkaW5nU2VydmljZSB7XG4gIHByaXZhdGUgdG9rZW46IEJlaGF2aW9yU3ViamVjdDxzdHJpbmc+ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxzdHJpbmc+KG51bGwpO1xuICBwcml2YXRlIF90b2tlbiA9IHRoaXMudG9rZW4uYXNPYnNlcnZhYmxlKCk7XG4gIHB1YmxpYyB0ZW1wbGF0ZXM6IEJlaGF2aW9yU3ViamVjdDxhbnk+ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxhbnk+KG51bGwpO1xuICBwdWJsaWMgX3RlbXBsYXRlcyA9IHRoaXMudGVtcGxhdGVzLmFzT2JzZXJ2YWJsZSgpO1xuICBwdWJsaWMgb25ib2FyZGluZzogQmVoYXZpb3JTdWJqZWN0PGFueT4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0PGFueT4obnVsbCk7XG4gIHB1YmxpYyBfb25ib2FyZGluZyA9IHRoaXMub25ib2FyZGluZy5hc09ic2VydmFibGUoKTtcbiAgcHVibGljIGNvbnRhY3RzOiBCZWhhdmlvclN1YmplY3Q8YW55PiA9IG5ldyBCZWhhdmlvclN1YmplY3Q8YW55PihudWxsKTtcbiAgcHVibGljIF9jb250YWN0cyA9IHRoaXMuY29udGFjdHMuYXNPYnNlcnZhYmxlKCk7XG4gIHB1YmxpYyBhdXRoZW50aWNhdGlvbjogRXZlbnRFbWl0dGVyPE9uYm9hcmRpbmdVc2VyPiA9IG5ldyBFdmVudEVtaXR0ZXI8T25ib2FyZGluZ1VzZXI+KCk7XG4gIHByaXZhdGUgaGVhZGVyOiBIdHRwSGVhZGVycztcbiAgcHVibGljIGxvY2FsZTogc3RyaW5nO1xuICBwcml2YXRlIGVuZHBvaW50OiBzdHJpbmc7XG4gIHByaXZhdGUgdXNlcjogT25ib2FyZGluZ1VzZXI7XG4gIHB1YmxpYyBsYW5nID0gbmV3IEJlaGF2aW9yU3ViamVjdCgnJyk7XG4gIHB1YmxpYyBfYXV0aDogYm9vbGVhbjtcbiAgcHVibGljIG1haW5QYXRoOiBzdHJpbmcgPSBcIlwiXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoJ19fTmd4T25ib2FyZGluZ19fJykgY29uZmlnOiBPbmJvYXJkaW5nSW50ZXJmYWNlLCBwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQpIHtcbiAgICB0aGlzLmJ1aWxkSGVhZGVycygpO1xuICAgIHRoaXMuaW5pdEluc3RhbmNlKGNvbmZpZyk7XG4gIH1cblxuXG4gIC8qKlxuICogQHByaXZhdGVcbiAqIEdlbmVyYXRlIEhlYWRlciBmb3IgYmFja2VuZCBjYWxsXG4gKi9cbiAgcHJpdmF0ZSBidWlsZEhlYWRlcnMoKSB7XG4gICAgdGhpcy5fdG9rZW4uc3Vic2NyaWJlKCh0b2tlbjogc3RyaW5nKSA9PiB7XG4gICAgICBjb25zdCBiZWFyZXI6IHN0cmluZyA9ICdCZWFyZXIgJyArIHRva2VuO1xuICAgICAgdGhpcy5oZWFkZXIgPSBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgICAnQXV0aG9yaXphdGlvbic6IGJlYXJlclxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuXG4gIC8qKlxuICogQHBhcmFtIGNvbmZpZ1xuICogQHByaXZhdGVcbiAqIEluaXRpYWxpemUgRGF0YSBmb3IgVXNlciBJbnN0YW5jZVxuICovXG4gIHByaXZhdGUgaW5pdEluc3RhbmNlKGNvbmZpZzogT25ib2FyZGluZ0ludGVyZmFjZSkge1xuICAgIHRoaXMuX2F1dGggPSAhIWNvbmZpZy5hdXRoO1xuICAgIGlmIChjb25maWcuZW5kcG9pbnQpIHtcbiAgICAgIHRoaXMuZW5kcG9pbnQgPSBjb25maWcuZW5kcG9pbnQ7XG4gICAgICBpZiAoY29uZmlnLmF1dGgpIHtcbiAgICAgICAgdGhpcy5hdXRoZW50aWNhdGlvbi5zdWJzY3JpYmUoKHVzZXI6IE9uYm9hcmRpbmdVc2VyKSA9PiB7XG4gICAgICAgICAgaWYgKCF1c2VyLmxhbmcgJiYgY29uZmlnLmxhbmcpIHtcbiAgICAgICAgICAgIHVzZXIubGFuZyA9IGNvbmZpZy5sYW5nO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLmxvY2FsZSA9IHVzZXIubGFuZztcbiAgICAgICAgICB0aGlzLmxhbmcubmV4dCh0aGlzLmxvY2FsZSk7XG4gICAgICAgICAgaWYgKHVzZXIudG9rZW4pIHtcbiAgICAgICAgICAgIHRoaXMudG9rZW4ubmV4dCh1c2VyLnRva2VuKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy51c2VyID0gdXNlcjtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2UgaWYgKGNvbmZpZy5sYW5nKSB7XG4gICAgICAgIHRoaXMubG9jYWxlID0gY29uZmlnLmxhbmc7XG4gICAgICAgIHRoaXMubGFuZy5uZXh0KHRoaXMubG9jYWxlKTtcbiAgICAgICAgdGhpcy51c2VyID0ge1xuICAgICAgICAgIGxhbmc6IGNvbmZpZy5sYW5nLFxuICAgICAgICAgIHRva2VuOiBjb25maWcudG9rZW5cbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIGlmIChjb25maWcudG9rZW4pIHtcbiAgICAgICAgdGhpcy50b2tlbi5uZXh0KGNvbmZpZy50b2tlbik7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBuZXcgRXJyb3IoJ1BsZWFzZSBwcm92aWRlIGVuZHBvaW50Jyk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gKiBAcHJpdmF0ZVxuICogR2VuZXJhdGUgUmFuZG9tIHVuaXEgSWQgZm9yIEtvbnZlcnNvIEluc3RhbmNlXG4gKi9cbiAgcHJpdmF0ZSBndWlkKCkge1xuICAgIGxldCByYW5kb20gPSAoKSA9PiB7XG4gICAgICByZXR1cm4gTWF0aC5mbG9vcigoMSArIE1hdGgucmFuZG9tKCkpICogMHgxMDAwMClcbiAgICAgICAgLnRvU3RyaW5nKDE2KVxuICAgICAgICAuc3Vic3RyaW5nKDEpO1xuICAgIH07XG4gICAgcmV0dXJuIHJhbmRvbSgpICsgcmFuZG9tKCkgKyAnLScgKyByYW5kb20oKSArICctJyArIHJhbmRvbSgpICsgJy0nICsgcmFuZG9tKCkgKyAnLScgKyByYW5kb20oKSArIHJhbmRvbSgpICsgcmFuZG9tKCk7XG4gIH1cblxuXG5cbiAgLyoqXG4gKiBTZW5kIFByb2ZpbCBUbyBiYWNrZW5kXG4gKiBAUG9zdCBQcm9maWxcbiAqL1xuICBwdWJsaWMgYXN5bmMgY3JlYXRlUHJvZmlsKGRhdGE6IGFueSk6IFByb21pc2U8c3RyaW5nIHwgYW55PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGNvbnN0IG9wdGlvbnM6IGFueSA9IHtcbiAgICAgICAgaGVhZGVyczogdGhpcy5oZWFkZXJcbiAgICAgIH07XG4gICAgICB0aGlzLmh0dHAucG9zdChgJHt0aGlzLmVuZHBvaW50fS9wcm9maWxzYCwgZGF0YSwgb3B0aW9ucylcbiAgICAgICAgLnN1YnNjcmliZSgoZGF0YTogYW55KSA9PiB7XG4gICAgICAgICAgcmVzb2x2ZShkYXRhKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgYXN5bmMgdXBkYXRlUHJvZmlsKGRhdGE6IGFueSk6IFByb21pc2U8c3RyaW5nIHwgYW55PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGNvbnN0IG9wdGlvbnM6IGFueSA9IHtcbiAgICAgICAgaGVhZGVyczogdGhpcy5oZWFkZXJcbiAgICAgIH07XG4gICAgICB0aGlzLmh0dHAucHV0KGAke3RoaXMuZW5kcG9pbnR9L3Byb2ZpbHNgLCBkYXRhLCBvcHRpb25zKVxuICAgICAgICAuc3Vic2NyaWJlKChkYXRhOiBhbnkpID0+IHtcbiAgICAgICAgICByZXNvbHZlKGRhdGEpO1xuICAgICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBhc3luYyBkZWxldGVQcm9maWwoaWQ6IGFueSk6IFByb21pc2U8c3RyaW5nIHwgYW55PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGNvbnN0IG9wdGlvbnM6IGFueSA9IHtcbiAgICAgICAgaGVhZGVyczogdGhpcy5oZWFkZXJcbiAgICAgIH07XG4gICAgICB0aGlzLmh0dHAuZGVsZXRlKGAke3RoaXMuZW5kcG9pbnR9L3Byb2ZpbHMvJHtpZH1gLCBvcHRpb25zKVxuICAgICAgICAuc3Vic2NyaWJlKChkYXRhOiBhbnkpID0+IHtcbiAgICAgICAgICByZXNvbHZlKGRhdGEpO1xuICAgICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG5cbiAgcHVibGljIGFzeW5jIGdldFByb2ZpbChpZDogYW55KTogUHJvbWlzZTxzdHJpbmcgfCBhbnk+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgY29uc3Qgb3B0aW9uczogYW55ID0ge1xuICAgICAgICBoZWFkZXJzOiB0aGlzLmhlYWRlclxuICAgICAgfTtcbiAgICAgIHRoaXMuaHR0cC5nZXQoYCR7dGhpcy5lbmRwb2ludH0vcHJvZmlscy8ke2lkfWAsIG9wdGlvbnMpXG4gICAgICAgIC5zdWJzY3JpYmUoKGRhdGE6IGFueSkgPT4ge1xuICAgICAgICAgIHJlc29sdmUoZGF0YSk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIGFzeW5jIGdldEFsbFByb2ZpbCgpOiBQcm9taXNlPHN0cmluZyB8IGFueT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBjb25zdCBvcHRpb25zOiBhbnkgPSB7XG4gICAgICAgIGhlYWRlcnM6IHRoaXMuaGVhZGVyXG4gICAgICB9O1xuICAgICAgdGhpcy5odHRwLmdldChgJHt0aGlzLmVuZHBvaW50fS9wcm9maWxzYCwgb3B0aW9ucylcbiAgICAgICAgLnN1YnNjcmliZSgoZGF0YTogYW55KSA9PiB7XG4gICAgICAgICAgdGhpcy50ZW1wbGF0ZXMubmV4dChkYXRhKVxuICAgICAgICAgIHJlc29sdmUoZGF0YSk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICB9XG4gIHB1YmxpYyBhc3luYyBnZXRBbGxUYWdzKCk6IFByb21pc2U8c3RyaW5nIHwgYW55PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGNvbnN0IG9wdGlvbnM6IGFueSA9IHtcbiAgICAgICAgaGVhZGVyczogdGhpcy5oZWFkZXJcbiAgICAgIH07XG4gICAgICB0aGlzLmh0dHAuZ2V0KGAke3RoaXMuZW5kcG9pbnR9L3RhZ3NgLCBvcHRpb25zKVxuICAgICAgICAuc3Vic2NyaWJlKChkYXRhOiBhbnkpID0+IHtcbiAgICAgICAgICByZXNvbHZlKGRhdGEpO1xuICAgICAgICB9KTtcbiAgICB9KTtcbiAgfVxuICBwdWJsaWMgYXN5bmMgZ2V0Q29udGFjdHMoKTogUHJvbWlzZTxzdHJpbmcgfCBhbnk+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgY29uc3Qgb3B0aW9uczogYW55ID0ge1xuICAgICAgICBoZWFkZXJzOiB0aGlzLmhlYWRlclxuICAgICAgfTtcbiAgICAgIHRoaXMuX2NvbnRhY3RzLnN1YnNjcmliZSgoY29udGFjdHMpID0+IHtcbiAgICAgICAgaWYgKCFjb250YWN0cykge1xuICAgICAgICAgIHRoaXMuaHR0cC5nZXQoYCR7dGhpcy5lbmRwb2ludC5zcGxpdCgnL29uYm9hcmRpbmcnKVswXX0vY29udGFjdC9zaXRlTGlzdGAsIG9wdGlvbnMpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKChkYXRhOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5jb250YWN0cy5uZXh0KGRhdGEudXNlckxpc3QpXG4gICAgICAgICAgICAgIHJlc29sdmUoZGF0YS51c2VyTGlzdCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXNvbHZlKGNvbnRhY3RzKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0pO1xuICB9XG5cblxuXG5cbiAgYXN5bmMgYXNpZ25Qcm9maWwoKSB7XG5cbiAgfVxuXG4gIGFzeW5jIGdldFRhZ3MoKSB7XG5cbiAgfVxuXG5cbiAgYXN5bmMgZ2V0Q2F0ZWdvcnkoKSB7XG5cbiAgfVxuXG5cblxuXG4gIC8vIENSVUQgT05CT0FSRElOR1xuXG4gIHB1YmxpYyBhc3luYyBjcmVhdGVPbmJvYXJkaW5nKGRhdGE6IGFueSk6IFByb21pc2U8c3RyaW5nIHwgYW55PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGNvbnN0IG9wdGlvbnM6IGFueSA9IHtcbiAgICAgICAgaGVhZGVyczogdGhpcy5oZWFkZXJcbiAgICAgIH07XG4gICAgICB0aGlzLmh0dHAucG9zdChgJHt0aGlzLmVuZHBvaW50fS9vbmJvYXJkaW5nYCwgZGF0YSwgb3B0aW9ucylcbiAgICAgICAgLnN1YnNjcmliZSgoZGF0YTogYW55KSA9PiB7XG4gICAgICAgICAgcmVzb2x2ZShkYXRhKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgYXN5bmMgdXBkYXRlT25ib2FyZGluZyhkYXRhOiBhbnkpOiBQcm9taXNlPHN0cmluZyB8IGFueT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBjb25zdCBvcHRpb25zOiBhbnkgPSB7XG4gICAgICAgIGhlYWRlcnM6IHRoaXMuaGVhZGVyXG4gICAgICB9O1xuICAgICAgdGhpcy5odHRwLnB1dChgJHt0aGlzLmVuZHBvaW50fS9vbmJvYXJkaW5nYCwgZGF0YSwgb3B0aW9ucylcbiAgICAgICAgLnN1YnNjcmliZSgoZGF0YTogYW55KSA9PiB7XG4gICAgICAgICAgcmVzb2x2ZShkYXRhKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgYXN5bmMgZGVsZXRlT25ib2FyZGluZyhpZDogYW55KTogUHJvbWlzZTxzdHJpbmcgfCBhbnk+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgY29uc3Qgb3B0aW9uczogYW55ID0ge1xuICAgICAgICBoZWFkZXJzOiB0aGlzLmhlYWRlclxuICAgICAgfTtcbiAgICAgIHRoaXMuaHR0cC5kZWxldGUoYCR7dGhpcy5lbmRwb2ludH0vb25ib2FyZGluZy8ke2lkfWAsIG9wdGlvbnMpXG4gICAgICAgIC5zdWJzY3JpYmUoKGRhdGE6IGFueSkgPT4ge1xuICAgICAgICAgIHJlc29sdmUoZGF0YSk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cblxuICBwdWJsaWMgYXN5bmMgZ2V0T25ib2FyZGluZyhpZDogYW55KTogUHJvbWlzZTxzdHJpbmcgfCBhbnk+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgY29uc3Qgb3B0aW9uczogYW55ID0ge1xuICAgICAgICBoZWFkZXJzOiB0aGlzLmhlYWRlclxuICAgICAgfTtcbiAgICAgIHRoaXMuaHR0cC5nZXQoYCR7dGhpcy5lbmRwb2ludH0vb25ib2FyZGluZy8ke2lkfWAsIG9wdGlvbnMpXG4gICAgICAgIC5zdWJzY3JpYmUoKGRhdGE6IGFueSkgPT4ge1xuICAgICAgICAgIHJlc29sdmUoZGF0YSk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIGFzeW5jIGdldEFsbE9uYm9hcmRpbmcocmVjYWxsID0gZmFsc2UpOiBQcm9taXNlPHN0cmluZyB8IGFueT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB0aGlzLl9vbmJvYXJkaW5nLnN1YnNjcmliZSgob25ib2FyZGluZykgPT4ge1xuICAgICAgICBpZiAoIW9uYm9hcmRpbmcgfHwgcmVjYWxsKSB7XG4gICAgICAgICAgY29uc3Qgb3B0aW9uczogYW55ID0ge1xuICAgICAgICAgICAgaGVhZGVyczogdGhpcy5oZWFkZXJcbiAgICAgICAgICB9O1xuICAgICAgICAgIHRoaXMuaHR0cC5nZXQoYCR7dGhpcy5lbmRwb2ludH0vb25ib2FyZGluZ2AsIG9wdGlvbnMpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKChkYXRhOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5vbmJvYXJkaW5nLm5leHQoZGF0YSlcbiAgICAgICAgICAgICAgcmVzb2x2ZShkYXRhKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlc29sdmUob25ib2FyZGluZylcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9KTtcbiAgfVxufVxuIl19