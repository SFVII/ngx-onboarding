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
        }, err => {
            this.onboarding.next([]);
        });
    }
    async downloadAttachment(attach) {
        return new Promise((resolve, reject) => {
            const path = `${this.endpoint.split('cases/onboarding')[0]}files-manager/attachment/${attach._id}`;
            this.getBuffer(path)
                .subscribe(response => {
                downLoadFile(response, `${attach.Name}.pdf`);
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
            this.http.post(`${this.endpoint}/contact`, data, options)
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
OnboardingService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.6", ngImport: i0, type: OnboardingService, deps: [{ token: '__NgxOnboarding__' }, { token: i1.HttpClient }], target: i0.ɵɵFactoryTarget.Injectable });
OnboardingService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.2.6", ngImport: i0, type: OnboardingService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.6", ngImport: i0, type: OnboardingService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: undefined, decorators: [{
                    type: Inject,
                    args: ['__NgxOnboarding__']
                }] }, { type: i1.HttpClient }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib25ib2FyZGluZy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvb25ib2FyZGluZy9zcmMvbGliL29uYm9hcmRpbmcuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQWMsV0FBVyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDL0QsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pFLE9BQU8sRUFBRSxlQUFlLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRWhELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQzs7O0FBR2hELE1BQU0sT0FBTyxpQkFBaUI7SUEyQjVCLFlBQXlDLE1BQTJCLEVBQVUsSUFBZ0I7UUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTtRQTFCOUYsYUFBUSxHQUFxQixJQUFJLE9BQU8sRUFBVyxDQUFDO1FBQzVDLFVBQUssR0FBNEIsSUFBSSxlQUFlLENBQVMsSUFBSSxDQUFDLENBQUM7UUFDbkUsV0FBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7UUFFbkMsc0JBQWlCLEdBQTRCLElBQUksZUFBZSxDQUFTLElBQUksQ0FBQyxDQUFDO1FBQy9FLHVCQUFrQixHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUM1RCxjQUFTLEdBQXlCLElBQUksZUFBZSxDQUFNLElBQUksQ0FBQyxDQUFDO1FBQ2pFLGVBQVUsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQzNDLG9CQUFlLEdBQXlCLElBQUksZUFBZSxDQUFNLElBQUksQ0FBQyxDQUFDO1FBQ3ZFLHFCQUFnQixHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDdkQsc0JBQWlCLEdBQXlCLElBQUks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SEEzQjVCLGlCQUFpQjsyRkFBakIsaUJBQWlCO2tCQUQ3QixVQUFVOzswQkE0QkksTUFBTTsyQkFBQyxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwSGVhZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlLCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IE9uYm9hcmRpbmdJbnRlcmZhY2UsIE9uYm9hcmRpbmdVc2VyIH0gZnJvbSAnLi4vaW50ZXJmYWNlL09uYm9hcmRpbmdJbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBkb3duTG9hZEZpbGUgfSBmcm9tICcuL2dsb2JhbC5saWJyYXJ5JztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIE9uYm9hcmRpbmdTZXJ2aWNlIHtcclxuICBjYW5FeGl0JDogU3ViamVjdDxib29sZWFuPiA9IG5ldyBTdWJqZWN0PGJvb2xlYW4+KCk7XHJcbiAgcHJpdmF0ZSB0b2tlbjogQmVoYXZpb3JTdWJqZWN0PHN0cmluZz4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0PHN0cmluZz4obnVsbCk7XHJcbiAgcHJpdmF0ZSBfdG9rZW4gPSB0aGlzLnRva2VuLmFzT2JzZXJ2YWJsZSgpO1xyXG5cclxuICBwcml2YXRlIG1lZGlhVG9rZW5TdWJqZWN0OiBCZWhhdmlvclN1YmplY3Q8c3RyaW5nPiA9IG5ldyBCZWhhdmlvclN1YmplY3Q8c3RyaW5nPihudWxsKTtcclxuICBwcml2YXRlIF9tZWRpYVRva2VuU3ViamVjdCA9IHRoaXMubWVkaWFUb2tlblN1YmplY3QuYXNPYnNlcnZhYmxlKCk7XHJcbiAgcHVibGljIHRlbXBsYXRlczogQmVoYXZpb3JTdWJqZWN0PGFueT4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0PGFueT4obnVsbCk7XHJcbiAgcHVibGljIF90ZW1wbGF0ZXMgPSB0aGlzLnRlbXBsYXRlcy5hc09ic2VydmFibGUoKTtcclxuICBwdWJsaWMgY3VycmVudFRlbXBsYXRlOiBCZWhhdmlvclN1YmplY3Q8YW55PiA9IG5ldyBCZWhhdmlvclN1YmplY3Q8YW55PihudWxsKTtcclxuICBwdWJsaWMgX2N1cnJlbnRUZW1wbGF0ZSA9IHRoaXMuY3VycmVudFRlbXBsYXRlLmFzT2JzZXJ2YWJsZSgpO1xyXG4gIHB1YmxpYyBjdXJyZW50T25ib2FyZGluZzogQmVoYXZpb3JTdWJqZWN0PGFueT4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0PGFueT4obnVsbCk7XHJcbiAgcHVibGljIF9jdXJyZW50T25ib2FyZGluZyA9IHRoaXMuY3VycmVudE9uYm9hcmRpbmcuYXNPYnNlcnZhYmxlKCk7XHJcbiAgcHVibGljIG9uYm9hcmRpbmc6IEJlaGF2aW9yU3ViamVjdDxhbnk+ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxhbnk+KG51bGwpO1xyXG4gIHB1YmxpYyBfb25ib2FyZGluZyA9IHRoaXMub25ib2FyZGluZy5hc09ic2VydmFibGUoKTtcclxuICBwdWJsaWMgY29udGFjdHM6IEJlaGF2aW9yU3ViamVjdDxhbnk+ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxhbnk+KG51bGwpO1xyXG4gIHB1YmxpYyBfY29udGFjdHMgPSB0aGlzLmNvbnRhY3RzLmFzT2JzZXJ2YWJsZSgpO1xyXG4gIHB1YmxpYyBhdXRoZW50aWNhdGlvbjogRXZlbnRFbWl0dGVyPE9uYm9hcmRpbmdVc2VyPiA9IG5ldyBFdmVudEVtaXR0ZXI8T25ib2FyZGluZ1VzZXI+KCk7XHJcbiAgcHJpdmF0ZSBoZWFkZXI6IEh0dHBIZWFkZXJzO1xyXG4gIHB1YmxpYyBsb2NhbGU6IHN0cmluZztcclxuICBwcml2YXRlIGVuZHBvaW50OiBzdHJpbmc7XHJcbiAgcHJpdmF0ZSBtZWRpYVRva2VuOiBzdHJpbmc7XHJcbiAgcHJpdmF0ZSB1c2VyOiBPbmJvYXJkaW5nVXNlcjtcclxuICBwdWJsaWMgbGFuZzogQmVoYXZpb3JTdWJqZWN0PGFueT4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0PGFueT4oJ2ZyJyk7XHJcbiAgcHVibGljIF9sYW5nID0gdGhpcy5sYW5nLmFzT2JzZXJ2YWJsZSgpO1xyXG4gIHB1YmxpYyBfYXV0aDogYm9vbGVhbjtcclxuICBwdWJsaWMgbWFpblBhdGg6IHN0cmluZyA9IFwiXCJcclxuICBjb25zdHJ1Y3RvcihASW5qZWN0KCdfX05neE9uYm9hcmRpbmdfXycpIGNvbmZpZzogT25ib2FyZGluZ0ludGVyZmFjZSwgcHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7XHJcbiAgICB0aGlzLmJ1aWxkSGVhZGVycygpO1xyXG4gICAgdGhpcy5pbml0SW5zdGFuY2UoY29uZmlnKTtcclxuICB9XHJcblxyXG5cclxuICBwcml2YXRlIGdldENvb2tpZShuYW1lOiBzdHJpbmcpIHtcclxuICAgIGxldCBjYTogQXJyYXk8c3RyaW5nPiA9IGRvY3VtZW50LmNvb2tpZS5zcGxpdCgnOycpO1xyXG4gICAgbGV0IGNhTGVuOiBudW1iZXIgPSBjYS5sZW5ndGg7XHJcbiAgICBsZXQgY29va2llTmFtZSA9IGAke25hbWV9PWA7XHJcbiAgICBsZXQgYzogc3RyaW5nO1xyXG5cclxuICAgIGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCBjYUxlbjsgaSArPSAxKSB7XHJcbiAgICAgIGMgPSBjYVtpXS5yZXBsYWNlKC9eXFxzKy9nLCAnJyk7XHJcbiAgICAgIGlmIChjLmluZGV4T2YoY29va2llTmFtZSkgPT0gMCkge1xyXG4gICAgICAgIHJldHVybiBjLnN1YnN0cmluZyhjb29raWVOYW1lLmxlbmd0aCwgYy5sZW5ndGgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICogQHByaXZhdGVcclxuICogR2VuZXJhdGUgSGVhZGVyIGZvciBiYWNrZW5kIGNhbGxcclxuICovXHJcbiAgcHJpdmF0ZSBidWlsZEhlYWRlcnMoKSB7XHJcbiAgICB0aGlzLl90b2tlbi5zdWJzY3JpYmUoKHRva2VuOiBzdHJpbmcpID0+IHtcclxuICAgICAgaWYgKHRva2VuKSB7XHJcbiAgICAgICAgY29uc3QgYmVhcmVyOiBzdHJpbmcgPSAnQmVhcmVyICcgKyB0b2tlbjtcclxuICAgICAgICB0aGlzLmhlYWRlciA9IG5ldyBIdHRwSGVhZGVycyh7XHJcbiAgICAgICAgICAnQXV0aG9yaXphdGlvbic6IGJlYXJlclxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnN0IHRva2VuID0gdGhpcy5nZXRDb29raWUoJ2F1dGhlbnRpY2F0aW9uJyk7XHJcbiAgICAgICAgY29uc3QgYmVhcmVyOiBzdHJpbmcgPSAnQmVhcmVyICcgKyB0b2tlbjtcclxuICAgICAgICB0aGlzLmhlYWRlciA9IG5ldyBIdHRwSGVhZGVycyh7XHJcbiAgICAgICAgICAnQXV0aG9yaXphdGlvbic6IGJlYXJlclxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcblxyXG4gICAgfSk7XHJcbiAgICB0aGlzLl9tZWRpYVRva2VuU3ViamVjdC5zdWJzY3JpYmUoKHRva2VuOiBzdHJpbmcpID0+IHtcclxuICAgICAgaWYgKHRva2VuKSB7XHJcbiAgICAgICAgdGhpcy5tZWRpYVRva2VuID0gdG9rZW5cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLm1lZGlhVG9rZW4gPSB0aGlzLmdldENvb2tpZSgnbWVkaWEtdG9rZW4nKTtcclxuICAgICAgfVxyXG5cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcblxyXG4gIC8qKlxyXG4gKiBAcGFyYW0gY29uZmlnXHJcbiAqIEBwcml2YXRlXHJcbiAqIEluaXRpYWxpemUgRGF0YSBmb3IgVXNlciBJbnN0YW5jZVxyXG4gKi9cclxuICBwcml2YXRlIGluaXRJbnN0YW5jZShjb25maWc6IE9uYm9hcmRpbmdJbnRlcmZhY2UpIHtcclxuICAgIHRoaXMuX2F1dGggPSAhIWNvbmZpZy5hdXRoO1xyXG4gICAgaWYgKGNvbmZpZy5lbmRwb2ludCkge1xyXG4gICAgICB0aGlzLmVuZHBvaW50ID0gY29uZmlnLmVuZHBvaW50O1xyXG4gICAgICB0aGlzLm1lZGlhVG9rZW4gPSBjb25maWcubWVkaWFUb2tlbjtcclxuICAgICAgaWYgKGNvbmZpZy5hdXRoKSB7XHJcbiAgICAgICAgdGhpcy5hdXRoZW50aWNhdGlvbi5zdWJzY3JpYmUoKHVzZXI6IE9uYm9hcmRpbmdVc2VyKSA9PiB7XHJcbiAgICAgICAgICBpZiAoIXVzZXIubGFuZyAmJiBjb25maWcubGFuZykge1xyXG4gICAgICAgICAgICB1c2VyLmxhbmcgPSBjb25maWcubGFuZztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHRoaXMubG9jYWxlID0gdXNlci5sYW5nO1xyXG4gICAgICAgICAgdGhpcy5sYW5nLm5leHQodGhpcy5sb2NhbGUgfHwgJ2ZyJyk7XHJcbiAgICAgICAgICBpZiAodXNlci50b2tlbikge1xyXG4gICAgICAgICAgICB0aGlzLnRva2VuLm5leHQodXNlci50b2tlbik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAodXNlci5tZWRpYVRva2VuKSB7XHJcbiAgICAgICAgICAgIHRoaXMubWVkaWFUb2tlblN1YmplY3QubmV4dCh1c2VyLm1lZGlhVG9rZW4pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgdGhpcy51c2VyID0gdXNlcjtcclxuICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIGlmIChjb25maWcubGFuZykge1xyXG4gICAgICAgIHRoaXMubG9jYWxlID0gY29uZmlnLmxhbmc7XHJcbiAgICAgICAgdGhpcy5sYW5nLm5leHQodGhpcy5sb2NhbGUgfHwgJ2ZyJyk7XHJcbiAgICAgICAgdGhpcy51c2VyID0ge1xyXG4gICAgICAgICAgbGFuZzogY29uZmlnLmxhbmcsXHJcbiAgICAgICAgICB0b2tlbjogY29uZmlnLnRva2VuLFxyXG4gICAgICAgICAgbWVkaWFUb2tlbjogY29uZmlnLm1lZGlhVG9rZW5cclxuICAgICAgICB9O1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChjb25maWcubGFuZykge1xyXG5cclxuICAgICAgICB0aGlzLmxvY2FsZSA9IGNvbmZpZy5sYW5nO1xyXG4gICAgICAgIHRoaXMubGFuZy5uZXh0KHRoaXMubG9jYWxlIHx8ICdmcicpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChjb25maWcudG9rZW4pIHtcclxuICAgICAgICB0aGlzLnRva2VuLm5leHQoY29uZmlnLnRva2VuKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIG5ldyBFcnJvcignUGxlYXNlIHByb3ZpZGUgZW5kcG9pbnQnKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gKiBAcHJpdmF0ZVxyXG4gKiBHZW5lcmF0ZSBSYW5kb20gdW5pcSBJZCBmb3IgS29udmVyc28gSW5zdGFuY2VcclxuICovXHJcbiAgcHJpdmF0ZSBndWlkKCkge1xyXG4gICAgbGV0IHJhbmRvbSA9ICgpID0+IHtcclxuICAgICAgcmV0dXJuIE1hdGguZmxvb3IoKDEgKyBNYXRoLnJhbmRvbSgpKSAqIDB4MTAwMDApXHJcbiAgICAgICAgLnRvU3RyaW5nKDE2KVxyXG4gICAgICAgIC5zdWJzdHJpbmcoMSk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIHJhbmRvbSgpICsgcmFuZG9tKCkgKyAnLScgKyByYW5kb20oKSArICctJyArIHJhbmRvbSgpICsgJy0nICsgcmFuZG9tKCkgKyAnLScgKyByYW5kb20oKSArIHJhbmRvbSgpICsgcmFuZG9tKCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICogU2VuZCBQcm9maWwgVG8gYmFja2VuZFxyXG4gKiBAUG9zdCBQcm9maWxcclxuICovXHJcbiAgcHVibGljIGFzeW5jIGNyZWF0ZVByb2ZpbChkYXRhOiBhbnkpOiBQcm9taXNlPHN0cmluZyB8IGFueT4ge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgY29uc3Qgb3B0aW9uczogYW55ID0ge1xyXG4gICAgICAgIGhlYWRlcnM6IHRoaXMuaGVhZGVyXHJcbiAgICAgIH07XHJcbiAgICAgIHRoaXMuaHR0cC5wb3N0KGAke3RoaXMuZW5kcG9pbnR9L3Byb2ZpbHNgLCBkYXRhLCBvcHRpb25zKVxyXG4gICAgICAgIC5zdWJzY3JpYmUoKGRhdGE6IGFueSkgPT4ge1xyXG4gICAgICAgICAgcmVzb2x2ZShkYXRhKTtcclxuICAgICAgICB9LCAoKSA9PiB7XHJcbiAgICAgICAgICByZXNvbHZlKGZhbHNlKTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGFzeW5jIHVwZGF0ZVByb2ZpbChkYXRhOiBhbnkpOiBQcm9taXNlPHN0cmluZyB8IGFueT4ge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgY29uc3Qgb3B0aW9uczogYW55ID0ge1xyXG4gICAgICAgIGhlYWRlcnM6IHRoaXMuaGVhZGVyXHJcbiAgICAgIH07XHJcbiAgICAgIHRoaXMuaHR0cC5wdXQoYCR7dGhpcy5lbmRwb2ludH0vcHJvZmlsc2AsIGRhdGEsIG9wdGlvbnMpXHJcbiAgICAgICAgLnN1YnNjcmliZSgoZGF0YTogYW55KSA9PiB7XHJcbiAgICAgICAgICByZXNvbHZlKGRhdGEpO1xyXG4gICAgICAgIH0sICgpID0+IHtcclxuICAgICAgICAgIHJlc29sdmUoZmFsc2UpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgYXN5bmMgZGVsZXRlUHJvZmlsKGlkOiBhbnkpOiBQcm9taXNlPHN0cmluZyB8IGFueT4ge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgY29uc3Qgb3B0aW9uczogYW55ID0ge1xyXG4gICAgICAgIGhlYWRlcnM6IHRoaXMuaGVhZGVyXHJcbiAgICAgIH07XHJcbiAgICAgIHRoaXMuaHR0cC5kZWxldGUoYCR7dGhpcy5lbmRwb2ludH0vcHJvZmlscy8ke2lkfWAsIG9wdGlvbnMpXHJcbiAgICAgICAgLnN1YnNjcmliZSgoZGF0YTogYW55KSA9PiB7XHJcbiAgICAgICAgICByZXNvbHZlKGRhdGEpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuXHJcbiAgcHVibGljIGdldEJ1ZmZlcihlbmRwb2ludDogc3RyaW5nKSB7XHJcbiAgICBjb25zdCBvcHRpb25zOiBhbnkgPSB7XHJcbiAgICAgIGhlYWRlcnM6IHRoaXMuaGVhZGVyXHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoZW5kcG9pbnQsIHsgcmVzcG9uc2VUeXBlOiAnYXJyYXlidWZmZXInLCAuLi5vcHRpb25zIH0pO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGFzeW5jIGdldFByb2ZpbChpZDogYW55KTogUHJvbWlzZTxzdHJpbmcgfCBhbnk+IHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIGNvbnN0IG9wdGlvbnM6IGFueSA9IHtcclxuICAgICAgICBoZWFkZXJzOiB0aGlzLmhlYWRlclxyXG4gICAgICB9O1xyXG4gICAgICB0aGlzLmh0dHAuZ2V0KGAke3RoaXMuZW5kcG9pbnR9L3Byb2ZpbHMvJHtpZH1gLCBvcHRpb25zKVxyXG4gICAgICAgIC5zdWJzY3JpYmUoKGRhdGE6IGFueSkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5jdXJyZW50VGVtcGxhdGUubmV4dChkYXRhKVxyXG4gICAgICAgICAgcmVzb2x2ZShkYXRhKTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGFzeW5jIGdldEFsbFByb2ZpbCgpOiBQcm9taXNlPHN0cmluZyB8IGFueT4ge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgY29uc3Qgb3B0aW9uczogYW55ID0ge1xyXG4gICAgICAgIGhlYWRlcnM6IHRoaXMuaGVhZGVyXHJcbiAgICAgIH07XHJcbiAgICAgIHRoaXMuaHR0cC5nZXQoYCR7dGhpcy5lbmRwb2ludH0vcHJvZmlsc2AsIG9wdGlvbnMpXHJcbiAgICAgICAgLnN1YnNjcmliZSgoZGF0YTogYW55KSA9PiB7XHJcbiAgICAgICAgICB0aGlzLnRlbXBsYXRlcy5uZXh0KGRhdGEpXHJcbiAgICAgICAgICByZXNvbHZlKGRhdGEpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gIHB1YmxpYyBhc3luYyBnZXRBbGxUYWdzKCk6IFByb21pc2U8c3RyaW5nIHwgYW55PiB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICBjb25zdCBvcHRpb25zOiBhbnkgPSB7XHJcbiAgICAgICAgaGVhZGVyczogdGhpcy5oZWFkZXJcclxuICAgICAgfTtcclxuICAgICAgdGhpcy5odHRwLmdldChgJHt0aGlzLmVuZHBvaW50fS90YWdzYCwgb3B0aW9ucylcclxuICAgICAgICAuc3Vic2NyaWJlKChkYXRhOiBhbnkpID0+IHtcclxuICAgICAgICAgIHJlc29sdmUoZGF0YSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBhc3luYyBnZXRDb250YWN0cygpOiBQcm9taXNlPHN0cmluZyB8IGFueT4ge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgY29uc3Qgb3B0aW9uczogYW55ID0ge1xyXG4gICAgICAgIGhlYWRlcnM6IHRoaXMuaGVhZGVyXHJcbiAgICAgIH07XHJcbiAgICAgIHRoaXMuX2NvbnRhY3RzLnN1YnNjcmliZSgoY29udGFjdHMpID0+IHtcclxuICAgICAgICBpZiAoIWNvbnRhY3RzKSB7XHJcbiAgICAgICAgICB0aGlzLmh0dHAuZ2V0KGAke3RoaXMuZW5kcG9pbnQuc3BsaXQoJy9vbmJvYXJkaW5nJylbMF19L2NvbnRhY3Qvc2l0ZUxpc3RgLCBvcHRpb25zKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKChkYXRhOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICB0aGlzLmNvbnRhY3RzLm5leHQoZGF0YS51c2VyTGlzdClcclxuICAgICAgICAgICAgICByZXNvbHZlKGRhdGEudXNlckxpc3QpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcmVzb2x2ZShjb250YWN0cylcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG5cclxuXHJcblxyXG4gIGFzeW5jIGFzaWduUHJvZmlsKCkge1xyXG5cclxuICB9XHJcblxyXG4gIGFzeW5jIGdldFRhZ3MoKSB7XHJcblxyXG4gIH1cclxuXHJcblxyXG4gIGFzeW5jIGdldENhdGVnb3J5KCkge1xyXG5cclxuICB9XHJcblxyXG5cclxuICAvLyBDUlVEIE9OQk9BUkRJTkdcclxuXHJcbiAgcHVibGljIGFzeW5jIGNyZWF0ZU9uYm9hcmRpbmcoZGF0YTogYW55KTogUHJvbWlzZTxzdHJpbmcgfCBhbnk+IHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIGNvbnN0IG9wdGlvbnM6IGFueSA9IHtcclxuICAgICAgICBoZWFkZXJzOiB0aGlzLmhlYWRlclxyXG4gICAgICB9O1xyXG4gICAgICB0aGlzLmh0dHAucG9zdChgJHt0aGlzLmVuZHBvaW50fS9vbmJvYXJkaW5nYCwgZGF0YSwgb3B0aW9ucylcclxuICAgICAgICAuc3Vic2NyaWJlKChkYXRhOiBhbnkpID0+IHtcclxuICAgICAgICAgIHJlc29sdmUoZGF0YSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBhc3luYyB1cGRhdGVPbmJvYXJkaW5nKGRhdGE6IGFueSk6IFByb21pc2U8c3RyaW5nIHwgYW55PiB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICBjb25zdCBvcHRpb25zOiBhbnkgPSB7XHJcbiAgICAgICAgaGVhZGVyczogdGhpcy5oZWFkZXJcclxuICAgICAgfTtcclxuICAgICAgdGhpcy5odHRwLnB1dChgJHt0aGlzLmVuZHBvaW50fS9vbmJvYXJkaW5nYCwgZGF0YSwgb3B0aW9ucylcclxuICAgICAgICAuc3Vic2NyaWJlKChkYXRhOiBhbnkpID0+IHtcclxuICAgICAgICAgIHJlc29sdmUoZGF0YSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBhc3luYyBkZWxldGVPbmJvYXJkaW5nKGlkOiBhbnkpOiBQcm9taXNlPHN0cmluZyB8IGFueT4ge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgY29uc3Qgb3B0aW9uczogYW55ID0ge1xyXG4gICAgICAgIGhlYWRlcnM6IHRoaXMuaGVhZGVyXHJcbiAgICAgIH07XHJcbiAgICAgIHRoaXMuaHR0cC5kZWxldGUoYCR7dGhpcy5lbmRwb2ludH0vb25ib2FyZGluZy8ke2lkfWAsIG9wdGlvbnMpXHJcbiAgICAgICAgLnN1YnNjcmliZSgoZGF0YTogYW55KSA9PiB7XHJcbiAgICAgICAgICByZXNvbHZlKGRhdGEpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuXHJcbiAgcHVibGljIGFzeW5jIGdldE9uYm9hcmRpbmcoaWQ6IGFueSk6IFByb21pc2U8c3RyaW5nIHwgYW55PiB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICBjb25zdCBvcHRpb25zOiBhbnkgPSB7XHJcbiAgICAgICAgaGVhZGVyczogdGhpcy5oZWFkZXJcclxuICAgICAgfTtcclxuICAgICAgdGhpcy5odHRwLmdldChgJHt0aGlzLmVuZHBvaW50fS9vbmJvYXJkaW5nLyR7aWR9YCwgb3B0aW9ucylcclxuICAgICAgICAuc3Vic2NyaWJlKChkYXRhOiBhbnkpID0+IHtcclxuICAgICAgICAgIHJlc29sdmUoZGF0YSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBhc3luYyBnZXRBbGxPbmJvYXJkaW5nKCk6IFByb21pc2U8c3RyaW5nIHwgYW55PiB7XHJcbiAgICByZXR1cm4gYXdhaXQgdGhpcy5odHRwLmdldChgJHt0aGlzLmVuZHBvaW50fS9vbmJvYXJkaW5nYCwge1xyXG4gICAgICBoZWFkZXJzOiB0aGlzLmhlYWRlclxyXG4gICAgfSkuc3Vic2NyaWJlKChkYXRhOiBhbnkpID0+IHtcclxuICAgICAgdGhpcy5vbmJvYXJkaW5nLm5leHQoZGF0YSlcclxuICAgIH0sIGVyciA9PiB7XHJcbiAgICAgIHRoaXMub25ib2FyZGluZy5uZXh0KFtdKVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuXHJcbiAgcHVibGljIGFzeW5jIGRvd25sb2FkQXR0YWNobWVudChhdHRhY2gpIHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIGNvbnN0IHBhdGggPSBgJHt0aGlzLmVuZHBvaW50LnNwbGl0KCdjYXNlcy9vbmJvYXJkaW5nJylbMF19ZmlsZXMtbWFuYWdlci9hdHRhY2htZW50LyR7YXR0YWNoLl9pZH1gO1xyXG4gICAgICB0aGlzLmdldEJ1ZmZlcihwYXRoKVxyXG4gICAgICAgIC5zdWJzY3JpYmUocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgZG93bkxvYWRGaWxlKHJlc3BvbnNlLCBgJHthdHRhY2guTmFtZX0ucGRmYClcclxuICAgICAgICAgIHJlc29sdmUodHJ1ZSlcclxuICAgICAgICB9LCBlcnIgPT4ge1xyXG4gICAgICAgICAgcmVzb2x2ZShmYWxzZSlcclxuICAgICAgICB9KVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIC8vIENyZWF0ZSBjb2xsYWJcclxuICBwdWJsaWMgYXN5bmMgY3JlYXRlQ29udGFjdChkYXRhOiBhbnkpOiBQcm9taXNlPHN0cmluZyB8IGFueT4ge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgY29uc3Qgb3B0aW9uczogYW55ID0ge1xyXG4gICAgICAgIGhlYWRlcnM6IHRoaXMuaGVhZGVyXHJcbiAgICAgIH07XHJcbiAgICAgIHRoaXMuaHR0cC5wb3N0KGAke3RoaXMuZW5kcG9pbnR9L2NvbnRhY3RgLCBkYXRhLCBvcHRpb25zKVxyXG4gICAgICAgIC5zdWJzY3JpYmUoKGRhdGE6IGFueSkgPT4ge1xyXG4gICAgICAgICAgcmVzb2x2ZSh7IGRhdGEsIHN1Y2Nlc3M6IHRydWUgfSk7XHJcbiAgICAgICAgfSwgZXJyb3IgPT4gcmVzb2x2ZSh7IGVycm9yLCBzdWNjZXNzOiBmYWxzZSB9KSlcclxuICAgIH0pO1xyXG4gIH1cclxuICBwdWJsaWMgYXN5bmMgZ2V0QWNjb3VudHMoKTogUHJvbWlzZTxzdHJpbmcgfCBhbnk+IHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIGNvbnN0IG9wdGlvbnM6IGFueSA9IHtcclxuICAgICAgICBoZWFkZXJzOiB0aGlzLmhlYWRlclxyXG4gICAgICB9O1xyXG4gICAgICB0aGlzLmh0dHAuZ2V0KGAke3RoaXMuZW5kcG9pbnQuc3BsaXQoJ2Nhc2VzL29uYm9hcmRpbmcnKVswXX0vYWNjb3VudHNgLCBvcHRpb25zKVxyXG4gICAgICAgIC5zdWJzY3JpYmUoKGRhdGE6IGFueSkgPT4ge1xyXG4gICAgICAgICAgcmVzb2x2ZShkYXRhLmRhdGEuYWNjb3VudHMpO1xyXG4gICAgICAgIH0sIGVycm9yID0+IHtcclxuICAgICAgICAgIHJlc29sdmUobnVsbClcclxuICAgICAgICB9KVxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuIl19