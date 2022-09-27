import { HttpHeaders } from '@angular/common/http';
import { Inject, Injectable, EventEmitter } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { downLoadFile } from './global.library';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class OnboardingService {
    constructor(config, http) {
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
        this.lang = new BehaviorSubject('fr');
        this._lang = this.lang.asObservable();
        this.mainPath = "";
        this.buildHeaders();
        this.initInstance(config);
    }
    getCookie(name) {
        let ca = document.cookie.split(';');
        let caLen = ca.length;
        let cookieName = `${name}=`;
        let c;
        for (let i = 0; i < caLen; i += 1) {
            c = ca[i].replace(/^\s+/g, '');
            if (c.indexOf(cookieName) == 0) {
                return c.substring(cookieName.length, c.length);
            }
        }
    }
    /**
   * @private
   * Generate Header for backend call
   */
    buildHeaders() {
        this._token.subscribe((token) => {
            if (token) {
                const bearer = 'Bearer ' + token;
                this.header = new HttpHeaders({
                    'Authorization': bearer
                });
            }
            else {
                const token = this.getCookie('authentication');
                const bearer = 'Bearer ' + token;
                this.header = new HttpHeaders({
                    'Authorization': bearer
                });
            }
        });
        this._mediaTokenSubject.subscribe((token) => {
            if (token) {
                this.mediaToken = token;
            }
            else {
                this.mediaToken = this.getCookie('media-token');
            }
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
            this.mediaToken = config.mediaToken;
            if (config.auth) {
                this.authentication.subscribe((user) => {
                    if (!user.lang && config.lang) {
                        user.lang = config.lang;
                    }
                    this.locale = user.lang;
                    this.lang.next(this.locale || 'fr');
                    if (user.token) {
                        this.token.next(user.token);
                    }
                    if (user.mediaToken) {
                        this.mediaTokenSubject.next(user.mediaToken);
                    }
                    this.user = user;
                });
            }
            else if (config.lang) {
                this.locale = config.lang;
                this.lang.next(this.locale || 'fr');
                this.user = {
                    lang: config.lang,
                    token: config.token,
                    mediaToken: config.mediaToken
                };
            }
            if (config.lang) {
                this.locale = config.lang;
                this.lang.next(this.locale || 'fr');
                console.log('langue-------------------', this.locale);
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
    async createProfil(data) {
        return new Promise((resolve, reject) => {
            const options = {
                headers: this.header
            };
            this.http.post(`${this.endpoint}/profils`, data, options)
                .subscribe((data) => {
                resolve(data);
            }, () => {
                resolve(false);
            });
        });
    }
    async updateProfil(data) {
        return new Promise((resolve, reject) => {
            const options = {
                headers: this.header
            };
            this.http.put(`${this.endpoint}/profils`, data, options)
                .subscribe((data) => {
                resolve(data);
            }, () => {
                resolve(false);
            });
        });
    }
    async deleteProfil(id) {
        return new Promise((resolve, reject) => {
            const options = {
                headers: this.header
            };
            this.http.delete(`${this.endpoint}/profils/${id}`, options)
                .subscribe((data) => {
                resolve(data);
            });
        });
    }
    getBuffer(endpoint) {
        const options = {
            headers: this.header
        };
        return this.http.get(endpoint, { responseType: 'arraybuffer', ...options });
    }
    async getProfil(id) {
        return new Promise((resolve, reject) => {
            const options = {
                headers: this.header
            };
            this.http.get(`${this.endpoint}/profils/${id}`, options)
                .subscribe((data) => {
                this.currentTemplate.next(data);
                resolve(data);
            });
        });
    }
    async getAllProfil() {
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
    }
    async getAllTags() {
        return new Promise((resolve, reject) => {
            const options = {
                headers: this.header
            };
            this.http.get(`${this.endpoint}/tags`, options)
                .subscribe((data) => {
                resolve(data);
            });
        });
    }
    async getContacts() {
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
    }
    async asignProfil() {
    }
    async getTags() {
    }
    async getCategory() {
    }
    // CRUD ONBOARDING
    async createOnboarding(data) {
        return new Promise((resolve, reject) => {
            const options = {
                headers: this.header
            };
            this.http.post(`${this.endpoint}/onboarding`, data, options)
                .subscribe((data) => {
                resolve(data);
            });
        });
    }
    async updateOnboarding(data) {
        return new Promise((resolve, reject) => {
            const options = {
                headers: this.header
            };
            this.http.put(`${this.endpoint}/onboarding`, data, options)
                .subscribe((data) => {
                resolve(data);
            });
        });
    }
    async deleteOnboarding(id) {
        return new Promise((resolve, reject) => {
            const options = {
                headers: this.header
            };
            this.http.delete(`${this.endpoint}/onboarding/${id}`, options)
                .subscribe((data) => {
                resolve(data);
            });
        });
    }
    async getOnboarding(id) {
        return new Promise((resolve, reject) => {
            const options = {
                headers: this.header
            };
            this.http.get(`${this.endpoint}/onboarding/${id}`, options)
                .subscribe((data) => {
                resolve(data);
            });
        });
    }
    async getAllOnboarding() {
        return await this.http.get(`${this.endpoint}/onboarding`, {
            headers: this.header
        }).subscribe((data) => {
            this.onboarding.next(data);
            console.log('-------------data-------------', data);
        }, err => {
            this.onboarding.next([]);
        });
    }
    async downloadAttachment(attach) {
        return new Promise((resolve, reject) => {
            const path = `${this.endpoint.split('cases/onboarding')[0]}files-manager/attachment/${attach._id}`;
            this.getBuffer(path)
                .subscribe(response => {
                console.log('-----------resssssss', response);
                downLoadFile(response, attach.ContentType, attach.Name);
                resolve(true);
            }, err => {
                resolve(false);
            });
        });
    }
    // Create collab
    async createContact(data) {
        return new Promise((resolve, reject) => {
            const options = {
                headers: this.header
            };
            this.http.post(`${this.endpoint.split('cases/onboarding')[0]}/contacts`, data, options)
                .subscribe((data) => {
                resolve({ data, success: true });
            }, error => resolve({ error, success: false }));
        });
    }
    async getAccounts() {
        return new Promise((resolve, reject) => {
            const options = {
                headers: this.header
            };
            this.http.get(`${this.endpoint.split('cases/onboarding')[0]}/accounts`, options)
                .subscribe((data) => {
                resolve(data.data.accounts);
            }, error => {
                resolve(null);
            });
        });
    }
}
OnboardingService.ɵfac = function OnboardingService_Factory(t) { return new (t || OnboardingService)(i0.ɵɵinject('__NgxOnboarding__'), i0.ɵɵinject(i1.HttpClient)); };
OnboardingService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: OnboardingService, factory: OnboardingService.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(OnboardingService, [{
        type: Injectable
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: ['__NgxOnboarding__']
            }] }, { type: i1.HttpClient }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib25ib2FyZGluZy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvb25ib2FyZGluZy9zcmMvbGliL29uYm9hcmRpbmcuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQWMsV0FBVyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDL0QsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pFLE9BQU8sRUFBRSxlQUFlLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRWhELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQzs7O0FBR2hELE1BQU0sT0FBTyxpQkFBaUI7SUEyQjVCLFlBQXlDLE1BQTJCLEVBQVUsSUFBZ0I7UUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTtRQTFCOUYsYUFBUSxHQUFxQixJQUFJLE9BQU8sRUFBVyxDQUFDO1FBQzVDLFVBQUssR0FBNEIsSUFBSSxlQUFlLENBQVMsSUFBSSxDQUFDLENBQUM7UUFDbkUsV0FBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7UUFFbkMsc0JBQWlCLEdBQTRCLElBQUksZUFBZSxDQUFTLElBQUksQ0FBQyxDQUFDO1FBQy9FLHVCQUFrQixHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUM1RCxjQUFTLEdBQXlCLElBQUksZUFBZSxDQUFNLElBQUksQ0FBQyxDQUFDO1FBQ2pFLGVBQVUsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQzNDLG9CQUFlLEdBQXlCLElBQUksZUFBZSxDQUFNLElBQUksQ0FBQyxDQUFDO1FBQ3ZFLHFCQUFnQixHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDdkQsc0JBQWlCLEdBQXlCLElBQUks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QUFTLENBQUMsQ0FBQyxJQUFTLEVBQUUsRUFBRTtnQkFDdkIsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDOUIsQ0FBQyxFQUFFLEtBQUssQ0FBQyxFQUFFO2dCQUNULE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQTtZQUNmLENBQUMsQ0FBQyxDQUFBO1FBQ04sQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDOztrRkFqWFUsaUJBQWlCLGNBMkJSLG1CQUFtQjt1RUEzQjVCLGlCQUFpQixXQUFqQixpQkFBaUI7dUZBQWpCLGlCQUFpQjtjQUQ3QixVQUFVOztzQkE0QkksTUFBTTt1QkFBQyxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwSGVhZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlLCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IE9uYm9hcmRpbmdJbnRlcmZhY2UsIE9uYm9hcmRpbmdVc2VyIH0gZnJvbSAnLi4vaW50ZXJmYWNlL09uYm9hcmRpbmdJbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBkb3duTG9hZEZpbGUgfSBmcm9tICcuL2dsb2JhbC5saWJyYXJ5JztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIE9uYm9hcmRpbmdTZXJ2aWNlIHtcclxuICBjYW5FeGl0JDogU3ViamVjdDxib29sZWFuPiA9IG5ldyBTdWJqZWN0PGJvb2xlYW4+KCk7XHJcbiAgcHJpdmF0ZSB0b2tlbjogQmVoYXZpb3JTdWJqZWN0PHN0cmluZz4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0PHN0cmluZz4obnVsbCk7XHJcbiAgcHJpdmF0ZSBfdG9rZW4gPSB0aGlzLnRva2VuLmFzT2JzZXJ2YWJsZSgpO1xyXG5cclxuICBwcml2YXRlIG1lZGlhVG9rZW5TdWJqZWN0OiBCZWhhdmlvclN1YmplY3Q8c3RyaW5nPiA9IG5ldyBCZWhhdmlvclN1YmplY3Q8c3RyaW5nPihudWxsKTtcclxuICBwcml2YXRlIF9tZWRpYVRva2VuU3ViamVjdCA9IHRoaXMubWVkaWFUb2tlblN1YmplY3QuYXNPYnNlcnZhYmxlKCk7XHJcbiAgcHVibGljIHRlbXBsYXRlczogQmVoYXZpb3JTdWJqZWN0PGFueT4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0PGFueT4obnVsbCk7XHJcbiAgcHVibGljIF90ZW1wbGF0ZXMgPSB0aGlzLnRlbXBsYXRlcy5hc09ic2VydmFibGUoKTtcclxuICBwdWJsaWMgY3VycmVudFRlbXBsYXRlOiBCZWhhdmlvclN1YmplY3Q8YW55PiA9IG5ldyBCZWhhdmlvclN1YmplY3Q8YW55PihudWxsKTtcclxuICBwdWJsaWMgX2N1cnJlbnRUZW1wbGF0ZSA9IHRoaXMuY3VycmVudFRlbXBsYXRlLmFzT2JzZXJ2YWJsZSgpO1xyXG4gIHB1YmxpYyBjdXJyZW50T25ib2FyZGluZzogQmVoYXZpb3JTdWJqZWN0PGFueT4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0PGFueT4obnVsbCk7XHJcbiAgcHVibGljIF9jdXJyZW50T25ib2FyZGluZyA9IHRoaXMuY3VycmVudE9uYm9hcmRpbmcuYXNPYnNlcnZhYmxlKCk7XHJcbiAgcHVibGljIG9uYm9hcmRpbmc6IEJlaGF2aW9yU3ViamVjdDxhbnk+ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxhbnk+KG51bGwpO1xyXG4gIHB1YmxpYyBfb25ib2FyZGluZyA9IHRoaXMub25ib2FyZGluZy5hc09ic2VydmFibGUoKTtcclxuICBwdWJsaWMgY29udGFjdHM6IEJlaGF2aW9yU3ViamVjdDxhbnk+ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxhbnk+KG51bGwpO1xyXG4gIHB1YmxpYyBfY29udGFjdHMgPSB0aGlzLmNvbnRhY3RzLmFzT2JzZXJ2YWJsZSgpO1xyXG4gIHB1YmxpYyBhdXRoZW50aWNhdGlvbjogRXZlbnRFbWl0dGVyPE9uYm9hcmRpbmdVc2VyPiA9IG5ldyBFdmVudEVtaXR0ZXI8T25ib2FyZGluZ1VzZXI+KCk7XHJcbiAgcHJpdmF0ZSBoZWFkZXI6IEh0dHBIZWFkZXJzO1xyXG4gIHB1YmxpYyBsb2NhbGU6IHN0cmluZztcclxuICBwcml2YXRlIGVuZHBvaW50OiBzdHJpbmc7XHJcbiAgcHJpdmF0ZSBtZWRpYVRva2VuOiBzdHJpbmc7XHJcbiAgcHJpdmF0ZSB1c2VyOiBPbmJvYXJkaW5nVXNlcjtcclxuICBwdWJsaWMgbGFuZzogQmVoYXZpb3JTdWJqZWN0PGFueT4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0PGFueT4oJ2ZyJyk7XHJcbiAgcHVibGljIF9sYW5nID0gdGhpcy5sYW5nLmFzT2JzZXJ2YWJsZSgpO1xyXG4gIHB1YmxpYyBfYXV0aDogYm9vbGVhbjtcclxuICBwdWJsaWMgbWFpblBhdGg6IHN0cmluZyA9IFwiXCJcclxuICBjb25zdHJ1Y3RvcihASW5qZWN0KCdfX05neE9uYm9hcmRpbmdfXycpIGNvbmZpZzogT25ib2FyZGluZ0ludGVyZmFjZSwgcHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7XHJcbiAgICB0aGlzLmJ1aWxkSGVhZGVycygpO1xyXG4gICAgdGhpcy5pbml0SW5zdGFuY2UoY29uZmlnKTtcclxuICB9XHJcblxyXG5cclxuICBwcml2YXRlIGdldENvb2tpZShuYW1lOiBzdHJpbmcpIHtcclxuICAgIGxldCBjYTogQXJyYXk8c3RyaW5nPiA9IGRvY3VtZW50LmNvb2tpZS5zcGxpdCgnOycpO1xyXG4gICAgbGV0IGNhTGVuOiBudW1iZXIgPSBjYS5sZW5ndGg7XHJcbiAgICBsZXQgY29va2llTmFtZSA9IGAke25hbWV9PWA7XHJcbiAgICBsZXQgYzogc3RyaW5nO1xyXG5cclxuICAgIGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCBjYUxlbjsgaSArPSAxKSB7XHJcbiAgICAgIGMgPSBjYVtpXS5yZXBsYWNlKC9eXFxzKy9nLCAnJyk7XHJcbiAgICAgIGlmIChjLmluZGV4T2YoY29va2llTmFtZSkgPT0gMCkge1xyXG4gICAgICAgIHJldHVybiBjLnN1YnN0cmluZyhjb29raWVOYW1lLmxlbmd0aCwgYy5sZW5ndGgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICogQHByaXZhdGVcclxuICogR2VuZXJhdGUgSGVhZGVyIGZvciBiYWNrZW5kIGNhbGxcclxuICovXHJcbiAgcHJpdmF0ZSBidWlsZEhlYWRlcnMoKSB7XHJcbiAgICB0aGlzLl90b2tlbi5zdWJzY3JpYmUoKHRva2VuOiBzdHJpbmcpID0+IHtcclxuICAgICAgaWYgKHRva2VuKSB7XHJcbiAgICAgICAgY29uc3QgYmVhcmVyOiBzdHJpbmcgPSAnQmVhcmVyICcgKyB0b2tlbjtcclxuICAgICAgICB0aGlzLmhlYWRlciA9IG5ldyBIdHRwSGVhZGVycyh7XHJcbiAgICAgICAgICAnQXV0aG9yaXphdGlvbic6IGJlYXJlclxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnN0IHRva2VuID0gdGhpcy5nZXRDb29raWUoJ2F1dGhlbnRpY2F0aW9uJyk7XHJcbiAgICAgICAgY29uc3QgYmVhcmVyOiBzdHJpbmcgPSAnQmVhcmVyICcgKyB0b2tlbjtcclxuICAgICAgICB0aGlzLmhlYWRlciA9IG5ldyBIdHRwSGVhZGVycyh7XHJcbiAgICAgICAgICAnQXV0aG9yaXphdGlvbic6IGJlYXJlclxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcblxyXG4gICAgfSk7XHJcbiAgICB0aGlzLl9tZWRpYVRva2VuU3ViamVjdC5zdWJzY3JpYmUoKHRva2VuOiBzdHJpbmcpID0+IHtcclxuICAgICAgaWYgKHRva2VuKSB7XHJcbiAgICAgICAgdGhpcy5tZWRpYVRva2VuID0gdG9rZW5cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLm1lZGlhVG9rZW4gPSB0aGlzLmdldENvb2tpZSgnbWVkaWEtdG9rZW4nKTtcclxuICAgICAgfVxyXG5cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcblxyXG4gIC8qKlxyXG4gKiBAcGFyYW0gY29uZmlnXHJcbiAqIEBwcml2YXRlXHJcbiAqIEluaXRpYWxpemUgRGF0YSBmb3IgVXNlciBJbnN0YW5jZVxyXG4gKi9cclxuICBwcml2YXRlIGluaXRJbnN0YW5jZShjb25maWc6IE9uYm9hcmRpbmdJbnRlcmZhY2UpIHtcclxuICAgIHRoaXMuX2F1dGggPSAhIWNvbmZpZy5hdXRoO1xyXG4gICAgaWYgKGNvbmZpZy5lbmRwb2ludCkge1xyXG4gICAgICB0aGlzLmVuZHBvaW50ID0gY29uZmlnLmVuZHBvaW50O1xyXG4gICAgICB0aGlzLm1lZGlhVG9rZW4gPSBjb25maWcubWVkaWFUb2tlbjtcclxuICAgICAgaWYgKGNvbmZpZy5hdXRoKSB7XHJcbiAgICAgICAgdGhpcy5hdXRoZW50aWNhdGlvbi5zdWJzY3JpYmUoKHVzZXI6IE9uYm9hcmRpbmdVc2VyKSA9PiB7XHJcbiAgICAgICAgICBpZiAoIXVzZXIubGFuZyAmJiBjb25maWcubGFuZykge1xyXG4gICAgICAgICAgICB1c2VyLmxhbmcgPSBjb25maWcubGFuZztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHRoaXMubG9jYWxlID0gdXNlci5sYW5nO1xyXG4gICAgICAgICAgdGhpcy5sYW5nLm5leHQodGhpcy5sb2NhbGUgfHwgJ2ZyJyk7XHJcbiAgICAgICAgICBpZiAodXNlci50b2tlbikge1xyXG4gICAgICAgICAgICB0aGlzLnRva2VuLm5leHQodXNlci50b2tlbik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAodXNlci5tZWRpYVRva2VuKSB7XHJcbiAgICAgICAgICAgIHRoaXMubWVkaWFUb2tlblN1YmplY3QubmV4dCh1c2VyLm1lZGlhVG9rZW4pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgdGhpcy51c2VyID0gdXNlcjtcclxuICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIGlmIChjb25maWcubGFuZykge1xyXG4gICAgICAgIHRoaXMubG9jYWxlID0gY29uZmlnLmxhbmc7XHJcbiAgICAgICAgdGhpcy5sYW5nLm5leHQodGhpcy5sb2NhbGUgfHwgJ2ZyJyk7XHJcbiAgICAgICAgdGhpcy51c2VyID0ge1xyXG4gICAgICAgICAgbGFuZzogY29uZmlnLmxhbmcsXHJcbiAgICAgICAgICB0b2tlbjogY29uZmlnLnRva2VuLFxyXG4gICAgICAgICAgbWVkaWFUb2tlbjogY29uZmlnLm1lZGlhVG9rZW5cclxuICAgICAgICB9O1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChjb25maWcubGFuZykge1xyXG5cclxuICAgICAgICB0aGlzLmxvY2FsZSA9IGNvbmZpZy5sYW5nO1xyXG4gICAgICAgIHRoaXMubGFuZy5uZXh0KHRoaXMubG9jYWxlIHx8ICdmcicpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdsYW5ndWUtLS0tLS0tLS0tLS0tLS0tLS0tJywgdGhpcy5sb2NhbGUpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChjb25maWcudG9rZW4pIHtcclxuICAgICAgICB0aGlzLnRva2VuLm5leHQoY29uZmlnLnRva2VuKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIG5ldyBFcnJvcignUGxlYXNlIHByb3ZpZGUgZW5kcG9pbnQnKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gKiBAcHJpdmF0ZVxyXG4gKiBHZW5lcmF0ZSBSYW5kb20gdW5pcSBJZCBmb3IgS29udmVyc28gSW5zdGFuY2VcclxuICovXHJcbiAgcHJpdmF0ZSBndWlkKCkge1xyXG4gICAgbGV0IHJhbmRvbSA9ICgpID0+IHtcclxuICAgICAgcmV0dXJuIE1hdGguZmxvb3IoKDEgKyBNYXRoLnJhbmRvbSgpKSAqIDB4MTAwMDApXHJcbiAgICAgICAgLnRvU3RyaW5nKDE2KVxyXG4gICAgICAgIC5zdWJzdHJpbmcoMSk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIHJhbmRvbSgpICsgcmFuZG9tKCkgKyAnLScgKyByYW5kb20oKSArICctJyArIHJhbmRvbSgpICsgJy0nICsgcmFuZG9tKCkgKyAnLScgKyByYW5kb20oKSArIHJhbmRvbSgpICsgcmFuZG9tKCk7XHJcbiAgfVxyXG5cclxuXHJcblxyXG4gIC8qKlxyXG4gKiBTZW5kIFByb2ZpbCBUbyBiYWNrZW5kXHJcbiAqIEBQb3N0IFByb2ZpbFxyXG4gKi9cclxuICBwdWJsaWMgYXN5bmMgY3JlYXRlUHJvZmlsKGRhdGE6IGFueSk6IFByb21pc2U8c3RyaW5nIHwgYW55PiB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICBjb25zdCBvcHRpb25zOiBhbnkgPSB7XHJcbiAgICAgICAgaGVhZGVyczogdGhpcy5oZWFkZXJcclxuICAgICAgfTtcclxuICAgICAgdGhpcy5odHRwLnBvc3QoYCR7dGhpcy5lbmRwb2ludH0vcHJvZmlsc2AsIGRhdGEsIG9wdGlvbnMpXHJcbiAgICAgICAgLnN1YnNjcmliZSgoZGF0YTogYW55KSA9PiB7XHJcbiAgICAgICAgICByZXNvbHZlKGRhdGEpO1xyXG4gICAgICAgIH0sICgpID0+IHtcclxuICAgICAgICAgIHJlc29sdmUoZmFsc2UpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgYXN5bmMgdXBkYXRlUHJvZmlsKGRhdGE6IGFueSk6IFByb21pc2U8c3RyaW5nIHwgYW55PiB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICBjb25zdCBvcHRpb25zOiBhbnkgPSB7XHJcbiAgICAgICAgaGVhZGVyczogdGhpcy5oZWFkZXJcclxuICAgICAgfTtcclxuICAgICAgdGhpcy5odHRwLnB1dChgJHt0aGlzLmVuZHBvaW50fS9wcm9maWxzYCwgZGF0YSwgb3B0aW9ucylcclxuICAgICAgICAuc3Vic2NyaWJlKChkYXRhOiBhbnkpID0+IHtcclxuICAgICAgICAgIHJlc29sdmUoZGF0YSk7XHJcbiAgICAgICAgfSwgKCkgPT4ge1xyXG4gICAgICAgICAgcmVzb2x2ZShmYWxzZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBhc3luYyBkZWxldGVQcm9maWwoaWQ6IGFueSk6IFByb21pc2U8c3RyaW5nIHwgYW55PiB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICBjb25zdCBvcHRpb25zOiBhbnkgPSB7XHJcbiAgICAgICAgaGVhZGVyczogdGhpcy5oZWFkZXJcclxuICAgICAgfTtcclxuICAgICAgdGhpcy5odHRwLmRlbGV0ZShgJHt0aGlzLmVuZHBvaW50fS9wcm9maWxzLyR7aWR9YCwgb3B0aW9ucylcclxuICAgICAgICAuc3Vic2NyaWJlKChkYXRhOiBhbnkpID0+IHtcclxuICAgICAgICAgIHJlc29sdmUoZGF0YSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG5cclxuICBwdWJsaWMgZ2V0QnVmZmVyKGVuZHBvaW50OiBzdHJpbmcpIHtcclxuICAgIGNvbnN0IG9wdGlvbnM6IGFueSA9IHtcclxuICAgICAgaGVhZGVyczogdGhpcy5oZWFkZXJcclxuICAgIH07XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldChlbmRwb2ludCwgeyByZXNwb25zZVR5cGU6ICdhcnJheWJ1ZmZlcicsIC4uLm9wdGlvbnMgfSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgYXN5bmMgZ2V0UHJvZmlsKGlkOiBhbnkpOiBQcm9taXNlPHN0cmluZyB8IGFueT4ge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgY29uc3Qgb3B0aW9uczogYW55ID0ge1xyXG4gICAgICAgIGhlYWRlcnM6IHRoaXMuaGVhZGVyXHJcbiAgICAgIH07XHJcbiAgICAgIHRoaXMuaHR0cC5nZXQoYCR7dGhpcy5lbmRwb2ludH0vcHJvZmlscy8ke2lkfWAsIG9wdGlvbnMpXHJcbiAgICAgICAgLnN1YnNjcmliZSgoZGF0YTogYW55KSA9PiB7XHJcbiAgICAgICAgICB0aGlzLmN1cnJlbnRUZW1wbGF0ZS5uZXh0KGRhdGEpXHJcbiAgICAgICAgICByZXNvbHZlKGRhdGEpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgYXN5bmMgZ2V0QWxsUHJvZmlsKCk6IFByb21pc2U8c3RyaW5nIHwgYW55PiB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICBjb25zdCBvcHRpb25zOiBhbnkgPSB7XHJcbiAgICAgICAgaGVhZGVyczogdGhpcy5oZWFkZXJcclxuICAgICAgfTtcclxuICAgICAgdGhpcy5odHRwLmdldChgJHt0aGlzLmVuZHBvaW50fS9wcm9maWxzYCwgb3B0aW9ucylcclxuICAgICAgICAuc3Vic2NyaWJlKChkYXRhOiBhbnkpID0+IHtcclxuICAgICAgICAgIHRoaXMudGVtcGxhdGVzLm5leHQoZGF0YSlcclxuICAgICAgICAgIHJlc29sdmUoZGF0YSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcbiAgcHVibGljIGFzeW5jIGdldEFsbFRhZ3MoKTogUHJvbWlzZTxzdHJpbmcgfCBhbnk+IHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIGNvbnN0IG9wdGlvbnM6IGFueSA9IHtcclxuICAgICAgICBoZWFkZXJzOiB0aGlzLmhlYWRlclxyXG4gICAgICB9O1xyXG4gICAgICB0aGlzLmh0dHAuZ2V0KGAke3RoaXMuZW5kcG9pbnR9L3RhZ3NgLCBvcHRpb25zKVxyXG4gICAgICAgIC5zdWJzY3JpYmUoKGRhdGE6IGFueSkgPT4ge1xyXG4gICAgICAgICAgcmVzb2x2ZShkYXRhKTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGFzeW5jIGdldENvbnRhY3RzKCk6IFByb21pc2U8c3RyaW5nIHwgYW55PiB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICBjb25zdCBvcHRpb25zOiBhbnkgPSB7XHJcbiAgICAgICAgaGVhZGVyczogdGhpcy5oZWFkZXJcclxuICAgICAgfTtcclxuICAgICAgdGhpcy5fY29udGFjdHMuc3Vic2NyaWJlKChjb250YWN0cykgPT4ge1xyXG4gICAgICAgIGlmICghY29udGFjdHMpIHtcclxuICAgICAgICAgIHRoaXMuaHR0cC5nZXQoYCR7dGhpcy5lbmRwb2ludC5zcGxpdCgnL29uYm9hcmRpbmcnKVswXX0vY29udGFjdC9zaXRlTGlzdGAsIG9wdGlvbnMpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoKGRhdGE6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgIHRoaXMuY29udGFjdHMubmV4dChkYXRhLnVzZXJMaXN0KVxyXG4gICAgICAgICAgICAgIHJlc29sdmUoZGF0YS51c2VyTGlzdCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICByZXNvbHZlKGNvbnRhY3RzKVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcblxyXG5cclxuXHJcbiAgYXN5bmMgYXNpZ25Qcm9maWwoKSB7XHJcblxyXG4gIH1cclxuXHJcbiAgYXN5bmMgZ2V0VGFncygpIHtcclxuXHJcbiAgfVxyXG5cclxuXHJcbiAgYXN5bmMgZ2V0Q2F0ZWdvcnkoKSB7XHJcblxyXG4gIH1cclxuXHJcblxyXG4gIC8vIENSVUQgT05CT0FSRElOR1xyXG5cclxuICBwdWJsaWMgYXN5bmMgY3JlYXRlT25ib2FyZGluZyhkYXRhOiBhbnkpOiBQcm9taXNlPHN0cmluZyB8IGFueT4ge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgY29uc3Qgb3B0aW9uczogYW55ID0ge1xyXG4gICAgICAgIGhlYWRlcnM6IHRoaXMuaGVhZGVyXHJcbiAgICAgIH07XHJcbiAgICAgIHRoaXMuaHR0cC5wb3N0KGAke3RoaXMuZW5kcG9pbnR9L29uYm9hcmRpbmdgLCBkYXRhLCBvcHRpb25zKVxyXG4gICAgICAgIC5zdWJzY3JpYmUoKGRhdGE6IGFueSkgPT4ge1xyXG4gICAgICAgICAgcmVzb2x2ZShkYXRhKTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGFzeW5jIHVwZGF0ZU9uYm9hcmRpbmcoZGF0YTogYW55KTogUHJvbWlzZTxzdHJpbmcgfCBhbnk+IHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIGNvbnN0IG9wdGlvbnM6IGFueSA9IHtcclxuICAgICAgICBoZWFkZXJzOiB0aGlzLmhlYWRlclxyXG4gICAgICB9O1xyXG4gICAgICB0aGlzLmh0dHAucHV0KGAke3RoaXMuZW5kcG9pbnR9L29uYm9hcmRpbmdgLCBkYXRhLCBvcHRpb25zKVxyXG4gICAgICAgIC5zdWJzY3JpYmUoKGRhdGE6IGFueSkgPT4ge1xyXG4gICAgICAgICAgcmVzb2x2ZShkYXRhKTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGFzeW5jIGRlbGV0ZU9uYm9hcmRpbmcoaWQ6IGFueSk6IFByb21pc2U8c3RyaW5nIHwgYW55PiB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICBjb25zdCBvcHRpb25zOiBhbnkgPSB7XHJcbiAgICAgICAgaGVhZGVyczogdGhpcy5oZWFkZXJcclxuICAgICAgfTtcclxuICAgICAgdGhpcy5odHRwLmRlbGV0ZShgJHt0aGlzLmVuZHBvaW50fS9vbmJvYXJkaW5nLyR7aWR9YCwgb3B0aW9ucylcclxuICAgICAgICAuc3Vic2NyaWJlKChkYXRhOiBhbnkpID0+IHtcclxuICAgICAgICAgIHJlc29sdmUoZGF0YSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG5cclxuICBwdWJsaWMgYXN5bmMgZ2V0T25ib2FyZGluZyhpZDogYW55KTogUHJvbWlzZTxzdHJpbmcgfCBhbnk+IHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIGNvbnN0IG9wdGlvbnM6IGFueSA9IHtcclxuICAgICAgICBoZWFkZXJzOiB0aGlzLmhlYWRlclxyXG4gICAgICB9O1xyXG4gICAgICB0aGlzLmh0dHAuZ2V0KGAke3RoaXMuZW5kcG9pbnR9L29uYm9hcmRpbmcvJHtpZH1gLCBvcHRpb25zKVxyXG4gICAgICAgIC5zdWJzY3JpYmUoKGRhdGE6IGFueSkgPT4ge1xyXG4gICAgICAgICAgcmVzb2x2ZShkYXRhKTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGFzeW5jIGdldEFsbE9uYm9hcmRpbmcoKTogUHJvbWlzZTxzdHJpbmcgfCBhbnk+IHtcclxuICAgIHJldHVybiBhd2FpdCB0aGlzLmh0dHAuZ2V0KGAke3RoaXMuZW5kcG9pbnR9L29uYm9hcmRpbmdgLCB7XHJcbiAgICAgIGhlYWRlcnM6IHRoaXMuaGVhZGVyXHJcbiAgICB9KS5zdWJzY3JpYmUoKGRhdGE6IGFueSkgPT4ge1xyXG4gICAgICB0aGlzLm9uYm9hcmRpbmcubmV4dChkYXRhKVxyXG4gICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLWRhdGEtLS0tLS0tLS0tLS0tJywgZGF0YSk7XHJcblxyXG4gICAgfSwgZXJyID0+IHtcclxuICAgICAgdGhpcy5vbmJvYXJkaW5nLm5leHQoW10pXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG5cclxuICBwdWJsaWMgYXN5bmMgZG93bmxvYWRBdHRhY2htZW50KGF0dGFjaCkge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgY29uc3QgcGF0aCA9IGAke3RoaXMuZW5kcG9pbnQuc3BsaXQoJ2Nhc2VzL29uYm9hcmRpbmcnKVswXX1maWxlcy1tYW5hZ2VyL2F0dGFjaG1lbnQvJHthdHRhY2guX2lkfWA7XHJcbiAgICAgIHRoaXMuZ2V0QnVmZmVyKHBhdGgpXHJcbiAgICAgICAgLnN1YnNjcmliZShyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS1yZXNzc3Nzc3MnLCByZXNwb25zZSk7XHJcbiAgICAgICAgICBkb3duTG9hZEZpbGUocmVzcG9uc2UsIGF0dGFjaC5Db250ZW50VHlwZSwgYXR0YWNoLk5hbWUpXHJcbiAgICAgICAgICByZXNvbHZlKHRydWUpXHJcbiAgICAgICAgfSwgZXJyID0+IHtcclxuICAgICAgICAgIHJlc29sdmUoZmFsc2UpXHJcbiAgICAgICAgfSlcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICAvLyBDcmVhdGUgY29sbGFiXHJcblxyXG4gIHB1YmxpYyBhc3luYyBjcmVhdGVDb250YWN0KGRhdGE6IGFueSk6IFByb21pc2U8c3RyaW5nIHwgYW55PiB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICBjb25zdCBvcHRpb25zOiBhbnkgPSB7XHJcbiAgICAgICAgaGVhZGVyczogdGhpcy5oZWFkZXJcclxuICAgICAgfTtcclxuICAgICAgdGhpcy5odHRwLnBvc3QoYCR7dGhpcy5lbmRwb2ludC5zcGxpdCgnY2FzZXMvb25ib2FyZGluZycpWzBdfS9jb250YWN0c2AsIGRhdGEsIG9wdGlvbnMpXHJcbiAgICAgICAgLnN1YnNjcmliZSgoZGF0YTogYW55KSA9PiB7XHJcbiAgICAgICAgICByZXNvbHZlKHsgZGF0YSwgc3VjY2VzczogdHJ1ZSB9KTtcclxuICAgICAgICB9LCBlcnJvciA9PiByZXNvbHZlKHsgZXJyb3IsIHN1Y2Nlc3M6IGZhbHNlIH0pKVxyXG4gICAgfSk7XHJcbiAgfVxyXG4gIHB1YmxpYyBhc3luYyBnZXRBY2NvdW50cygpOiBQcm9taXNlPHN0cmluZyB8IGFueT4ge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgY29uc3Qgb3B0aW9uczogYW55ID0ge1xyXG4gICAgICAgIGhlYWRlcnM6IHRoaXMuaGVhZGVyXHJcbiAgICAgIH07XHJcbiAgICAgIHRoaXMuaHR0cC5nZXQoYCR7dGhpcy5lbmRwb2ludC5zcGxpdCgnY2FzZXMvb25ib2FyZGluZycpWzBdfS9hY2NvdW50c2AsIG9wdGlvbnMpXHJcbiAgICAgICAgLnN1YnNjcmliZSgoZGF0YTogYW55KSA9PiB7XHJcbiAgICAgICAgICByZXNvbHZlKGRhdGEuZGF0YS5hY2NvdW50cyk7XHJcbiAgICAgICAgfSwgZXJyb3IgPT4ge1xyXG4gICAgICAgICAgcmVzb2x2ZShudWxsKVxyXG4gICAgICAgIH0pXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcblxyXG4iXX0=