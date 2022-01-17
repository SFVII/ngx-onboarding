import { __awaiter, __decorate, __param } from "tslib";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable, EventEmitter } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
let OnboardingService = class OnboardingService {
    constructor(config, http) {
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
    buildHeaders() {
        this._token.subscribe((token) => {
            const bearer = 'Bearer ' + token;
            this.header = new HttpHeaders({
                'Authorization': bearer
            });
        });
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
};
OnboardingService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: ['__NgxOnboarding__',] }] },
    { type: HttpClient }
];
OnboardingService = __decorate([
    Injectable(),
    __param(0, Inject('__NgxOnboarding__'))
], OnboardingService);
export { OnboardingService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib25ib2FyZGluZy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vb25ib2FyZGluZy8iLCJzb3VyY2VzIjpbImxpYi9vbmJvYXJkaW5nLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDL0QsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFJdkMsSUFBYSxpQkFBaUIsR0FBOUIsTUFBYSxpQkFBaUI7SUFpQjVCLFlBQXlDLE1BQTJCLEVBQVUsSUFBZ0I7UUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTtRQWhCdEYsVUFBSyxHQUE0QixJQUFJLGVBQWUsQ0FBUyxJQUFJLENBQUMsQ0FBQztRQUNuRSxXQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQyxjQUFTLEdBQXlCLElBQUksZUFBZSxDQUFNLElBQUksQ0FBQyxDQUFDO1FBQ2pFLGVBQVUsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQzNDLGVBQVUsR0FBeUIsSUFBSSxlQUFlLENBQU0sSUFBSSxDQUFDLENBQUM7UUFDbEUsZ0JBQVcsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQzdDLGFBQVEsR0FBeUIsSUFBSSxlQUFlLENBQU0sSUFBSSxDQUFDLENBQUM7UUFDaEUsY0FBUyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDekMsbUJBQWMsR0FBaUMsSUFBSSxZQUFZLEVBQWtCLENBQUM7UUFLbEYsU0FBSSxHQUFHLElBQUksZUFBZSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBRS9CLGFBQVEsR0FBVyxFQUFFLENBQUE7UUFFMUIsSUFB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Q0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLGFBQWEsRUFBRSxPQUFPLENBQUM7NkJBQ2xELFNBQVMsQ0FBQyxDQUFDLElBQVMsRUFBRSxFQUFFOzRCQUN2QixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTs0QkFDMUIsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO3dCQUNoQixDQUFDLENBQUMsQ0FBQztxQkFDTjt5QkFBTTt3QkFDTCxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUE7cUJBQ3BCO2dCQUNILENBQUMsQ0FBQyxDQUFBO1lBQ0osQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDO0tBQUE7Q0FDRixDQUFBOzs0Q0EvUGMsTUFBTSxTQUFDLG1CQUFtQjtZQUE2QyxVQUFVOztBQWpCbkYsaUJBQWlCO0lBRDdCLFVBQVUsRUFBRTtJQWtCRSxXQUFBLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxDQUFBO0dBakI3QixpQkFBaUIsQ0FnUjdCO1NBaFJZLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBIZWFkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlLCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgT25ib2FyZGluZ0ludGVyZmFjZSwgT25ib2FyZGluZ1VzZXIgfSBmcm9tICcuLi9pbnRlcmZhY2UvT25ib2FyZGluZ0ludGVyZmFjZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBPbmJvYXJkaW5nU2VydmljZSB7XG4gIHByaXZhdGUgdG9rZW46IEJlaGF2aW9yU3ViamVjdDxzdHJpbmc+ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxzdHJpbmc+KG51bGwpO1xuICBwcml2YXRlIF90b2tlbiA9IHRoaXMudG9rZW4uYXNPYnNlcnZhYmxlKCk7XG4gIHB1YmxpYyB0ZW1wbGF0ZXM6IEJlaGF2aW9yU3ViamVjdDxhbnk+ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxhbnk+KG51bGwpO1xuICBwdWJsaWMgX3RlbXBsYXRlcyA9IHRoaXMudGVtcGxhdGVzLmFzT2JzZXJ2YWJsZSgpO1xuICBwdWJsaWMgb25ib2FyZGluZzogQmVoYXZpb3JTdWJqZWN0PGFueT4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0PGFueT4obnVsbCk7XG4gIHB1YmxpYyBfb25ib2FyZGluZyA9IHRoaXMub25ib2FyZGluZy5hc09ic2VydmFibGUoKTtcbiAgcHVibGljIGNvbnRhY3RzOiBCZWhhdmlvclN1YmplY3Q8YW55PiA9IG5ldyBCZWhhdmlvclN1YmplY3Q8YW55PihudWxsKTtcbiAgcHVibGljIF9jb250YWN0cyA9IHRoaXMuY29udGFjdHMuYXNPYnNlcnZhYmxlKCk7XG4gIHB1YmxpYyBhdXRoZW50aWNhdGlvbjogRXZlbnRFbWl0dGVyPE9uYm9hcmRpbmdVc2VyPiA9IG5ldyBFdmVudEVtaXR0ZXI8T25ib2FyZGluZ1VzZXI+KCk7XG4gIHByaXZhdGUgaGVhZGVyOiBIdHRwSGVhZGVycztcbiAgcHVibGljIGxvY2FsZTogc3RyaW5nO1xuICBwcml2YXRlIGVuZHBvaW50OiBzdHJpbmc7XG4gIHByaXZhdGUgdXNlcjogT25ib2FyZGluZ1VzZXI7XG4gIHB1YmxpYyBsYW5nID0gbmV3IEJlaGF2aW9yU3ViamVjdCgnJyk7XG4gIHB1YmxpYyBfYXV0aDogYm9vbGVhbjtcbiAgcHVibGljIG1haW5QYXRoOiBzdHJpbmcgPSBcIlwiXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoJ19fTmd4T25ib2FyZGluZ19fJykgY29uZmlnOiBPbmJvYXJkaW5nSW50ZXJmYWNlLCBwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQpIHtcbiAgICB0aGlzLmJ1aWxkSGVhZGVycygpO1xuICAgIHRoaXMuaW5pdEluc3RhbmNlKGNvbmZpZyk7XG4gIH1cblxuXG4gIC8qKlxuICogQHByaXZhdGVcbiAqIEdlbmVyYXRlIEhlYWRlciBmb3IgYmFja2VuZCBjYWxsXG4gKi9cbiAgcHJpdmF0ZSBidWlsZEhlYWRlcnMoKSB7XG4gICAgdGhpcy5fdG9rZW4uc3Vic2NyaWJlKCh0b2tlbjogc3RyaW5nKSA9PiB7XG4gICAgICBjb25zdCBiZWFyZXI6IHN0cmluZyA9ICdCZWFyZXIgJyArIHRva2VuO1xuICAgICAgdGhpcy5oZWFkZXIgPSBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgICAnQXV0aG9yaXphdGlvbic6IGJlYXJlclxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuXG4gIC8qKlxuICogQHBhcmFtIGNvbmZpZ1xuICogQHByaXZhdGVcbiAqIEluaXRpYWxpemUgRGF0YSBmb3IgVXNlciBJbnN0YW5jZVxuICovXG4gIHByaXZhdGUgaW5pdEluc3RhbmNlKGNvbmZpZzogT25ib2FyZGluZ0ludGVyZmFjZSkge1xuICAgIHRoaXMuX2F1dGggPSAhIWNvbmZpZy5hdXRoO1xuICAgIGlmIChjb25maWcuZW5kcG9pbnQpIHtcbiAgICAgIHRoaXMuZW5kcG9pbnQgPSBjb25maWcuZW5kcG9pbnQ7XG4gICAgICBpZiAoY29uZmlnLmF1dGgpIHtcbiAgICAgICAgdGhpcy5hdXRoZW50aWNhdGlvbi5zdWJzY3JpYmUoKHVzZXI6IE9uYm9hcmRpbmdVc2VyKSA9PiB7XG4gICAgICAgICAgaWYgKCF1c2VyLmxhbmcgJiYgY29uZmlnLmxhbmcpIHtcbiAgICAgICAgICAgIHVzZXIubGFuZyA9IGNvbmZpZy5sYW5nO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLmxvY2FsZSA9IHVzZXIubGFuZztcbiAgICAgICAgICB0aGlzLmxhbmcubmV4dCh0aGlzLmxvY2FsZSk7XG4gICAgICAgICAgaWYgKHVzZXIudG9rZW4pIHtcbiAgICAgICAgICAgIHRoaXMudG9rZW4ubmV4dCh1c2VyLnRva2VuKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy51c2VyID0gdXNlcjtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2UgaWYgKGNvbmZpZy5sYW5nKSB7XG4gICAgICAgIHRoaXMubG9jYWxlID0gY29uZmlnLmxhbmc7XG4gICAgICAgIHRoaXMubGFuZy5uZXh0KHRoaXMubG9jYWxlKTtcbiAgICAgICAgdGhpcy51c2VyID0ge1xuICAgICAgICAgIGxhbmc6IGNvbmZpZy5sYW5nLFxuICAgICAgICAgIHRva2VuOiBjb25maWcudG9rZW5cbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIGlmIChjb25maWcudG9rZW4pIHtcbiAgICAgICAgdGhpcy50b2tlbi5uZXh0KGNvbmZpZy50b2tlbik7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBuZXcgRXJyb3IoJ1BsZWFzZSBwcm92aWRlIGVuZHBvaW50Jyk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gKiBAcHJpdmF0ZVxuICogR2VuZXJhdGUgUmFuZG9tIHVuaXEgSWQgZm9yIEtvbnZlcnNvIEluc3RhbmNlXG4gKi9cbiAgcHJpdmF0ZSBndWlkKCkge1xuICAgIGxldCByYW5kb20gPSAoKSA9PiB7XG4gICAgICByZXR1cm4gTWF0aC5mbG9vcigoMSArIE1hdGgucmFuZG9tKCkpICogMHgxMDAwMClcbiAgICAgICAgLnRvU3RyaW5nKDE2KVxuICAgICAgICAuc3Vic3RyaW5nKDEpO1xuICAgIH07XG4gICAgcmV0dXJuIHJhbmRvbSgpICsgcmFuZG9tKCkgKyAnLScgKyByYW5kb20oKSArICctJyArIHJhbmRvbSgpICsgJy0nICsgcmFuZG9tKCkgKyAnLScgKyByYW5kb20oKSArIHJhbmRvbSgpICsgcmFuZG9tKCk7XG4gIH1cblxuXG5cbiAgLyoqXG4gKiBTZW5kIFByb2ZpbCBUbyBiYWNrZW5kXG4gKiBAUG9zdCBQcm9maWxcbiAqL1xuICBwdWJsaWMgYXN5bmMgY3JlYXRlUHJvZmlsKGRhdGE6IGFueSk6IFByb21pc2U8c3RyaW5nIHwgYW55PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGNvbnN0IG9wdGlvbnM6IGFueSA9IHtcbiAgICAgICAgaGVhZGVyczogdGhpcy5oZWFkZXJcbiAgICAgIH07XG4gICAgICB0aGlzLmh0dHAucG9zdChgJHt0aGlzLmVuZHBvaW50fS9wcm9maWxzYCwgZGF0YSwgb3B0aW9ucylcbiAgICAgICAgLnN1YnNjcmliZSgoZGF0YTogYW55KSA9PiB7XG4gICAgICAgICAgcmVzb2x2ZShkYXRhKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgYXN5bmMgdXBkYXRlUHJvZmlsKGRhdGE6IGFueSk6IFByb21pc2U8c3RyaW5nIHwgYW55PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGNvbnN0IG9wdGlvbnM6IGFueSA9IHtcbiAgICAgICAgaGVhZGVyczogdGhpcy5oZWFkZXJcbiAgICAgIH07XG4gICAgICB0aGlzLmh0dHAucHV0KGAke3RoaXMuZW5kcG9pbnR9L3Byb2ZpbHNgLCBkYXRhLCBvcHRpb25zKVxuICAgICAgICAuc3Vic2NyaWJlKChkYXRhOiBhbnkpID0+IHtcbiAgICAgICAgICByZXNvbHZlKGRhdGEpO1xuICAgICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBhc3luYyBkZWxldGVQcm9maWwoaWQ6IGFueSk6IFByb21pc2U8c3RyaW5nIHwgYW55PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGNvbnN0IG9wdGlvbnM6IGFueSA9IHtcbiAgICAgICAgaGVhZGVyczogdGhpcy5oZWFkZXJcbiAgICAgIH07XG4gICAgICB0aGlzLmh0dHAuZGVsZXRlKGAke3RoaXMuZW5kcG9pbnR9L3Byb2ZpbHMvJHtpZH1gLCBvcHRpb25zKVxuICAgICAgICAuc3Vic2NyaWJlKChkYXRhOiBhbnkpID0+IHtcbiAgICAgICAgICByZXNvbHZlKGRhdGEpO1xuICAgICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG5cbiAgcHVibGljIGFzeW5jIGdldFByb2ZpbChpZDogYW55KTogUHJvbWlzZTxzdHJpbmcgfCBhbnk+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgY29uc3Qgb3B0aW9uczogYW55ID0ge1xuICAgICAgICBoZWFkZXJzOiB0aGlzLmhlYWRlclxuICAgICAgfTtcbiAgICAgIHRoaXMuaHR0cC5nZXQoYCR7dGhpcy5lbmRwb2ludH0vcHJvZmlscy8ke2lkfWAsIG9wdGlvbnMpXG4gICAgICAgIC5zdWJzY3JpYmUoKGRhdGE6IGFueSkgPT4ge1xuICAgICAgICAgIHJlc29sdmUoZGF0YSk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIGFzeW5jIGdldEFsbFByb2ZpbCgpOiBQcm9taXNlPHN0cmluZyB8IGFueT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBjb25zdCBvcHRpb25zOiBhbnkgPSB7XG4gICAgICAgIGhlYWRlcnM6IHRoaXMuaGVhZGVyXG4gICAgICB9O1xuICAgICAgdGhpcy5odHRwLmdldChgJHt0aGlzLmVuZHBvaW50fS9wcm9maWxzYCwgb3B0aW9ucylcbiAgICAgICAgLnN1YnNjcmliZSgoZGF0YTogYW55KSA9PiB7XG4gICAgICAgICAgdGhpcy50ZW1wbGF0ZXMubmV4dChkYXRhKVxuICAgICAgICAgIHJlc29sdmUoZGF0YSk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICB9XG4gIHB1YmxpYyBhc3luYyBnZXRBbGxUYWdzKCk6IFByb21pc2U8c3RyaW5nIHwgYW55PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGNvbnN0IG9wdGlvbnM6IGFueSA9IHtcbiAgICAgICAgaGVhZGVyczogdGhpcy5oZWFkZXJcbiAgICAgIH07XG4gICAgICB0aGlzLmh0dHAuZ2V0KGAke3RoaXMuZW5kcG9pbnR9L3RhZ3NgLCBvcHRpb25zKVxuICAgICAgICAuc3Vic2NyaWJlKChkYXRhOiBhbnkpID0+IHtcbiAgICAgICAgICByZXNvbHZlKGRhdGEpO1xuICAgICAgICB9KTtcbiAgICB9KTtcbiAgfVxuICBwdWJsaWMgYXN5bmMgZ2V0Q29udGFjdHMoKTogUHJvbWlzZTxzdHJpbmcgfCBhbnk+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgY29uc3Qgb3B0aW9uczogYW55ID0ge1xuICAgICAgICBoZWFkZXJzOiB0aGlzLmhlYWRlclxuICAgICAgfTtcbiAgICAgIHRoaXMuX2NvbnRhY3RzLnN1YnNjcmliZSgoY29udGFjdHMpID0+IHtcbiAgICAgICAgaWYgKCFjb250YWN0cykge1xuICAgICAgICAgIHRoaXMuaHR0cC5nZXQoYCR7dGhpcy5lbmRwb2ludC5zcGxpdCgnL29uYm9hcmRpbmcnKVswXX0vY29udGFjdC9zaXRlTGlzdGAsIG9wdGlvbnMpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKChkYXRhOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5jb250YWN0cy5uZXh0KGRhdGEudXNlckxpc3QpXG4gICAgICAgICAgICAgIHJlc29sdmUoZGF0YS51c2VyTGlzdCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXNvbHZlKGNvbnRhY3RzKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0pO1xuICB9XG5cblxuXG5cbiAgYXN5bmMgYXNpZ25Qcm9maWwoKSB7XG5cbiAgfVxuXG4gIGFzeW5jIGdldFRhZ3MoKSB7XG5cbiAgfVxuXG5cbiAgYXN5bmMgZ2V0Q2F0ZWdvcnkoKSB7XG5cbiAgfVxuXG5cblxuXG4gIC8vIENSVUQgT05CT0FSRElOR1xuXG4gIHB1YmxpYyBhc3luYyBjcmVhdGVPbmJvYXJkaW5nKGRhdGE6IGFueSk6IFByb21pc2U8c3RyaW5nIHwgYW55PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGNvbnN0IG9wdGlvbnM6IGFueSA9IHtcbiAgICAgICAgaGVhZGVyczogdGhpcy5oZWFkZXJcbiAgICAgIH07XG4gICAgICB0aGlzLmh0dHAucG9zdChgJHt0aGlzLmVuZHBvaW50fS9vbmJvYXJkaW5nYCwgZGF0YSwgb3B0aW9ucylcbiAgICAgICAgLnN1YnNjcmliZSgoZGF0YTogYW55KSA9PiB7XG4gICAgICAgICAgcmVzb2x2ZShkYXRhKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgYXN5bmMgdXBkYXRlT25ib2FyZGluZyhkYXRhOiBhbnkpOiBQcm9taXNlPHN0cmluZyB8IGFueT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBjb25zdCBvcHRpb25zOiBhbnkgPSB7XG4gICAgICAgIGhlYWRlcnM6IHRoaXMuaGVhZGVyXG4gICAgICB9O1xuICAgICAgdGhpcy5odHRwLnB1dChgJHt0aGlzLmVuZHBvaW50fS9vbmJvYXJkaW5nYCwgZGF0YSwgb3B0aW9ucylcbiAgICAgICAgLnN1YnNjcmliZSgoZGF0YTogYW55KSA9PiB7XG4gICAgICAgICAgcmVzb2x2ZShkYXRhKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgYXN5bmMgZGVsZXRlT25ib2FyZGluZyhpZDogYW55KTogUHJvbWlzZTxzdHJpbmcgfCBhbnk+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgY29uc3Qgb3B0aW9uczogYW55ID0ge1xuICAgICAgICBoZWFkZXJzOiB0aGlzLmhlYWRlclxuICAgICAgfTtcbiAgICAgIHRoaXMuaHR0cC5kZWxldGUoYCR7dGhpcy5lbmRwb2ludH0vb25ib2FyZGluZy8ke2lkfWAsIG9wdGlvbnMpXG4gICAgICAgIC5zdWJzY3JpYmUoKGRhdGE6IGFueSkgPT4ge1xuICAgICAgICAgIHJlc29sdmUoZGF0YSk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cblxuICBwdWJsaWMgYXN5bmMgZ2V0T25ib2FyZGluZyhpZDogYW55KTogUHJvbWlzZTxzdHJpbmcgfCBhbnk+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgY29uc3Qgb3B0aW9uczogYW55ID0ge1xuICAgICAgICBoZWFkZXJzOiB0aGlzLmhlYWRlclxuICAgICAgfTtcbiAgICAgIHRoaXMuaHR0cC5nZXQoYCR7dGhpcy5lbmRwb2ludH0vb25ib2FyZGluZy8ke2lkfWAsIG9wdGlvbnMpXG4gICAgICAgIC5zdWJzY3JpYmUoKGRhdGE6IGFueSkgPT4ge1xuICAgICAgICAgIHJlc29sdmUoZGF0YSk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIGFzeW5jIGdldEFsbE9uYm9hcmRpbmcocmVjYWxsID0gZmFsc2UpOiBQcm9taXNlPHN0cmluZyB8IGFueT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB0aGlzLl9vbmJvYXJkaW5nLnN1YnNjcmliZSgob25ib2FyZGluZykgPT4ge1xuICAgICAgICBpZiAoIW9uYm9hcmRpbmcgfHwgcmVjYWxsKSB7XG4gICAgICAgICAgY29uc3Qgb3B0aW9uczogYW55ID0ge1xuICAgICAgICAgICAgaGVhZGVyczogdGhpcy5oZWFkZXJcbiAgICAgICAgICB9O1xuICAgICAgICAgIHRoaXMuaHR0cC5nZXQoYCR7dGhpcy5lbmRwb2ludH0vb25ib2FyZGluZ2AsIG9wdGlvbnMpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKChkYXRhOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5vbmJvYXJkaW5nLm5leHQoZGF0YSlcbiAgICAgICAgICAgICAgcmVzb2x2ZShkYXRhKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlc29sdmUob25ib2FyZGluZylcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9KTtcbiAgfVxufVxuIl19