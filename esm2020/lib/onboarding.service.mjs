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
        return this.http.get(endpoint, { responseType: 'arraybuffer' });
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
    async downloadAttachment(url, contentType, name) {
        const path = `${this.endpoint.split('onboarding')[0]}cases/getfile/sf?path=${url}&token=${this.mediaToken}`;
        this.getBuffer(path)
            .subscribe(response => downLoadFile(response, (contentType), name));
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
}
OnboardingService.ɵfac = function OnboardingService_Factory(t) { return new (t || OnboardingService)(i0.ɵɵinject('__NgxOnboarding__'), i0.ɵɵinject(i1.HttpClient)); };
OnboardingService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: OnboardingService, factory: OnboardingService.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(OnboardingService, [{
        type: Injectable
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: ['__NgxOnboarding__']
            }] }, { type: i1.HttpClient }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib25ib2FyZGluZy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvb25ib2FyZGluZy9zcmMvbGliL29uYm9hcmRpbmcuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQWMsV0FBVyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDL0QsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pFLE9BQU8sRUFBRSxlQUFlLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRWhELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQzs7O0FBR2hELE1BQU0sT0FBTyxpQkFBaUI7SUEyQjVCLFlBQXlDLE1BQTJCLEVBQVUsSUFBZ0I7UUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTtRQTFCOUYsYUFBUSxHQUFxQixJQUFJLE9BQU8sRUFBVyxDQUFDO1FBQzVDLFVBQUssR0FBNEIsSUFBSSxlQUFlLENBQVMsSUFBSSxDQUFDLENBQUM7UUFDbkUsV0FBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7UUFFbkMsc0JBQWlCLEdBQTRCLElBQUksZUFBZSxDQUFTLElBQUksQ0FBQyxDQUFDO1FBQy9FLHVCQUFrQixHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUM1RCxjQUFTLEdBQXlCLElBQUksZUFBZSxDQUFNLElBQUksQ0FBQyxDQUFDO1FBQ2pFLGVBQVUsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQzNDLG9CQUFlLEdBQXlCLElBQUksZUFBZSxDQUFNLElBQUksQ0FBQyxDQUFDO1FBQ3ZFLHFCQUFnQixHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDdkQsc0JBQWlCLEdBQXlCLElBQUksZUFBZSxDQUFNLElBQUksQ0FBQyxDQUFDO1FBQ3pFLHVCQUFrQixHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUMzRCxlQUFVLEdBQXlCLElBQUksZUFBZSxDQUFNLElBQUksQ0FBQyxDQUFDO1FBQ2xFLGdCQUFXLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUM3QyxhQUFRLEdBQXlCLElBQUksZUFBZSxDQUFNLElBQUksQ0FBQyxDQUFDO1FBQ2hFLGNBQVMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3pDLG1CQUFjLEdBQWlDLElBQUksWUFBWSxFQUFrQixDQUFDO1FBTWxGLFNBQUksR0FBeUIsSUFBSSxlQUFlLENBQU0sSUFBSSxDQUFDLENBQUM7UUFDNUQsVUFBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFFakMsYUFBUSxHQUFXLEVBQUUsQ0FBQTtRQUUxQixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBR08sU0FBUyxDQUFDLElBQVk7UUFDNUIsSUFBSSxFQUFFLEdBQWtCLFFBQVEsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ25ELElBQUksS0FBSyxHQUFXLEVBQUUsQ0FBQyxNQUFNLENBQUM7UUFDOUIsSUFBSSxVQUFVLEdBQUcsR0FBRyxJQUFJLEdBQUcsQ0FBQztRQUM1QixJQUFJLENBQVMsQ0FBQztRQUVkLEtBQUssSUFBSSxDQUFDLEdBQVcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUN6QyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDL0IsSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRTtnQkFDOUIsT0FBTyxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2FBQ2pEO1NBQ0Y7SUFDSCxDQUFDO0lBRUQ7OztLQUdDO0lBQ08sWUFBWTtRQUNsQixJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEtBQWEsRUFBRSxFQUFFO1lBQ3RDLElBQUksS0FBSyxFQUFFO2dCQUNULE1BQU0sTUFBTSxHQUFXLFNBQVMsR0FBRyxLQUFLLENBQUM7Z0JBQ3pDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxXQUFXLENBQUM7b0JBQzVCLGVBQWUsRUFBRSxNQUFNO2lCQUN4QixDQUFDLENBQUM7YUFDSjtpQkFBTTtnQkFDTCxNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLGdCQUFnQixDQUFDLENBQUM7Z0JBQy9DLE1BQU0sTUFBTSxHQUFXLFNBQVMsR0FBRyxLQUFLLENBQUM7Z0JBQ3pDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxXQUFXLENBQUM7b0JBQzVCLGVBQWUsRUFBRSxNQUFNO2lCQUN4QixDQUFDLENBQUM7YUFDSjtRQUVILENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFNBQVMsQ0FBQyxDQUFDLEtBQWEsRUFBRSxFQUFFO1lBQ2xELElBQUksS0FBSyxFQUFFO2dCQUNULElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFBO2FBQ3hCO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsQ0FBQzthQUNqRDtRQUVILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUdEOzs7O0tBSUM7SUFDTyxZQUFZLENBQUMsTUFBMkI7UUFDOUMsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQztRQUMzQixJQUFJLE1BQU0sQ0FBQyxRQUFRLEVBQUU7WUFDbkIsSUFBSSxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDO1lBQ2hDLElBQUksQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQztZQUNwQyxJQUFJLE1BQU0sQ0FBQyxJQUFJLEVBQUU7Z0JBQ2YsSUFBSSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFvQixFQUFFLEVBQUU7b0JBQ3JELElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLE1BQU0sQ0FBQyxJQUFJLEVBQUU7d0JBQzdCLElBQUksQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQztxQkFDekI7b0JBQ0QsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO29CQUN4QixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxDQUFDO29CQUNwQyxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7d0JBQ2QsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO3FCQUM3QjtvQkFDRCxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7d0JBQ25CLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO3FCQUM5QztvQkFDRCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztnQkFDbkIsQ0FBQyxDQUFDLENBQUM7YUFDSjtpQkFBTSxJQUFJLE1BQU0sQ0FBQyxJQUFJLEVBQUU7Z0JBQ3RCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQztnQkFDMUIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsQ0FBQztnQkFDcEMsSUFBSSxDQUFDLElBQUksR0FBRztvQkFDVixJQUFJLEVBQUUsTUFBTSxDQUFDLElBQUk7b0JBQ2pCLEtBQUssRUFBRSxNQUFNLENBQUMsS0FBSztvQkFDbkIsVUFBVSxFQUFFLE1BQU0sQ0FBQyxVQUFVO2lCQUM5QixDQUFDO2FBQ0g7WUFDRCxJQUFJLE1BQU0sQ0FBQyxJQUFJLEVBQUU7Z0JBRWYsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDO2dCQUMxQixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxDQUFDO2dCQUNwQyxPQUFPLENBQUMsR0FBRyxDQUFDLDJCQUEyQixFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQzthQUN2RDtZQUNELElBQUksTUFBTSxDQUFDLEtBQUssRUFBRTtnQkFDaEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQy9CO1NBQ0Y7YUFBTTtZQUNMLE9BQU8sSUFBSSxLQUFLLENBQUMseUJBQXlCLENBQUMsQ0FBQztTQUM3QztJQUNILENBQUM7SUFFRDs7O0tBR0M7SUFDTyxJQUFJO1FBQ1YsSUFBSSxNQUFNLEdBQUcsR0FBRyxFQUFFO1lBQ2hCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsR0FBRyxPQUFPLENBQUM7aUJBQzdDLFFBQVEsQ0FBQyxFQUFFLENBQUM7aUJBQ1osU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2xCLENBQUMsQ0FBQztRQUNGLE9BQU8sTUFBTSxFQUFFLEdBQUcsTUFBTSxFQUFFLEdBQUcsR0FBRyxHQUFHLE1BQU0sRUFBRSxHQUFHLEdBQUcsR0FBRyxNQUFNLEVBQUUsR0FBRyxHQUFHLEdBQUcsTUFBTSxFQUFFLEdBQUcsR0FBRyxHQUFHLE1BQU0sRUFBRSxHQUFHLE1BQU0sRUFBRSxHQUFHLE1BQU0sRUFBRSxDQUFDO0lBQ3ZILENBQUM7SUFJRDs7O0tBR0M7SUFDTSxLQUFLLENBQUMsWUFBWSxDQUFDLElBQVM7UUFDakMsT0FBTyxJQUFJLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRTtZQUNyQyxNQUFNLE9BQU8sR0FBUTtnQkFDbkIsT0FBTyxFQUFFLElBQUksQ0FBQyxNQUFNO2FBQ3JCLENBQUM7WUFDRixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLFVBQVUsRUFBRSxJQUFJLEVBQUUsT0FBTyxDQUFDO2lCQUN0RCxTQUFTLENBQUMsQ0FBQyxJQUFTLEVBQUUsRUFBRTtnQkFDdkIsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2hCLENBQUMsRUFBRSxHQUFHLEVBQUU7Z0JBQ04sT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ2pCLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRU0sS0FBSyxDQUFDLFlBQVksQ0FBQyxJQUFTO1FBQ2pDLE9BQU8sSUFBSSxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEVBQUU7WUFDckMsTUFBTSxPQUFPLEdBQVE7Z0JBQ25CLE9BQU8sRUFBRSxJQUFJLENBQUMsTUFBTTthQUNyQixDQUFDO1lBQ0YsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxVQUFVLEVBQUUsSUFBSSxFQUFFLE9BQU8sQ0FBQztpQkFDckQsU0FBUyxDQUFDLENBQUMsSUFBUyxFQUFFLEVBQUU7Z0JBQ3ZCLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNoQixDQUFDLEVBQUUsR0FBRyxFQUFFO2dCQUNOLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNqQixDQUFDLENBQUMsQ0FBQztRQUNQLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVNLEtBQUssQ0FBQyxZQUFZLENBQUMsRUFBTztRQUMvQixPQUFPLElBQUksT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFO1lBQ3JDLE1BQU0sT0FBTyxHQUFRO2dCQUNuQixPQUFPLEVBQUUsSUFBSSxDQUFDLE1BQU07YUFDckIsQ0FBQztZQUNGLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsWUFBWSxFQUFFLEVBQUUsRUFBRSxPQUFPLENBQUM7aUJBQ3hELFNBQVMsQ0FBQyxDQUFDLElBQVMsRUFBRSxFQUFFO2dCQUN2QixPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDaEIsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFHTSxTQUFTLENBQUMsUUFBZ0I7UUFDL0IsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsRUFBRSxZQUFZLEVBQUUsYUFBYSxFQUFFLENBQUMsQ0FBQztJQUNsRSxDQUFDO0lBRU0sS0FBSyxDQUFDLFNBQVMsQ0FBQyxFQUFPO1FBQzVCLE9BQU8sSUFBSSxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEVBQUU7WUFDckMsTUFBTSxPQUFPLEdBQVE7Z0JBQ25CLE9BQU8sRUFBRSxJQUFJLENBQUMsTUFBTTthQUNyQixDQUFDO1lBQ0YsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxZQUFZLEVBQUUsRUFBRSxFQUFFLE9BQU8sQ0FBQztpQkFDckQsU0FBUyxDQUFDLENBQUMsSUFBUyxFQUFFLEVBQUU7Z0JBQ3ZCLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO2dCQUMvQixPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDaEIsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFTSxLQUFLLENBQUMsWUFBWTtRQUN2QixPQUFPLElBQUksT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFO1lBQ3JDLE1BQU0sT0FBTyxHQUFRO2dCQUNuQixPQUFPLEVBQUUsSUFBSSxDQUFDLE1BQU07YUFDckIsQ0FBQztZQUNGLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsVUFBVSxFQUFFLE9BQU8sQ0FBQztpQkFDL0MsU0FBUyxDQUFDLENBQUMsSUFBUyxFQUFFLEVBQUU7Z0JBQ3ZCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO2dCQUN6QixPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDaEIsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDTSxLQUFLLENBQUMsVUFBVTtRQUNyQixPQUFPLElBQUksT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFO1lBQ3JDLE1BQU0sT0FBTyxHQUFRO2dCQUNuQixPQUFPLEVBQUUsSUFBSSxDQUFDLE1BQU07YUFDckIsQ0FBQztZQUNGLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsT0FBTyxFQUFFLE9BQU8sQ0FBQztpQkFDNUMsU0FBUyxDQUFDLENBQUMsSUFBUyxFQUFFLEVBQUU7Z0JBQ3ZCLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNoQixDQUFDLENBQUMsQ0FBQztRQUNQLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNNLEtBQUssQ0FBQyxXQUFXO1FBQ3RCLE9BQU8sSUFBSSxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEVBQUU7WUFDckMsTUFBTSxPQUFPLEdBQVE7Z0JBQ25CLE9BQU8sRUFBRSxJQUFJLENBQUMsTUFBTTthQUNyQixDQUFDO1lBQ0YsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxRQUFRLEVBQUUsRUFBRTtnQkFDcEMsSUFBSSxDQUFDLFFBQVEsRUFBRTtvQkFDYixJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxtQkFBbUIsRUFBRSxPQUFPLENBQUM7eUJBQ2hGLFNBQVMsQ0FBQyxDQUFDLElBQVMsRUFBRSxFQUFFO3dCQUN2QixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUE7d0JBQ2pDLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7b0JBQ3pCLENBQUMsQ0FBQyxDQUFDO2lCQUNOO3FCQUFNO29CQUNMLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQTtpQkFDbEI7WUFDSCxDQUFDLENBQUMsQ0FBQTtRQUNKLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUtELEtBQUssQ0FBQyxXQUFXO0lBRWpCLENBQUM7SUFFRCxLQUFLLENBQUMsT0FBTztJQUViLENBQUM7SUFHRCxLQUFLLENBQUMsV0FBVztJQUVqQixDQUFDO0lBR0Qsa0JBQWtCO0lBRVgsS0FBSyxDQUFDLGdCQUFnQixDQUFDLElBQVM7UUFDckMsT0FBTyxJQUFJLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRTtZQUNyQyxNQUFNLE9BQU8sR0FBUTtnQkFDbkIsT0FBTyxFQUFFLElBQUksQ0FBQyxNQUFNO2FBQ3JCLENBQUM7WUFDRixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLGFBQWEsRUFBRSxJQUFJLEVBQUUsT0FBTyxDQUFDO2lCQUN6RCxTQUFTLENBQUMsQ0FBQyxJQUFTLEVBQUUsRUFBRTtnQkFDdkIsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2hCLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRU0sS0FBSyxDQUFDLGdCQUFnQixDQUFDLElBQVM7UUFDckMsT0FBTyxJQUFJLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRTtZQUNyQyxNQUFNLE9BQU8sR0FBUTtnQkFDbkIsT0FBTyxFQUFFLElBQUksQ0FBQyxNQUFNO2FBQ3JCLENBQUM7WUFDRixJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLGFBQWEsRUFBRSxJQUFJLEVBQUUsT0FBTyxDQUFDO2lCQUN4RCxTQUFTLENBQUMsQ0FBQyxJQUFTLEVBQUUsRUFBRTtnQkFDdkIsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2hCLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRU0sS0FBSyxDQUFDLGdCQUFnQixDQUFDLEVBQU87UUFDbkMsT0FBTyxJQUFJLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRTtZQUNyQyxNQUFNLE9BQU8sR0FBUTtnQkFDbkIsT0FBTyxFQUFFLElBQUksQ0FBQyxNQUFNO2FBQ3JCLENBQUM7WUFDRixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLGVBQWUsRUFBRSxFQUFFLEVBQUUsT0FBTyxDQUFDO2lCQUMzRCxTQUFTLENBQUMsQ0FBQyxJQUFTLEVBQUUsRUFBRTtnQkFDdkIsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2hCLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBR00sS0FBSyxDQUFDLGFBQWEsQ0FBQyxFQUFPO1FBQ2hDLE9BQU8sSUFBSSxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEVBQUU7WUFDckMsTUFBTSxPQUFPLEdBQVE7Z0JBQ25CLE9BQU8sRUFBRSxJQUFJLENBQUMsTUFBTTthQUNyQixDQUFDO1lBQ0YsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxlQUFlLEVBQUUsRUFBRSxFQUFFLE9BQU8sQ0FBQztpQkFDeEQsU0FBUyxDQUFDLENBQUMsSUFBUyxFQUFFLEVBQUU7Z0JBQ3ZCLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNoQixDQUFDLENBQUMsQ0FBQztRQUNQLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVNLEtBQUssQ0FBQyxnQkFBZ0I7UUFDM0IsT0FBTyxNQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsYUFBYSxFQUFFO1lBQ3hELE9BQU8sRUFBRSxJQUFJLENBQUMsTUFBTTtTQUNyQixDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBUyxFQUFFLEVBQUU7WUFDekIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7WUFDMUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQ0FBZ0MsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUV0RCxDQUFDLEVBQUUsR0FBRyxDQUFDLEVBQUU7WUFDUCxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQTtRQUMxQixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFHTSxLQUFLLENBQUMsa0JBQWtCLENBQUMsR0FBVyxFQUFFLFdBQW1CLEVBQUUsSUFBWTtRQUM1RSxNQUFNLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyx5QkFBeUIsR0FBRyxVQUFVLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUM1RyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQzthQUNqQixTQUFTLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFLENBQUMsV0FBVyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUN4RSxDQUFDO0lBRUQsZ0JBQWdCO0lBRVQsS0FBSyxDQUFDLGFBQWEsQ0FBQyxJQUFTO1FBQ2xDLE9BQU8sSUFBSSxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEVBQUU7WUFDckMsTUFBTSxPQUFPLEdBQVE7Z0JBQ25CLE9BQU8sRUFBRSxJQUFJLENBQUMsTUFBTTthQUNyQixDQUFDO1lBQ0YsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxVQUFVLEVBQUUsSUFBSSxFQUFFLE9BQU8sQ0FBQztpQkFDdEQsU0FBUyxDQUFDLENBQUMsSUFBUyxFQUFFLEVBQUU7Z0JBQ3ZCLE9BQU8sQ0FBQyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztZQUNuQyxDQUFDLEVBQUUsS0FBSyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQTtRQUNuRCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7O2tGQXhWVSxpQkFBaUIsY0EyQlIsbUJBQW1CO3VFQTNCNUIsaUJBQWlCLFdBQWpCLGlCQUFpQjt1RkFBakIsaUJBQWlCO2NBRDdCLFVBQVU7O3NCQTRCSSxNQUFNO3VCQUFDLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBIZWFkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgT25ib2FyZGluZ0ludGVyZmFjZSwgT25ib2FyZGluZ1VzZXIgfSBmcm9tICcuLi9pbnRlcmZhY2UvT25ib2FyZGluZ0ludGVyZmFjZSc7XHJcbmltcG9ydCB7IGRvd25Mb2FkRmlsZSB9IGZyb20gJy4vZ2xvYmFsLmxpYnJhcnknO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgT25ib2FyZGluZ1NlcnZpY2Uge1xyXG4gIGNhbkV4aXQkOiBTdWJqZWN0PGJvb2xlYW4+ID0gbmV3IFN1YmplY3Q8Ym9vbGVhbj4oKTtcclxuICBwcml2YXRlIHRva2VuOiBCZWhhdmlvclN1YmplY3Q8c3RyaW5nPiA9IG5ldyBCZWhhdmlvclN1YmplY3Q8c3RyaW5nPihudWxsKTtcclxuICBwcml2YXRlIF90b2tlbiA9IHRoaXMudG9rZW4uYXNPYnNlcnZhYmxlKCk7XHJcblxyXG4gIHByaXZhdGUgbWVkaWFUb2tlblN1YmplY3Q6IEJlaGF2aW9yU3ViamVjdDxzdHJpbmc+ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxzdHJpbmc+KG51bGwpO1xyXG4gIHByaXZhdGUgX21lZGlhVG9rZW5TdWJqZWN0ID0gdGhpcy5tZWRpYVRva2VuU3ViamVjdC5hc09ic2VydmFibGUoKTtcclxuICBwdWJsaWMgdGVtcGxhdGVzOiBCZWhhdmlvclN1YmplY3Q8YW55PiA9IG5ldyBCZWhhdmlvclN1YmplY3Q8YW55PihudWxsKTtcclxuICBwdWJsaWMgX3RlbXBsYXRlcyA9IHRoaXMudGVtcGxhdGVzLmFzT2JzZXJ2YWJsZSgpO1xyXG4gIHB1YmxpYyBjdXJyZW50VGVtcGxhdGU6IEJlaGF2aW9yU3ViamVjdDxhbnk+ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxhbnk+KG51bGwpO1xyXG4gIHB1YmxpYyBfY3VycmVudFRlbXBsYXRlID0gdGhpcy5jdXJyZW50VGVtcGxhdGUuYXNPYnNlcnZhYmxlKCk7XHJcbiAgcHVibGljIGN1cnJlbnRPbmJvYXJkaW5nOiBCZWhhdmlvclN1YmplY3Q8YW55PiA9IG5ldyBCZWhhdmlvclN1YmplY3Q8YW55PihudWxsKTtcclxuICBwdWJsaWMgX2N1cnJlbnRPbmJvYXJkaW5nID0gdGhpcy5jdXJyZW50T25ib2FyZGluZy5hc09ic2VydmFibGUoKTtcclxuICBwdWJsaWMgb25ib2FyZGluZzogQmVoYXZpb3JTdWJqZWN0PGFueT4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0PGFueT4obnVsbCk7XHJcbiAgcHVibGljIF9vbmJvYXJkaW5nID0gdGhpcy5vbmJvYXJkaW5nLmFzT2JzZXJ2YWJsZSgpO1xyXG4gIHB1YmxpYyBjb250YWN0czogQmVoYXZpb3JTdWJqZWN0PGFueT4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0PGFueT4obnVsbCk7XHJcbiAgcHVibGljIF9jb250YWN0cyA9IHRoaXMuY29udGFjdHMuYXNPYnNlcnZhYmxlKCk7XHJcbiAgcHVibGljIGF1dGhlbnRpY2F0aW9uOiBFdmVudEVtaXR0ZXI8T25ib2FyZGluZ1VzZXI+ID0gbmV3IEV2ZW50RW1pdHRlcjxPbmJvYXJkaW5nVXNlcj4oKTtcclxuICBwcml2YXRlIGhlYWRlcjogSHR0cEhlYWRlcnM7XHJcbiAgcHVibGljIGxvY2FsZTogc3RyaW5nO1xyXG4gIHByaXZhdGUgZW5kcG9pbnQ6IHN0cmluZztcclxuICBwcml2YXRlIG1lZGlhVG9rZW46IHN0cmluZztcclxuICBwcml2YXRlIHVzZXI6IE9uYm9hcmRpbmdVc2VyO1xyXG4gIHB1YmxpYyBsYW5nOiBCZWhhdmlvclN1YmplY3Q8YW55PiA9IG5ldyBCZWhhdmlvclN1YmplY3Q8YW55PignZnInKTtcclxuICBwdWJsaWMgX2xhbmcgPSB0aGlzLmxhbmcuYXNPYnNlcnZhYmxlKCk7XHJcbiAgcHVibGljIF9hdXRoOiBib29sZWFuO1xyXG4gIHB1YmxpYyBtYWluUGF0aDogc3RyaW5nID0gXCJcIlxyXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoJ19fTmd4T25ib2FyZGluZ19fJykgY29uZmlnOiBPbmJvYXJkaW5nSW50ZXJmYWNlLCBwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQpIHtcclxuICAgIHRoaXMuYnVpbGRIZWFkZXJzKCk7XHJcbiAgICB0aGlzLmluaXRJbnN0YW5jZShjb25maWcpO1xyXG4gIH1cclxuXHJcblxyXG4gIHByaXZhdGUgZ2V0Q29va2llKG5hbWU6IHN0cmluZykge1xyXG4gICAgbGV0IGNhOiBBcnJheTxzdHJpbmc+ID0gZG9jdW1lbnQuY29va2llLnNwbGl0KCc7Jyk7XHJcbiAgICBsZXQgY2FMZW46IG51bWJlciA9IGNhLmxlbmd0aDtcclxuICAgIGxldCBjb29raWVOYW1lID0gYCR7bmFtZX09YDtcclxuICAgIGxldCBjOiBzdHJpbmc7XHJcblxyXG4gICAgZm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IGNhTGVuOyBpICs9IDEpIHtcclxuICAgICAgYyA9IGNhW2ldLnJlcGxhY2UoL15cXHMrL2csICcnKTtcclxuICAgICAgaWYgKGMuaW5kZXhPZihjb29raWVOYW1lKSA9PSAwKSB7XHJcbiAgICAgICAgcmV0dXJuIGMuc3Vic3RyaW5nKGNvb2tpZU5hbWUubGVuZ3RoLCBjLmxlbmd0aCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gKiBAcHJpdmF0ZVxyXG4gKiBHZW5lcmF0ZSBIZWFkZXIgZm9yIGJhY2tlbmQgY2FsbFxyXG4gKi9cclxuICBwcml2YXRlIGJ1aWxkSGVhZGVycygpIHtcclxuICAgIHRoaXMuX3Rva2VuLnN1YnNjcmliZSgodG9rZW46IHN0cmluZykgPT4ge1xyXG4gICAgICBpZiAodG9rZW4pIHtcclxuICAgICAgICBjb25zdCBiZWFyZXI6IHN0cmluZyA9ICdCZWFyZXIgJyArIHRva2VuO1xyXG4gICAgICAgIHRoaXMuaGVhZGVyID0gbmV3IEh0dHBIZWFkZXJzKHtcclxuICAgICAgICAgICdBdXRob3JpemF0aW9uJzogYmVhcmVyXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc3QgdG9rZW4gPSB0aGlzLmdldENvb2tpZSgnYXV0aGVudGljYXRpb24nKTtcclxuICAgICAgICBjb25zdCBiZWFyZXI6IHN0cmluZyA9ICdCZWFyZXIgJyArIHRva2VuO1xyXG4gICAgICAgIHRoaXMuaGVhZGVyID0gbmV3IEh0dHBIZWFkZXJzKHtcclxuICAgICAgICAgICdBdXRob3JpemF0aW9uJzogYmVhcmVyXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICB9KTtcclxuICAgIHRoaXMuX21lZGlhVG9rZW5TdWJqZWN0LnN1YnNjcmliZSgodG9rZW46IHN0cmluZykgPT4ge1xyXG4gICAgICBpZiAodG9rZW4pIHtcclxuICAgICAgICB0aGlzLm1lZGlhVG9rZW4gPSB0b2tlblxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMubWVkaWFUb2tlbiA9IHRoaXMuZ2V0Q29va2llKCdtZWRpYS10b2tlbicpO1xyXG4gICAgICB9XHJcblxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuXHJcbiAgLyoqXHJcbiAqIEBwYXJhbSBjb25maWdcclxuICogQHByaXZhdGVcclxuICogSW5pdGlhbGl6ZSBEYXRhIGZvciBVc2VyIEluc3RhbmNlXHJcbiAqL1xyXG4gIHByaXZhdGUgaW5pdEluc3RhbmNlKGNvbmZpZzogT25ib2FyZGluZ0ludGVyZmFjZSkge1xyXG4gICAgdGhpcy5fYXV0aCA9ICEhY29uZmlnLmF1dGg7XHJcbiAgICBpZiAoY29uZmlnLmVuZHBvaW50KSB7XHJcbiAgICAgIHRoaXMuZW5kcG9pbnQgPSBjb25maWcuZW5kcG9pbnQ7XHJcbiAgICAgIHRoaXMubWVkaWFUb2tlbiA9IGNvbmZpZy5tZWRpYVRva2VuO1xyXG4gICAgICBpZiAoY29uZmlnLmF1dGgpIHtcclxuICAgICAgICB0aGlzLmF1dGhlbnRpY2F0aW9uLnN1YnNjcmliZSgodXNlcjogT25ib2FyZGluZ1VzZXIpID0+IHtcclxuICAgICAgICAgIGlmICghdXNlci5sYW5nICYmIGNvbmZpZy5sYW5nKSB7XHJcbiAgICAgICAgICAgIHVzZXIubGFuZyA9IGNvbmZpZy5sYW5nO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgdGhpcy5sb2NhbGUgPSB1c2VyLmxhbmc7XHJcbiAgICAgICAgICB0aGlzLmxhbmcubmV4dCh0aGlzLmxvY2FsZSB8fCAnZnInKTtcclxuICAgICAgICAgIGlmICh1c2VyLnRva2VuKSB7XHJcbiAgICAgICAgICAgIHRoaXMudG9rZW4ubmV4dCh1c2VyLnRva2VuKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmICh1c2VyLm1lZGlhVG9rZW4pIHtcclxuICAgICAgICAgICAgdGhpcy5tZWRpYVRva2VuU3ViamVjdC5uZXh0KHVzZXIubWVkaWFUb2tlbik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB0aGlzLnVzZXIgPSB1c2VyO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IGVsc2UgaWYgKGNvbmZpZy5sYW5nKSB7XHJcbiAgICAgICAgdGhpcy5sb2NhbGUgPSBjb25maWcubGFuZztcclxuICAgICAgICB0aGlzLmxhbmcubmV4dCh0aGlzLmxvY2FsZSB8fCAnZnInKTtcclxuICAgICAgICB0aGlzLnVzZXIgPSB7XHJcbiAgICAgICAgICBsYW5nOiBjb25maWcubGFuZyxcclxuICAgICAgICAgIHRva2VuOiBjb25maWcudG9rZW4sXHJcbiAgICAgICAgICBtZWRpYVRva2VuOiBjb25maWcubWVkaWFUb2tlblxyXG4gICAgICAgIH07XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGNvbmZpZy5sYW5nKSB7XHJcblxyXG4gICAgICAgIHRoaXMubG9jYWxlID0gY29uZmlnLmxhbmc7XHJcbiAgICAgICAgdGhpcy5sYW5nLm5leHQodGhpcy5sb2NhbGUgfHwgJ2ZyJyk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2xhbmd1ZS0tLS0tLS0tLS0tLS0tLS0tLS0nLCB0aGlzLmxvY2FsZSk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGNvbmZpZy50b2tlbikge1xyXG4gICAgICAgIHRoaXMudG9rZW4ubmV4dChjb25maWcudG9rZW4pO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gbmV3IEVycm9yKCdQbGVhc2UgcHJvdmlkZSBlbmRwb2ludCcpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAqIEBwcml2YXRlXHJcbiAqIEdlbmVyYXRlIFJhbmRvbSB1bmlxIElkIGZvciBLb252ZXJzbyBJbnN0YW5jZVxyXG4gKi9cclxuICBwcml2YXRlIGd1aWQoKSB7XHJcbiAgICBsZXQgcmFuZG9tID0gKCkgPT4ge1xyXG4gICAgICByZXR1cm4gTWF0aC5mbG9vcigoMSArIE1hdGgucmFuZG9tKCkpICogMHgxMDAwMClcclxuICAgICAgICAudG9TdHJpbmcoMTYpXHJcbiAgICAgICAgLnN1YnN0cmluZygxKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gcmFuZG9tKCkgKyByYW5kb20oKSArICctJyArIHJhbmRvbSgpICsgJy0nICsgcmFuZG9tKCkgKyAnLScgKyByYW5kb20oKSArICctJyArIHJhbmRvbSgpICsgcmFuZG9tKCkgKyByYW5kb20oKTtcclxuICB9XHJcblxyXG5cclxuXHJcbiAgLyoqXHJcbiAqIFNlbmQgUHJvZmlsIFRvIGJhY2tlbmRcclxuICogQFBvc3QgUHJvZmlsXHJcbiAqL1xyXG4gIHB1YmxpYyBhc3luYyBjcmVhdGVQcm9maWwoZGF0YTogYW55KTogUHJvbWlzZTxzdHJpbmcgfCBhbnk+IHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIGNvbnN0IG9wdGlvbnM6IGFueSA9IHtcclxuICAgICAgICBoZWFkZXJzOiB0aGlzLmhlYWRlclxyXG4gICAgICB9O1xyXG4gICAgICB0aGlzLmh0dHAucG9zdChgJHt0aGlzLmVuZHBvaW50fS9wcm9maWxzYCwgZGF0YSwgb3B0aW9ucylcclxuICAgICAgICAuc3Vic2NyaWJlKChkYXRhOiBhbnkpID0+IHtcclxuICAgICAgICAgIHJlc29sdmUoZGF0YSk7XHJcbiAgICAgICAgfSwgKCkgPT4ge1xyXG4gICAgICAgICAgcmVzb2x2ZShmYWxzZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBhc3luYyB1cGRhdGVQcm9maWwoZGF0YTogYW55KTogUHJvbWlzZTxzdHJpbmcgfCBhbnk+IHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIGNvbnN0IG9wdGlvbnM6IGFueSA9IHtcclxuICAgICAgICBoZWFkZXJzOiB0aGlzLmhlYWRlclxyXG4gICAgICB9O1xyXG4gICAgICB0aGlzLmh0dHAucHV0KGAke3RoaXMuZW5kcG9pbnR9L3Byb2ZpbHNgLCBkYXRhLCBvcHRpb25zKVxyXG4gICAgICAgIC5zdWJzY3JpYmUoKGRhdGE6IGFueSkgPT4ge1xyXG4gICAgICAgICAgcmVzb2x2ZShkYXRhKTtcclxuICAgICAgICB9LCAoKSA9PiB7XHJcbiAgICAgICAgICByZXNvbHZlKGZhbHNlKTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGFzeW5jIGRlbGV0ZVByb2ZpbChpZDogYW55KTogUHJvbWlzZTxzdHJpbmcgfCBhbnk+IHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIGNvbnN0IG9wdGlvbnM6IGFueSA9IHtcclxuICAgICAgICBoZWFkZXJzOiB0aGlzLmhlYWRlclxyXG4gICAgICB9O1xyXG4gICAgICB0aGlzLmh0dHAuZGVsZXRlKGAke3RoaXMuZW5kcG9pbnR9L3Byb2ZpbHMvJHtpZH1gLCBvcHRpb25zKVxyXG4gICAgICAgIC5zdWJzY3JpYmUoKGRhdGE6IGFueSkgPT4ge1xyXG4gICAgICAgICAgcmVzb2x2ZShkYXRhKTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcblxyXG4gIHB1YmxpYyBnZXRCdWZmZXIoZW5kcG9pbnQ6IHN0cmluZykge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoZW5kcG9pbnQsIHsgcmVzcG9uc2VUeXBlOiAnYXJyYXlidWZmZXInIH0pO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGFzeW5jIGdldFByb2ZpbChpZDogYW55KTogUHJvbWlzZTxzdHJpbmcgfCBhbnk+IHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIGNvbnN0IG9wdGlvbnM6IGFueSA9IHtcclxuICAgICAgICBoZWFkZXJzOiB0aGlzLmhlYWRlclxyXG4gICAgICB9O1xyXG4gICAgICB0aGlzLmh0dHAuZ2V0KGAke3RoaXMuZW5kcG9pbnR9L3Byb2ZpbHMvJHtpZH1gLCBvcHRpb25zKVxyXG4gICAgICAgIC5zdWJzY3JpYmUoKGRhdGE6IGFueSkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5jdXJyZW50VGVtcGxhdGUubmV4dChkYXRhKVxyXG4gICAgICAgICAgcmVzb2x2ZShkYXRhKTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGFzeW5jIGdldEFsbFByb2ZpbCgpOiBQcm9taXNlPHN0cmluZyB8IGFueT4ge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgY29uc3Qgb3B0aW9uczogYW55ID0ge1xyXG4gICAgICAgIGhlYWRlcnM6IHRoaXMuaGVhZGVyXHJcbiAgICAgIH07XHJcbiAgICAgIHRoaXMuaHR0cC5nZXQoYCR7dGhpcy5lbmRwb2ludH0vcHJvZmlsc2AsIG9wdGlvbnMpXHJcbiAgICAgICAgLnN1YnNjcmliZSgoZGF0YTogYW55KSA9PiB7XHJcbiAgICAgICAgICB0aGlzLnRlbXBsYXRlcy5uZXh0KGRhdGEpXHJcbiAgICAgICAgICByZXNvbHZlKGRhdGEpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gIHB1YmxpYyBhc3luYyBnZXRBbGxUYWdzKCk6IFByb21pc2U8c3RyaW5nIHwgYW55PiB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICBjb25zdCBvcHRpb25zOiBhbnkgPSB7XHJcbiAgICAgICAgaGVhZGVyczogdGhpcy5oZWFkZXJcclxuICAgICAgfTtcclxuICAgICAgdGhpcy5odHRwLmdldChgJHt0aGlzLmVuZHBvaW50fS90YWdzYCwgb3B0aW9ucylcclxuICAgICAgICAuc3Vic2NyaWJlKChkYXRhOiBhbnkpID0+IHtcclxuICAgICAgICAgIHJlc29sdmUoZGF0YSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcbiAgcHVibGljIGFzeW5jIGdldENvbnRhY3RzKCk6IFByb21pc2U8c3RyaW5nIHwgYW55PiB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICBjb25zdCBvcHRpb25zOiBhbnkgPSB7XHJcbiAgICAgICAgaGVhZGVyczogdGhpcy5oZWFkZXJcclxuICAgICAgfTtcclxuICAgICAgdGhpcy5fY29udGFjdHMuc3Vic2NyaWJlKChjb250YWN0cykgPT4ge1xyXG4gICAgICAgIGlmICghY29udGFjdHMpIHtcclxuICAgICAgICAgIHRoaXMuaHR0cC5nZXQoYCR7dGhpcy5lbmRwb2ludC5zcGxpdCgnL29uYm9hcmRpbmcnKVswXX0vY29udGFjdC9zaXRlTGlzdGAsIG9wdGlvbnMpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoKGRhdGE6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgIHRoaXMuY29udGFjdHMubmV4dChkYXRhLnVzZXJMaXN0KVxyXG4gICAgICAgICAgICAgIHJlc29sdmUoZGF0YS51c2VyTGlzdCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICByZXNvbHZlKGNvbnRhY3RzKVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcblxyXG5cclxuXHJcbiAgYXN5bmMgYXNpZ25Qcm9maWwoKSB7XHJcblxyXG4gIH1cclxuXHJcbiAgYXN5bmMgZ2V0VGFncygpIHtcclxuXHJcbiAgfVxyXG5cclxuXHJcbiAgYXN5bmMgZ2V0Q2F0ZWdvcnkoKSB7XHJcblxyXG4gIH1cclxuXHJcblxyXG4gIC8vIENSVUQgT05CT0FSRElOR1xyXG5cclxuICBwdWJsaWMgYXN5bmMgY3JlYXRlT25ib2FyZGluZyhkYXRhOiBhbnkpOiBQcm9taXNlPHN0cmluZyB8IGFueT4ge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgY29uc3Qgb3B0aW9uczogYW55ID0ge1xyXG4gICAgICAgIGhlYWRlcnM6IHRoaXMuaGVhZGVyXHJcbiAgICAgIH07XHJcbiAgICAgIHRoaXMuaHR0cC5wb3N0KGAke3RoaXMuZW5kcG9pbnR9L29uYm9hcmRpbmdgLCBkYXRhLCBvcHRpb25zKVxyXG4gICAgICAgIC5zdWJzY3JpYmUoKGRhdGE6IGFueSkgPT4ge1xyXG4gICAgICAgICAgcmVzb2x2ZShkYXRhKTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGFzeW5jIHVwZGF0ZU9uYm9hcmRpbmcoZGF0YTogYW55KTogUHJvbWlzZTxzdHJpbmcgfCBhbnk+IHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIGNvbnN0IG9wdGlvbnM6IGFueSA9IHtcclxuICAgICAgICBoZWFkZXJzOiB0aGlzLmhlYWRlclxyXG4gICAgICB9O1xyXG4gICAgICB0aGlzLmh0dHAucHV0KGAke3RoaXMuZW5kcG9pbnR9L29uYm9hcmRpbmdgLCBkYXRhLCBvcHRpb25zKVxyXG4gICAgICAgIC5zdWJzY3JpYmUoKGRhdGE6IGFueSkgPT4ge1xyXG4gICAgICAgICAgcmVzb2x2ZShkYXRhKTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGFzeW5jIGRlbGV0ZU9uYm9hcmRpbmcoaWQ6IGFueSk6IFByb21pc2U8c3RyaW5nIHwgYW55PiB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICBjb25zdCBvcHRpb25zOiBhbnkgPSB7XHJcbiAgICAgICAgaGVhZGVyczogdGhpcy5oZWFkZXJcclxuICAgICAgfTtcclxuICAgICAgdGhpcy5odHRwLmRlbGV0ZShgJHt0aGlzLmVuZHBvaW50fS9vbmJvYXJkaW5nLyR7aWR9YCwgb3B0aW9ucylcclxuICAgICAgICAuc3Vic2NyaWJlKChkYXRhOiBhbnkpID0+IHtcclxuICAgICAgICAgIHJlc29sdmUoZGF0YSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG5cclxuICBwdWJsaWMgYXN5bmMgZ2V0T25ib2FyZGluZyhpZDogYW55KTogUHJvbWlzZTxzdHJpbmcgfCBhbnk+IHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIGNvbnN0IG9wdGlvbnM6IGFueSA9IHtcclxuICAgICAgICBoZWFkZXJzOiB0aGlzLmhlYWRlclxyXG4gICAgICB9O1xyXG4gICAgICB0aGlzLmh0dHAuZ2V0KGAke3RoaXMuZW5kcG9pbnR9L29uYm9hcmRpbmcvJHtpZH1gLCBvcHRpb25zKVxyXG4gICAgICAgIC5zdWJzY3JpYmUoKGRhdGE6IGFueSkgPT4ge1xyXG4gICAgICAgICAgcmVzb2x2ZShkYXRhKTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGFzeW5jIGdldEFsbE9uYm9hcmRpbmcoKTogUHJvbWlzZTxzdHJpbmcgfCBhbnk+IHtcclxuICAgIHJldHVybiBhd2FpdCB0aGlzLmh0dHAuZ2V0KGAke3RoaXMuZW5kcG9pbnR9L29uYm9hcmRpbmdgLCB7XHJcbiAgICAgIGhlYWRlcnM6IHRoaXMuaGVhZGVyXHJcbiAgICB9KS5zdWJzY3JpYmUoKGRhdGE6IGFueSkgPT4ge1xyXG4gICAgICB0aGlzLm9uYm9hcmRpbmcubmV4dChkYXRhKVxyXG4gICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLWRhdGEtLS0tLS0tLS0tLS0tJywgZGF0YSk7XHJcblxyXG4gICAgfSwgZXJyID0+IHtcclxuICAgICAgdGhpcy5vbmJvYXJkaW5nLm5leHQoW10pXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG5cclxuICBwdWJsaWMgYXN5bmMgZG93bmxvYWRBdHRhY2htZW50KHVybDogc3RyaW5nLCBjb250ZW50VHlwZTogc3RyaW5nLCBuYW1lOiBzdHJpbmcpIHtcclxuICAgIGNvbnN0IHBhdGggPSBgJHt0aGlzLmVuZHBvaW50LnNwbGl0KCdvbmJvYXJkaW5nJylbMF19Y2FzZXMvZ2V0ZmlsZS9zZj9wYXRoPSR7dXJsfSZ0b2tlbj0ke3RoaXMubWVkaWFUb2tlbn1gO1xyXG4gICAgdGhpcy5nZXRCdWZmZXIocGF0aClcclxuICAgICAgLnN1YnNjcmliZShyZXNwb25zZSA9PiBkb3duTG9hZEZpbGUocmVzcG9uc2UsIChjb250ZW50VHlwZSksIG5hbWUpKTtcclxuICB9XHJcblxyXG4gIC8vIENyZWF0ZSBjb2xsYWJcclxuXHJcbiAgcHVibGljIGFzeW5jIGNyZWF0ZUNvbnRhY3QoZGF0YTogYW55KTogUHJvbWlzZTxzdHJpbmcgfCBhbnk+IHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIGNvbnN0IG9wdGlvbnM6IGFueSA9IHtcclxuICAgICAgICBoZWFkZXJzOiB0aGlzLmhlYWRlclxyXG4gICAgICB9O1xyXG4gICAgICB0aGlzLmh0dHAucG9zdChgJHt0aGlzLmVuZHBvaW50fS9jb250YWN0YCwgZGF0YSwgb3B0aW9ucylcclxuICAgICAgICAuc3Vic2NyaWJlKChkYXRhOiBhbnkpID0+IHtcclxuICAgICAgICAgIHJlc29sdmUoeyBkYXRhLCBzdWNjZXNzOiB0cnVlIH0pO1xyXG4gICAgICAgIH0sIGVycm9yID0+IHJlc29sdmUoeyBlcnJvciwgc3VjY2VzczogZmFsc2UgfSkpXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcblxyXG4iXX0=