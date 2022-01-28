import { __awaiter } from "tslib";
import { HttpHeaders } from '@angular/common/http';
import { Inject, Injectable, EventEmitter } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class OnboardingService {
    constructor(config, http) {
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
    buildHeaders() {
        this._token.subscribe((token) => {
            console.log(token);
            console.log('localstorage', localStorage.getItem('token'));
            console.log((token || localStorage.getItem('token')));
            const bearer = 'Bearer ' + (token || localStorage.getItem('token'));
            this.header = new HttpHeaders({
                'Authorization': bearer
            });
        });
    }
    checkHeaderNull() {
        if (!this.token) {
            this.buildHeaders();
        }
    }
    /**
   * @param config
   * @private
   * Initialize Data for User Instance
   */
    initInstance(config) {
        this._auth = !!config.auth;
        if (config.endpoint) {
            this.endpoint = config.endpoint;
            if (config.auth) {
                this.authentication.subscribe((user) => {
                    if (!user.lang && config.lang) {
                        user.lang = config.lang;
                    }
                    this.locale = user.lang;
                    this.lang.next(this.locale);
                    if (user.token) {
                        this.token.next(user.token);
                    }
                    this.user = user;
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
    }
    /**
   * @private
   * Generate Random uniq Id for Konverso Instance
   */
    guid() {
        let random = () => {
            return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1);
        };
        return random() + random() + '-' + random() + '-' + random() + '-' + random() + '-' + random() + random() + random();
    }
    /**
   * Send Profil To backend
   * @Post Profil
   */
    createProfil(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                const options = {
                    headers: this.header
                };
                this.http.post(`${this.endpoint}/profils`, data, options)
                    .subscribe((data) => {
                    resolve(data);
                });
            });
        });
    }
    updateProfil(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                const options = {
                    headers: this.header
                };
                this.http.put(`${this.endpoint}/profils`, data, options)
                    .subscribe((data) => {
                    resolve(data);
                });
            });
        });
    }
    deleteProfil(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                const options = {
                    headers: this.header
                };
                this.http.delete(`${this.endpoint}/profils/${id}`, options)
                    .subscribe((data) => {
                    resolve(data);
                });
            });
        });
    }
    getProfil(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                const options = {
                    headers: this.header
                };
                this.http.get(`${this.endpoint}/profils/${id}`, options)
                    .subscribe((data) => {
                    resolve(data);
                });
            });
        });
    }
    getAllProfil() {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                const options = {
                    headers: this.header
                };
                console.log(options);
                console.log(this.token);
                this.http.get(`${this.endpoint}/profils`, options)
                    .subscribe((data) => {
                    this.templates.next(data);
                    resolve(data);
                });
            });
        });
    }
    getAllTags() {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                const options = {
                    headers: this.header
                };
                this.http.get(`${this.endpoint}/tags`, options)
                    .subscribe((data) => {
                    resolve(data);
                });
            });
        });
    }
    getContacts() {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                const options = {
                    headers: this.header
                };
                this._contacts.subscribe((contacts) => {
                    if (!contacts) {
                        this.http.get(`${this.endpoint.split('/onboarding')[0]}/contact/siteList`, options)
                            .subscribe((data) => {
                            this.contacts.next(data.userList);
                            resolve(data.userList);
                        });
                    }
                    else {
                        resolve(contacts);
                    }
                });
            });
        });
    }
    asignProfil() {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
    getTags() {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
    getCategory() {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
    // CRUD ONBOARDING
    createOnboarding(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                const options = {
                    headers: this.header
                };
                this.http.post(`${this.endpoint}/onboarding`, data, options)
                    .subscribe((data) => {
                    resolve(data);
                });
            });
        });
    }
    updateOnboarding(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                const options = {
                    headers: this.header
                };
                this.http.put(`${this.endpoint}/onboarding`, data, options)
                    .subscribe((data) => {
                    resolve(data);
                });
            });
        });
    }
    deleteOnboarding(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                const options = {
                    headers: this.header
                };
                this.http.delete(`${this.endpoint}/onboarding/${id}`, options)
                    .subscribe((data) => {
                    resolve(data);
                });
            });
        });
    }
    getOnboarding(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                const options = {
                    headers: this.header
                };
                this.http.get(`${this.endpoint}/onboarding/${id}`, options)
                    .subscribe((data) => {
                    resolve(data);
                });
            });
        });
    }
    getAllOnboarding(recall = false) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                this._onboarding.subscribe((onboarding) => {
                    if (!onboarding || recall) {
                        const options = {
                            headers: this.header
                        };
                        this.http.get(`${this.endpoint}/onboarding`, options)
                            .subscribe((data) => {
                            this.onboarding.next(data);
                            resolve(data);
                        });
                    }
                    else {
                        resolve(onboarding);
                    }
                });
            });
        });
    }
}
OnboardingService.ɵfac = function OnboardingService_Factory(t) { return new (t || OnboardingService)(i0.ɵɵinject('__NgxOnboarding__'), i0.ɵɵinject(i1.HttpClient)); };
OnboardingService.ɵprov = i0.ɵɵdefineInjectable({ token: OnboardingService, factory: OnboardingService.ɵfac });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(OnboardingService, [{
        type: Injectable
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: ['__NgxOnboarding__']
            }] }, { type: i1.HttpClient }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib25ib2FyZGluZy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vb25ib2FyZGluZy8iLCJzb3VyY2VzIjpbImxpYi9vbmJvYXJkaW5nLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBYyxXQUFXLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUMvRCxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakUsT0FBTyxFQUFFLGVBQWUsRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7OztBQUloRCxNQUFNLE9BQU8saUJBQWlCO0lBa0I1QixZQUF5QyxNQUEyQixFQUFVLElBQWdCO1FBQWhCLFNBQUksR0FBSixJQUFJLENBQVk7UUFqQjlGLGFBQVEsR0FBcUIsSUFBSSxPQUFPLEVBQVcsQ0FBQztRQUM1QyxVQUFLLEdBQTRCLElBQUksZUFBZSxDQUFTLElBQUksQ0FBQyxDQUFDO1FBQ25FLFdBQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BDLGNBQVMsR0FBeUIsSUFBSSxlQUFlLENBQU0sSUFBSSxDQUFDLENBQUM7UUFDakUsZUFBVSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDM0MsZUFBVSxHQUF5QixJQUFJLGVBQWUsQ0FBTSxJQUFJLENBQUMsQ0FBQztRQUNsRSxnQkFBVyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDN0MsYUFBUSxHQUF5QixJQUFJLGVBQWUsQ0FBTSxJQUFJLENBQUMsQ0FBQztRQUNoRSxjQUFTLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUN6QyxtQkFBYyxHQUFpQyxJQUFJLFlBQVksRUFBa0IsQ0FBQztRQUtsRixTQUFJLEdBQUcsSUFBSSxlQUFlLENBQUMsRUFBRSxDQUFDLENBQUM7UUFFL0IsYUFB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LCBIdHRwSGVhZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IE9uYm9hcmRpbmdJbnRlcmZhY2UsIE9uYm9hcmRpbmdVc2VyIH0gZnJvbSAnLi4vaW50ZXJmYWNlL09uYm9hcmRpbmdJbnRlcmZhY2UnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgT25ib2FyZGluZ1NlcnZpY2Uge1xuICBjYW5FeGl0JDogU3ViamVjdDxib29sZWFuPiA9IG5ldyBTdWJqZWN0PGJvb2xlYW4+KCk7XG4gIHByaXZhdGUgdG9rZW46IEJlaGF2aW9yU3ViamVjdDxzdHJpbmc+ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxzdHJpbmc+KG51bGwpO1xuICBwcml2YXRlIF90b2tlbiA9IHRoaXMudG9rZW4uYXNPYnNlcnZhYmxlKCk7XG4gIHB1YmxpYyB0ZW1wbGF0ZXM6IEJlaGF2aW9yU3ViamVjdDxhbnk+ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxhbnk+KG51bGwpO1xuICBwdWJsaWMgX3RlbXBsYXRlcyA9IHRoaXMudGVtcGxhdGVzLmFzT2JzZXJ2YWJsZSgpO1xuICBwdWJsaWMgb25ib2FyZGluZzogQmVoYXZpb3JTdWJqZWN0PGFueT4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0PGFueT4obnVsbCk7XG4gIHB1YmxpYyBfb25ib2FyZGluZyA9IHRoaXMub25ib2FyZGluZy5hc09ic2VydmFibGUoKTtcbiAgcHVibGljIGNvbnRhY3RzOiBCZWhhdmlvclN1YmplY3Q8YW55PiA9IG5ldyBCZWhhdmlvclN1YmplY3Q8YW55PihudWxsKTtcbiAgcHVibGljIF9jb250YWN0cyA9IHRoaXMuY29udGFjdHMuYXNPYnNlcnZhYmxlKCk7XG4gIHB1YmxpYyBhdXRoZW50aWNhdGlvbjogRXZlbnRFbWl0dGVyPE9uYm9hcmRpbmdVc2VyPiA9IG5ldyBFdmVudEVtaXR0ZXI8T25ib2FyZGluZ1VzZXI+KCk7XG4gIHByaXZhdGUgaGVhZGVyOiBIdHRwSGVhZGVycztcbiAgcHVibGljIGxvY2FsZTogc3RyaW5nO1xuICBwcml2YXRlIGVuZHBvaW50OiBzdHJpbmc7XG4gIHByaXZhdGUgdXNlcjogT25ib2FyZGluZ1VzZXI7XG4gIHB1YmxpYyBsYW5nID0gbmV3IEJlaGF2aW9yU3ViamVjdCgnJyk7XG4gIHB1YmxpYyBfYXV0aDogYm9vbGVhbjtcbiAgcHVibGljIG1haW5QYXRoOiBzdHJpbmcgPSBcIlwiXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoJ19fTmd4T25ib2FyZGluZ19fJykgY29uZmlnOiBPbmJvYXJkaW5nSW50ZXJmYWNlLCBwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQpIHtcbiAgICB0aGlzLmJ1aWxkSGVhZGVycygpO1xuICAgIHRoaXMuaW5pdEluc3RhbmNlKGNvbmZpZyk7XG4gIH1cblxuXG4gIC8qKlxuICogQHByaXZhdGVcbiAqIEdlbmVyYXRlIEhlYWRlciBmb3IgYmFja2VuZCBjYWxsXG4gKi9cbiAgcHJpdmF0ZSBidWlsZEhlYWRlcnMoKSB7XG4gICAgdGhpcy5fdG9rZW4uc3Vic2NyaWJlKCh0b2tlbjogc3RyaW5nKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyh0b2tlbik7XG4gICAgICBjb25zb2xlLmxvZygnbG9jYWxzdG9yYWdlJywgbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJykpO1xuICAgICAgY29uc29sZS5sb2coKHRva2VuIHx8IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpKSk7XG4gICAgICBjb25zdCBiZWFyZXI6IHN0cmluZyA9ICdCZWFyZXIgJyArICh0b2tlbiB8fCBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKSk7XG4gICAgICB0aGlzLmhlYWRlciA9IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAgICdBdXRob3JpemF0aW9uJzogYmVhcmVyXG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuICBcbiAgcHJpdmF0ZSBjaGVja0hlYWRlck51bGwoKSB7XG4gICAgaWYgKCF0aGlzLnRva2VuKSB7XG4gICAgICB0aGlzLmJ1aWxkSGVhZGVycygpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICogQHBhcmFtIGNvbmZpZ1xuICogQHByaXZhdGVcbiAqIEluaXRpYWxpemUgRGF0YSBmb3IgVXNlciBJbnN0YW5jZVxuICovXG4gIHByaXZhdGUgaW5pdEluc3RhbmNlKGNvbmZpZzogT25ib2FyZGluZ0ludGVyZmFjZSkge1xuICAgIHRoaXMuX2F1dGggPSAhIWNvbmZpZy5hdXRoO1xuICAgIGlmIChjb25maWcuZW5kcG9pbnQpIHtcbiAgICAgIHRoaXMuZW5kcG9pbnQgPSBjb25maWcuZW5kcG9pbnQ7XG4gICAgICBpZiAoY29uZmlnLmF1dGgpIHtcbiAgICAgICAgdGhpcy5hdXRoZW50aWNhdGlvbi5zdWJzY3JpYmUoKHVzZXI6IE9uYm9hcmRpbmdVc2VyKSA9PiB7XG4gICAgICAgICAgaWYgKCF1c2VyLmxhbmcgJiYgY29uZmlnLmxhbmcpIHtcbiAgICAgICAgICAgIHVzZXIubGFuZyA9IGNvbmZpZy5sYW5nO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLmxvY2FsZSA9IHVzZXIubGFuZztcbiAgICAgICAgICB0aGlzLmxhbmcubmV4dCh0aGlzLmxvY2FsZSk7XG4gICAgICAgICAgaWYgKHVzZXIudG9rZW4pIHtcbiAgICAgICAgICAgIHRoaXMudG9rZW4ubmV4dCh1c2VyLnRva2VuKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy51c2VyID0gdXNlcjtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2UgaWYgKGNvbmZpZy5sYW5nKSB7XG4gICAgICAgIHRoaXMubG9jYWxlID0gY29uZmlnLmxhbmc7XG4gICAgICAgIHRoaXMubGFuZy5uZXh0KHRoaXMubG9jYWxlKTtcbiAgICAgICAgdGhpcy51c2VyID0ge1xuICAgICAgICAgIGxhbmc6IGNvbmZpZy5sYW5nLFxuICAgICAgICAgIHRva2VuOiBjb25maWcudG9rZW5cbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIGlmIChjb25maWcudG9rZW4pIHtcbiAgICAgICAgdGhpcy50b2tlbi5uZXh0KGNvbmZpZy50b2tlbik7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBuZXcgRXJyb3IoJ1BsZWFzZSBwcm92aWRlIGVuZHBvaW50Jyk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gKiBAcHJpdmF0ZVxuICogR2VuZXJhdGUgUmFuZG9tIHVuaXEgSWQgZm9yIEtvbnZlcnNvIEluc3RhbmNlXG4gKi9cbiAgcHJpdmF0ZSBndWlkKCkge1xuICAgIGxldCByYW5kb20gPSAoKSA9PiB7XG4gICAgICByZXR1cm4gTWF0aC5mbG9vcigoMSArIE1hdGgucmFuZG9tKCkpICogMHgxMDAwMClcbiAgICAgICAgLnRvU3RyaW5nKDE2KVxuICAgICAgICAuc3Vic3RyaW5nKDEpO1xuICAgIH07XG4gICAgcmV0dXJuIHJhbmRvbSgpICsgcmFuZG9tKCkgKyAnLScgKyByYW5kb20oKSArICctJyArIHJhbmRvbSgpICsgJy0nICsgcmFuZG9tKCkgKyAnLScgKyByYW5kb20oKSArIHJhbmRvbSgpICsgcmFuZG9tKCk7XG4gIH1cblxuXG5cbiAgLyoqXG4gKiBTZW5kIFByb2ZpbCBUbyBiYWNrZW5kXG4gKiBAUG9zdCBQcm9maWxcbiAqL1xuICBwdWJsaWMgYXN5bmMgY3JlYXRlUHJvZmlsKGRhdGE6IGFueSk6IFByb21pc2U8c3RyaW5nIHwgYW55PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGNvbnN0IG9wdGlvbnM6IGFueSA9IHtcbiAgICAgICAgaGVhZGVyczogdGhpcy5oZWFkZXJcbiAgICAgIH07XG4gICAgICB0aGlzLmh0dHAucG9zdChgJHt0aGlzLmVuZHBvaW50fS9wcm9maWxzYCwgZGF0YSwgb3B0aW9ucylcbiAgICAgICAgLnN1YnNjcmliZSgoZGF0YTogYW55KSA9PiB7XG4gICAgICAgICAgcmVzb2x2ZShkYXRhKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgYXN5bmMgdXBkYXRlUHJvZmlsKGRhdGE6IGFueSk6IFByb21pc2U8c3RyaW5nIHwgYW55PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGNvbnN0IG9wdGlvbnM6IGFueSA9IHtcbiAgICAgICAgaGVhZGVyczogdGhpcy5oZWFkZXJcbiAgICAgIH07XG4gICAgICB0aGlzLmh0dHAucHV0KGAke3RoaXMuZW5kcG9pbnR9L3Byb2ZpbHNgLCBkYXRhLCBvcHRpb25zKVxuICAgICAgICAuc3Vic2NyaWJlKChkYXRhOiBhbnkpID0+IHtcbiAgICAgICAgICByZXNvbHZlKGRhdGEpO1xuICAgICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBhc3luYyBkZWxldGVQcm9maWwoaWQ6IGFueSk6IFByb21pc2U8c3RyaW5nIHwgYW55PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGNvbnN0IG9wdGlvbnM6IGFueSA9IHtcbiAgICAgICAgaGVhZGVyczogdGhpcy5oZWFkZXJcbiAgICAgIH07XG4gICAgICB0aGlzLmh0dHAuZGVsZXRlKGAke3RoaXMuZW5kcG9pbnR9L3Byb2ZpbHMvJHtpZH1gLCBvcHRpb25zKVxuICAgICAgICAuc3Vic2NyaWJlKChkYXRhOiBhbnkpID0+IHtcbiAgICAgICAgICByZXNvbHZlKGRhdGEpO1xuICAgICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG5cbiAgcHVibGljIGFzeW5jIGdldFByb2ZpbChpZDogYW55KTogUHJvbWlzZTxzdHJpbmcgfCBhbnk+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgY29uc3Qgb3B0aW9uczogYW55ID0ge1xuICAgICAgICBoZWFkZXJzOiB0aGlzLmhlYWRlclxuICAgICAgfTtcbiAgICAgIHRoaXMuaHR0cC5nZXQoYCR7dGhpcy5lbmRwb2ludH0vcHJvZmlscy8ke2lkfWAsIG9wdGlvbnMpXG4gICAgICAgIC5zdWJzY3JpYmUoKGRhdGE6IGFueSkgPT4ge1xuICAgICAgICAgIHJlc29sdmUoZGF0YSk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIGFzeW5jIGdldEFsbFByb2ZpbCgpOiBQcm9taXNlPHN0cmluZyB8IGFueT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBjb25zdCBvcHRpb25zOiBhbnkgPSB7XG4gICAgICAgIGhlYWRlcnM6IHRoaXMuaGVhZGVyXG4gICAgICB9O1xuICAgICAgY29uc29sZS5sb2cob3B0aW9ucyk7XG4gICAgICBjb25zb2xlLmxvZyh0aGlzLnRva2VuKTtcbiAgICAgIHRoaXMuaHR0cC5nZXQoYCR7dGhpcy5lbmRwb2ludH0vcHJvZmlsc2AsIG9wdGlvbnMpXG4gICAgICAgIC5zdWJzY3JpYmUoKGRhdGE6IGFueSkgPT4ge1xuICAgICAgICAgIHRoaXMudGVtcGxhdGVzLm5leHQoZGF0YSlcbiAgICAgICAgICByZXNvbHZlKGRhdGEpO1xuICAgICAgICB9KTtcbiAgICB9KTtcbiAgfVxuICBwdWJsaWMgYXN5bmMgZ2V0QWxsVGFncygpOiBQcm9taXNlPHN0cmluZyB8IGFueT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBjb25zdCBvcHRpb25zOiBhbnkgPSB7XG4gICAgICAgIGhlYWRlcnM6IHRoaXMuaGVhZGVyXG4gICAgICB9O1xuICAgICAgdGhpcy5odHRwLmdldChgJHt0aGlzLmVuZHBvaW50fS90YWdzYCwgb3B0aW9ucylcbiAgICAgICAgLnN1YnNjcmliZSgoZGF0YTogYW55KSA9PiB7XG4gICAgICAgICAgcmVzb2x2ZShkYXRhKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbiAgcHVibGljIGFzeW5jIGdldENvbnRhY3RzKCk6IFByb21pc2U8c3RyaW5nIHwgYW55PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGNvbnN0IG9wdGlvbnM6IGFueSA9IHtcbiAgICAgICAgaGVhZGVyczogdGhpcy5oZWFkZXJcbiAgICAgIH07XG4gICAgICB0aGlzLl9jb250YWN0cy5zdWJzY3JpYmUoKGNvbnRhY3RzKSA9PiB7XG4gICAgICAgIGlmICghY29udGFjdHMpIHtcbiAgICAgICAgICB0aGlzLmh0dHAuZ2V0KGAke3RoaXMuZW5kcG9pbnQuc3BsaXQoJy9vbmJvYXJkaW5nJylbMF19L2NvbnRhY3Qvc2l0ZUxpc3RgLCBvcHRpb25zKVxuICAgICAgICAgICAgLnN1YnNjcmliZSgoZGF0YTogYW55KSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMuY29udGFjdHMubmV4dChkYXRhLnVzZXJMaXN0KVxuICAgICAgICAgICAgICByZXNvbHZlKGRhdGEudXNlckxpc3QpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVzb2x2ZShjb250YWN0cylcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9KTtcbiAgfVxuXG5cblxuXG4gIGFzeW5jIGFzaWduUHJvZmlsKCkge1xuXG4gIH1cblxuICBhc3luYyBnZXRUYWdzKCkge1xuXG4gIH1cblxuXG4gIGFzeW5jIGdldENhdGVnb3J5KCkge1xuXG4gIH1cblxuXG4gIC8vIENSVUQgT05CT0FSRElOR1xuXG4gIHB1YmxpYyBhc3luYyBjcmVhdGVPbmJvYXJkaW5nKGRhdGE6IGFueSk6IFByb21pc2U8c3RyaW5nIHwgYW55PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGNvbnN0IG9wdGlvbnM6IGFueSA9IHtcbiAgICAgICAgaGVhZGVyczogdGhpcy5oZWFkZXJcbiAgICAgIH07XG4gICAgICB0aGlzLmh0dHAucG9zdChgJHt0aGlzLmVuZHBvaW50fS9vbmJvYXJkaW5nYCwgZGF0YSwgb3B0aW9ucylcbiAgICAgICAgLnN1YnNjcmliZSgoZGF0YTogYW55KSA9PiB7XG4gICAgICAgICAgcmVzb2x2ZShkYXRhKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgYXN5bmMgdXBkYXRlT25ib2FyZGluZyhkYXRhOiBhbnkpOiBQcm9taXNlPHN0cmluZyB8IGFueT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBjb25zdCBvcHRpb25zOiBhbnkgPSB7XG4gICAgICAgIGhlYWRlcnM6IHRoaXMuaGVhZGVyXG4gICAgICB9O1xuICAgICAgdGhpcy5odHRwLnB1dChgJHt0aGlzLmVuZHBvaW50fS9vbmJvYXJkaW5nYCwgZGF0YSwgb3B0aW9ucylcbiAgICAgICAgLnN1YnNjcmliZSgoZGF0YTogYW55KSA9PiB7XG4gICAgICAgICAgcmVzb2x2ZShkYXRhKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgYXN5bmMgZGVsZXRlT25ib2FyZGluZyhpZDogYW55KTogUHJvbWlzZTxzdHJpbmcgfCBhbnk+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgY29uc3Qgb3B0aW9uczogYW55ID0ge1xuICAgICAgICBoZWFkZXJzOiB0aGlzLmhlYWRlclxuICAgICAgfTtcbiAgICAgIHRoaXMuaHR0cC5kZWxldGUoYCR7dGhpcy5lbmRwb2ludH0vb25ib2FyZGluZy8ke2lkfWAsIG9wdGlvbnMpXG4gICAgICAgIC5zdWJzY3JpYmUoKGRhdGE6IGFueSkgPT4ge1xuICAgICAgICAgIHJlc29sdmUoZGF0YSk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cblxuICBwdWJsaWMgYXN5bmMgZ2V0T25ib2FyZGluZyhpZDogYW55KTogUHJvbWlzZTxzdHJpbmcgfCBhbnk+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgY29uc3Qgb3B0aW9uczogYW55ID0ge1xuICAgICAgICBoZWFkZXJzOiB0aGlzLmhlYWRlclxuICAgICAgfTtcbiAgICAgIHRoaXMuaHR0cC5nZXQoYCR7dGhpcy5lbmRwb2ludH0vb25ib2FyZGluZy8ke2lkfWAsIG9wdGlvbnMpXG4gICAgICAgIC5zdWJzY3JpYmUoKGRhdGE6IGFueSkgPT4ge1xuICAgICAgICAgIHJlc29sdmUoZGF0YSk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIGFzeW5jIGdldEFsbE9uYm9hcmRpbmcocmVjYWxsID0gZmFsc2UpOiBQcm9taXNlPHN0cmluZyB8IGFueT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB0aGlzLl9vbmJvYXJkaW5nLnN1YnNjcmliZSgob25ib2FyZGluZykgPT4ge1xuICAgICAgICBpZiAoIW9uYm9hcmRpbmcgfHwgcmVjYWxsKSB7XG4gICAgICAgICAgY29uc3Qgb3B0aW9uczogYW55ID0ge1xuICAgICAgICAgICAgaGVhZGVyczogdGhpcy5oZWFkZXJcbiAgICAgICAgICB9O1xuICAgICAgICAgIHRoaXMuaHR0cC5nZXQoYCR7dGhpcy5lbmRwb2ludH0vb25ib2FyZGluZ2AsIG9wdGlvbnMpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKChkYXRhOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5vbmJvYXJkaW5nLm5leHQoZGF0YSlcbiAgICAgICAgICAgICAgcmVzb2x2ZShkYXRhKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlc29sdmUob25ib2FyZGluZylcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9KTtcbiAgfVxufVxuIl19